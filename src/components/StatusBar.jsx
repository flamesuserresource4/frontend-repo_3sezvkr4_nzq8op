export default function StatusBar() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mt-6 sm:mt-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/70 shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-pink-200 to-purple-200" />
            <div>
              <p className="text-sm font-semibold text-purple-800">솜솜 트레이너</p>
              <p className="text-xs text-purple-700/70">LV 12 · 포근 포인트 1,240</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Chip label="하트" value="48" color="from-pink-200 to-rose-200" />
            <Chip label="스타" value="120" color="from-purple-200 to-blue-200" />
            <Chip label="코인" value="3,560" color="from-mint-200 to-blue-200" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Chip({ label, value, color }) {
  return (
    <div className={`rounded-2xl px-3 py-2 bg-gradient-to-br ${color} text-purple-800 text-xs font-semibold shadow-sm border border-white/70`}> 
      {label}: {value}
    </div>
  )
}
