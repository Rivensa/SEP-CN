# 集合论：集合论的早期发展 early development (José Ferreirós)

*首次发表于 2007 年 4 月 10 日；实质修订于 2020 年 6 月 18 日*

集合论是现代数学的最伟大成就之一。基本上所有的数学概念、方法和结果都可以在公理集合论中表示。因此，集合论通过系统化现代数学，并以统一的形式处理关于可接受数学论证的所有基本问题，包括存在原理这个棘手的问题，发挥了独特的作用。本条目概述了集合论的发展过程，大致涵盖了 1850 年至 1930 年的时间段。

1910 年，希尔伯特写道，集合论是一门在我们的科学中占据重要地位，并向数学的各个分支辐射其强大影响力的数学学科。

> [希尔伯特 1910，466；由条目作者翻译]

这已经暗示了，为了讨论早期历史，有必要区分集合论的两个方面：作为现代数学基本原理的基础语言和存储库的角色；以及作为数学独立分支的角色，被分类为数理逻辑的一个分支（今天）。这两个方面在这里都被考虑到。

第一部分考察了集合论数学在 1870 年左右的起源和出现；接着讨论了该理论在 1900 年之前的扩展和巩固时期。第三部分介绍了 1897 年至 1918 年之间的关键时期，第四部分则涉及从策梅洛到哥德尔的时期（从理论到元理论），特别关注常常被忽视但至关重要的描述性集合论。

---

## 1. 出现

集合的概念对于经过训练的数学家来说似乎很简单，以至于很难正确判断和欣赏先驱们的贡献。他们付出了很多努力才能产生这些贡献，并且数学界花了相当长的时间才接受，但对我们来说可能显而易见甚至微不足道。首先应该注意到文献中普遍存在的三个历史误解：

1. 在康托尔之前，并不是所有人都普遍拒绝实际无穷。
2. 集合论观点不仅仅源自分析，还出现在代数、数论和几何学中。
3. 实际上，集合论数学的兴起早于康托尔的重要贡献。

所有这些观点将在接下来的内容中变得清晰明了。

集合的概念与计数一样古老，关于类的逻辑思想至少可以追溯到“波菲里树”（公元 3 世纪）。因此，很难搞清楚集合概念的起源。但是集合既不是日常意义上的“集合”，也不是 19 世纪中叶之前逻辑学家所说的“类”。关键缺失的要素是对象性——集合是一个数学对象，可以像其他对象一样进行操作（集合 N 和数字 3 一样都是“事物”）。为了澄清这一点，罗素使用了一个有用的区别，即作为多个的类（这是传统观念）和作为一个的类（或集合）。

在我们的故事中起着关键作用的恩斯特·策梅洛（Ernst Zermelo）说，这个理论在历史上是“由康托尔和戴德金创造的”[策梅洛 1908，262]。这表明了一个很好的实用标准：应该从对康托尔、戴德金和策梅洛的观念产生重大影响的作者开始。在很大程度上，这是本文采用的标准。然而，正如每个规则都有例外一样，博尔扎诺的情况很重要且有教益，尽管博尔扎诺对后来的作家没有产生重大影响。

在 19 世纪的德语区域，存在一些促进接受实际无限的智力倾向（例如，莱布尼兹思想的复兴）。尽管高斯警告无限只能是一种说法，但一些次要人物和三位重要人物（博尔扎诺、黎曼、戴德金）在康托尔之前完全接受了数学中的实际无限。这三位作者积极推动了数学思想的集合论表述，其中戴德金在许多经典著作（1871 年，1872 年，1876/77 年，1888 年）中的贡献至关重要。

按时间顺序，伯纳德·波尔查诺是第一个，但他几乎没有产生影响。他在逻辑和数学基础方面的工作质量很高，这是众所周知的。一本名为《无限的悖论》的书于 1851 年在他去世后出版。在这本书中，波尔查诺详细论证了围绕无限存在的一系列悖论在逻辑上是无害的，并有力地捍卫了实际无限的存在。他提出了一个有趣的论证，试图证明无限集的存在，这与戴德金后来的论证（1888 年）相比较。尽管他使用了不同种类的集合或类的复杂区分，但波尔查诺清楚地认识到可以将两个无限集一一对应，就像可以轻松地用函数 5y=12x 将区间[0,5]和[0,12]对应起来一样。然而，波尔查诺抵制了“在其部分的多样性方面，两个集合都是相等的”的结论[1851 年，30-31 页]。很可能，传统的测量观念在他的思维方式中仍然过于强大，因此他错过了基数概念的发现（然而，可以考虑非康托尔的思想，有关详见曼科苏 2009 年的著作）。

波尔查诺案例表明，从度量概念中解放出来（随着投影几何和拓扑学理论的发展而来）在使抽象的集合论观点成为可能方面起着关键作用。伯恩哈德·黎曼提出了关于拓扑学的有远见的想法，并提出了以集合或“多样体”（Mannigfaltigkeit）的概念为基础来建立数学的全部的观点，在他著名的就职演讲“关于几何学基础的假设”（1854/1868a）中体现出来。黎曼的另一个特点是对概念数学的极大强调，尤其在他对复分析的方法中尤为明显（这又深入到了拓扑学中）。举一个最简单的例子，黎曼热衷于迪利克雷的观点，即函数必须被看作是数值之间的任意对应关系，无论是否能用公式表示；这意味着抛弃了将函数定义为解析表达式的时代。通过这种新的数学风格，以及他对集合的新角色和完整的拓扑学发展计划的愿景，黎曼对戴德金和康托尔都产生了重要影响（参见 Ferreirós 1999 年）。

1868 年至 1872 年的五年期间，德国出现了大量的集合论提案，以至于我们可以将其视为集合论数学的诞生。黎曼在 1854 年发表的几何学讲座，于 1868 年由戴德金与黎曼的三角级数论文一同出版（1854/1868b，该论文介绍了黎曼积分）。后者成为了实分析深入研究的起点，开始研究“严重”不连续的函数。年轻的格奥尔格·康托尔进入了这个领域，从而引导他研究点集。1872 年，康托尔引入了一种点集的操作（见下文），不久他就开始思考将该操作迭代至无穷以及更远的可能性：这是对超限领域的第一次瞥见。

与此同时，理查德·戴德金在 1871 年提出了另一个重要的发展。在他对代数数论的研究中，戴德金引入了一种基本上是集合论的观点，定义了代数数的域和理想。这些思想以非常成熟的形式呈现，利用了集合操作和保持结构的映射（参见费雷罗斯 1999 年的相关段落：92-93；康托尔在他自己关于集合论的工作中使用了戴德金的术语来表示操作[1999 年：204]）。在考虑代数数域中的整数环时，戴德金定义了一些称为“理想”的子集，并对这些集合进行了操作，形成了新的对象。这个过程是他对这个主题的一般方法的关键。在其他的作品中，他非常清楚和准确地处理了等价关系、分割集、同态和自同态（关于等价关系的历史，参见阿斯哈里 2018 年）。因此，二十世纪数学中许多常见的集合论程序都可以追溯到他的工作。几年后（1888 年），戴德金将集合论的基本要素发表出来，更加明确地阐述了他自 1871 年以来一直在使用的集合和映射的操作。

