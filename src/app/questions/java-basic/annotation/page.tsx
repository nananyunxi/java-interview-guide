import Link from 'next/link';

export default function AnnotationPage() {
  const questions = [
    { q: '什么是注解？', a: '元数据，提供代码信息，编译时或运行时读取' },
    { q: 'Java 内置注解有哪些？', a: '@Override、@Deprecated、@SuppressWarnings' },
    { q: '元注解有哪些？', a: '@Target、@Retention、@Documented、@Inherited' },
    { q: '如何自定义注解？', a: '使用@interface 定义，可以定义属性和默认值' },
    { q: '注解的保留策略？', a: 'SOURCE（源码）、CLASS（字节码）、RUNTIME（运行时）' },
    { q: 'Spring 常用注解？', a: '@Autowired、@Component、@Service、@Controller、@RequestMapping 等' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <nav className="mb-6">
        <Link href="/questions/java-basic" className="text-blue-600 hover:underline">
          ← 返回 Java 基础
        </Link>
      </nav>
      <article className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          ☕ 注解面试题
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
