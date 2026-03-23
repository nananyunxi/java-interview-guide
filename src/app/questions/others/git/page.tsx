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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <nav className="mb-6 sm:mb-8">
          <Link href="/questions/others" className="text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-2 min-h-[44px] px-3 py-2 rounded-lg hover:bg-blue-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-base sm:text-lg font-medium">返回其他</span>
          </Link>
        </nav>
        <article className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 px-6 sm:px-8 py-6 sm:py-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              📦 Git 面试题
            </h1>
            <p className="text-blue-100 mt-2 text-sm sm:text-base">版本控制 · 团队协作必备</p>
          </div>
          <div className="p-4 sm:p-8">
            <div className="space-y-4 sm:space-y-6">
              {questions.map((item, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 sm:pb-6 last:border-0 last:pb-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 leading-relaxed">
                    Q{index + 1}. {item.q}
                  </h3>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-5 rounded-xl border border-blue-100">
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
