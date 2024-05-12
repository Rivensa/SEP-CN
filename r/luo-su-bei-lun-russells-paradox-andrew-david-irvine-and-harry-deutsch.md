# 罗素悖论 Russell’s paradox (Andrew David Irvine and Harry Deutsch)

*首次发表于 1995 年 12 月 8 日；实质性修订于 2020 年 10 月 12 日*

罗素悖论是逻辑或集合论悖论中最著名的一个。也被称为罗素-泽尔梅洛悖论，该悖论在朴素集合论中产生，通过考虑所有不是自身成员的集合。这样一个集合只有在它不是自身的成员时才会成为自身的成员。因此产生了悖论。

一些集合，比如所有茶杯的集合，不是自身的成员。其他一些集合，比如所有非茶杯的集合，是自身的成员。将所有不是自身成员的集合称为“R”。如果 R 是自身的成员，那么根据定义它必须不是自身的成员。同样地，如果 R 不是自身的成员，那么根据定义它必须是自身的成员。

尽管恩斯特·泽尔梅洛也注意到了这个矛盾，但直到 1901 年春天，伯特兰·罗素独立发现它之前，这个矛盾被认为不重要。自那时以来，这个悖论在逻辑、集合论以及数学哲学和数学基础领域引发了大量的研究。

---

## 1. 悖论

任何集合理论的核心是对形成集合的条件的陈述。除了简单地列出集合的成员外，最初假设任何明确定义的条件（或精确指定的属性）都可以用来确定一个集合。例如，如果 T 是指茶杯的属性，那么所有茶杯的集合 S 可以定义为 S={x:T(x)}，即所有具有属性 T 的个体 x 的集合。甚至可以使用矛盾的属性来确定一个集合。例如，既是 T 又不是 T 的属性将确定空集，即没有成员的集合。

更准确地说，朴素集合论假设所谓的朴素或无限制的包容公理，即对于任何包含 x 作为自由变量的公式ϕ(x)，都存在集合{x:ϕ(x)}，其成员正好是满足ϕ(x)的对象。因此，如果公式ϕ(x)代表“x 是质数”，那么{x:ϕ(x)}将是质数的集合。如果ϕ(x)代表“∼(x=x)”，那么{x:ϕ(x)}将是空集。

但是从这个公理的假设出发，就会得出罗素的矛盾。例如，如果我们让ϕ(x)表示 x∈x，并且让 R={x:∼ϕ(x)}，那么 R 就是那些不是自身成员的对象的集合。

R 是自身的成员吗？如果是的话，那么它必须满足不是自身成员的条件，所以它不是。如果不是的话，那么它必须不满足不是自身成员的条件，所以它必须是自身的成员。由于根据经典逻辑，其中一种情况必须成立-要么 R 是自身的成员，要么不是-因此理论导致了矛盾。

正如罗素告诉我们的那样，正是在他将康托尔的对角线论证中发现的同类推理应用于“所有可想象的对象的假设类”之后，他才被引导到了这个矛盾。

> 我们正在考虑的综合类别，即包含一切的类别，必须将自身作为其成员之一。换句话说，如果存在“一切”的东西，那么“一切”就是某个东西，并且是类别“一切”的成员。但通常一个类别不是自身的成员。例如，人类不是一个人。现在形成所有不是自身成员的类别的集合。这是一个类别：它是自身的成员还是不是？如果是，那么它是那些不是自身成员的类别之一，即它不是自身的成员。如果不是，那么它不是那些不是自身成员的类别之一，即它是自身的成员。因此，这两个假设 - 它是自身的成员和它不是自身的成员 - 都暗示了它们的矛盾。这是一个矛盾。（1919 年，136）

对这个悖论的标准回应是以某种方式限制形成集合的条件。目标通常是同时消除罗素悖论（以及类似的矛盾集合）并保留数学所需的所有其他集合。这通常是通过用更为严格的分离公理替换无限制的包容公理来实现的，即对于任何（一致的）集合 S 和任何具有自由变量 x 的公式ϕ(x)，都存在一个集合{x∈S:ϕ(x)}，其成员正好是满足ϕ(x)的 S 的成员。现在，如果让ϕ(x)代表公式 x∉x，那么相应的集合{x∈S:x∉x}将不会产生矛盾，因为它只包含那些在 S 中找到的不是自身成员的成员。因此，该集合不包括自身。

在《怀特海德与罗素导论》（1910 年，第二版 60-65 页）的第二章中讨论了各种相关的悖论，同时在本百科全书的悖论和当代逻辑条目中也有讨论。

## 2. 悖论的历史

罗素似乎是在 1901 年春末，在他的《数学原理》（1903 年）的写作过程中发现了他的悖论。确切的发现时间并不清楚。罗素最初表示他在“1901 年 6 月”发现了这个悖论（1944 年，13 页）。后来他报告说这个发现发生在“1901 年春季”（1959 年，75 页）。还有后来他报告说他在那一年的 5 月份发现了这个悖论，而不是在 6 月份（1969 年，221 页）。乔治·皮亚诺的助手切萨雷·布拉利-福尔蒂在 1897 年发现了一个类似的反证法，当他注意到由于序数集是良序的，它也必须有一个序数。然而，这个序数既必须是所有序数集的一个元素，又必须大于每一个这样的元素。

