# 相干逻辑 relevance (Edwin Mares)

*首次发表于1998年6月17日；实质修订于2020年11月13日*

相干逻辑是非经典逻辑。在英国和澳大利亚被称为“相干逻辑”，这些系统的发展是为了避免物质和严格蕴涵的悖论。这些所谓的悖论是从物质和严格蕴涵的定义中得出的有效结论，但被一些人视为问题。

例如，物质蕴涵 (p→q) 在 p 为假或 q 为真时为真，即 (¬p∨q)。因此，如果 p 为真，则当 q 为真时物质蕴涵为真。物质蕴涵的悖论包括以下几个：

p→(q→p),¬p→(p→q),(p→q)∨(q→r).

第一个断言是每个命题都暗示着一个真命题；第二个断言是一个假命题暗示着每个命题，第三个断言是对于任意三个命题，要么第一个暗示着第二个，要么第二个暗示着第三个。

同样地，严格蕴涵（p→q）在不可能 p 为真且 q 为假时为真，即¬⋄(p&¬q)。严格蕴涵的悖论包括以下几个：

(p&¬p)→q，p→(q→q)，p→(q∨¬q)。

第一个断言是，矛盾严格蕴含每个命题；第二和第三暗示每个命题严格蕴含一个重言式。

许多哲学家，从休·麦考尔（1908 年）开始，声称这些论题是违反直觉的。他们声称，如果我们将 → 解释为我们在学习经典逻辑之前所拥有的蕴含概念，那么这些公式就不再有效。相干逻辑学家声称，这些所谓的悖论令人不安的地方在于，在每个悖论中，前提似乎与结论无关。

此外，相干逻辑学家对经典逻辑所做的某些有效推理有所疑虑。例如，考虑经典上有效的推理

> 月亮是由绿色奶酪制成的。因此，现在要么在厄瓜多尔下雨，要么不下雨。

这里似乎再次出现了相干的失败。结论似乎与前提毫无关系。相干逻辑学家试图构建拒绝“相干性谬误”的命题和论证的逻辑学。

相干逻辑学家指出，一些悖论（和谬误）的问题在于前提和结论（或前提和结论）完全涉及不同的主题。然而，一个逻辑学家似乎不应该对主题感兴趣 - 这与句子或推理的形式无关，而与内容有关。但是，相干逻辑学家应用的一个形式原则是强制定理和推理“保持主题”。这就是变量共享原则。变量共享原则指出，如果 A 和 B 没有至少一个命题变量（有时称为命题字母）共同，那么在相干逻辑中无法证明形式为 A→B 的公式，并且如果前提和结论没有至少一个命题变量共享，则无法显示推理有效。

在这一点上，对于相干逻辑学家试图做什么有些困惑是自然的。变量共享原则只是一个逻辑学必须具备的必要条件，才能算作是一个相干逻辑。这还不够。此外，这个原则并没有给我们一个消除所有悖论和谬误的标准。有些悖论或谬误即使满足了变量共享也仍然存在。然而，正如我们将看到的，相干逻辑确实为我们提供了一个关于前提的实际使用的相关证明概念（见下面的“证明理论”部分），但它本身并不能告诉我们什么是真实（和相关的）蕴涵。只有当形式理论与哲学解释结合在一起时，它才能做到这一点（见下面的“相干蕴涵的语义学”部分）。

在本文中，我们将简要介绍相干逻辑领域，而且相对非技术性。

---

## 1. 相干蕴涵的语义学

我们对相干逻辑的阐述与大多数文献中的相反。我们将从语义学开始，而不是结束，因为目前大多数哲学家都倾向于语义学。

这里介绍的语义学是 Richard Routley 和 Robert K. Meyer 提出的三元关系语义学。这个语义学是 Alasdair Urquhart 的“半格语义学”（Urquhart 1972）的发展。同时，Kit Fine 提出了类似的语义学，该理论与 Routley-Meyer 理论同时发展（Fine 1974）。还有 J. Michael Dunn 提出的代数语义学。Urquhart、Fine 和 Dunn 的模型本身非常有趣，但我们没有足够的空间在这里讨论它们。

相干关系语义背后的思想相当简单。考虑 C.I. Lewis 试图避免物质蕴涵的悖论。他在经典逻辑中添加了一个新的联结词，即严格蕴涵。在基普克后的语义术语中，如果对于所有可达于 w 的 w'，要么 A 在 w'中失败，要么 B 在那里获得，那么 A⊰B 在世界 w 上为真。现在，在基普克的模态逻辑语义中，可达关系是一个二元关系。它在世界对之间成立。不幸的是，从相关的观点来看，严格蕴涵理论仍然是不相关的。也就是说，我们仍然可以得出像 p⊰(q⊰q)这样的有效公式。我们可以很容易地看出，基普克的真值条件强制我们接受这个公式。

像模态逻辑的语义一样，相关逻辑的语义将公式的真值相对于世界进行了相对化。但 Routley 和 Meyer 在模态逻辑上更进一步，使用了一个三元关系来描述世界。这样可以存在使得 q→q 失败的世界，进而允许存在使得 p→(q→q)失败的世界。在这种语义下，他们对于→的真值条件如下：

如果对于所有的世界 b 和 c，使得 Rabc（R 是可达关系），要么 A 在 b 上为假，要么 B 在 c 上为真，那么 A→B 在世界 a 上为真。

对于新来者来说，要习惯这个真值条件需要一些时间。但是经过一点努力，可以看到它只是 Kripke 严格蕴涵真值条件的一般化（只需设置 b=c）。

三元关系语义可以适应广泛的逻辑语义。对关系施加不同的约束会产生不同的公式和推理的有效性。例如，如果我们约束关系使得对于所有的世界 a，Raaa 成立，那么我们就可以使得如果(A→B)&A 在一个世界上为真，则 B 在那个世界上也为真。根据 Routley-Meyer 语义的其他特征，这使得论题((A→B)&A)→B 成立。如果我们使得三元关系在其前两个位置上对称，也就是约束它使得对于所有的世界 a、b 和 c，如果 Rabc，则 Rbac，那么我们就可以使得论题 A→((A→B)→B)成立。

