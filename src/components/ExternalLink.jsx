import Link from 'next/link'

export function ExternalLink({ href, children }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  )
}