与布拉利-福尔蒂的悖论不同，罗素的悖论不涉及序数或基数，而只依赖于集合和集合包含的原始概念。策梅洛在 1897 年至 1902 年之间注意到了一个类似的矛盾，可能比罗素早了几年（Ebbinghaus 和 Peckhaus 2007 年，43-48 页；Tappenden 2013 年，336 页），尽管 Kanamori 得出结论，这个发现很可能晚到 1902 年（Kanamori 2009 年，411 页）。正如 Linsky 指出的那样，策梅洛的论证虽然与罗素的类似，但最好理解为策梅洛、Schröder 和 Cantor 提出的一系列论证之一，这些论证“确实预见到”了罗素所发展的数学论证，但在某些细微但重要的方面与罗素的论证不同（Linsky 2013 年，11 页）。无论如何，直到人们意识到它们对戈特洛布·弗雷格的算术基础有多么有害，这些论证被认为是次要的。

罗素于 1902 年 6 月 16 日致信弗雷格，告知他关于他的悖论的消息。（有关通信，请参阅范·海耶诺特（1967）中的罗素（1902）和弗雷格（1902）。）这个悖论对弗雷格的逻辑工作具有重要意义，因为它实际上表明弗雷格用来形式化他的逻辑的公理是不一致的。具体而言，弗雷格的公理 V 要求将诸如ϕ(x)这样的表达式同时视为参数 x 的函数和参数ϕ的函数。（更准确地说，弗雷格的定律规定，如果概念 f 的值域与概念 g 的值域完全相同，那么 f 和 g 在每个参数的值上都是一致的，即对于每个对象 x，f(x)=g(x)。有关更多讨论，请参阅本百科全书中关于戈特洛布·弗雷格的条目的 2.4.1 节。）实际上，正是这种歧义使得罗素能够构造出 R，使其既可以是自身的成员，又可以不是自身的成员。

正当弗雷格的《算术的基本定律》（1893 年，1903 年）第二卷正在印刷时，罗素的信件到达了。弗雷格立即意识到这个悖论所带来的困难，于是在《算术的基本定律》中匆忙添加了一个附录，讨论了罗素的发现。在附录中，弗雷格观察到罗素悖论的后果并不立即清楚。例如，“我们是否总是可以谈论一个概念的范围，一个类？如果不行，我们如何识别特殊情况？我们总是可以从一个概念的范围与第二个概念的范围重合推断出每个对象都属于第二个概念吗？这些是由罗素先生的通信引发的问题，”弗雷格指出（1903 年，127 页）。由于这些担忧，弗雷格最终感到被迫放弃了他对逻辑和数学的许多观点。

尽管如此，正如罗素指出的，弗雷格对这个悖论的消息表现出了非凡的坚韧性：

> 当我思考正直和优雅的行为时，我意识到我的知识中没有什么可以与弗雷格对真理的奉献相比。他的整个一生的工作即将完成，他的许多工作被忽视，而受益的是能力远不如他的人，他的第二卷即将出版，但在发现他的基本假设错误时，他的反应是明显地沉浸在智力的愉悦中，而没有任何个人失望的感觉。这几乎是超人的，也是一个明显的迹象，表明如果人们致力于创造性的工作和知识，而不是更粗糙的努力去支配和被人知晓，他们能够做到什么。（引自 van Heijenoort（1967），127）

当然，罗素也关心这个矛盾的后果。得知弗雷格同意他对结果的重要性的看法后，他立即开始为自己即将发布的《数学原理》写一篇附录。附录名为“附录 B：类型论”，这是罗素首次尝试提供一种有原则的方法来避免后来被称为“罗素悖论”的问题。

## 3. 对悖论的早期回应

一旦意识到使用经典逻辑，所有句子都可以从矛盾中推导出来，就可以看出罗素悖论的重要性。例如，假设同时存在 P 和∼P，任意命题 Q 可以通过以下方式证明：从 P，根据加法规则得到 P∨Q；然后从 P∨Q 和∼P，根据析取三段论规则得到 Q。因为集合论是数学的基础，许多人开始担心集合论的不一致性意味着没有数学证明可以完全可信。只有通过消除罗素悖论，整个数学才能恢复一致性。

罗素悖论最终源于任何条件或属性都可以用来确定一个集合的观念。例如，只能被自身和数字一整除的属性将素数集合与整数集合区分开来。具有乳腺的属性将哺乳动物集合与爬行动物、鸟类和其他生物区分开来。既是平方数又不是平方数（或任何其他矛盾属性的结合）的属性确定了空集，等等。

早期对于无限制的包容（或抽象）公理持怀疑态度的是现代集合论的创始人乔治·康托尔。在罗素发现之前，康托尔已经拒绝了无限制的包容，而是支持了一种实际上是集合和类之间的区别，认识到某些属性（如序数的属性）产生的集合太大，无法成为集合，任何相反的假设都会导致不一致性。（详细信息可参见 Moore（1982），Hallett（1984）和 Menzel（1984）。）

伯特兰·罗素对这个悖论的回应是他恰如其名的类型理论。罗素相信自我应用是悖论的核心，他的基本思想是通过将所有句子（或更准确地说，所有命题函数，即将命题作为其值的函数）按照层次结构排列，我们可以避免对 R（所有不是自身成员的集合）的承诺。然后，只有当所有对象都处于相同的层次或相同的“类型”时，才能引用满足给定条件（或谓词）的所有对象。

对罗素悖论的这种解决方案在很大程度上受到所谓的恶性循环原则的影响。该原则实际上指出，在指定函数的适用范围之前，不能定义命题函数。换句话说，在定义函数之前，必须首先明确那些函数将适用于的对象（函数的定义域）。例如，在定义谓词“是素数”之前，首先需要定义可能满足该谓词的对象的集合，即自然数集 N。

正如怀特海德和罗素解释的那样，

