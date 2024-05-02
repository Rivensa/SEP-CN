# 逻辑学中的自然演绎系统 natural deduction systems in logic (Francis Jeffry Pelletier and Allen Hazen)

*首次发表于2021年10月29日星期五*

“自然演绎系统”最初由 Gentzen（1934）和 Jaśkowski（1934）描述的一种逻辑系统。它还指代了这些逻辑系统所体现的推理类型。自然演绎的一个基本部分，也是（根据大多数关于该主题的作者）使其与其他证明方法有所区别的部分，是“子证明”的概念——证明的一部分，其中论证依赖于临时前提（“为了论证而假设的假设”）。在 Fitch-Jaśkowski 的自然演绎展示中，子证明以一种使它们在书面证明中立即可见的方式标记出来；而在其他展示中，需要更多的工作来挑选出形成子证明的公式。尽管形式主义有所不同，但一个基本思想是，一个人能够“假设 A 并看到它导致结论 X”，然后得出结论，如果 A 为真，则 X 也为真。（我们还讨论了其他各种类型的子证明。）这一领域的研究集中在诸如以下问题上：（a）所有自然演绎证明都可以放入某种“正常形式”吗？（b）不同的逻辑系统是否需要根本不同类型的逻辑规则？（c）如果不同的逻辑需要根本不同类型的逻辑规则，这是否表明某些逻辑在某种意义上比其他逻辑“更好”？（d）可以利用可能使某些逻辑比其他逻辑“更好”的特征来表征自然语言中逻辑术语（以及其他术语）的含义吗？

---

## 1. 引言

“自然演绎系统”最初是由 Gentzen（1934）和 Jaśkowski（1934）描述的一种逻辑系统。自然演绎的一个基本部分，也是（根据大多数关于该主题的作者的说法）使其与其他证明方法区别开来的地方，是“子证明”的概念——证明的一部分，其中论证依赖于临时前提（“为了论证而假设的假设”）。在 Fitch-Jaśkowski 的自然演绎展示中，子证明以一种使它们在书面证明中立即可见的方式标记出来；而在其他展示中，需要更多的工作来挑选出形成子证明的公式。也就是说，我们有理由在没有任何假设的情况下得出“如果 A，则 X”，即（A→X）的结论，因为我们可以创建这个子证明。这种假设可以在某个先前做出的假设内部发生，因此需要一些方法来防止混淆嵌入式结论。这个例子只是在教科书和研究成果中可以找到的许多不同类型的“从属证明”类型之一。在 Suppes-Lemmon 风格的证明中，这种风格通常甚至被称为自然演绎的风格，证明可以并且可能应该被视为使用序列进行操作，因此（根据我们的约定性定义）实际上并不是自然演绎系统，但是（i）它类似于其他形式的自然演绎（如 Gentzen 的序列演算 NJ 和 NK）通过具有消除规则而不是在序列的左侧引入公式的规则（在这方面它反映了 Gentzen 的序列演算），以及（ii）当我们在实践中使用它时，它感觉像自然演绎。（我们在第 4 节中讨论了这种风格。）这个调查将展示这些不同风格中的各种风格。

“自然演绎系统”还指代这些逻辑系统所体现的推理类型，很多关于意义概念的作者都认为它是通过表达式的使用来定义的，这包括一般意义上的意义，但也包括背后的连接词在积极推理中的意义。对于像连接词这样的逻辑表达式，它们的使用的一个显著方面是由涉及它们的推理模式所给出的。在这个领域已经写了很多文章，将一些重要的形式逻辑方面归类为也表现出这个特征，并且特别指出它在自然演绎中最为明显。

尽管自然演绎的第一个正式描述是在 1934 年，但它的接受和流行直到 1950 年代和 1960 年代才显现出来，当时出版了大量的初级逻辑教材，其中不同的教材使用了 1934 年基础作品的核心思想的变体。我们只会简要涉及这些初级教材的逻辑系统与原作之间的一些差异，但值得注意的是，其中一些差异被一些学者认为非常重要，以至于可以将“真正的自然演绎”与有时也被称为自然演绎的其他形式主义区分开来。（我们在第 4 节中描述了这样一个系统范围的差异。）

而我们提到其他类型的逻辑系统，也引出了某些其他类别的逻辑形式主义的主题，其中一些已经在原作（Gentzen 1934）中描述，另一些在 Gentzen（1936）中描述。我们将花一些篇幅讨论这些相关理论之间的各种重要区别。一些现代理论家将它们都称为“自然演绎”，而其他人（包括我们其中之一）则将它们视为逻辑的不同理论。

当然，大多数逻辑学家和以逻辑为导向的语言哲学家对基本逻辑的各种形式并不特别感兴趣，而是对不同逻辑所表现出的一些元理论属性感兴趣。我们在这里考虑了一些自然演绎被认为优于（或至少与）底层逻辑的其他形式的地方。其中一些差异纯粹是形式上的（如归一化和和谐），而其他涉及到“唯一真理逻辑”[2]、推理主义和其他一些哲学立场的问题。我们还将研究自然演绎在直觉主义和经典逻辑之外的扩展，如模态逻辑和相关逻辑。其中一些特点在原始的 Gentzen 作品中有所讨论，但后来的研究进一步揭示了其中的复杂性。

## 2. 自然演绎系统

自然演绎允许特别清晰地比较经典逻辑和直觉主义逻辑，因为这两种逻辑的表述只需要对规则集进行小的改变即可。Gentzen、Jaśkowski 和 Fitch 在他们的早期出版物中都注意到了这一点[3]。

在本节中，我们简要描述了 Gentzen[4]和 Jaśkowski 的原始系统，以及在最近的初等逻辑教材的鼎盛时期引入的一些有影响力的系统。

### 2.1 Gentzen 和 Jaśkowski

Gentzen 的自然演绎系统——他的 N 演算——以树形格式给出，其中公式的出现作为树的节点。树的根是要证明的公式，而“假设”位于树的叶子上。以下是一个证明树，用于证明定理。

(((p→q)∧(¬r→¬q))→(p→r))

在 Gentzen 的 N 演算中。（为了帮助理解这个证明，应该提到 Gentzen 的间接证明的主要规则首先从矛盾的两个部分生成⊥（“荒谬的命题”），然后生成相关假设的否定。[5]

