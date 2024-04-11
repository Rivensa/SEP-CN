# 生态遗传学 ecological (Michael Wade)

*首次发表于 2021 年 11 月 19 日*

生态遗传学是研究基因变化与生物和非生物环境特征之间关系的广泛领域。在种群遗传学理论中，环境在适应性进化中的作用往往隐藏在基因频率动态的递归方程中，常见假设是恒定选择系数意味着基因型、表型和适合度之间的恒定关系与环境无关。相比之下，生态遗传学的中心焦点是基因变异与环境变异之间的因果关系，其中明显的（尤其是离散的）表型变异被认为具有潜在的遗传成分。分子工具的出现和分子生态学在生态遗传学中的发展在过去十五年内极大地拓宽了该领域的概念范围。

生态遗传学的起源可以追溯到“现代综合”（赫胥黎 1942 年），通过 R.A.费舍尔、S.赖特和 J.B.S.霍尔丹的理论作品以及 J.赫胥黎、T.多布任斯基和 H.J.穆勒的概念作品和有影响力的著作，实现了遗传学和达尔文进化的整合。从这些遗传学的起点开始，很自然地，许多进化研究集中在导致种群内基因和基因型频率变化的力量上。在这种以遗传学为中心的观点中，四种进化力量（突变、随机遗传漂变、自然选择和基因流）在种群内和种群之间起作用，导致微观进化变化。这些力量共同作用，将种群内的遗传变异转化为更多或更少永久的种间遗传变异。在足够的时间内，微观进化力量被认为足以解释高级分类群特有的宏观进化模式。简而言之，进化遗传学领域的中心挑战是描述四种进化力量如何塑造基因、基因组和物种多样性的模式，特别强调自然选择在几种进化力量中的主导作用。

然而，基因为中心的观点并非大部分野外研究人员的主要研究重点或挑战，这些人包括博物学家、动物学家和生态学家。他们的关注点同样集中在自然选择上，因为这是唯一能够产生适应性、即生物体与环境之间适应性匹配的进化力量。然而，生态遗传学的重点在于环境在适应中的作用。生态遗传学是研究进化过程的学科，特别是自然选择导致的适应性，在生态背景下解释自然界中观察到的表型模式。进化遗传学倾向于成为建立在孟德尔定律基础上的应用数学分支，而生态遗传学则根植于理论与野外实验室的实证观察之间的相互作用。

