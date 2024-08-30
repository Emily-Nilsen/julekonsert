import { Fragment, useRef, useEffect, useLayoutEffect } from 'react' // Import useRef
import Image from 'next/image'
import clsx from 'clsx'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { motion } from 'framer-motion'
import { Button } from '@/components/Button'

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-900">
        <Image
          alt="Nordic Tenors"
          src="/images/general/julekonsert_2024_mobile.webp"
          width={1500}
          height={1600}
          unoptimized
          priority
          className="mx-auto h-full object-cover object-center md:hidden"
        />
      </div>
      <div className="inset-0 hidden bg-black/20 mix-blend-multiply md:absolute md:block" />
      <div className="inset-0 hidden bg-gradient-to-tr from-black/50 mix-blend-multiply md:absolute md:block" />

      <div className="py-24 sm:px-2 md:relative md:px-0 md:py-52">
        <div className="absolute inset-0 hidden bg-gray-900 md:block">
          <Image
            alt="Nordic Tenors"
            src="/images/general/julekonsert_2024_desktop.webp"
            width={2500}
            height={2700}
            unoptimized
            priority
            className="mx-auto hidden h-full object-cover object-center md:block"
          />
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 text-center lg:text-left">
            <div className="relative">
              <p className="absolute inset-0 -mt-14 mb-10 inline bg-gradient-to-r from-white via-amber-300 to-white bg-clip-text pb-10 font-display text-4xl font-medium tracking-tight text-transparent sm:text-6xl md:-mt-32 lg:-mt-40 xl:text-7xl">
                Julekonserter
              </p>

              <div className="h-12 sm:h-44 xl:hidden" />
              <div className="mb-0 md:-mb-52 lg:-mb-32 xl:pt-96">
                <p className="mb-0 mt-3 hidden max-w-xl pt-0 text-2xl tracking-tight text-white md:mx-auto md:block md:pt-20 lg:mx-0">
                  Nordic Tenors gir deg en vakker julekonsert med unike stemmer,
                  varme, humor, og et tradisjonelt julerepertoar.
                </p>
                <div className="-mb-24 mt-32 flex justify-center gap-8 sm:-mb-20 sm:mt-20 sm:gap-10 lg:-mb-0 lg:mt-8 lg:justify-start">
                  <Button className="relative z-20" href="/docs/julekonserter">
                    Julekonserter 2024
                  </Button>
                  <Button
                    className="relative z-20"
                    href="/docs/kontakt"
                    variant="secondary"
                  >
                    Kontakt oss
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="relative"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
