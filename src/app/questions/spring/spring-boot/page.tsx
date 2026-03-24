import Link from 'next/link';

export default function SpringBootPage() {
  const questions = [
    { q: 'Spring Boot 的核心注解？', a: '@SpringBootApplication，包含@Configuration、@EnableAutoConfiguration、@ComponentScan' },
    { q: 'Spring Boot 自动配置原理？', a: '读取 spring.factories，根据@Conditional 注解判断是否加载配置类' },
    { q: 'Spring Boot Starter 的作用？', a: '依赖聚合，简化配置，引入所需依赖即可自动配置' },
    { q: 'Spring Boot 配置文件优先级？', a: '命令行参数 > 环境变量 > jar 包外 application.yml > jar 包内 application.yml' },
    { q: 'Spring Boot 如何热部署？', a: '使用 spring-boot-devtools，保存代码自动重启' },
    { q: 'Spring Boot 常用注解？', a: '@RestController、@RequestMapping、@Autowired、@ConfigurationProperties 等' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                🌱 Spring Boot 面试题
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-gray-500 mt-1">Spring 核心 · 面试高频考点</p>
            </div>
            <Link href="/questions/spring" className="text-green-600 hover:text-green-700 transition-all duration-300 flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl hover:bg-green-50 hover:shadow-md group">
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm sm:text-base lg:text-lg font-medium hidden sm:inline">返回 Spring</span>
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
              <div className="bg-gradient-to-r from-green-500 to-teal-500 px-6 py-4">
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
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      ✅ 核心答案
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed bg-green-50 rounded-lg p-4 border border-green-100">
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
