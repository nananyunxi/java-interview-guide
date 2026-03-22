import Link from 'next/link';

const categories = [
  { name: 'Linux 命令', href: '/questions/others/linux', count: 0, tag: '待更新' },
  { name: 'Git 面试题', href: '/questions/others/git', count: 0, tag: '待更新' },
  { name: 'Docker 面试题', href: '/questions/others/docker', count: 0, tag: '待更新' },
  { name: '设计模式', href: '/questions/others/design-patterns', count: 0, tag: '待更新' },
];

export default function OthersPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          📦 其他
        </h1>
        <p className="text-gray-600">
          Linux、Git、Docker、设计模式
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((q) => (
          <Link key={q.href} href={q.href} className="block">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {q.name}
                </h3>
                {q.tag ? (
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded">
                    {q.tag}
                  </span>
                ) : (
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">
                    {q.count} 题
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
