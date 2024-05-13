# 因果决策理论 causal (Paul Weirich)

*首次发布于 2008 年 10 月 25 日星期六；实质修订于 2020 年 11 月 6 日星期五*

因果决策理论采用了关注行为后果的理性选择原则。它认为理性选择的解释必须使用因果关系来确定使选择合理的考虑因素。

在构成决策问题的一组选项中，决策理论推荐一种最大化效用的选项，即其效用等于或超过其他每个选项的效用。它通过计算选项的预期效用来评估选项的效用。它使用选项可能结果的概率和效用来定义选项的预期效用。这些概率取决于选项。因果决策理论认为这种依赖关系是因果关系，而不仅仅是证据关系。

这篇文章解释了因果决策理论，回顾了它的历史，描述了当前因果决策理论的研究，并概述了该理论的哲学基础。关于因果决策理论的文献非常丰富，而本文仅涵盖其中的一部分。

---

## 1. 预期效用

假设一个学生正在考虑是否要为一场考试而学习。他推理道，如果他能通过考试，那么学习就是浪费努力。而且，如果他不能通过考试，那么学习也是浪费努力。他得出结论，因为无论发生什么，学习都是浪费努力，所以最好不要学习。这种推理错误在于学习提高了通过考试的概率。决策应该考虑到行为对可能结果的概率影响。

一个行为的预期效用是其可能结果效用的概率加权平均值。相互排斥且共同构成一个分割的世界可能状态生成了一个行为的可能结果。一个行为-状态对指定了一个结果。在这个例子中，学习的行为和通过的状态构成了一个结果，包括学习的努力和通过的好处。学习的预期效用是如果一个人学习的话通过的概率乘以学习和通过的效用加上如果一个人学习的话不通过的概率乘以学习和不通过的效用。用紧凑的符号表示，

EU(S)=P(P if S)U(S&P)+P(∼P if S)U(S&∼P)。

每个产品都指定了可能结果的概率和效用。总和是可能结果效用的概率加权平均值。

决策理论如何解释在执行某个行为 A 时状态 S 的概率，即 P(S if A)？概率论提供了一个方便的建议。它有关于条件概率的解释，决策理论可以采纳。决策理论可以将 P(S if A) 视为在执行该行为时状态的条件概率。那么 P(S if A) 等于 P(S∣A)，概率论将其定义为 P(S&A)/P(A)，其中 P(A)≠0。一些理论家将使用条件概率计算的期望效用称为条件期望效用。我将其称为期望效用 tout court，因为使用条件概率的公式推广了使用非条件概率的更简单的期望效用公式。此外，一些理论家将行为的期望效用称为行为的效用 tout court，因为行为的期望效用评估了行为，并在理想情况下产生了行为的效用。我将其称为期望效用，因为一个人可能错误地给一个赌注附加了比其期望效用更多或更少的效用。行为的效用与其期望效用的相等性是规范性的，而不是定义性的。

从条件概率中获得的期望效用将引导学生的思考朝着正确的方向。

EU(S)=P(P∣S)U(S&P)+P(∼P∣S)U(S&∼P),

 和

EU(∼S)=P(P∣∼S)U(∼S&P)+P(∼P∣∼S)U(∼S&∼P).

由于学习对通过概率的影响，P(P∣S)>P(P∣∼S)和 P(∼P∣S)<P(∼P∣∼S)。因此，假设学习增加通过概率的同时弥补了学习的努力，EU(S)> EU(∼S)。最大化预期效用建议学习。

然而，如果一个人执行某个行为时，对于该状态的概率的便利解释并不完全令人满意。假设一个人抛掷一个具有未知偏倚的硬币，并获得正面。这个结果表明下一次抛掷也会得到正面，尽管它并不因果地影响下一次抛掷的结果。一个事件在另一个事件条件下的概率表示第二个事件对第一个事件的证据。如果这两个事件相关，第二个事件可能为第一个事件提供证据，而不会因果地影响它。因果关系包含相关性，但相关性并不包含因果关系。决策应该关注行为对状态的因果影响，而不是行为对状态的证据。一个好的决策旨在产生一个好的结果，而不仅仅是一个好结果的证据。它追求好而不仅仅是好的迹象。通常，效力和吉祥是相辅相成的。当它们分离时，一个代理应该执行一个有效的行为，而不是一个吉祥的行为。

考虑囚徒困境，这是博弈论的一个典型例子。两个相互隔离的人可以选择合作或不合作。如果他们都选择合作，他们都会比选择不合作更好。然而，无论对方选择什么，每个人都会选择不合作更好。不合作支配合作。此外，假设这两个玩家是心理上的孪生。每个人都会像对方一样思考。而且，他们知道这个事实。然后，如果一个玩家选择合作，他会得出结论他的对手也会选择合作。他的合作行为是他的对手也这样做的很好的证据。尽管如此，他的合作行为并不会导致他的对手选择合作。他与对手没有接触。因为无论对方做什么，他不合作都是更好的选择。合作是吉祥的，但不是有效的。

为了使预期效用跟踪功效而不是吉祥，因果决策理论将执行行为时状态的概率解释为一种因果概率，而不是标准的条件概率。在双胞胎囚徒困境中，考虑到另一个玩家的合作行为的概率。这个条件概率很高。接下来，考虑到如果另一个玩家这样做，一个玩家合作行为的因果概率。因为玩家是孤立的，这个概率等于第一个玩家合作行为的概率。如果该玩家遵循优势，这个概率很低。使用条件概率，合作行为的预期效用超过了不合作行为的预期效用。然而，使用因果概率，不合作行为的预期效用超过了合作行为的预期效用。从条件概率转换为因果概率使得预期效用最大化导致不合作行为。

## 2. 历史

本节介绍了因果决策理论的历史，并在此过程中提出了各种理论的表述。

### 2.1 纽康姆问题

罗伯特·诺齐克（1969 年）提出了一个决策理论的困境。他构建了一个例子，其中优势原则与期望效用最大化原则相冲突。诺齐克将这个例子称为纽康姆问题，以物理学家威廉·纽康姆首次提出这个问题。

在纽康姆问题中，一个代理人可以选择拿一个不透明的盒子或者同时拿一个不透明的盒子和一个透明的盒子。透明的盒子里面有一千美元，代理人可以清楚地看到。不透明的盒子里面根据已经做出的预测，要么是空的，要么是一百万美元。这个预测是关于代理人的选择的。如果预测是代理人会同时拿两个盒子，那么不透明的盒子是空的。另一方面，如果预测是代理人只会拿不透明的盒子，那么不透明的盒子里面有一百万美元。这个预测是可靠的。代理人知道他决策问题的所有这些特征。

图 1 显示了代理的选项及其结果。一行代表一个选项，一列代表世界的状态，一个单元格代表一个选项在某个世界状态下的结果。

|            | Prediction <br /> one-boxing | Prediction <br /> two-boxing |
| ------------ | ------------------------ | ------------------------ |
| 拿一个盒子 | �                     | 0                      |
| 拿两个盒子 | 源                     | 翻译                   |

图 1. 纽科姆问题

因为在每个预测下，两个盒子的结果比一个盒子的结果好$T，所以两个盒子的选择优于一个盒子的选择。根据支配原则，两个盒子的选择是理性的选择。因为预测是可靠的，一个选择一个盒子的预测在选择一个盒子的情况下有很高的概率。同样地，一个选择两个盒子的预测在选择两个盒子的情况下也有很高的概率。因此，使用条件概率来计算期望效用，一个选择一个盒子的期望效用超过了一个选择两个盒子的期望效用。根据期望效用最大化原则，一个选择一个盒子是理性的选择。

决策理论应该涵盖所有可能的决策问题，而不仅仅是现实的决策问题。然而，如果纽科姆问题因为不现实而显得不值得关注，那么现实版本的问题就很多。纽科姆问题的关键特征是一个劣势行为与一个它并不因果推动的好状态的相关性。在现实的医学纽科姆问题中，一个医学状况和一个行为症状有一个共同的原因，并且它们之间存在相关性，尽管它们之间没有因果关系。如果这种行为是有吸引力的，支配原则会推荐选择它，尽管期望效用最大化原则禁止这样做。此外，阿兰·吉巴德和威廉·哈珀（1978 年：第 12 节）以及大卫·刘易斯（1979 年）观察到，心理双胞胎的囚徒困境为每个玩家提出了一个纽科姆问题。对于每个玩家来说，对方的行为是影响结果的状态。合作行为是一个迹象，但不是导致对方合作的原因。支配原则建议采取不合作的行动，而使用条件概率计算的期望效用建议采取合作的行动。在一些现实的囚徒困境中，玩家预期的思维相似性在支配原则和期望效用最大化原则之间产生冲突。

