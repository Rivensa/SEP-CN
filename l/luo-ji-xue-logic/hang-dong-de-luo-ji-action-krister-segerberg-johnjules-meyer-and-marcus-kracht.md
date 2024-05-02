# 行动的逻辑 action (Krister Segerberg, John-Jules Meyer, and Marcus Kracht)

*首次发表于2009年3月31日；实质性修订于2013年4月2日。*

在本文中，我们提供了关于哲学、语言学、计算机科学和人工智能中行动逻辑的简要概述。行动逻辑是对行动进行形式化研究的学科，其中形式语言是主要的分析工具。

行动的概念对许多学科都具有重要意义：包括经济学在内的社会科学、包括历史和文学在内的人文学科、心理学、语言学、法律、计算机科学、人工智能，可能还有其他学科。在哲学中，由于其对认识论和尤其是伦理学的重要性，行动一直受到研究；而在过去几十年中，它甚至被研究为自身的目的。但是在行动逻辑中，行动以最抽象的方式进行研究。

行动逻辑起源于哲学。但它在语言学中也起到了一定的作用。目前，在计算机科学和人工智能中它具有重要意义。为了我们的目的，将这些发展的解释分开是很自然的。

---

## 1. 哲学中的行动逻辑

### 1.1 历史概述

已经圣安瑟姆（St. Anselm）以一种可以归类为逻辑的方式研究了行动的概念；如果他了解符号逻辑，他肯定会利用它（Henry 1967；Walton 1976）。在现代，该主题由 Alan Ross Anderson、Frederick B. Fitch、Stig Kanger 和 Georg Henrik von Wright 等人引入；Kanger 的工作由他的学生 Ingmar Pörn 和 Lars Lindahl 进一步发展。第一个明确的语义学解释是由 Brian F. Chellas（1969）提出的（有关更详细的解释，请参见 Segerberg 1992 或 Belnap 2001 中的迷你历史）。

如今，可以描述为逻辑行动的两个相当不同的理论群体存在。其中一个是 Nuel Belnap 及其许多合作者创造的 stit 理论（下一段将解释该术语）。另一个是动态逻辑。两者都与模态逻辑有关，但方式不同。stit 理论起源于模态逻辑的哲学传统。另一方面，动态逻辑是由计算机科学家发明的，用于分析计算机行动；只有事后才意识到它可以被视为一种非常普遍的模态逻辑。两者之间的一个重要区别是，在 stit 理论中（大部分情况下）不直接研究行动：本体论通常不承认行动或事件的范畴。但动态逻辑则不同。在哲学家中，这种本体论的宽容是不寻常的。赫克托-内里·卡斯塔涅达（Hector-Neri Castañeda）通过区分命题和实践提供了一个显著的例外。

本节讨论 stit 传统，下一节讨论动态逻辑。

### 1.2 stit 传奇

“stit”一词是基于“sees to it that”的首字母缩写。其思想是在普通的经典命题语言中添加一个新的命题运算符 stit，stitiϕ的解释是 i sees to it that ϕ。（Belnap 学派的官方符号更加繁琐：[istit:ϕ]。）注意，ϕ允许包含新运算符的嵌套。

为了为 stit 运算符 stit 开发形式化的意义条件，定义了一种语义。stit 框架有四个组成部分：一个集合 T，其节点称为时刻；一个 T 上的非自反树序<；一组代理；和一个选择函数 C。通过树的最大分支称为历史。

树（T，<）似乎对应于我们所有人熟悉的天真图像：一个时刻 m 是一个临时的现在；集合{n：n < m}对应于 m 的过去，这是唯一的；而集合{n：m < n}对应于 m 的开放未来，其中的每个特定的最大线性子集对应于一个特定的可能未来。

为了形式化行动的概念，从两个一般观察开始：

1. 通常一个代理人不能选择一个可能的未来成为唯一的实际未来，但是
2. 通过他的行动，他可以确保在他的行动之前可能存在的某些未来，在他的行动之后不再可能存在。

这就是选择函数 C 的作用：对于每个时刻 m 和代理人 i，C 产生了一个将所有通过 m 的历史集合 Hm 划分为不同部分的 Cmi。在 Cmi 中的等价类被称为选择单元。（注意，属于同一选择单元的两个历史在问题时刻之前是一致的，但不一定在之后一致。）如果 h 是通过 m 的历史，我们用 Cmi(h)表示 h 所属的选择单元。将 Cmi 与代理人 i 在 m 时刻可选择的行动集合相关联，并将选择单元 Cmi(h)视为与 h 相关联的行动。

stit 模型还有一个额外的组成部分：估值。估值在一个框架中，事实证明，是一个将变量和每个索引分配为 1（真）或 0（假）的函数，其中索引是由历史和历史上的时刻组成的有序对。现在可以定义相对于索引的公式的真值或假值。如果 V 是估值，我们有以下原子ϕ的基本真值条件：

(h,m)⊨ϕ当且仅当 V(ϕ,(h,m))=1。

布尔连接词的真值条件如预期的那样；例如，

(h,m)(h,m)⊨¬ϕ当且仅当(h,m)⊭ϕ，⊨ϕ∧ψ当且仅当(h,m)⊨ϕ且(h,m)⊨ψ。

让我们用[[ϕ]]m 表示集合{h∈Hm:(h,m)⊨ϕ}，即与 h 至少在 m 处一致且关于该历史和 m 的指数的ϕ为真的历史的集合。对于 stit 运算符的定义形式真值条件，至少有两种可能需要考虑：

1. (h,m)⊨stitiϕ当且仅当 Cmi(h)⊆[[ϕ]]m。
2. (h,m)⊨stitiϕ当且仅当 Cmi(h)⊆[[ϕ]]m 且[[ϕ]]m≠Hm。

为了区分这两个条件所定义的不同运算符，前者运算符被称为 Chellas stit，写作 cstit，而后者运算符被称为 deliberative stit，写作 dstit。

用文字来描述，对于索引(h,m)，如果在与 h 相同的选择单元 m 中的所有历史 h'上，ϕ相对于 h'和 m 是真的，则 cstitiϕ在该索引上为真；这被称为正条件。对于 dstitiϕ的真条件要求更严格；不仅必须满足正条件，还必须满足所谓的负条件：必须存在一些通过 m 的历史，使得ϕ相对于该历史和 m 不为真。

cstit 和 dstit 都被研究；据称它们捕捉到了“确保”的重要方面。如果引入“历史上必然”的概念，这两个运算符可以相互定义。使用□表示历史必然性，定义

(h,m)⊨□ϕ 当且仅当，对于所有的 h′∈Hm，(h′,m)⊨ϕ。

 然后，公式

dstitiϕcstitiϕ↔(cstitiϕ∧¬□ϕ) 和 ↔(dstitiϕ∨□ϕ)

在所有指标上都是真实的。

stit 理论的一个优点是，对个体行动的 stit 分析可以自然地扩展到团体行动。

stit 传统的一些最初的论文收录在 Belnap 2001 的卷中。John F. Horty 的著作（2001）是一部重要的后续作品。Ming Xu（1998）对 stit 的逻辑进行了公理化。

### 1.3 意图

迈克尔·布拉特曼（Michael Bratman）对意图概念的哲学分析对计算机科学中行动逻辑的发展产生了重要影响。下面将对此进行讨论。

### 1.4 特殊类型行动的逻辑

在一系列的论文中，Carlos Alchourrón、Peter Gärdenfors 和 David Makinson 创建了他们所称之为理论变化的逻辑，后来被称为 AGM 范式。他们的工作受到了两种特定类型的变化的启发：由于行动导致的变化（Alchourrón）和由于信念行动导致的变化（Gärdenfors 和在他之前的 Isaac Levi）。行动导致的变化的例子包括废除和修正（法律可以被废除或修正），而缩减和扩展是类似的信念行动（可以放弃信念，可以添加新的信念）。后来，这些行动的模态逻辑在动态义务逻辑、动态信念逻辑和动态认知逻辑的名称下得到了探索。（关于 AGM 的经典论文，请参见 AGM 1985。关于动态义务逻辑和动态信念逻辑的介绍，请参见 Lindström 和 Segerberg 2006。我们将在第 4 节中从人工智能领域的角度来讨论这个主题。）

## 2. 语言学中的行动逻辑

在语言学中，行动有两种方式起作用：一方面，话语是行动，另一方面，它们可以用来谈论行动。前者导致了言语行为的研究，这是语用学的一个分支，后者导致了行动报告语义的研究，因此具有明显的语义性质。除此之外，还有一种特殊类型的语义学，即动态语义学，其中意义被视为听者状态的变化，而不是状态描述。

### 2.1 行动言语

对言语行动的研究可以追溯到奥斯汀（1957 年）和西尔（1969 年）。两者都强调使用语言是为了执行某些行动。此外，并不仅仅是一个行动，而是一系列行动（奥斯汀本人将数量放在 103 数量级上）。他本人给出的分类涉及到现在不被视为独立科学的行动：仅仅是说出一个词（语言行为）或句子的行动是语音学（或音韵学）的一部分，这里只是边缘关注。相比之下，言示行动和言后行动一直是研究的对象。言示行动是通过使用该句子执行的语言行动；它本质上是沟通性的。相比之下，言后行动是需要周围社会背景才能成功的行动。例如，命名一艘船或给一个婴儿命名都是言后行动。句子“我在此宣布你们为夫妻”只有在特定明确的情况下才能使两个人结婚。根据定义，言后行动将我们带出了语言和沟通的领域。

