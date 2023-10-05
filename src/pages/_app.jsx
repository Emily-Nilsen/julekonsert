import Head from 'next/head'
import { slugifyWithCounter } from '@sindresorhus/slugify'
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
  const title = pageProps.markdoc?.frontmatter.title
  const pageTitle =
    pageProps.markdoc?.frontmatter.pageTitle ||
    `${pageProps.markdoc?.frontmatter.title} | Julekonserter med Nordic Tenors - 2023`
  const description = pageProps.markdoc?.frontmatter.description
  const { pathname } = useRouter()
  const tableOfContents = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : []

  // Validate date and time
  const startDate = new Date(pageProps.markdoc?.frontmatter.date)
  const endDate = new Date(
    startDate.getTime() + pageProps.markdoc?.frontmatter.duration * 60000
  )

  const schema = pageProps.markdoc?.frontmatter
    ? startDate &&
      !isNaN(startDate.getTime()) &&
      endDate &&
      !isNaN(endDate.getTime())
      ? {
          '@context': 'http://schema.org',
          '@type': 'Event',
          name: title,
          description,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          location: {
            '@type': 'Place',
            name: pageProps.markdoc?.frontmatter.locationName,
            address: pageProps.markdoc?.frontmatter.locationAddress,
          },
          image: pageProps.markdoc?.frontmatter.image,
          url: pageProps.markdoc?.frontmatter.url,
          performer: {
            '@type': 'Person',
            name: pageProps.markdoc?.frontmatter.performer,
          },
        }
      : null
    : null

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {description && <meta name="description" content={description} />}
        <link
          rel="icon"
          href="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Julekonsert/julekonsert_favicon_c1iul8.webp"
        />
        <link
          rel="canonical"
          href={`https://julekonsert.com${pathname}`}
          key="canonical"
        />
        <meta property="og:title" content="Christmas with Nordic Tenors 2023" />
        <meta
          property="og:description"
          content="Velkommen skal du være til julekonsert med Nordic Tenors i 2023!"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Julekonsert/Facebook_poster_ssyqkp.webp"
        />
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}
      </Head>
      <Layout title={title} tableOfContents={tableOfContents}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
