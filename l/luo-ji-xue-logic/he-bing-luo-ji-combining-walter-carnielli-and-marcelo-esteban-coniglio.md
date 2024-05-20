# 合并逻辑 combining (Walter Carnielli and Marcelo Esteban Coniglio)

*首次发表于 2007 年 9 月 13 日；实质修订于 2020 年 7 月 30 日。*

逻辑学的合并主题仍然是当代逻辑学中一个年轻的话题。除了通过定义混合逻辑系统来满足不同性质逻辑运算符的逻辑需求，例如问题逻辑（对问题的逻辑分析）需要结合认知逻辑和义务逻辑，从而提供纯粹的哲学兴趣之外，还存在许多实用和方法论上的原因来考虑合并逻辑。事实上，在计算机科学中，将形式逻辑作为知识表示工具经常需要将多个逻辑系统集成到一个统一的环境中。

逻辑哲学中的重要问题，例如：“为什么存在这么多逻辑而不仅仅是一个？”（甚至是没有一个），例如在 Epstein 1995 中提出的问题，可以自然地与其他几个问题相对立：如果确实存在许多逻辑，它们是互斥的还是兼容的？是否可以将不同的逻辑组合成一致的系统，以便在应用中使用它们并揭示复杂逻辑的属性？此外，如果我们可以组合逻辑，为什么不能将其分解？如果将逻辑分解为基本子逻辑，是否可以通过组合这些片段来恢复它？逻辑的哪些属性可以转移到它们的组合中？这类问题在文献中只有部分得到解决，并反映了这一主题发展中需要面对的挑战。

---

## 1. 合并逻辑的哲学和方法论动机

大卫·休谟在他著名的《人性论》中引发了一场广泛争议（见休谟 2000 年：第 3 卷，第 1 部分，第 1 节，第 27 段），他指出有时人们根据“是什么”这种描述性陈述来得出涉及“应该是”的规范性陈述的结论。休谟认为以这种方式使用逻辑涉及到一种危险的主题转换。因此，“应该”是否可以从“是”中推导出来已成为伦理学理论的核心问题之一，大多数解释者认为，对于休谟来说，这种推导是不可能的。

从我们关于逻辑的组合的观点来看，有必要研究合并行为逻辑和真理逻辑的特性：为了从“是”跳到“应该”，一些作者提出（见例如 Schurz 1997 年）必须有一个明确的“桥梁原则”，专门连接“是”和“应该”。根据 Schurz（1991 年）的说法，一个公理模式 X 是一个桥梁原则，当且仅当 X 至少包含一个在 ◯（道义“义务”运算符）的范围内至少出现一次的模式字母，并且至少有一个在任何 ◯ 的范围之外出现一次。因此，例如，p→◯p 是代表“是-应该”的桥梁原则，这将缓解休谟的批评。另一方面，备受争议的道德原则“应该意味着能够”（有争议地归因于 I.康德，见 Baumgardt 1946 年）可以通过另一个桥梁原则来形式化：◯p→◊p，其中 ◊ 表示真理“可能性”运算符。

显然，桥梁原则并不能解决任何哲学问题，比如“是-应该问题”；然而，它们有助于澄清问题并揭示隐藏的假设。将逻辑学合并的想法通过明确表明，“是”和“应该”确实是独立的概念，从而对这类问题进行了澄清。这是通过对涉及的逻辑（在本例中是真理和道义逻辑）的组合进行形式分析，或者通过将复杂逻辑（在本例中是双模态逻辑）分解为更简单的逻辑来阐明的。在这种情况下，将逻辑学合并可以被视为简化涉及异质推理的问题的工具。

“应该”并不作为谓词传达，而是作为一个模态运算符，范围涵盖行为或事态。这一事实导致了对这个有几个世纪历史的问题的形式处理的延迟。

只有在一般模态逻辑的发展之后，才有可能进行这样的处理。事实上，我们在这里处理的是双模态逻辑，只有在更深入地理解混合真理和道义逻辑的语义微妙之后，才能正确处理。此外，根据一些哲学家的观点，他们认为无法将“是”和“应该”联系起来（即，他们支持休谟的观点，即不可能进行非平凡的“是-应该”推导），必须使用一阶、真理和道义逻辑的组合（参见例如 Stuhlmann-Laeisz 1983 和 Schurz 1997）。

A. Prior（1960 年）使用当代模态逻辑的工具，试图以形式术语来描述规范性和非规范性句子之间的区别，这使他能够定义“描述性内容”与“规范性内容”的意义。然而，出现了一个问题，即混合句子，它们既有描述性成分又有规范性成分，Prior 提出了一个悖论：无论我们在非规范性和规范性句子之间划分何种区别，仅仅使用经典命题逻辑的法则就可能出现从非规范性前提到规范性结论的意外推理。例如，考虑以下两个推理：

* （1）“在英国喝茶很常见。因此：要么在英国喝茶很常见，要么所有新西兰人都应该学会说拉丁语”，

 形式化为：

* `(1′)d⊢d∨◯s.`

 和

* (2)“在英国喝茶很常见，或者所有新西兰人都应该学会说拉丁语。在英国喝茶并不常见。因此，所有新西兰人都应该学会说拉丁语”，

 正式化为：

* `(2′)d∨◯s,¬d⊢◯s.`

如果将混合句 `d∨◯s` 视为规范性的话，那么(1)就是一个“是-应该”推理的例子；如果将其视为非规范性的话，那么(2)就是一个“是-应该”推理的例子。因此，其中之一在 Prior 的术语中二分地代表了对休谟论题的违反。Prior 从这个悖论中得出结论，休谟的“是-应该论题”是错误的（参见 Prior 1960: 206）：人们可以从没有伦理特征的前提中推导出伦理结论。

然而，Prior 承认悖论中涉及的推理在伦理上是无关紧要或琐碎的，但是他和后来的作者都找不到一个合适的定义来解释“伦理无关性”或“伦理琐碎性”与推理的关系。

使用模态逻辑的语义，可以提出对这个结论的异议，例如在 Karmo 1988 中，以将陈述分为某些可能世界中的评价性陈述和其他世界中的描述性陈述（同时保持它们的意义）。

通过使用语言组合和逻辑组合的概念，G. Schurz（参见 Schurz 1991；另见 Schurz 1997）能够陈述一个广义的休谟命题（GH）；如第 4.1 小节所观察到的，这种处理实际上是两个模态逻辑的融合。在（GH）中，只有当一个混合句子 φ 完全与 ◯ 无关（即，在 φ 中 ◯ 的范围内的谓词可以被其他谓词替代而保持有效）时，φ 才可以从一组纯描述性句子（即，不包含 ◯ 的句子）中推导出来。此外，还证明了如果一个模态-命令一阶逻辑 L 可以在没有桥梁原则的情况下被公理化，那么（GH）在 L 中成立。

桥梁原则的概念位于语言的合并范围内。一般来说，许多桥梁原则可以在模态逻辑中明确表达，并且对于分析不同模态之间的关系是相关的。例如，如果我们将必然性 □ 和可能性 ◊ 视为原始运算符，则 ◊p→¬□¬p 是一个直观上可接受的桥梁原则，而反之则不是。

除了休谟问题之外，另一个具有内在哲学意义的双模态逻辑的例子是物理和真理模态的逻辑。在这种逻辑中，语言允许表达两种不同的必然性概念：逻辑必然性，用 □ 表示，和物理必然性，用 ⊡ 表示。

物理必然性和逻辑必然性之间最简单的连接，具有可接受的哲学意义，由以下桥梁公理给出：□p→⊡p，意味着逻辑必然性比物理必然性更强：任何逻辑上必然的事物也是物理上必然的。

由于上述桥梁公理，逻辑 KT⊡ 的结果逻辑学被 KT 的著名公理和规则所公理化，逻辑学中的两种模态都需要，语义上由具有两个可达关系的 Kripke 框架进行特征化，要求物理必要性的可达关系包含在其他可达关系中。

不仅是双模态的，而且是多模态（也称为多模态）逻辑在文献中是标准的：一个典型的例子是知识逻辑（或认知逻辑），通常具有表示 m 个代理人（或“知者”）的知识的模态算子 K1，K2，...，Km。公式 Kiα 表示“代理人 i 知道 α”，该语言能够通过 Ki¬KjKip 来表达“i 知道 j 不知道 i 知道 p”。对于多个代理人的组合逻辑，不需要额外的混合原则，但是当然可以添加桥梁公理。

因此，研究逻辑的组合的兴趣可以被看作是当代逻辑研究的多元主义观点的反映。事实上，这种桥梁公理可以原则上连接完全不同的逻辑。Van Benthem（2006）提出，组合逻辑可能会导致新现象的出现，这取决于组合的方式，并且它可能作为研究组合认知概念的灵感（也许作为模型）起作用。他甚至提出，将逻辑分为“模态逻辑”，“时间逻辑”，“认知逻辑”，“信念逻辑”，“疑问逻辑”或“义务逻辑”等子领域的分隔对哲学逻辑是有害的。

逻辑的组合与这种分隔相反：考虑到几乎任何需要分析的概念任务都涉及到关于必要性、义务、行动、时间、动词时态、知识、信念等的直接推理；从哲学的角度来看，逻辑的组合可能是研究因果关系理论、行动理论等哲学问题的正确方式。

将逻辑视为一个整体而避免分割的想法并不新鲜，从拉蒙·卢尔到戈特弗里德·W·莱布尼茨，哲学家和逻辑学家一直在构建不同逻辑或类似逻辑的机制可以相互交互和合作而不是竞争的方案。以当代术语来说，组合逻辑的最初方法是逻辑的产物（由 K. Segerberg（1973）和 V. Šehtman（1978）引入），融合（由 R. Thomason（1984）引入）和纤维化（由 D. Gabbay（1996a）引入），它们都致力于组合模态逻辑。值得注意的是，M. Fitting（1969）提供了模态逻辑融合的早期示例，预示了融合的概念。

其他的组合机制随之出现，比如参数化和时间化，这些机制更多地涉及软件规范的方面。

这些方法中的大部分已经包含在 A. Sernadas、C. Sernadas 和 C. Caleiro（1999）引入的代数纤维中，这显著提高了这些技术的多功能性，通过（通用的）范畴构造的方式，使得能够合并除模态逻辑之外的更广泛的逻辑类别。

另一方面，J. Goguen 和 R. Burstall 在广泛使用范畴论语言的基础上，引入了机构的概念，作为一种抽象模型理论，专门用于计算机科学中的应用（参见 Goguen 和 Burstall 1984, 1992）。机构也被用作合并逻辑的机制。

然而，合并逻辑不仅意味着综合或组合逻辑，还可以产生与分解逻辑相反方向的有趣示例（参见第 2 节）。分解的典范方法是可能翻译语义学，这是 Carnielli 1990 提出的一个概念，旨在帮助解决为非经典逻辑分配语义解释的问题。可能翻译语义学的示例说明了如何将复杂逻辑分析为较简单的因素。其他技术，如矩阵的直接并集和纯粹的纤维化（参见 Coniglio 和 Fernández 2005），既可以被视为组合方法，也可以被视为分解方法。

所有这些方法为逻辑学合并领域中的一个新课题开辟了道路：是否可能将给定的逻辑分解为基本逻辑？换句话说，是否存在原始逻辑，以适当的方式组合，可以产生所有（或部分）熟悉的逻辑系统？这个问题将在第 5 节重新讨论。

