# 弗雷格-希尔伯特争论 controversy with Hilbert (Patricia Blanchette)

*首次发表于 2007 年 9 月 23 日；实质性修订于 2024 年 3 月 7 日*

在二十世纪初期，数理逻辑领域的两位巨匠戈特洛布·弗雷格（Gottlob Frege）和大卫·希尔伯特（David Hilbert）就数学理论中公理的正确理解以及如何证明这些公理的一致性和独立性结果展开了一场争论。这场争论涉及逻辑和逻辑哲学中的许多难题，并标志着现代逻辑发展中的一个重要转折点。本条目概述了这场争论及其哲学基础。

---

## 1. 介绍

1899 年 6 月，在哥廷根市新建的高斯-韦伯纪念碑揭幕仪式上，大卫·希尔伯特发表了一场关于几何基础的讲演。该讲演后来由特伯纳出版，题为《几何基础》（“Grundlagen der Geometrie”），这篇文章标志着现代数学和逻辑发展的一个分水岭。尽管这部作品的主题是几何，但它的持久影响更广泛地涉及了数学理论中公设的作用，以及对一些元理论问题（如一致性和独立性）的系统化处理。通过呈现丰富的一致性和独立性证明，希尔伯特展示了公设的“结构”方法的力量，并为很快成为我们自己当代模型论方法的基础奠定了基础。 （有关希尔伯特对公设处理的历史背景，请参阅 Hallett 2012 和《19 世纪几何》；有关希尔伯特的工作在模型论发展中的作用，请参阅模型论和 Eder＆Schiemer 2018。）

希尔伯特的讲座和专著激起了他同时代的戈特洛布·弗雷格的强烈反应，后者发现希尔伯特对公理的理解以及他对一致性和独立性证明的方法几乎是难以理解的，至少是严重有缺陷的。弗雷格的反应首先在他与希尔伯特的 1899 年 12 月至 1900 年 9 月的通信中阐述，随后在 1903 年和 1906 年发表的两系列论文（均名为《关于几何的基础》）中详细阐述。希尔伯特从未被弗雷格的批评所动摇，并在 1900 年后也没有对其作出回应。弗雷格则从未相信希尔伯特的方法的可靠性，并一直认为后者的一致性和独立性证明存在严重缺陷。[1]

在这两位数学家之间的哲学辩论中，我们看到了对数学理论性质及其证明方式两种截然不同的理解方式的冲突。关于希尔伯特的一致性和独立性证明的成功与否的意见分歧，正如下文所述，是由于在诸如：如何理解数学理论的内容、成功的公理化包括什么、数学理论的“真理”到底是什么，以及当我们询问一组公理的一致性或者某个数学命题与其他命题的独立性时，我们真正在问什么等基本问题上存在重大分歧。

在接下来的内容中，我们简要介绍希尔伯特在《几何的基础》中的技巧，详细阐述弗雷格对此的各种批评，并最终概述导致这些差异的逻辑整体观念。

## 2. 希尔伯特的几何基础

### 2.1 概述

希尔伯特在几何基础（以下简称为“FG”）中的工作主要包括为欧几里德几何建立一套清晰而准确的公理，并详细展示这些公理之间以及与几何学的一些基本定理之间的关系。特别是，希尔伯特证明了各个子公理组的一致性，一些公理与其他公理的独立性，以及重要定理的可证明性和独立性与特定子公理组的关系。其中包括对欧几里德几何全部公理集的一致性的新证明，以及公理中的平行公理与其他欧几里德公理的独立性。

这里所讨论的“独立性”概念是指不可证明性：说一个给定的陈述对于一组陈述是独立的，意味着它不能从这些陈述中被证明。一致性也是以可证明性为基础的：说一组陈述是一致的，意味着没有矛盾可以从中被证明。因此，这两个概念，一致性和独立性，是相互定义的：如果一个陈述集合中任意选择的矛盾对于它是独立的，那么这个陈述集合就是一致的，而如果一个陈述 S 对于一个集合 C 是独立的，那么集合 C∪∼S 就是一致的。

希尔伯特在 FG 中的一致性证明都是相对一致性的证明，也就是说，在每种情况下，几何公理集合 AX 的一致性都被归约到一个熟悉的背景理论 B 的一致性，从而证明了如果 B 一致，则 AX 也一致。希尔伯特采用的重要技术是重新解释 AX 中出现的几何术语，使得在重新解释后，AX 的成员表达了 B 的定理。例如，希尔伯特的第一个一致性证明将术语“点”、“线”和“在上面”分别解释为一组特定的实数有序对、一组实数比值以及这些有序对和比值之间的代数定义关系；在这种重新解释下，所讨论的几何句子表达了实数背景理论的定理。

可以通过以下推理看出，这种重新解释策略保证了相对一致性：如果集合 AX 是不一致的，那么就会有一个从它中得出矛盾的证明。但是，由于当术语“点”、“线”等按照希尔伯特的方式重新解释时，这个证明仍然是一个证明（矛盾仍然是一个矛盾），这意味着从 B 的定理集合中可以证明出一个矛盾。因此，B 本身将是不一致的。

独立性的展示方式完全相同。为了表明陈述 I 相对于陈述集合 AX（相对于 B 的一致性）是独立的，人们以一种方式解释相关的几何术语，使得 AX 的成员在解释后表达了 B 的定理，而 I 则表达了 B 的一个定理的否定。也就是说，相对于 B 的一致性，通过证明 AX∪{∼I}相对于 B 的一致性，证明了 I 相对于 AX 的独立性。

在 FG 中，使用解释来证明一致性的一般思想并不新颖；类似的策略最近已经在各种数学学派中应用于证明算术、类理论以及几何学中的一致性和独立性。这种技术在早期使用几何模型证明非欧几何的一致性时也有前例。Hilbert 在 FG 中的工作在技术的清晰性和系统应用方面取得了重大进展，并对通过重新解释来证明一致性和独立性所涉及的元理论推理的性质提供了有影响力的解释。一旦 Hilbert 的技术应用于完全形式化语言的句子中，这一发展在 FG 之后的三十年间逐步进行，我们基本上获得了对模型的现代理解，今天在证明一致性和独立性方面的使用与 Hilbert 的技术只有细节上的不同。

Hilbert 的核心思想再次是不关注特定的几何概念，如点和线，而是注意公理所述的这些概念之间的逻辑关系。例如，关于平行公理与其他欧几里德公理的独立性问题完全与这些公理所展示的逻辑结构有关，而与是否讨论的是几何点和线，或者完全是其他主题无关。正如 Hilbert 所说，

> 显然，每个理论只是一种概念框架或模式，连同它们之间的必要关系，基本元素可以以任何方式思考。如果在谈论我的观点时，我想到一些事物系统，例如：爱情、法律、扫烟囱的系统...然后假设我的所有公设都是这些事物之间的关系，那么我的命题，例如毕达哥拉斯定理，也对这些事物有效。换句话说：任何理论都可以应用于无限多个基本元素系统。（1899 年 12 月 29 日写给弗雷格的信，由弗雷格摘录 [省略希尔伯特的或弗雷格的] 在弗雷格 [PMC]：40 中）

