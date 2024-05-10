# 理性选择的规范理论：预期效用 rivals to expected utility (Lara Buchak)

*首次发表于 2022 年 5 月 16 日星期一*

预期效用理论认为，决策者应该最大化预期效用，这是仪器理性的主流理论。然而，对于该理论描述所有理性偏好的主张，出现了四个主要挑战。这些挑战包括无限或无界价值的现象，不可比较的商品，不精确的概率和风险规避。这些挑战伴随着试图做得更好的替代理论的出现。

预期效用理论由三个组成部分构成。第一个是将实数分配给结果的效用函数。第二个是将 0 到 1 之间的实数分配给每个可能事件的概率函数。最后一个组成部分是“聚合规范”，它认为行为的价值是相对于这两个函数的预期效用值，并且理性偏好跟踪预期效用值（参见预期效用理论条目）。对于 EU 理论的每个挑战都可以被视为对一个或多个三个组成部分的规范的拒绝，而替代理论通常会替换或扩展相关组成部分。

长期以来，人们已经观察到典型个体实际上并不符合预期效用理论，作为回应，在经济学领域（参见 Starmer 2000，Sugden 2004，Schmidt 2004 的调查；另请参见描述性决策理论条目）出现了许多描述性的替代理论。本文主要讨论被提出作为规范的观点。

---

## 1. 预期效用理论

### 1.1 理论

决策理论涉及个体对后果（有时称为“结果”）和赌博的偏好。最初发展的理论主要关注具有货币后果的决策（例如，在一场游戏中获得 10 美元），但随后的发展将其焦点扩大到包括具有非货币后果的决策（例如，吃一个大的煎蛋卷，吃一个较小的煎蛋卷，没有伞在雨中被困，拖着伞在阳光下）。大多数当代作者将后果定义为包括决策者情境中对她有意义的任何事实-因此，货币后果在技术上必须描述决策者的总财富，非货币后果在技术上必须描述决策者所处的整个世界-尽管当决策不会改变周围事实时，这些完整描述通常被省略。让后果集合为 X。效用函数 u:X→R 为后果分配值，其约束条件是个体更喜欢（或应该更喜欢）具有更高效用值的两个后果，并且对于具有相同效用值的任何两个后果都是无差别的。因此，效用函数在某种程度上代表个体如何评价后果。

赌博有两种形式，取决于我们处理“客观概率”还是“主观概率”版本的理论。在客观概率版本中，赌博是一种将概率分配给后果的彩票。例如，考虑一个彩票，以概率 0.3 给出 300 元，以概率 0.2 给出 200 元。我们可以将这个彩票表示为{300 元，0.3；200 元，0.2}。更一般地，彩票的形式为 L={x1，p1；…；xn，pn}，其中 xi∈X，pi 是后果 xi 获得的概率。彩票不一定局限于有限的后果集合；它们也可以是连续的。

在主观概率版本中，赌博是一种行为（有时被称为“萨维奇行为”；Savage 1954），它将可能的世界状态分配给结果。例如，考虑将额外的鸡蛋放入煎蛋饼中的行为，当鸡蛋可能是腐烂的时候：如果鸡蛋是新鲜的，结果将是一个大的煎蛋饼，但如果鸡蛋是腐烂的，结果将是一个毁掉的煎蛋饼。我们可以将这个行为表示为{额外的鸡蛋是新鲜的，大的煎蛋饼；额外的鸡蛋是腐烂的，毁掉的煎蛋饼}，我们可以将不放入额外鸡蛋的行为表示为{额外的鸡蛋是腐烂或新鲜的，小的煎蛋饼}。更一般地，行为的形式为 g={E1,x1;…;En,xn}，其中 xi∈X，Ei⊆S 是一个事件（状态空间的子集），当世界的真实状态在 Ei 中时，xi 发生。同样，行为不一定局限于有限的结果集。在主观概率版本中，个体有一个概率函数 p，它为每个 Ei 分配一个介于 0 和 1 之间（包括 0 和 1）的数字，表示她的主观概率，也称为“信念程度”或“确信度”。概率函数是可加的，即如果 E 和 F 互斥，则 p(EvF)=p(E)+p(F)。（对于一些讨论，我们讨论彩票或行为并不重要，所以我将使用变量 A、B、C...来表示彩票或行为。）

预期效用理论的核心原则涉及赌博的效用值与结果的效用值之间的关系。特别地，预期效用理论的口号是理性的代理者最大化预期效用。相对于个体的效用函数 u，彩票的预期效用（EU）为：

EU(L)=n∑i=1piu(xi)

相对于个体的效用函数 u 和概率函数 p，一个行为的预期效用是：

EU(g)=n∑i=1p(Ei)u(x)i

这些的连续版本使用积分而不是求和来定义。

预期效用理论认为，个体的偏好根据其预期效用对赌博进行排序，或者应该这样做：A≽B 当且仅当 EU(A)≥EU(B)。通常，弱偏好(≽)被认为是基本的，严格偏好(≻)和不确定(∼)按照通常的方式定义(A≻B 当且仅当 A≽B 且不-(B≽A)；A∼B 当且仅当 A≽B 且 B≽A)。

我们可以将效用和概率视为基本要素，并根据规范告诉我们应该偏好什么；或者，我们可以将偏好视为基本要素，并从中推导出效用和概率函数。假设效用（和概率）函数在 EU 最大化下表示了偏好关系≽，当且仅当：

* u 在 EU 最大化（客观概率）下表示≽：对于所有的抽签 L1 和 L2，
  L1≽L2 当且仅当 EU(L1)≥EU(L2),
  其中 EU 是相对于 u 计算的。
* u 和 p 代表 EU 最大化（主观概率）下的≽：对于所有行为 f 和 g，
  f≽g 当且仅当 EU(f)≥EU(g),
  其中 EU 是相对于 u 和 p 计算的。

一个表示定理展示了一组公理（称之为[axioms]），使得以下关系成立：

* 表示定理（客观概率）：如果对于彩票的偏好关系满足[公理]，那么存在一个效用函数 u，唯一地进行正的仿射变换，以表示在最大化预期效用下的偏好关系。
* 表示定理（主观概率）：如果对于彩票的偏好关系满足[公理]，那么存在一个效用函数 u，唯一地进行正的仿射变换，以及一个唯一的概率函数 p，以表示在最大化预期效用下的偏好关系。

“唯一地进行正的仿射变换”意味着任何也能表示该偏好关系的效用函数 u'都可以通过乘以一个常数并加上一个常数来转换为 u（借用一个不同领域的例子：温度刻度是唯一地进行正的仿射变换的，因为尽管温度可以用摄氏度或华氏度表示，但摄氏度可以通过乘以 9/5 并加上 32 来转换为华氏度）。

第一个也是最具历史意义的预期效用理论客观概率版本的公理化是由冯·诺依曼和摩根斯特恩（1944 年）提出的。这些公理如下（原始版本略有不同）：

* 完备性：对于所有的彩票 L1 和 L2：L1≽L2 或 L2≽L1。
* 传递性：对于所有的彩票 L1、L2 和 L3：如果 L1≽L2 且 L2≽L3，则 L1≽L3。
* 连续性：对于所有的彩票 L1，L2 和 L3：如果 L1≽L2 且 L2≽L3，则存在一个实数 p∈[0,1]，使得 L2∼{L1,p; L3,1−p}
* 独立性：对于所有的彩票 L1，L2，L3 和所有的 0<p≤1：L1≽L2⇔{L1,p;L3,1−p}≽{L2,p;L3,1−p}

主观概率版本的预期效用理论最重要的公理化是 Savage（1954）的，尽管其他著名版本包括 Ramsey（1926），Jeffrey（1965），Armendt（1986, 1988）和 Joyce（1999）。这些版本通常包括与 von Neumann-Morgenstern 公理类似的公理，以及一些不是我们关注的额外公理。

我们将关注的公理中的前两个是（如上所述）完备性和传递性：

* 完备性：对于所有的行为 f 和 g：f≽g 或 f≽g。
* 传递性：对于所有的行为 f，g 和 h：如果 f≽g 且 g≽h，则 f≽h。

第三个是某种连续性的版本，有时被称为阿基米德公理。

最后一个公理是可分离性公理。Savage 的这个公理被称为确定性原则。其中 fEh 是在事件 E 上与 f 一致，在其他地方与 h 一致：

* 确定性原则：对于所有的行为 fEh，gEh，fEj 和 gEj：
  fEh≽gEh⇔fEj≽gEj

换句话说，如果两个行为在非 E 上达成一致，那么一个人在它们之间的偏好应该仅由 E 上发生的事情决定。其他可分离公理包括杰弗里的平均法则（1965 年）和 Köbberling 和 Wakker 的权衡一致性（2003 年）。

因为表示定理在一方面将符合公理的偏好与另一方面个体最大化的效用（和概率）函数联系起来，所以对预期效用理论的三个组成部分中的一个提出挑战也必然对一个（或多个）公理提出挑战。

### 1.2 组件

#### 1.2.1 效用

由于表示定理表明效用（和概率）函数可以从偏好中推导出来 - 拥有特定的预期效用函数在数学上等同于拥有特定的偏好排序 - 它们为理解效用函数提供了许多可能性。这里有两个问题：效用函数对应于什么（形而上学问题），以及我们如何确定个体的效用函数（认识论问题）。

第一个问题是效用函数是否对应于现实世界的数量，例如欲望的强度、感知的可取性或感知的好处，还是仅仅是一种表示偏好的便利方式。前一种观点被称为心理现实主义（Buchak 2013）或弱实在主义（Zynda 2000），例如 Allais（1953）和 Weirich（2008, 2020）持有这种观点。后一种观点被称为形式主义（Hansson 1988）、操作主义（Bérmudez 2009）或表征观点（Wakker 1994），特别与 20 世纪中叶的决策理论家（Luce & Raiffa 1957，Arrow 1951，Harsanyi 1977）和当代经济学家有关。

第二个问题是确定某人的效用函数所涉及的相关事实是什么。辩论中的每个人都认同偏好为效用函数提供证据，但对于是否可能存在其他证据来源存在分歧。建构主义者认为个体的效用函数由其偏好定义-效用从偏好中“建构”出来-因此没有其他相关事实（Dreier 1996，Buchak 2013）；这种观点也被称为强实在主义（Zynda 2000）。相比之下，非建构主义的实在主义者认为有其他关于效用函数的证据来源：例如，个体可能对其效用函数有内省的了解。然而，只有在一个心理现实主义者的前提下，后一种观点才有意义，尽管建构主义可以与心理现实主义或形式主义相结合。

关于效用函数需要注意的一个关键事实是它是实值的：每个结果都可以被赋予一个实数。这意味着没有任何结果是无限大的价值，所有结果都是可比较的。正如我们将看到的，这两个属性中的每一个都面临着挑战。

#### 1.2.2 概率

