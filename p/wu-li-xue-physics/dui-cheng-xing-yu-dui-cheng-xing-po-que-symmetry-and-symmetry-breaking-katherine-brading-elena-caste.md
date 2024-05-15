# 对称性与对称性破缺 symmetry and symmetry breaking (Katherine Brading, Elena Castellani, and Nicholas Teh)

*首次发表于 2003 年 7 月 24 日；实质性修订于 2023 年 8 月 1 日*

对称性考虑在现代基础物理学中占据主导地位，无论是在量子理论还是相对论中。哲学家们现在开始越来越关注诸如规范对称性的意义、置换对称性下的量子粒子身份如何理解、如何理解宇称破缺、对称性破缺的作用、对称原理的经验状况等问题。这些问题直接关系到科学哲学中的传统问题，包括自然法则的地位、数学、物理理论与世界之间的关系，以及数学在物理学中是否暗示了新的物理学。

本条目首先简要描述了对称性的历史根源和在现代科学中的出现。然后将这个概念应用于物理学，区分了对称原理和对称论证两种不同的对称性使用方式。它提到了不同种类的物理对称性，并概述了它们如何被引入物理学。然后，从各种对称性的细节中退后一步，对对称性在物理学中的地位和意义进行了一些一般性的评论。

---

## 1. 对称性的概念

“对称性”一词源自希腊语 sun（意为“与”或“一起”）和 metron（意为“测量”），合并后得到 summetria，最初表示一种可比性关系（例如，这是欧几里得《几何原本》中所规定的意义）。它很快获得了更进一步的、更普遍的意义：一种基于（整数）数字的比例关系，并具有将不同元素调和为一个整体的功能。因此，从一开始，对称性与和谐、美丽和统一密切相关，这对于其在自然理论中的作用起到了决定性的作用。例如，在柏拉图的《时间论》中，正多面体因其所包含的比例和形式的美丽而在自然元素学说中占据了核心地位：火具有正四面体的形式，土具有立方体的形式，空气具有正八面体的形式，水具有正二十面体的形式，而正十二面体则用于整个宇宙的形式。科学史提供了另一个典范性的例子，即在物理描述中使用这些图形作为基本要素：开普勒于 1596 年出版的《宇宙奥秘》中呈现了以五个正多面体为基础的行星体系结构。

从现代的角度来看，柏拉图和开普勒在物理学中使用的规则图形，是因为它们包含的数学比例和和谐（以及相关的属性和形式的美）而具有另一种对称性，这种对称性与比例无关。在现代科学的语言中，几何图形（如正多边形和多面体）的对称性是根据它们在指定的旋转和反射群下的不变性来定义的。这个定义的来源是什么？除了希腊和罗马人使用的古代对称性观念（一直延续到文艺复兴结束），17 世纪出现了一个不同的对称性观念，它不是基于比例，而是基于对立元素之间的相等关系，比如图形的左右部分。关键是，这些部分在整体上是可互换的-它们可以相互交换而保持原始图形不变。这种对称性观念通过几个步骤发展成为现代科学中的概念。一个关键的阶段是引入特定的数学操作，如反射、旋转和平移，用于精确描述如何交换部分。因此，我们得到了一个几何图形对称性的定义，即当相等的组成部分根据指定的操作之一进行交换时，图形保持不变。因此，当一个双侧对称图形的两半通过反射进行交换时，我们恢复了原始图形，并且该图形被称为在左右反射下不变。这被称为“晶体学对称性观念”，因为在晶体学的早期发展中，对称性首次被如此定义和应用。[ 1] 下一个关键步骤是将这个概念推广到对称性的群论定义，这是在 19 世纪代数概念群的发展以及发现图形的对称操作满足形成群的条件之后出现的。例如，反射对称现在有一个关于在反射群下不变的精确定义。最后，我们有了对称性、等价性和群的紧密联系：对称群引起了等价类的划分。通过图形（或者考虑的“整体”）的对称变换相互交换的元素通过等价关系相连，从而形成一个等价类。[ 3]

对称性的群论概念是在现代科学中取得如此成功的概念。然而，需要注意的是，对称性仍然与美（规律性）和统一性相关：通过对称变换，不同（但“相等”或更一般地说“等价”的）元素与彼此和整体相关联，从而形成一个规律的“统一体”。整体规律性的出现方式由指定的变换群的性质所决定。总结起来，不同和相等元素的统一总是与对称性相关联，无论是在古代还是现代意义上；一方面，这种统一的实现方式，另一方面，相等和不同元素的选择方式，决定了产生的对称性及其具体内容。

对称性的定义为“在一组指定的变换下不变”，使得该概念可以被广泛应用，不仅适用于空间图形，还适用于抽象对象，如数学表达式，特别是与物理相关的动力学方程。此外，群论的技术工具可以被转移并在物理理论中得到巨大优势利用。[4]

从历史的角度来考虑对称性在物理学中的作用时，值得注意两个初步的区别：

* 第一个区别是隐含和显式使用这个概念。对称性的考虑一直被应用于对自然界的描述，但在很长一段时间内只是以隐含的方式进行。正如我们所见，科学上的对称性概念（我们在这里感兴趣的那个）是最近才出现的。如果我们谈论这个对称性概念在古代自然理论中的作用，我们必须清楚，当时并没有以这个意义明确地使用它。
* 第二个是关于使用对称性的两种主要方式之间的区别。首先，我们可以将特定的对称性属性归因于现象或定律（对称性原理）。正是对于定律的应用，而不是对于物体或现象，已经成为现代物理学的核心，我们将会看到。其次，我们可以根据它们的对称性属性（对称性论证）推导出关于特定物理情况或现象的具体后果。

## 2. 对称性原理

物理学中方程的不变性质的第一个明确研究与 19 世纪上半叶在分析力学框架中引入变换方法来解决运动问题有关。C.G.雅可比利用 W.R.哈密顿提出的力学动力学方程的表述（称为哈密顿或正则表述）发展了一种通过应用使哈密顿方程不变的变量变换来逐步将原始问题转化为更简单但完全等效的新问题的方法（有关详细信息，请参见 Lanczos 1949）。雅可比的正则变换理论虽然是为了解决动力学问题而引入的“纯粹工具性”目的，但它导致了一个非常重要的研究方向：通过变换性质来研究物理理论的一般性质。其中的例子包括在正则变换下的不变量的研究，如泊松括号或庞加莱积分不变量；S.李的连续正则变换理论；以及物理不变量与代数和几何不变量理论之间的联系，这在 19 世纪下半叶蓬勃发展，并为动力学问题的几何方法奠定了基础。在 20 世纪初，使用群论的数学方法研究物理理论在哥廷根的工作非常重要，其中的核心人物是 F.克莱因（他曾与李合作）和 D.希尔伯特，还包括 H.韦尔和后来的 E.诺特。我们将在本节稍后回顾韦尔（见 2.1.2 节、2.2 节、2.5 节）和诺特（见 2.1.2 节）。有关这些发展的更多细节，请参见 Brading 和 Castellani（2007）。

在上述方法中，已经给出了感兴趣的物理方程或表达式，策略是研究它们的对称性质。然而，还有一种替代的方法，即相反的方法：从特定的对称性开始，寻找具有这些特性的动力学方程。换句话说，我们假设某些对称性在物理上是重要的，而不是从先前的动力学方程中推导出它们。当然，假设自然界中存在某些对称性并不是一件新鲜事。虽然没有明确表达为对称性原理，但物理空间的均匀性和各向同性以及时间的均匀性（与伽利略变换的不变性一起形成“旧的不变性原理”——参见 Wigner 1967，第 4-5 页）自现代科学开始以来就被假设为世界物理描述的先决条件。也许最著名的早期使用这种类型对称性原理的例子是伽利略在其《关于两个主要世界体系的对话》（1632 年）中讨论地球是否运动。伽利略试图抵消标准论证，即仅仅通过观察我们周围的事物在地球上的局部行为——石头下落，鸟儿飞翔——我们可以得出结论地球是静止的而不是旋转的，相反，他认为这些观察并不能使我们确定地球的运动状态。他的方法是使用船舶的类比：他敦促我们考虑船舱内的物体（有生命和无生命的），并声称在船舱内进行的任何实验，不参考船外的任何事物，都不能使我们判断船是静止的还是平稳地在地球表面上移动。 对称性的假设认为静止和某种特定运动之间存在对称，从而预测了这个结果，而不需要了解控制船上实验的具体法则。"伽利略相对性原理"（根据该原理，物理定律在伽利略变换下不变，其中考虑的运动状态是匀速运动）很快被作为公理广泛采用，并在 17 世纪被广泛应用，尤其是由休谟在解决碰撞物体问题时和牛顿在早期运动研究中使用。休谟将相对性原理作为他的第三个假设或公理，但在牛顿的《自然哲学的数学原理》中，它被降级为运动定律的推论，因此在牛顿物理学中，它的地位是定律的结果，尽管事实上它仍然是一个独立的假设。

尽管物理学中的机械定律的空间和时间不变性早已被人们所知，并且在爱因斯坦于 1905 年发表他的特殊相对论之前，电动力学的全局时空对称性群已经完全由 H. 波恩卡雷 [7] 推导出来，但直到爱因斯坦的这项工作，对称性在定律中的地位才发生了逆转。E. P. 维格纳（1967 年，第 5 页）写道，“然而，只有爱因斯坦才认识到这些原则的重要性和普遍有效性”，并且爱因斯坦在特殊相对论上的工作标志着“一个趋势的逆转：在那之前，不变性原则是从运动定律中推导出来的……现在，我们自然而然地通过不变性原则来推导自然定律并测试其有效性，而不是从我们认为的自然定律中推导出不变性原则”。通过假设全局连续时空对称性的普遍性，爱因斯坦构建了他的特殊相对论，这代表了将对称性应用于 20 世纪物理学的第一个转折点。[8]

### 2.1 相对论

#### 2.1.1 特殊相对论

爱因斯坦的狭义相对论（STR）是基于两个基本假设构建的。一个是光假设（即光的速度在“静止参考系”中与源的速度无关），另一个是相对性原理。爱因斯坦明确采用后者作为限制定律形式的手段，无论其详细结构如何。因此，我们有了“建设性”和“原理”理论之间的区别：在前一种情况下，我们根据对物质体的构成和行为的已知事实来建立我们的理论；在后一种情况下，我们通过采用某些原则来限制这种理论的可能形式。[9]

爱因斯坦（1905 年，英文翻译第 395 页）采用的相对性原理简单地断言：

> 物理系统状态发生变化的规律与这些状态变化是相对于彼此以匀速直线运动的两个坐标系中的哪一个参考无关。

