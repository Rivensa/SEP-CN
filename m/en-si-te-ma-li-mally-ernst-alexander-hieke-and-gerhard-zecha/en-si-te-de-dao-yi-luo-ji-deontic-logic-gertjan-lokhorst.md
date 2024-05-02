# 恩斯特的道义逻辑 deontic logic (Gert-Jan Lokhorst)

*首次发表于2002年4月5日，实质性修订于2019年3月26日。*

1926 年，恩斯特·马利提出了第一个道义逻辑的形式系统。他的系统有几个后果，马利认为这些后果令人惊讶但是可以辩护。它还有一个后果（“如果且仅如果 A 成立，则 A 是义务的”），这个后果被曼格（1939 年）和几乎所有后来的道义逻辑学家认为是不可接受的。我们不仅会描述马利的系统，还会讨论如何修复它。

---

## 1. 引言

1926 年，奥地利哲学家恩斯特·马利（1879-1944）提出了第一个道义逻辑的形式系统。在他提出这个系统的书籍《应当的基本法则：意愿逻辑的要素》中，马利对他的事业给出了以下动机：

> 1919 年，每个人都在使用“自决”这个词。我想要对这个词有一个清晰的理解。但是，当然，我立刻就遇到了围绕“应该”这个概念的困难和模糊之处，问题也就改变了。"应该"的概念是整个伦理学的基本概念。只有当它被纳入公理系统中时，它才能作为伦理学的可用基础。接下来，我将提出这样一个公理系统。[1]

正如马利的话所示，他对道义逻辑的兴趣并不是为了它本身：他主要是想为“一个精确的纯伦理学系统”（eine exakte reine Ethik）奠定基础。他的书中有一半以上的内容都致力于发展这个精确的伦理学系统。接下来，我们将专注于他的书的形式部分，因为它是其“硬核”，也是最受关注的部分。

## 2. 马利的形式语言

恩斯特·马利基于怀特海德和罗素的《数学原理》（第 1 卷，1910 年）中的经典命题演算来构建他的形式系统。

马利系统的非道义部分包括以下词汇：命题字母 A、B、C、P 和 Q（这些符号表示事态），命题变量 M 和 N，命题常量 V（真值）和Λ（假值），命题量词∃和∀，以及连接词¬、&、∨、→和↔。Λ的定义为Λ = ¬V。

马利系统的道义部分包括一元连接词！，二元连接词 f 和∞，以及命题常量 U 和∩。

* 恩斯特·马利将!A 解释为“A 应该是这样的”（A soll sein）或者“让 A 成为这样的”（es sei A）。
* 他将 A f B 解释为“A 要求 B”（A fordert B）。
* 他将 A ∞ B 解释为“A 和 B 互相要求”。
* 他将 U 解释为“无条件义务”（das unbedingt Geforderte）。
* 他将∩解释为“无条件禁止”（das unbedingt Verbotene）。

f，∞和∩的定义为：

| Def. f .  | A f B = A → !B (恩斯特·马利 1926 年，第 12 页) |
| ----------- | -------------------------------------------------- |
| Def. ∞ . | A ∞ B = (A f B) & (B f A)                       |
| Def. ∩.  | ∩ = ¬U                                         |

马利不仅将!A 解释为“应该是 A 的情况。”因为一个人希望某种情况 A 成为现实通常通过“应该是 A 的情况”这种句子来表达（例如，有人可能会说“应该是我富有和有名”来表示她想要富有和有名），他还将!A 解释为“A 是可取的”或“我希望 A 成为现实。”因此，他的形式系统既是关于 Wollen（意愿）的理论，也是关于 Sollen（应该是的情况）的理论。这解释了他书名的副标题。在现代道义逻辑中，基本的道义连接词 O 很少以这种方式被解释。

我们刚刚描述了恩斯特·马利的道义逻辑与现代提案不同的一个方面。还有两个明显的差异：

* 马利只对事态的道义地位感兴趣；他对行为的道义地位没有特别关注。因此，他的道义逻辑是关于 Seinsollen（应该是什么情况）的理论，而不是关于 Tunsollen（应该做什么）的理论。现代作者通常认为 Tunsollen 的概念是基础的。
* 在现代道义逻辑中，禁止 F、许可 P 和放弃 W 的概念通常是通过义务 O 来定义的：FA = O¬A，PA = ¬FA，WA = ¬OA。这样的定义在马利的书中找不到。

## 3. 恩斯特·马利的公理

马利采用了以下非正式的道义原则（马利 1926 年，第 15-19 页）：

| (i)   | 如果 A 需要 B，并且如果 B 则 C，那么 A 需要 C。      |
| ------- | ------------------------------------------------------ |
| (ii)  | 如果 A 需要 B，并且如果 A 需要 C，则 A 需要 B 和 C。 |
| (iii) | 如果 A 需要 B，当且仅当如果 A，则 B 是义务的。       |
| (iv)  | 无条件的义务是义务的。                               |
| (v)   | 道义上的义务并不需要自己的否定。                     |

马利对这些原则并没有提供太多支持。它们在他看来只是直观上似乎是合理的。

马利将他的原则形式化如下（马利 1926 年，第 15-19 页）：

