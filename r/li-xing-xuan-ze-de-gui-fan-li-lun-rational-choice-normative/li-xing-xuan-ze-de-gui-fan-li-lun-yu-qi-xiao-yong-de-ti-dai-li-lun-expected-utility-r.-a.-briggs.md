# 理性选择的规范理论：预期效用 expected utility (R. A. Briggs)

*首次发表于 2014 年 8 月 8 日星期五；实质性修订于 2023 年 9 月 18 日星期一*

我们经常在不确定的情况下做决定。攻读生物学学位可能会导致就业机会，也可能导致失业和债台高筑。看医生可能会导致早期发现和治疗疾病，也可能是浪费金钱。预期效用理论是一个解释如何在不确定结果的情况下进行理性选择的原理。其基本口号是：选择具有最高预期效用的行为。

本文讨论预期效用理论作为一个规范理论，即人们应该如何做决定的理论。在古典经济学中，预期效用理论通常被用作描述性理论，即人们如何做决定的理论，或作为预测性理论，即一种可能并不准确模拟决策心理机制，但能正确预测人们选择的理论。预期效用理论在许多现实选择情况下对人们的决策做出错误预测（参见卡内曼和特沃斯基 1982 年）；然而，这并不能解决人们是否应该根据预期效用考虑做决定的问题。

行为的预期效用是其可能结果的效用的加权平均值，其中结果的效用衡量该结果相对于其他结果的偏好程度。每个结果的效用根据该行为导致该结果的概率加权。第 1 节更严谨地阐述了预期效用的基本定义，并讨论了它与选择的关系。第 2 节讨论了预期效用理论的两种论证类型：表示定理和长期统计论证。第 3 节考虑了对预期效用理论的反对意见；第 4 节讨论了它在宗教哲学、经济学、伦理学和认识论中的应用。

---

## 1. 定义预期效用

预期效用的概念最好通过例子来说明。假设我计划长途步行，需要决定是否带上雨伞。在晴天我宁愿不带雨伞，但面对雨天我宁愿有雨伞而不是没有。我有两种行为可选择：带上雨伞，或者留在家里。我应该选择哪种行为呢？

这个非正式的问题描述可以稍微正式地重新表述，涉及三种实体。首先，有结果—非工具性偏好的对象。在这个例子中，我们可以区分三种结果：要么我保持干燥且没有负担；要么我保持干燥但背着笨重的雨伞；要么我被淋湿。其次，有状态—决策者无法控制的事物，影响决策结果。在这个例子中，有两种状态：要么下雨，要么不下雨。最后，有行为—决策者工具性偏好的对象，某种意义上，她可以做的事情。在这个例子中，有两种行为：我可以带上雨伞，或者留在家里。预期效用理论提供了一种根据行为的优劣对其进行排序的方法：预期效用越高，选择该行为就越好。（因此最好选择预期效用最高的行为—或者在多个行为并列时选择其中之一。）

遵循一般惯例，我将对行为、状态和结果之间的关系做出以下假设。

* 状态、行为和结果都是命题，即，可能性的集合。有一个最大可能性集Ω，其中每个状态、行为或结果都是一个子集。
* 行为的集合、状态的集合和结果的集合都是Ω上的划分。换句话说，行为和状态是个体化的，以便Ω中的每种可能性都是一个状态发生、代理执行一种行为和产生一种结果的情形。
* 行为和状态在逻辑上是独立的，因此没有任何状态能排除任何行为的发生。
* 我暂时假设，鉴于世界的某种状态，每个行为都有确切的一个可能结果。（第 1.1 节简要讨论了如何削弱这一假设。）

因此，伞的例子可以用以下矩阵来描述，其中每一列对应于世界的一个状态；每一行对应于一个行为；每个条目对应于在世界的某个状态下执行该行为时产生的结果。

| | 状态 | | --- | --- | --- | --- | | 下雨 | 不下雨 | | 行为 | 拿伞 | 不便，干燥 | 不便，干燥 | | 放下伞 | 湿 | 自由，干燥 |

现在已经建立了基本框架，我现在可以严格定义预期效用。行为 A（例如，拿我的伞）的预期效用取决于问题的两个特征：

* 每个结果的价值，由一个称为效用的实数来衡量。
* 在 A 条件下每个结果的概率。

考虑到这三条信息，A 的预期效用被定义为：

 预期效用`(A)=∑o∈OPA(o)U(o)`

其中 O 是结果集，PA(o)是在 A 条件下结果 o 的概率，U(o)是 o 的效用。

接下来的两个小节将详细解释条件概率函数 PA 和效用函数 U。

### 1.1 条件概率

术语 PA(o)代表了在给定 A 的情况下 o 发生的概率——粗略地说，假设代理选择行为 A，结果 o 发生的可能性有多大。（有关概率公理，请参阅概率解释条目。）要理解这意味着什么，我们必须回答两个问题。首先，哪种概率解释是适当的？其次，在假设代理选择行为 A 的情况下，分配概率意味着什么？

预期效用理论家经常将概率解释为衡量个体信念程度的指标，因此，对于一个代理来说，命题 E 可能发生的程度取决于该代理对 E 的信心程度（例如，参见 Ramsey 1926 年，Savage 1972 年，Jeffrey 1983 年）。但是，预期效用理论的形式主义并没有强加这种解释给我们。我们可以将概率解释为客观机会（如 von Neumann 和 Morgenstern 1944 年所述），或者将其解释为根据证据所证明的信念程度，如果我们认为这些更好地指导了理性行为。（有关这些和其他选项的讨论，请参阅概率解释条目。）

在假设代理选择 A 的情况下具有概率是什么？在这里，有两种基本类型的答案，对应于证据决策理论和因果决策理论。

根据杰弗里（1983）支持的证据决策理论，相关的假设概率 PA(o)是条件概率 P(o∣A)，定义为两个无条件概率的比值：P(A&o)/P(A)。

针对杰弗里对预期效用的定义，斯波恩（1977）和莱维（1991）认为决策者不应该为正在审议的行为分配概率：在自由决定是否执行行为 A 时，不应考虑您对是否会执行 A 的信念。如果斯波恩和莱维是对的，那么杰弗里的比值是未定义的（因为其分母未定义）。

诺齐克（1969）提出另一个异议：杰弗里的定义在纽康姆问题中得出奇怪的结果。一个预测者递给你一个封闭的盒子，里面装着 0 美元或 100 万美元，并提供给你一个打开的盒子，里面还有额外的 1000 美元。你可以拒绝打开的盒子（“单盒”）或者拿走打开的盒子（“双盒”）。但有一个问题：预测者事先预测了你的选择，而且她所有的预测都有 90%的准确率。换句话说，如果她预测你会单盒，那么你选择单盒的概率为 90%，如果她预测你会双盒，那么你选择双盒的概率为 90%。最后，封闭盒子的内容取决于预测：如果预测者认为你会双盒，她就不会在封闭盒子里放任何东西，而如果她认为你会单盒，她就会在封闭盒子里放 100 万美元。你的决策矩阵如下：

| | 状态 | | --- | --- | --- | --- | | 封闭盒子里有 100 万美元 | 封闭盒子里有 0 美元 | | 行为 | 单盒 | 100 万美元 | 0 美元 | | 双盒 | 1001000 美元 | 1000 美元 |

双盒比单盒更占优势：在每种状态下，双盒都会产生更好的结果。然而，在杰弗里对条件概率的定义中，单盒的预期效用高于双盒。在你选择单盒的情况下，找到封闭盒子里有 100 万美元的条件概率很高，因此单盒的预期效用很高。同样，在你选择双盒的情况下，找到封闭盒子里没有任何东西的条件概率很高，因此双盒的预期效用很低。

因果决策理论是一个可以解决这些问题的替代方案。它不要求（但仍然允许）行为具有概率，并建议在纽康姆问题中选择两个盒子。

因果决策理论有许多不同的版本，但我将考虑萨维奇（1972）提出的一个代表性版本，该版本通过计算 PA(o)来求解，方法是将与行为 A 结合导致结果 o 的状态的概率相加。让 fA，s（o）是结果的函数，如果 o 是在状态 s 中执行 A 的结果，则将 o 映射为 1，否则将 o 映射为 0。那么

`PA(o)=∑s∈SP(s)fA,s(o)`

根据 Savage 的提议，两筐比起一筐有更高的预期效用。无论您在做决定之前分配给各状态的概率是多少，这个结果都成立。设 x 为您分配给封闭筐内含有 100 万美元的状态的概率。根据 Savage，一筐和两筐的预期效用分别为：

x⋅U(100 万美元)+(1−x)⋅U(0)

 和

`x⋅U(100 万零一千美元)+(1−x)⋅U(1000)`

只要较大的货币金额被分配给较大的效用，两个盒子的效用（两个盒子的效用）就肯定大于第一个盒子的效用（一个盒子的效用）。