阿里夫·艾哈迈德（2018 年）提供了关于纽科姆问题的一系列论文。肯尼·伊斯瓦兰（即将出版）根据因果干预的机会区分了类似纽科姆的问题。

### 2.2 Stalnaker 的解决方案

Robert Stalnaker（1968 年）提出了虚拟条件句的真值条件。如果在最近的前提世界中，虚拟条件句的结果为真，则该条件句为真。（这种分析理解为，如果虚拟条件句在任何世界中的前提为真，则该条件句为真。）Stalnaker 利用虚拟条件句的分析来基于决策理论，并解决 Newcomb 问题。

在给 Lewis 的一封信中，Stalnaker（1972 年）提出了一种调和 Newcomb 问题中决策原则的方法。他建议使用条件句的概率来计算行为的期望效用，而不是条件概率。因此，

EU(A)=∑iP(A>Si)U(A&Si),

其中 A>Si 表示条件，即如果执行 A，则会得到 Si。因此，与其使用给定一箱情况下预测为一箱的概率，我们应该使用条件概率，即如果代理人只选择一个箱子，那么预测将会是一箱的概率。因为代理人的行为不会导致预测，所以条件概率等于预测为一箱的概率。此外，考虑到如果代理人选择两个箱子，那么预测将会是一箱的条件。它的概率同样等于预测为一箱的概率。代理人的行为不会影响任何预测的概率，因为预测发生在行为之前。因此，使用条件概率来计算期望效用，两箱的期望效用超过一箱的期望效用。因此，期望效用最大化原则与优势原则给出了相同的建议。

Gibbard 和 Harper（1978）详细阐述并公开了 Stalnaker 对 Newcomb 问题的解决方案。他们区分了使用虚拟条件概率的因果决策理论和使用条件概率的证据决策理论。因为在决策问题中，虚拟条件概率跟踪因果关系，所以使用它们来计算选项的期望效用使得决策理论具有因果性。

Gibbard 和 Harper 区分了两种预期效用。他们称之为价值（用 V 表示），表示新闻价值或吉祥。另一种类型被称为效用（用 U 表示），表示实现目标的功效。对于行为的预期价值的计算使用条件概率，而对于行为的预期效用的计算使用条件概率。他们认为，使用条件概率计算的预期效用能够产生真正的预期效用。

当 Gibbard 和 Harper 引入 V 和 U 时，两者都依赖于对最具体结果的评估 D（表示可取性）。本文不采用对结果进行评估的公式，该公式在证据和因果决策理论方面中立，而是采用 Stalnaker（1972）的公式，该公式使用效用来评估结果。

### 2.3 变体

考虑一个条件，断言如果采用某个选项，那么就会达到某种状态。Gibbard 和 Harper 假设，为了说明因果决策理论的主要思想，这个条件具有真值，并且在其为假的情况下，如果采用该选项，那么该状态将不会发生。如果选项是抛硬币，相关状态是正面朝上，这个假设可能是不合理的。如果代理人抛硬币，他会得到正面朝上是错误的（或不确定的）。类似地，关于得到反面的条件也可能是错误的（或不确定的）。因此，条件概率不适合计算选项的期望效用。相关概率不总和为一（甚至不存在）。为了避免这种僵局，一些理论家在没有虚拟条件概率的情况下计算因果敏感的期望效用。因果决策理论有许多表述形式。

Brian Skyrms（1980 年：第 IIC 节；1982 年）提出了一种不使用虚拟条件概率的因果决策理论版本。他的理论将代理人的行为可能影响的因素与代理人的行为可能不影响的因素分开。让 Ki 代表代理人可能不影响的因素的一个可能的完整规范，让 Cj 代表代理人可能影响的因素的一个可能的（但不一定是完整的）规范。Ki 的集合形成一个划分，Cj 的集合形成一个划分。一个行为的期望效用的公式首先使用代理人可能影响的因素计算其条件期望效用，针对代理人影响范围之外的每种可能因素组合。然后计算这些条件期望效用的概率加权平均值。以这种方式计算的行为的期望效用是行为的 K-期望，EUk(A)。根据 Skyrms 的定义，

EUk(A)=∑iP(Ki)∑jP(Cj∣Ki&A)U(Cj&Ki&A)。

Skyrms 认为，一个代理应该选择最大化 K-期望的行为。

Lewis（1981）提出了一种因果决策理论的版本，该理论使用依赖假设的概率而不是虚拟条件的概率来计算期望效用。一个代理在某个时间的依赖假设是关于他目前行为对他关心的事物是否有因果依赖的最具体的命题。一个选项的期望效用是它相对于依赖假设 Ki 的分区的概率加权平均效用。Lewis 将选项 A 的期望效用定义为

EU(A)=∑iP(Ki)U(Ki&A)

并认为，理性行为是实现最大化预期效用的选择。他对于选项的预期效用的公式与 Skyrms 的公式相同，假设 U(Ki&A)可以根据代理人可能影响的因素的分区进行扩展，使用以下公式

U(Ki&A)=∑jP(Cj∣Ki&A)U(Cj&Ki&A)。

Skyrms 和 Lewis 对预期效用的计算不涉及因果概率。他们将因果关系建立在世界的状态中，因此因果概率是不必要的。在像 Newcomb 问题这样的情况下，他们的计算结果与使用虚拟条件概率的预期效用计算得出的建议相同。当情况符合其背景假设时，各种版本的因果决策理论提出了相同的建议。Adam Bales（2016）在不符合背景假设的特殊情况下比较了各个版本。

### 2.4 表示定理

决策理论通常通过表示定理引入概率和效用。这些定理表明，如果行为之间的偏好满足某些约束条件，如传递性，则存在一个概率函数和一个效用函数（在选择刻度的情况下），生成的期望效用与偏好一致。David Krantz、R. Duncan Luce、Patrick Suppes 和 Amos Tversky（1971）对构建表示定理的目的和方法进行了很好的概括介绍。在第 3.1 节中，我将讨论这些定理在决策理论中的作用。

Richard Jeffrey（[1965] 1983）提出了一个关于证据决策理论的表示定理，使用了其期望效用的公式。Brad Armendt（1986, 1988a）提出了一个关于因果决策理论的表示定理，使用了其期望效用的公式。James Joyce（1999）构建了一个非常通用的表示定理，根据期望效用公式对概率的解释，可以得到因果决策理论或证据决策理论。

### 2.5 反对意见

对因果决策理论最常见的反对意见是它在纽科姆问题中做出了错误的选择。它选择了两个盒子，而正确的选择是选择一个盒子。例如，Terry Horgan（1981 [1985]），Paul Horwich（1987：第 11 章）和 Caspar Hare 和 Brian Hedden（2016）都支持选择一个盒子。选择一个盒子的主要理由是，选择一个盒子的人比选择两个盒子的人表现更好。因果决策理论者回应说，纽科姆问题是一个奖励非理性的特殊情况。即使选择一个盒子的人获利，选择一个盒子仍然是非理性的。Bales（2018）反驳了选择两个盒子是非理性的论点。

一些理论家认为，如果预测完全可靠，选择一个盒子显然是理性的。他们认为，如果预测肯定准确，那么选择就简化为选择  T。这种观点过于简单化。如果一个行动者选择一个盒子，那么这个行为肯定会得到$M。然而，选择两个盒子仍然会更好。优势仍然推荐选择两个盒子。使预测肯定准确并不改变问题的性质。效力仍然胜过吉祥，正如 Howard Sobel（1994：第 5 章）所主张的。