鉴于概率函数也可以从偏好中推导出来，关于概率函数的性质和确定性也会出现类似的问题。一个观点是概率函数代表了一些现实世界的数量，比如部分信念；另一个观点是概率函数仅仅是一种表示某种投注行为特征的方式。关于决定某人的概率函数的相关事实也存在分歧：有人认为它是通过投注行为或者表示定理的结果来确定的，而其他人则认为它是原始的（参见 Eriksson＆Hájek 2007）。

概率是实值的和逐点的（“尖锐的”，“精确的”），这意味着有一个唯一的数字来表示个体对事件的信念或证据。同样，这个特性会引发挑战。

#### 1.2.3 预期

我们可以从两个方面看待预期效用的规范：最大化预期效用，或者拥有遵守公理的偏好。因此，对于预期效用的规范论证可以为其功能形式本身辩护，也可以为公理的规范性辩护。前者的例子包括预期效用最大化者在长期内表现更好的论证，尽管随着实用主义解释的流行度下降，这些论证在某种程度上不再受欢迎。后者的例子包括每个公理本身都是明显的约束条件的观点，以及公理是从后果主义（或目的-手段理性）原则中得出的观点。特别值得注意的是，有一个证明表明非预期效用最大化者在时间上要么不一致，要么不符合后果主义（Hammond 1988）；在动态选择下，替代理论的表现如何一直是关于它们的合理性的重要焦点。

预期效用最大化是正确的规范的观点可以从几个不同的角度受到质疑，我们将会看到。那些主张非预期效用理论的人对上述论证作出回应，要么是辩称新的规范实际上不会受到这个论证的影响（例如，提供一个具有更直观公理的表示定理），要么是认为即使受到影响也没关系。

## 2. 无限和无界效用

### 2.1 无限和无界效用的挑战

对于欧盟最大化的第一个挑战源于决策情境中无限效用可能出现的两种方式。

首先，某些特定的结果可能具有无限的效用或无限的不效用。例如，帕斯卡的赌注是基于这样的想法：与上帝一起度过永恒的生活具有无限的价值，因此只要给上帝的存在分配一些非零概率，就应该“为上帝而赌注”（帕斯卡 1670 年）。如果某个特定的结果具有无限的（不）价值，那么连续性公理或阿基米德公理将不成立（参见 Hacking 1972 年和 Hájek 2003 年的讨论，以及 Vallentyne 1993 年、Vallentyne＆Kagan 1997 年和 Bostrom 2011 年关于功利主义的相关问题）。

其次，所有的结果可能具有有限的效用值，但这个值可能是无界的，这与允许存在无限多个状态相结合，会引发各种悖论。其中最著名的是圣彼得堡悖论，由尼古拉斯·伯努利在 1713 年的一封信中首次提出（发表在 J.伯努利 DW）。想象一个赌博，其结果由抛掷一个公平硬币决定，直到硬币正面朝上为止。如果它在第 n 次抛掷时首次正面朝上，接收者将获得  2，1/4 的概率获得  8，依此类推，

(12)(2)+(14)(4)+(18)(8)+…→∞。

虽然这个版本可以通过允许效用在金钱上逐渐减少来解决，这样赌博的有限预期效用，但如果回报是以效用而不是金钱计算的话，那么赌博的预期效用将是无穷大。

相关的悖论和问题很多。其中一个围绕着一对游戏展开，即帕萨迪纳游戏和阿尔塔迪纳游戏（Nover＆Hájek 2004）。帕萨迪纳游戏也是通过抛掷一个公平硬币直到正面朝上为止来进行的；在这里，玩家会得到  1，应该优先选择帕萨迪纳游戏，即使欧几里德最大化会说它们有相同的（无穷大）期望（Colyvan 2008）。

（另请参阅 Broome（1995）关于双信封悖论的讨论；Arntzenius，Elga 和 Hawthorne（2004）关于涉及无限效用的历时难题的讨论；以及 McGee（1999）关于效用函数应该是有界的论证，这将解决上述悖论。）

### 2.2 提议

几个提议保留了基本的 EU 规范，但拒绝了效用函数仅在实数范围内的观念。有些人认为效用函数可以取超实数值（Skala 1975，Sobel 1996）。还有人认为效用函数可以取超现实值（Hájek 2003，Chen＆Rubio 2020）。这些提议允许使用连续性/阿基米德公理的版本。另一种选择是使用矢量值（即词典式）效用函数，该函数拒绝了这些公理（参见 Hájek 2003 中的讨论）。

另一种不同的回应是将 EU 最大化纳入到适用于效用无限的更一般的规范之下。Bartha（2007，2016）定义了相对效用，这是一个三元关系，将两个结果或抽签相对于一个比两者都差的“基准点”进行比较。A 相对于 B 在基准点 Z 下的相对效用（写作（A，B；Z））将是：

* 如果 A、B 和 Z 是有限价值的赌注：
  u(A)−u(Z)u(B)−u(Z),
  就像标准的预期效用最大化一样
* 如果 A 是无限值，而 B 和 Z 不是：∞

相对效用范围涵盖扩展实数{R∪∞}。“有限”和“无限”值可以从偏好中确定。此外，相对效用是预期的

U({A,p;A′,1−p},B;Z)=pU(A,B;Z)+(1−p)U(A′,B;Z)

并且具有一个由标准 EU 公理组成的表示定理，减去连续性。(有关应用于无限效用后果的应用，请参见 Bartha 2007；有关应用于无界效用后果的应用，请参见 Bartha 2016。)

当仅考虑无界效用的悖论（而不是无限效用的悖论）时，有其他方法将 EU 最大化纳入更一般的规范之下。Colyvan（2008）将行为 f={E1,x1;…;En,xn}相对于 g={E1,y1;…;En,yn}定义为相对预期效用（与 Bartha 的相对效用无关）：

REU(f,g)=n∑i=1p(Ei)(u(xi)−u(yi))

换句话说，一个人在每个状态下计算 f 和 g 之间的效用差异，并将这个值乘以每个状态的概率进行加权。Colyvan 同样将无限状态空间的情况定义为

REU(f,g)=∞∑i=1p(Ei)(u(xi)−u(yi)).

新的规范是，当且仅当 REU(f,g)≥0 时，f≽g。这个规则在有限状态空间的情况下与 EU 最大化一致，同时也与状态优势一致；因此它可以要求 Altadena 游戏优先于 Pasadena 游戏，Petrograd 游戏优先于 St. Petersburg 游戏。（另见 Colyvan＆Hájek 2016 年。）

Easwaran（2008）提出了对标准 EU 最大化的更为谦虚的扩展。他指出，尽管 Pasadena 和 Altadena 游戏缺乏“强”期望，但它们确实有“弱”期望（这种差异对应于强大数定律和弱大数定律之间的差异）。因此，我们可以认为决策者需要以其弱期望来评估赌博，如果后者存在，则等同于其强期望（另请参见 Gwiazda 2014，Easwaran 2014b；相关地，Fine（2008）表明，这两个游戏和圣彼得堡悖论可以被赋予与 EU 理论一致的有限值）。

Lauwers 和 Vallentyne（2016）将 Easwaran 的无限弱期望扩展与 Colyvan 的区间值相对期望扩展相结合。Meacham（2019）将 Colyvan 的提议扩展到涵盖要比较的行为在不同状态下要比较的效用以及概率是行为依赖的情况；他的差异最小化理论将每个赌博从最坏后果到最好后果重新排序，然后计算它们的相对期望。这两个扩展之间的一个关键区别是差异最小化理论遵循随机优势和一个称为随机等价的相关原则（另请参见 Seidenfeld，Schervish 和 Kadane 2009；Hájek 2014；Colyvan 和 Hájek 2016 的讨论）。

在对标准欧盟最大化的更激进的改变中，Easwaran（2014a）基于状态优势发展了一个公理化决策理论，该理论从效用和概率出发，推导出规范偏好关系。在符合标准欧盟最大化参数的情况下，该理论可以与欧盟最大化达成一致；但它还允许我们比较一些具有无限价值的行为，以及一些不符合标准参数的行为（例如，不可比较的行为，具有比较但非数值的概率的行为）。

最后，可以截断欧盟最大化的规范。有人认为，对于涉及非常小概率的赌博，我们应该将这些概率降低到零，而不考虑所涉及的效用。当与聚合剩余可能性的方法相结合时，这种策略将为无界效用悖论产生有限值，并且还允许将非常小的概率归因于上帝的存在而避免为上帝下注。（这个想法可以追溯到 Nicolaus Bernoulli，Daniel Bernoulli，d'Alambert，Buffon 和 Borel [参见 Monton 2019 的历史调查]；这种观点的当代支持者包括 Jordan 1994，Smith 2014，Monton 2019。）

## 3. 不可比较性

### 3.1 挑战来自不可比较性

对于预期效用最大化的另一个挑战是偏好完全有序的观念，即后果可以根据一个单一一致的效用函数进行排名。在经济学中，这个观念至少可以追溯到奥曼（1962 年）；在哲学中，最近由伦理学家提出。经济学家倾向于将这个挑战框架化为对偏好关系完备性的挑战，而伦理学家则是对更好关系完备性的挑战。我使用≽来表示所讨论的任何关系，认识到在某些情况下，某些提议可能在一个案例中更具有说服力。

关键观点是存在一些选项对，其中一个选项不被偏好于（或优于）另一个选项是错误的，但它们也不是等同偏好（或同样好）。提出的例子包括平凡和严肃的例子：墨西哥餐厅和中国餐厅；军事生涯和神职生涯；在萨特（1946 年）的一个例子中，是留在生病的母亲身边还是加入自由法国。以这些例子中的第二个为例：军事生涯并不优于（或优于）神职生涯，反之亦然；但它们也不是等同偏好（或同样好）。将这些对选项之间的关系称为不可比较性。

不可比性最直接挑战了完备性，因为在最自然的解释下，A 和 B 不可比意味着既不是 A≽B 也不是 B≽A。但是，如果我们假设不可比性是冷漠的，或者将 A≽B 定义为 B≻A 的否定（从而假设完备性是根据定义的），那么不可比性可以被看作是对传递性的挑战。要看到这一点，注意如果两个选项 A 和 B 是不可比的，那么将 A“变甜”成稍微好一点的 A+仍然会使 A+和 B 不可比。例如，如果 A 是从事军事职业，而 A+是这个职业但薪水稍微高一点，后者仍然与从事神职不可比。这种模式足以表明关系∼是不传递的，因为 A∼B 和 B∼A+，但 A+≻A（de Sousa 1974）。