当我们转向高阶、模态、相关逻辑或非真值逻辑的组合时，逻辑的组合可能很快变得过于技术化，因此需要对代数纤维化的概念进行细化，例如调制纤维化（参见 C. Sernadas 等人 2002b）或加密纤维化（参见 Caleiro 和 Ramos 2007），以解决逻辑组合中的一些崩溃问题（参见第 5 节）。这自然导致了范畴论的使用作为一种通用语言和处理此类问题的工具。但事实是，逻辑的组合不一定依赖于任何高度技术化的方法，甚至一些相对简单的例子也可以非常表达。哲学和理论计算机科学之间有一个公认的交叉和互动，组合逻辑的技术也被证明是处理和更好理解 Kripke 模型的非常合适的工具。Kripke 模型在哲学逻辑领域引入后，成为计算机科学和人工智能中的重要语义结构，用于信念逻辑、知识逻辑、时间逻辑、行动逻辑等。知识表示和推理可能需要组合多种推理形式，包括时间推理的组合、描述逻辑的推理、空间和距离的推理等。组合时间和模态维度的逻辑也成为面向代理编程语言中的重要工具。逻辑组合的其他应用包括软件规范、知识表示、智能计算和量子计算的架构、安全协议和身份验证、安全计算和零知识证明系统，以及它们与形式伦理学和游戏语义学的联系。

代理人（BDI）的信念-欲望-意图模型涉及行动、意图、信念、意愿、思考、目标驱动建模等实践推理的形式表示。这种推理对于规划（尤其是对于人工代理人）至关重要。因此，自然而然地考虑将知识、信念、义务、能力、机会等简单模态逻辑结合起来，以定义更强大的 BDI 逻辑。Governatori 等人在 2002 年研究了 BDI 逻辑与 Gabbay 的一种特殊情况（见第 4.2 小节）称为交错的 fibring 语义之间的关系，表明通过交错的多模态逻辑可以处理 BDI 的（一般）逻辑解释。

但是，逻辑的组合也可以从另一个角度进行：不直接组合逻辑系统并寻找结果系统的解释，而是可以从纯数学的角度出发。例如，在 van Benthem 等人的 2006 年的论文中，作者介绍了在拓扑空间的乘积上的水平和垂直拓扑的概念，并且证明了具有水平和垂直拓扑的拓扑空间乘积的模态逻辑与 S4 与自身的融合相一致。由此得出的完备性证明与实数和有理数的一些拓扑性质有着深刻的联系。

## 2. 分裂逻辑与拼接逻辑

一个合并逻辑的方法应该能够在两个相反的方向上起作用：一方面，人们希望研究的逻辑可以被分解为较低复杂度的因素；例如，一个双模态的真理-义务逻辑可以被分解为其真理和义务片段。在这种情况下，重要的是要看研究中的逻辑是否是其因素的最小扩展，或者是否需要添加额外的桥梁原则。这种将给定逻辑分解为（可能）更简单的因素的方法被称为逻辑的分裂过程。

另一方面，人们可能有兴趣创建新的逻辑系统，其中不同的方面从给定的逻辑开始集成。这种需求通常出现在软件工程和安全领域：知识表示、算法和协议的形式化规范和验证需要使用多个逻辑。在一个不那么实用的场景中，如果人们有兴趣为直觉主义逻辑或矛盾逻辑添加模态维度，那么这种情况也是如此。此外，有趣的是确定哪些因素的属性可以转移到组合逻辑中。这个方向被称为逻辑的拼接过程。

拼接（合成方向）和分裂（分析方向）之间的基本区别考虑到人们可能心中的意图，因此每个方向都包含特定设计的技术。

拼接逻辑的范式假设了一种自下而上的视角：它将给定的逻辑合并、综合，并产生一个新的逻辑。合并后的逻辑在某种意义上应该是最小的：也就是说，如果 L 是通过某种组合过程从 L1 和 L2 获得的，那么应该期望：1）L 扩展了 L1 和 L2；2）L 是 L1 和 L2 的最小扩展。例如，某些方法可能要求 L 是 L1 和 L2 的最不保守的扩展。这一点将在第 5 节中讨论。

另一方面，分割逻辑 L 假设了一种自上而下的视角：逻辑被分解为（可能更简单的）因素。

应该强调的是，文献中发现的大多数逻辑合并方法更适合从拼接的角度来理解，重点是从熟悉的逻辑中创建一个逻辑系统。然而，一些拼接方法，如融合（见第 4.1 小节），更适合被视为将逻辑分解为更简单的片段的方法，从这个角度来看，它们也在分割方向上起作用。另一方面，可能翻译语义（见第 4.4 小节）则构成了分割视角中的典型方法。

## 3. 语言的重要性和逻辑的呈现

假设要使用某种技术将给定的两个逻辑 L1 和 L2 合并。很明显，应用于合并 L1 和 L2 的任何方法都将创建一个新的逻辑 L，其中包含两个逻辑的标记（逻辑符号，如连接词，量词，命题变量等）：L 将以混合语言定义，允许底层语言符号的组合。也就是说，逻辑系统的组合预设了各自标记的先前组合。这就是为什么组合系统的标记选择与逻辑本身一样重要的原因。例如，参数化语言的定义对于获得预期的组合逻辑至关重要（参见第 4.5 小节）。另一个例子可以在 Schurz 1991 中找到，在那里对休谟的“是-应该问题”的形式化处理（回顾第 1 节）预设了对语言的微妙组合的仔细处理。

除了为组合逻辑定义适当的语言之外，还有一个重要问题立即出现：应该以相同的方式呈现要组合的逻辑 L1 和 L2 吗？换句话说：是否可以组合由不同范式定义的逻辑？例如，如何将由序言演算定义的逻辑 L1 与由（希尔伯特风格的）公理系统表示的逻辑 L2 组合？应该如何表示结果逻辑 L：作为序言演算，作为公理系统还是作为混合证明系统？现在考虑另一种（更糟糕的）情况：逻辑 L1 通过语义手段进行描述（即通过语义结构，如赋值或 Kripke 模型），而逻辑 L2 通过句法证明系统（如自然演绎系统，序言演算或希尔伯特风格的公理化）进行呈现。组合后的逻辑应该更好地以语义或句法方式呈现？

这种烦恼在大多数情况下并不会发生，其中合并的逻辑在某种语义上是完备的，并且在语法上以一种同质的方式呈现。然而，可能会发现逻辑以奇特的方式存在；例如，线性逻辑和其他次结构逻辑没有通常的推理关系，因为推导仅通过使用多重集合或公式序列来显示。例如，将这些逻辑与通常的模态逻辑相结合并不那么明显，尽管两者都是完备的。

然而，有些逻辑只能通过语法手段或纯粹通过语义手段合理地呈现。例如，扭曲群的一阶理论被认为是不可公理化的，以及只能通过语法（证明论）术语来呈现的不完备模态逻辑。

解决合并异质逻辑问题的一种可能方法（自然地引导我们进入“什么是逻辑？”的更深层次问题）是考虑大多数逻辑（但仍然排除某些次结构逻辑）的共同组成部分：它们各自的推理关系。因此，给定以不同方式呈现的 L1 和 L2，总是可以提取各自的推理关系，然后将它们合并（例如，在适当的推理关系格中取它们的上确界）。但是，通过这种方式，得到的逻辑 L 以非常抽象的方式呈现：从 L 中只能获得其推理关系的信息，因此每个逻辑组件的特征和特殊性被彻底丧失。

回到第一个例子（将序列演算与公理系统合并），Cruz-Filipe 等人在 2008 年提出了一个更好的解决方案：其思想是定义一个抽象的证明系统形式，足够通用以编码文献中发现的主要证明机制。因此，在将 L1 和 L2 重新定义为这种抽象证明系统之后，得到的合并逻辑 L 是一个抽象证明系统，在其中可以识别出每个组成部分的原始推理规则在 L 的推导中的“遗传痕迹”。后一个问题，即如何以成分的推导来表征纤维逻辑的推导，由 S. Marcelino 等人在一系列论文中进行了仔细分析（Marcelino 等人，2015 年；Marcelino 和 Caleiro，2016 年；Marcelino 和 Caleiro，2017a 年）。请参见第 4.3 小节。

尽管上述关于合并异质逻辑的结果，将以同质方式定义的逻辑合并似乎更合理，事实上，这是文献中大多数提案的情况。例如，模态逻辑的常见组合（如融合、乘积和纤维）是在以公理方式呈现的系统之间进行的，或者在基于 Kripke 模型的类别之间进行的。因此，经常会定义不同类别的逻辑系统（推理关系、希尔伯特演算、可代数化逻辑等），并在它们之间定义适当的态射，其中逻辑的组合（或分解）出现为通用构造。代数纤维，在第 4.3 小节中将进行描述，是这种方法的一个很好的例子。

## 4. 合并和分解逻辑的方法

### 4.1 合并与产品

合并普通模态逻辑的方法由 R. Thomason（1984）引入，是合并逻辑的最早的一种通用方法之一。在最初的表述中，它通过 Hilbert 样式公理和 Kripke 语义（分别通过句法和语义方式）来合并普通模态逻辑。该方法的主要特点在下面的段落中进行了描述。

考虑形式为 ⟨W，R，V⟩ 的 Kripke 模型，其中 W 是一个非空集合（世界的集合），R⊆W×W 是一个二元关系（可达性关系），V：P→℘W 是一个估值映射，将命题变量的集合映射到 W 的幂集。设 L1 和 L2 是两个在相同经典签名上定义的命题普通模态逻辑，该签名包含了 ¬（否定）和→（蕴涵）的连接词。分别用 □1 和 □2 表示 L1 和 L2 的必然性运算符。设 M1 和 M2 分别是 L1 和 L2 的 Kripke 模型类。由于两个逻辑都是普通的，可以保证 □1 和 □2 都满足正常性公理 K 和必然性规则。然后，L1 和 L2 的合并被定义为具有两个独立方框 □1 和 □2 以及连接词 ¬（否定）和→（蕴涵）的普通双模态逻辑 L。L 的语义由形式为 ⟨W，R1，R2，V⟩ 的 Kripke 结构类 M 给出，其中 ⟨W，R1，V⟩ 和 ⟨W，R2，V⟩ 分别属于 M1 和 M2。换句话说，合并的每个结构对应于一对模型：一个模型 ⟨W，R1，V⟩ 用于 L1，一个模型 ⟨W，R2，V⟩ 用于 L2，它们共享相同的世界集合 W。从技术上讲，合并的每个结构都有 L1 的一个模型和 L2 的一个模型作为它的约简形式。

鉴于一个结构 M=⟨W,R1,R2,V⟩，可达关系 R1 用于评估盒子 □1，而 R2 用于评估 □2。由于 L 的语言是由 L1 和 L2 的签名的并集自由生成的，因此它包含混合公式，如 φ=□1(□2p→p)。现在，如果世界 w∈W 上的结构 M 满足 φ，则对于每个 w1∈W，使得 wR1w1，结构 M 在 w1 上满足(□2p→p)。但这意味着，要么存在 w2 使得 w1R2w2 且 w2∉V(p)，要么 w1∈V(p)。

关于公理系统，通过连接两个系统的（模式）公理，可以得到 L 的 Hilbert 演算。因此，L 具有两个 K 公理，两个必要性规则和仅一个 Modus Ponens（因为蕴涵→是共享的）。考虑到 L 的语言具有混合公式（如上述的 φ），现在可以通过在 L 中使用混合公式来替换给定逻辑的模式规则中出现的模式变量。例如，φ 可以通过对盒子 □1 的必要性规则的应用从公式(□2p→p)中推导出来。

