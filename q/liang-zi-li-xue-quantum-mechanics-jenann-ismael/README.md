# 量子力学 quantum mechanics (Jenann Ismael

*首次发表于2000年11月29日；实质性修订于2020年9月10日。*

量子力学至少乍一看，至少在某种程度上，是一种用于预测微观粒子行为的数学工具，或者至少是用于探索这些行为的测量仪器的数学工具。在这方面，它非常成功：在能力和精确度方面，远远超过我们曾经拥有的任何理论。从数学上来说，这个理论是被很好地理解的；我们知道它的组成部分是什么，它们是如何组合在一起的，以及为什么在机械意义上（即通过描述齿轮之间的内部磨擦来回答的意义上），整个系统表现出它所表现的方式，输入的信息是如何转化为输出的。然而，关于它描述的是什么样的世界的问题是有争议的；在物理学家和哲学家中，关于量子力学描述的世界是什么样的几乎没有共识。最简单的解释是，这个理论描述了微观世界对宏观世界的影响方式，以及它如何影响我们的测量仪器，这些仪器可以用日常语言或经典力学的语言来描述。争议集中在一个问题上，即一个微观世界，以规定的方式影响我们的仪器，本质上是什么样的，或者这些仪器如何能够由理论所描述的微观部分构建而成。[1]

这就是理论的一种解释所能提供的：根据量子力学，从内在和从底层来看，世界是什么样子的一个适当的解释。给出一个解释的问题（不仅仅是一种令人舒适、亲切的解释，即不仅仅是一种根据这种解释，世界与常识中熟悉的世界并没有太大不同的解释，而是任何解释）在本百科全书的其他部分中进行了讨论。在这里，我们只关注理论的数学核心，即作为数学机器的理论，而无论其余部分是什么样的，这部分理论都是非常合理的。

---

## 1. 术语

物理系统根据其不变（或“与状态无关”）属性被分为不同类型，系统在某个时刻的状态由其随时间变化的属性的完整规范组成（即“与状态有关的”属性）。因此，为了对系统进行完整描述，我们需要说明它是什么类型的系统，并且在其历史的每个时刻，它的状态是什么。

物理量是一组互斥且共同构成的物理属性家族（对于了解这种说法的人来说，它是一个具有分区单元结构的属性家族）。了解一个量可以取什么样的值可以告诉我们关于其组成属性之间的关系很多。例如，一个二值量的值形成一个具有两个成员的集合；实值量的值形成一个具有实数结构的集合。这是我们将一再看到的特殊情况，即了解哪种数学对象表示某个集合中的元素（在这里是物理量的值；以后是系统可能具有的状态或与之相关的量）告诉我们非常多的信息（甚至可以说是所有需要知道的信息）关于它们之间的关系。

在量子力学的背景下，“可观测量”一词与“物理量”可以互换使用，并且应该被视为具有相同含义的技术术语。早期理论的开发者选择这个术语并非偶然，但这个选择的原因现在通常不被接受。系统的状态空间是由其可能状态的集合形成的空间，即内部特征的数量值组合的物理可能方式。在经典理论中，一组形成其余部分的随附基础的数量通常被指定为“基本”或“基础”，由于任何数学上可能的数量值组合都是物理可能性，状态空间可以通过简单地将这些作为坐标来获得。因此，例如，由 n 个粒子组成的经典力学系统的状态空间，通过指定 6n 个实数值的数量（系统中每个粒子的位置的三个分量和动量的三个分量）是一个 6n 维坐标空间。这样系统的每个可能状态对应于空间中的一个点，而空间中的每个点对应于这样一个系统的一个可能状态。在量子力学中情况有些不同，数学上可以描述的数量值组合方式并不代表物理上可能的状态。正如我们将看到的，量子力学的状态空间是一种特殊类型的向量空间，称为希尔伯特空间，它们比经典对应物具有更多的内部结构。

结构是一组定义了某些操作和关系的元素集合，数学结构只是其中元素是数学对象（数字、集合、向量）且操作是数学操作的结构，而模型是用于表示世界中某些具有物理意义的结构的数学结构。

量子力学的核心是包含在表示量子力学系统状态空间的希尔伯特空间中。状态和量之间的内部关系，以及这一切关于量子力学系统行为方式的内容，都编织在这些空间的结构中，体现在代表它们的数学对象之间的关系中。这意味着根据量子力学理论理解系统的特性与熟悉这些空间的内部结构是密不可分的。熟悉希尔伯特空间，并熟悉描述向量在其中路径的动力学定律，你就能够在理论提供的术语中了解它所描述的系统的一切。

