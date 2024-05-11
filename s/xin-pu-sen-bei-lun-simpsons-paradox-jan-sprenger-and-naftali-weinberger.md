# 辛普森悖论 Simpson’s paradox (Jan Sprenger and Naftali Weinberger)

*首次发表于 2021 年 3 月 24 日星期三*

辛普森悖论是一种统计现象，当将人群分为亚群时，两个变量之间的关联在人群中出现、消失或反转。例如，两个变量在人群中可能呈正相关，但在所有亚群中可能是独立的，甚至是负相关的。从数学和概率论的角度来看，展示这种悖论的案例并不成问题，但仍然让许多人感到惊讶。此外，这种悖论对于依赖概率的各个领域都有影响，包括决策理论、因果推断和进化生物学。最后，这种悖论在流行病学和歧视研究等许多领域都有许多实例，理解这种悖论对于从数据中得出正确结论至关重要。

以下文章对这种悖论进行了数学分析，解释了它在因果推理和推断中的作用，比较了使这种悖论看起来悖论的理论，并调查了它在不同领域的应用。

---

## 1. 引言

我们从具体数据的例子开始解释这个悖论。表 1 中的数字总结了一种医疗治疗对整体人口（N = 52）以及男性和女性分别产生的效果：

| | 整体人口，N=52 | 男性 (M)，N=20 | 女性 (¬M)，N=32 | | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | | | 成功 (S) | 失败 (¬S) | 成功率 | 成功 | 失败 | 成功率 | 成功 | 失败 | 成功率 | | 治疗 (T) | 20 | 20 | 50% | 8 | 5 | ≈ 61% | 12 | 15 | ≈ 44% | | 对照组 (¬T) | 6 | 6 | 50% | 4 | 3 | ≈ 57% | 2 | 3 | ≈ 40% |
(¬T) | 6 | 6 | 50% | 4 | 3 | ≈ 57% | 2 | 3 | ≈ 40% |

表 1：辛普森悖论：在人口层面上，关联类型（正向、负向、独立）在亚群体层面上发生变化。数据取自辛普森的原始示例（1951 年）。

为了叙述方便，我们假设这些频率是对潜在概率的无偏估计。在整体人口层面上，治疗看起来无效，但对男性和女性来说，它导致的成功率比对照组高（男性 61%对 57%，女性 44%对 40%）。将这些比例写成条件概率，其中 T 表示治疗，S 表示成功/康复，M 表示男性亚群体，我们得到

p(S∣T)=p(S∣¬T)

但同时，

p(S∣T,M)>p(S∣¬T,M)p(S∣T,¬M)>p(S∣¬T,¬M)

我们应该使用治疗还是不使用？当我们知道患者的性别时，我们可能会给予治疗，而当我们不知道患者的性别时，这似乎不是正确的做法——尽管我们知道患者要么是男性或女性！

这种现象最早是由卡尔·G·皮尔逊（1899 年）和乔治·U·尤尔（1903 年）在论文中指出的，但是辛普森的短篇论文《解释列联表中的交互作用》（1951 年）讨论了这种关联反转的解释，使得这种现象被称为“辛普森悖论”。然而，这种现象不仅仅局限于总体独立和子群体正相关；例如，这些关联也可能被反转。纳格尔和科恩（1934 年：第 16 章）提供了一个关联反转的例子，作为逻辑学学生的练习的一部分。

理解这个悖论对于从统计数据中得出正确的结论至关重要。举一个涉及这个悖论的最近例子（Kügelgen，Gresele 和 Schölkopf [参见其他互联网资源]），早期数据显示，意大利的新冠病死率整体上高于中国。然而，在每个年龄组中，中国的病死率高于意大利。因此，根据是比较整个人口还是按年龄分组的人口，人们对于这些国家病毒的严重程度得出相反的结论。因此，在这些情况下进行适当的分析对于使用统计数据来制定政策至关重要。

接下来，第 2 节解释了悖论的不同变体，澄清了它们之间的逻辑关系，并确定了悖论发生的确切条件。虽然该部分侧重于对悖论的数学特征的描述，第 3 节侧重于它在因果推断中的作用，对因果关系的概率理论的影响，以及通过基于有向无环图（DAGs）的因果模型对其进行分析（Spirtes，Glymour 和 Scheines 2000；Pearl 2000 [2009]）。

基于这些不同的方法，第 4 节讨论了辛普森悖论为何看起来是悖论，以及它揭示了人类推理中的哪种错误。本节还报告了关于悖论在推理和推断中的普遍性的实证研究结果。第 5 节概述了应用统计学（回归模型）、生物哲学、决策理论和公共政策中悖论的发生和解释。例如，在分析数据以测试种族或性别歧视时，辛普森悖论是相关的（Bickel，Hammel 和 O'Connell 1975）。第 6 节总结了我们的研究结果并得出结论。

## 2. 定义和数学描述

本节展示了辛普森悖论如何在数学上进行描述，它发生的条件以及如何避免。我们首先进一步考虑引言中的具体例子，以建立指导我们理解更多技术结果的直觉。

表 1 中的数据可以转化为成功率或恢复率，表明接受治疗的男性的恢复率高于未接受治疗的男性（大约 61%对 57%），女性也是如此（44%对 40%）。了解为什么这种正向关联在总体数据中消失的关键有两点观察。首先，未接受治疗的男性的恢复率仍然高于接受治疗的女性的恢复率（57%对 44%），这表明恢复不仅与治疗有关，也与性别有关。其次，虽然治疗组中女性占多数（27 比 13），但对照组中男性占多数（7 比 5）。简单来说，治疗和恢复之间缺乏人口层面的相关性是因为男性既更有可能从治疗中恢复，也更不可能进入治疗组。

当我们使用条件概率来表示给定治疗和/或亚种群的恢复率时，这一点变得明显。根据全概率公式，给定治疗和对照的总体恢复率可以写成亚种群恢复率的加权平均值：

p(S∣T)=p(S∣T,M)p(M∣T)+p(S∣T,¬M)p(¬M∣T)p(S∣¬T)=p(S∣¬T,M)p(M∣¬T)+p(S∣¬T,¬M)p(¬M∣¬T)

将表 1 中的数字代入这些方程式计算整体恢复率，我们可以看到第一行是治疗男性和女性的成功率的加权平均值（61%和 44%），而第二行是两个对照组的成功率的加权平均值（57%和 40%）。这些平均值是根据每个组中男性和女性的百分比加权的，在当前情况下，组之间的性别差异导致这两个平均值都是 50%。由于这些权重可以不同，治疗可能会提高男性和女性成功的概率，而不会在整体人口中做到这一点。

后面我们将证明，如果治疗与性别的相关性被打破（例如，通过平衡两种条件下的性别比例），亚群体中的正相关性不会消失。每行中的权重将是相同的 - p（M∣T）= p（M∣¬T），并且亚群体中的相关性将保留在聚合数据中（第 2.2 节的定理 1）。实际上，这种相关性的缺失排除了辛普森悖论。

### 2.1 辛普森悖论的种类

辛普森悖论可以发生在各种类型的数据中，但经典上是针对 2×2 列联表进行的。让 Di=(ai,bi,ci,di)是表示第 i 个子群体中治疗和成功的四维实数向量，让

D=N∑i=1Di=(∑ai,∑bi,∑ci,∑di)

是 N 个子群体的聚合数据集。这些数据应该按照表 2 中所示的方式阅读。

| | 人口 D=D1+D2 | 子人口 D1 | 子人口 D2 | | --- | --- | --- | --- | --- | --- | --- | | | 成功 (S) | 失败 (¬S) | 成功 (S) | 失败 (¬S) | 成功 (S) | 失败 (¬S) | | 治疗 (T) | a1+a2 | b1+b2 | a1 | b1 | a2 | b2 | | 无治疗 (¬T) | c1+c2 | d1+d2 | c1 | d1 | c2 | d2 |

表 2：带有子人口 D1 和 D2 的 2×2 列联表的抽象表示。

设 α(Di) 为衡量治疗和成功之间概率关联强度的指标，其中 Di 为人口。[ 1] 按照惯例，α(Di)=0 表示变量之间没有关联，α(Di)>0 表示正向关联，α(Di)<0 表示负向关联。这可以最好地转化为以下条件

(1)α(Di)⎧⎨⎩>0 当且仅当 aidi>bici;=0 当且仅当 aidi=bici;>0 当且仅当 aidi<bici.

条件 aidi>bici 等价于第一行（“治疗条件”）的成功率高于第二行（“对照条件”）的成功率：

ai/(ai+bi)>ci/(ci+di).

将所有这些应用到我们在表 1 中的数据集中，我们可以看到α(D)=0，尽管α(D1)>0 和α(D2)>0。这是 Samuels（1993）所称的关联反转（AR）的特例。只有当存在这样一个总体，所有分区子总体中的关联是正（i）、负（ii）或零（iii），且总体的关联类型与子总体的关联类型不匹配时，才会发生关联反转。从数学上来说，这意味着对于数据集 D=∑Ni=1Di，以下两个条件之一成立，

(AR1)(AR2)α(D)≤0andα(Di)≥0∀1≤i≤Nα(D)≥0andα(Di)≤0∀1≤i≤N

其中至少有一个不等式必须是严格的。关联反转是 Simpson 悖论的标准类型（Bandyopadhyay 等，2011; Blyth，1972，1973），也是心理学推理或哲学家分析该悖论时最常研究的类型（例如，Cartwright，1979; Eells，1991; Malinas，2001）。

AR 的一个重要特例是，在子群体中没有关联，但在整体数据集中出现了关联：

(YAP)α(Di)=0∀1≤i≤n 但α(D)≠0

参考统计学家乔治·尤尔（1903: 132–134）的开创性工作，Mittal（1991）将其称为尤尔的关联悖论（YAP）。这是变量之间虚假相关的典型情况，这些变量具有共同原因，即在无条件情况下相互依赖（α(D)≠0），但在给定共同原因的值时相互独立（α(Di)=0）。例如，穿着衣服睡觉与第二天早上头痛有关。然而，一旦我们根据前一晚的饮酒量水平对数据进行分层，关联关系就消失了：在相同的醉酒程度下，无论是脱衣上床还是保持穿着衣服的人，头痛的情况都是一样的，其他条件不变。

最后，辛普森悖论的最一般版本是由古德和米塔尔（1987）确定的合并悖论（AMP）。当总体关联程度大于（或小于）子群体中的每个关联程度时，或数学上，

