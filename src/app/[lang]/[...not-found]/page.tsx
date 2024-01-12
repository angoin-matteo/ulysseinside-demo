'use client'

import type { Locale } from '../../../../i18n.config'

import Link from 'next/link'
import { useDictionary } from '@/hooks'

export default function NotFound({
  params: { lang },
}: {
  params: { lang: Locale },
}) {
  const dictionary = useDictionary(lang)

  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-ulysseInsideBlue">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-50">
          {dictionary?.app.lang.notFound.title ?? "Page non trouvée"}
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-500">
          {dictionary?.app.lang.notFound.subTitle ?? "Désolé, nous n’avons pas trouvé la page que vous recherchez."}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/" className="rounded-md bg-ulysseInsideBlue px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:brightness-[92.5%]">
            {dictionary?.app.lang.notFound.goBackHome ?? "Revenir à l'accueil"}
          </Link>
          <Link href="/product/trainings" className="text-sm font-semibold text-gray-900 dark:text-gray-50">
            {dictionary?.app.lang.notFound.callToAction ?? "Formations"}
            <span aria-hidden="true">{" "}&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
