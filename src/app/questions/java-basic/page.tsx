import Link from 'next/link';

const questions = [
  { name: 'ArrayList 面试题', href: '/questions/java-basic/arraylist', count: 0, tag: '待更新' },
  { name: 'LinkedList 面试题', href: '/questions/java-basic/linkedlist', count: 0, tag: '待更新' },
  { name: 'String 面试题', href: '/questions/java-basic/string', count: 0, tag: '待更新' },
  { name: 'Exception 面试题', href: '/questions/java-basic/exception', count: 0, tag: '待更新' },
  { name: '泛型面试题', href: '/questions/java-basic/generics', count: 0, tag: '待更新' },
  { name: '反射面试题', href: '/questions/java-basic/reflection', count: 0, tag: '待更新' },
];

export default function JavaBasicPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          ☕ Java 基础
        </h1>
        <p className="text-gray-600">
          数据类型、面向对象、异常、泛型、反射、注解
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/questions/java-basic/hashmap" className="block">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-gray-900">
                HashMap 面试题
              </h3>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">8 题</span>
            </div>
          </div>
        </Link>

        {questions.map((q) => (
          <Link key={q.href} href={q.href} className="block" key={q.href}>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {q.name}
                </h3>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded">
                  {q.tag}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
