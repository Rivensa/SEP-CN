# 量子逻辑和概率论 quantum logic and probability theory (Alexander Wilce)

_首次发表于2002年2月4日；实质性修订于2021年8月10日。_

从数学上讲，量子力学可以被看作是建立在非经典命题逻辑和非经典概率计算之上的。具体而言，在量子力学中，形如“物理量 A 的值在范围 B 内”的概率命题由希尔伯特空间 H 上的投影算符表示。这些算符构成了一个非布尔（特别是非分配）的正交补格。量子力学态与此格上的概率测度（适当定义）完全对应。

我们对此应该如何理解呢？有人认为，量子力学的实证成功要求对逻辑本身进行革命。这种观点与对量子力学的现实解释的要求相关，即不以任何原始的测量概念为基础。相反，有一个长期以来将量子力学解释为操作性的传统，即将其准确地看作是一种测量理论。在这种后一种观点下，在不是所有测量都兼容的情况下，测量结果的“逻辑”不是布尔的并不令人意外。相反，令人困惑的是，为什么量子力学中的非布尔结构会具有特定的形式。围绕着从更基本和合理的公理推导出这种结构的独立动机的计划已经形成了大量的文献。

***

## 1. 量子力学作为概率计算

量子力学的形式装置简洁地归结为一种经典概率的推广，其中后者中的布尔代数事件的作用被“量子逻辑”在希尔伯特空间上的投影算子所取代，这是毫无争议的（尽管令人惊讶）\[1]。此外，量子力学的通常统计解释要求我们将这种广义量子概率理论视为字面上的意义，而不仅仅是其经典对应物的形式类比，而是作为一种真正的机会学说。在本节中，我将概述这种量子概率理论及其支持的量子逻辑\[2]。

\[有关希尔伯特空间的更多背景信息，请参阅量子力学条目。有关有序集和格的更多背景信息，请参阅补充文档：有序关系的基本理论。这些补充说明中解释的概念和结果将在接下来的内容中自由使用。]

### 1.1 量子概率简介

量子概率形式主义，由冯·诺依曼\[1932]发展而来，假设每个物理系统都与一个（可分离的）希尔伯特空间 H 相关联，其中的单位向量对应于系统的可能物理状态。每个“可观测”实值随机量由 H 上的自伴算子 A 表示，其谱是 A 的可能值的集合。如果 u 是 A 的定义域上的单位向量，表示一个状态，则在该状态下 A 表示的可观测量的期望值由内积⟨Au,u⟩给出。由算子 A 和 B 表示的可观测量是可比较的，当且仅当 A 和 B 可交换，即 AB = BA。（有关详细讨论，请参见量子力学条目。）

### 1.2 投影的“逻辑”

正如冯·诺依曼强调的那样，{0,1}值可观测量可以被视为对系统状态的命题编码，或者用他的措辞来说，是对系统状态的属性。不难证明，具有谱包含在两点集合{0,1}中的自伴算子 P 必须是一个投影；即 P2=P。这样的算子与 H 的闭子空间一一对应。实际上，如果 P 是一个投影，它的值域是闭的，任何闭子空间都是唯一投影的值域。如果 u 是任意单位向量，则⟨Pu,u⟩=||Pu||2 是由 u 表示的状态中相应可观测量的期望值。由于这个可观测量是{0,1}值的，我们可以将这个期望值解释为测量可观测量将产生“肯定”答案 1 的概率。特别地，当且仅当 Pu = u 时，肯定答案的概率为 1；也就是说，u 位于 P 的值域中。冯·诺依曼得出结论，

> …物理系统的属性与投影之间的关系，使得可以对其进行一种逻辑演算。然而，与普通逻辑概念相比，这个系统通过“同时可决定性”的概念进行扩展，这是量子力学的特征。(1932: 253)

让我们来研究这些投影的“逻辑演算”。按照集合包含关系排序，H 的闭子空间形成一个完备格，其中一组子空间的 meet（最大下界）是它们的交集，而它们的 join（最小上界）是它们并集的闭张。由于典型的闭子空间有无穷多个互补的闭子空间，这个格不是分配的；然而，它通过映射 M→M⊥={v∈H∣∀u∈M(⟨v,u⟩=0)}进行正交补。

M→M⊥={v∈H∣∀u∈M(⟨v,u⟩=0)}.

鉴于闭子空间和投影之间的一一对应关系，我们可以将集合 L(H)赋予完备正交补格的结构，定义 P≤Q，其中 ran(P)⊆ran(Q)且 P′=1−P（使得 ran(P′)=ran(P)⊥）。很明显，P≤Q 当且仅当 PQ=QP=P。更一般地，如果 PQ=QP，则 PQ=P∧Q，即 P 和 Q 在 L(H)中的 meet；在这种情况下，它们的 join 由 P∨Q=P+Q−PQ 给出。

1.1 引理： 设 P 和 Q 是 Hilbert 空间 H 上的投影算子。以下命题等价：

1. PQ=QP
2. 由 P、Q、P'和 Q'生成的 L(H)的子格是布尔格
3. P、Q 位于 L(H)的一个共同的布尔子正交格中

坚持可测量的可交换观测量，特别是投影，我们得出结论，H 的布尔子正交格的成员是同时可测试的。这表明我们可以将 meet、join 和正交补作为应用于可交换投影的经典逻辑解释。

### 1.3 概率测度和格里森定理

上述讨论激发了以下内容。称投影 P 和 Q 正交，并写作 P⊥Q 当且仅当 P≤Q'。注意，P⊥Q 当且仅当 PQ=QP=0。如果 P 和 Q 是正交投影，则它们的 join 就是它们的和；传统上，这被表示为 P⊕Q。我们用 1 表示 H 上的恒等映射。

1.2 定义： 在 L(H)上的（可数可加）概率测度是一个映射μ:L→ \[0,1]，满足μ(1)=1，并且对于任意一组两两正交的投影 Pi,i=1,2,…

μ(⊕iPi)=∑iμ(Pi)

这是我们可以在 L(H)上制造概率测度的一种方法。让 u 是 H 的单位向量，并设置μu(P)=⟨Pu,u⟩。这给出了在状态 u 中 P 的值为 1 的概率的通常量子力学配方。注意，我们也可以将μu 表示为μu(P)=Tr(PPu)，其中 Pu 是与单位向量 u 相关联的一维投影，即对于所有 x∈H，Pu(x)=⟨x,u⟩u。

更一般地，如果μi,i=1,2,…是 L(H)上的概率测度，那么任何“混合”或凸组合μ=∑itiμi 也是概率测度，其中 0≤ti≤1 且∑iti=1。给定任意序列 u1,u2,…，其中 ui 是单位向量，令μi=μui，Pi=Pui。形成算子

W=t1P1+t2P2+…,

一个看到的是

μ(P)=t1Tr(PP1)+t2Tr(PP2)+…=Tr(WP)

以这种方式可表示为一维投影的凸组合的算子称为密度算子。密度算子是一般（纯或“混合”）量子力学态的标准数学表示。我们刚刚看到，每个密度算子 W 都会产生一个可数可加的概率测度在 L(H)上。由于 A. Gleason \[1957]提出的以下引人注目的逆命题表明，L(H)上的概率测度理论与 H 上的（混合）量子力学态理论是相等的：

1.3 Gleason 定理： 设 H 的维度>2。那么在 L(H)上的每个可数可加概率测度都具有形式μ(P)=Tr(WP)，其中 W 是 H 上的密度算子。

Gleason 定理的一个重要推论是 L(H)不允许只有值为 0 和 1 的概率测度。要看到这一点，注意对于任何密度算子 W，映射 u→⟨Wu,u⟩在 H 的单位球面上是连续的。但由于后者是连通的，因此在其上没有连续函数只能取值 0 和 1。这个结果通常被认为排除了“隐藏变量”的可能性，这个问题在第 6 节中更详细地讨论。

### 1.4 量子力学的重建

从与物理系统相关的“实验命题”通过上述方式编码为投影的单一前提出发，可以重建量子力学的其余形式装置。当然，第一步是格里森定理，它告诉我们 L(H)上的概率测度对应密度算符。还需要恢复“可观测量”的表示，例如自伴算符，以及动力学（幺正演化）。前者可以借助谱定理恢复，后者可以借助 E. 维格纳关于群的射影表示的深刻定理来恢复。另请参阅 R. Wright \[1980]。关于这种重建的详细概述（其中涉及一些明显非平凡的数学）可以在 Varadarajan \[1985]的书中找到。要记住的是，一旦量子逻辑骨架 L(H)就位，量子力学的剩余统计和动力学装置基本上是固定的。从这个意义上说，量子力学——或者至少是它的数学框架——归结为量子逻辑及其伴随的概率论。

## 2. 量子逻辑的解释

