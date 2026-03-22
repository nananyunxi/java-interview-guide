# Spring - Bean 生命周期面试题

## 1. Spring Bean 的生命周期？

**答案**：
1. **实例化**：创建 Bean 对象
2. **属性赋值**：注入依赖属性
3. **Aware 接口回调**：
   - BeanNameAware：设置 Bean 名称
   - BeanFactoryAware：设置 BeanFactory
   - ApplicationContextAware：设置 ApplicationContext
4. **前置处理**：BeanPostProcessor.postProcessBeforeInitialization
5. **初始化**：
   - InitializingBean.afterPropertiesSet
   - 自定义 init-method
6. **后置处理**：BeanPostProcessor.postProcessAfterInitialization
7. **使用**：Bean 准备就绪
8. **销毁**：
   - DisposableBean.destroy
   - 自定义 destroy-method

**记忆口诀**：
> 实例 → 属性 → Aware → 前处 → 初始化 → 后处 → 使用 → 销毁

---

## 2. Spring 支持的 Bean 作用域？

**答案**：
| 作用域 | 说明 |
|--------|------|
| singleton（默认） | 单例，整个容器只有一个实例 |
| prototype | 多例，每次获取都创建新实例 |
| request | 每个 HTTP 请求一个实例 |
| session | 每个 HTTP Session 一个实例 |
| application | 每个 ServletContext 一个实例 |

**记忆要点**：
- 单例、多例、请求、会话、应用

---

## 3. Spring 的自动装配方式？

**答案**：
| 方式 | 说明 |
|------|------|
| no | 不自动装配 |
| byName | 根据属性名匹配 Bean |
| byType | 根据属性类型匹配 Bean |
| constructor | 根据构造函数参数匹配 |
| @Autowired | 注解方式（默认 byType） |
| @Resource | 注解方式（默认 byName） |

**记忆要点**：
- byName、byType、构造器、注解

---

## 4. @Autowired 和@Resource 的区别？

**答案**：
| 对比项 | @Autowired | @Resource |
|--------|-----------|-----------|
| 来源 | Spring 提供 | JDK 提供 |
| 装配方式 | byType（可配合@Qualifier 实现 byName） | byName（可配合 type 实现 byType） |
| 属性 | required | name、type |

**记忆要点**：
- Autowired 是 Spring 的，按类型
- Resource 是 JDK 的，按名字

---

## 5. Spring AOP 的实现原理？

**答案**：
- **JDK 动态代理**：基于接口，使用 Proxy 类
- **CGLIB 动态代理**：基于继承，使用 ASM 字节码生成

**Spring 选择策略**：
- 如果目标对象实现了接口，使用 JDK 代理
- 如果目标对象没有实现接口，使用 CGLIB 代理

**记忆要点**：
- 有接口用 JDK，没接口用 CGLIB

---

## 6. Spring 事务的传播行为？

**答案**：
| 传播行为 | 说明 |
|----------|------|
| REQUIRED（默认） | 如果当前有事务则加入，否则新建事务 |
| REQUIRES_NEW | 新建事务，如果当前有事务则挂起 |
| NESTED | 如果当前有事务则在嵌套事务中执行 |
| SUPPORTS | 如果当前有事务则支持，否则以非事务方式执行 |
| NOT_SUPPORTED | 以非事务方式执行，如果当前有事务则挂起 |
| MANDATORY | 如果当前有事务则支持，否则抛异常 |
| NEVER | 以非事务方式执行，如果当前有事务则抛异常 |

**记忆要点**：
- REQUIRED：有就加入，没有就新建
- REQUIRES_NEW：总是新建
- NESTED：嵌套事务

---

## 7. Spring 事务的隔离级别？

**答案**：
| 隔离级别 | 说明 |
|----------|------|
| DEFAULT | 使用数据库默认隔离级别 |
| READ_UNCOMMITTED | 读未提交（最低，有脏读） |
| READ_COMMITTED | 读已提交（避免脏读） |
| REPEATABLE_READ | 可重复读（避免不可重复读） |
| SERIALIZABLE | 串行化（最高，避免幻读） |

**记忆要点**：
- 读未提交 < 读已提交 < 可重复读 < 串行化
- 级别越高，性能越差

---

## 8. Spring Boot 自动配置原理？

**答案**：
1. **@SpringBootApplication** 包含 **@EnableAutoConfiguration**
2. **@EnableAutoConfiguration** 导入 **AutoConfigurationImportSelector**
3. 读取 `META-INF/spring.factories` 文件中的自动配置类
4. 根据 **@Conditional** 注解判断是否生效
5. 加载符合条件的自动配置类

**记忆要点**：
- 注解 → 选择器 → 读配置 → 判断条件 → 加载