> 避免悖论的分析表明，所有这些悖论都源于一种恶性循环。所涉及的恶性循环是由于假设一个对象的集合可能包含只能通过整个集合来定义的成员。因此，例如，将假设命题的集合包含一个命题，即“所有命题要么为真要么为假”。然而，似乎这样的陈述只有在“所有命题”指的是某个已经明确的集合时才合法，而如果通过关于“所有命题”的陈述来创建新的命题，则无法做到这一点。因此，我们必须说关于“所有命题”的陈述是没有意义的。...使我们能够避免非法的整体性的原理可以如下所述：“任何涉及一个集合的所有内容都不能是该集合的一部分”；或者反过来说：“如果假设某个集合有一个整体，那么该整体的成员只能通过该整体来定义，那么该集合就没有整体。”我们将这称为“恶性循环原理”，因为它使我们能够避免在假设非法整体性时涉及的恶性循环。（1910 年，第二版 37 页）

如果怀特海德和罗素是正确的，那么任何函数的适用范围都不会包括任何预设函数本身的对象。结果，命题函数（以及它们对应的命题）最终将按照罗素提出的一种层次结构进行排列。

虽然罗素在他 1903 年的《数学原理》中首次提出了他的类型理论，但他立即意识到还需要做更多的工作，因为他最初的解释似乎只解决了一些而不是全部的悖论。他考虑的替代方案之一是所谓的替代理论（Galaugher 2013）。这反过来又导致了类型理论在罗素 1908 年的文章《基于类型理论的数理逻辑》和他与阿尔弗雷德·诺思·怀特黑德合著的巨著《数学原理》（1910 年，1912 年，1913 年）中更成熟的表达。因此，罗素的类型理论有两个版本：1903 年的“简单理论”和 1908 年的“分叉理论”。这两个版本都因为过于特殊而被批评为无法成功消除悖论。

针对罗素的悖论，大卫·希尔伯特也扩展了他建立一致的、公理化的数学基础的计划，使其包括逻辑和集合论的公理化基础（Peckhaus 2004）。这种形式主义方法的基础是只允许使用有限的、明确定义的和可构造的对象，以及被认为是绝对确定的推理规则。

最后，路德维希·布劳尔发展了直觉主义，其基本思想是除非能定义一个构造它的过程，否则不能断言数学对象的存在。

所有这些回应共同帮助人们关注逻辑、语言和数学之间的联系。它们还帮助逻辑学家明确意识到形式系统的性质以及在逻辑和数学基础研究中证明为核心的元逻辑和元数学结果的种类，在过去一百年中发挥了重要作用。

## 4. 罗素悖论在当代逻辑中

罗素悖论有时被视为一种负面发展，它导致了弗雷格的《格伦德格塞茨》的崩溃，也是导致我们被驱逐出康托尔的天堂的最初概念上的罪恶之一。W.V.奎因将这个悖论描述为一种“反论”，它“带来了一个令人惊讶的意外，只能通过对我们概念遗产的否认来容纳”（1966 年，11 页）。奎因指的是之前提到的“天真理解原则”。用符号表示，该原则表明

(NC)   ∃A∀x(x∈A≡ϕ),

其中 A 在公式ϕ中不是自由的。这意味着，“存在一个集合 A，对于任何对象 x，当且仅当由ϕ表示的条件成立时，x 是 A 的元素。”通过将ϕ取为公式：x∉x，引发了罗素悖论。

尽管奎因评论说，可以更积极地看待罗素悖论。首先，尽管这个问题仍然有争议，但后来的研究发现，这个悖论不一定会短路弗雷格仅从逻辑中推导算术的过程。弗雷格的 NC 版本（他的公理 V）可以简单地被放弃。（详见弗雷格定理条目。）其次，丘奇提出了一种简单类型理论的优雅表述，即使在远离数学基础的领域也证明了其成果。（详见类型理论条目。）最后，公理（而不是天真的）集合论的发展展示了处理罗素悖论的各种巧妙且在数学和哲学上具有重要意义的方法，为集合论的元数学中的惊人结果铺平了道路。这些结果包括哥德尔和科恩关于选择公理和康托尔连续统假设独立性的定理。因此，让我们大致了解一下其中一些方法 - 具体而言，所谓的“无类型”方法 - 如何处理罗素悖论。

Zermelo 用分离公理模式（或 Aussonderungsaxiom）替换了 NC：

(ZA) ∀A∃B∀x(x∈B≡(x∈A∧ϕ)).

再次强调，为了避免循环，ϕ中不能自由地使用 B。这要求为了进入 B，x 必须是现有集合 A 的成员。可以想象，这需要一系列额外的集合存在公理，如果 NC 仍然有效的话，这些公理都是不必要的。

ZA 如何避免罗素悖论？起初，人们可能认为它无法避免。毕竟，如果我们让 A 为 V-整个集合的宇宙-而ϕ为 x∉x，似乎又出现了矛盾。但在这种情况下，所有的矛盾只表明 V 不是一个集合。所有的矛盾只表明“V”是一个空名字（即它没有指称，V 不存在），因为泽尔梅洛系统的本体论仅包括集合。

这一点可以用罗素的论证的相对形式再次说明。设 B 为任意集合。根据 ZA，集合 RB={x∈B:x∉x}存在，但它不能是 B 的元素。因为如果它是 B 的元素，那么我们可以问它是否是 RB 的元素；当且仅当它不是时，它才是。因此，每个集合 B 都“缺少”了某个东西，即 RB。所以，V 不是一个集合，因为 V 中不会有任何东西缺少。但请注意以下微妙之处：与涉及对 V 直接应用 Aussonderungs 的先前论证不同，目前的论证暗示了一个观点，即虽然 V 不是一个集合，“V”不是一个空名字。处理罗素悖论的下一个策略就是利用这个暗示。

