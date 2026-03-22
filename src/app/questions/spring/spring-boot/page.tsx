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
    <div className="max-w-4xl mx-auto">
      <nav className="mb-6">
        <Link href="/questions/spring" className="text-blue-600 hover:underline">
          ← 返回 Spring
        </Link>
      </nav>
      <article className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          🌱 Spring Boot 面试题
        </h1>
        <div className="space-y-6">
          {questions.map((item, index) => (
            <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Q{index + 1}. {item.q}
              </h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
