# 演化博弈论 evolutionary (J. McKenzie Alexander)

*首次发表于 2002 年 1 月 14 日星期一；实质性修订于 2021 年 4 月 24 日星期六*

演化博弈论起源于将博弈论数学理论应用于生物背景的一种情况，这源于频率依赖适应性引入了进化中的战略方面的认识。然而，最近，演化博弈论对经济学家、社会学家和人类学家以及哲学家产生了越来越大的兴趣——以及社会科学家总体上的兴趣。社会科学家对具有明确生物学根源的理论的兴趣源自三个事实。首先，演化博弈论所处理的“演化”不一定是生物演化。“演化”在这种情况下，通常可以被理解为文化演化，这指的是随时间变化的信念和规范。其次，演化博弈论所基于的理性假设，在许多情况下，比传统博弈论基础上的假设更适合于对社会系统的建模。第三，作为明确动态理论的演化博弈论，提供了传统理论中缺失的一个重要元素。在《演化与博弈论》的前言中，梅纳德·史密斯指出“[矛盾的是，原来设计用于经济行为领域的博弈论，现在更容易应用于生物学]”。因此，随后演化博弈论的发展产生了一个对社会科学家具有巨大潜力的理论，并且与最初设计用途相同的经济行为领域一样容易应用。
 

---

## 1. 历史发展

演化博弈论最早由 R. A. Fisher [参见《自然选择的遗传理论》(1930)] 提出，他试图解释哺乳动物中性别比例的近似相等。Fisher 面临的难题是：为什么在许多物种中，大多数雄性从未交配，但性别比例却近乎相等？（例如，北象海豹 Mirounga angustirostris）。在这些物种中，未交配的雄性似乎是整个种群的多余负担，没有真正的用途。Fisher 意识到，如果我们以预期的孙子辈数量来衡量个体适应度，那么个体适应度取决于种群中雄性和雌性的分布。当种群中雌性数量较多时，雄性具有较高的个体适应度；当种群中雄性数量较多时，雌性具有较高的个体适应度。Fisher 指出，在这种情况下，演化动力学导致性别比例固定为雄性和雌性数量相等。个体适应度取决于种群中雄性和雌性的相对频率，这为演化引入了战略因素。

Fisher 的论点可以从博弈论的角度理解，但他并没有用这些术语来表述。1961 年，R.C. Lewontin 在《演化与博弈论》中首次明确将博弈论应用于进化生物学（与 Maynard Smith 的同名作品不要混淆）。1972 年，Maynard Smith 在《博弈论与斗争的进化》一章中首次引入了进化稳定策略（以下简称 ESS）的概念。然而，直到 1973 年 Maynard Smith 和 Price 发表了《动物冲突的逻辑》才将 ESS 的概念广泛传播开来。1982 年，Maynard Smith 的重要著作《进化与博弈论》问世，紧随其后的是 Robert Axelrod 于 1984 年发表的著名作品《合作的进化》。自那时以来，经济学家和社会科学家对进化博弈论产生了极大的兴趣（请参阅下面的参考书目）。

最初，人们认为进化博弈论可能为传统博弈论的均衡选择问题提供一种突破口。尽管传统博弈论的基本解决概念——纳什均衡在任何有限玩家和策略的博弈中都存在，并且在允许混合策略的情况下具有理想的性质，但它也存在一些缺陷。纳什均衡不能保证是唯一的（有时甚至存在无穷多个纳什均衡），并且似乎并不总是对应一个合理的结果（参见 Hargreaves Heap 和 Varoufakis，2004），有时与人们对什么应该算作合理结果的直觉相冲突。相比之下，可以证明完全混合的进化稳定策略是唯一的，最多只有有限数量的进化稳定策略，并且几个直观的进化稳定定义与 Maynard Smith 和 Price 的原始定义等价。

很快人们意识到，进化博弈论本身存在着与均衡选择问题类似的结构性问题。提出了几个竞争的进化稳定定义，每个定义都有一定的直观优势。此外，随着对静态和动态进化博弈论之间联系的详细探索，发现静态进化稳定概念与动态稳定性之间最多只有一个不完美的匹配。此外，进化博弈论的动态模型导致了从传统博弈论的角度来看明显不合理的结果，例如保留严格被支配的策略。

## 2. 演化博弈论的两种方法

有两种方法可以用于演化博弈论。第一种方法源自 Maynard Smith 和 Price 的工作，使用演化稳定策略的概念作为主要的分析工具。第二种方法构建了一个明确的模型，描述策略在人口中变化的过程，并研究了模型内演化动态的属性。

因此第一种方法可以被认为提供了演化稳定性的静态概念分析。“静态”是因为尽管给出了演化稳定性的定义，但通常这些定义并不涉及人口中行为（或策略）变化的基础过程。相比之下，第二种方法并不尝试定义演化稳定性的概念：一旦人口动态的模型被指定，所有用于分析动力系统的标准稳定性概念都可以被运用。

### 2.1 演化稳定性的定义

在博弈论中，主要的解决方案概念是纳什均衡。纳什均衡是一组策略配置（即，将策略分配给每个玩家），这是一种互为最佳回应，意味着没有玩家有任何动机偏离其选择的策略。

要了解为什么传统的博弈论解决方案概念纳什均衡太弱以捕捉演化稳定性的概念，请考虑图 1 中的游戏。在纯策略中有两个纳什均衡：(S1，S1)和(S2，S2)。由于纳什均衡是一组互为最佳回应的策略，没有玩家可以通过采取不同的策略来提高他们的回报，但是纳什均衡允许一种可能性，即偏离平衡策略的玩家接收相同的回报。这是(S2，S2)均衡的情况。这就是为什么纳什均衡不足以实现演化稳定性的原因：它允许从平衡中偏离的可能性，最终导致现有策略的替换。

要看到这一点，假设一个人口中的个体都遵循策略 S2。如果出现了一个玩策略 S1 的突变体，那么 S1 突变体的收益将与整个人口的其他人一样，因此对该变异体没有选择压力。如果出现第二个变异体，通过 S1-S1 互动赢得的收益将使两者的适应度均优于人口的平均适应度。这将使 S1 变异体得以传播并最终接管整个人口。

|  | **S1**      | S2    |
| -- | ------- | ------- |
| **S1** | (2,2) | (1,1) |
| **S2** | (1,1) | (1,1) |

图 1. 纳什均衡不足以捕捉纳什均衡的概念

一个严格的纳什均衡是指任何一个玩家从其均衡策略中偏离都会使该玩家处于更糟糕的境地。虽然严格的纳什均衡在直观上捕捉到了进化稳定的一种意义（可以被看作是一种“局部最优解”），但也可以证明，严格的纳什均衡过于强大，无法一般地捕捉到进化稳定的概念。

