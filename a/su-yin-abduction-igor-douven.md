# 溯因 abduction (Igor Douven)

*首次发表于2011年3月9日；实质性修订于2021年5月18日*

在哲学文献中，“溯因”一词有两个相关但不同的含义。在这两个含义中，该术语都指的是某种形式的解释推理。然而，在历史上首次出现的含义中，它指的是解释推理在“生成”假设方面的作用，而在现代文献中最常用的含义中，它指的是解释推理在“证明”假设方面的作用。在后一种含义中，溯因也经常被称为“最佳解释推理”。

本文仅涉及现代意义上的溯因，尽管还有一个关于历史意义上的溯因的补充，它起源于查尔斯·桑德斯·皮尔斯的工作——请参见

> [补充：皮尔斯关于溯因的观点](https://plato.stanford.edu/entries/abduction/peirce.html)。

请参阅 [科学发现](https://plato.stanford.edu/entries/scientific-discovery/index.html#DiscAbdu) 条目，尤其是关于作为溯因的发现部分。

大多数哲学家都同意，溯因（即推理至最佳解释）是一种常常被采用的推理类型，无论是在日常推理还是在科学推理中都有所应用。然而，溯因的确切形式以及规范地位仍然有争议。本文介绍了溯因与其他类型推理的对比；指出了它在哲学内外的重要应用；考虑了关于溯因的各种较为确切的说法；讨论了其规范地位；并强调了溯因与贝叶斯确认理论之间的可能联系。

- [1. 溯因：概述](https://plato.stanford.edu/entries/abduction/#AbdGenIde) - [1.1 演绎、归纳、溯因](https://plato.stanford.edu/entries/abduction/#DedIndAbd) - [1.2 溯因的普遍性](https://plato.stanford.edu/entries/abduction/#UbiAbd) - [2. 阐释溯因](https://plato.stanford.edu/entries/abduction/#ExpAbd) - [3. 溯因的地位](https://plato.stanford.edu/entries/abduction/#StaAbd) - [3.1 批评](https://plato.stanford.edu/entries/abduction/#Cri) - [3.2 辩护](https://plato.stanford.edu/entries/abduction/#Def) - [4. 溯因与贝叶斯证实理论](https://plato.stanford.edu/entries/abduction/#AbdVerBayConThe) - [参考文献](https://plato.stanford.edu/entries/abduction/#Bib) - [学术工具](https://plato.stanford.edu/entries/abduction/#Aca) - [其他互联网资源](https://plato.stanford.edu/entries/abduction/#Oth) - [相关条目](https://plato.stanford.edu/entries/abduction/#Rel)

---

## 1. 溯因：概述

你恰好知道Tim和Harry最近因为一场可怕的争吵而结束了友谊。现在有人告诉你，她刚刚看到Tim和Harry一起慢跑。你能想到的最好的解释是他们已经和好了。你得出结论他们重新成为朋友了。

一天早上，当你走进厨房时，发现桌子上有一只盘子和一只杯子，上面有面包屑和一块黄油，周围还有一罐果酱、一包糖和一空奶盒。你得出结论是你的室友之一在晚上起来做了个午夜小吃，太累了没能收拾桌子。你认为，这是最好解释你所面对的情景的方式。当然，也可能是有人闯入了房子，在干活时顺便吃了点东西，或者是室友把东西放在桌子上，而没有吃午夜小吃，只是为了让你相信有人吃了午夜小吃。但这些假设让你觉得，提供的解释比你学到的信息还要牵强。

沿着海滩散步时，你看到沙滩上有一幅看起来像温斯顿·丘吉尔的画。可能是这样，就像希拉里·普特南（Hilary Putnam）的书《理性、真理和历史》（1981）的开头所描述的那样，你看到的实际上是一只蚂蚁在沙滩上爬行的痕迹。更简单，因此（你认为）更好的解释是有人故意在沙滩上画了一幅丘吉尔的画。无论如何，这就是你得出的结论。

在这些例子中，结论并不是从前提中逻辑上推导出来的。例如，从他们发生了一场可怕的争吵并结束了友谊，以及他们刚刚被看到一起慢跑的前提中，并不能逻辑上推导出蒂姆和哈里重新成为朋友；我们可以假设，即使从你对蒂姆和哈里的所有信息中，也不能得出这个结论。你也没有任何关于友谊、可怕的争吵和慢跑者的有用统计数据，这些数据可能支持你从你对蒂姆和哈里的信息中推断出他们重新成为朋友的结论，甚至可能（或以一定的概率）推断出他们重新成为朋友的结论。导致你得出这个结论的原因，以及根据许多哲学家的观点，也可能支持这个结论的原因，恰恰是蒂姆和哈里重新成为朋友，如果是真的，将会“最好地”解释他们刚刚被看到一起慢跑的事实。（假设一个假设要解释任何事情，必须是真实的，这一点从这里开始就被认为是已知的。）类似的评论也适用于其他两个例子。这里展示的推理类型被称为“溯因”或者现在更常见的“推导到最佳解释”。

### 1.1 溯因、演绎、归纳

溯因通常被认为是三种主要推理类型之一，另外两种是演绎和归纳。演绎与归纳和溯因之间的区别对应于必然推理和非必然推理之间的区别。在演绎推理中，如果推理的前提为真，则推理的结论是**必然**为真的；也就是说，前提的真实性**保证**了结论的真实性。一个熟悉的例子是实例化模式的推理。

所有的*A*都是*B*。> *a*是一个*A*。> 因此，*a*是一个*B*。

但并非所有的推理都是这种类型的。例如，考虑从“约翰住在切尔西”和“大多数住在切尔西的人都很富有”推导出“约翰很富有”的推理。在这种情况下，第一个句子的真实性并不被第二个和第三个句子的真实性所保证（只是变得可能）。换句话说，前提为真并不一定意味着结论也为真：在前提为真的情况下，约翰仍然可能是切尔西非富有居民的少数派成员。对于基于他们一起慢跑被看到的信息推断出蒂姆和哈里再次成为朋友的结论，情况类似。也许蒂姆和哈里是前商业伙伴，他们仍然有一些财务事项需要讨论，无论他们多么希望避免这种情况，他们决定将此与他们的日常锻炼结合起来；这与他们坚决决定不再和好是相容的。

将非必要推理分为归纳推理和溯因推理是标准做法。归纳推理是一个相对异质的类别，但为了本文的目的，可以将其描述为那些仅基于统计数据的推理，例如在给定人群中观察到某个特征发生的频率。以下是一个例子：

> 96%的佛兰芒大学学生会说荷兰语和法语。> Louise是一名佛兰芒大学学生。> 因此，Louise会说荷兰语和法语。

然而，相关的统计信息可能会更加模糊，就像前提中所说的，“住在切尔西的大多数人都很富有。”（关于归纳论证的结论是否可以以纯粹的定性术语陈述，或者是否应该是定量的，例如，它以0.96的概率表明Louise会说荷兰语和法语，或者它是否可以有时以定性术语陈述，例如，如果它是真实的概率足够高，有关归纳的这些和其他问题，请参见Kyburg 1990（第4章）。还应该提到的是，Harman（1965）将归纳看作是一种特殊类型的溯因。有关讨论，请参见Weintraub 2013。）

仅仅基于统计数据进行推理并不足以将其归类为归纳推理。你可能观察到许多灰色大象而没有非灰色的大象，并由此推断出所有大象都是灰色的，因为这是解释为什么你观察到这么多灰色大象而没有非灰色大象的最佳方式。这将是一种溯因推理的实例。它表明区分归纳和溯因的最佳方法是：两者都是扩大性的，意味着结论超出了前提中（逻辑上）包含的内容（这就是为什么它们是非必要的推理），但在溯因中有一个隐含或明确的对解释性考虑的呼应，而在归纳中没有；在归纳中，只有对观察到的频率或统计数据的呼应。（我强调“只有”，因为在溯因中也可能有对频率或统计数据的呼应，就像关于大象的例子一样。）

溯因的一个值得注意的特点是，它与归纳推理共享，但与演绎推理不同，即它违反了“单调性”，这意味着可能可以从一组前提的子集中溯因地推断出某些结论，而不能从整个前提集合中溯因地推断出这些结论。例如，假设我们将前提“蒂姆和哈里是前商业伙伴，他们仍然有一些财务事项需要讨论”添加到他们曾经发生过一次可怕的争吵并且他们刚刚被看到一起慢跑的前提中，即使仅仅是最后两个前提就足以推断他们再次成为朋友，现在也不再能够这样推断。原因是，在添加了他们是前商业伙伴并有财务事项需要讨论的信息后，根据原始前提来解释蒂姆和哈里一起慢跑的最佳解释可能不再成立。

### 1.2 溯因的普遍性

在本文开头描述的案例中所展示的推理类型，大多数人都会觉得非常熟悉。哲学家和心理学家一致认为，溯因经常被用于日常推理。有时候，我们对溯因推理的依赖是非常明显和明确的。但在一些日常实践中，它可能如此常规和自动化，以至于很容易被忽视。一个例子就是我们对他人证词的信任，据说这种信任是基于溯因推理的；参见哈曼（Harman）1965年，阿德勒（Adler）1994年，弗里克（Fricker）1994年和利普顿（Lipton）1998年对这一主张的辩护。例如，根据乔纳森·阿德勒（Jonathan Adler）（1994年，274f）的说法，“为什么通知者断言*P*的最佳解释通常是……他有充分负责的理由相信它，并且他打算我也相信它”，这就是为什么我们通常有理由相信通知者证词的原因。尽管在开始相信一个人的证词时，人们通常似乎没有意识到自己的思维中进行了任何溯因推理，但这可能是正确的。类似的言论可能适用于一些人认为溯因在语言实践中扮演的进一步、可能更基本的角色，即确定说话者通过话语所表达的意思。具体而言，有人认为解码话语是根据在话语产生的上下文中，为什么某人说了什么的最佳解释进行推断。更具体地说，从事语用学研究的作者们提出，听话者在话语的语义内容对于对话目的来说不够信息丰富、过于信息丰富、离题、不可信或其他奇怪或不恰当的情况下，会调用格赖斯会话准则来帮助他们找出说话者话语的最佳解释；例如，巴赫和哈尼什（Bach and Harnish）1979年（92f），达斯卡尔（Dascal）1979年（167）和霍布斯（Hobbs）2004年。与依赖说话者证词的情况类似，所需的溯因推理通常似乎是在潜意识层面上进行的。

溯因推理并不局限于日常环境。相反，科学哲学家们认为溯因是科学方法论的基石；例如，博伊德（Boyd）1981年、1984年，哈雷（Harré）1986年、1988年，利普顿（Lipton）1991年、2004年和普西洛斯（Psillos）1999年。根据蒂莫西·威廉姆森（Timothy Williamson）（2007年）的说法，“溯因方法论是科学提供的最佳方法”，而厄南·麦克马林（Ernan McMullin）（1992年）甚至将溯因称为“构建科学的推理”。为了说明溯因在科学中的应用，我们考虑两个例子。

在19世纪初，人们发现了天王星的轨道与基于艾萨克·牛顿的普遍引力理论和辅助假设（即太阳系中没有其他行星）所预测的轨道有所偏离。其中一个可能的解释当然是牛顿的理论是错误的。考虑到它在（当时）两个多世纪以来的巨大经验成功，这似乎不是一个很好的解释。两位天文学家约翰·库奇·亚当斯和乌尔班·勒韦里耶尔则独立地提出了一个不同的建议，即太阳系中存在第八颗尚未被发现的行星；他们认为这是解释天王星轨道偏离的最佳解释。不久之后，这颗行星被发现，现在被称为“海王星”。

第二个例子涉及英国物理学家约瑟夫·约翰·汤姆森所谓的电子的发现，现在普遍认为是如此。汤姆森进行了关于阴极射线的实验，以确定它们是否是带电粒子的流动。他得出结论，它们的确是，推理如下：

由于阴极射线携带负电荷，受到静电力的偏转，就像它们被负电荷电化一样，并且受到磁力的作用，就像这个力会作用在沿着这些射线路径移动的负电荷体上一样，我认为无法逃脱这样的结论：它们是由物质粒子携带的负电荷。(汤姆森，引自阿钦斯坦 2001, 17)

从报道的实验结果中，无法从逻辑上推断出阴极射线由带负电荷的粒子组成，汤姆森也无法依据任何相关的统计数据进行推断。然而，我们可以安全地假设，他“无法逃脱这个结论”的原因是，这个结论是他能想到的最好的解释，甚至可能是唯一合理的解释，来解释他的实验结果。

在文献中已经讨论了许多关于溯因的科学应用的例子；例如，参见Harré 1986、1988和Lipton 1991、2004。据说溯因也是医学诊断中主要的推理方式：医生倾向于选择最能解释患者症状的假设（参见Josephson和Josephson（编）1994，9-12；另见Dragulinescu 2016关于医学背景下的溯因推理）。

最后，溯因在一些重要的哲学辩论中起着核心作用。参见Shalkowski 2010关于溯因在形而上学中的地位（还有Bigelow 2010），Krzyżanowska、Wenmackers和Douven 2014以及Douven 2016a关于溯因在条件语义学中的可能角色，以及Williamson 2017关于溯因在逻辑哲学中的应用。然而，可以说溯因在认识论和科学哲学中扮演着最显著的角色，在这些领域中，溯因经常被用来反驳所谓的不确定性论证。不确定性论证通常从一个前提开始，即一些给定的假设在经验上是等效的，作者认为这意味着证据 - 实际上，我们可能获得的任何证据 - 无法支持其中任何一个。由此，我们应该得出结论，我们永远不能有理由相信任何特定的假设。（这只是一个大致的描述，但对于目前的目的足够了；有关不确定性论证的更详细解释，请参见Douven 2008和Stanford 2009。）这种类型论证的一个著名例子是笛卡尔对全局怀疑的论证，根据这个论证，现实更多或更少地与我们通常认为的方式是等效于各种所谓的怀疑性假设（例如，我们被邪恶的恶魔欺骗，或者我们是连接到超级计算机的大脑；参见，例如，Folina 2016）。类似的论证也被用来支持科学反实在论，即关于我们永远不能在关于现实可观察部分的基础上选择等效的竞争对手的假设（van Fraassen 1980）。

对这些论点的回应通常指出，所谓的经验等价性概念在考虑解释方面上过于忽视，例如，仅仅通过定义假设做出相同预测来严格界定这个概念。回应者随后辩称，即使一些假设确实做出了完全相同的预测，其中一个仍然可能是对所预测现象更好的解释。因此，如果解释方面的考虑在决定我们被授权做出哪些推断时起到了作用——正如溯因的辩护者所认为的那样——那么我们仍然有理由相信某些假设的真实性（或可能的真实性，或类似的，具体取决于所假设的溯因版本），尽管它们都做出了相同的预测。许多认识论学家在反对笛卡尔怀疑论时都引用了伯特兰·罗素（1912年，第2章）的溯因，他们的关键观点是，尽管怀疑性假设与我们通常认为的现实方式做出了相同的预测，但它们并不是同样好的解释；特别是，有人说怀疑性假设比“普通世界”假设要复杂得多。参见哈曼（1973年，第8章和第11章）、戈德曼（1988年，205页）、莫泽（1989年，161页）和沃格尔（1990年，2005年）等人；参见帕吉特（1984年）对于关于其他思维的怀疑性问题的溯因回应。同样，科学哲学家们认为我们有理由相信相对于洛伦兹的以太理论，特殊相对论更为可靠。尽管这些理论做出了相同的预测，但前者在解释方面优于后者。（对于这一主张的大多数论证都归结为特殊相对论在本体论上比其竞争对手更为简洁，后者假设了以太的存在。参见詹森（2002年）对于科学哲学家们为何更倾向于爱因斯坦的理论而非洛伦兹的理论提出了各种原因的优秀讨论。）

## 2. 溯因的阐释

溯因的确切陈述在溯因的文献中很少见。（皮尔斯确实提出了一个至少相当精确的陈述；但是，正如本条目的补充部分所解释的那样，它并没有捕捉到现在大多数人对溯因的理解。）人们经常说，它的核心思想是解释性考虑具有确认论意义，或者解释的成功是真理的（不一定是不可靠的）标志。然而，显然，这些表述充其量只是口号，很容易看出它们可以以各种看似合理的方式兑现。在这里，我们将考虑一些可能的解释，从“溯因的教科书版本”开始，如下所示，明显有缺陷，然后继续考虑对其的各种可能的改进。这些版本的共同之处是它们都是推理规则，需要包含解释性考虑的前提，并得出一个关于假设真实性的陈述的结论。差异在于所需的前提，或者我们可以从中推断出什么（或两者兼而有之）。

在认识论或科学哲学的教科书中，人们经常遇到以下类似的溯因陈述：

ABD1

在给定证据*E*和候选解释*H*1,…,*H**n*的情况下，推断能最好解释*E*的*H**i*的真相。

关于这个规则经常被提出的一个观察是，它假设了候选解释和最佳解释的概念，而这两者都没有一个直接的解释。虽然有些人仍然希望前者可以用纯逻辑的或至少是纯形式的术语来解释，但通常被认为后者必须依赖所谓的理论美德，如简洁性、普遍性和与已建立的理论的一致性；最佳解释将是在这些美德方面表现最好的假设。（例如，参见Thagard 1978和McMullin 1996。）问题在于，目前没有一个特别好理解的美德。 （Giere在Callebaut（ed。）1993（232）中甚至提出了理论美德缺乏真实内容，只在科学中起修辞作用的激进主张。鉴于最近关于简洁性和一致性的形式化工作，例如Forster和Sober 1994，Li和Vitanyi 1997以及Sober 2015关于简洁性，以及Bovens和Hartmann 2003和Olsson 2005关于一致性，这一主张的第一部分变得难以维持；此外，Schupbach和Sprenger（2011）以概率术语直接提出了关于解释好坏的解释。心理学证据对于这一主张的第二部分产生了怀疑；例如，Lombrozo 2007关于简洁性在人们对解释好坏的评估中的作用以及Koslowski *et al*. 2008关于与背景知识的一致性在这些评估中的作用。）

此外，许多认为溯因理论朝着正确的方向发展的人认为它太过强大。有些人认为溯因只能推断出最佳解释的*可能*真相，还有人认为它只能推断出最佳解释的*近似*真相，还有人认为它只能推断出最佳解释的*可能* *近似*真相。

溯因（ABD1）的真正问题比这更深入。因为溯因是扩充性的——正如前面所解释的——它在严格逻辑意义上不会成为一个有效的推理规则，尽管溯因的解释是确切的。然而，它仍然可以在大多数情况下导致真实结论，只要前提为真。ABD1要可靠的一个明显必要条件是，当“H”最好地解释“E”，且“E”为真时，“H”也为真（或者“H”近似为真，或者可能为真，或者可能近似为真）。但这对于ABD1来说还不够可靠。因为ABD1的前提只是某个假设相对于给定集合中的其他假设来说是最好的解释。因此，如果这个规则要可靠，至少通常情况下，相对于我们考虑的假设集合，最好的解释也应该是与我们可能构想的任何其他假设相比最好的解释（但由于时间不足、才智不够或其他原因而没有构想出来）。换句话说，至少通常情况下，我们提出的候选解释中应该能找到绝对最好的解释，否则ABD1可能会让我们相信“最好的是一堆糟糕中的最好”（van Fraassen 1989, 143）。

假设这个额外要求通常能够满足，这有多合理？可能一点也不合理。要相信相反的观点，我们必须假设我们在考虑数据的可能解释时，我们在某种程度上有特权，能够找到那些数据的绝对最佳解释。毕竟，我们几乎不会考虑到，或者甚至不可能考虑到所有的潜在解释。正如van Fraassen（1989, 144）指出的那样，我们有这种特权是从先验上来说相当不可信的。

对此，有人可能会争辩说，要证明最佳解释总是或大多数情况下属于考虑的假设之一，可以在不假设某种特权的情况下达到（参见Schupbach 2014的不同回应，以及Dellsén 2017的讨论）。因为我们已经设想出了一些假设，我们总是可以生成一组共同穷尽逻辑空间的假设。假设H1，…，Hn是我们迄今为止能够构想出的候选解释。然后简单地定义Hn+1 := ¬H1 ∧ … ∧ ¬Hn，并将这个新假设作为进一步的候选解释添加到我们已有的解释中。显然，集合{H1，…，Hn+1}是穷尽的，其中必定有一个元素为真。遵循这个简单的过程似乎足以确保我们不会错过绝对最佳的解释。（参见Lipton 1993，提出了类似的建议。）

然而，有一个问题。即使可能存在许多假设Hj暗示Hn+1，并且如果它们被提出来，将被评估为比我们最初考虑的候选解释中的最佳解释更好，Hn+1本身通常几乎没有信息量；事实上，通常甚至不清楚它的经验后果是什么。例如，假设我们有作为竞争解释的特殊相对论和洛伦兹的以太理论。然后，根据上述建议，我们可以将这两个理论都不为真的假设添加到我们的候选解释中。但是，毫无疑问，这个进一步的假设将被排名得很低作为解释——如果它被排名的话，这似乎是可疑的，因为它的经验后果完全不清楚。这并不是说建议的过程永远不起作用。关键是，通常它很难确保最佳解释属于我们考虑的候选解释之一。

对于上述“坏一批论证”的更有希望的回应始于观察到该论证利用了ABD1中的一种奇特的不对称或不协调。该规则允许基于一个比较前提——即特定假设相对于其他可用的假设来说是最好的解释——得出一个绝对结论，即给定的假设是真实的（参见Kuipers 2000, 171）。用“可能的真实”或“近似真实”来替换“真实”并不能避免这种不协调。为了避免这种情况，有两个一般的选择。

第一个选择是修改规则，使其需要一个绝对前提。例如，可以像Alan Musgrave（1988）或Peter Lipton（1993）那样要求被推断为真实的假设不仅是可用的潜在解释中最好的，而且还要是“令人满意的”（Musgrave）或“足够好的”（Lipton），从而得到以下ABD1的变体：

 溯因

给定证据 *E* 和候选解释 *H*1,…, *H**n*，推断出最好解释 *H**i* 的真实性，前提是 *H**i* 在解释方面足够令人满意/好。

毋庸置疑，溯因需要补充一个关于解释的满意度或足够好的标准，然而我们目前还缺乏这个标准。

其次，可以通过制定一个对称或一致的溯因版本，使其在给定比较前提的情况下，只能得出比较性的结论；这个选择也可以以多种方式实现。以下是一种实现方式，该方式已在Theo Kuipers的作品中提出和辩护（例如，Kuipers 1984、1992、2000）。

 溯因

给定证据 *E* 和候选解释 *H*1,…, *H**n*，如果 *H**i* 比其他假设更好地解释了 *E*，则推断 *H**i* 比其他假设更接近真相。

显然，溯因（ABD3）需要一个关于接近真理的解释，但是今天有许多这样的解释（参见，例如，Niiniluoto 1998）。

这里考虑的溯因的一项值得注意的特点是，它们不依赖于推理者在某种程度上拥有不合理的特权的假设，而我们看到，溯因（ABD1）隐含地依赖于这一假设。另一个特点是，如果一个人可以确定，无论数据的候选解释有多少个被忽略了，都没有一个等同于那些已经想到的最好解释，那么这些相符版本的推理与溯因（ABD1）完全一致（假设如果后者不令人满意或不够好，那么一个人不会确定没有潜在的解释与已经想到的最好解释一样好）。

正如前面提到的，人们普遍认同人们经常依赖溯因推理。人们到底依赖上述规则中的哪一个呢？或者他们可能还依赖其他进一步的规则吗？或者在某些情境下他们依赖一种版本，在其他情境下又依赖另一种版本（Douven 2017，即将出版）？哲学论证无法回答这些问题。近年来，实验心理学家开始关注人类在推理中赋予解释考虑的作用。例如，Tania Lombrozo和Nicholas Gwynne（2014）报告了一些实验，显示出我们对某一类事物的属性是如何被解释的——是通过机械方式，参考部件和过程，还是通过功能方式，参考功能和目的——这对我们将该属性推广到其他类事物的可能性有影响（另见Sloman 1994和Williams和Lombrozo 2010）。Igor Douven和Jonah Schupbach（2015a）（2015b）提供了实验证据，表明人们的概率更新往往受到解释考虑的影响，使其偏离严格的贝叶斯更新（见下文）。Douven（2016b）表明，在上述实验中，更重视解释考虑的参与者往往更准确，这是根据标准评分规则确定的（有关与解释和推理相关的最新实验工作的有用概述，请参见Lombrozo 2012和2016）。Douven和Patricia Mirabile（2018）发现了一些证据表明，人们至少在某些情境下依赖类似ABD2的东西，但在上述问题的大部分实证研究中，这方面的工作还不足。

关于我们应该依赖先前提到的规则中的哪一个（如果我们应该依赖任何形式的溯因），从规范性问题的角度来看，哲学论证应该能够提供帮助，但情况并不乐观。从坏一批的论证来看，ABD1看起来并不好。其他反对溯因的论证声称与规则的确切解释无关；下文将发现这些论证是站不住脚的。另一方面，支持溯因的论证（其中一些也将在下文讨论）并没有区分具体的版本。因此，假设人们确实常常依赖溯因，那么对于他们依赖哪个版本（或者版本）的溯因，这必须被视为一个悬而未决的问题。同样，假设人们依赖溯因是合理的，那么他们应该依赖哪个版本，或者至少被允许依赖哪个版本，也必须被视为一个悬而未决的问题。

## 3. 溯因的地位

即使我们通常依赖溯因推理，仍然可以问这种做法是否合理。例如，实验研究表明，当人们能够为某种可能事件想出一个解释时，他们往往会高估这个事件实际发生的可能性。（参见Koehler 1991，对一些这些研究的概述；另请参见Brem和Rips 2000。）更重要的是，Lombrozo（2007）表明，在某些情况下，人们往往会极大地高估简单解释的概率，而低估复杂解释的概率。尽管这些研究与迄今为止讨论的任何形式的溯因推理无直接关系，但它们仍然表明，在推理中考虑解释性因素并不总是有益的。（值得注意的是，Lombrozo的实验*确实*与在贝叶斯框架中阐明溯因的一些提议直接相关；请参见第4节。）然而，关于溯因的规范地位的最相关的评论迄今为止在哲学文献中找到。本节讨论了对溯因提出的主要批评，以及对其辩护提出的最有力的论据。

 ### 3.1 批评

我们已经遇到了所谓的坏批量论证，我们看到它作为对溯因的ABD1的批评是有效的，但对于各种（我们所谓的）一致的溯因规则却无能为力。在这里，我们考虑两个意图更为普遍的反对意见。第一个甚至打算挑战溯因的核心思想；第二个不太普遍，但仍旨在削弱一类广泛的溯因候选解释。这两个反对意见都是Bas van Fraassen提出的。

第一个反对意见的前提是，“解释”的意义之一是，如果一个理论比另一个理论更具解释力，那么前者必须比后者更具信息量（参见例如van Fraassen 1983年第2节）。然后所谓的问题是，“一个更具信息量的理论不可能更有可能是真的【因此】试图通过需要信息的特征（例如‘最佳解释推理’）来描述归纳或证据支持的企图，必然要么自相矛盾，要么含糊其辞”（van Fraassen 1989年，192页）。这一基本逻辑观点被认为在“范式案例中最明显……即一个理论是另一个理论的延伸的典型案例中”，然后很明显，“延伸理论的假设更多种方式是错误的”（van Fraassen 1985年，280页）。

然而需要注意的是，在除了“典型”案例之外的其他任何情况下，这个被认为是基本观点的点根本不明显。例如，在什么意义上，狭义相对论比洛伦兹的以太理论“有更多方式是错误的”是完全不清楚的，尽管它们会给出相同的预测。然而，狭义相对论通常被认为比后者更为优越，作为解释（如果van Fraassen要反驳前者并不真的比后者更具信息量，或者至少不是在适当的意义上更具信息量，无论那是什么，那么我们当然会拒绝认同这个前提，即为了更具解释力的理论必须更具信息量）。

第二个反对意见是在van Fraassen 1989年（第6章）提出的，针对的是溯因的概率版本。反对意见是这样的规则要么等同于贝叶斯规则，从而是多余的，要么与之相悖，但根据刘易斯的动态荷兰书论证（如Teller 1973所述），在概率上是不一致的，这意味着它们可能导致评估一系列的赌注为公平，而这些赌注无论如何都会导致财务损失；而且，van Fraassen认为，遵循具有这种特征的规则是非理性的。

然而，这个反对意见并不比第一个更好。首先，正如Patrick Maher（1992）和Brian Skyrms（1993）指出的，一个方面的损失可能会被另一个方面的利益所抵消。例如，可能有一些概率版本的溯因在某种程度上比贝叶斯规则更好，至少在我们的世界中是如此，因为它在平均意义上更快地接近真相，即更快地将高概率（理解为超过某个阈值）分配给真实假设（参见Douven 2013、2020和Douven和Wenmackers 2017；有关讨论，请参见Climenhaga 2017）。如果是这样的话，那么遵循这个规则而不是贝叶斯规则可能会有一些优势，这些优势可能不太容易用金钱来表达，但在决定要遵循哪个规则时应该被考虑进去。简而言之，遵循一个概率上不一致的规则是否非理性并不那么清楚。

另外，Douven（1999）认为，一个概率规则是否连贯并不是一个可以独立解决的问题，而是需要考虑与之一起使用的其他认识论和决策论规则；连贯性应该被理解为既包括认识论规则又包括决策论规则的一种特性，而不仅仅是认识论规则（如概率规则用于信念变化）的特性。在同一篇论文中，描述了一个连贯的规则包，其中包括了溯因的概率版本。（有关对概率版本溯因的van Fraassen批评的不同回应，请参见Kvanvig 1994、Harman 1997、Leplin 1997、Niiniluoto 1999和Okasha 2000。）

 ### 3.2 辩护

现在几乎没有人愿意订阅一个将解释力量与真理之间存在必然联系的真理观念，例如，因为它规定解释优势对于真理是必要的。因此，先验的溯因辩护似乎是不可能的。事实上，到目前为止，所有的辩护都是经验性的，因为它们诉诸于据称支持溯因是一种可靠的推理规则的数据。

这种类型中最著名的论证是由理查德·博伊德在20世纪80年代发展起来的（参见博伊德1981年，1984年，1985年）。它首先强调科学方法论的理论依赖性，包括设计实验的方法、评估数据的方法、选择竞争假设的方法等等。例如，在考虑实验设置必须避免的可能混淆因素时，科学家们在很大程度上依赖已经被接受的理论。接下来，这个论证引起了人们对这种方法论的显然可靠性的关注，毕竟，它已经产生了令人印象深刻的准确理论，并且继续产生着。特别是，通过依赖这种方法论，科学家们一直能够找到越来越符合实际需求的理论。然后，博伊德认为，科学方法论的可靠性最好通过假设它所依赖的理论至少是近似真实的来解释。从这一点以及这些理论大多是通过溯因推理得出的事实出发，他得出结论，溯因必须是一种可靠的推理规则。

批评者指责这个论点是循环的。具体来说，有人说这个论点建立在一个前提上，即科学方法论是由大致正确的背景理论所指导的，而这个前提又建立在对其合理性的最佳解释的推理上。而这种推理的可靠性正是问题所在。（例如，参见Laudan 1981和Fine 1984。）

对此，斯塔西斯·普西洛斯（1999年，第4章）回应道，引用了理查德·布雷思韦特所赞誉的一个区别，即前提循环和规则循环之间的区别。如果一个论证的结论是其前提之一，那么这个论证就是前提循环的。相比之下，规则循环的论证是一个论证，其中的结论断言了关于在同一个论证中使用的推理规则的某种事实。正如普西洛斯所强调的，博伊德的论证是规则循环的，但不是前提循环的，而规则循环的论证，普西洛斯认为，*不一定*是恶性循环的（尽管前提循环的论证总是恶性循环的）。更准确地说，在他看来，对于一个给定规则的可靠性的论证，如果这个论证本质上依赖于这个规则作为推理原则，那么它并不是恶性的，前提是使用这个规则并不能保证对于这个规则的可靠性得出一个积极的结论。普西洛斯声称，在博伊德的论证中，这个限定条件得到了满足。因为虽然博伊德通过归纳推理得出科学方法论所依赖的背景理论大致是真实的结论，但归纳推理本身并不能保证他的结论的真实性。毕竟，承认归纳推理并不能确保科学方法论成功的最佳解释是相关背景理论的大致真实性。因此，普西洛斯得出结论，博伊德的论证仍然成立。

即使在博伊德的论证中使用溯因可能导致结论溯因是不可靠的，人们仍然可能对该论证的规则循环性表示担忧。假设某个科学界不依赖溯因，而是依赖一条我们可以称之为“推理至最糟解释”的规则（IWE），这条规则允许根据可用数据推断出最糟糕的解释。我们可以安全地假设，使用这条规则通常会导致采用非常不成功的理论。然而，该社群可能通过以下推理来证明其使用IWE的合理性：“科学理论往往非常不成功。这些理论是通过应用IWE得出的。IWE是一条可靠的推理规则，即从真实前提推导出真实结论的规则，这显然是我们的理论如此不成功的最糟糕解释。因此，通过应用IWE，我们可以得出结论：IWE是一条可靠的推理规则。”虽然这个结论是完全荒谬的，但是与博伊德关于溯因可靠性的论证一样（如果普西洛斯是对的），这个论证并不能被指责为恶性循环。因此，似乎规则循环性必定存在其他问题。

值得注意的是，对于普西洛斯来说，规则循环论证不能保证对所讨论的规则有一个积极的结论是不足够的。进一步的必要条件是“人们不应该有理由怀疑规则的可靠性，即目前没有任何可以使人们不信任该规则的东西”（普西洛斯1999年，85页）。而对于IWE的可靠性确实有足够的理由怀疑；事实上，上述论证假设了它是不可靠的。然而，有两个问题出现了。首先，我们为什么要接受这个额外的条件？其次，我们真的没有理由怀疑溯因的可靠性吗？当然，我们所做的一些溯因推理导致我们接受了错误的事实。在我们开始合理地怀疑这个规则之前，我们可以接受多少错误的事实？对于这些问题还没有给出明确的答案。

不管怎样，即使规则循环性既不是恶性的也不是其他问题，人们仍然会想知道，鉴于它依赖于溯因，博伊德的论证如何能够说服反对溯因的批评者。但是普西洛斯明确指出，哲学论证的目的并不总是，也不一定是说服对手接受自己的立场。有时，目的更加谦虚，只是为了确保或使自己相信自己所支持或倾向于支持的立场是正确的。在这个案例中，我们不必将博伊德的论证视为试图说服反对溯因的对手相信其可靠性。相反，可以将其视为从已经对溯因持有同情态度的人的角度来为规则辩护；参见普西洛斯1999年（89页）。

还有一些试图以更直接的方式为溯因辩护的尝试，即通过列举归纳。这些尝试的共同思想是，每一次新记录的成功应用溯因（例如发现了海王星，其存在是基于解释性的理由提出的，见第1.2节）都进一步支持了溯因是一条可靠的推理规则的假设，就像每一次新观察到的黑乌鸦都对“所有乌鸦都是黑色”的假设提供了一些支持一样。由于它不涉及溯因推理，这种类型的论证更有可能吸引那些不相信溯因的人。有关这方面的建议，请参见哈雷1986年、1988年、伯德1998年（160页）、基彻尔2001年和杜文2002年的论述。

## 4. 溯因与贝叶斯证实理论

在过去的十年中，贝叶斯证实理论已经牢固地确立了自己作为证实问题的主导观点；目前，如果没有明确表明自己在这个问题上与标准的贝叶斯思维有何不同，就很难讨论证实理论的问题。无论是哪个版本的溯因，都将解释赋予了证实理论的角色：解释考虑有助于使一些假设更可信，而使其他假设更不可信。相比之下，贝叶斯证实理论根本不涉及解释的概念。这是否意味着溯因与证实理论中的主流学说相冲突？一些作者最近提出的论点是，溯因不仅与贝叶斯主义相容，而且是其必要的补充。迄今为止，对这一观点的最充分的辩护是由利普顿（Lipton）（2004年，第7章）提出的；正如他所说，贝叶斯主义者也应该是“解释主义者”（他对溯因的拥护者的称呼）。（有关其他辩护，请参见Okasha 2000，McGrew 2003，Weisberg 2009和Poston 2014，第7章；有关讨论，请参见Roche和Sober 2013、2014以及McCain和Poston 2014。）

这需要一些澄清。对于贝叶斯主义者来说，成为一个解释主义者意味着什么呢？为了应用贝叶斯规则并确定在得知E后H的概率，贝叶斯代理需要确定在E条件下H的概率。为此，他需要为H和E分配无条件概率，以及给定H的E的概率；前两者通常被称为H和E的“先验概率”，后者是H在E上的“似然度”。（这是官方的贝叶斯故事。并不是所有同情贝叶斯主义的人都坚持这个故事。例如，根据一些人的观点，认为条件概率是基本的，我们从中推导出无条件概率；参见Hájek 2003及其引用文献。）贝叶斯主义者如何确定这些值呢？众所周知，概率论在我们拥有一些概率时可以给出更多的概率；它并不能从零开始给出概率。当然，当H蕴含E或E的否定，或者当H是一个在E上赋予一定机会的统计假设时，似然度是“分析性的”。（这个说法假设了一些版本的刘易斯（1980）的主要原则，关于这个原则是否是分析性的存在争议；因此使用了引号。）但这并不总是成立，即使成立，仍然存在如何确定先验概率的问题。这就是根据利普顿的说法，溯因的作用。在他的建议中，贝叶斯主义者应该根据解释性考虑来确定他们的先验概率和可能的似然度。

解释性考虑如何准确地指导人们选择先验概率呢？对这个问题的答案并不像一开始想象的那么简单。假设你正在考虑为一组竞争假设分配先验概率，并且你希望遵循利普顿的建议。你应该如何做呢？一个明显的答案（尽管仍然有些模糊）可能是这样的：无论你将要分配什么样的确切先验概率，你应该将一个更高的先验概率分配给最好解释可用数据的假设，而不是分配给任何竞争假设（如果有一个最好的解释）。然而，你的邻居是一个贝叶斯主义者，但他认为证实与解释无关，他可能会给最好解释分配一个比你分配给该假设的先验概率更高的先验概率。实际上，他对最好解释的先验概率甚至可能一直比你的先验概率更高，不是因为在他看来解释与证实有某种关联-他认为没有关联-而是，嗯，就是因为。在这种情况下，“就是因为”是一个完全合理的理由，因为根据贝叶斯标准，任何确定先验概率的理由都是合理的。根据主流贝叶斯认识论，先验概率（有时也包括似然度）是可以随意确定的，这意味着只要两者都是一致的（即遵守概率论的公理），那么两种先验概率的分配都是一样好的。利普顿对贝叶斯主义者成为解释主义者的建议是完全普遍的。但如果你的邻居想要遵循这个建议，他应该做些什么不同呢？他是否应该给与你相同的先验概率，即降低他对最好解释的先验概率？还是他应该给最好解释更高的先验概率，比他已经给出的更高？

或许利普顿的提议并不是针对那些已经将最佳解释赋予最高先验概率的人，即使他们这样做的理由与解释无关。这个想法可能是，只要一个人将最高先验概率赋予这些假设，一切都好，或者至少比不这样做要好，而不管一个人赋予这些先验概率的理由如何。关于解释考虑如何指导一个人选择先验概率的问题，可以推测的答案是，如果这不是一个人已经做的，那么一个人应该将更高的先验概率赋予最佳解释而不是其竞争对手。如果已经这样做了，那么一个人应该继续做自己正在做的事情。

（顺便提一下，根据标准的贝叶斯用法，术语“先验概率”不一定指的是一个人在接收到任何数据之前赋予的信念程度。如果已经有了数据，那么显然可以将更高的先验概率赋予最佳解释的假设。然而，即使在没有任何数据的情况下，人们也可以合理地谈论“最佳解释”。例如，一个假设可能被判断为比其他竞争对手更好的解释，因为前者需要更简单的数学，或者因为它仅以熟悉的概念来陈述，而其他假设则不然。更一般地说，这样的判断可能基于科索（1992年，30页）所称的假设或理论的“内部特征”，即“无需观察世界即可评估的特征”。）

对于上述关于解释如何指导先验选择的问题，Jonathan Weisberg（2009）提出了一个更有趣的答案。我们说，主流贝叶斯派认为先验概率的任何一种分配都是一样好的。然而，所谓的客观贝叶斯派并不这样认为。这些贝叶斯派认为，为了是先验概率可接受，先验概率必须遵守概率公理之外的原则。客观贝叶斯派在这些原则上存在分歧，但至少在一段时间内，他们一致认为无差别原则是其中之一。粗略地说，这个原则建议，在没有其他理由的情况下，我们给予竞争假设相等的先验概率。然而，众所周知，无差别原则在其原始形式中可能导致不一致的概率分配，因此很难被宣传为合理性原则。问题在于，通常情况下，根据手头的问题，有多种合理的逻辑空间划分方式，并且并不是所有的划分方式都会导致相同的先验概率分配，即使假设无差别原则。Weisberg的提议意味着解释性考虑可能会支持其中一些划分方式而不是其他方式。也许我们不会总是得到一个唯一的划分方式来应用无差别原则，但如果我们最终只得到了少数几个划分方式，这已经是进步了。因为我们可以通过两个步骤来以有动机的方式得到我们的先验概率，首先将无差别原则分别应用于各个划分方式，从而可能得到不同的先验分配，然后对所得到的先验进行加权平均，其中权重也取决于解释性考虑。结果将再次是一个概率函数，根据Weisberg的说法，这是唯一正确的先验概率函数。

这个提议在某种程度上是有趣的，但正如Weisberg所承认的，它目前的形式并没有取得很大进展。首先，目前还不清楚解释性考虑如何确定提议的第二步所需的权重。其次，希望解释性考虑能够在一般情况下给我们留下一组可管理的划分方式可能是徒劳的，或者即使确实如此，这也可能仅仅是因为我们忽视了许多表面上合理的逻辑空间划分方式。（当然，后一点与坏批次的论证相呼应。）

关于溯因和贝叶斯推理之间的联系，Okasha 2000、McGrew 2003、Lipton 2004（第7章）和Dellsén 2018中提出了另一个建议，即解释性考虑可以作为一种启发式方法，用于确定先验和似然，即使只是粗略地，在我们对某些情况一无所知且只能猜测的情况下。这个建议敏感地意识到了一个公认的事实，即我们并不总能为每个感兴趣的假设分配一个先验，或者说在给定假设的条件下，一个给定证据的概率有多大。考虑到假设的解释力，可能有助于我们弄清楚，即使只是在一定范围内，为其分配什么先验，或者在给定证据的情况下为其分配什么似然。

贝叶斯学派，尤其是那些更为谦虚的人，可能会反驳说，只有在以下情况下才应遵循贝叶斯程序：（a）可以以一定的精确度和客观性确定先验和似然，或者（b）可以以一定的精确度确定似然，并且可以预期先验会随着越来越多的证据而“消失”，或者（c）先验和似然都可以预期会消失。在其他情况下，他们可能会说，我们应该简单地避免应用贝叶斯推理。因此，在这些情况下，溯因增强的贝叶斯主义是不必要的。而一些无可辩驳的数学结果表明，在属于（a）、（b）或（c）的情况下，我们的概率最终会收敛于真相。因此，在这些情况下，也不需要上述作者提出的溯因启发式方法。（Weisberg 2009，第3.2节，提出了类似的担忧。）

Psillos（2000）提出了另一种溯因可能补充贝叶斯证实理论的方式，这种方式非常符合皮尔斯对溯因的理解。其想法是，溯因可以帮助我们选择可行的候选方案进行测试，而实际的测试则遵循贝叶斯的方法。然而，Psillos（2004）承认，这个提议赋予了溯因一个在承诺解释主义者看来过于有限的角色。

最后，文献中迄今为止尚未考虑的一种可能性是，溯因和贝叶斯主义并不是像上述提议中那样协同工作，而是以不同的推理方式运作；贝叶斯主义者和解释主义者是在不同剧本中扮演的角色，可以这么说。广泛认可的是，有时我们以范畴的方式说和思考我们的信念，而其他时候我们以分级的方式说和思考它们。目前尚不清楚这些不同的信念表达和思考方式——信念的认识论和信念程度的认识论，用Richard Foley（1992）的术语来说——之间的关系如何。事实上，目前尚不清楚这两者之间是否存在任何直接的联系，甚至是否存在联系。不管怎样，鉴于这种区别是不可否认的，一个合理的建议是，就像有不同的信念表达和思考方式一样，有不同的关于信念修正的表达和思考方式。特别是，溯因很可能属于信念的认识论，并且在我们以范畴方式推理我们的信念时被调用，而贝叶斯规则则可能属于信念程度的认识论。坚定的贝叶斯主义者可能会坚持认为，在范畴方式中进行的任何推理最终都必须以贝叶斯术语来证明，但这前提是存在将信念的认识论与信念程度的认识论连接起来的桥梁原则——正如前面提到的，目前尚不清楚是否存在这样的原则。

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
