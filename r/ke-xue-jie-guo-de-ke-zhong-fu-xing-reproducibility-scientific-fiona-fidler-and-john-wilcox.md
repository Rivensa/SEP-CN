# 科学结果的可重复性 reproducibility, scientific (Fiona Fidler and John Wilcox)

*首次发表于 2018 年 12 月 3 日*

“可重复性危机”和“复制危机”这些术语在过去十年的对话和印刷品中变得流行起来（例如，Pashler＆Wagenmakers 2012），因为在各种医学、生命科学和行为科学的大规模可重复性项目中出现了令人失望的结果（例如，开放科学协作，OSC 2015）。2016 年，《自然》杂志进行的一项调查报告称，超过一半（52％）的科学家认为科学面临“复制危机”（Baker 2016）。最近，一些作者开始使用更积极的术语来描述科学中的这一事件；例如，Vazire（2018）改称为“可信度革命”，强调它所激发的改进方法和开放科学实践。

危机通常至少指以下几个方面：

1. 在许多科学领域的已发表文献中，很少有复制研究（例如，Makel，Plucker 和 Hegarty 2012），
2. 大规模系统复制项目中对已发表研究结果的广泛无法重复（例如，OSC 2015; Begley & Ellis 2012），
3. 发表偏倚的证据（Fanelli 2010a），
4. “可疑研究实践”的高普遍性，这些实践夸大了文献中的假阳性率（Simmons, Nelson, & Simonsohn 2011; John, Loewenstein, & Prelec 2012; Agnoli et al. 2017; Fraser et al. 2018），以及
5. 在科学出版物的方法、数据和分析报告中，存在透明度和完整性不足的记录不足（Bakker＆Wicherts 2011; Nuijten 等，2016）。

相关的开放科学改革运动旨在纠正导致危机的条件。这是通过促进数据共享和研究的公开预注册等活动，并倡导更严格的编辑政策，包括发布复制研究和统计非显著结果。

该综述由四个不同部分组成。首先，我们看一下“可重复性”这个术语以及与之相关的术语，如“可重复性”和“复制”，并介绍了关于不同类型复制研究的认识功能的一些定义和概念讨论。其次，我们描述了已经建立和表征了可重复性危机的元科学研究，包括大规模复制项目和对各个科学界可疑研究实践的调查。第三，我们探讨了解决复制的局限性以及它对科学探究和知识积累的价值的认识论问题的尝试。第四部分描述了开放科学改革运动提出（并在许多情况下实施）以改善科学中的可重复性的许多倡议。此外，我们还反思了这些改革所体现的价值观和规范，注意到它们与科学哲学中价值观辩论的相关性。

---

## 1. 可重复性、重复性和再现性的科学结果

在对可重复性和相关概念进行哲学探索时，首先要考虑的是这些概念的概念问题。根据一些人的观点（例如，Cartwright 1991），术语“复制”、“再现”和“重复”表示不同的概念，而其他人则将这些术语互换使用（例如，Atmanspacher＆Maasen 2016a）。不同的学科对这些术语也可能有不同的理解。例如，在计算学科中，可重复性通常指的是仅能够重现计算，即仅与共享和充分注释数据和代码有关（例如，Peng 2011, 2015）。在这些学科中，复制描述的是整个实验的重做（Barba 2017，其他互联网资源）。然而，在心理学和其他社会和生命科学中，可重复性可能指的是计算的重做或实验的重做。由开放科学中心协调的可重复性项目重新进行整个研究、数据收集和分析。美国国防高级研究计划局（DARPA）最近的资金计划公告区分了可重复性和可复制性，前者指的是计算可重复性，后者指的是实验的重做。在这里，我们将“复制”、“再现”和“重复”这三个术语互换使用，除非明确描述其他作者的区别。

当将一项研究描述为“可重复性”的时候，人们可能会考虑至少两种不同的情况。第一种情况是指这项研究在原则上是可重复的，也就是说，只要其方法、程序和分析得到足够详细和透明的描述，就可以再次进行。第二种情况是指这项研究在重复进行时，能够成功地产生与原始研究相同或足够相似的结果。一项研究可能在前一种情况下是可重复的，但在后一种情况下却不可重复：人们可能能够复制一项研究的方法、程序和分析，但却无法成功地复制原始研究的结果。同样，当人们谈论“复制”时，也可能有两种不同的情况：复制一项研究的方法、程序和分析（不考虑结果），或者同时复制这些方法、程序和分析以及结果。

可以说，大多数复制的分类法在直接复制（紧密跟随原始研究以验证结果）和概念复制（有意改变研究的重要特征以推广发现或以新的方式测试基础假设）之间进行了更细致的区分。如建议的那样，这种区分并不总是以这些术语来称呼。例如，Keppel（1982）将大致相同的区分称为精确和非精确复制；Sargent（1981）称之为具体和概念复制；Lykken（1968）称之为字面、操作和构造复制。计算可重复性通常是直接的（使用相同的数据集、代码和软件复制特定分析结果），但也可以是概念性的（使用替代方法、不同模型或统计框架分析相同的原始数据集）。有关概念性计算可重复性研究的示例，请参见 Silberzahn 和 Uhlmann（2015）。

我们不试图解决这些学科差异或创建一个新的复制分类法，而是通过调查三个现有的分类法（来自 Stefan Schmidt（2009），来自 Omar Gómez，Natalia Juristo 和 Sira Vegas（2010）以及来自 Hans Radder）提供对概念领域的有限快照。Schmidt 的解释在心理学和社会科学中具有影响力，并且复制危机文献在这些领域中非常集中。Gómez，Juristo 和 Vegas（2010）的复制分类法基于对 18 个学术复制研究分类的多学科调查，这些分类共包含 79 种复制类型。最后，Radder（1996，2003，2006，2009，2012）的分类法在科学哲学领域内可能是最为知名的。

### 1.1 社会科学的解释/原理

Schmidt 概述了社会科学中复制研究的五个功能：

* 功能 1. 控制抽样误差-即验证先前样本中的结果不是纯粹偶然的结果，这些结果歪曲了现实的画面
* 功能 2. 控制人为因素（内部效度）-即确保实验结果是对假设的适当测试（即具有内部效度），并且不反映研究设计中的意外缺陷（例如，当测量结果是一个有故障的温度计的人为结果，而不是物质温度的实际变化）
* 功能 3. 控制欺诈，
* 功能 4. 实现普适性，
* 功能 5. 验证基本假设。

修改 Hendrik（1991）对定义研究空间的变量的分类，Schmidt（2009）提出了四类变量，这些变量可以被改变或保持不变，以便使给定的复制研究能够实现上述功能之一。这四类变量是：

* 第一类。传达给参与者的信息（例如，他们的任务说明）。
* 第二类。背景和环境。这是一个庞大的变量类别，包括：参与者的特征（例如年龄、性别、具体历史）；研究的物理环境；实验者的特征；材料的附带特征（例如字体类型、房间的颜色），
* 第三类。参与者招募，包括参与者的选择和分配到条件（如实验组或对照组），
* 第四类。依赖变量的测量（或者按照 Schmidt 的术语称之为“依赖变量的构成程序”，2009: 93）

Schmidt 然后系统地通过示例说明了如何通过改变和/或保持不同类别的变量恒定来实现每个功能。例如，为了实现控制抽样误差的功能（功能 1），应仅改变与参与者招募有关的变量（类别 3），并尽量使其他类别的变量与原始研究尽可能接近。为了控制人为因素（功能 2），应改变与背景和因变量测量有关的变量（分别为类别 2 和 4 的变量），但应尽量使类别 1 和 3 的变量与原始研究尽可能接近。Schmidt 和这个领域的大多数其他作者一样，承认能够保持其他所有因素恒定的实际限制。控制欺诈（功能 3）的方法与控制人为因素（功能 2）相同。在 Schmidt 的解释中，控制抽样误差、人为因素和欺诈（功能 1 至 3）通过确认原始研究的结果来相互关联。功能 4 和 5 超越了这一点-泛化到新的人群（功能 4），这需要改变参与者招募（类别 3），以及确认基本假设（功能 5），这需要改变传达的信息、背景和因变量测量（分别为类别 1、2 和 4 的变量），但不需要改变参与者招募（类别 3，尽管 Schmidt 承认在变化其他所有因素的同时保持后者类别的变量恒定通常是不可行的）。仅仅试图验证基本研究假设（即实现功能 5）的努力是 Schmidt 归类为概念复制的努力，这是根据 Rosenthal（1991）的说法。实现其他四个功能的努力被视为直接复制的变体。

总之，对于 Schmidt 来说，直接复制控制了抽样误差、人为因素和欺诈，并提供了关于先前实证工作的可靠性和有效性的信息。概念复制有助于证实所讨论的基础理论或实质性（而非统计性）假设以及它们在新环境和情况下的普遍性程度。在实践中，直接复制和概念复制处于一个连续体上，复制研究在许多维度上与原始研究相比可能有更多或更少的差异。

### 1.2 一个跨学科的解释/原理

Gómez、Juristo 和 Vega（2010）对 18 个学科的文献进行的调查发现了 79 种复制类型，其中并非所有类型都被他们认为完全不同。他们确定了复制研究与初始研究可能存在的五种主要差异。与 Schmidt 上述的四类相似：

1. 复制实验的站点或空间位置：复制实验可以在与初始研究的站点相同或不同的位置进行。
2. 进行复制的实验者可能完全与原始实验者相同，完全不同，或者是新旧实验者的组合。
3. 设备，包括设计、材料、仪器和其他重要的实验对象和/或程序，在原始研究和复制研究之间可能有所不同。
4. 所采用的操作化方法可能会有所不同，其中操作化是指对变量进行测量。例如，在心理学中，这可能包括使用两种不同的衡量抑郁症的量表（作为因变量）。
5. 最后，研究可能会在人群特性上有所不同。

在复制研究中，任何一个或多个元素的变化都对应着研究背后不同的目的，从而建立了不同类型的有效性。就像 Schmidt 等人系统地研究了如何改变上述每个元素以实现不同的认识功能。

* 功能 1. 结论有效性和控制抽样误差：如果在复制研究中上述五个要素都保持不变，那么复制的目的就是为了控制抽样误差，即验证之前样本中的结果不是纯粹由偶然结果得出的，这使得样本具有误导性或不具代表性。这提供了一种防范所谓的 I 型错误的保障：错误地未能拒绝零假设（即，两个研究对象之间没有关系的假设）。这些研究建立了结论有效性，即观察到的关系或现象的可信度或可信性。
* 功能 2. 内部有效性和控制人为结果：如果复制研究在地点、实验者或设备方面有所不同，那么它的目的是确定先前观察到的结果不是特定设备、实验室等的产物。这些研究建立了内部有效性，即结果可以归因于实验操作本身，而不是外部变量。
* 功能 3. 构造有效性和确定操作化的限制：如果复制研究在操作化方面有所不同，那么它的目的是确定效果在操作或依赖变量的不同测量方式中的普遍性程度（例如，效果在评估抑郁或智商的特定心理测验中不依赖于使用的特定心理测验）。这些研究履行了建立构造有效性的功能，因为它们提供了证据表明效果在不同的构造测量方式中成立。
* 功能 4. 外部效度和确定人口特性的限制：如果复制研究在人口特性方面有所不同，那么其目的是确定结果在不同人口中的普遍性，这些人口在 Gómez、Juristo 和 Vegas 的观点中涉及主体和实验对象，如程序。这些研究加强了外部效度-结果在不同人口中的普遍性程度。

### 1.3 一个哲学解释

Radder（1996 年，2003 年，2006 年，2009 年，2012 年）区分了三种可重复性类型。其中一种是 Radder 所称的实验物质实现的可重复性。以 Radder 自己的一个例子作为说明，两个人可以执行相同的操作来测量一个物体的质量。尽管执行相同的操作，A 人认为自己在测量物体的牛顿质量，而 B 人认为自己在测量物体的爱因斯坦质量。因此，实验程序的操作或物质实现可以被复制，但其意义的理论描述不同。然而，Radder 并没有明确指出一个物质实现需要满足什么条件才能成为另一个物质实现的复制，这是一个相关的问题，特别是因为正如 Radder 自己所肯定的，没有任何复制会与其他复制完全相同（1996 年：82-83）。

