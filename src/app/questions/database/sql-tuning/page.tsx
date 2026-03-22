import Link from 'next/link';

export default function SqlTuningPage() {
  const questions = [
    { q: 'SQL 调优的步骤？', a: '慢查询定位 → EXPLAIN 分析 → 索引优化 → SQL 重写 → 架构优化' },
    { q: 'EXPLAIN 结果重点关注什么？', a: 'type（访问类型）、key（使用索引）、rows（扫描行数）、Extra（额外信息）' },
    { q: '索引失效的场景？', a: '最左前缀、函数运算、类型转换、左模糊、OR、负向查询' },
    { q: '如何优化 COUNT 查询？', a: '使用覆盖索引、维护计数表、使用近似值' },
    { q: '分页查询如何优化？', a: '延迟关联、子查询优化、记录上次 ID' },
    { q: '什么是慢查询日志？', a: '记录执行时间超过阈值的 SQL，用于定位性能问题' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <nav className="mb-6">
        <Link href="/questions/database" className="text-blue-600 hover:underline">
          ← 返回数据库
        </Link>
      </nav>
      <article className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          💾 SQL 调优面试题
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