一种调和关于纽康姆问题的两个方面的辩论的方式是承认一个理性的人应该通过培养倾向于选择单箱的性格来准备这个问题。然后，每当问题出现时，这种性格将促使预测选择单箱，之后进行单箱选择（仍然是自由选择的）。因果决策理论可能会承认这种准备的价值。它可能会得出结论，培养倾向于选择单箱是理性的，尽管选择单箱本身是非理性的。因此，在纽康姆问题中，如果一个代理人选择了两个箱子，因果决策理论可能会承认该代理人没有理性地准备这个问题。尽管如此，它仍然坚持认为选择两个箱子本身是理性的。尽管选择两个箱子不是一个最大理性代理人的行为，但在纽康姆问题的情况下是理性的。

因果决策理论还可以解释，它提出了关于在纽康姆问题中给定代理人情况下行为评估的主张。它断言选择两个箱子的条件理性。条件理性和非条件理性对待错误的方式不同。与条件理性相比，非条件理性不承认过去的错误。它评估一个行为，考虑到过去错误的影响。然而，条件理性接受当前的情况，并且不因为行为源于过去的错误而贬低它。因果决策理论认为选择两个箱子是理性的，承认代理人的情况，因此忽略导致这些情况的任何错误，比如对纽康姆问题的非理性准备。

对于因果决策理论的另一个反对意见承认在纽康姆问题中选择两个箱子是理性的，但拒绝产生选择两个箱子的因果选择原则。它寻求产生选择两个箱子的非因果原则。实证主义是对包含因果关系的决策原则的厌恶的来源。一些决策理论家回避因果关系，因为没有实证主义的解释明确其本质。在没有以可观察现象为基础的因果关系定义的情况下，他们更喜欢决策理论避免因果关系。因果决策理论对这一反对意见的回应既是贬低实证主义，也是澄清因果关系，使与之相关的困惑不再成为决策理论避免因果关系的理由。

证据决策理论比因果决策理论具有较弱的形而上学假设，即使因果关系具有无可挑剔的形而上学凭据。一些决策理论家不是因为形而上学上的顾虑而省略了因果关系，而是为了概念经济性。杰弗里（[1965] 1983, 2004）出于简洁性的考虑，制定了不依赖因果关系的决策原则。

Ellery Eells（1981, 1982）认为，证据决策理论提供了因果决策理论的建议，但更经济地，而不依赖因果装置。特别是，在纽科姆问题中，证据决策理论支持两盒策略。一个代理人对他的证据的反思使得条件概率支持两盒策略。

对纽科姆问题的一个无争议的阐述假设代理人的选择和其预测有一个共同的原因。代理人的选择是共同原因的证据，也是选择预测的证据。一旦代理人获得了共同原因的概率，他可以放下他的选择提供的关于预测的证据。那个证据是多余的。在给定共同原因的概率的情况下，预测选择一盒的概率相对于他的选择是恒定的。同样，预测选择两盒的概率相对于他的选择也是恒定的。因为预测的概率在任何一个选项上都是相同的条件概率，根据证据决策理论，两盒策略的期望效用超过了一盒策略的期望效用。Horgan（1981 [1985]）和 Huw Price（1986）提出了类似的观点。

假设事件 S 是导致效果 E 的原因 C 的标志。对于 E 的概率来说，知道 C 是否成立就足够了，不需要知道 S 是否成立。对于 E 提供的证据，C 的观察屏蔽了 S 提供的证据。也就是说，P(E∣C&S)=P(E∣C)。在纽科姆问题中，假设代理人是理性的，他的信念和欲望是他选择和预测的共同原因。因此，他的选择是预测内容的标志。对于预测单选的概率来说，知道自己的信念和欲望就足够了，不需要知道它们产生的选择。共同原因的知识屏蔽了选择提供的关于预测的证据。因此，预测单选的概率与个人选择无关，而证据期望效用的最大化与优势原则一致。这种对证据决策理论的辩护被称为 "tickled defense"，因为它假设内省条件屏蔽了选择和预测之间的相关性。

Eells 对证据决策理论的辩护假设一个代理人根据信念和欲望进行选择，并且知道自己的信念和欲望。但是有些代理人可能不会以这种方式进行选择，也可能不具备这种知识。决策理论应该为这样的代理人规定一个理性的选择，而证据决策理论可能无法正确做到这一点，正如 Lewis（1981: 10–11）和 John Pollock（2010）所争论的那样。Armendt（1988b: 326–329）和 David Papineau（2001: 252–255）认同屏蔽现象并不在所有情况下使证据决策理论产生因果决策理论的结果。

Horwich（1987: Chap. 11）反驳了 Eells 的论点，因为即使一个代理人知道她的选择源于她的信念和欲望，她可能不知道她的信念和欲望是如何产生她的选择的机制。代理人可能怀疑自己是通过最大化期望效用来进行选择的。然后在纽科姆问题中，她的选择可能提供相关的关于预测的证据。Eells（1984a）构建了一个动态版本的 "tickled defense" 来应对这个反驳。Sobel（1994: Chap. 2）讨论了这个辩护的版本。他认为它并不能使证据决策理论在所有决策问题中与因果决策理论达成一致。此外，它也不能证明证据理性欲望理论与因果理性欲望理论一致。他得出结论，即使在证据决策理论给出正确建议的情况下，它也不能以正确的理由给出建议。

Price（2012）提出了一种证据和因果决策理论的混合，并通过分析代理人对事件发生的偶然性具有预知的情况来推动它。Bales（2016）认为，单独的因果决策理论可以适应这些情况。Ahmed（2014a）支持证据决策理论，并对因果决策理论提出了几个异议。他的异议假设了一些关于理性选择的有争议的观点，包括一种关于选择序列的有争议的原则。

一种常见观点区分了评估选择的原则和评估选择序列的原则。效用最大化原则仅在代理人对决策问题中的每个选项具有直接控制时，将代理人的选择作为决策问题的解决方案进行评估，即仅当代理人可以随时立即采用决策问题中的任何选项时。该原则不评估代理人的多个选择序列，因为代理人对这样的序列没有直接控制。她只能通过在适当的时间做出每个选择来实现多个选择序列；她不能随意立即实现整个序列。理性通过将直接控制的选项与替代方案进行比较来评估代理人直接控制的选项，但通过评估序列中的直接控制选项来评估代理人间接控制的序列；如果序列中的选择是理性的，则序列的选择是理性的。采用这种评估选择序列的常见方法可以抵御假设竞争方法的因果决策理论的异议。

## 3. 当前问题

决策理论是一个活跃的研究领域。目前的工作涉及到许多问题。因果决策理论对这些问题的处理方法源于其非实证方法论和对因果关系的关注。本节提及了因果决策理论议程上的一些主题。

### 3.1 概率和效用

因果决策理论的原则使用概率和效用。概率和效用的解释是一个有争议的问题。一种传统定义是通过引入表示定理来描述偏好的函数来定义它们。表示定理表明，如果偏好满足某些结构公理，那么如果它们还满足某些规范公理，它们就好像遵循了期望效用。也就是说，偏好遵循使用概率和效用函数计算的期望效用。这种计算方式得出的期望效用与基于对可能结果的态度的概率和效用分配计算的期望效用不同。例如，一个对关于抛硬币的赌注感到困惑的人可能对这些赌注有偏好，好像他将正面的概率分配为 60%，而实际上，过去的抛硬币的证据使他将正面的概率分配为 40%。因此，当偏好满足表示定理的结构公理时，该定理的规范公理只能证明与根据偏好制定的期望效用一致，并不能证明与传统意义上的期望效用一致。因此，使用表示定理来定义概率和效用削弱了传统的期望效用原则，它只成为了偏好之间的一致性原则。

与其使用表示定理来定义概率和效用，决策理论可以使用它们来建立当偏好符合结构和规范公理时的概率和效用的可测性。这种使用表示定理的方法使决策理论能够推进传统的期望效用原则，并丰富其对理性决策的处理。决策理论可以通过从评估的一般原则中推导出传统原则来证明其合理性，就像 Weirich（2001）中所做的那样。

对于概率和效用的广义解释认为它们表示对命题的态度。它们分别是合理的信念程度和合理的欲望程度。这种对概率和效用的解释承认它们存在于不能从偏好或其他影响中推导出来的情况下，而是可以从它们的原因中推导出来，例如代理人对客观概率的信息，或者根本无法推导出来（也许只能通过内省）。这种解释依赖于如果合理的信念程度和合理的欲望程度符合标准的概率和效用原则的论证。加强这些论证的是因果决策理论的工作。

