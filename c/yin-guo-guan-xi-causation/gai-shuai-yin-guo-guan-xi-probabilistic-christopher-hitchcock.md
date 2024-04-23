# 概率因果关系 probabilistic (Christopher Hitchcock)

_首次发表于 1997 年 7 月 11 日星期五；实质性修订于 2018 年 3 月 9 日星期五_

“概率因果”指的是一组旨在利用概率论工具描述因果关系的理论。这些理论背后的核心思想是，原因改变了其效应的概率。本文追溯了概率因果的发展，包括因果建模中的最新进展。

本文概述了以概率来表征因果关系的主要方法。第 1 部分提供了一些概率方法用于因果关系的动机，并解决了一些初步问题。第 2 部分概述了旨在以概率升高来表征因果关系的理论。第 3 部分概述了因果建模的发展。第 4 部分涵盖了实际因果的概率解释。


***

## 1. 动机和准备工作

在这一部分，我们将提供一些动机，试图以概率的术语理解因果关系，并解决一些初步问题。

### 1.1 规律性理论的问题

根据大卫·休谟的观点，因果总是随之而来的：

> 我们可以将原因定义为_一个对象，后面跟着另一个对象，第一个对象类似的所有对象后面都跟着类似第二个对象的对象_。（1748 年：第七部分）

尝试以不变的继承模式来分析因果关系被称为“因果关系的规律性理论”。至少在其最简单的形式中，规律性理论面临着一些众所周知的问题，这些问题可能被用来推动概率方法来研究因果关系。此外，对这些困难的概述将有助于让人了解任何充分的因果关系理论必须解决的问题类型。

(i) _不完美的规律性_。第一个困难在于大多数原因并非必然导致其效应。例如，吸烟是肺癌的一个原因，即使一些吸烟者并未患上肺癌。不完美的规律性可能出现的原因有两种不同的情况。首先，它们可能是由于原因出现的环境的_异质性_。例如，一些吸烟者可能对肺癌具有遗传易感性，而其他人则没有；一些不吸烟者可能暴露于其他致癌物质（如石棉），而其他人则没有。其次，不完美的规律性也可能是由于_物理决定论_的失败而产生。如果一个事件没有被确定发生，那么没有其他事件可以是（或者是）导致该事件的充分条件。量子力学的成功——以及在较小程度上，其他使用概率的理论——动摇了我们对决定论的信念。因此，许多哲学家认为有必要发展一种不预设决定论的因果关系理论。

概率因果理论背后的核心思想是，原因_改变其效应的概率_；在没有原因的情况下，效应仍可能发生，或者在其存在时未发生。因此吸烟是肺癌的原因，不是因为所有吸烟者都患肺癌，而是因为吸烟者_更有可能_患肺癌而非非吸烟者。这与一些吸烟者避免患肺癌，以及一些非吸烟者患肺癌的情况完全一致。

(ii) _无关性_。一个总是导致某种结果的条件可能与该结果无关。被巫师施咒的盐放入水中总是会溶解（Kyburg 1965），但施咒并不导致盐溶解。施咒对溶解没有_影响_。概率因果理论通过要求原因对其效应的概率产生影响来捕捉这种影响的概念。

(iii) _不对称性_。如果_A_导致_B_，那么通常_B_也不会导致_A_。吸烟导致肺癌，但肺癌不会导致一个人吸烟。强制因果关系的不对称性的一种方式是规定原因在时间上先于效应。但如果一个因果关系理论能够解释因果关系的方向性，而不仅仅是规定它，那将是很好的。一些概率因果关系理论的支持者尝试利用概率论的资源来阐明因果关系的不对称性。

(iv) _虚假规律性_。假设一个原因经常后面跟着两个效应。这里有一个来自 Jeffrey（1969 年）的例子：假设在某个地区，每当气压降到一定水平以下时，会发生两件事。首先，一个特定气压计中的汞柱高度会降到一定水平以下。不久之后，就会发生一场暴风雨。这种情况在图 1 中以示意图形式展示。那么，当汞柱下降时，也很可能会有一场暴风雨。如果是这样，一个简单的规律性理论似乎会认为汞柱的下降_导致_了暴风雨。然而，实际上，涉及这两个事件的规律性是_虚假的_。处理这种虚假相关性的能力可能是概率因果关系理论最大的吸引力来源。

