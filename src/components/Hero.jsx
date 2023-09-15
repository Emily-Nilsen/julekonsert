import { Fragment, useRef, useEffect } from 'react' // Import useRef
import Image from 'next/image'
import clsx from 'clsx'
import Highlight, { defaultProps } from 'prism-react-renderer'

import { Button } from '@/components/Button'
import { HeroBackground } from '@/components/HeroBackground'

import mobileHeroBanner from '@/images/mobile-hero.webp'

export function Hero() {
  const audioPlayer = useRef(null) // Create a ref for the audio element

  useEffect(() => {
    // Function to play the audio
    function playAudio() {
      if (audioPlayer.current) {
        audioPlayer.current.play()
      }
    }

    // Automatically play the audio when the component mounts
    playAudio()
  }, []) // Empty dependency array ensures this runs once on mount

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-red-900">
        <Image
          alt="Nordic Tenors"
          src={mobileHeroBanner}
          width={1456}
          height={816}
          unoptimized
          priority
          className="mx-auto h-full object-cover object-center sm:h-full lg:hidden"
        />
        <Image
          alt="Nordic Tenors"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1694807320/Julekonsert/hero_background_desktop_vetfn3.webp"
          width={3000}
          height={1000}
          unoptimized
          priority
          className="mx-auto hidden h-full object-cover object-center lg:block"
        />
      </div>
      <div className="inset-0 hidden bg-black/20 mix-blend-multiply lg:absolute lg:block" />
      <div className="inset-0 hidden bg-gradient-to-tr from-black/50 mix-blend-multiply lg:absolute lg:block" />
      <div className="absolute inset-0 opacity-10 ">
        <Image
          alt="Nordic Tenors"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Julekonsert/Christmas_lights_bottom_and_throughout_knmify.webp"
          width={3000}
          height={1000}
          unoptimized
          priority
          className="mx-auto hidden h-full animate-pulse-slow-6 object-cover object-center lg:block"
        />
      </div>
      <div className="absolute inset-0 opacity-20 ">
        <Image
          alt="Nordic Tenors"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1694808075/Julekonsert/Christmas_lights_bottom_vwnegi.webp"
          width={3000}
          height={1000}
          unoptimized
          priority
          className="mx-auto hidden h-full animate-pulse-slow-7 object-cover object-center lg:block"
        />
      </div>
      <div className="absolute inset-0 opacity-20 ">
        <Image
          alt="Nordic Tenors"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Julekonsert/Christmas_lights_throughout_2_r4nst0.webp"
          width={3000}
          height={1000}
          unoptimized
          priority
          className="mx-auto hidden h-full animate-pulse-slow-5 object-cover object-center lg:block"
        />
      </div>
      <div className="absolute inset-0 opacity-10 ">
        <Image
          alt="Nordic Tenors"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Julekonsert/Christmas_lights_throughout_1_zrbwfq.webp"
          width={3000}
          height={1000}
          unoptimized
          priority
          className="mx-auto hidden h-full animate-pulse-slow-6 object-cover object-center lg:block"
        />
      </div>
      <div className="absolute inset-0 rotate-180 opacity-10">
        <Image
          alt="Nordic Tenors"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Julekonsert/Christmas_lights_throughout_1_zrbwfq.webp"
          width={3000}
          height={1000}
          unoptimized
          priority
          className="mx-auto hidden h-full animate-pulse-slow-7 object-cover object-center lg:block"
        />
      </div>
      <div className="absolute inset-0 opacity-20">
        <Image
          alt="Nordic Tenors"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1694816228/Julekonsert/gold_glitter_du346u.webp"
          width={3000}
          height={1000}
          unoptimized
          priority
          className="mx-auto hidden h-full animate-pulse-slow-4 object-cover object-center lg:block"
        />
      </div>
      <div className="absolute inset-0 rotate-180 opacity-10">
        <Image
          alt="Nordic Tenors"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1694816228/Julekonsert/gold_glitter_du346u.webp"
          width={3000}
          height={1000}
          unoptimized
          priority
          className="mx-auto hidden h-full animate-pulse-slow-5 object-cover object-center lg:block"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-3/5 opacity-100 ">
        <Image
          alt="Nordic Tenors"
          src="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Julekonsert/nordic_tenors_cutouts_sioupl.webp"
          width={3000}
          height={1688}
          unoptimized
          priority
          className="mx-auto hidden h-full object-cover object-center lg:block"
        />
      </div>

      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <div className="relative">
              <p
                className="relative inline font-display text-5xl font-medium tracking-tight sm:text-7xl"
                style={{
                  WebkitTextFillColor: 'transparent',
                  WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.3)',
                }}
              >
                Julekonserter 2023
              </p>
              <p className="absolute inset-0 inline bg-gradient-to-r from-white via-amber-300 to-white bg-clip-text font-display text-5xl font-medium tracking-tight text-transparent sm:text-7xl">
                Julekonserter 2023
              </p>
              <p className="mt-3 text-2xl tracking-tight text-white">
                Nordic Tenors gir deg en vakker julekonsert med unike stemmer,
                varme, humor, og tradisjonelt julerepertoar. Opplev
                førjulsstemning med Jan-Tore Saltnes, Nils Georg Nilsen og Espen
                Solsbak.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Button className="relative z-20" href="/docs/julekonserter">
                  Julekonserter
                </Button>
                <Button
                  className="relative z-20"
                  href="/docs/kontakt"
                  variant="secondary"
                >
                  Kontakt
                </Button>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="relative"></div>
          </div>
        </div>
      </div>
      {/* Audio element with ref */}
      <audio
        ref={audioPlayer}
        src="https://res.cloudinary.com/dt3k2apqd/video/upload/v1694768012/Julekonsert/Magic_Wind_Chimes__01_ffurrr.wav"
      ></audio>
    </div>
  )
}