因此，FG 中的几何术语在两个重要方面本质上充当占位符。第一，FG 的公设和定理被理解为可重新解释的句子，其中重新解释简单地是将新内容分配给几何术语。第二，证明——从前提逻辑地导出结论的一组句子——根本不依赖于这些简单术语的内容，因此通过重新解释保持其证明地位。

当以这种方式看待句子时，作为包含一组可重新解释术语的有针对性集合，一组句子可以被视为提供某种类型的定义，通常称为“隐含定义”。具体来说：包含 n 个可重新解释术语的句子集合 AX 隐含地定义了一个 n 元关系 RAX，仅适用于那些 n 元组，当分别作为 AX 的可重新解释术语的解释时，使 AX 的成员为真。 （例如：如果 AX 是集合{至少有两个点；每个点至少位于两条线上}，那么 RAX 是任何三元组 ⟨P，LO，L⟩ 的关系，其中 P 至少有两个成员，L 至少有两个成员，LO 是一个在 P 的每个成员和 L 的至少两个成员之间存在的关系。）定义的关系只是简单地抽象结构，或者正如希尔伯特所说的，“搭架”，它是任何这样的 n 元组共享的。

当一组句子提供了一个关系的隐含定义时，人们可以问这个关系（以及由此延伸的句子集本身）是否可满足。也就是说，人们可以问是否存在一个 n 元组，当作为句子中相关术语的解释时，会使每个句子都成为真。希尔伯特在 FG 中的每个一致性证明都提供了一个满足相关定义关系的 n 元组，因此证明了该关系的可满足性。在这种意义下的可满足性足以确保一致性，根据上述推理。[6]

现在我们可以用简洁的话来重新描述希尔伯特的技术：给定一组句子 AX，希尔伯特利用一个背景理论 B 来构建 AX 的几何术语的解释，在这个解释下，AX 的成员表达了 B 的定理。假设 B 是一致的，这个解释就是一个满足由 AX 定义的关系 RAX 的 n 元组。它的存在证明了 RAX 的可满足性，因此也证明了 AX 相对于 B 的一致性。类似地，如果存在一个解释，使得 AX∪{∼I}中的每个成员都表达了 B 的定理，那么就证明了 I 相对于 AX 是独立的，如果 B 是一致的。

### 2.2 策略的新颖性

希尔伯特战略的两个关键特点，正如我们所见，是（i）将公理理解为可重新解释的句子，以及（ii）将可证明性理解为对数学术语含义不敏感。通过与 19 世纪中叶之前的主流数学观点进行比较，特别是与证明和概念分析之间的关系观点进行比较，可以看出这种方法的新颖之处。在几何学中，从 Proclus 时代到 18 世纪末，对于欧几里德平行公设的可证明性的研究涉及详细的尝试来分析直线的概念，目标是发现一对直线的直线性与渐近逼近的不可能性之间的概念联系。例如，Leibniz 提出了许多策略，将直线的概念简化为更简单的概念，作为他试图证明平行公设的复杂尝试的一部分（参见 DeRisi 2016，尤其是第 4 章）。我们可以从 D'Alembert 的评论中看出这个概念的重要性（以及几个世纪来试图证明平行公设的失败的挫折），他说：“直线的定义和性质，以及平行线的定义和性质，因此是几何学基本原理的陷阱，可以说是丑闻”（D'Alembert 1767，第 206-7 页，引自 De Risi 2016，57n）。对于我们的目的来说，这里需要注意的主要观点是概念分析在解决可证明性问题中的作用。在与 Leibniz 及其同时代人相关的几何学研究中，术语“直线”不仅仅是一个可重新解释的符号；它代表着一种特定类型的几何实体，与空间直觉和几何学的其他基本概念有明确的概念联系，这对于涉及该术语的句子所表达的主张的可证明性问题至关重要。其他几何术语也是如此。核心思想是句子之间（或者由它们所表达的主张之间）的逻辑联系不仅仅取决于句子本身的表面结构，还取决于概念联系，有时通过概念分析揭示并由定义表达，这些概念联系与各个几何术语的内容之间存在关联。在几何学之外，我们可以在 19 世纪的集合论和实分析的发展中看到类似的模式，其中对等势和连续函数等概念的概念澄清在基础定理的证明中起着核心作用（参见有关集合论、连续性和无穷小的早期发展以及 Bernard Bolzano 的条目）。正如 Frege 在 1914 年总结的一般观点：

> 在科学的发展中，确实可能会出现这样的情况，即在长时间内使用一个词、一个符号、一个表达式时，人们以为它的意义很简单，直到成功地将其分析为更简单的逻辑成分。通过这种分析，我们可以希望减少公理的数量；因为只要那个复杂成分保持未分析状态，就可能无法证明包含它的真理；但是，通过分析，可能可以从分析的元素出现在其中的真理中证明它。【数学逻辑手稿；Frege [PW] 209】

希尔伯特的工作所展示的公理和可证明性的新理解有效地将概念分析的问题与严格证明的问题分开。当希尔伯特询问给定的几何句子 S 是否可以从几何公理集合 AX 中证明时，这不是一个可以通过提供相关几何术语所表达的概念分析来回答的问题。这实际上是关于 S 从 AX 的“形式”可证明性的问题，其中形式证明不依赖于几何（或其他数学）术语的内容。这种可证明性（以及一致性和独立性）对个别术语的内容的不关心既通过重新解释来证明一致性和独立性，也通过提高对可证明性、一致性和独立性问题的精确性起到重要作用。如何最好地理解和分析几何概念的问题，虽然对于决定如何呈现给定理论（即使用哪些术语和句子）仍然很重要，但在严格意义上不再在可证明性问题中起作用。

在 FG 中看到的公理的新理解是受到了 19 世纪末一些数学家的工作中出现的数学理论新概念的推动，这种理解不仅仅是因为这种构想所允许的精度增加，而且还因为数学理论的新概念。 （参见数学中的结构主义条目，以及 Dedekind 1888 年；Peano 1889 年；Huntington 1902 年；Veblen 1904 年；Awodey 和 Reck 2002 年。）也许最清楚地表达在 Richard Dedekind（1888 年，1890 年）的工作中，这个想法是数学理论并不描述特定的对象集合（比如说，数字或者空间中的线），而是表征一个可以由不同的有序集合实例化的抽象结构。对数学理论内容的这种看法，现在通常被称为“结构主义”观点，与理论的个别术语是可以接受任何语法上允许的内容的想法相辅相成，如上所述，这些术语是可以接受任何语法上允许的内容的占位符。因此，这种理解的公理集合隐含定义的抽象结构类型，在结构主义观点上，是这样的公理化数学理论的主题。因此，与早期的莱布尼茨观点不同，较新的结构主义观点使得理解一个句子从其他句子中的可证性成为自然，这是由这些句子的几何术语是可重新解释的占位符所表达的抽象关系的问题。通过这样的理解，相对一致性和独立性可以通过希尔伯特的重新解释策略直接证明。