将量子力学简化为基于 L(H)的概率论在数学上是令人信服的，但它告诉我们关于量子力学或者假设量子力学是一个正确和完整的物理理论时，关于世界的什么呢？换句话说，我们如何解释量子逻辑 L(H)？答案将取决于我们如何解读上述自由使用的短语，

* (\*)可观测量 A 的值位于范围 B 内。

( _)的一种可能解读是操作性的：“对可观测量 A 的测量将得到（或将得到，或已经得到）集合 B 中的一个值”。在这种观点下，投影表示关于测量可能结果的陈述。这与某些现实主义者不太相符，他们避免使用“测量”一词，更倾向于将(_ )理解为属性归属：

> 系统具有一定的范畴属性，这对应于可观测量 A 在任何测量之外独立地具有集合 B 中的一个值。

（然而，对于这个最后一句话，我们必须小心地理解：如果不小心地解释，它似乎假设了一个被格里森定理排除的量子力学的隐藏变量解释。我将在下面对此进行更多的讨论。）

### 2.1 现实主义量子逻辑

投影算符的解释作为表示物理系统属性的已经在冯·诺依曼的《基础》中明确提出。然而，在那里讨论的逻辑操作仅适用于可交换的投影，这些投影被认为与同时可判定的命题相对应。1936 年，伯克霍夫和冯·诺依曼进一步提出，将投影的格论 meet 和 join 解释为它们的合取和析取，无论它们是否可交换。立即，这个提议面临一个问题，即 L(H)格子不是分配的，这使得不可能给这些“量子”连接词一个真值功能解释。冯·诺依曼和伯克霍夫毫不气馁，他们建议，量子力学作为物理学框架的经验成功使命题逻辑的分配律的普遍有效性受到质疑。他们的措辞保持谨慎：

> 虽然逻辑学家通常认为否定的属性是最难经受批判分析的，但力学的研究指出分配律是逻辑代数中最薄弱的环节。（1936 年：837）

在 1960 年代和 1970 年代初，包括大卫·芬克尔斯坦和希拉里·普特南在内的许多作者更加积极地提出了这个论点，他们认为量子力学要求我们对逻辑本身的理解进行革命。根据普特南的说法，“逻辑和几何一样经验性。……我们生活在一个非经典逻辑的世界中”（\[1968] 1979：184）。

对于普特南来说，L(H)的元素代表一个对象独立于我们是否观察，具有或不具有的范畴属性。由于这种物理属性的图像得到了量子力学的实证成功的确认，我们必须接受这种观点：物理属性实际上是如何相互关联的方式并非布尔逻辑。对于普特南来说，逻辑非常是研究物理属性如何相互关联的学科，他得出结论：经典逻辑是错误的，分配律并非普遍有效。

在经典情况下，如果 S 是一个物理系统的状态集合，那么 S 的每个子集都对应于系统的一个范畴属性，反之亦然。在量子力学中，状态空间是希尔伯特空间的（投影）单位球 S=S(H)。然而，并非 S 的所有子集都对应于系统的量子力学属性。后者仅对应于特殊形式 S∩M 的子集，其中 M 是 H 的一个闭线性子空间。特别地，只有这种形式的子集被赋予概率。这给我们留下了两个选择。一种选择是将只有这些特殊属性视为“真实的”（或“物理的”，或“有意义的”），将更一般的 S 的子集视为根本没有真实的范畴属性。另一种选择是将“量子”属性视为系统的所有物理（或至少是形而上学上）合理但不一定可观测的属性的一个小子集。在后一种观点中，物理系统的所有属性在逻辑结构上完全是经典的，但我们拒绝为不可观测的属性分配概率。\[3]

这个第二立场，虽然与现实主义本身并不矛盾，但是它涉及到一个“观察”、“测量”、“测试”或类似概念的区别，而现实主义者在与基本物理理论相关的问题上往往不愿意涉及这种概念。当然，任何关于统计物理理论（如量子力学）的现实主义解释最终都必须解释一下测量是如何进行的。也就是说，它必须解释哪些“物体”和“探针”系统之间的物理相互作用被视为测量，并且这些相互作用如何导致探针系统演化为最终的“结果状态”，这些状态与理论预测的结果相对应，并具有相同的概率。这就是臭名昭著的测量问题。

实际上，普特南提出他的量子逻辑实在论版本作为对测量问题的（激进的）解决方案：根据普特南的观点，测量问题（以及实际上任何其他量子力学的“悖论”）都是由于对分配律的错误应用而产生的，一旦认识到这一点，问题就会消失。然而，这个提议被广泛认为是错误的。\[4]

如上所述，量子力学的现实主义解释在解释“可观测量 A 在集合 B 中具有一个值”这一短语时必须小心。最简单和最传统的建议通常被称为“本征态-本征值联系”（Fine \[1973]）-即()成立当且仅当对 A 的测量以确定性地（即，具有（量子力学的！）概率 1）得到 B 中的一个值。虽然这确实给出了()的现实主义解释，但它并没有解决测量问题。实际上，我们可以利用它来对该问题进行明确的阐述：即使在测量时 A 肯定会得到 B 中的一个值，除非量子态是被测量的可观测量 A 的本征态，否则系统不具备与 A 在集合 B 中具有特定值相对应的任何范畴属性。普特南似乎假设(\*)的现实主义解释应该是将 A 赋予 B 中的某个未知值，对于该值，量子力学给出了一个非平凡的概率。然而，试图同时为所有可观测量进行这样的赋值会违反格里森定理。\[6]

### 2.2 操作性量子逻辑

如果我们放下对“测量”作为物理理论中的原始术语的顾虑，并接受“可测试”和不可测试属性之间的原则性区别，那么L(H)不是布尔代数的事实是平常的，对逻辑本身没有任何暗示。从这个观点来看，量子力学是关于某些测量结果可能的统计分布的理论，它的非经典“逻辑”仅仅反映了不是所有可观测现象都能同时观测到的事实。因此，概率事件（或命题）的集合比在经典概率论中要少，相应地，可能的统计分布的集合受到的约束也较少。这个理论允许一些“非经典”的概率分布实际上在自然界中出现，这或许令人惊讶，但并不需要我们对逻辑或概率的理解进行任何深刻的转变。

然而，这几乎不是最后的结论。在接受了上述所有内容之后，仍然存在一个问题，即为什么测量结果的逻辑应该具有非常特殊的形式 L(H)，而不是更一般的形式\[7]。这个问题考虑了量子力学的形式结构可能是由少数合理假设以及观察到的现象中的某些明显规律唯一确定的想法。这种可能性已经在冯·诺伊曼的《基础》（以及他后来在连续几何学中的工作）中得到了考虑，但在乔治·麦基的工作中首次明确和系统化\[1957 年，1963 年]。麦基提出了一系列六个公理，构建了一个非常保守的广义概率论，为实验命题的“逻辑”提供了基础，或者用他的术语来说，是“问题”，它具有一个 sigma-正交模块化的偏序集结构（有关这些术语的定义，请参见第 4 节和补充文件《排序关系的基本理论》）。对于麦基来说，一个突出的问题是解释为什么这个偏序集应该同构于 L(H)：

> 几乎所有现代量子力学都隐含或明确地基于以下假设，我们将其陈述为一个公理：
>
> > 公理 VII：量子力学中所有问题的偏序集同构于可分的无限维希尔伯特空间的所有闭子空间的偏序集。
>
> 这个公理与公理 I 到公理 VI 的性质有所不同。这些公理都具有一定程度的物理自然性和合理性。公理 VII 似乎完全是临时性的。为什么我们要这样做？我们能够证明这样做的合理性吗？...理想情况下，我们希望有一个物理上合理的假设列表，从中可以推导出公理 VII。除此之外，我们希望有一个列表，可以推导出一组结构的可能性...其中除了一个之外，其他都可以通过适当计划的实验来证明与之不一致。\[Mackey 1963: 71–72]

自从 Mackey 的著作以来，已经出现了大量的技术文献，探讨了他公理框架的变体，以期提供缺失的假设。本文的其余部分将简要介绍该项目的当前状态。

## 3. 广义概率论

与其逐字重述 Mackey 的公理，我将在 D. J. Foulis 和 C. H. Randall 对广义概率论的一种方法的背景下解释它们，这种方法在众多更或多或少类似的方法中具有某些简单和灵活的优势\[8]。本节的参考文献有 Foulis，Greechie 和 Rüttimann \[1992]；Foulis，Piron 和 Randall \[1983]；Randall 和 Foulis \[1983]；还可以参考 Gudder \[1989]；Wilce \[2000b]和 Wilce \[2009]进行综述。

### 3.1 离散经典概率论

从经典概率论的简单表述开始回顾将会有所帮助。在其最简单的形式中，经典概率论处理的是一组（离散的）互斥结果，例如某种测量、实验等，以及可以在其上定义的各种概率权重——即，映射ω:E→\[0,1]，在 E 上总和为 1\[9]。