这个原则与光的假设（以及其他一些假设）结合在一起，导致了洛伦兹变换，这些变换是相对于 STR 相互之间以匀速运动的坐标系之间的变换。根据 STR，物理定律在洛伦兹变换下是不变的，事实上在庞加莱变换的全体下也是不变的。这些变换与牛顿力学的伽利略变换不同。H.明科夫斯基重新阐述了 STR，表明空间和时间是单一的四维几何的一部分，即明科夫斯基时空。这样，庞加莱对称变换群就成为 STR 中时空结构的一部分，因此这些对称性被 Wigner（1967 年，尤其是第 15 页和第 17-19 页）称为“几何对称性”。

关于相对性原理以及更一般的全局时空对称性的理解，文献中存在争议。一种方法是通过考虑理论在其模型上的变换来捕捉时空对称性的重要性，这些模型由具有各种几何对象和关系的可微流形组成（参见 Anderson，1967 年和 Norton，1989 年）。根据 Brown 和 Sypel（1995 年）以及 Budden（1997 年）的观点，这种方法未能认识到有效隔离子系统的核心重要性，对称性的经验意义依赖于能够将这样的子系统进行变换（而不是将变换应用于整个宇宙）。关于这一辩论的进一步发展，包括对局部对称性和规范理论的应用，请参见 Kosso（2000 年），Brading 和 Brown（2004 年），Healey（2007 年），Healey（2009 年），Greaves 和 Wallace（2014 年），Friederich（2015 年），Rovelli（2014 年），Teh（2015 年，2016 年）和 Wallace（2022 年）。

全球时空不变性原则旨在适用于自然法则中的所有过程，适用于时空中展开的所有过程。这种普遍性并不适用于物理学中引入的物理对称性。其中大部分是全新的，没有科学历史根源，并且在某些情况下是专门用来描述特定形式的相互作用的，因此被称为“动力学对称性”（Wigner，1967 年，尤其参见第 15、17-18、22-27、33 页）。

#### 2.1.2 相对论的一般理论

爱因斯坦的广义相对论（GTR）也是以一个对称性原则为核心构建的：广义协变性原理。关于广义协变性在 GTR 中的意义和作用，已经有很多讨论，包括爱因斯坦本人的讨论 [10]。很长一段时间里，他将广义协变性原理视为经典力学和狭义相对论中相对性原理的扩展，这一观点仍然引发激烈的辩论。Norton（2003 年）讨论了“克雷奇曼反对广义协变性物理意义”的问题。关于不变性与协变性，参见 Anderson（1967 年）、Brown 和 Brading（2002 年）以及 Martin（2003 年，第 2.2 节）。显而易见的是，仅仅要求一个理论具有广义协变性并不对理论的形式施加任何限制；必须添加进一步的规定，例如要求没有“绝对对象”（这本身就是一个有问题的概念）。然而，一旦添加了一些这样的进一步要求，广义协变性原则就成为一个强大的工具。关于这一辩论的最新评论和分析，请参见 Pitts（2006 年）。

在爱因斯坦的手中，广义协变性原理是广义相对论发展中的一个关键假设。GTR 的微分同胚自由度，即在坐标变换下，其形式在空间和时间的任意函数平滑变化下保持不变，是一种“局部”的时空对称性，与 STR 的“全局”时空对称性（其依赖于常数参数）形成对比。关于广义相对论微分同胚不变性的基于坐标的方法的讨论，请参见 Wallace（2019），关于这种不变性的物理解释，请参见 Pooley（2017）。这样的局部对称性在 Wigner 的意义上是“动力学”对称性，因为它们描述了一种特定的相互作用，即引力。众所周知，在 GTR 中，时空度规不再是一个“背景”场或“绝对对象”，而是一个动力学的参与者，引力场表现为时空曲率。

将连续对称性的概念从“全局”对称性（如时空变换的伽利略群）扩展到“局部”对称性是二十世纪物理学中对称性概念的重要发展之一。受 GTR 的启发，魏尔于 1918 年提出的“引力和电磁统一理论”扩展了局部对称性的思想（参见 Ryckman，2003 和 Martin，2003），尽管该理论通常被认为失败了，但该理论包含了后来在量子理论背景下取得成功的种子（见下文第 2.5 节）。

与此同时，希尔伯特和克莱因对引力理论中的广义协变性进行了详细研究，并在关于能量守恒在这些理论中的地位的辩论中寻求了诺特的帮助。这导致了诺特著名的 1918 年论文，其中包含两个定理，第一个定理导致了全局对称性和守恒定律之间的联系，第二个定理导致了与局部对称性相关的一些结果，包括证明了当全局对称性群是某个问题理论的局部对称性群的子群时，守恒定律的不同地位（参见 Brading 和 Brown，2003）。关于诺特定理的哲学和物理学的最新集体论文是 Read 和 Teh（2022）。

### 2.2 对称性和量子力学

在 20 世纪 20 年代的量子力学中，利用群论及其表示理论来利用对称性无疑是物理对称性历史上的第二个转折点。事实上，对称性原理在量子背景下具有最大的效果。维格纳和魏尔是最早认识到对称性群对量子物理学的重要性并对此进行思考的人。正如维格纳多次强调的那样，“不变性原理在量子理论中的增强效果”（维格纳，1967 年，第 47 页）的一个重要原因是量子物理系统状态空间的线性性质，对应于量子态的叠加可能性。这导致了在存在对称性的情况下定义具有特别简单变换性质的态的可能性，以及其他一些结果。

一般来说，如果 G 是描述物理系统的理论的对称群（即，理论的动力学方程在 G 的变换下是不变的），这意味着系统的状态根据群 G 的某个“表示”相互转换。换句话说，群的变换在状态空间中通过将状态相互关联的操作在数学上表示出来。罗伯茨（2022 年，2.3 节）将这视为“动力学演化”和“空间平移”等概念在状态空间理论中具有意义的基本要求，他将其称为“表示观点”。在量子力学的状态空间中，这些操作通过作用于状态空间并对应于物理可观测量的算符来实现，物理系统的任何状态都可以描述为基本系统状态的叠加，即其状态根据对称群的“不可约”表示进行变换。因此，量子力学为应用对称性原理提供了特别有利的框架。在状态空间中表示理论的对称性的可观测量，因此与系统的哈密顿量对易，起到守恒量的作用；此外，对称群的不变量的本征值谱为对称群的不可约表示提供了标签：基于这一事实，可以将表征物理系统的不变性质的值与对称群的不可约表示的标签相关联，即通过研究对称群的不可约表示对基本物理系统进行分类。

### 2.3 置换对称性

首个引入微观物理学的非时空对称性，也是第一个在量子力学背景下运用群论技术处理的对称性，是置换对称性（或置换群变换下的不变性）。这种对称性是由海森堡于 1926 年在与原子系统中“相同”电子的不可区分性相关的研究中“发现”的，它是所谓量子统计（玻色-爱因斯坦统计和费米-狄拉克统计）的核心离散对称性（即基于具有离散元素集的群） ，它控制着某些类型的不可区分量子粒子（如玻色子和费米子）的集合的统计行为。置换对称性原则表明，如果这样的集合在其组成粒子的置换下是不变的，那么我们不计算仅交换不可区分粒子的那些置换，也就是说，交换状态与原始状态被视为相同状态（参见 French 和 Rickles，2003 年，第 1 节）。

从哲学上讲，置换对称性引发了两种主要问题。一方面，作为相同粒子（即同一种类的粒子在同一原子系统中）物理上无法区分的条件，它引发了关于量子领域中身份、个体性和无法区分性概念意义的丰富讨论。这是否意味着量子粒子不是个体？虽然“数值上不同”的实体（所谓的相同粒子问题）的存在是否意味着在量子物理学中应该将莱布尼兹的无可辨别性原则视为被违反的？另一方面，这种对称性原则的理论和经验地位是什么？它应该被视为量子力学的公理还是应该被认为是经验上证明的？目前它被认为解释了费米子和玻色子的量子统计性质，但为什么世界上似乎只有玻色子和费米子，而置换对称性群允许更多类型的可能性？French 和 Rickles（2003）对上述及相关问题进行了概述，Saunders（2006）提供了一个新的视角。Saunders 讨论了经典物理学中的置换对称性，并主张服从经典统计学的无法区分的经典粒子。他认为，对于某些类别的粒子，量子统计学和经典统计学之间的差异不能仅仅通过无法区分性来解释。有关进一步讨论和参考文献，请参阅 French 和 Krause（2006），Ladyman 和 Bigaj（2010），Caulton 和 Butterfield（2012），以及相关的 SEP 条目“量子理论中的身份和个体性”。

### 2.4 *C*, *P*, *T*

由于量子描述的特殊性质，空间反射对称性或偶（P）和时间反演（T）的离散对称性在量子背景下被“重新发现”，具有新的意义。偶在 1927 年由维格纳（Wigner）在一篇论文中引入量子物理学中，首次基于群论处理排列、旋转和反射对称性来解释重要的光谱结果。时间反演不变性再次出现在维格纳（Wigner）于 1932 年的一篇论文中。[13] 此外，还增加了新的量子粒子-反粒子对称性或电荷共轭（C）。电荷共轭在狄拉克（Dirac）1931 年的著名论文“电磁场中的量子奇点”中被引入。

所谓的 CPT 定理首次由 Lüders 和 Pauli 在 20 世纪 50 年代初证明，它将离散对称性 C、P 和 T 联系在一起，该定理指出 C、P 和 T 的组合是洛伦兹不变物理定律的一般对称性。关于 CPT 定理的含义和基础的哲学思考，请参见 Wallace（2009）和 Greaves（2010）。特别是 Greaves（2010）认为，经典 T 算符的量子化导致了 CT 算符，并以此支持费曼（Feynman）的著名建议，即时间反演会将粒子转化为反粒子。Roberts（2022，2.8）反对这一观点，认为费曼的方法是一种不准确地捕捉时间对称性描述的人为因素。关于该定理的证明讨论，包括在标准量子场论框架和公理场论框架内，可参考 Greaves 和 Thomas（2014）提供的内容。

引力、电磁力和强相互作用的规律在 C、P 和 T 下都是不变的。然而，1956 年李政道和杨振宁指出，由弱相互作用主导的 β 衰变尚未经过 P 不变性的测试。不久之后，吴健雄和她的同事进行了一项实验，证明了弱相互作用违反了宇称。然而，β 衰变尊重 C 和 P 的组合作为对称性。然而，1964 年，克罗宁和菲奇在涉及 K 介子的实验中发现了弱相互作用中的 CP 破缺。根据 CPT 定理，这意味着 T 对称性也被破坏了。此后，已经有直接观测到 T 对称性破缺的报道，例如 CPLEAR 合作组织（1998 年）。关于在评估 T 破缺中起作用的基本假设的仔细分析，请参阅 Roberts（2015）和 Ashtekar（2015）。哲学上的难题是，我们如何能够了解这种时间的非对称性，考虑到我们无法真正“逆转”时间。Roberts 提出了三种解释这种可能性的模板，特别是借鉴了居里原理的一个版本。相比之下，Gołosz（2016）认为，这种非对称性应该被理解为适用于物理过程，而不是时间本身。Roberts（2022 年，第 7 章）回应说，在表征观点上，这种非对称性确实适用于时间本身。

