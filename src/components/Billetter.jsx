import Link from 'next/link'

function TicketIcon(props) {
  return (
    <svg {...props} viewBox="0 0 576 512">
      <path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z" />
    </svg>
  )
}

export function Billetter({ concert, outlet, ticketUrl }) {
  return (
    <div className="mb-12">
      <div className="mt-8 flex items-center rounded-3xl bg-red-50/70 p-6 py-8 ring-1 ring-red-800/10 dark:bg-gray-800/60 dark:ring-1 dark:ring-gray-300/10">
        <div className="">
          <h2 className="-mt-2 font-medium text-red-800 dark:text-red-600">
            {concert}
            <span>Christmas with Nordic Tenors</span>
          </h2>
          {ticketUrl ? (
            <>
              <p className="-mt-2 text-red-900 [--tw-prose-background:theme(colors.red.50)] prose-a:text-red-900 prose-code:text-red-900 dark:text-gray-300 dark:prose-code:text-gray-300">
                Billetter kan kjøpes hos{' '}
                <span className="font-bold">{outlet}</span>
              </p>
              <a href={ticketUrl} target="_blank" rel="noopener noreferrer">
                <button className="dark:bg-t flex items-center justify-center rounded-lg bg-white/80 px-5 py-2.5 text-base text-gray-500 shadow-md shadow-black/5 ring-1 ring-black/5 transition duration-150 ease-in-out hover:bg-white dark:bg-gray-700 dark:text-gray-300 dark:ring-inset dark:ring-white/5 dark:hover:bg-white/10">
                  <span className="flex items-center gap-3 text-base text-red-800 dark:text-white">
                    <TicketIcon className="h-6 w-6 fill-red-700 dark:fill-red-500" />
                    Kjøp billetter
                  </span>
                </button>
              </a>
            </>
          ) : (
            <p className="-mt-2 text-red-900 [--tw-prose-background:theme(colors.red.50)] prose-a:text-red-900 prose-code:text-red-900 dark:text-gray-300 dark:prose-code:text-gray-300">
              Billettsalg ikke åpnet
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
