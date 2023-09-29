import Head from 'next/head'
import { slugifyWithCounter } from '@sindresorhus/slugify'
// Import the useRouter hook
import { useRouter } from 'next/router'
import { Layout } from '@/components/Layout'

import 'focus-visible'
import '@/styles/tailwind.css'

function getNodeText(node) {
  let text = ''
  for (let child of node.children ?? []) {
    if (typeof child === 'string') {
      text += child
    }
    text += getNodeText(child)
  }
  return text
}

function collectHeadings(nodes, slugify = slugifyWithCounter()) {
  let sections = []

  for (let node of nodes) {
    if (node.name === 'h2' || node.name === 'h3') {
      let title = getNodeText(node)
      if (title) {
        let id = slugify(title)
        node.attributes.id = id
        if (node.name === 'h3') {
          if (!sections[sections.length - 1]) {
            throw new Error(
              'Cannot add `h3` to table of contents without a preceding `h2`'
            )
          }
          sections[sections.length - 1].children.push({
            ...node.attributes,
            title,
          })
        } else {
          sections.push({ ...node.attributes, title, children: [] })
        }
      }
    }

    sections.push(...collectHeadings(node.children ?? [], slugify))
  }

  return sections
}

export default function App({ Component, pageProps }) {
  let title = pageProps.markdoc?.frontmatter.title

  let pageTitle =
    pageProps.markdoc?.frontmatter.pageTitle ||
    `${pageProps.markdoc?.frontmatter.title} | Julekonserter med Nordic Tenors - 2023`

  let description = pageProps.markdoc?.frontmatter.description

  // Get the current pathname using useRouter
  const { pathname } = useRouter()

  let tableOfContents = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : []

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {description && <meta name="description" content={description} />}
        <link
          rel="icon"
          href="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Julekonsert/julekonsert_favicon_c1iul8.webp"
        />
        {/* Set a dynamic canonical URL based on the current pathname */}
        <link
          rel="canonical"
          href={`https://julekonsert.com${pathname}`}
          key="canonical"
        />
        {/* New OG meta tags */}
        <meta property="og:title" content="Christmas with Nordic Tenors 2023" />
        <meta
          property="og:description"
          content="Velkommen skal du være til julekonsert med Nordic Tenors i 2023!"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Julekonsert/Facebook_poster_ssyqkp.webp" // Replace with the URL of your desired image
        />
      </Head>
      <Layout title={title} tableOfContents={tableOfContents}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
