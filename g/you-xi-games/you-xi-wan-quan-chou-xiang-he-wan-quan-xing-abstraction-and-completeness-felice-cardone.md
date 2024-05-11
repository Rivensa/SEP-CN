# 游戏、完全抽象和完全性 abstraction and completeness (Felice Cardone)

*首次发表于 2017 年 1 月 12 日星期四；实质性修订于 2021 年 2 月 2 日星期二*

计算机程序是特定类型的文本。因此，自然而然地会问，程序的含义是什么，或者更一般地说，我们如何建立编程语言的形式语义学解释。

对于这些问题有许多可能的答案，每个答案都受到程序某些特定方面的激励。例如，程序需要在某种计算机上执行这一事实引发了操作语义，而编程语言与数理逻辑的形式语言的相似性激发了用集合论模型解释程序及其组成部分的指称方法。

这些解释中的每一个都在编程语言的短语上引发了自己的同义关系：简而言之，完全抽象属性陈述了指称和操作方法定义了相同的关系。这是编程语言语义解释的一个基准属性，对于基于λ-演算的简单语言的直观指称解释的失败最终导致了对指称语义技术工具的改进，达到了游戏语义的顶峰，这在一定程度上受到了 Lorenzen 及其学派最初在直觉主义逻辑语义中使用的对话游戏的启发，后来由 Blass 和其他人扩展到解释 Girard 线性逻辑。这种建立在建设性逻辑和编程之间的桥梁也暗示了语义和证明理论之间更强的关系形式，其中完全性概念也许是最显著的例子。

---

## 1. Introduction

### 1.1 Interpretations of programming languages

The notion of full abstraction arises from the Scott-Strachey approach to the semantical analysis of programming languages (Scott & Strachey 1971; Strachey 1966, 1967), also known as *denotational* semantics. One fundamental aim of a denotational semantics of a programming language L is to give a *compositional* interpretation M:L→D of the *program phrases* of L as elements of abstract mathematical structures (*domains*) D.

我们可以选择另一种赋予程序意义的方式，基于它们的执行。这种操作性解释仅在 L 的程序集 Prog 上定义，并涉及一组适当的程序值的定义，这些值是 L 的可观察量。如果程序 e 的执行以值 v 终止，这种情况用符号 e⇓v 表示，那么 v 就是 e 的操作意义。这将程序的操作性解释定义为从程序到值的部分函数 O，其中当 e⇓v 时，O(e)=v。

这两种解释都在程序短语上引起了自然的等价关系。在其一种表述中，完全抽象陈述了语言上的指称等价与操作语义引起的等价的巧合。完全抽象最初是由 Robin Milner（1975）在一篇论文中首次定义的，该论文还揭示了指称语义的基本概念要素：组合性以及程序的观察等价和指称等价之间的关系。因此，完全抽象可以被视为编程语言语义广阔领域中的一个有利观点，因此与编程语言哲学的核心问题（White 2004）和计算机科学（Turner 2016）密切相关。

### 1.2 组合性

组合性 (Szabó 2013) 是编程语言语义分析中的一个理想特征，因为它允许我们计算程序的含义作为其组成部分的含义的函数。实际上，在米尔纳的论述中 (尤其是 1975: sec. 1, 4)，组合性甚至更普遍地适用于通过适当的组合操作从较小的计算代理组装而成的计算代理。这些代理可能包括程序以外的硬件系统，比如由内存组成的计算机，内存又由两个内存寄存器组成，以及一个处理单元，其中所有组件都是计算代理。这使我们能够在一个框架中包括由硬件、软件甚至两者组成的系统。现在，定义编程语言的各种短语类别的语法规则使我们能够将 L 视为程序短语的代数，其签名由这些规则确定。特别适用于当前情境的组合性解释 (Szabó 2013: sec. 2) 确定了程序的组合性解释与从这个代数到指示域的同态的对应，将程序代数的每个操作关联到指示的语义操作。

举例来说，考虑一个简单的命令式语言，其程序 c 表示状态转换 M(c):Σ→Σ。在这种语言的程序操作中，有顺序组合，从程序 c1 和 c2 构建程序 c1;c2。该程序的预期操作含义是，如果从状态 σ∈Σ 开始执行 c1;c2，我们首先从状态 σ 开始执行 c1。如果执行终止，我们得到状态 σ′，从中开始执行 c2，如果执行终止，得到状态 σ′′。后一个状态是从状态 σ 执行 c1;c2 后达到的状态。从指示的角度来看，我们有函数 Σ→Σ 上的组合操作，我们的程序的组合性解释由以下等式给出，可作为 M 的定义条款，根据程序结构的归纳来阅读：M(c1;c2)=M(c2)∘M(c1)或者更明确地说，对于任何状态 σ:M(c1;c2)(σ)=M(c2)(M(c1)(σ))。由于大多数编程语言有多种短语类别（例如表达式、声明、指令），程序的代数通常是多排序的，每个短语类别对应一个排序。指示语义系统地追求将每个程序短语组合地关联到匹配排序的指示（参见 Stoy 1977 的早期论述）。

### 1.3 程序等价性和游戏、完全抽象和完全性

编程语言 L 的解释的存在以标准方式诱导出程序短语的等价性：

定义 1.1（表示等价）。对于任意两个程序短语 e, e′，当 M(e)=M(e′) 时，它们是表示等价的，记作 e≃Me′。

如果 M 是组合的，那么 ≃M 是程序代数上的一个同余，其衍生操作，即由签名的操作组合而得的操作，被称为上下文。上下文 C[ ] 代表一个带有“空洞”的程序短语，可以由适当类型的程序短语 e 填充以得到程序短语 C[e]。通过上下文，我们可以轻松地表征语义映射的组合性。

命题 1.1. 如果 M 是组合的，那么对于所有的短语 e, e′ 和所有的上下文 C[ ]:(1)e≃Me′⇒C[e]≃MC[e′]。

这个表述突显了组合性的另一个有价值的方面，即所有上下文的引用透明性，等价地它们的外延性：指称等价的短语可以被替换到任何上下文中，而不改变结果短语的指称。特别地，蕴涵式 (1) 表明 ≃M 是一个同余。因此，为了比较指称同余和操作同余，我们必须从通过设定 e∼e′ 当且仅当 O(e)=O(e′) 定义的天真操作等价中划分出一个同余。这可以通过利用程序上下文 C[ ] 来完成，它代表一个带有可以由适当类型的程序短语 e 填充的“空洞”程序，从而产生一个完整的程序 C[e]。

定义 1.2 (观察等价) 对于任意两个程序短语 e, e′，当且仅当对于所有的程序上下文 C[ ] 和所有的程序值 v:C[e]⇓v 当且仅当 C[e′]⇓v 时，它们是观察等价的，记作 e≃Oe′。

观察等价性随后是程序短语代数上的一致关系，实际上它是包含在∼中的最大一致关系。从我们密切追随的米尔纳（1975）的论述的一般观点来看，计算代理的上下文代表其可能的环境之一。如果我们采纳“显性行为构成了计算代理的全部含义”（米尔纳 1975: 160）的原则，那么上下文直观地代表了我们可以对计算代理行为进行的观察。在程序的情况下，可观察的是值，因此观察等价性确定了通过其结果为不同值的观察无法区分的短语。米尔纳方法论原则的一个结果是，计算代理成为了一个转换器，其输入序列由其环境提出的询问或回应组成，输出序列由其环境的询问或回应组成。（Milner 1975: 160）

> 计算代理的行为随后采取了代理与其环境之间的对话形式，这个隐喻将成为第 3 节讨论的语义论方法的核心。这种行为立场源自工程师对有限状态设备的工作，米尔纳将其扩展为建模并发系统的方法论，旨在

游戏、完全抽象和完全性。

> 描述一个并发系统充分到足以确定外部观察者将会看到或体验到的确切行为。因此，这种方法是彻底外延的；如果我们在不拆开它们的情况下无法区分两个系统，那么它们就是无法区分的。（Milner 1980: 2）

此外，系统和观察者的角色是对称的，以至于我们希望将观察者表示为一台机器，然后将组合观察者/机器表示为一台机器，然后了解这台机器对于新观察者的行为。（Milner 1980: 19）

> we would like to represent the observer as a machine, then to represent the composite observer/machine as a machine, then to understand how this machine behaves for a new observer. (Milner 1980: 19)

观察等价性对计算代理的内部细节视而不见，只观察它可能参与的环境中的可能交互，而指称等价性则假定了计算代理的内部结构，并以一种组合的方式，从其内部部分的描述中合成其描述。完全抽象的概念正是旨在捕捉这些双重视角的巧合：

定义 1.3（完全抽象）。如果引发的等价关系 ≃M 和 ≃O 重合，则指称语义 M 对于操作语义 O 是完全抽象的。

作为研究程序属性的工具，完全抽象可以被视为指称语义的完备性属性：可以通过操作方式证明的程序等价性，也可以通过指称方式证明。等价地，指称证明两个术语不等价将足以表明它们在每个程序上下文中都不可互换。

完全抽象还充当了评估从语言 L1 到（不一定不同的）语言 L2 的翻译ϑ的标准，只要这两种语言具有相同的可观察集合，比如 Obs（Riecke 1993）。然后，如果 e，e′∈L1 的观察等价（相对于 Obs 定义）等价于ϑ(e)，ϑ(e′)在 L2 中的观察等价，那么ϑ就是完全抽象的。语言之间存在完全抽象的翻译可以用来比较它们的表达能力，这是根据（Mitchell 1993; Riecke 1993）的建议：如果存在从 L1 到 L2 的完全抽象翻译，那么 L1 的表达能力不比 L2 更强。

在继续介绍编程语言语义领域中完全抽象和相关概念之前，为了展示这些概念的广泛相关性，有趣的是观察到存在一个非常普遍的情境，可以在这个情境中研究完全抽象属性，这是由 Hodges（2001）和其他人最近对自然语言和人工语言的组成性进行的研究所建议的。在这种情境中，完全抽象与通过 Frege 的上下文原则（参见 Janssen 2001）将语言 Y 的子集 X 的语义解释组合扩展到整个语言的问题相关联，上下文原则陈述了 Y 中表达式的含义是它对包含它的 X 中表达式的含义所作出的贡献。在 Frege 的原始表述中，X 是句子集合，Y 是所有表达式集合，而在编程理论中，X 是程序集合，Y 是所有程序短语集合。

对完全抽象定义的减弱代表了语言的指称解释的基本适当性要求。