注意，所有概率权重集合Δ(E)是凸的，即对于任意的概率权重序列ω1,ω2,…和非负实数序列 t1,t2,…，其和为一，凸组合或“混合”t1ω1+t2ω2+…（在 E 上逐点进行）仍然是一个概率权重。该凸集的极端点正是与结果 x∈E 相关联的“点质量”δ(x)：

如果 x=y，则δ(x)(y)=1，否则为 0。

因此，Δ(E)是一个单纯形：每个点ω∈Δ(E)都可以唯一地表示为极端点的凸组合，即：

ω=∑ω(x)δ(x)

我们还需要回顾一下随机变量的概念。如果 E 是一个结果集，V 是一些“值”的集合（实数、指针读数或其他），那么一个取值于 V 的随机变量就是一个映射 f:E→V。启发式的（但只需要将其视为启发式的）是，通过“执行”由 E 表示的实验，并在获得结果 x∈E 后，将 f(x)记录为测量值来“测量”随机变量 f。请注意，如果 V 是一组实数，或者更一般地说，是向量空间的子集，我们可以通过以下方式定义状态ω∈Δ(E)中 f 的期望值：

E(f,ω)=∑x∈Ef(x)ω(x)。

### 3.2 测试空间

在离散经典概率论中，一个非常自然的推广方向是允许存在多个结果集，每个结果集代表一个不同的“实验”。为了形式化这个概念，让我们约定一个测试空间是一个非空集合 A，其中包含非空集合 E，F，...，每个集合都被解释为离散的结果集，就像在经典概率论中一样。集合 A 中的每个集合 E 被称为一个测试。所有属于 A 的测试的所有结果的集合 X=∪A 被称为 A 的结果空间。请注意，我们允许不同的测试重叠，即具有共同结果的测试。\[10]

如果 A 是一个具有结果空间 X 的测试空间，那么 A 上的状态是一个映射ω:X→ \[0,1]，满足对于每个测试 E∈A，∑x∈Eω(x)=1。因此，状态是对每个测试分配概率权重的一致性分配——一致性在于，当两个不同的测试共享一个共同结果时，状态分配给该结果的概率是相同的，无论它是作为一个测试的结果还是另一个测试的结果。（这可以被视为对 A 的结构中隐含的结果标识的规范要求：如果两个测试的结果在所有状态下不是等概率的，它们就不应该被认为是相同的。）A 上的所有状态的集合用Ω(A)表示。这是一个凸集，但与离散经典概率论的情况不同，它通常不是一个单纯形。

随机变量的概念可以推广到测试空间的设置中。让我们同意，在测试空间 A 上，一个简单（实值）的随机变量是一个映射 f：E→R，其中 E 是 A 中的一个测试。我们以明显的方式定义 f 在状态ω∈Ω(A)中的期望值，即作为将ω限制在 E 上得到的概率权重的 f 的期望值（当然，前提是这个期望值存在）。通过采取适当的极限（详见 Younce \[1987]），可以进一步定义更一般的随机变量类别。

在经典概率论中（尤其是在经典统计学中），人们通常关注的不是所有可能的概率权重集合，而是其中的一些指定子集（例如，属于给定分布族的子集）。因此，通过概率模型，我指的是由测试空间 A 和指定的状态集合Δ⊆Ω(A)组成的一对(A,Δ)。我将 A 称为测试空间，将Δ称为模型的状态空间。

现在，我将说明这个框架如何同时适应全面的经典概率论的测度论形式和量子概率论的希尔伯特空间形式。

### 3.3 Kolmogorovian Probability Theory

让 S 是一个集合，暂时理解为物理系统的状态空间，让Σ是 S 的一个σ-代数的子集。我们可以将 S 分成可数个两两不相交的Σ可测子集的每个分区 E 视为对系统状态进行“粗粒化”近似的想象完美实验。让 AΣ是由所有这样的分区组成的测试空间。注意，AΣ的结果集是非空Σ可测子集 S 的集合 X=Σ∖{∅}。显然，AΣ上的概率权重与Σ上的可数可加概率测度完全对应。

### 3.4 Quantum Probability Theory

让 H 表示一个复 Hilbert 空间，让 AH 表示 H 的（无序）正交归一基集合。因此，AH 的结果空间 X 将是 H 的单位球面。请注意，如果 u 是 H 的任意单位向量，E∈AH 是任意正交基，我们有

∑x∈E|⟨u,x⟩|2=||u||2=1

因此，H 的每个单位向量确定了 AH 上的概率权重。量子力学要求我们字面上理解这一点：任何“最大的”离散量子力学可观测量都由一个正交归一基来建模，而任何纯量子力学态都由一个单位向量以这种方式来表示。反之，每个正交归一基和每个单位向量都被理解为对应于这样的测量和态。

Gleason 的定理现在可以用来将 AH 上的状态与 H 上的密度算子进行对应：对于Ω(AH)中的每个状态ω，都存在一个唯一的密度算子 W，使得对于 H 上的每个单位向量 x，ω(x)=⟨Wx,x⟩=Tr(WPx)，其中 Px 是与 x 相关联的一维投影。反过来，当然，每个这样的密度算子都可以通过上述公式定义一个唯一的状态。我们还可以用算子理论来表示简单的实值随机变量。每个有界的简单随机变量 f 都对应一个有界的自伴算子 A=∑x∈Ef(x)Px。谱定理告诉我们，H 上的每个自伴算子都可以通过取适当的极限来获得这种形式的算子。

## 4. 与概率模型相关的逻辑

与任何概率模型(A,Δ)相关联的是几个部分有序集合，每个集合都有一定的“经验逻辑”与模型相关。在本节中，我将讨论两个：所谓的操作逻辑Π(A)和属性格 L(A,Δ)。在 A 上的相对良好的条件下，前者是一个正交代数。后者总是一个完备格，且在合理的进一步假设下是原子的。此外，存在一个自然的保序映射从Π到 L。这通常不是一个保序同构，但当它是时，我们得到一个完备的正交模块格，从而更接近 Hilbert 空间的投影格。

### 4.1 操作逻辑

如果 A 是一个测试空间，那么 A_事件_是 A 结果的一个集合，该集合包含在某个测试中。换句话说，A 事件只是对于 A 中的任何一个测试而言的经典意义上的事件。现在，如果 A 和 B 是两个 A 事件，我们说 A 和 B 是正交的，并且写作 A⊥B，如果它们是不相交的，并且它们的并集再次是一个事件。我们说两个正交事件是彼此的补集，如果它们的并集是一个测试。我们说事件 A 和 B 是透视的，并且写作 A∼B，如果它们有任何共同的补集。（注意，任何两个测试 E 和 F 都是透视的，因为它们都是对于空事件的补集。）

4.1 定义： 如果对于 A 的所有事件 A，B，C，A∼B⊥C，则称测试空间 A 为代数的。

虽然可能构造出一些合理的例子，这些测试空间不是代数的，但是在自然界中遇到的许多测试空间都具有这个性质。特别是，在前面的部分中描述的 Borel 和量子测试空间是代数的。更重要的是，作为一个公理，代数性相对温和，因为许多测试空间可以“完成”以成为代数的。特别是，如果每个结果在至少一个状态下的概率大于 1/2，则 A 包含在具有与 A 相同的结果和状态的代数测试空间 B 中（详见 Gudder \[1989]）。

可以证明\[11]，测试空间 A 是代数的当且仅当它满足条件。

对于事件 A，B 的任意事件 A，如果 A∼B，则 B 的任何补集都是 A 的补集。

由此可见，对于一个代数测试空间 A，透视关系∼是 A 事件集合上的等价关系。更重要的是，如果 A 是代数的，则∼是形成正交事件并集的部分二元运算的同余：换句话说，对于所有 A 事件 A，B 和 C，A∼B 和 B⊥C 意味着 A⊥C 和 A∪C∼B∪C。

让Π(A)是 A 事件的等价类集合，用 p(A)表示事件 A 的等价类；我们可以在Π(A)上定义一个自然的部分二元运算，对于正交事件 A 和 B，p(A)⊕p(B)=p(A∪B)。设 0 :=p(∅)和 1 :=p(E)，其中 E 是 A 的任意成员，我们得到一个部分代数结构(Π(A),⊕,0,1)，称为 A 的逻辑。这满足以下条件：

1. ⊕ 是可结合和可交换的：

* 如果定义了 a⊕(b⊕c)，那么也可以定义 (a⊕b)⊕c，并且两者相等
* 如果定义了 a⊕b，那么也可以定义 b⊕a，并且两者相等。

2. 0⊕a=a，对于每个 a∈L
3. 对于每个 a∈L，存在唯一的 a′∈L，使得 a⊕a′=1
4. 当且仅当 a=0 时，a⊕a 存在

我们现在可以定义：

4.2 定义： 满足上述条件（a）-（d）的结构（L，⊕，0，1）被称为正交代数。