Savage 假设每个行为和状态足以唯一确定一个结果。但在某些情况下，这种假设会被打破。假设你提出向我出售以下赌局：你将抛一枚硬币；如果硬币正面朝上，我赢得 100 美元；如果硬币反面朝上，我输掉 100 美元。但我拒绝这个赌局，硬币从未被抛出。如果硬币被抛出，不会有任何结果产生——我可能赢得 100 美元，也可能输掉 100 美元。

我们可以通过让 fA,s 成为一个将结果映射到[0,1]区间内的实数的概率函数来概括 Savage 的提议。Lewis（1981 年）、Skyrms（1980 年）和 Sobel（1994 年）将 fA,s 与客观机会等同起来，即如果状态 s 发生并且行为体选择行动 A，结果 o 将会发生。

在某些情况下—最著名的是 Newcomb 问题—Jeffrey 定义和 Savage 定义的预期效用有所不同。但只要满足以下两个条件，它们就是一致的。

* 行为在概率上独立于状态。用形式化的术语表示，对于所有行为 A 和状态 s，`P(s)=P(s∣A)=P(s&A)P(A)`。（这是 Newcomb 问题中违反的条件。）
* 对于所有结果 o、行为 A 和状态 s，fA,s(o)等于给定 A 和 s 时 o 的条件概率；用形式化的术语表示，fA,s(o)=P(o∣A&s)=P(o&A&s)P(A&s)。（当行为和状态未能唯一确定结果时，就需要这个条件；参见 Lewis 1981。）

### 1.2 结局效用

术语 U(o) 代表结果 o 的效用——大致上，o 的价值如何。形式上，U 是一个将实数赋给每个结果的函数。（与 U 相关的单位通常称为效用单位，因此如果 U(o)=2，我们说 o 的价值为 2 个效用单位。）效用越大，结果越有价值。

用效用单位来衡量的价值是什么样的？效用单位通常不被视为货币单位，比如美元、英镑或日元。伯努利（1738）认为金钱和其他商品具有边际效用递减：随着一个行为体变得更富有，每个连续的美元（或金表，或苹果）对她的价值都比上一个更低。他举了以下例子：对于一个富人来说，但对于一个穷人来说，为了换取一张彩票，他愿意支付 9,000 杜卡特，这张彩票有 50% 的机会赢得 20,000 杜卡特和 50% 的机会一无所获，是理性的。由于彩票给这两个人每个货币奖品的机会相同，奖品的价值必须取决于玩家是穷人还是富人。

经典功利主义者如本丹（1789 年）、密尔（1861 年）和西奇威克（1907 年）将效用解释为快乐或幸福的度量。对于这些作者来说，说 A 对于一个行为体或一组行为体的效用大于 B，意味着 A 给这个行为体或行为体组带来的快乐或幸福比 B 多。

对效用的这种解释的一个反对意见是，可能没有一个单一的好处（或者实际上没有任何好处）是理性要求我们追求的。但是，如果我们将“效用”理解得足够广泛，以包括所有潜在可取之目标——快乐、知识、友谊、健康等等——那么并不清楚是否存在一种独特正确的方法来权衡不同的好处，以便每个结果都获得一定的效用。关于苦行僧的生活是否比快乐放荡者的生活包含更多或更少的好处这个问题可能没有一个好的答案——但是给这些选择分配效用却迫使我们对它们进行比较。

当代决策理论家通常将效用解释为偏好的度量，因此说 A 对于 B（对于一个行为体）具有更大的效用，只是说行为体更偏好 A 而不是 B。这种方法的关键在于偏好不仅存在于结果之间（比如快乐程度、或快乐和知识的组合），还存在于不确定前景之间（比如一个彩票，如果一枚特定的硬币正面朝上，就会支付 100 万美元，如果硬币反面朝上，就会导致一小时的痛苦电击）。本文第 2 节详细讨论了偏好与选择之间的形式关系。

预期效用理论并不要求偏好是自私或自利的。某人可以更喜欢把钱捐给慈善机构，而不是把钱花在奢华的晚餐上，或者更喜欢牺牲自己的生命，而不是让自己的孩子死去。森（1977）建议，每个人的心理最好用三种排名来表示：一种代表个人狭义自利，第二种代表更广泛地构想个人自利以考虑同情心（例如，看到他人受苦时感到痛苦），第三种代表个人的承诺，这可能要求她采取行动，违背她广义自利的利益。

Broome (1991, Ch. 6)解释效用是衡量客观优劣比较的，而不是个人偏好：说 A 的效用比 B 大是说 A 比 B 客观上更好，或者理性的人会更喜欢 A 而不是 B。正如概率论的形式主义并不要求我们使用主观概率一样，预期效用理论的形式主义也并不要求我们使用主观价值而不是客观价值。

那些用个人偏好来解释效用的人面临着特殊挑战：所谓的人际效用比较问题。在决定如何分配共享资源时，我们经常想知道我们的行为是否会让爱丽丝比鲍勃更好，如果是的话，会好多少。但如果效用是个人偏好的衡量，那么很难找到明确、有意义的比较方法。爱丽丝的效用由爱丽丝的偏好构成，鲍勃的效用由鲍勃的偏好构成，而没有跨越爱丽丝和鲍勃的偏好。我们不能假设爱丽丝的效用 10 等同于鲍勃的效用 10，就像我们不能假设在微分方程中获得 A 等级等同于在编织篮子课程中获得 A 等级一样。

现在是考虑效用函数哪些特征携带有意义信息的好时机。比较是有信息的：如果 U(o1)>U(o2)（对于一个人），那么 o1 比 o2 更好（或更受偏爱）。但仅仅比较是有信息的——如果预期效用理论要给出有意义的结果，效用函数必须携带其他信息。

要了解原因，请再考虑一次雨伞的例子。这一次，我为每种状态填写了概率，为每种结果填写了效用。

| | 状态 | | --- | --- | --- | --- | | 下雨 (P=0.6) | 不下雨 (P=0.4) | | 行为 | 拿雨伞 | 有负担，干燥 (U=5) | 有负担，干燥 (U=5) | | 放下雨伞 | 湿的 (U=0) | 自由，干燥 (U=10) |

拿雨伞的预期效用是

预期效用(采取)=P 采取(受阻,干)+5+P 采取(湿)⋅0+P 采取(自由,干)⋅10=5

离开伞的预期效用是

EU(离开)=P 离开(受阻,干)⋅5+P 离开(湿)⋅0+P 离开(自由,干)⋅10=4

由于 EU（接受）> EU（放弃），预期效用理论告诉我，拿起伞比放下伞更好。

但现在，假设我们改变结果的效用：不再使用 U，而是使用 U′。

| | 状态 | | --- | --- | --- | --- | | 下雨（P=0.6） | 不下雨（P=0.4） | | 行为 | 拿伞 | 有负担，干燥（U′=4） | 有负担，干燥（U′=4） | | 放下伞 | 湿的（U′=2） | 自由，干燥（U′=8） |

拿伞的新预期效用是

EU′(拿)=P 拿(受阻,干)⋅4+P 拿(湿)⋅2+P 拿(自由,干)⋅8=4

而放下伞的新预期效用是

预期效用(离开)=P 离开(受阻,干)⋅4+P 离开(湿)⋅2+P 离开(自由,干)⋅8=4.4

由于 EU′(拿)<EU′(离开)，预期效用理论告诉我，放下伞比带走更好。

效用函数 U 和 U′以完全相同的方式对结果进行排名：自由，干最好；受阻，干排在中间；湿最差。然而，预期效用理论在问题的两个版本中给出了不同的建议。因此，适当由 U 描述的偏好与适当由 U′描述的偏好之间必须存在实质性差异。否则，预期效用理论是反复无常的，并且在提供同一问题的不同描述时可能会改变建议。

何时两个效用函数代表相同的基本情况？测量理论通过表征效用函数的可允许转换方式来回答这个问题，即改变效用函数的方式，使其所有有意义的特征保持不变。如果我们表征效用函数的可允许转换方式，我们就已经指定了其中哪些特征是有意义的。

预期效用理论的支持者通常要求效用由线性刻度来衡量，其中可允许的转换仅限于正线性转换，即形式为 f(U(o))=x⋅U(o)+y 的函数 f。

f(U(o))=x⋅U(o)+y

对于实数 x>0 和 y。

预期效用理论的论点：如果 A 比 B 具有更大的预期效用，其中效用由函数 U 测量，那么 A 在任何 U 的正线性变换下也比 B 具有更大的预期效用。

## 2. 预期效用理论的论据

为什么选择最大化预期效用的行为？一个可能的答案是预期效用理论是理性选择的基石—这意味着目的与手段的理性基本上涉及最大化预期效用。然而，对于那些觉得这个答案不令人满意的人，还有两个进一步的理由。首先，有长期论证，依赖于证据表明最大化预期效用在长期内是一种有利可图的策略。其次，有基于表示定理的论证，这些定理表明对偏好的某些理性约束意味着所有理性行为体都最大化预期效用。

