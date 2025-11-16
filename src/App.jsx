import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatusBar from './components/StatusBar'
import MenuGrid from './components/MenuGrid'
import FooterNav from './components/FooterNav'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-blue-50 text-purple-900">
      <Navbar />
      <Hero />
      <main className="pb-28">
        <StatusBar />
        <MenuGrid />
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12">
          <div className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-sm p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-purple-800">오늘의 포근 미션</h2>
            <ul className="mt-4 grid sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                '하트 10개 모으기',
                '친구에게 포근 인사하기',
                '부드러운 배틀 1회',
              ].map((m) => (
                <li key={m} className="rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 p-4 border border-white/70">
                  <p className="text-sm font-semibold text-purple-800">{m}</p>
                  <p className="text-xs text-purple-700/70 mt-1">보상: 스타 +20</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <FooterNav />
    </div>
  )
}

export default App