通过“熟悉希尔伯特空间”，我指的是比拥有对其的描述或地图更多的东西；任何将量子力学教科书放在书架上的人都有这个。我指的是以你熟悉所居住城市的方式熟悉它。这是一种实践性的知识，可以通过学习解决以下问题来获得：我如何从 A 点到达 B 点？我能否不经过 C 点到达那里？最短路径是什么？物理学研究生花费很长时间熟悉希尔伯特空间的每个角落，找到熟悉的地标，踏上熟悉的路径，了解秘密通道和死胡同的位置，并对整体地形有所了解。他们学会如何像出租车司机一样在希尔伯特空间中导航。

需要多少这种知识来解决与这个理论相关的哲学问题？起初，并不需要很多：只需要关于景观几何的最一般的事实（无论如何，它与大多数城市的景观都不同，非常有组织），以及系统（表示状态的向量）在其中行进的路径。这就是将在这里介绍的内容：首先是一些简单的数学，然后简要介绍理论。

## 2. 数学

### 2.1 向量和向量空间

一个向量 A，写作‘|A⟩’，是一个数学对象，其特征是长度|A|和方向。归一化向量是长度为 1 的向量；即，|A|=1。向量可以相加，可以乘以常数（包括复数），也可以相乘。向量相加将任意一对向量映射到另一个向量，具体来说，就是将第二个向量移动，使其尾部与第一个向量的顶部重合，而不改变任何一个向量的长度或方向，然后将第一个向量的尾部与第二个向量的顶部连接起来。这个加法规则被称为平行四边形法则。因此，例如，将向量|A⟩和|B⟩相加得到向量|C⟩（=|A⟩+|B⟩），如图 1 所示：

