export default function Discover() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Discover Science</h1>
        <p className="text-lg text-gray-300 mb-10">Explore the frontiers of human knowledge.</p>
        <div className="space-y-6">
          <div className="bg-purple-900/50 p-6 rounded-lg border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Space Exploration</h3>
            <p className="text-gray-300">Venturing beyond Earth to understand our place in the cosmos.</p>
          </div>
          <div className="bg-purple-900/50 p-6 rounded-lg border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Quantum Physics</h3>
            <p className="text-gray-300">Understanding the fundamental rules governing matter and energy.</p>
          </div>
          <div className="bg-purple-900/50 p-6 rounded-lg border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Artificial Intelligence</h3>
            <p className="text-gray-300">Creating intelligent systems that enhance human capabilities.</p>
          </div>
        </div>
      </div>
    </div>
  )
}