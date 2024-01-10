import Link from 'next/link'
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/20/solid'

function TicketIcon(props) {
  return (
    <svg {...props} viewBox="0 0 576 512">
      <path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z" />
    </svg>
  )
}

export function ConcertDetails({ concert, day, date, time, month, location }) {
  return (
    <div className="mb-12">
      <div className="mt-8 flex items-center rounded-3xl bg-amber-50/70 p-6 pt-8 ring-1 ring-amber-800/10 dark:bg-gray-800/60 dark:ring-1 dark:ring-gray-300/10">
        <div className="">
          <h2 className="-mt-2 font-medium text-amber-800 dark:text-amber-300">
            {concert}
          </h2>

          <div className="-mt-3 flex items-center gap-3">
            <span className="sr-only">Dato</span>
            <CalendarIcon
              className="h-6 w-6 text-amber-600 dark:text-amber-400"
              aria-hidden="true"
            />
            <p className=" text-amber-900 [--tw-prose-background:theme(colors.amber.50)] prose-a:text-amber-900 prose-code:text-amber-900 dark:text-gray-300 dark:prose-code:text-gray-300">
              {day}{' '}
              <span className="font-bold">
                {date}. {month}
              </span>{' '}
              2024
            </p>
          </div>
          <div className="-mt-3 flex items-center gap-3">
            <span className="sr-only">Tid</span>
            <ClockIcon
              className="h-6 w-6 text-amber-600 dark:text-amber-400"
              aria-hidden="true"
            />
            <p className=" text-amber-900 [--tw-prose-background:theme(colors.amber.50)] prose-a:text-amber-900 prose-code:text-amber-900 dark:text-gray-300 dark:prose-code:text-gray-300">
              kl. <span className="font-bold">{time}</span>
            </p>
          </div>
          <div className="-mb-3 -mt-3 flex items-center gap-3 ">
            <span className="sr-only">Lokasjon</span>
            <MapPinIcon
              className="h-6 w-6 text-amber-600 dark:text-amber-400"
              aria-hidden="true"
            />
            <p className=" text-amber-900 [--tw-prose-background:theme(colors.amber.50)] prose-a:text-amber-900 prose-code:text-amber-900 dark:text-gray-300 dark:prose-code:text-gray-300">
              {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
