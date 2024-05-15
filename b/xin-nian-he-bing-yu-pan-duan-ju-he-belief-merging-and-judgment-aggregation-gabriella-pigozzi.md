# 信念合并与判断聚合 belief merging and judgment aggregation (Gabriella Pigozzi)

*首次发布于 2015 年 7 月 8 日；实质性修订于 2021 年 3 月 1 日*

群体经常需要做出决策，而决策可能会很复杂，涉及对几个相关问题的评估。例如，在大学中，招聘委员会通常根据候选人的教学和研究素质来决定是否录用。市议会在决定建造一座桥梁时，可能会要求其成员陈述他们是否赞成，并同时提供其立场的理由（如经济和环境影响，或者开支考虑）。最后，陪审团需要根据相关法典规定的条件对被告的责任做出裁决。正如 Kornhauser 和 Sager（1986）在提到真实的陪审团审判时指出的那样，对逻辑上相关命题的个人意见进行聚合可能会导致悖论性的结果，即所谓的“教义悖论”。受法学中的教义悖论启发，判断聚合问题引起了政治学家、哲学家、逻辑学家、经济学家和计算机科学家的兴趣。与社会选择理论的联系表明，类似于偏好聚合问题（Arrow 1951/1963；Sen 1970），不存在满足一些理想属性的判断聚合程序。

判断聚合所涉及的问题是如何定义保持集体层面上个体合理性的聚合程序。从哲学的角度来看，这样的问题涉及群体态度（如群体信念）的本质（Roth 2011）。当市议会决定建造桥梁时，决策是基于个人的信念，例如，桥梁将对该地区的经济发展产生积极影响，并且不会对环境构成威胁。因此，判断聚合的形式方法可以用来阐明个体和集体信念之间的依赖关系（如果存在的话）。判断聚合所涉及的问题对于社会认识论中研究的证词问题也是相关的（Goldman 1999, 2004, 2010）。在一个专家小组中，如何结合不同意见，以及理性的个体应该如何应对这种分歧？

合并潜在冲突信息的问题不仅在一群人需要做决策时才会出现。人工智能也探索了将冲突传感器的信息、专家意见或数据库聚合成一致的方法（Bloch 等，2001 年）。来自异构传感器的信息的组合改善了个体传感器的不足，提高了系统的性能。例如，智能手机上的手势识别传感器、屏幕旋转传感器和加速度计。分布式数据库可能需要同时访问和管理以共享数据，例如，医院可能需要访问不同单位收集的关于患者的数据。互联网用户可以在不同的在线平台上找到购买和评估产品的人提供的评级。要合并的信息类型可能不同，因此其表示可以是数值或符号：数字、语言值、统计概率分布、二进制偏好、效用函数等。然而，上述所有示例都涉及来自异构来源的项目合并问题和冲突管理问题。在纯粹的形式层面上，信念合并研究了在命题逻辑中表达的独立且同样可靠的信息源的融合。与判断聚合一样，信念合并解决了将在命题逻辑中表达的几个个体基础融合成一致的问题。鉴于这两个学科研究的问题的结构相似性，探索它们之间的联系可以揭示这些形式主义实际上有多相似。在更实际的层面上，将信念合并中定义的运算符应用于判断聚合问题，可以为判断聚合定义一类更广泛的聚合运算符，即所谓的_基于距离的过程_。

本文的重点是明确判断聚合和信念合并文献之间的联系。判断聚合将在下一节中简要介绍。有关判断聚合的更全面介绍，请参阅（Grossi 和 Pigozzi 2014 年；Endriss 2016 年）。

***

## 1. 判断聚合

判断聚合的正式工作源于法学文献中的“教义悖论”（Kornhauser 和 Sager 1986, 1993, 2004; Kornhauser 1992）。该悖论表明，当法官试图达成共同且合理的裁决时，他们可能面临集体非理性的真正危险。尽管这门学科最近才诞生，但类似结构的问题似乎早在 1837 年就被 Poisson 指出（如 Elster 2013 所指出的），后来又被意大利法律理论家 Vacca 在 1921 年指出（参见 Spector 2009）。

