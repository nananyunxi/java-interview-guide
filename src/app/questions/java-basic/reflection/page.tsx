import Link from 'next/link';

export default function ReflectionPage() {
  const questions = [
    { q: '什么是反射？', a: '运行时动态获取类的信息并操作类的能力，Java 框架的核心机制' },
    { q: '反射的用途？', a: '框架开发（Spring、MyBatis）、动态代理、IDE 代码提示、序列化' },
    { q: '如何获取 Class 对象？', a: 'Class.forName()、对象.getClass()、类名.class' },
    { q: '反射的优缺点？', a: '优点：灵活、动态；缺点：性能开销、安全问题、破坏封装' },
    { q: '如何绕过泛型擦除？', a: '通过反射获取泛型参数类型（Field、Method、Constructor 的 GenericType）' },
    { q: '反射创建对象的步骤？', a: '获取 Class→获取 Constructor→调用 newInstance' },
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
          ☕ 反射面试题
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
