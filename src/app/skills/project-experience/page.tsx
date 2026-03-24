import Link from 'next/link';

export default function ProjectExperiencePage() {
  const content = {
    star: {
      title: "STAR 法则",
      icon: "⭐",
      items: [
        { 
          label: "S (Situation) 情境", 
          text: "描述项目背景、业务场景、团队规模" 
        },
        { 
          label: "T (Task) 任务", 
          text: "你负责的具体任务、目标、挑战" 
        },
        { 
          label: "A (Action) 行动", 
          text: "你采取了什么行动、技术方案、如何解决" 
        },
        { 
          label: "R (Result) 结果", 
          text: "量化成果、性能提升、业务价值" 
        }
      ]
    },
    template: {
      title: "项目介绍模板",
      icon: "📝",
      sections: [
        {
          title: "1. 项目背景（30 秒）",
          text: "这个项目是 XXX 公司的核心业务系统，主要解决 XXX 问题。系统采用 Spring Cloud 微服务架构，包含 X 个服务模块，日均访问量 XXX 万，数据量 XXX。"
        },
        {
          title: "2. 我的职责（30 秒）",
          text: "我在这个项目中主要负责 XXX 模块的设计和开发，包括 XXX、XXX、XXX 等功能。同时参与了技术选型、代码 Review、性能优化等工作。"
        },
        {
          title: "3. 技术亮点（1 分钟）",
          items: [
            "技术选型：采用 Spring Boot + Spring Cloud Alibaba 技术栈",
            "架构设计：使用 XXX 模式，实现 XXX 解耦",
            "性能优化：通过 XXX 优化，接口响应时间从 XXXms 降低到 XXXms",
            "难点攻克：解决了 XXX 问题（如分布式事务、高并发等）"
          ]
        },
        {
          title: "4. 成果展示（30 秒）",
          items: [
            "系统稳定性提升到 XXX%",
            "接口 QPS 从 XXX 提升到 XXX",
            "支撑了 XXX 业务增长",
            "获得 XXX 认可/奖项"
          ]
        }
      ]
    },
    faq: {
      title: "常见问题及回答",
      icon: "❓",
      items: [
        {
          question: "项目中遇到的最大挑战是什么？",
          answer: "最大的挑战是 XXX 问题。当时情况是 XXX，我分析了 XXX 种方案，最终选择了 XXX，因为 XXX。实施后，问题得到了解决，XXX 指标提升了 XXX。"
        },
        {
          question: "你在项目中的贡献是什么？",
          answer: "我主要负责 XXX，具体贡献包括：1) 设计了 XXX 架构；2) 实现了 XXX 功能；3) 优化了 XXX 性能；4) 推动了 XXX 落地。"
        },
        {
          question: "如果重新做这个项目，你会怎么改进？",
          answer: "回顾这个项目，我觉得可以在 XXX 方面改进：1) 当时 XXX 设计不够灵活，现在会采用 XXX；2) 监控告警可以更早介入；3) 文档和代码规范可以更完善。"
        }
      ]
    },
    tips: {
      title: "注意事项",
      icon: "⚠️",
      items: [
        "真实性：不要编造，面试官会深挖",
        "数据支撑：用具体数据证明成果",
        "技术深度：展现你的技术思考",
        "业务理解：说明技术如何服务业务",
        "准备充分：提前准备好可能被问的点"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                📝 如何讲项目经验
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">面试技巧 · 核心能力</p>
            </div>
            <Link href="/skills" className="text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1 text-xs sm:text-sm font-medium">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>返回</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="space-y-6">
          {/* STAR 法则 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-4">
              <h2 className="text-xl font-bold text-white">{content.star.icon} {content.star.title}</h2>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {content.star.items.map((item, idx) => (
                  <div key={idx} className="bg-yellow-50 rounded-lg p-4 border border-yellow-100">
                    <h3 className="font-semibold text-yellow-800 mb-2">{item.label}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 项目介绍模板 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-4">
              <h2 className="text-xl font-bold text-white">{content.template.icon} {content.template.title}</h2>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-4">
                {content.template.sections.map((section, idx) => (
                  <div key={idx} className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <h3 className="font-semibold text-blue-800 mb-2">{section.title}</h3>
                    {section.text ? (
                      <p className="text-gray-700 text-sm leading-relaxed">{section.text}</p>
                    ) : (
                      <ul className="space-y-2">
                        {section.items?.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                            <span className="text-blue-600 flex-shrink-0 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 常见问题 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 px-6 py-4">
              <h2 className="text-xl font-bold text-white">{content.faq.icon} {content.faq.title}</h2>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-4">
                {content.faq.items.map((item, idx) => (
                  <div key={idx} className="bg-green-50 rounded-lg p-4 border border-green-100">
                    <h3 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <span className="text-green-600">❓</span>
                      {item.question}
                    </h3>
                    <div className="bg-white rounded p-3 ml-6">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        <span className="font-medium text-green-700">回答：</span>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 注意事项 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4">
              <h2 className="text-xl font-bold text-white">{content.tips.icon} {content.tips.title}</h2>
            </div>
            <div className="p-4 sm:p-6">
              <ul className="space-y-3">
                {content.tips.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="text-amber-600 flex-shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 mb-6 space-y-4 px-4">
          <Link href="/skills/self-introduction" className="block w-full px-6 py-3.5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all text-blue-600 font-medium text-center text-base">
            <span>上一节：自我介绍</span>
          </Link>
          <Link href="/skills/technical-answers" className="block w-full px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all font-medium text-center text-base">
            <span>下一节：技术回答</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-5xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
          <p>© 2026 Java 面试宝典 - 用心整理，助你拿下 Offer 💪</p>
        </div>
      </footer>
    </div>
  );
}