定义 1.4 (Computational adequacy). 如果对于所有程序 e 和所有值 v，当且仅当 vO(e)=v 时 M(e)=M(v)，那么表示语义 M 相对于操作语义 O 是计算上充分的。

计算充分性的等价表述可以突出其与完全抽象的关系：

命题 1.2. 假设 M 是一个组合表示解释，使得 O(e)=v 意味着 M(e)=M(v)。以下两个陈述是等价的：

1. M 对于 O 在计算上是足够的；
2. 对于任意的程序 e、e'∈Prog，当且仅当 e≃Oe'时，e≃Me'。

虽然完全抽象性的定义很直观，但对于非常自然的编程语言示例，完全抽象的模型一直难以找到，从而产生了完全抽象问题。在我们对完全抽象性的讨论中，我们主要集中在语言 PCF（可计算函数的编程语言，Plotkin 1977）的完全抽象问题上，它是一个带有算术原语和固定点组合子的简单类型λ演算，由 Scott 1969b 提出。这种语言很重要，因为它包含了语义分析需要处理的大多数编程特性：高阶函数、类型和递归，具有提供多种求值策略抽象设置的规约规则。此外，PCF 还是用于实验编程特性的其他扩展的模型，例如 Reynolds 的理想化 Algol（1981）。为了解决 PCF 的完全抽象问题，一些努力产生了一套数学技术，用于语义分析，其实用性超出了它们最初的应用范围。我们将在第 2 节中描述其中一些技术，该节专门讨论基于 Dana Scott（1970）引入的偏序结构的 PCF 的语义分析，我们在第 2.3 节中进行了详细讨论。在域论的理论发展以及针对 Girard 的线性逻辑（Girard 1987）的新研究领域中的技术发展，导致了游戏语义学（Abramsky、Jagadeesan 和 Malacaria 2000；Hyland 和 Ong 2000），它现在被认为是基于域的标准指称语义的可行替代方法。我们将在第 3 节中致力于介绍这种方法，试图提供足够的细节来引导读者进入广泛而仍在不断增长的文献，这些文献记录了将游戏应用于解释各种编程语言特性的应用。

## 2. 顺序高阶计算：PCF 的完全抽象问题

对于带有算术原语的简单类型 λ-演算版本 PCF（可计算函数编程）（Plotkin 1977）的完全抽象问题尤为棘手，PCF 是基于 Scott（1969）和 Milner（1973）的可计算函数逻辑的玩具编程语言。在本节中，我们介绍（一种版本的）该语言及其操作语义和表示语义，并概述了完全抽象问题在该语言中的出现。这个问题是编程语言理论研究的主要关注点之一，从其最初在重要论文（Milner 1977；Plotkin 1977）中的阐述，到 1993 年提出的第一个解决方案（Abramsky 等人 2000；Hyland 和 Ong 2000），这些解决方案使用了游戏语义，详情请参见第 3 节。

### 2.1 PCF 的语法

PCF 是一种基于简单类型λ演算的语言，扩展了算术和布尔原语，并相应地定义了其类型系统：

定义 2.1（PCF 类型）。PCF 的类型集合 Types 按如下方式归纳定义：

* 地面类型 num（表示自然数的项）和 bool（表示布尔值的项）是类型，
* 如果σ, τ是类型，那么(σ→τ)也是一种类型。

括号将尽可能被省略，按照右结合的约定，因此类型σ1→⋯σn→τ等同于(σ1→(σ2→(⋯(σn→τ)⋯)))。

PCF 术语是简单类型λ演算的术语，扩展了以下算术常量，具有指定的类型：

* 一个类型为 num 的常数 0，代表自然数 0；
* 一个类型为 num→num 的常数 succ，代表自然数的后继函数；
* 一个类型为 num→num 的常数 pred，代表自然数的前驱函数；
* 常量 tt 和 ff 的类型为 bool；
* 类型为 bool→num→num→num 和 bool→bool→bool→bool 的条件语句分别有常量，分别为 if ⋅ then ⋅ else ⋅，我们让上下文清楚地表明预期的结果类型；
* 一个常量 zero? 用于测试类型为 num→bool 的零
* 一个一元函数符号 Y(⋅) 代表固定点组合子，其中 Y(e):σ 对于任意 e:σ→σ。

根据允许推断形式为 B⊢e:σ 的判断的规则，术语是归纳地构建的，该判断陈述了在假设 e 中自由出现的变量在形如{x1:σ1,…,xk:σk}的基础 B 中被赋予唯一类型的情况下，术语 e 是类型 σ 的。因此，构建 PCF 术语的规则是这些判断的推理规则。特别地，有用于类型常量的规则，例如在任何基础 B 中都存在一个判断 B⊢zero?:num→bool，我们有用于类型 λ-抽象的规则 B,x:σ⊢e:τ B⊢λx:σ.e:σ→τ 和应用规则 B⊢e1:σ→τ B⊢e2:σ B⊢e1e2:τ 以及固定点运算符的规则 B⊢e:σ→σ B⊢Y(e):σ。

### 2.2 操作语义

一个 PCF 程序是一个封闭的基本类型术语。我们通过定义封闭术语 e 和值 v 之间的评估关系 e⇓v 来指定程序的执行方式，其中值是形式为 λx:σ.e 的常量和抽象。特别地，基本类型 bool 的值是 tt, ff，基本类型 num 的值是 0 和所有形式为 n=succ(…succn(0)…) 的术语。根据术语的结构，通过形式为 e⇓v 的判断的推理规则，评估被定义为按情况进行。这些规则说明了术语的评估结果如何取决于其他术语的评估结果，唯一的公理形式为对于每个值 v 都有 v⇓v。例如，有一个规则 e⇓vsucc e⇓succ v，它说明如果 e 的评估结果是 v，则 succ e 的评估结果是 succ v。类似地，我们可以描述其他常量的评估。形如 e1 e2 的术语的评估进行如下：首先评估 e1；如果评估以值 v′ 终止，则 e1 e2 的评估将继续评估 v′ e2；如果这以值 v 终止，则这是 e1 e2 的值，形式上为 e1⇓v′v′ e2⇓ve1 e2⇓v。对于形如 λx:σ.e1 的值，其对术语 e2 的应用有一个值（如果有的话），通过对 e1 中 x 的所有自由出现进行替换得到的术语 e1[e2/x] 的评估结果得到：e1[e2/x]⇓v(λx:σ.e1)e2⇓v。这些实现了一种按名调用的评估策略：在应用中，函数位置的术语必须在参数位置的术语之前完全评估，然后作为实际参数传递。不动点组合子对递归定义的编码至关重要。它的评估由规则 e(Y(e))⇓vY(e)⇓v 描述，这是唯一一个前提涉及比要评估的术语更大的术语的规则：这就是为什么评估关系的定义不能简化为结构归纳。

我们将特别关注评估术语 e 没有值的情况；在这些情况下，我们说 e 发散，并写作 e⇑。在存在发散术语的情况下，评估过程的因果结构得以暴露。最初的例子实际上是一个以非常强烈的方式发散的术语：

定义 2.2（未定义）。对于任何基本类型 γ，定义 Ω:γ 为 Y(λx:γ.x)

通过检查评估规则，我们发现唯一可能的评估过程会导致无限回归，因此 Ω⇑。

我们可以通过条件运算符定义通常的布尔运算，就像以下示例中所示：(2)(3)and=λx:bool,y:bool.if x then y else ff.or=λx:bool,y:bool.if x then tt else ywith the usual truth tables。然而，现在我们必须考虑评估过程的发散可能性，例如在像 or(Ω,tt) 这样的术语中，因此我们通过向 tt 和 ff 添加一个新的布尔值来扩展通常的真值表，表示信息的缺失，⊥（读作“未定义”），作为术语 Ω 的值。在这里，要评估的第一个参数是左边的参数，如果该评估发散，那么整个评估过程也会发散。现在考虑一个操作符 por，其解释由下表给出(4)porttff⊥ttttttttffttff⊥⊥tt⊥⊥在这种情况下 por(tt,Ω)=por(Ω,tt)=tt：这是在 PCF 的完全抽象问题中起着核心作用的并行或。结果将表明它不能由任何 PCF 术语定义，这正是因为它的并行性质。为了进行 PCF 的语义分析，我们需要一种具有部分元素的数据类型和支持通过不动点方程进行抽象递归定义的函数的理论：这就是斯科特（Scott）的域理论所实现的，这是斯特拉奇（Strachey）（1966 年，1967 年）构想的编程语言的指称语义的原始数学基础。

### 2.3 Denotational semantics

#### 2.3.1 类型作为域

一个部分数据空间的一般结构特性是什么？由 Dana Scott（1970）阐述的计算数学理论是对这个问题的回答，它以通常称为域的偏序集合作为基本结构。域的偏序描述了元素所携带的“信息”的定性概念。在这样的框架中，通过引入表示信息缺失的新元素⊥来具体化发散是很自然的。当在这个偏序中 x⊑y 时，

> y 与 x 一致且（可能）比 x 更准确[...]因此 x⊑y 意味着 x 和 y 都想要逼近同一个实体，但 y 提供了更多关于它的信息。这意味着我们必须允许“不完整”的实体，比如只包含“部分”信息的 x。（Scott 1970: 171）

结果的部分有序集还应具有这样的性质，即逼近序列，特别是无限链 x0⊑x1⊑… 应收敛于包含由 xi 累积提供的信息的极限。相同的结构也被用于 Kleene 在 Kleene 1952 年的第一递归定理的证明中 (secs. 66, 348–50)，并将允许根据极限的保持来定义连续函数的概念。

定义 2.3 (完全偏序). 完全偏序 (cpo) 是一个带有最小元素 ⊥ 的部分有序集 ⟨D,⊑⟩，并且对于 D 的每个增长链 x0⊑x1⊑… 都有一个最小上界 ⨆nxn。

对于任意集合 X，我们将 X⊥ 表示为通过添加一个新元素 ⊥ 而得到的集合 X∪{⊥}。根据它们的信息量对 X⊥ 的元素进行排序是很自然的，通过设置对于 x,y∈X⊥，x⊑y⟺(x=⊥ or x=y)。形式为 X⊥ 的部分有序结构被称为平坦域，其中包括 bool={tt,ff}⊥ 和 num=N⊥，它们将被用于解释 PCF 的基本类型。

