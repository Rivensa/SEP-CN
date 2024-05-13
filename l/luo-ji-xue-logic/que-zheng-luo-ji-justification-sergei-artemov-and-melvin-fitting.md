# 确证逻辑 justification (Sergei Artemov and Melvin Fitting)

*首次发表于 2011 年 6 月 22 日；实质修订于 2020 年 4 月 20 日*

你可能会说，“我知道亚伯拉罕·林肯是个高个子。”然后你可能会被问到你是怎么知道的。你几乎肯定不会以语义上的方式回答，Hintikka 风格地说，亚伯拉罕·林肯在与你的知识相容的所有情况下都是高个子。相反，你更可能会说，“我在几本书中读到了关于亚伯拉罕·林肯身高的信息，并且我看过他与其他人合影的照片。”一个人通过提供理由、证明来证明自己的知识。Hintikka 语义将知识定义为真实的信念。证明逻辑提供了柏拉图对知识的表征中缺失的第三个组成部分，即合理的真实信念。

---

## 1. 为什么选择确定性逻辑学？

确定性逻辑学是认识论逻辑学，它允许将知识和信念模态“展开”为确定性术语：而不是 ◻X，我们写作 t:X，并将其解读为“X 由理由 t 证明”。我们可以将传统模态运算符视为隐含的模态性，而将确定性术语视为其显式的阐述，以更精细的认识论机制补充模态逻辑。确定性术语家族具有结构和运算。运算的选择导致了不同的确定性逻辑学。对于所有常见的认识论逻辑学，它们的模态性可以完全展开为显式的确定性形式。在这方面，确定性逻辑学揭示并使用了传统认识论模态逻辑的显式但隐藏的内容。

确定性逻辑学最初作为为直觉主义逻辑提供建设性语义的成功项目的一部分而起源——确定性术语将数学证明的除了最基本特征以外的所有内容抽象出来。证明可能是以其最纯粹的形式进行的证明。随后，确定性逻辑学被引入形式认识论。本文介绍了目前对确定性逻辑学的一般范围的理解。它讨论了它们与传统模态逻辑的关系。除了技术机制外，本文还探讨了使用显式确定性术语在一些传统哲学问题上如何启发思考。整个主题仍在积极发展中。

确证逻辑的根源可以追溯到许多不同的来源，其中有两个被详细讨论：认识论和数理逻辑。

### 1.1 认识论传统

知识和信念的属性至少从冯·赖特和欣蒂卡开始就成为形式逻辑的研究对象（欣蒂卡 1962 年，冯·赖特 1951 年）。知识和信念都被视为一种模态，这在现在非常熟悉的认识论逻辑中得到了体现。但是，对于柏拉图关于知识的三个标准：合理的、真实的、信念（盖蒂尔 1963 年，亨德里克斯 2005 年），认识论逻辑只涉及其中的两个。可能世界和不可区分性模型信念——一个人相信在所有可能情况下都是如此的。事实性将真实性的因素引入进来——如果某件事在实际世界中不是这样的，它就不能被知道，只能被相信。但是，对于合理性条件却没有相应的表示。尽管如此，模态方法在允许发展丰富的数学理论和应用方面取得了显著的成功（Fagin、Halpern、Moses 和 Vardi 1995 年，van Ditmarsch、van der Hoek 和 Kooi 2007 年）。然而，这还不是全部的画面。

对于知识逻辑的模态方法而言，从某种意义上说，它是围绕着普遍量词建立的：如果 X 在所有与该情境无法区分的情境中都为真，则 X 在该情境中是已知的。而另一方面，确证将存在量词引入到图像中：如果在该情境中存在 X 的确证，则 X 在该情境中是已知的。这种普遍/存在的二分法对逻辑学家来说是熟悉的——在形式逻辑中，如果存在一个公式 X 的证明，那么 X 在逻辑的所有模型中都为真。人们认为模型本质上是非构造性的，而证明是具有构造性的事物。一般来说，将确证视为类似于数学证明是不会错的。事实上，第一个确证逻辑是专门设计用来捕捉算术中的数学证明的，这将在 1.2 节进一步讨论。

在确证逻辑中，除了公式的范畴外，还有第二个范畴，即确证的范畴。确证是形式术语，由常量和变量使用各种操作符构建而成。常量代表常被接受的真理的确证，通常是公理。变量表示未指定的确证。不同的确证逻辑在允许哪些操作（以及其他方面）上有所不同。如果 t 是一个确证术语，X 是一个公式，那么 t:X 是一个公式，意思是：

t 是 X 的确证。

所有确证逻辑都共有的一种操作是应用，写作乘法。其思想是，如果 s 是 A→B 的确证，t 是 A 的确证，那么 [s⋅t] 是 B 的确证 [1]。也就是说，通常假设以下命题成立：

 s:(A→B)→(t:A→[s⋅t]:B)。

这是知识运算符和模态运算符通常的分配性的显式版本，适用于蕴涵运算：

◻(A→B)→(◻A→◻B).

实际上，公式（2）是逻辑全知问题的许多问题的根源。它断言一个代理知道代理知识所蕴含的一切——知识在逻辑上是封闭的。虽然在原则上可知，可知性在逻辑上是封闭的，但对于任何合理的实际知识版本来说，都不能这样说。（1）和（2）之间的区别可以在讨论戈德曼和克里普基的典型红谷仓例子时加以利用；以下是从（德雷茨克 2005）中摘取的故事的简化版本。

> 假设我正在驾车穿过一个我不知道的地区，那里散落着纸浆谷仓，我看到我面前的物体是一个谷仓。因为我有谷仓前的感知，我相信我面前的物体是一个谷仓。我们的直觉表明我无法知道谷仓。但现在假设这个地区没有假的红谷仓，我还注意到我面前的物体是红色的，所以我知道那里有一个红谷仓。这种并置，作为一个我知道的红谷仓，蕴含着有一个谷仓，而我不知道，这是“令人尴尬的”。

在红谷仓例子的第一个形式化中，将在基本的模态逻辑中进行逻辑推导，其中 ◻ 被解释为“信念”的模态。然后，根据问题的描述，一些 ◻ 的出现将被外部解释为“知识”。设 B 为句子“我面前的物体是谷仓”，设 R 为句子“我面前的物体是红色的”。

1. ◻B，“我相信我面前的物体是谷仓”；
2. ◻(B∧R)，“我相信我面前的物体是红色的谷仓”。

在元层面上，2 实际上是知识，而根据问题描述，1 不是知识。

3. ◻(B∧R→B)，一个逻辑公理的知识断言。

在这个形式化中，似乎违反了模态形式（2）的认识闭包：第 2 行的 ◻(B∧R)和第 3 行的 ◻(B∧R→B)是知识的情况，而 ◻B（第 1 行）不是知识。这里的模态语言似乎无法解决这个问题。

接下来考虑在确证逻辑中的红谷仓例子，其中 t:F 被解释为“我相信 F 是因为 t 的原因”。让 u 是一个特定的个体确证，用于相信 B，v 是用于相信 B∧R 的确证。此外，让 a 是一个用于逻辑真理 B∧R→B 的确证。然后，假设列表如下：

1. u:B，“u 是相信我面前的物体是谷仓的原因”；
2. v:(B∧R)，“v 是相信我面前的物体是红谷仓的原因”；
3. a:(B∧R→B).

在元层上，问题描述表明 2 和 3 是知识的情况，而不仅仅是信念，而 1 是不是知识的信念。以下是形式推理的过程：

4. a:(B∧R→B)→(v:(B∧R)→[a⋅v]:B)，根据原则(1)。
5. v:(B∧R)→[a⋅v]:B，通过命题逻辑从 3 和 4 推导得出；
6. [a⋅v]:B，通过命题逻辑从 2 和 5 推导得出；

注意到结论 6 是 [a⋅v]:B，而不是 u:B；确证闭合成立。通过确证逻辑的推理，得出[a⋅v]:B 是一种知识情况，即“我知道 B 是因为理由 a⋅v”。事实上，u:B 不是一种知识情况并不破坏闭合原则，因为后者仅针对[a⋅v]:B 声称知识。因此，在观察到红色外墙后，我确实知道 B，但这种知识与 1 无关，仍然是一种信念而不是知识情况。确证逻辑的形式化公式很好地表示了这种情况。

跟踪确证以一种传统认识模态工具无法捕捉到的方式呈现了红谷仓案例的结构。确证逻辑的形式化模型描述了在这种情况下似乎发生的事情；即使在感知上并不知道“谷仓”，知识在逻辑蕴涵下的封闭性仍然得以保持。[2]

### 1.2 数理逻辑传统

根据布劳尔（Brouwer）的观点，建设性（直觉主义）数学中的真实意味着存在一个证明，参见（Troelstra 和 van Dalen 1988）。在 1931-34 年间，海廷（Heyting）和科尔莫戈洛夫（Kolmogorov）对直觉主义逻辑的预期基于证明的语义给出了非正式描述（Kolmogorov 1932，Heyting 1934），现在被称为布劳尔-海廷-科尔莫戈洛夫（BHK）语义。根据 BHK 条件，一个公式如果有证明就被认为是“真实”的。此外，复合陈述的证明与其组成部分的证明有以下联系：

* 一个对于 A∧B 的证明由对于命题 A 的证明和对于命题 B 的证明构成；
* 一个对于 A∨B 的证明通过提供对于 A 的证明或对于 B 的证明来给出；
* 一个对于 A→B 的证明是一种将对于 A 的证明转化为对于 B 的证明的构造；
* 虚假 ⊥ 是一个没有证明的命题，¬A 是 A→⊥ 的简写。

Kolmogorov 明确提出他的解释中的“类似证明的对象”（“问题解决方案”）来自经典数学（Kolmogorov 1932）。事实上，从基础的角度来看，将上述“证明”理解为直觉主义系统中的证明并不太合理，这些条件被认为是在指定的。

BHK 语义的基本价值在于它不正式但明确地建议将确证，即数学证明，视为具有操作的对象。

在（哥德尔 1933 年）中，哥德尔迈出了为直觉主义发展严格的基于证明的语义学的第一步。哥德尔认为经典模态逻辑 S4 是描述可证性属性的演算：

* 经典命题逻辑的公理和规则；
* ◻(F→G)→(◻F→◻G)；
* ◻F→F;
* ◻F→◻◻F;
* 必要性规则: 如果 ⊢F, 那么 ⊢◻F.

