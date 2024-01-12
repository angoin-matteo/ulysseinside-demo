import Image from 'next/image'
import LogoSrc from '../../public/logo.webp'

export default function Logo({
  alt,
}: {
  alt: string,
}) {
  return <Image className="h-12 w-auto" height={0} width={0} src={LogoSrc} alt={alt} />
}
