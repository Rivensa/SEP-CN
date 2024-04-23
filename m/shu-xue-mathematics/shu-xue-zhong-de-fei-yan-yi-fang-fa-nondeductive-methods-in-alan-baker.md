# 数学中的非演绎方法 non-deductive methods in (Alan Baker)

_首次发表于2009年8月17日；实质修订于2020年4月21日_

就目前而言，在数学中没有一个单一、明确定义的哲学子领域专门研究非演绎方法。在这里使用的术语包括一系列不同的哲学立场、方法和研究计划，它们的共同动机是认为（i）数学方法论中存在非演绎的方面，以及（ii）识别和分析这些方面具有哲学上的价值。

 

***

## 1. 引言

关于数学本体论的哲学观点从形而上学（数学是关于抽象对象领域的）到虚构主义（数学是一个不存在主题的虚构）再到形式主义（数学陈述是根据形式规则进行操作的无意义字符串），观点各不相同，对于哪个观点是正确的没有共识。相比之下，可以说在数学的基本方法论方面有一个哲学上已经确立的共识观点。大致来说，数学家的目标是证明各种类型的数学命题，证明由给定命题从公理逻辑推导而来。这个观点有着悠久的历史；例如笛卡尔在他的《思维指导规则》（1627-28）中写道，数学命题必须是“从真实和已知的原则中，通过一个清晰地看到每一步过程的思维的连续和不间断的行动推导出来的”（47）。这个观点的一个重要含义是，在数学中至少在理想情况下，没有非演绎方法的空间。例如，弗雷格（Frege）表示，“数学的本质总是倾向于证明，只要证明是可能的，而不是通过归纳的任何证实”（1884，2）。贝瑞（Berry）（2016）提供了一个更近期的证明，即证明促进了数学界内共享探究的关键优点。

在哲学文献中，对这个共识观点的最著名挑战可能来自伊姆雷·拉卡托斯（Imre Lakatos）在他的影响深远的（死后出版的）1976 年著作《证明与反驳》中：

> 欧几里得方法论已经发展出一种特定的强制性呈现风格。我将称之为“演绎主义风格”。这种风格始于一个详细陈述的公理、引理和/或定义的清单。这些公理和定义经常看起来人为而复杂。从未告知这些复杂性是如何产生的。公理和定义的清单之后是精心措辞的定理。这些定理充斥着晦涩难懂的条件；似乎不可能有人能够猜到它们。定理之后是证明过程。

> 在演绎主义风格中，所有命题都是真实的，所有推理都是有效的。数学被呈现为一个不断增长的永恒不变的真理集合。

> 演绎主义风格隐藏了斗争，隐藏了冒险。整个故事消失了，证明过程中定理的连续尝试性表述注定被遗忘，而最终结果被神圣的绝对性所推崇（Lakatos 1976, 142）。

在继续之前，值得一提的是，为了集中讨论后续的主题，有必要进行一些区分。

### 1.1 发现与证明

广义上声称数学活动中存在一些非演绎的方面似乎是相对无争议的。因为这仅仅意味着数学家在进行数学时，并不是所有的行为都是从其他陈述中推导出来的。正如詹姆斯·富兰克林所说：

> 数学不能仅仅由猜想、反驳和证明构成。任何人都可以提出猜想，但哪些猜想值得研究呢？...哪些可能通过数学家的非演绎方法证明？...哪些在下次聘期评审之前不太可能得出答案？数学家必须回答这些问题来分配自己的时间和精力。（Franklin 1987, 2）

缩小一般性主张的一种方法是利用熟知（尽管不完全没有问题）的“发现背景”和“证明背景”之间的区别。一方面，这种区别可能允许在 Lakatos 的批评面前维持传统的演绎主义观点，通过认为 Lakatos 所指的是数学中的发现背景。在证明背景中，从公理推导结果仍然是正确和完整的故事。数学家对 Lakatos 观点的一些反应具有这种性质，例如 Morris Kline 在写给 Lakatos 的信中的以下评论：

> 我确实相信我们需要更多强调数学的发现方面的文献。正如你所知道和暗示的那样，所有的强调都在于数学的演绎结构，给学生的印象是从旧结论推导出新结论。\[1]

在拉卡托斯的作品中，也可以找到类似的观点，这些观点在波利亚的作品中也有所体现，波利亚对拉卡托斯产生了重大影响：

> 研究解决问题的方法，我们可以看到数学的另一面。是的，数学有两个面孔；它是欧几里得的严谨科学，但它也是其他的东西。以欧几里得的方式呈现的数学是一门系统的、演绎的科学，但在创造中的数学则是一门实验的、归纳的科学。（波利亚 1945 年，vii）\[原文斜体]

相反，为了对熟悉的演绎主义立场提出真正的挑战，反对主张需要声称非演绎方法在数学结果的证明中起到了作用（帕索 2015 年）。因此，在本次调查的剩余部分将主要关注证明性的背景。\[2]

### 1.2 非演绎方法和形式化

这不是详细分析演绎的地方。对于目前的目的，这个概念将被假定为相当直观，至少在原则上是如此。演绎是任何一系列陈述的推导，每个陈述都是从一些初始陈述（前提）或序列中的先前陈述推导出来的。然而，需要解决的一个问题是演绎和形式化之间的关系（参见，例如，Azzouni 2013）。

一个论证可能是演绎的，但不一定是形式化的。尽管演绎的典型案例往往发生在高度形式化的系统中，但这并非必要。例如，“所有大于 2 的偶数都是合数；1058 大于 2；1058 是偶数；因此 1058 是合数”是一个完全正确的演绎，尽管没有形式化。因此，与有时在讨论这些问题时假设的相反，数学实践中的所有非正式方面并非都是非演绎的。

另一方面，形式逻辑的发展与提供清晰的语言来呈现（和评估）演绎数学推理密切相关。事实上，正如约翰·伯吉斯在他的（1992）中所论证的那样，现代古典逻辑主要是作为数学推理，特别是证明的基础而发展起来的。19 世纪数学的严谨性的增加，应该被视为弗雷格的工作引发的逻辑革命的原因，而不是结果。在伯吉斯的观点中，逻辑是描述性的：它的目标是构建推理的数学模型。古典逻辑构成了古典数学证明的理想化描述。

还可能重要的是区分给定数学证明中的非正式元素与不可形式化的元素（如果有的话）。在第 4 节中，将讨论与数学推理中使用图表有关的问题。

### 1.3 演绎主义和基础

除了形式逻辑的发展之外，演绎主义的另一个方面是它对“基础”的强调。这是因为从公理到定理的过程在原则上是直接的，因为它是一个逻辑推导的问题。实际上，在这个转变中没有什么特别的数学涉及。因此，注意力转向了演绎过程的起点，即公理。如果这些公理本身是某个更基本理论的定理，那么这种追求安全起点的追求可以通过一系列越来越基础的数学理论来追溯。

