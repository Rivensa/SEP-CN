# 几何学中的有限主义 finitism in (Jean Paul Van Bendegem)

*首次发表于 2002 年 4 月 3 日星期三；实质性修订于 2023 年 12 月 27 日星期三*

在我们对世界的表征中，尤其是在物理学中，（数学）无限起着至关重要的作用。实数连续体 R，作为时间或一维空间的表征，无疑是最为人熟知的例子，通过推广，n 维空间的 n 重笛卡尔积 Rn 也是如此。然而，这些无限也会带来问题。只需想想泽诺的悖论或当今对该讨论的延续，即对超任务的讨论，就能看到困难（详见本百科全书中有关超任务的条目）。因此，研究是否可能消除这些无限并仍能从事物理学是一个非常诱人的想法。回答这个问题的第一步是检查是否可能存在一种可以尽可能接近经典连续几何的离散几何。因为如果是这种情况，那么后者的几何很容易在任何利用这种特定数学背景的物理理论中被离散版本取代。

尽管这个任务看似简单，但是至少有两种方式可以理解近似的概念。假设 T 是一个基于经典几何的物理理论。那么对 T 的近似可以有两种不同的理解：

1. 对于 T 中的所有概念，包括几何概念，提出了一个离散的类比（如果存在的话），或
2. 使用可能不同的概念制定了一个基础理论 T'，以便从 T'中推导出经典概念。

在接下来的部分中，将概述（部分）属于（a）或（b）的各种尝试。然而，在踏上这个旅程之前，必须提到几点注意事项。

