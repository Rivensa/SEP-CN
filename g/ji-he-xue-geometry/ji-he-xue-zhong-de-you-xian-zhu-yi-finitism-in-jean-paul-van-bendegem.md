# 几何学中的有限主义 finitism in (Jean Paul Van Bendegem)

*首次发表于2002年4月3日星期三；实质性修订于2023年12月27日星期三*

在我们对世界的描述中，特别是在物理学中，(数学) 无限主义起着至关重要的作用。实数连续体 R，作为时间或一维空间的表示，无疑是最为人熟知的例子，通过推广，n 维空间的 n 重笛卡尔积 Rn 也是如此。然而，这些无限主义也会带来问题。只需想想泽诺悖论或当今对该讨论的延续，即有关超任务的讨论，就能看到困难 (详见本百科全书中有关超任务的条目以获取全面处理)。因此，研究是否可能消除这些无限主义但仍能从事物理学是一个非常诱人的想法。回答这个问题的第一步是检查是否可能存在一种可以尽可能接近经典连续几何的离散几何。因为如果是这样的话，后者的几何可以很容易地在任何利用这种特定数学背景的物理理论中被离散版本取代。

尽管这项任务看似直截了当，但是至少有两种方式可以理解近似概念。假设 T 是一个基于经典几何的物理理论。那么，对 T 的近似可以有两种不同的含义：

1. 对于 T 中的所有概念，包括几何概念，提出一个离散模拟 (如果存在的话)，或
2. 使用可能不同的概念制定了一个基础理论 T'，以便从 T' 中推导出经典概念。

在接下来的部分中，将概述（一些）属于 (a) 或 (b) 的各种尝试。然而，在踏上这段旅程之前，必须提到几点警告。

