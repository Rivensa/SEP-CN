# 空穴论证 the hole argument (John D. Norton, Oliver Pooley, and James Read)

*首次发表于 1999 年 2 月 1 日星期一；实质性修订于 2023 年 6 月 6 日星期二*

空间是什么？时间是什么？它们是否独立于其中的事物和过程而存在？还是它们的存在依赖于那些事物和过程？它们是否像艺术家绘画的画布一样存在，无论艺术家是否在上面绘画？还是它们类似于亲子关系，只有在有父母和孩子之后才有亲子关系？也就是说，只有在具有空间属性的事物和具有时间持续性的过程存在时，才有空间和时间吗？

这些问题长期以来一直存在争议，并且仍在争议中。当这些问题在现代时空物理学的背景下提出时，空洞论证就出现了，特别是在爱因斯坦的广义相对论的背景下。在这个背景下，空间和时间融合成一个单一实体，时空，我们探究它的地位。一种观点是时空是一种物质：一种独立于其中发生的过程的存在。这就是时空实体主义。空洞论证试图表明，在大部分时空理论中，这种观点会导致令人不悦的结论。特别是，它试图表明时空实体主义导致了决定论的失败，这意味着在给定时间内，结合所考虑的理论的自然法则（例如，爱因斯坦的场方程，即广义相对论的法则）的完整规范，无法唯一确定宇宙将如何演化到未来。它还提出了一个验证主义的困境，因为它似乎导致了一个意想不到的结论，即有关世界的事实我们永远无法知道。尽管这些问题既不逻辑上矛盾，也没有被经验所证伪，但许多人仍然认为它们是令人不悦的。

因此，空穴论证为分析物理理论中所谓的“规范冗余”提供了一个模板：即在这些理论中存在多余的数学结构。我们从中得知，无法通过任何先验的或纯粹的数学规则来确定多余的数学结构。需要一些物理依据。根据上述，空穴论证提供了两个可用的依据：（i）可验证性——候选多余结构的变化对观察中可以验证的内容没有影响；（ii）确定性——理论的定律无法确定候选多余结构。

空穴论证是阿尔伯特·爱因斯坦于 1913 年末为寻求广义相对论而发明的，目的略有不同。它由约翰·厄尔曼、约翰·斯塔切尔和约翰·诺顿在现代背景下重新提出和重新阐述。

有关空穴论证的历史方面及其在哲学和物理学中的重要性，请参阅斯塔切尔（2014）的综述。该综述在技术上比本文更高级。关于空穴论证的另一篇近期综述，请参阅普利（2021）。

---

## 1. 现代时空理论：初学者指南

几乎所有现代时空理论都是以相同的方式构建的。该理论假设了一个事件流形，然后为这些事件分配进一步的结构来表示时空的内容。爱因斯坦的广义相对论是一个标准的例子。作为空穴论证的宿主，我们将追求其最著名的应用之一，即现代相对论宇宙学中的膨胀宇宙。

这个例子说明了空穴论证的核心内容。通过稍加努力，可以使论证更加精确和普遍。这将在本笔记中同时进行，[1] 适用于具有一定微分几何和广义相对论背景的读者。

这是现代相对论宇宙学的两个基本构建模块：事件流形和定义在其上的场。

事件流形。考虑我们试图建模的宇宙，即相对论宇宙学的目标。宇宙的时空是所有空间和时间的整体。这个时空中的事件是普通空间几何中无量纲点的推广。普通空间几何中的几何点只是空间中的一个特定点，没有延展性。相应地，时空中的事件是宇宙空间中某个特定时刻的一个特定点。

到目前为止，我们只定义了一组事件。要成为一个四维流形，这组事件必须稍微有些组织。在实际的时空中，我们有这样一个想法，即每个事件都位于一些局部邻域中；而这个邻域位于更大的邻域中；依此类推。这种额外的组织来自于我们可以用四个数字标记事件的要求，或者至少对于流形的任何足够小的部分我们可以这样做。这些标签形成坐标系。四个数字恰好足以标记事件的事实使得流形是四维的。现在我们可以选择某个事件的邻域，作为所有时空坐标与我们起始事件最多相差一个单位；或两个单位；或三个单位等的点的集合。这给我们提供了嵌套的事件邻域。图 1 说明了如何通过为事件分配“x”和“y”坐标将一组事件转化为二维流形。

