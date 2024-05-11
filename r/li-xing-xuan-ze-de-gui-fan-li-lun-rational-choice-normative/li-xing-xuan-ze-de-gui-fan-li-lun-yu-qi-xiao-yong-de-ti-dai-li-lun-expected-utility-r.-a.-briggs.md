# 理性选择的规范理论：预期效用 expected utility (R. A. Briggs)

首次发表于 2014 年 8 月 8 日，实质修订于 2023 年 9 月 18 日

我们经常在不确定的条件下做决策。攻读生物学学位可能会带来丰厚的就业机会，也可能导致失业和沉重的债务。看医生可能会导致早期发现和治疗疾病，也可能是浪费金钱。预期效用理论是一种解释当你不确定行为结果时如何理性选择的原理。它的基本口号是：选择预期效用最高的行为。

本文讨论预期效用理论作为一种规范理论，即人们应该如何做出决策的理论。在古典经济学中，预期效用理论通常被用作描述性理论，即人们如何做出决策的理论，或者作为预测性理论，即虽然它可能不能准确地模拟决策的心理机制，但能正确预测人们的选择。预期效用理论在许多现实生活中的选择情况下对人们的决策做出了错误的预测（参见 Kahneman＆Tversky 1982）；然而，这并不能解决人们是否应该根据预期效用考虑做出决策的问题。

一种行为的预期效用是其可能结果的效用的加权平均值，其中结果的效用衡量了该结果相对于其他选择的偏好程度。每个结果的效用根据该行为导致该结果的概率进行加权。第 1 节更严格地阐述了预期效用的基本定义，并讨论了它与选择的关系。第 2 节讨论了预期效用理论的两种类型的论证：表示定理和长期统计论证。第 3 节考虑了对预期效用理论的反对意见；第 4 节讨论了它在宗教哲学、经济学、伦理学和认识论中的应用。

1. 定义预期效用
预期效用的概念最好通过例子来说明。假设我计划去散步，需要决定是否带上雨伞。在晴天我宁愿不带雨伞，但在下雨时我宁愿带着雨伞。我有两种行为可选择：带上雨伞或者把它留在家里。我应该选择哪种行为呢？

这个非正式的问题描述可以稍微正式一些，涉及到三种实体。首先，有结果——非工具性偏好的对象。在这个例子中，我们可以区分三种结果：要么我保持干燥和自由，要么我保持干燥但被笨重的雨伞所束缚，要么我变得湿透。其次，有状态——决策者无法控制的事物，会影响决策的结果。在这个例子中，有两种状态：要么下雨，要么不下雨。最后，有行为——决策者工具性偏好的对象，某种程度上说，是她可以做的事情。在这个例子中，有两种行为：我可以带上雨伞，或者把它留在家里。预期效用理论提供了一种根据行为的可选择性对其进行排序的方法：预期效用越高，选择该行为就越好。（因此，最好选择预期效用最高的行为——或者在多个行为并列时选择其中之一。）

遵循一般惯例，我将对行为、状态和结果之间的关系做出以下假设。

状态、行为和结果都是命题，即可能性的集合。Ω是可能性的最大集合，其中每个状态、行为或结果都是一个子集。
行为的集合、状态的集合和结果的集合都是Ω上的划分。换句话说，行为和状态是个体化的，以便Ω中的每个可能性都是只有一个状态发生、代理人执行一次行为并产生一个结果的情况。
行为和状态在逻辑上是独立的，因此没有任何状态排除了任何行为的执行。
我暂时假设，在给定世界的状态下，每个行为都有一个可能的结果。（第 1.1 节简要讨论了如何削弱这个假设。）
因此，雨伞的例子可以用以下矩阵来描述，其中每一列对应于世界的一个状态；每一行对应于一个行为；每个条目对应于在世界的状态下执行该行为所产生的结果。

| | states | | --- | --- | --- | --- | | 下雨 | 不下雨 | | 行动 | 拿伞 | 被阻碍，干燥 | 被阻碍，干燥 | | 放下伞 | 湿了 | 自由，干燥 |

在建立基本框架之后，我现在可以严格定义预期效用。行动 A（例如，拿伞）的预期效用取决于问题的两个特征：

每个结果的价值，由一个称为效用的实数来衡量。
对于 A 而言，每个结果发生的概率条件是：
在给定这三个信息的情况下，A 的预期效用被定义为：

EU(A)=∑o∈OPA(o)U(o)

其中 O 是结果集，PA(o)是在 A 条件下结果 o 的概率，U(o)是 o 的效用。

接下来的两个小节将解释条件概率函数 PA 和效用函数 U。

1.1 条件概率
术语 PA（o）表示在代理选择行为 A 的假设下，结果 o 发生的概率，大致上表示结果 o 发生的可能性有多大。（有关概率公理，请参见概率解释词条。）要理解这意味着什么，我们必须回答两个问题。首先，哪种概率解释是适当的？其次，在代理选择行为 A 的假设下分配概率意味着什么？

预期效用理论家通常将概率解释为衡量个体置信度的度量，因此，命题 E 对于一个代理来说越可能发生，该代理对 E 的置信度越高（例如，参见 Ramsey 1926，Savage 1972，Jeffrey 1983）。但是，预期效用理论的形式主义并没有强制我们采用这种解释。我们可以将概率解释为客观机会（如 von Neumann 和 Morgenstern 1944 中所述），或者将其解释为根据证据所证明的置信度，如果我们认为这些更好地指导了理性行动。（有关这些和其他选项的讨论，请参见概率解释词条。）

在代理选择行为 A 的假设下分配概率意味着什么？在这里，有两种基本类型的答案，对应于证据决策理论和因果决策理论。

根据杰弗里（1983）支持的证据决策理论，相关的假设概率 PA(o)是条件概率 P(o∣A)，定义为两个无条件概率的比值：P(A&o)/P(A)。

反对杰弗里对预期效用的定义，斯波恩（1977）和莱维（1991）认为决策者不应该为正在考虑的行为分配概率：当自由决定是否执行行为 A 时，不应该考虑自己对是否会执行 A 的信念。如果斯波恩和莱维是正确的，那么杰弗里的比值是未定义的（因为其分母是未定义的）。

诺齐克（1969）提出了另一个异议：杰弗里的定义在纽科姆问题中得出了奇怪的结果。一个预测者给你一个封闭的盒子，里面装着
 100 万美元，并给你一个打开的盒子，里面还有额外的
 100 万美元。你的决策矩阵如下：

| | 状态 | | --- | --- | --- | --- | |
 0 在封闭盒子中 | | 行为 | 单盒 |
 0 | | 双盒 |
 1,000 |

双盒策略在每个状态下都能产生更好的结果，因此优于单盒策略。然而，在杰弗里对条件概率的定义下，单盒策略的预期效用高于双盒策略。如果你选择单盒策略，封闭盒子中有 100 万美元的条件概率很高，因此单盒策略的预期效用也很高。同样地，如果你选择双盒策略，封闭盒子中没有任何东西的条件概率很高，因此双盒策略的预期效用很低。

因果决策理论是一个可以解决这些问题的替代方案。它不要求（但仍允许）行为具有概率，并且在纽科姆问题中建议选择双盒策略。