| I.   | ((A f B) & (B → C)) → (A f C)      |
| ------ | -------------------------------------- |
| II.  | ((A f B) & (A f C)) → (A f (B & C)) |
| III. | (A f B) ↔ !(A → B)                 |
| IV.  | ∃U !U                               |
| V.   | ¬(U f ∩)                           |

 公理 IV 很奇怪：

* !U 是(iv)的更自然的形式化。
* 公理 IV 似乎是多余的：!A → !A 是一个重言式，所以根据 Def. f，我们有!A f A，由此根据公理 III(→)，我们有!(!A → A)，再由存在泛化得到∃M !M。公理 IV 似乎对此没有任何添加。
* 恩斯特·马利在公理 IV 中提到的唯一一个包含 U 作为约束变量的公理或定理：在公理 V 和定理(15)-(17)，(20)-(21)，(23)，(23′)和(27)-(35)（如下所示），U 要么是一个常量，要么是一个自由变量。在(iv)的形式化中，应该以相同的方式对待它。

出于这些原因，我们用以下公理替换公理 IV：[2]

| IV. | !U |
| ----- | ---- |

恩斯特·马利很难反对公理 IV 的这个版本，因为根据定义 f，它与他的定理(23′)等价，即 V f U。在接下来的内容中，“公理 IV”将始终指代我们的版本，而不是马利的版本。

使用定义 f，公理 I-V 也可以写成以下形式（恩斯特·马利 1926 年，第 15-19 页和第 24 页）：

| I′.   | ((A → !B) & (B → C)) → (A → !C)        |
| -------- | -------------------------------------------- |
| II′.  | ((A → !B) & (A → !C)) → (A → !(B & C)) |
| III′. | (A → !B) ↔ !(A → B)                     |
| IV′.  | V f U                                      |
| V′.   | ¬(U → !∩)                               |

## 4. 恩斯特·马利的定理

恩斯特·马利从他的公理中推导出了以下定理（恩斯特·马利 1926 年，第 20-34 页）[3]。

| (1)    | (A f B) → (A f V)                                               |
| -------- | ------------------------------------------------------------------ |
| (2)    | (A f Λ) ↔ ∀M (A f M)                                          |
| (3)    | ((M f A) ∨ (M f B)) → (M f (A ∨ B))                           |
| (4)    | ((M f A) & (N f B)) → ((M & N) f (A & B))                       |
| (5)    | !P ↔ ∀M (M f P)                                                |
| (6)    | (!P & (P → Q)) → !Q                                            |
| (7)    | !P → !V                                                         |
| (8)    | ((A f B) & (B f C)) → (A f C)                                   |
| (9)    | (!P & (P f Q)) → !Q                                             |
| (10)   | (!A & !B) ↔ !(A & B)                                            |
| (11)   | (A ∞ B) ↔ !(A ↔ B)                                            |
| (12)   | (A f B) ↔ (A → !B) ↔ !(A → B) ↔ !¬(A & ¬B) ↔ !(¬A ∨ B) |
| (13)   | (A → !B) ↔ ¬(A & ¬!B) ↔ (¬A ∨ !B)                         |
| (14)   | (A f B) ↔ (¬B f ¬A)                                           |
| (15)   | ∀M (M f U)                                                      |
| (16)   | (U → A) → !A                                                   |
| (17)   | (U f A) → !A                                                    |
| (18)   | !!A → !A                                                        |
| (19)   | !!A ↔ !A                                                        |
| (20)   | (U f A) ↔ (A ∞ U)                                              |
| (21)   | !A ↔ (A ∞ U)                                                   |
| (22)   | !V                                                               |
| (23)   | V ∞ U                                                           |
| (23′) | V f U                                                            |
| (24)   | A f A                                                            |
| (25)   | (A → B) → (A f B)                                              |
| (26)   | (A ↔ B) → (A ∞ B)                                             |
| (27)   | ∀M (∩ f ¬M)                                                   |
| (28)   | ∩ f ∩                                                          |
| (29)   | ∩ f U                                                           |
| (30)   | ∩ f Λ                                                          |
| (31)   | ∩ ∞ Λ                                                         |
| (32)   | ¬(U f Λ)                                                       |
| (33)   | ¬(U → Λ)                                                      |
| (34)   | U ↔ V                                                           |
| (35)   | ∩ ↔ Λ                                                         |

## 5. 令人惊讶的后果

马利称定理(1)，(2)，(7)，(22)和(27)–(35)为“令人惊讶”(befremdlich)甚至“悖论”(paradox)。他认为(34)和(35)是他令人惊讶的定理中最令人惊讶的。但是，马利称这些定理为令人惊讶的原因令人困惑，甚至有些混乱。

例如，考虑定理（1）。马利将这个定理解释为：“如果 A 需要 B，那么 A 需要一切事实”（马利 1926 年，第 20 页）。他认为这是一个令人惊讶的说法，我们也同意。然而，马利对（1）的解释是没有根据的。 （1）只是说如果 A 需要 B，那么 A 需要真值。表达式“如果 A 需要 B，那么 A 需要一切事实”可以形式化为

| (1′) | （A f B）→（C→（A f C）） |
| ------- | ----------------------------- |

这个公式是根据公理 I 对（1）的直接推论。换句话说，马利应该按照以下推理：（1'）是令人惊讶的；但是（1'）是根据公理 I 对（1）的直接推论；公理 I 是无争议的；所以（1）应该被视为令人惊讶的。

