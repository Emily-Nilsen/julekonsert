import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { GoBackButton } from './GoBackButton'

const days = [
  { date: '2023-10-30' },
  { date: '2023-10-31' },
  { date: '2023-11-01', isCurrentMonth: true },
  { date: '2023-11-02', isCurrentMonth: true },
  { date: '2023-11-03', isCurrentMonth: true },
  { date: '2023-11-04', isCurrentMonth: true },
  { date: '2023-11-05', isCurrentMonth: true },
  { date: '2023-11-06', isCurrentMonth: true },
  { date: '2023-11-07', isCurrentMonth: true },
  { date: '2023-11-08', isCurrentMonth: true },
  { date: '2023-11-09', isCurrentMonth: true },
  { date: '2023-11-10', isCurrentMonth: true },
  { date: '2023-11-11', isCurrentMonth: true },
  { date: '2023-11-12', isCurrentMonth: true },
  { date: '2023-11-13', isCurrentMonth: true },
  { date: '2023-11-14', isCurrentMonth: true },
  { date: '2023-11-15', isCurrentMonth: true },
  { date: '2023-11-16', isCurrentMonth: true },
  { date: '2023-11-17', isCurrentMonth: true },
  { date: '2023-11-18', isCurrentMonth: true },
  { date: '2023-11-19', isCurrentMonth: true },
  { date: '2023-11-20', isCurrentMonth: true },
  { date: '2023-11-21', isCurrentMonth: true },
  { date: '2023-11-22', isCurrentMonth: true },
  {
    date: '2023-11-23',
    isCurrentMonth: true,
    isSelected: true,
    href: '/docs/horten',
    tooltip: 'Bakkenteigen Kulturhus, Horten',
  },
  {
    date: '2023-11-24',
    isCurrentMonth: true,
    isSelected: true,
    href: '/docs/askim',
    tooltip: 'Askim Kulturhus',
  },
  {
    date: '2023-11-25',
    isCurrentMonth: true,
    isSelected: true,
    href: '/docs/hamar',
    tooltip: 'Hamar Kulturhus',
  },
  {
    date: '2023-11-26',
    isCurrentMonth: true,
    isSelected: true,
    href: '/docs/oslo',
    tooltip: 'Oslo Konserthus',
  },
  { date: '2023-11-27', isCurrentMonth: true },
  {
    date: '2023-11-28',
    isCurrentMonth: true,
    isSelected: true,
    href: '/docs/kongsberg',
    tooltip: 'Kongsberg Musikkteater',
  },
  {
    date: '2023-11-29',
    isCurrentMonth: true,
    isSelected: true,
    href: '/docs/noetteroey',
    tooltip: 'Nøtterøy Kulturhus',
  },
  {
    date: '2023-11-30',
    isCurrentMonth: true,
    isSelected: true,
    href: '/docs/sandefjord',
    tooltip: 'Hjertnes Kulturhus, Sandefjord',
  },
  { date: '2023-12-01' },
  { date: '2023-12-02' },
  { date: '2023-12-03' },
]
const concerts = [
  {
    id: 1,
    name: 'Bakkenteigen Kulturhus, Horten',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694971527/Julekonsert/Bakkenteigen_Kulturhus_Horten_ist5xq.webp',
    date: '23. november',
    pageUrl: '/docs/horten',
  },
  {
    id: 2,
    name: 'Askim Kulturhus',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Julekonsert/Askim_Kulturhus_night_thumbnail_zhltnr.webp',
    date: '24. november',
    pageUrl: '/docs/askim',
  },
  {
    id: 3,
    name: 'Hamar Kulturhus',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694972398/Julekonsert/Hamar_Kulturhus_evhynw.webp',
    date: '25. november',
    pageUrl: '/docs/hamar',
  },
  {
    id: 4,
    name: 'Oslo Konserthus',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694973738/Julekonsert/Oslo_Konserthus_bw940p.webp',
    date: '26. november',
    pageUrl: '/docs/oslo',
  },
  {
    id: 5,
    name: 'Kongsberg Musikkteater',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694974538/Julekonsert/Kongsberg_Musikkteater_vmxx7a.webp',
    date: '28. november',
    pageUrl: '/docs/kongsberg',
  },
  {
    id: 6,
    name: 'Nøtterøy Kulturhus',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694977171/Julekonsert/n%C3%B8tter%C3%B8y_kulturhus_mxugdj.webp',
    date: '29. november',
    pageUrl: '/docs/noetteroey',
  },
  {
    id: 7,
    name: 'Hjertnes Kulturhus, Sandefjord',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694979941/Julekonsert/Hjertness_Kulturhus_grv4mz.webp',
    date: '30. november',
    pageUrl: '/docs/sandefjord',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function November() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Calendar */}
      <div className="rounded-lg bg-amber-50/70 px-6 pb-6 ring-1 ring-amber-800/10 dark:bg-gray-800/60 dark:ring-1 dark:ring-gray-300/10">
        <div className="flex items-center"></div>
        <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
          <div>M</div>
          <div>T</div>
          <div>O</div>
          <div>T</div>
          <div>F</div>
          <div>L</div>
          <div>S</div>
        </div>
        {/* Tooltip start */}
        <div className="mt-2 grid grid-cols-7 text-sm">
          {days.map((day, dayIdx) => (
            <div
              key={day.date}
              className={classNames(
                dayIdx > 6 && 'border-t border-gray-200',
                'py-2'
              )}
            >
              <div className="group relative">
                {/* Wrap the button with Link */}
                <Link href={day.href || ''}>
                  <button
                    type="button"
                    className={classNames(
                      day.isSelected && 'text-amber-950',
                      !day.isSelected &&
                        day.isCurrentMonth &&
                        'text-amber-900 dark:text-white',
                      !day.isSelected && !day.isCurrentMonth && 'text-gray-400',
                      day.isSelected &&
                        'border border-amber-400/50 bg-amber-200 transition-all duration-300 ease-in-out hover:bg-amber-800 dark:border dark:border-amber-400/100 dark:bg-amber-50 dark:text-gray-900 dark:hover:bg-amber-300 dark:hover:text-gray-900',
                      (day.isSelected || day.isCurrentMonth) && 'font-semibold',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                    )}
                    title="" // Remove the title attribute
                  >
                    <time dateTime={day.date}>
                      {day.date.split('-').pop().replace(/^0/, '')}
                    </time>
                  </button>
                </Link>

                {/* The tooltip content */}
                {day.tooltip && (
                  <div className="pointer-events-none absolute z-50 -mt-8 rounded-lg border border-amber-400/50 bg-white px-3 py-2 text-sm text-amber-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-gray-700 dark:text-white">
                    {day.tooltip}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Tooltip end */}
      </div>
      {/* Concert list */}
      <section className="mt-12">
        <h2 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
          Julekonserter i november 2023
        </h2>
        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
          {concerts.map((concert) => (
            <Link key={concert.id} href={concert.pageUrl}>
              <li className="group flex items-center space-x-4 rounded-xl border border-transparent px-4 py-0 transition duration-300 ease-in-out focus-within:bg-gray-50 hover:border hover:border-amber-400/5 hover:bg-gray-50 dark:hover:bg-gray-800/60">
                <Image
                  src={concert.imageUrl}
                  alt={concert.name}
                  width={50}
                  height={50}
                  className="h-14 w-14 flex-none rounded-full border border-amber-400/50"
                />
                <div className="flex-auto font-normal">
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    {concert.name}
                  </p>
                  <p className="-mt-5 flex gap-x-3">
                    <span className="font-bold text-gray-900 dark:text-white">
                      {concert.date}
                    </span>
                  </p>
                </div>

                <div>
                  <div className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600 dark:text-amber-400">
                    <EllipsisVerticalIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ol>
      </section>
      <div className="h-10 w-full border-b border-gray-300/30 dark:border-gray-300/10" />
    </div>
  )
}