这场辩论源于更基本的问题，即时间反演对称性实际上意味着什么。一些人认为，教科书中的时间反演算符 T 并不真正代表时间的倒转，这是由于它的波函数共轭和磁场反转等不寻常的特性，包括 Albert（2000 年）、Callender（2000 年）、Lopez（2021 年、2023 年）。而其他人则坚持认为，T 算符确实是时间反演的正确定义，包括 Earman（2002 年）、Malament（2004 年）和 Roberts（2017 年）。Roberts（2022 年第 2 章）提出了一种普遍的回应，认为这两种方法可以看作是同一个问题的两个方面，分别对应于时空上的时间平移的反转和对状态空间中该反转的表示。Struyve（即将出版）也提出了类似的对电磁学的回应。

在我们的基本法则中存在的奇偶性破缺引发了一个关于手性或左右物体以及空间本质的古老哲学辩论的新篇章。只要没有涉及到与相关手之外的任何事物，对左手和右手的描述不会有所不同。然而，左手和右手确实有所不同——左手的手套无法适合右手。在短暂的一段时间里，康德认为这是支持实体主义空间观念胜过关系主义空间观念的理由，左手和右手之间的差异在于它们与绝对空间的关系。无论这种实体主义解决方案是否成功，关系主义者仍然面临一个挑战，即解释康德所称的“不协调的对应物”之间的差异——它们是彼此的镜像，但无法通过任何刚性运动使它们重合。关系主义者可以回应说左手和右手之间没有任何内在差异，不协调性是由两只手之间的关系来解释的（如果宇宙中只有一只手，那么它既不是左手也不是右手，但第二只要被创造出来的手要么与之不协调要么与之协调）。然而，在面对奇偶性破缺时，这种回应变得有问题，因为一个可能的实验结果比其镜像更有可能发生。由于这两种可能的结果在本质上并没有区别，我们应该如何解释这种不平衡？这个问题在实体主义者和关系主义者的辩论中继续讨论。有关详细信息，请参阅 Pooley（2003）和 Saunders（2007）。

### 2.5 对称性

连续内部对称性的起点是将具有（近似）相同质量值的粒子解释为单个物理系统的组成部分（状态），它们通过底层对称群的变换相互连接。这个想法是通过类比排列对称性的情况而出现的，实际上是由海森堡（排列对称性的发现者）在 1932 年的一篇论文中引入了连接质子和中子（解释为单个系统的两个状态）的 SU(2)对称性。这个对称性后来由维格纳进一步研究，他在 1937 年引入了同位旋（后来缩写为同位旋）这个术语。各种内部对称性是量子态的相位变换下的不变性，并以 SU(N)的幺正群来描述。术语“规范”有时用于所有连续内部对称性，有时则保留给局域版本（这些版本是基本粒子标准模型的核心）[14]。

量子波函数的相位编码了内部自由度。在理论对波函数相位的局域规范变换下不变的要求下，魏尔在 1918 年的想法在量子理论中找到了成功的应用（参见 O’Raifeartaigh，1997）。魏尔在 1929 年提出的新理论是一种将电磁学与物质耦合的理论。马丁（2003）对规范理论的历史进行了简要概述，他强调了与规范对称性相关的各种问题，特别是所谓的“规范原理”的地位，这是魏尔首次提出的。戈梅斯、罗伯茨和巴特菲尔德（2022）提供了关于规范论证的概念结构的最新解释。规范理论发展的主要步骤是 1954 年的杨-米尔斯非阿贝尔规范理论，以及与短程弱相互作用和强相互作用的成功发展相关的问题和解决方案。在随后的几年中，我们逐渐认识到“局域”规范对称性不仅仅是电磁学的特征，还是我们大多数最好的理论，包括各种引力理论和凝聚态物理模型的特征。

规范理论引发的主要哲学问题都关键在于我们如何理解数学与物理之间的关系。讨论可以分为两个广泛的类别。第一个涉及规范原理，已经提到过，问题在于我们将理论写成局域对称形式的要求在多大程度上使我们能够推导出新的物理学。分析涉及列出哪些前提构成规范原理，检查这些前提的地位以及对它们的动机，确定可以基于这些前提得出什么，以及还需要添加什么才能得到（成功的）物理理论。有关这一论点的讨论，请参阅 Teller（2000），Martin（2003）和 Gomes 等人（2022）。在 Teh（即将出版）中，提出了一个观点，即围绕规范原理的辩论与围绕“广义协变性”的实质性和非实质性形式之间的差异的辩论有关，后者是用来指代广义相对论的“局域规范（微分同胚）对称性”。

第二类问题涉及规范理论中哪些量代表“物理上真实”的属性。由于在制定初值问题时未考虑到某些描述的冗余，规范理论中的确定性似乎存在失败的问题。这个问题最初在广义相对论中遇到（在这方面它是一个规范理论），有关详细信息的最佳起点是阅读有关爱因斯坦的“洞论”（参见 Earman 和 Norton，1987；Earman，1989，第 9 章；以及最近的 Norton，1993；Rynasiewicz，1999；Saunders，2002；Pooley，2021；以及其中的参考文献）。实践中，我们发现只有规范不变量才是可观测量，这似乎拯救了我们。然而，这并不是故事的结局。另一个经典例子是阿哈伦诺夫-博姆效应，我们可以利用它来说明与规范理论相关的解释问题，有时被描述为一个困境：确定性的失败或作用距离（参见 Healey，2001）。恢复确定性取决于只将规范不变量视为代表“物理上真实”的量，但接受这个解决方案似乎会在因果和效应之间留下某种形式的非局部性。

此外，我们面临着如何理解理论中出现的非规范不变量的作用以及如何解释 M. Redhead 所称的“多余结构”的问题（参见 Redhead，2003）。关于哲学文献中“多余结构”的早期讨论，请参见 Belot（1998）和 Nounou（2003）。最近，关于规范理论中的“多余结构”的主题已在 Weatherall（2016）、Murray、Nguyen 和 Teh（2020）、Gomes（2021）、Murgueitio-Ramirez 和 Teh（即将出版）、Dougherty（2020）和 Wallace（2022）中进行了讨论：最近的讨论在规范理论的讨论和理论物理学的前沿主题之间建立了有趣的联系，例如范畴论在物理学中的应用以及协变相空间形式主义的使用。关于这些问题的一种方法是使用约束哈密顿系统的理论，还可以参考 Earman（2003b）、Castellani（2003, 2004）和 Pitts（2014）。关于规范对称性的直观描述，比通常用于表达规范对称性的拉格朗日和哈密顿理论的形式更为普遍，请参见 Belot（2008）。如何最好地解释规范理论是物理哲学中一个未解决的问题。Healey（2007）讨论了规范理论的概念基础，主张采用非可分离的全纤维解释来解释基本相互作用的经典杨-米尔斯规范理论。Catren（2008）通过纤维丛形式主义来探讨杨-米尔斯理论的本体论含义。有用的参考资料包括 Metascience 对 Healey（2007）的评论研讨会（Rickles，Smeenk，Lyre 和 Healey，2009），以及“Philosophy of Gauge Theory”研讨会的“概要和讨论”，匹兹堡大学哲学中心，2009 年 4 月 18 日至 19 日（可在线获取）。 最近，Berghofer、François、Friederich、Gomes、Hetzroni、Maas 和 Sondenheimer（2023）提供了一个关于规范对称性在物理学和物理哲学中地位问题引发的各种问题的详细概述和讨论。

### 2.6 对偶性

到目前为止，我们一直在讨论作用于物理理论状态空间的对称性。近年来，物理学和哲学领域内的讨论主要集中在作用于理论空间的某种对称性上。当这些对称性被解释为实现两个理论之间的“等价性”（这个概念本身需要哲学工作来阐明）时，通常说这些理论之间存在“对偶对称性”（如果我们在严格的自同构意义上讲“对称性”，那么这些对偶被称为“自对偶”）。

在当代物理学中，起着核心作用的对偶性有各种类型：量子场论之间的对偶性（如广义电磁对偶性），弦论之间的对偶性（如 T 对偶性和 S 对偶性），以及分别是量子场论和弦论的物理描述之间的对偶性，如规范/引力对偶性的情况。从历史上看，物理学中首先使用的相关对偶性是电磁对偶性、动量-位置对偶性（通过傅里叶变换）- QM 背景下的波粒对偶性 - 以及统计物理学中二维伊辛模型的 Kramers-Wannier 对偶性。关于各种类型的对偶性及其在物理学中的意义，特别参见 Castellani 和 Rickles（2017）。关于规范/引力对偶性的入门综述，强调概念方面的内容，可参考 De Haro，Mayerson 和 Butterfield（2016）。

一般来说，由于对偶是理论之间的转换，它们的影响比对称变换更为激进。虽然对称性是同一理论解之间的映射，但不同的理论描述可以在对象、属性、自由度和时空框架方面有非常不同的解释。因此，对偶自然地为科学哲学中的许多传统问题提供了一个新颖而有趣的视角，例如 a) 简化、出现和基础性（关于对偶和出现的讨论，例如参见 Rickles，2013 年和 Castellani 和 De Haro，2020 年）；b) 理论等价性和不确定性（关于对偶对这些问题的重要性，参见 Read 和 Møller-Nielsen，2020 年）；以及 c) 现实主义与反现实主义（Le Bihan 和 Read，2018 年，对与对偶相关的理论的本体论解释的可能性进行了调查；一个具体的例子是与弱/强对偶相关的“粒子民主”案例，如 Castellani，2017 年所讨论的）。关于对偶的物理学和哲学的许多问题的全面讨论，请参见 De Haro 和 Butterfield（即将出版）。

在哲学文献中，将对称性与对偶相关联的工作通常回应以下三个问题之一：