西尔和范德韦肯（1985 年）发展了一种称为言示逻辑的言语行动逻辑。这在范德韦肯 1990 年和范德韦肯 1991 年得到了完善。早在弗雷格在他的《概念符号》中使用了符号“⊢ϕ”，其中ϕ表示一个命题，“⊢”表示判断符号。因此，“⊢ϕ”表示ϕ是可证明的，但⊢的其他解释也是可能的（伴随着不同的符号；例如，“⊨ϕ”表示ϕ在模型中为真，“⊣ϕ”表示ϕ是可反驳的，等等）。一个基本的言语行动的形式是 F(ϕ)，其中 F 表示言示点，ϕ表示一个命题。反过来，一个言示力由确切的七个元素来确定：

1. 一个观点，
2. 达成言语行为观点的方式，
3. 言语行为观点的强度程度，
4. 命题内容条件，
5. 准备条件，
6. 诚实条件，
7. 诚信条件的强度程度。

根据 Searle 和 Vanderveken（1985）的观点，确切地有五个要点：

* 断言的要点是陈述事物的实际情况。
* 承诺点是承诺说话者要做某事。
* 指示点是让其他人做事。
* 陈述点是通过说出来改变世界。
* 表达的要点是表达情感和态度。

对这个问题的后续处理往往忽视了早期方法的复杂性，因为它没有任何预测能力。特别难处理的是“力量”，例如。现代模型尝试使用更新模型代替（见下面的第 2.3 节）。Van der Sandt 1991 使用了一个包含三个不同板块的话语模型（每个发言人一个，以及一个共同的板块）。虽然每个发言人负责维护自己的板块，但只能通过彼此之间的交流来对共同的板块进行更改。Merin 1994 试图将操作简化为所谓的基本社交行为的顺序组合：主张、让步、否认和撤回。

发出一句话是一种行动。这种行动可能会产生各种后果，部分是有意的，部分是无意的。最近，人们开始关注话语作为行动嵌入在人类之间的更大互动方案中的事实（例如，Clark 1996）。最近还强调了一个重要方面，即通过发出一句话，我们可以改变整个代理群体的知识状态，参见 Balbiani 等人的 2008 年的研究。在公开宣布ϕ之后，ϕ成为整个群体的共同知识。这个想法为 Grice 的语用学问题带来了新的视角，其中某些言语行为只有在发言人和听话人之间共同知道某些事实时才能成功。通过一句话，发言人可以在这种共同知识不存在的情况下建立这种共同知识。

### 2.2 行动句

戴维森（1967）以现在广为人知的事件术语解释了行动句。基本思想是行动句具有形式（∃e）（⋯），其中 e 是一个关于行为的变量。例如，“布鲁图斯猛烈地刺杀了凯撒”被翻译为（忽略时态）（∃e）（stab（e，布鲁图斯，凯撒）∧violent（e））。这样可以捕捉到这个句子逻辑上蕴含布鲁图斯刺杀了凯撒的事实。这个思想在语言学中被广泛采用；此外，现在人们认为基本上所有动词都表示事件（帕森斯 1990）。因此，行动句是那些谈论特殊类型事件的句子，称为事件性。

文德勒（1957）将动词分为四组：

1. 状态（“知道”，“坐着”），
2. 行动（“跑”，“吃”），
3. 成就（“写信”，“建房子”），以及
4. 成就（“达到”，“到达”）。

Moens 和 Steedman（1988）添加了第五个类别：

5. 点（“闪光”，“爆发”）。

主要的分界线在于状态和其他事物之间。类型（b）-（e）都涉及到变化。这种划分在语言学理论中具有重要影响力；然而，研究主要集中在它与时态的关系上。值得注意的是，例如，类型（c）的动词可以与进行时连用，而类型（d）的动词则不能。为了解释这一点，Krifka 1986 年和 Krifka 1992 年引入了增量主题的概念。其思想是，任何事件都有一个潜在的活动，其进展可以使用事件的潜在参与者来衡量。例如，如果我写一封信，进展可以用字数来衡量。因此，在“我写一封信”中，信件就是增量主题，因为它定义了进展。这一思想的一种实现是 Verkuyl（1993）的时态理论。另一种实现变化概念的方法是将其转化为命题动态逻辑（参见 Naumann 2001）。Van Lambalgen 和 Hamm（2005）将 Shanahan（1990）的事件演算应用于事件描述。

### 2.3 动态语义学

认为命题不仅可以被视为状态描述，还可以被视为更新的观点已经被许多人独立提倡。将一个代理的可能状态视为一个理论（即，一个演绎闭合的句子集合）。那么，通过命题ϕ对理论 T 的更新是 T∪{ϕ}的演绎闭包。

Gärdenfors 1988 以特别关注信念修订的视角来提倡这一观点。Veltman 1985 则发展了条件句的更新观点。这个观点的一个优势在于可以解释为什么迷你对话“下雨了。可能不再下雨。”与“可能不再下雨。下雨了。”相比是不合适的。鉴于更新只对一致的理论是合适的，而“may ϕ”（带有认知“may”）简单地意味着“是一致的”（写作⬦ϕ），第一个是更新序列与ϕ和⬦¬ϕ。第二步导致了不一致，因为ϕ已经被添加了。在这种方法中，上下文的不断变化是至关重要的。

Heim 1983 尝试将这个想法应用于预设的处理。在 Heim 的提议中，一个句子有改变上下文的潜力，这就是为什么例如句子“如果 John 结婚了，他的妻子会很开心。”不预设 John 已经结婚的原因。也就是说，条件句的第二部分（“他的妻子会很开心”）是根据前提（“John 结婚了”）增加的上下文来评估的。当然，这是计算机语言中评估条件的标准方式。这个类比在 Van Eijck 1994 中得到了利用，也可以参考 Kracht 1993。

行动的想法在动态谓词逻辑（DPL，参见 Groenendijk 和 Stokhof 1991）中得到了进一步的发展，其中所有表达式都是动态解释的。这个语法的特定洞察力在于存在量词具有动态增长的范围。这最早是在 Kamp 1981 中注意到的，其中给出了一种基于中间表示的语义，即所谓的话语表示结构。Groenendijk 和 Stokhof 通过在公式的评估中引入动态性来替换这些结构，正如在动态逻辑（DL）中提出的那样。存在量词被翻译为 DL 的随机赋值“x←?”，其解释是赋值之间的关系集合：它是一组对对（β，γ）的集合，使得对于所有的 y≠x（符号β∼xγ），都有β（y）=γ（y）。句子“A man walks.”的翻译是

* (1)⟨x←?⟩man′(x)∧walk′(x)

这是一个命题，因此被解释为一个集合。然而，人们可以将动态性推得更低，并使所有的含义都成为关系性的。然后，“A man walks.”被“程序”解释为

* (2)x←?;man′(x)?;walk′(x)?

在这里，man′(x)?使用了测试构造器“?”：ϕ?是所有满足ϕ的⟨β,β⟩的集合。因此，整个程序(2)的含义也是一种赋值之间的关系。换句话说，它是所有满足β∼xγ且γ(x)行走且是一个人的所有对⟨β,γ⟩的集合 R。相比之下，(1)的含义是所有满足某个⟨β,γ⟩∈R 的β的集合。因此，存在量词具有“副作用”：通过不同变量上的量词，赋值的变化永远不会被撤销。因此，在存在量词的右侧是开放的。这解释了(1)中括号的缺失。有关动态语义的概述，请参见 Muskens 等人 1997 年的论文。

## 3. 计算机科学中的行动逻辑

行动的逻辑在计算机科学中起着重要的作用。一旦人们意识到计算机以某种编程语言编写的程序语句的形式执行行动，改变计算机内部，并通过与外部世界的接口，也改变了外部世界，这一点就变得明显。因此，行动的逻辑提供了一种推理程序的手段，更准确地说，是程序的执行和其效果。这使得人们能够证明程序的正确性。原则上，这是非常可取的：如果我们能够证明所有的软件都是正确的，我们就会知道它们会按照我们设计的方式正常运行。图灵（1949 年）和冯·诺伊曼（Goldstein 和冯·诺伊曼 1963 年）等计算机编程先驱已经意识到了这一点。当然，对于所有软件来说，这个理想在日常实践中建立起来太难了。验证是一项非平凡且耗时的工作，而且也存在理论上的限制。然而，由于替代方案只是通过实验性地大规模测试程序，无法百分之百保证正确性，因此它仍然是一个活跃的研究领域至今。

### 3.1 关于程序的推理