融合的一个有趣例子出现在 Schurz 1991 中，当通过将纯粹的真理逻辑与纯粹的义务逻辑融合来定义一个真理义务逻辑时。这种组合被用来以形式化的方式分析休谟的“是-应该命题”（见上文第 1 节）。在 M. Fitting 的开创性论文 Fitting 1969 中，还给出了其他直观吸引人的融合例子，其中真理和义务的模态被融合在一起（在融合概念被引入之前）。

从那时起，融合一直是一个被广泛研究的主题。重要的结果是将融合应用于模拟和模态逻辑之间属性转移的问题。模拟使得正常单模态逻辑的强度变得明确，因为它们在某种意义上可以模拟所有模态逻辑（参见 Kracht 和 Wolter 1999）。关于转移，通过融合模态逻辑来保持完备性、有限模态性质、可决定性和插值等属性的研究在 Fine 和 Schurz 1996 中得到了广泛的研究。在 Kracht 和 Wolter 1991 中获得了更一般和更深入的结果，Kracht 和 Wolter 1997 中可以找到大部分这些结果的概述。这些结果显示了融合作为一种组合方法在模态逻辑范围内的稳健性，以满足组合逻辑的属性保持要求。

如何将完备性结果（以及其他模型论属性）从命题模态逻辑转移到其量化对应物，以及如何通过融合将单模态量化模态逻辑的完备性结果转移到多模态组合中，这些问题在 Schurz 2011 中进行了研究。该论文还涉及到如何将完备性从带有刚性指示符的量化模态逻辑转移到带有非刚性指示符的逻辑中。

Rasga 等人在 2010 年为带有真值标签的模态逻辑系统定义了一种范畴论方法的融合，并且证明了保持完备性需要一些谨慎的假设，而声音性则无需进一步的条件。这种方法可以处理各种逻辑（除了模态逻辑），包括几种非经典逻辑。

有趣的一点是，在从句法和语义角度合并逻辑学时存在明显的差异。例如，两个希尔伯特演算的合并应该通过简单地将两个逻辑的公理和规则放在一起来直观地获得，而语义对应则不那么明显确定。关于这一点，融合的替代方法是纤维语义（见第 4.2 小节）。

融合，即使它是一种非常自然的合并模态逻辑的方法，但对于非正常模态逻辑与正常模态逻辑的组合来说，并不明显可扩展。此外，融合专门设计用于合并模态逻辑，并且不能以明显的方式扩展到不同性质的逻辑。代数纤维，如下面的第 4.3 小节所述，构成了融合的一般化（在命题层面上），并且通常解决了合并逻辑的问题。

另一种早期合并（模态）逻辑的方法是所谓的模态逻辑乘积。这种机制在 Segerberg 1973 年和 Šehtman 1978 年分别独立引入，适用于表示时间空间信息。给定两个如上所述的模态逻辑 L1 和 L2，乘积 L1×L2 是混合签名上的双模态逻辑（带有两个方框），其特征是由 Kripke 模型 ⟨W1,R1,V1⟩ 和 ⟨W2,R2,V2⟩ 分别定义的 Kripke 结构 ⟨W1×W2,S1,S2,V1×V2⟩。其中，可达关系 S1，S2⊆(W1×W2)×(W1×W2)定义如下：

* ⟨u1,u2⟩S1⟨w1,w2⟩ 当且仅当 u1R1w1 且 u2=w2;
* ⟨u1,u2⟩S2⟨w1,w2⟩ 当且仅当 u2R2w2 且 u1=w1;
* (V1×V2)(p)=V1(p)×V2(p).

模态逻辑的产品的一个令人惊讶的特点是，一些新的模态之间的相互作用出现了。这些新的有效公式是一种桥梁原则（回顾第 1 节）。使用标准符号 ◊1φ 表示 ¬□1¬φ（对于 ◊2 类似），以下桥梁原则在产品逻辑中始终有效：

* (◊1◊2p→◊2◊1p) 逻辑学中的交换律 1；
* (◊2◊1p→◊1◊2p) 逻辑学中的交换律 2；
* (◊1□2p→□2◊1p) Church-Rosser 性质 1；
* (◊2□1p→□1◊2p) Church-Rosser 性质 2。

由于这种相互作用，不可能像合并的情况那样直接获得两个模态逻辑的乘积的希尔伯特演算。必须明确地将桥接原则添加到原始公理的并集中，以确保完备性。

一般来说，模态逻辑的乘积公理化是一个微妙的问题，可能会出现一些有趣的现象。例如，二维模态乘积逻辑 S5×S5 具有有限的公理化，但对于 n≥3，n 维模态乘积逻辑 S5n 是不可有限公理化的。在 Kurucz 和 Marcelino 2012 年的研究中，发现了第一个可判定的二维有限公理化模态逻辑乘积的例子，如 K4.3×S5，它们无法被有限公理化。这些是一些逻辑学上的例子，它们遭受了我们所称的有限崩溃现象，即有限公理化性质在乘积作用下被破坏。

在 Hampson、Kikot、Kurucz 和 Marcelino 2020 年的研究中，通过分析涉及差异逻辑 Diff 的二维模态乘积逻辑，解决了对于非有限公理化的有限公理化逻辑乘积的规范公理化问题。差异逻辑 Diff 由一组在所有帧 ⟨W，≠W⟩ 中有效的单模态公式定义，其中 ≠W 是非空集合 W 上的非恒等关系；这些帧被称为差异帧。差异逻辑 Diff 可以被描述为所有帧 ⟨W，R⟩ 的逻辑，其中 R 是伪等价关系，即 R 是对称的且伪传递的：如果 R(x,y)和 R(y,z)，则 x=z 或 R(x,z)。特别地，由于等价关系是 Diff 的帧，后者是 S5 的子逻辑。该论文证明了，尽管 Diff 是 S5 的有限公理化子系统，但二维乘积逻辑 Diff×Diff 是非有限公理化的，并且可以通过无限多个 Sahlqvist 公理进行公理化。让 Diff×sqDiff 成为 Diff×Diff 的“平方”版本，它由所有差异帧 ⟨U，≠U⟩×⟨V，≠V⟩ 的产品组成，其中集合 U 和 V 具有相同的基数；因此 Diff×sqDiff 包含逻辑 Diff×Diff。该论文证明了前者不是后者的有限公理化扩展，并且可以通过添加无限多个 Sahlqvist 公理进行公理化。模态逻辑 Diff×Diff 和 Diff×sqDiff 是有限公理化模态逻辑的乘积的第一个例子，它们不是有限公理化的，尽管可以通过显式的无限集合的规范（Sahlqvist）公理进行公理化。

与融合的情况类似，逻辑乘积的技术不允许对模态逻辑以外的逻辑进行直接推广。

### 4.2 合并（或通过函数进行合并）

模态逻辑的纤维语义最初是在 Gabbay 1996a 和 Gabbay 1996b 中提出的（另请参见 Gabbay 1999）。与融合和乘积的情况类似，纤维化机制也仅适用于模态逻辑。假设与第 4.1 小节中相同的符号表示法。因此，给定 L1 和 L2，我们首先定义纤维语言（或语言的纤维化），即由命题变量 □1、□2、¬ 和→生成的语言。基本思想是考虑具有特定（实际）世界的 Kripke 模型，以及两个转移映射：h1 从 L1 的模型类 M1 的世界集合到 L2 的模型类 M2 的世界集合，以及 h2 从 L2 的模型类 M2 的世界集合到 L1 的模型类 M1 的世界集合。当 L1 的 Kripke 模型需要在实际世界 w1 上评估形式为 □2φ 的公式时，验证检查将转移到在其实际世界上对 Kripke 模型 h1(w1)中的 □2φ 的有效性检查。类似地，对于 L2 的 Kripke 模型在实际世界 w2 上评估形式为 □1φ 的公式，但现在使用映射 h2 进行。

因此，L1 和 L2 的纤维化（或函数纤维化，如 Carnielli 等人在 2008 年所称）是一种正常的双模态逻辑，其语义特征如下：设

`h1:⨄m∈M1Wm→⨄m∈M2{⟨m,w⟩ : w∈Wm}`

 和

`h2:⨄m∈M2Wm→⨄m∈M1{⟨m,w⟩ : w∈Wm}`

是一对转移映射。为简单起见，我们假设 m∈M1 的世界集合 Wm 两两不相交，M2 也是如此。给定 m∈M1∪M2，w∈Wm 和纤维语言中的公式 φ，满足 ⟨h1,h2,m,w⟩⊩φ 的定义与通常情况下递归地定义 φ 的主连接符是布尔（¬ 或→）或 φ 是原子的情况相同。对于模态，满足性定义如下：假设（不失一般性）m∈M1，并且令 h1(w)=⟨m2,w2⟩，其中 m=⟨Wm,Rm,Vm⟩，m2=⟨Wm2,Rm2,Vm2⟩。然后：

* `⟨h1,h2,m,w⟩⊩□1φ`
  当且仅当对于每个 w1，满足 wRmw1 时，⟨h1,h2,m,w1⟩⊩φ;
* `⟨h1,h2,m,w⟩⊩□2φ`
  当且仅当 `⟨h1,h2,m2,w2⟩⊩□2φ`
  当且仅当 `⟨h1,h2,m2,w3⟩⊩φ`，对于每个满足 w2Rm2w3 的 w3。

对于 i=1,2 和 m∈M2，⟨h1,h2,m,w⟩⊩□iφ 的定义是类似的。

然后，⟨h1,h2⟩ 满足 φ，记作 ⟨h1,h2⟩⊩φ，如果对于每个 m∈M1∪M2 和 w∈Wm，都有 ⟨h1,h2,m,w⟩⊩φ。最后，只要对于上述每对 ⟨h1,h2⟩，都有 ⟨h1,h2⟩⊩φ，那么 φ 在纤维语义中是有效的。

例如，给定上述的 h1,h2，假设 ⟨W2,R2,V2⟩∈M2 和 w2∈W2，使得 h2(w2)=⟨⟨W1,R1,V1⟩,w1⟩。那么：

* ⟨h1,h2,⟨W2,R2,V2⟩,w2⟩⊩□1□2¬p
* 当且仅当 ⟨h1,h2,⟨W1,R1,V1⟩,w1⟩ ⊩□1□2¬p
* 当且仅当 ⟨h1,h2,⟨W1,R1,V1⟩,w′1⟩ ⊩□2¬p，对于每个满足 w1R1w′1 的 w′1

假设 h1(w′1)=⟨⟨W′2,R′2,V′2⟩,w′2⟩。那么，后者成立当且仅当

* ⟨h1,h2,⟨W′2,R′2,V′2⟩,w′2⟩⊩□2¬p，

对于每个 w′1，使得 w1R1w′1；即，对于每个 w′1，使得 w1R1w′1，并且对于每个 w′′2，使得 w′2R′2w′′2，⟨h1,h2,⟨W′2,R′2,V′2⟩,w′′2⟩⊩¬p。这等价于说，对于每个 w′1，使得 w1R1w′1，并且对于每个 w′′2，使得 w′2R′2w′′2，w′′2∉V′2(p)。