除了澄清概率和效用的一般解释之外，因果决策理论还寻求产生最佳版本的最大化期望效用原则的特定概率和效用。其期望效用公式中的因果概率可以是虚拟条件概率或各种替代品。使用虚拟条件概率的版本必须确定对这些条件概率的分析。Lewis（1973：第 1 章）修改了 Stalnaker 的分析，认为如果随着前提世界越来越接近实际世界，存在一个点，在该点之后，至少在所有接近的世界中，结论是真的，则虚拟条件概率为真。Joyce（1999：161-180）提出了概率图像作为虚拟条件概率的替代品，就像 Lewis（1976）引入它们一样。在对行为和可能状态之间的因果关系指导下，概率被重新分配。

一个常见的行为预期效用的公式将行为-状态对的效用，即行为在该状态下的结果的效用，定义为行为和状态的合取的效用：

 EU(A)=∑iP(A>Si)U(A&Si)。

因果决策理论是否需要一种更具因果敏感性的行为-状态对效用的替代方法？Weirich（1980）认为是需要的。一个考虑下注密苏里州首府是杰斐逊城的人会考虑如果他下注的话，假设圣路易斯是密苏里州的首府的后果。一个理性的思考者虚拟地假设一个行为关注因果关系，并指示性地假设一个状态关注证据关系，但只能以一种方式假设一个行为和一个状态的合取。此外，使用一个行为和一个状态的合取的效用可以防止行为的预期效用具有分区不变性。下一小节将详细阐述这一点。

### 3.2 分区不变性

如果一个行为的预期效用在所有状态的分区下都是相同的，那么它就是分区不变的。分区不变性是一个行为的预期效用的重要属性。如果行为的预期效用缺乏这个属性，那么决策理论只能使用从选定分区计算出的预期效用。预期效用的分区不变性使得一个行为的预期效用不依赖于状态分区的选择，从而增加了预期效用的解释能力。

分区不变性确保了对同一个决策问题的不同表示得出的解决方案是一致的。以图 2 的表示形式来看，可以考虑 Newcomb 的问题。

|              | Right prediction | Wrong prediction |
| -------------- | ------------------ | ------------------ |
| 只拿一个盒子 | �               | 0                |
| 拿两个盒子   | �               | M+$T             |

图 2. Newcomb 问题的新状态

支配在这个表示中不适用。然而，它仍然解决了问题的解决方案，因为如果它适用于问题的任何准确表示，比如图 1 的问题表示，那么它就适用于一个决策问题。如果预期效用是分区敏感的，那么最大化预期效用的行为可能是分区敏感的。然而，如果最大预期效用的行为在一个分区到另一个分区的变化中发生变化，那么预期效用原则将无法得出决策问题的解决方案。在这种情况下，一个行为不是一个决策问题的解决方案，仅仅因为它在问题的某个准确表示下最大化了预期效用。有太多的行为具有相同的凭证。

预期效用原则，使用条件概率，适用于图 2 对 Newcomb 问题的表示。让 P1 代表预测选择一个盒子，P2 代表预测选择两个盒子，这些行为的预期效用为：

EU(1)=P(1>R)U(�)+�(1>�)0=�(�1)�(M)EU(2)=P(2>R)U(�)+�(2>�)�(M+�)=�(�2)�(T)+P(P1)U(�+T)

因此，EU(1)<EU(2)。这个结果与因果决策理论在其他准确的问题表示下的判断一致。只要因果决策理论使用一个对期望效用具有分区不变性的公式，它的建议就与决策问题的表示无关。

Lewis (1981: 12–13)观察到公式

 EU（A）=∑iP（Si）U（A&Si）

不是分区不变的。其结果取决于状态的分区。如果一个状态是具有相等效用的世界集合，则对于这些状态的分区，每个行为的期望效用相同。分区的元素 Si 掩盖了结果的效用应该评估的 A 的影响。刘易斯通过仅使用依赖假设的分区来克服这个问题。然而，因果决策理论可以通过采用 U（A&Si）的替代品来制定一个分区不变的期望效用公式。

Sobel（1994：第 9 章）研究了分区不变性。将他的工作放在本文的符号中，他按照以下步骤进行。首先，他采用一个选项的期望效用的规范计算来使用世界作为状态。他的基本公式是

EU(A)=∑iP(A>Wi)U(Wi).

一个世界 Wi 吸收其中发生的一个行为。只有在 A 成立的世界才会贡献正概率，从而影响总和。接下来，Sobel 使用粗粒度状态搜索其他与规范计算等效的计算。根据他的假设，适当的效用规范实现了分区不变性。根据他证明的一个定理（1994 年：185），

U(A)=∑iP(Si)U(A 给定 Si)

对于任何状态的划分。

Joyce（2000：S11）还为因果决策理论提出了一个与划分无关的公式，用于计算行为的期望效用。他假设划分不变性，即

 EU(A)=∑iP(A>Si)U(A&Si)，

通过规定 U(A&Si)等于

∑ijPA(Wj∣Si)U(Wj),

其中 Wj 是一个世界，PA 代表 A 的概率图像。Weirich（2001 年：第 3.2 节，第 4.2.2 节）像 Sobel 一样，在期望效用公式中用 U(A given Si)替换了 U(A&Si)，并将 U(A given Si)解释为如果 S 获得，A 的实现将产生的结果的效用。因此，U(A given Si)对 Si 成立的世界中的 A 的因果后果做出响应。然后，公式...

EU(A)=∑iP(Si)U(A 给定 Si)

对于状态与行为的概率独立的分区，该公式保持不变。一个更复杂的公式，

EU(A)=∑iP(Si 如果 A)U(A 给定(Si 如果 A))，

假设对其概率进行因果解释，放宽了对分区的所有限制。U(A 给定(Si 如果 A))是如果 A 实现，假设 Si 如果 A 实现的情况下，结果的效用。

### 3.3 结果

关于结果的一个问题是它们的全面性。一个行为的结果是可能的世界、时间的后果还是因果关系？Gibbard 和 Harper（[1978] 1981: 166–168）提到了将结果缩小到因果关系的可能性，作为实际适用性的倡导者。然而，这种缩小必须谨慎，因为期望效用原则要求结果包括每一个相关的考虑因素。例如，如果一个代理人对风险厌恶，那么一个冒险行为的每一个可能结果都必须包括该行为产生的风险。它的包含往往会降低每个可能结果的效用。

在 Sobel 的期望效用的经典公式中，

 EU(A)=∑iP(A>Wi)U(Wi)。

从某种角度来看，该公式省略了世界状态，因为结果本身形成了一个分割。状态和结果之间的区别消失了，因为世界既扮演了状态的角色，也扮演了结果的角色。状态是产生独占且穷尽的结果的可有可无的手段。根据一个基本原则，一个行为的期望效用是可能结果的概率加权平均值，这些结果是独占且穷尽的，例如行为可能导致的世界。

假设一个世界的效用来自于基本内在欲望和厌恶的实现。假设他们实现的效用是可加的，那么一个世界的效用就是他们实现的效用的总和。除了是可能导致的世界的效用的概率加权平均值之外，一个选项的期望效用也是基本内在欲望和厌恶的实现的概率加权平均值。在这个期望效用的公式中，状态没有起到明确的作用：

EU(A)=∑iP(A>Bi)U(Bi),

其中 Bi 遍历可能的基本内在欲望和厌恶的实现。该公式考虑了每个基本欲望和厌恶的实现前景，如果执行该行为，则实现该前景的可能性。它将行为的期望效用视为前景效用的总和。该公式提供了一个经济的行为期望效用的表示。它消除了状态，并直接从作为基本欲望和厌恶实现的结果中获得期望效用。