程序验证有着悠久的历史。自计算机及其编程问世以来，研究人员就开始思考分析程序的方法，以确保它们能够按照预期完成任务。在60年代，对程序正确性的真正数学理论的发展开始形成（de Bakker 1980, 466）。值得注意的是，约翰·麦卡锡的工作在这方面起到了重要作用，他也是我们在转向人工智能领域时将会遇到的人物，他区分并研究了诸如“状态”之类的基本概念（McCarthy 1963a）。这一方面导致了编程语言语义学的发展，另一方面也推动了Floyd（1967）、Naur（1966）、Hoare（1969）和Dijkstra（1976）在程序正确性方面的重大进展（de Bakker 1980）。Floyd和Naur使用了一种基本的逐步归纳原理和与程序点相关联的谓词来表达命令式程序的不变性属性（Cousot 1990, 859），这些程序由基本赋值语句（将算术表达式赋值给程序变量）构建，并可以通过顺序、条件和循环进行组合。虽然Floyd-Naur方法（称为归纳断言方法）通过逻辑的手段证明程序的正确性，但严格意义上来说它并不是一种逻辑。正确的程序逻辑之路由Hoare铺就，他的组合证明方法将Floyd-Naur方法转化为了一种真正的逻辑，即现在所称的Hoare逻辑。通过利用（命令式风格）程序的语法结构，Hoare能够将Floyd-Naur方法转化为一种真正的逻辑，其中断言被称为Hoare三元组，形式为{P}S{Q}，其中P和Q是一阶公式，S是如上所述的命令式编程语言中的程序语句。 执行语句 S 之前，如果 P 成立，则在 S 的终止时 Q 成立（执行 S 是否终止的问题可以在这个 Hoare 三元组的解读中有条件地（部分正确性）或无条件地（完全正确性）加入，从而产生不同的逻辑，参见 Harel 等人 2000 年）。为了给出 Hoare 风格逻辑的印象，我们在这里给出一个简单的编程语言的一些规则，该语言由对算术表达式的变量赋值组成，并包含顺序（;）、条件（IF）和循环（WHILE）组合。

{P}S1{Q},{Q}S2{R}{P}S1 ; S2{R}

{P∧B}S1{Q},{P∧¬B}S2{Q}{P}IFBTHENS1ELSES2{Q}

{P∧B}S{P}{P}当 BDOS{P∧¬B}

后来，普拉特和哈雷将霍尔逻辑推广为动态逻辑（Pratt 1976，Pratt 1979a，Harel 1979，Harel 1984，Kozen and Tiuryn 1990，Harel et al. 2000），人们意识到它实际上是一种模态逻辑，通过将程序 S 的输入-输出关系视为基于克里普克式语义的可达性关系。霍尔三元组{P}S{Q}在动态逻辑中变成了以下公式：P→[S]Q，其中[S]是与程序 S 的输入-输出关系相关联的模态盒子运算符（可达性关系）。命题版本的动态逻辑 PDL 由 Fischer 和 Ladner（1977）引入，并成为独立研究的重要课题。PDL 的关键公理是归纳公理。

[S∗](P%E2%86%92%5BS%5DP)→(P→[S∗]P)

其中∗代表迭代运算符，S∗表示程序 S 的任意（有限）次迭代。该公理表达了如果在 S 的任意次迭代后，S 的执行保持 P 的真实性，那么如果 P 在当前状态下为真，则在 S 的任意次迭代后，P 也将为真。Hennessy 和 Milner 引入了 PDL 的一种较弱形式，称为 HML，只有一个原子动作框和菱形以及命题连接词，用于推理并发进程，并特别分析进程等价性（Hennessy 和 Milner 1980）。

这里还值得一提的是，Dijkstra（1976）关于最弱前置条件演算与动态逻辑（以及 Hoare 的逻辑）非常相关。实际上，Dijkstra 所称的最弱自由前置条件，表示为 wlp(S,Q)，与动态逻辑中的框运算符相同：wlp(S,Q)=[S]Q，而他的最弱前置条件，表示为 wp(S,Q)，是该表达式的总正确性变体，意味着该表达式还蕴含了语句 S 的终止（Cousot 1990）。

后来人们意识到，动态逻辑的应用不仅限于程序验证或关于程序的推理。实际上，它构成了一种通用行动逻辑。Meyer 2000 中给出了动态逻辑的许多其他应用，包括行动逻辑（也见 Meyer 1988），关于数据库更新的推理，以及反射式架构等推理系统的语义。值得一提的是，Meyer 1988 中提出的将动态逻辑用于行动逻辑需要扩展行动语言，特别是添加“行动否定”运算符。这个运算符的相当有争议的性质引发了关于行动否定本身的研究（例如，Broersen 2004）。在下面，当我们指定智能代理时，我们还将遇到动态逻辑在人工智能中的应用。

到目前为止，这些逻辑对于推理关于应该终止并显示特定输入/输出行为的程序是足够的。然而，在七十年代末，人们意识到还有一些不属于这种类型的程序。反应式程序被设计为对理论上可能是无限的输入流做出反应，因此显示出理想的非终止行为。在这里，重要的不是输入输出行为，而是程序随时间的行为。因此，Pnueli（1977）提出了一种基于时间逻辑（即线性时间逻辑）的这种编程风格的程序推理方法。（由于反应性通常涉及并发或并行编程，时间逻辑通常与这种编程风格相关联。然而，值得注意的是，一系列的研究继续扩展了 Hoare 逻辑在并发程序中的使用（Lamport 1977，Cousot 1990，de Roever 等人 2001）。）线性时间逻辑通常具有下一个时间、总是（在未来）、有时（在未来）、直到和自从等时间运算符。

时间逻辑与动态逻辑和 Hoare 逻辑之间的一个有趣区别是，前者是文献中所称的内生逻辑，而后者是所谓的外生逻辑。如果程序在逻辑语言中是显式的，则逻辑是外生的，而对于内生逻辑则不是这样。在像时间逻辑这样的内生逻辑中，假设程序是固定的，并且被认为是逻辑解释的一部分（Harel 等人 2000，157）。外生逻辑是组合的，并且具有通过结构归纳进行分析的优势。后来，Pratt（1979b）试图将时间逻辑和动态逻辑融合到他所称的过程逻辑中，这是一种用于推理时间行为的外生逻辑。

目前，作为计算机科学中应用的时间逻辑领域已经发展成为一个完整的子领域，包括（半）自动推理和模型检测的技术和工具（参见 Emerson 1990）。还提出了基本线性时间模型的变体用于验证，例如分支时间逻辑（特别是 CTL（计算树逻辑）及其扩展 CTL*（Emerson 1990）），其中可以明确地推理（量化）关于非确定性计算中的替代路径的问题，并且最近还提出了 CTL 的扩展，称为交替时间逻辑（ATL），其中包含一种表达式，表示一组代理人具有共同策略以确保其论证，以推理所谓的开放系统。这些系统的行为也取决于其环境的行为，参见 Alur 等人 1998 年。

最后，我们提到了用于推理程序的其他替代逻辑，即固定点逻辑，其中典型的例子是所谓的μ-演算，可以追溯到 Scott 和 de Bakker（1969），并在 Hitchcock 和 Park 1972 年，Park 1976 年，de Bakker 1980 年和 Meyer 1985 年进一步发展。基本运算符是最小不动点运算符μ，用于捕捉迭代和递归：如果ϕ（X）是一个具有自由关系变量 X 的逻辑表达式，则表达式μXϕ（X）表示最小的 X，使得ϕ（X）=X，如果存在这样的 X。μ-演算的命题版本称为命题或模态μ-演算，包括命题构造→和 false，以及原子（动作）模态[a]和μ运算符，完全由命题模态逻辑加上公理ϕ[X/μXϕ]→μXϕ来公理化，其中ϕ[X/Y]表示将 X 替换为 Y 的表达式，以及规则

ϕ[X/ψ]→ψ{μXϕ→ψ}

(Kozen 1983, Bradfield and Stirling 2007)。这种逻辑被认为包含了 PDL（参见 Harel 等人 2000 年）。

## 4. 人工智能中的行动逻辑

在人工智能（AI）领域，目标是设计出能够智能行为的基于计算机的工件（旨在理解人类智能或仅仅制作智能计算机系统和程序）。为了实现这一目标，在 AI 领域有一种传统，即基于所有相关因素的符号表示来构建这些系统。这种传统被称为符号 AI 或“老派”AI（GOFAI）。在这种传统中，知识表示（KR）的子领域显然非常重要：自 AI 诞生以来，它就发挥着重要作用，并发展成为一个相当大的领域。 KR 中的一个重要领域是关于由系统自身或其环境中的参与者执行的行动的表示。当然，除了纯粹的表示之外，对行动的推理也很重要，因为在 KR 中，表示和对这些表示的推理被认为是密切相关的（有时也称为 KR＆R，知识表示和推理）。AI 中的另一个相关而较新的发展是基于（智能）代理的智能系统构建概念，这是一种自主行动的实体，其本质上在获得逻辑描述和规范时，行动逻辑起着至关重要的作用。

### 4.1 行动的表示和推理