* 什么是理解对偶对称性实现的理论间关系的适当形式框架？在量子规范/引力对偶的背景下，De Haro、Teh 和 Butterfield（2017）中勾勒了一个初步的框架，并在 De Haro 和 Butterfield（2017）中进一步发展了玻色化对偶的情况。De Haro 和 Butterfield（2018）提供了全面详细的调查。在经典力学的简单背景下，Teh 和 Tsementzis（2017）探讨了经典相空间的典型对称性（即辛变换）与哈密顿和拉格朗日理论之间的关系，并讨论了如何将这个框架作为一个玩具模型来思考更复杂的对偶。
* 一个理论的局部对称性与其对偶理论的对称性之间的关系是什么？这个问题之所以紧迫，是因为（正如我们在第 2.5 节中提到的），局部对称性通常被视为理论的“多余”或“冗余”结构；因此，人们可能希望能够构建一个不包含这种多余结构的对偶理论。事实上，Polchinski 和 Horowitz（2009）猜测，在引力/规范对偶中，体理论的局部对称性（即微分同胚）将始终从其对偶边界理论的角度“看不见”。然而，De Haro、Teh 和 Butterfield（2017）认为，这个猜测在完全普遍性上是不正确的：有一类特殊的微分同胚，在边界理论中不会消失，而是对应于边界 CFT 的共形变换。
* 对称性是否应该被理解为一种特定类型的“规范对称性”，从而解释为什么我们应该将对偶理论视为“物理上等价”？在这个问题上，Read（2016）使用“空洞论证”作为一种镜头，将弦论的对偶与（内部理论的）规范对称性进行比较。

## 3. 对称性论证

考虑以下情况。

* 布里达的驴子：位于对他来说完全等价的两捆干草之间，他没有理由选择左边的一捆而不是右边的一捆，因此他无法选择并因饥饿而死亡。
* 阿基米德的平衡定律：如果等重物挂在天平的两臂上等距离处，那么它将保持平衡，因为没有理由使其在平衡点周围旋转。
* 阿那克西曼德对地球静止的论证（亚里士多德所述）：地球保持静止，因为它位于球形宇宙的中心（并且与宇宙边界在每个方向上保持相同的关系），没有理由使其朝一个方向移动而不是另一个方向。

它们有什么共同之处？

首先，所有这些都可以理解为应用了莱布尼茨的充分理由原则（PSR）的例子：如果没有足够的理由让一件事情发生而不是另一件事情，该原则认为什么都不会发生（初始情况不会改变）。但以上情况还有一个共同点：在每种情况下，PSR 都是基于初始情况具有特定的对称性而应用的：在前两种情况下是双边对称；在第三种情况下是旋转对称。初始情况的对称性意味着现有的选择是完全等价的（左边的一捆干草与右边的一捆干草等等）。如果选择是完全等价的，那么就没有足够的理由在它们之间进行选择，初始情况将保持不变。

自古以来，科学上一直使用这种类型的论证——也就是说，根据情况的初始对称性加上 PSR 得出明确结论的论证（正如阿那克西曼德的论证所证明的那样）。它们最常见的形式是：具有某种对称性的情况会以这样的方式演变，即在没有非对称原因的情况下，初始对称性将被保持。换句话说，初始对称性的破缺不能没有原因地发生，或者说非对称性不能自发产生。范弗拉森（1989）在一章中探讨了这些类型的对称性论证在一般问题解决中的应用方式。

从历史上看，对称性方面的这种论证的第一个明确表述归功于十九世纪末物理学家皮埃尔·居里。居里通过对晶体的热、电和磁性质的研究，这些性质与晶体的结构和对称性直接相关，被引导思考物理性质与物理系统的对称性之间的关系。更确切地说，他探讨的问题是：在具有指定对称性属性的给定物理介质（例如，晶体介质）中，哪些物理现象（例如，哪些电磁现象）是允许发生的？他的结论在他 1894 年的著作《关于物理现象中的对称性》中系统地呈现如下：

1. 一个现象可以存在于具有其特征对称性或其子群的介质中。其发生所需的（即发生某种事情而不是无事发生）不是某些对称性的存在，而是某些对称性的缺失：“非对称性是创造现象的原因”。
2. 原因的对称元素必须在其效应中找到，但反之不成立；也就是说，效应可以比原因更对称。

结论（a）清楚地表明居里认识到对称性破缺在物理学中所起的重要作用（他确实是最早认识到这一点的人之一）。结论（b）通常在文献中被称为“居里原则”，尽管注意到（a）和（b）彼此并不独立。

为了使居里原则适用，需要满足各种条件：因果关系必须有效，原因和结果必须明确定义，并且原因和结果的对称性也必须明确定义（这涉及到所考虑的物理系统的物理和几何属性）。然后，居里原则为给定现象发生提供了必要条件：只有与原则所建立的对称条件相容的现象才能发生。

居里原则因此具有重要的方法论功能：一方面，它提供了一种选择规则（在具有指定对称性的初始情况下，只允许发生某些现象）；另一方面，它为物理理论提供了一个伪证标准（违反居里原则可能表明物理描述中存在问题）。[15]

当然，对居里原理的这些应用取决于我们接受其有效性，这在文献中已经受到质疑，特别是与自发对称性破缺有关的问题（见下文，下一节）。已经提出了不同的建议来证明这个原理。我们在这里将其作为基于莱布尼兹的 PSR 的对称性考虑的一个例子进行了介绍，而居里本人似乎将其视为一种因果性原理的形式。在当前的文献中，人们已经普遍认为这个原理是由确定性物理定律的不变性属性所导出的。根据这个“接受的观点”，该原理首次在查尔默斯（1970）中得到了阐述，然后在更近期的文献中得到了发展（Ismael 1997，Belot 2003，Earman 2004）。居里的原始原理实际上被误解了：居里关注的是系统状态中共存的、功能相关的特征，而不是时间上有序的因果关系对。关于是否存在多个“居里原理”以及无论如何表述，使其在科学上具有成果的方面是什么，参见 Castellani 和 Ismael（2016）的讨论。关于这个原理的地位，Norton（2016）认为它是一个“真理”，因为原理的成功与否取决于人们如何选择将因果标签附加到科学描述上。对于 Roberts（2013）来说，当对称性是时间反演时，居里的原理就会失败。Roberts（2016）认为，这个原理的真实性取决于特殊的物理事实，并将其失败归因于在发现宇称破缺和 CP 破缺方面起到了重要作用（关于这一点，还可以参见 Roberts，2015 和 Ashtekar，2015）。

## 4. 对称性破缺

对称性可以是精确的、近似的或破缺的。精确意味着无条件有效；近似意味着在某些条件下有效；破缺可以根据所考虑的对象及其背景而有不同的含义。

对称性破缺的研究也可以追溯到皮埃尔·居里。根据居里的观点，对称性破缺具有以下作用：对于在介质中发生的现象，介质的原始对称群必须通过某种原因的作用而降低（破缺，用今天的术语来说）到现象的对称群（或现象对称群的子群）。从这个意义上说，对称性破缺就是“创造现象”的过程。一般来说，某种对称性的破缺并不意味着没有对称性存在，而是意味着破缺对称性的情况具有比原始对称性更低的对称性。从群论的角度来看，这意味着初始对称群被破缺为其子群之一。因此，可以通过研究变换群之间的关系，特别是一个群（未破缺的对称群）与其子群之间的关系，来描述对称性破缺。正如 1992 年 I.斯图尔特和 M.戈卢比茨基的著作所清楚地说明的那样，从这个观点出发，可以通过解决诸如“哪些子群可能出现？”、“何时出现给定的子群？”等问题来发展对称性破缺的一般理论。

对称性破缺首次在物理学中明确地研究了物体和现象。这并不奇怪，因为对称性理论起源于熟悉的空间图形和日常物体的可见对称性特性。然而，对于对称性破缺而言，它在物理学中获得了特殊的意义，这与法则有关。法则的对称性破缺有两种不同的类型：“显式”和“自发”，自发对称性破缺的情况从物理学和哲学的角度来看更加有趣。

### 4.1 显式对称性破缺

显式对称性破缺指的是动力学方程在考虑的对称群下并非明显不变的情况。这意味着在拉格朗日（哈密顿）形式中，系统的拉格朗日（哈密顿）包含一个或多个明确破坏对称性的项。这些项可以有不同的起源：

(a) 对称性破缺项可以根据理论/实验结果手动引入到理论中，例如弱相互作用的量子场论，它明显违反镜像对称性或宇称。在这种情况下，基础结果是弱相互作用中的宇称非守恒，这是由 T.D.李和 C.N.杨在 1956 年的著名（诺贝尔奖获得者）论文中首次预测的。

(b) 对称性破缺项可能出现在理论中，因为量子力学效应。存在这种项的一个原因是，从经典到量子层次的过渡中，由于诺特荷和流等复合量的可能算符排序模糊性，经典对称代数（通过泊松括号结构生成）可能不再通过诺特荷的对易关系来实现。此外，在重整化过程中使用的“调节器”（或“截断”）以进行实际计算，本身可能是异常的来源。它可能违反理论的某个对称性，并且即使在计算结束时移除调节器后，这种对称性破缺的痕迹可能仍然存在。历史上，由重整化引起的异常的第一个例子是所谓的手征异常，即违反强相互作用的手征对称性的异常（参见 Weinberg，1996 年，第 22 章）。

(c) 最后，由于不可重整效应，对称性破缺项可能会出现。物理学家现在有充分的理由将当前可重整场论视为有效场论，即对更深层理论的低能近似（每个有效理论仅明确地涉及在考虑的能量范围内重要的粒子）。由于理论中未包括的重粒子，非可重整相互作用的影响很小，因此可以在低能区域忽略不计。然后，可能发生的是，由此获得的粗粒化描述具有比更深层理论更多的对称性。也就是说，有效拉格朗日量遵循的对称性不是底层理论的对称性。这些“偶然”的对称性，正如韦因伯格所称，可能会被来自更高质量尺度的非可重整项所违反，并在有效拉格朗日量中被抑制（参见韦因伯格，1995 年，第 529-531 页）。

### 4.2 自发对称性破缺

对称性自发破缺(SSB)发生在一个情况下，即在运动方程具有对称性的情况下，存在一些解不再在该对称性的作用下保持不变，而没有任何明显的非对称输入（因此称为“自发”）。这种情况可以通过经典物理学中的简单案例来进行说明。例如，考虑一个线性垂直棍子，顶部施加一个向下的压缩力并沿着其轴向。物理描述在该轴周围的所有旋转下显然保持不变。只要施加的力足够小，棍子不会弯曲，平衡构型（最低能量构型）在该对称性下保持不变。当力达到临界值时，对称的平衡构型变得不稳定，并出现了无限多个等效的最低能量稳定状态，这些状态不再具有旋转对称性，但彼此之间通过旋转相关。然后，通过一个（无论多么小的）外部非对称原因，对称性的实际破缺很容易发生，棍子弯曲直到达到无限可能的稳定非对称平衡构型之一。在上述情况中发生的实质是：当某个参数达到临界值时，尊重理论对称性的最低能量解在小扰动下不再稳定，而出现了新的非对称（但稳定的）最低能量解。新的最低能量解是非对称的，但都通过对称变换相互关联。换句话说，存在一种（无限或有限，取决于对称性是连续还是离散）不同非对称解的简并，它们的能量相同（最低），整个解集保持理论的对称性。