第二种可重复性是在给定固定理论描述的情况下，实验的可重复性。例如，社会科学家可能进行两个实验来研究社会一致性。在一个实验中，一个年轻的孩子可能被指示在其他孩子面前回答一个问题，而这些孩子被告知给出错误答案。在另一个实验中，一个成年人可能被指示在其他成年人面前回答同样的问题，而这些成年人被告知给出错误答案。如果孩子和成年人都给出与他人答案一致的错误答案，那么社会科学家可能解释结果是社会一致性的例证。对于 Radder 来说，实验的理论描述可能是固定的，指定如果参与者周围的一些人对问题故意给出错误答案，那么真正的参与者将遵循他们同伴的行为。然而，这些实验的物质实现有所不同，一个涉及儿童，另一个涉及成年人。至少在这个例子中，很难看出这与 Schmidt 或 Gómez、Juristo 和 Vegas 所说的建立对不同人群的普遍性有什么不同（Schmidt 的[2009]第 3 类和第 5 功能；Gómez、Juristo 和 Vegas 的[2010]第 5 种方式和第 4 功能）。

第三种可重复性是 Radder 所称的可复制性。这是指实验过程不同，但产生相同的实验结果（也称为成功复制）。例如，Radder 指出，多个实验可能得到结果“f 型流体的沸点为 b”，尽管使用不同种类的温度计来测量这个沸点（2006: 113–114）。

Schmidt (2009)指出，与第一类型相比，Radder 的第二和第三类型的可重复性差异较小。因此，他提出了他的替代性区分，即直接复制和概念复制，可能意图将概念复制覆盖 Radder 的第二和第三类型。

总之，尽管 Gómez、Juristo 和 Vegas 的分类在某些方面与 Schmidt 的分类有所不同，但其目的可以说是相同的，即解释在复制研究中不同的科学目标，如建立内部有效性或广泛推广程度等所需的不同类型的变化。除了他对材料实现的再现讨论之外，Radder 的其他两个类别可能被看作是适应 Schmidt 和 Gómez 等人所描述的更广泛功能范围内的一部分，他们都承认在实践中，直接复制和概念复制处于一个嘈杂的连续体上。

## 2. 元科学：建立、监测和评估可重复性危机

在心理学中，可重复性危机的起源通常与达里尔·贝姆（2011 年）的论文有关，该论文报告了存在“psi”的经验证据，也被称为超感知能力（ESP）。这篇论文通过了标准的同行评审过程，并发表在高影响力的《人格与社会心理学杂志》上。这些发现的争议性激发了三项独立的复制研究，但每一项都未能复制贝姆的结果。然而，这些复制研究被四个不同的期刊拒绝，包括最初发表贝姆研究的期刊，理由是复制研究不是原创或新颖的研究。最终，它们在《公共科学图书馆·综合》杂志上发表（Ritchie，Wiseman 和 French 2012）。这在该领域引起了争议，并被许多人解释为出版偏见如何阻碍科学的自我修正机制。在医学领域，危机的起源通常归因于伊奥尼迪斯（2005 年）的论文《为什么大多数发表的研究结果是错误的》。该论文提供了关于文献中虚假阳性率过高的正式论证，其中“虚假阳性”结果声称存在现象之间的关系，而实际上并不存在（例如，声称服用药物与症状缓解之间存在相关性，而实际上并不存在）。伊奥尼迪斯（2005 年）还报告了在安姆根进行的一组临床前试验复制中非常低（11%）的经验证据可重复性率，后来由贝格利和埃利斯（2012 年）独立发表。在所有学科中，可重复性危机还与对零假设显著性检验的早期批评（例如，Szucs 和伊奥尼迪斯 2017 年）有关，该批评指出了对统计功效（例如，Cohen 1962, 1994）的忽视以及未能充分区分统计和实质性假设（例如，Meehl 1967, 1978）。下面将进一步讨论这一问题。

针对上述事件，过去十年间出现了一个被称为元科学（或元研究）的新领域（Munafò等，2017）。Munafò等将元科学定义为“对科学本身的科学研究”（2017: 1）。2015 年 10 月，Ioannidis、Fanelli、Dunne 和 Goodman 发现，在当年 1 月至 5 月的五个月期间，已经发表了 800 多篇元科学论文，并估计相关文献每年以大约 2000 篇的速度增加。Ioannidis 等用稍微不同的术语指称相同的工作，将“元研究”定义为

> 一门不断发展的科学学科，旨在评估和改进研究实践。它包括方法、报告、可重复性、评估和激励等主题领域（如何进行、报告、验证、纠正和奖励科学）（2015: 1）。

现在已经存在多个致力于这项工作的研究中心，包括心理学领域的蒂尔堡大学元研究中心、斯坦福大学元研究创新中心（METRICS）等，还有 Ioannidis 等 2015 年列出的其他互联网资源。医学领域的相关研究也在 Stegenga 2018 中涵盖。

自我认定为元科学或元研究的项目包括：

* 大型、众包、直接（或接近）复制项目，如心理学中的可重复性项目（OSC 2015）和癌症生物学（Errington 等人 2014），以及心理学中的许多实验室项目（例如 Klein 等人 2014）；
* 计算可重复性项目，即使用相同的原始数据集重新进行分析（例如 Chang 和 Li 2015）；
* 记录不同科学领域中出版偏见的文献研究，以及随时间的变化（例如，Fanelli 2010a，2010b，2012）；
* 调查研究人员在出版文献中使用可疑研究实践（QRPs）的情况以及其对出版文献的影响（例如，John，Loewenstein 和 Prelec 2012；Fiedler 和 Schwarz 2016；Agnoli 等人 2017；Fraser 等人 2018）；
* 调查科学期刊中方法和分析报告的完整性、正确性和透明度（例如，Nuijten 等人 2016；Bakker 和 Wicherts 2011；Cumming 等人 2007；Fidler 等人 2006）；
* 研究人员对核心方法论和统计概念的理解以及改进实践的真实和感知障碍的调查和访谈研究（Bakker 等，2016 年; Washburn 等，2018 年; Allen，Dorozenko 和 Roberts，2016 年）;
* 评估改变行为的激励措施，从而提高可重复性并鼓励更开放的实践（例如，Kidwell 等，2016 年）。

### 2.1 可重复性项目

这些项目中最著名的无疑是可重复性项目：心理学，由现在的开放科学中心在弗吉尼亚州夏洛茨维尔（当时是开放科学协作）协调。它涉及到来自 11 个不同国家的 64 个不同机构的 270 名众包研究人员。研究人员试图直接复制 2008 年发表在三本领先心理学期刊上的 100 项研究。每项研究只复制一次。复制试验尽可能地遵循原始协议，尽管一些差异是不可避免的（例如，一些复制研究是使用欧洲样本进行的，而原始研究使用的是美国样本）。几乎所有情况下，复制研究使用了比原始研究更大的样本量，因此具有更大的统计功效，即在假设为假时正确拒绝零假设（即不存在关系的假设）的概率更大。报告了多种可重复性的度量指标：

1. 在原始研究和复制研究之间统计显著性匹配的研究比例。（这里，结果的统计显著性是指在零假设下发生该结果的概率，p 值是常用的这种概率的度量。如果复制研究和原始研究都指定了原始结果和复制结果在零假设下发生的概率小于 5%（即两个研究的结果的 p 值都小于 0.05），则它们在统计显著性上匹配。根据这个度量，有 39%的结果成功复制。
2. 在这些研究中，复制研究的效应大小（ES）落在原始研究的 95%置信区间（CI）内的比例。（这里，ES 代表现象之间关系的强度，一个玩具例子是药物消耗与症状缓解之间的相关性有多强，而置信区间则提供了复制研究的 ES 接近原始研究的 ES 的概率的一些指示。）根据这个指标，成功复制的结果占总数的 47%。
3. 原始 ES 和复制 ES 之间的相关性。复制研究的 ES 大约是原始 ES 的一半大小。
4. 独立研究人员主观评分表明复制和原始之间的匹配的研究比例。根据这个指标，成功复制的结果占总数的 39%。这个数字与指标 1 的接近程度表明评分者在做出判断时非常依赖 p 值。

对于该项目的实施和解释存在异议，其中最明显的是由 Gilbert 等人（2016）提出的异议，他们对复制研究的程度是否真正是直接复制提出了质疑。例如，Gilbert 等人强调了 6 个“低保真度协议”的具体例子，即复制研究在很大程度上与原始研究存在差异（例如，在一个案例中，使用的是欧洲样本而不是美国样本的参与者）。然而，Anderson 等人（2016）在回复中解释说，在这些案例中，有一半的原始研究的作者认可复制研究在相关维度上是直接的或接近的，并且独立评定的原始研究和复制研究之间的相似性无法预测复制的成功。其他人（例如，Etz 和 Vandekerckhove 2016）对 OSC（2015）的数据进行了贝叶斯重新分析，并得出结论，高达 75%（而不是 OSC 的 36-47%）的复制可以被认为是成功的。然而，他们指出，在许多情况下，这只是非常弱的证据（即贝叶斯因子<10）。他们也得出结论，无法复制许多效应的失败确实可以解释为效应大小的过高估计，这本身是出版偏见的产物。一个名为“可重复性项目：癌症生物学”的项目（也由开放科学中心协调）目前正在进行中（Errington 等人，2014），最初试图复制 2010-2012 年间发表的癌症生物学领域最高影响力研究中的 50 个研究。该项目最近宣布，由于原始研究报告的信息不足，只能完成 18 个复制研究（Kaiser 2018）。据报道，前 10 个研究的结果是参差不齐的，只有 5 个被认为是“大部分可重复的”（Kaiser 2018）。

The Many Labs project (Klein et al. 2014) coordinated 36 independent replications of 13 classic psychology phenomena (from 12 studies, that is, one study tested two effects), including anchoring, sunk cost bias and priming, amongst other well-known effects in psychology. In terms of matching statistical significance, the project demonstrated that 11 out of 13 effects could be successfully replicated. It also showed great variation in many of the effect sizes across the 36 replications.

在生物医学研究中，也进行了许多大规模的可重复性项目。Begley 和 Ellis（2012 年，但在 Ioannidis 2005 年之前讨论过）早期尝试复制了 56 个重要的临床前试验，并报告了令人担忧的可重复性率仅为 11％，即 56 个结果中只有 6 个能够成功复制。随后在该领域进行的大规模复制尝试产生了更乐观的估计，但通常无法成功复制超过一半的已发表结果。Freedman 等人（2015 年）报告了独立研究小组进行的五个复制项目，其可重复性估计范围从 22％到 49％不等。他们估计仅在美国生物医学科学领域，无法复制的研究成本每年约为 280 亿美元。实验哲学中的可重复性项目是一个例外，报告了 70％的可重复性率（Cova 等人即将发表）。

最后，社会科学复制项目（SSRP）重新进行了 2010 年至 2015 年间发表在《自然》和《科学》杂志上的 21 项实验社会科学研究。根据采取的措施不同，复制成功率为 57％至 67％（Camerer 等人 2018 年）。

### 2.2 发表偏倚、低统计功效和夸大的假阳性率

不可重复结果的原因在我们提到的各个学科中基本相同。这并不奇怪，因为它们源于统计方法、出版实践和“发表或灭亡”研究文化中创造的激励机制存在的问题，这些问题在生命科学和行为科学中都是普遍存在的。

尽管复制通常被随意地称为科学方法的基石，但在某些科学学科的已发表文献中，直接复制研究（如 Schmidt 或 Gómez、Juristo 和 Vegas 的分类法所理解的那样）是罕见的事件，尤其是在生命科学和社会科学中。例如，这样的复制尝试大约占已发表的心理学文献的 1%（Makel、Plucker 和 Hegarty 2012）。在已发表的生态学和进化学文献中，这一比例甚至更小（Kelly 2017，其他互联网资源）。