如上所述，行动的表示和用于推理的形式化/逻辑对于人工智能特别是知识表示领域非常重要。在人工智能中，关于行动推理的文献中，一个主要的问题是所谓的框架问题的发现（McCarthy 和 Hayes 1969），这个问题比在主流计算机科学中更为突出。尽管像 Dennett（1984）这样的哲学家将这个问题概括为与行动相关的属性的相关性和显著性的一般问题，但问题的核心在于在人工智能中遇到的“常识”环境中，几乎不可能详细说明所关注的行动的所有影响以及所有非影响。例如，考虑一个行动，思考一下如果执行该行动会发生什么变化，以及什么不会发生变化——通常后者比前者更难产生，导致需要大量复杂的尝试来指定非影响。但是还存在相关性的问题：哪些方面与手头的问题相关；我们需要考虑哪些属性？特别是，这也涉及到行动的前提条件，以确保行动的成功执行。在常识环境中，这些条件是非常困难的，人们总是可以想到另一个应该纳入考虑的（前）条件。例如，要成功启动汽车的发动机，应该有充电的电池、足够的燃料，...，但还要考虑天气不要太冷，甚至要考虑手指有足够的力量能够转动起动钥匙，汽车中有发动机的存在，等等。在人工智能中，人们试图找到框架问题的解决方案，这与最小可能的规范有关。 虽然这个问题引发了所谓的可废除或非单调解决方案，比如默认值（“通常一辆汽车有一个发动机”），这本身引发了人工智能领域中一个全新的领域，称为非单调或常识推理，但这超出了本条目的范围（我们将感兴趣的读者转至本百科全书中的 Thomason（2003）的文章）。我们在这里专注于一种不依赖于非单调性的解决方案（直接）。

Reiter（2001）提出了一个（部分）解决方案，该解决方案在一个被称为情境演算的框架内，自从由人工智能的创始人之一 John McCarthy 提出以来，在知识表示领域，特别是在北美地区非常流行（McCarthy 1963b，McCarthy 1986）。情境演算是一种一阶逻辑的方言，具有一些轻微的二阶特征，特别设计用于推理行动。（它的一个独特特征是所谓的语义概念（如状态或可能世界）的再现，以及真值谓词）成为对象语言中的句法实体（“情境”）。）为了符合本条目的一致性和空间原因，我们将尝试在（一阶）动态逻辑中呈现 Reiter 的想法，或者说，在它的轻微扩展中。（我们需要行动变量来表示行动表达式，并且需要行动变量与行动（或者说行动表达式）之间的等式，以及对行动变量的（全称）量化。）

所谓 Reiter 对框架问题的解决方案假设了一个所谓的封闭系统，也就是说，一个系统中所有（相关的）行动和可变属性（在这种情况下通常称为“流变量”，以强调它们随时间的可变性）都是已知的。通过这个假设，可以以非常简洁和优雅的方式表达（非）变化作为执行行动的结果，以及检查前提条件以确保成功执行的问题，并将其称为所谓的后继状态公理的形式。

(∀A)[Poss(A)→(([A]f(x))↔(γ+f(x,A)∨(f(x)∧¬γ−f(x,A))))]

其中 A 是一个行动变量，γ+f(x,A)和γ−f(x,A)是不带行动模态的“简单”表达式，用于表示ϕ成为真和假的条件。因此，该公式可以非正式地解读为，在涉及到特定行动 A 的前提条件下，谓词 f 对参数 x 成为真当且仅当条件γ+f(x,A)成立或者 f(x)成立（在执行 A 之前），且条件γ−f(x,A)（会导致 f 成为假的条件）不成立。此外，在这样的公理中，表达式 Poss(A)被以示意的方式使用，整个行动理论应该与所谓的前提公理相补充，这些前提公理的形式为ϕA→Poss(A)，其中ϕA 是陈述实际执行 A 所需的实际前提条件。

为了看到这在实践中是如何运作的，我们考虑一个小例子，在这个领域中我们有一个可能被打破或不被打破的花瓶 v（因此我们有“打破”作为一个谓词），以及动作 drop 和 repair。我们还假设一个（不可改变的）谓词 fragile 和 held-in-hand 用于描述一个物体。现在，后继状态公理变为

(∀A)[Poss(A)→([A]broken(v)↔ ((A=drop(v)∧fragile(v))∨(broken(v)∧A≠repair(v))))]

作为前提公理，我们有持有(x)→Poss(drop(x))和 broken(x)→Poss(repair(x))。这个行动理论非常简洁：每个流畅性只需要一个后继状态公理，每个行动只需要一个前提公理。

最后，在本小节中，我们必须提及一些其他众所周知的关于行动和变化推理的方法。事件演算（Kowalski 和 Sergot 1986，Shanahan 1990，Shanahan 1995）和流畅演算（Thielscher 2005）是情境演算中行动的替代方法。读者还可以参考 Sandewall 和 Shoham 1994，了解历史和方法论问题以及与非单调推理的关系。这些思想已经导致了非常高效的规划系统（例如 TALplanner，Kvarnström 和 Doherty 2000）和编程机器人代理的实际方法（例如基于情境演算的 GOLOG 系列语言（Reiter 2001）和基于流畅演算的 FLUX（Thielscher 2005））。

### 4.2 智能代理的描述和规范

在过去的二十年中，智能代理的概念已经成为一个统一的概念，用来讨论人工智能的理论和实践（参见 Russell 和 Norvig 1995 年，Nilsson 1998 年）。简而言之，代理是显示智能/理性和自主性形式的软件实体。它们能够主动采取行动并做出决策，而无需人类用户的直接控制。在本小节中，我们将看到如何使用逻辑（行动逻辑）来描述/规范代理的（期望的）行为（参见 Wooldridge 2002 年）。首先，我们将重点放在单个代理上，然后转向具有多个代理的环境，称为多代理系统（MAS）甚至代理社会。

#### 4.2.1 单个代理方法

有趣的是，智能代理概念的起源可以追溯到哲学领域。

首先，智能代理概念与古典哲学传统中的实践推理直接相关，这一传统可以追溯到亚里士多德。在这里，人们关注以三段论的方式进行行动推理，例如以下来自 Audi 1999 年第 729 页的例子：

> 但愿我能行动。
> 慢跑是锻炼。
> 因此，我将去慢跑。

尽管这看起来像是亚里士多德传统的演绎三段论的形式，但仔细观察后发现，这个三段论并不是纯粹的逻辑推理。（结论并不是从前提中逻辑上推导出来的。）它实际上是代表了一个行动者的决策（去慢跑），这个决策基于行动者的心理态度，即他/她的信念（慢跑是锻炼）和欲望或目标（希望我锻炼）。因此，实践推理是指朝着行动的推理，即找出该做什么的过程，正如 Wooldridge（2000）所说。根据信念和欲望等心理状态来推理下一步该做什么的过程被称为思考。

Dennett（1971）提出了意向立场的概念：通过将实体视为一个理性的代理人，通过考虑其信念和欲望来解释其行为的策略。因此，它是对系统采取的所谓设计（功能性）立场的拟人化实例，与物理立场相对立。这种立场被证明在认知科学、生物学/行为学（与动物行为有关）以及思考人工代理人的起点上具有极大的影响力。

最后，最重要的是，哲学家 Michael Bratman（1987）的工作，虽然最初是针对人类代理人的，但奠定了 BDI 方法对人工代理人的基础。特别是，Bratman 提出了将意图的概念纳入描述代理人行为的论点。意图在选择所需的行动方面起着重要作用，并附带了对所选行动的明确承诺。除非有理由放弃承诺（例如相信意图已经实现或相信无法实现），否则代理人应该坚持/坚持承诺，坚持下去，试图实现它。

在布拉特曼的哲学理论发表之后，研究者们尝试使用逻辑手段对这一理论进行形式化。在这里我们提到了三种著名的方法。科恩和莱维斯克（1991）试图以线性时间风格的时间逻辑来捕捉布拉特曼的理论，他们添加了原始运算符来表示信念和目标，以及一些用于处理行动的运算符，例如用于表示即将执行的行动（HAPPENSα），刚刚执行完的行动（DONEα）以及原始行动的执行者是哪个代理人（ACTi α：代理人i是α的执行者）。从这个基本设置出发，他们建立了一个框架，最终通过其他概念来定义意图的概念。实际上，他们定义了两个概念：意图做某事和意图成为某种状态。首先，他们定义了成就目标（A-Goal）的概念：成就目标是一种在稍后成为目标的东西，但现在被认为不是真实的。然后，他们定义了持久目标（P-Goal）：持久目标是一个A-Goal，在被认为已经实现或被认为不可能之前不会被放弃。然后，行动的意图被定义为已经完成该行动的P-Goal，以一种使得代理人意识到该行动发生的方式。满足ϕ的状态的意图被定义为已经完成了某个导致ϕ结果的行动的P-Goal，代理人意识到导致ϕ发生的某些事情，实际发生的事情不是代理人明确没有作为目标的事情。

接下来是 Rao 和 Georgeff 使用分支时间逻辑 CTL 对 BDI 代理进行形式化(Rao 和 Georgeff 1991，Rao 和 Georgeff 1998，Wooldridge 2000)。在 CTL 的基础上，他们引入了用于信念(BEL)、目标(GOAL)（有时替换为欲望(DES)）和意图（to_be 类型的 INTEND）的模态运算符，以及用于讨论基本行动成功(succeded(e))和失败(failed)的运算符 e。因此，他们并不试图用其他概念来定义意图，而是将意图作为一个独立的运算符引入，其含义后来受到“合理”的公理的限制。形式语义基于 Kripke 模型，其中信念、目标和意图运算符之间存在世界之间的可达关系。然而，这里的可能世界是完整的时间树（模拟代理的各种行为），在这些时间树上，CTL 公式以通常的方式进行解释。接下来，他们提出了一些公理/公设，认为这些运算符之间的交互是合理的，并相应地限制逻辑模型，使得这些公理成为有效性。例如，他们提出了公式 GOAL(α)→BEL(α)和 INTEND(α)→GOAL(α)，对于某个类别的公式α，其中α=E(ψ)是一个典型的例子。这里，E 代表 CTL 中的存在路径量词。Rao 和 Georgeff 还展示了可以在他们的逻辑中表达承诺策略。例如，以下公式表示一个“专注承诺”的代理，它会一直保持对其意图的承诺，直到它相信已经实现了它或认为它是不可能的（这与 Cohen 和 Levesque 方法中对意图的定义非常接近）：

