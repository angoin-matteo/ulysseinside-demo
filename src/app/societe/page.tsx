import Image from 'next/image'
import UlysseInside from '../../../public/people/ulysseinside.png'
import Matteo from '../../../public/people/matteo.jpg'

export default function Societe() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Rencontrez-nous</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">Notre équipe est constitué des deux co-fondateurs.</p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          <li>
            <div className="flex items-center gap-x-6">
              <Image width={0} height={0} className="h-16 w-16 rounded-full" src={UlysseInside} alt="UlysseInside" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Ulysse Inside</h3>
                  <p className="text-sm font-semibold leading-6 text-blue">Co-Fondateur / PDG</p>
                </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-6">
              <Image width={0} height={0} className="h-16 w-16 rounded-full" src={Matteo} alt="Matteo" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Mattéo</h3>
                  <p className="text-sm font-semibold leading-6 text-blue">Co-Fondateur</p>
                </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