文献中缺乏复制研究的虚拟缺席可以通过以下事实来解释：许多科学期刊在历史上明确规定不发表复制研究（Mahoney 1985），从而产生了“出版偏见”。79 个社会科学期刊的超过 70%的编辑表示他们更喜欢新研究而不是复制研究，超过 90%的编辑表示他们不鼓励提交复制研究（Neuliep & Crandall 1990）。此外，许多科学资助机构也只资助“新颖”、“原创”和/或“突破性”的研究（Schmidt 2009）。

第二种类型的出版偏见也在可重复性危机中起到了重要作用，即对“统计显著”或“积极”结果的偏见。与对复制研究的偏见不同，这很少是期刊明确规定的政策。对统计显著结果的出版偏见有着悠久的历史，最早由 Sterling（1959）在心理学中进行了记录。文本挖掘技术的发展使得更全面的估计成为可能。例如，Fanelli 的研究展示了各个学科中出版偏见的程度，下面给出的统计显著结果的比例来自他 2010 年的论文。他还记录了这种偏见随时间的增加（2012 年）并探讨了偏见的原因，包括出版偏见与“发表或灭亡”研究文化之间的关系（2010b）。

在许多学科中（如心理学、精神病学、材料科学、药理学和毒理学、临床医学、生物学和生物化学、经济学和商业、微生物学和遗传学），统计显著结果的比例非常高，接近或超过 90%（Fanelli 2010a）。尽管在许多领域中，平均统计功效较低，即研究正确拒绝零假设的平均概率较低。例如，在心理学中，发表的统计显著结果比例为 92%，尽管该领域研究检测中等效应大小（可以说是该学科的典型效应大小）的平均功效约为 44%（Szucs＆Ioannidis 2017）。如果没有偏向于发表统计显著结果的偏差，显著结果的比例应该大致与学科的平均统计功效相匹配。统计显著性的过度（在这种情况下，92%和 44%之间的差异）因此是偏差强度的指标。作为第二个例子，在生态学、环境学、植物和动物科学中，统计显著结果的比例分别为 74%和 78%，尽管低于心理学。然而，对生态学和动物行为的中等效应大小的最新统计功效估计为 23-26%（Smith，Hardy 和 Gammell 2011）（早期更乐观的评估为 40-47%，Jennions＆Møller，2003）。作为第三个例子，神经科学和行为学中的统计显著结果比例为 85%。我们对神经科学的统计功效的最佳估计最多为 31%，下限估计为 8%（Button 等人，2013）。 相关的文件抽屉问题（Rosenthal 1979）——研究人员将未能达到统计显著性的研究放入文件抽屉中，隐藏起来，这在心理学和其他学科中早已被确认，并且已知会导致元分析中的扭曲（“元分析”是一项研究，它分析了多个其他研究的结果）。

### 2.3 可疑研究行为

除了产生上述文件抽屉问题，出版偏倚还被认为是可疑研究行为（QRPs）高发的部分原因，这在自我报告调查研究（John, Loewenstein, & Prelec 2012; Agnoli 2017 et al. 2017; Fraser et al. 2018）和检测到异常 p 值分布的期刊研究（Masicampo & Lalande 2012; Hartgerink et al. 2016）中都有发现。如今，出版压力在学术机构中普遍存在，这意味着研究人员通常无法简单地将“失败”的或统计上不显著的研究放入文件抽屉，因此他们会进行 p 值篡改和结果挑选（如下所述），使其重新达到显著性，并重新进入已发表的文献中。Simmons、Nelson 和 Simonsohn（2011）通过模拟结果解释和证明了这种做法如何增加了已发表文献的假阳性错误率，导致可重复性结果的比例降低。

“P hacking”是一组实践，包括：在决定是否收集更多数据之前检查结果的统计显著性；因为结果已经达到统计显著性而提前停止数据收集；仅在检查数据排除对统计显著性的影响后决定是否排除数据点（例如异常值），并且不报告数据排除的影响；调整统计模型，例如根据感兴趣的主要效应的结果强度包括或排除协变量；将 p 值四舍五入以满足统计显著性阈值（例如将 0.053 表示为 P < .05）。“挑选樱桃”包括未报告未达到统计显著性或其他阈值的依赖变量或响应变量或关系，以及未报告未达到统计显著性或其他阈值的条件或处理。 “HARKing”（在结果已知后进行假设）包括将临时和/或意外的发现呈现为一直被预测的发现（Kerr 1998）；并将探索性工作呈现为确认性假设测试（Wagenmakers 等人 2012）。下表列出了五种最常见的 QRPs（来自 Fraser 等人 2018），以及相关的普遍性调查测量。

表 1：一些常见可疑研究实践的普遍性。报告使用过该 QRP 的研究人员的百分比（带有 95％置信区间）（根据 Fraser 等人 2018 进行调整）

| **可疑研究实践**                                                | **心理学意大利**<br /> (Agnoli 等人，2017 年) | **心理学美国**<br />(John, Loewenstein, & Prelec 2012) | **生态学**<br />(Fraser et al. 2018) | **进化**<br /> (Fraser 等，2018 年) |
| ------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------- | ----------------------------------- | ---------------------------------- |
| 不报告未达到统计显著性的响应（结果）变量#       | 47.9<br /> *(41.3–54.6)*                                     | 63.4<br /> *(59.1–67.7)*                                              | 64.1<br /> *(59.1–68.9)*                            | 63.7<br /> *(57.2–69.7)*                           |
| 在检查结果是否具有统计学意义之后，收集更多数据* | 53.2<br /> *(46.6–59.7)*                                     | 55.9<br /> *(51.5–60.3)*                                              | 36.9<br /> *(32.4–42.0)*                            | 50.7<br /> *(43.9–57.6)*                           |
| 将 p 值或其他数量四舍五入以满足预先指定的阈值*  | 22.2<br /> *(16.7–27.7)*                                     | 22.0<br /> *(18.4–25.7)*                                              | 27.3<br /> *(23.1–32.0)*                            | 17.5<br /> *(13.1–23.0)*                           |
| 决定在首次检查统计显著性影响后排除数据点*       | 39.7<br /> *(33.3–46.2)*                                     | 38.2<br /> *(33.9–42.6)*                                              | 24.0<br /> *(19.9–28.6)*                            | 23.9<br /> *(18.5–30.2)*                           |
| 从一开始就被预测到的意外发现的报告^             | 37.4<br /> *(31.0–43.9)*                                     | 27.0<br /> *(23.1–30.9)*                                              | 48.5<br /> *(43.6–53.6)*                            | 54.2<br /> *(47.7–60.6)*                           |

 #挑选樱桃,
 *p 值调整,
^HARKing

### 2.4 对零假设显著性检验的过度依赖

零假设显著性检验（NHST）- 如上所述- 是当前复制危机的常见诊断原因（参见 Szucs＆Ioannidis 2017）。生命和行为科学中 NHST 的普遍性已有充分的文献记录，最近由 Cristea 和 Ioannidis（2018）提出。这是建立其作为原因的重要前提条件，因为如果其实际使用很少，那么它就不可能是一个原因。NHST 的二元性质有利于出版偏见（Meehl 1967, 1978）。例如，假设检验中的接受和拒绝的语言方便地映射到稿件的接受和拒绝，这一事实导致 Rosnow 和 Rosenthal（1989）抱怨“肯定上帝几乎和 0.05 一样喜欢 0.06”（1989：1277）。未能确立二元阈值的技术将更难用于服务于出版偏见。例如，有人认为使用效应大小和置信区间进行估计（如上所述）会较少受到用于服务于出版偏见的影响（Cumming 2012，Cumming 和 Calin-Jageman 2017）。

如前所述，各个学科的平均统计功效都很低。统计功效通常很低，而且几乎从不报告；心理学领域发表的研究中报告统计功效的不到 10％，生态学领域更少（Fidler 等，2006）。对于普遍忽视统计功效的解释通常强调与 p 值相关的许多常见误解和谬论（例如，Haller＆Krauss 2002；Gigerenzer 2018）。例如，逆概率谬论[1]已被用来解释为什么有这么多研究人员未能计算和报告统计功效（Oakes 1986）。

2017 年，一组 72 位作者在《自然人类行为》杂志上提出，将统计显著性检验中的α水平降低到 0.005（而不是当前的标准 0.05），以提高已发表研究的可重复性（Benjamin 等，2018）。同一期刊上发表了另一组 88 位作者的回复，反对这一提议，并表示研究人员应根据上下文来证明他们的α水平（Lakens 等，2018）。随后还有几个回复，包括 Andrew Gelman 和同事呼吁完全放弃统计显著性（McShane 等，2018，其他互联网资源）。这次交流在社交媒体上被称为“Alpha Wars”（例如，在“Barely Significant”博客中，其他互联网资源）。独立地，美国统计协会首次发布了关于使用 p 值的声明，警告不要过度解释它们，并指出它们在复制方面提供的信息的局限性（Wasserman 和 Lazar，2016），并将协会的 2017 年年度大会专门致力于主题“21 世纪的科学方法：超越 p<0.05 的世界”（请参阅其他互联网资源）。

### 2.5 科学欺诈

最近一些备受关注的科学欺诈案件大大增加了科学可重复性危机的媒体报道。通常这些案件（例如心理学中的 Diederik Stapel）被用作媒体报道的噱头，尽管这个危机本身与科学欺诈关系甚微。（请注意，上述可疑研究行为通常不被视为“欺诈”或者“科学不端行为”，尽管它们在伦理上具有可疑的地位。）例如，Fang、Grant Steen 和 Casadevall（2012）估计，生物医学研究中 43%的撤稿文章是因为欺诈而被撤回的。然而，每年大约有 50 万篇生物医学文章发表，其中只有 400 篇被撤稿（RetractionWatch 网站创始人 Oransky，2016 年），所以这只占文献的很小一部分（约 0.1%）。当然，有很多关于制药公司对科学家和出版行业施加经济压力的案例，这引发了对文献中可能还存在多少未被发现（或未被撤回）的案例的猜测。话虽如此，该领域的科学家普遍一致认为，当前可重复性危机的主要原因是科学中的激励结构（出版偏见、发表或灭亡、非透明的统计报告、缺乏数据共享的奖励）。虽然这种激励结构可能会推动一些人进行科学欺诈，但这只占很小一部分。

## 3. 与复制相关的认识论问题

许多科学家认为，复制在某种程度上具有认识价值，也就是说，复制在增强我们对现实的知识、理解或信念方面发挥着有用的作用。本节首先讨论了关于复制研究的认识价值的一个问题，即“实验者的回归”，然后考虑了复制在区分科学探究中发挥认识价值的主张。最后，它还考察了在贝叶斯框架中形式化复制逻辑的最新尝试。

### 3.1 实验者的回归

Collins（1985）阐述了一个被广泛讨论的问题，现在被称为实验者的回归。他最初在测量的背景下阐述了这个问题（Collins 1985: 84）。假设一个科学家试图确定测量设备的准确性和测量结果的准确性。例如，一个科学家正在使用温度计测量液体的温度，并得到一个特定的测量结果，比如 12 摄氏度。

问题的产生是由于测量结果的准确性和测量设备的准确性之间的相互依赖性：要知道特定的测量结果是否准确，我们需要将其与先前已知为准确的测量结果进行测试，但要知道结果是否准确，我们需要知道它是通过准确的测量设备获得的，依此类推。根据柯林斯的说法，这就形成了一个他称之为“实验者的回归”的“循环”。

柯林斯将这个问题扩展到了科学复制的更一般情况。假设实验 B 是对初始实验 A 的复制研究，并且 B 的结果似乎与 A 的结果相冲突。这种看似冲突的情况可能有两种解释：

