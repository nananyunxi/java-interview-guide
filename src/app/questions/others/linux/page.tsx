import Link from 'next/link';

export default function LinuxPage() {
  const questions = [
    { q: '如何查看 CPU 使用率？', a: 'top、htop、mpstat' },
    { q: '如何查看内存使用？', a: 'free -h、vmstat、/proc/meminfo' },
    { q: '如何查看磁盘空间？', a: 'df -h、du -sh *' },
    { q: '如何查看进程？', a: 'ps aux、ps -ef、pgrep、pidof' },
    { q: '如何查看端口占用？', a: 'netstat -tunlp、ss -tunlp、lsof -i:端口' },
    { q: '如何查看日志？', a: 'tail -f、less、grep、journalctl' },
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
          📦 Linux 命令面试题
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