INTEND(A⬦ϕ)→(INTEND(A⬦ϕ)UNTIL(BEL(ϕ)∨¬BEL(E⬦ϕ)))

这里 A 代表 CTL 中的全程路径量词。

最后，Van Linder 等人提出了 KARO 方法（Van der Hoek 等人，1998 年，Meyer 等人，1999 年），该方法以动态逻辑为基础，而不是时态逻辑。首先构建一个核心，由命题动态逻辑的语言组成，增加了知识（K）、信念（B）和欲望（D）的模态运算符，以及表示执行行动能力的运算符（A）。然后，通过缩写（使用其他运算符的定义）来扩展语言，以获得一个完整的 BDI 类似逻辑。最重要的运算符有：

* 执行行动的机会（意味着存在一种方式可以执行该行动，导致下一个状态）
* 相对于一个断言，执行行动的实际可能性（能力和行动机会的合取，以及执行行动导致断言为真的陈述）
* 可以对一个断言进行行动（知道在手头的断言中具有实际可能性进行行动）
* 断言的可实现性（存在一个计划，即一系列原子行动，代理人在手头的断言中具有实际可能性执行）
* 目标与断言相关（断言是可取的，尚未成立，但可实现的）
* 可能意图对一个断言采取行动（表达代理人可以对他知道是他的目标的断言采取行动）

此外，该框架还具有特殊的行动 commit 和 uncommit 来控制代理人的承诺。这些行动的语义是，显然只有在有充分的理由时，代理人才能承诺一个行动α，即存在一个已知目标ϕ的可能意图α。此外，只要有某个可能的意图涉及α，代理人就不能取消对某个行动α的承诺，即只要有充分的理由承诺α，就不能取消对α的承诺。这导致在 KARO 中具有以下有效性：（这里 I(α,ϕ)表示可能意图运算符，Com(α)是表示代理人承诺行动α的运算符，类似于 Cohen 和 Levesque 在 1990 年的意图运算符 INTEND1。）

⊨I(α,ϕ)→⟨commit(α)⟩Com(α)⊨I(α,ϕ)→¬Auncommit(α)⊨Com(α)→⟨uncommit(α)⟩¬Com(α)⊨Com(α1 ; α2)→KCom(α1)∧K[α1]Com(α2)

非正式地说，这些公理表明以下内容：如果代理人可能意图实现某个目标的行动，那么它有机会承诺这个行动，之后它会被记录在议程上；只要代理人可能意图某个行动，它就无法取消承诺（这反映了一种承诺的持久性：只要议程上有一个计划有充分的理由，它就必须保留下来！）；如果代理人承诺了一个行动，它有机会取消承诺（但它可能没有能力这样做，参见前一个公理）；如果代理人承诺了一个由两个行动组成的序列，那么它知道自己承诺了第一个行动，并且它也知道在执行第一个行动之后，它将承诺第二个行动。

除了在BDI风格的代理逻辑传统中关注动机态度之外，KARO框架还提供了对认知和信念态度的广泛解释。这一点在Van Linder等人的1995年的工作中得到了最完整的阐述。这项工作涉及到人工智能和哲学之间的另一个研究领域，即动态认知逻辑，其根源可以追溯到哲学、语言学、计算机科学和人工智能！动态认知逻辑（DEL）是关于知识变化的逻辑；它不仅仅是关于一个特定的逻辑系统，而是关于一整个逻辑家族，允许我们指定代理的知识和信念的静态和动态方面（参见Van Ditmarsch等人的2007年的工作）。该领域结合了哲学的见解（关于信念修正，AGM风格（AGM 1985），正如我们在第1节中所看到的），语言学中的动态语义和语言哲学（正如我们在第2节中所看到的），通过使用动态逻辑对程序进行推理（正如我们在第3节中所看到的），以及人工智能中关于知识和行动如何相互影响的思想（Moore 1977）。更一般地说，我们可以看到van Benthem和他的同事们提倡的信息变化的逻辑分析的影响（van Benthem 1989，van Benthem 1994，Faller等人2000）。此外，Veltman对默认推理的更新语义（Veltman 1996）也可以看作是这一范式的一部分，而默认推理是人工智能中的一种重要推理方法（Reiter 1980，Russell和Norvig 1995）。

对于本条目的目的，有趣的是注意到采用的一般方法是将行动逻辑，即动态逻辑，应用于建模信息变化。这相当于一种方法，其中认知（或信念）更新被实体化为将认知/信念状态更改为代理的行动。因此，例如在Van Linder等人的1995年的论文中，我们遇到了诸如expand(ϕ)、contract(ϕ)、revise(ϕ)等行动，分别指的是扩展、收缩和修订自己对公式ϕ的信念。这些行动可以通过将它们放入动态逻辑的方框和菱形中进行推理，因此基本上使用了动态逻辑的扩展来推理这些更新。进一步显示这些行动满足AGM公设，因此这种方法可以被视为AGM框架的模态对应物。在精神上非常相似的是Segerberg（1995）关于动态信念逻辑（DDL）的工作，即信念变化的模态逻辑。在DDL中，引入了形式为[+ϕ]、[*ϕ]和[−ϕ]的模态运算符，具有非正式的含义：“在代理人通过ϕ扩展/修订/收缩其信念之后”，分别。结合“标准”的信念运算符B，其中Bϕ被解释为“ϕ在代理人的信念集中”，现在可以表达像[+ϕ]Bψ这样的属性，表示在通过ϕ扩展其信念之后，代理人相信ψ（也参见Hendricks和Symons 2006）。

最后，在这个小节中，我们提到了最近的工作，其中 KARO 形式主义被用作描述代理人认知行为的基础，超越了 BDI，即涉及情绪态度的方面（Meyer 2006，Steunebrink 等人 2007，Steunebrink 等人 2012）。这种方法的结果是，像 KARO 这样的表达性行动逻辑可以有效地用来描述特定信念和目标（“情绪引发”）引发的喜悦、满足、愤怒和懊悔等情绪，以及一旦引发，代理人的情绪状态如何影响其行为，特别是对下一步行动的决策。

#### 4.2.2 多代理方法

除了用于指定单个代理人态度的逻辑之外，还有关于描述多代理系统整体态度的工作。首先，我们提到了 Cohen＆Levesque 在这方面的工作（Levesque 等人 1990，Cohen 和 Levesque 1991）。这项工作对 KARO 的多代理版本（Aldewereld 等人 2004）产生了重大影响。在联合目标的概念中，一个重要的复杂性涉及目标的持久性：在单个代理人的情况下，代理人追求其目标，直到它相信已经实现了目标或者相信永远无法实现。而在多个代理人的情况下，意识到这一点的代理人必须通知团队中的其他成员，以便整个团队相信这是事实，并可能放弃该目标。这一点在上述方法中得到了体现。相关工作，虽然不是严格意义上的行动逻辑，但涉及到集体意图的逻辑处理（Keplicz 和 Verbrugge 2002）。

在这里还必须提到，受到DEL和DDL所描述的个体代理的知识和信念更新工作以及关于代理群体中的知识的研究（例如，Meyer和Van der Hoek 1995），涌现出了一个全新的子领域，可以看作是动态认知逻辑的多代理（对应）部分。这涉及到公共公告逻辑以及对代理群体知识产生影响的更一般的行动等问题。这已经产生了许多不同作者的研究，例如Plaza（1989），Baltag（1999），Gerbrandy（1998），Van Ditmarsch（2000）和Kooi（2003）。例如，公共公告逻辑（Plaza 1989）包含一个形式为[ϕ]ψ的运算符，其中ϕ和ψ都是逻辑的公式，表示“在公告ϕ之后，ψ成立”。这种逻辑可以再次看作是一种动态逻辑，其中[ϕ]ψ的语义子句（非正式地）为：在模型-状态对中，[ϕ]ψ为真当且仅当在该模型-状态对中，ϕ的真值蕴含着ψ的真值，其中状态相同，但模型被转换以捕捉ϕ中包含的信息。在其他方法中，通过传达的信息引起的模型转换也起着重要作用，尤其是Baltag等人关于行动模型的方法（Baltag 1999，Baltag和Moss 2004）。这种方法的一个典型要素是，在行动模型逻辑中，既有认知模型又有行动模型，并且通过认知行动（影响代理群体认知状态的行动）更新认知模型的表示为该认知模型和与该行动相关的行动模型的（受限）模态乘积。（参见Van Ditmarsch等人2007年，第151页；这本书是该领域的最新综合参考资料。）

