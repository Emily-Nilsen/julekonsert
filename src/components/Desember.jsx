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
  // {
  //   id: 1,
  //   name: 'Moss Kulturhus',
  //   imageUrl: '/images/thumbnails/Moss_Kulturhus_thumbnail.webp',
  //   date: '1. desember',
  //   pageUrl: '/docs/moss',
  // },
  // {
  //   id: 2,
  //   name: 'Bærum Kulturhus, Sandvika',
  //   imageUrl: '/images/thumbnails/Bærum_kulturhus_thumb.webp',
  //   date: '2. desember',
  //   pageUrl: '/docs/sandvika',
  // },
  // {
  //   id: 3,
  //   name: 'Blå Grotte, Fredrikstad',
  //   imageUrl: '/images/thumbnails/Blå_Grotte_thumb.webp',
  //   date: '3. desember',
  //   pageUrl: '/docs/fredrikstad',
  // },
  // {
  //   id: 4,
  //   name: 'Nøtterøy Kulturhus',
  //   imageUrl: '/images/thumbnails/Nøtterøy_kulturhus_thumb.webp',
  //   date: '4. desember',
  //   pageUrl: '/docs/noetteroey',
  // },
  // {
  //   id: 5,
  //   name: 'Bølgen Kulturhus, Larvik',
  //   imageUrl: '/images/thumbnails/Bølgen_kulturhus_thumb.webp',
  //   date: '5. desember',
  //   pageUrl: '/docs/larvik',
  // },
  // {
  //   id: 6,
  //   name: 'Asker Kulturhus',
  //   imageUrl: '/images/thumbnails/Asker_kulturhus_thumb.webp',
  //   date: '6. desember',
  //   pageUrl: '/docs/asker',
  // },
  // {
  //   id: 7,
  //   name: 'Biorama, Holmestrand',
  //   imageUrl: '/images/thumbnails/Biorama_thumb.webp',
  //   date: '7. desember',
  //   pageUrl: '/docs/holmestrand',
  // },
  // {
  //   id: 8,
  //   name: 'Hadeland Kultursal',
  //   imageUrl: '/images/thumbnails/Hadeland_Kultursal_thumb.webp',
  //   date: '8. desember',
  //   pageUrl: '/docs/hadeland',
  // },
  // {
  //   id: 9,
  //   name: 'Oslo Konserthus',
  //   imageUrl: '/images/thumbnails/Oslo_Konserthus_thumb.webp',
  //   date: '9. desember',
  //   pageUrl: '/docs/oslo',
  // },
  // {
  //   id: 10,
  //   name: 'Maihaugsalen, Lillehammer',
  //   imageUrl: '/images/thumbnails/Maihaugsalen_thumb.webp',
  //   date: '10. desember',
  //   pageUrl: '/docs/lillehammer',
  // },
  // {
  //   id: 11,
  //   name: 'Arendal Kulturhus',
  //   imageUrl: '/images/thumbnails/Arendal_kulturhus_thumb.webp',
  //   date: '11. desember',
  //   pageUrl: '/docs/arendal',
  // },
  // {
  //   id: 12,
  //   name: 'Kilden, Kristiansand',
  //   imageUrl: '/images/thumbnails/Kilden_kulturhus_thumb.webp',
  //   date: '12. desember',
  //   pageUrl: '/docs/kristiansand',
  // },
  // {
  //   id: 13,
  //   name: 'Flekkefjord Kulturhus Spira',
  //   imageUrl: '/images/thumbnails/Flekkefjord_thumb.webp',
  //   date: '13. desember',
  //   pageUrl: '/docs/flekkefjord',
  // },
  // {
  //   id: 14,
  //   name: 'Sandnes Kulturhus',
  //   imageUrl: '/images/thumbnails/Sandnes_kulturhus_thumb.webp',
  //   date: '14. desember',
  //   pageUrl: '/docs/sandnes',
  // },
  // {
  //   id: 15,
  //   name: 'Stavanger Konserthus',
  //   imageUrl: '/images/thumbnails/Stavanger_konserthus_thumb.webp',
  //   date: '15. desember',
  //   pageUrl: '/docs/stavanger',
  // },
  {
    id: 16,
    name: 'Festiviteten, Haugesund',
    imageUrl: '/images/thumbnails/Festiviteten_Haugesund_thumb.webp',
    date: '16. desember',
    pageUrl: '/docs/haugesund',
  },
  {
    id: 17,
    name: 'Grieghallen, Bergen',
    imageUrl: '/images/thumbnails/Grieghallen_Bergen_thumb.webp',
    date: '17. desember',
    pageUrl: '/docs/bergen',
  },
  {
    id: 18,
    name: 'Olavshallen, Trondheim',
    imageUrl: '/images/thumbnails/Olavshallen_thumb.webp',
    date: '18. desember',
    pageUrl: '/docs/trondheim',
  },
  {
    id: 19,
    name: 'Kulturhuset i Tromsø',
    imageUrl: '/images/thumbnails/Kulturhuset_tromsø_thumb.webp',
    date: '19. desember',
    pageUrl: '/docs/tromsoe',
  },
  {
    id: 20,
    name: 'Stormen, Bodø',
    imageUrl: '/images/thumbnails/Stormen_thumb.webp',
    date: '20. desember',
    pageUrl: '/docs/bodoe',
  },
  {
    id: 21,
    name: 'Kimen, Stjørdal',
    imageUrl: '/images/thumbnails/Kimen_thumb.webp',
    date: '21. desember',
    pageUrl: '/docs/stjoerdal',
  },
  {
    id: 22,
    name: 'Drammens Teater',
    imageUrl: '/images/thumbnails/Drammens_Teater_thumb.webp',
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
      <section className="-mt-3 sm:mt-6">
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
