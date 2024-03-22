# 行动的逻辑 logic of — see logic: action

*首次发表于2009年3月31日；实质性修订于2013年4月2日*

在本文中，我们简要介绍了哲学、语言学、计算机科学和人工智能中行动逻辑的概念。行动逻辑是对行动进行形式化研究的学科，其中形式语言是主要的分析工具。

行动的概念对许多学科都具有核心意义，包括社会科学（包括经济学）、人文科学（包括历史和文学）、心理学、语言学、法律、计算机科学、人工智能等等。在哲学中，由于其对认识论和尤其是伦理学的重要性，行动一直受到研究；而在过去几十年中，行动甚至被研究为自身的目的。但是在行动逻辑中，行动以最抽象的方式进行研究。

行动逻辑始于哲学。但它在语言学中也起到了一定的作用。目前，在计算机科学和人工智能领域，它具有重要意义。为了我们的目的，自然而然地将这些发展的账目分开。

- [1. 哲学中的行动逻辑](https://plato.stanford.edu/entries/logic-action/#LogAct) - [1.1 历史概述](https://plato.stanford.edu/entries/logic-action/#HisOve) - [1.2 stit传奇](https://plato.stanford.edu/entries/logic-action/#StiSag) - [1.3 意图](https://plato.stanford.edu/entries/logic-action/#Int) - [1.4 特殊类型行动的逻辑](https://plato.stanford.edu/entries/logic-action/#LogSpeKinAct) - [2. 语言学中的行动逻辑](https://plato.stanford.edu/entries/logic-action/#LogActLin) - [2.1 言语行为](https://plato.stanford.edu/entries/logic-action/#SpeAct) - [2.2 行动句](https://plato.stanford.edu/entries/logic-action/#ActSen) - [2.3 动态语义学](https://plato.stanford.edu/entries/logic-action/#DynSem) - [3. 计算机科学中的行动逻辑](https://plato.stanford.edu/entries/logic-action/#LogActComSci) - [3.1 关于程序的推理](https://plato.stanford.edu/entries/logic-action/#ReaAboPro) - [4. 人工智能中的行动逻辑](https://plato.stanford.edu/entries/logic-action/#LogActArtInt) - [4.1 行动的表示和推理](https://plato.stanford.edu/entries/logic-action/#RepReaAboAct) - [4.2 智能代理的描述和规范](https://plato.stanford.edu/entries/logic-action/#DesSpeIntAge) - [结论](https://plato.stanford.edu/entries/logic-action/#Con) - [参考文献](https://plato.stanford.edu/entries/logic-action/#Bib) - [学术工具](https://plato.stanford.edu/entries/logic-action/#Aca) - [其他互联网资源](https://plato.stanford.edu/entries/logic-action/#Oth) - [相关条目](https://plato.stanford.edu/entries/logic-action/#Rel)

---

## 1.哲学中的行动逻辑

### 1.1 历史概述

已经有圣安瑟姆（St. Anselm）以一种可以归类为逻辑的方式研究了行动的概念；如果他了解符号逻辑，他肯定会利用它（Henry 1967；Walton 1976）。在现代，该主题由艾伦·罗斯·安德森（Alan Ross Anderson）、弗雷德里克·B·菲奇（Frederick B. Fitch）、斯蒂格·康格（Stig Kanger）和乔治·亨利克·冯·赖特（Georg Henrik von Wright）等人引入；康格的工作由他的学生英格玛·波恩（Ingmar Pörn）和拉尔斯·林达尔（Lars Lindahl）进一步发展。第一个明确的语义解释是由布赖恩·F·切拉斯（Brian F. Chellas）在1969年提出的（有关更详细的解释，请参见Segerberg 1992或Belnap 2001中的迷你历史）。

今天，有两个相当不同的理论群体可以被描述为行动逻辑的范畴。其中之一是由纽尔·贝尔纳普（Nuel Belnap）及其众多合作者创造的“stit理论”（下一段将解释此术语）。另一个是“动态逻辑”。两者都与模态逻辑有关，但方式不同。stit理论起源于模态逻辑的哲学传统。另一方面，动态逻辑是由计算机科学家发明的，用于分析计算机行动；只有事后才意识到它可以被视为一种非常普遍的模态逻辑。两者之间的一个重要区别是，在stit理论中（大部分情况下）并不直接研究行动：本体论通常不承认行动或事件的范畴。但动态逻辑则不同。在哲学家中，这种本体论的宽容是不寻常的。赫克托-内里·卡斯塔涅达（Hector-Neri Castañeda）通过区分命题和实践提供了一个显著的例外。

本节介绍了stit传统，下一节介绍了动态逻辑。

### 1.2 stit传奇

术语“stit”是基于“sees to it that”的首字母缩写。这个想法是在普通的经典命题语言中添加一个新的命题运算符stit，stitiϕ的解释中，i代表一个代理人，ϕ代表一个命题，解释为i *sees to it that* ϕ。（Belnap学派的官方符号更繁琐：[istit:ϕ]）。注意，ϕ允许包含新运算符的嵌套。

为了为stit运算符stit开发形式化的意义条件，定义了一种语义。一个*stit框架*有四个组成部分：一个集合T，其中的节点称为时刻；一个T上的非自反树序关系<；一组代理人；和一个选择函数C。通过树的最大分支称为一个历史。

树（T，<）似乎对应于我们所有人熟悉的天真图像：一个时刻 m 是一个临时的现在；集合 {n:n<m} 对应于 m 的过去，这是唯一的；而集合 {n:m<n} 对应于 m 的开放未来，其中的每个特定的最大线性子集对应于一个特定的可能未来。

为了形式化行动的概念，从两个一般观察开始：

通常情况下，一个行动者无法选择一个可能的未来成为唯一的实际未来，但通过他的行动，他可以确保在他的行动之前可能存在的某些未来在他的行动之后不再可能。

这就是选择函数C的作用：对于每个时刻m和行动者i，C给出了通过m的所有历史Hm的一个划分Cmi。Cmi中的等价类被称为选择单元。（注意，属于同一选择单元的两个历史在问题时刻之前是一致的，但不一定在之后是一致的。）如果h是通过m的一个历史，我们用Cmi(h)表示h所属的选择单元。将Cmi与行动者i在m时刻可选择的行动集合相关联，并将选择单元Cmi(h)视为与h相关联的行动。

一个*stit模型*有一个额外的组成部分：一个估值。事实证明，在一个框架中，估值是一个函数，它将一个变量和每个索引分配为1（真）或0（假），其中索引是由历史和历史上的时刻组成的有序对。现在可以定义相对于索引的公式的真值或假值的概念。如果V是我们的估值，对于原子ϕ，我们有以下基本真值条件：

(h,m)⊨ϕ当且仅当V(ϕ,(h,m))=1。

布尔连接词的真值条件如预期的那样；例如，

(h,m)(h,m)⊨¬ϕ 当且仅当 (h,m)⊭ϕ,⊨ϕ∧ψ 当且仅当 (h,m)⊨ϕ 且 (h,m)⊨ψ。

让我们用[[ϕ]]m表示集合{h∈Hm:(h,m)⊨ϕ}，即与h至少在m上一致且关于该历史和m的指数的ϕ为真的历史集合。对于stit运算符的定义形式真值条件，至少有两种可能性需要考虑：

1. (h,m)⊨stitiϕ当且仅当Cmi(h)⊆[[ϕ]]m。 2. (h,m)⊨stitiϕ当且仅当Cmi(h)⊆[[ϕ]]m且[[ϕ]]m≠Hm。

为了区分这两个条件定义的不同运算符，前一个运算符被称为*Chellas stit*，写作cstit，而后一个运算符被称为*deliberative stit*，写作dstit。

用文字来描述，如果在索引(h,m)处，对于与h在m上的相同选择单元中的所有历史h'，ϕ相对于h'和m是真的，那么cstitiϕ就是真的；这被称为正条件。而dstitiϕ的真值条件更为严格；不仅正条件必须满足，还必须满足所谓的负条件：必须存在一些通过m的历史，使得ϕ相对于该历史和m不为真。

研究了cstit和dstit；据称它们捕捉到了“确保”的重要方面。如果引入“历史上必要”的概念，这两个运算符就可以相互定义。使用□表示历史上的必要性，定义如下：

(h,m)⊨□ϕ 当且仅当对于所有的h′∈Hm，(h′,m)⊨ϕ。

 然后是以下公式：

dstitiϕcstitiϕ↔(cstitiϕ∧¬□ϕ) 和 ↔(dstitiϕ∨□ϕ)

对于所有指标来说都是正确的。

stit理论的一个优点是，对于个体行为的stit分析可以自然地扩展到团体行为。

一些定义stit传统的最初论文收录在Belnap 2001这本书中。其中一本重要的后续作品是John F. Horty的书（2001年）。Ming Xu（1998年）对stit的逻辑进行了公理化。

 ### 1.3 意图

迈克尔·布拉特曼对意图概念的哲学分析对计算机科学中行动逻辑的发展产生了重要影响。下面将对此进行讨论。

### 1.4 特殊类型行动的逻辑

在一系列的论文中，Carlos Alchourrón、Peter Gärdenfors和David Makinson创建了他们所称之为理论变化的逻辑，后来被称为AGM范式。他们的工作受到了两种特定类型的变化的启发：由于道义行为的变化（Alchourrón）和由于信念行为的变化（Gärdenfors和在他之前的Isaac Levi）。道义行为的例子包括废除和修正（法律可以被废除或修正），而收缩和扩展是类似的信念行为（可以放弃信念，添加新的信念）。后来，这些行为的模态逻辑在动态道义逻辑、动态信念逻辑和动态认知逻辑等名称下得到了探索。（关于AGM的经典论文，请参见AGM 1985。关于动态道义逻辑和动态信念逻辑的介绍，请参见Lindström和Segerberg 2006。我们将在第4节中从人工智能领域的角度来讨论这个主题。）

## 2. 语言学中的行动逻辑

在语言学中，行动有两种方式发挥作用：一方面，话语本身就是行动，另一方面，它们可以用来谈论行动。前者导致了言语行为的研究，这是语用学的一个分支，后者则涉及行动报告的语义研究，因此具有明显的语义性质。除此之外，还有一种特殊类型的语义学，即动态语义学，其中意义被视为听者状态的变化，而不是状态描述。

 ### 2.1 言语行为

言语行为的研究可以追溯到奥斯汀（1957）和西尔（1969）。他们都强调使用语言是为了执行某些行为。此外，不仅仅是一个行为，而是一系列行为（奥斯汀本人将数量放在103数量级上）。他自己给出的分类涉及到现在不被视为独立科学的行为：仅仅是说出一个词（*语用行为*）或句子是语音学（或音韵学）的一部分，这里只是边缘问题。相比之下，*言辞行为*和*言外行为*已经成为研究的对象。*言辞行为*是通过使用句子来执行的语言行为；它本质上是沟通性的。相比之下，*言外行为*是一种需要周围社会背景才能成功的行为。例如，给船命名或给婴儿命名都是言外行为。句子“I hereby pronounce you husband and wife”只有在特定明确的情况下才能使两个人结婚。根据定义，言外行为将我们带出了语言和沟通的领域。

西尔和范德韦肯（1985）发展了一种称为*言辞逻辑*的言语行为逻辑。这在范德韦肯1990年和范德韦肯1991年得到了完善。早在弗雷格在他的*Begriffsschrift*中使用了符号“⊢ϕ”，其中ϕ表示一个命题，“⊢”表示判断符号。因此，“⊢ϕ”表示ϕ是可证明的，但是对⊢的其他解释也是可能的（伴随着不同的符号；例如，“⊨ϕ”表示ϕ在模型中为真，“⊣ϕ”表示ϕ是可反驳的，等等）。一个基本的言语行为的形式是F(ϕ)，其中F表示言辞目的，ϕ表示一个命题。反过来，言辞力量由七个要素确定：

1. 一个*点*， 2. 达到言语行为点的方式， 3. 言语行为点的强度程度， 4. 命题内容条件， 5. 准备条件， 6. 诚意条件， 7. 诚意条件的强度程度。

根据西尔和范德维肯（1985）的观点，确切地有五个要点：

- *断言性*的观点是陈述事实。- *承诺性*的观点是承诺说话者要做某事。- *指令性*的观点是让其他人做某事。- *陈述性*的观点是通过陈述来改变世界。- *表达性*的观点是表达感受和态度。

对这个问题的后续处理往往忽视了早期方法的复杂性，因为它没有任何预测能力。特别难处理的是“强度”这个概念。现代模型尝试使用更新模型代替（见下面的第2.3节）。Van der Sandt 1991使用了一个包含三个不同板块的话语模型（每个发言者一个，以及一个共同的板块）。虽然每个发言者负责维护自己的板块，但只能通过彼此之间的交流来对共同的板块进行更改。Merin 1994试图将操作简化为所谓的“基本社交行为”的顺序组合：*主张*、*让步*、*否认*和*撤回*。

说出一句话就是行动。这个行动可能会产生各种后果，部分是有意的，部分是无意的。最近，人们开始关注话语作为行动嵌入在人类之间更大的互动方案中的事实（例如，参见Clark 1996）。最近还突出了另一个重要方面，即通过说出一句话，我们可以改变整个代理群体的知识状态，参见Balbiani等人2008年的研究。在公开宣布ϕ之后，ϕ成为整个群体的共同知识。这个想法为Grice的语用学问题带来了新的启示，其中某些言语行为只有在发言者和听者之间共同知晓某些事实的情况下才能成功。通过说话，发言者可以建立这种共同知识，以防它之前不存在。

 ### 2.2 行动句

Davidson（1967）提供了一种关于行动句的解释，其中采用了现在广泛认可的“事件”概念。其基本思想是行动句的形式为（∃e）（⋯），其中e是对动作的变量。例如，“布鲁图斯猛刺凯撒”被翻译为（忽略时态）（∃e）（刺（e，布鲁图斯，凯撒）∧猛烈（e））。这可以捕捉到这句话逻辑上意味着布鲁图斯刺了凯撒这一事实。这种思想在语言学中被广泛采用；此外，现在认为基本上所有动词都表示事件（Parsons 1990）。因此，行动句是指涉及特殊类型事件（称为“情况”）的句子。

Vendler（1957）将动词分类为四组：

1. *状态*（“知道”，“坐着”），2. *活动*（“跑步”，“吃饭”），3. *成就*（“写信”，“建房子”），和4. *成就*（“到达”，“抵达”）。

Moens和Steedman（1988）添加了第五个类别：

5. *点*（“闪光”，“爆发”）。

主要的分界线是状态和其他事物之间的区别。类型（b）-（e）都涉及到变化。这种划分在语言学理论中具有重要影响力；然而，研究主要集中在它与时态的关系上。需要注意的是，例如，类型（c）的动词可以与进行时连用，而类型（d）的动词则不能。为了解释这一点，Krifka 1986和Krifka 1992引入了“递增主题”的概念。这个想法是，任何事件都有一个潜在的活动，其进展可以使用事件的潜在参与者来衡量。例如，如果我写一封信，进展可以用字数来衡量。因此，在“我写一封信”中，信件就是递增主题，因为它定义了进展。这个想法的一个实现是Verkuyl（1993）的时态理论。另一种实现变化概念的方法是将其转化为命题动态逻辑（参见Naumann 2001）。Van Lambalgen和Hamm（2005）将Shanahan（1990）的事件演算应用于事件的描述。

### 2.3 动态语义学

许多人独立提出了一个观点，即命题不仅可以被视为状态描述，还可以被视为更新。考虑一个代理人可能的状态，最简单的情况是一个理论（即一个推理闭合的句子集合）。那么，通过命题ϕ对理论T进行的*更新*是T∪{ϕ}的推理闭包。

Gärdenfors 1988以特别关注信念修正的视角提出了这个观点。Veltman 1985发展了更新视图来处理条件语句。这个想法的一个优点是可以解释为什么迷你对话“下雨了。可能没有下雨。”与“可能没有下雨。下雨了。”相比是不合适的。鉴于更新只对一致的理论有效，而“可能ϕ”（带有认知“可能”）只是意味着“是一致的”（写作⬦ϕ），第一个是更新序列与ϕ和⬦¬ϕ。第二步导致了不一致，因为ϕ已经被添加了。在这种方法中，上下文的不断变化非常重要。

Heim 1983尝试将这个想法应用于预设的处理。在Heim的提议中，一个句子有改变上下文的潜力，这就是为什么例如句子“如果约翰结婚了，他的妻子会很开心。”不预设约翰已经结婚。也就是说，条件语句的第二部分（“他的妻子会很开心”）是根据前提（“约翰结婚了”）增加的上下文来评估的。当然，这是计算机语言中评估条件的标准方式。这个类比在Van Eijck 1994中得到了利用，也可以参考Kracht 1993。

动态谓词逻辑（DPL）进一步发展了动态化的概念，其中所有表达式都是动态解释的。这个语法的特定见解是存在量词具有动态增长的范围。这最早在Kamp 1981中被注意到，其中给出了一种基于中间表示的语义，即所谓的话语表示结构。Groenendijk和Stokhof通过在公式的评估中引入动态，取代了这些结构，这是Dynamic Logic（DL）中提出的。存在量词被翻译为DL的随机赋值“x←?”，其解释是赋值之间的关系集合：它是一组对⟨β,γ⟩，使得对于所有的y≠x（符号表示为β∼xγ），都有β(y)=γ(y)。句子“A man walks.”的翻译是

- (1)⟨x←?⟩man′(x)∧walk′(x)

这是一个命题，因此被解释为一个集合。然而，我们可以将动态性降低，使所有的意义都成为关系性的。然后，“一个人走路。”被这个“程序”解释为

- (2)x←?;man′(x)?;walk′(x)?

在这里，人们使用测试构造器“？”：ϕ?是所有满足ϕ的⟨β,β⟩的集合。因此，整个程序（2）的含义也是赋值之间的关系。换句话说，它是所有满足β∼xγ且γ(x)行走且是人的所有⟨β,γ⟩对的集合R。相比之下，（1）的含义是所有满足某个⟨β,γ⟩∈R的β的集合。因此，存在量词具有“副作用”：通过不同变量的量词对赋值的更改永远不会被撤销。因此，存在量词右侧是开放的。这解释了（1）中括号的缺失。有关动态语义的概述，请参见Muskens *et al.* 1997。

## 3. 计算机科学中的行动逻辑

行动逻辑在计算机科学中起着重要作用。一旦人们意识到计算机以某种编程语言编写的程序语句的形式执行操作，改变计算机内部，并通过与外部世界的接口，也改变了外部世界，这一点就变得明显。因此，行动逻辑提供了一种推理程序的方法，更准确地说是程序的执行和其效果。这使得我们能够证明程序的正确性。原则上，这是非常可取的：如果我们能够证明所有的软件都是正确的，我们就会知道它们会按照我们设计的方式正常运行。图灵（1949年）和冯·诺伊曼（Goldstein和Von Neumann 1963）等计算机编程先驱已经意识到了这一点。当然，对于所有软件来说，这个理想在日常实践中建立起来太难了。验证是一项非平凡且耗时的工作，而且也存在理论上的限制。然而，由于替代方案只是通过实验进行大规模的程序测试，无法百分之百保证正确性，因此它仍然是一个活跃的研究领域至今。

### 3.1 推理程序

程序验证有着悠久的历史。自计算机及其编程问世以来，研究人员就开始思考分析程序的方法，以确保它们能够按照预期的方式运行。在60年代，对程序正确性进行真正的数学理论的发展开始形成（de Bakker 1980, 466）。值得注意的是，约翰·麦卡锡的工作在这方面起到了重要作用，我们在转向人工智能领域时还会遇到他，他区分和研究了“状态”等基本概念（McCarthy 1963a）。这一方面导致了编程语言语义学的发展，另一方面也推动了Floyd（1967）、Naur（1966）、Hoare（1969）和Dijkstra（1976）在程序正确性方面的重大进展（de Bakker 1980）。Floyd和Naur使用了一种基本的逐步归纳原理和与程序点相关联的谓词来表达命令式程序的不变性属性（Cousot 1990, 859），这些程序由基本赋值语句（将算术表达式赋值给程序变量）构建，并可以通过顺序、条件和重复来组合。虽然Floyd-Naur方法（称为“归纳断言方法”）通过逻辑的方式构造验证条件，是一种证明程序正确性的方法，但严格意义上来说它并不是一种逻辑。正确的程序逻辑之路由Hoare铺就，他的“组合”证明方法将Floyd-Naur方法转化为一种真正的逻辑，其中断言是形如{P}S{Q}的Hoare三元组，其中P和Q是一阶公式，S是上述命令式编程语言中的程序语句。其意图是如果在执行语句S之前P成立，则在（执行）S终止时Q成立。（关于S的执行是否终止的问题可以在这个Hoare三元组的解读中有条件地（部分正确性）或无条件地（完全正确性）放置，从而产生不同的逻辑，参见Harel等人2000年）。为了给出Hoare风格逻辑的印象，我们在这里给出一个简单的编程语言的规则，该语言由对算术表达式的变量赋值组成，并包含顺序（;）、条件（IF）和重复（WHILE）组合。

{P}S1{Q},{Q}S2{R}{P}S1 ; S2{R}

{P∧B}S1{Q},{P∧¬B}S2{Q}{P}IFBTHENS1ELSES2{Q}

{P∧B}S{P}{P}WHILEBDOS{P∧¬B} {P∧B}S1{Q},{P∧¬B}S2{Q}{P}IFBTHENS1ELSES2{Q}

后来，普拉特（Pratt）和哈雷尔（Harel）将霍尔逻辑推广到动态逻辑（Pratt 1976，Pratt 1979a，Harel 1979，Harel 1984，Kozen和Tiuryn 1990，Harel等人2000），人们意识到它实际上是一种模态逻辑，通过将程序S的输入-输出关系视为Kripke风格语义中的可达性关系[[1](https://plato.stanford.edu/entries/logic-action/notes.html#1)]。霍尔三元组{P}S{Q}在动态逻辑中变成了以下公式：P→[S]Q，其中[S]是与程序S的输入-输出关系（关联的可达性关系）相关联的模态盒子运算符。命题版本的动态逻辑PDL由Fischer和Ladner（1977）引入，并成为研究的重要课题。PDL的关键公理是归纳公理

[S∗](P→[S]P)→(P→[S∗]P)

其中∗表示迭代运算符，S∗表示程序S的任意（有限）次迭代。该公理表达了如果在S的任意次迭代之后，S的执行保持P的真实性，那么如果P在当前状态为真，则在S的任意次迭代之后，P也将为真。Hennessy和Milner引入了PDL的一种较弱形式HML，只有原子动作框和菱形以及命题连接词，用于推理并发进程，并特别分析进程等价性（Hennessy和Milner 1980）。

值得在这里提到的是，Dijkstra（1976）关于最弱前置条件演算的工作与动态逻辑（和Hoare的逻辑）非常相关。实际上，Dijkstra所称的最弱自由前置条件，表示为wlp(S,Q)，与动态逻辑中的框运算符相同：wlp(S,Q)=[S]Q，而他所称的最弱前置条件，表示为wp(S,Q)，是这个的总正确性变体，意味着该表达式还包含了语句S的终止（Cousot 1990）。

后来人们意识到，动态逻辑的应用不仅限于程序验证或对程序的推理。实际上，它构成了一种普遍行动的逻辑。在Meyer 2000中，给出了动态逻辑的许多其他应用，包括义务逻辑（另见Meyer 1988）、对数据库更新的推理、对反射式架构等推理系统的语义。值得一提的是，Meyer 1988中提出的将动态逻辑用于义务逻辑需要扩展行动语言，特别是添加“行动否定”运算符。这个运算符的相当有争议的性质引发了对行动否定本身的研究（参见Broersen 2004）。在下面，当我们指定智能代理时，也会遇到动态逻辑在人工智能中的应用。

到目前为止，这些逻辑对于推理那些被认为会终止并显示特定输入/输出行为的程序是足够的。然而，在七十年代末，人们意识到还有一些不属于这种类型的程序。反应式程序被设计为对理论上可能是无限的输入流做出反应，因此显示出理想的非终止行为。这里不太重要的是输入输出行为，而是程序随时间的行为。因此，Pnueli（1977）提出了一种不同的关于这种编程风格的程序推理方法，基于时间逻辑的思想，即线性时间时态逻辑。 （由于反应性通常涉及并发或并行编程，时态逻辑通常与这种编程风格相关联。然而，值得注意的是，一系列的研究继续扩展了对并发程序使用Hoare逻辑的方法（Lamport 1977，Cousot 1990，de Roever等人2001）。）线性时间时态逻辑通常具有下一个时间、总是（在未来）、有时（在未来）、直到和自从等时态运算符。

一个有趣的区别是，时间逻辑与动态逻辑和霍尔逻辑之间的区别是，前者是文献中所称的内生逻辑，而后者是所谓的外生逻辑。如果程序在逻辑语言中是显式的，则逻辑是外生的，而对于内生逻辑来说则不是这样。在像时间逻辑这样的内生逻辑中，假设程序是固定的，并且被认为是逻辑解释的一部分（Harel等人，2000年，157页）。外生逻辑是组合的，并且具有通过结构归纳进行分析的优势。后来，普拉特（1979b）试图将时间逻辑和动态逻辑融合成他所称的过程逻辑，这是一种用于推理时间行为的外生逻辑。

目前，计算机科学中应用的时间逻辑领域已经发展成为一个完整的子领域，包括（半）自动推理和模型检查的技术和工具（参见Emerson，1990年）。还提出了基本线性时间模型的变体，用于验证，例如分支时间逻辑（以及特别是CTL（计算树逻辑）及其扩展CTL*（Emerson，1990年）），其中可以明确地推理关于（量化）非确定性计算中的替代路径的问题，并且最近还提出了CTL的扩展，称为交替时间逻辑（ATL），其中包含一种表达式，表示一组代理人具有共同策略以确保其论证，以推理所谓的开放系统。这些系统的行为也取决于其环境的行为，参见Alur等人，1998年。

最后，我们提到了用于推理程序的其他逻辑，即固定点逻辑，其中典型的例子是所谓的μ-演算，追溯到Scott和de Bakker（1969），并在Hitchcock和Park 1972，Park 1976，de Bakker 1980和Meyer 1985中进一步发展。基本运算符是最小固定点运算符μ，捕捉迭代和递归：如果ϕ（X）是一个带有自由关系变量X的逻辑表达式，那么表达式μXϕ（X）表示最小的X，使得ϕ（X）= X，如果这样的X存在。μ-演算的命题版本称为命题或模态μ-演算，包括命题构造→和**false**，以及原子（动作）模态[a]和μ运算符，完全由命题模态逻辑加上公理ϕ[X/μXϕ]→μXϕ来公理化，其中ϕ[X/Y]表示将X替换为Y的表达式ϕ，以及规则

ϕ[X/ψ]→ψ{μXϕ→ψ}

（Kozen 1983，Bradfield和Stirling 2007）。众所周知，这种逻辑包含了PDL（*cf*。Harel *et al.* 2000）。

## 4. 人工智能中的行动逻辑

在人工智能（AI）领域，目标是设计出能够智能行为的基于计算机的工具（旨在理解人类智能或仅仅是制造智能计算机系统和程序）。为了实现这一目标，在AI领域有一个传统，即基于所有相关因素的符号表示来构建这些系统。这个传统被称为符号AI或“老派”的AI（GOFAI）。在这个传统中，知识表示（KR）的子领域显然非常重要：它从AI的起源开始就发挥了重要作用，并发展成为一个相当独立的领域。KR中一个重要的领域是关于行动的表示，这些行动可以由要设计的系统本身或其环境中的参与者执行。当然，除了纯粹的表示之外，对行动的推理也很重要，因为在KR中，表示和对这些表示的推理被认为是密切相关的（有时也被称为KR＆R，知识表示与推理）。AI中的一个相关而较新的发展是基于“智能代理”（*intelligent* *agent*）的智能系统构建概念，智能代理是一种自主行动的实体，其本质上在获得逻辑描述和规范时，行动逻辑起着关键作用。

### 4.1 行动的表示和推理

如上所述，行动的表示和用于推理的形式化/逻辑对于人工智能特别是知识表示领域非常重要。在人工智能中，关于行动推理的文献中遇到的一个主要问题，比在主流计算机科学中更为突出的问题是所谓的“框架问题”（McCarthy和Hayes 1969）。尽管像丹尼特（1984）这样的哲学家将这个问题概括为与行动相关的属性的相关性和显著性的一般问题，但问题的核心在于，在人工智能中遇到的“常识”环境中，几乎不可能详细说明与关注的行动相关的所有效果以及所有的非效果。例如，给定一个行动，思考一下如果执行该行动会发生什么变化，以及不会发生什么变化-通常后者比前者更难产生，导致大量复杂的尝试来指定非效果。但是还存在一个“相关性”的问题：哪些方面与手头的问题相关；我们需要考虑哪些属性？特别是，这也涉及到行动的前提条件，以确保行动的成功执行。同样，在常识环境中，这些是非常困难的，人们总是可以想到另一个应该纳入考虑的（前）条件。例如，要成功启动汽车的发动机，应该有充电的电池、足够的燃料，...，还有不太冷的天气，甚至是手指有足够的力量能够转动起动钥匙，汽车中有发动机的存在，...等等。在人工智能中，人们试图找到一个关于框架问题的解决方案，涉及到最小可能的规范。尽管这个问题引发了所谓的“可废除”或“非单调”解决方案，如默认值（“通常汽车有发动机”），这本身引发了人工智能中的一个全新领域，称为“非单调或常识推理”，但这超出了本条目的范围（我们将感兴趣的读者参考本百科全书中的Thomason（2003）的文章）。我们在这里专注于一种不涉及非单调性（直接）的解决方案。

Reiter（2001）提出了一个（部分）解决方案，该解决方案在一个称为“情境演算”的框架内，这个框架自从由人工智能的创始人之一约翰·麦卡锡（McCarthy 1963b，McCarthy 1986）提出以来，在知识表示领域特别受欢迎，尤其在北美地区。情境演算是一种一阶逻辑的方言，具有一些轻微的二阶特征，专门用于推理行动。（它的一个独特特点是将语义概念（如状态或可能世界）（以及真值谓词）“再现”为对象语言中的句法实体（“情境”）。为了在本条目中保持一致性和空间的原因，我们将尝试在（一阶）动态逻辑中呈现Reiter的思想，或者更确切地说，在它的轻微扩展中。（我们需要行动变量来表示行动表达式，以及行动变量和行动（或者更确切地说，行动表达式）之间的等式，以及（普遍的）行动变量量化）。

所谓莱特尔对框架问题的解决方案假设一个所谓的封闭系统，也就是说，一个系统中所有（相关的）行动和可变属性（在这个设置中通常称为“流动”以强调它们随时间的可变性）都是已知的。通过这个假设，可以非常简洁和优雅地表达（非）变化作为执行行动的结果，以及检查前提条件以确保成功执行的问题，并将其形式化为所谓的后继状态公理：

（∀A）[Poss（A）→（（[A]f（x））↔（γ+f（x，A）∨（f（x）∧¬γ−f（x，A））））]

其中A是一个动作变量，γ+f(x,A)和γ−f(x,A)是不带动作模态的“简单”表达式，分别表示ϕ成为真和假的条件。因此，该公式可以非正式地解读为，在涉及到动作A的特定前提条件下，谓词f对参数x成为真，当且仅当条件γ+f(x,A)成立或f(x)成立（在执行A之前）且条件γ−f(x,A)（会导致其变为假）不成立。此外，表达式Poss(A)在这些公理中被用作示意，整个动作理论应该与所谓的前提条件公理相结合，其形式为ϕA→Poss(A)，其中ϕA是陈述执行A所需的实际前提条件的具体表达式。

为了看看这在实践中是如何运作的，我们考虑一个小例子，在这个领域中我们有一个可能被打破或不被打破的花瓶v（因此我们有“打破”作为一个谓词），以及动作drop和repair。我们还假设一个（不可变的）谓词fragile和held-in-hand表示一个物体。现在，后继状态公理变为

（∀A）[Poss(A)→([A]broken(v)↔ ((A=drop(v)∧fragile(v))∨(broken(v)∧A≠repair(v))))]

作为前提公理，我们有held-in-hand(x)→Poss(drop(x))和broken(x)→Poss(repair(x))。这个行动理论非常简洁：每个流畅状态只需要一个后继状态公理，每个动作只需要一个前提公理。

在这个小节中，我们必须提到一些其他众所周知的关于行动和变化推理的方法。*事件演算*（Kowalski和Sergot 1986，Shanahan 1990，Shanahan 1995）和*流畅演算*（Thielscher 2005）是情境演算中行动的替代表示方法。读者还可以参考Sandewall和Shoham 1994了解历史和方法论问题，以及与非单调推理的关系。这些思想已经导致了非常高效的规划系统（例如TALplanner，Kvarnström和Doherty 2000）和实际编程机器人代理的方法（例如基于情境演算的GOLOG系列语言（Reiter 2001）和基于流畅演算的FLUX（Thielscher 2005））。

### 4.2 智能代理的描述和规范

在过去的二十年中，智能代理的概念已经成为一个统一的概念，用于讨论人工智能的理论和实践（参见Russell和Norvig 1995年，Nilsson 1998年）。简而言之，代理是显示智能/理性和自主性形式的软件实体。它们能够主动采取行动并做出决策，而无需直接受到人类用户的控制。在本小节中，我们将看到逻辑（行动）如何用于描述/指定代理的（期望的）行为（参见Wooldridge 2002年）。首先，我们关注单个代理，然后转向具有多个代理的环境，称为多代理系统（MAS）甚至代理社会。

#### 4.2.1 单个代理方法

有趣的是，智能代理概念的起源可以追溯到哲学。

首先，它与古典哲学传统中的实践推理有直接联系，这可以追溯到亚里士多德。在这里，人们关注的是以三段论的方式进行行动推理，例如来自Audi 1999年第729页的以下示例：

愿我锻炼身体。慢跑是锻炼身体的方式。因此，我将去慢跑。

尽管这个推理形式符合亚里士多德传统的理论推理，但仔细观察后发现，这个推理并不是纯粹的逻辑推导（结论并不从前提逻辑上推出）。它更多地是代表了一个行动者的决策（去慢跑），这个决策基于行动者的心理态度，即他/她的信念（慢跑是锻炼身体的方式）和他/她的欲望或目标（愿我锻炼身体）。因此，实践推理是指朝向行动的推理，即找出该做什么的过程，正如Wooldridge（2000）所说。根据信念和欲望等心理状态来推理下一步该做什么的过程被称为思考。

Dennett（1971）提出了“有意识立场”的概念：通过将实体视为一个理性的行动者，通过考虑其信念和欲望来解释其行为的策略。因此，它是对系统的设计（功能性）立场的拟人化实例，与物理立场相对立。这种立场被证明在认知科学、生物学/行为学（与动物行为有关）以及思考人工智能代理的起点方面具有极大的影响力。

最后，最重要的是哲学家Michael Bratman（1987）的工作，尽管最初是针对人类行为者的，但为人工智能代理的BDI方法奠定了基础。特别是，Bratman提出了将“意图”概念纳入描述代理行为的论点。意图在选择所需的行动方面起着重要作用，并附带了对所选行动的明确承诺。除非有理由放弃承诺（例如相信意图已经实现或认为无法实现），代理应该坚持承诺，坚持下去，并尝试实现它，

在布拉特曼的哲学理论发表之后，研究人员尝试使用逻辑手段对该理论进行形式化。我们在这里提到了三种著名的方法。科恩和莱维斯克（1991）试图以线性时间风格的时间逻辑来捕捉布拉特曼的理论，他们添加了原始运算符来表示信念和目标，以及一些用于处理行动的运算符，例如表示即将执行的行动（HAPPENSα），刚刚执行的行动（DONEα）以及原始行动的执行者是哪个代理（ACTi α：代理i是α的执行者）。从这个基本设置出发，他们建立了一个框架，最终将意图的概念定义为其他概念的术语。实际上，他们定义了两个概念：意图做某事和意图成为某事。首先，他们定义了成就目标（A-Goal）的概念：A-Goal是一种在稍后成为目标的东西，但目前被认为不是真实的。然后，他们定义了持久目标（P-Goal）：P-Goal是一个A-Goal，在被认为已经实现或被认为不可能之前不会被放弃。然后，做某个动作的意图被定义为已经完成该动作的P-Goal，以一种使得代理人意识到该动作正在发生的方式。满足ϕ的状态的意图是已经完成了导致ϕ发生的某个动作的P-Goal，代理人意识到导致ϕ发生的某些事情发生，实际发生的事情不是代理人明确地将其作为目标的事情。

接下来是Rao＆Georgeff对BDI代理的形式化，他们使用分支时间逻辑CTL（Rao和Georgeff 1991，Rao和Georgeff 1998，Wooldridge 2000）。在CTL之上，他们引入了用于信念（BEL）、目标（GOAL）（有时替换为欲望（DES））和意图（to_be类型的INTEND）的模态运算符，以及用于讨论基本动作（e）的成功（succeded(e)）和失败（failed）的运算符。因此，他们并不试图用其他概念来定义意图，而是将意图作为一个单独的运算符引入，其含义后来受到“合理”的公理的限制。形式语义基于Kripke模型，其中信念、目标和意图运算符之间存在着世界之间的可达关系。然而，在这里，可能的世界是完整的时间树（模拟代理的各种行为），在这些时间树上，CTL公式以通常的方式进行解释。接下来，他们提出了一些公理/公理，认为这些运算符之间存在合理的相互作用，并相应地限制逻辑模型，使得这些公理成为有效性。例如，他们提出了公式GOAL(α)→BEL(α)和INTEND(α)→GOAL(α)，对于某个类别的公式α，其中α=E(ψ)是一个典型的例子。这里，E代表CTL中的存在路径量词。Rao和Georgeff还展示了可以在他们的逻辑中表达承诺策略。例如，以下表达了一个“专注承诺”的代理，它会一直坚持其意图，直到它相信已经实现或认为不可能（这与科恩和莱维斯克的方法中的意图定义非常接近）：

动物的道德地位翻译为动物的道德地位

最后，Van Linder等人提出了KARO方法（Van der Hoek等人，1998年，Meyer等人，1999年），该方法以动态逻辑为基础，而不是时态逻辑。首先构建一个核心，由命题动态逻辑语言组成，增加了知识（K）、信念（B）和欲望（D）的模态运算符，以及表示执行动作能力的运算符（A）。然后，通过大多数缩写（根据其他运算符的定义）扩展语言，以获得一个完整的BDI类似逻辑。最突出的运算符有：

- *机会*去执行一个动作（意味着有一种方式可以执行该动作，导致进入下一个状态） - *在某个断言下的实际可能性*去执行一个动作（能力和机会的合取，加上执行该动作导致断言为真的陈述） - *能够*根据某个断言去执行一个动作（知道在手头的断言下具有实际执行该动作的可能性） - *可实现性*的断言（存在一个计划，即一系列原子动作，代理人在手头的断言下具有实际执行的可能性） - *目标*与某个断言相关（断言是可取的，尚未成立，但可实现） - *可能打算*根据某个断言去执行一个动作（表达代理人可以根据他知道的断言将其作为目标来执行该动作）

此框架还具有特殊的操作commit和uncommit来控制代理人的承诺。这些操作的语义是，如果有充分的理由，即存在一个已知目标ϕ的可能意图α，代理人显然只能承诺执行α。此外，只要有充分的理由使α保持承诺状态，即存在某个可能的意图涉及α，代理人就不能取消对某个特定的α的承诺。这导致在KARO中具有以下有效性：（这里，I(α,ϕ)表示可能的意图运算符，Com(α)是表示代理人承诺执行α的运算符，类似于Cohen和Levesque在1990年的INTEND1意图运算符。）

⊨I(α,ϕ)→⟨commit(α)⟩Com(α)⊨I(α,ϕ)→¬Auncommit(α)⊨Com(α)→⟨uncommit(α)⟩¬Com(α)⊨Com(α1 ; α2)→KCom(α1)∧K[α1]Com(α2)

非正式地说，这些公理表明：如果代理人可能意图实现某个目标的行动，那么它有机会承诺这个行动，之后它会被记录在议程上；只要代理人可能意图一项行动，它就无法取消承诺（这反映了承诺的持久性形式：只要议程上有一个计划有充分的理由，它就必须留下来！）；如果代理人承诺一项行动，它有机会取消承诺（但可能缺乏这样做的能力，参见前一个公理）；如果代理人承诺一系列两个行动，那么它知道自己承诺了第一个行动，并且它也知道在执行第一个行动后，它将承诺第二个行动。

除了在BDI风格的代理逻辑传统中关注动机态度之外，KARO框架还提供了对认知和信念态度的广泛解释。这在Van Linder等人的1995年的工作中得到了最完整的阐述。这项工作与人工智能和哲学之间的另一个研究领域相结合，即动态认知逻辑，其根源可以追溯到哲学、语言学、计算机科学和人工智能！动态认知逻辑（DEL）是知识变化的逻辑；它不仅仅是关于一个特定的逻辑系统，而是关于一整个逻辑家族，允许我们指定知识和代理人信念的静态和动态方面（参见Van Ditmarsch等人的2007年的工作）。该领域结合了哲学的见解（关于信念修正，AGM风格（AGM 1985），正如我们在第1节中所见），语言学中的动态语义和语言哲学（正如我们在第2节中所见），使用动态逻辑来推理程序的思想（正如我们在第3节中所见），以及人工智能中关于知识和行动如何相互影响的思想（Moore 1977）。更一般地说，我们可以看到van Benthem和同事们提倡的信息变化的逻辑分析的影响（van Benthem 1989，van Benthem 1994，Faller等人2000）。此外，Veltman对默认推理的更新语义（Veltman 1996）也可以看作是这一范式的一部分，这是人工智能中的一种重要推理方法（Reiter 1980，Russell和Norvig 1995）。

对于本条目的目的，有趣的是要注意采取的一般方法是应用行动逻辑，即动态逻辑，来建模信息变化。这相当于一种方法，其中认知（或信念）更新被实体化为将认知/信念状态更改为行动的逻辑。因此，例如在Van Linder等人的1995年的研究中，我们遇到了诸如expand(ϕ)、contract(ϕ)、revise(ϕ)等行动，分别指的是扩展、收缩和修订自己对公式ϕ的信念。可以通过将它们放入动态逻辑的方框和菱形中进行推理，因此基本上使用了动态逻辑的扩展来推理这些更新。进一步显示这些行动满足AGM公理，因此可以将此方法视为AGM框架的模态对应物。在精神上非常相似的是Segerberg（1995）关于动态信念逻辑（DDL）的工作，即信念变化的模态逻辑。在DDL中，引入了形式为[+ϕ]、[*ϕ]和[−ϕ]的模态运算符，具有非正式的含义：“在代理人通过ϕ扩展/修订/收缩其信念之后”，分别。结合“标准”的信念运算符B，其中Bϕ被解释为“ϕ在代理人的信念集中”，现在可以表达像[+ϕ]Bψ这样的属性，表示在通过ϕ扩展其信念之后，代理人相信ψ（还可以参见Hendricks和Symons 2006）。

最后，在本小节中，我们提到了最近的工作，其中KARO形式主义被用作描述代理人的认知行为的其他方面的基础，超越了BDI，即涉及情绪的态度（Meyer 2006，Steunebrink等人2007，Steunebrink等人2012）。这种方法的要点是，像KARO这样的表达性行动逻辑可以有效地用于描述情绪（如喜悦、满足、愤怒和懊悔）是如何由某些信息和动机态度（“情绪引发”）触发的，以及一旦被激发，代理人的情绪状态如何影响其行为，特别是对下一步行动的决策。

#### 4.2.2 多智能体方法

除了用逻辑来描述单个智能体的态度之外，还有工作致力于描述多智能体系统作为整体的态度。首先，我们提到了Cohen和Levesque在这方面的工作（Levesque *et al.* 1990，Cohen and Levesque 1991）。这项工作对KARO的多智能体版本（Aldewereld *et al.* 2004）产生了重大影响。在联合目标的概念中，一个重要的复杂性涉及目标的持久性：在单个智能体的情况下，智能体追求其目标，直到它相信已经实现了目标或者相信永远无法实现。而在多个智能体的情况下，意识到这一点的智能体必须通知团队中的其他成员，以便整个团队相信这是事实，并可能放弃该目标。这一点在上述方法中得到了捕捉。相关的工作，虽然不是严格意义上的行动逻辑，但涉及到集体意图的逻辑处理（Keplicz and Verbrugge 2002）。

在这里还必须提到，受到DEL和DDL所描述的个体代理的知识和信念更新工作以及关于代理群体知识的研究的启发（例如，Meyer和Van der Hoek 1995），出现了一个全新的子领域，可以看作是动态认知逻辑的多代理（对应）部分。这涉及到公共公告逻辑以及更一般地影响代理群体知识的行动等问题。这已经产生了许多不同作者的工作，例如Plaza（1989），Baltag（1999），Gerbrandy（1998），Van Ditmarsch（2000）和Kooi（2003）。例如，公共公告逻辑（Plaza 1989）包含一个形式为[ϕ]ψ的运算符，其中ϕ和ψ都是逻辑的公式，表示“在ϕ公告之后，ψ成立”。这种逻辑可以再次看作是一种动态逻辑，其中[ϕ]ψ的语义子句（非正式地）为：在模型-状态对中，[ϕ]ψ为真当且仅当该模型-状态对中ϕ的真值蕴含着该模型-状态对中ψ的真值，其中状态相同，但模型被转换以捕捉ϕ中包含的信息。在其他方法中，通过传达的信息引起的模型转换起着重要作用，尤其是Baltag等人关于行动模型（Baltag 1999，Baltag和Moss 2004）的方法。这种方法的一个典型要素是，在行动模型逻辑中，既有认知模型又有行动模型，并且通过认知行动（影响代理群体认知状态的行动）更新认知模型的表示为该认知模型和与该行动相关联的行动模型的（受限）模态积。（参见Van Ditmarsch等人2007年，第151页；这本书是该领域的最新综合参考资料。）

最后，我们提到了将博弈论概念纳入推理多代理系统的逻辑，例如博弈逻辑、联盟逻辑（Pauly 2001）和交替时态逻辑（ATL，我们在主流计算机科学部分的末尾也遇到过！）以及其认知变体ATEL（Van der Hoek和Wooldridge 2003，Van der Hoek等人2007）。例如，博弈逻辑是对PDL的扩展，用于推理所谓的确定性二人博弈。有趣的是，这些逻辑与我们在哲学中遇到的stit方法之间存在联系。例如，Broersen与Herzig和Troquard部分共同展示了多种联系，例如Coalition Logic和ATL在stit逻辑形式中的嵌入（Broersen等人2006a，b）以及stit（和ATL）的扩展，以便推理多代理系统的有趣属性（Broersen 2009，2010）。这个领域目前正在快速发展，也旨在应用于验证多代理系统（参见Van der Hoek等人2007），即Dastani等人2010年。后者在代理技术中仍然有些圣杯。一方面，有许多逻辑可以推理单个和多个代理，另一方面，正在构建需要验证的多代理系统。迄今为止，理论与实践之间仍然存在差距。正在进行大量工作，将讨论的代理逻辑与主流计算机科学的逻辑技术相结合，以验证分布式系统（来自第3节），但我们还没有达到那个目标...！

## 结论

在本文中，我们简要回顾了行动逻辑在哲学、语言学、计算机科学和人工智能领域的历史。尽管我们考虑的思想和技术是在这些独立的社区中独立发展的，但我们认为它们之间仍然存在着密切的联系。通过在本文中将它们结合起来，我们希望在这个有趣而重要的主题上为这些社区之间的交流做出了一些微小的贡献。


## Bibliography

- Alchourrón, C., Gärdenfors, P., and Makinson, D., 1985, “On the Logic of Theory Change: Partial Meet Contraction and Revision Functions”, *Journal of Symbolic Logic*, 50: 510–530.
- Aldewereld, H. M., Van der Hoek, W., and Meyer, J.-J. Ch., 2004, “Rational Teams: Logical Aspects of Multi-Agent Systems”, *Fundamenta Informaticae*, 63(2–3): 159–183.
- Alur, R., Henzinger, T., and Kupferman, O., 1998, “Alternating-time Temporal Logic”, in W.-P. de Roever, H. Langmaack and A. Pnueli (eds.), *Compositionality: The Significant Difference, Proceedings COMPOS-97* (Lecture Notes in Computer Science 1536), Berlin: Springer, pp. 23–60.
- Anderson, A. R., 1962, “Logic, norms, and roles”, *Ratio*, 4: 36–49.
- Audi, R. (ed.), 1999, *The Cambridge Dictionary of Philosophy*, Cambridge: Cambridge University Press.
- Austin, J. L., 1957, *How to Do Things with Words*, Oxford: Oxford University Press.
- Bakker, J. W. de, 1980, *Mathematical Theory of Program Correctness*, Englewood Cliffs, NJ: Prentice-Hall International.
- Balbiani, P., Baltag, A., van Ditmarsch, H., Herzig, A., Hosi, T. and de Lima, S., 2008, “‘Knowable’ as ‘Known After an Announcement’”, *The Review of Symbolic Logic*, 1: 305–334
- Baltag, A., 1999, “A Logic of Epistemic Actions”, in W. van der Hoek, J.-J. Meyer, and C. Witteveen (eds.), *Foundations and Applications of Collective Agent-Based Systems* (Proceedings of the Workshop at the 11th European Summer School in Logic, Language, and Computation, Utrecht, 1999).
- Baltag, A. and Moss, L. S., 2004, “Logics for Epistemic Programs”, *Synthese*, 139: 165–224.
- Belnap, N., Perloff, M., and Xu, M., 2001, *Facing the future*, Oxford: Oxford University Press.
- Bradfield, J. and Stirling, C., 2007, “Modal μ-calculi”, in P. Blackburn, J. F. A. K. van Benthem, and F. Wolter (eds.), *Handbook of Modal Logic*, Amsterdam: Elsevier, pp. 721–756.
- Bratman, M. E., 1987, *Intentions, Plans, and Practical Reason*, Cambridge, Massachusetts: Harvard University Press.
- Broersen, J.M., 2004, “Action Negation and Alternative Reductions for Dynamic Deontic Logics”, *Journal of Applied Logic*, 2(1): 153–168.
- –––, 2009, “A Complete STIT Logic for Knowledge and Action, and Some of Its Applications”, in M. Baldoni, T. Cao Son, M.B. van Riemsdijk and M. Winikoff (eds.), *Declarative Agent Languages and Technologies VI*, 6th International Workshop, DALT 2008, Estoril, Portugal, May 12, 2008, Revised Selected and Invited Papers: Springer, Berlin, pp. 47–59.
- –––, 2010, “CTL.STIT: enhancing ATL to express important multi-agent system verification properties”, in *Proceedings 9th International Conference on Autonomous Agents and Multiagent Systems*. New York: ACM Press, pp. 683–690.
- Broersen, J.M., Herzig, A. and Troquard, N., 2006a, “From Coalition Logic to STIT”, *Electronic Notes in Theoretical Computer Science*, 157(4): 23–35.
- –––, 2006b, “Embedding Alternating-time Temporal Logic in strategic STIT logic of agency”, *Journal of logic and computation*, 16: 559–578.
- Chellas, B. F., 1969, *The Logical Form of Imperatives*, Stanford, CA: Perry Lane Press.
- –––, 1980, *Modal Logic: An Introduction*, Cambridge and London: Cambridge University Press.
- Clark, Herbert H., 1996, *Using Language*, Cambridge University Press.
- Cohen, P. R. and Levesque, H. J., 1990, “Intention is Choice with Commitment”, *Artificial Intelligence*, 42(3): 213–261.
- Cohen, P. and Levesque, H., 1991, “Teamwork”, *Noûs*, 24(4): 487–512.
- Cousot, P., 1990, “Methods and Logic for Proving Programs”, in J. van Leeuwen (ed.), *Handbook of Theoretical Computer Science, Volume B: Formal Models and Semantics*, Amsterdam: Elsevier, pp. 841–993.
- Dastani, M.M., Hindriks, K.V. and Meyer, J.-J. Ch. (eds.), 2010, *Specification and Verification of Multi-Agent Systems*, New York/Dordrecht/Heidelberg/London: Springer.
- Davidson, D., 1967, “The Logical Form of Action Sentences”, in N. Rescher (ed.), *The Logic of Decision and Action*, Pittsburgh: University of Pittsburgh Press, pp. 81–120.
- Dennett, D. C., 1971, “Intentional Systems”, *Journal of Philosophy*, 68(4): 87–106.
- –––, 1984, “Cognitive Wheels: The Frame Problem of AI”, in C. Hookway (ed.), *Minds, Machines, and Evolution: Philosophical Studies*, Cambridge: Cambridge University Press.
- Dijkstra, E. W., 1976, *A Discipline of Programming*, Englewood Cliffs, NJ: Prentice-Hall.
- Dunin-Kȩplicz, B. and Verbrugge, R., 2002, “Collective Intentions”, *Fundamenta Informaticae*, 51(3): 271–295.
- Emerson, E. A., 1990, “Temporal and Modal Logic”, in J. van Leeuwen (ed.), *Handbook of Theoretical Computer Science, Volume B: Formal Models and Semantics*, Amsterdam: Elsevier, pp. 995–1072.
- Faller, M., Kaufmann, S., and Pauly, M. (eds.), 2000, *Formalizing the Dynamics of Information*, Stanford, CA: CSLI Publications.
- Fischer, M. J. and Ladner, R. E., 1977, “Propositional Modal Logic of Programs”, in *Proceedings of the 9th ACM Annual Symposium on Theory of Computing*, New York: Association for Computing Machinery, pp. 286–294.
- Fitch, F. B., 1963, “A logical analysis of some value concepts”, *Journal of Symbolic Logic*, 28: 135–142.
- Floyd, R. W., 1967, “Assigning Meanings to Programs”, in J. T. Swartz (ed.), *Proceedings Symposium in Applied Mathematics*, American Mathematical Society, pp. 19–32.
- Goldstein, H. H. and Neumann J. Von, 1963, “Planning and Coding Problems for an Electronic Computer Instrument”, in A. M. Taub (ed.), *John von Neumann Collected Works* (Vol. 5), Oxford: Pergamon Press, pp. 80–235.
- Groenendijk, J. and Stokhof, M., 1991, “Dynamic Predicate Logic”, *Linguistics and Philosophy*, 14: 39–100.
- Gärdenfors, P., 1988, *Knowledge in Flux*, Cambridge, Massachusetts: MIT Press.
- Gerbrandy, J. D., 1998, *Bisimulations on Planet Kripke*, Ph.D. Thesis, Amsterdam: University of Amsterdam.
- Harel, D., 1979, *First-Order Dynamic Logic*, Berlin: Springer-Verlag.
- –––, 1984, “Dynamic Logic”, in D. Gabbay and F. Guenthner (eds.), *Handbook of Philosophical Logic* (Vol. II), Dordrecht and Boston: Reidel, pp. 497–604.
- Harel, D., Kozen, D., and Tiuryn, J., 2000, *Dynamic Logic*, Cambridge, Massachusetts: MIT Press.
- Heim, I., 1983, “On the projection problem for presuppositions”, in M. Barlow, D. Flickinger and D. Westcoat (eds.), *Proceedings of the 2nd West Coast Conference on Formal Linguistics*, Stanford, CA: Stanford University, pp. 114–126.
- Hendricks, V. and J. Symons, J., 2006, “Epistemic Logic”, in *The Stanford Encyclopedia of Philosophy* (Spring 2009 Edition), Edward N. Zalta (ed.), URL = <[Epistemic Logic (Stanford Encyclopedia of Philosophy/Spring 2009 Edition)](https://plato.stanford.edu/archives/spr2009/entries/logic-epistemic/)>.
- Hennessy, M. and Milner, R., 1980, “On Observing Nondeterminism and Concurrency”, in *Proceedings ICALP ‘80* (Lecture Notes in Computer Science: 85), Berlin: Springer, pp. 295–309.
- Henry, D. P., 1967, *The Logic of St. Anselm*, Oxford: Oxford University Press.
- Hitchcock, P. and Park, D., 1972, “Induction Rules and Termination Proofs”, in M. Nivat (ed.), *Proceedings First International Colloquium on Automata, Languages and Programming*, Amsterdam: North-Holland, pp. 225–251.
- Hoare, C. A. R., 1969, “An Axiomatic Basis for Computer Programming”, *Communications of the ACM*, 12: 576–580.
- Horty, J. F., 2001, *Agency and Deontic Logic*, Oxford: Oxford University Press.
- Kamp, H., 1981, “A theory of truth and semantic representation”, in J. Groenendijk (ed.), *Formal Methods in the Study of Language*, Amsterdam: Mathematisch Centrum.
- Kanger, S., 1957, “New foundations for ethical theory”, Technical Report, Stockholm University; reprinted in R. Hilpinen (ed.), *Deontic Logic: Introductory and Systematic Readings*, D. Reidel: Dordrecht, 1971, pp. 36-58.
- –––, 1972, “Law and logic”, *Theoria*, 38: 105–132
- Kooi, B., 2003, *Knowledge, Chance, and Change*, Ph.D. Thesis, Groningen: University of Groningen.
- Kowalski, R. and Sergot, M., 1986, “A Logic-Based Calculus of Events”, *New Generation Computing*, 4: 67–95.
- Kozen, D., 1983, “Results on the Propositional μ-calculus”, *Theoretical Computer Science*, 27: 333–354.
- Kozen, D. and Tiuryn, J., 1990, “Logics of Programs”, in J. van Leeuwen (ed.), *Handbook of Theoretical Computer Science, Volume B: Formal Models and Semantics*, Amsterdam: Elsevier, pp. 789–840.
- Kracht, M., 1993, “Logic and Control: How They Determine the Behaviour of Presuppositions”, in J. van Eijck and A. Visser, (eds.), *Logic and Information Flow*, Cambridge, Massachusetts: MIT Press, pp. 89–111.
- Krifka, M., 1986, *Nominalreferenz und Zeitkonstitution. Zur Semantik von Massentermen*, Ph.D. Thesis, München, Universität München.
- –––, 1992, “Thematic Relations as Links between Nominal Reference and Temporal Constitution”, in I. Sag and A. Szaboclcsi (eds.), *Lexical Matters*, Stanford: Stanford University Press, pp. 29–53.
- Kvarnström, J. and Doherty, P., 2000, “TALplanner: A Temporal Logic-Based Forward-Chaining Planner”, *Annals of Mathematics and Artificial Intelligence*, 30: 119–169.
- Lamport, L., 1977, “Proving the Correctness of Multiprocess Programs”, *IEEE Transactions on Software Engineering*, SE-3(2): 125–143.
- Levesque, H. J., Cohen, P. R., and Nunes, J. H. T., 1990, “On Acting Together”, in *Proceedings AAAI ‘90*, pp. 94–99.
- Lindahl. L., 1977, *Position and Change: A Study in Law and Logic*, Dordrecht and Boston: Reidel.
- Lindström, S. and Segerberg, K., 2006, “Modal Logic and Philosophy”, in P. Blackburn, J. van Benthem, and F. Wolter (eds.), *Handbook of Modal Logic* (Studies in Logic and Practical Reasoning: 3), Amsterdam: Elsevier, pp. 1153–1218.
- McCarthy, J., 1963a, “Towards a Mathematical Science of Computation”, in C. M. Popplewell (ed.), *Proceedings of IFIP Congress ‘62*, Amsterdam: North-Holland, pp. 21–28.
- –––, 1963b, “Situations, Actions, and Causal Laws”, Technical Report Memo 2, Stanford University Artificial Intelligence Project, Stanford University; reprinted in M. Minsky (ed.), *Semantic Information Processing*, Cambridge, MA: MIT Press, 1968, pp. 410-417.
- –––, 1986, “Programs with Common Sense”, in M. L. Minsky (ed.), *Semantic Information Processing*, Cambridge, Massachusetts: MIT Press, pp. 403–418.
- McCarthy J. and Hayes, P. J., 1969, “Some Philosophical Problems from the Standpoint of Artificial Intelligence”, in B. Meltzer, D. Michie and M. Swann (eds.), *Machine Intelligence 4*, Edinburgh: Edinburgh University Press, pp. 463–502.
- Merin, A., 1994, “Algebra of elementary social acts”, in S. L. Tsohatzidis (ed.), *Foundations of Speech Act Theory: Philosophical and Linguistic Perspectives*, London: Routledge, pp. 234–264.
- Meyer, J.-J. Ch., 1985, *Programming Calculi Based on Fixed Point Transformations: Semantics and Applications*, Ph.D. Thesis, Amsterdam: Vrije Universiteit Amsterdam.
- –––, 1988, “A Different Approach to Deontic Logic: Deontic Logic Viewed as a Variant of Dynamic Logic”, *Notre Dame Journal of Formal Logic*, 29(1): 109–136.
- –––, 2000, “Dynamic Logic for Reasoning about Actions and Agents”, in J. Minker, (ed.), *Logic-Based Artificial Intelligence*, Boston and Dordrecht: Kluwer, pp. 281–311.
- –––, 2006, “Reasoning about Emotional Agents”, *International Journal of Intelligent Systems*, 21(6): 601–619.
- Meyer, J.-J. Ch. and Van der Hoek, W., 1995, *Epistemic Logic for AI and Computer Science*, Cambridge: Cambridge University Press.
- Meyer, J.-J. Ch., Van der Hoek, W., and Van Linder, B., 1999, “A Logical Approach to the Dynamics of Commitments”, *Artificial Intelligence*, 113: 1–40.
- Meyer, J.-J. Ch. and Veltman, F., 2007, “Intelligent Agents and Common Sense Reasoning”, in P. Blackburn, J. van Benthem and F. Wolter (eds.), *Handbook of Modal Logic*, Amsterdam: Elsevier, pp. 991–1029.
- Moens, M. and Steedman, M., 1988, “Temporal ontology and temporal reference”, *Computational Linguistics*, 14: 15–28.
- Moore, R. C., 1977, “Reasoning about Knowledge and Action”, in *Proceedings of the 5th International Joint Conference on Artificial Intelligence (IJCAI-77)*, Cambridge, Massachusetts: William Kaufmann, pp. 223–227.
- Muskens, R., van Benthem, J., and Visser, A., 1997, “Dynamics”, in J. van Benthem and A. ter Meulen (eds.), *Handbook of Logic and Language*, Amsterdam: Elsevier, pp. 587–648.
- Naumann, R., 2001, “Aspects of changes: a dynamic event semantics”, *Journal of Semantics*, 18: 27–81.
- Naur, P., 1966, “Proof of Algorithms by General Snapshots”, *BIT Numerical Mathematics*, 6: 310–316.
- Nilsson, N. J., 1998, *Artificial Intelligence: A New Synthesis*, San Francisco: Morgan Kaufmann.
- Park, D., 1976, “Finiteness is μ-ineffable”, *Theoretical Computer Science*, 3: 173–181.
- Parsons, T., 1990, *Events in the Semantics of English: A Study in Subatomic Semantics* (Current Studies in Linguistics: 19), Cambridge, Massachusetts: MIT Press.
- Pauly, M., 2001, *Logic for Social Software*, ILLC Dissertations Series, Amsterdam.
- Plaza, J. A., 1989, “Logics of Public Communication”, in M. L. Emlich, *et al*. (eds.), *Proceedings of the 4th International Symposium on Methodologies for Intelligent Systems*, Amsterdam: North-Holland Publishing, pp. 201–216.
- Pnueli, A., 1977, “The Temporal Logic of Programs”, in *Proceedings of the 18th Annual IEEE Symposium on Foundations of Computer Science*, Piscataway, New Jersey: IEEE, pp. 46–57.
- Pörn, I., 1977, *Action Theory and Social Science*, Dordrecht: Reidel.
- Pratt, V. R., 1976, “Semantical Considerations on Floyd-Hoare Logic”, in *Proceedings of the 17th Annual IEEE Symposium on Foundations of Computer Science*, New York: ACM, pp. 109–121.
- –––, 1979a, “Dynamic Logic”, in J. W. de Bakker and J. van Leeuwen (eds.), *Proceedings Foundations of Computer Science III* Mathematical Centre Tracts 108, Amsterdam: Mathematisch Centrum, pp. 53–82.
- –––, 1979b, “Process Logic: Preliminary Report”, in *Proceedings of the 6th Symposium on Principles of Programming Languages*, New York: ACM, pp. 93–100.
- Rao, A. S. and Georgeff, M. P., 1991, “Modeling rational agents within a BDI-architecture”, in J. Allen, R. Fikes and E. Sandewall (eds.), *Proceedings of the Second International Conference on Principles of Knowledge Representation and Reasoning (KR ‘91)*, San Francisco: Morgan Kaufmann, pp. 473–484.
- –––, 1998, “Decision Procedures for BDI Logics”, *Journal of Logic and Computation*, 8(3): 293–344.
- Reiter, R., 1980, “A Logic for Default Reasoning”, *Artificial Intelligence*, 13(1–2): 81–132.
- –––, 2001, *Knowledge in Action: Logical Foundations for Specifying and Implementing Dynamical Systems*, Cambridge, Massachusetts: MIT Press.
- Roever, W.-P. de, Boer, F. S. de, *et al.*, 2001, *Concurrency Verification: Introduction to Compositional and Noncompositional Methods*, Cambridge: Cambridge University Press.
- Russell, S. and Norvig, P., 1995, *Artificial Intelligence: A Modern Approach*, Englewood Cliffs, NJ: Prentice-Hall.
- Salwicki, A., 1970, “Formalized Algorithmic Languages”, *Bulletin de l’Académie Polonaise des Sciences* (Série des sciences mathématiques, astronomiques et physiques), 18(5): 227–232.
- Sandewall, E. and Shoham, Y., 1994, “Nonmonotonic Temporal Reasoning”, in D. M. Gabbay, C. J. Hogger and J. A. Robinson (eds.), *Handbook of Logic in Artificial Intelligence and Logic Programming, Volume 4: Epistemic and Temporal Reasoning*, Oxford: Oxford University Press.
- Scott, D. S. and Bakker, J. W. de, 1969, *A Theory of Programs*, Vienna: IBM.
- Searle, J. R., 1969, *Speech Acts: An Essay in the Philosophy of Language*, Cambridge: Cambridge University Press.
- Searle, J. R. and Vanderveken D., 1985, *Foundations of Illocutionary Logic*, Cambridge: Cambridge University Press.
- Segerberg, K., 1992, “Getting started: beginnings in the logic of action”, *Studia Logica*, 51: 347–378.
- –––, 1995, “Belief Revision from the Point of View of Doxastic Logic”, *Bulletin of the IGPL*, 3: 535–553.
- Shanahan, M., 1990, “Representing continuous change in the event calculus”, in *Proceedings of ECAI ’90*, pp. 598–603.
- –––, 1995, “A circumscriptive calculus of events”, *Artificial Intelligence*, 77: 249–284.
- Shoham, Y., 1993, “Agent-Oriented Programming”, *Artificial Intelligence*, 60(1): 51–92.
- Steunebrink, B., Dastani, M. and Meyer, J.-J. Ch., 2007, “A Logic of Emotions for Intelligent Agents”, in Holte, R. C. and Howe, A. E. (eds.), *Proceedings AAAI ‘07*, Vancouver: AAAI Press, pp. 142–147.
- Steunebrink, B.R., Dastani, M.M. and Meyer, J.-J. Ch., 2012, “A Formal Model of Emotion Triggers for BDI Agents with Achievement Goals”, Synthese/KRA 185 (1): 83–129 (KRA: 413–459).
- Thielscher, M., 2005, *Reasoning Robots, The Art and Science of Programming Robotic Agents*, Dordrecht: Springer.
- Thomason, R., 2003, “Logic and Artificial Intelligence”, in *The Stanford Encyclopedia of Philosophy* (Spring 2009 Edition), Edward N. Zalta (ed.), URL = <[Logic and Artificial Intelligence (Stanford Encyclopedia of Philosophy/Spring 2009 Edition)](https://plato.stanford.edu/archives/spr2009/entries/logic-ai/)>.
- Turing, A. M., 1949, “On Checking a Large Routine”, Report of a Conference on High-Speed Automatic Calculating Machines, Cambridge: University Mathematical Laboratory, pp. 67–69.
- van Benthem, J., 1989, “Semantic Parallels in Natural Language and Computation”, in H. D. Ebbinghaus, *et al*. (eds.), *Logic Colloquium ‘87*, Amsterdam: North-Holland, pp. 331–375.
- –––, 1994, “Logic and the Flow of Information”, in D. Prawitz, *et al*. (eds.), *Proceedings of the 9th International Congress of Logic, Methodology and Philosophy of Science*, Amsterdam: Elsevier.
- van der Hoek, W., van Linder, B., and Meyer, J.-J. Ch., 1998, “An Integrated Modal Approach to Rational Agents”, in M. Wooldridge and A. Rao (eds.), *Foundations of Rational Agency* (Applied Logic Series: 14), Dordrecht: Kluwer, pp. 133–168.
- van der Hoek, W. and Pauly, M., 2007, “Modal Logic for Games and Information”, in P. Blackburn, J. van Benthem, and F. Wolter (eds.), *Handbook of Modal Logic*, Amsterdam: Elsevier, pp. 1077–1148.
- van der Hoek, W., and Wooldridge, M. J., 2003, “Cooperation, Knowledge, and Time: Alternating-Time Temporal Epistemic Logic and Its Applications”, *Studia Logica*, 75(1): 125–157.
- van der Sandt, R. A., 1991, “Denial”, in *Papers from the 27th Regional Meetings of the Chicago Linguistic Society Meetings* (Volume 2: Parasession on Negation), Chicago Linguistics Society, pp. 331–344.
- van Ditmarsch, H. P., 2000, *Knowledge Games*, Ph.D. Thesis, Groningen: University of Groningen.
- van Ditmarsch, H., Van der Hoek, W., and Kooi, B., 2007, *Dynamic Epistemic Logic*, Dordrecht: Springer.
- van Eijck, J., 1994, “Presupposition failure: a comedy of errors”, *Formal Aspects of Computing*, 3: 766–787.
- van Lambalgen, M. and Hamm, F., 2005, *The Proper Treatment of Events*, Oxford: Blackwell.
- van Linder, B., Van der Hoek, W., and Meyer, J.-J. Ch., 1995, “Actions That Make You Change Your Mind”, in A. Laux and H. Wansing (eds.), *Knowledge and Belief in Philosophy and Artificial Intelligence*, Berlin: Akademie Verlag, pp. 103–146.
- Vanderveken, D., 1990, *Meaning and Speech Acts, Volume 1: Principles of Language Use*, Cambridge: Cambridge University Press.
- –––, 1991, *Meaning and Speech Acts, Volume 2: Formal Semantics of Success and Satisfaction*, Cambridge: Cambridge University Press.
- Veltman, F., 1985, *Logics for Conditionals*, Ph.D. Thesis, Amsterdam: University of Amsterdam.
- –––, 1996, “Defaults in Update Semantics”, *Journal of Philosophical Logic*, 25: 221–261.
- Vendler, Z., 1957, “Verbs and times”, *Philosophical Review*, 66: 143–160.
- Verkuyl, H., 1993, *A Theory of Aspectuality: The Interaction Between Temporal and Atemporal Structure*, Cambridge: Cambridge University Press.
- Walton, D., 1976, “St. Anselm and the logical syntax of agency”, *Franciscan Studies*, 36: 298–312.
- Wooldridge, M. J., 2000, *Reasoning about Rational Agents, Cambridge*, Massachusetts: MIT Press.
- –––, 2002, *An Introduction to MultiAgent Systems*, Chichester: Wiley.
- Wright, G. H. von, 1963, *Norm and Action: A Logical Inquiry*, London: Routledge & Kegan Paul.
- Xu, M., 1998, “Axioms for deliberative stit”, *Journal of Philosophical Logic*, 27: 505–552.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-action). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-action/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-action&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](http://philpapers.org/sep/logic-action/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[events](https://plato.stanford.edu/entries/events/) | [frame problem](https://plato.stanford.edu/entries/frame-problem/) | [logic: dynamic epistemic](https://plato.stanford.edu/entries/dynamic-epistemic/) | [logic: non-monotonic](https://plato.stanford.edu/entries/logic-nonmonotonic/) | [logic: propositional dynamic](https://plato.stanford.edu/entries/logic-dynamic/) | [logic: temporal](https://plato.stanford.edu/entries/logic-temporal/) | [semantics: dynamic](https://plato.stanford.edu/entries/dynamic-semantics/) | [situations: in natural language semantics](https://plato.stanford.edu/entries/situations-semantics/) | [speech acts](https://plato.stanford.edu/entries/speech-acts/)

[Copyright © 2013](https://plato.stanford.edu/info.html#c) by  
Krister Segerberg  
John-Jules Meyer  
[Marcus Kracht](http://wwwhomes.uni-bielefeld.de/mkracht/index-en.html)
