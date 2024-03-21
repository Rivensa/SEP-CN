# 溯因 abduction (Igor Douven)

_首次发表于 2011 年 3 月 9 日；实质性修订于 2021 年 5 月 18 日_

在哲学文献中，“溯因”一词被用于两个相关但不同的意义上。在这两种意义上，该术语都指某种形式的解释推理。然而，在历史上首次出现的意义上，它指的是解释推理在_生成_假设方面的作用，而在现代文献中最常用的意义上，它指的是解释推理在_证明_假设方面的作用。在后一种意义上，溯因也经常被称为“最佳解释推理”。

本条目仅涉及现代意义上的溯因，尽管还有一个关于历史意义上的溯因的补充，其起源于查尔斯·桑德斯·皮尔斯的工作—参见

> [补充：皮尔斯论溯因](https://plato.stanford.edu/entries/abduction/peirce.html)。

还请参阅[科学发现](https://plato.stanford.edu/entries/scientific-discovery/index.html#DiscAbdu)条目，特别是关于发现作为溯因的部分。

大多数哲学家都同意，溯因（即最佳解释推理）是一种经常被采用的推理类型，在日常生活和科学推理中以某种形式存在。然而，溯因的确切形式以及其规范地位仍然是有争议的问题。本条目将溯因与其他类型的推理进行对比；指出了它在哲学内外的突出应用；考虑了各种更或多或少精确的陈述；讨论了它的规范地位；并强调了溯因与贝叶斯证实理论之间可能的联系。

* [1. 溯因：总体概念](https://plato.stanford.edu/entries/abduction/#AbdGenIde)
  * [1.1 演绎、归纳、溯因](https://plato.stanford.edu/entries/abduction/#DedIndAbd)
  * [1.2 溯因的普遍性](https://plato.stanford.edu/entries/abduction/#UbiAbd)
* [2. 阐释溯因](https://plato.stanford.edu/entries/abduction/#ExpAbd)
* [3. 溯因的地位](https://plato.stanford.edu/entries/abduction/#StaAbd)
  * [3.1 批评](https://plato.stanford.edu/entries/abduction/#Cri)
  * [3.2 辩护](https://plato.stanford.edu/entries/abduction/#Def)
* [4. 溯因与贝叶斯证实理论](https://plato.stanford.edu/entries/abduction/#AbdVerBayConThe)
* [参考文献](https://plato.stanford.edu/entries/abduction/#Bib)
* [学术工具](https://plato.stanford.edu/entries/abduction/#Aca)
* [其他网络资源](https://plato.stanford.edu/entries/abduction/#Oth)
* [相关条目](https://plato.stanford.edu/entries/abduction/#Rel)

## 1. 溯因：概述

你碰巧知道蒂姆和哈里最近发生了一场可怕的争吵，结束了他们的友谊。现在有人告诉你，她刚刚看到蒂姆和哈里一起慢跑。你能想到的最好的解释是他们和解了。你得出他们重新成为朋友的结论。

一天早上，你走进厨房发现桌子上有一盘和一杯，上面有面包屑和一小块黄油，周围有一罐果酱、一包糖和一个空的牛奶盒。你得出结论，你的室友之一在夜里起来吃宵夜，太累了没有清理桌子。这，你认为，最好地解释了你面对的情景。当然，也许是有人闯入了房子，趁机吃了一口，或者是室友把桌子上的东西摆好，但并没有吃宵夜，只是为了让你相信有人吃了宵夜。但是，与你推断出的解释相比，这些假设似乎提供了更为矫揉造作的解释。

沿着海滩散步时，你看到沙滩上看起来像是温斯顿·丘吉尔的画像。可能是，就像希拉里·普特南在他的书《理由、真理和历史》（1981 年）的开头所描述的，你所看到的实际上是沙滩上一只蚂蚁爬行的痕迹。更简单，因此（你认为）更好的解释是有人有意在沙滩上画了一幅丘吉尔的画像。无论如何，这是你离开时的信念。

在这些例子中，结论并不是从前提中逻辑推导出来的。例如，从他们发生了一场可怕的争吵，结束了他们的友谊，并且刚被看到他们一起慢跑的前提，逻辑上并不能推导出蒂姆和哈里重新成为朋友；甚至我们可以假设，从你对蒂姆和哈里的所有信息中也无法得出这个结论。你对蒂姆和哈里的信息没有任何有用的统计数据，这些统计数据可能会支持从你对蒂姆和哈里的信息推导出他们重新成为朋友的结论，甚至可能是概率地（或具有一定的概率）。导致你得出这个结论的，也是根据许多哲学家的看法，是因为如果蒂姆和哈里重新成为朋友，这将_最佳地解释_他们刚刚被看到一起慢跑的事实。（假设一个假设必须为真才能解释任何事情的前提被视为理所当然。）类似的情况也适用于其他两个例子。这里展示的推理类型被称为_溯因_，或者在现今更常见的是*最佳解释推理（*Inference to the Best* _Explanation_）*。

### 1.1 演绎、归纳、溯因

溯因通常被认为是三种主要推理类型之一，另外两种是演绎和归纳。演绎与归纳和溯因之间的区别对应于必要推理和非必要推理之间的区别。在演绎推理中，如果所推导的前提为真，则所推导出的结论_必然_为真；也就是说，前提的真实性_保证_了结论的真实性。一个熟悉的例子是以下推理的模式：

> 所有_A_都是_B_。
>
> _a_是_A_。
>
> 因此，_a_是_B_。

但并非所有的推理都是这种类型的。例如，从“约翰住在切尔西”和“大多数住在切尔西的人都很富有”推导出“约翰很富有”，这里第一句的真实性并非由第二句和第三句的真实性保证（只是使其可能）。换句话说，从前提为真得出结论并非必然发生：在前提为真的情况下，约翰是切尔西非富有居民中的一员是逻辑上可以接受的。类似的情况也适用于基于他们被看到一起慢跑的信息得出结论认为蒂姆和哈里又成为朋友的推理。也许蒂姆和哈里是前商业伙伴，尽管他们可能想避免这种情况，但仍有一些财务事项需要讨论，所以决定将此与他们的日常锻炼结合起来；这与他们决定永远不会和解并不矛盾。

将非必要推理分为归纳和溯因是标准做法。归纳推理形成了一个略微异质的类别，但为了当前的目的，它们可以被描述为基于纯粹的统计数据的推理，例如在给定人口中观察到特定特征发生的频率。这样一个推理的例子是：

> 96%的佛兰芒学院的学生都会说荷兰语和法语。
>
> 路易丝是一名佛兰芒学院的学生。
>
> 因此，路易丝会说荷兰语和法语。

然而，相关的统计信息也可以更模糊地给出，就像前提“大多数住在切尔西的人都很富有”一样。（关于归纳论证的结论是否可以纯粹定性地陈述，或者是否应该是定量的，例如，它以 0.96 的概率成立路易丝会说荷兰语和法语，或者它有时可以以定性的方式陈述，例如，如果真实概率足够高，有时不能。有关这些和其他与归纳相关的问题，请参阅 Kyburg 1990 (第 4 章)。还应该提到的是，Harman (1965)将归纳看作是一种特殊类型的溯因。另请参阅 Weintraub 2013 进行讨论。）

一个推理基于统计数据并不足以将其分类为归纳推理。你可能观察到许多灰色的大象，而没有看到非灰色的大象，并从中推断所有大象都是灰色的，_因为这提供了对你观察到的这么多灰色大象和没有非灰色大象的最佳解释_。这将是一种溯因推理的例子。这表明区分归纳和溯因的最佳方式是：两者都是_扩充性的_，意味着结论超出了前提的（逻辑）内容（这就是它们是非必要推理的原因），但在溯因中隐含或明确地引用了解释性考虑，而在归纳中没有；在归纳中，_只有_对观察频率或统计数据的引用。（我强调“只有”，因为在溯因中也可能会引用频率或统计数据，就像关于大象的例子展示的那样。）

溯因与归纳但与演绎不同的一个显著特点是它违反了_单调性_，意味着可能通过从一组前提的_子集_中进行溯因推理得出某些结论，而无法从整个一组前提中进行溯因推理得出。例如，添加前提蒂姆和哈里是前商业伙伴，他们还有一些财务事项需要讨论，到他们曾经吵了一架，他们刚刚被看到一起慢跑的前提可能不再足以使你推断他们又成为朋友，即使——让我们假设——仅仅最后两个前提就足以支持那个推断。原因在于，在加入了信息后，蒂姆和哈里在原始前提下慢跑的最佳解释的意义可能不再适用，因为已经添加了他们是前商业伙伴且有财务事项需要讨论的信息。

### 1.2 溯因的普遍性

在本条目开头描述的案例中展示的推理类型将大多数人认为是非常熟悉的。哲学家和心理学家都倾向于认为，在日常推理中经常使用溯因。有时，我们对溯因推理的依赖是相当明显和明确的。但在一些日常实践中，它可能是如此常规和自动化，以至于很容易被忽视。一个例子可能是我们对他人的证词的信任，据说这种信任是建立在溯因推理之上的；参见 Harman 1965、Adler 1994、Fricker 1994 和 Lipton 1998，以支持这一观点。例如，根据 Jonathan Adler（1994 年，274 页），“[a] 报告者声称_P_的最佳解释通常是……他有充分负责的理由相信它……他打算我也相信它”，这就是为什么我们通常有理由信任报告者的证词。尽管在开始信任一个人的证词时，一个人通常似乎没有意识到自己的心灵中进行了任何溯因推理，但这可能是正确的。类似的评论也可能适用于一些人认为溯因在语言实践中扮演了进一步、甚至可能更为基础的角色，即确定说话者通过话语所指的意义。具体地说，有人认为解码话语是根据在话语产生的背景中，为什么某人说了他或她说的话的最佳解释。更具体地说，从事语用学领域研究的作者们提出，当话语的语义内容对于谈话目的而言信息不足、或者过于信息化、或者与话题无关、或者不太可信、或者其他方面不寻常或不恰当时，听者会引用格赖斯会话准则来帮助他们确定说话者话语的最佳解释；参见，例如，Bach and Harnish 1979 (92f)、Dascal 1979 (167)和 Hobbs 2004。就像依赖说话者证词的情况一样，必要的溯因推理通常似乎发生在潜意识水平上。

溯因推理并不局限于日常背景。相反，科学哲学家们认为溯因是科学方法论的基石；例如，Boyd 1981, 1984、Harré 1986, 1988、Lipton 1991, 2004 和 Psillos 1999 等学者已经进行了论证。根据 Timothy Williamson (2007)的说法，“[溯因方法论是科学提供的最佳方法]”，甚至 Ernan McMullin (1992)将溯因称为“使科学成为可能的推理”。为了说明溯因在科学中的应用，我们考虑两个例子。

19 世纪初，人们发现了天王星（当时已知的七大行星之一）的轨道偏离了以艾萨克·牛顿的普遍引力理论为基础以及辅助假设没有更多行星存在时预测的轨道。一个可能的解释当然是牛顿的理论是错误的。考虑到其在（那时）两个多世纪以来的巨大实证成功，这似乎不是一个很好的解释。两位天文学家约翰·考奇·亚当斯和乌尔班·勒维里尔却提出（虽然独立于彼此但几乎同时），在太阳系中存在第八个尚未被发现的行星；他们认为，这是对天王星轨道偏移的最佳解释。不久之后，这颗行星，现在被称为“海王星”，被发现了。

第二个例子涉及到如今被普遍认为是由英国物理学家约瑟夫·约翰·汤姆逊发现的电子。汤姆逊进行了关于阴极射线的实验，以确定它们是否是带电粒子的流。他得出结论，它们确实是带电粒子流，推理如下：

> 由于阴极射线携带负电荷，并且在静电力的作用下偏转，就好像它们是带有负电荷的，而且在磁力的作用下的行为方式正好与这种力作用于沿着这些射线路径移动的带负电荷体的方式相同，我看不出有任何逃脱这个结论的办法，即它们是由物质粒子携带的负电荷。 (汤姆逊，引自 Achinstein 2001, 17)

从所报告的实验结果中，无法逻辑推断出阴极射线由带负电荷的粒子组成的结论，汤姆逊也无法利用任何相关的统计数据。然而，他仍然“看不出有任何逃脱这个结论”的原因，我们可以安全地假设，是因为这个结论是他能想到的最好的——在这种情况下可能甚至是唯一合理的——解释他的实验结果。

文献中已经讨论了许多其他科学中使用溯因的例子；例如，Harré 1986, 1988 和 Lipton 1991, 2004。据说溯因也是医学诊断中主要的推理模式：医生倾向于选择最能解释患者症状的假设（参见 Josephson and Josephson (eds.) 1994, 9–12；还可以参见 Dragulinescu 2016 关于医学背景下的溯因推理）。

最后但同样重要的是，溯因在一些重要的哲学辩论中起着核心作用。参见 Shalkowski 2010 关于溯因在形而上学中的地位（还有 Bigelow 2010）、Krzyżanowska、Wenmackers 和 Douven 2014 以及 Douven 2016a 关于条件句语义中溯因可能的作用，以及 Williamson 2017 关于溯因在逻辑哲学中的应用。然而，可以说，溯因在认识论和科学哲学中发挥着最显著的哲学作用，在这些领域中，它经常被用来反驳所谓的“支持不足”的论点。支持不足的论证通常从一个前提开始，即给定的一些假设在经验上是等效的，这些作者认为这意味着证据——实际上，我们可能拥有的任何证据——无法支持其中任何一个而不是其他任何一个。由此，我们应该得出结论，我们永远不能保证相信任何一个特定的假设。（这是粗略的，但对于目前的目的来说足够了；有关支持不足论证的更详细说明，请参见 Douven 2008 和 Stanford 2009。）这种类型论证的一个著名实例是笛卡尔的全球怀疑论证，根据该论证，现实是我们通常认为的那样的假设在经验上等效于各种所谓的怀疑假设（例如，我们受到邪恶恶魔的欺骗，或者我们是连接到超级计算机的罐子里的大脑；参见例如 Folina 2016）。类似的论证已经支持了科学反实在主义，根据这个主义，我们永远无法选择在可观察部分下面的是什么的实验等效对手之间（van Fraassen 1980）。

对这些论点的反应通常指出了游戏中的经验等价概念过度忽视了解释性考虑，例如，通过严格地根据假设的相同预测来定义这个概念。然后，对于这些反应，人们认为，即使一些假设确实做出了完全相同的预测，其中一个假设仍然可能是所预测现象的更好解释。因此，如果解释性考虑在确定我们被授权进行的推理中起作用——正如溯因的辩护者所认为的——那么我们可能仍然有理由相信一系列假设中的一个的真实性（或可能真实性，或诸如此类的，这取决于——如下所见——一个人假设的溯因版本）。许多认识论者在反驳笛卡尔怀疑论时已经援引了溯因，他们的关键论点是，尽管根据构造，怀疑假设与现实是我们通常接受的方式的假设所做的预测相同，但它们并不是同样好的解释这些预测的方式；特别是，人们已经说怀疑假设要比“普通世界”假设复杂得多。请参见 Harman 1973 (Chs. 8 and 11)、Goldman 1988 (205)、Moser 1989 (161)和 Vogel 1990, 2005；请参见 Pargetter 1984，对于特定于怀疑其他心灵的溯因反应。同样，科学哲学家已经论证，我们有理由相信相对于洛伦兹的以太论，特殊相对论更可靠。尽管这些理论做出了相同的预测，但前者在解释上优于后者。（对于这一主张的大多数论证归结为特殊相对论在本体上比其竞争者更简洁，后者假设了以太的存在。请参见 Janssen 2002，其中对科学哲学家为什么更倾向于选择爱因斯坦的理论而不是洛伦兹的理论提出的各种原因有优秀的讨论。）

## 2. 解析溯因

在溯因的文献中，对溯因究竟意味着什么的精确陈述是很罕见的。（皮尔斯提出了一个至少相当精确的陈述；但是，正如本条目的补充部分所解释的那样，它并不能捕捉到现今大多数人对溯因的理解。）其核心思想通常被认为是解释性考虑具有证实论意义，或者解释的成功是真实的（不一定是不容置疑的）标志。然而，显然，这些表述充其量只是口号，很容易看出它们可以以很多表面上合理的方式来解释。在这里，我们将考虑一些可能的阐释，从一种可能称之为“溯因的教科书版本”开始，如后所见，它明显是有缺陷的，然后继续考虑对其的各种可能的完善。这些版本共同之处显然是它们都是推理规则，需要包含解释性考虑的前提，并产生关于假设真实性的某种陈述的结论。区别在于所需的前提，或者我们究竟能够从中推断出什么（或两者兼有）。

在认识论或科学哲学的教科书中，人们经常会遇到如下所示的溯因陈述：

ABD1 鉴于证据 _E_ 和候选解释 _H_​~~1~~,…, _H_​~_n_~~，推断出最好解释 _E_ 的那个 _H_​~~_i_~ 的真实性。关于这个规则，经常会有这样的观察，指出了它的潜在问题，即它预设了候选解释和最佳解释的概念，但这两者都没有一个直接的解释。虽然一些人仍然希望前者可以用纯逻辑或至少是纯形式的术语来详细说明，但人们经常说后者必须要引用所谓的理论美德，比如简洁性、普适性和与良好建立的理论的一致性；然后最佳解释将是在这些美德方面综合表现最好的假设。（例如，Thagard 1978 和 McMullin 1996）。问题在于目前这些美德都没有得到特别深入的理解。（Giere 在 Callebaut (ed.) 1993 (232)中甚至做出了激进的主张，即理论美德缺乏实际内容，在科学中起到的只是修辞的角色。考虑到关于简洁性和一致性的最近形式化工作——例如，关于简洁性的 Forster and Sober 1994、Li and Vitanyi 1997 和 Sober 2015，以及关于一致性的 Bovens and Hartmann 2003 和 Olsson 2005——这一主张的第一部分变得难以维持；此外，Schupbach and Sprenger (2011)直接以概率术语提出了解释性良好的解释。心理学证据对第二部分主张产生了怀疑；例如，Lombrozo 2007 讨论了简洁性在人们对解释性良好的评估中的作用，Koslowski 等人 2008 讨论了与背景知识的一致性在这些评估中的作用。）

此外，许多认为 ABD1 正在朝着正确方向发展的人认为它太过强硬。一些人认为溯因只能保证对最佳解释的_可能_真实性进行推断，而另一些人认为它只能保证对最佳解释的_近似_真实性进行推断，还有一些人认为它只能保证对_可能_的_近似_真实性进行推断。

然而，ABD1 的真正问题不止于此。由于溯因是放大的——如前所解释的——无论溯因如何确切地解释，它都不会是严格逻辑意义上的有效推理规则。然而，它仍然可以是_可靠的_，因为每当前提为真时，它大多数时候都会导致一个真实的结论。在这个意义上，ABD1 可靠的一个明显的必要条件是，当_H_最佳地解释了_E_，而_E_是真实的时，那么_H_也是真实的（或_H_是近似真实的，或可能是真实的，或可能是近似真实的）。但是，这对于 ABD1 来说并不够。因为 ABD1 的前提只是某个假设是最好的解释，_与给定集合中的其他假设相比_。因此，如果这个规则要可靠，那么至少典型地，在我们考虑的假设集合中，最佳解释相对于我们可能构想的任何其他假设也是最好的。换句话说，至少典型地，我们所提出的候选解释中的_绝对_最佳解释应该是我们找到的，否则 ABD1 很可能会让我们相信“坏中的最好”（van Fraassen 1989, 143）。

这个额外要求通常得到了多大程度的满足呢？可能根本没有。相反，我们必须假设我们在考虑数据的可能解释时，在某种程度上有某种特权，以至于我们在这些数据的绝对最佳解释方面有所偏好。毕竟，我们几乎永远不会考虑到，或者甚至不可能考虑到，_所有_潜在的解释。正如 van Fraassen (1989, 144) 所指出的那样，认为我们拥有这种特权是_先验_的相当不合理的。

针对这一点，有人可能会主张，要证明最佳解释通常或大多数情况下是在考虑的假设之中的挑战，并不需要假设某种特权形式（另见 Schupbach 2014 提出的另一种回应，以及 Dellsén 2017 的讨论）。因为在我们设法提出的假设中，我们总是可以生成一组完全穷尽逻辑空间的假设。假设 _H_​~~1~~,…,_H_​~_n_~ 是我们到目前为止能够构想出的候选解释。然后简单地定义 _H_​~~n+1~~ := ¬_H_​~~1~~ ∧ … ∧ ¬_H_​~_n_~~，并将这个新的假设作为我们已有的候选解释之一。显然，集合 {_H_​~~1~,…,_H_​~~n+1~~} 是穷尽的，因为它的元素之一必须为真。遵循这个简单的过程似乎足以确保我们永远不会错过绝对最佳的解释。（参见 Lipton 1993，提出了类似的建议。）

然而，这里有一个问题。因为即使可能有许多假设 _H_​~_j_~ 可以推导出 _H_​~~n+1~~，并且如果它们被提出，可能会被评价为比我们最初提出的候选解释中的最佳解释更好的解释，但是 _H_​~~n+1~~ 本身通常几乎没有信息量；事实上，通常甚至不清楚它的经验后果是什么。例如，假设我们有竞争性的解释包括狭义相对论和洛伦兹的以太理论版本。然后，根据上述建议，我们可以将到我们的候选解释中添加这样一个假设，即这两个理论都不成立。但是这个进一步的假设显然会被排名得相当低——如果它排名的话，这似乎是值得怀疑的，因为它的经验后果完全不清楚。这并不是说这种建议的程序永远行不通。关键是，通常它很少能确保最佳解释位于我们考虑的候选解释之中。

对上述“糟糕一损俱全的论证”的一个更有前途的回应始于观察到这个论证利用了 ABD1 中的一个特殊的不对称性或不协调性。该规则允许基于一个比较性前提得出一个绝对结论，即特定假设相对于其他可用的假设是最佳解释（参见 Kuipers 2000, 171）。这种不协调性即使将“真理”替换为“可能真理”或“近似真理”也无法避免。为了避免这种情况，人们有两个一般的选择。

第一个选择是修改规则，使其要求一个绝对前提。例如，根据 Alan Musgrave（1988 年）或 Peter Lipton（1993 年）的做法，可以要求被推断为真实的假设不仅是可用潜在解释中最佳的，而且还要是_令人满意的_（Musgrave）或_足够好_（Lipton），从而得到以下 ABD1 的变体：

ABD2 给定证据 _E_ 和候选解释 _H_​~~1~~,…, _H_​~_n_~~，推断出_H_​~~_i_~ 是最好的解释，前提是 _H_​~_i_~ 作为解释是令人满意的/足够好。不用说，ABD2 需要补充一个关于解释令人满意或足够好的标准，然而，我们仍然缺乏这样的标准。

其次，可以通过制定一个对称的或协调的诠释来形成一个对称或协调的推理版本，使其根据比较性前提，仅得出一个比较性结论；这个选项也可以以多种方式实现。以下是其中一种方法，是由 Theo Kuipers 的作品中提出并捍卫的（例如，Kuipers 1984, 1992, 2000）。

ABD3 给定证据 _E_ 和候选解释 _H_​~~1~~,…, _H_​~_n_~~，如果 _H_​~~_i_~ 比其他任何假设都更好地解释了 _E_，则推断 _H_​~_i_~ 比其他任何假设更接近真理。显然，ABD3 需要一个关于接近真理的解释，但是今天有许多这样的解释（见，例如，Niiniluoto 1998）。

这里考虑的协调版本的推理的一个显着特征是，它们不依赖于理由者一方面假设的不合理特权，正如我们所看到的 ABD1 隐含地依赖的那样。另一个特点是，如果一个人可以确信，无论他可能错过了多少数据的候选解释，都没有一个等于他已经想到的最好的解释，那么这些协调版本将授权与 ABD1 完全相同的推理（假设如果后者甚至不令人满意或足够好，那么人们就不会确信没有一个潜在的解释与他已经想到的最佳解释一样好）。

如前所述，人们普遍认为经常依赖于归纳推理。人们_确切地_依赖的是上述哪个规则呢？还是可能是他们依赖于一些进一步的规则？或者在某些情况下他们可能依赖于一个版本，在其他情况下依赖于另一个版本（Douven 2017, forthcoming）？哲学论证无法回答这些问题。近年来，实验心理学家开始关注人类在推理中给予解释考虑的作用。例如，Tania Lombrozo 和 Nicholas Gwynne（2014）报告了一些实验，显示我们如何解释给定类别的东西的属性——无论是通过机械方式，通过参考部件和过程，还是通过功能方式，通过参考功能和目的——对我们将这种属性推广到其他类别的东西的可能性有影响（另请参见 Sloman 1994 和 Williams 和 Lombrozo 2010）。Igor Douven 和 Jonah Schupbach（2015a），（2015b）提供了实验证据，表明人们的概率更新往往受到解释方面的影响，从而使它们偏离严格的贝叶斯更新（见下文）。Douven（2016b）表明，在上述实验中，给予解释方面更多重视的参与者往往更准确，这是根据标准评分规则确定的（有关与解释和推理相关的最近实验工作的有用概述，请参见 Lombrozo 2012 和 2016）。Douven 和 Patricia Mirabile（2018）发现了一些证据表明，人们在某些情况下依赖于类似 ABD2 的东西，但就大多数情况而言，有关上述问题的实证研究还是缺乏。

关于我们_应该_依赖于先前提到的哪个规则（如果我们应该依赖于任何形式的归纳），在哲学论证应该能够提供帮助的规范问题上，情况并不好。鉴于糟糕一损俱全的论证，ABD1 看起来并不好。反对归纳的其他论点被声称与规则的确切说明无关；下文将发现这些论点是缺乏的。另一方面，支持归纳的论点——其中一些也将在下文讨论——并没有区分具体的版本。因此，假设人们确实经常依赖于归纳，那么就必须考虑一个开放性问题，即他们依赖于归纳的哪个版本。同样，假设人们依赖于归纳是合理的，那么必须考虑一个开放性问题，即他们应该依赖于哪个版本，或者也许是哪些版本的归纳。

## 3. 归纳的地位

即使我们经常依赖归纳推理，仍然可以问这种做法是否合理。例如，实验研究表明，当人们能够为某种可能事件想出一个解释时，他们往往会高估这种事件实际发生的可能性。（有关一些这类研究的综述，请参阅 Koehler 1991；另请参阅 Brem 和 Rips 2000。）更具说服力的是，Lombrozo（2007 年）表明，在某些情况下，人们倾向于极大地高估较简单的解释与较复杂的解释相比的概率。尽管这些研究并未直接涉及到迄今为止所讨论的任何形式的归纳，但它们仍然表明，在推理中考虑解释因素并不总是有利的。（需要注意的是，Lombrozo 的实验直接涉及到了一些在贝叶斯框架中对归纳进行解释的提议；请参阅第 4 节。）然而，有关归纳的规范地位的最相关的评论迄今主要出现在哲学文献中。本节讨论了针对归纳提出的主要批评，以及对其最有力的辩护论据。

### 3.1 批评

我们已经遇到了所谓的“bad lot”论证，我们发现它对 ABD1 是有效的，但对于各种（我们所说的）相称的归纳规则却无力应对。这里我们考虑两个旨在更普遍的反对意见。第一个甚至声称挑战归纳背后的核心理念；第二个并不那么普遍，但仍旨在削弱归纳候选解释的广泛类别。这两个反对意见均出自 Bas van Fraassen 之手。

第一个反对意见的前提是，“解释”一词的含义之一是，如果一个理论比另一个更具解释性，那么前者必须比后者更具信息量（参见，例如，van Fraassen 1983，第 2 节）。然后所谓的问题是，“更具信息的理论不太可能更可能是真的[因此]试图通过需要信息的特征（如‘归纳到最佳解释’）来描述归纳或证据支持的尝试，必须要么自相矛盾，要么模棱两可”（范弗拉森 1989，192）。这个基本逻辑观点被认为是“在一个理论是另一个理论的延伸的典型情况中最明显……很明显，延伸有更多的错误方式”（van Fraassen 1985，280）。

然而，需要注意的是，在“典型”情况之外的任何其他情况下，这个所谓的基本观点根本就不明显。例如，对于狭义相对论和洛伦兹以太论，完全不清楚前者“有更多的错误方式”的意义，因为它们做出了相同的预测。然而前者通常被认为在解释上优于后者。（如果范弗拉森反对前者实际上比后者更具信息量，或者无论如何在适当意义上都不比后者更具信息量——无论那是什么意思——那么我们应当拒绝接受一个前提，即为了更具解释性，一个理论必须更具信息量。）

van Fraassen 在 1989 年提出的第二个反对意见针对的是概率版本的 abduction。该反对意见是这样的，这种规则要么等同于贝叶斯规则，因此是多余的，要么与之不符，但基于刘易斯的动态大弃赌定理（如 Teller 1973 中所述），则在概率上是不一致的，这意味着它可能导致评估一系列赌注，这些赌注在任何情况下都会导致财务损失；而且，van Fraassen 认为，遵循具有这种特征的规则是不理性的。

然而，这个反对意见也不比第一个更好。首先，正如 Patrick Maher（1992 年）和 Brian Skyrms（1993 年）指出的那样，某种程度上的损失可能会被另一方面的好处所抵消。例如，某些概率版本的 abduction 在我们的世界中可能要比贝叶斯规则表现得更好，至少在平均意义上，它更快地接近真相，因为它更快地将高概率（理解为高于某个阈值的概率）赋予真实假设（有关讨论，请参阅 Douven 2013、2020 年以及 Douven 和 Wenmackers 2017 年；有关讨论，请参见 Climenhaga 2017 年）。如果是这样，那么遵循这个规则而不是贝叶斯规则可能会带来优势，这些优势也许不那么容易用金钱来表达，但在决定要遵循哪个规则时，应该被认为是应该考虑的。简而言之，遵循一个在概率上不一致的规则是否理性并不那么清楚。

其次，Douven（1999 年）认为，概率规则是否一致的问题不能独立于考虑与之一起使用的其他认识论和决策理论规则来解决；一致性应该被理解为对认识论和决策理论规则包的性质的描述，而不是认识论规则（如用于信念变化的概率规则）的独立描述。在同一篇论文中，描述了一个一致的规则包，其中包括概率版本的 abduction。（有关对 van Fraassen 对概率版本 abduction 的批评的不同回应，请参见 Kvanvig 1994、Harman 1997、Leplin 1997、Niiniluoto 1999 和 Okasha 2000 年。）

### 3.2 辩护

如今，几乎没有人会赞同一种将解释力与真理之间建立必要联系的真理观点，例如，因为它规定解释优势对于真理是必要的。因此，先验的关于辩证法的辩护似乎是不可能的。实际上，到目前为止，所有的辩护都是以实证为基础的，因为它们诉诸于据称支持某种形式的推理规则是一种可靠的推理的数据。

这种辩护中最著名的论证是由 Richard Boyd 在 20 世纪 80 年代发展起来的（参见 Boyd，1981 年，1984 年，1985 年）。它首先强调了科学方法论的理论依赖性，这包括设计实验的方法、评估数据的方法、在竞争假设之间进行选择的方法等。例如，在考虑实验设置可能存在的混淆因素时，科学家们在很大程度上依赖于已经被接受的理论。论证接下来引起了这一方法论的表面可靠性，毕竟，这种方法论已经产生了，并且仍然在产生着，令人印象深刻的准确理论。特别是，通过依赖于这种方法论，科学家们长期以来一直能够找到越来越符合仪器需求的理论。接下来，Boyd 通过假设依赖于它的理论至少近似为真的假设来解释科学方法论的可靠性。基于这一点以及这些理论大多是通过辩证法推理得出的事实，他得出结论，辩证法必须是一种可靠的推理规则。

批评者指责这一论证是循环论证的。具体来说，有人说这个论证建立在一个前提上，即科学方法论受到近似真实的背景理论的影响，而这个前提又建立在对其可信度的最佳解释的推理上。而这种推理的可靠性恰恰是问题所在。（见，例如，Laudan 1981 年和Fine 1984 年）。

对此，Stathis Psillos（1999 年，第 4 章）做出了回应，他援引了 Richard Braithwaite 归功于的一个区别，即前提循环和规则循环之间的区别。如果一个论证的结论在其前提中，那么这个论证是前提循环的。相比之下，如果一个论证是规则循环的，那么它是一个论证，其中的结论断言了在同一论证中使用的推理规则的某些东西。正如普西洛斯所主张的，Boyd 的论证是规则循环的，但不是前提循环的，而规则循环的论证，普西洛斯认为，并不一定是恶性循环的（尽管前提循环的论证总是恶性循环的）。更准确地说，在他看来，一个关于给定规则可靠性的论证，它基本上依赖于该规则作为一个推理原则的使用，如果该规则的使用并不保证一个关于该规则可靠性的积极结论，那么这种论证就不是恶性的。普西洛斯声称，在Boyd 的论证中，这个条件得到了满足。因为尽管 Boyd 通过一种推理方法得出结论，即科学方法论依赖的背景理论大致是真实的，但辩证法本身的使用并不保证他的结论的真实性。毕竟，即使承认使用了辩证法，也不能确保科学方法论成功的最佳解释是相关背景理论的近似真实性。因此，Psillos 得出结论，Boyd 的论证仍然成立。

即使在 Boyd 的论证中使用辩证法可能会导致结论认为辩证法是不可靠的，人们仍然可能对论证是否存在规则循环感到担忧。因为假设某些科学界不是依赖于辩证法，而是依赖于一种我们可以称之为“推断到最坏解释”的规则（IWE），这种规则支持推断到可用数据的_最差_解释。我们可以有把握地假设，这种规则的使用通常会导致采纳非常不成功的理论。尽管如此，该社区可能会通过以下推理来证明其使用 IWE 的正当性：“科学理论往往非常不成功。这些理论是通过应用 IWE 得出的。显然，IWE 是一个可靠的推理规则，即一个从真实前提到真实结论的规则。毕竟，通过应用 IWE，我们可以得出 IWE 是一个可靠的推理规则。”尽管这将是一个完全荒谬的结论，但是导致这一结论的论证不能被判定为恶性循环，这一点与 Boyd 论证辩证法可靠性的情况类似。因此，似乎存在与规则循环有关的其他问题。

公平地说，对于 Psillos 而言，规则循环论证并不保证对所讨论的规则得出积极结论，这并不足以使这样的论证有效。另一个必要条件是“人们不应该有理由怀疑该规则的可靠性——没有任何当前可用的东西可以让人对该规则感到不信任”（Psillos，1999 年，85 页）。而对于溯因的可靠性存在足够的理由值得怀疑；事实上，上述论证 _假设_ 它是不可靠的。然而，有两个问题出现了。首先，为什么我们应该接受额外的条件？其次，我们是否真的没有理由怀疑溯因的可靠性？毫无疑问，我们进行的一些溯因推理推断会导致接受 _错误_。在何种基础上我们可以接受多少错误推理才能合理地开始怀疑这一规则？对这些问题并没有明确的答案。

尽管如此，即使规则循环不是恶意的或其他方面有问题，人们仍然可以怀疑 Boyd 的论点如何能够说服溯因的批评者，因为它依赖于溯因。但 Psillos 明确指出，哲学论证的目的并不总是，也不一定要，说服对手接受自己的立场。有时，目的更加谨慎，或者说是向自己保证或使自己确信自己所支持或倾向支持的立场是正确的。在这种情况下，我们不必认为 Boyd 的论证试图说服溯因的对手其可靠性。相反，可以将其视为在已经对溯因持有同情态度的人的视角内对规则进行正当化；参见 Psillos 1999 年（89 页）。

还有一些尝试以更直接的方式为溯因辩护，即通过枚举归纳。这些尝试的共同想法是，每一次新记录的成功的溯因应用——例如，像发现海王星这样的事情，其存在是基于解释性的理由（见第 1.2 节）——都进一步支持了溯因是一种可靠的推理规则的假设，就像每一次新观察到的黑乌鸦都支持了所有乌鸦都是黑色的假设一样。由于它不涉及溯因推理推断，这种类型的论证更有可能吸引那些不相信溯因的人。有关这些方面的建议，请参见 Harré 1986, 1988，Bird 1998 年（160 页），Kitcher 2001 年和 Douven 2002 年。

## 4. 推理与贝叶斯确认理论对比

4. 溯因与贝叶斯确认理论 在过去的十年中，贝叶斯确认理论已经牢固地确立为确认方面的主导观点；目前，如果没有明确表明自己在这个问题上的立场是否偏离了标准的贝叶斯思维，就很难讨论确认理论问题。无论是哪个版本的溯因，都将解释赋予了一个确认理论的角色：解释性考虑有助于使一些假设更可信，而另一些则不那么可信。相比之下，贝叶斯确认理论根本不提及解释的概念。这是否意味着溯因与确认理论中的主流观点存在分歧？最近有几位作者认为，溯因不仅与贝叶斯主义兼容，而且是其迫切需要的补充。迄今为止，对这一观点的最充分的辩护由 Lipton（2004 年，第 7 章）提出；正如他所说，贝叶斯主义者也应该是“解释主义者”（他对溯因的拥护者的称呼）。 （有关其他辩护，请参见 Okasha 2000、McGrew 2003、Weisberg 2009 和 Poston 2014，第 7 章；有关讨论，请参见 Roche 和 Sober 2013、2014，以及 McCain 和 Poston 2014。）

这需要进一步澄清。对于贝叶斯主义者来说，成为解释主义者意味着什么？为了应用贝叶斯规则并确定在学习 E 后 H 的概率，贝叶斯代理人必须确定在 E 条件下 H 的概率。为此，他需要给 H 和 E 分配无条件的概率，以及给定 H 的 E 的概率；前两者大多称为 H 和 E 的“先验概率”（或简称为“先验”），后者称为 H 在 E 上的“似然性”。（这是官方的贝叶斯说法。并非所有赞同贝叶斯主义的人都遵循这个说法。例如，根据某些人的观点，认为条件概率是基础的，我们应该从中得出无条件概率；请参见 Hájek 2003 年及其引用。）贝叶斯如何确定这些值呢？众所周知，概率论在我们有一些概率之后会给出更多的概率；它不会从头开始给我们概率。当然，当 H 意味着 E 或 E 的否定时，或者当 H 是一个在 E 上赋予一定机会的统计假设时，似然性就会“分析地”产生。（这一说法假定了一些版本的 Lewis（1980 年）的主要原则，这个原则是否是分析的还存在争议；因此有引号。）但情况并非总是如此，即使是这样，仍然存在确定先验的问题。这就是 Lipton 所说的溯因介入的地方。在他的建议中，贝叶斯主义者应该根据解释性考虑来确定他们的先验概率和似然性。

解释性考虑如何指导我们选择先验概率？这个问题的答案并不像一开始可能想象的那么简单。假设你正在考虑给一组竞争性假设分配什么样的先验概率，并且你希望遵循 Lipton 的建议。你该如何做呢？一个显而易见但仍有些模糊的答案似乎是：无论你将要分配什么样的确切先验概率，你都应该将一个最能解释可用数据的假设的先验概率分配得比其它任何竞争假设都高（前提是存在一个最佳解释）。不过，你的邻居是一位贝叶斯主义者，但他认为证实与解释无关，他可能会给最佳解释分配一个甚至比你给这个假设的先验概率还要高的值。事实上，他对最佳解释的先验概率甚至可能一贯高于你的，这并不是因为在他看来解释与证实有关系——他认为并不是，而只是因为……嗯，就是因为。在这种情况下，“就是因为”是一个完全合理的理由，因为根据主流贝叶斯认识论的标准，决定先验概率的任何理由都是合理的。根据主流贝叶斯认识论，先验概率（有时是似然性）是可供选择的，这意味着只要两者都是一致的（即它们遵守概率论的公理），两个先验概率分配都是一样好的。Lipton 对贝叶斯主义者提出要成为解释主义者的建议是完全一般性的。但如果他想遵循这个建议，你的邻居应该做出什么不同的事情呢？如果他想遵循这个建议，他是否应该像你这样，他的解释主义邻居一样，给最佳解释分配相同的先验概率，也就是，_降低_他对最佳解释的先验概率？或者他是否应该给最佳解释分配比他已经给出的还要_更高_的先验概率？

也许 Lipton 的建议并不打算针对那些已经出于与解释无关的原因给予最佳解释最高先验概率的人。这个想法可能是，只要一个人确实给予这些假设最高的先验概率，那么一切都好，或者至少比如果一个人不这样做要好，无论他分配这些先验概率的原因是什么。因此，解释性考虑如何指导我们选择先验概率的问题的答案可能是，如果这不是我们已经在做的事情，我们应该给最佳解释分配更高的先验概率。如果已经这样做了，那就继续这样做就好了。

（顺便提一句，根据标准的贝叶斯用法，“先验概率”这个术语不一定指的是一个人在接收_任何_数据之前分配的信念程度。如果已经有数据了，那么显然，可以给那些最能解释当时可用数据的假设分配更高的先验概率。然而，即使在还没有了解任何数据之前，我们也可以合理地谈论“最佳解释”。例如，一个假设可能被认为是比其它任何假设都更好的解释，因为前者需要更简单的数学，或者因为它只是以熟悉的概念陈述，而其他假设则不然。更一般地说，这样的判断可能基于 Kosso（1992 年，30 页）所称的假设或理论的_内部特征_，即“不必观察世界就能评估的特征”。）

对于上述关于解释如何指导我们选择先验概率的问题，Jonathan Weisberg（2009 年）提出了一个更有趣的答案。我们说，主流的贝叶斯主义者认为先验概率的任何分配都是一样好的。然而，所谓的客观贝叶斯主义者并不这样认为。这些贝叶斯主义者认为，先验概率必须遵守除了概率公理以外的原则才能被接受。客观贝叶斯主义者在确定哪些进一步的原则必须遵守方面存在分歧，但至少有一段时间他们认为“无差别原则”是其中之一。粗略地说，这个原则建议，除非有相反的理由，否则我们应该给竞争的假设分配相等的先验概率。然而众所周知，按照原始形式，无差别原则可能导致概率分配的不一致性，因此很难将其宣传为理性原则。问题在于，在给定的问题下，通常有各种合理的逻辑空间划分方式，并且并非所有方式都会导致相同的先验概率分配，即使假设无差别原则。Weisberg 的建议是认为，解释性考虑可能会支持某些划分而不是其他划分。也许我们不会总是得出一个唯一的划分来应用无差别原则，但如果我们最终只有少数几种划分，这已经是进步了。因为我们仍然可以通过两个步骤来有动机地确定我们的先验概率，即首先分别对划分应用无差别原则，从而可能得到不同的先验概率分配，然后取这些得到的先验概率的加权平均值，其中权重也应取决于解释性考虑。结果再次是一个概率函数——根据 Weisberg 的说法，这是唯一正确的先验概率函数。

这个提议虽然有趣，但正如 Weisberg 所承认的那样，目前的形式并不太完善。首先，目前还不清楚解释性考虑究竟如何确定提议的第二步所需的权重。另外，希望考虑解释性因素会让我们得到一组可管理的划分，或者即使这样做了，这并不仅仅是因为我们忽视了很多从表面上看是合理的逻辑空间划分方法，可能是徒劳的。（后者当然反映了坏批的论点。）

关于溯因和贝叶斯推理之间的联系的另一个建议—可以在 Okasha 2000 年，McGrew 2003 年，Lipton 2004 年（第 7 章）和 Dellsén 2018 年的著作中找到—是，解释性考虑可以作为一种启发式方法，用于确定，即使只是粗略地，在我们否则毫无头绪且无法做出更好的猜测的情况下的先验概率和似然性。这个建议对于一个广为人知的事实是敏感的，即我们并不总能给每个感兴趣的假设分配一个先验概率，或者说在给定假设的情况下条件下，不能确定给定证据的可能性。然后，考虑该假设的解释力量可能会帮助我们弄清楚，即使只在某些范围内，给它分配什么先验概率，或者在给定证据的情况下，给它分配什么似然性。

贝叶斯主义者，尤其是较为谨慎的人，可能会反驳说，如果且仅如果（a）先验概率和似然性可以以一定的精度和客观性确定，或者（b）似然性可以以一定的精度确定，并且可以预期先验概率会随着证据的积累而“冲刷掉”，或者（c）先验概率和似然性都可以预期会被冲刷掉时，才应该遵循贝叶斯程序。他们可能会说，在剩下的情况下，我们应该简单地不应用贝叶斯推理。因此，在这些情况下，也就没有必要对贝叶斯主义进行溯因增强了。一些不容置疑的数学结果表明，在属于（a），（b）或（c）的情况下，我们的概率最终会收敛于真实值。因此，在这些情况下，也就不需要上述作者提出的那种溯因启发式方法了。（Weisberg 2009 年，第 3.2 节，提出了类似的担忧。）

Psillos（2000 年）提出了另一种溯因可能会补充贝叶斯确认理论的方式，这种方式非常符合皮尔斯对溯因概念的理解。这个想法是，溯因可能会帮助我们选择可行的候选方案进行测试，而实际的测试则遵循贝叶斯的方法。然而，Psillos（2004 年）承认，这个提案给了溯因一个在致力于解释的人看来太过有限的角色。

最后，文献中迄今为止尚未考虑的一种可能性是，溯因和贝叶斯主义并不像上述提案中那样密切合作，而是以不同的推理模式运作；贝叶斯主义者和解释主义者可以说是在不同的剧本中扮演角色。广泛认可的是，有时我们以范畴的方式言说和思考我们的信念，而在其他时候，我们以分级的方式言说和思考它们。这些不同的言说和思考信念的方式——使用理查德·福利（1992 年）的术语，即信念的认识论和信念程度的认识论——彼此之间的关系尚不清楚。实际上，目前尚不清楚这两者之间是否存在任何直接的联系，甚至是否存在联系。无论怎样，鉴于这个区别是不可否认的，一个合理的建议是，正如有不同的方式来谈论和思考信念一样，有不同的方式来谈论和思考信念的_修正_。特别是，溯因很可能在信念的认识论中有其归属，只有当我们以范畴的方式推理我们的信念时，才会调用它，同时贝叶斯规则可能在信念程度的认识论中有其归属。硬核贝叶斯主义者可能会坚持认为，在范畴的模式中进行的任何推理最终都必须是以贝叶斯的术语为根据的，但这假设了存在将信念的认识论与信念程度的认识论连接起来的桥梁原则——正如前面提到的，目前是否存在这样的原则尚不清楚。

## 参考文献

* Achinstein, P., 2001. _The Book of Evidence_, Oxford: Oxford University Press.
* Adler, J., 1994. “Testimony, Trust, Knowing,” _Journal of Philosophy_, 91: 264–275.
* Bach, K. and Harnish, R., 1979. _Linguistic Communication and Speech Acts_, Cambridge MA: MIT Press.
* Bird, A., 1998. _Philosophy of Science_, London: UCL Press.
* Bigelow, J., 2010. “Quine, Mereology, and Inference to the Best Explanation,” _Logique et Analyse_, 212: 465–482.
* Bovens, L. and Hartmann, S., 2003. “Solving the Riddle of Coherence,” _Mind_, 112: 601–633.
* Boyd, R., 1981. “Scientific Realism and Naturalistic Epistemology,” in P. Asquith and R. Giere (eds.), _PSA 1980_, (vol. II), East Lansing MI: Philosophy of Science Association, pp. 613–662.
* –––, 1984. “The Current Status of Scientific Realism,” in J. Leplin (ed.), _Scientific Realism_, Berkeley CA: University of California Press, pp. 41–82.
* –––, 1985. “Lex Orandi est Lex Credendi,” in P. Churchland and C. Hooker (eds.), _Images of Science_, Chicago IL: University of Chicago Press, pp. 3–34.
* Brem, S. and Rips, L. J., 2000. “Explanation and Evidence in Informal Argument,” _Cognitive Science_, 24: 573–604.
* Callebaut, W. (ed.), 1993. _Taking the Naturalistic Turn_, Chicago IL: University of Chicago Press.
* Campos, D., 2011. “On the Distinction Between Peirce’s Abduction and Lipton’s Inference to the Best Explanation,” _Synthese_, 180: 419–442.
* Climenhaga, N., forthcoming. “Inference to the Best Explanation Made Incoherent,” _Journal of Philosophy_, [preprint available online](http://philsci-archive.pitt.edu/12756/1/IBE%20Made%20Incoherent.pdf).
* Dascal, M., 1979. “Conversational Relevance,” in A. Margalit (ed.), _Meaning and Use_, Dordrecht: Reidel, pp. 153–174.
* Dellsén, F., 2017. “Reactionary Responses to the Bad Lot Objection,” _Studies in History and Philosophy of Science_, 61: 32–40.
* –––, 2018. “The Heuristic Conception of Inference to the Best Explanation,” _Philosophical Studies_, 175: 1745–1766.
* Douven, I., 1999. “Inference to the Best Explanation Made Coherent,” _Philosophy_, _of Science_, 66: S424–S435.
* –––, 2002. “Testing Inference to the Best Explanation,” _Synthese_, 130: 355–377.
* –––, 2008. “Underdetermination,” in S. Psillos and M. Curd (eds.), _The Routledge Companion to the Philosophy of Science_, London: Routledge, pp. 292–301.
* –––, 2013. “Inference to the Best Explanation, Dutch Books, and Inaccuracy Minimisation,” _Philosophical Quarterly_, 63: 428–444.
* –––, 2016a. _The Epistemology of Indicative Conditionals_, Cambridge: Cambridge University Press.
* –––, 2016b. “Explanation, Updating, and Accuracy,” _Journal of Cognitive Psychology_, 28: 1004–1012.
* –––, 2017. “What Is Inference to the Best Explanation? And Why Should We Care?” in T. Poston and K. McCain (eds.), _Best Explanations: New Essays on Inference to the Best Explanation_, Oxford: Oxford University Press, pp. 4–22.
* –––, 2020. “The Ecological Rationality of Explanatory Reasoning,” _Studies in History and Philosophy of Science_, 79: 1–14.
* –––, forthcoming. _The Art of Abduction_, Cambridge MA: MIT Press.
* Douven, I. and Mirabile, P., 2018. “Best, Second-best, and Good-enough Explanations: How They Matter to Reasoning,” _Journal of Experimental Psychology: Language, Memory, and Cognition_, 44: 1792–1813.
* Douven, I. and Schupbach, J., 2015a. “The Role of Explanatory Considerations in Updating,” _Cognition_, 142: 299–311.
* –––, 2015b. “Probabilistic Alternatives to Bayesianism: The Case of Explanationism,” _Frontiers in Psychology_, 6: 459. doi:10.3389/fpsyg.2015.00459
* Douven, I. and Wenmackers, S., 2017. “Inference to the Best Explanation versus Bayes’s Rule in a Social Setting,” _British Journal for the Philosophy of Science_, 68: 535–570.
* Dragulinescu, S., 2016. “Inference to the Best Explanation and Mechanisms in Medicine,” _Theoretical Medicine and Bioethics_, 37(3): 211–232.
* Fann, K. T., 1970. _Peirce’s Theory of Abduction_, The Hague: Martinus Nijhoff.
* Fine, A., 1984. “The Natural Ontological Attitude,” in J. Leplin (ed.), _Scientific Realism_, Berkeley CA: University of California Press, pp. 83–107.
* Foley, R., 1992. “The Epistemology of Belief and the Epistemology of Degrees of Belief,” _American Philosophical Quarterly_, 29: 111–124.
* Folina, J., 2016. “Realism, Skepticism, and the Brain in a Vat,” in S. Goldberg (ed.), _The Brain in a Vat_, Cambridge: Cambridge University Press, pp. 155–173.
* Forster, M. and Sober, E., 1994. “How to Tell when Simpler, More Unified, or Less _Ad Hoc_, Theories will Provide More Accurate Predictions,” _British Journal for the Philosophy of Science_, 45: 1–36.
* Frankfurt, H., 1958. “Peirce’s Notion of Abduction,” _Journal of Philosophy_, 55: 593–596.
* Fricker, E., 1994. “Against Gullibility,” in B. K. Matilal and A. Chakrabarti (eds.), _Knowing from Words_, Dordrecht: Kluwer, pp. 125–161.
* Goldman, A., 1988. _Empirical Knowledge_, Berkeley CA: University of California Press.
* Hájek, A., 2003. “What Conditional Probability Could Not Be,” _Synthese_, 137: 273–323.
* Harman, G., 1965. “The Inference to the Best Explanation,” _Philosophical Review_, 74: 88–95.
* –––, 1973. _Thought_, Princeton NJ: Princeton University Press.
* –––, 1997. “Pragmatism and Reasons for Belief,” in C. Kulp (ed.), _Realism/Antirealism and Epistemology_, Totowa NJ: Rowman and Littlefield, pp. 123–147.
* Harré, R., 1986. _Varieties of Realism_, Oxford: Blackwell.
* –––, 1988. “Realism and Ontology,” _Philosophia Naturalis_, 25: 386–398.
* Hobbs, J. R., 2004. “Abduction in Natural Language Understanding,” in L. Horn and G. Ward (eds.), _The Handbook of Pragmatics_, Oxford: Blackwell, pp. 724–741.
* Janssen, M., 2002. “Reconsidering a Scientific Revolution: The Case of Einstein _versus_, Lorentz,” _Physics in Perspective_, 4: 421–446.
* Josephson, J. R. and Josephson, S. G. (eds.), 1994. _Abductive Inference_, Cambridge: Cambridge University Press.
* Kitcher, P., 2001. “Real Realism: The Galilean Strategy,” _Philosophical Review_, 110: 151–197.
* Koehler, D. J., 1991. “Explanation, Imagination, and Confidence in Judgment,” _Psychological Bulletin_, 110: 499–519.
* Koslowski, B., Marasia, J., Chelenza, M., and Dublin, R., 2008. “Information Becomes Evidence when an Explanation Can Incorporate it into a Causal Framework,” _Cognitive Development_, 23: 472–487.
* Kosso, P., 1992. _Reading the Book of Nature_, Cambridge: Cambridge University Press.
* Krzyżanowska, K, Wenmackers, S., and Douven, I., 2014. “Rethinking Gibbard’s Riverboat Argument,” _Studia Logica_, 102: 771–792.
* Kuipers, T., 1984. “Approaching the Truth with the Rule of Success,” _Philosophia_, _Naturalis_, 21: 244–253.
* –––, 1992. “Naive and Refined Truth Approximation,” _Synthese_, 93: 299–341.
* –––, 2000. _From Instrumentalism to Constructive Realism_, Dordrecht: Kluwer.
* Kvanvig, J., 1994. “A Critique of van Fraassen’s Voluntaristic Epistemology,” _Synthese_, 98: 325–348.
* Kyburg Jr., H., 1990. _Science and Reason_, Oxford: Oxford University Press.
* Laudan, L., 1981. “A Confutation of Convergent Realism,” _Philosophy of Science_, 48: 19–49.
* Lewis, D., 1980. “A Subjectivist’s Guide to Objective Chance,” in R. Jeffrey (ed.), _Studies in Inductive Logic and Probability_, Berkeley CA: University of California Press, pp. 263–293.
* Li, M. and Vitanyi, P., 1997. _An Introduction to Kolmogorov Complexity and its Applications_, New York: Springer.
* Lipton, P., 1991. _Inference to the Best Explanation_, London: Routledge.
* –––, 1993. “Is the Best Good Enough?” _Proceedings of the Aristotelian Society_, 93: 89–104.
* –––, 1998. “The Epistemology of Testimony,” _Studies in History and Philosophy of Science_, 29: 1–31.
* –––, 2004. _Inference to the Best Explanation_, (2nd ed.), London: Routledge.
* Lombrozo, T., 2007. “Simplicity and Probability in Causal Explanation,” _Cognitive Psychology_, 55: 232–257.
* –––, 2012. “Explanation and Abductive Inference,” in K. Holyoak and R. Morrison (eds.), _Oxford Handbook of Thinking and Reasoning_, Oxford: Oxford University Press, pp. 260–276.
* –––, 2016. “Explanatory Preferences Shape Learning and Inference,” _Trends in Cognitive Sciences_, 20: 748–759.
* Lombrozo, T. and Gwynne, N. Z., 2014. “Explanation and Inference: Mechanistic and Functional Explanations Guide Property Generalization,” _Frontiers in Human Neuroscience_, 8. doi:10.3389/fnhum.2014.00700
* Maher, P., 1992. “Diachronic Rationality,” _Philosophy of Science_, 59: 120–141.
* McAuliffe, W., 2015. “How Did Abduction Get Confused with Inference to the Best Explanation?” _Transactions of the Charles S. Peirce Society_, 51: 300–319.
* McCain, K. and Poston, T., 2014. “Why Explanatoriness is Evidentially Relevant,” _Thought_, 3: 145–153.
* McGrew, T., 2003. “Confirmation, Heuristics, and Explanatory Reasoning,” _British Journal for the Philosophy of Science_, 54: 553–567.
* McMullin, E., 1992. _The Inference that Makes Science_, Milwaukee WI: Marquette University Press.
* –––, 1996. “Epistemic Virtue and Theory Appraisal,” in I. Douven and L. Horsten (eds.), _Realism in the Sciences_, Leuven: Leuven University Press, pp. 13–34.
* Moore, G. E., 1962. “Proof of an External World,” in his _Philosophical Papers_, New York: Collier Books, pp. 126–149.
* Moser, P., 1989. _Knowledge and Evidence_, Cambridge: Cambridge University Press.
* Musgrave, A., 1988. “The Ultimate Argument for Scientific Realism,” in R. Nola (ed.), _Relativism and Realism in Science_, Dordrecht: Kluwer, pp. 229–252.
* Niiniluoto, I., 1998. “Verisimilitude: The Third Period,” _British Journal for the Philosophy of Science_, 49: 1–29.
* –––, 1999. “Defending Abduction,” _Philosophy of Science_, 66: S436–S451.
* Okasha, S., 2000. “Van Fraassen’s Critique of Inference to the Best Explanation,” _Studies in History and Philosophy of Science_, 31: 691–710.
* Olsson, E., 2005. _Against Coherence_, Oxford: Oxford University Press.
* Pargetter, R., 1984. “The Scientific Inference to Other Minds,” _Australasian Journal of Philosophy_, 62: 158–163.
* Peirce, C. S. [**CP**]. _Collected Papers of Charles Sanders Peirce_, edited by C. Hartshorne, P. Weiss, and A. Burks, 1931–1958, Cambridge MA: Harvard University Press.
* Poston, T., 2014. _Reason and Explanation_, Basingstoke: Palgrave Macmillan.
* Psillos, S., 1999. _Scientific Realism: How Science Tracks Truth_, London: Routledge.
* –––, 2000. “Abduction: Between Conceptual Richness and Computational Complexity,” in A. K. Kakas and P. Flach (eds.), _Abduction and Induction: Essays on their Relation and Integration_, Dordrecht: Kluwer, pp. 59–74.
* –––, 2004. “Inference to the Best Explanation and Bayesianism,” in F. Stadler (ed.), _Induction and Deduction in the Sciences_, Dordrecht: Kluwer, pp. 83–91.
* Putnam, H., 1981. _Reason, Truth and History_, Cambridge: Cambridge University Press.
* Roche, W. and Sober, E., 2013. “Explanatoriness is Evidentially Irrelevant, or Inference to the Best Explanation Meets Bayesian Confirmation Theory,” _Analysis_, 73: 659–668
* –––, 2014. “Explanatoriness and Evidence: A Reply to McCain and Poston,” _Thought_, 3: 193–199.
* Russell, B., 1912. _The Problems of Philosophy_, Oxford: Oxford University Press.
* Schupbach, J., 2014. “Is the Bad Lot Objection Just Misguided?” _Erkenntnis_, 79: 55–64.
* Schupbach, J. and Sprenger, J., 2011. “The Logic of Explanatory Power,” _Philosophy of Science_, 78: 105–127.
* Schurz, G., 2008. “Patterns of Abduction,” _Synthese_, 164: 201–234.
* Shalkowski, S., 2010. “IBE, GMR, and Metaphysical Projects,” in B. Hale and A. Hoffmann (eds.), _Modality: Metaphysics, Logic, and Epistemology_, Oxford: Oxford University Press, pp. 169–187.
* Skyrms, B., 1993. “A Mistake in Dynamic Coherence Arguments?” _Philosophy of Science_, 60: 320–328.
* Sloman, S., 1994. “When Explanations Compete: The Role of Explanatory Coherence on Judgments of Likelihood,” _Cognition_, 52: 1–21.
* Sober, E., 2015. _Ockham’s Razor: A User’s Manual_, Cambridge: Cambridge University Press.
* Stanford, K., 2009. “Underdetermination of Scientific Theory,” in _Stanford Encyclopedia of Philosophy_ (Winter 2009 Edition), Edward N. Zalta (ed.), URL = <[https://plato.stanford.edu/archives/win2009/entries/scientific-underdetermination/](https://plato.stanford.edu/archives/win2009/entries/scientific-underdetermination/)>.
* Teller, P., 1973. “Conditionalization and Observation,” _Synthese_, 26: 218–258.
* Thagard, P., 1978. “The Best Explanation: Criteria for Theory Choice,” _Journal of Philosophy_, 75: 76–92.
* van Fraassen, B., 1980. _The Scientific Image_, Oxford: Oxford University Press.
* –––, 1983. “Glymour on Evidence and Explanation,” in J. Earman (ed.), _Testing Scientific Theories_, Minneapolis: University of Minnesota Press, pp. 165–176.
* –––, 1985. “Empiricism in the Philosophy of Science,” in P. Churchland and C. Hooker (eds.), _Images of Science_, Chicago IL: University of Chicago Press, pp. 245–308.
* –––, 1989. _Laws and Symmetry_, Oxford: Oxford University Press.
* Vogel, J., 1990. “Cartesian Skepticism and Inference to the Best Explanation,” _Journal of Philosophy_, 87: 658–666.
* –––, 2005. “The Refutation of Skepticism,” in M. Steup and E. Sosa (eds.), _Contemporary Debates in Epistemology_, Oxford: Blackwell Publishing, pp. 72–84.
* Weintraub, R., 2013. “Induction and Inference to the Best Explanation,” _Philosophical Studies_, 166: 203–216.
* Weisberg, J., 2009. “Locating IBE in the Bayesian Framework,” _Synthese_, 167: 125–143.
* Williams, J. and Lombrozo, T., 2010. “The Role of Explanation in Discovery and Generalization: Evidence from Category Learning,” _Cognitive Science_, 34: 776–806.
* Williamson, T., 2017. “Semantic Paradoxes and Abductive Methodology,” in B. Armour-Garb (ed.), _Reflections on the Liar_, Oxford: Oxford University Press, pp. 325–346.

## 学术工具

| ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [如何引用本条目](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=abduction)。                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [预览本条目的 PDF 版本](https://leibniz.stanford.edu/friends/preview/abduction/)，请访问[斯坦福哲学百科全书协会的网站](https://leibniz.stanford.edu/friends/)。 |
| ![inpho icon](https://plato.stanford.edu/symbols/inpho.png)         | [在互联网哲学本体项目（InPhO）中查找与本条目相关的主题和思想家](https://www.inphoproject.org/entity?sep=abduction&redirect=True)。                               |
| ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif)      | [本条目的增强参考书目](https://philpapers.org/sep/abduction/)，可在[PhilPapers](https://philpapers.org/)上查看，并链接到其数据库。                             |

## 其他互联网资源

[请联系作者以提供建议。]

## 相关条目

[认识论：贝叶斯](https://plato.stanford.edu/entries/epistemology-bayesian/) | [归纳：问题](https://plato.stanford.edu/entries/induction-problem/) | [皮尔斯，查尔斯·桑德斯](https://plato.stanford.edu/entries/peirce/) | [科学解释](https://plato.stanford.edu/entries/scientific-explanation/) | [科学实在论](https://plato.stanford.edu/entries/scientific-realism/) | [简单性](https://plato.stanford.edu/entries/simplicity/) | [怀疑论](https://plato.stanford.edu/entries/skepticism/) | [科学理论的不确定性](https://plato.stanford.edu/entries/scientific-underdetermination/)

[版权所有 © 2021](https://plato.stanford.edu/info.html#c) Igor Douven <[_igor.douven@paris-sorbonne.fr_](mailto:igor%2edouven%40paris-sorbonne%2efr)>
