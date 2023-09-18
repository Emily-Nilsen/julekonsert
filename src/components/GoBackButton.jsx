import { Button } from '@/components/Button'

export function GoBackButton() {
  return (
    <div className="inline-block">
      <div className="dark:bg-t flex items-center justify-center rounded-full bg-amber-50/70 px-5 py-2 text-base text-amber-900 shadow-md shadow-black/5 ring-1 ring-amber-800/10 transition duration-150 ease-in-out hover:bg-amber-50/95 hover:text-amber-950 dark:bg-gray-800/60 dark:text-gray-300 dark:ring-1 dark:ring-inset dark:ring-white/5 dark:hover:bg-gray-800/70 hover:dark:ring-amber-400/5">
        <button className="" onClick={() => window.history.back()}>
          Gå tilbake
        </button>
      </div>
    </div>
  )
}
