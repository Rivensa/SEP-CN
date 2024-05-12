# 量子计算 quantum computing (Michael Cuffaro and Amit Hagar)

*首次发表于2006年12月3日；实质性修订于2024年3月5日。*

结合物理学、数学和计算机科学，量子计算和其姊妹学科量子信息学在过去几十年中从有远见的想法发展成为量子理论中最引人入胜的领域之一。量子计算的普遍兴趣和激动最初是由 P.W. Shor（1994 年）引发的，他展示了量子算法如何比任何已知的经典算法更有效地将大数分解为质数。Shor 的算法很快被其他几个用于解决组合和代数问题的算法所跟随，自那时以来，对量子计算系统的理论研究取得了巨大的进展。尽管目前还没有证据证明量子计算机在一般情况下优于经典计算机，但在大规模量子计算机上实现 Shor 算法将使目前广泛使用的依赖于无有效分解算法的密码系统失效。因此，全球的实验者正在努力解决阻碍实现大规模量子计算机的技术困难。

从社会历史的角度来看，量子计算是一个实验者领先于同行理论家的领域。事实上，量子的奥秘，如纠缠和非局域性，历史上被认为只是“纯粹哲学”兴趣，直到物理学家发现这些奥秘可以被利用来设计新的高效算法。但是，虽然利用数百个量子比特（量子计算机中的基本信息单位）的技术现在已经可以实现，但只有少数几个量子算法存在，对于这些算法是否真正能够胜过任何可能的经典替代方案的问题，对于理论家来说仍然是一个开放的问题。

从基础的角度来看，反思高效量子算法的设计和实现特征可能有助于我们更好地理解量子系统的本质，它可能阐明测量和因果关系等基本概念。此外，抽象的数学概念（如可计算性和复杂性）不仅可以被翻译成物理学，而且还可以被物理学重新书写，这直接涉及计算机科学的自主性以及其理论实体（所谓的“计算种类”）的地位。因此，这也与长期以来关于数学与物理世界之间关系的哲学辩论相关。

---

## 1. 领域的简要历史

### 1.1 物理计算复杂性

在量子计算机发明之前，数学家们已经定义了一种通用计算机的数学模型，称为图灵机。它由以下组成：（a）一个无限长的带子，被划分成若干个单元格；（b）一个“读写头”，能够在特定位置的单元格上读取或写入有限数量的符号；（c）一张指令表（实例化了一个转换函数），根据机器的初始“心态”（有限数量的状态之一，在计算过程中可以访问任意次数）和在该状态下从带子上读取的输入，确定（i）要写入当前头位置的符号，（ii）头的后续位移（向左或向右），以及（iii）机器的最终状态。1936 年，图灵（Turing）证明了由于可以将任何给定图灵机 T 的指令表编码为一个二进制数#(T)，存在一台通用图灵机 U，它在读取其带子上的给定#(T)时，可以模拟 T 对任何输入的操作。

在数学中，有效方法是指一种由有限数量的精确有限长度指令组成的方法，如果一个人只使用纸和铅笔严格按照这些指令执行，就能在有限步骤内产生某个期望的结果（Papayannopoulos 2023）。图灵机模型正式捕捉了有效可计算性的概念，这是充分体现了丘奇-图灵论题的本质。然而，由于该论题涉及到一个精确的数学概念（即图灵机）和一个非正式且直观的概念（即有效方法），严格来说它不能被证明或证伪，但可以被视为卡纳普（Carnap）意义上的阐释（Carnap 1962，第 I 章）。

简单的基数考虑表明，并非所有的函数都是图灵可计算的（所有图灵机的集合是可数的，而从自然数到自然数的所有函数的集合则不是），这个事实的发现在20世纪30年代是完全令人惊讶的（戴维斯，1958年）。但是，虽然判断一个给定的函数是否可以由图灵机计算是计算理论（布洛斯，伯吉斯和杰弗里，2007年）所关注的有趣而重要的问题，但这并不是唯一吸引计算机科学家的问题。尤其是从20世纪60年代开始（科布汉姆，1965年；埃德蒙兹，1965年；哈特曼尼斯和斯特恩斯，1965年），计算函数的成本问题也变得非常重要。这个成本，也被称为计算复杂性，自然地以解决计算问题所需的物理资源（特别是时间和空间，分别以计算步骤和内存位置表示）来衡量。计算机科学家根据成本函数随着输入规模n（存储输入所需的位数）的变化方式对计算问题进行分类。可处理或高效可解决的问题是那些可以在“多项式时间”内解决的问题；即，解决问题所需的时间步骤数量受到输入规模的多项式函数的限制，而难以处理的问题则是那些不能在“指数”时间内解决的问题。

对于像我们之前讨论的确定性图灵机（DTM）来说，它在任何给定时间的行为完全由其状态加上输入决定。换句话说，这样的机器有一个唯一的转换函数。然而，我们可以通过允许机器同时实例化多个转换函数来推广图灵模型。非确定性图灵机（NTM）在给定状态和输入的情况下，可以“选择”要遵循的转换函数，我们说它在解决一个给定问题时，只要在其状态空间中存在至少一条通向解决方案的路径。关于NTM在某个时间点上如何“选择”是否遵循一个转换函数而不是另一个，没有明确定义（图灵最初将这些选择看作是外部操作员的选择）。特别地，我们不假设这些选择与任何概率相关联。相比之下，对于概率图灵机（PTM），我们通过将每个可能转换与特定概率相关联来描述计算机的选择。

概率性和确定性图灵机（DTM）具有不同的成功标准。对于给定问题的成功确定性算法，它保证在给定输入时产生正确答案。另一方面，对于成功的概率性算法，我们只要求它以“高”概率产生正确答案（至少要求严格大于1/2）。直到最近，人们普遍认为对于某些问题（例如，Rabin 1976），概率性算法比任何确定性替代方案更高效；换句话说，概率性图灵机能够高效解决的问题集合或“类”比确定性图灵机能够高效解决的问题集合更大。现在普遍认为，从这个意义上讲，概率性图灵机模型实际上并没有比确定性图灵机模型提供计算优势（Arora＆Barak 2009，第20章）。然而，概率性（图灵）计算仍然是有趣的，因为从抽象的角度来看，量子计算只是概率性图灵机的一种变体，似乎比确定性计算提供了计算优势，尽管如前所述，这个猜想仍待证明。

P类（多项式类）是包含所有可以在多项式时间内由确定性图灵机（DTM）解决的计算决策问题的类别。NP类（非确定性多项式类）是包含所有可以在多项式时间内由非确定性图灵机（NTM）解决的计算决策问题的类别。NP中最著名的问题被称为“NP完全”问题，其中“完全”表示这些问题要么一起可解，要么一起不可解！如果我们知道如何高效地解决一个NP完全问题（即多项式成本），我们可以使用它高效地解决NP中的任何其他问题（Cook 1971）。今天我们已经知道了数百个NP完全问题的例子（Garey＆Johnson 1979），所有这些问题都可以通过多项式减速彼此归约。由于这些问题中已知的最佳算法是指数级的，普遍认为的猜想是没有多项式算法可以解决它们。显然P⊆NP。然而，证明或否定P≠NP的猜想可能仍然是计算机科学中最重要的未解问题之一。BPP类（有界概率多项式类）是指可以由概率图灵机（PTM）在多项式时间内以“高”概率（见上文）解决的问题的类别。最后，BQP类是指可以由量子计算机在多项式时间内以“高”概率解决的问题的类别。从计算机科学的角度来看，回答量子计算机是否比经典计算机更强大的问题相当于确定BPP ⊊ BQP是否成立（见Cuffaro 2018b）。

虽然原始的 Church-Turing 论题涉及到抽象的数学计算概念，但物理学家和计算机科学家经常将其解释为关于物理计算机的范围和限制的内容。沃尔夫拉姆（1985）声称任何物理系统都可以被通用图灵机模拟（以任意程度的近似），而图灵机模拟的复杂性界限具有物理意义。例如，如果计算 n 个粒子系统的最小能量需要至少指数级增长的步骤数，那么该系统实际上达到最小能量状态的松弛也将需要指数时间。阿哈罗诺夫（1999）在展示其与量子力学的潜在不兼容性时加强了这个论题，她说 PTM 可以以多项式成本模拟任何合理的物理设备。

为了使“物理 Church-Turing 论题”有意义，必须将物理空间和时间参数与计算的对应物：内存容量和计算步骤数进行关联。有多种方法可以做到这一点，从而导致论题的不同表述（参见 Copeland 2018; Gandy 1980; Pitowsky 1990; Sieg & Byrnes 1999）。例如，可以将通用图灵机的指令集和其无限纸带的状态编码为单个粒子位置坐标的二进制展开。因此，可以将通用图灵机在物理上“实现”为具有双曲镜的台球（Moore 1990; Pitowsky 1996）。

值得强调的是，严格来说，原始的图灵-教堂论题与其物理版本之间没有关系（Pitowsky＆Shagrir 2003），尽管前者涉及与逻辑相关的计算概念（因为它与需要验证的证明概念紧密相关），但它并不分析地暗示所有计算都应受到验证。事实上，模拟计算有着悠久的历史传统（Dewdney 1984; Maley 2023; Papayannopoulos 2020），这些计算的输出要么通过重复的“运行”进行验证，要么通过验证假定控制模拟计算机行为的物理理论进行验证。

### 1.2 计算的物理“捷径”

存在与物理图灵-丘奇论题相矛盾的物理过程吗？除了模拟计算之外，至少存在两种主要的例子，声称递归概念或图灵可计算性不是自然的物理属性（Hogarth 1994; Pitowsky 1990; Pour-el & Richards 1981）。尽管所涉及的物理系统（三维波动方程的特定初始条件和爱因斯坦场方程的奇特解，分别）有些人为，但仍然出现了一种名为“超计算”的学派，旨在扩展物理“超级计算机”的有限例子，并以此“计算”非图灵可计算的问题（Andréka, Madarász, Németi, Németi, & Székely 2018; Copeland 2002, 2011; Davis 2003）。量子超计算在文献中讨论得较少（参见，例如，Adamyan, Calude, & Pavlov 2004），但可以说最具体的尝试是利用量子理论来计算非可计算问题的建议是使用量子绝热算法（见下文）来解决希尔伯特的第十个问题（Kieu 2002, 2004）-一个图灵不可判定的问题，尽管这种所谓的量子绝热超级计算机被批评为不符合物理规律（参见Hagar & Korolev 2007; Hodges 2005 [其他互联网资源]）。

暂且不考虑超级计算机，即使我们只限制在图灵可计算函数上，文献中仍然可以找到许多声称能够显示计算资源“捷径”的提议。例如，考虑一下被声称能够在多项式时间内解决 NP 完全问题的 DNA 计算模型（Adleman 1994; Lipton 1995）。更仔细的检查显示，该模型中的计算成本仍然是指数级的，因为物理系统中的分子数量随问题规模呈指数增长。或者考虑使用杆和球的构造来解决另一个 NP 完全问题的所谓瞬时解决方案（Vergis, Steiglitz, & Dickinson 1986），不幸的是，它忽略了刚性杆中累积的时间延迟，导致整体上的指数级减速。这些和其他类似的模型似乎都不能作为物理上的图灵-丘奇论题的反例（就复杂性而言），因为它们都需要一些指数级的物理资源。然而，请注意，所有这些模型都是使用经典物理来描述的，因此不可避免地引出了一个问题：转向量子物理是否能让我们找到计算的捷径？对量子计算机的追求始于对这个问题给出肯定答案的可能性。

### 1.3 里程碑

