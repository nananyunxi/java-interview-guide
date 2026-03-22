import Link from 'next/link';

export default function DockerPage() {
  const questions = [
    { q: '什么是 Docker？', a: '容器化平台，将应用及其依赖打包到容器中，实现一次构建到处运行' },
    { q: 'Docker 的核心概念？', a: '镜像（Image）、容器（Container）、仓库（Repository）' },
    { q: 'Dockerfile 常用指令？', a: 'FROM、RUN、COPY、ADD、EXPOSE、CMD、ENTRYPOINT、ENV' },
    { q: 'Docker 和虚拟机的区别？', a: 'Docker 容器共享宿主机内核，更轻量；虚拟机有完整操作系统，更重' },
    { q: 'Docker 常用命令？', a: 'docker run、ps、images、build、push、pull、stop、rm' },
    { q: '什么是 Docker Compose？', a: '多容器应用编排工具，用 YAML 文件定义和运行多容器应用' },
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
          📦 Docker 面试题
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