为了看清这一点，考虑鹰-鸽博弈，由梅纳德·史密斯和普赖斯在他们的 1973 年论文《动物冲突的逻辑》中进行了分析。在这个博弈中，两个个体竞争一个固定价值 V 的资源。（在生物学背景下，资源的价值 V 对应于获得资源的个体达尔文适应度的增加；在文化背景下，资源的价值 V 需要给予一个更适合具体模型的替代解释。）每个个体只能遵循下面两种策略之一：

| ** 鹰。** | 发起攻击行为，并且直到受伤或对手退缩才停止。 |
| ----------- | ---------------------------------------------- |
| **Dove.**          | 如果对手发起攻击行为，立即撤退。             |

现在假设以下情况：

1. 每当两个玩家都采取攻击性行为时，最终会导致冲突，两者受伤的可能性相等。
2. 冲突会使受伤一方的个体适应度减少一个常数值 C。
3. 当一个 Hawk 遇到一个 Dove 时，Dove 立即退却，而 Hawk 获得资源。
4. 当两个 Dove 相遇时，资源平均分配给它们。

鉴于此，Hawk-Dove 游戏的适应度回报根据以下矩阵进行总结：

|         | ** 鹰**       | ** 鸽子** |
| --------- | --------------- | ----------- |
| ** 鹰** | (V−C2,V−C2) | (V,0)     |
| **Dove**        | (0, V)        | (V2, V2)  |

图 2. 鹰-鸽博弈。 （假设 V<C，否则鹰会主导鸽。）

鹰-鸽博弈在纯策略中没有纳什均衡点，而在混合策略中有且仅有一个纳什均衡点。混合策略纳什均衡点是指两个个体以概率 VC 玩鹰，以概率 1−VC 玩鸽。将这个策略记为σ。根据混合策略纳什均衡的基本定理（参见 Gintis, 2009），有π(鹰∣σ)=π(鸽∣σ)=π(σ∣σ)，其中“π(x∣y)”表示使用策略 x 对抗使用策略 y 时所获得的收益。由此可得，对于任何其他混合策略μ，有π(μ∣σ)=π(σ∣σ)，因此纳什均衡并不严格。然而，一个每个人都遵循策略σ的群体仍然能够抵抗入侵，因为可以证明π(σ∣μ)>π(μ∣μ)。也就是说，现有策略σ在与任何突变策略μ对战时都能获得更高的收益，而突变策略在与自身对战时所获得的收益较低。

这些考虑使得 Maynard Smith（1982）提出了以下定义：[1]

定义。如果对于所有其他策略μ≠σ，要么π(σ∣σ)>π(μ∣σ)，要么π(σ∣σ)=π(μ∣σ)且π(σ∣μ)>π(μ∣μ)，那么策略σ就是一个进化稳定策略（ESS）。

 或者另一种选择：

定义。如果且仅如果对于所有其他策略μ≠σ，策略σ是一个演化稳定策略（ESS），那么π(σ∣σ)≥π(μ∣σ)。

1. π(σ∣σ)≥π(μ∣σ)
2. 如果π(σ∣σ)=π(μ∣σ)，那么π(σ∣μ)>π(μ∣μ)。

第二种定义虽然在逻辑上与第一种等价，但它的优势在于清楚表明每一种进化稳定策略也是一个纳什均衡。第一种定义是来自梅纳德·史密斯(Maynard Smith)，它的优势在于明确指出每一个严格的纳什均衡也是进化稳定的。

由此可见，一种进化稳定策略是一个带有额外二阶稳定准则的纳什均衡。它是对纳什均衡概念的有效强化，因为在有有限多名玩家和有限数量策略的每个博弈中至少存在一个纳什均衡（如果允许混合策略），但不是每个博弈都有进化稳定策略。很容易证明，在图 3 中显示的剪刀石头布游戏中并没有进化稳定策略。（唯一有可能成为进化稳定的候选者是纳什均衡的混合策略σ，它为所有三个纯策略分配相等概率。但由于π(σ∣σ)=π(石头∣σ)和π(σ∣石头)=π(石头∣石头)，它并非进化稳定。）

