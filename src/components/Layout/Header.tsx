'use client'

import type { Locale } from '../../../i18n.config'

import Link from 'next/link'
import Logo from '@/components/Logo'
import Theme from '@/components/Theme'
import Translate from '@/components/Translate'
import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import { useDictionary } from '@/hooks'

const OpenMainMenuIcon = () => {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  )
}

const CloseMainMenuIcon = () => {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

const ProductIcon = ({
  subMenuIsOpen,
}: {
  subMenuIsOpen: boolean,
}) => {
  return (
    <svg className={`${subMenuIsOpen ? "rotate-180" : ""} h-5 w-5 flex-none text-ulysseInsideBlue`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
    </svg>
  )
}

const AnalyticsIcon = () => {
  return (
    <svg className="h-6 w-6 text-gray-500 group-hover:text-ulysseInsideBlue" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
    </svg>
  )
}

const TrainingIcon = () => {
  return (
    <svg className="h-6 w-6 text-gray-500 group-hover:text-ulysseInsideBlue" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
    </svg>
  )
}

const SecurityIcon = () => {
  return (
    <svg className="h-6 w-6 text-gray-500 group-hover:text-ulysseInsideBlue" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
    </svg>
  )
}

const IntegrationsIcon = () => {
  return (
    <svg className="h-6 w-6 text-gray-500 group-hover:text-ulysseInsideBlue" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
    </svg>
  )
}

const AutomationsIcon = () => {
  return (
    <svg className="h-6 w-6 text-gray-500 group-hover:text-ulysseInsideBlue" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  )
}

const ContactUsIcon = () => {
  return (
    <svg className="h-5 w-5 flex-none text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
    </svg>
  )
}

const WatchDemoIcon = () => {
  return (
    <svg className="h-5 w-5 flex-none text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z" clip-rule="evenodd" />
    </svg>
  )
}

export default function Header({
  lang,
}: {
  lang: Locale,
}) {
  const dictionary = useDictionary(lang)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false)

  return (
    <header>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Ulysse Inside</span>
            <Logo alt={dictionary?.components.logo.alt ?? "Logo d'Ulysse Inside"} />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button onClick={() => setMenuIsOpen(true)} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-ulysseInsideBlue">
            <span className="sr-only">Ouvrir le menu principal</span>
            <OpenMainMenuIcon />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <div
            onMouseEnter={() => setSubMenuIsOpen(true)}
            onMouseLeave={() => setSubMenuIsOpen(false)}
            className="relative"
          >
            <button
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50"
              aria-expanded="false"
            >
              {dictionary?.components.header.menu.product ?? "Produits"}
              <ProductIcon subMenuIsOpen={subMenuIsOpen} />
            </button>

            <Transition
              as={Fragment}
              show={subMenuIsOpen}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-gray-100 shadow-lg ring-1 ring-gray-900/5 dark:bg-gray-800">
                <div className="p-4">
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200 hover:dark:bg-gray-700">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 group-hover:bg-gray-300 group-hover:dark:bg-gray-500">
                      <AnalyticsIcon />
                    </div>
                    <div className="flex-auto">
                      <Link href="/product/analytics" className="block font-semibold text-gray-900 dark:text-gray-50">
                        {dictionary?.components.header.subMenu.analytics.title ?? "Analyse"}
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-500 group-hover:dark:text-gray-400">
                        {dictionary?.components.header.subMenu.analytics.subTitle ?? "Déchiffrez les graphiques"}
                      </p>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200 hover:dark:bg-gray-700">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 group-hover:bg-gray-300 group-hover:dark:bg-gray-500">
                      <TrainingIcon />
                    </div>
                    <div className="flex-auto">
                      <Link href="/product/trainings" className="block font-semibold text-gray-900 dark:text-gray-50">
                        {dictionary?.components.header.subMenu.trainings.title ?? "Formations"}
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-500 group-hover:dark:text-gray-400">
                        {dictionary?.components.header.subMenu.trainings.subTitle ?? "Formez-vous et devenez libre financièrement"}
                      </p>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200 hover:dark:bg-gray-700">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 group-hover:bg-gray-300 group-hover:dark:bg-gray-500">
                      <SecurityIcon />
                    </div>
                    <div className="flex-auto">
                      <Link href="/product/security" className="block font-semibold text-gray-900 dark:text-gray-50">
                        {dictionary?.components.header.subMenu.security.title ?? "Sécurité"}
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-500 group-hover:dark:text-gray-400">
                        {dictionary?.components.header.subMenu.security.subTitle ?? "Gagnez gros mais ne perdez jamais"}
                      </p>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200 hover:dark:bg-gray-700">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 group-hover:bg-gray-300 group-hover:dark:bg-gray-500">
                      <IntegrationsIcon />
                    </div>
                    <div className="flex-auto">
                      <Link href="/product/integrations" className="block font-semibold text-gray-900 dark:text-gray-50">
                        {dictionary?.components.header.subMenu.integrations.title ?? "Intégrations"}
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-500 group-hover:dark:text-gray-400">
                        {dictionary?.components.header.subMenu.integrations.subTitle ?? "Munissez-vous des meilleurs outils"}
                      </p>
                    </div>
                  </div>
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200 hover:dark:bg-gray-700">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 group-hover:bg-gray-300 group-hover:dark:bg-gray-500">
                      <AutomationsIcon />
                    </div>
                    <div className="flex-auto">
                      <Link href="/product/automations" className="block font-semibold text-gray-900 dark:text-gray-50">
                        {dictionary?.components.header.subMenu.automations.title ?? "Automatisations"}
                        <span className="absolute inset-0"></span>
                      </Link>
                      <p className="mt-1 text-gray-500 group-hover:dark:text-gray-400">
                        {dictionary?.components.header.subMenu.automations.subTitle ?? "Faites confiance aux logiciels Crypto"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 divide-x bg-gray-300 divide-gray-200 dark:bg-gray-700 dark:divide-gray-800">
                  <Link href="/watch-demo" className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50 hover:bg-gray-400 hover:dark:bg-gray-600">
                    <WatchDemoIcon />
                    {dictionary?.components.header.subMenu.watchDemo ?? "Voir la démo"}
                  </Link>
                  <Link href="/contact-us" className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50 hover:bg-gray-400 hover:dark:bg-gray-600">
                    <ContactUsIcon />
                    {dictionary?.components.header.subMenu.contactUs ?? "Contactez-nous"}
                  </Link>
                </div>
              </div>
            </Transition>
          </div>

          <Link href="/pricing" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
            {dictionary?.components.header.menu.pricing ?? "Tarifs"}
          </Link>
          <Link href="/company" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
            {dictionary?.components.header.menu.company ?? "Société"}
          </Link>
          <Link href="/blog" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
            {dictionary?.components.header.menu.blog ?? "Blog"}
          </Link>
        </div>

        <div className="hidden lg:flex w-auto lg:flex-1 lg:justify-end">
          <Theme />
          <div className="mx-2"></div>
          <Translate
            americanFlagAlt={dictionary?.components.header.menu.translate.americanFlagAlt ?? "Drapeau américan"}
            frenchFlagAlt={dictionary?.components.header.menu.translate.frenchFlagAlt ?? "Drapeau français"}
          />
        </div>
      </nav>
      {menuIsOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">

          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-scroll bg-gray-100 px-6 py-6 dark:bg-gray-800 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Ulysse Inside</span>
                <Logo alt={dictionary?.components.logo.alt ?? "Logo d'Ulysse Inside"} />
              </a>
              <button onClick={() => setMenuIsOpen(false)} type="button" className="-m-2.5 rounded-md p-2.5 text-ulysseInsideBlue">
                <span className="sr-only">Fermer le menu principal</span>
                <CloseMainMenuIcon />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-ulysseInsideBlue">
                <div className="space-y-2 py-6">
                  <div className="-mx-3">
                    <button onClick={() => setSubMenuIsOpen(!subMenuIsOpen)} type="button" className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-50 hover:bg-gray-200 hover:dark:bg-gray-700" aria-controls="disclosure-1" aria-expanded="false">
                      {dictionary?.components.header.menu.product ?? "Produits"}
                      <ProductIcon subMenuIsOpen={subMenuIsOpen} />
                    </button>
                    {subMenuIsOpen && (
                      <div className="mt-2 space-y-2" id="disclosure-1">
                        <Link href="/product/analytics" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 dark:text-gray-50 hover:bg-gray-200 hover:dark:bg-gray-700">
                          {dictionary?.components.header.subMenu.analytics.title ?? "Analyse"}
                        </Link>
                        <Link href="/product/trainings" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 dark:text-gray-50 hover:bg-gray-200 hover:dark:bg-gray-700">
                          {dictionary?.components.header.subMenu.trainings.title ?? "Formations"}
                        </Link>
                        <Link href="/product/security" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 dark:text-gray-50 hover:bg-gray-200 hover:dark:bg-gray-700">
                          {dictionary?.components.header.subMenu.security.title ?? "Sécurité"}
                        </Link>
                        <Link href="/product/integrations" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 dark:text-gray-50 hover:bg-gray-200 hover:dark:bg-gray-700">
                          {dictionary?.components.header.subMenu.integrations.title ?? "Intégrations"}
                        </Link>
                        <Link href="/product/automations" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 dark:text-gray-50 hover:bg-gray-200 hover:dark:bg-gray-700">
                          {dictionary?.components.header.subMenu.automations.title ?? "Automatisations"}
                        </Link>
                        <Link href="/watch-demo" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 dark:text-gray-50 hover:bg-gray-200 hover:dark:bg-gray-700">
                          {dictionary?.components.header.subMenu.watchDemo ?? "Voir la démo"}
                        </Link>
                        <Link href="/contact-us" className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 dark:text-gray-50 hover:bg-gray-200 hover:dark:bg-gray-700">
                          {dictionary?.components.header.subMenu.contactUs ?? "Contactez-nous"}
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link href="/pricing" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-50 hover:bg-gray-200 hover:dark:bg-gray-700">
                    {dictionary?.components.header.menu.pricing ?? "Tarifs"}
                  </Link>
                  <Link href="/company" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-50 hover:bg-gray-200 hover:dark:bg-gray-700">
                    {dictionary?.components.header.menu.company ?? "Société"}
                  </Link>
                  <Link href="/blog" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-50 hover:bg-gray-200 hover:dark:bg-gray-700">
                    {dictionary?.components.header.menu.blog ?? "Blog"}
                  </Link>
                </div>
                <div className="flex items-center py-6">
                  <Theme />
                  <div className="mx-2"></div>
                  <Translate
                    americanFlagAlt={dictionary?.components.header.menu.translate.americanFlagAlt ?? "Drapeau américain"}
                    frenchFlagAlt={dictionary?.components.header.menu.translate.frenchFlagAlt ?? "Drapeau français"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