不可否认的是，数学基础问题一直是 20 世纪大部分时间内数学哲学家的中心关注点。当然，这并不是因为基础领域如集合论是唯一一个哲学家认为演绎发生的数学领域，而是因为如上所述，关注演绎会特别强调证明的起点。即使那些对基础问题的关注持有同情态度的人也可能承认，这样忽视了许多数学实践领域。问题是，在这个过程中，哲学上感兴趣的东西有什么（如果有的话）会丧失。

## 2. 非演绎方法的演绎方法方面

### 2.1 非正式性的方面

#### 2.1.1 半正式证明

如 1.2 所述，演绎主义风格的一个特点是典型的数学证明完全用某种适当的形式语言表达（例如，带有恒等符号的一阶谓词逻辑）。这使得给定证明的有效性可以轻松、甚至机械地确定。但当然，数学家们传播和发表的证明很少有这种形式。对于工作中的数学家来说，什么样的证明才算是有效的范围从完全非正式到详细而精确，几乎每一个（或几乎每一个）空白都填补了。然而，即使是详细而精确的证明也很少纯粹用逻辑语言表达；相反，它们是普通语言、数学和逻辑符号和术语的混合。

有时候，以演绎主义传统撰写的哲学家们似乎认为这是一个相当琐碎的观点；这只是数学家们手头有一个“翻译方案”，但并不用纯逻辑写出证明，以使其更易理解和阅读。事实上，如何将给定的证明转化为形式逻辑往往并不明显。此外，“翻译”非正式证明为形式语言的概念是否必然是正确的方式也不清楚。斯图尔特·夏皮罗在他 1991 年的著作《无基础主义的基础》开篇就提出了这个观点，写道：

> 完整逻辑的语言至少在某种程度上是普通自然语言（如英语）或者可能是在数学中使用的表达式增强的普通语言的数学模型。后者可以称为“数学的自然语言”。为了强调或避免混淆，完整逻辑的语言有时被称为“形式语言”。

> 作为数学模型，逻辑语言与其自然语言对应物之间总是存在差距。模型与被模拟物之间的契合可以是好的或坏的，对于手头的任何目的来说，可能是有用的或误导性的。（夏皮罗，1991 年，3 页）

另一种观点是，正式语言和非正式语言提供了不同的表达数学定理和证明的方式。正式语言不用于“翻译”，因此不需要与非正式证明中所表达的内容进行比较。相反，它提供了自己的、可以说更优越的资源，用于在一个特定设计用于此目的的精确而严谨的环境中表达数学陈述的内容。无论采取哪种关于正式和非正式数学表达之间关系的观点，有两点是不变的。首先，数学推理——由数学家产生、传播和建立的推理——可以是正式的或非正式的。其次，在某种形式系统的背景下，对这些推理进行确定性的推理有效性或无效性评估更容易进行。

值得注意的是，拉卡托斯还提出了一种除了正式和非正式之外的第三类证明，他称之为“准正式”。拉卡托斯写道：

> 我认为，暗示非正式证明只是不完整的正式证明是犯了与早期教育家犯的错误相同的错误，他们假设孩子只是一个缩小版的成年人，而忽视了对儿童行为的直接研究，而更倾向于基于与成年人行为的简单类比的理论化。（拉卡托斯 1980 年，63 页）

#### 2.1.2 证明中的空白

上述关于“每个空白都被填补”的讨论掩盖了一个事实，即证明中“空白”的概念本身需要进一步澄清。首先，最直接的定义证明空白的方式（如下所示）仅适用于完全形式化的系统。

> 空白是证明中的任何一个点，在该点上所写的行不是通过应用系统中的一个形式有效且明确规定的推理规则（连同公理）从前面的一些行的子集中推导出来的。

任何规则都是系统中明确规定的推理规则的条件的原因是因为我们希望为间断但有效的证明留出空间。例如，“2 + 2 = 4，因此存在无限多个素数”是一个有效的论证，但显然其前提和结论之间存在很大的差距。另一方面，尽管上述定义仅适用于形式证明，但无间断性和形式性并不总是一致的。因此，传统的三段论，如“所有人都是有限的；苏格拉底是一个人；因此苏格拉底是有限的”是一个无间断的非正式证明的例子。将间断性（和无间断性）的概念扩展到非正式证明的一种方法是通过基本数学推理的概念，换句话说，这是“数学界接受的可用于证明而无需进一步争论的推理”（Fallis 2003, 49）。

无论我们如何描述间断，不可否认的是，大多数数学家提出的实际证明都存在间断。Don Fallis 在他的著作（2003 年）中提出了一种证明间断的分类法：

1. 推理间断 “每当数学家心中所想的特定命题序列（作为证明）不是一个证明时，数学家就留下了一个推理间隙”（Fallis 2003，53）。
2. 隐含推理间隙 “每当数学家没有明确陈述他心中所想的特定命题序列时，他就留下了一个隐含推理间隙”（Fallis 2003，54）。\[4]
3. 未经穿越的间隙 “每当数学家没有直接尝试验证他心中的每个命题（作为证明）是否通过基本数学推理从前面的命题中推导出来时，他就留下了一个未经穿越的间隙”（Fallis 2003, 56–7）。

除了这项分类工作，Fallis 还提出了一个哲学命题，即证明中的间隙不一定是一件坏事。在上述(iii)的基础上，他引入了普遍未经穿越的间隙的概念，换句话说，这是一个没有被数学界任何成员填补的间隙。Fallis 声称这样的间隙并不罕见，并且至少有些时候包含这些间隙的证明在数学家的证明背景下被接受。这个观点在 Andersen（2018）的最新研究中得到了证实。

目前活跃的一个领域是自动证明检查，它已经导致了迄今为止未被认识到的各种间隙的揭示。专门设计的计算机程序用于检查以适当的形式语言呈现的证明的有效性。到目前为止，主要关注的不是发现新的结果，而是检查已经建立的结果的证明的状态。乔治·冈蒂尔（George Gonthier）使用这种方法验证了四色定理的证明（Gonthier 2008）和群论中的奇序定理的证明（Gonthier et al. 2013），托马斯·哈尔斯（Thomas Hales）验证了约旦曲线定理的证明（Hales 2007）。在每种情况下，都发现了一些间隙，然后进行了遍历。这种形式化验证还可以揭示普通数学论证内容中隐藏的其他信息。乔治·克雷塞尔（Georg Kreisel）将这个一般过程描述为“展开证明”，而乌尔里希·科伦巴赫（Ulrich Kohlenbach）最近创造了“证明挖掘”这个术语。在上述描述的方法方面，阿维加德（Avigad）写道

> …证明论方法和洞察力可以在自动推理和形式验证领域中得到应用。自 20 世纪初以来，人们已经认识到，普通的数学论证可以用形式公理理论来表示，至少原则上是可以的。然而，即使是最基本的数学论证也涉及到复杂性，这使得大多数形式化在实践中是不可行的。计算证明助手的出现开始改变这一点，使得能够形式化越来越复杂的数学证明成为可能。…这些方法也可以用于验证普通数学证明的更传统任务，并且特别适用于证明依赖于手工检查过于繁琐的计算的情况。（阿维加德 2007，7）