![vector addition](https://plato.stanford.edu/entries/qm/figure1.gif)

图 1. 向量相加

将向量|A⟩乘以常数 n，其中 n 是一个常数，得到的向量与|A⟩具有相同的方向，但长度是|A⟩的长度的 n 倍。

在一个实向量空间中，向量对 |A⟩ 和 |B⟩ 的（内积或点积）乘积，写作 ‘⟨A∣B⟩’，是一个标量，等于它们长度（或‘范数’）的乘积乘以它们之间的角度 θ 的余弦值：

⟨A∣B⟩=|A||B|cosθ

让 |A1⟩ 和 |A2⟩ 是长度为 1 的向量（“单位向量”），使得 ⟨A1∣A2⟩=0。（因此这两个单位向量之间的角度必须是 90 度。）然后我们可以用我们的单位向量来表示任意二维向量 |B⟩ 如下：

|B⟩=b1|A1⟩+b2|A2⟩

例如，这里有一个图表，显示了如何将|B⟩表示为两个单位向量|A1⟩和|A2⟩的和：

![figure2](https://plato.stanford.edu/entries/qm/figure2.gif)

图 2. 通过向量相加表示|B⟩的方式

现在内积⟨A∣B⟩的定义必须修改为适用于复数空间。让 c∗是 c 的复共轭。（当 c 是形如 a±bi 的复数时，c 的复共轭 c∗定义如下：

[a+bi]∗=a−bi[a−bi]∗=a+bi

因此，对于所有复数 c，[c∗]∗=c，但只有当 c 是实数时，c∗=c。）现在可以根据复数系数的共轭来给出复数空间中|A⟩和|B⟩的内积的定义。其中|A1⟩和|A2⟩是前面描述的单位向量，|A⟩=a1|A1⟩+a2|A2⟩，|B⟩=b1|A1⟩+b2|A2⟩，然后

⟨A∣B⟩=(a∗1)(b1)+(a∗2)(b2)

最一般和抽象的内积概念，我们已经定义了两个特殊情况，如下所示。⟨A∣B⟩是向量空间 V 上的内积，当且仅当

1. ⟨A∣A⟩=|A|2，且⟨A∣A⟩=0 当且仅当 A=0
2. ⟨B∣A⟩=⟨A∣B⟩∗
3. ⟨B∣A+C⟩=⟨B∣A⟩+⟨B∣C⟩.

由此可得

1. |A⟩的长度是与自身的内积的平方根，即|A|=√⟨A∣A⟩

 并且

2. 当且仅当⟨A∣B⟩=0 时，|A⟩和|B⟩互相垂直或正交。

一个向量空间是一个在加法和常数乘法下封闭的向量集合，内积空间是一个在其上定义了向量乘法运算的向量空间，这样的空间的维度是它包含的非零、相互正交向量的最大数量。

在一个 N 维向量空间中，任何一组长度为 1 的 N 个相互正交的向量构成了该空间的正交归一基。设|A1⟩，…，|AN⟩是这样一组单位向量。那么空间中的每个向量都可以表示为以下形式的和：

|B⟩=b1|A1⟩+b2|A2⟩+…+bN|AN⟩,

其中 bi=⟨B∣Ai⟩。这里的 bi 被称为 A 基下的 B 的展开系数。[5]

 注意：

1. 对于给定空间中的所有向量 A、B 和 C，⟨A∣B+C⟩=⟨A∣B⟩+⟨A∣C⟩。
2. 对于任意以 A 基表示的向量 M 和 Q，|M⟩+|Q⟩=N∑i=1(mi+qi)|Ai⟩，

 和

⟨M∣Q⟩=N∑i=1m∗iqi

还有一种写向量的方式，即通过将它们的展开系数（相对于给定基底）写成一列，如下所示：

|Q⟩=[q1q2]

其中 qi=⟨Q∣Ai⟩，而 Ai 是所选的基向量。

当我们处理无限维向量空间时，由于我们无法写出需要选择向量的整个展开系数列，因为它将无限长，所以我们写下函数（称为 Q 的“波函数”，通常表示为ψ（i）），该函数具有这些系数作为值。我们写下的是函数：

 ψ（i）= qi = ⟨Q∣Ai⟩

对于任何向量和任何基，我们可以在该基中获得向量的波函数；对于向量的波函数，在特定基中，我们可以构造其波函数的向量。由于事实证明，大多数重要的向量操作对应于其波函数上的简单代数运算，这是表示状态向量的常规方式。

当一对物理系统相互作用时，它们形成一个复合系统，在量子力学和经典力学中，都有一个规则用于从组成部分的状态空间构建复合系统的状态空间，这个规则告诉我们如何从状态空间 HA 和 HB（分别对应 A 和 B）获得一对的状态空间，称为 HA⊗HB 的‘张量积’，用 HA⊗HB 表示。关于这个规则有两个重要的事情；首先，只要 HA 和 HB 是希尔伯特空间，HA⊗HB 也将是希尔伯特空间，其次，关于 HA⊗HB 与 HA 和 HB 的关系有一些事实，对于复杂系统和其组成部分之间的关系有着令人惊讶的后果。特别是，复合系统的状态并不仅仅由其组成部分的状态唯一确定。这意味着，至少表面上看，根据量子力学，关于复合系统的事实（而不仅仅是关于它们的空间配置的事实）并不随附于其组成部分的事实；这意味着关于整体系统的事实并不随附于其部分和这些部分在空间中的排列方式的事实。这个理论特征的重要性不可低估；它以某种方式涉及到该理论中大部分最困难的问题。

更详细地说：如果{vAi}是 HA 的正交基，{uBj}是 HB 的正交基，那么对于张量积空间 HA⊗HB，一对(vAi,uBj)被认为是一个正交基。记号 vAi⊗uBj 用于表示一对(vAi,uBj)，并且 HA⊗HB 上的内积定义为：[6]

⟨vAi⊗uBm∣vAj⊗uBn⟩=⟨vAi∣vAj⟩⟨uBm∣uBn⟩

这种构造的结果是，尽管 HA⊗HB 中的每个向量都是以 vA⊗uB 的形式表示的向量的线性和，但并不是空间中的每个向量都可以用这种形式表示，事实证明

1. 任何复合态都唯一地定义了其组成部分的态。
2. 如果 A 和 B 的态是纯态（即分别由向量 vA 和 uB 表示），那么(A+B)的态是纯态，并由 vA⊗uB 表示，而且
3. 如果(A+B)的状态是纯的且可表示为 vA⊗uB 的形式，则 A 和 B 的状态也是纯的，但是
4. 如果 A 和 B 的状态不是纯的，即它们是混合态（下面定义了这些），它们不能唯一地定义(A+B)的状态；特别地，它可能是一个无法用 vA⊗uB 的形式表示的纯态。

### 2.2 运算符

一个算符 O 是一个将向量空间映射到自身的映射；它将空间中的任意向量 |B⟩ 映射到另一个空间中的向量 |B′⟩；O|B⟩=|B′⟩。线性算符是具有以下性质的算符：

1. O(|A⟩+|B⟩)=O|A⟩+O|B⟩，以及
2. O(c|A⟩)=c(O|A⟩)。

正如 N 维空间中的任何向量可以通过 N 个数字的列来表示，相对于空间的基础选择，空间上的任何线性算子都可以通过 N2 个数字的列表示：

O=[O11O12O21O22]

其中 Oij=⟨Ai∣O∣Aj⟩，AN 是空间的基向量。线性算子 O 对向量 B 的作用可以通过以下方式给出：

O|B⟩=[O11O12O21O22]×[b1b2]=[(O11b1+O12b2)(O21b1+O22b2)]=(O11b1+O12b2)|A1⟩+(O21b1+O22b2|A2⟩=|B′⟩

在我们能够说明 Hilbert 空间是什么之前，还有两个定义，然后我们可以转向量子力学。如果且仅当 O|B⟩=a|B⟩时，|B⟩是 O 的特征向量，其中 a 是特征值。不同的算符可以有不同的特征向量，但特征向量/算符关系仅取决于算符和相关向量，而不取决于它们所表达的特定基础；特征向量/算符关系是不变的，也就是说，在基础变换下是不变的。Hermitean 算符是具有以下特性的算符：它有一个由其特征向量组成的正交基，并且这些特征值都是实数。

最后，Hilbert 空间是一个定义了内积的向量空间，并且是完备的，即空间中的任何柯西序列都收敛到空间中的一个向量。所有有限维内积空间都是完备的，我将限制在这些空间中。无限维的情况涉及一些在这个阶段没有进入的复杂性。

## 3. 量子力学

量子力学的四个基本原理是：

(3.1)

物理状态。每个物理系统都与一个希尔伯特空间相关联，空间中的每个单位向量对应于系统的可能纯态，而每个可能的纯态对应于空间中的某个向量。[7]

(3.2)

物理量。与系统相关的希尔伯特空间中的厄米算符代表物理量，它们的本征值代表对这些量进行测量的可能结果。

量子理论中有一个被称为哈密顿算符的运算符，它在理论中扮演着特殊的角色，因为系统的动力学可以通过跟踪其演化来方便地进行描述。哈密顿算符（用 H 或^H 表示）代表系统的总能量。它的本征值是可能在总能量测量中获得的结果。它由系统组成部分的动能和势能之和给出。

(3.3)

组合。复杂系统相关的希尔伯特空间是由其组成的简单系统（在标准的非相对论理论中是个体粒子）相关的希尔伯特空间的张量积。

(3.4)

**动力学。**

a.

类型 1 的背景：给定系统在 t 时刻的状态以及其所受的力和约束，存在一个方程“薛定谔方程”，它给出了在任何其他时间 t'的状态 U|vt⟩→|vt′⟩。[8] U 的重要属性是它是确定性的，也就是说它将系统在一个时间的状态转换为任何其他时间的唯一状态，它是幺正的，这意味着它是作用于希尔伯特空间的自同构（即，将该空间映射到自身并保持线性空间结构和内积），它是线性的，也就是说，如果它将状态|A⟩映射到状态|A'⟩，将状态|B⟩映射到状态|B'⟩，那么它将形如α|A⟩+β|B⟩的任何状态映射到状态α|A'⟩+β|B'⟩。

b.

类型 2 的背景（"测量背景"）：[9] 在状态|A⟩的系统上对可观测量 B 进行"测量"会导致系统坍缩为对应于观测到的特征值的 B 特征态。这被称为坍缩假设。它坍缩为哪个特征态是一个概率问题，概率由 Born 规则给出：

Pr(bi)=|⟨A∣B=bi⟩|2

关于这两种情境，有两个重要的要点需要注意：

* 在量子力学的术语中，仍然需要明确类型 1 和类型 2 的情境之间的区别；至今还没有人能够以理论提供的方式完全令人满意地说明哪些情境是测量情境，
* 即使区分出了这个区别，是否存在类型 2 的情境仍然是一个开放的解释性问题；也就是说，是否存在任何系统受到除了薛定谔方程之外的动力学规则支配的情境仍然是一个开放的解释性问题。

## 4. 希尔伯特空间上的结构

我之前提到，就像我们对于城市中位置之间的关系所拥有的所有信息都体现在代表它们的地图上点之间的空间关系中一样，我们对于量子力学中状态和量之间的内部关系所拥有的所有信息都体现在代表它们的向量和算符之间的数学关系中。[10]从数学的角度来看，真正区分量子力学与其经典前身的是状态和量具有更丰富的结构；它们形成了一个更有趣的成员之间关系网络的家族。

量子力学系统行为的所有物理上重要的特征都是这些关系的数学属性的结果，其中最重要的几个可以简单总结为：

(P1)

任何在希尔伯特空间中添加向量或将它们乘以标量的方法都会产生一个也在该空间中的向量。在向量被归一化的情况下，根据（3.1），它代表了系统的一个可能状态；如果它是一个具有不同特征值的可观测量 B 的一对特征向量的和，它本身不是 B 的特征向量，但根据（3.4b），它与 B 测量中显示一个或另一个结果的一组概率相关联。

(P2)

对于希尔伯特空间上的任何厄米算符，存在其他在相同空间上的算符，它们与之不共享一组完整的特征向量；事实上，很容易证明存在其他这样的算符，它们与之没有共同的特征向量。

如果我们做一些额外的解释性假设，我们可以说得更多。例如，假设

(4.1)

与系统相关的希尔伯特空间上的每个厄米算符都代表一个不同的可观测量，而且（因此）每个归一化向量代表一个不同的状态，

(4.2)

如果且仅当表示其状态的向量是 A 算符的本征态时，系统对可观测量 A 具有一个值。在这种情况下，它所具有的值就是与该本征态相关联的本征值。[11]

根据（P2）和（3.1），可以得出结论：没有量子力学状态是所有可观测量的本征态（实际上，有些可观测量没有共同的本征态）。因此，根据（3.2），量子力学系统永远不会对其所有相关量具有同时的值（实际上，有些量对于任何状态都没有同时的值）。

在一对希尔伯特空间 H1 和 H2 的张量积 H1⊗H2 上存在厄米算符... 如果 H1 和 H2 是系统 S1 和 S2 的状态空间，则 H1⊗H2 是复合系统（S1+S2）的状态空间。根据（4.1），由于（S1+S2）存在与两个系统的可观测量的值无关的可观测量。

这些都是将希尔伯特空间中的向量和算符分别表示为状态和可观测量，并应用伯恩规则（以及后来的（4.1）和（4.2））来赋予状态分配以经验意义的直接结果。这一点是非常清楚的；理解量子力学的真正困难在于理解它们的物理、形而上学和认识论的含义。

任何试图理解量子力学对世界的说法的人都必须面对一个仍然存在的事实。这个问题不是关于希尔伯特空间的问题，而是关于动力学-描述系统在空间中遵循的轨迹的规则。从物理学的角度来看，它比之前讨论的任何问题都更令人担忧。它不仅对试图提供理论解释的人提出了困难，而且似乎指向了理论基础的逻辑不一致性。

假设我们有一个系统 S 和一个测量 S 上可观测量 A 的设备 S∗，其取值为{a1，a2，a3，...}。那么存在 S∗的某个状态（“基态”）和与 S∗相关的取值为{b1，b2，b3，...}的可观测量 B（称为“指针可观测量”，因为它在注册实验结果的示意测量仪器的前面的刻度盘上扮演指针的角色），这样，如果 S∗从其基态开始，并以适当的方式与 S 进行交互，且在交互之前 A 的取值为 a1，则交互之后 B 的取值立即变为 b1。然而，如果交互之前 A 的取值为 a2，则交互之后 B 的取值为 b2；如果交互之前 A 的取值为 a3，则交互之后 B 的取值为 b3，依此类推。这就是所谓的 S∗测量 A 的含义。因此，如果我们用向量|A=ai⟩s|B=bi⟩s∗来表示 S 和 S∗的联合部分状态（即指定 S 上的测量可观测量和 S∗上的指针可观测量的值的部分），并用“→”表示两者之间的动力学描述，那么说 S∗是 A 的测量仪器就是说动力学定律蕴含着以下关系：

|A=a1⟩s|B=基态⟩s∗→|A=a1⟩s|B=b1⟩s∗|A=a2⟩s|B=基态⟩s∗→|A=a2⟩s|B=b2⟩s∗|A=a3⟩s|B=基态⟩s∗→|A=a3⟩s|B=b3⟩s∗

 等等。[12]

直观地说，只要 S∗是可测量的 A 的测量仪器，那么 S∗的某个可测量特征（无论是什么，只要通过观察设备可以确定其值）与被输入其中的系统的 A 值相关联，以至于我们可以从 S∗的可测量状态中读取这些值。在哲学术语中，只要 S∗的某个可测量特征以适当的方式跟踪或指示其与之交互的系统的 A 值，那么 S∗就是 A 的测量仪器。

现在，根据上面的（3.1），我们可以得出结论，存在着 S 的状态（数量多得无法计数），它们不是 A 的本征态，如果我们考虑 Schrödinger 方程告诉我们关于 S 和 S∗的联合演化的信息，当 S 从这些状态之一开始时，我们发现在相互作用之后，这对的状态是[A 在 S 上的本征态和 B 在 S∗上的本征态]的叠加态。无论在 S 上测量的是什么可观测量，也无论 S 开始处于什么特定的叠加态，当它被输入到该可观测量的测量仪器中时，如果相互作用被 Schrödinger 方程正确描述，那么仅仅通过该方程中的 U 的线性性质，即实现从早期到后期状态的转换的算符，就可以得出结论，相互作用之后，S 和仪器的联合态是该可观测量在联合系统上的本征态的叠加态。

例如，假设我们将 S∗从其基态开始，将 S 设置为

1√2|A=a1⟩s+1√2|A=a2⟩s

这是由于获取复合系统状态空间的规则所导致的，该对的组合态为

1√2|A=a1⟩s|B=基态⟩s∗+1√2|A=a2⟩s|B=基态⟩s∗

由于 S∗是 A 的测量仪器，以及 U 的线性性质，它们在相互作用后的组合状态是

1√2|A=a1⟩s|B=b1⟩s∗+1√2|A=a2⟩s|B=b2⟩s∗

然而，这与类型 2 上下文的动力学规则不一致，因为类型 2 上下文的动力学规则（如果存在这样的上下文，那么这就是其中之一）意味着相互作用后的双方状态要么是

|A=a1⟩s|B=b1⟩s∗

 或者

|A=a2⟩s|B=b2⟩s∗

实际上，这意味着它以 12 的准确概率最终会落入前者，以 12 的概率最终会落入后者。

我们可以通过放弃类型 2 上下文的动态规则（或者说，否认存在任何这样的上下文）来恢复逻辑一致性，但这样我们就面临与经验一致性的问题。因为那个规则被包含在理论中并不是一个简单的错误；我们知道系统在给定可观测量的本征态时是什么样子的，并且我们从观察中知道测量仪器在测量后是指针可观测量的本征态。因此，我们从一开始就知道，如果一个理论告诉我们关于测量仪器的测量后状态的其他信息，无论那些其他信息是什么，都是错误的。

简而言之，这就是量子力学中的测量问题；量子力学的任何解释，关于世界在量子力学下是什么样子的任何详细故事，特别是那些进行测量的世界的部分，都必须应对这个问题。

### 松散的结局

混合态是纯态的加权和，它们可以用来表示组分处于不同纯态的集合的态，或者我们只对个体系统的状态有部分知识。在第一种情况下，附加到给定纯态的权重反映了处于该态的集合组分的大小（因此是集合中任意成员的客观概率）；在第二种情况下，它们反映了被分配给所讨论的系统的状态的认知概率。

如果我们不想失去纯态和混合态之间的区别，我们需要一种表示一组纯态（或与之相关的概率函数）的加权和的方法，该方法与表示它们的矢量的加法不同，并且意味着我们需要一种替代的表示混合态的方法，或者一种统一的表示纯态和混合态的方法，以保持它们之间的区别。在希尔伯特空间中有一种称为密度算符的运算符，在后一种情况下表现良好，并且事实证明，用密度算符重新表述关于状态矢量的所有内容并不困难。因此，即使通常说纯态由矢量表示，官方规定是在量子力学中，状态（纯态和混合态）都由密度算符表示。

尽管混合态可以用来表示我们对实际上处于纯态之一的系统状态的无知，尽管在经典背景下这似乎是一种充分的解释混合态的方式，但将其普遍应用于量子力学混合态存在严重障碍。这些障碍在百科全书中的其他量子力学条目中有详细讨论。

严格来说，关于可观测量的所有论述仅适用于可观测量值形成离散集合的情况；将其推广到连续可观测量的情况所需的数学细节很复杂，并引发了更多技术性质的问题。这些问题也最好留待详细讨论。

这应该是接近量子力学哲学讨论所需的所有初步准备，但这只是第一步。当人们了解了希尔伯特空间中向量和算符之间的关系，简单系统空间与复杂系统空间的关系，以及描述态矢量在空间中如何移动的方程时，对于与该理论相关的问题的性质和困难的认识将更加深刻。关于量子力学有趣的反常之处，也是吸引哲学家的地方，就是人们学得越多，问题就越难。

<!--md-padding-ignore-begin-->
## Bibliography

### Books Useful For Beginners

Here are some recent books that will be especially useful to beginners.

* Travis Norsen, T., 2017, *Foundations of Quantum Mechanics: An Exploration of the Physical Meaning of Quantum Theory*, Cham: Springer.
  
  This is a textbook for students who want to learn quantum mechanics, but learn it in a way that emphasizes physical clarity. The book covers topics of a standard introduction to quantum physics, but focuses attention on questions of ontology often glossed over in standard texts. The physics student who wants to learn quantum mechanics either as preparation for studying foundations or simply in a way that looks for clear answers to questions like ‘What are the basic objects in the quantum world?’, ‘What kinds of configurations can they assume?’, ‘How do they move and interact with one another?’ can do no better than starting here.
  
* Susskind, L. and Friedman, A., 2014, *Quantum Mechanics: The Theoretical Minimum (2nd edition)*, New York: Basic Books.
  
  At 384 pages, this book isn’t as pithy as the title would suggest. It provides very clear presentation of the principles of quantum mechanics for the physics student without any previous background. This is how one would learn quantum mechanics in a standard university course.
  
### Quantum Mechanics Textbooks

There are a great many textbooks available for studying quantum mechanics. Here are a few especially important ones with some notes to guide choices among them. It is good to work with two or three texts when learning QM. No text is perfect and differences in approach can illuminate the subject from different angles.

* Ballentine, L., 1998, *Quantum Mechanics: A Modern Approach*, Singapore: World Scientific Publishing Company.
  
  This book is not recommended for beginners, and not recommended as a textbook. It is recommended once one has some technical background to deepen understanding of the fundamental concepts of quantum mechanics.
  
* Basdevant, J.L., and J. Dalibard, 2005, *Quantum Mechanics*, Berlin: Springer.
  
  This is a brief, but elegant introduction. There aren’t a great many problems, but detailed solutions are provided for those that are included. The book comes with a CD-ROM that is very helpful for visualization.
  
* Dirac, P.A.M., 1930 [1958], *The Principles of Quantum Mechanics*, Oxford: Clarendon Press, 1930; 4th edition, revised, 1958.
  
  This is a classic, beautiful book that remains one of the clearest presentations of quantum mechanics. Everything is presented with extreme simplicity using Dirac’s formulation with non-commutative algebra. Even a beginner will be able to follow the presentation. The book emphasizes logical structure, in Dirac’s words: “problems were tackled top-down, by working on the great principles, with the details left to look after themselves.”
  
* Cohen-Tannoudji, C., 2006, *Quantum Mechanics*, New York: Wiley-Interscience.
  
  This is a comprehensive, encyclopedic text. It’s not the best to learn from, but is a good reference book.
  
* Gasiorowicz, S., 1995, *Quantum Physics* (3rd edition), New York: Wiley.
  
  This is a decent text, relatively well-written.
  
* Griffiths, D., 1995 [2018], *Introduction to Quantum Mechanics* (2nd edition), Upper Saddle River, NJ: Prentice Hall; 3rd edition, 2018.
  
  This is a standard undergraduate text for a first course in QM, and I would recommend it as a starting point for beginners. It is concise and very easy to read. There is an emphasis on conceptual development. Unfortunately, there are no worked examples in the book, and the answers to the problems are available only to instructors. It is easy to find and has recently been updated.
  
* Liboff, R., 1998, *Introductory Quantum Mechanics* (4th edition), San Francisco: Addison-Wesley.
  
  This is a nicely designed book, relatively well-written. It is a good starting point for beginners, but not at comprehensive as Shankar.
  
* Merzbacher, E., 1997, *Quantum Mechanics* (3rd edition), New York: Wiley.
  
  This is a standard graduate text in the US, not recommended for beginners, but quite good at an advanced level.
  
* Sakurai, J.J., 1993 [2021], *Modern Quantum Mechanics* (revised edition), Reading, MA: Addison Wesley; third edition, with coauthor Jim Napolitano, Cambridge: Cambridge University Press, 2021.
  
  This is generally used as a graduate text. It is well-written and there is emphasis on experimental phenomena and important questions like Bell’s Inequality. The material is introduced at a higher level than Griffiths and Shankar, with lots of mathematics. There is a wealth of problems, but unfortunately few solutions are provided, making it most useful in a classroom setting or in conjunction with a book that contains worked examples and derivations.
  
* Schwinger, J., 2003, *Quantum Mechanics* (corrected edition), Berlin: Springer.
  
  This book is extremely mathematical in emphasis. There is less emphasis on conceptual development, and it is best used after one has acquired a conceptual understanding of QM and wants to see the mathematical development. The approach is very revealing. It is a difficult text, in part because some of the formalism is abstract and unconventional, but it is well worth the effort to comprehend. The problems throughout are excellent, but again unfortunately, solutions are not included in the text.
  
* Shankar, R., 1994, *Principles of Quantum Mechanics* (2nd edition), Berlin: Springer.
  
  This book is highly recommended as a starting point. It starts from ground zero, developing the mathematical tools needed to understand quantum mechanics. It is well written, and friendlier than Griffiths for students who are learning the subject on their own. QM is not introduced until page 115.  The introductory chapter on linear algebra is very good. At 676 pages, it is comprehensive. It covers Feynman path integrals more thoroughly than other books, and contains solved problems. If you buy one book on QM, this is a good choice.
  
* Zettili, N., 2009, *Quantum Mechanics: Concepts and Applications*, Chichester: John Wiley & Sons, Ltd.
  
  This is a very good book as well. It covers theory and problem solving in an integrated way. It is easy to follow and full of problems and solutions that are related to the experimental basis of the theory.
  
### Useful General Texts in Mathematics and Physics

Whether studying quantum mechanics on one’s own, or in a classroom setting, it is useful to have these books on hand as accompaniments. Even a seasoned teacher will find himself from time to time reaching for them:

* Benenson, W., J. Harris, H. Stoecker, , and H. Lutz, 2006, *Handbook of Physics* (2nd edition), Berlin: Springer.
* Bronshtein, I.N., and K.A. Semendyayev, 2007, *Handbook of Mathematics* (5th edition), Berlin: Springer.
* Halliday, D., R. Resnick, and J. Walker, 2008, *Fundamentals of Physics* (8th edition), Hoboken, NJ: Wiley.
* Halmos, P., 1957, *Introduction to Hilbert Space* (2nd edition), Providence: AMS Chelsea Publishing.

### Books on Philosophy of QM

The last three decades have been a golden age for studying foundations of quantum Mechanics. Most of the active research is published in journals. The discussion surrounding standard non-relativistic quantum mechanics has stabilized in a way that makes it possible to survey. Three recent books absorb and organize the work of these decades.

* Barrett, J., 2019, *The Conceptual Foundations of Quantum Mechanics*, New York: Oxford University Press.
  
  This is a recent text on the history and conceptual foundations of quantum mechanics. It will serve an excellent primary text on the foundations of quantum mechanics for philosophy students, and will also make an excellent supplement to the standard quantum physics texts of physics students.
  
* Lewis, P., 2016, *Quantum Ontology: A Guide to the Metaphysics of Quantum Mechanics* , New York: Oxford University Press.
  
  Lewis’s book gives a very good presentation of the most influential and well-developed interpretations of the formalism and provides an even-handed comparative assessment. It provides is an up-to-date survey of the landscape with sophisticated analysis and commentary. The book is well-suited for use in or for the layperson with a serious interest in foundations. The discussion is sophisticated without undue technicality and manages philosophical analysis in a jargon-free way.
  
* Maudlin, T., 2019, *Philosophy of Physics: Quantum Theory*, Princeton: Princeton University Press.
  
  This is an excellent, if challenging introduction to quantum foundations. The book is unparalleled in clarity and uncompromising in its insistence on ontological intelligibility. It is more selective than Lewis and Barrett’s book (it covers Everettian Quantum Mechanics and Bohmian Mechanics and Spontaneous Collapse theories, but the Copenhagen approach is dismissed because it doesn’t have an explicit ontology). The author makes no bones about where his own sympathies lie, but it will reward the study of any beginning student or seasoned practitioner.
  
Here are some general texts to introduce you to the philosophy of QM.

* Albert, D., 1994, *Quantum Mechanics and Experience*, Cambridge, MA: Harvard University Press.
* Bell, J.S., 1987, *Speakable and Unspeakable in Quantum Mechanics*, Cambridge: Cambridge University Press.
* Busch, P., P. Lahti, and P. Mittelstaedt, 1991, *The Quantum Theory of Measurement*, Berlin: Springer-Verlag.
* Clifton, R.K. (ed.), 1996, *Perspectives on Quantum Reality*, Dordrecht: Kluwer.
* d’Espagnat, B., 1995, *Veiled Reality*, Reading, MA: Addison-Wesley.
* Hughes, R.I.G., 1989, *Structure and Interpretation of Quantum Mechanics*, Cambridge, MA: Harvard University Press.
* Omnès, R., 1994, *The Interpretation of Quantum Mechanics*, Princeton: Princeton University Press.
* Primas, H., 1983, *Quantum Mechanics, Chemistry and Reductionism* (2nd edition), Berlin: Springer.
* Rae, A., 1986, *Quantum Physics: Illusion or Reality?*, Cambridge: Cambridge University Press.
* Redhead, M.L.G., 1989, *Incompleteness, Nonlocality and Realism*, Oxford: Clarendon Press.
* Squires, E., 1990, *Conscious Mind in the Physical World*, Bristol, New York: Adam Hilger.
* Whitaker, A., 1996, *Einstein, Bohr and the Quantum Dilemma*, Cambridge: Cambridge University Press.

More specialized readings include:

* Becker, A., 2018, *What is Real? The Unfinished Quest for the Meaning of Quantum Mechanics*, New York: Basic Books.
  
  This is a retelling of the early history of quantum theory that describes how Bohr’s influence persuaded a generation of physicists that the demand for a clear account of quantum ontology was somehow inappropriate. The book is a gripping tale of a turbulent time in the history of physics, when personalities clashed as deeply as philosophical sympathies.
  
* Carroll, S., 2019, *Something Deeply Hidden: Quantum Worlds and the Emergence of Spacetime*, New York: Dutton.
  
  This is a lively development and well-written defense of the Everettian viewpoint that looks beyond standard non-relativistic theory and argues that the real lesson of quantum conundra and their reconciliation of quantum mechanics with General Relativity is the recognition that space-time is not fundamental.
  
## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=qm). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/qm/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=qm&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/qm/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* Preskill, J., 1998, [Quantum Computation](http://www.theory.caltech.edu/people/preskill/ph229/index.html#lecture) (Lecture Notes for Physics 219, California Institute of Technology)

## Related Entries

[quantum mechanics: Bohmian mechanics](https://plato.stanford.edu/entries/qm-bohm/) | [quantum mechanics: collapse theories](https://plato.stanford.edu/entries/qm-collapse/) | [quantum mechanics: Copenhagen interpretation of](https://plato.stanford.edu/entries/qm-copenhagen/) | [quantum mechanics: Everettian](https://plato.stanford.edu/entries/qm-everett/) | [quantum mechanics: Kochen-Specker theorem](https://plato.stanford.edu/entries/kochen-specker/) | [quantum mechanics: many-worlds interpretation of](https://plato.stanford.edu/entries/qm-manyworlds/) | [quantum mechanics: modal interpretations of](https://plato.stanford.edu/entries/qm-modal/) | [quantum mechanics: relational](https://plato.stanford.edu/entries/qm-relational/) | [quantum mechanics: the role of decoherence in](https://plato.stanford.edu/entries/qm-decoherence/)

[Copyright © 2020](https://plato.stanford.edu/info.html#c) by  
[Jenann Ismael](https://www.jenanni.com/) <[*ji2266@columbia.edu*](mailto:ji2266%40columbia%2eedu)>
<!--md-padding-ignore-end-->
