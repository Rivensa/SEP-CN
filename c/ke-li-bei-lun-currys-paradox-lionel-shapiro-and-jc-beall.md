# 柯里悖论 Curry’s paradox (Lionel Shapiro and Jc Beall)

*首次发表于 2017 年 9 月 6 日星期三；实质性修订于 2018 年 1 月 19 日星期五*

“柯里悖论”是当今哲学家所使用的术语，指的是一系列关于自指或循环的悖论，其现代渊源可以追溯到柯里（1942b）和 Löb（1955）。这些所谓的柯里悖论的共同特征在于它们如何利用蕴涵、推演或后果的概念，无论是以连接词的形式还是以谓词的形式。柯里悖论在许多不同领域中出现。与罗素悖论类似，它可以呈现为集合论或属性理论的悖论。但它也可以呈现为语义悖论，与说谎者悖论密切相关。柯里悖论与罗素悖论和说谎者悖论不同之处在于它并不基本涉及否定的概念。常见的真理理论版本涉及一个句子，该句子自述如果它为真，则任意选择的主张为真，或者——使用一个更险恶的例子——自述如果它为真，则每个虚假都为真。悖论在于这样一个句子的存在似乎暗示了任意选择的主张的真实性，或者——在更险恶的例子中——每个虚假的真实性。在本条目中，我们展示了各种柯里悖论如何构建，审视了可用解决方案的空间，并解释了柯里悖论的重要性以及它提出的独特挑战。

---

## 1. 介绍：悖论的两种伪装

### 1.1 一个非正式的论证

假设你的朋友告诉你：“如果我用这个句子所说的是真的，那么时间是无限的”。事实证明，有一个简短而看似令人信服的论证得出以下结论：

 （P）

你朋友的主张的存在仅仅意味着时间是无限的（或者导致时间是无限的后果）。

许多人认为（P）是难以置信的（在那个意义上是悖论的），即使时间确实是无限的。或者，如果这还不够糟糕，考虑另一个版本，这次涉及一个已知为假的声明。让你的朋友改口说：“如果我用这个句子所说的是真的，那么所有的数字都是质数”。现在，通过相应的变换，同样简短且看似有力的论证得出（Q）：

(Q)

你朋友的断言的存在意味着（或者导致）所有数字都是质数。

这是支持（P）的论点。让 k 是你朋友说的自指句子，稍微简化一下，这样它就变成了“如果 k 是真的，那么时间是无限的”。根据 k 所说的，我们知道这么多：

(1)

在假设 k 为真的情况下，如果 k 为真，则时间是无限的。

但是，当然，我们也有

(2)

在假设 k 为真的情况下，k 为真。

在假设 k 为真的前提下，我们因此推导出一个条件句及其前提。在这个假设的范围内使用假言三段论，我们现在推导出该条件句的结论：

(3)

在假设 k 为真的前提下，时间是无限的。

条件证明规则现在使我们有权肯定一个条件句，其中我们的假设作为前提：

(4)

如果 k 为真，则时间是无限的。

但是，由于（4）就是 k 本身，因此我们有

(5)

 k 为真。

最后，通过假言三段论将（4）和（5）结合起来，我们得到

(6)

 时间是无限的。

我们似乎已经建立了时间是无限的事实，而这并没有超出自指句 k 的存在以及关于真理的显而易见的原则，这些原则将我们带到了（1），也从（4）到（5）。对于（Q）也是一样的，因为我们可以使用相同的论证形式得出错误的结论，即所有数字都是质数。

### 1.2 理论的约束

Curry 悖论带来的一个挑战是要找出上述非正式论证中出了什么问题，导致了（P）、（Q）或类似结论。但从 Curry 1942b 最初的呈现开始（请参阅有关 Curry 悖论的补充文档），对 Curry 悖论的讨论通常有不同的焦点。它涉及各种形式系统，最常见的是集合理论或真理理论。在这种情况下，引发悖论的是系统具有特定特征的证明。通常，问题的关键特征是平凡性。当一个理论肯定了该理论语言中可表达的每个主张时，该理论被称为平凡的，或者绝对不一致的。

证明一个特定形式理论是平凡的论证将会带来问题，如果以下情况之一成立：（i）我们希望在研究中使用这个形式理论，就像我们在进行数学时使用集合理论一样，或者（ii）我们希望使用这个形式理论来模拟语言或思想的特征，特别是某些说话者或思想者所承诺的主张。无论哪种方式，目标理论的平凡性都将表明它不适合其预期的目的。因此，这是 Curry 悖论提出的第二个挑战。

为了阐明 Curry 悖论对理论的限制，我们需要说明 Curry 句是什么。非正式地说，Curry 句是一个根据某个理论的观点，等价于以自身为前提的条件句的句子。例如，我们可以将第 1.1 节的论证视为对真理的非正式理论的吸引力。那么句子“k 是真的”就是该理论的 Curry 句。这是因为，根据我们的非正式理论告诉我们关于 k 的真理涉及什么，"k 是真的" 应该等价于 "如果 k 是真的，那么时间是无限的"（因为这个条件句就是 k 本身）。

在接下来的内容中，符号 ⊢Tα 被用来表示理论 T 包含句子 α，而 Γ⊢Tα 被用来表示根据 T（即根据 T 的推导关系 ⊢T）从 Γ 中收集的前提中得出 α（除了在第 4.2.1 节之外，我们只关心关于根据理论从单个前提得出的主张，即由形式 γ⊢Tα 的句子表达的主张。我们依赖上下文来清楚表明这样的句子是在使用中还是仅仅被提及）。

两个句子（在理论 T 的语言中）将根据 T 被称为可互换，只要对于任何形式为 Γ⊢Tα 的主张，通过在 α 中或在 Γ 中的任何句子中互换一个句子而不受影响。最后，我们假设语言包含一个连接词 →，在某种适当的意义上作为条件句。对于以下定义的目的，我们不对这个条件句的行为做任何具体要求。现在我们可以定义句子-理论对的 Curry 句的概念。

定义 1（Curry 句）设 π 是 T 语言的一个句子。π 和 T 的 Curry 句是任何句子 κ，使得根据 T，κ 和 κ→π 可以互换使用。

Curry 悖论的各种版本源于对以下非常普遍主张的支持。 （这些论证基于对条件→的假设，将在第 3 节中详细讨论。）

令人不安的主张 对于每个理论 T，以及 T 语言中的任何句子 π，如果 π 和 T 存在 Curry 句，则 ⊢Tπ。

一个看似建立了令人困扰的主张的论据，只要有充分的理由相信这个主张是错误的，就会被视为悖论。对于令人困扰的主张的反例将是任何理论 T 和句子 π，使得存在一个关于 π 和 T 的柯里句子，但并非 ⊢Tπ 的情况。

如上所述，柯里悖论通常被理解为对非平凡理论存在性的挑战。根据令人困扰的主张，每当可以为理论语言中的任何句子制定柯里句子时，该理论将是平凡的。事实上，平凡性可以从一个更弱的条件推导出来，以下定义明确说明了这一点。

定义 2（柯里完备理论）理论 T 是柯里完备的，只要对于 T 语言中的每个句子 π，存在某个 π′，使得（i）存在一个关于 π′ 和 T 的柯里句子，以及（ii）如果 ⊢Tπ′ 则 ⊢Tπ。

尽管满足条件(ii)的 π′的一个实例将是 π 本身，另一个实例将是一个“爆炸性”句子 ⊥，只有当每个句子都包含在理论中时，它才包含在理论中。[5]

令人不安的主张现在有一个直接的结果：一个 Curry 完备的理论必须包含其语言中的每个句子。

令人不安的推论 每个 Curry 完备的理论都是平凡的。

再次，任何看似建立令人困扰的推论的论据，只要有充分的理由相信存在着非平凡的理论（确实是真实的理论），就会被视为悖论。

### 1.3 概述

在本条目的其余部分，库里悖论将被理解为对理论施加悖论约束，即上述令人困扰的推论所陈述的约束。以这种方式理解库里悖论的一个版本，涉及做两件事情：

* 认为 T 是 Curry 完备的，对于一些明显非平凡的目标理论 T，并
* 为令人困扰的主张提出论证。[6]