因果决策理论有许多种类，但我将考虑由萨维奇（1972）提出的代表性版本，该版本通过将与行为 A 结合导致结果 o 的状态的概率相加来计算 PA(o)。让 fA，s（o）是一个将 o 映射为 1（如果 o 是在状态 s 中执行 A 的结果），否则将 o 映射为 0 的结果函数。然后

PA(o)=∑s∈SP(s)fA,s(o)

根据萨维奇的建议，两个盒子的选择比一个盒子的选择具有更高的预期效用。无论您在决策之前分配给状态的概率是多少，这个结果都成立。让 x 是您分配给封闭盒子包含 100 万美元的状态的概率。根据萨维奇的说法，一个盒子的预期效用和两个盒子的预期效用分别是：

x⋅U(
0)

 和

x⋅U(
1,000)

只要较大的货币金额被严格分配较大的效用，第二个总和（两个盒子的效用）保证大于第一个（一个盒子的效用）。

Savage 假设每个行为和状态足以唯一确定一个结果。但是有些情况下这个假设会失效。假设你向我提供以下赌博：你将抛一枚硬币；如果硬币正面朝上，我赢得 100 元。但是我拒绝了这个赌博，硬币也没有被抛出。如果硬币被抛出，就不会有任何结果产生-我可能会赢得 100 元。

我们可以通过让 fA,s 成为一个将结果映射到[0,1]区间内实数的概率函数来概括 Savage 的提议。Lewis（1981 年），Skyrms（1980 年）和 Sobel（1994 年）将 fA,s 等同于如果状态 s 发生并且代理选择行动 A，o 将成为结果的客观机会。

在某些情况下，最著名的是纽科姆问题，Jeffrey 定义和 Savage 定义的预期效用不一致。但只要满足以下两个条件，它们就是一致的。

行为在概率上独立于状态。用形式化的术语来说，对于所有的行为 A 和状态 s，P(s)=P(s∣A)=P(s&A)P(A)。（这是纽科姆问题中违反的条件。）
对于所有的结果 o，行为 A 和状态 s，fA,s(o)等于给定 A 和 s 的条件概率 o；用形式化的术语来说，fA,s(o)=P(o∣A&s)=P(o&A&s)P(A&s)。（当行为和状态无法唯一确定结果时，需要满足这个条件；参见 Lewis 1981 年。）
 1.2 结果效用
术语 U(o)代表结果 o 的效用，大致上表示 o 的价值。形式上，U 是一个将实数分配给每个结果的函数。（与 U 相关的单位通常称为 utiles，因此如果 U(o)=2，我们说 o 值 2 个 utiles。）效用越大，结果越有价值。

utiles 所衡量的是什么价值？通常情况下，utiles 不被视为货币单位，如美元、英镑或日元。伯努利（1738 年）认为金钱和其他商品具有递减的边际效用：当一个经济主体变得更富有时，每一美元（或金表、苹果）对她来说都比上一个更不具有价值。他给出了以下例子：对于一个富人来说，但对于一个穷人来说，为了获得一个有 50%机会赢得 2 万 ducats 和 50%机会一无所获的彩票，支付 9000ducats 是理性的。由于彩票给予两个人相同的机会获得每个货币奖励，奖励的价值必须根据玩家是穷人还是富人而有所不同。

经典功利主义者如本丹姆（1789 年）、密尔（1861 年）和西奇威克（1907 年）将效用解释为快乐或幸福的度量。对于这些作者来说，说 A 的效用比 B 更大（对于一个代理人或一组代理人）意味着 A 带来的快乐或幸福比 B 更多（对于该代理人或代理人组）。

对于效用的这种解释的一个反对意见是，可能没有一个单一的好（或者确实没有任何好）是理性要求我们追求的。但是，如果我们将“效用”理解得足够广泛，包括所有潜在可取的目标——快乐、知识、友谊、健康等等——那么并不清楚是否存在一种唯一正确的方式来权衡不同的好，以使每个结果都获得效用。对于一个禁欲的修道士的生活是否比一个快乐的放荡者的生活更好，这个问题可能没有一个好的答案——但是将效用分配给这些选择迫使我们进行比较。

当代决策理论家通常将效用解释为偏好的度量，因此说 A 的效用比 B 更大（对于一个代理人）只是说该代理人更喜欢 A 而不是 B。对于这种方法来说，重要的是偏好不仅仅存在于结果之间（如快乐的数量或快乐和知识的组合），还存在于不确定的前景之间（如一次抽奖，如果一枚特定的硬币正面朝上，将支付 100 万美元，如果硬币反面朝上，将导致一小时的痛苦电击）。本文的第 2 节详细讨论了偏好与选择之间的形式关系。

预期效用理论不要求偏好是自私的或自利的。有人可能更喜欢把钱捐给慈善机构而不是在奢华的晚餐上花钱，或者更愿意牺牲自己的生命而不是让自己的孩子死去。Sen（1977）认为，每个人的心理最好用三个排名来表示：一个代表个人狭隘的自利，第二个代表个人更广泛的自利，考虑到同情的感受（例如，看到他人受苦时的痛苦），第三个代表个人的承诺，这可能要求她违背自己广义上的自利行事。

Broome（1991 年，第 6 章）将效用解释为衡量客观优劣的比较，而不是个人偏好：说 A 的效用比 B 大是指 A 在客观上比 B 更好，或者理性的人会更喜欢 A 而不是 B。正如概率论的形式主义没有要求我们使用主观概率而不是客观概率一样，预期效用理论的形式主义也没有要求我们使用主观价值而不是客观价值。

那些将效用解释为个人偏好的人面临着一个特殊的挑战：所谓的人际效用比较问题。在决定如何分配共享资源时，我们经常想知道我们的行为是否会使爱丽丝比鲍勃更好，如果是的话，更好多少。但是，如果效用是个人偏好的度量，就没有明确、有意义的方法来进行这些比较。爱丽丝的效用由爱丽丝的偏好构成，鲍勃的效用由鲍勃的偏好构成，而没有跨越爱丽丝和鲍勃的偏好。我们不能假设爱丽丝的效用 10 等同于鲍勃的效用 10，就像我们不能假设在微分方程中获得 A 等级等同于在编织篮子中获得 A 等级一样。

现在是考虑效用函数的哪些特征携带有意义信息的好时机。比较是有信息量的：如果 U(o1)>U(o2)（对于一个人），那么 o1 比 o2 更好（或更受偏好）。但仅仅比较是有信息量的——如果预期效用理论要给出有意义的结果，效用函数必须携带其他信息。

为了看清楚为什么，再次考虑雨伞的例子。这次，我为每个状态填写了一个概率，以及每个结果的效用。

| | 状态 | | --- | --- | --- | --- | | 下雨 (P=0.6) | 不下雨 (P=0.4) | | 行动 | 拿伞 | 负担重，干燥 (U=5) | 负担重，干燥 (U=5) | | 放下伞 | 湿了 (U=0) | 自由，干燥 (U=10) |

拿伞的预期效用是