为了说明使用基本内在欲望和厌恶计算行为的预期效用，假设一个代理没有基本内在厌恶，只有两个基本内在欲望，一个是健康，另一个是智慧。健康的效用为 4，智慧的效用为 8。在预期效用的公式中，一个世界只涵盖代理关心的事情。在这个例子中，一个世界是一个命题，指定代理是否拥有健康和智慧。因此，有四个世界：H&W，H&∼W，∼H&W，∼H&∼W。假设 A 是等可能生成任何世界。使用世界，EU(A)=P(A>(H&W))U(H&W)+P(A>(H&∼W))U(H&∼W)+P(A>(∼H&W))U(∼H&W)+P(A>(∼H&∼W))U(∼H&∼W)=(0.25)(12)+(0.25)(4)+(0.25)(8)+(0.25)(0)=6。使用基本内在态度，EU(A)=P(A>H)U(H)+P(A>W)U(W)=(0.5)(4)+(0.5)(8)=6。在假设行为实现的情况下，计算选项的效用的两种方法是等价的，因为基本内在欲望或厌恶实现的概率是实现它的世界的概率之和。

### 3.4 行为

在决策中，第一人称行动命题代表一个行为。该命题具有主谓结构，直接指代代理人，其主语，而不需要代理人的概念作为中介。一个中心化的世界代表这个命题。这样一个世界不仅指定个体及其属性和关系，还指定哪个个体是代理人，以及他的决策问题发生的时间和地点。行为的实现是在代理人在决策问题的时间和地点的世界中实现。

Isaac Levi（2000）反对将概率附加到行为的任何决策理论。他认为思考排挤了预测。在思考过程中，代理人对自己将要执行的行为没有信念或信念程度。Levi 认为 Newcomb 的问题以及涉及该问题的证据和因果决策理论都错误地将概率分配给代理人的行为。他拒绝了 Jeffrey（[1965] 1983）的证据决策理论和 Joyce（1999）的因果决策理论，因为它们允许代理人在思考过程中对自己的行为分配概率。

与 Levi 的观点相反，Joyce（2002）认为（1）因果决策理论不需要适应代理人对自己的行为分配概率，但（2）思考的代理人可以合理地对自己的行为分配概率。证据决策理论使用给定行为的状态的概率 P(S∣A)来计算行为的预期效用，定义为 P(S&A)/P(A)。分数的分母分配了一个行为的概率。因果决策理论用 P(A>S)或类似的因果概率替换了 P(S∣A)。它不需要为一个行为分配概率。

一个思考的代理人可以对自己可能的行为分配概率吗？是的，一个思考者可以合理地对任何事件，包括自己的行为，分配概率。因果决策理论可以通过放弃使用投注商数来适应这些概率的测量。根据这种测量方法，愿意进行赌注表明概率。假设一个人愿意在一个事件的赌注中选择任一方，其中对事件的赌注是 x，对事件的反对赌注是 y。那么这个人对该事件分配的概率就是赌注商数 x/(x+y)。当事件是一个代理人自己的未来行为时，这种测量方法可能会失败。对一个行为的实现进行赌注可能会影响该行为的概率，就像温度计的温度可能会影响它测量的液体的温度一样。

乔伊斯（2007 年：552-561）考虑了纽科姆问题是否是真正的决策问题，尽管状态和行为之间存在强相关性。他得出结论，是的，尽管存在这些相关性，一个代理人可能认为她的决策导致了她的行为。一个代理人的决策独立于状态和她的行为之间的先前相关性，支持了对她的行为的信念。根据证据自主性原则（2007 年：557），

> 一个将自己视为自由的思考代理人不需要将她对自己行为的信念与她认为自己会执行这些行为的先前证据成比例地相对应。

她应该将她的信念与她的全部证据，包括关于她自己行为的自我支持信念成比例地相对应。这些信念为她的行为提供了新的相关证据。

一个代理人在考虑行为时，应该如何理解她行为的背景？她不应该采取对她行为的回溯假设。站在悬崖边上，她不应该假设如果她跳下去，她会有降落伞来减缓她的下落。此外，她不应该想象她的基本欲望会发生无端的变化。她不应该想象如果她选择巧克力而不是香草，尽管目前更喜欢香草，那么她会更喜欢巧克力。她应该想象她的基本欲望在她想象可能进行的各种行为时是恒定的，并且在思考过程中，她应该假装她的意愿独立于她的基本欲望和厌恶来生成她的行为。

克里斯托弗·希奇科克（1996 年）认为，一个代理人应该假装她的行为不受因果影响。这样做可以使产生决策概率的状态划分与定义因果相关性的状态划分一致。因此，因果决策理论中的概率可以为概率因果理论提供基础。因果决策理论，特别是使用依赖假设的版本，为概率因果关系的理论提供了基础。

### 3.5 泛化期望效用

帕斯卡的赌注和圣彼得堡悖论等问题表明决策理论需要一种处理无限效用和期望效用的方法。假设一个选项的可能结果都有有限的效用。然而，如果这些效用是无限多且无界的，那么该选项的期望效用可能是无限的。Alan Hájek 和 Harris Nover（2006）还表明该选项可能没有期望效用。可能结果的顺序是任意的，可能会影响它们的效用的概率加权平均和平均值收敛的值（如果它确实收敛）。因果决策理论应该将其最大化期望效用的原则推广到处理这种情况。

此外，因果决策理论的常见原则提出的理性标准对人类来说过于苛刻。它们是针对理想情况下的理想代理人的标准（理想化的具体形式可能因理论家而异）。使因果决策理论变得现实需要放松其原则所假设的理想化。例如，期望效用最大化原则的推广可以放松理想化以适应有限的认知能力。Weirich（2004）和 Pollock（2006）在这方面迈出了一步。适当的推广区分将最大化期望效用作为做出决策的程序和将其作为评估决策的标准，即使在决策做出后也是如此。

### 3.6 批准

Gibbard 和 Harper（1978 年：第 11 节）通过文学中的一个例子，对因果决策理论提出了一个问题。大马士革的一个人知道他在午夜与死神有个约会。如果他在午夜不在约会地点，他将逃脱死神的追捕。他可以在午夜时分在大马士革或阿勒颇。正如这个人所知，死神对他的行踪有很好的预测能力。如果他留在大马士革，他就有证据表明死神会在大马士革找他。然而，如果他去阿勒颇，他就有证据表明死神会在阿勒颇找他。无论他决定在午夜时分去哪里，他都有证据表明他在另一个地方会更好。没有一个决策是稳定的。决策的不稳定性出现在选择为其结果提供证据的情况下，而每个选择都提供证据表明另一个选择会更好。Reed Richter（1984 年，1986 年）使用决策不稳定性的案例来反驳因果决策理论。该理论需要解决决策不稳定性的问题。

对于这个问题的常见分析将选项分为自证或非自证两类。Jeffrey（[1965] 1983 年）将证实作为证据决策理论的一个组成部分。他的理论版本根据所选择行为的预期效用来评估决策。行为和决策执行该行为的区别构成了他对选项自证和做出自证或可证决策的原则的定义。根据他的定义（[1965] 1983 年：16），

> 可证决策是指决定执行一项最大估计可取性的行为，相对于代理人认为如果最终决定执行该行为，他将具有的概率矩阵。

估计的吸引力是预期效用。一个代理的概率矩阵是一个由行和列组成的数组，分别对应于行为和状态，每个单元格由行为的行和状态的列的交叉点组成，其中包含了代理即将执行该行为时状态发生的概率。在执行行为之前，代理可以根据决策来评估行为。决策所携带的信息可能会影响行为的预期效用以及与其他行为的排序。

杰弗里使用批准作为使证据决策理论与因果决策理论产生相同建议的手段。例如，在纽科姆问题中，双选是唯一的自我批准选项。然而，杰弗里（2004: 113n）承认，证据决策理论对批准的依赖并不意味着它在所有情况下都与因果决策理论一致。此外，乔伊斯（2007）认为，批准的动机是基于因果关系的，因此，即使使用杰弗里的预期效用公式得出了正确的建议，它仍然不能产生纯粹的证据决策理论。

因果决策理论对自我批准的解释可能会忽略杰弗里通过评估所选择的行为来评估决策的方法。因为决策和行为是不同的，它们可能有不同的后果。例如，一个决策可能无法生成所选择的行为。因此，决策的预期效用可能与行为的预期效用不同。驾驶通过一段被淹没的公路可能具有很高的预期效用，因为它可以最大限度地减少到达目的地的时间。然而，决策驾驶通过被淹没的路段可能具有较低的预期效用，因为据人所知，水可能足够深以至于淹没汽车。使用行为的预期效用来评估执行行为的决策会导致错误的决策评估。更好的方法是将决策的预期效用与竞争决策的预期效用进行比较。决策的预期效用取决于其执行的概率以及所选择行为的预期后果。

