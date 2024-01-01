import Image from 'next/image'
import _Logo from '../../public/android-chrome-512x512.png'

export default function Logo() {
  return (
    <Image width={0} height={0} className="h-8 w-auto" src={_Logo} alt="Logo" />
  )
}