EU(拿伞)=P 拿伞(负担重，干燥)⋅5+P 拿伞(湿了)⋅0+P 拿伞(自由，干燥)⋅10=5

当预期效用理论告诉我带上雨伞比不带更好时，预期效用理论告诉我带上雨伞比不带更好。

EU(带上)=P 带上(阻碍,干燥)⋅5+P 带上(湿)⋅0+P 带上(自由,干燥)⋅10=4

由于 EU(带上)>EU(不带)，预期效用理论告诉我带上雨伞比不带更好。

但是现在，假设我们改变结果的效用：不再使用 U，而是使用 U'。

| | 状态 | | --- | --- | --- | --- | | 下雨 (P=0.6) | 不下雨 (P=0.4) | | 行动 | 拿伞 | 负担重，干燥 (U'=4) | 负担重，干燥 (U'=4) | | 不拿伞 | 湿身 (U'=2) | 自由，干燥 (U'=8) |

拿伞的新预期效用是

EU′(take)=Ptake(encumbered,dry)⋅4+Ptake(wet)⋅2+Ptake(free,dry)⋅8=4

当撑伞时，新的预期效用为

EU′(leave)=Pleave(encumbered,dry)⋅4+Pleave(wet)⋅2+Pleave(free,dry)⋅8=4.4

由于 EU′(take)<EU′(leave)，预期效用理论告诉我，放弃雨伞比带走它更好。

效用函数 U 和 U′以完全相同的方式对结果进行排名：自由、干燥是最好的；负担、干燥位于中间；而湿润是最糟糕的。然而，预期效用理论在两个问题版本中给出了不同的建议。因此，适当由 U 描述的偏好与适当由 U′描述的偏好之间必须存在一些实质性的差异。否则，预期效用理论是反复无常的，并且在给出同一问题的不同描述时可能会改变其建议。

两个效用函数何时代表相同的基本情况？测量理论通过表征效用函数的允许变换方式来回答这个问题，即保持其所有有意义的特征不变的方式。如果我们表征了效用函数的允许变换方式，我们就已经指定了哪些特征是有意义的。

预期效用理论的辩护者通常要求效用通过线性刻度来衡量，其中允许的转换仅限于正线性转换，即形式为 f 的函数

f(U(o))=x⋅U(o)+y

其中 x>0 和 y 为实数。

正向线性转换结果效用不会影响预期效用理论的判断：如果 A 在效用函数 U 衡量下比 B 具有更大的预期效用，那么在任何正向线性转换 U 衡量下，A 仍然比 B 具有更大的预期效用。

2. 预期效用理论的论证
为什么选择最大化预期效用的行为？一个可能的答案是预期效用理论是理性的基础，也就是说，目的与手段的理性实质上涉及最大化预期效用。然而，对于那些对这个答案不满意的人来说，还有两个进一步的理由。首先，有长期论证，依赖于预期效用最大化在长期内是有利可图的证据。其次，有基于表示定理的论证，这些定理表明，某些对偏好的理性约束意味着所有理性的代理人都最大化预期效用。

 2.1 长期论证
最大化预期效用的一个原因是它在长期内可以产生良好的政策。费勒（1968）提出了这个论证的一个版本。他依赖于关于概率的两个数学事实：大数定律的强弱形式。这两个事实都涉及独立同分布试验的序列，这种设置是在一系列轮盘赌或掷骰子游戏中反复以相同方式下注的结果。大数定律的强弱形式都表明，在长期内，每次试验获得的平均效用量极有可能接近于单次试验的预期值。

大数定律的弱形式表明，对于每个试验的预期值为μ，对于任意小的实数ϵ>0 和δ>0，存在某个有限的试验次数 n，使得对于所有大于或等于 n 的 m，以至少 1−δ的概率，赌徒在前 m 次试验中的平均收益将在ϵ的范围内接近于μ。换句话说，在一系列类似赌博的长期运行中，每次试验的平均收益极有可能在有限的时间内趋近于赌博的预期值。因此，在有限的长期运行中，与赌博相关的平均值极有可能接近于其预期值。

大数定律表明，每次试验的期望值为μ，以概率 1，对于任意小的实数ϵ>0，随着试验次数的增加，赌徒每次试验的平均赢利将在μ的ϵ范围内。换句话说，随着赌博重复次数趋近于无穷大，每次试验的平均收益将以概率 1 趋近于赌博的期望值。因此，从长远来看，与赌博相关的平均值几乎肯定等于其期望值。

对于这些长期论证存在几个异议。首先，许多决策不能在无限次相似试验中重复。例如，关于选择哪种职业、与谁结婚以及住在哪里的决策，最多只能做出有限次数的决策。此外，即使这些决策多次出现，不同的试验涉及不同的可能结果，具有不同的概率。不清楚为什么关于重复赌博的长期考虑应该对这些单次选择产生影响。

其次，这个论证依赖于两个独立性假设，其中一个或两个可能失败。一个假设是不同试验的概率是独立的。这对于赌场赌博是正确的，但对于我们希望使用决策理论的其他选择（例如，关于医疗治疗的选择）则不正确。我在一次抗生素疗程后仍然生病，这使得我在下一次疗程后仍然生病的可能性增加，因为它增加了抗生素耐药细菌在我的身体中传播的机会。这个论证还要求不同试验的效用是独立的，以便在其他试验中无论赢得什么奖品，都对决策者的整体效用产生相同的贡献。但在许多现实世界的案例中，这个假设是不成立的。由于金钱的边际效用递减，一次轮盘赌游戏赢得 100 万美元。

第三个问题是大数定律的强弱法则在模态上是弱的。这两个法则都不能推断出，如果一个赌博在适当的假设下被无限重复（无限次），每次试验的平均效用增益将接近于游戏的预期效用。它们只能确定每次试验的平均效用增益将以很高的概率接近于游戏的预期效用。但是高概率——甚至概率为 1——并不等于确定性。（标准概率论拒绝 Cournot 原则，该原则认为低概率或零概率的事件不会发生。但请参见 Shafer（2005）对 Cournot 原则的辩护。）对于任何独立同分布试验序列，每次试验的平均效用回报可能与单次试验的预期效用相差任意远。

2.2 表示定理
对于预期效用理论的第二种论证类型依赖于所谓的表示定理。我们遵循 Zynda（2000）对这一论证的阐述——稍作修改以反映效用和概率的作用。这个论证有三个前提：

理性条件。

预期效用理论的公理是理性偏好的公理。

 可表示性。

如果一个人的偏好符合预期效用理论的公理，那么她可以被表示为具有符合概率计算法则的信念程度[和一个效用函数，使她更喜欢具有更高预期效用的行为]。

 现实条件。

如果一个人可以被表示为具有符合概率计算法则的信念程度[和一个效用函数，使她更喜欢具有更高预期效用的行为]，那么这个人确实具有符合概率计算法则的信念程度[并确实更喜欢具有更高预期效用的行为]。

这些前提导致以下结论。

如果一个人[不偏好具有更高预期效用的行为]，那么这个人违反了至少一个理性偏好公理。

如果前提是真实的，那么这个论证表明，那些偏好与预期效用理论相悖的人存在问题，他们违反了理性偏好公理。让我们更详细地考虑每个前提，从关键前提"可代表性"开始。