### 2.1 长期论证

最大化预期效用的一个原因是这在长期内是一个良好的策略。费勒（1968）提出了这个论点的一个版本。他依赖于关于概率的两个数学事实：大数定律和弱大数定律。这两个事实都涉及独立同分布试验序列—这种设置是由反复在轮盘旋转或掷骰子序列上以相同方式下注而产生的。大数定律和弱大数定律都大致表示，长期来看，每次试验获得的平均效用量极有可能接近单次试验的预期值。

弱大数定律指出，如果每次试验的预期值为μ，对于任意小的实数ϵ>0 和δ>0，存在一定的有限次数的试验 n，使得对于所有大于或等于 n 的 m，以至少 1−δ的概率，赌徒在前 m 次试验中的平均收益将在μ的ϵ范围内。换句话说，在一系列类似赌博的长期运行中，每次试验的平均收益很可能在有限时间内变得非常接近赌博的预期值。因此，在有限的长期内，与赌博相关的平均值极有可能接近其预期值。

大数定律表明，如果每次试验的预期值为μ，那么对于任意小的实数ϵ>0，随着试验次数的增加，赌徒每次试验的平均赢利将在μ的ϵ范围内。换句话说，随着赌博重复次数接近无穷大，每次试验的平均收益将以概率 1 变得无限接近赌博的预期值。因此从长远来看，与赌博相关的平均值几乎肯定等于其预期值。

对这些长期论点有几个异议。首先，许多决策不能在无限次相似试验中重复。例如，关于选择追求哪种职业、与谁结婚以及住在哪里的决定，最多只能做出有限次数的决定。此外，如果这些决定不止一次，不同的试验涉及不同的可能结果，具有不同的概率。目前尚不清楚为什么关于重复赌博的长期考虑应该影响这些单次选择。

其次，这一论点依赖于两个独立性假设，其中一个或两个可能失败。一个假设是不同试验的概率是独立的。这对于赌场赌博是正确的，但对于我们希望使用决策理论的其他选择并非如此，例如关于医疗治疗的选择。我在一次抗生素疗程后仍然生病，使我在下一次疗程后仍然生病的可能性增加，因为这增加了抗生素耐药细菌在我的身体中传播的机会。该论点还要求不同试验的效用是独立的，因此在一次试验中赢得奖品对决策者的整体效用产生相同的贡献，无论她在其他试验中赢得什么。但在许多现实情况下，这一假设是不成立的。由于金钱的边际效用递减，在十次轮盘赌中赢得 1000 万美元并不比在一次轮盘赌中赢得 100 万美元值得多出十倍。

第三个问题是大数定律的强弱形式在模态上较弱。两者都不意味着如果赌博无限次重复（在适当的假设下），每次试验的平均效用增益将接近游戏的预期效用。它们只是建立每次试验的平均效用增益很可能接近游戏的预期效用。但高概率—甚至概率 1—并不等于确定性。（标准概率理论拒绝 Cournot 原则，即低概率或零概率事件不会发生。但请参阅 Shafer（2005）对 Cournot 原则的辩护。）对于任何独立同分布试验序列，每次试验的平均效用回报可能会与单次试验的预期效用相去甚远。

### 2.2 代表定理

期望效用理论的第二类论证依赖于所谓的代表定理。我们遵循 Zynda（2000）对这一论证的阐述—稍作修改以反映效用和概率的作用。该论证有三个前提：

*理性选择条件。* 
 预期效用理论的公理是理性偏好的公理。

*可表达性。*
  如果一个人的偏好遵守预期效用理论的公理，那么她可以被表示为具有遵守概率演算法的信念程度[和一个效用函数，使她更喜欢具有更高预期效用的行为]。

*现实条件。*
  如果一个人可以被表示为具有遵守概率演算法的信念程度[和一个效用函数，使她更喜欢具有更高预期效用的行为]，那么这个人确实具有遵守概率演算法的信念程度[并确实更喜欢具有更高预期效用的行为]。

这些前提导致以下结论。

> 如果一个人[不偏好具有更高预期效用的行为]，那么这个人至少违反了理性偏好的公理之一。

如果前提为真，则该论证表明，那些偏好与预期效用理论相悖的人存在问题——他们违反了理性偏好的公理之一。让我们更详细地考虑每个前提，从关键前提“可代表性”开始。

概率函数和效用函数一起表示一组偏好，只要对于偏好关系的定义域中的所有 A 和 B 的值，以下公式成立

如果且仅当 A 优先于 B 时，EU(A)>EU(B)。

代表性的数学证明被称为表示定理。第 2.1 节调查了三个最有影响力的表示定理，每个定理都依赖于不同的公理集。

无论我们使用哪一组公理，理性条件都是有争议的。在某些情况下，似乎是理性允许的偏好——甚至可能是理性所要求的偏好——违反了预期效用理论的公理。第 3 节详细讨论了这类情况。

现实条件也是有争议的。 Hampton（1994 年），Zynda（2000 年）和 Meacham 和 Weisberg（2011 年）都指出，能够用概率和效用函数来表示并不意味着具有概率和效用函数。毕竟，一个可以被表示为具有遵守概率计算的信念度的预期效用最大化者，也可以被表示为未能最大化预期效用且其信念度违反概率计算的人。为什么认为预期效用表示是正确的呢？

有几种选择。也许表示定理的辩护者可以规定具有特定信念度和效用的含义就是具有相应偏好。对于这种回应的辩护者的主要挑战是解释为什么以预期效用为代表的表述在解释上是有用的，以及为什么它们比替代表述更好。或者也许概率和效用是我们的信念和欲望民间概念的良好清理的理论替代品—我们的民间概念的精确科学替代品。Meacham 和 Weisberg 对这一回应提出质疑，认为概率和效用并不是我们的民间概念的合适替代品。Zynda 提出的第三种可能性是，关于信念度的事实是独立于行为体的偏好而成立的，并且提供了一种原则性的方法来限制可接受表述的范围。这种回应类型的辩护者面临的挑战是要指明这些额外事实是什么。

现在我转而考虑三个有影响力的表述定理。这些表述定理在三个在哲学上显著的方面有所不同。

第一，不同的规范理论在偏好和效用的对象上存在分歧。它们是否可重复？它们是否必须完全在行为体的控制之内？

第二，规范理论在对概率的处理上存在差异。它们对哪些实体具有概率以及同一对象是否可以同时具有概率和效用存在分歧。

第三，尽管每个规范理论都证明了对于适当的偏好排序，存在代表偏好排序的概率和效用函数，但它们在这种概率和效用函数的独特性上存在差异。换句话说，它们在允许对概率和效用函数进行哪些转换方面存在分歧。

#### 2.2.1 Ramsey

预期效用的代表定理的概念可以追溯到 Ramsey（1926 年）。（他对代表定理的草图随后由 Bradley（2004 年）和 Elliott（2017 年）完善。）Ramsey 假设偏好是在一系列赌局的领域中定义的，这些赌局在命题 P 为真的条件下产生一个奖品，在命题 P 为假的条件下产生另一个奖品。（赌局的例子：如果你怀孕了就收到一件连体衣，否则收到一瓶苏格兰威士忌；如果 Bojack 赢得肯塔基德比就赢得二十美元，否则输掉一美元。）

Ramsey 称命题在“仅在[其真实性]方面有所不同的两个可能世界总是具有相同的价值”时是伦理中立的。对于一个伦理中立的命题，概率 1/2 可以根据偏好来定义：只要你对于在其哪一侧下注是漠不关心的，这样的命题就具有概率 1/2。（因此，如果 Bojack 赢得肯塔基德比是一个伦理中立的命题，那么它具有概率 1/2，只要你在赌它为真时赢得二十美元和否则输掉一美元，以及在赌它为假时赢得二十美元和否则输掉一美元时是漠不关心的。）

通过假设一个概率为 1/2 的道德中立命题，再加上丰富的奖励空间，Ramsey 为奖励定义了数值效用。 （大致想法是，如果你在确定接受一个中等奖励 m 和一个赌局之间感到漠不关心，该赌局在道德中立命题为真时会产生更好的奖励 b，为假时会产生更差的奖励 w，那么 m 的效用就介于 b 和 w 的效用之间。）利用这些数值效用，他利用预期效用的定义来为所有其他命题定义概率。

大致想法是利用奖励空间的丰富性，确保对于任何赌局 g，如果 E 为真则产生更好奖励 b，如果 E 为假则产生更差奖励 w，行为体在 g 和某个中等奖励 m 之间漠不关心。 这意味着 EU(g)=EU(m)。利用一些代数运算，再加上 `EU(g)=P(E)U(b)+(1−P(E))U(w)` 这一事实，Ramsey 表明

`P(E)=(1−U(m)(U(b)−U(w))`

#### 2.2.2 冯·诺伊曼和莫根斯特恩