Delariviere 和 Van Kerkhove（2017）指出，然而，虽然计算机方法在证明验证中可能发挥越来越重要的作用，但这种方法在推进数学理解方面是否能发挥相应的核心作用则不太清楚。

#### 2.1.3 图表

在最近的哲学文献中，非正式证明的另一个方面再次受到关注，即图表的作用（Giaquinto 2007; Shin＆Lemon 2008）。毫无争议的是，证明，尤其是在几何学中，但也包括从分析到群论等其他领域，往往伴随着图表。一个问题是这些图表是否在从给定证明的前提到其结论的推理链中起着不可或缺的作用。乍一看，似乎有三种可能的情况：

1. 这些图表在证明中没有实质性的作用，只是作为处理主题的某些方面的“插图”。
2. 在实际操作中，如果不使用这些图表，很难（甚至不可能）理解证明，但这种必要性是心理上的而不是逻辑上的。
3. 这些图表在证明的逻辑结构中起着重要的作用。

在图解推理方面进行的哲学工作的最初浪潮主要集中在欧几里得的《几何原本》上，部分原因是因为这部作品的重要性和历史意义，部分原因是因为它经常被视为演绎方法的典范例子（参见，例如，Mumma 2010）。如果《几何原本》中的一些或全部图表属于上述（iii）选项，则删除所有图表将使许多证明无效。这进一步引发了一个问题，即是否可以确定和分析一种独特的图解推理形式，以及如果可以的话，是否可以在纯演绎系统中捕捉到它。对于任何提出的严格化方法来说，一个困难是“概括问题”：如何将与特定图表相关联的证明概括到其他情况？这与在形式上区分给定图表的本质特征和偶然特征的问题交织在一起。

关于图表在证明中的作用的最新研究包括对图解证明有时可以完全严格的立场的辩护（Azzouni，2013），以及对除几何学以外的数学实践领域中基于图表的推理的探索（de Toffoli 和 Giardino，2014；de Toffoli，2017）。

### 2.2 证明的合理化

即使我们将注意力限制在理据的背景下，如果演绎证明从一个安全的起点出发，并且推理规则是保真的，那么演绎证明只能产生无条件的知识。我们对这两个条件是否纯粹地可以通过演绎来证明有信心吗？这两个条件将依次考虑。

#### 2.2.1 推理规则的证明

从某种意义上说，给一些偏爱的推理规则提供演绎证明似乎相当直接。例如，可以证明如果假设的前提是真的，那么假设的结论也必须是真的。问题在于，这样的证明通常使用了它们试图证明的规则。在上述情况中：如果将 Modus Ponens 应用于真前提，则结论为真；将 Modus Ponens 应用于真前提；因此结论为真。Haack（1976）和其他人争论这种循环是否是恶性的。一个关键的考虑因素是是否可以为无效的规则提供类似的“证明”，例如 Prior 的“tonk”的引入和消除规则，这些规则也具有使用规则来证明自身的特点。\[5]（一个密切相关的问题可以追溯到刘易斯·卡罗尔和他的经典论文（1895 年））。

#### 2.2.2 公理的地位

让我们假设，理想化的演绎证明提供了一种安全性：每一步的透明性确保了整个论证的有效性，从而保证了如果前提都是真的，那么结论必须是真的。但是，那些在证明过程开始时引入的公理呢？对于这个问题，传统的答案是声称公理的真理是安全的，因为公理是“不证自明的”。这在某种程度上似乎确实是对欧几里得几何公理的普遍接受观点。然而，出于各种原因，这种态度在当代数学中远不如以前普遍。首先，19 世纪初非欧几何的发现表明，表面上的自明性，至少在平行公设的情况下，并不能保证必要的真理。其次，数学理论及其公理化的范围和复杂性不断增加，因此很难声称每个单独的公理都是透明的真理。第三，许多数学子领域在很大程度上已经抽象化，与任何具体模型相去甚远，这与至少一些数学家倾向于对他们所发展的理论采取形式主义态度相一致。根据这种观点，公理不是表达基本真理，而只是为形式游戏提供起始位置。

这种对公理的形式主义态度的滑向也可以通过弗雷格的逻辑主义追溯到。逻辑主义计划试图表明数学可以归结为逻辑，换句话说，数学证明可以被证明是从逻辑上真实的前提中进行逻辑推导的。对于弗雷格来说，这些逻辑上真实的前提是其中出现的术语的定义。但这再次引发了一个问题，即什么区分可接受的定义和不可接受的定义。这里的担忧不仅仅是我们的公理是否真实，而是它们是否一致（这是弗雷格自己的系统所遭遇的一个著名陷阱）。而当我们放弃自明性作为公理的“金标准”时，这就成为一个问题，无论我们是转向形式主义观点还是逻辑主义观点。在这两种情况下，都必须提供关于候选公理可接受性的其他限制。

那么，是否存在一种折中的立场，既不是高标准的自明性，也不是“随便怎样都行”的态度？一个想法，可以追溯到伯特兰·罗素，是引用最佳解释推理的版本。罗素的观点是，基本算术命题——“2 + 2 = 4”，“7是质数”等——比无论是哪种逻辑或集合论系统的公理更加自明。因此，我们不应将公理视为最大程度的自明，而应该将其选择基于它们（集体）系统化、推导和解释基本算术事实的能力。换句话说，逻辑蕴涵的方向仍然是从公理到算术事实，但证明的方向可能相反，至少在非常简单、明显的算术事实的情况下如此。从我们的集合论公理中推导出“2 + 2 = 4”并不增加我们对“2 + 2 = 4”真实性的信心，但我们能够推导出这个已知的事实（而不能推导出其他我们知道是错误的命题）确实增加了我们对公理真实性的信心。

在这里，证明的方向与推导出最佳解释的证明的方向相一致。一旦我们对某个公理选择的信心有了度量，那么证明的方向也可以按照更传统的方向流动，与证明的演绎推理步骤一致。当被证明的定理不是其真实性显然的定理时，这种情况就会发生。Easwaran（2005 年），Mancosu（2008 年）和 Schlimm（2013 年）以不同的方式发展了这种公理选择的基本解释。例如，Mancosu 认为，类似的过程可能潜在地支持扩展应用领域或先前理论的本体论的新数学理论的发展。进一步分析这个过程的进展将取决于对数学解释的满意解释，并且这已经成为近期哲学数学文献中一个非常感兴趣的领域。

另一种方法是由 Maddy（1988 年，1997 年，2001 年，2011 年）追求的，她更详细地研究了数学家的实际实践以及他们接受或拒绝不同候选公理的原因。Maddy 的主要关注点是集合论的公理，并且她认为，公理可能具有各种理论美德，与“自明性”没有直接联系。这些美德是什么，以及它们相对于彼此的权重如何，可能会因数学的不同领域而异。Maddy 为集合论公理确定的两个核心美德是 UNIFY（即它们为决定集合论问题提供了一个单一的基础理论）和 MAXIMIZE（即它们不会任意限制同构类型的范围）。集合论中的公理选择问题也在 Lingamneni（2017 年）和 Fontanella（2019 年）的最新研究中得到了讨论。