约翰·冯·诺伊曼（1925 年）处理悖论，特别是罗素悖论的无类型方法简单而巧妙。冯·诺伊曼引入了成员和非成员之间的区别，并基于此区别划分了集合和类的概念。如果一个对象是某个类的成员（简单地说），那么它就是一个成员；如果它不是任何类的成员，那么它就是一个非成员。（实际上，冯·诺伊曼发展了一个基于函数的理论，将函数视为原始概念，而不是类，其中与成员/非成员之间的区别相对应，有一个关于能否成为某个函数的参数的对象和不能成为的对象之间的区别。在由伯奈斯和哥德尔提出的现代形式中，它是一个单排序的类理论。）

集合被定义为成员，而非成员被标记为“适当类”。例如，罗素类 R 不能是任何类的成员，因此它必须是一个适当类。如果假设 R 是类 A 的一个元素，则根据冯·诺伊曼的公理之一，R 不等于 V。但是 R 等于 V，因此不是 A 的元素。因此，冯·诺伊曼的方法与上述关于集合 RB 的结果密切相关，对于任意的 B。冯·诺伊曼的方法虽然受到哥德尔和伯奈斯的赞赏，但近年来被低估了。

奎因（1937 年）和（1967 年）以类似的方式提供了另一种无类型方法（在形式上而非实质上）来阻止罗素悖论，这种方法充满了有趣的异常。奎因的基本思想是引入分层的包容公理。实际上，该公理通过引入类似于类型理论的层次结构（或分层）来阻止循环性，在某些方面类似，而在其他方面则不同。（详细信息可以在奎因的新基础词条中找到。）

与策略 Zermelo、冯·诺伊曼和奎因相比，这些策略在某种意义上纯粹是集合论的，也有尝试通过改变基础逻辑来避免罗素悖论。有许多这样的尝试，我们不会对它们进行全面回顾，但有一种方法在目前既是激进的又有些流行（尽管不是与集合论者本身）：这就是可矛盾方法，它限制了孤立矛盾对整个理论的总体影响。经典逻辑要求任何矛盾都通过使理论的每个句子可证明来使理论变得琐碎。这是因为在经典逻辑中，以下是一个定理：

(*Ex Falso Quadlibet*)   A⊃(∼A⊃B).

现在，避免 EFQ 的唯一方法几乎是放弃析取三段论，也就是根据常规定义的联结词，假言演绎！因此，以这种方式改变基本命题逻辑确实是激进的 - 但是可能的。不幸的是，即使放弃 EFQ 也不足以保留 NC 的一种类似性。还必须放弃基本命题逻辑的以下附加定理：

(Contraction) (A⊃(A⊃B))⊃(A⊃B).

然后可以认为，NC 不仅仅导致了一个孤立的矛盾，而是导致了平凡性。（关于这一点的论证，请参见 Curry 悖论的条目，第 2.2 节。还要注意，仅仅保留“modus ponens”这个名称是不够的；在非传统逻辑中，规则本身也会发生修改。）因此，似乎 NC 的困境不仅仅局限于罗素悖论，还包括由 Curry 引起的无否定悖论。

另一个建议可能是得出这样的结论，即悖论依赖于排中律的一个实例，即 R 要么是 R 的成员，要么不是。这是一种被一些非经典逻辑方法（包括直觉主义）所拒绝的原则。然而，可以通过依赖于非矛盾律而不是排中律来构造这个悖论。我们这样做：根据 R 的定义，可以得出 R∈R≡∼(R∈R)。所以 R∈R⊃∼(R∈R)。但我们也知道 R∈R⊃R∈R。所以 R∈R⊃(R∈R∧∼(R∈R))。但根据非矛盾律，我们知道∼(R∈R∧∼(R∈R))。所以根据假言推理，我们得出∼(R∈R)。与此同时，我们还知道由于 R∈R≡∼(R∈R)，可以得出∼(R∈R)⊃R∈R，从而得出 R∈R。因此，我们可以仅使用直觉上可接受的方法推导出 R∈R 及其否定。

因此，非经典逻辑的支持者似乎不能声称以任何重要意义上保留了 NC，除了保留了原则的纯语法形式之外，直觉主义和削弱收缩原则也不会比 Zermelo、von Neumann 或 Quine 的无类型解决方案更有优势。（更多讨论可参见 Meyer、Routley 和 Dunn（1979）、Irvine（1992）、Priest（2006，第 18 章）、Weber（2010）、Weber（2012）以及 Curry 悖论（第 2.2 节）和可矛盾逻辑（第 2.3 节）的条目。）

值得注意的是，罗素悖论并不是唯一困扰罗素的悖论，因此也不是《数学原理》中出现类型限制的唯一动机。在他早期的著作《数学原理》中，罗素专门写了一章来讨论“矛盾”（罗素悖论），以多种形式呈现并驳斥了几种无法启动的回应。然后他表示将“很快”讨论类型理论。但是直到书的最后附录 B，数百页之后，这才发生！在那里，罗素提出了一个初步的简单类型理论，而不是我们在《数学原理》中找到的类型理论。为什么后来需要这个理论？原因是在附录 B 中，罗素还提出了另一个他认为无法通过简单类型理论解决的悖论。这个新的悖论涉及命题而不是类，加上语义悖论，导致罗素制定了他的分层类型理论。