基于布劳尔对逻辑真理的理解，哥德尔定义了命题公式 F 在直觉语言中到经典模态逻辑语言的翻译 tr(F)：通过在 F 的每个子公式前加上可证性模态 ◻ 来获得 tr(F)。简单来说，当将确定经典公式真值的常规过程应用于 tr(F)时，它将测试 F 的每个子公式的可证性（而不是真值），与布劳尔的观点一致。根据哥德尔的结果和麦金西-塔斯基关于模态逻辑的拓扑语义的工作，可以得出结论，翻译 tr(F)为直觉命题演算（IPC）提供了一个适当的嵌入，即将直觉逻辑嵌入到通过可证性运算符扩展的经典逻辑中的嵌入。

如果 IPC 证明了 F，则 S4 证明了 tr(F)。

然而，哥德尔最初定义直觉逻辑以经典可证性为基础的目标并未实现，因为 S4 与通常的数学可证性概念之间的联系尚未建立。此外，哥德尔指出，将模态 ◻F 解释为 F 在给定形式系统 T 中可证的直观想法与哥德尔的第二不完全性定理相矛盾。实际上，可以通过必要性规则从公理 ◻F→F 在 S4 中推导出 ◻(◻F→F)。另一方面，将模态 ◻ 解释为理论 T 中形式可证性的谓词，将 F 解释为矛盾，将这个公式转化为一个错误的陈述，即 T 的一致性在 T 内部是可证的。

(哥德尔 1933)之后的情况可以用下图描述，其中'X↪Y'应该读作'X 在 Y 中被解释'

IPC↪S4↪?↪ 经典证明

1938 年在维也纳的一次公开讲座中，哥德尔观察到使用显式证明的格式：

t 是 F 的一个证明。

可以帮助解释他的可证性演算 S4（哥德尔，1938）。不幸的是，哥德尔的工作（哥德尔，1938）直到 1995 年才发表，而在此之前，显式证明的哥德尔逻辑已经被重新发现，并被公理化为证明逻辑 LP，并提供了将其与 S4 和经典证明连接起来的完备性定理（Artemov，1995）。

证明逻辑 LP 成为证明逻辑家族中的第一个。LP 中的证明术语只不过是被理解为经典证明的 BHK 术语。通过 LP，命题直觉逻辑得到了所期望的严格的 BHK 语义：

IPC↪S4↪LP↪ 经典证明

有关数理逻辑传统的进一步讨论，请参阅补充文件《一些更多技术问题》的第 1 节。

## 1.3 超内涵性

超强内涵悖论是由克雷斯韦尔于 1975 年提出的。

> 众所周知，似乎存在这样一种情况：有两个命题 p 和 q 在逻辑上是等价的，但一个人可能相信其中一个而不相信另一个。如果我们将命题视为一组可能世界，则两个逻辑上等价的命题将是相同的，因此，如果“x 相信”是一个真正的句子函子，那么开头句子中描述的情况是不可能发生的。我称之为超强内涵语境的悖论。超强内涵语境只是不尊重逻辑等价性的语境。

从克雷斯韦尔本人开始，已经提出了几种处理这个问题的方法。一般来说，这些方法涉及到在熟悉的可能世界方法中添加更多的层次，以便有一种区分逻辑等价句子的方式。克雷斯韦尔建议考虑句子的句法形式。在实际上，确证逻辑通过其处理句子的确证机制来考虑句子的形式。因此，确证逻辑解决了超强内涵性的一些核心问题，并且作为一个额外的好处，我们自动获得了适当的证明理论、模型理论、复杂性估计和广泛的应用。

一个超内涵语境的良好例子是数学家之间使用的非正式语言。通常，当数学家说他或她知道某事时，理解是有一个证明在手。但正如下面所示，这种知识本质上是超内涵的。

> 费马最后定理（FLT）在逻辑上等同于 0=0，因为两者都是可证明的，因此表示相同的命题。然而，证明的背景立即区分它们：0=0 的证明不一定是 FLT 的证明，反之亦然。

为了形式化数学语言，确证逻辑 LP 是一个自然的选择，因为 t:X 的设计目的是具有“t 是 X 的证明”的特征。

在 LP 中，命题 X 和 Y 等价的事实，X↔Y，并不保证相应的确证断言的等价性，通常 t:X 和 t:Y 不等价，t:X↮t:Y。

更进一步地说，LP 和一般的确证逻辑不仅足够精细以区分逻辑等价句子的确证断言，而且提供了一个灵活的机制来连接等价句子的确证，从而维持质量逻辑系统所必需的构造性闭包特性。例如，假设 X 和 Y 是可证明等价的，即存在一个证明 u 使得 X↔Y 成立，因此在 LP 中可证明 u:(X↔Y)。还假设 v 是 X 的一个证明，因此 v:X。已经提到过这并不意味着 v 是 Y 的一个证明——这是一个超内涵的语境。然而，在确证逻辑的框架下，基于 X 和 X↔Y 的证明，我们可以构造一个证明项 f(u,v)，它代表了 Y 的证明，因此 f(u,v):Y 是可证明的。在这方面，确证逻辑超出了 Cresswell 的期望：逻辑等价的句子展示了不同但是构造性可控的认识行为。

## 2. 确证逻辑的基本组成部分

在本节中，介绍了最常见的确证逻辑系统的语法和公理。

### 2.1 确证逻辑的语言

为了建立确证逻辑的形式解释，必须做出一个基本的结构性假设：确证是具有结构和操作的抽象对象。一个很好的确证例子是形式证明，在数理逻辑和计算机科学中长期以来一直是研究对象（参见第 1.2 节）。

确证逻辑是一个形式逻辑框架，其中包含了表示“t 是 F 的确证”的命题 t:F。确证逻辑并不直接分析 t 如何确证 F，而是试图通过公理化的方式来描述这种关系。这类似于布尔逻辑处理其联结词的方式，比如析取：它并不分析公式 p∨q，而是假设了一些逻辑公理和真值表。

在设计上做出了几个决策。确证逻辑从最简单的基础开始：经典的布尔逻辑，这是有充分理由的。即使在最简单的层面上，确证也提供了足够严峻的挑战。罗素、戈德曼-克里普克、盖蒂尔等人的典型例子可以用布尔确证逻辑来处理。认识论的核心由具有经典布尔基础的模态系统组成（K、T、K4、S4、K45、KD45、S5 等），每个系统都有一个基于布尔逻辑的相应确证逻辑伴侣。最后，并不总是假设确证的事实性。这使得我们能够捕捉到涉及信念而非知识的认识论讨论的本质。

确证的基本操作是应用。应用操作接受确证 s 和 t，并产生一个确证 s⋅t，使得如果 s:(F→G)且 t:F，则 [s⋅t]:G。符号上，

s:(F→G)→(t:F→[s⋅t]:G)

这是组合逻辑和 λ-演算（Troelstra 和 Schwichtenberg 1996）、Brouwer-Heyting-Kolmogorov 语义（Troelstra 和 van Dalen 1988）、Kleene 实现性（Kleene 1945）、证明逻辑 LP 等中假设的证明的基本属性。

另一个常见的证明操作是求和：它被引入以明确模态逻辑推理（Artemov 1995）。然而，一些有意义的证明逻辑，如 J−（Artemov 和 Fitting 2019），不使用求和操作。使用求和，任何两个证明都可以安全地组合成具有更广泛范围的东西。如果 s:F，那么无论 t 是什么证据，组合证据 s+t 仍然是 F 的证明。更准确地说，操作符‘+’接受证明 s 和 t，并产生 s+t，这是对 s 或 t 证明的一切都有证明的证明。

s:F→[s+t]:F 和 t:F→[s+t]:F

作为动机，可以将 s 和 t 看作是一本百科全书的两个卷册，而 s+t 是这两个卷册的集合。想象一下，其中一个卷册，比如 s，包含了一个命题 F 的充分证明，即 s:F 成立。那么更大的集合 s+t 也包含了 F 的充分证明，[s+t]:F。在证明逻辑 LP 的 1.2 节中，“s+t”可以解释为证明 s 和 t 的连接。

### 2.2 基本确证逻辑 J0

确证术语是由确证变量 x、y、z 等和确证常数 a、b、c 等（索引 i=1、2、3 等在安全时被省略）构建的，通过'⋅'和'+'操作进行。下面考虑更详细的逻辑学，还允许对确证进行其他操作。常数表示系统不分析的原子确证；变量表示未指定的确证。基本的确证逻辑 J0 由以下公理化：

 经典逻辑

*经典命题公理和 Modus Ponens 规则*

 应用公理

s:(F→G)→(t:F→[s⋅t]:G),

 总和公理

s:F→[s + t]:F,s:F→[t + s]:F.

J0 是一种对于绝对怀疑主义者的一般（不一定是事实性的）确证的逻辑学，对于这样一个主体来说，没有任何公式可以被证明是确证的，即 J0 不会推导出任何 t:F 的结果。然而，这样的主体仍然能够得出相对确证的结论，形式如下：

如果 x:A，y:B，…，z:C 成立，则 t:F。

有了这种能力，J0 能够在其语言中充分模拟许多其他的确证逻辑系统。

### 2.3 逻辑意识和常量规范

逻辑意识原则表明逻辑公理是依法证明的：一个代理接受逻辑公理作为被证明的（包括关于证明的公理）。正如刚才所述，逻辑意识在某些认知情境下可能过于强大。然而，确证逻辑提供了常量规范的灵活机制，以表示不同程度的逻辑意识。

当然，人们区分假设和经证实的假设。在确证逻辑中，常量用于表示在不进一步分析的情况下对假设的确证。假设希望假定公理 A 对知识者来说是经证实的。只需假定存在某个证据常量 e1（带有索引 1）使得 e1:A 成立。此外，如果希望假定这个新原则 e1:A 也是经证实的，可以假定存在某个常量 e2（带有索引 2）使得 e2:(e1:A)成立。依此类推。跟踪索引并非必要，但这样做很容易，并有助于决策过程（Kuznets 2008）。给定逻辑的所有这种假设集合称为常量规范。以下是正式定义：

对于给定的确证逻辑 L，常量规范 CS 是一组形如

 en:en−1:…:e1:A(n≥1)的公式。

其中 A 是 L 的公理，e1，e2，…，en 是具有索引 1，2，…，n 的相似常量。假设 CS 包含所有中间规范，即每当 en:en−1:…:e1:A 在 CS 中时，en−1:…:e1:A 也在 CS 中。

文献中对常量规范提出了一些特殊条件。以下是最常见的条件。

 空的

CS=∅ 。这对应于一个绝对怀疑的主体。这相当于使用逻辑学 J0 进行工作。

 有限的

CS 是一个有限的公式集。这是一个完全代表性的情况，因为在确证逻辑中的任何具体推导只涉及有限个常量。

公理上适当