因此，代数测试空间的逻辑是正交代数。可以证明，反过来，每个正交代数都可以作为代数测试空间 A 的逻辑Π(A)（Golfin \[1988]）。注意，非同构的测试空间可以具有同构的逻辑。

### 4.2 正交相容性

任何正交代数 L 都可以通过关系 a≤b（当且仅当 b=a⊕c，其中 c⊥a）进行部分排序。相对于这个排序，映射 a→a′是一个正交补运算，且 a⊥b 当且仅当 a≤b′。可以证明，a⊕b 始终是 a 和 b 的最小上界，但通常不是最小上确界。实际上，我们有以下结果（Foulis，Greechie 和 Ruttimann \[1992]，定理 2.12）：

4.3 引理： 对于一个正交代数（L,⊕,0,1），以下条件是等价的：

1. a⊕b=a∨b，对于所有的 a,b 在 L 中。
2. 如果存在 a⊕b，b⊕c 和 c⊕a，则存在 a⊕b⊕c
3. 正交偏序集(L,≤,′)是正交模块化的，即对于所有的 a,b∈L，如果 a≤b，则存在并且等于 b 的(b∧a′)∨a。

满足条件(b)的正交代数被称为正交一致。换句话说：正交代数是正交一致的，当且仅当 L 的有限两两可加子集是联合可加的。引理告诉我们，每个正交一致的正交代数也是一个正交模块化偏序集。反过来，如果对于所有满足 a≤b′的一对元素，定义了 a⊕b=a∨b，并且得到的部分二元运算是结合的，那么得到的结构(L,⊕,0,1)就是一个正交一致的正交代数，其上的规范排序与 L 上给定的排序一致。因此，正交模块化偏序集（Mackey 量子逻辑的框架）与正交一致的正交代数是等价的。

与正交相干性相关但更强的条件是任何两个兼容命题都应该是联合兼容的。这有时被称为规则性。大多数自然发生的正交模块化格和偏序集都是规则的。特别地，Harding（1996 年，1998 年）已经证明了任何代数、关系或拓扑结构的直积分解可以以一种自然的方式组织成一个规则的正交模块化偏序集。\[12]

Mackey 和他的许多继任者将正交相干性或规则性的某个版本作为公理。 （正交相干性以 Mackey 的公理 V 的无穷形式出现；规则性出现在 Kochen 和 Specker（1965 年）的部分布尔代数的定义中。）然而，很容易构造出具有完全直观甚至经典解释的简单模型测试空间，其逻辑不是正交相干的。从来没有给出任何完全令人信服的理由来认为正交相干性是所有合理物理模型的基本特征。此外，某些明显有很好动机的对测试空间进行的构造往往会破坏正交相干性（见第 7 节）。

### 4.3 属性的格

接受测量及其结果作为我们对物理系统描述的原始概念的决定，并不意味着我们必须放弃对这样一个系统的物理属性的讨论。事实上，在当前的形式主义中，这样的讨论很容易被容纳进来。\[13]在我们一直追求的方法中，一个物理系统由一个概率模型(A,Δ)表示，系统的状态被认为是Δ中的概率权重。在经典情况下，状态空间Δ的任何子集Γ都对应于系统的范畴属性。然而，在量子力学中，甚至在经典力学中，不是每个这样的属性都是可测试的（或者说是“物理的”）。在量子力学中，只有与希尔伯特空间的闭子空间对应的状态空间的子集是可测试的；在经典力学中，通常只考虑与可测试属性对应的 Borel 集合：不同之处在于后者中的可测试属性仍然形成一个布尔代数，而在前者中，它们不是。

一个表述这种区别的方式是如下的。状态集合Γ⊆Δ的支持是集合

S(Γ)={x∈X∣∃ω∈Γω(x)>0}

当属性Γ获得时可能发生的结果。如果两个属性具有相同的支持，从经验上来说它们是无法区分的：我们无法通过单次执行单个测试来区分它们。因此，我们可能希望将物理属性与物理上无法区分的经典属性类别或者它们的相关支持进行等同。然而，如果我们希望将物理属性表示为状态空间的子集（而不是子集的等价类），我们可以这样做。定义一个映射 F:℘(X)→℘(Δ)，其中 F(J)={ω∈Δ∣S(ω)⊆J}。映射Γ→F(S(Γ))是℘(Δ)上的一个闭包算子，而闭集的集合（即 F 的值域）是一个完备格，闭包算子对任意交集都封闭。显然，经典属性——Δ的子集——具有相同的支持当且仅当它们具有相同的闭包，因此我们可以将物理属性与状态空间的闭集等同起来：

4.4 定义： 模型(A,Δ)的属性格是所有形如 F(J)的Δ的子集构成的完备格 L=L(A,Δ)，其中 J 是任意一组结果的集合。

现在，我们有两种与概率模型(A,Δ)相关联的不同的“逻辑”：一个是实验命题的“逻辑”Π(A)，它是一个正交代数，但通常不是一个格，另一个是属性的“逻辑”L(A,Δ)，它是一个完备格，但很少以任何自然方式正交补（Randall 和 Foulis \[1983]）。这两者通过一个自然映射\[ ]：Π→L 相连，其中对于每个 p∈Π，Jp={x∈X∣p(x)≰p′}。也就是说，Jp 是与 p 一致的结果集，\[p]是使 p 在测试时被确认的最大（即最弱）物理属性。

映射 p→\[p]是保序的。对于上述考虑的经典和量子力学模型，实际上它是一个保序同构。在这种情况下，Π将从 L 继承一个完备格的结构，这将自动由引理 4.3 得到正交模块化。换句话说，在这种情况下，我们只有一个逻辑，它是一个完备的正交模块化格。虽然我们不可能期望\[ ]在每个可能的物理系统上都是一个保序同构——事实上，我们可以很容易地构造反例来证明这一点——但这个条件至少在意义上是相当透明的。

## 5. 皮龙定理

假设模型的逻辑和属性格子同构，因此命题/属性的逻辑是一个完备的正交模块格子。那么问题就出现了：这使我们与量子力学有多接近，即与希尔伯特空间的投影格子 L(H)有多接近？

答案是：在没有额外假设的情况下，接近程度并不高。格子 L(H)具有几个非常特殊的序理论特征。首先，它是原子的——每个元素都是最小非零元素（即一维子空间）的上确界。其次，它是不可约的——它不能表示为更简单的 OML 的非平凡直积。\[16]最后，最重要的是，它满足所谓的原子覆盖定律：如果 p∈L(H)是一个原子且 p≰q，则 p∨q 覆盖 q（L(H)的任何元素都不严格位于 p∨q 和 q 之间）。

这些特性还不足以完全捕捉 L(H)，但它们确实使我们进入了正确的范畴。设 V 是任意一个内积空间，其上的除环 D 是一个伴随除环。如果 V 的子空间 M 满足 M=M⊥⊥，其中 M⊥={v∈V∣∀m∈M(⟨v,m⟩=0)}，则称 M 为⊥-闭合的。按照集合包含关系，所有 V 的⊥-闭合子空间的集合 L(V)形成一个完备的原子格子，并由映射 M→M⊥进行正交补。Amemiya 和 Araki（1966）的一个定理表明，具有 L(V)为正交模块的实数、复数或四元数内积空间 V 必然是完备的。因此，如果内积空间 V 上的⊥-闭合子空间的格子 L(V)是正交模块的，则称 V 为广义希尔伯特空间。以下表示定理是由 C. Piron \[1964]提出的：

5.1 定理： 设 L 是一个满足原子覆盖定律的完备、原子、不可约正交模块格。如果 L 至少包含 4 个正交原子，则存在一个反演除环 D 和一个广义希尔伯特空间 V，使得 L 同构于 L(V)。

需要注意的是，广义希尔伯特空间已经在相当奇特的除环上构建出来。\[17] 因此，尽管 Piron 的定理使我们离正统量子力学越来越近，但并没有完全回到正统量子力学。

### 5.1 条件和覆盖定律

让我们称满足皮龙定理假设的完备正交模块格为皮龙格。我们能否给出任何一般理由来认为物理系统的逻辑/属性格（对于这些格来说是同构的）是一个皮龙格？或者，如果不能，我们至少能否将这些假设归因于一些明确的物理内容？如果我们假设每个纯态都代表一个“物理属性”，那么 L 的原子性就会成立。这是一个强假设，但其内容似乎足够清晰。通常认为，不可约性是一个良性假设，因为可约系统可以分解为其不可约部分，而对于每个部分，皮龙定理都适用。

覆盖定律提出了一个更微妙的问题。虽然可以说没有给出简单且完全令人信服的论证来假设其普遍有效性，但皮龙\[1964, 1976]和其他人（例如 Beltrametti 和 Cassinelli \[1981]和 Guz \[1978]）已经从关于测量结果如何保证从初始状态到最终状态的推理的假设中推导出覆盖定律。这里简要概述一下这个论证的过程。假设对于系统的初始状态 q，由逻辑/属性格 L 的一个原子表示，存在一种合理的方式来定义一个最终状态ϕp(q)（可以是另一个原子，也可以是 0），条件是命题 p 已经被确认。可以提出各种论证来表明，这种映射的唯一合理候选者是 Sasaki 投影ϕp:L→L，其定义为

