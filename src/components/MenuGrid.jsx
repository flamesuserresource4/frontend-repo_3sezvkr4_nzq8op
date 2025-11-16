import { Sparkles, BookOpen, ShoppingBag, Settings, Trophy, Gift } from 'lucide-react'

const items = [
  { icon: Sparkles, label: '플레이', desc: '차분한 배틀', href: '#play', color: 'from-pink-200 to-purple-200' },
  { icon: BookOpen, label: '도감', desc: '카드 수집', href: '#collection', color: 'from-blue-200 to-mint-200' },
  { icon: ShoppingBag, label: '상점', desc: '부드러운 굿즈', href: '#shop', color: 'from-purple-200 to-blue-200' },
  { icon: Trophy, label: '순위표', desc: '편안한 경쟁', href: '#rank', color: 'from-lavender-200 to-pink-200' },
  { icon: Gift, label: '선물함', desc: '받은 마음', href: '#gifts', color: 'from-cream-200 to-pink-200' },
  { icon: Settings, label: '설정', desc: '휴식 모드', href: '#settings', color: 'from-mint-200 to-blue-200' },
]

export default function MenuGrid() {
  return (
    <section className="relative -mt-12 sm:-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {items.map(({ icon: Icon, label, desc, href, color }) => (
            <a
              key={label}
              href={href}
              className={`group rounded-3xl bg-gradient-to-br ${color} p-4 sm:p-5 shadow-sm hover:shadow-md transition block`}
            >
              <div className="aspect-square rounded-2xl bg-white/70 backdrop-blur border border-white/60 flex items-center justify-center mb-2">
                <Icon className="h-6 w-6 text-purple-600" />
              </div>
              <div className="space-y-0.5">
                <p className="text-sm sm:text-base font-semibold text-purple-800">{label}</p>
                <p className="text-xs text-purple-700/70">{desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