为了使相关蕴涵在这个语义上具有真正的意义，三元可及性关系需要进行哲学解释。最近已经有几种基于信息理论的解释被提出。

一种解释是在 Jon Barwise（1993）中提出，并在 Restall（1996）中得到发展。根据这种观点，世界被视为信息论的“站点”和“通道”。站点是接收信息的上下文，通道是传递信息的通道。因此，例如，当 BBC 新闻出现在我客厅的电视上时，我们可以将客厅视为一个站点，将连接我的电视与伦敦工作室的电线、卫星等视为一个通道。使用通道理论来解释 Routley-Meyer 语义，我们认为 Rabc 表示 a 是站点 b 和 c 之间的信息论通道。因此，我们认为当且仅当 a 将 A 在 b 上获得的站点连接到 c 时，A→B 在 a 上为真。

同样，Mares（1997）使用了 David Israel 和 John Perry（1990）提出的信息理论。除了其他信息，世界还包含信息链接，例如自然法则、约定等。例如，一个牛顿世界将包含所有物质相互吸引的信息。从信息论的角度来看，这个世界包含了两个事物都是物质的信息，即它们相互吸引。根据这种观点，当且仅当根据 a 中的链接，b 中所获得的所有信息都包含在 c 中时，Rabc 成立。因此，例如，如果 a 是一个牛顿世界，并且 b 中包含了 x 和 y 是物质的信息，那么 c 中就包含了 x 和 y 相互吸引的信息。

另一种解释是在 Mares（2004）中发展的。这种解释将 Routley-Meyer 语义视为“情境蕴涵”的形式化。这种解释将 Routley-Meyer 语义中的“世界”视为情境。情境是宇宙的可能是部分表示。两个情境 a 和 b 中包含的信息可能使我们能够推断出关于宇宙的进一步信息，这些信息在任何一个情境中都不包含。因此，例如，假设在我们当前的情境中，我们拥有广义相对论理论（这是爱因斯坦的引力理论）中包含的信息。然后我们假设一个情境，在这个情境中我们可以看到一颗星星在椭圆轨道上运动。然后，基于我们拥有的信息和假设的情境，我们可以推断出存在一个情境，在这个情境中有一个非常重的物体作用于这颗星星。

我们可以使用关系“I”（表示“蕴涵”）来建模情境推理。然后，如果 a 和 b 中的信息共同授权推断出存在一个情境，在该情境中 P 成立，则我们有 IabP。我们可以将命题本身视为一组情境。我们设置在 a 处成立 A→B 当且仅当对于所有使 A 成立的情境 b，Iab|B|成立，其中|B|是 B 为真的情境集合。我们设置 Rabc 成立当且仅当 c 属于每个命题 P，使得 IabP 成立。通过添加这样的公设，对于任何使 IabP 成立的命题集合 P，该集合的交集 X 使得 IabX 成立，我们发现使用依赖于 I 的真值条件在任何情境中成立的蕴涵与使用 Routley-Meyer 真值条件成立的蕴涵相同。因此，情境推理的概念为我们理解 Routley-Meyer 语义提供了一种方式。（这是 Mares（2004）第 2 章和第 3 章中关于情境推理的非常简要的版本。）

另一种信息解释可以在邓恩（2015）中找到。这种解释将相干逻辑中的相干概念与格赖斯的会话最大原则和斯珀伯和威尔逊的语用理论中的相干概念巧妙地联系起来。这个想法是，如果在上下文中，a 和 b 与 c 相关，则关系 R 在三个“状态”a、b 和 c 之间成立。这意味着同时使用 a 和 b 中的信息可以推导出 c 中的信息。这里的推导概念是斯珀伯和威尔逊所称的“语境蕴涵”。结果可以从 a 和 b 中的信息推导出来，但不能仅从其中任何一个的信息推导出来（斯珀伯和威尔逊，2002 年，第 251 页）。有多种方式可以思考 a 和 b 中信息的组合。邓恩讨论的一种方式是将 a 和 b 视为类似于计算机程序，而两者的组合是它们的组合——运行 b 并将其结果作为 a 的输入，然后运行 a。如果由此产生的信息都包含在 c 中，则此组合与 c 相关。

贝尔等人（2012 年）提出了一种不同的解释。事实上，贝尔等人（2012 年）提出了三种不同的三元关系解释。这些解释将三元关系与不同的“条件性”概念联系起来。我在这里只讨论其中的两种解释。第三种解释对于百科全书条目来说有些复杂，不适合包含在内。在这些解释中的第一种解释中，如果没有反例，即在 a 处显著的地方，条件 A→B 在世界 a 成立。这个“地方”不是单个世界，而是一对世界 b、c。如果在这对中，A 在第一个世界中为真，而 B 在第二个世界中不为真，则这对是条件的反例。

在第二种解释中，Routley-Meyer 模型的要点被认为既是运算符（在数学意义上），也是它们所操作的事物。根据这种理解，Rabc 意味着将 a 作为运算符应用于 b 时，所得到的所有信息都包含在 c 中。这种解释使得 Routley-Meyer 语义在意图上与 Fine 的操作语义非常相似。而且这种解释与 Dunn 的解释非常密切相关（特别是在他对状态中信息的组合概念上）。

单独使用三元关系是不足以避免所有蕴涵悖论的。根据我们目前所说的，语义如何避免诸如(p&¬p)→q 和 p→(q∨¬q)这样的悖论并不清楚。这些悖论通过在语义中包含不一致和非二值世界来避免。因为，如果没有任何世界使得 p&¬p 成立，那么根据我们对箭头的真值条件，(p&¬p)→q 将在任何地方都成立。同样，如果 q∨¬q 在每个世界都成立，那么 p→(q∨¬q)将是普遍真的。

一种不需要三元关系的相关性方法是由 Routley 和 Loparic（1978）以及 Priest（1992）和（2008）提出的。这种语义使用一组世界和一个二元关系 S。世界被分为两类：正常世界和非正常世界。在正常世界 a 上，蕴涵式 A→B 成立当且仅当对于所有世界 b，如果 A 在 b 上成立，则 B 在 b 上也成立。在非正常世界上，蕴涵式的真值是随机的。有些可能为真，有些可能为假。一个公式是有效的当且仅当它在其正常世界的每个模型上都为真。将世界分为正常和非正常，并在非正常世界中使用随机真值来表示蕴涵式，使我们能够找到诸如 p→(q→q)的公式的反例。