我们可以总结 19 世纪末一些作者的工作中发现的重要创新，但最清楚地由希尔伯特的《几何基础》所体现：第一是对严格可证性的理解，因此对一致性和独立性的理解，独立于目标（例如几何）术语的含义。这使得通过重新解释技术证明相对一致性和独立性成为可能。第二是对数学理论及其公理的理解，不是表征特定的对象集合，而是可多次实例化的抽象结构。后一种创新对于证明一致性和独立性的重新解释策略的有效性并非必要，但它是一种理解数学理论的方式，使得第一种创新，因此重新解释策略，尤其自然。

## 3. 弗雷格——背景和最初的差异

弗雷格对数学理论的观点在许多方面与上述的旧传统相似。对于弗雷格来说，数学理论有一个特定的主题：数论是关于自然数的；几何学是关于空间中的图形的；等等。弗雷格认为，我们在数学中使用的句子之所以重要，仅仅是因为它们表达了非语言命题（或者，正如他所说的，“思想”）。在法语和德语中工作的数学家之所以从事相同的主题，是因为根据弗雷格的看法，他们的句子表达了相同的思想。每个思想都是关于一个确定的主题，并对该主题陈述了真或假的内容。[7] 从这个观点来看，思想也是逻辑上相互蕴涵或相互矛盾的事物，是真或假的事物，也是构成数学理论的事物。因此，在弗雷格的观点中，问题的一致性和独立性是关于思想而不是句子的。

因为每个思想都有一个确定的主题，所以谈论思想的“重新解释”是没有意义的。从弗雷格的观点来看，希尔伯特所从事的重新解释，即为特定词语赋予不同的含义，只能适用于句子。因此，弗雷格对希尔伯特方法的第一个困难是不清楚希尔伯特所指的“公理”的含义：如果他指的是那些可能引发一致性和独立性问题的事物，那么他必须是在谈论思想；而如果他指的是那些可以有多种解释的事物，那么他必须是在谈论句子。

困难从这里开始增加。当希尔伯特在证明一组句子 AX 的相对一致性时，通过对几何术语进行具体的重新解释，弗雷格指出我们现在有两组不同的思想在起作用：我们可以称之为“AXG”的思想集，这些思想是在 AX 的术语采用其普通的几何含义时表达的（例如，“point”表示点），以及我们可以称之为“AXR”的思想集，这些思想是在 AX 的术语采用希尔伯特重新解释所赋予的含义时表达的（例如，“point”表示一对实数）。从弗雷格的观点来看，希尔伯特的重新解释策略仅仅是将我们的注意力从句子 AX 通常表达的思想集（我们关心其一致性）转移到重新解释下 AX 表达的新思想集 AXR 上。而重新解释后的句子表达关于实数的真理与一开始关于点、线和平面的原始思想的一致性和独立性问题几乎没有关系，从弗雷格的角度来看。

除了弗雷格所看到的令人困惑的来回在讨论一组给定的句子时在不同思想集之间转换的做法之外，希尔伯特的程序还涉及另外两个有问题的方面，依弗雷格看来。

第一个问题涉及到一致性证明的必要性。在弗雷格看来，一个理论的公理总是构成一组真实的思想集；而且由于真理意味着一致性，一组公理的一致性从不需要证明。另一方面，对于希尔伯特来说，一组句子被视为公理并不保证其真实性（或在给定解释下的真实性），一致性的证明通常是确立该组公理的数学可尊重性的关键步骤。

其次，希尔伯特和弗雷格在一致性与存在之间的联系上有重要分歧。希尔伯特认为，将一个理论视为由一组可多重解释的句子所公设，这组句子的一致性足以证明该理论中提到的数学实体的存在（或存在）。例如，一个复数理论的一致性就足以证明在这个理论中以这些数进行推理的数学实践是合理的。而对于弗雷格来说，一致性永远不能保证存在。他用自己偏爱的例子来说明这一点，即三个句子的一致性（按希尔伯特的意义）不能证明这三个句子所指的东西存在。

* A 是一个智慧的存在
* A 是无所不在的
* A 是全能的

不足以保证它们的实例化。（例如，参见弗雷格于 1900 年 1 月 6 日写给希尔伯特的信；弗雷格 [PMC]：47。）

弗雷格和希尔伯特在公理的性质上存在着一个核心区别，即关于公理是关于一个固定主题的确定真实主张还是可重新解释的表达多次实例化条件的问题。这本质上是上述区别的差异，即关于数学理论及其公理的旧（约 1900 年）思维方式和新思维方式之间的差异 [8]。这个问题仍然在数学哲学的许多研究中产生影响，不仅涉及如何最好地理解特定数学理论（例如，欧几里德几何学或实分析），还涉及结构主义方法对数学理论的要求，即是否需要一些基础理论 - 其主题提供了解释其余理论所需的材料 - 其公理必须以某种非结构主义的方式理解。请参阅有关数学哲学和集合论的条目。

弗雷格和希尔伯特之间的第二个问题，即从一致性到存在性的推理是否合理，仍然存在争议。虽然每个人（包括希尔伯特）都会同意弗雷格的观点，在数学领域之外，我们不能安全地从一致性推断存在性，但问题仍然是我们是否可以（或必须）在数学中这样做。弗雷格的观点是，数学对象的存在只能通过对更基本原理的引用来证明（如果有的话），而希尔伯特的观点是，在适当的纯数学情况下，为了建立存在性，除了理论的一致性之外，没有其他需要证明的东西（请参阅有关数学哲学和数学哲学中的形而上学的条目）。

尽管存在这些差异，弗雷格和希尔伯特都同意在一致性和独立性方面存在重要的数学问题，并且他们同意，例如，欧几里德几何中关于平行公设与其余部分的独立性的经典问题是一个重要问题。但正如上面所指出的，他们对于希尔伯特的方法是否足以解决这些问题存在分歧。接下来，我们转向弗雷格拒绝希尔伯特的一致性和独立性证明方法的理由问题。

## 4. 更深层次的分歧

如上所述，弗雷格认为希尔伯特的重新解释涉及从几何思想（其一致性和独立性受到质疑）转向完全不同类型的思想，即关于背景理论 B（其一致性和独立性并不成问题）的思想。关于一致性证明，他认为希尔伯特从关于实数的思想集合 AXR 的一致性推出了关于几何点、线和平面的思想集合 AXG 的一致性，这是一种不合法的推理。弗雷格承认希尔伯特的句子集合 AX 可以被理解为对一个抽象关系 RAX 的隐含定义，该关系被希尔伯特构造的 n 元组满足，并且 AXR 的一致性（即可满足性）蕴含了该定义关系的一致性。但在这里，弗雷格同样认为希尔伯特从抽象关系 RAX 的一致性推出思想集合 AXG 的一致性的关键推理是有问题的。正如弗雷格自己所说，将 AXR 和 AXG 称为“特殊几何”，将 RAX 称为“一般情况”：

> [鉴于特殊几何中的公理都是一般公理的特例，人们可以从特殊几何中的无矛盾推断出一般情况下的无矛盾，但不能推断出另一个特殊情况的无矛盾。(弗雷格于 1900 年 1 月 6 日的信中[PMC]: 48)]