ϕp(q)=(q∨p′)∧p.\[[18](https://plato.stanford.edu/entries/qt-quantlog/notes.html#note-18)]

可以证明，原子 OML 满足原子覆盖定律，只有当 Sasaki 投影再次将原子转化为原子，或者转化为 0 时。Cohen 和 Svetlichny \[1987]提出了另一个有趣的覆盖定律观点。

## 6. 经典表示

量子力学解释中的一个长期问题是，是否在原则上可以提供基本的经典解释来解释量子力学现象。量子逻辑在塑造（和澄清）这个讨论中起到了重要作用，特别是通过允许我们对经典解释的含义非常精确。

### 6.1 经典嵌入

假设我们给定一个统计模型（A，Δ）。构建（A，Δ）的“经典解释”的一个非常直接的方法是尝试将 A 嵌入到一个 Borel 测试空间 B 中，希望能够解释δ中的统计状态为后者上的“隐藏”的经典状态，即无离散的状态。因此，我们希望找到一个集合 S 和一个映射 X→℘(S)，将 A 的每个结果 x 映射到一个集合 x∗⊆S，使得对于每个测试 E∈A，{x∗∣x∈E}形成 S 的一个划分。如果可以做到这一点，那么 A 的每个结果 x 只是记录了系统处于某个特定状态集合中的事实，即 x _。如果我们让Σ成为由形如{x∗∣x∈X}的集合生成的σ-代数，我们发现每个概率测度μ在Σ上的拉回是 A 上的一个状态μ_，即μ∗(x)=μ(x\*)。只要δ中的每个状态都是这种形式，我们可以声称已经给出了模型（A，Δ）的完全经典解释。

S 的最小候选集是 A 上的所有无色散态。设置 x∗={s∈S∣s(x)=1}，我们得到了上述的经典解释，我将其称为 A 的经典图像。任何其他经典解释都可以通过这个解释来分解。然而，请注意，只有当有足够多的无色散态来区分 A 的不同结果时，映射 x→x\*才是单射的。如果 A 根本没有无色散态，那么它的经典图像就是空的。Gleason 定理告诉我们，这对于量子力学模型是成立的。因此，这种特定类型的经典解释对于量子力学模型是不可用的。

有时人们忽视了，即使一个测试空间 A 确实有一个分离的无色散态集合，也可能存在无法表示为这些态的混合态的统计态。经典图像对于这种态提供不了解释。作为这种情况的一个非常简单的例子，考虑测试空间：

A=\{{a,x,b},{b,y,c},{c,z,a\}}

和状态 ω(a)=ω(b)=ω(c)=12, ω(x)=ω(y)=ω(z)=0。很容易证明 ω 不能表示为 A 上 {0,1} 值状态的加权平均。有关此点的更多示例和讨论，请参见 Wright \[1980]。

### 6.2 上下文隐藏变量

前面讨论的结果是，大多数测试空间无法嵌入到任何经典测试空间中，即使存在这样的嵌入，它通常也无法解释模型的某些状态。然而，有一类非常重要的模型，总是可以有一个令人满意的经典解释。如果一个测试空间 A 的测试不重叠，即对于 A 中的 E、F，有 E∩F=∅ 且 E≠F，则称 A 是半经典的。

6.1 引理： 设 A 为半经典。那么 A 具有一组无色散态的分离集合，并且 A 上的每个极端态都是无色散的。

只要 A 是局部可数的（即 A 中没有不可数的测试 E），每个态都可以以适当的方式表示为极端态的凸组合（Wilce \[1992]）。因此，局部可数的半经典测试空间的每个态都有一个经典解释。

尽管 Borel 测试空间和量子测试空间都不是半经典的，但可以说在任何真实的实验室情况下，半经典性是规则。通常情况下，当我们在实验室笔记本上写下我们进行了某个测试并获得了某个结果时，我们总是有记录哪个测试被执行了。实际上，对于任何测试空间 A，我们总是可以通过形成 A 中测试的余积（不相交并集）来形成一个半经典测试空间。更正式地说：

6.2 定义： 对于 A 中的每个测试 E，令 E∼={(x,E)∣x∈E}。A 的半经典覆盖是测试空间。

A∼={E∼∣E∈A}.

我们可以将 A 视为通过删除记录来自 A∼的测试以获得给定结果。请注意，A 上的每个状态都可以通过ω∼(x,E)=ω(x)将其定义为 A∼上的状态ω∼。映射ω→ω∼显然是单射；因此，我们可以将 A 的状态空间与 A∼的状态空间的子集等同起来。请注意，通常会有许多 A∼上的状态不能下降到 A 上的状态。我们可能希望将这些状态视为“非物理状态”，因为它们不符合 A 的定义所依据的（可能是物理动机的）结果识别。

由于它是半经典的，A∼具有经典解释，根据引理 7.1。让我们来研究一下这个问题。S(A∼)的一个元素相当于一个映射 f:A∼→X，将每个测试 E∈A 分配给一个结果 f(E)∈E。这是一个（相当粗暴的）上下文（无离散）隐藏变量的例子。上面的构造告诉我们，这样的上下文隐藏变量通常会在统计模型中可用。有关相同效果的其他结果，请参见 Kochen 和 Specker \[1967]，Gudder \[1970]，Holevo \[1982]，以及在不同方向上的 Pitowsky \[1989]。\[19]

注意，A 上的简单随机变量与 A∼上的简单随机变量完全对应，并且这些又与可测空间 S(A∼)上的一些简单随机变量（按照通常的意义）对应。因此，我们有以下图示：模型(A,Δ)总是可以通过省略一些随机变量，并将无法通过剩余随机变量区分的结果进行标识，从而从经典模型中获得。

所有这些可能表明，我们的广义概率论与经典概率论没有显著的概念上的区别。另一方面，按照上述方法构建的模型具有明显的特别性。特别地，上述经典（或半经典）模型中的“物理”状态集并非由任何独立的物理原理确定，而仅仅是与原始的非半经典模型一致。另一个反对意见是，本节中引入的上下文隐藏变量具有严重的非局域性。现在广泛认识到，这种非局域性是量子（以及更一般的）概率模型中非经典性的主要来源。（更多信息，请参阅关于贝尔定理的条目。）

## 7. 复合系统

量子力学中最令人困惑的一些特征与描述复合物理系统的尝试有关。例如，测量问题和以贝尔定理为中心的非局域性结果都是在这种背景下出现的。有趣的是，耦合系统也对量子逻辑计划提出了挑战。本文将以两个结果的描述作为结束，这些结果表明量子逻辑模型的耦合倾向于将我们带离希尔伯特空间量子力学的领域。

### 7.1 Foulis-Randall 示例

在这方面，Foulis 和 Randall \[1981a]的一个特别引人注目的结果是观察到任何合理（且相当普遍）的正交代数张量积都无法保持正交相干性。考虑测试空间

A5=\{{a,x,b},{b,y,c},{c,z,d},{d,w,e},{e,v,a\}}

由五个三结果测试组成，以环形连接在一起。这个测试空间绝不是病态的；它既是正交一致的，又是代数的，其逻辑是正交模块格。此外，它接受一组无离散的分散态，因此具有经典解释。它还可以嵌入到任何三维希尔伯特空间 H 的测试空间 AH 中。现在考虑如何建模由两个分离的子系统组成的复合系统，每个子系统由 A5 建模。我们需要构建一个测试空间 B 和一个映射⊗:X×X→Y=∪B，满足至少以下条件；

1. 对于所有的结果 x、y、z∈X，如果 x⊥y，则 x⊗z⊥y⊗z 且 z⊗x⊥z⊗y，
2. 对于每一对状态α,β∈Ω(A5)，存在至少一个状态ω在 B 上，使得ω(x⊗y)=α(x)β(y)，对于所有的结果 x,y∈X。

Foulis 和 Randall 证明，不存在这样的嵌入，使得 B 是正交一致的。实际上，假设我们有一个测试空间 B 和满足条件(a)和(b)的嵌入。考虑结果集合

S={a⊗b,b⊗e,c⊗c,d⊗a,e⊗d}。

通过（a），这个集合是两两正交的。现在让α成为在 A5 上取值为 1/2（在结果 a、b、c、d 和 e 上），在 x、y、z、w 和 v 上取值为 0 的状态。根据条件（b），存在一个在 B 上的状态ω，使得

ω(s⊗t)=α(s)α(t)

对于 X 中的所有结果 s、t。但是这个状态在集合 S 上取常数值 1/4，因此，它在这个集合上的求和结果为 5/4>1。因此，S 不是一个事件，B 不是正交一致的。

在这里需要强调的是，测试空间 A5 具有完全无问题的量子力学解释，因为它可以被实现为 3 维希尔伯特空间 H 中的一组正交基。然而，在 Foulis-Randall 的例子中出现的状态ω不能以量子力学的方式产生（更不用说经典方式了）。（实际上，这可以从例子本身得出：规范映射 H×H→H⊗H 提供了一个满足上述条件（a）和（b）的映射。由于 L(H⊗H)是正交相干的，集合 S 对应于一组两两正交的投影，量子力学状态必须在其中求和不超过 1。）

### 7.2 Aerts 定理

另一个具有类似力量的结果是 Aerts \[1981]的结果。如果 L1 和 L2 是两个 Piron 格，Aerts 以一种相当自然的方式构造了一个表示两个分离系统的格 L，每个系统由给定格之一建模。这里的“分离”意味着较大系统 L 的每个纯态完全由两个组分系统 L1 和 L2 的状态确定。然后，Aerts 证明了当且仅当两个因子 L1 和 L2 中至少有一个是经典的时，L 仍然是一个 Piron 格。（这个结果最近被 Ischi \[2000]以多种方式加强。）

### 7.3 影响

这些不可行结果的要点是，对于复合系统的合理模型的直接构建破坏了常规条件（在 Foulis-Randall 结果中是正交相干性，在 Aerts 结果中是正交模性和覆盖定律），而这些条件在重建通常的量子力学形式主义中被广泛使用。这使得人们怀疑这些条件是否具有麦基计划最乐观版本所要求的普遍性。当然，这并不排除在特别简单的物理系统中这些条件可能被激发的可能性。

在某些领域中，最传统的量子逻辑模型缺乏合理的张量积被视为整个量子逻辑事业崩溃的先兆。这种反应是过早的。例如，Foulis-Randall 的例子表明，不能存在一个在所有正交模性格格或正交模性偏序集（即正交相干正交代数）和所有状态上都正常运作的一般张量积。但这并不排除存在适用于比正交模性偏序集更大的结构类别，或比正交模性格格更小的结构类别，或具有受限状态空间的正交模性格格或偏序集的令人满意的张量积的存在。量子力学本身就提供了一个例子。另外，正如 Foulis 和 Randall 在 Foulis 和 Randall \[1981a]中所示，单位正交代数的类别-即，在每个命题在某个状态下的概率为 1 的正交代数-确实支持满足他们的条件（a）和（b）的一个规范张量积。

在相反的方向上移动，可以将其视为满足物理理论的一个公理要求，即满足某种合理的耦合分离系统的设备。这表明将系统的类别，即物理理论，与个体系统区分开来，成为关注的焦点。实际上，在量子力学基础研究中，这正是当前工作的趋势。

一种特别有成果的方法是由 Abramsky 和 Coecke \[2009]提出的，它将物理理论表示为对称的幺半范畴，大致上是一个配备了自然对称和结合张量积的范畴。在一些进一步的约束条件下（例如，紧闭性），这些范畴展示了形式上与量子力学引人注目的相似性质。有趣的是，Harding \[2009]最近证明，在每个具有双积的强紧闭范畴中，每个对象都与一个正交可调节偏序 Proj(A)相关联，并且 Proj(A⊗B)在许多方面表现出 Proj(A)和 Proj(B)的合理张量积。从这个角度来看，FR 示例只是展示了一个病态的例子——A5 和状态α——不能在这样的理论中容纳，从而证明了幺半性要求对个体系统的结构施加了非平凡的限制。

近期对相互作用系统的强调是注意力从静态状态和可观测量的结构转向物理系统参与的过程的更一般的转变的一部分。这一趋势不仅在 Abramsky 和 Coecke 的范畴论公式化中明显（参见 Coecke \[2011]），而且在几个最近的量子理论公理重建中也明显（例如，Hardy \[2001，其他互联网资源]，Rau \[2009]，Dakic-Brukner \[2011]，Massanes 和 Mueller \[2011]，Chiribella-D’Ariano-Perinotti \[2011]，Wilce \[2018]），其中大多数涉及物理系统如何组合的假设。在另一个方向上，Baltag 和 Smets \[2005]在 Piron 风格的格论框架中引入了一个明确的动力学元素，得到了命题动力学逻辑的量子类比。

## 8. 效应代数

另一个近期的发展是在 1990 年代初引入了称为效应代数（Foulis 和 Bennett \[1994]）的结构，这些结构推广了第 4.1 节中讨论的正交代数。定义几乎相同，只是较弱的条件 a⊥a⇒a=0 被较弱的条件 a⊥1⇒a=0 所取代。像正交代数一样，效应代数通过设置 a≤b 当且仅当 b=a⊕c（其中 c⊥a）而被部分排序。\[20]

一个简单但重要的例子是函数 f:E→\[0,1]的效应代数\[0,1]E，其中 f⊥g 当且仅当 f+g≤1，并且在这种情况下，f⊕g=f+g。可以将\[0,1]E 的元素视为指示函数 f:E→{0,1}的“不清晰”或“模糊”版本。指示函数的集合{0,1}E 作为\[0,1]E 的子效应代数，是一个正交代数，当然与 E 的子集的布尔代数同构。\[21]

效应代数存在大量的例子。特别地，如果Ω是作为概率模型状态空间的凸集，则有界仿射（凸线性）函数 f:Ω→\[0,1]的集合 E(Ω)构成一个效应代数，其中 f⊕g=f+g 当且仅当 f+g≤1。这个想法是，函数 f∈E(Ω)表示一个“原则上”的测量结果，其在状态α∈Ω中的概率为 f(α)。如果 f0,...,fn∈E(Ω)且 f0+⋯+fn=1，则序列(f0,...,fn)表示一个“原则上”的可观测量，取值为 i=0,...,n，以概率 fi(α)取值 i。

## 8.1 量子效应和奈马克定理

在特殊情况下，即Ω=Ω(H)的情况下，可以证明Ω上的每个效应f都具有形式f(W)=Tr(Wa)，其中a是唯一的正自伴算子且a≤1。反之，这样的算子通过刚才给出的公式定义了一个效应。因此，可以将E(Ω(H))与所有正自伴算子0≤a≤1的集合E(H)等同起来，并将其称为效应。

任意量子效应和任意效应值可观测量作为实际实验结果的模型自然而然地产生。考虑一个具有希尔伯特空间 HA 的孤立量子系统 A，以及一个辅助系统 B，希尔伯特空间为 HB，维持在由密度算符 WBo 表示的参考态。如果 A 处于由密度算符 WA 在 HA 上表示的状态，则联合系统的状态由 WA⊗WBo 表示。如果我们对 AB 进行一个由投影算符 PAB 在 HAB=HA⊗HB 上表示的是非测量，则获得正结果的概率为 Tr(PAB(WA⊗WBo))。这定义了 WA 的有界凸线性函数，因此，存在一个唯一的效应 a，使得 Tr((WA⊗WBo)PAB)=Tr(WAa)。这个效应 a 被称为 PAB 在 HA 上的压缩。换句话说，我们可以理解 a 表示在将 B 保持在状态 WBo 的情况下，对联合系统 AB 进行 PAB 的测量的结果，然后“忘记”辅助系统 B。很容易证明，A 上的每个效应都可以通过适当的希尔伯特空间 HB 上的 HA⊗HB 的投影以这种方式产生。更一般地，一个被称为奈马克定理的算子理论中的经典结果断言，A 上的任何效应值可观测量 a1,...,an 都可以通过适当的量子系统 B 上的 AB 的普通投影值可观测量 P1,...,Pn 的压缩来产生。因此，A 上的所有效应，实际上是所有效应值可观测量都是物理可实现的。鉴于此，很难理解为什么效应代数在“量子逻辑”的地位上应该比正交模块化偏序集要低。

## 8.2 顺序效应代数

一个自然的问题是是否可以刻画那些特殊形式为 E(H)的效应代数。效应的一种自然产生方式是在顺序测量的背景下。如果 P 是一个投影，那么在对应于密度算符 W 的状态下对 P 进行测量会使系统处于对应于密度算符的状态

Wp:=PWPTr(WP).

在这种状态下，对 q 的随后测量将以概率 Tr(WPQ)=Tr(QPWPQ)Tr(WP)=Tr(WPQP)Tr(WP)得到正结果。除非 P 和 Q 对易，否则算子 PQP 不是一个投影，但它总是一个效果。如果我们用 Pr(a|W)表示任意效果 a 的 Tr(Wa)，那么上述可以被重写为

Pr(Q|WP)Pr(P|W) = Pr(PQP|W).

因此，PQP 代表了按顺序测量 P 和 Q（按照这个顺序）的“（是，是）”结果。

更一般地，两个效应的顺序乘积 a⊙b:=√ab√a 是另一个效应，表示按顺序测量先 a 再 b 的结果（并假设状态更新为 W↦(Tr(Wa))−1√aW√a 在测量 a 之后）。抽象出这个例子，S. Gudder 和 R. J. Greechie（\[2002]）定义了一个顺序效应代数为一个效应代数（L,⊕,0,1），配备了一个二元运算⊙:L×L→L，满足以下条件对于所有的 a,b,c∈L，其中 a|b 表示 a⊙b=b⊙a：

* 如果 b⊥c，则 a∘b⊥a∘c 和 a∘(b⊕c)=(a∘b)⊕(a∘c)
* 1∘a=a
* 如果 a∘b=0，则 b∘a=0
* 如果 a|b，则 a|b′，且 a∘(b∘c)=(a∘b)∘c
* 如果 a|b 和 a|c，则(i) a|b∘c，并且(ii)如果 b⊥c，则 c|a⊕b

J. van de Wetering（\[2019]）的一个显著最新结果表明，任何有限维次序单位空间，其次序区间\[0,u]在第一个变量中连续的二元运算下是 SEA，自然地成为一个欧几里德（等价地，形式实）约旦代数。\[22]

## Bibliography

* Abramsky, Samson and Bob Coecke, 2009, “Categorical Quantum Mechanics”, in Engesser, Gabbay, and Lehmann 2009: 261–323. doi:10.1016/B978-0-444-52869-8.50010-4
* Aerts, Diederik, 1981, _The One and the Many: Towards a Unification of the Quantum and Classical Description of One and Many Physical Entities_, Ph.D. Dissertation, Free University of Brussels.
* Amemiya, Ichiro and Huzihiro Aaraki, 1966, “A Remark on Piron’s Paper”, _Publications of the Research Institute for Mathematical Sciences_ (Series A), 2(3): 423–427. doi:10.2977/prims/1195195769
* Baez, John, 2006, “Quantum Quandaries: a Category-Theoretic Perspective”, in Steven French, Dean Rickles, and Juha Saatsi (eds), _Structural Foundations of Quantum Gravity_, Oxford: Oxford University Press, 240-265. doi:10.1093/acprof:oso/9780199269693.003.0008.
* Bacciagaluppi, Guido, 2009, “Is Logic Empirical?” in Engesser, Gabbay, and Lehmann 2009: 49–78. doi:10.1016/B978-0-444-52869-8.50006-2
* Baltag, A. and S. Smets, 2005, “Complete Axiomatizations for Quantum Actions”, _International Journal of Theoretical Physics_, 44(12): 2267–2282. doi:10.1007/s10773-005-8022-2
* Beltrametti, Enrico G. and Gianni Cassinelli, 1981, _The Logic of Quantum Mechanics_ (Encyclopedia of Mathematics and its Applications, Volume 15), Reading, MA: Addison-Wesley.
* Birkhoff, Garrett, 1967, _Lattice Theory_, Providence: American Mathematical Society.
* Birkhoff, Garrett and John von Neumann, 1936, “The Logic of Quantum Mechanics”, _Annals of Mathematics_, 37(4): 823–843. doi:10.2307/1968621
* Chiribella, Giulio, Giacomo Mauro D’Ariano, and Paolo Perinotti, 2011, “Informational Derivation of Quantum Theory”, _Physical Review A_, 84(1): 012311. doi:10.1103/PhysRevA.84.012311
* Clifton, Rob and Adrian Kent, 2000, “Simulating Quantum Mechanics by Non-Contextual Hidden Variables”, _Proceedings of the Royal Society A_, 456: 2101–2114. doi:10.1098/rspa.2000.0604
* Coecke, Bob, 2011, “A Universe of Processes and Some of Its Guises”, in Hans Halvorson (ed.), _Deep Beauty: Understanding the Quantum World Through Mathematical Innovation_, Cambridge: Cambridge University Press, pp. 129–186.
* Cohen, David W. and George Svetlichny, 1987, “Minimal Supports in Quantum Logics”, _International Journal of Theoretical Physics_, 26(5): 435–450. doi:10.1007/BF00668776
* Cooke, Roger M. and J. Hilgevoord, 1981, “A New Approach to Equivalence in Quantum Logic”, in Enrico G. Beltrammetti and Bas C. van Fraassen (eds.) _Current Issues in Quantum Logic_, New York: Plenum, pp. 101–113. doi:10.1007/978-1-4613-3228-2\_7
* Dakic, Borivoje, and Caslav Brukner, 2011, “Quantum Theory and Beyond: Is Entanglement Special?”, in Hans Halvorson (ed.), _Deep Beauty: Understanding the Quantum World Through Mathematical Innovation_, Cambridge: Cambridge University Press, pp. 129–186. doi:10.1017/CBO9780511976971.011
* Davey, B.A. and H.A. Priestley, 1990, _Introduction to Lattices and Order_, Cambridge: Cambridge University Press.
* Engesser, Kurt, Dov M. Gabbay, and Daniel Lehmann (eds), 2009, _Handbook of Quantum Logic and Quantum Structures_, Amsterdam: North-Holland.
* Fine, Arthur, 1973, “Probability and the Interpretation of Quantum Mechanics”, _British Journal for the Philosophy of Science_, 24(1): 1–37. doi:10.1093/bjps/24.1.1
* Foulis, D. J., 2000, “MV and Heyting effect algebras”, _Foundations of Physics_, 30: 1687–1706.
* Foulis, D. J., and M. K. Bennett, 1994, “Effect algebras and unsharp quantum logics”, _Foundations of Physics_, 24: 1331–1352. doi:10.1007/BF02283036
* Foulis, D.J., R. Greechie, and G.T. Rüttimann, 1992, “Filters and Supports in Orthoalgebras”, _International Journal of Theoretical Physics_, 31(5): 789–807. doi:10.1007/BF00678545
* Foulis, D.J., C. Piron, and C.H. Randall, 1983, “Realism, Operationalism and Quantum Mechanics”, _Foundations of Physics_, 13(8): 813–841. doi:10.1007/BF01906271
* Foulis, D.J. and C.H. Randall, 1981a, “Empirical Logic and Tensor Products”, in Holger Neumann (ed), _Interpretations and Foundations of Quantum Mechanics: Proceedings of a Conference Hold \[sic] in Marburg, 28–30 May 1979_ (Grundlagen der exakten Naturwissenschaften, volume 5), Mannheim: Wissenchaftsverlag, pp. 9–20.
* –––, 1981b, “What Are Quantum Logics and What Ought They to Be?”, in Enrico G. Beltrametti and Bas C. van Fraassen (eds), _Current Issues in Quantum Logic_, New York: Plenum, pp. 35–52. doi:10.1007/978-1-4613-3228-2\_3
* –––, 1984, “Stochastic Entities” in P. Mittelstaedt and E. Stachow (eds.), _Recent Developments in Quantum Logic_, Mannheim: B.I. Wissenschaft.
* Giuntini, Roberto, and Hans Greuling, 1989, “Toward a formal language for unsharp properties”, _Foundations of Physics_, 20: 931–395.
* Gleason, Andrew M., 1957, “Measures on the Closed Subspaces of a Hilbert Space”, _Journal of Mathematics and Mechanics_, 6(6): 885–893.
* Grätzer, George, 1998, _General Lattice Theory_, Basel: Birkhäuser Verlag (2nd edition).
* Golfin, Andrew S., Jr., 1988, _Representations of Complete Lattices_, Ph. D. Dissertation, University of Massachusetts, Amherst.
* Gudder, Stanley P., 1970, “On Hidden-Variable Theories”, _Journal of Mathematical Physics_, 11(2): 431–436. doi:10.1063/1.1665156
* –––, 1989, _Quantum Probability Theory_, San Diego: Academic Press.
* Gudder, Stan, and Richard Greechie, 2002, “Sequential products on effect algebras”, _Reports on Mathematical Physics_, 49(1): 87–111. doi:10.1016/S0034-4877(02)80007-6
* Guz, Wawrzyniec, 1978, “Filter Theory and Covering Law”, _Annales de l’Institut Henri Poincaré. Section A, Physique Théorique_, 29(4): 357–378. \[[Guz 1978 available online](http://www.numdam.org/item?id=AIHPA\_1978\_\_29\_4\_357\_0)]
* Harding, John, 1996, “Decompositions in Quantum Logic”, _Transactions of the American Mathematical Society_, 348(5): 1839–1862. doi:10.1090/S0002-9947-96-01548-6
* –––, 1998, “Regularity in Quantum Logic”, _International Journal of Theoretical Physics_, 37(4): 1173–1212. doi:10.1023/A:1026665818335
* –––, 2009, “A Link Between Quantum Logic and Categorical Quantum Mechanics”, _International Journal of Theoretical Physics_, 48(3): 769–802. doi:10.1007/s10773-008-9853-4
* Holevo, Alexander S., 1982, _Probabilistic and Statistical Aspects of Quantum Theory_, Amsterdam: North Holland.
* Holland, Samuel S. Jr., 1995, “Quantum mechanics in Hilbert space: A result of M.P. Soler”, _Bulletin of the American Mathematical Society_, 32(2): 205–232. doi:10.1090/S0273-0979-1995-00593-8
* Ischi, Boris, 2000, “Endomorphisms of the Separated Product of Lattices”, _International Journal of Theoretical Physics_, 39(11): 2559–2581. doi:10.1023/A:1026405608135
* Jauch, J.M. and C. Piron, 1969, “On the Structure of Quantal Propositional Systems”, _Helvetica Physica Acta_, 42(6): 842–848. doi:10.5169/seals-114098
* Kalmbach, Gudrun, 1983, _Orthomodular Lattices_, London: Academic Press.
* Kläy, Matthias P., 1988, “Einstein-Podolsky-Rosen Experiments: The Structure of the Sample Space I, IIç”, _Foundations of Physics Letters_, 1(3): 205–244. doi:10.1007/BF00690066
* Kochen, Simon and E.P. Specker, 1965, “Logical structures arising in quantum theory”, _Symposium on the Theory of Models: Proceedings of the 1963 International Symposium \[on the Theory of Models, Held] at Berkeley, \[from June 25 to July 11 1963]_, J.W. Addison, Leon Henkin, and Alfred Tarski (eds), Amsterdam: North-Holland, pp. 177–189.
* –––, 1967, “The Problem of Hidden Variables in Quantum Mechanics” _Journal of Mathematics and Mechanics_, 17: 59–87.
* Kôpka, František, and Ferdinand Chovanec, 1994, “D-posets”, _Mathematica Slovaca_, 44: 21–34.
* Ludwig, Günther, 1983, _Foundations of Quantum Mechanics I_, New York: Springer-Verlag.
* Mackey, George W., 1957, “Quantum Mechanics and Hilbert Space”, _The American Mathematical Monthly_, 64(8): 45–57. doi:10.2307/2308516
* –––, 1963, _The Mathematical Foundations of Quantum Mechanics: A Lecture-note Volume_, New York: W.A. Benjamin.
* Maudlin, Tim, 2005, “The Tale of Quantum Logic”, in Yemima Ben-Menahem (ed.), _Hilary Putnam_, Cambridge: Cambridge University Press, pp. 156–187. doi:10.1017/CBO9780511614187.006
* Massanes, Lluis, and Markus Mueller, 2011, “A Derivation of Quantum Theory from Physical Requirements”, _New Journal of Physics_, 13: 063001. doi:10.1088/1367-2630/13/6/063001
* Meyer, David A., 1999, “Finite Precision Measurement Nullifies the Kochen-Specker Theorem”, _Physical Review Letters_, 83(19): 3751–54. doi:10.1103/PhysRevLett.83.3751
* Piron, C., 1964, “Axiomatique Quantique”, _Helvetica Physica Acta_, 37(4–5): 439–468. doi:10.5169/seals-113494
* –––, 1976, _Foundations of Quantum Physics_, Reading, MA: W.A. Benjamin.
* Pitowsky, Itamar, 1989, _Quantum Probability—Quantum Logic_ (Lecture Notes in Physics, volume 321), Berlin: Springer-Verlag.
* –––, 2006, “Quantum Mechanics as a Theory of Probability”, in William Demopoulos and Itamar Pitowsky (eds.) _Physical Theory and Its Interpretation: Essays in Honor of Jeffrey Bub_, Dordrecht: Springer, pp. 213–240. doi:10.1007/1-4020-4876-9\_10
* Putnam, Hilary, 1968, “Is Logic Empirical?” in R. Cohen and M.P. Wartofski (eds.), _Boston Studies in the Philosophy of Science_ (Volume 5), Dordrecht: D. Reidel; reprinted as “The Logic of Quantum Mechanics” in Hilary Putnam, _Mathematics, Matter and Method_, Cambridge University Press, 1976, second edition 1979, pp. 174–197. doi:10.1017/CBO9780511625268.012
* Rau, Jochen, 2009, “On Quantum vs Classical Probability”, _Annals of Physics_, 324(12): 2622–2637. doi:10.1016/j.aop.2009.09.013
* Randall, C.H. and D.J. Foulis, 1983, “Properties and Operational Propositions in Quantum Mechanics”, _Foundations of Physics_, 13(8): 843–863. doi:10.1007/BF01906272
* Randall, C.H. and D.J. Foulis, 1985, “Stochastic Entities”, in _Recent Developments in Quantum Logic_, P. Mittelstaedt and E. Stachow (eds.), Mannheim: Bibliographisches Institut, pp. 265–284.
* Selinger, Peter, 2007, “Dagger Compact Closed Categories and Completely Positive Maps” (Extended Abstract), _Proceedings of the 3rd International Workshop on Quantum Programming Languages_ (QPL 2005), Chicago. _Electronic Notes in Theoretical Computer Science_, 170: 139–163. doi:10.1016/j.entcs.2006.12.018
* van Fraassen, Bas C., 1992, _Quantum Mechanics: An Empiricist View_, Oxford: Oxford University Press.
* Varadarajan, Veeravalli Sesshadri, 1985, _Geometry of Quantum Mechanics_, New York: Springer-Verlag. doi:10.1007/978-0-387-49386-2
* von Neumann, John, 1932, _Mathematische Grundlagen der Quantenmechanik_, Berlin: Springer-Verlag; English translation: _Mathematical Foundations of Quantum Mechanics_, Princeton: Princeton University Press, 1955.
* de Wetering, John, 2019, “Sequential Product Spaces are Jordan Algebras”, _Journal of Mathematical Physics_, 60(6): 062201. doi:10.1063/1.5093504
* Wilce, Alexander, 1992, “Tensor Products in Generalized Measure Theory”, _International Journal of Theoretical Physics_, 31(11): 1915–1928. doi:10.1007/BF00671964
* –––, 2000a, “Generalized Sasaki Projections”, _International Journal of Theoretical Physics_, 39: 969–974. doi:10.1023/A:1003607820078
* –––, 2000b, “Test Spaces and Orthoalgebras”, in Bob Coecke, David Moore, and Alexander Wilce (eds), _Current Research in Operational Quantum Logic_, Dordrecht: Kluwer Academic Publishers, pp. 81–114. doi:10.1007/978-94-017-1201-9\_4
* –––, 2009, “Test spaces”, Engesser, Gabbay, and Lehmann 2009: 443–549. doi:10.1016/B978-0-444-52869-8.50014-1
* –––, 2018, “A Royal Road to Quantum Theory (or Thereabouts)”, _Entropy_, 20(4): 227 doi:10.3390/e20040227
* Wright, Ron, 1980, “The State of the Pentagon: A Nonclassical Example”, in A.R. Marlowe (ed.), _Mathematical Foundations of Quantum Physics_, New York: Academic Press, pp. 255–274. doi:10.1016/B978-0-12-473250-6.50015-7
* Younce, Matthew B., 1987, _Random Variables on Non-Boolean Structures_, Ph.D. Dissertation, Department of Mathematics, University of Massachusetts/Amherst.

## Academic Tools

| ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=qt-quantlog).                                                                      |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/qt-quantlog/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
| ![inpho icon](https://plato.stanford.edu/symbols/inpho.png)         | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=qt-quantlog\&redirect=True) at the Internet Philosophy Ontology Project (InPhO).   |
| ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif)      | [Enhanced bibliography for this entry](https://philpapers.org/sep/qt-quantlog/) at [PhilPapers](https://philpapers.org/), with links to its database.                          |

## Other Internet Resources

* Cabello, Adan, 2012, “[Specker’s fundamental principle of quantum mechanics](https://arxiv.org/abs/1212.1756)”, unpublished paper, available at arXiv.org
* Hardy, Lucien, 2001, “[Quantum Theory from Five Reasonable Axioms](https://arxiv.org/abs/quant-ph/0101012)”, unpublished paper, available at arXiv.org
* Henson, Joe, 2012, “[Quantum contextuality from a simple principle?](https://arxiv.org/abs/1210.5978)”, unpublished manuscript, available at arXiv.org

## Related Entries

[Bell’s Theorem](https://plato.stanford.edu/entries/bell-theorem/) | [quantum mechanics](https://plato.stanford.edu/entries/qm/) | [quantum mechanics: Kochen-Specker theorem](https://plato.stanford.edu/entries/kochen-specker/) | [quantum mechanics: modal interpretations of](https://plato.stanford.edu/entries/qm-modal/) | [quantum theory: and mathematical rigor](https://plato.stanford.edu/entries/qt-nvd/)

[Copyright © 2021](https://plato.stanford.edu/info.html#c) by\
[Alexander Wilce](http://www.susqu.edu/facstaff/w/wilce/) <[_wilce@susqu.edu_](mailto:wilce%40susqu%2eedu)>