第 2 和第 3 节按照这个顺序讨论这两个任务。目前，基本思想可以通过自指句 k 的例子传达，该句读作“如果 k 是真的，那么时间是无限的”。首先，根据我们对真理的理解，我们认识到句子“k 是真的”可以互换地替换为“如果 k 是真的，那么时间是无限的”。其次，第 1.1 节的非正式论证从这种等价性中得出了一个矛盾的结论。主要对那个论证及相关论证中涉及的逻辑原则以及抵抗这类论证的选择感兴趣的读者，可能希望转到第 3 节。

## 2. 构建咖喱句子

如今标准呈现的方式是，Curry 悖论影响“天真”的真理理论（其中包括“透明”的真理谓词）和“天真”的集合理论（其中包括无限制的集合抽象）。本节将解释每种理论如何产生咖喱句子。然而，我们首先从涉及属性理论的一个版本开始，这个版本更接近于 Curry 的表述。（《Curry 悖论简要描述》这份补充文件简要描述了 Curry 自己版本悖论的目标。）

属性理论提供了无限制的属性抽象，只要对于理论语言中可陈述的任何条件，都存在一个属性（根据该理论），恰好由符合此条件的事物实例化。考虑一个用具有属性抽象设备 [x:ϕx] 和实例化关系 ϵ 的语言构建的理论 TP。例如，如果 ϕ(t) 表示项 t 代表的对象是三角形的，t ϵ [x:ϕx] 表示这个对象实例化了三角形属性。然后，根据无限制的属性抽象，我们应该有以下原则。

对于具有一个自由变量的每个开放句子 ϕ 和每个术语 t，根据 TP，句子 t ϵ [x:ϕx] 和 ϕt 是可互换的。

实际上，Curry（1942b）概述了使用他的（Property）的对应物构造 Curry 句子的两种“构造方法”。他说第一种“基于罗素悖论”，而第二种“基于爱皮米尼德悖论”。尽管两种方法都是属性理论的，但第一种方法产生了 Curry 悖论的集合论版本的前身，而第二种方法产生了真理论版本的前身。

### 2.1 Curry 的第一种方法和集合论 Curry 句子

Curry 的第一种方法类似于罗素悖论的版本，它涉及属性的实例化。它的主题是具有使自己无法实例化的属性。我们通过考虑具有使自己仅在时间无限时才实例化的属性，得到了一个属性理论的 Curry 句子。假设我们引入名称 h 表示该属性，规定 h=def [x:x ϵ x→π]，其中句子 π 表示时间是无限的。将原则（属性）应用于句子 h ϵ h，我们得到：

根据 TP，h ϵ h 和 h ϵ h→π 是可以互换的。

换句话说，h ϵ h 是 π 和 TP 的 Curry 句子。

Curry 的第一种方法随后产生了集合论 Curry 句子。 一种集合论特征的理论提供了无限制的集合抽象，只要对于该理论语言中可陈述的任何条件，存在一个集合（根据该理论）包含所有符合此条件的事物。 让 TS 是我们的集合论理论，用{x:ϕx}表达集合抽象，用 ∈ 表示集合成员关系。 那么（Property）的对应物是

（Set）对于每个具有一个自由变量的开放句子 ϕ 和每个术语 t，根据 TS，句子 t∈{x:ϕx}和 ϕt 是可以互换的。

要获得一个集合论 Curry 句子，考虑包含任何只有在时间无限时才是自身成员的东西的集合。 假设我们为该集合引入名称 c，规定 c=def{x:x∈x→π}。 将原则（Set）应用于句子 c∈c，我们发现：

根据 TS，c∈c 和 c∈c→π 可以互相替换。

换句话说，c∈c 是 π 和 TS 的 Curry 句子。

Curry 悖论的集合论版本是在 Fitch 1952 [ 8] 中引入的，并且也在 Moh 1954 和 Prior 1955 中提出。

### 2.2 库里的第二种方法和真理理论库里句

尽管他提到了“厄底曼德斯悖论”，一种谎言悖论形式，库里的第二种方法是相关语义悖论的变体，格雷林悖论的一种形式。在其原始形式中，格雷林悖论考虑了许多词语所具有的一个特性，即当一个词语未能体现其所代表的特性时，该词语具有的特性（格雷林和尼尔森，1908 年）。例如，“令人讨厌”这个词就具有这种特性：它未能体现其所代表的特性，因为它并不令人讨厌（参见关于悖论和当代逻辑的条目）。实际上，库里考虑的是一个词语具有的特性，只有在时间是无限的情况下才能体现其所代表的特性。现在假设我们的理论引入了一个名为 u 的名称来表示这个特性。库里随后展示了如何构造一个句子（非正式地说），表明名称 u 体现了它所代表的特性。他展示了这个句子将作为一个关于特性和名称指称的理论的库里句。

尽管这种获取库里句的方法基于表达式的语义特征，但仍然依赖于属性抽象。尽管如此，它可以被视为一个完全语义版本的前身。（与其考虑上述引入的属性，一个可以考虑的是谓词“仅当时间是无限时才适用于自身”。）因此，正如吉奇（1955 年）和洛布（1955 年）首次展示的那样，可以仅通过语义原则获得库里句，而无需依赖于属性抽象。他们的途径对应于第 1.1 节中涉及自指句 k 的非正式论证，该句读作“如果 k 为真，则时间是无限的”。

为此，让 TT 成为真理理论，其中 T 是真理谓词。假设“透明度”原则

（真理）对于每个句子 α，根据 TT，句子 T⟨α⟩ 和 α 是可以互换的。

使用这个原则来获得一个 Curry 句子，假设存在一个句子 ξ，它是 T⟨ξ⟩→π。[11] 然后根据（真理）立即得出

根据 TT，T⟨ξ⟩ 和 T⟨ξ⟩→π 可以互相替换。

换句话说，T⟨ξ⟩ 是 π 和 TT 的柯里句。

吉奇指出，T⟨ξ⟩ 这样的句子导致的语义悖论类似于“集合论中的柯里悖论”。洛布并未提及柯里的工作，却将这个悖论归功于一位裁判对洛布关于可证性的定理（参见哥德尔不完备性定理条目）证明的观察。这位裁判现在被认为是利昂·亨金（Halbach & Visser 2014: 257），他建议洛布在证明中使用的方法“导致了自然语言中悖论的新推导”，即上述第 1.1 节的非正式论证。

## 3. 推导悖论

假设我们已经使用上述方法之一来展示，对于某个真理、集合或属性理论，该理论是柯里完备的（比如，包含每个语言句子的柯里句子，或者爆炸性句子）。为了得出结论，即所讨论的理论是平凡的，现在只需要为令人困扰的主张提供一个论证。这个主张是，对于每个理论 T，如果存在一个关于 π 和 T 的柯里句子，那么 ⊢Tπ。这样的论证将利用关于条件 → 的逻辑行为的假设，该条件在定义 1 中提到。假设必须抵制令人困扰的主张，因此这对该条件的行为施加了限制。

### 3.1 柯里悖论引理

要开始，这里是一个非常一般的限制性结果，是 Curry 1942b 中引理的一个紧密变种。[13]

Curry-悖论引理 假设存在一个理论 T 和一个句子 π，满足以下条件：(i) 存在一个关于 π 和 T 的 Curry 句子，(ii) 所有的同一性规则 (Id) α⊢Tα 的实例成立，以及 (iii) 条件 → 满足以下两个原则：

如果 ⊢Tα→β 和 ⊢Tα，则 ⊢Tβ(MP)

如果 α⊢Tα→β 则 ⊢Tα→β(Cont)

 然后 ⊢Tπ.

这里 MP 是假言推理的一个版本，Cont 是收缩原则：句子 α 的两次出现被“收缩”为一次。（我们很快将遇到更常被称为收缩的相关原则 [14]。）Curry-Paradox 引理暗示任何 Curry 完备理论必须违反 Id、MP 或 Cont 中的一个或多个，否则将变得平凡。