牧师将非正常世界解释为与“逻辑幻想”相对应的世界。在科幻小说中，自然法则可能与我们的宇宙不同。同样，在逻辑幻想中，逻辑法则可能与我们的法则不同。例如，在某些逻辑幻想中，A→A 可能不成立。这些幻想所描述的世界是非正常世界。

没有三元关系的语义学存在一个问题，即很难用它来表征与三元关系相比更广泛的逻辑系统。此外，由此语义确定的逻辑相当弱。例如，它们没有蕴含的传递性作为一个定理——((A→B)&(B→C))→(A→C)。

与三元关系语义学类似，这种语义学要求一些世界是不一致的，一些世界是非二值的。

## 2. 否定的语义学

使用非二值和不一致的世界需要对否定进行非经典的真值条件。在 1970 年代初，Richard 和 Val Routley 发明了他们的“星号运算符”来处理否定（Routley＆Routley 1972）。该运算符是对非正常世界的运算符。对于每个世界 a，都存在一个世界 a*。并且

在 a 处，¬A 为真当且仅当 a*处的 A 为假。

再次，我们面临解释形式语义的困难。Routley 星的一个解释是 Dunn（1993）的解释。Dunn 使用了一个关于世界的二元关系 C。Cab 表示 b 与 a 兼容。那么，a*是与 a 兼容的最大世界（包含最多信息的世界）。

对于否定，还有其他语义。其中之一是 Dunn 提出的四值语义。与经典逻辑的真值表类似，这个语义从真值 T（真）和 F（假）开始。一个公式被赋予一组这些真值。因此，一个公式 A 可以取值{T}、{F}、{T,F}或∅。如果一个公式取值{T}，那么它就是真的；同样，如果它取值{F}，那么它就是假的；如果它取值{T,F}，那么它既是真的又是假的；如果它取值∅，那么它既不是真的也不是假的。

每个公式都有一个真条件和一个假条件。例如，如果 A 的值中有 T，那么¬A 的值中就有 F；如果¬A 的值中有 F，那么 A 的值中就有 T。关于合取，如果 A&B 的值中有 T，那么 A 的值中就有 T，B 的值中也有 T；如果 A&B 的值中有 F，那么 A 的值中要么有 F，要么 B 的值中有 F。析取的真假条件非常类似。

邓恩提出了他的语义学来描述一阶蕴涵（FDE）的逻辑，该逻辑仅处理无蕴涵的公式之间的蕴涵关系。（有关 FDE 的性质和发展的论文，请参见 Omori＆Wansing 2017 年。）Richard Routley（1988 年）将该理论扩展到处理一些弱相关逻辑，并且 Restall（1995 年）将该理论扩展到处理比突出的相关逻辑 E 和 R 更弱的逻辑（请参见下面的第 4 和第 5 节）。Mares（2004a）使用邻域语义和四个真值为 R 提供了一种语义学。有关四值语义的详细信息，请参见关于矛盾逻辑的条目。其他关于否定的处理方法，其中一些已用于相关逻辑，请参见 Wansing（2001 年）和关于否定的条目。

## 3. 量化的语义学

在（1980 年），Richard Routley 猜测，一个常量域语义学，就像从模态逻辑中熟悉的那样，将表征量化的相关逻辑。根据这种语义学，普遍量化的公式∀xA（x）在一个世界上为真，当且仅当 A（x）在 x 的每个解释上为真。

不幸的是，基特·芬（1988a）证明了逻辑 RQ（相关蕴涵逻辑 R 与一些标准量化公理的结合）在常量域语义上是不完备的。

芬（1988b）还开发了一种语义，使得 RQ 在此语义下是完备的，并且可以修改以适应任何主流的相关逻辑。芬的语义是“分层”的。这意味着一个模型由一组微型模型组成，每个微型模型都有自己的个体域。这些微型模型与具有较大域的模型相关联，模型中的每个世界与这些具有较大域的模型中的世界类似相关。关于芬的语义如何工作的非常清晰的解释可以在 Shay Logan（2019）中找到。

Mares 和 Robert Goldblatt（2006）提出了另一种量化相关逻辑的语义，并在 Goldblatt（2011）中进一步发展。除了世界和域，该理论上的模型还包含一组命题，这些命题是指定的词组集合。对于一个世界 w，公式∀xA(x)在 w 上为真，当且仅当在 w 上存在一个命题π为真，使得π蕴涵 A(x)的每个实例。这意味着在集合π的每个世界中，每个 A(x)的实例都为真。

Mares-Goldblatt 语义学被称为“可接受集合”语义学。命题是可接受的集合。在某些模型中，不是每个世界的集合都被视为命题。这样做的一个理由来自于对人类如何将情况联系在一起的反思。并不是每个情况的集合都是我们会看到集合成员彼此之间以及集合外其他情况之间的相似性。认为命题是一组可以作为某个人内容的世界集合似乎是合理的。（也许，如果我们构建一种语言来谈论人们可以用其他词语思考的内容，我们可以将命题集合与世界进行索引。但这是一个留待以后讨论的话题。）

量化相关理论中一个有用的补充是用于表示受限量化的条件语句。这是由 Jc Beall 等人（2006）提出的。考虑范畴方案“所有的 A 都是 B”。这个方案在经典逻辑的语言中被翻译为∀x(A(x)⊃B(x))。材料蕴涵⊃在相关逻辑中无法完成这个任务（其中 A⊃B 被理解为¬A∨B）。如果我们在相关逻辑的模型中使用材料蕴涵这种方式，我们可以有一个世界，在这个世界中所有的 A 都是 B，而且某个 i 是 A，但 i 不是 B。材料蕴涵太弱，而相关蕴涵太强。例如，当某人说“这个房间的每个人都有一只狗”时，她并不是指从在这个房间里就可以推断人们有一只狗。相反，只是碰巧每个人在这个房间里都有一只狗。这种介于材料蕴涵和相关蕴涵之间的联系，受限量化条件语句被认为捕捉到了。

