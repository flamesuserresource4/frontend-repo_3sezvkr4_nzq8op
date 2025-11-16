import { Home, Library, ShoppingBag, Swords, User } from 'lucide-react'

const tabs = [
  { icon: Home, label: '홈' },
  { icon: Library, label: '도감' },
  { icon: Swords, label: '배틀' },
  { icon: ShoppingBag, label: '상점' },
  { icon: User, label: '마이' },
]

export default function FooterNav() {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-4">
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/70 shadow-lg">
          <ul className="grid grid-cols-5">
            {tabs.map(({ icon: Icon, label }) => (
              <li key={label}>
                <button className="w-full flex flex-col items-center gap-1 py-3 text-purple-700/80 hover:text-purple-800">
                  <Icon className="h-5 w-5" />
                  <span className="text-xs font-semibold">{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
