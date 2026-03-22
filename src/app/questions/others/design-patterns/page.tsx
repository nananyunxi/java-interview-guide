import Link from 'next/link';

export default function DesignPatternsPage() {
  const questions = [
    { q: '设计模式的分类？', a: '创建型（5 种）、结构型（7 种）、行为型（11 种），共 23 种' },
    { q: '单例模式的实现？', a: '饿汉式、懒汉式（双重检查锁）、静态内部类、枚举' },
    { q: '工厂模式和抽象工厂的区别？', a: '工厂模式创建一种产品，抽象工厂创建产品族' },
    { q: '什么是代理模式？', a: '为其他对象提供代理以控制访问，分静态代理和动态代理' },
    { q: '观察者模式的应用？', a: '事件监听、消息订阅、MVC 架构' },
    { q: 'Spring 用了哪些设计模式？', a: '单例（Bean）、工厂（BeanFactory）、代理（AOP）、模板方法（JdbcTemplate）等' },
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
          📦 设计模式面试题
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
