# 子结构逻辑 substructural (Greg Restall)

*首次发表于2000年7月4日；实质性修订于2018年2月21日*

子结构逻辑是比经典逻辑更弱的非经典逻辑，以经典逻辑中不存在的结构规则的缺失而著名。这些逻辑受到哲学（相关逻辑）、语言学（Lambek 演算）和计算机科学（线性逻辑）的考虑的启发。此外，子结构逻辑的技术在研究传统逻辑（如经典逻辑和直觉主义逻辑）方面也很有用。本文简要介绍了子结构逻辑领域。对于更详细的介绍，包括定理、证明和示例，读者可以参考参考书目中的书籍和文章。

---

## 1. 子结构

逻辑学是关于逻辑推理的。因此，条件语句是逻辑学中的一个核心概念，因为它与逻辑推理有着密切的联系。这种联系可以通过子结构条件（也称为演绎定理）来清晰地表达：

如果且仅如果 p,q⊢r，则 p⊢q→r

它说，当 p 与 q 一起导致 r 时，r 就是从 p 单独导致 q→r 的结果。条件 q→r 记录了从 q 到 r（给定 p）的有效性。

这种条件和结果之间的联系被称为类比数学中的残余。考虑加法和减法之间的联系。如果且仅如果 a+b=c，那么 a=c−b。结果 a（即 c−b）是残余，即当 b 被拿走时 c 剩下的部分。这种联系的另一个名称是演绎定理。

然而，结果和条件之间的联系包含了一个额外的因素。不仅有逻辑结论的推导符号和条件符号，还有逗号，表示前提的组合。我们将“p,q⊢r”解读为“r 是从 p 和 q 一起导致的”。组合前提意味着有一种将它们放在一起的方式。但是我们如何将它们放在一起呢？事实证明，有不同的方法可以做到这一点，因此有不同的子结构逻辑。前提组合的行为随条件的变化而变化。在本介绍中，我们将考虑一些例子。

### 1.1 子结构

p 为真是一回事，条件 q→p 为真是另一回事。然而，如果‘→’是一个物质条件，那么 q→p 就可以从 p 推导出来。出于许多不同的原因，我们可能希望了解在没有这种推理的情况下条件语句如何工作。这与前提组合的行为有关，正如这个演示所示。

p⊢pp,q⊢pp⊢q→p

从公理 p⊢p（任何事物都可以从自身推导出来）我们推断出 p 可以从 p 和 q 推导出来，然后通过剩余化，得到 p⊢q→p。如果我们希望拒绝从 p 到 q→p 的推理，那么我们要么拒绝剩余化，要么拒绝证明开始时的恒等公理，要么拒绝证明的第一步。考虑一下选择最后一种选项所涉及的内容是很有启发的。在这里，我们要否认 p 可以从 p,q 推导出来。一般来说，我们要拒绝具有以下形式的推理规则：

X⊢AX,Y⊢A

这被称为弱化规则。该规则从一个更强的陈述，即 A 可以从 X 推导出来，步进到一个可能更弱的陈述，即 A 可以从 X 和 Y 推导出来。

人们对于拒绝弱化规则提出了不同的理由，这取决于对结果和前提组合的解释。早期的一个激励性例子来自于对相关性的关注。如果逻辑是相关的（如果说 p 蕴含 q 是真的，至少是说 q 确实依赖于 p），那么逗号就不需要满足弱化。我们确实可以从 X 推出 A，而不需要从 X、Y 推出 A，因为 A 不一定依赖于 X 和 Y 的组合。

在相关逻辑中，弱化规则也在另一方面失败了，我们也希望这个论证无效：

q⊢qp,q⊢qp⊢q→q

再次，q 可能从 q 中推导出来，但这并不意味着它与 p 一起推导出来，前提是“一起”在适当强的意义上理解。因此，在相关逻辑中，从任意前提到逻辑真理（如 q→q）的推理可能会失败。

### 1.2 交换律

如果前提组合的方式是可交换的（如果任何从 X，Y 中推导出来的东西也从 Y，X 中推导出来），那么我们可以使用恒等公理和残余性进行如下推理：

p→q⊢p→qp→q,p⊢qp,p→q⊢qp⊢(p→q)→q