一旦他指出他认为有问题的推理，弗雷格认为争论的重点完全在于希尔伯特：如果希尔伯特认为 AXG 的一致性要么来自于 AXR 的一致性，要么来自于 RAX 的可满足性，那么就由希尔伯特来证明这一点。弗雷格并没有刻意证明这一关键推理是无效的，但似乎一旦他指出这里需要正当化，他的观点基本上就已经表达清楚了。

当然，从希尔伯特的角度来看，没有这样的必要。弗雷格一再坚持的句子集(AX)和不同的思想集(AXG, AXR 等)之间的差异在希尔伯特看来完全无关紧要。因为希尔伯特理解的一致性适用于由 AX 定义的概念和关系的“脚手架”，当其几何术语被视为占位符时，他所关心的一致性(用思想的术语来说)对 AXG 成立当且仅当对 AXR 成立，因为这两组思想都是相同“脚手架”的实例化。同样的观点也可以用句子来表达：弗雷格坚持认为，在它们的几何解释下句子的一致性问题与在它们的实数解释下句子的一致性问题是不同的问题；而对于希尔伯特来说，只有一个问题，如果有任何解释使得句子表达真理，那么答案就是肯定的。因此，虽然弗雷格认为希尔伯特应该解释从 AXR 的一致性到 AXG 的一致性的推理，但对于希尔伯特来说，根本就没有推理。

弗雷格对于他拒绝希尔伯特的方法的原因缺乏清晰度，导致了一种解释上的空白，关于这一点存在争议的余地。首先，我们应该记住，希尔伯特显然是正确的，他自己的重新解释策略足以证明他所声称的相对一致性和独立性结果。如果一致性和独立性被理解为上述的不可证明性，并且如果证明是独立于几何术语的含义的，正如希尔伯特所假设的那样，那么如果其中一个是一致的，那么 AXR、AXG 甚至 AX 本身都是一致的。那么弗雷格对希尔伯特的技术的拒绝必然涉及到对希尔伯特所建立的内容的某种混淆，或者对一致性和独立性主张中的问题有不同的理解。

因此，理解弗雷格对弗雷格-希尔伯特辩论的贡献的一种方式是承认弗雷格在澄清希尔伯特自己的公理方法方面所做的贡献，但同时认为弗雷格对于证明一致性和独立性的希尔伯特技术的否定评估是错误的。根据这种观点，尽管弗雷格和希尔伯特在公理的性质上存在差异，但是 RAX 的可满足性确实显示了所讨论的公理集的一致性，无论是将这些公理按照希尔伯特的方式理解为句子（即作为 AX 的集合）还是按照弗雷格的方式理解为思想（即作为 AXG 的集合）。独立性也是如此。在这种观点下，弗雷格的错误在于没有注意到希尔伯特认为他的重新解释对于几何句子所证明的非可证明性结果（一致性或独立性）也适用于几何思想的相应的非可证明性结果（一致性或独立性）（参见 Resnik 1974 年，Currie 1982 年，Dummett 1975 年）。

第二种解释认为，弗雷格对一致性和独立性的理解与希尔伯特的理解足够不同，以至于所涉及的蕴涵关系不成立：即 RAX 的可满足性和希尔伯特意义下的 AX 的一致性并不蕴涵弗雷格意义下的 AXG 的一致性。独立性也是如此。根据这种解释，弗雷格正确地声称希尔伯特的证明未能显示出他自己理解这些术语的一致性和独立性。[9]

第二种解释的核心观点是，对于弗雷格来说，关于一个给定思想是否可以从一系列思想中被证明，敏感的不仅仅是用来表达这些思想的句子的形式结构，还有这些句子中出现的简单术语（例如几何术语）的内容。根据这一观点，弗雷格对可证明性的理解类似于上述早期传统，并且在莱布尼茨的作品中有所体现。如果弗雷格确实以这种方式将可证明性视为内容敏感的话，那么我们立即可以看到，AXR 的一致性并不意味着 AXG 的一致性，因为关于从 AXG 中是否可以证明出矛盾的问题可能部分取决于相关思想中的特定几何部分，即 AX 的几何术语的通常几何含义。举个例子，虽然这不是弗雷格本人提出的例子，但考虑一对句子：

* 点 B 位于点 A 和点 C 之间的一条直线上；
* 点 B 不位于点 C 和点 A 之间的一条直线上。

这对句子在希尔伯特的意义上可以明显地保持一致。但是在这里提出的弗雷格的解释下，这种一致性（在希尔伯特的意义上）并不能确保在普通解释下，这些句子所表达的思想形成一致的集合。例如，如果弗雷格将关系“之间”理解为容易进行概念分析的方式，其定义可以从（由）这对句子所表达的思想推导出矛盾，那么在弗雷格的意义上，这对句子是不一致的。

弗雷格认为可证性对概念分析非常敏感的观点，根据这种观点，可以在弗雷格终身试图证明他的逻辑主义论题的策略中看出。逻辑主义论题是指算术的真理可以从纯逻辑中证明。在这个项目的过程中，弗雷格经常提供证明一个给定思想 τ 从一组思想 T 中逻辑地推出的演示，这个过程包括两个步骤。首先，弗雷格对 τ 和/或 T 的成员进行概念分析，揭示出这些思想中以前未被认识到的概念复杂性。其次，他从经过分析的 τ 和经过分析的 T 的成员中证明了经过分析的版本的 τ。例如，弗雷格认为自己证明了以下思想的表达方式：

(i)

一个数的两个倍数之和是该数的倍数

从所表达的思想中可以逻辑推断出

(ii)

∀m∀n∀p((m+n)+p=m+(n+p))

 并且

(iii)

 ∀n(n=n+0)。

该演示通过对“倍数”概念进行仔细分析，从加法的角度给出了一个更复杂的(i′)代替(i)，然后从(ii)和(iii)证明了它。[10] 同样，弗雷格的逻辑主义项目的一个重要部分包括对零和后继等算术概念的仔细分析，这种分析揭示了以前未被注意到的复杂性，并促进了算术真理的证明。（有关逻辑主义项目的讨论，请参阅弗雷格和逻辑主义以及新逻辑主义词条。）

正如弗雷格在他的《算术基础》的早期页面中所说，当我们试图从可能的最简单的起点证明算术的真理时，

> … 我们很快就会遇到一些命题，如果我们不能成功地将其中出现的概念分析成更简单的概念，或者将其归纳为更普遍的东西，就无法证明它们。（弗雷格 1884: §4）

简而言之：思想的组成部分有时可以用更简单或更普遍的成分来分析，以揭示先前隐藏的逻辑蕴涵关系。因此，当我们想要知道一个给定的思想是否在一组思想中逻辑蕴涵时，从弗雷格的观点来看，我们需要注意的不仅仅是表达这些思想的句子所展示的整体结构，还有这些句子中出现的个别术语的内容。

