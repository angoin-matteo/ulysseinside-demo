import Link from 'next/link'
import Image from 'next/image'
import Matteo from '../../../public/people/matteo.jpg'
import { Gray as GrayBadge, Green as GreenBadge } from '@/components/Badges'

export default function Blog() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Le blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">Découvrez les conseils d'experts.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime="2023-12-31" className="text-gray-500">31 Décembre 2023</time>
              {/* <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Crypto</a> */}
              <GrayBadge value="Crypto" />
              <GreenBadge value="Nouveau" />
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <Link href="/blog/matteo/decouvrez-le-monde-des-crypto">
                  <span className="absolute inset-0"></span>
                  Découvrez le monde des crypto
                </Link>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Comment est-ce que ça fonctionne ? A quoi ça sert ? Retrouvez les réponses à toutes vos questions dans cet article.</p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <Image width={0} height={0} src={Matteo} alt="Mattéo" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <Link href="/societe">
                      <span className="absolute inset-0"></span>
                      Mattéo
                    </Link>
                  </p>
                  <p className="text-gray-600">Co-Fondateur</p>
                </div>
            </div>
          </article>

        </div>
      </div>
    </div>

  )
}