关于公理学，通过函数合并得到的逻辑学在某些情况下可以由给定逻辑学的（模式）公理的并集来公理化。但是，有些逻辑学可能需要添加一些新的桥梁原则（混合规则和公理）以确保完备性的保持。这可能解释了融合和合并方法之间的一些差异；Gabbay 1999 中所述的合并的完备性并不能完全替代 Kracht 和 Wolter 1991 以及 Fine 和 Schurz 1996 中更为技术复杂的完备性证明。有关此讨论的更多信息，请参见 Kracht 2004。

函数合并技术是融合和乘积的有趣替代方法，但与其竞争对手一样，它无法以任何明显的方式扩展到非模态逻辑（有关通过函数合并方法适应矩阵逻辑的方法，请参见 Coniglio 和 Fernández 2005）。函数合并方法在涉及泛化方面失败的一个原因是它不是一个通用的构造（从范畴论的角度来看）。此外，由于缺乏对通过函数合并获得的逻辑的系统公理化定义，这种技术还存在另一个负面方面。下一小节描述了函数合并的范畴泛化，解决了所有提到的问题。

### 4.3 范畴（或代数）合并

为了克服上一小节中所揭示的原始合并方法的局限性，A. Sernadas 和合作者在 Sernadas 等人 1999 年的论文中提出了使用范畴论的概念工具对合并进行一般定义的方法。这个概括的中心思想很简单：假设 L1 和 L2 是要合并的两个命题逻辑。为了简单起见，假设不共享任何联结词，也就是说，要得到的逻辑 L 的语言是两个逻辑的联结词的自由组合。从范畴论的角度来看，L 的签名 C 是 L1 的签名 C1 和 L2 的签名 C2 的余积（不相交并）在签名的底层范畴中。然后，L，它是在 C 上定义的同时扩展 L1 和 L2 的最小逻辑，被定义为在逻辑的底层范畴中 L1 和 L2 的余积。L 的最小性符合 Gabbay 1999 中表达的一个标准（也见第 5 节），也符合融合逻辑的理想，参见 Kracht 和 Wolter 1991。这个称为无约束合并的组合过程可以通过允许 C1 和 C2 共享一些联结词来进行概括。因此，通过这种第二种合并方式得到的逻辑是在一种语言中定义的，该语言使得 L1 和 L2 的一些联结词被识别。这个操作产生的逻辑称为受限合并，它首先考虑两个逻辑 L1 和 L2，它们分别基于签名 C1 和 C2，并且签名 C0 包含在 C1 和 C2 中。这个签名恰好包含了 L1 和 L2 在合并过程中要被识别（或共享）的联结词。在计算无约束合并（即余积）L1⊕L2（它是在签名 C1⊕C2 上定义的，C1⊕C2 是 C1 和 C2 的余积）之后，得到一个新的逻辑 L。 这种逻辑，通过共享（或限制于）C0，将 L1 和 L2 的合并获得自 L1⊕L2，通过将两个（相同元数的）联结符（来自 C0 中的相同联结符）进行等同。从范畴论的角度来看，要求从逻辑的范畴到符号的范畴的遗忘函子 N 是一个共纤维。然后，如果 ij:C0→Cj 是包含态射（对于 j=1,2），hj:Cj→C1⊕C2 是余积的规范嵌入（对于 j=1,2），q:C1⊕C2→C 是 h1∘i1 和 h2∘i2 的共等化子，则受限制的合并 L 是通过 N 对 q 的余积提升的终域。

为了举例说明范畴合并的技术（不涉及技术细节），假设 L1 和 L2 是通过相同的子节 4.1 和 4.2 的符号 C1 和 C2 定义的两个模态逻辑，这些逻辑是通过希尔伯特演算定义的，这两个逻辑都包含了 Modus Ponens 和必要性规则。那么 C1⊕C2 由两个否定 ¬1 和 ¬2，两个蕴涵→1 和→2 以及两个方框 □1 和 □2 组成。因此，L1 和 L2 的无约束合并 L1⊕L2 是由连接两个演算的公理模式和推理规则而定义的 C1⊕C2 上的希尔伯特演算。这个逻辑除了其他公理和推理规则外，还有两个 Modus Ponens 的版本（每个蕴涵一个）以及两个必要性规则的版本（每个方框一个）。值得注意的是，通过使用一组固定的模式变量来书写每个演算的公理和规则，通过合并获得的演算也由模式化的公理和推理规则组成。因此，例如，在 L 中的 Modus Ponens 规则中：ξ1(ξ1→1ξ2)ξ2，模式变量 ξ1 和 ξ2 可以被混合公式替换。例如，¬2p(¬2p→1□2(q→2□1r))□2(q→2□1r)这样的实例是新的，因为公式 ¬2p 和 □2(q→2□1r)不属于 L1 的语言。类似的替换当然也适用于 L1⊕L2 的其他推理规则和公理。

继续以这个例子为基础，假设我们现在想要共享（或识别）否定和蕴涵：当这些连接词是经典的时候，这是一个合理的举动。在这种情况下，(φ→1¬2ψ)将代表与(φ→2¬1ψ)相同的命题。

为了做到这一点，考虑只包含 ¬ 和→的签名 C0，并且在 C1⊕C2 中将 ¬1 与 ¬2 等同，以及将→1 与→2 等同。得到的签名是 C，其中只包含连接词 ¬、→、□1 和 □2。在定义在 C 上的逻辑 L 中，现在只有一个 Modus Ponens 规则：

ξ1(ξ1→ξ2)ξ2

然而，由于 C 中仍然有两个盒子，因此仍然存在两个必要性规则。因此，得到的 L 是由 C0 约束的 L1 和 L2 的合并。这个过程恰好与模态逻辑的合并相一致。这里的新颖之处在于，这种技术适用于一类广泛的逻辑，不一定局限于（正常的）模态逻辑，就像合并的情况一样。

受限和非受限的合并是范畴性的，是通用的构造，因此具有明确定义和理论上可预测的形式属性。利用通用构造，为了处理代数合并，只需要定义适当的签名和逻辑系统的范畴。实际上，相同的合并构造（余积或余卡氏提升）可以在不同的逻辑系统范畴中执行。这是范畴视角在合并中的一个显著优势。文献中有几个提议，致力于通过代数合并以不同方式呈现的逻辑的合并：命题希尔伯特演算、序言和超序言演算、一阶模态逻辑、高阶模态逻辑、非真值功能逻辑、通过有序代数（包括广义 Kripke 模型）语义呈现的逻辑等。

与逻辑的合并（特别是代数纤维化）相关的一个重要问题是保持完备性、插值等元属性。例如，当 L1 和 L2 是完备的逻辑系统，既以语义方式呈现，又以句法方式呈现时，它们的合并在什么条件下也是完备的？在这方面，Zanardo 等人（2001 年）和 Sernadas 等人（2002a）对这个问题给出了部分解答。关于导入逻辑技术（见第 4.6 小节），关于保持正确性和完备性的证明已在 Rasga 等人（2013 年）中完成。此外，在一系列论文中（Marcelino 等人，2015 年；Marcelino 和 Caleiro，2016 年；Marcelino 和 Caleiro，2017a），S. Marcelino 等人研究了无约束纤维化（即不共享连接词的代数纤维化）对可决定性的保持。关键结果是通过纤维化获得的系统中的推导与每个组成部分中的推导之间的一般特征化。这些论文还分析了决策过程的复杂性。因此，证明了纤维逻辑的决策问题可以多项式地归约为给定逻辑的最坏决策问题。这意味着，特别是如果两个给定逻辑 L1 和 L2 的决策问题都属于复杂性类 C，那么无约束纤维化 L1⊕L2 的决策问题也属于 C，前提是 C 包含基本复杂性类 P（也称为 PTIME），并且对于与多项式的组合是封闭的。其他保持元属性的例子是由 Sernadas 等人（2012 年）引入的 meet 逻辑合并机制提供的。具体而言，对于这种方法，已经获得了保持正确性和完备性（见 Sernadas 等人，2012 年）、Craig 插值（见 C. Sernadas 等人，2013 年）和规则可接受性（见 Rasga 等人，2016 年）。 另一方面，在模态逻辑合并的情况下，转移结果已经得到广泛研究，正如在 4.1 小节中已经提到的那样。

除了上述提到的关于纤维保持元属性的研究之外，纤维逻辑的语义并不容易从组成部分的语义中确定。也就是说，组成部分逻辑的模型与同时扩展给定逻辑的混合语言中最小逻辑的模型类之间没有自然对应关系，即它们的纤维。这个问题远非简单：例如，在 Marcelino 和 Caleiro 2017a 中，他们证明了将两个逻辑进行纤维合并，其中每个逻辑都由一个有限矩阵来表征，可以产生一个无法由单个矩阵（甚至是无限的）来表征的逻辑。在 Marcelino 和 Caleiro 2017b 中，他们首次对这个问题的解决提出了一个初步的步骤，通过使用非确定性矩阵语义来表征逻辑的无约束纤维合并的语义。非确定性矩阵（或 N 矩阵）通过允许将连词解释为多值真值函数而不是普通真值函数来推广逻辑矩阵。N 矩阵在 Avron 和 Lev 2001 中正式引入（另请参见 Avron 和 Lev 2005），以提供对无法由单个有限矩阵表征的逻辑的语义解释。然而，多位作者（Rescher 1962；Ivlev 1973、1985、1988 和 Kearns 1981 在模态逻辑的背景下；以及 Crawford 和 Etherington 1998）已经考虑过使用 N 矩阵来表示逻辑。通过使用两种不同的 N 矩阵乘积概念，在 Marcelino 和 Caleiro 2017b 中，他们证明了两个命题逻辑的不相交纤维，其中每个逻辑都由一个单独的 N 矩阵表示，可以通过使用这些乘积从给定的矩阵得到一个单个的 N 矩阵来表征。这包括由矩阵表示的逻辑的纤维合并，因为每个逻辑矩阵都是非确定性矩阵的特例。

融合和代数纤维之间的关系值得一些评论。当限制在模态命题逻辑上时，融合是解释系统范畴中代数纤维的一个特例，其中逻辑通过有序代数呈现：只需要考虑由 Kripke 模型引起的幂集代数上定义的解释系统即可。在句法层面上，融合也是命题签名领域中 Hilbert 演算范畴中代数纤维的一个特例。就一阶模态逻辑而言，这些方法有所不同，主要是因为处理一阶模态的语义解释有不同的方法。例如，Sernadas 等人在 2002 年的代数纤维背景下对模态一阶逻辑的语义方法与 Kracht 和 Kutz（2002 年）在融合背景下的方法不同。

代数纤维至少在命题层面上推广了模态逻辑的融合，使得前者方法变得非常自然和有用。此外，构造的普遍性使得可以在非真值功能逻辑、高阶逻辑、序列演算等非常不同的逻辑背景（逻辑范畴）中定义代数纤维。正如第 5 节所示，不同逻辑之间的映射概念会影响通过代数纤维在不同逻辑系统范畴中获得的逻辑的强度。有关代数纤维的一般解释，请参见 Caleiro 等人的 2005 年和 Carnielli 等人的 2008 年的论述。

### 4.4 可能-翻译语义学

上述描述的合并逻辑的方法遵循拼接方法论：它们用于合并逻辑，创建扩展给定逻辑的新系统。

如第 2 节所述，还有一种相反的方法：分割方法论，即将给定的逻辑系统分解为其他系统。可能翻译语义学（简称 PTS），由 Carnielli 1990 引入（另见 Carnielli 2000），是这一观点的少数支持者之一。

