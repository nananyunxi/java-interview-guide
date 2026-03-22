import Link from 'next/link';

export default function ArrayListPage() {
  const questions = [
    { q: 'ArrayList 和 LinkedList 的区别？', a: 'ArrayList 基于数组，随机访问快 O(1)；LinkedList 基于链表，插入删除快 O(1)' },
    { q: 'ArrayList 的扩容机制？', a: '默认容量 10，扩容为原来的 1.5 倍，使用 Arrays.copyOf 复制' },
    { q: 'ArrayList 如何线程安全？', a: 'Collections.synchronizedList、CopyOnWriteArrayList' },
    { q: 'ArrayList 的删除操作？', a: 'remove(int index) 删除指定位置，remove(Object o) 删除对象，需要移动元素' },
    { q: 'ArrayList 和数组的区别？', a: '数组长度固定，ArrayList 动态扩容；数组可以存基本类型，ArrayList 只能存对象' },
    { q: 'ArrayList 的遍历方式？', a: 'for 循环、迭代器、增强 for 循环、stream API' },
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
          ☕ ArrayList 面试题
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
