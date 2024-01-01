import Link from 'next/link'
import Image from 'next/image'

import { Gray as GrayBadge } from '@/components/Badges'

export default function Card({
  alt,
  src,
  href,
  username,
  role,
}: {
  alt: string,
  src: string,
  href: string | undefined,
  username: string,
  role: string,
}) {
  return (
    <div className="relative mt-8 flex items-center gap-x-4">
      <Image className="h-10 w-10 bg-blue rounded-full" width={0} height={0} src={src} alt={alt} />
      <div className="text-sm leading-6">
        <p className="font-semibold text-gray-900">
          <Link href={href || "/societe"}>
            {/* <span className="absolute inset-0"></span> */}
            {username}
          </Link>
        </p>
        <p className="text-gray-600">{role}</p>
      </div>
      <div className="ml-8 gap-x-4 text-xs">
        <time dateTime="2023-12-31" className="text-gray-500">31 Décembre 2023</time>
        {/* <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Crypto</a> */}
        {' '}<GrayBadge value="Crypto" />
      </div>
    </div>
  )
}