对于域的一个普遍要求是，每个元素都是其有限逼近的极限，对于一个可以完全用偏序结构来表述的有限性（或紧致性）概念：

定义 2.4（cpo 的有限元素）。如果 D 是一个 cpo，元素 d∈D 是有限的，如果对于每个递增链 x0⊑x1⊑…d⊑⨆nxn⟹∃xi（d⊑xi）。对于 d∈D，记号 A(d)表示 d 下方的有限元素集合；A(D)是 D 的有限元素集合。有限元素也被称为紧致元素。

注意，集合 X 的有限子集正好是 X 的幂集的有限元素。还有一个有用的观察是，这个定义只部分符合我们的直觉：例如，考虑在 cpo0⊑1⊑2⊑⋯⊑∞⊑∞+1 中的有限元素∞+1。第二次翻译：

定义 2.5（代数 cpo）。如果对于每个 d∈D，存在一个递增链 x0⊑x1⊑…有限逼近 d 的元素，使得 d=⨆nxn，则 D 是代数的。如果 D 是代数的，我们称有限元素构成了 D 的基础。

关于代数 cpo 的最后一个完备性假设是为了得到适用于解释 PCF 的域范畴：

定义 2.6. 给定一个 cpo D，如果 X⊆D 有一个上界，我们称 X 是一致的，记作↑X，或者当 X={x,y}时记作 x↑y。如果对于每个满足↑X 的 X⊆D，存在一个最小上界，则 D 是一致完备的。

作为编程语言指示语义的含义框架，已被证明极为方便的域的以下概念（Scott 1982）：

定义 2.7（域）。域是一个具有可数基础的一致完备的代数 cpo。

#### 2.3.2 高阶可计算函数的抽象理论

如何利用域元素排序中隐含的信息概念来发展可计算性的抽象概念？显然，可计算函数应该保持其输入信息的任何增加的单调性：对于 x⊑y，有 f(x)⊑f(y)。特别是，对于平坦域上的严格函数 f:D→E，即对于 f(⊥D)=⊥E 的函数，它们是单调的。

考虑域{0,1}∞，其元素是 0、1 的有限和无限位序列，其中如果 u 是无限的并且 u=v，或者 u 是有限的并且 u 是 v 的前缀，则 u⊑v。对于以位序列⟨b1,b2,b3,…⟩作为参数的可计算函数，应该满足什么性质？以函数 search:{0,1}∞→B⊥为例，如果对于 u∈{0,1}∞，1 至少出现一次，则其值为 tt，否则为⊥。将序列⟨b1,b2,b3,…⟩视为逐个给定一个元素：在这个过程中获得的初始段是{0,1}∞的有限元素的递增链，⟨⟩⊑⟨b1⟩⊑⟨b1,b2⟩⊑⟨b1,b2,b3⟩⊑…，并且以⟨b1,b2,b3,…⟩为极限（即，最小上界）。根据单调性，我们有相应的值的递增链 search(⟨⟩)⊑search(⟨b1⟩)⊑search(⟨b1,b2⟩)⊑search(⟨b1,b2,b3⟩)⊑…如果 search(⟨b1,b2,b3,…⟩)=tt，则必须存在一个有限的初始段⟨b1,b2,…,bn⟩，使得 search(⟨b1,b2,…,bn⟩)=tt，这将是函数对于无限序列⟨b1,b2,b3,…⟩的累积值。一般来说，可计算函数 f:D→E 应该（是单调的并且）具有这样的性质：输出 f(x)的有限信息必须可以通过给定输入 x 的有限信息来获得。这等同于最初由 Scott 在他的域上可计算函数理论中引入的连续性概念：

**Definition 2.8** (Continuous functions). If ⟨D,⊑D⟩,⟨E,⊑E⟩ are cpo’s and f:D→E is monotonic, f is *continuous* iff(⨆ixi)=⨆if(xi)for every increasing chain x0⊑x1⊑…⊆D.

从指称语义的角度来看，连续函数 D→D 的一个基本性质是它们具有一个最小不动点，其构造可以统一且连续地进行：

定理 2.1（连续函数的不动点定理）设 f:D→D 是一个连续函数，x∈D 使得 x⊑f(x)。那么元素⨆n∈Nf(n)(x) 是最小的 y⊒x，使得 f(y)=y。

定义 2.9. 连续函数 f:D→D 的最小不动点是由 fix(f)=def⨆n∈Nf(n)(⊥) 定义的 D 中的元素。

从 D 到 E 的连续函数，对于 cpo's ⟨D,⊑D⟩ 和 ⟨E,⊑E⟩，形成一个 cpo [D→E]，通过逐点设置顺序，对于 f,g:D→E:f⊑g⟺∀d∈D.f(d)⊑Eg(d)。如果 D 和 E 是域，那么 [D→E] 是一个域，而 fix(⋅):[D→D]→D 是连续的。对 cpo's 的进一步构造也扩展到域，并且被广泛使用的是笛卡尔积：给定 cpo's D,E，它们的笛卡尔积被定义为集合 D×E，其中 d∈D 且 e∈E，通过逐点排序：⟨d,e⟩⊑⟨d′,e′⟩ 当且仅当 d⊑Dd′ 且 e⊑Ee′。我们可以用范畴语言（Plotkin 1978, Other Internet Resources）总结这些构造，说对象是域，态射是连续函数的范畴是笛卡尔闭的。

#### 2.3.3 PCF 的连续语义

PCF 的标准解释包括一组 cpos Dσ，对于每种类型 σ，其中 Dnum=N⊥ 和 Dbool=B⊥，Dσ→τ=[Dσ→Dτ]，PCF 常数具有适当类型的自然解释，例如 cond:B⊥→N⊥→N⊥→N⊥ 被解释为：cond(b)(x)(y)=⎧⎪⎨⎪⎩x 如果 b=tty 如果 b=ff⊥如果 b=⊥，此外，运算符 Y(⋅) 被解释为适当类型的连续函数 fix(⋅)。这是 Scott 1969b) 和 Milner 1973 中考虑的解释。

变量的自由出现可能包含在 e 中（其类型由基础 B 给出），这使得术语的解释稍微复杂化，这取决于另一个参数，即一个环境 ρ，将 e 的每个自由变量 x:τ 映射到 Dτ 的一个元素（如果满足后一个条件，我们说 ρ 尊重 B）。当 e 是封闭的时，环境当然是无关紧要的。

那么，PCF 术语 e:σ（来自基础 B）的标准解释是一个元素[[e]]ρ∈Dσ，对于任何环境 ρ，使得 ρ 尊重 B，通过对术语进行结构归纳构建，将应用解释为函数应用，将 λ-抽象解释为（连续的）函数。更一般地，如果每个 Dσ 都是 cpo，并且 Dσ→τ 由连续函数 Dσ→Dτ 组成，则解释是连续的。

PCF 的模型是满足相同类型的术语之间期望的恒等式的解释。我们将省略 PCF 模型的一般特征的细节，读者可以参考 Ong（1995: sec. 3.2）和 Berry, Curien, & Lévy（1985: sec. 4），但只是指出一个例子，当需要这样的一般性时，必须考虑到的内容，为了允许解释，其中函数类型的元素严格来说不是函数，我们必须假定一个应用操作的族⋅στ:Dσ→τ×Dσ→Dτ，这样，如果 B⊢e1:σ→τ 和 B⊢e2;σ，[[e1e2]]ρ=[[e1]]ρ⋅στ[[e2]]ρ∈Dτ。如果对于所有元素 f,g∈Dσ→τ，f⊑g 当且仅当对于所有 x∈Dσ，f⋅x⊑g⋅x，则模型是序扩张的。如果对于所有元素 f,g∈Dσ→τ，f=g 当且仅当对于所有 x∈Dσ，f⋅x=g⋅x，则模型是外延的。模型中的元素 d∈Dσ 是可定义的，如果存在一个封闭术语 e:σ，使得 d=[[e]]。

### 2.4 关联操作语义和指称语义

讨论完全抽象的一般设置要求我们引入以下概念：

定义 2.11 (观察式前序和等价) 给定相同类型σ的 PCF 项 e 和 e′，如果对于每个带有类型σ的程序上下文 C[ ]和任何值 v，C[e]⇓v 意味着 C[e′]⇓v，则我们写作 e≾obse′（读作 e 在观察上比 e′定义更少）。我们称 e 和 e′在观察上等价，写作 e≃obse′，如果 e≾obse′且 e′≾obse。

观察等价是一种同余关系。PCF 术语的另一个同余关系是模型中表示的指示相等性：

定义 2.11（指示性偏序和等价）。给定相对于基础 B 的相同类型σ的 PCF 术语 e 和 e′，如果对于所有尊重 B 的环境ρ，[[e]]ρ⊑[[e′]]ρ，则我们写作 e≾dene′。如果 e≾dene′且 e′≾dene，则我们写作 e≃dene′。

命题 2.1（PCF 的计算充分性）。对于 PCF 的标准模型，以下两个陈述成立且是等价的：

1. 对于相同基本类型 e, e'的任意两个 PCF 项, e≃dene'意味着 e≃obse'；
2. 对于任意基本类型的封闭 PCF 项 e 和该类型的任意值 v，当且仅当 e⇓v 时，[[e]]=[[v]]；

现在我们可以证明在标准模型中对⊥的直观解释，其中基本类型被解释为平坦域：

推论 2.1. 对于任意闭合的基础类型 PCF 项 e，e⇑ 当且仅当 [[e]]=⊥。

在第 1.3 节中，我们已经基于同义词定义了一个非常一般的（等式的）完全抽象概念，即术语解释的相等性。在 PCF 的情况下，其预期模型在所有类型上都是部分有序的，我们可以定义一个更强的性质：

定义 2.12（非等式完全抽象）。PCF 的连续模型 ⟨{Dσ∣σ∈Types},[[⋅]]⋅⟩ 如果对于闭合项 e 和 e′，e≾obse′ 意味着 [[e]]⊑[[e′]]，则该模型是非等式完全抽象的。

定义性是完全抽象的关键，正如 Milner 和 Plotkin 的以下重要结果所示：

定理 2.2. PCF 的连续、秩序延拓模型是完全抽象的，当且仅当对于每种类型σ，Dσ是一个其有限元素可定义的域。

现在我们转向 PCF 标准模型对完全抽象性质的失败，正如 Plotkin 在他的经典研究中所示（Plotkin 1977）：

命题 2.2. PCF 的标准模型在按名调用评估方面不是完全抽象的。

