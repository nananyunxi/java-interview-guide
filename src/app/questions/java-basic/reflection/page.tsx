import Link from 'next/link';

export default function ReflectionPage() {
  const questions = [
    { q: '什么是反射？', a: '运行时动态获取类的信息并操作类的能力，Java 框架的核心机制' },
    { q: '反射的用途？', a: '框架开发（Spring、MyBatis）、动态代理、IDE 代码提示、序列化' },
    { q: '如何获取 Class 对象？', a: 'Class.forName()、对象.getClass()、类名.class' },
    { q: '反射的优缺点？', a: '优点：灵活、动态；缺点：性能开销、安全问题、破坏封装' },
    { q: '如何绕过泛型擦除？', a: '通过反射获取泛型参数类型（Field、Method、Constructor 的 GenericType）' },
    { q: '反射创建对象的步骤？', a: '获取 Class → 获取 Constructor → 调用 newInstance' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-8">
          <Link href="/questions/java-basic" className="text-purple-600 hover:text-purple-700 transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回 Java 基础
          </Link>
        </nav>
        <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-6">
            <h1 className="text-3xl font-bold text-white">
              ☕ 反射面试题
            </h1>
            <p className="text-purple-100 mt-2">Java 基础 · 框架核心机制</p>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              {questions.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-relaxed">
                    Q{index + 1}. {item.q}
                  </h3>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-100">
                    <p className="text-gray-700 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
