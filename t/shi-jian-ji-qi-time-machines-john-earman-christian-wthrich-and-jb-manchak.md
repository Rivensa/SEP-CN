# 时间机器 time machines (John Earman, Christian Wüthrich, and JB Manchak)

*首次发表于 2004 年 11 月 25 日；实质性修订于 2020 年 6 月 12 日*

近年来，哲学界普遍认同的观点是，祖父悖论和类似的逻辑难题并不排除利用包含闭合时间曲线的时空来实现时间旅行的可能性。与此同时，物理学家们在半个世纪里一直认为广义相对论与这种时空是相容的，他们对于时间机器在该理论及其量子理论背景下是否可行进行了深入研究。时间机器是一种能够产生闭合时间曲线并实现时间旅行的设备，在其他情况下是不可能存在的。物理学文献中包含了各种关于时间机器的禁止定理，即在物理上可行的假设下，时间机器的运行是不可能的。我们得出结论，目前还没有确凿的禁止定理来反对时间机器的存在。本文所涉及的材料性质使得其内容具有相当技术性质。然而，我们认为哲学家们仍然应该对这方面的文献感兴趣，至少有两个原因。首先，时间机器的主题引发了关于经典和量子引力理论中一些有趣的基础问题；其次，哲学家们可以通过澄清设备被视为时间机器的含义，将这一辩论与其他问题（如彭罗斯的宇宙审查猜想和广义相对论中决定论的命运）联系起来，并消除关于时间旅行悖论地位的一些困惑。本文以尽可能非技术性的方式来解决这些问题，读者可参考相关物理学文献了解详细信息。

---

## 1. 引言：时间旅行与时间机器的区别

时间机器的话题是一部分庞大且不断增长的物理学文献的主题，其中一些已经渗透到了大众和半大众的介绍中。这个话题引发的问题在很大程度上与时间旅行的哲学文献中所讨论的问题不同。最重要的是，所谓的时间旅行悖论在时间机器的物理学文献中并没有起到重要的作用。这些文献将时间旅行的可能性与存在闭合时间样曲线（CTCs）或物质粒子的世界线等同起来，这些世界线是平滑的、未来定向的时间样曲线，具有自交点。由于时间机器指的是能够产生 CTCs 并实现时间旅行的设备，所以时间旅行的悖论对于时间机器的“不可行”结果是无关紧要的，因为这些结果涉及到 CTCs 出现之前发生的事情。在我们看来，这是幸运的，因为时间旅行的悖论只是一种粗糙的方式，用来揭示这样一个事实：将相对论物理学的熟悉局域定律应用于包含 CTCs 的时空背景中，通常需要满足对初始数据的一致性约束，以便将局域解扩展为全局解。这些约束的性质和地位是正在进行讨论的课题。我们不打算在这里推进这个问题的讨论；相反，我们的目的是让读者了解物理学文献中关于时间机器所涉及的问题，并将其与空间和时间哲学以及更一般地与物理学基础的问题联系起来。

悖论制造者可以放心，如果在将焦点从时间旅行本身转移到时间机器上时，一个悖论会消失，那么也会得到一个悖论：如果能够操作产生闭合时间曲线的时间机器设备，那么就有可能改变时空结构，使决定论失败；但是通过削弱决定论，时间机器也削弱了它负责产生闭合时间曲线的主张。然而，正如祖父悖论是一种粗糙的表达方式，这个新悖论也是一种粗糙的方式，表明要明确时间机器的含义将会很困难。这是一个需要科学知识支持的哲学任务，而不是悖论制造。本文将提供这个任务的初步步骤，并指出还有哪些工作需要完成。除了悖论之外，时间机器这个话题的主要收益在于它为经典广义相对论的一些基础问题以及将广义相对论和量子力学结合产生量子引力理论的尝试提供了一条快速路径。我们将在这里指出其中一些问题的形状，但会将技术细节的相关内容推荐给感兴趣的读者阅读。

至少有两种不同的时间机器的一般概念，我们将简称为韦尔斯式和索恩式。在《时间机器》中，H·G·韦尔斯（1931）描述了一个时间机器的科幻典范概念：勇敢的操作员系好安全带，将目标日期（过去或未来）拨入计数器，拉动一个杠杆，然后坐下来，时间会倒回或快进，直到达到目标日期。我们不会讨论韦尔斯式时间机器是否可以在相对论时空框架内实现的问题。因为很快就会变得清楚，最近在物理学文献中备受关注的时间机器是完全不同的一种。这种第二种时间机器最初是由基普·索恩和他的合作者提出的（参见莫里斯和索恩 1988 年；莫里斯、索恩和尤尔特塞弗 1988 年）。这些文章考虑了这样一种可能性，即在不违反广义相对论物理定律的情况下，一个先进的文明可以操纵物质能量的浓度，以产生否则不存在的闭合时间曲线。在他们的例子中，生成“虫洞”被用来产生所需的时空结构。但这只是时间机器可能运作的一种方式，接下来，任何以影响时空结构的方式产生闭合时间曲线的装置都将被称为索恩式时间机器。我们只关注这种类型的时间机器，将韦尔斯式时间机器留给科幻作家。这将令科幻迷们失望，因为索恩式时间机器没有魔法般地将时间旅行者带到构成时间机器操作的事件的过去。对于那些对科学而不是科幻更感兴趣的人来说，这种损失通过现实主义和与当代物理研究的联系而得到了平衡。

在第 2 和第 3 节中，我们研究了在哪些情况下可以认为索恩时间机器在工作。主要困难在于确定使时间机器“产生”或“负责”CTC 出现的条件。我们认为目前还没有令人满意的解决这个困难的方法，因此，广义相对论背景下的时间机器主题有些模糊不清。这个事实并不妨碍在这个主题上取得进展；因为如果一个人的目标是为时间机器建立禁止结果，只需确定时间机器运行的必要条件，然后在关于物理可能性的适当假设下证明无法满足这些必要条件是物理上不可能的。在第 4 节中，我们回顾了一些只依赖于经典广义相对论的禁止结果。第 5 节概述了依赖于量子效应的结果。结论在第 6 节中呈现。

## 2. 什么是（索恩的）时间机器？预备知识