概率函数和效用函数一起表示了一组偏好，只有在对于偏好关系的定义域中的所有 A 和 B 的值都满足以下公式时才成立

如果且仅当 A 优于 B 时，EU(A)>EU(B)。

表示性的数学证明被称为表示定理。第 2.1 节概述了三个最有影响力的表示定理，每个定理都依赖于不同的公理集合。

无论我们使用哪套公理，理性条件都是有争议的。在某些情况下，似乎是理性允许的偏好——甚至是理性所要求的偏好——违反了预期效用理论的公理。第 3 节详细讨论了这些情况。

现实条件也是有争议的。Hampton（1994 年）、Zynda（2000 年）和 Meacham 和 Weisberg（2011 年）都指出，能够用概率和效用函数来表示并不意味着具有概率和效用函数。毕竟，一个可以被表示为具有服从概率计算的信念程度的预期效用最大化者的代理人，也可以被表示为在违反概率计算的信念程度下未能最大化预期效用的人。为什么要认为预期效用表示是正确的呢？

有几种选择。也许表示定理的辩护者可以规定，具有特定的信念程度和效用就是具有相应的偏好。对于这种回应的辩护者来说，主要的挑战是解释为什么以预期效用为基础的表示在解释上是有用的，以及为什么它们比其他替代表示更好。或者也许概率和效用是我们民间信念和欲望的良好清理理论替代品——我们民间概念的精确科学替代品。Meacham 和 Weisberg 对这种回应提出了质疑，认为概率和效用并不是我们民间概念的好替代品。Zynda 提出的第三种可能性是，关于信念程度的事实是独立于代理人的偏好而成立的，并且提供了一种有原则的方式来限制可接受表示的范围。对于这种类型回应的辩护者来说，挑战在于具体说明这些额外的事实是什么。

我现在转向考虑三个有影响力的表征定理。这些表征定理在三个在哲学上具有重要意义的方面上有所不同。

首先，不同的表征定理在偏好和效用的对象上存在分歧。它们是否可重复？它们是否必须完全在代理人的控制之内？

其次，表征定理在对概率的处理上存在差异。它们对哪些实体具有概率以及同一对象是否可以同时具有概率和效用存在分歧。

第三，尽管每个表示定理证明了对于适当的偏好排序，存在一个表示偏好排序的概率和效用函数，但它们在这个概率和效用函数的唯一性上存在差异。换句话说，它们在哪些概率和效用函数的转换是允许的方面存在差异。

2.2.1 Ramsey
对于预期效用的表示定理的想法可以追溯到 Ramsey（1926）。（他对表示定理的概述随后由 Bradley（2004）和 Elliott（2017）填补。）Ramsey 假设偏好是在一个赌博的领域中定义的，这些赌博在命题 P 为真的条件下产生一个奖励，而在命题 P 为假的条件下产生另一个奖励。（赌博的例子：如果你要生孩子，你会得到一件婴儿连体衣，否则你会得到一瓶苏格兰威士忌；如果 Bojack 赢得肯塔基德比赛，你会得到二十美元，否则你会损失一美元。）

当“两个仅在于[其真实性]方面有所不同的可能世界总是具有相等价值”时，拉姆齐将一个命题称为伦理中立。对于一个伦理中立的命题，可以通过偏好来定义概率 1/2：只有在你对于在其两侧下注是无所谓的情况下，这个命题的概率才为 1/2。（因此，如果博杰克赢得了肯塔基德比是一个伦理中立的命题，只有在你对于如果它为真时赢得 20 美元并且否则输掉 1 美元，以及如果它为假时赢得 20 美元并且否则输掉 1 美元之间无所谓的情况下，它的概率才为 1/2。）

通过假设一个概率为 1/2 的伦理中立命题，以及一个丰富的奖品空间，拉姆齐为奖品定义了数值效用。（大致的想法是，如果你对于确定地获得一个中等奖品 m 和一个如果伦理中立命题为真则获得更好奖品 b 和如果伦理中立命题为假则获得更差奖品 w 的赌博之间无所谓，那么 m 的效用就在 b 和 w 的效用之间。）利用这些数值效用，他利用预期效用的定义来为所有其他命题定义概率。

大致的想法是利用奖品空间的丰富性，确保对于任何一个赌博 g，如果 E 为真则获得更好奖品 b 和如果 E 为假则获得更差奖品 w，代理人在 g 和某个中等奖品 m 之间无所谓。这意味着 EU(g)=EU(m)。利用一些代数运算，再加上 EU(g)=P(E)U(b)+(1−P(E))U(w)这个事实，拉姆齐展示了