在 Kornhauser 和 Sager 的法庭示例（1993 年）中，一个由三名法官组成的法庭必须就原告与被告之间的合同违约案达成裁决。根据合同法，如果合同禁止被告进行某项行为_X_（命题_p_），而被告确实进行了行为_X_（命题_q_），则被告应对合同违约（命题_r_）承担责任。假设三名法官的判断如 [表 1](https://plato.stanford.edu/entries/belief-merging/#table1) 所示。

\| | Obligation (*p*) | Action (*q*) | Defendant liable (*r*) |

\| --- | --- | --- | --- |

\| 法官 1 | 真 | 真 | 真 |

\| 法官 2 | 真 | 假 | 假 |

\| 法官 3 | 假 | 真 | 假 |

\| 多数 | 真 | 真 | 假 |

表 1：信条悖论

命题 *r* 是“结论”，而 *p* 和 *q* 是“前提”。法律原则可以逻辑地表示为 (p∧q)↔r，即前提 *p* 和 *q* 对于结论 *r* 来说既是必要的又是充分的。[表 1](https://plato.stanford.edu/entries/belief-merging/#table1) 显示，每个法官都尊重给定的法律原则，只有在她认为两个前提都为真时，才宣布结论为真。如果法官们使用多数规则对每个命题的判断进行集体合并，得到的判断集合是 {*p*, *q*, 不 *r*}，这违反了法律原则。这是信条悖论的一个例子：尽管个体在逻辑上是一致的，但群体对命题的判断与法律原则不一致。在上面的例子中，法官们不能宣布被告不承担责任，并同时表示她承担责任的两个条件都适用。因此，法庭面临一个困境。要么要求法官只对前提表达判断，法庭对 *r* 的决定从前提的多数逻辑推导出来（“基于前提”或“逐个问题的程序”），要么根据 *r* 的多数判断来决定裁决（“基于结论”或“逐个案例的程序”），忽略对前提的意见。[表 1](https://plato.stanford.edu/entries/belief-merging/#table1) 中的例子说明这两种程序可能得出相反的结果。在法庭的例子中，法官们必须对其立场表达意见的问题被区分为前提和结论。然而，值得注意的是，判断聚合理论并不要求这样的区分。即使没有前提和结论的区分，法庭决定宣布被告不承担责任（尽管多数人支持两个判断她承担责任的标准），也将与决策规则 (p∧q)↔r 不一致。

这不是第一次通过多数规则对集体结果进行定义而导致悖论的结果。早在 1785 年，孔多塞侯爵（Marquis de Condorcet）就发现了现在被称为_孔多塞悖论_的问题。给定一组个体偏好，如果我们逐对比较每个选择并应用多数投票，我们可能会得到一个不可传递的偏好（或循环），即选择_x_优先于_y_，*y_优先于_z*，*z_优先于_x*，这样就无法宣布一个选择为胜利者。孔多塞悖论和判断聚合悖论之间的相似性被科恩豪泽和萨格（1986 年）以及利斯特和佩蒂特（2004 年）迅速注意到。将个体偏好聚合成社会偏好排序的研究是社会选择理论的重点（List 2013）。诺贝尔奖得主肯尼斯·阿罗（Kenneth Arrow）通过证明孔多塞遇到的问题更为普遍，不仅限于多数规则，证明了具有里程碑意义的结果。阿罗的不可能性定理（Arrow 1951/1963；Morreau 2014）指出，对于三个或更多选择的有限个体偏好集合，不存在满足几个合理公理的聚合函数。有一些类似于阿罗定理的结果表明了判断聚合的“不可能性”。判断聚合的第一个不可能性定理（List and Pettit 2002）之后又有进一步的推广（Pauly and van Hees 2006；Dietrich 2006；Mongin 2008）。

让我们将注意力限制在用命题逻辑（语言_L_）表达的判断聚合上（判断聚合问题可以推广到模态逻辑、条件逻辑以及谓词逻辑，参见 Dietrich 2007；关于非经典逻辑和判断聚合的更深入讨论，参见 Grossi 2009、Porello 2017 和 Xuefeng 2018）。个体表达判断的公式集称为_议程_（A⊆L）。议程不包含双重否定（¬¬φ 等同于 φ），对否定封闭（即，如果 φ∈A，则 ¬φ∈A），通常假设不包含重言式或矛盾。例如，法庭案件的议程是 A={p,¬p,q,¬q,p∧q,¬(p∧q)}。Dietrich 和 List（2007a）证明了当议程足够丰富（例如，法庭决定的议程或{p,¬p,q,¬q,p→q,¬(p→q)}）时，满足以下_期望_的判断聚合规则只有独裁主义。聚合函数是独裁主义的，当对于_任何_输入，集体结果被视为一个（相同的）个体的判断，即独裁者。在独裁主义的聚合函数中，除了独裁者的个体输入外，所有个体输入都被忽略。*判断集_是一组一致且完备的公式集 J⊆A。如果对于议程的任何元素 φ，要么 φ∈A，要么 ¬φ∈A（即，议程的任何项目都必须被接受或拒绝），则判断集是完备的。给定一个由_n_个个体组成的群体，一个_配置_是一个_n*-元组的个体判断集 ⟨J1,…,Jn⟩。最后，_判断聚合规则 F_是一个函数，它将每个配置 ⟨J1,…,Jn⟩ 分配给一个集体判断集 F(J1,…,Jn)⊆A。对_F_施加的条件如下：

**通用域：** 接受一切由一致且完备（相对于议程）判断集构成的配置作为聚合函数的输入。在 [表 1](https://plato.stanford.edu/entries/belief-merging/#table1) 中的教条悖论的配置是合法的输入，因为法官对议程中的每个问题都表达了接受或拒绝的意见，并且他们的意见遵守了规则(p∧q)↔r。

**集体理性：** 只有完整且一致的集体判断才能作为输出被接受。在 [表 1](https://plato.stanford.edu/entries/belief-merging/#table1) 的例子中，集体判断是完整的（群体接受或拒绝每个议程项），但不一致，因为它违反了规则(p∧q)↔r。

**独立性：** 对每个命题的集体判断仅依赖于对该命题的个体判断，而不依赖于议程中其他（被视为独立的）命题。（这个条件在判断聚合框架中重新表述了阿罗箭定理中的“无关替代品独立性”条件。）按命题多数规则（如 [表 1](https://plato.stanford.edu/entries/belief-merging/#table1) 中的法庭例子）满足独立性条件，因为每个议程项的群体接受/拒绝取决于是否有多数个体接受/拒绝该命题。

**一致性保持：** 如果所有个体对命题_p_∈ _A_提交相同的判断，则该判断属于集体判断集合。

尽管条件不苛刻，但可以证明不存在同时满足上述条件且不是独裁的判断聚合规则_F_。这个不可能性结果特别有意义，因为当在偏好框架中重新表述时，可以证明阿罗（Arrow）定理（对于严格的偏好排序）是其推论（Dietrich 和 List 2007a）。这导致 Dietrich 和 List 说判断聚合可以被看作是比偏好聚合更一般的问题（有关这种重新表述的详细信息，请参见 Grossi 和 Pigozzi 2014）。

除了两种聚合问题之间的形式联系外，从概念上讲，判断聚合将偏好聚合的问题扩展到更一般的决策问题。尽管社会选择提供的模型改进了我们对许多熟悉的集体决策问题（如选举、公投和立法决策）的理解，但它们主要关注集体在候选人、政策或行动等替代结果之间的选择。它们无法涵盖一整类决策问题，即一个群体必须对_逻辑上相互关联的_命题形成集体认可的信念或判断。然而，正如引言中给出的例子所示，这类决策问题是常见的，不仅限于法院决定。Pettit（2001）提出了“辩论困境”一词，以突显这类问题在需要达成多个命题上的共同立场的所有情况中可能出现。

不可能性结果通常带有消极的意味。然而，它们也指示了可能的逃避路径。当放宽普遍域条件（例如考虑_单维度对齐_的配置文件（List 2002），这类似于偏好聚合中的 Black 单峰性（Black 1948））或将集体合理性条件限制为要求一致（但不完全）的集体判断时，可以获得一致的集体结果。当放宽独立性条件时，也可以得到可能性结果。法院案例中的基于前提的程序就是违反独立性的聚合规则的一个例子。在那里，对结论的集体立场是通过逻辑蕴涵从前提的多数判断中得出的。更一般地说，_顺序优先规则_违反独立性并保证一致的群体立场：议程的元素按照预先确定的顺序进行聚合，早期的决策限制后续的决策。读者可以参考（List 和 Puppe 2009；List 2013；Grossi 和 Pigozzi 2014；Endriss 2016）对判断聚合进行深入介绍，并了解更多不可能性定理以及逃避这类结果的途径。在下一节中，我们将介绍在计算机科学中处理冲突信息的问题。我们将看到一些在信念合并中引入的运算符是违反独立性条件的聚合程序的实例，并且这些运算符可以应用于将具体的聚合程序应用于判断聚合问题。

## 2. 信念合并

计算机科学家们研究了将几个独立且可能相互冲突的信息源聚合成一致的信息的过程。正如在引言中提到的，例如一个代理接收到的冲突传感器信息的组合，多个数据库的聚合以构建专家系统，以及多智能体系统（Borgida 和 Imielinski 1984; Baral 等，1992; Chawathe 等，1994; Elmagarmid 等，1999; Subrahmanian 1994; Kim 1995）。信念合并（或称为_融合_）研究的是将符号信息（以命题逻辑表示）聚合成一致的基础。正如我们将看到的，合并几个基础的过程与_信念变化_（或_信念修正_）有着紧密的联系，信念变化是自 20 世纪 80 年代以来形式哲学和计算机科学领域的一个活跃学科，模拟了人类和人工智能代理在遇到新信息时如何改变他们的信念。Alchourrón，Gärdenfors 和 Makinson（所谓的 AGM 理论）研究了理论变化的三种主要类型：修订、扩展和收缩，并为每种类型提供了合理性原则（Alchourrón 等，1985; Gärdenfors 1988）。在信念修订中，重点是在面对新的完全可靠的信息时，一个信念基础如何改变，而这个新的信息可能与基础中的现有信念相冲突。当我得知一个新认识的人 Rob 有一个孩子时，我只需添加这个信息，并最终得出新的结论（这是扩展）。然而，最有趣的情况是当新信息与先前持有的信念相冲突。假设我从一个共同的朋友那里了解到 Rob 没有孩子。现在我从 Rob 本人那里得知他有一个孩子。为了适应新的信息，我需要进行修订，这包括删除他没有孩子的错误信念（以及可能依赖于该信念的所有其他信念），添加新的输入，即他实际上有一个孩子，并可能得出新的结论（有关信念变化的概述，请参见 Hansson 2011，有关信念变化的全面介绍，请参见 Fermé 和 Hansson 2018）。至于信念合并，与认识论文献中的“知识”一词相比，使用了更广泛的意义，即“知识”指的是代理接受的公式（即她的知识库中的公式），这些公式不一定是真实的。然后，“知识库”和“信念基础”可以互换使用。对于 Grégoire 和 Konieczny（2006）来说，信念合并运算符可以用于聚合除了知识和信念之外的其他类型的信息，例如目标、观察和规范。

如果信念修订关注的是在添加新信息后一个基础如何改变，那么信念融合研究的是如何聚合几个不同且可能相互冲突的基础（例如，不同专家的意见，几个数据库，来自不同来源的信息等），以获得一致的基础。文献中提出了不同的方法。在移动到由 Konieczny 和 Pino Pérez 定义的合并运算符之前，我们在这里简要提到_组合_和_仲裁_，这些运算符已应用于判断聚合。解决聚合不同且可能不一致的数据库的问题的第一种方法（Baral 等人，1991 年；Baral 等人，1992 年）是基于 Ginsberg 在面对不一致理论时考虑最大一致子集的想法（Ginsberg，1986 年），例如可能由来自几个自洽（但相互冲突）的代理人的信息的并集导致的理论。组合运算符将知识库（一组有限的逻辑公式）的并集取出，并且如果并集在逻辑上不一致，则选择一些最大一致子集。这种_组合_运算符的逻辑属性已在（Konieczny，2000 年）中进行了研究，并与（Konieczny 和 Pino Pérez，1998 年，1999 年）中定义的_合并_运算符进行了比较。组合和合并知识库之间存在几个差异。一个差异是 Baral 等人（1991 年，1992 年）的方法是依赖于语法的，而合并运算符遵守语法的无关性原则。根据语法的无关性原则，对两个等价知识库的操作应返回两个等价知识库。例如，K1={a,b}和 K2={a∧b}具有相同的逻辑推论。因此，如果将 K1 与 K3 合并或将 K2 与 K3 合并，将得到两个等价的知识库。另一方面，将 K1 和 K3 组合可能与将 K2 和 K3 组合在逻辑上不等价。设 E1=K1⨆K3（⨆ 是多重集合上的并集），E2=K2⨆K3。E1 的最大一致子集是{a,b}和{a,¬b}，E2 的最大一致子集是{a∧b}和{¬b}。因此，E1 的每个最大一致子集都蕴含 a，但对于 E2 的所有最大一致子集来说并非如此（来自 Konieczny，2000 年的例子）。另一个差异是当使用组合运算符时，忽略了知识库来源的信息。这意味着，与合并不同，组合运算符无法考虑基数考虑因素。例如，假设有四位医学专家对于四种针对 65 岁以上成年人的疫苗的有效性提供建议。假设命题 a、b、c、d 表示“疫苗 A（分别为 B、C、D）对 65 岁以上人群有效”。如果两位专家一致认为疫苗 A 和 B 对 65 岁以上人群有效，一位专家认为疫苗 D（但不是疫苗 A）有效，最后一位专家与前两位一致认为疫苗 A 有效，并且如果疫苗 B 对 65 岁以上人群有效，则疫苗 C 也有效，我们可以将四位专家的意见表示为四个知识库：K1=K2={a,b}，K3={¬a,d}和 K4={a,b→c}。这四个基础的并集是{a,¬a,b,b→c,d}，显然在逻辑上不一致。考虑最大一致子集是避免不一致性同时保留尽可能多信息的一种方法。在这个例子中，两个最大一致子集是：{a,b,b→c,d}和{¬a,b,b→c,d}。这意味着我们无法决定是否接受_a_或 ¬a。然而，大多数知识库包含_a_，只有一个基础包含 ¬a。如果所有知识库都被平等对待，那么_a_应该在结果知识库中。如果由于某种原因，K3 比其他知识库更可信，则我们可能更喜欢接受包含 ¬a 的组合基础。

_仲裁_是另一种融合知识库的运算符，早在上世纪九十年代就被引入（Revesz 1993，Liberatore and Schaerf 1995）。在信念修正中，通常假设新信息被接受并必须包含在修订的基础中。相比之下，仲裁处理的是两个来源提供相互矛盾的信息但同样可靠的情况（例如两个同样能干的专家，两个同样可信的证人等）。如果我们没有理由排除其中一个来源，解决方案是融合两个基础而不是一个基础修订另一个基础。这个操作是仲裁的意思，因为两个来源同样可靠，所以结果基础应该尽可能包含两个来源的内容。Liberatore 和 Schaerf（1995）提出了关于两个信念基础之间仲裁的公理，而 Revesz 提出的运算符只满足其中一部分。他们的提议受到了仅限于两个基础仲裁的限制的影响。这个限制在信念合并方法中被克服了，其中有限数量的基础可以合并成一个一致的基础。

以上方法都无法考虑到特定信息项的流行程度。这意味着这些运算符无法捕捉到多数人的观点。最早引入多数派假设用于合并多个知识库的是 Lin 和 Mendelzon（1999）。这个想法受到了社会选择理论中多数派规则的启发。然而，他们的多数派假设包括了一个关于_部分支持_的概念，这个概念捕捉了与投票相关的知识合并的特殊性，并不仅限于计算支持一个命题_a_的基础数量与包含 ¬a 的基础数量。如果存在一个命题_a_，其中不包含在_l_中的任何原子，使得代理人相信_l_或_a_之一为真但不知道哪个为真，则定义一个知识库部分支持文字_l_。Lin 和 Mendelzon（1999）给出了这些假设的模型论特征和具体的合并运算符。在信念合并文献中，通常假设信息来源是同样可靠的。解决冲突的一种方法是放宽这个假设，例如在（Lin 1996）中合并加权知识库的扩展或在优先级知识库中（Benferhat et al. 1998; Cholvy 1998; Delgrande et al. 2006）。

Konieczny 和 Pino Pérez（1998）引入了一组新的合并运算符的公理和仲裁与多数派运算符之间的区别（以它们满足的公理为基础）。在随后的作品中（Konieczny and Pino Pérez 1999, 2002），他们扩展了框架，包括在_完整性约束_下的合并，即一组外部强加的条件，合并基础必须满足这些条件（Kowalski 1978; Reiter 1988）。在下一节中，我们将介绍由 Konieczny 和 Pino Pérez 引入的形式框架，这个框架现在是信念合并的标准框架，因为它克服了之前提议的限制。

信念合并所发展的形式方法已经被导出并应用于社会认识论的领域，如选举和偏好聚合（Meyer 等，2001 年），群体共识（Gauwin 等，2005 年）和判断聚合（Pigozzi，2006 年），我们将在 [第 2.2 节](https://plato.stanford.edu/entries/belief-merging/#DisBasApp) 中回顾。

### 2.1 在完整性约束下的合并框架

Konieczny 和 Pino Pérez 考虑了一个由有限集合_At_的原子命题和通常的连接词（¬，∧，∨，→，↔）构建的命题语言_L_。解释是一个将 0（假）或 1（真）分配给每个原子命题的全函数 At→{0,1}。例如，如果 At={p,q,r}，那么(1,0,1)是将_p_和_r_分配为真，将_q_分配为假的解释。\[[1](https://plato.stanford.edu/entries/belief-merging/notes.html#note-1)]将所有解释的集合表示为 W={0,1}At。对于任何公式 φ∈L，mod(φ)={ω∈W|ω⊨φ}表示 φ 的模型集，即使得 φ 为真的真值分配集合。如果我们取在教条例子中表达合同法的公式，那么 mod((p∧q)↔r)={(1,1,1),(1,0,0),(0,1,0),(0,0,0)}。通常，如果一个公式 φ 至少有一个模型，则它是一致的；如果一个公式 φ 从一组公式 Φ 中推导出来，那么使 Φ 中的所有公式都为真的每个解释也使 φ 为真。

一个_信念基础_ Ki 是一个有限的命题公式集合，表示个体 i 持有的显式信念。每个 Ki 被假定为一致的。K 表示所有一致信念基础的集合。合并的公理考虑了一个信念基础的_多重集合_（信念配置文件或信念集，早期论文中使用的术语）E={K1,…,Kn}。使用多重集合的原因是一个元素可以出现多次，从而允许表示两个或更多个代理人持有相同信念的事实。这是为了考虑信息的流行度，从而定义多数运算符。为了与通常的集合并 ∪ 区分开来，多重集合并由 ⊔ 表示，并定义为{φ}⊔{φ}={φ,φ}。如果存在一个从 E1 到 E2 的双射 f，使得对于任何 B∈E1，我们有 ⊨∧f(B)↔∧B，则两个信念配置文件是等价的（E1≡E2）。

完整性约束表示合并基础应满足的额外条件。完整性约束的好处是确保个别信息的聚合满足一些特定问题的要求。例如，假设市议会的成员必须决定在某个区域建造什么。我们可以对可用预算有约束（只能覆盖其中一些项目），但也可以对不同项目的共存有约束（我们可能不会在该区域建造停车场和游乐场，但我们可以建造一个游乐场和一个公共图书馆）。如果（可能为空的）完整性约束集合由信念基础_IC_表示，ΔIC(E) 表示给定_IC_的信念基础的多重集合_E_的合并结果。直观地说，结果将是一个一致的信念基础，代表集体信念并蕴含_IC_。

Konieczny 和 Pino Pérez（1999 年，2002 年）提出了对等可靠来源之间的_IC_融合运算符的以下公理。设 E、E1、E2 为信念配置文件，K1、K2 为一致的信念基础，IC、IC1、IC2 为完整性约束。如果 Δ 是一个_IC_融合运算符，当且仅当它满足以下合理性公理：

(IC0)

ΔIC(E)⊨IC

(IC1)

如果 IC 是一致的，那么 ΔIC(E)也是一致的。

(IC2)

如果 ∧E 与_IC_一致，那么 ΔIC(E)≡∧E∧IC

如果 E1≡E2，并且 IC1≡IC2，那么 ΔIC1(E1)≡ΔIC2(E2)

如果 K1 ⊨ IC 并且 K2 ⊨ IC，那么当且仅当 ΔIC({K1,K2})∧K1 是一致的时候，ΔIC({K1,K2})∧K2 也是一致的。

(IC5)

ΔIC(E1)∧ΔIC(E2) ⊨ ΔIC(E1⊔E2)

如果 ΔIC(E1)∧ΔIC(E2) 是一致的，那么 ΔIC(E1⊔E2)⊨ΔIC(E1)∧ΔIC(E2)

ΔIC1(E)∧IC2⊨ΔIC1∧IC2(E)

(IC8)

如果 ΔIC1(E)∧IC2 是一致的，那么 ΔIC1∧IC2(E)⊨ΔIC1(E)

为了说明这些假设，我们考虑以下例子，由（Konieczny 和 Pino Pérez 1999）提供。一群公寓业主希望改善他们的公寓。在会议上，主席提议建造一个网球场、一个游泳池或一个私人停车场。他还指出，建造其中两个选项将导致年度维护费用的显著增加（这对应于_IC_）。

（IC0）确保合并后的基础满足完整性约束。这是一个明显的条件，因为这些是在完整性约束下合并的假设，其目的是确保合并的结果满足完整性约束。通过使用合并运算符，主席知道如果他们决定建造至少三个设施中的两个，小组将同意增加开支。（IC1）规定，当_IC_一致时，融合运算符的结果也将是一致的。同样，鉴于合并基础的解释是从完整性约束的解释中选择的，如果_IC_一致，结果也将是一致的。（IC2）规定，合并运算符的结果只是信念配置文件和_IC_的合取，只要这种合取是一致的。在我们的运行示例中，如果每个希望建造两个或更多设施的人都支持增加开支，并且共同所有者给出的意见是一致的，那么合并将返回_IC_和个人意见的合取。（IC3）规定，如果两个信念配置文件 E1 和 E2 在逻辑上等价，并且 IC1 和 IC2 也等价，则将第一个信念配置文件与 IC1 合并等价于将第二个信念配置文件与 IC2 合并。这个假设表达了对信念修订运算符（我们将看到，合并运算符是其扩展）已经施加的原则，即_语法无关性原则_，它表示合并运算符的结果仅取决于合并基础的语义内容，而不取决于它们的语法表达。（IC4）被称为_公平性假设_，因为它规定在合并两个信念基础 K1 和 K2 时，不应给予其中一个优先权。合并与其中一个一致，当且仅当它与另一个一致。这个假设表达了一个对优先考虑其中一个基础的运算符不满足的对称条件。（IC5）和（IC6）首次在（Revesz 1997）中引入，它们共同意味着如果两个小组在至少一项上达成一致，那么融合的结果将与这两个小组达成一致的项目相一致。因此，如果共同所有者组可以分为两个派别，一个想建造网球场和游泳池，另一个想要游泳池和停车场，那么建造游泳池将被选为最终的团体决策。最后，（IC7）和（IC8）保证如果在 IC1 下合并 E 的合并与 IC1∧IC2 一致，那么如果 E 在更严格的条件下合并，即 IC1∧IC2 的合取，IC1 仍将满足。这是一个自然的要求，因为（IC7）和（IC8）共同表明，如果游泳池被选择为三个选择中的一项，那么如果我们将选择集合减少到网球场和游泳池，它仍将被选择。最后两个假设是（Katsuno 和 Mendelzon 1991）中修订的两个假设（R5 和 R6）的概括，他们从模型论的角度分析了修订运算符，并给出了满足 AGM 合理性假设（Alchourrón 等人 1985）的修订运算符的最小变化特征。与 Katsuno 和 Mendelzon 的假设一样，（IC7）和（IC8）确保了接近性的行为良好，即如果合并运算符在 IC1 下选择了一个结果，那么该结果也将是在更严格的约束 IC1∧IC2 下与 IC2 最接近的（即被选择的）结果（假设 ΔIC1（E）∧IC2 一致）。在 Katsuno 和 Mendelzon 的模型论方法中，修订运算符通过选择新信息中最接近的解释来改变初始信念基础。 同样地，_IC_合并运算符选择与信念基础集合最接近的完整性约束解释。因此，信念合并可以被解释为对多个信念基础进行信念修订的一般化（Grégoire 和 Konieczny 2006）。

定义了两个_IC_融合运算符的子类。_IC 多数融合_运算符最小化总不满意度（由 Lin 和 Mendelzon 1996 引入），而_IC 仲裁运算符_旨在平均分配个体不满意度水平。多数运算符在精神上类似于社会选择理论中的功利主义方法，而仲裁运算符则受到平等主义的启发。

对于每个整数 n，令 En 表示包含 n 次 E 的多重集合。_IC 多数_运算符满足以下附加公设：

(Maj)

∃nΔIC(E1⊔En2)⊨ΔIC(E2)

因此，(Maj) 表明重复足够多次的 E2 将使 E2 成为群体的观点。所需的重复次数取决于具体情况。

一个_IC 仲裁_运算符除了(IC0)-(IC8)之外，还具有以下假设：

(Arb)

设 IC1 和 IC2 在逻辑上是独立的。如果 ΔIC1(K1)≡ΔIC2(K2)，且 ΔIC1↔¬IC2({K1,K2})≡(IC1↔¬IC2)，那么 ΔIC1∨IC2({K1,K2})≡ΔIC1(K1)。

直观地说，这个公理表明仲裁运算符选择_IC_-一致的中位结果。当以模型理论的方式表达时，这种运算符的行为将更加清晰，我们将在下一节中看到。

通过一个例子可以更好地理解多数和仲裁运算符的不同行为。假设有三个朋友需要决定是否为一个共同的熟人买生日礼物。现在假设其中两个朋友想给她买一本书并邀请她出去吃饭，而第三个朋友不想为这些礼物做出任何贡献。如果群体通过多数决定来做出决策，这三个朋友将决定买一本书并邀请她出去吃饭，这会让第三个朋友非常不开心。另一方面，如果他们使用仲裁运算符，他们要么给她买一本书，要么邀请她去餐厅，这会让三个成员同样不满意。每个朋友的信念库中都有一个公式没有被满足，因此每个朋友的“不满程度”是相同的。

文献中的融合运算符可以分为两类：基于语法的融合和基于模型的融合。第一种类型将命题公式作为信息输入，并通常考虑信念配置的最大一致子集。另一方面，基于模型的运算符将公式的解释视为合并过程的输入。因此，每个信念库被视为一组模型，其公式的句法表示是无关紧要的。回想一下我们在 [第 2 节](https://plato.stanford.edu/entries/belief-merging/#BelMer) 开头使用的例子，以说明信念库的组合是依赖于语法的。我们有 K1={a,b}，K2={a∧b}和 K3={¬b}。基于语法的融合将把 a,b,a∧b,¬b 视为输入，而基于模型的融合将采用 mod(K1)=mod(K2)={(1,1)}和 mod(K3)={(1,0),(0,0)}。由于基于模型的运算符已经应用于判断聚合问题，我们将重点关注这类融合运算符，并参考（Baral et al. 1992; Konieczny 2000; Grégoire and Konieczny 2006）以了解更多关于基于语法的融合的内容。

### 2.2 基于距离的方法

基于 IC 模型的融合算子从完整性约束的模型 IC 中选择偏好的模型，其中偏好关系取决于所使用的算子。因此，集体信念集 ΔIC(E)保证是一组在所有选定模型中为真且满足 IC 的公式。在之前提到的市议会的例子中，这意味着决策结果永远不会选择建造游乐场和停车场。偏好信息通常采用基于解释之间的距离概念_d_诱导的解释之间的全序（回顾一下，全序是一种自反且传递的关系）≤。直观地说，这是为了选择一个集体结果，该结果在满足完整性约束的同时，对于所有个体信念基础来说是最接近的（根据要指定的某种距离概念）。需要注意的是，基于距离的融合算子并不总是保证唯一结果。当我们研究将信念合并应用于判断聚合时，我们将回到这一点。

我们已经看到，多数算子的特点是试图最小化总体不满意度，而仲裁算子旨在最小化局部不满意度。因此，我们可以将距离视为捕捉不满意的概念的一种方式。受信念修订中使用的“经济原则”的启发，合并中的结果应尽可能保留来自每个个体信念基础 Ki 的信息。换句话说，由于信息来源被假定为同样可靠，合并应尽量少地删除来源的信息。因此，想法是选择最小化 IC 模型与信念配置文件 E 的模型之间距离的解释。形式上，可以表示如下：

mod(ΔIC(E))=min(mod(IC),≤d)

一个解释之间的距离_d_是一个总函数 d:W×W→R+，对于所有的 ω,ω′∈W：

1. d(ω,ω′)=d(ω′,ω)
2. d(ω,ω′)=0 当且仅当 ω=ω′。

第一个观点说明了距离是对称的。假设有三个信念基础：K1=K3={a,b,¬c,d} 和 K2={¬a,b,c,d}。如果我们用 ωi 表示 Ki 的解释，我们有 ω1=ω3=(1,1,0,1) 和 ω2=(0,1,1,1)。第一个观点要求 d(ω1,ω2)=d(ω2,ω1)。第二个观点说明了如果两个解释相同，距离为 0，所以 d(ω1,ω3)=0。\[[2](https://plato.stanford.edu/entries/belief-merging/notes.html#note-2)]

需要两个步骤来找到最小化与信念配置的距离的 *IC* 模型。在第一步中，我们计算满足 *IC* 的每个解释（即每个候选合并基）与每个个体信念基之间的距离。这里的直觉是量化每个个体观点与每个可能的集体结果之间的距离（回想一下结果将从满足 *IC* 的解释中选择）。在第二步中，我们需要聚合所有这些个体距离来定义集体距离，即信念配置与 *IC* 的每个模型之间的距离。这相当于量化群体与每个可能结果之间的距离。最后，选择最小化这种距离的（可能不止一个）基作为结果。

对于第一步，我们需要定义一个解释 ω 和信念基础_K_之间的距离。这是 ω 和_K_的模型之间的最小距离。形式上：d(ω,K)=minω′∈mod(K)d(ω,ω′)。如果_K_有多个模型（例如，Ki={a∨b}有三个模型：{(0,1)(1,0),(1,1)}），那么 ω′将是最接近 ω 的。

现在我们可以定义解释 ω 和信念配置_E_之间的距离，这是第二步所需的。我们需要一个聚合函数 D:R+n→R+，它接受第一步中计算得到的_IC_的模型与信念基础 Ki 之间的距离，并将它们聚合成一个集体距离。即：D(ω,E)=D(d(ω,K1), d(ω,K2), …, d(ω,Kn))。因此，我们得到了关于所有解释集合_W_的全序关系。合并运算符现在可以选择所有最小化与配置_E_的距离的解释。

从技术上讲，一个聚合函数 D:R+n→R+为每个非负实数 n 元组分配一个非负实数。对于任意的 x1,…,xn,x,y∈R+，D 满足以下性质：

1. 如果 x ≥ y，则 D(x1,…,x,…,xn) ≥ D(x1,…,y,…,xn)
2. 当且仅当 x1=…=xn=0 时，D(x1,…,x,…,xn)=0
3. D(x)=x

合并运算符的结果显然取决于选择的距离函数 *d* 和 *D*。在最初的提议中（Lin 和 Mendelzon 1999; Revesz 1993），采用了_汉明距离_（如下所定义）作为 *d*，并采用了_求和_或_最大值_作为 *D*（分别表示为 DΣ 和 DMax）\[[3](https://plato.stanford.edu/entries/belief-merging/notes.html#note-3)]。当 *D* 是求和时，全局距离通过求和各个距离得到。相应的合并运算符是多数运算符，被称为_minisum_，因为它选择那些使求和最小的解释。使用 DMax 的合并运算符被称为_minimax_，输出使个体基础的最大距离最小化的判断集（Brams 等人，2007b）。直观地说，_minimax_旨在最小化与最不满意的个体的分歧。当使用 DΣ 或 DMax 时，可能会选择两种相反的结果（Brams 等人，2007b; Eckert 和 Klamler，2007）。

汉明距离是信念修订中常用的距离。这个想法很简单。汉明距离计算两个解释在命题字母上的差异数量。例如，如果 ω=(1,0,0) 和 ω′=(0,1,0)，那么我们有 d(ω,ω′)=2，因为这两个解释在对第一个和第二个命题的赋值上有差异。_drastic distance_也是众所周知的，它将两个解释相同的距离定义为 0，否则定义为 1。但是，距离的选择不限于这些选项。可以使用其他满足上述公设的距离（Konieczny 和 Pino Pérez，1999, 2002）。个体距离之和的最小化是一个_IC_多数合并运算符的示例。在下一节中，我们将看到这个运算符应用于辩论困境。

基于距离的方法可以澄清仲裁和多数运算符之间的区别。_Leximax_是仲裁运算符的一个例子。*Leximax_运算符可以将 *d* 设为汉明距离，并且对于每个解释，该解释与 *n* 个基础 *Ki* 之间的距离形成一个列表。通过在距离序列之间采用字典顺序，固定一个代理人集合的顺序，定义了解释的预序。最后，Dleximax 选择最小值。直观上讲，与选择最小化_总体_分歧的多数运算符（例如通过最小化个体距离之和）不同，仲裁运算符关注此类分歧的_分布*，并选择对所有个体更加公平的选项，即它旨在平等分配个体对所选择结果的不满意（回想上面的生日礼物的例子）。这是根据汉明距离的定义得出的：汉明距离越大，两个解释之间的分歧越大（这里的分歧仅意味着解释对同一公式分配了不同的真值）。假设信念配置 *E* 有三个基础。还假设当我们采用汉明距离之和时，*IC* 的两个模型（ω 和 ω′）的距离为 DΣ(ω,E)=DΣ(ω′,E)=6，当我们采用距离的字典顺序时，Dleximax(ω,E)=(2,2,2) 和 Dleximax(ω′,E)=(5,1,0)。在这个例子中，多数运算符无法区分 ω 和 ω′（因为在两种情况下，和为 6），而仲裁运算符将更喜欢 ω 而不是 ω′，因为 ω 比 ω′ 更公平地分配个体分歧。

如前所述，Liberatore 和 Schaerf 是最早提出仲裁运算符的人之一。然而，他们的方法仅限于两个基础，并且合并的结果是两个基础之一。这样的运算符在某些情况下会产生可疑的结果，比如(Konieczny 和 Pino Pérez 2002)中的情况。假设有两位金融专家给出关于四只股票_a，b，c 和 d_的建议。根据第一位专家的意见，这四只股票都将上涨（表示为 φ1={(1,1,1,1)}），而第二位专家认为这四只股票都将下跌（φ2={(0,0,0,0)}）。根据 Liberatore 和 Schaerf 的仲裁运算符，结果将是{(1,1,1,1),(0,0,0,0)}，这意味着第一位或第二位专家完全正确。另一方面，如果我们应用 Konieczny 和 Pino Pérez 的仲裁运算符，我们将得到{(0,0,1,1),(0,1,0,1),(0,1,1,0),(1,0,0,1),(1,0,1,0),(1,1,0,0)}。这个结果可以解释为——如果我们假设所有信息源都是同样可靠的，我们没有理由偏好其中一个，因此一个合理的立场是得出结论两者可能同样正确。然而，Liberatore 和 Schaerf 的运算符可以在所有结果只能是个体提交的基础之一的情况下使用。例如，如果两位医生会面以决定患者的治疗方案，他们可能必须支持其中一个提案，因为混合治疗可能既不可行也不安全。

一个表示定理（Konieczny 和 Pino Pérez 1999, 2002）确保对于每个_IC_合并运算符子类（多数和仲裁运算符），都对应着一组解释的预序关系（反映了 Katsuno 和 Mendelzon（1991）为信念修正运算符证明的类似表示定理）。\[[4](https://plato.stanford.edu/entries/belief-merging/notes.html#note-4)]

现在让我们说明一下信念合并如何应用于判断聚合问题。

## 3. 信念合并应用于辩论困境

将个体信念基础合并为集体信念基础与判断聚合问题有相似之处。在这两种情况下，我们希望将个体输入聚合为群体结果，并且这两个学科都使用逻辑来形式化基础的内容。正如我们在 [第 1 节](https://plato.stanford.edu/entries/belief-merging/#JudAgg) 中所看到的，没有聚合过程能够确保一致和完整的群体判断。然而，计算机科学中引入的合并运算符确保了一致的结果，因为这些运算符不满足独立性。对一个命题的集体判断不仅取决于对该命题的个体判断，还取决于对_所有_其他议程项目的考虑。将关于合并方法的结果应用于个体判断的聚合是很自然的（Pigozzi 2006）。

判断聚合中的不可能性结果如何与_IC_合并运算符能够确保一致的集体结果相一致？原因在于合并运算符违反了独立性条件，这是不可能性定理对聚合函数施加的要求之一。独立性被证明是一种具有工具性吸引力的条件，因为它保护聚合函数免受战略操纵（Dietrich 2006; Dietrich and List 2007b）。这意味着个体没有兴趣提交不真诚的判断集，以获得更好的结果。然而，独立性在文献中被批评为不适合聚合逻辑上相互关联的命题的_期望_（Chapman 2002; Mongin 2008）。显然，通过采用_IC_来阻止不可接受的结果，可以避免悖论结果。然而，值得注意的是，在判断聚合中，集体合理性条件（要求逻辑一致的输出）起到了与信念合并中的_IC_类似的作用，即阻止不可接受的结果，如不一致的多数判断。此外，即使我们明确将附加的完整性约束引入判断聚合框架中，判断聚合的不可能性结果仍然存在（参见 Dietrich and List 2008b; Grandi 2012）。

已经观察到（Brams 等人，2007a），多数投票最小化了汉明距离的总和。这意味着，每当以命题为基础的多数投票选择一致的判断集时，_minisum_规则会选择相同的结果。多数投票有资格成为民主的。关注基于多数距离的程序的另一个原因是，个体判断的聚合目标应该是正确的决策，而不是个体不满的公平分配。多数投票与正确决策之间的认识联系已经在_康多塞法官定理_中指出。该定理表明，当选民是独立的，并且有比随机更好的相等概率是正确的时，多数规则确保选择正确的决策，并且随着选民群体规模的增加，这样做的概率接近 1（有关此内容和多数规则的一些更正式的论证，请参见 List 2013）。

让我们考虑三个法官的例子，并看看在应用_minisum_规则时我们得到了什么。法律原则对应于 IC={(p∧q)↔r}。法院由代表法官的多重集合 E={K1,K2,K3}表示，其中包含了三个法官的判断集 K1,K2,K3。三个判断集及其相应的模型如下：

K1={p,q,r} mod(K1)={(1,1,1)}; K2={p,¬q,¬r} mod(K2)={(1,0,0)}; K3={¬p,q,¬r} mod(K3)={(0,1,0)}.

[表 2](https://plato.stanford.edu/entries/belief-merging/#table2) 显示了最小化汉明距离总和的多数运算符的结果。第一列是命题变量_p_，*q_和_r_的所有解释。不是_IC_的模型具有阴影背景。因此，例如，(1,0,1)不能被选为集体结果，因为它违反了法律原则。在_dH(⋅,K1)* ，*dH(⋅,K2)* 和_dH(⋅,K3)_ 列中的数字是每个_Ki_与相应解释之间的汉明距离。在最后一列中是汉明距离的总和。

\| | dH(⋅,K1) | dH(⋅,K2) | dH(⋅,K3) | Σ(dH(⋅,E)) |

\| --- | --- | --- | --- | --- |

\| (1,1,1) | 0 | 2 | 2 | 4 |

\| (1,1,0) | 1 | 1 | 1 | 3 |

\| (1,0,1) | 1 | 3 | 1 | 5 |

\| (1,0,0) | 2 | 2 | 0 | 4 |

\| (0,1,1) | 1 | 1 | 3 | 5 |

\| (0,1,0) | 2 | 0 | 2 | 4 |

\| (0,0,1) | 2 | 2 | 2 | 6 |

\| (0,0,0) | 3 | 1 | 1 | 5 |

表 2

我们可以看到，没有_IC_的情况下，基于距离的多数运算符会选择与命题多数投票相同（不一致）的结果，即(1,1,0)。这是离_E_最近的结果。然而，合并运算符不能选择(1,1,0)，因为这个结果违反了 IC。除去阴影行，只有四种解释可以被选为集体判断集，即(1,1,1)、(1,0,0)、(0,1,0)和(0,0,0)。其中有三种是最小化距离的结果。因此，当使用基于距离的聚合时，可以避免集体不一致。然而，这种方法并不总能保证唯一的结果。在法庭的例子中，这种聚合选择了三个模型(1,1,1)、(1,0,0)和(0,1,0)作为群体立场。从技术上讲，这被称为一个 "不确定" 的过程，如果我们希望确保唯一的结果（在社会选择理论中很常见），则需要结合一个决胜规则。

计算机科学中开发的合并技术在判断聚合问题中的适用性并不意味着这两个学科有相同的目标。正如我们所见，信念合并的最初动机是定义从不同来源聚合信息的方式。由于这些来源对信息的访问可能不同，因此不假设外部给定议程。这与判断聚合框架不同，在判断聚合中，个体需要对给定的一组项目提交自己的意见。信念合并和判断聚合不仅在它们聚合的输入类型上有所不同，它们的输出结果也不同：对于信念合并来说，是满足一些给定完整性约束的集体基础；对于判断聚合来说，是对给定议程的集体判断。

另一个区别在于判断聚合假设所有成员都是理性的，因此他们都提交一致的判断集合。在信念合并中，这并非必需。代理人可以提交与_IC_（Grégoire 2004）不一致的信念基础。如果个体提交的判断违反完整性约束，该判断集将不会成为代表群体立场的候选集之一。然而，他的输入不会被忽视，并将在合并过程中予以考虑。在信念合并设置中，也很容易考虑到对某个项目表达意见的弃权可能性。如果个体需要对_p_、_q_和_r_发表意见，其中一个代理人相信_q_和_r_是真实的，但对_p_没有明确的意见，这将被表示为 mod(K1)={(1,1,1)，(0,1,1)}，并相应地计算距离。在判断聚合框架中，对判断集合的完整性要求也已经被削弱。List 和 Pettit（2002）首次在超过半数和一致性规则的背景下讨论了完整性的削弱。后来，研究表明（Gärdenfors 2006；Dokow 和 Holzman 2010），当不假设判断集合是完整的时，任何独立和一致的聚合函数都会变得弱寡头制，也就是说，个体的一个子集将决定集体结果。直观地说，这比独裁主义要好，尽管在只有一个个体属于该子集的情况下，它会退化为独裁主义。Dietrich 和 List（2008a）独立地获得了与（Dokow 和 Holzman 2010）中关于寡头规则的等价结果。

最后，如果基于模型的合并方法是语法相关的，判断聚合明确允许语法相关性。这可能导致决策框架问题（Cariani 等，2008 年）或逻辑议程操纵（Dietrich，2006 年），当一个判断问题可以使用两个逻辑上等价但语法上不同的议程来呈现时。

信念合并与判断聚合之间的关系在（Everaere 等人，2015 年，2017 年）中可以找到正式的调查。正如我们所见，信念合并将命题信念基础的配置文件作为输入，其中这些基础代表了某个个体的信念，而不限于给定的议程。另一方面，判断聚合要求人们就一组特定问题提交他们的判断。分析基于这样一个假设，即个体的信念允许推导出她对议程项目的意见。因此，在（Everaere 等人，2015 年）中定义了一个_投影函数 p_（假定对所有个体都相同）。这种投影函数的作用正是从个体的信念（信念合并的输入）开始确定代理人的判断（判断聚合运算符的输入）。因此，例如，如果一个人只相信 a∧b，并且议程项目之一是_a_，那么投影函数可以推导出该人在_a_上提交“是”的判断。然而，如果她只相信_a_，并且议程项目之一是 a∧b，她可能无法对该项目提交判断。因此，在（Everaere 等人，2015 年）中的个体判断集不一定是完整的（个体可以对某些议程问题弃权）。使用投影_p_，考虑了从信念基础配置文件中导出集体判断的两条路径。沿着一条路径（合并然后投影），首先使用合并运算符合并个体信念基础，然后通过投影_p_计算集体判断。沿着另一条路径（投影然后聚合），从个体基础开始，首先使用_p_计算个体判断集，然后使用判断聚合程序对给定议程确定集体判断。因此，所讨论的问题是两条路径得到的两个集体判断是否一致。考虑了两种情况：一般情况（不完整的议程）和议程完整的情况（即包含所有可能的解释）。例如，议程 A={¬a∧¬b,¬a∧b,a∧¬b,a∧b}是完整的，而议程 A={¬a∧¬b,¬a∧b,a∧¬b}不完整。因此，如果一个人相信 a∧b，她在第一个议程中的判断集将是(0,0,0,1)，在第二个议程中将是(0,0,0)，这可能导致根据是使用合并然后投影路径还是投影然后合并路径而产生不同的集体结果。通过适当选择议程，可以操纵结果的事实已经在判断聚合文献中进行了研究（Dietrich，2016 年，Lang 等，2016 年）。在一般情况下，IC 合并方法可能会给出与满足一致性或多数保持性的判断聚合运算符得到的结果不一致的结果\[[5](https://plato.stanford.edu/entries/belief-merging/notes.html#note-5)]。在更积极的一面，当议程完整时，通过遵循两条路径得到的集体判断与满足某些 IC 合并假设的一些判断聚合运算符的性质相一致。

在前一节中，将_minisum_规则应用于合并三位法官的判断集，其基于与著名的偏好聚合规则（Kemeny 1959）相同的原则。与社会选择中发生的情况不同，判断聚合的文献一开始侧重于公理方法，并且只提出和研究了少数具体的聚合规则。可以说，计算机科学和多智能体系统研究人员对判断聚合的兴趣导致了更多具体聚合规则的定义和研究。在信念合并中起到至关重要作用的最小化思想在社会选择理论中的几个投票规则的定义中也可以找到。例如，_minisum_规则被证明与最近在判断聚合文献中引入的其他几个规则等价（Lang 等人，2017）。

计算机科学家对聚合方法的兴趣可以从判断聚合现在成为计算社会选择的话题中得到证明，这是一门促进计算机科学和社会选择理论之间交流和互动的跨学科学科。聚合规则的计算问题是计算社会选择的兴趣之一。将复杂性理论应用于聚合规则的背后的直觉是基于实用考虑来评估聚合规则的可接受性，即应用该规则的算法可行性。因此，当一个聚合规则的结果“容易”计算时，即可以通过算法在时间上与输入的大小多项式增长（只有在某些病态情况下，我们可以想象希望一个规则在可预见的未来无法返回结果）。另一方面，如果一个聚合规则是可操纵的，那么当一个个体很难操纵它时，它是可接受的。因此，聚合规则的计算复杂性的研究可能会揭示，即使一个规则是可操纵的，一个个体实际上很难对其进行操作。距离基于程序的复杂性已经得到研究（Endriss 等人，2012；Endriss 和 de Haan，2015）。判断聚合中的汉明规则的高计算复杂性反映了偏好聚合中的 Kemeny 规则也是高计算复杂的，这是在 Bartholdi 等人（1989）和 Hudry（1989）首次展示的。已经提出了一种新规则来克服基于距离的程序的高计算复杂性。平均选民规则（Grandi，2012）选择由个体提交的判断集，使其距离之和最小。因此，结果必须是提交的判断集之一。这样可以减少计算复杂性，并同时选择最具代表性的个体。

在（Miller 和 Osherson，2009）中给出了判断聚合的基于距离的方法的一般化。除了将我们应用于教义悖论的合并运算符进行了泛化（通过采用一般度量），他们还提出了另外三种基于距离的判断聚合方法。如果命题上的多数崩溃为不一致的集体判断集，一种方法（*Endpoint*）选择最接近（根据某个距离度量）一致的集体判断集作为群体结果。另外两种方法（*Full_和_Output*）通过最小改变配置文件的方式来输出一致的命题上多数集体判断集。不同之处在于_Output_允许修改后的配置文件中的个体判断集是不一致的。

Duddy 和 Piggins（2012）质疑使用汉明距离来衡量判断集之间的差异。问题在于，当议程包含逻辑上相关的命题时，汉明距离可能会导致重复计数，因为它忽略了这种相互依赖关系。例如，假设两个个体接受命题_q_，但在_p∧q_上存在分歧（一个个体接受合取，而另一个个体拒绝）。只有当他们在_p_上存在分歧时，才会发生这种情况。两个判断集_K1={¬p,q,¬(p∧q)}_ 和_K2={p,q,(p∧q)}_ 之间的汉明距离为 2。正是对_p_的分歧导致了对_p∧q_的分歧，因此距离应该只是 1。为了解决这个问题，提出了一种替代距离，它需要进行最少数量的逻辑上一致的变化，以将一个判断集转换为另一个判断集。

## 4. 其他主题

信念合并是一个抽象理论，解决了聚合符号输入的问题，而不指定这些项是信念、知识、欲望、规范等。选择最适合输入类型的合并运算符是关键。判断聚合的框架还扩展到包括其他类型态度的聚合，如（Dietrich 和 List 2010）。

信念合并的文献包括对战略操纵问题的研究（Evaraere 等，2007）。当聚合过程不具备策略无关性时，一个个体可以通过对其真实信念撒谎来操纵结果，从而获得更接近其真实偏好的结果。一般来说，当使用汉明距离时，合并运算符不具备策略无关性，而当使用激进距离时，它们具备策略无关性。关于判断聚合中战略行为的最新研究结果，请参阅（Baumeister 等，2017）。

在那些我们可以假设存在事实的情况下（例如，被告是否犯有谋杀罪），每个代理人对此有（有噪声的）意见，可以研究信念合并运算符的真实追踪特性（Hartmann 等，2010；Hartmann 和 Sprenger，2012；Cevolani，2014）。问题是某种聚合方法是否选择了正确的决策。Williamson（2009）认为，在判断聚合中，聚合基于判断的证据是最好的，因为它会导致正确的决策。他提倡的三步提案区分了三种类型的命题：证据、信念和判断。证据是支持代理人信念和判断的依据，是合并技术的合适候选。另一方面，判断最好通过决策理论来处理，将信念程度和效用映射到判断上。


## Bibliography

* Alchourrón, C.E., P. Gärdenfors, and D. Makinson, 1985, “On the Logic of Theory Change: Partial Meet Functions for Contraction and Revision”, *Journal of Symbolic Logic*, 50: 510–530.
* Arrow, K., 1951/1963, *Social Choice and Individual Values*, New York: Wiley.
* Baral, C., S. Kraus, and J. Minker, 1991, “Combining Multiple Knowledge Bases”, *IEEE Transactions on Knowledge and Data Engineering*, 3(2): 208–220.
* Baral, C., S. Kraus, J. Minker, and V. Subrahmanian, 1992, “Combining Multiple Knowledge Bases Consisting of First Order Theories”, *Computational Intelligence*, 8(1): 45–71.
* Bartholdi, J., C. Tovey, and M. Trick, 1989, “The Computational Difficulty of Manipulating an Election”, *Social Choice and Welfare*, 6: 227–241.
* Baumeister, D., J. Rothe, and A.K. Selker, 2017, “Strategic Behavior in Judgment Aggregation”, in U. Endriss (ed.), *Trends in Computational Social Choice*, AI Access, pp. 145–168.
* Benferhat, S., D. Dubois, J. Lang, H. Prade, A. Saffiotti, and P. Smets, 1998, “A General Approach for Inconsistency Handling and Merging Information in Prioritized Knowledge Bases”, in *Proceedings of the Sixth International Conference on Principles of Knowledge Representation and Reasoning* (KR’98), pp. 466–477.
* Black, D., 1948, “On the Rationale of Group Decision Making”, *The Journal of Political Economy*, 56: 23–34.
* Bloch, I., A. Hunter, A. Ayoun, S. Benferhat, P. Besnard, L. Cholvy, R. Cooke, D. Dubois and H. Fargier, 2001, “Fusion: general concepts and characteristics”, *International Journal of Intelligent Systems*, 16: 1107–1134.
* Borgida, A. and T. Imielinski, 1984, “Decision Making in Committees: A Framework for Dealing with Inconsistency and Non-Monotonicity”, in *Proceedings Workshop on Nonmonotonic Reasoning*, pp. 21–32.
* Brams, S.J., D.M. Kilgour, and M.R. Sanver, 2007a, “A Minimax Procedure for Negotiating Multilateral Treaties”, in R. Avenhaus and I. W. Zartman (eds.), *Diplomacy Games: Formal Models and International Negotiations*, Berlin: Springer, pp 265–282.
* –––, 2007b, “A Minimax Procedure for Electing Committees”, *Public Choice*, 132: 401–420.
* Cariani, F., M. Pauly, and J. Snyder, 2008, “Decision Framing in Judgment Aggregation”, *Synthese*, 163(1): 1–24.
* Cevolani, G., 2014, “Truth Approximation, Belief Merging and Peer Disagreement”, *Synthese*, 191(11): 2383–2401.
* Chapman, B., 2002, “Rational Aggregation”, *Politics, Philosophy, Economics*, 1(3): 337–354.
* Chawathe, S., H. Garcia Molina, J. Hammer, K. Ireland, Y. Papakonstantinou, J. Ullman, and J. Widom, 1994, “The TSIMMIS Project: Integration of Heterogeneous Information Sources”, in *Proceedings of IPSJ Conference*, pp. 7–18.
* Cholvy, L., 1998, “Reasoning about Merged Information”, in D.M. Gabbay, and Ph. Smets (eds.), *Handbook of Defeasible Reasoning and Uncertainty Management Systems*, Vol. 3, Dordrecht: Kluwer Academic Publishers, pp. 233–263.
* Condorcet, N. de, 1785, *Essai sur l’Application de l’Analyse à la Probabilité des Décisions Rendues à la Pluralité des Voix*, Paris.
* Delgrande, J.P., D. Dubois, and J. Lang, 2006, “Iterated Revision as Prioritized Merging”, in *Proceedings of the 10th International Conference on Knowledge Representation and Reasoning* (KR’06), pp. 210–220.
* Dietrich, F., 2006, “Judgment Aggregation: (Im)Possibility Theorems”, *Journal of Economic Theory*, 126: 286–298.
* –––, 2007, “A Generalised Model of Judgment Aggregation”, *Social Choice and Welfare*, 28(4): 529–565.
* –––, 2016, “Judgment Aggregation and Agenda Manipulation”, *Games and Economic Behavior*, 95: 113–136.
* Dietrich, F. and C. List, 2007a, “Arrow’s Theorem in Judgment Aggregation”, *Social Choice and Welfare*, 29: 19–33.
* –––, 2007b, “Strategy-proof Judgment Aggregation”, *Economics and Philosophy*, 23: 269–300.
* –––, 2008a, “Judgment Aggregation Without Full Rationality”, *Social Choice and Welfare*, 31: 15–39.
* –––, 2008b, “Judgment Aggregation Under Constraints”, in T. Boylan and R. Gekker, eds., *Economics, Rational Choice and Normative Philosophy*, Routledge, pp. 111–123.
* –––, 2010, “The Aggregation of Propositional Attitudes: Towards a General Theory”, in *Oxford Studies in Epistemology*, vol. 3, Oxford: Oxford University Press, pp. 215–234.
* Dokow, E. and R. Holzman, 2010, “Aggregation of Binary Evaluations with Abstentions”, *Journal of Economic Theory*, 145(2): 544–561.
* Duddy, C. and A. Piggins, 2012, “A Measure of Distance Between Judgment Sets”, *Social Choice and Welfare*, 39: 855–867.
* Eckert, D. and C. Klamler, 2007, “How puzzling is judgment aggregation? Antipodality in distance-based aggregation rules”, Working paper, University of Graz.
* Elmagarmid, A., M. Rusinliewicz, and A. Sheth (eds.), 1999, *Management of Heterogeneous and Autonomous Database Systems*, San Francisco, CA, USA: Morgan Kaufmann.
* Elster, J., 2013, “Excessive Ambitions (II)”, *Capitalism and Society*, 8(1): Article 1 \[[Elster 2013 available online](http://papers.ssrn.com/sol3/papers.cfm?abstract_id=2207111)]
* Endriss, U., 2016, “Judgment Aggregation”, in F. Brandt, V. Conitzer, U. Endriss, J. Lang, A. Procaccia (eds.), *Handbook of Computational Social Choice*, Cambridge: Cambridge University Press, pp. 399–426.
* Endriss, U. and R. de Haan, 2015, “Complexity of the Winner Determination Problem in Judgment Aggregation: Kemeny, Slater, Tideman, Young”, in *Proceedings of the 14th International Conference on Autonomous Agents and Multiagent Systems*, IFAMAS, pp. 117–125.
* Endriss, U., U. Grandi, and D. Porello, 2012, “Complexity of Judgment Aggregation”, *Journal of Artificial Intelligence Research*, 45: 481–514.
* Everaere, P., S. Konieczny, and P. Marquis, 2007, “The Strategy-Proofness Landscape of Merging”, *Journal of Artificial Intelligence Research (JAIR)*, 28: 49–105.
* –––, 2015, “Belief Merging versus Judgment Aggregation”, in *Proceedings of the 2015 International Conference on Autonomous Agents and Multiagent Systems* (AAMAS 15), pp. 999–1007.
* –––, 2017, “An Introduction to Belief Merging and its Links to Judgment Aggregation”, in U. Endriss (ed.), *Trends in Computational Social Choice*, AI Access Books, pp. 123–143.
* Fermé, E. and S.O. Hansson, 2018, *Belief Change. Introduction and Overview*, Springer.
* Gärdenfors, P., 1988, *Knowledge in Flux: Modeling the Dynamics of Epistemic States*, Cambridge, MA: MIT Press.
* –––, 2006, “A Representation Theorem for Voting with Logical Consequences”, *Economics and Philosophy*, 22: 18–190.
* Gauwin, O., S. Konieczny, and P. Marquis, 2005, “Conciliation and Consensus in Iterated Belief Merging”, in *Proceedings of the 8th European Conference on Symbolic and Quantitative Approaches to Reasoning with Uncertainty*, Berlin: Springer, pp. 514–526.
* Ginsberg, M., 1986, “Counterfactuals”, *Artificial Intelligence*, 30(1): 35–79.
* Goldman, A., 1999, *Knowledge in a Social World*, Oxford: Oxford University Press.
* –––, 2004, “Group Knowledge versus Group Rationality: Two Approaches to Social Epistemology”, *Episteme, A Journal of Social Epistemology*, 1(1): 11–22.
* –––, 2010, “Social Epistemology”, *The Stanford Encyclopedia of Philosophy* (Summer 2010 Edition), Edward N. Zalta (ed.), URL = <[Social Epistemology (Stanford Encyclopedia of Philosophy/Summer 2010 Edition)](https://plato.stanford.edu/archives/sum2010/entries/epistemology-social/)>.
* Grégoire, E., 2004, “Extension of a Distance-based Fusion Framework”, in *Proceedings of the 8th International Conference on Sensor Fusion: Architectures, Algorithms and Applications*, pp. 282–286.
* Grégoire, E. and S. Konieczny, 2006, “Logic-based Approaches to Information Fusion”, *Information Fusion*, 7: 4–18.
* Grandi, U., 2012, *Binary Aggregation with Integrity Constraints*, Ph.D. thesis, ILLC, University of Amsterdam \[[Grandi 2012 available online](https://www.illc.uva.nl/Research/Publications/Dissertations/DS-2012-08.text.pdf)].
* Grossi, D., 2009, “Unifying Preference and Judgment Aggregation”, in *Proceedings of the 8th International Conference on Autonomous Agents and Multiagent Systems*, pp. 217–224.
* Grossi, D. and G. Pigozzi, 2014, *Judgment Aggregation: A Primer*, San Rafael, CA: Morgan & Claypool.
* Hansson, S.O., 2011, “Logic of Belief Revision”, *The Stanford Encyclopedia of Philosophy* (Fall 2011 Edition), Edward N. Zalta (ed.), URL = <[Logic of Belief Revision (Stanford Encyclopedia of Philosophy/Fall 2011 Edition)](https://plato.stanford.edu/archives/fall2011/entries/logic-belief-revision/)>.
* Hartmann, S., G. Pigozzi, and J. Sprenger, 2010, “Reliable Methods of Judgment Aggregation”, *Journal of Logic and Computation*, 20(2): 603–617.
* Hartmann, S. and J. Sprenger, 2012, “Judgment Aggregation and the Problem of Tracking the Truth”, *Synthese*, 187(1): 209–221.
* Hudry, O., 1989, *Recherches d’Ordres Médians: Complexité, Algorithmique et Problèmes Combinatoires*, Ph.D. thesis, Telecom Paris Tech.
* Katsuno, H. and A.O. Mendelzon, 1991, “Propositional Knowledge Base Revision and Minimal Change”, *Artificial Intelligence*, 52: 263–294.
* Kemeny, J., 1959, “Mathematics without numbers”, *Daedalus*, 88: 577–591.
* Kim, W. (ed.), 1995, *Modern Database Systems: The Object Model, Interoperability and Beyond*, New York: Addison Wesley.
* Konieczny, S., 2000, “On the Difference between Merging Knowledge Bases and Combining them”, in A.G. Cohn, F. Giunchiglia, and B. Selman, (eds.), *KR2000: Principles of Knowledge Representation and Reasoning*, San Francisco: Morgan Kaufmann, pp. 135–144.
* Konieczny, S. and R. Pino Pérez, 1998, “On the Logic of Merging”, in *Proceedings of the 6th International Conference on Principles of Knowledge Representation and Reasoning*, San Francisco: Morgan Kaufmann, pp. 488–498.
* –––, 1999, “Merging with Integrity Constraints”, in *Proceedings of the 5th European Conference on Symbolic and Quantitative Approaches to Reasoning with Uncertainty* (ECSQARU ’99), LNAI 1638, pp. 233–244.
* –––, 2002, “Merging Information under Constraints: A Logical Framework”, *Journal of Logic and Computation*, 12: 773–808.
* Kornhauser, L.A., 1992, “Modeling Collegial Courts. II. Legal Doctrine”, *Journal of Law, Economics, and Organization*, 8: 441–470.
* Kornhauser, L.A. and L.G. Sager, 1986, “Unpacking the Court”, *Yale Law Journal*, 96: 82–117.
* –––, 1993, “The One and the Many: Adjudication in Collegial Courts”, *California Law Review*, 81: 1–51.
* –––, 2004, “The Many as One: Integrity and Group Choice in Paradoxical Cases”, *Philosophy & Public Affairs*, 32(3): 249–276.
* Kowalski, R., 1978, “Logic for data description”, in H.G.J. Minker (ed.), *Logic and data bases*, New York: Plenum, pp. 77–102.
* Lang, J., M. Slavkovik, and S. Vesic, 2016, “Agenda Separability in Judgment Aggregation”, in *Proceedings of the Thirtieth Conference on Artificial Intelligence*, Palo Alto: Association for the Advancement of Artificial Intelligence (AAAI), pp. 1016–1022.
* Lang, J., G. Pigozzi, M. Slavkovik, L. van der Torre, and S. Vesic, 2017, “A Partial Taxonomy of Judgment Aggregation Rules and their Properties”, *Social Choice and Welfare*, 48(2): 327–356.
* Liberatore, P. and M. Schaerf, 1995, “Arbitration: a Commutative Operator for Belief Revision”, in *Proceedings of the Second World Conference on the Fundamentals of Artificial Intelligence*, pp. 217–228.
* –––, 1998, “Arbitration (or How to Merge Knowledge Bases)”, *IEEE Transactions on Knowledge and Data Engineering*, 10(1): 76–90.
* Lin, J., 1995, *Frameworks for Dealing with Conflicting Information and Applications*, Ph.D. thesis, University of Toronto.
* –––, 1996, “Integration of Weighted Knowledge Bases”, *Artificial Intelligence*, 83: 363–378.
* Lin, J. and A. Mendelzon, 1996, “Merging databases under constraints”, *International Journal of Cooperative Information Systems*, 7: 55–76.
* –––, 1999, “Knowledge Base Merging by Majority”, in *Dynamic Worlds: From the Frame Problem to Knowledge Management*, R. Pareschi and B. Fronhöfer (eds), Norwell, MA: Kluwer, pp. 195–218.
* List, C., 2002, “A Possibility Theorem on Aggregation over Multiple Interconnected Propositions”, *Mathematical Social Sciences*, 45(1): 1–13.
* –––, 2013, “Social Choice Theory”, *The Stanford Encyclopedia of Philosophy* (Winter 2013 Edition), Edward N. Zalta (ed.), URL = <[Social Choice Theory (Stanford Encyclopedia of Philosophy/Winter 2013 Edition)](https://plato.stanford.edu/archives/win2013/entries/social-choice/)>.
* List, C. and P. Pettit, 2002, “Aggregating sets of judgments: an impossibility result”, *Economics and Philosophy*, 18: 89–110.
* –––, 2004, “Aggregating Sets of Judgments: Two Impossibility Results Compared”, *Synthese*, 140: 207–235.
* List, C. and C. Puppe, 2009, “Judgment Aggregation: A Survey”, in P. Anand, C. Puppe, and P. Pattanaik (eds.), *The Handbook of Rational and Social Choice*, Oxford: Oxford University Press, pp. 457–482.
* Meyer, T., A. Ghose, and S. Chopra, 2001, “Social Choice, Merging and Elections”, in *Proceedings of the 6th European Conference on Symbolic and Quantitative Approaches to Reasoning with Uncertainty*, Benferhat and Besnard (eds.), Vol. 2143 of *Lecture Notes in Artificial Intelligence*, Berlin: Springer, pp. 466–477.
* Miller, M.K. and D. Osherson, 2009, “Methods for Distance-based Judgment Aggregation”, *Social Choice and Welfare*, 32(4): 575–601.
* Mongin, P., 2008, “Factoring Out the Impossibility of Logical Aggregation”, *Journal of Economic Theory*, 141: 100–113.
* Morreau, M., 2014, “Arrow’s Theorem”, *The Stanford Encyclopedia of Philosophy* (Winter 2014 Edition), Edward N. Zalta (ed.), URL = [https://plato.stanford.edu/archives/win2014/entries/arrows-theorem/](https://plato.stanford.edu/archives/win2014/entries/arrows-theorem/).
* Pauly, M. and M. van Hees, 2006, “Logical Constraints on Judgment Aggregation”, *Journal of Philosophical Logic*, 35: 569–585.
* Pettit, P., 2001, “Deliberative Democracy and the Discursive Dilemma”, *Philosophical Issues*, 11: 268–299.
* Pigozzi, G., 2006, “Belief merging and the discursive dilemma: an argument-based account to paradoxes of judgment aggregation”, *Synthese*, 152: 285–298.
* Poisson, S.D., 1837, *Recherches sur la probabilité des jugements en matière criminelle et en matière civile: précédées des règles générales du calcul des probabilités*, Paris.
* Porello, D., 2017, “Judgment Aggregation in Non-Classical Logics”, *Journal of Applied Non-Classical Logics*, 27(1–2): 106–139.
* Reiter, R., 1988, “On Integrity Constraints”, in M.Y. Vardi (ed.), *Proceedings of the Second Conference on the Theoretical Aspects of Reasoning about Knowledge*, San Francisco: Morgan Kaufmann, pp. 97–111.
* Revesz, P., 1993, “On the Semantics of Theory Change: Arbitration between Old and New Information”, in C. Beeri (ed.), *Proceedings of the Twelfth ACM Symposium on Principles of Database Systems*, Washington D.C., pp. 71–82.
* –––, 1997, “On the Semantics of Arbitration”, *International Journal of Algebra and Computation*, 7(2): 133–160.
* Roth, A.S., 2011, “Shared Agency”, *The Stanford Encyclopedia of Philosophy* (Spring 2011 Edition), E.N. Zalta (ed.), URL = <[Shared Agency (Stanford Encyclopedia of Philosophy/Spring 2011 Edition)](https://plato.stanford.edu/archives/spr2011/entries/shared-agency)>.
* Sen, A.K., 1970, *Collective Choice and Social Welfare*, San Francisco: Holden-Day.
* Spector, H., 2009, “The Right to a Constitutional Jury”, *Legisprudence*, 3(1): 111–123.
* Subrahmanian, V.S., 1994, “Amalgamating Knowledge Bases”, *ACM Transactions on Database Systems*, 19(2): 291–331.
* Vacca, R., 1921, “Opinioni Individuali e Deliberazioni Collettive”, *Rivista Internazionale di Filosofia del Diritto*, 52: 52–59.
* Willamson, J., 2009, “Aggregating Judgments by Merging Evidence”, *Journal of Logic and Computation*, 19(3): 461–473.
* Xuefeng, W., 2018, “Judgment Aggregation in Nonmonotonic Logic”, *Synthese*, 195(8): 3651–3683.

## Academic Tools

| ![sep man icon](../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=belief-merging).                                                                      |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![sep man icon](../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/belief-merging/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
| ![inpho icon](../.gitbook/assets/inpho.png)         | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=belief-merging\&redirect=True) at the Internet Philosophy Ontology Project (InPhO).   |
| ![phil papers icon](../.gitbook/assets/pp.png)      | [Enhanced bibliography for this entry](https://philpapers.org/sep/belief-merging/) at [PhilPapers](https://philpapers.org/), with links to its database.                          |

## Other Internet Resources

\[Please contact the author with suggestions.]

## Related Entries

[Arrow’s theorem](https://plato.stanford.edu/entries/arrows-theorem/) | [epistemology: social](https://plato.stanford.edu/entries/epistemology-social/) | [logic: of belief revision](https://plato.stanford.edu/entries/logic-belief-revision/) | [social choice theory](https://plato.stanford.edu/entries/social-choice/)

### Acknowledgments

I am indebted to Eric Pacuit and to an anonymous reviewer of the updated entry, who provided many valuable comments and suggestions that greatly improved the content and readability of this entry, and to Erman Acar who pointed out some typos in the previous version.

[Copyright © 2021](https://plato.stanford.edu/info.html#c) by\
[Gabriella Pigozzi](http://www.pigozzi.org/) <[*gabriella.pigozzi@lamsade.dauphine.fr*](mailto:gabriella%2epigozzi%40lamsade%2edauphine%2efr)>

