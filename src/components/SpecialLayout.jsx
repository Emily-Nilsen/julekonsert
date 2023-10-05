import Head from 'next/head'

export function SpecialLayout({ children, frontmatter }) {
  const generateSchema = () => {
    if (!frontmatter) return null

    const schema = {
      '@context': 'http://schema.org',
      '@type': 'Event',
      name: frontmatter?.title,
      description: frontmatter?.description,
      startDate: frontmatter?.date,
      endDate: new Date(
        new Date(frontmatter?.date).getTime() + frontmatter?.duration * 60000
      ).toISOString(),
      location: {
        '@type': 'Place',
        name: frontmatter?.locationName,
        address: frontmatter?.locationAddress,
      },
      image: frontmatter?.image,
      url: frontmatter?.url,
      performer: {
        '@type': 'Person',
        name: frontmatter?.performer,
      },
    }

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    )
  }

  return (
    <>
      <Head>{generateSchema()}</Head>
      <div className="special-layout">{children}</div>
    </>
  )
}