弗雷格工作中这一方面与他关于独立性观点的联系，根据所讨论的解释，是这样的。因为我们有时只有在仔细分析其中一些表面上简单的思想成分之后，才能发现思想 τ 只有在一组思想 T 的逻辑蕴涵之后，同样，我们有时将能够发现一组思想是不一致的，即它在概念分析的基础上逻辑蕴涵一个矛盾。因此，由一组句子 Σ 表达的思想的一致性不仅取决于 Σ 中句子的整体结构，还取决于 Σ 的句子中出现的术语的含义。

为了澄清最后一点，让我们看一个非数学的例子，这个例子既不是希尔伯特也不是弗雷格明确处理过的。考虑句子集合{琼斯做了一个噩梦，琼斯没有做梦}，或者等价地说，它的一阶表达形式{Nj,∼Dj}。从希尔伯特在 FG 中使用的意义上来看，这个集合显然是一致的；很容易提供“琼斯”、“x 做了一个噩梦”和“x 做了一个梦”（或者“”、“N”和“D”）的解释，使得这些句子在解释下表达真理（例如，考虑一个解释，其中“”被赋予数字 7，“N”是素数集合，“D”是大于 12 的数字集合）。但是从弗雷格的观点来看，所表达的思想在某种程度上是不一致的，因为做噩梦的一部分就是做梦。从弗雷格的观点来看，这种不一致性可以通过对所表达思想的分析来证明，并且注意到这种分析的结果产生了集合{琼斯做了一个令人不安的梦，琼斯没有做梦}。

基于同样的原因，两个在结构上相似的思想集合，它们可以在不同的解释下由相同的句子集合表达，可能在弗雷格一致性方面存在差异。在几何学的背景下，根据弗雷格对希尔伯特的反对的这种解释，核心思想是希尔伯特所进行的重新解释可以将一个一致的思想集合（例如，AXR）转变为一个不一致的思想集合（例如，AXG），因为主题的转变导致了从第一个一致性到第二个一致性的推理无效。等价地，根据弗雷格对一致性概念的理解，从一般关系 RAX 的一致性推理到几何思想集合 AXG 的一致性是无效的，因为后者涉及的额外几何内容是潜在的不一致源。正如弗雷格在给利布曼的一封信中所说，

> 就矛盾的缺乏和公理的相互独立性而言，希尔伯特对这些问题的研究受到了一个事实的影响，即公理的意义并不是完全确定的...我有理由相信，欧几里德几何的公理的相互独立性是无法证明的。希尔伯特试图通过扩大领域，使欧几里德几何成为一个特例来证明它；在这个更广泛的领域中，他现在可以通过例子展示缺乏矛盾；但仅限于这个更广泛的领域；因为我们不能从更广泛的领域的缺乏矛盾推断出更狭窄的领域的缺乏矛盾；因为由于限制的原因，矛盾可能会进入（1900 年 7 月 29 日给利布曼的信，引自 Frege [PMC]：91）。

弗雷格并不声称在任何具体案例中证明这种潜在矛盾的存在。换句话说，他并没有提供概念分析，揭示希尔伯特声称已经证明一致性的地方存在矛盾，并且没有证据表明他认为希尔伯特的任何具体一致性主张是错误的。弗雷格可能心中有一些这样的分析，这在他写给希尔伯特的一封信中有所暗示，他声称在自己未完成的对几何基础的研究中，他能够“用更少的原始术语”，这可能意味着他认为希尔伯特所视为原始的一些术语可以通过其他术语进行分析（参见弗雷格 [PMC] 的 1899 年 12 月 27 日写给希尔伯特的信：34）。任何这样的分析都将揭示逻辑依赖关系（从弗雷格的观点来看），而希尔伯特会发现独立性。

由于弗雷格在这个主题上的工作都没有留存下来，我们对他可能提供的具体分析没有任何细节。然而，在这一观点上，弗雷格对希尔伯特的批评的关键点并不在于特定分析的分歧或随之而来的特定一致性和独立性主张的失败，而是关于一致性和独立性证明的一般方法论。因为对于希尔伯特来说，一组句子的一致性完全取决于它们展现出的整体结构，而对于弗雷格来说，表达的思想的一致性还另外取决于句子中出现的非逻辑术语的内容，因此，希尔伯特的一致性并不意味着弗雷格的一致性。

## 5. 悬而未决的问题

我们已经调查了两种理解弗雷格对希尔伯特证明一致性和独立性技术的反对意见的方式。第一种认为弗雷格基本上是错误的，错误在于他未能意识到可重新解释的句子集的可满足性与相关的独立性/一致性要求之间的联系。第二种认为弗雷格基本上是正确的，因为（i）他理解思想的一致性和独立性不仅取决于表面句法表达的句子，还取决于其表达中使用的简单术语的内容，以及（ii）这样理解的一致性和独立性无法用希尔伯特的方式证明。

这两种解释选项都存在问题。第一种的一个重要困难是将弗雷格归因于对希尔伯特的重新解释力度的严重困惑，这与事实相抵触，即总体而言，弗雷格在《FG》中对希尔伯特的方法论程序的描述要比希尔伯特自己的描述要清晰得多。另一个困难的来源是该解释所归因于弗雷格的独立性理解与他的逻辑主义工作中的逻辑蕴涵理解之间的紧张关系，根据这种理解，数学术语的内容对于逻辑蕴涵问题至关重要。第二种解释虽然对弗雷格更加宽容，更符合他在逻辑方面的一般工作，但据称它缺乏弗雷格明确提及概念分析与一致性和独立性问题的相关性。

对于任何关于弗雷格对独立性和一致性观点的解释，最后一个潜在困难的来源是 1906 年的《几何基础》论文的非常有趣的第三部分。该文本的重要性以及它引发的解释困难可以概括如下。

1906 年的《几何基础》论文主要是对弗雷格早期对希尔伯特一致性和独立性处理的反对意见（如上所述）的重新阐述。在重述这些反对意见之后，弗雷格在第三部分转向了提出证明独立性的积极方法的问题。他问，如何证明一个给定的思想与一组思想独立？作为回答，弗雷格提供了一个潜在方法的草图，并在讨论结束时指出，所描绘的方法仍然不完整，并且面临一些困难。尽管显然不完整，弗雷格似乎从未（据我们所知）回到这个提议，并且最终似乎发现它不令人满意。他认为它在原则上不令人满意的迹象是在四年后的一份给朱尔当的注释中表明的，即不能证明平行公设的不可证性（参见弗雷格 [PMC]：183n）。也就是说，他似乎在 1910 年仍然坚持他早期的观点，即没有系统的方法来证明独立性。[ 11]

1906 年的提议本身可以概述如下。弗雷格说，假设我们有一个集合 C，其中每个句子都表达一个确定的思想，并且有一个句子 S 也同样表达一个确定的思想。证明 S 思想与 C 思想的独立性的提议方法的核心是，我们使用一个将术语映射到术语的映射 μ（因此也将句子映射到句子），该映射保持句法类型（将名称映射到名称，一元谓词映射到一元谓词等），并将“逻辑”术语映射到它们自身。然后：如果 μ 将 S 映射到一个假句子，同时将 C 的所有成员映射到真句子，则 S 思想与 C 思想是独立的。（有关弗雷格提议的讨论和发展，请参见 Antonelli＆May 2000，Eder 2016。有关弗雷格拒绝提议的原因的讨论，请参见 Ricketts 1997，Eder 2013，Blanchette 2014。）