* A 和 B 的结果对于所研究的假设的真实性提供了真正相冲突的裁决。
* 实验 B 实际上并不是对实验 A 的适当复制。

这种回归问题涉及如何在这些解释之间进行选择的问题，如果在特定方式上没有合理的选择依据，这将威胁到复制研究的认识价值。确定一个实验是否是另一个实验的适当复制是复杂的，因为科学写作惯例通常省略了实验方法的精确细节（Collins 2016），而且，科学家执行实验所需的大部分知识是隐性的，"无法完全阐明或绝对确立"（Collins 1985: 73）。

在实验方法论的背景下，Collins 写道：

> 要知道一个实验是否被良好进行，就需要知道它是否产生了正确的结果。但要知道什么是正确的结果，就需要进行一个良好进行的实验。但要知道实验是否被良好进行...！（2016 年：66；省略号原文）

柯林斯认为，在出现结果冲突的情况下，科学家往往会分成两个群体，每个群体持有对结果的相反解释。根据柯林斯的说法，当这些群体“决定性地”存在且“争议深入”（柯林斯 2016 年：67）时，无法通过进一步的实验来解决群体之间的争议，因为每个额外的结果都受到实验者回归问题的影响。在这种情况下，柯林斯声称特定的非认识因素将在一定程度上决定哪种解释成为持久的观点：

> 科学家的职业、社会和认知兴趣，他们自己和他们机构的声誉，以及对未来工作的感知效用将在一定程度上决定哪种解释成为持久的观点。（弗兰克林和柯林斯 2016 年：99）

弗兰克林是柯林斯最激烈的反对者，尽管最近两人之间的合作促成了一些共识（柯林斯 2016 年）。弗兰克林提出了一套验证实验结果的策略，所有这些策略都与“理性论证”在认识论上有关（弗兰克林 1989 年：459；1994 年）。例如，可以通过对测量设备进行实验检查或消除实验中潜在的误差来源来进行验证（弗兰克林和柯林斯 2016 年）。他声称，这些策略在科学实践中的存在“反驳了那些认为理性论证在这种验证中起到很小甚至没有作用”的人（弗兰克林 1989 年：459），柯林斯就是一个例子。他解释柯林斯的意思是，解决结果验证争议的策略是社会因素或“文化认可的做法”（弗兰克林，1989 年：459），这些策略并不能提供支持结果的理性信念的理由。弗兰克林（1994 年）进一步声称，柯林斯混淆了成功执行实验的困难与证明实验已经执行的困难，费斯特（2016 年）解释他的意思是，尽管这样的执行需要隐性知识，但仍然可以借助策略来证明实验结果的有效性。

Feest（2016）研究了一项关于心理学中莫扎特效应的辩论的案例研究（大致上说，莫扎特效应是指听莫扎特音乐对智力或大脑结构的某些方面有益的影响）。与 Collins 一样，她认为在确定相互矛盾的结果是否表明一个假设的重复实验不是一个适当的重复尝试时存在问题，部分原因是对于科学概念（如莫扎特效应）在早期或后期实验环境中是否被适当地操作化存在不确定性。然而，与 Collins（根据她的解释）不同的是，她认为这种不确定性的产生并不是因为科学家们不可避免地对于莫扎特效应这类概念的含义和应用的语言规则具有隐性知识。相反，这种不确定性的产生是因为这些概念本身仍在发展，并且因为从中成功推断出来的假设世界的假设。实验方法则用于揭示先前隐含的关于概念应用和推断合法性的假设，这些假设随后可以接受审查。

例如，在她对莫扎特效应的研究中，她指出莫扎特效应的复制研究未能发现莫扎特音乐对空间能力有益影响。首次报道支持莫扎特效应结果的劳舍尔（Rauscher）认为后来的研究并非对她的研究进行适当复制（Rauscher, Shaw, and Ky 1993, 1995）。她澄清莫扎特效应仅适用于特定类别的空间能力（时空过程），而后来的研究将莫扎特效应操作化为不同的空间能力（空间识别）。因此，在确定复制研究结果是作为对初始结果的反证还是作为复制研究不适当的指示时存在困难。费斯特声称，这种困难是由于内隐知识或假设引起的：关于将莫扎特效应概念应用于不同类型空间能力的假设，关于莫扎特音乐是否对这些能力产生影响的世界假设，以及关于莫扎特未能影响其他类型空间能力是否证明莫扎特效应不存在的推理。然而，与柯林斯相反，实验方法使这些假设得以阐明和测试，从而使科学家能够克服解释上的僵局。

在这种背景下，她的总体论点是，科学家们经常是并且应该对彼此的结果持怀疑态度。然而，这并不是因为不可避免的隐性知识和验证结果的认识策略的必然失败。相反，这至少部分是因为研究人员对概念的意义、世界的理解以及从中推断出什么的隐性假设的差异。渐进性实验有助于揭示这些隐性假设，然后可以对其进行审查，从而积累知识。

关于实验者的回归还有其他哲学文献，包括 Teira（2013）的论文，主张特定的实验去偏见程序从契约主义的角度来看是可辩护的，根据这个观点，自利的科学家有理由采用良好的方法论标准。

### 3.2 可重复性作为科学的一个区别特征

有一种广泛的观点认为科学与其他知识积累努力不同，并且有人认为在这方面，复制是区分科学的（或至少是必不可少的）。（另请参阅科学和伪科学的条目）。根据开放科学协作组织，“可重复性研究实践是健全研究的核心，也是科学方法的一部分。”（OSC 2015: 7）。Schmidt 也强调了这一主题：“通过重复程序来确认结果或假设是任何科学概念的基础”（2009: 90）。Braude（1979）甚至说可重复性是“科学与非科学之间的划界标准”（1979: 2）。同样，Nosek，Spies 和 Motyl 指出：

> [T]科学方法通过公开披露支持主张的证据基础，使自己与其他方法区分开来...原则上，方法论的公开共享意味着任何人都可以复制整个科学知识体系。（2012: 618）

如果复制在科学中扮演如此重要或独特的角色，我们可能会期望它在科学史上是一个突出的主题。斯坦勒（2016）考虑了它在多大程度上是一个主题。他从科学史上提出了各种不同角色的复制案例，尽管他狭义地理解“复制”是指不同研究人员重新运行实验的情况。他声称，在实验复制中，复制的角色和价值“比简单的教科书解释所让我们相信的要复杂得多”（2016: 60），特别是因为每个科学探究总是与各种背景因素相关，这些因素可以影响复制的重要性。这些背景因素包括实验结果与当时被接受的理论背景之间的关系，追求复制的实际和资源限制，以及研究人员的可信度。他声称，这些背景因素意味着在某些情况下，复制是研究主张被接受的一个关键甚至是主导因素，但在其他情况下则不是。

例如，有时候复制是足够支持一个研究主张的，即使它与已接受的理论背景相冲突并且留下了理论问题未解决。一个例子是高温超导现象，即在相对较高的温度下，电流可以在导体中以零电阻通过。1986 年，物理学家 Georg Bednorz 和 Alex Müller 报告发现了一种在 35 开尔文（-238 摄氏度）下表现为超导体的材料。世界各地的科学家成功地复制了这个效应，然后 Bednorz 和 Muller 在他们的发现一年后获得了诺贝尔物理学奖。这个案例非常引人注目，因为他们的效应不仅与当时被接受的物理理论相矛盾，而且至今仍没有一个恰当解释他们所报告的效应的理论（Di Bucchianico，2014）。

然而，作为对比的例子，有时候主张被接受而没有任何复制。在 1650 年代，德国科学家 Otto von Guericke 设计并操作了世界上第一台能够明显抽空较大空间中的空气的真空泵。他用他的装置进行了各种观众面前的实验。然而，其他人复制他的实验将会非常困难，甚至是不可能的：不仅 Guericke 的泵昂贵且难以制造，而且他对泵的描述也不足以使任何人制造泵并因此复制他的发现。尽管如此，Steinle 声称“没有人对他的结果产生怀疑”，可能是因为他的“公开表演可以被大量观众见证”（2016: 55）。

Steinle 采用这样的历史案例来为理解作为上下文敏感的复制的认识价值提供规范指导：是否复制对于建立研究主张是必要的还是充分的，将取决于各种考虑因素，如前面提到的那些。因此，他避免了广泛的主张，比如“一切都与可重复性有关”或“可重复性并不能决定任何事情”（2016 年：60）。

### 3.3 形式化复制的逻辑

Earp 和 Trafimow（2015 年）试图通过使用贝叶斯框架来阐明从复制研究中得出的推理方式，从而形式化复制的认识价值。他们在与 Collins（1985 年）类似的背景下呈现了这个框架，指出“要确定[复制结果]的意义几乎是不可能的”（Earp＆Trafimow，2015 年：3）。但是，尽管复制研究通常并不具有决定性，但他们确实相信这类研究可以提供信息，并且他们的贝叶斯框架描述了这一点。

该框架以一个例子来说明。假设研究者 A 的粉丝非常自信研究者 A 所说的任何事情都是真实的。然后，另一位研究者 B 试图复制研究者 A 的实验，结果发现与研究者 A 的结果相矛盾。Earp 和 Trafimow 声称，粉丝可能会继续对研究者 A 的发现保持信心，但粉丝的信心可能会稍微降低。随着失败的复制尝试次数增加，粉丝的信心相应地降低，最终降至 50%以下，从而对复制失败的结果比最初由研究者 A 报告的发现更有信心。

在这里，假设我们对于在研究者 B 的第一次复制失败后，研究者 A 报告的原始结果为真的概率感兴趣。Earp 和 Trafimow 用符号 p(T∣F)表示这个概率，其中 p 是一个概率函数，T 表示原始结果为真的命题，F 表示研究者 B 的复制失败。根据下面的贝叶斯定理，这个概率可以从粉丝在了解复制失败之前对原始结果为真的信心程度 p(T)，在原始结果为真的条件下对复制失败的预期程度 p(T∣F)，以及在了解复制失败之前无条件地预期复制失败的程度 p(F)来计算：

(1)p(T∣F)=p(T)p(F∣T)p(F)

相关地，我们可能对原始结果在无法复制的情况下是真还是假的置信比感兴趣。这个比率可以表示为 p(T∣F)p(∼T∣F)，其中∼T 表示原始结果为假的命题。根据标准的贝叶斯概率计算，这个比率又与涉及以下比率的乘积相关

1. 原始结果为真的置信度 p(T)p(∼T)和
2. 在结果为真或假的条件下复制失败的期望 p(F∣T)p(F∣∼T)。

这个关系可以用以下方程表示：

(2)p(T∣F)p(∼T∣F)=p(T)p(∼T)p(F∣T)p(F∣∼T)

现在，Earp 和 Trafimow 为方程（2）右侧的项赋予了一些值。假设爱好者对原始结果有信心，他们将比率 p(T)p(∼T)设置为 50，这意味着爱好者最初对结果为真的信心是结果为假的 50 倍。

他们还设置了比率 p(F∣T)p(F∣∼T)。关于复制失败的条件期望为 0.5，这意味着爱好者对于如果原始结果为真，复制失败的可能性要比原始结果为假时更不确定。他们指出，爱好者的不确定程度取决于所谓的辅助假设对于复制实验的质量。在这里，辅助假设是指使人们能够推断出如果被测试的理论为真，特定事物应该是可观察的假设。直观的想法是，如果对于复制研究的假设质量越高，那么如果原始结果为真，我们就越有可能观察到成功的复制。虽然他们没有明确指出在这个背景下使这些辅助假设具有高“质量”的具体因素是什么，但可以推测这种质量涉及假设可能是真实的程度以及如果假设为真，复制实验对于原始结果真实性的适当性程度。

一旦方程（2）右侧的比率被设置为这样，就可以看出复制失败会降低对原始结果的信心：

(3)p(T∣F)p(∼T∣F)=p(T)p(∼T)p(F∣T)p(F∣∼T)=(50)(0.5)=25

