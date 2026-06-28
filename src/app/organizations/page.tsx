export default function Organizations() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-10">Featured Organizations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-900/50 p-6 rounded-lg border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">The Planetary Society</h3>
            <p className="text-gray-300 mb-4">Advancing space exploration and scientific discovery</p>
            <a href="https://www.planetary.org" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Learn More →</a>
          </div>
          <div className="bg-purple-900/50 p-6 rounded-lg border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">SETI Institute</h3>
            <p className="text-gray-300 mb-4">Searching for extraterrestrial intelligence and life</p>
            <a href="https://www.seti.org" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Learn More →</a>
          </div>
          <div className="bg-purple-900/50 p-6 rounded-lg border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">CERN</h3>
            <p className="text-gray-300 mb-4">Supporting scientific research at the frontiers</p>
            <a href="https://www.cern.ch" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Learn More →</a>
          </div>
          <div className="bg-purple-900/50 p-6 rounded-lg border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">St. Jude Hospital</h3>
            <p className="text-gray-300 mb-4">Treating and curing childhood cancer</p>
            <a href="https://www.stjude.org" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">Learn More →</a>
          </div>
        </div>
      </div>
    </div>
  )
}