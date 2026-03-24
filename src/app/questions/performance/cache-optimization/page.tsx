import Link from 'next/link';

export default function CacheOptimizationPage() {
  const questions = [
    { q: '缓存的作用？', a: '减少数据库压力、提高响应速度、提升系统吞吐量' },
    { q: '缓存穿透如何解决？', a: '布隆过滤器、缓存空值、接口校验' },
    { q: '缓存击穿如何解决？', a: '互斥锁、永不过期、热点数据预加载' },
    { q: '缓存雪崩如何解决？', a: '随机过期时间、高可用集群、限流降级' },
    { q: '缓存和数据库一致性？', a: '先更新数据库再删除缓存、延迟双删、订阅 binlog' },
    { q: '什么是缓存预热？', a: '系统启动前/低峰期提前加载热点数据到缓存' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                ⚡ 缓存优化面试题
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-gray-500 mt-1">性能优化 · 面试高频考点</p>
            </div>
            <Link href="/questions/performance" className="text-orange-600 hover:text-orange-700 transition-all duration-300 flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl hover:bg-orange-50 hover:shadow-md group">
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm sm:text-base lg:text-lg font-medium hidden sm:inline">返回性能优化</span>
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
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-4">
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
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                      ✅ 核心答案
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed bg-orange-50 rounded-lg p-4 border border-orange-100">
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
