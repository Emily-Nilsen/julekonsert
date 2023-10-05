export function SpecialLayout({ children, frontmatter }) {
  // Generate JSON-LD schema directly here
  const schema = frontmatter
    ? {
        '@context': 'http://schema.org',
        '@type': 'Event',
        name: frontmatter.title,
        description: frontmatter.description,
        startDate: frontmatter.date,
        endDate: new Date(
          new Date(frontmatter.date).getTime() + frontmatter.duration * 60000
        ).toISOString(),
        location: {
          '@type': 'Place',
          name: frontmatter.locationName,
          address: frontmatter.locationAddress,
        },
        image: frontmatter.image,
        url: frontmatter.url,
        performer: {
          '@type': 'Person',
          name: frontmatter.performer,
        },
      }
    : null

  return (
    <>
      <Head>
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}
      </Head>
      <div className="special-layout">{children}</div>
    </>
  )
}
