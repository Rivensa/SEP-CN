# 图表 diagrams (Sun-Joo Shin, Oliver Lemon, and John Mumma)

*首次发表于 2001 年 8 月 28 日星期二；实质性修订于 2018 年 12 月 13 日星期四*

我们所有人都参与并利用有效的推理，但我们实际执行的推理在各种方面与大多数（形式）逻辑学家研究的推理有所不同。人类通常进行的推理涉及通过多种媒介获得的信息。相比之下，形式逻辑迄今主要关注的是基于一种形式信息的有效推理，即句子形式的信息。最近，许多哲学家、心理学家、逻辑学家、数学家和计算机科学家越来越意识到多模态推理的重要性，此外，许多研究已在非符号化，特别是图解表示系统领域展开。本文概述了这一新研究领域的总体方向，并着重讨论了证明中图表的逻辑地位、它们的表征功能和适当性、不同类型的图解系统，以及图表在人类认知中的作用。

---

## 引言

图表或图片可能是人类沟通形式中最古老的形式之一。它们不仅用于表示，还可以用于进行某些类型的推理，因此在逻辑和数学中发挥着特殊作用。然而，在逻辑的现代历史中，句子表示系统（例如，一阶逻辑）一直占主导地位，而图表通常被视为边缘兴趣。图表通常被采用作为探索证明的启发式工具，但不作为证明的一部分。[2] 近年来，哲学家、逻辑学家、认知科学家和计算机科学家中出现了一股新的潮流，他们开始关注不同类型的表示系统，尤其是对图表表示系统进行了大量研究。

挑战长期存在的对图解表达的偏见，从事多模态推理研究的人员采取了不同种类的方法，我们可以将其归类为三个明显的群体。研究的一个分支可以在心灵哲学和认知科学中找到。对于那些一直在研究心智表征和推理的人来说，语言形式的限制是明显的，一些哲学家和认知科学家热情地拥抱了这种新的多模态推理方向，并探讨了涉及非语言形式的人类推理和心智表征（Cummins 1996; Chandrasekaran et al. 1995）。另一方面，关于图解推理的工作表明，符号系统和图解系统在逻辑地位上没有固有的区别。一些逻辑学家提出了案例研究，证明图解系统在逻辑上可以像符号系统一样完备和正确。这种结果直接驳斥了一种广泛存在的假设，即图解本质上具有误导性，并消除了关于图解在证明中使用的理论上的反对（Shin 1994; Hammer 1995a）。多模态推理的第三个方向是由计算机科学家采取的，他们的兴趣比其他群体更加实际。毫不奇怪，许多计算机科学领域的工作者——例如，知识表征、系统设计、视觉编程、GUI 设计等领域——在这个“异构系统”新概念中发现了新的、令人兴奋的机会，并在他们的研究领域实现了图解表达。

我们对本文有以下目标。首先，我们希望让读者了解一些特定图表系统的细节。同时，本文还将探讨理论问题，通过探索图表表示和推理的性质，从表达能力和正确性的角度进行讨论。第二部分的案例研究不仅满足了我们的第一个目标，还为第三部分更为理论和一般性的讨论提供了扎实的材料。第四部分提出了另一个案例研究，并将其与第三部分的一般讨论联系起来。正如上文所述，图表的主题吸引了许多不同研究领域的重要研究成果。因此，我们的第五部分旨在介绍不同领域采用的图表推理方法。

为了进一步讨论，我们需要澄清“图表”一词的两个相关但不同的用法：图表作为内部心智表征和图表作为外部表征。以下引用来自 Chandrasekaran 等人（1995 年：第 xvii 页）的话简洁地总结了内部与外部图表表征之间的区别。

* 外部图表：这些是由代理人在外部世界的媒介（纸张等）中构建的，但是代理人的意图是作为代表。
* 内部图表或图像：这些包括被假定具有某些图像特性的（有争议的）内部表征。

逻辑学家关注外部图表系统，心灵哲学家和认知科学家之间的意象辩论主要涉及内部图表，而关于图表的认知作用的研究涉及这两种形式。

## 图表作为表征系统

现代逻辑史上命题表示系统的主导地位掩盖了几个关于图解系统的重要事实。其中之一是，在现代逻辑时代之前，几个著名的图解系统作为启发式工具可用。欧拉圆圈、文氏图和刘易斯·卡罗尔的方块已被广泛用于某些类型的三段论推理（Euler 1768; Venn 1881; Carroll 1896）。另一个有趣但被忽视的故事是，现代象征逻辑的奠基人查尔斯·皮尔斯不仅修订了文氏图，还发明了一种图形系统，存在图，已被证明等同于一个谓词语言（Peirce 1933; Roberts 1973; Zeman 1964）。

这些现有的图表已经激发了那些最近引起我们对多模态表征的研究者的注意。参与该项目的逻辑学家以两种不同的方式探讨了这一主题。首先，他们的兴趣专注于外部绘制的表征系统，而不是内部心理表征。其次，他们的目标是建立系统的逻辑状态，而不是解释其启发力，通过测试选择性表征系统的正确性和表达能力。如果一个系统无法证明其合理性，或者其表达能力过于有限，逻辑学家对该语言的兴趣将会消退（Sowa 1984; Shin 1994）。

在这一部分中，我们将以欧拉和文氏图的历史发展作为案例研究，以阐明以下几个方面：首先，这个过程将向我们展示一个数学家关于图解三段论推理的简单直觉是如何逐渐发展成为一个正式的表示系统的。其次，我们将观察到在图解系统的不同阶段的扩展和修改中给予的不同重点。第三，与此相关的是，这一历史发展展示了图解系统的表达能力和视觉清晰度之间的有趣张力和权衡。最重要的是，读者将见证逻辑学家们如何解决一个问题，即句子系统能够为我们提供严格证明的内在原因，而图解系统却不能，并且他们成功地否定了这个问题的回答。

因此，读者不会对 Barwise 和 Etchemendy 得出的以下结论感到惊讶，他们是第一批在逻辑学中进行图解证明探究的逻辑学家

> 没有原则性区别，推理形式主义使用文本和使用图表之间。可以基于图表建立严谨、逻辑上正确（完备）的形式系统。 (Barwise & Etchemendy 1995: 214)

这种信念对于他们创新的计算机程序 Hyperproof 的诞生是必不可少的，该程序采用一阶语言和图表（在多模式系统中）来教授基础逻辑课程（Barwise & Etchemendy 1993 和 Barwise & Etchemendy 1994）。

### 欧拉图表

莱昂哈德·欧拉（Leonhard Euler）是 18 世纪的数学家，他采用闭合曲线来说明三段论推理（Euler 1768）。他将四种范畴命题表示如图 1 所示。