PTS 的概念最初被定义为赋予某些逻辑以递归和可接受的语义解释的尝试。实际上，一些不可由有限矩阵表征的可自洽逻辑可以通过适当的多值逻辑组合来表征。分解的想法非常自然：给定一个逻辑 L，表示为 L=⟨C,⊢L⟩，其中 C 是一个签名，⊢L 是一个蕴涵关系，考虑一个翻译族 fi:L(C)→L(Ci)（对于 i∈I）。这里，L(C)和 L(Ci)分别表示由签名 C 和 Ci 定义的公式代数。请记住，从逻辑 L 到逻辑 L'的翻译是保持可导性的映射 f，即：Γ⊢Lφ（在源逻辑 L 中）意味着 f(Γ)⊢L'f(φ)（在目标逻辑 L'中）。

上述的一对 P=⟨{Li}i∈I,{fi}i∈I⟩ 被称为 L 的可能翻译框架。我们称 P 是 L 的可能翻译语义，如果对于每个 Γ∪{φ}⊆L(C)，Γ⊢Lφ 当且仅当 fi(Γ)⊢Lifi(φ)，对于每个 i∈I。这意味着在 L 中检查可导性等价于通过翻译在每个因子逻辑 Li 中检查可导性。在许多情况下，因子逻辑 Li 由有限矩阵表示。由于公式的长度是有限的，只需测试有限数量的翻译即可确定 L 中的公式是否有效。因此，检查 L 的公式的有效性等价于执行有限数量的有限测试。当原始逻辑 L 不能由有限矩阵表征时，这种可决定性属性具有真正的优势。例如，在 Carnielli 2000（另见 Marcos 1999）中，由 N. da Costa 形成的众所周知的 N 个无矛盾逻辑的层次结构{Cn}n∈N，这些逻辑不能由有限矩阵表征，通过 PTS 的因子通过有限矩阵表示；这为每个逻辑 Cn 提供了一个决策过程。

为了举例说明 PTS 作为一种分割方法的概念，考虑 Carnielli 和 Marcos 2002 年引入的不矛盾逻辑 bC。这个逻辑是一种形式不一致逻辑（LFI），特别是存在一个一元连接词 ∘ 来表示公式的一致性。因此，一般来说，从 φ 和 ¬φ 并不会得出任意的公式 ψ。然而，{φ,¬φ,∘φ}可以推出任意的公式 ψ。bC 的签名 C 包括一个不矛盾否定 ¬，一个一致性运算符 ∘，以及经典的连接词 ∧、∨、→。Carnielli 等人在 2007 年证明了 bC 以及许多扩展它的形式不一致逻辑不能用有限矩阵来表征。然而，通过可能翻译的方式，bC 可以分解为几个三值逻辑的副本，具体如下所示：考虑签名 `C1={¬1,¬2,∘1,∘2,∘3,∧,∨,→}`，包括两个否定、三个一致性运算符、一个合取、一个析取和一个蕴含。让 M 是在 C1 上的矩阵，定义域为{T,t,F}，如下所示，其中{T,t}是指定值的集合。

`∧TtFTttFtttFFFFF∨TtFTtttttttFttF→TtFTttFtttFFttt¬1¬2TFFtFtFTT∘1∘2∘3TTtFtFtFFTtF`

设{fi}i∈I 是满足以下子句(tr0)、(tr1)、(tr2)、(tr3)和(tr4)的所有映射 f:L(C)→L(C1)的家族。