不过，对于一些较弱的相干逻辑来说，Beall 等人（2006）的条件连接词是否是正确的使用方式尚不清楚。一些较弱系统的优点之一是它们可以用来形式化天真集合论（见第 6 节）。Zach Weber（2010）已经使用这个条件连接词来定义子集关系，从而形式化了天真集合论。然而，所得到的系统是平凡的，因为其中的每个公式都是可证的。

## 4. 证明论

通常被视为典范相干逻辑的逻辑是逻辑 R。有关 R 的公理化，请参见逻辑 R。

现在有几种证明理论 R 的方法。由 Gregory Mints（1972）和 J.M. Dunn（1973）提出的逻辑 R 的无否定片段的序列演算法，以及由 Nuel Belnap（1982）开发的一种优雅而非常通用的方法，称为“展示逻辑”。但在这里，我只处理由 Anderson 和 Belnap 提出的相关逻辑 R 的自然演绎系统。

Anderson 和 Belnap 的自然演绎系统基于 Fitch 的经典逻辑和直觉逻辑的自然演绎系统。理解这种技术的最简单方法是通过看一个例子。

| 1. | A{1}      | Hyp      |
| ---- | ----------- | ---------- |
| 2. | (A→B){2} | Hyp      |
| 3. | B{1,2}    | 1,2,→ E |

这是一个简单的假言演绎的情况。方括号中的数字表示用于证明该公式的假设。我们将它们称为“指标”。结论中的指标表示在推导结论时真正使用的假设。在以下的“证明”中，第二个前提实际上没有被使用：

| 1. | A{1}      | Hyp      |
| ---- | ----------- | ---------- |
| 2. | B{2}      | Hyp      |
| 3. | (A→B){3} | Hyp      |
| 4. | B{1,3}    | 1,3,→ E |

这个“证明”实际上只是表明从 A 和 A→B 推导到 B 的推理是相干有效的。因为结论的下标中没有出现数字 2，第二个“前提”实际上并不算作前提。

同样地，当一个蕴涵被相干地证明时，前提的假设必须真正被用来证明结论。这里是一个蕴涵的证明示例：

| 1. | A{1}           | Hyp      |
| ---- | ---------------- | ---------- |
| 2. | (A→B){2}      | Hyp      |
| 3. | B{1,2}         | 1,2,→ E |
| 4. | ((A→B)→B){1} | 2,3,→ I |
| 5. | A→((A→B)→B) | 1,4,→ I |

当我们推翻一个假设，就像这个证明的第 4 行和第 5 行一样，假设的数字必须真正出现在将成为蕴涵的结果的公式的下标中。

现在，看起来索引系统允许无关的前提进入。可能会出现无关因素的一种方式是通过使用合取引入规则。也就是说，似乎我们总是可以通过以下方式添加一个无关的前提：

| 1. | A{1}       | Hyp      |
| ---- | ------------ | ---------- |
| 2. | B{2}       | Hyp      |
| 3. | (A&B){1,2} | 1,2, &I  |
| 4. | B{1,2}     | 3, &E    |
| 5. | (B→B){1}  | 2,4,→ I |
| 6. | A→(B→B)  | 1,5,→ I |

对于一个相干逻辑学家来说，第一个前提在这里完全不合适。为了阻止这样的移动，安德森和贝尔纳普提出了以下的合取引入规则：

从 Ai 和 Bi 推断出(A&B)i。

这个规则表示，在使用合取引入规则之前，要求要连接的两个公式具有相同的索引。

当然，自然演绎系统还有很多内容（参见 Anderson 和 Belnap 1975 以及 Anderson，Belnap 和 Dunn 1992），但对于我们的目的来说，这就足够了。至少一些相关逻辑所捕捉到的相关性理论可以通过对应的自然演绎系统如何记录前提的真实使用来理解。

## 5. 相干逻辑的一些系统

在安德森和贝尔纳普的工作中，相干逻辑的核心系统是相干蕴涵逻辑 E 和相干蕴涵系统 R。这两个系统之间的关系是，E 的蕴涵连接词被认为是严格（即必然的）的相干蕴涵。为了比较这两个系统，梅耶在 R 上添加了一个必然运算符（产生逻辑 NR）。然而，拉里萨·马克西莫娃发现 NR 和 E 有重要的区别-在 NR 上有一些定理（根据自然翻译）不是 E 的定理。这让一些相干逻辑学家陷入了困境。他们不得不决定是选择 NR 还是 E 作为相干蕴涵系统。如果选择 E，那么也许说蕴涵只是相干蕴涵加上逻辑必然性就不合理了。可能蕴涵和蕴涵有其他的关系。

另一方面，有些相干逻辑学家拒绝 R 和 E。有些人，比如阿尔农·阿弗隆，接受比 R 更强的逻辑（阿弗隆 1990 年）。还有一些人，比如罗斯·布雷迪、约翰·斯兰尼、史蒂夫·吉安布隆、理查德·西尔万、格雷厄姆·普里斯特、格雷格·雷斯托尔等人，主张接受比 R 或 E 更弱的系统。一个极弱的系统是罗伯特·梅耶和埃罗尔·马丁的逻辑 S。正如马丁证明的那样，这个逻辑不包含形式为 A→A 的定理。换句话说，根据 S，没有命题蕴涵自身，也没有形式为“A，因此 A”的论证是有效的。因此，这个逻辑不使任何循环论证成立。

有关这些逻辑的更多细节，请参阅关于逻辑 E、逻辑 R、逻辑 NR 和逻辑 S 的补充。

在支持较弱系统的观点中，与 R 或 E 不同，其中许多系统是可判定的。一些较弱逻辑的另一个吸引人之处是它们可以用来构建一个天真的集合论。天真的集合论是一个包含天真概括公理作为定理的集合论，即对于所有的公式 A(y),

∃x∀y(y∈x↔A(y)).

在基于强相关逻辑（如 E 和 R）以及经典集合论的集合论中，如果我们添加天真概括公理，我们能够推导出任何公式。因此，基于 E 和 R 等系统的天真集合论被称为“平凡的”。下面是使用逻辑 R 的推理原理对天真集合论的平凡性进行直观概述的证明草图。设 p 是任意命题：

