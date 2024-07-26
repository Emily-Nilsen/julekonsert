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
    name: 'Moss Kulturhus',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694981083/Julekonsert/Moss_Kulturhus_lnpkyw.webp',
    date: '1. desember',
    pageUrl: '/docs/moss',
  },
  {
    id: 2,
    name: 'Bærum Kulturhus, Sandvika',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1704980301/Julekonsert/B%C3%A6rum_kulturhus_oriunn.webp',
    date: '2. desember',
    pageUrl: '/docs/sandvika',
  },
  {
    id: 3,
    name: 'Blå Grotte, Fredrikstad',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1695031332/Julekonsert/Bla%CC%8A_Grotte_x4x2hx.webp',
    date: '3. desember',
    pageUrl: '/docs/fredrikstad',
  },
  {
    id: 4,
    name: 'Nøtterøy Kulturhus',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694977171/Julekonsert/n%C3%B8tter%C3%B8y_kulturhus_mxugdj.webp',
    date: '4. desember',
    pageUrl: '/docs/noetteroey',
  },
  {
    id: 5,
    name: 'Bølgen Kulturhus, Larvik',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1704983890/Julekonsert/B%C3%B8lgen_kulturhus_f8mbxg.webp',
    date: '5. desember',
    pageUrl: '/docs/larvik',
  },
  {
    id: 6,
    name: 'Asker Kulturhus',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1704984754/Julekonsert/Asker_kulturhus_l7xhoo.webp',
    date: '6. desember',
    pageUrl: '/docs/asker',
  },
  {
    id: 7,
    name: 'Biorama, Holmestrand',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1704990446/Julekonsert/Biorama_d17sr3.webp',
    date: '7. desember',
    pageUrl: '/docs/holmestrand',
  },
  {
    id: 8,
    name: 'Hadeland Kultursal',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1704992281/Julekonsert/Hadeland_Kultursal_bdpha3.webp',
    date: '8. desember',
    pageUrl: '/docs/hadeland',
  },
  {
    id: 9,
    name: 'Oslo Konserthus',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1694973738/Julekonsert/Oslo_Konserthus_bw940p.webp',
    date: '9. desember',
    pageUrl: '/docs/oslo',
  },
  {
    id: 10,
    name: 'Maihaugsalen, Lillehammer',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1695032351/Julekonsert/Maihaugsalen_rakxmc.webp',
    date: '10. desember',
    pageUrl: '/docs/lillehammer',
  },
  {
    id: 11,
    name: 'Arendal Kulturhus',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1695043591/Julekonsert/Arendal_kulturhus_xydymn.webp',
    date: '11. desember',
    pageUrl: '/docs/arendal',
  },
  {
    id: 12,
    name: 'Kilden, Kristiansand',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1695044421/Julekonsert/Kilden_kulturhus_ux1ewk.webp',
    date: '12. desember',
    pageUrl: '/docs/kristiansand',
  },
  {
    id: 13,
    name: 'Flekkefjord Kulturhus Spira',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1704993834/Julekonsert/Flekkefjord_kyzmwo.webp',
    date: '13. desember',
    pageUrl: '/docs/flekkefjord',
  },
  {
    id: 14,
    name: 'Sandnes Kulturhus',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1695048267/Julekonsert/Sandnes_kulturhus_qdnush.webp',
    date: '14. desember',
    pageUrl: '/docs/sandnes',
  },
  {
    id: 15,
    name: 'Stavanger Konserthus',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1695049327/Julekonsert/Stavanger_konserthus_xfqt2s.webp',
    date: '15. desember',
    pageUrl: '/docs/stavanger',
  },
  {
    id: 16,
    name: 'Festiviteten, Haugesund',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1695051392/Julekonsert/Festiviteten_Haugesund_nkllsw.webp',
    date: '16. desember',
    pageUrl: '/docs/haugesund',
  },
  {
    id: 17,
    name: 'Grieghallen, Bergen',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1695103770/Julekonsert/Grieghallen_Bergen_cm8qsr.webp',
    date: '17. desember',
    pageUrl: '/docs/bergen',
  },
  {
    id: 18,
    name: 'Olavshallen, Trondheim',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1695033204/Julekonsert/Olavshallen_dzwrff.webp',
    date: '18. desember',
    pageUrl: '/docs/trondheim',
  },
  {
    id: 19,
    name: 'Kulturhuset i Tromsø',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1695062936/Julekonsert/Kulturhuset_troms%C3%B8_tp5q3k.webp',
    date: '19. desember',
    pageUrl: '/docs/tromsoe',
  },
  {
    id: 20,
    name: 'Stormen, Bodø',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1695102938/Julekonsert/Stormen_konserthus_a3xklm.webp',
    date: '20. desember',
    pageUrl: '/docs/bodoe',
  },
  {
    id: 21,
    name: 'Kimen, Stjørdal',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1695036048/Julekonsert/Kimen_hld2po.webp',
    date: '21. desember',
    pageUrl: '/docs/stjoerdal',
  },
  {
    id: 22,
    name: 'Drammens Teater',
    imageUrl:
      'https://res.cloudinary.com/dt3k2apqd/image/upload/c_thumb,w_200,h_200/v1695104625/Julekonsert/Drammens_Teater_i81lcc.webp',
    date: '22. desember',
    pageUrl: '/docs/drammen',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Desember() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Calendar */}
      {/* <div className="hidden px-6 pb-6 rounded-lg bg-amber-50/70 ring-1 ring-amber-800/10 dark:bg-gray-800/60 dark:ring-1 dark:ring-gray-300/10 sm:block">
        <div className="flex items-center"></div>
        <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
          <div>M</div>
          <div>T</div>
          <div>O</div>
          <div>T</div>
          <div>F</div>
          <div>L</div>
          <div>S</div>
        </div>
        
        <div className="grid grid-cols-7 mt-2 text-sm">
          {days.map((day, dayIdx) => (
            <div
              key={day.date}
              className={classNames(
                dayIdx > 6 && 'border-t border-gray-200',
                'py-2'
              )}
            >
              <div className="relative group">
                
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
                      title="" 
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
                    disabled 
                  >
                    <time dateTime={day.date}>
                      {day.date.split('-').pop().replace(/^0/, '')}
                    </time>
                  </button>
                )}

                
                {day.isSelected && concerts[dayIdx] && (
                  <div className="absolute z-50 px-3 py-2 -mt-8 text-sm transition-opacity duration-300 bg-white border rounded-lg opacity-0 pointer-events-none border-amber-400/50 text-amber-900 group-hover:opacity-100 dark:bg-gray-700 dark:text-white">
                    {concerts[dayIdx].name}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
      </div> */}
      <section className="-mt-3 sm:mt-6">
        {/* <h2 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
          Christmas with Nordic Tenors
        </h2> */}
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