早在1969年，史蒂文·威斯纳就提出了量子信息处理作为更好完成密码学任务的可能途径。但最早发表的四篇关于量子信息的论文（威斯纳的论文直到1983年才发表）分别属于亚历山大·霍列沃（1973年）、R·P·波普拉夫斯基（1975年）、罗曼·英加登（1976年）和尤里·马宁（1980年）。更为知名的是20世纪80年代初，IBM托马斯·J·沃森研究中心的查尔斯·H·贝内特、伊利诺伊州阿贡国家实验室的保罗·A·贝尼奥夫、牛津大学的大卫·德沃斯和加州理工学院的理查德·P·费曼做出的贡献。这个想法的出现是在科学家们研究计算的基本物理限制时：如果技术继续遵循“摩尔定律”（1965年由英特尔的联合创始人戈登·摩尔观察到，自集成电路发明以来，每平方英寸上的晶体管数量每18个月翻一番），那么硅芯片上紧密排列的电路的不断缩小尺寸最终会达到一个点，其中单个元素的大小将不大于几个原子。但由于控制假想电路在原子尺度上行为和性质的物理定律本质上是量子力学的，而不是经典力学的，自然而然地引出了一个问题：是否可以基于量子物理学原理设计一种新型的计算机。

受到 Ed Fredkin 关于可逆计算的思想的启发（参见 Hagar 2016），费曼是第一个尝试通过在 1982 年提出一个抽象模型来回答这个问题的人，该模型展示了量子系统如何用于进行计算。他还解释了这样一台机器如何能够作为量子物理的模拟器，并猜测任何经典计算机只能以低效的方式完成相同的任务。1985 年，David Deutsch 提出了第一个通用量子图灵机，为量子电路模型（Deutsch 1989）和量子算法的发展铺平了道路。

1990 年代发现了 Deutsch-Josza 算法（1992 年）和 Simon 算法（1994 年）。后者为 Shor 的因子分解算法提供了基础。该算法于 1994 年发表，标志着量子计算的发展中的“相变”，并在物理学界之外引起了极大的兴趣。在同一年，Cirac＆Zoller（1995 年）提出了使用囚禁离子实现量子 CNOT（控制非门）门的第一个实验实现。1995 年，Peter Shor 和 Andrew Steane（独立地）提出了第一个量子纠错方案。在同一年，根据 Cirac 和 Zoller 的提议，在科罗拉多州博尔德进行了第一个量子逻辑门的实现。1996 年，来自贝尔实验室的 Lov Grover 发明了一种量子搜索算法，与经典对应物相比，它具有可证明的（尽管只是二次的）“加速”。一年后，提出了基于核磁共振（NMR）技术的量子计算模型。这种技术在 1998 年实现了一个 2 量子比特寄存器，并在 2000 年在洛斯阿拉莫斯国家实验室扩展到了 7 量子比特。

量子计算的绝热和簇态模型分别于 2000 年和 2002 年被发现（Farhi，Goldstone，Gutmann 和 Sipser 2000; Raussendorf 和 Briegel 2002），2011 年 D-Wave 系统宣布推出了一台运行在 128 量子比特处理器上的绝热量子计算机系统“D-Wave one”（Johnson，Amin，Gildert 等人 2011）。2010 年代末期见证了嘈杂中间尺度量子计算（NISQ）时代的开始（Preskill 2018），2019 年，与 Google LLC 合作的科学家宣布（Arute，Arya，Babbush 等人 2019）他们已经实现了“量子计算霸权”（Aaronson 2019 [其他互联网资源]）-即（在这种情况下，NISQ）量子计算机的实际存在能够解决一个特定问题，对于该问题，目前没有已知的高效经典算法-至少直到 2022 年发现了一种能够超越 Google LLC 量子计算机的经典算法（Pan，Chen 和 Zhang 2022），更不用说随后的理论结果证明了 Google LLC 方法的固有局限性（Aharonov，Gao，Landau，Liu 和 Vazirani 2023）。尽管自 Shor 算法的发现以来该领域取得了巨大的发展，但基本问题至今仍然未解决：（1）从理论上讲，量子算法能否高效地解决经典难题？（2）从操作上讲，我们是否能够实现一个大规模的量子计算机来运行这些算法？

## 2. 基础知识

在本节中，我们将回顾量子算法的基本范式，即量子电路模型，它包括基本的量子信息单元（量子比特）和对其进行的基本逻辑操作（量子门）。有关更详细的介绍，请参阅 Nielsen 和 Chuang（2010）和 Mermin（2007）。

### 2.1 量子比特

量子比特是比特的量子模拟，比特是经典信息的基本单位。它是一个具有特定属性的数学对象，可以通过许多不同的方式在实际物理系统中实现。就像经典比特有一个状态——要么是 0，要么是 1——量子比特也有一个状态。然而，与经典比特不同的是，|0⟩和|1⟩只是量子比特的两种可能状态，任何线性组合（叠加）也是可能的。因此，量子比特的物理状态一般可以表示为叠加态|ψ⟩=α|0⟩+β|1⟩（其中α和β是复数）。量子比特的状态可以被描述为二维希尔伯特空间中的一个向量，这是一个复向量空间（参见量子力学条目）。特殊的状态|0⟩和|1⟩被称为计算基态，并且构成了该向量空间的一个正交归一基。根据量子理论，当我们尝试在这个基上测量量子比特以确定其状态时，我们以概率|α|2 得到|0⟩，以概率|β|2 得到|1⟩。由于|α|2+|β|2=1（即，量子比特是前述二维希尔伯特空间中的单位向量），我们可以（忽略整体相位因子）有效地将其状态写为|ψ⟩= cos(θ)|0⟩+eiϕsin(θ)|1⟩，其中θ和ϕ是定义在单位三维球上的点，如下图所示。这个球通常被称为布洛赫球，它提供了一种可视化单个量子比特状态空间的有用方法。