在前提组合的交换性缺失的情况下，这个证明是不可用的。这是另一个简单的例子，说明了前提组合的行为与涉及条件语句的推导的行为之间的联系。

有许多种条件语句，这种推理都失败。如果“→”具有模态力量（如果它表示一种蕴含关系，在其中 p→q 在每个相关情况下都为真，当 p 成立时，q 也成立），并且如果“⊢”表示局部推论（p⊢q 当且仅当任何模型，在任何 p 成立的情况下，q 也成立），它会失败。可能是真的格雷格是一个逻辑学家（p），并且格雷格是一个逻辑学家蕴含格雷格是一个哲学家（p→q - 在格雷格是一个逻辑学家的相关情况下，他是一个哲学家），但这并不意味着格雷格是一个哲学家。（有许多情况下蕴含关系（p→q）为真，但 q 不是。）所以我们有一个情况，在其中 p 为真，但（p→q）→q 不是真的。这个论证是无效的。

这个反例也可以从前提组合的行为角度来理解。当我们说 X,A⊢B 是真的时候，我们并不仅仅是说在 X 和 A 都成立的任何情况下 B 成立。如果我们追求真正的蕴涵 A → B，那么我们希望在 A 成立的任何（相关的）情况下 B 都为真。因此，X,A⊢B 表示在 A 为真的任何可能性中，B 也为真。这些可能性可能不满足 X 的所有条件。（在经典蕴涵理论中，这些可能性是那些在其中 X 所需的一切都为真的情况。）

如果前提组合不是可交换的，那么残余可以有两种方式。除了残余条件给出了→的行为之外，我们可能希望定义一个新的箭头←，如下所示：

如果且仅如果 q⊢r←p，那么 p,q⊢r。

对于从左到右的箭头，我们在这个方向上有子结构：

p→q,p⊢q

对于从右到左的箭头，子结构可以证明前提的顺序相反：

p,q←p⊢q

这是子结构逻辑的特征。当我们关注在没有完整的结构规则时会发生什么时，新的可能性就会出现。我们揭示了在直觉主义或经典逻辑中之前只有一个的两个条件句。

在下一节中，我们将看到另一个例子，激发了非交换前提组合和这两个不同的条件句。

### 1.3 结合性

这是结构规则影响证明的另一种方式。前提组合的结合性提供了以下证明:

r→p,r⊢p   p→q,p⊢qp→q,(r→p,r)⊢q(p→q,r→p),r⊢qp→q,r→p⊢r→qp→q⊢(r→p)→(r→q)

这个证明在最顶层使用了割断规则。其思想是推理可以被组合。如果 X⊢A 且 Y(A)⊢B（其中 Y(A)是一个包含 A 一次或多次的前提结构），那么 Y(X)⊢B（其中 Y(X)是那个前提结构，将 A 的这些实例替换为 X）。在这个证明中，我们基于 r→p,r⊢p 的有效性，将 p→q,p⊢q 中的 p 替换为 r→p,r。

### 1.4 子结构

最后一个重要的例子是收缩规则，它规定了如何重复使用前提。收缩在从 p→(p→q)推导出 p→q 的推理中至关重要。

p→(p→q)⊢p→(p→q)p→(p→q),p⊢p→qp→q⊢p→qp→q,p⊢q(p→(p→q),p),p⊢qp→(p→q),p⊢qp→(p→q)⊢p→q

这些不同的例子让你体验到了通过子结构规则可以做到什么。子结构规则不仅影响条件语句，还对其他连接词产生影响，比如合取和析取（正如我们将在下面看到的）以及否定（Dunn 1993; Restall 2000）。

### 1.5 在逻辑学中，逻辑学的子结构位于推导符号右侧

自从 Gentzen 的序列演算（Gentzen 1935）被引入以来，我们就知道经典逻辑和直觉主义逻辑之间的区别也可以理解为结构规则的差异。不再考虑形式为 X⊢A 的序列，其中我们有一组前提和一个单一的结果，对于经典逻辑来说，考虑形式为

X⊢Y

其中 X 和 Y 都是一组陈述。预期的解释是从 X 的所有陈述中可以推导出 Y 的一些陈述。换句话说，我们不能同时具有 X 的所有陈述和 Y 的任何陈述。

允许具有多个结果的序列，并将规则转化为这个扩展的上下文，我们能够推导出经典的重言式。例如，推导

