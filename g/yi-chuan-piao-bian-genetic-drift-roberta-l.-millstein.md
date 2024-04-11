# 遗传漂变 genetic drift (Roberta L. Millstein)

*首次发表于 2016 年 9 月 15 日星期四；实质性修订于 2021 年 2 月 17 日星期三*

在 1950 年代，生物学家之间爆发了一场激烈的辩论，至今仍在进行，讨论的对象似乎是最不可能的生物之一：陆地蜗牛 Cepaea nemoralis。然而，C. nemoralis 实际上有一些有趣的方面。这种蜗牛是多态的；蜗牛的壳颜色（粉色、棕色和黄色）以及可见条纹的数量（0-5 条）都有所不同。但是颜色和条纹并不在各个种群中均匀分布。在一些种群中，粉色占主导地位，而在其他种群中，黄色或棕色占主导地位，同样，某些条纹数量在某些种群中比其他种群更普遍。因此，种群内不仅存在变异（很少找到全是一种颜色或所有蜗牛具有相同数量条纹的种群），而且种群之间也存在变异。这种形态分布的解释是什么？那些只熟悉自然选择理论的进化知识的人可能会假设，在黄色蜗牛最普遍的种群中，这是因为它们比其他颜色更适应环境——有一些环境因素偏爱黄色而不是棕色和粉色。在棕色蜗牛最普遍的种群中，可能存在一些环境上的差异，导致它们比黄色和粉色蜗牛更受青睐。但是还有其他解释吗？也许这些分布在某种意义上是由于偶然性，甚至可以用数学模型来描述。这意味着什么，你如何确定哪种解释是正确的？试图发展“偶然性”解释，作为自然选择之外的替代方案（也许是互补的替代方案），这导致生物学家发展了遗传漂变模型。

遗传漂变（也称为“随机漂变”、“随机遗传漂变”或有时只是“漂变”）一直是生物哲学和进化生物学界持续争议的焦点，以至于漂变是什么的问题甚至变得有争议。似乎有共识认为漂变是种群遗传学（参见种群遗传学条目）和更广泛的进化生物学中的一个偶然（或概率或统计）元素，而“随机”一词并不是在引用不确定性或任何技术数学含义，但在这方面的共识就到此为止。然而，遗传漂变模型是种群遗传学教科书和研究中的一个重要主题，遗传漂变被描述为进化的主要因素之一，与选择、突变和迁移并列。一些人声称遗传漂变在进化中（尤其是分子进化中）发挥了重要作用，而另一些人则认为它作用较小。本文将探讨这些争议及其他问题。

为了突破对漂变竞争性定义的僵局，本条目首先简要介绍了这一概念的历史，然后审视了关于漂变适当表征以及它是否可以与自然选择区分开的各种哲学主张；漂变与关于统计主义的争论之间的关系；漂变是否可以在实证上被检测到，如果可以，如何检测；以及对漂变作为模型和（所谓的）定律的适当理解。