冯·诺伊曼和莫根斯特恩（1944 年）声称，偏好是在一系列抽签中定义的。其中一些抽签是固定的，并肯定会产生一个奖品。 （奖品可能包括香蕉、一百万美元、价值一百万美元的债务、死亡或一辆新车。）抽签也可以将其他抽签作为奖品，因此一个抽签可能有 40%的几率产生一个香蕉，60%的几率产生一场一半一百万美元和死亡的赌博。 抽签的范围在混合操作下是封闭的，因此如果 L 和 L'是抽签，x 是[0,1]区间内的实数，则存在一个抽签 xL+(1-x)L'，以 x 的概率产生 L，以 1-x 的概率产生 L'。 他们表明，遵守某些公理的每个偏好关系都可以由用于定义抽签的概率表示，以及一个直到正线性变换为止的唯一的效用函数。

#### 2.2.3 萨维奇

与冯·诺伊曼和莫根斯特恩不同，萨维奇（1972）并不认为概率是理所当然的，而是根据对行为的偏好来定义它们。萨维奇提出了三个独立的领域。概率与事件相关联，我们可以将其视为状态的析取，而效用和内在偏好与结果相关联。预期效用和非内在偏好与行为相关联。

对于萨维奇来说，行为、状态和结果必须满足某些约束条件。行为必须完全在行为体的控制之下（因此，发表我的论文在《心灵》杂志上并不是一种行为，因为这在很大程度上取决于编辑的决定，而我无法控制）。结果必须具有相同的效用，无论哪个状态发生（因此，“我赢得一辆豪华汽车”不是一个结果，因为豪华汽车的效用在那些我最想要留下深刻印象的人希望我有一辆豪华汽车的状态下会更大，在我失去驾照的状态下会更小）。没有状态可以排除任何行为的发生，行为和状态必须共同确定一个结果并具有确定性。对于每个结果 o，都有一个恒定的行为，在每个状态下都会产生 o。（因此，如果世界和平是一个结果，那么有一个行为会导致世界和平，无论世界的状态如何。）最后，他假设对于任何两个行为 A 和 B 和任何事件 E，都存在一个混合行为 AE&B∼E，如果 E 为真，则产生与 A 相同的结果，否则产生与 B 相同的结果。（因此，如果世界和平和世界末日都是结果，那么存在一个混合行为，如果某个硬币正面朝上，就会导致世界和平，否则导致世界末日。）

萨维奇假设了对行为的偏好关系，并给出了控制该偏好关系的公理。然后，他根据偏好来定义主观概率，或信念程度。关键之举是在事件之间定义一个“至少与...一样可能”的关系；我在这里进行了解释。

> 假设 A 和 B 是恒定的行为，使得 A 优于 B。那么只要行为体要么更喜欢 AE&B∼E（如果 E 发生则产生 A，否则产生 B 的行为），胜过 AF&B∼F（如果 F 发生则产生 A，否则产生 B 的行为），要么对 AE&B∼E 和 AF&B∼F 持中立态度，那么 E 至少和 F 一样可能发生。

定义背后的思想是，行为体认为 E 至少和 F 一样可能发生，只要她不愿意在 F 上下注而不是在 E 上下注。

Savage 随后给出了限制理性偏好的公理，并表明任何满足这些公理的偏好集会产生一个“至少和”关系，可以通过概率函数唯一表示。换句话说，存在且仅存在一个概率函数 P，对于所有的 E 和 F，当且仅当 E 至少和 F 一样可能发生时，P(E)≥P(F)。遵守 Savage 公理的每个偏好关系都由这个概率函数 P 表示，再加上一个唯一的效用函数，该函数在正线性变换上是唯一的。

Savage 的表示定理得出了强有力的结果：仅从偏好排序开始，我们就可以找到一个单一的概率函数和一个狭窄类别的效用函数，这些函数代表了该偏好排序。然而，不利的一面是 Savage 不得不对行为领域做出不切实际的强假设。

Luce 和 Suppes（1965）指出 Savage 的恒定行为是不切实际的。（回想一下，恒定行为在每种状态下产生相同的结果和相同数量的价值。）拿一个非常好的结果——每个人都体验到完全的幸福。在每种可能的状态下，真的有一个恒定行为会产生这样的结果吗，包括人类被陨石毁灭的状态？Savage 对混合行为的丰富空间的依赖也是有问题的。Savage 不得不假设对于任何两个结果和任何事件，都存在一个混合行为，如果事件发生，则产生第一个结果，否则产生第二个结果？真的有一个行为会在每个人被抗生素耐药性瘟疫杀死时产生完全的幸福，否则产生完全的痛苦吗？Luce 和 Krantz（1971）提出了重新阐述 Savage 表示定理的方法，削弱了这些假设，但 Joyce（1999）认为即使在削弱的假设下，行为领域仍然过于丰富。

#### 2.2.4 Bolker 和 Jeffrey

Bolker（1966 年）证明了关于数学期望的一般表示定理，Jeffrey（1983 年）以此为基础，提出了预期效用理论的哲学解释。 Bolker 的定理假设了一个命题的单一领域，这些命题既是偏好、效用，也是概率的对象。因此，今天下雨的命题具有效用，也有概率。 Jeffrey 将这种效用解释为命题的新闻价值——衡量如果得知命题为真，我会感到多么高兴或失望的指标。按照惯例，他将必要命题的价值设定为 0——必要命题根本不是新闻！同样，我带伞去上班的命题，作为一种行为，既有概率，也有效用。 Jeffrey 解释说，这意味着我对自己会做什么有一定的信念度。

Bolker 给出了约束偏好的公理，并证明了任何满足他的公理的偏好都可以用概率测度 P 和效用测度 U 来表示。然而，Bolker 的公理并不能确保 P 是唯一的，或者 U 在正线性变换下是唯一的。它们也不允许我们根据偏好来定义比较概率。相反，当 P 和 U 共同表示一个偏好排序时，Bolker 表明对偶⟨P，U⟩在分数线性变换下是唯一的。

从技术角度来看，其中 U 是一个效用函数，使得 U（Ω）=0，inf 是 U 分配的值的最大下界，sup 是 U 分配的值的最小上界，λ是一个介于−1/inf 和−1/sup 之间的参数，对应于λ的⟨Pλ，Uλ⟩的⟨P，U⟩的分数线性变换如下：

`Pλ=P(x)(1+λU(x))Uλ=U(x)((1+λ)/(1+λU(x))`

注意，概率-效用对的分数线性变换可能与原始对在哪些命题比哪些命题更可能方面存在分歧。

Joyce（1999）表明，通过额外资源，Bolker 的定理可以被修改以确定一个唯一的 P，并且一个唯一的 U，其在正线性变换上是唯一的。我们只需要用一个原始的“更可能比”关系补充偏好排序，该关系受其自己一组公理的支配，并通过几个额外的公理与信念相联系。Joyce 修改了 Bolker 的结果，表明在给定这些额外公理的情况下，“更可能比”关系由唯一的 P 表示，并且偏好排序由 P 以及一个在正线性变换上是唯一的效用函数表示。

#### 2.2.5 摘要

总的来说，以上这四个表示定理可以总结在下表中。

| **Theorem**                         | **对象<br /> 偏好** | **顺序<br /> 建设**      | **允许的<br /> 转换：<br /> 概率** | **允许的<br /> 转换：<br /> 效用** |
| -------------------------- | ------------------ | ----------------------- | ----------------------------- | ----------------------------- |
| Ramsey                   | gambles          | 偏好 → 效用 → 概率  | identity                    | 正线性                      |
| 冯·诺依曼/<br /> 莫根斯特恩 | lotteries        | (偏好与概率) → 效用  | 不适用                      | 正线性                      |
| Savage                   | acts             | 偏好 → 概率 → 效用  | identity                    | 正线性                      |
| Jeffrey/Bolker           | propositions     | 偏好 → (概率 & 效用) | — 分数线性 —              |                             |

注意，构建的顺序在定理之间有所不同：Ramsey 利用效用构建概率的表示，而 von Neumann 和 Morgenstern 从概率开始构建效用的表示。因此，尽管箭头表示了表示的数学关系，但它们不能代表一个基本的形而上关系。现实条件需要独立于任何表示定理进行验证。

适当结构化的序数概率（通过“至少与...一样可能”，“比...更可能”和“同样可能”所确定的关系）与基数概率函数一一对应。最后，从偏好到序数概率的灰线表明，满足 Savage 公设的每个概率函数都由唯一的基数概率表示—但这一结果不适用于 Jeffrey 的公设。

请注意，通常可以沿着箭头形成循环—从偏好到序数概率，从序数概率到基数概率，从基数概率和偏好到预期效用，再从预期效用回到偏好。因此，尽管箭头表示了表示的数学关系，但它们不代表一个基本的形而上关系。这个事实强调了独立验证现实条件的重要性—表示定理不能在没有额外假设的情况下证明预期效用理论。