p⊢pp⊢q,p⊢p→q,p

表明 p→q 或 p 必须成立。这在经典逻辑中是有效的（如果 p 失败，p 为假，带有假前提的条件语句为真），但在直觉逻辑中无效。因此，经典逻辑和直觉逻辑之间的区别可以在形式上理解为允许的结构规则的不同，以及在逻辑推论分析中适用的结构类型的不同。

## 2. 子结构中的逻辑学

子结构逻辑学家族中有许多不同的形式系统。这些逻辑学可以通过不同的方式进行动机解释。

### 2.1 随附逻辑学

许多人希望对逻辑有效性进行解释，这种解释要注意相关性的条件。如果 X,A⊢B 成立，那么 X 必须在某种程度上与 A 相关。前提的组合受到以下限制。我们可以有 X⊢A，但不一定有 X,Y⊢A。新材料 Y 可能与推导无关。在 1950 年代，Moh（1950 年），Church（1951 年）和 Ackermann（1956 年）都对“相关”逻辑给出了解释。这些想法由围绕 Anderson 和 Belnap 的一系列工作者发展起来，他们的学生 Dunn 和 Meyer 以及其他许多人。该领域的经典参考文献是 Anderson，Belnap 和 Dunn 的两卷本《蕴涵》（1975 年和 1992 年）。其他介绍可以在 Read 的《相关逻辑》、Dunn 和 Restall 的《相关逻辑》（2002 年）以及 Mares 的《相关逻辑：哲学解释》（2004 年）中找到。

### 2.2 资源意识

这不是限制前提组合的唯一方式。Girard（1987 年）将线性逻辑引入作为过程和资源使用的模型。这种推导解释的思想是资源必须被使用（因此前提组合满足相关性准则），并且它们不会无限延伸。前提不能被重复使用。因此，我可能有 X,X⊢A，这意味着我可以使用 X 两次来得到 A。我可能没有 X⊢A，这意味着我可以单独使用 X 一次来得到 A。Troelstra 的《线性逻辑讲座》（1992 年）对线性逻辑进行了有益的介绍。还有其他形式的逻辑，其中没有收缩规则（从 X,X⊢A 到 X⊢A）。其中最著名的是Łukasiewicz 的多值逻辑。由于 Curry 的悖论（Curry 1977，Geach 1995；另请参阅 Restall 1994 的其他互联网资源），对没有这个规则的逻辑一直存在持续的兴趣。

### 3. 子结构

独立于这两个传统之外，Joachim Lambek 考虑了语言和句法的数学模型（Lambek 1958, 1961）。这里的想法是前提的组合对应于字符串或其他语言单位的组合。这里的 X,X 在内容上与 X 不同，但是此外，X,Y 与 Y,X 也不同。不仅使用的前提数量重要，它们的顺序也很重要。关于 Lambek 演算（也称为范畴语法）的良好介绍可以在 Moortgat（1988）和 Morrill（1994）的书中找到。

## 3. 证明系统

我们已经看到了一种呈现子结构逻辑的片段，以证明为基础。我们使用了残余条件，可以理解为包括两个条件的规则，一个是引入条件

X,A⊢BX⊢A→B

另一个是消除条件。

 X⊢A→B Y⊢AX,Y⊢B

这样的规则构成了自然演绎系统的基石，而这些系统适用于广泛的子结构逻辑。但是证明论可以用其他方式进行。Gentzen 系统的操作不是通过引入和消除联结词，而是通过在逻辑蕴涵的推导线上同时引入左右两侧的联结词。我们保留上述引入规则，并将消除规则替换为在左侧引入条件符号的规则：

 X⊢A Y(B)⊢CY(A→B,X)⊢C

这个规则更加复杂，但它与箭头消除规则具有相同的效果：它表明如果 X 足够证明 A，并且如果你使用 B（在某个上下文 Y 中）来证明 C，那么你可以同样使用 A→B 和 X（在同样的上下文 Y 中）来证明 C，因为 A→B 和 X 给出了 B。

根茨恩系统具有左侧和右侧的引入规则，具有非常特殊的性质，对于研究逻辑学非常有用。由于连接词总是在证明中引入（从上到下阅读），证明从不失去结构。如果一个连接词在证明的结论中不出现，它将根本不会出现在证明中，因为连接词无法被消除。