Weirich（1985）和 Harper（1986）将批准定义为选项在实现时的预期效用，而不是决定实现它的决策。只有当选项在实现时最大化预期效用时，它才是自我批准的。这种批准的解释适用于选项和决定实现它的预期效用不同的情况。Weirich 和 Harper 还假设因果决策理论的预期效用公式。在《大马士革之死》的案例中，因果决策理论得出结论，受威胁的人缺乏自我批准的选项。然而，如果这个人可以抛硬币来做决定，就会出现一个自我批准的选项。采用位置的概率分布被称为混合策略，而位置的选择被称为纯策略。假设死亡无法预测硬币抛掷的结果，混合策略就是自我批准的。

在解决决策问题的讨论过程中，代理人可以根据早期的概率分配计算纯策略的预期效用来修正对纯策略的概率分配。修正的过程可能最终导致一个稳定的概率分配，代表了一个混合策略。Skyrms（1982，1990）和 Eells（1984b）研究了这些讨论的动态过程。一些未解决的问题是，采用混合策略是否解决了决策问题，以及如果纯策略本身不是自我批准的，那么由混合策略产生的纯策略是否是合理的。

Andy Egan（2007）认为，因果决策理论在涉及提供关于结果的证据的选项的决策问题中给出了错误的建议。他考虑了一个刺客思考是否扣动扳机的案例，知道该选项的实现会提供一个破坏他瞄准的脑部病变的证据。Egan 认为，因果决策理论错误地忽视了选项提供的证据。然而，包含批准的因果决策理论对这些指责是无辜的。批准考虑了选项提供的关于结果的证据。

无论是使用条件概率还是条件概率的概率，期望效用原则的任何版本都必须指定指导概率和效用分配的信息。非条件期望效用最大化原则对所有选项使用相同的信息，因此排除了关于选项实现的信息。认可原则对于每个选项使用包括选项实现在内的信息。它是一种条件期望效用最大化原则。伊根的案例不支持非条件期望效用最大化，而不是因果决策理论。使用因果决策理论的期望效用公式的条件期望效用最大化原则解决了他提出的案例。

伊根的例子并没有反驳因果决策理论，而是对其提出了挑战。假设在一个决策问题中不存在自我认可的选项，或者存在多个自我认可的选项。在这种情况下，一个理性的代理人应该如何进行决策，假设决策原则应该考虑到一个选项提供的信息？这是因果决策理论中的一个悬而未决的问题（以及任何承认一个选项的实现可能构成关于其结果的证据的决策理论）。认可分析决策的不稳定性，但并不是对其的完全回应。

作为对伊根的回应，Frank Arntzenius（2008）和 Joyce（2012）认为，在某些决策问题中，代理人使用自由可得的信息进行理性思考时，并不会确定一个单一的选项，而是确定一个选项的概率分布。他们承认代理人可能会对这些思考得出的选项感到后悔，但对于后悔的意义存在分歧。Arntzenius 认为后悔反对选项的合理性，而 Joyce 则否认这一点。Ahmed（2012）和 Ralph Wedgwood（2013）拒绝了 Arntzenius 和 Joyce 对伊根的回应，因为他们认为决策应该确定一个选项。Wedgwood 引入了一个新的决策原则来适应伊根的决策问题。Ahmed 认为伊根对这些决策问题的分析存在一个缺陷，因为当它扩展到其他一些决策问题时，它宣布每个选项都是不合理的。

Ahmed（2014b）批评决策不稳定情况下的因果决策理论。此外，在这种情况下，Jack Spencer 和 Ian Wells（2019 年，预印本 2017 年）批评了归因于因果决策理论的因果主导原则。该决策原则禁止选择一个选项，如果另一个选项在因果上占优势。Joyce（2018 年）通过关于决策动力学的观点来捍卫因果决策理论，反驳了 Ahmed 和 Spencer Wells 的指责。Armendt（2019 年）和 Bales（2020 年）也捍卫了因果决策理论对决策不稳定性的处理。

决策问题中的批准点阐明了博弈论中平衡点的问题，因为在策略游戏中，玩家的选择通常提供了关于其他玩家选择的证据。决策理论是博弈论的基础，因为游戏的解决方案确定了玩家所面临的决策问题中的理性选择。博弈的解决方案区分相关性和因果关系，决策原则也是如此。因为在同时行动的游戏中，两个玩家的策略可能是相关的，但不是因果关系，所以这类游戏的解决方案与顺序游戏的解决方案不具有相同的性质。因果决策理论关注解决游戏所依赖的区别。它支持博弈论对互动决策的描述。Joyce 和 Gibbard（2016 年）描述了博弈论中批准的作用，Stalnaker（2018 年）描述了因果决策理论在博弈论中的位置。

决策问题中存在自证混合策略，例如《大马士革之死》，这表明因果决策理论所解释的批准支持参与博弈的纳什均衡。这样的均衡为每个玩家分配了一种策略，以便分配中的每种策略都是对其他策略的最佳响应。假设两个人正在玩匹配硬币游戏。同时，每个人展示一枚硬币。一个玩家试图使两面相同，另一个玩家试图阻止匹配。如果第一个玩家成功，他将得到两枚硬币。否则，第二个玩家将得到两枚硬币。假设每个玩家都擅长预测另一个玩家，而且每个玩家都知道这一点。那么，如果第一个玩家展示正面，他有理由认为第二个玩家展示反面。此外，如果第一个玩家展示反面，他有理由认为第二个玩家展示正面。因为匹配硬币是一种同时行动的游戏，所以没有玩家的策略会影响另一个玩家的策略，但每个玩家的策略都是对另一个玩家策略的证据。混合策略有助于解决这种情况下的决策不稳定性。如果第一个玩家翻转硬币来确定要展示的一面，那么他的混合策略是自证的。第二个玩家的情况类似，她也通过翻转硬币达到了自证的策略。自证策略的组合是游戏的纳什均衡。

Weirich（2004 年：第 9 章）提出了一种在多个自我验证策略中进行选择的方法，从而使一组玩家能够在存在多个纳什均衡时协调实现特定的纳什均衡。尽管决策不稳定性是一个未解决的问题，因果决策理论有资源来解决它。该理论对问题的最终解决将为博弈论提供参与游戏的纳什均衡的正当性。

## 4. 相关主题和总结

因果决策理论在哲学的各个领域都有基础。例如，它依赖于形而上学来解释因果关系。它还依赖于归纳逻辑来解释关于因果关系的推理。一个全面的因果决策理论不仅考虑因果概率生成选项的预期效用，还考虑证据生成因果概率。

有关因果关系的研究对因果决策理论的形而上学基础起着贡献。例如，南希·卡特赖特（1979 年）利用有关因果关系的思想来详细阐述因果决策理论的细节。此外，一些因果关系的解释区分了不同类型的原因。氧气和火焰都是引起火种燃烧的形而上学原因。然而，只有火焰在因果上负有责任，因此是燃烧的规范原因。对于一个事件来说，因果责任仅归于显著的形而上学原因。因果决策理论不仅关注一个行为在因果上负有责任的事件，还关注一个行为作为形而上学原因的其他事件。指导决策的预期效用是全面的。

朱迪亚·珀尔（2000 年）以及彼得·斯皮尔特斯、克拉克·格利默和理查德·谢因斯（2000 年）提出了从统计数据中推断因果关系的方法。他们使用有向无环图和相关的概率分布来构建因果模型。在决策问题中，因果模型提供了计算行为效果的方法。因果图和其概率分布表达了一个依赖假设，并给出了每个行为在该假设下的因果影响。它们指定了在假设下状态的因果概率。一个行为的预期效用是根据候选因果模型所代表的依赖假设的预期效用的概率加权平均，正如韦里奇（2015 年：225-236）所解释的那样。

因果模型的有向图和概率分布指示了事件类型之间的因果关系。正如珀尔（2000 年：30）和斯皮尔特斯等人（2000 年：11）所解释的那样，如果一个因果模型满足因果马尔可夫条件，那么就意味着在其概率分布下，其有向图中的每个事件类型在给定其父节点的情况下与其非后代事件类型独立。在满足该条件的模型中，对一个事件的直接原因的了解使得其他信息在统计上与该事件的发生无关，除非是关于该事件及其影响的信息。对于 Newcomb's 问题的一个典型因果模型，对一个决策和一个预测的共同原因的了解使得决策和预测之间的相关性被屏蔽。