||0⟩|
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|![a sphere with  at the north pole and  at the south pole; from the center of the sphere there are 3 axes shown labelled x, y, and z The xy plan is horizontal intersects the equator of the sphere An arbitrary point on the surface of the sphere is noted by going angle phi horizontally from the x axis towards the y axis and then angle psi up towards the z axis](https://plato.stanford.edu/entries/qt-quantcomp/Blochsphere.png)|
||1⟩|

 布洛赫球

由于α和β是复数，因此是连续变量，人们可能会认为单个量子比特能够存储无限量的信息。然而，当测量时，它只产生经典结果（0 或 1），其概率由量子态指定。换句话说，测量改变了量子比特的状态，将其从叠加态“坍缩”为其中一个项。事实上，可以证明（Holevo 1973），从单个量子比特（Timpson 2013 年，47ff.称之为“可访问信息”）实际可检索的信息量不超过一比特。然而，如果不测量量子比特，则其“存储”的“隐藏”信息量（Timpson 称之为“规范信息”）在其（幺正）动力学演化下保持不变。量子力学的这个特性允许人们使用量子门（即幺正变换）操纵未测量量子比特中存储的信息，这也是量子计算机潜在能力的来源之一。

作为说明，假设我们有两个可用的量子比特。一对量子比特有四个计算基态：{|00⟩，|01⟩，|10⟩，|11⟩}。如果这些是经典比特，它们将表示系统的四个物理可能状态。但是，一对量子比特还可以存在于可以描述为这四个基态的叠加态中，每个基态都有自己的复数系数（其模的平方被解释为概率，被归一化）。只要量子系统以幺正方式演化且未被测量，可以想象它“存储”了那么多比特的（规范）信息。然而，困难的任务是在考虑到状态的可访问信息的限制下有效地使用这些信息。

### 2.2 量子门

经典计算门是操作存储在比特中的信息的布尔逻辑门。在量子计算中，这些门由矩阵表示，并可以视为在布洛赫球上的旋转。这种可视化表示了量子门是幺正算子，即它们保持量子态的范数不变（即 U†U=I，其中 U 是表示量子门的线性算子，U†是其伴随算子）。在经典计算中，一些门是“通用”的。例如，可以使用一些 NAND 门（每个门都评估“不是 A 和 B 都为真”函数）的字符串来实现两个输入 A 和 B 之间的所有可能的逻辑连接。另一个通用门是 NOR 门。在量子计算的背景下，已经证明（DiVincenzo 1995）两比特门（即转换两个量子比特的门）足以实现任何量子电路，即仅由（一小组）一比特门和两比特门组成的电路可以以任意精度逼近 n 比特的任何幺正变换。Barenco 等人（1995）特别指出，任何多比特逻辑门都可以以这种意义上的方式由单比特门和两比特控制非门（CNOT）门的组合组成，该门根据其“控制”输入比特的状态翻转或保持其“目标”输入比特（具体而言：在 CNOT 门中，目标比特的输出状态是类似于经典异或（XOR）门在输入上的操作的结果）。量子门与经典门的一个普遍特征是它们始终是可逆的：幺正矩阵的逆矩阵也是幺正矩阵，因此量子门总是可以通过另一个量子门来求逆。

CNOT=⎡⎢ ⎢ ⎢⎣1000010000010010⎤⎥ ⎥ ⎥⎦.![Two horizontal lines; the upper line has a filledin black circle in the middle; on the far left it is labelled ketx and the far right is labelled ketx; the lower line has an open circle in the middle; on the far left it is labelled kety and the far right is labelled ketx circleplus y; ther is a vertical line from the closed black circle all the way through to the bottom of the open circle](https://plato.stanford.edu/entries/qt-quantcomp/cnot1.jpg)

 CNOT 门

单位门操作存储在“量子寄存器”中的信息-一个量子系统，并且从这个意义上说，普通（单位）量子演化可以被视为一种计算。然而，为了读取这个计算的结果，量子寄存器必须被测量。测量被表示为一个非单位门，它将寄存器中的量子叠加“坍缩”到其项之一，其概率与该项的复系数相对应。通常，这是相对于计算基的描述，但原则上，可以在任何无限多个可能的正交归一基下进行测量，相对于这些基，给定状态|ψ⟩可以表示为基态的线性组合。恰好有些这样的测量比其他测量更难实现。

### 2.3 量子电路

量子电路与经典计算机电路类似，它们由逻辑线和门组成。线用于传递信息，而门用于操作信息（请注意，线是抽象的，不一定对应于物理线；它们可以对应于物理粒子，例如光子，在空间中从一个位置移动到另一个位置，甚至对应于时间演化）。通常，量子电路的输入被假定为一些量子比特，每个比特都初始化为计算基态（通常为|0⟩）。然后，在某个正交归一基（通常是计算基）中测量电路的输出状态。

第一个量子算法（即 Deutsch-Jozsa，Simon，Shor 和 Grover）是在这个范式中构建的。今天存在许多与电路模型在许多有趣的方面不同的量子计算范式。然而，到目前为止，它们都已被证明在计算资源上只有多项式开销的意义上与电路模型在计算上等效（见下文）。我们注意到这里与各种经典计算模型的并行性，对于这些模型来说，任何“合理”的模型都可以通过任何其他模型进行高效模拟（有关讨论，请参见 Cuffaro 2018b，274）。

## 3 个量子算法

算法设计是一项非常复杂的任务，在量子计算中，巧妙地利用量子力学的特性以使算法更加高效，使任务变得更加复杂。但在讨论量子算法设计的这一方面之前，让我们首先确信量子计算机实际上可以模拟经典计算。从某种意义上说，这是显而易见的，因为我们相信量子力学的普适性，并且观察到任何在计算基础上对角化的量子计算，即不涉及量子比特之间的干涉，实际上是经典的。然而，证明量子电路可以用来模拟经典电路并不是直接的（请记住，前者总是可逆的，而后者使用的门通常是不可逆的）。实际上，量子电路不能直接用来模拟经典计算，但后者仍然可以在量子计算机上使用中间门来模拟。这个通用的经典门有三个输入比特和三个输出比特。其中两个输入比特是控制比特，在门的作用下不受影响。第三个输入比特是目标比特，如果两个控制比特都设置为1，则翻转该比特，否则保持不变。这个门是可逆的（它的逆是它本身），但通过串联多个这样的门，可以模拟任何经典电路。因此，使用量子版本的Toffoli门（根据定义，它与经典Toffoli门类似地置换计算基础态），可以用量子可逆门来模拟不可逆的经典逻辑门，尽管相对繁琐。因此，量子计算机能够执行任何经典确定性计算机能够执行的计算。

概率计算如何？毫不奇怪，量子计算机也可以通过使用另一个著名的量子门——哈达玛门来模拟这种类型的计算。哈达玛门是一个单比特门，将输入状态|0⟩变为|0⟩+|1⟩/√2，将输入状态|1⟩变为|0⟩-|1⟩/√2。测量这两个输出状态之一会以 50/50 的概率得到|0⟩或|1⟩，这可以用来模拟一个公平的抛硬币。

 H=1/√2[111-1]![A circle is shown in the xy plane; on the positive xaxis, the circle point is labelled ket0; on the positive yaxis, the circle point is labelled ket1; dashed lines go from the origin up 45 degrees to the right and down 45 degress to the right; the point where the upper dashed line hits the circle is labelled ket0  ket1/sqrt2 and the point where the lower dashed line hits the circle is labelled ket0  ket1/sqrt2](https://plato.stanford.edu/entries/qt-quantcomp/Had1.png)

 哈达玛门

显然，如果量子算法只能用于模拟经典算法，那么人们对它们的兴趣将远远不及现在。但是，虽然可能总会有一些计算问题无法实现量子加速（参见 Myers 1997 和 Linden＆Popescu 1998 [其他互联网资源]），但社区普遍相信量子算法不仅可以模拟经典算法，而且在某些情况下实际上会超越后者，在我们对可解性和不可解性的抽象概念上产生有争议的影响（Cuffaro 2018b; Hagar 2007）。

### 3.1 基于量子电路的算法

#### 3.1.1 量子预言机

第一个量子算法的设计是为了解决基本上涉及使用“预言机”的问题，因此让我们从解释这个术语开始。预言机是一个概念设备，在计算问题的复杂性理论分析中被证明是有用的，可以将其想象为一种虚构的魔法黑盒子（Arora＆Barak 2009，72-73; Aaronson 2013a，29ff.），就像著名的德尔斐预言机一样，人们向其提出（是或否）问题。与古代的预言机不同，计算机科学中考虑的预言机总是在一个时间步骤中返回答案。例如，我们可以想象一个预言机来确定给定的布尔公式是否可满足：给定一个特定命题公式的描述作为输入，预言机在一个时间步骤中输出一个单一位，指示是否存在一个满足该公式的真值赋值。显然，这样的机器实际上并不存在 - SAT（可满足性的缩写）是一个 NP 完全问题 - 但这不是重点。使用这种虚构设备的重点是抽象出某些“实现细节”，这些细节由于某种原因被认为对于回答给定的复杂性理论问题不重要。例如，Simon 的问题（Simon 1994）是确定在位模 2 加法下周期性的给定函数 f 的周期。相对于 Simon 的问题，我们认为 f 的内部复杂性不重要，因此通过想象我们有一个在一个步骤中评估它的预言机来抽象出它。然而，尽管这些概念设备非常有用，但它们的用途是有限的。以 P = NP 为例，有相对于其 P = NP 的预言机，也有相对于其 P≠NP 的预言机。这（以及许多其他）问题并没有通过预言机得到澄清（参见 Fortnow 1994）。

#### 3.1.2 Deutsch 的算法

Deutsch（1989）提出了以下问题：假设我们有一个函数 f，它可以是常数，即对于所有可能的输入产生相同的输出值，或者是平衡的，即对于一半可能的输入，输出与另一半的输出相反。具体考虑的例子是一个函数 f：{0,1}→{0,1}，如果 f(0) = f(1)，则它是常数，如果 f(0) ≠ f(1)，则它是平衡的。在经典情况下，需要对函数进行两次评估才能确定它是哪种情况。在量子力学中，我们可以在一次评估中回答这个问题。

![Two horizontal parallel lines are shown; on the left each one is labelled ket0; from the left to the right, each has a box on top labelled 'X' and then a box labelled 'H'; continuing to the left there is a single box covering both lines labelled 'Uf'; thereafter the lower line has no labels and the upper line has a box labelled 'H' and ends with a box labelled with an arc crossed by a diagonal line](https://plato.stanford.edu/entries/qt-quantcomp/djalgo.png)

Deutsch 算法的示意图

在最初准备计算机的第一和第二个量子比特处于|0⟩|0⟩状态之后（Mermin 2007，第 2 章），通过使用“NOT”门（即 Pauli X 变换）将两个量子比特“翻转”（参见上图）到|1⟩，然后将每个量子比特经过一个 Hadamard 门。然后将这两个量子比特发送到一个被想象为一个单元门 Uf 的 oracle 或“黑盒”，代表我们希望确定其特性（常数还是平衡）的函数，其中我们定义 Uf 将输入|x,y⟩映射到|x,y⊕f(x)⟩，其中⊕表示模 2 加法（即异或）。然后将第一个量子比特输入到另一个 Hadamard 门中，算法的最终输出（在测量之前）是状态：

12|1⟩(|f(0)⟩−|^f(0)⟩)

每当 f 是常数时，状态为：

12|0⟩(|f(0)⟩−|^f(0)⟩)

每当 f 是平衡的时候，其中 ^f(x)≡1⊕f(x)。由于计算基态彼此正交，只需对第一个量子比特进行一次测量即可得到关于函数性质的答案。由于从 f:{0,1}→{0,1} 中存在两个可能的常数函数和两个可能的平衡函数，我们可以将该算法描述为在不确定析取式本身的真值的情况下，只使用一个预言机调用来区分两个量子析取式，即不确定平衡函数或常数函数 f 是哪个（Bub 2010）。

Deutsch-Jozsa 问题（Deutsch & Jozsa 1992）是对 Deutsch 问题的一般化，将考虑的函数类扩大到所有的函数 f:{0,1}n→{0,1}，而不仅仅是考虑 n=1 的情况。确定给定的函数是常数还是平衡的最佳经典确定性算法需要对预言机进行 2n2+1 次查询。然而，在量子计算机中，我们可以使用一次预言机调用来回答这个问题。与 Deutsch 算法类似，分析表明，量子计算机之所以只需要一次预言机调用来评估所讨论函数的全局属性，是因为计算机的输出状态是平衡态和常数态的叠加态，这些平衡态都位于系统希尔伯特空间中与常数态正交的子空间中，因此可以通过一次测量来区分它们（Bub 2006a）。

#### 3.1.3 Simon 算法

假设我们有一个布尔函数 f，它作用在 n 个比特上，是 2 对 1 的，即以这样的方式将 n 个比特映射到 n-1 个比特，对于每个 n 比特整数 x1，存在一个 n 比特整数 x2，使得 f(x1)=f(x2)。该函数在周期性上满足 f(x1) = f(x2)当且仅当 x1=x2⊕a，其中⊕表示按位模 2 加法，a 是一个称为 f 的周期的 n 比特非零数。Simon 的问题是找到给定的 f。相对于在单步中评估 f 的 oracle Uf，Simon 的量子算法（Simon 1994）在与 n 的长度线性增长的 oracle 调用次数中找到 f 的周期，而已知的最佳经典算法需要指数级更多的 oracle 调用次数。当 n=2 时，Simon 的算法归约为 Deutsch 的算法，并且可以被视为后者的扩展，因为在两种情况下，函数的全局属性仅在不超过（次）多项式数量的 oracle 调用中进行评估，这是因为计算机在最终测量之前的输出状态被分解为正交子空间，其中只有一个包含问题的解。请注意，Deutsch 的算法和 Simon 的算法之间的一个重要区别是前者可以确定地给出解，而后者只能以接近 1 的概率给出解。有关这些第一个基于量子电路的算法的逻辑分析的更多信息，请参见 Bub（2006a）和 Bub（2010）。

#### 3.1.4 Shor 的算法

尽管刚刚描述的算法展示了量子计算在经典计算之上的潜在优势，但它们仍然处理着看似不重要的计算问题。而且，它们中的每一个加速都只是相对于各自的预言机而言。因此，值得怀疑的是，如果 Shor 没有意识到 Simon 的算法可以用来解决一个更有趣和关键的问题，即分解问题，量子计算的研究是否会在 1990 年代引起如此多的关注。分解问题是广泛使用的加密协议（如 RSA）的核心问题（Rivest，Shamir 和 Adleman 1978）。Shor 的算法将量子计算变成了量子力学中最令人兴奋的研究领域之一。

Shor 的算法利用了巧妙的数论论证，即正整数 N=pq 的两个质因数 p 和 q 可以通过确定函数 f(x)=yxmodN 的周期 r 来找到，其中 y<N 且除了 1 以外与 N 没有公因数（Nielsen 和 Chuang 2010，附录 4）。函数 f(x)的周期取决于 y 和 N。如果知道了周期，当 r 是偶数且 yr2≠−1 mod N 时，就可以分解 N。对于任意随机选择的 y，这种情况的概率大于 12（否则就选择另一个 y 的值并重试）。N 的因子是 yr2±1 和 N 的最大公约数，可以使用众所周知的欧几里得算法在多项式时间内找到。换句话说，Shor 的杰出结果基于这样的发现：分解问题可以归约为找到某个周期函数的周期的问题。Simon 的算法暗示了这个问题可以由量子计算机高效解决，该算法考虑的是比特位模 2 加法下的周期函数，而不是这里考虑的普通加法下的周期函数。

尽管因子分解被认为只存在于 NP 类问题中，而不是 NP 完全问题（参见 Aaronson 2013a，64-66），Shor 的结果可以说是已知的量子加速最引人注目的例子。验证 n 是否为质数需要的步骤数是多项式级别的 log2n（自然数 n 的二进制编码需要 log2n 的资源）。但是没有人知道如何在多项式时间内经典地将数字分解为质数，我们目前对这个问题的最佳经典算法是亚指数级别的。许多广泛使用的现代密码协议都是基于这些事实的（Giblin 1993），而量子计算机可以在多项式时间内解决因子分解问题的发现因此产生了巨大的影响。在可扩展架构上实现该算法将产生经济和科学上的影响（Alléaume 等，2014）。

#### 3.1.5 Grover 算法

在一次精彩的秘密行动中，特工13成功获取了关于大反派西格弗里德行踪的两个关键信息：他打算从秘密藏身处开始执行KAOS对世界统治的计划的电话号码，以及这个号码是公开的（显然是西格弗里德的疏忽）。不幸的是，你和CONTROL的同事除了这些信息之外没有其他线索。你能否仅凭这个号码和电话簿找到西格弗里德的藏身之处？在理论计算机科学中，这个任务被称为无结构搜索。在最坏的情况下，如果电话簿中有n个条目，找到这个条目所需的计算资源将与n成线性关系。Grover（1996）展示了如何使用量子算法，在仅需大约√n的计算资源的情况下完成这个任务。同意，与Shor的速度提升相比，这个提升更为适度，因为无结构搜索属于P类问题，但与Shor的情况不同，经典复杂度仍未知的因子分解问题，这里量子算法的优越性，尽管适度，却是可以被证明的。Bennett、Bernstein、Brassard和Vazirani（1997）证明了这个二次速度提升也是该问题可能的最佳量子速度提升。

虽然 Grover 算法的目的通常被描述为“搜索数据库”，但更准确的描述可能是“反转函数”。粗略地说，如果我们有一个可以在量子计算机上评估的函数 y=f(x)，Grover 算法允许我们根据 y 计算 x。反转函数与搜索数据库有关，因为我们可以构造一个函数，如果 x 与数据库中的所需条目匹配，则产生特定值的 y，对于其他 x 值产生另一个值的 y。Grover 算法的应用广泛（甚至比挫败 Siegfried 统治世界计划更广泛）。例如，它可以用于高效确定 N 项搜索问题的解的数量，从而对 NP 完全问题的一类解进行穷举搜索，并大大减少解决该问题所需的计算资源。

### 3.2 绝热算法

自从发现第一个量子算法以来已经过去了几十年，但迄今为止，在用量子电路解决NP完全问题的“圣杯”方面进展甚微。2000年，麻省理工学院和东北大学的一组物理学家（Farhi等人，2000年）提出了一种与电路模型有几个有趣差异的量子计算新范式。他们的目标是尝试使用这个算法来解决最著名的NP完全问题之一：可满足性。根据绝热定理（参见Messiah，1961年），在给定特定条件的情况下，量子系统在绝热变换中保持在其最低能量状态，即所谓的基态。在这种变换中，系统从初始哈密顿量缓慢而平稳地变形到最终哈密顿量（举个例子，想象将一个正在睡觉的婴儿从客厅移动到卧室的摇篮中。如果过渡过程足够缓慢和平稳，并且婴儿睡得很香，那么它将在整个过渡过程中保持睡眠）。这个定理中最重要的条件是基态和下一个激发态之间的能量间隙（在我们的类比中，这个间隙反映了婴儿的熟睡程度）。这个间隙与演化时间T成反比，控制着后者。如果这个间隙在整个演化过程中存在（即系统的能级之间没有交叉），定理规定在绝热极限（当T→∞时）系统将保持在其基态。当然，在实践中，T总是有限的，但它越长，系统在时间演化过程中偏离基态的可能性就越小。

量子绝热算法的关键在于该定理的可能性，即将给定决策问题的特定实例编码到某个哈密顿量中（这可以通过利用众所周知的事实来完成，即任何决策问题都可以通过将数值界限作为附加参数并将其纳入其中来从优化问题中导出）。然后，将系统置于另一个易于构建的哈密顿量的基态，并以缓慢的方式随时间演化系统，使其向所需的哈密顿量变形。根据量子绝热定理并给定间隙条件，这种物理过程的结果是另一个能量基态，它编码了所需决策问题的解。因此，绝热算法是一种相对“悠闲”的算法：只需将系统置于其基态，绝热地变形它，并测量其最终基态以检索所需结果。但是，该算法是否能够实现所期望的加速取决于能隙随系统自由度数量增加的行为。如果该间隙随输入规模的增加呈指数级下降，则算法的演化时间将呈指数级增加；如果间隙呈多项式级下降，则所编码的决策问题可以高效地解决。物理学家们已经研究了近一个世纪的能谱间隙，但他们最近才开始考虑与计算有关的问题。现在已知，不存在一种算法可以确定任意量子多体系统的哈密顿量是否具有能隙（Cubitt, Perez-Garcia, & Wolf 2015）。在实践中，绝热量子计算机使用间隙放大技术来确保计算过程中始终存在能隙（Albash & Lidar 2018, sec. F）。

量子绝热算法具有很大的潜力（Farhi 等，2001 年）。已经证明（Aharonov 等，2008 年）它与电路模型在多项式上等价（也就是说，每个模型可以在量子比特和计算步骤的数量上相互模拟，只需要多项式的开销），但有时候被忽略的是，将其应用于一个棘手的计算问题有时可能需要解决另一个同样棘手的任务（这个一般性的担忧首先由一位哲学家提出；参见 Pitowsky，1990 年）。事实上，Reichardt（2004 年）已经证明，存在一些简单的问题，算法会陷入局部最小值，其中有指数多个本征值都与基态能量指数接近，因此即使对于这些简单问题，应用绝热定理也需要指数时间，我们又回到了起点。关于现有技术的最新调查，请参见 Albash＆Lidar（2018 年）。

### 3.3 基于测量的算法

基于测量的算法与电路算法不同，它们不仅在读取阶段使用测量，而且在计算过程中使用测量作为信息操作的基本机制，而不是使用幺正演化。它们分为两类。第一类是基于 Gottesman 和 Chuang（1999）的思想的量子电路算法，由 Nielsen（2003）和 Leung（2004）发展成为计算模型。第二类是“单向量子计算机”，也称为“簇态”模型（Raussendorf 和 Briegel 2002）。这些模型的有趣特点是它们可以使用非幺正测量有效地模拟幺正量子动力学，这与电路模型（Raussendorf，Browne 和 Briegel 2003）多项式等效。这是通过对一组高度纠缠的量子系统进行测量来实现的，每次测量所使用的正交基是通过经典计算机使用先前测量的结果计算出来的（参见 Duwell 2021，5.2）。

从基础的角度来看，基于测量的模型具有一些有趣之处。首先，在这些模型中，经典部分（即计算下一个测量基）和量子部分（即对纠缠比特进行测量）之间有明确的分离，这可能更容易确定导致加速的量子资源。此外，它们可能揭示纠缠在量子计算中的作用。它们还可能具有有趣的工程相关后果，提出了一种不同类型的更容错的计算机架构（Brown＆Roberts 2020；Nielsen＆Dawson 2005）。

### 3.4 拓扑量子场论（TQFT）算法

另一种量子计算模型引起了很多关注，尤其是来自微软公司（Freedman 1998）。这种模型是拓扑量子场论模型（Lahtinen＆Pachos 2017）。与易于可视化的电路模型相比，这种模型存在于理论物理学的最抽象领域。TQFT 描述的异国物理系统是物质的拓扑态。Witten（1989）证明了 TQFT 的形式体系可以应用于计算问题，并且这个想法后来被其他人发展起来。该模型的一个主要优点是它与电路模型（Aharonov，Jones 和 Landau 2009; Freedman，Kitaev 和 Wang 2002）在多项式等价性方面具有高容错性，这是因为在大规模量子计算机的实现中不可避免地引入了错误（见下文）。拓扑在这里特别有帮助，因为许多全局拓扑性质在定义上是不变的，并且鉴于大多数错误是局部的，编码在拓扑性质中的信息对它们是稳健的。

## 4 个实现方式

量子计算机可能是理论家的梦想，但对于实验者来说，实现它的全部过程是一场噩梦，因为这涉及到如何将构建量子计算机所需的元素组合成可扩展的系统的仍然未解决的问题（参见Van Meter＆Horsman 2013）。Shor算法可能会破解RSA加密，但如果它能分解的最大数字是21（Martín-López等人2012; Skosana＆Tame 2021），那么它将仍然只是个轶事。在基于电路的模型中，问题是实现一个可扩展的量子系统，同时能够（1）稳定地表示量子信息，具有（2）远远超过计算长度的退相干时间，（3）实现一组通用的酉变换，（4）准备一个基准初始状态，并（5）测量输出结果（这些是DiVincenzo（2000）的五个标准）。替代范式可能会用其他要求来替代其中的一些要求，但核心问题仍然是一样的，即必须以某种方式控制自己的量子系统，使系统保持“量子”状态，尽管在宏观或至少介观尺度上。

为了应对这些挑战，已经设计出了几种巧妙的解决方案，包括量子纠错码和容错计算（Aharonov＆Ben-Or 1997; de Beaudrap＆Horsman 2020; Horsman，Fowler，Devitt 和 Van Meter 2012; Raussendorf，Harrington 和 Goyal 2008; Shor 1995; Shor＆DiVincenzo 1996; Steane 1996），可以在“嘈杂”的量子计算过程中大大减少错误的传播。然而，对这些主动纠错方案的一个重要批评是，它们是为一个非常不现实的噪声模型而设计的，该模型将计算机视为量子系统，将环境视为经典系统（Alicki，Lidar，＆Zinardi 2006）。一旦允许更现实的噪声模型，大规模、容错性和计算能力更强的量子计算机的可行性就不太清楚了（Hagar 2009; Tabakin 2017）。

在短期内，实现在有限数量的问题领域中获得量子优势的一个有前途的途径是嘈杂中尺度量子（NISQ）范式（Lau，Lim，Shrotriya，＆Kwek 2022; Preskill 2018）。NISQ 范式不使用任何纠错机制（将这个问题推迟到未来实现可扩展版本），而是专注于构建计算组件，并解决那些对噪声具有更强韧性的计算问题。这些问题包括某些类别的优化问题、量子半定规划和数字量子模拟（Tacchino，Chiesa，Carretta，＆Gerace 2020）。需要注意的是，随着电路对噪声的韧性增加，其行为越来越接近经典行为。

正如刚才提到的，NISQ 计算的设想应用之一是数字量子模拟（即使用基于门的可编程量子计算机进行模拟）。然而，还有一种较早的模拟方法，即模拟使用一个量子系统，其动力学类似于特定目标系统的动力学。尽管人们相信数字量子模拟最终会取代它，但自从首次提出以来，模拟模拟领域已经取得了重大进展，并且模拟模拟器已经被用于研究量子动力学，这些动力学被认为是经典模拟器无法达到的范围（例如，Bernien 等人，2017 年;有关涉及的哲学问题的进一步讨论，请参见 Hangleiter，Carolan 和 Thébault，2022 年）。

## 5 个哲学问题

在本节中，我们回顾了一些与量子计算有关的重要哲学问题，这些问题已经在哲学和物理文献中进行了讨论。有关其中一些问题的更详细调查，仍然可以为非专业人士所理解，请参见 Cuffaro（2022 年）和 Duwell（2021 年）。

### 5.1 量子计算中的量子是什么？

暂且不考虑实现大规模量子计算机的实际问题，一个关键的理论问题仍然悬而未决：量子计算机超越经典计算机的潜在能力是由量子力学的哪些基本特征——物理资源——所负责的？已经提出了许多候选方案。Fortnow（2003）认为干涉是关键，尽管有人认为这并不是真正的量子现象（Spekkens 2007）。Jozsa（1997）和其他许多人指出纠缠，尽管对这个论点有所质疑（参见，例如，Linden＆Popescu 1998 [其他互联网资源]，Biham，Brassard，Kenigsberg 和 Mor 2004，以及对其重要性的哲学讨论参见 Cuffaro 2017）。Howard，Wallman，Veitch 和 Emerson（2014）提出了量子上下文相关性。对于 Bub（2010），答案在于量子力学的逻辑结构（参见 Dalla Chiara，Giuntini，Leporini 和 Sergioli 2018），而 Duwell（2018）则主张量子并行性。对于 Deutsch（1997）和其他人来说，“平行世界”是资源所在。

尽管这个问题“量子计算中的量子是什么？”看起来是推测性的，但它具有重要的实际后果。几乎可以肯定的是，实际上已经发现的量子算法稀缺的原因之一是对于什么使得量子计算机成为量子计算机的完全理解的缺乏。量子计算机的怀疑论者（Levin 2003）乐于利用这一点：如果没有人知道为什么量子计算机优于经典计算机，我们怎么能确定它们确实优于经典计算机呢？

#### 5.1.1 平行主义和多世界的争论

在量子计算的流行文献中，主导的答案是受到以下演变的驱动：

(1)Σx|x⟩|0⟩→Σx|x⟩|f(x)⟩,

这些特点在许多早期量子算法中很常见。注意到函数 f 在其所有可能的输入上同时进行评估的现象。我们应该直接接受这一点，即量子计算机实际上确实可以同时为许多不同的输入值计算函数，这就是杜威尔（2018年，2021年）所称的量子并行主题（QPT）。对于德意志来说，他接受这一点是真实的，量子并行主题的唯一合理解释是量子力学的多世界诠释（MWI）也是真实的。对于德意志来说，处于叠加态的量子计算机，就像任何其他量子系统一样，以某种方式同时存在于许多经典宇宙中。这些宇宙为计算机提供了进行并行计算的物理场所。这个结论也得到了 Hewitt-Horsman（2009年）和 Wallace（2012年）的支持。然而，Wallace指出，量子并行主题（QPT）以及对多世界的解释需求可能并不适用于所有或甚至大多数量子算法。

对于Pitowsky（2002）和Steane（2003）来说，量子加速的解释并不在于量子并行性。Pitowsky（2002）要求我们考虑一个已经使用基于量子电路的算法找到的解决方案，例如可满足性问题。量子算法可能通过一次性测试指数级的分配情况来解决这个问题，正如（1）所建议的那样，然而这种量子的“奇迹”对我们帮助不大，因为如前所述，对输出状态进行的任何测量都会使其坍缩，如果存在一个可能的真值分配来解决这个决策问题，那么检索到它的概率不会比经典概率图灵机猜测解决方案然后检查它的概率更大。Pitowsky的结论是，实现量子加速需要我们构建“聪明”的叠加态，使成功检索结果的概率远远超过纯粹猜测的概率（另请参见Aaronson 2022 [其他互联网资源]）。Steane（2003）等人认为，如果我们比较量子和经典算法实际产生的信息，我们应该得出结论，量子算法执行的计算不是更多，而是更少、更聪明，比经典算法更少（另请参见下面的第5.1.2节）。此外，Steane认为，量子计算的动机至少部分是由于标准量子形式主义的误导性方面。

MWI 方法的另一位批评者是 Duwell，他（与 Pitowsky 和 Steane 相反）接受了 QPT（Duwell 2018），但却否认（与 Deutsch 相反）它唯一支持 MWI（Duwell 2007）。在评估量子算法的计算效率时，考虑到超位置中项之间的相位关系（如（1））是至关重要的。然而，相位关系是状态的全局属性。因此，Duwell 认为，量子计算不仅仅由局部并行计算组成。但在这种情况下，QPT 并不唯一支持 MWI 而不是其他解释。

为了捍卫 MWI，Hewitt-Horsman（2009）认为（与 Steane 相反），声明量子计算机实际上并不生成（1）中所表示的每个评估实例是错误的，根据这种观点：在 MWI 上，原则上可以利用足够先进的技术提取这些信息。此外，Hewitt-Horsman 强调，MWI 并不仅仅是基于一种引人注目的数学表示。在 MWI 上，世界的定义是根据它们的解释有用性来确定的，特别是通过它们在与计算相关的时间尺度上的稳定性和独立性来体现。Wallace（2012）提出了类似的观点。

Aaronson (2013b)和 Cuffaro (2012, 2022)指出，量子计算的多世界解释（MWX）与多世界诠释（MWI）之间存在着一种表面上的紧张关系。后者通常使用退相干作为区分宏观世界的标准。然而，量子电路模型算法利用相干叠加。因此，为了区分计算世界，需要以某种方式修改退相干标准，但 Cuffaro 质疑是否可以在不事先承诺 MWI 的情况下成功地激发这种动机。此外，Cuffaro 认为，MWX 在实际目的上与基于测量的计算不兼容，因为即使承认修改后的世界识别标准的合法性，在这个模型中也没有自然的方式来识别所需的稳定和独立的世界。

#### 5.1.2 加速的难以捉摸的本质

即使我们可以排除多世界诠释，确定量子加速的物理资源仍然是一个困难的问题。除此之外，这个问题还涉及到如何衡量给定量子算法的复杂性，以及我们可以实际期望能够实现哪些量子操作的问题（Geroch 2009，第18章；Schmitz 2023）。答案根据具体的模型而有所不同。在绝热模型中，只需要估计能隙行为及其与输入大小的关系（编码在系统哈密顿量的自由度数量中）。在基于测量的模型中，我们计算需要的测量次数来揭示隐藏在输入集群态中的解决方案（由于集群态的准备是一个多项式过程，它不会增加计算的复杂性）。但在电路模型中，情况并不那么简单。毕竟，整个基于量子电路的计算可以表示为从输入态到输出态的单个酉变换。

这可能表明，量子计算机的能力来源，如果有的话，不在于其动力学（即薛定谔方程）本身，而在于量子态或“波函数”的某些特征。同时考虑到，在量子计算过程中“访问”的希尔伯特子空间，在任何时刻都是由计算过程在该时刻之前创建的所有向量所张成的线性空间。但是，这个希尔伯特子空间因此是由多项式数量的向量所张成的子空间，因此最多只是总希尔伯特空间的一个多项式子空间。然而，对于具有多项式维数的希尔伯特空间（即由参与计算的量子比特数的基向量数量是多项式的希尔伯特空间），可以用多项式数量的经典计算来进行量子演化的经典模拟。如果量子动力学是量子计算能力的唯一原因，后者可以在经典计算机上用多项式步骤来模拟（例如，参见Vidal 2003）。

这并不意味着量子计算比经典计算更强大。当然，关键点在于量子计算不会以任意叠加态结束，而是追求一个非常特殊、"聪明"的状态，用 Pitowsky 的术语来说。量子计算并不总是可以在经典计算机上高效模拟的，因为对某些量子态的计算子空间的表征是困难的。因此，在量子电路模型中，应该通过计算所需的一或两量子比特局部变换的数量来计算计算步骤的数量，而不是通过计算状态变换的数量。这些局部变换是为了创建确保所需加速的"聪明"叠加态。（请注意，例如 Shor 算法在这个背景下涉及三个主要步骤：首先，通过一组酉变换创建"聪明"纠缠态。计算的结果——函数的全局属性——现在"隐藏"在这个态中；其次，为了检索这个结果，将其投影到希尔伯特空间的子空间上，最后，通过另一组酉变换使结果在原始计算基上可测量。就算法的效率而言，所有这些步骤都算作计算步骤。另请参见 Bub 2006b。）关键是要在多项式时间内执行这些局部的一或两量子比特变换，很可能正是在这里找到了量子计算的物理能力所在。

### 5.2 实验形而上学？

量子信息革命引发了关于量子力学基础的讨论和辩论（其中物理学家和哲学家都起到了重要作用），这些讨论和辩论探讨了新兴科学对我们关于量子力学基础的认识（参见Bub 2016; Bub & Pitowsky 2010; Chiribella & Spekkens 2016; Cuffaro 2020; Dunlap 2022; Duwell 2020; Felline 2016; Henderson 2020; Koberinski & Müller 2018; Janas, Cuffaro, & Janssen 2022; Myrvold 2010; Timpson 2013）。确实（尽管见下文），似乎没有解决量子测量问题的方法（参见Felline 2020; Hagar 2003; Hagar & Hemmo 2006）。但是，一些人认为，新科学的兴起激发了对是否值得解决这个问题的重新思考。在量子力学解释的“信息方法”中，量子力学被视为将我们已经知道的有效约束经典物理学实践的东西（Curiel 2020 [其他互联网资源]）提升到了一个假设的层面，即将测量相互作用的结果解释为提供关于感兴趣系统的信息需要指定一个观察者的示意图表示，至少在一个“布尔框架”中表示与系统相关的一组是或否问题的答案。根据这种观点，经典物理学可以被理解为这种更一般理论的一个特例，其中这种示意图表示不会增加任何在原则上不包含在给定系统状态描述中的信息。据认为，量子力学之所以比经典力学更一般，是因为它能够表示在经典力学中无法有效表示的相关现象。 而且，这应该让我们重新考虑物理学中寻求满足我们经典直觉的量子力学基础理论的有用性，比如说一个物理学的“基本”理论必须解决测量问题。

并非所有由量子计算科学兴起引发的基础工作都对待测量问题持有这种态度，有些人希望最近在实现大规模量子计算机方面的进展实际上能为我们提供实证解决方案。事实证明，坍缩理论——量子理论的一种替代形式，旨在解决测量问题——修改了薛定谔方程，并在某些特定情况下给出与量子理论不同的预测。此外，如果退相干效应可以被抑制，这些情况还可以实现（Bassi，Adler 和 Ippoliti 2004）。现在，构建大规模量子计算机所面临的最困难的障碍之一是其对退相干效应的稳健性（Unruh 1995）。因此，大规模量子计算机的实现技术能力与“真实”和“虚假”坍缩（Pearle 1997）之间的区别（即，坍缩理论和环境诱导退相干之间的区别）有潜在关联。因此，如果大规模量子计算机的物理实现具有正确的架构，它有可能为理论基础中长期存在的概念问题提供启示，如果是这样，这将是实验形而上学的又一个例子（这个术语是由阿布纳·希蒙尼创造的，用于指代从 EPR 论证经由贝尔定理到阿斯佩特实验的一系列事件）。然而，请注意，正如刚才提到的，在得出任何形而上学结论之前，需要考虑计算机的架构。计算机架构很重要，因为虽然动力学坍缩理论倾向于坍缩涉及大量质量的宏观量的位置的叠加态，但它们倾向于不坍缩光子偏振或自旋的复杂大量叠加态。

### 5.3 量子因果关系

量子力学与因果性原理相容吗？这是一个古老的问题（Hermann 2017; Schlick 1961, 1962）。在当代文献中，对于以因果性解释量子现象的前景存在相当的怀疑（Hausman & Woodward 1999; Woodward 2007），尤其是在贝尔定理（Myrvold 2016）之后，或者至少是在局部因果性方面。然而，受计算机科学家非常熟悉的思想启发，物理学和哲学文献中关于因果性的一部分开始重新考虑在干预理论的背景下，至少在局部因果性解释量子现象的前景是否像最初看起来那样无望（Adlam 2023; Allen, Barrett, Horsman, Lee, & Spekkens 2017; Costa & Shrapnel 2016; Lorenz 2022; Shrapnel 2017）。当然，并不是说几十年来对贝尔定理后果的物理学和哲学研究都是错误的。首先，这些新工作中使用的干预框架是操作主义的，因此与所谓的隐藏变量量子力学理论的相关性不明确。其次，所使用的干预框架不是经典的，它们所解释的因果性也不是经典的。事实上，这项工作的一个关键洞见是先前用于分析量子背景下的干预因果性的框架对于该背景是不适当的。与经典的干预框架不同，其中事件被认为是原始的（即不能进一步分析的），这些广义框架中的事件被描述为具有相关输入和输出的过程。具体而言，使用量子计算和信息理论中的一个概念，即量子通道，来描述量子事件。 在这个广义的干预主义框架内，可以提供量子现象的因果模型，而不需要假设非局部的因果影响，并且满足因果模型通常要求的某些其他期望（特别是该模型遵守因果马尔可夫条件，并且不需要“精细调整”；参见 Shrapnel 2017）。

### 5.4（量子）物理科学的计算视角

物理学传统上被认为是一种主要的“理论”活动，从这个意义上说，人们普遍认为物理学的目标是告诉我们世界的本质是什么，即使只是间接地（Fuchs 2002，第 5-6 页），而不考虑任何目的的考虑。并非所有科学都是如此。例如，化学可以说是一门“实践”导向的学科，关注的是系统如何为特定目的进行操作（Bensaude-Vincent 2009）。即使在物理学中，也有一些子学科最好以这种方式来理解（Ladyman 2018；Myrvold 2011；Wallace 2014），事实上，一些人甚至主张将物理学重新概念化为可能和不可能转化的科学（Deutsch 2013；Marletto 2022；Marletto 等人 2022）。

在 Pitowsky 的工作（1990 年，1996 年，2002 年）中可以得出的思想基础上，Cuffaro（2017 年，2018a 年）认为，量子计算和信息理论（QCIT）在这个意义上是实用科学，而不是以传统特征为例的物理学所代表的“理论科学”；进一步认识到这种区别可以阐明这两个领域的活动。一方面，试图分离和/或量化量子计算机提供的计算资源的实用研究人员，如果不了解实用科学和传统科学之间的差异，就有可能陷入概念混淆的危险。另一方面，对于后者的基础性分析来说，应该警惕经典计算机模拟量子力学现象的意义。例如，某些数学结果可以合理地被认为是传统基础性分析的禁区定理，但对于表征可高效模拟的量子现象的类别来说并不真正相关。

### 5.5 邱奇-图灵论题和德意志原则

邱奇-图灵论题声称，每个自然可视为可计算的函数都是图灵可计算的，德意志认为这个论题预设了一个物理原则，即：

> [DP]: 每个有限可实现的物理系统都可以通过有限手段操作的通用模型计算机进行完美模拟。(Deutsch 1985)

由于没有通过有限手段操作的机器可以模拟经典物理学的状态连续性和动力学，Deutsch 认为在经典世界中 DP 是错误的。然而，他认为在量子物理学中是正确的，这是因为他在同一篇论文中引入了通用量子图灵机的存在，从而证明了 DP 和其基础的 Church-Turing 论题都是正确的。Lupacchini（2018）将这个将 Church-Turing 论题要求物理基础的想法置于历史背景中，追溯其思想源于哥德尔、Post 和 Gandy。Timpson（2013）对此进行了批评，他认为这种想法在方法论上是有益的，但仍然存在对 Church-Turing 论题含义的混淆，这本身与物理学无关（参见 Sprevak 2022）。

### 5.6（量子）计算和科学解释

在科学解释的一般哲学文献中，存在着所谓的“实际如何”和“可能如何”解释之间的区别，前者旨在传达特定结果的实际发生方式，后者旨在传达事件发生的可能性。实际如何解释的解释性是无争议的，但可能如何解释的价值（如果有的话）一直存在争议。虽然有些人认为可能如何解释是真正的解释，但其他人则认为可能如何“解释”最多只是一种启发性的有用练习。

结果发现，量子计算科学能够阐明这一辩论。Cuffaro（2015）认为，当我们研究量子加速的来源问题时，我们会发现回答这个问题就是比较各种算法过程，并通过描述与这些过程相关的可能性空间来解释。通过这样做，我们可以解释为什么一个过程能够胜过其竞争对手。此外，Cuffaro 认为，在这样的例子中，一旦回答了可能如何的问题，随后再问实际如何的问题实际上并没有任何收获。

### 5.7 是否存在计算种类？

最后，量子计算机的实现对于心灵哲学中关于计算理论自主性的长期辩论也具有哲学意义（Fodor 1974）。在从强人工智能到弱人工智能的转变中，这一观点的支持者试图对计算机程序施加限制，以使其符合认知科学理论的要求（Pylyshyn 1984）。这些限制包括符号的物理实现的性质以及抽象符号计算与执行它们的物理因果过程之间的关系。寻找这些理论的计算特征，即使它们成为心灵的计算理论，涉及到将计算机的某些特征孤立出来。换句话说，弱人工智能的支持者正在寻找计算特性或类型，这些特性或类型至少在某种程度上与计算机的物理构成或使用的具体机型无关。这些特性被认为在认知科学的辩论中具有重要作用，例如围绕功能主义的辩论（Fodor＆Pylyshyn 1988）。

然而需要注意的是，一旦物理上的丘奇-图灵论题被违反，可以说某些计算概念就不再是自主的。换句话说，鉴于量子计算机可能能够高效地解决经典上难以处理的问题，因此重新描述计算复杂性的抽象空间（Bernstein＆Vazirani 1997），计算概念甚至计算种类，如“高效算法”或“NP类”，可以说变得依赖于机器，并且在任何分析中都不可避免地需要诉诸“硬件”（Cuffaro 2018b; Hagar 2007）。量子计算的进展可能会对计算机科学中使用的类型和属性的非物理特征的功能主义观点产生影响。因此，高效的量子算法可能成为反对还原主义的先验论证的反例（Pitowsky 1996）-尽管对物理主义版本的该观点的概念挑战似乎也是非平凡的（Brown 2023）。

<!--md-padding-ignore-begin-->
## Bibliography

* Aaronson, S., 2013a, *Quantum Computing Since Democritus*, New York: Cambridge University Press.
* –––, 2013b, “Why Philosophers Should Care about Computational Complexity,” in B. J. Copeland, C. J. Posy, & O. Shagrir (eds.), *Computability: Turing, Gödel, Church, and Beyond*, pp. 261–327, Cambridge, MA: MIT Press.
* Adamyan, V. A., Calude, C. S., and Pavlov, B. S., 2004, “Transcending the Limits of Turing Computability,” in *Quantum Information and Complexity*, pp. 119–137.
* Adlam, Emily, 2023, “Is There Causation in Fundamental Physics? New Insights from Process Matrices and Quantum Causal Modelling,” *Synthese*, 201: 152.
* Adleman, L. M., 1994, “Molecular Computation of Solutions to Combinatorial Problems,” *Science*, 266: 1021–1024.
* Aharonov, D., 1999, “Quantum Computation,” in *Annual Reviews of Computational Physics VI*, pp. 259–346, Singapore: World Scientific.
* Aharonov, D., and Ben-Or, M., 1997, “Fault-Tolerant Computation with Constant Error,” in *Proceedings of the Twenty-Ninth ACM Symposium on the Theory of Computing*, Vol. 176.
* Aharonov, D., Jones, V., and Landau, Z., 2009, “A Polynomial Quantum Algorithm for Approximating the Jones Polynomial,” *Algorithmica*, 55: 395–421.
* Aharonov, Dorit, Gao, Xun, Landau, Zeph, Liu, Yunchao, and Vazirani, Umesh, 2023, “A Polynomial-Time Classical Algorithm for Noisy Random Circuit Sampling,” in *Proceedings of the 55th Annual ACM Symposium on Theory of Computing*, pp. 945–957, New York, NY, USA: Association for Computing Machinery.
* Aharonov, D., Van Dam, W., Kempe, J., Landau, Z., Lloyd, S., and Regev, O., 2008, “Adiabatic Quantum Computation Is Equivalent to Standard Quantum Computation,” *SIAM Review*, 50: 755–787.
* Albash, T., and Lidar, D. A., 2018, “Adiabatic Quantum Computation,” *Reviews of Modern Physics*, 90: 015002-1-01502-64.
* Alicki, R., Lidar, D., and Zinardi, P., 2006, “Internal Consistency of Fault Tolerant Quantum Error Correction,” *Phys. Rev. A*, 73: 052311.
* Alléaume, R., Branciard, C., Bouda, J., Debuisschert, T., Dianati, M., Gisin, N., … others, 2014, “Using Quantum Key Distribution for Cryptographic Purposes: A Survey,” *Theoretical Computer Science*, 560: 62–81.
* Allen, J. A., Barrett, J., Horsman, D. C., Lee, C. M., and Spekkens, R. W., 2017, “Quantum Common Causes and Quantum Causal Models,” *Physical Review X*, 7: 031021.
* Andréka, H., Madarász, J. X., Németi, I., Németi, P., and Székely, G., 2018, “Relativistic Computation,” in Cuffaro & Fletcher (2018), pp. 195–218.
* Arora, S., and Barak, B., 2009, *Computational Complexity: A Modern Approach*, Cambridge: Cambridge University Press.
* Arute, F., Arya, K., Babbush, R., and coauthors, 2019, “Quantum Supremacy Using a Programmable Superconducting Processor,” *Nature*, 574: 505–510.
* Barenco, A., Bennett, C. H., Cleve, R., DiVincenzo, D. P., Margolus, N., Shor, P., … Weinfurter, H., 1995, “Elementary Gates for Quantum Computation,” *Phys. Rev. A*, 52: 3457–3467.
* Bassi, A., Adler, S. L., and Ippoliti, E., 2004, “Towards Quantum Superpositions of a Mirror: Stochastic Collapse Analysis,” *Phys. Rev. Lett.*, 94: 030401.
* Bennett, C. H., Bernstein, E., Brassard, G., and Vazirani, U., 1997, “Strengths and Weaknesses of Quantum Computing,” *SIAM Journal on Computing*, 26: 1510–1523.
* Bensaude-Vincent, B., 2009, “The Chemists’ Style of Thinking,” *Berichte Zur Wissenschaftsgeschichte*, 32: 365–378.
* Bernien, H., Schwartz, S., Keesling, A., Levine, H., Omran, A., Pichler, H., … others, 2017, “Probing Many-Body Dynamics on a 51-Atom Quantum Simulator,” *Nature*, 551: 579.
* Bernstein, E., and Vazirani, U., 1997, “Quantum Complexity Theory,” *SIAM Journal on Computing*, 26: 1411–1473.
* Biham, E., Brassard, G., Kenigsberg, D., and Mor, T., 2004, “Quantum Computing Without Entanglement,” *Theoretical Computer Science*, 320: 15–33.
* Boolos, George S., Burgess, John P., and Jeffrey, Richard C., 2007, *Computability and Logic*, 5th edition, Cambridge: Cambridge University Press.
* Brown, B. J., and Roberts, S., 2020, “Universal Fault-Tolerant Measurement-Based Quantum Computation,” *Physical Review Research*, 2: 033305.
* Brown, Christopher Devlin, 2023, “Quantum Computation and the Untenability of a ‘No Fundamental Mentality’ Constraint on Physicalism,” *Synthese*, 201: 10.
* Bub, J., 2006a, “Quantum Computation from a Quantum Logical Perspective.”
* –––, 2006b, “Quantum Information and Computing,” in J. Butterfield & J. Earman (eds.), *Handbook of the Philosophy of Science, Philosophy of Physics, Part A*, pp. 555–660, Amsterdam: Elsevier.
* –––, 2010, “Quantum Computation: Where Does the Speed-up Come From?” in A. Bokulich & G. Jaeger (eds.), *Philosophy of Quantum Information and Entanglement*, pp. 231–246, Cambridge: Cambridge University Press.
* –––, 2016, *Bananaworld, Quantum Mechanics for Primates*, Oxford: Oxford University Press.
* Bub, J., and Pitowsky, I., 2010, “Two Dogmas about Quantum Mechanics,” in Simon Saunders, Jonathan Barrett, Adrian Kent, & David Wallace (eds.), *Many Worlds? Everett, Quantum Theory, and Reality*, pp. 433–459, Oxford: Oxford University Press.
* Carnap, Rudolf, 1962, *Logical Foundations of Probability*, 2nd edition, Chicago: The University of Chicago Press.
* Chiribella, G., and Spekkens, R. W., 2016, *Quantum Theory: Informational Foundations and Foils*, Dordrecht: Springer.
* Cirac, J. I., and Zoller, P., 1995, “Quantum Computations with Cold Trapped Ions,” *Phys. Rev. Lett.*, 74: 4091–4094.
* Cobham, A., 1965, “The Intrinsic Computational Difficulty of Functions,” in Yehoshua Bar-Hillel (ed.), *Logic, Methodology and Philosophy of Science: Proceedings of the 1964 International Congress*, pp. 24–30, Amsterdam: North-Holland.
* Cook, S. A., 1971, “The Complexity of Theorem-Proving Procedures,” in *Proceedings of the Third Annual ACM Symposium on Theory of Computing*, pp. 151–158, New York: ACM.
* Copeland, B. J., 2002, “Hypercomputation,” *Minds and Machines*, 12: 461–502.
* –––, 2011, “Do Accelerating Turing Machines Compute the Uncomputable?” *Minds & Machines*, 21: 221–239.
* –––, 2018, “Zuse’s Thesis, Gandy’s Thesis, and Penrose’s Thesis,” in Cuffaro & Fletcher (2018), pp. 39–59.
* Costa, F., and Shrapnel, S., 2016, “Quantum Causal Modelling,” *New Journal of Physics*, 18: 063032.
* Cubitt, Toby S., Perez-Garcia, David, and Wolf, Michael M., 2015, “Undecidability of the Spectral Gap,” *Nature*, 528: 207–211.
* Cuffaro, M. E., 2012, “Many Worlds, the Cluster-State Quantum Computer, and the Problem of the Preferred Basis,” *Studies in History and Philosophy of Modern Physics*, 43: 35–42.
* –––, 2015, “How-Possibly Explanations in (Quantum) Computer Science,” *Philosophy of Science*, 82: 737–748.
* –––, 2017, “On the Significance of the Gottesman-Knill Theorem,” *The British Journal for the Philosophy of Science*, 68: 91–121.
* –––, 2018a, “Reconsidering No-Go-Theorems from a Practical Perspective,” *The British Journal for the Philosophy of Science*, 69: 633–655.
* –––, 2018b, “Universality, Invariance, and the Foundations of Computational Complexity in the Light of the Quantum Computer,” in S. O. Hansson (ed.), *Technology and Mathematics: Philosophical and Historical Investigations*, pp. 253–282, Cham: Springer.
* –––, 2020, “Information Causality, the Tsirelson Bound, and the ‘Being-Thus’ of Things,” *Studies in History and Philosophy of Modern Physics*, 72: 266–277.
* –––, 2022, “The Philosophy of Quantum Computing,” in E. Miranda (ed.), *Quantum Computing in the Arts and Humanities*, pp. 107–152, Dordrecht: Springer.
* –––, 2023, “The Measurement Problem Is a Feature, Not a Bug – Schematising the Observer and the Concept of an Open System on an Informational, or (Neo-)Bohrian, Approach,” *Entropy*, 25: 1410.
* Cuffaro, M. E., and Fletcher, S. C. (eds.), 2018, *Physical Perspectives on Computation, Computational Perspectives on Physics*, Cambridge: Cambridge University Press.
* Dalla Chiara, Maria Luisa, Giuntini, Roberto, Leporini, Roberto, and Sergioli, Giuseppe, 2018, *Quantum Computation and Logic: How Quantum Computers Have Inspired Logical Investigations*, Cham: Springer.
* Davis, M., 1958, *The Undecidable*, New York: Dover.
* –––, 2003, “The Myth of Hypercomputation,” in C. Teuscher (ed.), *Alan Turing, Life and Legacy of a Great Thinker*, pp. 195–212, New York: Springer.
* de Beaudrap, Niel, and Horsman, Dominic, 2020, “The ZX Calculus Is a Language for Surface Code Lattice Surgery,” *Quantum*, 4: 218.
* Deutsch, D., 1985, “Quantum Theory, the Church-Turing Principle and the Universal Quantum Computer,” *Proc. Roy. Soc. Lond. A*, 400: 97–117.
* –––, 1989, “Quantum Computational Networks,” *Proc. Roy. Soc. Lond. A*, 425: 73–90.
* –––, 1997, *The Fabric of Reality*, New York: Penguin.
* –––, 2013, “The Philosophy of Constructor Theory,” *Synthese*, 190: 4331–4359.
* Deutsch, D., and Jozsa, R., 1992, “Rapid Solution of Problems by Quantum Computation,” *Proc. Roy. Soc. Lond. A*, 439: 553–558.
* Dewdney, A. K., 1984, “On the Spaghetti Computer and Other Analog Gadgets for Problem Solving,” *Scientific American*, 250: 19–26.
* DiVincenzo, D., 1995, “Two-Bit Gates Are Universal for Quantum Computation,” *Phys. Rev. A*, 51: 1015–1022.
* –––, 2000, “The Physical Implementation of Quantum Computation,” *Fortschritte Der Physik*, 48: 771–783.
* Dunlap, Lucas, 2022, “Is the Information-Theoretic Interpretation of Quantum Mechanics an Ontic Structural Realist View?” *Studies in History and Philosophy of Science*, 91: 41–48.
* Duwell, A., 2007, “The Many-Worlds Interpretation and Quantum Computation,” *Philosophy of Science*, 74: 1007–1018.
* –––, 2018, “How to Make Orthogonal Positions Parallel: Revisiting the Quantum Parallelism Thesis,” in Cuffaro & Fletcher (2018), pp. 83–102.
* –––, 2020, “Understanding Quantum Phenomena and Quantum Theories,” *Studies in History and Philosophy of Modern Physics*, 72: 278–291.
* –––, 2021, *Physics and Computation*, Cambridge: Cambridge University Press.
* Edmonds, J., 1965, “Paths, Trees, and Flowers,” *Canadian Journal of Mathematics*, 17: 449–467.
* Farhi, E., Goldstone, J., Gutmann, S., Lapan, J., Lundgren, A., and Preda, D., 2001, “A Quantum Adiabatic Evolution Algorithm Applied to Random Instances of an NP-Complete Problem,” *Science*, 292: 472–475.
* Felline, L., 2016, “It’s a Matter of Principle: Scientific Explanation in Information‐theoretic Reconstructions of Quantum Theory,” *Dialectica*, 70: 549–575.
* –––, 2020, “The Measurement Problem and Two Dogmas about Quantum Mechanics,” in M. Hemmo & O. Shenker (eds.), *Quantum, Probability, Logic: Itamar Pitowsky’s Work and Influence*, pp. 285–304, Cham: Springer.
* Feynman, R. P., 1982, “Simulating Physics with Computers,” *International Journal of Theoretical Physics*, 21: 467–488.
* Fodor, J., 1974, “Special Sciences,” *Synthese*, 2: 97–115.
* Fodor, J., and Pylyshyn, Z., 1988, “Connectionism and Cognitive Architecture, a Critical Analysis,” *Cognition*, 28: 3–71.
* Fortnow, L., 1994, “The Role of Relativization in Complexity Theory,” *Bulletin of the European Association for Theoretical Computer Science*, 52: 229–244.
* –––, 2003, “One Complexity Theorist’s View of Quantum Computing,” *Theoretical Computer Science*, 292: 597–610.
* Freedman, M. H., 1998, “P/NP and the Quantum Field Computer,” *Proc. Natl. Acad. Sci.*, 95: 98–101.
* Freedman, M. H., Kitaev, A., and Wang, Z., 2002, “Simulation of Topological Field Theories by Quantum Computers,” *Communications in Mathematical Physics*, 227: 587–603.
* Fuchs, Christopher A., 2002, “Quantum Mechanics as Quantum Information (and Only a Little More).”
* Gandy, R., 1980, “Church’s Thesis and Principles for Mechanisms,” in J. Barwise, H. J. Keisler, & K. Kunen (eds.), *The Kleene Symposium*, pp. 123–148, Amsterdam: Elsevier.
* Garey, M. R., and Johnson, D. S., 1979, *Computers and Intractability: A Guide to the Theory of NP-Completeness*, New York: WH Freeman.
* Geroch, R., 2009, *Perspectives in Computation*, Cambridge: Cambridge University Press.
* Giblin, P., 1993, *Primes and Programming*, Cambridge: Cambridge University Press.
* Gottesman, D., and Chuang, I., 1999, “Demonstrating the Viability of Universal Quantum Computation Using Teleportation and Single-Qubit Operations,” *Nature*, 402: 390–393.
* Grover, L. K., 1996, “A Fast Quantum Mechanical Algorithm for Database Search,” in *Proceedings of the Twenty-Eighth Annual ACM Symposium on Theory of Computing*, pp. 212–219, New York, NY, USA: Association for Computing Machinery.
* Hagar, A., 2003, “A Philosopher Looks at Quantum Information Theory,” *Philosophy of Science*, 70: 752–775.
* –––, 2007, “Quantum Algorithms: Philosophical Lessons,” *Minds & Machines*, 17: 233–247.
* –––, 2009, “Active Fault-Tolerant Quantum Error Correction: The Curse of the Open System,” *Philosophy of Science*, 76: 506–535.
* –––, 2016, “Ed Fredkin and the Physics of Information: An Inside Story of an Outsider Scientist,” *Information and Culture*, 51: 419–443.
* Hagar, A., and Hemmo, M., 2006, “Explaining the Unobserved: Why Quantum Mechanics Ain’t Only about Information,” *Foundations of Physics*, 36: 1295–1324.
* Hagar, A., and Korolev, A., 2007, “Quantum Hypercomputation – Hype or Computation?” *Philosophy of Science*, 74: 347–363.
* Hangleiter, D., Carolan, J., and Thébault, K. P. Y., 2022, *Analogue Quantum Simulation: A New Instrument for Scientific Understanding*, Cham: Springer.
* Hartmanis, J., and Stearns, R. E., 1965, “On the Computational Complexity of Algorithms,” *Transactions of the American Mathematical Society*, 117: 285–306.
* Hausman, D. M., and Woodward, J., 1999, “Independence, Invariance, and the Causal Markov Condition,” *The British Journal for the Philosophy of Science*, 50: 521–583.
* Henderson, L., 2020, “Quantum Reaxiomatisations and Information-Theoretic Interpretations of Quantum Theory,” *Studies in History and Philosophy of Modern Physics*, 72: 292–300.
* Hermann, G., 2017, “Natural-Philosophical Foundations of Quantum Mechanics (1935),” in E. Crull & G. Bacciagaluppi (eds.), E. Crull (trans.), *Grete Hermann: Between Physics and Philosophy*, pp. 239–278, Dordrecht: Springer.
* Hewitt-Horsman, C., 2009, “An Introduction to Many Worlds in Quantum Computation,” *Foundations of Physics*, 39: 869–902.
* Hogarth, M., 1994, “Non-Turing Computers and Non-Turing Computability,” in *PSA: Proceedings of the Biennial Meeting of the Philosophy of Science Association*, pp. 126–138, Philosophy of Science Association.
* Holevo, A. S., 1973, “Bounds for the Quantity of Information Transmitted by a Quantum Communication Channel,” *Problemy Peredachi Informatsii*, 9: 3–11. English translation in Problems of Information Transmission 9: 177–183, 1973.
* Horsman, C., Fowler, A. G., Devitt, S., and Van Meter, R., 2012, “Surface Code Quantum Computing by Lattice Surgery,” *New Journal of Physics*, 14: 123011.
* Howard, M., Wallman, J., Veitch, V., and Emerson, J., 2014, “Contextuality Supplies the ‘Magic’ for Quantum Computation,” *Nature*, 510: 351–355.
* Ingarden, R. S., 1976, “Quantum Information Theory,” *Rep. Math. Phys.*, 10: 43–72.
* Janas, Michael, Cuffaro, Michael E., and Janssen, Michel, 2022, *Understanding Quantum Raffles: Quantum Mechanics on an Informational Approach: Structure and Interpretation*, Cham: Springer-Verlag.
* Johnson, M., Amin, M., Gildert, S.others, 2011, “Quantum Annealing with Manufactured Spins,” *Nature*, 473: 194–198.
* Jozsa, R., 1997, “Entanglement and Quantum Computation,” in S. A. Huggett, L. J. Mason, K. P. Tod, S. T. Tsou, & N. M. J. Woodhouse (eds.), *The Geometric Universe*, pp. Ch. 27, Oxford: Oxford University Press.
* Kieu, T. D., 2002, “Quantum Hypercomputability,” *Minds and Machines*, 12: 541–561.
* –––, 2004, “A Reformulation of Hilbert’s Tenth Problem Through Quantum Mechanics,” *Proc. Royal Soc. A*, 460: 1535–1545.
* Koberinski, Adam, and Müller, Markus P., 2018, “Quantum Theory as a Principle Theory: Insights from an Information Theoretic Reconstruction,” in Cuffaro & Fletcher (2018), pp. 257–280.
* Ladyman, J., 2018, “Intension in the Physics of Computation: Lessons from the Debate about Landauer’s Principle,” in Cuffaro & Fletcher (2018), pp. 219–239.
* Lahtinen, Ville, and Pachos, Jiannis K., 2017, “A Short Introduction to Topological Quantum Computation,” *SciPost Physics*, 3: 021.
* Lau, Jonathan Wei Zhong, Lim, Kian Hwee, Shrotriya, Harshank, and Kwek, Leong Chuan, 2022, “NISQ Computing: Where Are We and Where Do We Go?” *Association of Asia Pacific Physical Societies Bulletin*, 32: 27.
* Leung, D. W., 2004, “Quantum Computation by Measurements,” *International Journal of Quantum Information*, 2: 33–43.
* Levin, L., 2003, “Polynomial Time and Extravagant Models,” *Problems of Information Transmission*, 39: 2594–2597.
* –––, 1999, “Good Dynamics Versus Bad Kinematics: Is Entanglement Needed for Quantum Computation?” *Phys. Rev. Lett.*, 87: 047901.
* Lipton, R., 1995, “Using DNA to Solve NP-Complete Problems,” *Science*, 268: 542–545.
* Lorenz, Robin, 2022, “Quantum Causal Models: The Merits of the Spirit of Reichenbach’s Principle for Understanding Quantum Causal Structure,” *Synthese*, 200: 424.
* Lupacchini, Rossella, 2018, “Church’s Thesis, Turing’s Limits, and Deutsch’s Principle,” in Cuffaro & Fletcher (2018), op. cit., pp. 60–82.
* Maley, Corey J., 2023, “Analogue Computation and Representation,” *The British Journal for the Philosophy of Science*, 74: 739–769.
* Manin, Y., 1980, *Computable and Uncomputable*, Moscow: Sovetskoye Radio.
* Marletto, Chiara, 2022, “The Information-Theoretic Foundation of Thermodynamic Work Extraction,” *Journal of Physics Communications*, 6: 055012.
* Marletto, Chiara, Vedral, Vlatko, Knoll, Laura T., Piacentini, Fabrizio, Bernardi, Ettore, Rebufello, Enrico, … Genovese, Marco, 2022, “Emergence of Constructor-Based Irreversibility in Quantum Systems: Theory and Experiment,” *Physical Review Letters*, 128: 080401.
* Martín-López, Enrique, Laing, Anthony, Lawson, Thomas, Alvarez, Roberto, Zhou, Xiao-Qi, and O’Brien, Jeremy L., 2012, “Experimental Realization of Shor’s Quantum Factoring Algorithm Using Qubit Recycling,” *Nature Photonics*, 6: 773–776.
* Mermin, David N., 2007, *Quantum Computer Science: An Introduction*, Cambridge University Press.
* Messiah, A., 1961, *Quantum Mechanics* Vol. II, New York: Interscience Publishers.
* Moore, C., 1990, “Unpredictability and Undecidability in Dynamical Systems,” *Phys. Rev. Lett.*, 64: 2354–2357.
* Myers, J., 1997, “Can a Universal Quantum Computer Be Fully Quantum?” *Phys. Rev. Lett.*, 78: 1823–1824.
* Myrvold, W. C., 2011, “Statistical Mechanics and Thermodynamics: A Maxwellian View,” *Studies in History and Philosophy of Modern Physics*, 42: 237–243.
* –––, 2016, “Lessons of Bell’s Theorem: Nonlocality, Yes; Action at a Distance, Not Necessarily,” in Mary Bell & Shan Gao (eds.), *Quantum Nonlocality and Reality: 50 Years of Bell’s Theorem*, pp. 238–260, Cambridge: Cambridge University Press.
* –––, 2010, “From Physics to Information Theory and Back,” in Alisa Bokulich & Gregg Jaeger (eds.), *Philosophy of Quantum Information and Entanglement*, pp. 181–207, Cambridge: Cambridge University Press.
* Nielsen, M., 2003, “Quantum Computation by Measurement and Quantum Memory,” *Phys. Lett. A*, 308: 96–100.
* Nielsen, M. A., and Chuang, I. L., 2010, *Quantum Computation and Quantum Information* 10th anniversary., Cambridge: Cambridge University Press.
* Nielsen, M. A., and Dawson, C. M., 2005, “Fault-Tolerant Quantum Computation with Cluster States,” *Physical Review A*, 71: 042323.
* Pan, Feng, Chen, Keyang, and Zhang, Pan, 2022, “Solving the Sampling Problem of the Sycamore Quantum Circuits,” *Physical Review Letters*, 129: 090502.
* Papayannopoulos, Philippos, 2020, “Computing and Modelling: Analog Vs. Analogue,” *Studies in History and Philosophy of Science*, 83: 103–120.
* –––, 2023, “On Algorithms, Effective Procedures, and Their Definitions,” *Philosophia Mathematica*, 31: 291–329.
* Pearle, P., 1997, “True Collapse and False Collapse,” in D. H. Feng & B. L. Hu (eds.), *Quantum Classical Correspondence: Proceedings of the 4th Drexel Symposium on Quantum Nonintegrability, Philadelphia, PA, USA, September 8–11, 1994*, pp. 51–68, Cambridge: International Press.
* Pitowsky, I., 1990, “The Physical Church Thesis and Physical Computational Complexity,” *Iyyun: The Jerusalem Philosophical Quarterly*, 39: 81–99.
* –––, 1996, “Laplace’s Demon Consults an Oracle: The Computational Complexity of Prediction,” *Studies in History and Philosophy of Modern Physics*, 27: 161–180.
* –––, 2002, “Quantum Speed-up of Computations,” *Philosophy of Science*, 69: S168–S177.
* Pitowsky, I., and Shagrir, O., 2003, “Physical Hypercomputation and the Church-Turing Thesis,” *Minds and Machines*, 13: 87–101.
* Poplavskii, R. P., 1975, “Thermodynamical Models of Information Processing (in Russian),” *Uspekhi Fizicheskikh Nauk*, 115: 465–501.
* Pour-el, M., and Richards, I., 1981, “The Wave Equation with Computable Initial Data Such That Its Unique Solution Is Not Computable,” *Advances in Mathematics*, 29: 215–239.
* Preskill, J., 2018, “Quantum Computing in the NISQ Era and Beyond,” *Quantum*, 2: 79.
* Pylyshyn, Z., 1984, *Computation and Cognition: Toward a Foundation for Cognitive Science*, Cambridge: MIT Press.
* Rabin, M., 1976, “Probabilistic Algorithms,” in J. Traub (ed.), *Algorithms and Complexity: New Directions and Recent Results*, pp. 23–39, New York: Academic Press.
* Raussendorf, R., and Briegel, H. J., 2002, “Computational Model Underlying the One-Way Quantum Computer,” *Quantum Information and Computation*, 2: 443–486.
* Raussendorf, R., Browne, D. E., and Briegel, H. J., 2003, “Measurement-Based Quantum Computation on Cluster States,” *Physical Review A*, 68: 022312.
* Raussendorf, R., Harrington, J., and Goyal, K., 2008, “Topological Fault-Tolerance in Cluster State Quantum Computation,” *New Journal of Physics*, 9: 1–24.
* Reichardt, B. W., 2004, “The Quantum Adiabatic Optimization Algorithm and Local Minima,” in *Proceedings of the Thirty-Sixth Annual ACM Symposium on Theory of Computing*, pp. 502–510.
* Rivest, R. L., Shamir, A., and Adleman, L., 1978, “A Method for Obtaining Digital Signatures and Public-Key Cryptosystems,” *Communications of the ACM*, 21: 120–126.
* Schlick, M., 1961, “Causality in Contemporary Physics I (1931),” *The British Journal for the Philosophy of Science*, 12: 177–193.
* –––, 1962, “Causality in Contemporary Physics II (1931),” *The British Journal for the Philosophy of Science*, 12: 281–298.
* Schmitz, Timothy, 2023, “On Epistemically Useful Physical Computation,” *Philosophy of Science*, 90: 974–984.
* Shor, P., 1995, “Scheme for Reducing Decoherence in Quantum Computer Memory,” *Phys. Rev. A.*, 52: 2493–2496.
* –––, 1994, “Algorithms for Quantum Computation: Discrete Logarithms and Factoring,” *Foundations of Computer Science, 1994 Proceedings., 35th Annual Symposium on*, 124–134.
* Shor, P., and DiVincenzo, D., 1996, “Fault Tolerant Error Correction with Efficient Quantum Codes,” *Phys. Rev. Lett.*, 77: 3260–3263.
* Shrapnel, S., 2017, “Discovering Quantum Causal Models,” *The British Journal for the Philosophy of Science*, 70: 1–25.
* Sieg, W., and Byrnes, J., 1999, “An Abstract Model for Parallel Computations,” *The Monist*, 82: 150–164.
* Simon, D. R., 1994, “On the Power of Quantum Computation,” in *1994 Proceedings of the 35th Annual Symposium on Foundations of Computer Science*, pp. 116–123, Los Alamitos, CA: IEEE Press.
* Skosana, Unathi, and Tame, Mark, 2021, “Demonstration of Shor’s Factoring Algorithm for N = 21 on IBM Quantum Processors,” *Scientific Reports*, 11: 16599.
* Spekkens, R. W., 2007, “Evidence for the Epistemic View of Quantum States: A Toy Theory,” *Phys. Rev. A*, 75: 032110.
* Sprevak, Mark, 2022, “Not All Computational Methods Are Effective Methods,” *Philosophies*, 7: 113.
* Steane, A. M., 1996, “Multiple Particle Interference and Quantum Error Correction,” *Proc. Roy. Soc. Lond. A*, 452: 2551–2577.
* –––, 2003, “A Quantum Computer Only Needs One Universe,” *Studies in History and Philosophy of Modern Physics*, 34: 469–478.
* Tabakin, F., 2017, “Model Dynamics for Quantum Computing,” *Annals of Physics*, 383: 33–78.
* Tacchino, F., Chiesa, A., Carretta, S., and Gerace, D., 2020, “Quantum Computers as Universal Quantum Simulators: State-of-Art and Perspectives,” *Advanced Quantum Technologies*, 3: 1900052.
* Timpson, C. G., 2013, *Quantum Information Theory & the Foundations of Quantum Mechanics*, Oxford: Oxford University Press.
* Turing, A. M., 1936, “On Computable Numbers, with an Application to the Entscheidungsproblem,” *Proceedings of the London Mathematical Society. Second Series*, s2–42: 230–265.
* Unruh, W. G., 1995, “Maintaining Coherence in Quantum Computers,” *Phys. Rev. A*, 51: 992–997.
* Van Meter, R., and Horsman, C., 2013, “A Blueprint for Building a Quantum Computer,” *Communications of the ACM*, 56: 16–25.
* Vergis, A., Steiglitz, K., and Dickinson, B., 1986, “The Complexity of Analog Computation,” *Mathematics and Computers in Simulation*, 28: 91–113.
* Vidal, G., 2003, “Efficient Classical Simulation of Slightly Entangled Quantum Computations,” *Phys. Rev. Lett.*, 91: 147902.
* Wallace, D., 2012, *The Emergent Multiverse*, Oxford: Oxford University Press.
* –––, 2014, “Thermodynamics as Control Theory,” *Entropy*, 16: 699–725.
* Wiesner, S., 1983, “Conjugate Coding,” *Sigact News*, 18: 78–88.
* Witten, E., 1989, “Quantum Field Theory and the Jones Polynomial,” *Comm. Math. Phys.*, 121: 351–399.
* Wolfram, S., 1985, “Undecidability and Intractability in Theoretical Physics,” *Phys. Rev. Lett.*, 54: 735.
* Woodward, J., 2007, “Causation with a Human Face,” in H. Price & R. Corry (eds.), *Causation, Physics, and the Constitution of Reality: Russell’s Republic Revisited*, Oxford: Oxford University Press.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=qt-quantcomp). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/qt-quantcomp/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=qt-quantcomp&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/qt-quantcomp/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* Aaronson, S., 2019, [Scott’s Supreme Quantum Supremacy FAQ!](https://scottaaronson.blog/?p=4317).
* –––, 2022, [How Much Structure Is Needed for Huge Quantum Speedups?](https://arxiv.org/abs/2209.06930v1).
* Curiel, E., 2020, [Schematizing the Observer and the Epistemic Content of Theories](https://arxiv.org/abs/1903.02182v3).
* Farhi, E., Goldstone, J., Gutmann, S., and Sipser, M., 2000, [Quantum Computation by Adiabatic Evolution](https://arxiv.org/abs/quant-ph/0001106v1).
* Hodges, A., 2005, [Can Quantum Computing Solve Classically Unsolvable Problems?](https://arxiv.org/abs/quant-ph/0512248v1)
* Linden, N., and Popescu, S., 1998, [The Halting Problem for Quantum Computers](https://arxiv.org/abs/quant-ph/9806054v2).

## Related Entries

[Bell’s Theorem](https://plato.stanford.edu/entries/bell-theorem/) | [Church-Turing Thesis](https://plato.stanford.edu/entries/church-turing/) | [computability and complexity](https://plato.stanford.edu/entries/computability/) | [computational complexity theory](https://plato.stanford.edu/entries/computational-complexity/) | [quantum mechanics](https://plato.stanford.edu/entries/qm/) | [quantum mechanics: collapse theories](https://plato.stanford.edu/entries/qm-collapse/) | [quantum mechanics: the role of decoherence in](https://plato.stanford.edu/entries/qm-decoherence/) | [quantum theory: philosophical issues in](https://plato.stanford.edu/entries/qt-issues/) | [quantum theory: quantum entanglement and information](https://plato.stanford.edu/entries/qt-entangle/) | [quantum theory: the Einstein-Podolsky-Rosen argument in](https://plato.stanford.edu/entries/qt-epr/) | [Turing, Alan](https://plato.stanford.edu/entries/turing/) | [Turing machines](https://plato.stanford.edu/entries/turing-machine/)

[Copyright © 2024](https://plato.stanford.edu/info.html#c) by  
[Michael Cuffaro](http://www.michaelcuffaro.com/) <[*mike@michaelcuffaro.com*](mailto:mike%40michaelcuffaro%2ecom)>  
[Amit Hagar](https://hagara.pages.iu.edu/)
<!--md-padding-ignore-end-->