这个新的命题版本的悖论在逻辑和集合论的后续发展中并没有占据重要地位，但它使罗素非常困惑。首先，它似乎与康托尔的定理相矛盾。罗素写道：“我们不能承认存在比命题更多的范围[命题类]”（1903，527）。原因是似乎存在着命题类和命题之间的简单一对一的对应关系。例如，命题类 m 可以与每个命题都为真的命题相关联。这个事实，再加上命题的细粒度个体化原则（断言，如果命题类 m 和 n 不同，则关于 m 的任何命题都与关于 n 的任何命题不同），导致了矛盾。

尽管这个悖论在教会的意义和指称逻辑的发展中起到了关键作用，但对于这个悖论的讨论相对较少。虽然我们有几个可供选择的集合理论，但我们没有像罗素命题那样发展完善的理论，尽管这些命题对于米尔派和直接指称理论家的观点至关重要。人们会认为，如果不是数学基础，那么语义学基础肯定需要这样的理论。因此，虽然罗素的一个悖论导致了数学基础的有益发展，但他的“另一个”悖论在语义学基础方面尚未导致任何类似的发展。当然，教会（1974a）和安德森（1989）曾试图基于分层类型理论发展罗素的内涵逻辑，但可以认为分层类型理论过于限制性，无法作为自然语言语义学的基础。最近也有一些尝试基于无类型集合理论获得罗素的内涵逻辑的初步成果（Cantini 2004; Deutsch 2014）。讽刺的是，尽管在语言哲学中偏好细粒度的罗素命题，但内涵逻辑的形式发展却被蒙塔古语法主导，其命题理论是粗粒度的。

值得注意的是，许多看似纯粹的集合论原理实际上是纯逻辑定理（即一阶量化理论与恒等性）的（应用）实例！在 Kalish、Montague 和 Mar（2000）中列出了其中的（部分）清单。罗素的悖论是该清单中 T269 的一个实例：

(T269) ∼∃y∀x(Fxy≡∼Fxx).

将二元谓词字母“F”解释为“是成员”，这意味着不存在这样的 y，对于任何 x，当且仅当 x 不是 x 的成员时，x 是 y 的成员。这是否意味着罗素悖论归结为 T269？

当然，T269 的证明提炼了罗素的论证本质，其推理模式。但这种模式也支持了一系列看似琐碎的“悖论”，比如著名的理发师悖论，他只给那些不给自己理发的人理发，或者类似的仁慈而高效的上帝悖论，他只帮助那些不帮助自己的人。

如果有的话，这些“伪悖论”与罗素的悖论有何不同？推理模式是相同的，结论也是相同的：这些东西根本不存在，没有这样的理发师，没有这样的高效上帝，没有这样的非自身成员集合。（然而，正如冯·诺伊曼所示，我们并不需要走得这么远。冯·诺伊曼的方法告诉我们，我们不能说 R 这样的东西不存在，只是我们对它们不能说太多，因为 R 和类似的东西不能落入任何作为类的谓词的范畴。）

这个问题的标准答案是，区别在于主题的不同。奎因问道：“为什么罗素悖论算作一个反论而理发师悖论不算？”他回答道：“原因在于我们的思维习惯中有一个压倒性的假设，即存在这样一个类别，但没有存在理发师这样的假设”（1966 年，14 页）。即便如此，心理学上的“思维习惯”并没有特别启发人。更重要的是，罗素悖论合理地引发了关于集合的问题；但根据 T269 这样的理由，想知道有哪些理发师或神明是无意义的！

然而，这个判断对于理发师或 T269 的粉丝来说并不完全公平。他们会坚持认为，T269 所提出的问题不是有哪些理发师或神明，而是有哪些非悖论性的对象。这个问题与罗素悖论本身提出的问题几乎相同。因此，从这个角度来看，理发师和罗素悖论之间的关系比许多人（跟随奎因）愿意承认的要密切得多（Salmon 2013）。

我们注意到，有一个一阶逻辑公式与关于 RB 的原理所承担的关系与 T269 与罗素悖论的关系相同。它是以下公式：

(T273) ∀z∀y(∀x[Fxy≡(Fxz∧∼Fxx)]⊃∼Fyz).

(我们已经在 Kalish、Montague 和 Mar（2000）中使用的编号上进行了扩展，以 T273。) 但并非所有集合论悖论都与一阶逻辑定理类似相关。 Burali-Forti 悖论就是一个例子，因为良序的概念不是基本的；也就是说，它不能用一阶定义。

罗素悖论从未过时，但最近，数学逻辑、哲学和现代逻辑的历史研究领域的学者对它产生了极大的兴趣。瞥一眼 2004 年的《罗素悖论一百年》一书的目录，就会看到著名的数学和哲学逻辑学家以及逻辑学史学家们对这个悖论进行了深入研究，提出了重返康托尔天堂的新方法，或者其他解决这个问题的方法。他们的研究包括从悖论所提出的困境中彻底摆脱出来的新方法，对类型理论（简单和分层以及其扩展）的新研究，对罗素悖论和建设性理论的新解释，对罗素命题悖论以及他自己对无类型理论（替换理论）的尝试等等。

所有这些都提醒我们，富有成果的工作可以从最不可能的观察中产生。正如 Dana Scott 所说：“从一开始就应该明白，罗素悖论不应被视为一场灾难。它和相关的悖论表明，天真的全包集合观念是站不住脚的。这是一个有趣的结果，毫无疑问”（1974 年，207 页）。

<!--md-padding-ignore-begin-->
## Bibliography

