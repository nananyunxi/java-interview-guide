import Link from 'next/link';

export default function GitPage() {
  const questions = [
    { q: 'Git 常用命令？', a: 'clone、add、commit、push、pull、merge、rebase、cherry-pick' },
    { q: 'merge 和 rebase 的区别？', a: 'merge 保留分支历史，rebase 重写历史使提交线性' },
    { q: '如何解决冲突？', a: '手动编辑冲突文件 → add → commit 完成合并' },
    { q: 'git reset 和 revert 的区别？', a: 'reset 回退提交（改变历史），revert 创建新提交撤销更改（不改变历史）' },
    { q: '什么是 git flow？', a: 'Git 分支管理模型：master、develop、feature、release、hotfix' },
    { q: '如何查看提交历史？', a: 'git log、git log --oneline、git log --graph' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <nav className="mb-6">
        <Link href="/questions/others" className="text-blue-600 hover:underline">
          ← 返回其他
        </Link>
      </nav>
      <article className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          📦 Git 面试题
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
