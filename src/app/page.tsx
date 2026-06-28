export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white flex items-center justify-center">
      <div className="text-center max-w-4xl px-4">
        <h1 className="text-6xl font-bold mb-6">Science For Tomorrow</h1>
        <p className="text-2xl mb-8 text-gray-300">
          Investing in Humanity's Future Through Scientific Discovery
        </p>
        <p className="text-lg text-gray-400 mb-12">
          Founded by Ved Saparia
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/about" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-lg transition">
            Learn More
          </a>
          <a href="/organizations" className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/20 font-bold rounded-lg transition">
            Explore
          </a>
        </div>
      </div>
    </div>
  )
}