* Anderson, C. Anthony, 1989. “Russellian Intensional Logic,” in Joseph Almog, John Perry and Howard Wettstein (eds), *Themes from Kaplan*, Oxford: Oxford University Press, 67–103.
* Barwise, Jon, 1975. *Admissible Sets and Structures*, Berlin: Springer-Verlag.
* ––– and John Etchemendy, 1987. *The Liar: An Essay on Truth and Circularity*, Oxford: Oxford University Press.
* ––– and Lawrence Moss, 1996. *Vicious Circles*, Stanford: CSLI Publications.
* Bealer, George, 1982. *Quality and Concept*, New York: Oxford University Press.
* Beaney, Michael, 2003. “Russell and Frege,” in Nicholas Griffin (ed.), *The Cambridge Companion to Bertrand Russell*, Cambridge: Cambridge University Press, 128–170.
* Cantini, Andrea, 2004. “On a Russellian Paradox about Propositions and Truth,” in Godehard Link (ed.) (2004) *One Hundred Years of Russell’s Paradox*, Berlin and New York: Walter de Gruyter, 259–284.
* –––, 2009. “Paradoxes, Self-Reference and Truth in the 20th Century,” in Dov M. Gabbay and John Woods (eds) (2009) *Handbook of the History of Logic: Volume 5 – Logic From Russell to Church*, Amsterdam: Elsevier/North Holland, 875–1013.
* Church, Alonzo, 1974a. “Russellian Simple Type Theory,” *Proceedings and Addresses of the American Philosophical Association*, 47: 21–33.
* –––, 1974b. “Set Theory with a Universal Set,” *Proceedings of the Tarski Symposium*, 297–308; repr. in *International Logic Review*, 15: 11–23.
* –––, 1978. “A Comparison of Russell’s Resolution of the Semantical Antinomies with that of Tarski,” *Journal of Symbolic Logic*, 41: 747–760; repr. in A.D. Irvine, *Bertrand Russell: Critical Assessments*, vol. 2, New York and London: Routledge, 1999, 96–112.
* Coffa, Alberto, 1979. “The Humble Origins of Russell’s Paradox,” *Russell*, 33–34: 31–7.
* Copi, Irving, 1971. *The Theory of Logical Types*, London: Routledge and Kegan Paul.
* Demopoulos, William, and Peter Clark, 2005. “The Logicism of Frege, Dedekind and Russell,” in Stewart Shapiro (ed.), *The Oxford Handbook of Philosophy of Mathematics and Logic*, Oxford: Oxford University Press, 129–165.
* Deutsch, Harry, 2014. “Resolution of Some Paradoxes of Propositions,” *Analysis*, 74: 26-34.
* Ebbinghaus, Heinz-Dieter, and Volker Peckhaus, 2007. *Ernst Zermelo: An Approach to His Life and Work*, Berlin: Springer-Verlag.
* Forster, T.E., 1995. *Set Theory with a Universal Set*, 2nd edn, Oxford: Clarendon Press.
* Frege, Gottlob, 1902. “Letter to Russell,” in Jean van Heijenoort (ed.), *From Frege to Gödel*, Cambridge, Mass.: Harvard University Press, 1967, 126–128.
* –––, 1903. “The Russell Paradox,” in Gottlob Frege, *The Basic Laws of Arithmetic*, Berkeley: University of California Press, 1964, 127–143; abridged and repr. in A.D. Irvine, *Bertrand Russell: Critical Assessments*, vol. 2, New York and London: Routledge, 1999, 1–3.
* Gabbay, Dov M., and John Woods (eds.), 2009. *Handbook of the History of Logic: Volume 5 – Logic From Russell to Church*, Amsterdam: Elsevier/North Holland.
* Galaugher, J.B., 2013. “Substitution’s Unsolved ‘Insolubilia’,” *Russell*, 33: 5–30.
* Garciadiego, A., 1992. *Bertrand Russell and the Origins of the Set-theoretic “Paradoxes”*, Boston: Birkhäuser.
* Grattan-Guinness, I., 1978. “How Bertrand Russell Discovered His Paradox,” *Historia Mathematica*, 5: 127–37.
* –––, 2000. *The Search for Mathematical Roots: 1870–1940*, Princeton and Oxford: Princeton University Press.
* Griffin, Nicholas (ed.), 2003. *The Cambridge Companion to Bertrand Russell*, Cambridge: Cambridge University Press.
* –––, 2004. “The Prehistory of Russell’s Paradox,” in Godehard Link (ed.), *One Hundred Years of Russell’s Paradox*, Berlin and New York: Walter de Gruyter, 349–371.
* ––– Bernard Linsky and Kenneth Blackwell (eds.), 2011. *Principia Mathematica at 100*, Hamilton, ON: Bertrand Russell Research Centre; also published as Special Issue, Volume 31, Number 1 of *Russell*.
* Hallett, Michael, 1984. *Cantorian Set Theory and Limitation of Size*, Oxford: Clarendon.
* Halmos, Paul R., 1960. *Naive Set Theory*, Princeton: D. van Nostrand.
* Irvine, A.D., 1992. “Gaps, Gluts and Paradox,” *Canadian Journal of Philosophy* (Supplementary Volume), 18: 273–299.
* ––– (ed.), 2009. *Philosophy of Mathematics*, Amsterdam: Elsevier/North Holland.
* Kanamori, Akihiro, 2004. “Zermelo and Set Theory,” *The Bulletin of Symbolic Logic*, 10: 487–553.
* –––, 2009. “Set Theory from Cantor to Cohen,” in A.D. Irvine (ed.), *Philosophy of Mathematics*, Amsterdam: Elsevier/North Holland, 395–459.
* Kalish, Donald, Richard Montague and Gary Mar, 2000. *Logic: Techniques of Formal Reasoning*, 2nd edn, New York: Oxford University Press.
* Klement, Kevin, 2005. “The Origins of the Propositional Functions Version of Russell’s Paradox,” *Russell*, 24: 101–132.
* –––, 2014, “The Paradoxes and Russell’s Theory of Incomplete Symbols,” *Philosophical Studies*, 169: 183–207.
* Landini, Gregory, 2006. “The Ins and Outs of Frege’s Way Out,” *Philosophia Mathematica*, 14: 1–25.
* –––, 2013. “Zermelo ‘and’ Russell’s Paradox: Is There a Universal Set?” *Philosophia Mathematica*, 21: 180–199.
* Levy, A., 1979. *Basic Set Theory*, Berlin: Springer-Verlag; New York: Heidelberg.
* Link, Godehard (ed.), 2004. *One Hundred Years of Russell’s Paradox*, Berlin and New York: Walter de Gruyter.
* Linsky, Bernard, 1990. “Was the Axiom of Reducibility a Principle of Logic?” *Russell*, 10: 125–140; repr. in A.D. Irvine (ed.) (1999) *Bertrand Russell: Critical Assessments*, 4 vols, London: Routledge, vol. 2, 150–264.
* –––, 2002. “The Resolution of Russell’s Paradox in *Principia Mathematica*,” *Philosophical Perspectives*, 16: 395–417.
* –––, 2013, “Ernst Schroeder and Zermelo’s Anticipation of Russell’s Paradox,” in Karine Fradet and François Lepage, *La crise des fondements : quelle crise?*, Montréal: Les Cahiers d’Ithaque, 7–23.
* Mares, Edwin, 2007. “The Fact Semantics for Ramified Type Theory and the Axiom of Reducibility,” *Notre Dame Journal of Formal Logic*, 48: 237–251.
* Menzel, Christopher, 1984. “Cantor and the Burali-Forti Paradox,” *Monist*, 67: 92–107.
* Meyer, Robert K., Richard Routley and Michael Dunn, 1979. “Curry’s Paradox,” *Analysis*, 39: 124–128.
* Moore, Gregory H., 1982. *Zermelo’s Axiom of Choice*, New York: Springer.
* –––, 1988. “The Roots of Russell’s Paradox,” *Russell*, 8: 46–56.
* Murawski, Roman, 2011. “On Chwistek’s Philosophy of Mathematics,” in Nicholas Griffin, Bernard Linsky and Kenneth Blackwell (eds) (2011) *Principia Mathematica at 100*, in *Russell* (Special Issue), 31(1): 121–130.
* Peckhaus, Volker, 2004. “Paradoxes in Göttingen,” in Godehard Link (ed.), *One Hundred Years of Russell’s Paradox*, Berlin and New York: Walter de Gruyter, 501–515.
* Priest, Graham, 2006. *In Contradiction*, 2nd edn, New York: Oxford University Press.
* Quine, W.V.O., 1937. “New Foundations for Mathematical Logic,” *American Mathematical Monthly*, 44: 70–80; repr. in W.V.O. Quine, *From a Logical Point of View*, London: Harper & Row, 1953.
* –––, 1966. *The Ways of Paradox and Other Essays*, New York: Random House.
* –––, 1967. *Set Theory and Its Logic*, Harvard: Belknap Press.
* Russell, Bertrand, 1902. “Letter to Frege,” in Jean van Heijenoort (ed.), *From Frege to Gödel*, Cambridge, Mass.: Harvard University Press, 1967, 124–125.
* –––, 1903. “Appendix B: The Doctrine of Types,” in Bertrand Russell, *The Principles of Mathematics*, Cambridge: Cambridge University Press, 1903, 523–528.
* –––, 1908. “Mathematical Logic as Based on the Theory of Types,” *American Journal of Mathematics*, 30: 222–262; repr. in Bertrand Russell, *Logic and Knowledge*, London: Allen and Unwin, 1956, 59–102; and repr. in Jean van Heijenoort (ed.), *From Frege to Gödel*, Cambridge, Mass.: Harvard University Press, 1967, 152–182.
* –––, 1919. *Introduction to Mathematical Philosophy*, London: George Allen and Unwin Ltd, and New York: The Macmillan Co.
* –––, 1944. “My Mental Development,” in Paul Arthur Schilpp (ed.), *The Philosophy of Bertrand Russell*, 3rd edn, New York: Tudor, 1951, 3–20.
* –––, 1959. *My Philosophical Development*, London: George Allen and Unwin, and New York: Simon & Schuster.
* –––, 1967, 1968, 1969. *The Autobiography of Bertrand Russell*, 3 vols, London: George Allen and Unwin; Boston: Little Brown and Company (Volumes 1 and 2), New York: Simon and Schuster (Vol. 3).
* Salmon, N., 2013. “A Note on Kripke’s Paradox about Time and Thought,” *Journal of Philosophy*, 110: 213-220.
* Scott, Dana, 1974. “Axiomatizing Set Theory,” in T.J. Jech (ed.), *Proceedings of Symposia in Pure Mathematics* (Volume 13, part 2), American Mathematical Society, 207-214.
* Shapiro, Stewart (ed.), 2005. *The Oxford Handbook of Philosophy of Mathematics and Logic*, Oxford: Oxford University Press.
* Simmons, Keith, 2000. “Sets, Classes and Extensions: A Singularity Approach to Russell’s Paradox,” *Philosophical Studies*, 100: 109–149.
* –––, 2005. “A Berry and a Russell without Self-Reference,” *Philosophical Studies*, 126: 253–261.
* Sorensen, Roy A., 2002. “Philosophical Implications of Logical Paradoxes,” in Dale Jacquette (ed.), *A Companion to Philosophical Logic*, New York: Oxford University Press, 131–142.
* –––, 2003. “Russell’s Set,” in *A Brief History of the Paradox*, New York: Oxford University Press, 316–332.
* Stevens, Graham, 2004. “From Russell’s Paradox to the Theory of Judgement: Wittgenstein and Russell on the Unity of the Proposition,” *Theoria*, 70: 28–61.
* –––, 2005. *The Russellian Origins of Analytical Philosophy*, London and New York: Routlege.
* Tappenden, Jamie, 2013. “The Mathematical and Logical Background to Analytic Philosophy,” in Michael Beaney (ed.) *The Oxford Handbook of the History of Analytic Philosophy*, Oxford: Oxford University Press, 318–354.
* Urquhart, Alasdair, 1988. “Russell’s Zig-Zag Path to the Ramified Theory of Types,” *Russell*, 8: 82–91.
* –––, 2003. “The Theory of Types,” in Nicholas Griffin (ed.), *The Cambridge Companion to Bertrand Russell*, Cambridge: Cambridge University Press, 286–309.
* van Heijenoort, Jean (ed.), 1967. *From Frege to Gödel: A Source Book in Mathematical Logic, 1879-1931*, Cambridge and London: Harvard University Press.
* von Neumann, John, 1925. “An Axiomatization of Set Theory,“ in Jean van Heijenoort (ed.), *From Frege to Gödel*, Cambridge and London: Harvard University Press, 1967, 393–413.
* Wahl, Russell, 2011. “The Axiom of Reducibility,” in Nicholas Griffin, Bernard Linsky and Kenneth Blackwell (eds) (2011) *Principia Mathematica at 100*, in *Russell* (Special Issue), 31(1): 45–62.
* Weber, Z., 2010. “Transfinite Numbers in Paraconsistent Set Theory,” *Review of Symbolic Logic*, 3: 71–92.
* –––, 2012. “Transfinite Cardinals in Paraconsistent Set Theory,” *Review of Symbolic Logic*, 5: 269–293.
* Whitehead, Alfred North, and Bertrand Russell, 1910, 1912, 1913. *Principia Mathematica*, 3 vols, Cambridge: Cambridge University Press; second edn, 1925 (Vol. 1), 1927 (Vols 2, 3); abridged as *Principia Mathematica to *56*, Cambridge: Cambridge University Press, 1962.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=russell-paradox). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/russell-paradox/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=russell-paradox&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/russell-paradox/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* [Bertrand Russell Archives](http://www.mcmaster.ca/russdocs/russell.htm)
* [Bertrand Russell Research Centre](http://www.humanities.mcmaster.ca/~russell/)
* [Bertrand Russell Society](http://www.users.drew.edu/~jlenz/brs.html)
* [*Bertrand Russell Society Quarterly*](http://www.lehman.cuny.edu/faculty/rcarey/BRSQ/)
* [*Principia Mathematica*: Volume 1](http://name.umdl.umich.edu/AAT3201.0001.001) (University of Michigan Historical Math Collection)
* [*Principia Mathematica*: Volume 2](http://name.umdl.umich.edu/AAT3201.0002.001) (University of Michigan Historical Math Collection)
* [*Principia Mathematica*: Volume 3](http://name.umdl.umich.edu/AAT3201.0003.001) (University of Michigan Historical Math Collection)
* [*Russell: The Journal of Bertrand Russell Studies*](https://mulpress.mcmaster.ca/russelljournal/)
* [Russell’s Antinomy](http://mathworld.wolfram.com/RussellsAntinomy.html) (Wolfram MathWorld)
* [Russell’s Paradox](https://www.cut-the-knot.org/selfreference/russell.shtml), webpage at the site *Interactive Mathematics Miscellany and Puzzles*, by Alexander Bogomolny.

## Related Entries

Cantor, Georg | [Frege, Gottlob](https://plato.stanford.edu/entries/frege/) | [Frege, Gottlob: theorem and foundations for arithmetic](https://plato.stanford.edu/entries/frege-theorem/) | [logic: paraconsistent](https://plato.stanford.edu/entries/logic-paraconsistent/) | [mathematics: inconsistent](https://plato.stanford.edu/entries/mathematics-inconsistent/) | peano | [*Principia Mathematica*](https://plato.stanford.edu/entries/principia-mathematica/) | [Quine, Willard Van Orman: New Foundations](https://plato.stanford.edu/entries/quine-nf/) | [Russell, Bertrand](https://plato.stanford.edu/entries/russell/) | [self-reference](https://plato.stanford.edu/entries/self-reference/) | [type theory](https://plato.stanford.edu/entries/type-theory/) | [Whitehead, Alfred North](https://plato.stanford.edu/entries/whitehead/)

### Acknowledgments

Thanks are due to Ken Blackwell, Fred Kroon, Paolo Mancosu, Chris Menzel, Jim Robinson, Fred Spiessens, Richard Zach and several anonymous referees for their helpful comments on earlier versions of this material.

[Copyright © 2020](https://plato.stanford.edu/info.html#c) by  
[Andrew David Irvine](http://phil.ok.ubc.ca/faculty/irvine.html)  
Harry Deutsch <[*hdeutsch@ilstu.edu*](mailto:hdeutsch%40ilstu%2eedu)>
<!--md-padding-ignore-end-->