为了证明引理，人们展示了 Id、MP 和 Cont，以及 κ 与 κ→π 的“柯里互换性”，足以建立 ⊢Tπ。以下推导类似于第 1.1 节的非正式论证。该论证还包括了一个关于原则 Cont 的子论证，将在下文中进行讨论。

12345κ⊢Tκκ⊢Tκ→π⊢Tκ→π⊢Tκ⊢TπId1 柯里互换性 2 Cont3 柯里互换性 3, 4 MP

第 4 节将讨论在柯里悖论引理中涉及的关于 → 的两个原则可能如何被证明或被拒绝。

### 3.2 替代前提

存在一些 Curry-悖论引理的对应物，涉及替代逻辑原则的集合（例如，参见 Rogerson & Restall 2004 和 Bimbó 2006）。可能最常见的版本是用相应的定律替换规则 Id 和 Cont：

⊢Tα→α(IdL)

⊢T(α→(α→β))→(α→β)(ContL)

接下来的推导如下:

123456⊢Tκ→κ⊢Tκ→(κ→π)⊢T(κ→(κ→π))→(κ→π)⊢Tκ→π⊢Tκ⊢TπIdL 1 Curry-intersubstitutivity 2 ContL 2, 3 MP 4 Curry-intersubstitutivity 4, 5 MP

Curry-悖论引理的另一个常见对应物是由 Meyer、Routley 和 Dunn（1979 年）提出的。它使用了两个关于合取的原则：模态蕴涵的法则形式和合取的幂等性。

⊢T((α→β)∧α)→β(MPL)

 (幂等律 ∧)

根据 T，句子 α 和 α∧α 是可以互换的

这次推导过程如下：

12345⊢T((κ→π)∧κ)→π⊢T(κ∧κ)→π⊢Tκ→π⊢Tκ⊢TπMPL 1 Curry-互换性 2 同理 ∧ 4 Curry-互换性 3, 4 MP

使用 Cont 而不是 ContL 或 MPL 来制定 Curry-Paradox 引理将使得在下一节更容易引起注意，以突出拒绝这两个原则的响应类别内的显著差异。[16]

## 4. 对 Curry 悖论的响应

对 Curry 悖论的响应可以分为两类，基于它们是否接受令人困扰的推论，即所有 Curry 完备理论都是平凡的。

* 库里不完全性响应接受令人困扰的推论。然而，他们否认属性、集合或真理的目标理论是库里完备的。库里不完全性响应可以，并且通常会接受经典逻辑。
* 库里完备性响应拒绝令人困扰的推论；他们坚持认为可以存在非平凡的库里完备理论。任何这样的理论必须违反库里悖论引理中假定的一个或多个逻辑原则。由于经典逻辑验证了这些原则，这些响应引入了非经典逻辑。

还有一种选择，即在一个领域（比如集合论）中提倡库里不完全性响应，同时在另一个领域（比如属性理论）中提倡库里完备性响应（例如，Field 2008；Beall 2009）。

### 4.1 咖喱不完整性响应

供应 Curry 不完整性响应的真理突出理论的示例包括 Tarski 的分层理论，真理修订理论（Gupta＆Belnap 1993）和语境主义方法（Burge 1979，Simmons 1993 和 Glanzberg 2001，2004）。 这些理论都限制了“天真”的透明原则（真理）。 概述，请参阅关于说谎者悖论的条目。 在集合论的背景下，Curry 不完整性响应包括 Russell 类型理论和各种限制“天真”集合抽象原则（集合）的理论。 请参阅关于 Russell 悖论和替代公理化集合理论的条目。

一般来说，评估大多数 Curry 不完整性响应相关的考虑似乎并不特定于 Curry 的悖论，而是同样适用于说谎者悖论（在真理理论领域）和 Russell 悖论（在集合和属性理论领域）。因此，本条目的其余部分将重点放在 Curry 完整性响应上，尽管第 6.3 节简要讨论了在所谓的有效性 Curry 悖论背景下的区别。

### 4.2 咖喱完备性响应

咖喱悖论的咖喱完备性响应认为存在一些咖喱完备但非平凡的理论；这样的理论必须违反咖喱悖论引理中假定的一个或多个逻辑原则。由于规则 Id 通常未受质疑（但请参阅 French 2016 和 Nicolai & Rossi 即将发表的文章），这意味着否认非平凡咖喱完备理论的条件 → 同时满足 MP 和 Cont。因此，响应分为两类。

(I)

最常见的策略是接受这样一个理论的条件服从 MP，但否认它服从 Cont。由于 Cont 是一个收缩原则，这样的回应可以被称为无收缩。这一策略最初由莫（1954）提出，得到吉奇（1955）和普赖尔（1955）的赞同引用。

(II)

第二种更为近期的策略是接受这样一个理论的条件服从 Cont，但否认它服从 MP（有时被称为“分离规则”）。这样的回应可以被称为无分离。这一策略以不同方式被里普利（2013）和比尔（2015）提倡。

Curry 完备性响应的每个类别又可以根据其如何阻止 Cont 和 MP 的推导进行细分。

#### 4.2.1 无缩并响应

被无缩并响应拒绝的原则 Cont 源自两个标准原则。这些是单前提条件证明和涉及最多一个前提 γ 的略微更一般版本的假言推理：

(MP′)

如果 γ⊢Tα→β 和 γ⊢Tα 那么 γ⊢Tβ

(CP)

 如果 α⊢Tβ 则 ⊢Tα→β

1234α⊢Tα→βα⊢Tαα⊢Tβ⊢Tα→βId 1, 2 MP' 3 CP

无缩并的响应因此必须拒绝这两个非平凡 Curry 完备理论条件式的原则之一。因此，可以确定类别 (I) 中的两个理论家子类：

(Ia)

一个强烈的无压缩反应否认了 → 遵守 MP′（例如，Mares & Paoli 2014; Slaney 1990; Weir 2015; Zardini 2011）。

(Ib)

一个弱无收缩的回应接受 → 遵守 MP′，但否认它遵守 CP（例如，Field 2008; Beall 2009; Nolan 2016）。

类别（Ib）中的回应之所以只被视为弱无收缩，是因为，如步骤 1-3 所示，它们接受了收缩原则，即如果 α⊢Tα→β，则 α⊢Tβ。

强无收缩回应的支持者认为 MP′ 并未恰当表达莫德斯·波能斯的相关形式。他们通常在“子结构”框架中提出自己的规则形式，特别是一种让我们区分从一次取定的前提中得出的结论和从同一前提取两次得出的结论的框架。（请参阅子结构逻辑的条目。）因此，MP′ 需要被替换为

(MP″)

如果 γ⊢Tα→β 和 γ⊢Tα 则 γ,γ⊢Tβ

并且需要拒绝“结构收缩”规则:

 (来源)

 如果 Γ,γ,γ⊢Tβ 则 Γ,γ⊢Tβ

这是因为他们拒绝结构缩减，强缩减自由方法可以声称保留推论法，尽管拒绝 MP′（参见 Shapiro 2011，Zardini 2013 和 Ripley 2015a）。

强烈的无收缩反应还需要使用涉及连词的一对原则来阻止 MP′ 的推导：

(MP′∧)

如果 γ⊢Tα→β 并且 δ⊢Tα，则 γ∧δ⊢Tβ

 (同一 ∧)

根据 T，句子 α 和 α∧α 是可互换的

1234γ⊢Tα→βγ⊢Tαγ∧γ⊢Tβγ⊢Tβ1, 2 MP'∧ 3 同一 ∧

避免这种 MP′ 的推导需要否认存在一个既遵守 MP′∧ 又遵守 Idem∧ 的合取 ∧。根据许多强无收缩响应（例如 Mares & Paoli 2014；Zardini 2011），一种合取——“乘法”类型或“融合”——遵守 MP′∧ 但不遵守 Idem∧，而另一种合取——“加法”类型——遵守 Idem∧ 但不遵守 MP′∧（参见线性逻辑条目，以及 Ripley 2015a）。如果使用上述讨论的次结构框架，那么 MP′∧ 的失败意味着对于加法合取 γ,δ⊢Tβ 不等同于 γ∧δ⊢Tβ。

