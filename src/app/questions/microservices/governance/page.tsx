import Link from 'next/link';

export default function ServiceGovernancePage() {
  const questions = [
    { q: '什么是服务治理？', a: '对微服务进行管理和控制，包括注册发现、配置管理、负载均衡、熔断降级等' },
    { q: '负载均衡算法？', a: '轮询、随机、加权轮询、一致性哈希、最少连接数' },
    { q: '什么是熔断降级？', a: '服务故障时快速失败，避免雪崩效应，故障恢复后自动恢复' },
    { q: 'Hystrix 的核心功能？', a: '熔断器、线程池隔离、信号量隔离、降级 fallback' },
    { q: 'Sentinel 和 Hystrix 的区别？', a: 'Sentinel 支持更多流量控制场景，规则配置更灵活' },
    { q: '什么是链路追踪？', a: '追踪请求在微服务间的调用链路，用于性能分析和故障定位' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                🏗️ 服务治理面试题
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-gray-500 mt-1">微服务 · 面试高频考点</p>
            </div>
            <Link href="/questions/microservices" className="text-cyan-600 hover:text-cyan-700 transition-all duration-300 flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl hover:bg-cyan-50 hover:shadow-md group">
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm sm:text-base lg:text-lg font-medium hidden sm:inline">返回微服务</span>
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
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-4">
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
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
                      ✅ 核心答案
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed bg-cyan-50 rounded-lg p-4 border border-cyan-100">
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