在量子物理学中，有限系统实际上不会发生自发对称性破缺(SSB)：在各个简并态之间会发生隧道效应，并且真正的最低能量态或“基态”实际上是简并态的唯一线性叠加态。事实上，SSB 只适用于无限系统——多体系统(如铁磁体、超流体和超导体)和场——在无限体积极限下，备选的简并基态彼此正交，因此它们之间被“超选择规则”所分隔(例如参见 Weinberg, 1996, 第 164-165 页)。

历史上，SSB 的概念首次出现在凝聚态物理学中。原型案例是 1928 年海森堡关于铁磁体的理论，将其视为无限阵列的自旋 1/2 磁偶极子，相邻自旋之间存在自旋-自旋相互作用，使得相邻的磁偶极子趋向于排列一致。尽管该理论具有旋转不变性，但在临界居里温度 T **c 以下，铁磁体的实际基态自旋都沿某个特定方向排列（即磁化指向该方向），因此不符合旋转对称性。发生的情况是，在 T** c 以下存在一个无限简并的基态集合，其中每个基态中的自旋都沿着给定方向排列。可以在每个基态上建立一组完整的量子态。因此，我们有许多不同的“可能的世界”（相同方程的解集），每个世界都建立在可能的正交（在无限体积极限下）基态之一上。用 S.科尔曼的著名形象来说，生活在这些可能的非对称世界中的小人很难检测到自然法则的旋转对称性（他的所有实验都受到背景磁场的影响）。对于这个小人来说，对称性仍然存在-哈密顿量具有旋转不变性-但对于他来说是“隐藏”的。此外，小人没有办法直接检测到他的世界的基态是一个无限简并的多重态的一部分。从无限铁磁体的一个基态转变为另一个基态将需要改变无限数量的磁偶极子的方向，这对于有限的小人来说是不可能的任务（科尔曼，1975 年，第 141-142 页）。正如前面所说，在无限体积极限下，所有基态都受到超选择规则的分隔。Ruetsche（2006 年）从代数的角度讨论了对称性破缺和铁磁性。 Liu 和 Emch（2005）讨论了非相对论量子统计力学中解释 SSB 的解释问题。Fraser（2016）讨论了有限系统中的 SSB，反对在统计力学中表征 SSB 时无法缺少热力学极限的必要性。

同样的情景可以推广到量子场论（QFT），基态变成了真空态，而小人的角色则由我们自己扮演。这意味着可能存在于自然法则中的对称性对我们来说并不明显，因为我们所生活的物理世界是建立在一个不对它们具有不变性的真空态之上的。换句话说，我们所经历的物理世界可能对我们来说非常不对称，但这并不一定意味着这种不对称属于基本的自然法则。SSB 为理解（和利用）这种物理可能性提供了关键。

SSB 的概念在 20 世纪 60 年代初从凝聚态物理学转移到了 QFT，这要归功于 Y. Nambu 和 G. Jona-Lasinio 的研究成果。Jona-Lasinio（2003）首次介绍了 SSB 的概念是如何通过与 J. Bardeen、L. N. Cooper 和 J. R. Schrieffer（即所谓的 BCS 理论）在 1957 年的超导理论中（电磁）规范对称性破缺的类比基础上引入和形式化的。在 20 世纪 60 年代及其后的几年里，SSB 在粒子物理学中的应用产生了深远的物理后果，并在基本粒子的现行标准模型的建立中起到了基础性的作用。特别是，在 QFT 中连续内部对称性的自发破缺的情况下，以下是一些主要结果。

Goldstone 定理。在全局连续对称性的情况下，质量为零的玻色子（称为“Goldstone 玻色子”）会随着对称性的自发破缺而出现，这是由 J. Goldstone 在 1960 年首次提出的定理。这些质量为零的玻色子的存在，最初被视为一个严重的问题，因为在考虑的背景下没有观察到这种类型的粒子，实际上是解决另一个类似问题的基础——通过所谓的 Higgs 机制（见下一点）——这个问题是 1954 年的 Yang-Mills 非阿贝尔规范场理论预测了不可观测的质量为零的粒子，即规范玻色子。

Higgs 机制。根据 1964 年由（i）P. Higgs，（ii）R. Brout 和 F. Englert，以及（iii）G. S. Guralnik，C. R. Hagen 和 T. W. B. Kibble 独立建立的“机制”，在内部对称性被提升为局域对称性的情况下，Goldstone 玻色子“消失”，规范玻色子获得质量。Goldstone 玻色子被“吞噬”以给规范玻色子质量，而这发生在不（明确地）破坏理论的规范不变性的情况下。请注意，这种规范场质量生成机制也确保了涉及具有质量规范场的理论的可重整性（例如在 1960 年代后半期发展起来的 Glashow-Weinberg-Salam 电弱理论），这是由 M. Veltman 和 G. ’t Hooft 在 20 世纪 70 年代初首次进行了一般性的证明。Higgs 机制是物理哲学家之间激烈辩论的焦点：例如，参见 Smeenk（2006），Lyre（2008），Struyve（2011），Friederich（2013）。有关历史哲学分析，请参见 Borrelli（2012）。关于 Higgs 机制引发的基础和解释问题的详细讨论，请参见 Berghofer，François，Friederich，Gomes，Hetzroni，Maas 和 Sondenheimer（2023 年，3.3 节）。

动力学对称性破缺（DSB）。在统一的电弱相互作用模型等理论中，通过希格斯机制，负责为规范矢量玻色子赋予质量的 SSB 是由于引入了理论中的标量场（所谓的希格斯场）的破坏对称性的真空期望值。由于不同的原因 - 首先，这些标量场最初是临时引入的，没有实验证据，直到 2012 年 7 月在 LHC 获得的结果 - 一些人开始关注希格斯场可能是现象学的而不是基本的，即它们是由特定的动力学机制产生的束缚态。以这种方式实现的 SSB 被称为“DSB”。[18]

对称性破缺引发了许多哲学问题。其中一些仅与特定类型的对称性破缺有关，例如关于空间本质问题的奇偶违反的意义问题（见上文 2.4 节）。其他问题，例如对称性破缺与可观测性之间的联系，是有关物理对称性地位和意义的一般问题的特定方面，但在 SSB 的情况下，它们具有更强的力量：基于“隐藏”对称性和 SSB 的理论的认识论地位是什么？鉴于我们直接观察到的是不对称的物理情况和现象，对于“潜在”对称性有何证据？关于这一点，例如参见 Morrison（2003）和 Kosso（2000）。在缺乏直接经验证据的情况下，上述问题变成了基于 SSB 的理论的预测和解释能力是否有充分理由相信隐藏对称性的存在。最后，还有与 SSB 的动机和作用相关的问题。例如，Earman（2003a）使用 QFT 的代数形式来解释 SSB；关于代数方法中 QFT 中 SSB 的进一步哲学讨论，参见 Ruetsche（2011）、Fraser（2012）和相关参考文献。Landsman（2013）讨论了无限量子系统中的 SSB 是否可以看作是物理学中渐近出现的一个例子。Roberts（2022，4.5.4）认为 SSB 提供了一个违背 Earman（1989，3.4）著名原则的时空对称性的例子。

SSB 允许对称理论描述非对称的现实。简而言之，SSB 提供了一种理解自然复杂性的方式，而不放弃基本对称性。但是，为什么我们应该更喜欢对称的基本定律而不是非对称的呢？换句话说，为什么要假设观察到的不对称需要一个原因，这个原因可以是定律对称的明确破缺、非对称的初始条件或者 SSB？请注意，这个假设与居里在他 1894 年的著名论文中表达的假设非常相似。居里原理（原因的对称性必须在效应中找到；或者等价地，效应的不对称性必须在原因中找到），当扩展到包括 SSB 的情况时，等同于一种方法论原则，即现象的不对称性必须来自基本定律的对称性的破缺（明确或自发）。这个原则的真实本质仍然是一个悬而未决的问题，是一个正在发展的辩论的中心（见第 3 节）。

最后，让我们提到文献中有时提出的一个论点，即 SSB 意味着违反了居里原理，因为对称性被“自发地”破缺，即没有任何非对称的原因存在。现在，确实存在 SSB 指示的情况，即在定律（动力学方程）的对称性没有明确破缺的情况下，存在不变的解。但是，正如我们所见，这个“原因”的对称性并没有丢失，它在解的整体（整个“效应”）中得到保留。[19]

## 5. 一般哲学问题

最近关于物理学中对称性的哲学文献大多讨论具体的对称性及其引发的解释性问题。现代物理学中丰富多样的对称性意味着对物理学中对称性的地位和意义的问题并不容易解决。然而，我们可以从更一般的角度提出一些观点，并在这里提供一些相关的评论，首先从对称性在物理学中扮演的主要角色开始。

对称性发挥的最重要的角色之一是分类，例如，使用晶体的显著和多样的对称性质来对晶体进行分类。在当代物理学中，对称性的这种角色的最好例子是通过基本物理对称群的不可约表示对基本粒子进行分类，这是维格纳在他 1939 年关于非齐次洛伦兹群的幺正表示的著名论文中首次得到的结果。当一个对称性分类包括了表征给定类型物理对象的所有必要属性（例如，表征给定类型粒子的所有必要量子数）时，我们有可能根据它们的变换性质来定义实体的类型。这导致科学哲学家探索了现代物理学实体的结构主义方法，特别是对象的群论解释（参见 Castellani, 1998, Part II 中的论文）。对称性、群和结构之间的关系及其在结构主义方法中的应用，尤其是在结构实在论框架中，是一个备受争议的问题。例如，参见 Roberts（2011）、French（2014）和 Caulton（2015），以及 SEP 条目“结构实在论”。

对称性在物理理论中也具有规范作用，被用作对物理理论的约束条件。对于一个变换群的不变性的要求对理论的形式施加了严格的限制，限制了理论中可能出现的数量类型以及其基本方程的形式。一个著名的例子是爱因斯坦在寻找他的引力方程时使用了广义协变性。

物理对称性的群论处理，以及由相应的变换群的统一而导致的不同类型的对称性的统一，为对称性在理论统一中发挥强大作用提供了技术资源。这最好地体现在当前理论物理学中占主导地位的研究计划中，该计划旨在通过基础局域对称群的底层描述，实现对自然界所有基本力（引力、弱力、电磁力和强力）的统一描述。

人们常说，许多物理现象可以解释为对称原理或对称论证的（或多或少直接的）结果。在对称原理的情况下，对称性的解释作用源于它们在物理理论结构层次中的位置，而这又源于它们的普遍性。正如 Wigner（1967 年，第 28 页及以下）所描述的层次结构，对称性被视为法则的属性。对称性可以用来解释（i）法则的形式，以及（ii）某些事件的发生（或不发生）（后者类似于法则解释为什么某些事件发生而其他事件不发生的方式）。在对称论证的情况下，我们可以举例来借助居里原理来解释基于情况的对称性（或非对称性）而发生的某些现象，如上文第 3 节所讨论的。此外，就解释能力可能源于统一性而言，对称性的统一作用也导致了解释作用。

