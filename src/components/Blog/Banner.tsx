import Image from 'next/image'

export default function Banner({
  alt,
  src,
} : {
  alt: string,
  src: string,
}) {
  return <Image width={800} height={0} alt={alt} src={src} />
}
