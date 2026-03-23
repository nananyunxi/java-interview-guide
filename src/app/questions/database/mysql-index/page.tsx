import Link from 'next/link';

export default function MysqlIndexPage() {
  const questions = [
    { q: '为什么 MySQL 使用 B+ 树？', a: '树更矮胖 IO 更少，叶子有链表范围查询快' },
    { q: '聚簇索引和非聚簇索引的区别？', a: '聚簇：索引 + 数据在一起；非聚簇：索引存主键，需回表' },
    { q: '什么是覆盖索引？', a: '查询列=索引列，不用回表，减少 IO' },
    { q: '索引失效的场景？', a: '最左前缀、函数、类型转换、左模糊、OR、负向查询' },
    { q: '如何优化慢查询？', a: '开日志 → EXPLAIN → 优索引 → 优 SQL → 优结构' },
    { q: '事务的 ACID 特性？', a: '原子 undo、一致结果、隔离锁+MVCC、持久 redo' },
    { q: '事务的隔离级别？', a: '读未提交、读已提交、可重复读、串行化' },
    { q: 'MVCC 的实现原理？', a: '隐藏字段、undo log、read view' },
    { q: 'InnoDB 的锁类型？', a: '记录锁、间隙锁、临键锁、意向锁' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-8">
          <Link href="/questions/database" className="text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回数据库
          </Link>
        </nav>
        <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-6">
            <h1 className="text-3xl font-bold text-white">
              💾 MySQL 索引面试题
            </h1>
            <p className="text-emerald-100 mt-2">数据库核心 · 索引优化必备</p>
          </div>
          <div className="p-8">
            <div className="space-y-6">
              {questions.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-relaxed">
                    Q{index + 1}. {item.q}
                  </h3>
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-5 rounded-xl border border-emerald-100">
                    <p className="text-gray-700 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>💡</span>
                <span>详细解析请查看源文件：content/database/mysql-index.md</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