对于理解不可比性，有四种选择。认识论者认为关于三种关系（≻，≺，∼）的哪一种成立总是有一些事实的，但有时很难或不可能确定哪一种成立，因此不可比性只是表面上的。他们可以按照标准方式建模决策问题，但作为对价值的不确定性问题：一个人不知道自己是否处于 A≽B 的状态，但会对该状态赋予一定的概率，并在考虑这些不确定性的情况下最大化预期效用。不确定论者认为哪种关系成立是不确定的，因为这些关系是模糊的；因此，不可比性是一种模糊性（Griffin 1986，Broome 1997，Sugden 2009，Constantinescu 2012）。不可比论者认为在不可比性的情况下，A 和 B 根本无法进行比较（de Sousa 1974，Raz 1988，Sinnott-Armstrong 1988）。最后，认为不可比性是平等的人认为 A 和 B 之间可以存在第四种关系：如果 A 和 B 可以进行比较，但不是三种关系之一成立的情况下，A 和 B 是“平等的”（Chang 2002a，2002b，2012，2015，2016）。 （分类法来自 Chang 2002b；另请参阅 Chang 1997。）

### 3.2 提议：定义

Aumann（1962）证明，如果我们有一个部分但不是完全的偏好排序，那么我们可以通过一个效用函数（不唯一地正仿射变换）来表示它，使得 A≻B 意味着 EU（A）>EU（B），但反之不成立。 Aumann 证明，至少会有一个效用函数根据（客观的）EU 最大化来表示偏好排序。因此，我们可以将偏好排序表示为“单向”表示决策者偏好的所有效用函数的集合。令 EUu（A）表示给定效用函数 u 的 A 的预期效用：

U={u∣(A≻B⇒EUu(A)≻EUu(B))&(A∼B⇒EUu(A)=EUu(B))}.

如果没有无法比较性，那么在 U 中会有一个单一的（期望）效用函数，就像标准的预期效用理论一样。但是当既不是 A≻B 也不是 B≻A 也不是 A∼B 时，会有一些 u∈U 使得 EUu(A)>EUu(B)，以及一些 u′∈U 使得 EUu′(B)>EUu′(A)；反之亦然。

Chang（2002a,b）提出了类似的策略，但她将价值事实视为基本，并从中定义了更好关系——以及我们将其表示为“∥”的新的“平等”关系。此外，她根据 A 和 B 之间的评价差异来定义这些关系，即（A−B）是 A 和 B 之间所有许可的价值差异的集合。如果（A−B）=∅，那么 A 和 B 是无法比较的；然而，如果（A−B）≠∅，相关的关系是：

* A≻B 当且仅当 (A−B) 只包含正数
* B≻A 当且仅当 (A−B) 只包含负数
* A∼B 当且仅当 (A−B) 只包含 0
* A∥B 否则

(A−B) 可能由一组效用函数生成，每个函数代表了效用所代表的潜在价值的可能实现（在 Chang 2002b 中讨论）；或者，可能存在“一直到底”的平等性（在 Chang 2016 中讨论，她还用偏见取代了以明确的数值差异定义的定义）。

Rabinowicz（2008）提供了一个模型，允许平等性和无法比较的程度。在他的提议中，更好关系由一个“可允许的偏好排序”类 K 表示，每个偏好排序可以是完整的或不完整的。他定义：

x≻y 当且仅当 (∀R∈K)(x≻Ry) x∼y 当且仅当 (∀R∈K)(x∼Ry) x∥y 当且仅当 (∃R∈K)(x≻Ry)&(∃R∈K)(x≻Rx)

(他将≽定义为 K 中几个“原子”可能性的并集。) 当 x≻y 或 y≻x 或 x∼y 时，令 xTy 成立，然后他定义：

* 当且仅当 (∀R∈K)(xTRy)，x 和 y 是完全可比较的
* x 和 y 完全相等，当且仅当它们完全可比且 x∥y
* x 和 y 不可比，当且仅当(∀R∈K)(not-(xTRy))
* x 和 y 弱不可比，当且仅当(∃R∈K)(not-(xTRy))

类 K 不一定会产生一个效用函数。

### 3.3 提议：决策规则

如果决策者的偏好由一组效用函数 U 表示，则有许多可能的决策规则可以提出。所有提出的规则都侧重于从一组替代方案 S 中选择可行的选项，而不是聚合函数或完整的选项排序（我们总是可以从后者中恢复前者，但反之则不行）。为了理解这三个规则中的前三个，我们可以想象每个可能的效用函数都是一个“委员会成员”，并根据委员会意见的事实提出选择规则。

首先，我们可以选择任何一个委员会成员认可的选项；也就是说，我们可以选择任何一个相对于某个效用函数最大化预期效用的选项：

允许的选择集合 = {A∣(∃u∈U)(∀B∈S)(EUu(A)≥EUu(B))}

Levi（1974）将此规则称为 E-可接受性，而 Hare（2010）称之为前景主义。（有关 Levi 的完整提案以及将此规则扩展到决策者没有单一概率函数的情况的扩展，请参见第 4.3.3 节。）

Aumann 建议我们可以选择任何最大选项：任何一个选项都不会比其他特定选项更差，根据所有委员会成员的意见；也就是说，没有其他选项（严格地）被所有效用函数赋予更高效用值的选项：

允许的选择集合 = {A∣(∀B∈S)(∃u∈U)(EUu(A)≥EUu(B))}

这是一个比 E-可接受性更宽松的规则：每个 E-可接受的选项都将是最大的，但反之则不然。要看出这两个规则之间的区别，请注意，如果决策者有两个可能的排名，A>B>C 和 C>B>A，那么所有三个选项都将是最大的，但只有 A 和 C 是 E-可接受的（没有特定的选项明确优于 B，所以 B 是最大的；但明确有某个选项优于 B，所以 B 不是 E-可接受的）。

最后一种可能性是我们可以选择任何一个选项，只要它不被另一个行为所区间支配（Schick 1979，Gert 2004），其中一个被区间支配的选项具有比其他选项的“最差”值更低的“最佳”值：

允许的选择集合 = {A∣(∀B∈S)(maxuEUu(A)≥minuEUu(B))}

这是比 E-可接受性和最大性更宽松的规则。

一种不同类型的规则首先查看每个状态下选项的可能效用值，然后在各个状态上进行聚合；这是 Hare（2010）的顺从主义所要求的。要确定在顺从主义下选项 O 是否可允许，我们考虑在每个状态下，如果我们对其做出最有利的假设，它的表现如何。首先，将 U 中的效用函数“整理”成这样的一对后果{x，y}，使得（∀u∈U）（u（x）=1&u（y）=0）；这样可以为决策者的偏好的每个可能的完成提供一个代表性效用函数。接下来，将所有可能的“状态段”——每个状态中的可能效用分配——以每种可能的排列方式交叉组合在一起，以获得一个“扩展”的效用函数集合（例如，这将包含 E 中的每个可能的效用函数与非 E 中的每个可能的效用函数的组合）。然后，当且仅当 A 相对于该扩展集合中的某个效用函数最大化预期效用时，A 是可允许的。

## 4. 不精确概率或模糊性

### 4.1 不精确概率或模糊性的挑战

对于预期效用最大化的第三个挑战是，主观概率不一定是“尖锐”或“精确”的，即不一定是一个单一的、点对点的函数。（在经济学中，这种现象通常被称为模糊性。）对于不精确概率有三个历史上重要的动机。

第一个动机是决策者在决策行为中对主观（或未知）概率与客观概率的处理方式不同。其中一个经典例子是埃尔斯伯格悖论（Ellsberg 1961, 2001）。想象一下，你面对一个装有 90 个红、黑和黄球的罐子，将从中抽取一个球。你知道有 30 个球是红色的，但你对黑色和黄色球的比例一无所知。你更喜欢 f1 还是 f2；你更喜欢 f3 还是 f4？

* f1：如果球是黑色或黄色，则为  0。
* f2: 如果球是红色或黄色，则  为 0。
* f3: 如果球是黑色，则  为 0。
* f4: 如果球是红色，则  为 0。

大多数人似乎严格偏好 f1 而不是 f2，并且严格偏好 f4 而不是 f3。他们宁愿押注于已知或客观概率，而不是未知或主观概率——在第一对中，红色具有 1/3 的客观概率，而黑色的客观概率可能在 0 到 2/3 之间变化；在第二对中，黑色或黄色具有 2/3 的客观概率，而红色或黄色的客观概率可能在 1/3 到 1 之间变化。这些偏好违反了确定性原则。（要看到这一点，请注意两对行为之间唯一的区别在于第一对在黄色上获得  100。）

不确定概率的第二个动机是，即使所有相关概率都是主观的，决策者的投注行为可能取决于这些概率的可靠性或证据支持程度。考虑一个可能在三场不同的网球比赛上下注的决策者：在第一场比赛中，她对选手了解很多，并且知道他们非常均衡；在第二场比赛中，她对任何一名选手都一无所知；在第三场比赛中，她知道两名选手中的一名比另一名要好得多，但她不知道是哪一名。在每场比赛中，决策者应该假设每个选手获胜的概率相等，因为她对每个选手的信息是对称的；尽管如此，只在第一场比赛上下注而不在其他两场比赛上下注似乎是理性的（Gärdenfors＆Sahlin 1982；另请参见 Ellsberg 1961）。

不精确概率的最终动机是，证据并不总是确定精确的概率（Levi 1974, 1983; Walley 1991; Joyce 2005; Sturgeon 2008; White 2009; Elga 2010）。假设一个陌生人走近你，从袋子里拿出三样东西：一支常规大小的牙膏，一只活的水母和一支旅行装牙膏；你被要求为他接下来拿出的物品是另一支牙膏的命题分配概率，但似乎你没有足够的证据来这样做（Elga 2010）。

### 4.2 提议：概率表示

为了适应决策中的不精确概率，我们需要一种替代的概率表示方式和一种在新表示的概率上操作的替代决策规则。有两种主要的表示不精确概率的方式。

第一种方法是为每个命题分配一个区间，而不是一个单独的数字。例如，在 Ellsberg 案例中：

p(RED)=[1/3],p(YELLOW)=[0,2/3];p(BLACK)=[0,2/3].

第二种方法是将个体的信念表示为一组概率函数。例如，在 Ellsberg 案例中：

Q={p∈P∣p(RED)=1/3}

这意味着，例如，概率分布 p(R,B,Y)=⟨1/3,0,2/3⟩ 和概率分布 ⟨1/3,1/3,1/3⟩ 都与可用证据或个体信念的可能“完成”相容。

每个集合概率表示都会产生一个区间表示（假设概率函数集合是凸的）；但是，集合概率表示提供了更多关于命题之间关系的结构。（另一个提案保留了精确的概率函数，但细化了效用和概率范围的对象（Bradley 2015；Stefánsson＆Bradley 2015, 2019）；请参见第 5.2 节中的讨论。）

### 4.3 提案：决策规则

我们将根据它们对 Ellsberg 选择的评估来研究使用不精确概率进行决策的规则；为了方便阐述，我们假设 u(  100)=1。当集合中只有一个概率分布时，所有提案都等同于最大化预期效用，因此它们都将在 Ellsberg 赌局中将效用分配为 1/3 给 f1 和 2/3 给 f4；它们在对其他行为的价值评估上有所不同。

#### 4.3.1 使用概率集合的聚合决策规则

