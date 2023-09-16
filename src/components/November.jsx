import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'

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
  },
  {
    date: '2023-11-24',
    isCurrentMonth: true,
    isSelected: true,
    href: '/docs/askim',
  },
  {
    date: '2023-11-25',
    isCurrentMonth: true,
    isSelected: true,
    href: '/docs/hamar',
  },
  {
    date: '2023-11-26',
    isCurrentMonth: true,
    isSelected: true,
    href: '/docs/oslo',
  },
  { date: '2023-11-27', isCurrentMonth: true },
  {
    date: '2023-11-28',
    isCurrentMonth: true,
    isSelected: true,
    href: '/docs/kongsberg',
  },
  {
    date: '2023-11-29',
    isCurrentMonth: true,
    isSelected: true,
    href: '/docs/noetteroey',
  },
  {
    date: '2023-11-30',
    isCurrentMonth: true,
    isSelected: true,
    href: '/docs/hjertnes',
  },
  { date: '2023-12-01' },
  { date: '2023-12-02' },
  { date: '2023-12-03' },
  { date: '2023-12-04' },
  { date: '2023-12-05' },
  { date: '2023-12-06' },
  { date: '2023-12-07' },
  { date: '2023-12-08' },
  { date: '2023-12-09' },
  { date: '2023-12-10' },
]
const concerts = [
  {
    id: 1,
    name: 'Askim Kulturhus',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Julekonsert/Askim_Kulturhus_night_thumbnail_zhltnr.webp',
    date: 'Fredag 24. november',
    start: '19:00',
    startDatetime: '2023-11-23T19:00',
    end: '20:20',
    endDatetime: '2023-11-23T20:20',
    pageUrl: '/docs/askim',
  },
  // More concerts...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function November() {
  return (
    <div>
      <div className="rounded-lg bg-amber-50/60 px-6 pb-6 dark:bg-amber-50/90">
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
        <div className="mt-2 grid grid-cols-7 text-sm">
          {days.map((day, dayIdx) => (
            <div
              key={day.date}
              className={classNames(
                dayIdx > 6 && 'border-t border-gray-200',
                'py-2'
              )}
            >
              {/* Wrap the button with Link */}
              <Link href={day.href || ''}>
                <button
                  type="button"
                  className={classNames(
                    day.isSelected && 'text-white',
                    !day.isSelected && day.isToday && 'text-red-800',
                    !day.isSelected &&
                      !day.isToday &&
                      day.isCurrentMonth &&
                      'text-gray-900 dark:text-white',
                    !day.isSelected &&
                      !day.isToday &&
                      !day.isCurrentMonth &&
                      'text-gray-400',
                    day.isSelected && day.isToday && 'bg-red-800',
                    day.isSelected &&
                      !day.isToday &&
                      'bg-red-900 transition-all duration-300 ease-in-out hover:bg-red-800 dark:bg-white dark:text-gray-900 dark:hover:bg-amber-300 dark:hover:text-gray-900',

                    (day.isSelected || day.isToday) && 'font-semibold',
                    'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                  )}
                >
                  <time dateTime={day.date}>
                    {day.date.split('-').pop().replace(/^0/, '')}
                  </time>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <section className="mt-12">
        <h2 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
          Julekonserter i{' '}
          <time dateTime="2022-01-21">november {new Date().getFullYear()}</time>
        </h2>
        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
          {concerts.map((concert) => (
            <Link key={concert.id} href={concert.pageUrl}>
              <li className="group flex items-center space-x-4 rounded-xl px-4 py-2 transition duration-300 ease-in-out focus-within:bg-gray-50 hover:bg-gray-50 dark:hover:bg-white/5">
                <Image
                  src={concert.imageUrl}
                  alt={concert.name}
                  width={50}
                  height={50}
                  className="h-14 w-14 flex-none rounded-full border-4 border-amber-200"
                />
                <div className="flex-auto font-normal">
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    {concert.name}
                  </p>
                  <p className="-mt-5 flex gap-x-3">
                    <span className="font-bold text-gray-900 dark:text-white">
                      {concert.date}
                    </span>
                    {'|'}
                    <span>
                      <time dateTime={concert.startDatetime}>
                        {concert.start}
                      </time>{' '}
                      -{' '}
                      <time dateTime={concert.endDatetime}>{concert.end}</time>
                    </span>
                  </p>
                </div>

                <div>
                  <div className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600 dark:text-red-500">
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
    </div>
  )
}