最后，我们提到了将博弈论概念纳入逻辑推理多智能体系统的逻辑，例如博弈逻辑、联盟逻辑（Pauly 2001）和交替时态逻辑（ATL，我们在主流计算机科学部分的末尾也遇到过！），以及其认识论变体 ATEL（Van der Hoek 和 Wooldridge 2003，Van der Hoek 等人 2007）。例如，博弈逻辑是 PDL 的扩展，用于推理所谓的确定性二人博弈。有趣的是，这些逻辑与我们在哲学中遇到的 stit 方法之间存在联系。例如，Broersen 与 Herzig 和 Troquard 部分共同展示了多个连接，例如 Coalition Logic 和 ATL 在 stit 逻辑形式中的嵌入（Broersen 等人 2006a，b）以及 stit（和 ATL）的扩展，以满足对多智能体系统的有趣属性进行推理（Broersen 2009, 2010）。这个领域目前正在快速发展，也旨在应用于验证多智能体系统（参见 Van der Hoek 等人 2007），即 Dastani 等人 2010。后者在代理技术中仍然有些圣杯。一方面，有许多逻辑可以推理单个和多个代理，另一方面，正在构建需要验证的多智能体系统。迄今为止，理论与实践之间仍然存在差距。正在进行大量工作，将讨论的代理逻辑与主流计算机科学的逻辑技术相结合，以验证分布式系统（来自第 3 节），但我们还没有达到那个程度...！

## 结论

在本篇中，我们简要回顾了行动逻辑在哲学、语言学、计算机科学和人工智能领域的历史。尽管我们考虑的思想和技术是在这些独立的社群中以相当独立的方式发展起来的，但我们认为它们仍然密切相关。通过在本篇中将它们结合起来，我们希望在这个有趣而重要的主题上为这些社群之间的交叉授粉做出了一些谦逊的贡献。

## Bibliography