每个公理，包括通过常数规范本身新获得的公理，都有确证。在正式的设置中，对于每个公理 A，存在一个常数 e1，使得 e1:A 在 CS 中，并且如果 en:en−1:…:e1:A∈CS，则对于每个 n≥1，en+1:en:en−1:…:e1:A∈CS。公理上适当的常数规范对于确保本节末尾讨论的内部化属性是必要的。

 总计

对于每个公理 A 和任意的常量 e1,e2,…,en,en:en−1:…:e1:A∈CS。

名称 TCS 保留给总常量规范（对于给定的逻辑）。自然地，总常量规范在公理上是适当的。

现在我们可以具体说明：

确证的逻辑与给定的常量规范：
令 CS 为常量规范。JCS 是逻辑 J0 + CS；公理是 J0 的公理以及 CS 的成员，唯一的推理规则是假言推理。注意，J0 是 J∅。

 确证的逻辑学：
J 是逻辑 J0 + 公理内化规则。新规则如下：

对于每个公理 A 和任意常量 e1，e2，…，en，推导 en:en−1:…:e1:A。

后者体现了对 J 的无限制逻辑意识的思想。类似的规则出现在证明逻辑 LP 中，并且在 Goldman 的著作中也有预期（Goldman 1967）。逻辑意识，通过公理化适当的常量规范来表达，是模态逻辑中必要性规则的明确体现：⊢F⇒⊢◻F，但限于公理。注意，J 与 JTCS 重合。

确证逻辑系统的关键特征是它们能够将自己的推导内部化为可证明的证明断言，存在于它们的语言中。这个特性在（哥德尔 1938 年）中被预见到。

定理 1：对于每个公理适当的常量规范 CS，JCS 具有内部化特性：

如果 ⊢F，则对于某个证明术语 p，⊢p:F。

确证。对推导长度进行归纳。假设 ⊢ F。如果 F 是 J0 的成员，或者是 CS 的成员，则存在一个常数 en（其中 n 可能为 1），使得 en:F 在 CS 中，因为 CS 是公理适当的。然后 en:F 是可导的。如果 F 是通过 Modus Ponens 从 X→F 和 X 获得的，则根据归纳假设，存在某些 s、t，使得 ⊢s:(X→F) 和 ⊢t:X。使用应用公理， ⊢ [s⋅t]:F。

请参阅补充文件《一些更多技术问题的第 2 节》中的具体语法推导示例，以了解确证逻辑中的具体情况。

### 2.4 扩展基本确证逻辑

基本的确证逻辑 J0 及其带有常量规范 JCS 的扩展是最小正常模态逻辑 K 的明确对应物。对对应物的适当定义将在第 4 节中给出，因为实现的概念是核心，但在我们的介绍阶段已经有一些暗示。例如，在第 1.1 节中指出，(1)，s:(A→B)→(t:A→[s⋅t]:B)，是熟悉的模态原理(2)的明确版本，◻(A→B)→(◻A→◻B)。类似地，第一个确证逻辑 LP 是模态 S4 的明确对应物。事实证明，许多模态逻辑都有确证逻辑对应物，实际上通常不止一个。在接下来的内容中，我们从讨论一些非常熟悉的逻辑开始，逐步引入 S4 和 LP。到目前为止，我们的原始动机大部分适用-我们有可以在算术中解释的确证逻辑。然后我们转向更广泛的模态逻辑家族，算术动机不再适用。拥有一个模态逻辑和一个确证逻辑对应物的现象被证明是意外地广泛的。

在几乎所有情况下，必须向 J0 的+和 ⋅ 添加操作，并附加捕捉其预期行为的公理。例外是下面讨论的事实性，对其不需要额外的操作，尽管需要额外的公理。常量规范总是涵盖扩展集合中的公理。我们继续使用第 2.3 节的术语；例如，如果常量规范符合那里所述的条件，对于所有公理，包括已添加到原始集合中的任何公理，它就是公理上适当的。第 2.3 节的定理 1 仍适用于我们的新确证逻辑，并且具有相同的证明：如果我们有一个具有公理上适当的常量规范的确证逻辑 JLCS，那么内部化成立。

### 2.5 事实性

确证主张，确证足以使一个主体得出真理的结论。这体现在以下内容中。

 确证公理 t:F→F。

确证公理与认识逻辑的真理公理 ◻F→F 具有类似的动机，被广泛接受为知识的基本属性。

在基本的确证逻辑系统中，并不需要确证的确证性，这使得它们能够表示部分和确证性的确证。确证性公理出现在证明逻辑 LP 的第 1.2 节中，作为数学证明的主要特征。事实上，在这种情况下，确证性是明显有效的：如果存在一个关于 F 的数学证明 t，那么 F 必定是真的。

确证性公理被用于导致知识的确证。然而，仅有确证性并不能保证知识，这已经被 Gettier 的例子所证明（Gettier 1963）。

确证性确证的逻辑学：

* JT0=J0 + Factivity;
* JT=J + Factivity.

符合常数规范 CS 的系统 JTCS 的定义如 2.3 节所述。

### 2.6 正向内省

知识的一个常见原则是辨认知道和知道自己知道。在模态设置中，这对应于 ◻F→◻◻F。这个原则有一个充分明确的对应物：一个代理接受 t 作为 F 的足够证据，就足以证明 t:F。通常这样的“元证据”具有物理形式：一个裁判报告证明一篇论文中的证明是正确的；一个计算机验证输出，给定一个形式证明 t 的 F 作为输入；一个证明 t 是 F 的证明的形式证明等等。一个正向内省操作‘!’可以被添加到语言中以此目的；然后假设在给定 t 的情况下，代理会产生一个证明!t，使得 t:F→!t:(t:F)。这种操作形式的正向内省首次出现在证明逻辑 LP 中。

正向内省公理：t:F→!t:(t:F)。

 然后我们定义：

* J4:=J + 积极内省；
* LP:=JT + 积极内省。[3]

逻辑学 J40，J4CS，LP0 和 LPCS 以自然方式定义（参见第 2.3 节）。

在存在积极内省公理的情况下，可以将公理内化规则的范围限制为不是形式为 e:A 的内化公理。这就是在 LP 中所做的：可以通过使用!!e:(!e:(e:A))来模拟公理内化，而不是使用 e3:(e2:(e1:A))等。常量规范的概念也可以相应地简化。这些修改是次要的，不会影响确证逻辑的主要定理和应用。

### 2.7 负内省

(Pacuit 2006, Rubtsova 2006)认为负内省操作'?'可以验证给定的确证断言是否为假。考虑这种操作的一个可能动机是，正内省操作'!'可以被视为能够对确证断言 t:F 的有效性提供决定性的验证判断，因此当 t 不是 F 的确证时，这样的'!'应该得出 ¬t:F 的结论。这通常适用于计算机证明验证器、形式理论中的证明检查器等。然而，这种动机是有细微差别的：证明验证器和证明检查器的示例使用 t 和 F 作为输入，而 Pacuit-Rubtsova 格式?t 表明'?'的唯一输入是一个确证 t，结果?t 应该统一地证明命题 ¬t:F，对于所有 t:F 不成立的 F。这样的操作'?'在形式数学证明中是不存在的，因为?t 应该是无限多个命题 ¬t:F 的单个证明，这是不可能的。历史上，操作'?'是第一个不适合原始框架的例子，其中确证是形式证明的抽象版本。

负内省公理 ¬t:F→?t:(¬t:F)

我们定义系统：

* J45=J4 + 负向内省;
* JD45=J45 + ¬t:⊥ ;
* JT45=J45 + Factivity

并自然地将这些定义扩展到 J45CS，JD45CS 和 JT45CS。

### 2.8 Geach 逻辑学和更多

涉及?的确证逻辑学是超越 LP 的子逻辑的第一个例子。最近发现了一系列具有确证对应物的模态逻辑学，但与算术证明的联系较弱或缺失。我们详细讨论了一个特定案例，并勾勒了其他案例。

彼得·吉奇提出了公理方案 ◊◻X→◻◊X。当添加到公理化的 S4 中时，它产生了一种有趣的逻辑学，被称为 S4.2。从语义上讲，吉奇的方案对框架施加了一致性。也就是说，如果两个可能世界 w1 和 w2 都可以从同一个世界 w0 访问，那么存在一个共同的世界 w4，可以从 w1 和 w2 都访问到。吉奇的方案在 Lemmon 和 Scott（1977）中得到了推广，并引入了相应的符号表示：Gk，l，m，n 是方案 ◊k◻lX→◻m◊nX，其中 k，l，m，n≥0。从语义上讲，这些方案对应于一致性的广义版本。有些人已经开始将这些方案称为吉奇方案，我们将遵循这种做法。更一般地说，如果一个模态逻辑可以通过将一组有限的吉奇方案添加到 K 来公理化，我们将称之为吉奇逻辑。原始的吉奇方案是 G1,1,1,1，但也要注意到 ◻X→X 是 G0,1,0,0，◻X→◻◻X 是 G0,1,2,0，◊X→◻◊X 是 G1,0,1,1，而 X→◻◊X 是 G0,0,1,1，因此吉奇逻辑包括最常见的模态逻辑。吉奇逻辑构成了一个无限的家族。

每个吉奇逻辑都有一个确证对应物。考虑原始的吉奇逻辑，其中包含公理方案 G1,1,1,1，以及添加到 S4 系统（上述提到的 S4.2 系统）中的 ◊◻X→◻◊X。我们通过从 LP 开始公理化，然后添加两个二元函数符号 f 和 g，并采用以下公理方案来构建 S4.2 的确证对应物，称之为 J4.2。

¬f(t,u):¬t:X→g(t,u):¬u:¬X

对于这个方案有一些非正式的动机。在逻辑学中，由于公理方案 t:X→X，我们可以证明对于任何 t 和 u，都有(t:X∧u:¬X)→⊥ 的可证性，从而可以证明 ¬t:X∨¬u:¬X 的可证性。在任何情境中，其中一个析取式必须成立。上述方案等价于 f(t,u):¬t:X∨g(t,u):¬u:¬X，非正式地说，在任何情境中我们都有计算一个确证来证明成立的析取式的方法。这是一个强假设，但至少在某些情况下并非不可信。

一个实现定理将 S4.2 和 J4.2 联系起来，尽管目前尚不清楚是否有一个构造性的证明。

另一个例子是考虑 G1,2,2,1，即 ◊◻◻X→◻◻◊X，或等价地 ◻¬◻◻X∨◻◻¬◻X。它有一个相应的确证公理方案，其中 f、g 和 h 是三元函数符号。

f(t,u,v):¬t:u:X∨g(t,u,v):h(t,u,v):¬v:¬X