> ![Four cases the first labeled 'All A are B' has an inner circle labeled 'A' completely inside an outer circle labeled 'B'; the second labeled 'No A is B' has two nonoverlapping circles, one labeled 'A' and the other 'B'; the third labeled 'Some A is B' has two overlapping circles, the overlap is labeled 'A' and the nonoverlap bit of one circle is labeled 'B'; the fourth case labeled 'Some A is not B' has two overlapping circles, the nonoverlap bit of one is labeled 'A' and the nonoverlap bit of the other is labeled 'B'](https://plato.stanford.edu/entries/diagrams/fig1.png)
> **图表 1: 欧拉图**

对于这两个普遍性命题，系统以直观的方式采用圆圈之间的空间关系：如果标记为“A”的圆包含在标记为“B”的圆内，那么图表代表所有 A 都是 B 的信息。如果两个圆之间没有重叠部分，则图表传达了没有 A 是 B 的信息。

这种表达受以下惯例约束：[3]

> 领域中的每个对象 x 都被分配一个唯一的位置，称为 l(x)，在平面上，使得当且仅当 x 是区域 R 代表的集合的成员时，l(x)在区域 R 中。

这种表征的力量在于，将一个对象作为一个集合的成员很容易地概念化为该对象落在集合内部，就像页面上的位置被认为是落在或者落在绘制的圆圈内外一样。该系统的力量还在于，不需要额外的约定来建立涉及多个圆的图表的含义：集合之间的关系是通过代表它们的圆之间保持的相同关系来断言的。两个普遍陈述“所有 A 都是 B”和“没有 A 是 B”的表征展示了该系统的这种力量。

继续探讨两个存在性陈述，这种清晰度并未得到保留。欧拉通过图表“某些 A 是 B”来证明，我们可以直观推断 A 中的某些内容也包含在 B 中，因为 A 区域的一部分包含在 B 区域中（Euler 1768: 233）。显然，欧拉本人认为在这种情况下以及在普遍性陈述的情况下，区域之间的视觉包含关系是相同的。然而，欧拉的信念是不正确的，这种表达引起了一种有害的模糊。在这个图表中，不仅圆圈 A 的一部分包含在区域 B 中（正如欧拉所描述的），而且以下陈述是正确的：（i）圆圈 B 的一部分包含在区域 A 中（ii）圆圈 A 的一部分不包含在圆圈 B 中（iii）圆圈 B 的一部分不包含在圆圈 A 中。也就是说，第三个图表可以被解读为“某些 B 是 A”，“某些 A 不是 B”，“某些 B 不是 A”以及“某些 A 是 B”。为了避免这种模糊，我们需要建立几个更多的约定。[4]

欧拉自己的例子很好地说明了他图解系统的优点和缺点。

> **Example 1**. All *A* are *B*. All *C* are *A*. Therefore, all *C* are *B*.
>
>> ![Three concentric circles, the innermost one labeled 'C', the next labeled 'A', and the outermost one labeled 'B'](https://plato.stanford.edu/entries/diagrams/example1.png)
>>
>
> **Example 2**. No *A* is *B*. All *C* are *B*. Therefore, no *C* is *A*.
>
>> ![On the left a circle labeled 'A' and on the right two concentric circles, the inner one labeled 'C' and the outer one labeled 'B'](https://plato.stanford.edu/entries/diagrams/example2.png)
>>

在这两个例子中，读者可以轻松推断出结论，这清晰展示了欧拉图的强大特征。然而，当存在性陈述被表示时，事情变得更加复杂，如上所解释的那样。例如：

> **Example 3**. No *A* is *B*. Some *C* is *A*. Therefore, Some *C* is not *B*.
>
> 没有单一的图表可以代表这两个前提，因为集合 B 和 C 之间的关系无法在一个单一的图表中完全指定。相反，欧拉建议以下三种可能情况：
>
>> ![Three cases Case 1 has on the left two overlapping circles, the overlap is labeled 'C' and the nonoverlap section of first circle is labeled 'A'; on the right and separate is a third circle labeled 'B' Case 2 has three circles, two of the circles overlap and the overlap section is labeled 'C' and the nonoverlap section of the first circle is labeled 'A'; in the nonoverlap section of the second circle is the third circle labeled 'B' Case 3 is similar to Case 2 except the third circle is not completely within the nonoverlap section of the second circle; the section of the third circle outside the second circle is labeled 'B'](https://plato.stanford.edu/entries/diagrams/example3.png)
>>

欧拉声称命题“一些 C 不是 B”可以从所有这些图表中读出。然而，从视觉上看，第一种和第二种情况如何引导用户读出这个命题还远非明显，因为用户可能会从第一种情况中读出“没有 C 是 B”，从第二种情况中读出“所有 B 是 C”。

因此，存在性陈述的表达不仅使欧拉圆的视觉清晰度变得模糊，而且对该系统提出了严重的解释问题。欧拉本人似乎意识到了这个潜在问题，并引入了一个新的句法设备，'*'（代表非空）作为修复这一缺陷的尝试（1768 年：第 105 封信）。

然而，当这个系统无法在单个图表中表示某些兼容（即一致）的信息时，就会发现一个更严重的缺陷。例如，欧拉的系统阻止我们绘制一个单一图表来表示以下陈述对：（i）“所有 A 都是 B”和“没有 A 是 B”（如果 A 是一个空集，则它们是一致的）。 （ii）“所有 A 都是 B”和“所有 B 都是 A”（当 A = B 时它们是一致的）。 （iii）“一些 A 是 B”和“所有 A 都是 B”。 （假设我们为前一个命题绘制了一个欧拉图，并尝试将一个新的兼容信息，即后者，添加到这个现有图表中。）这个缺点与文氏为他自己的图表系统提出动机密切相关（有关欧拉系统的其他缺点，请参见第 3.1 节）。

### 2.2 维恩图

文恩对欧拉圆圈的批评总结如下：

> 在这[Euler diagrams]中的弱点，以及所有类似方案中的弱点，在于它们严格地只阐明了类之间的实际关系，而不是我们可能拥有的这些关系的不完全知识，或者可能希望通过命题传达的这些关系。(Venn 1881: 510)

由于其严格性，欧拉系统有时无法在单个图表中表示一致的信息片段，如上所示。除了这种表达上的限制，欧拉系统在处理非空集方面也存在其他类型的表达限制，这是由于平面图形的拓扑限制（见第 3.1 节）。

文森（Venn）的新系统（1881 年）旨在克服这些表达上的局限，以便表示部分信息。解决方案是他的“主要图表”概念。主要图表代表了一些集合之间的所有可能的集合论关系，而不对它们做出任何存在性承诺。例如，图 2 显示了关于集合 A 和 B 的主要图表。

> ![two overlapping circles, the first labeled 'A' and the second labeled 'B'](https://plato.stanford.edu/entries/diagrams/fig2.png)
> **图表 2: Venn 的 Primary 图表**

根据文氏的系统，这个图表并未传达关于这两个集合之间关系的任何具体信息。这是欧拉图和文氏图之间的主要区别。

对于普遍性陈述的表示，与欧拉图中明显清晰的空间包含关系不同，文恩的解决方案是“将它们[适当的区域]涂黑”（Venn 1881: 122）。通过使用这种句法设备，我们得到了如图 3 所示的普遍性陈述的图表。

> ![Two Venn diagrams The first is titled 'All A are B' and consists of two overlapping circles labeled 'A' and 'B', the section of A that does not overlap with B is shaded The second is titled 'No A is B' and also consists of two overlapping circles labeled 'A' and 'B', the overlap of the two circles is shaded](https://plato.stanford.edu/entries/diagrams/fig3a.png)
> **图表 3: Venn 的着色**

文氏在选择阴影的时候可能并非完全是随意的，因为阴影可以被解释为对集合空集的可视化。然而，应该注意到，阴影是一种欧拉没有使用过的新的句法设备。这种修订赋予了系统灵活性，使得某些兼容的信息可以在单个图表中表示。在下面的图表中，左侧的图表将“所有 A 都是 B”和“没有 A 是 B”这两个信息合并在一起，以视觉传达“没有任何东西是 A”的信息。右侧的图表代表了“所有 A 都是 B”和“所有 B 都是 A”，清楚地显示了 A 和 B 是相同的：

> ![Two Venn diagrams the first has two overlapping circles labeled 'A' and 'B'; circle A is shaded The second is also two overlapping circles labeled 'A' and 'B', both circles are shaded except where they overlap](https://plato.stanford.edu/entries/diagrams/fig3b.png)

事实上，使用主要图表也避免了下面讨论的一些与图表对象的空间属性有关的表达问题，在第 3 节中。令人惊讶的是，文恩对存在性陈述的表示保持沉默，这也是欧拉图的另一个困难。我们只能想象文恩可能引入了另一种表示存在承诺的句法对象。这就是查尔斯·皮尔斯在大约二十年后所做的。

### 皮尔斯的延伸

皮尔斯指出，文恩的系统无法表示以下类型的信息：存在性陈述，分离信息，概率和关系。 皮尔斯旨在通过扩展文恩的系统的表达能力来处理前两种命题，即存在性和分离性陈述。 这一扩展是通过以下三种设备完成的。 (i) 用一个新符号“o”替换文恩表示空虚的阴影。 (ii) 引入一个符号“x”表示存在性导入。 (iii) 对于分离信息，引入一个线性符号“-”，连接“o”和“x”符号。

例如，图 4 代表了这样一个陈述，“所有 A 都是 B 或者一些 A 是 B”，这是欧拉系统和文氏系统都无法用单一图表表示的。

> ![Two overlapping circles labeled 'A' and 'B'; inside the overlap is a label 'x' and inside of the nonoverlapping bit of circle A is a label 'o'; a line connects 'x' to 'o'](https://plato.stanford.edu/entries/diagrams/fig4a.png)
> **图表 4：皮尔斯图**

皮尔斯（Peirce）用符号“o”代替文恩（Venn）的阴影表示空集的原因似乎很明显：要连接阴影或阴影和“x”以表示分离信息并不容易。这样一来，皮尔斯增加了系统的表达能力，但这种改变并非没有代价。

把所有 A 都是 B 和一些 A 是 B 的命题，或者没有 A 是 B 和一些 B 不是 A 的命题，表示为下图：

> ![two overlapping circles labeled 'A' and 'B'; first, inside the nonoverlapping section of circle A is an 'o' connected by a line to an 'o' inside the overlap; second, also in the nonoverlapping section of circle A is another 'o' connected by a line to an 'x' in the nonoverlapping section of circle 'B'; third in the overlapping section of the two circles are an 'x and an 'o' connected by a line; fourth an 'x' in the overlapping section connected by a line to an 'x' in the nonoverlapping section of circle B](https://plato.stanford.edu/entries/diagrams/fig4b.png)

阅读此图表需要不仅仅是读取圆圈之间的视觉包含（如欧拉图中）或阴影（如维恩图中），还需要额外的约定来读取符号'o'，'x'和线条的组合。皮尔斯的新约定增加了单个图表的表现力，但其约定的任意性和更加混乱的表现形式（例如上述图表）牺牲了欧拉原始系统所享有的视觉清晰度。在这一点上，皮尔斯自己承认“表达中存在着重要的复杂性”（皮尔斯 1933: 4.365）。因此，当皮尔斯的修订完成时，大部分关于可视化的欧拉原始想法都丢失了，除了一个几何对象（圆圈）被用来表示（可能为空的）集合。

皮尔斯对图表研究的另一个重要贡献始于以下评论：

> “规则”在这里的意义类似于我们谈论代数的“规则”；也就是说，在严格定义的条件下的一种许可。（Peirce 1933: 4.361）

皮尔斯可能是第一个讨论非句子表示系统中转换规则的人。就像代数规则告诉我们哪些符号转换是允许的，哪些是不允许的一样，图表操作的规则也应该如此。皮尔斯的六条规则中有一些需要更多的澄清，结果证明是不完整的——这是皮尔斯自己预料到的问题。然而，更重要的是，皮尔斯没有任何理论工具——即清晰区分语法和语义——来说服读者每条规则是正确的，或者确定是否需要更多规则。也就是说，他的重要直觉（即图表可能有转换规则）仍然需要证明。

### 图表作为形式系统

辛（1994）在两个方向上继续了皮尔斯的工作。一个是改进皮尔斯的文氏图版本，另一个是证明这一修订系统的完备性和完备性。

辛氏的工作改变了皮尔斯对文氏图的修改，以实现更高的表达能力，而不会严重损失视觉清晰度。这一修订分为两个阶段：(i) 文氏-I：保留文氏的阴影（表示空集），皮尔斯的“x”（表示存在性导入）和皮尔斯在“x”之间的连接线（表示分离信息）。(ii) 文氏-II：这个系统被证明在逻辑上等同于一元谓词逻辑，与文氏-I 相同，只是在图表之间引入了新的连接线来显示分离信息。

回到欧拉的一个例子，我们将清楚地看到这些不同版本之间的对比

> 抽象的实体论是一种哲学观点，认为抽象对象是真实存在的。根据这种观点，数学对象、逻辑对象和道德价值等抽象概念不仅仅是人类思维的产物，而是独立于我们的思维而存在的客观实体。这种观点挑战了传统的实在论观点，后者认为只有具体的物质实体才是真实存在的。抽象的实体论提出，抽象对象具有独立的存在形式，与具体的物质实体不同，它们存在于一个超越感知和经验的领域。这种观点引发了关于抽象对象本质、它们如何与我们的认知互动以及它们的存在方式的深刻讨论。

欧拉承认不能绘制单个欧拉图来表示前提，但必须绘制三种可能的情况。文恩的系统对存在性陈述保持沉默。现在，皮尔斯和辛的系统将这两个前提表示为单一图表如下：

> ![Two diagrams both consisting of three overlapping circles labeled 'A', 'B', and 'C' The first diagram, titled 'Peirce', has in the overlap of all three circles an 'x' connected to an 'x' in the overlap of only circles A and C; it also has in the overlap of all three circles an 'o' and also an 'o' in the overlap of only circles A and B The second diagram, titled 'Shin', has in the overlap of all three circles an 'x' connected to an 'x' in the overlap of only circles A and C; the overlap of A and B is shaded](https://plato.stanford.edu/entries/diagrams/example3b.png)

在 Shin 的图表中，Venn 的空集阴影惯例，与 Peirce 的“o”相反，更自然地引导读者得出“一些 C 不是 B”的推论，而不是在 Peirce 的图表中。

然而，Venn-I 无法表达普遍陈述之间或普遍陈述与存在陈述之间的分离信息。保留 Venn-I 的表达能力，Venn-II 允许图表通过一条线连接。皮尔斯上面那个看起来令人困惑的图表等同于以下的 Venn-II 图表：

> ![Two rectangles connected by a line each containing two overlapping circles; in the first rectangle, the overlap of the two circles contains an 'x' and the nonoverlap section of the first circle is shaded; in the second rectangle the overlap section of the two circles is shaded and an 'x' is in the nonoverlap section of the second circle](https://plato.stanford.edu/entries/diagrams/example3c.png)

此外，Shin（1994）在这次修订中将这两个系统分别呈现为标准的形式表示系统，具有各自的语法和语义。 语法告诉我们哪些图表是可接受的，即哪些是良好形式的，以及在每个系统中哪些操作是允许的。 语义定义了图表之间的逻辑推论。 使用这些工具，证明了这些系统在某种程度上是完备和一致的，就像某些符号逻辑一样。

这种方法对一些关于表示系统的假设提出了根本性挑战。自现代逻辑的发展以来，重要概念，例如语法、语义、推理、逻辑结论、有效性和完备性，仅应用于命题表示系统。然而，这些概念都不是这些传统符号逻辑的固有属性。对于任何表示系统，无论是命题还是图解，我们都可以讨论两个层次，即语法层和语义层。推理规则告诉我们如何将给定的单元（符号或图解）转换为另一个单元。逻辑结论的定义也不受任何特定形式的表示系统限制。对于完备性和完备性证明也是如此。当一个系统被证明是完备的时，我们应该能够在证明中采用它。事实上，目前许多研究探讨了在自动定理证明中使用图解的可能性（参见 Barker-Plummer & Bailin 1997；以及 Jamnik 等人 1999）。

### 欧拉圆圈再探

从欧拉圆到辛氏系统的渐进变化共享一个共同主题：增加系统的表达力和逻辑能力，使其健全、完备，并且在逻辑上等同于一元谓词逻辑。从欧拉到文图示的主要修订引入了主要图表，使我们能够表示关系集合之间的部分知识。从文图示到皮尔斯图表的扩展是为了更有效地表示存在性和分离性信息。

既然维恩和皮尔斯采用了相同的解决方案来实现这些改进：维恩通过引入新的句法对象，即阴影，皮尔斯通过引入“x”、“o”和线条。然而，从负面来看，这些修改后的系统在视觉清晰度上存在缺失，如上所示，主要是因为引入了更多的任意约定。从皮尔斯到辛图表的修改集中在恢复视觉清晰度，但不损失表现力。

Hammer 和 Shin 走了与这些修订不同的道路：重新引入 Euler 关于圆和集合之间同态关系的概念——圆之间的包含关系代表集合之间的子集关系，区域的不重叠代表不相交关系——同时，默认采用 Venn 的基本图表。另一方面，这个修订后的 Euler 系统并不是一个自给自足的推理工具，因为它无法表示存在性陈述。有关这一修订系统的更多细节，请参考(Hammer & Shin 1998)。

这个案例研究为图解推理的进一步研究提出了一个有趣的问题。在欧拉图的不同发展过程中，增强其表达能力和提高其视觉清晰度似乎是相辅相成的。根据不同目的，我们需要优先考虑其中之一。Hammer 和 Shin 的替代系统为其他高效的非句子表征系统的发展提供了一个简单的模型，这是计算机科学和认知科学中越来越受关注的话题。

## 图表的空间属性的后果

尽管通常可以赋予图表与公式相同的逻辑地位（如上所述），但图表与传统的线性证明演算之间仍然存在重要的差异（这可能对系统的正确性产生影响）。关于图表的一个重要观点（参见罗素，1923 年）是，图表中对象之间的空间关系可以用来表示另一个领域中对象之间的关系。然而，顺序语言（例如符号逻辑、自然语言）仅使用串联关系来表示对象之间的关系。在图表的情况下，空间关系的独特表现使用是直接且直观的，正如上文对欧拉图表的发展所示，但也存在其危险性——我们将在下文讨论。空间约束作为图表系统的特殊特征，可以预期将是它们的优势和劣势的重要来源。关于人类信息视觉处理能力和定性空间推理技能的心理考虑，也对使用图表进行推理的有效性产生影响，但我们在此不进行调查。

图表的一个特殊特征是，它们遵守某些“规范”或“固有”约束，因为它们使用平面表面作为表征的媒介。这个想法是，句子语言是基于顺序性质的声学信号，因此必须具有复杂的句法结构，以便表达某些关系 - 而图表，作为二维的，能够展示一些关系，而无需复杂的句法干预（Stenning & Lemon 2001）。图表利用了这种可能性 - 利用空间关系来代表其他关系。问题是；空间关系和对象能够多好地代表其他（可能更抽象）的对象和关系？

逻辑推理与图表经常是基于它们描绘了情况的所有可能模型，直到图表的拓扑等价性（当然，这取决于使用的特定图表系统）。单个图表通常是对一类情况的抽象，一旦构建了合适的图表，推理就可以直接从表示中读取，无需进一步操作。在某些图表系统中（例如，欧拉圆圈），推理是通过正确构建图表并从中获取信息来进行的。在这些情况下，使用符号逻辑中的推理规则的复杂性被正确绘制特定图表的问题所取代。例如，欧拉圆圈图表试图使用平面区域之间的拓扑关系来捕捉集合之间的关系，以便描绘某个集合论语句集合可能为真的所有可能方式。这有两个重要后果：（1）如果无法绘制某个特定图表，则所描述的情况必须是不可能的（称为“自洽性”），（2）如果必须绘制某些图表对象之间的特定关系，则相应的关系可以被推断为逻辑有效。（请参见第 2 节中的众多示例。）这种现象通常被称为“免费搭车”（Barwise & Shimojima 1995）。因此，这种图表推理风格取决于图表的特定表现用途——它们代表模型类别。如果某个模型类别无法由图表系统表示，那么这些情况将不会被考虑在使用该系统进行推理中，可能会得出错误的推理。这一事实使得图表系统的表现充分性，受到其空间特性的限制，至关重要，我们现在将探讨这一点。

### 图表 3.1 图解表达和推理的限制

平面中空间关系的表征性使用限制了图表表示，因此在某些重要方面限制了使用图表进行推理。特别是，图表对象和关系的拓扑和几何（让我们将它们合并为“空间”）属性限制了图表系统的表达能力。例如，在图论中已知一些简单结构无法在平面上绘制。例如，图 K5 是由 5 个节点组成的图，每个节点通过一条弧连接到其他节点。这个图是非平面的，意味着至少有两条弧会相交才能绘制出来。这正是限制可能图表表达能力的图表系统的约束。现在，由于图表推理可以通过列举情况的所有可能模型来进行，这种表征上的不足（一种不完整性）会使许多图表系统在用于逻辑推理时出现错误（例如，参见 Englebretsen 1992 在 Lemon＆Pratt 1998 中的批评）。

也许最简单的例子是由 Lemon 和 Pratt[6]（见例如，1997 年）引起的。考虑到欧拉圆圈——平面的凸区域代表集合，区域的重叠代表相应集合的非空交集。凸拓扑学中的一个结果，即赫利定理（对于二维情况），指出如果每三个四个凸区域都有非空交集，则所有四个区域必定有非空交集。

了解这一点的后果，考虑以下问题：

> 使用欧拉圆圈，表示以下前提：
>
> * *A* ∩ *B* ∩ *C* ≠ ∅
> * *B* ∩ *C* ∩ *D* ≠ ∅
> * *C* ∩ *D* ∩ *A* ≠ ∅

请注意，在集合论方面，这些前提只能得出微不足道的结论。然而，前提的欧拉图，比如图 5，导致了一个错误的结论，即 A ∩ B ∩ C ∩ D ≠ ∅（由于图表中心的四重重叠区域）：

> ![Four overlapping circles labeled 'A', 'B', 'C', and 'D'](https://plato.stanford.edu/entries/diagrams/fig5.png)
> **图表 5: 一幅展示赫利定理的欧拉圆圈表示**

换句话说，使用欧拉圆圈的用户被迫[7]表示集合之间的关系，这种关系在逻辑上并非必要。这意味着系统无法表示逻辑上可能的情况，并且如果用户依赖该系统进行推理，可能会得出错误的推论。更一般地，这种类型的结果可以针对许多不同类型的图表系统生成，取决于它们在表示中使用的特定空间关系和对象——这是一个正在进行的研究计划。

使用非凸区域（例如，“blob”而不是圆圈）会导致类似的问题，只是涉及非平面图而不是 Helly's 定理。类似的结果涉及到 Englebretsen 1992 年的三段论线性图，其中线用于表示集合，点表示个体，点线交点表示集合成员，线交点表示集合交集。再次，平面性约束限制了系统的表达能力，并导致不正确的推论。

下次再提供翻译

> 表征是世界上的对象，因此它们遵守一定的结构约束，这些约束规定了它们可能形成的方式。不同表征模式的推理潜力差异很大程度上归因于表征的结构约束与表征目标的约束相匹配的不同方式（Shimojima 1996a, 1999）。

### 图表的有效性

正如上文所讨论的，图表引起了很大的兴趣，因为有人声称它们在某些任务类型上比传统的逻辑表达方式更“有效”。当然，例如，地图比对景观的文字描述更有助于导航。然而，虽然通过使用图表可以获得心理上的优势，但它们（如欧拉圆圈的情况）通常无法有效地表示抽象对象和关系。曾经是一种纯粹直觉的概念，关于图表系统“效力”的非心理学主张可以通过语言的标准形式属性（Lemon 等人，1999 年）来检验。特别是，许多图表系统是自洽的、不正确的和不完整的，而且使用图表进行推理的复杂性是 NP 难的。相比之下，大多数命题逻辑虽然能够表达不一致，但是是完备和正确的。

另一方面，无法代表矛盾可能为我们提供有关图式表征性质的有趣见解。如果语言的一个中心目标是代表世界或一种状态，那么代表矛盾或重言就受到质疑。矛盾和重言都不是世界的一部分。我们如何画出“下雨和不下雨”的矛盾的图片，或者拍摄这样的照片呢？那么，如何画出“要么下雨要么不下雨”的二选一信息的图片呢？现在，我们似乎更接近维特根斯坦经典的语言图片理论（维特根斯坦，1921 年）。

## 几何中的图表系统

数学家们广泛使用图表，并持续使用。在教科书和黑板上传达数学概念和证明的方式并非统一为句子。图形和图片很常见。然而，与逻辑的主流概念认为逻辑本质上是句子的概念一致，它们通常不被认为在严格的数学推理中起作用。人们认为它们的使用仅限于增进对证明的理解。通常认为它们并不构成证明本身的任何部分。

态度在《Elements》中对欧几里得方法论的标准评估中得到了很好的阐释。在欧几里得在文本中发展的基础几何学中，没有哪个数学学科比图表更突出。该主题的证明在某种意义上似乎与出现在其中的三角形和圆形的图表有关。这在《Elements》的几何证明中尤为明显。对于欧几里得来说，图表不仅仅是用来说明的。他的一些推理步骤依赖于一个适当构造的图表。根据标准故事，这些步骤表明了欧几里得证明中的漏洞。它们展示了欧几里得如何没有完全实施以公理化方式发展几何学的项目。

肯·曼德斯（Ken Manders）在他的开创性作品《欧几里得图表》（2008 [1995]）中试图揭示这个故事。他对欧几里得的图解证明方法的分析揭示了欧几里得以一种受控、系统化的方式使用图表。因此，这对《几何原本》的严谨性常见的负面评价提出了质疑。此外，曼德斯分析的具体内容表明，文本的证明可以被理解为遵循一种形式化的图解逻辑。随后，形式化图解系统的发展证实了这一点，旨在描述这种逻辑。首个系统是 FG（见 Miller 2007），随后是 Eu 系统（Mumma 2010）。

本节致力于阐释曼德斯（Manders）的分析以及由此产生的形式系统。在简要概述了几个世纪以来对欧几里得图表的看法之后，介绍了曼德斯对它们在几何证明中的作用的看法。随后描述了系统 FG 和 Eu 如何用形式术语呈现这一观点，并表征了欧几里得图表逻辑。

### 公元前 4 世纪至公元 20 世纪对欧几里得图表的看法

《元素》的初等几何被认为是从古希腊时代直到 19 世纪数学的基础。因此，关心数学本质的哲学家们发现自己不得不评论文本中的图解证明。一个核心问题，如果不是最核心的问题，就是普遍性问题。欧几里得证明中出现的图表提供了证明所涉及的几何配置类型的单个实例。然而，在图表中看到的性质被认为适用于给定类型的所有配置。是什么使得这种从特殊到一般的跳跃成立呢？

作为一个例证，考虑《几何原本》第一卷命题 16 的证明。

 主张是：

> 在任何三角形中，如果其中一条边被延长，那么外角大于内角和对角之一。

 欧几里得的证明是：

> ![A triangle ABC with the segment BC extending to point D and a line BF that intersects segment AC](https://plato.stanford.edu/entries/diagrams/figure1.png)
>
> * 让 ABC 为一个三角形，并让其一边 BC 延长至 D;
> * 我说角 ACD 大于内角和对角 BAC。
> * 让 AC 在 E 点被平分[I, 10]，并且让 BE 延长至 F 点
> * 让 EF 等于 BE [I,3]，然后连接 FC。
> * 那么，由于 AE 等于 EC，BE 等于 EF，因此，边 AE、EB 分别等于边 CE、EF；角 AEB 等于角 FEC【I, 15】。
> * 因此，底边 AB 等于底边 FC，三角形 ABE 等于三角形 CFE [I,4]；因此角 BAE 等于角 ECF（也等于角 ACF）
> * 但是角 ACD 大于角 ACF;
> * 因此，角 ACD 大于 BAE。

证明似乎是指与证明一起给出的图表的部分。然而，证明并不意味着仅仅是关于图表中的三角形，而是关于所有三角形的某种东西。因此，该图表用某种方式代表所有三角形。

亚里士多德在《后分析学》的 A 书第 10 章中谈到了图表作为表征的作用

> 几何学家不是根据他画出的特定线条得出结论，而是根据图形所展示的内容。 (The translation is by T. Heath, found in Euclid 1956: vol. I, p.119)

亚里士多德在这段文字中并没有直接回答几何学家如何使用图表来推理它们所说明的问题。几个世纪后，普罗克劳斯在他对《几何原本》的评论中提出了这个问题。普罗克劳斯声称，从特定实例到普遍结论的推理是合理的，因为几何学家 亚里士多德在这段文字中并没有直接回答几何学家如何使用图表来推理它们所说明的问题。几个世纪后，普罗克劳斯在他对《几何原本》的评论中提出了这个问题。普罗克劳斯声称，从特定实例到普遍结论的推理是合理的，因为几何学家

> …使用图表中列出的对象，不是作为这些特定图形，而是作为类似其他相同类型的图形。我所看到的角度被平分，并不是因为具有某种大小，而是因为是直线的，没有其他更多的东西…假设给定的角度是直角…如果我不利用它的直角性，只考虑它的直线特性，这个命题将同样适用于所有具有直线边的角度。（《欧几里德几何原本第一卷评注》，Morrow 1970: 207))

几何学中图表的位置一直是一个问题，直到近代早期。17 和 18 世纪的主要哲学人物对此提出了立场。预见到主流现代观点，莱布尼茨断言：

> …并不是图表为几何学家提供证明，尽管表达的风格可能让你这样认为。证明的力量独立于所绘制的图表，图表仅用于便于理解我们的意思，并引起注意；是普遍命题，即定义、公设和已经证明的定理构成了推理的基础，即使图表不存在，也能支撑推理。（1704 年《新论》：403）

在他的《人类知识原理》（1710 年，第 16 节）中，伯克利重申了 13 个世纪后普罗克劳斯对普遍性问题的看法。尽管在进行关于三角形的演示时，人们总是将一个特定的三角形“视为”存在，但在演示中并没有“最小的提及”关于特定三角形的具体细节。因此，根据伯克利的观点，这个演示证明了关于三角形的一般命题。

康德（Kant）在现代时期对几何图表的最发达、最复杂和最困难的阐述中发现了一些深刻的认识论意义。康德认为几何学家使用特定图表来推理几何概念具有深刻的认识论意义。通过这种方式推理，几何学家

> 考虑概念在具体上，虽然非经验地，而仅仅作为一种先验展示的，即构建的，并且从构建的概念的一般条件中所产生的东西也必须通常是构建概念的对象。(1781,《纯粹理性批判》，A716/B744.)

有关这些段落揭示了关于图表在康德几何哲学中的定位的对立观点，请参阅 Shabel 2003 和 Friedman 2012。

在 19 世纪，几何学和整个数学经历了一场革命。比《几何原本》中发现的概念更为抽象和普遍的概念（例如，非欧几里德几何、集合）出现了。不仅对于欧几里德图解方法的本质提出的问题不再紧迫，而且这种方法被理解为在数学上有缺陷。后一种观点在莫里茨·帕什（Moritz Pasch）的开创性工作中得到了最精确的表达，他在《帕什（1882）》中首次提供了基础几何的现代公理化。在其中，帕什展示了如何在不参考图表甚至几何概念图表实例化的情况下发展这一主题。指导这项工作的方法论规范在以下经常被引用的段落中得到了很好的表达：

> 事实上，如果几何学真正是演绎的，那么演绎过程在所有方面都必须独立于几何概念的感知，就像它必须独立于图形一样；只有在命题（或定义）中使用的几何概念之间设置的关系应该被考虑在内。（Pasch 1882: 98; emphasis in original. The translation here is from Schlimm 2010）

规范已经在数学和数学讨论中扎根。在 Manders 2008 [1995]中，Manders 反对它在后者中的扎根。在他对古代几何学的描述中，证明中需要查阅图表并不表示演绎上的缺失。相反，图表和文本共同构成了严谨和演绎的数学证明。

### 曼德斯的确切/共确切区分与一般性问题

#### 确切/共同确切区分

Manders 在 Manders 2008 [1995] 中区分了古代几何学中文本和图表之间的分工，区分了几何图表的确切和共确切属性。这种区分的基础是变化的概念。图表实现的共确切条件是“那些不受指定图表的每一种连续变化范围的影响的条件。” 相反，确切条件一旦图表受到最小变化的影响就会受到影响。粗略地说，图表的共确切属性包括其部分定义平面区域的方式，以及这些区域之间的包含关系。一个显著的确切关系是图表中两个量的相等关系。例如，在命题 16 的图表中，只需稍微改变 CF 的位置就可以使角 BAE 和 ECF 不相等。

曼德斯的关键观察是，欧几里得的图表仅通过它们的共同属性对证明起作用。欧几里得从不从图表中推断出确切的属性，除非它直接源自共同属性。在文本中，未展示为包含关系的量之间的关系要么从一开始就被假定，要么通过一系列推理来证明。这可以很容易地通过命题 16 的证明来确认。依赖于图表的推理是证明的倒数第二个推理。具体而言，推理是 ACD 角大于 ACF 角。这一关键点是基于从图表中看到 ACD 角包含 ACF 角。在证明中还断言了许多其他关系。尽管图表实例化了它们，但它们在文本中得到了明确的证明。而且，通过这些关系，相关物体是空间上分离的量。

很容易推测为什么欧几里得会以这种方式限制自己。只有在图表能够有效地作为证明符号的能力中，它们才能代表共同的属性和关系。图表的确切属性太精细，难以轻易复制并支持明确的判断。正如曼德斯所说。

> 实践具有资源来限制对图表中（明确的）共同属性的争议风险；但对于确切的属性，它缺乏这样的资源，因此无法允许它们，否则将导致无法解决的冲突判断的混乱。（Manders 2008 [1995]：91–92）

曼德斯的洞察自然地引出了这样一个想法，即可以以类似于 1994 年 Shin 对文氏图进行形式化的方式来形式化欧几里德的论证。欧几里德图所携带的共同信息是离散的。当查阅图表以获取这些信息时，重要的是图表中的线条和圆圈如何将有界平面区域划分为有限的子区域。这为将欧几里德的图表概念化为欧几里德证明方法的语法打开了大门。

#### 欧几里德构造中的普遍性问题

在证明的形式系统中实现这一概念，就像 Shin 1994 中所述，需要指定图表的语法和语义。在语法方面，这意味着精确定义欧几里得的图表作为形式对象，并制定规则，使图表作为形式对象出现在欧几里得命题的推导中。在语义方面，这意味着需要指定可推导表达式如何在几何上进行解释，换句话说，它们如何被理解为代表欧几里得的命题。

欧几里得的图表的语义情况与文氏的图表不同。文氏图表用于证明逻辑结果。用它们进行的推理是主题中立的。而欧几里得的图表则用于证明几何结果。用它们进行的推理是特定于主题的。特别是，尽管平面欧几里得几何的对象是抽象的（例如，几何线是无宽度的），它们仍然是空间的。因此，围绕图表的空间性和表征范围的问题在欧几里得的图表上并不像在欧拉图表上那样出现。实际上，在几何学的情况下，图表的空间性对它们有利。对几何配置可能性的空间约束也适用于空间欧几里得图表。

然而，正如自古以来在对《欧几里得几何学》的哲学评论中所认识到的那样，欧几里得图表存在代表范围的问题需要解决。将单个几何图表的属性视为证明范围内所有配置的代表的理由是什么？单个图表如何证明一个普遍结果？曼德斯的确切/共确切区分为部分答案提供了基础。图表的共确切属性可以被证明范围内所有几何配置共享，因此在这种情况下，从图表中读取共确切属性是合理的。例如，在关于三角形的证明中，证明范围内的配置之间的变化是确切属性的变化，例如，三角形角的度量，它们边长之间的比例。它们都共享相同的共确切属性，即它们都由三个有界的线性区域组成，这些区域一起定义了一个区域。

这并不是一个完整的答案，因为欧几里得的证明通常涉及对初始配置类型的构造。例如，在命题 16 的证明中，指定了对一个边延长的三角形的构造。在这种情况下，图表可能足以表示初始配置的共同属性。但是，将证明的构造应用于图表的结果不能假定代表所有由构造产生的配置的共同属性。人们无需考虑复杂的几何情况就能看到这一点。例如，假设证明的初始配置类型是三角形。然后，图表

> ![a triangle an acute triangle](https://plato.stanford.edu/entries/diagrams/figure2.png)

用来表示这种类型的共同属性。进一步假设证明构造的第一步是从三角形的顶点向包含对顶边的直线垂直投影。然后，在图表上执行此步骤的结果

> ![the same triangle as the previous image with a perpendicular dropped from one vertex](https://plato.stanford.edu/entries/diagrams/figure3.png)

代表性消失。图表中垂线落在三角形内部是其共同特征。但是，存在具有与初始图表不同特性的三角形，在应用构造步骤后，垂线落在三角形外部。例如，对于三角形

> ![An obtuse triangle](https://plato.stanford.edu/entries/diagrams/figure4.png)

应用构建步骤的结果

> ![An obtuse triange with a perpendicular dropping from one of the acute angles to the extension of the opposite side of the triangle](https://plato.stanford.edu/entries/diagrams/figure5.png)

### 形式系统 FG 和 Eu

因此，在代表性图表上进行欧几里得构造可能导致一个不具代表性的图表。形式化欧几里得图解证明的一个核心任务是解决这个问题——即，提供一种规则来区分构造图表中的一般共同特征和非一般特征。系统 FG 和 Eu 对这一任务采取了两种不同的方法。

使用 FG 方法，必须用图表表示可能由构造产生的每种情况。然后，构造的一般共精确关系是在每种情况中都出现的关系。FG 要求产生每种情况，如果它没有提供一个产生它们所有的方法，那当然就没有什么意义。FG 提供的方法取决于系统图表中的线条和圆圈是以纯拓扑术语定义的这一事实。它们的灵活性使得可以制定并在计算机程序中实施一种生成情况的通用方法。【9】

欧几里得图表的线条和圆圈并不同样灵活。因此，它无法像 FG 那样通过案例分析来解决一般性问题。其方法的核心思想是允许图表从一开始就包含部分信息。在欧几里得推导中，由证明构造产生的图表具有最初内容，其中包含了证明初始图表的所有定性关系。构造添加的对象所涉及的定性关系不能立即从图表中读取。可以从图表中读取的那些关系必须根据系统规则推导出来。[10]

FG 和 Eu 两种形式化欧几里得构造方法之间的差异可以理解为对图表在数学中角色不同一般概念的体现。FG 体现了一种观念，即图表具体实现了各种数学可能性。它们通过直接访问这些可能性来支持数学推理。相比之下，Eu 体现了一种观念，即图表用单一符号代表复杂数学情境的各个组成部分。它们通过让数学推理者在一个地方考虑所有这些组成部分，并专注于与证明相关的部分来支持数学推理。

## 图表与认知，应用

尽管上述提到了一些图解系统的形式限制，但目前在各种不同的背景下使用了许多不同的系统；逻辑教学、自动推理、指定计算机程序、推理物理情况、计算机程序的图形用户界面等等。总的来说，目前尚不清楚这些图解系统在多大程度上是有效的（按照上述意义）。我们现在简要调查其他图解系统及其用途，以及围绕图解推理地位的争论引发的更多哲学问题。

### 其他一些图表系统

许多数学家和哲学家提出了图解系统，通常出于教学动机。一些系统，如刘易斯·卡罗尔在《逻辑游戏》（1896）中的系统，是对欧拉和文氏的建议的变体。另一些系统，如弗雷格（1879），使用线条而不是平面区域。（有关弗雷格符号的描述，请参阅戈特洛布·弗雷格条目中关于复杂陈述和普遍性的部分。另请参阅恩格尔布雷森 1992 年。）卡罗尔的系统取代了文氏的系统，因为集合的补集被明确表示为图表的区域，而不是留在作为圆圈出现的背景区域中。这意味着卡罗尔的系统能够推断关于属性的补集之间的关系，但代价是将一些属性表示为不相交（即非连接）的区域。这种转变与逻辑中从主谓论证到函数-参数表示的转变密切相符（Stenning 1999）。

皮尔斯是现代量化逻辑的创始人，他还发明了一种图形系统，称为存在图，它在逻辑上等同于谓词逻辑。随着唐·罗伯特对存在图的开创性工作以及约翰·索瓦对皮尔斯图的创造性应用，最近一群图表研究者在更广泛的理论背景下提供了更多多样化的存在图方法（Shin 2003）。

AI 研究人员之一，其主要关注点之一是表示系统的启发式能力，而不仅仅是其表现力，几十年来一直在讨论不同形式的表示（Sloman 1971, 1985, 1995）。因此，他们欢迎关于视觉推理独特作用的讨论，并最近在人工智能会议上举办了关于图解推理的跨学科研讨会。同时，意识到人类根据面临的问题种类采用不同的表示形式，一些 AI 研究人员和设计理论家已经实践了领域特定方法，引入了针对问题量身定制的表示形式。

哈雷尔（1988）发明了 higraphs 来表示计算机科学中的系统规范。这个想法已经在工业应用中得到了应用（例如，UML，在 Booch 等人 1998 年）。Barker-Plummer＆Bailin（1997）提出了一个案例研究，开发了可以执行类似于人类在证明某些数学定理时执行的类比推理的计算机。最近，爱丁堡的 Alan Bundy 的数学推理小组的 Mateja Jamnik 提出了一个有趣的结果（Jamnik 2001）。Jamnik 展示了一个半自动形式证明系统如何执行一些人类认为很自然的感知推理。例如，前 n 个自然奇数的和是 n 的平方这一事实可以通过将一个 n×n 的网格分解成“ells”来轻松看出（Jamnik 等人 1999）。

布赖顿大学的学者一直在进行有趣的项目，既在发展图解系统方面，又在将视觉工具应用于软件开发方面，详见其他互联网资源部分的链接。

科学家们，比如化学家和物理学家，也使用图表来进行某些计算。例如，费曼图用于在亚原子物理中进行计算。最近，为量子理论开发了形式化图解推理（Coecke & Kissinger 2017）。在结论理论中（在物理学中有应用，Kauffman 1991），三个 Reidemeister Moves 是构成证明结等价的完整演算的图解操作。毫不奇怪，结图已经引起研究人员的兴趣（De Toffoli & Giardino 2014）。图表和图解推理在范畴论的抽象数学中的关键作用也得到了研究（Halimi 2012; De Toffoli 2017）。

### 图表作为心智表征

我们的心智表征是否具有类似图表或图片的实体作为组成部分？这个问题在哲学和心理学中都有悠久的历史，尽管它们是独立的。然而，最近一些哲学家参与了这场“意象辩论”，这是心理学中最古老的争议之一，一些认知心理学家发现哲学中的某些认识论理论对支持他们对这个问题的观点很有帮助。

心理表征的本质一直是哲学中的一个永恒话题，我们可以很容易地追溯到古代关于形象和心理表征的哲学讨论。Hobbes、Locke、Berkeley 和 Hume 的著作在很大程度上涉及心理话语、词语的含义、心理形象、特定观念、抽象观念、印象等等。笛卡尔著名的想象和构想之间的区别引发了关于视觉形象在心理表征中独特作用的讨论。20 世纪认知科学的发展自然地使一些哲学家和心理学家更加接近，我们发现一些作品很容易属于这两个学科（Block 1983; Dennett 1981; Fodor 1981）。

基于内省的意象是心理学早期发展的主要焦点，直到行为主义方法在学科中占主导地位。在行为主义时代，任何与心理检查有关的事物，包括意象，在任何严肃的研究议程中都被排除在外。最终，当心理意象的话题在 1960 年代重新出现在心理学中时，研究人员对心理意象采取了比以往更谦卑的议程：并非所有的心理表征都涉及意象，意象只是在头脑中操纵信息的众多方式之一。此外，由于行为主义的影响，人们承认内省并不足以探索意象，而关于心理意象的主张需要通过实验来确认，以表明我们成功地将心理事件外化。也就是说，如果某种心理内省告诉我们的是真实的，那么这种心理状态将会有可观察的外部后果。

因此，当代认知科学家之间的意象辩论是关于声称类似图片的形象存在为心理表征，以及我们如何解释某些实验的问题。[14]

Kosslyn（1980, 1994）和其他图像主义者（Shepard & Metzler 1971）提出实验数据支持他们的观点，即我们的一些心理形象在某些重要方面更像图片而不是线性形式的语言（例如自然语言或人工符号语言），尽管并非所有视觉心理形象和图片完全相同。相比之下，Pylyshyn（1981）和其他描述主义者（Dennett 1981）对心理形象的类似图片状态提出质疑，并认为心理形象是由结构化描述构成的。对他们来说，心理形象代表的是语言的方式而不是图片，因此不存在类似图片的视觉心理形象。

辩论的双方有时会将哲学理论作为支持因素。例如，在意象辩论中，画像派发现哲学中的现代感官数据理论与他们的观点非常接近。同样地，感官数据理论的批评者认为，对心理图像的错误画像观主要源自我们对普通语言的混淆，并声称心理图像是外在现象。

### 图表的认知作用

不过，一些研究者并未深入参与图像辩论，而是专注于图表或图片在我们认知活动中扮演的独特角色，与传统的句子形式有所不同。基于这样的猜测，即人类在推理具体或抽象情境时采用图解或空间内部心理表征（参见 Howell 1976; Sober 1976），一些认知科学家专注于图像或图表在我们各种认知活动中的功能，例如记忆、想象、感知、导航、推理、解决问题等。在这里，“视觉信息”的独特性，无论是通过内部心理图像还是通过外部绘制的图表获得，已成为研究的主要课题。尽管大多数研究假设存在心理图像（即，他们接受图像主义者的主张），严格来说，他们并不必须认同这些图像存在于我们认知中作为基本单元的观点。描述主义者无需放弃对图像功能的讨论，只需补充说明这些图像并非存储在我们记忆中的原始单元，而是由更像语言句子的结构化描述构成（参见 Pylyshyn 1981）。

对图表的独特作用的探索已经引导研究人员探索外部或内部表征的不同形式之间的差异，主要是图解和句子表征之间的差异。 认知科学已经产生了许多重要的结果。 从 Larkin 和 Simon 的经典案例研究（1987 年）开始，以说明表征系统之间信息和计算等价之间的差异，Lindsay 的工作确定了这种计算差异所在，他称之为“非演绎”方法。 正如上文简要指出的那样，这种推理过程被 Barwise 和 Shimojiima（1995 年）称为“免费搭车”，即一种推理，其中结论似乎可以从前提的表征中自动读取。 在 Gurr，Lee 和 Stenning（1998 年）以及 Stenning 和 Lemon（2001 年）中，解释了图解推理的独特性，这种独特性是以“直接性”解释的程度为基础的，并且认为这种属性是相对的，因此“有些搭车比其他搭车便宜”。 考虑到图表的作用，Wang 和 Lee（1993 年）提出了一个形式框架，作为正确视觉语言的指导。 在这一点上，我们非常接近多模态推理研究的应用方面——设计理论和人工智能研究——通过为这些学科提供计算支持以进行视觉推理。

与形象心理表征问题相关的是对各种图解系统的语义以及它们对语言本质的教导的审查（例如，Goodman 1968）。例如，Robert Cummins（1996）等人认为，对图解表征给予的关注太少，而专注于更类似于图解表征的“结构表征”概念可以帮助阐明表征本身的本质。我们认为上述提出的考虑至少为我们提供了一些实证把握，取决于使用的形象对象和关系，不正确推理的模式应该是可预测和可检测的。关于这一主题的一篇重要但鲜为人知的文章是 Malinas 1991。在这里，Malinas 探讨了关于图像表征和“图中的真实性”概念，通过类似性概念，考虑了有关图像表征的各种语义难题。他发展了 Peacocke 的“描绘的中心命题”（Peacocke 1987），在那里，图像对象的属性与视觉领域中它们的指称物之间的经验相似性引发了描绘关系。他继续为图片提供了一个“类似于理想语言的语义”的形式语义。

## 摘要

我们首先通过阐述图表在人类推理中的作用以及它们与语言研究和多模态信息处理的关系来激发了对图表的哲学兴趣。然后，我们通过考察从欧拉和文氏到皮尔斯的工作，再到辛和哈默最近的工作，解释了图表系统在表达能力和视觉清晰度之间的权衡。我们认为，图表系统可以被赋予与传统线性证明演算相同的逻辑地位。然后，我们通过研究图表系统中的空间约束以及它们如何影响正确性和表达能力来解释图表表示和推理的一些潜在陷阱。最后，我们对其他图表系统进行了调查，探讨了计算机科学和认知科学中对图表的兴趣，并介绍了在心灵哲学中的意象辩论。

<!--md-padding-ignore-begin-->
## Bibliography

### References

* Allwein, G. and J. Barwise (eds.), 1996, *Logical Reasoning with Diagrams*, Oxford: Oxford University Press.
* Avigad, J. with E. Dean and J. Mumma, 2009, “A formal system for Euclid’s Elements”, *Review of Symbolic Logic*, 2: 700–768.
* Barker-Plummer, D. and S. Bailin, 1997, “The Role of Diagrams in Mathematical Proofs”, *Machine GRAPHICS and VISION*, 6(1): 25–56. (Special Issue on Diagrammatic Representation and Reasoning).
* Barker-Plummer, D., D. Beaver, J. van Benthem, and P. Scotto di Luzio, 2002, *Words, Proofs, and Diagrams*, Stanford: CSLI Publications.
* Barwise, J., 1993, “Heterogeneous reasoning”, in G. Mineau, B. Moulin, and J. Sowa, (eds), *ICCS 1993: Conceptual Graphs for Knowledge Representation* (Lecture Notes in Artificial Intelligence: Volume 699), Berlin: Springer Verlag, pp. 64–74.
* Barwise, J. and J. Etchemendy, 1989, “Information, Infons, and Inference”, in Cooper, Mukai, and Perry, (eds), *Situation Theory and its Applications*, volume 1, Stanford: CSLI Publications.
* –––, 1991, “Visual Information and Valid Reasoning”, in Zimmerman and Cunningham, (eds), *Visualization in Teaching and Learning Mathematics*, pages 9–24. Washington: Mathematical Association of America.
* –––, 1993, *The Language of First-Order Logic*, Stanford: CSLI Publications.
* –––, 1994, *Hyperproof*, Stanford: CSLI Publications.
* –––, 1995, “Heterogeneous Logic”, in J. Glasgow, N. Hari Narayanan, and B. Chandrasekaran, (eds), *Diagrammatic Reasoning: Cognitive and Computational Perspectives*, pages 209–232. Cambridge, MA: AAAI Press/The MIT Press.
* Barwise, J. and A. Shimojima, 1995, “Surrogate Reasoning”, *Cognitive Studies: Bulletin of Japanese Cognitive Science Society*, 4(2): 7–27.
* Berkeley, G., 1710, *Principles of human knowledge*, in David Armstrong (ed.), *Berkeley’s Philosophical Writings*, London: Macmillian, 1965.
* Block, N., (ed.), 1981, *Imagery*, Cambridge, MA: MIT Press.
* –––, 1983, “Mental pictures and cognitive science”, *The Philosophical Review*, 92: 499–541
* Booch, G., J. Rumbaugh, and I. Jacobson, 1999, *The Unified Modeling Language Reference Manual*, Reading, Mass.: Addison-Wesley.
* Coecke, B. and Kissinger, A., 2017, *Picturing Quantum Processes. A First Course in Quantum Theory and Diagrammatic Reasoning*, Cambridge: Cambridge University Press.
* Carroll, L., 1896, *Symbolic Logic*, New York: Dover.
* Chandrasekaran, B., J. Glasgow, and N. Hari Narayanan, (eds.), 1995, *Diagrammatic Reasoning: Cognitive and Computational Perspectives*, Cambridge, MA: AAAI Press/The MIT Press.
* Cummins, R., 1996, *Representations, Targets, and Attitudes*, Cambridge, MA: MIT Press.
* De Toffoli, S., 2017, “Chasing The Diagram – The Use of Visualizations in Algebraic Reasoning”, *Review of Symbolic Logic*, 10 (1): 158–186.
* De Toffoli, S. and Giardino, V., 2014, “Forms and Roles of Diagrams in Knot Theory”, *Erkenntnis*, 79 (4): 829–842.
* Dennett, D., 1981, “The nature of images and the introspective trap”, in [Block 1981](https://plato.stanford.edu/entries/diagrams/#block81), pp. 87–107.
* Englebretsen, G., 1992, “Linear Diagrams for Syllogisms (with Relationals)”, *Notre Dame Journal of Formal Logic*, 33(1): 37–69.
* Euclid, *The Thirteen Books of the Elements* (second edition, Vols. I–III), New York, NY: Dover Publications, 1956. Translated with introduction and commentary by Sir Thomas L. Heath, from the text of Heiberg.
* Euler, L., 1768, *Lettres à une Princesse d’Allemagne*, St. Petersburg; l’Academie Imperiale des Sciences.
* Fodor, J., 1981, “Imagistic representation”, in [Block 1981](https://plato.stanford.edu/entries/diagrams/#block81), pp. 63–86.
* Frege, G., 1879, *Begriffsschrift: eine der arithmetischen nachgebildete Formelsprache des reinen Denkens*, Halle am See: Louis Nebert
* Friedman, M., 2012, “Kant on geometry and spatial intuition”, *Synthese,* 186: 231–255.
* Gardner, M., 1958, *Logic Machines and Diagrams*, Sussex: Harvester Press.
* Goodman, N., 1968, *Languages of Art: an approach to a theory of symbols*, London: Oxford University Press.
* Greaves, M., 2002, *The Philosophical Status of Diagrams*, Stanford: CSLI Publications.
* Grigni, M., D. Papadias, and C. Papadimitriou, 1995, “Topological Inference”, in *International Joint Conference on Artificial Intelligence (IJCAI ‘95)*, pages 901–907, Cambridge, MA: AAAI Press.
* Gurr, C., J. Lee, and K. Stenning, 1998, “Theories of diagrammatic reasoning: Distinguishing component problems”, *Minds and Machines*, 8: 533–557.
* Halimi, B., 2012, “Diagrams as Sketches”, *Synthese*, 186(1): 387–409.
* Hamami Y. and Mumma J., 2013, “A Prolegomena to a Cognitive Investigation of Euclidean Diagrammatic Reasoning”, *Journal of Language, Logic and Information*, 22 (4): 421–448.
* Hammer, E., 1995a, “Reasoning with Sentences and Diagrams”, *Notre Dame Journal of Formal Logic*, 35(1): 73–87.
* Hammer, E. and S. Shin, 1998, “Euler’s Visual Logic”, *History and Philosophy of Logic*, 19: 1–29.
* Harel, D., 1988, “On Visual Formalisms”, *Communications of the ACM*, 31(5): 514–530.
* Howell, R., 1976, “Ordinary Pictures, Mental Representations, and Logical Forms”, *Synthese*, 33: 149–174.
* Jamnik, M., 2001, *Mathematical Reasoning with Diagrams*, Stanford: CSLI Publications.
* Jamnik, M., A. Bundy, and I. Green, 1999, “On Automating Diagrammatic Proofs of Arithmentic Arguments”, *Journal of Logic, Language, and Information*, 8(3): 297–321.
* Kant, I., 1781, *Critique of Pure Reason*, translated and edited by P. Guyer and A. Wood, Cambridge: Cambridge University Press, 1998.
* Kauffman, L. 1991, *Knots and Physics*, Singapore: World Scientific.
* Kosslyn, S., 1980, *Image and Mind*, Cambridge, MA: Harvard University Press.
* –––, 1994, *Image and Brain: the resolution of the imagery debate*, Cambridge, MA: MIT Press.
* Lambert, J. H., 1764, *Neues Organon*, Berlin: Akademie Verlag, 1990.
* Larkin, J. and H. Simon, 1987, “Why a Diagram is (Sometimes) Worth 10,000 Words”, *Cognitive Science*, 11: 65–99.
* Leibniz, G., 1704, *New Essays Concerning Human Understanding*, LaSalle: Open Court Publishing, 1949.
* Lemon, O., 2002, “Comparing the Efficacy of Visual Languages”, in [Barker-Plummer et al. (eds.), 2002](https://plato.stanford.edu/entries/diagrams/#wpd), pp. 47–69.
* Lemon, O., M. de Rijke, and A. Shimojima, 1999, “Efficacy of Diagrammatic Reasoning” (Editorial), *Journal of Logic, Language, and Information*, 8(3): 265–271.
* Lemon, O. and I. Pratt, 1997, “Spatial Logic and the Complexity of Diagrammatic Reasoning,” *Machine Graphics and Vision*, 6(1): 89–108, 1997. (Special Issue on Diagrammatic Representation and Reasoning).
* –––, 1998, “On the insufficiency of linear diagrams for syllogisms”, *Notre Dame Journal of Formal Logic*, 39(4): 573–580.
* Malinas, G., 1991, “A Semantics for Pictures”, *Canadian Journal of Philosophy*, 21(3): 275–298.
* Manders, K., 2008 [1995], “The Euclidean diagram”, in *Philosophy of Mathematical Practice*, P. Mancosu (ed.), Oxford: Clarendon Press, 2008, pp. 112–183. (First circulated as a manuscript in 1995.)
* Miller, Nathaniel, 2007, *Euclid and His Twentieth Century Rivals: Diagrams in the Logic of Euclidean Geometry*, (CSLI Studies in the Theory and Applications of Diagrams), Stanford: CSLI Publications.
* –––, 2006, “Computational complexity of diagram satisfaction in Euclidean geometry”, *Journal of Complexity*, 22: 250–74.
* Morrow, G., 1970, *Proclus: A commentary on the first book of Euclid’s Elements*, Princeton: Princeton University Press, 1970.
* Mumma, J., 2010, “Proofs, Pictures and Euclid”, *Synthese*, 175(2): 255–287.
* Narayanan, N., 1993, “Taking issue/forum: The imagery debate revisited”, *Computational Intelligence*, 9(4): 303–435.
* Pasch, M., 1882, *Vorlesungen über neuere Geometrie*, Teubner: Leipzig.
* Peacocke, C., 1987, “Depiction”, *The Philosophical Review*, 96: 383–410
* Peirce, C.S., 1933, *Collected Papers*, Cambridge, MA: Harvard University Press.
* Pylyshyn, Z., 1981, “Imagery and Artificial Intelligence”, in N. Block, (ed.), *Readings in Philosophy of Psychology*, volume 2, pages 170 –196. Cambridge, MA: Harvard University Press.
* Roberts, D., 1973, *The Existential Graphs of Charles S. Peirce*, The Hague: Mouton.
* Russell, B., 1923, “Vagueness”, in J. Slater, (ed.), *Essays on Language, Mind, and Matter: 1919–26 (The Collected Papers of Bertrand Russell)*, pages 145–154. London: Unwin Hyman.
* Schlimm, D., 2010, “Pasch’s philosophy of mathematics”, *Review of Symbolic Logic*, 3(1): 93–118.
* Shabel, L., 2003, *Mathematics in Kant’s Critical Philosophy: Reflections on Mathematical Practice*, New York: Routledge.
* Shepard, R. and J. Metzler, 1971, “Mental rotation of three-dimensional objects”, *Science*, (171): 701–3.
* Shimojima, A., 1996a, *On the Efficacy of Representation*, Ph.D. thesis, Indiana University.
* –––, 1999, “Constraint-Preserving Representations”, in L. Moss, J. Ginzburg, and M. de Rijke, (eds), *Logic, Language and Computation: Volume 2*, CSLI Lecture Notes #96, pages 296–317. Stanford: CSLI Publications.
* Shin, S., 1994, *The Logical Status of Diagrams*, Cambridge: Cambridge University Press.
* –––, 2003, *The Iconic Logic of Peirce’s Graphs*, Cambridge: MIT Press (Bradford).
* –––, 2015, “The Mystery of Deduction and Diagrammatic Aspects of Representation”, *Review of Philosophy and Psychology: Pictorial and Spatial Representation*, 6: 49–67.
* Sloman, A., 1971, “Interaction between philosophy and AI: The role of intuition and non-logical reasoning in intelligence”, in *Proceedings Second International Joint Conference on Artificial Intelligence*, Los Altos, Calif.: Morgan Kaufmann.
* –––, 1985, “Why we need many knowledge representation formalisms”, in M. Bramer, (ed.), *Research and Development in Expert Systems*, pages 163–183.
* –––, 1995, “Musings on the roles of logical and nonlogical representations in intelligence”, in [Chandrasekaran et al., 1995](https://plato.stanford.edu/entries/diagrams/#dr95), pp. 7–32.
* Sober, E., 1976, “Mental Representations”, *Synthese*, 33: 101–148
* Sowa, J., 1984, *Conceptual Structures: Information Processing in Mind and Machine*, London: Addison Wesley.
* Stenning, K., 1999, “Review of *Das Spiel der Logik*, by Lewis Carrol”, *Journal of Symbolic Logic*, 64: 1368–1370.
* Stenning, K. and O. Lemon, 2001, “Aligning Logical and Psychological Perspectives on Diagrammatic Reasoning”, *Artificial Intelligence Review*, 15(1–2): 29–62. (Reprinted in *Thinking with Diagrams*, Kluwer, 2001.)
* Tye, M., 1991, *The Imagery Debate*, Cambridge, MA: MIT Press.
* Venn, J., 1881, *Symbolic Logic*, London: Macmillan.
* Wang, D. and J. Lee, 1993, “Visual Reasoning: its Formal Semantics and Applications”, *Journal of Visual Languages and Computing*, 4: 327–356.
* Wittgenstein, L., 1921, *Tractatus Logico-Philosophicus*, B. Pears and B. McGuinness (trans), London: Routledge & Kegan Paul, 1961
* Zeman, J., 1964, *The Graphical Logic of C. S. Peirce*, Ph.D. thesis, University of Chicago.

### Relevant Literature

* Barwise, J. and E. Hammer, 1994, “Diagrams and the Concept of a Logical System”, in Gabbay, D. (ed.), *What is a Logical System?* New York: Oxford University Press.
* Hammer, E., 1995b, *Logic and Visual Information*, Studies in Logic, Language, and Computation. Stanford: CSLI Publications and FoLLI.
* –––, 1998, “Semantics for Existential Graphs”, *Journal of Philosophical Logic*, 27: 489–503
* Hammer, E. and S. Shin, 1996, “Euler and the Role of Visualization in Logic”, in Seligman, J. and Westerståhl, D. (eds), *Logic, Language and Computation: Volume 1*, CSLI Lecture Notes #58, pages 271–286. Stanford: CSLI Publications.
* Kneale, W., and Kneale, M., 1962, *The Development of Logic*, Oxford: Clarendon Press.
* Lemon, O., 1997, “Review of *Logic and Visual Information*, by E. M. Hammer”, *Journal of Logic, Language, and Information*, 6(2): 213–216.
* Roberts, D., 1992, “The Existential Graphs of Charles S. Peirce”, *Computer and Math. Applic.*, (23): 639–663.
* Shimojima, A., 1996b, “Operational constraints in diagrammatic reasoning”, in J. Barwise and G. Allwein, (eds), *Logical Reasoning with Diagrams*, New York: Oxford University Press, pages 27–48.
* –––, 1996c, “Reasoning with Diagrams and Geometrical Constraints”, in Seligman, J. and Westerståhl, D. (eds), *Logic, Language and Computation: Volume 1*, CSLI Lecture Notes #58, pages 527–540. Stanford, CSLI Publications.
* Shin, S., 1991, “A Situation-Theoretic Account of Valid Reasoning with Venn Diagrams”, in J. Barwise, J. Gawron, G. Plotkin, and S. Tutiya, (eds), *Situation Theory and its Applications: Volume 2*, CSLI Lecture Notes #26, pages 581–605. Stanford: CSLI Publications.
* –––, 1999, “Reconstituting Beta Graphs into an Efficacious System”, *Journal of Logic, Language, and Information*, 8: 273–295.
* –––, 2000, “Reviving the Iconicity of Beta Graphs”, in Anderson, Cheng, and Haarslev, (eds), *Theory and Application of Diagrams*, pages 58–73. Springer-Verlag.
* –––, 2002a, *The Iconic Logic of Peirce’s Graphs*, Cambridge, MA: MIT Press.
* –––, 2002b, “Multiple Readings of Peirce’s Alpha Graphs”, in M. Anderson, B. Meyer, and P. Olivier, (eds), *Diagrammatic Representation and Reasoning*, London: Springer-Verlag, pp. 297–314.
* Sowa, J., 2000, *Knowledge Representation: Logical, Philosophical, Computational Foundations*, Belmont, CA: Brooks/Cole.
* Stenning, K., 2002, *Seeing Reason: image and language in learning to think*, Oxford: Oxford University Press.
* Stenning, K. and J. Oberlander, 1995, “A Cognitive Theory of Graphical and Linguistic Reasoning: Logic and Implementation”, *Cognitive Science*, 19(1): 97–140.
* Tufte, E., 1983, *The Visual Display of Quantitative Information*, Connecticut: Graphics Press.
* –––, 1990, *Envisioning Information*, Connecticut: Graphics Press.

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=diagrams). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/diagrams/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=diagrams&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](http://philpapers.org/sep/diagrams/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

* [Existential Graphs](http://www.jfsowa.com/peirce/ms514.htm) (Peirce’s MS 514 with commentary by John Sowa).
* [Edward Tufte’s Visual Display.](https://www.edwardtufte.com/tufte/)
* [A Survey of Venn Diagrams](http://www.combinatorics.org/Surveys/ds5/VennEJC.html) (University of Victoria, Frank Ruskey).
* [Researchers on Diagrammatic Reasoning](https://scholar.google.com/citations?view_op=search_authors&hl=en&mauthors=label:diagrammatic_reasoning), output of search at Google Scholar.
* [Diagrams 2018](http://www.diagrams-conference.org/2018/), International conference on the theory and application of diagrams.

## Related Entries

[cognitive science](https://plato.stanford.edu/entries/cognitive-science/) | [Frege, Gottlob: theorem and foundations for arithmetic](https://plato.stanford.edu/entries/frege-theorem/) | [mental imagery](https://plato.stanford.edu/entries/mental-imagery/) | [Peirce, Charles Sanders: logic](https://plato.stanford.edu/entries/peirce-logic/)

[Copyright © 2018](https://plato.stanford.edu/info.html#c) by  
[Sun-Joo Shin](http://www.yale.edu/philos/people/shin_sun-joo.html) <[*Sun-Joo.Shin@yale.edu*](mailto:Sun-Joo%2eShin%40yale%2eedu)>  
[Oliver Lemon](http://www.macs.hw.ac.uk/staff-directory/oliver-lemon.htm)  
[John Mumma](http://www.johnmumma.org/) <[*jmumma@csusb.edu*](mailto:jmumma%40csusb%2eedu)>
<!--md-padding-ignore-end-->