### 2.3 哥德尔的结果

毫无疑问，数学中对演绎方法的限制中最臭名昭著的是源自哥德尔的不完全性定理的那些限制。尽管这些结果仅适用于足够强大以嵌入算术的数学理论，但自然数（以及它们扩展到有理数、实数、复数等）作为数学活动的焦点的重要性意味着这些影响是广泛的。

也不应夸大哥德尔工作的确切含义。量词的顺序很重要。哥德尔所展示的是，对于任何一致的、可递归公理化的形式系统 F，只要它足够强大以处理算术，存在纯粹以算术语言表达的真理，但在 F 中无法证明。他并没有证明存在一种形式系统中无法证明的算术真理。尽管如此，哥德尔的结果确实给数学演绎理想的某个版本的棺材上钉了几颗重要的钉子。不能有一个单一的、可递归公理化的形式系统适用于所有数学，它既（a）一致，（b）纯粹演绎，又（c）完备。对这一困境的一种应对方式是探索数学中非演绎的证明方法的选择。

## 3. 非演绎方法的替代方法

### 3.1 实验数学

在经验科学中，非演绎方法的作用是显而易见且相对无争议的（卡尔·波普尔除外）。事实上，科学中的合理化模式是后验的和归纳的。使经验科学成为经验科学的关键是观察，尤其是实验的关键作用。因此，在对数学中的非演绎方法进行调查时，一个自然的起点是研究一种被称为“实验数学”的流派的兴起。过去的 15 年左右出现了一些专门研究这一主题的期刊（例如《实验数学杂志》）、研究所（例如埃森大学的实验数学研究所）、学术讨论会（例如罗格斯大学的实验数学学术讨论会）和书籍（例如 Borwein 和 Bailey 的 2003 年和 2004 年的著作）。这些后者还在 Borwein 和 Bailey（2015）中论证了实验数学在数学实践中的重要性，而 Sorensen（2016）则提供了对实验数学的更广泛的历史和社会学分析。

在传统的数学和经验知识之间的二分法的背景下，“实验数学”这个术语似乎最多是个矛盾修饰法，最坏的情况下甚至是彻底的悖论。一个自然的建议是，实验数学涉及进行数学实验，其中“实验”一词被尽可能地理解为字面意义上的。这是 van Bendegem（1998）所采用的方法。根据 van Bendegem 的说法，实验涉及“操纵对象，...在‘真实’世界中建立过程，并观察这些过程的可能结果”（Van Bendegem 1998，172）。他的建议是，理解数学实验可能是什么的一个最自然的方法是考虑在这种典范意义上的实验可能会产生数学上的影响。

van Bendegem 引用的一个例子可以追溯到 19 世纪比利时物理学家 Plateau 在最小表面积问题上的工作。通过用金属丝构建各种几何形状，并将这些金属丝框架浸入肥皂溶液中，Plateau 能够回答关于最小表面包围各种特定形状的具体问题，并最终制定一些控制这些表面配置的一般原则。理解这个例子的一种方式是，一个物理实验——将金属丝框架浸入肥皂溶液中——产生了与某类数学问题直接相关的结果。这种表征实验数学的方式的主要缺点是它过于限制性。van Bendegem 引用的这种例子非常罕见，因此这种类型的数学实验对实际数学实践的影响最多只能非常有限。此外，当数学家谈论和进行实验数学时，他们心中所想的不仅仅是这种字面意义上的实验。

至此，对“数学实验”的最字面的解读就到此为止。一个可能更有成果的方法是以类比或功能性的方式思考。换句话说，也许“实验数学”被用来标记在数学中以类似于实验在经验科学中的作用方式发挥作用的活动。因此，数学实验可能与字面实验有一些共同之处，但也有一些不同之处（Baker 2008; McEvoy 2008, 2013; Sorensen 2010; van Kerkhove 2008）。在继续进行这一分析线索之前，简要看一下一个案例研究可能会有所帮助。

当前实验数学工作的一个很好的例子出现在 Borwein 和 Bailey 的两本最新著作之一中（1995b，第 4 章）。如果一个实数在基数 n 中的每个数字序列（任意给定长度）在其基数 n 的展开中出现的频率相等，则称其为在基数 n 中是正常的。如果一个数在每个基数中都是正常的，则称其为绝对正常。考虑以下假设：

> 猜想：每个非有理代数数都是绝对正常的。

Borwein 和 Bailey 使用计算机计算了小于 1000 的正整数的平方根和立方根的十进制小数点后 10000 位，并将这些数据经过一些统计测试。

这个例子有几个引人注目的特点，可能指向实验数学更一般的特征。首先，从证据到假设的路径是通过枚举归纳得出的。其次，它涉及到计算机的使用。接下来，将依次对这两个特点进行考察。

### 3.2 枚举归纳

在 1742 年写给欧拉的一封信中，克里斯蒂安·戈尔德巴赫猜想所有大于 2 的偶数都可以表示为两个质数的和。在接下来的两个半世纪里，数学家们一直无法证明戈尔德巴赫猜想。然而，它已经被验证了数十亿次，并且数学家们普遍认为这个猜想很可能是真实的。下面是一个部分列表（截至 2007 年 10 月），显示了已经检查并符合 GC 的偶数的数量级。

| Bound    | Date | Author       |
| -------- | ---- | ------------ |
| 1 × 103  | 1742 | Euler        |
| 1 × 104  | 1885 | Desboves     |
| 1 × 105  | 1938 | Pipping      |
| 1 × 108  | 1965 | 斯坦和斯坦        |
| 2 × 1010 | 1989 | Granville    |
| 1 × 1014 | 1998 | Deshouillers |
| 1 × 1018 | 2007 | 奥利维拉和席尔瓦     |

尽管自 20 世纪 60 年代初引入数字计算机以来，个别正面 GC 实例的积累已经非常庞大，并且随着计算速度的迅速增加，但至今尚未找到 GC 的证明。不仅如此，但很少有数论学家对即将出现的任何证明持乐观态度。菲尔兹奖得主艾伦·贝克在 2000 年的一次采访中说：“如果没有重大突破，我们不太可能在\[证明 GC]方面取得进一步的进展。不幸的是，目前没有这样的重大想法。”同样在 2000 年，出版商 Faber and Faber 在 2000 年 3 月 20 日至 2002 年 3 月 20 日期间向任何能够证明 GC 的人提供了 100 万美元的奖金，他们相信自己的钱相对安全。

使得这种情况特别有趣的是，数学家们长期以来对 GC 的真实性非常有信心。Hardy 和 Littlewood 在 1922 年就断言，“对于该定理的正确性没有合理的怀疑”，而 Echeverria 在最近的一篇综述文章中写道，“数学家对 GC 的真实性的确定性是完全的”（Echeverria 1996, 42）。此外，对 GC 真实性的这种信心通常明确地与归纳证据相关联：例如，G.H. Hardy 将支持 GC 真实性的数值证据描述为“压倒性的”。因此，合理地可以得出结论，数学家对 GC 的信念的基础是列举归纳证据。

