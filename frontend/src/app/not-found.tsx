import Link from 'next/link'
import { Droplets } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-eclat-100 mb-6">
        <Droplets className="h-10 w-10 text-eclat-600" />
      </div>
      <h1 className="font-serif text-6xl font-black text-eclat-950">404</h1>
      <p className="mt-4 font-serif text-xl font-semibold text-eclat-800">
        Halaman Tidak Ditemukan
      </p>
      <p className="mt-2 max-w-sm text-muted-foreground">
        Halaman yang Anda cari mungkin sudah dipindahkan atau tidak tersedia.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="rounded-full bg-eclat-800 px-6 py-3 text-sm font-bold text-white hover:bg-eclat-900 transition-colors"
        >
          Kembali ke Beranda
        </Link>
        <Link
          href="/products"
          className="rounded-full border-2 border-eclat-700 px-6 py-3 text-sm font-bold text-eclat-700 hover:bg-eclat-50 transition-colors"
        >
          Lihat Produk
        </Link>
      </div>
    </div>
  )
}