P(E)=(1−U(m)(U(b)−U(w))

2.2.2 冯·诺依曼和莫根斯特恩
冯·诺依曼和莫根斯特恩（1944 年）声称偏好是在一系列彩票的领域中定义的。其中一些彩票是固定的，并且确定地产生单个奖品。（奖品可能包括香蕉、一百万美元、价值一百万美元的债务、死亡或一辆新车。）彩票也可以有其他彩票作为奖品，因此可以有一个有 40%的机会产生香蕉，有 60%的机会产生一次百分之五十的赌博，其中一百万美元和死亡的机会各占一半。彩票的领域在混合操作下是封闭的，因此如果 L 和 L'是彩票，x 是[0,1]区间内的实数，那么存在一个彩票 xL+(1−x)L'，以概率 x 产生 L，以概率 1−x 产生 L'。他们证明了每个遵循某些公理的偏好关系都可以用来定义彩票的概率来表示，以及一个唯一的效用函数，该函数在正线性变换下是唯一的。

2.2.3 Savage
萨维奇（Savage）（1972）不像冯·诺依曼和莫根斯特恩那样默认概率，而是将其定义为对行为的偏好。萨维奇提出了三个独立的领域。概率适用于事件，我们可以将其视为状态的析取，而效用和内在偏好适用于结果。预期效用和非内在偏好适用于行为。

对于萨维奇来说，行为、状态和结果必须满足一定的约束条件。行为必须完全在代理人的控制之下（因此，发表我的论文在《心灵》杂志上不是一种行为，因为它在某种程度上取决于编辑的决定，而我无法控制）。结果必须在任何状态下具有相同的效用（因此，“我赢得一辆豪华车”不是一种结果，因为豪华车的效用在那些我最想打动的人希望我有一辆豪华车的状态下更大，在我失去驾照的状态下更小）。没有状态可以排除任何行为的执行，行为和状态必须共同确定一个确定的结果。对于每个结果 o，都有一个恒定的行为，在每个状态下都会产生 o。（因此，如果世界和平是一种结果，那么无论世界的状态如何，都有一种行为会导致世界和平。）最后，他假设对于任何两个行为 A 和 B 和任何事件 E，都存在一个混合行为 AE&B∼E，如果 E 为真，则产生与 A 相同的结果，否则产生与 B 相同的结果。（因此，如果世界和平和世界末日都是结果，那么存在一种混合行为，如果某个硬币正面朝上，则导致世界和平，否则导致世界末日。）

Savage 对行为进行了偏好关系的假设，并给出了规定该偏好关系的公理。然后，他根据偏好来定义了主观概率或信念程度。关键的一步是定义了事件之间的“至少与...一样可能”的关系；我在这里进行了解释。

假设 A 和 B 是常数行为，使得 A 优于 B。那么，只要代理人要么更喜欢 AE&B∼E（如果 E 发生，则产生 A，否则产生 B 的行为）而不是 AF&B∼F（如果 F 发生，则产生 A，否则产生 B 的行为），要么对 AE&B∼E 和 AF&B∼F 持中立态度，那么 E 至少与 F 一样可能。

这个定义背后的思想是，代理人认为 E 至少与 F 一样可能，只要她不愿意在 F 上下注而不是在 E 上下注。

Savage 然后给出了约束理性偏好的公理，并且证明了满足这些公理的任何偏好集合都会产生一个“至少与之相等”的关系，该关系可以通过一个概率函数唯一地表示。换句话说，存在一个且仅存在一个概率函数 P，对于所有的 E 和 F，当且仅当 E 至少与 F 一样可能时，P(E)≥P(F)。满足 Savage 公理的每个偏好关系都可以由这个概率函数 P 来表示，再加上一个唯一的效用函数，该函数在正线性变换下是唯一的。

Savage 的表示定理给出了强有力的结果：仅从偏好排序开始，我们就可以找到一个单一的概率函数和一个狭窄的效用函数类，来表示该偏好排序。然而，不足之处在于 Savage 不得不对行为领域建立不太可信的强假设。

Luce 和 Suppes（1965）指出 Savage 的常数行为是不可信的。（回想一下，常数行为在每个状态下产生相同的结果和相同的价值。）拿一些非常好的结果——每个人都感到无比幸福。在每个可能的状态下，包括人类被陨石灭绝的状态，真的存在一个常数行为能够产生这个结果吗？Savage 对混合行为空间的依赖也存在问题。Savage 不得不假设对于任何两个结果和任何事件，存在一个混合行为，如果事件发生，则产生第一个结果，否则产生第二个结果。真的存在一个行为，如果每个人都被抗生素耐药性瘟疫杀死，则产生无比幸福，否则产生极度痛苦吗？Luce 和 Krantz（1971）提出了改进 Savage 表示定理的方法，削弱了这些假设，但 Joyce（1999）认为即使在削弱的假设下，行为领域仍然不太可信丰富。

2.2.4 Bolker 和 Jeffrey
Bolker（1966）证明了关于数学期望的一般表示定理，Jeffrey（1983）以此为基础，提出了关于预期效用理论的哲学解释。Bolker 的定理假设了一个命题的单一领域，这些命题既是偏好、效用，也是概率的对象。因此，今天会下雨的命题既有一个效用，也有一个概率。Jeffrey 将这个效用解释为命题的新闻价值——衡量我得知该命题为真时会有多么高兴或失望的度量。按照惯例，他将必要命题的价值设为 0——必要命题根本不是新闻！同样，我带雨伞去上班的命题，作为一种行为，既有一个概率，也有一个效用。Jeffrey 将其解释为我对自己将会做什么有一定的信念程度。

Bolker 给出了限制偏好的公理，并证明了满足他的公理的任何偏好都可以由概率度量 P 和效用度量 U 来表示。然而，Bolker 的公理并不能确保 P 是唯一的，也不能确保 U 在正线性变换下是唯一的。它们也不能让我们用偏好来定义比较概率。相反，当 P 和 U 共同表示一个偏好排序时，Bolker 证明了对偶⟨P,U⟩在分数线性变换下是唯一的。

在技术术语中，其中 U 是一个被归一化的效用函数，使得 U(Ω)=0，inf 是 U 分配的值的最大下界，sup 是 U 分配的值的最小上界，λ是一个介于−1/inf 和−1/sup 之间的参数，与λ对应的⟨Pλ,Uλ⟩的分数线性变换是由以下公式给出的：

Pλ=P(x)(1+λU(x))Uλ=U(x)((1+λ)/(1+λU(x))

注意，概率-效用对的分数线性变换可能与原始对在哪些命题更可能发生分歧。

Joyce（1999）表明，通过额外的资源，可以修改 Bolker 的定理以确定唯一的 P 和唯一的 U，其中 U 在正线性变换上是唯一的。我们只需要通过一个原始的“比较可能性”的关系来补充偏好排序，该关系受其自身一组公理的控制，并通过几个附加公理与信念相联系。Joyce 修改了 Bolker 的结果，表明在给定这些附加公理的情况下，“比较可能性”的关系由唯一的 P 表示，并且偏好排序由 P 以及在正线性变换上是唯一的效用函数表示。

 2.2.5 总结
总之，上述四个表示定理可以总结如下表格。

Theorem	 对象
 偏好	 顺序
 建筑	 允许的
 变换:
 概率	 允许的
 变换:
 效用
Ramsey	gambles	偏好 → 效用 → 概率	identity	 正线性
 冯·诺依曼/
 莫尔根斯特恩	lotteries	(偏好和概率) → 效用	N/A	 正线性
Savage	acts	偏好 → 概率 → 效用	identity	 正线性
Jeffrey/Bolker	propositions	偏好 → (概率和效用)	 — 分数线性 —
注意构建顺序在定理之间有所不同：Ramsey 使用效用构建概率的表示，而 von Neumann 和 Morgenstern 从概率开始构建效用的表示。因此，尽管箭头表示了表示的数学关系，但它们不能表示一种形而上的基础关系。现实条件需要独立于任何表示定理进行证明。

适当结构化的序数概率（由“至少与...一样可能”，“比...更可能”和“等可能”所选择的关系）与基数概率函数一一对应。最后，从偏好到序数概率的灰线表示满足 Savage 公理的每个概率函数都由唯一的基数概率表示，但这个结果不适用于 Jeffrey 的公理。

注意通常可以按照循环的方式跟随箭头——从偏好到序数概率，从序数概率到基数概率，从基数概率和偏好到预期效用，以及从预期效用回到偏好。因此，尽管箭头表示了表示的数学关系，但它们并不表示一种形而上的基础关系。这个事实强调了独立证明现实条件的重要性——表示定理不能在没有额外假设的情况下证明预期效用理论。

3. 对预期效用理论的反对
3.1 最大化预期效用是不可能的
应该意味着能够，但是人类是否有可能最大化预期效用？马奇和西蒙（1958）指出，为了计算预期效用，一个代理人需要对可行行为、可能的结果以及这些结果的价值有一个复杂的理解，并且选择最佳行为比选择一个足够好的行为要求更高。林德布洛姆（1959）、费尔德曼（2006）和史密斯（2010）也提出了类似的观点。

McGee (1991)认为，即使对于具有无限内存的理想计算机来说，最大化预期效用也是不可能的。为了最大化预期效用，我们必须接受任何关于算术真理的赌注，并拒绝任何关于算术语言中的假句子的赌注。但是算术是不可判定的，因此没有图灵机可以确定给定的算术句子是真还是假。

对这些困难的一个回应是有限理性方法，旨在用一些更易处理的规则取代预期效用理论。另一个回应是认为预期效用理论的要求比它们看起来更易处理（Burch-Brown 2014; 另见 Greaves 2016），或者相关的“应该能做到”原则是错误的（Srinivasan 2015）。

3.2 最大化预期效用是非理性的
许多作者举了一些例子，预期效用理论似乎给出了错误的建议。第 3.2.1 节和第 3.2.2 节讨论了理性似乎允许与预期效用理论不一致的偏好的例子。这些例子表明，最大化预期效用并非理性所必需。第 3.2.3 节讨论了预期效用理论允许看似非理性的偏好的例子。这些例子表明，最大化预期效用并不足以保证理性。第 3.2.4 节讨论了一个例子，预期效用理论要求看似理性禁止的偏好，这对预期效用理论的必要性和充分性提出了挑战。

3.2.1 涉及传递性和完备性的反例
预期效用理论暗示了偏好的结构反映了实数之间的大于关系的结构。因此，根据预期效用理论，偏好必须是传递的：如果 A 优于 B（即 U(A)>U(B)），B 优于 C（即 U(B)>U(C)），那么 A 必须优于 C（因为必然有 U(A)>U(C)）。同样，偏好必须是完备的：对于任意两个选项，要么一个优于另一个，要么代理人对它们之间持中立态度（因为在它们的两个效用中，要么一个更大，要么两个相等）。但是有些情况下，理性似乎允许（甚至可能要求）传递性和完备性的失败。

一个不具有传递性但似乎在理性上是允许的偏好的例子是奎因的自虐之谜（1990 年）。自虐者被连接到一个带有标有 0 到 1,000 的设置的刻度盘的机器上，其中设置 0 什么都不做，每个连续的设置都会提供稍微更强大的电击。设置 0 是无痛的，而设置 1,000 会导致极度的痛苦，但任何两个相邻设置之间的差异都太小以至于无法察觉。刻度盘上配有一个棘轮，因此它可以向上转动但不能向下转动。假设在每个设置下，自虐者都会得到 10,000 元。对于自虐者来说，他可以偏好将 n+1 设置与 n 设置相比，其中 n 介于 0 和 999 之间（因为痛苦的差异是无法察觉的，而货币回报的差异是显著的），但不能偏好将设置 1,000 与设置 0 相比（因为设置 1,000 的痛苦可能是如此难以忍受，以至于任何金额的钱都无法弥补。

似乎也是理性上允许存在不完全偏好的情况。对于某些行动对，一个行动者可能对自己更喜欢哪个没有考虑过。考虑简，她是一名电工，从未考虑过成为职业歌手或职业宇航员。（也许这两个选项都不可行，或者她认为这两个选项都比她稳定的电工工作糟糕得多）。简不喜欢成为歌手而不是成为宇航员，也不喜欢成为宇航员而不是成为歌手。但她也不是对成为歌手和成为宇航员之间无所谓。她更喜欢成为歌手并获得 100 元的奖金而不是成为宇航员。

在上述考虑的两个例子中，存在一个关键的区别。简的偏好可以通过添加新的偏好而不移除任何已有的偏好来扩展，以一种让我们能够将她表示为预期效用最大化者的方式。另一方面，没有办法扩展自虐者的偏好，使其能够被表示为预期效用最大化者。他的一些偏好必须被改变。对于不完全的偏好，一种常见的回应是声称，虽然理性偏好不需要满足给定表示定理的公理（见第 2.2 节），但必须能够扩展它们，使其满足这些公理。从对偏好的这种较弱要求——它们可以扩展为满足相关公理的偏好排序——可以证明相关表示定理的存在部分。然而，不能再证明每个偏好排序都有一个表示，该表示在允许的变换下是唯一的。

在自虐者的情况下，无法采取这种回应，因为他的偏好无法扩展以满足预期效用理论的公理。有关自虐者案例的更详细讨论，请参阅有关偏好的条目。

3.2.2 涉及独立性的反例
Allais (1953)和 Ellsberg (1961)提出了一些无法用预期效用函数表示但似乎合理的偏好示例。这两个示例都涉及对 Savage 的独立性公理的违反：

独立性。假设 A 和 A∗是两个在 E 为假时产生相同结果的行为。那么，对于任何行为 B，必须满足以下条件：

当且仅当 AE&B∼E 优于 A∗E&B∼E 时，A 优于 A∗。
如果且仅当在 E 为真时，代理人在 A 和 A∗之间无差别，她在 AE&B∼E 和 A∗E&B∼E 之间也无差别。
换句话说，如果两个行为在 E 为假时具有相同的后果，那么代理人在这两个行为之间的偏好应该仅取决于它们在 E 为真时的后果。根据 Savage 对预期效用的定义，预期效用理论包含独立性。而根据 Jeffrey 的定义，在假设状态与行为的概率独立的情况下，预期效用理论包含独立性。

第一个反例是奥利斯悖论，其中涉及两个不同的决策问题，随机抽取一个 1 到 100 之间的号码。在第一个问题中，代理人必须在以下两个彩票之间进行选择：

 彩票 A

• 100 百万美元的确定性

 彩票 B

•如果抽中 1-10 号门票，则获得 5 亿美元

•如果抽中 12-100 号门票之一，则获得 1 亿美元

•如果抽中 11 号门票，则获得零美元

在第二个决策问题中，代理人必须在这两个彩票之间进行选择：

 彩票 C

• 如果抽中 1-11 号票中的任意一张，奖金为 1 亿美元

 •否则无

 彩票 D

•如果 1-10 号票中的任意一张被抽中，奖金为 5 亿美元

 •否则无

优先选择 A 似乎是合理的（提供了一个确定的
 5 亿美元，这比什么都没有的风险要大）。优先选择 D（有 10%的机会获得
 1 亿美元奖金）也似乎是合理的。但是，这些偏好（称为 Allais 偏好）违反了独立性。抽奖 A 和 C 都提供了相同的
 1 亿美元奖金，金额为$0。

由于违反了独立性，Allais 偏好与预期效用理论不兼容。这种不兼容性不需要对
 1 亿美元和
 5 亿美元的相对效用做任何假设，
 0 的效用为 z，抽奖的预期效用如下。

EU(A)=0.11y+0.89yEU(B)=0.10x+0.01z+0.89yEU(C)=0.11y+0.89zEU(D)=0.10x+0.01z+0.89z

显然，EU(A)>EU(B)的条件与 EU(C)>EU(D)的条件完全相同：只有当 0.11y>0.10x+0.01z 时，这两个不等式才成立。

Ellsberg 悖论还涉及两个决策问题，这两个问题违反了确定性原则。在每个问题中，从一个装有 30 个红球和 60 个未知比例的白球或黄球的罐子中抽取一个球。在第一个决策问题中，决策者必须在以下彩票之间进行选择：

 彩票 R

•如果抽到红球，赢得 100 美元

 •否则失去 100 美元

 彩票 W

•如果抽到白球，赢得 100 美元

 •否则失去 100 美元

在第二个决策问题中，代理人必须在以下彩票之间进行选择：

 彩票 RY

• 如果抽到红色或黄色球，赢得 100 美元

 •否则损失 100 美元

 WY 彩票

•如果抽到白色或黄色球则赢得 100 美元

 •否则损失 100 美元

看起来更合理的是偏好 R 而不是 W，但同时更喜欢 WY 而不是 RY。（将这种偏好组合称为 Ellsberg 偏好。）与 Allais 偏好一样，Ellsberg 偏好违反了独立性。抽奖 W 和 R 都会带来 100 美元的损失和 100 美元的确定性收益。

由于违反了独立性，Ellsberg 偏好与预期效用理论不兼容。再次强调，这种不兼容性不需要对赢得 100 美元的相对效用做任何假设。我们也不需要对抽到黄球的概率在 0 和 1/3 之间的位置做任何假设。当赢得 100 美元的效用为 l 时，

EU(R)=13w+P(W)l+P(Y)lEU(W)=13l+P(W)w+P(Y)lEU(RY)=13w+P(W)l+P(Y)wEU(WY)=13l+P(W)w+P(Y)w

很容易看出，EU(R)>EU(W)的条件与 EU(RY)>EU(WY)的条件完全相同：只有在 1/3w+P(W)l>1/3l+P(W)w 的情况下才能满足这两个不等式。

对于 Allais 和 Ellsberg 悖论，有三种值得注意的回应。首先，可以像 Savage（101 页）和 Raiffa（1968 年，80-86 页）那样，以 Allais 和 Ellsberg 的偏好是非理性的为理由，捍卫预期效用理论。

其次，可以遵循布查克（2013）的观点，并声称阿莱和埃尔斯伯格的偏好在理性上是允许的，因此预期效用理论在规范理论上失败了。布查克发展了一种更宽容的理性理论，其中有一个额外的参数代表决策者对风险的态度。这个风险参数与结果的效用以及它们在行为上的条件概率相互作用，以确定行为的价值。风险参数的一个设定将预期效用理论作为一个特例，但其他“风险规避”的设定可以解释阿莱的偏好。

第三，可以遵循卢姆斯和萨格登（1986）、韦里奇（1986）和波普（1995）的观点，并认为阿莱和埃尔斯伯格悖论中的结果可以重新描述以适应阿莱和埃尔斯伯格的偏好。阿莱和埃尔斯伯格偏好与预期效用理论之间的所谓冲突是基于一个假设：无论如何获得一定金额的金钱具有相同的效用。一些作者对这个假设提出了质疑。卢姆斯和萨格登认为，在赌博的结果中，除了货币金额外，还包括对得到的少于（或多于）预期的失望（或兴奋）的感受。波普区分了“结果后”的兴奋或失望感与“结果前”的兴奋、恐惧、无聊或安全感，并指出两者都可能影响结果的效用。韦里奇认为，一个货币总额的价值部分取决于获得它所涉及的风险，而不考虑赌徒的感受，因此（例如）可能从一次可能一无所获的赌博中获得
 1 亿。

Broome（1991 年，第 5 章）对这种重新描述解决方案提出了担忧。通过重新描述结果空间，可以证明任何偏好，从而使预期效用理论的公理失去内容。 Broome 通过提出对偏好的额外约束来反驳这一反对意见：如果 A 优于 B，则 A 和 B 必须在某种程度上有所不同，以证明优先选择一个而不是另一个。只有当存在一种非货币差异可以证明在偏好排序中将具有相等货币价值的结果放在不同位置时，预期效用理论家才能将 Allais 和 Ellsberg 偏好视为合理的。

3.2.3 涉及概率为 0 事件的反例
如上所述，我们已经看到了违反预期效用理论的合理偏好的所谓例子。也有一些所谓的违反预期效用理论的非理性偏好的例子。

根据对预期效用理论的典型理解，当两个行为的预期效用相等时，代理人被要求对它们保持冷漠。Skyrms（1980 年，第 74 页）指出，这种观点让我们对概率为 0 的事件得出奇怪的结论。例如，假设你要向一个圆形飞镖靶投掷一个点大小的飞镖。经典概率论允许飞镖以概率 0 命中任何特定点的情况。你给我提供了以下糟糕的交易：如果飞镖正好命中靶心，你将向我收取 100 美元；否则，不会有任何金钱交易。我的决策问题可以用以下矩阵来描述：

| | 状态 | | --- | --- | --- | --- | | 命中靶心（P=0） | 未命中靶心（P=1） | | 行为 | 接受交易 | -100 | 0 | | 拒绝交易 | 0 | 0 |

预期效用理论认为我可以接受这个交易-接受交易的预期效用为 0。（如果我们假设飞镖的落点与你的投注在概率上是独立的，这在 Jeffrey 定义和 Savage 定义上都是如此。）但是常识告诉我们，我不能接受这个交易。拒绝交易在某些状态下产生更好的结果，在任何状态下都不会产生更差的结果。

Skyrms 建议在经典概率法则的基础上增加一个额外的要求，即只有不可能事件被赋予概率 0。Easwaran（2014）认为，我们应该拒绝预期效用理论命令在期望效用相等的行为之间保持冷漠的观点。相反，预期效用理论并不是一个完整的理性理论：当两个行为具有相同的预期效用时，它并不能告诉我们应该偏好哪一个。我们可以使用非预期效用考虑，如弱支配关系作为决策的依据。

3.2.4 涉及无界效用的反例
如果一个效用函数 U 在上方有界，那么根据 U，事物的好处有一个限制，或者更正式地说，如果存在某个最小的自然数 sup，使得对于 U 的定义域中的每个 A，U(A)≤sup。同样，如果一个效用函数 U 在下方有界，那么根据 U，事物的坏处有一个限制，或者更正式地说，如果存在某个最大的自然数 inf，使得对于 U 的定义域中的每个 A，U(A)≥inf。当效用函数在上方、下方或两者都无界时，预期效用理论可能会遇到困难。

一个问题的例子是由伯努利最初发表的圣彼得堡游戏。假设一枚硬币被抛掷，直到第一次出现反面。如果第一次抛掷时出现反面，你赢得
 4；如果第三次抛掷时出现反面，你赢得
 2n。假设每个美元的价值为一个效用单位，圣彼得堡游戏的预期效用为

(12⋅2)+(14⋅4)+(18⋅8)+⋯+(12n⋅2n)+⋯或 1+1+1+⋯=∞

结果发现这个求和是发散的；圣彼得堡游戏的预期效用是无穷大的。因此，根据预期效用理论，无论多大，你都应该更喜欢玩圣彼得堡游戏的机会，而不是任何有限的金钱。此外，由于无穷大的预期效用乘以任何非零概率仍然是无穷大，任何有可能产生圣彼得堡游戏的正概率事物都具有无穷大的预期效用。因此，根据预期效用理论，无论多么渺茫，你都应该更喜欢任何玩圣彼得堡游戏的机会，而不是任何有限的金钱。

Nover 和 Hájek（2004）认为，除了具有无限预期效用的圣彼得堡游戏之外，还有其他无限游戏，其预期效用是未定义的，尽管理性要求在它们之间有一定的偏好。

对于这些问题性的无限游戏，一种回应是认为决策问题本身是不适当的（Jeffrey（1983，154））；另一种是采用修改版的预期效用理论，它在普通情况下与其判断一致，但对于无限游戏产生直观合理的判断（Thalos 和 Richardson 2013）（Fine 2008）（Colyvan 2006, 2008）（Easwaran 2008）。

 4. 应用
4.1 经济学与公共政策
在 20 世纪 40 年代和 50 年代，预期效用理论在美国流行起来，因为它有潜力提供一种机制来解释宏观经济变量的行为。随着人们逐渐意识到预期效用理论并不能准确预测真实人们的行为，其支持者们提出了另一种观点，即它可能作为一个理性人如何应对不确定性的理论（参见 Herfeld 2017）。

预期效用理论在公共政策中有各种应用。在福利经济学中，Harsanyi（1953）从预期效用理论出发，得出结论认为最公正的安排是在整个社会中最大化总福利的安排。预期效用理论还有更直接的应用。Howard（1980）引入了“微死亡率”或者说百万分之一的死亡风险的概念，并使用预期效用计算来评估哪些死亡风险是可以接受的。在卫生政策中，质量调整的生命年（Quality-Adjusted Life Years，简称 QALYs）是用于指导卫生政策的不同健康干预措施的预期效用的度量（参见 Weinstein 等人，2009 年）。McAskill（2015）使用预期效用理论来回答有效利他主义的核心问题：“我如何做到最有益？”（在这些应用中，效用最自然地被解释为衡量幸福或福祉的东西，而不是个体代理人的主观偏好满足）。

预期效用理论在保险销售中也有应用。与赌场类似，保险公司承担经过计算的风险，以追求长期的财务收益，并必须考虑在短期内破产的可能性。

 4.2 伦理学
功利主义者及其后代的当代后果主义者认为，一个行为的正确与否取决于其后果的道德善恶。一些后果主义者，如（Railton 1984），解释为我们应该做任何实际上会产生最好后果的事情。但是，我们很难，也许是不可能，知道我们行为的长期后果（Lenman 2000，Howard-Snyder 2007）。鉴于这一观察，Jackson（1991）认为，正确的行为是具有最大预期道德价值的行为，而不是实际上会产生最好后果的行为。

正如杰克逊所指出的，行为的预期道德价值取决于我们使用的概率函数。杰克逊认为，虽然每个概率函数都与一个“应该”相关联，但对行动最重要的“应该”是与决策者在行动时的信念程度相关联的那个。其他作者主张其他“应该”的优先权：梅森（2013）倾向于最合理的概率函数，以响应她的证据，考虑到她的认识限制；而奥迪和门齐斯（1992）则倾向于客观机会函数作为客观正确性的度量。（他们诉诸于更复杂的概率函数来定义对于对客观机会一无所知的决策者来说的“主观正确性”概念。）

还有一些人（斯马特 1973 年，蒂蒙斯 2002 年）认为，即使我们应该做任何能产生最好后果的事情，预期效用理论在我们不确定我们的行为将产生什么后果时可以起到决策程序的作用。费尔德曼（2006）反对预期效用计算是非常不切实际的。在大多数现实生活中的决策中，计算预期效用所需的步骤超出了我们的能力范围：列出我们行为的可能结果，为每个结果分配一个效用和给定每个行为的条件概率，并进行必要的算术运算来计算预期效用。

预期效用最大化的后果主义版本严格来说不是一种理性选择理论。它是一种道德选择理论，但是理性是否要求我们做出道德上最好的选择还有待讨论。

 4.3 认识论
预期效用理论可以用来解决认识论中的实际问题。其中一个问题是何时接受一个假设。在典型情况下，证据在逻辑上与多个假设相容，包括那些在归纳支持方面提供很少帮助的假设。此外，科学家通常不仅接受那些在数据给定的情况下最有可能的假设。一个假设何时足够可能值得被接受？

贝叶斯派，如马赫（1993），建议根据预期效用来做出这个决策。接受一个假设是一个决策问题，接受和拒绝是行为。它可以通过以下决策矩阵来描述：

| | states | | --- | --- | --- | --- | | 假设为真 | 假设为假 | | 行为 | 接受 | 正确接受 | 错误接受 | | 拒绝 | 错误拒绝 | 正确拒绝 |

根据萨维奇的定义，接受假设的预期效用由假设的概率以及四种结果的效用决定。（我们可以预期杰弗里的定义与萨维奇的定义一致，前提是在我们掌握的证据下，假设在接受或拒绝之间是概率独立的。）在这里，效用可以被理解为纯粹的认识价值，因为相信有趣的真理和拒绝错误是认识上有价值的。

贝叶斯方法的批评者，如梅奥（1996），认为科学假设不能合理地赋予概率。梅奥认为，为了对事件分配有用的概率，我们需要关于类似事件频率的统计证据。但科学假设要么一劳永逸地为真，要么一劳永逸地为假——没有像我们这样的世界群体可以从中有意义地进行统计。我们也不能为科学目的使用主观概率，因为这将是不可接受的武断。因此，接受和拒绝的预期效用是未定义的，我们应该使用传统统计方法，依赖于比较我们的证据在每个假设条件下的概率。

预期效用理论还提供了何时收集证据的指导。Good（1967）根据预期效用的理由认为，在行动之前收集证据总是理性的，前提是证据是免费的。在额外证据出现后，具有最高预期效用的行动总是至少与之前具有最高预期效用的行动一样好。

在认识论决策理论中，预期效用被用来评估信念状态的理性与否。如果我们将信念形成视为一种心理行为，将代理人信念内容的事实视为事件，将接近真实性视为结果的可取特征，那么我们可以使用预期效用理论来评估信念程度与其预期接近真实性之间的关系。关于概率主义的认识论效用论的条目包括对各种认识论规范（包括条件化和主要原则）的预期效用论论证的概述。

 4.4 法律
Kaplan (1968)认为，预期效用考虑可以用于确定法律审判中的证明标准。陪审团在决定是否宣判无罪或有罪时面临以下决策问题：

| | 状态 | | --- | --- | --- | --- | | 有罪 | 无罪 | | 行为 | 宣判有罪 | 真实有罪 | 错误有罪 | | 宣判无罪 | 错误无罪 | 真实无罪 |

Kaplan 表明，每当 EU(宣判有罪)>EU(宣判无罪)时，

P(有罪)>11+U(真实定罪)−U(错误无罪)U(真实无罪)−U(错误定罪)

从定性上讲，这意味着证明标准随着定罪无辜人的不便(U(真实定罪)−U(错误无罪))的增加，或者有罪人无罪(U(真实无罪)−U(错误定罪))的不便的减少而增加。

对这种决策理论方法的批评者，如劳丹（2006 年）认为，很难或不可能弥合法庭可接受的证据与被告的真实有罪概率之间的差距。有罪的概率取决于三个因素：真正有罪人中表面有罪的分布，真正无罪人中表面有罪的分布，以及真正有罪与真正无罪的被告中参加审判的比例（参见贝尔 1987 年）。计算这些因素中的任何一个的障碍将阻止从法官或陪审团对表面有罪的感知推断出真正有罪的概率。

<!--md-padding-ignore-begin-->
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