至于弱无收缩响应，有时候拒绝 CP 的失败是基于涉及逻辑可能和不可能世界之间区别的“世界”语义（例如 Beall 2009；Nolan 2016）。要反驳 CP，我们需要 α⊢Tβ 的真实性以及 ⊢Tα→β 的虚假性。在目标“世界”方法中， ⊢T 被定义为在模型的一个适当子集（即模型的“可能世界”）上的真实性保持。因此，对于 α⊢Tβ 为真，意味着在任何模型中都不存在一个可能的世界，在该世界中 α 为真而 β 为假。反过来，要反驳 ⊢Tα→β，我们需要一个可能的世界，在该世界中 α→β 为假。这是如何发生的呢？因为连接词是根据模型中所有（类型的）世界定义的，包括可能的和（如果有的话）不可能的世界，所以 α→β 可以在一个可能的世界中为假，原因是 α 在一个不可能的世界中为真，而 β 在一个不可能的世界中为假。这正是目标方法的情况。（如何准确定义箭头的真实性和虚假性取决于所涉及的确切“世界”方法。）

#### 4.2.2 无分离响应

无关联的响应必须阻止基于传递性原则和单前提条件证明的逆否的 MP 的直接推导：

 （传）

如果 α⊢Tβ 并且 ⊢Tα，则 ⊢Tβ

(CCP)

 如果 ⊢Tα→β 则 α⊢Tβ

1234⊢Tα→β⊢Tαα⊢Tβ⊢Tβ1 中国共产党 2, 3 翻译

类别（II）中有两种理论家的子类别：

 （IIa）

强烈的无分离反应否认 → 服从 CCP（Goodship 1996；Beall 2015）。

(IIb)

一个弱的无分离响应接受 → 遵守 CCP，但拒绝 Trans（Ripley 2013）。

类别（IIb）中响应仅弱地无分离的原因是这些响应接受的 CCP 可以被视为条件的一种分离原则。

对于反驳无关紧要回应是违反直觉的指控的一种策略是诉诸于后果与我们接受和拒绝句子之间的联系。根据这种联系，每当 α⊢Tβ 成立时，这意味着（或至少暗示着）按照理论 T 的观点，接受 α 而拒绝 β 是不连贯的（参见 Restall 2005）。现在假设，按照理论 T 的观点，拒绝 α 是不连贯的，而接受 α 而拒绝 β 也是不连贯的。然后，Ripley（2013）认为，只要不接受 α，按照该理论的观点，拒绝 β 就没有什么不连贯的地方。因此，有空间放弃 Trans 并采用对 Curry 悖论的弱无关紧要回应。 Beall 对强无关紧要方法的辩护建立在相关考虑之上。他实际上认为，比 CCP 更弱的原则可以在约束包括 α、β 和 α→β 的句子的接受和拒绝组合中发挥相关作用。

#### 4.2.3 应用于非正式论证

刚刚区分的对 Curry 悖论的方法找到了第 1.1 节中非正式悖论论证的不同推理和子结论的问题所在。强无收缩回应对应于阻止该论证的第（3）步，因为它拒绝了 MP'。弱无收缩回应则阻止了第（4）步，因为它拒绝了 CP。无论哪种无关紧要回应都不会接受第（3）步的推理。由于它们接受 Cont，无关紧要回应使我们能够推导出（4）的结论，而弱无关紧要回应进一步使我们能够通过 CCP 推导出（3）的结论。然而，两种无关紧要回应都对 MP 最终移动到（6）的行为有问题。

## 5. Curry 悖论的重要性

在本节中，我们解释了通过考虑 Curry 悖论可以学到的一些独特教训。有关 Curry 悖论版本与相关悖论共享的重要性讨论，请参阅关于 Russell 悖论和说谎者悖论的条目。

### 5.1 扫兴的否定悖论解决方案

从 Church（1942）、Moh（1954）、Geach（1955）、Löb（1955）和 Prior（1955）开始，对 Curry 悖论的讨论强调了它与 Russell 悖论和说谎者悖论的不同之处，即它并不“本质上涉及否定”（Anderson 1975: 128）。Curry 悖论不涉及否定的一个原因是，这使得该悖论对某些可能适用于“否定悖论”的解决方案具有抵抗力。

Geach 认为，对于任何支持天真真理论或天真集合论的人来说，Curry 悖论都会对他们构成问题，因为他们面对否定悖论时，

> 可能会……希望通过使用一个逻辑系统来避免 [这些悖论]，在这个逻辑系统中，“p 当且仅当非 p”对于某些“p”的解释是一个定理，而我们却不能从中推断出任意陈述……（Geach 1955: 71）

他说，问题在于 Curry 的悖论“不能仅通过采用包含一种奇怪否定的系统来解决”。相反，“如果我们想保留对真理的天真看法，或者对类的天真看法...，那么我们必须修改与‘如果’相关的基本推理规则”（1955: 72）。 Geach 对 Curry 的悖论意义的看法与 Meyer，Routley 和 Dunn（1979: 127）非常相似。他们得出结论，Curry 的悖论使那些“希望削弱经典否定原则”以解决 Russell 的悖论的人感到沮丧。[20]

简而言之，关键在于存在具有弱否定原则的非经典逻辑，可以解决 Russell 的悖论和说谎者悖论，但仍然容易受到 Curry 的悖论的影响。这些逻辑具有以下特征：

 （a）

它们可以作为一个非平凡理论的基础，根据这个理论，某个句子可以与它自己的否定互换。

(b)

它们不能作为某个 Curry 完备的非平凡理论的基础。

尽管不清楚 Geach 可能考虑了哪些逻辑，但确实存在符合这两个条件的非经典逻辑。基于这些逻辑的理论因此仍然容易受到 Curry 悖论的影响。

#### 5.1.1 无法实现的递减解决方案

Meyer、Routley 和 Dunn（1979）注意到一类符合条件（a）和（b）的逻辑。它们属于递减逻辑，根据这些逻辑，一个句子及其否定将不会蕴涵任意句子。递减逻辑可用于获得解决 Russell 悖论和说谎者悖论的理论，通过接受否定的不一致性而不陷入琐碎性。

根据这样一种理论 T，只要同时满足 ⊢Tλ 和 ⊢T¬λ，句子 λ 和 ¬λ 就可以互换使用。这些理论被称为“多余的”，因为它们肯定了某个句子及其否定（参见关于二值矛盾的条目）。然而，一些著名的半一致逻辑不能作为完备的柯里理论的基础，以免陷入平凡性。有时会说这些逻辑未能成为“柯里半一致”（Slaney 1989）。

#### 5.1.2 半完备解决方案受挫

许多被提出来支持对罗素悖论和说谎者悖论的回应的非经典逻辑是半完备逻辑，即拒绝排中律的逻辑。这些逻辑使“有缺口”的理论成为可能。特别是，在这样一种理论 T 中，只要 λ 和 ¬λ 根据该理论是可以互换的，那么就不会出现 ⊢Tλ∨¬λ 的情况。其中一些半完备逻辑也满足条件（a）和（b）。

一个例子是基于 Łukasiewicz 的三值真值表的逻辑 Ł3（参见 Priest 2008）。由于满足条件（a），Ł3 提供了对 Russell 悖论和说谎者悖论的可能回应，特别是一个间断的回应。然而，考虑到迭代条件 α→（α→β），我们将其缩写为 α⇒β。假设 π 的 Curry 句子和基于 Ł3 的理论 T 被重新定义为任何可与 κ⇒π 互换的句子 κ。然后 T 将满足 Curry-悖论引理的所有条件，正如 Moh（1954）首次指出的那样。因此，只要根据 T 存在一个可与 κ⇒π 互换的 κ，那么 ⊢Tπ。因此 Ł3 不会支持对 Curry 悖论的回应。[22]

总结一下：Curry 悖论阻碍了通过过度或间断理论解决语义悖论的一些可用途径。因此，规避 Curry 悖论的需求在非经典逻辑的发展中发挥了重要作用（例如，Priest 2006；Field 2008）。

### 指向一个普遍悖论结构

Curry 悖论的无否定状态之所以重要，还有第二个原因。Prior 提出了以下重要观点：

> 我们不仅可以说 Curry 悖论不涉及否定，甚至可以说 Russell 悖论仅预设与蕴涵共享的否定属性。(Prior 1955: 180)[23]