在许多恩斯特·马利关于令他感到惊讶的定理的其他评论中，可以看到类似的模式。他通常过分解读这些定理，并将它们与其系统中的一些后果混淆起来：

* 马利对(2)感到惊讶，因为他认为它表明如果 A 需要 B 而 B 不成立，则 A 需要任何情况（马利 1926 年，第 21 页）。但是(2)并没有这样的意思。马利的解释是(A f B) → (¬B → (A f C))的解释（根据公理 I，是(2)的一个结果），而不是(2)。
* 马利将(7)解释为“如果有什么东西是必需的，那么所有情况都是必需的”（马利 1926 年，第 28 页），这确实令人惊讶。然而，马利的解释与!A → (B → !B)相对应（根据公理 I，是(7)的一个结果），而不是(7)。
* 恩斯特·马利将(22)改述为“事实应该是这样的”(Mally 1926, p. 24)。我们承认这是一个令人惊讶的说法。但是，马利语言中对应的公式是 A → !A（根据公理 I，是(22)的结果），而不是(22)。
* 恩斯特·马利将(27)解读为“如果不应该发生的事情发生了，那么任何事情都应该发生”(Mally 1926, pp. 24, 33)，但这是马利系统的一个定理!¬A → (A → !B)的改述，而不是(27)。
* 恩斯特·马利将(33)改述为“不是这样的情况不是义务的”(Mally 1926, p. 25)和“一切义务的情况都是这样的”(Mally 1926, p. 34)。这些断言确实令人惊讶，但马利对(33)的解读是没有根据的。它们是!A → A 的改述，而不是(33)。
* 恩斯特·马利对(34)和(35)做出了以下评论：

  > 后者的句子似乎将义务性与事实相等同，无疑是我们“令人惊讶的结果”中最令人惊讶的[4]。
  >

  然而，(34)和(35)并没有断言义务性等同于事实，因为后者的陈述应该被形式化为 A ↔ !A。后者的公式是马利系统的一个定理，稍后将会证明，但在马利的书中找不到。

恩斯特·马利认为定理（28）-（32）之间的关系与其他一些令人惊讶的定理有关，因此他们也被认为是令人惊讶的：

* （28）-（30）是（27）的实例化。但这并不足以称这些定理为令人惊讶的。马利实际上认为（28）比（27）更不令人惊讶：人们可以用它来为报复和复仇辩护（马利 1926 年，第 24 页）。
* （31）暗示了（28）-（30），因此至少与这些定理一样令人惊讶。
* 马利将(32)视为令人惊讶的，因为令人惊讶的定理(33)是(32)和表面上不令人惊讶的定理(25)的直接结果。

马利的令人惊讶的定理列表似乎太短了：例如，根据定义 f，(24)与 A → !A 等价。但是 A → !A 可以解释为“事实应该是如此”，这是马利认为令人惊讶的断言(Mally 1926, p. 24)。那么为什么他没有称(24)为令人惊讶的呢？在(22)之后，它不再让他感到惊讶吗？

尽管马利认为他的许多定理令人惊讶，但他认为自己发现了一个有趣的“正确意愿”(richtiges Wollen)或“与事实一致的意愿”的概念，这与日常对话中使用的义务和意愿的概念不应混淆。马利的“纯粹伦理学的确切系统”主要涉及这个概念，但我们不会描述这个系统，因为它属于伦理学领域，而不是道义逻辑领域。

## 6. Menger 的批评

Mally 的企业受到了很少的热情反应。早在 1926 年，就有人指出“Mally 先生的推论常常是如此令人惊讶的愚蠢和无关紧要，以至于（尽管他精心设计的符号装置），只需要陈述其中一两个推论就足以显示他的讨论已经偏离了自己设定的任务”（Laird 1926，第 395 页）。

1939 年，Karl Menger 对 Mally 的体系进行了毁灭性的攻击。他首先指出 A ↔ !A 是该体系的一个定理。换句话说，如果 A 是事实，那么 A 是义务的，如果 A 应该是事实，那么 A 确实是事实。正如我们已经在定理（34）和（35）中指出的那样，Mally 用非正式的术语提出了同样的主张，但是公式 A ↔ !A 在他的书中没有出现。

Menger's theorem A ↔ !A may be proven as follows (Menger's proof was different; PC denotes the propositional calculus).

First, A → !A is a theorem:

