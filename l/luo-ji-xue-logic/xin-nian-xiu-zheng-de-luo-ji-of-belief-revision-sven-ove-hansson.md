# 信念修正的逻辑 of belief revision (Sven Ove Hansson)

*首次发表于2006年4月21日，实质修订于2021年12月21日。*

在信念修正（信念变化）的逻辑学中，信念状态（或数据库）由一组句子表示。变化的主要操作是引入或删除表示信念的句子。在这两种情况下，可能需要对其他句子进行变化（例如为了保持一致性）。已经提出了这些操作的合理性假设，并且已经获得了以这些假设为基础的特定类型操作的表示定理。

在信念修正理论的主导模型中，即所谓的 AGM 模型中，表示信念状态的集合被假定为一个逻辑上封闭的句子集合（信念集）。信念修正理论中最受争议的话题之一是恢复假设，即如果首先删除一个信念，然后重新插入，所有原始信念都会恢复。恢复假设在 AGM 模型中成立，但在使用信念基础的密切相关模型中不成立。另一个被广泛讨论的话题是如何充分表示重复变化。已经提出了几种替代模型，旨在提供比 AGM 模型更现实的信念变化解释。
 

---

## 1. 引言

### 1.1 历史

信念修正（信念变化，信念动力学）自 20 世纪 80 年代中期以来被认为是一个独立的学科。它源于两个交汇的研究传统。

其中之一起源于计算机科学。自计算机问世以来，程序员们就开发了更新数据库的程序。人工智能的发展激发了计算机科学家构建更复杂的数据库更新模型的灵感。Jon Doyle（1979）开发的真实维护系统在这一发展中起到了重要作用。最重要的理论贡献之一是 Ronald Fagin、Jeffrey Ullman 和 Moshe Vardi 在 1983 年发表的一篇论文，其中他们引入了数据库优先级的概念。

这两个研究传统中的第二个是哲学研究。从广义上讲，信念变化自古以来一直是哲学思考的对象。在 20 世纪，哲学家们讨论了科学理论发展的机制，并提出了修订概率分配的合理性标准。从 1970 年代开始，关于合理信念变化的要求进行了更加专注的讨论。可以指出两个里程碑。第一个是 Isaac Levi 在 1970 年代进行的一系列研究（Levi 1977, 1980）。Levi 提出了许多后来成为这一研究领域主要关注的问题。他还提供了很多基本的形式框架。William Harper 在同一时期的工作（1977）也产生了持久的影响。

下一个里程碑是 AGM 模型，它以其三位创始人 Carlos Alchourrón、Peter Gärdenfors 和 David Makinson（1985 年）命名。Alchourrón 和 Makinson 之前曾合作研究法律法规的变化（Alchourrón 和 Makinson 1981, 1982）。Gärdenfors 的早期工作涉及信念变化和条件句之间的联系（Gärdenfors 1978, 1981）。三人联合撰写了一篇论文，提供了一个新的、更加通用和多功能的形式框架，用于研究信念变化。（关于他们合作工作的历史，请参见 Makinson 2003 和 Gärdenfors 2011。）自 1985 年在《符号逻辑杂志》上发表该论文以来，其主要概念和构造已经得到了重要的阐述和发展。AGM 模型及其衍生出的发展仍然构成了信念修正理论的核心。

### 1.2 信念和变化的表示

在 AGM 模型和大多数其他信念变化模型中，信念通过某种形式语言中的句子来表示。句子不能捕捉到信念的所有方面，但它们是目前可用的最好的通用表示。

一个代理人持有的信念由一组表示信念的句子来表示。通常假设这个集合在逻辑推理下是封闭的，即从这个集合中逻辑上推出的每个句子已经在集合中。这显然是一个不现实的理想化，因为这意味着代理人被认为是“逻辑全知”的，即一个完美的逻辑推理者。然而，这是一个有用的理想化，因为它简化了逻辑处理；事实上，如果没有这个理想化，似乎很难得到一个有趣的形式化处理。在逻辑学中，逻辑封闭的集合被称为“理论”。在形式认识论中，它们也被称为“语料库”、“知识集”或（更常见的是）“信念集”。

Isaac Levi（1991）通过指出信念集由某人承诺相信的句子组成，而不是她实际相信的句子，澄清了这种理想化的性质。根据 Levi 的说法，我们在信念的所有逻辑推论上都有承诺相信，但通常我们的表现并不符合这个承诺。信念集是代理人的认识承诺集合，因此比她实际持有的信念集合更大。

在 AGM 框架中，有三种类型的信念变化。在收缩中，指定的句子 p 被移除，即信念集 K 被另一个不包含 p 的子集 K÷p 所取代。在扩展中，句子 p 被添加到 K 中，而不移除任何内容，即 K 被一个最小的逻辑封闭集合 K+p 所取代，该集合包含 K 和 p。在修正中，句子 p 被添加到 K 中，同时如果需要确保所得到的信念集 K∗p 是一致的，则移除其他句子。

需要注意这些模型的具体特点。它们是输入同化的。这意味着变化的对象，即信念集，暴露于输入，并因此而改变。没有明确表示时间的表达。相反，特征数学成分是一个函数，对于每对信念集和输入，分配一个新的信念集。

### 1.3 形式准备

表示信念的句子构成一种语言。（与逻辑学中通常情况一样，该语言与其包含的所有句子的集合等同。）句子，即该语言的元素，将用小写字母（p，q...）表示，而句子集将用大写字母表示。该语言包含常见的真值功能连接词：否定（¬），合取（&），析取（∨），蕴涵（→）和等价（↔）。⊥表示任意矛盾（“falsum”），⊤表示任意重言式。

为了表达逻辑学，将使用一个 Tarskian 的推理算子。直观地说，对于任意一组句子 A，Cn(A)是 A 的逻辑推论的集合。更正式地说，对于给定语言的一个推论操作是一个从句子集合到句子集合的函数 Cn。它满足以下三个条件：

 包含性：
A⊆Cn(A)

 单调性：
如果 A⊆B，则 Cn(A)⊆Cn(B)

 迭代：
Cn(A)=Cn(Cn(A))

逻辑学假设 Cn 是超经典的，即如果 p 可以通过经典真值逻辑从 A 推导出来，则 p∈Cn(A)。当且仅当 A=Cn(A)时，A 是一个信念集。在接下来的讨论中，K 将表示一个信念集。X⊢p 是 p∈Cn(X)的另一种表示，而 X⊬p 表示 p∉Cn(X)。Cn(∅)是永真式的集合。

通过一个句子 p 对 K 进行扩展，即只添加 p 而不移除任何元素，记作 K+p，并定义如下：K+p=Cn(K∪{p}).

## 2. 收缩

### 2.1 部分满足收缩

收缩 K 通过 p 的结果应该是 K 的一个子集，不暗示 p，但没有不必要地删除 K 的元素。因此，有兴趣考虑不暗示 p 的包含最大子集 K。

对于任意集合 A 和命题 p，余集 A⊥p（“A 余 p”）是 A 的包含极大子集的集合，这些子集不蕴含 p。换句话说，如果集合 B 是 A 的子集且不蕴含 p，且不存在不蕴含 p 的集合 B′使得 B⊂B′⊆A，则集合 B 是 A⊥p 的元素。A⊥p 的元素被称为“余项”。

如果收缩操作毫不妥协地最小化信息损失，那么 K÷p 将是余项之一。然而，可以证明这种构造具有不合理的性质。对于收缩的一个更合理的方法是让 K÷p 成为一些余项的交集。这就是部分 meet 收缩，是 Carlos Alchourrón、Peter Gärdenfors 和 David Makinson 在经典的 1985 年论文中的主要创新。部分 meet 收缩的操作使用一个选择函数来选择 K⊥p 的“最佳”元素。更准确地说，对于 K 的选择函数是一个函数γ，使得如果 K⊥p 非空，则γ(K⊥p)是 K⊥p 的非空子集。在极限情况下，当 K⊥p 为空时，定义γ(K⊥p)等于{K}。

部分 meet 收缩的结果等于 K⊥p 的选定元素的交集，即 K÷p=⋂γ(K⊥p)。

当对于所有的句子 p，γ(K⊥p)只有一个元素时，这种情况被称为最大选择收缩。另一种情况是当γ(K⊥p)=K⊥p 时，只要 K⊥p 非空，就被称为完全 meet 收缩。这两种极限情况在技术上是有用的，但它们都具有高度不现实的特性。

信念集的部分 meet 收缩满足六个被称为基本 Gärdenfors 公设（或基本 AGM 公设）的公设。首先，当一个信念集 K 被一个句子 p 收缩时，结果应该是逻辑闭合的。

 闭合性：
K÷p=Cn(K÷p)

收缩应该成功，即 K÷p 不应暗示 p（或不包含 p，如果满足闭包原则，则是相同的事情）。然而，要求对于所有句子 p，p∉Cn(K÷p)是太过苛刻的，因为如果 p 是一个重言式，这个要求是无法满足的。成功的前提必须以 p 不是逻辑真的为条件。

 成功：
如果 p∉Cn(∅)，那么 p∉Cn(K÷p)。

自从可能存在除了永真式之外的句子，一个认知主体可能拒绝撤回，因此成功公理受到了质疑。（关于不满足成功公理的操作，请参见第 6.5 节。）

压缩集被假设为原始集合的子集：

 包含：
