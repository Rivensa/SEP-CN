# 命题动态逻辑 propositional dynamic (Nicolas Troquard and Philippe Balbiani)

_首次发表于2007年2月1日；实质修订于2023年2月16日。_

程序逻辑是从将每个计算机程序α与一种形式\[α]相关联的思想中产生的模态逻辑。然后，公式\[α]A 的含义是：在执行程序α之后，A 为真。这个思想来自 Engeler \[1967]，Hoare \[1969]，Yanov \[1959]等人的研究成果，他们制定并研究了可以表达程序连接词性质的逻辑语言。Salwicki \[1970]首次开发的算法逻辑（AL）和 Pratt \[1976]详细阐述的动态逻辑（DL）是这些工作的适当延续。我们将在这里集中讨论 DL。专注于 DL 的众多论文以及其在程序验证和数据结构中的许多应用表明，它构成了研究程序性质的有用工具。Pratt 选择在可以称之为一阶层面上描述 DL，正是他的工作激发了 Fischer 和 Ladner \[1979]几年后定义 DL 的命题变体。本文介绍了 DL 的命题变体 PDL 的概述。

 

***

## 1. 引言

动态逻辑学（DL）是用于表示动态系统的状态和事件的模态逻辑学。DL 的语言既是一种断言语言，能够表达计算状态的属性，也是一种编程语言，能够表达系统在这些状态之间的转换的属性。DL 是程序的逻辑学，允许讨论和推理事务状态、过程、变化和结果。

Pratt 的原始程序动态逻辑是一阶模态逻辑。命题动态逻辑（PDL）是其命题对应物。它在 Fischer 和 Ladner \[1979]中被提出作为一种独立的逻辑。作为命题逻辑，PDL 的语言不使用术语、谓词或函数。因此，在 PDL 中，有两个句法类别：命题和程序。

为了给 PDL 中的语句赋予意义，我们通常使用基于标记的转换系统（LTS）的抽象语义。LTS 可以看作是 Kripke 模型的一种推广，其中世界或状态之间的转换由原子程序的名称“标记”。估值指示每个状态中哪些命题为真。从状态 x 到状态 y 的标记为π的转换（记为 xR(π)y，或(x,y)∈R(π)）表示从 x 开始，存在一个可能的执行程序π在 y 结束。如果命题 A 在 y 中为真，则公式⟨π⟩A 在 x 中为真：即，在状态 x 中存在一个可能的执行程序π，以满足 A 的状态结束。在⟨π⟩中，我们可以看到与模态逻辑的可能性模态（通常记为◊）相似的模态。毫不奇怪，还有相应的必然性概念（其模态通常记为□）。如果 A 在通过标记为π的转换可达的每个状态中为真，则公式\[π]A 在状态 x 中为真。

复杂程序的可能执行可以通过组合方式进行定义。例如，一个程序“先执行α，然后执行β”是一个复杂程序，更具体地说是一个序列。可能的执行可以通过在 LTS 中组合两步转换（可以用 R(α;β)表示）来表示，这两步转换在状态 x 和 y 之间：在状态 x 中，存在一个可能的执行程序α，它在状态 z 中结束，并且在状态 z 中存在一个可能的执行程序β，它在状态 y 中结束。如果命题 A 在 y 中为真，则公式⟨α;β⟩A 在状态 x 中为真。程序α和β本身也可以是复杂程序。我们将在适当的时候介绍更多的构造来表示更多的程序。

程序可以从外延的角度来看待：它是 LTS 中一对状态的二元关系。准确地说，它是形如(x,y)的一对对的集合，其中程序可以在状态 x 中执行，并且可以导致状态 y。另一方面，命题是关于状态的陈述；它在一个状态中要么为真，要么为假。因此，命题也可以从外延的角度来看待：它在 LTS 中为真的状态的集合。

在这里，我们用缩写 PDL 来指代具有以下程序构造的命题动态逻辑：序列、非确定性选择、无界迭代和测试。我们将在第 2 节中介绍它，同时介绍一些性质和基本结果。特别是，我们将讨论它的公理化和可决定性。

Hoare \[1969]的 Hoare 演算是程序逻辑的里程碑。它涉及形式为{A}α{B}的命题的真实性——意味着在前提 A 下，程序α总是具有后置条件 B——并且是公理化定义的。它源于对程序属性进行严格推理方法的需求，从而使编程活动在科学领域中占据一定的位置。Burstall \[1974]看到了模态逻辑与程序推理之间的类比。但实际的工作始于 Pratt \[1976]，在他给出的关于程序逻辑的课程中，一些学生向他提出了建议。PDL 是 Pratt 将 Hoare 演算解释为模态逻辑形式的结果。关于 PDL 起源的介绍可以在 Pratt \[1980b]中找到。Hoare 三元组{A}α{B}可以通过 PDL 公式 A→\[α]B 来捕捉，字面意思是如果 A 为真，则每个成功终止的α执行都将以 B 为真结束。通过实现这种连接，可以使用 PDL 的公理化来例证 Hoare 演算的初始规则。这是我们将在第 3 节中详细讨论的内容，该节集中讨论结构化程序的正确性推理。

与 PDL 相关的其他主题包括与扩展或限制 PDL 以各种方式获得的一些有趣变体的表达能力比较、可决定性、复杂性和完备性的结果。自其创立以来，PDL 的许多变体受到了关注。这些变体可能涉及确定性程序、受限测试、非正则程序、程序作为自动机、程序的补和交、逆和无限计算等。我们将在第 4 节中介绍其中一些，提供一些关于它们相对表达能力、公理化和计算复杂性的指引。

我们在第 5 节中做出结论。

## 2. 定义和基本结果

我们在第 2.1 节中介绍了 PDL 的语法和语义。在第 2.2 节中，我们介绍了 PDL 的证明理论，包括公理化和完备性文献的指引。我们在第 2.3 节中讨论了可决定性和复杂性问题。

### 2.1 语法和语义

命题动态逻辑（PDL）旨在表示和推理程序的命题属性。其语法基于两组符号：可数集合Φ0 的原子公式和可数集合Π0 的原子程序。基于这个基础的复合公式和复合程序定义如下。

* 每个原子公式都是一个公式。
* 0（“false”）是一个公式。
* 如果 A 是一个命题，那么¬A（“非 A”）是一个命题。
* 如果 A 和 B 是命题，那么（A∨B）（“A 或 B”）是一个命题。
* 如果α是一个程序，A 是一个命题，那么\[α]A（“从当前状态开始执行α的每个执行都导致一个使 A 为真的状态”）是一个命题。
* 每个原子程序都是一个程序。
* 如果α和β是程序，那么(α;β)（"执行α然后执行β"）是一个程序。
* 如果α和β是程序，那么(α∪β)（"非确定性地执行α或β"）是一个程序。
* 如果 α 是一个程序，那么 α∗ （“重复执行 α 有限次，但是非确定性确定的次数”）是一个程序。
* 如果 A 是一个公式，那么 A? （“如果 A 为真，则继续执行，否则失败”）是一个程序。

其他布尔连接词 1, ∧, →, 和 ↔ 按照标准方式用作缩写。此外，我们将 ¬\[α]¬A 缩写为 ⟨α⟩A （“从当前状态开始，执行 α 的某个过程会导致 A 为真”），就像模态逻辑中一样。我们用 αn 表示 α;…;α，其中 α 出现了 n 次。更正式地说：

* α0:=1?
* αn+1:=α;αn

同样：

* α+:=α;α∗

经常有用的是表示一个无限但至少发生一次的迭代。最后，我们采用了省略括号的标准规则。