讨论的背景是广义相对论时空（M，gab），其中 M 是一个可微流形，gab 是定义在 M 上的洛伦兹度规。物理学文献中关于时间机器的核心问题是，在这个广义设置中是否有可能操作一个 Thornian 时间机器。这个问题将通过证明代表在广义相对论设置中运作的物理定律的方程的解的定理来解决，或者至少在 Thornian 时间机器的概念被明确阐述之后是这样。不幸的是，在文献中找不到足够和普遍被接受的明确阐述，适合进行所需的数学证明。这既不令人惊讶也不可悲。数学物理学家不会等到某个概念得到最终阐明后才试图证明关于它的定理；事实上，定理证明的过程通常是概念澄清的重要部分。这一道理在广义相对论中的时空奇点概念的历史中得到了很好的说明，这个概念只有在证明了彭罗斯-霍金-格罗奇奇点定理之后才得到了现在的规范定义，而这个定理是在几十年的争论之后得出的，争论的问题是时空奇点是否是爱因斯坦引力场方程解的一般特征[6]。然而，这并不意味着对时间机器感兴趣的哲学家应该只是等待物理学文献中的争论平息；事实上，物理学文献可以从哲学的分析技巧中受益。例如，时间旅行的悖论和时间机器的命运在物理学文献中经常混淆，正如下面将会显现的那样，还存在更微妙的混淆。

关于是否可以观察到索恩时间机器（产生闭合时间曲线）的问题，只有在时空具备至少三个特征时才有意义：时间可定向性、明确的时间定向和无因果关联的过去。为了使闭合时间曲线的概念有意义，时空必须具备时间可定向性（即必须存在一致的时间方向），并且必须选择其中一种可能的时间定向作为时间的方向。非时间可定向性并不是真正的障碍，因为如果给定的广义相对论时空不具备时间可定向性，可以通过转换到一个覆盖时空，得到一个在局部与给定时空相同且具备时间可定向性的时空。如何证明选择其中一种可能的定向作为未来指向，需要解决时间方向问题，这个问题仍然存在活跃的讨论（参见 Callender 2001）。但是为了现在的目的，我们只是假设已经提供了时间定向。然后，CTC（按定义）是一个参数化的闭合时空曲线，其切向矢量在每个点都是未来指向的类时矢量。可以将 CTC 视为某个可能观察者的世界线，其生活历程在小范围内是线性有序的，但在大范围内不是有序的：观察者对“下一个时刻”有一致的体验，以及“下一个”，等等，但最终“下一个时刻”会将她带回她认为是起点的事件。

关于第三个条件——一个因果无害的过去——操作产生 CTC 的设备的可能性问题，假设存在一个时间点之前不存在 CTC。因此，时空旅行文献中备受喜爱的哥德尔时空并不适合作为托尼安时间机器的宿主，因为在这个时空的每个点都存在 CTC。我们通过要求时空具有全局时间切片Σ（即没有边缘的类空超曲面）来明确这个第三个条件；Σ是双面的，并将 M 分为三个部分——Σ本身，Σ过去一侧的 M 部分和Σ未来一侧的 M 部分——并且在Σ过去一侧没有 CTC。这个要求的前两个条款共同意味着时间切片Σ是一个部分柯西面，即Σ是一个时间切片，未来定向类时曲线最多只与其相交一次。

现在假设在没有 CTCs 到其过去的部分 Cauchy 曲面Σ0 上的状态被认为是在机器启动之前的时刻给出宇宙的快照。Thornian 时间机器场景的后续实现要求违反时间顺序的区域 V⊆M，即 CTCs 所追踪的时空区域[11]是非空的，并且位于Σ0 的未来。V≠∅事实上不会对Σ0 上的初始数据产生任何一致性约束，因为根据假设，Σ0 不会被任何类时曲线交叉超过一次，因此，就所谓的时间旅行悖论而言，悖论不会在Σ0 上出现。但是同样地，根据目前的设置，回到Σ0 的过去的选择被排除在外，因为否则Σ0 将不是一个部分 Cauchy 曲面。这只是强调了上面提到的科幻小说中的时间机器粉丝们不会发现当前的讨论背景足够广泛，以包含他们对时间机器运作方式的愿景；他们现在可以停止阅读本文并回到他们的小说中。

