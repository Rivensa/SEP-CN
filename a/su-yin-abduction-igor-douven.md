# 溯因 abduction (Igor Douven)

*首次发表于 2011 年 3 月 9 日星期三；实质性修订于 2021 年 5 月 18 日星期二*

在哲学文献中，“溯因”一词有两个相关但不同的含义。在这两个含义中，该术语指的是某种形式的解释推理。然而，在历史上的第一个意义中，它指的是解释推理在*生成*假设中的位置，而在现代文献中最常见的意义中，它指的是解释推理在*证明*假设中的位置。在后一种意义上，溯因也经常被称为“最佳解释推断”。

本条目专门讨论了现代意义上的溯因，尽管还有一个关于历史意义上的溯因的补充，它起源于查尔斯·桑德斯·皮尔斯的工作——请参见

> [补充：皮尔斯论 溯因](https://plato.stanford.edu/entries/abduction/peirce.html).

另请参阅有关[科学发现](https://plato.stanford.edu/entries/scientific-discovery/index.html#DiscAbdu)的条目，特别是有关发现作为 溯因 的部分。

大多数哲学家都同意，溯因（在推理至最佳解释的意义上）是一种经常被使用的推理类型，无论是在日常生活中还是在科学推理中以某种形式。然而，溯因的确切形式以及规范地位仍然存在争议。本条目将溯因与其他类型的推理进行对比；指出了它在哲学内外的突出用途；考虑了对它的各种或多或少精确的陈述；讨论了它的规范地位；并突出了溯因与贝叶斯证实理论之间可能的联系。

* [1. 溯因：总体思想](https://plato.stanford.edu/entries/abduction/#AbdGenIde)
* [1.1 演绎、归纳、溯因](https://plato.stanford.edu/entries/abduction/#DedIndAbd)
* [1.2 溯因的普遍性](https://plato.stanford.edu/entries/abduction/#UbiAbd)
* [2. 溯因阐释](https://plato.stanford.edu/entries/abduction/#ExpAbd)
* [3. 溯因的地位](https://plato.stanford.edu/entries/abduction/#StaAbd)

* [3.1 Criticisms](https://plato.stanford.edu/entries/abduction/#Cri)

* [3.2 Defenses](https://plato.stanford.edu/entries/abduction/#Def)

* [4. 溯因 versus 贝叶斯证实理论](https://plato.stanford.edu/entries/abduction/#AbdVerBayConThe)
* [参考文献](https://plato.stanford.edu/entries/abduction/#Bib)
* [学术工具](https://plato.stanford.edu/entries/abduction/#Aca)
* [其他互联网资源](https://plato.stanford.edu/entries/abduction/#Oth)
* [相关条目](https://plato.stanford.edu/entries/abduction/#Rel)

---

## 1. 溯因：概念

你碰巧知道蒂姆和哈里最近发生了一场可怕的争吵，结束了他们的友谊。现在有人告诉你，她刚看到蒂姆和哈里一起慢跑。你能想到的最好解释是他们和好了。你得出结论他们再次成为朋友。

一天早晨，你走进厨房发现桌子上有一个盘子和一个杯子，上面有面包屑和一小块黄油，周围是一罐果酱、一包糖和一个空的牛奶盒。你得出结论，你的室友之一在夜里起来做宵夜，太累了没清理桌子。你认为，这是最好解释你面对的场景。当然，也可能是有人闯入房子，趁机吃了口东西，或者是室友把东西摆在桌子上，并没有吃宵夜，只是让你相信有人吃了宵夜。但是，你觉得这些假设提供的解释比你推断出的那个更为牵强。

沿着海滩走，你看到沙滩上看起来像温斯顿·丘吉尔的照片。可能是，正如希拉里·普特南（Hilary Putnam）1981 年的书《理由、真相和历史》开头所描述的，你看到的实际上是一只蚂蚁在沙滩上爬行的痕迹。更简单，因此（你认为）更好的解释是有人有意在沙滩上画了一幅丘吉尔的图片。无论如何，这就是你得出的结论。

在这些例子中，结论并不从前提中逻辑地得出。例如，从他们发生了一场可怕的争吵结束了他们的友谊，他们刚刚被看到一起慢跑这两个前提并不能逻辑地得出蒂姆和哈里重新成为朋友的结论；我们可以假设，即使从你对蒂姆和哈里的所有信息中也不能得出这个结论。关于友谊、可怕的争吵和慢跑者的任何有用的统计数据都不能证明从你对蒂姆和哈里的信息得出他们重新成为朋友的推断，甚至不能证明他们很可能重新成为朋友。导致你得出这个结论的是什么，根据许多哲学家的看法，也可能证明这个结论的是蒂姆和哈里重新成为朋友，如果是真的，将最好地解释他们刚刚被看到一起慢跑这一事实。（假设一个假设要解释任何事情，它必须是真实的这一前提从这里开始被视为已知。）类似的评论也适用于另外两个例子。这里展示的推理类型被称为溯因，或者现在更常见的是最佳解释推理。

### 1.1 演绎、归纳、溯因

溯因通常被认为是三种主要推理类型之一，另外两种是演绎和归纳。演绎与归纳、溯因之间的区别对应于必要和非必要推理之间的区别。在演绎推理中，如果推断的前提为真，则推断的内容是*必然*为真的；也就是说，前提的真实性*保证*了结论的真实性。一个熟悉的例子是实例化模式的推理。

> 所有**A**都是**B**。

> *a* 是一个**A**。

> 因此，*a* 是 *B*。

但并非所有的推理都是这种类型。例如，考虑从“John 住在切尔西”和“大多数住在切尔西的人都很富有”推导出“John 很富有”这一推理。在这种情况下，第一句的真实性并不是由第二和第三句的联合真实性所保证（而只是变得可能）。换句话说，前提为真并不一定意味着结论也为真：在前提为真的情况下，John 是切尔西非富有居民中的一员是与事实相容的。关于你根据他们被看到一起慢跑的信息推断出 Tim 和 Harry 再次成为朋友的结论也是类似的。也许 Tim 和 Harry 是前商业伙伴，他们仍有一些财务事项需要讨论，无论他们多么希望避免这种情况，并决定将这与他们的日常锻炼结合起来；这与他们坚决决定永不和解是相容的。

这是将非必要的推论分为归纳和 溯因 推论的标准做法。归纳推论形成了一个有些异质的类别，但就目前的目的而言，它们可以被描述为仅基于统计数据的推论，比如在给定人口中观察到某一特征发生的频率。这样一个推论的例子是这样的：

> 96%的佛兰芒大学生会说荷兰语和法语。

> Louise 是一名佛兰芒大学生。

> 因此，Louise 会说荷兰语和法语。

然而，相关的统计信息可能会更加模糊地给出，就像前提中所说的，“住在切尔西的大多数人都很富有。”（关于归纳论证的结论是否可以纯粹定性地陈述，或者是否应该是定量的一个问题有很多讨论——例如，它以 0.96 的概率成立，路易丝会说荷兰语和法语——或者它有时可以用定性的方式陈述——例如，如果其真实性的概率足够高——有时则不行。关于这些和其他归纳相关问题，请参阅 Kyburg 1990（第 4 章）。还应该提到，Harman（1965）将归纳看作是一种特殊类型的溯因。另请参阅 Weintraub 2013 进行讨论。）

仅仅基于统计数据的推断并不足以将其归类为归纳推理。你可能观察到许多灰色大象而没有看到非灰色的，从而推断所有大象都是灰色的，因为这样可以最好地解释为什么你观察到这么多灰色大象而没有看到非灰色的。这将是一种溯因推理的实例。它表明区分归纳和溯因的最佳方法是：两者都是扩张性的，意味着结论超出了前提中（逻辑上）包含的内容（这就是它们为什么是非必要推理），但在溯因中存在对解释考虑的隐含或明示呼应，而在归纳中则没有；在归纳中，仅仅是对观察频率或统计数据的呼应。（我强调“仅仅”，因为在溯因中也可能存在对频率或统计数据的呼应，就像关于大象的例子展示的那样。）

一个值得注意的 溯因 的特点是，它与 归纳 相同但与 演绎 不同的是，它违反了*单调性*，这意味着可能会从前提集合*S*的一个*子集*中 溯因 推断出某些结论，而这些结论不能从整个*S*中 溯因 推断出来。例如，假设将 Tim 和 Harry 是前商业伙伴，他们仍然有一些财务事项要讨论这一前提添加到了一段时间前他们发生了严重争执并且他们刚刚被看到一起慢跑的前提中，即使——让我们假设——最后两个前提单独确实支持这一推断，也不再能推断出他们再次成为朋友。原因在于，在添加了他们是前商业伙伴并有财务事项要讨论的信息后，根据原始前提，Tim 和 Harry 一起慢跑的最佳解释可能不再适用。

### 1.2 溯因的普遍性

这篇文章开头描述的案例所展示的推理类型，大多数人会觉得非常熟悉。哲学家和心理学家一般都同意，溯因经常被用于日常推理。有时，我们对溯因推理的依赖是相当明显和明确的。但在一些日常实践中，它可能如此常规和自动，以至于很容易被忽视。一个例子可能是我们对他人证词的信任，据说是建立在溯因推理的基础上的；参见哈曼 1965 年，阿德勒 1994 年，弗里克 1994 年和利普顿 1998 年对这一主张的辩护。例如，根据乔纳森·阿德勒（1994 年，274 页），“[t] 通常，信息提供者声称 *P* 的最佳解释是…他出于应负责任的理由相信这一点，…他打算我也相信这一点”，这就是为什么我们通常有理由相信信息提供者的证词。即使如此，在开始信任一个人的证词时，人们似乎并没有意识到自己的头脑中正在进行任何溯因推理。类似的评论可能适用于一些人认为溯因在语言实践中发挥了进一步、甚至更为基础的作用，即在确定说话者通过话语表达的含义时的作用。具体而言，有人认为解码话语是推断为什么某人在话语产生的语境中说了什么的最佳解释。更具体地说，从事语用学领域研究的作者们提出，当话语的语义内容对于对话目的来说信息不足，或者信息过多，或者离题，或者不切实际，或者其他奇怪或不合适时，听话者会援引格赖斯对话准则来帮助他们找出说话者话语的最佳解释；例如，巴赫和哈尼什 1979 年（92 页），达斯卡尔 1979 年（167 页）和霍布斯 2004 年。 就像依赖说话者证词的情况一样，必要的溯因推理通常似乎会在潜意识层面上发生。

溯因推理并不局限于日常情境。相反地：科学哲学家们认为，溯因是科学方法论的基石；例如，参见 Boyd 1981, 1984, Harré 1986, 1988, Lipton 1991, 2004 和 Psillos 1999。根据 Timothy Williamson (2007) 的说法，“溯因方法论是科学提供的最佳方法”，甚至 Ernan McMullin (1992) 将溯因称为“构成科学的推理”。为了说明溯因在科学中的运用，我们考虑两个例子。

在十九世纪初，人们发现了天王星的轨道与根据艾萨克·牛顿的普遍引力理论和辅助假设（即太阳系中没有其他行星）预测的轨道有所偏离。一个可能的解释当然是牛顿的理论是错误的。鉴于其在（那时）两个多世纪以来取得的巨大经验成功，这似乎不是一个很好的解释。两位天文学家约翰·考奇·亚当斯和乌尔班·勒维里耶尔，独立提出了一个不同的建议，他们认为太阳系中有第八颗尚未被发现的行星；他们认为，这提供了对天王星轨道偏离的最佳解释。不久之后，这颗行星被发现，现在被称为“海王星”。

第二个例子涉及英国物理学家约瑟夫·约翰·汤姆逊所谓的发现电子。汤姆逊进行了有关阴极射线的实验，以确定它们是否是带电粒子流。他得出结论，认为它们确实是，推理如下：

> 由于阴极射线携带负电荷，受静电力偏转，就好像它们被负电荷电气化一样，并且受到磁力的作用，就像这种力会作用在沿着这些射线路径移动的带负电荷的物体上一样，我认为无法逃脱这样的结论：它们是由物质粒子携带的负电荷。 (汤姆逊, 引自阿钦斯坦 2001, 17)

从报道的实验结果中逻辑上并不能得出阴极射线由带负电荷的粒子组成的结论，汤姆逊也无法依靠任何相关的统计数据。然而，他仍然“无法逃脱这个结论”，我们可以安全地假设，这是因为这个结论是他能想到的最好的解释，甚至在这种情况下可能是唯一合理的解释。

许多其他科学中使用 溯因 的例子已经在文献中讨论过；例如，参见 Harré 1986, 1988 和 Lipton 1991, 2004。据说 溯因 也是医学诊断中占主导地位的推理方式：医生倾向于选择最能解释患者症状的假设（参见 Josephson 和 Josephson（编）1994, 9–12；另请参阅 Dragulinescu 2016 关于医学背景下 溯因 推理的内容）。

最后但并非最不重要的是， 溯因 在一些重要的哲学辩论中扮演着核心角色。请参阅 Shalkowski 2010 年关于 溯因 在形而上学中的地位（还有 Bigelow 2010 年）、Krzyżanowska、Wenmackers 和 Douven 2014 年以及 Douven 2016a 年关于条件句语义中 溯因 可能发挥的作用，以及 Williamson 2017 年关于在逻辑哲学中应用 溯因 的论述。然而，可以说， 溯因 在认识论和科学哲学中发挥着最显著的哲学作用，在这些领域中，人们经常援引它来反驳所谓的溯因论证。 溯因 论证通常从一个前提开始，即一些给定的假设在经验上是等效的，这些作者认为这意味着证据——实际上，我们可能获得的任何证据——无法支持其中任何一个而不是其他人。由此，我们应该得出结论，即一个人永远不能有理由相信任何一个特定的假设。（这只是一个概括，但对目前的目的足够了；有关溯因论证的更详细说明，请参阅 Douven 2008 年和 Stanford 2009 年。）这种类型论证的一个著名例子是笛卡尔全局怀疑的论证，根据这一论证，关于现实更多或更少符合我们通常认为的方式的假设在经验上等效于各种所谓的怀疑性假设（例如，我们被邪恶的恶魔欺骗，或者我们是连接到超级计算机的大脑；请参见 Folina 2016 年）。类似的论证也支持科学反实在主义，根据这一理论，我们永远不会有理由在关于构成现实可观部分的等效竞争对手之间做出选择（van Fraassen 1980 年）。

回应这些论点通常指出，所涉及的经验等价概念不当地忽视了解释考虑因素，例如，严格地以假设做出相同预测来定义这一概念。然后做出回应的人则认为，即使有些假设确实做出完全相同的预测，其中的一个仍然可能是对所预测现象更好的解释。因此，如果解释考虑因素在决定我们被授权做出哪些推断时起到作用——正如溯因的辩护者所认为的那样——那么我们仍然有理由相信一系列假设中的一个的真实性（或可能的真实性，或类似的，取决于所假定的溯因版本，如下文所见）。许多认识论者在与笛卡尔怀疑论辩论时引用了伯特兰·罗素（1912 年，第 2 章）的溯因，他们的关键主张是，尽管怀疑性假设与现实更多或更少与我们通常理解的方式相符的假设做出相同的预测，但它们并非同样好的解释所预测的内容；特别是，据说怀疑性假设要比“普通世界”假设复杂得多。请参阅哈曼 1973 年（第 8 章和第 11 章）、戈德曼 1988 年（205 页）、莫泽 1989 年（161 页）和沃格尔 1990 年、2005 年；请参阅帕杰特 1984 年，针对其他心灵怀疑提出了一种溯因回应。同样，科学哲学家们认为，我们有理由相信相对于洛伦兹的以太理论，特殊相对论更为合理。尽管这些理论做出相同的预测，但前者在解释上优于后者。（对于这一主张提出的大多数论据归结为特殊相对论在本体上比其竞争对手更为简约，后者假定了以太的存在。 参见 Janssen 2002，对科学哲学家们提出的偏爱爱因斯坦理论胜过洛伦兹理论的各种理由进行了精彩讨论。)

## 2. 阐释 溯因

有关溯因的文献中很少对溯因的确切表述。 （皮尔斯确实提出了至少相当精确的表述；但正如本词条的补充部分所解释的那样，它并没有捕捉到大多数人现在理解的溯因。）人们经常说它的核心思想是解释性考虑具有证实论意义，或者解释的成功是真理的（不一定是不可失败的）标志。然而，显然，这些表述充其量只是口号，很容易看出它们可以用各种看似合理的方式来兑现。在这里，我们将考虑许多这样可能的阐释，从可能称为“溯因教科书版本”的开始，正如将要看到的那样，这显然是有缺陷的，然后继续考虑对其进行各种可能的完善。这些版本共同之处在于它们都是推理规则，需要包含解释性考虑的前提，并产生一个关于假设真实性的陈述的结论。差异在于所需的前提条件，或者我们究竟被允许从中推断出什么（或两者兼有）。

在认识论或科学哲学的教科书中，人们经常会遇到类似以下的溯因公式：

ABD1

鉴于证据 *E* 和候选解释 *H*1,…, *H**n* 关于 *E*，推断 *那个* 最能解释 *E* 的 *H**i* 的真实性。

一个经常被提到的关于这个规则的观察，指出了它可能存在的问题，即它预设了候选解释和最佳解释的概念，但两者都没有直接的解释。虽然有些人仍然希望前者可以用纯逻辑的，或者至少是纯形式的术语来阐明，但人们经常说后者必须诉诸于所谓的理论优点，比如简单性、普适性和与已被充分验证的理论的一致性；然后，最佳解释将是在这些优点方面表现最佳的假设。 （例如，参见 Thagard 1978 和 McMullin 1996。）问题在于目前没有一个所说的优点被特别深入理解。（Giere 在 Callebaut（编）1993（232）中甚至提出了一个激进的观点，即理论优点缺乏实质内容，在科学中仅起修辞作用。鉴于最近对简单性和一致性的形式化工作——例如，对于简单性和 Bovens 和 Hartmann 2003 以及 Olsson 2005 对一致性的工作，对于简单性和一致性的工作，这一说法的第一部分变得难以维持；此外，Schupbach 和 Sprenger（2011）直接用概率术语提出了关于解释优劣的解释。心理证据对这一说法的第二部分提出了质疑；例如，参见 Lombrozo 2007，关于简单性在人们对解释优劣的评估中的作用，以及 Koslowski 等人。2008 年，关于与背景知识的一致性在这些评估中的作用。）

此外，许多认为溯因沿着正确方向发展的人认为它太过强硬。有些人认为溯因只支持对最佳解释的*可能*真实性的推断，有些人认为它只支持对最佳解释的*近似*真实性的推断，还有一些人认为它只支持对最佳解释的*可能* *近似*真实性的推断。

真正的问题 ABD1 比这更深。然而，由于溯因是扩张性的——正如前面解释的那样——无论溯因被解释得多么准确，在严格逻辑意义上它都不会是一个合理的推理规则。然而，只要前提为真，溯因仍然可能是*可靠*的，因为它在大多数情况下会导致一个真实的结论。ABD1 要成为在这个意义上可靠的一个明显的必要条件是，当*H*最好地解释*E*，且*E*为真时，*H*也为真（或*H*大致为真，或可能为真，或可能大致为真）。但这对于 ABD1 来说还不够。因为 ABD1 的前提只是某个假设是最好的解释，*相对于给定集合中的其他假设*。因此，如果这个规则要可靠，至少通常情况下，相对于我们考虑的假设集合，最好的解释也应该是最好的，与我们可能构想的任何其他假设相比（但由于缺乏时间或才智，或出于其他原因，没有构想出来）。换句话说，至少通常情况下，证据的*绝对*最佳解释应该在我们提出的候选解释中找到，否则 ABD1 很可能会让我们相信“众多不良中的佼佼者”（van Fraassen 1989, 143）。

假设这种额外要求通常得到满足是多么合理？很可能根本不合理。要相信相反的观点，我们必须假设我们在考虑数据的可能解释时，在某种程度上有某种特权，使我们在其中某种程度上能够找到这些数据的绝对最佳解释。毕竟，我们几乎不会考虑，甚至可能不可能考虑*所有*潜在的解释。正如 van Fraassen（1989, 144）所指出的，认为我们具有这种特权是*先验*相当不可信的。

对此，有人可能会主张，证明最佳解释始终或大多数情况下都是考虑的假设之一的挑战可以在无需假定某种特权的情况下得以满足（有关不同回应，请参阅 Schupbach 2014，有关讨论，请参阅 Dellsén 2017）。鉴于我们已经设想出的假设，我们总是可以生成一组共同穷尽逻辑空间的假设。假设*H*1,…,*H**n*是我们迄今为止能够构想出的候选解释。然后简单地定义*H*n+1 := ¬*H*1 ∧ … ∧ ¬*H**n*，并将这个新假设作为我们已有的候选解释之外的另一个候选解释。显然，集合{*H*1,…,*H*n+1}是穷尽的，因为其中的一个元素必须为真。遵循这个简单过程似乎足以确保我们永远不会错过绝对最佳的解释。（有关此类提议，请参阅 Lipton 1993。）

然而，有一个问题。即使可能存在许多假设*H**j*暗示*H*n+1，并且如果它们被提出，可能会被评估为比我们最初考虑的候选解释中最佳解释更好的解释，*H*n+1 本身通常几乎没有信息量；事实上，通常甚至不清楚它的经验后果是什么。例如，假设我们有作为竞争解释的狭义相对论和洛伦兹的以太理论。然后，根据上述提议，我们可以将这两个理论都不正确的假设添加到我们的候选解释中。但是这个进一步的假设肯定会被低估作为解释——如果它被评估的话，这似乎是值得怀疑的，因为它的经验后果完全不清楚。这并不是说建议的程序永远不起作用。关键在于通常情况下，它很少能确保最佳解释在我们考虑的候选解释之中。

一个更有前途的对上述“坏命题论证”的回应始于观察到这个论证利用了溯因中的一种特殊不对称或不一致性。该规则允许根据一个比较前提——即特定假设相对于其他可用假设是证据的最佳解释——得出一个绝对结论，即某个假设是真实的（参见 Kuipers 2000, 171）。通过用“可能真实”或“近似真实”替换“真实”来避免这种不一致性是不可避免的。为了避免这种情况，有两个一般选项。

第一个选项是修改规则，使其需要一个绝对前提。例如，根据 Alan Musgrave（1988）或 Peter Lipton（1993）的观点，可以要求被推断为真实的假设不仅是可用潜在解释中最佳的，而且还要是“令人满意”（Musgrave）或“足够好”（Lipton），从而产生以下 ABD1 的变体：

ABD2

鉴于证据 *E* 和候选解释 *H*1,…, *H**n* 对 *E* 的解释，推断出最能解释 *E* 的真相 *H**i*，前提是 *H**i* 作为解释是令人满意/足够好的。

不用说， 溯因 ABD2 需要补充一个解释令人满意或足够好的标准，然而，我们仍然缺乏这一标准。

其次，人们可以通过使其仅在给定比较前提的情况下支持比较结论来制定溯因的对称或一致版本；这个选择也可以以多种方式实现。以下是一种方法，已在 Theo Kuipers 的作品中提出和捍卫（例如，Kuipers 1984 年，1992 年，2000 年）。

ABD3

鉴于证据 *E* 和候选解释 *H*1,…, *H**n*，如果 *H**i* 比其他任何假设更好地解释了 *E*，则推断 *H**i* 比其他任何假设更接近真相。

显然，溯因需要对接近真相的解释，但如今提供了许多这样的解释（参见，例如，Niiniluoto 1998）。

在这里考虑的溯因的一种值得注意的特征是，它们不依赖于推理者在某种不合理的特权假设上，而我们看到，ABD1 隐含地依赖于这一点。另一个特征是，如果一个人可以确定，无论数据的候选解释有多少个被忽略了，都没有一个等同于那些人所想到的最好的解释，那么这些一致的版本就会像 ABD1 一样授权完全相同的推理（假设如果后者甚至不令人满意或足够好，那么一个人将不会确定没有潜在的解释与人所想到的最佳解释一样好）。

如前所述，人们普遍认为人们经常依赖溯因推理。人们究竟依赖于上述哪条规则*确切地*？或者可能是他们依赖于一些进一步的规则？或者在某些情境下，他们可能依赖于一个版本，在其他情境下依赖于另一个版本（Douven 2017，即将发表）？哲学论证无法回答这些问题。近年来，实验心理学家开始关注人类在推理中赋予解释考虑的作用。例如，Tania Lombrozo 和 Nicholas Gwynne（2014）报告了一些实验，显示我们如何解释某一类事物的属性——无论是通过机械方式，参考部件和过程，还是功能性地，参考功能和目的——对我们将该属性推广到其他类事物的可能性有影响（另见 Sloman 1994 和 Williams 和 Lombrozo 2010）。Igor Douven 和 Jonah Schupbach（2015a），（2015b）提出了实验证据，表明人们的概率更新往往受到解释考虑的影响，使其偏离严格的贝叶斯更新（见下文）。Douven（2016b）表明，在上述实验中，更重视解释考虑的参与者往往更准确，这是根据标准评分规则确定的（有关与解释和推理相关的最新实验工作的有用概述，请参见 Lombrozo 2012 和 2016）。Douven 和 Patricia Mirabile（2018）发现了一些证据表明，人们在某些情境下依赖于类似 ABD2 的东西，但在大多数情况下，关于上述问题的实证工作还不足。

关于我们应该依赖哪些先前规则（如果我们应该依赖任何形式的溯因）的规范问题，哲学论证应该能够提供帮助，情况几乎没有好转。鉴于坏一拨的论证，ABD1 看起来并不怎么样。其他反对溯因的论点声称与规则的确切阐释无关；下文将发现这些论点存在缺陷。另一方面，支持溯因的论点（其中一些也将在下文讨论）并未区分具体版本。因此，假设人们确实普遍依赖溯因，必须考虑一个开放性问题，即他们依赖哪个版本的溯因。同样，假设人们依赖溯因是理性的，必须考虑一个开放性问题，即他们应该依赖哪个版本，或者也许是哪些版本的溯因，或者至少被允许依赖哪个版本。

## 3. 溯因的地位

即使我们通常依赖溯因推理是真实的，也可以问到这种做法是否合理。例如，实验研究表明，当人们能够想出某种可能事件的解释时，他们往往会高估这种事件实际发生的可能性。 （参见 Koehler 1991 年的一些研究概况；另请参见 Brem 和 Rips 2000 年。）更有意义的是，Lombrozo（2007）表明，在某些情况下，人们往往会极大地高估简单解释相对于复杂解释的概率。 尽管这些研究并不直接涉及到迄今为止讨论过的任何形式的溯因，但它们仍然表明，在推理中考虑解释因素可能并不总是有益的。（值得注意的是，Lombrozo 的实验*确实*直接涉及到一些已经提出的用贝叶斯框架来解释溯因的建议；请参见第 4 节。）然而，迄今为止关于溯因规范地位最相关的评论可以在哲学文献中找到。 本节讨论了对溯因提出的主要批评，以及为其辩护提出的最有力论据。

### 3.1 批评

我们已经遇到了所谓的坏手牌论的论点，我们看到，这个论点对于溯因的批评是有效的，但对于各种（我们所说的）协调的溯因规则却无能为力。我们在这里考虑两个旨在更为一般性的反对意见。第一个甚至声称挑战溯因背后的核心思想；第二个则不那么一般，但仍旨在削弱一大类溯因候选解释。这两个反对意见都是由巴斯·范弗拉森提出的。

第一个反对意见的前提是，“解释”的含义之一是，如果一个理论比另一个更具解释性，那么前者必须比后者更具信息量（见，例如，范弗拉森 1983 年，第 2 节）。所谓的问题是，这是“一个基本的逻辑观点，即更具信息量的理论不太可能更可能是真实的[因此]试图通过需要信息的特征（如‘最佳解释推断’）来描述归纳或证据支持的企图必须要么自相矛盾，要么模棱两可”（范弗拉森 1989 年，192 页）。这个基本逻辑观点应该是“最[明显]的……在一个理论是另一个理论的延伸的典型情况中：显然，延伸有更多的错误方式”（范弗拉森 1985 年，280 页）。

重要的是要注意，然而，在除了“典范”案例之外的任何其他情况下，假定的基本要点都一点都不明显。例如，相对论理论“有更多错误方式”的意义完全不清楚，与洛伦兹的以太理论相比，因为它们做出相同的预测。然而前者通常被认为在解释上优于后者。 （如果范弗拉森要反驳前者实际上并不比后者更具信息量，或者至少在适当意义上不比后者更具信息量——不管那是什么——那么我们当然应该拒绝接受这样的前提：为了更具解释力，一个理论必须更具信息量。）

第二个反对意见，范弗拉森在 1989 年提出（第 6 章），针对的是溯因的概率版本。反对意见是这样的规则要么等同于贝叶斯定律，因此是多余的，要么与之相悖，但然后，基于刘易斯的动态荷兰书论证（如泰勒 1973 年所述），在概率上是不一致的，这意味着它们可能导致评估一些共同确保财务损失的赌注是公平的；范弗拉森认为，遵循具有这一特征的规则是非理性的。

然而，这一反对意见并不比第一个更好。首先，正如帕特里克·马赫（1992）和布莱恩·斯科姆斯（1993）所指出的，某种方面的损失可能会被另一方面的好处所抵消。例如，可能有一些概率版本的 溯因 在某种程度上比贝叶斯法则要好得多，至少在我们的世界中是这样，因为从平均意义上讲，它更快地接近真相，即在将高概率（理解为高于某一阈值的概率）分配给真实假设方面更快（请参见 Douven 2013、2020 年以及 Douven 和 Wenmackers 2017；有关讨论，请参见 Climenhaga 2017）。如果是这样，那么遵循该规则而不是贝叶斯法则可能具有优势，这些优势也许不能用金钱来表达，但在决定遵循哪个规则时应该被考虑。简言之，遵循一个概率上不一致的规则是否一定是非理性的并不那么清楚。

另一方面，Douven（1999）认为，概率规则是否连贯这个问题不能独立于考虑与之一起使用的其他认识论和决策理论规则而解决；连贯性应该被理解为既包括认识论规则又包括决策理论规则的一套规则的属性，而不是认识论规则（如信念变化的概率规则）的孤立属性。在同一篇论文中，描述了一套连贯的规则包，其中包括一个概率版本的 溯因。（请参见 Kvanvig 1994、Harman 1997、Leplin 1997、Niiniluoto 1999 和 Okasha 2000，针对范弗拉森对概率版本 溯因 批评的不同回应。）

### 3.2 防御

如今，几乎没有人愿意认同一个将解释力量与真理之间存在必然联系的观念，例如，因为它规定解释上的优越性对于真理是必要的。因此，溯因的先验防御似乎是不可能的。事实上，迄今为止提出的所有辩护都是经验性质的，因为它们诉诸于据称支持这样一种主张的数据，即（以某种形式）溯因是一种可靠的推理规则。

最著名的这类论证是由理查德·博伊德在 1980 年代发展起来的（参见博伊德 1981 年，1984 年，1985 年）。它首先强调科学方法论的理论依赖性，包括设计实验的方法，评估数据的方法，选择竞争性假设的方法等。例如，在考虑实验设置必须屏蔽的可能混杂因素时，科学家们在很大程度上依赖已经被接受的理论。接下来的论证引起了对这种方法论表面上可靠性的关注，毕竟，这种方法论已经产生并继续产生令人印象深刻的准确理论。特别是，通过依赖这种方法论，科学家们目前已经能够找到越来越多仪器上充分的理论。博伊德随后认为，科学方法论的可靠性最好通过假设它所依赖的理论至少是近似真实来解释。基于这一点以及这些理论大多是通过溯因推理得出的事实，他得出结论认为，溯因必须是一条可靠的推理规则。

批评者指责这一论证是循环的。具体来说，有人说这一论证建立在一个前提上——科学方法论是由大约真实的背景理论所启发的，而这又建立在对其可信度最佳解释的推断上。而这种推断类型的可靠性恰恰是问题所在。（参见劳丹 1981 年和芬 1984 年）。

对此，Stathis Psillos（1999 年，第 4 章）做出了回应，引用了归因于 Richard Braithwaite 的区分，即前提循环和规则循环之间的区别。如果一个论证的结论在其前提中，那么这个论证就是前提循环的。相比之下，规则循环的论证是指其中的结论断言了关于在同一个论证中使用的推理规则的某种内容。正如 Psillos 所强调的，Boyd 的论证是规则循环的，但不是前提循环的，而规则循环的论证，Psillos 主张，*不一定*是恶性循环的（尽管前提循环的论证总是恶性循环的）。更准确地说，在他看来，一个关于某一规则*R*可靠性的论证，如果基本上依赖于*R*作为一个推理原则，那么只要使用*R*并不保证对*R*的可靠性得出积极的结论，这个论证就不是恶性的。Psillos 声称，在 Boyd 的论证中，这个限定条件得到了满足。因为虽然 Boyd 得出结论说科学方法依赖的背景理论大致上是真实的，是基于一种溯因的步骤，但溯因本身的使用并不能保证他的结论的真实性。毕竟，承认溯因的使用并不能确保科学方法成功的最佳解释是相关背景理论的大致真实性。因此，Psillos 得出结论，Boyd 的论证仍然站得住脚。

即使在博伊德的论证中使用 溯因 可能会导致结论 溯因 是*不*可靠的，人们仍然可能对论证的规则循环性感到担忧。假设某个科学界不依赖 溯因 而是依赖我们可以称之为“推断最糟解释”（IWE）的规则，这个规则允许推断出*最糟*的可用数据解释。我们可以安全地假设，这个规则的使用大多会导致采纳非常不成功的理论。然而，该社区可能会通过以下推理来证明其使用 IWE 的正当性：“科学理论往往非常不成功。这些理论是通过应用 IWE 得出的。认为 IWE 是一条可靠的推理规则——即，一条从真前提大多导出真结论的推理规则——显然是解释我们的理论如此不成功的最糟解释。因此，通过应用 IWE，我们可以得出结论，IWE 是一条可靠的推理规则。”虽然这将是一个完全荒谬的结论，但导致这一结论的论证与博伊德对 溯因 可靠性的论证一样，不能被指责为恶性循环（如果普西洛斯是对的）。因此，似乎规则循环性必定存在其他问题。

公平地指出，对于 Psillos 而言，规则循环论证并不能保证关于所讨论规则的积极结论，这并不足以使这样的论证有效。进一步的必要条件是“人们不应该有理由怀疑规则的可靠性——当前没有任何可以使人怀疑规则的东西”（Psillos 1999, 85）。而对于 IWE 的可靠性有足够的理由值得怀疑；事实上，上述论证*假定*了它是不可靠的。然而，有两个问题出现了。首先，我们为什么要接受额外的条件？其次，我们真的没有理由怀疑溯因的可靠性吗？毫无疑问，我们做出的*一些*溯因推理导致我们接受*虚假*。在我们因溯因而接受多少虚假之前，我们可以正当地开始怀疑这个规则？对于这些问题还没有给出明确的答案。

尽管规则循环性既不邪恶也不具有其他问题，人们仍然会想知道 Boyd 的论证如何说服溯因的批评者，因为它依赖于溯因。但是 Psillos 明确指出，哲学论证的目的并不总是，也不必总是说服对手接受自己的立场。有时，目的更为谦逊，只是为了让自己确信或安心地相信自己所支持的立场是正确的，或者自己很想支持这个立场。在这种情况下，我们不需要将 Boyd 的论证视为说服溯因的反对者其可靠性的尝试。相反，可以将其视为从已经对溯因持同情态度的人的视角内部为这个规则辩护；参见 Psillos 1999 (89)。

还有一些尝试以更直接的方式来为溯因进行论证，即通过枚举归纳。这些尝试的共同想法是，每一次新记录的成功溯因应用——比如发现了海王星，其存在是基于解释性的理由（见第 1.2 节）——都进一步支持了这样一个假设：溯因是一种可靠的推理规则，就像每一次新观察到的黑乌鸦都在一定程度上支持了所有乌鸦都是黑色的假设。由于不涉及溯因推理，这种类型的论证更有可能吸引那些不相信溯因的人。有关这些观点的建议，请参阅 Harré 1986, 1988, Bird 1998 (160), Kitcher 2001 和 Douven 2002。

## 4. 溯因与贝叶斯证实理论

在过去的十年中，贝叶斯确认理论已经牢固地确立自己作为确认的主导观点；目前，人们很难讨论一个确认理论问题，而不明确表明自己在这个问题上的立场是否偏离了标准的贝叶斯思维。无论是哪个版本的溯因，都将解释赋予了确认理论的角色：解释考虑有助于使一些假设更可信，而使其他假设不太可信。相比之下，贝叶斯确认理论根本不提及解释的概念。这是否意味着溯因与确认理论中的主流学说相冲突？一些作者最近提出论点，不仅溯因与贝叶斯主义是兼容的，而且它是一个迫切需要的补充。迄今为止，对这一观点的最充分的辩护是由利普顿（2004 年，第 7 章）提出的；正如他所说，贝叶斯主义者也应该是“解释主义者”（他对溯因倡导者的称呼）。（有关其他辩护，请参见奥卡沙 2000 年，麦格鲁 2003 年，韦斯伯格 2009 年，波斯顿 2014 年，第 7 章；有关讨论，请参见罗奇和索伯 2013 年，2014 年，麦肯和波斯顿 2014 年。）

这需要一些澄清。对于贝叶斯主义者来说，成为一个解释主义者意味着什么呢？为了应用贝叶斯定理并确定在学习*E*后*H*的概率，贝叶斯代理将不得不确定在*E*条件下*H*的概率。为此，他需要为*H*和*E*分配无条件概率以及给定*H*的*E*的概率；前两者大多被称为分别是*H*和*E*的“先验概率”（或者只是“先验”），后者是*H*在*E*上的“似然度”。（这是官方的贝叶斯故事。并非所有同情贝叶斯主义的人都遵循这个故事。例如，根据一些人的观点，认为条件概率是基本的，我们从中推导出无条件概率更为合理；参见 Hájek 2003 年及其中的参考文献。）贝叶斯主义者如何确定这些值呢？众所周知，概率论在我们有一些概率之后会给我们更多的概率；它不会从零开始给我们概率。当*H*意味着*E*或*E*的否定时，或者当*H*是一个在*E*上赋予一定机会的统计假设时，似然度就会“分析性地”产生。（这一说法假定了一些版本的 Lewis（1980）的主要原则，关于这个原则是否是分析性的存在争议；因此有引号。）但这并非总是如此，即使是这样，仍然存在如何确定先验的问题。这就是利普顿所说的溯因的作用所在。在他的建议中，贝叶斯主义者应该根据解释性考虑来确定他们的先验概率，以及如有必要，似然度。

确切地说，解释性考虑如何指导一个人选择先验概率？这个问题的答案并不像人们一开始想的那么简单。假设你正在考虑分配给一组竞争假设的先验概率，并且希望遵循利普顿的建议。你应该如何做呢？一个明显的答案，尽管仍然有些模糊，可能是这样的：无论你将分配什么样的确切先验概率，你应该将更高的先验概率分配给最能解释现有数据的假设，而不是分配给任何竞争对手（前提是有一个最佳解释）。请注意，你的邻居是一个贝叶斯主义者，但他认为证实与解释无关，他可能会给最佳解释分配一个甚至比你分配给该假设的先验概率更高的先验概率。事实上，他对最佳解释的先验概率甚至可能一直比你的要高，不是因为在他看来解释与证实在某种程度上相关——他认为不是，而是，嗯，就是因为。在这种情况下，“就是因为”是一个完全合理的理由，因为根据贝叶斯标准，任何确定先验概率的理由都被视为合法。根据主流贝叶斯认识论，先验概率（有时是似然性）是可以随意确定的，这意味着只要两者都是连贯的（即它们遵守概率论的公理），那么一个先验概率的分配和另一个一样好。利普顿对贝叶斯主义者提出成为解释主义者的建议是完全一般性的。但是，如果你的邻居想要遵循这个建议，他应该做些什么不同呢？如果他想要给与你相同的最佳解释相同的先验概率，也就是说，*降低*他对最佳解释的先验概率？还是他应该给最佳解释比他已经给出的*更高*的先验概率？

也许利普顿的提议并非旨在解决那些已经将最高先验分配给最佳解释的人，即使他们这样做是基于与解释无关的理由。也许想法是，只要一个人将最高先验分配给那些假设，一切都好，或者至少比如果一个人不这样做要好，无论一个人分配这些先验的原因是什么。那么，关于解释考虑如何指导一个人选择先验的问题的答案很可能是，如果这不是一个人已经在做的事情，那么一个人应该将更高的先验分配给最佳解释而不是其竞争对手。如果已经这样做了，那么应该继续做自己正在做的事情。

（顺便说一句，值得注意的是，根据标准的贝叶斯用法，“先验”一词并不一定指的是一个人在收到*任何*数据之前分配的信念程度。如果已经有数据了，那么很明显，一个人可以将更高的先验分配给最能解释当时可用数据的假设。然而，即使在任何数据未知之前，人们也可以明智地谈论“最佳解释”。例如，一个假设可能被认为比其竞争对手更好的解释，因为前者需要更简单的数学，或者因为它仅以熟悉的概念陈述，而其他假设则不是如此。更一般地说，这种判断可能基于科索（1992 年，30 页）所称的假设或理论的*内部特征*，即“无需观察世界即可评估的特征”。）

一个更有趣的回答上述问题的方式是由 Jonathan Weisberg（2009）提出的。我们说，主流贝叶斯派认为一种先验概率的分配和其他任何一种一样好。然而，所谓的客观贝叶斯派并不这样认为。这些贝叶斯派认为，先验必须遵守超出概率公理的原则才能被接受。客观贝叶斯派在确定应该遵守哪些进一步原则方面存在分歧，但至少有一段时间他们同意“无差别原则”是其中之一。粗略地说，这个原则建议，在没有相反理由的情况下，我们应该给予竞争假设相同的先验概率。然而众所周知，无差别原则在其原始形式中可能导致概率的不一致分配，因此几乎不可能被宣传为一种理性原则。问题在于，通常有各种方式来划分逻辑空间，这些方式在特定问题下似乎是合理的，但并非所有方式都会导致相同的先验概率分配，即使假设了无差别原则。Weisberg 的建议是，解释性考虑可能会支持其中一些划分而不是其他划分。也许我们不会总是得出一个唯一的划分来应用无差别原则，但如果最终只得出几个划分，这已经是进步了。因为我们可以通过两个步骤以有动机的方式得出我们的先验概率，即首先将无差别原则分别应用于各个划分，从而可能得到不同的先验分配，然后取这些获得的先验的加权平均值，其中权重也应取决于解释性考虑。结果将再次是一个概率函数——根据 Weisberg 的说法，这是唯一正确的先验概率函数。

这个提议在某种程度上令人感兴趣，但正如 Weisberg 所承认的那样，在其当前形式下，它并没有走得很远。首先，目前尚不清楚解释性考虑如何确定提议的第二步所需的权重。另外，希望考虑解释性因素会普遍让我们得到一组可管理的分区可能是徒劳的，即使这样做了，这也可能仅仅是因为我们忽视了一大堆表面上合理的逻辑空间分区方式。 （后一点当然呼应了坏一堆的论点。）

关于溯因和贝叶斯推理之间的联系的另一个建议——可以在 Okasha 2000 年、McGrew 2003 年、Lipton 2004 年（第 7 章）和 Dellsén 2018 年找到——是解释性考虑可能作为一种启发，用于确定先验和似然，即使只是粗略地，在我们在其他情况下一无所知且无法比猜测更好的情况下。这一建议对一个公认的事实非常敏感，即我们并不总是能够为每个感兴趣的假设分配一个先验，或者说在给定假设的条件下，某个证据有多大可能性。考虑该假设的解释力量可能有助于我们弄清楚，即使只是在一定范围内，为其分配什么先验，或者在给定证据的情况下为其分配什么似然。

贝叶斯派，尤其是那些更谦逊的人，可能会反驳说，只有在以下情况下才应遵循贝叶斯程序：(a) 先验和似然可以以一定的精度和客观性确定；或者 (b) 似然可以以一定的精度确定，并且可以预期先验会随着越来越多的证据累积而“消失”；或者 (c) 先验和似然都可以预期会消失。在其余情况下，他们可能会说，我们应该简单地避免应用贝叶斯推理。因此，在这些情况下，就无需进行溯因增强的贝叶斯主义。一些不容置疑的数学结果表明，在属于 (a)、(b) 或 (c) 的情况下，我们的概率最终会收敛于真相。因此，在这些情况下，也就不需要上述作者建议的那种溯因启发式方法。 （Weisberg 2009，第 3.2 节，提出了类似的担忧。）

Psillos（2000）提出了溯因可能如何补充贝叶斯证实理论的另一种方式，这种方式非常符合皮尔斯对溯因概念的理解。这个想法是，溯因可能会帮助我们选择可供测试的合理候选者，而实际测试则要遵循贝叶斯的思路。然而，Psillos 承认（2004）这一提议赋予了溯因一个对于致力于解释的人来说太过有限的角色。

最后，文献中迄今尚未考虑的一种可能性是，溯因和贝叶斯主义并不像上述提议中那样协同工作，而是以不同的推理方式运作；贝叶斯主义者和解释主义者可以说是出现在不同剧本中的角色。人们普遍认为，有时我们以绝对的方式言说和思考我们的信念，而其他时候我们以分级的方式言说和思考。目前尚不清楚这些不同的信念言说和思考方式——信念的认识论和信念程度的认识论，用理查德·福利（1992 年）的术语来说——彼此之间如何相关。事实上，目前尚不清楚这两者之间是否有任何直接联系，甚至是否根本存在联系。尽管如此，鉴于这种区别是不可否认的，一个合理的建议是，正如有不同的谈论和思考信念的方式一样，也有不同的谈论和思考信念修正的方式。特别是，溯因很可能属于信念的认识论，并且在我们以绝对方式推理信念时被调用，而与此同时，贝叶斯规则可能属于信念程度的认识论。铁杆的贝叶斯主义者可能坚持认为，以绝对方式进行的任何推理最终必须能够用贝叶斯术语来证明，但这假定了连接信念的认识论与信念程度的认识论的桥梁原则的存在——正如前面提到的，目前尚不清楚这样的原则是否存在。

## Bibliography

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
* Peirce, C. S. \[**CP**]. _Collected Papers of Charles Sanders Peirce_, edited by C. Hartshorne, P. Weiss, and A. Burks, 1931–1958, Cambridge MA: Harvard University Press.
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
* Stanford, K., 2009. “Underdetermination of Scientific Theory,” in _Stanford Encyclopedia of Philosophy_ (Winter 2009 Edition), Edward N. Zalta (ed.), URL = <[Underdetermination of Scientific Theory (Stanford Encyclopedia of Philosophy/Winter 2009 Edition)](https://plato.stanford.edu/archives/win2009/entries/scientific-underdetermination/)>.
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

## Academic Tools

| ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=abduction).                                                                      |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/abduction/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
| ![inpho icon](https://plato.stanford.edu/symbols/inpho.png)         | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=abduction\&redirect=True) at the Internet Philosophy Ontology Project (InPhO).   |
| ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif)      | [Enhanced bibliography for this entry](https://philpapers.org/sep/abduction/) at [PhilPapers](https://philpapers.org/), with links to its database.                          |

## Other Internet Resources

\[Please contact the author with suggestions.]

## Related Entries

[epistemology: Bayesian](https://plato.stanford.edu/entries/epistemology-bayesian/) | [induction: problem of](https://plato.stanford.edu/entries/induction-problem/) | [Peirce, Charles Sanders](https://plato.stanford.edu/entries/peirce/) | [scientific explanation](https://plato.stanford.edu/entries/scientific-explanation/) | [scientific realism](https://plato.stanford.edu/entries/scientific-realism/) | [simplicity](https://plato.stanford.edu/entries/simplicity/) | [skepticism](https://plato.stanford.edu/entries/skepticism/) | [underdetermination, of scientific theories](https://plato.stanford.edu/entries/scientific-underdetermination/)

[Copyright © 2021](https://plato.stanford.edu/info.html#c) by\
Igor Douven <[_igor.douven@paris-sorbonne.fr_](mailto:igor%2edouven%40paris-sorbonne%2efr)>