| 1.  | A → ((!B → !B) & (B → A))          | [**PC**][[5](https://plato.stanford.edu/entries/mally-deontic/notes.html#note-5)]                     |
| ----- | --------------------------------------- | -------------------------- |
| 2.  | ((!B → !B) & (B → A)) → (!B → !A) | [ I′ ]                  |
| 3.  | A → (!B → !A)                       | [ 1, 2,**PC**]                 |
| 4.  | !B → (A → !A)                       | [ 3,**PC**]                    |
| 5a. | !U                                    | [ Ax. IV ]               |
| 5b. | !(!A → A)                            | [ III′(→),**PC**]            |
| 6.  | A → !A                               | [ 4, 要么 5a 或 5b, PC ] |
|     |                                       |                          |

其次, !A → A 是一个定理:

| 1. | ((U → !A) & (A → ∩)) → (U → !∩)  | [ I′ ]    |
| ---- | ---------------------------------------- | ------------ |
| 2. | ¬((U → !A) & (A → ∩))              | [ 1, V′,**PC**] |
| 3. | ¬((U → !A) & (A → ∩)) → (!A → A) | [**PC**][[6](https://plato.stanford.edu/entries/mally-deontic/notes.html#note-6)]       |
| 4. | !A → A                                | [ 2, 3,**PC**]   |

因为 A → !A 和 !A → A 是定理，所以 A ↔ !A 也是定理。

Menger 给出了以下评论：

> 这个结果对马利的理论来说似乎是有害的。然而，它表明引入符号!是多余的，因为我们可以在任何地方取消或插入它。但是这个结果（尽管马利在哲学上的辩护）不仅明显地与我们使用“应该”一词的方式相矛盾，而且与马利自己关于这个概念的一些正确观点相矛盾，例如他在发展的开始处所说的 p → (!q or !r)和 p → !(q or r)不是等价的。马利完全正确，根据“应该”一词的普通用法，这两个命题不等价。但是根据他的理论，它们是等价的，因为 p 和!p 是等价的（Menger 1939，第 58 页）。

几乎所有的道义逻辑学家都接受了门格的裁决。1939 年之后，马利的道义系统很少被认真对待。

## 7. 马利犯了什么错误？

恩斯特·马利在哪里出错了？如何构建一个更能体现日常对义务概念的道义逻辑系统？有三种可能的答案：

* 马利不应该将他的道义公理添加到经典命题逻辑中；
* 他的一些道义原则应该被修改；以及
* 以上两者皆是。门格尔主张后者观点：“马利有趣尝试失败的原因之一是它建立在二值命题演算之上”（门格尔 1939 年，第 59 页）。

前两个建议证明足够，因此第三个建议是多余的。

在接下来的部分，我们将指出三个事实：

首先，如果将恩斯特·马利的道义原则添加到一个避免了所谓的物质和严格蕴涵悖论的系统中，许多“令人惊讶”的定理（如（34）和（35））将不再可导出，A ↔ !A 也不再可导出（第 8 节）。

其次，如果将恩斯特·马利的道义原则添加到一个避免了排中律的系统中，不可接受的后果 A ↔ !A 将不再可导出，但恩斯特·马利自己推导出的几乎所有定理仍然可导出（第 9 节）。

第三，如果稍微修改恩斯特·马利的道义原则，例如 Def. f 和 Axiom I，得到的系统几乎与现今被称为标准道义逻辑的系统完全相同（第 10 节）。

## 8. 替代非道义基础 1：相关逻辑

恩斯特·马利的非正式前提（i）-（iii）和（v）是条件句或条件句的否定，即形式为“如果...那么-”或“不是：如果...那么-”。Føllesdal 和 Hilpinen（1981 年，第 5-6 页）建议这样的条件句不应该用物质蕴涵来形式化，而应该使用某种严格蕴涵更为合适。但是这个建议并不完全令人满意，因为在非常弱的系统 S0.90 加上 I'和 III'的情况下，A → !A 和 A ↔ !A 都是可推导的，其中→是严格蕴涵的符号。[7]

在严格蕴涵的系统中，所谓的物质蕴涵悖论（如 A →（B → A））被避免了，但是所谓的严格蕴涵悖论（如（A＆¬A）→ B）仍然存在。如果两种类型的悖论都被避免，马利的系统会发生什么变化？这个问题可以通过将马利的公理添加到一个不能推导出所谓的“相关谬误”的系统中来回答（请参阅相关逻辑的条目）。

在接下来的内容中，我们将向突出的相关逻辑 R 中添加马利的公理。结果比严格蕴涵的情况要好：马利认为令人惊讶的大部分定理都不再可导出，而曼格尔的定理 A ↔ !A 也不可导出。但是仍然可以推导出许多“合理的”定理。

具有命题常量 t（“所有真理的合取”）的相关系统 R 具有以下公理和规则（Anderson＆Belnap 1975，第 V 章；↔由 A ↔ B =（A → B）＆（B → A）定义）：

| 自我蕴涵。    | A → A                                   |
| --------------- | ------------------------------------------ |
| Prefixing.    | (A → B) → ((C → A) → (C → B))       |
| Contraction.  | (A → (A → B)) → (A → B)              |
| Permutation.  | (A → (B → C)) → (B → (A → C))       |
| & 消除.       | (A & B) → A, (A & B) → B               |
| & 引入.       | ((A → B) & (A → C)) → (A → (B & C))  |
| ∨ 引入.      | A → (A ∨ B), B → (A ∨ B)             |
| ∨ 消除。     | ((A → C) & (B → C)) → ((A ∨ B) → C) |
| 分配。        | (A & (B ∨ C)) → ((A & B) ∨ C)         |
| 双重否定。    | ¬¬A → A                               |
| 对偶。        | (A → ¬B) → (B → ¬A)                 |
| Ax. t.        | A ↔ (t → A)                            |
| Modus Ponens. | A, A → B / B                            |
| Adjunction.   | A, B / A & B                             |

一个相关版本的恩斯特·马利道义系统 RD 可以定义如下：

* 该语言与 R 语言相同，只是我们用 V 代替 t，添加命题常量 U 和一元连接词！，并按照马利系统中的定义来定义Λ、∩、f 和∞。
* 公理化：将马利的公理 I-V 添加到 R 的公理和规则中。

RD 具有以下特性。

* | 公理 I、II 和 III 可以被以下三个更简单的公理所取代：[8] |                       |
  | I*. | (A → B) → (!A → !B) |
  | --------------------------------------------------------- | ----------------------- |
  | II*.                                                    | (!A & !B) → !(A & B) |
  | III*.                                                   | !(!A → A)            |
* 公式 I′–V′，(3)，(4)，(6)，(8)–(11)，(14)，(16)–(18)，(23′)和(30)是 RD 的定理。[9]
* 公式(1)，(2)，(5)，(7)，(12)，(13)，(15)，(19)–(23)，(24)–(29)，(31)–(35)，A → !A 和!A → A 是不可推导的。[10]
* RD 和恩斯特·马利的预期之间存在 12 个不匹配：(5)，(12)–(13)，(15)，(19)–(21)，(23)和(24)–(26)是不可推导的，尽管马利并不认为这些公式令人惊讶，而(30)是一个定理，尽管马利认为它令人惊讶。
* 公式（34）和（35）（Mally 认为是他的系统中最令人惊讶的定理）在某种意义上比 Menger 的定理 A↔！A 更奇怪，因为后者的定理可以通过在 RD 中补充（34）或（35）来推导出来，而（34）和（35）都不能通过在 RD 中补充 A↔！A 来推导出来。[11]

尽管大多数 Mally 的令人惊讶的定理不能在 RD 中推导出来，但这与 Mally 自己认为这些定理令人惊讶的原因无关。它们不能在 RD 中推导出来，是因为它们依赖于相关性谬误。Mally 从未提到这样的谬误来解释他的惊讶。他的考虑是完全不同的，正如我们已经描述过的那样。

RD 与 Anderson 的相关道义逻辑 ARD 密切相关，ARD 定义为 R 加上以下两个公理（Anderson 1967, 1968, McArthur 1981；Anderson 使用了一元连词 O 而不是！）：

| ARD1. | !A ↔ (¬A → ∩) |
| ------- | ------------------- |
| ARD2. | !A → ¬!¬A      |

* 所有 RD 的定理都是 ARD 的定理。[ 12]
* ARD1( → )不是 RD+ARD2 的定理。[ 13] 这个公式在马利的书中没有出现。根据安德森的说法，博纳特（1945 年）是第一个提出这个公式的人。[ 14]
* ARD2 不是 RD+ARD1 的定理。[15] 这个公式在马利的书中没有出现，但马利支持了相应的非正式原则：“一个正确意愿的人不会（甚至是隐含地）意愿他意愿的否定；正确的意愿是没有矛盾的。”[16]
* RD 加上 ARD1( → )和 ARD2 具有与 ARD 相同的定理。[17]

安德森的系统具有一些问题（McArthur 1981，Goble 1999, 2001），而 RD 与这些特征大部分相同。但我们不会在这里讨论这个问题。无论如何，可以明确的是 RD 比马利的原始系统更好。

## 9. 替代的非道义基础 2：直觉逻辑

最近有人指出，也可以将马利的道义逻辑基于直觉命题逻辑 IPC，而不是经典命题逻辑（Lokhorst 2013；另见 Centrone 2013）。

Heyting 的直觉命题演算 IPC 具有以下公理和规则（参见 Van Dalen 2002 和直觉逻辑条目）：

| A → (B → A)                             |
| ------------------------------------------- |
| (A → (B → C)) → ((A → B) → (A → C)) |
| (A & B) → A                              |
| (A & B) → B                              |
| A → (B → (A & B))                       |
| A → (A ∨ B)                             |
| B → (A ∨ B)                             |
| (A → C) → ((B → C) → ((A ∨ B) → C)) |
| ⊥ → A                                   |
| *modus ponens*                                          |
| *substitution*                                          |
|                                           |

如果我们在这些公理和规则的基础上添加以下内容：

缩写：¬ A = A → ⊥，A ↔ B = (A → B) & (B → A)，T = A → A，

那么我们可以将 ID（恩斯特·马利的道义逻辑的直觉主义改进）表述为 IPC 加上马利的公理 I-V 和

| (34) | U ↔ T       |
| ------ | -------------- |
| VI   | !(A ∨ ¬ A) |
|      |              |

公理 VI 是根据恩斯特·马利的定理（12d）得出的（参见马利 1926 年第 2 章第 5 节第 29 页和莫尔舍尔 1998 年第 122 页）[18]。

事实 1. ID 也可以被公理化为 IPC 加上公理！A ↔ ¬ ¬ A 和（34）[19]。

经典命题逻辑 CPC 是 IPC 加上 A ∨ ¬ A。MD（“马利的道义逻辑”）是 ID 加上 CPC。

事实 2. A ↔ !A 是 MD 的一个定理。[20]

在现代道义逻辑中，P A（“允许 A 发生”）被定义为 P A = ¬ !¬ A。如果我们采用这个定义，ID 提供了!A ↔ P A（因为 IPC 提供了¬ ¬ A ↔ ¬ ¬ ¬ ¬ A）。马利没有讨论允许。他对!A → ¬ !¬ A 的认可（通常被认为是道义逻辑的特征）可以从马利 1926 年第 4 章第 10 节第 49 页的 Mally 1926, ch. 4, sec. 10, p. 49, ad (V)中清楚地看出。

马利反对!(A ∨ B) → (!A ∨ !B)，而门格反对 A ↔ !A（参见马利 1926 年第 2 章第 4 节第 27 页的 Mally 1926, ch. 2, sec. 4, p. 27, ad (II)和上面第 6 节的引文）。ID 避免了这些反对意见：

事实 3. 无论是 !(A ∨ B) → (!A ∨ !B) 还是 !A → A 都不是 ID 的定理。[21]

只有 Mally 提出的定理中的一个在 ID 中无法推导出来，即(13b): ¬ (A & ¬ !B) ↔ (¬ A ∨ !B)。[22]

事实 4. 对于 ID 的任何扩展 X（在 ID 的语言中），X 提供(13b)当且仅当 X 提供了!(A ∨ B) → (!A ∨ !B)。[23]

ID 加上（13b）不提供!A → A。[24]

我们提出的 Mally 道义逻辑的直观重构在避免了 Menger 和 Mally 自己的反对意见的同时，保留了 Mally 自己注意到的几乎所有定理。然而，作为一个道义逻辑系统，它是不可接受的。我们只提到两个原因：

1. 定理 A → !A 在直观上是无效的。除了 Mally 的系统外，没有任何道义系统具有这个定理。
2. 如何表示许可权限尚不清楚。如果我们使用标准定义（P A = ¬ !¬ A），那么 P A ↔ !A 是一个定理，但根据“允许”和“义务”这些词的普通用法，P A 和 !A 并不等同。

上面讨论的 Mally 系统的相关主义改进没有这些缺陷。

尽管 ID 作为道义逻辑系统是不可接受的，但作为松弛逻辑系统，它确实是有意义的，我们将在下面展示。松弛逻辑在数字电路的硬件验证和安全系统中的访问控制等领域中使用，其中 ! 表示符合约束的正确性概念。术语“松弛”被选择“以表示与符合约束的正确性概念相关的宽松性”（Fairtlough 和 Mendler 1997，第 3 页）。关于松弛逻辑有大量的文献（Goldblatt 2011）。

命题弛缓逻辑 PLL 被定义为 IPC 加上(A → !B) ↔ (!A → !B) (Fairtlough 和 Mendler 1997, p. 4, 引理 2.1)。弛缓逻辑 PLL*是 PLL 加上!A ↔ ¬ ¬ A (Fairtlough 和 Mendler 1997, p. 23)。

事实 5. ID 是弛缓逻辑 PLL*的替代公理化加上(34)。[25]

恩斯特·马利的道义逻辑和弛缓逻辑起源于完全不同的考虑。因此，我们讨论的恩斯特·马利逻辑的直觉重构与弛缓逻辑 PLL*加上(34)完全相同，这是非常引人注目的。

## 10. 替代道义原则

而不是改变恩斯特·马利系统中的非道义命题基础，也可以修改特定的道义公理和规则。当然，可以以各种方式进行修改，但以下方法在不过多偏离马利原始假设的情况下效果良好。[26]

首先，将 f 视为原始的，并用以下关于 V 和 f 的 ! 的定义替换马利在书中关于 f 的定义（Def. f，马利书中的第一个特定道义假设）。

| Def. !. | !A = V f A |
| --------- | ------------ |

其次，用以下推理规则替换公理 I，也可以写成(B → C) → ((A f B) → (A f C))：

| Rule f. | B → C / (A f B) → (A f C) |
| --------- | ----------------------------- |

然后我们可以推导出：

| 1. | B → C / !B → !C     | [ Def. !, R f ]                            |
| ---- | ----------------------- | -------------------------------------------- |
| 2. | (!A & !B) → !(A & B) | [ 定义！, 公理 II ]                        |
| 3. | !V                    | [ 1, 公理 IV, PC ]                         |
| 4. | ¬!Λ                 | [ 1, 公理 III(←), 公理 V, PC (ex falso) ] |

所谓的道义逻辑 KD 的标准系统被定义为 PC 加上 1-4（除了!通常写作 O：参见道义逻辑条目），因此新系统至少与 KD 一样强大。不难看出，实际上它与 KD 加上 OU（马利的公理 IV）和以下 f 的定义相同：A f B = O（A → B）。在现代道义逻辑中，承诺的概念有时是这样定义的。

在新系统中，马利的定理具有以下状态。

* II'，IV'，（1）-（5），（7）-（11），（13）-（15），（17），（20）-（24）和（27）-（32）是可推导的。
* I′, III′, V′, (6), (12), (16), (18)–(19), (25)–(26), (33)–(35), A → !A and !A → A are not derivable.
* 恩斯特·马利的道义期望有 20 个不匹配之处：10 个“合理”的公式不再可导出，即 I′，III′，V′，(6)，(12)，(16)，(18)–(19)和(25)–(26)，而 10 个“令人惊讶”的定理仍然可导出，即(1)，(2)，(7)，(22)和(27)–(32)。
* 虽然(34)和(35)不可导出，但添加它们绝不会导致 A ↔ !A 的定理性。

在 RD 的情况下只有 12 个不匹配，所以新系统对马利的道义期望做得不够公正，比 RD 做得更少。但它与他的整体观点更为一致，因为它仍然基于经典命题逻辑，这是马利并不反对的系统（虽然在 20 世纪 20 年代他并没有太多选择）。

许多马利令人惊讶的定理在 KD 中是可推导的，但它们已经失去了威力：这些定理在与马利的公理 I 和他对 f 的定义相结合时会导致令人惊讶的后果，但在没有这些假设的情况下它们是完全无害的。

标准的道义逻辑系统有几个问题。每个可证明的陈述都被视为义务的事实常常被认为是违反直觉的，还有许多其他众所周知的“悖论”。马利系统的修订版本也存在这些问题。但我们不会在这里讨论这些问题。无论如何，标准系统比马利最初的提议要好。

## 11. 结论

恩斯特·马利的道义逻辑因为门格尔（1939）所述的原因而不可接受。但它并不像乍一看那么糟糕。只需要进行相对较小的修改，就可以将其转变为一个更可接受的系统。可以改变非道义基础，得到类似于安德森系统的系统，或者得到与直觉主义或建构性命题逻辑相同的系统，其中双重否定作为一种义务类似的运算符，或者对道义公理进行两个修补，得到类似于标准道义逻辑的系统。

一些作者拒绝将恩斯特·马利的道义逻辑视为一个“真正的”道义系统，并说他们“只是出于好奇而提到它”（Meyer and Wieringa 1993, p. 4）。上述情况表明，这种评判过于苛刻。从马利的系统到现代道义逻辑系统只是一个小步骤，而不是一个巨大的飞跃，因此马利的开创性努力应该得到恢复而不是蔑视。

## Bibliography

* Anderson, Alan Ross, 1967, “Some nasty problems in the formal logic of ethics,” *Noûs*, 1: 345–360.
* –––, 1968, “A new square of opposition: Eubouliatic logic,” in *Akten des XIV. Internationalen Kongresses für Philosophie* (Volume 2), Vienna: Herder, pp. 271–284.
* Anderson, Alan Ross, and Nuel D. Belnap, Jr., 1975, *Entailment: The Logic of Relevance and Necessity* (Volume 1), Princeton, NJ: Princeton University Press.
* Anderson, Alan Ross, Nuel D. Belnap, Jr., and J. Michael Dunn, 1992, *Entailment: The Logic of Relevance and Necessity* (Volume 2), Princeton, NJ: Princeton University Press.
* Bentham, Jeremy, 1782 [1945], *The Limits of Jurisprudence Defined*, New York: Columbia University Press.
* Bohnert, Herbert G., 1945, “The semiotic status of commands,” *Philosophy of Science*, 12: 302–315.
* Centrone, Stefania, 2013, “Notes on Mally’s deontic logic and the collapse of *Seinsollen* and *Sein*,” *Synthese*, 190: 4095–4116.
* Fairtlough, Matt, and Michael Mendler, 1997, “Propositional lax logic,” *Information and Computation*, 137: 1–33.
* Føllesdal, Dagfinn, and Risto Hilpinen, 1981, “Deontic logic: An introduction,” in Risto Hilpinen (ed.), *Deontic Logic: Introductory and Systematic Readings*, second edition, Dordrecht: D. Reidel, pp. 1–35.
* Gabbay, D.M., 1981, *Semantical Investigations in Heyting’s Intuitionistic Logic*, Dordrecht: D.Reidel.
* Goble, Lou, 1999, “Deontic logic with relevance,” in Paul McNamara and Henry Prakken (eds.), *Norms, Logics and Information Systems: New Studies on Deontic Logic and Computer Science*, Amsterdam: IOS Press, pp. 331–345,
* –––, 2001, “The Andersonian reduction and relevant deontic logic,” in Brown Byson and John Woods (eds.), *New Studies in Exact Philosophy: Logic, Mathematics and Science — Proceedings of the 1999 Conference of the Society of Exact Philosophy*, Paris: Hermes Science Publications, pp. 213–246.
* Goldblatt, Robert, 2011, “Cover semantics for quantified lax logic,” *Journal of Logic and Computation*, 21: 1035–1063.
* Hacking, Ian, 1963, “What is strict implication?,” *Journal of Symbolic Logic*, 28: 51–71.
* Höfler, Alois, 1917, “Abhängigkeitsbeziehungen zwischen Abhängigkeitsbeziehungen,” *Sitzungsberichte der kaiserlichen Akademie der Wissenschaften in Wien, Philosophisch-historische Klasse*, 181(4): 1–56.
* –––, 1922, *Logik*, 2nd expanded edn, with contributions by Ernst Mally, Vienna: Hölder-Pichler-Tempsky; Vienna and Leipzig: Freytag.
* Laird, John, 1926, Review of Mally’s *Grundgesetze des Sollens*, *Mind* (New Series), 35(139): 394–395.
* Leibniz, G.W., 1678–81 [1999], Modalia et elementa juris naturalis. In: Leibniz: *Sämtliche Schriften und Briefe* (Series 6, Volume 4), Berlin: Akademie Verlag, pp. 2758–2766.
* Lepage, François, 2016, “A square of oppositions in intuitionistic logic with strong negation,”, *Logica Universalis*, 10: 327–338.
* Lokhorst, Gert-Jan C., 1999, “Ernst Mally’s *Deontik* (1926),” *Notre Dame Journal of Formal Logic*, 40: 273–282.
* –––, 2006, “Andersonian deontic logic, propositional quantification, and Mally,” *Notre Dame Journal of Formal Logic*, 47: 385–395.
* –––, 2010, “Where did Mally go wrong?,” in G. Governatori & G. Sartor, eds., *DEON 2010* (Lecture Notes in Artificial Intelligence (LNAI): Volume 6181), Berlin and Heidelberg: Springer-Verlag, pp. 247–258.
* –––, 2013, “An intuitionistic reformulation of Mally’s deontic logic,” *Journal of Philosophical Logic*, 42: 635–641.
* Lokhorst, Gert-Jan C., and Lou Goble, 2004, “Mally’s deontic logic”, *Grazer philosophische Studien*, 67: 37–57.
* Mally, Ernst, 1926, *Grundgesetze des Sollens: Elemente der Logik des Willens*, Graz: Leuschner und Lubensky, Universitäts-Buchhandlung; reprinted in Ernst Mally, *Logische Schriften: Großes Logikfragment, Grundgesetze des Sollens*, Karl Wolf and Paul Weingartner (eds.), Dordrecht: D. Reidel, 1971, pp. 227–324.
* McArthur, Robert P., 1981, “Anderson’s deontic logic and relevant implication,” *Notre Dame Journal of Formal Logic*, 22: 145–154.
* McCune, W., 2005–2010, *Prover9* and *Mace4*, version 2009–11a, [available online](https://www.cs.unm.edu/~mccune/prover9/).
* McKinsey, John Charles Chenoweth, 1939, “Proof of the independence of the primitive symbols of Heyting’s calculus of propositions,” *Journal of Symbolic Logic*, 4: 155–158.
* Menger, Karl, 1939, “A logic of the doubtful: On optative and imperative logic,” in *Reports of a Mathematical Colloquium* (2nd series, 2nd issue), Notre Dame, Indiana: Indiana University Press, pp. 53–64.
* Meyer, John-Jules Ch., and Roel J. Wieringa, 1993, “Deontic logic: A concise overview,” in John-Jules Ch. Meyer and Roel J. Wieringa (eds.), *Deontic Logic in Computer Science*, Chichester: John Wiley and Sons, pp. 3–16.
* Moore, G.E., 1903, *Principia Ethica*, Cambridge: Cambridge University Press.
* Morscher, Edgar, 1998, “Mallys Axiomsystem für die deontische Logik: Rekonstruktion und kritische Würdigung,” *Ernst Mally: Versuch einer Neubewertung* (*ProPhil—Projekte zur Philosophie*, Volume 2), Alexander Hieke (ed.), Sankt Augustin: Academia Verlag, pp. 81–165.
* Nelson, David, 1949, “Constructible falsity,” *The Journal of Symbolic Logic*, 14: 16–26.
* Ray, J., 1926, *Essai sur la structure logique du code civil français*, Paris: Presses Universitaires de France.
* Van Dalen, Dirk, 2002, “Intuitionistic logic,” in D. Gabbay and F. Günthner, eds., *Handbook of Philosophical Logic* (Volume 5), 2nd edition, Dordrecht: Kluwer, pp. 1–114.
* Weinberger, Ota, 2001, “Ernst Mallys Deontik: Ein kritischer Rückblick und ein konstruktiver Ausblick nach einem dreiviertel Jahrhundert,” in Thomas Binder, Reinhard Fabian, Ulf Höfer and Jutta Valent (eds.), *Bausteine zu einer Geschichte der Philosophie an der Universität Graz*, Amsterdam/Atlanta: Rodopi, pp. 289–303.
* Whitehead, Alfred North, and Bertrand Russell, 1910, *Principia Mathematica* (Volume 1), Cambridge: Cambridge University Press.
* Woleński, Jan, 1998, “Remarks on Mally’s Deontik,” *Ernst Mally: Versuch einer Neubewertung* (*ProPhil–Projekte zur Philosophie*, Volume 2), A. Hieke (ed.), Sankt Augustin: Academia Verlag, pp. 73–80.

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=mally-deontic). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/mally-deontic/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=mally-deontic&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](http://philpapers.org/sep/mally-deontic/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

* Basic information page on [Ernst Mally](http://mally.stanford.edu/mally.html) (Edward Zalta, Stanford University).

## Related Entries

[logic: deontic](https://plato.stanford.edu/entries/logic-deontic/) | [logic: intuitionistic](https://plato.stanford.edu/entries/logic-intuitionistic/) | [logic: relevance](https://plato.stanford.edu/entries/logic-relevance/)

### Acknowledgments

The author is very grateful to Lou Goble, whose extensive comments on two earlier drafts led to many substantial improvements. The author would also like to thank Lou Goble and Edgar Morscher for making their papers on Anderson’s and Mally’s deontic logic available to him, Robert K. Meyer for helping him find the matrices used in note 10, and John Slaney for providing him with the proof of II* mentioned in note 8.

[Copyright © 2019](https://plato.stanford.edu/info.html#c) by  
[Gert-Jan Lokhorst](http://gjclokhorst.nl/) <[*g.j.c.lokhorst@tudelft.nl*](mailto:g%2ej%2ec%2elokhorst%40tudelft%2enl)>
