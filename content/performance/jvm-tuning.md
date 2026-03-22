# 性能优化 - JVM 调优面试题

## 1. JVM 内存结构？

**答案**：
```
JVM 内存
├── 堆（Heap）- 线程共享
│   ├── 新生代（Young）
│   │   ├── Eden 区
│   │   ├── Survivor0 区
│   │   └── Survivor1 区
│   └── 老年代（Old）
├── 方法区（Method Area）- 线程共享
│   └── 元空间（Metaspace，JDK 8+）
├── 虚拟机栈（VM Stack）- 线程私有
├── 本地方法栈（Native Stack）- 线程私有
└── 程序计数器（PC Register）- 线程私有
```

**记忆要点**：
- 堆：新生代 + 老年代
- 方法区：元空间（JDK8+）
- 栈：虚拟机栈 + 本地方法栈
- 计数器：程序计数器

---

## 2. 常见的 GC 算法？

**答案**：
| 算法 | 说明 | 优点 | 缺点 |
|------|------|------|------|
| 标记 - 清除 | 标记存活对象，清除未标记对象 | 简单 | 碎片多 |
| 标记 - 复制 | 存活对象复制到另一块区域 | 无碎片 | 空间利用率低 |
| 标记 - 整理 | 存活对象向一端移动 | 无碎片 | 移动成本高 |
| 分代收集 | 不同代使用不同算法 | 高效 | 复杂 |

**记忆要点**：
- 新生代：标记 - 复制
- 老年代：标记 - 整理

---

## 3. 常见的垃圾收集器？

**答案**：
| 收集器 | 区域 | 算法 | 特点 |
|--------|------|------|------|
| Serial | 新生代 | 复制 | 单线程，简单 |
| ParNew | 新生代 | 复制 | Serial 多线程版 |
| Parallel Scavenge | 新生代 | 复制 | 吞吐量优先 |
| CMS | 老年代 | 标记 - 清除 | 低延迟 |
| G1 | 堆 | 分区 | 可预测停顿 |
| ZGC | 堆 | 分区 | 超低延迟（JDK11+） |

**记忆要点**：
- 新生代：Serial、ParNew、Parallel
- 老年代：CMS、G1、ZGC

---

## 4. GC 日志如何分析？

**答案**：
```bash
# 开启 GC 日志
-XX:+PrintGCDetails -XX:+PrintGCDateStamps -Xloggc:/path/to/gc.log

# 分析工具
- GCViewer
- GCEasy.io
- IBM GC Analyzer
```

**关键指标**：
- Young GC 频率和时间
- Full GC 频率和时间
- 堆内存使用趋势
- 停顿时间

**记忆要点**：
- 开日志 → 用工具 → 看指标

---

## 5. 如何排查 OOM 问题？

**答案**：
1. **保留现场**：`-XX:+HeapDumpOnOutOfMemoryError`
2. **分析 Dump 文件**：MAT、JVisualVM
3. **定位问题**：
   - 内存泄漏：对象无法回收
   - 内存溢出：对象过多
4. **解决方案**：
   - 修复代码泄漏
   - 增加堆内存
   - 优化数据结构

**记忆要点**：
- 留现场 → 分析 → 定位 → 解决

---

## 6. JVM 参数调优？

**答案**：
### 堆内存参数
```bash
-Xms2g -Xmx2g              # 初始堆=最大堆=2G
-Xmn1g                     # 新生代 1G
-XX:SurvivorRatio=8        # Eden:Survivor=8:1
```

### GC 参数
```bash
-XX:+UseG1GC               # 使用 G1 收集器
-XX:MaxGCPauseMillis=200   # 最大停顿时间 200ms
```

### 问题排查参数
```bash
-XX:+PrintGCDetails        # 打印 GC 详情
-XX:+HeapDumpOnOutOfMemoryError  # OOM 时 dump 堆
```

**记忆要点**：
- 堆内存：Xms、Xmx、Xmn
- GC：UseG1GC、MaxGCPauseMillis
- 排查：PrintGC、HeapDump

---

## 7. 如何优化系统性能？

**答案**：
### 应用层
- 缓存（Redis、本地缓存）
- 异步处理（消息队列）
- 批量处理
- 连接池

### 数据库层
- 索引优化
- SQL 优化
- 读写分离
- 分库分表

### JVM 层
- 合理设置堆大小
- 选择合适的 GC
- 减少对象创建
- 避免大对象

**记忆要点**：
- 应用：缓存、异步、批量、池
- 数据库：索引、SQL、分离、分表
- JVM：堆大小、GC、少对象

---

## 8. CPU 100% 如何排查？

**答案**：
```bash
# 1. 找到占用 CPU 最高的进程
top

# 2. 找到占用 CPU 最高的线程
top -Hp <pid>

# 3. 转换线程 ID 为 16 进制
printf "%x\n" <tid>

# 4. 导出线程栈
jstack <pid> | grep <16 进制 tid> -A 20

# 5. 分析代码
# 常见原因：死循环、频繁 GC、复杂计算
```

**记忆要点**：
- top → top -Hp → 转 16 进制 → jstack → 分析
