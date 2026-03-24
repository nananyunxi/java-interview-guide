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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ☕ LinkedList 面试题
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-gray-500 mt-1">Java 基础 · 面试高频考点</p>
            </div>
            <Link href="/questions/java-basic" className="text-blue-600 hover:text-blue-700 transition-all duration-300 flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl hover:bg-blue-50 hover:shadow-md group">
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm sm:text-base lg:text-lg font-medium hidden sm:inline">返回 Java 基础</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="space-y-6">
          {questions.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              {/* Question Header */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-4">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-white flex-1 leading-relaxed">
                    Q{index + 1}. {item.q}
                  </h3>
                </div>
              </div>

              {/* Answer */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      ✅ 核心答案
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed bg-blue-50 rounded-lg p-4 border border-blue-100">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
