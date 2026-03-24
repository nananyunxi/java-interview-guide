import Link from 'next/link';

export default function ServiceDiscoveryPage() {
  const questions = [
    { q: '什么是服务注册与发现？', a: '服务启动时注册到注册中心，消费者从注册中心获取服务地址' },
    { q: '常见的服务注册中心？', a: 'Eureka（已停更）、Nacos、Consul、Zookeeper' },
    { q: 'Eureka 和 Nacos 的区别？', a: 'Nacos 支持 AP 和 CP 模式，功能更强大；Eureka 只支持 AP' },
    { q: '服务注册的两种方式？', a: '客户端注册（服务自己注册）、服务端注册（第三方注册）' },
    { q: '服务发现的两种方式？', a: '客户端发现（消费者查注册中心）、服务端发现（通过负载均衡器）' },
    { q: '什么是服务心跳？', a: '服务定期向注册中心发送心跳，证明自己还活着，超时会被剔除' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                🏗️ 服务注册发现面试题
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
