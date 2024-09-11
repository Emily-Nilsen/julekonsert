import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Contact() {
  return (
    <div className="isolate rounded-3xl bg-white px-6 pb-24 pt-6 shadow-md shadow-black/5 ring-1 ring-gray-800/10 dark:bg-gray-800/60 dark:ring-1 dark:ring-gray-300/10 sm:pb-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Nordic Tenors
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Har du spørsmål om Nordic Tenors sine kommende julekonserter, spør oss
          gjerne ved å fylle ut skjemaet under.
        </p>
      </div>
      <form
        action="#"
        name="Spørsmål om Christmas with Nordic Tenors"
        data-netlify="true"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <input
          type="hidden"
          name="form-name"
          value="Spørsmål om Christmas with Nordic Tenors"
        />
        <input
          type="hidden"
          name="subject"
          value="Spørsmål om Christmas with Nordic Tenors"
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Fornavn
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 dark:bg-transparent dark:text-white dark:ring-gray-700/60 dark:focus:ring-1 dark:focus:ring-amber-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Etternavn
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                required
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 dark:bg-transparent dark:text-white dark:ring-gray-700/60 dark:focus:ring-1 dark:focus:ring-amber-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              E-post
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 dark:bg-transparent dark:text-white dark:ring-gray-700/60 dark:focus:ring-1 dark:focus:ring-amber-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Telefon (mobil)
            </label>
            <div className="relative mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 dark:bg-transparent dark:text-white dark:ring-gray-700/60 dark:focus:ring-1 dark:focus:ring-amber-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Ditt spørsmål
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                className="dark-ring-1 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-400 dark:bg-transparent dark:text-white dark:ring-gray-700/60 dark:focus:ring-1 dark:focus:ring-amber-400 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-gray-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 dark:bg-white/5 dark:hover:bg-white/10"
          >
            Send inn
          </button>
        </div>
      </form>
    </div>
  )
}
