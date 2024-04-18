# 混合逻辑 hybrid (Torben Braüner)

*首次发表于2006年6月13日；实质性修订于2021年12月22日。*

混合逻辑是通过为普通模态逻辑增加进一步的表达能力而产生的逻辑学。最基本的混合逻辑是通过添加所谓的名词来获得的，这些名词是一种新类型的命题符号，每个符号在恰好一个可能世界中为真。混合逻辑的历史可以追溯到 1960 年代亚瑟·N·普赖尔的工作。

* [1. 对混合逻辑的动机](https://plato.stanford.edu/entries/logic-hybrid/#MotHybLog)
* [ 2. 形式语义学](https://plato.stanford.edu/entries/logic-hybrid/#ForSem)
* [ 3. 翻译](https://plato.stanford.edu/entries/logic-hybrid/#Tra)
* [4. Arthur N. Prior 和混合逻辑学](https://plato.stanford.edu/entries/logic-hybrid/#ArtPriHybLog)
* [5. Prior 以来混合逻辑学的发展](https://plato.stanford.edu/entries/logic-hybrid/#DevHybLogSinPri)
* [6. 混合逻辑的公理](https://plato.stanford.edu/entries/logic-hybrid/#ProMetHybLog1)
* [7. 混合逻辑的分析证明方法](https://plato.stanford.edu/entries/logic-hybrid/#ProMetHybLog2)
* [8. 量化混合逻辑](https://plato.stanford.edu/entries/logic-hybrid/#QuanHybrLogi)
* [ 参考文献](https://plato.stanford.edu/entries/logic-hybrid/#Bib)
* [ 学术工具](https://plato.stanford.edu/entries/logic-hybrid/#Aca)
* [其他互联网资源](https://plato.stanford.edu/entries/logic-hybrid/#Oth)
* [ 相关条目](https://plato.stanford.edu/entries/logic-hybrid/#Rel)

---

## 1. 混合逻辑的动机

在模态逻辑的标准 Kripke 语义中，真值是相对于集合中的点而言的。因此，命题符号在不同的点上可能具有不同的真值。通常，这些点被认为代表可能的世界、时间、认知状态、计算机中的状态或其他某些东西。这使我们能够形式化自然语言陈述，其真值相对于例如时间的陈述。

> 正在下雨。

这在不同的时间具有不同的真值。现在，某些自然语言陈述在确切的时间、可能的世界或其他情况下是真的。一个例子是陈述

> 现在是 2021 年 11 月 15 日五点钟。

在 2021 年 11 月 15 日五点钟这个时间点上是真的，但在其他所有时间点上都是假的。第一类自然语言陈述可以在普通的模态逻辑中形式化，但第二类则不行。

混合逻辑的一个主要动机是为了增加普通模态逻辑的表达能力，以便能够形式化第二类陈述。这是通过在普通模态逻辑中添加一种叫做名词的命题符号来实现的，使得在 Kripke 语义中，每个名词相对于一个点是真的。第二类自然语言陈述（例如具体时间点为 2021 年 11 月 15 日五点钟的例子陈述）是使用名词来形式化的，而不是普通的命题符号（用于形式化具有下雨天气的例子陈述）。名词相对于一个点是真的这一事实意味着名词可以被视为指向一个点的术语，例如，如果 a 是一个代表“现在是 2021 年 11 月 15 日五点钟”的名词，那么这个名词可以被视为指向 2021 年 11 月 15 日五点钟这个时间点的术语。因此，在混合逻辑中，术语是一种特定类型的命题符号，而在一阶逻辑中，术语是谓词的参数。

大多数混合逻辑涉及比名词更多的附加机制。有许多选项可供添加；在这里，我们将考虑所谓的满足运算符。添加满足运算符的动机是为了能够形式化一个陈述在特定时间、可能世界或其他某个情况下为真。例如，我们希望能够形式化陈述“正在下雨”的真实性在 2021 年 11 月 15 日五点钟这个时间点上。

> 在 2021 年 11 月 15 日五点钟，正在下雨。

这由公式@ap 正式化，其中名词 a 代表“2021 年 11 月 15 日五点钟”，如上所述，而 p 是一个普通的命题符号，代表“正在下雨”。公式@ap 的部分@a 被称为满足运算符。一般来说，如果 a 是一个名词，ϕ是一个任意的公式，那么可以构建一个新的公式@aϕ，称为满足陈述。满足陈述@aϕ表示公式ϕ相对于一个特定的点是真实的，即名词 a 所指的点。

总之，我们现在已经通过名词和满足运算符的形式为普通的模态逻辑增加了进一步的表达能力。非正式地说，名词 a 具有真值条件

> 相对于点 w，a 是真的
> 当且仅当
> a 的指称与 w 相同。

并且满足语句@aϕ具有真值条件

> @aϕ相对于一个点 w 是真的
> 当且仅当
> ϕ相对于 a 的参照是真的。

需要注意的是，实际上点 w 在@aϕ的真条件中并不重要，因为满足运算符@a 将评估点移动到 a 的参照，无论 w 是什么。

值得注意的是，名词和满足运算符一起使我们能够表达两个点是相同的：如果名词 a 和 b 分别指向点 w 和 v，则公式@ab 表示 w 和 v 是相同的。以下推理过程说明了原因。

> @ab 相对于点 w 是真的
> 当且仅当
> b 相对于 a 的参照是真的
> 当且仅当
> b 相对于 w 是真的
> 当且仅当
> b 的参照与 w 相同
> 当且仅当
> v 与 w 相同。

集合上的身份关系具有众所周知的自反性、对称性和传递性的特性，这反映在以下事实中：公式

@aa@ab→@ba(@ab&@bc)→@ac

是混合逻辑的有效公式。此外，公式

(@ab&@aϕ)→@bϕ

是有效的。这是替换规则。注意与带有相等性的一阶逻辑中的公式(a=b&ϕ(a))→ϕ(b)（通常称为莱布尼兹定律）的相似性。

除了名词和满足运算符之外，在接下来的内容中，我们将考虑所谓的绑定符号∀和↓，它们允许我们构建公式∀aϕ和↓aϕ。绑定符号将名词与两种不同方式的点绑定在一起：∀绑定符号类似于标准的一阶普遍量词，它量化与点相关的内容，即，对于给定的 w，如果名词 a 所指的点是真实的，那么ϕ在 w 中也是真实的。↓绑定符号将名词绑定到评估点，即，对于给定的 w，如果名词 a 在 w 中指向的点是真实的，那么ϕ在 w 中也是真实的。事实证明，↓绑定符号可以通过∀来定义（如下所示）。

## 2. 形式语义学

我们考虑的语言是建立在普通命题符号 p,q,r,...以及名词 a,b,c,...上的普通模态逻辑语言，并通过满足运算符和绑定符进行扩展。我们将命题联结词∧和¬视为原始的；其他命题联结词按照通常的方式定义。类似地，我们将模态运算符□视为原始的，并将模态运算符◊定义为¬□¬。正如名称所示，绑定符绑定名词，并且名词的自由出现和绑定出现的概念与一阶逻辑类似地进行定义。满足运算符不绑定名词，也就是说，在公式@aϕ中的自由名词出现是指公式ϕ中的自由名词出现以及名词 a 的出现。我们将ϕ[c/a]表示为将名词 c 替换为名词 a 的所有自由出现的公式ϕ。如果名词 a 在ϕ的范围内自由出现在∀c 或↓c 的作用域中，则ϕ中的绑定名词 c 将被适当地重命名。

现在我们定义模型和框架。混合逻辑的模型是一个三元组(W,R,V)，其中 W 是一个非空集合，R 是 W 上的二元关系，V 是一个将 W 的元素和普通命题符号的每对元素分配到集合{0,1}中的函数。二元组(W,R)被称为一个框架。因此，模型和框架与普通模态逻辑中的相同。W 的元素被称为世界，关系 R 被称为可达关系。模型(W,R,V)被称为基于框架(W,R)。

对于模型 M=(W,R,V)，一个赋值是一个将每个名词分配给 W 的元素的函数 g。如果 g'在除了可能的 a 之外与 g 在所有名词上都一致，则 g'是 g 的 a-变体。关系 M,g,w⊨ϕ由归纳定义，其中 g 是一个赋值，w 是 W 的一个元素，ϕ是一个公式。

> M,g,w⊨p 当且仅当 V(w,p)=1
> M,g,w⊨a 当且仅当 w=g(a)
> M,g,w⊨ϕ∧ψ 当且仅当 M,g,w⊨ϕ 且 M,g,w⊨ψ
> M,g,w⊨¬ϕ 当且仅当不满足 M,g,w⊨ϕ
> M,g,w⊨□ϕ 当且仅当对于任意的 W 中的元素 v，使得 wRv 成立，则 M,g,v⊨ϕ
> M,g,w⊨@aϕ 当且仅当 M,g,g(a)⊨ϕ
> M,g,w⊨∀aϕ 当且仅当对于 g 的任何 a-变体 g′，M,g′,w⊨ϕ成立。
> M,g,w⊨↓aϕ 当且仅当存在 g 的 a-变体 g′，使得 M,g′,w⊨ϕ且 g′(a)=w。

如果在 w 处公式ϕ为真，则记作 M,g,w⊨ϕ；否则称其在 w 处为假。按照惯例，M,g⊨ϕ表示对于 W 中的每个元素 w，M,g,w⊨ϕ成立；M⊨ϕ表示对于每个赋值 g，M,g⊨ϕ成立。如果一个公式ϕ在一个框架中是有效的，那么当且仅当基于该框架的任何模型 M 满足ϕ时，ϕ在该框架中是有效的。如果一个公式ϕ在一类框架 F 中是有效的，那么当且仅当ϕ在 F 中的任何框架中都是有效的。如果一个公式ϕ是有效的，那么当且仅当ϕ在所有框架的类中都是有效的。满足性的定义留给读者。

注意，绑定器↓可以根据∀的公式↓aϕ↔∀a(a→ϕ)在任何框架中都是有效的。

实际上，混合普通模态逻辑确实提供了更多的表达能力，例如，考虑公式↓c□¬c，可以看出这一点。很容易检查出，如果一个框架是非自反的，那么这个公式在该框架中是有效的。因此，非自反性可以通过混合逻辑公式来表达，但众所周知，它不能通过任何普通模态逻辑的公式来表达。非自反性实际上只需通过向普通模态逻辑添加名词来表达，即通过公式 c→□¬c。混合逻辑可以表达的其他一些属性，但普通模态逻辑无法表达的有：非对称性（由 c→□¬◊c 表示），反对称性（由 c→□(◊c→c)表示）和普遍性（由◊c 表示）。

有关混合逻辑的语法和语义的详细解释，请参阅 Areces 和 ten Cate（2006）的手册章节，以及许多其他基本定义。上述的语法和语义可以通过多种方式进行扩展，特别是可以添加一阶量化（当然，获得一阶混合逻辑的等效方法是将混合逻辑机制添加到一阶模态逻辑中）。请参阅 Braüner（2014）以获取一阶混合逻辑的概述，参阅 Braüner（2011a）的第 6 章以获取更详细的解释，以及参阅 Braüner（2011a）的第 7 章以获取涉及一阶混合逻辑的解释。

## 3. 翻译

混合逻辑可以被翻译成带有相等性的一阶逻辑，而（一个片段的）带有相等性的一阶逻辑可以被翻译回（一个片段的）混合逻辑。所考虑的一阶语言具有一个一元谓词符号 p∗，对应于模态逻辑的每个普通命题符号 p，一个二元谓词符号 R，和一个二元谓词符号=。当然，谓词符号 p∗的解释将使得它将对应的模态命题符号 p 的解释相对化到世界上，谓词符号 R 将使用可及性关系进行解释，谓词符号=将使用世界上的恒等关系进行解释。我们让 a，b，c，...代表一阶变量。该语言没有常量或函数符号。我们将一阶变量与混合逻辑的名词等同起来。

我们首先将混合逻辑翻译成带有相等性的一阶逻辑。给定两个新的一阶变量 a 和 b，翻译 STa 和 STb 通过相互递归来定义。我们只给出翻译 STa。

STa(p)=p∗(a)STa(c)=a=cSTa(ϕ∧ψ)=STa(ϕ)∧STa(ψ)STa(¬ϕ)=¬STa(ϕ)STa(□ϕ)=∀b(R(a,b)→STb(ϕ))STa(@cϕ)=STa(ϕ)[c/a]STa(↓cϕ)=STa(ϕ)[a/c]STa(∀cϕ)=∀cSTa(ϕ)

STb 的定义通过交换 a 和 b 获得。该翻译是从模态逻辑到一阶逻辑的众所周知的标准翻译的扩展。作为示例，我们逐步演示了如何将混合逻辑公式↓c□¬c 翻译为一阶逻辑公式：

STa(↓c□¬c)=STa(□¬c)[a/c]=∀b(R(a,b)→STb(¬c))[a/c]=∀b(R(a,b)→¬STb(c))[a/c]=∀b(R(a,b)→¬b=c)[a/c]=∀b(R(a,b)→¬b=a).

由此可见，得到的一阶公式等价于¬R(a,a)，这表明↓c□¬c 确实对应于可达关系的非自反性，参见上文。

具有相等性的一阶逻辑可以通过下面给出的混合逻辑的翻译 HT 转换回来。

HT(p∗(a))=@apHT(R(a,c))=@a◊cHT(a=c)=@acHT(ϕ∧ψ)=HT(ϕ)∧HT(ψ)HT(¬ϕ)=¬HT(ϕ)HT(∀aϕ)=∀aHT(ϕ)

注意，需要混合逻辑学中的混合逻辑绑定符号∀。上述观察的历史可以追溯到亚瑟·N·普赖尔的工作，我们稍后会回到这个问题上。

同样，所谓的一阶逻辑的有界片段可以翻译成混合逻辑，但这里只需要绑定符号↓，正如 Areces、Blackburn 和 Marx（2001）在论文中指出的那样。有界片段是一阶逻辑的片段，其特点是量词仅出现在公式∀c(R(a,c)→ϕ)中，其中要求变量 a 和 c 不同。从有界片段到不带∀绑定符号的混合逻辑的翻译可以通过将上述翻译 HT 中的最后一个子句替换为

HT(∀c(R(a,c)→ϕ))=@a□↓cHT(ϕ)。

在 Areces，Blackburn 和 Marx（2001）中，给出了有界片段的许多独立的语义表征。

上述给出的翻译是保真的。为了正式陈述这一点，人们利用了一个众所周知的观察结果，即混合逻辑的模型和赋值可以被视为一阶逻辑的模型和赋值，反之亦然。这些保真性结果很容易形式化，并将细节留给读者。因此，具有绑定符号∀的混合逻辑具有与具有相等性的一阶逻辑相同的表达能力，而没有绑定符号∀（但具有绑定符号↓）的混合逻辑具有与一阶逻辑的有界片段相同的表达能力（注意，任何没有绑定符号∀的公式ϕ的翻译 STa（ϕ）都在有界片段中）。

上述翻译可以扩展到一阶混合逻辑，此时相关的目标逻辑是具有相等性的双排序一阶逻辑，其中一个排序用于世界，另一个排序用于个体，参见 Braüner（2011a）的第 6 章。在涉及意向的一阶混合逻辑中，使用了三个排序，第三个排序用于意向，参见 Braüner（2011a）的第 7 章。

## 4. Arthur N. Prior 和混合逻辑

混合逻辑的历史可以追溯到 Arthur N. Prior 的混合时态逻辑，这是普通时态逻辑的混合版本。为了进一步研究这个问题，我们将给出混合时态逻辑的形式定义。混合时态逻辑的语言与上述定义的混合逻辑的语言相同，只是有两个模态算子，即 G 和 H，而不是单一的模态算子□。这两个新的模态算子被称为时态算子。混合时态逻辑的语义是混合逻辑的语义，参见前文，其中□的子句被时态算子 G 和 H 的子句所替代。

> 对于任意的 W 中的元素 v，使得 wRv 成立，当且仅当 M,g,v⊨ϕ成立，我们有 M,g,w⊨Gϕ。
> 对于任意的 W 中的元素 v，使得 vRw 成立，当且仅当 M,g,v⊨ϕ，则 M,g,w⊨Hϕ。

因此，现在有两个模态运算符，一个“向前看”沿着可及关系，一个“向后看”。在时态逻辑中，集合 W 的元素被称为时刻或瞬间，关系 R 被称为先后关系。

当然，可以直接修改上述 STa 和 HT 的翻译，以便在混合时态逻辑（包括∀绑定器）和带有相等性的一阶逻辑之间获得翻译。所考虑的一阶逻辑是 Prior 所称的一阶先后逻辑。根据这些翻译，可以得出 Prior 的一阶先后逻辑具有与混合时态逻辑相同的表达能力。

现在，Prior 在与他所称之为四个时态逻辑参与等级相关的情况下引入了混合时态逻辑。他引入四个时态逻辑参与等级的动机是哲学的。这四个等级在 Prior（1968）的书中被提出，第十一章（也是新版 Prior（2003）的第十一章）。此外，参见 Prior（1967）的第 V.6 章和附录 B.3-4。有关更一般的讨论，请参见后来出版的 Prior 和 Fine（1977）的书。这些阶段从可以被视为纯一阶先后逻辑的阶段逐渐发展到可以被视为纯时态逻辑的阶段；目标是能够将第四阶段的时态逻辑视为第一阶段的先后逻辑的包容。换句话说，目标是能够将先后关系的一阶逻辑转化为时态逻辑。为了实现这个目标，Prior 引入了所谓的瞬时命题：

> 我将称之为第三级时态逻辑参与的是将瞬时变量 a、b、c 等也视为命题的情况。（Prior 2003，第 124 页）

在模态逻辑的背景下，Prior 称这样的命题为可能世界命题。当然，这就是我们在这里称之为名词的东西。Prior 还引入了全称量词∀和我们在这里称之为满足运算符（他使用了 T(a,ϕ)的符号而不是@aϕ来表示满足运算符）。实际上，Prior 的第三级时态逻辑与上述定义的混合时态逻辑是相同的。↓量词是后来引入的。因此，Prior 通过在普通时态逻辑中进一步添加名词、满足运算符和全称量词∀的表达能力，获得了他的一阶先后逻辑的表达能力。从技术角度来看，他显然达到了他的目标。

然而，从哲学角度来看，人们争论的焦点是他的第三级时态逻辑的本体论意义是否与一阶先后逻辑的本体论意义相同。例如，一些作者认为∀绑定符是对一阶∀量词的直接类比，因此值得怀疑；例如，参见 Copeland（1996）的论文 Sylvan（1996）。有关 Prior 的第四级时态逻辑的讨论，请参见 Braüner（2002）。另请参见Øhrstrøm 和 Hasle（1993）、Øhrstrøm 和 Hasle（2006）、Müller（2007）和 Blackburn（2006）。最后，请参阅 Braüner（2011a）第 1 章中对 Prior 的四个级别的讨论。

Hasle（2020）的论文指出，在 Prior（1967）和 Prior（1968）（新版 Prior（2003））出版之前，Prior 的作品中存在混合逻辑思想的痕迹。上述提到的Øhrstrøm 和 Hasle（2006）的论文详细介绍了 Prior 的逻辑工作。有关 Prior 生平和工作的全面介绍，请参阅Øhrstrøm 和 Hasle（1995）的书籍。Hasle 和Øhrstrøm（2016）的论文描述了 Prior 的方法论，特别是他对形式化和符号逻辑在概念研究中的作用的看法。

## 5. Prior 以来混合逻辑的发展

混合逻辑的第一个完全严格的定义是由 Bull（1970）给出的，它出现在《Theoria》杂志的一个特刊中，以纪念 Prior。Bull 引入了第三种命题符号，其中一个命题符号被假定为在分支时间模型中的一个分支（“事件过程”）上恰好为真。根据对它们解释的限制对命题符号进行分类的这种思想已经被一些作者进一步发展，详见 Blackburn 和 Tzakova（1999）的第 5 节，以及 Blackburn 和 Goranko（2001）。

混合逻辑学方法最初是由普赖尔在 20 世纪 60 年代末发明的，后来在 20 世纪 80 年代由保加利亚的 Solomon Passy 和 Tinko Tinchev 重新发明，详见 Passy 和 Tinchev（1985）以及 Passy 和 Tinchev（1991）。与普通模态逻辑不同，这项工作是与更具表达力的命题动态逻辑相关的。

20 世纪 90 年代的一个重要贡献是引入了↓绑定符号。↓绑定符号的早期版本由 Valentin Goranko 在 Goranko（1994）和 Goranko（1996）的论文中引入。本文的版本是在 Blackburn 和 Seligman（1995）中引入的。从那时起，带有↓绑定符号的混合逻辑已经得到了广泛研究，详见 Areces，Blackburn 和 Marx（2001）关于该逻辑的模型论方面的论文。关于混合逻辑的模型论的全面研究是 ten Cate（2004）的博士论文。Areces，Fervari，Hoffmann 和 Martel（2018）的论文考虑了带有↓绑定符号的强混合逻辑与所谓的关系变化模态逻辑之间的关系。

同样，通过省略绑定符↓和∀而获得的较弱的混合逻辑也是广泛探索的对象。事实证明，这种无绑定符的逻辑及其多个变体是可判定的。在 Areces、Blackburn 和 Marx（1999）的论文中，给出了一些关于各种类别框架上的混合模态和时态逻辑的复杂性结果，例如任意的、传递的、线性的和分支的框架。值得注意的是，在任意框架上，无绑定符混合逻辑的可满足性问题是可判定的，其复杂性与判定普通模态逻辑的可满足性的复杂性相同，即 PSPACE。因此，混合化普通模态逻辑提供了更强的表达能力，但复杂性保持不变。一些工作已经在模态逻辑中模拟名词，参见 Kracht 和 Wolter（1997）。

任何普通的模态公式都表达了框架上的单调二阶性质，众所周知，对于一些模态公式，包括所谓的 Sahlqvist 公式，二阶性质等价于一阶性质。在 Goranko 和 Vakarelov（2006）的论文中，证明了这一点也适用于一类混合逻辑公式，包括名词。存在几种算法用于计算普通模态公式的一阶等价物。其中一种算法 SQEMA，在 Conradie、Goranko 和 Vakarelov（2006）的论文中被扩展以涵盖 Goranko 和 Vakarelov（2006）中考虑的混合逻辑公式。

如前一节所述，Prior引入了混合时态逻辑来处理时间哲学中的一个特定问题，但在Prior（1968）的第XIV章（也是新版Prior（2003）的第XIV章）中，他还展示了混合时态逻辑可以取代Hans Kamp在1967年流传的未发表材料中引入的二维时间逻辑，并后来收录在Kamp（1971）中。维度仅仅是一个公式相对于评估的瞬间数，因此添加混合逻辑机制可以将两个维度替换为一个。Blackburn和Jørgensen最近在一系列论文中对这项工作进行了跟进，有关概述请参见Blackburn和Jørgensen（2016a）。现在我们简要概述这一工作线路，并根据本条目的术语进行调整。所讨论的混合逻辑版本具有指定的名义“现在”，每个模型都带有一个指定的时间t0，使得i）任何独立的公式相对于t0进行评估，ii）名义“现在”指的是t0。更正式地说，我们采用约定（M，t0），g⊨ϕ表示M，g，t0⊨ϕ，并且我们只考虑满足g（now）=t0的赋值g。请注意，名义“现在”作为一个独立的公式，在这个语义中是有效的，但对于任何其他名义来说并非如此。Blackburn和Jørgensen将这种新的有效性概念称为上下文有效性。Blackburn和Jørgensen（2013）的论文给出了一个与此上下文有效性概念完备的公理系统。Blackburn和Jørgensen（2012）的论文给出了一个完备的表格系统，但该论文的语义与Kamp最初的二维语义一致。这两篇论文还考虑了昨天、今天和明天等进一步的指示词。

Blackburn 和 Jørgensen（2016b）的论文使用混合逻辑学将 Prior 的思想与 Hans Reichenbach 关于如何表示自然语言时态的思想相结合。Prior 更喜欢上述所描述的众所周知的时态运算符，而 Reichenbach 更喜欢时间参照，即对特定时间的参照，参见 Reichenbach（1947）。事实证明，这两种方法可以结合起来，这并不是 Prior 自己采取的路线-请参阅 Blackburn 和 Jørgensen（2016b）中给出的解释。

混合逻辑学的概念已经应用于许多不同的领域，例如，Areces 和 Fervari（2021）的论文将混合运算符添加到 XPath 中，XPath 是一种广泛使用的用于 XML 的查询语言，XML 是一种描述数字文本的标记语言。混合逻辑学还被用于增加规范逻辑的表达能力，以捕捉计算系统的某些属性，参见 Neves，Madeira，Martins，Barbosa（2016）。此外，还应该提到类似混合逻辑的逻辑在描述逻辑领域起着核心作用，描述逻辑是一族用于人工智能中的知识表示的逻辑，参见 Blackburn 和 Tzakova（1998）的论文和 Carlos Areces 的博士论文（2000）。

## 6. 混合逻辑的公理

一些论文讨论了混合逻辑的公理，例如 Gargov 和 Goranko（1993），Blackburn（1993）和 Blackburn 和 Tzakova（1999）。在 Gargov 和 Goranko（1993）的论文中给出了一个混合逻辑的公理系统，并且证明了如果该系统扩展了一组纯公式的附加公理（即，所有命题符号都是名词），那么扩展的公理系统在验证相关公理的框架类中是完备的。纯公式对应于关于可达关系的一阶条件（参见上面的 STa 翻译），因此可以通过适当地添加公理以统一的方式获得具有关于可达关系的一阶条件的新混合逻辑的公理系统。因此，例如，如果将公式 c→□¬c 添加为公理，则所得到的系统在不可反射框架方面是完备的，正如我们之前提到的。请参阅 Blackburn（2000）论文第 4 节中对此类规则的讨论。

Gargov 和 Goranko（1993）中的证明系统使用了一个复杂的规则（称为 COV），其中包含规则的活动部分的公式模式可以是任意大的；实际上，活动部分嵌套在任意深的模态运算符下。Blackburn 和 Tzakova（1999）表明，可以使用满足运算符来以更标准的格式制定一个公理系统，使用一个更简单的规则（称为 PASTE），在扩展了纯公理的情况下，该系统仍然是完备的。

本文研究了 Blackburn 和 ten Cate（2006）的论文中的正统证明规则，这些规则没有附加条件，并且证明了如果要求使用纯公式进行扩展完备性，那么在无绑定混合逻辑的公理系统中，非正统的证明规则是不可或缺的。然而，在包括↓绑定的更强的混合逻辑的情况下，可以给出一个只涉及正统证明规则的公理系统。另请参阅 Braüner（2011a）的书中的另一个混合逻辑的公理系统，以及直觉主义混合逻辑和 Nelson 的非矛盾逻辑 N4 的混合化的公理系统（与 Costa 和 Martins（2017）中考虑的另一个非矛盾混合逻辑进行比较）。Braüner（2011b）中可以找到直觉主义混合逻辑的调查。

## 7. 混合逻辑的分析证明方法

表格、Gentzen和自然演绎风格的混合逻辑证明理论与普通模态逻辑相比表现得非常出色。通常情况下，当给出一个模态表格、Gentzen或自然演绎系统时，它是针对特定的模态逻辑的，而在不引入元语言机制的情况下，为模态逻辑制定这样的系统往往会出现问题。这可以通过混合化来解决，即通过混合化模态逻辑，可以为广泛的逻辑类别制定统一的表格、Gentzen和自然演绎系统。Blackburn（2000）的论文介绍了一种具有这种理想特性的混合逻辑表格系统：类似于Blackburn和Tzakova（1999）的公理系统，如果在表格系统中扩展一组纯公理，即在表格构建过程中允许添加的一组纯公式，那么完备性将得到保持。Blackburn（2000）的表格系统是Bolander和Braüner（2006）中给出的无绑定片段混合逻辑的决策过程的基础。这一工作的延续可以在Bolander和Blackburn（2007）以及Bolander和Blackburn（2009）的论文中找到。Cerrito和Cialdea（2010）的论文提出了另一种基于表格的混合逻辑决策过程。基于证明理论的其他混合逻辑决策过程可以在Kaminski和Smolka（2009）的论文中找到。后一篇论文的过程基于涉及简单类型λ演算的混合逻辑的高阶表述。

Hansen, Bolander 和 Braüner（2018）的文章为多值混合逻辑提供了基于表格的决策过程，即将基于两值经典逻辑的基础推广为涉及具有有限 Heyting 代数结构的真值空间的多值逻辑基础。Hansen（2010）为称为公共公告逻辑的动态认知逻辑的混合版本提供了基于表格的决策过程。这也是 Hansen（2011）博士论文的一个重要问题。

Braüner（2011a）的书中探讨了混合逻辑的自然演绎风格的证明理论。该书还为混合逻辑提供了无割 Gentzen 序列系统。通过一个归一化的自然演绎系统证明了无割性，但这样的结果也可以直接证明，参见 Indrzejczak（2016）。Braüner（2011a）的自然演绎和 Gentzen 系统可以通过额外的证明规则进行扩展，这些规则对应于由所谓的几何理论表达的可达关系上的一阶条件（这当然类似于通过纯公理扩展表格和公理系统）。另请参阅 Braüner 和 de Paiva（2006），其中为直觉主义混合逻辑提供了自然演绎系统（Braüner（2011a）的第 8 章）。

乔治·塞利格曼（Jerry Seligman）在 20 世纪 90 年代已经探索了类似于混合逻辑的逻辑的 Gentzen 和自然演绎系统，详见 Seligman（2001）的概述。特别是，Seligman 开发了与任意公式一起工作的证明系统，而不仅仅是满足性陈述，后者是大多数混合逻辑证明系统的情况，其中满足性运算符用于访问隐藏在模态后面的信息。这种风格的自然演绎系统在 Seligman（1997）中引入，该系统在 Braüner（2011a）的第 4 章中进一步发展。在 Blackburn，Bolander，Braüner 和 Jørgensen（2017）中考虑了 Seligman 证明风格中的表格系统，并给出了一个句法完备性证明。在 Jørgensen，Blackburn，Bolander，Braüner（2016）中给出了表格系统的语义完备性证明。在这些系统中进行推理不直接依赖于满足性运算符所可能实现的全局编码，因此，这些系统可以被认为更符合模态逻辑标准 Kripke 语义的局部特性。事实上，这种更局部的推理风格使得这些系统适用于形式化某些心理推理任务中发生的透视推理，详见 Braüner（2014b）以及 Braüner，Blackburn 和 Polyanskaya（2016）。

如上所述，Blackburn，Bolander，Braüner 和 Jørgensen（2017）以及 Jørgensen，Blackburn，Bolander，Braüner（2016）的论文为 Seligman 风格的混合逻辑表格系统提供了完备性证明。基于这些结果，From（2021）和 From，Blackburn 和 Villadsen（2020）使用证明助手 Isabelle/HOL 对这些系统的完备性进行了全面的形式化。

已经进行了一些关于解析演算和模型检查的工作，参见 Areces，de Rijke 和 de Nivelle（2001），以及 Areces 和 Gorin（2011）关于解析演算，参见 Franceschet 和 de Rijke（2006）以及 Lange（2009）关于模型检查的结果。

## 8. 量化混合逻辑

我们单独处理量化混合逻辑。一阶模态逻辑有许多不同版本，这也是一阶混合逻辑的情况。一阶混合逻辑的表格系统可以在 Blackburn 和 Marx（2002）的论文中找到。一阶混合逻辑的自然演绎和公理系统可以在 Braüner（2011a）的第 6 章中找到，第 7 章处理了关于内涵一阶混合逻辑的自然演绎。Indrzejczak（2020）的论文给出了一阶混合逻辑的 Gentzen 风格的序列演算，其中包括 lambda 运算符以及存在性和定义性谓词。Barbosa，Martins 和 Carreteiro（2014）的论文给出了一阶混合逻辑的一个片段的公理化，称为等式一阶混合逻辑。

令人注目的是，一阶混合逻辑恰好提供了证明插值定理所需的特性：虽然在一些众所周知的一阶模态逻辑中插值定理失败，但它们的混合化对应物具有这个性质，参见 Areces，Blackburn 和 Marx（2003）以及 Blackburn 和 Marx（2003）。第一篇论文给出了一个模型论证明插值定理，而第二篇论文则基于一个表格系统给出了计算插值的算法。

Areces，Blackburn，Huertas 和 Manzano（2014）的论文涉及到高阶模态逻辑的混合逻辑版本（即，在 Church 的简单类型理论上构建的模态逻辑）。给出了公理系统，并证明了关于 Henkin 类型语义的完备性。Blackburn，Huertas，Manzano 和 Jørgensen（2014）的论文将这些结果扩展到包括下箭头绑定符，并给出了与一阶逻辑有界片段之间的翻译（见上文）。

Prior 有时不是将名词作为第二种命题符号引入，而是使用命题量词和定义如下的 Q 运算符来创建它们：

> Qp=◊p∧∀q(□(p→q)∨□(p→¬q))

这里的□和◊是普遍模态的方框和菱形形式。通过在普通命题符号 p 前加上 Q 运算符，将 p 转换为名词。更准确地说，将命题量词∀q 范围限定在所有世界的集合上，Qp 表示 p 表示一个单例集合，即 p 是一个标准名词。但是，还有一种解释命题量词的方法，称为一般（或亨金）方法，其中命题量词范围限定在预先选择的世界子集上。以这两种不同的方式解释，Q 运算符产生了两种不同的“物种”名词，而且这两种名词在普遍实例化规则方面的行为不同。这在 Blackburn、Braüner 和 Kofod（2020）的论文中进行了研究，该论文为具有亨金式命题量词的混合逻辑提供了一个表格系统，其中包含两种名词的“物种”。此外，该论文还描述了这个形式上定义的“物种划分”与 Prior 的著作中可以检测到的两种关于名词的直觉相当吻合。

自 1990 年代中期以来，混合逻辑的研究蓬勃发展。我们将读者参考参考书目中的出版物以获取更多参考资料。此外，请参阅下面的互联网资源。

## Bibliography

* Areces, C., 2000. *Logic Engineering. The Case of Description and Hybrid Logics*, Ph.D. thesis, Institute for Logic, Language and Computation, University of Amsterdam.
* Areces, C., Blackburn, P., and Marx, M., 1999. “The Computational Complexity of Hybrid Temporal Logics”, *The Logic Journal of the IGPL*, 8: 653–679.
* –––, 2001. “Hybrid Logics: Characterization, Interpolation and Complexity”, *Journal of Symbolic Logic*, 66: 977–1010.
* –––, 2003. “Repairing the Interpolation Theorem in Quantified Modal Logic”, *Annals of Pure and Applied Logic*, 124: 287–299.
* Areces, C., Blackburn, P., Huertas, A., and Manzano, M., 2014. “Completeness in Hybrid Type Theory”, *Journal of Philosophical Logic*, 43: 209–238.
* Areces, C., de Rijke, M., and de Nivelle, H., 2001. “Resolution in Modal, Description and Hybrid Logic”, *Journal of Logic and Computation*, 11: 717–736.
* Areces, C. and Fervari, R., 2021. “Axiomatizing Hybrid XPath with Data”, *Logical Methods in Computer Science*, 17:5:1–5:37.
* Areces, C., Fervari, R., Hoffmann, G., and Martel, M., 2018. “Satisfiability for Relation-Changing Logics”, *Journal of Logic and Computation*, 28: 1443–1470.
* Areces, C. and Gorin, D., 2011. “Resolution with Order and Selection for Hybrid Logics”, *Journal of Automated Reasoning*, 46: 1–42.
* Areces, C. and ten Cate, B., 2006. “Hybrid Logics”, in Blackburn, van Benthem, and Wolter (eds.) (2006): 821–868.
* Barbosa, L.S., Martins, M.A., and Carreteiro, M., 2014. “A Hilbert-Style Axiomatisation for Equational Hybrid Logic”, *Journal of Logic, Language and Information*, 23: 31–52.
* Blackburn, P., 1993. “Nominal Tense Logic”, *Notre Dame Journal of Formal Logic*, 14: 56–83.
* –––, 2000. “Internalizing Labelled Deduction”, *Journal of Logic and Computation*, 10: 137–168.
* –––, 2006. “Arthur Prior and Hybrid Logic”, *Synthese*, 150: 329–372.
* Blackburn, P., Bolander, T., Braüner, T., and Jørgensen, K.F., 2017. “Completeness and Termination for a Seligman-style Tableau System”, *Journal of Logic and Computation*, 27: 81–107.
* Blackburn, P., Braüner, T., and Kofod, J.L., 2020. “Remarks on Hybrid Modal Logic with Propositional Quantfiers”, in *The Metaphysics of Time: Themes from Prior* (*Logic and Philosophy of Time*, No. 4), pp. 401–426, Aalborg Universitetsforlag.
* Blackburn, P. and Goranko, V., 2001. “Hybrid Ockhamist Temporal Logic”, in *Proc. of the Eighth International Symposium on Temporal Representation and Reasoning (TIME-01)*, pp. 183–188, IEEE Computer Society Press.
* Blackburn, P., Huertas, A., Manzano, M., and Jørgensen, K.F., 2014. “Henkin and Hybrid Logic”, in *The Life and Work of Leon Henkin: Essays on His Contributions* (Studies in Universal Logic), pp. 279–306, Birkhäuser.
* Blackburn, P. and Jørgensen, K.F., 2012. “Indexical hybrid tense logic”, in *Advances in Modal Logic* (Volume 9), pp. 144–160, London: College Publications.
* –––, 2013. “Contextual validity in hybrid logic”, in *Modeling Using Context* (Lecture Notes in Computer Science: Volume 8177), pp. 185–198, Heidelberg: Springer.
* –––, 2016a. “Arthur Prior and ‘now’”, *Synthese*, 193: 3665–3676.
* –––, 2016b. “Reichenbach, Prior and hybrid tense logic”, *Synthese*, 193: 3677–3689.
* Blackburn, P. and Marx, M., 2002. “Tableaux for Quantified Hybrid Logic”, in *Automated Reasoning with Analytic Tableaux and Related Methods, TABLEAUX* (Lecture Notes in Artificial Intelligence: Volume 2381), pp. 38–52, Heidelberg: Springer.
* –––, 2003. “Constructive Interpolation in Hybrid Logic”, *Journal of Symbolic Logic*, 68: 463–480.
* Blackburn, P. and Seligman, J., 1995. “Hybrid Languages”, *Journal of Logic, Language and Information*, 4: 251–271.
* Blackburn, P. and ten Cate, B., 2006. “Pure Extensions, Proof Rules, and Hybrid Axiomatics”, *Studia Logica*, 84: 277–322.
* Blackburn, P. and Tzakova, M., 1998. “Hybridizing Concept Languages”, *Annals of Mathematics and Artificial Intelligence*, 24: 23–49.
* –––, 1999. “Hybrid Languages and Temporal Logic”, *Logic Journal of the IGPL*, 7: 27–54.
* Blackburn, P., van Benthem, J., and Wolter, F. (eds.), 2006. *Handbook of Modal logic*, Amsterdam: Elsevier.
* Bolander, T. and Blackburn, P., 2007. “Termination for Hybrid Tableaus”, *Journal of Logic and Computation*, 17: 517–554.
* –––, 2009. “Terminating Tableau Calculi for Hybrid Logics Extending K”, in *Proceedings of Methods for Modalities 5* (Electronic Notes in Theoretical Computer Science: Volume 231), pp. 21–39, Amsterdam: Elsevier.
* Bolander, T. and Braüner, T., 2006. “Tableau-Based Decision procedures for Hybrid Logic”, *Journal of Logic and Computation*, 16: 737–763.
* Braüner, T., 2002. “Modal logic, Truth, and the Master Modality”, *Journal of Philosophical Logic*, 31: 359–386.
* –––, 2011a. *Hybrid Logic and its Proof-Theory* (Applied Logic Series: Volume 37), Dordrecht-Heidelberg-Berlin-New York: Springer.
* –––, 2011b. “Intuitionistic Hybrid Logic: Introduction and Survey”, *Information and Computation*, 209: 1437–1446.
* –––, 2014a. “First-order Hybrid Logic: Introduction and Survey”, *Logic Journal of the IGPL*, 22: 155–165.
* –––, 2014b. “Hybrid-Logical Reasoning in the Smarties and Sally-Anne Tasks”, *Journal of Logic, Language and Information*, 23: 415–439.
* Braüner, T., Blackburn, P., and Polyanskaya, I., 2016. “Second-order false-belief tasks: Analysis and formalization”, in *Logic, Language, Information, and Computation : 23rd International Workshop, WoLLIC* (Lecture Notes in Computer Science: Volume 9803), pp. 125–144, Heidelberg: Springer.
* Braüner, T. and de Paiva, V., 2006. “Intuitionistic Hybrid Logic”, *Journal of Applied Logic*, 4: 231–255.
* Bull, R., 1970. “An Approach to Tense Logic”, *Theoria*, 36: 282–300.
* Cerrito, S. and Cialdea, M., 2010. “Nominal Substitution at Work with the Global and Converse Modalities”, in *Advances in Modal Logic* (Volume 8), pp. 57–74, London: College Publications.
* Conradie, W., Goranko, V., and Vakarelov, D., 2006. “Algorithmic Correspondence and Completeness in Modal Logic II. Polyadic and Hybrid Extensions of the Algorithm SQEMA”, *Journal of Logic and Computation*, 16: 579–612.
* Copeland, J. (ed.), 1996. *Logic and Reality: Essays in the Legacy of Arthur Prior*, Oxford: Clarendon Press.
* Costa, D. and Martins, M.A., 2017. “Paraconsistency in Hybrid Logic”, *Journal of Logic and Computation*, 27: 1825–1852
* Franceschet, M. and de Rijke, M., 2006. “Model Checking Hybrid Logics (With An Application to Semistructured Data)”, *Journal of Applied Logic*, 4: 279–304.
* From, A.H., 2021. “Completeness for a Terminating Seligman-Style Tableau System”, in *26th International Conference on Types for Proofs and Programs* (TYPES 2020), Leibniz International Proceedings in Informatics (LIPIcs): Volume 188, Schloss Dagstuhl–Leibniz-Zentrum für Informatik, pp. 5:1–5:17.
* From, A.H., Blackburn, P., and Villadsen, J., 2020. “Formalizing a Seligman-Style Tableau System for Hybrid Logic”, in: *Proceedings of 10th International Joint Conference on Automated Reasoning* (IJCAR), Lecture Notes in Computer Science (Voume 12166), pp. 474–482, Cham: Springer-Verlag.
* Gabbay, D. and Woods, J. (eds.), 2006. *Logic and the Modalities in the Twentieth Century. The Handbook of the History of Logic* (Volume 7), Amsterdam: Elsevier.
* Gargov, G. and Goranko, V., 1993. “Modal Logic with Names”, *Journal of Philosophical Logic*, 22: 607–636.
* Goranko, V., 1994. “Temporal Logic with Reference Pointers”, in *Proceedings of the 1st International Conference on Temporal Logic* (Lecture Notes in Artificial Intelligence: Volume 827), pp. 133–148, Berlin: Springer.
* –––, 1996. “Hierarchies of Modal and Temporal Logics with Reference Pointers”, *Journal of Logic, Language, and Information*, 5: 1–24.
* Goranko, V. and Vakarelov, D., 2001. “Sahlqvist Formulas in Hybrid Polyadic Modal Logics”, *Journal of Logic and Computation*, 11: 737–754.
* Hansen, J.U., 2010. “Terminating Tableaux for Dynamic Epistemic Logics”, in *Proceedings of the 6th Workshop on Methods for Modalities (M4M-6 2009)* (Electronic Notes in Theoretical Computer Science: Volume 262), pp. 141–156.
* –––, 2011. *A Logic Toolbox for Modeling Knowledge and Information in Multi-Agent Systems and Social Epistemology*, Ph.D. thesis, Roskilde University.
* Hansen, J.U., Bolander, T., and Braüner, T., 2018. “Many-Valued Hybrid Logic”, *Journal of Logic and Computation*, 28: 883–908.
* Hasle, P., 2020. “The Beginnings of Hybrid Logic: Meredith, Prior and the Contingent Constant n”, in *The Metaphysics of Time: Themes from Prior* (Logic and Philosophy of Time No. 4), pp. 145–163, Aalborg Universitetsforlag.
* Hasle, P. and Øhrstrøm, P., 2016. “Prior’s Paradigm for the Study of Time and its Methodological Motivation”, *Synthese*, 193: 3401–3416.
* Indrzejczak, A., 2016. “Simple cut elimination proof for hybrid logic”, *Logic and Logical Philosophy*, 25: 129–141.
* Indrzejczak, A., 2020. “Existence, Definedness and Definite Descriptions in Hybrid Modal Logic”, in *Advances in Modal Logic* (Volume 13), pp. 349–368, London: College Publications.
* Jørgensen, K.F., Blackburn, P., Bolander, B., and Braüner, T., 2016. “Synthetic Completeness Proofs for Seligman-style Tableau Systems”, in *Advances in Modal Logic* (Volume 11), pp. 302–321, London: College Publications.
* Kaminski, M. and Smolka, G., 2009. “Terminating Tableau Systems for Hybrid Logic with Difference and Converse”, *Journal of Logic, Language and Information*, 18: 437–464.
* Kamp, H., 1971. “Formal properties of ‘now’”, *Theoria*, 37: 237–273.
* Kracht, M. and Wolter, F., 1997. “Simulation and Transfer Results in Modal Logic — A Survey”, *Studia Logica*, 59: 149–177.
* Lange, M., 2009. “Model Checking for Hybrid Logic”, *Journal of Logic, Language and Information*, 18: 465–491.
* Müller, T., 2007. “Prior’s Tense-Logical Universalism”, *Logique et Analyse*, 50: 223–252.
* Neves, R., Madeira, A., Martins, M.A., Barbosa, L.S., 2016. “Proof theory for hybrid(ised) logics”, *Science of Computer Programming*, 126: 73–93.
* Øhrstrøm, P. and Hasle, P., 1993. “A.N. Prior’s Rediscovery of Tense Logic”, *Erkenntnis*, 39: 23–50.
* –––, 1995. *Temporal Logic. From Ancient Ideas to Artificial Intelligence*, Dordrecht: Kluwer.
* –––, 2006. “A.N. Prior’s Logic”, in Gabbay and Woods (2006), pp. 399–446.
* Passy, S. and Tinchev, T., 1985. “Quantifiers in Combinatory PDL: Completeness, Definability, Incompleteness”, in *Fundamentals of Computation Theory FCT 85* (Lecture Notes in Computer Science: Volume 199), pp. 512–519, Berlin: Springer.
* Passy, S. and Tinchev, T., 1991. “An Essay in Combinatory Dynamic Logic”, *Information and Computation*, 93: 263–332.
* Prior, A.N., 1967. *Past, Present and Future*, Oxford: Clarendon Press.
* –––, 1968. *Papers on Time and Tense*, Oxford: Clarendon Press.
* –––, 2003. *Papers on Time and Tense*, second revised and expanded edition of Prior 1968, edited by P. Hasle, P. Øhrstrøm, T. Braüner, and J. Copeland, Oxford: Oxford University Press.
* Prior, A.N. and Fine, K., 1977. *Worlds, Times and Selves*, London: Duckworth; based on manuscripts by Prior with a preface and a postscript by K. Fine.
* Reichenbach, H., 1947. *Elements of Symbolic Logic*, New York: Free Press.
* Seligman, J., 1997. “The logic of correct description”, in *Advances in Intensional Logic* (Applied Logic Series: Volume 7), pp. 107–135, Dordrecht: Kluwer.
* Seligman, J., 2001. “Internalisation: The Case of Hybrid Logics”, *Journal of Logic and Computation*, 11: 671–689.
* Sylvan, R., 1996. “Other Withered Stumps of Time”, in Copeland (1996), pp. 111–130.
* ten Cate, B., 2004. *Model Theory for Extended Modal Languages*, PhD thesis, Institute for Logic, Language and Computation, University of Amsterdam.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-hybrid). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-hybrid/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-hybrid&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/logic-hybrid/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* [A.N. Prior—The Founding Father of Temporal Logic](http://www.priorstudies.org/)

## Related Entries

[future contingents](https://plato.stanford.edu/entries/future-contingents/) | [logic: modal](https://plato.stanford.edu/entries/logic-modal/) | [logic: temporal](https://plato.stanford.edu/entries/logic-temporal/) | [possibilism-actualism debate](https://plato.stanford.edu/entries/possibilism-actualism/) | [Prior, Arthur](https://plato.stanford.edu/entries/prior/)

[Copyright © 2021](https://plato.stanford.edu/info.html#c) by  
[Torben Braüner](http://akira.ruc.dk/~torben/) <[*torben@ruc.dk*](mailto:torben%40ruc%2edk)>