![Figure 1 Misner spacetime](https://plato.stanford.edu/entries/time-machine/figure1.jpg)

图 1. Misner 时空

作为这些概念的一个具体例子，考虑(1+1)维的 Misner 时空（见图 1），它展示了 Taub-NUT 时空的一些因果特征，这是爱因斯坦引力场方程的真空解。它满足上面讨论的三个条件。它是时间定向的，并且已经选择了一个时间定向-图中的阴影表示光锥的未来叶片。在部分 Cauchy 曲面Σ0 的过去是 Taub 区域，时空的因果结构如所需的那样平淡无奇。但是在Σ0 的未来，光锥开始“倾斜”，最终导致 NUT 区域中的 CTCs。

现在必须面对的问题是，为了将 CTCs 的出现归因于时间机器的运作，还必须施加哪些进一步的条件。毫不奇怪，答案不仅取决于所讨论的时空结构，还取决于统治时空结构演化的物理定律。如果一个人采取的态度是将“时间机器”这个标签保留给在有限的空间范围内在有限的时间段内运作的设备，那么他将希望施加要求，以确保在Σ0 的未来或其上的时空紧凑区域中发生的事情是 CTCs 的原因。或者一个人可以更加自由，允许这个所谓的时间机器在无限的空间中分布。我们将采取更加自由的立场，因为这样可以避免各种复杂情况，同时仍然足以引出关键点。同样，一个人可以将“时间机器”这个标签保留给以某种指定方式操纵质量-能量浓度的设备。例如，基于哥德尔时空——其中物质无处不在地旋转，每个时空点都通过 CTC——人们可能会猜测，将适当形状的有限质量浓度设置为足够快速旋转将导致 CTCs 的出现。但是，为了证明一般性的否定结果，最好以更抽象的方式进行。将对部分柯西面Σ0 的条件视为时间机器运作的指令。设备的运作细节——它是否在时空的有限区域内运作，它是否通过将物质设置为旋转等等——可以暂时搁置。然而，必须解决的问题是，从Σ0 上的状态演化出的过程是否可以被视为随后出现 CTCs 的原因。

## 3. 何时可以将一个所谓的时间机器归责于 CTCs 的出现？

最明显的方法是将“负责”解释为因果决定论的意义。但在当前情境中，这种方法很快陷入了死胡同。因为如果 CTC 存在于Σ0 的未来，它们不是由Σ0 上的状态因果决定的，因为如果时间旅行区域 V 是非空的，则位于Σ0 的未来依赖域 D+(Σ0)的外部，而相对论物理的场方程从Σ0 上的状态唯一地确定事物的状态。图 1 的玩具模型说明了这一点。标有 H+(Σ0)的表面被称为Σ0 的未来 Cauchy 地平线。它是 D+(Σ0)的未来边界，它将在Σ0 上的状态决定条件的部分与不决定条件的部分分开。正如所宣传的，图 1 模型中的 CTC 位于 H+(Σ0)之外。

![Figure 2 DeutschPolitzer spacetime](https://plato.stanford.edu/entries/time-machine/figure2.jpg)

图 2. Deutsch-Politzer 时空

因此，如果要使 Thornian 时间机器的运作成为可能，必须使用比因果决定论更弱的条件来捕捉Σ0 上的状态对 CTC 的后续发展负有责任的意义。鉴于因果决定论的失败，似乎最好的要求是 V 区域与未来依赖域 D+(Σ0)“相邻”。以下是对这种相邻条件的初步尝试。考虑具有时间旅行区域 V 中未来端点但没有过去端点的因果曲线。这样的曲线可能永远不会离开 V 区域；但是如果它离开了，要求它与Σ0 相交。但是，这个要求太强了，因为它完全排除了 Thornian 时间机器。对于这种类型的曲线要达到Σ0，它必须与 H+(Σ0)相交，但是一旦它到达 H+(Σ0)，它可以无限地向过去延伸而不与Σ0 相交，因为 H+(Σ0)的生成元是过去无限的零测地线，永远不会与Σ0 相交。通过将问题的要求弱化为以时间曲线而不是因果曲线来重新表述，可以克服这个困难。现在，满足弱化要求的候选时间机器时空集合是非空的，正如图 1 所示的时空再次说明的那样。但是，弱化的要求太弱了，正如 Deutsch-Politzer 时空的（1+1）维版本所示（见图 2），该时空是通过从二维闵可夫斯基时空中删除点 p1-p4，然后将条带粘合在一起构建而成。从 Deutsch-Politzer 时空的时间旅行区域 V 中出现的每条过去无限的时间曲线都会与Σ0 相交。但是，这个时空不是一个合理的时间机器时空的候选。直到Σ0（可以尽可能靠近 V）为止，这个时空与空的闵可夫斯基时空完全相同。 如果闵可夫斯基时空相应部分的状态不负责 CTC 的发展——因为闵可夫斯基时空中没有 CTC——那么如何能够将德意志-波利策时空部分直至时间Σ0 的状态归咎于未来出现的 CTC 呢？

删除点 p1-p4 意味着德意志-波利策时空在某种意义上是奇异的，即在测地线上不完备。[16]要求时间机器承载的时空是测地线完备的太过严苛。而且无论如何，德意志-波利策的这个问题可以通过以下技巧解决。将德意志-波利策时空的平坦洛伦兹度规ηab 乘以一个标量函数 j(x,t)>，得到一个新的度规η'ab:= j ηab，它与原度规保持共形，因此具有与原度规完全相同的因果特征。但是，如果选择使共形因子 j 在接近缺失点 p1-p4 时“膨胀”，则得到的时空是测地线完备的——直观上，奇点已被推至无穷远处。

一种更微妙的排除 Deutsch-Politzer 时空的方法是关注 H+(Σ0)的生成器。到目前为止，对 Thornian 时间机器的规定意味着 H+(Σ0)的生成器不能与Σ0 相交。但是除此之外，还可以要求这些生成器不“从奇点出现”并且不“来自无穷远”，这足以排除 Deutsch-Politzer 时空及其共形表兄弟作为合法的时间机器时空的候选者。更准确地说，我们可以强加史蒂芬·霍金（1992a，b）所称的 H+(Σ0)紧致生成的要求；即，生成 H+(Σ0)的过去无穷远零测地线，如果延伸到足够远的过去，将落入并保持在时空的紧致子集中。显然，图 1 的时空满足霍金的要求-因为在这种情况下，H+(Σ0)本身就是紧致的-但是同样显然，图 2 的时空（无论是否经过共形修正）都不满足。

强加一个紧致生成的未来 Cauchy 地平面的要求不仅具有排除一些不适合的候选时间机器时空的负面优点，还具有积极的优点。很容易证明，如果 H+(Σ0)是紧致生成的，则在 H+(Σ0)上违反了强因果性条件，这意味着直观上，在 H+(Σ0)附近几乎存在闭合的因果曲线。[17]这种违反可以被视为在Σ0 上种下了 CTC 的种子，并且在达到 H+(Σ0)时它们已经准备好开花。

然而，我们仍然无法保证，如果时间闭合曲线（CTCs）在Σ0 的未来出现，那么Σ0 上的状态就是造成这种出现的原因。当然，我们已经知道，我们无法得到确定性因果关系的铁证，即Σ0 上的状态对于所有具体情况下的实际出现负有责任。但我们可能希望能够保证，Σ0 上的状态对于一些 CTCs 的出现负有责任-无论是实际的 CTCs 还是其他的 CTCs。这种差异需要一些解释。因果决定论的失败可以用未来世界历史“分支”的形象来形容，不同的分支代表了与实际过去和物理定律相容的Σ0（依赖域）的不同可能未来。在当前情况下也是如此：如果 H+（Σ0）≠∅，那么通常会有不同的方法来扩展 D+（Σ0），所有这些方法都与广义相对论物理定律相容。但是，如果所有这些扩展中都存在 CTCs，即使 CTCs 的细节可能在不同的扩展中有所不同，那么Σ0 上的状态就可以被认为是后来 CTCs 发展的原因。

由 Krasnikov（2002 年，2003 年[其他互联网资源]，2014a）提出的一个定理似乎证明了没有相对论时空可以被视为体现了 Thornian 时间机器的理解。在 Krasnikov 之后，我们可以说，如果对于任意时空（M，gab）的任意开覆盖{Vα}，在（M，gab）中 C 成立当且仅当对于所有α，在（Vα，gab|Vα）中 C 成立，那么时空条件 C 是局部的。希望对于合理的物理时空施加的局部条件的例子包括爱因斯坦的引力场方程和所谓的能量条件，这些条件限制了应力能张量 Tab 的形式。下面将涉及到的后者的一个例子是弱能量条件，它表示能量密度是非负的。[18]爱因斯坦的场方程（不包括宇宙常数）要求 Tab 与爱因斯坦张量成比例，而爱因斯坦张量是度量和其导数的泛函。如果后者与前者的一个开放真子集同构，则称 C-时空（M'，g'ab）是 C-时空（M，gab）的 C-扩展；如果它允许一个 C-扩展，则称（M，gab）是 C-可扩展的，否则称为 C-极大的。（当然，C 可能是空条件。）Krasnikov 的定理表明，每个 C-时空（M，gab）都有一个 C-极大扩展（Mmax，gmaxab），其中（Mmax，gmaxab）中的所有 CTC 都位于（Mmax，gmaxab）中 M 的图像的时间顺序之前。因此，从一些候选时空（M，gab）开始，将定理应用于（D+（Σ0），gab|D+（Σ0））。得出结论，无论候选时空需要满足什么局部条件，D+（Σ0）都有满足所述局部条件但不包含 CTC 到Σ0 未来的扩展。因此，候选时空未能展示出上述关键特征，这是支持Σ0 上的条件导致 CTC 发展的必要条件。 因此，看起来克拉斯尼科夫的定理有效地禁止了时间机器。

时间机器的操作者不需要在克拉斯尼科夫定理面前屈服。回想一下，指定索恩时间机器成功操作的条件的主要困难在于标准的因果决定论不适用于 CTC 的产生。但是因果决定论可能因与 CTC 或相对论时空的其他非因果特征无关的原因而失败，因此在讨论时间机器前，确保这些失败模式已被排除似乎是公平的。为了集中讨论问题的失败模式，考虑爱因斯坦场方程的真空解（Tab≡0）。设(M,gab)和(M′,g′ab)是两个这样的解，Σ⊂M 和Σ′⊂M′是它们各自时空的类空超曲面。假设存在一个同构Ψ，将Σ的某个邻域 N(Σ)映射到Σ′的某个邻域 N′(Σ′)。我们希望决定论能够保证，Ψ是否可以扩展为从 D+(Σ)到 D+(Σ′)的同构？为了看出答案是否定的，从任意真空爱因斯坦方程的解(M,gab)开始，切除位于 N(Σ)未来且在 D+(Σ)内的一组闭合点。将手术改变的流形称为 M∗，将 gab 在 M∗上的限制称为 g∗ab。那么(M∗,g∗ab)也是真空爱因斯坦方程的解。但是显然，解(M,gab)和(M∗,g∗ab)违反了决定论应该保证的条件，因为Ψ不能扩展为从 D+(Σ)到 D+(Σ∗)的同构。或许看起来，上述考虑中要求所考虑的时空是极大的，已经排除了具有“空洞”的时空。但是，尽管极大性确实排除了刚刚构造的手术切除时空，但它不能保证在决定论到达起跑线之前，时空是没有空洞的。 （M，gab）在相关意义上是无洞的要求是，如果Σ⊂M 是一个类空超曲面，则不存在一个时空（M'，g'ab）和一个等度嵌入Φ将 D+（Σ）嵌入 M'中，使得Φ（D+（Σ））是 D+（Φ（Σ））的真子集。罗伯特·格罗奇（Robert Geroch）（1977 年，87 页）提出了这个定义的定理，他对此负责，该定理断言，如果Σ⊂M 和Σ'⊂M'是无洞时空（M，gab）和（M'，g'ab）中的类空超曲面，并且存在一个等度同构Ψ：M→M'，那么Ψ确实可以扩展为 D+（Σ）和 D+（Σ'）之间的等度同构。因此，无洞性排除了我们在时间机器讨论中希望排除的一种重要的决定论失败模式。可以证明，无洞性不是由极大性所蕴含的。[19]正是这个差距给了想成为时间机器操作者一些希望，因为 Krasnikov 的构造产生的极大 CTC-free 扩展并不总是无洞的（Manchak 2009b）。但是 Krasnikov（2009）已经证明了 Geroch（1977）的定义太强了：闵可夫斯基时空无法满足它！因此，已经构建了更合适的无洞性定义的替代形式（Manchak 2009a，Minguzzi 2012）。

因此，我们提出，在广义相对论理论的背景下，关于索恩时间机器运行的一个明确意义是以下断言：广义相对论物理定律允许存在包含部分柯西面Σ0 的解，使得Σ0 的过去没有任何封闭时间曲线（CTCs），但满足_______的 D+(Σ0)的任何延拓都包含 CTCs（其中空白处填入某种“无洞”条件）。相应地，证明时间机器的物理不可能性将采取以下形式：证明这个断言对于实际物理定律是错误的，这些定律包括爱因斯坦的场方程加上能量条件，可能还包括一些额外的限制。而证明索恩时间机器相关概念的空洞性将采取以下形式：证明这个断言独立于物理定律的细节是错误的，只要它们采取 Tab 和 gab 的局部条件形式。

是否存在“无洞”条件，可以显示时间机器的提出概念并非空洞？让 J+(p)表示 p 的因果未来，定义为 M 中可以通过 M 中的未来定向因果曲线从 p 到达的所有点的集合。类似地，因果过去 J-(p)也有类似的定义。现在，我们说一个时空(M,gab)是 J 闭合的，如果对于 M 中的每个 p，集合 J+(p)和 J-(p)在拓扑上是闭合的。可以验证，在许多人为毁坏的例子中（例如，从流形中移除一个点的闵可夫斯基时空），J 闭合性会失败。有一段时间，人们认为在这种无洞条件下存在时间机器（Manchak 2011a）。但事实证明这是不正确的；事实上，最近的研究结果表明，任何三维或更高维的 J 闭合时空(M,gab)，其中违反时间顺序的区域 V≠M 必须是强因果的，因此无法产生 CTC（Hounnonkpe 和 Minguzzi 2019）。退一步说，也许还有其他无洞条件可以用来证明时间机器的提出概念并非空洞。但即使这样的项目取得成功，Manchak（2014a，2019）已经表明，如果有意愿的话，时间机器存在结果可以自然地重新解释为“洞机器”存在结果。与假设时空没有洞并且然后展示某些初始条件负责产生 CTC 不同，我们可以同样地假设没有 CTC，然后展示某些初始条件负责产生洞。鉴于这些无洞假设对于时间机器倡导者的重要性，最近的研究工作集中在是否在某种意义上这些假设是物理上合理的（Manchak 2011b，2014b）。这仍然是一个未解之谜。

另一个未解之谜是，比 Misner 更符合物理实际的时空是否也允许时间机器的运作，以及时间机器时空在特定时空理论（如广义相对论）中是否普遍存在。如果时间机器时空被证明是高度非普遍的，时间机器的拥护者可以退而求其次，采用类似于概率因果关系的弱化概念，即时间机器的运作会增加封闭时间曲线（CTCs）出现的概率。由于广义相对论本身不涉及概率，概率必须通过手动引入，可以通过将其插入到理论模型中（即在目标语言层面修改理论），或者通过在模型集合上定义度量（即在元语言层面修改理论）来实现。由于前者会改变理论的性质，因此只考虑后者。解释时间机器作为封闭时间曲线出现的概率因果关系的项目将采取以下形式。首先，在没有 CTCs 的部分柯西面的模型集合上定义一个归一化度量。然后证明，在部分柯西面的未来存在 CTCs 的模型子集具有非零度量。接下来，确定部分柯西面上或附近的一系列条件，这些条件自然地被解释为设定一个可能是导致 CTCs 的概率性因果关系的装置，并证明满足这些条件的模型子集具有非零度量。最后，证明在后者子集上进行条件化会增加前者子集的度量。假设这个形式化的推导可以成功进行，仍然需要证明这些度量是客观机会的依据。 这项任务在宇宙学背景下尤为艰巨，因为目前主流的客观机会解释都不适用。频率解释因为 CTC 的发展可能是一种非重复的现象而变得牵强；而倾向解释同样牵强，因为除了关于造物主在宇宙飞镖板上投掷飞镖的故事之外，没有机会机制来产生宇宙模型。

我们得出结论，即使在对因果关系的概率解释存在普遍疑虑的情况下，对时间机器采用概率观念的诉诸至少在经典广义相对论的背景下是一种绝望的伸展。在引力的量子理论中，如果理论本身提供了相关状态之间的转换概率，那么对时间机器采用概率观念可能是合适的。但对这一前景的评估必须等到量子引力理论可用时才能进行。

## 4. 在经典广义相对论中，（索恩的）时间机器的不可行结果

为了理解旨在证明时间机器无法实现的物理文献，将这些努力视为证明时间顺序保护定理的更广泛项目的一部分是有帮助的，而这又是证明宇宙审查定理的更大项目的一部分。为了解释这一点，我们从宇宙审查开始，然后逆向工作。

![Figure 3 A bad choice of initial value surface](https://plato.stanford.edu/entries/time-machine/figure3.jpg)

图 3. 初始值面的不良选择

为了简单起见，集中讨论真空解（Tab≡0）对爱因斯坦场方程的初值问题。从一个配备了数量的三维流形Σ开始，当Σ作为时空的类空子流形嵌入时，这些数量成为真空场方程的初值数据。与初值数据相对应，存在一个唯一的[20]最大发展（M，gab），其中（嵌入的）Σ的图像是一个柯西面[21]。然而，这个解可能不是最大的简单形式，即可能可以将其等距地嵌入为更大时空的一部分，而这个时空本身可能是场方程的真空解；如果是这样，Σ将不是扩展时空的柯西面，该时空不是全局双曲时空[22]。这种情况可能是由于初值超曲面的选择不当，如图 3 所示，将Σ取为（1+1）维闵可夫斯基时空的指示类空双曲面。但是，更有趣的是，这种情况可能是因为爱因斯坦方程允许各种病态现象，统称为“裸奇点”，从规则的初值数据中发展而来。彭罗斯著名的宇宙审查猜想的强形式提出，与爱因斯坦场方程一致，这种病态现象不会在物理上合理的条件下出现，或者导致这种病态的条件在所有场方程解的空间中是高度非一般的。在陈述和证明这个猜想的精确版本方面已经取得了一些进展[23]。

强宇宙审查原则被违反的一种方式是通过非因果特征的出现。回到 Misner 时空的例子（图 1），直到 H+（Σ0）的时空是真空爱因斯坦方程的唯一最大发展，其中Σ0 是一个柯西曲面。但是这个发展是可延展的，在图 1 所示的延展中，由于 CTC 的存在，发展的全局双曲性丧失。然后，时间顺序保护猜想可以被解释为宇宙审查猜想的一个子猜想，大致意思是，与爱因斯坦场方程一致，CTC 不会在物理上合理的条件下出现，或者这些条件在所有场方程解的空间中是高度非一般的。时间机器的无法实现结果是处理由时间机器制造的 CTC 情况的时间顺序保护定理的特殊形式。另一方面，一个非常普遍的时间顺序保护定理将自动为时间机器提供无法实现结果，无论如何理解这个概念，而证明强宇宙审查将自动施加时间顺序保护。

在经典广义相对论理论的背景下，关于时间机器的最广泛讨论的时间保护定理/不可行结果是由霍金（1992a）提出的。在陈述结果之前，首先要注意的是，独立于爱因斯坦场方程和能量条件，如果其未来的柯西地平面 H+(Σ)是紧致的，那么部分柯西面Σ必须是紧致的（参见霍金 1992a 和 Chrusciel 和 Isenberg 1993）。然而，如果仅要求 H+(Σ)是紧致生成的而不是紧致的，那么几何上允许Σ是非紧致的。但是霍金所展示的是，通过施加爱因斯坦场方程和弱能量条件，这种几何上的可能性被排除了。因此，如果Σ0 是一个部分柯西面，代表着在 Thornian 时间机器启动之前或启动时的情况，并且如果看到 Thornian 时间机器工作的一个必要条件是 H+(Σ0)是紧致生成的，那么根据爱因斯坦场方程和弱能量条件，Thornian 时间机器不能在一个空间开放的宇宙中运行，因为Σ0 必须是紧致的。

这个无法实现的结果并不涉及图 1 所示的情况。Taub-NUT 时空是爱因斯坦场方程的真空解，因此弱能量条件自动满足，而 H+(Σ0)是紧致的，更是紧致生成的。霍金的定理并没有被否定，因为Σ0 是紧致的。同样，该定理也没有涉及在空间闭合的宇宙中操作 Thornian 时间机器的可能性。为了填补这个空白，霍金证明了当Σ0 是紧致的且 H+(Σ0)是紧致生成的时，爱因斯坦场方程和弱能量条件共同保证了 H+(Σ0)的零测地线生成器的收敛性和剪切性必须消失，他解释这意味着没有观察者可以穿过 H+(Σ0)进入违反时间顺序的区域 V。但是，这个结果只表明，假设霍金的解释是正确的，操作时间机器的观察者不能利用它产生的 CTC。

对于霍金的无法结果在开放宇宙中的有效性存在两个怀疑的来源。第一个源于经典相对论物质场引起的应力-能量张量可能违反弱能量条件（参见 Vollick 1997 和 Visser 和 Barcelo 2000）。[24] 第二个源于霍金的定理仅作为时间机器的潜在无法结果而起作用，因为 H+（Σ0）是紧致生成的关键条件被认为是这种机器运行的必要条件。但是回顾过去，这个条件的动机似乎已经破裂。正如前一节所讨论的，如果爱因斯坦场方程和能量条件蕴含 D+（Σ0）的所有无洞扩展都包含 CTC，则可以合理地看到 Thornian 时间机器在工作，而不管 H+（Σ0）是否紧致生成。当然，仍然需要建立存在这种蕴含的情况。如果事实证明没有这样的情况，那么 Thornian 时间机器的前景将受到严重打击，但原因与霍金的定理无关。另一方面，如果确实存在这样的情况，那么我们的猜想是，即使 H+（Σ0）的某些生成元来自奇点或无穷远，它们仍然存在，因此 H+（Σ0）不是紧致生成的。[25]

## 5. 量子引力中的无法结果

可以区分引力中的三个量子参与程度。第一程度被称为弯曲时空上的量子场论，简单地从广义相对论理论中提取一个时空，然后研究在这个背景时空上量子场的行为。Unruh 效应预测了黑洞附近自由标量量子场的热化，属于这个范围。第二程度的参与被称为半经典量子引力，试图通过计算量子场对时空度规的反作用来计算在某个适当的量子态|Ψ⟩中的应力能张量⟨Ψ∣Tab∣Ψ⟩的期望值，并将该值代入爱因斯坦场方程中。霍金对黑洞辐射的著名预测属于这个范围。第三程度的参与试图以真正的引力量子理论的方式量子化引力自由度。目前，环路量子引力和弦理论是主要的研究计划，旨在实现这个目标。

第一度量子纠缠，即使没有打开通往时间机器的 Thornian 之门，至少似乎消除了一些障碍，因为众所周知，量子场导致了在经典广义相对论理论的设定中使用的能量条件的违反，以证明时间保护定理和时间机器的不可行结果。然而，第二度量子纠缠似乎至少在最初时关闭了大门。直观的想法是这样的。从一个广义相对论时空开始，其中 CTCs 在 H+（Σ）的未来发展（通常称为“时间顺序地平线”）的某个适当的部分 Cauchy 表面Σ。发现在这个时空背景上的量子场的传播是这样的，当从过去接近 H+（Σ）时，⟨Ψ∣Tab∣Ψ⟩“爆炸”。得出结论，时空度规的反作用产生了无界曲率，这有效地切断了否则会导致 CTCs 的未来发展。这些直觉在几个模型中的详细计算部分得到了证实。但最终发现了一些例外情况，在这些例外情况中，反作用在 H+（Σ）附近仍然可以任意小。[29]这似乎为 Thornian 时间机器留下了一丝机会。

但是，Kay，Radzikowski 和 Wald（1997）的一个结果再次扭转了命运。他们的定理的细节在这里太技术性，无法回顾，但是论证的结构很容易理解。对⟨Ψ∣Tab∣Ψ⟩的天真计算会导致无穷大，必须减去这些无穷大才能产生具有有限值的重整化期望值⟨Ψ∣Tab∣Ψ⟩R。标准的重整化过程使用了一个极限过程，只有在某个条件成立时，这个过程在数学上是明确定义的。[30] KRW 定理表明，这个条件在 H+（Σ）上被违反，因此，应力-能量张量的期望值在时间顺序地平线上是没有明确定义的。

虽然 KRW 定理对于半经典量子引力无疑具有基本重要性，但它并不能作为 Thornian 时间机器的有效无法实现结果。首先，该定理假设与霍金的时间保护定理一致，即 H+(Σ)是紧致生成的，我们再次重申，远非清楚这一假设对于观察到 Thornian 时间机器的运作是必要的。即使接受了紧致生成的 H+(Σ)作为时间机器的必要条件，第二个更根本的保留也适用。KRW 定理作为一个无法实现结果，通过提供一个可疑的荒谬推论来发挥作用：大致上，如果你试图操作一个 Thornian 时间机器，你最终将使半经典量子引力失效。但是，半经典量子引力从来都不被视为真正的引力量子理论，它的崩溃预计将在普朗克尺度物理发挥作用时显现出来。Visser（1997 年，2003 年）的研究结果强调了这种担忧，即在违反时间顺序的模型中，超普朗克尺度的物理现象可能在达到 H+(Σ)之前就会发生。

因此，似乎如果某些量子机制要作为时间顺序保护的基础，它必须在量子参与重力的第三层次中找到。环形量子引力和弦理论都证明了能够治愈经典广义相对论理论中的某些曲率奇点。但据我们所知，没有证明这两种量子引力方法中的任何一种能够摆脱爱因斯坦场方程各种解所展示的非因果特征。构建一个完整的量子引力理论的另一种方法是通过从因果集合中构建出空间时间的普朗克尺度结构来捕捉它。[31]由于这些集合必须是无环的，即因果集合中的任何元素都不能因果地先于自己，因此封闭时间曲线被先验地排除。实际上，Malament（1977）的一个定理表明，任何只编码了时空的因果结构的普朗克尺度方法，无论是在平滑的经典时空中还是在它们的量子对应物中，都不能允许封闭时间曲线的存在。[32]

总之，利用量子参与的前两个层次的现有无法结果并不令人信服，而第三个层次的参与还不够成熟，无法做出有用的断言。然而，关于在低维超对称弦理论的时间旅行可能性的文献正在迅速增长。有关这些最新结果的综述以及关于环形量子引力中时间旅行者抱负的命运的讨论，请参阅 Smeenk 和 Wüthrich（2010）。

## 6. 结论

霍金认为：“似乎存在一个时间顺序保护机构，阻止了封闭时间曲线的出现，从而使宇宙对历史学家来说是安全的”（1992a，603 页）。他可能是对的，但迄今为止，没有令人信服的论据表明这样一个机构存在于经典广义相对论或半经典量子引力中。而且现在判断这个机构是否存在于环形量子引力或弦理论中还为时过早。但即使霍金的观点被证明是错误的，即物理定律并不支持时间顺序保护机构，仍然可能存在一种反时间机器机构。因为可能会发现，虽然物理定律不会阻止封闭时间曲线的发展，但也不会使得封闭时间曲线的出现归因于任何可能的时间机器的运作。我们认为，在经典广义相对论中，如果能证明对于任何满足爱因斯坦场方程和能量条件，并且具有一个部分柯西面Σ0，其未来存在封闭时间曲线的模型，存在不包含Σ0 未来的封闭时间曲线的 D+(Σ0)的无洞扩展，那么就会产生对后者的强烈假设。毫无疑问，对于一个设备“负责”封闭时间曲线的发展有其他的理解方法。探索这些替代方法是哲学家可以希望对一个持续进行的讨论做出贡献的地方，而这个讨论迄今为止主要由物理学界进行。参与这个讨论意味着哲学家必须放弃对时间旅行悖论进行逻辑上的体操活动，而是投入到物理学基础的艰苦但（我们相信）有回报的研究中。

时间机器可能永远不会见到阳光，这可能是基于基本物理定律的原则性原因。但即使各种相关理论中的数学定理成功地证明了时间机器的不可能性，理解为什么无法构建时间机器将为物理学基础问题提供启示。正如我们在第 4 节中所讨论的，例如，在广义相对论中寻找时间机器应被解释为研究彭罗斯宇宙审查猜想命运的核心问题。这个猜想可以说是广义相对论中最重要的未解问题。同样，如第 5 节所讨论的，与时间机器各个方面相关的数学定理为寻找量子引力理论提供了相关结果。总之，研究操作时间机器的可能性不是一种科学上的边缘或轻浮的周末活动，而是探索经典和量子引力理论基础的有用方式。

## Bibliography

* Arntzenius, F. and T. Maudlin, 2009, “Time Travel and Modern Physics,” in E.N. Zalta (ed.), *The Stanford Encyclopedia of Philosophy* (Spring 2009 Edition), URL = <[Time Travel and Modern Physics (Stanford Encyclopedia of Philosophy/Spring 2009 Edition)](https://plato.stanford.edu/archives/spr2009/entries/time-travel-phys/)>.
* Brightwell, G., H.F. Dowker, R.S. Garcia, J. Henson, and R.D. Sorkin, 2003, “‘Observables’ in causal set cosmology,” *Physical Review D*, 67: 08403. [[Preprint available online](http://www.arxiv.org/abs/gr-qc/0210061/).]
* Callender, C., 2001, “Thermodynamic Asymmetry in Time,” in E.N. Zalta (ed.), *The Stanford Encyclopedia of Philosophy* (Spring 2001 Edition), URL = <[Thermodynamic Asymmetry in Time (Stanford Encyclopedia of Philosophy/Winter 2001 Edition)](https://plato.stanford.edu/archives/win2001/entries/time-thermo/)>.
* Chrusciel, P.T. and J. Isenberg, 1993, “Compact Cauchy Horizons and Cauchy Surfaces,” in B.L. Hu and T.A. Jacobson (eds.), *Papers in Honor of Dieter Brill: Directions in General Relativity* (Volume 2), Cambridge: Cambridge University Press, pp. 97–107.
* Davies, P., 2002a, *How to Build a Time Machine*, London: Viking Penguin.
* –––, 2002b, “How to Build a Time Machine,” *Scientific American*, 287(3): 50–55.
* Deutsch, D., 1991, “Quantum Mechanics Near Closed Timelike Lines,” *Physical Review D*, 44: 3197–3217.
* Earman, J., 1995a, *Bangs, Crunches, Whimpers, and Shrieks: Singularities and Acausalities in Relativistic Spacetimes*, New York: Oxford University Press.
* –––, 1995b, “Recent Work on Time Travel,” in S.F. Savitt (ed.), *Time’s Arrow Today: Recent Physical and Philosophical Work on the Direction of Time*, Cambridge: Cambridge University Press, pp. 268–310.
* –––, 1995c, “Outlawing Time Machines: Chronology Protection Theorems,” *Erkenntnis*, 42: 125–139.
* –––, 1999, “The Penrose-Hawking Singularity Theorems: History and Implications,” in H. Goenner, J. Renn, and T. Sauer (eds.), *The Expanding Worlds of General Relativity*, Einstein Studies, Vol. 7, Boston: Birkhäuser, pp. 235–267.
* Earman, J., C. Smeenk, and C. Wüthrich, 2009, “Do the Laws of Physics Forbid the Operation of Time Machines?” *Synthese*, 169: 91–124. [[Preprint available online](http://philosophy.ucsd.edu/faculty/wuthrich/pub/2009Synthese.pdf)]
* Geroch, R., 1977, “Prediction in General Relativity,” in J. Earman, C. Glymour, and J. Stachel (eds.), *Foundations of Spacetime Theories* (Minnesota Studies in the Philosophy of Science: Volume VIII), Minneapolis, MN: University of Minnesota Press, pp. 81–93.
* Gott, R., 2001, *Time Travel in Einstein’s Universe*, New York: Houghton Mifflin.
* Greene, B., 2003, *The Elegant Universe*, New York: W. W. Norton.
* Hawking, S.W., 1992a, “Chronology Protection Conjecture,” *Physical Review D*, 46: 603–611.
* –––, 1992b, “The Chronology Protection Conjecture,” in H. Sato and T. Nakamura (eds.), *Proceedings of the Sixth Marcel Grossmann Meeting on General Relativity*, Singapore: World Scientific, pp. 3–13.
* –––, 2001, “Chronology Protection: Making the World Safe for Historians,” in S.W. Hawking et al. (eds.), *The Future of Spacetime*, New York: W.W. Norton, pp. 87–108.
* Hawking, S.W. and G.F.R. Ellis, 1973, *The Large Scale Structure of Space-Time*, Cambridge: Cambridge University Press.
* Hawking, S.W. and R. Penrose, 1970, “The Singularities of Gravitational Collapse and Cosmology,” *Proceedings of the Royal Society of London* A, 314: 529–548.
* Hoefer, C., 2003, “Causal Determinism,” in E.N. Zalta (ed.), *The Stanford Encyclopedia of Philosophy* (Spring 2003 Edition), URL = <[Causal Determinism (Stanford Encyclopedia of Philosophy/Spring 2003 Edition)](https://plato.stanford.edu/archives/spr2003/entries/determinism-causal/)>.
* Hounnonkpe, R.A. and E. Minguzzi, 2019, “Globally Hyperbolic Spacetimes Can Be Defined Without the ‘Causal’ Condition,” *Classical and Quantum Gravity*, 36: 197001.
* Kay, B.S., M.J. Radzikowski, and R.M. Wald, 1997, “Quantum Field Theory On Spacetimes with Compactly Generated Cauchy Horizons,” *Communications in Mathematical Physics*, 183: 533–556.
* Keller, S. and M. Nelson, 2001, “Presentists Should Believe in Time-Travel,” *Australasian Journal of Philosophy*, 79: 333–345.
* Krasnikov, S., 1999, “Time Machines with Non-Compactly Generated Cauchy Horizons and ‘Handy Singularities’,” in T. Piran and R. Ruffini (eds.), *Proceedings of the Eighth Marcel Grossmann Meeting on General Relativity*, Singapore: World Scientific, pp. 593–595. [[Preprint available online](http://www.arxiv.org/abs/gr-qc/9711040/).]
* –––, 2002, “No Time Machines in Classical General Relativity,” *Classical and Quantum Gravity*, 19: 4109–4129. [[Preprint available online](http://www.arxiv.org/abs/gr-qc/0111054/).]
* –––, 2009, “Even the Minkowski space is holed.” *Physical Review D*, 79: 124041.
* –––, 2014a, “Corrigendum: No Time machines in Classical General Relativity,” *Classical and Quantum Gravity*, 31: 079503.
* –––, 2014b, “Time Machines with the Compactly Determined Cauchy Horizon,” *Physical Review D*, 90: 024067. [[Preprint available online](http://arxiv.org/abs/1405.2277/).]
* Malament, D.B., 1977, “The class of continuous timelike curves determines the topology of spacetime,” *Journal of Mathematical Physics*, 18: 1399–1404.
* Manchak, J.B., 2009a, “Is Spacetime Hole-Free?’ *General Relativity and Gravitation*, 41: 1639–1643
* –––, 2009b, “On the Existence of ‘Time Machines,” in General Relativity,” *Philosophy of Science*, 76: 1020–1026.
* –––, 2011a, “No no-go: A remark on time machines,” *Studies in History and Philosophy of Modern Physics*, 42: 74–76.
* –––, 2011b, “What is a Physically Reasonable Space-Time?” *Philosophy of Science*, 78: 410–420.
* –––, 2014a, “Time (hole?) machines,” *Studies in History and Philosophy of Modern Physics*, 48: 124–127.
* –––, 2014b, “On Space-Time Singularities, Holes, and Extensions,” *Philosophy of Science*, 81: 1066–1076.
* –––, 2019, “A Remark on ‘Time Machines’ in Honor of Howard Stein,” *Studies in History and Philosophy of Modern Physics*, 67: 111–116.
* Minguzzi, E., 2012, “Causally Simple Inextendible Spacetimes are Hole-Free,” *Journal of Mathematical Physics*, 53: 062501.
* Monton, B., 2003, “Presentists Can Believe in Closed Timelike Curves,” *Analysis*, 63: 199–202.
* Morris, M.S. and K.S. Thorne, 1988, “Wormholes in Spacetime and Their Use for Interstellar Travel: A Tool for Teaching General Relativity,” *American Journal of Physics*, 56: 395-412.
* Morris, M.S., K.S. Thorne, and U. Yurtsever, 1988, “Wormholes, Time Machines, and the Weak Energy Condition,” *Physical Review Letters*, 61: 1446-1449.
* Nahin, P.J., 1999, *Time Machines: Time Travel in Physics, Metaphysics, and Science Fiction*, New York: AIP Press, Springer.
* Norton, J., 2008, “The Hole Argument,” in E.N. Zalta (ed.), *The Stanford Encyclopedia of Philosophy* (Spring 2008 Edition), URL = <[The Hole Argument (Stanford Encyclopedia of Philosophy/Spring 2008 Edition)](https://plato.stanford.edu/archives/spr2008/entries/spacetime-holearg/)>.
* Ori, A., 1993, “Must Time-Machine Construction Violate the Weak Energy Condition?” *Physical Review Letters*, 71: 2517-2520.
* Politzer, H.D., 1992, “Simple Quantum Systems in Spacetimes with Closed Timelike Curves,” *Physical Review D*, 46: 4470–4476.
* Rovelli, C., 2004, *Quantum Gravity*, Cambridge: Cambridge University Press.
* Smeenk, C. and C. Wüthrich, 2010, “Time Travel and Time Machines”, forthcoming in C. Callender (ed.), *The Oxford Handbook of Time*, Oxford: Oxford University Press.
* Visser, M., 1997, “The Reliability Horizon for Semi-Classical Quantum Gravity: Metric Fluctuations Are Often More Important than Back-Reaction,” *Physics Letters B*, 115: 8-14.
* –––, 2003, “The Quantum Physics of Chronology Protection,” in G.W. Gibbons, E.P.S. Shellard, S.J. Rankin (eds.), *The Future of Theoretical Physics and Cosmology: Celebrating Stephen Hawking’s 60th Birthday*, Cambridge: Cambridge University Press, pp. 161–176.
* Visser, M. and C. Barcelo, 2000, “Energy conditions and their cosmological implications,” in U. Cotti, R. Jeannerot, G. Senjanović, and A. Smirnov (eds.), *Proceedings of the Third International Workshop on Particle Physics and the Early Universe* (COSMO-99), Singapore: World Scientific, pp. 99–112. [[Preprint available online](http://www.arxiv.org/abs/gr-qc/0001099/).]
* Vollick, D.N., 1997, “How to Produce Exotic Matter Using Classical Fields,” *Physical Review D*, 56: 4720–4723.
* Wald, R.M., 1984, *General Relativity*, Chicago: University of Chicago Press.
* –––, 1994, *Quantum Field Theory in Curved Spacetime and Black Hole Thermodynamics*, Chicago: University of Chicago Press.
* –––, 1998, “Gravitational Collapse and Cosmic Censorship,” in B.R. Iyer, and B. Bhawal (eds.), *Black Holes, Gravitational Radiation and the Universe: Essays in Honor of C. V. Vishveshwara*, Dordrecht: Kluwer Academic Publishers, pp. 69–85. [[Preprint available online](http://www.arxiv.org/abs/gr-qc/9710068/).]
* Wells, H.G., 1931, *The Time Machine*, New York: Random House.
* Zwiebach, B., 2004, *A First Course on String Theory*, Cambridge: Cambridge University Press.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=time-machine). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/time-machine/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=time-machine&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/time-machine/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* Krasnikov, S., 2003, “[Time Machine (1988-2001)](http://www.arxiv.org/abs/gr-qc/0305070/),” a brief account of the time machine problem; talk given at 11th U.K. Conference on the Foundations of Physics, Oxford, England, 9-13, Sept. 2002.
* Rovelli, C., 2008, “[Loop Quantum Gravity](https://link.springer.com/article/10.12942/lrr-2008-5)”, in *Living Reviews in Relativity*.

## Related Entries

[determinism: causal](https://plato.stanford.edu/entries/determinism-causal/) | [space and time: the hole argument](https://plato.stanford.edu/entries/spacetime-holearg/) | [time: thermodynamic asymmetry in](https://plato.stanford.edu/entries/time-thermo/) | [time travel](https://plato.stanford.edu/entries/time-travel/) | [time travel: and modern physics](https://plato.stanford.edu/entries/time-travel-phys/)

### Acknowledgments

We thank Carlo Rovelli for discussions and John Norton for comments on an earlier draft. C.W. acknowledges support by the Swiss National Science Foundation (grant PBSK1-102693).

[Copyright © 2020](https://plato.stanford.edu/info.html#c) by  
[John Earman](http://www.pitt.edu/~hpsdept/people/fac_pages/earman.html) <[*jearman@pitt.edu*](mailto:jearman%40pitt%2eedu)>  
[Christian Wüthrich](http://www.wuthrich.net/) <[*christian.wuthrich@unige.ch*](mailto:christian%2ewuthrich%40unige%2ech)>  
[JB Manchak](http://www.lps.uci.edu/~jmanchak/) <[*jmanchak@uci.edu*](mailto:jmanchak%40uci%2eedu)>