在这种情况下，复制失败会降低爱好者对原始结果的信心，使得爱好者对结果为真的信心仅为失败的 25 倍（根据 p(T∣F)p(∼T∣F)），而不是 50 倍（根据 p(T)p(∼T)）。

尽管如此，爱好者可能仍然对原始结果的真实性有信心，但我们可以看到这种信心会随着连续的复制失败而减少。更正式地说，设 FN 为 N 个复制失败中的最后一个复制失败，那么爱好者对第 N 个复制失败后的原始结果的信心可以用以下方程表示：[3]

(4)p(T∣FN)p(∼T∣FN)=p(T)p(∼T)p(F1∣T)p(F1∣∼T)p(F2∣T)p(F2∣∼T)⋯p(FN∣T)p(FN∣∼T)

例如，假设存在 10 个复制失败，因此 N=10。进一步假设复制失败的置信比率设置如下：

(5)p(F1∣T)p(F1∣∼T)p(F2∣T)p(F2∣∼T)⋯p(F10∣T)p(F10∣∼T)=(0.5)(0.8)(0.7)(0.65)(0.75)(0.56)(0.69)(0.54)(0.73)(0.52)

 那么，

(6)p(T∣F10)p(∼T∣F10)=0.54=p(T)p(∼T)p(F1∣T)p(F1∣∼T)p(F2∣T)p(F2∣∼T)⋯p(F10∣T)p(F10∣∼T)=(50)(0.5)(0.8)…(0.52)

在这里，爱好者对原始结果的信心降低，他们更有信心它是错误的而不是正确的。因此，在 Earp 和 Trafimow 的贝叶斯解释中，连续的重复失败可以逐渐削弱一个人对原始结果为真的信心，即使一个人最初对原始结果非常有信心，即使没有单个重复失败本身是决定性的。[4]

Earp 和 Trafimow 的解释的一些潜在优点是，它提供了一个形式化的方式，即使重复尝试并不具有决定性，它们仍然具有信息量，而且，这种形式化还为重复尝试的数量以及关于重复尝试的辅助假设提供了一个角色。

## 4. 开放科学改革：价值观、语气和科学规范

上述元科学揭示了一系列问题，导致了可重复性危机，开放科学运动提出或推动了各种解决方案或改革以解决这些问题。这些改革可以分为四个类别：（a）方法和培训，（b）报告和传播，（c）同行评审流程，以及（d）评估新的激励结构（松散地遵循 Munafò等人 2017 年和 Ioannidis 等人 2015 年使用的类别）。在下面的 4.1-4.4 小节中，我们列举了每个类别中的一些非详尽的倡议。这些倡议反映了开放科学运动的核心价值观和规范，我们在 4.5 中讨论这些价值观和规范。

### 4.1 方法和培训

* 对抗偏见。对抗偏见的方法的发展，例如，使用掩盖或盲分析技术来对抗确认偏见（例如，MacCoun 和 Perlmutter 2017）。
* 支持。为研究人员提供方法论支持，包括发布指南和统计咨询（例如，由开放科学中心提供的支持）以及由 Daniel Lakens 开发的大型在线课程（请参阅其他互联网资源）。
* 合作。促进合作和团队/众包科学，以对抗单一研究的低功效和其他方法论限制。可重复性项目本身就是一个例子，但还有其他倡议，例如心理学中的 StudySwap 和集体复制和教育项目（CREP，请参阅其他互联网资源，了解这两个项目，有关更详细的描述，请参阅 Munafò等人）。旨在通过本科教育增加复制研究的普及程度。

### 4.2 报告和传播

* TOP 指南。透明度和开放促进（TOP）指南（Nosek 等，2015 年）截至 2018 年 5 月底，已有近 5000 家期刊和组织签署。TOP 指南在心理学领域内发展起来，并成为其他学科特定指南的基础，例如生态学和进化学的透明度工具（TTEE）。正如其名称所示，这些指南促进了更完整和透明的方法和统计实践报告。这反过来使作者、审稿人和编辑能够考虑他们的样本大小规划和设计决策的详细方面，并清楚区分确认性（计划的）分析和探索性（事后）分析。
* 预注册。在其最简单的形式中，预注册涉及在收集、查看或分析数据之前，公开、时间戳的声明预测和/或假设。其目的是区分预测与事后预测（Nosek 等，2018 年），或者在其他地方称为确认性研究与探索性研究（Wagenmakers 等，2012 年）的区别，也更常被称为假设检验与假设生成研究的区别。预注册预测性研究有助于控制 HARKing（Kerr，1998 年）和事后偏见，并在频率主义零假设显著性检验中，有助于将误报率控制在设定的α水平。有几个平台托管预注册，例如开放科学框架（osf.io）和 As Predicted（aspredicted.org）。开放科学框架还举办“预注册挑战”，为发布预注册工作提供经济奖励。
* 特定期刊倡议。一些高影响力的期刊被科学媒体单独指出存在特别问题的出版实践（例如，Schekman 2013），他们采取了特殊措施来提高其发表的研究的完整性、透明度和可重复性。例如，自 2013 年以来，Nature 和 Nature 研究期刊已经进行了一系列的编辑活动，旨在提高其期刊中发表的研究的可重复性（请参阅编辑公告，Nature 496, 398, 2013 年 4 月 25 日，doi:10.1038/496398a）。2017 年，他们引入了检查表和报告摘要（与文章一起发表），以提高透明度和可重复性。2018 年，他们为 Nature Human Behaviour 和 Nature Ecology & Evolution 制作了学科特定版本。在心理学领域，心理科学杂志（心理科学协会的旗舰杂志）是第一个采用开放科学实践的期刊，如下面所述的 COS 开放科学徽章。在 2015 年的生态学和进化学期刊编辑会议后，这些领域的一些期刊就这个主题发表了社论，通常承诺遵守 TTEE 指南（上文讨论）。《保护生物学》还为副编辑采用了一份检查表（Parker 等，2016 年）。

### 4.3 同行评审

* 注册报告。注册报告将同行评审发生的时间点转移到研究过程中，旨在对抗针对零（负面）结果的出版偏见。根据介绍、方法和计划分析的基础上，提交手稿，进行审查并做出出版决定。如果被接受，作者将有一定的时间来进行计划中的研究并提交结果。假设作者按照原始计划进行（或充分证明偏离计划的理由），无论结果如何，期刊都将遵守其决定予以发表。在心理学领域，注册报告格式由克里斯·钱伯斯（Chris Chambers）提倡，由期刊 Cortex 在钱伯斯的主编下首先采用了这种格式（Chambers 2013, 2017; Nosek & Lakens 2014）。目前（2018 年 5 月底），在生物医学、心理学和神经科学等领域，共有 108 种期刊提供这种格式（请参阅其他互联网资源中的注册报告）。
* 预印本。在物理学等某些科学领域，预印本服务器的使用已经得到很好的建立，但在生物学和社会科学领域，这种使用相对较新。

### 4.4 激励和评估

* 开放科学徽章。最近对改善数据共享的倡议进行的一项审查确定，授予开放数据和开放材料徽章是最有效的方案（Rowhani-Farid，Allen 和 Barnett 2017）。其中一个徽章计划由开放科学中心协调，他们目前授予三个徽章：开放数据、开放材料和预注册。徽章附加在遵循一组特定标准参与这些活动的文章上。Kidwell 等人（2016）在《心理科学》杂志中评估了徽章的有效性，并发现在不到两年的时间内，数据共享大幅增加（从 3%增加到 39%）。在同一时期，没有徽章计划的类似期刊中没有发现这样的增长。

### 4.5 开放科学改革中的价值观、语气和科学规范

长期以来，人们一直在对科学中价值观的作用进行哲学上的辩论（Churchman 1948；Rudner 1953；Douglas 2016），而可重复性危机与关于这些价值观的运作和相互关系的问题密切相关。特别是，Nosek 等人（2017）认为真理与可发表性之间存在紧张关系。更具体地说，由于期刊对新颖和积极结果的重视以及追求职业成功的科学家们寻求在这些期刊上独家发表此类结果的价值观，科学结果的准确性受到了损害。除了 Nosek 等人之外，许多其他人（Hackett 2005；Martin 1992；Sovacool 2008）也对期刊和资助机构赋予新颖性的价值观提出了异议。

有人可能将这种紧张局势解释为认识论价值（如真实性和可重复性）可能受到（可以说是）非认识论价值的影响，比如新颖、有趣或令人惊讶的结果的价值。认识论价值通常被认为是“促进获得真实信念”的价值（Steel 2010: 18；参见 Goldman 1999）。认识论价值的典型例子包括理论的预测准确性和内部一致性。认识论价值通常与被认为是非认识论或非认知价值相对比，后者包括伦理或社会价值，比如理论的新颖性或通过减少权力不平等来改善福祉（Longino 1996）。当然，对于什么算作认识论或非认识论价值并没有完全一致的共识（Rooney 1992；Longino 1996）。例如，Longino 声称，在其他条件相同的情况下，新颖性有利于接受一个理论，并有令人信服的论证，认为在某些情境下，它可以作为传统科学中“无意识地延续性别主义和男性中心主义”的“保护”（1997: 22）。然而，她没有在可重复性危机的背景下专门讨论新颖性。

然而，Giner-Sorolla（2012）在危机背景下讨论了新颖性，并提供了另一种对其价值的观点。他声称，将新颖性用于定义可发表或可资助的内容的原因之一是，研究人员很容易建立并且审稿人和编辑很容易检测到。然而，Giner-Sorolla 认为，仅仅为了新颖性而新颖性可能不应该被重视，实际上应该被认为只是更深层概念（如“推动领域发展的能力”）的一种操作化（567）。Giner-Sorolla 接着指出，这种对重要概念的肤浅操作往往会导致问题，例如使用统计显著性来衡量结果的重要性，或者通过结果与实验者先前期望的契合程度来衡量研究的质量。

价值观与开放科学运动中的规范讨论密切相关。Vazire（2018）和其他人在制定开放科学目标时引用了科学的规范——共同性、普遍性、无私和有组织的怀疑精神，这些规范最初由罗伯特·默顿（1942）提出。每个规范都反映了默顿所倡导的一个价值观，而每个规范可能会受到与之相冲突的反规范的反对，反规范表示与规范相冲突的行为。例如，共同性规范（默顿称之为“共产主义”）反映了合作和科学成果的共同所有权的价值观，因为该规范推荐了这种合作和共同所有权。开放科学的倡导者将这些规范及其所反映的价值观视为开放科学的目标。例如，共同性规范体现在数据共享和开放获取出版上。相比之下，保密的反规范与封闭的盈利出版系统相关联（Anderson 等，2010）。同样，根据其价值评估科学工作支持普遍性规范——即研究主张的评估不应取决于其支持者的社会人口特征。相比之下，根据年龄、地位、机构或发表期刊的指标评估工作反映了特殊主义的反规范。

Vazire（2018）和其他人认为，目前科学实践主要由反规范主导，而转向 Merton 规范是开放科学改革运动的目标。特别是，自利性（与无私性规范相对）激发了 p-hacking 和其他可疑研究实践。同样，保护自己的职业声誉的愿望激发了对他人复制自己工作的抵制（Vazire，2018）。这反过来加强了有组织的教条主义的反规范，而不是有组织的怀疑主义，后者根据 Merton 的说法，涉及“暂时悬挂判断和对信仰的客观审查”（Merton，1973）。

Anderson 等人（2010）的焦点小组和科学家的调查表明，科学家确实希望遵守 Merton 的规范，但当前的科学激励结构使这变得困难。改变科学中的惩罚和奖励体系的结构，以促进共同性、普遍性、无私性和有组织的怀疑主义，而不是它们的反规范，是开放科学改革运动面临的持续挑战。正如 Pashler 和 Wagenmakers（2012）所说：

> 可重复性问题不会那么容易克服，因为它们反映了根深蒂固的人类偏见和激励机制，这些机制塑造了个人和机构的行为。（2012：529）