对于 f、g 和 h 的直观解释并不像对于 G1,1,1,1 那样清晰，但从形式上来说，事情表现得相当好。

尽管 Geach 家族是无限的，但这些逻辑并不能涵盖具有确证对应物的所有逻辑范围。例如，使用公理方案 ◻(◻X→X)的正常模态逻辑，有时被称为转移自反性，不是 Geach 逻辑，但它确实有一个确证对应物。在构建确证术语的机制中添加一个一元函数符号 k，并采用确证公理方案 k(t):(t:X→X)。一个实现定理成立；这在 Fitting (2014b)中已经证明。我们推测，所有使用 Sahlquist 公式公设的逻辑将具有确证对应物，但这仍然是一个猜想。

## 3. 语义学

现在标准的确证逻辑语义学起源于（Fitting 2005）- 文献中通常称之为 Fitting 模型，但在这里将称之为可能世界确证模型。可能世界确证模型是熟悉的知识和信念逻辑的可能世界语义学（由 Hintikka 和 Kripke 提出）与确证术语的特定机制（由 Mkrtychev 在（Mkrtychev 1997）中引入）的结合体（参见第 3.4 节）。

### 3.1 单一代理人可能世界确证模型用于 J

更准确地说，需要定义一个 JCS 的语义，其中 CS 是任何常量规范。形式上，JCS 的可能世界确证逻辑模型是一个结构 M=⟨G,R,E,V⟩。其中，⟨G,R⟩ 是一个标准的 K 框架，其中 G 是一组可能世界，R 是其上的二元关系。V 是一个从命题变量到 G 的子集的映射，指定可能世界上的原子真值。

新的项目是 E，一个源自(Mkrtychev 1997)的证据函数。它将确证术语和公式映射到一组世界。直观的想法是，如果可能世界 Γ 在 E(t,X)中，那么 t 是 Γ 上 X 的相关或可接受的证据。不应将相关证据视为决定性的。相反，应将其视为类似于法庭上可以接受的证据：这份证词，这份文件是陪审团应该审查的东西，是相关的东西，但其真相决定的地位尚待考虑。证据函数必须满足一定的条件，但这些条件稍后会讨论。

给定一个 JCS 可能世界确证模型 M=⟨G,R,E,V⟩，在可能世界 Γ 上的公式 X 的真值用 M,Γ⊩X 表示，并且需要满足以下标准条件：

 对于每个 Γ∈G：

1. M,Γ⊩P 当且仅当 Γ∈V(P)，其中 P 是一个命题符号；
2. 不成立 M,Γ⊩⊥；
3. M,Γ⊩X→Y 当且仅当不成立 M,Γ⊩X 或 M,Γ⊩Y。

这些只是说原子真值是任意指定的，并且命题连接词在每个世界上的行为是真值函数。关键的项目是下一个。

1. M,Γ⊩(t:X) 当且仅当 Γ∈E(t,X)，对于每个 Δ∈G 且 ΓRΔ，我们有 M,Δ⊩X。

这个条件可以分为两部分。要求对于每个 Δ∈G，都有 M,Δ⊩X，这是 X 被认为是可信的或可信的 Hintikka/Kripke 条件，对于 ΓRΔ。要求 Γ∈E(t,X)，还要求 t 在 Γ 处是相关的证据。然后，非正式地说，如果在一个可能的世界中 X 是可信的，或者在认识论逻辑的通常意义上，t 是 X 在那个世界的相关证据，那么 t:X 在一个可能的世界是真的。

重要的是要意识到，在这种语义中，一个人可能不相信某件事情是因为在某个世界上它根本不可信，或者是因为它是可信的，但是理由不合适。

对于证据函数仍然需要放置一些条件，并且常量规范也必须考虑在内。假设给定 s 和 t 作为确证。可以以两种不同的方式组合这些：同时使用两者的信息；或者只使用其中一个的信息，但首先选择哪一个。每种方式都产生了对确证术语的基本操作 ⋅ 和+，在第 2.2 节中引入了公理化。

假设 s 是一个推论的相关证据，t 是前提的相关证据。那么 s 和 t 一起为结论提供了相关证据。假设证据函数满足以下条件：

E(s,X→Y)∩E(t,X)⊆E(s⋅t,Y)

在添加了这个条件之后，逻辑学的有效性就可以确定。

s:(X→Y)→(t:X→[s⋅t]:Y)

 被确证。

如果 s 和 t 是证据项目，可以说某事被 s 或 t 之一所确证，而不必具体指定是哪一个，这仍然是证据。对证据函数施加了以下要求。

E(s,X)∪E(t,X)⊆E(s+t,X)

 毫不奇怪，两者都

s:X→[s+t]:X

 和

 text: t:X→[s+t]:X

 现在保持。

最后，应该考虑到常数规范 CS。请记住，常数旨在表示被直接接受的基本假设的原因。模型 M=⟨G,R,E,V⟩ 满足常数规范 CS 的条件是：如果 c:X∈CS，则 E(c,X) = G。

可能世界证明模型 JCS 的可能世界证明模型是一个满足上述所有条件并满足常数规范 CS 的结构 M=⟨G,R,E,V⟩。

尽管可能世界证明模型与 Kripke 模型相似，但它们允许进行细粒度的分析，而 Kripke 模型则不可能。有关更多详细信息，请参阅补充文件《一些更多技术问题》的第 3 节。

### 3.2 弱完备性和强完备性

如果一个公式 X 在 JCS 的特定模型中的所有可能世界中都为真，则它在该模型中是有效的。JCS 的公理系统在 2.2 和 2.3 节中给出。现在可以得出一个完备性定理。

定理 2：如果一个公式 X 在所有 JCS 模型中都是有效的，则它在 JCS 中是可证明的。

正如刚才所述的完备性定理有时被称为弱完备性。令人惊讶的是，与模态逻辑 K 的完备性相比，它的证明要容易得多。对此，以下是一些评论。另一方面，它非常通用，适用于所有的常量规范。

在（Fitting 2005）中，还引入了更强的语义版本。如果一个模型 M=⟨G,R,E,V⟩ 满足以下条件，则称其为完全解释性模型。对于每个 Γ∈G，如果对于所有满足 ΓRΔ 的 Δ∈G，都有 M,Δ⊩X，那么存在某个解释术语 t，使得 M,Γ⊩t:X。请注意，条件 M,Δ⊩X 对于所有满足 ΓRΔ 的 Δ∈G 是 Hintikka/Kripke 意义下 X 在 Γ 处可信的常规条件。因此，完全解释性实际上是说，如果一个公式在一个可能世界上是可信的，那么就存在一个解释。

并非所有的弱模型都满足完全解释性条件。满足该条件的模型称为强模型。如果常量规范 CS 足够丰富，以至于存在一个内部化定理，那么就可以得到与满足 CS 的强模型相关的完备性。实际上，从某种意义上讲，与强模型相关的完备性等价于能够证明内部化。

相对于强模型的完备性证明与使用模态逻辑 K 的规范模型的完备性证明非常相似。反过来，强模型可以用来对实现定理进行语义证明（参见第 4 节）。

### 3.3 单一代理人家族

到目前为止，已经讨论了一个确证逻辑的可能世界语义，即 J 的对应物。现在，将范围扩大到包括其他熟悉的模态逻辑的确证类似物。

仅通过将可及性关系 R 的自反性添加到第 3.1 节中模型的条件中，就可以获得对于每个 t 和 X，t:X 的有效性，并获得 JT 的语义，即知识逻辑 T 的最弱逻辑的证明逻辑类似物。实际上，如果 M,Γ⊩t:X，则特别地，X 在从 Γ 可访问的每个状态下都为真。由于可及性关系要求是自反的，所以 M,Γ⊩X。使用在 J 的情况下适用的相同机制可以证明弱完备性和强完备性定理，并且还可以提供连接 JT 和 T 的实现定理的语义证明。下面讨论的逻辑也适用相同的情况。

对于 K4 的证明类似物，术语语言中添加了一个额外的一元运算符'!'，请参见第 2.5 节。请注意，此运算符将证明映射到证明，其中的想法是如果 t 是 X 的证明，则!t 应该是 t:X 的证明。从语义上讲，这会向模型 M=⟨G,R,E,V⟩ 添加条件，如下所示。

首先，当然，R 应该是传递的，但不一定是自反的。其次，需要对证据函数进行单调性条件：

如果 ΓRΔ 且 Γ∈E(t,X) 则 Δ∈E(t,X)

最后，还需要一个证据函数条件。

E(t,X)⊆E(!t,t:X)

这些条件共同导致了 t:X→!t:t:X 的有效性，并为 J4 提供了一种与 K4 类似的确证模型，其中有一个将它们连接起来的实现定理。加入自反性导致了一个被称为 LP 的逻辑，出于历史原因而被称为 LP。

我们已经讨论了 LP 的子逻辑的确证逻辑，这些子逻辑对应于模态逻辑 S4 的子逻辑。首先超越 LP 的第一个例子是在第 2.7 节中讨论的，涉及到一个负的内省运算符'?'。包含这个运算符的确证逻辑模型添加了三个条件。首先，R 是对称的。其次，添加了一个被称为强证据的条件：对于所有的 Γ∈E(t,X)，M,Γ⊩t:X。最后，还有一个关于证据函数的条件：

¯E(t,X)⊆E(?t,¬t:X)

如果将这个机制添加到 J4 的机制中，我们就得到了逻辑 J45，这是 K45 的一个确证对应物。可以证明公理的完备性和一致性。类似地，相关的逻辑 JD45 和 JT45 可以用语义方式来表述。在(Rubtsova 2006)中展示了一个考虑运算符?的实现定理。

转向在第 2.8 节中介绍的 Geach 逻辑，也可以为 J4.2 指定一个语义模型。假设 G=⟨G,R,E,V⟩ 是一个 LP 模型。我们增加以下要求。首先，框架必须是收敛的，就像 S4.2 一样。其次，与?一样，E 必须是一个强证据函数。第三，E(f(t,u),¬t:X)∪E(g(t,u),¬u:¬X)=G。完备性和一致性的结果可以按照通常的方式得出。

类似地，由 Geach 方案在这个家族中公理化的每个模态逻辑都有一个确证对应物，具有 Fitting 语义和一个将确证对应物与相应模态逻辑连接起来的实现定理。特别地，这告诉我们确证逻辑家族是无限的，而且肯定比最初认为的要广泛得多。同样，一些以前未考虑的模态逻辑，以及不属于这个家族的模态逻辑，也有确证对应物。研究所有这些的后果仍然是正在进行的工作。

