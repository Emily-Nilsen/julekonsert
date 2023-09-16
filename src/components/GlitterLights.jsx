import Image from 'next/image'

export function GlitterLights() {
  return (
    <div>
      <div className="absolute inset-0 opacity-25 ">
        <Image
          alt="Nordic Tenors"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Julekonsert/Christmas_lights_bottom_and_throughout_knmify.webp"
          width={3000}
          height={1000}
          unoptimized
          priority
          className="mx-auto h-full animate-pulse-slow-4 object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 opacity-30">
        <Image
          alt="Nordic Tenors"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1694808075/Julekonsert/Christmas_lights_bottom_vwnegi.webp"
          width={3000}
          height={1000}
          unoptimized
          priority
          className="mx-auto h-full animate-pulse-slow-5 object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 opacity-25">
        <Image
          alt="Nordic Tenors"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Julekonsert/Christmas_lights_throughout_2_r4nst0.webp"
          width={3000}
          height={1000}
          unoptimized
          priority
          className="mx-auto h-full animate-pulse-slow-3 object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 opacity-25">
        <Image
          alt="Nordic Tenors"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Julekonsert/Christmas_lights_throughout_1_zrbwfq.webp"
          width={3000}
          height={1000}
          unoptimized
          priority
          className="mx-auto h-full animate-pulse-slow-4 object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 rotate-180 opacity-30">
        <Image
          alt="Nordic Tenors"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Julekonsert/Christmas_lights_throughout_1_zrbwfq.webp"
          width={3000}
          height={1000}
          unoptimized
          priority
          className="mx-auto h-full animate-pulse-slow-5 object-cover object-center "
        />
      </div>
      <div className="absolute inset-0 opacity-25">
        <Image
          alt="Nordic Tenors"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1694816228/Julekonsert/gold_glitter_du346u.webp"
          width={3000}
          height={1000}
          unoptimized
          priority
          className="mx-auto h-full animate-pulse-slow-2 object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 rotate-180 opacity-25">
        <Image
          alt="Nordic Tenors"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1694816228/Julekonsert/gold_glitter_du346u.webp"
          width={3000}
          height={1000}
          unoptimized
          priority
          className="mx-auto h-full animate-pulse-slow-3 object-cover object-center"
        />
      </div>
    </div>
  )
}
