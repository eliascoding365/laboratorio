import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link href='/inicio'>Ir para inicio</Link>
        <Link href='/login'>Ir para login</Link>
        <Link href='/forms'> Ir a forms</Link>
      </div>
    </main>
  )
}