第一种决策规则将每个行为关联到一个单一的值，并产生一种完整的行为排序；称这些规则为聚合规则。本节中的规则使用概率集合。

在讨论这些规则之前，有助于记住三个在完全无知情况下运作的聚合规则，即当我们对世界的状态一无所知时。第一个是最小最大化规则，它建议选择具有最高最小效用的选项。第二个是最大最大化规则，它建议选择具有最高最大效用的选项。第三个被称为赫维茨准则，它建议对于每个选项，取最小效用和最大效用的加权平均值，其中权重α∈[0,1]表示决策者的乐观/悲观程度（Hurwicz 1951a）：

H(f)=(1−α)(minu(f))+α(maxu(f))

使用集合概率表示法，我们可以将每个概率分布关联到一个预期效用值，从而得到一组预期效用值。设 EUp(f)为给定概率分布 p 的 f 的预期效用。

一个提议是，一个行为的价值是其最小预期效用值；因此，决策者应该最大化她的最小预期效用（Wald 1950; Hurwicz 1951b; Good 1952; Gilboa & Schmeidler 1989）：

Γ-maximin(f)=minp(EUp(f))

这个规则有时也被称为 MMEU。对于 Ellsberg 选择，最小预期效用分别为 f1、f2、f3 和 f4 的 1/3、0、1/3 和 2/3。这些值解释了 f1>f2 和 f4>f3 的普遍偏好。相反，一个最大化最大预期效用的个体——使用Γ-maximax 的个体——会有相反的偏好。

Γ-maximin 似乎过于悲观。我们可以使用 Hurwicz 准则的 EU 类比：将最小预期效用和最大预期效用加权平均，权重α∈[0,1]对应于决策者的悲观程度（Hurwicz 1951b; Shackle 1952; Luce & Raiffa 1957; Ellsberg 2001; Ghirardato et al. 2003）：

α-maximin(f)=(1−α)(minp(EUp(f)))+α(maxp(EUp(f)))

在 Ellsberg 选择中，该模型将α（2/3）分配给 f2，并将（1-α）（1/3）+α（1）分配给 f3，如果α<1/2，则这些行为相对于 f1 和 f4 来说是不受欢迎的；如果α>1/2，则相对于 f1 和 f4 来说是受欢迎的；如果α=1/2，则对 f1 和 f4 是无所谓的。

相反，我们可以假设决策者在评估一个行为时考虑两个量：根据她在概率（estp）上的“最佳估计”计算的行为的预期效用（EU），以及行为的最小预期效用，当概率在 Q 上变化时；她还给她估计的概率分布分配了一个置信度ϱ∈[0,1]。然后，一个行为的价值将是她最佳估计的预期效用和最小预期效用的加权平均值，其中她的最佳估计由她的置信度加权（Hodges＆Lehmann 1952; Ellsberg 1961）：

E(f)=ϱ(estp(EUp(f)))+(1-ϱ)(minp(EUp(f)))

在 Ellsberg 对中，假设“最佳估计”是黄色和黑色各自具有 1/3 的概率，这将分配ϱ(1/3)给 f2 和ϱ(2/3)+(1−ϱ)(1/3)给 f3，只要ϱ<1，这将使得这些行为相对于 f1 和 f4 不受欢迎。

我们还可以结合这两个提议（Ellsberg 2001）：

E(f)=ϱ(estpEUp(f))+(1−ϱ)[(1−α)(minpEUp(f))+α(maxpEUp(f))]

这个模型将为许多选择的常见偏好提供理性选择（设置ϱ=0 或α=0 将得到先前提到的模型）。

我们可以为表示添加额外的结构：对于每个概率函数，决策者分配一个“可靠性”程度，用于跟踪决策者对自然状态的相关信息的了解程度（Good 1952; Gärdenfors & Sahlin 1982）。决策者选择所需的认知可靠性阈值水平。然后，她考虑所有高于此阈值的概率函数，并在这些概率函数中最大化最小预期效用（Γ-maximin）。 （原则上，在此步骤中可以使用不同的决策规则。）对于决策者决定是否在网球比赛上下注，第一场比赛的高于阈值的概率函数可能只包括 p（P1WINS）≈0.5，但第二场和第三场比赛的高于阈值的概率函数也可能包括 p（P1WINS）≈0；因此，在第一场比赛中下注 P1 的价值将高于在其他比赛中下注 P1 的价值。

#### 4.3.2 聚合决策规则：Choquet 预期效用

一种不同类型的规则是 Choquet 预期效用，也被称为累积效用（Schmeidler 1989; Gilboa 1987）。这个规则从一个函数 v 开始，类似于概率函数，满足 v(E)∈[0,1]，v(0)=0，v(1)=1，且 A⊆B 意味着 v(A)≤v(A)。然而，与概率函数不同，v 是非可加的；并且 v 不能直接用于计算期望值。（许多经济学家将这个函数称为“非可加主观概率函数”）。Choquet 预期效用是排名依赖家族的成员（Quiggin 1982，Yaari 1987，Kahneman＆Tversky 1979，Tversky＆Kahneman 1992，Wakker 2010）。这个家族中的函数让事件在行为的整体价值中的权重依赖于概率类似的元素和事件在行为排序中的位置，例如，它是该行为的最坏还是最好的事件。形式上，让 g'={E1,x1;…;En,xn}是从最坏事件到最好事件重新排序的行为 g，使得 u(x1)≤…≤u(xn)。g'（因此也是 g）的 Choquet 预期效用为：

