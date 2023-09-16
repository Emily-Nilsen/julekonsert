export function AudioSample({ title, description, audioUrl }) {
  return (
    <div className="flex w-full flex-col pt-5">
      <div className="relative w-full rounded-2xl">
        <audio controls className="w-full">
          <source src={audioUrl} type="audio/mpeg" />
          Nettleseren din støtter ikke lydelementet.
        </audio>
      </div>
      <div className="">
        <p className="mt-1 text-base font-semibold tracking-tight text-gray-900 dark:text-white sm:mt-3">
          {title}
        </p>
        <p className="-mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  )
}