公式可以用来描述程序成功执行后的属性。例如，公式 \[α∪β]A 表示每当程序 α 或 β 成功执行时，都会达到一个状态，其中 A 成立，而公式 ⟨(α;β)∗⟩A 表示存在一系列交替执行 α 和 β 的序列，使得达到一个状态，其中 A 成立。从语义上讲，公式由状态集合解释，程序由状态转换系统中的状态之间的二元关系解释。更准确地说，PDL 公式和程序的含义是在标记过渡系统 (LTS) M=(W,R,V) 上解释的，其中 W 是一组非空的世界或状态，R 是从原子程序集 Π0 到 W 上的二元关系的映射，V 是从原子公式集 Φ0 到 W 的子集的映射。

非正式地说，映射 R 将每个原子程序π∈Π0 分配给 W 上的某个二元关系 R(π)，其意义是如果存在一个从 x 到 y 的π的执行，则 xR(π)y，而映射 V 将每个原子公式 p∈Φ0 分配给 W 的某个子集 V(p)，其意义是如果状态 x 中 p 为真，则 x∈V(p)。鉴于我们对 0、¬A、A∨B、\[α]A、α;β、α∪β、α∗和 A?的解读，很明显，R 和 V 必须按照以下方式递归扩展以提供复杂程序和公式的预期含义：