他所指的是 Russell 悖论和 Curry 悖论可以被理解为源自相同的一般结构，该结构可以通过使用否定或条件来实例化。[24]

一般结构可以通过定义一种一元连接词的类型来明确，这种连接词引发了柯里悖论，并展示了这种类型如何既由否定所体现，又由以条件为基础定义的一元连接词所体现。

定义 3（柯里连接词）设 π 是理论 T 语言中的一个句子。一元连接词 ⊙ 是 π 和 T 的柯里连接词，只要它满足两个原则：

如果 ⊢Tα 和 ⊢T⊙α，则 ⊢Tπ。（P1）

 如果 α⊢T⊙α 则 ⊢T⊙α.(P2)

广义柯里悖论引理 假设 T 是这样的，即 Id 成立，并且对于一些句子 π 和 μ，(i) μ 和 ⊙μ 在 T 下是可互换的，(ii) ⊙ 是 π 和 T 的柯里连接词。在这种情况下 ⊢Tπ。[ 25]

 证明:

12345μ⊢Tμμ⊢T⊙μ⊢T⊙μ⊢Tμ⊢TπId 1 Curry-互换性 2 P2 3 Curry-互换性 3, 4 P1

广义的 Curry-悖论引理现在可以以两种不同的方式实例化，从而产生 Curry 的悖论或否定悖论：

* 要获得 Curry 的悖论，让一元连接词 ⊙ 是这样的，即 ⊙α 是 α→π，并且让 μ 是根据 T 与 μ→π 互换的句子。那么 P1 就是我们在 Curry-悖论引理推导中使用的 MP 实例，而 P2 则不过是我们的规则 Cont。
  如果 ⊢Tα→β 和 ⊢Tα，则 ⊢Tβ(MP)
  如果 α⊢Tα→β，则 ⊢Tα→β(Cont)
* 要获得否定悖论，让 ⊙α 为 ¬α，并让 μ 为根据 T 与 ¬μ 可互换的句子。[26] 那么 P1 相当于 ex contradictione quodlibet（或“爆炸”）的一个实例，而 P2 是一个还原原则。
  如果 ⊢Tα 和 ⊢T¬α，则 ⊢Tβ（ECQ）
  如果 α⊢T¬α，则 ⊢T¬α（Red）

Prior 指出，与罗素悖论或说谎者悖论相关的否定特征仅通过其作为 Curry 连接词的地位得以解释。这清楚地说明了为什么这些悖论不依赖于否定的特征，如排中律或双重否定消除，在否定仍然是 Curry 连接词的非经典理论中不成立（例如直觉主义理论中，其中 ECQ 和 Red 都成立）。[27]

此外，柯里连接词根本不必非常类似否定。它甚至可能不符合最小否定的条件（请参阅否定条目），因为它不必遵守双重引入法则：

 α⊢T⊙⊙α。（DI）

例如，假设 ⊙α 是 α→π。那么为了使 ⊙ 遵守 DI，必须满足 α⊢T(α→π)→π。这个原则被一些非经典理论所违反，对于这些理论，当以这种方式定义时，⊙ 确实符合柯里连接词的条件。[28]

总结一下：Curry 的悖论指向了一种被广泛悖论实例化的一般结构。这种结构本身并不涉及否定，但也被一些涉及否定的悖论所展示，比如罗素悖论和说谎者悖论。

哪些悖论展示了共同的结构成为一个重要问题，尤其是在 Priest（1994）有影响力地倡导的“统一解决原则”的背景下。根据这一原则，属于“同一类别”的悖论应该得到“同一类别的解决方案”。假设我们将一类悖论界定如下：

定义 4（广义 Curry 悖论）我们在任何情况下都有一个广义 Curry 悖论，只要广义 Curry-悖论引理中所述的假设似乎成立。

假设一个人接受统一解决原则，问题就变成了什么算是对所有广义柯里悖论提出统一解决方案。特别是，是否足以证明，对于这种被限定的每一个实例，表面上看起来是柯里连接词的实际上并不是一个？似乎这应该足够了。不清楚为什么统一性还需要额外要求所有看似的柯里连接词都不符合条件而不合格。例如，假设否定和我们使用 → 定义的一元连接词都似乎满足了广义原则 P2，在前一种情况下，因为 ¬ 似乎服从 Red，在后一种情况下，因为 → 似乎服从 Cont。除非这两种外观有共同的来源（例如，隐含依赖于结构收缩，正如 Zardini 2011 所声称的那样），否则在接受一种外观的同时将另一种外观视为欺骗性并不会有什么不一致之处。（有关这里的哲学问题的讨论，应用于不同类悖论的交流，请参见 Smith 2000 和 Priest 2000。）

如果是这样，广义柯里悖论被统一解决的要求不必区分已经被追求的各种逻辑修订解决方案。这些包括以下三个选项：

* 一个人可能认为，当 ⊙α 被实例化为 ¬α （以获得否定悖论）时，只有原则 P1 失效，而当 ⊙α 被实例化为 α→π （以获得柯里悖论）时，只有 P2 失效。在这种方法中，ECQ 和 Cont 失效，而 Red 和 MP 保持（Priest 1994, 2006）。
* 有人可能认为 P2 单独对于 ⊙ 的两种实例都失败。根据这种观点，Red 和 Cont 失败，而 ECQ 和 MP 成立（Field 2008; Zardini 2011）。
* 有人可能认为 P1 单独对于 ⊙ 的两种实例都失败。根据这种观点，ECQ 和 MP 失败，而 Red 和 Cont 成立（Beall 2015; Ripley 2013）。

因此，例如，普里斯特自己的方法将被视为统一地解决了库里悖论和谎言悖论，作为广义库里悖论的例子。尽管普里斯特评估谎言句子为真和假，但他拒绝了库里句子为真的说法。

无论如何，柯里悖论在与各种悖论的解决方案所需的一致性类型的问题上提出了挑战（另见 Zardini 2015）。普里斯特本人提到了一种比广义柯里悖论更狭窄的悖论，这种悖论的实例包括否定悖论，但排除了柯里悖论。这种类型由普里斯特的“封闭模式”（2002）所确定；请参阅自指词条。一个持续争论是关于是否可能存在柯里悖论的版本，被视为“封闭悖论”，尽管它抵制了普里斯特对这类悖论的统一二值解决方案（请参阅 Beall 2014b，Weber 等人 2014 年，Beall 2014a，以及 Pleitz 2015 中的交流）。

## 6. 有效性柯里

在过去的十年（截至本词条版本的日期）中，柯里悖论引起了人们的关注，也许尤其是所谓的有效性柯里或 v-Curry 悖论（Whittle 2004；Shapiro 2011；Beall＆Murzi 2013）。V-Curry 涉及特别调用理论的结论或“有效性”关系的柯里句，通过使用既定条件或谓词，声称在 T 的语言中表达理论 T 的关系 ⊢T。

### 6.1 连接形式

对于 v-Curry 悖论的一种形式，让在 Curry 句（定义 1 中提到的）的定义中提到的条件是一个结果连接词 ⇒。一个以 ⇒ 为其主要运算符的句子应该这样解释：“p 蕴含（根据 T）q”。只要 ⇒ 满足 Curry-Paradox 引理的条件 MP 和 Cont，我们立即得到基于属性理论、集合理论或真理理论的 Curry 悖论版本。

使得这个 Curry-Paradox 引理的实例特别棘手的是，它对 Curry 悖论的一个常见回应构成了障碍，即第 4.2.1 节讨论的弱无收缩响应。该回应依赖于拒绝单前提条件证明规则 CP，单前提“演绎定理”的一个方向。但这是一个似乎难以抵抗对于结果连接词（Shapiro 2011；Weber 2014；Zardini 2013）的规则。如果 β 是根据理论 T 的结果关系的一个结果，其中该理论将 ⇒ 作为自己的结果连接词，那么 T 必定包含结果主张 α⇒β。同样，这种 Curry 悖论形式对于无分离响应构成了障碍，这需要拒绝规则 MP。如果一个具有自己的结果连接词的理论同时包含 α 和结果条件 α⇒β，那么它必定也包含 β。至少，似乎是这样。诚然，一个弱无分离响应的支持者会认为，对于 ⇒ 的 MP 不正当地引入了传递性（见第 4.2.2 节）。但是，看起来不可避免的是 CP 的逆，即 CCP 规则，这是单前提演绎定理的另一个方向。如果一个理论包含结果条件 α⇒β，那么根据该理论，β 必定从 α 中得出。这仍然排除了一个强无分离响应。

