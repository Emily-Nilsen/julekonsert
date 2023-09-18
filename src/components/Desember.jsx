import Image from 'next/image'
import Link from 'next/link'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { GoBackButton } from './GoBackButton'

const days = Array.from({ length: 31 }, (_, i) => ({
  date: `2023-12-${i + 1}`,
  isCurrentMonth: true,
  isSelected: i >= 0 && i <= 21, // Select the first 22 days
}))

const concerts = [
  {
    id: 1,
    name: 'Elverum Kulturhus',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694979669/Julekonsert/Elverum_Kulturhus_kgjnfw.webp',
    date: '1. desember',
    pageUrl: '/docs/elverum',
  },
  {
    id: 2,
    name: 'Moss Kulturhus, Parkteatret',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694981083/Julekonsert/Moss_Kulturhus_lnpkyw.webp',
    date: '2. desember',
    pageUrl: '/docs/moss',
  },
  {
    id: 3,
    name: 'Lillestrøm Kultursenter',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1695030110/Julekonsert/Lillestr%C3%B8m_kultursenter_yl2vwa.webp',
    date: '3. desember',
    pageUrl: '/docs/lillestroem',
  },
  {
    id: 4,
    name: 'Blå Grotte, Fredrikstad',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1695031332/Julekonsert/Bla%CC%8A_Grotte_x4x2hx.webp',
    date: '4. desember',
    pageUrl: '/docs/fredrikstad',
  },
  {
    id: 5,
    name: 'Maihaugsalen, Lillehammer',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1695032351/Julekonsert/Maihaugsalen_rakxmc.webp',
    date: '5. desember',
    pageUrl: '/docs/lillehammer',
  },
  {
    id: 6,
    name: 'Olavshallen, Trondheim',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1695033204/Julekonsert/Olavshallen_dzwrff.webp',
    date: '6. desember',
    pageUrl: '/docs/trondheim',
  },
  {
    id: 7,
    name: 'Kimen Kulturhus, Stjørdal',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694971527/Julekonsert/Bakkenteigen_Kulturhus_Horten_ist5xq.webp',
    date: '7. desember',
    pageUrl: '/docs/horten',
  },
  {
    id: 8,
    name: 'Kuben Kulturhus, Grong',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694971527/Julekonsert/Bakkenteigen_Kulturhus_Horten_ist5xq.webp',
    date: '8. desember',
    pageUrl: '/docs/horten',
  },
  {
    id: 9,
    name: 'Fosnavåg Konserthus',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694971527/Julekonsert/Bakkenteigen_Kulturhus_Horten_ist5xq.webp',
    date: '9. desember',
    pageUrl: '/docs/horten',
  },
  {
    id: 10,
    name: 'Operahuset, Nordfjord',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694971527/Julekonsert/Bakkenteigen_Kulturhus_Horten_ist5xq.webp',
    date: '10. desember',
    pageUrl: '/docs/horten',
  },
  {
    id: 11,
    name: 'Parken Kulturhus, Ålesund',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694971527/Julekonsert/Bakkenteigen_Kulturhus_Horten_ist5xq.webp',
    date: '11. desember',
    pageUrl: '/docs/horten',
  },
  {
    id: 12,
    name: 'Ullensaker Kulturhus',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694971527/Julekonsert/Bakkenteigen_Kulturhus_Horten_ist5xq.webp',
    date: '12. desember',
    pageUrl: '/docs/horten',
  },
  {
    id: 13,
    name: 'Arendal Kulturhus',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694971527/Julekonsert/Bakkenteigen_Kulturhus_Horten_ist5xq.webp',
    date: '13. desember',
    pageUrl: '/docs/horten',
  },
  {
    id: 14,
    name: 'Kilden, Kristiansand',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694971527/Julekonsert/Bakkenteigen_Kulturhus_Horten_ist5xq.webp',
    date: '14. desember',
    pageUrl: '/docs/horten',
  },
  {
    id: 15,
    name: 'Buen Kulturhus',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694971527/Julekonsert/Bakkenteigen_Kulturhus_Horten_ist5xq.webp',
    date: '15. desember',
    pageUrl: '/docs/horten',
  },
  {
    id: 16,
    name: 'Sandnes Kulturhus',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694971527/Julekonsert/Bakkenteigen_Kulturhus_Horten_ist5xq.webp',
    date: '16. desember',
    pageUrl: '/docs/horten',
  },
  {
    id: 17,
    name: 'Stavanger Konserthus',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694971527/Julekonsert/Bakkenteigen_Kulturhus_Horten_ist5xq.webp',
    date: '17. desember',
    pageUrl: '/docs/horten',
  },
  {
    id: 18,
    name: 'Festiviteten, Haugesund',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694971527/Julekonsert/Bakkenteigen_Kulturhus_Horten_ist5xq.webp',
    date: '18. desember',
    pageUrl: '/docs/horten',
  },
  {
    id: 19,
    name: 'Kulturhuset i Tromsø',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694971527/Julekonsert/Bakkenteigen_Kulturhus_Horten_ist5xq.webp',
    date: '19. desember',
    pageUrl: '/docs/horten',
  },
  {
    id: 20,
    name: 'Stormen, Bodø',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694971527/Julekonsert/Bakkenteigen_Kulturhus_Horten_ist5xq.webp',
    date: '20. desember',
    pageUrl: '/docs/horten',
  },
  {
    id: 21,
    name: 'Grieghallen, Bergen',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694971527/Julekonsert/Bakkenteigen_Kulturhus_Horten_ist5xq.webp',
    date: '21. desember',
    pageUrl: '/docs/horten',
  },
  {
    id: 22,
    name: 'Drammens Teater',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694971527/Julekonsert/Bakkenteigen_Kulturhus_Horten_ist5xq.webp',
    date: '22. desember',
    pageUrl: '/docs/horten',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Desember() {
  return (
    <div>
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
                {/* Wrap the button with Link and use concert.pageUrl if concert exists */}
                {concerts[dayIdx] ? (
                  <Link href={concerts[dayIdx].pageUrl}>
                    <button
                      type="button"
                      className={classNames(
                        day.isSelected && 'text-amber-950',
                        !day.isSelected &&
                          day.isCurrentMonth &&
                          'text-amber-900 dark:text-white',
                        !day.isSelected &&
                          !day.isCurrentMonth &&
                          'text-gray-400',
                        day.isSelected &&
                          'border border-amber-400/50 bg-amber-200 transition-all duration-300 ease-in-out hover:bg-amber-800 dark:border dark:border-amber-400/100 dark:bg-amber-50 dark:text-gray-900 dark:hover:bg-amber-300 dark:hover:text-gray-900',
                        (day.isSelected || day.isCurrentMonth) &&
                          'font-semibold',
                        'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                      )}
                      title="" // Remove the title attribute
                    >
                      <time dateTime={day.date}>
                        {day.date.split('-').pop().replace(/^0/, '')}
                      </time>
                    </button>
                  </Link>
                ) : (
                  <button
                    type="button"
                    className={classNames(
                      !day.isCurrentMonth && 'text-gray-400',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                    )}
                    title=""
                    disabled // Disable the button if there's no concert
                  >
                    <time dateTime={day.date}>
                      {day.date.split('-').pop().replace(/^0/, '')}
                    </time>
                  </button>
                )}

                {/* The tooltip content */}
                {day.isSelected && concerts[dayIdx] && (
                  <div className="pointer-events-none absolute z-50 -mt-8 rounded-lg border border-amber-400/50 bg-white px-3 py-2 text-sm text-amber-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-gray-700 dark:text-white">
                    {concerts[dayIdx].name}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Tooltip end */}
      </div>
      <section className="mt-12">
        <h2 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
          Julekonserter i desember {new Date().getFullYear()}
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
      <div className="my-12">
        <GoBackButton />
      </div>
    </div>
  )
}