关于这个提议的第一件有趣的事情是它与希尔伯特方法的惊人相似之处。假设弗雷格的语言足够丰富，以包括希尔伯特在重新解释中可能使用的所有对象、函数和集合的术语，那么只有当存在一种弗雷格所描述的映射时，希尔伯特使用的重新解释才会显示（他版本的）独立性：在希尔伯特的重新解释中提供了一个具有新内容的术语 t 时，弗雷格的方法只会简单地将 t 映射到具有相同内容的新术语。这意味着，尽管弗雷格提出了所有的反对意见，希尔伯特的方法最终足以证明弗雷格（在 1906 年）认为的思想的独立性。如果这是正确的，那么我们有理由怀疑弗雷格的任何解释，即他对希尔伯特方法的拒绝是合理的，并且我们特别有理由拒绝这样一种观点：对于弗雷格来说，一致性和独立性是敏感于数学（例如几何）术语的内容。

有人可能对刚才提出的希尔伯特方法和弗雷格提议之间的强等价产生怀疑的主要原因是：(i)不清楚弗雷格将会把哪些术语算作“逻辑”的，即那些成员 μ 必须映射到它们自身的术语类是否与希尔伯特将会算作具有固定解释的术语类相同；最重要的是(ii)不清楚弗雷格所指的语言是什么样的。关于第一个问题：如果弗雷格的固定术语类比希尔伯特的更广泛，和/或者弗雷格的语言缺少希尔伯特的一些术语，那么在希尔伯特的意义下的独立性证明将不意味着在弗雷格的意义下存在一种映射来证明独立性。关于第二个问题：关键问题是像“数”或“之间”这样的术语，弗雷格认为容易接受概念分析的术语，是否会出现在弗雷格所关心的语言中（与要求语言仅包含“完全分析”的术语相对），以及这样的术语是否会成为 μ 映射到任意新术语的术语之一。弗雷格本人指出了刚才提出的第一个术语界定问题的重要性，即确定哪些术语被映射到它们自身的问题，并指出这个问题是需要解决的，以便将他的草案变成可行的策略。因为他从未回答过固定术语或所讨论语言的问题，弗雷格的提议对于与希尔伯特的明确比较来说是不够明确的。因此，我们面临的是对弗雷格提出的方法以及他似乎随后否定了这一方法的解释问题，同时也要认识到这一提议的不完整性。（有关 1906 年文本的进一步讨论，请参见：Ricketts 1997，Tappenden 2000，Blanchette 2014。）

## 6. 结论

因为一致性和独立性的断言基本上是非蕴涵或不可证明的断言，即使我们掌握了证明数学结果的强大技术，也不明显如何证明一致性和独立性。希尔伯特在 1899 年为我们提供了一种系统化和强大的技术，可以跨越所有形式化学科用于证明一致性和独立性。这样做，他与他的一些同时代人一起为当代模型论技术的出现奠定了基础。（有关进一步讨论，请参见 Mancosu, Zach, & Badesa 2009；另请参见 19 世纪几何学条目。）

透过弗雷格的拒绝和希尔伯特对该技术的辩护，我们发现的是对其成功所必需的假设的澄清。正如我们所见，证明的关键特征必须假定，以便希尔伯特式的重新解释能够证明一个不可证明的结果，即可证性不受希尔伯特认为可重新解释的那些术语内容的影响，比如几何术语。另一种一致性和独立性的观点是，根据这种观点，蕴涵和可证性受到几何术语内容的影响，希尔伯特式的重新解释无法证明一致性和独立性。正如上文所述，弗雷格的观点提供了一种对一致性和独立性的理解，为他反对希尔伯特提供了理由，并提供了对几何一致性和独立性主张所涉及的替代解释。

尽管希尔伯特和弗雷格之间的沟通明显失败，但他们的辩论揭示了许多重要问题，其中包括：(i) 以图式理解的句子在提供隐含定义方面的作用，弗雷格比希尔伯特更清楚地表达了这一点；(ii) 逻辑关系在多大程度上应被视为“形式的”。在最后一个问题上，弗雷格和希尔伯特之间的差异具有启发性。在与希尔伯特的辩论之前很久，弗雷格就已经认为逻辑严密需要使用形式推导系统，“形式”的意思是所有思想都通过精确确定的句子表达，所有推理规则和公理都以句法方式呈现（参见，例如，弗雷格 1879 年）。对我们而言最重要的是，弗雷格的形式系统在本质上是现代的，因为在这样的系统中，从一组句子中推导出一个句子的可导性仅取决于这些句子的句法形式。弗雷格的许多工作所依赖的著名概念分析都是在证明之前提供的；通过概念分析，我们得到了在形式系统内处理的适当句子，但是分析本身在推导中并不起作用。因此，当涉及证明某个给定句子可以从一组句子中推导出时，弗雷格和希尔伯特一样：意义并不重要。事实上，在他们通信的时候，弗雷格的工作比希尔伯特的工作要“形式”得多，因为希尔伯特当时并没有使用明确的句法定义的推导系统。

然而，弗雷格对逻辑的理解导致了逻辑蕴涵（或可证性）与句子之间的形式可导性之间只存在单向联系。在一个良好的形式系统中，只有当句子 σ 从集合 Σ 中推导出来时，σ 所表达的思想实际上才是由 Σ 的成员所表达的思想逻辑蕴涵的。 （这只需要你的公理和推理规则选择得当。）但反之并不成立：在这样的系统中，σ 从 Σ 中不能推导出来并不保证 σ 所表达的思想独立于 Σ 的成员所表达的思想。因为可能会出现，正如弗雷格自己的分析明确处理的情况一样，对思想及其组成部分的进一步分析将产生更复杂的结构。当这种情况发生时，分析可能会返回更复杂的（集合）句子 σ'和 Σ'，以至于 σ'最终可以从 Σ'中推导出来。根据上述两种解释选项中更宽容的解释，这就是弗雷格对希尔伯特在几何学中一致性和独立性处理的拒绝的解释。我们可以这样说，因为相当大的逻辑复杂性可能隐藏在相对简单的句子所表达的思想中，不可推导性并不保证在弗雷格的体系中独立性。可以说，在逻辑和形式之间存在着重要的差距。

对于希尔伯特来说，至少在公理化几何的背景下，逻辑关系就是可形式描述的关系，因为它们完全与所讨论的句子所展示的结构有关，或者等价地说，与这些句子所定义的概念的“脚手架”有关。正是因为希尔伯特意义上的一致性仅仅取决于这种抽象结构，而不取决于实例化结构的术语的内容，重新解释策略才是有效的。

在这场辩论中，希尔伯特显然是赢家，因为他对一致性的理解大致上是今天在形式理论背景下所指的“一致性”，而他的一致性证明方法的近亲现在已经成为标准。我们现在通常认为一致性和独立性与希尔伯特一样，独立于所谓的“非逻辑”术语的含义，并且可以直接按照希尔伯特的方式进行演示。这并不是说弗雷格的反对意见已经得到满足，而是说通过正式一致性概念的确立以及对弗雷格所称的“一致性”至少在这个标题下的不关注，这些反对意见基本上已经被规避了。