* [1. 一些一般性考虑](https://plato.stanford.edu/entries/geometry-finitism/#SomGenCon)

  * [ 1.1 逻辑学家](https://plato.stanford.edu/entries/geometry-finitism/#Log)
  * [ 1.2 数学家](https://plato.stanford.edu/entries/geometry-finitism/#Mat)
  * [ 1.3 计算机科学家](https://plato.stanford.edu/entries/geometry-finitism/#ComSci)
  * [ 1.4 物理学家](https://plato.stanford.edu/entries/geometry-finitism/#Phy)
  * [ 1.5 哲学家](https://plato.stanford.edu/entries/geometry-finitism/#Phi)
* [2. 有限主义几何作为直接类比](https://plato.stanford.edu/entries/geometry-finitism/#DisGeoDirAna)

  * [2.1 欧几里得平面几何的标准公理化](https://plato.stanford.edu/entries/geometry-finitism/#StaAxiForEucPlaGeo)
  * [2.2 芬兰学派和自然几何](https://plato.stanford.edu/entries/geometry-finitism/#FinSchNatGeo)
  * [2.3 有限主义方法](https://plato.stanford.edu/entries/geometry-finitism/#ConApp)
  * [2.4 一个直接的物理例子：特殊相对论理论的有限主义版本](https://plato.stanford.edu/entries/geometry-finitism/#DirPhyExa)
  * [2.5 一些部分解决方案和需要解决的问题](https://plato.stanford.edu/entries/geometry-finitism/#SomParSolProDea)
* [3. 有限主义几何作为古典几何的生成器](https://plato.stanford.edu/entries/geometry-finitism/#DisGeoGenClaGeo)

  * [3.1 一般框架](https://plato.stanford.edu/entries/geometry-finitism/#GenFra)
  * [3.2 一个原型示例，使用图](https://plato.stanford.edu/entries/geometry-finitism/#ProExaUsiGra)
  * [3.3 一个特殊情况：组合层次](https://plato.stanford.edu/entries/geometry-finitism/#SpeCasComHie)
  * [3.4 它可以是一个经验问题吗？](https://plato.stanford.edu/entries/geometry-finitism/#ItEmpPro)
* [4. 接下来需要做什么？](https://plato.stanford.edu/entries/geometry-finitism/#WhaNeeDonNex)
* [ 有限主义](https://plato.stanford.edu/entries/geometry-finitism/#Bib)
* [ 学术工具](https://plato.stanford.edu/entries/geometry-finitism/#Aca)
* [其他互联网资源](https://plato.stanford.edu/entries/geometry-finitism/#Oth)
* [ 相关条目](https://plato.stanford.edu/entries/geometry-finitism/#Rel)

---

## 1. 一些一般考虑

要考虑的最重要的事情是，鉴于某个离散几何的具体提议，作者的科学和/或哲学背景是什么，以及与此相关的，他们的意图是什么。他们是逻辑学家、数学家、计算机科学家、物理学家还是哲学家（列出最常见的五种情况）？他们想解决一个纯粹的技术、物理还是哲学问题？他们是否担心基础性方面，还是他们研究的对象是进一步发展现有理论？值得详细讨论提到的五种作者类型中的每一种，以阐明这些问题。

### 1.1 逻辑学家

逻辑学家通常对展示理论的基本逻辑结构感兴趣，无论是物理的还是数学的，并且通过探索是否存在替代方案来进行研究，通常是通过改变基本逻辑原则。人们可以想象一种几何学，不是基于古典逻辑，而是基于直觉逻辑，其中诸如排中律，即对于任何命题 p，p 或非 p，或双重否定，即如果非非 p，则 p，不再成立。通常的目标是找到所有可能性的完整分类。这种方法意味着，研究和发展离散模型的逻辑学家并不一定认为这些模型在某种意义上是正确或真实的。它们只是帮助更好地理解古典几何学是什么。

这种方法的完美例证是空间逻辑的研究，参见 Aiello 等人（2007 年）的出色概述。作者将他们的方法与时间逻辑的研究进行了比较（请参阅本百科全书中关于时间逻辑的条目）。有很多方法可以对时间进行建模：有起点和/或终点，离散或连续，线性、循环或分支，……逻辑任务是构建一种语言，使人能够“谈论”所有这些结构，并能够区分它们。在时间逻辑中，这样一种语言使用操作符 Fp（“将会发生 p”）和 Pp（“曾经发生 p”）。举个例子：如果时间在未来是线性的，那么这个属性可以表达如下。假设给定了 Fp 和 Fq，那么只有三种可能性：要么是 F（p&q），即 p 和 q 将会发生，要么是 F（p&Fq），即 p 将会先发生然后是 q，要么是 F（Fp&q），即另一种情况。用一个公式表示：（Fp&Fq）→（F（p&q）或 F（p&Fq）或 F（Fp&q））。以完全类似的方式，构建这样一种语言是空间逻辑希望为几何学实现的目标，因此与我们将在第 3 节讨论的提议相关。

一种不同的逻辑方法是将几何中的可构性与逻辑中的可构性联系起来。Naibo（2015）是一个很好的例子，导致了对几何的一种特殊观点，作者声称“欧几里德几何可以被看作是一个理论，其本体不是由一组扮演语言表达参照角色的外延对象组成，而是由由构造性行为代表的内涵对象组成，这些构造性行为对应于算法过程”（Naibo 2015, 158）。这种方法与 Suppes 的建设性、更具体和非内涵方法有关，详见第 2.3 节。

### 1.2 数学家

一个数学家可能会研究现有理论的离散或有限对应部分，只是为了看看在这两种情况下仍然可以证明哪些定理。从所谓的逆向数学的角度来看，这本身就很有趣。核心问题是找出证明某些定理必需的条件是什么？例如，参见Simpson（2005）和Stillwell（2016）。在离散几何中也成立的证明与关于离散性或连续性的任何假设无关。然而，人们可能会深入数学基础并从基础的角度研究有限几何。其中一种方法是严格的有限主义（尽管有时也使用超有限主义或超直觉主义这些术语），它并不是其他基础理论的子理论，而是一种独立的替代理论。它与构造主义的许多形式共享这样一个基本观点，即数学对象和概念必须以数学家可以执行或进行的构造方式来访问。这些不同形式在“执行”或“表现”概念的理解上有所区别。大多数构造主义者允许潜在的无限，即如果一个过程或算法将在未来某个时刻（可以证明地）终止，那么结果就被接受为可构造的。有关概述和构造数学条目，请参见Bridges＆Richman（1987）。严格的有限主义希望更进一步，并认为不确定的结果不应被接受为结果，因为由于所有计算资源都是有限的，很可能在达到结果之前这些资源已经耗尽。这一额外的限定有助于与希尔伯特的有限主义区分开来，后者大致可以看作是元层次上的一种有限主义形式。, 尽管数学理论可以讨论无限结构，但在这些理论中的证明必须具有有限长度）。严格的有限主义在数学哲学中并不受欢迎。尽管如此，已经提出了许多建议。关于实际情况（尽管现在有些过时）的历史和描述可以在 Welti（1987）中找到。在第 2 节中将进一步讨论这些提议。

### 1.3 计算机科学家

在计算机科学中，提出的理论和建议与逻辑和数学的性质完全不同，尽管它们相互启发。这里面临的问题恰恰是要从经典几何类比模型转换为一个模型，其域（通常）由构成（计算机）屏幕的有限像素或单元格组成。显而易见的缺点（从这篇文章的角度来看）是几乎所有这些模型都假定背景中存在经典（无限）模型，因此它们没有自己的适当基础——这与数值分析依赖经典分析来证明程序正确性的情况非常类似。最关注的问题是证明原始模型与离散模型之间的对应关系，以确保获得的图像在某些方面与原始图像保持一致。一个简单的数学例子涉及三维欧几里得表面上的孔的数量。人们希望确保数字图像中出现的每个孔确实对应于原始数学对象中的一个孔。有关更多示例，请参阅Borwein＆Devlin（2009）。然而，值得一提的是，一些工作并不希望依赖经典连续背景，而是寻求像素几何的“适当”公理化和/或形式化。有关一些很好的例子，请参阅Kulpa（1979）和更近期的Danielsson（2002）。

另一种调查领域涉及使用 mereology（请参阅本百科全书中的 mereology 条目以获取概述）作为对古典几何学的替代方法，通常称为 mereogeometry 或 mereotopology。其主要特点是不将点视为原始概念，而是一个区域，通常具有有限的延伸（或未指定）。主要动机在于认知心理学和计算机科学之间的互动。视觉感知和认知的建模是一个主要例子。尽管与有限几何有明显联系，但目前并未真正进行研究。Galton（1999）和 Schmidtke（2016）是罕见的例子。在 mereogeometry 和拓扑学以及第 2.2 节中提到的“自然几何”之间也可以找到并探索平行和联系。

还要注意，这些理论不应与具有推理几何对象能力的计算机程序混淆。这是自动推理研究领域的一部分—请参阅 Chou 等人（1994）进行简要介绍，以及本百科全书中的自动推理条目—其基本对象是证明，而不一定是证明所涉及的数学对象。

### 1.4 物理学家

众所周知，物理学中的热门话题之一是寻找量子（场）理论和广义相对论的统一。如果成功，将产生著名的“万物理论”。众所周知，要解决的最困难的问题是如何处理时空。量子（场）理论需要空间和时间作为背景，而在广义相对论中，时空的结构在很大程度上由质量和能量决定。一种解决方法——第3节的大部分内容都涉及这样的例子——是找到一个潜在的“更深层”结构，它潜在地生成空间和时间，从更基本的概念中。显然，如果找到这样的理论，它不仅仅会产生“只是”一个模型，而且实际上会被认为是对现实的真实表达。这些模型中的大多数，尽管其中一些在目前可能是推测性的，最终都是离散的，因此这些提议与逻辑学家形成对比，它们声称是正确的描述。有关最近的非正式概述，请参阅Rovelli（2016），特别是第11章，“无限的终结”。

有限主义

### 1.5 Philosophers

从一个相当直接的意义上讲，以上所有内容都涉及到哲学家们。关于逻辑系统、基础数学理论、Zeno 悖论、超任务、模型和表示是什么等讨论，通常属于哲学家的领域。此外，他们还引入了来自其他哲学和/或科学领域的论点。假设有出色的认识论或本体论观点，声称世界应被视为离散的论据，那么这些论据可以支持对这种离散世界观的探索，包括离散几何的阐述。即使从数学角度来看，这个理论看起来相当笨拙或难以处理，但由于哲学上的考虑，它必须如此。在没有这样的支持性论据的情况下，一个人在这种情况下的立场将会更加薄弱。最后，他们还关注问题的历史方面。令人惊讶的是，但这里不会介绍，看到在我们历史过程中已经提出了许多建议，以证明空间、时间和人应被视为有限和/或离散。例如，参见 Sorabji（1983）和 Moore（1993）以获取出色的历史概述，White（1992）以获取 20 世纪的发展，以及 Franklin（2017）、Lyons（2017）和 Sewell（2022）以获取一些最近的贡献。

如前所述，这五个群体是最重要的，因此尚未证明完备性，互斥性也没有得到展示。这个简短的概述只是为了列出涉及各方的不同意图、动机、目的和方法论。

## 2. 有限主义几何作为直接类比。

要解决的第一个问题是经典理论将是什么。由于大部分已完成的工作都局限于平面，因此本演示也将局限于该特定情况（在大多数提议中，将平面几何推广到更高维度被认为是非常直接的）。但这还不够，因为有不同的路线可供选择，以展示平面几何。一种可能性是采用（欧几里德）平面的任何公理化——比如，希尔伯特在他的《几何学基础》中于 1899 年的表述——并展示需要做出哪些改变才能获得（a）公理化理论的有限模型，以及（b）尽可能接近经典（无限的，欧几里德）模型的有限模型。非常早期的一次尝试可以追溯到 40 年代末、50 年代初，因此将在这里作为一个典范进行介绍（因为它具有所有所需的积极品质以及似乎与此类尝试相伴随的怪异之处）。更具体地说，这涉及到保罗·库斯坦海莫（Paul Kustaanheimo）与 G. Järnefelt 在 1949 年至 1957 年间部分合作的工作。接下来将讨论一个提议，完全不同的方法，帕特里克·苏普斯（Patrick Suppes）的提议，以及约翰·伯克（John Burke）最近的类似方法。然后是一种相对较旧的提议，由鲁德维克·西尔伯斯坦（Ludwik Silberstein）提出，其中几何直接嵌入到一个物理理论中，确切地说是狭义相对论。本部分的结尾部分涉及一些具体问题和试探性解决方案。

### 2.1 欧几里德平面几何的标准公理化

有限主义下的希尔伯特类型公理化是什么样的？首先要做的是确定一个（形式）语言。通常会选择包含变量名称（以及可能的常量名称）、函数名称（如果需要）、包括恒等谓词在内的谓词名称、逻辑连接词和量词，以及一组语法规则来形成句子的一阶谓词逻辑。限制为一阶逻辑意味着只能对变量进行量化。不详细展开，应该指出可以选择更具表现力的语言，例如，也可以允许对谓词进行量化。

选择了语言后，下一个问题是确定语言的原始术语。对于平面欧几里得几何来说，这些术语是点和线，尽管有时将线定义为特定的点集。接下来必须选择基本谓词。目前存在许多不同的公理化方法。最常用的谓词是：关系关系（“点 a 在线 A 上”）、介于关系（“点 a 介于点 b 和 c 之间”）、等距关系（“点 a 到 b 的距离与点 c 到 d 的距离相同”）、全等关系（“由两点 a 和 b 确定的线段与由两点 c 和 d 确定的线段全等”）。请注意，并非所有这些谓词都必须出现在公理化中。例如，如果线段不是作为原始术语引入的，则通常不会有关系关系。

下一步是引入一组公理来确定上述关系的某些属性。例如，如果公理化使用了关系关系，则该关系的典型公理为：

* 通过两点可以准确地画出一条直线。
* 每条直线上至少有两点。
* 至少有三个不在同一直线上的点。

最后，人们寻找公理化的解释或模型。这意味着我们寻找原始术语的含义，比如点和线，函数（如果有的话）和谓词，使得公理相对于解释成为真实陈述。尽管在开发公理化时我们经常心中有一个特定的解释，但这并不排除存在相当意外的模型的可能性。在某种意义上，有限主义模型依赖于这种可能性，正如下一段所示。

### 2.2 芬兰学派和自然几何

保罗·库斯坦海莫（Paul Kustaanheimo）是赫尔辛基一群数学家中的一员，他们都对某种形式的有限几何感兴趣。最杰出的成员包括 G. Järnefelt、P. Kustaanheimo 和 R. Lehti。他们的灵感来源可以在 J.T. Hjelmslev 的工作中找到，他发展了所谓的“自然”几何（参见他 1923 年的著作《Die natürliche Geometrie》），有时也称为“物理”几何（正如前面提到的，与部分整体论有关）。他们的方法并没有得到延续，一个例外是 Reisler 和 Smith（1969 年）。然而，以一种奇怪的方式，与 Suppes 和 Burke 的方法存在联系，后者将几何主要视为（几乎是）一门实验科学，即，几何学家处理尺规，创造平面以测量等。当然，由于我们人类只能以有限的方式操纵有限的对象，必然会导致离散几何。

Kustaanheimo 的提议——我在这里粗略概述了他在 Welti（1987: 487–521）中的出色提议的优秀展示，比起原始作品更易理解——基于以下推理。古典公理化欧几里德几何理论的标准模型由实数与自身的笛卡尔积组成。或者，通常表述为，平面上的一个点被映射到一对实数，即其坐标。实数具有无限域的数学结构。但有限域也存在。那么，为什么不用有限域，即所谓的伽罗瓦域，来取代无限实数域呢？

可以获得的最佳结果是，每个有限伽罗瓦域都满足欧几里德几何的大部分公理。然而，情况并非如此。Kustaanheimo 研究的结果略微复杂：

* 并非所有有限域都适用。如果我们将有限域的定义域中的元素数量称为 p，则 p 必须满足一些条件。这意味着只有特定大小的有限域，即特定的 p 值，才是潜在候选者。
* 对于“好”的 p 值，完整模型是行不通的。举个例子，以直线为例。根据有限主义领域中对它们的定义，结果表明有两种直线：开放和封闭的。后者违反了一些公理，因此你将模型限制在开放的直线上。这种对模型的限制被称为模型的欧几里得“核”。

简而言之，不能声称任何有限主义领域都可以，只有一些，而且仅仅是其中的一部分。

这种方法引发了一些重要的哲学问题：

* 显然，模型的大小是一个重要特征。这是否有任何意义？或者，反过来说，不同大小的字段为什么不适合作为模型？假设欧几里得几何是宇宙几何结构的一个好模型。宇宙必须恰好包含 p 个点（不是 p-1，也不是 p+1），这种说法有意义吗？一种新型的毕达哥拉斯主义似乎潜伏在这里。
* 直线的例子表明存在“好”的几何对象（满足大多数公理的对象）和“坏”的几何对象。忽略坏对象也许是一个在数学上有趣的策略，但这并不会将它们从完整模型中消除。换句话说，尽管它们在模型的“核心”中没有起到任何相关作用，但它们确实存在。这意味着什么？继续上面的思想实验，问题是宇宙中的“坏”对象对应什么？如果它们不对应任何东西，为什么我们需要它们来找到“好”对象？

为了捍卫库斯坦海莫的方法，必须说无限模型与有限模型之间的联系通常比人们预期的复杂得多。有限模型不仅仅是无限模型的缩小版本。很多时候会出现不同的结构。打个比方，拿（无限集合的）自然数。取一个有限部分，比如从 1 到 L 的数字。在有限情况下，与 L 相比谈论小数和大数是有意义的。这在经典情况下是不可能的。因此会发现额外的结构。比喻地说，通过使事物有限，会出现更详细或“细粒度”的结构，在无限存在时会被抹去。也许“好”和“坏”几何对象之间的区别就是这样一个在古典欧几里得模型中消失的额外特征。因此也许质数确实具有重要意义。但问题仍然存在：这是一种新的毕达哥拉斯主义吗？有关库斯坦海莫方法的更多细节可在补充文件中找到：有限域作为欧几里得平面几何模型。

### 2.3 有限主义方法

苏普斯方法的独创性在于他提议将几何形式化为一种构造实践，类似于赫尔姆斯勒的工作，但又有所不同。这里所说的构造是指以制图或图表的基本意义来理解，使用某些工具，如尺子和/或圆规，并不是现代意义上的基础术语，即几何的构造性，公理基础。

从有限主义的严格角度来看，有两个重要因素。首先，构造可以以无限定词的方式制定；表达“画一条线”并不意味着我们需要讨论平面上所有线的完整集合。“画一条线”将导致一个特定的有限对象，即例如纸张上的一条线段。其次，考虑的所有模型都将是有限的，因为无论进行何种构造，起点始终是一个有限点集。

Suppes 认为有两种基本操作：操作 B，对应于将线 ab 二等分；操作 D，对应于将线 ab 加倍。构造中的步骤 Ci 包括三个元素：第一个元素是要构造的（新）点，第二个元素是已经存在的一对点，第三个元素是根据所选操作是 B 还是 D。起始位置包括三个给定点 a、b 和 c。

例子：考虑由两个步骤组成的构造((d,ac,B),(e,bd,D))。第一步是从 ac 开始构造中点 d，第二步是取线段 bd 并加倍。图示表示清楚了正在发生的事情。

![Points a, b, and c form a triangle, line segments ab and bc are solid lines, line segment bc is dashed Point d lies midway on the line segment bc The dashed line segment bd extends further to point e](https://plato.stanford.edu/entries/geometry-finitism/figure1.png)

 图 1

从三元组 a、b 和 c 开始，我们构造了平行四边形 abce。

当然，仅仅列出一组构造是不足以讨论几何理论的，因此必须展示，正如 Suppes 所做的那样，形式公理化处理是可能的。只需列出关于 B 和 D 运算的一组必要公理，就可以证明上面示例中绘制的图形确实是一个平行四边形。此外，还证明了一个表示定理，使得点被赋予有理坐标。

有限主义

> my own conviction is that one can go the entire distance, or certainly almost the entire distance, in a purely finitistic way, … (2001: 136)

Secondly, the focus on constructions opens up a novel way to deal with the problem of the distance function. We do not need a general distance function, but, for each separate case, we have to be able to attribute coordinates to the points present in the diagram and nothing more. It remains to be seen however whether the basic operations, B and D, can be extended without losing this important property.

由 Burke (2022) 提出了一个更近期的建设性提议。虽然与 Suppes 提出的相似，但至少有一个主要区别。Burke 只谈论点，而不谈论线（即，将线缩减为有限数量的点以识别它们）。形式语言包含基本运算或构造和基本关系。前者涉及：（C1）（有向）线段延伸，（C2）横杆（由线 cd 上的两点 a 和 b 形成的“线”与线 cd 相交于一点），（C3）角度传递，（C4）圆与圆的交点，以及（C5）直交。后者包括：（R1）著名的介于关系，（R2）线段全等，（R3）相同角度方向，（R4）角度全等，以及（R5）共面性。与 Suppes 一样，Burke 也出于同样的原因使用无量词的一阶谓词逻辑。还有两个额外的特点需要提及。第一个是每个构造都从有限区域内的有限数量的点开始。然后他证明，无论进行何种基本构造，最终区域的大小最多会加倍。第二个是他的方法很容易从平面扩展到三维空间。

在这里也可以对 Burke 的方法中距离函数的可能性提出类似的评论。在第 2.5 节中，我将单独讨论这个问题，并讨论如何在有限主义设置中处理这个问题。然而，首先从物理角度考虑一个完全不同的方法。

### 2.4 一个直接的物理示例：特殊相对论理论的离散版本

1936年，Silberstein提出了一个相当直接的有限主义理论。在物理学中，我们唯一使用的是标签x、y、z、t，当离散时，这些标签总是可以用整数标记。在汇集了关于这一主题的五次讲座的简短小册子中，Silberstein将自己限制在一个空间参数和一个时间参数上。尽管他承认了更高维度的问题（1936: 15），但他并没有处理这个问题。因此，在一条线上，离散距离函数和欧几里得距离函数重合，距离问题变得相当平凡。他的提议是基本的，即最小距离，即两个相邻点xi和xi+1之间的距离等于1，时间坐标也是如此，因此1成为最大速度，等于c，所以c=1。导数的类比被定义，微分方程被替换为差分方程，泰勒级数的有限差分类比被推导出来，大部分经典物理学可以被模拟。值得一提的是，这些讲座包括对chronons的大小进行粗略计算，即最小时间单位，以及hodons，即最小的（一维）空间单位。假设a是一厘米中hodons的数量，b是一秒钟中chronons的数量，那么(1/a)(1/b)=ba=c=3.1010cm/s，或b=3.1010⋅a。如果我们为a设定一个下限，比如10^-8厘米（这实际上是Silberstein的建议！），那么b=3.1010⋅a≥3.1018，即一秒钟中chronons的数量。他进一步将离散时空框架应用于特殊相对论，这里也找到了一个类比。在这种方法中相当有趣的一点是，出现了在经典情况下不需要的额外条件。这里是一个例证。

狭义相对论依赖于表达式，这里限制为一个空间维度，即 x2−c2t2。因此，对于任何新坐标 x′、t′ 的变化，必须满足 x2−c2t2=x′2−c2t′2。假设我们写成 x=ax′+bt′ 和 t=cx′+dt′，那么逆关系将为 x′=(dx′−bt′)(ad−bc) 和 t′=(ax′−ct′)(ad−bc)。然而，如果 x、x′、t 和 t′ 都必须是整数，那么必然有 ad−bc=1。这最后一个条件纯粹是因为我们在以有限主义的方式思考，使用整数。

### 2.5 处理部分解决方案和问题

在本节中，将讨论三个特定问题，这些问题需要解决，如果要认真对待有限几何的任何提议：距离函数问题、维度问题、各向异性问题和识别问题。

有限主义下的距离函数问题。有一个相当具有破坏性的论点表明了离散几何中真正距离函数的不可能性。这个论点可以追溯到 1949 年，首次由赫尔曼·维尔(Hermann Weyl)提出：

> 如果一个正方形是由微型瓷砖构建的，那么沿对角线的瓷砖数量与沿边的瓷砖数量相同；因此，对角线的长度应该等于边长。(维尔，1949: 43)

对这个问题至少有三种解决方案被提出。

Van Bendegem (1987)认为，在有限几何中，线和点应具有延伸是一个基本事实。特别是，线应该具有恒定的宽度（与线的方向无关）。因此，ND 代表一个大（有限）数，对应于形成 ND 的正方形的数量。给定一条线，宽度总是定义为垂直于该线。现在假设该线的方向对应于线与 x 轴之间的角度α。那么当该线在 x 轴上投影时，该线的宽度 ND 将为[NDsinα]，其中表达式[x]表示小于或等于 x 的最大整数。

![a grid with two parallel lines going from upper left to lower right, near the bottom is a horizontal line crossing both lines its angle with the left parallel line is labelled with an alpha symbol Above a horizontal line segment connects the two parallel lines and another line segment ND/sinalpha has an arrow pointing to this goes from its intersection with the right parallel line to a point on the left parallel line below ND has an arrow pointing to this line segment The angle between the first line segment and the left parallel line is labelled with an alpha symbol](https://plato.stanford.edu/entries/geometry-finitism/figure2.jpg)

 图 2

两点 p 和 q 之间的距离 d 然后被定义为由从 p 到 q 的线和宽度 ND 形成的矩形中的正方形数量除以 ND。这个想法是，尽管在离散几何中线必须必然具有宽度，但这不是一个必要的特征，因此可以除去。因此：

d(p,q)=NL⋅[NDsinα](divND).

在这里，NL 对应于 p 和 q 之间与 x 轴平行的层数，n(divm)是 n 除以 m 的商。

作为一个例证，考虑 Weyl 问题。

![a grid with two long rectangles, one oriented top labelled 'p'/bottom labelled 'q' on the long axis and one oriented left labelled 'q'/right labelled 'r' on the long axis; they overlap on the bottom side of one and the left side of the other A long parallelgram overlaps on the top side of one and the right side of the other The long sides of both the rectangles are labelled NL and the short sides, ND A horizontal line segment from one side of the parallelgram to the other is labelled 'sqrt2Nd' The angle of intersection between the parallelgram and the left/right rectangle is labelled 'alpha=pi/4](https://plato.stanford.edu/entries/geometry-finitism/figure3.jpg)

 图 3.

我们有一个直角三角形 pqr，简单起见，右边 pq 和 qr 相等，并与网格的坐标轴对齐。假设右边的正方形数量为 NL。那么

d(p,q)=d(q,r)=NL⋅[ND](divND)=NL,

有限主义，当然，[ND] = ND。然而，斜边的角度为α=√22。因此，

d(p,r)=NL⋅ NDsinα=NL⋅ √2⋅ND=NL⋅[√2]n，

其中[r]n 表示数字 r 的小数点前 n 位。不需要计算即可证明（近似）毕达哥拉斯定理成立，即 d2(p,q)+d2(q,r)=d2(p,r)。最后，很容易解释韦伊尔问题发生的原因：它对应于极限情况 ND=1。当 ND=1 时，那么[√2⋅ND]=[√2]=1，因此 d(p,r)=NL⋅1=NL，毕达哥拉斯定理失败。

虽然引入宽度 ND 显然解决了问题，但问题的缺点同样明显。在没有古典欧几里得几何学的背景下，实际上无法进行构造。在离散几何本身中没有线的定义，最重要的是，线 L 在 x 轴上的投影宽度是根据未明确提及的欧几里得距离函数计算的。简而言之，存在两种距离函数的混合。

Peter Forrest（1995）提出了另一种解决方案。他首先引入了一组离散空间 En,m，其中 n 对应于空间的“经典”维度，m 是一个比例因子，可以理解为：m 是一个参数，用于确定两点何时相邻或不相邻，这是他的几何学的基本（也是唯一的）概念。因此，在 n=2 的情况下，点由整数对 (i,j) 标记，如果它们不同，则点 (i,j) 和 (i′,j′) 相邻，且 (i−i′)2+(j−j′)2≤m2。

一旦邻接性被规定，就可以轻松地推导出一个距离函数：点 p 和 q 之间的距离 d(p,q) 是连接 p 和 q 的一系列点中“链接”数量最少的数字，使得每个点都与前一个点相邻。接下来，没有问题可以表明通过两点的直线是具有最短距离的点链。

如果参数 m 的值较小，则得到的距离函数不是欧几里得的。更具体地说，如果 m=1，则我们再次遇到了魏尔所提出的情况。但是，如果说 m=1030（由 Forrest 自己提出的数字），那么情况就会改变。然后可以证明，在离散空间上的距离函数会无限接近欧几里得距离函数。不需要展示所有细节，可以证明欧几里得距离函数 dE 和离散距离函数 d 之间存在一个比例因子，即 dE(p,q)d(p,q)=constant(m)，其中常数由 m 的值确定。再次无需进行计算，就可以证明原始距离函数 d 满足毕达哥拉斯定理。

如果在这种方法中寻找弱点，那么不可避免地会导致邻接的基本概念。为什么要用欧几里得术语来定义邻接？毕竟，诸如 (i−i′)2+(j−j′)2≤m2 这样的条件看起来就像是欧几里得的。Van Bendegem (1997) 中提出了一种可能的解决方法。离散方法的一个优点——事实上，这似乎普遍适用于严格的有限主义提议——是在严格的有限主义框架中，经典上等价的定义最终会变得不同。更具体地说，一个圆可以用（至少）两种方式定义：

1. 作为到固定点距离固定距离的点 p 的集合
2. 作为点集 p 的集合，使得给定固定线段 ab，由 apb 形成的角是直角。

从古典角度来看，这两个定义是等价的。然而，在离散几何中并非如此。例如，如果将距离函数定义为连接两个给定点的最低霍顿数，则这两个定义并不等价。使用定义（a），圆将呈现为正方形的形状（在所谓的出租车几何中是众所周知的事实），因此无法像上面那样定义邻接性。另一方面，定义（b）产生的图形可以无限接近欧几里得圆。这样，Forrest 对邻接性的定义在离散框架内是可以接受的，因为没有涉及欧几里得距离函数。

第三种解决方案可以在 Crouse 和 Skufca（2019）中找到，该文提出了一个有趣的综合方案，以解决距离函数问题。他们建议的是一种物理解释，使三件事成为可能。首先，它允许以普朗克长度和时间为单位确定霍顿和时间的最小尺寸。其次，它建议根据“测试”霍顿行进的距离来定义从 A 到 B 的距离（当然是以离散的最小步骤）。这立即解决了各向异性问题，因为没有方向被特权化。第三，它不假设网格（或类似结构）的先验存在作为绝对参考框架。这使得有可能重新阐述特殊相对论理论，他们也这样做了。尽管没有提到 Silberstein 的方法（见上文 2.4 节），但显然相关，并且可以被认为是一种改进，因为物理基础在哲学上更有动机。

如果这些提议和建议被认为是对维尔瓷砖问题的充分回应，最近另一个无法实现方法（以及相应的定理）可以在 Fritz（2013）中找到。从一个抽象的周期图形式开始，即一组顶点和一组边。对于实际目的，周期性可以被视为晶体结构。这意味着我们有一个可以通过基本单元的迭代副本覆盖整个图形的基本有限单元。以二维结构为例。顶点可以用两个数字（i，j）标记或“加权”。一个轨迹（fn）n∈N 是一系列顶点权重的序列，使得携带 fn 和 fn+1 的顶点由一条边连接。接下来我们定义这样一个轨迹的（宏观）速度为

u=limn→∞(fn−f0)n,

这听起来完全可以接受。例如：轨迹 fn=(n,0)，从 f0=(0,0) 开始，将具有宏观速度 1，因为 fn−f0=(n,0)，除以 n，得到 (1, 0)。不详细讨论，他随后表明，在这样一个图形中所有（宏观）速度的几何结构不能对应于欧几里得空间。原因非常简单（尽管证明并非如此）：在图形中总会有被单独指出的“特殊”方向，各向异性将在宏观水平上仍然可检测到。因此，从离散水平过渡到宏观连续、欧几里得和各向同性水平是被排除的。这是一个真正有趣的结果，因为它给所有试图从离散到连续水平进行直接、通常相当天真的过渡的尝试蒙上了阴影。同时，它支持更复杂的从微观到宏观水平的过渡，例如，通过考虑线的宽度。

维度问题。虽然这是基本问题，但并未受到太多关注。如果平面由离散的元素、hodons或原子组成，那么这个集合的维度必须为零。因为为了确定维度，这个集合必须具有拓扑结构，而唯一可能的候选者是离散拓扑。这意味着维度为零。要么选择根据维度的概念预设连续性和拓扑概念，因此没有有限主义意义的论点，简单地放弃维度的概念。要么寻找类似物，但目前尚不清楚可能是什么。不应尝试从排序关系中推导维度的概念。假设hodons在某个适当的坐标系中由整数(i,j)标记，使得−L≤i, j≤L，其中L是某个上界。那么可能存在完全不同的排序关系。一种可能性是定义(i,j)<(k,l)当且仅当i+j<k+l。但另一种可能性是定义(i,j)<(k,l)当且仅当i<k或者，如果i=k，则j<l。因此，需要额外的论证来声称在给定集合上的所有可能的排序关系中，只有一个具有特殊地位。然而，在第3节中，我们将看到，使用图论工具确实可以给出维度的定义。

有限主义问题。如果平面是由方形 hodons 构建而成，如上文所述，那么 hodons 被安排在这样一种方式，即每个 hodon 接触其他四个 hodons，即，平面可以被建模为一个方形网格，那么很明显会有优选方向，在这种情况下，将会有两个优选方向。然而，如果取六边形作为 hodons，那么将会有三个优选方向。因此，无论 hodon 的形状是什么，都会有优选方向，这意味着空间是各向异性的。请注意，这些情况只是 Tobias Fritz 的一般方法的特殊实例，如上所讨论的。然而，对于物理应用，人们希望具有各向同性（或至少尽可能接近）。

有两种可能的方法，不属于 Fritz 不可行定理。要么 hodons 具有明确定义的形状，要么没有。在第一种情况下，有人建议，与其寻找平面的规则周期铺砌，不如寻找一种不规则的非周期铺砌，比如彭罗斯铺砌。

![penrose tile patter, a large number of several different types of parallelgrams which mesh together in groups of 10 to form multiple 10sided figures and groups of 3 to form multiple interlacing 6sided figures](https://plato.stanford.edu/entries/geometry-finitism/figure4.jpg)

 图 4

尽管没有可用的具体示例，但这似乎是一种有前途的攻击方式。在 Penrose 铺砌的情况下，有趣的是看到不再有经典的直线，这正是由于非周期性。在第二种情况下，模糊性是一种可能的解决方法。正如 Peter Forrest 在他的（1995）和 Crouse 以及 Skufca 在他们的（2019）中所辩护的那样，将离散空间的具体表示的整个概念，例如，作为由微小正方形构建而成，是根本错误的。如果一个 hodon 有一个具体的形式，那么就不可避免地会问及 hodon 的部分，比如它的边界，但如果 hodons 是可能的最小空间实体，那就没有意义。在 Van Bendegem（1997）中提出的一种中间立场是考虑一系列离散几何 Gi，每个都有一个特定大小 hi 的 hodon，使得 hi≠hj，对于 i≠j，并且还有 M 和 N，使得 M<hi<N，对于所有 i。然后可以将超估技术应用于这个系列。这意味着如果一个陈述在每个几何 Gi 中都是真（假），那么它就是真（假）。在所有其他情况下，它是未决的，即在某些情况下为真，在其他情况下为假。现在如果 A 是陈述“hodons 的大小是 α”（其中 α 是一个具体的数字），如果 a 对应于至少一个 hi，那么这将是未决的。然而，这种方法将所有与模糊性相关的问题引入讨论，这并不一定是一个令人鼓舞的情况。对于这个问题，也可以从图论框架内给出一个原创答案。

识别问题。假设我们确实拥有一个完整的离散几何，并假设我们用离散版本替换了物理理论的经典几何。我们现在将讨论 hodon 和 chronon。产生的“自然”问题是什么与什么进行识别？想象一下，按照 Silberstein 的观点，我们有点天真，并且会倾向于将 hodon 与普朗克长度 lp=10^(-35)米以及 chronon 与普朗克时间 tp=10^(-43)秒进行识别。如果现在接受最大速度是每个 chronon 一个 hodon，那么从这种识别中得出的结论是最大速度确实是 c=3.108 米/秒。（注：这里没有发生什么惊人的事情，因为在经典物理学中，lp 被定义为√ℏG/c^3，tp 被定义为√ℏG/c^5，因此很明显 lp/tp=c。现在问一个简单的问题，接近 c 的下一个速度是多少？答案必须是：每两个 chronon 一个 hodon，但这意味着速度为 c/2。我们似乎错过了 c/2 和 c 之间的整个范围。有一种解决方法，但它假设“抖动”运动是可能的，这是一个审美上相当丑陋的想法。一个物体在两个 chronon 内移动两个 hodon，然后等待一个 chronon，然后重复相同的运动。平均速度为 2c/3。一种可能的解决方法，将在第 3.2 节中简要提到，是在结构中引入随机元素。要全面了解这个主题的复杂性，超越仅仅是数值关系，请参阅 Hagar（2014）的出色概述和讨论。

## 3. 将离散几何作为经典几何的生成器

### 3.1 一般框架

如第 1 节所述，我们将讨论寻找一个几何理论或模型的提议，从而可以推导出经典几何概念。显然，我们需要非常小心，因为“危险”不断存在，无限可能会在某个看不见或未注意到的地方出现。假设，举个简单的例子，只允许一组有限点存在，但也允许一个操作，在任意一对点之间生成一个与所有现有点都不同的第三点，并且对操作的应用次数没有限制，那么很明显，我们在这里有一个“伪装成”无限数量点的情况。将这样的模型称为离散几何模型似乎相当不恰当。

人们还需要非常小心，例如，声称量子力学处理离散值，通常与海森堡不确定性原理有关，因此基本层次的物理是离散理论。然而，这是极其误导的。只需查阅任何一本量子力学手册，就会发现所使用的数学需要充分利用无限。无论是使用海森堡的矩阵方法、希尔伯特的算子形式主义、薛定谔的波动方程还是其他形式主义，数学都涉及积分、导数、无限（收敛）和、无限维空间等（请参阅量子力学条目）。在这里找不到太多的离散性。这意味着对于量子力学来说，找到一个离散对应物也是一个真正的问题。这清楚地由赫夫特（Gerard ’t Hooft）试图以真正的离散方式重新阐述量子力学所证明，参见 ’t Hooft（2014）。有趣的是，这影响了确定性与不确定性等问题。

从历史的角度来看，毫无疑问，图里奥·雷吉（Tullio Regge）的工作可以被视为发展几何概念的模型的首次尝试。原始论文可以追溯到1961年，参见雷吉（1961）。更具体地说，我们在这里关注的是广义相对论理论（GRT）。尽管雷吉最初的意图是构建解决GRT方程的技术，即在“困难”情况下，即没有对称性存在且微扰理论不适用的情况下。雷吉并没有将GRT的微分方程转录为差分方程，而是寻找一种导致完全不同方程的技术。在不呈现完整细节的情况下，他的方法的核心概念是“亏角”。在GRT中，我们处理的是曲面。以二维曲面为例。如果它是平坦的，那么可以用三角形覆盖它。如果它是弯曲的，可以用三角形近似，但有一个重要的区别。假设三角形在顶点相遇，那么我们可以看一个特定点以及所有在该点相遇的三角形。如果曲面的这一部分被展平，将会有一个缺口。这个缺口对应一个角度，这正是亏角。曲率越大，亏角越大。同样的技术也适用于四维情况，其中使用简单形式代替三角形。这种方法的美妙之处在于，GRT的方程可以用亏角和简单形式的边长来重新表达，并用这些概念解决。Misner等人（1973）的一章（第42章：“雷吉微积分”）以简洁而完全可理解的方式解释了雷吉的方法。

今天有相当多的尝试正在进行。其中大部分被认为是高度推测性的，因为它们确实反映了正在全面发展中的现状。然而，还有一套逐渐开始出现的方法，似乎是有限主义几何学观点（即时空方面）的可行候选者和感兴趣的对象。值得注意的是，对于相关作者来说，他们的主要目的并不是制定一种离散形式的几何学，而是要建立这种或那种模型是否将作为量子（场）理论和广义相对论的共同基础，从而可以说是整个物理学，或者说，“万物理论”的基础。我们在这里实际上更为谦虚：这些模型是否告诉我们有关如何制定离散几何以产生经典几何的任何信息？因此，即使物理学家基于充分的物理原因拒绝这样的模型，它仍可能对离散几何的可能性问题感兴趣。

Huggett & Wuthrich（2013a）对当时情况的剩余集合进行了很好的概述。值得一提的是，这篇论文是特刊《Huggett & Wuthrich（2013b）》的一部分，专门讨论了量子引力理论中时空的出现。总体上，他们讨论并评估了六种提议，但我们这里只考虑三种。剩下的三种要么在目前太过推测性，要么不涉及离散时空（如弦理论和非交换几何）。对于我们的主题相关的三种方法是：

* 格点时空：这在某种意义上接近于 Regge 的方法，连续空间（和时间）被离散结构取代，即格点。如果这些格点配备某种形式的——显然是离散的——度量，连续和离散空间（和时间）之间的联系就会非常紧密。下一节将提出这样一个建议（不涉及物理学），
* 非度量格点：这个标题下最著名的例子是因果格点。格点中“点”之间的联系是因果关系，这需要更多的工作来从中推导出时空结构。事实上，在许多情况下，我们有所谓的无解定理，即离散格点“无法具有类似相对论时空的良好连续极限”（第 278 页），因此“回应”了 Fritz（2013）已经提到的负面结果，
* 环形量子引力：这个理论是认真对待的统一量子（场）理论和广义相对论的尝试之一。基本结构是所谓的三维自旋网络。如果允许这些网络随时间演化，那么会出现一个四维结构，即所谓的自旋泡沫，最终应该生成相对论时空结构。这里应该插入一个警告：尽管自旋网络的结构是一个带有一组节点和一组边的图，但是这些节点和边被标记为涉及连续结构（如李群）的物理上有意义的量。不详细介绍，Reisenberger（1999）的这段简短摘录非常具有说明性：

  > 一般来说，自旋网络的边缘携带规范群的非平凡不可约表示（irreps），而顶点携带相互诱导器。顶点的相互诱导器可以是由传入边缘携带的不可约表示的乘积和传出边缘上的不可约表示的对偶形成的乘积表示 R 的任意不变张量。（第 2047 页）
  >

为了欣赏这一研究领域的发展速度，人们应该比较已提到的 Huggett & Wüthrich（2013a）与另外两篇论文，一篇较早，一篇较新。前者是 Meschini 等人（2005），也是一篇概述性论文。有趣的是，Huggett 和 Wüthrich 将他们的概述描述为与这篇文章互补。后者是 Surya（2019），同样是一篇概述性论文。重点在于因果集方法。将此与 Smolin（2018）结合起来，其中讨论了量子环引力等内容，人们必须对已经达到的复杂程度印象深刻。重要的是要意识到，更加完全发展的方法从一开始就涉及物理学。奇怪的是，这些方法并没有在已提到的空间逻辑文献中研究，参见 1.1 逻辑学家。尽管如此，这两个研究主题之间的联系非常深刻和紧密，绝对需要进一步探索。

为了使上述高层次介绍更具体，简要介绍 Nowotny & Requardt（1999）的工作。尽管有点过时，但这是一个典型的例子，因为它展示了在物理学介入之前如何建立经典几何，从（因果）格点开始。

### 3.2 一个原型示例，使用图

起点是一个离散图 G=⟨N,C⟩，由节点集合 N={ni} 和连接集合 C={cij} 组成，使得没有节点与自身连接，节点 ni 和 nj 最多有一个连接。最明显的是如何定义距离函数，在几乎所有提议中，这确实是遵循的策略（类似于第 2.5 节中提出的定义）：

> D(ni,nj) = 从 ni 到 nj 导致的连接的最小数量。

很容易看出，距离函数的经典性质得到满足：

* D(ni,ni)=0，
* D(ni,nj)=D(nj,ni)，
* D(ni,nj)+D(nj,nk)≥D(ni,nk).

乍一看，应该如何进一步进行并不明显，但是，如果将 ni 和 cij 看作一种向量，那么可以形成线性组合，其中 fi 和 gij 是自然数或有理数，例如：

f=∑ifini and g=∑ikgikcik.

这两个表达式可以被看作是关于 ni 和 cij 的函数。现在需要的是节点和连接之间的关系，因此引入一个特殊函数 d:

d:ni→∑kcik.

如果我们以线性方式扩展函数 d ，使其可以应用于任意函数 f ，那么会发生什么将会非常有趣。

df=∑ifi∑kcik.

如果我们现在规定 cik=−cki (作为一种矢量方程，说明连接有一个方向)，那么上述表达式可以重写如下（考虑到，由于不允许有环， cii=0）：

df=12∑ik(fk−fi)cik

虽然这还有很长的路要走，但这个表达式已经具有一些很好的性质，让人想起函数 f 的导数：

* 它是线性的：d(f+g)=df+dg，
* 如果 f 是一个常数函数，即在每个节点 fi 处具有相同的值，那么很明显 f 常数时 df 为 0，
* 如果 f 是这样的，即在两个直接相关的节点 ni 和 ni+1， fi+1 = fi+1，换句话说，这表示 f(i)=i，那么 df 为 1，其中 1 是由 ∑ini 表示的函数。因此，恒等函数的导数是常数函数 1。

然而，如上述定义所示，乘积法则失败，即 d(f⋅g) 不等于 df⋅g+f⋅dg。

因此，在一定程度上，可以在离散图上构建一种基本形式的微积分。它确实需要一些独创性和创造性思维来找到“正确”的对应物，但这个简单的例子表明，可以从离散图中推导出相当多的结构。实际上还有更多。离散图为维度问题提供了一个不错的解决方案，这在第 2.5 节中提到过。这是这个想法的大致轮廓：

考虑一个节点 ni，那么 U1 是节点 nj 的集合，使得 D(ni, nj)=1，即 U1 将 ni 的最近邻节点聚集在一起。同样，我们可以定义 U2 为节点 nk 的集合，使得 D(ni, nk) 最多为 2。由此可知 Un⊆Un+1，因此我们得到了节点 ni 的一系列嵌套邻域。如果将维度理解为邻域“增长”的度量，那么维度可以定义为：

Dim=limm→∞ln|Um|lnm

这个定义的一个有趣特征是，它不需要在整个图上是均匀的，一切取决于初始节点 ni 的选择。但在图足够均匀的情况下，维度将是一个常数。此外，如果我们考虑一个经典情况，比如三维欧几里得空间，那么维度是匹配的。假设我们有一个规则的晶格作为基础图，那么一个特定节点的最近邻节点集合 U1 包括 33=27 个点，而邻域 Um 将计算 (m+2)3 个节点。因此

Dim=limm→∞ln(m+2)3lnm 或 Dim=limm→∞3⋅ln(m+2)lnm

由于对于足够大的 m，ln(m+2)lnm 近似于 1，因此 Dim=3。这表明，从离散图开始，我们得到了维度概念的扩展。可能已经注意到，这种定义类型与用于定义分形图像维度的某些定义非常相似。

此外，离散图使得处理各向异性问题成为可能。只需通过在网络中引入随机元素，例如通过对一组连接的节点取平均值，即可避免任何特定方向。这里显然与不规则平铺方案或引入模糊性存在相似之处，但重要区别在于统计和概率概念（相当）被理解，而平铺问题是一个未解问题，模糊性仍然是一个难以理解的概念（请参阅本百科全书中关于模糊性的条目）。

### 3.3 一个特殊情况：组合层次结构

认为上述不同尝试构成了一个完整的目录，可以对所有可能的方法进行分类，这是一个错误。在本段中，将简要介绍一种异国情调的例子，即组合层次结构。在这种方法中，重点不在于物理方程本身，而在于其中出现的物理常数，如光速 c、普朗克常数 h、电子质量 me 等。由于这些值必然是有限的，值得研究有限主义方法是否能解释为什么这些常数恰好具有它们的值。这些方法有时被称为“数字游戏”。

让我举一个非常简单的例子。从由有限数量的位（即 0 或 1）组成的宇宙开始，引入一个基本操作，即进行“区分”。为了表达这个操作，需要另一个操作：模 2 加法：0+0=1+1=0 和 0+1=1+0=1。如果结果是 0，则不区分和的元素，否则区分。现在看看包含 0 和/或 1 的集合，如果两个元素是可区分的，则该元素也属于集合。恰好有 3（=22−1）这样的集合：{0}，{1} 和 {0,1}。如果现在将这 3 个元素作为新的基础，而不是 0 和 1，一个巧妙的构造显示存在 7（=23−1）这样的集合，然后，127（=27−1）出现。现在 3+7+127=137，这个数字接近电磁耦合常数。

这个计划的成功相当有限，因为这些模型不容易与现有的物理理论相连接。关于这个计划的自成体系的介绍可以在 Bastin＆Kilmister（1995）中找到。这与 A.S. Eddington 的工作非常相似。毫不奇怪，Kilmister（1994）撰写了一篇关于 Eddington 在他的基本理论上的工作的介绍。

### 3.4 它可以是一个经验问题吗？

到目前为止，我们已经探讨了离散几何作为古典几何的对应的几种理论可能性。鉴于我们在前面章节讨论的例子，对物理学的相关性似乎是显而易见的。尽管人们可能会认为空间和/或时间的离散性纯粹是一个理论问题，然而，一个有趣的问题是这个问题是否也可能是经验性质的。更具体地说，可以想象我们是否可以设计一个实验，以便结果要么是空间是离散的，要么是连续的？这听起来可能非常牵强，但这个问题已经引起了哲学家们的注意，确实已经提出了一个具体的实验，尽管目前执行这个实验的情况不可行。

在 1961 年，保罗·费耶尔本(Paul Feyerabend)就提出了这种可能性，这是非常有趣的。然而，并没有更多的讨论，因为目前物理学中使用的数学的离散替代方案并不存在。 (1961: 160)

> 同样有趣的是，费耶尔本也提到了缺乏毕达哥拉斯定理是一个真正的问题的标准论点。他的建议是

Equally interesting is the fact that Feyerabend too mentions the standard argument that the lack of a Pythagorean theorem is a genuine problem. His proposal is that

> 我们只需要假设不同方向的测量不对易；然后或许我们可以将定理保留为一个算子方程。(1961: 161)

在这里，不幸的是，没有更多的内容。彼得·福雷斯特（1995 年）认为这样的实验是可能的。根本原因是经典数学使用连续变量，而严格的有限主义数学使用离散变量。因此，对于微分和积分，必须找到有限的类比，并且它们将逼近经典情况，但永远不会与之重合。因此，将始终存在小差异，不能排除这些差异是可以被检测到的可能性。

检测的一个可能性涉及以下奇特现象。考虑微分方程，df/dx=ax(1−x)。解决它是一个简单的练习，人们会发现一个非常整洁的连续解，而如果将相应的差分方程作为离散情况，Δf/Δx=ax(1−x)，取决于参数a的值，函数f的行为会产生混沌效应，在连续情况下是不存在的。参见Van Bendegem (2000)和Welti (1987: 516–518)。这样的实验结果不会像期望的那样明确，但观察到混沌效应意味着空间是离散的，而观察不到混沌效应意味着空间要么是连续的，要么是我们想象的霍顿远比我们想象的要小。经过长时间的沉默，有一个新的发展要报告。Oppenheim等人(2023)声称我们应重新调查广义相对论理论中空间-时间不需要量子化以实现与量子(场)理论的统一的可能性。正如他们所称的，经典引力的后量子理论以连续空间-时间为起点。一个出现的问题是如何设计关键实验。这样的实验不一定需要直接涉及空间-时间本身，但如果可以选择，这将同时是选择离散空间-时间或连续空间-时间的选择。

在这个引理中已经多次指出，具有不同意图和目的以及不同背景的不同科学家提出或提出了关于离散几何作为古典几何的替代方案的不同想法。许多作者并不一定提出更完整或更完整的理论，而是限制于提出建议和探索某些特定想法。这些论文应被视为寻找一个完整理论的灵感源泉。一些例子包括：Hahn（1934 年），Biser（1941 年），Coish（1959 年），Ahmavaara（1965a，b），Finkelstein（1969 年）（这是同一期刊的五篇论文系列中的第一篇），Dadić＆Pisk（1979 年），Finkelstein＆Rodriguez（1986 年），Meessen（1989 年），Buot（1989 年），仅举几例。对于 1925 年至 1936 年的时期，Kragh 和 Carazza（1994 年）是一个出色的概述，显示许多物理学家正在研究有限主义思想。

## 4. 接下来需要做什么？

要做的第一个任务似乎相当简单：拿出这里提出的任何建议，并将其详细阐述成一个完整的几何体系。然后就可以与例如希尔伯特的公理化进行比较。第二个任务似乎相当严峻：使用这种离散几何，展示如何进行物理学研究。总的来说，这确实是一项巨大的任务，但有两种可能的途径可供选择。第一种途径是展示这种方法在经典力学中奏效。如果成功，这无疑将被视为支持离散提议的一个重要论据。事实上，已经做了一些非常重要的工作，我们需要的是经典力学的一个完全形式化版本，而不是留下许多事情未提及的教科书版本，但这可能对基础几何学至关重要。目前存在这样的版本，例如，Ax（1978），Andréka等人（2008），Benda（2008），Ardourel（2012）等。事实上，最早的版本之一涉及帕特里克·苏普斯，参见麦金西，糖和苏普斯（1953）。因此，这个企业似乎是一个真正的可能性。第二种途径是继续探索在寻求量子场论和广义相对论统一的基础研究。直到几年前，这一切都是高度推测性的，如今一些认真的竞争者正在涌现并值得跟进。话虽如此，在数学和物理层面上仍有大量工作要做。可能最好的方式来描述当今情况是，一些关于几何中离散或有限主义方法的“著名”异议已经（部分）得到解答，并且提出了大量数学、物理和哲学建议和想法，并且已经开发或正在详细阐述部分模型。换句话说，满足了使得继续这一研究计划变得有趣的条件。
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