* [1. 一些一般考虑](https://plato.stanford.edu/entries/geometry-finitism/#SomGenCon)

  * [ 1.1 逻辑学家](https://plato.stanford.edu/entries/geometry-finitism/#Log)
  * [ 1.2 数学家](https://plato.stanford.edu/entries/geometry-finitism/#Mat)
  * [ 1.3 计算机科学家](https://plato.stanford.edu/entries/geometry-finitism/#ComSci)
  * [ 1.4 物理学家](https://plato.stanford.edu/entries/geometry-finitism/#Phy)
  * [ 1.5 哲学家](https://plato.stanford.edu/entries/geometry-finitism/#Phi)
* [2. 离散几何作为直接类比](https://plato.stanford.edu/entries/geometry-finitism/#DisGeoDirAna)

  * [2.1 欧几里得平面几何的标准公理化](https://plato.stanford.edu/entries/geometry-finitism/#StaAxiForEucPlaGeo)
  * [2.2 芬兰学派和自然几何](https://plato.stanford.edu/entries/geometry-finitism/#FinSchNatGeo)
  * [2.3 构造性方法](https://plato.stanford.edu/entries/geometry-finitism/#ConApp)
  * [2.4 一个直接的物理例子：特殊相对论理论的离散版本](https://plato.stanford.edu/entries/geometry-finitism/#DirPhyExa)
  * [2.5 一些部分解决方案和需要解决的问题](https://plato.stanford.edu/entries/geometry-finitism/#SomParSolProDea)
* [3. 离散几何作为古典几何的生成器](https://plato.stanford.edu/entries/geometry-finitism/#DisGeoGenClaGeo)

  * [3.1 一般框架](https://plato.stanford.edu/entries/geometry-finitism/#GenFra)
  * [3.2 一个原型示例，使用图表](https://plato.stanford.edu/entries/geometry-finitism/#ProExaUsiGra)
  * [3.3 一个特例：组合层次结构](https://plato.stanford.edu/entries/geometry-finitism/#SpeCasComHie)
  * [3.4 它可能是一个经验问题吗？](https://plato.stanford.edu/entries/geometry-finitism/#ItEmpPro)
* [4. 接下来需要做什么？](https://plato.stanford.edu/entries/geometry-finitism/#WhaNeeDonNex)
* [ 参考书目](https://plato.stanford.edu/entries/geometry-finitism/#Bib)
* [ 学术工具](https://plato.stanford.edu/entries/geometry-finitism/#Aca)
* [其他互联网资源](https://plato.stanford.edu/entries/geometry-finitism/#Oth)
* [ 相关条目](https://plato.stanford.edu/entries/geometry-finitism/#Rel)

---

## 1. 一些一般性考虑

要考虑的最重要的事情是，鉴于对离散几何的特定提议，作者的科学和/或哲学背景是什么，以及与此相关的，他们的意图是什么。他们是逻辑学家、数学家、计算机科学家、物理学家还是哲学家（列出五种最常见的情况）？他们是想解决一个纯粹的技术问题，一个物理问题还是一个哲学问题？他们是否担心基础性方面，还是他们研究的对象是进一步发展现有理论？值得详细讨论提到的五种作者类型中的每一种，以阐明这些问题。

### 1.1 逻辑学家

逻辑学家通常对展示一个理论的基本逻辑结构感兴趣，无论是物理的还是数学的，并探索是否存在替代方案，通常是通过改变基本逻辑原则。人们可以想象一种几何学，不是基于古典逻辑，而是基于直觉逻辑，其中排中律等原则，即对于任何命题 p，p 或非 p，或双重否定，即如果非非 p，则 p，不再成立。通常的目标是找到所有可能性的完整分类。这种方法意味着，致力于研究和发展离散模型的逻辑学家，并不一定认为这些模型在某种意义上是正确或真实的。它们仅仅有助于更好地理解古典几何学是什么。

这种方法的一个完美例证是对空间逻辑的研究，参见 Aiello 等人（2007）的出色概述。作者将他们的方法与时间逻辑的研究进行了比较（请参阅本百科全书中关于时间逻辑的条目）。有很多方法可以对时间进行建模：有起始和/或终点，离散或连续，线性，循环或分支，…… 逻辑任务是构建一种语言，使人能够“谈论”所有这些结构，并能够区分它们。在时间逻辑中，这样一种语言使用操作符 Fp（“将会发生 p”）和 Pp（“已经发生 p”）。一个例子：如果未来的时间是线性的，那么这个属性可以表达如下。假设给定 Fp 和 Fq，那么只有三种可能：要么 F(p&q)，即 p 和 q 将会发生，要么 F(p&Fq)，即 p 将会先发生然后 q，要么 F(Fp&q)，即另一种方式。用一个公式表示：（Fp&Fq）→（F(p&q)或 F(p&Fq)或 F(Fp&q)）。以完全类似的方式，构建这样一种语言是空间逻辑想要为几何学实现的目标，因此与我们将在第 3 节讨论的提议相关。

一种不同的逻辑方法是将几何中的可构造性与逻辑中的可构造性联系起来。Naibo (2015) 是一个很好的例子，导致了对几何的一种特殊观点，作者声称“欧几里德几何可以被看作是一个理论，其本体不是由一组扮演语言表达参照物角色的外延对象组成，而是由由构造性行为代表的内涵对象组成，这些行为对应于算法过程” (Naibo 2015, 158)。这种方法与 Suppes 的建设性、更具体和非内涵方法有关，详见第 2.3 节。

### 1.2 数学家

数学家可能会研究现有理论的离散或有限对应物，以查看在两种情况下仍然可证明的定理。从所谓的逆向数学的角度来看，这本身就很有趣。核心问题是找出证明某些定理必需的条件是什么？参见 Simpson (2005) 和 Stillwell (2016)。在离散几何中也成立的证明与关于离散性或连续性的任何假设无关。然而，人们可能会更深入地研究数学基础，并从基础的角度研究有限几何。一种这样的方法是严格的有限主义（有时也使用超有限主义或超直觉主义这些术语），它并不是其他基础理论的子理论，而是一种独立的选择。它与建构主义的许多形式共享这样一个基本观点，即数学对象和概念必须以数学家可以执行或实施的构造方式来访问。这些不同形式在“执行”或“表现”概念的理解上有所区别。大多数建构主义者允许潜在的无限，即如果一个过程或算法将在未来某个时刻（可证明地）终止，那么结果就被接受为可构造的。有关概述和建设性数学条目，请参阅 Bridges & Richman (1987)。严格的有限主义希望更进一步，并认为不确定的结果不应被接受为结果，因为由于所有计算资源都是有限的，很可能在达到结果之前这些资源已经被用完。这一额外的限定有助于与希尔伯特的有限主义区分开来，粗略地说，可以将其视为元层次上的有限主义形式（例如，尽管数学理论可以讨论无限结构，但在这种理论中的证明必须具有有限长度）。严格的有限主义在数学哲学中并不受欢迎，但仍然提出了一些建议。有关历史和实际情况（尽管现在有些过时）的描述可以在 Welti (1987)中找到。第 2 节将更多地讨论这些提议。

### 1.3 计算机科学家

在计算机科学中，提出的理论和建议与逻辑和数学的性质完全不同，尽管它们相互启发。这里面临的问题恰恰是要从经典几何类似模型翻译成一个模型，其域（通常）由构成（计算机）屏幕的有限像素或单元格组成。显而易见的缺点（从本条目的角度来看）是几乎所有这些模型都假定背景中存在经典（无限）模型，因此它们没有自己的适当基础——这与依赖经典分析证明程序正确性的数值分析非常类似。最关注的问题是证明原始模型与离散模型之间的对应关系，以确保获得的图像在某些方面忠实于原始模型。一个简单的数学例子涉及三维欧几里得表面上的孔的数量。人们希望确保数字图片中出现的每个孔确实对应于原始数学对象中的孔。有关更多示例，请参阅 Borwein＆Devlin（2009）。然而，值得一提的是，一些工作并不希望依赖经典连续背景，而是寻求“适当”的像素几何的公理化和/或形式化。有关一些很好的例子，请参阅 Kulpa（1979）和更近期的 Danielsson（2002）。

另一种调查方向涉及使用部分学（请参阅本百科全书中关于部分学的条目以获取概述）作为对经典几何的替代方法，通常称为部分几何或部分拓扑。其主要特征不是将点作为原始概念，而是将区域作为原始概念，通常具有有限的延伸（或未指定）。主要动机在于认知心理学和计算机科学之间的互动。视觉感知和认知的建模是一个主要例子。尽管与有限几何存在明显联系，但目前并未真正进行研究。Galton（1999）和 Schmidtke（2016）是罕见的例子。部分几何与拓扑学和“自然几何”之间也存在并且值得探索的平行和联系，详见第 2.2 节。

请注意，这些理论不应与具有推理几何对象能力的计算机程序混淆。这是自动推理研究领域的一部分—参见 Chou 等人（1994 年）的一篇很好的介绍，以及本百科全书中的自动推理条目—其基本对象是证明，而不一定是证明所涉及的数学对象。

### 1.4 物理学家

众所周知，物理学中一个热门话题是寻找量子（场）理论和广义相对论的统一。如果成功，将得到著名的“万物理论”。众所周知，要解决的最困难问题是如何处理时空。量子（场）理论需要空间和时间作为背景，而在广义相对论中，时空的结构在很大程度上由质量和能量决定。一种解决方法—第 3 节的大部分内容涉及这样的例子—是找到一个潜在于这两个理论之下的“更深层”结构，从更基本的概念中产生空间和时间。显然，如果找到这样的理论，它不仅仅会产生“只是”一个模型，而且实际上会被视为对现实的真实表达。这些模型中的大多数，尽管其中一些在目前可能是推测性的，最终被证明是离散的，因此这些提议与逻辑学家形成对比，例如，它们声称是正确的描述。有关最近的非正式概述，请参阅 Rovelli（2016），特别是第 11 章，“无限的终结”。

有两点需要指出。首先，从数学角度来看，本条目的重点是几何学，而不是其他以离散方式重新表述物理理论的可能性。这种替代方案的一个很好的例子可以在 Carroll (2023) 中找到，量子力学并非通过空间和/或时间而是通过希尔伯特状态空间离散化。这个空间在标准表述中有无限多个维度，但如果只有有限（尽管很大）数量的维度会怎样呢？其次，从历史角度来看，必须补充的是，一些物理学家曾试图找出现有经典物理理论的离散对应物是什么。通常，这种尝试的哲学基础往往相当特殊。在第 2 节中将介绍一个这样的例子。通常这种尝试并没有引起轰动，它们很快就消失在背景中，但它们确实包含一些有趣和相关的想法。

### 1.5 哲学家

从一个相当直接的意义上讲，上述所有内容都涉及到哲学家。关于逻辑系统、基础数学理论、涉及到 Zeno 悖论、超任务、模型和表征是什么的讨论，通常属于哲学家的领域。此外，他们还引入了来自其他哲学和/或科学领域的论点。假设有来自认识论或本体论角度的优秀论点声称世界应被视为离散的，那么这些论点可以支持对这种离散世界观的探索，包括对离散几何的阐述。即使从数学角度来看，这个理论看起来相当笨拙或难以处理，但由于哲学上的考虑，它必须是这样。在没有这样的支持性论点的情况下，一个人在这种情况下的立场会更加薄弱。最后，他们还关注事情的历史方面。令人惊讶的是，但这里不会介绍，看到在我们历史过程中已经提出了许多建议，以证明空间、时间和人应被视为有限和/或离散。例如，参见 Sorabji (1983) 和 Moore (1993) 以获取出色的历史概述，White (1992) 以获取二十世纪的发展，以及 Franklin (2017)、Lyons (2017) 和 Sewell (2022) 以获取一些最近的贡献。

如前所述，这五个群体是最重要的，因此尚未证明完整性，互斥性也未得到展示。这个简短的概述只是为了列出涉及各方的不同意图、动机、目的和方法。

## 2. 离散几何作为直接类比

要解决的第一个问题是经典理论将是什么。由于大部分工作都局限于平面，因此本文也将局限于这种特殊情况（在大多数提案中，将几何推广到更高维度被认为是完全直接的）。但这还不够，因为有不同的路线可供选择，以展示平面几何。一种可能性是采用（欧几里得）平面的任何公理化——比如，希尔伯特在他的《几何基础》（1899 年）中的公式化——并展示需要做出哪些改变才能获得（a）公理化理论的有限模型，以及（b）尽可能接近经典（无限、欧几里得）模型的有限模型。最早的尝试之一可以追溯到 40 年代末、50 年代初，因此将在这里作为一个典范进行介绍（因为它具有所有所需的积极品质以及似乎与此类尝试相伴随的怪异之处）。更具体地说，这涉及到保罗·库斯坦海莫（Paul Kustaanheimo）与 G. Järnefelt 在 1949 年至 1957 年间部分合作的工作。接下来将讨论一个提案，完全不同的方向，由帕特里克·苏普斯（Patrick Suppes）提出，以及约翰·伯克（John Burke）提出的一个更近期的类似方法。然后是路德维克·西尔伯斯坦（Ludwik Silberstein）的一个相对较旧的提案，其中几何直接嵌入到一个物理理论中，确切地说是狭义相对论。本部分的结尾部分涉及一些具体问题和试探性解决方案。

### 2.1 欧几里得平面几何的标准公理化

什么是希尔伯特类型的公理化？首先要做的是确定一种（形式）语言。通常选择包含变量名称（可能还包括常量名称）、函数名称（如果需要）、包括恒等谓词在内的谓词名称、逻辑连接词和量词以及一组语法规则来构成句子的一阶谓词逻辑。限制为一阶逻辑意味着只能对变量进行量化。不详细讨论，应该指出可以选择更具表现力的语言，例如允许对谓词进行量化。

一旦选择了语言，下一个问题是确定语言的原始术语。对于平面欧几里得几何来说，这些术语是点和线，尽管有时将线定义为特定的点集。接下来必须选择基本谓词。目前存在许多不同的公理化方法。最常用的谓词有：关系（“点 a 在线 A 上”）、介于关系（“点 a 介于点 b 和 c 之间”）、等距关系（“点 a 到 b 的距离与点 c 到 d 的距离相同”）、全等关系（“由两点 a 和 b 确定的线段与由两点 c 和 d 确定的线段全等”）。请注意，并非所有这些谓词都必须出现在公理化中。例如，如果线段不是作为原始术语引入的，则通常不会有关系。

下一步是引入一组公理来确定上述关系的某些属性。例如，如果公理化使用了关联关系，则该关系的典型公理是：

* 通过两点恰好可以画出一条直线。
* 每条直线上至少有两点。
* 至少有三个点不在同一条直线上。

最后，人们寻找公理化的解释或模型。这意味着我们寻找原始术语的含义，比如点和线，函数（如果有的话）和谓词的含义，使得公理相对于解释成为真实陈述。虽然在开发公理化时我们通常心中有一个特定的解释，但这并不排除存在相当意外的模型的可能性。从某种意义上说，有限主义模型依赖于这种可能性，正如下一段所示。

### 2.2 芬兰学派和自然几何

保罗·库斯坦海莫（Paul Kustaanheimo）是赫尔辛基一群数学家中的一员，他们都对某种形式的有限几何感兴趣。最杰出的成员包括 G. Järnefelt、P. Kustaanheimo 和 R. Lehti。他们的灵感源自 J.T. Hjelmslev 的工作，后者发展了所谓的“自然”几何学（见他 1923 年的著作《Die natürliche Geometrie》），有时也被称为“物理”几何学（正如前面提到的，与部分整体论相关）。他们的方法并没有得到延续，唯一的例外是 Reisler 和 Smith（1969 年）。然而，以一种奇怪的方式，与 Suppes 和 Burke 的方法存在联系，后者主要将几何学视为（几乎是）一门实验科学，即几何学家处理尺规，创造平面以测量等。当然，由于我们人类只能以有限方式操纵有限对象，必然会产生离散几何。

库斯坦海莫的提议——我在此概略复述他的提议，Welti（1987 年：487-521）对其提议的优秀阐述比原著更易理解——基于以下推理。欧几里德几何的经典公理理论的标准模型由实数与自身的笛卡尔积组成。或者，通常表述为，平面上的一个点被映射到一对实数，即其坐标。实数具有无限域的数学结构。但有限域也存在。那么，为什么不用有限域，即所谓的伽罗瓦域，取代无限实数域呢？

最好的结果是每个有限伽罗瓦域都满足欧几里德几何的大部分公理。然而，情况并非如此。库斯坦海莫研究的结果略显复杂：

* 不是所有的有限主义都适用。如果我们将有限主义域中的元素数量称为 p，则 p 必须满足一些条件。这意味着只有特定大小的有限主义域，即 p 的特定值，才是潜在的候选者。
* 对于“好”的 p 值，完整模型是不适用的。以直线为例。根据有限主义域中对它们的定义，结果有两种直线：开放和闭合的。后者违反了一些公理，因此您将模型限制为开放的直线。这种模型的限制被称为模型的欧几里德“核心”。

简而言之，不能断言任何有限主义域都适用，只有一些，而且仅仅是其中的一部分。

这种方法引发了一些重要的哲学问题：

* 很明显，模型的大小是一个重要特征。这有什么意义吗？或者，反过来说，不同大小的领域不适合作为模型意味着什么？假设欧几里得几何是宇宙几何结构的一个好模型，宇宙必须恰好包含 p 个点（不是 p-1，也不是 p+1），这种说法有意义吗？一种新的毕达哥拉斯主义似乎在这里潜伏着。
* 直线的例子表明存在“好”的几何对象（满足大多数公理的对象）和“坏”的几何对象。忽略坏的对象也许是一个在数学上有趣的策略，但这并不会将它们从完整的模型中消除。换句话说，尽管它们在模型的“核心”中没有起到任何相关作用，但它们确实存在。这意味着什么？继续上述思想实验，问题是宇宙中的“坏”对象对应于什么？如果它们不对应于任何东西，为什么我们需要它们来找到“好”的对象？

为了捍卫库斯坦海莫的方法，必须说无限模型与有限模型之间的联系通常比人们预期的复杂得多。有限模型不仅仅是无限模型的缩小版本。很多时候会出现不同的结构。打个比方，拿（无限集合的）自然数。取一个有限部分，比如从 1 到 L 的数字。在有限情况下，与 L 相比谈论小数和大数是有意义的。这在经典意义上是不可能的。因此，会发现额外的结构。比喻地说，通过使事物有限，会出现更详细或“细粒度”的结构，在无限存在时会被抹去。也许“好”和“坏”几何对象之间的区别就是这样一个在古典欧几里得模型中消失的额外特征。因此，也许质数确实具有重要意义。但问题仍然存在：这是一种新的毕达哥拉斯主义吗？关于库斯坦海莫的方法的更多细节可在补充文件中找到：有限域作为欧几里得平面几何模型。

### 2.3 构造性方法

Suppes 方法的独创性在于他提议将几何形式化为一种构造实践，类似于赫尔姆斯勒的工作，但又有所不同。这里所说的构造是指以生产图纸或图表为基础，使用某些工具，如尺子和/或圆规，而不是在现代意义上的基础术语，即几何的构造性，公理化基础。

从（严格）有限主义的角度来看，有两个重要因素。首先，构造可以以无限定词的方式制定；表达“画一条线”并不意味着我们需要谈论平面上所有线的完整集合。“画一条线”将导致一个特定的有限对象，即例如纸张上的一条线段。其次，考虑的所有模型都将是有限的，因为无论进行何种构造，起点始终是一个有限点集。

Suppes 认为有两种基本操作：操作 B，对应于将线 ab 二等分；操作 D，对应于将线 ab 加倍。构造中的步骤 Ci 包括三个元素：第一个元素是要构造的（新）点，第二个元素是已经存在的一对点，第三个元素是根据所选操作是 B 还是 D。起始位置包括三个给定点 a、b 和 c。

例子：考虑由两个步骤组成的构造((d,ac,B),(e,bd,D))。第一步是从 ac 开始构造中点 d，第二步是取线段 bd 并加倍。图示表示清楚了正在发生的事情。

![Points a, b, and c form a triangle, line segments ab and bc are solid lines, line segment bc is dashed Point d lies midway on the line segment bc The dashed line segment bd extends further to point e](https://plato.stanford.edu/entries/geometry-finitism/figure1.png)

 图 1

从三元组 a、b 和 c 开始，我们构造了平行四边形 abce。

当然，仅仅列出一组构造并不足以讨论一个几何理论，因此必须展示，正如 Suppes 所做的那样，形式公理化处理是可能的。只需列出关于 B 和 D 运算的一组必要公理，就可以证明上面示例中绘制的图形确实是一个平行四边形。此外，还证明了一个表示定理，使得点被赋予有理坐标。

有两个重要的评论必须提出。首先，仍然有待证明这个基本几何理论能够扩展到一个完整的几何理论，可以被视为古典几何的一个合理替代。Suppes 本人似乎对此非常有信心，他写道：

> 我个人的信念是，人们可以以纯有限主义的方式走完整个过程，或者至少几乎走完整个过程，...（2001: 136）

其次，对构造的关注开辟了一种新颖的处理距离函数问题的方式。我们不需要一个通用的距离函数，而是对于每种单独的情况，我们必须能够为图中出现的点赋予坐标，仅此而已。然而，仍有待观察基本操作 B 和 D 是否可以在不失去这一重要特性的情况下扩展。

最近 Burke (2022)提出了一个更为现代的建设性提议。虽然与 Suppes 提出的相似，但至少存在一个主要区别。Burke 只谈论点，而不谈论线（即，将线缩减为有限数量的点以识别它们）。形式语言包含基本操作或构造以及基本关系。前者涉及：（C1）（有向）线段延伸，（C2）横杆（由线 cd 两侧的两点 a 和 b 形成的“线”与线 cd 相交于一点），（C3）角度传递，（C4）圆-圆相交，和（C5）正交。后者包括：（R1）著名的介于关系，（R2）线段全等，（R3）相同角度方向，（R4）角度全等，和（R5）共面性。与 Suppes 一样，Burke 也出于同样的原因使用无量词的一阶谓词逻辑。还有两个额外的特点需要提及。第一个是每个构造都从有限区域内的有限数量的点开始。然后他证明无论进行何种基本构造，最终区域的大小最多会加倍。第二个是他的方法很容易从平面扩展到三维空间。

在这里也可以对 Burke 的方法中距离函数的可能性提出类似的评论。在第 2.5 节中，我将单独讨论这个问题，并讨论如何在有限主义设置中处理这个问题。然而，首先，从物理角度来看，有一个完全不同的方法。

### 2.4 一个直接的物理示例：特殊相对论理论的离散版本

1936 年，西尔伯斯坦提出了一个相当简单的离散理论。在物理学中，我们唯一使用的是标签 x、y、z、t，当离散时，这些标签总是可以用整数标记。在这本汇集了关于这一主题的五次讲座的简短小册子中，西尔伯斯坦将自己限制在一个空间参数和一个时间参数上。尽管他承认了更高维度的问题（1936 年：15），但他并没有处理这个问题。因此，在一条线上，离散距离函数和欧几里得距离函数重合，距离问题变得相当平凡。他的建议是基本的，即最小距离，即两个相邻点 xi 和 xi+1 之间的距离等于 1，同样对于时间坐标也是如此，使得 1 成为最大速度，等于 c，所以 c=1。导数的类比被定义，微分方程被替换为差分方程，泰勒级数的有限差分类比被推导出来，大部分经典物理学都可以被模拟。值得一提的是，这些讲座包括对时间最小单位（chronons）和空间最小单位（一维）（hodons）大小的粗略计算。假设 a 是一厘米中 hodons 的数量，b 是一秒钟中 chronons 的数量，那么 (1/a)(1/b)=ba=c=3.1010cm/s，或 b=3.1010⋅a。如果我们为 a 设定一个下限，比如 10^-8 厘米（这实际上是西尔伯斯坦的建议！），那么 b=3.1010⋅a≥3.1018，即一秒钟中 chronons 的数量。他进一步将离散时空框架应用于狭义相对论，这里也找到了一个类比。在这种方法中非常有趣的一点是出现了不需要在经典情况下的额外条件。这里有一个例证。

狭义相对论理论依赖于表达式，这里限制在一个空间维度，即 x2−c2t2。因此，任何对新坐标 x′、t′ 的更改都必须满足 x2−c2t2=x′2−c2t′2。假设我们写成 x=ax′+bt′ 和 t=cx′+dt′，那么逆关系将是 x′=(dx′−bt′)(ad−bc) 和 t′=(ax′−ct′)(ad−bc)。然而，如果 x、x′、t 和 t′ 都必须是整数，那么必然有 ad−bc=1。这最后一个条件纯粹是因为我们是以离散方式、使用整数来思考的结果。

### 2.5 处理一些部分解和问题

在这一部分将讨论三个特定问题，如果要认真对待离散几何的任何提议，这些问题就需要解决：距离函数问题，维度问题，各向异性问题和识别问题。

The distance function problem. 有一个相当毁灭性的论点表明，离散几何不存在真正的距离函数。 这可以追溯到 1949 年，首次由赫尔曼·维尔(Hermann Weyl)提出：

> If a square is built up of miniature tiles, then there are as many tiles along the diagonal as there are along the sides; thus the diagonal should be equal in length to the side. (Weyl 1949: 43)

至少有三种解决这个问题的方案被提出。

Van Bendegem (1987) 认为，在有限几何中，线和点应该具有延伸。特别是，线应该具有恒定的宽度（与线的方向无关）。因此，ND 代表一个大的（有限的）数字，对应于形成 ND 的正方形的数量。给定一条线，宽度总是定义为垂直于该线。现在假设该线具有与 x 轴之间的角度α对应的方向。那么当该线在 x 轴上投影时，该线的宽度 ND 将是[NDsinα]，其中表达式[x]表示小于或等于 x 的最大整数。

![a grid with two parallel lines going from upper left to lower right, near the bottom is a horizontal line crossing both lines its angle with the left parallel line is labelled with an alpha symbol Above a horizontal line segment connects the two parallel lines and another line segment ND/sinalpha has an arrow pointing to this goes from its intersection with the right parallel line to a point on the left parallel line below ND has an arrow pointing to this line segment The angle between the first line segment and the left parallel line is labelled with an alpha symbol](https://plato.stanford.edu/entries/geometry-finitism/figure2.jpg)

 图 2

两点 p 和 q 之间的距离 d 定义为由从 p 到 q 的线和宽度 ND 形成的矩形中的正方形数量除以 ND。这个想法是，虽然在离散几何中线必须有宽度，但这不是一个必要的特征，因此可以除去。因此：

 d(p,q)=NL⋅ NDsinα。

NL 在这里对应于 p 和 q 之间与 x 轴平行的层数，n(divm) 是 n 除以 m 的商。

作为一个例证，考虑 Weyl 问题。

![a grid with two long rectangles, one oriented top labelled 'p'/bottom labelled 'q' on the long axis and one oriented left labelled 'q'/right labelled 'r' on the long axis; they overlap on the bottom side of one and the left side of the other A long parallelgram overlaps on the top side of one and the right side of the other The long sides of both the rectangles are labelled NL and the short sides, ND A horizontal line segment from one side of the parallelgram to the other is labelled 'sqrt2Nd' The angle of intersection between the parallelgram and the left/right rectangle is labelled 'alpha=pi/4](https://plato.stanford.edu/entries/geometry-finitism/figure3.jpg)

 图 3。

我们有一个直角三角形 pqr，简单起见，右边 pq 和 qr 相等，并与网格的坐标轴对齐。假设右边的正方形数量为 NL。然后

d(p,q)=d(q,r)=NL⋅[ND](divND)=NL,

since, of course, [ND] = ND. However, the hypotenuse has an angle of α=√22. Thus,

d(p,r)=NL⋅[NDsinα](divND)=NL⋅[√2⋅ND](divND)=NL⋅[√2]n,

其中[r]n 表示小数点后 n 位的数字。不需要进行计算即可证明（近似）毕达哥拉斯定理成立，即 d2(p,q)+d2(q,r)=d2(p,r)。最后，有一个简单的解释为什么会出现韦伊尔问题：它对应于极限情况 ND=1。当 ND=1 时，[√2⋅ND]=[√2]=1，因此 d(p,r)=NL⋅1=NL，毕达哥拉斯定理失效。

尽管引入宽度 ND 显然解决了问题，但问题的缺点同样明显。在没有古典欧几里得几何学的背景下，实际上无法进行构造。在离散几何本身中没有线的定义，最重要的是，线 L 在 x 轴上的投影宽度是根据未明确提及的欧几里得距离函数计算的。简而言之，存在两种距离函数的混合。

Peter Forrest（1995）提出了另一个解决方案。他首先引入了一组离散空间 En,m，其中 n 对应于空间的“经典”维度，m 是一个比例因子，可以理解为：m 是一个参数，用于决定两点何时相邻，这是他的几何学的基本（唯一）概念。因此，在 n=2 的情况下，点由整数对（i，j）标记，如果它们不同，则点（i，j）和（i'，j'）相邻，且（i−i'）2+(j−j'）2≤m2。

一旦邻接关系被规定，就可以很容易地推导出一个距离函数：点 p 和点 q 之间的距离 d(p,q)是连接 p 和 q 的一系列点中“链接”数量最少的，每个点都与前一个点相邻。接下来，毫无问题地表明，通过两点的直线就是具有最短距离的那条点链。

如果参数 m 的值较小，则得到的距离函数不是欧几里得的。更具体地说，如果 m=1，那么我们再次遇到了魏尔所提出的情况。但是，如果说 m=1030（由 Forrest 本人提出的数字），那么情况就会改变。然后可以证明，在离散空间上的距离函数会以任意接近的方式逼近欧几里得距离函数。不需要再次进行任何计算，就可以表明原始距离函数 d 满足毕达哥拉斯定理。

如果要在这种方法中找到一个弱点，那么不可避免地会最终回到邻接的基本概念。为什么要用欧几里得术语来定义邻接？毕竟，像(i−i′)2+(j−j′)2≤m2 这样的条件看起来就像是欧几里得的。Van Bendegem（1997）中提出了一个可能的解决方法。离散方法的一个优点——事实上，这似乎普遍适用于严格的有限主义提议——是在严格的有限主义框架中，经典上等价的定义最终会变得不同。更具体地说，一个圆可以用至少两种方式定义：

1. 作为一组点 p，这些点到一个固定点的距离是固定的，
2. 作为一组点 p，使得给定固定线段 ab，apb 形成的角是直角。

从古典角度来看，这两个定义是等价的。然而，在离散几何中并非如此。例如，如果将距离函数定义为连接两个给定点的最低数量的 hodons，则这两个定义并不等价。使用定义（a），圆将呈现为一个正方形的形状（在所谓的出租车几何中是一个众所周知的事实），因此无法像上面那样定义邻接。另一方面，定义（b）产生的图形可以无限接近欧几里德圆。因此，Forrest 对于邻接的定义在离散框架内是可以接受的，因为没有参考欧几里德距离函数。

第三种解决方案可以在 Crouse 和 Skufca（2019）中找到，该书提出了一个有趣的综合方案，以解决距离函数问题。他们建议的是一种物理解释，使三件事成为可能。首先，它允许以普朗克长度和时间来确定霍顿和时间元的最小尺寸。其次，它建议以“测试”霍顿所走过的距离来定义从 A 到 B 的距离（当然是以离散的最小步骤）。这立即解决了各向异性问题，因为没有方向被特权化。第三，它不假设网格（或类似结构）的先验存在作为绝对参考框架。这使得重新阐述了特殊相对论的可能性，他们也这样做了。尽管没有提到 Silberstein 的方法（见上文 2.4 节），但显然相关，并且可以被认为是一种改进，因为物理基础在哲学上更有动机。

如果这些提议和建议被认为是对 Weyl 的平铺问题的充分回应，最近在 Fritz（2013）中找到了另一个很好的无解方法（以及相应的定理）。从一个周期图的抽象表述开始，即一组顶点和一组边。对于实际目的，周期性可以被视为晶体结构。这意味着我们有一个可以通过基本单元的迭代副本覆盖整个图形的基本有限单元。以二维结构为例。顶点可以用两个数字（i，j）进行标记或“加权”。轨迹（fn）n∈N 是顶点权重的序列，使得携带 fn 和 fn+1 的顶点通过一条边相连。接下来我们定义这种轨迹的（宏观）速度为

 u=limn→∞(fn−f0)n

这听起来完全可以接受。例如：轨迹这样 fn=(n,0)，从 f0=(0,0)开始，将具有宏观速度 1，因为 fn−f0=(n,0)，除以 n 后得到(1,0)。不详细讨论，他随后展示了在这样一个图中所有（宏观）速度的几何结构不能对应于欧几里得空间。原因相当简单（尽管证明并非如此）：在图中总会有被单独指出的“特殊”方向，各向异性将即使在宏观水平上仍然可检测。因此，从离散级别过渡到宏观、连续、欧几里得和各向同性级别是被排除的。这是一个真正有趣的结果，因为它给所有试图从离散级别直接、通常相当天真地过渡到连续级别的尝试蒙上了阴影。同时，它支持更复杂的从微观到宏观级别的过渡，例如，通过考虑线的宽度。

维度问题。虽然这是基本问题，但并未受到太多关注。如果平面由离散元素、hodons 或原子组成，则该集合必须具有零维。为了确定维度，该集合必须配备拓扑结构，唯一可能的候选者是离散拓扑。这意味着维度为零。要么选择根据维度的概念需要连续性和拓扑概念，因此没有有限主义意义的论点而简单地放弃维度的概念。要么寻找类似物，但目前尚不清楚可能是什么。不应尝试从排序关系中推导出维度的概念。假设 hodons 在某个适当的坐标系中由整数（i，j）标记，使得−L≤i，j≤L，其中 L 是某个上限。然后可能存在完全不同的排序关系。一种可能性是定义（i，j）<(k，l）当且仅当 i+j<k+l。但另一种可能性是定义（i，j）<(k，l）当且仅当 i<k 或者如果 i=k，则 j<l。因此，需要额外的论据来声称在给定集合上的所有可能排序关系中，只有一种具有特殊地位。然而，在第 3 节中，我们将看到，使用图论工具确实可以给出维度的定义。

同性问题。如果平面是由正方形 hodons 构建的，如上文段落中所述，那么 hodons 被安排在这样一种方式，每个 hodon 接触其他四个 hodons，即，平面可以被建模为一个正方形网格，那么显然存在优选方向，这种情况下将有两个优选方向。然而，如果取六边形作为 hodons，那么将有三个优选方向。因此，无论 hodon 的形状如何，都将存在优选方向，这意味着空间是各向异性的。请注意，这些情况只是 Tobias Fritz 的一般方法的特殊实例，如上所讨��。然而，对于物理应用，人们希望具有各向同性（或至少尽可能接近）。

有两种可能的方法，不属于弗里茨不可行定理。或者 hodons 具有明确定的形状，或者没有。在第一种情况下，有人建议，不是寻找平面的规则周期铺砌，而是寻找一种不规则的非周期铺砌，比如彭罗斯铺砌。

![penrose tile patter, a large number of several different types of parallelgrams which mesh together in groups of 10 to form multiple 10sided figures and groups of 3 to form multiple interlacing 6sided figures](https://plato.stanford.edu/entries/geometry-finitism/figure4.jpg)

 图 4

尽管没有可用的具体例子，但这似乎是一个有前途的攻击方向。在彭罗斯铺砌的情况下，有趣的是看到不再有经典的直线，这正是由于非周期性。在第二种情况下，模糊是一种可能的出路。正如彼得·福雷斯特在他的（1995 年）和克劳斯和斯库夫卡在他们的（2019 年）所辩护的那样，关于离散空间的具体表示的整个想法，例如，作为由小方块构建而成，是基本错误的。如果 hodon 具有特定形式，那么就不可避免地会问及 hodon 的部分，比如其边界，但如果 hodons 是可能的最小空间实体，那就没有意义。范·本德赫姆（1997 年）提出的一种中间立场是考虑一系列离散几何 Gi，每个几何都有特定尺寸 hi 的 hodon，使得 hi≠hj，对于 i≠j，并且还有 M 和 N，使得 M<hi<N，对于所有 i。然后可以将超估值技术应用于这个系列。这意味着如果一个语句在每个几何 Gi 中都为真（假），那么该语句将为真（假）。在所有其他情况下，它是未决的，即在某些情况下为真，在其他情况下为假。现在如果 A 是语句“hodons 具有尺寸α”（其中α是一个特定的数字），如果 a 对应于至少一个 hi，则这将是未决的。然而，这种方法引入了与模糊相关的所有问题到讨论中，这并不一定是一个令人鼓舞的情况。对于这个问题，也可以从图论框架内给出一个原始答案。

识别问题。假设我们确实拥有一个完整的离散几何，并假设我们用离散版本替换了物理理论的经典几何。我们现在将讨论 hodon 和 chronon。产生的“自然”问题是什么与什么进行识别？想象一下，按照 Silberstein 的观点，我们有点天真，并且会倾向于将 hodon 与普朗克长度 lp=10^-35 米以及 chronon 与普朗克时间 tp=10^-43 秒进行识别。如果现在接受最大速度是每个 chronon 一个 hodon，那么通过这种识别得出的结论是最大速度确实是 c=3.108 米/秒。（注：这里没有发生什么惊人的事情，因为在经典物理学中，lp 被定义为√ℏG/c3，tp 被定义为√ℏG/c5，因此很明显 lp/tp=c。现在问一个简单的问题，接近 c 的下一个速度是多少？答案必须是：每两个 chronon 一个 hodon，但这意味着速度为 c/2。我们似乎错过了 c/2 和 c 之间的整个范围。有一种解决方法，但它假设“抖动”运动是可能的，这是一个审美上相当丑陋的想法。一个物体在两个 chronon 内移动两个 hodon，然后等待一个 chronon，然后重复相同的运动。平均速度为 2c/3。一种可能的解决方法，将在第 3.2 节中简要提到，是在结构中引入随机元素。要欣赏这个主题的全部复杂性，超越仅仅是数值关系，请参阅 Hagar（2014）的出色概述和讨论。

## 3. 离散几何作为经典几何的生成器

### 3.1 一般框架

如第 1 节所述，我们将讨论寻找一个理论或模型的提议，该理论或模型是几何理论的基础，从而可以推导出经典的几何概念。显然，我们需要非常小心，因为“危险”不断存在，无限可能会在某个看不见或未注意到的地方出现。假设，举个简单的例子，只允许一组有限点存在，但也存在一种操作，可以在任意一对点之间生成一个与所有现有点都不同的第三个点，并且对操作的应用次数没有限制，那么很明显，我们在这里有一个“伪装中的”无限数量的点。称这样的模型为离散几何模型似乎相当不恰当。

人们还需要非常小心，例如，声称量子力学处理离散值，通常与海森堡不确定性原理有关，因此基本层次上的物理学是一种离散理论。然而，这是极其误导的。只需查阅任何一本量子力学手册，就会发现所使用的数学需要充分利用无限。无论是使用海森堡的矩阵方法、希尔伯特的算子形式主义、薛定谔的波动方程还是其他形式主义，数学都涉及积分、导数、无限（收敛）求和、无限维空间等（请参阅量子力学条目）。在这里很难找到太多的离散性。这意味着对于量子力学来说，找到一个离散的对应物也是一个真正的问题。这一点通过赫夫特（’t Hooft）试图以真正的离散方式重新阐述量子力学所证明的。值得注意的是，这影响了确定性与不确定性等问题。

从历史的角度来看，毫无疑问，图里奥·雷吉（Tullio Regge）的工作可以被视为开发一个模型的首次尝试，从中可以发展出几何概念。原始论文可以追溯到 1961 年，参见雷吉（1961）。更具体地说，我们在这里关注的是广义相对论理论（GRT）。尽管雷吉最初的意图是构建解决 GRT 方程的技术，即在“困难”情况下，即没有对称性存在且微扰理论不适用的情况下。雷吉没有将 GRT 的微分方程转录为差分方程，而是寻找一种导致完全不同方程的技术。在不呈现全部细节的情况下，他的方法的核心概念是“亏角”。在 GRT 中，我们处理的是曲线空间。以二维曲面为例。如果它是平坦的，那么它可以用三角形覆盖。如果它是曲的，那么可以用三角形近似，但有一个重要的区别。假设三角形在顶点相遇，那么我们可以看一���特定点以及所有在该点相遇的三角形。如果该曲面部分被展平，将会在某处出现一个缺口。这个缺口对应一个角度，这正是亏角。曲率越大，亏角越大。这种技术在四维情况下也适用，其中使用简单形式代替三角形。这种方法的美妙之处在于，GRT 的方程可以重写为亏角和简单形式边缘长度的概念，并以这些概念解决。Misner 等人（1973）的一章（第 42 章：“雷吉微积分”）以简洁而完全易懂的方式解释了雷吉的方法。

今天有相当多的尝试正在进行。其中大部分都应被视为高度推测性的，因为它们确实反映了正在全面发展中的现状。然而，还有一套逐渐开始出现的方法，似乎是有希望的候选者，并且对有限主义几何学（以时空为基础）感兴趣。值得注意的是，对于相关作者来说，他们的主要目的并不是制定离散形式的几何学，而是要建立这种或那种模型是否能作为量子（场）理论和广义相对论的共同基础，从而可以说是整个物理学，或者说，“万物理论”。我们这里实际上更为谦虚：这些模型是否告诉我们任何关于如何制定离散几何以产生经典几何的信息？因此，即使物理学家基于充分的物理原因拒绝这样的模型，它仍可能对离散几何的可能性问题感兴趣。

Huggett & Wuthrich (2013a) 对当时情况的剩余部分进行了很好的概述。值得一提的是，这篇论文是特刊《Huggett & Wuthrich (2013b)》的一部分，专门讨论了量子引力理论中时空的出现。总体上，他们讨论并评估了六种提议，但我们这里只考虑三种。剩下的三种要么在当前时刻过于推测性，要么不涉及离散时空（比如弦理论和非交换几何）。对我们的主题相关的三种方法是：

* 晶格时空：这在某种程度上接近于 Regge 的方法，即连续空间（和时间）被离散结构取代，即晶格。如果这些晶格配备某种形式的——显然是离散的——度量，连续和离散空间（和时间）之间的联系就会非常紧密。下一节将介绍这样一个提议（省略物理部分），
* 非度量格：这个标题下最为人熟知的例子是因果格。 格中“点”之间的连接是因果关系，这需要更多的工作来从中推导出时空结构。 实际上，在许多情况下，我们有所谓的无解定理，即离散格“无法具有类似相对论时空的良好连续极限”（第 278 页），因此“回应”了弗里茨（2013 年）已经提到的负面结果，
* 循环量子引力：这个理论是认真对待的尝试之一，旨在统一量子（场）理论和广义相对论。 基本结构是所谓的三维自旋网络。 如果允许这些网络随时间演化，那么会出现一个四维结构，即所谓的自旋泡沫，该结构在极限情况下应该生成相对论时空结构。 这里应该插入一个警告：尽管自旋网络的结构是具有一组节点和一组边的图的结构，但是这些节点和边被标记为涉及连续结构（如李群）的具有物理意义的量。 不详细介绍，Reisenberger（1999）的这段简短摘录非常具有启发性：

  > 一般来说，自旋网络的边携带规范群的非平凡不可约表示（irreps），而顶点携带交织子。 顶点的交织子可以是由传入边携带的不可约表示的乘积和传出边上的对偶不可约表示的乘积表示 R 形成的不变张量。 （第 2047 页）
  >

为了欣赏这一研究领域的迅速发展，人们应该将已提及的 Huggett & Wüthrich (2013a)与另外两篇论文进行比较，一篇较早，一篇较新。前者是 Meschini 等人(2005)，也是一篇调查论文。有趣的是，Huggett 和 Wüthrich 将他们的调查描述为与这篇文章互补。后者是 Surya (2019)，同样是一篇调查论文。重点在于因果集方法。将此与 Smolin (2018)结合起来，其中讨论了量子环引力等内容，人们必然会对已达到的复杂程度印象深刻。重要的是要意识到，更全面发展的方法从一开始就涉及物理学。奇怪的是，这些方法并未在已提及的空间逻辑文献中研究，参见 1.1 逻辑学家。尽管如此，这两个研究主题之间的联系非常深刻和紧密，绝对需要进一步探索。

为了使上述高层次介绍更具体化，简要介绍 Nowotny & Requardt (1999)的工作。尽管有些过时，但这是一个典型的例子，因为它展示了如何通过(因果)格构建经典几何学，然后再介入物理学。

### 3.2 一个典型的例子，使用图表

起始点是一个离散图 G=⟨N,C⟩，由节点集合 N，ni，和连接集合 C，cij 组成，使得没有节点与自身连接，节点 ni 和 nj 最多有一个连接。最明显的是如何定义距离函数，在几乎所有提议中，这确实是遵循的策略（类似于第 2.5 节中提出的定义）：

> D(ni,nj) = 从 ni 到 nj 导致的连接的最小数量。

容易看出距离函数的经典属性得到满足：

* D(ni,ni)=0,
* D(ni,nj)=D(nj,ni),
* D(ni,nj)+D(nj,nk)≥D(ni,nk).

乍一看，应该如何进一步进行并不明显，但是，如果将 ni 和 cij 看作一种向量，那么可以形成线性组合，其中 fi 和 gij 是自然数或有理数，例如：

f=∑ifini 和 g=∑ikgikcik.

这两个表达式可以看作是关于 ni 和 cij 的函数。现在需要的是节点和连接之间的关系，因此引入一个特殊函数 d：

 有限主义→∑kcik.

看到我们如何以线性方式扩展函数 d，使其可以应用于任意函数 f，这是非常有趣的。

df=∑ifi∑kcik.

如果我们现在规定 cik=−cki (作为一种矢量方程，说明连接有一个方向)，那么上述表达式可以重写如下（考虑到，由于不允许循环， cii=0）：

df=12∑ik(fk−fi)cik

虽然这还有很长的路要走，但这个表达式 df 已经具有一些很好的特性，让人想起了一个函数 f 的导数：

* 它是线性的：d(f+g)=df+dg,
* 如果 f 在每个节点上都具有相同的值，那么 f 是一个常数函数，那么 df 为 f 常数时为 0,
* 如果 f 在两个直接相关的节点 ni 和 ni+1 处是这样的，即 fi+1=fi+1，换句话说，这表达了 f(i)=i，那么 df 为 1，其中 1 是由∑ini 表示的函数。因此，恒等函数的导数是常数函数 1。

但是，如上面的定义很容易检查，乘积法则失败，即 d(f⋅g) 不等于 df⋅g+f⋅dg。

因此，在一定程度上，可以在离散图上构建一种基本形式的微积分。需要一些独创性和创造性思维来找到“正确”的对应物，但这个简单的例子表明，可以从离散图中推导出相当多的结构。实际上还有更多。离散图为维度问题提供了一个不错的解决方案，这个问题在第 2.5 节中提到过。这是这个想法的大致轮廓：

考虑一个节点 ni，那么 U1 是节点 nj 的集合，使得 D(ni,nj)=1，即 U1 将 ni 的最近邻聚集在一起。同样，我们可以定义 U2 为节点 nk 的集合，使得 D(ni,nk) 最多为 2。由此得出 Un⊆Un+1，因此我们得到了 ni 的一系列嵌套邻域。如果将维度理解为邻域“增长”的度量，那么维度可以定义为：

Dim=limm→∞ln|Um|lnm

这个定义的一个有趣特点是，它不需要在整个图上是一致的，一切取决于初始节点 ni 的选择。但是，在图形足够均匀的情况下，维度将是一个常数。此外，如果我们考虑一个经典情况，比如三维欧几里得空间，那么维度是匹配的。假设我们有一个规则的晶格作为基础图形，那么一个特定的节点有一个立方体作为最近邻点集 U1，包括 33=27 个点，而一个邻域 Um 将计算 (m+2)3 个节点。因此

Dim=limm→∞ln(m+2)3lnm or Dim=limm→∞3⋅ln(m+2)lnm

由于对于足够大的 m，ln(m+2)lnm 近似于 1，因此 Dim=3。这表明，从离散图开始，我们得到了对维度概念的扩展。有人可能已经注意到，这种定义类型与用于定义分形图像维度的某些定义非常相似。

此外，离散图使得处理各向异性问题成为可能。只需通过在网络中引入随机元素，例如通过对连接节点集合进行平均，即可避免任何特定方向。这里显然与不规则平铺方案或引入模糊性存在相似之处，但重要区别在于统计和概率概念（相当）被理解，而平铺问题如前所述是一个未解问题，模糊性仍然是一个难以理解的概念（请参见本百科全书中关于模糊性的条目）。

### 3.3 一个特殊情况：组合层次结构

相信以上列出的不同尝试能够构成一个完整的目录，从而可以对所有可能的方法进行分类，这将是一个错误。在这一段中，举例来说，像组合层次结构这样的异国情调的例子被简要介绍。在这种方法中，重点不在于物理方程本身，而在于其中出现的物理常数，比如光速 c、普朗克常数 h、电子质量 me 等。由于这些值必然是有限的，因此值得研究有限主义方法是否能够解释为什么这些常数恰好具有它们目前的值。这些方法有时被称为“数字游戏”。

让我举一个非常简单的例子。从由有限数量的位（即 0 或 1）组成的宇宙开始，引入了一个基本操作，即进行“区分”。为了表达这个操作，需要另一个操作：模 2 加法：0+0=1+1=0 和 0+1=1+0=1。如果结果是 0，则和的元素不被区分，否则它们被区分。现在看看包含 0 和/或 1 的集合，并且如果两个元素是可区分的，则该元素也属于该集合。存在确切的 3（=22−1）这样的集合：{0}，{1} 和 {0,1}。如果现在将这 3 个元素作为新的基础，而不是 0 和 1，一个巧妙的构造表明存在 7（=23−1）这样的集合，然后在下一步中，127（=27−1）出现。现在 3+7+127=137，这个数字接近电磁耦合常数。

这一计划的成功相当有限，因为这些模型不容易与现有的物理理论相连接。关于这一计划的自成体系的介绍可以在 Bastin & Kilmister (1995)中找到。这个计划与 A.S. Eddington 的工作非常相似。毫不奇怪，Kilmister (1994)写了一篇关于 Eddington 在他的基本理论上的工作的介绍。

### 3.4 它可能是一个经验问题吗？

到目前为止，我们已经探讨了离散几何作为古典几何的对应物的几种理论可能性。鉴于我们在前几节讨论的例子，对物理学的相关性似乎是显而易见的。尽管人们可能会认为空间和/或时间的离散性纯粹是一个理论问题，然而这是一个有趣的问题，即这个问题是否也可能具有经验性质。更具体地说，我们是否可以想象设计一个实验，以便结果要么是空间是离散的，要么是连续的？这听起来可能非常牵强，但这个问题确实引起了哲学家们的注意，确实提出了一个具体的实验，尽管目前执行这个实验的条件不可行。

看到 1961 年保罗·费耶尔本德提出了这样的可能性，这是非常有趣的。然而，并没有多说。

> 当前情况的困难似乎在于数学中缺乏离散的选择，而这种数学目前正在物理学中使用。(1961: 160)

同样有趣的是费耶尔阿本也提到了缺乏毕达哥拉斯定理的标准论点是一个真正的问题。他的建议是

> 我们只需要假设不同方向的测量不对易；然后也许我们可以将定理保留为一个算符方程。(1961: 161)

在这里，不幸的是，没有更多的话要说了。Peter Forrest (1995)认为这样的实验是可能的。根本原因在于经典数学使用连续变量，而严格的有限主义数学使用离散变量。因此，为了微分和积分，必须找到有限的类比，并且它们将逼近经典情况，但永远不会与之重合。因此，总会存在小差异，不能排除这些差异是可以被检测到的可能性。

一个检测的可能性涉及以下奇特现象。取微分方程，df/dx=ax(1−x)。解决它是一个简单的练习，人们会找到一个非常整洁的连续解，而如果将对应的差分方程Δf/Δx=ax(1−x)作为离散情况，取决于参数 a 的值，函数 f 的行为会产生混沌效应，这在连续情况下是不存在的。参见 Van Bendegem (2000)和 Welti (1987: 516–518)。这样一个实验的结果不会像希望的那样明确，但观察到混沌效应意味着空间是离散的，而观察不到混沌效应意味着空间要么是连续的，要么是我们想象的霍顿子比我们想象的要小得多。在长时间的沉默之后，有一个新的发展要报告。Oppenheim 等人(2023)声称我们应重新调查广义相对论理论中空间时间不需要量子化以获得与量子(场)理论的统一的可能性。他们称之为经典引力的后量子理论，以连续的空间时间为起点。一个引起的问题是如何设计关键实验。这样的实验不一定需要直接涉及空间时间本身，但如果可以做出选择，这将同时是对离散空间时间或连续空间时间的选择。

在这个引理中已经多次指出，不同意图和目的、不同背景的科学家提出或提出了关于离散几何作为经典几何的替代方案的同样不同的想法。许多作者并不一定提出更完整或更完整的理论，而是限于提出建议和探索某些特定的想法。这些论文应被视为寻找完整理论的灵感源泉。一些例子包括：Hahn (1934), Biser (1941), Coish (1959), Ahmavaara (1965a,b), Finkelstein (1969) (这是同一期刊中五篇论文系列的第一篇), Dadić & Pisk (1979), Finkelstein & Rodriguez (1986), Meessen (1989), Buot (1989)，仅举几例。对于 1925 年至 1936 年的时期，Kragh 和 Carazza (1994)提供了一个出色的概述，显示许多物理学家正在研究有限主义思想。

## 4. 接下来需要做什么？

要做的第一个任务似乎相当直接：拿出这里提出的任何建议，并将其详细阐述成一个完整的几何形式。然后就可以与希尔伯特的公理化进行比较，例如。第二个任务似乎相当艰巨：使用这种离散几何来展示如何进行物理学研究。总的来说，这确实是一项巨大的任务，但有两种可能的路线可供选择。第一条路线是展示这种方法在古典力学中有效，如果成功，这将肯定是支持离散建议的一个重要论据。事实上，已经做了一些非常重要的工作，我们需要的是古典力学的完全形式化版本，而不是留下许多事情未提及的教科书版本，但这可能对基础几何学至关重要。目前存在这样的版本，例如，Ax（1978），Andréka 等人（2008），Benda（2008），Ardourel（2012）等。事实上，最早的版本之一涉及帕特里克·萨普斯，参见麦金塞，Sugar 和 Suppes（1953）。因此，这个企业似乎是一个真正的可能性。第二条路线是继续探索正在进行的基础研究，以寻求量子场论和广义相对论的统一。直到几年前，这一切都是高度推测性的，如今一些认真的竞争者正在涌现并值得跟进。话虽如此，在数学和物理层面上仍有大量工作需要完成。可能最好的方式来描述当今的情况是，对于几何中离散或有限主义方法的一些“著名”反对意见已经（部分）得到回答，并且已经提出了大量数学、物理和哲学建议和想法，并且已经开发或正在详细阐述部分模型。换句话说，满足了使得继续进行这项研究计划变得有趣的条件。

## Bibliography

* Ahmavaara, Yrjo, 1965a, “The Structure of Space and the Formalism of Relativistic Quantum Field Theory I.”, *Journal of Mathematical Physics*, 6(1): 87–93.
* –––, 1965b, “The Structure of Space and the Formalism of Relativistic Quantum Field Theory II.”, *Journal of Mathematical Physics*, 6(2): 220–227.
* Aiello, M., I. Pratt-Hartmann & J. van Benthem (eds.), 2007, *Handbook of Spatial Logics*, New York: Springer.
* Amelino-Camelia G., 2013, “Quantum Spacetime Phenomenology”, *Living Reviews in Relativity*, 16(5), first online 12 June 2013. doi:10.12942/lrr-2013-5
* Andréka, H., J.X Madarász, I. Németi, & G. Seékely, 2008, “Axiomatizing Relativistic Dynamics Without Conservation Postulates”, *Studia Logica*, 89(2): 163–186.
* Ardourel V., 2012, “La physique dans la recherche en mathématiques constructives.”, *Philosophia Scientiae*, 16(1): 183–208.
* Ax, J., 1978, “The elementary foundations of spacetime”, *Foundations of Physics*, 8: 507–546.
* Bastin, T. & C.W. Kilmister, 1995, *Combinatorial Physics*, Singapore: World Scientific.
* Benda, T., 2008, “A formal construction of the spacetime manifold”, *Journal of Philosophical Logic*, 37(5): 441–478.
* Biser, E., 1941, “Discrete Real Space”, *Journal of Philosophy*, 38(Summer): 518–524
* Borwein, J. & K. Devlin, 2009, *The Computer as Crucible. An Introduction to Experimental Mathematics*, Wellesley: A K Peters.
* Bridges, D. & F. Richman, 1987, *Varieties of Constructive Mathematics*, Cambridge: Cambridge University Press (LMS Lecture Notes Series 97).
* Buot, F.A., 1989, “Discrete Phase-Space Model for Quantum Mechanics”, in M. Kafatos (ed.), *Bell”s Theorem, Quantum Theory and Conceptions of the Universe*, Dordrecht: Kluwer, pp. 159–162.
* Burke, J.R., 2022, “A Strict Finite Foundation for Geometric Constructions”, *Axiomathes*, 32(Supplement 2): 499–527.
* Carroll, S.M., 2023, “Completely Discretized, Finite Quantum Mechanics.”, *Foundations of Physics*, 53(90), first online 06 November 2023. doi:10.1007/s10701-023-00726-6
* Chou S.C., X.S. Gao, & J.Z. Zhang, 1994, *Machine Proofs in Geometry*, Singapore: World Scientific.
* Coish, H.R., 1959, “Elementary particles in a finite world geometry”, *Physical Review*, 114: 383–388.
* Crouse, D. & J. Skufca, 2019, “Relativistic Time Dilation and Length Contraction in Discrete Space-Time using a Modified Distance Formula”, *Logique et Analyse*, 62(246): 177–223.
* Dadić, I. & K. Pisk, 1979, “Dynamics of Discrete-Space Structure”, *International Journal of Theoretical Physics*, 18(5): 345–358.
* Danielsson, N., 2002, *Axiomatic Discrete Geometry*, London: Imperial College. (Thesis submitted for MSc Degree in Advanced Computing).
* Feyerabend, P., 1961, “Comments on Grünbaum’s ‘Law and Convention in Physical Theory’”, in H. Feigl & G. Maxwell (eds.), *Current Issues in the Philosophy of Science*, New York: Holt, Rinehart and Winston, pp. 155–161.
* Finkelstein, D., 1969, “Space-time code”, *Physical Review*, 184: 1261–1279.
* Finkelstein, D. & Rodriguez, E., 1986, “Quantum time-space and gravity”, in R. Penrose & C.J. Isham (eds.), *Quantum Concepts in Space and Time*, Oxford: Oxford University Press, pp. 247–254.
* Forrest, P., 1995, “Is Space-Time Discrete or Continuous?—An Empirical Question”, *Synthese*, 103: 327–354.
* Franklin, J., 2017, “Discrete and Continuous: A Fundamental Dichotomy in Mathematics”. *Journal of Humanistic Mathematics*, 7(2): 355–378.
* Fritz, T., 2013, “Velocity polytopes of periodic graphs and a no-go theorem for digital physics”, *Discrete Mathematics* 313: 1289–1301.
* Galton, A., 1999, “The Mereotopology of Discrete Space.”, in C. Freksa, & D.M. Mark (eds.), *Spatial Information Theory. Cognitive and Computational Foundations of Geographic Information Science. COSIT 1999* (Lecture Notes in Computer Science: Volume 1661), Berlin: Springer, pp. 251–266.
* Hagar, A., 2014, *Discrete or Continuous? The Quest for Fundamental Length in Modern Physics*, Cambridge: Cambridge University Press.
* Hahn, H., 1980 [1934], “Does the infinite exist?”, in B. Mcguinness (ed.), *Hans Hahn: Empiricism, Logic, and Mathematics*, Dordrecht: Reidel, pp. 103–131 (originally published in 1934).
* Hjelmslev, J.T., 1923, *Die Natürliche Geometrie*, Hamburg: Gremmer & Kröger (facsimile edition: hardpress.net, 2008).
* Huggett, N. & C. Wuthrich, 2013a, “Emergent spacetime and empirical (in)coherence”, *Studies in History and Philosophy of Science Part B: Studies in History and Philosophy of Modern Physics*, 44(3): 276–285.
* ––– (eds.), 2013b, “Special issue: The emergence of spacetime in quantum theories of gravity”, *Studies in History and Philosophy of Science Part B: Studies in History and Philosophy of Modern Physics*, 44(3): 273–364.
* Järnefelt, G., 1951, “Reflections on a Finite Approximation to Euclidean Geometry: Physical and Astronomical Prospects”, *Annales Academiae Scientiarum Fennicae, Series A, I. Mathematica-Physica*, 96: 1–43.
* Kilmister, C.W., 1994, *Eddington’s Search for a Fundamental Theory: A Key to the Universe*, Cambridge: Cambridge University Press.
* Kragh, H. & B. Carazza, 1994, “From Time Atoms to Space-Time Quantization: the Idea of Discrete Time, ca 1925–1936”, *Studies in the History and the Philosophy of Science*, 25(3): 437–462.
* Kulpa, Z., 1979, “On the Properties of Discrete Circles, Rings, and Disks”, *Computer Graphics and Image Processing*, 10: 348–365.
* Kustaanheimo, P., 1951, “A Note on a Finite Approximation of the Euclidean Plane Geometry”, *Societas Scientiarum Fennica. Commentationes Physico-Mathematicae*, 15/19: 1–11.
* Lyons, B. C., 2017, “The Applicability of the Planck Length to Zeno, Kalam, and Creation Ex Nihilo”, *Philosophia Christi*, 19(1): 171–180.
* McKinsey, J.C.C., A.C. Sugar, & P. Suppes, 1953, “Axiomatic Foundations of Classical Particle Mechanics”, *Journal of Rational Mechanics and Analysis*, 2(2): 253–272.
* Meessen, A., 1989, “Is it logically possible to generalize physics through space-time quantization?” in P. Weingartner & G. Schurz (eds.), *Philosophie der Naturwissenschaften. Akten des 13. Internationalen Wittgensteins Symposium*, Vienna: Hölder-Pichler-Tempsky, pp. 19–47.
* Meschini, D., M. Lehto, & J. Philonen, 2005, “Geometry, pregeometry, and beyond”, *Studies in History and Philosophy of Modern Physics*, 36(3) 435–464.
* Misner, C.W., K.S. Thorne, & J.A. Wheeler, 1973, *Gravitation*, San Francisco: W.H. Freeman.
* Moore, A.W., 1993, *Infinity*, Aldershot: Dartmouth.
* Naibo A., 2015, “Constructibility and geometry”, in G. Lolli, M. Panza & G. Venturi (eds.), *From Logic to Practice: Italian Studies in the Philosophy of Mathematics*, Cham: Springer, pp. 123–161.
* Nowotny, T. & M. Requardt, 1999, “Pregeometric concepts on graphs and cellular networks as possible models of space-time at the Planck-scale”, *Chaos, Solitons & Fractals*, 10(2–3): 469–481.
* Oppenheim, J., C. Sparaciari, B. Soda & W.-D. Zachary, 2023, “Gravitationally induced decoherence vs space-time diffusion: testing the quantum nature of gravity.”, *Nature Communications*, 14: 9710.
* Regge, T., 1961, “General relativity without coordinates”, *Nuovo Cimento*, 19: 558–571.
* Reisenberger M.P., 1999, “On relativistic spin network vertices”, *Journal of Mathematical Physics*, 40(4): 2046–2054.
* Reisler, D. L. & N. M. Smith, 1969, *Geometry Over a Finite Field*, Fort Belvoir, VA: Defense Technical Information Center. [Reiser & Smith 1969 available online](https://apps.dtic.mil/dtic/tr/fulltext/u2/714115.pdf)]
* Rovelli, C., 2016, *Reality is not What It Seems. The Journey to Quantum Gravity*, New York: Penguin. (Translated by Simon Carnell and Erica Segre, original published in 2014).
* Schmidtke, H.D., 2016, “Granular Mereogeometry”, in R. Ferrario & W. Kuhn (eds.), *Formal Ontology in Information Systems*, Amsterdam: IOS Press, pp. 81–94.
* Sewell, K., 2022, *Forever Finite. The Case Against Infinity*, Alexandria, VA: Rond Books.
* Silberstein, L., 1936, *Discrete Spacetime. A Course of Five Lectures delivered in the McLennan Laboratory*, Toronto: University of Toronto Press.
* Simpson, Stephen G. (ed.), 2005, *Reverse Mathematics 2001: Lecture Notes in Logic 21*, Association for Symbolic Logic.
* Smolin, L., 2018, “What Are We Missing in Our Search for Quantum Gravity?”, in J. Kouneiher (ed.), *Foundations of Mathematics and Physics One Century After Hilbert*, New York: Springer, pp. 287–304.
* Smyth, M.B. & J. Webster, 2007, “Discrete spatial models”, in Aiello, Pratt-Hartmann & van Benthem 2007: 713–798.
* Sorabji, R., 1983, *Time, Creation & the Continuum*, London: Duckworth.
* Stillwell, J., 2016, *Elements of Mathematics. From Euclid to Gödel*, Princeton: Princeton University Press.
* Suppes, P., 2001, “Finitism in geometry”, *Erkenntnis*, 54: 133–144.
* Surya, S., 2019, “The causal set approach to quantum gravity.”, *Living Reviews in Relativity*, 22(5), first online 27 September 2019. doi:10.1007/s41114-019-0023-1
* ’t Hooft, G., 2014, “Relating the Quantum Mechanics of Discrete Systems to Standard Canonical Quantum Mechanics”, *Foundations of Physics*, 44: 406–425.
* Van Bendegem, J.P., 1987, “Zeno’s Paradoxes and the Weyl Tile Argument”, *Philosophy of Science*, 54(2): 295–302.
* –––, 1997, “In defence of discrete space and time”, *Logique et Analyse*, 38(150–152): 127–150.
* –––, 2000, “How to tell the continuous from the discrete”, in François Beets & Eric Gillet (eds.), *Logique en Perspective. Mélanges offerts à Paul Gochet.* Brussels: Ousia, pp. 501–511.
* Welti, E., 1987, *Die Philosophie des strikten Finitismus. Entwicklungstheoretische und mathematische Untersuchungen über Unendlichkeitsbegriffe in Ideengeschichte und heutiger Mathematik*, Bern: Peter Lang.
* Weyl, H., 1949, *Philosophy of Mathematics and Natural Sciences*, Princeton: Princeton University Press.
* White, M.J., 1992, *The Continuous and the Discrete. Ancient Physical Theories from a Contemporary Perspective*, Oxford: Clarendon Press.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=geometry-finitism). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/geometry-finitism/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=geometry-finitism&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/geometry-finitism/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* Van Bendegem, J. P., 2020, “[Annotated Bibliography of Strict Finitism](http://jeanpaulvanbendegem.be/home/wp-content/uploads/2023/12/annotated-bibliography-of-strict-finitism-december-2023.pdf)”, a regularly updated bibliography in progress.

## Related Entries

[geometry: in the 19th century](https://plato.stanford.edu/entries/geometry-19th/) | [logic: temporal](https://plato.stanford.edu/entries/logic-temporal/) | [mathematics: constructive](https://plato.stanford.edu/entries/mathematics-constructive/) | [quantum mechanics](https://plato.stanford.edu/entries/qm/) | [quantum theory: quantum field theory](https://plato.stanford.edu/entries/quantum-field-theory/) | [quantum theory: quantum gravity](https://plato.stanford.edu/entries/quantum-gravity/) | [reasoning: automated](https://plato.stanford.edu/entries/reasoning-automated/) | [space and time: supertasks](https://plato.stanford.edu/entries/spacetime-supertasks/) | [vagueness](https://plato.stanford.edu/entries/vagueness/) | [Zeno of Elea: Zeno’s paradoxes](https://plato.stanford.edu/entries/paradox-zeno/)

[Copyright © 2023](https://plato.stanford.edu/info.html#c) by  
[Jean Paul Van Bendegem](https://clps.research.vub.be/jean-paul-van-bendegem-0) <[*Jean.Paul.Van.Bendegem@vub.be*](mailto:Jean%2ePaul%2eVan%2eBendegem%40vub%2ebe)>