接下来的一年，戴德金发表了一篇论文[1872]，在其中他提供了对实数集合 R 的结构的公理分析。他将其定义为一个有序域，同时也是完备的（在这个意义上，R 上的所有戴德金切割都对应于 R 中的一个元素）；在这个意义上的完备性是阿基米德公理的结果。康托尔在 1872 年也提供了一个对 R 的定义，使用了有理数的柯西序列，这是对卡尔·魏尔斯特拉斯在他的讲座中提出的定义的一种优雅简化。魏尔斯特拉斯更喜欢的完备性公理形式是波尔查诺的原理，即 R 中的一系列嵌套闭区间（一个序列，使得[am+1,bm+1]⊂[am,bm]）“包含”至少一个实数（或者，我们可以说，有一个非空交集）。

康托尔和戴德金对实数的定义都隐含地依赖于集合论，并且可以从回顾的角度看出涉及到幂集原理的假设。两者都假定了有理数集合，并且对于 R 的定义，它们依赖于一定数量的无穷有理数集合的总体（无论是柯西序列的总体，还是所有戴德金切割的总体）。随着这一点，对集合论的构造主义批评开始出现，因为勒奥波尔德·克罗内克开始对这种无穷程序提出异议。同时，对 R 的拓扑学的研究也开始出现，特别是在魏尔斯特拉斯、戴德金和康托尔的工作中。集合论的方法也被一些实分析和复分析领域的作者利用（例如，汉克尔、杜·博瓦雷蒙、H.J.S.史密斯、U.迪尼），并且在戴德金与韦伯（1882）的合作中开创了代数几何学。

