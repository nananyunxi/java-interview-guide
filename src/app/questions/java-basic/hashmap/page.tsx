import Link from 'next/link';

export default function HashmapPage() {
  const questions = [
    { q: 'HashMap 的底层数据结构是什么？', a: 'JDK 1.7：数组 + 链表；JDK 1.8：数组 + 链表 + 红黑树' },
    { q: 'HashMap 的 put 方法执行过程？', a: 'hash 计算 → 找位置 → 判空 → 插入/覆盖 → 扩容' },
    { q: 'HashMap 的扩容机制？', a: '默认容量 16，负载因子 0.75，2 倍扩容，重新 hash 分布' },
    { q: 'HashMap 和 Hashtable 的区别？', a: 'HashMap 不安全但快，Hashtable 安全但慢；HashMap 允许 null' },
    { q: 'HashMap 为什么线程不安全？', a: '1.7 会死循环，1.8 会丢数据；多线程用 ConcurrentHashMap' },
    { q: 'HashMap 的 hash 方法实现？', a: '高低 16 位异或，让分布更均匀' },
    { q: 'HashMap 的长度为什么是 2 的幂次方？', a: '位运算快，分布均匀' },
    { q: 'HashMap 和 ConcurrentHashMap 的区别？', a: 'HashMap 不安全，ConcurrentHashMap 安全；1.7 分段锁，1.8 CAS+synchronized' },
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
          ☕ HashMap 面试题
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
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            💡 详细解析请查看源文件：content/java-basic/hashmap.md
          </p>
        </div>
      </article>
    </div>
  );
}