(AMP)α(D)>max1≤i≤Nα(Di)orα(D)<min1≤i≤Nα(Di)。

AMP 挑战了直觉，即总体关联程度由于是个体子群体的“总和”，必须落在该层次上观察到的最小和最大关联程度之间。悖论的逻辑强度与其普遍性和发生频率成反比：YAP⇒AR⇒AMP。非分类数据（例如，双变量实值数据）的悖论变体将在第 5.1 节中讨论。

### 2.2 必要和充分条件

我们继续对辛普森悖论发生的数学条件进行描述。我们已经暗示过，在医学例子中，悖论是由于治疗变量和分区变量之间的相关性引起的，现在我们可以更加精确地说明：

定理 1（Lindley＆Novick 1981; Mittal 1991）：如果α（D）> 0，并且由属性 M 和¬M 所表征的子群体中发生了关联反转（即，α（D1），α（D2）≤0），那么要么

1. M 与 S 和 T 呈正相关；或者
2. M 与¬S 和¬T 呈正相关。

正如定理 1 所清楚表明的那样，M 与 T 之间的缺乏相关性足以排除关联反转（以及 YAP）。这是否也排除了更一般的合并悖论？答案取决于选择哪种关联度量来计算α。辛普森悖论的讨论通常将关联视为治疗组和未治疗组之间成功率的差异，但这只是众多可能性之一（Fitelson 1999）。虽然 M 与 T 之间的缺乏关联足以排除大多数度量（包括差异度量）的合并悖论，但并不排除所有度量，我们将在下面解释。对于不感兴趣具体细节的读者，可以跳过到下一节。

这里是一些广泛使用的数据集（a，b，c，d）的关联度量：

πD = aa + b - cc + dπY = ad - bcN2πR = log(aa + b⋅c + dc)πW = log(aa + c⋅b + db)πO = logadbcπC = log(dc + d⋅a + ba)

这些度量中的一些可以以概率的方式进行表述，并被建议作为临床试验的因果强度和结果度量（Edwards 1963; Eells 1991; Fitelson & Hitchcock 2011; Greenland 1987; Peirce 1884; Sprenger 2018; Sprenger & Stegenga 2017）。例如，πD = p(S∣T) - p(S∣¬T)表示治疗和对照条件下成功率的差异，πR = p(S∣T)/p(S∣¬T)表示治疗和对照条件下成功率的比率，πW 可以解释为治疗对成功的预后证据（即对数贝叶斯因子），πY 是 Yule（1903）的关联度量，πO 是流行病学数据分析中熟悉的对数比率，πC 是 I.J. Good（1960）的因果强度度量。

现在我们考虑不同实验设计排除不同测量的 AMP 的程度。假设个体在亚群中均匀分配到治疗组和对照组。在这种情况下，对于每个亚群，被分配到治疗组和对照组的人数比例相等，实验设计被称为行均匀。具体而言，必须存在λ>0，使得对于任何亚群 i

（行均匀性）ai+bi=λ(ci+di)

特别地，如果我们的样本大且从总体中随机抽样，行均匀性近似成立。

试验的行均匀设计确保潜在混杂因素 M 和处理变量 T 之间的独立性。因此，根据定理 1，它排除了关联反转。此外，行均匀设计足以排除一类广泛的关联度量的 AMP：

定理 2（Good＆Mittal 1987）：如果数据集 D = ∑Di 满足行均匀性，则关联度量πD，πR，πY 和πW 以及πC 避免了混合悖论。对于对数比率πO，它无法避免。

一些研究还展示了列均匀设计，其中成功和失败的比例在所有子群体中保持恒定：

(列均匀性)ai+ci=λ(bi+di)

同样，M 与 S 是独立的。在病例对照研究中，列均匀性可能出现在不同亚群（例如不同医院）中，其中一个亚群的人数与解释属性不匹配，就像在 RCT 中一样。相反，对于每个具有特定属性（例如特定形式的癌症）的人，选择一定数量的没有这种属性的人。列均匀设计也避免了 AR，但在所提出的关联度量中，仅需排除πY 的 AMP。

| | 关联度量 | | --- | --- | --- | --- | --- | --- | --- | | 避免 AMP？ | πD | πR | πO | πY | πW | πC | | 行均匀设计 | 是 | 是 | 否 | 是 | 是 | 是 | | 列均匀设计 | 否 | 否 | 否 | 是 | 否 | 否 | | 两者都是 | 是 | 是 | 是 | 是 | 是 | 是 |

表 3：行和列均匀设计如何避免各种关联度量的混合悖论的概述。

表 3 总结了所有关联度量与 AMP 以及不同形式的实验设计相关的属性。对于对数几率度量πO 的行和列均匀设计都不足以排除 AMP 的行为将在第 5.2 节中讨论。

现在我们确定了数据展示关联反转的最后一个基本条件。看一下图 1，它以图形方式显示了治疗和对照的成功比例。

