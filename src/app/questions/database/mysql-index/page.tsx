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
    <div className="max-w-4xl mx-auto">
      <nav className="mb-6">
        <Link href="/questions/database" className="text-blue-600 hover:underline">
          ← 返回数据库
        </Link>
      </nav>
      <article className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          💾 MySQL 索引面试题
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
            💡 详细解析请查看源文件：content/database/mysql-index.md
          </p>
        </div>
      </article>
    </div>
  );
}