在某些子结构逻辑中，如线性逻辑和 Lambek 演算，以及没有析取的相关逻辑 R 的片段中，可以使用根茨恩系统来证明逻辑是可判定的，即可以找到一种算法来确定一个论证 X⊢A 是否有效。这是通过在根茨恩系统中搜索 X⊢A 的证明来完成的。由于这个结论的前提不能包含不在这个结论中的语言，并且它们在这些系统中没有更大的复杂性，因此只有有限数量的可能前提。算法可以检查这些前提是否满足系统的规则，并继续寻找这些前提，或者在遇到公理时停止。通过这种方式，某些子结构逻辑的可判定性得到了保证。

然而，并非所有的子结构逻辑在这个意义上都是可判定的。最著名的是，相关逻辑 R 是不可判定的。这部分是因为它的证明理论比其他子结构逻辑更复杂。R 与线性逻辑和 Lambek 演算不同之处在于对合取和析取的处理是直接的。特别地，合取和析取满足分配律：

p&(q∨r)⊢(p&q)∨(p&r)

任何证明系统中分配律的自然证明都使用了弱化和收缩，因此在相关逻辑 R 中无法使用，因为它不包含弱化。因此，R 的证明理论要么将分配作为原始规则，要么包含第二种前提组合形式（所谓的外延组合，与我们所见到的内涵前提组合相对），它满足弱化和收缩。

近年来，关于经典逻辑的证明论已经进行了大量的工作，这些工作受到了对子结构逻辑的研究的启发和影响。经典逻辑具有完整的结构规则，并且在历史上先于更近期的子结构逻辑系统。然而，当试图理解经典证明系统的深层结构时（特别是当两个在某些表面句法方式上不同的推导实际上是表示同一底层“证明”的不同方式时），将经典逻辑视为由基本的子结构逻辑形成，其中额外的结构规则作为附加规则加入其中，这种思考方式是很有启发性的。特别是，已经明确的是，区分经典证明与其同类的特点在于其完全普遍性的收缩和弱化结构规则的存在（例如，参见 Bellin 等人 2006 年以及其中引用的文献）。

## 4. 模型论

虽然相关逻辑 R 的证明系统比线性逻辑等缺乏（外延）合取分配的子结构逻辑更复杂，但其模型论却更为简单。相关逻辑 R 的 Routley-Meyer 模型由一组点 P 和 P 上的三元关系 R 组成。条件 A→B 在一个世界上的评估如下：

如果且仅当对于每个 y 和 z，其中 Rxyz，A 在 y 处为真，B 在 z 处为真时，A→B 在 x 处为真。

在模型中，只有当前提为真的任何点上，结论也为真时，一个论证才是有效的。论证 A⊢B→B 是无效的，因为我们可能有一个点 x，在该点上 A 为真，但 B→B 却不为真。我们可以通过在 Rxyz 中使 B 在 y 处为真但在 z 处不为真，使 B→B 在 x 处不为真。

三元关系 R 紧密地遵循子结构逻辑的证明理论中的前提组合模式的行为。对于不同的逻辑，可以对 R 放置不同的条件。例如，如果前提组合是可交换的，我们就像这样在 R 上放置一个对称条件：当且仅当 Ryxz 时，Rxyz。三元关系语义为我们提供了模拟子结构逻辑行为的极大便利。（关于子结构逻辑的证明理论和代数与语义之间的对应程度，在邓恩（1991）的《群论》中有详细介绍，并在雷斯托尔（2000）的《子结构逻辑导论》中有总结。）

此外，如果在前一节中提到的分配公理满足合取和析取，它们也可以直接建模：当两个合取式在某一点都为真时，合取在该点为真；当至少一个析取式在某一点为真时，析取在该点为真。对于没有分配公理的逻辑（如线性逻辑），语义必须更加复杂，需要一个不同的析取子句来使分配推理无效。

使用语义作为形式设备来建模逻辑是一回事，使用语义作为解释设备来应用逻辑是另一回事。子结构逻辑的文献为我们提供了多种不同的方式，可以将三元关系语义应用于描述一些传统结构规则不适用的现象的逻辑结构。