![a diagram link to extended description below](https://plato.stanford.edu/entries/paradox-simpson/figgeom1.svg)

图 1：协会逆转发生的必要条件的几何表示。如果比例按照左图的顺序排列，悖论可能发生；如果按照右图的顺序排列，悖论不会发生。【图 1 的详细描述在附录中。】

在这两个例子中，治疗成功率对于两个亚群体都高于对照组的成功率。在整体水平上，这种顺序何时会被保留？我们知道每个条件（治疗/对照）的整体成功率受到亚群体中的成功率的限制：

事实 1：假设对于所有的 1≤i≤N，ai,bi>0。那么也有

(2)minaiai+bi≤∑Nj=1aj∑Nj=1(aj+bj)≤maxaiai+bi

这个事实直接来自于总概率法则（证明省略），它给出了关联逆转发生的简单必要条件（AR）：再次转向图 1，它意味着每个条件的整体成功率必须在实线上。因此，AR 不能发生在图 1 的右侧部分，但如果比例按照图 1 左侧的顺序排列，则可以发生。一般来说，当满足以下条件时，可以避免 AR 的发生：

（RH）max1≤i≤Naiai+bi<min1≤i≤Ncici+di 或 min1≤i≤Naiai+bi>max1≤i≤Ncici+di

任何满足（RH）条件的数据集将被称为行同质。相比之下，对于任何给定的违反（RH）条件的比例集合，我们可以找到展示这些相同比例的数据集，使得 AR 确实发生（通过调整子群体的大小；参见 Mittal 1991 的引理 3.1）。然而，既不是行同质性，也不是列同质性的类似条件，也不是它们的结合足以避免合并悖论 AMP。

最后，人们可能对这种悖论出现的频率感兴趣。Pavlides 和 Perlman（2009）的模拟表明，它不会经常发生：AR 的概率的置信区间是均匀先验和（客观的）杰弗里先验的区间[0;0.03]的子集。当然，这种诊断的实际价值取决于抽样假设是否合理，以及整个方法是否适用于研究人员可以根据多个维度将数据分组为子群体的真实数据集。

## 3. 辛普森悖论和因果推断

在哲学文献中，辛普森悖论因其对假设因果关系与概率提升之间系统联系的解释/原理产生的影响而受到持续关注。具体而言，这个悖论揭示了当将一个总体分成子总体时，关于概率提升的事实不一定会被保留。这对基于概率概念的哲学因果推断的解释提出了一系列重要挑战：

1. 在确定概率关系是否具有因果关系时，适当的背景因素是什么？
2. 关联反转对因果推断意味着什么？
3. 辛普森悖论是否威胁因果关系的客观性？

处理这个悖论并回答这些问题的策略对概率因果理论的发展做出了重要贡献（Cartwright 1979; Eells 1991）。在图形因果模型的框架下，最近关于这个悖论的研究提供了不同的答案（例如，Pearl 1988, 2000 [2009]; Spirtes et al. 2000），我们将依次讨论这两种解释。特别是，我们将解释辛普森悖论如何通过混淆和因果效应的可辨识性来进行分析。

### 3.1 概率因果性和辛普森悖论

概率因果关系的早期解释（例如，Reichenbach 1956; Suppes 1970）试图纯粹从概率和时间事实的角度阐明因果主张。根据 Suppes（1970）的解释，如果事件 C 在事件 E 之前发生，并且 C 提高了事件 E 的概率，那么 C 就是事件 E 的原因。正如我们在 2.1 节中已经看到的那样，并非所有的原因都是真正的原因。如果我现在喝一杯浓郁的金色比利时啤酒，我可能会在白天感到开心，但明天也会头疼。然而，开心并不是头疼的原因：相关性是由共同原因-喝啤酒所解释的。喝啤酒的变量屏蔽了其效应之间的概率关系，这意味着当我们对其进行条件约束时，效应之间将是不相关的。Suppes 的解释的关键在于，C 和 E 之间的原因关系只有在 C 之前没有屏蔽 C 和 E 之间关系的因素 F 存在时才是真正的因果关系。

后来的理论家，如 Cartwright（1979）和 Eells（1991），通过将因果主张相对于一个因果同质背景环境进行了进一步的发展，该背景环境由一组变量 K 来指定。考虑 Cartwright 提出的关联反转的以下例子。假设吸烟（S）是心脏病（H）的原因，人们可能会期望吸烟会提高心脏病的概率。然而，情况可能并非如此。假设在一个人群中，吸烟和锻炼（X）之间存在很强的相关性，并且锻炼降低了心脏病的概率，而吸烟提高了心脏病的概率。在这种情况下，吸烟可能会降低心脏病的概率，尽管在 X 或¬X 条件下，S 都会提高 H 的概率。

卡特赖特将这个案例解释如下：原因总是会提高其效果的概率，但这可以被原因与其他变量（这里是 X）之间的相关性“隐藏”。为了分离 C 和 E 之间真正的概率关系，需要在不能发生这种相关性的情境中考虑它：

概率因果关系（卡特赖特）设 K 表示除 C 之外的所有 E 的原因和 C 的效果。那么，只有当相对于 K 中变量值的所有组合，C 提高了 E 的概率时，C 才会引起 E：p(C∣E,K)>p(C∣¬E,K)。

虽然 Suppes 为概率因果关系辩护了一个还原的解释，其中 K 的元素是在没有诉诸因果假设的情况下确定的，但 Cartwright 提出了一个非还原的解释，其中 K 必须包括除 C 本身和 C 与 E 之间有因果关系的任何变量之外的所有 E 的原因。目前的共识是，不依赖于因果概念，很难给出概率因果关系的解释，因此非还原的解释是不可行的（尽管参见 Spohn 2012 中的异议观点）。

尽管非还原的解释不能用来向没有先验因果知识的人解释因果关系，但它们仍然可以阐明如何测试因果主张，并阐明因果关系与概率之间的关系（参见 Woodward 2003: 20–22）。此外，卡特赖特认为她对背景因素包含的一般标准可以避免纯统计解释中的参考类问题（即通过指定用于评估因果主张的相关人群），从而消除了对因果解释客观性的威胁。有关概率因果关系的更多细节请参见相关条目。

### 3.2 特定争议：因果交互作用、平均效应、中介因素

卡特赖特对概率因果解释的创新引发了与辛普森悖论相关的各种争议。我们在这里重点介绍其中的三个。

#### 辩论 1：因果互动

卡特赖特声称，原因在所有背景情境下提高其效果的概率[4]，但许多所谓的原因只在某些情境下提高其效果的概率。在后一种情况下，原因与背景因素相互作用以产生其效果。以卡特赖特自己的例子为例（1979 年：428），摄入酸性毒物通常会导致死亡，但在同时摄入碱性毒物的情况下（这种情况下两者相互抵消），则不会导致死亡。对于概率解释来说，这种交互原因的问题在于它们威胁到了卡特赖特的观点，即概率提高的原因被更强的负面原因所“掩盖”，这种负面原因“主导”它们。这些隐喻表明，原因和其效果之间的概率提高关系反映了变量之间的内在关系，即使在没有表现出来时也存在，这个想法在（卡特赖特 1989 年）中进一步发展。互动意味着原因不是在真空中起作用，而是只在存在背景因素的情况下起作用（有关进一步讨论，请参见奥特 1985 年；伊尔斯 1986 年；哈德卡斯尔 1991 年）。

然而，辛普森悖论不应与因果互动混淆。悖论的独特之处不在于在分割时概率关系的反转，而在于在所有结果的子群体中都发生了反转。

#### 辩论 2：平均效应

Cartwright 要求 K 包括 E 的所有原因，因此相对于均匀的背景环境评估效应。因此，该解释不允许平均效应。例如，假设特定的治疗（T）提高了早产儿（P）而非非早产儿（¬P）患心脏病（H）的概率，并且 P 与 T 不相关。在整个人群中，T 降低或提高 H 的概率的幅度将是 P 和¬P 人群中效应的平均值，按其大小加权。Dupré（1984）主张放弃要求 K 包括 E 的所有原因，从而允许平均效应。

从我们的开头例子中得出的一个诱人的教训是，辛普森悖论是由于对男性和女性人群进行平均化而产生的，而消除它的唯一方法是排除平均效应。然而，仅有因果异质性本身并不会导致悖论。只有在背景因素异质的情况下，如果这些因素与因果变量相关，才会产生关联反转，正如第 2.2 节中定理 1 所证明的那样。

#### 辩论 3：调解者

根据卡特赖特的观点，集合 K 不应包括在 C 和 E 之间具有因果中介关系的变量。这些变量被称为调解者。为了理解为什么，想象一种药物通过在血液中产生一个由变量 Z 表示的化学物质，而不通过其他因素来降低心脏病的风险。如果 C 和 E 没有共同的原因，它们在给定 Z 的条件下将在概率上是独立的。直观上，评估效果时不应将血液化学物质固定，因为它是效果产生的手段。

当因果关系和效果之间存在多条路径时，问题变得更加复杂。赫斯洛（1976）提供了一个例子，即服用避孕药通过血液中的化学物质促进了一种称为血栓形成的血液凝结症，但通过防止怀孕来抑制了血栓形成，而怀孕本身是血栓形成的原因。因此，服用避孕药直观上对血栓形成产生了正面和负面的影响。如果我们对 C 对 E 的净效应感兴趣（而不是通过特定路径的效应），则不应该对调解者进行条件约束（Hitchcock 2001）。然而，对于计算特定路径效应（例如，Pearl 2001；Weinberger 2019）来说，条件约束是必要的。

区分中介因素和共同原因对于辛普森悖论的分析至关重要。例如，因果模型 C→Z→E 和 C←Z→E 展示了相同的条件独立性：C 和 E 在无条件下相关，但在给定 Z 的条件下独立。只有因果知识能够帮助我们决定如何处理关联反转，并且在估计 C 对 E 的因果效应时是否需要对 Z 进行条件约束（在第二个模型中需要，在第一个模型中不需要）。另请参见第 3.4 节。

### 3.3 有向无环图（DAGs）和因果可辨识性

近年来，通过发展用于表示因果假设和根据证据选择候选假设的图形方法（特别是使用有向无环图（DAGs）的方法），因果关系的形式分析得到了显著增强（Pearl 1988, 2000 [2009]; Spirtes et al. 2000）。DAG 包含一组由有向边或箭头连接的节点，使得没有循环（不能通过一组有向箭头从一个节点返回到自身）。在因果背景下，DAG 中的节点是随机变量，箭头对应于直接的因果关系。通常假设 DAG 中的变量集是因果充分的，即包括集合中变量的所有共同原因。

有向无环图(DAGs)使人们能够系统地映射因果假设与联合概率分布之间的关系。它们与概率因果关系文献中的技术重叠并建立在其基础上，但提供了更强大的工具和结果。有关使用 DAGs 进行因果推断的详细介绍，请参阅有关因果模型、因果关系和可操作性以及反事实因果理论的条目。

![two diagrams first has three ovals labeled, Gender, Treatment, and Success The Gender oval has arrows pointing to the other two and the Treatment oval has an arrow pointing to Success Second is a duplicate of the first except the arrow from Gender to Treatment is dotted and a fourth oval, Intervention, also points to Treatment](https://plato.stanford.edu/entries/paradox-simpson/figdag.svg)

图 2：变量 Treatment、Gender 和 Success 之间的关系在 DAG 中的表示，包括对 Treatment 的干预和未干预的情况。

图 2（左侧）展示了我们运行示例的一个合理的 DAG，包括变量 Treatment、Gender 和 Success。Treatment 提供关于 Success 的信息有两种方式。一种是接受治疗的人可能因为接受治疗而更有（或更少）可能康复。另一种是得知某人接受了治疗会提供关于他们可能是男性还是女性的信息，而这些信息与确定他们是否会康复无论他们是否接受治疗都是相关的。

然而，这些图也可以从因果角度进行解释，而在这里，理想干预的概念至关重要：

对于对变量 V 的干预来说，理想干预是指它确定 V 的值，使其不再依赖于 DAG 中的其他原因。从图形上看，我们可以通过添加一个额外的原因 I 来表示干预，这个原因“打断”了所有本来会进入 V 的箭头。

因此，在图 2 中，干预是对治疗的理想干预。对治疗进行干预会破坏与性别之间的证据关系，例如，通过控制每个样本中男性和女性患者的比例，以便任何剩余的治疗和康复之间的概率关系只能通过接受治疗来解释。这样的实验设计，使得治疗和性别在概率上独立，足以排除关联反转（参见第 2.2 节）。

使用理想干预的概念，可以将因果关系解释如下（Pearl 2000 [2009]; Woodward 2003）。只有通过对 C 进行某种理想干预，才能改变 E 的值或概率。这种干预通过消除 C 或 E 之间的任何概率关系，以追溯到共同原因的影响，从而区分因果关系和仅仅是概率依赖关系。然而，这并不意味着只有在可以进行实验干预的情况下才能获得因果知识。图形因果模型的一个关键贡献是它们使人们能够系统地确定何时先前的因果知识使人们能够将特定的概率关系解释为因果关系。

从条件概率分布和干预概率分布之间的差异可以通过在概率计算中补充 do 运算符（do(X)）来形式化表示，其中将运算符应用于变量形式上表示对其进行干预。假设 T、S 和 M 分别表示治疗、成功和性别，并给定图 2 中的图形，给定 T 的观测概率分布不等于对 T 进行干预时的概率分布：

(3)p(S∣T)≠p(S∣do(T))

这两个数量之间的差异是由于 M 对 T 的分布的影响所致。相反，根据有向无环图(DAG)，以下两个表达式是等价的：

(4)p(S∣T,M)=p(S∣do(T),M)

在这种情况下，可以通过在 M 上进行条件约束来推断 T 对 S 的影响。在这种情况下，我们说(4)确定了 T 对 S 的因果效应。更一般地说，可辨识性是有向无环图 G、概率分布 P 和因果量 Q 之间的关系，当且仅当在给定 G 的情况下，Q 由 P 唯一确定时，Q 是可辨识的。相反，当 S 和 T 存在未测量的共同原因时，概率分布与 p(S∣do(T))的任何可能分布兼容。

### 3.4 混杂和 Pearl 对悖论的分析

可辨识性的概念对于理解混杂以及通过图形因果模型分析辛普森悖论至关重要。相对于变量集合 Z，X 和 Y 之间的关系在混杂的情况下是混杂的，当且仅当 P(Y∣X,Z)≠P(Y∣do(X),Z)（即，该关系无法被确定）。混杂变量集是一种偏倚效应测量的变量集。例如，未测量的共同原因是混杂因素，因为它使得无法区分由共同原因导致的变量之间的概率依赖和由它们之间的因果关系导致的概率依赖。辛普森悖论是由第三个变量的混杂引起的。这种混杂的概念可能与常见的口语理解混杂因素作为观察结果的替代解释有所不同。

辨识性的一个有用充分条件是背门准则（Pearl 1993, 2000 [2009: 79]）。首先我们需要介绍一些图形术语。连接 X 和 Y 之间的路径是指连接 X 和 Y 的一组边，可以朝任何方向。如果存在一条从 X 到 Y 的路径，其中所有箭头的方向都相同，那么 Y 是 X 的后代。当 X 和 Y 通过包括一个共同原因的单一路径连接时，例如 X←Z→Y，X 和 Y 通常[6]在无条件的概率上是相关的，但在给定 Z 的条件下是独立的。对于这样的路径，我们说 Z 阻断了 X 和 Y 之间的路径。相反，当 X 和 Y 通过包括一个共同效应的路径连接时，例如 X→Z←Y，只要不在 Z 或 Z 的后代上进行条件约束，路径就会被阻断。这反映了共同效应的独立原因通常在给定共同效应的条件下是相关的。如果在 X 和 Y 之间没有未阻断的“背门路径”，则 X 对 Y 的影响是可辨识的：通过共同原因的所有路径都被阻断，除了因果关系影响其效应的路径之外的所有其他路径都是开放的。

背门准则（Pearl 1993）给定 DAG G 中的变量对{X,Y}，如果存在满足以下条件的变量集合 Z，则 X 对 Y 的影响是可辨识的：

1. Z 中没有节点是 X 的后代，且
2. Z 阻止了包含指向 X 的箭头的 X 和 Y 之间的所有路径。

在这种情况下，X 对 Y 的影响由公式确定

(5)p(Y∣do(X))=∑Zp(Y∣X,Z)p(Z)

方程（5）揭示了通过对 Z 进行分组，可以在人群中平均效果来推导出因果效应的可能性。这正是我们在第 2.2 节中已经看到的：如果接受治疗和成为亚群体的一部分之间没有依赖关系，那么关联关系在总体水平上不能逆转。然而，这样的推导只有在关于变量之间关系的因果假设下才是合法的。读者可以验证，在图 2 中给定的有向无环图中，变量满足反门准则（Z={性别}）[7]。

在我们的原始示例中，治疗增加了每个亚群体中康复的概率，但并没有增加整个人群的概率。一个人是否应该批准使用这种药物呢？因果方法使人们很容易看出为什么应该批准。治疗和成功之间的概率关系是一种证据关系，而不是因果关系。得知某人服用了药物可以提供关于他们性别的证据，而这些信息与预测他们是否会康复相关。但这并不能告诉人们药物是否具有因果功效。要了解这一点，就需要知道在治疗干预下，人群中个体的康复机会会如何改变。这可以通过对性别进行条件处理来确定，这样既可以了解药物的性别特定效应，又可以推导出整个人群的平均效应（使用反门准则）。

![two diagrams first has three ovals labeled Gender, Treatment, and Success The Gender oval has arrows pointing to the other two and the Treatment oval has an arrow pointing to Success Second has three ovals labeled Birth Control, Pregnancy, and Thrombosis The Birth Control oval has arrows pointing to the other two and the Pregnancy oval has an arrow pointing to the Thrombosis oval](https://plato.stanford.edu/entries/paradox-simpson/figint.svg)

图 3：变量治疗、性别和成功的有向无环图（第三个变量=混杂因素），与变量避孕、怀孕和血栓形成的有向无环图（第三个变量=中介因素）相对比。

因此，是否应该根据一个因素将人口分组以确定特定的因果关系，不仅取决于统计分布，而且关键在于一个人的因果背景假设。假设我们考虑一个中间变量，比如 Hesslow（1976）的例子中的怀孕。回想一下，在这个例子中，避孕控制通过血液化学物质对血栓形成产生正面影响，同时通过减少怀孕机会对其产生负面影响。这种情况在图 3 中显示，并与我们的运行示例进行对比，其中第三个变量是混淆因素。为了确定避孕控制对血栓形成的影响，关键是不要以怀孕为条件。如果避孕控制和血栓形成之间没有未测量的共同原因，那么整个人口中避孕控制和血栓形成之间的概率提升关系将可靠地表明服用避孕药会促进血栓形成。

值得强调的是，仅凭统计数据无法区分图 3 中的两种因果结构。左侧模型生成的任何数据也可以由右侧模型的因果结构生成。因此，在一个案例中应该对人口进行分组，而在另一个案例中不应该仅仅基于概率，而需要因果模型提供的额外信息。

与定理 1 一致，Pearl 证明了 Savage（1954）的确定性原则的因果版本（另见第 5.3 节）：

因果确定性原理（Pearl 2016）：在每个子群体中，增加事件 E 的概率的行为 C 也必须增加整个群体中事件 E 的概率，前提是该行为不改变子群体的分布。[8]

例如，如果假设性别不是治疗的结果，那么药物不能同时提高男性和女性康复的概率，但对整个人群的康复没有影响。这个结果为人们为什么经常认为辛普森悖论是悖论提供了一个错误理论。具体来说，Pearl（2000 [2009]，2014）认为人们混淆了观察性陈述 X 提高 Y 的概率与因果性陈述做 X（而不是¬X）会提高 Y 的概率。并且假设分区变量不是 X 的结果，那么做 X 在所有子群体中提高 Y 的概率，但在整个人群中不可能。因此，Pearl 对这个悖论的解释是人们混淆了因果和非因果表达，如果将示例中的条件概率解释为因果关系，辛普森的逆转是不可能的。

### 3.5 含义

无论 Pearl 是否提供了 Simpson 悖论的正确因果解释，这仍然是一个持续争论的话题（Armistead 2014，另见第 4 节）。然而，不容争议的是，最近的因果建模技术使人们能够以比以前更加普遍和精确的方式系统地区分因果和概率性的陈述。虽然 Cartwright 要求将 E 的所有原因都包括在背景环境中，为了消除混淆，只需要固定共同原因（和其他需要阻断反向路径的变量）即可。概率因果理论家在某种程度上意识到，为了消除混淆，并不需要固定效应的所有原因，但他们缺乏一个关于哪些变量集足以识别效应的普遍解释。Simpson 悖论尤为严峻，因为没有办法提供一般条件，使得在对总体进行分割后，表面上的正向因果关系完全消失。使用 Pearl 的框架，可以轻松地证明，只要不对中介变量进行条件约束，如果概率表达式在总体中识别出 X 和 Y 之间的平均正效应，干预 X 必然会在至少某些子总体中提高 Y 的效应（Weinberger 2015）。

转向在概率框架中关于平均效应的辩论，这个事实证明了杜普雷（1984）对平均效应的自由态度，反对像伊尔斯和索伯（1983: 54）这样将其视为“一个可怜的因果概念的借口”的批评者（尽管参见希奇科克 2003: 13-15 和豪斯曼 2010: 56，以了解更多细微差别）。当然，正面的平均效应与在许多亚群体中显著降低效应的原因是相容的。这反映了分区变量可能与感兴趣的原因相互作用的事实。但是，这种可能的相互作用并不会使效应在整个人群中的平均效应变得不真实。

这使我们面临辛普森悖论是否威胁到因果关系的客观性的问题。正确理解，它并不威胁到因果关系的客观性。当然，一个原因可以在一个人群中提高其效应的概率，在另一个人群中降低其效应的概率，或者它可以在整个人群中产生积极的效应，但在其中一些亚群体中却没有。但并不是只有其中一些因果关系是真实的，哲学家因此必须找到一个特权的背景环境，其中真实的关系被揭示出来。这只是关于因果关系的一个事实，不同的人群可能具有不同的交互背景因素集，因此平均效应在人群之间确实会有所不同。

## 4. 辛普森悖论为何具有悖论性？

辛普森悖论并不是以呈现一组不一致的可信命题而至少有一个必须被拒绝的意义上的悖论。正如第 2.2 节所示，数学并不排除在子群体层面上反转关联的可能性。Bandyopadhyay 等人（2011）有助于区分关于辛普森悖论的三个问题：

1. 为什么或以何种意义上辛普森悖论是一个悖论？
2. 对悖论的适当分析是什么？
3. 当面对典型的悖论情况时，应该如何处理？

问题（i）本质上是关于推理心理学的问题：必须解释为什么（在数学上无辜的）关联反转对许多人来说似乎是悖论。这些解释有助于确定导致个体错误地排除关联反转的有效推理形式，并因此回答问题（ii）。这些分析可以区分微妙不同的推理形式，并为实证研究打开大门，以测试人类是否系统性地忽视特定差异。

第 3.4 节已经提出了对这个悖论的一种分析。根据 Pearl 的因果分析，悖论的出现是由于因果推理和概率推理之间的混淆。如果将服用药物会提高康复概率的说法解释为干预给药将使患者更有可能康复的因果陈述，并且合理地假设服用药物对性别没有影响，那么药物既不能降低男性的康复概率，也不能降低女性的康复概率。但是，当然，如果只考虑普通的条件概率而没有任何 do-operators，这种反转是可能发生的。因此，悖论的出现是由于混淆普通条件概率和表示干预结果的条件概率。

辛普森悖论对于（ii）的回答对于（iii）有直接的影响。在评估两个变量 X 和 Y 之间的关系，并确定是否应该基于某个变量（或变量集）Z 进行分区时，只有在这样做可以帮助我们确定 X 和 Y 之间的因果关系时，我们才应该基于 Z 进行分区。这个答案假设分区人口的目的是为了确定因果关系。在悖论的背景下如何继续进行的问题只有在给定上下文和希望进行的推理类型的情况下才有意义。

Pearl（2014）提出了支持他对悖论分析的几个理由。首先，他认为，如果悖论导致的惊讶仅仅是数学错误的结果，那么这既不能解释为什么悖论“已经吸引了统计学家、数学家和哲学家一个多世纪的兴趣”（2014 年：9），也不能解释为什么推理者在意识到错误后仍然难以避免这个错误。只有通过因果语义，我们才能证明辛普森的逆转在解释因果关系的条件概率时是不可能发生的。其次，他指出辛普森（1951）观察到判断聚合或非聚合人口对于评估相关性的相关性取决于频率所代表的故事。Pearl 通过展示决定是否应该对人口进行分区不是通过概率而是通过生成概率的因果模型来解释这种故事相对性。这些因果模型仅凭条件概率无法区分。

Bandyopadhyay 等人（2011 年）否定了 Pearl 对这个悖论的因果分析，并提出了一种替代的数学解释。他们指出，有些悖论的实例似乎并没有涉及任何因果概念。例如，假设我们将表 1 中的比例不是指男性和女性人群中接受治疗/未接受治疗的患者比例，而是指两个袋子中大理石和小理石的红色和蓝色比例。假设无论哪个袋子，大理石的红色与蓝色的比例都高于小理石。Bandyopadhyay 等人合理地声称，在这种情况下，如果我们将袋子倒入一个盒子中，发现小理石的红色与蓝色的比例高于大理石，这将是令人惊讶的。如果存在一些与因果无关但仍然令人惊讶的悖论案例，那么对于这个悖论的一般解释就不能是因果的。[9]

Bandyopadhyay 等人将这个悖论重新表述为关于比例和比例的问题：当满足以下条件时

(6)a1+b1b1>c1+d1d1 并且 a2+b2b2>c2+d2d2

—作为子群体中治疗和对照的成功比例来阅读，比较表 2—许多人期望这些相等性在整体人口中得到保留：

(7)a1+a2+b1+b2b1+b2>c1+c2+d1+d2d1+d2

正如我们从第 2 节所知，情况并非总是如此。Bandyopadhyay 等人对大学生进行了一项调查：只有 12%的人给出了正确答案，即方程（6）本身并不能限制方程（7）的真值。

鉴于广泛的文献揭示了人类在推理概率方面似乎容易出错（例如，卡尼曼，斯洛维克和特韦斯基 1982 年），辛普森悖论可以通过对概率推理中的错误进行解释的提议是合理的。然而，Bandyopadhyay 等人并没有具体说明这个错误是什么。更具体地说，他们没有提出一种有效的推理形式，当推理者陷入悖论时，他们错误地诉诸于此。人们期望亚群体中的比例在合并群体中保持不变只是表明人们被悖论欺骗了。这并没有揭示当他们被欺骗时他们所犯的根本错误。在这个意义上，Bandyopadhyay 等人没有回答他们的第二个问题。他们还承认，他们没有提供对(iii)的一般答案。他们认为这是他们解释的优点，因为他们认为(iii)的讨论应该与(i)和(ii)的讨论分开。

最近，Fitelson（2017）提出了对辛普森悖论的确认论解释。他的分析依赖于将确认与（主观）命题的概率增加联系起来。然而，“证据 E 确认假设 H”的陈述通常是相对于背景知识 K 进行评估的，这可能导致歧义。特别是，Fitelson 区分了确认陈述的假设和连词阅读。在我们的运行示例中，这些陈述如下：

假设性（在 K 的条件下，E 提高了 H 的概率）：如果一个人是女性，那么接受治疗会增加康复的机会。

连接词（E∧K 提高了 H 的概率）：作为女性接受治疗会增加康复的机会。

尽管对于某些解释（例如，Carnap 关于确认程度的解释，将其视为条件概率），假设性和连接性阅读是一致的，但对于作为提高概率的确认来说，它们可能会产生不同的结果。对于我们在表 1 中的数据，假设性阅读是正确的：如果一个人属于女性亚群，接受治疗而不是处于对照组，会增加康复的机会。然而，在连接性阅读中，这个陈述是错误的：女性接受治疗的康复机会较低（12/27），与那些既是男性又没有接受治疗的人群（16/25）相比。更重要的是，尽管假设性阅读允许关联的逆转，但在连接性阅读中，既不能同时发生女性接受治疗和男性接受治疗提高康复概率，也不能发生接受治疗本身不提高康复概率（Fitelson 2017: 300–302）。

Fitelson 对辛普森悖论的确认论解释是，推理者在考虑学习个体性别的证据相关性时，没有注意到假设性和连接性阅读之间的差异。在连接性阅读中，不能发生关联的逆转，而且由于对于许多确认解释来说，假设性和连接性阅读并无不同，人们错误地认为即使他们依赖于假设性阅读，也不可能发生这种逆转。

Bandyopadhyay 等人和 Fitelson 都声称，因为辛普森悖论的表述本身并不涉及因果考虑，所以最好找到一个非因果解释来解释这个悖论。最终，这是一个经验问题，即这个悖论是否可以完全归因于概率推理中的错误，或者如 Pearl 所建议的，是由于因果推理和概率推理的混淆。解开这些假设之间的概念障碍的一个问题是，因果和概率主张之间存在系统性关系。例如，当第三个变量 M 与处理 T 不相关时（即 p(T∣M)=p(T)），就不会发生逆转（也参见第 2.2 节中的定理）。这是否意味着辛普森悖论有一个纯粹的概率解释？不一定。另一种假设是认识主体不知道相关条件概率，但知道 M 不是 T 的原因（p(T∣do(M))=p(T)），从而预防了关联逆转的发生。关于悖论的根源是否是因果的问题不能仅仅通过数学条件来解决。相反，它取决于关于因果和概率假设在人类推理中的实质性心理假设。[10]

对于悖论的经验证据表明，推理者通常很难进行三元推理（即具有因果相关的第三个变量），并且未能正确考虑其作用，即使提供了明显的相关线索（Fiedler，Walther，Freytag 和 Nickel 2003）。其他研究指出了因果模型、统计培训和高动机的促进效应（Schaller 1992；Waldmann 和 Hagmayer 1995），但推理者在类似辛普森任务中遇到的显著困难使得很难在短时间内从经验上决定悖论的正确分析问题。

## 5. 应用

### 5.1 非分类数据和线性回归

 | 成绩点
 平均值（GPA）| 成绩分布 | 口语 SAT 分数 | | --- | --- | --- | --- | --- | | 1992 | 2002 | 1992 | 2002 | | A+ | 5% | 7% | 619 | 607 | | A | 12% | 17% | 575 | 565 | | A− | 14% | 17% | 546 | 538 | | B | 52% | 47% | 486 | 479 | | C | 17% | 11% | 434 | 424 | | 所有成绩 | 100% | 100% | 501 | 516 |

表 4：来自 Rinott＆Tam（2003）的美国高中的语文 SAT 成绩数据。

辛普森悖论不仅限于分类数据：它也可以发生在基数数据中，并在定量分析的标准模型中显现出来。一个著名的例子是对美国学生高中平均绩点（GPA）与大学入学考试 SAT 成绩的分析。数据见表 4：整体 SAT 平均分从 1992 年到 2002 年上升，但对于每个 GPA 组（A+/A/...），SAT 平均分却在下降。然而，这种现象是非常自然的。一旦高中存在一点点的等级膨胀，每个组都会失去最好的学生，这会降低每个组的 SAT 平均分。但这当然与整体 SAT 平均分保持相等，甚至从 501 上升到 516（如我们的数据集）是一致的。从分层数据得出“学生变得更愚蠢”的结论是错误的。由于等级膨胀等社会发展影响了等级分布和 SAT 成绩，所以在研究 SAT 成绩随时间变化时，不应该以学生的 GPA 为条件（参见第 3.4 节的背门准则）。

![a graph with a yaxis of IQ score ranging from 70 to 130 and an xaxis of cups of coffee on test day ranging from 0 to 5 A dashed line goes from a point of about 0 cups and 75 IQ to 5 cups and 130 IQ 8 clusters of dots appear along the line](https://plato.stanford.edu/entries/paradox-simpson/CoffeeIQ.png)

图 4：线性回归模型，说明辛普森悖论在双变量基数数据中的存在。每个值簇对应一个人（重复测量）。

辛普森悖论在线性模型中的类似例子见图 4，改编自 Kievit、Frankenhuis、Waldorp 和 Borsboom（2013）。该图显示了咖啡摄入对智商测试表现的影响结果。假设咖啡实际上会稍微降低表现，因为它会让喝咖啡的人更紧张、注意力不集中。同时，咖啡摄入与教育水平（建筑工人太忙了，没时间喝咖啡！）以及教育水平与测试表现相关。当我们对不同个体重复测量表现时，我们发现他们的表现受到咖啡摄入的轻微负面影响。然而，（无条件的）表现回归模型却误导性地表明咖啡摄入大大改善了表现！混淆的原因是隐藏协变量教育水平对咖啡摄入和表现都有因果影响。与第 2 节的结果类似，辛普森悖论可以通过回归系数之间的不等式（例如，Pearl 2013）在线性模型中形式化地描述，并且其发生取决于涉及变量之间因果交互的性质。

### 5.2 流行病学和荟萃分析

辛普森悖论以其各种形式在流行病学文献中引起了很多关注，因为它与确定和估计医疗治疗效果以及暴露于风险因素（例如吸烟、饮酒）对医疗危害的影响相关。

随机对照试验（RCTs）方法论的目标之一是消除潜在混杂因素对个体是否接受治疗的影响。在第 2.2 节中，这被描述为行均匀设计（用于具有分类数据的实验）。例如，如果我们确保治疗组和对照组中男女比例相同，不同年龄组的患病率相同等等，我们就知道在这些第三变量方面不会发生关联反转（AR），并且对于许多测量指标来说，也排除了混合悖论（AMP）的可能性。

然而，流行病学研究中常用的（对数）比值比作为效应大小的度量表现出了异常行为。无论第三变量（即亚群属性）是否影响治疗成功率，将个体均匀分配到治疗组和对照组总是会产生比值比的混合悖论（Theorem 2.4，Samuels 1993）。因此，比值比是一种特别棘手的关联度量。Greenland（1987）给出了一个有启发性的例子，即在行均匀设计的所有亚群中比值比相等，但在汇总数据时减半。

元分析问题，例如汇总各种研究以确定干预措施或风险因素的整体效应大小，给辛普森悖论带来了特别有趣的转折。这样的研究应该如何聚合？天真地说，有人可能建议将所有研究的数据汇总，并将它们视为一项大型研究。如果研究人群非常相似且数据来自 RCTs，其中治疗/对照比例通常为 50:50，这可能行得通。如果确实如此，那么整体数据集是行均匀的，AR（对于大多数测量指标，还有 AMP）是可以避免的，如第 2.2 节所示。但对于非实验数据，没有理由假设治疗/对照比例在各个研究中是相等的。因此，在汇总时，效应的方向可能会发生反转（例如，参见 Hanley＆Thériault 2000; Reintjes，Boer，Pelt 和 Mintjes-de Groot 2000; Rücker＆Schumacher 2008）。

不汇总数据的另一个原因是研究人群通常是异质的，并且根据数据计算关联强度（即效应大小）可能会使估计偏向具有最大样本量的研究的方向，而该研究中的患者特征不一定代表整个目标群体。特别是，在研究层面上，患者通常是随机分配到治疗组或对照组，但不能说关于聚合数据（Cates 2002）。因此，适当的元分析是基于对效应进行加权而不是汇总数据进行的，可以通过固定效应模型或（例如，如果研究人群是异质的）在统计模型中引入研究的随机效应来实现。如何进行流行病学研究的元分析问题也与选择关联或效应大小测量有关（Altman＆Deeks 2002; Cates 2002; Greenland 1987），这个问题在第 2.2 节中进行了讨论。

### 5.3 决策理论和肯定事情原则

Blyth（1972）认为辛普森悖论也构成了决策理论中肯定事情原则的反例，或者至少大大限制了其范围。该原则旨在指导不确定情况下的理性决策，并由萨维奇如下所述：

肯定事情原则（STP）：“如果你明确地更喜欢 g 而不是 f，无论是知道事件 B 发生了还是知道事件 B 没有发生，那么你肯定更喜欢 g 而不是 f”。（Savage 1954: 21–22）

在他所谓的反例中，布莱斯将 B 和¬B 视为两个子群体（例如，两个不同的医院）。假设对于每个子群体，治疗 T 与康复 R 呈正相关。在这种情况下，假设赔率相等，我们宁愿押注治疗组（行动 g）中患者的康复，而不是对照组（行动 f）中患者的康复，无论这个人是在群体 B 还是群体¬B 中。因此，由于我们在任何一个子群体中都更喜欢 g 而不是 f，并且由于所有患者都在群体 B 或群体¬B 中，根据确定性原则，我们可以推断出，即使我们不知道一个患者是在群体 B 还是群体¬B 中，g 也比 f 更可取。但是，如果发生关联反转，这种推断是错误的：根据上述情景，非治疗患者的康复总体频率可能高于治疗患者的康复频率！布莱斯（1972: 366）得出结论：

> 确定性原则[...]似乎不适用于在[f]或[g]内采取的任何行动允许基于与[B]有关的事件进行顺序依赖的情况。

参见马利纳斯（2001）的讨论。

在程度上，（条件）信念的程度只是代表（条件）下注的倾向，布莱思的推理是有说服力的。关联反转意味着

p(R∣T)<(R∣¬T)

 尽管

p(R∣T,B)>(R∣¬T,¬B)

 和

p(R∣T,B)>(R∣¬T,¬B),

因此，对于在不同水平的 B 下对 T 进行有条件的赌注的偏好并不意味着对 T 的无条件赌注的偏好（见第 2 节）。然而，萨维奇肯定不打算将肯定性原则作为概率的定理。为了评估它作为指导正确决策的原则，我们必须考虑预测变量（在这里是治疗/对照）代表通过多个路径影响结果的适当行为的情况。

杰弗里（1982 年）回忆起萨维奇（1954 年：21）关于一位商人的例子，该商人认为无论民主党还是共和党候选人将赢得即将到来的市长选举，购买一处房产都是有利的。杰弗里的转折在于商人的效用不仅取决于房产交易，还取决于选举结果。具体而言，购买该房产会提高他不喜欢的民主党候选人获胜的机会。在那种情况下，他肯定会在选举后购买该房产，无论结果如何，但在选举前他可能会选择不购买。

作为对这一挑战的回应，杰弗里（1982 年：720）将肯定性原则限制在只有在预测变量（在这里是治疗/对照）代表通过多个路径影响结果的情况下。

> 选择一种行为或另一种行为被认为对自然可能状态的发生没有促进或阻碍的倾向，并且[...]这在状态与行为之间具有概率独立性的反映。

也就是说，购买该属性不应改变我们对谁赢得选举的理性信念程度。Pearl（2016）认为这种回应是“过度杀伤力”，并指出概率关联不是表达因果倾向的好方法。因此，他提出了一个因果确定性原则，在第 3.4 节中我们已经遇到过：如果一个人正在考虑两种行为 f 和 g，并且 B 的概率分布不因选择 f 或 g 而改变，那么如果一个人无论 B 是否发生都更喜欢 f 而不是 g，那么一个人无条件地更喜欢 f。斜体的条件确保分区变量不是干预的结果，从而排除了辛普森悖论（见第 3.4 节）。请注意，Pearl 的表述允许将（因果）确定性原则应用于观察数据，其中状态和行为可能在统计上相关，而不表示真正的因果关系（例如，由于自我选择效应）。

在本条目中，我们假设了与情况相关的因果事实的知识。代理人缺乏这种知识的情况会给决策理论带来额外的复杂性。代理人通常无法确保已经考虑到了所有混杂因素，因此反复逆转的可能性引发了一个问题，即何时应该采用尚未经过实验测试的有前途的政策（Peters, Janzing, & Schölkopf 2017: 174–175）。另一个不同的关注点是，代理人可能不确定她的行为是否算作干预（例如，在 Newcomb 场景中），因为不清楚她是否可以操纵一个变量使其独立于其先前的原因（Stern 2019）。辛普森悖论是否在这种决策背景下引发了新的困难尚未得到探讨。有关进一步讨论，请参阅有关决策理论和因果决策理论的条目。

### 5.4 生物学和自然选择的哲学

在生物学哲学中，选择单元的辩论（Sober 2000 [2018: ch. 4]，2014；Williams 1966）关注的是自然选择是否仅在个体层面上起作用，还是也作用于群体（其中个体通常被构想为生物体或基因）。这个辩论对于理解利他主义的进化尤为重要（Sober & Wilson 1999）。由于利他主义个体损害了自己的生存和繁殖机会，它们的适应度较低，因此不清楚利他主义如何能够作为自然选择的结果而进化。然而，如果拥有更多利他主义者的群体比拥有较少利他主义者的群体更适应，而且选择可以作用于群体，这可能解释了利他主义仍然可以进化的原因。在选择单元的辩论中，辛普森逆转在解释群体层面选择的可能性方面起到了重要作用。

考虑以下针对群体选择概念可能性的天真论证。[12] 假设我们将群体的适应度定义为其个体的平均适应度。在这种情况下，利他个体是指那些具有减少自身适应度但提高其他群体成员适应度的特征的个体。例如，当捕食者靠近时发出警告叫声的乌鸦有益于群体，但同时增加了自身受伤的机会。自然选择解释了具有该特征的个体比没有该特征的个体更适应的进化（其他条件相等）。由于自私的个体在定义上比利他的个体更适应，因此具有更多利他个体的群体不能更适应。或者可以这样争论。

现在应该清楚这种论证的问题所在——从每个群体中利他个体比自私个体适应度低并不意味着平均自私和利他个体的群体不能比只有自私个体的群体更适应。可能是利他主义者与更多利他主义者所在的群体相关联，并且具有更多利他主义者的群体更适应。这就排除了这种天真的论证。然而，请注意，在每个单独的群体中，自私的个体更适应，因此如果群体的成员只通过繁殖（而不是迁移和突变）来改变，那么经过足够多的世代，每个群体最终将只由自私的个体组成。因此，群体选择是否会发生取决于有关人口结构和动态的其他事实。汉密尔顿（1964）的亲缘选择理论解释了利他主义如何在利他主义者更有可能与其他利他主义者结交的情况下进化（可能是因为它在家族中流传）。

辛普森悖论在生物学家中仍存在争议。目前的讨论揭示了辛普森悖论现象与理论化可能性的相关性，并更广泛地揭示了关于因果关系和概率的哲学工作如何有助于澄清科学辩论。

最近，辛普森悖论在关于自然选择是否应该被理解为因果或统计的持续辩论中被引用。沃尔什（2010 年）是统计观点的杰出捍卫者，他指出辛普森悖论的案例表明选择不能被理解为因果关系，而奥塔卡、特纳、艾伦和洛伊德（2011 年）对此提出了反驳。从这场辩论中出现的一个重要观点是，在辛普森悖论的讨论中，“种群”一词的用法与生物学中的用法不同（参见韦恩伯格 2018 年）。沃尔什提出了一个例子，其中一个种群中的相关性在将种群分成两部分后消失。正如奥塔卡等人指出的，在种群遗传学中，种群大小对其个体的适应性可能具有因果关系。请注意，沃尔什将种群分成两半的例子并不是我们在辛普森悖论的背景下讨论的内容。在先前的讨论中，将种群分割并不涉及改变其大小，而是基于一个变量对其概率分布进行分区。

### 5.5 政策问题：解释歧视数据

Bickel 等人（1975 年）提出了一个涉及伯克利大学性别歧视研究的辛普森悖论的经典例子。数据显示，男性被录取到大学研究生项目的可能性比女性更高，但作者们无法在任何一个单独的系别中发现对男性的偏见。作者们使用这个悖论来解释为什么男性在整个大学的录取率更高，并不意味着任何一个系别对女性存在歧视。具体来说，女性更有可能申请录取率较低的系别。这导致了性别和分区变量（系别）之间的概率关联，我们已经看到这可能导致辛普森逆转。

虽然伯克利案例的概率结构与其他悖论实例相似，但它提出了一个额外的问题。从自然的角度理解该案例，申请人的性别是他或她申请更或较少选择性系别的原因。关于性别或种族等人口统计变量成为原因的含义是另一天的长篇故事（Glymour＆Glymour 2014; Sen＆Wasow 2016）。但是假设性别在这里是一个原因，那么系别变量就是一个中介变量，而在评估中介因果关系时不应该对中介变量进行条件约束。那么对系别进行条件约束的理由是什么？

答案是，在评估歧视时，通常重要的是路径特定效应，而不是沿着所有路径的净效应（Pearl 2000 [2009: 4.5.3]；Zhang＆Bareinboim 2018）。举个不同的例子（Pearl 2001），考虑一个假设的黑人求职者是否因为种族而受到歧视。由于之前的种族歧视，这个求职者可能被剥夺了发展与工作相关的资格的机会，由于缺乏这些资格，被拒绝了这份工作。这种种族雇佣的间接影响对于确定雇主是否歧视求职者并不相关。真正重要的是，如果这个求职者是白人，但由于是黑人而具备相同的资格，那么他们是否更有可能得到这个职位。这被称为自然直接效应（Pearl 2001；Weinberger 2019）。在确定雇主是否歧视时，重要的不是黑人是否对被雇佣的人有任何影响，而是他们是否因为是黑人而对其工作相关资格产生了直接影响。

### 5.6 使用统计数据评估任务绩效

辛普森悖论的常见解释是伯克利数据，其中悖论的结果是因为女性申请更有选择性的部门，指出在更多情况下需要考虑任务难度差异的重要性。例如，在棒球中，尽管击球手在击打更困难的球时能力提高，但似乎随着时间的推移，击球手的三振次数越来越多，而在击打较不困难的球时保持不变（Watt 2016 [参见其他互联网资源]）。这可能是因为投手投掷的难以击中的球比例更高。这突显了在任务难度随时间变化的情况下，关于任务成功率的统计数据可能会误导的方式。

## 6. 结论

辛普森悖论不仅是一个令人惊讶的数学事实；它还作为一种透视镜，帮助我们理解数据分析、因果推断和决策中的概率的作用。在本文中，我们描述了它的数学属性，给出了其发生的必要和充分条件，讨论了它对因果关系理论的影响，评估了关于悖论性质的竞争理论，并调查了它在一系列实证领域中的应用。

尽管辛普森悖论已经被人们了解了一个多世纪，并且有一个直接的概率分析，但我们预测它仍将成为富有成果的哲学讨论的来源。Pearl 对这个悖论的因果分析相对较新，而且现在图形化因果模型开始在哲学讨论中起到核心作用。尽管图形化解释与早期的概率因果理论之间存在连续性，但我们在这里强调了新方法在从悖论中得出截然不同的推论的方式。Pearl 的解释使得早期文献中的某些争论变得无关紧要，同时也引发了关于悖论正确解释的新争论。第 4 节中对 Pearl 的回应只是关于因果关系、概率理论和推理心理学之间关系更广泛讨论的第一步。仍然有待澄清解释悖论的含义以及什么样的解释算是对某个特定解释的经验支持。这样的工作将为经验测试打开大门，而迄今为止这方面的研究还很有限。

最后，我们想要强调辛普森悖论与文献中其他推理谬误之间的联系。首先，基本率谬误与辛普森悖论有关，因为认为关联反转是不可能的幻觉可能是基于对接受和未接受治疗的人群的不同基本率的忽视（Bar-Hillel 1990）。其次，将相关性误认为因果关系的谬误可能会导致悖论性的出现，因为关联反转意味着两个相互矛盾的因果主张，当与这种谬误结合时。第三，在辛普森悖论和蒙提霍尔谬误中，推理者都未能看到因果信息的概率相关性。在辛普森悖论中，推理者忽视了观察到的关联的背门路径的相关性，在蒙提霍尔问题中，推理者未能考虑到蒙提的行动如何取决于他对门后情况的了解。第四，推理者检测关联反转的原因的能力还取决于他们暴露于确认偏见的程度（例如，他们是否认为存在一种歧视机制是合理的）。我们不知道辛普森悖论与这些推理谬误之间的系统研究，但这可能是未来研究的一个有成果的领域。辛普森悖论也许并没有什么悖论，但由于我们经常难以理解它，我们对关联反转的推理可能与各种容易受到偏见和错误的推理形式纠缠在一起。

<!--md-padding-ignore-begin-->
## Bibliography

* Altman, Douglas G and Jonathan J Deeks, 2002, “Meta-Analysis, Simpson’s Paradox, and the Number Needed to Treat”, *BMC Medical Research Methodology*, 2: art. 3. doi:10.1186/1471-2288-2-3
* Armistead, Timothy W., 2014, “Resurrecting the Third Variable: A Critique of Pearl’s Causal Analysis of Simpson’s Paradox”, *The American Statistician*, 68(1): 1–7. doi:10.1080/00031305.2013.807750
* Bandyopadhyay, Prasanta S., Davin Nelson, Mark Greenwood, Gordon Brittan, and Jesse Berwald, 2011, “The Logic of Simpson’s Paradox”, *Synthese*, 181(2): 185–208. doi:10.1007/s11229-010-9797-0
* Bar-Hillel, Maya, 1990, “Back to Base Rates”, in *Insights in Decision Making: A Tribute to Hillel J. Einhorn*, Robin M. Hogarth (ed.), Chicago: University of Chicago Press, pp. 200–216.
* Bickel, P. J., E. A. Hammel, and J. W. O’Connell, 1975, “Sex Bias in Graduate Admissions: Data from Berkeley”, *Science*, 187(4175): 398–404. doi:10.1126/science.187.4175.398
* Blyth, Colin R., 1972, “On Simpson’s Paradox and the Sure-Thing Principle”, *Journal of the American Statistical Association*, 67(338): 364–366. doi:10.1080/01621459.1972.10482387
* –––, 1973, “Simpson’s Paradox and Mutually Favorable Events”, *Journal of the American Statistical Association*, 68(343): 746–746. doi:10.1080/01621459.1973.10481419
* Cartwright, Nancy, 1979, “Causal Laws and Effective Strategies”, *Noûs*, 13(4): 419–437. doi:10.2307/2215337
* –––, 1989, *Nature’s Capacities and Their Measurement*, Oxford: Clarendon Press. doi:10.1093/0198235070.001.0001
* Cates, Christopher J, 2002, “Simpson’s Paradox and Calculation of Number Needed to Treat from Meta-Analysis”, *BMC Medical Research Methodology*, 2: art. 1. doi:10.1186/1471-2288-2-1
* Dupré, John, 1984, “Probabilistic Causality Emancipated”, *Midwest Studies in Philosophy*, 9: 169–175. doi:10.1111/j.1475-4975.1984.tb00058.x
* Edwards, A. W. F., 1963, “The Measure of Association in a 2 × 2 Table”, *Journal of the Royal Statistical Society. Series A (General)*, 126(1): 109. doi:10.2307/2982448
* Eells, Ellery, 1986, “Probabilistic Causal Interaction”, *Philosophy of Science*, 53(1): 52–64. doi:10.1086/289291
* –––, 1991, *Probabilistic Causality*, Cambridge: Cambridge University Press. doi:10.1017/CBO9780511570667
* Eells, Ellery and Elliott Sober, 1983, “Probabilistic Causality and the Question of Transitivity”, *Philosophy of Science*, 50(1): 35–57. doi:10.1086/289089
* Fiedler, Klaus, Eva Walther, Peter Freytag, and Stefanie Nickel, 2003, “Inductive Reasoning and Judgment Interference: Experiments on Simpson’s Paradox”, *Personality and Social Psychology Bulletin*, 29(1): 14–27. doi:10.1177/0146167202238368
* Fitelson, Branden, 1999, “The Plurality of Bayesian Measures of Confirmation and the Problem of Measure Sensitivity”, *Philosophy of Science*, 66(Supplement): S362–S378. doi:10.1086/392738
* –––, 2017, “Confirmation, Causation, and Simpson’s Paradox”, *Episteme*, 14(3): 297–309. doi:10.1017/epi.2017.25
* Fitelson, Branden and Christopher Hitchcock, 2011, “Probabilistic Measures of Causal Strength”, in Phyllis McKay Illari, Federica Russo, & Jon Williamson (eds.), *Causality in the Sciences*, Oxford: Oxford University Press, pp. 600–627.
* Glymour, Clark and Madelyn R. Glymour, 2014, “Commentary: Race and Sex Are Causes”, *Epidemiology*, 25(4): 488–490. doi:10.1097/EDE.0000000000000122
* Good, I. J., 1960, “Weight of Evidence, Corroboration, Explanatory Power, Information and the Utility of Experiments”, *Journal of the Royal Statistical Society: Series B (Methodological)*, 22(2): 319–331. doi:10.1111/j.2517-6161.1960.tb00378.x
* Good, I. J. and Y. Mittal, 1987, “The Amalgamation and Geometry of Two-by-Two Contingency Tables”, *The Annals of Statistics*, 15(2): 694–711. doi:10.1214/aos/1176350369
* Greenland, Sander, 1987, “Interpretation and Choice of Effect Measures in Epidemiologic Analyses”, *American Journal of Epidemiology*, 125(5): 761–768. doi:10.1093/oxfordjournals.aje.a114593
* Hamilton, William D., 1964, “The Genetical Evolution of Social Behaviour. II”, *Journal of Theoretical Biology*, 7(1): 17–52. doi:10.1016/0022-5193(64)90039-6
* Hanley, James A. and Gilles Thériault, 2000, “Simpson’s Paradox in Meta-Analysis:”, *Epidemiology*, 11(5): 613. doi:10.1097/00001648-200009000-00022
* Hardcastle, Valerie Gray, 1991, “Partitions, Probabilistic Causal Laws, and Simpson’s Paradox”, *Synthese*, 86(2): 209–228. doi:10.1007/BF00485809
* Hausman, Daniel M., 2010, “Probabilistic Causality and Causal Generalizations”, in *The Place of Probability in Science*, Ellery Eells and J.H. Fetzer (eds.), (Boston Studies in the Philosophy of Science 284), Dordrecht: Springer Netherlands, 47–63. doi:10.1007/978-90-481-3615-5_2
* Hesslow, Germund, 1976, “Two Notes on the Probabilistic Approach to Causality”, *Philosophy of Science*, 43(2): 290–292. doi:10.1086/288684
* Hitchcock, Christopher, 2001, “A Tale of Two Effects”, *The Philosophical Review*, 110(3): 361–396. doi:10.2307/2693649
* –––, 2003, “Of Humean Bondage”, *The British Journal for the Philosophy of Science*, 54(1): 1–25. doi:10.1093/bjps/54.1.1
* Hoover, Kevin D., 2003, “Nonstationary Time Series, Cointegration, and the Principle of the Common Cause”, *The British Journal for the Philosophy of Science*, 54(4): 527–551. doi:10.1093/bjps/54.4.527
* Imbens, Guido W. and Joshua D. Angrist, 1994, “Identification and Estimation of Local Average Treatment Effects”, *Econometrica*, 62(2): 467–475. doi:10.2307/2951620
* Jeffrey, Richard, 1982, “The Sure Thing Principle”, *PSA: Proceedings of the Biennial Meeting of the Philosophy of Science Association. Part 2: Symposia and Invited Papers*, Chicago: University of Chicago Press, 719–730. doi:10.1086/psaprocbienmeetp.1982.2.192456
* Kahneman, Daniel, Paul Slovic, and Amos Tversky (eds.), 1982, *Judgment under Uncertainty: Heuristics and Biases*, Cambridge: Cambridge University Press. doi:10.1017/CBO9780511809477
* Kievit, Rogier A., Willem E. Frankenhuis, Lourens J. Waldorp, and Denny Borsboom, 2013, “Simpson’s Paradox in Psychological Science: A Practical Guide”, *Frontiers in Psychology*, 4: art 513. doi:10.3389/fpsyg.2013.00513
* Lindley, Dennis V. and Melvin R. Novick, 1981, “The Role of Exchangeability in Inference”, *The Annals of Statistics*, 9(1): 45–58. doi:10.1214/aos/1176345331
* Malinas, Gary, 2001, “Simpson’s Paradox: A Logically Benign, Empirically Treacherous Hydra”, *Monist*, 84(2): 265–283. doi:10.5840/monist200184217
* Mittal, Yashaswini, 1991, “Homogeneity of Subpopulations and Simpson’s Paradox”, *Journal of the American Statistical Association*, 86(413): 167–172. doi:10.1080/01621459.1991.10475016
* Nagel, Ernest and Morris R. Cohen, 1934, *An Introduction to Logic and Scientific Method*, New York: Harcourt, Brace.
* Otsuka, Jun, Trin Turner, Colin Allen, and Elisabeth A. Lloyd, 2011, “Why the Causal View of Fitness Survives”, *Philosophy of Science*, 78(2): 209–224. doi:10.1086/659219
* Otte, Richard, 1985, “Probabilistic Causality and Simpson’s Paradox”, *Philosophy of Science*, 52(1): 110–125. doi:10.1086/289225
* Pavlides, Marios G. and Michael D. Perlman, 2009, “How Likely Is Simpson’s Paradox?”, *The American Statistician*, 63(3): 226–233. doi:10.1198/tast.2009.09007
* Pearl, Judea, 1988, *Probabilistic Reasoning in Intelligent Systems: Networks of Plausible Inference*, San Mateo, CA: Morgan Kaufmann.
* –––, 1993, “[Bayesian Analysis in Expert Systems]: Comment: Graphical Models, Causality and Intervention”, *Statistical Science*, 8(3): 266–269. doi:10.1214/ss/1177010894
* –––, 2000 [2009], *Causality: Models, Reasoning, and Inference*, Cambridge: Cambridge University Press. Second edition 2009. doi:10.1017/CBO9780511803161
* –––, 2001, “Direct and Indirect Effects”, in Jack Breese & Daphne Koller (eds.), *Proceedings of the Seventeenth Conference on Uncertainty in Artificial Intelligence*, San Francisco, CA: Morgan Kaufmann, pp. 411–420.
* –––, 2013, “Linear Models: A Useful ‘Microscope’ for Causal Analysis”, *Journal of Causal Inference*, 1(1): 155–170. doi:10.1515/jci-2013-0003
* –––, 2014, “Comment: Understanding Simpson’s Paradox”, *The American Statistician*, 68(1): 8–13. doi:10.1080/00031305.2014.876829
* –––, 2016, “The Sure-Thing Principle”, *Journal of Causal Inference*, 4(1): 81–86. doi:10.1515/jci-2016-0005
* Pearson, Karl, 1899, “On the Theory of Genetic (Reproductive) Selection”, *Philosophical Transaction of the Royal Society, Series A*, 192: 260–278.
* Peirce, C. S., 1884, “The Numerical Measure of the Success of Predictions”, *Science*, new series 4(93): 453–454. doi:10.1126/science.ns-4.93.453-a
* Peters, Jonas, Dominik Janzing, and Bernhard Schölkopf, 2017, *Elements of Causal Inference: Foundations and Learning Algorithms*, Cambridge, MA: MIT press.
* Reichenbach, Hans, 1956, *The Direction of Time*, Berkeley, CA: University of California Press.
* Reintjes, Ralf, Annette de Boer, Wilfrid van Pelt, and Joke Mintjes-de Groot, 2000, “Simpson’s Paradox: An Example from Hospital Epidemiology:”, *Epidemiology*, 11(1): 81–83. doi:10.1097/00001648-200001000-00017
* Rinott, Yosef and Michael Tam, 2003, “Monotone Regrouping, Regression, and Simpson’s Paradox”, *The American Statistician*, 57(2): 139–141. doi:10.1198/0003130031397
* Rücker, Gerta and Martin Schumacher, 2008, “Simpson’s Paradox Visualized: The Example of the Rosiglitazone Meta-Analysis”, *BMC Medical Research Methodology*, 8: art. 34. doi:10.1186/1471-2288-8-34
* Samuels, Myra L., 1993, “Simpson’s Paradox and Related Phenomena”, *Journal of the American Statistical Association*, 88(421): 81–88. doi:10.1080/01621459.1993.10594297
* Savage, Leonard J., 1954, *The Foundations of Statistics*, New York: Wiley. Second revised edition 1972.
* Schaller, Mark, 1992, “In-Group Favoritism and Statistical Reasoning in Social Inference: Implications for Formation and Maintenance of Group Stereotypes.”, *Journal of Personality and Social Psychology*, 63(1): 61–74. doi:10.1037/0022-3514.63.1.61
* Sen, Maya and Omar Wasow, 2016, “Race as a Bundle of Sticks: Designs That Estimate Effects of Seemingly Immutable Characteristics”, *Annual Review of Political Science*, 19: 499–522. doi:10.1146/annurev-polisci-032015-010015
* Simpson, E. H., 1951, “The Interpretation of Interaction in Contingency Tables”, *Journal of the Royal Statistical Society: Series B (Methodological)*, 13(2): 238–241. doi:10.1111/j.2517-6161.1951.tb00088.x
* Skyrms, Brian, 1980, *Causal Necessity: a Pragmatic Investigation of the Necessity of Laws*, New Haven, CT: Yale University Press.
* Sober, Elliott, 2000 [2018], *Philosophy of Biology*, New York: Westview Press. Second edition, New York: Routledge, 2018.
* –––, 2014, *The Nature of Selection: Evolutionary Theory in Philosophical Focus*, University of Chicago Press.
* Sober, Elliott and David Sloan Wilson, 1999, *Unto Others: The Evolution and Psychology of Unselfish Behavior*, Cambridge, MA: Harvard University Press.
* Spirtes, Peter, Clark Glymour, and Richard Scheines, 2000, *Causation, Prediction, and Search*, second edition, Cambridge, MA: MIT Press.
* Spohn, Wolfgang, 2012, *The Laws of Belief: Ranking Theory and Its Philosophical Applications*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199697502.001.0001
* Sprenger, Jan, 2018, “Foundations of a Probabilistic Theory of Causal Strength”, *The Philosophical Review*, 127(3): 371–398. doi:10.1215/00318108-6718797
* Sprenger, Jan and Jacob Stegenga, 2017, “Three Arguments for Absolute Outcome Measures”, *Philosophy of Science*, 84(5): 840–852. doi:10.1086/693930
* Stern, Reuben, 2019, “Decision and Intervention”, *Erkenntnis*, 84(4): 783–804. doi:10.1007/s10670-018-9980-0
* Suppes, Patrick, 1970, *A Probabilistic Theory of Causality*, Amsterdam: North-Holland.
* Waldmann, Michael and York Hagmayer, 1995, “Causal Paradox: When a Cause Simultaneously Produces and Prevents an Effect”, in J. D. Moore & J. F. Lehman (eds.), *Proceedings of the Seventeenth Annual Conference of the Cognitive Science Society*, Mahwah, NJ: Erlbaum, pp. 425–430.
* Walsh, Denis M., 2010, “Not a Sure Thing: Fitness, Probability, and Causation*”, *Philosophy of Science*, 77(2): 147–171. doi:10.1086/651320
* Weinberger, Naftali, 2015, “If Intelligence Is a Cause, It Is a within-Subjects Cause”, *Theory & Psychology*, 25(3): 346–361. doi:10.1177/0959354315569832
* –––, 2018, “Faithfulness, Coordination and Causal Coincidences”, *Erkenntnis*, 83(2): 113–133. doi:10.1007/s10670-017-9882-6
* –––, 2019, “Path-Specific Effects”, *The British Journal for the Philosophy of Science*, 70(1): 53–76. doi:10.1093/bjps/axx040
* Williams, George C., 1966, *Adaptation and Natural Selection: A Critique of Some Current Evolutionary Thought* (Princeton Science Library), Princeton, NJ: Princeton University Press.
* Woodward, James, 2003, *Making Things Happen: A Theory of Causal Explanation*, Oxford: Oxford University Press. doi:10.1093/0195155270.001.0001
* Yule, G. Undy, 1903, “Notes on the Theory of Association of Attributes in Statistics”, *Biometrika*, 2(2): 121–134. doi:10.1093/biomet/2.2.121
* Zhang, Junzhe and Elias Bareinboim, 2018, “Fairness in Decision-Making—the Causal Explanation Formula”, in *Thirty-Second AAAI Conference on Artificial Intelligence*, 2037–2045. [[Zhang and Bareinboim 2018 available online](https://aaai.org/ocs/index.php/AAAI/AAAI18/paper/view/16949)]

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=paradox-simpson). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/paradox-simpson/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=paradox-simpson&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/paradox-simpson/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* Kügelgen, Julius von, Luigi Gresele, and Bernhard Schölkopf, “[Simpson’s Paradox in Covid-19 Case Fatality Rates: A Mediation Analysis of Age-Related Causal Effects](https://arxiv.org/abs/2005.07180)”, version of 24 June 2020. arXiv Preprint arXiv:2005.07180.
* Watt, Rian, 2016, “[Pitchers Won’t Throw Strikes, so Batters Are Getting Better at Hitting Bad Pitches](https://fivethirtyeight.com/features/pitchers-wont-throw-strikes-so-batters-are-getting-better-at-hitting-bad-pitches/)”, *FiveThirtyEight*, 12 December 2016, accessed 3 March 2021.

## Related Entries

[causal models](https://plato.stanford.edu/entries/causal-models/) | [causation: and manipulability](https://plato.stanford.edu/entries/causation-mani/) | [causation: counterfactual theories of](https://plato.stanford.edu/entries/causation-counterfactual/) | [causation: probabilistic](https://plato.stanford.edu/entries/causation-probabilistic/) | [decision theory](https://plato.stanford.edu/entries/decision-theory/) | [decision theory: causal](https://plato.stanford.edu/entries/decision-causal/) | [statistics, philosophy of](https://plato.stanford.edu/entries/statistics/)

### Acknowledgments

This research was supported by the European Research Council through Starting Investigator Grant No. 640638 (J.S.), the Italian Ministry for University and Research through PRIN project “From Models to Decisions” (J.S.) and a research fellowship of the Alexander Humboldt Foundation (N.W.). The authors would like to thank the editors for their invitation to contribute to the Stanford Encyclopedia of Philosophy, Reuben Stern for helpful feedback, and Judea Pearl for extensive comments on a previous draft. The authors have no conflicts of interests.

[Copyright © 2021](https://plato.stanford.edu/info.html#c) by  
[Jan Sprenger](http://www.laeuferpaar.de/) <[*jan.sprenger@unito.it*](mailto:jan%2esprenger%40unito%2eit)>  
[Naftali Weinberger](https://sites.google.com/site/naftaliweinberger/) <[*naftali.weinberger@gmail.com*](mailto:naftali%2eweinberger%40gmail%2ecom)>