* [1. 遗传漂变概念的起源](https://plato.stanford.edu/entries/genetic-drift/#OrigConcGeneDrif)
* [2. 什么是漂变，它能与自然选择区分开吗？](https://plato.stanford.edu/entries/genetic-drift/#WhatDrifItDistNatuSele)

  * [2.1 漂变的历史派生账户：因果过程账户](https://plato.stanford.edu/entries/genetic-drift/#HistDeriAccoDrifCausProcAcco)
  * [2.2 对漂变的反应和基于抽样的漂变账户的种类](https://plato.stanford.edu/entries/genetic-drift/#ReacVariSampBaseAccoDrif)
  * [2.3 遗传漂变的数学方法](https://plato.stanford.edu/entries/genetic-drift/#MathApprDrif)
  * [2.4 其他关于漂变的描述](https://plato.stanford.edu/entries/genetic-drift/#OtheAccoDrif)
* [3. 遗传漂变与统计因果论争的交集](https://plato.stanford.edu/entries/genetic-drift/#InteGeneDrifStatCausDeba)
* [4. 实证检测漂变](https://plato.stanford.edu/entries/genetic-drift/#DeteDrifEmpi)

  * [ 4.1 经典研究](https://plato.stanford.edu/entries/genetic-drift/#ClasStud)
  * [4.2 遗传漂变和分子进化研究](https://plato.stanford.edu/entries/genetic-drift/#StudDrifMoleEvol)
  * [4.3 关于漂变的最新实证问题](https://plato.stanford.edu/entries/genetic-drift/#ReceEmpiIssuConcDrif)
* [5. 模型中的漂变，法则中的漂变](https://plato.stanford.edu/entries/genetic-drift/#DrifModeDrifLaw)
* [ 6. 结论](https://plato.stanford.edu/entries/genetic-drift/#Conc)
* [ 参考书目](https://plato.stanford.edu/entries/genetic-drift/#Bib)
* [ 学术工具](https://plato.stanford.edu/entries/genetic-drift/#Aca)
* [其他互联网资源](https://plato.stanford.edu/entries/genetic-drift/#Oth)
* [ 相关条目](https://plato.stanford.edu/entries/genetic-drift/#Rel)

---

## 1. 遗传漂变概念的起源

尽管查尔斯·达尔文在《物种起源》中以各种方式提到了“机会”，但他似乎并未在他的论述中包含漂变的概念。他只是顺便提到

> [变异]既不有益也不有害的变异不会受到自然选择的影响，可能会成为某些多态物种中我们可能看到的波动元素，或者最终会因有机体的性质和环境的性质而固定下来。（达尔文 1872 年：63 页；请参阅第 120 页和第 176 页上的类似说法）

读者会发现，这与当代对漂变的概念非常相似。但达尔文并没有进一步发展这个想法；特别是，他没有告诉我们为什么这些变异的分布会随着时间波动或者它们最终如何固定。对漂变的第一个严肃（和数学）处理通常可以追溯到人口遗传学的两位奠基人 Sewall Wright 和 R.A. Fisher，尽管两者都没有声称他们发展了漂变的想法（Beatty 1992）。Wright（1951）将这个想法的起源归功于 John Gulick（1873），而 Fisher（1922b）最初讨论了这个想法是从 A.C. 和 A.L. Hagedoorn（1921）的工作中得出的，尽管 Wright（1931a）也引用了 Hagedoorns。目前尚不清楚谁首先在这个背景下使用了“漂变”这个术语；早在 Wright（1929）中就出现了这个术语。因此，让我们简要地研究一下 Gulick 和 Hagedoorns，以便了解“漂变”这个术语的起源。

Gulick（1873）指出，通过自然选择，人们可以假设在发现不同形式的地方，也会发现不同的外部条件（不同形式经过几代人适应了不同的外部条件）。然而，有些情况（例如，蜗牛中）外部条件非常相似，但有机体形式却非常不同。他指出这些物种往往占据非常小的区域，尽管有理由相信这不是因为它们缺乏迁徙能力。然后他提出了一个场景：假设物种的一些成员迁移到一个新区域，在那里他们摆脱了竞争并且与原始种群大部分分开。新种群中将出现新的变异，但除非它们“明显畸形”，否则它们将持续存在。因此，新种群将与原始种群区分开来（例如，具有新的颜色阴影或形状变异），如果存在“快速变异的先天倾向”，可能会迅速发生。

这里需要注意的一些要点在后来讨论漂变时变得相关：1）漂变与自然选择形成对比。2）在人口中增加的变异是中性的，或者至少不是严重有害的。（请注意，1 和 2 也出现在上面达尔文的引用中）。3）漂变与小人口相关联（尽管尚不完全清楚原因）。4）漂变与在新区域建立新人口相关联。5）人口变化是由生物体的运动和产生新变异的倾向导致的，这两者都是物理过程，而不仅仅是数学构造（这在后来的辩论中成为一个问题）。6）描述的变化是人口中生物体的变化。

Hagedoorn 和 Hagedoorn（1921）同样指出，有���生物体的特征是“琐碎的”，即“不可能被视为有用”，例如“一些谷物种子上小毛发的形状和排列”（第 107 页）。他们同样认为，这些特征，可以在一个物种内保持稳定（“纯粹”，即固定），不可能是自然选择的产物；相反，Hagedoorns 坚称，它们必须是“伴随选择的某种过程的结果”（第 108 页）。然后 Hagedoorns 继续描述了几种减少人口变异的方法：建立一个新人口，缺乏原始人口的一些变异；将人口分成两半（女儿人口的变异与原始人口及彼此不同）；以及“随机取样”，即使人口规模从一年到另一年保持相对恒定，只有一小部分成功繁殖。在最后一点上，他们指出，

> 被命运选中成为下一代父母的有机体群通常，但并非总是，比其物种个体数量要少得多。(1921: 120)

因此，Hagedoorns 支持上述 1-5 点，同时描述了除＃4（建立新种群）之外的另外两个过程，即种群分裂和父母的随机抽样。他们进一步解释了＃3（小种群）的相关性：“群体越小，其潜在变异性就越有限，它很快就会完全纯净”（第 123 页）。最后，他们认为漂变可以产生固定性（“纯度”），或者在没有选择的情况下在种群内完全失去变异。Fisher（1922b）认为 Hagedoorns 声称“随机存活比优先存活更重要，限制物种变异性的因素”（第 321 页），他试图证明这样的过程过于缓慢，无法克服突变速率（从而引入新的变异性—但他似乎在 1922a 中表示相反）。

1931 年 Wright 发表的一篇文章可能提供了对漂变的最早明确描述之一：

> 我认为另一个因素在阻止基因频率系统达到平衡中应该更为重要。这是在有限大小的繁殖种群中进行随机抽样的影响。一个世代的基因频率可能仅仅由于偶然性而与前一代有所不同。在几代人的过程中，这可能带来重要的变化，尽管漂变离理论平衡越远，向回归的压力就越大。（Wright 1931b: 205; 强调添加）

从这个引用中得出的论文本意是对一篇更长的论文进行总结，该论文也于 1931 年发表（Wright 1986: 88）。在更长的论文（1931a）中，Wright 指出随机抽样是对配子进行的。（配子是在受精过程中融合在一起的细胞，比如卵子和精子）。因此，尽管 Wright（1931a）指出 Hagedoorns 曾“强调了这种随机固定作为进化因素的重要性”，并表示 Fisher（1922b）曾分析过这个问题，但他是否把话题转向了对配子的随机抽样，而不是对“父母”（即生物体）的随机抽样？简而言之，没有：Wright（1932 年及其他地方）明确表示，他认为漂变包括对配子和对生物体的随机抽样。换句话说，他扩大了漂变概念所涵盖的现象，这些现象不仅包括 Gulick、Hagedoorns 和 Fisher 讨论过的内容。但 Wright 的 1932 年论文也强调了漂变与近亲繁殖之间会产生持久混淆；在小种群中，近亲繁殖和漂变更为重要，因此很容易混淆它们。但是你可以在没有近亲繁殖的情况下对父母进行随机抽样（比如通过种群分裂），也可以在没有对父母进行随机抽样的情况下进行近亲繁殖。这就表明漂变和近亲繁殖并不相同。因此，并非所有对漂变的扩展都是有益的。

需要指出的是，虽然 Wright 和 Fisher 就漂变在进化中的作用进行了多次讨论和争论（Provine 1986，Skipper 2002），但他们似乎并不在漂变的定义上存在分歧。Wright（1948）认为以下是 Fisher 和 E.B. Ford 对他观点的“可接受表述”：

> Sewall Wright（1931，1932，1935，1940）认为，由于在选择下一代构成的配子时的随机抽样误差，所有分离因子的基因比例会在每一代中发生微小变化，这一点具有重要的进化意义。当然，这种偶然偏差在关注的孤立种群越小时会更大。（Fisher 和 Ford 1947）

另一方面，Wright 后来将突变率的波动、迁移的波动和选择的波动（例如，Wright 1949）纳入漂变类型中，这一举措遭到了 Cain 和 Currey 的质疑，他们声称“实际例子的研究者必须根据其生物学意义对过程进行分类”，而这种混合会导致混淆，阻碍对实际情况的正确分析（Cain & Currey 1963: 59）。因此，他们主张使用术语“抽样漂变”，Wright 在他 1978 年的巨著《进化与种群遗传学》第四卷中采纳了这一术语。

简而言之，漂变的创始人对漂变持有多样化的观点，约翰·比蒂（John Beatty）有助于如下描述：

> 漂变是一种异质的进化原因和效应类别，相对于其他进化方式（尤其是自然选择进化），其整体意义一直存在争议。（Beatty 1992: 273）

上文讨论中提到的潜在原因包括配子抽样、父母抽样、新种群的建立、种群的分裂，当种群较小时，这些原因会被加剧，而提到的潜在效应包括基因频率在一代到下一代的波动、种群中变异体的丧失，以及在种群中固定（可能是非适应性的）类型。这些原因和效应都属于漂变吗？由于这种令人困惑的异质性，这个概念吸引了哲学界的关注。但至少我们有了哲学讨论的起点（参见 Beatty 1992 和 Plutynski 2007 以获取更多历史概述）。

## 2. 什么是漂变，它能与自然选择区分开吗？

哲学家们采取了各种方法来描述漂变并将其与自然选择区分开来，包括从刚才介绍的历史中得出的因果过程方法，以及数学推导的方法和其他类型的方法。这些依次讨论。

### 2.1 一个历史衍生的漂变解释：因果过程解释

回顾“漂变”一词的历史用法，比亚蒂（Beatty）指出

> 大多数被指定为漂变的现象具有一个或另一个生物形式的随机或不加区分的抽样，以及随之而来的抽样误差。 （Beatty 1992: 273; 另请参见普卢特因斯基等人 2016 年关于现代综合作者在这一点上的一致意见）

让我们从遗传漂变开始。比亚蒂指出，父母抽样是确定一代中哪些生物将成为下一代的父母，以及每个父母将有多少后代的过程（1984 年：188；原文斜体）

> 比亚蒂认为，这种父母抽样可以是有选择性的，即与生物的物理差异有关，也可以是无差别的，即不考虑生物的物理差异（1984 年：189）。有选择性的父母抽样通常被认为是自然选择；无差别的父母抽样是随机漂变。比亚蒂同样将配子抽样描述为

确定由杂合子父母产生的两种遗传不同类型的配子中的哪一种实际上被贡献给其每个后代的过程（1984 年：189；原文斜体）

> *the process of determining which of the two genetically different types of gametes produced by a heterozygotic parent is actually contributed to each of its offspring* (1984: 189; italics in original)

 他继续说：

> 这种抽样可能是不加区分的，因为杂合子产生的两种类型的配子之间的任何物理差异可能与哪一个实际上贡献给任何特定后代无关。（1984 年：189）

再次，不加区分的抽样形式是漂变，而区分配子抽样将是选择。

文献中常见几种不加区分的抽样示例，但有些比其他更有帮助。其中一种是一个假设情景，其中两个在基因和表型上相同的双胞胎一起走路；一个被闪电击中，而另一个活下来繁衍后代。（这个例子似乎源自 Scriven 1959 和 Mills 和 Beatty 1979，尽管这些作者是在谈论适应度，而不是漂变）。这是一个不幸的例子，部分原因是因为很容易陷入双胞胎是否真的在基因和身体上相同的问题中，但更重要的是，这是误导性的，因为事实上，漂变需要遗传变异，就像选择一样。闪电的例子也有问题，因为它使漂变看起来异常和灾难性，而实际上，漂变通常被认为是普遍的（即发生在所有种群中），并不一定是由于灾难性或不寻常的事件。其他人（例如 Matthen 和 Ariew 2002；Walsh，Lewens 和 Ariew 2002）使用一系列抛硬币作为漂变的例证，但这可能会受到质疑，因为它鼓励二元思维，而不是允许多种变体和多种结果，并且不清楚抛硬币的“种群”到底是什么。

遗传漂变的更好说明源自 Theodosius Dobzhansky（1937 年）对 Dubinin 和 Romaschoff（1932 年）模型的讨论，该模型要求我们想象一个装满不同颜色球的瓮。如果球是不考虑颜色地从瓮中取出的，例如，由一个蒙着眼睛的人取球，那么这些球就是被不加区分地抽样的（不像有意识地尝试挑选某种颜色球的有区分抽样）。如果取出了大量的球，我们期望从瓮中取出的样本中的有色球的频率与瓮中的频率非常接近。如果只从瓮中取出了少量有色球，那么我们的样本很可能与瓮中的有色球比例不同。随着时间的推移进行多次取样，这将对应于多代，往往会呈现出频率波动的模式（回想一下达尔文上面的引用）。这个说明模拟了种群，它的变体及其物理差异，并清晰地说明了可能的结果。它也很容易推广到例如色盲的捕食者（Hodge 1987）和其他不加区分的取样代理。然而，它也有一些局限性；例如，它缺乏繁殖的类比，因为球不会生产后代，无论是多个还是其他。

尽管用不加区分和有区分抽样的方式来表征漂变和选择似乎很直接，Beatty 对不加区分抽样的阐释是对 Hagedoorns、Fisher 和 Wright 所谓的“随机”抽样的重要澄清，Beatty（1984）提出了一个问题，即自然选择和随机漂变之间的概念区别。问题如下：对于给定环境中的每一个有机体种群，具有一定类型和相关适应度分布，自然选择有一系列可能的结果，其中一些比其他更有可能发生。当然，更有可能的是适应度更高的有机体在下一代中具有更大的繁殖成功率，而适应度较低的有机体也有可能不会。 （达尔文反复强调了自然选择的这种机会因素）。那么，对于适应度较低的有机体超过适应度更高的有机体的结果，我们该怎么说？Beatty 说：

> 在那些结果较少代表那些有机体在所涉环境中生存和繁殖的物理能力的程度时，任何导致的进化变化将更多地是随机漂变的问题，

得出结论，这是

> 从概念上很难区分自然选择和遗传漂变，尤其是涉及自然选择的不太可能的结果时（Beatty 1984: 196；原文重点）

正如将在下文进一步讨论的那样，20 世纪的大部分时间都被生物学家之间关于演化中漂变和选择相对重要性的辩论所标记。这些辩论至少在某种程度上是概念上不清晰的结果吗？Millstein（2002）认为我们不需要接受 Beatty 论点的这种无意后果，事实上，选择实际上可以与漂变区分开来。为了做到这一点，应对 Beatty 的论述进行三方面的扩展。首先，与 Hodge（1987）类似，Millstein 建议，正确区分漂变和选择依赖于因果关系，具体而言，漂变过程是无差别的抽样过程，其中实体（生物体、配子等）之间的任何可遗传的物理差异对于繁殖成功的差异是无关紧要的，而自然选择过程是有选择性的抽样过程，其中实体（生物体、配子等）之间的任何可遗传的物理差异对于繁殖成功的差异是有关紧要的。这些更精确的“无差别抽样”和“有选择性抽样”的表述旨在取代比喻性的“抽样”说法，仅保留“抽样”一词作为一个有用的简称。其次，我们应该小心区分漂变过程与漂变产生的结果，以及选择过程与选择产生的结果。 （当然，区分过程和结果的重要性并不是一个新颖的见解；这里的新颖之处在于将其应用于区分漂变和选择的问题。在哲学文献中，这种区分有时被表述为“过程与产品”而不是“过程与结果”，但考虑到“产品”的目的性和其他具有误导性的内涵，“结果”一词更可取，应避免使用“产品”）。第三，我们应该将漂变和选择描述为过程而不是结果（与三个要点中的第一个相同）。如果我们做到这三点，那么漂变和选择在概念上是不同的，Beatty 提出的问题就会被解决；在这种观点下，才认识到漂变和选择可能产生相同的结果，这有助于解释生物学家关于漂变和选择相对重要性的辩论为何持续而不使其显得微不足道（有关 Beatty 论点的更多讨论，请参见 Millstein 2002）。

那么这些漂变过程是什么？它们是 Gulick、Hagedoorns、Wright 和 Fisher（后来还有将在下文进一步讨论的 Kimura）试图表征的相同的物理无差别抽样过程：配子在合子形成中的抽样、父母的抽样、新种群的建立以及种群的分裂。（请注意，这并不是一个详尽的清单）。结果也是漂变的创始人们提到的那些：基因频率在一代到下一代之间的波动、种群中变体的丧失以及种群中类型的固定。（同样，这也不是一个详尽的清单）。每一个这些结果都受种群大小的影响，因为任何无差别抽样过程都会受到影响；经历漂变的较小种群往往会经历更大的基因频率波动，种群中变体的更快丧失以及种群中类型的更快固定。因此，Beatty/Hodge/Millstein 对漂变的解释——漂变的因果过程解释，是一个根植于该术语的历史发展和生物实践的解释，哲学家的角色是澄清和阐述。Christopher Stephens（2004）、Robert Northcott（2010）和 Chris Haufe（2013）似乎也支持漂变作为抽样过程的基本观点，尽管在所有细节上并不完全支持漂变的因果过程解释。

### 2.2 对漂变基于抽样的解释的反应和种类

然而，遗传漂变的因果过程解释并未没有受到挑战。Robert Brandon（2005）认为，“它与生物学家区分漂变和选择的方式并不吻合”（2005: 156），选择和漂变是相同的过程（即抽样），而绝大多数生物学案例并非无差别抽样案例。他认为，“漂变是由于抽样误差导致的繁殖水平偏离预期水平的任何偏差”，而“选择是由于（并符合）繁殖成功的预期差异而导致的差异繁殖”（2005: 168–9）。这些定义包括过程和结果。Millstein（2005）对这些挑战做出回应，并捍卫她的观点。对于本文的目的，值得注意的是，正如 Millstein（2005）所承认的，Brandon 在描述上是正确的，许多生物学家在他们对漂变的定义中同时包含了过程和结果（请参见 Millstein，Skipper 和 Dietrich（2009）的例子）。事实上，当代生物学家提出的漂变定义的多样性——一些是过程导向的，一些是结果导向的，一些既有，一些在同一作品中交替——引发了对哲学分析的需求，即使最终结果是接受多元主义。遗传漂变的因果过程解释是基于以下理由提出的规范性主张：1）增加清晰度，2）能够在概念上区分生物学上非常不同的现象，例如在波动环境中的选择与由于无差别抽样导致基因频率波动，这两者具有相同的结果，同时 3）保持对生物实践和（部分）生物用法的基础。

Jessica Pfeifer（2005）介入了 Millstein 和 Brandon 之间的分歧，认为认为自然选择中概率的来源至少部分是由于抽象或忽略环境中某些特征而产生的，如果采纳这种观点，将选择和漂变视为因果上不同并不是概念上混淆的。在 Pfeifer 的观点中，漂变是由被忽略因素的分布引起的，而对于所讨论的特征的选择是由那些未被忽略的特征引起的。

Peter Gildenhuys（2009）认为，“漂变”一词用于指代对具有三个特征的人口的因果影响：它们是非交互作用的、非普遍的和无差别的（NINPICs）。因此，他支持漂变作为无差别抽样；他对该观点所做的其他修改似乎源于认为因果过程解释排除了漂变和选择的共同发生，并认为该观点需要解释位置（例如，生物体处于错误的时间和地点）作为一个无关紧要的因果因素。无论如何，他承认他的观点和因果过程解释在实��中可能就构成漂变的事物类型达成一致。Larry Shapiro 和 Elliott Sober（2007）也支持选择和漂变是不同的过程的观点，但至少 Sober 在最近与 Hayley Clatterbuck 和 Richard Lewontin 合著的一篇论文中已经放弃了这一观点（Clatterbuck，Sober 和 Lewontin 2013）。与 Gildenhuys 一样，他们似乎暗示如果选择和漂变是不同的过程，它们就不能共同发生，并且他们似乎认为引入有限人口规模仅仅就是引入了漂变。

然而，需要明确的是，即使在同一人口中，也可能存在无差别抽样过程和有差别抽样过程，甚至是针对相同特征。例如，在对 900 多个人口的研究中，生物学家 Maxime Lamotte 承认，伪装使得适当颜色的 Cepaea nemoralis 陆地蜗牛在各自的环境中具有选择优势，同时他也指出新人口的建立“因为第一批殖民者的组成存在机会性变化而具有相当重要性”（Lamotte 1959: 80）；他所指的变化是指蜗牛殖民者的颜色变化（Millstein 2009）。此外，由于因果过程解释要求变异是可以遗传的，生物体的非遗传位置对于决定漂变与选择是无关紧要的；例如，新人口的创始者可能都来自原始人口的地理边缘，但他们仍然可以是整体的无差别样本。最后，至少在历史上（如上文所讨论的），小人口规模一直与漂变相关联，但它从未是要代表的主要现象。因此，漂变的变异抽样解释应该根据这些考虑进行评估。

### 2.3 数学方法对漂变的探讨

沃尔什（Walsh）、卢恩斯（Lewens）和阿里厄（Ariew）（2002 年）提供了一个很好的入口，以理解对漂变的数学方法。他们首先承认了漂变这个术语的历史用途，确定了四种：1）“Sewall Wright Effect”、2）“Hagedoorn Effect”、3）“Indiscriminate Sampling”和 4）“The Finiteness of Natural Populations”（其中一些特征描述并不完全准确；例如，在第一个中，他们将 Sewall Wright 的平衡转变模型与漂变本身混为一谈）。他们认为这些现象“不一致”，尽管他们承认，援引 Beatty（1984）的观点，前三者可以用抽样来理解。但是，他们声称，第四种形式不行。他们如下描述第四种现象：

> 哈代-温伯格定律表明，在无限大的（二倍体生物）种群中，当基因适应度没有变化时，基因频率不会发生变化。但自然种群的规模是有限的；通常它们很小。在有限种群中，总会有一定的机会使性状频率与预期值发生偏离。（沃尔什、卢恩斯和阿里厄，2002 年：456）

关于将漂变理解为哈代-温伯格定律与有限种群的观点，沃尔什、卢恩斯和阿里厄认为“没有更大的种群被实际抽样”（2002 年：459）。相反：

> …在这些情况下，发生的是种群适应度的分布提供了关于种群将如何变化的预测。漂变表现为与种群适应度预测结果的差异。大数定律告诉我们，与这些预测相差较大的可能性与种群规模的倒数成正比。种群规模较小会增加错误的机会。(Walsh, Lewens, and Ariew 2002: 459)

瓦尔什、卢恩斯和阿里厄随后指出，这是他们概述的四种漂变类型共同的特征；因此，在他们看来，漂变是指一系列出生、存活、死亡和繁殖与适应度差异预测结果不同。请注意，在前一节介绍的术语中，这是漂变的纯粹以结果为导向的定义。无论可能产生结果的过程类型如何（如果有的话），都不影响定义。马森（2010）对漂变进行了类似的描述：“偏离预期值是种群遗传学家所称的‘漂变’”（Matthen 2010: 3）。

然而，请注意瓦尔什、卢恩斯和阿里厄确定的第四种漂变“现象”实际上并不是现象。相反，它指的是种群遗传学中的哈代-温伯格模型以及基于该模型的预测。根据该模型，理想无限种群不会偏离适应度预期（如果我们对无限发生的事情做出一些哲学假设；索伯（1984）对这些假设提出了质疑），但在有限种群中可能会出现这种偏差。但这是一种纯数学方法。纯数学方法并不探讨模型应该模拟的现象以及为什么有限种群具有重要性。也没有解释为什么哈代-温伯格模型假设有限种群规模应该被视为漂变；也许这是因为哲学传统上将其称为漂变（例如，索伯 1984 的某些部分读起来是这样的），或者这是因为漂变与小种群规模之间长期存在的关联。相比之下，在漂变的因果过程解释中，只要存在不加区分的抽样，即使在无限种群中也会发生漂变；漂变样的结果（偏离适应度预期）并非必需。

米尔斯坦、斯基普和迪特里希（2009）挑战了仅关注结果的漂变定义以及其基础的纯数学方法。因此，过程导向和结果导向漂变方法之间似乎存在一些元分歧；我们对漂变的定义应该看向生物学的历史，还是应该看向数学？我们应该从生物学家试图理解的现象（他们为之开发模型的现象）中获取对漂变的理解，还是仅仅从模型中获取？如果仅从模型中获取，我们是否无意中依赖于漂变的测量或操作化，而不是漂变本身（Plutynski 2007）？对这些问题的不同回答似乎是漂变不同定义的核心。

如果不纯粹以数学方式解释模型，而是考虑 Hardy-Weinberg 定律在有限种群中试图模拟的现象，那么实际上正在对更大的种群进行抽样。该方程模拟了一代到下一代的变化；原始一代是被抽样的种群，下一代是“样本”。该样本可能代表或不代表原始种群，例如，原始一代的杂合子 Aa 可能会或可能不会产生比例为 25% AA，50% Aa 和 25% aa 的后代。

以数学为导向的仅结果定义漂变通常与所谓的“统计主义”进化理论方法相关联，但由于它只是漂变的定义，而不是形而上学命题，因此不必如此。例如，非统计主义者可以一贯认为自然选择是因果的（因此，进化不会纯粹是统计的，如在统计主义解释中），但只有在实际结果偏离适应性期望时漂变才会发生。事实上，Frédéric Bouchard 和 Alexander Rosenberg（2004）似乎持有这样的观点。漂变问题与统计主义争论的交集将在下文进一步讨论。

### 2.4 其他漂变解释

其他漂变解释并不容易分类。例如，Timothy Shanahan（1992）认为，在概念上，随机漂变和自然选择是一个连续体的两端。然而，为了得出这个结论，Shanahan 必须拒绝遗传性作为自然选择的必要条件。正如进化生物学家 John Endler 所主张的那样，这导致将自然选择贬低为“不同表型之间存在差异”的说法（Endler 1986: 13）。

Grant Ramsey (2013) develops a concept he calls “driftability”, which locates drift in individual organisms rather than in a population. Ramsey points out that the possible lives that an organism can lead is a large and heterogeneous set; thus, the actual life that any particular organism leads will probably not be a representative sample (which he seems to equate to an average) of the set. Differences within the set of will lead to different evolutionary outcomes; this intra-organismic heterogeneity within the set of possible lives of an organism is driftability.

Peter Godfrey-Smith (2009) characterizes drift as changes where two parameters, the smoothness of fitness landscapes and dependence of reproductive character on fitness differences, are low. (However, when he needs to explicate why drift has special importance in small populations and why it can be mathematically described in particular ways, he appeals to indiscriminate sampling. Perhaps, then, indiscriminate sampling is at the core of Godfrey-Smith’s view of drift).

Again, these accounts, which seem to deviate significantly from biological usage and practice, raise meta-philosophical issues about how we ought to go about characterizing a scientific concept like “drift”. How far can the definition of a term deviate from scientific usage and practice and still be considered to be a definition of the same thing?

One could also be a pluralist about drift, arguing that there is reason to accept more than one definition of drift, although it is unclear if anyone has actually endorsed this position. Marshall Abrams seems to come the closest, stating:

> 如果随机漂变是什么，它不是一件事...这个术语适用于许多对种群或生物体的影响，据说是由“偶然性”引起的，以及被认为有助于产生这种影响的因素。(2007: 673)

## 3. 遗传漂变与统计主义-因果主义辩论的交汇

最近关于随机漂变的辩论经常与关于进化生物学纯粹统计（非因果）性质的辩论纠缠在一起，但这些问题是可以分开的。有关随机漂变的问题并不涉及统计主义问题（正如本文所寻求的），而有关统计主义的问题并不涉及随机漂变（例如，大部分文献集中在自然选择而不是随机漂变上）。统计主义主张，一般可以追溯到 Walsh、Lewens 和 Ariew (2002) 以及 Matthen 和 Ariew (2002) 的一对论文，基本上认为进化是一种群体水平现象，尽管在个体生物体层面存在原因（出生、死亡等），但在群体层面没有原因，只有个体事件的统计总结。请注意，人们普遍承认进化理论中的模型是统计模型，因此统计主义主张的独特之处在于进化生物学是纯粹统计的。至少有三种替代方案可以挑战统计主义主张；一种挑战进化生物学是群体水平现象的主张，认为它是由个体生物体层面的原因构成的（例如，Bouchard 和 Rosenberg 2004），第二种捍卫了存在群体层面原因的观点（例如，Millstein 2006；Shapiro 和 Sober 2007），而第三种主张在两个层面都有原因（Pence 2017）。

如上所述（请参见第 2.3 节），统计主义者经常采用仅结果定义漂变，但不是唯一的；它也可以被认同为因果主义者，例如，认为自然选择是一种因果过程，但漂变只是从选择性期望中偏离。也许令人惊讶的是，有人可能支持漂变的因果过程账户的一个版本，但仍然接受基本的统计主义前提 - 如果有人认为漂变应该以无差别抽样的方式理解，并且认为无差别抽样应该以个体生物体层面的原因理解，那么漂变带来的进化变化只是个体层面原因的统计总结。简而言之，从一个人对漂变的定义推断出他在统计主义辩论中的立场是错误的，尽管这种滑动很常见，问题实际上经常纠缠在一起。

那么，随机漂变所纠缠的统计学问题是什么呢？ Walsh、Lewens 和 Ariew（2002）以及 Matthen 和 Ariew（2002）提出的关注点源自 Sober（1984）在他的经典著作《选择的本质》中所提出的主张。Sober 将进化理论描述为一种力量理论，其零力状态由人口遗传学的 Hardy-Weinberg 方程描述（有关该方程的解释，请参阅人口遗传学条目）；在这种状态下，没有选择、没有突变、没有迁移、没有减数分裂驱动、随机交配和无限人口规模。因此，Hardy-Weinberg 方程是一个理想化模型，在现实世界中永远无法实现。很难看出漂变如何融入方程中，这无疑是导致如何定义漂变的混淆的根源。在他的 1984 年著作中，Sober 将漂变描述为随机抽样（这个过程发生在配子形成和新种群建立时，Sober 解释说）和抽样误差（即，与适应度期望值的偏差）两种方式。从过程的角度来看，至少某些类型的抽样可以被理解为门德尔过程的一部分。门德尔过程包括“有机体产生配子，配子产生有机体的过程”（Sober 1984: 35），Sober 说这不是一种力量，而是进化力量描述的背景。但 Sober 没有选择这条路。相反，Sober 将漂变与选择、突变和迁移进行对比；Sober 断言，所有这些都是力量，但漂变是一种不同类型的力量。它不是“确定性”的，也没有明确的方向（尽管它有一个由人口规模决定的大小）。也就是说，鉴于特征频率和适应度值，Sober 建议，选择可以预测下一代的特定结果和特定方向（在这个意义上是“确定性的”），而漂变可能导致人口中任何类型的增加（在这个意义上是无方向的）。此外，Sober 指出，你无法说漂变对变化的贡献相对于选择引入的变化有多少；这样做就像试图说，当抛掷一枚公平硬币十次并获得六个正面时，结果中有多少是由于硬币的公平性，有多少是由于抛掷了十次。因此，他得出结论称，“如果漂变是一种进化力量，那它是一种不同性质的力量”（1984: 117）；他称之为一种力量，主要是为了指示其因果作用。

关于漂变（以及选择和其他进化过程的形而上学主张——但我们这里只关心漂变）的这些主张为统计学家的挑战铺平了道路。Matthen 和 Ariew（2002）挑战了漂变是一种力量的主张。除了它没有可预��或恒定的方向（正如 Sober 乐意承认的那样），他们指出了两个类似种群受到相同选择压力的情况，一个中特征 T 变得固定，另一个中替代特征 T'变得固定。是什么解释了这两种情况的结果？Matthen 和 Ariew 断言，完全相同的事情，就像完全相同的硬币设置解释了两个系列十次抛硬币中的两个正面和四个正面。因此，他们似乎在暗示，没有额外的原因或力量，“漂变”。Walsh、Lewens 和 Ariew（2002）同样质疑 Sober 关于漂变是一种力量的主张；他们根据 Rosenberg（1994）的观点断言，“被标记为‘漂变’事件的事件，如雷击等，在本质上与选择事件没有什么不同”（Walsh、Lewens 和 Ariew 2002: 457）—因此，漂变不是一种不同类型的力量。此外，他们认为，漂变最好被统计地解释为统计误差（请参见第 2.3 节的论点），因此，它也不是一种力量。

明确指出，统计学家的主张中有一个历史组成部分；在他们看来，达尔文的进化理论是因果的，但随着人口遗传学的引入，进化变得纯粹是统计学的。（有时不清楚统计学家是在对模型/理论提出主张，还是在提出本体论主张，或者他们是否认为后者可以从前者中推断出来）。Hodge（2016；另见 Plutynski 等人 2016）通过辩称，事实上，尽管达尔文喜欢认为他的认识论和法则理想是从牛顿那里继承下来的，但他从未将自然选择理解为与引力或惯性一样的法则力量。Hodge 进一步论证，今天的生物学家将自然选择与人工选择以及漂变进行比较和对比，这直接源自达尔文将自然选择视为一种因果过程的观点。

许多其他哲学家试图挑战统计学家关于漂变不是一种力量的主张。例如，Stephens（2004）捍卫漂变既是一种力量又是一种原因的主张。他断言，如果我们正确理解漂变是一种不加区分抽样的过程（而不是统计学家所做的结果），我们就能看到它是一种力量，但在给定规模的人口中，它始终具有相同的力量，无论期望值有多大或多小的偏差（也许 Sober 在他 1984 年关于过程/结果问题的书中的无意模糊导致了混淆，因为统计学家是在回应 Sober）。他澄清说，“因为漂变是一种概率原因，同一因果力量可以有两种不同的结果”（Stephens 2004: 557；原文强调）。Stephens 进一步捍卫漂变可以被理解为一种力量或原因的主张，他反驳（与 Matthen 和 Ariew 相反）漂变确实有一个方向，即消除杂合子；它可以通过影响进化变化的概率“产生影响”（在小人口中更多，在大人口中更少）；我们可以明智地谈论漂变在一组人口或一个人口中的相对重要性，尽管不能在个体层面上（请参见 Walsh 2007 对 Stephens 2004、2010 的回应以及 Gildenhuys 2014 对他的回应）。

布兰登（2006）认为，“消除杂合性”并不足以表明漂变是有方向性的，因为（正如斯蒂芬斯可能会承认的那样），如果在一个位点上有两种等频率的等位基因，我们无法预测哪种基因会固定，只能确定其中一种会固定；布兰登将这种情况比作说“一个 20 牛顿的力作用在物体 A 上”，（2006：325），他似乎在暗示这不是一个有方向性的说法。此外，他认为，漂变并不是一个与选择分离的过程。因此，在布兰登看来，漂变不是一种力（但它是一种规律；关于这一点将在下文详述）。约书亚·菲勒（2009）通过捍卫对力的更详细解释来回应布兰登（部分借鉴了 Bigelow 等人的观点，1988 年）；根据这种详细解释，漂变的方向可以被看作比选择、突变和迁移更不具体，但它提供了一些方向性信息。因此，菲勒认为，漂变可以被看作比选择、突变和迁移更少“像力”，但它仍然是一种力。然而，查尔斯·彭斯（2017）担心菲勒对“力”的理解可能是临时的，因此他提出了漂变是一种力的另一种辩护。首先，彭斯认为，我们已经承认了具有随机指定方向的力，比如布朗运动，漂变是类似的。其次，我们可以构建一个进化思想实验，其中漂变不存在，从而表明漂变并非所有进化系统的构成要素；这旨在回应布兰登的观点，即漂变是不可分割的。然而，彭斯指出，整个辩论尚未解决的重要问题是：“‘力’的使用对我们来说到底意味着什么，以及何时使用力的隐喻进行解释是有用或明晰的”（彭斯 2017：1975）。

另一方面，肯尼斯·雷斯曼和帕特里克·福伯（2005）将漂变是否是一种力与漂变是否是一种原因分开，仅支持后者，而对前者不表态。在一篇相关论文中，他们依赖于伍德沃德（2003）关于因果关系的可操纵性解释以及多布任斯基和帕夫洛夫斯基 1957 年的漂变研究，以证明在重复群体中减少创始成员数量会导致这些重复群体之间进化结果的变异性增加。（福伯和雷斯曼 2007：617）

> 换句话说，他们认为研究的条件可以被视为满足可操纵性解释的条件，表明漂变应该被理解为（群体水平的）原因。夏皮罗和索伯（2007）表示，他们支持雷斯曼和福伯的论点以及将漂变视为一��过程的观点。然而，目前尚不清楚夏皮罗和索伯（或雷斯曼和福伯）是否真正支持将漂变视为一个过程的观点。也就是说，目前尚不清楚为什么作为一个因果因素的种群大小应该被视为一个过程。

In other words, they argue that the conditions of the study can be seen to satisfy the conditions of the manipulability account, showing that drift ought to be understood as a (population-level) cause. Shapiro and Sober (2007) state that they endorse Reisman and Forber’s arguments as well as the view of drift as a process. However, it’s unclear whether Shapiro and Sober (or Reisman and Forber) actually do endorse the view of drift as a process. That is, it’s unclear why population size as a causal factor should count as a process.

这是因为在 Dobzhansky 和 Pavlovsky（1957 年）的实验中，不清楚漂变是否实际上是被操纵的，或者只是人口规模—而人口规模似乎并不是一个过程。也许 Reisman 和 Forber 只是表明人口规模是进行漂变的人口进化变化的因果因素。他们似乎非常字面地接受了伍德沃德的说法，即他们似乎认为必须操纵的“变量”必须是数学模型中的一个变量；否则，至少原则上可以通过操纵人口而不仅仅是人口规模来操纵抽样过程；Clatterbuck（2015 年）的说法，在第 5 节中讨论了这一点。（人口规模是漂变数学模型中的一个变量，而抽样，如上所述，是隐含的）。人们也可以设想操纵环境，使抽样是有选择性的而不是无差别的，或者改变无差别抽样的性质。

Pierrick Bourrat（2018）对 Reisman 和 Forber 提出了另一种回应；他暗示 Reisman 和 Forber（2005）在支持漂变作为人口层次原因时，忽视了伍德沃德的不变性标准。Bourrat 在干预中表示，“衡量满足操纵条件的两个变量之间关系在各种其他变化在这种关系的背景下进行时保持稳定或不变的程度”（2018 年：162），并且再次援引伍德沃德，他断言更不变的因果关系提供更好的解释。但是，Bourrat 认为，以个体层次变量来解释的因果关系在干预下比以人口层次变量来解释的因果关系更不变，因此应该出于这个原因而被优先选择。换句话说，类似于上面简要提到的 Bouchard 和 Rosenberg（2004），Bourrat 捍卫了一个因果主义立场，但是在个体层次而不是在人口层次。然而，Bourrat 承认，当漂变和自然选择依赖于不确定事件时，以及对于一些频率依赖选择的情况，将漂变和自然选择视为人口层次原因是合理的。此外，Bourrat 没有讨论 Clatterbuck（2015）对漂变相关操纵的替代理解，这种理解可能更为优越；如果他这样做了，他关于个体层次因果解释在漂变方面优越性的主张是否成立就不清楚了。尽管如此，这些是因果主义阵营内部的分歧。

对于统计学家关于漂变作为原因的主张的其他挑战既不支持漂变作为一种力量，也不支持漂变作为一个独特的过程。例如，Brandon 和 Ramsey（2007）认为漂变和选择是同一过程的“共同可能”结果。但是因为存在一个因果过程—尽管只有一个而不是两个—统计学家的主张并没有得到支持。Abrams（2007）同样似乎不愿意在强实在主义意义上采纳关于漂变的“力量”说法。他认为“选择和漂变都是关于种群中基因型或表型未来频率的概率分布的方面”（2007 年：667）。然而，选择和漂变可以区分开来：

> 选择是由适应度差异控制的分布的一个方面，而漂变是由人口规模控制的这种分布的一个方面（除了人口规模对适应度的影响之外）。 （2007 年：667）

这使得人们觉得 Abrams 正在采纳类似于 Reisman 和 Forber 的漂变观点，侧重于种群规模，确实 Abrams 确实详细阐述了种群规模的因果作用，但（如上所述）他对漂变的看法更准确地是多元主义的。

更一般地，Pence（2017）提出了一种分类不同因果主义方法的方式（尽管并非所有这些方法都明确涉及漂变）：

> 至少，我们需要区分（1）这里讨论的力量解释；（2）因果过程方法（最著名的是 Millstein 2002, 2006, 2013）；（3）因果机制方法，Barros（2008）首次为自然选择使用，借鉴了 Machamer 等人的工作（2000）；（4）操纵主义方法，由 Reisman 和 Forber（2005）、Forber 和 Reisman（2007）以及 Shapiro 和 Sober（2007）讨论，借鉴了 Woodward 和 Hitchcock 的工作（2003）；以及（5）反事实方法，Glennan（2009）和 Huneman（2012）为自然选择使用，利用了反事实因果依赖或“相关性”的概念。（Pence 2017：1983）

## 4. 检测遗传漂变的实证研究

在 20 世纪和 21 世纪，生物学家们一直在努力从经验上检测遗传漂变。特别是，他们在区分漂变案例和选择案例方面遇到了挑战。漂变的因果过程解释尤其有助于解释为什么会出现这种情况，下文将讨论这一点。漂变和选择可能是不同类型的因果过程（分别是无差别和有差别的抽样），但它们可以产生类似的结果。因此，生物学家们一直在努力确定漂变和选择的独特结果，只能发现在生物学家修改或添加有关相关过程的假设后，再次出现了不确定性（有关这一点的明确描述，请参见 Dietrich 和 Skipper 2007）。相关地，生物学家们也就漂变和选择的相对普遍性存在分歧（Beatty 1995, 1997）；正如前面提到的，这些分歧几乎从一开始就存在，费希尔对哈格多恩的回应。

### 4.1 经典研究

关于漂变和选择普遍性的分歧几乎是在赖特和费希尔将漂变纳入他们的进化模型之后立即开始的（有关他们分歧的详细讨论，请参见 Provine 1986，本讨论在很大程度上受其启发）。赖特（1931a, 1932），借鉴他在动物育种方面的经验，发展了转变平衡理论（SBT），该理论包括三个阶段；这些阶段被理解为关于实际条件的经验性主张（Provine 1986）或者是关于进化的理想条件的描述（Skipper 2002）。Skipper 清晰地描述了 SBT，正如赖特最终会制定的那样（有关早期制定的讨论，请参见 Hodge 2011）：

> 在第一阶段，随机的遗传漂变导致基因频率发生变化，并将全球种群中的半隔离亚种群拉入适应性谷底，因为基因频率的随机波动几乎总是不适应的。在第二阶段，大规模选择将在亚种群内起作用，并增加它们的适应性，将它们从适应性谷底拖向适应性峰顶。在第三阶段，赖特称之为亚种群间选择的选择，由差异扩散（从适应性更高的亚种群向适应性较低的亚种群的生物迁移）驱动，然后使全球种群达到其最佳峰值。（Skipper 2002: 345）

根据赖特的观点，遗传漂变在进化过程中起着至关重要的作用。相比之下，费雪认为在大群体上的大规模选择是进化的主导和最有效的方式，在大群体规模下，漂变几乎没有什么作用。（关于漂变在进化中相对作用的分歧是赖特和费雪分歧的几个方面之一；例如，正如从上文清楚可见的那样，他们还在种群结构和有效种群规模上存在分歧。请参阅 Skipper 2002、2009 和 Plutynski 2005，分析继续讨论赖特-费雪辩论的当代生物学家。）

另一个相关问题涉及被认为受到随机漂变影响的特征的性质。特别是赖特早期的著作强调了正在经历漂变并由漂变产生的特征的非适应性特征（正如 Skipper 对赖特的 SBT 的表述中所见）。但是这里会出现一些潜在的混淆（Provine 1986；Millstein 2009）：首先，“非适应性”并不一定意味着“不适应”；它也可以意味着“中性”。其次，“非适应性”可以指的是生物体或物种之间缺乏适应性差异，也可以指的是对环境缺乏适应性（但作者并不总是清楚意图是哪种）。因此，一个人对漂变普遍性的看法，历史上往往与一个人对种群中适应性特征（无论是哪种意义上的）普遍性的信念联系在一起。严格来说，非适应性特征和漂变之间并没有必然联系；在适应其环境并在适应性上存在差异的生物体上进行不加选择的抽样，这种不加选择的结果可能会使种群朝着适应性方向或非适应性方向发展。因此，选择和漂变之间的正确对比并不是“适应性”和“非适应性”，而是“适应性”和“可能非适应性”（但也可能是“可能适应性”）。

这些理论考虑很快就被对漂变的现场考察所跟随（也有实验室研究，但这些研究较少引起争议）。两组自然种群研究尤为显著。一组是本文介绍中提到的多态性陆地蜗牛 Cepaea nemoralis 的研究；这些研究以及关于漂变普遍性的争论始于上世纪 30 年代，并在上世纪 50 年代和 60 年代的“大蜗牛争论”中变得非常激烈（Millstein 2008、2009 提供了更广泛的讨论，以下内容摘自此处；“大蜗牛争论”这个称号归功于 Provine 1986）。早期研究者，最著名的是阿瑟·J·凯恩和菲利普·M·谢泼德（1950 年，1954 年），试图证明蜗牛的颜色和斑纹��态以及它们所生活的种群大小的适应性。但这些是很难确定的；适应性主要是间接研究的，通过寻找变种和它们背景之间的相关性（假设伪装和被捕食者选择），种群大小变化很大。而且找到的任何相关性都是统计学上的，有很多“噪音”。这为漂变留下了空间；马克西姆·拉莫特（1959）认为通过整体检查种群，人们发现小种群之间的变异比大种群之间的变异更大。这是漂变的一个独特特征，但这样的结果很难找到，并需要一组非常特殊的情况才能获得（大量种群的数量不同的种群易于计数）。然而，拉莫特的研究并不是唯一一个利用这种独特漂变结果的经典进化研究；卡瓦利-斯福尔扎对人类血型的研究也是如此（Richardson 2006）。值得注意的是，这不是漂变作为选择的替代（凯恩和谢泼德曾暗示选择排除了漂变的很大作用），而是一个关于漂变在选择之外扮演重要角色的论点。

另一组重要的研究是关于多态性绯红虎蛾 Panaxia dominula 的研究（详见 Provine 1986 进行了深入讨论，以下内容受其启发）。费雪和福特故意选择了绯红虎蛾，因为其种群规模较小，他们认为如果能证明选择对漂变的压制在最坏情况下成立，他们就能对赖特提出的一种非适应性进化形式提出决定性的反驳。但费雪和福特（1947 年）并没有像凯恩和谢泼德那样试图证明选择的情况，而是试图通过论证基因频率在代际间的波动太大，无法用漂变来解释，并且波动的大小在小种群和大种群之间没有差异，这与漂变的情况不符。因此，他们得出结论，这些种群正在经历选择。赖特（1948 年）对这一结论的逻辑进行了挑战（证明漂变不存在并不能证明选择存在），同时也对他们对他观点的表述提出了质疑，但更重要的是，他指出费雪和福特没有提供在基因频率波动显著的那些年份的种群规模数据，因此，事实上，这些种群在那些年份可能经历了收缩，这种情况下漂变就能产生观察到的波动。他还指出，选择或迁移的波动（他非常含糊地暗示这可能是漂变扩展理解的一部分）也可能产生相同的结果。

简而言之，P. dominula 研究打开了一个略有不同但相关的关于漂变的独特结果的提议，即随着时间的波动而不是像 C. nemoralis 那样在某一时刻的变异，两种情况都是将小种群与大种群进行比较（以及考虑种群产生大波动的能力），但是对于 P. dominula，由于缺乏有关种群大小这一关键变量的数据，得出明确结论变得困难。还要认识到，波动选择可以产生与漂变相同的结果，即基因频率在世代间的波动，这使得解决实证案例变得困难。最后，请注意，生物学家继续研究 C. nemoralis 和 P. dominula，结果发现进一步复杂化了实证分析的其他过程（Millstein 2008; Skipper 2009）。

### 4.2 漂变和分子进化研究

正如 Dietrich（1994）所记录的，分子进化的早期工作几乎完全集中在选择上，这一情况随着中性分子进化理论的出现以及 Motoo Kimura、Jack King 和 Thomas Jukes 的工作而发生了变化。Dietrich 写道：

> 其挑战的基础是 Kimura 的提议，即在分子水平上检测到的大多数变化并不受自然选择的影响；它们是中性的，其变化机制是随机的遗传漂变。（1994: 22）

要清楚的是，然而，选择和漂变在中性理论中发挥着至关重要的作用；在木村的观点中，选择将迅速消除大量有害突变体，并固定少量有利突变体，将其余的突变等位基因视为中性，然后它们经历漂变过程（Dietrich 2006）。漂变最终会导致中性（和几乎中性）突变体要么固定要么丢失（尽管在此期间它们可能是多态的），因此观察到的分子差异将是

> 突变的随机过程的结果，木村认为这主要是由 DNA 复制错误、定向选择过程以及由配子抽样产生的随机漂变过程产生的（Dietrich 2006: 670）

关于中性理论的许多辩论将这种方法（“中性主义者”方法）与更多选择性（有时是“泛选择性”）的方法进行对比，导致许多人提到“中性主义者-选择主义者争议”。

中性理论的拥护者最初将其提出为一个不切实际的简单模型，只是随后有关中性等位基因普遍性的数据使他们相信其现实性。这导致对中性理论进行更明确的测试和对分子钟的辩论（Dietrich 2006）。为了专注于这些中的第一个，Dietrich（2006）建议，尽管中性理论承诺产生许多数量化可测试的预测—并且确实做到了—测试它实际上被证明是困难的。这是因为很难确定仅属于漂变的独特结果吗？也许是这样。例如，中性理论预测了一定程度的杂合度，但当 Francisco Ayala 和同事在对果蝇的自然种群进行研究时未观察到预测的结果时，Jack King 回应说，模型所做的许多假设可能是差异的来源。换句话说，正如在科学哲学中广泛讨论的那样，两个理论之间没有“关键实验”，因为理论总是与其假设一起测试，其中任何一个都可以被放弃而不是拒绝理论。对所谓“分子钟”的争论也可以从寻找漂变的独特结果的角度来理解。起初，人们认为只有漂变才能解释表观恒定的进化速率—只有漂变才会产生这样的结果—然而这一次是选择主义者修改了他们的假设，使得他们的模型也会预测分子钟的结果（Dietrich 和 Skipper 2007）。

随后，大田智子开始主张对弱选择突变体发挥更重要的作用（Ohta 1973）。基本上，大田对“几乎中性”的定义包括比木村的“几乎中性”突变体更不中性的突变体，以及更多数量的这些突变体（Dietrich 和 Millstein 2008）。后来的改进包括略微有害和略微有利的突变体。这改变了人们预期的作用过程。在（严格的）中性理论中，只有漂变会作用于中性突变体。而在几乎中性理论中，几乎中性突变（无论是有利还是有害的）会受到非常弱的选择（区分抽样）和以无差别配子抽样形式的漂变的影响（Dietrich 和 Millstein 2008）。由于选择很弱，它会被漂变的影响所淹没，但两个过程仍然会发生。大田认为，几乎中性理论可以更好地解释阿亚拉及其同事发现的结果（具有大量相对罕见的等位基因），并且也可以更好地解释分子钟的一些特征（Dietrich 和 Millstein 2008）。然而，发现几乎中性理论的独特结果要困难得多，比中性理论更难以测试，并且与中性理论相比，作为零假设更不实用，即使它可能更好地解释可用数据。

### 4.3 关于漂变的最新实证问题

Hayley Clatterbuck，Elliott Sober 和 Richard Lewontin（2013）认为，谈论漂变“主导”选择或比选择“更强大”是没有意义的。（在许多这样的说法中，这将挑战 Dietrich 和 Millstein（2008）在前一节中讨论的最佳理解几乎中性理论的方式，即弱选择被漂变主导）。Clatterbuck，Sober 和 Lewontin 认为选择和漂变是一种或多种群体水平的过程（他们不确定是否是一个过程还是两个过程，但显然是“因果主义者”而不是“统计主义者”），但他们对生物学家理解有效种群大小乘以选择系数的值 Ns 的方式提出了担忧。在如何解释这个值的初期争议之后，大多数生物学家最终认为

> 当 Ns 远大于某个特定数字时，选择“主导”漂变，当 Ns 远小于该数字时，漂变“主导”选择。

提出的数字包括 1/4、1/2 和 1；在这些值之间，人们认为两种原因更或者更少相等（Clatterbuck、Sober 和 Lewontin 2013 年）。Clatterbuck、Sober 和 Lewontin 指出，在标准图中，N 和 s 的值并不预测一个基因频率结果；相反，它们预测可能基因频率结果的概率分布。但是，他们认为，您可以通过改变 N 或改变 s 来改变这个分布，值“选择得使第一个变化产生更大的差异，或更小，或相同，随您喜欢”；因此，“专注于使漂变占上风的比较，或者对选择做同样的事情是任意的”（Clatterbuck、Sober 和 Lewontin 2013 年：538）。在这里，建议似乎是 N 代表漂变原因，s 代表选择原因—尽管不清楚为什么漂变作为原因应该等同于人口大小作为原因—并得出结论认为这些原因是不可分割的。Clatterbuck、Sober 和 Lewontin 表示，说它们是可分割的，就像问十次抛硬币得到四个正面的结果是由硬币的公平性还是抛掷次数决定一样。他们还暗示，即使在一个无限大的人口中，也可能偏离选择的期望（再次使得难以分离原因）。最后，他们认为，说在相同的设置下产生不同结果，有些情况下选择占上风（当受青睐的等位基因频率增加时），而在其他情况下漂变占上风（当受青睐的等位基因频率降低时）是没有意义的。

然而，Robert Brandon 和 Lenore Fleming（2014 年）指出，Clatterbuck、Sober 和 Lewontin 对一个看似经验性问题的分析并非基于经验发现，而是基于概念分析，并且作为概念分析，它并不完全一致；也就是说，他们并不一贯地将漂变视为一个因果过程，有时将其视为一个结果（如前一段描述的最后一点）。Brandon 和 Fleming 引用了几项最近的经验研究，生物学家试图提供证据表明漂变主导选择，而不依赖简单的 Ns 来得出结论，并指出还有其他测试漂变和选择相对强度的方法，如麦克唐纳-克莱特曼（MK）检验。在 Brandon 和 Fleming 看来，“漂变不是一个过程。然而，它是一个过程的可预测结果，即概率抽样”（2014 年：581）。然而，他们的观点在漂变结果方面（哪个结果？）如何“淹没”或“取代”选择结果（可能是由于结果是某种进一步的，尚未确定的结果的原因）还有些不清楚。对这一点的进一步阐述将会很有用。

��有人提出，尤其是 John Gillespie（2000a、b、2001），许多所谓的遗传漂变实际上是由“遗传草稿”引起的。遗传草稿是一个连锁选择过程（一种搭便车过程），在这个过程中，两个中性等位基因（在一个双位点模型中）哪一个恰好与经历有利突变的位点相连是一个偶然事件，这些突变的时机，随后紧随其后的选择性“横扫”到固定，是随机的。正如 Skipper（2006 年）所讨论的，遗传草稿的一个有趣特性是它可以产生与小人口中遗传漂变产生的类似结果，即遗传变异的减少（因此有相似的名称）。Gillespie 认为，草稿对人口规模的敏感性比漂变小，这导致他声称草稿是比漂变更重要的进化原因（Skipper 2006）。因此，草稿引入了另一个相对重要性的辩论（Beatty 1995、1997），以补充本文讨论的其他辩论：漂变 vs. 选择、Wright 的 SBT vs. Fisher 的大规模选择、中性论者 vs. 几乎中性论者 vs. 选择论者的分子进化。然而，值得注意的是，虽然草稿可以产生漂变可以产生的结果之一（杂合度的减少），但它不会导致基因频率在一代到下一代之间波动。因此，并非所有漂变结果都可以用草稿来解释。

William Provine（2014 年）进一步减少了漂变在演化中的作用，称随机遗传漂变为一个“谬论”，并认为在自然界中根本不存在这种现象。Provine 指出，对于 Fisher 和 Wright（甚至 Kimura），漂变与近亲繁殖紧密相连，以至于有时一个被误认为是另一个，这似乎是合理的—或者至少两者之间的关系从未完全澄清（参见，例如，Wright 1931a）。Provine 将随机漂变定义为在染色体上的一个基因位点上“偶然灭绝的基因”。根据 Provine 的说法，

> 赖特认为，在门德尔主义中对配子的随机抽样在小种群中的每个位点[每个染色体上]产生了“随机遗传漂变”，并且近亲交配导致了小种群中猖獗的“随机遗传漂变”（Provine 2014: 54）。

在这里，Provine 将漂变视为一种结果，由于基因连锁似乎在物理上不太可能甚至不可能发生，根据他的观点，漂变并不存在。赖特确实断言

> [j]ust because the direction of drift is accidental, the result is a kaleidoscopic shifting of the average characters of the population through predominant types which practically are never repeated, (1931b: 207; see also Wright 1930: 354)

但这使得漂变听起来像是一种原因，而不是一种结果，并且并没有明确说明“转变”发生在每个染色体上的每个位点。但即使他这样做了，赖特肯定会对漂变的影响产生错误看法，而不会对现象本身产生错误看法；值得注意的是，Provine 并没有否认随机（即不加区分的）配子抽样的存在，尽管他对“基因库”这一术语的似乎具体化以及对染色体相关性的忽视提出了异议，这些观点是正确的。

## 5. 模型中的漂变，漂变作为一种规律

如上所述，漂变现象在人口遗传学的数学模型中得到了体现。在教科书中常见的漂变数学模型是 Wright-Fisher 模型，其核心是二项分布，哲学家们通常会引用这个模型。在 Wright-Fisher 模型中——一个理想化的模型，正如所有模型一样——假设人口中有 N 个二倍体成年个体，随机交配，有一个频率为 p0 的等位基因 A 和同一位点上的另一个等位基因。该模型进一步假设成年个体产生具有相同等位基因频率的无限数量的配子。从“配子池”中随机抽取 2N 个配子，组成下一代的 N 个二倍体个体。（有关 Wright-Fisher 模型历史发展的重要澄清，请参见 Ishida 和 Rosales 2020 年的研究）。

然而，正如 Millstein、Skipper 和 Dietrich（2009 年）指出的那样，Wright-Fisher 模型是相当理想化的，因为当然，

> 人口并不是通过召集当地的统计学家，请她随机（带替换地）挑选正好 2N 个配子，然后将它们投入下一代（Gillespie 2004: 49）。

—但是还有更现实的选择。例如，约翰·吉利斯皮的模型假设一个由 N 个成员组成的二倍体种群和一个双等位基因座，频率为 p 和 q=(1−p)；它还类似地假设随机交配。它与赖特-费舍尔模型的不同之处在于，2NpA 个配子中的每一个构成下一代，具有随机数量的后代配子。对后代数量的分布或总后代配子数量没有限制。因此，与赖特-费舍尔模型不同，吉利斯皮的模型不受二项抽样的限制，尽管抽样仍然被建模。米尔斯坦、斯基普和迪特里希认为，这种替代模型的哲学意义（包括莫兰模型、坎宁斯模型或共同祖先模型等其他模型）在于，我们需要谨慎地从任何一个特定的数学模型中得出关于漂变的结论，始终牢记吉尔（1988）指出模型是对物理系统特定方面的表征。

克拉特巴克（2015）同样提醒哲学界，仅关注赖特-费舍尔模型是一个错误，特别强调埃尔登-韦克利模型。她强调不同的漂变模型并非预测等价，因此，人们可以看到不同模型的不同假设所代表的因果网络细节会改变漂变的结果。这挑战了统计学家认为漂变纯粹是数学的假设。她认为，将我们对漂变的概念扩展到包括替代模型，揭示了干预漂变的新方法，加强了反对统计主义的因果论证。例如，通过干预人口，以增加个体拥有远远超过赖特-费舍尔模型允许的后代数量（相对于人口规模）的概率

> 我们将增加中性等位基因频率增加的概率（2015: 3501）。这比 Reisman 和 Forber 的操纵论论点（上文讨论过）更好，因为更清楚地操纵的是漂变（抽样过程），而不仅仅是人口规模。

we would increase the probability of a neutral allele increasing in frequency (2015: 3501). This is an improvement over Reisman and Forber’s manipulationist arguments (discussed above), since it is more clearly the drift (the sampling process) that is being manipulated rather than just population size.

但也许漂变不仅仅是一个模型（或一组模型）；也许它是进化生物学的一个科学定律。布兰登（2006）认为，这类似于惯性原理，即都旨在成为“零力”定律。根据漂变原理，

1. “一个处于平衡状态的种群会倾向于从该平衡状态漂变，除非受到进化力的影响”

 和

2. “一个由某种净进化力 F 引起的进化轨迹 t 的种群，即使没有其他进化力介入，也会倾向于偏离仅基于 F 预测的外推路径（无论是方向、幅度还是两者），除非 F 继续起作用”（布兰登 2006: 328）。

根据这种观点，漂变——因此变化——是进化系统的默认状态，挑战了 Sober 的观点（前文讨论过），即哈代-温伯格原理表征了进化生物学中的零力状态。在捍卫漂变原理时，Brandon 挑战那些认为生物学没有规律的人（例如 Beatty 1995；请参见引文），尽管 Brandon（1990）已经通过捍卫选择原理而这样做（另请参阅 McShea 和 Brandon 2010 的相关工作，其中漂变被描述为他们所称的“零力进化法则”，或 ZFEL 的特例）。

## 6. 结论

对随机遗传漂变的哲学讨论一直活跃且富有成果。但由于这些讨论仍然相对较新，还有许多问题有待探讨或充分探讨。尽管很多精力被转移到了统计主义的辩论上，但生物学家们正在进行许多关于漂变的辩论，哲学家们也可以有益地参与其中，无论是历史上的还是当代的。特别是关于本文最后两节（关于漂变的经验问题和漂变模型），我们可能只是开始触及表面。

## Bibliography

* Abrams, M., 2007, “How Do Natural Selection and Random Drift Interact?” *Philosophy of Science*, 74(5): 666–679.
* Beatty, John, 1984, “Chance and Natural Selection”, *Philosophy of Science*, 51(2): 183–211.
* –––, 1992, “Random Drift”, in *Keywords in Evolutionary Biology*, edited by Evelyn Fox Keller and Elisabeth A. Lloyd, Cambridge, MA: Harvard University Press, pp. 273–281.
* –––, 1995, “The Evolutionary Contingency Thesis”, in *Concepts, Theories, and Rationality in the Biological Sciences*, edited by G. Wolters and J.G. Lennox, Pittsburgh: University of Pittsburgh Press, pp. 45–81.
* –––, 1997, “Why Do Biologists Argue Like They Do?” *Philosophy of Science*, 64(4):S432–S443.
* Bigelow, John, Brian Ellis, and Robert Pargetter, 1988, “Forces”, *Philosophy of Science*, 55: 614–630.
* Bouchard, Frédéric, and Alex Rosenberg, 2004, “Fitness, Probability, and the Principles of Natural Selection”, *British Journal for the Philosophy of Science*, 55: 693–712.
* Bourrat, Pierrick, 2018, “Natural Selection and Drift as Individual-Level Causes of Evolution”, *Acta Biotheoretica,* 66:159–176.
* Brandon, Robert N., 1990, *Adaptation and Environment*, Princeton, NJ: Princeton University Press.
* –––, 2005, “The Difference between Selection and Drift: A Reply to Millstein”, *Biology & Philosophy*, 20(1): 153–170.
* –––, 2006, “The Principle of Drift: Biology’s First Law”, *The Journal of Philosophy*, 103(7): 319–335.
* Brandon, Robert N., and Lenore Fleming, 2014, “Drift Sometimes Dominates Selection, and Vice Versa: A Reply to Clatterbuck, Sober and Lewontin”, *Biology and Philosophy*, 29: 577–585.
* Brandon, Robert N., and Grant Ramsey, 2007, “What’s Wrong with the Emergentist Statistical Interpretation of Natural Selection and Random Drift?” in *The Cambridge Companion to the Philosophy of Biology*, edited by David L. Hull and Michael Ruse, Cambridge: Cambridge University Press, pp. 66–84.
* Cain, Arthur J. and John D. Currey, 1963, “Area Effects in *Cepaea*”, *Philosophical Transactions of the Royal Society of London B*, 246: 1–81.
* Cain, Arthur J. and Philip M. Sheppard, 1950, “Selection in the Polymorphic Land Snail *Cepaea Nemoralis*”, *Heredity*, 4(3): 275–294.
* –––, 1954, “Natural Selection in *Cepaea*”, *Genetics*, 39: 89–116.
* Cain, Joe and Michael Ruse (eds.), 2009, *Descended from Darwin: Insights into the History of Evolutionary Studies, 1900–1970*, Philadelphia: American Philosophical Society.
* Clatterbuck, Hayley, 2015, “Drift Beyond Wright–Fisher”, *Synthese*, 192(11): 3487–3507.
* Clatterbuck, Hayley, Elliot Sober, and Richard C. Lewontin, 2013, “Selection Never Dominates Drift (nor Vice Versa)”, *Biology and Philosophy*, 20(1): 153–170.
* Darwin, Charles, 1872, *The Origin of Species by Means of Natural Selection, or the Preservation of Favoured Races in the Struggle for Life*, Sixth ed. London: Murray.
* Dietrich, Michael R., 1994, “The Origins of the Neutral Theory of Molecular Evolution”, *Journal of the History of Biology*, 27(1): 21–59.
* –––, 2006, “Three Perspectives on Neutrality and Drift in Molecular Evolution”, *Philosophy of Science*, 73(5): 666–677.
* Dietrich, Michael R. and Roberta L. Millstein, 2008, “The Role of Causal Processes in the Neutral and Nearly Neutral Theories”, *Philosophy of Science*, 75(5): 548–559.
* Dietrich, Michael R. and Robert A. Skipper Jr., 2007, “Manipulating Underdetermination in Scientific Controversy: The Case of the Molecular Clock”, *Perspectives on Science*, 15: 295–326.
* Dobzhansky, Theodosius, 1937, *Genetics and the Origin of Species*, New York: Columbia University Press.
* Dobzhansky, Theodosius and Olga Pavlovsky, 1957, “An Experimental Study of Interaction between Genetic Drift and Natural Selection”, *Evolution*, 11: 311–319.
* Dubinin, N.P. and D.D. Romaschoff, 1932, “Die Genetische Struktur Der Art Und Ihre Evolution”, *Biologichesky Zhurnal*, 1: 52–95.
* Endler, John A., 1986, *Natural Selection in the Wild*, Princeton, NJ: Princeton University Press.
* Filler, Joshua, 2009, “Newtonian Forces and Evolutionary Biology: A Problem and Solution for Extending the Force Interpretation”, *Philosophy of Science*, 76: 774–783.
* Fisher, Ronald A., 1922a, “Darwinian Evolution of Mutations”, *Eugenics Review*, 14: 31–34.
* –––, 1922b, “On the Dominance Ratio”, *Proceedings of the Royal Society of Edinburgh*, 42: 321–341.
* Fisher, Ronald A. and E.B. Ford, 1947, “The Spread of a Gene in Natural Conditions in a Colony of the Moth *Panaxia Dominula* L”, *Heredity*, 1: 143–174.
* Forber, Patrick and Kenneth Reisman, 2007, “Can There Be Stochastic Evolutionary Causes?”, *Philosophy of Science*, 74(5): 616–627. doi:10.1086/525608
* Giere, Ronald N., 1988, *Explaining Science: A Cognitive Approach*, Chicago: University of Chicago Press.
* Gildenhuys, Peter, 2009, “An Explication of the Causal Dimension of Drift”, *British Journal for the Philosophy of Science*, 60(3): 521–555. doi:10.1093/bjps/axp019
* –––, 2014, “Arbitrariness and Causation in Classical Population Genetics”, *British Journal for the Philosophy of Science*, 65: 429–444. doi:10.1093/bjps/axs042
* Gillespie, John H., 2000a, “Genetic Drift in an Infinite Population. The Pseudohitchhiking Model”, *Genetics*, 155(2): 909–19.
* –––, 2000b, “The Neutral Theory in an Infinite Population”, *Gene*, 261(1): 11–18.
* –––, 2001, “Is the Population Size of a Species Relevant to Its Evolution?” *Evolution*, 55(11): 2161–2169.
* –––, 2004, *Population Genetics: A Concise Guide*, Second ed. Baltimore: Johns Hopkins University Press.
* Godfrey-Smith, Peter, 2009, *Darwinian Populations and Natural Selection*, Oxford: Oxford University Press.
* Gulick, John T, 1873, “On Diversity of Evolution under One Set of External Conditions”, *Journal of the Linnean Society of London*, 11: 496–505.
* Hagedoorn, A.L. and A.C. Hagedoorn, 1921, *On the Relative Value of the Processes Causing Evolution*, The Hague: Nijhoff.
* Haufe, Chris, 2013, “From Necessary Chances to Biological Laws”, *The British Journal for the Philosophy of Science*, 64(2): 279–295.
* Hodge, M.J.S., 1987, “Natural Selection as a Causal, Empirical, and Probabilistic Theory”, in *The Probabilistic Revolution, Volume II*, edited by Lorenz Krüger, Gerd Gigerenzer and Mary S. Morgan, Cambridge, MA: MIT Press, pp. 233–270.
* –––, 2011, “Darwinism after Mendelism: The Case of Sewall Wright’s Intellectual Synthesis in His Shifting Balance Theory of Evolution (1931)”, *Studies in the History and Philosophy of the Biological and Biomedical Sciences*, 42(1): 30–39.
* –––, 2016, “Chance and Chances in Darwin’s Early Theorizing and in Darwinian Theory Today”, in Ramsey and Pence 2016: 41–75.
* Ishida, Yoichi and Alirio Rosales, 2020, “The origins of the stochastic theory of population genetics: The Wright- Fisher model”, *Studies in History and Philosophy of Biological and Biomedical Sciences*, 79(101226): 1–8.
* Lamotte, Maxime, 1959, “Polymorphism of Natural Populations of *Cepaea Nemoralis*”, *Cold Spring Harbor Symposia on Quantitative Biology*, 24: 65–84.
* Matthen, Mohan, 2010, “What Is Drift? A Response to Millstein, Skipper, and Dietrich”, *Philosophy and Theory in Biology*, 2:e102.
* Matthen, Mohan and André Ariew, 2002, “Two Ways of Thinking About Fitness and Natural Selection”, *The Journal of Philosophy*, 99: 55–83.
* McShea, Daniel W. and Robert N. Brandon, 2010, *Biology’s First Law: The Tendency for Diversity and Complexity to Increase in Evolutionary Systems*, Chicago: University of Chicago Press.
* Mills, Susan K. and John Beatty, 1979, “The Propensity Interpretation of Fitness”, *Philosophy of Science*, 46(2): 263–286.
* Millstein, Roberta L., 2002, “Are Random Drift and Natural Selection Conceptually Distinct?” *Biology & Philosophy*, 17(1): 33–53.
* –––, 2005, “Selection Vs. Drift: A Response to Brandon’s Reply”, *Biology & Philosophy*, 20(1): 171–175.
* –––, 2006, “Natural Selection as a Population-Level Causal Process”, *British Journal for the Philosophy of Science*, 57(4): 627–653.
* –––, 2008, “Distinguishing Drift and Selection Empirically: ‘The Great Snail Debate’ of the 1950s”, *Journal of the History of Biology*, 41(2): 339–367.
* –––, 2009, “Concepts of Drift and Selection in ‘the Great Snail Debate’ of the 1950s and Early 1960s”, in Cain and Ruse 2009: 271–298.
* Millstein, Roberta L., Robert A. Skipper Jr., and Michael R. Dietrich, 2009, “(Mis)Interpreting Mathematical Models of Drift: Drift as a Physical Process”, *Philosophy and Theory in Biology*, 1: 1–13.
* Northcott, Robert, 2010, “Walsh on Causes and Evolution”, *Philosophy of Science*, 77(3): 457–467.
* Ohta, Tomoko, 1973, “Slightly Deleterious Mutant Substitutions in Evolution”, *Nature*, 246: 96–98.
* Pence, Charles H., 2017, “Is Genetic Drift a Force?” *Synthese*, 194: 1967–1988. doi:10.1007/s11229-016-1031-2
* Pfeifer, Jessica, 2005, “Why Selection and Drift Might Be Distinct”, *Philosophy of Science*, 72(5): 1135–1145.
* Plutynski, Anya, 2005, “Parsimony and the Fisher-Wright Debate”, *Biology & Philosophy*, 20(4): 697–713.
* –––, 2007, “Drift: A Historical and Conceptual Overview”, *Biological Theory*, 2(2): 156–167.
* Plutynski, Anya, Kenneth Blake Vernon, Lucas John Matthews, and Daniel Molter, 2016, “Chance in the Modern Synthesis”, in Ramsey and Pence 2016: 76–102.
* Provine, William B., 1986, *Sewall Wright and Evolutionary Biology*, Chicago: University of Chicago.
* –––, 2014, *The “Random Genetic Drift” Fallacy*, New York: CreateSpace Independent Publishing Platform.
* Ramsey, Grant, 2013, “Driftability”, *Synthese*, 190(17): 3909–3928.
* Ramsey, Grant and Charles H. Pence (eds.), 2016, *Chance in Evolution*, Chicago: University of Chicago Press.
* Reisman, Kenneth and Patrick Forber, 2005, “Manipulation and the Causes of Evolution”, *Philosophy of Science*, 72(5): 1113–1123. doi:10.1086/508120
* Richardson, Robert C., 2006, “Chance and the Patterns of Drift: A Natural Experiment”, *Philosophy of Science*, 73: 642–654.
* Rosenberg, Alexander, 1994, *Instrumental Biology or the Disunity of Science*, Chicago: University of Chicago Press.
* Scriven, Michael, 1959, “Explanation and Prediction in Evolutionary Theory”, *Science*, 130(3374): 477–482. doi:10.1126/science.130.3374.477
* Shanahan, Timothy, 1992, “Selection, Drift, and the Aims of Evolutionary Theory”, in *Trees of Life: Essays in Philosophy of Biology*, edited by Paul Griffiths, pp. 131–161. Dordrecht: Kluwer.
* Shapiro, Larry and Elliott Sober, 2007, “Epiphenomenalism—the Do’s and the Don’ts”, in *Studies in Causality: Historical and Contemporary*, edited by G. Wolters and Peter Machamer Pittsburgh, PA: University of Pittsburgh Press, pp. 235–264.
* Skipper Jr., Robert A., 2002, “The Persistence of the R.A. Fisher-Sewall Wright Controversy”, *Biology & Philosophy*, 17(3): 341–367.
* –––, 2006, “Stochastic Evolutionary Dynamics: Drift Versus Draft”, *Philosophy of Science*, 73(5): 655–665.
* –––, 2009, “Revisiting the Fisher-Wright Controversy”, in Cain and Ruse 2009: 299–322.
* Sober, Elliott, 1984, *The Nature of Selection*, Cambridge, MA: MIT Press.
* Stephens, Christopher, 2004, “Selection, Drift, and the ‘Forces’ of Evolution”, *Philosophy of Science*, 71(4): 550–570.
* –––, 2010, “Forces and Causes in Evolutionary Theory”, *Philosophy of Science*, 77(5): 716–727.
* Walsh, Denis M., 2007, “The Pomp of Superfluous Causes: The Interpretation of Evolutionary Theory”, *Philosophy of Science*, 74: 281–303.
* Walsh, Denis M., Tim Lewens, and André Ariew, 2002, “The Trials of Life: Natural Selection and Random Drift”, *Philosophy of Science*, 69(3): 452–473. doi:10.1086/342454
* Woodward, James, 2003, *Making Things Happen: A Theory of Causal Explanation*, Oxford: Oxford University Press.
* Wright, Sewall, 1929, “The Evolution of Dominance”, *American Naturalist*, 63(689): 556–561.
* –––, 1930, “*The Genetical Theory of Natural Selection*: A Review”, *The Journal of Heredity*, 21: 349–356.
* –––, 1931a, “Evolution in Mendelian Populations”, *Genetics*, 16: 97–159.
* –––, 1931b, “Statistical Theory of Evolution”, *Journal of the American Statistical Association*, 26(173, Supplement): 201–208.
* –––, 1932, “The Roles of Mutation, Inbreeding, Crossbreeding and Selection in Evolution”, *Proceedings of the Sixth International Congress of Genetics*, 1: 356–366.
* –––, 1948, “On the Roles of Directed and Random Changes in Gene Frequency in the Genetics of Populations”, *Evolution*, 2(4): 279–294.
* –––, 1949, “Population Structure in Evolution”, *Proceedings of the American Philosophical Society*, 93(6): 471–478.
* –––, 1951, “Fisher and Ford on the Sewall Wright Effect”, *American Scientist*, 39: 452–458.
* –––, 1978, *Evolution and the Genetics of Populations, Volume 4: Variability within and among Natural Populations*, Chicago: University of Chicago Press.
* –––, 1986, *Evolution: Selected Papers*, Chicago: University of Chicago Press.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=genetic-drift). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/genetic-drift/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=genetic-drift&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/genetic-drift/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* [Arthur J. Cain papers](http://www.amphilsoc.org/collections/view?docId=ead/Mss.Ms.Coll.63-ead.xml)
* [A Conversation with Luigi Luca Cavalli-Sforza](http://www.annualreviews.org/doi/story/10.1146/multimedia.2012.11.06.13)
* [Darwin Online](http://darwin-online.org.uk/)
* [R.A. Fisher Digital Archive](https://digital.library.adelaide.edu.au/dspace/handle/2440/3860)
* [Maxime Lamotte](http://maximelamotte.free.fr/)
* [Sewall Wright papers](http://www.amphilsoc.org/collections/view?docId=ead/Mss.Ms.Coll.60-ead.xml)
* [Perspectives on Molecular Evolution](http://authors.library.caltech.edu/5456/1/hrst.mit.edu/hrs/evolution/public/index.html)

## Related Entries

[adaptationism](https://plato.stanford.edu/entries/adaptationism/) | [biology: experiment in](https://plato.stanford.edu/entries/biology-experiment/) | [biology: philosophy of](https://plato.stanford.edu/entries/biology-philosophy/) | [causation: and manipulability](https://plato.stanford.edu/entries/causation-mani/) | [causation: probabilistic](https://plato.stanford.edu/entries/causation-probabilistic/) | [chance: versus randomness](https://plato.stanford.edu/entries/chance-randomness/) | [Darwinism](https://plato.stanford.edu/entries/darwinism/) | [evolution](https://plato.stanford.edu/entries/evolution/) | [fitness](https://plato.stanford.edu/entries/fitness/) | [gene](https://plato.stanford.edu/entries/gene/) | [genetics](https://plato.stanford.edu/entries/genetics/) | [genetics: ecological](https://plato.stanford.edu/entries/ecological-genetics/) | [genetics: genotype/phenotype distinction](https://plato.stanford.edu/entries/genotype-phenotype/) | [genetics: molecular](https://plato.stanford.edu/entries/molecular-genetics/) | [genetics: population](https://plato.stanford.edu/entries/population-genetics/) | [heritability](https://plato.stanford.edu/entries/heritability/) | [laws of nature](https://plato.stanford.edu/entries/laws-of-nature/) | [levels of organization in biology](https://plato.stanford.edu/entries/levels-org-biology/) | [models in science](https://plato.stanford.edu/entries/models-science/) | [natural selection](https://plato.stanford.edu/entries/natural-selection/) | [natural selection: units and levels of](https://plato.stanford.edu/entries/selection-units/) | [probability, interpretations of](https://plato.stanford.edu/entries/probability-interpret/) | [replication and reproduction](https://plato.stanford.edu/entries/replication/) | [statistics, philosophy of](https://plato.stanford.edu/entries/statistics/)

### Acknowledgments

Thanks to Jon Hodge, Charles Pence, Anya Plutynski, and an anonymous referee for extremely helpful comments on an earlier drift, and also to John Beatty, Michael Dietrich, Jon Hodge, and Robert Skipper for ongoing discussions about the nature of drift.

[Copyright © 2021](https://plato.stanford.edu/info.html#c) by  
[Roberta L. Millstein](http://www.rlm.net/) <[*rlmillstein@ucdavis.edu*](mailto:rlmillstein%40ucdavis%2eedu)>
