import Link from 'next/link';

export default function SelfIntroductionPage() {
  const content = {
    sections: [
      {
        title: "通用模板（1-3 分钟）",
        icon: "📝",
        items: [
          { label: "开场", text: "面试官您好，我叫 XXX，很高兴参加今天的面试。" },
          { label: "基本信息", text: "我毕业于 XXX 大学 XXX 专业，有 X 年 Java 开发经验。" },
          { label: "技术栈", text: "我熟悉 Java 核心技术，包括集合、并发、JVM 等；熟练使用 Spring、Spring Boot、Spring Cloud 等框架；有 MySQL、Redis 等数据库的使用和优化经验；了解微服务架构设计。" },
          { label: "项目经验", text: "在上一家公司，我主要负责 XXX 系统的开发，这个系统采用了 Spring Cloud 微服务架构，我独立负责了 XXX 模块的设计和实现，通过 XXX 优化，将接口响应时间从 XXX 降低到 XXX。" },
          { label: "结尾", text: "我对贵公司的 XXX 业务很感兴趣，相信我的技术能力和项目经验能够胜任这个岗位。谢谢！" }
        ]
      },
      {
        title: "不同经验版本",
        icon: "👤",
        items: [
          { 
            label: "应届生（1 分钟）", 
            text: "面试官好，我叫 XXX，是 XXX 大学计算机专业的应届毕业生。在校期间我系统学习了 Java 编程、数据结构、算法等课程，GPA 专业前 X%。我熟悉 Java 基础和 Spring 框架，做过 XXX 项目（简单描述）。我学习能力强，对技术有热情，希望能加入贵公司成长。谢谢！" 
          },
          { 
            label: "3-5 年经验（2 分钟）", 
            text: "面试官好，我叫 XXX，有 X 年 Java 开发经验。目前/之前在 XXX 公司工作，主要负责 XXX 系统。技术栈方面，我精通 Java 并发编程、JVM 调优，熟练使用 Spring Cloud 微服务架构，有 MySQL 分库分表、Redis 集群的实战经验。在 XXX 项目中，我主导了 XXX 模块的重构，将系统 QPS 从 XXX 提升到 XXX。我对贵公司的技术挑战很感兴趣，希望能贡献我的经验。谢谢！" 
          },
          { 
            label: "5 年 + 经验（3 分钟）", 
            text: "面试官好，我叫 XXX，有 X 年 Java 开发经验，其中 X 年担任技术负责人。目前在 XXX 公司，负责 XXX 系统的架构设计和团队管理。技术方面，我有丰富的分布式系统设计经验，包括微服务拆分、服务治理、性能优化等。在 XXX 项目中，我带领 X 人团队完成了系统从单体到微服务的重构，支撑了日均 XXX 万的访问量。除了技术，我也注重团队建设和人才培养。我希望能在贵公司发挥我的技术和经验，同时迎接新的挑战。谢谢！" 
          }
        ]
      }
    ],
    tips: [
      {
        title: "注意事项",
        icon: "⚠️",
        items: [
          "控制时间：1-3 分钟，不要太长",
          "突出亮点：技术栈、项目成果",
          "量化成果：用数据说话（性能提升 X%、处理 QPS 等）",
          "与岗位匹配：根据 JD 调整重点",
          "自然流畅：多练习，不要背诵感太强"
        ]
      },
      {
        title: "准备要点",
        icon: "📋",
        items: [
          "写稿子并熟记",
          "录音练习，调整语速",
          "找朋友模拟面试",
          "根据公司业务调整技术栈重点",
          "突出与岗位最匹配的经验",
          "准备多个版本（1 分钟、2 分钟、3 分钟）"
        ]
      },
      {
        title: "避免踩坑",
        icon: "❌",
        items: [
          `不要说"我学习能力强"（太空洞）→ 要说"我用 1 周时间学会了 XXX，并应用到项目中"`,
          "不要贬低前公司 → 要客观描述离职原因"
        ]
      },
      {
        title: "常见问题",
        icon: "❓",
        items: [
          "Q: 请简单介绍一下你自己 → A: 使用上面的模板，控制在 2 分钟内",
          "Q: 你为什么离开上一家公司 → A: 寻求更好的发展机会，与个人职业规划更匹配",
          `Q: 你的缺点是什么 → A: 说一个真实的缺点 + 正在改进的措施（示例："我有时候过于追求完美，导致进度慢。现在我学会了优先级管理，先保证核心功能按时交付。"）`
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                🎯 自我介绍
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">面试技巧 · 第一印象</p>
            </div>
            <Link href="/skills" className="text-green-600 hover:text-green-700 transition-colors flex items-center gap-1 text-xs sm:gap-1.5 sm:text-sm">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="hidden sm:inline">返回</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="space-y-6">
          {/* Template Sections */}
          {content.sections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 px-6 py-4">
                <h2 className="text-xl font-bold text-white">{section.icon} {section.title}</h2>
              </div>
              <div className="p-4 sm:p-6">
                <div className="space-y-4">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="bg-green-50 rounded-lg p-4 border border-green-100">
                      <h3 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                        <span className="text-green-600">•</span>
                        {item.label}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base pl-6">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Tips Sections */}
          {content.tips.map((tip, tipIdx) => (
            <div key={tipIdx} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4">
                <h2 className="text-xl font-bold text-white">{tip.icon} {tip.title}</h2>
              </div>
              <div className="p-4 sm:p-6">
                <ul className="space-y-3">
                  {tip.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                      <span className="text-amber-600 flex-shrink-0 mt-0.5">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 mb-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
          <Link href="/skills" className="w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-all text-green-600 font-medium flex items-center justify-center gap-2 text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>返回</span>
          </Link>
          <Link href="/skills/project-experience" className="w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all font-medium flex items-center justify-center gap-2 text-sm sm:text-base">
            <span>下一节</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
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