有向无环图清晰地展示了因果结构，并澄清了决策理论中依赖于因果结构的观点。例如，Eells（2000 年）观察到，除非决策屏蔽了行为与状态的相关性，否则选择就不是真正的。Joyce（2007 年：546）使用因果图来描述在与心理孪生子相关的囚徒困境中可能发生的新康姆问题。他展示了新康姆问题是一个真正的选择，尽管行为和状态之间存在相关性，因为决策屏蔽了这种相关性。Wolfgang Spohn（2012 年）为新康姆问题构建了一个区分决策和执行的因果模型，并认为根据该模型，因果决策理论建议选择单箱。决策问题中的行为可能构成决策问题因果模型中的干预，正如 Meek 和 Glamour（1994 年）所解释的那样。Hitchcock（2016 年）和 Joyce 和 Gibbard（2016 年）认为，将行为视为干预丰富了因果决策理论。

Timothy Williamson（2007 年：第 5 章）研究了反事实或虚拟条件句的认识论。他指出了它们在应急计划和决策中的作用。根据他的说法，如果在想象其前提时，其结果得到了坚实的支持，那么人们就会学到一个虚拟条件句。经验约束了想象力。导致判断虚拟条件句成立的经验既不是严格的启发性的，也不是严格的证据性的，因此对条件句的知识既不是纯粹的先验的，也不是纯粹的后验的。Williamson 声称，对虚拟条件句的知识是基础性的，因此决策理论适当地将行为的选择价值的知识建立在对这种条件句的知识之上。

大多数关于决策理论的文本都与因果决策理论一致。许多文本没有涉及特殊情况，例如新康姆问题，这些问题促使人们区分因果决策理论和证据决策理论。例如，Leonard Savage（1954 年）仅分析不影响状态概率的决策问题，正如他的效用解释所清楚表明的那样（1954 年：73）。因果决策理论和证据决策理论在这些问题上得出相同的建议。在区分因果决策理论和证据决策理论的人中，因果决策理论是主流的决策理论形式。

<!--md-padding-ignore-begin-->
## Bibliography