推广这些价值观和规范的努力引发了激烈的争议。对于《可重复性项目：心理学》和《多实验室项目》的早期回应非常批评，不仅对工作的性质和过程持批评态度。对于开放性的呼吁被解读为不信任的体现，并且试图复制他人的工作被视为个人攻击（例如，Schnail 2014 在其他互联网资源中）。Nosek，Spies 和 Motyl（2012）认为，对于开放性的呼吁不应被解读为不信任：

> 公开我们的研究过程将使我们感到有责任尽力做到正确；而且，如果我们做不到正确，还可以增加他人发现问题并纠正问题的机会。开放性的需要并不是因为我们不值得信任；而是因为我们是人类。（2012：626）

与此相关的交流被称为语气辩论。[]

## 5. 结论

可重复性的主题与当代科学中的动荡时期有关。这一时期要求重新评估支撑科学探究的价值观、激励措施、实践和结构。虽然元科学在某些领域描绘了可重复性的黯淡图景，但也激发了一个平行运动，以加强科学的基础。然而，还有更多的进展需要取得，特别是在理解解决可重复性危机的方法方面。在这方面，未来研究有着富有成果的途径，包括更深入地探索认识论和非认识论价值在科学探究中可以或应该发挥的作用。

<!--md-padding-ignore-begin-->
## Bibliography

