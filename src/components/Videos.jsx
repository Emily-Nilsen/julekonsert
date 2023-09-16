import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import VideoPlayer from './VideoPlayer'
import Link from 'next/link'

export function Videos({ children }) {
  return <div className="not-prose mb-12 grid grid-cols-1">{children}</div>
}

export function Video({ title, description, href, posterImg }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center pt-5">
      <div className="aspect-video relative w-full rounded-2xl object-cover">
        <VideoPlayer publicId={href} poster={posterImg} />
      </div>
      <div className="flex h-full w-full flex-col justify-end">
        <p className="mt-1 text-base font-semibold leading-8 tracking-tight text-gray-900 dark:text-white sm:mt-2">
          {title}
        </p>
        <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  )
}