### 6.2 谓词形式

对于一个理论 TV，其主题包括在其语言中句子之间根据该理论得到的单前提推论关系 ⊢TV，会出现第二种形式的 v-Curry 悖论。假设这种关系由谓词 Val(x,y) 表达，并进一步假设存在一个句子 χ，要么是 Val(⟨χ⟩,⟨π⟩)，要么至少根据 TV 可以与后者互换。一种 v-Curry 悖论采用了两个控制 Val 的原则，我们称之为“有效性分离”和“有效性证明”，这是根据 Beall & Murzi (2013) 的说法。

如果 γ⊢TVVal(⟨α⟩,⟨β⟩) 并且 γ⊢TVα，则 γ⊢TVβ(VD)

如果 α⊢TVβ 则 ⊢TVVal(⟨α⟩,⟨β⟩)(VP)

利用这些原则，我们得到了对 ⊢TVπ 的以下快速论证。

123456χ⊢TVχχ⊢TVVal(⟨χ⟩,⟨π⟩)χ⊢TVπ⊢TVVal(⟨χ⟩,⟨π⟩)⊢TVχ⊢TVπId 2 Curry-互换性 1, 2 VD 3 VP 4 Curry-互换性 4, 5 VD

作为应用于这种 v-Curry 谓词形式的情况，一个弱无收缩的响应将通过拒绝从第 2 步到第 4 步的“收缩”来抵制规则 VP，一个无分离的响应将拒绝 VD，即使在第 6 步使用的零前提形式中也是如此。然而，根据谓词 Val 的预期解释，VP 和零前提 VD 似乎都是不可避免的（Beall & Murzi 2013; Murzi 2014; Murzi & Shapiro 2015; Priest 2015; Zardini 2014）。最后，即使 VD 被拒绝为涉及传递性的违规行为，似乎不可避免的是 VP 的逆。如果是这样，那至少可以排除强无分离的响应。

Shapiro (2013) 和 Field (2017: 7) 提出了一个更有说服力的 v-Curry 推理版本。这种推理可以采用连接词或谓词形式，但不依赖于 CP 或 VP。在这里，我们使用 Val 给出谓词形式。与上述类似，我们首先使用 VD 推导出 χ⊢TVπ。根据 Val 的含义，得出 χ⊢TVπ 的结论表明 Val(⟨χ⟩,⟨π⟩) 是真实的，即 χ 是真实的。但如果 χ 是真实的且 χ⊢TVπ，则似乎 π 也必须是真实的。由于对 v-Curry 的弱无分离（非传递性）响应允许推导出 χ⊢TVπ，这种推理也对这种响应提出了异议。

### 6.3 意义

如果事实上，v-Curry 悖论不适合弱无收缩或强无分离的响应，那么（假设规则 Id 被保留），Curry 完备响应的空间将被限制为强无收缩和弱无分离的响应。前者的响应，如第 4.2.1 节所解释的，通常通过在子结构演绎系统中重新表述假言推理（或对于有效性谓词的分离）并拒绝结构性收缩规则 sCont 来呈现。后者的响应，如第 4.2.2 节所解释的，拒绝了传递性的结构原则。因此，v-Curry 悖论有时被视为推动子结构后果关系（例如，Barrio 等人即将出版；Beall＆Murzi 2013；Ripley 2015a；Shapiro 2011, 2015）的动机。

对于 v-Curry 悖论的生动而广泛的讨论已经在我们对 Curry 悖论的理解上取得了真正的进展。最终，变得清晰的是，虽然 v-Curry 悖论可能邀请不同于非 v-Curry 悖论的解决方案，但它们仍然与广义 Curry 悖论相同。特别是，在第 5.2 节的一般模板中，可以将 ⊙ 解释为（作为谓词或连接词）根据 ⊢T 本身的结果。这是 v-Curry 的核心。鉴于我们的语言中可以定义（许多）不同的（形式的）后果关系（例如，基于逻辑词汇的逻辑后果，基于逻辑加认识词汇的认识后果等），因此可能会出现许多不同的 v-Curry 悖论。然而，这些悖论的解决方案空间是本条目中讨论的广义 Curry 悖论的解决方案空间。

然而，v-Curry 悖论值得单独关注至少有两个原因。首先，如上所述，Curry 完备解决方案的两类 — 弱无收缩和强无分离选项 — 在 v-Curry 悖论的情况下似乎尤为棘手。其次，假设以 Curry 完备的方式处理普通 Curry 悖论（属性理论、集合论或语义学），可能仍有理由以 Curry 不完备的方式处理相应的（连接词或谓词）v-Curry 悖论，也许是因为认为理论的后果关系在本质上超出了理论语言中的任何连接词或谓词的捕捉能力（参见，例如，Myhill 1975；Whittle 2004）。因此，对于普通 Curry 悖论及其 v-Curry 对应物的“非均匀”解决方案可能再次是一种有动机的非均匀性。


## Bibliography

### Key Historical Sources

* Curry, Haskell B., 1942a, “The Combinatory Foundations of Mathematical Logic”, *Journal of Symbolic Logic*, 7(2): 49–64. doi:10.2307/2266302
* –––, 1942b, “The Inconsistency of Certain Formal Logics”, *Journal of Symbolic Logic*, 7(3): 115–117. doi:10.2307/2269292
* Curry, Haskell B. and Robert Feys, 1958, *Combinatory Logic*, volume 1, Amsterdam: North-Holland.
* Fitch, Frederic B., 1952, *Symbolic Logic: An Introduction*, New York: Ronald Press Company.
* Geach, P.T., 1955, “On *Insolubilia*”, *Analysis*, 15(3): 71–72. doi:10.1093/analys/15.3.71
* Löb, M.H., 1955, “Solution of a Problem of Leon Henkin”, *Journal of Symbolic Logic*, 20(2): 115–118. doi:10.2307/2266895
* Meyer, Robert K., Richard Routley, and J. Michael Dunn, 1979, “Curry’s paradox”, *Analysis*, 39(3): 124–128. doi:10.1093/analys/39.3.124
* Moh Shaw-Kwei, 1954, “Logical Paradoxes for Many-Valued Systems”, *Journal of Symbolic Logic*, 19(1): 37–40. doi:10.2307/2267648
* Prior, A.N., 1955, “Curry’s Paradox and 3-valued Logic”, *Australasian Journal of Philosophy*, 33(3): 177–82. doi:10.1080/00048405585200201

### Other References