从这些不同的作用中，我们可以得出一些初步的关于对称性地位的结论。很明显，对称性具有重要的启发功能，表明它具有强大的方法论地位。这种方法论的力量是否与对称性的本体论或认识论地位有关？

根据本体论观点，对称性被视为物理世界的一个实质部分：理论的对称性代表存在于自然界中的属性，或者表征物理世界的结构。可以声称，对称性的本体论地位为对称性在物理学中的方法论成功提供了理由。一个具体的例子是利用对称性预测新粒子的使用。这可以通过分类角色来实现，根据对称分类方案中的空缺位置，如 1962 年在被称为“八重道”的强子分类方案背景下预测到的 Omega-粒子的著名案例所示。（有关导致此预测的推理的批判性分析，请参见 Bangu，2008 年。）或者，如在最近的案例中，通过统一角色：典型的例子是在 1967 年提出的 Glashow-Weinberg-Salam 规范理论的背景下预测 W 和 Z 粒子（在 1983 年实验上发现），该理论用于统一弱相互作用和电磁相互作用。这些令人印象深刻的新现象预测案例可能被用来为对称性的本体论地位进行论证，通过最佳解释的推理。

将对称性归因于自然界的另一个原因是所谓的时空对称性的几何解释，根据这一解释，物理定律的时空对称性被解释为时空本身的对称性，即物理世界的“几何结构”。此外，这种对对称性的看法可以扩展到非外部对称性，通过将其视为其他类型空间的属性，通常称为“内部空间”。对于这种对内部空间观点下的现实主义者到底承诺了什么，仍然是一个未解之谜，也是一个有趣的讨论话题。

对称性的本体论立场的限制可以通过研究它们的经验或观察状态来进行调查：所涉及的对称性是否可以直接观察到？我们首先必须解决对称性可观察性的含义，以及所有对称性是否具有相同的观察状态。Kosso（2000）得出结论，不同种类的对称性在经验状态上存在重要差异。特别是，虽然全局连续对称性可以通过诸如伽利略船实验之类的实验直接观察到，但局部连续对称性只能间接获得经验证据。Brading 和 Brown（2004）对 Kosso 的例子提出了不同的解释，但同意 Kosso 的评估，即局部对称变换无法展示类似于伽利略船实验的类比。Greaves 和 Wallace（2014）以及 Teh（2016）反对这种观点，最近争论认为，当适当理解时，局部对称性确实具有直接的经验意义（他们的论点依赖于使用渐近非平凡的局部对称性构建某些系统的伽利略船场景的可能性）。特别是，Teh（2016）认为，这种现象是拓扑孤立子解的经验显著对称性的原因。在类似的精神中，Gomes（2021）认为，某类规范变换在特定条件下与伽利略船处于同等地位，并且这些条件意味着一种特定类型的整体性，即宇宙的状态不仅由其孤立子系统的状态唯一确定。另一方面，Friederich（2015）认为，在 Greaves 和 Wallace 引入的模式的一个合理的公理化中，可以推导出局部对称性没有直接的经验意义。这场辩论最近由 Roberts（2022, 4）扩展。3) 包括像时间反演这样的离散对称变换。罗伯茨认为，这些对称性在直接经验意义上具有重要意义，但是在“高阶”层面上，这种意义是从时空平移的直接经验意义中得出的。

熟悉的全局时空对称性的直接观测状态使我们意识到对称性的认识论方面。根据维格纳的观点，时空不变性原则在发现自然法则的可能性方面起着先决条件的作用：“如果事件之间的相关性每天都在变化，并且在空间的不同点上也不同，那么就不可能发现它们”（维格纳，1967 年，第 29 页）。对于维格纳来说，对称性原则的这种概念本质上与我们的无知有关（如果我们能直接知道所有的自然法则，我们就不需要在寻找它们时使用对称性原则）。相反，其他人则认为对称性原则在康德的意义上起着“超越性原则”的作用（例如，参见迈泽尔，1996 年）。值得注意的是，在这方面，维格纳的起点并不意味着精确的对称性——认识论上所需要的只是全局对称性近似成立，适用于适当的时空区域，以便事件具有足够的稳定性和规律性，从而可以发现自然法则。

对称性之所以被视为主要是认识论的原因还有另一个。正如我们所提到的，对称性和等价性的概念之间存在着密切的联系，这也导致了一种无关性的概念：例如，空间点的等价性（平移对称性）可以理解为绝对位置对物理描述的无关性。关于这一点，我们可以有两种解释认识论意义：一方面，我们可以说对称性与我们对世界的描述中不可避免的冗余有关，另一方面，我们可以认为对称性表明了我们认识的局限性——存在着某些对象的属性，例如它们的绝对位置，是不可观测的。对称性与物理描述中非可观测量的存在相关联的观点，以及对称性的经验违反意味着原本被认为是不可观测的事实上是可观测的这一推论，特别是由偶然性破缺的发现者之一李政道（见第 2.4 节）提出并辩护。根据李政道（1981）的说法，“所有对称性原理的根源在于假设某些基本量是不可能被观测到的”（第 178 页）。关于这一点（以及更一般地关于对称性、等价性和无关性之间的关系），请参阅卡斯特拉尼（2003）。达斯古普塔（2016）在类似于李政道的基础上，以他称之为“对称性到现实的推论”的方式，为对称性提出了一种认识论解释。相反，罗伯茨（2022 年，4.4 节）认为对称性到现实的推论并不普遍有效。

最后，我们想提到对称性的一个方面，它可能非常自然地用于支持本体论或认识论的解释/理论。人们普遍认为对称性与客观性之间存在着密切的联系，再次起点是由时空对称性提供的：我们描述物理系统演化的方式具有客观的有效性，因为它们对所有观察者都是相同的。关于客观性不应取决于它被考虑的特定视角的古老而自然的观念，因此以以下群论术语重新表述：客观性意味着相对于参考系的变换群是不变的，或者引用赫尔曼·韦尔（1952 年，第 132 页）的话说，“客观性意味着相对于 [时空] 自同构群的不变性”。[21] Debs 和 Redhead（2007）将“不变主义”标记为“在指定的自同构群下的不变性既是客观性的必要条件，也是充分条件”（第 60 页）。他们指出（第 73 页，另见第 66 页），在“不变主义”和结构实在论之间存在着自然的联系。

最近对物理学的形而上学的兴趣包括对对称性的兴趣。Baker（2010）提供了一个易于理解的介绍，而 Livanios（2010）将对称性的讨论与倾向和本质联系起来，是这方面工作的一个例子。

总之：物理学中的对称性提供了许多解释的可能性，如何理解物理对称性的地位和意义，显然对物理学家和哲学家都是一个挑战。关于对称性哲学的最新综述是 Teh 即将发表的。


## Bibliography