|           | ** 岩石** | ** 剪刀** | ** 纸** |
| ----------- | ----------- | ----------- | --------- |
| ** 岩石** | (0,0)     | (1,−1)   | (−1,1) |
| ** 剪刀** | (−1,1)   | (0,0)     | (1,−1) |
| ** 论文** | (1,−1    | (−1,1)   | (0,0)   |

图 3. 石头剪刀布游戏没有演化稳定策略。

尽管演化稳定策略并不总是存在，但梅纳德·史密斯和普莱斯对演化稳定策略的定义的一个优点是，它可以被证明等同于另外两个定义的演化稳定性概念。由于这三个演化稳定性定义并不明显相同，它们最终被证明是逻辑上等价的这一事实很有趣。我们在陈述等价结果之前简要讨论下面的这些其他概念。

首先，回顾上面关于图 1 游戏的讨论，我们非正式地提到了一个突变体试图入侵一个整体遵循单一现有策略的种群的想法。为了使这个想法精确化，我们需要引入一些符号：让μ,σ为两种策略，0<ϵ<1。那么ϵμ+(1−ϵ)σ表示以概率ϵ玩μ并以概率 1−ϵ玩σ的策略。然而，我们也可以将其解释为代表一个从一个大种群中随机选择的玩家使用的策略，在这个种群中，大多数（1−ϵ）遵循策略σ，少数（ϵ）遵循试图入侵的策略μ。

定义。如果存在一个¯ϵ>0，使得对于所有的μ≠σ和ϵ∈(0,¯ϵ)，π(σ∣ϵμ+(1−ϵ)σ)>π(μ∣ϵμ+(1−ϵ)σ)，则策略σ具有统一入侵壁垒。

统一入侵壁垒是进化稳定的一个自然概念。它表明，当一个群体都遵循相同的策略σ，除了一小部分突变体之外，他们都遵循单一策略μ时，现有策略σ在混合群体中的预期适应度严格高于入侵策略μ。因此，会有对入侵策略的选择，而在一个足够大的群体中，突变体数量足够少的情况下，σ将是进化稳定的。

进化稳定的第二个概念依赖于这样一种直觉，即稳定策略应该排除漂移的可能性。这就是为什么第 1 图中的纯策略第二纳什均衡存在问题。一种表征这一点的方式如下。

定义。如果存在一个围绕σ的邻域 U，使得对于所有的μ∈U 的策略，其中μ≠σ，都满足π(σ∣μ)>π(μ∣μ)，则称策略σ在本地上是优越的。

然后可以证明以下内容：

定理（Hofbauer 等人，1979 年）以下是等价的：

1. σ 是一个演化稳定策略。
2. σ 具有均匀入侵障碍。
3. σ 在局部上是优越的。

在迈纳德·史密斯和普莱斯原作之后的几年里，演化博弈论提出了替代性的分析解决概念。其中一种替代方案是演化稳定集的概念（参见 Thomas 1984, 1985a, b）。为了激发动力，考虑图 4 所示的游戏。在该游戏中，不存在演化稳定策略，因为 S1 和 S2 互相对抗时会获得相同的回报。然而，包含 S1 和 S2 混合的任何种群在某种意义上是稳定的：尽管在 S1 和 S2 的确切比例上肯定会发生漂移，但无论具体的混合比例如何，种群仍倾向于淘汰任何 S3 或 S4 突变体，这是由于预期适应度的差异造成的。

|            | S1    | S2     | 演化博弈论 | S4      |
| ------------ | ------- | -------- | ------------ | --------- |
| S1         | (1,1) | (1,1)  | (1,12)     | (1,12)  |
| S2         | (1,1) | (1,1)  | (1,12)     | (1,12)  |
| S3         | (12,1 | (12,1) | (12,12)    | (12,12) |
| 演化博弈论 | (12,1 | (12,1) | (12,12)    | (12,12) |

图 4. 一个没有演化稳定策略的博弈，但有一个演化稳定集。

其他分析解概念也存在。Swinkels（1992）提出了平衡演化稳定集的概念，进一步完善了演化稳定集的概念。（每个演化稳定集都包含一些平衡演化稳定集，但并非每个平衡演化稳定集都是演化稳定集。）因此，我们看到，寻找足以捕捉演化稳定概念的静态解概念遇到了一个结构类似于传统博弈论中的均衡选择问题的问题：存在多个竞争的演化稳定概念，所有这些概念都具有一定的直觉合理性。

### 2.2 演化稳定性的动态概念

作为第二种方法的一个例子，考虑著名的囚徒困境。在这个游戏中，个体选择两种策略中的一种，通常称为“合作”和“背叛”。以下是囚徒困境的一般收益矩阵形式：

|           | **Cooperate**      | **Defect**      |
| ----------- | ------- | ------- |
| ** 合作** | (R,R) | (S,T) |
| ** 缺陷** | (T,S) | (P,P) |

图 5.囚徒困境的收益矩阵。

在图 5 中，假设收益满足排序 T>R>P>S 和 T+S2<R。尽管在讨论囚徒困境时经常忽略后一个要求，但这确保在无限重复博弈的情况下，玩家在合作-背叛和背叛-合作之间交替时没有净整体优势。

如果一个玩囚徒困境的个体群体随时间如何演化？我们无法回答这个问题，除非引入一些关于群体性质的假设。首先，假设人口相当大，并且与合作者或背叛者互动的概率等于遵循该策略的人口比例。这使我们能够通过简单地跟踪遵循合作和背叛策略的比例来表示人口的状态。用 pC 和 pD 表示这些比例。用 WC 和 WD 分别表示合作者和背叛者的预期适应度，并让¯¯¯¯¯¯W 表示整个人口的平均适应度。（这些数量可能随时间变化；时间依赖性已被压缩以清晰表示。）在这些假设下，WC、WD 和¯¯¯¯¯¯W 的值可以用人口比例和收益值表示如下，其中 F0 代表个体在任何互动之前的基本适应度水平：

WC=F0+pcπ(C∣C)+pdπ(C∣D)WD=F0+pcπ(D∣C)+pdπ(D∣D)¯¯¯¯¯¯W=pcWC+pdWD

其次，假设下一代中遵循合作和背叛策略的人口比例与当前一代中遵循合作和背叛策略的人口比例相关，按照以下规则：

p′c=pcWC¯¯¯¯¯¯Wp′d=pdWD¯¯¯¯¯¯W

这些转换规则的理由如下：如果 WC<¯¯¯¯¯¯W，则合作的预期适应度低于人口的平均适应度。这意味着背叛比合作更有利，因此我们预期一部分人口会转变。个体转变的速率与合作相对于人口平均适应度的差异成正比。（在这里，我们故意模棱两可，无论是生物还是文化进化，这在这个抽象层次上几乎没有区别。）由于 WC¯¯¯¯¯¯W<1，因此 p′c<pc，这是可以预期的。

我们可以将这些表达式重写为以下形式：

p′c−pc=pc(WC−¯¯¯¯¯¯W)¯¯¯¯¯¯Wp′d−pd=pd(WD−¯¯¯¯¯¯W)¯¯¯¯¯¯W

如果我们假设从一代到下一代的策略频率变化很小，那么这些差分方程可以近似为微分方程：

dpcdt=pc(WC−¯¯¯¯¯¯W)¯¯¯¯¯¯Wdpddt=pd(WD−¯¯¯¯¯¯W)¯¯¯¯¯¯W

这些方程是由泰勒（Taylor）和约克（Jonker）（1978 年）以及齐曼（Zeeman）（1979 年）提出的，为演化博弈论提供连续动态，并被称为复制动力学。

由于对于任何 pc 和 pd 的值，WC<¯¯¯¯¯¯W，未来人口状态将始终比以前少合作者。这在图 6 的图表中表示。

![An empty circle labelled 'Cooperate' has a directed line with arrows leading to a closed circle labelled 'Defect'](https://plato.stanford.edu/entries/game-evolutionary/img82.gif)

图 6：囚徒困境的复制动力模型

此图表解释如下：最左边的点代表人口中每个人都背叛的状态，最右边的点代表每个人都合作的状态，中间点代表包含合作者和背叛者混合的状态。（通过将人口状态映射到图表中的点，当 N%的人口背叛时，将其映射到距最左边点 N%处的线的点。）线上的箭头表示人口随时间的演化轨迹。最右边点处的空心圆表示每个人都合作的状态是不稳定的平衡，即如果人口中的一小部分（任何量ϵ>0）偏离合作策略，则演化动态将使人口远离全合作状态。最左边点处的实心圆表示每个人都背叛的状态是稳定的平衡，即如果人口中的一部分人偏离背叛策略，则演化动态将使人口回到全背叛状态。

虽然复制动力学是演化博弈论中首次使用的动力学，但之后探讨了许多替代动力学。接下来，我们将完全从文化演化的视角讨论演化动力学，这意味着随着时间推移，信念（例如策略）的改变。

在他的《种群博弈与演化动力学》这部全面的作品中，William Sandholm 提供了一个有用的框架，使我们能够将个体使用的特定学习规则与群体水平上的演化动力学联系起来。这可以被视为为演化博弈论提供了"微基础"，类似于个体决策研究为宏观经济学提供了微基础。

我们从对建模学习规则的框架的简要介绍开始，然后给出几个个体学习规则的例子以及在群体水平产生的演化动力学。为简单起见，下面的讨论中省略了所有数学细节；详细内容请参阅 Sandholm（2010）。（概括来说，Sandholm 的框架允许包含多个不相交种群的博弈。这里做出的一个简化假设是只有一个种群。）假定我们有一个对称博弈 G，具有 n 个策略 S1,...,Sn。（对称博弈是指，玩一个特定策略的收益仅取决于其他玩家使用的策略，而不取决于谁玩什么策略。）另外，假设个体能考虑的唯一可能信息是：（1）种群的当前状态，表示为博弈的纯策略分布，和（2）每个策略在当前种群状态下的预期回报。

一个个体学习规则（或者，使用 Sandholm 的术语，修订协议）可以被表示为将这两个信息作为参数的函数，将它们映射到一个包含策略之间条件转换率的矩阵。也就是说，矩阵的 ij 元素包含了策略 Si 的追随者转换为策略 Sj 的速率。这被称为条件转换率，因为 Si→Sj 转换速率通常取决于人口状态和期望收益向量，也即是条件于这两者。请注意，该函数可能实际上并未使用其参数中包含的所有信息：一些学习规则可能比其他规则更复杂。

由此，可以优雅地推导出人口层面的演化动态：人口中追随策略 Si 的比例的瞬时变化率简单地等于追随其他策略者转移到 Si 的总速率，减去当前追随 Si 的人转移到其他策略的总速率。将个体学习规则代入以下方程模式，然后解决产生的方程系统，得到人口层面的动态。

dpidt= (开始使用 Si 的速率) - (停止使用 Si 的速率)

这个通用框架允许人们研究特定学习规则在个体层面和进化动态在种群层面之间的关系。以下是三个例子。

复制动态。假设每个玩家随机选择另一个人口中的某人（所有个体被选择的可能性均相等），并将上一轮比赛中的收益与所选人获得的收益进行比较。如果所选人获得了更高的收益，则玩家以与收益差异成比例的概率采用所选人使用的策略。Schlag（1998）表明，这种学习规则产生了复制动态。

Brown-Nash-von Neumann 动态。产生复制动态的学习规则的一个关键假设是模仿是未来收益的可靠指南。这可能存在两个问题。首先，一个策略的预期收益高于种群平均收益可能仅仅表明当前种群构成的特殊性，并不表明该策略具有任何特定的战略优势。这样的学习规则可能导致大部分人口转而采用一种策略，但其短暂的适应性优势最终会消失。其次，如果一种策略在种群中根本不存在，那么它就没有被模仿的机会。

作为一种替代方案，人们可能会考虑一种学习规则，其中玩家转换到 Si 策略的速率仅取决于 Si 的预期收益是否超过当前时间人口的平均收益。请注意，这种学习规则将个体玩家的理性程度赋予较高的重要性，而不是生成复制动态的学习规则。为什么？这种学习规则要求人们了解可能策略集的全部内容，以及相关的收益矩阵，以便他们可以确定当前人口中缺少的策略是否值得采纳。当将这种学习规则插入上述方案时，就会得到布朗-纳什-冯诺依曼（BNN）动态（参见布朗和冯诺依曼，1950 年）。与复制动态不同，BNN 动态可以向人口介绍尚未代表的新策略。当人口在每个人都玩石头、布或剪刀的状态下开始时，BNN 动态最终将导致所有策略都得到代表的状态。

史密斯动态。生成 BNN 动态的学习规则的一个异常特征是将备选可能策略的预期收益与人口的平均收益进行比较。人们可能会想知道为什么胜过人口平均值是一个明智的比较点，因为人口的平均收益通常实际上不会被任何一种特定的玩家可用策略实现。相反，考虑一种学习规则，它将当前策略的预期收益与当前人口情况下其他可能策略的预期收益进行比较，但只有那些具有更高预期收益的备用策略才有可能被采用。当将这种学习规则插入上述框架时，将生成史密斯（1984 年）首次研究的一种进化动态，因此被称为史密斯动态。

## 3. 动态、稳定性和理性结果

鉴于不同类型的演化动力学数量，如第 2.2 节所示，以及不同概念的演化稳定性数量，如第 2.1 节所示，首先要问的问题是它们之间存在什么关系？第二个问题是演化动力学的各个家族之间以及人们可能认为是“理性”游戏结果之间存在什么关系？对这些问题的答案比人们最初预期的更微妙和复杂。

一种复杂性在于，ESS 是一种可能混合的策略，它满足某些属性。相比之下，上述所有演化动力学都模拟了个体仅采用纯策略的种群。那么，我们如何将这两个概念联系起来呢？

一个自然的建议是将出现在演化稳定策略中的概率解释为种群频率。当以这种方式理解概率时，人们谈论的是演化稳定状态，以强调解释上的差异。然后可以问在什么条件下特定的演化动力学将收敛到演化稳定状态。

在复制动力学的情况下，很明显复制动力学不一定会收敛到一个演化稳定状态。这是因为，正如前面所指出的，如果复制动力学最初不存在，它就不能将策略引入到人口中。因此，如果一个演化稳定状态需要某些纯策略存在，而这些纯策略在初始人口状态中并不存在，那么复制动力学就不会收敛到演化稳定状态。

这在图 6 中可以以特别鲜明的形式看到。在囚徒困境的情况下，如果人口开始于每个人都合作的状态，复制动力学将永远保持在那个状态，因为无法引入背叛的策略。这表明，在复制动力学下，甚至严格支配的策略也可能会持续存在。

也可以在图 6 中看到，只要人口中存在非零比例的背叛者，它们就会增加并最终导致合作灭绝。（在极限情况下，因为复制动力学的另一个特性是任何出现的策略都不会在有限时间内灭绝。）这激励了以下结果：

|                  |         | S2重试  错误原因 |
| ------------------ | --------- | ------------------ |
|                  | (1,1)   | (100,0)          |
| S2重试  错误原因 | (0,100) | (100,100)        |

|  |                           |                           |                        | **Twin重试  错误原因**                          |
| -- | --------------------------- | --------------------------- | ------------------------ | --------------------------- |
|  | (0,0)                     | (1,−1)重试  错误原因     | (−1,1)重试  错误原因  | (−1,1−ε)重试  错误原因 |
|  | (−1,1)重试  错误原因     | (0,0)                     | (1,−1)重试  错误原因  | (1,−1−ε)重试  错误原因 |
|  | (1,−1)重试  错误原因     | (−1,1)重试  错误原因     | (0,0)                  | (0,−ε)重试  错误原因    |
|  | (1−ε,−1)重试  错误原因 | (−1−ε,1)重试  错误原因 | (−ε,0)重试  错误原因 | (−ε,−ε)重试  错误原因 |

 演化博弈论![A mostly white square with sparse black specks](https://plato.stanford.edu/entries/game-evolutionary/img91.gif) | ![A white square moderately filled with small black squares](https://plato.stanford.edu/entries/game-evolutionary/img92.gif) | ![The white square is now almost entirely filled but there are still some patches of white](https://plato.stanford.edu/entries/game-evolutionary/img93.gif)| | --- | --- | --- | --- | | 第一代 | 第二代 | 第三代 | | |![The white square is not mostly filled with a couple of small patches of white](https://plato.stanford.edu/entries/game-evolutionary/img94.gif) | ![An almost entirely black square with a small white speck](https://plato.stanford.edu/entries/game-evolutionary/img95.gif) | ![An entirely black square](https://plato.stanford.edu/entries/game-evolutionary/img96.gif)

| ![A mostly white square with sparse black specks](https://plato.stanford.edu/entries/game-evolutionary/img101.gif)             | ![The blackspecks are larger and now balance the white within the square](https://plato.stanford.edu/entries/game-evolutionary/img102.gif) |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                               |                                                                                                                                           |
| ![A mostly white square with some small black dots and lines](https://plato.stanford.edu/entries/game-evolutionary/img103.gif) | ![A mostly white square with more black dots and lines](https://plato.stanford.edu/entries/game-evolutionary/img104.gif)                   |
|                                                                                                                               |                                                                                                                                           |

| ![A mostly white square with small black specks](https://plato.stanford.edu/entries/game-evolutionary/img111.gif)                 | ![The black splotches now take up much of the square but leave some areas of white](https://plato.stanford.edu/entries/game-evolutionary/img112.gif) | ![A mostly black square with some splotches of white](https://plato.stanford.edu/entries/game-evolutionary/img113.gif)         |
| ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                  |                                                                                                                                                     |                                                                                                                               |
| ![A black square with slightly larger splotches of white](https://plato.stanford.edu/entries/game-evolutionary/img114.gif)        | ![A square with splotches of black and white mixed](https://plato.stanford.edu/entries/game-evolutionary/img115.gif)                                 | ![A square with more large splotches of white and less black](https://plato.stanford.edu/entries/game-evolutionary/img116.gif) |
|                                                                                                                                  |                                                                                                                                                     |                                                                                                                               |
| ![A square of large white splotches and smaller black splotches](https://plato.stanford.edu/entries/game-evolutionary/img117.gif) | ![A square with some large and some small splotches of black and white](https://plato.stanford.edu/entries/game-evolutionary/img118.gif)             |                                                                                                                               |
|                                                                                                                                  |                                                                                                                                                     |                                                                                                                               |

## 

### 

|  |       |       |
| -- | ------- | ------- |
|  | (0,1) | (1,0) |
|  | (1,0) | (0,1) |

### 

### 

>

## 

### 

>

![A graph with Player 1 on the xaxis and Player 2 on the yaxis A line goes from 0,10 to 10,0 and the triangle below the line is filled The line is labelled pisi,si = si if si  si = 10, and = 0 otherwise](https://plato.stanford.edu/entries/game-evolutionary/dtd.gif)

| ![A graph of Frequency in population vs Time with three curves labelled 'Demand 4', 'Demand 5', and 'Demand 6' At time 0, Demand 4 starts at 05, rising to 5 at time 4 and decending to 0 and time 10 Demand 5 starts just above 05 rising slowly at first then rising faster around time 45 and asymptotically approaching 10 around time 9 Demand 6 starts at 15, peaks at 25 at time 2 and then descends to 0 around time 6](https://plato.stanford.edu/entries/game-evolutionary/dtd-fig-1.gif) |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

| ![A graph of Frequency in population vs Time with three curves labelled 'Demand 4', 'Demand 5', and 'Demand 6' At time 0, Demand 4 start at 8 and rises asymptotically to 68 Demand 5 starts at 0, rising to 02 at time 2 and back to 0 around time 6 Demand 6 starts at 025 rising to 35 at time 25 and back down asymptotically to 34 by time 5](https://plato.stanford.edu/entries/game-evolutionary/dtd-fig-2.gif) |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                                                                                                                                                                                                                                                       |

| ![image](https://plato.stanford.edu/entries/game-evolutionary/nash-4-5-6-simplex-nobox.gif) | ![image](https://plato.stanford.edu/entries/game-evolutionary/nash-4-5-6-corr-1.gif) |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|                                                                                            |                                                                                     |
| ![image](https://plato.stanford.edu/entries/game-evolutionary/nash-4-5-6-corr-2.gif)        |                                                                                     |
|                                                                                            |                                                                                     |

>

### 

>

虽然刘易斯允许“观众”不止一个人，但更常见的是考虑由两人玩的发件人接收者游戏，因此只有一个单一接收者（或者按刘易斯的术语，观众的一个单一成员）。[11] 为简单起见，接下来我们将考虑一个有两个世界状态{S1，S2}、两个信号{σ1，σ2}和两个回应{r1，r2}的双人发件人接收者游戏。（我们将看到后面为什么分析更大的发件人接收者游戏变得愈发困难。）

请注意，在他对发件人接收者游戏的定义的第（2）点中，刘易斯需要两件事情：世界状态有唯一的最佳回应（这就是要求 F 是一一对应的含义），并且每个观众都同意这一点。由于我们正在考虑只有一个单一回应者的情况，第二个要求是多余的。对于两个世界状态和两个回应的情况，满足刘易斯要求的分配回应给世界状态的方法只有两种。它们如下（其中 X⇒Y 表示“在世界状态 X 下，最佳回应是做 Y”）：

1. S1⇒r1，S2⇒r2.
2.

有多少发信者策略？因为我们允许同一个信号可能被发送到多个世界状态，所以在给定状态 S1 时有两种信号选择，给定状态 S2 时也有两种信号选择。这意味着有四种可能的发信者策略。这些策略如下（其中 'X→Y' 意味着当世界状态为 X 时，发信者会发送信号 Y）：

> 发信者 1：S1→σ1，S2→σ1。
> 发信者 2：S1→σ1，S2→σ2。
> 发送者 3：S1→σ2，S2→σ1。
> 发送者 4：S1→σ2，S2→σ2。

接收者的策略是什么？在这里，从 Lewis 原始定义的“观众的应变计划”中偏离被证明是有用的。相反，让我们把接收者的策略定义为从信号集合到响应集合的函数。与发送者的情况类似，我们允许接收者对更多的信号执行相同的响应。基于对称性，这意味着有 4 种可能的接收者策略。这些接收者策略是：

> 接收者 1: σ1→r1,σ2→r1.
> 接收者 2: σ1→r1,σ2→r2.
> 接收者 3: σ1→r2,σ2→r1.
> 收信人 4: σ1→r2,σ2→r2.

如果发件人和收件人的角色被永久分配给个人——正如 Lewis 所设想的那样——那么只有两个信号系统：⟨Sender 2, Receiver 2⟩ 和 ⟨Sender 3, Receiver 3⟩。所有其他可能的策略组合导致玩家无法协调。协调失败是因为发件人和收件人仅在一个实例中将适当的动作与世界状态配对，例如 ⟨Sender 1, Receiver 1⟩，或者完全不配对，如 ⟨Sender 2, Receiver 3⟩。

如果发件人和收件人的角色没有被永久分配给个人怎么办？也就是说，如果自然抛硬币并将一个玩家分配为发件人，另一个玩家分配为收件人，然后让他们玩游戏会发生什么？在这种情况下，玩家的策略需要指定在被分配为发件人时他将做什么，以及在被分配为收件人时他将做什么。由于发送者有四种可能的策略可用，接收者也有四种可能的策略可用，这意味着当发件人和收件人的角色没有被永久分配给个人时，发件者-收件者游戏有总共 16 种可能的策略。在这里，玩家的策略由一个有序对组成（Sender X, Receiver Y），其中 X,Y∈{1,2,3,4}。

1. 玩家 1：(Sender 2, Receiver 2)，玩家 2：(Sender 2, Receiver 2)
2. 玩家 1：(Sender 3, Receiver 3)，玩家 2：(Sender 3, Receiver 3)
3.
4.

当然，信号系统 3 和 4 的问题在于，无论是玩家 1 还是玩家 2，当与自己的克隆对抗时都不会表现良好。这些情况是信号系统在被随机分配到玩发信者-收信者游戏的玩家群体中不起作用的情况。事实上，可以很容易地证明策略（Sender 2, Receiver 2）和（Sender 3, Receiver 3）是唯一的演化稳定策略（参见 Skyrms 1996, 89–90）。

作为对发信者-收信者游戏动态的第一种方法，让我们将注意力限制在四种策略（Sender 1, Receiver 1）、（Sender 2, Receiver 2）、（Sender 3, Receiver 3）和（Sender 4, Receiver 4）上。图 16 说明了在连续复制动态下的状态空间，该发信者-收信者游戏由两种世界状态、两种信号和两种响应组成，玩家被限制为使用前述四种策略中的一种。可以看到，在几乎所有情况下，演化会导致人口趋于收敛到两种信号系统中的一种。

| ![image](https://plato.stanford.edu/entries/game-evolutionary/sr-N2-fig01.gif) | ![image](https://plato.stanford.edu/entries/game-evolutionary/sr-N2-fig02.gif) |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| ![image](https://plato.stanford.edu/entries/game-evolutionary/sr-N2-fig03.gif) |                                                                               |

图 16：信号系统的演化。

图 17 说明了复制动力学的结果（对于单一种群模型的一次运行），其中表示了所有 16 种可能的策略。我们看到，对于这组特定的初始条件，人口最终会收敛到上面确定的纯 Lewisian 信号系统之一。

![A graph of Frequency in population vs Time with several curves in different colors All start with frequency under 02 at time 0 and all but one hit frequency 0 by time 75 The other curves stays low until time 35 and then rises sharply, asymptotically towards 10 by time 75](https://plato.stanford.edu/entries/game-evolutionary/sender-receiver-1.gif)

图 17：信号系统在复制动力学下的演化。

当世界的状态数、信号数和行动数从 2 增加时，情况迅速变得更加复杂。如果世界有 N 个状态，N 个信号和 N 个行动，那么可能策略的总数等于 N2N。对于 N=2，这意味着有 16 种可能的策略，正如我们所见。对于 N=3，有 729 种可能的策略，当 N=4 时，一个信号问题有 65,536 种可能的策略。鉴于此，人们可能会认为进化很难确定最佳的信号系统。

这样的直觉是正确的。Hofbauer 和 Hutteger（2008）表明，在信号博弈中，复制动力学往往会收敛到次优结果。在这些次优结果中，将出现汇合或部分汇合均衡。汇合均衡发生在发送者无论世界状态如何都使用相同信号的情况下。部分汇合均衡发生在发送者能够区分某些世界状态但不能区分其他状态的情况下。作为部分汇合均衡的一个例子，考虑当 N=3 的情况下以下策略：假设发送者在世界状态 1 发送信号 1，在世界状态 2 和 3 发送信号 2。此外，假设接收者在收到信号 1 时执行动作 1，在收到信号 2 和 3 时执行动作 2。如果所有世界状态是等概率的，这就是一个部分汇合均衡。鉴于发送者不区分世界状态 2 和 3，接收者无法通过对信号 2 做出不同反应来改善自己的回报。鉴于接收者的特定反应行为，发送者无法通过试图区分世界状态 2 和 3 来改善自己的回报。

## 6. 演化博弈论的哲学问题

在社会科学家和哲学家中对演化博弈论的兴趣日益增长，主要源自其应用于人类主体的哲学问题。

### 6.1 文化演化解释中的适应度含义

正如前面所指出的，演化博弈论模型通常可以被赋予生物学和文化演化两种解释。在生物学解释中，类似于传统博弈论中的“效用”的数值量对应于个体的适应度（通常是达尔文适应度）[ 15]。在文化演化解释中，如何解释“适应度”呢？

在许多情况下，文化演化解释中的适应度直接衡量某种客观数量，可以安全地假定（1）个体总是希望得到更多而不是更少，以及（2）人际比较是有意义的。根据所建模的特定问题，金钱、蛋糕片或土地面积可能是适当的文化演化解释。要求文化演化博弈论模型中的适应度符合这种解释约束严重限制了可以解决的问题类型。更有用的文化演化框架将提供一个更一般的理论，不要求个体适应度是某种真实数量的线性（或严格递增）函数，比如食物数量。

### 

###

## Bibliography

* Akin, Ethan (1980). “Domination or equilibrium,” *Mathematical Biosciences*, vol. 50(3-4): 239–250.
* Alexander, J. McKenzie (2000). “Evolutionary Explanations of Distributive Justice,” *Philosophy of Science*, 67: 490–516.
* ––– (2007). *The Structural Evolution of Morality*, Cambridge: Cambridge University Press.
* Alexander, Jason and Brian Skyrms (1999). “Bargaining with Neighbors: Is Justice Contagious?” *Journal of Philosophy*, 96 (11): 588–598.
* Axelrod, R. (1984). *The Evolution of Cooperation*. New York: Basic Books.
* ––– (1986). “An evolutionary approach to norms,” *American Political Science Review*, 80(4): 1095–1111.
* Barrett, Jeffrey A. (2007). “Dynamic Partitioning and the Conventionality of Kinds,” *Philosophy of Science*, 74 (4): 527–546.
* Bicchieri, Cristina (1999). “Local Fairness,” *Philosophy and Phenomenological Research*, 59(1): 229–236.
* ––– (2006). *The Grammar of Society*, Cambridge: Cambridge University Press.
* Binmore, Ken and Samuelson, Larry (1994). “An Economist’s Perspective on the Evolution of Norms,” *Journal of Institutional and Theoretical Economics*, 150 (1): 45–63.
* Boehm, C. (1982). “The evolutionary development of morality as an effect of dominance behavior and conflict interference,” *Journal of Social and Biological Structures*, 5: 413–421.
* Bögers, Tilman and Sarin, R. (1996). “Naive Reinforcement and Replicator Dynamics,” Working Paper, Centre for Economic Learning and Social Evolution, University College London.
* Brown, George W. and John von Neumann (1950). “Solutions of Games by Differential Equations,” in *Contributions to the Theory of Games*, Princeton University Press.
* Chalub, F.A.C.C., Santos, F.C. and J.M. Pacheco (2006). “The evolution of norms,” *Journal of Theoretical Biology*, 241: 233–240.
* Clemens, Christiane and Thomas Riechmann (2006). “Evolutionary Dynamics in Public Goods Games,” *Computational Economics*, 28: 399–420.
* D’Arms, Justin (1996). “Sex, Fairness, and the Theory of Games,” *Journal of Philosophy*, 93 (12): 615–627.
* ––– (2000). “When Evolutionary Game Theory Explains Morality, What Does It Explain?” *Journal of Consciousness Studies* 7(1–2): 296–299.
* D’Arms, Justin, Robert Batterman, and Krzyzstof Górny (1998). “Game Theoretic Explanations and the Evolution of Justice,” *Philosophy of Science*, 65: 76–102.
* Danielson, P. (1998). “Critical Notice: *Evolution of the Social Contract*,” *Canadian Journal of Philosophy*, 28 (4): 627–652.
* Enquist, Magnus and Stefano Ghirlanda (2007). “Evolution of Social Learning Does Not Explain the Origin of Human Cumulative Culture,” *Journal of Theoretical Biology*, 246: 129–135.
* Enquist, M., Ghirlanda, S., Jarrick, A., and Wachtmeister, C. A. (2008). “Why Does Human Culture Increase Exponentially?” *Theoretical Population Biology*, 74: 46–55.
* Fishman, Michael A. (2006). “Involuntary defection and the evolutionary origins of empathy,” *Journal of Theoretical Biology*, 242: 873–879.
* Fisher, R. A. (1930). *The Genetic Theory of Natural Selection*, Oxford, Clarendon Press.
* Fletcher, Jeffrey A. and Martin Zwick (2007). “The evolution of altruism: Game theory in multilevel selection and inclusive fitness,” *Journal of Theoretical Biology*, 245: 26–36.
* Gintis, Herbert (2000). “Classical Versus Evolutionary Game Theory,” *Journal of Consciousness Studies*, 7 (1–2): 300–304.
* ––– (2007). “The evolution of private property,” *Journal of Economic Behavior & Organization*, 64: 1–16.
* ––– (2009). *Game Theory Evolving*, Princeton University Press.
* Gintis, Herbert, Samuel Bowles, Robert Boyd and Ernst Fehr (2003). “Explaining altruistic behavior in humans,” *Evolution and Human Behavior*, 24: 153–172.
* Hargreaves Heap, Shaun P. and Varoufakis, Yanis (2004). *Game Theory: A Critical Text*, Routledge.
* Harms, William (2000). “The Evolution of Cooperation in Hostile Environments,” *Journal of Consciousness Studies*, 7 (1–2): 308–313.
* Harms, William and Brian Skyrms (2008). “Evolution of Moral Norms,” in *The Oxford Handbook of Philosophy of Biology*, Oxford: Oxford University Press.
* Harsanyi, J. (1953). “Cardinal Utility in Welfare Economics and the Theory of Risk Taking,” *Journal of Political Economy*, 61: 434–435.
* Hauert, Christoph (2006). “Spatial Effects in Social Dilemmas,” *Journal of Theoretical Biology*, 240: 627–636.
* Hauert, Christoph, Franziska Michor, Martin A. Nowak, and Michael Doebeli (2006). “Synergy and discounting of cooperation in social dilemmas,” *Journal of Theoretical Biology*, 239: 195–202.
* Hauert, Christoph, Silvia De Monte, Josef Hofbauer and Karl Sigmund (2002). “Replicator Dynamics for Optional Public Goods Games,” *Journal of Theoretical Biology*, 218: 187–194.
* Hausken, Kjell, and Jack Hirshleifer (2008). “Truthful Signalling, the Heritability Paradox, and the Malthusian Equi-Marginal Principle,” *Theoretical Population Biology*, 73: 11–23.
* Hofbauer, Josef and Simon Huttegger (2008). “Feasibility of Communication in Binary Signaling Games,” *Journal of Theoretical Biology*, 254: 843–849.
* Hofbauer, Josef, P. Schuster and K. Sigmund (1979). “A note on evolutionary stable strategies and game dynamics”. *Journal of Theoretical Biology*, 81:609–12.
* Hofbauer, Josef P. and William H. Sandholm (2011). “Survival of dominated strategies under evolutionary dynamics”. *Theoretical Economics*, 6:341–377.
* Huberman, Bernardo A. and Glance, Natalie S. (1993). “Evolutionary Games and Computer Simulations,” *Proceedings of the National Academy of Sciences of the USA*, 90 (16): 7716–7718.
* Hurd, Peter L. (1995). “Communication in Discrete Action-Response Games,” *Journal of Theoretical Biology*, 174: 217–222.
* Jäger, Gerhard (2008). “Evolutionary Stability Conditions for Signaling Games with Costly Signals,” *Journal of Theoretical Biology*, 253: 131–141.
* Kameda, Tatsuya and Daisuke Nakanishi (2003). “Does social/cultural learning increase human adaptability? Rogers’s question revisited,” *Evolution and Human Behavior*, 24: 242–260.
* Kendal, Jeremy, Marcus W. Feldman, and Kenichi Aoki (2006). “Cultural coevolution of norm adoption and enforcement when punishers are rewarded or non-punishers are punished,” *Theoretical Population Biology*, 70: 10–25.
* Kitcher, Philip (1999). “Games Social Animals Play: Commentary on Brian Skyrms’ *Evolution of the Social Contract*,” *Philosophy and Phenomenological Research*, 59(1): 221–228.
* Krebs, Dennis (2000). “Evolutionary Games and Morality,” *Journal of Consciousness Studies*, 7 (1–2): 313–321.
* Lewis, David (1969). *Convention*, Blackwell Publishers.
* Lewontin, R. C. (1961). “Evolution and the Theory of Games” *Journal of Theoretical Biology*, 1: 382–403.
* Luce, R. Duncan and Howard Raiffa (1957). *Games and Decisions: Introduction and Critical Survey*, New York: John Wiley and Sons.
* Maynard Smith, John (1972). “Game Theory and the Evolution of Fighting,” in *On Evolution*, Edinburgh University Press.
* Maynard Smith, John (1976). “Evolution and the Theory of Games,” *American Scientist*, 64 (1): 41–45.
* Maynard Smith, John (1982). *Evolution and the Theory of Games*, Cambridge: Cambridge University Press.
* Maynard Smith, John and George Price (1973). “The Logic of Animal Conflict” *Nature*, 146: 15–18.
* Nakahashi, Wataru (2007). “The Evolution of Conformist Transmission in Social Learning when the Environment Changes Periodically,” *Theoretical Population Biology*, 72: 52–66.
* Nash, John F. (1950). “Equilibrium points in n-person games,” *Proceedings of the National Academy of Sciences*, 36(1):48–49.
* Nowak, Martin A. and May, Robert M. (1992). “Evolutionary Games and Spatial Chaos,” *Nature*, 359 (6398): 826–829.
* ––– (1993). “The Spatial Dilemmas of Evolution,” *International Journal of Bifurcation and Chaos*, 3: 35–78.
* Nowak, Martin A., Joshua B. Plotkin, and David C. Krakauer (1999). “The Evolutionary Language Game,” *Journal of Theoretical Biology*, 200: 147–162.
* Ostrom, Elinor (2000). “Collective Action and the Evolution of Social Norms,” *Journal of Economic Perspectives*, 14 (3): 137–158.
* Page, K. M. and M. A. Nowak (2002). “Empathy leads to fairness,” *Bulletin of Mathematical Biology*, 64: 1101–1116.
* Pawlowitsch, C. (2007). “Finite populations choose an optimal language,” *Journal of Theoretical Biology*, 249: 606–616.
* ––– (2008). “Why evolution does not always lead to an optimal signaling system,” *Games and Economic Behavior*, 63: 203–226.
* Rogers, A. R. (1988). “Does biology constrain culture?” *American Anthropologist*, 90: 819–831.
* ––– (1997). *Evolutionary Games and Equilibrium Selection*. (Series: Economic Learning and Social Evolution), Cambridge, Massachusetts: MIT Press.
* Sánchez, Angel and José A. Cuesta (2005). “Altruism may arise from individual selection,” *Journal of Theoretical Biology*, 235: 233–240.
* Sandholm, William (2010). *Population Games and Evolutionary Dynamics*, MIT Press.
* Schlag, Karl H. (1998). “Why Imitate, and If So, How? A Boundedly Rational Approach to Multi-armed Bandits,” *Journal of Economic Theory*, 78: 130–156.
* Skyrms, Brian (1996). *Evolution of the Social Contract*, Cambridge: Cambridge University Press.
* ––– (2004). *The Stag Hunt and the Evolution of Social Structure*, Cambridge: Cambridge University Press.
* ––– (2010). *Signals: Evolution, Learning, & Information*, Oxford University Press.
* Smith, M. J. (1984). “The stability of a dynamic model of traffic assignment: An application of a method of Lyapunov,” *Transportation Science* 18:245–252.
* Swinkels, J. (1992). “Evolutionary stability with equilibrium entrants,” *Journal of Economic Theory,* 57:306–332.
* Taylor, Peter D. and Leo B. Jonker (1978). “Evolutionary Stable Strategies and Game Dynamics,” *Mathematical Biosciences*, 40: 145–156.
* Thomas, B. (1984). “Evolutionary Stability: States and Strategies,” *Theoretical Population Biology*, 26: 49–67.
* ––– (1985a). “Evolutionary Stable Sets in Mixed-Strategist Models,” *Theoretical Population Biology*, 28: 332–341.
* ––– (1985b). “On Evolutionary Stable Sets,” *Journal of Mathematical Biology*, 22: 105–115.
* Trivers, Robert L. (1971). “The evolution of reciprocal altruism,” *The Quarterly Review of Biology*, 46: 35–57.
* von Neumann, John and Oskar Morgenstern (1953). *Theory of Games and Economic Behavior* (3rd ed.) Princeton: Princeton University Press.
* Wakano, Joe Yuichiro, Kenichi Aoki and Marcus W. Feldman (2004). “Evolution of social learning: a mathematical analysis,” *Theoretical Population Biology*, 66: 249–258.
* Wakano, Joe Yuichiro and Kenichi Aoki (2006). “A mixed strategy model for the emergence and intensification of social learning in a periodically changing natural environment,” *Theoretical Population Biology*, 70: 486–497.
* Weibull, Juergen W. (1995). *Evolutionary Game Theory*, Cambridge, MA: The MIT Press.
* Zeeman, E.C. (1979). “Population dynamics from game theory,” in *Proc. Int. Conf. Global Theory of Dynamical Systems*, Northwestern: Evanston.
* Zollman, Kevin (2005). “Talking to Neighbors: The Evolution of Regional Meaning,” *Philosophy of Science*, 72: 69–85.

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=game-evolutionary). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/game-evolutionary/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=game-evolutionary&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](https://philpapers.org/sep/game-evolutionary/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* [Evolving Artificial Moral Ecologies](http://www.ethics.ubc.ca/eame/), (with interactive simulators), by Peter Danielson (U. British Columbia) and William Harms (Bowling Green State).
* [Brookings Center on Social and Economic Dynamics](http://www.brookings.edu/dynamics.aspx).
* [Complexity of Cooperation](http://www-personal.umich.edu/~axe/ComplexCoop.html), website on Robert Axelrod's book.

## Related Entries

[altruism](https://plato.stanford.edu/entries/altruism/) | [altruism: biological](https://plato.stanford.edu/entries/altruism-biological/) | [evolution](https://plato.stanford.edu/entries/evolution/) | [evolution: cultural](https://plato.stanford.edu/entries/evolution-cultural/) | [game theory](https://plato.stanford.edu/entries/game-theory/) | [prisoner’s dilemma](https://plato.stanford.edu/entries/prisoner-dilemma/)

[Copyright © 2021](https://plato.stanford.edu/info.html#c) by  
J. McKenzie Alexander <[*jalex@lse.ac.uk*](mailto:jalex%40lse%2eac%2euk)>
