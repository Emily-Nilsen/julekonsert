import Link from 'next/link'
import Image from 'next/image'

import { Icon } from '@/components/Icon'

export function Categories({ children }) {
  return (
    <div className="not-prose my-12 grid grid-cols-1 gap-6">{children}</div>
  )
}

export function Category({ title, imageUrl }) {
  return (
    <div className="group relative rounded-xl border border-gray-200 dark:border-gray-800">
      <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 transition-all duration-200 ease-in-out [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.amber.50)),var(--quick-links-hover-bg,theme(colors.amber.50)))_padding-box,linear-gradient(to_top,theme(colors.amber.300),theme(colors.amber.300),theme(colors.amber.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.gray.800)]" />
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
        <Image
          src={imageUrl}
          alt={title}
          width={1456}
          height={816}
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 overflow-hidden rounded-xl bg-gradient-to-t from-zinc-950/70 from-10% via-zinc-950/30 via-30%" />
      <div className="absolute inset-0 flex items-end p-6">
        <p className="text-base font-semibold text-white dark:text-white">
          <span className="absolute -inset-px rounded-xl" />
          {title}
        </p>
      </div>
    </div>
  )
}