* xR(α;β)y 当且仅当存在一个世界 z，使得 xR(α)z 且 zR(β)y
* xR(α∪β)y 当且仅当 xR(α)y 或 xR(β)y
* xR(α∗)y 当且仅当存在非负整数 n 和存在状态序列 z0,…,zn，使得 z0=x，zn=y，并且对于所有 k=1…n，zk−1R(α)zk
* xR(A?)y 当且仅当 x=y 且 y∈V(A)
* V(0)=∅
* V(¬A)=W∖V(A)
* V((A∨B)=V(A)∪V(B)
* V(\[α]A)={x∣对于所有世界 y，如果 xR(α)y，则 y∈V(A)}

如果 x∈V(A)，则我们说 A 在 M 中的状态 x 上被满足，或者“M,x 满足 A”。

![Model M = W,R,V as specified in the paragraph below](https://plato.stanford.edu/entries/logic-dynamic/model1.png)

![Model M' = W',R',V' as specified in the paragraph below](https://plato.stanford.edu/entries/logic-dynamic/model2.png)

两个标记转换系统：M=(W,R,V)（左侧）和 M'=(W',R',V')（右侧）。

将上图左侧的 LTS 称为 M，右侧的 LTS 称为 M'。形式上定义，我们有 M=(W,R,V)，其中 W={x1,x2}，R(π1)={(x1,x1)}，R(π2)={(x1,x2)}，V(p)={x1}，V(q)={x2}，以及我们有 M'=(W',R',V')，其中 W'={y1,y2,y3,y4}，R'(π1)={(y1,y2),(y2,y2)}，R'(π2)={(y1,y3),(y2,y4)}，V'(p)={y1,y2}，V'(q)={y3,y4}。例如，我们有：

* M,x1 满足 p
* M,x2 满足 q
* M,x1 满足⟨π1⟩p∧⟨π2⟩q
* M，x1 满足\[π1]p∧\[π∗1]p
* M'，y1 满足⟨π∗1;π2⟩q
* M'，y2 满足\[π∗1]p
* M′,y1 满足π1∪π2
* M′,y3 满足\[π1∪π2]0

现在考虑一个命题 A。我们说 A 在 M 中是有效的，或者 M 是 A 的模型，或者“M⊨A”，当且仅当对于所有的世界 x，x∈V(A)。A 被称为有效的，或者“⊨A”，当且仅当对于所有的模型 M，M⊨A。我们说 A 在 M 中是可满足的，或者 M 满足 A，或者“M 满足 A”，当且仅当存在一个世界 x，使得 x∈V(A)。A 被称为可满足的，或者“满足 A”，当且仅当存在一个模型 M，使得 M 满足 A。值得注意的是，

命题 A 当且仅当不⊨¬A ⊨A 当且仅当不命题¬A

PDL 的一些显著公式是有效的。（读者可以尝试正式证明它们，或者至少从上面展示的几个例子开始使自己信服。）

⊨\[α;β]A↔\[α]\[β]A ⊨\[α∪β]A↔\[α]A∧\[β]A ⊨\[α∗]A↔A∧\[α]\[α∗]A \[A?]B↔(A→B)

等价地，我们可以用它们的对偶形式来表示。

⟨α;β⟩A↔⟨α⟩⟨β⟩A ⟨α∪β⟩A↔⟨α⟩A∨⟨β⟩A ⟨α∗⟩A↔A∨⟨α⟩⟨α∗⟩A ⟨A?⟩B↔A∧B

一个有趣的概念涉及到以 PDL 公式表达的信息，这些信息包含在一个 LTS 中。将系统描述为 LTS 的行为通常在其形式中稍微隐藏。例如，通过简单的检查，很容易让自己相信上述两个 LTS 具有相同的行为，并满足相同的 PDL 公式。为了完成关于语法和语义的这一部分，我们给出了这些主张的理论基础。

给定两个 LTS，我们可以问它们是否满足相同的公式。对于 Kripke 模型和标记转换系统，双模拟已成为标准的等价度量。LTS M=(W,R,V)和 M′=(W′,R′,V′)之间的双模拟是它们状态集之间的二元关系 Z，使得对于 W 中的所有世界 x 和 W′中的所有世界 x′，如果 xZx′，则有，

* 对于所有原子公式 p∈Φ0，我们有 x∈V(p)当且仅当 x′∈V′(p)，
* 对于所有的原子程序π∈Π0 和所有的世界 y∈W，如果 xR(π)y，则存在一个世界 y′∈W′，使得 yZy′且 x′R′(π)y′。
* 对于所有的原子程序π∈Π0 和所有的世界 y′∈W′，如果 x′R′(π)y′，则存在一个世界 y∈W，使得 yZy′且 xR(π)y。

当存在一个双模拟关系时，我们称两个 LTSs 是双模拟的。

在两个相似的 LTSs M=(W,R,V) 和 M′=(W′,R′,V′) 中，对于 W 中的所有世界 x 和 W′中的所有世界 x′，如果 xZx′，那么对于所有的 PDL 公式 A，x∈V(A)当且仅当 x′∈V′(A)。因此，当两个 LTSs 在上述相似定义下是相似的时，如果 xZx′，那么

* 对于所有的程序α和 W 中的所有世界 y，如果 xR(α)y，则存在一个世界 y′∈W′，使得 yZy′且 x′R′(α)y′，
* 对于所有的程序α和 W′中的所有世界 y′，如果 x′R′(α)y′，则存在一个世界 y∈W，使得 yZy′且 xR(α)y。

因此，我们可以通过仅检查原子程序来简单比较两个 LTS 的行为，并安全地推断这些 LTS 的比较行为，即使对于复杂的程序也是如此。我们称 PDL 的程序构造对于双模拟是安全的。有关对于双模拟是安全的程序构造的精确特征，请参见 Van Benthem \[1998]。

很容易看出上述两个 LTS 的实例是双模拟的。在上面的图中，模型 M 和 M'之间的双模拟 Z 可以表示为：Z={(x1,y1),(x1,y2),(x2,y3),(x2,y4)}。状态 x1 和 y1 满足完全相同的 PDL 公式，状态 x1 和 y2 也是如此，依此类推。

### 2.2 公理化和完备性

证明理论的目的是通过公理和推理规则来提供有效性的特征化——性质⊨A。在本节中，我们通过对仅依赖于其语法结构的公式进行操作，归纳地定义了一个可推导谓词⊢，以便对于所有公式 A，

⊢A 当且仅当⊨A。

当然，PDL 是经典命题逻辑的扩展。我们首先期望所有命题重言式成立，并且允许所有命题推理。特别地，演绎法则是一个有效的规则：从 A 和 A→B 推导出 B。对于任何程序α，将 LTS 限制为关系 R(α)，我们得到一个 Kripke 模型，其中模态逻辑\[α]的逻辑是最弱的命题正常模态逻辑，即逻辑 K。因此，PDL 包含了熟悉的分配公理模式的每个实例。

(K)

[α](A%E2%86%92B/)→(\[α]A→\[α]B)

并且它在以下推理规则（必要性规则）下是封闭的

(N)

从 A 推导出\[α]A

如果一个模态逻辑遵循(K)和(N)，则它是正常的。正常模态逻辑的一个重要特性是在合取∧上的分配律：可以使用(K)、(N)和命题推理证明公式α↔(\[α]A∧\[α]B)。单调性规则也可以使用(K)、(N)和命题推理证明：从 A→B 推导出\[α]A→\[α]B。

PDL 是包含以下公理模式的最小正常模态逻辑

(A1)

\[α;β]A↔\[α]\[β]A 的每个实例

(A2)

\[α∪β]A↔\[α]A∧\[β]A

(A3)

\[α∗]A↔A∧\[α]\[α∗]A

(A4)

\[A?]B↔(A→B)

并且在以下推理规则（循环不变性规则）下封闭：

（I）

从 A→\[α]A 推导出 A→\[α∗]A

如果 X 是一个公式集合，A 是一个公式，那么我们说 A 是从 X 中⊢-推导出来的，或者写作“X⊢A”，如果存在一个公式序列 A0,A1,…An，使得 An=A，并且对于所有的 i≤n，Ai 是一个公理模式的实例，或者是 X 中的一个公式，或者是序列中之前的公式通过推理规则得到的。进一步地，⊢A 当且仅当∅⊢A；在这种情况下，我们说 A 是⊢-推导出来的。如果不满足 X⊢0，则称 X 是⊢-一致的。很容易证明，规则(I)可以被以下公理模式（归纳公理模式）所替代：

(A5)

A∧[α∗](A%E2%86%92\[%CE%B1]A/)→\[α∗]A

让我们首先确立命题(I)是基于(A1)，(A2)，(A3)，(A4)和(A5)的证明系统的派生规则：

| 1. | A→\[α]A                                | premise         |
| -- | -------------------------------------- | --------------- |
| 2. | [α∗](A%E2%86%92\[%CE%B1]A/)            | 从 1 使用逻辑(N)     |
| 3. | A∧[α∗](A%E2%86%92\[%CE%B1]A/)→\[α∗]A   | 公理模式(A5)        |
| 4. | [α∗](A%E2%86%92\[%CE%B1]A/)→(A→\[α∗]A) | 从 3 中使用命题推理     |
| 5. | A→\[α∗]A                               | 从 2 和 4 中使用演绎法则 |

接下来，让我们证明(A5)是⊢-可推导的：

| 1. | [α∗](A%E2%86%92\[%CE%B1]A/)↔ (A→\[α]A)∧\[α][α∗](A%E2%86%92\[%CE%B1]A/)                    | 命题模式 (A3)                 |
| -- | ----------------------------------------------------------------------------------------- | ------------------------- |
| 2. | A∧[α∗](A%E2%86%92\[%CE%B1]A/)→[α](A%E2%88%A7\[%CE%B1%E2%88%97]\(A%E2%86%92\[%CE%B1]A\)/)  | 从 1 使用命题推理和\[α]在∧上的分配律推导出 |
| 3. | A∧[α∗](A%E2%86%92\[%CE%B1]A/)→[α∗](A%E2%88%A7\[%CE%B1%E2%88%97]\(A%E2%86%92\[%CE%B1]A\)/) | 从 2 使用(I)                 |
| 4. | [α∗](A%E2%86%92\[%CE%B1]A/)→(A→\[α∗]A)                                                    | 从 3 使用命题推理和\[α∗]在∧上的分配律   |
| 5. | A∧[α∗](A%E2%86%92\[%CE%B1]A/)→\[α∗]A                                                      | 从 4 使用命题推理                |

基于公理模式（A1）、（A2）、（A3）、（A4）和（A5）的 PDL 公理化已在 Segerberg \[1977]中提出。从上述定义可以立即得出，⊢相对于⊨是合理的，即

对于所有的命题 A，如果⊢A，则⊨A。

证明通过对⊢中 A 的推导长度进行归纳进行。关于⊢相对于⊨的完备性的问题，即

对于所有的命题 A，如果⊨A，则⊢A，

这个命题被几位逻辑学家追求过。Segerberg \[1977]提出的推理线索是第一次尝试证明⊢的完备性。不久之后，Parikh 也提出了一个证明。在 1978 年初，Segerberg 发现了他的论证中的一个缺陷（最终他修复了这个缺陷），Parikh 在 Parikh \[1978]中发表了可以被认为是⊢完备性的第一个证明。自那以后，已经发表了不同的⊢完备性证明，例如 Kozen 和 Parikh \[1981]。更多细节可以在 Pratt \[2017]中找到。

人们也一直在寻求 PDL 的不同替代证明理论。早期就有人尝试，特别是在 Pratt \[1978]中。我们还要提到 Nishimura \[1979]和 Vakarelov \[1983]提出的相关理论的完备性。

对于 PDL 的一个可替代的推导谓词的表述，可以利用推理的无穷规则，例如 Goldblatt \[1992a]中所述。（无穷规则的推理需要无限数量的前提。）让⊢'是对应于命题动态逻辑语言中包含每个公理模式（A1），（A2），（A3）和（A4）的最小正常模态逻辑的推导谓词，并且在以下无穷规则的闭包下：

（I'）

从{\[β]\[αn]A:n≥0}推导出\[β]\[α∗]A

可以证明，对于命题逻辑的解释，⊢′在⊨的意义下既是完备的又是正确的，即

对于所有的命题 A，⊢′A 当且仅当⊨A。

换句话说，就生成所有有效命题的集合而言，证明系统⊢和⊢′是等价的。

### 2.3 可决定性和复杂性

复杂性理论的目标是根据时间或空间资源来确定属性 sat A 的可计算性。逻辑 L 的复杂性通常与决定其公式可满足性的问题等同，定义为：

(L-SAT)

给定一个 L 的公式 A，A 是否可满足？

在本节中，我们研究以下决策问题的复杂性：

(PDL-SAT)

给定一个 PDL 的公式 A，A 是否可满足？

PDL 的完整公理化是对有效的 PDL 公式集合的递归定义，或者换句话说，是对其否定不可满足的公式集合的定义。因此，对于问题（PDL-SAT），我们有一个子过程，如果 PDL 公式 A 不可满足，则会回答“否”。子过程（SP1）的作用是从公理开始枚举所有可⊢推导的公式，并借助推理规则推导出其他定理。如果给予足够的时间，如果一个公式是可⊢推导的，子过程最终会找到它。因此，如果 A 不可满足，（SP1）最终必定会找到¬A，并在找到时回答“否”。

然而，如果公式 A 是可满足的，那么（SP1）将永远找不到¬A。它将永远运行下去，而我们无法确定它的状态。但是，我们可以通过另一个子过程来解决这种不确定性。我们也可以考虑第二个子过程，如果一个 PDL 公式是可满足的，它将回答“是”。实际上，关于 PDL 的最早结果之一是证明了 PDL 具有有限模型性质，即

对于所有的命题 A，如果 A 可满足，则存在一个有限模型 M，使得 M 可满足 A。

有限模型性质为一个子过程（SP2）提供了基础，该过程逐个枚举 PDL 的有限模型，并测试其中是否有一个满足该公式。（对于所有的命题 A 和所有的有限模型 M，通过应用 V(A)的定义，很容易测试 M 是否满足 A。）因此，如果 A 是可满足的，它必定会找到一个满足 A 的模型 M，并在找到时回答“是”。与第一个子过程（SP1）对称地，如果公式 A 不可满足，则（SP2）永远不会找到满足它的模型，它将永远运行下去，而任何时候都无法确定它。

现在，将（SP1）和（SP2）结合在一起，我们有一种方法来判断 PDL 公式 A 是否可满足。只需并行运行它们：如果 A 是可满足的，则（SP2）最终会回答“是”，如果 A 不可满足，则（SP1）最终会回答“否”。当（SP1）或（SP2）提供答案时，过程停止。

如果所得到的过程足以得出结论，即问题（PDL-SAT）是可判定的，那么在实践中它是非常低效的。有一个结果——由 Fischer 和 Ladner \[1979]以及 Kozen 和 Parikh \[1981]得出——比有限模型性质更强，即小模型性质：

对于所有的公式 A，如果 sat A，则存在一个大小与 A 指数级相关的有限模型 M，使得 M 满足 A。

这意味着我们现在知道何时停止在过程（SP2）中寻找满足公式的模型。因此，我们可以使用（SP2）来测试一个公式是否可满足，但是一旦我们耗尽了所有的小模型，我们可以得出结论，该公式不可满足。这产生了一个在指数时间（NEXPTIME）内运行的过程：猜测一个大小不超过指数级的模型，并检查它是否满足公式。但是 PDL 复杂性理论的关键结果来自 Fischer 和 Ladner \[1979]以及 Pratt \[1980a]。观察到 PDL 的一个公式可以有效地描述线性空间有界交替图灵机的计算，Fischer 和 Ladner \[1979]首先建立了（PDL-SAT）的指数时间下界。Pratt \[1980a]利用语义表格法将其适应于 PDL，得到了（PDL-SAT）的 EXPTIME 上界。因此，（PDL-SAT）是 EXPTIME 完全的。（De Giacomo 和 Massacci \[2000]提出了一种在实践中更高效的算法，尽管在最坏情况下仍以确定性指数时间运行。）

## 3. 结构化编程和程序的正确性

从历史上看，程序逻辑源于 20 世纪 60 年代末计算机科学家们对编程语言赋予意义并寻找程序证明的严格标准的研究。例如，这些证明可能涉及程序相对于预期行为的正确性，或者程序的终止性。Floyd \[1967]是一篇具有开创性意义的论文，它使用流程图对结构化计算机程序的属性进行了分析。早期的一些工作，如 Yanov \[1959]或 Engeler \[1967]，已经推进并研究了可以表达程序连接词性质的形式语言。Hoare \[1969]的形式化是 PDL 出现的一个里程碑。它被提出作为对 Floyd 流程图的严格公理解释。我们经常谈论 Hoare 逻辑，或 Floyd-Hoare 逻辑，或 Hoare 演算，当涉及到这个形式化时。Hoare 演算关注的是语句的真值（“Hoare 三元组”），例如{A}α{B}，它建立了前置条件 A、程序α和后置条件 B 之间的联系。它表明只要 A 作为α执行的前置条件成立，那么在α成功执行后，B 作为后置条件也成立。

几十年前是真实的，现在仍然如此：验证程序往往是通过对各种合理的输入进行测试来完成的。当一个输入不能产生预期的输出时，就会修复“错误”。如果最终对于每个测试输入都获得了预期的输出，那么人们有理由相信该程序没有错误。然而，这是一种耗时的验证方法，而且还存在可能失败的未经测试的输入。在程序实施并投入使用后发现这些错误将会更加耗费资源。使用形式化方法来推理程序的正确性对于关键系统至关重要，因为它提供了一种全面证明程序没有错误的方式。

### 3.1 霍尔演算

为了说明霍尔演算规则所捕捉到的程序原则的类型，只需查阅其中一些规则即可。（注：规则意味着如果规则线上方的所有语句都成立——前提——那么规则线下方的语句——结论——也成立。）

{A}α1{B}{B}α2{C}{A}α1;α2{C} (组合规则)

组合规则捕捉了程序的基本顺序组合。作为前提，我们对两个程序α1 和α2 的部分正确性做出了两个假设。第一个假设是，当α1 在满足 A 的状态下执行时，只要它停止，它将在满足 B 的状态下结束。第二个假设是，当α2 在满足 B 的状态下执行时，只要它停止，它将在满足 C 的状态下结束。该规则的结论是关于程序α1;α2（即α1 与α2 顺序组合）的部分正确性，该结论可以从这两个假设中得出。换句话说，我们可以得出结论，如果α1;α2 在满足 A 的状态下执行，只要它停止，它将在满足 C 的状态下结束。

迭代规则是重要的规则之一，因为它捕捉了程序反复执行某些代码段直到某个条件不再成立的基本能力。

{A∧B}α{A}{A}while B do α{¬B∧A} (迭代规则)

最后，推论的两个规则对于在直观上清晰地涉及较弱的后置条件和较强的前置条件的推理提供了一个形式基础。

{A}α{B}B→C{A}α{C} (推论规则 1)C→A{A}α{B}{C}α{B} (推论规则 2)

从 Hoare \[1969]中提出的形式主义中，我们省略了其公理模式，因为这需要一种一阶语言。最后，在关于 Hoare 逻辑的后续工作中，通常还会添加更多规则。有关早期概述，请参见 Apt \[1979]。

### 3.2 Hoare 演算和 PDL

动态逻辑来自 Pratt 对 Hoare 三元组和 Hoare 演算在模态逻辑形式主义中的解释。通过模态性\[α]，我们可以形式地表达通过执行程序α可达的所有状态满足公式 A。这通过写作\[α]A 来实现。因此，Hoare 三元组{A}α{B}简单地由 PDL 公式捕捉

A→\[α]B.

此外，通过定义缩写，PDL 可以轻松引入重要的编程结构：

* 如果 A，则α否则β:=((A?;α)∪(¬A?;β))
* 当 A 执行α时，命题α:=((A?;α)∗;¬A?)
* 重复执行α直到 A 成立：A:=(α;((¬A;α)∗;A?))
* 中止条件：abort:=0?
* skip:=1?

因此，似乎我们使用 PDL 可以很好地逻辑地证明结构化程序的正确性。除了 PDL 和 Hoare 演算之间这种比较模糊的联系之外，也许还不清楚它们如何在形式上相关。实际上，PDL 是 Hoare 演算的一种推广，因为 Hoare 演算的所有规则都可以在 PDL 的公理系统中得到证明。（严格来说，Hoare 演算包含了需要一阶动态逻辑的扩展语言的公理。）这是非常了不起的，所以我们将展示它们如何被推导出来。

证明从假设规则的前提开始。然后通过使用这些假设、PDL 的公理和规则，以及其他任何东西，目标是建立规则的结论在逻辑上是成立的。因此，对于组合规则，我们首先假设{A}α1{B}，即在 PDL 的表述中为 A→\[α1]B，并假设{B}α2{C}，即 B→\[α2]C。目标是证明{A}α1;α2{C}。准确地说，我们想要证明从公式集合{A→\[α1]B,B→\[α2]C}中可以推导出 A→\[α1;α2]C。

| 1. | A→\[α1]B              | 假设 {A}α1{B}       |
| -- | --------------------- | ----------------- |
| 2. | B→\[α2]C              | 假设 {B}α2{C}       |
| 3. | \[α1]B→\[α1]\[α2]C    | 从 2 使用\[α1]的单调性得出 |
| 4. | A→\[α1]\[α2]C         | 从 1 和 3 使用命题推理得出  |
| 5. | \[α1;α2]C↔\[α1]\[α2]C | 公理模式 (A1)         |
| 6. | A→\[α1;α2]C           | 从 4 和 5 使用命题推理得出  |
| —  | {A}α1;α2{C}           |                   |

迭代规则的证明稍微复杂一些。

| 1.  | A∧B→\[α]A                                                              | 假设 {A∧B}α{A}                   |
| --- | ---------------------------------------------------------------------- | ------------------------------ |
| 2.  | A→(B→\[α]A)                                                            | 从 1 中使用命题推理                    |
| 3.  | \[B?]\[α]A↔(B→\[α]A)                                                   | 公理模式（A4）                       |
| 4.  | A→\[B?]\[α]A                                                           | 从 2 和 3 使用命题推理得出               |
| 5.  | \[B?;α]A↔\[B?]\[α]A                                                    | 公理模式 (A1)                      |
| 6.  | A→\[B?;α]A                                                             | 通过命题推理从 4 和 5 得出               |
| 7.  | A→\[(B?;α)∗]A                                                          | 通过(I)从 6 得出                    |
| 8.  | A→(¬B→(¬B∧A))                                                          | 命题的重言式                         |
| 9.  | A→[(B?;α)∗](%C2%ACB%E2%86%92\(%C2%ACB%E2%88%A7A\)/)                    | 从 7 和 8 使用\[(B?;α)∗]的单调性和命题推理  |
| 10. | [¬B?](%C2%ACB%E2%88%A7A/)↔ (¬B→(¬B∧A))                                 | 公理模式 (A4)                      |
| 11. | A→\[(B?;α)∗][¬B?](%C2%ACB%E2%88%A7A/)                                  | 从 9 和 10 使用\[(B?;α)∗]的单调性和命题推理 |
| 12. | [(B?;α)∗;¬B?](%C2%ACB%E2%88%A7A/)↔ \[(B?;α)∗][¬B?](%C2%ACB%E2%88%A7A/) | 公理模式(A1)                       |
| 13. | A→[(B?;α)∗;¬B?](%C2%ACB%E2%88%A7A/)                                    | 从 12 使用命题推理                    |
| —   | {A}当 B 执行α直到{¬B∧A}                                                     |                                |

在 PDL 的背景下，推论的两个规则实际上是组合规则的特例。要得到第一个规则，将α1 替换为α，将α2 替换为 skip。要得到第二个规则，将α1 替换为 skip，将α2 替换为α。只需应用公理模式（A4），并注意到对于所有的 A 和所有的α，\[α;skip]A↔\[α]A 和\[skip;α]A↔\[α]A 也是⊢-可推导的。

### 3.3 总正确性

根据 Hoare 在 Hoare \[1979]中自己的承认，他最初的演算法只是一个起点，并且存在一些限制。特别地，它只允许人们推理关于部分正确性的问题。也就是说，语句{A}α{B}的真实性只能确保在满足 A 的状态下开始执行α的所有执行都会以满足 B 的状态结束，或者不会终止。也就是说，部分正确的程序可能具有非终止的执行。（实际上，一个没有终止执行的程序总是部分正确的。例如，程序 while 1 do skip 就是这种情况。对于所有的公式 A 和 B，公式 A→\[while 1 do skip]B 都是可推导的。）这个演算法没有提供证明程序终止的基础。可以对其进行修改，以解释程序的总正确性：部分正确性加上终止性。这是通过修改迭代规则来实现的。我们在这里不进行介绍，将感兴趣的读者转至 Apt \[1981]。

让我们首先观察到，对于确定性程序，可以通过以下类型的公式来捕捉总正确性

A→⟨α⟩B.

表达式 ⟨α⟩B 意味着存在一个满足 B 的状态的 α 的执行终止。此外，如果 α 是确定性的，这个可能的终止执行就是 α 的唯一执行。因此，如果首先成功地证明一个程序是确定性的，这个技巧就足够好用来证明其总正确性。

在 PDL 领域中存在一个对于完全正确性问题的一般解决方案。但我们需要稍作扩展。Pratt 在 Pratt \[1980b]中已经提到，PDL 并不足以捕捉程序的无限循环。作为对此的反应，引入了带有重复的 PDL（RPDL），由 Streett \[1982]提出。对于所有程序α，它包含了表达式Δα，其语义为：

* V(Δα)={x: 存在一个无限序列 z0,z1,…，使得 z0=x，并且对于所有 n≥0，znR(α)zn+1}。

Streett \[1982]猜想 RPDL 可以通过将以下公理模式精确地添加到 PDL 的证明系统中来进行公理化。

(A6)

Δα→⟨α⟩Δα

(A7)

[α∗](A%E2%86%92%E2%9F%A8%CE%B1%E2%9F%A9A/)→(A→Δα)

该猜想的证明由 Sakalauskaite 和 Valiev \[1990]提供。（在组合 PDL 变体中的猜想版本也在 Gargov 和 Passy \[1988]中得到证明。）

很容易看出，在上述 Hoare 演算中，非终止只能来自迭代规则。类似地，PDL 程序的非终止只能来自无界迭代的使用。表达式Δα表示α∗可能发散，这正是我们需要的概念。我们现在可以归纳地定义一个谓词∞，对于程序α，当α能进入一个非终止计算时，公式∞(α)将为真。

∞(π):=0 其中 π∈Π0 ∞(A?):=0 ∞(α∪β):=∞(α) ∨∞(β) ∞(α;β):=∞(α)∨⟨α⟩∞(β) ∞(α∗):=Δα∨⟨α∗⟩∞(α)

最后，一个程序的完全正确性可以通过以下类型的公式来表达

A→(¬∞(α)∧\[α]B),

这意味着如果 A 成立，那么程序α不能永远运行，并且每次α成功执行都会以满足 B 的状态结束。

## 4. 一些变体

关于扩展或限制其语法和语义而获得的一系列 PDL 变体的表达能力、可决定性、复杂性、公理化和完备性的结果构成了丰富的文献主题。我们只能说这么多，我们将只讨论其中的一些变体，略去了动态逻辑中其他重要工作的大部分内容。

### 4.1 没有测试的 PDL

公理模式\[A?]B↔(A→B)似乎表明对于每个公式 C，存在一个等价的无测试公式 C'，即存在一个无测试公式 C'使得⊨C↔C'。有趣的是观察到这个断言是不正确的。让 PDL0 是 PDL 限制为无测试正则程序的部分，即不包含测试的程序。Berman 和 Paterson \[1981]考虑了 PDL 公式⟨(p?;π)∗;¬p?;π;p?⟩1，它是

⟨当 p 时执行π⟩⟨π⟩p，

并证明没有与之等价的 PDL0 公式。因此，PDL 比 PDL0 具有更强的表达能力。他们的论证实际上可以推广如下。对于所有 n≥0，令 PDLn+1 是 PDL 的子集，其中程序只能包含测试 A?，当且仅当 A 是 PDLn 公式。对于所有 n≥0，Berman 和 Paterson 考虑了由 PDLn+1 公式 An+1 定义的情况

⟨当 An 时执行πn⟩⟨πn⟩An，

当 A0=p 且π0=π时，证明对于所有 n≥0，不存在与 An+1 等价的 PDLn 公式。因此，对于所有 n≥0，PDLn+1 比 PDLn 具有更强的表达能力。

### 4.2 具有逆转的 PDL

CPDL 是具有逆转的 PDL 的扩展。这是一个自 PDL 开始就被考虑的构造。对于所有程序α，让α−1 表示具有语义的新程序

xR(α−1)y 当且仅当 yR(α)x。

逆向构造允许我们表达关于当前状态之前的事实，并且可以对程序进行向后推理。例如，\[α−1]A 表示在执行α之前，A 必须成立。我们有

⊨A→\[α]⟨α−1⟩A ⊨A→\[α−1]⟨α⟩A

逆向构造的添加并不以任何重要的方式改变 PDL 的计算属性。通过添加以下公理模式的每个实例

(A8)

A→\[α]⟨α−1⟩A

(A9)

A→\[α−1]⟨α⟩A

对于 PDL 的证明系统，我们得到了一个在扩展语言中的声音和完备的推导谓词。有关详细信息，请参阅 Parikh \[1978]。CPDL 具有小模型属性，而（CPDL-SAT）是 EXPTIME 完全的。

很容易注意到 CPDL 比 PDL 具有更强的表达能力。为了看到这一点，考虑 CPDL 公式⟨π−1⟩1 和 LTSs M=(W,R,V)和 M′=(W′,R′,V′)，其中 W={x,y}，R(π)={(x,y)}，W′={y′}，R′(π)=∅和 V(x)=V(y)=V′(y′)=∅。由于 M,y 满足⟨π−1⟩1，而 M′,y′不满足⟨π−1⟩1，并且因为对于所有 PDL 公式 A，当且仅当 M,y 满足 A 时，M′,y′满足 A，所以很明显没有 PDL 公式等价于⟨π−1⟩1。

### 4.3 具有重复和循环的 PDL

我们已经在 3.3 节中介绍了 RPDL，展示了重复的力量。在这里，我们总结了关于 RPDL 的更多结果以及它与其他重复程序概念的联系。

关于 RPDL 的复杂性理论，Streett \[1982]已经证明了 RPDL 具有有限模型性质；准确地说，每个 RPDL 可满足公式 A 都可以在大小至多是 A 长度的三次指数的模型中满足。通过自动机理论的论证，可以得出结论，问题(RPDL-SAT)可以在确定性三次指数时间(3-EXPTIME)内解决。决定(RPDL-SAT)的上界与决定(PDL-SAT)的简单指数时间下界之间的差距因此是开放的。这个问题与计算机科学家对时间逻辑复杂性的日益关注以及(命题)模态μ-演算(MMC)的复杂性的建立密切相关，MMC 由 Kozen \[1983]提出，因为 RPDL 可以线性扩展地转化为 MMC。在 Vardi 和 Stockmeyer \[1985]中，证明了非确定性指数时间的上界。在 Emerson 和 Jutla \[1988]以及 Emerson 和 Jutla \[1999]的最终形式中，证明了(MMC-SAT)和(RPDL-SAT)是 EXPTIME 完全的。如果我们添加第 4.2 节的逆运算符，就得到了 CRPDL。对于(CRPDL-SAT)的复杂性在几年内仍然是开放的，但可以证明它也是 EXPTIME 完全的。这是通过结合 Emerson 和 Jutla \[1988]和 Vardi \[1985]的技术实现的，就像 Vardi \[1998]中所描述的那样。

在第 3.3 节中，我们定义了一个谓词∞，其中∞(α)表示程序α可以具有非终止计算。我们称 LPDL 为通过增加谓词∞而获得的逻辑。显然，RPDL 至少与 LPDL 一样表达能力强；在 RPDL 语言中∞(α)的归纳定义就是其证明。事实上，RPDL 比 LPDL 更具表达能力。这一点在 Harel 和 Sherman \[1982]中已经证明。可以怀疑的是，RPDL 和 LPDL 都比 PDL 具有更强的表达能力。通过证明 RPDL 和 LPDL 的一些公式在 PDL 中没有等价表达式来证实这一点。证明涉及到过滤技术，该技术旨在将 LTS 折叠为有限模型，同时保持某些公式的真假不变。对于一些 PDL 公式集合 X，它将满足 X 中完全相同公式的 LTS 状态分组为等价类。因此得到的状态等价类集合成为过滤模型的状态集合，并且适当地在其上构建了一个转换。

通过精心选择依赖于 PDL 公式 A 的 PDL 子公式集合 A 的 Fischer-Ladner 闭包 FL(A)，LTS 的过滤得到一个有限的过滤模型 M'，使得在 M 中的一个世界 u 上 A 可满足当且仅当它在过滤中包含 u 的等价类中可满足。（参见 Fischer 和 Ladner \[1979]。）

现在我们可以考虑对 LTS M=(W,R,V)进行过滤，使得

* W={(i,j):j 和 i 是整数,1≤j≤i}∪{u}
* (i,j)R(π)(i,j−1) 当 1≤j≤i
* 对于每个 i, uR(π)(i,i)
* 对于每个 p∈Φ0，V(p)=∅

用一句话来描述 M 中发生的情况是，从世界 u 开始，存在无限多个不断增长长度的有限π路径。我们既有 M,u 满足¬Δπ，又有 M,u 满足¬∞(π∗)。然而，对于每个 PDL 公式 A，我们都会有在通过 FL(A)对 M 进行过滤后得到的模型中，Δπ和∞(π∗)都在 u 的等价类中满足。实际上，过滤必须将 M 的某些状态合并并创建一些循环。因此，不存在能够表达Δπ的 PDL 公式，也不存在能够表达∞(π∗)的 PDL 公式。

还有其他方法可以使程序能够永远执行的断言成为可能。例如，Danecki \[1984a]提出了一个谓词 sloop，用于描述能够进入强循环的程序。

V(sloop(α))={x:xR(α)x}.

让我们称 SLPDL 为通过增加公式 sloop(α)而得到的逻辑。RPDL 和 SLPDL 在本质上是不可比较的：谓词Δ在 SLPDL 中不可定义，而谓词 sloop 在 RPDL 中不可定义。SLPDL 不具备有限模型性质。例如，命题

[π∗](%E2%9F%A8%CF%80%E2%9F%A91%E2%88%A7%C2%ACsloop\(%CF%80+\)/)

只有在无限 LTS 中可满足。尽管如此，Danecki \[1984a] 在确定性指数时间内证明了（SLPDL-SAT）公式的可决定性。

### 4.4 带有交集的 PDL

还研究了另一种构造：程序的交集。通过将程序的交集添加到 PDL 中，我们得到了 IPDL 逻辑。在 IPDL 中，对于所有的程序 α 和 β，表达式 α∩β 表示一个具有语义的新程序。

xR(α∩β)y 当且仅当 xR(α)y 和 xR(β)y。

例如，⟨α∩β⟩A 的预期解读是，如果我们在当前状态下执行 α 和 β，则存在一个可达到的状态，该状态满足 A。因此，我们有

⊨⟨α∩β⟩A→⟨α⟩A∧⟨β⟩A，

但是，总的来说，我们有

不⊨⟨α⟩A∧⟨β⟩A→⟨α∩β⟩A。

尽管程序的交集在 PDL 应用于人工智能和计算机科学的各种情况下很重要（例如，在并发的上下文中），但是 PDL 与交集的证明理论和复杂性理论在几年内一直未被探索。关于 IPDL 的复杂性理论，当考虑有限模型性质时会出现困难。实际上，构造 sloop(α)可以用 IPDL 表示。在具有交集的命题动态逻辑中，它等价于⟨α∩1?⟩1。因此，我们可以调整第 4.3 节中的 SLPDL 公式，并且我们有

[π∗](%E2%9F%A8%CF%80%E2%9F%A91%E2%88%A7\[%CF%80+%E2%88%A91)

仅在无限 LTS 中可满足。换句话说，IPDL 不具备有限模型属性。Danecki \[1984b]研究了 IPDL 的复杂性理论，并证明(IPDL-SAT)的决定可以在确定性双指数时间内完成。（Göller，Lohrey 和 Lutz \[2007]提供了现代证明。）决定(IPDL-SAT)的这个双指数时间上界与 Fischer 和 Ladner \[1979]得到的决定(PDL-SAT)的简单指数时间下界之间的复杂性差距在二十多年来一直未解决。2004 年，Lange \[2005]建立了(IPDL-SAT)的指数空间下界。2006 年，Lange 和 Lutz \[2005]通过从指数空间有界交替图灵机的字问题进行约简，给出了 IPDL 无测试的可满足性问题的双指数时间下界的证明。在这个约简中，迭代结构的作用是至关重要的，因为根据 Massacci \[2001]，无迭代的 IPDL 无测试的可满足性问题只是 PSPACE 完全的。将逆转构造添加到 IPDL 中，我们得到 ICPDL。Göller，Lohrey 和 Lutz \[2007]证明了 ICPDL 的可满足性问题是 2-EXPTIME 完全的。

关于 IPDL 的证明理论，在我们意识到在带有交集的 PDL 语言中，没有公理模式“对应”于程序α∩β的语义 xR(α∩β)y 当且仅当 xR(α)y 和 xR(β)y 时，困难就出现了。也就是说，例如，公理模式(A1)和(A2)“对应”于程序α;β和α∪β的语义的方式不同。因此，带有交集的 PDL 的公理化一直开放，直到在 Balbiani 和 Vakarelov \[2003]中开发出完整的证明系统。

在 PDL 的另一种变体中，由 Peleg \[1987]提出并由 Goldblatt \[1992b]进一步研究，表达式α∩β被解释为“并行执行α和β”。在这个背景下，二元关系 R(α)和 R(β)不再是形如(x,y)的一对一对的集合，而是形如(x,Y)的一对一对的集合，其中 x 是一个世界，Y 是一组世界。这个想法受到了 Parikh \[1985]的游戏逻辑的启发，游戏逻辑是对 PDL 的一种解释，将“程序作为游戏”进行了解释。游戏逻辑提供了一个额外的程序构造，使程序的对偶成为可能，从而允许将程序的交集定义为程序的非确定性选择的对偶。

## 5. 结论

本文重点关注命题动态逻辑及其一些重要的变体。目前已经有一些书籍——Goldblatt \[1982]，Goldblatt \[1992a]，Harel \[1979]和Harel，Kozen和Tiuryn \[2000]——以及调查论文——Harel \[1984]，Kozen和Tiuryn \[1990]，Parikh \[1983]——对PDL及其相关形式进行了研究。Pratt在Pratt \[2017]中提供了一个非正式和个人的发展动态逻辑的视角，这也具有历史价值。关于PDL的研究成果在发展许多系统动态的逻辑理论方面起到了重要作用。然而，这些理论可以说超出了本文的范围。Van Eijck和Stokhof \[2006]是对使用动态逻辑的主题的最新概述，涉及到一些对哲学家来说具有一定兴趣的主题，例如通信动态或自然语言语义学。最近的书籍对较新的主题进行了更详细的讨论，例如Van Ditmarsch，Van Der Hoek和Kooi \[2007]中的知识动态逻辑（动态认知逻辑）以及Platzer \[2010]中的连续和混合系统的动态逻辑（微分动态逻辑）。PDL最初是为了推理程序而设计的。模态逻辑在推理程序方面有许多其他应用。算法逻辑更接近PDL，因为它允许明确地讨论程序。请读者参考Mirkowska和Salwicki \[1987]中提出的工作。时间逻辑现在是理论计算机科学中的主要逻辑，并与程序逻辑有密切联系。它们允许使用一种抽象程序标签的语言来表达转换系统的时间行为。例如，Schneider \[2004]对这一研究领域的基础进行了概述。

## Bibliography

* Apt, K., 1981, “Ten years of Hoare’s logic: A survey — Part I”, _ACM Transactions on Programming Languages and Systems_, 3(4): 431–483.
* Balbiani, P., and D. Vakarelov, 2003, “PDL with intersection of programs: a complete axiomatization”, _Journal of Applied Non-Classical Logics_, 13: 231-276.
* van Benthem, J., 1998, “Program constructions that are safe for bisimulation”, _Studia Logica_, 60: 311–330.
* Berman, F., and M. Paterson, 1981, “Propositional dynamic logic is weaker without tests”, _Theoretical Computer Science_, 16: 321–328.
* Burstall, R., 1974, “Program Proving as Hand Simulation with a Little Induction”, _Information Processing 74: Proceedings of IFIP Congress 74_, Amsterdam: North Holland Publishing Company, 308–312.
* Danecki, R., 1984a, “Propositional dynamic logic with strong loop predicate”, in M. Chytil and V. Koubek, _Mathematical Foundations of Computer Science_, Berlin: Springer-Verlag, 573-581.
* –––, 1984b, “Nondeterministic propositional dynamic logic with intersection is decidable”, in A. Skowron (ed.), _Computation Theory_, Berlin: Springer-Verlag, 34-53.
* De Giacomo, G., and F. Massacci, 2000, “Combining deduction and model checking into tableaux and algorithms for converse-PDL”, _Information and Computation_, 160: 109–169.
* van Ditmarsch, H., W. van Der Hoek, and B. Kooi, 2007, _Dynamic epistemic logic_, Dordrecht: Springer-Verlag.
* van Eijck, J., and M. Stokhof, 2006, “The Gamut of Dynamic Logics”, in D. Gabbay and J. Woods (eds.), _The Handbook of History of Logic_, Volume 7—_Logic and the Modalities in the Twentieth Century_, Amsterdam: Elsevier, 499–600.
* Emerson, E., and Jutla, C., 1988, “The Complexity of Tree Automata and Logics of Programs (Extended Abstract)”, in _Proceedings of the 29th Annual Symposium on Foundations of Computer Science_, Los Alamitos, CA: IEEE Computer Society, 328–337.
* –––, 1999, “The Complexity of Tree Automata and Logics of Programs”, in _SIAM Journal of Computing_, 29: 132–158.
* Engeler, E., 1967, “Algorithmic properties of structures”, _Mathematical Systems Theory_, 1: 183–195.
* Fischer, M., and R. Ladner, 1979, “Propositional dynamic logic of regular programs”, _Journal of Computer and System Sciences_, 18: 194–211.
* Floyd, R., 1967, “Assigning meaning to programs”, _Proceedings of the American Mathematical Society Symposia on Applied Mathematics_ (Volume 19), Providence, RI: American Mathematical Society, 19–31.
* Gargov, G., and S. Passy, 1988, “Determinism and looping in combinatory PDL”, _Theoretical Computer Science_, Amsterdam: Elsevier, 259–277.
* Goldblatt, R., 1982, _Axiomatising the Logic of Computer Programming_, Berlin: Springer-Verlag.
* –––, 1992a, _Logics of Time and Computation_, Stanford: Center for the Study of Language and Information Publications.
* –––, 1992b, “Parallel Action: Concurrent Dynamic Logic with Independent Modalities”, _Studia Logica_, 51: 551–578.
* Göller, S., M. Lohrey, and C. Lutz, 2007, “PDL with intersection and converse is 2EXP-complete”, _Foundations of Software Science and Computational Structures_, Berlin: Springer, 198–212.
* Harel, D., 1979, _First-Order Dynamic Logic_, Berlin: Springer-Verlag.
* –––, 1983, “Recurring dominoes: making the highly undecidable highly understandable”, in M. Karpinski (ed.), _Foundations of Computation Theory_, Berlin: Springer-Verlag, 177–194.
* –––, 1984, “Dynamic logic”, in D. Gabbay and F. Guenthner (eds.), _Handbook of Philosophical Logic_ (Volume II), Dordrecht: D. Reidel, 497–604.
* Harel, D., D. Kozen, and J. Tiuryn, 2000, _Dynamic Logic_, Cambridge, MA: MIT Press.
* Harel, D. and Sherman, R., 1982, “Looping vs. Repeating in Dynamic Logic”, _Information and Control_, 55: 175–192.
* Hoare, C., 1969, “An axiomatic basis for computer programming”, _Communications of the Association of Computing Machinery_, 12: 576–580.
* Kozen, D., 1983, “Results on the Propositional μ-Calculus”, _Theoretical Computer Science_, 27: 333–354.
* Kozen, D., and R. Parikh, 1981, “An elementary proof of the completeness of PDL”, _Theoretical Computer Science_, 14: 113–118.
* Kozen, D., and J. Tiuryn, 1990, “Logics of programs”, in J. Van Leeuwen (ed.), _Handbook of Theoretical Computer Science_ (Volume B), Amsterdam: Elsevier, 789–840.
* Lange, M., 2005, “A lower complexity bound for propositional dynamic logic with intersection”, in R. Schmidt, I. Pratt-Hartmann, M. Reynolds and H. Wansing (eds.), _Advances in Modal Logic_ (Volume 5), London: King’s College Publications, 133–147.
* Lange, M., and C. Lutz, 2005, “2-EXPTIME lower bounds for propositional dynamic logics with intersection”, _Journal of Symbolic Logic_, 70: 1072–1086.
* Lutz, C., 2005, “PDL with intersection and converse is decidable”. In L. Ong (ed.), _Computer Science Logic_, Berlin: Springer-Verlag, 413-427.
* Massacci, F., 2001, “Decision procedures for expressive description logics with intersection, composition, converse of roles and role identity”, in B. Nebel (ed.), _17th International Joint Conference on Artificial Intelligence_, San Francisco: Morgan Kaufmann, 193–198.
* Mirkowska, G., and A. Salwicki, 1987, _Algorithmic Logic_, Dordrecht: D. Reidel.
* Nishimura, H., 1979, “Sequential method in propositional dynamic logic”, _Acta Informatica_, 12: 377–400.
* Parikh, R., 1978, “The completeness of propositional dynamic logic”, in J. Winkowski (ed.), _Mathematical Foundations of Computer Science_, Berlin: Springer-Verlag, 1978, 403-415.
* –––, 1983, “Propositional logics of programs: new directions”, in M. Karpinski (ed.), _Foundations of Computation Theory_, Berlin: Springer-Verlag, 347-359.
* –––, 1985, “The logic of games and its applications”, _Annals of Discrete Mathematics_, 24: 111–140.
* Peleg, D., 1987, “Concurrent dynamic logic”, _Journal of the Association of Computing Machinery_, 34: 450–479.
* Platzer, A., 2010, _Logical Analysis of Hybrid Systems: Proving Theorems for Complex Dynamics_, Berlin: Springer, 2010.
* Pratt, V., 1976, “Semantical considerations on Floyd-Hoare logic”, in _Proceedings of the 17th IEEE Symposium on Foundations of Computer Science_, Los Alamitos, CA: IEEE Computer Society, 109–121.
* –––, 1978, “A practical decision method for propositional dynamic logic”, in _Proceedings of the 10th Annual ACM Symposium on Theory of Computing_, New York, NY: ACM, 326–337.
* –––, 1980a, “A near-optimal method for reasoning about action”, _Journal of Computer and System Sciences_, 20: 231–254.
* –––, 1980b, “Application of Modal Logic to Programming”, _Studia Logica_, 39: 257–274.
* –––, 2017, “Dynamic Logic: A Personal Perspective”, _Lecture Notes in Computer Science_ (Volume 10669), Cham: Springer, 153–170.
* Sakalauskaite, J., and M. Valiev, 1990, “Completeness of propositional dynamic logic with infinite repeating”, in P. Petkov (ed.), _Mathematical Logic_, New York: Plenum Press, 339–349.
* Salwicki, A., 1970, “Formalized algorithmic languages”, _Bulletin de l’Academie Polonaise des Sciences, Serie des sciences mathematiques, astronomiques et physiques_, 18: 227–232.
* Segerberg, K., 1977, “A completeness theorem in the modal logic of programs”, _Notices of the American Mathematical Society_, 24: 522.
* Schneider, K., 2004, _Verification of Reactive Systems_, Berlin: Springer-Verlag.
* Streett, R., 1982, “Propositional dynamic logic of looping and converse is elementary decidable”, _Information and Control_, 54: 121–141.
* Vakarelov, D., 1983, “Filtration theorem for dynamic algebras with tests and inverse operator”, in A. Salwicki (ed.), _Logics of Programs and their Applications_, Berlin: Springer-Verlag, 314–324.
* Vardi, M., 1985, “The Taming of Converse: Reasoning about Two-way Computations”, in _Lecture Notes in Computer Science_ (Volume 193), Berlin-Heidelberg: Springer, 413–423.
* –––, 1998, “Reasoning about the past with two-way automata”, in _Lecture Notes in Computer Science_ (Volume 1443), Berlin-Heidelberg: Springer, 628–641.
* Vardi, M., and Stockmeyer, L., 1985, “Improved Upper and Lower Bounds for Modal Logics of Programs: Preliminary Report”, in _Proceedings of the 17th Annual ACM Symposium on Theory of Computing_, New York, NY: ACM, 240–251.
* Yanov, J., 1959, “On equivalence of operator schemes”, _Problems of Cybernetic_, 1: 1–100.

## Academic Tools

| ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-dynamic).                                                                      |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-dynamic/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
| ![inpho icon](https://plato.stanford.edu/symbols/inpho.png)         | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-dynamic\&redirect=True) at the Internet Philosophy Ontology Project (InPhO).   |
| ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif)      | [Enhanced bibliography for this entry](https://philpapers.org/sep/logic-dynamic/) at [PhilPapers](https://philpapers.org/), with links to its database.                          |

## Other Internet Resources

\[Please contact the author with suggestions.]

## Related Entries

[computability and complexity](https://plato.stanford.edu/entries/computability/) | [computer science, philosophy of](https://plato.stanford.edu/entries/computer-science/) | [logic: action](https://plato.stanford.edu/entries/logic-action/) | [logic: and information](https://plato.stanford.edu/entries/logic-information/) | [logic: modal](https://plato.stanford.edu/entries/logic-modal/) | [logic: temporal](https://plato.stanford.edu/entries/logic-temporal/)

[Copyright © 2023](https://plato.stanford.edu/info.html#c) by\
[Nicolas Troquard](https://www.inf.unibz.it/\~ntroquard/) <[_nicolas.troquard@gssi.it_](mailto:nicolas%2etroquard%40gssi%2eit)>\
[Philippe Balbiani](http://www.irit.fr/\~Philippe.Balbiani/)
