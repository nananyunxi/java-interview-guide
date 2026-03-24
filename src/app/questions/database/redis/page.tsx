import Link from 'next/link';

export default function RedisPage() {
  const questions = [
    { q: 'Redis 的数据类型有哪些？', a: 'String、List、Set、Hash、ZSet（有序集合）' },
    { q: 'Redis 为什么快？', a: '纯内存操作、单线程避免上下文切换、IO 多路复用、高效数据结构' },
    { q: 'Redis 持久化方式？', a: 'RDB（快照）、AOF（追加日志），可单独或混合使用' },
    { q: '缓存穿透、击穿、雪崩的区别？', a: '穿透：查不存在的数据；击穿：热点 key 过期；雪崩：大量 key 同时过期' },
    { q: 'Redis 集群方案？', a: '主从复制、哨兵模式、Cluster 分片集群' },
    { q: 'Redis 淘汰策略？', a: 'volatile-lru、allkeys-lru、volatile-ttl、noeviction 等 8 种' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                💾 Redis 面试题
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-gray-500 mt-1">数据库 · 面试高频考点</p>
            </div>
            <Link href="/questions/database" className="text-indigo-600 hover:text-indigo-700 transition-all duration-300 flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl hover:bg-indigo-50 hover:shadow-md group">
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm sm:text-base lg:text-lg font-medium hidden sm:inline">返回数据库</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="space-y-6">
          {questions.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              {/* Question Header */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-4">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-white flex-1 leading-relaxed">
                    Q{index + 1}. {item.q}
                  </h3>
                </div>
              </div>

              {/* Answer */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                      ✅ 核心答案
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