![一个带有三个文本节点的图表。基础节点是“气压下降”，箭头指向“汞柱下降”和“风暴”](https://plato.stanford.edu/entries/causation-probabilistic/figure1.svg)

图 1

### 1.2 概率

在这个小节中，我们将回顾一些概率数学理论的基础知识，并介绍一些符号。已经熟悉概率数学的读者可能希望跳过这一部分。

概率是一个函数，P，它分配介于零和一之间（包括零和一）的值。通常，函数的参数被视为集合，或者是形式语言中的命题。这些参数的正式术语是“事件”。我们将在这里使用适用于命题的符号，其中“∼”表示否定，“&”表示合取，“∨”表示析取。有时，当有一个很长的合取时，可以通过使用逗号而不是和号来缩写。概率函数的定义域具有_场_或_布尔代数_的结构。这意味着该定义域在补集和有限并或交（对于集合）的情况下是封闭的，或者在否定、合取和析取（对于命题）的情况下是封闭的。因此，如果_A_和_B_是 P 的定义域中的事件，那么∼A，A\&B 和 A∨B 也是。

概率的一些标准属性如下：

* 如果_A_是一个矛盾，那么 P(A)=0。
* 如果_A_是一个重言式，那么 P(A)=1。
* 如果 P(A\&B)=0, 那么 P(A∨B)=P(A)+P(B)
* P(∼A)=1−P(A).

除了概率论外，该条目还将使用集合论和逻辑学的基本符号。集合将以粗体显示。

* ∅ 是空集（没有成员或元素的集合）
* x∈X 意味着 _x_ 是集合 X 的成员或元素。
* X⊆Y 意味着 X 是 Y 的子集；即，X 的每个成员也是 Y 的成员。请注意，∅ 和 Y 都是 Y 的子集。
* X∖Y 是从 X 中移除 Y 的成员后得到的集合。
* ∀ 和 ∃ 分别是全称量词和存在量词。

一些进一步的定义：

* 给定 B 的条件概率，写作 P(A∣B)，通常定义如下：P(A∣B)=P(A\&B)P(B)。

如果 P(B)=0，则条件概率定义中的比率是未定义的。然而，有各种技术发展可以让我们在 P(B)为 0 时定义 P(A∣B)。我们将在这里忽略这个问题。

* 对于概率 P 的_随机变量_是一个函数_X_，它取实数值，对于任何数 x，X=x 是 P 的定义域中的一个事件。例如，我们可能有一个随机变量 T1，它取值为{1,2,3,4,5,6}，代表掷骰子的第一次结果。事件 T1=3 代表第一次掷骰子的结果为 3。我们会用 T1∈{1,2,3}来简写 T1=1∨T1=2∨T1=3。
* 如果 _A_ 和 _B_ 属于 P 的领域，则只要 P(A\&B)=P(A)×P(B)，则 _A_ 和 _B_ 在概率上是_独立_的（相对于 P）。否则，_A_ 和 _B_ 在概率上是_相关_的或_依赖_的。
* 只有当 P(A\&B∣C)=P(A∣C)×P(B∣C) 时，_A_ 和 _B_ 在给定 _C_ 的条件下是_概率上独立的_。

_随机变量_ _X_ 和 _Y_ **概率独立** 当且仅当形式为 _X∈H_ 的所有事件与形式为 _Y∈J_ 的所有事件概率上独立，其中 _H_ 和 _J_ 分别是 _X_ 和 _Y_ 的取值范围的子集。

作为一种方便的简写，一个只包含变量或一组变量但不包含值的概率陈述将被理解为对变量的所有可能值的普遍量化。因此，如果 _X={X1,…,Xm}_ 并且 _Y={Y1,…,Yn}_ ，我们可以写成

P(X∣Y)=P(X)

被简写为

∀x1…∀xm∀y1…∀yn\[P(X1=x1,…,Xm=xm∣Y1=y1,…,Yn=yn)=P(X1=x1,…,Xm=xm)]

（其中，每个变量的量词域将是相关随机变量的取值范围）。

### 1.3 概率的解释

因果关系通常被认为是世界的客观特征。如果要用概率论来捕捉它们，那么概率分配应该代表世界的某种客观特征。有许多尝试客观解释概率的方法，其中最突出的是_频率_解释和_倾向性_解释。大多数因果概率理论的支持者都以这两种方式之一理解概率。值得注意的例外是 Suppes（1970），他认为概率是科学理论模型的一个特征；以及 Skyrms（1980），他理解相关概率是某种理性代理人的主观概率。

### 1.4 一般因果和实际因果

通常区分一般或类型级别的因果关系，一方面，以及单一、标记级别或实际因果关系，另一方面。本条目采用术语“一般因果”和“实际因果”。因果主张通常具有“C 导致 E”的结构。C 和 E 是因果主张的关联者；我们将在下一节更详细地讨论因果关联者。一般因果和实际因果通常通过它们的关联者来区分。一般因果主张，例如“吸烟导致肺癌”通常不涉及特定个体、地点或时间，而仅涉及事件类型或属性。单一因果主张，例如“吉尔在 2000 年代的大量吸烟导致她患上肺癌”，通常涉及特定个体、地点和时间。然而，这只是一个不完美的指南；例如，一些将在下文讨论的一般因果理论将它们的因果关联者定为时间索引。

一个相关的区别是，一般因果关系涉及到各种可能性，而实际因果关系涉及到事件在特定情况下的实际发展。至少在实际因果关系的主张中，“原因”起到了成功动词的作用。主张“吉尔在 2000 年代大量吸烟导致她患上肺癌”意味着吉尔在 2000 年代大量吸烟，并且她患上了肺癌。

在下面将要讨论的第[2](https://plato.stanford.edu/entries/causation-probabilistic/#ProbRaisTheoCaus)节和第[3](https://plato.stanford.edu/entries/causation-probabilistic/#CausMode)节中主要涉及一般因果关系的理论，而第[4](https://plato.stanford.edu/entries/causation-probabilistic/#ActuCaus)节讨论了实际因果关系的理论。

### 1.5 因果关系的关联物

已经有许多不同的候选人被提出作为因果关系的关联物。实际因果关系的关联物通常被认为是_事件_（不要与纯技术意义上的事件混淆），尽管一些作者（例如，Mellor 2004）认为它们是_事实_。一般因果关系的关联物通常被认为是_属性_或_事件类型_。为了明确起见，_事件_将指代实际因果关系的关联物，而_因素_将指代一般因果关系的关联物。这些术语并不意味着对因果关系关联物性质的任何特定观点的承诺。

在因果的概率方法中，因果关系由概率空间中的事件或随机变量表示。由于形式主义要求我们使用否定、合取和析取，因此这些关系必须是实体（或者被实体准确表示），这些操作才能有意义地应用于它们。

在一些理论中，事件发生的时间或属性被实例化的时间起着重要作用。在这种情况下，包含指示相关时间的下标将是有用的。因此，关系可能被表示为 Ct 和 Et′。如果关系是特定事件，这个下标只是一个提醒；它并没有添加更多信息。例如，如果讨论的事件是里约奥运会的开幕式，那么下标‘8/5/2016’就不必要，以区分它与其他事件。然而，对于属性或事件类型，这样的下标确实添加了更多信息。时间索引不一定要指日期或绝对时间。它可以指特定系统发展阶段。例如，儿童接触铅漆可能导致学习障碍。这里的时间索引将指示是儿童的接触，也就是在人类生命的早期阶段引起了所讨论的效应。时间索引也可以指示相对时间。麻疹病毒暴露大约两周后会导致皮疹出现。我们可以通过为暴露分配时间索引 t=0，为皮疹分配时间索引 t=14（代表 14 天）来指示这种时间延迟。

这是标准假设，认为因果必须彼此_不同_。这意味着它们不能在逻辑关系或部分-整体关系中存在。Lewis 1986a 包含了对相关不同性概念的详细讨论。我们通常会暗中遵守这一限制。

### 1.6 进一步阅读

Psillos 2009 提供了因果关系的规律性理论概述。Lewis 1973 包含了对规律性理论问题的简要但清晰有力的概述。[科学解释](https://plato.stanford.edu/entries/scientific-explanation/)的条目包括了对其中一些问题的讨论。

Hájek 和 Hitchcock 2016b 是一本针对哲学应用的概率论简介。Billingsley 1995 和 Feller 1968 是两本关于概率论的标准教材。[概率解释](https://plato.stanford.edu/entries/probability-interpret/)的条目包括了对概率论形式主义的简要介绍，并讨论了各种概率解释。Galavotti 2005 和 Gillies 2000 是关于哲学概率理论的良好调查。Hájek 和 Hitchcock 2016a 包括了涵盖主要概率解释的论文。

Eells 1991 年的介绍很好地概述了一般因果和实际因果之间的区别。

Bennett 1988 年对因果关系背景下的事实和事件进行了很好的讨论。Ehring 2009 年对因果关系的观点进行了调查。另请参阅有关[因果形而上学](https://plato.stanford.edu/entries/causation-metaphysics/)、[事件](https://plato.stanford.edu/entries/events/)、[事实](https://plato.stanford.edu/entries/facts/)和[属性](https://plato.stanford.edu/entries/properties/)的条目。

## 2. 引发概率的因果理论

本节讨论的理论都发展了一个基本思想，即原因会提高其效应的概率。这些理论是 20 世纪下半叶主要的因果理论之一。如今，它们在很大程度上被[第 3 节](https://plato.stanford.edu/entries/causation-probabilistic/#CausMode)中讨论的因果建模方法所取代。

### 2.1 概率提升和条件概率

导致提高其效果概率的中心思想可以用条件概率来正式表达。_C_ 提高 _E_ 的概率，只有在以下情况下：

(P(R1)

P(E∣C)>P(E).

用言语表达，假设发生_C_的概率高于发生_E_的无条件概率。或者，我们可以说_C_提高了_E_的概率，只要：

(PR2)

P(E∣C)>P(E∣∼C);

给定_C_发生的情况下_E_发生的概率高于给定_C_不发生的情况下_E_发生的概率。这两种表述实际上是等价的，即不等式 PR1 成立的前提是 PR2 成立。一些作者（例如，Reichenbach 1956 年，Suppes 1970 年，Cartwright 1979 年）使用类似 PR1 的不等式制定了关于因果关系的概率理论，而其他一些作者（例如，Skyrms 1980 年，Eells 1991 年）则使用了类似 PR2 的不等式。这种差异大多是不重要的，但为了保持一致，我们将坚持使用（PR2）。因此，对于因果关系的概率论的第一个尝试将是：

(P)

_C_ 是 _E_ 的一个原因，只有当 P(E∣C)>P(E∣∼C) 时才成立。

PR 在因果理论的最简单版本上具有一些优势（见上文[Section 1.1](https://plato.stanford.edu/entries/causation-probabilistic/#ProbForReguTheo)）。PR 与不完美的规律相容：即使_C_的实例并非总是跟随_E_的实例，_C_可能会提高_E_的概率。此外，PR 解决了相关性问题：如果_C_是_E_的原因，则_C_会影响_E_的概率。但就目前而言，PR 既未解决不对称问题，也未解决虚假相关性问题。PR 未解决不对称问题，因为概率提升是对称的：只有当 P(C∣E)>P(C∣∼E)时，P(E∣C)>P(E∣∼C)，因此单凭 PR 无法确定_C_是_E_的原因还是反过来。PR 在处理虚假相关性时也存在问题。如果_C_和_E_都是由第三因素_A_引起的，那么即使_C_不导致_E_，P(E∣C)>P(E∣∼C)也是可能的。这就是上文[Figure 1](https://plato.stanford.edu/entries/causation-probabilistic/#fig1)中展示的情况。在这里，_C_是气压计中水银下降，_E_是暴风雨的发生。因此我们会期望 P(E∣C)>P(E∣∼C)。在这种情况下，大气压被称为一个_混杂_因素。

### 2.2 筛除干扰

汉斯·赖兴巴赫（Hans Reichenbach）的《时间的方向》（_The Direction of Time_）于 1956 年在他去世后出版。在这本书中，赖兴巴赫关注时间上的非对称现象的起源，特别是热力学第二定律规定的熵增加。在这部作品中，他提出了第一个完全发展的因果概率论，尽管其中一些想法可以追溯到 1925 年的一篇早期论文（Reichenbach 1925）。

赖兴巴赫引入了“_筛选_”（_screening off_）的术语来描述一种特定类型的概率关系。如果 P(E∣A\&C)=P(E∣C)，那么_C_被称为从_E_中筛选出_A_。当 P(A\&C)>0 时，这个等式等同于 P(A\&E∣C)=P(A∣C)×P(E∣C)；即_A_和_E_在给定_C_的条件下是概率上独立的。

Reichenbach 认识到存在两种因果结构，其中_C_通常会将_A_从_E_中隔离出来。第一种情况是当_A_导致_C_，而_C_又导致_E_，且没有其他路径或过程可以使_A_影响_E_。如图 2 所示。

![字母'A'带有向右箭头指向字母'C'，而'C'又带有向右箭头指向字母'E'](https://plato.stanford.edu/entries/causation-probabilistic/figure2.svg)

图 2

在这种情况下，Reichenbach 说_C_在_A_和_E_之间有因果关系。我们可以说_C_是_A_和_E_之间的中间原因，或者_C_是_E_的直接原因，_A_是_E_的间接原因。例如，无保护性行为(_A_)仅通过导致 HIV 感染(_C_)来导致艾滋病(_E_)。那么我们会期望，在那些已经感染 HIV 的人群中，通过无保护性行为感染的人患艾滋病的可能性不会比其他感染途径的人更高。

产生屏蔽效应的第二种情况是当_C_是_A_和_E_的共同原因时，比如在[图 1](https://plato.stanford.edu/entries/causation-probabilistic/#fig1)中所示的气压计示例。大气压下降(_C_)会导致气压计中水银下降(_A_)和暴风雨(_E_)。 (此符号与之前使用的符号略有不同。) 大气压将会屏蔽气压计读数与天气之间的关系：鉴于大气压下降，气压计读数对于暴风雨是否发生的概率没有影响。

Reichenbach 使用屏蔽效应的装置来解决虚假相关的问题。在我们的示例中，虽然汞柱下降(_A_)会提高暴风雨(_E_)发生的概率，但在进一步根据大气压条件时，它不会提高暴风雨发生的概率。也就是说，如果_A_和_E_是虚假相关的，那么_A_将会被一个共同原因屏蔽。更具体地说，假设_Ct_和_Et′_ 是分别发生在时间_t_和_t′_ 的事件。

(Reich)

如果且仅如果 Ct 是 Et′的一个原因：

i.

t\<t′

ii.

P(Et'∣Ct)>P(Et'∣∼Ct); 和

iii.

没有发生在时间 t"之前或与 t 同时的进一步事件_Bt"_ ，可以将 Et'从 Ct 中隔离开。

注意将 t″的限制为早于或与 Ct 发生同时。这是因为 Ct 和 Et′之间的因果中介通常会将 Ct 屏蔽在 Et′之外。在这种情况下，我们仍然希望说 Ct 是 Et′的原因，尽管是远因或间接原因。

Suppes（1970）独立提出了一个等效的因果定义，尽管他对于无屏蔽条件的动机与 Reichenbach 的不同。Suppes 在许多方面扩展了这个框架。而 Reichenbach 主要关注概率因果与统计力学基础中出现的问题，Suppes 则致力于在科学理论的概率模型框架内定义因果关系。例如，Suppes 在心理学学习模型的背景下提供了对因果关系的深入讨论。

### 2.3 共同原因原则

Reichenbach（1956）制定了一个他称之为“共同原因原则”（CCP）的原则。假设事件_A_和_B_呈正相关，即，

1. P(A\&B)>P(A)×P(B).

但假设既不是_A_也不是_B_导致另一个。那么莱希巴赫认为会有一个共同的原因_C_导致_A_和_B_，满足以下条件：

2. 0\<P(C)<1
3. P(A\&B∣C)=P(A∣C)×P(B∣C)
4. P(A\&B∣∼C)=P(A∣∼C)×P(B∣∼C)
5. P(A∣C)>P(A∣∼C)
6. P(B∣C)>P(B∣∼C).

当事件_A_、_B_和_C_满足这些条件时，它们被称为形成一个_合取分叉_。5 和 6 是由于_C_是_A_的原因，也是_B_的原因。条件 2 和 3 规定了_C_和∼C 从_A_到_B_的屏蔽。

条件 2 到 6 在数学上蕴含 1。Reichenbach 说，共同原因_解释_了_A_和_B_之间的相关性。其观点是，概率相关性如果不是一个事件导致另一个事件的结果，最终源自于确实由因果关系导致的概率相关性。

Reichenbach 在上述[Section 2.2](https://plato.stanford.edu/entries/causation-probabilistic/#ScreOff)中讨论的因果关系定义，涉及时间顺序：它要求原因发生在其效应之前。但 Reichenbach 也认为，从原因到效应的方向可以用普遍的统计不对称性来确定。假设事件_A_和_B_相关，并且_C_满足上述条件 2-6，使得_ABC_形成一个连接叉。如果_C_发生在_A_和_B_之前，并且没有满足 2 到 6 的事件发生在_A_和_B_之后，那么_ACB_被称为形成一个_面向未来的_连接叉。类似地，如果有一个满足 2 到 6 的后续事件，但没有早期事件，我们有一个_面向过去的_连接叉。如果早期事件_C_和后续事件_D_都满足 2 到 6，那么_ACBD_形成一个_闭合叉。Reichenbach 的建议是，从原因到效应的方向是开放叉占主导地位的方向。在我们的世界中，有很多面向未来的叉，几乎没有或没有面向过去的叉。然而，我们将在下面的[section 3.6](https://plato.stanford.edu/entries/causation-probabilistic/#Inte)中看到，连接叉并不是确定因果方向的最佳结构。

### 2.4 辛普森悖论和背景语境

在 Reichenbach-Suppes 的因果定义中，不等式 P(Et′∣Ct)>P(Et′∣∼Ct) 是必要的，但不是充分的。这并不充分，因为在 Ct 和 Et′ 共享一个共同原因的情况下可能成立。不幸的是，共同原因也可能导致不需要这种不等式来说明因果关系的情况。例如，假设吸烟与居住在农村高度相关：那些居住在农村的人更有可能吸烟。吸烟是肺癌的原因，但假设城市污染是导致肺癌的更强大原因。那么吸烟者总体上患肺癌的可能性可能比不吸烟者低。让 _C_ 代表吸烟， _B_ 代表居住在农村， _E_ 代表肺癌， P(E∣C)\<P(E∣∼C)。然而，请注意，如果我们对是否居住在农村或城市进行条件化，这种不等式就会被颠倒： P(E∣C\&B)>P(E∣∼C\&B)，以及 P(E∣C&∼B)>P(E∣∼C&∼B)。这种概率不等式的颠倒是“辛普森悖论”的实例。辛普森悖论对因果关系的概率理论造成的问题是由南希·卡特赖特（1979 年）和布莱恩·斯科姆斯（1980 年）几乎同时指出的。

Cartwright 和 Skyrms 试图通过用因果必须在各种_背景语境_中提高其效应的概率来取代[Reich](https://plato.stanford.edu/entries/causation-probabilistic/#reich)的条件(ii)和(iii)来纠正这个问题。Cartwright 提出了以下定义：

(Cart)

_C_ 导致 _E_ 当且仅当对于每个背景上下文 _B_，P(E∣C\&B)>P(E∣∼C\&B)。

Skyrms 提出了一个略微较弱的条件：一个原因必须至少在一个背景上下文中提高其效应的概率，并且在其他情况下不会降低其概率。背景上下文是一系列因素的连接。当这样一系列因素被条件限制时，这些因素被称为“被固定”。为了指定背景上下文，我们必须指定哪些因素被固定。在前面的例子中，我们看到当我们固定居住国家时，吸烟对肺癌的真正因果关系被揭示出来，无论是积极地（对 _B_ 进行条件限制）还是消极地（对 ∼_B_ 进行条件限制）。这表明在评估 _C_ 对 _E_ 的因果关系时，我们需要积极或消极地固定 _E_ 的其他原因。然而，这个建议并不完全正确。让 _C_ 和 _E_ 分别表示吸烟和肺癌。假设 _D_ 是一个因果中介，比如肺部存在焦油。如果 _C_ 仅通过 _D_ 导致 _E_，那么 _D_ 将会将 _C_ 与 _E_ 隔离开来：在肺部存在（不存在）焦油的情况下，肺癌的概率不会受到吸烟方式的影响。因此，我们不希望固定任何 _E_ 的原因，这些原因本身是由 _C_ 引起的。让我们称所有是 _E_ 的原因但不是由 _C_ 引起的因素集合为 _E_ 的 _独立_ 原因集。因此，_C_ 和 _E_ 的背景上下文将是一个最大的连接，每个连接项要么是 _E_ 的独立原因，要么是 _E_ 的独立原因的否定。

请注意，需要保持固定的因素的规范涉及因果关系，因此该理论不再提供对因果关系的还原分析。尽管如此，该理论对可能的因果关系施加了概率约束，即给定的概率关系集将与至少一些因果关系系统不相容。还要注意，我们已经删除了指代时间的下标。卡特赖特声称，在她的理论中，无需诉诸事件的时间顺序来区分原因和结果。这是因为通常不再成立的是，如果_C_在每个相关背景上下文_B_中提高了_E_的概率，那么_E_在每个背景上下文_B′_ 中提高_C_的概率。原因在于背景上下文的构建确保用于评估_C_对_E_的因果相关性的背景上下文与用于评估_E_对_C_的因果相关性的背景上下文不同。然而，戴维斯（1988 年）和伊尔斯（1991 年）都有力地主张，卡特赖特的观点有时仍会认定效应导致它们的原因。

### 2.5 其他因果关系

Cartwright 将因果定义为在每个背景环境中增加其效应概率的因素。但很容易看出_C_和_E_之间存在其他可能的概率关系。Eells（1991）提出以下分类：

（Eells）

•

如果且仅如果对于每个背景语境_B_，当且仅当 t\<t'且 P(Et'∣Ct\&B)>P(Et'∣∼Ct\&B)，Ct 是 Et′的_正因果_（或简称_因果_）。

•

如果且仅如果对于每个背景上下文_B_，当且仅当 t\<t′且 P(Et′∣Ct\&B)\<P(Et′∣∼Ct\&B)时，Ct 是 Et′的_负因果_（或 Ct_阻止_Et′或 Ct_抑制_Et′）。

•

如果且仅如果对于每个背景上下文 _B_，对于 Et′，当且仅当 P(Et′∣Ct\&B)=P(Et′∣∼Ct\&B) 时，Ct 对于 Et′ 是 _因果中立_（或对于 Et′ 是 _因果无关_）。

•

如果且仅如果 t < t'，且 Ct 不是 Et' 的积极或消极原因，且 Ct 对 Et' 不是因果中性，那么 Ct 是 Et' 的混合原因（或相互作用原因）。

Ct 对 Et′具有_因果关系_，当且仅当它是 Et′的正因、负因或混合因；即当且仅当 t\<t′且 Ct 对 Et′不是因果中性时。

显而易见的是，在构建_C_和_E_的背景背景时，应该固定不仅是独立于 C 的_E_的(正)原因，还应该固定_E_的负因和混合因；换句话说，应该固定所有对_E_具有因果关系的因素，除了_C_具有因果关系的因素。这表明，因果关系而不是正因果是最基本的形而上学概念。

Eells 的分类法揭示了一个重要的区别。询问_C_是否在某种程度上与_E_有因果关系是一回事；询问_C_以何种方式与_E_有因果关系是另一回事。说_C_导致_E_可能存在潜在的歧义：这可能意味着_C_与_E_有因果关系；也可能意味着_C_是_E_的积极原因。因果关系的概率论可以用来回答这两种问题。

Eells 声称一般的因果断言必须相对于一个人口进行。一个非常异质的人口将包含许多不同的背景条件，而一个同质的人口将包含很少。一个异质的人口总是可以被细分为同质的子人口。经常发生的情况是，相对于人口 P，_C_对_E_是一个混合原因，同时对 P 的各个子人口而言，_C_可能是_E_的积极原因、消极原因或因果中立。

### 2.6 上下文一致性

根据[Cart](https://plato.stanford.edu/entries/causation-probabilistic/#exCart)和[Eells](https://plato.stanford.edu/entries/causation-probabilistic/#exEells)的观点，一个原因必须在_每个_背景环境中提高其效应的概率。这被称为_上下文一致性_的要求。Dupré（1984）提出了对上下文一致性要求的以下反例。假设存在一种非常罕见的基因，具有以下效应：拥有该基因的人在吸烟时患肺癌的几率_降低_。在这种情况下，会有一个背景环境，吸烟降低患肺癌的概率：因此根据上下文一致性的要求，吸烟不会是导致肺癌的原因。尽管如此，发现这样一种基因似乎不太可能导致我们放弃吸烟导致肺癌的说法。

Dupré建议，我们应该认为_C_是_E_的一个原因，如果它提高了_E_在“公平样本”中的概率——即代表整个人口的样本。从数学上讲，这相当于要求：

_C_ 导致 _E_ 当且仅当

ΣBP(E∣C\&B)×P(B)>ΣBP(E∣∼C\&B)×P(B)

其中 _B_ 可取相关背景语境。这等同于要求 _C_ 必须在背景语境的 _加权平均_ 中提高 _E_ 的概率，其中每个背景语境由 P(B) 的乘积和绝对值加权。

Dupré的描述无疑更接近于捕捉我们对因果语言的日常使用。实际上，在[Dupré](https://plato.stanford.edu/entries/causation-probabilistic/#exDupre)的不等式是随机试验中所寻找的。如果随机确定人口中哪些成员接受治疗(_C_)，哪些不接受(∼C)，那么背景条件_B_的分布应该在两组中相同，并且应该反映这些条件在人口中的频率。因此，我们期望在治疗组中_E_的频率更高，只有在 Dupré的不等式成立时。

另一方面，Eells 的以人口为基础的表述使我们能够提出更精确的因果断言：在整个人口中，吸烟是肺癌的混合原因；在缺乏保护基因的个体子群中，吸烟是肺癌的正因；在拥有该基因的个体子群中，吸烟是肺癌的负因。

在任何情况下，这场辩论似乎并不真正涉及因果的形而上学。正如我们在前一节中看到的，因果相关性实际上是基本的形而上学概念。杜普雷（Dupré）和伊尔斯（Eells）之间的争论实际上是关于如何最好地使用“因果”这个词来指代特定类型的因果相关性。杜普雷提出的用法将会将伊尔斯提出的用法中的混合原因（mixed causes） 计算为（积极的）原因。但似乎并没有关于哪些因素是因果相关的根本分歧。（有关类似立场的辩护，请参见 Twardy 和 Korb 2004。）

### 2.7 结论和进一步阅读

本节描述的程序在阐明因果关系和概率之间的关系方面做出了很大贡献。特别是，它帮助我们更好地理解因果结构如何导致概率关系的筛选。然而，尽管该程序具有数学框架，并与统计学和实验方法学有接触点，但该程序并未产生任何新的计算工具，也未提出任何检测因果关系的新方法。因此，该程序在很大程度上已被下一节中描述的因果建模工具所取代。

本节调查的主要作品包括 Reichenbach 1956，Suppes 1970，Cartwright 1979，Skyrms 1980 和 Eells 1991。Williamson 2009 和 Hitchcock 2016 是另外两部调查，涵盖了本节讨论的许多主题。有关[Hans Reichenbach](https://plato.stanford.edu/entries/reichenbach/)和[Reichenbach 的共同原因原则](https://plato.stanford.edu/entries/physics-Rpcc/)的条目包括对 Reichenbach 的程序以及他的共同原因原则状况的讨论。Salmon（1984）包含了对连词叉的广泛讨论。有关[Simpson 悖论](https://plato.stanford.edu/entries/paradox-simpson/)的条目进一步讨论了[第 2.4 节](https://plato.stanford.edu/entries/causation-probabilistic/#SimpParaBackCont)中提出的一些问题。

## 3. 因果建模

前一节的讨论传达了从概率相关性推断因果关系问题的复杂性。最近，已经发展出了许多技术来表示因果关系系统，并从概率中推断因果关系。常常用“因果建模”这个名字来描述致力于研究因果推断方法的新跨学科领域。这一领域涵盖了统计学、人工智能、哲学、计量经济学、流行病学等学科的贡献。在这一领域中，引起最大哲学兴趣的研究项目是计算机科学家朱迪亚·珀尔及其合作者，以及哲学家彼得·斯皮尔蒂斯、克拉克·格莱默和理查德·谢因斯（SGS）及其合作者的研究。这些作者最重要的作品是珀尔（2009）（首次出版于 2000 年）和斯皮尔蒂斯等人（2000）（首次出版于 1993 年）。

### 3.1 图形因果模型

每个因果模型涉及一组变量 V。 V 中的变量可能包括个体的教育水平、收入和职业等。一个变量可以是二元的，其值表示某个事件的发生或非发生，或某个属性的实例化或非实例化。但正如收入的例子所示，一个变量可以有多个值，甚至是连续的。

一个概率因果模型还包括一个概率度量 P。P 定义在形式为 X=x 的命题上，其中 _X_ 是 V 中的一个变量， _x_ 是 _X_ 的取值范围内的一个值。P 也定义在这些命题的合取、析取和否定上。由此可知，只要被条件限制的事件具有正概率，这些命题上的条件概率就是明确定义的。通常认为 P 代表某种客观概率。

在 V 中的变量之间的因果关系由 _图_ 表示。我们将考虑两种类型的图。第一种是 _有向无环图_ (DAG)。在变量集 V 上的 _有向图_ G 是 V 中变量的有序对的集合。我们通过从 _X_ 指向 _Y_ 的箭头来直观表示这一点，当且仅当 ⟨X,Y⟩ 在 G 中时。图 3 显示了一个在变量集 V={S,T,W,X,Y,Z} 上的有向图。

![一个带有 6 个字母 S 的图表，S 指向 T，T 又指向 X 和 Y，Y 又指向 Z，Z 又指向 W，W 又指向 Y](https://plato.stanford.edu/entries/causation-probabilistic/figure3.svg)

图 3

在有向图中，一条_路径_是一系列不重复的箭头，它们的端点相同。例如，从_X_到_Z_有一条路径，我们可以写成 X←T→Y→Z。一个_有向路径_是一条所有箭头都通过尖端对尾端对齐的路径；例如，有一条有向路径 S→T→Y→Z。如果没有从一个变量指向自身的有向路径，那么有向图是_无环_的，因此是一个 DAG。[图 3](https://plato.stanford.edu/entries/causation-probabilistic/#fig3)中的图是一个 DAG。

图中的关系通常用家族关系的语言来描述。变量_X_是_Y_的_父节点_，只要有一条从_X_指向_Y_的箭头。PA(Y)表示_Y_的所有父节点的集合。在[图 3](https://plato.stanford.edu/entries/causation-probabilistic/#fig3)中，PA(Y)={T,W}。_X_是_Y_的_祖先_（_Y_是_X_的_后代_），只要有一条从_X_指向_Y_的有向路径。然而，为了方便起见，我们会略微偏离家族类比，并定义‘后代’，使得每个变量也是其自身的后代。DE(X)表示_X_的所有后代的集合。在[图 3](https://plato.stanford.edu/entries/causation-probabilistic/#fig3)中，DE(T)={T,X,Y,Z}。

在 DAG 中，从_Y_指向_Z_的箭头表示_Y_是_Z_的直接原因。大致上，这意味着_Y_的值对_Z_的值产生了某种因果关系，并且_Y_通过一些过程影响_Z_，而这些过程不受 V 中任何其他变量的影响。直接性是相对于一个变量集合而言的。我们将称在 DAG 中表示的直接因果关系系统（例如[图 3](https://plato.stanford.edu/entries/causation-probabilistic/#fig3)）为变量集合 V 上的_因果结构_。

我们将考虑的第二种图是_无环有向混合图_（ADMG）。ADMG 将包含双头箭头和单头箭头。双头箭头代表_潜在_的共同原因。变量_X_和_Y_的潜在共同原因是未包含在变量集合 V 中的共同原因。例如，假设_X_和_Y_共享一个共同原因_L_（图 4(a)）。在变量集合 V={X,Y}上的 ADMG 看起来像图 4(b)。

\| ![指向 X 和 Y 的三个字母 L 的箭头图](https://plato.stanford.edu/entries/causation-probabilistic/figure4a.svg) | | ![连接 X 和 Y 的双向箭头的两个字母 X 和 Y 的图](https://plato.stanford.edu/entries/causation-probabilistic/figure4b.svg) |

\| --- | --- | --- |

\| (a) | | (b) |

Figure 4

我们只需要以这种方式表示缺失的共同原因，当它们是_最接近_的共同原因时。也就是说，当图中的 V 应该在_X_和_Y_之间包含一个双头箭头时，存在一个变量_L_从 V 中省略，如果_L_被添加到 V 中，它将是_X_和_Y_的_直接原因_。双头箭头不会产生“系谱”关系：在[图 4(b)](https://plato.stanford.edu/entries/causation-probabilistic/#fig4b)中，_X_不是_Y_的父母、祖先或后代。

在 ADMG 中，我们扩展了_路径_的定义，以包括双头箭头。因此，在[图 4(b)](https://plato.stanford.edu/entries/causation-probabilistic/#fig4b)中显示的 ADMG 中，X↔Y 是一条路径。_有向路径_保留相同的含义，有向路径不能包含双头箭头。ADMG 不能包括从一个变量到其自身的有向路径。

我们将采纳这样的约定，即有向无环图（DAGs）和潜在有向无环图（ADMGs）都代表着直接因果关系和潜在共同原因的存在和不存在。例如，[图 3](https://plato.stanford.edu/entries/causation-probabilistic/#fig3)中的 DAG 表示_T_是_Y_的直接原因，_T_不是_Z_的直接原因，并且没有任何变量的潜在共同原因。

### 3.2 识别问题

我们将对具有一般结构的各种问题感兴趣。将涉及对正在调查的系统的某种因果特征进行_查询_。查询可能涉及：

* 一组变量的定性因果结构。例如，我们可能会问哪个 DAG，或者哪个 ADMG，正确描述了 V={S,T,W,X,Y,Z}中变量之间的因果结构。或者我们可能对因果结构的某些特定特征感兴趣，比如_X_是否是_Y_的直接原因。具有这种类型查询的问题有时被称为_因果发现_问题。
* 干预的影响。如果我们要干预因果结构，并将_X_的值设为_x_，那么_Y_取值_y_的概率是多少？例如，如果我们通过给患者药物来干预，那么他康复的概率是多少？

一个给定的问题也会有一组输入。这些输入属于各种类别：

_形而上学和方法论假设：这些是关于因果结构和概率之间关系的一般假设。这些假设起到了类似于因果理论的概率作用。它们告诉我们，特别是因果关系如何限制概率关系。我们将考虑的主要假设是_马尔可夫条件 _（MC）、_ 最小性条件_和_忠实性条件 _。_

_关于因果结构的背景假设：我们可以假设特定的 DAG 或 ADMG 描述了某些变量集上的因果结构，或者假设正确的图表中是否包括从_X_到_Y_的箭头。特别是，我们可能有时间顺序信息，限制可能的因果结构。例如，如果我们知道_X_涉及比_Y_更早的时间，那么我们可以排除_Y_在因果上影响_X_的因果结构。_

* 观察：关于变量集合 V 上的概率分布 P 的信息。

在现实科学案例中，我们从未直接观察到关于一组变量的真实概率分布 P。相反，我们观察到的是有限数据，当样本量足够大且观测协议设计良好时，这些数据会近似于真实概率。由于我们主要关注概率如何确定或约束因果结构的哲学问题，我们不会涉及这些重要的实际问题。可以从真实概率中确定的查询答案被称为_可识别_。例如，如果我们可以从变量集合 V 上的概率分布确定正确的有向无环图（DAG），则该 DAG 是可识别的。

### 3.3 马尔可夫条件

将在图 G 中表示的 V 上的因果结构与概率分布 P 之间的最重要原则是_马尔可夫条件_（MC）。首先考虑 G 为有向无环图（DAG）的情况。那么 P 相对于 G 满足_马尔可夫条件_（MC）当且仅当满足以下三个条件：

\| (MCScreening\_off) | 对于 V 中的每个变量_X_，以及每个变量集合 Y⊆V∖DE(X)，P(X∣PA(X)\&Y)=P(X∣PA(X))。|

\| --- | --- |

\| (MCFactorization) | 让 V={X1,X2,…,Xn}。那么 P(X1,X2,…,Xn)=∏iP(Xi∣PA(Xi))。|

\| (MC_d_-separation) | 让 X,Y∈V,Z⊆V∖{X,Y}。那么如果 Z _d_-分离 X 和 Y 在 G 中（下面解释），则 P(X,Y∣Z)=P(X∣Z)×P(Y∣Z)。|

这三个条件在 G 是一个 DAG 时是等价的。

让我们花点时间解释这些表述中的每一个。

MCScreening\_off 表示，变量 _X_ 的父母将 _X_ 从除 _X_ 的后代之外的所有其他变量中筛选出来。在已知是 _X_ 的父母的变量的值的情况下， Y 中变量的值（其中不包括 _X_ 的后代）对 _X_ 取任何特定值的概率不会再产生影响。

MCFactorization 告诉我们，一旦我们知道每个变量在已知其父母的条件概率分布，P(Xi∣PA(Xi))，我们就可以计算所有变量的完整联合分布。这捕捉了莱希巴赫的想法，即不作为因果关系的变量之间的概率关系仍然源自因果关系之间的概率关系。

MC_d_-separation 使用了 Pearl（1988）引入的_d_-separation 的图形概念。设 X，Y∈V，Z⊆V∖{X,Y}。如上所述，从 _X_ 到 _Y_ 的路径是一系列变量 ⟨X=X1,…,Xk=Y⟩，使得对于每个 Xi，Xi+1，图 G 中要么有从 Xi 到 Xi+1 的箭头，要么有从 Xi+1 到 Xi 的箭头。路径上的变量 Xi，1\<i\<k，如果存在从 Xi−1 到 Xi 和从 Xi+1 到 Xi 的箭头，则称为路径上的 _collider_。也就是说，Xi 在路径上是一个 collider，当且仅当路径中有两个箭头汇聚在 Xi 上。Z _d_-separates _X_ 和 _Y_，当且仅当从 _X_ 到 _Y_ 的每条路径 ⟨X=X1,…,Xk=Y⟩ 都包含至少一个变量 Xi，使得要么：(i) Xi 是一个 collider，并且 Xi 的后代（包括 Xi 本身）都不在 Z 中；或者 (ii) Xi 不是一个 collider，并且 Xi 在 Z 中。MC_d_-separation 表明，_d_-separation 对于条件独立性是充分的。

请注意，MC 提供了变量在给定其他变量条件下概率独立的充分条件，但没有必要条件。马尔可夫条件包含了许多与 Reichenbach 的共同原因原则相同的隔离关系，如上文 [Section 2.3](https://plato.stanford.edu/entries/causation-probabilistic/#CommCausPrin) 中所讨论的。以下是一些例子：

![一个有 5 个字母 T 的图表，T 指向 W，W 指向 X 和 Z，X 又指向 Y](https://plato.stanford.edu/entries/causation-probabilistic/figure5.svg)

图 5

在图 5 中，MC 意味着_X_将_Y_与所有其他变量隔离开来，并且_W_将_Z_与所有其他变量隔离开来。这最容易从 MCScreening off 中看出。_W_还将_T_与所有其他变量隔离开来，这最容易从 MC_d_-separation 中看出。MC 并不意味着_T_将_Y_与_Z_隔离开来（或者实际上是任何事物与任何事物隔离开来）。虽然_Y_和_Z_有一个共同的原因将它们隔离开来（_W_），但并非所有共同原因都将它们隔离开来（_T_不一定会），并且并非将它们隔离开来的一切都是共同原因（_X_将它们隔离开来但不是共同原因）。

![一个图示，有 3 个字母 X 和 Y，都有箭头指向 Z](https://plato.stanford.edu/entries/causation-probabilistic/figure6.svg)

图 6

在图 6 中，MC 意味着_X_和_Y_将是无条件独立的，但不意味着它们在给定_Z_的条件下会独立。这最容易从 MC_d_-separation 中看出。

MC 不应该对任意变量集合 V 成立，即使图 G 准确表示这些变量之间的因果关系。例如，在以下情况下，MC 通常会失败：

1. 在 EPR（爱因斯坦-波多尔斯基-罗森）设置中，我们有两个粒子处于纠缠态。如果 _X_ 表示对一个粒子的自旋测量，_Y_ 表示对另一个粒子（在同一方向上）的自旋测量，则 _X_ 和 _Y_ 是完全反相关的。（一个粒子自旋向上的情况仅在另一个粒子自旋向下的情况下才会发生。）这些测量可以在彼此足够远的地方进行，以至于一个结果不可能因果影响另一个结果。然而，可以证明没有（局部的）共同原因 _Z_ 能够控制这两个测量结果。
2. 在 V 中的变量并不适当地不同。例如，假设 _X_、_Y_ 和 _Z_ 是概率独立且因果无关的变量。现在定义 U=X+Y 和 W=Y+Z，并令 V={U,W}。那么 _U_ 和 _W_ 将在概率上相关，即使它们之间没有因果关系。
3. 如果变量过于粗粒度，MC 可能会失败。假设 _X_、_Y_ 和 _Z_ 是定量变量，_Z_ 是 _X_ 和 _Y_ 的共同原因，且 _X_ 和 _Y_ 互不引起对方。假设我们用一个更粗的变量 Z′ 替换 _Z_，只指示 _Z_ 是高还是低。那么我们不会期望 Z′ 能够将 _X_ 与 _Y_ 隔离开。_X_ 的值很可能包含有关 _Z_ 值的信息，超出了 Z′ 给出的信息，这可能会影响 _Y_ 的概率。

如果存在潜在的共同原因，我们期望如果我们以天真的方式应用它们，MCScreening off 和 MCFactorization 会失败。例如，假设在 V={X,Y,Z} 上真实的因果结构如图 7 中的 ADMG 所示。

![一个三个字母 X 的图表，它右边有一个指向 Y 的箭头，Y 又有一个指向 Z 的箭头；一个连接 X 和 Z 的双头曲线箭头](https://plato.stanford.edu/entries/causation-probabilistic/figure7.svg)

图 7

_Y_ 是图中显示的 _Z_ 的唯一父节点，如果我们尝试应用 MCScreening\off，它告诉我们 _Y_ 应该将 _X_ 屏蔽掉 _Z_。然而，我们期望 _X_ 和 _Z_ 在给定 _Y_ 的条件下也会相关，这是由于潜在的共同原因。问题在于图中缺少 _Z_ 的一个相关父节点，即被省略的共同原因。然而，假设概率分布是这样的，即如果潜在原因 _L_ 被添加，那么在扩展的变量集上的概率分布将满足相对于结果 DAG 的 MC。然后，结果表明概率分布仍将相对于[图 8](https://plato.stanford.edu/entries/causation-probabilistic/#fig8)的 ADMG 满足 MC_d\-分离。这要求我们扩展 _d\-分离的定义，以包括具有双头箭头的路径。例如，_Z_ 是路径 Y→Z↔X 上的碰撞器（因为 _Z_ 有两个箭头指向它），但 _X_ 不是路径 Y←X↔Z 上的碰撞器。因此，我们将说概率分布 P 相对于 ADMG 满足马尔可夫条件，只要它满足 MC_d\-分离。

SGS 2000 和 Pearl 2009 都包含了一个被称为_Causal Markov Condition_（CMC）的原则性陈述，但它们的含义不同。在 Pearl 的阐述中，CMC 只是一个数学定理的陈述：Pearl 和 Verma（1991）证明，如果 V 中的每个变量都是其父变量的确定性乘积，再加上一个误差项，并且这些误差在概率上彼此独立，那么 V 上的概率分布将满足相对于 DAG G 的 MC。Pearl 以以下方式解释这一结果：宏观系统是确定性的。然而，在实践中，我们从未能够接触到影响宏观系统的所有因果相关变量。但是，如果我们在模型中包含足够多的变量，使得被排除的变量在概率上彼此独立，那么我们的模型将满足 MC，并且我们将拥有一套强大的分析工具来研究系统。因此，MC 表征了我们构建了完整系统的有用近似的一个点。

在 SGS 2000 中，CMC 更多地具有经验实证的地位。如果 V 是一组经过精心选择的宏观变量，意味着它们不受上述(ii)和(iii)点描述的缺陷的影响；G 是代表 V 上因果结构的图；P 是由此因果结构产生的客观概率分布；那么可以期望 P 相对于 G 满足 MC。更确切地说，如果 G 是一个有向无环图，则 P 将满足 MC 的三个版本，如果 G 是一个带有双头箭头的 ADMG，则 P 将满足 MC_d_-separation。SGS 以两种不同的方式捍卫这一经验实证：

1. 从经验上看，似乎有很多系统实际上满足因果关系。
2. 实际上用于检测因果关系的许多方法都默认假设了因果关系。特别是，随机试验的使用预设了因果关系的一个特例。假设一个实验者随机决定哪些受试者将接受药物治疗（D=1），哪些将接受安慰剂（D=0），并且在这种方案下，治疗与康复（_R_）存在概率相关性。随机化的效果是消除_D_的所有父节点，因果关系告诉我们，如果_R_不是_D_的后代，那么_R_和_D_应该是概率独立的。如果我们不做出这个假设，那么我们如何能从实验中推断出_D_是_R_的原因呢？

Cartwright（1993 年，2007 年：第 8 章）认为 MC 不一定适用于真正的不确定性系统。Hausman 和 Woodward（1999 年，2004 年）试图为不确定性系统辩护。

一个包括 DAG 和满足 MC 的概率分布的因果模型被称为_因果贝叶斯网络_（CBN）。一个包括 ADMG 和满足 MC_d_-分离的概率分布的因果模型被称为_半马尔可夫因果模型_（SMCM）。

### 3.4 最小性和忠实性条件

MC 陈述了条件概率独立的充分条件，但不是必要条件。因此，MC 本身永远不能蕴涵两个变量是有条件或无条件依赖的。最小性和忠实性条件是提出概率独立的必要条件的两个原则。这个术语来自 Spirtes 等人（2000 年）。Pearl 提供了类似的条件，但使用不同的术语。

(i) _最小性条件_。假设变量集合 V 上的无环有向图 G 满足概率分布 P 的 MC。最小性条件断言，G 上关于 V 的任何子图也不能满足关于 P 的马尔可夫条件。（G 的子图是从 G 中去除箭头后得到的图）。举例说明，考虑变量集合{X,Y}，假设从_X_到_Y_有一条箭头，并且根据概率函数 P，_X_和_Y_在概率上是相互独立的。这个图会满足关于 P 的 MC：MC 规定的任何独立关系都不缺失（事实上，MC 不规定任何独立关系）。但这个图会违反关于 P 的最小性条件，因为去掉从_X_到_Y_的箭头的子图也会满足 MC。最小性条件意味着如果从_X_到_Y_有一条箭头，那么_X_对于_Y_在给定_Y_的其他父节点的条件下会产生概率上的差异。换句话说，如果 Z=PA(Y)∖{X}，那么存在 z，y，x，x′，使得

P(Y=y∣X=x\&Z=z)≠P(Y=y∣X=x′\&Z=z)。

(ii) _忠实性条件_。忠实性条件表示在 V 中的变量之间存在的所有（有条件和无条件的）概率独立性都被 MC 所_要求_。例如，假设 V={X,Y,Z}。还假设_X_和_Y_在彼此之间无条件独立，但在_Z_的条件下是相关的。（另外两对变量是相关的，无论在条件下还是无条件下。）在[图 8](https://plato.stanford.edu/entries/causation-probabilistic/#fig8)中显示的图表不满足这个分布的忠实性条件（口语上说，图表与分布不忠实）。当应用于[图 8](https://plato.stanford.edu/entries/causation-probabilistic/#fig8)中的图表时，MC 并不意味着_X_和_Y_的独立性。相比之下，上面显示的[图 6](https://plato.stanford.edu/entries/causation-probabilistic/#fig6)中的图表对所描述的分布是忠实的。请注意，[图 8](https://plato.stanford.edu/entries/causation-probabilistic/#fig8)在分布方面满足最小性条件；没有子图满足所描述的分布的 MC。事实上，忠实性条件比最小性条件严格。

![一个带有 X 指向 Z 和 Y 以及 Z 指向 Y 的三个字母的图表](https://plato.stanford.edu/entries/causation-probabilistic/figure8.svg)

图 8

忠实条件意味着一个变量对另一个变量的因果影响沿着多个因果路径不会“抵消”。在图 8 中，_X_通过两条不同的有向路径影响_Y_。如果一条路径的影响恰好抵消了另一条路径上的影响，那么_X_和_Y_将在概率上独立。忠实条件禁止这种精确的抵消。这种“无法取消”的条件似乎不太可能作为因果与概率之间联系的形而上或概念约束。例如，如果一个基因编码生产特定蛋白质，并抑制另一个编码相同蛋白质的基因，第一个基因的作用将独立于蛋白质的存在。Cartwright（2007 年：第 6 章）和 Andersen（2103 年）认为，违反忠实性是普遍存在的。

信实条件是一种方法论原则，而不是一种形而上学原则。在{X，Y，Z}上给定一个分布，其中_X_和_Y_是独立的，我们应该推断因果结构是[图 6](https://plato.stanford.edu/entries/causation-probabilistic/#fig6)中描述的，而不是[图 8](https://plato.stanford.edu/entries/causation-probabilistic/#fig8)。这并不是因为[图 8](https://plato.stanford.edu/entries/causation-probabilistic/#fig8)被分布明确排除，而是因为假设一个暗示_X_和_Y_独立性的因果结构比假设一个仅与独立性一致的因果结构更可取。

### 3.5 因果结构的可识别性

Reichenbach 和 Suppes 最初的希望是将因果关系归纳为概率。这种希望在因果建模框架内得以实现到了什么程度？因果建模并未以传统哲学意义上的归纳方式提供；也就是说，它并未提供类似“_X_导致_Y_当且仅当…”这种形式的分析，其中双条件式的右侧不涉及因果关系。相反，它提供了一系列关于因果结构如何限制概率值的假设。然而，如果我们有一组变量 V 和 V 上的概率分布 P，我们可以问 P 是否足以确定唯一的因果图 G 在 V 上。

Pearl（1988 年：第 3 章）证明了以下定理：

(时间顺序的可识别性)

如果

1. 在 V 中的变量是时间索引的，因此只有较早的变量才能导致较晚的变量;
2. 概率 P 分配正概率给 V 中变量值的每种可能赋值;
3. 没有潜在的共同原因，因此正确的因果图 G 是一个 DAG；
4. 并且概率测度 P 满足相对于 G 的马尔可夫和最小条件；

然后就有可能根据 P 来唯一确定 G。

在许多方面，这个结果成功地执行了上述[第 2 节](https://plato.stanford.edu/entries/causation-probabilistic/#ProbRaisTheoCaus)中描述的项目类型。也就是说，通过对时间索引和概率与因果关系之间的实质性假设进行相同类型的假设，它建立了使用概率来确定因果结构的可能性。

如果我们没有关于时间顺序的信息，或者其他限制变量 V 中可能的因果结构的实质性假设，那么仅凭概率就不总是可能从中识别因果结构。一般来说，给定变量 V 上的概率分布 P，只能识别一个_马尔可夫等价类_的因果结构。这将是 V 上的所有 DAG 的集合，这些 DAG（连同 MC 一起）暗示了 P 中包含的所有条件独立关系。_PC 算法_（SGS 2000: 84–85），以其两位创作者（_P_eter Spirtes 和_C_lark Glymour）命名，是一种生成给定概率分布的马尔可夫等价类的算法之一。

考虑涉及三个变量{X，Y，Z}的两个简单示例。假设我们的概率分布具有以下特性：

* _X_ 和 _Y_ 在无条件下是相关的，并且在 _Z_ 的条件下是相关的
* _Y_ 和 _Z_ 在无条件下是相关的，并且在 _X_ 的条件下是相关的
* _X_ 和 _Z_ 在 _Y_ 的条件下是独立的，但在无条件下是有依赖的

那么马尔可夫等价类是：

X→Y→ZX←Y←ZX←Y→Z

我们无法从概率分布中，结合 MC 和信念，确定这些结构中哪个是正确的。

另一方面，假设概率分布如下：

* _X_ 和 _Y_ 在无条件下是相关的，在给定 _Z_ 的条件下

_Y_ 和 _Z_ 在无条件下是相关的，在条件下是对 _X_ 有条件的

* _X_ 和 _Z_ 在无条件下是独立的，但在 _Y_ 有条件下是相关的

然后马尔可夫等价类为：

X→Y←Z

请注意，{X，Y，Z}上的第一个概率分布是由 Reichenbach 的共同原因原则所表征的。第二个分布颠倒了_X_和_Z_之间的关系：它们在无条件下是_独立_的，在有条件下是_依赖_的。与 Reichenbach 相反，实际上后一种依赖关系模式对于定向图中的因果箭头最有用。在最后显示的因果结构中，_Y_是从_X_到_Z_的路径上的碰撞器。MC_d_-分离意味着碰撞器导致独特的条件独立关系，而所有三种非碰撞器导致相同的条件独立关系。许多从概率中推断因果结构的算法通过搜索碰撞器来运作（例如，参见 SGS 2000：第 5 章）。

到目前为止讨论的可识别性结果都假定正确的因果图是一个 DAG。然而，潜变量的存在是常见的，甚至更常见的是我们可能希望允许潜变量的可能性（无论它们是否实际存在）。如果我们允许正确的因果图可能包含双头箭头，我们仍然可以应用 MC_d_-分离，并询问哪些图暗示相同的条件独立关系集。马尔可夫等价类将比我们不允许潜变量时更大。例如，鉴于上述最后一组概率关系，图

X→Y←Z

不再是唯一与此分布兼容的结构。结构

X↔Y↔Z

也是可能的，还有其他几种可能。

### 3.6 干预

条件概率，如 P(Y=y∣X=x) 给出了当观察到 _X_ 取值为 _x_ 时，_Y_ 取值为 _y_ 的概率。然而，我们通常对于预测当我们对 _X_ 设置为特定值 _x_ 时，_Y_ 的取值感兴趣。Pearl 将 P(Y=y∣do(X=x)) 用于描述这种概率。观察和干预之间有什么区别？当我们仅观察一个变量的取值时，我们是在了解该变量在正常情况下的因果模型中的取值。关于变量取值的信息也会为我们提供有关其原因以及这些原因的其他影响的信息。然而，当我们进行干预时，我们覆盖了正常的因果结构，强制一个变量取一个值，如果系统被单独留下，它可能不会取到这个值。变量的取值完全由我们的干预决定，其他变量的因果影响完全被覆盖。从图形上看，我们可以通过消除指向被干预变量的箭头来表示这种干预的效果。这种干预有时被描述为“打破”那些箭头。

一个因果模型可以用来预测这种干预的效果。假设我们有一个因果模型，其中概率分布 P 满足对于变量集 V={X1,X2,…,Xn}上的因果 DAG G 的 MC。对于思考干预最有用的 MC 版本是 MCFactorization（见[Section 3.3](https://plato.stanford.edu/entries/causation-probabilistic/#MarkCond)），它告诉我们：

P(X1,X2,…,Xn)=∏iP(Xi∣PA(Xi))

现在假设我们通过将 Xk 的值设置为 xk 来进行干预。后干预概率 P′ 是通过以下方式改变因式分解的结果：

P′(X1,X2,…,Xn)=P′(Xk)×∏i≠kP(Xi∣PA(Xi)),

在这里 P′(Xk=xk)=1。形式为 P(Xi∣PA(Xi)) 的条件概率对于 i≠k 的情况在干预后保持不变。

对干预的处理已在许多方向上进行了扩展。‘操纵定理’（SGS 2000 的定理 3.6）将该公式推广到涵盖更广泛类别的干预，包括那些不会打断所有指向被干预变量的箭头的干预。Pearl（2009 年：第 3 章）发展了一个他称之为‘do-演算’的公理系统，用于计算可应用于具有潜变量的系统的干预后概率。

### 3.7 结论和进一步阅读

因果建模是一个蓬勃发展的研究领域。本条目在很大程度上忽略了关于计算方法的工作，以及这里讨论的工具的应用。相反，重点放在了因果建模最近项目的概念基础上，特别关注因果与概率之间的联系。它还专注于根据概率“原则上”学习有关因果关系的内容，同时忽略了基于有限数据样本进行因果推断的实际问题（这些问题必然偏离真实概率）。

该因果模型条目详细介绍了本节所有内容。本节中调查的最重要作品是 Pearl 2009 和 Spirtes, Glymour, & Scheines 2000。Pearl 2010 是对 Pearl 计划的简要概述，而 Pearl 等人 2016 年的概述则更为详尽。后者尤其假定了相对较少的技术背景。Scheines 1997 和 Glymour & Cooper 1999 的介绍是对 SGS 计划的易懂介绍。Neapolitan 2004 是一本教科书，涵盖了贝叶斯网络在因果和非因果背景下的内容。Neapolitan & Jiang 2016 是这一主题的简要概述。Hausman 1999，Glymour 2009，Hitchcock 2009 和 Eberhardt 2017 是简要概述，涵盖了本节提出的一些主题。有关[因果和可操纵性](https://plato.stanford.edu/entries/causation-mani/)的条目包含了对干预的广泛讨论，以及对因果模型的一些讨论。

## 4. 实际因果

许多哲学家和法理学家对_实际因果关系_感兴趣。这涉及根据事件实际发生的方式来确定事件的因果责任。例如，假设比利和苏茜各自向一个瓶子扔石头，每个人都有一定的命中和打破瓶子的概率。事实上，苏茜的石头击中了瓶子，而比利的没有。根据实际发生的情况，我们会说苏茜的投掷导致了瓶子破裂，而比利的没有。尽管如此，比利的投掷增加了瓶子破裂的概率，并且根据第[2](https://plato.stanford.edu/entries/causation-probabilistic/#ProbRaisTheoCaus)和第[3](https://plato.stanford.edu/entries/causation-probabilistic/#CausMode)节描述的理论，它将被确定为一个原因。比利的投掷有导致瓶子破裂的倾向；它是瓶子破裂的潜在原因；它是通常导致破裂的事物；但它实际上并没有导致瓶子破裂。

许多作者尝试提供实际因果关系的概率分析。一些人，如 Eells（1991 年：第 6 章），Kvart（1997 年，2004 年）和 Glynn（2011 年），特别关注概率随时间变化的方式。一些人，如 Dowe（2004 年）和 Schaffer（2001 年），将概率与因果关系的过程理论资源结合起来。一些人，如 Lewis（1986b），Menzies（1989）和 Noordhof（1999），使用概率和反事实来分析实际因果关系。还有一些人，如 Beckers＆Vennekens（2016 年），Fenton-Glynn（2017 年），Halpern（2016 年：第 2.5 节），Hitchcock（2004a）和 Twardy＆Korb（2011 年），使用类似于第[3](https://plato.stanford.edu/entries/causation-probabilistic/#CausMode)节描述的因果建模工具。我们将在下文的第[4.3](https://plato.stanford.edu/entries/causation-probabilistic/#LewiCounTheo)和第[4.4](https://plato.stanford.edu/entries/causation-probabilistic/#FentGlynCausModeAcco)节更详细地描述其中的两种理论——Lewis（1986b）和 Fenton-Glynn（2017）。

### 4.1 第一次尝试

在[第 2.5 节](https://plato.stanford.edu/entries/causation-probabilistic/#OtheCausRela)中，我们看到 Eells（1991）定义了_C_可能对_E_具有因果关系的多种不同方式。_C_可以是_E_的正因、负因或混合因，这取决于_C_在各种背景条件 Bi 下提高、降低或保持_E_的概率。一个自然的建议是：（i）_E_的实际原因是_E_的一种正因类型；但是（ii）对于评估实际因果关系，只有_实际_发生的背景条件是相关的。将这些想法结合起来，我们得到：

(AC1)

Ct 是 Et′ 的实际原因，只有当：

(i)

t\<t′

(ii)

P(Et'∣Ct\&Ba)>P(Et'∣∼Ct\&Ba) , 其中 Ba 是实际发生的背景条件

正如我们将在下一节中看到的那样，这种类型的分析容易受到两种反例的影响：在某些情况下，原因似乎会降低（或保持不变）其效应的概率；以及在某些情况下，非原因似乎会提高并非其效应的事件的概率。在前一节提到的大多数理论都可以被视为试图改进 AC1 以应对这些类型的反例。

### 4.2 问题案例

实际原因有时会降低其效果的概率，例如_先占_的情况：假设比利和苏茜瞄准一个瓶子扔石头。比利决定让苏茜先扔；他会扔石头，只有在苏茜不扔的情况下。为了数学上的方便，我们假设有一定小概率——比如 0.1——比利不忠实地执行他的计划。比利比苏茜更准确。如果比利扔石头，有 90%的机会打碎瓶子；如果苏茜扔，她成功的概率是 50%。苏茜扔了石头，比利没有扔；苏茜的石头击中了瓶子并打碎了它。通过扔石头，苏茜降低了从 81%（如果苏茜没有扔，比利既扔又击中的概率）到 54.5%（考虑到比利即使苏茜扔了也会扔的小概率）。苏茜的扔石头_先占_了比利的扔石头：她阻止了比利扔石头，并用自己不太可靠的扔代替了比利。尽管如此，苏茜的扔石头实际上导致了瓶子破碎。

稍微改变例子，我们得到一个概率提高但非原因的情况。假设比利和苏茜同时扔石头。事实上，苏茜的石头击中了瓶子，而比利的没有。尽管如此，比利的扔石头增加了瓶子破碎的概率，从 50%（苏茜击中的概率）到 95%（至少其中一个人击中的概率）。但事实上，比利的扔石头并没有导致瓶子破碎。用舍弗（2001）的术语来说，比利的扔石头是一个_fizzler_。它有可能打碎瓶子，但最终失败了，实际上是其他原因导致了瓶子破碎。

### 4.3 路易斯的反事实理论

大卫·路易斯（David Lewis）是反事实因果理论最著名的倡导者。在路易斯的 1973 年著作中，他提出了在确定性假设下的因果反事实理论。路易斯在 1986 年的著作中对这一因果反事实理论进行了概率扩展。

Lewis 定义了一种足够但非必要的_因果依赖_关系。

(CD)

事件_E_仅在事件_C_上因果依赖：%%(i)

_C_和_E_实际上分别发生在 t 和 t′时。

(ii)

在时间_t_，_E_的概率是_x_。

(iii)

如果_C_没有发生，那么在时间_t_时，_E_的概率将小于或等于_y_。

(iv)

x≫y。

(iii)中的反事实应该用可能世界的术语来理解：它表示在最近的可能世界中，_C_不发生，_E_的概率小于或等于_y_。（概率不一定会有一个确定的值。在最接近的可能世界中，它可以取不同的值，只要所有这些值都小于或等于_y_。）根据这一观点，相关的“概率提升”概念不是用条件概率来理解的，而是用不同可能世界中的无条件概率来理解。

Lewis 定义了因果关系（我们所称的“实际因果”）是因果依赖的_祖先_；也就是说：

（Lewis）

_C_ 导致 _E_ 的前提是存在一系列事件 D1, D2, …, Dn，使得 D1 在因果上依赖于 C，D2 在因果上依赖于 D1，…，_E_ 在因果上依赖于 Dn。

这个定义确保了因果关系是传递的：如果 _C_ 导致 _D_，而 _D_ 又导致 _E_，那么 _C_ 就导致 _E_。这种修改对于解决某些类型的抢占很有用。考虑前一节中的例子，Suzy 扔石头，抢占了 Billy。我们可以在 Suzy 扔石头 _C_ 和瓶子破碎 _E_ 之间插入一个事件 _D_。让 _D_ 是 Suzy 的石头在其实际轨迹上的存在，出现在 Billy 已经未能扔石头之后的某个时间点。如果 Suzy 没有扔石头，_D_ 发生的可能性会小得多。如果 _D_ 没有发生，_E_ 发生的可能性也会小得多。由于 _D_ 发生在 Billy 已经拒绝扔石头之后，如果 _D_ 没有发生，就不会有任何石头朝着瓶子飞来。因此，从 _C_ 到 _D_ 再到 _E_ 存在一条因果依赖链。

尽管取得了成功，人们普遍认可（甚至包括刘易斯本人在内）刘易斯的概率论存在着与其他类型的抢先权以及概率提升的非因果关系相关的问题。

### 4.4. 芬顿-格林的因果建模解释

Fenton-Glynn (2017)提供了一项基于 Halpern 和 Pearl（2005）定义的实际因果关系分析，他们仅考虑确定性情况。以下是 Fenton-Glynn 提出的简化版本，作为运用因果模型的分析的一个示例。

设 V 是一组时间索引的二元变量，我们假设包括 V 中变量的任何共同原因（使得 V 上的正确因果图是一个 DAG）。设∗是一个分配函数，将 V 中的每个变量 X 分配给其可能的值之一。直观地说，∗确定每个变量的_实际_值。我们将∗(X)表示为 x∗，x'表示 X 的非实际值。如果 X 是 V 中的一组变量，X = x∗将是一个命题，说明 X 中的每个变量都取∗分配的实际值。设 P 是 V 上代表客观概率的概率函数，我们假设满足马尔可夫和最小条件（见[3.3](https://plato.stanford.edu/entries/causation-probabilistic/#MarkCond)和[3.4](https://plato.stanford.edu/entries/causation-probabilistic/#MiniFaitCond)节）。我们还假设 P 对 V 中变量的每种可能值分配正概率。

鉴于上述[第 3.5 节](https://plato.stanford.edu/entries/causation-probabilistic/#IdenCausStru)中描述的可识别性结果，我们可以从概率函数 P 以及变量的时间索引中恢复正确的因果图 G。我们现在可以使用 P 和 G 来计算干预的效果，如上述[第 3.6 节](https://plato.stanford.edu/entries/causation-probabilistic/#Inte)中所述。我们现在定义实际因果如下：

让 X，Y∈V。X=x∗ 是 Y=y∗ 的一个实际原因，只要存在变量 V∖{X,Y} 的一个划分 {Z,W}，使得对于每个 U⊆Z：P(Y=y∗∣do(X=x∗,W=w∗,U=u∗))>P(Y=y∗∣do(X=x′,W=w∗))

直觉上，情况是这样的：如果 X=x∗ 是 Y=y∗ 的一个实际原因，那么从 X 到 Y 必须至少存在一条有向路径。Z 将由沿着这些路径的一些（但不一定全部）变量组成。（如果 X 是 Y 的直接原因，则 Z 可以为空。）F-G 要求 X=x∗ 提高了 Y=y∗ 的概率，即将 X 设为 x∗ 的干预导致 Y=y∗ 的概率高于将 X 设为 x′ 的干预。具体来说，当我们还干预将变量 W 设为它们的实际值时，X=x∗ 必须提高 Y=y∗ 的概率。W=w∗ 就像是[第 2.4 节](https://plato.stanford.edu/entries/causation-probabilistic/#SimpParaBackCont)中讨论的背景背景一样，只是 W 可能包括一些 X 的后代变量。此外，X=x∗ 必须提高 Y=y∗ 的概率，与 Z 中的任何组合变量被设置为它们的实际值一起。这个想法是，X 对 Y 的概率影响被限制在通过 Z 中的变量流动，而在过程的每个阶段，{X}∪Z 中变量的值必须使 Y=y∗ 的概率高于如果 X 被设为 x′ 时将会产生的基准概率。

让我们看看这个解释如何处理来自[section 4.2](https://plato.stanford.edu/entries/causation-probabilistic/#ProbCase)的问题案例。对于预先条件的例子，我们将使用以下变量：

* ST0=1 如果苏茜投掷，如果不投掷则为 0
* 如果比利扔了，BT1=1，如果没有扔则为 0
* 如果瓶子破碎了，BS2=1，如果没有破碎则为 0

下标表示事件发生的相对时间，较大的数字对应较晚的时间。变量的实际值为 ST0=1，BT1=0，BS2=1。概率为：

P(BT1=1∣ST0=1)=.1 P(BT1=1∣ST0=0)=.9 P(BS2=1∣ST0=1\&BT1=1)=.95 P(BS2=1∣ST0=1\&BT1=0)=.5 P(BS2=1∣ST0=0\&BT1=1)=.9 P(BS2=1∣ST0=0\&BT1=0)=.01

（请注意，我们已经为瓶子破裂添加了一个小概率，这是由于其他原因，即使苏茜和比利都没有扔石头。这确保了对变量的所有值分配的概率都是正的。）相应的图表如图 9 所示。

![一个三节点图，节点 ST0 有箭头指向节点 BS2 和 BT1，节点 BT1 也有一个箭头指向节点 BS2](https://plato.stanford.edu/entries/causation-probabilistic/figure9.svg)

图 9

应用 F-G，我们可以取 W={BT1}， Z=∅。我们有：

P(BS2=1∣do(ST0=1)\&do(BT1=0))=.5P(BS2=1∣do(ST0=0)\&do(BT1=0))=.01

Holding fixed that Billy doesn’t throw, Suzy’s throw raises the probability that the bottle will shatter. Thus the conditions are met for ST=1 to be an actual cause of BS=1.

为了处理从[Section 4.2](https://plato.stanford.edu/entries/causation-probabilistic/#ProbCase)中的失败案例，让

* 如果苏茜投掷，则 ST0=1，否则为 0
* 如果比利扔了，BT0=1，如果没有扔则为 0
* 如果苏茜的石头打中瓶子，SH1=1，如果没有打中则为 0
* 如果比利的石头击中瓶子，则 BH1=1，如果没有击中则为 0
* 如果瓶子破裂，则 BS2=1，如果没有破裂则为 0

实际值为 ST0=1，BT0=1，SH1=1，BH1=0 和 BS2=1。概率为：

P(SH1=1∣ST0=1)=.5 P(SH1=1∣ST0=0)=.01 P(BH1=1∣BT0=1)=.9 P(BH1=1∣BT0=0)=.01 P(BS2=1∣SH1=1\&BH1=1)=.998 P(BS2=1∣SH1=1\&BH1=0)=.95 P(BS2=1∣SH1=0\&BH1=1)=.95 P(BS2=1∣SH1=0\&BH1=0)=.01

与以前一样，我们已经为一些可能性分配了接近但不等于零和一的概率。图表如图 10 所示。

![具有节点 ST0 指向节点 SH1 的五节点图，后者指向节点 BS2，节点 BT0 指向 BH1，后者指向前述节点 BS2](https://plato.stanford.edu/entries/causation-probabilistic/figure10.svg)

图 10

我们想要展示，根据 F-G，BT0=1 并不是 BS2=1 的实际因果。我们将通过两难问题来展示这一点：BH1∈W 还是 BH1∈Z？

假设首先 BH1∈W。然后，无论 ST0 和 SH1 是否在 W 或 Z 中，我们都需要有

P(BS2=1∣do(BT0=1,BH1=0,ST0=1,SH1=1))>P(BS2=1∣do(BT0=0,BH1=0,ST0=1,SH1=1))

但实际上，这两种概率都等于 0.95。如果我们干预将 BH1 设为 0，干预 BT0 对 BS2=1 的概率没有影响。

因此，让我们假设 BH1∈Z。那么我们将需要有

P(BS2=1∣do(BT0=1,BH1=0,ST0=1,SH1=1))>P(BS2=1∣do(BT0=0,ST0=1,SH1=1))

这个不等式略有不同，因为 BH1=0 没有出现在第二个条件概率中。尽管如此，我们仍有

P(BS2=1∣do(BT0=1,BH1=0,ST0=1,SH1=1))=.95

和

P(BS2=1∣do(BT0=0,ST0=1,SH1=1))=.9505

（第二个概率稍微大一点，这是因为即使比利不扔石头，石头击中的概率非常小。）

因此，无论 BH1∈W 还是 BH1∈Z，条件 F-G 都不满足，且 BT0=1 不被判断为 BS2=1 的实际原因。关键观点是，Billy 的投掷提高瓶子破裂的概率是不够的；Billy 的投掷连同之后发生的事情必须提高破裂的概率。事实上发生的是，Billy 的石头没有击中瓶子。Billy 的投掷 _连同_ 他的石头未击中并不会提高破裂的概率。

请注意，对于 fizzle 的处理需要包括石头是否击中瓶子的变量。如果我们尝试仅使用三个变量 BT、ST 和 BS 来建模这种情况，我们将错误地判断 Billy 的投掷是瓶子破裂的原因。这引发了一个问题，即应该使用什么样的“正确”模型，以及我们是否能知道我们的模型中包含了“足够”多的变量。Fenton-Glynn（2017）对这些棘手问题进行了一些讨论。

### 4.5 结论和进一步阅读

虽然本节描述了一些成功案例，但可以肯定地说，对实际因果关系的任何分析都不被普遍认为能完美地捕捉我们关于假设情况的所有先前理论直觉。事实上，并不清楚这些直觉是否构成一个连贯的集合，或者它们是否完全跟踪世界客观特征。Glymour 等人（2010）对试图提供实际因果关系分析的一般项目提出了许多挑战。

《Collins 等人 2004 年》和《Dowe＆Noordhof 2004 年》的选集包含了一些与本节讨论相关主题的论文。Hitchcock 2004b 对 fizzlers 提出的问题进行了广泛讨论。Hitchcock 2015 年是对 Lewis 关于因果的工作的概述。[因果反事实理论](https://plato.stanford.edu/entries/causation-counterfactual/)的条目讨论了 Lewis 的工作，以及因果反事实理论的更一般性内容。

## Bibliography

* Andersen, Holly, 2013, “When to Expect Violations of Causal Faithfulness and Why it Matters”, _Philosophy of Science_, 80(5): 672–683. doi:10.1086/673937
* Beckers, Sander and Joost Vennekens, 2016, “A General Framework for Defining and Extending Actual Causation Using CP-logic”, _International Journal of Approximate Reasoning_, 77: 105–126. doi:10.1016/j.ijar.2016.05.008
* Beebee, Helen, Christopher Hitchcock, and Peter Menzies (eds.), 2009, _The Oxford Handbook of Causation_, Oxford: Oxford University Press.
* Bennett, Jonathan, 1988, _Events and Their Names_, Indianapolis and Cambridge: Hackett.
* Billingsley, Patrick, 1995, _Probability and Measure_, third edition, New York: Wiley.
* Cartwright, Nancy, 1979, “Causal Laws and Effective Strategies”, _Noûs_, 13(4): 419–437. doi:10.2307/2215337
* –––, 1993, “Marks and Probabilities: Two Ways to Find Causal Structure”, in Fritz Stadler (ed.), _Scientific Philosophy: Origins and Development_, Dordrecht: Kluwer, pp. 113–119. doi:10.1007/978-94-017-2964-2\_7
* –––, 2007, _Hunting Causes and Using Them_, Cambridge: Cambridge University Press. doi:10.1017/CBO9780511618758
* Collins, John, Ned Hall, and L.A. Paul (eds.), 2004, _Causation and Counterfactuals_, Cambridge MA: MIT Press.
* Davis, Wayne, 1988, “Probabilistic Theories of Causation”, in James Fetzer (ed.), _Probability and Causality_, Dordrecht: Reidel, pp. 133–160.
* Dowe, Phil, 2004, “Chance-lowering Causes”, in Dowe and Noordhof 2004: 28–38.
* Dowe, Phil and Paul Noordhof (eds.), 2004, _Cause and Chance_, London and New York: Routledge.
* Dupré, John, 1984, “Probabilistic Causality Emancipated”, in Peter French, Theodore Uehling, Jr., and Howard Wettstein (eds), _Midwest Studies in Philosophy IX_, Minneapolis: University of Minnesota Press, pp. 169–175. doi:10.1111/j.1475-4975.1984.tb00058.x
* Eberhardt, Frederick, 2017, “Introduction to the Foundations of Causal Discovery”, _International Journal of Data Science and Analytics_, 3(2): 81–91. doi:10.1007/s41060-016-0038-6
* Eells, Ellery, 1991, _Probabilistic Causality_, Cambridge: Cambridge University Press.
* Ehring, Douglas, 2009, “Causal Relata”, in Beebee, Hitchcock, and Menzies 2009: 387–413.
* Feller, William, 1968, _An Introduction to Probability Theory and its Applications_, New York: Wiley.
* Fenton-Glynn, Luke, 2017, “A Proposed Probabilistic Extension of the Halpern and Pearl Definition of ‘Actual Cause’”, _The British Journal for the Philosophy of Science_, 68(4): 1061–1124. doi:10.1093/bjps/axv056
* Galavotti, Maria Carla, 2005, _Philosophical Introduction to Probability_, Stanford, CA: CSLI Publications.
* Gillies, Donald, 2000, _Philosophical Theories of Probability_, London and New York: Routledge.
* Glymour, Clark, 2009, “Causality and Statistics”, in Beebee, Hitchcock, and Menzies 2009: 498–522.
* Glymour, Clark and Gregory Cooper, 1999, _Computation, Causation, and Discovery_, Cambridge, MA: MIT Press.
* Glymour, Clark, David Danks, Bruce Glymour, Frederick Eberhardt, Joseph Ramsey, Richard Scheines, Peter Spirtes, Choh Man Teng, and Jiji Zhang, 2010, “Actual Causation: a Stone Soup Essay”, _Synthese_, 175(2): 169–192. doi:10.1007/s11229-009-9497-9
* Glynn, Luke, 2011, “A Probabilistic Analysis of Causation”, _British Journal for the Philosophy of Science_, 62(2): 343–392. doi:10.1093/bjps/axq015
* Hájek, Alan and Christopher Hitchcock, 2016a, _The Oxford Handbook of Probability and Philosophy_, Oxford: Oxford University Press.
* –––, 2016b, “Probability for Everyone—Even Philosophers”, in Hájek and Hitchcock 2016a: 5–30.
* Halpern, Joseph Y., 2016, _Actual Causality_, Cambridge, MA: MIT Press.
* Halpern, Joseph Y. and Judea Pearl, 2005, “Causes and Explanations: A Structural-Model Approach. Part I: Causes”, _British Journal for the Philosophy of Science_, 56(4): 843–887. doi:10.1093/bjps/axi147
* Hausman, Daniel M., 1999, “The Mathematical Theory of Causation”, _British Journal for the Philosophy of Science_, 50(1): 151–62. doi:10.1093/bjps/50.1.151
* Hausman, Daniel M. and James Woodward, 1999, “Independence, Invariance, and the Causal Markov Condition”, _British Journal for the Philosophy of Science_, 50(4): 521–583. doi:10.1093/bjps/50.4.521
* –––, 2004, “Modularity and the Causal Markov Condition: a Restatement”, _British Journal for the Philosophy of Science_, 55(1): 147–61. doi:10.1093/bjps/55.1.147
* Hitchcock, Christopher, 2004a, “Routes, Processes, and Chance Lowering Causes”, in Dowe and Noordhof 2004: 138–151.
* –––, 2004b, “Do All and Only Causes Raise the Probabilities of Effects?” in Collins, Hall, and Paul 2004: 403–418.
* –––, 2009, “Causal Models”, in Beebee, Hitchcock, and Menzies 2009: 299–314.
* –––, 2015, “Lewis on Causation”, in B. Loewer and J. Schaffer (eds.), _A Companion to David Lewis_, Hoboken NJ: Wiley-Blackwell, pp. 295–312.
* –––, 2016, “Probabilistic Causation”, in Hájek and Hitchcock 2016a: 815–32.
* Hume, David, 1748, _An Enquiry Concerning Human Understanding_, London.
* Jeffrey, Richard, 1969, “Statistical Explanation vs. Statistical Inference”, in Nicholas Rescher (ed.), _Essays in Honor of Carl G. Hempel_, Reidel: Dordrecht, pp. 104–13.
* Kvart, Igal, 1997, “Cause and Some Positive Causal Impact”, in James Tomberlin (ed.), _Philosophical Perspectives 11: Mind, Causation, and World_, Atascadero, CA: Ridgeview, pp. 401–432.
* –––, 2004, “Causation: Probabilistic and Counterfactual Analyses”, in Collins, Hall, and Paul 2004: 359–387.
* Kyburg, Henry E., Jr., 1965, “Discussion: Salmon’s Paper”, _Philosophy of Science_, 32(2): 147–151. doi:10.1086/288034
* Lewis, David, 1973, “Causation”, _Journal of Philosophy_, 70(17): 556–567. doi:10.2307/2025310
* –––, 1986a, “Events”, in Lewis 1986c: 241–270.
* –––, 1986b, “Postscripts to ‘Causation’”, in Lewis 1986c: 173–213.
* –––, 1986c, _Philosophical Papers, Volume II_, Oxford: Oxford University Press. doi:10.1093/0195036468.003.0006
* Mellor, Hugh, 2004, “For Facts as Causes and Effects”, in Collins, Hall, and Paul 2004: 309–324.
* Menzies, Peter, 1989, “Probabilistic Causation and Causal Processes: A Critique of Lewis”, _Philosophy of Science_, 56(4): 642–663. doi:10.1086/289518
* Neapolitan, Richard, 2004, _Learning Bayesian Networks_, Upper Saddle River, NJ: Prentice Hall.
* Neapolitan, Richard and Xia Jiang, 2016, “The Bayesian Network Story”, in Hájek and Hitchcock 2016a: 183–99.
* Noordhof, Paul, 1999, “Probabilistic Causation, Preemption and Counterfactuals”, _Mind_, 108(429): 95–125. doi:10.1093/mind/108.429.95
* Pearl, Judea, 1988, _Probabilistic Reasoning in Intelligent Systems_, San Francisco: Morgan Kaufman.
* –––, 2009, _Causality: Models, Reasoning, and Inference_, second edition, Cambridge: Cambridge University Press. First edition in 2000. doi:10.1017/CBO9780511803161
* –––, 2010, “An Introduction to Causal Inference”, _The International Journal of Biostatistics_, 6(2): article 7. doi:10.2202/1557-4679.1203
* Pearl, Judea, Madelyn Glymour, and Nicholas P. Jewell, 2016, _Causal Inference in Statistics: A Primer_, Chichester, UK: Wiley.
* Pearl, Judea and Thomas Verma, 1991, “A Theory of Inferred Causation”, _Principles of Knowledge Representation and Reasoning: Proceedings of the 2nd International Conference_, San Mateo, CA: Morgan Kaufman, pp. 441–52.
* Psillos, Stathis, 2009, “Regularity Theories of Causation”, in Beebee, Hitchcock, and Menzies 2009: 131–157.
* Reichenbach, Hans, 1925, “Die Kausalstruktur der Welt und der Unterschied von Vergangenheit und Zukunft”, _Sitzungsberichte der Bayerische Akademie der Wissenschaft_, November: 133–175. English translation “The Causal Structure of the World and the Difference between Past and Future”, in Maria Reichenbach and Robert S. Cohen (eds.), _Hans Reichenbach: Selected Writings, 1909–1953_, Vol. II, Dordrecht and Boston: Reidel, 1978, pp. 81–119.
* –––, 1956, _The Direction of Time_, Berkeley and Los Angeles: University of California Press.
* Salmon, Wesley, 1984, _Scientific Explanation and the Causal Structure of the World_, Princeton: Princeton University Press.
* Schaffer, Jonathan, 2001, “Causes as Probability-Raisers of Processes”, _Journal of Philosophy_, 98(2): 75–92. doi:10.2307/2678483
* Scheines, Richard, 1997, “An Introduction to Causal Inference” in V. McKim and S. Turner (eds.), _Causality in Crisis?_, Notre Dame: University of Notre Dame Press, pp. 185–199.
* Skyrms, Brian, 1980, _Causal Necessity_, New Haven and London: Yale University Press.
* Spirtes, Peter, Clark Glymour, and Richard Scheines \[SGS], 2000, _Causation, Prediction and Search_, second edition, Cambridge, MA: MIT Press. First edition in 1993.
* Suppes, Patrick, 1970, _A Probabilistic Theory of Causality_, Amsterdam: North-Holland Publishing Company.
* Twardy, Charles R. and Kevin B. Korb, 2004, “A Criterion of Probabilistic Causation”, _Philosophy of Science_, 71(3): 241–262. doi:10.1086/421534
* –––, 2011, “Actual Causation by Probabilistic Active Paths”, _Philosophy of Science_, 78(5): 900–913. doi:10.1086/662957
* Williamson, Jon, 2009, “Probabilistic Theories of Causation”, in Beebee, Hitchcock, and Menzies 2009: 185–212.

## Academic Tools

| ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=causation-probabilistic).                                                                      |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/causation-probabilistic/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
| ![inpho icon](../../.gitbook/assets/inpho.png)         | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=causation-probabilistic\&redirect=True) at the Internet Philosophy Ontology Project (InPhO).   |
| ![phil papers icon](../../.gitbook/assets/pp.png)      | [Enhanced bibliography for this entry](http://philpapers.org/sep/causation-probabilistic/) at [PhilPapers](http://philpapers.org/), with links to its database.                            |

## Other Internet Resources

* [Causal Analysis and Theory in Practice](http://causality.cs.ucla.edu/blog/)
* [Causality](http://bayes.cs.ucla.edu/BOOK-2K/), web page on Judea Pearl’s book.
* [The Tetrad Project](http://www.phil.cmu.edu/projects/tetrad/)
* [The Carnegie Mellon Curriculum on Causal and Statistical Reasoning](http://www.phil.cmu.edu/projects/csr/)

## Related Entries

[causal models](https://plato.stanford.edu/entries/causal-models/) | [causation: and manipulability](https://plato.stanford.edu/entries/causation-mani/) | [causation: backward](https://plato.stanford.edu/entries/causation-backwards/) | [causation: counterfactual theories of](https://plato.stanford.edu/entries/causation-counterfactual/) | [causation: the metaphysics of](https://plato.stanford.edu/entries/causation-metaphysics/) | [determinism: causal](https://plato.stanford.edu/entries/determinism-causal/) | [events](https://plato.stanford.edu/entries/events/) | [facts](https://plato.stanford.edu/entries/facts/) | [Hume, David](https://plato.stanford.edu/entries/hume/) | [Kant, Immanuel: and Hume on causality](https://plato.stanford.edu/entries/kant-hume-causality/) | [probability, interpretations of](https://plato.stanford.edu/entries/probability-interpret/) | [properties](https://plato.stanford.edu/entries/properties/) | [quantum mechanics: action at a distance in](https://plato.stanford.edu/entries/qm-action-distance/) | [quantum theory: the Einstein-Podolsky-Rosen argument in](https://plato.stanford.edu/entries/qt-epr/) | [Reichenbach, Hans](https://plato.stanford.edu/entries/reichenbach/) | [Reichenbach, Hans: common cause principle](https://plato.stanford.edu/entries/physics-Rpcc/) | [Salmon, Wesley](https://plato.stanford.edu/entries/wesley-salmon/) | [scientific explanation](https://plato.stanford.edu/entries/scientific-explanation/) | [Simpson’s paradox](https://plato.stanford.edu/entries/paradox-simpson/)

### Acknowledgments

Thanks to Frederick Eberhardt, Luke Fenton-Glynn, Clark Glymour, Judea Pearl, Richard Scheines, Elliott Sober, Jim Woodward and the editors of the Stanford Encyclopedia of Philosophy for detailed comments, corrections, and discussion.

[Copyright © 2018](https://plato.stanford.edu/info.html#c) by\
[Christopher Hitchcock](http://hss.divisions.caltech.edu/people/christopher-r-hitchcock) <[_cricky@caltech.edu_](mailto:cricky%40caltech%2eedu)>