## 对预期效用理论的异议

### 最大化预期效用是不可能的

应该意味着能够，但是人类是否可能最大化预期效用呢？马奇和西蒙（1958）指出，为了计算预期效用，行为体需要对可用行为、可能结果以及这些结果的价值有一个艰巨复杂的理解，并且选择最佳行为要比选择仅仅够好的行为要求更高。林德布隆（1959）、费尔德曼（2006）和史密斯（2010）也提出了类似的观点。

McGee (1991)认为，即使对于具有无限内存的理想计算机，最大化预期效用也是不可能的。为了最大化预期效用，我们将不得不接受我们在算术真理上提出的任何赌注，并拒绝我们在算术语言中提出的任何关于假命题的赌注。但算术是不可判定的，因此没有图灵机可以确定给定的算术命题是真还是假。

对这些困难的一个回应是有界理性方法，旨在用一些更易处理的规则取代预期效用理论。另一个是认为预期效用理论的要求比它们看起来更易处理（Burch-Brown 2014；另请参阅 Greaves 2016），或者相关的“应该意味着能够”原则是错误的（Srinivasan 2015）。

### 3.2 最大化预期效用是非理性的

规范理论中的规范理论。3.2.1 和 3.2.2 节讨论了理性似乎允许与预期效用理论不一致的偏好的例子。这些例子表明，最大化预期效用并非理性所必需。第 3.2.3 节讨论了预期效用理论允许看似不理性的偏好的例子。这些例子表明，仅仅最大化预期效用并不足以构成理性。第 3.2.4 节讨论了一个例子，其中预期效用理论要求看似被理性禁止的偏好——这对于预期效用对于理性的必要性和充分性提出了挑战。

#### 3.2.1 涉及传递性和完备性的反例

预期效用理论意味着偏好的结构反映了实数之间的大于关系。因此，根据预期效用理论，偏好必须是传递的：如果 A 优先于 B（使得 U（A）>U（B）），并且 B 优先于 C（使得 U（B）>U（C）），那么 A 必须优先于 C（因为必须有 U（A）>U（C））。同样，偏好必须是完备的：对于任何两个选项，要么一个必须优先于另一个，要么行为体对它们是中立的（因为在它们的两个效用中，要么一个更大，要么两个相等）。但是有些情况下，理性似乎允许（甚至可能要求）传递性和完备性的失败。

一个偏好的例子，这种偏好不是传递的，但似乎在理性上是允许的，是 Quinn 的自虐者之谜（1990 年）。自虐者被连接到一个带有标有 0 到 1,000 的刻度的拨盘的机器上，其中设置 0 什么也不做，每个连续的设置提供稍微更强大的电击。设置 0 是无痛的，而设置 1,000 会导致极度的痛苦，但任何两个相邻设置之间的差异都很小，以至于无法察觉。该拨盘配有棘轮，因此可以向上转动但不能向下转动。假设在每个设置处，自虐者都被提供$10,000 以向上移动到下一个设置，因此对于容忍第 n 个设置，他将获得 n⋅$10,000 的回报。对于自虐者而言，他可以偏好将第 n+1 个设置与第 n 个设置相比，对于 0 到 999 之间的每个 n 都是允许的（因为疼痛的差异是无法察觉的，而货币回报的差异是显着的），但不能偏好将第 1,000 个设置与第 0 个设置相比（因为第 1,000 个设置的痛苦可能是如此难以忍受，以至于任何金额的钱都无法弥补。

似乎也是理性允许具有不完整的偏好。对于某些行动对，一个行为体可能对自己更偏好哪一个没有深思熟虑的看法。考虑简，一个电工，从未认真考虑过成为专业歌手或专业宇航员。也许这两个选项都不可行，或者她认为它们都比她稳定的电工工作要糟糕得多。简更喜欢成为歌手并获得 100 美元的奖金，而不是成为歌手，如果她对成为歌手和成为宇航员之间感到漠不关心，她会被理性地迫使更喜欢成为歌手并获得 100 美元的奖金，而不是成为宇航员。

上述两个例子之间有一个关键区别。简的偏好可以通过添加新的偏好而不删除任何现有偏好的方式进行扩展，从而让我们将她表示为预期效用最大化者。另一方面，没有办法扩展自虐者的偏好，以便他可以被表示为预期效用最大化者。他的一些偏好将不得不被改变。对于不完整的偏好，一个流行的回应是声称，虽然理性偏好不需要满足给定表示定理的公理（见第 2.2 节），但必须可能扩展它们，以便它们满足这些公理。从对偏好的这种较弱要求 - 它们可以被扩展为满足相关公理的偏好排序，可以证明相关表示定理的存在部分。然而，不能再建立每个偏好排序都具有一个表示，该表示在允许的转换上是唯一的。

在自虐者的情况下，不存在这样的响应，其偏好无法延伸以满足预期效用理论的公理。有关自虐者案例的更详细讨论，请参阅有关偏好的条目。

#### 3.2.2 涉及独立性的反例

Allais（1953 年）和 Ellsberg（1961 年）提出了一些偏好的例子，这些偏好不能用预期效用函数来表示，但似乎仍然是理性的。这两个例子都涉及对 Savage 的独立性公理的违反：

> 独立性。假设 A 和 `A∗` 是两个在事件 E 为假时产生相同结果的行为。那么，对于任何行为 B，必须有
>
> *如果且仅如果 `AE&B∼E` 优于 `A∗E&B∼E`，则 A 优于 A∗
> *如果且仅如果代理在 A 和 A∗之间是中立的，那么她在 AE&B∼E 和 A∗E&B∼E 之间也是中立的

换句话说，如果两个行为在 E 为假时具有相同的后果，那么代理人在这两个行为之间的偏好应该仅取决于 E 为真时的后果。根据 Savage 对预期效用的定义，预期效用理论包含独立性。而根据 Jeffrey 的定义，预期效用理论在假设状态与行为在概率上独立的情况下包含独立性。

第一个反例是奥莱悖论，涉及两个不同的决策问题，其中随机抽取 1 到 100 之间的号码的一张票。在第一个问题中，代理人必须在这两个抽奖中进行选择：

* 抽奖 A
* •$100 百万，确定性
* 彩票 B
* •如果抽中 1-10 号中的任一张彩票，则获得 5 亿美元
* •如果抽中 12-100 号中的一张票，将获得 1 亿美元
* •如果抽中 11 号票，将一无所获

在第二个决策问题中，代理者必须在这两个抽奖中做出选择：

* 彩票 C
* •如果抽中 1-11 号中的任一张彩票，则获得 1 亿美元
* •否则什么都没有
* 彩票 D
* •如果抽中 1-10 号中的任一张彩票，则获得 5 亿美元
* •否则什么都没有

优先选择 A（提供 100 百万美元的确定性）而不是 B（增加 10%的机会获得 5 亿美元，但由于什么都得不到的风险，更倾向于 A）。 优先选择 D（有 10%的机会获得 5 亿美元奖金）而不是 C（有稍高的 11%的机会获得较小的 1 亿美元奖金）。 但是，这些偏好（称为 Allais 偏好）一起违反了独立性。 A 和 C 的彩票为第 12-100 张票提供相同的 1 亿美元奖金。 可以通过用 0 美元替换这 1 亿美元奖金将它们转换为 B 和 D 的彩票。

由于违反了独立性，Allais 偏好与预期效用理论不相容。 这种不相容性不需要任何关于 0 美元、1 亿美元和 5 亿美元相对效用的假设。 如果 500 百万美元的效用为 x，1 亿美元的效用为 y，0 美元的效用为 z，则彩票的预期效用如下。

预期效用（A）= 0.11y + 0.89y 预期效用（B）= 0.10x + 0.01z + 0.89y 预期效用（C）= 0.11y + 0.89z 预期效用（D）= 0.10x + 0.01z + 0.89z

易于看出，EU(A)>EU(B)的条件正是 EU(C)>EU(D)的条件：只有在 0.11y>0.10x+0.01z 的情况下才能同时满足这两个不等式

埃尔斯伯格悖论还涉及两个决策问题，这两个问题违反了确定性原则。在每个问题中，从一个装有 30 个红球和 60 个比例未知的白球或黄球的罐子中抽取一个球。在第一个决策问题中，决策者必须在以下抽奖之间进行选择：

* 抽奖 R
* •如果抽中红球，赢得 100 美元
* •否则失去 100 美元
* 抽奖 W
* •如果抽中白球，则赢得$100
* •否则失去 100 美元

在第二个决策问题中，行为体必须在以下抽签之间进行选择：

* RY 抽签
* •如果抽中红色或黄色球，则赢得$100
* •否则失去 100 美元
* 彩票 WY
* •如果抽到白色或黄色球，则赢得 100 美元
* •否则失去 100 美元