### 3.4 单一世界的确证模型

单一世界的确证模型在更一般的可能世界的确证模型之前得到了相当大的发展（Mkrtychev 1997）。今天，它们最简单地可以被视为恰好只有一个世界的可能世界的确证模型。关于 J 和上述其他确证逻辑的完备性证明可以很容易地修改为与单一世界的确证模型的完备性相一致，尽管当然这不是最初的论证。关于单一世界的确证模型的完备性告诉我们的是，关于可能世界的确证模型的结构的信息可以通过可接受的证据函数完全编码，至少对于迄今为止讨论的逻辑来说是如此。Mkrtychev 使用单一世界的确证模型来证明了 LP 的可决定性，并且其他人在确定确证逻辑的复杂性界限以及显示信念确证逻辑的保守性结果方面也广泛使用了它们（Kuznets 2000，Kuznets 2008，Milnikel 2007，Milnikel 2009）。复杂性结果还被用于解决逻辑全知问题。

### 3.5 本体透明语义学

上述 3.1-3.4 中描述的确证逻辑的形式语义以与认知模型中相同的方式定义了给定世界 Γ 的真值：当且仅当 t:F 在 Γ 上成立时，

1. F 在从 Γ 可访问的所有世界上成立，并且
2. t 根据给定的证据函数是 F 的可接受证据。

此外，还有一种不同类型的语义学，称为模块化语义学，其重点是使证明的本体论地位更加透明。在模块化语义学中，命题接受通常的经典真值，而证明在句法上被解释为公式集合。我们保留了命题公式 Fm 的经典解释 ∗，在单个世界的情况下，它简化为 ∗:Fm↦{0,1}。

也就是说，每个公式都有一个真值 0（假）或 1（真），具有通常的布尔条件：⊩A→B 当且仅当 ⊮A 或 ⊩B 等。主要问题是如何解释证明术语。对于公式集合 X 和 Y，我们定义 X⋅Y={F∣G→F∈X 且 G∈Y，其中 G 为某个公式}。

非正式地说，X⋅Y 是在 X 和 Y 的所有成员之间（按顺序）应用一次 Modus Ponens 的结果。证明术语 Tm 被解释为公式集合的子集：∗:Tm↦2Fm。

使得(s⋅t)∗⊇s∗⋅t∗  且  (s+t)∗⊇s∗∪t∗。

这些条件对应于基本的确证逻辑 J；其他系统需要 ∗ 的额外闭包特性。请注意，尽管模块化模型中的命题在语义上被解释为真值，但确证在句法上被解释为公式集合。这是一个主要的超内涵特征：模块化模型可以将不同的公式 F 和 G 视为相等，即 F∗=G∗，但仍然能够区分确证断言 t:F 和 t:G，例如当 F∈t∗ 但 G∉t∗ 时，得到 ⊩t:F 但 ⊮t:G。在一般的可能世界设置中，公式在经典意义上被解释为可能世界集合 W 的子集，∗:Fm↦  2W，

而确证术语在每个世界上被解释为公式集合的句法，∗:W×Tm↦  2Fm。

在 Artemov（2012；Kuznets 和 Studer 2012）中，已经证明了关于模块化模型的确证逻辑系统的正确性和完备性。

### 3.6 与意识模型的联系

逻辑无知问题是指在认知逻辑中，所有重言式都是已知的，并且知识在推论下是封闭的，这是不合理的。在 Fagin 和 Halpern（1988）中，引入了一个简单的机制来避免这些问题。将意识函数 A 添加到通常的 Kripke 模型结构中，该函数指示每个世界上代理人在该世界上意识到的公式。然后，对于可能世界 Γ，一个公式被认为在该世界上是已知的，如果：1）该公式在从 Γ 可达的所有世界上都为真（知识的 Kripke 条件），并且 2）代理人在 Γ 上意识到该公式。意识函数可以作为阻止对任意一组公式的知识的实用工具。然而，作为逻辑结构，意识模型可能会因缺乏自然的封闭性质而表现出异常行为。例如，代理人可以知道 A∧B，但对 A 和 B 都没有意识，因此也不知道它们。

可能世界确证逻辑模型使用了一种强制定义，与意识模型中的定义相似：对于任何给定的确证 t，在世界 Γ 中，确证断言 t:F 成立当且仅当 1) F 在从 Γ 可达的所有世界 Δ 中成立，且 2) t 是 Γ 中 F 的可接受证据，Γ∈E(t,F)。主要区别在于在确证逻辑模型中对确证的操作和相应的可接受证据函数 E 的闭包条件，因此可以将其视为意识模型的动态版本，其中指定了必要的闭包属性。这个想法在 Sedlár (2013) 中得到了探索，他使用了 LP 的语言，将其视为多主体模态逻辑，并将确证术语视为主体（更准确地说，是主体的行动）。这表明，确证逻辑模型以一种自然的方式吸收了意识、群体代理和动态的常见认知主题。

## 4. 实现定理

证据断言 t:F 的自然模态认知对应是 ◻F，读作存在某个 x，x:F。这一观察引出了遗忘投影的概念，它将每个 t:F 的出现替换为 ◻F，并将一个确证逻辑句子 S 转换为相应的模态逻辑句子 So。遗忘投影自然地从句子扩展到逻辑。

显然，不同的确证逻辑句子可能具有相同的遗忘投影，因此“所以”丧失了包含在“S”中的某些信息。然而，很容易观察到，遗忘投影总是将确证逻辑的有效公式（例如，J 的公理）映射到相应认知逻辑（在这种情况下为 K）的有效公式。反之亦然：任何认知逻辑的有效公式都是某个确证逻辑的遗忘投影。这是根据对应定理 3 得出的。

 定理 3：Jo=K。

这种对应关系也适用于其他确证和认知系统的配对，例如 J4 和 K4，或 LP 和 S4，以及其他许多系统。在这种扩展形式下，对应定理表明，诸如 K、T、K4、S4、K45、S5 等主要模态逻辑都有确证逻辑的对应理论。

在对应理论的核心是以下的实现定理。

定理 4：存在一个算法，对于在 K 中可导出的每个模态公式 F，为 F 中的每个模态出现分配证据术语，使得得到的公式 Fr 在 J 中可导出。此外，实现将证据变量分配给 F 中的负模态运算符的出现，从而尊重认识模态的存在性解读。

已知的恢复模态定理中的证据术语的实现算法使用相应模态逻辑中的无割推导。或者，实现定理也可以通过 Fitting 方法或其适当修改的语义方法来建立。原则上，这些语义论证也会产生基于穷尽搜索的实现过程。

从任何模态逻辑都有一个合理的确证逻辑对应的结论是错误的。例如，形式可证性逻辑 GL（Boolos 1993）包含了 Löb 原理：

 ◻（◻F→F）→◻F，

这似乎没有一个认识上可接受的明确版本。例如，考虑 F 是命题常量 ⊥ 表示假的情况。如果定理 4 的类似物可以涵盖 Löb 原理，那么就会存在确证术语 s 和 t，使得 x：（s：⊥→⊥）→t：⊥。但是，对于事实性确证来说，这在直觉上是错误的。实际上，s：⊥→⊥ 是事实性公理的一个实例。应用公理内化，得到某个常量 c：（s：⊥→⊥）。选择这个 c 使得 c：（s：⊥→⊥）→t：⊥ 的前提在直觉上是真的，而结论是假的 [4]。特别地，Löb 原理（5）对于证明解释来说是无效的（参见 Goris 2007，对 GL 的哪些原则是可实现的的完整解释）。

确证定理为认识模态逻辑提供了新的洞见。特别是，它为主要的模态逻辑提供了新的语义。除了传统的基普克式“普遍”解读 ◻F 为 F 在所有可能情况下成立之外，现在还有一种严格的“存在”语义可以解读为存在一个证人（证明，确证）来支持 F。

确证语义在模态逻辑中起着类似于克里尼实现在直觉主义逻辑中的作用。在这两种情况下，预期的语义都是存在性的：直觉主义逻辑的布劳尔-海廷-科尔莫哥洛夫解释（Heyting 1934，Troelstra 和 van Dalen 1988，van Dalen 1986）和哥德尔对 S4 的可证性解读（Gödel 1933，Gödel 1938）。在这两种情况下，都存在一种普遍性的可能世界语义，它是一种非常强大和主导的技术工具。然而，它并没有解决预期语义的存在性特征。克里尼实现（Kleene 1945，Troelstra 1998）揭示了直觉主义逻辑的计算语义，而证明逻辑为直觉主义和模态逻辑提供了确切的 BHK 证明语义。

在认识论背景下，确证逻辑和对应定理为知识和信念的模态逻辑增加了一个新的“确证”组成部分。同样，这个新的组成部分实际上是一个古老而核心的概念，已经被主流认识论者广泛讨论，但仍然超出了经典认识逻辑的范围。对应定理告诉我们，确证与 Hintikka 风格的系统是兼容的，因此可以安全地纳入认识模态逻辑的基础中。

详见《一些更多技术问题的补充文件》第 4 节，了解更多关于实现定理的内容。

## 5. 概括

到目前为止，在本文中只考虑了类似于单一主体知识逻辑的单一主体确证逻辑。确证逻辑可以被视为显式知识的逻辑，与更传统的隐式知识逻辑相关。文献中研究了一些超出上述讨论范围的系统，涉及多个主体，或者同时具有隐式和显式运算符，或者两者的某种组合。

### 5.1 混合显式和隐式知识

由于确证逻辑提供了显式的确证，而传统的知识逻辑提供了一个隐式的知识运算符，因此自然而然地考虑将两者结合在一个单一的系统中。最常见的显式和隐式知识的联合逻辑是 S4LP（Artemov 和 Nogina 2005）。S4LP 的语言类似于 LP，但添加了一个隐式的知识运算符，可以写成 K 或 ◻。公理系统类似于 LP，结合了 S4 的隐式运算符的公理，以及一个连接公理 t:X→◻X，任何具有显式确证的事物都是可知的。

从语义上讲，LP 的可能世界确证模型不需要修改，因为它们已经具备了 Hintikka/Kripke 模型的所有机制。我们可以按照通常的方式对 ◻ 运算符进行建模，只使用可达性关系，并且可以按照第 3.1 节中描述的方式对确证术语进行建模，同时使用可达性和证据函数。由于 ◻X 在一个世界上为真的通常条件是 t:X 为真的两个条件之一，这立即得到了 t:X→◻X 的有效性，并且合理性很容易得出。公理完备性也相当直接。

