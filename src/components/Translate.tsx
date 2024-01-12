'use client'

import type { Locale } from '../../i18n.config'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import AmericanFlag from '../../public/american-flag.webp'
import FrenchFlag from '../../public/french-flag.webp'

export default function Translate({
  americanFlagAlt,
  frenchFlagAlt,
}: {
  americanFlagAlt: string,
  frenchFlagAlt: string,
}) {
  const pathname = usePathname()

  const newPathname = (locale: Locale): string => {
    if (!pathname)
      return '/'

    const segments = pathname.split('/')
    segments[1] = locale

    return segments.join('/')
  }

  return (
    <div className="inline-flex items-center h-12 px-1 shadow-lg rounded-lg bg-gray-200 dark:bg-gray-700 lg:bg-gray-100 lg:dark:bg-gray-800">
      <div className="flex">
        <Link
          className={`${pathname.includes('/en') && "bg-gray-300 dark:bg-gray-600 lg:bg-gray-200 lg:dark:bg-gray-700"} mx-1 p-2 rounded-lg hover:bg-gray-300 hover:dark:bg-gray-600 lg:hover:bg-gray-200 lg:hover:dark:bg-gray-700`}
          href={newPathname('en')}
        >
          <Image height={16} width={0} src={AmericanFlag} alt={americanFlagAlt} />
        </Link>
        <Link
          className={`${pathname.includes('/fr') && "bg-gray-300 dark:bg-gray-600 lg:bg-gray-200 lg:dark:bg-gray-700"} mx-1 p-2 rounded-lg hover:bg-gray-300 hover:dark:bg-gray-600 lg:hover:bg-gray-200 lg:hover:dark:bg-gray-700`}
          href={newPathname('fr')}
        >
          <Image height={16} width={0} src={FrenchFlag} alt={frenchFlagAlt} />
        </Link>
      </div>
    </div>
  )
}