![Gentzen style proof link to extended description below](https://plato.stanford.edu/entries/natural-deduction/prooftree1.svg)

图 1：Gentzen 风格的证明。[图 1 的详细描述在补充材料中。]

这些线条表示从上方公式到线条下方的过渡，使用右边缘指示的推理规则。（我们可以用垂直线或分割线替换这些水平线，以更清楚地表示树枝，并用负责的推理规则标记这些树枝，结果看起来更像树）。Gentzen 使用叶子上的数字来跟踪子证明。在这里，要证明的条件的前提（两次，因为有两个单独的任务）用数字“1”输入，主定理的结论的前提用数字“2”输入，用数字“3”输入用于证明的反证法部分的公式¬r。当应用相关的“范围变化”规则（通过在推理规则的引用中引用该分支的数字，用括号括起来）时，该数字被划掉，表示该子证明已完成。

与 Gentzen 完全独立，Jaśkowski（1934）描述了两种方法。本文对我们感兴趣的是在一段冗长的脚注中发现的一种方法，他在此之前已经宣布过。[6]这种图示方法涉及在证明的某些部分周围画“框”，以表示所包含的公式“仅在假设下成立”-或者我们可以说，它们是根据假设前提得出的子证明。[7]

![Jaskowski style proof link to extended description below](https://plato.stanford.edu/entries/natural-deduction/NewJaskProof.svg)

图 2：Jaśkowski 风格的证明。[图 2 的详细描述在补充中。]

自然演绎系统中的基本概念是假设并观察其结果，这在 Jaśkowski 的论文中通过引入一个方框来表示，方框的第一行是假设，所有该假设的结果都保留在方框内。此外，可以在先前的方框内进行进一步的假设，生成一个从属方框。条件化的基本规则是，一个条件语句，其前提是假设，结论是方框内的最后一行，可以作为方框外的下一行输入。一旦构建了一个方框，方框内的任何公式都不能用来证明方框外的任何一行。类似的假设规则是还原反证法或否定引入规则，其中同一方框内的两行矛盾的语句可以触发方框的完成（关闭），并将未否定的假设作为方框外的下一行。语言中的定理是可以通过这些规则生成并位于所有方框之外的公式。与 Gentzen 证明一样，我们可以看到 Jaśkowski 使用还原反证法规则从假设中删除否定符号。这是 Jaśkowski 从直觉逻辑转向经典逻辑的方式。（有关将直觉逻辑加强为经典逻辑的方法，请参见注 23。）

### 2.2 Jaśkowski 方法的现代版本

在我们未来的自然演绎示例中，我们将采用 Jaśkowski 方法的更现代版本：即 Fitch（1952）的方法。大多数现代初级教材都遵循这种方法的变体，尽管有一种例外情况被几位作者所遵循。我们很快将在第 4 节中看到这个例外情况。

菲奇方法（Fitch's method），与亚斯科夫斯基（Jaśkowski）的方法类似，是一种图形化的方法，涉及到指示亚斯科夫斯基的方框和假设的方法。规则分为两种类型：一种是参考前面的行，但在同一个方框中具有新公式的规则；另一种是允许结束一个方框，并将新公式放在下一个外部方框中的规则。但是，菲奇方法并不绘制整个方框，而是只使用方框的左侧，并且假设不仅仅是一个新方框的第一行，菲奇方法通过将假设输入到短水平线的上方来指示它们。

![Fitch style proof link to extended description below](https://plato.stanford.edu/entries/natural-deduction/fitch1.svg)

图 3：菲奇风格的证明。[图 3 的详细描述在附录中。]

这个证明中使用的规则[8]展示了自然演绎中一个被认为（某些人认为）在自然演绎的元理论中非常重要的一个方面：即语言中的每个联结词都应该有一个引入规则和一个消除规则，或者有时候也被称为整个逻辑应该被组织成每个逻辑运算符的引入和消除（简称 Int-Elim）规则的配对。我们在第 5 节中讨论了这个特点。我们在这里指出，菲奇的确切表述并不满足这个 Int-Elim 的要求，因为除了通常的规则之外，它还有适用于某些联结词的否定的 Int-Elim 规则。因此，对于诸如¬(ϕ∧ψ)、¬(ϕ∨ψ)和¬(ϕ→ψ)等公式类型，存在 Int-Elim 规则。

![Fitch style proof link to extended description below](https://plato.stanford.edu/entries/natural-deduction/fitch2a.svg)

 （a）

![Fitch style proof link to extended description below](https://plato.stanford.edu/entries/natural-deduction/fitch2b.svg)

 （b）

![Fitch style proof link to extended description below](https://plato.stanford.edu/entries/natural-deduction/fitch2c.svg)

 （c）

图 4：Fitch 风格的否定消除规则：否定引入规则是它们的逆。[图 4 的详细描述在附录中。]

这影响了关于自然演绎的语义意义的论证，并稍微复杂化了一些元理论的发展，但是 Fitch 的负面 Int-Elim 规则是成对出现的，足以满足许多标准结果的类似物（我们在§5.3 中讨论）。值得注意的是，Gentzen 的表述往往受到技术证明理论的作者的青睐，而 Fitch 的表述则受到初级教科书作者的青睐。那些学过一种自然演绎表述的人最初可能会发现其他表述晦涩难懂，但是通过经验，“翻译”变得常规化。将一种自然演绎风格的证明转换为另一种风格的证明只是一个简单的剪切和粘贴的问题（或者也许，由于 Gentzen 的树形表述通常需要多个副本的某些公式，需要剪切、复印和粘贴）。但是，无论自然演绎系统如何呈现，它们都有两种类型的规则。有推理规则，可以从一个或多个先前的公式推导出一个公式。（某些系统还允许“零前提”规则，可以在任意位置写入指定类型的公式：实际上，是逻辑公理方案。）典型的推理规则包括以下内容：

* ∧-引入：可以从它的两个合取式推导出一个合取式。[9]
* ∧-消除：可以从一个合取式中推导出一个合取项。[10]
* ∨-引入：可以从任一析取项中推导出一个析取式。[11]
* →-消除：可以从两个前提 A 和(A→B)推导出 B。
* ¬-消除：可以从一对矛盾的前提 A 和¬A 中推断出任意公式 B。[12]

还有 Jaśkowski 所称的假设规则，其中的结论不是从先前的公式推断出来的，而是从一个或多个指定类型的子证明的存在推断出来的。通常（用 Fitch 风格的术语描述），这些规则包括：

* →-引入：在具有 A 作为假设和 B 作为一行的子证明之后，可以断言(A→B)。
* ∨-消除：在三个项目之后可以断言任意公式 C：一个析取(A∨B)，一个以 A 为假设的子证明，其中 C 作为一行，以及一个以 B 为假设的子证明，其中 C 作为一行。
* ¬-引入：在一个以 A 为假设的子证明之后，可以断言否定¬A，其中包含一对矛盾的公式 B 和¬B 作为行。[13]

正如在逻辑的公理化表述（“Frege 系统”或“Hilbert 风格”系统）中，对于特定逻辑来说，可以选择不同的公理，制定自然演绎系统时也可以选择不同的规则集。特别是，在其他规则存在的情况下，可以用推理规则替换一个或多个假设规则。因此，例如，可以将→-I[14]作为唯一的假设规则，其他规则被推理规则替换，其中的前提条件包括总结原始规则的子证明的条件句。 （初学者可能会发现学习推理规则比学习假设规则更容易，如果是这样，这种系统可能是初级教科书的合理选择。）或者，可以将¬-I 作为唯一的假设规则，将→-I 替换为一条规则，允许从¬（A∧¬B）推导出（A→B）。也可以选择其他方式。D'Agostino，Gabbay 和 Modgil（2020）在经典命题逻辑中提出了一个非常优雅的系统，其中唯一的假设规则是“排中律”规则：如果一个公式在一对子证明中都可以推导出来，其中一个的假设是另一个的否定。

## 3. 自然演绎系统和量词

量词的规则必然更加复杂，但通常使用的规则可以看作是对∧和∨规则的自然（虽然类比的）扩展。

### 3.1 量词基础

将全称量化视为（某种程度上）对于量化域中的每个元素都有一个合取的方式，我们自然地得到一个规则

 ∀-E：

从全称量化中可以推导出任意实例 A(t)，其中 A(t)是全称量化∀x(A(x))的一个推论。[15]

相应的引入规则不太明显：域可能是无限的，并且在形式证明中只能出现有限个合取式！我们采取更迂回的方法。首先，我们假设存在一组“字母表”中的特殊术语（也称为自由变量、参数、虚拟常量等）。接下来，我们定义了一种特殊类型的子证明，即相对于字母表中的特定术语而言的一般子证明：在 Fitch 的符号表示中，这些子证明在其垂直线顶部旁边标有相关术语的出现。这些子证明受到重复使用的限制：包含特定特殊术语之一的公式不能被重复使用到相对于该术语的一般子证明中。然后我们可以陈述规则

 ∀-I：

一个全称量化，∀x(A(x))，可以在一个相对于特殊术语 a 的一般子证明之后断言，该子证明没有假设，并且包含了该术语的量化实例 A(a)。[16]

这样的规则的正确性很容易看出。对于一般子证明的重复限制意味着在关于 a 的一般子证明中不能够偷偷引入特殊假设。因此，可以将子证明视为通过一种模式来展示（暂时假设域中的每个元素都有一个名称[17]）为每个元素的量化构造证明的模式。

存在量词的标准规则类似于析取规则的类比扩展。引入规则很简单：

∃-I:

任何存在量化，∃x(A(x))，可以从其任意实例，A(t)，推导出来。

∨-E 规则允许我们从一个析取中推导出结论，给出了子证明来展示在任何一个析取项的假设下，结论如何被推导出来。使用一个通用的子证明，如前所述，来呈现从任意“析取项”推导出结论的模式，我们有

∃-E:

一个结论 C，在存在量词∃x(A(x))和一个子证明之后，可以被断言，该子证明相对于一个术语 a 是普遍的（其中 a 不出现在 C 中），并且具有 A(a)作为其假设并包含 C 作为一行。

再次，假设每个域元素都有一个名称，这些规则的正确性是显而易见的。（对于经典逻辑的否定规则，一个有益的练习是展示∃的规则（对于∀）可以从∀的规则（对于∃）和∃x(A(x))的定义作为¬∀x¬(A(x))（∀x(A(x))的定义作为¬∃x¬(A(x))）推导出来。子证明的特殊术语不出现在∃-消除的结论中的限制，恰好对应于重新进入普遍子证明的限制。）

关于这些规则的一些说明是必要的。其中之一是，由于在给定规则应用之前的证明的有限部分中只能出现有限多个术语，我们可以要求在应用∀-I或∃-E的过程中使用的特殊术语a不应出现在包含规则应用的任何子证明的假设中（或整个证明的任何前提中）：在讨论Gentzen树状自然演绎形式时使用的术语中，除非该假设已经通过某个早期的假设规则的应用被解除，否则a不能出现在规则应用之上的假设中。这将通过使重复进入一般子证明的限制变得不必要，从而稍微简化整体框架。另一方面，在构建一个非常长的形式化证明时，允许我们重复使用特殊术语是方便的。如果我们不限制重复，我们可以重新制定∀-Introduction而不提及特殊子证明。我们可以只说在A(a)之后可以断言∀x(A(x))，前提是a不出现在尚未被解除的早期假设中（许多受欢迎的本科教材采用这种方法）。这将稍微简化规则的陈述（尽管不会简化构建证明的过程：检查a是否不出现在“禁止”的假设中将在构建长证明时耗费时间）。另一方面，这将模糊∀规则和∃规则之间的关系。

关于∀-I 规则还有另一个奇怪之处。我们最初引入了子证明的概念作为假设推理的表示：子证明是从假设中推导出来的。但在∀-I 中，我们使用了一个没有假设的子证明！如果这看起来令人反感，我们可以说∀-I 的子证明确实有一个假设，但是这个假设是未声明的、元语言的：假设是（否则未解释的）术语 a 代表域中的某个元素。这并不像看起来那么武断：如果我们修改规则以给出普遍自由逻辑（参见 Nolt 2020）-即从普通一阶逻辑中假设的域是非空的和所有特指术语表示其中的元素的假设中解放出来的量化逻辑-这个假设进入了客体语言并被明确陈述。自由逻辑最容易用存在谓词 E！来表述，规则变为

 自由∀-I：

在子证明之后，可以断言一个普遍量化∀x(A(x))，相对于一个特殊术语 a 而言是普遍的，其假设是 E!(a)，包含量化实例 A(a)作为一行。

存在假设和前提被添加到其他量词规则中：∀-E 和∃-I 成为两个前提规则，第二个前提是 E！(t)，∃-E 的子证明最终有两个假设，A(a)和 E！(a)。许多分类量词逻辑的表述（Hailperin 1957, 1960 是经典陈述；Freund 2019 是哲学应用）可以遵循相同的模式，额外的假设和前提表明相关术语或参数代表特定类型变量的范围内的某个东西。

### 3.2∀-概括和∃-实例化的问题

一些教科书（Quine 1950b，Copi 1954 的某些版本和 Kalish＆Montague 1964 可能是最著名的）采用了一套异常的量词规则。更简单的规则∃-I 和∀-E 保持不变，但我们刚刚调查的两个涉及子证明的规则被替换为（按照 Quine 的说法）我们将称之为存在实例化（EI）和普遍概括（UG）的规则。

 EI（存在量化引入）：

从存在量化∃x(A(x))中，可以推导出一个实例 A(a)，其中 a 是来自特殊“字母表”中的 A 项。（常常使用实例常量或实例项来代替参数等）

 UG（全称引入）：

从一个实例 A(a)开始，其中 a 是特殊术语之一，可以推断出普遍量化∀x(A(x))。

如果没有限制地使用这些规则，显然是不可靠的：它们会允许从前提∃x(A(x))到结论∀x(A(x))进行两个步骤的推理！因此，这些规则在使用特定实例术语时受到限制。首先，不能在同一推导中的两个不同量词实例中使用相同的实例术语，但仅此还不足够。制定出能够产生可靠和完整的规则系统的限制的精确表述并不是微不足道的：Copi 的教科书（1954 年）经历了几个版本，其中包含了不同的错误系统，而 Quine（1950a）在他的教科书的不同版本之间改变了限制的措辞（尽管两个版本都给出了正确的系统）。有几篇文章发表在专业逻辑期刊和一般哲学期刊上，指出了错误并提供了对情况的分析。

这些规则背后的思想似乎与自然演绎没有内在的联系：它们不使用子证明（它们替代了更标准系统中涉及子证明的量词规则），并且它们可以与纯公理系统的命题逻辑结合使用。它们与自然演绎的关联是历史偶然性的结果：介绍它们的教科书呈现了其他自然演绎特征的系统。然而，它们具有一定的实用价值：在古典逻辑系统的背景下，使用（正确限制版本的）它们的证明可以比使用标准自然演绎规则的证明更短更简单。（在古典上有效的方案

∃x(∃yF(y)→F(x))

 和

∃x(F(x)→∀yF(y)),

例如，使用→-I和变量量词规则可以很快而明显地证明。另一方面，在直觉主义或模态逻辑系统中，它们不能无变化地使用，正如我们在第6节中解释的那样：上述经典方案在直觉主义上无效，但它们的简单证明在将Quine的教科书的量词规则添加到直觉主义命题逻辑的形式化系统中是有效的，并且在量化模态逻辑系统的构建中尝试使用它们会导致Barcan原则及其逆的简单推导。在非经典逻辑的背景下不谨慎地使用这些（及相关的）规则已经导致了发表的哲学文章中的错误。

在制定这些规则的正确限制方面的困难与瞬时术语的任何明显的语义解释的缺失有关。经典上，模型中∃xF(x)的真实性意味着（如果域中的每个元素都有一个名称），那么量化就有一个真实的实例，但我们不能确定它是哪个实例。因此，当在一个否则解释的语言中的证明中使用 EI 规则时，构造证明的人可能无法定义瞬时术语：它保持未解释。然而，Fine（1985a，b）已经开发了一个适度复杂的模型论解释，允许证明适当限制的 EI 和 UG 规则的正确性。（那些有兴趣在给出简短证明时使用这些规则的人应该参考 Fine 的工作：他给出了规则和限制的简化陈述，并提供了一个简单的算法，即他的依赖图，用于检查证明中的瞬时术语是否符合限制。）对于熟悉希尔伯特的ε演算（参见 Avigad＆Zach 2020）的人来说，正确限制的 EI 和 UG 的正确性最简单的方法可能是将瞬时术语视为缩写的ε-术语：符合限制的证明中出现的术语可以扩展为适当的ε-术语，而当违反限制时，这种扩展被阻止（有关更详细的说明，请参见 Hazen 1987）。Cellucci（1995）对与 EI 和 UG 相关的各种规则进行了有趣的讨论。Pelletier（1999）回顾了上世纪 50 年代至 60 年代早期 UG 和 EI 规则的许多重新制定。

## 4.序列演算和序列自然演绎系统

Gentzen（1934年）提出了他的自然演绎系统NJ和NK，分别用于直觉主义逻辑和经典逻辑，但他对NK并不满意：他不知道如何将规范化定理（在第5节下面讨论）从NJ扩展到NK。因此，他引入了另一对系统LJ和LK（L代表logistisch），用于这两种逻辑，他能够给出一个密切相关的元定理的统一证明。与他对自然演绎的展示一样，-系统的证明是一棵树，但是在N系统的证明中，树的节点由单个公式占据，而在L系统的证明中，树的节点由序列占据，其中序列由一对（可能为空！）公式列表组成，由特殊符号⊢分隔。[18]（因此，类似于Gentzen的L系统的系统通常被称为序列演算。）序列的直观含义是，如果⊢左侧列表（前提公式）的所有公式都为真，则右侧列表（后继公式）中至少有一个公式为真，或者（使用与自然演绎关系暗示的词）假设所有前提公式为真，证明至少有一个后继公式为真。根据现代数学中所有和至少一个的标准用法，这被解释为涵盖具有空列表的序列的情况：如果序列中没有前提公式，则解释为至少有一个后继公式为真；如果没有后继公式，则解释为至少有一个前提公式为假；如果两个列表都为空-因此序列只是一个独立的⊢-则解释为表达一个必然的谬误。

L-证明的初始序列（树的叶子）是形式为ϕ⊢ϕ的恒等序列（这对应于任意假设可以作为 N-证明的叶子的方式），而较低节点上的序列是通过从其上方的一个或两个节点的序列应用推理规则得到的。这些规则有两种类型。首先，用于管理列表的结构规则：交换（体现了列表中公式的顺序是无关紧要的思想），收缩（允许从列表中消除重复的公式副本），和稀释（在稀释的意义上：可以向列表中添加额外的公式）。其次，与不同联结词（和量词）相关的逻辑规则：每个运算符有两个规则[19]，分别处理前提公式和后续公式中的运算符。后续运算符的规则类似于自然演绎的引入规则：例如，∧的右手规则允许我们推断出一个序列

 Γ⊢Δ，（ϕ∧ψ）

从这两个序列

Γ⊢Δ,ϕ

 和

Γ⊢Δ,ψ.

自然演绎系统中的引入规则增加了复杂性：引入规则的实例的结论是通过在先前的公式中添加运算符来形成的。相比之下，消除规则简化了：消除规则的实例的前提是通过从结论中删除运算符（或者在∨-E 中，从子证明的假设中删除运算符）来形成的。L 系统没有这种简化规则。它们的位置由左侧的复杂化规则取代。因此，例如，前提中的∧的规则允许从以下任一定式推断出一个序列

(ϕ∧ψ),Γ⊢Δ

to be inferred from either of the sequents

ϕ,Γ⊢Δ

 和

ψ,Γ⊢Δ.

然而，自然演绎的演示中可以使用序言的符号（特别是只有一个后继公式的序言）：Gentzen（1936）给出了这样一个系统。上述自然演绎的不同演示的符号复杂性——Gentzen 的树，Jaśkowski 的方框——是为了跟踪证明中的哪些假设依赖于给定公式。另一种选择是允许使用标准的 Int-Elim 规则，用序言替换自然演绎证明中的每个公式：被替换的公式作为序言的唯一后继公式，而它所依赖的假设构成前提。这种类型的系统可以称为序言自然演绎系统。

实践中发现，序言自然演绎非常实用。通过规定前提公式列表仅仅是公式集合的表示，可以避免明确提及交换和收缩的结构规则。可以制定具有两个前提的自然演绎规则，以允许合并前提：例如，→-E 应该允许推导出

Γ,Δ⊢ψ

 从

Γ⊢(ϕ→ψ)

 和

Δ⊢ϕ.

瘦化仍然对于覆盖证明是有用的，其中子证明的假设在推导后面的公式中没有被使用，就像从ψ到(ϕ→ψ)的推理的形式化一样。假设规则，用于解除假设，被规定为从前提中删除假设：因此→-I 允许推理

Γ⊢(ϕ→ψ)

 从

ϕ,Γ⊢ψ

（这个公式，除了可能有额外的后继公式的可能性外，准确地说是 L-系统中的右手→-I 规则）。

使用这种自然演绎的表达方式的主要实际问题是在多个推理结论的前提中写和重写所有公式的繁琐性。显然，最早在 1957 年的基础教材 Suppes 中注意到了一种简化和引用这些公式的简便方法：首先，通过用数字标识每个推理结论（如果当前证明中有 n 个推理结论，则下一个推理结论的编号将是 n+1）。其次，通过将一个标签与该数字关联在证明中使用。一个论证的前提的标签与其数字相同；一个假设（或“假设”）的标签也与其数字相同；否则（通过引用先前的推理结论生成新的推理结论时）有两种情况，取决于规则是“直接”规则还是“假设结束”规则。在前一种情况下，如∧-引入和→-消除所示，新的推理结论的标签是包含规则中使用的两个公式的标签的集合。在后一种情况下，如→-引入所示，新的标签是→的结果的标签集合减去→的前提的标签。[20]

我们之前在 Gentzen 树格式、Jaśkowski 风格格式和 Fitch 格式中完成的推理自然演绎，在 Suppes（1957）的符号表示中将变为[21]：

{1}1.((p→q)∧(¬r→¬q))假设{2}2.p 假设{1}3.(p→q)1, ∧-消除{1,2}4.q2,3, →-消除{1}5.(¬r→¬q)1, ∧-消除{6}6.¬r 假设{1,6}7.¬q5,6, →-消除{1,2,6}8.(q∧¬q)4,7, ∧-引入{1,2}9.¬¬r6,8, ¬-引入{1,2}10.r9, ¬¬-消除{1}11.(p→r)2,10, →-引入∅12.(((p→q)∧(¬r→¬q))→(p→r))1,11, →-引入

图 5：Suppes 证明示例

我们将这种呈现证明的方式称为“自然演绎系统”，以向从序演算中发展而来的方式致敬。然而，许多...甚至所有...以这种系统作为教学对象的初级逻辑教材都将其简称为“自然演绎”。其中一些书籍甚至在作者介绍中（通常）花费篇幅来辩称这种方式在教学上优于其他自然演绎的方式，尤其是从教育学的角度来看。然而，他们并没有提及这种方法与 Gentzen 的单结论序演算之间的关系。

另一种有趣的变体仅使用（基本上）经典序演算的右侧：证明树中的节点由有限的公式序列占据，可以直观地将其解释为以析取的方式解释。[22]

## 5. 规范化

自然演绎系统的中心元定理是规范化定理，其效果是自然演绎系统中的证明可以转化为“正常形式”，根据 Gentzen 的非正式描述，“不是绕圈子的”。该定理适用于一阶逻辑的完整系统，尽管在接下来的内容中，为了给出结果和证明方法的“风味”，我们只描述命题片段。

### 5.1 直觉逻辑的规范化

Gentzen（1934）指出，引入规则就像是逻辑运算符的定义，而消除规则则是其定义的结果。要将这个观点明确化并不容易，但它具有直观的合理性。在典型简单的合取情况下，应用∧-I所需的前提只是两个合取式，因此可以将该规则视为在两个合取式都为真的情况下“定义”合取式为真。在应用∧-E时，结论是其中一个合取式，因此如果按照这种方式“定义”合取式，那么它必须为真。对于其他运算符来说，情况就没有那么直接了。→-I所需的子证明是从前提推导出结论：从定义的角度来看，这意味着只要从A中（以某种方式）得到B，那么A→B就为真。→-E规则可以看作是一种推论：从（主要的）前提A→B和（次要的）前提A推导出B，就是将A→B视为在给定A时推导出B的许可证。（对于经典逻辑所需的特殊规则，很难适应这个框架，这是我们在引入第7节中进一步讨论的一个问题。）

现在先忽略定义联结词的隐喻（我们将在第 7 节回到这个问题），这里有一个形式上的要点。在构建推导时，如果使用引入规则得到一个带有特定主算符的公式，然后将该公式作为（主要的）前提应用相应的消去规则，那么在论证中就产生了一个可避免的“绕道”。在许多情况下很容易看出这个绕道是可以避免的：以这种方式使用∧-E 只是获得了（第二份）已经存在的公式，可以作为∧-I 的前提。类似地，使用→-I 后使用→-E 可以更直接地获得：次前提是与→-I 子证明的假设相同的公式的出现，因此只需将子证明的步骤作为主要证明的行。

根岑发现这可以推广到直觉逻辑系统。将前面段落中描述的对推导进行“路径修正”的修改（即删除“绕道”的合取或条件，并将前述引入规则的前提作为结论，或通过从引入规则的子证明进行论证获得结论），以及其他运算符的类似修改，称为直接规约。然后，粗略地说，他的结果（现在称为归一化定理）是任何推导都可以通过一系列直接规约转化为正常形式的推导，其中不会将由引入规则得到的公式（的出现）用作消去规则的主要前提。我们在图 6 中给出了直接规约的示例。这是粗略的，因为在涉及子证明的消去规则（∨-E，∃-E）的情况下存在一个令人讨厌的复杂性。

![Fitch style proof link to extended description below](https://plato.stanford.edu/entries/natural-deduction/fitch3a.svg)

(a)

![Fitch style proof link to extended description below](https://plato.stanford.edu/entries/natural-deduction/fitch3b.svg)

(b)

图 6：直接还原的示例。[图 6 的详细描述在附录中。]

有两种复杂形式的变体。(1) 通过引入规则获得一个公式，然后在子证明中重复使用，并将其用作消除规则的主前提：由于∨-E或∃-E的子证明中没有所需的材料（前提、前提、子证明），因此无法进行所需的直接化简。 （请注意，如果我们使用Gentzen风格的自然演绎呈现，这个问题是不会出现的：在Fitch风格的推导中，使用重复来获得公式的第二个副本，而Gentzen风格的推导只是在每个出现的公式上重复整个论证。）解决这个问题的方法在概念上很简单（尽管在某些情况下，它可能会导致总推导大小的增加，因为它可能涉及安装多个副本的许多公式）：不要将公式重复到子证明中，而是重复推导它所需的任何内容，在子证明中通过引入规则推导它，并进行直接化简。(2) ∨-E或∃-E推理的结论，也是子证明的最后一行，是在子证明中通过引入规则获得的，然后在主要推导中用作（主要）前提的消除规则。同样，无法立即简化这个绕道：结论在主要推导中，但其直接推导所需的材料仅在子证明中可用。也许不太明显的是，这种修复方法是有效的，但它在概念上仍然很简单：在子证明中进行第二次消除推理，使其结论成为子证明的最后一行，然后将其结论作为原始结论的替代，成为主要∨-E或∃-E推理的结论。将这种类型的推导修改称为置换化简。 然后，Gentzen 定理的较不粗糙的陈述是，任何推导（在直觉逻辑的自然演绎系统中）都可以通过一系列直接和置换规约转化为正常形式，在正常形式中，没有任何一个公式既是引入规则的结论又是消除规则的主前提。正常形式的推导具有有趣且有用的性质。也许最值得注意的是子公式性质：正常推导中的每个公式都是一个子公式（即与一个未解除的假设或最终结论相同或部分相同）。

![Fitch style proof link to extended description below](https://plato.stanford.edu/entries/natural-deduction/fitch4a.svg)

图 7：置换规约的示例。【图 7 的详细描述在补充材料中。】

作为规范化定理应用的一个例子，正常推导具有子公式性质对于决策问题有着重要影响。在命题逻辑中，初始前提和结论只有有限多个子公式，因此正常推导只能包含有限多个公式的出现。这意味着（通过更多的工作）对于给定前提的给定结论的可能正常推导的大小存在有限的上界，因此命题逻辑（原则上！）可以通过对可能推导的详尽搜索来确定（Gentzen 1934 以这种方式证明了直觉主义命题逻辑的可判定性，而不是通过自然演绎的规范化来证明）。转向一阶逻辑，正常推导只具有较松的子公式性质：对于每个自由变量，将该自由变量替换为量化变量的实例 F(a)被视为∀xF(x)和∃xF(x)的子公式。当然，一阶逻辑是不可判定的：这表明无法计算出在给定长度的有效公式的证明中∀-I 或∃-E 子证明中需要出现的量化实例的不同数量的上界。

### 5.2 规范化的证明

从 Gentzen（1934）可以清楚地看出，他意识到了归一化定理，但他没有发表证明，甚至没有给出一个精确的表述。原因似乎是他对于证明经典逻辑的自然演绎系统的类似结果感到绝望，因此他发展了他的序列演算系统。对于这些系统，他能够证明经典和直觉主义变体（他的 Hauptsatz）的一个类似于归一化定理的结果，并且对于一些相同的应用是有用的。归一化定理的证明最终由 Prawitz（1965）发表，但事实证明 Gentzen 自己在 1933 年写出了一份详细的证明，与 Prawitz 给出的证明非常相似。Jan von Plato 发现了 Gentzen 的手稿并将其发表（von Plato 2008）。（Gentzen 对于证明的呈现非常清晰，并且显示出强烈的视觉想象力：阅读起来非常愉快。）

### 5.3 一个变体逻辑

在继续讨论像经典逻辑这样困难的事情之前，值得给出一个例子来说明这些思想如何可以被概括。在 1949 年的 Nelson 中，David Nelson 提出了一种直觉逻辑的变体，与 Heyting 在积极的连接词和量词上达成一致，但具有不同的否定运算符。（一些后来的逻辑学家在考虑同时使用两个运算符的系统时，将 Nelson 的否定称为“强否定”。）如果我们允许在 Fitch 的风格中引入和消除否定，那么可以很容易地为 Nelson 的逻辑制定自然演绎规则。否定的否定引入和消除允许从 A 推导出¬¬A，反之亦然。否定→规则允许将¬(A→B)视为(A∧¬B)。否定（合取、析取、全称量词、存在量词）规则与通常的（析取、合取、存在量词、全称量词）规则相对应：例如，可以通过¬∧-I 从¬A 或¬B 推导出¬(A∧B)，并且可以通过¬∧-E 从三个项中推导出¬(A∧B)：¬(A∧B)，一个子证明，在该子证明中，C 是从假设¬A 推导出的，以及一个子证明，在该子证明中，C 是从假设¬B 推导出的。由于任何运算符的负 Int-Elim 规则对是以与某个运算符的（普通）Int-Elim 规则类似的方式相关联的，所以形式证明中的绕道可以以类似于 Gentzen 对标准直觉逻辑的规约的方式进行简化。因此，可以以与标准逻辑相同的方式证明归一化定理。与标准逻辑中的归一化推导不完全相同（归一化 Nelson 推导的每个公式都将是最终结论或某个前提的弱子公式，即，要么是一个子公式，要么是一个子公式的否定），但对于许多技术应用来说足够接近。

### 5.4 经典逻辑中的归一化

通常，经典逻辑的自然演绎系统是通过在直觉主义逻辑的自然演绎系统中添加一个额外的经典化规则来构建的：可以添加各种可能的规则。在经典自然演绎中，可以进行直接和置换的简化，但还有另一种情况需要考虑：一个逻辑复杂的公式可能通过经典化规则得出，并被用作消去规则的主前提。如果这个公式比最终结论或推导的任何前提都更复杂，那么它的使用在直观上看起来就像是直觉推导的规范化所消除的那些“绕道”。更糟糕的是，如果我们允许这样的绕道，我们将失去规范化定理在技术应用中所必需的对推导复杂性的“控制”。因此，在经典逻辑的自然演绎中，一个正常的推导应该被定义为一个不使用引入规则的结论作为消去规则的主前提（与之前相同），并且不使用经典化规则得到的公式作为消去规则的主前提。根特森似乎认为，没有一种简化过程可以将经典系统中的任意推导转化为这种类型的正常推导。（可能是他设想的特定经典化规则（见注23）使这比其他表述更困难。）

Prawitz（1965 年）证明了一个经典自然演绎系统的归一化定理，该系统使用了一组减少的逻辑运算符。（他省略的运算符∨和∃可以在经典逻辑中用其他运算符来定义，因此 Prawitz 的结果对某些应用来说足够强大。）后来的几位作者证明了带有所有常规运算符的经典逻辑的归一化结果，但受到各种限制。因此，当 von Plato 和 Siders（2012 年）能够对包括所有常规运算符的经典逻辑系统给出一个非常简单的归一化定理的证明时，这对逻辑学界来说是一个惊喜。

对于 von Plato 和 Siders 的归一化结果，我们将选择作为我们的经典化规则的间接证明原则：在一个子证明中，假设为¬A，有一对矛盾的公式 B 和¬B，可以断言一个公式 A。然后，归一化的可能性取决于我们能否修改推导以消除通过间接证明获得公式 C 并将其用作消去规则的（主要）前提来获得另一个公式 D 的情况：我们可以将这样的推导中的操作称为“经典化的绕道”。图 8 中有相关示例。

![Fitch style proof link to extended description below](https://plato.stanford.edu/entries/natural-deduction/fitch5.svg)

图 8：经典化的示例。[图 8 的详细描述在附录中。]

（根据细节，新的子证明中可能需要进一步简化。）为了避免这样的绕道，我们改用间接证明来获得 D。这个修复，一个经典化的简化，类似于上面讨论的置换简化。新的间接证明子证明将以¬D 作为其假设；由于 D 可以立即从 C 中推导出来（通过消除规则！），我们可以使用¬-Int 来推断¬C，之后原始子证明的论证将产生矛盾。

在规范化整个推导时，我们可以从最深嵌套的经典化绕道开始攻击（在其（原始的）间接证明子证明中不再出现进一步的经典化绕道），然后向外工作。将这个与之前的简化应用结合起来，不难看出整个推导可以转换为正常形式。经典逻辑中的正常推导只具有在第 5.3 节中提到的与 Nelson 的直觉逻辑变体相关的弱（但仍然有用！）子公式属性。

鉴于冯·普拉托和西德斯技术的简单性，令人惊讶的是发现自然演绎规范化方法花费了如此长的时间。也许障碍是心理上的：直观上明显的部分是根据 Gentzen/Prawitz 对直觉主义逻辑的规范化的直接规约，而置换规约则被视为令人讨厌的技术细节，只需要一些规则。因此，也许逻辑学家没有发现更普遍地使用置换式规约是很自然的。在这方面，冯·普拉托（2001）曾经使用过具有所谓一般消除规则的系统，这可能是有意义的。在这里，其他消除规则被更符合∨-E 精神的规则所取代：结论（不必是（主要）前提的直接子公式）在一个子证明中推导出来，该子证明具有足够的假设，以通过相应的引入规则获得该前提，并且通过子证明的存在被认为在主要证明中得到证实。当然，这不是一个逻辑上必要的先决条件——规范化对于具有一般规则的经典自然演绎和我们所看到的更标准的经典自然演绎的表述都成立——但从心理学上讲，这可能使人们很容易看到问题如何解决。

所描述的规范化证明，依赖于按照一定顺序应用各种规约，细节上有一定的复杂性，但在概念上是基本的：它们（就像 Gentzen 在 1934 年关于序列演算的 Hauptsatz 的证明一样）在希尔伯特计划的意义上是有限的。（Gentzen 在 Gentzen（1934）的最后一节中从 Hauptsatz 中推导出的推论，虽然是在哥德尔的不完全性定理之后发表的，但可以看作是希尔伯特计划的成功之一。）

描述的定理，取决于规约的应用顺序，有时被称为弱规范化定理。还有强规范化定理，即任何推导都可以通过任意顺序的规约应用转化为正常形式的推导（Prawitz 1971）。它们的证明必然较为复杂。这些定理及其证明中使用的方法类似于λ演算背景下所称的“可规范化”定理（详细讨论可参见 Troelstra＆Schwichtenberg 1996）。还有较弱的定理，称为正常形式定理，它陈述了对于任何推导，都存在一个具有相同结论和前提的正常形式推导，但并未说明如何将非正常推导转化为正常推导。这样的定理可以通过语义方法证明，例如通过证明限制在正常推导上的系统的完备性。

## 6. 自然演绎系统用于模态逻辑和其他逻辑

自然演绎系统最初由 Gentzen 和 Jaśkowski 用于直觉主义和经典的一阶逻辑：这是在形式化直觉主义和经典数学理论中所需的逻辑框架。然而，这些技术可以推广到广泛的其他逻辑。我们将简要介绍其中的一些扩展。

历史上最早的似乎是自然演绎系统用于模态逻辑。在熟悉的模态逻辑中，必然性和可能性运算符的逻辑行为与全称量词和存在量词的逻辑行为有深刻的类比。（当然，这就是使得“可能世界”语义对于模态性质的解释——其中命题的必然性被解释为其在某个“世界”范围的每个成员中成立，而其可能性被解释为其在至少一个成员中成立——如此自然的原因。）然后，模态运算符的引入和消去规则可以以类似于量词的方式来表述。至于必然性的消去规则和可能性的引入规则（至少对于命题模态逻辑来说……）很容易：必然的是真实的，真实的是可能的。对于必然性的引入，我们可以有这样的规则：在一个子证明（一种特殊类型的子证明，在Fitch的术语中称为严格子证明）中出现A后，可以断言□A：对于不同模态逻辑的表述，对这些特殊子证明的重述会有一些限制。（直观地说，根据可能世界的语义解释，这个想法是在子证明开始之前断言的东西只有在其真实性不依赖于实际世界的任何特殊特征时才能重述到其中。）类似地，可能性的消去将模仿∃-消去的形式：对于至少一些公式B，在具有A作为假设并包含B的严格子证明的情况下，可以从♢A推导出B，但是B必须满足类似于允许公式重述到严格子证明中的条件的复杂性。（对于许多模态逻辑来说，最简单的表述条件的方法是使B在事后适当，如果B的形式是♢C，那么它可以在♢A和一个包含A作为假设且C出现的严格子证明之后断言。）) Fitch (1952)为 S4 和 T 这样的模态逻辑定义了这样的系统。（他在书中没有给出 T 的名称，只描述了该系统“类似于 S2”。）Curry (1950)和 Curry (1963)更详细地给出了 S4 的类似规则，采用了 Gentzen 风格而不是 Fitch 风格的自然演绎呈现。Fitch (1966)给出了各种命题模态逻辑的形式化表述；Fitting (1983)是对各种模态自然演绎系统及其元理论性质的全面研究。

这些模态系统易于使用，并且已经包含在一些哲学本科教材中。然而，它们通常不如一阶逻辑的自然演绎系统优雅。经典逻辑的自然演绎规则支持两个量词的互定义：通过使用量词和否定规则，∀xA(x)和∃xA(x)可以被证明等价于¬∃x¬A(x)和¬∀x¬A(x)；当一个量词以另一个量词的定义方式定义时，可以通过使用否定规则和另一个量词的规则来推导出该量词的规则。对于大多数模态自然演绎系统，类似的结果并不成立，等价性必须特别假定。同样，通过使用存在量词和析取的规则，可以从∃x(A(x)∨B(x))推导出∃xA(x)∨∃xB(x)，但是对于模态自然演绎，♢-E 的限制通常会阻止类似的推导。对于一些模态自然演绎系统，已知有归一化定理，但通常它们不如一阶逻辑的类似结果强：有时，归一化推导的子公式性质要求将有限数量的模态运算符前缀添加到一个公式中，将其视为其“荣誉”子公式之一。

进一步地，至少可以为相关逻辑系统的片段提供非常漂亮的自然演绎系统。在这些逻辑的文献早期，这些系统的自然性被提出作为逻辑自然性的证据（参见安德森1960年；安德森和贝尔纳普1962b年；安德森和贝尔纳普1962b年的一些重新排列，被收录在安德森和贝尔纳普1975年的第1章中）。相关逻辑的关键联结词是蕴涵：蕴涵或相关蕴涵。这些联结词的自然演绎规则是标准条件规则的修改：→-E规则的通常假设前提和→-I规则的变体（在安德森和贝尔纳普1962b年中，借助简单而优雅的符号表示）确保→-I子证明的假设前提实际上在推导出结论时被使用。安德森和贝尔纳普（1962b年）定义的纯蕴涵系统非常优雅，并且基于它们的概念论证令人印象深刻！标准相关逻辑的另一个片段具有量词和“布尔”运算符¬、∧和∨，但缺少特征→运算符，也有一个很好的自然演绎公式：在§5.3中提到的量词和布尔运算符的正负规则，但省略了其¬-E规则的ex falso quodlibet版本（相关逻辑的命题部分在安德森和贝尔纳普1962a年中讨论，该部分被收录在安德森和贝尔纳普1975年的第3章中）。不幸的是，完整的相关逻辑的自然演绎系统需要规则和限制，这可能被许多人视为特别的。

类似的技术可以根据 Restall（2000）的观点，用于其他次结构逻辑的表述。相关逻辑是缺乏稀疏性质的逻辑的例子：也就是说，缺乏如果Γ⊢B，则Γ,A⊢B 的原则。非收缩逻辑——即从(A→(A→B))推导到(A→B)被拒绝的逻辑——可以通过对假设使用次数的限制来捕捉。（无收缩和无稀疏逻辑的表述，作为类似于 Gentzen 的 LJ 和 LK 的序列演算，省略或限制了“结构”规则的收缩和稀疏：因此得名“次结构逻辑”。有关次结构逻辑的背景，请参见 Restall 2018。）

然后有非分配逻辑，其中从(A∧(B∨C))推导到((A∧B)∨(A∧C))被拒绝：这样的逻辑被提出作为量子逻辑。这样的逻辑的自然演绎系统（基于 Lemmon（1965）中使用的序列自然演绎形式，尽管也可能有 Fitch 风格的版本）在教材 Gibbins 1987 中给出。

## 7. IntElim 和一些可能的哲学后果

自然演绎系统的某些特征被认为比仅仅在有效和明晰的形式中组织和展示逻辑系统的推导更具有一般哲学意义。在这里，我们讨论了两个领域，其中每个连接词的引入和消除规则的思想回响到其他主题的哲学辩论中。

### 7.1 作为逻辑的正确观点的 IntElim

正如我们上面提到的，Gentzen 将他的规则集组织成引入规则和消除规则。他还指出，引入规则“像”是将某个东西（即具有给定主连接词的句子）引入证明中，而相应的消除规则“像”是将复杂的句子简化为（至少是其中之一）其组成部分。这是逻辑规则的 Int-Elim 组织的理想。对于一些人来说，这是逻辑应该具备的理想，并且根据一些人的观点，这给出了关于什么是唯一真正的逻辑的重要线索。Gentzen（1934）表明他的直觉逻辑的制定具有这个特征，但显然认为经典逻辑所需的额外规则或公理没有表现出这个属性。（或者至少，不是直接的。）这导致了许多逻辑哲学家，特别是 Michael Dummett（1977 年，1975 年[1978 年]，1991 年；以及他其他的作品），声称直觉主义是唯一真正的逻辑。（有关此问题的进一步评论，请参见 Schroeder-Heister 2018；Steinberger 2011 以及 Shapiro＆Kouri Kissel 2021 的最后一节。有关该主张的生动辩护，请参见 Read 2006。）

然而，对于 IntElim 规则的优越性的主张似乎对一些人来说要么站不住脚，要么可能是循环的。考虑一下 Prior（1960）提出的一种新的二元连接词 TONK 的情况，其（完整的）含义是通过引入规则来给出的：从ϕ推导出（ϕ TONK ψ），以及消除规则：从（ϕ TONK ψ）推导出ψ。如果逻辑规则仅仅是根据一些引入和一些消除条件来给出的话，那么 TONK 刚刚得到了一个适当的 Int-Elim 定义。但正如 Prior 所指出的，这个新的连接词使逻辑变得更加“平等”……也许太平等了！

Prior 的文章引发了大量的回应，其中许多出现在 Analysis 的早中期的页面上。其中最好的回应可能是 Belnap（1962）的回应，他认为“在语言中的意义”不仅仅涉及提供一个带有一些引入规则和一些消除规则的连接词：所提出的连接词还需要能够“适应”语言的其他方面。此外，而且重要的是，Int-Elim 理想要求消除规则仅仅需要“撤销”引入规则的效果。但是 TONK-E 规则显然做了更多的事情。

根据这种观点，如果引入规则和消除规则要“互为镜像”，以便连接词的消除规则仅仅是“对于引入连接词的定义所产生的结果”，那么 TONK 的消除规则将需要以下一对规则，TONK-Elim-Left 和 TONK-Elim-Right：

![Gentzen style proof link to extended description below](https://plato.stanford.edu/entries/natural-deduction/prooftree2a.svg)

(a)

![Gentzen style proof link to extended description below](https://plato.stanford.edu/entries/natural-deduction/prooftree2b.svg)

(b)

图 9 [图 9 的详细描述在附录中。]

毕竟，TONK-E 规则被认为是从(A TONK B)推出 B 的，但是考虑到 TONK-I 规则仅仅是从前一个公式 A 引入(A TONK B)公式，显然——如果我们要尊重消除操作只有“撤销”引入规则的效果的观点——我们需要确保 A 已经蕴含了 B。

同样可以保持消除规则最初的陈述方式——从(A TONK B)推导出 B——但是改变引入规则，以确保消除操作不会添加任何新信息[24]：

![Gentzen style proof link to extended description below](https://plato.stanford.edu/entries/natural-deduction/prooftree3.svg)

图 10 [图 10 的详细描述在附录中。]

大多数相关理论家现在将这个特征的概括称为“和谐”（见 Read 2004；Steinberger 2011 等等，进行讨论）。正如我们已经提到的，许多人声称这是逻辑规则的“正确”形式：它是描述逻辑联结词的“意义”以及对“唯一真正的逻辑”的限制的关键，即所有的逻辑联结词都必须体现这个特性。因此，许多理论家声称直觉主义逻辑是唯一真正的逻辑。（有关这个问题的强烈表达意见的例子，请参见 Read 2006、2008、2010。）

对于和谐是一个合适的逻辑的核心特征的思考，可能面临着严重的挑战。对于身份的引入和消除规则通常如图 11 所示。

![Gentzen style proof link to extended description below](https://plato.stanford.edu/entries/natural-deduction/prooftree4a.svg)

(a)

![Gentzen style proof link to extended description below](https://plato.stanford.edu/entries/natural-deduction/prooftree4b.svg)

(b)

图 11：传统的身份 IntElim 规则。[图 11 的详细描述在补充中。]

这个=-E 规则如何在这里“逆转效果”并不明显。

早期提出的一个回答是在 Read（2004）中提出的，通过不可辨性来定义身份：∀F((Fa↔Fb)↔a=b)。这可以以直觉主义规则对形式化，如图 12 所示。但是，当然，为了使=-I 规则正确地反映不可辨性原则的二阶量化，F 需要是“真正的任意”（也许是：一个在除了当前假设之外的任何假设中都不出现的一元谓词）。另一方面，=-E 规则中的 F 是语言中的任何一元谓词。关于这个主题有大量的文献，其中很多都集中在是否合法地将二阶逻辑的特征纳入所需的方式中。

![Gentzen style proof link to extended description below](https://plato.stanford.edu/entries/natural-deduction/prooftree5a.svg)

(a)

![Gentzen style proof link to extended description below](https://plato.stanford.edu/entries/natural-deduction/prooftree5b.svg)

(b)

图 12：Read（2004）关于身份的不可辨识性 IntElim 规则。【图 12 的详细描述在附录中。】

除了上面引用的作品，还可以参考 Griffiths 2014；Klev 2019；Kremer 2007；Read 2016。

### 7.2 逻辑学与语言和形而上学的关系

和谐的 Int-Elim 规则的总体图景不仅推动了一个关于“唯一真正的逻辑”（如 Read 2006 中所述）的理论，而且也为一种关于“语义学”的理论提供了支持（既包括形式逻辑的语义学，也包括自然语言使用的语义学），这种理论被称为推理主义。正如 Read（2010: 558）所说，

> 传统上，语义学是指表示和表示的，包括从表达式到某些对象范围的同态估值。这种方法存在本体论爆炸的风险，首先是在将空名称、谓词、连词、介词等的指称化，然后是在寻找非实际事态形式的假命题的值。它也是回归的，因为现在需要一个标准来确定哪些非实际事态是可能的，这只是重复了最初的问题。谈论可能世界是一个有吸引力的隐喻，但在哲学上几乎没有用处，却造成了很多伤害。
>
> 相比之下，推理主义在本体论上是中立的。如果存在规则来管理它们的使用，那么表达式就是有意义的，特别是逻辑表达式通过引入规则赋予了意义，这些规则指定了包含它们的命题断言的依据，并通过消除规则从这些断言中推理出结论。

上述作品关注于在逻辑中引入联结词，这是“自然演绎系统”条目中适当的。但正如 Read（2010）指出的那样，这种一般观点与在语言哲学中占主导地位的“意义使用理论”是一致的。[25] 这里的推理链似乎是（类似于）：

1. 形式逻辑系统最好以其自然演绎形式化来描述。
2. 最好的自然演绎形式化是通过一组 Int-Elim 规则来实现的，这些规则将引导我们证明的可归一化，并显示其形式化的和谐。
3. 鉴于这种 Int-Elim 规则在形式推导中的操作方式，它们应该被组织成和谐的配对。而且很明显，这确定了这些联结词的全部含义。
4. 这不仅适用于逻辑系统中联结词的含义，而且更广泛地适用于与这些逻辑运算符相对应的自然语言术语的含义：它们的含义也完全由这些 Int-Elim 规则给出。
5. 因此，可以合理地假设与引入和消除相关的特征应该是任何（和所有）自然语言含义的全部含义。

这种从逻辑到自然语言意义的论证让人想起了滑坡推理：它可能在滑动点的任何一个地方受到质疑。例如，有人可能争辩说，没有真正的理由（除了试图建立关于自然语言意义的总体结论之外）优先选择自然演绎系统而不是弗雷格-希尔伯特公理系统。或者有人可能指出逻辑系统（以及其中使用的推理）与自然语言（以及自然语言所适用的各种用途）之间存在所谓的“巨大鸿沟”。尽管如此，这个项目似乎不仅可能而且是一条直接正确的研究路径。

这个想法在非正式方面的一些工作由布兰多姆（1994 年，2000 年）在“推理主义”这个标题下进行了阐述；在更正式的方面，法兰兹（2015 年，2021 年）在“证明论语义学”这个标题下进行了阐述。杜梅特（1973 年，1977 年，1978 年，1991 年）为这个观点的正式方面和非正式方面都进行了论证，这在逻辑系统和自然语言中推理规则和谐概念的当前兴趣中起到了很大的启发。

> 杜梅特（1973 年：453）：学会使用给定形式的陈述涉及学习两件事：在什么条件下可以正当地进行陈述；以及什么构成了对其接受的认可，即接受它的后果。
>
> Brandom (2000: 63): 对于命题内容的引入规则对应于断言它的充分条件的集合，而消除规则对应于断言它的必要后果的集合，也就是从这样做中得出的结论。

Francez (2021: 55–6) 将证明论语义（PTS）的目标表述如下（原文中的斜体和粗体）：

> 作为一种关于意义的理论，PTS 计划可以描述如下：...通过在“专用”的自然演绎证明系统中将句子的意义作为规范性可导出条件来取代接受的将句子意义作为真值条件的方法...证明系统应该反映句子的“使用”（它们的推理角色）...，并且应该允许恢复句子意义的预理论属性，如蕴涵和推理的结果...这样的系统有两种规则：引入规则和消除规则。

直觉主义（逻辑）的一个特征是否定双值律，并且其特征是否定(p∨¬p)等公式的真实性。直觉主义对定理性的解释被称为可证性，可能既不可证明 p 也不可证明¬p，因此(p∨¬p)不应该是可证明的。在邓美特的版本中，可证性约束被合理断言所取代...这又基于一些规则，这些规则使得我们在对话中引入某些语言片段时能够被证明合理，并且这些规则证明了对该片段的利用（“利用”是讨论自然语言中“消除”逻辑运算符时使用的标准术语）。这类理论家的集结呼声可能是

> 任何术语、短语或语言项目的意义仅由引入这种项目到论述中的规则集以及一旦引入后利用它们的规则来给出。

从这个集结呼声可以看出与其他关于意义的观点之间的联系，比如“不要问意义，问用法”，或者“语言游戏的规则决定并完全描述了语言项目的意义是什么”。

迈克尔·达姆特将“使用”讨论转化为一种形而上学立场。（尤其参见达姆特 1991 年；但这是基于达姆特 1977 年[e.g., p. 682]，甚至达姆特 1973 年[e.g., p. 377]以及他的其他许多作品。）基本思想似乎是这样的：直觉主义在逻辑学上主张通过使用联结词的规则来给出意义。另一方面，经典逻辑则假设存在一个预先给定的指称和指定的概念，使用 TRUE 和 FALSE 等概念。他说，这意味着经典逻辑将致力于一种有害的“意义整体主义”，使语言学习变得不可能。（对一些人来说，达姆特认为具有参照和指示的意义前提的经典逻辑致力于“总体意义整体主义”似乎是违反直觉的，因为这是对意义即使用理论的更常见的批评。但这确实是他的观点，正如达姆特（1975 年[1978]）及其他地方所阐述的。）由此产生的教义被达姆特称为反实在论，并意味着没有“现实主义”的事实或项目来支持逻辑操作的正确性。只有“学习社区如何使用相关术语”。

这是达姆特从“显现准则”中得出的论证：语言学习者必须有某种方式能够使用语言术语（首先是学习表达逻辑概念的术语）-必须有某种在他们（语言学习）经验中显现的准则。达姆特声称这是经典语义理论失败的地方：除非采用一种全面的意义整体主义，否则无法做到这一点，因为除了语言本身之外，无法访问独立的语义领域。

Dummett的反实在论版本的文献非常丰富。Michael（1999）对Dummett（以及他的一些批评者）关于“显现准则”的思想进行了早期而深刻的批评，他认为经典逻辑实际上并不致力于完全的意义整体主义，而只是无害的“分子意义整体主义”。对于对实在论和反实在论的一般讨论以及与当前小节相关的特定语言方面，感兴趣的读者可以参考Khlentzos（2021）的第3节。

## Bibliography

* Anderson, Alan Ross, 1960, “Completeness Theorems for the Systems E of Entailment and EQ of Entailment with Quantification”, *Zeitschrift für Mathematische Logik und Grundlagen der Mathematik*, 6(7–14): 201–216. doi:10.1002/malq.19600060709
* Anderson, Alan Ross and Nuel D. Belnap, 1962a, “Tautological Entailments”, *Philosophical Studies*, 13(1–2): 9–24. doi:10.1007/BF00818100
* –––, 1962b, “The Pure Calculus of Entailment”, *Journal of Symbolic Logic*, 27(1): 19–52. doi:10.2307/2963676
* –––, 1975, *Entailment: The Logic of Relevance and Necessity, Volume 1*, Princeton, NJ: Princeton University Press.
* Avigad, Jeremy and Richard Zach, 2020, “The Epsilon Calculus”, *The Stanford Encyclopedia of Philosophy* (Fall 2020), Edward N. Zalta (ed.). URL = <https://plato.stanford.edu/archives/fall2020/entries/epsilon-calculus/>
* Belnap, Nuel D., 1962, “Tonk, Plonk and Plink”, *Analysis*, 22(6): 130–134. doi:10.1093/analys/22.6.130
* Brandom, Robert, 1994, *Making It Explicit: Reasoning, Representing, and Discursive Commitment*, Cambridge, MA: Harvard University Press.
* –––, 2000, *Articulating Reasons: An Introduction to Inferentialism*, Cambridge, MA: Harvard University Press.
* Cellucci, Carlo, 1992, “Existential Instantiation and Normalization in Sequent Natural Deduction”, *Annals of Pure and Applied Logic*, 58(2): 111–148. doi:10.1016/0168-0072(92)90002-H
* –––, 1995, “On Quine’s Approach to Natural Deduction”, in *On Quine: New Essays*, Paolo Leonardi and Marco Santambrogio (eds.), Cambridge: Cambridge University Press, 314–335.
* Copi, Irving, 1954, *Symbolic Logic*, New York: Macmillan Co.
* Curry, Haskell, 1950, *A Theory of Formal Deducibility*, Notre Dame, IN: University of Notre Dame Press.
* –––, 1963, *Foundations of Mathematical Logic*, New York: McGraw-Hill.
* D’Agostino, Marcello, Dov Gabbay, and Sanjay Modgil, 2020, “Normality, Non-Contamination and Logical Depth in Classical Natural Deduction”, *Studia Logica*, 108(2): 291–357. doi:10.1007/s11225-019-09847-4
* Došen, Kosta and Miloš Adžić, 2018, “Gödel’s Natural Deduction”, *Studia Logica*, 106(2): 397–415. doi:10.1007/s11225-017-9744-x
* Dummett, Michael, 1973, *Frege: Philosophy of Language*, Cambridge, MA: Harvard University Press.
* –––, 1975 [1978], “The Philosophical Basis of Intuitionistic Logic”, in *Logic Colloquium ’73*, H. E. Rose and J. C. Shepherdson (eds.), (Studies in Logic and the Foundations of Mathematics 80), New York: Elsevier, 5–40. Reprinted in his *Truth and Other Enigmas*, London: Duckworth, 1978, 215–247. doi:10.1016/S0049-237X(08)71941-4
* –––, 1977, *Elements of Intuitionism*, Oxford: Clarendon Press.
* –––, 1991, *The Logical Basis of Metaphysics*, Cambridge, MA: Harvard University Press.
* Fine, Kit, 1985a, “Natural Deduction and Arbitrary Objects”, *Journal of Philosophical Logic*, 14(1): 57–107. doi:10.1007/BF00542649
* –––, 1985b, *Reasoning with Arbitrary Objects*, Oxford: Blackwell.
* Fitch, Fredric, 1952, *Symbolic Logic: An Introduction*, New York: Ronald Press.
* –––, 1966, “Natural Deduction Rules for Obligation”, *American Philosophical Quarterly*, 3(1): 27–28.
* Fitting, Melvin, 1983, *Proof Methods for Modal and Intuitionistic Logics*, Dordrecht: Reidel. doi:10.1007/978-94-017-2794-5
* Francez, Nissim, 2015, *Proof-Theoretic Semantics*, London: College Publications.
* –––, 2021, “Proof-Theoretic Semantics for Natural Language”, *Topoi*, 40: 55–69. doi:10.1007/s11245-019-09662-5
* Freund, Max A., 2019, *The Logic of Sortals: A Conceptualist Approach*, (Synthese Library, 408), Cham: Springer International Publishing. doi:10.1007/978-3-030-18278-6
* Garson, James, 2021, “Modal Logic”, *The Stanford Encyclopedia of Philosophy* (Summer 2021), Edward N. Zalta (ed.). URL = <https://plato.stanford.edu/archives/sum2021/entries/logic-modal/
* Gentzen, Gerhard, 1934, “Untersuchungen über das logische Schließen. I & II”, *Mathematische Zeitschrift*, 39: 176–210 and 405–431. doi:10.1007/BF01201353 doi:10.1007/BF01201363. English translation “Investigations into Logical Deduction”, *American Philosophical Quarterly*, 1: 288–306 (1964), and 2: 204–218 (1965).
* –––, 1936, “Die Widerspruchsfreiheit der reinen Zahlentheorie”, *Mathematische Annalen*, 112: 493–565. doi:10.1007/BF01565428. English translation “The Consistency of Elementary Number Theory”, in M. E. Szabo (ed.) *The Collected Papers of Gerhard Gentzen*, North-Holland, Amsterdam, pp. 132–213 (1969).
* Gibbins, Peter, 1987, *Particles and Paradoxes: The Limits of Quantum Logic*, Cambridge: Cambridge University Press.
* Griffiths, Owen, 2014, “Harmonious Rules for Identity”, *The Review of Symbolic Logic*, 7(3): 499–510. doi:10.1017/S1755020314000161
* Hailperin, Theodore, 1957, “A Theory of Restricted Quantification, I and II”, *Journal of Symbolic Logic*, 22(1): 19–35 and 22(2): 113–129. doi:10.2307/2964055 doi:10.2307/2964173
* –––, 1960, “Corrections to a Theory of Restricted Quantification”, 25(1): 54–56. doi:10.2307/2964337
* Hazen, Allen, 1987, “Natural Deduction and Hilbert’s ϵ-Operator”, *Journal of Philosophical Logic*, 16(4): 411–421. doi:10.1007/BF00431186
* Hazen, Allen P. and Francis Jeffry Pelletier, 2014, “Gentzen and Jaśkowski Natural Deduction: Fundamentally Similar but Importantly Different”, *Studia Logica*, 102(6): 1103–1142. doi:10.1007/s11225-014-9564-1
* Jaśkowski, Stanisław, 1934, “On the Rules of Suppositions in Formal Logic”, *Studia Logica* (First Series), 1(1): 5–32. Reprinted in S. McCall (1967) *Polish Logic 1920–1939*. Oxford University Press, Oxford. pp. 232–258.
* Kalish, Donald and Richard Montague, 1964, *Logic: Techniques of Formal Reasoning*, New York: Harcourt, Brace, World.
* Khlentzos, Drew, 2021, “Challenges to Metaphysical Realism”, *The Stanford Encyclopedia of Philosophy* (Spring 2021), Edward N. Zalta (ed.). URL = <https://plato.stanford.edu/archives/spr2021/entries/realism-sem-challenge/>
* Klev, Ansten, 2019, “The Harmony of Identity”, *Journal of Philosophical Logic*, 48(5): 867–884. doi:10.1007/s10992-018-09499-0
* Kremer, Michael, 2007, “Read on Identity and Harmony: A Friendly Correction and Simplification”, *Analysis*, 67(2): 157–159. doi:10.1093/analys/67.2.157
* Lemmon, E. John, 1965, *Beginning Logic*, London: Nelson.
* Mancosu, Paolo, Sergio Galvan, and Richard Zach, 2021, *An Introduction to Proof Theory: Normalization, Cut-Elimination, and Consistency Proofs*, Oxford: Oxford University Press.
* Mares, Edwin, 2020, “Relevance Logic”, *The Stanford Encyclopedia of Philosophy* (Winter 2020), Edward N. Zalta (ed.). URL = <https://plato.stanford.edu/archives/win2020/entries/logic-relevance/>
* Mates, Benson, 1965, *Elementary Logic*, New York: Oxford University Press.
* Michael, Michaelis, 1999, “Dummett’s Argument against Classical Logic”, *Philosophia*, 27(3–4): 359–382. doi:10.1007/BF02383185
* Moschovakis, Joan, 2018, “Intuitionistic Logic”, *The Stanford Encyclopedia of Philosophy* (Winter 2018), Edward N. Zalta (ed.). URL = <https://plato.stanford.edu/archives/win2018/entries/logic-intuitionistic/>
* Nelson, David, 1949, “Constructible Falsity”, *Journal of Symbolic Logic*, 14(1): 16–26. doi:10.2307/2268973
* Nolt, John, 2020, “Free Logic”, *The Stanford Encyclopedia of Philosophy* (Winter 2020), Edward N. Zalta (ed.). URL = <https://plato.stanford.edu/archives/win2020/entries/logic-free/>
* Pelletier, Francis Jeffry, 1999, “A Brief History of Natural Deduction”, *History and Philosophy of Logic*, 20(1): 1–31. doi:10.1080/014453499298165
* Pelletier, Francis Jeffry and Allen P. Hazen, 2012, “A Brief History of Natural Deduction”, in Dov M. Gabbay, Francis J. Pelletier, and John Woods (eds.), *Handbook of the History of Logic; Vol. 11: A History of Logic’s Central Concepts*, Amsterdam: Elsevier, 341–414.
* von Plato, Jan, 2001, “Natural Deduction with General Elimination Rules”, *Archive for Mathematical Logic*, 40(7): 541–567. doi:10.1007/s001530100091
* –––, 2008, “Gentzen’s Proof of Normalization for Natural Deduction”, *Bulletin of Symbolic Logic*, 14(2): 240–257. doi:10.2178/bsl/1208442829
* von Plato, Jan and Annika Siders, 2012, “Normal Derivability in Classical Natural Deduction”, *The Review of Symbolic Logic*, 5(2): 205–211. doi:10.1017/S1755020311000311
* Prawitz, Dag, 1965, *Natural Deduction: A Proof-Theoretical Study*, Stockholm: Almqvist & Wicksell.
* –––, 1971, “Ideas and Results in Proof Theory”, in *Proceedings of the Second Scandinavian Logic Symposium*, J. E. Fenstad (ed.), (Studies in Logic and the Foundations of Mathematics 63), Amsterdam: Elsevier, 235–307. doi:10.1016/S0049-237X(08)70849-8
* Prior, Arthur N., 1960, “The Runabout Inference-Ticket”, *Analysis*, 21(2): 38–39. doi:10.1093/analys/21.2.38
* Quine, Willard V., 1950a, *Methods of Logic*, New York: Henry Holt & Co.
* –––, 1950b, “On Natural Deduction”, *Journal of Symbolic Logic*, 15(2): 93–102. doi:10.2307/2266969
* Read, Stephen, 2004, “Identity and Harmony”, *Analysis*, 64(2): 113–119. doi:10.1093/analys/64.2.113
* –––, 2006, “Monism: The One True Logic”, in *A Logical Approach to Philosophy*, David Devidi and Tim Kenyon (eds.), (The Western Ontario Series in Philosophy of Science 69), Dordrecht: Springer-Verlag, 193–209. doi:10.1007/1-4020-4054-7_10
* –––, 2008, “Harmony and Modality”, in *Dialogues, Logics and Other Strong Things: Essays in Honour of Shahid Rahman*, L. Kieff, C. Dégremont, and H. Rückert (eds.), London: College Publications, pp. 285–303.
* –––, 2010, “General-Elimination Harmony and the Meaning of the Logical Constants”, *Journal of Philosophical Logic*, 39(5): 557–576. doi:10.1007/s10992-010-9133-7
* –––, 2016, “Harmonic Inferentialism and the Logic of Identity”, *The Review of Symbolic Logic*, 9(2): 408–420. doi:10.1017/S1755020316000010
* Restall, Greg, 2000, *An Introduction to Substructural Logics*, New York/London: Methuen.
* –––, 2018, “Substructural Logics”, *The Stanford Encyclopedia of Philosophy* (Spring 2018), Edward N. Zalta (ed.). URL = <https://plato.stanford.edu/archives/spr2018/entries/logic-substructural/>
* Routley, Richard and Robert K. Meyer, 1973, “The Semantics of Entailment (I)”, in *Truth, Syntax and Modality*, Hugues Leblanc (ed.), Amsterdam: North Holland, 194–243.
* Schroeder-Heister, Peter, 2018, “Proof-Theoretic Semantics”, *The Stanford Encyclopedia of Philosophy* (Spring 2018), Edward N. Zalta (ed.). URL = <https://plato.stanford.edu/archives/spr2018/entries/proof-theoretic-semantics/>
* Shapiro, Stewart and Teresa Kouri Kissel, 2021, “Classical Logic”, *The Stanford Encyclopedia of Philosophy* (Spring 2021), Edward N. Zalta (ed.). URL = <https://plato.stanford.edu/archives/spr2021/entries/logic-classical/>
* Steinberger, Florian, 2011, “What Harmony Could and Could Not Be”, *Australasian Journal of Philosophy*, 89(4): 617–639. doi:10.1080/00048402.2010.528781
* Suppes, Patrick, 1957, *Introduction to Logic*, Princeton, NJ: Van Nostrand/Reinhold Press.
* Troelstra, Anne Sjerp and Helmut Schwichtenberg, 1996, *Basic Proof Theory*, Cambridge: Cambridge University Press.

## Academic Tools

> | ![sep man icon](../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=natural-deduction). |
> | --- | --- |
> | ![sep man icon](../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/natural-deduction/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=natural-deduction&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](https://philpapers.org/sep/natural-deduction/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* [“Natural Deduction”](https://iep.utm.edu/nat-ded/), *The Internet Encyclopedia of Philosophy*, entry by Andrzej Indrzejczak
* [“Natural Deduction”](https://en.wikipedia.org/w/index.php?title=Natural_deduction&oldid=1048022977), *Wikipedia* entry as of October 2021
* Roy, Tony, 2006, [“Natural Derivations for Priest, An Introduction to Non-Classical Logic”](https://ojs.victoria.ac.nz/ajl/article/view/1779/1630), *Australasian Journal of Logic* 4:47–192; this article provides Fitch-style natural deduction proof methods for systems of many-valued logic and some relevant logics that are described in Graham Priest’s *An Introduction to Non-Classical Logic* (2001, Cambridge: Cambridge University Press)

## Related Entries

[connectives: sentence connectives in formal logic](https://plato.stanford.edu/entries/connectives-logic/) | [epsilon calculus](https://plato.stanford.edu/entries/epsilon-calculus/) | [logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [logic: free](https://plato.stanford.edu/entries/logic-free/) | [logic: intuitionistic](https://plato.stanford.edu/entries/logic-intuitionistic/) | [logic: modal](https://plato.stanford.edu/entries/logic-modal/) | [logic: relevance](https://plato.stanford.edu/entries/logic-relevance/) | [logic: substructural](https://plato.stanford.edu/entries/logic-substructural/) | [proof theory](https://plato.stanford.edu/entries/proof-theory/) | [proof theory: development of](https://plato.stanford.edu/entries/proof-theory-development/)

### Acknowledgments

We'd like to thank Chris Menzel for prompting us to make some improvements to the definition of 'natural deduction' in the main text (so as to better accommodate sequent natural deduction) and to the presentations of some of the Fitch-style proofs.

[Copyright © 2021](https://plato.stanford.edu/info.html#c) by  
[Francis Jeffry Pelletier](http://www.ualberta.ca/~francisp/) <[*francisp@ualberta.ca*](mailto:francisp%40ualberta%2eca)>  
Allen Hazen <[*aphazen@ualberta.ca*](mailto:aphazen%40ualberta%2eca)>