在 S4LP 中，隐性知识和显性知识都被表示出来，但在可能世界确证模型语义中，一个单一的可达关系同时适用于两者。这并不是唯一的方法。更一般地说，显性知识的可达关系可以是隐性知识可达关系的适当扩展。这代表了显性知识视为对已知内容有比隐性知识更严格标准的观点。当这些认识概念遵循不同的逻辑法则时，使用不同的可达关系来表示显性和隐性知识变得必要，例如，隐性知识使用 S5 逻辑，而显性知识使用 LP 逻辑。多个可达关系的情况在文献中通常被称为 Artemov-Fitting 模型，但在这里将被称为多主体可能世界模型（参见第 5.2 节）。

有趣的是，尽管 S4LP 逻辑似乎非常自然，但对于它来说，实现定理一直存在问题：如果坚持所谓的正常实现（Kuznets 2010），则无法证明任何这样的定理。在这个领域中，通过显性确证来实现 S4LP 中的隐性知识模态，以便尊重认识结构，仍然是一个重大挑战。

隐性知识和显性知识之间的相互作用有时可能相当微妙。作为一个例子，考虑以下混合的负面内省原则（再次将 ◻ 解释为隐性认识运算符），

¬t:X→◻¬t:X.

从可证性的角度来看，这是负反思的正确形式。实际上，让 ◻F 被解释为 F 是可证的，t:F 被解释为 t 是给定形式理论 T（例如，Peano 算术 PA）中 F 的证明。那么（6）陈述了一个可证的原则。实际上，如果 t 不是 F 的证明，那么由于这个陈述是可判定的，它可以在 T 内部得到证实，因此在 T 中这个句子是可证的。另一方面，“t 不是 F 的证明”的证明 p 取决于 t 和 F，p=p(t,F)，并且仅给定 t 无法计算出来。在这方面，◻ 不能被任何仅依赖于 t 的具体证明术语所取代，而（6）也不能以完全明确的证明风格格式呈现。

显式/隐式知识系统的第一个例子出现在可证性逻辑领域。在（Sidon 1997，Yavorskaya（Sidon）2001）中，引入了一个将可证性逻辑 GL 与证明逻辑 LP 结合的逻辑 LPP，但为了确保所得到的系统具有理想的逻辑属性，从 GL 和 LP 的原始语言之外添加了一些额外的操作。在（Nogina 2006，Nogina 2007）中，提供了一个完整的逻辑系统 GLA，用于证明和可证性，它是 GL 和 LP 的原始语言的总和。LPP 和 GLA 都相对于算术模型类具有完备性，也相对于可能世界证明模型类具有完备性。

不能完全明确的可证性原则的另一个例子是 Löb 原则（5）。对于每个 LPP 和 GLA，很容易找到一个证明项 l(x)，使得

 xt: x:(◻F→F)→l(x):F

成立。然而，在（5）中的三个 ◻ 中没有一个是明确的。事实上，可实现的可证性原则集合是 GL 和 S4 的交集（Goris 2007）。

### 5.2 多主体可能世界确证模型

在多主体可能世界确证模型中，使用了多个可达性关系，并且它们之间存在连接（Artemov 2006）。其思想是，存在多个主体，每个主体都有一个隐含的知识运算符，并且存在着每个主体都能理解的确证术语。大致上，每个人都能理解显式的理由；这些理由构成了基于证据的共同知识。

一个 n 主体可能世界确证模型是一个满足以下条件的结构 ⟨G,R1, …,Rn,R,E,V⟩。G 是一组可能世界。R1,…,Rn 中的每一个都是一个可达性关系，对应于每个主体。可以假设它们是自反的、传递的或对称的，根据需要进行建模。它们用于对主体家族的隐含知识进行建模。可达性关系 R 满足 LP 条件，即自反性和传递性。它用于显式知识的建模。E 是一个满足第 3.3 节中 LP 条件的证据函数。V 将命题符号映射到世界的集合，与通常情况下相同。还有一个特殊的条件：对于每个 i = 1, …,n，Ri ⊆ R。

如果 M=⟨G,R1, …,Rn,R,E,V⟩ 是一个多代理可能世界的确证模型，一个关于世界的真理关系 M,Γ⊩X，可以用大多数常规子句来定义。其中特别感兴趣的是以下几个：

* 如果对于每个 Δ∈G，满足 ΓRiΔ，那么 M,Δ⊩X，则 M,Γ⊩KiX。
* 如果 Γ∈E(t,X)，并且对于每个 Δ∈G，满足 ΓRΔ，那么 M,Δ⊩X，则 M,Γ⊩t:X。

条件 Ri⊆R 蕴含着对于每个代理 i，t:X→KiX 的有效性。如果只有一个代理，并且该代理的可达关系是自反且传递的，这为 S4LP 提供了另一种语义。无论代理的数量如何，每个代理都接受明确的理由来确证知识。

在(Yavorskaya (Sidon) 2008)中引入并研究了一个包含两个代理的版本的 LP，尽管它可以推广到任意有限数量的代理。在这个版本中，每个代理都有自己的确证运算符、变量和常量，而不是像上面那样为每个人都有一个统一的集合。此外，一些有限的代理之间的通信可能是允许的，使用一个新的运算符，允许一个代理验证另一个代理的理由的正确性。为两个代理逻辑创建了单个世界和更一般的可能世界解释语义的版本。这涉及到对证据函数概念的直接扩展，以及对可能世界解释模型的使用两个可达关系。已经通过语法证明了实现定理，尽管可能也可以通过语义证明来完成。

最近对多代理确证逻辑中公共公告的作用进行了一些探索(Renne 2008, Renne 2009)。

在《一些更多技术问题的补充文件》的第 5 节中，关于基于证据的共同知识的概念还有更多内容。

## 6. 罗素的例子：诱导性事实

有一种使用确证逻辑来分析同一事实的不同证明的技术，特别是当其中一些证明是事实性的，而另一些则不是。为了演示这种技术，考虑一个众所周知的例子：

> 如果一个人相信已故的首相的姓氏以'B'开头，那么他相信的是真实的，因为已故的首相是亨利·坎贝尔·班纳曼爵士 [5]。但是，如果他相信巴尔福尔先生是已故的首相 [6]，他仍然会相信已故的首相的姓氏以'B'开头，尽管这个信念是真实的，但不会被认为构成知识。（罗素 1912 年）

正如在第 1.1 节中讨论的红谷仓例子中，这里需要处理一个真实陈述的两个确证，其中一个是正确的，另一个是错误的。设 B 是一个句子（命题原子），w 是 B 的错误理由的指定确证变量，r 是 B 的正确（因此是事实性的）理由的指定确证变量。然后，罗素的例子引发了以下一组假设 [7]：

R={w:B,r:B,r:B→B}

有点违背直觉，但可以从 R 逻辑地推断出 w 的事实性：

1. r:B（假设）
2. r:B→B（假设）
3. B（通过假言推理从 1 和 2 得出）
4. B→(w:B→B)（命题公理）
5. w:B→B（通过假言推理从 3 和 4 得出）

然而，这个推导利用了 r 是 B 的一个确证事实来得出 w:B→B 的结论，这构成了 w:B 的“诱导确证”案例。问题是，如何区分 r:B 的“真实”确证性和 w:B 的“诱导确证”？这里需要一种某种形式的证据追踪，而确证逻辑是一个合适的工具。自然的方法是考虑没有 r:B 的假设集合，即

S={w:B,r:B→B}

并确定 w 的确证性，即 w:B→B 不能从 S 中推导出来。这里有一个可能的世界确证模型 M=(G,R,E,V)，其中 S 成立但 w:B→B 不成立：

* G={1},
* R=∅,
* V(B) = ∅ (因此不是 1⊩B),
* E(t,F) = {1} 对于所有的(t,F) 除了 (r,B)，并且
* E(r,B) = ∅.

很容易看出 E 上的闭包条件 Application 和 Sum 得到满足。在 1 时刻，w:B 成立，即

1⊩w:B

由于在 1 处，w 是 B 的可接受证据，并且没有从 1 处可访问的可能世界。此外，

 非 1⊩r:B

由于根据 E，r 在 1 处不是 B 的可接受证据。因此：

1⊩r:B→B

另一方面，

 不是 1⊩w:B→B

因为 B 在 1 处不成立。

## 7. 确证的自我参照性

实现算法有时会产生包含自我参照确证断言 c:A(c)的恒定规范，即在确证命题（此处为 A(c)）中出现确证（此处为 c）。

确证的自我参照性是一种在传统模态语言中不存在的新现象。除了作为引人入胜的认识对象外，这种自我参照断言从语义观点来看提供了一种特殊的挑战，因为其中内置了恶性循环。实际上，要评估 c，首先需要评估 A，然后为 A 分配一个确证对象给 c。然而，由于 A 包含尚未评估的 c，这是不可能的。关于模态逻辑是否可以在不使用自我参照确证的情况下实现是该领域的一个重要开放问题。

Kuznets 在（Brezhnev 和 Kuznets 2006）中的主要结果表明，在 LP 中实现 S4 时，自我参照确证是不可避免的。Kuznets 给出了以下定理，描述了当前的情况：

定理 5：在模态逻辑 K 和 D 的实现中可以避免自指性。在模态逻辑 T、K4、D4 和 S4 的实现中无法避免自指性。

这个定理证明了对于 S4 的证明术语系统必然是自指的。这在可证性语义上产生了一个严重的，虽然不直接可见的限制。在哥德尔的算术证明背景下，这个问题通过一种将算术语义赋予自指断言 c:A(c)的一般方法来处理，该断言表明 c 是 A(c)的证明。在证明逻辑 LP 中，这个问题通过一个非平凡的不动点构造来处理。

自指性对于摩尔悖论提供了一个有趣的视角。详见补充文件《一些更多的技术问题》的第 6 节。

BHK-语义对直觉主义逻辑 IPC 的自指性问题已由于俊华（Yu 2014）回答。他扩展了库兹涅茨的方法，建立了

定理 6：直觉主义双重否定律 ¬¬(¬¬p→p)的每个 LP 实现都需要自指常量的规范。

更一般地，于证明了任何经典重言式的双重否定（根据格利文科定理，它们都是 IPC 的定理）在 LC 中需要自指常量的规范来实现。于还在 IPC 的纯蕴涵片段中发现了不可避免的自指性的另一个例子。这表明直觉主义逻辑的 BHK 语义（甚至只是直觉主义蕴涵）本质上是自指的，并且需要一个不动点构造来将其与 PA 或类似系统中的形式证明连接起来。这在一定程度上可以解释为什么任何试图在没有自指性的直接归纳方式下构建可证性 BHK 语义的尝试都注定失败。

## 8. 确证逻辑中的量词