## Bibliography

### Primary Sources

* Dedekind, Richard, 1888, *Was Sind und Was Sollen die Zahlen?*, Braunschweig: Vieweg und Sohn; English translation as “The Nature and Meaning of Numbers” in R. Dedekind, *Essays on the Theory of Numbers*, edited and translated by Wooster Woodruff Beman, Chicago: Open Court, 1901.
* –––, 1890, “Letter to Keferstein”, in J. van Heijenoort (ed.), *From Frege to Gödel*, Cambridge: Harvard University Press, 2002, pp. 98–103.
* Frege, Gottlob, 1879, *Begriffsschrift, eine der arithmetischen nachgebildete Formelsprache des reinen Denkens*, Halle: Louis Nebert. Translated as *Concept Script, A Formal Language of Pure Thought Modeled Upon that of Arithmetic*, by Stefan Bauer-Mengelberg in *From Frege to Gödel*, Jean van Heijenoort (ed.), Cambridge, MA: Harvard University Press, 1967, pp. 5–82.
* –––, 1881, “Booles rechnende Logik und die Begriffsschrift”, unpublished manuscript in Frege 1969: 9–52 [1979: 9–46].
* –––, 1884, *Die Grundlagen der Arithmetik: eine logisch-mathematische Untersuchung über den Begriff der Zahl*, Breslau: W. Koebner. Translated as *The Foundations of Arithmetic: A Logico-Mathematical Enquiry into the Concept of Number*, by J. L. Austin, Oxford: Oxford University Press, 1950. Reprinted Evanston, IL: Northwestern University Press, 1978.
* –––, 1903, “Über die Grundlagen der Geometrie” (On the Foundations of Geometry) – First Series. *Jahresbericht der Deutschen Mathematiker-Vereinigung*,
  * 12: 319–324, [[Frege 1903 (I) available online](http://www.digizeitschriften.de/dms/resolveppn/?PID=GDZPPN002119102)]
  * 12: 368–375, [[Frege 1903 (II) available online](http://www.digizeitschriften.de/dms/resolveppn/?PID=GDZPPN002119129)]English translation in Frege 1984: 273–284.
* –––, 1906, “Über die Grundlagen der Geometrie” (On the Foundations of Geometry) – Second Series, *Jahresbericht der Deutschen Mathematiker-Vereinigung*,
  * 15: 293–309, [[Frege 1906 (I) available online](http://www.digizeitschriften.de/dms/resolveppn/?PID=GDZPPN002120461)]
  * 15: 377–403, [[Frege 1906 (II) available online](http://www.digizeitschriften.de/dms/resolveppn/?PID=GDZPPN002120631)]
  * 15: 423–30, [[Frege 1906 (III) available online](http://www.digizeitschriften.de/dms/resolveppn/?PID=GDZPPN002120666)]English translation in Frege 1984: 293–340.
* –––, 1969 [1979], *Nachgelassene Schriften und Wissenschaftlicher Briefwechsel*, Hans Hermes, Friedrich Kambartel, and Friedrich Kaulbach (eds.), Hamburg: Felix Meiner Verlag, volume 1. English translation of some selections as Frege [1979].
* –––, 1971, *On the Foundations of Geometry and Formal Theories of Arithmetic*, Eike-Henner W. Kluge (trans.), New Haven, CT: Yale University Press.
* –––, 1979 [PW], *Posthumous Writings*, translation (partial) of Frege [1969] by Peter Long and Roger White, with the assistance of Raymond Hargreaves, Chicago: University of Chicago Press.
* –––, 1971, *On the Foundations of Geometry and Formal Theories of Arithmetic*, Eike-Henner W. Kluge (trans.), New Haven, CT: Yale University Press.
* –––, 1980 [PMC], *Philosophical and Mathematical Correspondence*, Gottfried Gabriel, Hans Hermes, Friedrich Kambartel, Christian Thiel, Albert Veraart, Brian McGuinness, and Hans Kaal (eds.) Oxford: Blackwell Publishers.
* –––, 1984, *Collected Papers on Mathematics, Logic and Philosophy*, Brian F. McGuinness (ed.), Oxford: Blackwell Publishers.
* Hallett, Michael and Ulrich Majer (eds.), 2004, *David Hilbert’s Lectures on the Foundations of Geometry 1891–1902*, Berlin: Springer.
* Hilbert, David, 1899, *Grundlagen der Geometrie*, Leipzig: Teubner. An English translation of the 10th edition is available as *Foundations of Geometry*, Leo Unger (trans.), La Salle, IL: Open Court Press, 1971.
* Huntington, Edward V., 1902, “A Complete Set of Postulates for the Theory of Absolute Continuous Magnitude”, *Transactions of the American Mathematical Society*, 3(2): 264–279.
* Padoa, Alessandro, 1900, “Essai d’une théorie algébrique des nombres entiers, précédé d’une introduction logique à une theorie déductive quelconque” in *Bibliothèque du Congrès International de Philosophie, Paris, 1900*, Paris: Armand Colin, 1901, Volume 3, pp. 309–365; partial English translation as “Logical introduction to any deductive theory” in *From Frege to Gödel*, Jean van Heijenoort (ed.), Cambridge, MA: Harvard University Press, 1967, pp. 118–123.
* Peano, Giuseppe, 1889, *Principii di Geometria logicamente esposti*, Torino: Fratelli Bocca.
* Pieri, Mario, 1898, “I Principii della geometria di posizione composti in sistema logico deduttivo”, *Memorie della Reale Accademia delle Scienze di Torino* (Series 2), 48: 1–62.
* Veblen, Oswald, 1904, “A System of Axioms for Geometry”, *Transactions of the American Mathematical Society*, 5(3): 343–384. doi:10.2307/1986462

### Secondary Sources

* d’Alembert, Jean le Rond, 1767, *Mélanges de literature, d’histoire et de philosophie* (Volume 5), Amsterdam: Chatelain.
* Antonelli, Aldo and Robert May, 2000, “Frege’s New Science”, *Notre Dame Journal of Formal Logic*, 41(3): 242–270. doi:10.1305/ndjfl/1038336844
* Awodey, Steve and Erich Reck, 2002, “Completeness and Categoricity, Part I: Nineteenth-century Axiomatics to Twentieth-century Metalogic”, *History and Philosophy of Logic*, 23: 1–30.
* Blanchette, Patricia A., 1996, “Frege and Hilbert on Consistency”, *Journal of Philosophy*, 93(7): 317–336. doi:10.2307/2941124
* –––, 2007, “Frege on Consistency and Conceptual Analysis”, *Philosophia Mathematica*, 15(3): 321–346. doi:10.1093/philmat/nkm028
* –––, 2012, *Frege’s Conception of Logic*, Oxford: Oxford University Press. See esp. Ch. 5. doi:10.1093/acprof:oso/9780199891610.001.0001
* –––, 2014, “Frege on Formality and the 1906 Independence Test”, in *Formalism and Beyond: On the Nature of Mathematical Discourse*, Godehard Link (ed.), Boston/Berlin: De Gruyter, pp. 97– 118.
* –––, 2017, “Models in Geometry and Logic: 1870–1920”, in *Logic, Methodology and Philosophy of Science: Proceedings of the 15th International Congress*, Leitgeb, Niiniluoto, Seppälä. and Sober (eds.), London: College Publications, pp. 41–61.
* Bernays, Paul, 1922, “Die Bedeutung Hilberts fur die Philosophie der Mathematik”, *Die Naturwissenschaften*, 10(4): 93–99. English translation by Paolo Mancosu in *From Brouwer to Hilbert; The Debate on the Foundations of Mathematics in the 1920s*, Paolo Mancosu (ed.), New York: Oxford University Press, pp. 189–197. doi:10.1007/BF01591620 (German)
* Currie, Gregory, 1982, *Frege: An Introduction to His Philosophy*, Sussex: Harvester.
* Demopoulos, William, 1994, “Frege, Hilbert and the Conceptual Structure of Model Theory”, *History and Philosophy of Logic*, 15(2): 211–225. doi:10.1080/01445349408837233
* De Risi, Vincenzo, 2016, *Leibniz on the Parallel Postulate and the Foundations of Geometry: The Unpublished Manuscripts*, Birkhäuser: Springer
* Dummett, Michael, 1975, “Frege on the Consistency of Mathematical Theories”, in *Studien zu Frege*, Matthias Schirn (ed.), Stuttgart/Bad Cannstatt: Fromann-Holzboog, pp. 229–242.
* –––, 1991, *Frege: Philosophy of Mathematics*, Cambridge, MA: Harvard University Press.
* Eder, Günther, 2013, “Remarks on Independence Proofs and Indirect Reference”, *History and Philosophy of Logic*, 34(1): 68–78. doi:10.1080/01445340.2012.702568
* –––, 2016, “Frege’s ‘On the Foundations of Geometry’ and Axiomatic Metatheory”, *Mind*, 125(497): 5–40. doi:10.1080/01445340.2012.702568
* –––, 2021, “Frege and the Origins of Model Theory in Nineteenth Century Geometry”, *Synthese*, 198: 5547–5575. doi: 10/1007/s11229-019-02421-4
* Eder, Günther and Georg Schiemer, 2018, “Hilbert, Duality, and the Geometrical Roots of Model Theory”, *The Review of Symbolic Logic*, 11(1): 48–86. doi:10.1017/S1755020317000260
* Hallett, Michael, 2010, “Frege and Hilbert”, in *The Cambridge Companion to Frege*, Tom Ricketts and Michael Potter (eds.), Cambridge: Cambridge University Press, pp. 413–464. doi:10.1017/CCOL9780521624282.011
* –––, 2012, “More on Frege and Hilbert”, *Analysis and Interpretation in the Exact Sciences: Essays in Honour of William Demopoulos*, Melanie Frappier, Derek Brown, and Robert DiSalle (eds.), Dordrecht, New York: Springer, pp. 135–162. doi:10.1007/978-94-007-2582-9_8
* Hodges, Wilfrid, 2004, “The Importance and Neglect of Conceptual Analysis: Hilbert-Ackermann iii.3”, in *First-Order Logic Revisited*, Vincent F. Hendricks *et al*. (eds.), Berlin: Logos Verlag, pp. 129–153.
* Korselt, Alwin, 1903, “Über die Grundlagen der Geometrie”, *Jahresbericht der Deutschen Mathematiker-Vereinigung*, 12: 402–407. English translation by E-H. W. Kluge in Frege 1971. [[Korselt 1903 available online (German)](http://www.digizeitschriften.de/dms/resolveppn/?PID=GDZPPN002119153)]
* Mancosu, Paolo, Richard Zach, and Calixto Badesa, 2009, “The Development of Mathematical Logic from Russell to Tarski, 1900–1935” in *The Development of Modern Logic*, Leila Haaparanta (ed.), New York: Oxford University Press. doi:10.1093/acprof:oso/9780195137316.003.0029
* Nagel, Ernest, 1939, “The Formation of Modern Conceptions of Formal Logic in the Development of Geometry”, *Osiris*, 7: 142–224. doi:10.1086/368504
* Resnik, Michael David, 1974, “The Frege-Hilbert Controversy”, *Philosophy and Phenomenological Research*, 34(3): 386–403. doi:10.2307/2107085
* Ricketts, Thomas, 1997, “Frege’s 1906 Foray Into Metalogic”, *Philosophical Topics*, 25(2): 169–188. doi:10.5840/philtopics199725214
* Rohr, Tabea, 2023, “The Frege-Hilbert Controversy in Context”, *Synthese*, 202(12), first online 28 June 2023. doi: 10.1007/s11229-023-04196-1
* Shapiro, Stewart, 2005, “Categories, Structures, and the Frege-Hilbert Controversy: The Status of Meta-mathematics”, *Philosophia Mathematica*, 13(1): 61–77. doi:10.1093/philmat/nki007
* Tappenden, Jamie, 2000, “Frege on Axioms, Indirect Proofs, and Independence Arguments in Geometry: Did Frege Reject Independence Arguments?” *Notre Dame Journal of Formal Logic*, 41(3): 271–315. doi:10.1305/ndjfl/1038336845
* Wehmeier, Kai F., 1997, “Aspekte der Frege-Hilbert-Korrespondenz”, *History and Philosophy of Logic*, 18(4): 201–209. doi:10.1080/01445349708837289

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=frege-hilbert). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/frege-hilbert/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=frege-hilbert&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](https://philpapers.org/sep/frege-hilbert/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* Sterrett, Susan G., 1994, “[Frege and Hilbert on the Foundations of Geometry](http://philsci-archive.pitt.edu/723/),” [PDF] (1994 Talk).

## Related Entries

[Bolzano, Bernard](https://plato.stanford.edu/entries/bolzano/) | [continuity and infinitesimals](https://plato.stanford.edu/entries/continuity/) | [Frege, Gottlob](https://plato.stanford.edu/entries/frege/) | [geometry: in the 19th century](https://plato.stanford.edu/entries/geometry-19th/) | Hilbert, David | [logicism and neologicism](https://plato.stanford.edu/entries/logicism/) | [mathematics, philosophy of](https://plato.stanford.edu/entries/philosophy-mathematics/) | [mathematics, philosophy of: Platonism](https://plato.stanford.edu/entries/platonism-mathematics/) | [mathematics, philosophy of: structuralism](https://plato.stanford.edu/entries/structuralism-mathematics/) | [set theory](https://plato.stanford.edu/entries/set-theory/) | [set theory: early development](https://plato.stanford.edu/entries/settheory-early/)

### Acknowledgments

Thanks to Edward N. Zalta for helpful suggestions on this entry.

[Copyright © 2024](https://plato.stanford.edu/info.html#c) by  
[Patricia Blanchette](http://www.nd.edu/~pblanche/) <[*blanchette.1@nd.edu*](mailto:blanchette%2e1%40nd%2eedu)>