| 1. | ∃x∀y(y∈x↔(y∈y→p))      | 相干逻辑                 |
| ---- | ------------------------------ | -------------------------- |
| 2. | ∀y(y∈z↔(y∈y→p))         | 1，存在实例化            |
| 3. | z∈z↔(z∈z→p)              | 2，全称实例化            |
| 4. | z∈z→(z∈z→p)              | 3，↔ 的定义，& 消除     |
| 5. | (z∈z→(z∈z→p))→(z∈z→p) | 相干逻辑的公理           |
| 6. | z∈z→p                      | 4,5, 演绎法则            |
| 7. | (z∈z→p))→z∈z             | 3, 相干逻辑的 df, &-消除 |
| 8. | z∈z                         | 6,7, 演绎法则            |
| 9. | p                            | 6,8, 演绎法则            |

因此，我们展示了在这个天真的集合论中，任何任意命题都是可推导的。这就是臭名昭著的 Curry 悖论。这个悖论的存在导致了 Grishen、Brady、Restall、Priest 和其他人放弃了收缩公理((A→(A→B))→(A→B))。Brady 已经证明，通过从 R 中删除收缩，再加上一些其他关键命题，我们可以得到一个可以接受天真理解而不变得平凡的逻辑(Brady 2005)。

从自然演绎系统的角度来看，收缩的存在意味着允许前提被多次使用。考虑以下证明：

| 1. | A→(A→B){1}        | Hyp       |
| ---- | --------------------- | ----------- |
| 2. | A{2}                | Hyp       |
| 3. | A→B{1,2}           | 1,2,→ E  |
| 4. | B{1,2}              | 2,3,→ E  |
| 5. | A→B{1}             | 2–4,→ I |
| 6. | (A→(A→B))→(A→B) | 1–5,→ I |

使得收缩的推导成立的原因是我们的下标是集合。我们不追踪一个假设在其推导中被使用的次数（超过一次）。为了拒绝收缩，我们需要一种计算假设使用次数的方法。因此，无收缩系统的自然演绎系统使用“多重集合”而不是集合中的相关数字结构 - 这些结构中特定数字的出现次数计数，但它们出现的顺序不计。甚至可以构建更弱的系统，这些系统还追踪假设使用的顺序（参见 Read 1986 和 Restall 2000）。

对于三个较为知名且广泛使用的弱相关逻辑 B、DK 和 DJ，请参阅有关它们的补充：

相关逻辑 B、DJ 和 DK。

## 6. 与主流相干逻辑密切相关的系统

有一些系统值得被称为相干的，但并非主流相干逻辑。其中一个这样的系统是格雷厄姆·普里斯特的逻辑 N4。介绍这个逻辑的最简单方法是解释它的语义。

N4 的模型由一组被分为正常和非正常世界的世界组成。在每个世界上，根据前面第 2 节中解释的邓恩的语义，给出公式的四个真值，涉及到合取、析取和否定。但是蕴涵的处理方式相当有趣。在正常世界中，蕴涵 A→B 当且仅当在每个世界 w 中，如果 A 在 w 中为真，则 B 在 w 中也为真。如果存在至少一个世界中 A 为真且 B 为假，则蕴涵为假。在非正常世界中，蕴涵的真值和假值是随机确定的。

N4 是一种相干逻辑。它具有变量共享属性。并且它具有非常简单和直观的语义。然而，它是一种非常弱的逻辑。它不包含任何蕴涵的传递性公理。它有一个传递性规则。它既不包含对偶命题公理，也不包含对偶命题的规则形式。

另一个非常有趣的逻辑是尼尔·坦南特的核心逻辑。相干逻辑被创造出来的一个“谬误”是 ex falso quodlibet，或者爆炸 - 从矛盾推导出任何命题。C.I.刘易斯通过一个小论证来证明了爆炸的合理性。他从前提 p&¬p 开始。通过合取消去，他推导出 p，并通过析取引入，推导出 p∨q。从前提中，他还通过合取消去推导出¬p。因此，他有了 p∨q 和¬p。通过这些，刘易斯通过析取三段论推导出 q。主流的相干逻辑学家通过拒绝析取三段论来阻止这个论证。然而，拒绝析取三段论已经成为相干逻辑中最具争议的方面之一。

然而，坦南特的核心逻辑接受析取三段论。它还接受合取消去和析取引入。事实上，核心逻辑支持我们在直觉主义逻辑的证明理论中找到的所有标准原始规则。因此，可以说核心逻辑中连接词的含义就是它们在直觉主义逻辑中的含义。不同的是它对证明的一个结构规则的处理 - 它拒绝了逻辑推论的传递性在其最一般的形式中。

另一个与相干逻辑密切相关的逻辑系统是威廉·帕里的分析蕴涵逻辑。分析蕴涵逻辑的动机是满足一种非常强的变量共享形式的愿望。在这个逻辑中，除非 B 中的所有变量都包含在 A 中，否则无法证明任何蕴涵 A→B。为了满足这个强变量共享原则，必须限制析取引入原则。因此，不是对于所有公式 A 和 B 都有 A→(A∨B)作为定理，而是只有当 B 中的所有命题变量也在 A 中时，该模式才有效。对于蕴涵的对偶原则和一些蕴涵的传递性原则也必须加以限制。

分析蕴涵逻辑已经被基特·芬恩赋予了一种优雅的可能世界语义。芬恩在可能世界模型中添加了一个主题领域。在一个世界上，如果一个蕴涵既在所有可访问的世界中保持真实，而且后件的每个主题也是前件的主题，那么该蕴涵成立（Fine 1986）。

有关分析蕴涵和相干逻辑的比较，请参见 Routley 等人的 1982 年第 96-101 页。有关分析蕴涵的详细研究和辩护，请参见弗格森（2017）。

## 7. 相干逻辑的应用和扩展

除了提供更好的推理和蕴涵的形式化表达以及为朴素集合论提供基础之外，相干逻辑在哲学和计算机科学中也被广泛应用。在这里，我只列举了一些例子。