K÷p⊆K

包含通常被认为是收缩的构成性属性。然而，也有人质疑这一观点，认为当认知主体不再相信 p 时，通常是因为她接收到了一些与 p 相矛盾的新信息。可以说，这些信息应该包含在 K÷p 中。

如果要缩减的句子不包含在原始信念集中，那么通过该句子进行的缩减将不会产生任何变化。这样的缩减是无效的（空虚的）操作，它们应该保持原始集合不变。

 空虚性：
如果 p∉Cn(K)，那么 K÷p=K。

在逻辑上等价的句子应该在缩写中被同等对待：

 随附性：
如果 p↔q∈Cn(∅)，那么 K÷p=K÷q。

外延性保证了逻辑学的收缩逻辑在允许逻辑上等价的句子自由替换时是外延的。

信念收缩不仅应该成功，还应该在尽可能少地丧失先前信念的意义上是最小的。认知主体只有在被迫这样做时才应该放弃信念，并且在这种情况下应该尽可能少地放弃它们。这由以下公设保证：

 信念修正：
K⊆(K÷p)+p

根据恢复原则，在去除 p 之后，仍然保留了如此之多的内容，以至于通过重新包含（通过扩展）p，一切都将被恢复。

AGM 模型的一个核心结果是关于部分 meet 收缩的表示定理。根据这个定理，如果一个操作÷对于信念集 K 是部分 meet 收缩的，那么它必须满足上述六个公设，即闭包性、成功性、包含性、空虚性、外延性和恢复性。

一个对于信念集合 K 的选择函数应该对于所有的句子 p，选择那些 K⊥p 中“最好”的或者最值得保留的元素。然而，选择函数的定义非常一般，允许相当无序的选择模式。一个有序的选择函数应该根据一些良好的偏好关系总是选择剩余集合中的最佳元素。一个对于信念集合 K 的选择函数γ是关系型的，当且仅当存在一个二元关系 R，对于所有的句子 p，如果 K⊥p 非空，则γ(K⊥p)={B∈K⊥p∣CRB 对于所有的 C∈K⊥p}。此外，如果 R 是传递的（即，它满足：如果 ARB 且 BRC，则 ARC），那么γ和由此产生的部分 meet contraction 也是传递的关系型的。

为了描述传递的关系型部分 meet contraction，需要涉及通过合取进行的收缩的公设。

为了放弃一个合取 p&q，代理人必须放弃对 p 的信念或者对 q 的信念（或者两者都放弃）。假设通过 p&q 进行的收缩导致对 p 的信念的丧失，即 p∉K÷(p&q)。可以预期，在这种情况下，通过 p&q 进行的收缩应该导致为了通过 p 进行收缩而丧失的所有信念的丧失。另一种表达方式是，在 K÷(p&q)中保留的一切也在 K÷p 中保留：

 连接包含：
如果 p∉K÷(p&q)，那么 K÷(p&q)⊆K÷p。

另一个相当合理的通过合取进行收缩的原则是，无论是通过 p 的收缩还是通过 q 的收缩，都能够承受通过 p&q 的收缩。换句话说，无论是 K÷p 和 K÷q 的元素，也是 K÷(p&q)的元素。

 逻辑学中的逻辑重叠：
(K÷p)∩(K÷q)⊆K÷(p&q)

逻辑重叠和逻辑包含通常被称为 Gärdenfors 关于信念修正的补充假设。如果一个操作符÷对于 K 是一个具有传递性关系的部分 meet 收缩，那么它必须满足六个基本假设，并且还要满足逻辑重叠和逻辑包含。

### 2.2 基于巩固的缩减

当被迫放弃先前的信念时，认知主体应该放弃那些解释力和整体信息价值较小的信念。举个例子，在放弃对自然法则的信念和放弃对单个事实陈述的信念之间的选择中，通常应该保留对具有更高解释力的自然法则的信念。这是彼得·格登福斯（Peter Gärdenfors）提出的信念缩减应该受到二元关系——认知巩固的基本思想。（Gärdenfors 1988，Gärdenfors 和 Makinson 1988）对于信念集合中的两个元素 p 和 q 来说，“q 比 p 更加巩固”意味着 q 在调查或思考中更有用，或者比 p 具有更多的“认知价值”。在信念缩减中，具有最低巩固性的信念应该是最容易放弃的信念。

对于认知巩固，将使用以下符号：

p≤q：p 的根深蒂固程度不超过 q。

p<q：p 的根深蒂固程度小于 q。（(p≤q)&¬(q≤p)）

p≡q：p 和 q 的根深蒂固程度相等。（(p≤q)&(q≤p)）

Gärdenfors 提出了认知根深蒂固的以下五个公设。它们通常被称为根深蒂固的标准公设：

 传递性：
如果 p≤q 且 q≤r，则 p≤r。

 主导性：
如果 p⊢q，则 p≤q。

 连接性：
要么 p≤(p&q)，要么 q≤(p&q)。

 最小性：
如果信念集合 K 是一致的，那么当且仅当对于所有的 q，p≤q，p∉K。

 最大性：
如果对于所有的 q，都有 q≤p，则 p∈Cn(∅)。

从这些前三个公设可以得出，一个巩固关系满足连通性（完备性），即对于所有的 p 和 q，要么 p≤q，要么 q≤p。

一个根深蒂固的关系≤会根据以下定义引发基于根深蒂固的收缩操作÷：

若且唯若 q∈K 且要么 p<(p∨q)，要么 p∈Cn(∅)，则 q∈K÷p。

已经证明基于根深蒂固的收缩与传递性关系的部分 meet 收缩完全一致。有关根深蒂固关系的详细讨论和更多结果，请参见 Rott 2001。

### 2.3 恢复及其避免

恢复是信念变化中最受争议的假设。很容易找到似乎验证恢复的例子。一个人先失去，然后重新获得她相信自己口袋里有一美元的信念，似乎回到了她先前的信念状态。然而，也可以提出其他例子，其中恢复会产生不合理的结果。以下是两个已经提出的例子，用来说明恢复在一般情况下不成立：

1. 我在一本关于克利奥帕特拉的书中读到，她既有一个儿子又有一个女儿。因此，我的信念集包含了 p 和 q，其中 p 表示克利奥帕特拉有一个儿子，q 表示她有一个女儿。然后，我从一个有知识的朋友那里得知这本书实际上是一本历史小说。在那之后，我从我的信念集中排除了 p∨q，即我不再相信克利奥帕特拉有孩子。然而，不久之后，我从一个可靠的消息来源得知克利奥帕特拉有孩子。对我来说，将 p∨q 添加到我的信念集中而不重新引入 p 或 q 似乎是完全合理的。这与恢复相矛盾。
2. 之前我持有两个信念：“乔治是一个罪犯”（p）和“乔治是一个大规模杀人犯”（q）。当我接收到导致我放弃第一个信念（p）的信息时，第二个信念（q）也必须放弃（因为否则 p 将从 q 中推导出来）。

然后我接收到新的信息，使我接受了信念“乔治是一个扒手”（r）。由此产生的新信念集是通过 r 扩展 K÷p 得到的，即（K÷p）+r。由于 p 是从 r 中推导出来的，（K÷p）+p 是（K÷p）+r 的子集。通过恢复，（K÷p）+p 包括 q，由此可推出（K÷p）+r 包括 q。

因此，由于我之前相信乔治是一个大规模杀人犯，根据恢复原理，我在那之后不能相信他是一个扒手而不相信他是一个大规模杀人犯。

由于这个假设的问题性质，寻找直观上较少有争议的假设以防止不必要的收缩损失是有趣的。以下是尝试做到这一点的方法：

 核心保留：
如果 q∈K 且 q∉K÷p，则存在一个信念集 K′，使得 K′⊆K 且 p∉K′但 p∈K′+q。

核心保留要求被排除的句子 q 在某种程度上对于 K 蕴含 p 的事实做出贡献。它给人一种比恢复更弱、更可信的印象。然而，已经证明如果一个信念集 K 的运算符 ÷ 满足核心保留，则它也满足恢复。

已经尝试构建不满足恢复的信念集收缩操作。可以说，其中最可信的构造之一是由 Hans Rott 和 Maurice Pagnucco（2000）彻底研究的严重撤回操作。它可以通过修改认知巩固运算的定义来构建，如下所示：

若且唯若 q ∈ K÷p，那么 q ∈ K 且要么 p<q，要么 p ∈ Cn(∅)。

严重的撤回具有有趣的特点，但它也具有以下属性：

 驱逐性：
如果 p∉Cn(∅)且 q∉Cn(∅)，那么要么 p∉K÷q，要么 q∉K÷p。

这是信念修正的一个高度不可信的特性，因为它不允许不相关的信念相互之间的收缩不受干扰。考虑一个学者，她相信她的车停在房子前面。她还相信莎士比亚写了《暴风雨》。她应该能够放弃第一个信念而保留第二个信念。她也应该能够放弃第二个信念而不放弃第一个信念。这种排斥性不允许这样做。对于不满足恢复性的信念集的收缩操作的构建仍然是一个未解决的问题。

## 3. 修正