数学案例的一个独特特征可能会对列举归纳的证明力产生影响，那就是顺序的重要性。在给定的数学假设下的实例（至少在数论中）具有内在的顺序，并且在这个顺序中的位置对涉及的数学属性可能产生关键性的影响。正如 Frege 在谈到数学时所写的那样：

> \[T]he ground \[is] unfavorable for induction; for here there is none of that uniformity which in other fields can give the method a high degree of reliability.（Frege，《算术的基础》）

弗雷格接着引用了莱布尼茨的观点，他认为大小的差异会导致数字之间的各种其他相关差异：

> 偶数可以被平均分成两部分，奇数则不行；三和六是三角数，四和九是平方数，八是立方数，依此类推。（弗雷格，《算术的基础》）

弗雷格还明确比较了数学和非数学背景下的归纳推理方法：

> 在普通归纳中，我们经常充分利用这样一个命题：空间中的每个位置和时间中的每个时刻本身都是一样好的。... 数字序列中的位置不像空间中的位置那样无关紧要。（弗雷格，《算术的基础》）

正如弗雷格的言论所暗示的那样，支持反对在数学中使用枚举归纳的一种方法是通过某种非均匀性原则：在没有证明的情况下，我们不应该期望（一般而言）数字具有任何有趣的属性。因此，证明某个特定数字具有某个属性并不能给出任何理由认为第二个任意选择的数字也具有该属性。\[8]与休谟所建议的唯一基础归纳的均匀性原则相反，我们几乎完全相反的原则！从这个原则可以推断出，枚举归纳是不合理的，因为我们不应该期望（有限的）从自然数的总体中取样的样本能够反映出普遍属性。

在 GC 和数学归纳的所有其他情况中，一个可能更严重的问题是我们所看到的样本是有偏见的。首先要注意的是，所有已知的 GC 实例（实际上所有可能知道的实例）在重要意义上都是小的。

> 从非常实际的意义上说，没有大数：任何明确的整数都可以说是“小”。实际上，无论你写下多少位数或指数的塔，都只有有限多个比你的候选数小的自然数，而有无限多个比它大的自然数（Crandall 和 Pomerance 2001，2）。

当然，简单地抱怨所有 GC 的实例都是有限的是错误的。毕竟，每个数都是有限的，所以如果 GC 对所有有限数成立，那么 GC 就是成立的\[9]。但我们可以确定一种更极端的小的意义，可以称之为微小。

> 定义：一个正整数 n 是微小的，当且仅当 n 在我们可以使用普通十进制表示法（包括（非迭代）指数运算）写下的数字范围内。

迄今为止，已经验证的GC实例不仅很小，而且微小。而微小性，虽然承认定义模糊，但已知会产生差异。例如，考虑对数估计的素数密度（即小于给定n的数中素数的比例），已知对于足够大的n，它会低估。设n_是第一个对数估计过小的数。如果黎曼猜想成立，那么可以证明n_的上界（第一个Skewes数）为8 × 10370。尽管这是一个令人印象深刻的大数，但根据上述定义，它仍然是微小的。然而，如果黎曼猜想为假，则我们已知的n\*的上界（第二个Skewes数）是10↑10↑10↑10↑3.\[10]在这里需要发明一个“箭头”符号来表示这个数告诉我们它并不微小。因此，这个结果的第二部分，虽然承认条件是一个被认为不太可能的结果（即RH的错误），但意味着存在一个对所有微小数都成立但对所有数都不成立的属性。微小性可以产生差异。

数论家对 GC 的真实性似乎有着极大的信心。Echeverria（1996）讨论了康托尔在 1894 年发表的一张 Goldbach 分割函数 G(n)的值表，其中 n 从 2 到 1000（Echeverria 1996,29-30）。分割函数用于衡量给定（偶数）数能够以两个质数之和的不同方式表示的数量。因此，G(4) = 1，G(6) = 1，G(8) = 1，G(10) = 2，等等。这种关注点的转移与数学家对 GC 的信心的显著增加相吻合。康托尔的工作表明，随着 n 的增加，G(n)倾向于增加。注意，在这个背景下，GC 的含义是 G(n)对于任何大于 2 的偶数 n 都不会取值为 0。分割函数的数据给人的压倒性印象是，GC 在某些大的 n 上失败的可能性非常小。例如，对于大约 100,000 的数，每个偶数都至少有 500 种不同的方式可以表示为两个质数的和！

然而，就目前而言，这些结果仅仅是一种启发式的。在康托尔发表他的值表之后的 30 年（Echeverria 称之为 GC 研究的“第二阶段”），人们进行了许多尝试，试图找到 G(n)的解析表达式。如果能够找到这样的表达式，那么证明这个解析函数永远不会取值为 0 可能相对容易（Echeverria 1996, 31）。到了大约 1921 年，对于找到这样的表达式的机会的悲观情绪导致了重心的转变，数学家们开始将注意力转向寻找 G(n)的下界。然而，至今为止，这也没有取得成功。

因此，对分区函数的考虑并没有使得 GC 的证明更加接近。然而，它确实使我们能够对前一节的论证给出一个有趣的转折。图表表明，GC 的最难的测试案例很可能出现在最小的数字中；因此，GC 的归纳样本是有偏见的，但它对 GC 的机会有偏见。数学家对 GC 的真实性的信心并不仅仅基于枚举归纳。分区函数取值表明，GC 的正例样本确实是有偏见的，而有偏见的样本通常不会对假设提供太多支持。但在这种特殊情况下，偏见的性质使证据更加有力，而不是更加弱。因此，可以认为枚举归纳是不合理的，同时也同意数学家基于现有证据相信 GC 是合理的。（请注意，在这里需要保持微妙的平衡，因为对分区函数行为的证据本身是非演绎的。然而，G(n)很可能被某个递增的解析函数从下方界限，这种印象并不是基于枚举归纳本身，因此，这种证明虽然是非演绎的，但并不是循环的。）

上述讨论的结果，尽管基于一个单一的案例研究，是数学家不应该——而且通常也不会——仅仅因为枚举归纳而对数学命题的证明给予重视。（枚举归纳在发现新假设或选择数学家决定研究的开放问题时起到了多大的作用，这是一个单独的问题，本文没有涉及。）更准确地说，这个论点有两个部分：

1. 枚举归纳不应该增加对普遍数学概括（在无限域上）的信心。
2. 非演绎方法通常不能使数学家对这类概括的结论的真实性更加自信。

### 3.3 计算机证明