证明基于这样的观察：我们可以构建类型为 (bool→bool→bool)→num 的 PCF 项，用于识别并行或函数。具体来说，考虑以下定义的“测试”项 Ti，其中 i=0,1：

λf:bool→bool→bool.if (f tt ⊥bool then

 如果 (f⊥bool tt) then

 如果 (f ff ff) then

⊥num

else i

else ⊥num

else ⊥num

然后，D[[T0]] por=0≠1=D[[T1]] por，其中 por 由表（4）定义，因此 T0≃denT1 不成立。然而，在 PCF 中没有程序上下文可以将 T0 和 T1 分开，因为 por 是不可定义的。这可以通过以组合方式表征程序的评估过程中其（子）项的评估过程之间引起的依赖关系来展示，正如 Plotkin 在 Activity Lemma（Plotkin 1977: Lemma 4.2）中所做的那样。作为一种替代方案，可以构建 PCF 的计算充分模型，其中函数具有弱顺序性属性（我们将在下面的第 2.5.1 节中讨论），因此函数 por 被排除在外：在这些线路上给出了完整的形式证明，详见 Gunter 1992（第 6.1 节）。

解决完全抽象问题的一种选择是扩展语言：Plotkin（1977）的一个显著结果表明，添加并行或运算就足够了：

命题 2.3. 标准模型对扩展了并行或运算的 PCF 语言是完全抽象的。

Milner (1977) has shown that there is a fully abstract model of PCF, by taking the set of closed terms at each type σ identifying observationally equivalent terms and by completing the resulting partially ordered set turning it into a cpo.

**Corollary 2.2.**  There is a unique continuous, order extensional, inequationally fully abstract model of PCF, up to isomorphism.

The full abstraction problem for PCF consists in finding a direct description of the class of domains and continuous functions that make up the fully abstract model. A solution to this problem would require a precise criterion for assessing the extent to which a proposed description of the model is satisfactory. If one accepts the “precise minimal condition that a semantic solution of the full abstraction problem should satisfy” given by Jung & Stoughton (1993), namely the possibility of describing in an effective way the domains Dσ of a finitary version of PCF (whose only ground type is bool), then the story of failed attempts to give such a direct description of the fully abstract model is justified, with hindsight, by a result of Loader (2001):

定理 2.3。有限 PCF 的观察等价性是不可判定的。

然而，仍然有可能找到一个直接描述意向完全抽象模型的方法（Abramsky 等人，2000 年：411）：

定义 2.13（意向完全抽象）。PCF 的一个模型在意向上是完全抽象的，如果每个 Dσ都是代数的，并且它的所有紧致元素都是可定义的。

追求完全抽象问题的这一发展线索将我们引向游戏语义，这将是下一节的主题。在此之前，我们概述了通过对高阶顺序计算进行语义特征化来减少模型的主要尝试。

### 2.5 迈向顺序语义

PCF 连续语义的完全抽象失败的原因在于存在需要并行计算的函数。我们现在描述了一些关于通过与其定义域的结构相关的性质来表征函数的顺序性的提议。这一直是 PCF 完全抽象问题解决方案的密集研究领域，其中一些见解非常自然地引向了第 3 节讨论的游戏模型。此外，对顺序性特征化尝试的以下总结也非常有趣地展示了偏序语言在编程概念的语义分析中的表现力。

直观地，一个序列函数是指其评估是按顺序进行的：这意味着可以安排其参数的评估，以便函数的评估以正确的值终止；如果其中一个参数的评估发散，整个评估也会发散。在这个过程的每个阶段，都有一个需要其值以获得有关函数输出更多信息的参数。为了在语义层面上解释计算的因果结构，我们需要丰富域结构，使得元素上的顺序反映计算事件的发生及其因果顺序。这提示了解释激发了第 2.3.1 节中 cpo 公理的抽象信息概念的另一种方式。现在，

> 信息与（事件的）发生有关：即这些事件发生的信息。例如，在 N⊥的情况下，⊥可能意味着没有事件发生，而整数 n 可能意味着整数 n 的事件发生（或者在另一种情况下是输入）。 (Plotkin 1978, Other Internet Resources)

#### 2.5.1 稳定性

一种对事件的解释将其视为对表达式评估中价值的产生。这种解释起源于 Berry（1976）开发的递归程序自底向上计算的背景，其中递归定义被转换为显示表达式结果依赖其子表达式结果的图。这一背景自然地暗示了事件 x 的产生者的概念，作为一组必须发生的事件，以便 x 发生。Berry（1976）用偏序的语言重新表述了这一观察：

定义 2.14（稳定性）。设 D1,…,Dn,D 为平坦 cpo，并且 f:D1×…×Dn→D 是单调的（因此连续的）。那么如果对于每个→x=⟨x1,…,xn⟩∈D1×…×Dn，存在一个唯一的最小元素 m(f,x)⊑→x，使得 f(m(f,→x))=f(→x)，则 f 是稳定的。

显然，并行或函数不是稳定的：值 por(⊥,tt)=tt=por(tt,⊥)没有最小的产生者。稳定函数的一个显著特性是它们允许构建 PCF 的新模型，其中 Dσ→τ是解释类型σ和τ的域上的稳定函数的集合，这些域的解释称为 dI-域（Berry 1978）的 Scott 域的细化。从我们的角度来看，这些定义的重要结果是以下的适当性结果（Gunter 1992：第 6 章）：

命题 2.4. 将 PCF 项解释为 dI-域的元素，其中 Dσ→τ 是从 Dσ 到 Dτ 的稳定函数的 dI-域，具有稳定次序，这是 PCF 的计算上充分的模型。

这一结果完成了在第 2.4 节末尾展示 PCF 连续模型完全抽象失败的论证，如果那里使用的顺序性非正式概念被形式化为稳定性。最近已经证明 PCF 的稳定模型对于 PCF 的扩展是完全抽象的（Paolini 2006）。

#### 2.5.2 顺序函数

首次对顺序性的定义由 Vuillemin（1974）和 Milner（1977）提出，它们指出，对于平坦域上的 n 元函数 f，如果存在依赖于⟨x1,…,xn⟩的 f 的顺序性指数 i，使得输出信息的每次增加都必须增加参数 i 处的信息。例如，函数 cond:B⊥×N⊥×N⊥→N⊥在这个意义上是顺序的任何输入元组。实际上，它在⟨⊥,m,n⟩处的顺序性指数为 1；在⟨tt,m,n⟩处的顺序性指数为 2；在⟨ff,m,n⟩处的顺序性指数为 3。然而，函数 por:B⊥×B⊥→B⊥在输入⟨⊥,⊥⟩处没有顺序性指数。

尽管所有的顺序函数（在平坦域上）都是稳定的，但顺序性严格强于稳定性。例如，从 B⊥×B⊥×B⊥到 B⊥的连续函数，定义为三个赋值⟨tt,ff,⊥⟩↦tt，⟨ff,⊥,tt⟩↦tt，⟨⊥,tt,ff⟩↦tt 的最小连续扩展，在参数⟨⊥,⊥,⊥⟩处没有顺序性指数，但是由于参数⟨tt,ff,⊥⟩，⟨ff,⊥,tt⟩，⟨⊥,tt,ff⟩两两不一致，所以是稳定的。

以下结果支持对顺序性进行语义特征化的探索。

命题 2.5。设 f：D1×⋯×Dn→D 是一个连续函数，其中 Di,D 要么是 N⊥，要么是 B⊥。那么 f 是顺序的当且仅当它在 PCF 中是可定义的。

#### 2.5.3 具体数据结构和顺序算法

如果为了充分描述顺序性所需的域是为了描述计算事件发生之间的因果关系，那么有必要通过考虑事件的位置来丰富我们的图景，从而概括了 Vuillemin 和 Milner 对参数位置的概念，这取决于函数的呈现方式。这导致了具体数据结构（cds）的概念（Kahn & Plotkin 1993），以及对一阶数据域的偏序性质的公理化。Kahn 和 Plotkin 得到了一个由他们的公理描述的域的表示定理，即具体域，这个定理是关于探索具体数据结构的状态的，这个状态包括在初始空状态下填充的过程中的任何已发生事件的集合，这类似于在一个抽象演绎系统中证明定理，其规则是使能。作为一个激励性的例子，想象一下一个链表，比如自然数的链表。初始单元格可以在任何时候用任何值 n1 填充。这个事件使得列表的第二个单元格能够被填充，然后（只有在这时）才能用任何值 n2 填充，以此类推，直到所有后续单元格。

Observe that the framework of concrete data structures gives the necessary notions to reconstruct a semantical version of sequentiality. Roughly, a monotonic function f from states of M to states of M′ is *sequential* (at state x) if, for any output cell c′, there is an input cell c that must be filled in any transition from x to y such that the transition from f(x) to f(y) fills c′ (if such a c′ does exist) (Curien 1986: Def. 2.4.5). The cell c is the *sequentiality index* for f at x for c′.

The category whose objects are the concrete data structures and whose morphisms are the sequential functions just defined is, however, not cartesian closed, not unexpectedly. This observation (for a simple proof, see Amadio & Curien 1998 (theorem 14.1.12)) prevents the use of this category as a model of PCF. However, it is possible to define for every two concrete data structures M,M′ a new one M→M′ whose states represent *sequential algorithms* and which is the exponential object of M and M′ in a cartesian closed category whose morphisms are sequential algorithms (Curien 1986: sec. 2.5). The generalizations of the model theory of PCF to categorical models allows us to obtain a model of PCF from this new category, even though its morphisms are not functions in the usual set-theoretic sense. It turns out that the sequential algorithm model is not extensional, because there are distinct PCF terms that denote the same continuous function yet represent distinct algorithms. As an example, consider the following two terms, that denote the same function but different algorithms:lror(x,y)=if x then (if y then tt else x) else (if y then tt else ff)rlor(x,y)=if y then (if x then tt else y) else (if x then tt else ff).By suitably introducing error values error1,error2 in the semantics, and enforcing an error-propagation property of the interpretations of terms (thus enlarging the observables of the language), the *functions* corresponding to the above terms can then be distinguished: clearly, for the interpreting functions lror and rlor we havelror(error1,error2)=error1rlor(error1,error2)=error2which also points to the possibility of proving full abstraction of this (non-standard) extensional model with respect to an extension of PCF with control operators (Cartwright, Curien, & Felleisen 1994).

Before leaving this overview of the quest for an extensional characterization of higher-order sequentiality, we should mention Bucciarelli & Ehrhard (1994) who introduced a refinement of the dI-domains of Berry supporting a notion of *strongly stable function* which allows them to build an extensional model of PCF, which is not fully abstract. The reason for the failure of full abstraction in this case depends on the fact that PCF-definable functionals satisfy extensionality properties that fail when functions are ordered by the stable order. This was also the reason that motivated the introduction of *bidomains* (Berry 1978), where the stable and extensional (= pointwise) orderings of functions coexist.

### 2.6 历史注解和进一步阅读

完全抽象问题已经在大量关于编程语言的指称性和操作性解释之间关系的工作中得到了预见。特别是，在 20 世纪 70 年代初在斯坦福进行的关于递归程序语义的开创性工作，由一群围绕着 Zohar Manna 的人们完成，包括 Jean Marie Cadiou、Robin Milner 和 Jean Vuillemin，同时也与 Gilles Kahn 进行了互动。

另一个相关传统在完全抽象问题的背景下也颇具影响力，即在（无类型）λ-演算的句法模型中对语义概念的表征，如连续性和顺序性的特征，基于 Böhm 树（Barendregt 1984），主要归功于 Lévy 和 Berry（有关沿着这一方向寻求 PCF 的完全抽象模型的描述，请参阅 Berry 等人 1985 年和 Curien 1992 年）。

对于 PCF 的完全抽象的基本论文是 Milner 1977; Plotkin 1977。它们可以一起阅读，以便形成对该语言语义分析的连贯图景。对完全抽象的独立方法来自俄罗斯逻辑学家弗拉基米尔·萨佐诺夫，他以 PCF 中的某一类顺序计算策略的可定义性来表征 PCF 中的可定义性 (Sazonov 1975, 1976)。然而，他的工作并没有直接影响完全抽象问题的大部分研究，直到最近才有人试图将萨佐诺夫的表征与游戏论方法联系起来 (Sazonov 2007)。

另一种完全不同的完全抽象方法利用特殊类型的逻辑关系来分离连续模型的商。在完全抽象问题的背景下，逻辑关系的第一次应用是 Mulmuley 1987，但通过蛮力获得了完全抽象模型的构造，因此并不符合完全抽象问题的要求。后来，Sieber (1992) 和 O’Hearn & Riecke (1995) 运用了这一技术的改进，以更好地洞察完全抽象模型的结构，通过特殊逻辑关系下的不变性来表征标准连续模型的可定义元素，剔除了非顺序函数。

关于 PCF 的完全抽象问题的详细介绍可以在 Gunter 1992 (chaps 5,6), Streicher 2006, Ong 1995, Stoughton 1988 和 Amadio & Curien 1998 (chaps 6, 12, 14) 中找到，大致按技术复杂性递增的顺序排列。关于 PCF 及其完全抽象问题的递归理论方面的重点在教科书中详细讨论 (Longley & Normann 2015: chaps 6, 7)；在 Longley 2001 (sec. 4) 中可以找到更简短的介绍。

## 3. 游戏语义

### 3.1 完全性

定理 2.2 突出了在 PCF 的完全抽象模型中有限元素的可定义性的基本作用，这一方面在 Curien 2007 中得到了强调。作为对基于游戏的形式主义的平稳过渡，并在某种程度上遵循主题的历史发展，我们暂停片刻，以研究在计算和建构性逻辑系统的证明理论之间的边界上出现的可定义性的另一个方面。一个显著的发现是，例如直觉主义命题演算的蕴涵片段的自然推导证明的结构完全由简单类型λ演算的术语描述，其中可证的命题形式σ→τ被读作代表其证明的术语的类型。这就是命题即类型对应，归功于 Curry, de Bruijn, Scott, Läuchli, Lawvere 和 Howard，它扩展到更丰富的形式系统（有关此对应的历史，请参见 Cardone & Hindley 2009：第 8.1.4 节）。

The existence of this correspondence makes it possible to speak of a *semantics of proofs*, that extends to constructive formal proofs the denotational interpretations of typed λ-calculi, and in this context it also makes sense to ask whether an element x of some Dσ in a model of a typed λ-calculus is the interpretation of some proof of formula σ. A further question asks whether *every* element of Dσ satisfying a suitably chosen property is the interpretation of a proof of formula σ. Suitable properties may be for example invariance under logical relations, suitably defined over each Dσ, like in several results of Plotkin, Statman and others summarized in Barendregt, Dekkers, & Statman 2013 (I.3, I.4). We can read the latter question as asking for a strong form of completeness for that system called *full completeness* (Abramsky & Jagadeesan 1994), whose definition can be better understood in a categorical semantics of systems of constructive logic. It is common to interpret formulas A of such systems as objects [[A]] of suitable categories M, and proofs p of sequents A⊢B as morphisms [[p]]:[[A]]⟶[[B]]. While ordinary completeness states that for every valid sequent A⊢B the set M([[A]],[[B]]) of morphisms is not empty, in the present setting full completeness expresses the stronger requirement that every morphism f:[[A]]⟶[[B]] in a semantical category M arises as the interpretation of some proof, i.e., f=[[p]] for some proof p of the sequent A⊢B. Full completeness results have been proved for several subsystems of linear logic Girard (1987), see Abramsky (2000) for a general framework. Furthermore, it has also suggested techniques for achieving the definition of models of PCF enjoying the strong definability property required by intensional full abstraction.

### 3.2 Interaction

In our description of the refinements to the continuous model of PCF in order to guarantee the definability of finite elements at each type, we have progressively come closer to an interactive explanation of computation. For example, the action of a sequential algorithm M→M′ (Curien 1986: sec. 3.4) exploits an external calling agent which triggers a cycle of requests and responses on input cells leading (possibly) to the emission of an output value. That interaction should be a central notion in the analysis of computation, especially in relation to full abstraction, is perhaps a natural outcome of the observational stance taken in the definition of operational equivalence. Our short account of game semantics starts precisely from an analysis of a general notion of *interaction* as a motivation to a first formalization of games which is however rich enough to provide a universe for the interpretation of a restricted set of types and terms. Later we shall add to this definition of game and strategies the features needed to express the constraints that allow strategies to characterize precisely higher-order, sequential computations, which is the aim set for denotational semantics by the full abstraction problem. The present account of the conceptual background of game semantics owes much to the work of Abramsky and Curien (Abramsky 1994, 1996, 1997; Curien 2003a).

与广泛研究的线性逻辑（Girard 1987）和并发进程理论密切相关的相互作用概念，是近年来从不同研究领域的贡献中得出的结果。正是在这些领域中，模块间相互作用的组合概念得以形成。我们在这里给出一个简单的例子，其中模块的组合采用“并行组合+隐藏”的形式，以便将其与 Hoare（1985）在并发进程语义中发展的这一思想的起源联系起来，并初步展示一个简化的游戏形式主义。

考虑一个带有四个标记为 ain、aout、rin、rout 的通道的模块 S。该模块旨在通过 ain 通道返回接收到的数字 n 的后继数值到 aout 通道，因此可以将其行为规定如下：

* S 在 rin 通道上接收到输入信号?in，然后
* 在通道 rout 上发出信号?out，并等待通道 ain 上的值 n，然后在接收到后，
* 在通道 aout 上发出值 n+1。
* emits a value n+1 on channel aout.

(This pattern of interaction is formally identical to the *handshake protocol* which is used in hardware design to synchronize components in order to avoid hazards caused by interference of signals.) This behavior can be mapped on the channels as follows:

![a rectangular box with the letter S inside, on the upper left a line ending in a white circle is labeled '?in', on the lower left a line ending in a black circle is labeled 'n1out', on the upper right a lined ending in a black circle is labeled '?out', and on the lower right a line ending in a white circle is labeled 'nin'](https://plato.stanford.edu/entries/games-abstraction/fig1.svg)

Figure 1: A module for the successor function.

where ∘ means input or, more generally, a *passive* involvement of the module in the corresponding action, whereas ∙ means output, or *active* involvement in the action. We can describe the behavior of S using *traces* (Hoare 1985), i.e., finite sequences of symbols from the infinite alphabet αS={?in,?out,nin,mout}:τS={ε,?in,?in?out,?in?outnin,?in?outninn+1out,…}If we consider another instance S′ of S with alphabet αS′={?′in,?′out,n′in,m′out} we can compose S and S′ by identifying (= connecting) channels rout,r′in, and ain,a′out, and the signals passing through them, as shown:?out,?′in⇝xn+1in,n+1′out⇝yThis represents the parallel composition of the modules, S∥S′:

![two rectangles, the one on the left containing 'S' and the one on the right 'Srime' The upper left of the left one has a line ending in a white circle labeled '?in', on the lower left a line ending in a black circle labeled 'n2out' The upper right of the right rectangle has a line ending in a black circle labeled '?rimeout' and the lower right a line labeled 'nrimein' The two rectangles are connected by two lines The upper with a black circle on the left and a white circle on the right labeled 'x' The lower with a white circle on the left and at black circle on the right labeled 'y'](https://plato.stanford.edu/entries/games-abstraction/fig2.svg)

 图 2

复合模块的行为由轨迹集{ε,?in,?inx,?inx?′out,?inx?′outn′in,?inx?′outn′iny,?inx?′outn′inyn+2out,…}描述。现在可以隐藏符号 x,y，代表最终系统的行为。

![two rectangles with dashed lines for sides, the one on the left containing 'S' and the one on the right 'Srime' The upper left of the left one has a line ending in a white circle labeled '?in', on the lower left a line ending in a black circle labeled 'n2out' The upper right of the right rectangle has a line ending in a black circle labeled '?rimeout' and the lower right a line labeled 'nrimein' The two rectangles are connected by two dashed lines The upper with a black circle on the left and a white circle on the right and not labeled The lower with a white circle on the left and at black circle on the right and not labeled A larger rectangle with solid sides encloses the two rectangles so that the left side of the left rectangle and the right side of the right rectangle are on the left and right sides of the enclosing rectangle](https://plato.stanford.edu/entries/games-abstraction/fig3.svg)

 图 3

其痕迹具有所需的形式{ε,?in,?in?′out,?in?′outn′in,?in?′outn′inn+2out,…}。这个例子包含了游戏语义的许多基本要素。有一个系统的概念，其行为是由来自其环境的传入请求触发的：在游戏形式主义中，这些是两人游戏中的倡导者和对手的角色。每个模块的行为被描述为其可能与其他代理进行交互的痕迹，并且这些行为可以通过一种特殊的角色转换进行组合，即当扮演系统的模块（在上述示例中，S 在通道 rout 上发出请求信号）在通道 r′in 上输入接收到此信号时，被要求在 S′方面作为环境行为。让我们看看这个例子如何被概括。

### 3.3 游戏和策略

我们只提供了理解游戏的基本构造和看到这些构造如何形成一个范畴所需的定义，这些构造遵循了 Abramsky 1997 和 Hyland 1997 的更多形式细节和证明。

#### 3.3.1 游戏

定义 3.1 游戏 G 由一组动作 MG 给定，标记 ℓG 将这些动作标记为支持者 (P) 的动作或对手 (O) 的动作。此外，还有一个位置集合 PG，它是一组动作序列的集合，其中：(1) 两名玩家轮流进行，以 O 开始；(2) 如果 s∈PG，则 s 中的每个前缀 s′ 也在 PG 中。

举个例子，考虑一个与布尔值数据类型相关联的游戏，Gbool。有三种可能的动作，

* 一个 O-move ?bool 和
* 两个 P-moves tt,ff

（即，ℓbool(?bool)=O，ℓbool(tt)=ℓbool(ff)=P）。这个游戏中的位置是?bool,?booltt,?boolff：将?bool 视为一个单元格（如具体数据结构中的单元格），可以由两个值 tt 和 ff 中的一个填充，或者作为对手的问题，由提出者以 tt 或 ff 作为答案。类似地，我们可以描述一个游戏 Gnum，其中有一个 O-move ?num 和 P-moves n∈N。

#### 3.3.2 策略及其组合

玩家在游戏 G 中交替移动，每次移动都到达 PG 中的一个合法位置。他们的行为最好被看作是描述一种策略，该策略确定了在轮到 P 移动时，P 对 O 的响应是什么。

定义 3.2. 在游戏 G 上，策略σ是一个前缀闭合的偶数长度位置集合，满足每当 sab、sac∈σ时，有 b=c。

例如，Gnum 上的策略是 ε 和所有序列 ?numn，分别对应于域 N⊥ 的元素 ⊥ 和 n。

我们希望将上述继承模块的行为视为计算自然数上函数的策略集 Gnum⊸Gnum 中的一个元素。如果我们只考虑图 1 中模块左侧或右侧发生的 S 交互序列，我们会发现它们描述了 Gnum 的位置，极性（主动/被动）发生了反转，取决于交互发生的位置：该模块最初是被动的，在接收到环境的请求后变为主动。这种反转由着色的互补标记 ¯¯¯¯¯¯λG 表示，将 G 中的对手的移动分配给拥护者，反之亦然，这对于定义游戏 G⊸H 是至关重要的：

定义 3.3. 对于任意一对游戏 G、H，游戏 G⊸H 具有移动 MG⊸H，即游戏 G 和 H 的不相交并 MG+MH，其中 λG⊸H(m)={¯¯¯¯¯¯λG(m)=，如果 m∈MG，λH(m)=，如果 m∈MH。PG⊸H 中的位置是任何交替移动序列 s（来自 MG⊸H），其对 G 和 H 的移动 s↾MG、s↾MH 的限制分别是 G 和 H 的位置。

解释 succ:num→num 的策略对应于上面作为指导示例使用的模块 S 的行为。用于组合两个后继模块实例的并行组合 + 隐藏方法现在可以被重新解释为策略的组合，这暗示了一个一般模式：

Gnum⊸GnumGnum⊸Gnum?inO?′inO?outP?′outPO⋮⋮⋮n′inOPn+1′outPn+1inOOn+2outP

定义 3.4. 对于 G⊸K 上的策略 σ on G⊸H 和 τ on H⊸K 的组合 τ∘σ 包括 MG+MK 的移动序列，通过将 MH 的移动从 MG+MH+MK 的移动序列中隐藏，使得 s↾G,H 在 PG⊸H 中并且 s↾H,K 在 PH⊸K 中。

在范畴论中，有一种策略值得特别命名，因为它是一个范畴中的恒同态，其对象为游戏，从 G 到 H 的态射是 G⊸H 上的策略。在 G⊸G 上定义的复制策略 id 被定义为一系列移动 s 的集合，使得 s 对 G 的左实例的限制与其对右实例的限制相符。

### 3.4 特殊类型的策略

刚刚介绍的游戏形式主义并不足以描述高类型的顺序计算，以实现可定义性。为此，需要在游戏上构建更丰富的结构，使其更接近于支持者和反对者之间进行问题和答案交换的对话游戏。这使得可以通过适当的方式通过将答案与相应问题进行匹配来制定对玩法的限制。我们接下来研究的这种精炼游戏概念的策略，基本上通过示例，将产生游戏之间更丰富的态射概念，从而使得可以进行计算性质的更精细区分，这是实现 PCF 的内涵完全抽象模型所需的，基本上遵循 Hyland & Ong (2000)的方法，同时也借鉴了 Abramsky & McCusker (1999)和 Curien (2006)的材料。

精炼游戏概念的走法将由提出者或反对者发出的问题或回答组成。因此，我们有四类走法，每一类都由一种（圆括号或方括号）表示：提出者的问题‘（’；反对者的回答‘）’；反对者的问题‘[’；以及提出者的回答‘]’。这种走法的标记包含了括号序列的通常良构标准：提出者和反对者之间的交替，反对者首先行动，以及每个玩家的回答都对应于伙伴的唯一问题。然而，这还不够：需要在问题和回答上进一步进行合理化结构，以规范（子）对话在高阶函数评估中的嵌套，从而允许表征良构策略。现在考虑策略(G11bool→G12bool→G1bool)→Gbool，在此策略中，使用 Gbool 的副本的标记进行非正式描述，如下所示：

* (1)Opponent asks question ? in Gbool;
* (2)Proponent asks question ?1 in G1bool, justified by ?, in order to know about the output of the input value f;
* (3.1)如果对手提出问题 ?11，辩方以 tt 回答 Gbool：计算首先检查 f 的第一个参数；
* (3.2)如果对手提出问题 ?12，辩方以 ff 回答 Gbool：计算首先检查 f 的第二个参数；

在这里，辩方在步骤（3.i）中回答了对手在步骤（1）中提出的问题，而不是对手在步骤（3.1）、（3.2）中提出的问题，这些问题仍然悬而未决。这违反了罗宾·甘迪在他未发表的有关高类型可计算性的作品中引入的对话“无悬挂问号”的条件（在由洛伦岑（1961）发起的直觉主义逻辑的游戏语义传统中是众所周知的）。这类策略解释了在 PCF 的完全抽象游戏模型中不存在的控制算子，但在基于顺序算法的模型中却存在（Curien 1986: sec. 3.2.7, 3.2.8）。在前述例子的变体中出现了不同的现象：

* (1)Opponent asks question ? in Gbool;
* (2)Proponent asks question ?1 in G1bool;
* (3.1)  if Opponent asks question ?11, Proponent answers tt in G11bool;
* (3.1.1) 如果对手在 G1bool 中回答 tt，那么申辩者在 Gbool 中回答 tt；
* (3.2) 如果对手在 G1bool 中回答 tt，那么申辩者在 Gbool 中回答 ff；

在这里，策略根据对手的内部行为细节来规定对其动作的响应。策略对申辩者在初始问题?1 和对手回答 tt 之间发生的事情不应产生影响。这就是无辜性的特性，它限制了策略对 P 的访问细节的数量。因此，无辜性的失败允许策略对存储现象进行建模。

这使我们有必要的术语来理解 Hyland & Ong 2000 (th. 7.1) 中证明的意向完全抽象定理的陈述，其中 PCF 的类型被解释为游戏，术语被解释为天真和良括号策略，另见 Abramsky et al. 2000 (th. 3.2), Curien 2006 (th. 5.1)：

定理 3.1. 对于每个 PCF 类型 σ=σ1→⋯→σn→κ，其中 κ=num 或 κ=bool，每个（紧凑的）天真和良括号策略对应于一个封闭术语的指称。

这结束了我们对游戏语义应用于 PCF 的完全抽象问题的快速概述，但打开了一个广泛的研究领域，根据上述对一般策略的限制（天真、良括号）的可能组合对编程学科进行分类。关于这一领域的一个入门图片（Abramsky 及其学生们的“语义方块”），我们留给读者思考，可以在 Abramsky & McCusker 1999 中找到。

### 3.5 历史注释和进一步阅读

作为语义框架的游戏具有悠久的传统，从古代逻辑开始。在这里，我们列出了与编程语言中的游戏语义相关的主要来源和进一步阅读。

用于处理 PCF 的完全抽象问题的游戏语义的使用起源于 Abramsky 等人的 2000 年和 Hyland & Ong 的 2000 年的工作。Hanno Nickau（1994）独立提出了一个类似于 Hyland 和 Ong 的游戏模型：他们的游戏有时被统称为“H2O 游戏”。

作为游戏语义学的背景，从直觉主义逻辑出发，我们首先有了 Lorenzen (1961) 对话游戏的早期研究，然后是线性逻辑 Lafont 和 Streicher (1991) 以及 Blass (1992)，以及 Coquand 对经典可证性的游戏理论分析 (Coquand 1995)。从组合游戏理论的分类学观点来看，Joyal (1977) 提供了一个描述，“根据 Abramsky & Jagadeesan (1994) 的说法，他是第一个将游戏和获胜策略作为一个范畴的人”。Abramsky & Jagadeesan 1994 中包含了对游戏在解释建构逻辑形式，尤其是线性逻辑方面的最初运用的可读历史描述。需要注意的是，逻辑中的游戏需要获胜策略来捕捉有效性，这是我们在本条目中根本没有涉及的问题。

Lamarche (1992) 和 Curien (1994) 首次注意到了与具体数据结构的联系，详见 Curien 2003b。Antonio Bucciarelli (1994) 解释了 Kleene 的单调函数与具体数据结构之间的联系：前者中对话的使用在 Hyland & Ong 2000 (sec. 1.4) 中有提及。

最后，在介绍 PCF 和其他语言的游戏语义学方面，我们建议参阅 Abramsky 1997；Abramsky & McCusker 1999。后者还包括了对游戏语义学在命令式语言，特别是理想化的 Algol 中的应用的描述。其他关于游戏语义学的优秀介绍包括 Hyland 1997 和 Curien 2006。Jürjens 2002 提供了一个广泛的描述，涉及到在编程语言语义学中使用游戏的许多指向 Lorenzen 游戏的内容，面向哲学读者。

<!--md-padding-ignore-begin-->
## Bibliography

* Abramsky, Samson, 1994, “Interaction Categories and Communicating Sequential Processes”, in A. William Roscoe (ed.), *A Classical Mind: Essays in Honour of C.A.R. Hoare*, New York: Prentice Hall International, pp. 1–16.
* –––, 1996, “Retracing Some Paths in Process Algebra”, in U. Montanari & V. Sassone (eds.), *CONCUR ’96: Concurrency Theory, 7th International Conference*, Springer-Verlag, pp. 1–17. [[Abramsky 1996 available online](https://arxiv.org/abs/1401.5113)]
* –––, 1997, “Semantics of Interaction: An Introduction to Game Semantics”, in P. Dybjer & A. Pitts (eds.), *Proceedings of the 1996 CLiCS Summer School, Isaac Newton Institute*, Cambridge University Press, pp. 1–31. [[Abramsky 1997 available online](https://arxiv.org/abs/1312.0121)]
* –––, 2000, “Axioms for Definability and Full Completeness”, in G.D. Plotkin, C. Stirling, & M. Tofte (eds.), *Proof, Language, and Interaction, Essays in Honour of Robin Milner*, The MIT Press, pp. 55–76. [[Abramsky 2000 available online](https://arxiv.org/abs/1401.4735)]
* Abramsky, Samson & Radha Jagadeesan, 1994, “Games and Full Completeness for Multiplicative Linear Logic”, *Journal of Symbolic Logic*, 59: 543–574. [[Abramsky and Jagadeesan 1994 available online](https://arxiv.org/abs/1401.5113)]
* Abramsky, Samson & Guy McCusker, 1999, “Game Semantics”, in H. Schwichtenberg & U. Berger (eds.), *Computational Logic: Proceedings of the 1997 Marktoberdorf Summer School*, Berlin: Springer-Verlag, pp. 1–56.
* Abramsky, Samson, Radha Jagadeesan, & Pasquale Malacaria, 2000, “Full Abstraction for PCF”, *Information and Computation*, 163(2): 409–470. [[Abramsky, Jagadeesan, & Malacaria 2000 available online](https://arxiv.org/abs/1311.6125)
* Amadio, Roberto M. & Pierre-Louis Curien, 1998, *Domains and Lambda-Calculi* (Cambridge Tracts in Theoretical Computer Science, 46), Cambridge: Cambridge University Press.
* Barendregt, Henk P., 1984, *The Lambda Calculus, Its Syntax and Semantics*, Amsterdam: North-Holland Co.
* Barendregt, Henk P., Wil Dekkers, & Richard Statman, 2013, *Lambda Calculus with Types* (Perspectives in Logic), Cambridge: Cambridge University Press/Association for Symbolic Logic.
* Berry, Gérard, 1976, “Bottom-Up Computation of Recursive Programs”, *RAIRO Informatique Théorique et Applications*, 10: 47–82. [[Berry 1976 available online](http://www.numdam.org/item?id=ITA_1976__10_1_47_0)]
* –––, 1978, “Stable Models of Typed λ-Calculi”, in Giorgio Ausiello & Corrado Böhm (eds.), *Automata, Languages and Programming, Fifth Colloquium* (Lecture Notes in Computer Science, 62), Berlin: Springer-Verlag, pp. 72–89. doi:10.1007/3-540-08860-1_7
* Berry, Gérard, Pierre-Louis Curien, & Jean-Jacques Lévy, 1985, “ Full Abstraction for Sequential Languages: the State of the Art”, Maurice Nivat & John C. Reynolds (eds.), *Algebraic Methods in Semantics*, Cambridge: Cambridge University Press, pp. 89–131. [[Berry, Curien, & Lévy 1985 available online](https://hal.inria.fr/inria-00076361)
* Blass, Andreas, 1992, “A Game Semantics for Linear Logic”, *Annals of Pure and Applied Logic*, 56(1–3): 183–220. doi:10.1016/0168-0072(92)90073-9
* Bucciarelli, Antonio, 1994, “Another Approach to Sequentiality: Kleene’s Unimonotone Functions”, in Stephen D. Brookes, Michael G. Main, Austin Melton, Michael W. Mislove, & David A. Schmidt (eds.), *Mathematical Foundations of Programming Semantics, Proceedings of the 9th International Conference, New Orleans, LA, USA, April 7–10, 1993,* (Lecture Notes in Computer Science, 802), Berlin: Springer, pp. 333–358. doi:10.1007/3-540-58027-1_17
* Bucciarelli, Antonio & Thomas Ehrhard, 1994, “Sequentiality in An Extensional Framework”, *Information and Computation*, 110(2): 265–296. doi:10.1006/inco.1994.1033
* Cardone, Felice & J. Roger Hindley, 2009, “History of Lambda-Calculus and Combinators in the 20th Century”, in Dov M. Gabbay & John Woods (eds.), *Handbook of the History of Logic. Volume 5. Logic from Russell to Church*, Amsterdam: Elsevier, pp. 723–817.
* Cartwright, Robert, Pierre-Louis Curien, & Matthias Felleisen, 1994, “Fully Abstract Semantics for Observably Sequential Languages”, *Information and Computation*, 111(2): 297–401. doi:10.1006/inco.1994.1047
* Coquand, Thierry, 1995, “A Semantics of Evidence for Classical Arithmetic”, *Journal of Symbolic Logic*, 60(1): 325–337. doi:10.2307/2275524
* Curien, Pierre-Louis, 1986, *Categorical Combinators, Sequential Algorithms and Functional Programming*, London: Pitman; New York: Wiley.
* –––, 1992, “Sequentiality and Full Abstraction”, in Fourman, Johnstone, & Pitts 1992: 66–94. doi:10.1017/CBO9780511525902.005
* –––, 1994, “On the Symmetry of Sequentiality”, in Stephen Brookes, Michael Main, Austin Melton, Michael Mislove, & David Schmidt (eds.), *Mathematical Foundations of Programming Semantics, 9th International Conference* (Lecture Notes in Computer Science, 802), Berlin: Springer-Verlag, pp. 29–71. doi:10.1007/3-540-58027-1_2
* –––, 2003a, “Symmetry and Interactivity in Programming”, *Bulletin of Symbolic Logic*, 9(2): 169–180. [[Curien 2003a available online](https://arxiv.org/abs/cs/0501034)]
* –––, 2003b, “Playful, Streamlike Computation”, in Guo-Qiang Zhang, J. Lawson, Ying Ming Liu, M.K. Luo (eds.), *Domain Theory, Logic and Computation, Proceedings of the 2nd International Symposium on Domain Theory, Sichuan, China, October 2001* (Semantic Structures in Computation, 3), Dordrecht: Springer Netherlands, pp. 1–24. doi:10.1007/978-94-017-1291-0_1 [[Curien 2003b available online](http://arxiv.org/abs/cs/0501033)]
* –––, 2007, “Definability and Full Abstraction”, *Electronic Notes in Theoretical Computer Science*, 172(1): 301–310. doi:10.1016/j.entcs.2007.02.011
* Fourman, M.P., P.T. Johnstone, & A.M. Pitts (eds.), 1992, *Applications of Categories in Computer Science: Proceedings of the London Mathematical Society Symposium, Durham 1991* (London Mathematical Society Lecture Note Series, 177), Cambridge: Cambridge University Press.
* Girard, Jean-Yves, 1987, “Linear logic”, *Theoretical Computer Science*, 50(1): 1–102. doi:10.1016/0304-3975(87)90045-4
* Gunter, Carl A., 1992, *Semantics of Programming Languages. Structures and Techniques*, Cambridge, MA: MIT Press.
* Hoare, C.A.R., 1985, *Communicating Sequential Processes*, Englewood Cliffs, NJ: Prentice-Hall.
* Hodges, Wilfrid, 2001, “Formal Features of Compositionality”, *Journal of Logic, Language and Information*, 10(1): 7–28. doi:10.1023/A:1026502210492
* Hyland, J. Martin E., 1997, “Game Semantics”, in P. Dybjer & A. Pitts (eds.), *Proceedings of the 1996 CLiCS Summer School, Isaac Newton Institute*, Cambridge: Cambridge University Press, pp. 131–184.
* Hyland, J.M.E. & C.-H.L. Ong, 2000, “On Full Abstraction for PCF: I., Models, Observables and the Full Abstraction Problem, II. Dialogue Games and Innocent Strategies, III. a Fully Abstract and Universal Game Model”, *Information and Computation*, 163(2): 285–408. doi:10.1006/inco.2000.2917
* Janssen, Theo M.V., 2001, “Frege, Contextuality and Compositionality”, *Journal of Logic, Language and Information*, 10(1): 115–136. doi:10.1023/A:1026542332224
* Joyal, André, 1977, “Remarques sur la Théorie des Jeux à Deux Personnes”, *Gazette des Sciences Mathématiques du Quebec*, 1(4): 46–52.
* Jung, Achim & Allen Stoughton, 1993, “Studying the Fully Abstract Model of PCF Within Its Continuous Function Model”, in Marc Bezem & Jjan Friso Groote (eds.), *Typed Lambda Calculi and Applications, Proceedings of the International Conference on Typed Lambda Calculi and Applications, TLCA ’93, Utrecht, the Netherlands, March 16–18, 1993,* (Lecture Notes on Computer Science, 664), Berlin: Springer-Verlag, pp. 230–244. doi:10.1007/BFb0037109
* Jürjens, Jan, 2002, “Games in the Semantics of Programming Languages—An Elementary Introduction”, *Synthese*, 133(1–2): 131–158. doi:10.1023/A:1020883810034
* Kahn, G. & G.D. Plotkin, 1993, “Concrete Domains”, *Theoretical Computer Science*, 121(1–2): 187–277. doi:10.1016/0304-3975(93)90090-G
* Kleene, Stephen Cole, 1952, *Introduction to Metamathematics*, New York: Van Nostrand.
* Lafont, Yves & Thomas Streicher, 1991, “Games Semantics for Linear Logic”, in *Proceedings Sixth Annual IEEE Symposium on Logic in Computer Science*, IEEE Computer Society, Los Alamitos, CA, pp. 43–50. doi:10.1109/LICS.1991.151629
* Loader, Ralph, 2001, “Finitary PCF is Not Decidable”, *Theoretical Computer Science*, 266(1–2): 341–364. doi:10.1016/S0304-3975(00)00194-8
* Longley, John, 2001, “Notions of Computability at Higher Types, I”, in René Cori, Alexander Razborov, Stevo Todorcevic, & Carol Wood (eds.), *Logic Colloquium 2000* (Lecture Notes in Logic, 19), Wellesley, MA: A.K. Peters, pp. 32–142. [[Longley 2001 available online](http://homepages.inf.ed.ac.uk/jrl/Research/notions1.pdf)]
* Longley, John & Dag Normann, 2015, *Higher-Order Computability*, Heidelberg: Springer.
* Lorenzen, P., 1961, “Ein Dialogisches Konstructivitätskriterium”, in *Infinitistic Methods, Proceedings of the Symposium on Foundations of Mathematics (1959 : Warsaw, Poland)*, New York: Pergamon Press, pp. 193–200.
* Milner, Robin, 1973, *Models for LCF*, Technical report, STAN-CS-73-332, Computer Science Department, Stanford University. [[Milner 1973 available online](http://i.stanford.edu/pub/cstr/reports/cs/tr/73/332/CS-TR-73-332.pdf)]
* –––, 1975, “Processes: a Mathematical Model of Computing Agents”, in H.E. Rose & J.C. Shepherdson (eds.), *Logic Colloquium ’73* (Studies in the Logic and the Foundations of Mathematics, 80), Amsterdam: North-Holland, pp. 157–174. doi:10.1016/S0049-237X(08)71948-7
* –––, 1977, “Fully Abstract Models of Typed λ-Calculi”, *Theoretical Computer Science*, 4: 1–22. doi:10.1016/0304-3975(77)90053-6
* –––, 1980, *A Calculus of Communicating Systems* (Lecture Notes in Computer Science, 92), Berlin, New York: Springer-Verlag. doi:10.1007/3-540-10235-3
* Mitchell, John C., 1993, “On Abstraction and the Expressive Power of Programming Languages”, *Science of Computer Programming*, 21(2): 141–163. doi:10.1016/0167-6423(93)90004-9
* Mulmuley, Ketan, 1987, *Full Abstraction and Semantic Equivalence*, Cambridge, MA: MIT Press.
* Nickau, Hanno, 1994, “Hereditarily Sequential Functionals”, in Anil Nerode & Yu V. Matiyasevich (eds.), *Logical Foundations of Computer Science: Proceedings of the Third International Symposium, LFCS 1994 St. Petersburg, Russia, July 11–14, 1994* (Lecture Notes in Computer Science, 813), Berlin: Springer-Verlag, pp. 253–264. doi:10.1007/3-540-58140-5_25
* Ong, C.-H.L., 1995, “Correspondence Between Operational and Denotational Semantics”, in Samson Abramsky, Dov M. Gabbay, & T.S.E. Maibaum (eds.), *Handbook of Logic in Computer Science*, vol. 4, Oxford: Oxford University Press, pp. 269–356.
* O’Hearn, Peter W. & Jon G. Riecke, 1995, “Kripke Logical Relations and PCF”, *Information and Computation*, 120(1): 107–116. doi:10.1006/inco.1995.1103
* Paolini, Luca, 2006, “A Stable Programming Language”, *Information and Computation*, 204(3): 339–375. doi:10.1016/j.ic.2005.11.002
* Plotkin, G.D., 1977, “LCF Considered as a Programming Language”, *Theoretical Computer Science*, 5(3): 223–257. doi:10.1016/0304-3975(77)90044-5
* Reynolds, John C., 1981, “The Essence of Algol”, in J.W. de Bakker & J.C. van Vliet (eds.), *Algorithmic Languages: Proceedings of the International Symposium on Algorithmic Languages*, Amsterdam: North Holland, pp. 345–372.
* Riecke, Jon G., 1993, “Fully Abstract Translations Between Functional Languages”, *Mathematical Structures in Computer Science*, 3(4): 387–415. doi:10.1017/S0960129500000293
* Sazonov, Vladimir Yu., 1975, “Sequentially and Parallelly Computable Functionals”, in Corrado Böhm (ed.), *λ-Calculus and Computer Science Theory, Proceedings of the Symposium Held in Rome, March 25–27, 1975* (Lecture Notes in Computer Science, 37), Berlin: Springer-Verlag, pp. 312–318.
* –––, 1976, “Degrees of Parallelism in Computations”, in A.W. Mazurkiewicz (ed.), *Mathematical Foundations of Computer Science 1976, Proceedings of the 5th Symposium, Gdansk, Poland, September 6–10, 1976,* (Lecture Notes in Computer Science, 45), New York: Springer, pp. 517–523.
* –––, 2007, “Inductive Definition and Domain Theoretic Properties of Fully Abstract Models for PCF and PCF+”, *Logical Methods in Computer Science*, 3(3): paper 7. doi:10.2168/LMCS-3(3:7)2007
* Scott, Dana S., 1969, “A Type-Theoretical Alternative to ISWIM, CUCH, OWHY”, Informally distributed. Revised and printed 1993, *Theoretical Computer Science*, 121: 411–440. doi:10.1016/0304-3975(93)90095-B
* –––, 1970, “Outline of a Mathematical Theory of Computation”, in *Proceedings of the Fourth Annual Princeton Conference on Information Sciences and Systems*, Dept. of Electrical Engineering, Princeton University, pp. 169–176. [[Scott 1970 available online](https://www.cs.ox.ac.uk/publications/publication3720-abstract.html)]
* –––, 1982, “Domains for Denotational Semantics”, in M. Nielsen & E. Schmidt (eds.), *Automata, Languages and Programming, Ninth International Colloquium* (Lecture Notes in Computer Science, 140), Berlin: Springer-Verlag, pp. 577–613. doi:10.1007/BFb0012801
* Scott, Dana S. & Christopher Strachey, 1971, “Toward a Mathematical Semantics for Computer Languages”, in Jerome Fox (ed.), *Proceedings of the Symposium on Computers and Automata Held in New York, 13–15 April 1971*, New York: Polytechnic Institute of Brooklyn Press, pp. 19–46. [[Scott and Strachey 1971 available online](https://www.cs.ox.ac.uk/publications/publication3723-abstract.html)]
* Sieber, Kurt, 1992, “Reasoning About Sequential Functions via Logical Relations”, in Fourman, Johnstone, & Pitts 1992: 258–269. doi:10.1017/CBO9780511525902.015
* Stoughton, Allen, 1988, *Fully Abstract Models of Programming Languages*, London: Pitman; New York: Wiley.
* Stoy, Joseph E., 1977, *Denotational Semantics: the Scott-Strachey Approach to Programming Language Theory*, Cambridge, MA: MIT Press.
* Strachey, Christopher, 1966, “Towards a Formal Semantics”, in Thomas B. Steel, Jr. (ed.), *Formal Language Description Languages for Computer Programming*, Amsterdam: North-Holland, pp. 198–220.
* –––, 1967, “Fundamental Concepts in Programming Languages”, International Summer School in Computer Programming, Copenhagen. Revised and reprinted 2000, *Higher-Order and Symbolic Computation*, 13(1–2): 11–49. doi:10.1023/A:1010000313106
* Streicher, Thomas, 2006, *Domain-Theoretic Foundations of Functional Programming*, Singapore: World Scientific.
* Szabó, Zoltán Gendler, 2013, “Compositionality”, in Edward N. Zalta (ed.), *The Stanford Encyclopedia of Philosophy* (Fall 2013.). URL = <[Compositionality (Stanford Encyclopedia of Philosophy/Fall 2013 Edition)](https://plato.stanford.edu/archives/fall2013/entries/compositionality/)>
* Turner, Raymond, 2016, “The Philosophy of Computer Science”, in Edward N. Zalta (ed.), *The Stanford Encyclopedia of Philosophy* (Spring 2016.). URL = <https://plato.stanford.edu/archives/spr2016/entries/computer-science/>
* Vuillemin, Jean, 1974, “Correct and Optimal Implementations of Recursion in a Simple Programming Language”, *Journal of Computer and System Science*, 9(3): 332–354. doi:10.1016/S0022-0000(74)80048-6
* White, Graham, 2004, “The Philosophy of Computer Languages”, in Luciano Floridi (ed.), *The Blackwell Guide to the Philosophy of Computing and Information*, Malden, MA: Blackwell, pp. 237–247. doi:10.1002/9780470757017.ch18

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=games-abstraction). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/games-abstraction/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=games-abstraction&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](http://philpapers.org/sep/games-abstraction/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

* Curien, Pierre-Louis, 2006, “[Notes on Game Semantics](https://pdfs.semanticscholar.org/2137/e2c21e577eac2bf2b4e22b43b8108636d2a4.pdf)”, course notes
* Lamarche, François, 1992, “[Sequentiality, Games and Linear Logic](http://pll.cpsc.ucalgary.ca/charity1/spoonerd/ftp/LinGamSeq.ps.Z)”, from a lecture to the CLiCS Symposium Aarhus University, March 23–27, 1992.
* Plotkin, Gordon, 1978, “The Category of Complete Partial Orders: a Tool for Making Meanings”, Lectures, summer school, Dipartimento di Informatica, Università di Pisa, Italy. Reprinted in [*Domains* (1983)](http://homepages.inf.ed.ac.uk/gdp/publications/Domains_a4.ps)
* Translation of Joyal, André (1977) “[Remarks on the Theory of Two-Player Games](https://bosker.files.wordpress.com/2010/12/joyal-games.pdf),” translated by Robin Houston, see the [posted note](https://bosker.wordpress.com/2009/11/16/the-category-of-conway-games/) about this translation.

## Related Entries

[compositionality](https://plato.stanford.edu/entries/compositionality/) | [computer science, philosophy of](https://plato.stanford.edu/entries/computer-science/) | [logic: and games](https://plato.stanford.edu/entries/logic-games/) | [logic: dialogical](https://plato.stanford.edu/entries/logic-dialogical/) | [logic: linear](https://plato.stanford.edu/entries/logic-linear/) | [type theory: intuitionistic](https://plato.stanford.edu/entries/type-theory-intuitionistic/)

### Acknowledgments

I am grateful to Ray Turner for advice and encouragement, and to Luca Paolini for comments on an early draft of this entry.

[Copyright © 2021](https://plato.stanford.edu/info.html#c) by  
[Felice Cardone](http://www.di.unito.it/~felice/) <[*felice.cardone@unito.it*](mailto:felice%2ecardone%40unito%2eit)>
