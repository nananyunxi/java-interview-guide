import Link from 'next/link';

export default function SkillsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          🎯 面试技巧
        </h1>
        <p className="text-gray-600">
          掌握面试技巧，让你在面试中脱颖而出
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/skills/self-introduction" className="block">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-900">
                自我介绍
              </h3>
              <span className="text-xs px-2 py-1 bg-red-100 text-red-600 rounded">高频</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">1-3 分钟自我介绍模板，应届生/3-5 年/5 年 + 经验版本</p>
          </div>
        </Link>

        <Link href="/skills/project-experience" className="block">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-900">
                如何讲项目经验
              </h3>
              <span className="text-xs px-2 py-1 bg-red-100 text-red-600 rounded">高频</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">STAR 法则，项目介绍模板，常见问题回答</p>
          </div>
        </Link>

        <Link href="/skills/technical-answers" className="block">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 opacity-50">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-900">
                技术回答技巧
              </h3>
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded">待更新</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">如何回答技术问题，展现深度思考</p>
          </div>
        </Link>

        <Link href="/skills/tips" className="block">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 opacity-50">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-900">
                面试注意事项
              </h3>
              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded">待更新</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">面试前准备、面试中表现、面试后跟进</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