对于像 Lambek 演算这样的逻辑，语义的解释是直接的。我们可以将点视为语言项，将三元关系视为连接关系（当且仅当 x 与 y 连接得到 z 时，Rxyz 成立）。在这些模型中，收缩、弱化和置换的结构规则都失败了，但前提组合是可结合的。

当代关于语言分类的文献扩展了基本的 Lambek 演算，引入了更丰富的组合形式，可以建模更多的句法特征（参见 Moortgat 1995）。

这些模型的另一个应用是处理函数应用的语义。我们可以将模型结构中的点既看作函数又看作数据，并认为当且仅当将 x（作为函数）应用于 y（作为数据）得到 z 时，Rxyz 成立。传统的函数解释不鼓励这种双重使用，因为函数被认为比它们的输入或输出“更高级”（在传统的集合论模型中，函数是其输入-输出对的集合，因此它永远不能将自身作为输入，因为集合不能包含自己作为成员）。然而，例如无类型λ演算模型的函数系统允许自我应用。根据对模型中点的这种解读，当且仅当点在接受类型为 A 的输入时，它产生类型为 B 的输出，该点的类型为 A→B。该系统的推理规则则是关于函数类型的原则：推理式

(A→B)&(A→C)⊢A→(B&C)

告诉我们，每当一个函数将 A 映射到 B 和 A 映射到 C 时，它就将 A 映射到既是 B 又是 C 的事物。

这个例子给了我们一个非常弱的逻辑子结构模型。在这个模型中，没有满足任何通常的结构规则（甚至包括结合律）。这个三元关系模型的例子在（Restall 2000，第 11 章）中进行了讨论。

对于相关逻辑 R 及其对自然语言条件句的解释，还需要进一步确定形式语义模型中现实特征。这一点引起了一些争议，因为三元关系对于那些主要接触到具有更简单的二元可达性关系的模态逻辑的人来说是陌生的，而且由于相关逻辑模型中否定的处理方式的新颖性。在这里，我们不打算详细讨论这场辩论，其中一些工作在本百科全书中关于相关逻辑的文章中有所报道，而 Mares 的《相关逻辑：哲学解释》（2004）是对相关逻辑的一部书面论述。

## 5. 量词

在子结构逻辑模型中处理量词一直被证明是相当困难的，但在 2000 年代初取得了一些进展。困难在于证明理论和模型理论之间似乎存在不匹配。量词的适当公理或规则相对直接。普遍量词消除公理

∀xA→A[t/x]

子结构表明一个实例（在相关意义上）遵循其普遍概括。引入规则

⊢A→B⊢A→∀xB

（在这里，前提是 x 在 A 中不是自由的）告诉我们，如果我们可以逻辑上从一些关于该实例没有特定要求的假设中证明普遍概括∀xB 的一个实例，我们也可以从该假设中证明普遍概括。这个公理和规则似乎与一系列子结构逻辑中的一阶量词的任何解释都很契合，从最弱的系统到强大的系统如 R。

虽然量词的证明理论似乎表现良好，但将其推广到子结构逻辑的模型理论却证明是困难的。Richard Routley（1980）表明，在非常弱的子结构逻辑B系统中添加量词规则与三元关系语义相适应，其中量词被解释为在模型中所有点上都保持不变的对象域范围内。这个事实不适用于更强的逻辑，特别是相关逻辑R。Kit Fine（1989）证明了存在一个复杂的公式，在R的所有常量域框架模型中成立，但不能从公理中推导出来。Fine的论证细节对我们的目的来说并不重要，但导致不匹配的根本原因相对容易解释。在常量域语义中，普遍泛化∀xFx在模型中的每个点上具有完全相同的真值条件，就像实例族Fx1，Fx2，Fx3，…，Fxλ，…一样，其中域的对象由术语xi的值枚举。因此，量化表达式∀xFx在语义上无法区分（可能是无限的）合取Fx1∧Fx2∧Fx3∧⋯。然而，没有实例的合取（即使是无限的）也不能与普遍量化的主张∀xFx相关等价，因为实例可以在某种情况下为真（或者可以通过某种情况使其为真），而不必也使得普遍化为真——如果存在比那些更多的事物。因此，常量域模型似乎不适合于相关量化理论的项目。