* Anderson, Alan Ross, 1975, “Fitch on Consistency”, in Anderson, Marcus, and Martin 1975: 123–141.
* Anderson, Alan Ross and Nuel D. Belnap, Jr., 1975, *Entailment: the Logic of Relevance and Necessity*, volume 1, Princeton, NJ: Princeton University Press.
* Anderson, Alan Ross, Ruth Barcan Marcus, and R.M. Martin (eds), 1975, *The Logical Enterprise*, New Haven, CT: Yale University Press.
* Ashworth, E.J., 1974, *Language and Logic in the Post-Medieval Period*, Dordrecht: Reidel.
* Bacon, Andrew, 2015, “Paradoxes of Logical Equivalence and Identity”, *Topoi*, 34(1): 89–98. doi:10.1007/s11245-013-9193-8
* Barrio, Eduardo, Lucas Rosenblatt, and Diego Tajer, forthcoming, “Capturing Naive Validity in the Cut-Free Approach”, *Synthese*, first online 1 September 2016. doi:10.1007/s11229-016-1199-5
* Beall, Jc, 2009, *Spandrels of Truth*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199268733.001.0001
* –––, 2014a, “End of Inclosure”, *Mind*, 123(491): 829–849. doi:10.1093/mind/fzu075
* –––, 2014b, “Finding Tolerance Without Gluts”, *Mind*, 123(491): 791–811. doi:10.1093/mind/fzu081
* –––, 2015, “Free of Detachment: Logic, Rationality, and Gluts”, *Noûs*, 49(2): 410–423. doi:10.1111/nous.12029
* Beall, Jc and Julien Murzi, 2013, “Two Flavors of Curry’s Paradox”, *Journal of Philosophy*, 110(3): 143–165. doi:10.5840/jphil2013110336
* Bimbó, Katalin, 2006, “Curry-Type Paradoxes”, *Logique & Analyse*, 49(195): 227–240.
* Brady, Ross, 2006, *Universal Logic*, Stanford, CA: CSLI Publications.
* Bunder, M.W., 1986, “Tautologies That, with An Unrestricted Comprehension Axiom, Lead to Inconsistency or Triviality”, *Journal of Non-Classical Logic*, 3(2): 5–12.
* Burge, Tyler, 1979, “Semantical Paradox”, *Journal of Philosophy*, 76(4): 169–198. doi:10.2307/2025724
* Carnap, Rudolf, 1934, “Die Antinomien und die Unvollständigkeit der Mathematik”, *Monatshefte für Mathematik*, 41: 263–84.
* –––, 1937, *The Logical Syntax of Language*, Amethe Smeaton (trans), London: K. Paul Trench.
* Church, Alonzo, 1932, “A Set of Postulates for the Foundation of Logic”, *Annals of Mathematics*, 33(2): 346–366. doi:10.2307/1968337
* –––, 1942, “Review: *The Inconsistency of Certain Formal Logics* by Haskell B. Curry”, *Journal of Symbolic Logic*, 7(4): 170–71. doi:10.2307/2268117
* Cook, Roy T., 2014, “There is No Paradox of Logical Validity!”, *Logica Universalis*, 8(3–4): 447–467. doi:10.1007/s11787-014-0094-4
* Curry, Haskell B., 1930, “Grundlagen der kombinatorischen Logik (Teile I & II)”, *American Journal of Mathematics*, 52: 509–36, 789–834.
* –––, 1950, *A Theory of Formal Deducibility*, (Notre Dame Mathematical Lectures, 6), Notre Dame, IN: University of Notre Dame Press. [[Curry 1950 available online](http://projecteuclid.org/euclid.ndml/1175197175)]
* –––, 1952, “On the Definition of Negation by a Fixed Proposition in Inferential Calculus”, *Journal of Symbolic Logic*, 17(2): 98–104. doi:10.2307/2266240
* Curry, Haskell B., J. Roger Hindley, and Jonathan P. Seldin, 1972, *Combinatory Logic*, volume 2, (Studies in Logic and the Foundations of Mathematics, 65), Amsterdam: North-Holland.
* Field, Hartry, 2008, *Saving Truth from Paradox*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199230747.001.0001
* –––, 2017, “Disarming a Paradox of Validity”, *Notre Dame Journal of Formal Logic*, 58(1): 1–19. doi:10.1215/00294527-3699865
* Fitch, Frederic B., 1969, “A Method for Avoiding the Curry Paradox”, in Nicholas Rescher (ed.), *Essays in Honor of Carl. G. Hempel*, Dordrecht: Reidel, pp. 255–265.
* French, Rohan, 2016, “Structural Reflexivity and the Paradoxes of Self-Reference”, *Ergo*, 3(5): 113–131. doi:10.3998/ergo.12405314.0003.005
* Glanzberg, Michael, 2001, “The Liar in Context”, *Philosophical Studies*, 103(3): 217–251. doi:10.1023/A:1010314719817
* –––, 2004, “A Contextual-Hierarchical Approach to Truth and the Liar Paradox”, *Journal of Philosophical Logic*, 33(1): 27–88. doi:10.1023/B:LOGI.0000019227.09236.f5
* Goldstein, Laurence, 2000, “A Unified Solution to Some Paradoxes”, *Proceedings of the Aristotelian Society*, 100(1): 53–74. doi:10.1111/j.0066-7372.2003.00003.x
* Goodship, Laura, 1996, “On Dialethism”, *Australasian Journal of Philosophy*, 74(1): 153–161. doi:10.1080/00048409612347131
* Grelling, Kurt and Leonard Nelson, 1908, “Bemerkungen zu den Paradoxien von Russell und Burali-Forti”, *Abhandlungen der Fries’schen Schule*, 2: 301–334.
* Gupta, Anil and Nuel Belnap, 1993, *The Revision Theory of Truth*, Cambridge, MA: MIT Press.
* Halbach, Volker and Albert Visser, 2014, “The Henkin Sentence”, in Maria Manzano, Ildikó Sain, and Enrique Alonso (eds), *The Life and Work of Leon Henkin*, (Studies in Universal Logic), Cham: Springer International, pp. 249–264. doi:10.1007/978-3-319-09719-0_17
* Hanke, Miroslav, 2013, “Implied-Meaning Analysis of the Currian Conditional”, *History and Philosophy of Logic*, 34(4): 367–380. doi:10.1080/01445340.2013.812832
* Hilbert, David and Paul Bernays, 1939, *Grundlagen der Mathematik*, volume II, Berlin: Springer.
* Humberstone, Lloyd, 2006, “Variations on a Theme of Curry”, *Notre Dame Journal of Formal Logic*, 47(1): 101–131. doi:10.1305/ndjfl/1143468315
* Kripke, Saul A., 1975, “Outline of a Theory of Truth”, *Journal of Philosophy*, 72(19): 690–716. doi:10.2307/2024634
* Mares, Edwin and Francesco Paoli, 2014, “Logical Consequence and the Paradoxes”, *Journal of Philosophical Logic*, 43(2–3): 439–469. doi:10.1007/s10992-013-9268-4
* Meadows, Toby, 2014, “Fixed Points for Consequence Relations”, *Logique & Analyse*, 57(227): 333–357.
* Murzi, Julien, 2014, “The Inexpressibility of Validity”, *Analysis*, 74(1): 65–81. doi:10.1093/analys/ant096
* Murzi, Julien and Lorenzo Rossi, forthcoming, “Naïve Validity”, *Synthese*, first online 27 September 2017. doi:10.1007/s11229-017-1541-6
* Murzi, Julien and Lionel Shapiro, 2015, “Validity and Truth-Preservation”, in Theodora Achourioti, Henri Galinon, José Martínez-Fernández, and Kentaro Fujimoto (eds), *Unifying the Philosophy of Truth*, Dordrecht: Springer. doi:10.1007/978-94-017-9673-6_22
* Myhill, John, 1975, “Levels of Implication”, in Anderson, Marcus, and Martin 1975: 179–185.
* Nicolai, Carlo and Lorenzo Rossi, forthcoming, “ Principles for Object-Linguistic Consequence: from Logical to Irreflexive”, *Journal of Philosophical Logic*, first online 20 June 2017. doi:10.1007/s10992-017-9438-x
* Nolan, Daniel, 2016, “Conditionals and Curry”, *Philosophical Studies*, 173(10): 2629–2649. doi:10.1007/s11098-016-0666-7
* Pleitz, Martin, 2015, “Curry’s Paradox and the Inclosure Scheme”, in Pavel Arazim and Michal Dančák (eds), *Logica Yearbook 2014*, London: College Publications.
* Priest, Graham, 1994, “The Structure of the Paradoxes of Self-Reference”, *Mind*, 103(409): 25–34. doi:10.1093/mind/103.409.25
* –––, 2000, “On the Principle of Uniform Solution: A Reply to Smith”, *Mind*, 109(433): 123–126. doi:10.1093/mind/109.433.123
* –––, 2002, *Beyond the Limits of Thought*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199254057.001.0001
* –––, 2006, *In Contradiction*, Oxford: Oxford University Press. Expanded edition (first published 1987). doi:10.1093/acprof:oso/9780199263301.001.0001
* –––, 2008, *An Introduction to Non-Classical Logic: From If to Is*, second edition, Cambridge: Cambridge University Press. doi:10.1017/CBO9780511801174
* –––, 2015, “Fusion and Confusion”, *Topoi*, 34(1): 55–61. doi:10.1007/s11245-013-9175-x
* Quine, W.V.O., 1953, “Mr. Strawson on Logical Theory”, *Mind*, 62(248): 433–451. doi:10.1093/mind/LXII.248.433
* Read, Stephen, 2001, “Self-Reference and Validity Revisited”, in Mikko Yrjönsuuri (ed.), *Medieval Formal Logic*, Dordrecht: Kluwer Academic Publishers, pp. 183–196. doi:10.1007/978-94-015-9713-5_7
* Restall, Greg, 1993, “How to be *Really* Contraction Free”, *Studia Logica*, 52(3): 381–91. doi:10.1007/BF01057653
* –––, 1994, *On Logics Without Contraction*, PhD thesis, The University of Queensland. [[Restall 1994 available online](http://consequently.org/writing/onlogics/)]
* –––, 2005, “Multiple Conclusions”, in Petr Hájek, Luis Valdés-Villanueva, and Dag Westerståhl (eds), *Logic, Methodology and the Philosophy of Science: Proceedings of the Twelfth International Congress*, London: College Publications, pp. 189–205. [[Restall 2005 available online](http://consequently.org/writing/multipleconclusions/)]
* Ripley, David, 2013, “Paradoxes and Failures of Cut”, *Australasian Journal of Philosophy*, 91: 139–164. doi:10.1080/00048402.2011.630010
* –––, 2015a, “Comparing Substructural Theories of Truth”, *Ergo*, 2(13): 299–328. doi:10.3998/ergo.12405314.0002.013
* –––, 2015b, “Contraction and Closure”, *Thought*, 4(2): 131–138. doi:10.1002/tht3.166
* Rogerson, Susan, 2007, “Natural Deduction and Curry’s Paradox”, *Journal of Philosophical Logic*, 36(2): 155–179. doi:10.1007/s10992-006-9032-0
* Rogerson, Susan and Greg Restall, 2004, “Routes to Triviality”, *Journal of Philosophical Logic*, 33(4): 421–436. doi:10.1023/B:LOGI.0000036853.44128.8f
* Rosenblatt, Lucas, 2017, “Naive Validity, Internalization, and Substructural Approaches to Paradox”, *Ergo*, 4(4): 93–120. doi:10.3998/ergo.12405314.0004.004
* Seldin, Jonathan P., 2006, “The Logic of Curry and Church”, in Dov M. Gabbay and John Woods (eds), *Handbook of the History of Logic, Volume 5: Logic from Russell to Church*, Amsterdam: Elsevier, pp. 819–873.
* Shapiro, Lionel, 2011, “Deflating Logical Consequence”, *The Philosophical Quarterly*, 61(243): 320–42. doi:10.1111/j.1467-9213.2010.678.x
* –––, 2013, “Validity Curry Strengthened”, *Thought*, 2: 100–107. doi:10.1002/tht3.80
* –––, 2015, “Naive Structure, Contraction and Paradox”, *Topoi*, 34(1): 75–87. doi:10.1007/s11245-014-9235-x
* Simmons, Keith, 1993, *Universality and the Liar: An Essay on Truth and the Diagonal Argument*, Cambridge: Cambridge University Press.
* Slaney, John, 1989, “RWX in Not Curry Paraconsistent”, in Graham Priest, Richard Routley, and Jean Norman (eds), *Paraconsistent Logic: Essays on the Inconsistent*, Munich: Philosophia, pp. 472–480.
* –––, 1990, “A General Logic”, *Australasian Journal of Philosophy*, 68(1): 74–88. doi:10.1080/00048409012340183
* Smith, Nicholas J.J., 2000, “The Principle of Uniform Solution (of the Paradoxes of Self-Reference)”, *Mind*, 109(433): 117–122. doi:10.1093/mind/109.433.117
* Tajer, Diego and Federico Pailos, 2017, “Validity in a Dialetheist Framework”, *Logique & Analyse*, 60(238): 191–202.
* van Benthem, Johan, 1978, “Four Paradoxes”, *Journal of Philosophical Logic*, 7(1): 49–72. doi:10.1007/BF00245920
* Wansing, Heinrich and Graham Priest, 2015, “External Curries”, *Journal of Philosophical Logic*, 44(4): 453–471. doi:10.1007/s10992-014-9336-4
* Weber, Zach, 2014, “Naïve Validity”, *The Philosophical Quarterly*, 64(254): 99–114. doi:10.1093/pq/pqt016
* Weber, Zach, David Ripley, Graham Priest, Dominic Hyde, and Mark Colyvan, 2014, “Tolerating Gluts”, *Mind*, 123(491): 813–828. doi:10.1093/mind/fzu057
* Weir, Alan, 2015, “A Robust Non-Transitive Logic”, *Topoi*, 34(1): 99–107. doi:10.1007/s11245-013-9176-9
* White, Richard B., 1979, “The Consistency of the Axiom of Comprehension in the Infinite-Valued Predicate Logic of Łukasiewicz”, *Journal of Philosophical Logic*, 8(1): 509–534. doi:10.1007/BF00258447
* Whittle, Bruno, 2004, “Dialetheism, Logical Consequence and Hierarchy”, *Analysis*, 64: 318–26. doi:10.1093/analys/64.4.318
* Zardini, Elia, 2011, “Truth Without Contra(di)ction”, *Review of Symbolic Logic*, 4(4): 498–535. doi:10.1017/S1755020311000177
* –––, 2013, “Naive *Modus Ponens*”, *Journal of Philosophical Logic*, 42(4): 575–593. doi:10.1007/s10992-012-9239-1
* –––, 2014, “Naive Truth and Naive Logical Properties”, *Review of Symbolic Logic*, 7(2): 351–384. doi:10.1017/S1755020314000045
* –––, 2015, “Getting One for Two, or the Contractors’ Bad Deal. Towards a Unified Solution to the Semantic Paradoxes”, in Theodora Achourioti, Henri Galinon, José Martínez-Fernández, and Kentaro Fujimoto (eds.), *Unifying the Philosophy of Truth*, Dordrecht: Springer. doi:10.1007/978-94-017-9673-6_23

## Academic Tools

> | ![sep man icon](../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=curry-paradox). |
> | --- | --- |
> | ![sep man icon](../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/curry-paradox/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=curry-paradox&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](http://philpapers.org/sep/curry-paradox/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[dialetheism](https://plato.stanford.edu/entries/dialetheism/) | [Gödel, Kurt: incompleteness theorems](https://plato.stanford.edu/entries/goedel-incompleteness/) | [lambda calculus, the](https://plato.stanford.edu/entries/lambda-calculus/) | [liar paradox](https://plato.stanford.edu/entries/liar-paradox/) | [logic: algebraic propositional](https://plato.stanford.edu/entries/logic-algebraic-propositional/) | [logic: combinatory](https://plato.stanford.edu/entries/logic-combinatory/) | [logic: linear](https://plato.stanford.edu/entries/logic-linear/) | [logic: paraconsistent](https://plato.stanford.edu/entries/logic-paraconsistent/) | [logic: substructural](https://plato.stanford.edu/entries/logic-substructural/) | [negation](https://plato.stanford.edu/entries/negation/) | [paradoxes: and contemporary logic](https://plato.stanford.edu/entries/paradoxes-contemporary-logic/) | [Russell’s paradox](https://plato.stanford.edu/entries/russell-paradox/) | [self-reference](https://plato.stanford.edu/entries/self-reference/) | [set theory: alternative axiomatic theories](https://plato.stanford.edu/entries/settheory-alternative/)

### Acknowledgments

We are grateful to Julien Murzi, Lorenzo Rossi, and an anonymous referee for detailed comments that led to clarifications and improvements. We also wish to thank the participants of our 2016 graduate seminar at UConn on this topic.

[Copyright © 2018](https://plato.stanford.edu/info.html#c) by  
[Lionel Shapiro](http://shapiro.philosophy.uconn.edu/) <[*lionel.shapiro@uconn.edu*](mailto:lionel%2eshapiro%40uconn%2eedu)>  
[Jc Beall](http://entailments.net/) <[*jbeall@nd.edu*](mailto:jbeall%40nd%2eedu)>