![Figure shows a small, upended bag containing events, represented as dots, being emptied into a pile, labeled ‘a set of events’ An arrow labeled ‘Label smoothly with numbers’ points to the site of the dots redistributed over a twodimensional grid It has horizontal and vertical straight lines, representing lines of constant Cartesian coordinates The lines are labeled ‘x=0’, ‘x=1’, ‘x=2’, ‘x=3’ and ‘x=4’; and ‘y=0’, ‘y=1’, ‘y=2’, ‘y=3’ and ‘y=4’ The grid is labeled ‘A manifold of events’](https://plato.stanford.edu/entries/spacetime-holearg/1.svg)

图 1. 事件流形的形成

度量结构和物质场。在指定事件形成一个四维流形时，我们还没有详细说明这些事件。我们没有指定哪些事件位于其他事件的未来和过去，这些事件之间经过多长时间，哪些事件与其他事件同时发生以形成三维空间，这些事件之间的空间距离是多少，以及许多其他相关属性。

通过指定度量场引入这些附加属性。为了了解该场如何提供这些信息，请想象一条连接时空中给定一对事件的曲线。有关经过的时间和空间距离的信息由沿着这样的曲线经过的时间和距离给出。参见图 2：

![A rectangle is labeled ‘a manifold of events’ The events are shown as dots An up arrow labeled ‘time’ indicate that time is represented as advancing in the upvertical direction and a twoheaded horizontal arrow labeled ‘space’ indicates that space is spread across horizontally A constant time surface, seen side on as a parallelogram, has two points representing events connected by a line The surface is labeled ‘Events at the same time form a surface in the manifold that is a snapshot of space at one instant’ and ‘Metric measures distance along curves in space that connect events at the same time’ A vertical line connects two events, represented as dots, labeled ‘earlier’ and ‘later’ The line is labeled ‘Metric measures time elapsed along worldliness between earlier and later events’](https://plato.stanford.edu/entries/spacetime-holearg/2.svg)

图 2. 度量场的功能。

这些信息可以由一个巨大的目录提供，该目录指定了连接事件对之间的空间或时间距离。然而，这样一个巨大的目录会存在大量的冗余。如果我们知道从 A 到 B 的距离以及从 B 到 C 的距离沿着某条曲线，那么我们也知道沿着该曲线从 A 到 C 的距离。我们所需要的最小信息是每个事件与所有（宽泛地说）无限接近它的事件之间的时间和空间距离。这些信息就是度量场提供的。它是一个“场”，因为这些信息只属于一个事件。然后，我们可以通过对曲线上连续无限接近点之间的所有距离求和，来拼凑出沿着任何曲线的时间和空间距离。

宇宙的物质由物质场表示。最简单的物质形式——构成星系的大块物质——可以用追踪每个星系在时间上的历史的世界线来表示。在标准模型中，星系相互远离，这通过星系世界线在后续时间上的扩散来表示。参见图 3：

![In a rectangle, an up arrow labeled ‘time’ indicate that time is represented as advancing in the upvertical direction and a twoheaded horizontal arrow labeled ‘space’ indicates that space is spread across horizontally An instant of space is seen side on as a parallelogram Tiny sketches of five galaxies are laid out across the parallelogram Five nearly vertical lines are drawn through the galaxies such that they spread apart as they proceed up the figure They are labeled ‘Worldlines of galaxies’](https://plato.stanford.edu/entries/spacetime-holearg/3.svg)

图 3. 膨胀宇宙中的星系。

## 2. 广义协变性的自由

牛顿第一定律表明无力体在时空中沿直线轨迹运动。显然，这个定律在所有坐标系中都不能成立，因为想象一下一个相对于定律成立的坐标系加速运动的情况：在加速的坐标系中，无力体也会出现加速的现象！因此，牛顿第一定律并不是爱因斯坦在 20 世纪 10 年代为了寻求广义相对论而引入的术语——“广义协变”的例子。当爱因斯坦在 1915 年最终完成他的广义相对论时，其中一个新颖的特点就是它的广义协变性：与上述形式的牛顿第一定律不同，如果广义相对论的爱因斯坦场方程在一个坐标系中成立，那么它们在通过平滑但其他任意变换与原始系统相关的所有坐标系中也成立。事实上，广义相对论是第一个可以自由使用任意时空坐标系的时空理论。这个特点现在几乎被所有现代时空理论的形式所共享，包括现代版本的特殊相对论和（也许令人惊讶的是！）牛顿时空理论（关于后者，参见例如弗里德曼（1983））。

在其原始形式中，广义协变性被理解为“被动的”；也就是说，通过任意选择的坐标系来描述时空结构的自由。这种自由与另一种自由——“主动的”广义协变性密切相关。根据主动的广义协变性，我们有权将度量场等结构以与坐标变换数量相同的方式分布在流形上，并且在流形上得到的场的重新分布将保持所考虑理论的解的性质。被动的广义协变性并不等同于以这种方式定义的主动的广义协变性，因为一个理论可以是被动广义协变的，但在流形上任意平滑的场的重新分布通常无法保持解的性质：这里的细节并不重要，但请参阅 Pooley（2017）以获取进一步讨论。（有关主动和被动协变性之间关系的更详尽说明，请参阅补充文件：主动和被动协变性。）[2] 重要的是，每个“局部”时空理论（使用 Earman＆Norton（1987）的术语）都是主动广义协变的，因此将受到空穴论证的影响——这包括特殊相对论和某些牛顿力学的表述。（有一种观点认为这做得太过分了，广义相对论与许多其他时空理论不同之处在于其时空几何已经变得动态化，只有在这种理论中才应该进行空穴论证：有关进一步讨论，请参阅 Earman（1989 年，第 9 章，第 5 节），Stachel（1993 年）和 Iftime 和 Stachel（2006 年）。）

在接下来的内容中，我们将重点关注主动广义协变性，这确实是广义相对论（以及其他局域时空理论）所具有的属性。空穴论证的基本操作涉及到行使这种自由。图 4 展示了我们可以将度量结构和物质场分布在时空事件的流形上的一种方式：

![In a rectangular sheet with overturned top edge, the expanding system of galaxies of Figure 3 is shown with two spatial surfaces connected by vertical lines It is labeled ‘Metric and matter fields’ Arrows indicate that the sheet is to be superimposed on a second rectangle, labeled ‘manifold’, in which some events are represented as dots A duplicate of the rectangular sheet is shown superimposed on the manifold](https://plato.stanford.edu/entries/spacetime-holearg/4.svg)

图 4. 将度量和物质分布在流形上的一种方式。

图 5 展示了第二种方式：

![The figure is a duplication of the previous Figure 4 with one change In the center of the sheet superimposed on the manifold is a dotted ellipse, labeled ‘THE HOLE’ Inside the ellipse the spatial surface and vertical lines are displaced slightly up and to the right, while still connecting smoothly to the other parts of the unaltered figure at the edge of the ellipse](https://plato.stanford.edu/entries/spacetime-holearg/5.svg)

图 5. 在流形上传播度量和物质的另一种方式。

我们将把两种传播之间的转换称为“空穴变换”。虚线区域是空洞。度量和物质场的第一个分布以一种方式转换为第二个分布，

* 在空洞外部不改变场。
* 在空穴中，它们的分布不同；
* 而空穴内外的分布平滑地连接在一起。[3]

重要的是，图 5 中的预变换状态和后变换状态都是爱因斯坦的广义相对论场方程的解，这意味着它们都代表了根据该理论可能存在的世界的方式。

## 3. 不变量的保持

### 3.1 不变量

这两种不同的扩展在一个关键特征上完全一致，空穴论证依赖于这一特征：这两种扩展在所有不变性质上完全一致。

这些不变的属性，粗略地说，是与几何和动力学本质相关的，比如沿空间曲线的距离和沿星系世界线的时间，星系的静质量，其中的粒子数量，以及一系列其他属性，比如时空是否度规平坦或弯曲。

不变的属性与非不变的属性有所区别。最为人所知的非不变属性是那些依赖于特定坐标系选择的属性。例如，在二维欧几里得空间中，只有一个事件位于坐标系的原点，即 x=0，y=0。但是当我们改变坐标系时，哪个事件位于原点会发生变化。因此，“位于原点”不是一个不变的属性。然而，两点之间的空间距离无论使用哪个坐标系来描述空间都是相同的。它是一个不变的属性。

尽管这两种情况下场的分布不同，但它们在所有不变的属性上是一致的；因此，从不变的角度来看，它们是相同的。

### 3.2 不变量和可观测量

时空理论的不变量与可观测量之间存在着特殊的关系，即那些可以通过观测验证的数量：

> 所有的可观测量都可以归结为不变量。

例如，如果一个人从一个星系到另一个星系旅行，与旅行相关的所有可观测量都是不变量。这些包括旅程中经过的时间，飞船在旅程中的任何时间是否加速，旅程开始时离开的星系的年龄以及目的地星系的年龄，以及可能涉及与粒子或光脉冲进行信号传递的所有操作。

因此，由于空穴变换的度量和物质场的两个扩展或分布在不变量上达成一致，它们也在所有可观测量上达成一致。它们在观测上是无法区分的。

## 4. 什么代表时空？

回想一下我们最初的关注点：我们想知道是否可以将时空概念化为一种物质，即一种独立于其中发生的物质事件的存在。为了做到这一点，我们需要知道上述结构中的哪些部分代表着时空。对于这个问题，一个流行的答案是事件流形代表着时空。这个选择是自然的，因为现代时空理论是通过首先假设一个事件流形，然后在其上定义进一步的结构来建立起来的。因此，在对物理理论有现实主义观点的情况下，我们很自然地将流形视为一种独立存在的结构，它具有属性，并且扮演着容器的角色，就像我们期望时空一样。[4]

人们可能会想知道，流形上定义的一些进一步的结构是否代表着时空的进一步属性，而不是时空内部的内容。特别是，度规场包含了关于空间距离和经过的时间的重要信息。难道这也不应该被视为包含时空的一部分，而不是时空内部的内容吗？

针对这种思路，有人会争辩说，广义相对论使得将度规场简单地视为包含时空的一部分变得困难。因为除了空间和时间信息之外，度规场还代表了引力场。因此，它还携带能量和动量-引力场的能量和动量（尽管在广义相对论中存在一个臭名昭著的技术问题，无法确定在时空中的任何特定事件的引力场的能量和动量密度）。这种能量和动量可以自由地与时空中的其他物质场交换。携带能量和动量是（思路是）时空内部包含的物质的一个自然的区别特征。

因此，广义相对论的度规场似乎难以简单地进行表征。我们希望它只是时空容器的一部分，或者只是物质的一部分。然而，它似乎同时是两者的一部分。但无论如何，在这里需要注意的关键点（与一些关于空穴论证的历史写作相反）是，为了启动空穴论证，我们无需解决这个问题！只要我们处理的是一个在上述意义上积极普遍协变的理论，空穴论证就会出现，我们现在就会看到。

## 5. 时空实体主义的代价

到目前为止，我们已经将实体主义学说描述为时空具有独立于其内容的存在。这种表述唤起了强大但模糊的直观图像，但它不够清晰，无法在解释物理理论的背景下使用。如果我们用事件流形来表示时空，我们如何表征其存在的独立性？它是反事实的主张，即如果没有度规场或物质场，仍然会存在事件流形吗？这个反事实被标准表述自动否定，后者假设所有时空至少具有度量结构。这似乎是对流形实体主义的太过轻率的反驳。当然，肯定存在一种改进的表述。幸运的是，我们不需要费力去找到它。出于当前的目的，我们只需要考虑实体主义观点的一个结果，并将给出该观点的精确表述的任务放在一边。

在他们关于空间和时间的著名辩论中，莱布尼兹嘲笑了实体论者牛顿的代表克拉克，问如果东西方互换，世界会发生什么变化。对于莱布尼兹来说，没有变化，因为这种互换会保留物体之间的所有空间关系。但是牛顿的实体论者不得不承认，世界上的物体现在位于不同的空间位置，因此这两个系统在物理上是不同的。

相应地，当我们在事件流形上以不同的方式分布度量和物质场时，我们现在以不同的方式为流形的事件分配度量和物质属性。例如，想象一个星系通过空洞中的某个事件 E。经过空洞变换后，这个星系可能不再通过那个事件。对于流形实体论者来说，这必须是客观物理事实的问题：星系是否通过 E。这两种分布代表了两种物理上不同的可能性。

![The figure shows two copies of the rectangular sheet of Figure 4 with the ellipse labeled ‘THE HOLE’ shown on both In the first, a dot on the central vertical line within the ellipse is labeled ‘E’ In the second copy, the distortions of Figure 5 within the ellipse are shown The dot labeled E is in its original position, so that the vertical line no longer passes through it](https://plato.stanford.edu/entries/spacetime-holearg/6.svg)

图 6. 星系是否通过事件 E？

也就是说，多元实体主义者必须（似乎）否认由莱布尼兹的嘲讽所启发的一个等价性，因此以他的名字命名：[5]

> 莱布尼兹等价性。如果两个场的分布通过平滑变换相关联，那么它们代表相同的物理系统。

附加文件《通过地图投影可视化莱布尼兹等价性》通过与地球表面的不同地图投影类比，说明了莱布尼兹等价性的基本思想。

## 6. 不愉快的后果

现在我们可以将上述部分组合起来，为多元实体论者带来不愉快的后果。考虑通过空穴变换相关的度量和物质场的两个分布。由于多元实体论者否认莱布尼兹等价性，实体论者必须认为这两个系统代表着不同的物理系统。但是区分这两个系统的属性非常难以捉摸。它们既逃避了（a）观察验证，也逃避了（b）宇宙学理论的决定力。

（a）观察验证。实体论者必须坚持认为，银河系是否经过事件 E 会产生物理上的差异。但我们已经注意到这两个分布在观察上是等价的：没有观察可以告诉我们，我们是处于一个银河系经过事件 E 还是错过事件 E 的世界中。

从图 6 中可能很难看出这两个分布在观测上是等价的。在左边的第一个分布中，中间的星系看起来像是沿着一条直线移动，并且恰好停留在两侧星系的空间中点。在右边的第二个分布中，所有这一切似乎都被撤销了。星系看起来像是加速并向右转弯，以便更靠近右侧的星系。

在图 6 的描绘中出现的这些差异都是非不变差异。对于右手边的分布，星系在图中确实向右转弯，但与此同时，事件之间的距离也被拉伸，就像在补充材料《通过地图投影可视化莱布尼兹等价性》中所展示的各种地图投影中一样。因此，星系始终保持在两侧星系的空间中点；只是从图的绘制方式来看，它看起来并不像是在空间中点。

同样，沿着星系的世界线的加速度矢量决定了星系是否在加速。这个加速度矢量是一个不变量。因此，如果左手边的分布中的星系具有零加速度矢量，那么右手边的分布中对应的星系也将具有零加速度矢量。请记住，空穴变换保持不变量。因此，如果一个星系在左手边的分布中没有加速度，那么它在右手边的分布中也没有加速度。

(b) 决定论。相对论宇宙学的物理理论无法在这两种情况之间进行选择。这表现为理论的不确定性。我们可以指定度量和物质场在事件流形中的分布，除了在被指定为“空穴”的区域内。然后，理论无法告诉我们这些场将如何发展到“空穴”中。原始分布和转换后的分布都是度量和物质场在“空穴”之外到“空穴”之内的合法扩展，因为每个分布都满足相对论宇宙学理论的所有定律。该理论没有资源让我们坚持只有一个分布是可接受的。

需要明确的是，不幸的后果并不仅仅是决定论的失败。我们对这种失败太过熟悉，而且这绝对不是驳斥一个物理理论的自动理由。一个广为人知的、被广泛庆祝的不确定性理论的最著名例子是量子理论，在标准解释中，对系统的测量可能导致对多种可能结果的不确定性坍缩。较少为人知的是，在经典物理学中也可以设计出不确定性系统。大多数例子涉及奇特现象，比如物体从空间无限远的地方以无限速度出现，被称为“太空入侵者”（Earman, 1986a, Ch. III; 另见决定论：因果）。或者它们可能通过无穷多个物体的超任务相互作用而产生（超任务）。最近，出现了一个极其简单的例子，其中一个单独的质量坐在一个圆顶上，在任意延迟时间和任意方向上自发地开始运动（Norton, 2003, Section 3）。

空穴论证中决定论失败的问题不在于失败的事实，而在于它失败的方式。如果我们否认多元实体论并接受莱布尼兹等价性，那么空穴变换引起的不确定性就会被消除。虽然在空穴中有无数个数学上不同的场发展，但在莱布尼兹等价性下，它们在物理上都是相同的。也就是说，毕竟存在着一种唯一的物理场发展到空穴中的方式。因此，这种不确定性是实体论者形而上学承诺的直接结果。同样，如果我们接受莱布尼兹等价性，那么我们就不再为两个分布无法通过任何可能的观察来区分而感到困扰。它们只是同一物理实际的不同数学描述，因此应该在所有可观测量上达成一致。

因此，空穴论证所引发的反实体论结论是这样的。我们可以用任何物理理论来装载无法通过观察来确定的对象或属性（在这里是时空事件）。如果它们对观察的不可见性还不足以警示这些属性是不合法的，那么发现它们给一个本来是确定性的理论带来了不确定性，应该足以警示我们。因此，这样的对象或属性（再次强调，这里是时空事件）应该与任何需要保留它们的教条一起被丢弃。

## 7. 空穴论证简述

总之，空穴论证可以归结为以下内容：[6]

1. 如果存在两个通过空穴变换相关的度量和物质场的分布，那么流形实体主义者必须坚持这两个系统代表两个不同的物理系统（即，他们必须否认莱布尼兹等价性）。
2. 这种物理上的不同超越了观察和理论的决定力，因为：

* 这两个分布在观察上是相同的。
* 理论的定律无法选择场的两种发展方式进入空穴。

3. 因此，流形实在论者提出了一个应该被抛弃的问题性形而上学。

## 8. 空穴论证的历史

### 8.1 爱因斯坦陷入了空洞

空洞论证是由爱因斯坦于 1913 年末创造的，当时他在寻求他的广义相对论时遇到了看似不可逾越的障碍，这是一种绝望的举动。在之前的一年里，他一直努力寻找一种普遍协变的引力理论，就像上面介绍的那样。他甚至考虑了他将在 1915 年 11 月确定并现在出现在所有教科书中的著名的普遍协变方程。

不幸的是，爱因斯坦最初至少无法看到这些方程是可接受的。牛顿的引力理论在弱引力场中几乎完美地工作。因此，爱因斯坦的理论在这种情况下必须回归到牛顿的理论。但是，尽管他努力尝试，爱因斯坦无法看到他的方程及其许多变体如何与牛顿的理论正确地结合。1913 年中期，他发表了一个妥协：一个相对论引力理论的草图，它不是普遍协变的。（有关这些斗争的更多细节，请参见 Norton（1984）。）

爱因斯坦未能找到一个可接受的普遍协变理论，这让他非常困扰。1913 年晚些时候，他试图将自己的失败转化为某种胜利：他认为自己可以证明根本不存在可接受的普遍协变理论。任何这样的理论都将违反他所称之为因果律的法则，我们现在称之为决定论。他试图用空穴论证来证明这个非凡的主张。

在最初的版本中，爱因斯坦考虑了一个除了一个区域（空穴）之外充满物质的时空。（因此，在现代版本中，“空穴”一词更有意义。）然后，他问如果在空穴之外完全指定度规和物质场是否会确定空穴内的度规场。由于他默认放弃了莱布尼兹等价原理，爱因斯坦认为得到的否定答案足以否定所有普遍协变理论。

### 8.2 …并再次攀登

爱因斯坦与他那扭曲的有限协变理论苦苦斗争了两年。1915 年末，随着他错误的证据不断增加，爱因斯坦陷入近乎绝望，最终屈服。他重新急切地寻求普遍协变方程，部分原因是知道大卫·希尔伯特已经投入到他的理论分析中。爱因斯坦的探索在 1915 年 11 月底以普遍协变形式完成，圆满结束。

长期以来，人们一直认为希尔伯特比爱因斯坦早五天找到了最终的理论。希尔伯特论文的证明页的新证据表明他可能并没有。更重要的是，它清楚地显示希尔伯特，像爱因斯坦一样，至少暂时相信空穴论证排除了所有普遍协变理论，并且这种信念至少在他论文的证明页上仍然存在。（参见 Corry，Renn 和 Stachel 1997 年。）

虽然爱因斯坦默默地撤回了他对普遍协变理论的反对意见，但他并没有公开表示他认为空穴论证失败的地方。直到他发表了约翰·斯塔赫尔所称的“点重合论证”，他才最终这样做。这个论证在爱因斯坦对他的广义相对论的回顾中是众所周知的，它等同于对莱布尼兹等价性的辩护。他强调，一个理论的物理内容已经被它许可的时空巧合目录耗尽。例如，在一个只处理粒子的理论中，这些巧合是粒子世界线的交点。这些巧合由场的变换保持不变。因此，可以相互转换的两个场系统具有相同的物理内容；它们代表同一个物理系统。

多年来，空穴论证被认为是一个琐碎的错误，而爱因斯坦本人却是一个富有洞察力的人。正是约翰·斯塔赫尔（1980 年）认识到了它的非常琐碎的性质，并将这一认识带给了现代历史学家和物理学哲学家的社区。（另请参阅斯塔赫尔，1986 年。）在厄尔曼和诺顿（1987 年）中，这个论证被重新构建为一个明确针对时空实体主义的论证。有关进一步的历史讨论，请参阅霍华德和诺顿（1993 年），詹森（1999 年），克莱因（1995 年）和诺顿（1987 年）。一部详尽的、综合性的四卷本著作是伦恩（2007 年）；关于空穴论证哲学复兴的历史，请参阅韦瑟罗尔（2020 年）。

关于逻辑实证主义者对爱因斯坦的点重合论证的挪用和误用的说明，请参阅乔万内利（2013 年）。

## 9. 对空穴论证的回应

对于空穴论证的回应至少与撰写有关的作者一样多。在本节中，我们通过考虑自 1980 年代哲学文献中对该论证的五个广泛回应类别来整理文献。在审查该论证的过程中，几乎所有方面都已经被权衡和测试过。

### 9.1 拒绝实体主义

一种思路简单地认同空穴论证使得接受莱布尼兹等价性变得令人信服。它试图通过寻找一个单一的数学结构来代表一个物理时空系统，而不是莱布尼兹等价性许可的互相转换的结构的等价类，以使这种接受更加透明。其中一种尝试涉及“莱布尼兹代数”的概念（参见 Earman，1989 年，第 9 章，第 9 节）。目前尚不清楚这样的尝试是否能够成功。正如互相转换的场表示相同的物理系统一样，存在着具有相同物理含义的不同但互相转换的莱布尼兹代数。如果流形和莱布尼兹代数的形式体系是可互相转换的，那么在这种转换下，我们预期空穴论证也会在后一种形式体系中重新出现（参见 Rynasiewicz，1992 年）。

另一种方法是通过“Dirac 可观测量”和相关的规范固定规定来通过个体化时空点来解释莱布尼兹等价性，并证明广义相对论与空穴论证的兼容性（Lusanna 和 Pauri，2006 年）。更一般地，我们可能会想知道时空实体主义面临的问题是否是上述特定形式体系的产物。Bain（1998 年，2003 年）已经研究了转向其他形式体系（包括但不限于莱布尼兹代数）的影响。

### 9.2 接受不确定性

对于空穴论证的另一种回应是接受空间和时间的普遍协变理论（如广义相对论）是不确定性的。也许（思路是）这种不确定性并不令人困扰，因为它只涉及哪些对象实例化了哪些属性，而不涉及实例化了哪些属性模式。然而，显然这并不足以消除对不确定性的担忧：至少，如果有其他对该论证的回应可用，它们似乎更可取。

相关的回应是重新定义确定性，并主张在相关意义上，诸如广义相对论的理论尽管存在空穴论证，但仍然是确定性的。在空穴论证的光下，对确定性定义的修改已经被 Belot（1995b）、Brighouse（1994, 2020）、Butterfield（1989）、Melia（1999）和 Pooley（2021）等人进行了探讨。

### 9.3 度量本质主义

在对空穴论证的独特回应中，莫德林（1990）强调每个时空事件都本质上具有其度量属性；也就是说，如果（在场的重新分配后）我们试图为其分配不同的度量属性，那么它将不再是那个事件。因此，尽管似乎每个广义相对论（或其他感兴趣的主动广义协变理论）的互相转化解的类别都与一类不同的可能世界相关联，但实际上只有一个这样的世界在形而上上是可能的，因此空穴论证被削弱了。泰特尔（2019）探讨了这种本质主义回应的改进版本，但得出结论认为它并没有改进对空穴论证的标准模态回应。巴特菲尔德（1989）将互相转化的系统描绘为不同的可能世界，并使用对应理论来论证最多只能代表一个实际时空。（有关巴特菲尔德对对应理论的最新版本，请参见巴特菲尔德和戈梅斯（2023a，2023b）。）

### 9.4 精细实体论

莫德林的度量本质主义是“复杂实体主义”的一个例子。这个术语在 Belot 和 Earman（2001）中被引入，以一种稍微带有贬义的意义，用来指称一类观点，即实体主义者可以合法地否认通过空穴变换相关的系统代表不同的可能性，从而回避空穴论证。复杂实体主义的另一个版本是反 haecceitist 实体主义，根据这个观点，物理时空点没有跨世界的身份。宇宙物质内容在不同世界中的差异性假设了这样的身份。因此，通过否认这样的身份，可以避免广义相对论和其他主动广协变理论的表面上的不确定性。这个立场目前是对空穴论证的一种流行回应：有关讨论，请参见 Hoefer（1996）和 Pooley（2006b）；有关该立场在形而上学上模糊的一些担忧，请参见 Dasgupta（2011）。

另一种相关的复杂实体论版本认为，时空不仅仅由事件的流形表示，而是由事件的流形与度量属性的某种更丰富的结构表示（例如，参见 Hoefer，1996）。推动这种逃避的动机是，事件的流形缺乏时空所必需的属性。例如，事件的流形中没有过去和未来的概念，没有经过的时间或空间距离的概念。因此，人们可能会倾向于将时空与事件的流形以及提供这些时空概念的进一步结构进行等同。因此，这种想法可能是，度量结构是以非刚性方式个体化时空点的。这种逃避空穴论证有时成功，有时失败。在某些重要的特殊情况下，可以针对这种观点提出替代版本的空穴论证：参见 Norton（1988）。

### 9.5 数学/形式主义回应

或许对空穴论证最简单的挑战是认为莱布尼兹等价性是现代数学物理文献中的一个标准假设，并暗示即使考虑否定它也是一个数学错误，不值得认真关注。但是作为回应：虽然莱布尼兹等价性在物理学文献中被广泛接受，但它并不是一个只能在遭受矛盾之苦时才能否定的逻辑真理。早期接受空穴论证的人包括大卫·希尔伯特本人（参见上文 8.2 节）。如果否定莱布尼兹等价性是一个如此严重的错误，以至于没有一位称职的数学家会犯这个错误，那么我们对于能力的标准已经变得难以达到，因为它们必须排除 1915 年处于巅峰状态的大卫·希尔伯特。

这个问题最近被 Weatherall（2018）重新提出，他认为可互相转换的数学结构在标准数学实践中被视为相同的结构。因此，它们应该代表相同的物理系统，排除了对 Leibniz 等价性的否定。Curiel（2018）提出了与 Weatherall 类似的平凡结论，但基于不同的基础：在标准物理实践中，没有与空穴变换相对应的物理相关性。关于这种“数学结构主义”不足以阻止空穴论证的观点的回应，请参见 Pooley＆Read（2021）；同样，Roberts（2020）回应说，决定两个数学结构是否代表相同的物理系统的应该是自然界，而不是数学实践。

最近，一些作者认为，从集合论正统的数学基础进行修改足以阻止空穴论证：请参见 Ladyman＆Presnell（2020）和 Dougherty（2020）讨论同伦类型理论特定背景下的这类论证。另外，Halvorson 和 Manchak（2021）认为，由于存在一种唯一的保度量映射（“等度变换”）将相对于空穴变换相关的广义相对论的两个解关联起来，因此空穴论证被阻止了；关于这个论证的怀疑回应，请参见 Menon＆Read（2023）。

Belot（2018）反对单一决策明确支持或反对 Leibniz 等价性。虽然承认空穴变换将物理上相同的系统联系起来，但他认为在广义相对论的某些领域中，保持度量的某些变换可能会关联物理上不同的系统。

## 10. 空穴论证的更广泛意义

空穴论证在科学哲学中具有更广泛的意义，涉及理论实体的现实主义、量子引力理论以及物理理论中的规范自由问题。我们在本节中讨论了这三个关系；还有一个补充文件对第三个关系进行了扩展。

### 10.1 科学现实主义的限度

空穴论证提出了一种新的障碍，阻碍了科学现实主义的崛起。根据这种观点，我们应该字面上理解我们成熟理论的断言。因此，如果广义相对论描述了一个事件的多样性和度量结构，那么从严格的科学现实主义者的观点来看，这确实是存在的。据断言，认为否则将使这些理论的成功成为一个无法解释的奇迹。如果时空实际上并没有广义相对论所归因的几何结构，那么我们如何解释这个理论的成功呢？

尽管这种观点很有吸引力，但空穴论证表明，我们对成功理论的字面解读必须有所限制。或者至少，坚持这种字面解读是有很高代价的。空穴论证告诉我们，我们可能希望承认字面解读所说的东西并不是真正存在的，以免被迫假设超越观察和我们理论的决定力的物理实在属性。

### 10.2 空穴论证与引力量子化

现代理论物理学中最棘手的问题之一是引力的量子化。虽然爱因斯坦于 1915 年提出的广义相对论以时空曲率的形式为引力提供了一种革命性的思考方式，但现在普遍认为它不能成为引力的最终解释。原因是它仍然是一个经典理论，没有按照量子理论来处理物质。

将量子理论和广义相对论统一到一个理论中的问题仍然没有解决。（参见量子引力。）有许多竞争者，特别是弦理论和环形量子引力。一个被提出的问题是，空穴论证已经向我们展示了（据称）没有成功的量子引力理论可以与一个独立的、容器式的时空相抗衡。约翰·斯塔切尔是空穴论证这一结果的早期支持者。参见斯塔切尔（2006）。这个问题经常被环形量子引力理论家提出，特别是作为对弦论方法的批评，因为弦论方法有这样一个背景时空。参见罗维利和高尔（2000）以及斯莫林（2006）；关于这些“背景独立性”问题的哲学讨论，参见普利（2017）和里德（2023）。

在相关的研究中，格里布和泰博（2016）认为空穴论证问题和量子引力的“时间问题”本质上是相同的，前提是有适当的假设。更多信息，请参见关于量子引力的“时间问题”一文中的“时间问题”。

### 10.3 空穴论证和规范自由

空穴论证在物理哲学领域中对规范变换的重要性的认识日益增长。规范变换是指对我们物理理论中某些自由度的变换，这些变换被认为在物理现实中没有对应物。空穴论证的分析为物理哲学家提供了一个方便的模板，用于判断某个东西是否是规范自由。正如在引言中提到的，我们从空穴论证中得知，通过任何先验的或纯数学的规则（至少在假设上述对空穴论证的数学/形式主义回应不成功的情况下）都无法实现对多余数学结构的确定。相反，需要一些物理基础。空穴论证提供了两个可用的基础：（i）可验证性——候选多余结构的变化对观察中可以验证的内容没有影响；（ii）确定性——理论的定律无法确定候选多余结构。有关空穴论证和规范自由的更详细讨论，请参阅补充材料《空穴论证作为分析规范自由的模板》。

<!--md-padding-ignore-begin-->
## Bibliography

* Bain, Jonathan, 1998, *Representations of Spacetime: Formalism and Ontological Commitment*, Ph.D. Dissertation, Department of History and Philosophy of Science, University of Pittsburgh.
* –––, 2003, “Einstein Algebras and the Hole Argument,” *Philosophy of Science*, 70: 1073–1085.
* Belot, Gordon, 1995a, “Indeterminism and Ontology,” *International Studies in the Philosophy of Science*, 9: 85–101.
* –––, 1995b, “New Work for Counterpart Theorists”, *British Journal for the Philosophy of Science*, 46(2): 185–195.
* –––, 1996, *Whatever is Never and Nowhere is Not: Space, Time and Ontology in Classical and Quantum Gravity* Ph. D. Dissertation, Department of Philosophy, University of Pittsburgh.
* –––, 1996a, “Why General Relativity *Does* Need an Interpretation,” *Philosophy of Science*, 63 (Supplement): S80–S88.
* –––, 2018, “Fifty Million Elvis Fans Can’t be Wrong,” *Noûs*, 52: 946–981.
* Belot, Gordon and Earman, John, 2001, “Pre-Socratic Quantum Gravity”, in C. Callender and N. Huggett (eds.), *Physics Meets Philosophy at the Planck Scale*, Cambridge: Cambridge University Press. pp. 213–255.
* Brighouse, Carolyn, 1994, “Spacetime and Holes,” in D. Hull, M. Forbes and R. M. Burian (eds.), *PSA 1994*, Volume 1, pp. 117–125.
* –––, 2020, “Confessions of a (Cheap) Sophisticated Substantivalist”, *Foundations of Physics* , 50: 348–359.
* Butterfield, Jeremy, 1988, “Albert Einstein meets David Lewis,” in A. Fine and J. Leplin (eds.), *PSA 1988*, Volume 2, pp. 56–64.
* –––, 1989, “The Hole Truth,” *British Journal for the Philosophy of Science*, 40: 1–28.
* Brading, Katherine and Castellani, Elena (eds.), 2003, *Symmetries in Physics:Philosophical Reflections*, Cambridge: Cambridge University Press, pp. 334–345.
* Corry, Leo, Renn, Juergen, and Stachel, John, 1997, “Belated Decision in the Hilbert-Einstein Priority Dispute,” *Science*, 278: 1270–73.
* Curiel, Erik, 2018, “On the Existence of Spacetime Structure,” *British Journal for the Philosophy of Science*, 69: 447–483.
* Dasgupta, Shamik, 2011, “The Bare Necessities”, *Philosophical Perspectives*, 25: 115–160.
* Dougherty, John, 2020, “The Hole Argument, Take n”, *Foundations of Physics*, 50: 330–347.
* Earman, John, 1986, “Why Space is not a Substance (At Least Not to First Degree),” *Pacific Philosophical Quarterly*, 67: 225–244.
* –––, 1986a, *A Primer on Determinism*, Dordrecht: Reidel.
* –––, 1989, *World Enough and Space-Time: Absolute Versus Relational Theories of Space and Time*, Cambridge, MA: MIT Bradford.
* –––, 2003, “Tracking down gauge: an ode to the constrained Hamiltonian formalism”, in K. Brading and E. Castellani (eds.), *Symmetries in Physics: Philosophical Reflections*, Cambridge: Cambridge University Press, pp. 140–162.
* Earman, John and Norton, John D., 1987, “What Price Spacetime Substantivalism,” *British Journal for the Philosophy of Science*, 38: 515–525.
* Einstein, Albert, 1916, “The Foundation of the General Theory of Relativity,” in H.A. Lorentz et al., *The Principle of Relativity*, New York: Dover, 1952, pp. 111–164.
* Friedman, Michael, 1983. *Foundations of Space-Time Theories: Relativistic Physics and Philosophy of Science,* Princeton, NJ: Princeton University Press.
* Giovanelli, Marco, 2013 “Erich Kretschmann as a Proto-Logical-Empiricist: Adventures and Misadventures of the Point-Coincidence Argument,” *Studies in History and Philosophy of Modern Physics*, 44: 115–134.
* Gomes, Henrique and Butterfield, Jeremy, 2023a, “The Hole Argument and Beyond, Part I: The Story so Far”.
* –––, 2023b, “The Hole Argument and Beyond, Part II: Treating Non-isomorphic Spacetimes”.
* Gryb, Sean and Thébault, Karim P. Y., 2016, “Regarding the ‘Hole Argument’ and the ‘Problem of Time’,” *Philosophy of Science*, 83: 563–584.
* Halvorson, Hans and Manchak, J.B., “Closing the Hole Argument”, *British Journal for the Philosophy of Science*, 2021.
* Healey, Richard, 1999, “On the Reality of Gauge Potentials,” *Philosophy of Science*, 68: 432–55.
* Hoefer, Carl, 1996, “The Metaphysics of Space-Time Substantivalism,” *Journal of Philosophy*, 93: 5–27.
* Hoefer, Carl and Cartwright, Nancy, 1993, “Substantivalism and the Hole Argument,” in J. Earman *et al*. (eds.), *Philosophical Problems of the Internal and External Worlds: Essays on the Philosophy of Adolf Gruenbaum*, Pittsburgh: University of Pittsburgh Press/Konstanz: Universitaetsverlag Konstanz, pp. 23–43.
* Howard, Don and Norton, John D., 1993, “Out of the Labyrinth? Einstein, Hertz and the Goettingen Answer to the Hole Argument,” in John Earman, Michel Janssen, John D. Norton (eds.), *The Attraction of Gravitation: New Studies in History of General Relativity* Boston: Birkhäuser, pp. 30–62.
* Iftime, Mihaela and Stachel, John, 2006, “The Hole Argument for Covariant Theories,” *General Relativity and Gravitation*, 38: 1241–1252.
* Janssen, Michel, 1999, “Rotation as the Nemesis of Einstein’s ‘Entwurf’ Theory,” in Hubert Goenner *et al*. (eds.), *Einstein Studies: Volume 7. The Expanding Worlds of General Relativity*, Boston: Birkhaeuser, pp. 127–157.
* Jammer, Max, 1993, *Concepts of Space: The History of Theories of Space in Physics*, third enlarged edition, New York: Dover, Chapter 6. “Recent Developments.”
* Klein, Martin J. *et al*. (eds.), 1995, *The Collected Papers of Albert Einstein: Volume 4. The Swiss Years: Writing, 1912–1914*, Princeton: Princeton University Press.
* Ladyman, James and Presnell, Stuart, 2020, “The Hole Argument in Homotopy Type Theory”, *Foundations of Physics*, 50: 319–329.
* Lusanna, Luca and Pauri, Massimo, 2006 “Explaining Leibniz Equivalence as Difference of Non-inertial Appearances: Dis-solution of the Hole Argument and Physical Individuation of Point-Events,” *Studies in History and Philosophy of Modern Physics*, 37: 692–725
* Liu, Chuang, 1996, “Realism and Spacetime: Of Arguments Against Metaphysical Realism and Manifold Realism,” *Philosophia Naturalis*, 33: 243–63.
* –––, 1996a, “Gauge Invariance, Indeterminism, and Symmetry Breaking,” *Philosophy of Science*, 63 (Supplement): S71–S80.
* Leeds, Stephen, 1995, “Holes and Determinism: Another Look,” *Philosophy of Science*, 62: 425–437.
* Macdonald, Alan, 2001, “Einstein’s Hole Argument,” *American Journal of Physics*, 69: 223–25
* Maudlin, Tim, 1989, “The Essence of Spacetime,” in A. Fine and J. Leplin (eds.), *PSA 1988*, Volume 2, pp. 82–91.
* –––, 1990, “Substances and Spacetimes: What Aristotle Would have Said to Einstein,” *Studies in the History and Philosophy of Science*, 21: 531–61.
* Melia, Joseph, 1999, “Holes, Haecceitism and Two Conceptions of Determinism”, *British Journal for the Philosophy of Science*, 50(4):639–664.
* Menon, Tushar and Read, James, 2023, “Some Remarks on Recent Mathematical-*cum*-formalist Responses to the Hole Argument”, *Philosophy of Science*.
* Muller, Fred A., 1995, “Fixing a Hole,” *Foundations of Physics Letters*, 8: 549–562.
* Mundy, Brent, 1992, “Spacetime and Isomorphism,” in D. Hull, M. Forbes and K. Okruhlik (eds.), *PSA 1992*, Volume 1, pp. 515–527.
* Norton, John D., 1984, “How Einstein found his Field Equations: 1912–1915,” *Historical Studies in the Physical Sciences*, 14: 253–316; reprinted in Don Howard and John Stachel (eds.), *Einstein and the History of General Relativity: Einstein Studies*, Volume 1, Boston: Birkhäuser, 1989, pp. 101–159.
* –––, 1987, “Einstein, the Hole Argument and the Reality of Space,” in John Forge (ed.), *Measurement, Realism and Objectivity*, Dordrecht: Reidel, pp. 153–188 .
* –––, 1988, “The Hole Argument,” in A. Fine and J. Leplin (eds.), *PSA 1988*, Volume 2, pp. 56–64.
* –––, 1989, “Coordinates and Covariance: Einstein’s view of spacetime and the modern view,” *Foundations of Physics*, 19: 1215–1263.
* –––, 1992, “The Physical Content of General Covariance,” in J. Eisenstaedt and A. Kox (eds.), *Studies in the History of General Relativity* (Volume 3: Einstein Studies), Boston: Birkhauser, pp. 281–315.
* –––, 1992a, “Philosophy of Space and Time,” in M.H. Salmon *et al*., *Introduction to the Philosophy of Science*, Englewood Cliffs, NJ: Prentice-Hall; reprinted Hackett Publishing, pp. 179–231.
* –––, 1993, “General Covariance and the Foundations of General Relativity: Eight Decades of Dispute,” *Reports on Progress in Physics*, 56: 791–858.
* –––, 2003, “Causation as Folk Science,” *Philosophers’ Imprint*, 3 (4) [[available Online](http://www.philosophersimprint.org/003004/)].
* –––, 2003a, “General Covariance, Gauge Theories, and the Kretschmann Objection,” in K. Brading and E. Castellani (eds.), *Symmetries in Physics: Philosophical Reflections*, Cambridge: Cambridge University Press, pp. 110–123.
* –––, 2019, “Ontology of Space and Time: The Hole Argument”, in *Einstein for Everyone*: [available online](https://sites.pitt.edu/~jdnorton/teaching/HPS_0410/chapters/significance_GR_hole_argument/significance_GR_hole_argument.html).
* Pooley, Oliver, 2002, *The Reality of Spacetime*, D.Phil. thesis, University of Oxford.
* –––, 2006a, “A Hole Revolution, or are We Back Where We Started?”, *Studies in History and Philosophy of Modern Physics*, 37(2): 372–380.
* –––, 2006b, “Points, Particles, and Structural Realism,” in D. Rickles *et al.* (eds), *The Structural Foundations of Quantum Gravity*, Oxford: Oxford University Press, pp. 83–120.
* –––, 2013, “Substantivalist and Relationalist Approaches to Spacetime,” in R. W. Batterman (ed.), *The Oxford Handbook of Philosophy of Physics*, Oxford: Oxford University Press, pp. 522–586.
* –––, 2017, “Background Independence, Diffeomorphism Invariance and the Meaning of Coordinates”, in D. Lehmkuhl, G. Schiemann and E. Scholz (eds.), *Towards a Theory of Spacetime Theories,* Basel: Birkhäuser, pp. 105–144.
* –––, 2021, “The Hole Argument”, in E. Knox and A. Wilson (eds.), *The Routledge Companion to Philosophy of Physics*, London: Routledge, pp. 145–159.
* Pooley, Oliver and Read, James, 2021, “On the Mathematics and Metaphysics of the Hole Argument”, *British Journal for the Philosophy of Science*.
* Read, James, 2023, *Background Independence in Classical and Quantum Gravity,* Oxford: Oxford University Press.
* Renn, Juergen, *et al*. (eds.), 2007, *The Genesis of General Relativity: Sources and Interpretations*, (Boston Studies in the Philosophy of Science, Volume 250), 4 Volumes, Berlin: Springer.
* Rickles, Dean, 2005, “A New Spin on the Hole Argument,” *Studies in History and Philosophy of Modern Physcis*, 36: pp. 415–34.
* Roberts, Bryan W., 2020, “Regarding ‘Leibniz Equivalence’”, *Foundations of Physics* 50: 250–269.
* Rovelli, Carlo and Gaul, Marcus, 2000, “Loop Quantum Gravity and the Meaning of Diffeomorphism Invariance”, in Jerzy Kowalski-Glikman (ed.), *Towards Quantum Gravity,* Berlin: Springer, pp. 277–324.
* Rynasiewicz, Robert, 1992, “Rings, Holes and Substantivalism: On the Program of Leibniz Algebras,” *Philosophy of Science*, 45: 572–89.
* –––, 1994, “The Lessons of the Hole Argument,” *British Journal for the Philosophy of Science*, 45: 407–436.
* –––, 1996, “Is There a Syntactic Solution to the Hole Problem,” *Philosophy of Science*, 64 (Proceedings): S55–S62.
* –––, 2012, “Simultaneity, convention, and gauge freedom” *Studies in History and Philosophy of Modern Physics*, 43: 90–94.
* Smolin, Lee, 2006, “The Case for Background Independence”, in Dean Rickles, Steven French and Juha T. Saatsi (eds.), *The Structural Foundations of Quantum Gravity*, Oxford: Oxford University Press. pp. 196–239.
* Stachel, John, 1980, “Einstein’s Search for General Covariance,” in Don Howard and John Stachel (eds.), *Einstein and the History of General Relativity* (Einstein Studies, Volume 1), Boston: Birkhäuser, 1989, pp. 63–100. [This paper was first paper read at the Ninth International Conference on General Relativity and Gravitation, Jena.]
* –––, 1986, “What can a Physicist Learn from the Discovery of General Relativity?,” *Proceedings of the Fourth Marcel Grossmann Meeting on Recent Developments in General Relativity*, R. Ruffini (ed.), Amsterdam: North-Holland, pp. 1857–1862.
* –––, 1993, “The Meaning of General Covariance,” in J. Earman *et al*. (eds.), *Philosophical Problems of the Internal and External Worlds: Essays on the Philosophy of Adolf Gruenbaum*, Pittsburgh: University of Pittsburgh Press/Konstanz: Universitaetsverlag Konstanz, pp. 129–160.
* –––, 2006, “Structure, Individuality and Quantum Gravity”, in Dean Rickles, Steven French and Juha T. Saatsi (eds.), *The Structural Foundations of Quantum Gravity*, Oxford: Oxford University Press. pp. 53–82.
* –––, 2014 “The Hole Argument and Some Physical and Philosophical Implications,” *Living Reviews in Relativity*, 17(1): [available online](http://www.livingreviews.org/lrr-2014-1).
* Teller, Paul, 1991, “Substances, Relations and Arguments About the Nature of Spacetime,” *The Philosophical Review*, 100(3): 363–97.
* Teitel, Trevor, 2019, “Holes in Spacetime: Some Neglected Essentials,” *Journal of Philosophy*, forthcoming, [preprint available online](http://philsci-archive.pitt.edu/id/eprint/15972).
* Weatherall, James O., 2018, “Regarding the ‘Hole Argument’,” *British Journal for the Philosophy of Science*, 69: 329–350, [preprint available online](http://philsci-archive.pitt.edu/id/eprint/11578).
* –––, 2020. “Some Philosophical Prehistory of the (Earman-Norton) Hole Argument”, *Studies in History and Philosophy of Modern Physics*, 70: 79–87.
* Wilson, Mark, 1993, “There’s a Hole and a Bucket, Dear Leibniz,” in P. A. French, T. E. Uehling and H. K. Wettstein (eds.), *Philosophy of Science*, Notre Dame: University of Notre Dame Press, pp. 202–241.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=spacetime-holearg). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/spacetime-holearg/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=spacetime-holearg&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/spacetime-holearg/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

### Preprints

* Iftime, Mihaela, 2006, “[Gauge and the Hole Argument](http://arxiv.org/abs/gr-qc/0612141),” [Preprint at arXiv.org]
* Lyre, Holger, 1999, “[Gauges, Holes, and their ‘Connections’](http://arxiv.org/abs/gr-qc/9904036v1),” [Preprint at arXiv.org]

### Other Resources

* [John Norton’s “Goodies” Pages](http://www.pitt.edu/~jdnorton/Goodies/index.html)

## Related Entries

[determinism: causal](https://plato.stanford.edu/entries/determinism-causal/) | [Einstein, Albert: philosophy of science](https://plato.stanford.edu/entries/einstein-philscience/) | [general relativity: early philosophical interpretations of](https://plato.stanford.edu/entries/genrel-early/) | [physics: symmetry and symmetry breaking](https://plato.stanford.edu/entries/symmetry-breaking/) | [substance](https://plato.stanford.edu/entries/substance/)

### Acknowledgments

We are grateful to Erik Curiel, Robert Rynasiewicz and Edward N. Zalta for helpful comments on earlier drafts; and to the subject editor Guido Bacciagaluppi for suggestions for revisions.

[Copyright © 2023](https://plato.stanford.edu/info.html#c) by  
[John D. Norton](http://www.pitt.edu/~jdnorton/jdnorton.html) <[*jdnorton+@pitt.edu*](mailto:jdnorton+%40pitt%2eedu)>  
Oliver Pooley <[*oliver.pooley@philosophy.ox.ac.uk*](mailto:oliver%2epooley%40philosophy%2eox%2eac%2euk)>  
[James Read](http://users.ox.ac.uk/~orie2304/) <[*james.read@philosophy.ox.ac.uk*](mailto:james%2eread%40philosophy%2eox%2eac%2euk)>
<!--md-padding-ignore-end-->