Dunn 基于相干逻辑发展了一种关于内在和本质属性的理论。这就是他的相干断言理论。简而言之，一个事物 i 具有一个相干属性 F 当且仅当∀x(x=i→F(x))。非正式地说，如果成为某个事物的相干推导意味着具有该属性，则该对象具有相干属性。由于相干蕴涵的结论的真实性本身不足以证明该蕴涵的真实性，事物既可以具有相干属性，也可以具有不相干属性。Dunn 的表述似乎至少捕捉到了我们使用内在属性概念的一种意义。通过向语言中添加模态性，可以将本质属性的概念形式化为既是必然的又是内在的属性（参见 Anderson、Belnap 和 Dunn 1992 年，§74）。

相干逻辑已被用作除了集合论之外的数学理论的基础。Meyer基于逻辑R提出了一种Peano算术的变体。Meyer通过有限手段证明了他的相干算术不具有0=1作为定理。因此，Meyer在相干算术的背景下解决了希尔伯特的一个核心问题；他用有限手段证明了相干算术的绝对一致性。这使得相干Peano算术成为一个极其有趣的理论。不幸的是，正如Meyer和Friedman所示，相干算术并不包含所有经典Peano算术的定理。因此，我们不能从中推断出经典Peano算术的绝对一致性（参见Meyer和Friedman 1992）。

安德森（1967 年）基于 R 提出了一种基于相干逻辑的德意志逻辑系统，而近年来，马雷斯（1992 年）和卢戈布尔（1999 年）将相干逻辑作为德意志逻辑的基础。这些系统避免了传统德意志逻辑中的一些常见问题。标准德意志逻辑面临的一个问题是，它们使得从 A 是一个定理到 OA 是一个定理的推理成立，其中“OA”表示“应该是 A”。这个问题出现的原因是，现在通常将德意志逻辑视为一种正常的模态逻辑。在模态逻辑的标准语义中，如果 A 是有效的，那么它在所有可能的世界上都是真的。此外，如果在一个世界 a 上，OA 是真的，那么 A 在 a 可达的每个世界上都是真的。因此，如果 A 是一个有效的公式，那么 OA 也是一个有效的公式。但是，说每个有效的公式都应该成立似乎是愚蠢的。为什么现在厄瓜多尔要么下雨要么不下雨呢？在相干逻辑的语义中，并不是每个世界都使得每个有效的公式成立。只有一类特殊的世界（有时称为“基本世界”或“正常世界”）使得有效的公式成立。任何有效的公式都可能在某个世界上失败。通过在我们的模型中允许这些“非正常世界”，我们使这个有问题的规则无效化。

相干逻辑还添加了其他类型的模态运算符。Fuhrmann（1990 年）将熟悉的经典模态逻辑的通常公理调整为相干上下文，从而产生了一系列相干模态逻辑，并证明了它们的完备性结果。知识模态运算符也被添加到相干逻辑中，由 Heinrich Wansing（2002 年）、Marta Bilkova、Ondrej Majer、Michal Peliš和 Greg Restall（2010 年）等人完成。Shawn Standefer（2019 年）提出了一个与正当性逻辑相关的版本，并最近在相干逻辑中添加了一个实际性运算符。甚至还有一个关于问题和答案的相干逻辑（参见 Punčochář 2020 年）。

Routley和Val Plumwood（1989）以及Mares和André Fuhrmann（1995）基于相干逻辑提出了反事实条件句的理论。他们的语义在标准的Routley-Meyer语义基础上增加了一个在一个公式和两个世界之间成立的可达关系。在Routley和Plumwood的语义中，如果对于所有的世界b，使得SAab成立，则在世界a中A>B成立。Mares和Fuhrmann的语义稍微更复杂：如果对于所有的世界b，使得SAab成立，则在世界a中A>B成立，并且在b中A→B也成立（详见Brady（ed.）2002，§10中的详细信息）。Mares（2004）提出了一个更复杂的相关条件句理论，其中包括反事实条件句。所有这些理论都避免了在标准的反事实逻辑中出现的蕴涵悖论的类似情况。

相干逻辑在计算机科学和哲学中都有应用。线性逻辑是由让-伊夫·吉拉尔创立的逻辑学分支，它是一种计算资源的逻辑。线性逻辑学家将蕴含式A→B解读为拥有类型A的资源使我们能够获得类型B的某物。如果我们有A→(A→B)，那么我们知道我们可以从两个类型为A的资源中获得B。但这并不意味着我们可以从一个类型为A的资源中获得B，也就是说，我们不知道我们是否可以获得A→B。因此，在线性逻辑中，收缩失败。线性逻辑实际上是缺乏收缩和合取分配律((A&(B∨C))→((A&B)∨(A&C)))的相干逻辑。它们还包括两个被称为“指数”的运算符(!和?)。在公式前面加上一个指数，使得该公式能够经典地行动，可以这么说。例如，就像在标准的相干逻辑中一样，我们通常不能仅仅添加一个额外的前提到一个有效的推理中并使其保持有效。但我们总是可以添加一个形式为!A的前提到一个有效的推理中并使其保持有效。线性逻辑还对形式为!A的公式具有收缩性，即这些逻辑的一个定理是(!A→(!A→B))→(!A→B)（参见Troelstra 1992）。使用!允许处理“可以任意复制或忽略的资源”（Restall 2000，第56页）。有关线性逻辑的更多信息，请参阅关于次结构逻辑的条目。

<!--md-padding-ignore-begin-->
## Bibliography

An extremely good, although slightly out of date, bibliography on relevance logic was put together by Robert Wolff and is in Anderson, Belnap, and Dunn (1992). What follows is a brief list of introductions to and books about relevant logic and works that are referred to above.

### Books on Relevance Logic and Introductions to the Field

* Anderson, A.R. and N.D. Belnap, Jr., 1975, *Entailment: The Logic of Relevance and Necessity*, Princeton, Princeton University Press, Volume I. Anderson, A.R. N.D. Belnap, Jr. and J.M. Dunn (1992) *Entailment*, Volume II.
  
  These are both collections of slightly modified articles on relevance logic together with a lot of material unique to these volumes. Excellent work and still the standard books on the subject. But they are very technical and quite difficult.
  
* Avron, A., 2014, “What is Relevance Logic?” *Annals of Pure and Applied Logic* 165:26–48.
  
  This paper puts forward a rather different view of what makes a relevance logic relevant.
  