修正操作∗的两个主要任务是：（1）将新的信念 p 添加到信念集 K 中，（2）确保生成的信念集 K∗p 是一致的（除非 p 是不一致的）。第一个任务可以通过扩展 p 来完成。第二个任务可以通过先前通过其否定¬p 进行收缩来完成。如果一个信念集不蕴含¬p，则可以将 p 添加到其中而不会丧失一致性。这些子操作的组合导致了修正的以下定义（Gärdenfors 1981，Levi 1977）：

 利维恒等式：
K∗p=(K÷¬p)+p.

如果÷是一个部分遇见收缩，那么以这种方式定义的∗操作就是一个部分遇见修正。这是 AGM 模型中修正的标准构造。

部分满足修正已被公理化地描述。如果一个操作∗满足以下六个公理，则它是一个部分满足修正：

 闭包：
K∗p=Cn(K∗p)

 成功：
p∈K∗p

 包含：
K∗p⊆K+p

 空虚性：
如果¬p∉K，则 K∗p=K+p。

 一致性：
如果 p 是一致的，那么 K∗p 是一致的。

 外延性：
如果(p↔q)∈Cn(∅)，那么 K∗p=K∗q。

这六个公设通常被称为修正的基本 Gärdenfors 公设。其中最有争议的是 Success。它意味着对于一个不一致的输入句子，认知代理人将获得一个不一致的信念集，根据这个集合，她认为所有句子都是真的。即使对于一致的输入句子，Success 也是有争议的。对于一个认知代理人来说，认为某些陈述是如此不可信以至于没有任何事情能使她相信它们并不是不合理的。对于不满足 Success 的信念修正模型，请参见第 6.3 节和第 6.4 节。

以下两个补充公设是标准的一部分：

 超扩展：
K∗(p&q)⊆(K∗p)+q

 子扩展：
如果¬q∉Cn(K∗p)，那么(K∗p)+q⊆K∗(p&q)。

这些公设与收缩的补充公设密切相关。设∗是通过 Levi 恒等式从部分 meet 收缩÷定义的部分 meet 修正。那么，∗满足超扩展当且仅当÷满足合取重叠。此外，∗满足子扩展当且仅当÷满足合取包含。

以下公设是由汉斯·罗特引入的：

 析取因式分解：
K∗(p∨q)等于 K∗p、K∗q 和 K∗p∩K∗q 中的一个。

Rott 证明，在存在六个基本的 AGM 公理的情况下，如果且仅如果析取因式分解成立，那么两个补充的 AGM 公理，即超展开和次展开，都成立。

## 4. 可能世界建模

可以通过可能世界的集合构建出对信念状态的替代模型（Grove 1988）。在逻辑学中，可能世界指的是语言的最大一致子集。命题指的是一组可能世界。命题和信念集之间存在一一对应关系。每个信念集可以由包含该信念集的可能世界组成的命题（可能世界的集合）来表示。

对于任意一组句子 A，令[A]表示包含 A 作为子集的可能世界的集合，对于任意句子 p，令[p]表示包含 p 作为元素的可能世界的集合。如果 A 是不一致的，则[A]=∅。否则，[A]是一个非空的可能世界集合。（假设⋂∅等于整个语言。）如果 K 是一个信念集，则⋂[K]=K。

命题解释提供了关于信念变化某些方面的直观清晰的图景。使用几何表面来表示可能世界的集合是方便的。在图表 1 中，矩形表面上的每个点代表一个可能世界。标记为[K]的圆表示那些所有 K 中的句子都为真的可能世界，即可能世界的集合[K]。标记为[p]的区域表示那些句子 p 为真的可能世界。

