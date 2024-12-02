import { useCallback, useEffect, useState } from 'react'
// import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

import { Hero } from '@/components/Hero'
import { Logo, Logomark, SpotifyIcon } from '@/components/Logo'
import { MobileNavigation } from '@/components/MobileNavigation'
import { Navigation } from '@/components/Navigation'
import { Prose } from '@/components/Prose'
import { Search } from '@/components/Search'
import { ThemeSelector } from '@/components/ThemeSelector'
import { Footer } from '@/components/Footer'

export const navigation = [
  {
    title: 'Nordic Tenors',
    links: [
      { title: 'Christmas with Nordic Tenors', href: '/' },
      {
        title: `Julekonserter 2024`,
        href: '/docs/julekonserter',
      },
      { title: 'Kontakt oss', href: '/docs/kontakt' },
    ],
  },
  {
    title: 'Agder',
    links: [
      { title: 'Arendal', href: '/docs/arendal' },
      { title: 'Flekkefjord', href: '/docs/flekkefjord' },
      { title: 'Kristiansand', href: '/docs/kristiansand' },
      // { title: 'Mandal', href: '/docs/mandal' },
    ],
  },
  {
    title: 'Akershus',
    links: [
      { title: 'Asker', href: '/docs/asker' },
      { title: 'Sandvika', href: '/docs/sandvika' },
    ],
  },
  {
    title: 'Innlandet',
    links: [
      // { title: 'Elverum', href: '/docs/elverum' },
      // { title: 'Hamar', href: '/docs/hamar' },
      { title: 'Hadeland', href: '/docs/hadeland' },
      {
        title: 'Lillehammer',
        href: '/docs/lillehammer',
      },
    ],
  },
  // {
  //   title: 'Møre og Romsdal',
  //   links: [
  //     { title: 'Fosnavåg', href: '/docs/fosnavaag' },
  //     { title: 'Ålesund', href: '/docs/aalesund' },
  //   ],
  // },
  {
    title: 'Nordland',
    links: [{ title: 'Bodø', href: '/docs/bodoe' }],
  },
  {
    title: 'Oslo',
    links: [{ title: 'Oslo', href: '/docs/oslo' }],
  },
  {
    title: 'Rogaland',
    links: [
      { title: 'Haugesund', href: '/docs/haugesund' },
      {
        title: 'Sandnes',
        href: '/docs/sandnes',
      },
      { title: 'Stavanger', href: '/docs/stavanger' },
    ],
  },
  {
    title: 'Troms og Finnmark',
    links: [{ title: 'Tromsø', href: '/docs/tromsoe' }],
  },
  {
    title: 'Trøndelag',
    links: [
      // { title: 'Grong', href: '/docs/grong' },
      { title: 'Stjørdal', href: '/docs/stjoerdal' },
      { title: 'Trondheim', href: '/docs/trondheim' },
    ],
  },
  {
    title: 'Vestfold og Telemark',
    links: [
      { title: 'Holmestrand', href: '/docs/holmestrand' },
      // { title: 'Horten', href: '/docs/horten' },
      { title: 'Larvik', href: '/docs/larvik' },
      { title: 'Nøtterøy', href: '/docs/noetteroey' },
      // { title: 'Sandefjord', href: '/docs/sandefjord' },
    ],
  },
  {
    title: 'Vestland',
    links: [
      { title: 'Bergen', href: '/docs/bergen' },
      // { title: 'Os', href: '/docs/os' },
      // { title: 'Tørvikbygd', href: '/docs/torvikbygd' },
      // { title: 'Voss', href: '/docs/voss' },
      // {
      //   title: 'Nordfjord',
      //   href: '/docs/nordfjord',
      // },
    ],
  },
  {
    title: 'Viken',
    links: [
      // { title: 'Askim', href: '/docs/askim' },
      {
        title: 'Drammen',
        href: '/docs/drammen',
      },
      { title: 'Fredrikstad', href: '/docs/fredrikstad' },
      // { title: 'Hønefoss', href: '/docs/honefoss' },
      // {
      //   title: 'Kongsberg',
      //   href: '/docs/kongsberg',
      // },
      // { title: 'Lillestrøm', href: '/docs/lillestroem' },
      // {
      //   title: 'Moss',
      //   href: '/docs/moss',
      // },

      // { title: 'Ullensaker', href: '/docs/ullensaker' },
    ],
  },
]

function Header({ navigation }) {
  let [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-gray-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8',
        isScrolled
          ? 'dark:bg-gray-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-gray-900/75'
          : 'dark:bg-transparent'
      )}
    >
      <div className="flex mr-6 lg:hidden">
        <MobileNavigation navigation={navigation} />
      </div>
      <div className="relative flex items-center flex-grow basis-0">
        <Link href="/" aria-label="Home page">
          <Logomark className="w-auto h-7 fill-red-900 dark:fill-white lg:hidden" />
          <Logo className="hidden h-2.5 w-auto fill-red-900 dark:fill-white md:h-3 lg:block" />
        </Link>
      </div>
      <div className="mr-6 -my-5 sm:mr-8 md:mr-0">
        <Search />
      </div>
      <div className="relative flex justify-end gap-6 basis-0 sm:gap-8 md:flex-grow">
        <ThemeSelector className="relative z-10" />
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://open.spotify.com/artist/2oYkhGSHICR2on9Vm91zV4?si=L9ARZcKlRXuJNMaM52RBRg&nd=1"
          className="group"
          aria-label="Spotify"
        >
          <SpotifyIcon className="w-6 h-6 transition-all duration-150 ease-in-out fill-red-800 group-hover:fill-red-900 dark:fill-white dark:group-hover:fill-amber-300" />
        </Link>
      </div>
    </header>
  )
}

