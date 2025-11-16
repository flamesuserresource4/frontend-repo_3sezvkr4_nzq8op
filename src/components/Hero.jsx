import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[75vh]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/fTzRQ8pMbm1-BzvF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-xl border border-white/70 px-4 py-2 shadow-sm">
          <span className="text-xs font-semibold text-purple-600">NEW</span>
          <span className="text-xs text-purple-500">Season 2 • Moonlight Melody</span>
        </div>
        <h1 className="mt-4 sm:mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-purple-800">
          포근한 카드 모험
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-purple-700/80 max-w-2xl">
          파스텔 세계에서 만나는 귀엽고 편안한 한국형 CCG. 차분한 수집, 포근한 배틀, 사랑스러운 친구들.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a href="#play" className="rounded-2xl bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 text-purple-800 font-semibold px-6 py-3 sm:px-8 sm:py-4 shadow-md hover:shadow-lg transition">
            지금 시작하기
          </a>
          <a href="#collection" className="rounded-2xl bg-white/80 backdrop-blur-xl border border-white/80 text-purple-700 font-semibold px-6 py-3 sm:px-8 sm:py-4 shadow-sm hover:shadow transition">
            카드 도감 보기
          </a>
        </div>
      </div>
    </section>
  )
}