![Diagram 1](https://plato.stanford.edu/entries/logic-belief-revision/diag1.jpg)

图表 1. 通过 p 修正 K。

在图表 1 中，[K]和[p]有一个非空的交集，这意味着 K 与 p 是兼容的。因此，通过 p 对 K 的修正不违背信念。其结果是通过放弃[K]中与 p 不兼容的元素得到的。换句话说，通过[p]修正[K]的结果应该等于[K]∩[p]。

如果[K]和[p]不相交，则修正的结果必须在[K]之外寻找，但它仍然应该是[p]的子集。一般来说：

通过[p]修正[K]的结果是[p]的一个子集，它是

1. 如果[p]非空，则修正的结果也是非空的。
2. 等于 [K]∩[p]，如果 [K]∩[p] 非空

这个简单的修正规则可以被证明与部分满足修正完全对应。

修正后的信念状态与原始信念状态 [K] 的差异不应超过 [p] 的动机。这可以通过要求通过 [p] 对 [K] 进行修正的结果由与 [K] 尽可能接近的 [p] 元素组成来实现。为此，可以将 [K] 视为被一组同心球包围的系统（就像 David Lewis 对反事实条件句的描述中所述）。每个球代表与 [K] 的接近程度或相似度。

在这个模型中，通过[p]修正[K]的结果应该是[p]与围绕[K]最窄的球体的交集，该球体与[p]有非空交集，如图 2 所示。这种构造是由亚当·格罗夫（1988 年）发明的，他还证明了这种基于球体的修正与传递性关系的部分 meet 修正完全对应。由此可见，它也完全对应于根深蒂固的修正。

![Diagram 2](https://plato.stanford.edu/entries/logic-belief-revision/diag2.jpg)

图 2. 通过 p 对 K 进行基于球体的修正。

可能世界模型也可以用于收缩。在收缩中，对“可能”的限制（与代理人的信念兼容的世界）被移除。因此，可能性的集合被扩大，因此通过[p]对[K]进行收缩将导致[K]的超集。此外，新的可能性应该是不满足 p 的世界，即它们应该是满足¬p 的世界。在[K]和[¬p]有非空交集的极限情况下，不需要扩大[K]使¬p 成为可能，因此原始的信念状态将保持不变。总之，应根据以下规则执行收缩：

通过[p]对[K]进行收缩的结果是[K]和[¬p]的一个非空子集的并集

1. 如果[¬p]非空，则该子集也非空
2. 如果[K]∩[¬p]非空，则等于[K]∩[¬p]

信念-违背收缩在图 3 中进行了说明。根据此规则执行的收缩可以被证明与部分满足收缩完全对应。此外，当整个[¬p]被添加到[K]时，特殊情况完全对应于满足收缩。另一个极端情况是，当只有[¬p]的一个元素（表面上的“点”）被添加到[K]时，完全对应于最大选择收缩。因此，在通过 p 进行最大选择收缩时，只有一种可能的方式可以使 p 为假（¬p 为真）。

![Diagram 3](https://plato.stanford.edu/entries/logic-belief-revision/diag3.jpg)

图 3. 通过 p 对 K 进行收缩。

格罗夫的球体系统也可以用于收缩。在基于球体的 p 收缩中，将属于与[K]具有非空交集的最近球体的[¬p]的元素添加进去。该过程在图 4 中显示。基于球体的收缩完全对应于传递关系的部分满足收缩。

![Diagram 4](https://plato.stanford.edu/entries/logic-belief-revision/diag4.jpg)

图 4. 由 p 对 K 进行基于球体的收缩。

## 5. 信念基础

### 5.1 增强的表达能力

在上述讨论的方法中，信念集中的所有信念都被平等对待，因为它们都被视为独立的信念。然而，由于逻辑闭包，信念集包含许多并不值得认真对待的元素。因此，假设信念集包含句子 p，即“莎士比亚写了《哈姆雷特》”。由于逻辑闭包，它还包含句子 p∨q，即“要么莎士比亚写了《哈姆雷特》，要么查尔斯·狄更斯写了《哈姆雷特》”。后一句是一个“纯粹的逻辑结果”，它本身没有独立的地位。

信念基础被引入以捕捉人类信念结构的这一特征。信念基础是一组句子，不是（除非作为极限情况）在逻辑推论下封闭的。它的元素代表独立于任何其他信念或信念集的信念。信念集中不在信念基础中的元素是“纯粹派生”的，即它们没有独立的地位。通过使用信念基础的模型，可以说在自然语言信念推理方面实现了一定程度的亲和性，而在使用信念集作为信念表示的模型（如 AGM）中似乎无法实现这种亲和性。（在使用超内涵逻辑的模型中可以获得更高程度的自然语言亲和性；参见 Berto 2019。）

在信念基础模型中，更改是在不具有逻辑封闭性的信念基础上进行的。其基本直觉是纯粹派生的信念不值得为了它们自身而保留。如果其中一个派生信念失去了在基本信念中的支持，那么它将被自动丢弃。

对于每个信念基础 A，存在一个信念集合 Cn(A)，表示根据 A 所持有的信念。另一方面，同一个信念集合可以由不同的信念基础表示。从这个意义上讲，信念基础比信念集合具有更强的表达能力。例如，两个信念基础{p,q}和{p,p↔q}具有相同的逻辑闭包。因此，它们在静态上是等价的，表示相同的信念。另一方面，下面的例子表明它们在动态上并不等价，即在变化操作下的行为方式相同。它们可以被视为持有相同信念的不同方式。

让 p 表示自由党将支持对钢铁行业进行补贴的提案，让 q 表示自由党议员 Smith 女士将投票支持该提案。

Abe 拥有基本信念 p 和 q，而 Bob 拥有基本信念 p 和 p↔q。因此，他们关于 p 和 q 的信念（在信念集合层面上）是相同的。

亚伯和鲍勃都接收并接受了 p 是错误的信息，并且他们都修正了他们的信念状态，将新的信念¬p 包括在内。之后，亚伯拥有基本信念¬p 和 q，而鲍勃拥有基本信念¬p 和 p↔q。现在，他们的信念集不再相同。亚伯相信 q，而鲍勃相信¬q。

（在信念集模型中，这类情况通过假设亚伯和鲍勃的信念状态由相同的信念集表示，但这个信念集在两种情况下与不同的选择机制相关联来处理。亚伯有一个选择机制，优先考虑 q 而不是 p↔q，而鲍勃的选择机制则相反。）

在逻辑学中只有一个不一致的信念集（逻辑上封闭的不一致集），即整个语言。另一方面，在任何非平凡的逻辑中，存在许多不同的不一致的信念基础。因此，信念基础使得能够区分不同的不一致的信念状态。

在信念修正理论中，人们普遍认为信念集对应于一种连贯主义认识论，而信念基础则代表着基础主义。然而，一个逻辑上封闭集合的元素之间的逻辑关系并不能充分代表认识的连贯性。尽管连贯主义者通常声称所有信念都对其他信念的证明有贡献，但他们并不是指这仅适用于仅仅是派生信念的情况，比如“巴黎或罗马是法国的首都”，这个信念只是因为相信巴黎是法国的首都而相信的。因此，对信念基础的操作和对信念集的操作之间的区别不应等同于基础主义和连贯主义之间的区别。

### 5.2 信念基础的收缩

部分满足收缩，如第 2.1 节所定义，同样适用于信念基础。请注意，A⊥p 是 A 的不含 p 的最大子集的集合；仅仅不包含 p 是不够的。因此，

{p,p&q,p∨q,p↔q}⊥p={{p∨q},{p↔q}}.

针对信念集的部分满足收缩的大多数基本假设也适用于信念基础。然而，对于信念基础的部分满足收缩，恢复性质不成立。这可以从以下示例中看出（该示例来自 Isaac Levi（2004），他将其用于其他目的）：

让信念集 K 包括对硬币被抛掷（c）和硬币正面朝上（h）的信念。认知主体希望考虑在假设硬币被抛掷的情况下，它是否会正面朝上。为了做到这一点，从信念集中移除 c 然后重新插入它似乎是合理的，即执行一系列操作 K÷c+c。

(1) 如果在信念集上直接进行部分满足收缩，那么根据恢复原则，可以得出 h∈K÷c+c，即 h 与 c 一起回来。这与合理的直觉相矛盾。

(2) 如果在 K 的信念基础上进行部分满足收缩，那么可以避免恢复。让信念基础为{p1,…,pn,c,h}，其中背景信念 p1,…,pn 与 c 和 h 无关，而 h 在逻辑上蕴含 c。那么 K=Cn({p1,…,pn,c,h})。由于 h 蕴含 c，当移除 c 时，h 将被排除，所以 K÷c=Cn({p1,…,pn})。当重新插入 c 时，结果是(K÷c)+c=Cn({p1,…,pn,c})，不包含 h，正如所期望的。

对于信念基础上的部分满足收缩，已经得到了以下表示定理（Hansson 1999）。如果一个操作÷是集合 A 的部分满足收缩，那么它必须满足以下四个公理：

 成功：
如果 p∉Cn(∅)，那么 p∉Cn(A÷p)。

 包含关系：
A÷p⊆A

 相关性：
如果 q∈A 且 q∉A÷p，则存在一个集合 A′，使得 A÷p⊆A′⊆A 且 p∉Cn(A′)但 p∈Cn(A′∪{q})。

 一致性：
如果对于 A 的所有子集 A'，当且仅当 p∈Cn(A')时 q∈Cn(A')成立，则 A÷p=A÷q。

相关性公理与信念集合的恢复原则具有相似的功能，即防止不必要的信念损失。

在核心收缩的名义下，提出了一种替代的信念基础收缩方法。对于任意句子 p，p-核心是一个最小的 p 蕴含集合，即一个蕴含 p 但没有蕴含 p 的真子集。收缩操作÷可以基于一个简单的原则，即不应该在 A÷p 中包含任何 p-核心。这可以通过一个切割函数来实现，该函数从每个 p-核心中选择至少一个元素进行移除。通过一个切割函数选择进行移除的元素恰好是那些被选择的元素的操作被称为核心收缩。事实证明，信念基础上的所有部分满足收缩都是核心收缩，但是一些核心收缩不是部分满足收缩。换句话说，核心收缩是部分满足收缩的一种推广。

### 5.3 信念基础修正

为了确保结果是逻辑封闭的，构建了信念集合的扩展操作 K+p=Cn(K∪{p})。但是对于信念基础来说，这是不可取的，因此信念基础上的扩展必须与信念集合上的扩展不同。对于任意信念基础 A 和句子 p，A+′p，即通过 p 对 A 进行（非封闭的）扩展，是集合 A∪{p}。

就像对于信念集的相应操作一样，对于信念基础的修正操作可以由两个子操作构建而成：通过 p 的扩展和通过¬p 的收缩。根据 Levi 恒等式，(A∗p=(A÷¬p)+′p)，应该首先进行收缩子操作。或者，两个子操作可以按相反的顺序进行，A∗p=(A+′p)÷¬p。这种后一种可能性对于信念集来说是不存在的。如果 K∪{p}是不一致的，那么 K+p 总是相同的，即与整个语言相同，与 K 和 p 的身份无关，因此所有的区别都消失了。对于信念基础，不存在这种限制，因此有两种不同的方式可以通过收缩和扩展来进行修正：

 内部修正：
A∗p=(A÷¬p)+′p

 外部修正：
A∗p=(A+′p)÷¬p

直观上，通过 p 进行的外部修正是在一个中间的不一致状态下进行的修正，其中 p 和¬p 都被认为是真实的，而内部修正则在一个中间的非承诺状态下进行，其中既不相信 p 也不相信¬p。外部修正和内部修正在逻辑属性上有所不同，它们都不能被归入对方之下。

### 5.4 信念基础与信念集之间的联系

对于一个信念基础的收缩会导致其对应的信念集的收缩。设 A 是一个信念基础，K=Cn(A)是其对应的信念集。此外，设−是 A 上的一个收缩。它会导致基于基础的收缩操作÷在 K 上的生成，使得对于所有的句子 p：K÷p=Cn(A−p)。基于基础的收缩已经被公理化地表征出来。对于一个一致的信念集 K，如果一个操作÷是由 K 的某个有限基础上的部分 meet 收缩操作生成的，那么它仅当满足以下八个公理时才成立：

 闭包性：
K÷p=Cn(K÷p)

 成功：
如果 p∉Cn(∅)，那么 p∉Cn(K÷p)。

 包含：
K÷p⊆K

 空虚：
如果 p∉Cn(K)，那么 K÷p=K。

 Extensionality（外延性）：
如果 p↔q∈Cn(∅)，那么 K÷p=K÷q。

 有限性：
存在一个有限集合 X，对于每个句子 p，K÷p=Cn(X′)对于某个 X′⊆X。

 对称性：
如果对于所有的 r，当 K÷r⊢p 当且仅当 K÷r⊢q 成立，那么 K÷p=K÷q。

 保守性：
如果 K÷q 不是 K÷p 的子集，那么存在某个 r 使得 K÷p⊆K÷r⊬p 且 K÷r∪K÷q⊢p。

信念集合的修正操作可以像收缩操作一样在相同意义上进行基础生成。

## 6. 其他操作

AGM 框架已经以许多方式进行了扩展。其中一些扩展引入了除了 AGM 的三种标准类型（收缩、扩展和修正）之外的新类型操作。

### 6.1 更新

有两种原因，使认识论主体希望向信念集中添加新信息。一种是她收到了关于世界的新信息，另一种是世界发生了变化。通常将“修正”一词保留给第一种类型，并使用“更新”一词表示第二种类型。更新的逻辑与修正的逻辑不同。可以从以下示例中看出：

首先，主体知道桌子上要么有一本书（p），要么有一本杂志（q），但不能同时存在。

情况 1：代理人被告知桌子上有一本书。她得出结论桌子上没有杂志。这是修正。

情况 2：代理人被告知在第一条信息给出后，桌子上放了一本书。在这种情况下，她不应该得出桌子上没有杂志的结论。这是更新。

一种有用的更新方法是给句子分配时间索引，正如 Katsuno 和 Mendelzon（1992）所提出的。然后，信念集不再由句子 p 组成，而是由句子 p 和时间点 t1 的对⟨p,t1⟩组成，表示 p 在 t1 时刻成立。在书和杂志的例子中，让 t1 表示第一条陈述所指的时间点，t2 表示情况 2 中给出第二条信息的时刻。原始信念集包含了对⟨¬(p↔q),t1⟩的配对。（¬(p↔q)是 p 和 q 的互斥析取。）通过 p 的修正可以通过合并⟨p,t1⟩来表示，通过 p 的更新可以通过合并⟨p,t2⟩到信念集中来表示。很自然地，修正后的信念集暗示了⟨¬q,t1⟩，但更新后的信念集没有。

### 6.2 合并

如果一个信念基础是不一致的，那么通过移除足够多的可有可无的元素，它可以变得一致。这个操作被称为合并。信念基础 A 的合并表示为 A!。执行合并的一种可行方式是通过 falsum（矛盾）进行收缩，即 A! = A÷⊥。

不幸的是，这种用于不一致信念集的合并方法没有一个可行的对应物。原因是由于信念修正在经典逻辑内进行，只有一个不一致的信念集。一旦获得了一个不一致的信念集，所有的区别都已经丢失，合并无法恢复它们。

### 6.3 半修正

非优先信念变化是指接收新信息并将其与旧信息进行权衡的过程，新信息由于其新颖性而没有特殊优先级。以这种方式操作的（修改后的）修正操作称为半修正。用句子 p 对 K 进行半修正可以表示为 K?p。只有当句子 p 与先前的信念相矛盾的原始信念具有更多认识价值时，才接受该句子 p。在这种情况下，删除足够多的先前句子使得结果集一致。否则，输入本身被拒绝。

构建信念基础 A 上的半修正的一种方法是将其分为两个子操作：

1. 通过 p 来扩展 A。
2. 放弃 p 或一些原始信念之一来恢复一致性。

这相当于通过扩展和巩固来定义半修正。

A?p=(A+′p)!

这个等式不能用于信念集。由于所有不一致的信念集是相同的，一个操作?使得 K?p=(K+p)!将具有极不可信的特性，即如果¬p1∈K1 和¬p2∈K2，则 K1?p1=K2?p2。然而，已经提出了其他对信念集进行半修正的方法，特别是以下两步过程：

1. 决定是否接受或拒绝输入的 p。
2. 如果 p 被接受，通过 p 进行修正。

应用这个方法的一种简单方式是 David Makinson（1997）的筛选修正，其中有一个潜在核心信念集合 X，它对修正是免疫的。如果 p 与实际核心信念集合 X∩K 一致，那么应该通过输入句子 p 来修正信念集合 K，否则不修正。筛选修正的第二步是通过 p 对 K 进行修正，但限制条件是不允许移除 X∩K 的任何元素。

同样的方法的另一种变体被称为可信度有限修正。它基于这样的假设：有些输入被接受，而其他输入则不被接受。被接受的输入构成可信句子集合 C。如果 p∈C，那么 K?p=K∗p。否则，K?p=K。这个构造可以通过选择修正操作并为集合 C 分配属性来进一步具体化。已经研究了多种这样的构造（Hansson 等，2001）。

### 6.4 选择性修正

选择性修正是半修正的一种推广。在半修正中，输入信息要么被拒绝，要么被完全接受。在选择性修正中，只有部分输入信息可能被接受。选择性修正的操作∘可以由标准修正操作∗和从句子到句子的转换函数 f 构造而成：

K∘p=K∗f(p)

在预期的情况下，f(p)不包含任何不包含在 p 中的信息。如果 f(p)是 p 的逻辑推论，这是确保的。通过对 f 添加进一步的条件，可以获得选择修正操作的各种附加属性。

### 6.5 隔离收缩

收缩的成功公设要求所有非重言信念都是可撤销的。这不是一个完全现实的要求，因为已知实际代理人具有非逻辑性质的信念，没有任何东西能使他们放弃这些信念。在隔离收缩中，一些非重言信念无法放弃；它们被收缩所隔离。隔离收缩可以基于普通的收缩÷和可撤销句子集合 R。如果 p∈R，则 K−p=K÷p。否则，K−p=K。

这种结构可以通过对 R 的结构添加各种要求来进一步具体化。已经证明了屏蔽收缩和半修正之间存在密切联系。（Fermé和 Hansson 2001）

### 6.6 替换

替换是指在信念集中用另一个句子替换一个句子的操作。它是一个具有两个变量的操作，使得[p/q]将 p 替换为 q。因此，K[p/q]是一个包含 q 但不包含 p 的信念集。

替换旨在删除句子 p 并添加句子 q。这相当于两个成功条件，p∉K[p/q]和 q∈K[p/q]。然而，这两个条件不能同时满足，没有例外。首先，与信念收缩一样，当 p 是一个重言式且不能被删除时，必须从第一个条件中例外。其次，在 q 逻辑蕴含 p 的情况下，这两个条件是不兼容的。可以通过将收缩的成功公设中的例外从 p∈Cn(∅)的情况扩展到 p∈Cn({q})的情况来处理这个问题。这产生了以下两个成功条件：

 收缩成功：
如果 p∉Cn({q})，那么 p∉Cn(K[p/q])。

 修正成功：
q∈K[p/q]

替换可以作为信念修正的一种“Sheffer stroke”，即作为其他操作可以定义的操作。通过 p 的收缩可以定义为 K[p/⊤]，通过 p 的修正可以定义为 K[⊥/p]，其中 ⊥ 为假命题，而 ⊤ 为真命题。只要将无法执行的去除真命题 ⊤ 的子操作视为一个空子操作，通过 p 的扩展可以定义为 K[⊤/p]。

### 6.7 合并

如果信念集合 K 具有有限的基础，则可以用一个单一的句子来表示，即其基础的所有元素的合取 k。这意味着通过句子 p 对信念集合 K 进行修正 K∗p 可以被替换为通过另一个句子对句子进行修正 k∗p。如果这个修正是非优先的，我们可以将 k 和 p 视为相等，即 k∗p=p∗k。这样的操作可以被描述为两个信念表示的合并。它可以通过选择性地组合来自两个代理人或来源的信息来表示冲突解决的过程。这个操作也可以推广到合并多个元素，表示努力将来自多个代理人或来源的信息组合在一起（Konieczny 和 Pino Pérez 2011）。

### 6.8 多重收缩和修正

多重收缩是指同时收缩多个句子。同样，多重修正是通过多个句子进行修正。

多重收缩有两种主要类型。在包裹收缩中，输入集合的所有元素都被撤销：它们必须放在一个包裹中。在选择收缩中，只需移除其中至少一个元素即可。因此，两种类型的多重收缩的成功条件如下：

 包裹成功：
如果 B∩Cn(∅)=∅，那么 B∩Cn(A÷B)=∅

 选择成功：
如果 B 不是 Cn(∅)的子集，则 B 不是 Cn(A÷B)的子集。

部分满足收缩和核心收缩都可以相对直接地推广到多重收缩的包和选择变体。

包修正的构建引出了否定概念的有趣扩展。将收缩操作通过 ¬p 执行为 p 的修正的子操作的原因是，只有当 p 不蕴含 ¬p 时，才能一致地将 p 添加到集合中。事实证明，在满足紧致性的逻辑中，如果另一个集合不蕴含集合 ¬B 的任何元素，则可以一致地将集合 B 添加到另一个集合中，该集合定义如下：

 集合的否定：
p∈¬B 当且仅当 p 是 B∪{⊤}的元素的否定或者是 B∪{⊤}的元素的否定的析取。

因此，通过广义的 Levi 恒等式，可以从（包裹）多个收缩和扩张定义多个修正：

K∗B=(K÷¬B)+B

大多数与 AGM 相关的主要收缩操作已经推广到多个收缩操作：多个部分满足收缩（Hansson 1989，Fuhrmann 和 Hansson 1994，Li 1998），多个核心收缩（Fermé等人 2003），多个指定满足收缩（Hansson 2010）以及 Grove 球系统的多个版本（Reis 和 Fermé 2011，Fermé和 Reis 2012）。

### 6.9 不确定性信念变化

大多数信念变化模型在某种意义上是确定性的，即给定一个信念集合和一个输入，得到的信念集合是确定的。在选择新的信念集合时没有机会的余地。显然，这不是一个现实的特征，但它使模型更简单、更容易处理，尤其是从计算的角度来看。在不确定性信念变化中，将指定的信念集合置于指定的输入之下会有多个可接受的结果。

不确定性操作可以构建为确定性操作的集合。因此，给定三个修订操作∗, ∗′和∗′′，集合{∗, ∗′, ∗′′}可以用作不确定性操作。成功条件简单地是：

K{∗, ∗′, ∗′′}p∈{K∗p, K∗′p, K∗′′p}

Lindström 和 Rabinowicz（1991）通过放弃认知根深蒂固满足连通性的假设来构建不确定性收缩。这导致了 Grove 的“回退”球系统，这些系统没有线性排序，但仍然包括原始信念集。Fazio 和 Baldi（2021）在研究与 AGM 模型和一些密切相关的信念变化模型的代数对应物时使用了不确定性收缩。

### 6.10 对扩展语言的操作

信念修正理论几乎完全是在经典命题（真值功能）逻辑的框架内发展起来的。将非真值功能表达式纳入语言中会产生有趣且显著的影响。特别是对条件句而言如此。

许多类型的条件句，例如反事实条件句，无法用真值功能蕴涵（物质蕴涵）充分表达。已经提出了几种条件句的形式解释。其中之一，即拉姆齐测试，特别适用于信念修正的形式框架。它基于 F. P. Ramsey 的建议，由 Robert Stalnaker 和其他人进一步发展（Stalnaker 1968）。基本思想是，“如果 p，则 q”被认为是被相信的，当且仅当在通过 p 修正当前信念状态之后，q 将被相信。让 p⇒q 表示“如果 p，则 q”，或更准确地说：“如果 p 是事实，那么 q 将是事实”。为了将条件陈述与关于实际事实的陈述平等对待，它们将被包括在信念集中，如下所示：

 Ramsey 测试：
如果且仅如果 q∈K∗p，则(p⇒q)∈K。

然而，满足 Ramsey 测试的条件句的信念集合中的包含将需要信念修正逻辑的根本变化。作为其中一个例子，缩减操作不能满足包含原则(K÷p⊆K)。原因在于，缩减操作通常为原始信念状态不支持的条件句提供支持。可以从以下示例中看出：

如果我放弃我对约翰智力低下的信念，那么我就支持这个条件句：“如果约翰在伦敦生活了 30 年，那么约翰懂英语。”

彼得·格登福斯（1986 年，1987 年）的一项著名的不可能性定理表明，拉姆齐测试与修正的一组合理的假设不相容。对于这个不可能性定理，已经提出了几种解决方案。其中一种选择是拒绝将拉姆齐测试作为条件句有效性的标准（罗特 1986 年）。另一种选择是由艾萨克·莱维提出的，即接受该测试作为有效性的标准，但否认当这些条件句有效时应将其包括在信念集中（莱维 1988 年，阿尔洛-科斯塔 1995 年，阿尔洛-科斯塔和莱维 1996 年）。还提出了几种其他建议。然而，可以公正地说，尚未构建出被普遍认可能够充分处理条件句或情态句的 AGM 风格信念变化操作。

### 6.11 有限资源的信念变化

AGM 模型和大多数相关的信念变化模型假设具有无限认知能力的高度理想化的推理者。Harman（1986）为资源有限的认知代理人制定了一套合理性原则。Wassermann（1999）、Alechina（2006）、Doyle（2013）等人为具有有限认知能力的代理人开发了信念变化模型。有限信念基础的使用（第 5 节）可以看作是避免在 AGM 中标准的无限信念集上进行操作的一种方式。对无限集合的操作可能需要无限的资源，这使得对有限资源的代理人来说这样的操作是不可能的。

### 6.12 信念强度的变化

变化操作可以提高或降低一个句子在排序中的位置，而不影响信念集（但会影响信念状态对新输入的响应）。改进操作，如 Konieczny 和 Pérez（2008）提出的，通过将一些 p-世界移到更高的位置来增加非信念句子 p 的合理性。即使这种变化不会导致 p 成为信念，它在后续的其他操作中被接受可能会更容易。

一种变化操作可以被构建成调整输入句子在排序中的位置，使其与参考句子的位置相同。这意味着在输入中必须指定两个句子：要移动的（输入）句子和指示其新位置的（参考）句子。Hans Rott（2007 年，其他互联网资源）将这样的操作符称为二维的。John Cantwell（1997 年）将它们分类为升高或降低，取决于变化的方向。（另请参见 Fermé和 Rott 2004 和 Rott 2009。）

### 6.13 规范和偏好的变化

规范的变化和信念的变化之间存在密切的相似之处。为了将具有冲突规范的规范系统应用于特定情况，可能需要忽略其中一些规范。如何在冲突规范之间进行优先排序的问题类似于在信念收缩中选择要删除的句子（Hansson 和 Makinson 1997）。事实上，AGM 模型在某种程度上是试图形式化规范变化而不是信念变化的结果之一（Alchourrón 和 Makinson 1981）。尽管如此，将 AGM 模型应用于规范的作者发现它需要进行相当大的修改才能适用于该目的。因此，在他们的立法变化模型中，Governatori 和 Rotolo（2010）引入了时间的显式表示，以解释诸如追溯性等现象。

通过用形式为 p≥q（“p 至少与 q 一样好”）及其真值组合的句子替换标准 AGM 语言，可以得到偏好变化模型。然后，采用新偏好可以采用通过此类偏好句子进行修正的形式。可以使用部分满足收缩，但在应用于偏好时似乎需要对 AGM 模型进行一些修改（Hansson 1995，Lang 和 van der Torre 2008，Grüne-Yanoff 和 Hansson 2009）。

## 7. 迭代变化

前面的章节只涉及同一个信念集或信念基础的变化。这显然是一个严重的限制。信念变化的现实模型应该允许重复（迭代）变化，例如 K÷p÷q∗r∗s÷t…换句话说，需要能够通过任何句子对任何信念集（信念基础）进行收缩或修正的操作。这样的操作被称为全局操作，与仅针对单个指定集合定义的局部操作相对。

获得部分 meet contraction 的全局操作的一种明显方法是对所有要收缩的集合使用相同的选择函数。然而，通过从选择函数获得部分 meet contraction 的标准方式，这是不可能的，因为选择函数处理空集的方式。传统上定义选择函数的方式是，如果 A⊥p=∅，那么γ(A⊥p)={A}。由此可知，如果γ是 A 的选择函数，并且 A≠B，则γ不是 B 的选择函数。假设 A⊥p=B⊥p=∅。为了使γ成为一个函数，必须满足γ(A⊥p)=γ(B⊥p)。为了使γ成为 A 的选择函数，必须满足γ(A⊥p)={A}，为了使γ成为 B 的选择函数，必须满足γ(B⊥p)={B}。由于 A≠B，这是不可能的。

如果我们将部分 meet contraction 的定义改写如下，这个问题就可以解决：

*部分 meet contraction 的替代定义：*

(1′) γ(K⊥p)⊆K⊥p，而且如果 K⊥p≠∅，那么γ(K⊥p)≠∅。

(2′) K÷p=⋂γ(K⊥p)，除非γ(K⊥p)=∅，在这种情况下 K÷p=K。

将其应用于单个信念集 K，这个定义与原始定义等价。值得注意的是，即使在 p 是一个重言式的极限情况下，它也产生与原始定义相同的结果，但它避免在这种极限情况下使用选择函数。通过这个稍微调整过的定义，可以为所有的信念集使用同一个选择函数，因此我们可以只使用一个 AGM 风格的选择函数来构建迭代变化。由于通过 Levi 恒等式可以从部分 meet 收缩定义部分 meet 修正，这意味着我们对于收缩和修正都有全局操作。这个构造是如此通用，以至于它不会对收缩或修正施加任何新的属性，即除了通常的 AGM 公设之外没有其他属性（Hansson 2012）。

然而，关于迭代变化的大部分讨论都基于这样一个假设，即这些附加属性是可信的，而且确实是可取的。所谓的 Darwiche-Pearl 修正公理在这些讨论中起着核心作用（Darwiche 和 Pearl 1997 年）：

> 如果 q⊢p，则(K∗p)∗q=K∗q。（DP1）
>
> 如果 q⊢¬p，则(K∗p)∗q=K∗q。（DP2）
>
> 如果 K∗q⊢p，则 (K∗p)∗q⊢p。（DP3）
>
> 如果 K∗q ⊬ ¬p，则 (K∗p)∗q ⊬ ¬p（DP4）

Darwiche-Pearl 公设表达了关于可能世界认知排序的直觉，即当我们通过一个句子 p 进行修正时，p-世界之间的排序应保持不变，否定 p-世界之间的排序也应保持不变。这种变化采取的形式是原始世界排序的这两部分相对位置的移动。关于这种移动的提议有很多，但对这些提议的适当性意见不一。

Abhaya Nayak（1994）提出了一个迭代信念变化模型，其中信念状态和输入都是满足标准巩固假设的二元关系，除了最小性。这种类型的输入可以被看作是信念状态的“片段”，要被合并到先前的信念状态中。同样地，Eduardo Fermé和 Hans Rott（2004）研究了更一般形式的输入的信念修正：“以至少与 p 的可信度相等的程度接受 q”。他们称之为比较修正。信念状态由巩固排序表示。因此，从一个巩固排序≤和这样一个广义输入中获得一个新的巩固排序≤'，其中包含构建新的信念集所需的信息。

## 8. 替代解释

尽管 AGM 模型及其近似变体占据主导地位，但还是有几个其他形式的信念变化的形式模型被提出。

### 8.1 学习理论

在信念修正理论中，重点是一致性而不是真实性。相比之下，学习理论致力于归纳和获得真实的信念。一个研究问题被表示为可能世界集合的一个划分，即将所有可能的世界划分为不重叠的集合。当已知这些划分中包含实际世界的哪一个时，研究问题已经得到完全回答。代理接收到的信息逐渐缩小可能包含它的划分集合。核心问题是如何构建归纳策略，即确定要进行的调查以及顺序，并如何解释它们（Kelly 1999）。尽管这个问题与信念修正有关，但不满足标准 AGM 公设的操作通常在讨论中起着重要作用（Genin 和 Kelly 2019）。

### 8.2 信念变化的动态逻辑学

动态信念逻辑（DDL）是由 Krister Segerberg 引入的，用于表示一个对外部世界持有意见并在接收到新信息后改变这些意见的代理人。DDL 使用了 Hintikka（1962）引入的认知模态运算符。句子 Bip 表示个体 i 相信 p。当只考虑一个代理人时，下标可以删除，运算符 B 可以读作“被相信”或“代理人相信”（Segerberg 1995，第 536 页）。

DDL 中的公式 Bp 与 AGM 中的 p∈K 表达式不同，它是与 p 相同语言的句子。这使得在目标语言中可以表达一个句子被相信的情况。通过这种方式，Segerberg 试图将信念修正“作为普通 Hintikka 类型信念逻辑的一般化”，而与之相反，“AGM 实际上不是逻辑；它是关于理论的理论”（Segerberg 1999，第 136 页）。在 DDL 框架中，可以表达关于信念的信念。句子“i 相信 i 不相信 p”可以表示为 Bi¬Bip，而在 AGM 框架中无法表达它（（p∉Ki）∈Ki 不是一个良构公式）。

在 DDL 中，信念修正操作（扩展、修订和收缩）使用动态模态运算符来表示，类似于用于程序执行的运算符（这个 DDL 的元素也存在于之前几位作者的出版物中。参见 Fuhrmann 1991；de Rijke 1994；van Benthem 1989 和 1995）。Segerberg 使用了以下符号表示：

| [÷p]q | （在由 p 进行收缩后，q 成立） |
| -------- | ------------------------------- |
| [∗p]q | （在由 p 进行修正后，q 成立） |
| [+p]q  | （在由 p 进行扩展后，q 成立） |

这两个元素的组合，即信念运算符和动态运算符，导致了一个与 AGM 在重要方面不同的框架。（Leitgeb 和 Segerberg 2007，169）

在动态认知逻辑（Dynamic Epistemic Logic，DEL）的名称下，已经开发出了类似的系统（Plaza 1989；Baltag 等人 1998；van Ditmarsch 等人 2007；参见关于动态认知逻辑的条目）。DDL 和 DEL 之间的一个主要区别是，后者主要在多智体环境中进行研究。最常研究的动态是对某个句子的公开公告（van Ditmarsch 等人 2007）。

### 8.3 描述符修正

描述符修正（Hansson 2017）基于两个主要的形式结构。其中之一是应用于客体语言句子的元语言信念谓词 B。Bp 表示句子 p 被相信，¬Bp 表示句子 p 不被相信，Bp∨Bq 表示 p 或 q 被相信。这些句子可以用来表达信念变化操作的成功条件。因此，Bp 是通过 p 修订的成功条件，¬Bp 是通过 p 收缩的成功条件，{¬Bp,¬Bq}是通过{p,q}多重收缩的成功条件。由于描述符的多功能性，我们只需要一个操作，表示为∘。因此，K∘Bp 表示通过 p 修订，K∘¬Bp 表示通过 p 收缩。

另一个主要的形式结构是一个直接作用于操作的潜在结果集的选择函数（选择函数）。因此，操作 K∘Bp 通过选择包含 p 的潜在信念集之一来执行（可能是最值得选择的，或者最接近的）。基于这些原则的操作已经被公理化地表征出来。值得注意的是，在 AGM 框架中引发问题的恢复假设在描述符修正框架中不成立。将选择函数应用于潜在信念结果比将其应用于可能世界或剩余部分更具可信性，因为后两者在逻辑上是无限的（如果语言是如此），因此在认知上是无法访问的。

描述符修正使得更一般地研究变化操作成为可能，并讨论可以适用于具有不同类型成功条件的操作的属性。设Ψ和Ξ为描述符，即包含 B 运算符的句子集合。设 K⊩Ψ表示 K 满足Ψ中的所有条件。描述符修正的这些一般属性的一些例子是：

 闭包：
K∘Ψ=Cn(K∘Ψ)

 相对成功：
 K∘Ψ⊩Ψ或 K∘Ψ=K

 规律性：
如果 K∘Ξ⊩Ψ，则 K∘Ψ⊩Ψ

 确认：
如果 K⊩Ψ，则 K∘Ψ=K）

 累积性：
如果 K∘Ψ⊩Ξ，则 K∘Ψ=K∘(Ψ∪Ξ)

### 8.4 贝叶斯模型

AGM 模型和其他用于信念修正的逻辑框架基于一种二分法的信念方法：要么相信某事，要么不相信，无论哪种情况都没有任何程度的差异。信念可以更容易地放弃，非信念可以更容易地转化为信念，但相信的行为本身不允许有程度的差异。相反，概率信念模型通常基于某种形式的主观贝叶斯主义，允许在最强的信念和最强的不信任之间存在所有程度的差异。二分法和概率模型代表了信念系统的不同特征。构建一个合理可管理的模型，既涵盖了与逻辑相关的信念属性，又涵盖了概率属性，已被证明是困难的。这些困难与彩票和序言悖论密切相关（Kyburg 1961; Makinson 1965）。

然而，信念修正理论在处理具有概率为零条件的条件概率的问题限制情况中被证明是有用的。信念修正理论的洞见已被用于构建非标准的概率模型，在这些模型中，条件化也可以在这种限制情况下进行（Makinson 2011）。

## Bibliography

Citations annotated in smaller text refer to books or articles that are recommended for further introductory reading.

* Alchourrón, C.E., P. Gärdenfors, and D. Makinson, 1985, “On the Logic of Theory Change: Partial Meet Contraction and Revision Functions”, *Journal of Symbolic Logic*, 50: 510–530.  
     [The starting-point for all subsequent studies of belief revision.]
* Alchourrón, C.E. and D. Makinson, 1981, “Hierarchies of Regulation and Their Logic”, in R. Hilpinen (ed.), *New Studies in Deontic Logic*, Dordrecht: D. Reidel Publishing Company, pp. 125–148.
* Alchourrón, C.E. and D. Makinson, 1982, “On the logic of theory change: Contraction functions and their associated revision functions”, *Theoria*, 48: 14–37.
* Alechina, N., M. Jago, and B. Logan, 2006, “Resource-bounded belief revision and contraction”, *Lecture Notes in Computer Science*, 3904: 141–154.
* Arló-Costa, H., 1995, “Epistemic conditionals, snakes and stars”, in G. Crocco, L. Fariñas del Cerro, and A. Herzig (eds.), *Conditionals: from Philosophy to Computer Science*, *Studies in Logic and Computation* (Volume 5), Oxford: Oxford University Press.
* Arló-Costa, H. and I. Levi, 1996, “Two notions of epistemic validity”, *Synthese*, 109: 217–262.
* Baltag, A., Moss, L., and Solecki, S., 1998, “The logic of public announcements, common knowledge, and private suspicions”, in I. Gilboa (ed.), *Proceedings of the 7th conference on theoretical aspects of rationality and knowledge* (TARK ’98), San Francisco: Morgan Kaufmann, pp. 43–56.
* Berto, F., 2019, “Simple hyperintensional belief revision”, *Erkenntnis*, 84: 559–575.
* Cantwell, J., 1997, “On the logic of small changes in hypertheories”, *Theoria*, 63: 54–89.
* –––, 1999, “Some logics of iterated revision”, *Studia Logica*, 7: 49–84.  
     [Iterated revision.]
* Darwiche, A. and J. Pearl, 1997, “On the logic of iterated belief revision”, *Artificial Intelligence*, 89: 1–29.
* de Rijke, M., 1994, “Meeting some neighbours”, in J. van Eijck, and A. Visser (eds.) *Logic and information flow*, Cambridge, MA: MIT Press, pp. 170–195.
* Doyle, J., 1979, “A Truth Maintenance System”, *Artificial Intelligence*, 12: 231–272.
* –––, 2013, “Mechanics and mental change”. In B.O. Küppers et al. (eds) *Evolution of Semantic Systems*, pp. 127–150. Springer: Cham.
* Fagin, R., J.D. Ullman, and M.Y. Vardi, 1983, “On the semantics of updates in databases”, *Proceedings of Second ACM SIGACT-SIGMOD*, pp. 352-365.
* Fazio, D. and M. Pra Baldi, 2021, “On a logico-algebraic approach to AGM belief contraction theory”, *Journal of Philosophical Logic*, 50: 911–938.
* Fermé, E. and S.O. Hansson, 2001, “Shielded Contraction”, pp. 85–107 in H. Rott and M.-A. Williams (eds.), *Frontiers of Belief Revision*, Dordrecht: Kluwer.
* –––, 2018, *Belief Change. Introduction and Overview*, Springer: Cham.  
     [Overview of results from studies of belief revision in the AGM tradition and related approaches.]
* Fermé, E. and M.D.L. Reis, 2012, “System of Spheres-based Multiple Contractions”, *Journal of Philosophical Logic*, 41: 29–52.
* Fermé, E. and H. Rott, 2004, “Revision by comparison”, *Artificial Intelligence*, 157: 5–47.
* Fermé, E., K. Saez, and P. Sanz, 2003, “Multiple Kernel Contraction”, *Studia Logica*, 73: 183–195.
* Fuhrmann, A., 1991, “Theory contraction through base contraction”, *Journal of Philosophical Logic*, 20: 175–203.
* Fuhrmann, A. and S.O. Hansson, 1994, “A Survey of Multiple Contraction”, *Journal of Logic, Language and Information*, 3: 39–74.  
     [Multiple contraction]
* Gärdenfors, P., 1978, “Conditionals and Changes of Belief”, *Acta Philosophica Fennica*, 30: 381–404.
* –––, 1981, “An Epistemic Approach to Conditionals”, *American Philosophical Quarterly*, 18: 203–211.
* –––, 1986, “Belief Revision and the Ramsey Test for Conditionals”, *Philosophical Review*, 95: 81–93.  
     [The Ramsey Test.]
* –––, 1987, “Variations on the Ramsey Test: More triviality results”, *Studia Logica*, 46: 319–325.
* –––, 1988, *Knowledge in Flux. Modeling the Dynamics of Epistemic States*, Cambridge, MA: MIT Press.  
     [The AGM model.]
* –––, 2011, “Notes on the history of ideas behind AGM”, *Journal of Philosophical Logic*, 40: 115–120.
* Gärdenfors, P., and D. Makinson, 1988, “Revisions of Knowledge Systems Using Epistemic Entrenchment”, *Second Conference on Theoretical Aspects of Reasoning about Knowledge*, pp. 83–95.
* Genin, K. and K.T. Kelly, 2019,“Theory Choice, Theory Change, and Inductive Truth-Conduciveness”, *Studia Logica*, 107: 949–989.
* Governatori, G. and A. Rotolo, 2010, “Changing legal systems: legal abrogations and annulments in Defeasible Logic”, *Logic Journal of IGPL*, 18: 157–194.
* Grove, A., 1988, “Two Modellings for Theory Change”, *Journal of Philosophical Logic*, 17: 157–170.  
     [The propositional model of belief change.]
* Grüne-Yanoff, T. and S.O. Hansson, 2009, “From Belief Revision to Preference Change”, in T. Grüne-Yanoff and S.O. Hansson (eds.), *Preference Change: Approaches from Philosophy, Economics and Psychology*, Berlin: Springer, pp. 159–184.
* Hansson, S.O., 1989, “New Operators for Theory Change”, *Theoria*, 55: 114–132.
* –––, 1995, “Changes in Preference”, *Theory and Decision*, 38: 1–28.
* –––, 1999, *A Textbook of Belief Dynamics. Theory Change and Database Updating*, Dordrecht: Kluwer.  
     [Contains more details, and references, on most of the topics treated in this entry.]
* –––, 2003, “Ten Philosophical Problems in Belief Revision”, *Journal of Logic and Computation*, 13: 37–49.  
     [Connections between belief revision and issues in informal philosophy.]
* –––, 2010, “Multiple and Iterated Contraction Reduced to Single-Step Single-Sentence Contraction”, *Synthese*, 173: 153–177.
* –––, 2012, “Global and iterated contraction and revision: An exploration of uniform and semi-uniform approaches”, *Journal of Philosophical Logic*, 41(1): 143–172.
* –––, 2017, *Descriptor Revision* Springer: Cham. Dordrecht: Springer.
* Hansson, S.O., Fermé, E., Cantwell, J., and Falappa, M., 2001, “Credibility-Limited Revision”, *Journal of Symbolic Logic*, 66: 1581–1596.  
     [Non-prioritized belief revision.]
* Hansson, S.O. and D. Makinson, 1997, “Applying Normative rules with restraint”, in M.L. Dalla Chiara, *et al*. (eds.), *Logic and Scientific Method*, Dordrecht: Kluwer Academic Publishers, pp 313–332.
* Harman, G., 1986, *Change in View – Principles of Reasoning*. MIT Press.
* Harper, W., 1977, “Rational Conceptual Change”, *PSA 1976*, pp. 462–494.
* Hintikka, J., 1962, *Knowledge and belief: An introduction to the logic of the two notions*, Ithaca: Cornell University Press.
* Katsuno, H., and A.O. Mendelzon, 1992, “On the Difference between Updating a Knowledge Base and Revising it”, in P. Gärdenfors (ed.), *Belief Revision*, Cambridge: Cambridge University Press pp. 183–203
* Kelly, K.T., 1999, “Iterated belief revision, reliability, and inductive amnesia”, *Erkenntnis*, 50(1): 7–53.
* Konieczny, S. and R. P. Pérez, 2008, “Improvement Operators”, *Eleventh International Conference on Principles of Knowledge Representation and Reasoning (KR08)*, pp. 177–186.
* –––, 2011, “Logic based merging”, *Journal of Philosophical Logic*, 40(2): 239–270.
* Kyburg Jr, H.E., 1961, *Probability and the logic of rational belief*, Middletown: Wesleyan University Press.
* Lang, J. and L. van der Torre, 2008, “From Belief Change to Preference Change”, in M. Ghallab, C.D. Spyropoulos, N. Fakotakis, and N.M. Avouris (eds.), *ECAI 2008 – Proceedings of the 18th European Conference on Artificial Intelligence, Patras, Greece, July 21–25, 2008* (Frontiers in Artificial Intelligence and Applications: Volume 178), pp. 351–355.
* Leitgeb, H. and Segerberg, K., 2007, “Dynamic doxastic logic: why, how, and where to?”, *Synthese*, 155: 167–190.
* Levi, I., 1977, “Subjunctives, Dispositions and Chances”, *Synthese*, 34: 423–455.
* –––, 1980, *The Enterprise of Knowledge*, Cambridge, MA: MIT Press.
* –––, 1988, “Iteration of conditionals and the Ramsey test”, *Synthese*, 76: 49–81.
* –––, 1991, *The Fixation of Belief and Its Undoing*, Cambridge, MA: Cambridge University Press.
* –––, 2004, *Mild Contraction. Evaluating Loss of Information due to Loss of Belief*, Oxford: Clarendon Press.
* Li, J., 1998, “A Note on Partial Meet Package Contraction”, *Journal of Logic, Language and Information*, 7: 139–142.
* Lindström, S. and W. Rabinowicz, 1991, “Epistemic entrenchment with incomparabilities and relational belief revision”, in A. Fuhrmann and M. Morreau (eds.), *The Logic of Theory Change*, Berlin: Springer, pp. 93–126.
* Makinson, D., 1965, “The paradox of the preface”, *Analysis*, 25(6): 205–207.
* –––, 1997, “Screened Revision”, *Theoria*, 63 (1–2): 14–23.
* –––, 2003, “Ways of doing logic: what was new about AGM 1985”, *Journal of Logic and Computation*, 13: 5–15.
* –––, 2011, “Conditional probability in the light of qualitative belief change”, *Journal of Philosophical Logic*, 40(2): 121–153.
* Nayak, A. C., 1994, “Iterated Belief Change Based on Epistemic Entrenchment”, *Erkenntnis*, 41: 353–390.
* Plaza, J., 1989, “Logics of public communications”, in M.L. Emrich, M.S. Pfeifer, M. Hadzikadic, and Z.W. Ras (eds.) *Proceedings of the 4th international symposium on methodologies for intelligent systems*, Oak Ridge, TN: Oak Ridge National Laboratory, pp. 201–216.
* Reis, M.D.L. and E. Fermé, 2012, “Possible Worlds Semantics for Partial Meet Multiple Contraction”, *Journal of Philosophical Logic*, 41: 7–28.
* Rott, H., 1986, “Ifs, though and because”, *Erkenntnis*, 25: 345–37.
* –––, 2001, *Change, choice and inference. A study of belief revision and nonmonotonic reasoning*, Oxford: Clarendon Press.  
     [The relation between belief change and rational choice.]
* –––, 2009, “Shifting Priorities: Simple Representations for Twenty-seven Iterated Theory Change Operators”, in D. Makinson, J. Malinowski and H. Wansing (eds.), *Towards Mathematical Philosophy* (Trends in Logic: Volume 28), Berlin: Springer, pp. 269–296.
* Rott, H. and M. Pagnucco, 2000, “Severe Withdrawal (and Recovery)”, *Journal of Philosophical Logic*, 29: 501–547.
* Segerberg, K., 1995, “Belief revision from the point of view of doxastic logic”, *Logic Journal of the IGPL*, 3: 535–553.
* –––, 1999, “Two traditions in the logic of belief: bringing them together”, in H.J. Ohlbach and U. Reyle (eds.), *Logic, Language and Reasoning: essays in honour of Dov Gabbay*, Dordrecht: Kluwer Academic Publishers, pp. 135–147.
* Stalnaker, R., 1968, “A Theory of Conditionals”, in N. Rescher (ed.), *Studies in Logical Theory*, Oxford: Blackwell, pp. 98–112.
* van Benthem, J., 1989, “Semantic Parallels in Natural Language and Computation”, in H.-D. Ebbinghaus, J. Fernandez-Prida, M. Garrido, D. Lascar, and M. Rodrigues Artalejo (eds.), *Logic Colloquium ’87*, Amsterdam: North-Holland, pp. 331–375.
* –––, 1995, “Logic and the flow of information”, in *Proceedings of the 9th international congress of logic, methodology and philosophy of science*, *Studies in Logic and the Foundations of Mathematics*, 134: 693–724.
* van Ditmarsch, H., W. van Der Hoek, and B. Kooi, 2007, *Dynamic Epistemic Logic*, Dordrecht: Springer.
* Wassermann, R., 1999, “Resource bounded belief revision”, *Erkenntnis*, 50: 429–446.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-belief-revision). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-belief-revision/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-belief-revision&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/logic-belief-revision/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* Rott, H., 2007, “[Bounded Revision: Two Dimensional Belief Change Between Conservative and Moderate Revision](http://www.fil.lu.se/hommageawlodek/site/papper/RottHans.pdf)”, in T. Rønnow-Rasmussen, B. Petersson, J. Josefsson and D. Egonsson, [Hommage à Wlodek](http://www.fil.lu.se/hommageawlodek/index.htm), Philosophical Papers Dedicated to Wlodek Rabinowicz.

## Related Entries

[logic: conditionals](https://plato.stanford.edu/entries/logic-conditionals/) | [logic: dynamic epistemic](https://plato.stanford.edu/entries/dynamic-epistemic/) | [logic: non-monotonic](https://plato.stanford.edu/entries/logic-nonmonotonic/) | [reasoning: defeasible](https://plato.stanford.edu/entries/reasoning-defeasible/)

[Copyright © 2021](https://plato.stanford.edu/info.html#c) by  
[Sven Ove Hansson](http://people.kth.se/~soh/) <[*soh@kth.se*](mailto:soh%40kth%2ese)>