* Agnoli, Franca, Jelte M. Wicherts, Coosje L. S. Veldkamp, Paolo Albiero, and Roberto Cubelli, 2017, “Questionable Research Practices among Italian Research Psychologists”, Jakob Pietschnig (ed.), *PLoS ONE*, 12(3): e0172792. doi:10.1371/journal.pone.0172792
* Allen, Peter J., Kate P. Dorozenko, and Lynne D. Roberts, 2016, “Difficult Decisions: A Qualitative Exploration of the Statistical Decision Making Process from the Perspectives of Psychology Students and Academics”, *Frontiers in Psychology*, 7(February): 188. doi:10.3389/fpsyg.2016.00188
* Anderson, Christopher J., Štěpán Bahnik, Michael Barnett-Cowan, Frank A. Bosco, Jesse Chandler, C. R. Chartier, F. Cheung, et al., 2016, “Response to Comment on ‘Estimating the Reproducibility of Psychological Science’”, *Science*, 351(6277): 1037. doi:10.1126/science.aad9163
* Anderson, Melissa S., Emily A. Ronning, Raymond De Vries, and Brian C. Martinson, 2010, “Extending the Mertonian Norms: Scientists’ Subscription to Norms of Research”, *The Journal of Higher Education*, 81(3): 366–393. doi:10.1353/jhe.0.0095
* Atmanspacher, Harald and Sabine Maasen, 2016a, “Introduction”, in Atmanspacher and Maasen 2016b: 1–8. doi:10.1002/9781118865064.ch0
* ––– (eds.), 2016b, *Reproducibility: Principles, Problems, Practices, and Prospects*, Hoboken, NJ: John Wiley & Sons. doi:10.1002/9781118865064
* Baker, Monya, 2016, “1,500 Scientists Lift the Lid on Reproducibility”, *Nature*, 533(7604): 452–454. doi:10.1038/533452a
* Bakker, Marjan, Chris H. J. Hartgerink, Jelte M. Wicherts, and Han L. J. van der Maas, 2016, “Researchers’ Intuitions About Power in Psychological Research”, *Psychological Science*, 27(8): 1069–1077. doi:10.1177/0956797616647519
* Bakker, Marjan and Jelte M. Wicherts, 2011, “The (Mis)Reporting of Statistical Results in Psychology Journals”, *Behavior Research Methods*, 43(3): 666–678. doi:10.3758/s13428-011-0089-5
* Begley, C. Glenn and Lee M. Ellis, 2012, “Raise Standards for Preclinical Cancer Research: Drug Development”, *Nature*, 483(7391): 531–533. doi:10.1038/483531a
* Bem, Daryl J., 2011, “Feeling the Future: Experimental Evidence for Anomalous Retroactive Influences on Cognition and Affect”, *Journal of Personality and Social Psychology*, 100(3): 407–425.
* Benjamin, Daniel J., James O. Berger, Magnus Johannesson, Brian A. Nosek, Eric-Jan Wagenmakers, Richard Berk, Kenneth A. Bollen, et al., 2018, “Redefine Statistical Significance”, *Nature Human Behaviour*, 2(1): 6–10. doi:10.1038/s41562-017-0189-z
* Braude, Stephen E., 1979, *ESP and Psychokinesis. A Philosophical Examination*, Philadelphia: Temple University Press.
* Button, Katherine S., John P. A. Ioannidis, Claire Mokrysz, Brian A. Nosek, Jonathan Flint, Emma S. J. Robinson, and Marcus R. Munafò, 2013, “Power Failure: Why Small Sample Size Undermines the Reliability of Neuroscience”, *Nature Reviews Neuroscience*, 14(5): 365–376. doi:10.1038/nrn3475
* Camerer C.F., et al., 2018, “Evaluating the replicability of social science experiments in *Nature* and *Science* between 2010 and 2015”, *Nature Human Behaviour*, 2: 637–644. doi: 10.1038/s41562-018-0399-z
* Cartwright, Nancy, 1991, “Replicability, Reproducibility and Robustness: Comments on Harry Collins”, *History of Political Economy*, 23(1): 143–155.
* Chambers, Christopher D., 2013, “Registered Reports: A New Publishing Initiative at Cortex”, *Cortex*, 49(3): 609–610. doi:10.1016/j.cortex.2012.12.016
* –––, 2017, *The Seven Deadly Sins of Psychology A Manifesto for Reforming the Culture of Scientific Practice*, Princeton: Princeton University Press.
* Chang, Andrew C. and Phillip Li, 2015, “Is Economics Research Replicable? Sixty Published Papers from Thirteen Journals Say ‘Usually Not’”, *Finance and Economics Discussion Series*, 2015(83): 1–26. doi:10.17016/FEDS.2015.083
* Churchman, C. West, 1948, “Statistics, Pragmatics, Induction”, *Philosophy of Science*, 15(3): 249–268. doi:10.1086/286991
* Collins, Harry M., 1985, *Changing Order: Replication and Induction in Scientific Practice*, London; Beverly Hills: Sage Publications.
* –––, 2016, “Reproducibility of experiments: experiments’ regress, statistical uncertainty principle, and the replication imperative” in Atmanspacher and Maasen 2016b: 65–82. doi:10.1002/9781118865064.ch4
* Cohen, Jacob, 1962, “The Statistical Power of Abnormal-Social Psychological Research: A Review”,, *The Journal of Abnormal and Social Psychology*, 65(3): 145–153. doi:10.1037/h0045186
* –––, 1994, “The Earth Is Round (p<.05)”, *American Psychologist*, 49(12): 997–1003, doi:10.1037/0003-066X.49.12.997
* Cova, Florian, Brent Strickland, Angela Abatista, Aurélien Allard, James Andow, Mario Attie, James Beebe, et al., forthcoming, “Estimating the Reproducibility of Experimental Philosophy”, *Review of Philosophy and Psychology*, early online: 14 June 2018. doi:10.1007/s13164-018-0400-9
* Cristea, Ioana Alina and John P. A. Ioannidis, 2018, “P Values in Display Items Are Ubiquitous and Almost Invariably Significant: A Survey of Top Science Journals”, Christos A. Ouzounis (ed.), *PLoS ONE*, 13(5): e0197440. doi:10.1371/journal.pone.0197440
* Cumming, Geoff, 2012, *Understanding the New Statistics: Effect Sizes, Confidence Intervals, and Meta-Analysis*. New York: Routledge.
* Cumming, Geoff and Robert Calin-Jageman, 2017, *Introduction to the New Statistics: Estimation, Open Science and Beyond*, New York: Routledge.
* Cumming, Geoff, Fiona Fidler, Martine Leonard, Pavel Kalinowski, Ashton Christiansen, Anita Kleinig, Jessica Lo, Natalie McMenamin, and Sarah Wilson, 2007, “Statistical Reform in Psychology: Is Anything Changing?”, *Psychological Science*, 18(3): 230–232. doi:10.1111/j.1467-9280.2007.01881.x
* Di Bucchianico, Marilena, 2014, “A Matter of Phronesis: Experiment and Virtue in Physics, A Case Study”, in *Virtue Epistemology Naturalized*, Abrol Fairweather (ed.), Cham: Springer International Publishing, 291–312. doi:10.1007/978-3-319-04672-3_17
* Dominus, Susan, 2017, “When the Revolution Came for Amy Cuddy”, *The New York Times*, October 21, Sunday Magazine, page 29.
* Douglas, Heather, 2016, “Values in Science”, in Paul Humphreys, *The Oxford Handbook of Philosophy of Science*, New York: Oxford University Press, pp. 609–630.
* Earp, Brian D. and David Trafimow, 2015, “Replication, Falsification, and the Crisis of Confidence in Social Psychology”, *Frontiers in Psychology*, 6(May): 621. doi:10.3389/fpsyg.2015.00621
* Errington, Timothy M., Elizabeth Iorns, William Gunn, Fraser Elisabeth Tan, Joelle Lomax, and Brian A Nosek, 2014, “An Open Investigation of the Reproducibility of Cancer Biology Research”, *ELife*, 3(December): e043333. doi:10.7554/eLife.04333
* Etz, Alexander and Joachim Vandekerckhove, 2016, “A Bayesian Perspective on the Reproducibility Project: Psychology”, Daniele Marinazzo (ed.), *PLoS ONE*, 11(2): e0149794. doi:10.1371/journal.pone.0149794
* Fanelli, Daniele, 2010a, “Do Pressures to Publish Increase Scientists’ Bias? An Empirical Support from US States Data”, Enrico Scalas (ed.), *PLoS ONE*, 5(4): e10271. doi:10.1371/journal.pone.0010271
* –––, 2010b, “‘Positive’ Results Increase Down the Hierarchy of the Sciences”, Enrico Scalas (ed.), *PLoS ONE*, 5(4): e10068. doi:10.1371/journal.pone.0010068
* –––, 2012, “Negative Results Are Disappearing from Most Disciplines and Countries”, *Scientometrics*, 90(3): 891–904. doi:10.1007/s11192-011-0494-7
* Fang, Ferric C., R. Grant Steen, and Arturo Casadevall, 2012, “Misconduct Accounts for the Majority of Retracted Scientific Publications”, *Proceedings of the National Academy of Sciences*, 109(42): 17028–17033. doi:10.1073/pnas.1212247109
* Feest, Uljana, 2016, “The Experimenters’ Regress Reconsidered: Replication, Tacit Knowledge, and the Dynamics of Knowledge Generation”, *Studies in History and Philosophy of Science Part A*, 58(August): 34–45. doi:10.1016/j.shpsa.2016.04.003
* Fidler, Fiona, Mark A. Burgman, Geoff Cumming, Robert Buttrose, and Neil Thomason, 2006, “Impact of Criticism of Null-Hypothesis Significance Testing on Statistical Reporting Practices in Conservation Biology”, *Conservation Biology*, 20(5): 1539–1544. doi:10.1111/j.1523-1739.2006.00525.x
* Fidler, Fiona, Yung En Chee, Bonnie C. Wintle, Mark A. Burgman, Michael A. McCarthy, and Ascelin Gordon, 2017, “Metaresearch for Evaluating Reproducibility in Ecology and Evolution”, *BioScience*, 67(3): 282–289. doi:10.1093/biosci/biw159
* Fiedler, Klaus and Norbert Schwarz, 2016, “Questionable Research Practices Revisited”, *Social Psychological and Personality Science*, 7(1): 45–52. doi:10.1177/1948550615612150
* Fiske, Susan T., 2016, “A Call to Change Science’s Culture of Shaming”, *Association for Psychological Science Observer*, 29(9). [[Fiske 2016 available online](https://www.psychologicalscience.org/observer/a-call-to-change-sciences-culture-of-shaming)]
* Franklin, Allan, 1989, “The Epistemology of Experiment”, in David Gooding, Trevor Pinch, and Simon Schaffer (eds.), *The Uses of Experiment: Studies in the Natural Sciences*, Cambridge: Cambridge University Press, pp. 437–460.
* –––, 1994, “How to Avoid the Experimenters’ Regress”, *Studies in History and Philosophy of Science Part A*, 25(3): 463–491. doi:10.1016/0039-3681(94)90062-0
* Franklin, Allan and Harry Collins, 2016, “Two Kinds of Case Study and a New Agreement”, in *The Philosophy of Historical Case Studies*, Tilman Sauer and Raphael Scholl (eds.), Cham: Springer International Publishing, 319: 95–121. doi:10.1007/978-3-319-30229-4_6
* Fraser, Hannah, Tim Parker, Shinichi Nakagawa, Ashley Barnett, and Fiona Fidler, 2018, “Questionable Research Practices in Ecology and Evolution”, Jelte M. Wicherts (ed.), *PLoS ONE*, 13(7): e0200303. doi:10.1371/journal.pone.0200303
* Freedman, Leonard P., Iain M. Cockburn, and Timothy S. Simcoe, 2015, “The Economics of Reproducibility in Preclinical Research”, *PLoS Biology*, 13(6): e1002165. doi:10.1371/journal.pbio.1002165
* Giner-Sorolla, Roger, 2012, “Science or Art? How Aesthetic Standards Grease the Way Through the Publication Bottleneck but Undermine Science”, *Perspectives on Psychological Science*, 7(6): 562–571. doi:10.1177/1745691612457576
* Gigerenzer, Gerd, 2018, “Statistical Rituals: The Replication Delusion and How We Got There”, *Advances in Methods and Practices in Psychological Science*, 1(2): 198–218. doi:10.1177/2515245918771329
* Gilbert, Daniel T., Gary King, Stephen Pettigrew, and Timothy D. Wilson, 2016, “Comment on ‘Estimating the Reproducibility of Psychological Science’”, *Science*, 351(6277): 1037–1037. doi:10.1126/science.aad7243
* Goldman, Alvin I., 1999, *Knowledge in a Social World*, Oxford: Clarendon. doi:10.1093/0198238207.001.0001
* Gómez, Omar S., Natalia Juristo, and Sira Vegas, 2010, “Replications Types in Experimental Disciplines”, in *Proceedings of the 2010 ACM-IEEE International Symposium on Empirical Software Engineering and Measurement - ESEM ’10*, Bolzano-Bozen, Italy: ACM Press. doi:10.1145/1852786.1852790
* Hackett, B., 2005, “Essential tensions: Identity, control, and risk in research”, *Social Studies of Science*, 35(5): 787–826. doi:10.1177/0306312705056045
* Haller, Heiko, and Stefan Krauss, 2002, “Misinterpretations of Significance: a Problem Students Share with Their Teachers?” *Methods of Psychological Research—Online*, 7(1): 1–20. [[Haller & Kraus 2002 available online](https://www.researchgate.net/publication/27262211_Misinterpretations_of_Significance_A_Problem_Students_Share_with_Their_Teachers)]
* Hartgerink, Chris H.J., Robbie C.M. van Aert, Michèle B. Nuijten, Jelte M. Wicherts, and Marcel A.L.M. van Assen, 2016, “Distributions of *p*-Values Smaller than .05 in Psychology: What Is Going On?”, *PeerJ*, 4(April): e1935. doi:10.7717/peerj.1935
* Hendrick, Clyde, 1991. “Replication, Strict Replications, and Conceptual Replications: Are They Important?”, in Neuliep 1991: 41–49.
* Ioannidis, John P. A., 2005, “Why Most Published Research Findings Are False”, *PLoS Medicine*, 2(8): e124. doi:10.1371/journal.pmed.0020124
* Ioannidis, John P. A., Daniele Fanelli, Debbie Drake Dunne, and Steven N. Goodman, 2015, “Meta-Research: Evaluation and Improvement of Research Methods and Practices”, *PLOS Biology*, 13(10): e1002264. doi:10.1371/journal.pbio.1002264
* Jennions, Michael D. and Anders Pape Møller, 2003, “A Survey of the Statistical Power of Research in Behavioral Ecology and Animal Behavior”, *Behavioral Ecology*, 14(3): 438–445. doi:10.1093/beheco/14.3.438
* John, Leslie K., George Loewenstein, and Drazen Prelec, 2012, “Measuring the Prevalence of Questionable Research Practices With Incentives for Truth Telling”, *Psychological Science*, 23(5): 524–532. doi:10.1177/0956797611430953
* Kaiser, Jocelyn, 2018, “Plan to Replicate 50 High-Impact Cancer Papers Shrinks to Just 18”, *Science*, 31 July 2018. doi:10.1126/science.aau9619
* Keppel, Geoffrey, 1982, *Design and Analysis. A Researcher’s Handbook*, second edition, Englewood Cliffs, NJ: Prentice-Hall.
* Kerr, Norbert L., 1998, “HARKing: Hypothesizing After the Results Are Known”, *Personality and Social Psychology Review*, 2(3): 196–217. doi:10.1207/s15327957pspr0203_4
* Kidwell, Mallory C., Ljiljana B. Lazarević, Erica Baranski, Tom E. Hardwicke, Sarah Piechowski, Lina-Sophia Falkenberg, Curtis Kennett, et al., 2016, “Badges to Acknowledge Open Practices: A Simple, Low-Cost, Effective Method for Increasing Transparency”, Malcolm R Macleod (ed.), *PLOS Biology*, 14(5): e1002456. doi:10.1371/journal.pbio.1002456
* Klein, Richard A., Kate A. Ratliff, Michelangelo Vianello, Reginald B. Adams, Štěpán Bahník, Michael J. Bernstein, Konrad Bocian, et al., 2014, “Investigating Variation in Replicability: A ‘Many Labs’ Replication Project”, *Social Psychology*, 45(3): 142–152. doi:10.1027/1864-9335/a000178
* Lakens, Daniel, Federico G. Adolfi, Casper J. Albers, Farid Anvari, Matthew A. J. Apps, Shlomo E. Argamon, Thom Baguley, et al., 2018, “Justify Your Alpha”, *Nature Human Behaviour*, 2(3): 168–171. doi:10.1038/s41562-018-0311-x
* Longino, Helen E., 1990, *Science as Social Knowledge: Values and Objectivity in Scientific Inquiry*, Princeton: Princeton University Press.
* –––, 1996, “Cognitive and Non-Cognitive Values in Science: Rethinking the Dichotomy”, in *Feminism, Science, and the Philosophy of Science*, Lynn Hankinson Nelson and Jack Nelson (eds.), Dordrecht: Springer Netherlands, 39–58. doi:10.1007/978-94-009-1742-2_3
* –––, 1997, “Feminist Epistemology as a Local Epistemology: Helen E. Longino”, *Aristotelian Society Supplementary Volume*, 71(1): 19–35. doi:10.1111/1467-8349.00017
* Lykken, David T., 1968, “Statistical Significance in Psychological Research”, *Psychological Bulletin*, 70(3, Pt.1): 151–159. doi:10.1037/h0026141
* Madden, Charles S., Richard W. Easley, and Mark G. Dunn, 1995, “How Journal Editors View Replication Research”, *Journal of Advertising*, 24(December): 77–87. doi:10.1080/00913367.1995.10673490
* Makel, Matthew C., Jonathan A. Plucker, and Boyd Hegarty, 2012, “Replications in Psychology Research: How Often Do They Really Occur?”, *Perspectives on Psychological Science*, 7(6): 537–542. doi:10.1177/1745691612460688
* MacCoun, Robert J. and Saul Perlmutter, 2017, “Blind Analysis as a Correction for Confirmatory Bias in Physics and in Psychology”, in *Psychological Science Under Scrutiny*, Scott O. Lilienfeld and Irwin D. Waldman (eds.), Hoboken, NJ: John Wiley & Sons, pp. 295–322. doi:10.1002/9781119095910.ch15
* Martin, B., 1992, “Scientific fraud and the power structure of science”, *Prometheus*, 10(1): 83–98. doi:10.1080/08109029208629515
* Masicampo, E.J. and Daniel R. Lalande, 2012, “A Peculiar Prevalence of *p* Values Just below .05”, *Quarterly Journal of Experimental Psychology*, 65(11): 2271–2279. doi:10.1080/17470218.2012.711335
* Mahoney, Michael J., 1985, “Open Exchange and Epistemic Progress”,, *American Psychologist*, 40(1): 29–39. doi:10.1037/0003-066X.40.1.29
* Meehl, Paul E., 1967, “Theory-Testing in Psychology and Physics: A Methodological Paradox”, *Philosophy of Science*, 34(2): 103–115. doi:10.1086/288135
* –––, 1978, “Theoretical Risks and Tabular Asterisks: Sir Karl, Sir Ronald, and the Slow Progress of Soft Psychology”, *Journal of Consulting and Clinical Psychology*, 46(4): 806–834. doi:10.1037/0022-006X.46.4.806
* Merton, Robert K., 1942 [1973], “A Note on Science and Technology in a Democratic Order”, *Journal of Legal and Political Sociology*, 1(1–2): 115–126; reprinted as “The Normative Structure of Science”, in Robert K. Merton (ed.) *The Sociology of Science: Theoretical and Empirical Investigations*, Chicago, IL: University of Chicago Press.
* Munafò, Marcus R., Brian A. Nosek, Dorothy V. M. Bishop, Katherine S. Button, Christopher D. Chambers, Nathalie Percie du Sert, Uri Simonsohn, Eric-Jan Wagenmakers, Jennifer J. Ware, and John P. A. Ioannidis, 2017, “A Manifesto for Reproducible Science”, *Nature Human Behaviour*, 1(1): 0021. doi:10.1038/s41562-016-0021
* Neuliep, James William (ed.), 1991, *Replication Research in the Social Sciences*, (Journal of social behavior and personality; 8: 6), Newbury Park, CA: Sage Publications.
* Neuliep, James W. and Rick Crandall, 1990, “Editorial Bias Against Replication Research”, *Journal of Social Behavior and Personality*, 5(4): 85–90
* Nosek, Brian A. and Daniël Lakens, 2014, “Registered Reports: A Method to Increase the Credibility of Published Results”, *Social Psychology*, 45(3): 137–141. doi:10.1027/1864-9335/a000192
* Nosek, Brian A., Jeffrey R. Spies, and Matt Motyl, 2012, “Scientific Utopia: II. Restructuring Incentives and Practices to Promote Truth Over Publishability”, *Perspectives on Psychological Science*, 7(6): 615–631. doi:10.1177/1745691612459058
* Nosek, B. A., G. Alter, G. C. Banks, D. Borsboom, S. D. Bowman, S. J. Breckler, S. Buck, et al., 2015, “Promoting an Open Research Culture”, *Science*, 348(6242): 1422–1425. doi:10.1126/science.aab2374,
* Nosek, Brian A., Charles R. Ebersole, Alexander C. DeHaven, and David T. Mellor, 2018, “The Preregistration Revolution”, *Proceedings of the National Academy of Sciences*, 115(11): 2600–2606. doi:10.1073/pnas.1708274114
* Nuijten, Michèle B., Chris H. J. Hartgerink, Marcel A. L. M. van Assen, Sacha Epskamp, and Jelte M. Wicherts, 2016, “The Prevalence of Statistical Reporting Errors in Psychology (1985–2013)”, *Behavior Research Methods*, 48(4): 1205–1226. doi:10.3758/s13428-015-0664-2
* Oakes, Michael, 1986, *Statistical Inference: A Commentary for the Social and Behavioral Sciences*, New York: Wiley.
* Open Science Collaboration (OSC), 2015, “Estimating the Reproducibility of Psychological Science”, *Science*, 349(6251): 943–951. doi:10.1126/science.aac4716
* Oransky, Ivan, 2016, “Half of Biomedical Studies Don’t Stand up to Scrutiny and What We Need to Do about That”, *The Conversation*, 11 November 2016. [[Oransky 2016 available online](http://theconversation.com/half-of-biomedical-research-studies-dont-stand-up-to-scrutiny-and-what-we-need-to-do-about-that-45149)]
* Parker, T.H., E. Main, S. Nakagawa, J. Gurevitch, F. Jarrad, and M. Burgman, 2016, “Promoting Transparency in Conservation Science: Editorial”, *Conservation Biology*, 30(6): 1149–1150. doi:10.1111/cobi.12760
* Pashler, Harold and Eric-Jan Wagenmakers, 2012, “Editors’ Introduction to the Special Section on Replicability in Psychological Science: A Crisis of Confidence?”, *Perspectives on Psychological Science*, 7(6): 528–530. doi:10.1177/1745691612465253
* Peng, Roger D., 2011, “Reproducible Research in Computational Science”, *Science*, 334(6060): 1226–1227. doi:10.1126/science.1213847
* –––, 2015, “The Reproducibility Crisis in Science: A Statistical Counterattack”, *Significance*, 12(3): 30–32. doi:10.1111/j.1740-9713.2015.00827.x
* Radder, Hans, 1996, *In And About The World: Philosophical Studies Of Science And Technology*, Albany, NY: State University of New York Press.
* –––, 2003, “Technology and Theory in Experimental Science”, in Hans Radder (ed.), *The Philosophy of Scientific Experimentation*, Pittsburgh: University of Pittsburgh Press, pp. 152–173.
* –––, 2006, *The World Observed/The World Conceived*, Pittsburgh, PA: University of Pittsburgh Press.
* –––, 2009, “Science, Technology and the Science-Technology Relationship”, in Anthonie Meijers (ed.), *Philosophy of Technology and Engineering Sciences*, Amsterdam: Elsevier, pp. 65–91. doi:10.1016/B978-0-444-51667-1.50007-0
* –––, 2012, *The Material Realization of Science: From Habermas to Experimentation and Referential Realism*, Boston: Springer. doi:10.1007/978-94-007-4107-2
* Rauscher, Frances H., Gordon L. Shaw, and Catherine N. Ky, 1993, “Music and Spatial Task Performance”, *Nature*, 365(6447): 611–611. doi:10.1038/365611a0
* Rauscher, Frances H., Gordon L. Shaw, and Katherine N. Ky, 1995, “Listening to Mozart Enhances Spatial-Temporal Reasoning: Towards a Neurophysiological Basis”, *Neuroscience Letters*, 185(1): 44–47. doi:10.1016/0304-3940(94)11221-4
* Ritchie, Stuart J., Richard Wiseman, and Christopher C. French, 2012, “Failing the Future: Three Unsuccessful Attempts to Replicate Bem’s ‘Retroactive Facilitation of Recall’ Effect”, Sam Gilbert (ed.), *PLoS ONE*, 7(3): e33423. doi:10.1371/journal.pone.0033423
* Rooney, Phyllis, 1992, “On Values in Science: Is the Epistemic/Non-Epistemic Distinction Useful?”, *PSA: Proceedings of the Biennial Meeting of the Philosophy of Science Association*, 1992(1): 13–22. doi:10.1086/psaprocbienmeetp.1992.1.192740
* Rosenthal, Robert, 1979, “The File Drawer Problem and Tolerance for Null Results”, *Psychological Bulletin*, 86(3): 638–641. doi:10.1037/0033-2909.86.3.638
* –––, 1991, “Replication in Behavioral Research”, in Neuliep 1991: 1–39.
* Rosnow, Ralph L. and Robert Rosenthal, 1989, “Statistical Procedures and the Justification of Knowledge in Psychological Science”,, *American Psychologist*, 44(10): 1276–1284. doi:10.1037/0003-066X.44.10.1276
* Rowhani-Farid, Anisa, Michelle Allen, and Adrian G. Barnett, 2017, “What Incentives Increase Data Sharing in Health and Medical Research? A Systematic Review”, *Research Integrity and Peer Review*, 2: 4. doi:10.1186/s41073-017-0028-9
* Rudner, Richard, 1953, “The Scientist Qua Scientist Makes Value Judgments”, *Philosophy of Science*, 20(1): 1–6. doi:10.1086/287231
* Sargent, C.L., 1981, “The Repeatability Of Significance And The Significance Of Repeatability”, *European Journal of Parapsychology*, 3: 423–433.
* Schekman, Randy, 2013, “How Journals like Nature, Cell and Science Are Damaging Science | Randy Schekman”, *The Guardian*, December 9, sec. Opinion, [[Schekman 2013 available online](https://www.theguardian.com/commentisfree/2013/dec/09/how-journals-nature-science-cell-damage-science)]
* Schmidt, Stefan, 2009, “Shall We Really Do It Again? The Powerful Concept of Replication Is Neglected in the Social Sciences”, *Review of General Psychology*, 13(2): 90–100. doi:10.1037/a0015108
* Silberzahn, Raphael,and Uhlmann, Eric L., 2015, “Many hands make tight work: crowdsourcing research can balance discussions, validate findings and better inform policy”, *Nature*, 526(7572): 189–192.
* Simmons, Joseph P., Leif D. Nelson, and Uri Simonsohn, 2011, “False-Positive Psychology: Undisclosed Flexibility in Data Collection and Analysis Allows Presenting Anything as Significant”, *Psychological Science*, 22(11): 1359–1366. doi:10.1177/0956797611417632
* Smith, Daniel R., Ian C.W. Hardy, and Martin P. Gammell, 2011, “Power Rangers: No Improvement in the Statistical Power of Analyses Published in Animal Behaviour”, *Animal Behaviour*, 81(1): 347–352. doi:10.1016/j.anbehav.2010.09.026
* Sovacool, B. K., 2008, “Exploring scientific misconduct: Isolated individuals, impure institutions, or an inevitable idiom of modern science?” *Journal of Bioethical Inquiry*, 5: 271–282. doi: 10.1007/s11673-008-9113-6
* Steel, Daniel, 2010, “Epistemic Values and the Argument from Inductive Risk*”, *Philosophy of Science*, 77(1): 14–34. doi:10.1086/650206
* Stegenga, Jacob, 2018, *Medical Nihilism*, Oxford: Oxford University Press.
* Steinle, Friedrich, 2016, “Stability and Replication of Experimental Results: A Historical Perspective”, in Atmanspacher and Maasen 2016b: 39–68. doi:10.1002/9781118865064.ch3
* Sterling, Theodore D., 1959, “Publication Decisions and Their Possible Effects on Inferences Drawn from Tests of Significance – or Vice Versa”, *Journal of the American Statistical Association*, 54(285): 30–34. doi:10.1080/01621459.1959.10501497
* Sutton, Jon, 2018, “Tone Deaf?”, *The Psychologist*, 31: 12–13. [[Sutton 2018 available online](https://thepsychologist.bps.org.uk/volume-31/march-2018/tone-deaf)]
* Szucs, Denes and John P. A. Ioannidis, 2017, “Empirical Assessment of Published Effect Sizes and Power in the Recent Cognitive Neuroscience and Psychology Literature”, Eric-Jan Wagenmakers (ed.), *PLoS Biology*, 15(3): e2000797. doi:10.1371/journal.pbio.2000797
* Teira, David, 2013, “A Contractarian Solution to the Experimenter’s Regress”, *Philosophy of Science*, 80(5): 709–720. doi:10.1086/673717
* Vazire, Simine, 2018, “Implications of the Credibility Revolution for Productivity, Creativity, and Progress”, *Perspectives on Psychological Science*, 13(4): 411–417. doi:10.1177/1745691617751884
* Wagenmakers, Eric-Jan, Ruud Wetzels, Denny Borsboom, Han L. J. van der Maas, and Rogier A. Kievit, 2012, “An Agenda for Purely Confirmatory Research”, *Perspectives on Psychological Science*, 7(6): 632–638. doi:10.1177/1745691612463078
* Washburn, Anthony N., Brittany E. Hanson, Matt Motyl, Linda J. Skitka, Caitlyn Yantis, Kendal M. Wong, Jiaqing Sun, et al., 2018, “Why Do Some Psychology Researchers Resist Adopting Proposed Reforms to Research Practices? A Description of Researchers’ Rationales”, *Advances in Methods and Practices in Psychological Science*, 1(2): 166–173. doi:10.1177/2515245918757427
* Wasserstein, Ronald L. and Nicole A. Lazar, 2016, “The ASA’s Statement on p-Values: Context, Process, and Purpose”, *The American Statistician*, 70(2): 129–133. doi:10.1080/00031305.2016.1154108

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=scientific-reproducibility). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/scientific-reproducibility/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=scientific-reproducibility&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](http://philpapers.org/sep/scientific-reproducibility/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

* Barba, Lorena A., 2017, “[Science Reproducibility Taxonomy](https://figshare.com/articles/Science_Reproducibility_Taxonomy/5248273)”, Presentation slides for the *2017 Workshop on Reproducibility Taxonomies for Computing and Computational Science*.
* Kelly, Clint, 2017, “Redux: Do Behavioral Ecologists Replicate Their Studies?”, presented at Ignite Session 12, Ecological Society of America, Portland, Oregon, 8 August. [[Kelly 2017 abstract available online](https://eco.confex.com/eco/2017/webprogram/Paper63392.html)]
* McShane, Blakeley B., David Gal, Andrew Gelman, Christian Robert, and Jennifer L. Tackett, 2018, “[Abandon Statistical Significance](http://arxiv.org/abs/1709.07588)”, arXiv.org, first version 22 September 2017; latest revision, 8 September 2018.
* Schnall, Simone, 2014, “[Social Media and the Crowd-Sourcing of Social Psychology](https://www.psychol.cam.ac.uk/cece/blog)”, Blog *Department of Psychology, Cambridge University*, November 18.
* [Tilburg University Meta-Research Center](https://metaresearch.nl/)
* [Meta-Research Innovation Center at Stanford (METRICS)](https://metrics.stanford.edu/)
* [The saga of the summer 2017, a.k.a. ‘the alpha wars’](http://www.barelysignificant.com/post/summersaga/), Barely Significant blog by Ladislas Nalborczyk.
* [2017 American Statistical Association Symposium on Statistical Inference: Scientific Method for the 21st Century: A World Beyond p<0.05](http://ww2.amstat.org/meetings/ssi/2017/conferenceinfo.cfm)
* [Improving Your Statistical Inferences,](https://www.coursera.org/learn/statistical-inferences) David Lakens, 2018, Coursera,
* [StudySwap: A Platform for Interlab Replication, Collaboration, and Research Resource Exchange](https://osf.io/view/StudySwap/), Open Science Framework
* [Collaborative Replications and Education Project (CREP)](https://osf.io/wfc6u/), Open Science Framework
* [Registered Reports: Peer review before results are known to align scientific values and practices](https://cos.io/rr/), Center for Open Science

## Related Entries

[Bayes’ Theorem](https://plato.stanford.edu/entries/bayes-theorem/) | [epistemology: Bayesian](https://plato.stanford.edu/entries/epistemology-bayesian/) | [measurement: in science](https://plato.stanford.edu/entries/measurement-science/) | [operationalism](https://plato.stanford.edu/entries/operationalism/) | [science: theory and observation in](https://plato.stanford.edu/entries/science-theory-observation/) | [scientific knowledge: social dimensions of](https://plato.stanford.edu/entries/scientific-knowledge-social/) | [scientific method](https://plato.stanford.edu/entries/scientific-method/) | [scientific research and big data](https://plato.stanford.edu/entries/science-big-data/)

[Copyright © 2018](https://plato.stanford.edu/info.html#c) by  
Fiona Fidler <[*fidlerfm@unimelb.edu.au*](mailto:fidlerfm%40unimelb%2eedu%2eau)>  
[John Wilcox](https://johnericwilcox.weebly.com/) <[*wilcoxje@stanford.edu*](mailto:wilcoxje%40stanford%2eedu)>