Goldblatt和Mares（2006）最近的研究表明，存在一种替代方案，而且这种方案既优雅又相对简单。关键的想法是稍微修改三元关系语义，使得并非每个点集都被视为“命题”。也就是说，并非每个点集都是一个句子可能的语义值。因此，虽然存在由无限个∀xFx的实例的无穷连词确定的世界集合，但该世界集合可能并不被视为一个命题。（也许没有办法以某种方式单独确定那些特定的对象，使它们在一个判断中聚集在一起。）我们可以说的是普遍性的∀xFx，这是一个蕴含每个实例的命题（即普遍量词消除公理），如果一个命题蕴含每个实例，它就蕴含普遍性（即引入规则），因此由∀xFx所表达的命题是蕴含每个实例Fa的语义上最弱的命题。这正是Goldblatt和Mares模型中普遍量词的建模条件，与公理完全匹配。

## Bibliography

A comprehensive bibliography on relevant logic was put together by Robert Wolff and can be found in Anderson, Belnap and Dunn 1992. The bibliography in Restall 2000 (see [Other Internet Resources](https://plato.stanford.edu/entries/logic-substructural/#Oth)) is not as comprehensive as Wolff’s, but it does include material up to the present day.

### Books on Substructural Logic and Introductions to the Field

* Anderson, A.R., and Belnap, N.D., 1975, *Entailment: The Logic of Relevance and Necessity*, Princeton, Princeton University Press, Volume I.
* Anderson, A.R., Belnap, N.D. Jr., and Dunn, J.M., 1992, *Entailment*, Volume II, Princeton, Princeton University Press  
  [This book and the previous one summarise the work in relevant logic in the Anderson–Belnap tradition. Some chapters in these books have other authors, such as Robert K. Meyer and Alasdair Urquhart.]
* Dunn, J. M. and Restall, G., 2000, “Relevance Logic” in F. Guenthner and D. Gabbay (eds.), *Handbook of Philosophical Logic* second edition; Volume 6, Kluwer, pp 1–136.  
  [A summary of work in relevant logic in the Anderson–Belnap tradition.]
* Galatos, N., P. Jipsen, T. Kowalski, and H. Ono, 2007, *Residuated Lattices: An Algebraic Glimpse at Substructural Logics* (Studies in Logic: Volume 151), Amsterdam: Elsevier, 2007.
* Mares, Edwin D., 2004, *Relevant Logic*: *a philosophical interpretation* Cambridge University Press.  
  [An introduction to relevant logic, proposing an information theoretic understanding of the ternary relational semantics.]
* Moortgat, Michael, 1988, *Categorial Investigations: Logical Aspects of the Lambek Calculus* Foris, Dordrecht.  
  [Another introduction to the Lambek calculus.]
* Morrill, Glyn, 1994, *Type Logical Grammar: Categorial Logic of Signs* Kluwer, Dordrecht  
  [An introduction to the Lambek calculus.]
* Paoli, Francesco, 2002, *Substructural Logics*: *A Primer* Kluwer, Dordrecht  
  [A general introduction to substructural logics.]
* Read, S., 1988, *Relevant Logic*, Oxford: Blackwell.  
  [An introduction to relevant logic motivated by considerations in the theory of meaning. Develops a Lemmon-style proof theory for the relevant logic R.]
* Restall, Greg, 2000, *An Introduction to Substructural Logics*, Routledge. ([online précis](http://consequently.org/isl/))  
  [A general introduction to the field of substructural logics.]
* Routley, R., Meyer, R.K., Plumwood, V., and Brady, R., 1983, *Relevant Logics and their Rivals*, Volume I, Atascardero, CA: Ridgeview.  
  [Another distinctive account of relevant logic, this time from an Australian philosophical perspective.]
* Schroeder-Heister, Peter, and Došen, Kosta, (eds), 1993, *Substructural Logics*, Oxford University Press.  
  [An edited collection of essays on different topics in substructural logics, from different traditions in the field.]
* Troestra, Anne, 1992, *Lectures on Linear Logic*, CSLI Publications  
  [A quick, easy-to-read introduction to Girard’s linear logic.]

### Other Works Cited

* Ackermann, Wilhelm, 1956, “Begründung Einer Strengen Implikation,” *Journal of Symbolic Logic*, 21: 113–128.
* Avron, Arnon, 1988, “The Semantics and Proof Theory of Linear Logic,” *Theoretical Computer Science*, 57(2–3): 161–184.
* Gianluigi Bellin, Martin Hyland, Edmund Robinson, and Christian Urban, 2006, “Categorical Proof Theory of Classical Propositional Calculus,” *Theoretical Computer Science*, 364: 146–165.
* Church, Alonzo, 1951, “The Weak Theory of Implication,” in *Kontrolliertes Denken: Untersuchungen zum Logikkalkül und zur Logik der Einzelwissenschaften*, A. Menne, A. Wilhelmy and H. Angsil (eds.), Kommissions-Verlag Karl Alber, 22–37.
* Curry, Haskell B., 1977, *Foundations of Mathematical Logic*, New York: Dover (originally published in 1963).
* Dunn, J.M., 1991, “Gaggle Theory: An Abstraction of Galois Connections and Residuation with Applications to Negation and Various Logical Operations,” in *Logics in AI, Proceedings European Workshop JELIA 1990* (Lecture notes in Computer Science, Volume 476), Berlin: Springer-Verlag.
* Dunn, J.M., 1993, “Star and Perp,” *Philosophical Perspectives*, 7: 331–357.
* Fine, K., 1989, “Incompleteness for Quantified Relevance Logics,” in J. Norman and R. Sylvan (eds.), *Directions in Relevant Logic*, Dordrecht: Kluwer, pp. 205–225.
* Geach, P. T., 1955, “On Insolubilia,” *Analysis*, 15: 71–72.
* Gentzen, Gerhard, 1935, “Untersuchungen über das logische Schließen,” *Mathematische Zeitschrift*, 39: 176–210 and 405–431. [An English translation is found in Gentzen 1969.]
* Gentzen, Gerhard, 1969, *The Collected Papers of Gerhard Gentzen*, M. E. Szabo (ed.), Amsterdam: North Holland, 1969.
* Goldblatt, R., and E. Mares, 2006, “An Alternative Semantics for Quantified Relevant Logic,” *Journal of Symbolic Logic*, 71(1): 163–187.
* Girard, Jean-Yves, 1987, “Linear Logic,” *Theoretical Computer Science*, 50: 1–101.
* Lambek, Joachim, 1958, “The Mathematics of Sentence Structure,” *American Mathematical Monthly*, 65: 154–170.
* Lambek, Joachim, 1961, “On the Calculus of Syntactic Types, ” in *Structure of Language and its Mathematical Aspects* (Proceedings of Symposia in Applied Mathematics, XII), R. Jakobson (ed.), Providence, RI: American Mathematical Society.
* Moh Shaw-Kwei, 1950, “The Deduction Theorems and Two New Logical Systems,” *Methodos*, 2: 56–75.
* Moortgat, Michael, 1995, “Multimodal Linguistic Inference,” *Logic Journal of the IGPL*, 3: 371–401.
* Ono, Hiroakira, 2003, “Substructural Logics and Residuated Lattices – an Introduction,” in V. Hendricks and J. Malinowski (eds.), *Trends in Logic: 50 Years of Studia Logica*, Dordrecht: Kluwer, 2003, pp. 193–228.
* Routley, R., 1980. “Problems and Solutions in Semantics in Quantified Relevant Logics,” in A. Arruda, R. Chuaqui, and N.C.A. Da Costa (eds.), *Mathematical Logic in Latin America*, Amsterdam: North Holland, 1980, pp. 305–340.

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-substructural). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-substructural/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-substructural&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](http://philpapers.org/sep/logic-substructural/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

* Restall, Greg, 1994, [*On Logics Without Contraction*](http://consequently.org/writing/onlogics), Ph. D. Thesis, The University of Queensland.
* Slaney, John, 1995, [MaGIC: Matrix Generator for Implication Connectives](http://users.cecs.anu.edu.au/~jks/magic.html), a software package for generating finite models for substructural logics.

## Related Entries

[logic: modal](https://plato.stanford.edu/entries/logic-modal/) | [logic: paraconsistent](https://plato.stanford.edu/entries/logic-paraconsistent/) | [logic: relevance](https://plato.stanford.edu/entries/logic-relevance/)

[Copyright © 2018](https://plato.stanford.edu/info.html#c) by  
[Greg Restall](http://consequently.org/) <[*gr69@st-andrews.ac.uk*](mailto:gr69%40st-andrews%2eac%2euk)>