康托尔的导出集是特别有趣的（关于这个概念在实分析中的背景，请参见 Dauben 1979，Hallett 1984，Lavine 1994，Kanamori 1996，Ferreirós 1999）。康托尔假设了实数的“概念领域”，并考虑了任意子集 P，他称之为“点集”。当所有 r 的邻域都包含 P 的点时，实数 r 被称为 P 的极限点。这只有在 P 是无限集时才可能发生。基于这个概念，康托尔继续定义了 P 的导出集 P'，即 P 的所有极限点的集合。一般情况下，P'可能是无限的，并且具有自己的极限点（参见康托尔在 Ewald [1996，卷 2，840ff]中的论文，尤其是第 848 页）。因此，可以迭代这个操作并获得进一步的导出集 P''，P'''... P(n) ...很容易举出一个集合 P 的例子，使得对于所有有限 n，都会产生非空的导出集 P(n)。（一个相当平凡的例子是 P=Q[0,1]，即单位区间中的有理数集；在这种情况下，P'=[0,1]=P''。）因此，可以将 P(∞)定义为有限 n 的所有 P(n)的交集。这是康托尔与超限迭代的第一次接触。

然后，在 1873 年末，一个令人惊讶的发现完全打开了超限领域。在与戴德金的通信中（参见 Ewald 1996，卷 2），康托尔提出了一个问题，即自然数集 N 和实数集 R 是否可以一一对应。作为回答，戴德金提供了一个令人惊讶的证明，即所有代数数的集合 A 是可数的（即存在与 N 的一一对应）。几天后，康托尔证明了假设 R 是可数的导致矛盾的结论。为此，他运用了上面提到的 Bolzano-Weierstrass 完备性原理。因此，他已经证明了 R 中的元素比 N 或 Q 或 A 中的元素更多，严格意义上说，R 的基数严格大于 N 的基数。

## 2. 合并

集合论开始成为新的“现代”数学方法的重要组成部分。但这种观点受到了质疑，并且其巩固需要相当长的时间。戴德金的代数风格直到 19 世纪 90 年代才开始有追随者，其中包括大卫·希尔伯特。对于实函数的现代理论，意大利、德国、法国和英国的数学家在 19 世纪 80 年代做出了贡献。皮亚诺及其追随者、弗雷格在某种程度上、希尔伯特在 19 世纪 90 年代以及后来的罗素都接受了这些新的基础观点。

与此同时，康托尔在 1878 年至 1885 年间发表了一些关键作品，帮助将集合论发展成为数学的一个独立分支。我们用 A≡B 来表示两个集合 A、B 可以一一对应（具有相同的基数）。在证明了无理数可以与 R 一一对应，并且令人惊讶的是，Rn≡R 后，康托尔在 1878 年猜想任何 R 的子集要么是可数的（≡N），要么是与 R 等势的（≡R）。这是著名的连续统假设的第一个、也是最弱的形式。在接下来的几年里，康托尔探索了点集的世界，引入了几个重要的拓扑概念（如完美集、闭集、孤立集），并得出了康托尔-本迪克森定理等结果。

一个点集 P 是闭集当且仅当其导集 P'⊆P，并且是完美的当且仅当 P=P'。康托-本迪克森定理则说明闭点集可以分解为两个子集 R 和 S，其中 R 是可数的，S 是完美的（实际上，S 是 P 的第 a 个导集，其中 a 是可数序数）。因此，闭集被称为具有完美集性质。此外，康托尔能够证明完美集具有连续统假设的能力（1884 年）。这两个结果意味着连续统假设对所有闭点集都成立。许多年后，1916 年，帕维尔·亚历山德罗夫和费利克斯·豪斯多夫能够证明更广泛的波雷尔集也具有完美集性质。

康托尔在 1882 年的点集研究中引出了无穷数（参见费雷罗斯 1999 年：267ff）。这是他研究的一个转折点，从那时起，他独立于与点集及其拓扑有关的更具体问题而研究抽象集合论（直到 1880 年代中期，这些问题一直是他研究议程中的重要内容）。随后，康托尔专注于无穷基数和序数，以及 R 的一般序类型，而不考虑其拓扑性质。

无穷序数是在 1883 年的一篇重要的数学哲学论文中作为新的数引入的，该论文名为《一般多样性理论的基础》（注意，康托尔仍然使用黎曼的术语“多样性”来表示集合）。康托尔通过两个“生成原则”来定义它们：第一个（1）为任何给定的数 a 产生后继数 a+1，而第二个（2）规定在任何给定的没有最后一个元素的数列之后紧接着有一个数 b。因此，在所有有限数之后，根据（2），出现了第一个无穷数ω（读作 omega）；然后是ω+1，ω+2，…，ω+ω=ω⋅2，…，ω⋅n，ω⋅n+1，…，ω2，ω2+1，…，ωω，…等等。每当出现一个没有最后一个元素的数列时，可以继续前进，可以说是通过（2）跳到一个更高的阶段。

这些新数的引入对大多数同时代的人来说似乎是无谓的推测，但对康托尔来说，它们具有两个非常重要的功能。为此，他将无穷序数分类如下：第一个“数类”由有限序数、自然数集 N 组成；第二个“数类”由ω及其后的所有数（包括ωω和更多）组成，这些数只有可数集的前身。这个关键条件是由证明康托尔-本迪克森定理的问题提出的。在此基础上，康托尔可以证明“第二个数类”的基数大于 N 的基数，并且不存在中间的基数。因此，如果写作 card(N)=ℵ0（读作 aleph zero），他的定理证明了称“第二个数类”的基数为ℵ1。

在第二个数类之后是一个“第三个数类”（所有前身集的基数为ℵ1 的超限序数）；可以证明这个新数类的基数是ℵ2。依此类推。超限序数的第一个功能是建立一个递增的超限基数的明确定义的尺度。（上述的 aleph 符号是康托尔在 1895 年才引入的。）这使得能够更加精确地阐述连续统的问题；康托尔的猜想成为了 card(R)=ℵ1 的假设。此外，依赖于超限序数，康托尔能够证明康托尔-本迪克森定理，从而圆满地完成了他在这些关键年份中所阐述的关于点集的结果。康托尔-本迪克森定理陈述：Rn 的闭集（可推广到波兰空间）具有完美集性质，因此 Rn 中的任何闭集 S 都可以唯一地写成一个完美集 P 和一个可数集 R 的不相交并。此外，P 是 Sα，其中α是可数序数。

对超限序数的研究引起了康托尔对有序集合，特别是良序集合的关注。如果集合 S 通过关系<进行良序，则<是一个全序，并且 S 的每个子集在<-排序中都有一个最小元素。（实数在其通常的顺序下不是良序的：只需考虑一个开区间。与此同时，N 是最简单的无穷良序集。）康托尔认为超限序数真正值得称为数，因为它们表达了任何可能的良序集合的“排序类型”。还要注意的是，康托尔很容易指出如何重新排序自然数，使它们与排序类型ω+1、ω+2、…、ω⋅2、…、ω⋅n、…、ω2、…、ωω等相对应。（例如，将 N 重新排序为：2、4、6、…、5、15、25、35、…、1、3、7、9、…，我们得到一个具有排序类型ω⋅3 的集合。）

注意连续统假设，如果成立，将意味着实数集 R 确实可以被良序。康托尔对这个观点非常坚定，他提出了每个集合都可以被良序排列的进一步假设，称之为“思维的基本和重大法则”。几年后，希尔伯特在他著名的“数学问题”清单（1900 年）中将连续统假设和良序问题都列为问题 1，引起了人们的注意。这样做是强调集合论对数学未来的重要性，以及其新方法和问题的富有成果。

在 1895 年和 1897 年，康托尔发表了他的最后两篇文章。它们是他关于无穷数（基数和序数）及其理论、以及关于序型和良序集的结果的一个井然有序的展示，但是这些论文并没有提出重要的新观点。不幸的是，康托尔对他准备的第三部分产生了疑虑，这部分将讨论与良序问题和悖论有关的非常重要的问题（见下文）。令人惊讶的是，康托尔在 1895/97 年的论文中也没有包括他几年前发表的一个定理，即康托尔定理：对于任意集合 S，存在一个基数更大的集合（我们现在称之为幂集 P(S)，康托尔使用的是形如 f: S→{0,1}的所有函数的集合，两者是等价的）。在同一篇短文（1892 年）中，康托尔用对角线法证明了 R 是不可数的，这个方法他后来扩展到证明了康托尔定理。（类似的论证形式早在 P. du Bois-Reymond 的工作中就出现过[1875 年]，参见[Wang 1974, 570]和[Borel 1898]的注释 II 等。）

与此同时，其他作者正在探索集合论对数学基础的可能性。其中最重要的是戴德金（1888 年）对自然数理论的深入阐述。他提出了一些集合（和映射）理论的基本原理；为自然数系统提供了公理；证明了数学归纳法的决定性和递归定义的无缺陷性；发展了基本的算术理论；引入了有限基数；并证明了他的公理系统是范畴论的。他的系统有四个公理。给定一个定义在 S 上的函数φ，一个集合 N⊆S，和一个特殊元素 1∈N，它们如下：

(α)(β)(γ)(δ)ϕ(N)⊂NN=ϕo{1}1∉ϕ(N)函数ϕ是单射。

条件（β）是至关重要的，因为它确保了自然数集的最小性，这解释了通过数学归纳法的证明的有效性。N=ϕo{1}的意思是：N 是函数φ下单元素集{1}的链，也就是说，是函数φ下{1}的最小闭包。一般来说，人们考虑一个集合 A 在任意映射γ下的链，用γo(A)表示；在他的小册子中，戴德金发展了一个有趣的关于这种链的理论，这使他能够证明康托-伯恩斯坦定理。这个理论后来被策梅洛推广，并被斯科莱姆、库拉托夫斯基等人应用。

在接下来的几年里，乔瓦尼·皮亚诺（Giuseppe Peano）对自然数给出了更加表面（但也更有名）的处理，采用了逻辑的新符号语言，而戈特洛布·弗雷格（Gottlob Frege）则详细阐述了自己的想法，然而却陷入了悖论的困境。一本受集合论思维风格启发的重要著作是希尔伯特（Hilbert）的《几何学基础》（1899 年），通过对几何系统的丰富研究，超越了戴德金（Dedekind）一步，这些研究是受到关于公理独立性的问题的启发。希尔伯特的书清晰地阐明了与集合论的新方法相联系的新公理方法论，并将其与来自射影几何的公理趋势相结合。

然而，正如我们之前所说，对集合论和无穷论方法存在相当多的批评。早在 1870 年，克罗内克就开始发表批评性的言论，这种构造主义倾向的言论在多年后会被布劳尔或维特根斯坦等杰出思想家所呼应。克罗内克的批评导向指向放弃实数系统和经典分析，而采用一种更严格的分析形式——二十世纪的例子有预测性分析（H.韦尔基于庞加莱的基本概念，参见费弗曼 1988 年）和直觉分析（布劳尔）。甚至魏尔斯特拉斯（至少在 1874 年）也对区分无穷大小的想法提出了异议，尤其是在康托尔的证明面前。例子举不胜举，因此在 20 世纪，许多数学家对集合论的关键思想和方法表示怀疑。一个典型的案例是 E.博雷尔，在引入康托尔的思想后，他对集合论越来越怀疑（他与巴尔、勒贝格、哈达玛尔在 1905 年交换的五封信已经变得著名；参见 Ewald [1996，卷 2]）。但也有庞加莱、韦尔、斯科勒姆等等的案例。在哲学家中，最著名的例子是维特根斯坦，他谴责集合论建立在“无稽之谈”的虚构符号上，提出“错误的意象”等等。

## 3. 批判时期

在 19 世纪末，普遍认为纯数学只是一种复杂的算术形式。因此，人们通常谈论数学的“算术化”，以及它如何带来了最高的严谨标准。戴德金和希尔伯特通过这种观点，提出了将纯数学的所有内容都建立在集合论之上的想法。在提出这个观点时，最困难的步骤是建立实数理论和将自然数归约为集合论。这两个问题都已经通过康托尔和戴德金的工作得到解决。但正当数学家们庆祝“完全严谨”终于实现时，集合论的基础出现了严重的问题。首先是康托尔，然后是罗素，他们发现了集合论中的悖论。

康托尔通过引入“概念领域”中的无穷数悖论。每个无穷序数都是其前身集合的序数类型；例如，ω是{0,1,2,3，…}的序数类型，ω+2 是{0,1,2,3，…，ω,ω+1}的序数类型。因此，对于序数系列的每个初始段，都对应一个立即更大的序数。现在，所有无穷序数的“整个系列”将形成一个良序集，与之对应的将是一个新的序数。这是不可接受的，因为这个序数 o 必须大于“整个系列”的所有成员，特别是 o<o。这通常被称为布拉利-福尔蒂悖论，或序数悖论（尽管布拉利-福尔蒂本人未能清楚地阐述它，参见 Moore＆Garciadiego 1981）。

虽然康托尔可能在 1883 年就发现了这个悖论，即在引入无穷序数之后（支持这个想法的论据见 Purkert＆Ilgauds 1987 和 Tait 2000），但证据清楚地表明，直到 1896/97 年他才发现了这个悖论的论证，并意识到了它的含义。到那时，他还能够运用康托尔定理得出康托尔悖论，或者说 alephs 的悖论：如果存在一个“所有”基数（alephs）的集合，那么康托尔定理适用于它将会得到一个新的 aleph ℵ，使得ℵ<ℵ。这位伟大的集合论学家非常清楚地意识到这些悖论对弗雷格和戴德金所青睐的“逻辑”集合方法是致命的打击。康托尔强调他的观点与戴德金的观点“截然相反”，特别是与他“关于所有明确定义的集合或系统也是‘一致系统’的‘天真假设’”（见 1899 年 11 月 15 日给希尔伯特的信，见 Purkert＆Ilgauds 1987：154）相对立。（与经常被声称的相反，康托尔在 1895 年的论文中对集合的模糊定义是为了与逻辑主义者对集合的理解“截然相反”——通常被称为“天真”集合论，更恰当地称为集合的二分观念，这是根据哥德尔的建议。）

康托尔认为他可以通过区分“一致的多重性”或集合和“不一致的多重性”来解决悖论问题。但是，在没有明确的区分标准的情况下，这只是对问题的口头回答。康托尔意识到他的新思想存在缺陷，他从未发表过一篇他一直在准备的最后一篇论文，在这篇论文中他计划讨论悖论和良序问题（我们对这篇未发表的论文的内容非常了解，因为康托尔在与戴德金和希尔伯特的通信中讨论了这个问题；请参见康托尔 1932 年的给戴德金的 1899 年信件，或 Ewald 1996 年：第 2 卷）。康托尔提出了一个依赖于序数的“布拉利-福尔蒂”悖论的论证，并旨在证明每个集合都可以良序。这个论证后来被英国数学家 P.E.B.乔丹重新发现，但它容易受到批评，因为它使用了“不一致的多重性”（康托尔在上述信件中使用的术语）。

康托尔的悖论使希尔伯特和戴德金确信集合论的基础存在重要的疑问。希尔伯特提出了自己的悖论，并与他在哥廷根的数学家朋友讨论了这个问题。恩斯特·策梅洛因此发现了一个“集合”，即所有不是自身成员的集合的悖论。这个悖论也被伯特兰·罗素独立发现，他通过仔细研究康托尔的定理而发现了这个悖论，这与罗素对于普遍集的信念产生了深刻的冲突。稍后，在 1902 年 6 月，他将这个“矛盾”告知了戈特洛布·弗雷格，后者正在完成自己的算术逻辑基础，这在一封著名的信中得到了体现。弗雷格的反应清楚地表明了这个矛盾对逻辑主义计划的深远影响。“我总能谈论一个类，一个概念的外延吗？如果不能，我如何知道例外？”面对这个问题，“我看不出算术如何能够得到科学的基础，数字如何能够被看作是逻辑对象”。

弗雷格的《格伦德公设》第二卷（1903 年）的出版，以及罗素的《数学原理》（1903 年）的工作，使数学界充分意识到集合论悖论的存在，以及它们的影响和重要性。有证据表明，直到那时，甚至希尔伯特和策梅洛也没有完全意识到这种损害。需要注意的是，罗素-策梅洛悖论使用了非常基本的概念-否定和集合成员关系-这些概念一直被广泛认为是纯粹的逻辑概念。“集合”R={x:x∉x}根据包含原则（允许任何开放句子确定一个类）存在，但如果是这样，R∈R 当且仅当 R∉R。这与弗雷格和罗素所偏爱的原则直接矛盾。

显然有必要澄清集合论的基础，但总体情况并不容易。不同的竞争观点相差甚远。康托尔对集合论有着形而上学的理解，尽管他对该领域有着最敏锐的见解，但他无法提供一个精确的基础。对他来说是清楚的（正如恩斯特·施罗德在他的《逻辑代数讲义》（1891）中所表达的那样，虽然有些神秘），必须拒绝弗雷格和戴德金所青睐的“普遍集合”的概念。弗雷格和罗素基于包含原则进行了他们的方法，但这一原则被证明是矛盾的。戴德金避免了这一原则，但他假设绝对宇宙是一个集合，是他技术意义上的“事物”，并将这一假设与对任意子集的完全接受相结合。

这种允许任意子集的想法一直是康托尔和戴德金的深刻启发之一，但他们都没有对其进行系统化的阐述。（在这里，他们对分析的现代理解起到了至关重要但隐含的背景作用，因为他们在迪利克雷-黎曼传统的“任意”函数范围内工作。）至于现在著名的迭代概念，其中有一些元素（特别是在戴德金的工作中，他对数系统的迭代发展以及他对“系统”和“事物”的看法），但在许多相关作者的作品中明显缺失。通常情况下，例如康托尔并没有迭代集合形成的过程：他倾向于考虑由同质元素组成的集合，这些元素被认为属于“某个概念领域”（可以是数字、点、函数，甚至是物理粒子，但不会混合在一起）。迭代概念最早是由库尔特·哥德尔在[1933]年提出的，与几年前冯·诺伊曼和策梅洛的技术工作有关；哥德尔在他关于康托尔连续统问题的著名论文中坚持了这个想法。它只是事后才出现的，在大量的集合论已经发展和完全系统化之后。

这种各种相互冲突的观点对整体的混乱做出了很大的贡献，但还有更多。除了上面讨论的悖论（我们称之为集合论悖论）之外，还有一整套“逻辑”悖论（后来称为“语义”悖论）。其中包括由 Russell、Richard、König、Berry、Grelling 等人提出的悖论，以及 Epimenides 提出的古老的说谎者悖论。对于这些损害的诊断和提出的治疗方法也是多种多样的。一些作者，如 Russell，认为找到一个能够一次解决所有悖论的新逻辑系统是至关重要的。这使他进入了形成《数学原理》（3 卷，Whitehead 和 Russell 1910-1913）基础的分层类型理论，这是他与阿尔弗雷德·怀特海德的合作。其他作者，如策梅洛，认为只要在一个受限的公理系统内工作，大多数这些悖论就会消失。他们专注于“集合论”悖论（如上所述），并开始寻找集合论的公理系统。

更重要的是，康托尔留下的问题，并且希尔伯特在他 1900 年的第一个问题中强调的问题引起了激烈的辩论。在 1904 年的海德堡国际数学家大会上，朱利叶斯·肯尼格提出了一个非常详细的证明，即连续体的基数不能是康托尔的任何阿列夫。他的证明之所以有缺陷，是因为他依赖于之前由康托尔和希尔伯特的学生费利克斯·伯恩斯坦“证明”的结果。费利克斯·豪斯多夫花了几个月的时间找出了这个缺陷，并通过正确陈述伯恩斯坦的结果有效的特殊条件来纠正它（参见豪斯多夫 2001 年第 1 卷）。一旦这样纠正，肯尼格的定理就成为了极少数限制连续问题可能解的结果之一，例如，它暗示了 card(R)不等于ℵω。与此同时，策梅洛能够证明每个集合都可以被良序，使用了选择公理[1904 年]。在接下来的一年里，德国、法国、意大利和英国的著名数学家讨论了选择公理及其可接受性。

选择公理声明：对于每个非空集合 A，存在一个集合，该集合与 A 中的每个集合恰好有一个元素相同。这引发了一个整个时代，选择公理被当作一个可疑的假设进行了最谨慎的处理（参见摩尔 1982 年的巨著研究）。这是具有讽刺意味的，因为在所有集合论的常规原理中，选择公理是唯一明确强制存在某些任意子集的原理。但是，尽管这个想法在激发康托尔和戴德金方面非常重要，并且与经典分析纠缠在一起，但无限的任意子集被许多其他作者所拒绝。在接下来的时期中，罗素、赫尔曼·韦尔和当然布劳威尔的名字是最有影响力的。

选择在很长一段时间内都是一个有争议的公理。一方面，它在数学中被广泛使用，实际上，它是许多重要分析定理的关键（这在 Sierpiński [1918]等作品中逐渐明确）。另一方面，它有着相当不直观的后果，比如 Banach-Tarski 悖论，它说单位球可以被划分为有限多个“部分”（子集），然后可以重新排列形成两个单位球（参见 Tomkowicz＆Wagon [2019]）。对这个公理的反对意见源于它断言存在无法明确定义的集合。在 20 世纪 20 年代和 30 年代，存在一种例行的做法，即每当一个定理依赖于这个公理时，都会明确提及它。这只有在下面讨论的哥德尔相对一致性证明之后才停止。

围绕他的良序定理展开的引人注目的争论，以及数学基础中提出的最有趣和困难的问题，使策梅洛专注于公理集合论。作为他深入分析的结果，他在 1908 年发表了他的公理系统，展示了它如何阻止已知的悖论，同时又允许对基数和序数理论的精湛发展。然而，这是关于策梅洛集合论公理化的条目的主题；此外，关于策梅洛的生平和工作，请参阅 Ebbinghaus 2015。

## 4. 从策梅洛到哥德尔

在 1900 年至 1930 年的时期，"集合论"这个范畴仍然被理解为包括拓扑学和函数论的主题。尽管康托尔、戴德金和策梅洛已经离开了这个阶段，专注于纯粹的集合论，但对于大多数数学家来说，这还需要很长时间。因此，在 1897 年的第一届国际数学家大会上，哈达玛和胡尔维茨发表的主题演讲为集合论的重要性进行了辩护，认为它对于分析学至关重要。大约在 1900 年左右，受到分析学主题的启发，三位法国专家进行了重要的工作：博雷尔[1898 年]，贝尔[1899 年]和勒贝格[1902 年] [1905 年]。他们的工作通过扩展康托尔关于实数可定义集合的研究（其中他已经证明连续统假设对于闭集是成立的）开创了描述性集合论的发展。他们引入了博雷尔集合的层次结构，贝尔函数的贝尔层次结构，以及勒贝格测度的概念-这是现代分析学的关键概念。

描述集合论（DST）是研究某些可定义的实数集合的学科，这些集合是通过对简单类型（如开集和闭集）进行互补或投影等已知操作获得的。 Borel 集合是可定义集合的第一个层次结构，在 Emile Borel 的 1898 年著作中首次引入；它们是通过可数并和互补操作的迭代应用从开集获得的。1905 年，勒贝格在一篇具有划时代意义的论文中研究了 Borel 集合，证明了它们的层次结构对于所有可数序数都有层级，并将 Baire 函数作为 Borel 集合的对应物进行了分析。描述集合论的主要目标是找到所有这些可定义集合共有的结构性质：例如，已经证明 Borel 集合具有完美集性质（如果不可数，则有一个完美子集），因此符合连续统假设（CH）。这个结果是由 Hausdorff 和 Alexandroff 在 1916 年独立工作时建立的。在 DST 中研究的其他重要的“规则性属性”包括勒贝格可测性和所谓的 Baire 性质（通过所谓的稀疏集或第一类集合与开集不同）。

在当时同样重要的是对解析集的研究，即勃尔塞特的连续像，或者等价地说，勃尔塞特的投影。年轻的俄罗斯数学家米哈伊尔·苏斯林在发现勒贝格 1905 年的论文中的一个错误时，意识到一般情况下勃尔塞特的投影不是勃尔塞特集合[Suslin 1917]。然而，他能够证明解析集也具有完美集性质，从而验证连续统假设。到 1923 年，尼古拉·卢辛和瓦克瓦夫·谢尔宾斯基开始研究共解析集，这将引导他们进入一个新的投射集层次结构，从解析集（Σ11）开始，它们的补集（共解析，Π11 集合），再到这些补集的投影（Σ12 集合），以及它们的补集（Π12 集合），依此类推。在 20 世纪 20 年代，波兰数学家主要围绕谢尔宾斯基和卢辛的俄罗斯学派进行了大量关于这些新类型集合的研究。谢尔宾斯基获得的一个关键结果是每个Σ12 集合都是ℵ1 个勃尔塞特集合的并集（Σ11 集合也是如此），但是在大约 1940 年后，这种传统研究的进展停滞不前（参见 Kanamori [1995]）。

不久之后，卢辛、谢尔宾斯基及其同事在他们的工作中遇到了极大的困难。卢辛如此绝望，以至于在 1925 年的一篇论文中，他得出了“完全出乎意料”的结论：“人们不知道，而且永远不会知道”投射集是否具有所期望的规则性质（引自 Kanamori 1995: 250）。这些评论在后来的发展中非常有趣，后来的发展解决了所有相关问题的假设（特别是投射决定性）。它们突显了这些更近期假设引发的困难的方法论和哲学问题，即关于支持它们的证据类型的问题。

卢辛在他 1930 年的著作《解析集合论讲义》（巴黎，戈蒂埃-维拉尔斯）中总结了当时的最新进展，这本书成为了多年来的重要参考资料。自从这本著作问世以来，人们习惯于在无穷自然数序列的拓扑空间ωω上展示 DST 的结果，这个拓扑空间实际上是由 René Baire 在 1909 年发表的一篇论文中引入的。Baire 空间具有一定的拓扑性质，使其同无理数集同胚，并且被专家认为是“除了自然数集之外，集合论研究中最基本的对象”[Moschovakis 1994, 135]。

DST 在分析学和拓扑学中的贡献被认为是集合论的最重要之一。但是，最初试图证明连续统假设的努力并未达到目标。很快就通过选择公理证明了存在非勒贝格可测的实数集（Vitali 1905），以及没有完美子集的可数实数集（Bernstein 1908）。这些结果清楚地表明，通过集中研究可定义和“良好行为”的实数集来达到 CH 的目标是不可能的。

此外，随着哥德尔在 1940 年左右的工作（以及 1960 年代的强制方法），人们逐渐明白了为什么 20 世纪 20 年代和 30 年代的研究停滞不前：基本的新独立性结果表明，苏斯林（解析集的完美集性质）、谢尔宾斯基（Σ12 集作为ℵ1 个 Borel 集的并集）和其他一些人所建立的定理是基于 ZFC 公理系统的最佳结果。这在哲学上很重要：仅仅通过对可补、可数并、投影定义的集合进行探索就足以达到 ZFC 系统的极限。因此，需要新的公理，哥德尔在二战后强调了这一点[Gödel 1947]。

现在让我们转向康托尔的另一个主要遗产，即对无穷数的研究。到 1908 年，豪斯多夫正在研究不可数的序数类型，并引入了广义连续统假设（2ℵa=ℵa+1）。他还首次考虑了“过分”的基数的可能性，即弱不可达基数，即一个不是后继的正规基数（如果将α分解为较小的基数之和需要α个这样的数，则称基数α为正规的）。几年后，在 1910 年代初，保罗·马洛在研究这些大基数的层次结构时开创了集合论的一个核心领域；他通过使用涉及固定子集概念的某种操作获得了一系列不可达基数；它们被称为马洛基数。但是大基数的研究发展缓慢。与此同时，豪斯多夫的教科书《集合论基础》（1914 年）将两代数学家引入了集合论和一般拓扑学。

接下来的关键步骤是在 1930 年完成的。Sierpiński 和 Tarski 以及策梅洛[1930]首次提出了强不可达基数的概念。强不可达基数是一个正规基数α，满足对于任意的 x<α，2x 都小于α。虽然弱不可达基数仅涉及后继操作的闭包，但强不可达基数涉及更强的幂集操作的闭包概念。同年，策梅洛[1930]在一篇开创性的关于 ZFC 模型的论文中，建立了（强）不可数基数与某些“自然”ZFC 模型之间的联系（在这项工作中，他假设幂集操作是完全确定的）。

在同一年，斯坦尼斯劳·乌拉姆基于分析（测度论）的考虑，提出了一个后来成为核心的概念：可测基数。事实证明，这些基数，由测度论属性定义，必须是（强）不可达的。事实上，多年后，汉夫（Hanf）（在塔斯基（Tarski）的早期工作基础上）证明了第一个不可达基数不可测，表明这些新的基数甚至更加“过分”。正如人们所看到的，由谢尔平斯基（Sierpiński）领导的波兰学派在战争期间集合论的发展中起到了非常重要的作用。当在 20 世纪 60 年代末期，人们意识到可测基数的存在与哥德尔的可构造性公理（V=L，用类符号表示）相矛盾时，可测基数再次证明了哥德尔的信念，这在有时被称为“哥德尔计划”的新公理中得到了表达。

集合论数学继续发展成为强大的公理化和结构化方法，这在 20 世纪的大部分时间里占据主导地位。举几个例子，希尔伯特早期的公理化工作（例如在他的著名的《几何基础》中）深深地涉及了集合论；恩斯特·斯坦尼茨（Ernst Steinitz）于 1910 年发表了他关于抽象域论的研究，其中重要地使用了选择公理；大约在同一时间，关于函数空间的研究开始，希尔伯特、莫里斯·弗雷歇（Maurice Fréchet）等人做出了贡献。在 20 世纪 20 年代和 30 年代，第一个专门的数学期刊《数学基础》致力于当时理解的集合论（主要包括拓扑学和函数论）。在那些年代，结构代数成熟起来，抽象拓扑逐渐成为一个独立的研究分支，集合论的研究开始转向元理论。

自那时起，“集合论”通常被认为是研究无穷集合的数理逻辑分支，起源于康托尔证明了实数集 R 的基数比自然数集 N 大。但是，正如前面的讨论所显示的，集合论既是现代数学兴起的结果，也是原因：这种起源的痕迹深深地印在其公理结构上。

<!--md-padding-ignore-begin-->
## Bibliography

### Cited Works

* Alexandroff, Pavel, 1916, “Sur la puissance des ensembles mesurables B”, *Comptes Rendus Acad. Sci. Paris*, 162: 323–325.
* Asghari, Amir, 2019, “Equivalence: an attempt at a history of the idea”, *Synthese*, 196: 4657–4677.
* Baire, René, 1899, “Sur les fonctions de variables reelles”, *Annali di Matematica Pura ed Applicata*, Serie IIIa, vol. 3, pp. 1–122.
* –––, 1909, “Sur la représentation des fonctions discontinues”, *Acta Mathematica*, 32: 97–176.
* Bernstein, Felix, 1908, “Zur Theorie der trigonometrischen Reihen”, *Sitzungsberichte der Königlich Sachsischen Gesellschaft der Wissenschaften zu Leipzig, Math.-Phys. Klasse*, 60: 325–338.
* du Bois–Reymond, Paul, 1875, “Ueber asymptotische Werthe, infinitäre Approximationen und infinitäre Auflösung von Gleichungen”, *Mathematische Annalen*, 8: 363–414.
* Bolzano, Bernard, 1851, *Paradoxien des Unendlichen*, Leipzig, Reclam; English translation London, Routledge, 1920.
* Borel, Émile, 1898, *Leçons sur la théorie des fonctions*, Paris, Gauthier-Villars. 4th edn 1950 with numerous additions.
* Cantor, Georg, 1872, “Über die Ausdehnung eines Satzes aus der Theorie der trigonometrischen Reihen”, *Mathematische Annalen*, 5: 123–132. In Cantor 1932: 92–102.
* –––, 1883, *Grundlagen einer allgemeinen Mannigfaltigkeitslehre*, Leipzig: B.G. Teubner. In Cantor 1932: 165–208. English translation in Ewald 1996: vol. 2.
* –––, 1884, “Über unendliche, lineare Punktmannichfaltigkeiten, 6”, *Mathematische Annalen*, 23: 453–88. Reprinted in Cantor 1932: 210–244.
* –––, 1892, “Über eine elementare Frage der Mannigfaltigkeitslehre”, *Jahresbericht der Deutschen Mathematiker Vereinigung*, 1: 75–78. Reprinted in Cantor 1932: 278–280. English translation in Ewald 1996: vol.2.
* –––, 1895/97, “Beiträge zur Begründung der transfiniten Mengenlehre”, in Cantor 1932: 282–351. English translation in Cantor, *Contributions to the founding of the theory of transfinite numbers*, New York: Dover, 1955.
* –––, 1932, *Gesammelte Abhandlungen mathematischen und philosophischen Inhalts*, E. Zermelo (ed.), Berlin: Springer. Reprint Hildesheim: Olms, 1966.
* Dauben, Joseph, 1979, *Georg Cantor. His Mathematics and Philosophy of the Infinite*, Cambridge, MA: Harvard University Press.
* Dedekind, Richard, 1871, “Über die Komposition der binären quadratischen Formen”, Supplement X to G.L. Dirichlet & R. Dedekind, *Vorlesungen über Zahlentheorie*, Braunschweig: Vieweg. [Later editions as Supplement XI, of which the fourth is reprinted in New York: Chelsea, 1968.] Partial reprint in Dedekind 1930/32: vol.3, 223–261.
* –––, 1872, *Stetigkeit und irrationale Zahlen*, Braunschweig: Vieweg. In Dedekind 1930/32: vol.3, 315–334. English translation in Ewald 1996: vol. 2.
* –––, 1876/77, “Sur la théorie des nombres entiers algébriques”, *Bulletin des Sciences mathématiques et astronomiques*, 1st series, XI (1876): 278–293; 2nd series, I (1877): 17–41, 69–92, 144–164, 207–248. Separate edition, Paris: Gauthier-Villars, 1977. English translation by J. Stillwell: *Theory of algebraic integers*, Cambridge: Cambridge University Press, 2004.
* –––, 1888, *Was sind und was sollen die Zahlen?*, Braunschweig: Vieweg. In Dedekind 1930/32: vol. 3. English in Ewald 1996: vol. 2.
* –––, 1930/32. *Gesammelte mathematische Werke*, R. Fricke, E. Noether & Ö. Ore (eds.), Braunschweig: Vieweg, 3 vols. Reprint New York: Chelsea, 1969.
* Dedekind, R. & Heinrich Weber, 1882, “Theorie der algebraischen Funktionen einer Veränderlichen”, *Journal für reine und angew. Mathematik*, 92: 181–290; reprinted in Dedekind 1930/32 (Volume 1), pp. 238–350; English translation by John Stillwell, *Theory of Algebraic Functions of One Variable*, Providence: American Mathematical Society and London Mathematical Society, 2012.
* Ebbinghaus, H. D., 2015, *Ernst Zermelo: An approach to his life and work*, second edition, Berlin: Springer Verlag.
* Ewald, William B., 1996, *From Kant to Hilbert: A source book in the foundations of mathematics*, 2 volumes, Oxford: Oxford University Press.
* Feferman, Solomon, 1988, “Weyl vindicated: Das Kontinuum 70 years later”, reprinted in *In the Light of Logic*, Oxford: Oxford University Press, 1998, chap. 13.
* Ferreirós, José, 1995, “‘What Fermented in Me for Years’: Cantor’s Discovery of Transfinite Numbers”, *Historia Mathematica*, 22: 33–42.
* –––, 1999, *Labyrinth of Thought. A history of set theory and its role in modern mathematics*, Basel: Birkhäuser.
* Frege, Gottlob, 1903, *Grundgesetze der Arithmetik*, vol. 2, Jena: Pohle. Reprint Hildesheim: Olms, 1966.
* Gödel, Kurt, 1933, “The present situation in the foundations of mathematics”, in S. Feferman et al. (eds), *Collected Works*, Vol. 3, Oxford University Press, pp. 45–53.
* –––, 1947, “What is Cantor’s continuum problem?”, *American Mathematical Monthly*, 54. Reprinted in S. Feferman et al. (eds), *Collected Works*, Vol. 2, Oxford University Press, pp. 176–187.
* Hallett, Michael, 1984, *Cantorian Set Theory and Limitation of Size*, Oxford: Clarendon.
* Hausdorff, Felix, 1914, *Grundzüge der Mengenlehre*, Leipzig: Viet. Reprinted New York: AMS Chelsea Publishing, 1949. Reprinted as Volume II of Hausdorff 2001–. The third edition (1937) was translated into English, 1957, *Set theory*, New York: AMS Chelsea Publishing. [online scan of Hausdorff 1914](https://archive.org/details/grundzgedermen00hausuoft).
* –––, 1916, “Die Mächtigkeit der Borelschen Mengen”, *Mathematische Annalen*, 77(3): 430–437. In Hausdorff [2001-], vol. 3. doi:10.1007/BF01475871
* –––, 2001–, *Gesammelte Werke*, 9 volumes, E. Brieskorn, W. Purkert, U. Felgner, E. Scholz et al. (eds.), Berlin: Springer.
* van Heijenoort, Jean, 1967, *From Frege to Gödel: A source book in mathematical logic, 1879–1931*, Cambridge, MA: Harvard University Press. Reprint as paperback, 2000.
* Kanamori, Akihiro, 1995, “The emergence of descriptive set theory”, *Synthese*, 251: 241–262. .
* –––, 1996, “The mathematical development of set theory from Cantor to Cohen”, *Bulletin of Symbolic Logic*, 2: 1–71.
* Lavine, Shaughan, 1994, *Understanding the Infinite*, Cambridge, MA: Harvard University Press.
* Lebesgue, Henri, 1902, “Intégrale, longueur, aire”, *Annali di Matematica Pura ed Applicata*, 7 (1): 231–359.
* –––, 1905, “Sur les fonctions represéntables analytiquement”, *Journal de Mathématiques*, (6e serie), 1: 139–216.
* Lusin, Nikolai, 1925, “Sur les ensembles projectifs de M. Lebesgue”, *Comptes Rendus Acad. Scie. Paris*, 180: 1572–74.
* –––, 1930, *Leçons sur les Ensembles Analytiques et leurs Applications*, with a preface by Lebesgue and a note by Sierpinski, Paris: Gauthier-Villars.
* Mancosu, Paolo, 2009, “Measuring the Size of Infinite Collections of Natural Numbers: Was Cantor’s Theory of Infinite Number Inevitable?”, *The Review of Symbolic Logic*, 2(04): 612 – 646.
* Moore, Gregory H., 1982, *Zermelo’s Axiom of Choice. Its Origins, Development and Influence*, Berlin: Springer.
* Moore, Gregory H. & A. Garciadiego, 1981, “Burali-Forti’s Paradox: A reappraisal of its origins”, *Historia Mathematica*, 8: 319–50.
* Moschovakis, Yiannis N., 1994, *Set Theory Notes*, New York: Springer.
* Peckhaus, Volker & R. Kahle, 2002, “Hilbert’s Paradox”, *Historia Mathematica*, 29 (2): 157–175.
* Purkert, Walter & H.J. Ilgauds, 1987, *Georg Cantor 1845–1918*, Basel: Birkhäuser.
* Rang, Bernhard & W. Thomas, 1981, “Zermelo’s Discovery of the ‘Russell Paradox’”, *Historia Mathematica*, 8: 15–22.
* Riemann, Bernhard, 1854/1868a, “Über die Hypothesen, welche der Geometrie zu Grunde liegen” (Habilitationsvotrag), *Abhandlungen der Königlichen Gesellschaft der Wissenschaften zu Göttingen*, 13 (1868): 133–152. In Riemann 1892: 272–287. English translation by Clifford, reprinted in Ewald 1996: vol. 2.
* –––, 1854/1868b, “Über die Darstellbarkeit einer Function durch eine trigonometrische Reihe”, (Habilitationsschrift), *Abhandlungen der Königlichen Gesellschaft der Wissenschaften zu Göttingen*, 13 (1868): 87–132. In Riemann 1892: 227–265.
* –––, 1892, *Gesammelte mathematische Werke und wissenschaftlicher Nachlass*, H. Weber and R. Dedekind (eds.), Leipzig, Teubner. Reprinted (together with the *Nachträge*), M. Noether and W. Wirtinger (eds.), New York: Dover, 1953.
* Russell, Bertrand, 1903, *The Principles of Mathematics*, Cambridge, University Press. Reprint of the 2nd edn. (1937): London: Allen & Unwin, 1948.
* Sierpiński, Waclav, 1918, “L’axiome de M. Zermelo et son rôle dans la théorie des ensembles et l’analyse”, *Bulletin de l’Académie des Sciences de Cracovie* (*Cl. Sci. Math. A*), 99–152; reprinted in Sierpiński, *Oeuvres choisies*, S. Hartman, et al. (eds.), Volume 2, Warszawa: Editions scientifiques de Pologne, 1974.
* Sierpiński, Waclav & Alfred Tarski, 1930, “Sur une propriété caractéristique des nombres inaccessibles”, *Fundamenta Mathematicae*, 15: 292–300.
* Steinitz, Ernst, 1910, “Algebraische Theorie der Körper”, *Journal für die reine und angewandte Mathematik*, 137: 167–309.
* Suslin, Mikhail Ya., 1917, “Sur une définition des ensembles measurables B sans nombres transfinis”, *Comptes Rendues Acad. Sci. Paris*, 164: 88–91.
* Tomkowicz, G., and Wagon, S., 2019, *The Banach-Tarski Paradox*, second edition, Cambridge: Cambridge University Press.
* Vitali, G., 1905, *Sul problema della misura dei gruppi di punti di una retta*, Bologna: Gamberini e Parmeggiani.
* Whitehead, Alfred N. & Bertrand Russell, 1910–1913, *Principia Mathematica*, 3 volumes, Cambridge: Cambridge University Press.
* Tait, William W., 2000, “Cantor’s *Grundlagen* and the Paradoxes of Set Theory”, *Between Logic and Intuition: Essays in Honor of Charles Parsons*, G. Sher and R. Tieszen (eds), Cambridge: Cambridge University Press, pp. 269–290. Reprinted in his *The Provenance of Pure Reason*, Oxford: Oxford University Press, 2005, pp. 252–275.
* Wang, Hao, 1974, “The concept of set”, in *From Mathematics to Philosophy*, London, Routledge; reprinted in P. Benacerraf & H. Putnam, *Philosophy of Mathematics: selected readings*, Cambridge Univ. Press, 1983, 530–570.
* Zermelo, Ernst, 1904, “Beweis, dass jede Menge wohlgeordnet werden kann”, *Mathematische Annalen*, 59: 514–516; in Zermelo [2010], vol. 1, 80–119. English translation in van Heijenoort 1967 (“Proof that every set can be well-ordered”).
* –––, 1908, “Untersuchungen über die Grundlagen der Mengenlehre”, *Mathematische Annalen*, 65: 261–281; ; in Zermelo [2010], vol. 1, 160–229. English translation in van Heijenoort 1967 (“Investigations in the foundations of set theory I”).
* –––, 2010–2011, *Collected Works / Gesammelte Werke*, Vol. I and II, H.-D. Ebbinghaus et al. (eds.), Springer: Berlín,

### Further Reading

* Cavaillès, Jean, 1962, *Philosophie mathématique*, Paris: Hermann.
* Ebbinghaus, Heinz-Dieter, 2007, *Ernst Zermelo: An approach to his life an work*, New York: Springer.
* Fraenkel, Abraham, 1928, *Einleitung in die Mengenlehre*, 3rd edn. Berlin: Springer.
* Grattan-Guinness, Ivor (ed.), 1980, *From the Calculus to Set Theory, 1630–1910*, London: Duckworth.
* Kanamori, Akihiro, 2004, “Zermelo and set theory”, *Bulletin of Symbolic Logic*, 10(4): 487–553.
* –––, 2007, “Gödel and set theory”, *Bulletin of Symbolic Logic*, 13 (2): 153–188.
* –––, 2008, “Cohen and set theory”, *Bulletin of Symbolic Logic*, 14(3): 351–378.
* –––, 2009, “Bernays and set theory”, *Bulletin of Symbolic Logic*, 15(1): 43–60.
* Maddy, Penelope, 1988, “Believing the axioms”, *Journal of Symbolic Logic*, 53(2): 481–511; 53(3): 736–764.
* Wagon, Stan, 1993, *The Banach-Tarski Paradox*, Cambridge: Cambridge University Press.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=settheory-early). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/settheory-early/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=settheory-early&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/settheory-early/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* [A History of Set Theory](https://mathshistory.st-andrews.ac.uk/HistTopics/Beginnings_of_set_theory/), by J.J. O’Connor and E.F. Robertson, in The MacTutor History of Mathematics archive. Note that their reconstruction conflicts at some points with the one provided here.
* [Godel’s Program](http://math.berkeley.edu/~steel/talks/wikotalk.ppt) (PowerPoint), an interesting talk by John R. Steel (Mathematics, U.C./Berkeley).
* [A Home Page for the Axiom of Choice](http://www.math.vanderbilt.edu/~schectex/ccc/choice.html), maintained by Eric Schechter (Mathematics, Vanderbilt University).

## Related Entries

[category theory](https://plato.stanford.edu/entries/category-theory/) | [continuity and infinitesimals](https://plato.stanford.edu/entries/continuity/) | [Dedekind, Richard: contributions to the foundations of mathematics](https://plato.stanford.edu/entries/dedekind-foundations/) | [Frege, Gottlob](https://plato.stanford.edu/entries/frege/) | [Hilbert, David: program in the foundations of mathematics](https://plato.stanford.edu/entries/hilbert-program/) | [paradoxes: and contemporary logic](https://plato.stanford.edu/entries/paradoxes-contemporary-logic/) | [*Principia Mathematica*](https://plato.stanford.edu/entries/principia-mathematica/) | [Russell, Bertrand](https://plato.stanford.edu/entries/russell/) | [Russell’s paradox](https://plato.stanford.edu/entries/russell-paradox/) | [set theory](https://plato.stanford.edu/entries/set-theory/) | [set theory: continuum hypothesis](https://plato.stanford.edu/entries/continuum-hypothesis/) | [set theory: Zermelo’s axiomatization of](https://plato.stanford.edu/entries/zermelo-set-theory/) | [Whitehead, Alfred North](https://plato.stanford.edu/entries/whitehead/)

[Copyright © 2020](https://plato.stanford.edu/info.html#c) by  
José Ferreirós <[*josef@us.es*](mailto:josef%40us%2ees)>