* Beall, Jc, Ross Brady, J. Michael Dunn, A. P. Hazen, Edwin Mares, Robert K. Meyer, Graham Priest, Greg Restall, David Ripley, John Slaney and Richard Sylvan, 2012, “On the ternary relation and conditionality,” *Journal of Philosophical Logic*, 41(3): 595–612.
  
* Beall, JC, R. Brady, A. Hazen, G. Priest, and G. Restall, 2006, “Relevant Restricted Quantification,” *Journal of Philosophical Logic*, 35(6): 587–598.
  
* Brady, R.T., 2005, *Universal Logic*, Stanford: CSLI Publications, 2005.
  
  A difficult, but extremely important book, which gives details of Brady’s semantics and his proofs that naïve set theory and higher order logic based on his weak relevant logic are consistent.
  
* Dunn, J.M., 1986, “Relevance Logic and Entailment,” in F. Guenthner and D. Gabbay (eds.), *Handbook of Philosophical Logic* (Volume 3), Dordrecht: Reidel, pp. 117–24.
  
* Dunn, J.M. and G. Restall, “Relevance Logic” in D. Gabbay & F. Guenthner (eds.), *Handbook of Philosophical Logic* (Volume 6), second edition, Dordrecht: Springer, pp. 1–128.
  
  An updated and greatly expanded version of Dunn (1986).
  
* Mares, E.D., 2004, *Relevant Logic: A Philosophical Interpretation*, Cambridge: Cambridge University Press.
  
* Mares, E.D. and R.K. Meyer, 2001, “Relevant Logics,” in L. Goble (ed.), *The Blackwell Guide to Philosophical Logic*, Oxford: Blackwell.
  
* Norman, J. and R. Sylvan, 1988, *Directions in Relevant Logic*, Dordrecht: Kluwer.
  
  A good, although somewhat dated, collection of essays on relevance logic together with some on related logics, such as analytic implication.
  
* Paoli, F., 2002, *Substructural Logics: A Primer*, Dordrecht: Kluwer.
  
  Excellent and clear introduction to a field of logic that includes relevance logic.
  
* Priest, G., 2008, *An Introduction to Non-Classical Logic: From If to Is*, Cambridge: University of Cambridge Press.
  
  A very good and extremely clear presentation of relevant and other non-classical logics that uses a tableau approach to proof theory.
  
* Read, S., 1988, *Relevant Logic*, Oxford: Blackwell.
  
  A very interesting and fun book. Idiosyncratic, but philosophically adept and excellent on the pre-history and early history of relevance logic.
  
* Restall, G., 2000, *An Introduction to Substructural Logics*, London: Routledge.
  
  Excellent and clear introduction to a field of logic that includes relevance logic.
  
* Rivenc, François, 2005, *Introduction à la logique pertinente*, Paris: Presses Universitaires de France.
  
  In French. Gives a “structural” interpretation of relevant logic, which is largely proof theoretic. The structures involved are structures of premises in a sequent calculus.
  
* Routley, R., R.K. Meyer, V. Plumwood and R. Brady, 1982, *Relevant Logics and its Rivals* (Volume I), Atascardero, CA: Ridgeview.
  
  A very useful book for formal results especially about the semantics of relevance logics. The introduction and philosophical remarks are full of “Richard Routleyisms”. They tend to be Routley’s views rather than the views of the other authors and are fairly radical even for relevant logicians. Volume II updates Volume I and includes other topics such as conditionals, quantification, and decision procedures: R.Brady (ed.), *Relevant Logics and their Rivals* (Volum II), Aldershot: Ashgate, 2003.
  
* Goldblatt, R., 2011, *Quantifiers, Propositions and Identity: Admissible Semantics for Quantified Modal and Substructural Logics*, Cambridge: Cambridge University Press.
  
  A detailed account of the admissible semantics for quantified logic, applied to both modal and relevance logic, and provides a new type of semantics for quantified relevance logic called the “cover semantics”.
  
* Jago, M., 2013, “Recent Work in Relevant Logic,” *Analysis*, 73: 526–541.
  
  A very clear survey of recent technical and philosophical work in relevance logic.
  
### Other Works Cited

