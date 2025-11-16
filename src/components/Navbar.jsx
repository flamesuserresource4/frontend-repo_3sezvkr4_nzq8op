import { Menu, User } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl bg-white/60 backdrop-blur-xl shadow-sm border border-white/60 px-4 py-3">
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center justify-center rounded-2xl bg-white/70 border border-white/80 text-purple-500 p-2 shadow-sm hover:shadow transition">
              <Menu className="h-5 w-5" />
            </button>
            <span className="text-lg font-semibold text-purple-700">
              솜솜 카드 S2
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-2xl bg-gradient-to-r from-pink-200 to-purple-200 text-purple-700 px-3 py-2 text-sm font-semibold shadow-sm hover:shadow transition">
              KR \u2022 한국어
            </button>
            <button className="inline-flex items-center justify-center rounded-2xl bg-white/70 border border-white/80 text-purple-500 p-2 shadow-sm hover:shadow transition">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