虽然命题确证逻辑的研究远未完成，但也已经有一些关于一阶版本的工作。模态逻辑的量化版本已经超出了标准一阶逻辑的复杂性。当涉及到确证逻辑时，量化有更广泛的应用领域。经典逻辑中，量词是针对“对象”进行量化的，模型配备了一个量词范围的域。模态逻辑中，可能有一个对所有可能世界都通用的单一域，或者每个世界都有单独的域。巴尔坎公式在这里是众所周知的。在确证逻辑中，常数域和可变域的选项都是可用的。此外，还有一种模态逻辑中没有的可能性：可以对确证本身进行量化。

关于量化确证逻辑的可能性的初步结果明显不利。对于证明逻辑 LP 的算术可证明语义自然地推广到具有传统量词的一阶版本，以及具有对证明进行量化的版本。在这两种情况下，公理化问题的答案都是否定的。

定理 7：证明的一阶逻辑不是可递归枚举的（Artemov 和 Yavorskaya（Sidon）2001）。具有对证明进行量化的证明逻辑也不是可递归枚举的（Yavorsky 2001）。

尽管算术语义不可能，但在（Fitting 2008）中给出了可能世界语义和公理证明理论，用于一个仅对证明进行量化的 LP 版本。已经证明了其完备性和音准性。在这一点上，可能世界语义与算术语义分离开来，这可能是一个警告的原因，也可能不是。还证明了 S4 通过将 ◻Z 翻译为“存在一个证明 x 使得 x：Z∗”来嵌入到量化逻辑中，其中 Z∗ 是 Z 的翻译。虽然这种逻辑有些复杂，但已经找到了应用，例如，在（Dean 和 Kurokawa 2009b）中，它被用于分析知者悖论，尽管在（Arlo-Costa 和 Kishida 2009）中对这种分析提出了异议。

《证明的一阶逻辑》（FOLP）是在 Artemov 和 Yavorskaya（Sidon）（2011）中提出的，其中对个体变量进行量化。在 FOLP 中，证明断言由形式为 t:XA 的公式表示，其中 X 是一个有限的个体变量集，被认为是可以进行替换的全局参数。在 A 中自由的 X 中的变量的所有出现也在 t:XA 中自由。A 的所有其他自由变量被认为是局部的，因此在 t:XA 中是绑定的。例如，如果 A（x，y）是一个原子公式，则在 p：{x}A（x，y）中，变量 x 是自由的，变量 y 是绑定的。同样，在 p：{x，y}A（x，y）中，两个变量都是自由的，在 p：∅A（x，y）中，x 和 y 都不是自由的。

确证（证明）由不包含个体变量的证明术语表示。除了 LP 操作之外，还有一系列关于证明术语的操作，genx(t)，对应于对个体变量 x 的概括。控制此操作的新公理是 t:XA→gen:x(t)X∀xA，其中 x∉X。关于 FOLP 原则的完整列表以及对一阶 S4 的实现可以在 Artemov 和 Yavorskaya（Sidon）（2011）中找到。FOLP 的语义学已经在 Fitting（2014a）中得到发展。

## 9. 历史注解

最初的确证逻辑系统，即证明逻辑 LP，是在 1995 年由 Artemov（1995）引入的（参见 Artemov（2001））。在那里首次建立了内部化、实现、算术完备性等基本属性。LP 为 Gödel 的可证性逻辑 S4 提供了一个预期的可证性语义，从而为直觉主义命题逻辑的 Brouwer-Heyting-Kolmogorov 语义提供了形式化。Epistemic 语义和完备性（Fitting 2005）首次为 LP 建立。符号模型和 LP 的可决定性归功于 Mkrtychev（Mkrtychev 1997）。复杂性估计首次出现在（Brezhnev 和 Kuznets 2006，Kuznets 2000，Milnikel 2007）中。所有可决定性和复杂性结果的综合概述可以在（Kuznets 2008）中找到。系统 J、J4 和 JT 首次在（Brezhnev 2001）中以不同的名称和稍微不同的设置下考虑。JT45 首次出现在（Pacuit 2006）和（Rubtsova 2006）中，JD45 首次出现在（Pacuit 2006）中。单结论证明逻辑在（Krupski 1997）中被发现。基于合理知识的共同知识的更一般方法在（Artemov 2006）中提出。在（Renne 2008，Renne 2009）中研究了确证逻辑和具有确证的动态认知逻辑的游戏语义。在（Artemov 和 Kuznets 2009，Wang 2009）中研究了确证逻辑与逻辑全知问题之间的联系。确证逻辑的名称是在（Artemov 2008）中引入的，其中对 Kripke、Russell 和 Gettier 的例子进行了形式化；这种形式化已被用于解决悖论、验证、隐藏假设分析和消除冗余。在（Dean 和 Kurokawa 2009a）中，确证逻辑被用于分析知者悖论和可知性悖论。

关于确证逻辑的前两本专著于 2019 年出版（Artemov 和 Fitting 2019，Kuznets 和 Studer 2019）。

<!--md-padding-ignore-begin-->
## Bibliography