优先选择 R 而不是 W 似乎是合理的，但同时更喜欢 WY 而不是 RY。 （将这些偏好组合称为埃尔斯伯格偏好。） 像阿莱偏好一样，埃尔斯伯格偏好违反了独立性。 W 和 R 抽到黄球会导致 100 美元的损失；它们可以通过用确定的 100 美元收益替换这 100 美元的损失来转换为 RY 和 WY 抽签。

因为它们违反独立性，Ellsberg 偏好与预期效用理论不兼容。再次强调，这种不兼容性不需要任何关于赢得 100 美元和失去 100 美元的相对效用的假设。我们也不需要任何关于在 0 和 1/3 之间抽取黄球的概率落在哪里的假设。赢得 100 美元的效用为 w，失去 100 美元的效用为 l，

`EU(R)=13w+P(W)l+P(Y)lEU(W)=13l+P(W)w+P(Y)lEU(RY)=13w+P(W)l+P(Y)wEU(WY)=13l+P(W)w+P(Y)w`

很容易看出，`EU(R)>EU(W)` 的条件恰好与 `EU(RY)>EU(WY)`的条件相同：只有在 `1/3w+P(W)l>1/3l+P(W)w` 的情况下才会出现这两个不等式。

对 Allais 和 Ellsberg 悖论有三种显著的回应。首先，可以遵循 Savage（101 页）和 Raiffa（1968 年，80-86 页）的观点，并辩护预期效用理论，认为 Allais 和 Ellsberg 的偏好是不理性的。

其次，可以遵循 Buchak（2013 年）的观点，声称 Allais 和 Ellsberg 的偏好在理性上是允许的，因此预期效用理论在规范理论上失败。Buchak 发展了一种更宽松的理性理论，其中有一个额外的参数代表决策者对风险的态度。这个风险参数与行为的条件概率和结果的效用相互作用，以确定行为的价值。风险参数的一个设置使预期效用理论成为一个特例，但其他“风险厌恶”的设置可以解释 Allais 的偏好。

第三，可以遵循 Loomes 和 Sugden（1986 年），Weirich（1986 年）和 Pope（1995 年）的观点，并主张可以重新描述 Allais 和 Ellsberg 悖论中的结果以适应 Allais 和 Ellsberg 的偏好。Allais 和 Ellsberg 偏好与预期效用理论之间的所谓冲突是基于这样一个假设：同样数额的金钱无论如何获得都具有相同的效用。一些作者对这一假设提出质疑。Loomes 和 Sugden 建议，在赌局的结果中除了金钱数额外，还包括因得到少于（或多于）预期而感到失望（或愉悦）的情绪。Pope 区分了“后果后”的愉悦或失望感与“前景前”的兴奋、恐惧、无聊或安全感，并指出两者都可能影响结果的效用。Weirich 认为，金钱数额的价值部分取决于获得它所涉及的风险，而不管赌徒的感受如何，因此（例如）通过一次确定赌注获得的 1 亿美元比通过可能一无所获的赌局获得的 1 亿美元更有价值。

布鲁姆（1991，第 5 章）对这种重新描述的解决方案提出了担忧。任何偏好都可以通过重新描述结果空间来证明，从而使预期效用理论的公理失去内容。布鲁姆反驳了这一反对意见，提出了一个关于偏好的额外约束：如果 A 比 B 更受青睐，那么 A 和 B 必须在某种程度上存在差异，从而证明优先选择其中之一是合理的。预期效用理论家可以把 Allais 和 Ellsberg 的偏好算作理性选择，如果而且只有当存在一种非货币性差异，证明有理由把货币价值相同的结果放在偏好排序的不同位置时。

#### 3.2.3 Counterexamples Involving Probability 0 Events

在上文，我们已经看到了据称违反预期效用理论的理性偏好的例子。此外，还有一些据称符合预期效用理论的非理性偏好的例子。

根据对预期效用理论的典型理解，当两种行为的预期效用最高时，行为体需要对它们保持中立。Skryms（1980 年，第 74 页）指出，这种观点让我们得出关于概率为 0 的事件的奇怪结论。例如，假设你正要向一个圆形飞镖靶投掷一个点大小的飞镖。经典概率论允许存在飞镖以概率 0 击中任何特定点的情况。你给我下了以下糟糕的交易：如果飞镖正好击中靶板的中心，那么你会向我收取 100 美元；否则，不会有任何金钱交易。我的决策问题可以用以下矩阵来描述：

| | **states** | | --- | --- | --- | --- | | *hit center* (P=0) | *miss center* (P=1) | | **acts** | *accept deal* | −100 | 0 | | *refuse deal* | 0 | 0 |

预期效用理论认为，我接受这个交易是可以接受的——接受的预期效用为 0。（无论是根据杰弗里定义还是萨维奇定义，我们假设飞镖落地的方式与您的投注方式在概率上是独立的。）但常识认为，我接受这个交易是不可接受的。拒绝在某些情况下会产生更好的结果，在任何情况下都不会产生更糟的结果。

Skyrms 建议在经典概率法则中增加一个额外要求，即只有不可能事件被赋予概率 0。Easwaran（2014）认为，我们应该拒绝预期效用理论命令在具有相同预期效用的行为之间表现出漠不关心的观点。相反，预期效用理论并不是关于理性的完整理论：当两个行为具有相同的预期效用时，它并没有告诉我们应该偏好哪一个。我们可以使用非预期效用考虑，如弱支配，作为决策的依据。

#### 3.2.4 反例涉及无界效用

如果存在某个最小自然数 sup，对于 U 的定义域中的每个 A，U(A)≤sup，则效用函数 U 在上方是有界的。同样，如果存在某个最大自然数 inf，对于 U 的定义域中的每个 A，U(A)≥inf，则 U 在下方是有界的。当效用函数在上方、下方或两者均无界时，预期效用理论可能会遇到问题。

一个问题示例是圣彼得堡博弈，最初由伯努利发表。假设抛一枚硬币，直到第一次出现正面为止。如果第一次抛出正面，则赢得 2 美元；如果第二次抛出正面，则赢得 4 美元；如果第三次抛出正面，则赢得 8 美元；如果第 n 次抛出正面，则赢得 2n 美元。假设每美元价值一个尤蒂尔，圣彼得堡博弈的预期价值是

`(12⋅2)+(14⋅4)+(18⋅8)+⋯+(12n⋅2n)+⋯或 1+1+1+⋯=∞`

结果表明，这个总和是发散的；圣彼得堡游戏具有无限的预期效用。因此，根据预期效用理论，您应该更喜欢玩圣彼得堡游戏的机会，而不是任何有限的金钱总和，无论多大。此外，由于无限的预期效用乘以任何非零概率仍然是无限的，任何有可能产生圣彼得堡游戏的事物都具有无限的预期效用。因此，根据预期效用理论，您应该更喜欢任何一次玩圣彼得堡游戏的机会，无论多么渺茫，而不是任何有多大的金钱总和。

Nover 和 Hájek（2004）认为，除了具有无限预期效用的圣彼得堡游戏之外，还有其他无限游戏，其预期效用是未定义的，尽管理性要求在它们之间有一定的偏好。

对这些问题性无穷游戏的一个回应是认为决策问题本身是不适当的（Jeffrey（1983 年，154 页）；另一个是采用一个修改过的预期效用理论的版本，该版本在普通情况下同意其裁决，但在无穷游戏方面产生直观合理的裁决（Thalos 和 Richardson 2013）（Fine 2008）（Colyvan 2006，2008）（Easwaran 2008）。

## 4. 应用

### 4.1 经济学和公共政策

在 20 世纪 40 年代和 50 年代，预期效用理论在美国变得流行，因为它有潜力提供一种机制，可以解释宏观经济变量的行为。随着人们意识到预期效用理论并未准确预测真实人们的行为，其支持者们提出了这样一种观点，即它可能作为一个理性人应该如何应对不确定性的理论。

预期效用理论在公共政策中有各种应用。在福利经济学中，Harsanyi（1953）从预期效用理论推断出，最具社会公正性的安排是最大化分配给整个社会的总福利。预期效用理论还有更直接的应用。Howard（1980）引入了“微死亡”概念，即一百万分之一的死亡几率，并使用预期效用计算来衡量哪些死亡风险是可以接受的。在卫生政策中，质量调整的生命年（QALYs）是衡量不同卫生干预的预期效用的指标，用于指导卫生政策。McAskill（2015）使用预期效用理论来回答有效利他主义的核心问题：“我如何可以做到最有益？”（在这些应用中，效用最自然地被解释为衡量类似幸福或福祉的东西，而不是对个体行为体的主观偏好满足。）

预期效用理论找到应用的另一个领域是保险销售。与赌场一样，保险公司承担经过计算的风险，旨在长期获得财务收益，并必须考虑短期破产的可能性。

### 4.2 伦理学