CEU(g')=u(x1)+n∑i=2v(n⋃j=iEj)(u(xi)−u(xi−1))

如果 v 是可加的，则 v 是（可加的）概率函数，CEU 将简化为 EU。如果 v 是凸的（v(E)+v(F)≤v(EF)+v(EvF)），则个体是对不确定性厌恶的。

在 Ellsberg 的例子中，我们被给定 p(RED)=1/3 和 p(BLACK∨YELLOW)=2/3，因此我们可以假设 v(RED)=1/3 和 v(BLACK∨YELLOW)=2/3。一个“模糊厌恶”的人会分配 v(BLACK)+v(YELLOW)≤v(BLACK∨YELLOW)；让我们假设 v(BLACK)=v(YELLOW)=1/9。同样地，她会分配 v(RED∨YELLOW)+v(BLACK)≤1；让我们假设 v(RED∨YELLOW)=4/9。

然后行为的价值将是：

CEU(f1)=0+v(RED)(1−0)=1/3 CEU(f2)=0+v(BLACK)(1−0)=1/9 CEU(f3)=0+v(RED∨YELLOW)(1−0)=4/9 CEU(f4)=0+v(BLACK∨YELLOW)(1−0)=2/3

这个任务恢复了埃尔斯伯格偏好。

CEU 的公理化使用了分离性条件的限制版本（“共同单调”确定性原则或“共同单调”权衡一致性）：即，只有在其域中的所有行为都是共同单调的情况下，该条件才成立，即，当所有行为的最差到最佳事件排序对所有行为都一致时（Gilboa 1987，Schmeidler 1989，Wakker 1989，Chew＆Wakker 1996，Köbberling＆Wakker 2003;另请参阅 Wakker 2010，他还注意到 CEU 与α-maximin 之间的关系。）

#### 4.3.3 从菜单中选择的决策规则

另一种不同类型的提案侧重于从一组替代方案 S 中选择可允许的选项，而不是对选项进行完整的排名。就像在第 3.3 节中一样，我们可以想象将集合 Q 中的每个可能的概率分布视为一个“委员会成员”，并根据委员会意见的事实提出选择规则。（前三个规则是 3.3 节中关于效用函数集合的规则的版本，可以组合起来涵盖概率/效用对的集合。）

第一种可能性是，决策者被允许选择一个行动，只要某个委员会成员被允许在所有替代方案中选择它：只要它相对于集合中的某个概率函数最大化预期效用。这被称为 E-可允许性（Levi 1974, 1983, 1986; Seidenfeld, Schervish, & Kadane 2010）：

可允许的选择集合 = {A∣(∃p∈Q)(∀B∈S)(EUp(A)≥EUp(B))}

实际上，Levi 讲述了一个更加复杂的故事，关于决策者在选择方面被允许的程序，该程序逐渐排除越来越多的选项。首先，该程序从所有选项中仅选择 E-可接受的选项。接下来，该程序从 E-可接受的选项中仅选择 P-可接受的选项：即“最好地”保留 E-可接受选项的选项（理性代理人应该保持她的选择权）。最后，该程序从 P-可接受的选项中仅选择 S-可接受的选项：即最大化最小效用的选项。（请注意，这最后一步涉及最大最小化，而不是Γ-最大最小化。）

比 E-可接受性更宽松的规则允许选择，只要没有特定的替代方案被委员会成员一致（严格）偏好。与效用集合的情况类似，这个规则被称为最大性（Walley 1991）：

可接受的选择集合 = {A∣(∀B∈S)(∃p∈Q)(EUp(A)≥EUp(B))}

（有关 E-可接受性和最大性之间差异的示例，请参见第 3.3 节。）

更宽松的规则是，只要选择不受区间支配（Schick 1979，Kyburg 1983）：其最大值不低于其他某个行为的最小值，那么选择就是可接受的。

可接受的选择集合 = {A∣（∀B∈S）（maxpEUp（A）≥minpEUp（B））}

为了证明Γ-maximax 意味着 E-可接受性；Γ-maximin 意味着极大性；E-可接受性意味着极大性；以及极大性意味着区间优势，请参见 Troffaes（2007）。

最后一种方法是将模糊性解释为不确定性：一个委员会成员拥有“真实”的概率函数，但不确定是哪一个。如果所有概率函数都同意选择某个选项是可接受的，那么选择该选项是确定可接受的；如果所有人都同意选择该选项是不可接受的，那么选择该选项是确定不可接受的；如果有些人认为选择该选项是可接受的，而其他人认为选择该选项是不可接受的，那么是否可接受是不确定的（Rinard 2015）。

本节中的这些规则允许但并不明显解释 Ellsberg 选择，除非通过附加规则（例如，Levi 的更复杂的故事或第 4.3.1 节中的规则之一）进行补充，因为在 f1 和 f2 之间以及 f3 和 f4 之间的任何选择似乎都是 E-可接受的、极大的和非区间优势的。

### 4.4 规范问题

对于那些支持非尖锐概率的人来说，会出现两组规范问题。第一组是认识论问题：是否认识论上合理不具备尖锐概率（White 2009; Elga 2010; Joyce 2011; Hájek & Smithson 2012; Seidenfeld et al. 2012; Mayo-Wilson & Wheeler 2016; Schoenfield 2017; Vallinder 2018; Builes et al 2022; Konek ms. – 见其他互联网资源）。

第二组问题是实践问题。有人认为模糊规避并没有充分的实践理由，因此我们没有理由解释它（Schoenfield 2020）。其他人认为与非尖锐概率相关的某些特定决策规则会导致不良后果，例如违反第 1.2.3 节中提到的原则。特别值得关注的是这些决策规则如何扩展到顺序选择（Seidenfeld 1988a,b; Seidenfeld et al. 1990; Elga 2010; Bradley and Steele 2014; Chandler 2014; Moss 2015; Sud 2014; Rinard 2015）。

## 5. 风险规避

### 5.1 风险规避的挑战

对预期效用最大化的最后挑战是对规范本身的挑战——即赌博应该以其期望值来评估的观念。特别是，有人声称在某种与预期效用最大化相冲突的意义上，个体有理性上允许对风险持谨慎态度（或寻求风险）。

假设一个个体在金钱（或任何数值商品）方面是风险厌恶的，如果她更喜欢赌博的后果“分散得更少”；罗斯柴尔德和斯蒂格利茨（1972）通过不喜欢保持均值的扩散来明确这个概念。作为这个概念的特例，一个在金钱方面风险厌恶的人会更喜欢  x。如果一个预期效用最大化者在金钱方面风险厌恶，那么她的效用函数将是凹的（边际效用递减，即每增加一美元所增加的效用比上一个美元少）；如果一个预期效用最大化者在金钱方面风险寻求，那么她的效用函数将是凸的（罗斯柴尔德和斯蒂格利茨，1972）。因此，预期效用理论将风险厌恶与具有递减边际效用函数等同起来。

然而，有至少两个直观上不同的原因可以解释一个人为什么会对风险厌恶。考虑一个喜欢咖啡但不能容忍超过一杯的人。再考虑一个容忍度非常高的人，以至于前几杯咖啡和最后一杯一样令人愉悦，但对风险有着特殊的态度：为了放弃一定数量的保证杯数，她需要一个非常有价值的好处。两者都会更喜欢一杯咖啡而不是 0 到 2 之间的抛硬币，但直观上来说，他们对咖啡的价值评估是非常不同的，并且有着非常不同的偏好原因。这个例子可以推广：我们可以考虑一个对金钱容易饱和的人（一旦她有了一点钱，每增加一点钱对她的重要性就越来越小）；还有一个吝啬鬼（他对每一美元的喜爱程度与上一个一样），但对赌博有着与我们的咖啡饮用者相同的态度。两者都不喜欢保持均值的扩散，但直观上对金钱有不同的态度，并且有不同的偏好原因。将每对中第二个人的态度称为全局敏感性（Allais 1953，Watkins 1977，Yaari 1987，Hansson 1988，Buchak 2013）。

这种例子引发了几个问题。首先，如果预期效用最大化被认为是解释某人做出特定选择的原因，它应该能够区分偏好的这两个原因；但是，如果全局敏感性可以被捕捉到，它将必须通过一个递减的边际效用函数来捕捉，与每对中的第一个人的函数相同。其次，如果一个人采用了一种根据决策者对其效用函数具有内省访问的观点，决策者可能会报告说她有像宽容的咖啡饮用者或吝啬鬼一样的偏好-她的效用函数是线性的-但是如果她最大化预期效用，她的效用函数将必须是凹的；因此，预期效用最大化将错误地得出她的效用函数。最后，即使一个人认为决策者没有对其效用函数进行内省访问，如果决策者显示出全局敏感性，那么她将有一些偏好无法被预期效用函数捕捉到（Allais 1953，Hansson 1988，Buchak 2013）。

一个相关的担忧显示了预期效用最大化将风险规避与边际效用递减等同起来的令人不安的含义。Rabin（2000）的校准定理表明，如果一个预期效用最大化者在适度赌注中是轻微的风险规避者，那么在高赌注中她将不得不是荒谬的风险规避者。例如，如果一个个体在任何财富水平上都会拒绝赌注{-110，0.5}，那么她也必须拒绝赌注{-n，0.5}，无论 n 是多少。

最后，阿莱悖论确定了一组直观但无法被任何预期效用函数捕捉到的偏好（Allais 1953）。考虑以下两个彩票之间的选择：

* L1:{5,000,000,0.1;0,0.9}
* L2:{1,000,000,0.11;0,0.89}

分别考虑以下两个彩票之间的选择：

* L3:{1,000,000,0.89;5,000,000,0.1;$0,0.01}
* L4:{$1,000,000,1}

大多数人（严格地）更喜欢 L1 而不是 L2，并且（严格地）更喜欢 L4 而不是 L3，但是没有值 u(  1M)和 u($5M)使得 EU(L1)>EU(L2)和 EU(L4)>EU(L3)。奥利斯偏好违反了独立公理；当抽奖适当地重新构建为行为（例如，定义在事件上，如抽取 100 张彩票），它们违反了肯定事实原则或相关的可分离原则。

### 5.2 提案

已经有一些描述性尝试来解释全球敏感性，这些尝试来自那些对规范问题不感兴趣或者假设预期效用是正确的规范理论的人。其中最著名的是前景理论（Kahneman＆Tversky 1979; Tversky＆Kahneman 1992）和广义效用理论（Machina 1982, 1983, 1987）；其他的在下面的讨论中提到。请参阅 Starmer（2000）进行概述。

一些规范性提案试图在预期效用理论中容纳全球敏感性，通过使效用函数的输入更加精细。这种“细化策略”的支持者认为决策者更喜欢 L4 而不是 L3，因为  1M（或者因为 L4 包括心理确定性），因此后果描述应该包括这些事实。因此，L3 的正确描述是：

L3:{  5,000,000,0.1;$0 和遗憾, 0.01}

一旦这些赌注被正确描述，与 EU 最大化没有直接冲突（Raiffa 1986，Weirich 1986，Schick 1991，Broome 1991，Bermúdez 2009，Pettigrew 2015，Buchak 2015）。当两个看起来相同的结果应该被区分开的问题由 Broome（1991），Pettit（1991）和 Dreier（1996）提出。

一个结果的价值取决于可能发生的事情的想法由 Bradley 和 Stefánsson（2017）系统化。他们的提议使用了 Jeffrey（1965）发展的预期效用理论的一个版本，并由 Bolker（1966）公理化。Jeffrey 用更一般的“可取性”函数 Des 替换了效用函数，该函数不仅适用于结果，还适用于前景；实际上，它不区分“最终”结果和前景，因为其输入是命题。Bradley 和 Stefánsson 建议扩大 Des 的领域，包括反事实命题，从而允许对命题的偏好取决于反事实。例如，决策者可以更喜欢“我选择冒险选项并一无所获，如果我选择不同的话也不会有任何保证”而不是“我选择冒险选项并一无所获，如果我选择不同的话会有一些保证”，这将使 Allais 偏好合理化。（顺便说一句，他们的提议也可以合理化似乎违反 EU 的偏好，因为考虑到公平性，就像 Diamond（1967）的一个例子。）

在一系列不同的文章中（Stefánsson＆Bradley 2015, 2019），这些作者再次使用了杰弗里的框架，但这次扩大了 Des 的领域，包括机会命题（除了事实前景），像“我得到  100”的机会不一定等于 2（Des（“我得到$100 的机会是 0.5”））。 （这与最大化预期可取性不冲突，因为它只涉及 Des 函数的特定输入之间的关系，而不涉及决策者的主观概率）。这个提议还可以解释 Ellsberg 偏好（第 4.1 节），因为它允许决策者对各种机会命题分配不同的概率（另见 Bradley 2015）。

其他提议认为我们应该拒绝预期效用的聚合规范。最早的提议来自 Allais 本人，他认为决策者关心的不仅仅是赌博的平均效用，还关心价值的分散程度。他提出个体应该最大化预期效用加上赌博的风险度量，其中包括赌博的标准差的倍数和偏度的倍数。形式上，如果 s 代表 L 的标准差，m 代表 L 的偏度，则 L 的效用值将为（Allais 1953，Hagen 1979）：

 AH（L）= EU（L）+ F（s，m / s2）+ ε

其中ε是一个误差项。因此，他提出风险性是一种独立有价值的赌博属性，与其预期效用相结合（并进行权衡）。这个提议本质上将赌博的风险性视为一种本身（不）有价值的属性（另见 Nozick 1993 关于象征效用的论述）。

最后一种方法将全局敏感性视为决策者聚合效用值的特征。可能决策者的效用和概率函数还不足以告诉我们他应该偏好什么；他还必须决定在更糟糕的状态和更好的状态中发生的事情之间给予多少权重。在风险加权预期效用（Buchak 2013）中，这个决策由他的风险函数表示，这是 Quiggin（1982）预期效用的推广和排名依赖家族的成员之一（见第 4.3.2 节）。

形式上，让 g'={E1,x1;…;En,xn}是将行为 g 从最坏事件到最好事件重新排序，使得 u(x1)≤…≤u(xn)。那么 g 的风险加权预期效用为：

REU(g′)=u(x1)+n∑i=2r(n∑j=ip(Ej))(u(xi)−u(xi−1))

with 0≤r(p)≤1, r(0)=0 and r(1)=1, and r(p) non-decreasing.

风险函数衡量了在评估行为时，结果的前 p 部分的权重——决策者对仅在状态的前 p 部分获得的利益有多在意。（人们也可以将风险函数视为描述在未来可能的自己之间的分配公正问题的解决方案——它表示决策者对自己未来可能的自己的前 p 部分利益给予多少权重。）一个风险规避的人是一个具有凸风险函数的人：随着利益在越来越小的状态部分获得，他对它们的权重逐渐减少。一个风险倾向的人是一个具有凹风险函数的人。而一个全局中立的人是一个具有线性风险函数的人，即一个预期效用最大化者。

分别通过效用函数和风险函数捕捉边际效用递减和全局敏感性。此外，凸风险函数可以适应 Allais 偏好（Segal 1987，Prelec 1998，Buchak 2013；但参见 Thoma＆Weisberg 2017）。因此，REU 最大化认为决策者具有 Allais 偏好，因为他们更关心在更糟糕的情况下发生的事情，而不是在更好的情况下发生的事情，或者更关心最小值而不是超过最小值的潜在收益。

REU 的表示定理结合了两个现有定理的条件（Machina＆Schmeidler 1992，Köbberling 和 Wakker 2003），用两个较弱的条件替换了可分离性条件。其中一个条件确定了事件的唯一概率函数（Machina＆Schmeidler 的“强比较概率”，1992），另一个条件确定了唯一的概率风险函数；后者是可分离性条件的受限版本（Köbberling＆Wakker 的[2003]“共同调整”权衡一致性；见第 4.3.2 节）。由于表示定理推导出唯一的概率函数、唯一的风险函数和唯一的（正仿射变换）效用函数，它将边际效用递减和全局敏感性对给定偏好排序的贡献分开。由于风险规避的任一类型或两者的组合，可以因此不喜欢保持均值的传播。

### 5.3 规范问题

试图保留欧盟但改进结果空间的提案面临两个特定的担忧。其中之一是决策理论的限制最终变得琐碎(Dreier 1996)；另一个是它们使决策者对不可能的对象拥有偏好(Broome 1991)。

对于拒绝确定性原则或独立公理的理论，会出现几个潜在的担忧，包括这些公理在直觉上是正确的担忧(Harsanyi 1977，Savage 1954，Samuelson 1952；参见 McClennen 1983，1990 中的讨论)；决策者会不一致地评估后果(Samuelson 1952，Broome 1991)；决策者会拒绝免费信息(Good 1967，Wakker 1988，Buchak 2013，Ahmed & Salow 2019，Campbell-Moore & Salow 2020)。最广泛讨论的担忧是这些理论会使决策者容易出现时间上的不一致(Raiffa 1968；Machina 1989；Hammond 1988；McClennen 1988，1990；Seidenfeld 1988a,b；Maher 1993；Rabinowicz 1995，1997；Buchak 2013，2015，2017；Briggs 2015；Joyce 2017；Thoma 2019)。

## Bibliography

* Ahmed, Arif and Bernhard Salow, 2019, “Don’t Look Now”, *The British Journal for the Philosophy of Science*, 70(2): 327–350. doi:10.1093/bjps/axx047
* Allais, Maurice, 1953, “Le Comportement de l’Homme Rationnel devant le Risque: Critique des Postulats et Axiomes de l’École Americaine”, *Econometrica*, 21(4): 503–546. doi:10.2307/1907921
* Armendt, Brad, 1986, “A Foundation for Causal Decision Theory”, *Topoi*, 5(1): 3–19. doi:10.1007/BF00137825
* –––, 1988, “Conditional Preference and Causal Expected Utility”, in William Harper and Brian Skyrms (eds.), *Causation in Decision, Belief Change, and Statistics*, Dordrecht: Kluwer, Volume II, pp. 3–24.
* Arntzenius, Frank, Adam Elga, and John Hawthorne, 2004, “Bayesianism, Infinite Decisions, and Binding”, *Mind*, 113(450): 251–283. doi:10.1093/mind/113.450.251
* Arrow, Kenneth, 1951, “Alternative Approaches to the Theory of Choice in Risk-Taking Situations”, *Econometrica*, 19: 404–437. doi:10.2307/1907465
* Aumann, Robert J., 1962, “Utility Theory without the Completeness Axiom”, *Econometrica*, 30(3): 445–462. doi:10.2307/1909888
* Bartha, Paul F.A., 2007, “Taking Stock of Infinite Values: Pascal’s Wager and Relative Utilities”, *Synthese*, 154(1): 5–52. doi:10.1007/s11229-005-8006-z
* –––, 2016, “Making Do Without Expectations”, *Mind*, 125(499): 799–827. doi:10.1093/mind/fzv152
* Bermúdez, José Luis, 2009, *Decision Theory and Rationality*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199548026.001.0001
* Bernoulli, Jakob, [*DW*] 1975, *Die Werke von Jakob Bernoulli*, Band III, Basel: Birkhäuser. A translation from this by Richard J. Pulskamp of [Nicolas Bernoulli’s letters concerning the St. Petersburg Game is available online](https://web.archive.org/web/20200725100737/http://cerebro.xu.edu/math/Sources/NBernoulli/correspondence_petersburg_game.pdf).
* Bolker, Ethan D., 1966, “Functions Resembling Quotients of Measures”, *Transactions of the American Mathematical Society*, 124(2): 292–312. doi:10.2307/1994401
* Bostrom, Nick, 2011, “Infinite Ethics”, *Analysis and Metaphysics*, 10: 9–59.
* Bradley, Richard, 2015, “Ellsberg’s Paradox and the Value of Chances”, *Economics and Philosophy*, 32(2): 231–248. doi:10.1017/S0266267115000358
* Bradley, Richard and H. Orri Stefánsson, 2017, “Counterfactual Desirability”, *British Journal for the Philosophy of Science*, 68(2): 482–533. doi:10.1093/bjps/axv023
* Bradley, Seamus and Katie Siobhan Steele, 2014, “Should Subjective Probabilities be Sharp?”, *Episteme*, 11(3): 277–289. doi:10.1017/epi.2014.8
* Briggs, Rachael, 2015, “Costs of Abandoning the Sure-Thing Principle”, *Canadian Journal of Philosophy*, 45(5–6): 827–840. doi:10.1080/00455091.2015.1122387
* Broome, John, 1991, *Weighing Goods: Equality, Uncertainty, and Time*, Oxford: Blackwell Publishers Ltd.
* –––, 1995, “The Two-Envelope Paradox”, *Analysis*, 55(1): 6–11. doi:10.2307/3328613
* –––, 1997, “Is Incommensurability Vagueness?”, in Ruth Chang (ed), *Incommensurability, Comparability, and Practical Reason*, Cambridge, MA: Harvard University Press, pp. 67–89.
* Buchak, Lara, 2013, *Risk and Rationality*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199672165.001.0001
* –––, 2015, “Revisiting Risk and Rationality: A Reply to Pettigrew and Briggs”, *Canadian Journal of Philosophy*, 45(5–6): 841–862. doi:10.1080/00455091.2015.1125235
* –––, 2017, “Replies to Commentators”, *Philosophical Studies*, 174(9): 2397–2414. doi:10.1007/s11098-017-0907-4
* Builes, David, Sophie Horowitz, and Miriam Schoenfield, 2022, “Dilating and Contracting Arbitrarily”, *Noûs*, 56(1): 3–20. doi:10.1111/nous.12338
* Campbell-Moore, Catrin and Bernhard Salow, 2020, “Avoiding Risk and Avoiding Evidence”, *Australasian Journal of Philosophy*, 98(3): 495–515. doi:10.1080/00048402.2019.1697305
* Chandler, Jake, 2014, “Subjective Probabilities Need Not Be Sharp”, *Erkenntnis*, 79(6): 1273–1286. doi:10.1007/s10670-013-9597-2
* Chang, Ruth, 1997, “Introduction”, in Ruth Chang (ed.), *Incommensurability, Incomparability, and Practical Reason*, Cambridge, MA: Harvard University Press, pp. 1–34.
* –––, 2002a, *Making Comparisons Count*, London and New York: Routledge, Taylor & Francis Group.
* –––, 2002b, “The Possibility of Parity”, *Ethics*, 112(4): 659–688. doi:10.1086/339673
* –––, 2012, “Are Hard Choices Cases of Incomparability?”, *Philosophical Issues*, 22: 106–126. doi:10.1111/j.1533-6077.2012.00239.x
* –––, 2015, “Value Incomparability and Incommensurability”, in *Oxford Handbook of Value Theory*, Iwao Hirose and Jonas Olson (eds.), Oxford: Oxford University Press.
* –––, 2016, “Parity: An Intuitive Case”, *Ratio* (new series), 29(4): 395–411. doi:10.1111/rati.12148
* Chen, Eddy Keming and Daniel Rubio, 2020, “Surreal Decisions”, *Philosophy and Phenomenological Research*, 100(1): 54–74. doi:10.1111/phpr.12510
* Chew, Soo Hong and Peter Wakker, 1996, “The Comonotonic Sure-Thing Principle”, *Journal of Risk and Uncertainty*, 12(1): 5–27. doi:10.1007/BF00353328
* Colyvan, Mark, 2006, “No Expectations”, *Mind*, 115(459): 695–702. doi:10.1093/mind/fzl695
* –––, 2008, “Relative Expectation Theory”, *Journal of Philosophy*, 105(1): 37–44. doi:10.5840/jphil200810519
* Colyvan, Mark and Alan Hájek, 2016, “Making Ado without Expectations”, *Mind*, 125(499): 829–857. doi:10.1093/mind/fzv160
* Constantinescu, Cristian, 2012, “Value Incomparability and Indeterminacy”, *Ethical Theory and Moral Practice*, 15(1): 57–70. doi:10.1007/s10677-011-9269-8
* De Sousa, Ronald B., 1974, “The Good and the True”, *Mind*, 83(332): 534–551. doi:10.1093/mind/LXXXIII.332.534
* Diamond, Peter, 1967, “Cardinal Welfare, Individualistic Ethics, and Interpersonal Comparison of Utility: A Comment”, *Journal of Political Economy*, 75(5): 765–766. doi:10.1086/259353
* Dreier, James, 1996, “Rational Preference: Decision Theory as a Theory of Practical Rationality”, *Theory and Decision*, 40(3): 249–276. doi:10.1007/BF00134210
* Easwaran, Kenny, 2008, “Strong and Weak Expectations”, *Mind*, 117(467): 633–641. doi:10.1093/mind/fzn053
* –––, 2014a, “Decision Theory without Representation Theorems”, *Philosophers’ Imprint*, 14: art. 27 (30 pages). [[Easwaran 2014 available online](http://hdl.handle.net/2027/spo.3521354.0014.027)]
* –––, 2014b, “Principal Values and Weak Expectations”, *Mind*, 123(490): 517–531. doi:10.1093/mind/fzu074
* Elga, Adam, 2010, “Subjective Probabilities Should be Sharp”, *Philosophers Imprint*, 10: art. 5 (11 pages). [[Elga 2010 available online](http://hdl.handle.net/2027/spo.3521354.0010.005)]
* Ellsberg, Daniel, 1961, “Risk, Ambiguity, and the Savage Axioms”, *Quarterly Journal of Economics*, 75(4): 643–669. doi:10.2307/1884324
* –––, 2001, *Risk, Ambiguity, and Decision*, New York: Garland.
* Eriksson, Lina and Alan Hájek, 2007, “What Are Degrees of Belief?”, *Studia Logica: An International Journal for Symbolic Logic*, 86(2): 183–213. doi:10.1007/s11225-007-9059-4
* Fine, Terrence L., 2008, “Evaluating the Pasadena, Altadena, and St Petersburg Gambles”, *Mind*, 177(467): 613–632. doi:10.1093/mind/fzn037
* Gärdenfors, Peter and Nils-Eric Sahlin, 1982, “Unreliable Probabilities, Risk Taking, and Decision Making”, *Synthese*, 53(3): 361–386. doi:10.1007/BF00486156
* Gert, Joshua, 2004, “Value and Parity”, *Ethics*, 114(3): 492–510. doi:10.1086/381697
* Ghirardato, Paolo, Fabio Maccheroni, Massimo Marinacci, and Marciano Siniscalchi, 2003, “A Subjective Spin on Roulette Wheels”, *Econometrica*, 71(6): 1897–1908. doi:10.1111/1468-0262.00472
* Gilboa, Itzhak, 1987, “Expected Utility with Purely Subjective Non-Additive Probabilities”, *Journal of Mathematical Economics*, 16(1): 65–88. doi:10.1016/0304-4068(87)90022-X
* Gilboa, Itzhak and David Schmeidler, 1989, “Maximin Expected Utility Theory with Non-Unique Prior”, *Journal of Mathematical Economics*, 18(2):141–153. doi:10.1016/0304-4068(89)90018-9
* Griffin, James, 1986, *Well-Being: Its Meaning, Measurement, and Moral Importance*, Oxford: Clarendon Press. doi:10.1093/0198248431.001.0001
* Good, I. J., 1952, “Rational Decisions”, *Journal of the Royal Statistical Society: Series B (Methodological)*, 14(1): 107–114. doi:10.1111/j.2517-6161.1952.tb00104.x
* –––, 1967, “On the Principle of Total Evidence”, *British Journal for the Philosophy of Science*, 17(4): 319–321. doi:10.1093/bjps/17.4.319
* Gwiazda, Jeremy, 2014, “Orderly Expectations”, *Mind*, 123(490): 503–516. doi:10.1093/mind/fzu059
* Hacking, Ian, 1972, “The Logic of Pascal’s Wager”, *American Philosophical Quarterly*, 9(2): 186–192.
* Hagen, Ole, 1979, “Towards a Positive Theory of Preference Under Risk”, in Maurice Allais and Ole Hagen (eds.), *Expected Utility Hypothesis and the Allais Paradox*, Dordrecht: D. Reidel, pp. 271–302.
* Hájek, Alan, 2003, “Waging War on Pascal’s Wager”, *Philosophical Review*, 112(1): 27–56. doi:10.1215/00318108-112-1-27
* –––, 2014, “Unexpected Expectations”, *Mind*, 123(490): 533–567. doi:10.1093/mind/fzu076
* Hájek, Alan and Harris Nover, 2008, “Complex Expectations”, *Mind*, 117(467): 643–664. doi:10.1093/mind/fzn086
* Hájek, Alan and Michael Smithson, 2012, “Rationality and Indeterminate Probabilities”, *Synthese*, 187(1): 33–48. doi:10.1007/s11229-011-0033-3
* Hammond, Peter J., 1988, “Consequentialist Foundations for Expected Utility”, *Theory and Decision*, 25(1): 25–78. doi:10.1007/BF00129168
* Hansson, Bengt, 1988, “Risk-aversion as a Problem of Conjoint Measurement”, in Peter Gärdenfors and Nils-Eric Sahlin (eds.), *Decision, Probability, and Utility*, Cambridge: Cambridge University Press, pp. 136–158. doi:10.1017/CBO9780511609220.010
* Hare, Caspar, 2010, “Take the Sugar”, *Analysis*, 70(2): 237–247. doi:10.1093/analys/anp174
* Harsanyi, John C., 1977, “On the Rationale of the Bayesian Approach: Comments on Professor Watkins’s Paperm”, in Butts and Hintikka (eds.), *Foundational Problems in the Special Sciences*, Dordrecht: D. Reidel.
* Hodges, J.L., Jr. and E.L. Lehman, 1952, “The Uses of Previous Experience in Reaching Statistical Decisions”, *Annals of Mathematical Statistics*, 23(3): 396–407. doi:10.1214/aoms/1177729384
* Hurwicz, Leonid, 1951a, “A Class of Criteria for Decision-Making under Ignorance”, *Cowles Commission Discussion Paper: Statistics No. 356* [[Hurwicz 1951a available online](https://cowles.yale.edu/sites/default/files/files/pub/cdp/s-0356.pdf)].
* –––, 1951b, “The Generalized Bayes-Minimax Principle”, *Cowles Commission Discussion Paper: Statistics No. 355*, [[Hurwicz 1951b available online](https://cowles.yale.edu/sites/default/files/files/pub/cdp/s-0355.pdf)].
* Jeffrey, Richard, 1965, *The Logic of Decision*, New York: McGraw-Hill Inc.
* Jordan, Jeff, 1994, “The St. Petersburg Paradox and Pascal’s Wager”, *Philosophia*, 23(1–4): 207–222. doi:10.1007/BF02379856
* Joyce, James M., 1999, *The Foundations of Causal Decision Theory*, Cambridge: Cambridge University Press. doi:10.1017/CBO9780511498497
* –––, 2005, “How Probabilities Reflect Evidence”, *Philosophical Perspectives*, 19(1): 153–179. doi:10.1111/j.1520-8583.2005.00058.x
* –––, 2011, “A Defense of Imprecise Credences in Inference and Decision Making”, *Philosophical Perspectives*, 24: 281–323. doi:10.1111/j.1520-8583.2010.00194.x
* –––, 2017, “Commentary on Lara Buchak’s Risk and Rationality”, *Philosophical Studies*, 174(9): 2385–2396. doi:10.1007/s11098-017-0905-6
* Kahneman, Daniel and Amos Tversky, 1979, “Prospect Theory: An Analysis of Decision under Risk”, *Econometrica*, 47(2): 263–291. doi:10.2307/1914185
* Köbberling, Veronika and Peter P. Wakker, 2003, “Preference Foundations for Nonexpected Utility: A Generalized and Simplified Technique”, *Mathematics of Operations Research*, 28(3): 395–423. doi:10.1287/moor.28.3.395.16390
* Kyburg, Henry E., 1968, “Bets and Beliefs”, *American Philosophical Quarterly*, 5(1): 63–78.
* –––, 1983, “Rational Belief”, *Behavioral and Brain Sciences*, 6(2): 231–245. doi:10.1017/S0140525X00015661
* Lauwers, Luc and Peter Vallentyne, 2016, “Decision Theory without Finite Standard Expected Value”, *Economics and Philosophy*, 32(3): 383–407. doi:10.1017/S0266267115000334
* Levi, Isaac, 1974, “On Indeterminate Probabilities”, *The Journal of Philosophy*, 71(13): 391–418. doi:10.2307/2025161
* –––, 1983, *The Enterprise of Knowledge*, Cambridge, MA: MIT Press.
* –––, 1986, “The Paradoxes of Allais and Ellsberg”, *Economics and Philosophy*, 2(1): 23–53. doi:10.1017/S026626710000078X
* Luce, R. Duncan and Howard Raiffa, 1957, *Games and Decisions*, New York: John Wiley & Sons, Inc..
* Machina, Mark J., 1982, “‘Expected Utility’ Analysis without the Independence Axiom”, *Econometrica*, 50(2): 277–323. doi:10.2307/1912631
* –––, 1983, “Generalized Expected Utility Analysis and the Nature of Observed Violations of the Independence Axiom”, in B.P. Stigum and F. Wenstop (eds.) *Foundations of Utility and Risk Theory with Applications*, Dordrecht: D. Reidel, pp. 263–293.
* –––, 1987, “Choice Under Uncertainty: Problems Solved and Unsolved”, *Journal of Economic Perspectives*, 1(1): 121–154. doi:10.1257/jep.1.1.121
* –––, 1989, “Dynamic Consistency and Non-expected Utility Models of Choice Under Uncertainty”, *Journal of Economic Literature*, 27(4): 1622–1668.
* Machina, Mark J. and David Schmeidler, 1992, “A More Robust Definition of Subjective Probability”, *Econometrica*, 60(4): 745–780. doi:10.2307/2951565
* Maher, Patrick, 1993, *Betting on Theories*, Cambridge: Cambridge University Press. doi:10.1017/CBO9780511527326
* Mayo-Wilson, Conor and Gregory Wheeler, 2016, “Scoring Imprecise Credences: A Mildly Immodest Proposal”, *Philosophy and Phenomenological Research*, 93(1): 55–87. doi:10.1111/phpr.12256
* McClennen, Edward F., 1983, “Sure-thing doubts”, in B.P. Stigum and F. Wenstop (eds.), *Foundations of Utility and Risk Theory with Applications*, Dordrecht: D. Reidel, pp. 117–136.
* –––, 1988, “Ordering and Independence: A Comment on Professor Seidenfeld”, *Economics and Philosophy*, 4(2): 298–308. doi:10.1017/S0266267100001115
* –––, 1990, *Rationality and Dynamic Choice: Foundational Explorations*, Cambridge: Cambridge University Press. doi:10.1017/CBO9780511983979
* McGee, Vann, 1999, “An Airtight Dutch Book”, *Analysis*, 59(4): 257–265. doi:10.1093/analys/59.4.257
* Meacham, Christopher J.G., 2019, “Difference Minimizing Theory”, *Ergo*, 6(35): 999–1034. doi:10.3998/ergo.12405314.0006.035
* Monton, Bradley, 2019, “How to Avoid Maximizing Expected Utility”, *Philosophers’ Imprint*, 19: art. 18 (25 pages). [[Monton 2019 available online](http://hdl.handle.net/2027/spo.3521354.0019.018)]
* Moss, Sarah, 2015, “Credal Dilemmas”, *Noûs*, 49(4): 665–683. doi:10.1111/nous.12073
* Nover, Harris and Alan Hájek, 2004, “Vexing Expectations”, *Mind*, 113(450): 237–249. doi:10.1093/mind/113.450.237
* Nozick, Robert, 1993, “Decision-Value”, Chapter 2 of *The Nature of Rationality*, Princeton, NJ: Princeton University Press.
* Pascal, Blaise, 1670, *Pensées*, Paris.
* Pettigrew, Richard, 2015, “Risk, Rationality and Expected Utility Theory”, *Canadian Journal of Philosophy*, 45(5–6): 798–826. doi:10.1080/00455091.2015.1119610
* Pettit, Philip, 1991, “Decision Theory and Folk Psychology”, in Michael Bacharach and Susan Hurley (eds.), *Foundations of Decision Theory*, Oxford: Basil Blackwell Ltd., pp. 147–175.
* Prelec, Drazen, 1998, “The Probability Weighting Function”, *Econometrica*, 66(3): 497–527. doi:10.2307/2998573
* Quiggin, John, 1982, “A Theory of Anticipated Utility”, *Journal of Economic Behavior & Organization*, 3(4): 323–343. doi:10.1016/0167-2681(82)90008-7
* Rabin, Matthew, 2000, “Risk Aversion and Expected-Utility Theory: A Calibration Theorem”, *Econometrica*, 68(5): 1281–1292. doi:10.1111/1468-0262.00158
* Rabinowicz, Wlodek, 1995, “To Have One’s Cake and Eat It, Too: Sequential Choice and Expected-Utility Violations:”, *Journal of Philosophy*, 92(11): 586–620. doi:10.2307/2941089
* –––, 1997, “On Seidenfeld’s Criticism of Sophisticated Violations of the Independence Axiom”, *Theory and Decision*, 43(3): 279–292. doi:10.1023/A:1004920611437
* –––, 2008, “Value Relations”, *Theoria*, 74: 18–49. doi:10.1111/j.1755-2567.2008.00008.x
* Raiffa, Howard, 1968, *Decision Analysis: Introductory Lectures on Choices Under Uncertainty*, Reading, MA: Addison-Wesley.
* Ramsey, Frank, 1926 [1931], “Truth and Probability”, Ch. VII of F. Ramsey, *The Foundations of Mathematics and other Logical Essays*, edited by R.B. Braithwaite, London: Kegan Paul Ltd., 1931, 156–198.
* Raz, Joseph, 1988, “Incommensurability”, chapter 13 of *The Morality of Freedom*, Oxford: Oxford University Press, pp. 321–368.
* Rinard, Susanna, 2015, “A Decision Theory for Imprecise Probabilities”, *Philosophers’ Imprint*, 15: art. 7 (16 pages). [[Rinard 2015 available online](http://hdl.handle.net/2027/spo.3521354.0015.007)]
* Rothschild, Michael and Joseph E Stiglitz, 1972, “Addendum to ‘Increasing Risk: I. A Definition’”, *Journal of Economic Theory*, 5(2): 306. doi:10.1016/0022-0531(72)90112-3
* Samuelson, Paul A., 1952, “Probability, Utility, and the Independence Axiom”, *Econometrica*, 20(4): 670–678. doi:10.2307/1907649
* Sartre, Jean-Paul, 1946, *L'Existentialisme est un humanisme*, Paris: Nagel. Translated as *Existentialism is a Humanism*, Carol Macomber (trans.), New Haven, CT: Yale University Press, 2007.
* Savage, Leonard, 1954, *The Foundations of Statistics*, New York: John Wiley and Sons.
* Schick, Frederic, 1979, “Self-Knowledge, Uncertainty, and Choice”, *British Journal for the Philosophy of Science*, 30(3): 235–252. doi:10.1093/bjps/30.3.235
* –––, 1991, *Understanding Action: An Essay on Reasons*, Cambridge: Cambridge University Press. doi:10.1017/CBO9781139173858
* Schmeidler, David, 1989, “Subjective Probability and Expected Utility without Additivity”, *Econometrica*, 57(3): 571–587. doi:10.2307/1911053
* Schmidt, Ulrich, 2004, “Alternatives to Expected Utility: Formal Theories”, chapter 15 of *Handbook of Utility Theory*, Salvador Barberà, Peter J. Hammond, and Christian Seidl (eds.), Boston: Kluwer, pp. 757–837.
* Schoenfield, Miriam, 2017, “The Accuracy and Rationality of Imprecise Credences”, *Noûs*, 51(4): 667–685. doi:10.1111/nous.12105
* –––, 2020, “Can Imprecise Probabilities be Practically Motivated? A Challenge to the Desirability of Ambiguity Aversion”, *Philosophers’ Imprint*, 20: art. 30 (21 pages). [[Schoenfield 2020 available online](http://hdl.handle.net/2027/spo.3521354.0020.030)]
* Segal, Uzi, 1985, “Some Remarks on Quiggin’s Anticipated Utility”, *Journal of Economic Behavior and Organization*, 8(1): 145–154. doi:10.1016/0167-2681(87)90027-8
* Seidenfeld, Teddy, 1988a, “Decision Theory without ‘Independence’ or without ‘Ordering’”, *Economics and Philosophy*, 4(2): 267–290. doi:10.1017/S0266267100001085
* –––, 1988b, “Rejoinder”, *Economics and Philosophy*, 4(2): 309–315. doi:10.1017/S0266267100001127
* Seidenfeld, Teddy, Mark J. Schervish, and Joseph B. Kadane, 1990, “Decisions Without Ordering”, in E. Seig (ed.), *Acting and Reflecting: The Interdisciplinary Turn in Philosophy*, Dordrecht: Kluwer: 143–70.
* –––, 2009, “Preference for Equivalent Random Variables: A Price for Unbounded Utilities”, *Journal of Mathematical Economics*, 45(5–6): 329–340. doi:10.1016/j.jmateco.2008.12.002
* –––, 2010, “Coherent Choice Functions Under Uncertainty”, *Synthese*, 172(1): 157–176. doi:10.1007/s11229-009-9470-7
* –––, 2012, “Forecasting with Imprecise Probabilities”, *International Journal of Approximate Reasoning*, 53(8): 1248–1261. doi:10.1016/j.ijar.2012.06.018
* Sinnott-Armstrong, Walter, 1988, *Moral Dilemmas*, Oxford: Blackwell.
* Shackle, G.L.S., 1952, *Expectations in Economics*, Cambridge: Cambridge University Press.
* Skala, Heinz J., 1975, *Non-Archimedean Utility Theory*, Dordrecht: D. Reidel.
* Smith, Nicholas J.J., 2014, “Is Evaluative Compositionality a Requirement of Rationality?”, *Mind*, 123(490): 457–502. doi:10.1093/mind/fzu072
* Sobel, Jordan Howard, 1996, “Pascalian Wagers”, *Synthese*, 108(1): 11–61. doi:10.1007/BF00414004
* Starmer, Chris, 2000, “Developments in Non-Expected Utility Theory: The Hunt for a Descriptive Theory of Choice under Risk”, *Journal of Economic Literature*, 38(2): 332–382. doi:10.1257/jel.38.2.332
* Stefánsson, H. Orri and Richard Bradley, 2015, “How Valuable Are Chances?”, *Philosophy of Science*, 82(4): 602–625. doi:10.1086/682915
* –––, 2019, “What Is Risk Aversion?”, *The British Journal for the Philosophy of Science*, 70(1): 77–102. doi:10.1093/bjps/axx035
* Sturgeon, Scott, 2008, “Reason and the Grain of Belief”, *Noûs*, 42(1): 139–165. doi:10.1111/j.1468-0068.2007.00676.x
* Sud, Rohan, 2014, “A Forward Looking Decision Rule for Imprecise Credences”, *Philosophical Studies*, 167(1): 119–139. doi:10.1007/s11098-013-0235-2
* Sugden, Robert, 2004, “Alternatives to Expected Utility: Foundations”, Chapter 14 of *Handbook of Utility Theory*, Salvador Barberà, Peter J. Hammond, and Christian Seidl (eds.), Boston: Kluwer, pp. 685–755.
* –––, 2009, “On Modelling Vagueness—and on *Not* Modelling Incommensurability”, *Aristotelian Society Supplementary Volume*, 83: 95–113. doi:10.1111/j.1467-8349.2009.00174.x
* Thoma, Johanna, 2019, “Risk Aversion and the Long Run”, *Ethics*, 129(2): 230–253. doi:10.1086/699256
* Thoma, Johanna and Jonathan Weisberg, 2017, “Risk Writ Large”, *Philosophical Studies*, 174(9): 2369–2384. doi:10.1007/s11098-017-0916-3
* Troffaes, Matthias C.M., 2007, “Decision Making under Uncertainty Using Imprecise Probabilities”, *International Journal of Approximate Reasoning*, 45(1): 17–29. doi:10.1016/j.ijar.2006.06.001
* Tversky, Amos and Daniel Kahneman, 1992, “Advances in Prospect Theory: Cumulative Representation of Uncertainty”, *Journal of Risk and Uncertainty*, 5(4): 297–323. doi:10.1007/BF00122574
* Wakker, Peter P., 1988, “Nonexpected Utility as Aversion of Information”, *Journal of Behavioral Decision Making*, 1(3): 169–175. doi:10.1002/bdm.3960010305
* –––, 1989, *Additive Representations of Preferences, A New Foundation of Decision Analysis*, Dordrecht: Kluwer.
* –––, 1994, “Separating Marginal Utility and Probabilistic Risk-aversion”, *Theory and Decision*, 36: 1–44. doi:10.1007/BF01075296
* –––, 2010, *Prospect Theory: For Risk and Ambiguity*, Cambridge: Cambridge University Press. doi:10.1017/CBO9780511779329
* Wald, Abraham, 1950, *Statistical Decision Functions,* New York: John Wiley & Sons.
* Walley, Peter, 1991, “The Importance of Imprecision”, Ch. 5 of *Statistical Reasoning with Imprecise Probabilities* (Monographs on Statistics and Applied Probability 42), London: Chapman and Hall, pp. 207–281.
* Watkins, J.W.N., 1977, “Towards a Unified Decision Theory: A Non-Bayesian Approach”, in R. Butts and J. Hintikka (eds.), *Foundational Problems in the Special Sciences*, Dordrecht: D. Reidel.
* Weirich, Paul, 1986, “Expected Utility and Risk”, *British Journal for the Philosophy of Science*, 37(4): 419–442. doi:10.1093/bjps/37.4.419
* –––, 2008, “Utility Maximization Generalized”, *Journal of Moral Philosophy*, 5(2): 282–299. doi:10.1163/174552408X329019
* –––, 2020, *Rational Responses to Risks*, New York: Oxford University Press. doi:10.1093/oso/9780190089412.001.0001
* White, Roger, 2009, “Evidential Symmetry and Mushy Credence”, in T. Szabo Gendler & J. Hawthorne (eds.), *Oxford Studies in Epistemology*, Oxford: Oxford University Press, pp. 161–186.
* Vallentyne, Peter, 1993, “Utilitarianism and Infinite Utility”, *Australasian Journal of Philosophy*, 71(2): 212–217. doi:10.1080/00048409312345222
* Vallentyne, Peter and Shelly Kagan, 1997, “Infinite Value and Finitely Additive Value Theory”, *The Journal of Philosophy*, 94(1): 5–26. doi:10.2307/2941011
* Vallinder, Aron, 2018, “Imprecise Bayesianism and Global Belief Inertia”, *The British Journal for the Philosophy of Science*, 69(4): 1205–1230. doi:10.1093/bjps/axx033
* Von Neumann, John and Oskar Morgenstern, 1944, *Theory of Games and Economic Behavior*, Princeton, NJ: Princeton University Press.
* Yaari, Menahem E., 1987, “The Dual Theory of Choice under Risk”, *Econometrica*, 55(1): 95–115. doi:10.2307/1911158
* Zynda, Lyle, 2000, “Representation Theorems and Realism about Degrees of Belief”, *Philosophy of Science*, 67(1): 45–69. doi:10.1086/392761

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=rationality-normative-nonutility). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/rationality-normative-nonutility/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=rationality-normative-nonutility&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/rationality-normative-nonutility/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* Konek, Jason, manuscript, “[Epistemic Conservativity and Imprecise Credence](https://dl.dropboxusercontent.com/s/6yl8sx0rkko0cey/ecic.pdf)”

## Related Entries

[consequentialism](https://plato.stanford.edu/entries/consequentialism/) | [decision theory](https://plato.stanford.edu/entries/decision-theory/) | [decision theory: descriptive](https://plato.stanford.edu/entries/decision-theory-descriptive/) | [infinity](https://plato.stanford.edu/entries/infinity/) | [Pascal’s wager](https://plato.stanford.edu/entries/pascal-wager/) | [probabilities, imprecise](https://plato.stanford.edu/entries/imprecise-probabilities/) | [rational choice, normative: expected utility](https://plato.stanford.edu/entries/rationality-normative-utility/) | [risk](https://plato.stanford.edu/entries/risk/) | [St. Petersburg paradox](https://plato.stanford.edu/entries/paradox-stpetersburg/)

[Copyright © 2022](https://plato.stanford.edu/info.html#c) by  
Lara Buchak <[*lbuchak@princeton.edu*](mailto:lbuchak%40princeton%2eedu)>