function useTableOfContents(tableOfContents) {
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id)

  let getHeadings = useCallback((tableOfContents) => {
    return tableOfContents
      .flatMap((node) => [node.id, ...node.children.map((child) => child.id)])
      .map((id) => {
        let el = document.getElementById(id)
        if (!el) return

        let style = window.getComputedStyle(el)
        let scrollMt = parseFloat(style.scrollMarginTop)

        let top = window.scrollY + el.getBoundingClientRect().top - scrollMt
        return { id, top }
      })
  }, [])

  useEffect(() => {
    if (tableOfContents.length === 0) return
    let headings = getHeadings(tableOfContents)
    function onScroll() {
      let top = window.scrollY
      let current = headings[0].id
      for (let heading of headings) {
        if (top >= heading.top) {
          current = heading.id
        } else {
          break
        }
      }
      setCurrentSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [getHeadings, tableOfContents])

  return currentSection
}

export function Layout({ children, title, tableOfContents, frontmatter }) {
  let layoutType = frontmatter?.layout || 'default'

  // Generate JSON-LD schema for each concert page

  let router = useRouter()
  let isHomePage = router.pathname === '/'

  let allLinks = navigation.flatMap((section) => section.links)
  let linkIndex = allLinks.findIndex((link) => link.href === router.pathname)
  let previousPage = allLinks[linkIndex - 1]
  let nextPage = allLinks[linkIndex + 1]
  let section = navigation.find((section) =>
    section.links.find((link) => link.href === router.pathname)
  )
  let currentSection = useTableOfContents(tableOfContents)

  function isActive(section) {
    if (section.id === currentSection) {
      return true
    }
    if (!section.children) {
      return false
    }
    return section.children.findIndex(isActive) > -1
  }

  return (
    <>
      <Header navigation={navigation} />

      {isHomePage && <Hero />}

      <div className="relative flex justify-center mx-auto max-w-8xl sm:px-2 lg:px-8 xl:px-12">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="absolute inset-y-0 right-0 w-[50vw] bg-gray-50 dark:hidden" />
          <div className="absolute bottom-0 right-0 hidden w-px h-12 top-16 bg-gradient-to-t from-gray-800 dark:block" />
          <div className="absolute bottom-0 right-0 hidden w-px bg-gray-800 top-28 dark:block" />
          <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
            <Navigation navigation={navigation} />
          </div>
        </div>
        <div className="flex-auto max-w-2xl min-w-0 px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
          <article>
            {(title || section) && (
              <header className="space-y-1 mb-9">
                {section && (
                  <p className="text-base font-semibold text-red-800 dark:text-amber-300">
                    {section.title}
                  </p>
                )}
                {title && (
                  <h1 className="text-3xl font-semibold tracking-tight text-gray-900 font-display dark:text-white">
                    {title}
                  </h1>
                )}
              </header>
            )}
            <Prose>{children}</Prose>
          </article>

          <dl className="flex pt-6 mt-12 border-t border-gray-200 dark:border-gray-800">
            {previousPage && (
              <div>
                <dt className="text-base font-medium text-gray-900 dark:text-white">
                  Forrige
                </dt>
                <dd className="mt-1">
                  <Link
                    href={previousPage.href}
                    className="text-base font-semibold text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <span aria-hidden="true">&larr;</span> {previousPage.title}
                  </Link>
                </dd>
              </div>
            )}
            {nextPage && (
              <div className="ml-auto text-right">
                <dt className="text-base font-medium text-gray-900 dark:text-white">
                  Neste
                </dt>
                <dd className="mt-1">
                  <Link
                    href={nextPage.href}
                    className="text-base font-semibold text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    {nextPage.title} <span aria-hidden="true">&rarr;</span>
                  </Link>
                </dd>
              </div>
            )}
          </dl>
        </div>
        <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
          <nav aria-labelledby="on-this-page-title" className="w-56">
            {tableOfContents.length > 0 && (
              <>
                <h2
                  id="on-this-page-title"
                  className="text-base font-medium text-gray-900 font-display dark:text-white"
                >
                  På denne siden
                </h2>
                <ol role="list" className="mt-4 space-y-3 text-base">
                  {tableOfContents.map((section) => (
                    <li key={section.id}>
                      <p>
                        <Link
                          href={`#${section.id}`}
                          className={clsx(
                            isActive(section)
                              ? 'text-red-800 dark:text-amber-300'
                              : 'font-normal text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                          )}
                        >
                          {section.title}
                        </Link>
                      </p>
                      {section.children.length > 0 && (
                        <ol
                          role="list"
                          className="pl-5 mt-2 space-y-3 text-gray-500 dark:text-gray-400"
                        >
                          {section.children.map((subSection) => (
                            <li key={subSection.id}>
                              <Link
                                href={`#${subSection.id}`}
                                className={
                                  isActive(subSection)
                                    ? 'text-red-800 dark:text-amber-300'
                                    : 'hover:text-gray-600 dark:hover:text-gray-300'
                                }
                              >
                                {subSection.title}
                              </Link>
                            </li>
                          ))}
                        </ol>
                      )}
                    </li>
                  ))}
                </ol>
              </>
            )}
          </nav>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