伦理学家以及他们的后代当代后果主义者认为，一个行为的正确与否取决于其后果的道德好坏。一些后果主义者，比如（Railton 1984），解释为我们应该做任何实际上会产生最好后果的事情。但是很难，也许是不可能知道我们行为的长期后果（Lenman 2000，Howard-Snyder 2007）。鉴于这一观察，Jackson（1991）认为正确的行为是具有最大预期道德价值的行为，而不是实际上会产生最好后果的行为。

正如 Jackson 所指出的，一个行为的预期道德价值取决于我们使用的概率函数。Jackson 认为，虽然每个概率函数都与一个“应该”相关联，但对行动最重要的“应该”是与决策者在行动时的信念程度相关联的那个。其他作者声称其他“应该”更为重要：Mason（2013）偏向于对代理人根据证据在行动时采取的最合理概率函数，考虑到她的认识限制，而 Oddie 和 Menzies（1992）则偏向于客观机会函数作为客观正确性的衡量标准。（他们诉诸于更复杂的概率函数来定义一个“主观正确性”的概念，适用于对客观机会一无所知的决策者。）

另一些人（Smart 1973，Timmons 2002）认为，即使我们应该做任何会产生最好后果的事情，预期效用理论在我们不确定我们的行为会产生什么后果时可以起到决策程序的作用。Feldman（2006）反对说，预期效用计算非常不切实际。在大多数现实生活决策中，计算预期效用所需的步骤超出了我们的能力范围：列出我们行为可能的结果，为每个结果分配一个效用和每个行为给定的条件概率，以及执行计算预期效用所需的算术运算。

预期效用最大化的后果主义版本严格来说不是一个理性选择的理论。这是一个道德选择的理论，但是理性是否要求我们做出道德最好的选择还有待讨论。

### 4.3 认识论

预期效用理论可以用来解决认识论中的实际问题。其中一个问题是何时接受一个假设。在典型情况下，证据在逻辑上与多个假设兼容，包括那些在归纳支持方面贡献较少的假设。此外，科学家通常不仅接受那些在数据给定情况下最有可能的假设。一个假设何时足够可能值得被接受呢？

贝叶斯派，比如 Maher（1993），建议根据预期效用来做出这个决定。接受一个假设是一个决策问题，接受和拒绝是行为。这可以用以下决策矩阵来描述：

| | states | | --- | --- | --- | --- | | 假设为真 | 假设为假 | | 行为 | 接受 | 正确接受 | 错误接受 | | 拒绝 | 错误拒绝 | 正确拒绝 |

根据 Savage 的定义，接受假设的预期效用取决于假设的概率，以及每种结果的效用。 （我们可以预期 Jeffrey 的定义与 Savage 的定义一致，前提是在我们掌握的证据下，假设在我们接受或拒绝它方面在概率上是独立的。）在这里，效用可以被理解为纯粹的认识价值，因为相信有趣的真相，并拒绝错误是认识上有价值的。

批评贝叶斯方法的人，比如 Mayo（1996 年），认为科学假设无法合理地赋予概率。 Mayo 认为，为了给事件分配有用的概率，我们需要关于类似事件频率的统计证据。 但科学假设要么一劳永逸地为真，要么一劳永逸地为假-没有像我们这样的世界的种群，我们可以从中有意义地绘制统计数据。 我们也不能为科学目的使用主观概率，因为这将是不可接受的武断的。 因此，接受和拒绝的预期效用是未定义的，我们应该使用传统统计方法，这些方法依赖于比较我们的证据在每个假设条件下的概率。

预期效用理论还提供了关于何时收集证据的指导。Good（1967）根据预期效用的理由认为，在行动之前收集证据总是理性的，前提是证据是免费的。在额外证据出现后，具有最高预期效用的行为将始终至少与之前具有最高预期效用的行为一样好。

在认识决策理论中，预期效用被用来评估信念状态的理性或非理性。如果我们将信念形成看作是一种心理行为，将有关代理人信念内容的事实看作是事件，将接近真相看作是结果的一个理想特征，那么我们可以使用预期效用理论来评估信念程度，以其对接近真相的预期程度来衡量。关于认识效用论的条目涉及概率主义的预期效用论，包括对各种认识规范（包括条件化和主要原则）的预期效用论的概述。

### 4.4 法律

Kaplan（1968 年）认为，预期效用考虑可以用来确定法律审判中的证明标准。一个陪审团决定是宣判无罪还是有罪时面临以下决策问题：

| | 状态 | --- | --- | --- | --- | | 有罪 | 无罪 | | 行为 | 宣判有罪 | 错误宣判 | 正确宣判 | | 宣判无罪 | 错误无罪 | 正确无罪 |

Kaplan 表明，每当 EU(宣判有罪)>EU(宣判无罪)时

P(有罪)>11+U(真实定罪)−U(错误无罪)U(真实无罪)−U(错误定罪)

从定性上讲，这意味着随着判定标准中无罪者受到的不利(U(真实定罪)−U(错误无罪))增加，或者有罪者受到的不利(U(真实无罪)−U(错误定罪))减少，判定标准也会提高。

对这种决策理论方法的批评者，比如劳丹（2006），认为在法庭上可接受的证据与被告实际有罪的概率之间的鸿沟很难或不可能弥合。有罪的概率取决于三个因素：真正有罪者中表面有罪的分布，真正无辜者中表面有罪的分布，以及真正有罪者与真正无辜者参加审判的比例（参见贝尔 1987）。计算这些因素中的任何一个的障碍都将阻碍法官或陪审团对表面有罪的感知推断出真实有罪概率。


## Bibliography

