import Link from "next/link"
import Image from "next/image"

export function Logo() {
  return (
    <Link href="/">
        <Image src="/images/logo-texto.png" alt="Gambit" width={150} height={40} />
    </Link>
  )
}