* [ 1. 简介](https://plato.stanford.edu/entries/ecological-genetics/#Intr)
* [2. 经典生态遗传学与多态性](https://plato.stanford.edu/entries/ecological-genetics/#ClasEcolGenePoly)
* [3. 经典生态遗传学，种群规模和自然选择](https://plato.stanford.edu/entries/ecological-genetics/#ClasEcolGenePopuSizeNatuSele)
* [4. Sewall Wright 效应](https://plato.stanford.edu/entries/ecological-genetics/#SewaWrigEffe)
* [5. 相互作用及其对自然选择和随机漂变之间阈值的影响](https://plato.stanford.edu/entries/ecological-genetics/#InteTheiEffeThreBetwNatuSeleRandDrif)
* [6. 酶变异和漂变与选择争议](https://plato.stanford.edu/entries/ecological-genetics/#AlloVariDrifVsSeleCont)
* [7. 序列变异和漂变与选择争议](https://plato.stanford.edu/entries/ecological-genetics/#SequVariDrifVsSeleCont)
* [ 参考文献](https://plato.stanford.edu/entries/ecological-genetics/#Bib)
* [ 学术工具](https://plato.stanford.edu/entries/ecological-genetics/#Aca)
* [其他互联网资源](https://plato.stanford.edu/entries/ecological-genetics/#Oth)
* [ 相关条目](https://plato.stanford.edu/entries/ecological-genetics/#Rel)

---

## 1. 简介

在这篇文章中，我简要回顾了生态遗传学研究的历史，以及它最近在分子生态学这一子领域中与分子遗传学方法的整合。生态遗传学中的大多数研究都始于自然界中两种最突出的模式之一：

1. 适应性，即生物体与其环境之间的“适应”（参见适应度条目）；或者，
2. 多态性，通过自然选择在单一种群内维持两种或更多表型或遗传形式。

随着分子生态学的发展，后者可以显著扩展到在系统发育背景下探索物种之间的表型差异。这使得对有利于物种间表型适应性分化的环境进行更深入的研究成为可能。此外，用于系统发育学的相同分子方法通常可以修改为识别导致这些种间表型的基因或染色体区域（Gibson 等人，2020 年[其他互联网资源]）。

最早的研究试图记录自然选择在野生种群中的作用，以支持达尔文的理论。在这样做的过程中，这些研究试图证明自然选择进化不仅是一种历史性的因果力量，而且它也继续影响着当今野生种群的特征。在渐变论的假设下，不清楚自然选择是否会作用于野生种群中的表型，更不用说解释物种间的表型差异。许多最早的生态遗传学研究的起始观察，即最感兴趣的表型，是显著的表型多态性，例如蝴蝶翅膀上的斑点图案或蜗牛壳的条纹图案或染色体重排的多态性。这些要么已知具有遗传基础，要么可以安全地假定有遗传基础。

尽管自然选择是唯一能解释适应性的进化力量，但几种进化力量，单独或结合作用，至少在短期内可以维持遗传多态性。因此，在解释物种内多态性时，将因果代理分配给单一进化力量通常比解释适应性更困难。在这些显著多态性研究中，自然选择被“特权”为四种进化力量中的一个解释其维持的原因，至少部分原因是因为生态遗传学的创始人之一 E. B. Ford 与 R. A. Fisher 有广泛合作（参见 Ford 1975）。在早期时期（1928-1950 年），解决维持遗传多态性的因果代理问题很大程度上是通过定义而不是经验观察解决的（参见下面第 2 节：经典生态遗传学和多态性）。也就是说，只有那些罕见形式被认为“过于普遍”而不能通过反复突变来解释的多态性才适合研究。此外，如果物种丰富，那么随机遗传漂变同样可以被排除为相关过程。事实上，生态遗传学中持续存在的争议主要集中在自然选择是否能够解释观察到的多态性频率，或者这些频率的变化是否表明随机遗传漂变起到了重要作用（例如，参见 Schemske 和 Bierzychudek [2001]关于沙漠一年生植物 Linanthus parryae 花色多态性解释的讨论）。

在后期（1966 年至今），随着同工酶和分子遗传学的出现，允许对更少偏见的遗传多态性样本进行研究。现代同工酶和单核苷酸多态性的特征和分析仍然保留了早期对自然选择作为塑造遗传物质最重要的进化力量的强调。换句话说，关于物种分化模式的适应性解释往往优于非适应性解释（参见 Dapper 和 Wade [2020]关于生殖基因物种快速多样化原因的最新综述）。

生态遗传学起源于现代综合理论的主要理论方面已经确立，适应性奇迹已经清晰，但实际上很少有自然选择行为的实例。通过渐变实现适应性完美需要长时间，其中

> … 一个非常微弱的选择效应，持续时间相对较长，将相当于一个作用时间比例上较短的更大效应。 （R. A. Fisher 1921 年，与 S. Wright 通信中引用 Provine [1986: 247]）

然而，非常微弱的自然选择对于生态遗传学的目标，即阐明野外中自然选择的作用，构成了障碍。 因此，将焦点转向理解强烈自然选择在维持可见遗传多态性中的作用是可以理解的。 正如其创始人 E. B. Ford 所说，

> 它[生态遗传学]提供了调查当前正在发生的进化过程的手段，也是唯一直接的手段。 （1975: 3）

传统生态遗传学研究对自然选择当前作用的关注在过去二十年中以几种方式得到拓展。首先，早期研究倾向于关注单个种群的进化，而现在生态遗传学中有一个显著的重点是关于种群遗传结构的元种群以及迁移、灭绝和殖民对进化和适应过程的作用（例如，Goodacre 2002）。其次，早期研究强调显著的多态性或染色体重排及其对适应度的影响，而 20 世纪 60 年代末生物化学遗传学的出现显著拓宽了表型的范围，首先是应用电泳方法于种群研究。这些研究揭示了新的生物化学表型酶迁移中丰富的“隐藏多态性”。这些方法将生态遗传学的领域从经典的“显著表型多态性”（如颜色、形状和行为）拓展到酶功能的生理领域。然而，对功能生物化学表型的新重点并没有改变该领域的解释或因果框架。确定自然选择在维持酶多态性中的作用，例如乙醇脱氢酶（一种参与环境醇类排毒的酶）的快/慢多态性、超氧化物歧化酶（催化游离氧自由基的去除）或酯酶（参与许多昆虫中杀虫剂的解毒）的作用，成为研究的主要焦点，目的是找到酶变体的选择基础，即在其物理和动力学特性方面的差异。事实上，选择派和中立派学派之间关于“平衡”多态性维持的争议根源（参见 Lewontin 1974）在早期生态遗传学研究中关于随机遗传漂变与自然选择的争议中（见下文）。

近年来 DNA 测序技术的出现开启了分子系统发育学和分子生态学的增长。这项新技术不仅增加了一个新的表型，还为生态遗传学研究增加了更加显著的历史（系统发育）维度。分子系统发育学和比较序列分析已成为调查塑造 DNA 序列的进化模式和过程的主要现代工具。这些方法加强了关于生物地理学、物种形成和适应的推断，特别是关于伴随生态释放和适应性辐射的分类谱系多样化。它们将焦点从物种内的多态性转移到了类群间的多样化（例如，Kostyun 等，2019 年），并允许调查单个基因的历史（Gibson 等，2020 年[其他互联网资源]）。例如，生态基因组数据允许重建加拉帕戈斯群岛被野生番茄种类 Solanum pimpinellifolium 入侵的过程，通过与一种密切相关的特有种 Solanum cheesmaniae 的杂交和内部杂交。此外，与特有种相似的橙色果实颜色的适应���表型与 Solanum 基因组中包含已知果实颜色位点的两个内部杂交区相关联，支持适应性收敛是由内部杂交在遗传上促进的推断（Gibson 等，2020 年[其他互联网资源]）。

这些基于 DNA 的方法特别认识到了两种新模式。第一种是“纯化选择”的盛行，其中自然选择的保守力量被视为多样性的障碍。正是自然选择在分子水平上的这种保守作用赋予了对模式生物的遗传结构与人类遗传学的调查更强大的力量。第二种模式是发现存在古老多态性的存在，即分子遗传变异的年龄可能大于其发生的物种或类群的年龄。自然选择仍然是现代序列研究中的特权解释力量。事实上，寻找、表征和解释独特的分子模式，如密码子偏好（Behura＆Severson，2013 年）和选择性横扫，已经，如果说有的话，提高了自然选择在进化研究中的焦点解释力量。也就是说，DNA 序列中冗余密码子的非随机或偏倚使用被视为证据，即使它们对氨基酸序列没有影响，冗余密码子在功能上并非完全等效，因为一些允许更有效的基因表达。这被视为证据，即自然选择是全能的，甚至可以影响基因组中最小和最不显著的组成部分。

在这篇文章中，我回顾了经典的生态遗传学，然后讨论了随着该领域从单个种群扩展到遗传结构化的种群以及从表型到生化和 DNA 序列多态性而出现的新型过程和解释。我将展示，尽管生化和 DNA 序列数据的可用性提供了明显的技术改进，但关于随机遗传漂变和自然选择在进化中的作用的中心早期争议至今仍在继续。也就是说，更精细的尺度或更还原论的遗传数据尚未导致对生态遗传学基础的原始概念问题的解决。

## 2. 经典生态遗传学和多态性

从历史上看，生态遗传研究的起点是发现自然种群内的变异，即表型多态性。随后的目标是三重的：

1. 确定多态性是否具有遗传成分;
2. 确定每种多态类型的频率及其空间和时间变异性;以及,
3. 确定自然选择如何维持多态性，无论是单独还是与其他进化力量结合。

Ford 将遗传多态性定义为

> …在同一地区同时出现一个物种的两种或更多不连续形式，其比例是如此之高，以至于最稀有的形式不能仅通过反复突变来维持。(1975: 109; 另见 Ford 1940)

尽管反复突变可以在突变-选择平衡下无限期地维持多态性，但在这里，Ford 显然对自然选择在维持多态性中发挥更积极的作用感兴趣。早期人口遗传学理论的发展，特别是 Fisher (1930) 的发现，有助于完成第一个任务。Ford 解释这些发现意味着自然发生的不连续表型变异“几乎总是遗传的”。这种推理源自理论发现，即在大型种群中，一个等位基因（或染色体倒位）的正负适应性效应不太可能完全平衡。因此，具有罕见中性突变的个体数量与其起源以来的世代数量成正比。此外，如果真的是中性的话，这些等位基因将通过随机遗传漂变在大型种群中传播得如此缓慢，以至于...

> 生态遗传学要求其中立性所需的微妙平衡将会被环境变化和生物体的遗传装备的改变所打破（Ford 1975: 110）

在中立等位基因达到可观频率之前。此外，作为持久多态性原因的经常性突变被认为是最不可能的，事实上，这种进化原因在 Ford 的遗传多态性定义中明确被排除在外（见上文）。因此，生态遗传学的创始人认为中性遗传多态性是一个异常罕见的事件，因此，这些多态性是强烈、积极自然选择的标志。

Ford（1940）进一步区分了两种选择性多态性，即瞬时多态性和平衡多态性。瞬时多态性是由于新的有利突变在通过自然选择取代其祖先等位基因的过程中引起的，这被认为是不太可能的，因为“…有利基因通常已经被纳入物种的遗传构成中”（Ford 1975: 110）。这样的陈述反映了这样一种观点，即自然界中的生物通过费雪渐进式自然选择的长期作用过程而精巧地适应其环境（参见自然选择条目）。这是对当前行为文献中更明确的适应主义观点的前奏（参见 Shuster＆Wade 2003 的评论）。将进化过程视为主要是对现有生物适应性的完善的观点是费雪进化遗传学理论的一个重要组成部分（Wade＆Goodnight 1998）。

从上述福特的著作中引用的内容可以清楚地看出，对于间断性表型多态性存在遗传基础及其通过自然选择维持的假设，但这些原则也可以在一个陈述中找到：

> 鉴于这些考虑，很明显，如果任何单因子性状普遍存在，那么它必定具有一定的[适应性]价值。事实上，即使它的频率只有 1%，它也很可能受到了选择的青睐。（福特，1975 年：110）

因此，生态遗传学家的主要目标是准确辨别自然选择是如何通过作用于不同性别、生活史的不同阶段、不同地点或生物体生命周期中的不同时期的相对强度的对立适应效应来维持平衡多态性。

存在雄性和雌性是福特讨论的一个平衡多态性的主要例子，因为

> 很明显，任何雄性增加而牺牲雌性的倾向，或者反过来，都会受到选择的反对。（福特 1975 年：111）

费雪（1930 年）首次提出，由于每个个体都有一个母亲和一个父亲，雄性的平均适应度必须等于雌性的平均适应度乘以性别比，表示为雌性到雄性的数量（即，每个雄性的平均交配伴侣数；另见舒斯特和韦德 2003 年，第 1 章）。因此，适应度随稀有度增加，而在这种情况下，每当种群性别比偏离单位时，一种在出生时增加少数性别数量的基因将具有选择优势。因此，单位性别比是一个稳定的、平衡的多态性，在许多物种中通过性染色体决定性别来实现，福特称之为“内置的遗传开关机制”，这是其他遗传多态性的特征，如贝氏拟态。一般来说，构成表型多态性的两种不同类型的适应度必须相等，才能通过自然选择在种群中保持在一个中间平衡频率（达尔文 1871 年，第 II 卷，第 14 章中指出的一个观点）。然而，对于非性别相关（甚至是性连锁的）多态性的选择力平衡与维持等性别比所需的选择力平衡非常不同。将存在不同性别作为平衡多态性的一个例子是误导性的，或者至少不充分代表维持一般平衡多态性所需的选择力。

## 3. 经典生态遗传学、种群规模和自然选择

创始生态遗传学家否认了随机遗传漂变在进化中的重要作用（请参阅遗传漂变词条）。随机遗传漂变与具有恒定效应的单基因自然选择的理论相互作用可见于图 1。费希尔在他的进化理论中假设自然种群达到或维持非常大的规模，正如他与 S.赖特通信中所见（费希尔 1929 年 8 月 13 日致 S.赖特的信函，引自 Provine 1986: 255），他在信中表示“我相信 N 通常必须是行星上的总人口，在性成熟时进行统计”。同样，根据他的知识传记作者 W. Ewens：

> 费希尔从未像他应该那样多关注[有效种群规模]的概念...并在他的分析中使用了极高的种群规模（高达 1012），这在一般情况下显然过于庞大。（2000: 33）

对于如此庞大的种群规模，选择和漂变之间的阈值（见图 1），由有效种群规模 Ne 确定，对进化没有太大影响。也就是说，随机遗传漂变的强度，与（1/2Ne）成正比，非常非常弱，即使具有非常小的 s 值的基因，其进化命运完全由选择决定。这就是“费雪渐变主义”的本质——非常小的选择性力量在足够长的时间内可以对适应产生影响，类似于具有较大效应的基因在较短时间内产生的效应。对于非常大的 Ne，随机遗传漂变的领域受到极大限制，而自然选择的领域扩大（见图 1）。

![a diagram link to extended description below](https://plato.stanford.edu/entries/ecological-genetics/figure1.svg)

图 1. 随机遗传漂变和自然选择的相互作用。选择的强度由单个基因的选择效应 s 来衡量，随机遗传漂变的强度由（1/2Ne）表示，其中种群具有有效大小 Ne。当 s 超过（1/2Ne）时，基因的进化命运主要由自然选择决定。当 s 小于（1/2Ne）时，基因的进化命运主要由随机遗传漂变决定。因此，自然选择（上部）和随机遗传漂变（下部）的进化领域由有效种群规模确定的波状边界分隔。【图 1 的详细描述在附录中。】

然而，生态遗传学家并没有完全将随机遗传漂变视为一个重要的进化力量，原因与费雪相同。生态遗传学家利用标记-重捕方法进行的野外观察记录了长期研究的大多数自然种群中一代到一代的种群规模波动，达到或超过一个数量级。因此，生态遗传学家认为小的局部种群规模并不罕见。事实上，福特认为

> … 生态遗传学认为，生物体自动生成其自身的丰富度和稀有度循环，并且这些循环所关联的选择压力的变化可能极大地增加进化的速度；（Ford 1975: 36）

尽管小种群大小的发生并不少见，漂移在这些情况下可能最为有效，但在生态遗传学中，随机遗传漂移仍被认为是一个无关紧要的进化力量，因为在人口数量下降期间，自然选择被视为特别强大。也就是说，自然选择的强度与种群密度呈负相关。因此，随着人口规模和 Ne 由于环境压力而下降，自然选择的力量增强，使得领域之间的边界（图 1）总是有利于选择。最小的种群显示出很少的表型变异，这被视为它们是最适应或最适应的种群的证据。因此，小种群中缺乏表型变异是因为在前一时期的下降期间被自然选择淘汰了。相反，在人口增加期间，环境压力很小，因此自然选择较弱，更容许变异。这种放松选择的概念为 Ford 提供了一个原因，即在大型和不断增长的自然种群中观察到罕见表型变体的增加。如果选择压力与种群大小成反比增加，那么随机遗传漂移在进化中的作用必须受到极大限制。

此外，Ford（1975: 38）认为，生态遗传学研究清楚地表明，基因在自然界中的选择优势“…相当普遍地超过 25%，而且经常远远超过…”。参考图 1，这意味着自然种群中 s 值的范围明显高于 0.01，即使在非常小的种群中，基因也牢固地处于受自然选择支配的领域。

此外，福特认为，选择性压力的强度和性质经常会随着密度的变化而改变，因为

> … 当一个生物丰富时，其适应性需求并不相同，或者当与之相互作用的植物和动物形式不同时。 （福特 1975 年：39）

实际上，他认为由于丰度变化引起的波动选择压力“使赖特的演化平衡理论”无效，他称之为“牵强”。 有趣的是，福特及其同事认为，赖特所假设的基因细分将促进快速进化，但原因与赖特的原因截然不同，并且通过不同的遗传机制（自然选择而不是随机遗传漂变，局部选择和种群间选择）。 福特（1975 年：40-44）认为，将一个大规模、地理范围广泛的种群细分为相对较小的群体会促进快速进化，因为

> … 当种群占据一系列受限制的栖息地时，它们可以在每个栖息地中独立地适应当地环境，而当分布在更大的区域时，它们只能被调整[通过自然选择]以适应那里多样化条件的平均值。然而，这需要适应性不能不断地被从一个小殖民地流入另一个小殖民地的移民所破坏。

在这里，他提出了在没有迁移的情况下对本地条件进行专门适应和在存在迁移时对全球条件进行广义适应之间的权衡。用现代术语来说，这被称为基因型与环境的相互作用，其中基因的选择效应 s 随环境变化而变化。一个基因在一个环境背景下可能是适应性的（即 s>0），但在另一个环境下可能是不适应性的（即 s<0）。在本地环境之间的迁移会混合适应性和不适应性对选择的反应，并减少基因频率变化的平均幅度。从这个意义上讲，基因型与环境的相互作用对适应度被视为一种进化约束，因为它限制了基因频率变化的速率。这种限制可以通过停止基因流和在不同的本地环境之间混合基因来简单地消除。因此，图 1 中所示的固定选择效应必须被视为跨环境变量选择效应的平均值。显然，当在栖息地之间存在基因流时，相反符号的大本地效应必须被平均，而平均化倾向于减少基因的选择效应幅度。福特还提出，遗传机制涉及“平衡以适应其本地环境的基因复合物”。也就是说，他声称基因之间的相互作用，或者上位性，对本地适应起到了作用。因此，福特在他关于快速进化的案例中引用了基因型与环境的相互作用对适应度以及基因-基因相互作用对适应度，尽管两者都减少了基因的平均选择效应。这一论点也与他关于一个基因的适应优势在自然种群中通常为 25%的说法相矛盾。这两种相互作用改变了自然选择与随机遗传漂变之间的分界线的描述（图 1）；事实上，它们倾向于提高这一分界线，从而增加随机遗传漂变的领域。在转向相互作用效应之前，我将通过来自自然种群的数据检验随机遗传漂变的生态遗传学的代表性讨论。

## 4. Sewall Wright 效应

在《生态遗传学》中，对蛾类 Panaxia dominula（Fisher & Ford 1947）的一个小自然种群中分离的几种翅膀颜色变异进行了调查，使用标记-重捕技术进行了研究，这是所有进化研究中单一种群中最长时间连续研究之一。Fisher 和 Ford 的目标是确定变异体（medionigra，杂合子，和 bimaculata，纯合子）频率的年度波动是更好地由自然选择还是随机遗传漂变来解释。（蜗牛 Cepea nermoralis 的条纹图案是关于自然选择和遗传漂变相对作用的类似讨论的主题[Cain & Shephard 1954; Cain & Provine 1992; Millstein 2008, 2009]。）他们从分析中推断

> 自然种群总体上，像这项研究所致力于的那样，受到选择作用的影响，其方向和强度时而不同，并且足够大，足以导致所有基因频率的波动变异，这与其他野生种群可观察频率研究的结论非常一致。...然而，我们认为，尚未充分强调这一事实对于将特定的进化重要性归因于在非常小的孤立种群中可能发生的基因比例波动的理论是致命的。...
>
> 因此，我们的分析是第一个可以测试野生种群中随机存活和选择所起作用的相对部分的分析，并不支持偶然波动在进化中具有任何重要性的观点。（Fisher & Ford 1947: 171, 172; 引自 Provine 1986: 423）

通过这篇论文，费雪和福特将关于自然选择和随机遗传漂变在进化中相对作用的长期争论从理论转移到了实践。值得注意的是，在第一项仅有八年观察单一位点具备不同等位基因的研究中，他们确信地否定了赖特的理论以及随机遗传漂变。

赖特（1948 年）在对他们的分析做出回应时首先指出，他的进化理论明确涉及多种力量的同时作用（选择、漂变、突变和迁移），并坚决反对费雪和福特的范式，即观察到的基因频率波动必须由选择或漂变中的一个单独负责（参见种群遗传学条目）。赖特指出，为了得出他们的统计结论，福特和费雪必须包括十年前的基因频率数据，尤其是在没有任何人口规模估计的时期。没有这个早期数据点，平均波动就会小得多，不具备显著性。他指出，就像人口数量的标记-重新捕获估计一样，基因频率本身也是估计值，根据报告的样本量，基因频率的变异占到费雪和福特试图解释的观察到的变异的一半以上（55.2%）。然后他指出，如果假设只有自然选择的单一解释，那么即使没有抽样变异，观察到的基因频率波动也会很大，这意味着等位选择系数的时间变化必须从接近致死（或不育）到极大优势（即从-0.50 到+0.50）。然而，费雪和福特（1947 年）没有提供任何环境因素作为选择因素的时间变化水平的可比指标。赖特认为分析中使用的有效种群大小几乎肯定过大，可能超过一个数量级，而费雪和福特也没有尝试估计预期会降低有效大小的因素，比如繁殖数量的时间变化、幼虫中的非随机死亡（在家族内聚集的死亡，可能影响经历> 85%蛹期死亡的病毒感染的物种）或导致后代数量变异的其他原因（比如雌性卵数量的变异或雄性交配数量的变异）。在一次坚决的回应中，费雪和福特（1950 年）将基因频率中的偶然波动称为赛沃尔·赖特效应，这个术语至今仍被用作随机遗传漂变的同义词。

福特（1975 年：146）通过覆盖更多年份的更大数据集重新审视了这次交流，并认为赖特在每个方面都是错误的。福特还表明，较稀有基因的选择优势变化范围很广，从-0.10 到+0.20，并且没有杂合子优势的证据。然而，在这些数据中，他并没有发现预期的选择强度与种群大小之间的负相关。在接下来的几十年里，来自各种其他生物和自然种群的数据变得可用，对这些数据的审查使福特得出结论：

> 因此，不再可能将随机遗传漂变或突变归因于对进化的控制起到重要作用。（1975 年：389）

因此，在其创立时期，生态遗传学始终坚定地支持自然选择作为进化变化的统一解释。（后来的实验室研究表明，在发育过程中，色斑的表达对热环境敏感或可塑，因此基因频率估计可能存在显著的测量误差，这是另一个未在 Ford 分析中考虑的变异来源。这倾向于削弱基因型与表型之间的联系，从而削弱了作用于表型的选择与潜在基因型之间的关系。此外，经验证据发现，正如 Wright 所预期的那样，种群规模的时间波动、雌性繁殖力的巨大方差以及性选择将有效数量减少到费舍尔-福特估计的一半以下。此外，更仔细的研究已将福特对平均基因选择系数幅度的估计减少了约三分之二[参见 Cook＆Jones 1996]。）

## 5. 相互作用及其对自然选择和随机漂变之间阈值的影响

无论是基因型-环境互作用（G×E）还是基因-基因互作用（上位性或 G×G）的存在都极大地复杂化了选择系数的估计。像福特这样的生态遗传学家假设了一种可以改变基因选择系数符号的互作用类型，这种互作用类型可能随着环境（包括密度）或遗传背景的变化而改变。这种选择效应的逆转需要所谓的“交叉型”G×E 反应规范或 G×G 的加性-加性上位性（Wade 2002）。交叉型 G×E 的最简单模型包括在两种不同环境 E1 和 E2 中的加性选择（即，在每种环境中，基因型 AA、Aa 和 aa 的基因型适合度分别为 1+2s、1+s 和 1，第二种环境中的顺序相反），其频率分别为 fE1 和 fE2。随着两种环境在频率上的波动，无论是空间上还是时间上，A 等位基因的选择效应在大小和符号上都会发生变化（见图 2）。根据两种不同环境的相对频率以及它们之间的基因流或迁移量，A 等位基因平均上可能是一个“好”基因或一个“坏”基因，与适合度相关，可能是一个对适合度有重大影响或轻微影响的基因，甚至是一个中性基因，如果这两种环境同样丰富。两种环境之间的迁移量越小，当地适应程度就越大，正如理论和福特所建议的（见上文）。然而，根据费舍尔理论，基因的平均选择效应必须小于特定时间和地点的平均观察值，因为长期平均值包含正值和负值的 s。此外，随着当地环境条件持续波动，当地 s 值的变化符号，A 等位基因对适合度的平均效应也会向下移动，从选择领域移动到漂移领域，正如赖特所建议的。因此，福特所设想的种群细分方式，即在每个地方都有选择作用，尽管方向不同，创造了而不是消除了随机遗传漂变的增加机会。

![a diagram link to extended description below](https://plato.stanford.edu/entries/ecological-genetics/figure2.svg)

图 2. 当存在基因型-环境互作用或加性-加性上位性时，随机遗传漂变和自然选择的互动（见文本）。单个基因的选择效应 s 随着交替环境 fE1 和 fE2 的频率变化或由基因流连接的交替等位基因 pB 和 pb 在相互作用位点的频率变化而改变幅度。因此，基因的选择效应和有效种群大小都不保持恒定。结果，相对于图 1，自然选择和随机遗传漂变领域之间的阈值边界大大扩大，这意味着在一系列 s 和 Ne 值范围内，两种力量发挥着更多或更少相等的进化作用。此外，这种互动方式开启了这样��种可能性，即交替环境或其他位点的交替等位基因相对频率的变化可以在基因演化过程中将基因的选择效应从选择领域移动到漂移领域，反之亦然。【图 2 的详细描述在附录中。】

加性-加性上位性也会对“基因”的选择视角产生非常相似的影响（Goodnight & Wade 2000；Wade 2001，2002）。这种 G×G 的最简单模型，涉及 A 和 B 位点之间的相互作用，每个位点都有交替等位基因，导致作用于 A 等位基因的平均基因选择系数为 s(pB−pb)，其中 pB 和 pb 是与 A 位点的等位基因在加性-加性模型中相互作用的 B 位点的交替等位基因的频率。B 位点的交替等位基因的相对频率决定了 A 等位基因是“好”基因还是“坏”基因，与适合度相关，是对适合度有重大影响或轻微影响的基因，甚至是一个中性基因，当背景等位基因同样丰富时（即 pB=pb）。每当其上位性伙伴的等位基因频率发生变化，无论是通过漂移还是选择，A 等位基因的选择效应也会发生变化，并且，就像 G×E 的情况一样，它会将自然选择和随机漂移之间的边界移动（图 2），增加后者的领域，减少前者的领域。

## 6. 酶变异与漂变与选择之争

使用显著多态性来研究各种不同进化力量的相对作用的中心问题是，它们在适应功能或遗传变异量方面并不是遗传多样性的无偏样本。事实上，福特（见上文）采用的遗传多态性定义融合了这两种偏见的本质。有一段时间，人们相信“我们困境的解决方案在于分子遗传学的发展”（Lewontin 1974: 99）。随着电泳技术的出现，几乎可以研究任何生物体的蛋白质的氨基酸序列，并且首次可以量化基因组中的氨基酸替换形式的遗传多样性水平。

电泳技术可以使用两种遗传多样性测量：

1. 具有多态性的座位数; 和，
2. 每个个体每个座位的平均杂合度。

从跨多个物种的研究中估计，大约有 15-40%的座位是多态的，平均个体在其基因组的 5-15%处是杂合的。由于这项技术主要测量导致电荷变化的氨基酸替代，即所有可能氨基酸替代的三分之一，可以推断这些是显著低估了实际水平的遗传多样性水平。遗传变异是无处不在的，大多数基因都是多态的这一结论是不可避免的。对等位酶变体的适应功能和在生理水平上的平衡选择的探索随之而来，就像在生态遗传学的最早研究中一样。

然而，观察到的遗传多态性水平为进化遗传学的数学理论提出了一个无法逾越的问题。遗传变异的数量远远超过了福特及其同事在自然种群中显著表型多态性中观察到的平衡选择类型所能解释的范围。基本问题在于，为了解释观察到的同工酶多态性水平所需的选择性死亡数量超过了几乎所有物种的繁殖过剩。这就是遗传学焦点必须与生殖和生存生态学相结合的地方。霍尔丹（1957 年）称之为“自然选择的成本”，也被称为替代负荷。换句话说，如果独立选择的同型基因型的死亡率（也称为“分离负荷”）超过了种群产生的总后代数量。因此，基村（1983 年）提出了他的分子进化中性理论，该理论基于这样的理论观察：新突变等位基因的选择系数 s>0 固定的概率约为 2s（Wright 1931: 133）。由于 s 通常被认为在 0.001 至 0.0001 的范围内，新有利突变因偶然性丧失的可能性相当高，仅略低于真正中性等位基因因偶然性丧失的可能性。

蛋白质结构研究表明，蛋白质的功能性非同义位点，构成其氨基酸的少数部分，演化速度比非功能性、同义或结构位点慢几倍。基村认为，分子水平上的许多，如果不是大部分，进化变化主要由随机遗传漂变而非自然选择决定，这一观点颇具争议。正如基村所指出的，

> …如果某种信条不断被多数人赞许地谈论，被顶尖权威在他们的著作中认可并在课堂上教授，那么一个信念将逐渐在一个人的头脑中建立起来，最终成为指导原则和价值判断的基础。无论如何，这是生物学历史上泛选择主义者或“新达尔文主义”立场最为稳固的时期：传统“综合理论”进化的全盛时期。 （1983: 22）

很快就意识到，一种更还原论的方法（DNA 序列研究）可能有助于解决每个氨基酸是否具有某种功能价值的问题，因为生命密码的冗余位置被认为提供了真正“中性”进化速率的估计，这是由于在没有选择的情况下随机遗传漂变的作用。

## 7. 序列变异与漂变与选择之争

进化的中性理论是生态遗传学的对立面。它指出，独立于环境的随机遗传漂变，而不是自然选择，主导了 DNA 和蛋白质水平上的大多数进化变化。同时，它承认自然选择在塑造表现出与环境适应性匹配的形态和生理特征方面占主导地位。这是一个悖论，因为大多数 DNA 似乎是非功能性的，而大多数外部可观察的表型似乎具有适应性功能。

使用 DNA 序列数据测试理论的方法包括比较密码子内不同种类位点（碱基对）的相对进化速率，并利用遗传密码中的冗余。中性进化速率是根据物种内的多态性水平或分离位点的数量，或者物种之间在沉默或冗余位点替代（例如，Dapper & Wade 2020）中的分化来估计的。沉默位点是指在蛋白质中不导致氨基酸变化的位点，因此在通常意义上是非功能性的。相反，选择性变化或选择性约束的速率是通过替换位点来评估的，即导致氨基酸变化的碱基对变化。如果替代或多态性的速率低于中性，这表明选择性约束或净化自然选择在防止变化并保持功能面对突变损害时起作用。如果替代速率高于中性，则表明存在适应性替代的证据。

分子进化研究还揭示了伪基因的存在，这些伪基因是由串联复制和随后突变失活单拷贝基因而衍生的非编码 DNA 区段。伪基因的无功能使得其所有密码子在效果上都是中性的，并提供了中性进化速率的另一个估计。重要的是，在功能基因中演化缓慢的“替换”位点已被证明在非功能串联复制伪基因中演化更快。

在选择位点附近中性变异模式的变化也具有信息量，因为在适应性替代期间，与被选择 DNA 片段相关的中性变异体会随之一起被携带或“扫荡”到固定状态。这种“选择性扫荡”会暂时降低选择位点附近的中性变异水平，直到可以被突变替代。中性变异的减少程度或“选择的痕迹”取决于选择的强度、选择期间的重组频率以及选择开始后的时间。当选择扫荡由单一的新有利突变的出现引发时，这种痕迹最为显著。在新的选择结果于环境变化并开始作用于已存在或种群中的现有变异时，对中性多态性的影响可能非常小。

Ford 所观察到的平衡选择在中性多样性上留下了独特的“反向”足迹(Kreitman & Di Rienzo 2004)。由于构成平衡多态性的 DNA 片段在人口中受选择的时间比基于随机漂移预期的时间长得多，这些片段具有更高的有效种群大小(由于后代数量的变异比随机更低)。因此，它们有更长的时间来在附近的中性位点积累突变变异。在某些情况下，这段时间比创建新物种所需的时间更长，导致跨物种多态性(Cho 等人 2006)。因此，在分子平衡多态性附近预计中性多样性水平会增加。当交配系统限制重组时(例如，自交或近交物种)，在平衡多态性附近的中性多样性区域可能很广泛(例如，拟南芥[田等人 2002])。

Kimura 预测，在有序列数据可用来测试他的分子进化中性理论之前，沉默替换会比替换替换更快地进化。分子遗传学研究已经证实了他的预测：沉默位点的进化速度比替换位点快几倍。这些研究清楚地表明，在 DNA 序列水平上，自然选择的主要作用方式是净化选择。正是这种高度保守的自然选择方面使得跨物种的发育过程的比较分子进化研究得以进行，这些物种包括人类和果蝇。在分子水平上，大多数基因虽然在序列上是多态的，但并没有显示出平衡选择的证据，而是表现出与中性理论相符的变异模式。

选择和随机漂移在 DNA 序列的连锁区域之间的相互作用是分子进化中最活跃的理论和实证研究领域之一。理论表明，除了某些参数空间的区域外，要清晰地分离选择和漂移的进化力量的作用是困难的，这些区域的普遍性仍然未知，并且存在许多争论。与 Fisher 和 Ford(1947)的研究一样，大多数实证研究将所有偏离严格中性预期的情况解释为自然选择的证据，而不解决代理问题。例如，密码子偏好是自然选择影响基因明显非功能性组分的证据。因此，原始的生态遗传学观点认为自然选择是唯一重要的进化力量，尽管理论取得了进展，并且有更多的还原性遗传方法可供使用，但这一观点仍然贯穿于现代分子进化的大部分研究中。福特(1975: 389; 见上文)的总结陈述与分子进化遗传学家 E. Nevo 二十五年后的总结非常相似。

> 生物多样性的演变，即使在小的孤立种群中，主要是由自然选择驱动的，包括多样化、平衡、循环和净化选择制度，与突变、迁移和随机性[随机遗传漂变]的影响相互作用，但最终是由自然选择主导的。 （Nevo 2001: 6223）

## Bibliography

* Behura, Susanta K. and David W. Severson, 2013, “Codon Usage Bias: Causative Factors, Quantification Methods and Genome-Wide Patterns: With Emphasis on Insect Genomes”, *Biological Reviews*, 88(1): 49–61. doi:10.1111/j.1469-185X.2012.00242.x
* Cain, A. J. and William Provine, 1992, “Genes and Ecology in History”, in *Genes in Ecology*, R.J. Berry, T.J. Crawford, and G.M. Hewitt (eds), Oxford: Blackwell Scientific, 3–28.
* Cain, A. J. and P. M. Sheppard, 1954, “Natural Selection in Cepaea”, *Genetics*, 39(1): 89–116. doi:10.1093/genetics/39.1.89
* Cho, Soochin, Zachary Y. Huang, Daniel R. Green, Deborah R. Smith, and Jianzhi Zhang, 2006, “Evolution of the Complementary Sex-Determination Gene of Honey Bees: Balancing Selection and Trans-Species Polymorphisms”, *Genome Research*, 16(11): 1366–1375. doi:10.1101/gr.4695306
* Cook, L. M. and D. A. Jones, 1996, “The *Medionigra* Gene in the Moth *Panaxia dominulcr*: The Case for Selection”, *Philosophical Transactions of the Royal Society of London. Series B: Biological Sciences*, 351(1347): 1623–1634. doi:10.1098/rstb.1996.0146
* Dapper, Amy L. and Michael J. Wade, 2020, “Relaxed Selection and the Rapid Evolution of Reproductive Genes”, *Trends in Genetics*, 36(9): 640–649. doi:10.1016/j.tig.2020.06.014
* Darwin, Charles, 1871, *The Descent of Man and Selection in Relation to Sex*, Volume II, London: John Murray.
* Ewens, Warren C., 2000, “The Mathematical Foundations of Population Genetics”, in *Evolutionary Genetics: From Molecules to Morphology*, Rama S. Singh and Costas B. Krimbas (eds), New York: Cambridge University Press, 24–40.
* Fisher, R. A., 1930, *The Genetical Theory of Natural Selection*, Oxford: Clarendon Press.
* Fisher, R. A. and E. B. Ford, 1947, “The Spread of a Gene in Natural Conditions in a Colony of the Moth *Panaxia dominula L.*”, *Heredity*, 1(2): 143–174. doi:10.1038/hdy.1947.11
* –––, 1950, “The ‘Sewall Wright Effect’”, *Heredity*, 4(1): 117–119. doi:10.1038/hdy.1950.8
* Ford, E. B., 1940, “Genetic Research in the Lepidoptera: Being the Galton Lecture of London University, Delivered August 1939, to the Seventh International Congress of Genetics”, *Annals of Eugenics*, 10: 227–252. doi:10.1111/j.1469-1809.1940.tb02249.x
* –––, 1975, “Balanced Polymorphism in *Panaxia Dominula*”, in his *Ecological Genetics*, third edition, London: Chapman and Hall, 128–146 (ch. 7).
* Goodacre, Sara L., 2002, “Population Structure, History and Gene Flow in a Group of Closely Related Land Snails: Genetic Variation in Partula from the Society Islands of the Pacific”, *Molecular Ecology*, 11(1): 55–68. doi:10.1046/j.0962-1083.2001.01422.x
* Goodnight, Charles J. and Michael J. Wade, 2000, “The Ongoing Synthesis: A Reply to Coyne, Barton, and Turelli (2000)”, *Evolution*, 54(1): 317–324. doi:10.1111/j.0014-3820.2000.tb00034.x
* Haldane, J. B. S., 1957, “The Cost of Natural Selection”, *Journal of Genetics*, 55(3): 511–524. doi:10.1007/BF02984069
* Huxley, Julian, 1942, *Evolution, the Modern Synthesis*, New York: Harper & Brothers.
* Kimura, Motoo, 1983, *The Neutral Theory of Molecular Evolution*, Cambridge: Cambridge University Press. doi:10.1017/CBO9780511623486
* Kostyun, Jamie L., Matthew J. S. Gibson, Christian M. King, and Leonie C. Moyle, 2019, “A Simple Genetic Architecture and Low Constraint Allow Rapid Floral Evolution in a Diverse and Recently Radiating Plant Genus”, *New Phytologist*, 223(2): 1009–1022. doi:10.1111/nph.15844
* Kreitman, Martin and Anna Di Rienzo, 2004, “Balancing Claims for Balancing Selection”, *Trends in Genetics*, 20(7): 300–304. doi:10.1016/j.tig.2004.05.002
* Lewontin, Richard C., 1974, *The Genetic Basis of Evolutionary Change*, New York: Columbia University Press.
* Millstein, Roberta L., 2008, “Distinguishing Drift and Selection Empirically: ‘The Great Snail Debate’ of the 1950s”, *Journal of the History of Biology*, 41(2): 339–367. doi:10.1007/s10739-007-9145-5
* –––, 2009, “Concepts of Drift and Selection in ‘The Great Snail Debate’ of the 1950s and Early 1960s”, in *Descended from Darwin: Insights into the History of Evolutionary Studies, 1900-1970*, Joe Cain and Michael Ruse (eds.), (Transactions of the American Philosophical Society 99), Philadelphia, PA: American Philosophical Association, 271–298. [[Millstein 2009 available online](https://profjoecain.net/descended-darwin-book-evolutionary-synthesis/)]
* Nevo, Eviatar, 2001, “Evolution of Genome-Phenome Diversity under Environmental Stress”, *Proceedings of the National Academy of Sciences*, 98(11): 6233–6240. doi:10.1073/pnas.101109298
* Provine, William B., 1971, *The Origins of Theoretical Population Genetics*, Chicago: University of Chicago Press.
* –––, 1986, *Sewall Wright and Evolutionary Biology*, Chicago: University of Chicago Press.
* Schemske, Douglas W. and Paulette Bierzychudek, 2001, “Perspective: Evolution of Flower Color in the Desert Annual *Linanthus parryae*: Wright Revisited”, *Evolution*, 55(7): 1269–1282. doi:10.1111/j.0014-3820.2001.tb00650.x
* Shuster, Stephen M. and Michael J. Wade, 2003, *Mating Systems and Strategies*, Princeton, NJ: Princeton University Press.
* Tian, Dacheng, Hitoshi Araki, Eli Stahl, Joy Bergelson, and Martin Kreitman, 2002, “Signature of Balancing Selection in Arabidopsis”, *Proceedings of the National Academy of Sciences*, 99(17): 11525–11530. doi:10.1073/pnas.172203599
* Wade, Michael J., 2001, “Epistasis, Complex Traits, and Mapping Genes”, *Genetica*, 112: 59–69. doi:10.1023/A:1013316611768
* –––, 2002, “A Gene’s Eye View of Epistasis, Selection and Speciation: A Gene’s Eye View of Epistasis”, *Journal of Evolutionary Biology*, 15(3): 337–346. doi:10.1046/j.1420-9101.2002.00413.x
* Wade, Michael J. and Charles J. Goodnight, 1998, “Perspective: The Theories of Fisher and Wright in the Context of Metapopulations: When Nature Does Many Small Experiments”, *Evolution*, 52(6): 1537–1553. doi:10.1111/j.1558-5646.1998.tb02235.x
* Wright, Sewall, 1931, “Evolution in Mendelian Populations”, *Genetics*, 16: 97–159.
* –––, 1948, “On the Roles of Directed and Random Changes in Gene Frequency in the Genetics of Populations”, *Evolution*, 2(4): 279–294. doi:10.1111/j.1558-5646.1948.tb02746.x

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=ecological-genetics). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/ecological-genetics/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=ecological-genetics&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/ecological-genetics/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* Gibson, Matthew J.S., María de Lourdes Torres, Yaniv Brandvain, and Leonie C. Moyle, 2020, “[Reconstructing the History and Biological Consequences of a Plant Invasion on the Galápagos Islands](https://www.biorxiv.org/content/10.1101/2020.09.26.313627v1)”. Preprint at bioRχiv. doi:10.1101/2020.09.26.313627

## Related Entries

[fitness](https://plato.stanford.edu/entries/fitness/) | [genetic drift](https://plato.stanford.edu/entries/genetic-drift/) | [genetics: molecular](https://plato.stanford.edu/entries/molecular-genetics/) | [genetics: population](https://plato.stanford.edu/entries/population-genetics/) | [natural selection](https://plato.stanford.edu/entries/natural-selection/)

### Acknowledgments

This entry replaces and is based on the former entry titled [Evolutionary Genetics](https://plato.stanford.edu/archives/fall2021/entries/evolutionary-genetics/) by the same author.

[Copyright © 2021](https://plato.stanford.edu/info.html#c) by  
Michael Wade <[*mjwade@indiana.edu*](mailto:mjwade%40indiana%2eedu)>