* Ahmed, Arif, 2012, “Push the Button”, *Philosophy of Science*, 79: 386–395.
* –––, 2014a, *Evidence, Decision and Causality*, Cambridge: Cambridge University Press.
* –––, 2014b, “Dicing with Death,” *Analysis* 74: 587–592.
* ––– (ed.), 2018, *Newcomb’s Problem*, Cambridge: Cambridge University Press.
* Armendt, Brad, 1986, “A Foundation for Causal Decision Theory”, *Topoi*, 5(1): 3–19. doi:10.1007/BF00137825
* –––, 1988a, “Conditional Preference and Causal Expected Utility”, in William Harper and Brian Skyrms (eds.), *Causation in Decision, Belief Change, and Statistics*, Vol. II, pp. 3–24, Dordrecht: Kluwer.
* –––, 1988b, “Impartiality and Causal Decision Theory”, in Arthur Fine and Jarrett Leplin (eds.), *PSA: Proceedings of Biennial Meeting of the Philosophy of Science Association 1988* (Volume I), pp. 326–336, East Lansing, MI: Philosophy of Science Association.
* –––, 2019, “Causal Decision Theory and Decision Instability,” *Journal of Philosophy*, 116: 263–277.
* Arntzenius, Frank, 2008, “No Regrets, or: Edith Piaf Revamps Decision Theory”, *Erkenntnis*, 68(2): 277–297. doi:10.1007/s10670-007-9084-8
* Bales, Adam, 2016, “The Pauper’s Problem: Chance, Foreknowledge and Causal Decision Theory”, *Philosophical Studies*, 173(6): 1497–1516. doi:10.1007/s11098-015-0560-8
* –––, 2018, “Richness and Rationality: Causal Decision Theory and the WAR Argument,” *Synthese*, 195: 259–267.
* –––, 2020, “Intentions and Instability: A Defense of Causal Decision Theory,” *Philosophical Studies*, 177: 793–804.
* Cartwright, Nancy, 1979, “Causal Laws and Effective Strategies”, *Noûs*, 13(4): 419–437. doi:10.2307/2215337
* Easwaran, Kenny, forthcoming, “A Classification of Newcomb Problems and Decision Theories,” *Synthese*, first online 30 May 2019. doi:10.1007/s11229-019-02272-z
* Eells, Ellery, 1981, “Causality, Utility, and Decision”, *Synthese*, 48(2): 295–329. doi:10.1007/BF01063891
* –––, 1982, *Rational Decision and Causality*, Cambridge: Cambridge University Press.
* –––, 1984a, “Newcomb’s Many Solutions”, *Theory and Decision*, 16(1): 59–105. doi:10.1007/BF00141675
* –––, 1984b, “Metatickles and the Dynamics of Deliberation”, *Theory and Decision*, 17(1): 71–95. doi:10.1007/BF00140057
* –––, 2000, “Review: *The Foundations of Causal Decision Theory*, by James Joyce”, *British Journal for the Philosophy of Science*, 51(4): 893–900. doi:10.1093/bjps/51.4.893
* Egan, Andy, 2007, “Some Counterexamples to Causal Decision Theory”, *Philosophical Review*, 116(1): 93–114. 10.1215/00318108-2006-023
* Gibbard, Allan and William Harper, 1978 [1981], “Counterfactuals and Two Kinds of Expected Utility”, in Clifford Alan Hooker, James L. Leach, and Edward Francis McClennan (eds.), *Foundations and Applications of Decision Theory* (University of Western Ontario Series in Philosophy of Science, 13a), Dordrecht: D. Reidel, pp. 125–162. doi:10.1007/978-94-009-9789-9_5 Reprinted in Harper, Stalnaker, and Pearce 1981: 153–190. doi:10.1007/978-94-009-9117-0_8
* Hájek, Alan and Harris Nover, 2006, “Perplexing Expectations”, *Mind*, 115(459): 703–720. 10.1093/mind/fzl703
* Hare, Caspar and Brian Hedden, 2016, “Self-Reinforcing and Self-Frustrating Decisions,” *Noûs*, 50: 604–628.
* Harper, William, 1986, “Mixed Strategies and Ratifiability in Causal Decision Theory”, *Erkenntnis*, 24(1): 25–36. doi:10.1007/BF00183199
* Harper, William, Robert Stalnaker, and Glenn Pearce (eds.), 1981,*Ifs: Conditionals, Belief, Decision, Chance, and Time* (University of Western Ontario Series in Philosophy of Science, 15), Dordrecht: Reidel.
* Hitchcock, Christopher Read, 1996, “Causal Decision Theory and Decision-Theoretic Causation”, *Noûs*, 30(4): 508–526. doi:10.2307/2216116
* –––, 2016, “Conditioning, Intervening, and Decision”, *Synthese*, 193(4): 1157–1176. doi:10.1007/s11229-015-0710-8
* Horgan, Terry, 1981 [1985], “Counterfactuals and Newcomb’s Problem”, *The Journal of Philosophy*, 78(6): 331–356. doi:10.2307/2026128 Reprinted in Richmond Campbell and Lanning Sowden (eds.), 1985, *Paradoxes of Rationality and Cooperation: Prisoner’s Dilemma and Newcomb’s Problem*, Vancouver: University of British Columbia Press, pp. 159–182.
* Horwich, Paul, 1987, *Asymmetries in Time*, Cambridge, MA: MIT Press.
* Jeffrey, Richard C., [1965] 1983, *The Logic of Decision*, second edition, Chicago: University of Chicago Press. [The 1990 paperback edition includes some revisions.]
* –––, 2004, *Subjective Probability: The Real Thing*, Cambridge: Cambridge University Press.
* Joyce, James M., 1999, *The Foundations of Causal Decision Theory*, Cambridge: Cambridge University Press.
* –––, 2000, “Why We Still Need the Logic of Decision”, *Philosophy of Science*, 67: S1–S13. doi:10.1086/392804
* –––, 2002, “Levi on Causal Decision Theory and the Possibility of Predicting One’s Own Actions”, *Philosophical Studies*, 110(1): 69–102. doi:10.1023/A:1019839429878
* –––, 2007, “Are Newcomb Problems Really Decisions?” *Synthese*, 156(3): 537–562. doi:10.1007/s11229-006-9137-6
* –––, 2012, “Regret and Instability in Causal Decision Theory”, *Synthese*, 187(1): 123–145. doi:10.1007/s11229-011-0022-6
* –––, 2018, “Deliberation and Stability in Newcomb Problems and Pseudo-Newcomb Problems,” in Arif Ahmed (ed.), *Newcomb’s Problem*, Cambridge: Cambridge University Press, pp. 138–159.
* Joyce, James and Allan Gibbard, 2016, “Causal Decision Theory”, in Horacio Arlø-Costa, Vincent F. Hendricks, and Johan van Benthem (eds.), *Readings in Formal Epistemology*, Berlin: Springer, pp. 457–491.
* Krantz, David, R., Duncan Luce, Patrick Suppes, and Amos Tversky, 1971, *The Foundations of Measurement* (Volume 1: *Additive and Polynomial Representations*), New York: Academic Press.
* Levi, Isaac, 2000, “Review Essay on *The Foundations of Causal Decision Theory*, by James Joyce”, *Journal of Philosophy*, 97(7): 387–402. doi:10.2307/2678411
* Lewis, David, 1973, *Counterfactuals*, Cambridge, MA: Harvard University Press.
* –––, 1976, “Probabilities of Conditionals and Conditional Probabilities”, *Philosophical Review*, 85(3): 297–315. doi:10.2307/2184045
* –––, 1979, “Prisoner’s Dilemma is a Newcomb Problem”, *Philosophy and Public Affairs*, 8(3): 235–240.
* –––, 1981, “Causal Decision Theory”, *Australasian Journal of Philosophy*, 59(1): 5–30. doi:10.1080/00048408112340011
* Meek, Christopher and Clark Glymour, 1994, “Conditioning and Intervening”, *British Journal for the Philosophy of Science*, 45(4): 1001–1021. doi:10.1093/bjps/45.4.1001
* Nozick, Robert, 1969, “Newcomb’s Problem and Two Principles of Choice”, in Nicholas Rescher (ed.), *Essays in Honor of Carl G. Hempel*, Dordrecht: Reidel, pp. 114–146.
* Papineau, David, 2001, “Evidentialism Reconsidered”, *Noûs*, 35(2): 239–259.
* Pearl, Judea, 2000, *Causality: Models, Reasoning, and Inference*, Cambridge: Cambridge University Press; second edition, 2009.
* Pollock, John, 2006, *Thinking about Acting: Logical Foundations for Rational Decision Making*, New York: Oxford University Press.
* –––, 2010, “A Resource-Bounded Agent Addresses the Newcomb Problem”, *Synthese*, 176(1): 57–82. doi:10.1007/s11229-009-9484-1
* Price, Huw, 1986, “Against Causal Decision Theory”, *Synthese*, 67(2): 195–212. doi:10.1007/BF00540068
* –––, 2012, “Causation, Chance, and the Rational Significance of Supernatural Evidence”, *Philosophical Review*, 121(4): 483–538. doi:10.1215/00318108-1630912
* Richter, Reed, 1984, “Rationality Revisited”, *Australasian Journal of Philosophy*, 62(4): 392–403. doi:10.1080/00048408412341601
* –––, 1986, “Further Comments on Decision Instability”, *Australasian Journal of Philosophy*, 64(3): 345–349. doi:10.1080/00048408612342571
* Savage, Leonard, 1954, *The Foundations of Statistics*, New York: Wiley.
* Skyrms, Brian, 1980, *Causal Necessity: A Pragmatic Investigation of the Necessity of Laws*, New Haven, CT: Yale University Press.
* –––, 1982, “Causal Decision Theory”, *Journal of Philosophy*, 79(11): 695–711. doi:10.2307/2026547
* –––, 1990, *The Dynamics of Rational Deliberation*, Cambridge, MA: Harvard University Press.
* Sobel, Jordan Howard, 1994, *Taking Chances: Essays on Rational Choice*, Cambridge: Cambridge University Press.
* Spencer, Jack and Ian Wells, 2019, “Why Take Both Boxes?” *Philosophy and Phenomenological Research*, 99: 27–48.
* Spirtes, Peter, Clark Glymour, and Richard Scheines, 2000, *Causation, Prediction, and Search*, second edition, Cambridge, MA: MIT Press.
* Spohn, Wolfgang, 2012, “Reversing 30 Years of Discussion: Why Causal Decision Theorists Should One-Box”, *Synthese*, 187(1): 95–122. doi:10.1007/s11229-011-0023-5
* Stalnaker, Robert C., 1968, “A Theory of Conditionals”, in *Studies in Logical Theory* (American Philosphical Quarterly Monograph series, 2 ), Oxford: Blackwell, 98–112. Reprinted in in Harper, Stalnaker, and Pearce 1981: 41–56. doi:10.1007/978-94-009-9117-0_2
* –––, 1972 [1981], “Letter to David Lewis”, May 21; printed in Harper, Stalnaker, and Pearce 1981: 151–152. doi:10.1007/978-94-009-9117-0_7
* –––, 2018, “Game Theory and Decision Theory (Causal and Evidential),” in Arif Ahmed (ed.), *Newcomb’s Problem*, Cambridge: Cambridge University Press, pp. 180–200.
* Wedgwood, Ralph, 2013, “Gandalf’s Solution to the Newcomb Problem”, *Synthese*, 190(14): 2643–2675. doi:10.1007/s11229-011-9900-1
* Weirich, Paul, 1980, “Conditional Utility and Its Place in Decision Theory”, *Journal of Philosophy*, 77(11): 702–715.
* –––, 1985, “Decision Instability”, *Australasian Journal of Philosophy*, 63(4): 465–472. doi:10.1080/00048408512342061
* –––, 2001, *Decision Space: Multidimensional Utility Analysis*, Cambridge: Cambridge University Press.
* –––, 2004, *Realistic Decision Theory: Rules for Nonideal Agents in Nonideal Circumstances*, New York: Oxford University Press.
* –––, 2015, *Models of Decision-Making: Simplifying Choices*, Cambridge: Cambridge University Press.
* Williamson, Timothy, 2007, *The Philosophy of Philosophy*, Malden, MA: Blackwell.

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=decision-causal). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/decision-causal/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=decision-causal&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](https://philpapers.org/sep/decision-causal/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* [MIT Course on Decision Theory](http://ocw.mit.edu/courses/linguistics-and-philosophy/24%E2%80%93222-decisions-games-and-rational-choice-spring-2008/), offered by Robert Stalnaker.
* [Decision Theory](http://en.wikipedia.org/wiki/Decision_theory), as of this writing (November 4, 2016), the Wikipedia site has a good overall introduction to decision theory and a list of references.

## Related Entries

[causation: counterfactual theories of](https://plato.stanford.edu/entries/causation-counterfactual/) | [causation: the metaphysics of](https://plato.stanford.edu/entries/causation-metaphysics/) | [conditionals](https://plato.stanford.edu/entries/conditionals/) | [conditionals: counterfactual](https://plato.stanford.edu/entries/counterfactuals/) | [decision theory](https://plato.stanford.edu/entries/decision-theory/) | [game theory](https://plato.stanford.edu/entries/game-theory/) | normative-theories-of-rational-choice:-expected-utility | [prisoner’s dilemma](https://plato.stanford.edu/entries/prisoner-dilemma/) | [probability, interpretations of](https://plato.stanford.edu/entries/probability-interpret/)

### Acknowledgments

I thank Christopher Haugen for bibliographical research and Brad Armendt, David Etlin, William Harper, Xiao Fei Liu, Brian Skyrms, Howard Sobel, and an anonymous referee for helpful comments.

[Copyright © 2020](https://plato.stanford.edu/info.html#c) by  
[Paul Weirich](https://philosophy.missouri.edu/people/weirich) <[*weirichp@missouri.edu*](mailto:weirichp%40missouri%2eedu)>
<!--md-padding-ignore-end-->