当代实验数学研究的一个显著特点是使用计算机进行。这种对复杂电子设备的依赖是否使该领域成为“实验性”？如果看一下发表在当代期刊、书籍和专门研究实验数学的会议上的内容，会发现所有的项目似乎都与计算机紧密相关。例如，在《实验数学》的十年期刊中，似乎没有一篇论文不涉及计算机的使用。那么数学家们倾向于提供哪些作为实验数学范例的例子呢？这里的数据不太清楚。一方面，非正式调查表明，大多数这样的范例确实涉及明确使用计算机。另一方面，数学家们也常常引用一个或多个历史例子，来说明这个子学科的声望。

将实验数学与基于计算机的数学等同起来的最大实践挑战来自于自称实验数学家对其新兴学科的说法。当数学家自觉地反思实验数学的概念时，他们往往会否认计算机使用是必要的特征。例如，《实验数学》杂志的编辑们在关于该杂志的范围和性质的“哲学声明”中发表了以下观点：

> “实验”一词被广泛理解：如今许多数学实验是在计算机上进行的，但还有一些是纸上工作的结果，还有其他实验技术，如建立物理模型。（《实验数学》的“目标和范围”）

这里还有一段类似风格的数学家多伦·泽尔贝格的引文：

> \[T]raditional experimental mathematics … has been pursued by all the great, and less-great, mathematicians through the centuries, using pencil-and-paper. (Gallian and Pearson 2007, 14)

似乎可以说，将实验数学与计算机使用相结合，与当代实验数学家所做的事情相吻合，但与他们所说的事情不太吻合。\[11]

提出的表征的第二个问题更具哲学性质。考虑与哥德巴赫猜想相关的另一个广泛引用的实验数学例子。截至 2007 年 4 月，已经验证了所有小于 1018 的偶数符合 GC，并且该项目（在 Oliveira e Silva 的指导下）正在进行中。这个庞大的计算任务通常被认为是实验数学的典范例子。而且很明显，计算机在这里发挥了至关重要的作用：没有数学家或一组数学家能够希望手工复制 1018 次计算。

在当前背景下，中心问题不是计算机数学是否是“实验性的”，而是它是否至少有时是非演绎的。从某种意义上说，当然，计算机执行的所有个别计算都是演绎的，或者至少它们与纯粹演绎形式系统的操作同构。当计算机验证 GC 的一个实例时，这个验证是完全演绎的。然后我们可以分开两个不同的问题。首先，这些计算在某个更大的数学论证中是否起到了非演绎的作用？其次，我们从计算机计算结果直接形成的信念是否是演绎基础的信念？第一个问题并不依赖于计算机的任何特定内容，因此可以归结为上文第 3(B)节中关于枚举归纳的讨论。第二个问题将在下文中进行讨论。

对计算机证明地位的哲学讨论在很大程度上是由于 Appel 和 Haken 在 1976 年基于计算机的四色定理证明。在他的（1979 年）一文中，Tymoczko 有争议地认为，基于计算机证明的数学知识本质上是经验性的。这是因为这样的证明不是先验的，不确定的，不可查看的，也不能由人类数学家进行检查。在所有这些方面，根据 Tymoczko 的说法，计算机证明与传统的“纸笔”证明不同。关于可查看性，Tymoczko 写道：

> 证明是一种可以被理性主体审视、审查、验证的构造。我们经常说证明必须是明晰的，或者可以被手工检查。它是一个展示，一个推导出结论的过程，它本身不需要任何外部因素来令人信服。数学家会全面审视证明，从而了解结论。（Tymoczko 1979，59）

为了论证的目的，假设所讨论的计算机证明在演绎上是正确的，但在上述意义上也是不可监督的。我们决定依赖计算机的输出是否构成一种非演绎方法？一种观察这种例子的方式是将演绎方法与我们对该方法结果的非演绎访问之间拉开差距。例如，通过专家数学家（具有良好的记录）告知某个特定的数学结果。这是一种“非演绎方法”吗？\[12]

### 3.4 概率证明

数学方法中有一小部分（虽然数量不多，但正在增长），本质上是概率性的。在证明的背景下，这些方法并不演绎地暗示其结论，而是建立了结论是真实的某种（通常是可以明确规定的）高概率。对于这些方法的哲学讨论始于 Fallis（1997, 2002），而 Berry（2019）是对这一辩论的有用的最新贡献。

一种概率方法的类型与早期讨论的实验数学有关，因为它在某种程度上涉及进行实验。其思想是利用 DNA 的处理能力，有效地创建一个用于解决某些本来难以处理的组合问题的大规模并行计算机。其中最著名的问题是“旅行推销员”问题，它涉及确定是否存在一条可能的路径，通过由单向箭头连接的图的节点，每个节点只访问一次。Adleman（1994）展示了如何使用 DNA 链编码该问题，然后可以使用不同的化学反应进行拼接和重组。在过程结束时，某些较长的 DNA 链的出现对应于在图中找到了一条解决路径。概率考虑在没有找到较长的 DNA 链的情况下最为明显。这表明在图中没有路径，但即使实验正确进行，这里的支持也不足以达到完全确定性。因为有一小部分可能性存在这样的情况：存在一种解决方案，但它未被任何 DNA 链编码在实验开始时。

数学中还有一些概率方法，它们与上述意义上的实验无关。例如，对于给定的复合（即非素数）数，可以证明与小于该复合数的大约一半的数相关的属性成立。如果随机选择小于 N 的各种数字，并且它们中没有一个与 N 具有这种关系，那么可以得出 N 几乎肯定是素数的结论。这里的概率水平可以精确计算，并且可以通过选择更多的“证人”数字进行测试来提高概率水平。

注意，这些概率方法中包含了大量纯演绎推理。事实上，在第二个例子中，N 是质数的概率为 0.99 是纯粹通过演绎得出的。然而，在数学界普遍一致认为，这些方法不能替代演绎证明结论的方式。Fallis（1997，2002）认为这种拒绝是不合理的，因为任何被指出为有问题的概率方法的特性都可以在数学界接受的某些证明中找到。Fallis 的重点是将真理确立为数学的关键认识目标。然而，数学家对概率方法不满意的一个主要原因似乎是它们不能解释为什么它们的结论是真实的。此外，Easwaran 反驳 Fallis，认为概率证明缺乏一种他称之为“可转移性”的特性，而可接受的证明具备这种特性（Easwaran 2009；Jackson 2009）。Fallis（2011）是对这些反对意见的回应。

另一方面，即使没有附带的解释，某个主张的纯粹真实性或虚假性在某些情况下也可能很重要。例如，可以想象一种情况，数学界正在考虑一个重要且有趣的猜想，比如黎曼猜想，并且使用概率方法来显示某个数很可能是其反例。有趣的是，可以推测数学界对这种情况的反应会是什么。人们会停止努力证明黎曼猜想吗？还是会继续努力，直到构建出一个严格的演绎证明来证明反例？

## 4. 总结/结论

不清楚为什么人们期望数学中使用的各种非演绎方法除了它们的非演绎性之外还有其他实质性特征。在探讨非演绎推理在发现过程中的作用时，哲学家们经常谈论是否存在某种统一性（例如，拉卡托斯的《证明与反驳》的副标题是“数学发现的逻辑”）。更有可能的是，非演绎方法的范围是多样且异质的（比较斯坦尼斯劳·乌拉姆的说法：“非线性物理学的研究就像非大象生物学的研究一样。”）