* Anderson, A.R., 1967, “Some Nasty Problems in the Formal Logic of Ethics,” *Noûs*, 1: 354–360.
* Avron, Arnon, 1990, “Relevance and Paraconsistency — A New Approach,” *The Journal of Symbolic Logic*, 55: 707–732.
* Bilková, M., O. Majer, M. Peliš, and G. Restall, 2010, “Relevant Agents” in L. Beklemishev, V. Gorenko, and V. Shehtman (eds.), *Advances in Modal Logic* (Volume 8), London: College Publications, 22–38.
* Barwise, J., 1993, “Constraints, Channels and the Flow of Information,” in P.Aczel, et al. (eds.), *Situation Theory and Its Applications* (Volume 3), Stanford: CSLI Publications, pp. 3–27.
* Belnap, N.D., 1982, “Display Logic,” *Journal of Philosophical Logic*, 11: 375–417.
* Brady, R.T., 1989, “The Non-Triviality of Dialectical Set Theory,” in G. Priest, R. Routley and J. Norman (eds.), *Paraconsistent Logic*, Munich: Philosophia Verlag, pp. 437–470.
* Dunn, J.M., 1973, (Abstract) “A ‘Gentzen System’ for Positive Relevant Implication,” *The Journal of Symbolic Logic*, 38: 356–357.
* –––, 1993, “Star and Perp,” *Philosophical Perspectives*, 7: 331–357.
* –––, 2015, “The Relevance of Relevance to Relevance Logic” in M. Banerjee and S.N. Krishna (eds.), *Logic and its Applications: 6th Indian Conference, ICLA 2015Mumbai, India, January 8–10, 2015Proceedings*, Basel: Springer, pp. 11–29.
* Ferguson, T.M., 2017, *Meaning and Proscription in Formal Logic*, Basel: Springer.
* Fine, K., 1974, “Models for Entailment,” *Journal of Philosophical Logic*, 3: 347–372.
* –––, 1986, “Analytic Implication” *Notre Dame Journal of Formal Logic*, 27: 169–179.
* –––, 1988a, “Incompleteness for Quantified Relevance Logic” in Norman and Sylvan (eds.), 1988, pp. 205–225.
* –––, 1988b, “Semantics for Quantified Relevance Logic” *Journal of Philosophical Logic*, 17: 27–59.
* Fuhrmann, A., 1990, “Models for Relevant Modal Logics,” *Studia Logica*, 49: 501–514.
* Goble, L., 1999, “Deontic Logic with Relevance” in P. McNamara and H. Prakken (eds.), *Norms, Logis and Information Systems*, Amsterdam: ISO Press, pp. 331–346.
* Grishin, V.N., 1974, “A Non-Standard Logic and its Application to Set Theory,” *Studies in Formalized Languages and Non-Classical Logics* (Russian), Moscow: Nauka.
* Israel, D. and J. Perry, 1990, “What is Information?,” in P.P. Hanson (ed.), *Information, Language, and Cognition*, Vancouver: University of British Columbia Press, pp. 1–19.
* Logan, S.A., 2019, “Notes on Stratified Semantics” *Journal of Philosophical Logic*, 48: 479–486.
* MacColl, H., 1908, “‘If’ and ‘imply’,” *Mind*, 17: 151–152, 453–455.
* Mares, E.D., 1992, “Andersonian Deontic Logic,” *Theoria*, 58: 3–20.
* –––, 1997, “Relevant Logic and the Theory of Information,” *Synthese*, 109: 345–360.
* –––, 2004a, ““Four-Valued” Semantics for the Relevant Logic R” *Journal of Philosophical Logic*, 33: 327–341.
* Mares, E.D. and A. Fuhrmann, 1995, “A Relevant Theory of Conditionals,” *Journal of Philosophical Logic*, 24: 645–665.
* Mares, E.D. and R. Goldblatt, 2006, “An Alternative Semantics for Quantified Relevant Logic” *The Journal of Symbolic Logic*, 71: 163–187.
* Meyer, R.K. and H. Friedman, 1992, “Whither Relevant Arithmetic?,” *The Journal of Symbolic Logic*, 57: 824–831.
* Omori, H. and H. Wansing (eds.), 2017, “40 years of FDE: An Introductory Overview” *Studia Logica*, 105: 1021–1049.
* Punčochář, V., 2020, “A Relevant Logic of Questions” *Journal of Philosophical Logic*, 49: 905–939. doi:10.1007/s10992-019-09541-9
* Rantala, V., 1982, “Quantified Modal Logic: Non-Normal Worlds and Propositional Attitudes,” *Studia Logica*, 41: 41–65.
* Restall, G., 1995, “Four-Valued Semantics for Relevant Logics (and Some of their Rivals)” *Journal of Philosophical Logic*, 24: 139–160.
* –––, 1996, “Information Flow and Relevant Logics,” in J. Seligman and D. Westerstahl (eds.), *Logic, Language and Computation* (Volume 1), Stanford: CSLI Publications, pp. 463–478.
* Routely, R., and V. Routley, 1972, “The Semantics of First Degree Entailment,” *Noûs*, 6(4): 335–369.
* Routely, R., 1980, “Problems and Solutions in the Semantics of Quantified Relevant Logics, I” in A.I. Arruda, R. Chuaqui, N.C.A. Da Costa (eds.), *Mathematical Logic in Latin America* Amsterdam: North Holland, 1980, pp. 309–340.
* Routley, R. and A. Loparic, 1978, “Semantical Analysis of Arruda-da Costa P Systems and Adjacent Non-Replacement Relevant Systems,” *Studia Logica*, 37: 301–322.
* Sperber, D. and D. Wilson, 2002, “Relevance Theory” in L. Horn & G. Ward (eds.), *The Handbook of Pragmatics*, Oxford: Blackwell, pp. 607–632.
* Standefer, S., 2019, “Tracking Reasons with Extensions of Relevant Logics” *Logic Journal of the IGPL*, 27: 543–569.
* Tennant, Neil., 2017, *Core Logic*, Oxford: Oxford University Press.
* Troelstra, A.S., 1992, *Lectures on Linear Logic*, Stanford: CSLI Publications.
* Urquhart, A., 1972, “Semantics for Relevant Logics” *The Journal of Symbolic Logic*, 37: 159–169.
* Wansing, H., 2001, “Negation,” in L. Goble (ed.), *The Blackwell Guide to Philosophical Logic*, Oxford: Blackwell, pp. 415–436.
* –––, 2002, “Diamonds are a Philosopher’s Best Friends,” *Journal of Philosophical Logic*, 31: 591–612.
* Weber, Z., 2010, “Extensionality and Restriction in Naive Set Theory” *Studia Logica*, 94: 87–104.

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-relevance). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-relevance/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-relevance&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](https://philpapers.org/sep/logic-relevance/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* Jago, M., forthcoming, “[Truthmaker Semantics for Relevant Logic](https://link.springer.com/article/10.1007/s10992-019-09533-9)” *Journal of Philosophical Logic*, first online 7 January 2020, doi:10.1007/s10992-019-09533-9 [This paper develops a semantics for relevance logic based on Kit Fine’s theory of truthmakers.]

## Related Entries

[dialetheism](https://plato.stanford.edu/entries/dialetheism/) | [logic: intuitionistic](https://plato.stanford.edu/entries/logic-intuitionistic/) | [logic: modal](https://plato.stanford.edu/entries/logic-modal/) | [logic: paraconsistent](https://plato.stanford.edu/entries/logic-paraconsistent/) | [logic: substructural](https://plato.stanford.edu/entries/logic-substructural/) | [mathematics: inconsistent](https://plato.stanford.edu/entries/mathematics-inconsistent/) | [negation](https://plato.stanford.edu/entries/negation/)

### Acknowledgments

The author would like to thank an anonymous reviewer and Shawn Standefer for suggesting corrections and improvements.

[Copyright © 2020](https://plato.stanford.edu/info.html#c) by  
[Edwin Mares](http://www.vuw.ac.nz/phil/ed.html) <[*Edwin.Mares@vuw.ac.nz*](mailto:Edwin%2eMares%40vuw%2eac%2enz)>
<!--md-padding-ignore-end-->