* Allais M., 1953, “Le Comportement de l’Homme Rationnel devant le Risque: Critique des Postulats et Axiomes de l’École Americaine”, *Econometrica*, 21: 503–546.
* Bell, R., 1987, “Decision Theory and Due Process: A Critique of the Supreme Court’s Lawmaking for Burdens of Proof”, *Journal of Criminal Law and Criminology*, 78: 557-585.
* Bentham, J., 1961. An Introduction to the Principles of Morals and Legislation, Garden City: Doubleday. Originally published in 1789.
* Bernoulli, D., 1738, “Specimen theoriae novae de mensura sortis”, *Commentarii Academiae Scientiarum Imperialis Petropolitanae* 5. Translated by Louise Somer and reprinted as “Exposition of a New Theory on the Measurement of Risk” 1954, *Econometrica*, 22: 23–36.
* Bolker, E., 1966, “Functions Resembling Quotients of Measures”, *Transactions of the American Mathematical Society*, 2: 292–312.
* Bradley, R., 2004, “Ramsey’s representation theorem”, *Dialectica*, 58: 483–497.
* Broome, J., 1991, *Weighing Goods: Equality, Uncertainty and Time*, Oxford: Blackwell, doi:10.1002/9781119451266
* Burch-Brown, J.M., 2014, “Clues for Consequentialists”, *Utilitas*, 26: 105-119.
* Buchak, L., 2013, *Risk and Rationality*, Oxford: Oxford University Press.
* Colyvan, M., 2006, “No Expectations”, *Mind*, 116: 695–702.
* Colyvan, M., 2008, “Relative Expectation Theory”, *Journal of Philosophy*, 105: 37–44.
* Easwaran, K., 2014, “Regularity and Hyperreal Credences”, *The Philosophical Review*, 123: 1–41.
* Easwaran, K., 2008, “Strong and Weak Expectations”, *Mind*, 117: 633–641.
* Elliott, E., 2017, “Ramsey without Ethical Neutrality: A New Representation Theorem”, *Mind*, 126: 1-51.
* Ellsberg, D., 1961, “Risk, Ambiguity, and the Savage Axioms”, *Quarterly Journal of Economics*, 75: 643–669.
* Feldman, F. 2006, “Actual utility, the objection from impracticality, and the move to expected utility”, *Philosophical Studies*, 129 : 49–79.
* Fine, T., 2008, “Evaluating the Pasadena, Altadena, and St Petersburg Gambles”, *Mind*, 117: 613–632.
* Good, I.J., 1967, “On the Principle of Total Evidence”, *The British Journal for the Philosophy of Science*, 17: 319–321
* Greaves, H. 2016, “Cluelessness”, *Proceedings of the Aristotelian Society*, 116: 311-339.
* Hampton, J., “The Failure of Expected-Utility Theory as a Theory of Reason”, *Economics and Philosophy*, 10: 195–242.
* Harsanyi, J.C., 1953, “Cardinal utility in welfare economics and in the theory of risk-taking”, *Journal of Political Economy*, 61: 434–435.
* Herfeld, C., “From Theories of Human Behavior to Rules of Rational Choice: Tracing a Normative Turn at the Cowles Commission, 1943-1954”, *History of Political Economy*, 50: 1-48.
* Howard, R.A., 1980, “On Making Life and Death Decisions”, in R.C. Schwing and W.A. Albers, *Societal Risk Assessment: How Safe is Safe Enough?*, New York: Plenum Press.
* Howard-Snyder, F., 1997, “The Rejection of Objective Consequentialism”, *Utilitas*, 9: 241–248.
* Jackson, F., 1991, “Decision-theoretic consequentialism and the nearest and dearest objection”, *Ethics*, 101: 461–482.
* Jeffrey, R., 1983, *The Logic of Decision*, 2nd edition, Chicago: University of Chicago Press.
* Jevons, W.S., 1866, “A General Mathematical Theory of Political Economy”, *Journal of the Royal Statistical Society*, 29: 282–287.
* Joyce, J., 1999, *The Foundations of Causal Decision Theory*, Cambridge: Cambridge University Press.
* Kahneman, D. & Tversky A., *Judgment Under Uncertainty: Heuristics and Biases*, New York: Cambridge University Press.
* Kaplan, J., 1968, “Decision Theory and the Factfinding Process”, *Stanford Law Review*, 20: 1065-1092.
* Kolmogorov, A. N., 1933, *Grundbegriffe der Wahrscheinlichkeitrechnung, Ergebnisse Der Mathematik*; translated as *Foundations of Probability*, New York: Chelsea Publishing Company, 1950.
* Laudan, L., 2006, *Truth, Error, and Criminal Law*, Cambridge: Cambridge University Press.
* Lenman, J., 2000. “Consequentialism and cluelessness”, *Philosophy and Public Affairs*, 29(4): 342–370.
* Lewis, D., 1981, “Causal Decision Theory”, *Australasian Journal of Philosophy*, 59: 5–30.
* Levi, I., 1991, “Consequentialism and Sequential Choice”, in M. Bacharach and S. Hurley (eds.), *Foundations of Decision Theory*, Oxford: Basil Blackwell Ltd, 92–12.
* Lindblom, C.E., 1959, “The Science of ‘Muddling Through’”, *Public Administration Review*, 19: 79–88.
* Loomes, G. And Sugden, R., 1986, “Disappointment and Dynamic Consistency in Choice Under Uncertainty”, *The Review of Economic Studies*, 53(2): 271–282.
* Maher, P., 1993, *Betting on Theories*, Cambridge: Cambridge University Press.
* March, J.G. and Simon, H., 1958, *Organizations*, New York: Wiley.
* Mason, E., 2013, “Objectivism and Prospectivism About Rightness”, *Journal of Ethics and Social Philosophy*, 7: 1–21.
* Mayo, D., 1996, *Error and the Growth of Experimental Knowledge*, Chicago: University of Chicago Press.
* McAskill, W., 2015, *Doing Good Better*, New York: Gotham Books.
* McGee, V., 1991, “We Turing Machines Aren’t Expected-Utility Maximizers (Even Ideally)”, *Philosophical Studies*, 64: 115-123.
* Meacham, C. and Weisberg, J., 2011, “Representation Theorems and the Foundations of Decision Theory”, *Australasian Journal of Philosophy*, 89: 641–663.
* Menger, K., 1871, *Grundsätze der Volkswirtschaftslehre*, translated by James Dingwall and Bert F. Hoselitz as *Principles of Economics*, New York: New York University Press, 1976; [reprinted online](http://mises.org/Books/Mengerprinciples.pdf), Ludwig von Mises Institute, 2007.
* Mill, J. S., 1861. *Utilitarianism.* Edited with an introduction by Roger Crisp. New York: Oxford University Press, 1998.
* von Neumann, J., and Morgenstern, O., 1944, *Theory of Games and Economic Behavior*, Princeton: Princeton University Press.
* Nover, H. & Hájek, A., 2004, “Vexing expectations”, *Mind*, 113: 237–249.
* Nozick, R., 1969, “Newcomb’s Problem and Two Principles of Choice,” in Nicholas Rescher (ed.), *Essays in Honor of Carl G. Hempel*, Dordrecht: Reidel, 114–115.
* Oliver, A., 2003, “A quantitative and qualitative test of the Allais paradox using health outcomes”, *Journal of Economic Psychology*, 24: 35–48.
* Pope, R., 1995, “Towards a More Precise Decision Framework: A Separation of the Negative Utility of Chance from Diminishing Marginal Utility and the Preference for Safety”, *Theory and Decision*, 39: 241–265.
* Raiffa, H., 1968, *Decision analysis: Introductory lectures on choices under uncertainty*, Reading, MA: Addison-Wesley.
* Ramsey, F. P., 1926, “Truth and Probability”, in *Foundations of Mathematics and other Essays, R. B. Braithwaite* (ed.), London: Kegan, Paul, Trench, Trubner, & Co., 1931, 156–198; reprinted in *Studies in Subjective Probability*, H. E. Kyburg, Jr. and H. E. Smokler (eds.), 2nd edition, New York: R. E. Krieger Publishing Company, 1980, 23–52; reprinted in *Philosophical Papers*, D. H. Mellor (ed.), Cambridge: Cambridge University Press, 1990.
* Savage, L.J., 1972, *The Foundations of Statistics*, 2nd edition, New York: Dover Publications, Inc.
* Sen, A., 1977, “Rational Fools: A Critique of the Behavioral Foundations of Economic Theory”, *Philosophy and Public Affairs*, 6: 317–344.
* Shafer, G., 2007, “From Cournot’s principle to market efficiency”, in *Augustin Cournot: Modelling Economics*, Jean-Philippe Touffut (ed.), Cheltenham: Edward Elgar, 55–95.
* Sidgwick, H., 1907. *The Methods of Ethics,* Seventh Edition. London: Macmillan; first edition, 1874.
* Simon, H., 1956, “A Behavioral Model of Rational Choice”, *The Quarterly Journal of Economics*, 69: 99–118.
* Skyrms, B., 1980. *Causal Necessity: A Pragmatic Investigation of the Necessity of Laws*, New Haven, CT: Yale University Press.
* Smith, H.M., “Subjective Rightness”, *Social and Political Philosophy*, 27: 64-110.
* Sobel, J.H., 1994, *Taking Chances: Essays on Rational Choice*, Cambridge: Cambridge University Press.
* Spohn, W., 1977, “Where Luce and Krantz do really generalize Savage’s decision model”, *Erkenntnis*, 11: 113–134.
* Srinivasan, A., 2015, “Normativity Without Cartesian Privilege”, *Noûs*, 25: 273-299.
* Suppes, P., 2002, *Representation and Invariance of Scientific Structures*, Stanford: CSLI Publications.
* Thalos, M. and Richardson, O., 2013, “Capitalization in the St. Petersburg game: Why statistical distributions matter”, *Politics, Philosophy & Economics*, 13: 292-313.
* Weinstein, M.C., Torrence, G., and McGuire, A., 2009 “QALYs: the basics”, *Value in Health*, 12: S5–S9.
* Weirich, P., 1986, “Expected Utility and Risk”, *British Journal for the Philosophy of Science*, 37: 419–442.
* Zynda, L., 2000, “Representation Theorems and Realism about Degrees of Belief”, *Philosophy of Science*, 67: 45–69.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=rationality-normative-utility). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/rationality-normative-utility/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=rationality-normative-utility&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/rationality-normative-utility/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* [Decisions, Games, and Rational Choice](http://ocw.mit.edu/courses/linguistics-and-philosophy/24-222-decisions-games-and-rational-choice-spring-2008/), materials for a course taught in Spring 2008 by Robert Stalnaker, MIT OpenCourseWare.
* [Microeconomic Theory III](http://dspace.mit.edu/handle/1721.1/99213), materials for a course taught in Spring 2010 by Muhamet Yildiz, MIT OpenCourseWare.
* [Choice Under Uncertainty](http://web.stanford.edu/~jdlevin/Econ%20202/Uncertainty.pdf), class lecture notes by Jonathan Levin.
* [Expected Utility Theory](https://philarchive.org/rec/MONEUT), by Philippe Mongin, entry for The Handbook of Economic Methodology.
* [The Origins of Expected Utility Theory](http://www.researchgate.net/publication/228900877_The_Origins_of_Expected_Utility_Theory/links/0c96052b159831042a000000), essay by Yvan Lengwiler.

## Related Entries

[decision theory](https://plato.stanford.edu/entries/decision-theory/) | [decision theory: causal](https://plato.stanford.edu/entries/decision-causal/) | [Pascal’s wager](https://plato.stanford.edu/entries/pascal-wager/) | [preferences](https://plato.stanford.edu/entries/preferences/) | [probability, interpretations of](https://plato.stanford.edu/entries/probability-interpret/) | [Ramsey, Frank: and intergenerational welfare economics](https://plato.stanford.edu/entries/ramsey-economics/) | [rational choice, normative: rivals to expected utility](https://plato.stanford.edu/entries/rationality-normative-nonutility/) | [risk](https://plato.stanford.edu/entries/risk/)

[Copyright © 2023](https://plato.stanford.edu/info.html#c) by  
[R. A. Briggs](https://philosophy.stanford.edu/people/ray-briggs) <[*formal.epistemology@gmail.com*](mailto:formal%2eepistemology%40gmail%2ecom)>
