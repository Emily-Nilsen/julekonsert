export function Map({ src }) {
  return (
    <div className="relative mb-6 h-80 w-full rounded-xl object-cover shadow-xl ring-1 ring-red-800/20 sm:mb-12">
      <div className="">
        <iframe
          src={src}
          width="600"
          height="800"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 h-full w-full overflow-hidden rounded-xl"
        />
      </div>
    </div>
  )
}
