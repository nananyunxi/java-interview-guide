import Link from 'next/link';

export default function GenericsPage() {
  const questions = [
    { q: '什么是泛型？', a: '参数化类型，在编译时检查类型安全，避免强制类型转换' },
    { q: '泛型的擦除是什么？', a: '编译后泛型类型信息被擦除，替换为原始类型（Object 或限定类型）' },
    { q: '泛型通配符？', a: '?' 表示任意类型，'? extends T' 上界，'? super T' 下界' },
    { q: 'PECS 原则？', a: 'Producer Extends, Consumer Super：生产用 extends，消费用 super' },
    { q: '泛型方法和泛型类的区别？', a: '泛型类在类级别定义类型参数，泛型方法在方法级别定义' },
    { q: '为什么不能用泛型创建数组？', a: '数组是协变的，泛型是擦除的，两者冲突会导致类型安全问题' },
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
          ☕ 泛型面试题
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