* Albert, D., 2000, *Time and Chance*, Cambridge, MA: Harvard University Press.
* Anderson, J. L., 1967, *Principles of Relativity Physics*, New York: Academic Press.
* Ashtekar, A., 2015, “Response to Bryan Roberts: A new perspective on T violation”, *Studies in History and Philosophy of Modern Physics*, 52(A): 16–20.
* Baker, D., 2010, “Symmetry and the Metaphysics of Physics”, *Philosophy Compass*, 5(12): 157–1166.
* Bangu, S., 2008, “Reifying mathematics? Prediction and symmetry classification”, *Studies in History and Philosophy of Modern Physics*, 39: 239–258.
* Belot, G., 1998, “Understanding electromagnetism”, *The British Journal for the Philosophy of Science*, 49: 531–555.
* –––, 2003, “Notes on symmetries”, in K. Brading and E. Castellani (eds.), *Symmetries in Physics: Philosophical Reflections*, Cambridge: Cambridge University Press, pp. 391–409.
* –––, 2008, “An Elementary Notion of Gauge Equivalence”, *General Relativity and Gravitation*, 40: 199–215.
* –––, 2012, “Symmetry and equivalence ”, in R. Batterman (ed.), *The Oxford Handbook of Philosophy of Physics*, New York: Oxford University Press, Chap. 9.
* Berghofer, P., François, J., Friederich, S., Gomes, H., Hetzroni, G., Maas, A. and Sondenheimer, R., 2023, *Gauge Symmetries, Symmetry Breaking and Gauge-Invariant Approaches*, Cambridge: Cambridge University Press.
* Born, M., 1953, “Physical Reality”, *Philosophical Quarterly*, 3: 139–149. Reprinted in E. Castellani (ed.), *Interpreting Bodies: Classical and Quantum Objects in Modern Physic*, Princeton, NJ: Princeton University Press, 1998, pp. 155–167.
* Borrelli, A., 2012, “The case of the composite Higgs: The model as a ‘Rosetta stone’ in contemporary high-energy physics”, *Studies in History and Philosophy of Modern Physics*, 43: 195–214.
* Brading, K. A., 2002, “Which symmetry? Noether, Weyl and conservation of electric charge”, *Studies in History and Philosophy of Modern Physics*, 33: 3–22.
* –––, 2010, “Mathematical and aesthetic aspects of symmetry” (rev. of Hon and Goldstein, 2008), *Metascience*, 19: 277–280.
* Brading, K., and Brown, H. R., 2003, “Symmetries and Noether’s theorems”, in K. Brading and E. Castellani (eds.), *Symmetries in Physics: Philosophical Reflections*, Cambridge: Cambridge University Press, pp. 89–109.
* –––, 2004, “Are gauge symmetry transformations observable?”, *The British Journal for the Philosophy of Science*, 55: 645–665.
* Brading, K., and Castellani, E. (eds.), 2003, *Symmetries in Physics: Philosophical Reflections*, Cambridge: Cambridge University Press.
* Brading, K., and Castellani, E., 2007, “Symmetries and Invariances in Classical Physics”, in J. Butterfield and J. Earman (eds.), *Handbook of the Philosophy of Science. Philosophy of Physics*, Amsterdam: North Holland, pp. 1331–1367.
* Brown, H. R., and Brading, K., 2002, “General covariance from the perspective of Noether’s theorems”, *Diálogos*, 79: 59–86.
* Callender, C., 2000, “Is Time Handed in a Quantum World?”, *Proceedings of the Aristotelian Society*, 100: 247–269.
* Castellani, E. (ed.), 1998, *Interpreting Bodies: Classical and Quantum Objects in Modern Physic*, Princeton, NJ: Princeton University Press.
* Castellani, E., 2000, *Simmetria e natura*, Roma-Bari: Laterza.
* –––, 2003, “Symmetry and equivalence”, in K. Brading and E. Castellani (eds.), *Symmetries in Physics: Philosophical Reflections*, Cambridge: Cambridge University Press, pp. 422–433.
* –––, 2004, “Dirac on Gauges and Constraints”, *International Journal of Theoretical Physics*, 43(5): 1503–1514.
* –––, 2017, “Duality and ‘particle’ democracy”, *Studies in History and Philosophy of Modern Physics*, 59: 100–108.
* Castellani, E., and Ismael, J., 2016, “Which Curie’s Principle? ”, *Philosophy of Science*, 83(5): 1002–1013.
* Castellani, E., and De Haro, S., 2020, “Duality, Fundamentality, and Emergence”, in D. Glick, G. Darby, A. Marmodoro, *The Foundation of Reality: Fundamentality, Space and Time*, Oxford: Oxford University Press, pp. 195–216.
* Castellani, E., and Rickles, D. (eds.), 2017, *Dualities in Physics*, Special issue of *Studies in History and Philosophy of Modern Physics*, 59: 1–142.
* Catren, G., 2008, “Geometric Foundations of Classical Yang-Mills Theory”, *Studies in History and Philosophy of Modern Physics*, 39: 511–531.
* Caulton, A., 2015, “The role of symmetry in the interpretation of physical theories”, *Studies in History and Philosophy of Modern Physics*, 52(B): 153–162.
* Caulton, A. and Butterfield, J. 2012, “On Kinds of Indiscernibility in Logic and Metaphysics”, *The British Journal for the Philosophy of Science*, 63: 233–285.
* Chalmers, A. F., 1970, “Curie’s principle”, *The British Journal for the Philosophy of Science*, 21: 133–148.
* Coleman, S., 1975, “Secret symmetry: an introduction to spontaneous symmetry breakdown and gauge fields”, in A. Zichichi (ed.), *Laws of hadronic matter*, New York: Academic Press, pp. 138–215.
* CPLEAR Collaboration, 1998, “First direct observation of time-reversal non-invariance in the neutral-kaon system”, *Physics Letters B*, 444: 43–5.
* Curie, P., 1894, “Sur la symétrie dans les phénomènes physiques. Symétrie d’ un champ électrique et d’un champ magnétique”, *Journal de Physique*, 3rd series, vol.3, 393–417.
* Dasgupta, S., 2016, “Symmetry as an Epistemic Notion (Twice Over)”, *The British Journal for the Philosophy of Science*, 67: 837–878.
* Debs, T. and Redhead, M., 2007, *Objectivity, Invariance, and Convention: Symmetry in Physical Science*, Cambridge MA: Harvard University Press.
* De Haro, S., and Butterfield, J., 2018, “A Schema for Duality, Illustrated by Bosonization”, in J. Kouneiher (ed.), *Foundations of Mathematics and Physics one Century after Hilbert*, Cham: Springer, pp. 305–376.
* De Haro, S. and Butterfield, J., forthcoming, *The Philosophy and Physics of Duality*, Oxford: Oxford University Press.
* De Haro, S., Mayerson, D., and Butterfield, J., 2016, “Conceptual Aspects of Gauge/Gravity Duality”, *Foundations of Physics*, 46(11): 1381–1425.
* De Haro, S., Teh, N., and Butterfield, J., 2017, “Comparing Dualities and Gauge Symmetries”, *Studies in History and Philosophy of Modern Physics*, 59: 66–80.
* Dirac, P. A. M., 1931, “Quantized Singularities in the Electromagnetic Field”, *Proceedings of the Royal Society*, A 133: 60–72.
* Dougherty, J., 2020, “Large gauge transformations and the strong CP problem”, *Studies in History and Philosophy of Modern Physics*, 69: 50–66.
* Earman, J., 1989, *World enough and spacetime*, Cambridge, MA: MIT Press.
* –––, 2004, “Laws, Symmetry, and Symmetry Breaking; Invariance, Conservation Principles, and Objectivity” (PSA 2002 Presidential Address), *Philosophy of Science*, 71: 1227–1241.
* –––, 2002, “What time reversal is and why it matters”, *International Studies in the Philosophy of Science*, 16(3): 245–264.
* –––, 2003a, “Rough guide to spontaneous symmetry breaking”, in K. Brading and E. Castellani (eds.), *Symmetries in Physics:Philosophical Reflections*, Cambridge: Cambridge University Press, pp. 334–345.
* –––, 2003b, “Tracking down gauge: an ode to the constrained Hamiltonian formalism”, in K. Brading and E. Castellani (eds.), *Symmetries in Physics: Philosophical Reflections*, Cambridge: Cambridge University Press, pp. 140–162.
* –––, 2004, “Curie’s Principle and Spontaneous Symmetry Breaking”, *International Studies in the Philosophy of Science*, 18: 173–198.
* Earman, J. and Norton, J., 1987, “What price spacetime substantivalism? The hole story”, *The British Journal for the Philosophy of Science*, 38: 515–525.
* Fraser, D., 2012, “Spontaneous Symmetry Breaking: Quantum Statistical Mechanics versus Quantum Field Theory”, *Philosophy of Science*, 79(5): 905–916.
* Fraser, J. D., 2016, “Spontaneous Symmetry Breaking in Finite Systems”, *Philosophy of Science*, 83(4): 585–605.
* French, S. and Rickles, D., 2003, “Understanding permutation symmetry”, in K. Brading and E. Castellani (eds.), *Symmetries in Physics: Philosophical Reflections*, Cambridge: Cambridge University Press, pp. 212–138.
* French, S. and Krause, D., 2006, *Identity in Physics: A Formal, Historical and Philosophical Approach*, Oxford: Oxford University Press.
* French, S., 2014, *The Structure of the World*, Oxford: Oxford University Press.
* Friederich, S., 2013 “Gauge Symmetry Breaking in Gauge Theories—In Search of Clarification”, *European Journal for Philosophy of Science*, 3(2): 157–182.
* –––, 2015, “Symmetry, Empirical Equivalence, and Identity ”, *The British Journal for the Philosophy of Science*, 66(3): 537–559.
* Gołosz, J., 2016, “Weak Interactions: Asymmetry of Time or Asymmetry in Time?”, *Journal for General Philosophy of Science*, 48: 19–33.
* Gomes, H., 2021, “Holism as the empirical significance of symmetries”, *European Journal for Philosophy of Science*, 11(3): 1–41.
* Gomes, H., Roberts, B. W., & Butterfield, J., 2022, “The gauge argument: A Noether reason”, in J. Read and N. Teh (eds.), *The Philosophy and Physics of Noether’s Theorems*, Cambridge: Cambridge University Press, pp. 354–376.
* Greaves, H., 2010, “Towards a Geometrical Understanding of the CPT Theorem”, *The British Journal for the Philosophy of Science*, 61: 27–50.
* Greaves, H. and Thomas, T., 2014, “On the CPT theorem”, *Studies in History and Philosophy of Modern Physics*, 45: 46–65.
* Greaves, H. and Wallace, D., 2016, “Empirical Consequences of Symmetries”, *The British Journal for the Philosophy of Science* 65(1) : 59–89.
* Guay, A. and Hepburn, B., 2009, “Symmetry and Its Formalisms: Mathematical Aspects”, *Philosophy of Science*, 76: 160–178.
* Healey, R., 2001, “On the Reality of Gauge Potentials”, *Philosophy of Science*, 68: 432–455.
* –––, 2007, *Gauging What’s Real*, Oxford: Oxford University Press.
* –––, 2009, “Perfect symmetries”, *The* *British Journal for the Philosophy of Science*, 60: 697–720.
* Heisenberg, W., 1926, “Mehrkörperprobleme und Resonanz in der Quantenmechanik”, *Zeitschrift für Physik*, 38: 411–426.
* –––, 1932, “Über den Bau der Atomkerne. I”, *Zeitschrift für Physik*, 77: 1–11.
* Hon, G. and Goldstein, B. R., 2008, *From Summetria to Symmetry: The Making of a Revolutionary Scientific Concept*, London: Springer.
* Ismael, J., 1997,. “Curie’s principle”, *Synthese*, 110: 167–190.
* Jona-Lasinio, G., 2003, “Cross fertilization in theoretical physics”, in K. Brading and E. Castellani (eds.), *Symmetries in Physics:Philosophical Reflections*, Cambridge: Cambridge University Press, pp. 315–320.
* Kosso, P., 2000, “The empirical status of symmetries in physics”, *The British Journal for the Philosophy of Science*, 51: 81–98.
* –––, 2003, “Symmetry, objectivity, and design”, in K. Brading and E. Castellani (eds.), *Symmetries in Physics: Philosophical Reflections*, Cambridge: Cambridge University Press, pp. 410–421.
* Ladyman, J. and Bigaj, T., 2010, “The Principle of the Identity of Indiscernibles and Quantum Mechanics”, *Philosophy of Science*, 77: 117–136.
* Lanczos, C., 1949, *The variational principles of mechanics*, Toronto: University of Toronto Press.
* Landsman, N. P., 2013, “Spontaneous Symmetry Breaking in Quantum Systems: Emergence or Reduction?”, *Studies in History and Philosophy of Modern Physics*, 44: 379–394.
* Le Bihan, B. and Read, J., 2018, “Duality and Ontology”, *Philosophy Compass*, 13(12): e12555.
* Lee, T. D. and Yang, C. N., 1956, “Questions of Parity Conservations in Weak Interactions”, *Physical Review*, 104: 254–258.
* Lee, T. D., 1981, *Particle Physics and Introduction to Field Theory*, New York: Harwood Academic Publishers.
* Liu, C., 2003, “Spontaneous symmetry breaking and chance in a classical world”, *Philosophy of Science*, 70: 590–608.
* Liu, C. and Emch, G. G., 2005, “Explaining quantum spontaneous symmetry breaking”, *Studies in History and Philosophy of Modern Physics*, 36: 137–163.
* Livanios, V., 2003, “Symmetries, dispositions and essences”, *Philosophical Studies*, 148: 295–305.
* Lopez, C., 2021, “The physics and philosophy of time reversal in standard quantum mechanics”, *Synthese*, 199: 14267–14292.
* Lopez, C., 2023, “The metaphysical underdetermination of time-reversal invariance”, *Synthese*, 201: 1–29.
* Lyre, H., 2008, “Does the Higgs Mechanism Exist?”, *International Studies in the Philosophy of Science*, 22: 119–133.
* Mainzer, K., 1996, *Symmetries of nature*, Berlin: Walter de Gruyter.
* Malament, D., 2004, “On the time reversal invariance of classical electromagnetic theory”, *Studies in History and Philosophy of Modern Physics*, 35(2): 295–315.
* Martin, C., 2003, “On continuous symmetries and the foundations of modern physics”, in K. Brading and E. Castellani (eds.), *Symmetries in Physics: Philosophical Reflections*, Cambridge: Cambridge University Press, pp. 29–60.
* Morrison, M., 2003, “Spontaneous symmetry breaking: theoretical arguments and philosophical problems”, in K. Brading and E. Castellani (eds.), *Symmetries in Physics: Philosophical Reflections*, Cambridge: Cambridge University Press, pp. 346–362.
* Murgueitio Ramírez, S., and Teh, N., forthcoming, “Abandoning Galileo’s Ship: The quest for non-relational empirical significance”, *The British Journal for the Philosophy of Science*.
* Murray, L., Nguyen, J., and Teh, N., 2020, “Why surplus structure is not superfluous”, *The British Journal for the Philosophy of Science*, 71: 665–695.
* Norton, J. , 1989, “Coordinates and Covariance: Einstein’s view of space-time and the modern view”, *Foundations of Physics*, 19: 1215–1263.
* –––, 1993, “General covariance and the foundations of general relativity: eight decades of dispute”, *Reports on Progress in Physisc*, 56: 791–858.
* –––, 2003, “General covariance, gauge theories, and the Kretschmann objection”, in K. Brading and E. Castellani (eds.), *Symmetries in Physics: Philosophical Reflections*, Cambridge: Cambridge University Press, pp. 110–123.
* –––, 2016, “Curie’s Truism”, *Philosophy of Science*, 83(5): 1014–1026.
* Nounou, A., 2003, “A fourth way to the Aharonov-Bohm effect”, in K. Brading and E. Castellani (eds.), *Symmetries in Physics:Philosophical Reflections*, Cambridge: Cambridge University Press, pp. 174–200.
* Olver, P. J., 1995, *Equivalence, Invariants, and Symmetry*, Cambridge: Cambridge University Press.
* Pitts, B., 2006, “Absolute Objects and Counterexamples: Jones-Geroch Dust, Torretti Constant Curvature, Tetrad-Spinor, and Scalar Density”, *Studies in History and Philosophy of Modern Physics*, 37: 347–371.
* –––, 2014, “A first class constraint generates not a gauge transformation, but a bad physical change: The case of electromagnetism”, *Annals of Physics*, 351: 382–406.
* Pooley, O., 2003, “Handedness, parity violation, and the reality of space”, in K. Brading and E. Castellani (eds.), *Symmetries in Physics: Philosophical Reflections*, Cambridge: Cambridge University Press, pp. 250–280.
* –––, 2017, “Background Independence, Diffeomorphism Invariance, and the Meaning of Coordinates ”, in D. Lehmkuhl, G. Schiemann, and E. Scholz (eds.), *Towards a Theory of Spacetime Theories* (Einstein Studies: Volume 13), New York: Birkhauser, pp. 105–143.
* –––, 2021, “The hole argument”, in *The Routledge Companion to Philosophy of Physics* London: Routledge, pp. 145–159.
* O’Raifeartaigh, L., 1997, *The dawning of gauge theory*, Princeton, NJ: Princeton University Press.
* Read, J., 2016, “The Interpretation of String-theoretic Dualities”, *Foundations of Physics*, 46: 209–235.
* Read, J. and Møller-Nielsen, T., 2020, “Motivating Dualities”, *Synthese*, 197(1): 263–291.
* Read, J. and Teh, N. (eds.), 2022, *The Philosophy and Physics of Noether’s Theorems*, Cambridge: Cambridge University Press,.
* Redhead, M., 2003, “The interpretation of gauge symmetry”, in M. Kuhlmann, H. Lyre, and A. Wayne (eds.), *Ontological Aspects of Quantum Field Theory*, Singapore: World Scientific. Reprinted in K. Brading and E. Castellani (eds.), *Symmetries in Physics:Philosophical Reflections*, Cambridge: Cambridge University Press, pp. 124–139.
* Rickles, D., 2013, “AdS/CFT duality and the emergence of spacetime”, *Studies in History and Philosophy of Modern Physics*, 44(3): 312–320.
* Rickles, D., Smeenk, C., Lyre, H. and Healey, R., 2009, “Gauge Pressure”, *Metascience*, 18: 5–41.
* Roberts, B. W., 2011, “Group Structure Realism”, *The British Journal for the Philosophy of Science*, 62(1): 47–69.
* –––, 2013, “The Simple Failure of Curie’s Principle”, *Philosophy of Science*, 80: 579–592.
* –––, 2015, “Three merry roads to T violation”, *Studies in History and Philosophy of Modern Physics*, 52(A): 8–15.
* –––, 2016, “Curie’s hazard: From electromagnetism to symmetry violation”, *Erkenntnis*, 81(5): 1011–1029.
* –––, 2017, “Three myths about time reversal in quantum theory”, *Philosophy of Science*, 84(2): 315–334.
* –––, 2022, *Reversing the Arrow of Time*, Cambridge: Cambridge University Press.
* Ryckman, T. A., 2003, “The philosophical roots of the gauge principle: Weyl and transcendental phenomenological idealism”, in K. Brading and E. Castellani (eds.), *Symmetries in Physics: Philosophical Reflections*, Cambridge: Cambridge University Press, pp. 61–88.
* Rynasiewicz, R., 1999, “Kretschmann’s analysis of covariance and relativity principles”, in H. Goenner, J. Renn, J. Ritter and T. Sauer (eds.), *The expanding worlds of general relativity* (*Einstein Studies* 7), The Centre for Einstein Studies, Boston: Birkhauser, 431–462.
* Ruetsche, L., 2006, “Johnny’s So Long at the Ferromagnet”, *Philosophy of Science*, 73: 473–486.
* –––, 2011, *Interpreting quantum theories*, New York: Oxford University Press.
* Saunders, S., 2002, “Indiscernibles, general covariance, and other symmetries”, in A. Ashtekar, D. Howard, J. Renn, S. Sarkar, and A.Shimony (eds.), *Revisiting the Foundations of Relativistic Physics: Festschrift in Honour of John Stachel*, Dordrecht: Kluwer, pp. 151–173.
* –––, 2006, “Are quantum particles objects?”, *Analysis*, 66: 52–63.
* –––, 2007, “Mirroring as an A Priori Symmetry”, *Philosophy of Science*, 74: 452–480.
* Shubnikov, A. V. and Koptsik, V. A., 1974, *Symmetry in science and art*, London: Plenum Press.
* Smeenk, S., 2006, “The Elusive Higgs Mechanism”, *Philosophy of Science*, 73: pp. 487–499.
* Stewart, I. and Golubitsky, M., 1992, *Fearful symmetry. Is God a geometer?*, Oxford: Blackwell.
* Strocchi, F., 2008, *Symmetry Breaking*, Berlin-Heidelberg: Springer.
* –––, 2012, “Spontaneous Symmetry Breaking in Quantum Systems. A review for Scholarpedia,” arXiv: 1201. 5459v1 [physics.hist-ph].
* Struyve, W., 2011, “Gauge Invariant Accounts of the Higgs Mechanism”, *Studies in History and Philosophy of Modern Physics*, 42: 226–236.
* –––, forthcoming, “Time reversal invariance and ontology”, *The British Journal for the Philosophy of Science*.
* Teh, N., 2015, “A Note on Rovelli’s ‘Why Gauge?’ ”, *European Journal for the Philosophy of Science*, 5(3): 339–348.
* ––– 2016, “Galileo’s Gauge: Understanding the empirical significance of gauge symmetry”, *Philosophy of Science*, 83(1): 93–118.
* Teh, N., forthcoming, *The Philosophy of Symmetry*, Cambridge: Cambridge University Press.
* Teh, N. and Tsementzis, D., 2017, “Theoretical equivalence in classical mechanics and its relationship to duality”, *Studies in History and Philosophy of Modern Physics*, 59: 44–54.
* Teller, P., 2000, “The gauge argument”, *Philosophy of Science*, 67: 466–481.
* ’t Hooft, G., 1980, “Gauge theories and the forces between elementary particles”, *Scientific American*, 242: June, 90–166.
* van Fraassen, B. C., 1989, *Laws and symmetry*, Oxford: Oxford University Press.
* Wallace, D., 2009, “QFT, Antimatter, and Symmetry”, *Studies in the History and Philosophy of Modern Physics*, 40: 209–222.
* –––, 2019, “Who’s afraid of coordinate systems? An essay on the representation of spacetime structure”, *Studies in the History and Philosophy of Modern Physics*, 67: 125–136.
* –––, 2022, “Isolated systems and their symmetries, part I: General framework and particle-mechanics examples”, *Studies in History and Philosophy of Science*, 92: 239–248.
* –––, 2022, “Isolated systems and their symmetries, part II: Local and global symmetries of field theories”, *Studies in History and Philosophy of Science*, 92: 249–259.
* Weatherall, J., 2016, “Understanding Gauge”, *Philosophy of Science*, 83(5): 1039–1049.
* Weyl, H., 1952, *Symmetry*, Princeton, NJ: Princeton University Press.
* Wigner, E. P., 1927, “Einige Folgerungen aus der Schrödingerschen Theorie für die Termstrukturen”, *Zeitschrift für Physik*, 43: 624–652.
* –––, 1937, “On the Consequences of the Symmetry of the Nuclear Hamiltonian on the Spectroscopy of Nuclei”, *Physical Review*, 51: 106–119.
* –––, 1939, “On Unitary Representations of the Inhomogeneous Lorentz Group”, *Annals of Mathematics*, 40: 149–204.
* –––, 1967, *Symmetries and reflections*, Bloomington, Indiana: Indiana University Press.

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=symmetry-breaking). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/symmetry-breaking/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=symmetry-breaking&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](https://philpapers.org/sep/symmetry-breaking/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[quantum mechanics](https://plato.stanford.edu/entries/qm/) | [quantum theory: identity and individuality in](https://plato.stanford.edu/entries/qt-idind/) | [space and time: inertial frames](https://plato.stanford.edu/entries/spacetime-iframes/) | [space and time: the hole argument](https://plato.stanford.edu/entries/spacetime-holearg/) | [time: thermodynamic asymmetry in](https://plato.stanford.edu/entries/time-thermo/)

[Copyright © 2023](https://plato.stanford.edu/info.html#c) by  
[Katherine Brading](https://www.kbrading.org/)  
[Elena Castellani](http://www.unifi.it/p-doc2-2013-200007-C-3f2a3d313a282c-0.html) <[*elena.castellani@unifi.it*](mailto:elena%2ecastellani%40unifi%2eit)>  
[Nicholas Teh](https://philosophy.nd.edu/people/faculty/nicholas-teh/) <[*teh.2@nd.edu*](mailto:teh%2e2%40nd%2eedu)>

