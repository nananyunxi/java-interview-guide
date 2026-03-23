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
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <nav className="mb-6 sm:mb-8">
          <Link href="/questions/database" className="text-cyan-600 hover:text-cyan-700 transition-colors flex items-center gap-2 min-h-[44px] px-3 py-2 rounded-lg hover:bg-cyan-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-base sm:text-lg font-medium">返回数据库</span>
          </Link>
        </nav>
        <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 sm:px-8 py-6 sm:py-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              💾 SQL 调优面试题
            </h1>
            <p className="text-cyan-100 mt-2 text-sm sm:text-base">数据库优化 · 性能提升必备</p>
          </div>
          <div className="p-4 sm:p-8">
            <div className="space-y-4 sm:space-y-6">
              {questions.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 sm:pb-6 last:border-0 last:pb-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 leading-relaxed">
                    Q{index + 1}. {item.q}
                  </h3>
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 sm:p-5 rounded-xl border border-cyan-100">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{item.a}</p>
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