* Antonakos, E., 2007. “Justified and Common Knowledge: Limited Conservativity”, in S. Artemov and A. Nerode (eds.), *Logical Foundations of Computer Science, International Symposium, LFCS 2007, New York, NY, USA, June 4–7, 2007, Proceedings* (Lecture Notes in Computer Science: Volume 4514), Berlin: Springer, pp. 1–11.
* Arlo-Costa, H. and K. Kishida, 2009. “Three proofs and the Knower in the Quantified Logic of Proofs”, in *Formal Epistemology Workshop / FEW 2009. Proceedings*, Carnegie Mellon University, Pittsburgh, PA, USA.
* Artemov, S., 1995. “Operational modal logic”, Technical Report MSI 95–29, Cornell University.
* –––, 2001. “Explicit provability and constructive semantics”, *The Bulletin of Symbolic Logic*, 7(1): 1–36.
* –––, 2006. “Justified common knowledge”, *Theoretical Computer Science*, 357 (1–3): 4–22.
* –––, 2008. “The logic of justification”, *The Review of Symbolic Logic*, 1(4): 477–513.
* –––, 2012. “The Ontology of Justifications in the Logical Setting.” *Studia Logica* 100 (1–2): 17–30.
* Artemov, S. and M. Fitting, 2019. *Justification Logic: Reasoning with Reasons*, New York: Cambridge University Press.
* Artemov, S. and R. Kuznets, 2009. “Logical omniscience as a computational complexity problem”, in A. Heifetz (ed.), *Theoretical Aspects of Rationality and Knowledge, Proceedings of the Twelfth Conference* (TARK 2009), ACM Publishers, pp. 14–23.
* Artemov, S. and E. Nogina, 2005. “Introducing justification into epistemic logic”, *Journal of Logic and Computation*, 15(6): 1059–1073.
* Artemov, S. and T. Yavorskaya (Sidon), 2001. “On first-order logic of proofs”, *Moscow Mathematical Journal*, 1(4): 475–490.
* –––, 2011. “First-Order Logic of Proofs.” TR–2011005, City University of New York, Ph.D. Program in Computer Science.
* Boolos, G., 1993. *The Logic of Provability*, Cambridge: Cambridge University Press.
* Brezhnev, V., 2001. “On the logic of proofs”, in K. Striegnitz (ed.), *Proceedings of the Sixth ESSLLI Student Session, 13th European Summer School in Logic, Language and Information* (ESSLLI’01), pp. 35–46.
* Brezhnev, V. and R. Kuznets, 2006. “Making knowledge explicit: How hard it is”, *Theoretical Computer Science*, 357 (1–3): 23–34.
* Cubitt, R. P. and R. Sugden, 2003. “Common knowledge, salience and convention: A reconstruction of David Lewis’ game theory”, *Economics and Philosophy*, 19: 175–210.
* Dean, W. and H. Kurokawa, 2009a. “From the Knowability Paradox to the existence of proofs”, *Synthese*, 176(2): 177–225.
* –––, 2009b. “Knowledge, proof and the Knower”, in A. Heifetz (ed.), *Theoretical Aspects of Rationality and Knowledge, Proceedings of the Twelfth Conference* (TARK 2009), ACM Publications, pp. 81–90.
* Dretske, F., 2005. “Is Knowledge Closed Under Known Entailment? The Case against Closure”, in M. Steup and E. Sosa (eds.), *Contemporary Debates in Epistemology*, Oxford: Blackwell, pp. 13–26.
* Fagin, R., and J. Y. Halpern, 1988. “Belief, Awareness, and Limited Reasoning.” *Artificial Intelligence*, 34: 39–76.
* Fagin, R., J. Halpern, Y. Moses, and M. Vardi, 1995. *Reasoning About Knowledge*, Cambridge, MA: MIT Press.
* Fitting, M., 2005. “The logic of proofs, semantically”, *Annals of Pure and Applied Logic*, 132(1): 1–25.
* –––, 2006. “A replacement theorem for LP”, Technical Report TR-2006002, Department of Computer Science, City University of New York.
* –––, 2008. “A quantified logic of evidence”, *Annals of Pure and Applied Logic*, 152(1–3): 67–83.
* –––, 2009. “Realizations and LP”, *Annals of Pure and Applied Logic*, 161(3): 368–387.
* –––, 2014a. “Possible World Semantics for First Order Logic of Proofs.” *Annals of Pure and Applied Logic* 165: 225–40.
* –––, 2014b. “Justification Logics and Realization.” TR-2014004, City University of New York, Ph.D. Program in Computer Science.
* Gettier, E., 1963. “Is Justified True Belief Knowledge?” *Analysis*, 23: 121–123.
* Girard, J.-Y., P. Taylor, and Y. Lafont, 1989. *Proofs and Types* (Cambridge Tracts in Computer Science: Volume 7), Cambridge: Cambridge University Press.
* Gödel, K., 1933. “Eine Interpretation des intuitionistischen Aussagenkalkuls”, *Ergebnisse Math. Kolloq.*, 4: 39–40. English translation in: S. Feferman *et al*. (eds.), *Kurt Gödel Collected Works* (Volume 1), Oxford and New York: Oxford University Press and Clarendon Press, 1986, pp. 301–303.
* –––, 1938. “Vortrag bei Zilsel/Lecture at Zilsel’s” (*1938a), in S. Feferman, J. J. Dawson, W. Goldfarb, C. Parsons, and R. Solovay (eds.), *Unpublished Essays and Lectures* (Kurt Gödel Collected Works: Volume III), Oxford: Oxford University Press, 1995, pp. 86–113.
* Goldman, A., 1967. “A causal theory of meaning”, *The Journal of Philosophy*, 64: 335–372.
* Goodman, N., 1970. “A theory of constructions is equivalent to arithmetic”, in J. Myhill, A. Kino, and R. Vesley (eds.), *Intuitionism and Proof Theory*, Amsterdam: North-Holland, pp. 101–120.
* Goris, E., 2007. “Explicit proofs in formal provability logic”, in S. Artemov and A. Nerode (eds.), *Logical Foundations of Computer Science, International Symposium, LFCS 2007, New York, NY, USA, June 4–7, 2007, Proceedings* (ecture Notes in Computer Science: Volume 4514), Berlin: Springer, pp. 241–253.
* Hendricks, V., 2005. *Mainstream and Formal Epistemology*, New York: Cambridge University Press.
* Heyting, A., 1934. *Mathematische Grundlagenforschung. Intuitionismus. Beweistheorie*, Berlin: Springer.
* Hintikka, J., 1962. *Knowledge and Belief*, Ithaca: Cornell University Press.
* Kleene, S., 1945. “On the interpretation of intuitionistic number theory”, *The Journal of Symbolic Logic*, 10(4): 109–124.
* Kolmogorov, A., 1932. “Zur Deutung der Intuitionistischen Logik”, *Mathematische Zeitschrift*, 35: 58–65. English translation in V.M. Tikhomirov (ed.), *Selected works of A.N. Kolmogorov. Volume I: Mathematics and Mechanics*, Dordrecht: Kluwer, 1991, pp. 151–158.
* Kreisel, G., 1962. “Foundations of intuitionistic logic”, in E. Nagel, P. Suppes, and A. Tarski (eds.), *Logic, Methodology and Philosophy of Science. Proceedings of the 1960 International Congress*, Stanford: Stanford University Press, pp. 198–210.
* –––, 1965. “Mathematical logic”, in T. Saaty (ed.), *Lectures in Modern Mathematics III*, New York: Wiley and Sons, pp. 95–195.
* Krupski, V., 1997. “Operational logic of proofs with functionality condition on proof predicate”, in S. Adian and A. Nerode (eds.), *Logical Foundations of Computer Science, 4th International Symposium, LFCS’97, Yaroslavl, Russia, July 6–12, 1997, Proceedings* (Lecture Notes in Computer Science: Volume 1234), Berlin: Springer, pp. 167–177.
* Kurokawa, H., 2009. “Tableaux and Hypersequents for Justification Logic”, in S. Artemov and A. Nerode (eds.), *Logical Foundations of Computer Science, International Symposium, LFCS 2009, Deerfield Beach, FL, USA, January 3–6, 2009, Proceedings* (Lecture Notes in Computer Science: Volume 5407), Berlin: Springer, pp. 295–308.
* Kuznets, R., 2000. “On the Complexity of Explicit Modal Logics”, in P. Clote and H. Schwichtenberg (eds.), *Computer Science Logic, 14th International Workshop, CSL 2000, Annual Conference of the EACSL, Fischbachau, Germany, August 21–26, 2000, Proceedings* (Lecture Notes in Computer Science: Volume 1862), Berlin: Springer, pp. 371–383.
* –––, 2008. *Complexity Issues in Justification Logic*, Ph. D. dissertation, Computer Science Department, City University of New York Graduate Center.
* –––, 2010. “A note on the abnormality of realizations of **S4LP**”, in K. Brünnler and T. Studer (eds.), *Proof, Computation, Complexity PCC 2010, International Workshop, Proceedings*, IAM Technical Reports IAM-10-001, Institute of Computer Science and Applied Mathematics, University of Bern.
* Kuznets, R. and T. Studer, 2012. “Justifications, Ontology, and Conservativity”, in *Advances in Modal Logic, Volume 9*, Thomas Bolander, Torben Braüner, Silvio Ghilardi, and Lawrence Moss (eds.), London: College Publications, 437–58.
* Kuznets, R. and T. Studer, 2019. *Logics of Proofs and Justifications*, London: College Publications.
* Lemmon, E. J., and Dana S. Scott, 1977. *The “Lemmon Notes”: An Introduction to Modal Logic*. Amer. Phil. Quart., Monograph 11, Oxford. Blackwell.
* McCarthy, J., M. Sato, T. Hayashi, and S. Igarishi, 1978. “On the model theory of knowledge”, Technical Report STAN-CS-78-667, Department of Computer Science, Stanford University.
* Milnikel, R., 2007. “Derivability in certain subsystems of the Logic of Proofs is Πp2-complete”, *Annals of Pure and Applied Logic*, 145(3): 223–239.
* –––, 2009. “Conservativity for Logics of Justified Belief”, in S. Artemov and A. Nerode (eds.), *Logical Foundations of Computer Science, International Symposium, LFCS 2009, Deerfield Beach, FL, USA, January 3–6, 2009, Proceedings* (Lecture Notes in Computer Science: Volume 5407), Berlin: Springer, pp. 354–364.
* Mkrtychev, A., 1997. “Models for the Logic of Proofs”, in S. Adian and A. Nerode (eds.), *Logical Foundations of Computer Science, 4th International Symposium, LFCS’97, Yaroslavl, Russia, July 6–12, 1997, Proceedings* (Lecture Notes in Computer Science: Volume 1234), Berlin: Springer, pp. 266–275.
* Nogina, E., 2006. “On logic of proofs and provability”, in *2005 Summer Meeting of the Association for Symbolic Logic, Logic Colloquium’05, Athens, Greece* (July 28–August 3, 2005), *The Bulletin of Symbolic Logic*, 12(2): 356.
* –––, 2007. “Epistemic completeness of **GLA**”, in *2007 Annual Meeting of the Association for Symbolic Logic, University of Florida, Gainesville, Florida* (March 10–13, 2007), *The Bulletin of Symbolic Logic*, 13(3): 407.
* Pacuit, E., 2006. “A Note on Some Explicit Modal Logics”, Technical Report PP–2006–29, Institute for Logic, Language and Computation, University of Amsterdam.
* Plaza, J., 2007. “Logics of public communications”, *Synthese*, 158(2): 165–179.
* Renne, B., 2008. *Dynamic Epistemic Logic with Justification*, Ph. D. thesis, Computer Science Department, CUNY Graduate Center, New York, NY, USA.
* –––, 2009. “Evidence Elimination in Multi-Agent Justification Logic”, in A. Heifetz (ed.), *Theoretical Aspects of Rationality and Knowledge, Proceedings of the Twelfth Conference (TARK 2009)*, ACM Publications, pp. 227–236.
* Rose, G., 1953. “Propositional calculus and realizability”, *Transactions of the American Mathematical Society*, 75: 1–19.
* Rubtsova, N., 2006. “On Realization of S5-modality by Evidence Terms”, *Journal of Logic and Computation*, 16(5): 671–684.
* Russell, B., 1912. *The Problems of Philosophy*, Oxford: Oxford University Press.
* Sedlár, Igor. 2013. “Justifications, Awareness and Epistemic Dynamics.” In *Logical Foundations of Computer Science*, edited by S. Artemov and A. Nerode, 7734: 307–18. Lecture Notes in Computer Science. Berlin/Heidelberg: Springer.
* Sidon, T., 1997. “Provability logic with operations on proofs”, in S. Adian and A. Nerode (eds.), *Logical Foundations of Computer Science, 4th International Symposium, LFCS’97, Yaroslavl, Russia, July 6–12, 1997, Proceedings* (Lecture Notes in Computer Science: Volume 1234), Berlin: Springer, pp. 342–353.
* Troelstra, A., 1998. “Realizability”, in S. Buss (ed.), *Handbook of Proof Theory*, Amsterdam: Elsevier, pp. 407–474.
* Troelstra, A. and H. Schwichtenberg, 1996. *Basic Proof Theory*, Amsterdam: Cambridge University Press.
* Troelstra, A. and D. van Dalen, 1988. *Constructivism in Mathematics* (Volumes 1, 2), Amsterdam: North–Holland.
* van Dalen, D., 1986. “Intuitionistic logic”, in D. Gabbay and F. Guenther (eds.), *Handbook of Philosophical Logic* (Volume 3), Bordrecht: Reidel, pp. 225–340.
* van Ditmarsch, H., W. van der Hoek, and B. Kooi (eds.), 2007. *Dynamic Epistemic Logic* (Synthese Library: Volume 337), Berlin: Springer..
* von Wright, G., 1951. *An Essay in Modal Logic*, Amsterdam: North-Holland.
* Wang, R.-J., 2009. “Knowledge, Time, and Logical Omniscience”, in H. Ono, M. Kanazawa, and R. de Queiroz (eds.), *Logic, Language, Information and Computation, 16th International Workshop, WoLLIC 2009, Tokyo, Japan, June 21-24, 2009, Proceedings* (Lecture Notes in Artificial Intelligence: Volume 5514), Berlin: Springer, pp. 394–407.
* Yavorskaya (Sidon), T., 2001. “Logic of proofs and provability”, *Annals of Pure and Applied Logic*, 113 (1–3): 345–372.
* –––, 2008. “Interacting Explicit Evidence Systems”, *Theory of Computing Systems*, 43(2): 272–293.
* Yavorsky, R., 2001. “Provability logics with quantifiers on proofs”, *Annals of Pure and Applied Logic*, 113 (1–3): 373–387.
* Yu, J., 2014. “Self-Referentiality of Brouwer-Heyting-Kolmogorov semantics”, *Annals of Pure and Applied Logic*, 165: 371–388.

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-justification). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-justification/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-justification&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](https://philpapers.org/sep/logic-justification/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* [Justification Logic Bibliography](https://sites.google.com/site/kuznets/justificationlogicbibliography), A complete bibliography of material on justification logic. Maintained by Roman Kuznets, researcher at the Research Group for Theoretical Computer Science and Logic (TIL) in the Institute of Computer Science and Applied Mathematics (IAM) of the University of Bern.

## Related Entries

[belief, formal representations of](https://plato.stanford.edu/entries/formal-belief/) | [logic: modal](https://plato.stanford.edu/entries/logic-modal/) | [logic: provability](https://plato.stanford.edu/entries/logic-provability/)

[Copyright © 2020](https://plato.stanford.edu/info.html#c) by  
[Sergei Artemov](http://web.cs.gc.cuny.edu/~sartemov/) <[*sartemov@gc.cuny.edu*](mailto:sartemov%40gc%2ecuny%2eedu)>  
[Melvin Fitting](https://www.gc.cuny.edu/people/melvin-fitting) <[*melvin.fitting@lehman.cuny.edu*](mailto:melvin%2efitting%40lehman%2ecuny%2eedu)>
<!--md-padding-ignore-end-->