* (tr0)f(p)=p  对于命题变量 p；
* (tr1)f(¬φ)∈{¬1f(φ),¬2f(φ)}；
* (tr2)f(φ#ψ)=(f(φ)#f(ψ))，其中#∈{∧,∨,→}；
* (tr3)f(∘φ)∈{∘1f(φ),∘2f(φ),∘3f(φ)};
* (tr4)如果 f(¬φ)=¬2f(φ)，那么 f(∘φ)=∘1f(φ)。

映射族{fi}i∈I 可以被证明以可判定的方式定义了一个 PTS，该 PTS 表征了 bC（参见 Carnielli 等人，2008）。例如，可以很容易地检查到 φ∧¬φ→¬∘φ 是 bC 的一个定理：只需考虑它的有限多个翻译并测试它们是否都是三值重言式。另一方面，¬(φ∧¬φ)→∘φ 不是 bC 的一个定理，可以通过展示它的至少一个翻译不是重言式来迅速验证，使用上述的三值真值表。关于 bC 和相关逻辑的另一种 PTS 表征，请参见 Marcos（2008）。

这个例子表明，非真值功能连接词，如可矛盾否定 ¬ 或 bC 的一致性运算符 ∘，可以通过将其（通过翻译）解释为不同的真值功能连接词来模拟。将连接词解释（或分解）为更简单的连接词的想法可以与 Avron 和 Lev 提出的非确定性矩阵语义的概念相关联，并在第 4.3 小节中提到。

的确，在 Carnielli 和 Coniglio 2005 年的研究中，他们证明了非确定性矩阵可以通过适当的可能翻译语义来模拟。特别是，熟悉的矩阵语义是可能翻译语义的一个特例，以及文献中找到的逻辑之间的翻译的历史例子。这些事实表明，可能翻译语义是一种广泛适用的分解逻辑的概念工具。

### 4.5 时间化、参数化和机构

除了合并逻辑的逻辑学和哲学意义之外，还存在着基于这些技术开发应用程序的真正兴趣。对于合并逻辑的方法感兴趣的主要领域之一是软件规范。某些合并逻辑的技术几乎完全是为了将它们应用于这个领域而开发的。在本节中，将简要介绍其中的一些方法：时间化、参数化和机构。

时间化是在 Finger 和 Gabbay 1992 年引入的（另见 Finger 和 Gabbay 1996 年），并在 Caleiro 等人 1999 年的研究中推广为称为参数化的方法。

粗略地说，参数化是将给定逻辑 L 的原子部分替换为另一个逻辑 L'的过程。因此，逻辑 L 是参数化逻辑；原子部分是形式参数，逻辑 L'是参数逻辑。在形式上，考虑基于 L 的签名的混合签名，其中将 L'的公式作为常量添加进来。在时间化的特殊情况下，参数逻辑是一种时间逻辑。反过来，可以证明参数化是约束纤维化的一个特例（参见第 4.3 小节）。

这种方法可以通过从 Carnielli 等人的 2008 年的一个简单例子来解释：考虑一个命题模态逻辑 L，为了描述数据库的动态而将其参数化为一阶逻辑 Lfol。所得到的逻辑是在一种语言中定义的，该语言的公式是通过将 L 中的命题常量替换为一阶公式而获得的。也就是说，可以自由使用模态，但不能将量词应用于模态公式（其他命题连接词如否定和蕴涵是共享的）。

新逻辑的语义结构是 Kripke 结构，其中命题常量的估值被一种“放大”映射（在 Blackburn 和 de Rijke 1997 年的意义上）所取代，该映射将每个状态与一个一阶语义结构以及对个体变量的固定赋值关联起来。

新逻辑的演绎系统由两种逻辑的规则组成。L 的规则可以用参数化语言的公式实例化，但一阶逻辑的规则只能应用于纯一阶公式。

参数化（特别是时间化）和约束纤维之间的一个重要区别是对称度：参数化语言和推理规则本质上是非对称的，而约束纤维则不是这种情况。

机构是由 J. Goguen 和 R. Burstall 引入的（参见 Goguen 和 Burstall 1984, 1992），作为计算机科学的一种“抽象模型理论”，适用于开发规范语言的概念，如规范的结构和实现。

机构理论主要适用于由多个逻辑系统定义的软件规范（例如，参见 Diaconescu 和 Futatsugi 2002）。因此，在软件开发的抽象视图下，同一程序的不同组件可以在异构环境中使用不同的形式进行规范。这通过使用机构和它们之间的态射来形式化（例如，参见 Tarlecki 2000）。关于机构态射的一个问题是不允许组合来自不同逻辑的连接词的公式。Goguen 和 Burstall 1986 以及 Mossakowski 1996 提出了解决这个问题的方法，使用所谓的羊皮纸和羊皮纸态射。

### 4.6 合并逻辑的新视角

尽管代数纤维适用于合并广泛类别的逻辑系统，但某些类型的逻辑，即线性逻辑和具有非确定性语义的逻辑，超出了这种合并方法的范围。此外，在语义层面上，代数纤维本身的性质使得无法保留原始逻辑模型的所有代表（这导致了纤维合并的崩溃问题，请参见第 5 节）。

为了进一步扩大代数纤维的应用范围，使其能够处理子结构逻辑和具有非确定性语义的逻辑，以及合并每个逻辑的逐点模型，A. Sernadas 及其合作者提出了一种基于多图（或简称为 m-图）的表示逻辑及其组合的形式化方法（参见 Sernadas 等人，2009a，2009b）。多图是图形，其中每个边的源是有限节点序列（而不是唯一节点）。关于签名，m-图的节点被视为排序，m-边被视为语言构造器。从语义观点来看，节点是真值，m-边是真值之间的关系。最后，关于演绎系统，节点是语言表达式，m-边是推理规则。由 m-图描述的逻辑的纤维合并（也称为图论纤维合并）通过逐点合并每个组合逻辑的模型来定义，与通常的语义纤维合并的概念相反，在后者中，整个模型类别被合并。这样可以以非常自然的方式避免崩溃问题（请参见下一节）。

作为这种图论设置的直接应用，Coniglio 等人在 2011 年证明了图论合并对有限模型性质的保持。由于（在合理条件下）有限模型性质蕴含可决定性，因此这个结果特别有用。

图论逻辑学的另一个应用是定义了一种称为导入逻辑的非对称合并技术（参见 Rasga 等人 2012 年）。时间化以及其泛化形式模态化（参见 Fajardo 和 Finger 2003 年以及 Finger 和 Weiss 2002 年）是导入逻辑的特例。在这种方法下，合并语言被赋予了一个显式构造器，称为导入连接词，它将导入逻辑的公式转化为导入逻辑的公式。这是导入逻辑技术与相关的参数化技术（也泛化了时间化，参见第 4.5 小节）之间的主要区别。从语义上讲，通过导入逻辑方法得到的结果逻辑的每个模型都由导入逻辑的模型、导入逻辑的模型以及导入连接词的解释组成。在 Rasga 等人 2014 年的研究中，引入了一种称为双导入的代数合并新形式，其与原始形式等价。由此可以证明，时间化、模态化和全球化等一些特殊情况都被合并所包含。

在 C. Sernadas 等人于 2013 年首次提出并在 Rasga 等人于 2016 年进一步发展的论文中，提出了一种称为逻辑合并的新机制。该技术基于将两个被合并的给定逻辑的连接词（具有相同元数）进行融合或配对的思想。所得逻辑的融合连接词继承了两个逻辑中共同具有的属性，而不是像约束纤维化的共享连接词那样将它们的属性进行合并。在 Sernadas 等人于 2011a 和 2011b 的论文中，已经探索了在单个逻辑中配对连接词的思想，以确定具有相同元数的任意一对连接词的共同属性。

## 5. 合并逻辑时的互动缺乏或过度：合并逻辑时的困惑

到目前为止，已经描述和举例了几种组合逻辑的技术。这些过程是否适用于组合任意一对逻辑，而不会出现意外情况？换句话说，给定一对逻辑（以同质化方式呈现），它们是否可以以有意义的方式进行组合？组合是否具有哲学意义？正如 Schurz 在 1991 年指出的那样，通过添加任意选择的桥接原则来组合模态逻辑得到的一些多模态逻辑可能是没有意义的。

从技术角度来看，逻辑合并的组合问题是一个重要的问题，首次在 Gabbay 1996b 中被确定，并在 del Cerro 和 Herzig 1996 中进行了形式化。在后一篇论文中，通过在语义层面上自由地合并经典命题逻辑和直觉命题逻辑（技术上：通过在解释系统范畴中构造它们的无约束纤维化，参见第 4.3 小节），结果逻辑会崩溃为经典逻辑。更确切地说，结果逻辑将由两个经典命题逻辑的副本组成，具有两个否定、两个蕴含等等。显然，每个连接词的相应副本将在结果逻辑中被证明是相互可导的：¬1φ 将等同于 ¬2φ，(φ→1ψ)将等同于(φ→2ψ)等等。崩溃只发生在语义层面上考虑代数纤维化时：在 Caleiro 和 Ramos 2007 中已经证明，在计算相应的希尔伯特演算的代数纤维化时不会发生崩溃。

基本上，这种现象是因为两个蕴含式崩溃，然后直觉蕴含式变成了经典蕴含式。从语义角度来看，纤维逻辑的模型是同时是 Heyting 代数和 Boolean 代数的：显然，代数会崩溃为 Boolean 代数。从证明论的角度来看，这个问题是 Deduction Metatheorem（DMT）这个元性质的结果：设→1 和→2 分别是直觉蕴含和经典蕴含。那么 Γ,φ⊢ψ 当且仅当 Γ⊢(φ→1ψ)Γ,φ⊢ψ 当且仅当 Γ⊢(φ→2ψ)因此，以下论证适用（参见 Gabbay 1996b）：(φ→1ψ)⊢(φ→1ψ)(公理)(φ→1ψ),φ⊢ψ（对于→1 的 DMT）(φ→1ψ)⊢(φ→2ψ)（对于→2 的 DMT）类似的论证表明(φ→2ψ)⊢(φ→1ψ)。也就是说，经典和直觉蕴含在合并逻辑中崩溃。

值得注意的是，前面的论证离开了一个非常强的假设：即组合逻辑中保留了元属性 DMT。正如我们将在下面看到的那样，这对于代数纤维来说并不成立，除非采用了更强的逻辑之间的态射概念。

在 C. Sernadas 等人的 2002b 年的论文中，还提出了其他的崩溃例子，并通过一种称为调制纤维的受控代数纤维概念提出了解决该问题的方法。Caleiro 和 Ramos 在 2007 年提出了一个看似更简单的解决方案，使用了一种称为加密纤维的代数纤维技术的变体。正如第 4.6 小节中提到的，图论纤维还可以提供另一种解决这个问题的方法。通过逻辑的合并连接词继承了两个逻辑中共同具有的属性，组成逻辑之间的相互作用被最小化，从而克服了崩溃问题。

独立地，在 Beziau 的 2004 年的论文中观察到，通过将经典合取的序言规则与经典析取的规则结合起来，所得到的序言演算将（出乎意料地）证明合取和析取之间的分配律。如果我们将经典合取的（二值）估值子句与经典析取的估值子句结合起来，也会出现同样的现象。然而，通过将代数纤维考虑在通常的范畴（希尔伯特演算或推理关系）中，并且逻辑之间的翻译作为态射，可以避免这种情况：所得到的逻辑是格的逻辑，它不满足分配律（参见 Beziau 和 Coniglio 的 2005 年和 2011 年的论文）。

这种情况下，连接词之间出现新的交互规则，可以说是不可取的。实际上，这与合并的基本准则（也与融合的准则）相矛盾，正如 Gabbay 1999 所表达的：给定逻辑系统 L1 和 L2，L1 和 L2 的合并应该是组合语言中最小的逻辑系统，它是 L1 和 L2 的保守扩展。

实际上，分配性问题和崩溃问题是出现意外交互（如桥接原则）的同一现象的两个实例，这是由于合并过程引起的。在合并与合取的情况下，分配律出现了：这种交互是由于合并过程而出现的，没有任何明显的原因。反过来，崩溃问题是交互的极限情况：经典与直觉主义蕴涵之间的相互推导（不过是不同连接词之间的两个交互法则）也是由合并过程自发产生的。

可以认为在这种情况下，合并逻辑过于强大，因为它们在新的合并语言中推导出了过多的命题。

另一方面，相反（或对偶）的情况也可能存在问题：假设为了帮助直觉，将经典否定的逻辑与经典析取的逻辑合并。这些逻辑可以通过公理化（通过希尔伯特演算）或语义化的方式来呈现，比如通过对{0,1}进行赋值（即通过经典真值表的方式）。经典否定逻辑的语义呈现由满足以下子句的所有{0,1}上的赋值集合组成：v(¬φ)=0 当且仅当 v(φ)=1。另一方面，经典析取逻辑可以由满足以下条件的所有{0,1}上的赋值集合来表征：v(φ∨ψ)=0 当且仅当 v(φ)=0 且 v(ψ)=0。

结果，否定和析取的合并逻辑（可以定义为由满足上述两个子句的{0,1}上的赋值所表征的 ¬ 和 ∨ 的逻辑）验证了(φ∨¬φ)，因此恢复了经典逻辑。这是通过所谓的矩阵直接合并方法得到的结果，该方法由 Coniglio 和 Fernández 于 2005 年引入。然而，如果在希尔伯特演算或蕴涵关系等范畴中考虑代数纤维化，否定逻辑和析取逻辑之间的合并将导致一个由 ¬ 和 ∨ 定义的逻辑，该逻辑比经典逻辑要弱：交互律(φ∨¬φ)不再成立。也就是说，在合并过程中，连接词之间的一种可取的交互作用丧失了，只要在这些逻辑范畴中使用代数纤维化，就无法从其片段中恢复出由 ¬ 和 ∨ 表示的经典逻辑。

同类的另一个例子是以下内容：在上述类别中，经典否定 ¬ 的逻辑与经典蕴涵→的逻辑之间的代数纤维化并不能恢复在 ¬ 和→上表达的经典逻辑。实际上，定义在 ¬ 和→上的结果逻辑系统，在被作为公理呈现时，无法验证“由矛盾推出任何命题”的原则：⊬(φ→(¬φ→ψ))。

有趣的是，“由矛盾推出任何命题”作为推导呈现时，在纤维逻辑中成立：φ,¬φ⊢ψ。

注意，(φ→(¬φ→ψ))是被合并的逻辑连接词之间的交互规则，不能通过考虑的类别中的代数纤维化获得（然而，这个原则可以通过矩阵的直接合并来恢复）。如果有人对从碎片中恢复逻辑感兴趣，这个结果是令人失望的。

关于上述经典逻辑片段组合的表达能力研究，无论在公理层面上还是作为 2 值布尔代数的子代数来考虑，Rautenberg 在 1981 年的研究中获得了几个有趣的结果。他的主要贡献之一是证明了任何 2 值矩阵都可以有效地公理化。反过来，关于通过纤维组合经典逻辑片段的问题还在 Caleiro 等人的 2019 年研究中进行了进一步的调查，该研究基于 Post 1941 中对 2 值克隆的描述，基于 Rautenberg 1981 中引入的 2 值矩阵公理化程序，以及基于 Marcelino 和 Caleiro 2017b 中关于纤维组合(N)矩阵的结果（见第 4.3 小节）。特别是，该论文研究了使得 Hilbert 演算的纤维组合恢复片段的并集的条件。分析了通过纤维组合经典联结词的逻辑的几个组合示例，得到了它们通过（N）矩阵的特征化，以及恢复相应经典逻辑片段所需的附加推理规则（桥梁原则）。在几个示例中，证明了两个经典合取逻辑的纤维组合会坍缩成单个合取逻辑。另一方面，两个经典否定逻辑的组合以及两个经典析取逻辑的组合都不会产生类似的坍缩：两个经典否定逻辑的纤维组合不是有限值的，但可以用一个 5 值 N 矩阵来描述；而两个经典析取逻辑的纤维组合不能用单个有限值的 N 矩阵来描述。 通过再次分析经典析取逻辑和经典合取逻辑的合并（即两种逻辑的最保守扩展），证明了合并逻辑不能由单一有限值 N 矩阵来表征。同样的情况也发生在经典析取逻辑和经典否定逻辑的合并中，从而表明纤维逻辑在这两种情况下都是严格的次经典逻辑。

这些例子以及其他类似的例子表明，在合取和析取之间的折叠和分配性问题的对偶问题：某些预期的交互法则无法通过某些组合过程来创建。

在这种情况下，可以说合并逻辑过于薄弱，因为它们无法推导出新的合并语言中的某些预期命题。

当合并逻辑时，可以期望什么？是强逻辑（例如保证从其片段中恢复逻辑）还是弱逻辑（其中连接词之间的不良相互作用被阻止）？

上述例子既支持又反对这两种情况：为了避免 del Cerro 和 Herzig 的崩溃问题，应该期望一种谨慎的合并过程（这样两个蕴含之间的相互作用将消失）。另一方面，如果想要从一些片段中恢复经典逻辑，更自由的合并过程将更合适，因为两种逻辑的连接词之间的某些预期相互作用将被恢复。

关于合并合取和析取时的分配性问题，方法的选择也没有确定：如果我们采用从片段中恢复逻辑的观点，分配性可能是一个期望的特征。在这种情况下，定义一个更强的逻辑的合并方法（例如直接合并矩阵）比如 Hilbert 演算的代数纤维化更合适。但如果像 Beziau 2004 所提出的那样，分配性被视为一个干扰因素，那么应该采取更谨慎的过程：在这种情况下，Hilbert 演算的代数纤维化将更合适。总之：选择最适合的合并过程取决于一个人想要获得什么。

在这一点上，值得注意的是，关于在合并模态逻辑时是否生成交互原则的问题，与休谟的“是-应该问题”在第 1 节中讨论的问题有内在联系。事实上，正如 Schurz 1991 所证明的那样，只要允许一些桥梁原则，就可以在真理逻辑和道义逻辑的合并中获得非平凡的“是-应该”推导。桥梁原则的有效性，如 ◯φ→◊φ，无非是被合并的逻辑连接词之间的交互规则。这些原则享有与合取和析取之间的分配律或上述提到的折叠示例类似的概念地位。因此，为了满足休谟的论点，应该优先选择生成没有交互的逻辑的合并过程。另一方面，允许连接词之间产生交互的合并过程可能会导致违反休谟的论点的桥梁原则。

最后，值得注意的是，代数纤维并不本质上禁止合并的逻辑连接词之间的交互的出现。事实上，所采用的逻辑系统范畴中的态射概念是创建或阻止交互的关键。为了说明这一论断，考虑从代数纤维中无法从其{¬}-片段和{∨}-片段中恢复经典逻辑的情况。从证明论的角度来看，这种失败的关键原因是经典否定逻辑的规则(*)Γ,φ⊢ψΔ,¬φ⊢ψΓ,Δ⊢ψ 在具有逻辑之间的翻译作为态射的逻辑系统范畴（回顾第 4.4 小节）中的代数纤维不被保留，例如 Hilbert 演算或蕴涵关系的范畴。

在考虑在这些范畴中对经典蕴涵与经典否定进行代数纤维时，缺失的规则是演绎元定理：(**)Γ,φ⊢ψΓ⊢(φ→ψ)。

作为态射的逻辑翻译的逻辑系统类别是这样的，使得余积的规范嵌入只是包含映射。因此，给定两个逻辑 L1 和 L2，只有这些逻辑的规则 Γ⊢φ 通过代数纤维保持不变。

另一方面，假设我们正在处理的是一个逻辑系统类别，其中保留诸如(∗)或(∗∗)的规则对于态射的概念来说是必需的。因此，如果一个逻辑 L 是由其他两个系统 L1 和 L2 的组合得到的，那么 L1 和 L2 的规则将被忠实地转移到 L 上。这是 Coniglio 2007 的提议，其中研究了序列演算类别中的代数纤维，考虑了保持形式为 Γ1⊢φ1 和...和 Γn⊢φn 然后 Γ⊢φ 的逻辑规则的态射概念。

在这样的类别中，当通过代数纤维将一个逻辑系统嵌入到一个更大的系统中时，可以将上述任何规则（可以被视为逻辑的元定理）通过规范嵌入保持不变。这就是为什么这个过程被称为元纤维的原因。从范畴论的角度来看，这个过程与代数纤维的过程是相同的，唯一的区别是态射的概念更强。

在 Coniglio 和 Figallo 2015 年的研究中，Coniglio 和 Figallo 将元纤维（即，形式序列演算的代数纤维）的思想扩展到了超序列，这使得能够保留被合并逻辑的更强元属性。超序列是普通序列的有限多重集合，构成了序列证明方法的自然推广，并且被证明是用于几种非经典逻辑的无割形式的 Gentzen 类型表述的合适工具。

这些例子说明了使用范畴论及其工具来定义组合过程作为通用构造的优势：相同的构造（在本例中为代数纤维）可以在具有不同特征的逻辑系统范畴中进行，从而获得更强或更弱的逻辑系统。


## Bibliography

* Avron, A. and I. Lev, 2001, “Canonical propositional Gentzen-type systems”, in R. Goré, A. Leitsch and T. Nipkow (eds), *Proceedings of the 1st International Joint Conference on Automated Reasoning (IJCAR 2001)*, volume 2083 of *Lecture Notes in Artificial Intelligence*, Berlin: Springer Verlag, pp. 529–544.
* –––, 2005, “Non-deterministic multiple-valued structures”, *Journal of Logic and Computation*, 15(3): 241–261.
* Baumgardt, D., 1946, “Legendary quotations and lack of references”, *Journal of the History of Ideas*, 7(1): 99–102.
* Beziau, J.-Y., 2004, “A paradox in the combination of logics”, in W. Carnielli, F. Dionísio, and P. Mateus (eds), *Proceedings of CombLog’04: Workshop on Combination of Logics: Theory and Applications, Lisbon (Portugal)*, Departamento de Matemática, Instituto Superior Técnico, Lisbon (Portugal), pp. 76–77.
* Beziau, J.-Y. and M.E. Coniglio, 2005, “Combining conjunction with disjunction”, in B. Prasad (ed.), *Proceedings of the 2nd Indian International Conference on Artificial Intelligence (IICAI 2005), Pune, India*, IICAI, pp. 1648–1658. [[Beziau and Coniglio 2005 available online](http://www.jyb-logic.org/poona.pdf)]
* –––, 2011, “To Distribute or not to Distribute?”, *Logic Journal of the IGPL*, 19(4): 566–583.
* Blackburn, P. and M. de Rijke, 1997, “Zooming in, zooming out”, *Journal of Logic, Language and Information*, 6(1): 5–31.
* Caleiro, C., W. Carnielli, J. Rasga, and C. Sernadas, 2005, “Fibring of logics as a universal construction”, in Dov M. Gabbay and Franz Guenthner (eds), *Handbook of Philosophical Logic* (2nd edition), volume 13, Dordrecht: Springer, pp. 123–187.
* Caleiro, C., S. Marcelino, and J. Marcos, 2019, “Combining fragments of classical logic: When are interaction principles needed?”, *Soft Computing*, 23(7): 2213–2231.
* Caleiro, C. and J. Ramos, 2007, “From fibring to cryptofibring: A solution to the collapsing problem”, *Logica Universalis*, 1(1): 71–92.
* Caleiro, C., C. Sernadas, and A. Sernadas, 1999, “Parameterisation of logics”, in J. Fiadeiro (ed.), *Recent Trends in Algebraic Development Techniques: 13th International Workshop, WADT’98, Lisbon, Portugal, April 2-4, 1998, Selected Papers*, volume 1589 of *Lecture Notes in Computer Science*, Berlin: Springer, pp. 48–62.
* Carnielli, W., 1990, “Many-valued logics and plausible reasoning”, in *Proceedings of the XX International Congress on Many-Valued Logics, University of Charlotte, USA*, IEEE Computer Society, pp. 328–335.
* –––, 2000, “Possible-Translations Semantics for Paraconsistent Logics”, in D. Batens, C. Mortensen, G. Priest, and J.P. Van Bendegem (eds), *Frontiers of Paraconsistent Logic: Proceedings of the I World Congress on Paraconsistency*, Logic and Computation Series, Hertfordshire: Research Studies Press, pp. 149–163.
* Carnielli, W., M.E. Coniglio, D. Gabbay, P. Gouveia, and C. Sernadas, 2008, *Analysis and Synthesis of Logics*, Volume 35 in the *Applied Logic* Series, Dordrecht: Springer.
* Carnielli, W., M.E. Coniglio, and J. Marcos, 2007, “Logics of Formal Inconsistency”, in Dov M. Gabbay and Franz Guenthner (eds), *Handbook of Philosophical Logic* (2nd edition), volume 14, Dordrecht: Springer, pp. 1–93.
* Carnielli, W. and M.E. Coniglio, 2005, “Splitting logics”, in S. Artemov, H. Barringer, A.S. d’Avila Garcez, L.C. Lamb, and J. Woods (eds), *We Will Show Them: Essays in Honour of Dov Gabbay*, volume 1, London: College Publications, pp. 389–414.
* Carnielli, W. and J. Marcos, 2002, “A Taxonomy of C-systems”, in W. Carnielli, M.E. Coniglio, and I. D’Ottaviano, (eds), *Paraconsistency: the logical way to the inconsistent. Proceedings of WCP’2000*, volume 228 of *Lecture Notes in Pure and Applied Mathematics*, Boca Raton: CRC Press, pp. 1–94.
* Coniglio, M.E., 2007, “Recovering a logic from its fragments by meta-fibring”, *Logica Universalis*, 1(2): 1–39.
* Coniglio, M.E. and V. Fernández, 2005, “Plain fibring and direct union of logics with matrix semantics”, in B. Prasad (ed.), *Proceedings of the 2nd Indian International Conference on Artificial Intelligence (IICAI 2005), Pune, India*, IICAI, pp 1590–1608.
* Coniglio, M.E., A. Sernadas, and C. Sernadas, 2011, “Preservation a logic by fibring of the finite model property”, *Journal of Logic and Computation*, 21(2): 375–402.
* Coniglio, M.E. and M. Figallo, 2015, “A Formal Framework for Hypersequent Calculi and their Fibring”, in A. Koslow and A. Buchsbaum (eds), *The Road to Universal Logic: Festschrift for 50th Birthday of Jean-Yves Béziau*, Volume I. *Studies in Universal Logic* Series, Basel: Springer, pp. 73–93.
* Crawford, J. and D. Etherington, 1998, “A non-deterministic semantics for tractable inference”, in J. Mostow and C. Rich (eds), *Proceedings of the Fifteenth National Conference on Artificial Intelligence and Tenth Innovative Applications of Artificial Intelligence Conference, AAAI 98/IAAI 98*, Menlo Park: AAAI Press/The MIT Press, pp. 286–291.
* Cruz-Filipe, L., A. Sernadas, and C. Sernadas, 2008, “Heterogeneous fibring of deductive systems via abstract proof systems”, *Logic Journal of the IGPL*, 16(2): 121–153.
* del Cerro, L.F. and A. Herzig, 1996, “Combining classical and intuitionistic logic, or: Intuitionistic implication as a conditional”, in F. Baader and K. Schulz (eds), *Frontiers of Combining Systems: Proceedings of the 1st International Workshop, Munich (Germany)*, Applied Logic, Dordrecht: Kluwer Academic Publishers, pp. 93–102.
* Diaconescu, R. and K. Futatsugi, 2002, “Logical foundations of CafeOBJ”, *Theoretical Computer Science*, 285: 289–318.
* Epstein, R., 1995, *The Semantic Foundations of Logic*, Oxford: Oxford University Press, 2nd edition. Volume 1: *Propositional logics*, with the assistance and collaboration of W. Carnielli, I. D’Ottaviano, S. Krajewski, and R. Maddux.
* Fajardo, R.A.S. and M. Finger, 2003, “Non-normal modalisation”, in Ph. Balbiani, N.-Y. Suzuki, F. Wolter and M. Zakharyaschev (eds), *Advances in Modal Logic*, Volume 4, London: King’s College Publications, pp. 83–95.
* Fernández, V.L. and M.E. Coniglio, 2007, “Fibring in the Leibniz Hierarchy”, *Logic Journal of the IGPL*, 15(5–6): 475–501.
* Fine, K. and G. Schurz, 1996, “Transfer theorems for multimodal logics”, in J. Copeland (ed.), *Logic and Reality: Essays on the Legacy of Arthur Prior*, Oxford: Oxford University Press, pp. 169–213.
* Finger, M. and D. Gabbay, 1992, “Adding a temporal dimension to a logic system”, *Journal of Logic, Language and Information*, 1(3): 203–233.
* –––, 1996, “Combining temporal logic systems”, *Notre Dame Journal of Formal Logic*, 37(2): 204–232.
* Finger, M. and M.A. Weiss, 2002, “The unrestricted combination of temporal logic systems”, *Logic Journal of the IGPL*, 10(2): 165–189.
* Fitting, M., 1969, “Logics with several modal operators”, *Theoria*, 35: 259–266.
* Gabbay, D., 1996a, “Fibred semantics and the weaving of logics: Part 1”, *The Journal of Symbolic Logic*, 61(4): 1057–1120.
* –––, 1996b, “An overview of fibred semantics and the combination of logics”, in F. Baader and K.U. Schulz (eds), *Frontiers of Combining Systems: Proceedings of the 1st International Workshop FroCos’96, Munich (Germany)*, volume 3 of *Applied Logic*, Dordrecht: Kluwer Academic Publishers, pp. 1–55.
* –––, 1999, *Fibring Logics*, volume 38 of *Oxford Logic Guides*, New York: Oxford University Press.
* Goguen, J. and R. Burstall, 1984, “Introducing institutions”, in *Logics of Programs (Carnegie-Mellon University, June 1983)*, volume 164 of *Lecture Notes in Computer Science*, Berlin: Springer, pp. 221–256.
* –––, 1986, “A study in the foundations of programming methodology: specifications, institutions, charters and parchments”, in *Category Theory and Computer Programming*, volume 240 of *Lecture Notes in Computer Science*, Berlin: Springer, pp. 313–333.
* –––, 1992, “Institutions: Abstract model theory for specification and programming”, *Journal of the ACM*, 39(1): 95–146.
* Governatori, G., V. Padmanabhan, and A. Sattar, 2002, “On Fibring Semantics for BDI Logics”, in S. Flesca, S. Greco, N. Leone and G. Ianni (eds), *Logics in Artificial Intelligence: European Conference - JELIA 2002*, Volume 2424 of *Lecture Notes in Computer Science*, Berlin: Springer, pp. 198–209.
* Hampson,C., S. Kikot, A. Kurucz and S. Marcelino, 2020, “ Non-Finitely Axiomatisable Modal Product Logics with Infinite Canonical Axiomatisations”, *Annals of Pure and Applied Logic*, 171(5): Article 102786.
* Hume, D., 2000 [1740], *David Hume: A Treatise of Human Nature*, D.F. Norton and M.J. Norton (eds), Oxford: Oxford University Press.
* Ivlev, Ju.V., 1973, “Tablichnoe postroenie propozitsional’noĭ modal’noĭ logiki (Truth-tables for systems of propositional modal logic, in Russian)”, *Vestnik Moskovskogo Universiteta* (Seria Filosofia), 6.
* Ivlev, Ju.V., 1985, *Soderzhatel’naya semantika modal’noĭ logiki* (*Contentive semantic of modal logic*, in Russian), Moscow: Izd. Moscov.
* Ivlev, Ju.V., 1988, “A semantics for modal calculi”, *Bulletin of the Section of Logic*, 17(3/4): 114–121.
* Jánossy, A., Á. Kurucz, and Á.E. Eiben, 1996, “Combining Algebraizable Logics”, *Notre Dame Journal of Formal Logic*, 37(2): 366–380.
* Karmo, T., 1988, “Some valid (but no sound) arguments trivially span the ‘Is’-‘Ought’ gap”, *Mind*, 97: 252–257.
* Kearns, J., 1981, “Modal semantics without possible worlds”, *The Journal of Symbolic Logic*, 46(1): 77–86.
* Kracht, M., 2004, “Review of *Fibring Logics*, by Dov Gabbay, Oxford Logic Guides, vol. 38, Oxford University Press, 1998”, *The Bulletin of Symbolic Logic*, 10(2): 209–211.
* Kracht, M. and O. Kutz, 2002, “The semantics of modal predicate logic I: Counterpart-frames”, in F. Wolter, H. Wansing, M. de Rijke, and M. Zakharyaschev (eds), *Advances in Modal Logic*, Volume 3 of *Studies in Logic, Language and Information*, Stanford, CA: CSLI Publications, pp. 299–320.
* Kracht, M. and F. Wolter, 1991, “Properties of Independently Axiomatizable Bimodal Logics”, *The Journal of Symbolic Logic*, 56(4): 1469–1485.
* –––, 1997, “Simulation and Transfer Results in Modal Logic - A Survey”, *Studia Logica*, 59: 149–177.
* –––, 1999, “Normal monomodal logics can simulate all others”, *The Journal of Symbolic Logic*, 64(1): 99–138.
* Kurucz, A. and S. Marcelino, 2012, “Non-finitely axiomatisable two-dimensional modal logics”, *The Journal of Symbolic Logic*, 77(3): 970–986.
* Marcelino, S. and C. Caleiro, 2016, “Decidability and complexity of fibred logics without shared connectives”, *Logic Journal of the IGPL*, 24(5): 673–707.
* –––, 2017a, “On the characterization of fibred logics, with applications to conservativity and finite-valuedness”, *Journal of Logic and Computation*, 27(7): 2063–2088.
* –––, 2017b, “Disjoint fibring of non-deterministic matrices”, in J. Kennedy and R. de Queiroz (eds), *Logic, Language, Information and Computation (WoLLIC 2017)* (Lecture Notes in Computer Science: Volume 10388), Berlin: Springer, pp. 242–255.
* Marcelino, S., C. Caleiro, and P. Baltazar, 2015, “Deciding theoremhood in fibred logics without shared connectives”, in A. Koslow and A. Buchsbaum (eds), *The Road to Universal Logic: Festschrift for 50th Birthday of Jean-Yves Béziau*, Volume II. *Studies in Universal Logic*, series, Basel: Springer, pp. 387–406.
* Marcos, J., 1999, “Semânticas de Traduções Possíveis (Possible-Translations Semantics, in Portuguese)”, Master’s thesis, IFCH-UNICAMP, Campinas, Brazil. [Marcos 1999 available online](http://www.cle.unicamp.br/pub/thesis/J.Marcos/)
* –––, 2008, “Possible-translations semantics for some weak classically-based paraconsistent logics”, *Journal of Applied Non-Classical Logics*, 18(1): 7–28.
* Mossakowski, T., 1996, “Using limits of parchments to systematically construct institutions of partial algebras”, in M. Haveraaen, O. Owe, and O.-J. Dahl (eds), *Recent Trends in Data Type Specifications*, volume 1130 of *Lecture Notes in Computer Science*, Berlin: Springer, pp. 379–393.
* Post, E., 1941, *On the two-valued iterative systems of mathematical logic*, Princeton: Princeton University Press.
* Prior, A.N., 1960, “The autonomy of ethics”, *Australasian Journal of Philosophy*, 38: 199–206.
* Rasga, J., K. Roggia, and C. Sernadas, 2010, “Fusion of sequent modal logic systems labelled with truth values”, *Logic Journal of the IGPL*, 18(6): 893–920.
* Rasga, J., A. Sernadas, and C. Sernadas, 2012, “Importing logics”, *Studia Logica*, 100(3): 545–581.
* –––, 2013, “Importing logics: Soundness and completeness preservation”, *Studia Logica*, 101(1): 117–155.
* –––, 2014, “Fibring as biporting subsumes asymmetric combinations”, *Studia Logica*, 102(5): 1041–1071.
* Rasga, J., C. Sernadas, and A. Sernadas, 2016, “Preservation of admissible rules when combining logics”, *Review of Symbolic Logic*, 9(4): 641–663.
* Rautenberg, W., 1981, “2-Element matrices”, *Studia Logica*, 40(4): 315–353.
* Rescher, N., 1962, “Quasi-truth-functional systems of propositional logic”, *The Journal of Symbolic Logic*, 27(1): 1–10.
* Schurz, G., 1991, “How far can Hume’s is-ought-thesis be generalized? An investigation in alethic-deontic modal predicate logic”, *Journal of Philosophical Logic*, 20: 37–95.
* –––, 1997, *The Is-Ought Problem: An Investigation in Philosophical Logic*, Dordrecht: Kluwer.
* –––, 2011, “Combinations and completeness transfer for quantified modal logics”, *Logic Journal of the IGPL*, 19(4): 598–616.
* Segerberg, K., 1973, “Two-dimensional modal logic”, *Journal of Philosophical Logic*, 2(1): 77–96.
* Šehtman, V., 1978, “Two-dimensional modal logics”, *Akademiya Nauk SSSR. Matematicheskie Zametki*, 23(5): 759–772.
* Sernadas, A., C. Sernadas, and C. Caleiro, 1999, “Fibring of logics as a categorial construction”, *Journal of Logic and Computation*, 9(2): 149–179.
* Sernadas, A., C. Sernadas, and J. Rasga, 2011, “On combined connectives”, *Logica Universalis*, 5(2): 205–224.
* –––, 2012, “On meet-combination of logics”, *Journal of Logic and Computation*, 22(6): 1453–1470.
* Sernadas, A., C. Sernadas, J. Rasga, and M.E. Coniglio, 2009a “A graph-theoretic account of logics”, *Journal of Logic and Computation*, 19(6): 1281–1320.
* –––, 2009b, “On graph-theoretic Fibring of logics”, *Journal of Logic and Computation*, 19(6): 1321–1357.
* Sernadas, A., C. Sernadas, J. Rasga, and P. Mateus, 2011, “Non-deterministic combination of connectives”, in J.-Y. Béziau and M.E. Coniglio (eds), *Logic without Frontiers: Festschrift for Walter Alexandre Carnielli on the Occasion of his 60th Birthday*, volume 17 of *Tribute* Series, London: College Publications, pp. 321–338.
* Sernadas, A., C. Sernadas, and A. Zanardo, 2002a, “Fibring modal first-order logics: Completeness preservation”, *Logic Journal of the IGPL*, 10(4): 413–451.
* Sernadas, C., J. Rasga, and W. Carnielli, 2002b, “Modulated fibring and the collapsing problem”, *The Journal of Symbolic Logic*, 67(4): 1541–1569.
* Sernadas, C., J. Rasga, and A. Sernadas, 2013, “Preservation of Craig interpolation by the product of matrix logics”, *Journal of Applied Logic*, 11(3): 328–349.
* Stuhlmann-Laeisz, R., 1983, *Das Sein-Sollen-Problem. Eine modallogische Studie (problemata 96)*, Stuttgart: Frommann-Holzboog.
* Tarlecki, A., 2000, “Towards heterogeneous specifications”, in D. Gabbay and M.D. Rijke (eds), *Frontiers of Combining Systems 2*, Research Studies Press/Wiley.
* Thomason, R., 1984, “Combinations of tense and modality”, in Dov M. Gabbay and Franz Guenthner (eds), *Handbook of Philosophical Logic*, volume 2, Dordrecht: D. Reidel, pp. 135–165.
* van Benthem, J., 2006, “Epistemic logic and epistemology: the state of their affairs”, *Philosophical Studies*, 128(1): 49–76.
* van Benthem, J., G. Bezhanishvili, B. ten Cate, and D. Sarenac, 2006, “Multimodal Logics of Products of Topologies”, *Studia Logica*, 84(3): 369–392.
* von Wright, G., 1979, “A modal logic of place”, in E. Sosa (ed.), *The Philosophy of Nicolas Rescher*, Dordrecht: D. Reidel, pp. 65–73.
* Zanardo, A., A. Sernadas, and C. Sernadas, 2001, “Fibring: Completeness preservation”, *The Journal of Symbolic Logic*, 66(1): 414–439.

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-combining). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-combining/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-combining&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](https://philpapers.org/sep/logic-combining/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* [FroCoS: Frontiers of Combining Systems](http://combination.cs.uiowa.edu/frocos/)
* [Combination Methods in Automated Reasoning](http://combination.cs.uiowa.edu/)

## Related Entries

[category theory](https://plato.stanford.edu/entries/category-theory/) | [God, arguments for the existence of: moral arguments](https://plato.stanford.edu/entries/moral-arguments-god/) | [Hume, David: moral philosophy](https://plato.stanford.edu/entries/hume-moral/) | [logic: algebraic propositional](https://plato.stanford.edu/entries/logic-algebraic-propositional/) | [logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [logic: deontic](https://plato.stanford.edu/entries/logic-deontic/) | [logic: intuitionistic](https://plato.stanford.edu/entries/logic-intuitionistic/) | [logic: many-valued](https://plato.stanford.edu/entries/logic-manyvalued/) | [logic: modal](https://plato.stanford.edu/entries/logic-modal/) | [logic: paraconsistent](https://plato.stanford.edu/entries/logic-paraconsistent/) | [logic: temporal](https://plato.stanford.edu/entries/logic-temporal/) | [logical consequence](https://plato.stanford.edu/entries/logical-consequence/)

[Copyright © 2020](https://plato.stanford.edu/info.html#c) by  
[Walter Carnielli](http://www.cle.unicamp.br/prof/carnielli/) <[*walter.carnielli@cle.unicamp.br*](mailto:walter%2ecarnielli%40cle%2eunicamp%2ebr)>  
[Marcelo Esteban Coniglio](http://www.cle.unicamp.br/prof/coniglio/) <[*coniglio@cle.unicamp.br*](mailto:coniglio%40cle%2eunicamp%2ebr)>

