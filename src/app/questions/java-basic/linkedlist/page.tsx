import Link from 'next/link';

export default function LinkedListPage() {
  const questions = [
    { q: 'LinkedList 的底层结构？', a: '双向链表，每个节点有 prev、next 指针和 item 数据' },
    { q: 'LinkedList 为什么查询慢？', a: '需要从头或尾遍历，时间复杂度 O(n)' },
    { q: 'LinkedList 为什么插入删除快？', a: '只需要修改指针，不需要移动元素，时间复杂度 O(1)' },
    { q: 'LinkedList 是线程安全的吗？', a: '不是，多线程环境需要用 Collections.synchronizedList' },
    { q: 'LinkedList 有哪些常用方法？', a: 'add、remove、get、addFirst、addLast、getFirst、getLast' },
    { q: 'LinkedList 可以存 null 吗？', a: '可以，可以存储多个 null 元素' },
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
          ☕ LinkedList 面试题
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