当代数学哲学家的研究不断推动非演绎数学方法的研究朝着新的方向发展。一个感兴趣的领域是“数学自然种类”，以及这样一个概念是否可以用来为数学推理中的类比提供基础（科菲尔德 2004 年）。另一个正在研究的领域是启发式原则在数学中的假定作用（这项工作的很大一部分可以追溯到波利亚 1945 年的工作）。

所有这些争论中的一个背景问题是每种特定的非演绎方法在数学的证明实践中所起的基本作用的程度。这个问题在局部和整体层面上都会出现。在局部层面上，为了证明一个给定的结果，某个具体的推理可能是不可避免的非演绎的，然而这个结果也可以通过其他纯粹演绎的推理来证明。在整体层面上，我们对某些数学命题的唯一证明可能是非演绎的。我们使用非演绎方法的程度是由实践的限制还是原则的限制决定的，这仍然是一个需要进一步研究的问题。

## Bibliography

* Adleman, L., 1994, “Molecular Computation of Solutions to Combinatorial Problems”, _Science_, CCLXVI: 1021–1024.
* Andersen, L., 2018, “Acceptable Gaps in Mathematical Proofs”, _Synthese_, URL = [https://doi.org/10.1007/s11229-018-1778-8](https://doi.org/10.1007/s11229-018-1778-8).
* Avigad, J., 2006, “Mathematical Method and Proof”, _Synthese_, 153: 105–159.
* –––, 2007, “5 Questions”, in _Philosophy of Mathematics: 5 Questions_, V. Hendricks & H. Leitgeb (ed.), Copenhagen: Automatic Press, p 1–10.
* Azzouni, J., 2013, “The Relationship of Derivations in Artificial Languages to Ordinary Rigorous Mathematical Proof”, _Philosophia Mathematica_, 21: 247–254.
* –––, 2013, “That We See that Some Diagrammatic Proofs are Perfectly Rigorous”, _Philosophia Mathematica_, 21: 323–338.
* Baker, A., 2007, “Is There a Problem of Induction for Mathematics?”, in _Mathematical Knowledge_, M. Leng, A. Paseau, & M. Potter (eds.), Oxford: Oxford University Press, pp. 59–73
* –––, 2008, “Experimental Mathematics”, _Erkenntnis_, 68: 331–344.
* Berry, D., 2016, “Proof and the Virtues of Shared Enquiry”, _Philosophia Mathematica_, 26: 112–130.
* –––, 2019, “Should Mathematicians Play Dice?”, _Logique et Analyse_, 246: 135–160.
* Borwein, J., & D. Bailey, 2003, _Mathematics by Experiment: Plausible Reasoning for the 21st Century_, Natick, MA: A K Peters.
* –––, 2004, _Experimentation in Mathematics: Computational Paths to Discovery_, Natick, MA: AK Peters.
* –––, 2015, “Experimental Mathematics as an Ontological Game Changer: the Impact of Modern Mathematical Computation Tools on the Ontology of Mathematics”, in _Mathematics, Substance and Surmise_, E. Davis & P. Davis (eds.), Springer, pp. 25–68.
* Brown, J., 2008, _Philosophy of Mathematics: a Contemporary Introduction to the World of Proofs and Pictures_, 2nd Edition, New York: Routledge.
* Burgess, J., 1992, “Proofs about Proofs: a Defense of Classical Logic. Part 1: the Aims of Classical Logic”, in _Proof, Logic and Formalization_, M. Detlefsen (ed.), London and New York: Routledge, pp. 8–23.
* Carroll, L. \[C. L. Dodgson], 1895, “What the Tortoise Said to Achilles,”, _Mind_, 4: 278–280.
* Corfield, D., 2003, _Towards a Philosophy of Real Mathematics_, Cambridge: Cambridge University Press.
* Courant, R., & H. Robbins, 1941, _What Is Mathematics?_, Oxford: Oxford University Press.
* Crandall, R., & C. Pomerance, 2001, _Prime Numbers: a Computational Perspective_, New York: Springer-Verlag.
* De Toffoli, S., & V. Giardino, 2014, “Forms and Roles of Diagrams in Knot Theory”, _Erkenntnis_, 79(4): 829–842.
* De Toffoli, S., 2017, “‘Chasing’ the Diagram: the Use of Visualizations in Algebraic Reasoning”, _Review of Symbolic Logic_, 10: 158–186.
* Delariviere, S.,& Van Kerkhove, B., 2017, “The Artificial Mathematician Objection: Exploring the (Im)possibility of Automating Mathematical Understanding”, in _Humanizing Mathematics and its Philosophy_, B. Sriraman (ed.), Springer International Publishing, pp. 173–198.
* Descartes, R., 1627–28, _Rules for the Direction of the Mind_, in _Descartes: Selections_, R. Eaton (tr.), New York: Charles Scribner’s Sons, 1927, pp. 38–83.
* Detlefsen, M. (ed.), 1992, _Proof, Logic and Formalization_, London and New York: Routledge.
* Dummett, M., 1978, “Wang’s Paradox”, in _Truth and Other Enigmas_, London: Duckworth, pp. 248–268.
* Easwaran, K., 2005, “The Role of Axioms in Mathematics”, _Erkenntnis_, 68: 381–391.
* –––, 2009, “Probabilistic Proofs and Transferability”, _Philosophia Mathematica_, 17: 341–362.
* Echeverria, J., 1996, “Empirical Methods in Mathematics. A Case-Study: Goldbach’s Conjecture”, in _Spanish Studies in the Philosophy of Science_, G. Munévar (ed.) , Dordrecht: Kluwer, pp. 19–55.
* Fallis, D., 1997, “The Epistemic Status of Probabilistic Proof”, _Journal of Philosophy_, 94(4): 165–186.
* –––, 2002, “What Do Mathematicians Want? Probabilistic Proofs and the Epistemic Goals of Mathematicians”, _Logique et Analyse_, 45: 373–388.
* –––, 2003, “Intentional Gaps in Mathematical Proofs”, _Synthese_, 134: 45–69.
* –––, 2011, “Probabilistic Proofs and the Collective Epistemic Goals of Mathematicians”, in _Collective Epistemology_, H.B. Schmid, D. Sirtes & M. Weber (eds.), Ontos Verlag, pp. 157–176.
* Fontanella, L., 2019, “How to Choose New Axioms for Set Theory?”, in _Reflections on the Foundations of Mathematics_, D. Sarikaya, D. Kant & S. Centrone (eds.), Springer Verlag.
* Franklin, J., 1987, “Non-Deductive Logic in Mathematics”, _British Journal for the Philosophy of Science_, 38: 1–18.
* Frege, G., 1884, _Die Grundlagen der Arithmetik: eine logisch-mathematische Untersuchung über den Begriff der Zahl_, Breslau: W. Koebner. Translated as _The Foundations of Arithmetic: A logico-mathematical enquiry into the concept of number_, by J.L. Austin, Oxford: Blackwell, second revised edition, 1974. Reprinted 1980.
* Gallian, J., & M. Pearson, 2007, “An Interview with Doron Zeilberger”, _FOCUS_ (the newsletter of the Mathematical Association of America), 27(5): 14–17.
* Giaquinto, M., 2007, _Visual Thinking in Mathematics: an Epistemological Study_, Oxford: Oxford University Press.
* Gonthier, G., et al., 2008, “Formal Proof – The Four-Color Theorem”, _Notices of the American Mathematical Society_, 55(11): 1382–1393.
* Gonthier, G., 2013, “A Machine-Checked Proof of the Odd Order Theorem”, in _Interactive Theorem Proving: 4th International Conference Proceedings_, S. Blazy, C. Paulin-Mohring & D. Pichardie (eds.), Berlin / Heidelberg: Springer-Verlag, pp. 163–179.
* Haack, S., 1976, “The Justification of Deduction”, _Mind_, 85: 112–119.
* Jackson, J., 2009, “Randomized Arguments are Transferable”, _Philosophia Mathematica_, 17: 363–368.
* Lakatos, I., 1976, _Proofs and Refutations_, Cambridge: Cambridge University Press.
* –––, 1980, “What Does a Mathematical Proof Prove?”, in _Mathematics, Science and Epistemology_ (Imre Lakatos: Philosophical Papers, Volume 2), J. Worrall & G. Currie (eds.), Cambridge: Cambridge University Press, pp. 61–69.
* Lingamneni, S., 2017, “Can we Resolve the Continuum Hypothesis?”, _Synthese_, URL = < [https://doi.org/10.1007/s11229-017-1648-9](https://doi.org/10.1007/s11229-017-1648-9)>.
* Maddy, P., 1988, “Believing the Axioms. I & II”, _Journal of Symbolic Logic_, 53(2): 481–511, 736–764.
* –––, 1997, _Naturalism in Mathematics_, Oxford: Oxford University Press.
* –––, 2001, “Some Naturalistic Remarks on Set Theoretic Method”, _Topoi_, 20: 17–27.
* –––, 2011, _Defending the Axioms: On the Philosophical Foundations of Set Theory_, Oxford: Oxford University Press.
* Mancosu, P., 2008, “Mathematical Explanation: Why it Matters”, in _The Philosophy of Mathematical Practice_, P. Mancosu (ed.), Oxford: Oxford University Press, pp. 134–149.
* McEvoy, M., 2008, “The Epistemological Status of Computer Proofs”, _Philosophia Mathematica_, 16: 374–387.
* –––, 2013, “Experimental Mathematics, Computers and the A Priori”, _Synthese_, 190: 397–412.
* Mumma, J., 2010, “Proofs, Pictures, and Euclid”, _Synthese_, 175: 255–287.
* Paseau, A., 2015, “Knowledge of Mathematics without Proof”, _British Journal for the Philosophy of Science_, 66: 775–799.
* Pólya, G., 1945, _How to Solve It_, Princeton: Princeton University Press.
* Schlimm, D., 2013, “Axioms in Mathematical Practice”, _Philosophia Mathematica_, 21: 37–92.
* Shin, S., & O. Lemon, 2008, “Diagrams”, The Stanford Encyclopedia of Philosophy (Winter 2008 Edition), Edward N. Zalta (ed.), URL = [https://plato.stanford.edu/archives/win2008/entries/diagrams/](https://plato.stanford.edu/archives/win2008/entries/diagrams/).
* Sorensen, H.K., 2010, “Exploratory Experimentation in Experimental Mathematics: a Glimpse at the PSLQ Algorithm”, in _Philosophy of Mathematics: Sociological Aspects and Mathematical Practice_, B. Lowe & T. Muller (eds.), London: College Publications, pp. 341–360.
* –––, 2016, “‘The End of Proof’? The Integration of Different Mathematical Cultures as Experimental Mathematics Comes of Age”, in _Mathematical Cultures_, B. Larvor (ed.), Cham: Birkhauser, pp. 139–160.
* Steiner, M., 1993, “Review of _Proof, Logic and Formalization_”, _Journal of Symbolic Logic_, 58(4): 1459–1462.
* Tennant, N., 2005, “Rule Circularity and the Justification of Deduction”, _Philosophical Quarterly_, 55: 625–648.
* te Riele, H., 1987, “On the Sign of the Difference p(_x_)–Li(_x_)”, _Mathematics of Computation_, 48: 323–328.
* Tymoczko, T., 1979, “The Four-Color Problem and Its Philosophical Significance”, _Journal of Philosophy_, 76(2): 57–83.
* van Bendegem, J., 1998, “What, if Anything, is an Experiment in Mathematics?”, in _Philosophy and the Many Faces of Science_, D. Anapolitanos, et al. (eds.), London: Rowman & Littlefield, pp. 172–182.
* van Kerkhove, B., & J. van Bendegem, 2008, “Pi on Earth”, _Erkenntnis_, 68: 421–435.

## Academic Tools

| ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=mathematics-nondeductive).                                                                      |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/mathematics-nondeductive/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
| ![inpho icon](../../.gitbook/assets/inpho.png)         | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=mathematics-nondeductive\&redirect=True) at the Internet Philosophy Ontology Project (InPhO).   |
| ![phil papers icon](../../.gitbook/assets/pp.png)      | [Enhanced bibliography for this entry](http://philpapers.org/sep/mathematics-nondeductive/) at [PhilPapers](http://philpapers.org/), with links to its database.                            |

## Other Internet Resources

* [Aims and Scope](https://www.tandfonline.com/action/journalInformation?show=aimsScope\&journalCode=uexm20) of the journal _Experimental Mathematics_, founded by David Epstein in 1992.
* [Philosophy of Mathematics: Sociological Aspects and Mathematical Practice](http://www.lib.uni-bonn.de/PhiMSAMP/), Benedikt Löwe and Thomas Müller (coordination).
* Corfield, D., 2004, “[Mathematical Kinds, or Being Kind to Mathematics](http://philsci-archive.pitt.edu/archive/00001960/)”, in the _PhilSci Archive_, University of Pittsburgh.

## Related Entries

[computer science, philosophy of](https://plato.stanford.edu/entries/computer-science/) | [diagrams](https://plato.stanford.edu/entries/diagrams/) | [Gödel, Kurt](https://plato.stanford.edu/entries/goedel/) | [logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [mathematical: explanation](https://plato.stanford.edu/entries/mathematics-explanation/) | [mathematics, philosophy of](https://plato.stanford.edu/entries/philosophy-mathematics/) | [mathematics, philosophy of: naturalism](https://plato.stanford.edu/entries/naturalism-mathematics/) | [style: in mathematics](https://plato.stanford.edu/entries/mathematical-style/)

[Copyright © 2020](https://plato.stanford.edu/info.html#c) by\
Alan Baker <[_abaker1@swarthmore.edu_](mailto:abaker1%40swarthmore%2eedu)>