* Alchourrón, C., Gärdenfors, P., and Makinson, D., 1985, “On the Logic of Theory Change: Partial Meet Contraction and Revision Functions”, *Journal of Symbolic Logic*, 50: 510–530.
* Aldewereld, H. M., Van der Hoek, W., and Meyer, J.-J. Ch., 2004, “Rational Teams: Logical Aspects of Multi-Agent Systems”, *Fundamenta Informaticae*, 63(2–3): 159–183.
* Alur, R., Henzinger, T., and Kupferman, O., 1998, “Alternating-time Temporal Logic”, in W.-P. de Roever, H. Langmaack and A. Pnueli (eds.), *Compositionality: The Significant Difference, Proceedings COMPOS-97* (Lecture Notes in Computer Science 1536), Berlin: Springer, pp. 23–60.
* Anderson, A. R., 1962, “Logic, norms, and roles”, *Ratio*, 4: 36–49.
* Audi, R. (ed.), 1999, *The Cambridge Dictionary of Philosophy*, Cambridge: Cambridge University Press.
* Austin, J. L., 1957, *How to Do Things with Words*, Oxford: Oxford University Press.
* Bakker, J. W. de, 1980, *Mathematical Theory of Program Correctness*, Englewood Cliffs, NJ: Prentice-Hall International.
* Balbiani, P., Baltag, A., van Ditmarsch, H., Herzig, A., Hosi, T. and de Lima, S., 2008, “‘Knowable’ as ‘Known After an Announcement’”, *The Review of Symbolic Logic*, 1: 305–334
* Baltag, A., 1999, “A Logic of Epistemic Actions”, in W. van der Hoek, J.-J. Meyer, and C. Witteveen (eds.), *Foundations and Applications of Collective Agent-Based Systems* (Proceedings of the Workshop at the 11th European Summer School in Logic, Language, and Computation, Utrecht, 1999).
* Baltag, A. and Moss, L. S., 2004, “Logics for Epistemic Programs”, *Synthese*, 139: 165–224.
* Belnap, N., Perloff, M., and Xu, M., 2001, *Facing the future*, Oxford: Oxford University Press.
* Bradfield, J. and Stirling, C., 2007, “Modal μ-calculi”, in P. Blackburn, J. F. A. K. van Benthem, and F. Wolter (eds.), *Handbook of Modal Logic*, Amsterdam: Elsevier, pp. 721–756.
* Bratman, M. E., 1987, *Intentions, Plans, and Practical Reason*, Cambridge, Massachusetts: Harvard University Press.
* Broersen, J.M., 2004, “Action Negation and Alternative Reductions for Dynamic Deontic Logics”, *Journal of Applied Logic*, 2(1): 153–168.
* –––, 2009, “A Complete STIT Logic for Knowledge and Action, and Some of Its Applications”, in M. Baldoni, T. Cao Son, M.B. van Riemsdijk and M. Winikoff (eds.), *Declarative Agent Languages and Technologies VI*, 6th International Workshop, DALT 2008, Estoril, Portugal, May 12, 2008, Revised Selected and Invited Papers: Springer, Berlin, pp. 47–59.
* –––, 2010, “CTL.STIT: enhancing ATL to express important multi-agent system verification properties”, in *Proceedings 9th International Conference on Autonomous Agents and Multiagent Systems*. New York: ACM Press, pp. 683–690.
* Broersen, J.M., Herzig, A. and Troquard, N., 2006a, “From Coalition Logic to STIT”, *Electronic Notes in Theoretical Computer Science*, 157(4): 23–35.
* –––, 2006b, “Embedding Alternating-time Temporal Logic in strategic STIT logic of agency”, *Journal of logic and computation*, 16: 559–578.
* Chellas, B. F., 1969, *The Logical Form of Imperatives*, Stanford, CA: Perry Lane Press.
* –––, 1980, *Modal Logic: An Introduction*, Cambridge and London: Cambridge University Press.
* Clark, Herbert H., 1996, *Using Language*, Cambridge University Press.
* Cohen, P. R. and Levesque, H. J., 1990, “Intention is Choice with Commitment”, *Artificial Intelligence*, 42(3): 213–261.
* Cohen, P. and Levesque, H., 1991, “Teamwork”, *Noûs*, 24(4): 487–512.
* Cousot, P., 1990, “Methods and Logic for Proving Programs”, in J. van Leeuwen (ed.), *Handbook of Theoretical Computer Science, Volume B: Formal Models and Semantics*, Amsterdam: Elsevier, pp. 841–993.
* Dastani, M.M., Hindriks, K.V. and Meyer, J.-J. Ch. (eds.), 2010, *Specification and Verification of Multi-Agent Systems*, New York/Dordrecht/Heidelberg/London: Springer.
* Davidson, D., 1967, “The Logical Form of Action Sentences”, in N. Rescher (ed.), *The Logic of Decision and Action*, Pittsburgh: University of Pittsburgh Press, pp. 81–120.
* Dennett, D. C., 1971, “Intentional Systems”, *Journal of Philosophy*, 68(4): 87–106.
* –––, 1984, “Cognitive Wheels: The Frame Problem of AI”, in C. Hookway (ed.), *Minds, Machines, and Evolution: Philosophical Studies*, Cambridge: Cambridge University Press.
* Dijkstra, E. W., 1976, *A Discipline of Programming*, Englewood Cliffs, NJ: Prentice-Hall.
* Dunin-Kȩplicz, B. and Verbrugge, R., 2002, “Collective Intentions”, *Fundamenta Informaticae*, 51(3): 271–295.
* Emerson, E. A., 1990, “Temporal and Modal Logic”, in J. van Leeuwen (ed.), *Handbook of Theoretical Computer Science, Volume B: Formal Models and Semantics*, Amsterdam: Elsevier, pp. 995–1072.
* Faller, M., Kaufmann, S., and Pauly, M. (eds.), 2000, *Formalizing the Dynamics of Information*, Stanford, CA: CSLI Publications.
* Fischer, M. J. and Ladner, R. E., 1977, “Propositional Modal Logic of Programs”, in *Proceedings of the 9th ACM Annual Symposium on Theory of Computing*, New York: Association for Computing Machinery, pp. 286–294.
* Fitch, F. B., 1963, “A logical analysis of some value concepts”, *Journal of Symbolic Logic*, 28: 135–142.
* Floyd, R. W., 1967, “Assigning Meanings to Programs”, in J. T. Swartz (ed.), *Proceedings Symposium in Applied Mathematics*, American Mathematical Society, pp. 19–32.
* Goldstein, H. H. and Neumann J. Von, 1963, “Planning and Coding Problems for an Electronic Computer Instrument”, in A. M. Taub (ed.), *John von Neumann Collected Works* (Vol. 5), Oxford: Pergamon Press, pp. 80–235.
* Groenendijk, J. and Stokhof, M., 1991, “Dynamic Predicate Logic”, *Linguistics and Philosophy*, 14: 39–100.
* Gärdenfors, P., 1988, *Knowledge in Flux*, Cambridge, Massachusetts: MIT Press.
* Gerbrandy, J. D., 1998, *Bisimulations on Planet Kripke*, Ph.D. Thesis, Amsterdam: University of Amsterdam.
* Harel, D., 1979, *First-Order Dynamic Logic*, Berlin: Springer-Verlag.
* –––, 1984, “Dynamic Logic”, in D. Gabbay and F. Guenthner (eds.), *Handbook of Philosophical Logic* (Vol. II), Dordrecht and Boston: Reidel, pp. 497–604.
* Harel, D., Kozen, D., and Tiuryn, J., 2000, *Dynamic Logic*, Cambridge, Massachusetts: MIT Press.
* Heim, I., 1983, “On the projection problem for presuppositions”, in M. Barlow, D. Flickinger and D. Westcoat (eds.), *Proceedings of the 2nd West Coast Conference on Formal Linguistics*, Stanford, CA: Stanford University, pp. 114–126.
* Hendricks, V. and J. Symons, J., 2006, “Epistemic Logic”, in *The Stanford Encyclopedia of Philosophy* (Spring 2009 Edition), Edward N. Zalta (ed.), URL = <[Epistemic Logic (Stanford Encyclopedia of Philosophy/Spring 2009 Edition)](https://plato.stanford.edu/archives/spr2009/entries/logic-epistemic/)>.
* Hennessy, M. and Milner, R., 1980, “On Observing Nondeterminism and Concurrency”, in *Proceedings ICALP ‘80* (Lecture Notes in Computer Science: 85), Berlin: Springer, pp. 295–309.
* Henry, D. P., 1967, *The Logic of St. Anselm*, Oxford: Oxford University Press.
* Hitchcock, P. and Park, D., 1972, “Induction Rules and Termination Proofs”, in M. Nivat (ed.), *Proceedings First International Colloquium on Automata, Languages and Programming*, Amsterdam: North-Holland, pp. 225–251.
* Hoare, C. A. R., 1969, “An Axiomatic Basis for Computer Programming”, *Communications of the ACM*, 12: 576–580.
* Horty, J. F., 2001, *Agency and Deontic Logic*, Oxford: Oxford University Press.
* Kamp, H., 1981, “A theory of truth and semantic representation”, in J. Groenendijk (ed.), *Formal Methods in the Study of Language*, Amsterdam: Mathematisch Centrum.
* Kanger, S., 1957, “New foundations for ethical theory”, Technical Report, Stockholm University; reprinted in R. Hilpinen (ed.), *Deontic Logic: Introductory and Systematic Readings*, D. Reidel: Dordrecht, 1971, pp. 36-58.
* –––, 1972, “Law and logic”, *Theoria*, 38: 105–132
* Kooi, B., 2003, *Knowledge, Chance, and Change*, Ph.D. Thesis, Groningen: University of Groningen.
* Kowalski, R. and Sergot, M., 1986, “A Logic-Based Calculus of Events”, *New Generation Computing*, 4: 67–95.
* Kozen, D., 1983, “Results on the Propositional μ-calculus”, *Theoretical Computer Science*, 27: 333–354.
* Kozen, D. and Tiuryn, J., 1990, “Logics of Programs”, in J. van Leeuwen (ed.), *Handbook of Theoretical Computer Science, Volume B: Formal Models and Semantics*, Amsterdam: Elsevier, pp. 789–840.
* Kracht, M., 1993, “Logic and Control: How They Determine the Behaviour of Presuppositions”, in J. van Eijck and A. Visser, (eds.), *Logic and Information Flow*, Cambridge, Massachusetts: MIT Press, pp. 89–111.
* Krifka, M., 1986, *Nominalreferenz und Zeitkonstitution. Zur Semantik von Massentermen*, Ph.D. Thesis, München, Universität München.
* –––, 1992, “Thematic Relations as Links between Nominal Reference and Temporal Constitution”, in I. Sag and A. Szaboclcsi (eds.), *Lexical Matters*, Stanford: Stanford University Press, pp. 29–53.
* Kvarnström, J. and Doherty, P., 2000, “TALplanner: A Temporal Logic-Based Forward-Chaining Planner”, *Annals of Mathematics and Artificial Intelligence*, 30: 119–169.
* Lamport, L., 1977, “Proving the Correctness of Multiprocess Programs”, *IEEE Transactions on Software Engineering*, SE-3(2): 125–143.
* Levesque, H. J., Cohen, P. R., and Nunes, J. H. T., 1990, “On Acting Together”, in *Proceedings AAAI ‘90*, pp. 94–99.
* Lindahl. L., 1977, *Position and Change: A Study in Law and Logic*, Dordrecht and Boston: Reidel.
* Lindström, S. and Segerberg, K., 2006, “Modal Logic and Philosophy”, in P. Blackburn, J. van Benthem, and F. Wolter (eds.), *Handbook of Modal Logic* (Studies in Logic and Practical Reasoning: 3), Amsterdam: Elsevier, pp. 1153–1218.
* McCarthy, J., 1963a, “Towards a Mathematical Science of Computation”, in C. M. Popplewell (ed.), *Proceedings of IFIP Congress ‘62*, Amsterdam: North-Holland, pp. 21–28.
* –––, 1963b, “Situations, Actions, and Causal Laws”, Technical Report Memo 2, Stanford University Artificial Intelligence Project, Stanford University; reprinted in M. Minsky (ed.), *Semantic Information Processing*, Cambridge, MA: MIT Press, 1968, pp. 410-417.
* –––, 1986, “Programs with Common Sense”, in M. L. Minsky (ed.), *Semantic Information Processing*, Cambridge, Massachusetts: MIT Press, pp. 403–418.
* McCarthy J. and Hayes, P. J., 1969, “Some Philosophical Problems from the Standpoint of Artificial Intelligence”, in B. Meltzer, D. Michie and M. Swann (eds.), *Machine Intelligence 4*, Edinburgh: Edinburgh University Press, pp. 463–502.
* Merin, A., 1994, “Algebra of elementary social acts”, in S. L. Tsohatzidis (ed.), *Foundations of Speech Act Theory: Philosophical and Linguistic Perspectives*, London: Routledge, pp. 234–264.
* Meyer, J.-J. Ch., 1985, *Programming Calculi Based on Fixed Point Transformations: Semantics and Applications*, Ph.D. Thesis, Amsterdam: Vrije Universiteit Amsterdam.
* –––, 1988, “A Different Approach to Deontic Logic: Deontic Logic Viewed as a Variant of Dynamic Logic”, *Notre Dame Journal of Formal Logic*, 29(1): 109–136.
* –––, 2000, “Dynamic Logic for Reasoning about Actions and Agents”, in J. Minker, (ed.), *Logic-Based Artificial Intelligence*, Boston and Dordrecht: Kluwer, pp. 281–311.
* –––, 2006, “Reasoning about Emotional Agents”, *International Journal of Intelligent Systems*, 21(6): 601–619.
* Meyer, J.-J. Ch. and Van der Hoek, W., 1995, *Epistemic Logic for AI and Computer Science*, Cambridge: Cambridge University Press.
* Meyer, J.-J. Ch., Van der Hoek, W., and Van Linder, B., 1999, “A Logical Approach to the Dynamics of Commitments”, *Artificial Intelligence*, 113: 1–40.
* Meyer, J.-J. Ch. and Veltman, F., 2007, “Intelligent Agents and Common Sense Reasoning”, in P. Blackburn, J. van Benthem and F. Wolter (eds.), *Handbook of Modal Logic*, Amsterdam: Elsevier, pp. 991–1029.
* Moens, M. and Steedman, M., 1988, “Temporal ontology and temporal reference”, *Computational Linguistics*, 14: 15–28.
* Moore, R. C., 1977, “Reasoning about Knowledge and Action”, in *Proceedings of the 5th International Joint Conference on Artificial Intelligence (IJCAI-77)*, Cambridge, Massachusetts: William Kaufmann, pp. 223–227.
* Muskens, R., van Benthem, J., and Visser, A., 1997, “Dynamics”, in J. van Benthem and A. ter Meulen (eds.), *Handbook of Logic and Language*, Amsterdam: Elsevier, pp. 587–648.
* Naumann, R., 2001, “Aspects of changes: a dynamic event semantics”, *Journal of Semantics*, 18: 27–81.
* Naur, P., 1966, “Proof of Algorithms by General Snapshots”, *BIT Numerical Mathematics*, 6: 310–316.
* Nilsson, N. J., 1998, *Artificial Intelligence: A New Synthesis*, San Francisco: Morgan Kaufmann.
* Park, D., 1976, “Finiteness is μ-ineffable”, *Theoretical Computer Science*, 3: 173–181.
* Parsons, T., 1990, *Events in the Semantics of English: A Study in Subatomic Semantics* (Current Studies in Linguistics: 19), Cambridge, Massachusetts: MIT Press.
* Pauly, M., 2001, *Logic for Social Software*, ILLC Dissertations Series, Amsterdam.
* Plaza, J. A., 1989, “Logics of Public Communication”, in M. L. Emlich, *et al*. (eds.), *Proceedings of the 4th International Symposium on Methodologies for Intelligent Systems*, Amsterdam: North-Holland Publishing, pp. 201–216.
* Pnueli, A., 1977, “The Temporal Logic of Programs”, in *Proceedings of the 18th Annual IEEE Symposium on Foundations of Computer Science*, Piscataway, New Jersey: IEEE, pp. 46–57.
* Pörn, I., 1977, *Action Theory and Social Science*, Dordrecht: Reidel.
* Pratt, V. R., 1976, “Semantical Considerations on Floyd-Hoare Logic”, in *Proceedings of the 17th Annual IEEE Symposium on Foundations of Computer Science*, New York: ACM, pp. 109–121.
* –––, 1979a, “Dynamic Logic”, in J. W. de Bakker and J. van Leeuwen (eds.), *Proceedings Foundations of Computer Science III* Mathematical Centre Tracts 108, Amsterdam: Mathematisch Centrum, pp. 53–82.
* –––, 1979b, “Process Logic: Preliminary Report”, in *Proceedings of the 6th Symposium on Principles of Programming Languages*, New York: ACM, pp. 93–100.
* Rao, A. S. and Georgeff, M. P., 1991, “Modeling rational agents within a BDI-architecture”, in J. Allen, R. Fikes and E. Sandewall (eds.), *Proceedings of the Second International Conference on Principles of Knowledge Representation and Reasoning (KR ‘91)*, San Francisco: Morgan Kaufmann, pp. 473–484.
* –––, 1998, “Decision Procedures for BDI Logics”, *Journal of Logic and Computation*, 8(3): 293–344.
* Reiter, R., 1980, “A Logic for Default Reasoning”, *Artificial Intelligence*, 13(1–2): 81–132.
* –––, 2001, *Knowledge in Action: Logical Foundations for Specifying and Implementing Dynamical Systems*, Cambridge, Massachusetts: MIT Press.
* Roever, W.-P. de, Boer, F. S. de, *et al.*, 2001, *Concurrency Verification: Introduction to Compositional and Noncompositional Methods*, Cambridge: Cambridge University Press.
* Russell, S. and Norvig, P., 1995, *Artificial Intelligence: A Modern Approach*, Englewood Cliffs, NJ: Prentice-Hall.
* Salwicki, A., 1970, “Formalized Algorithmic Languages”, *Bulletin de l’Académie Polonaise des Sciences* (Série des sciences mathématiques, astronomiques et physiques), 18(5): 227–232.
* Sandewall, E. and Shoham, Y., 1994, “Nonmonotonic Temporal Reasoning”, in D. M. Gabbay, C. J. Hogger and J. A. Robinson (eds.), *Handbook of Logic in Artificial Intelligence and Logic Programming, Volume 4: Epistemic and Temporal Reasoning*, Oxford: Oxford University Press.
* Scott, D. S. and Bakker, J. W. de, 1969, *A Theory of Programs*, Vienna: IBM.
* Searle, J. R., 1969, *Speech Acts: An Essay in the Philosophy of Language*, Cambridge: Cambridge University Press.
* Searle, J. R. and Vanderveken D., 1985, *Foundations of Illocutionary Logic*, Cambridge: Cambridge University Press.
* Segerberg, K., 1992, “Getting started: beginnings in the logic of action”, *Studia Logica*, 51: 347–378.
* –––, 1995, “Belief Revision from the Point of View of Doxastic Logic”, *Bulletin of the IGPL*, 3: 535–553.
* Shanahan, M., 1990, “Representing continuous change in the event calculus”, in *Proceedings of ECAI ’90*, pp. 598–603.
* –––, 1995, “A circumscriptive calculus of events”, *Artificial Intelligence*, 77: 249–284.
* Shoham, Y., 1993, “Agent-Oriented Programming”, *Artificial Intelligence*, 60(1): 51–92.
* Steunebrink, B., Dastani, M. and Meyer, J.-J. Ch., 2007, “A Logic of Emotions for Intelligent Agents”, in Holte, R. C. and Howe, A. E. (eds.), *Proceedings AAAI ‘07*, Vancouver: AAAI Press, pp. 142–147.
* Steunebrink, B.R., Dastani, M.M. and Meyer, J.-J. Ch., 2012, “A Formal Model of Emotion Triggers for BDI Agents with Achievement Goals”, Synthese/KRA 185 (1): 83–129 (KRA: 413–459).
* Thielscher, M., 2005, *Reasoning Robots, The Art and Science of Programming Robotic Agents*, Dordrecht: Springer.
* Thomason, R., 2003, “Logic and Artificial Intelligence”, in *The Stanford Encyclopedia of Philosophy* (Spring 2009 Edition), Edward N. Zalta (ed.), URL = <[Logic and Artificial Intelligence (Stanford Encyclopedia of Philosophy/Spring 2009 Edition)](https://plato.stanford.edu/archives/spr2009/entries/logic-ai/)>.
* Turing, A. M., 1949, “On Checking a Large Routine”, Report of a Conference on High-Speed Automatic Calculating Machines, Cambridge: University Mathematical Laboratory, pp. 67–69.
* van Benthem, J., 1989, “Semantic Parallels in Natural Language and Computation”, in H. D. Ebbinghaus, *et al*. (eds.), *Logic Colloquium ‘87*, Amsterdam: North-Holland, pp. 331–375.
* –––, 1994, “Logic and the Flow of Information”, in D. Prawitz, *et al*. (eds.), *Proceedings of the 9th International Congress of Logic, Methodology and Philosophy of Science*, Amsterdam: Elsevier.
* van der Hoek, W., van Linder, B., and Meyer, J.-J. Ch., 1998, “An Integrated Modal Approach to Rational Agents”, in M. Wooldridge and A. Rao (eds.), *Foundations of Rational Agency* (Applied Logic Series: 14), Dordrecht: Kluwer, pp. 133–168.
* van der Hoek, W. and Pauly, M., 2007, “Modal Logic for Games and Information”, in P. Blackburn, J. van Benthem, and F. Wolter (eds.), *Handbook of Modal Logic*, Amsterdam: Elsevier, pp. 1077–1148.
* van der Hoek, W., and Wooldridge, M. J., 2003, “Cooperation, Knowledge, and Time: Alternating-Time Temporal Epistemic Logic and Its Applications”, *Studia Logica*, 75(1): 125–157.
* van der Sandt, R. A., 1991, “Denial”, in *Papers from the 27th Regional Meetings of the Chicago Linguistic Society Meetings* (Volume 2: Parasession on Negation), Chicago Linguistics Society, pp. 331–344.
* van Ditmarsch, H. P., 2000, *Knowledge Games*, Ph.D. Thesis, Groningen: University of Groningen.
* van Ditmarsch, H., Van der Hoek, W., and Kooi, B., 2007, *Dynamic Epistemic Logic*, Dordrecht: Springer.
* van Eijck, J., 1994, “Presupposition failure: a comedy of errors”, *Formal Aspects of Computing*, 3: 766–787.
* van Lambalgen, M. and Hamm, F., 2005, *The Proper Treatment of Events*, Oxford: Blackwell.
* van Linder, B., Van der Hoek, W., and Meyer, J.-J. Ch., 1995, “Actions That Make You Change Your Mind”, in A. Laux and H. Wansing (eds.), *Knowledge and Belief in Philosophy and Artificial Intelligence*, Berlin: Akademie Verlag, pp. 103–146.
* Vanderveken, D., 1990, *Meaning and Speech Acts, Volume 1: Principles of Language Use*, Cambridge: Cambridge University Press.
* –––, 1991, *Meaning and Speech Acts, Volume 2: Formal Semantics of Success and Satisfaction*, Cambridge: Cambridge University Press.
* Veltman, F., 1985, *Logics for Conditionals*, Ph.D. Thesis, Amsterdam: University of Amsterdam.
* –––, 1996, “Defaults in Update Semantics”, *Journal of Philosophical Logic*, 25: 221–261.
* Vendler, Z., 1957, “Verbs and times”, *Philosophical Review*, 66: 143–160.
* Verkuyl, H., 1993, *A Theory of Aspectuality: The Interaction Between Temporal and Atemporal Structure*, Cambridge: Cambridge University Press.
* Walton, D., 1976, “St. Anselm and the logical syntax of agency”, *Franciscan Studies*, 36: 298–312.
* Wooldridge, M. J., 2000, *Reasoning about Rational Agents, Cambridge*, Massachusetts: MIT Press.
* –––, 2002, *An Introduction to MultiAgent Systems*, Chichester: Wiley.
* Wright, G. H. von, 1963, *Norm and Action: A Logical Inquiry*, London: Routledge & Kegan Paul.
* Xu, M., 1998, “Axioms for deliberative stit”, *Journal of Philosophical Logic*, 27: 505–552.

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-action). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-action/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-action&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](http://philpapers.org/sep/logic-action/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[events](https://plato.stanford.edu/entries/events/) | [frame problem](https://plato.stanford.edu/entries/frame-problem/) | [logic: dynamic epistemic](https://plato.stanford.edu/entries/dynamic-epistemic/) | [logic: non-monotonic](https://plato.stanford.edu/entries/logic-nonmonotonic/) | [logic: propositional dynamic](https://plato.stanford.edu/entries/logic-dynamic/) | [logic: temporal](https://plato.stanford.edu/entries/logic-temporal/) | [semantics: dynamic](https://plato.stanford.edu/entries/dynamic-semantics/) | [situations: in natural language semantics](https://plato.stanford.edu/entries/situations-semantics/) | [speech acts](https://plato.stanford.edu/entries/speech-acts/)

[Copyright © 2013](https://plato.stanford.edu/info.html#c) by  
Krister Segerberg  
John-Jules Meyer  
[Marcus Kracht](http://wwwhomes.uni-bielefeld.de/mkracht/index-en.html)
