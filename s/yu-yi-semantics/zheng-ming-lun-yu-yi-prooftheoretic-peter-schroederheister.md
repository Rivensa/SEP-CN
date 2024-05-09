# 证明论语义 proof-theoretic (Peter Schroeder-Heister)

*首次发表于 2012 年 12 月 5 日星期三；实质性修订于 2023 年 8 月 18 日星期五*

证明论语义是真值条件语义的一种替代方案。它基于这样一个基本假设：赋予我们语言中某些表达式，特别是逻辑常量，意义的核心概念是证明而不是真理。从这个意义上说，证明论语义是以证明为基础的语义。证明论语义还意味着证明的语义，即描述我们在给定某些假设的情况下如何得出某些断言的实体的语义。证明论语义的这两个方面可以相互交织，即证明的语义本身通常是以证明的形式给出的。

证明论语义有几个根源，其中最具体的一个是根根在他的自然推理演算中的引入规则定义了逻辑常量的含义，而消除规则可以作为这个定义的结果得到（见第 2.2.1 节）。更广泛地说，它属于普拉维茨所称的一般证明论（见第 1.1 节）。更广泛地说，它是根据一个传统，即一个术语的含义应该通过参考它在我们的语言中的使用方式来解释。

在哲学中，证明论语义主要以“意义理论”为标题。这个术语是根据邓美特的观点提出的，他认为意义理论是理论哲学的基础，他将这个观点归功于弗雷格。术语“证明论语义”是由施罗德-海斯特（1991 年提出；在斯德哥尔摩的讲座中已经使用了 20 世纪 80 年代）提出的，目的是不仅仅将“语义”这个术语留给指称论主义——毕竟，“语义”是研究语言表达的意义的标准术语。此外，与“意义理论”不同，“证明论语义”一词同样涵盖了哲学和技术方面。1999 年，第一次以这个标题举办的会议在蒂宾根举行，第二次和第三次分别在 2013 年和 2019 年举行。许多其他地方也举办了类似的会议。第一本以这个标题出版的教科书于 2015 年问世（Francez 2015）。

本条目还包括以下与文本链接的补充文件：

* [证明论有效性的例子](https://plato.stanford.edu/entries/proof-theoretic-semantics/examples.html)
* [定义反思和悖论](https://plato.stanford.edu/entries/proof-theoretic-semantics/definitional-reflection.html)

---

## 1. 背景

### 1.1 一般证明论：结论 vs. 证明

术语“一般证明论”是由普拉维茨创造的。在一般证明论中，“希望通过研究证明本身来理解其本质”，与希尔伯特式的“还原证明论”相对立，后者试图将数学理论的证明分析为更基础的数学部分，如有限或构造性数学（普拉维茨，1972 年，第 123 页）。同样地，克雷塞尔（1971 年）要求重新定位证明论。他希望从一个被忽视的角度解释“最近的证明论研究成果。证明及其通过形式推导表示的表达被视为研究的主要对象，而不仅仅是分析推理关系的工具。”（克雷塞尔，1971 年，第 109 页）克雷塞尔关注证明论和可证明性论之间的二分法，普拉维茨则专注于证明论可能追求的不同目标。然而，两者都强调了通过研究证明作为基本实体来获得证明性（尤其是数学）知识的必要性。这特别意味着证明是认识实体，不应与形式证明或推导混淆。当推导被视为论证的表示时，它们实际上是推导所表示的内容。（然而，在接下来的讨论中，我们经常将“证明”与“推导”视为同义词，留给读者确定是指形式证明还是认识实体的证明。）在讨论普拉维茨（1971 年）的调查时，克雷塞尔（1971 年，第 111 页）明确提到了推导和心智行为之间的“映射”，并认为这是证明论的任务之一，包括对证明的同一性的研究，这是普拉维茨和马丁-勒夫将其列入证明论议程的一个主题。

这意味着在一般的证明论中，我们不仅仅关心 B 是否从 A 中得出，而且关心我们从 A 出发到达 B 的方式。从这个意义上说，一般的证明论是内涵的和认识论的，而模型论则是关注后果关系而不是建立后果关系的方式，因此是外延的和形而上的。

### 1.2 推理主义、直觉主义、反实在论

证明论语义本质上是推理的，因为推理活动在证明中得以体现。因此，它属于推理主义（这个术语是由布兰多姆创造的，参见他的 1994 年和 2000 年的著作），根据推理主义，推理和推理规则建立了表达式的意义，与指示主义相对立，指示主义认为指示是主要的意义形式。推理主义和“意义即使用”的语义观是证明论语义的广泛哲学框架。这种广义的哲学和语义观与构造主义观点相结合，构造主义观点起源于数学哲学，特别是数学直觉主义。大多数形式的证明论语义在精神上是直觉主义的，这意味着特别是拒绝或至少认为经典逻辑原则如排中律或双重否定律是有问题的。这部分是因为证明论语义的主要工具，自然演绎的演算法，偏向于直觉主义逻辑，因为其消除规则的直观主义表述是直接的。在那里，只有通过某种间接证明规则才能使用经典逻辑，这至少在某种程度上破坏了推理原则的对称性（见第 3.5 节）。如果采用自然演绎的观点，那么直觉主义逻辑是一种自然的逻辑系统。布劳尔-海廷-科尔莫哥洛夫（BHK）对逻辑符号的解释也起着重要作用。这种解释不是语义学的唯一方法，而是包含了各种常常比正式描述更为非正式的思想。其中特别重要的是它对蕴涵的功能观点，根据这个观点，一个的证明是一个构造函数，当应用于一个的证明时，会得到一个的证明。 这种功能性观点是证明论语义的许多概念的基础，特别是 Lorenzen、Prawitz 和 Martin Löf 的观点（见 2.1.1、2.2.2、2.2.3 节）。

根据 Dummett（1975）的观点，直觉主义的逻辑立场对应于反实在主义的哲学立场。真实主义观点认为存在与我们的认知方式无关的独立现实，这是所有句子都是真或假，与我们的认知方式无关的观点的形而上学对应物。证明论语义的主要部分遵循 Dummett 及其与反实在主义的关联。

### 1.3 Gentzen 风格的证明论：规约、归一化、削减

贡岑的自然演绎演算及其由普拉维茨提出的表达是大多数证明论语义方法的背景。自然演绎基于至少三个核心思想：

* 假设的消除：在推导过程中，假设可以被“消除”，因此自然演绎的核心概念是依赖于假设的推导。
* 分离：每个原始规则模式只包含一个逻辑常量。
* 引入和消除：逻辑常量的规则成对出现。引入规则允许推断出一个以该常量为主算符的公式，消除规则允许从这样的公式中推出结论。

在 Gentzen 的自然推理系统中，一阶逻辑的推导以树形式书写，并基于众所周知的规则。例如，蕴含具有以下引入和消除规则

括号表示可以消除假设 A 的可能性。推导的开放假设是推导的终结公式所依赖的假设。如果一个推导没有开放假设，则称为闭合的；否则称为开放的。如果我们处理量词，还必须考虑开放的个体变量（有时称为“参数”）。Prawitz（1965）首次系统地研究和发表的证明论语义的元逻辑特征包括：

简化：对于由立即跟随消除的引入组成的绕行，存在一步简化操作来移除此绕行。

规范化：通过连续应用简化操作，推导可以转化为不包含绕行的规范形式。

对于蕴含，移除绕行的标准简化步骤如下：

归纳的一个简单但非常重要的推论是：直觉逻辑中的每个封闭推导都可以简化为在最后一步使用引入规则的推导。我们还说直觉主义自然演绎满足“引入形式属性”。在证明论语义中，这个结果在“基本假设”（达梅特，1991 年，第 254 页）下占据重要地位。这个“基本假设”是对技术证明论结果的哲学重新解释的典型例子。

* 进一步阅读：*

关于证明论语义的一般导向，请参阅由卡勒和施罗德-海斯特（2006 年）编辑的 Synthese 特刊，由皮耶查和施罗德-海斯特（2016b）编辑的读者，法兰西（2015 年）的教科书，以及万辛（2000 年）和施罗德-海斯特（2016 年）的调查。

对于证明论的哲学立场和发展，请参阅希尔伯特计划条目、证明论发展条目以及普拉维茨（1971）。

对于直觉主义，请参阅直觉逻辑条目、数学哲学中的直觉主义条目以及直觉逻辑发展条目。

对于反实在论，请参阅对形而上学实在论的挑战条目，以及特南特（1987；1997）和特兰奇尼（2010；2012a）。

对于 Gentzen 风格的证明论和自然推理理论，请参阅逻辑中关于自然推理系统的条目，以及 Gentzen（1934/35）的原始论述，Jaśkowski（1934）的假设理论，Prawitz（1965）的经典专著，Tennant（1978；2017），Troelstra 和 Schwichtenberg（2000），Negri 和 von Plato（2001），Mancosu，Galvan 和 Zach（2021），以及 Andrzej Indrzejczak 在互联网哲学百科全书中关于自然推理的条目。

## 2. 一些证明论语义的版本

### 2.1 蕴涵的语义：可容许性、可推导性、规则

蕴涵的语义是证明论语义的核心。与经典的真值条件语义相对立，蕴涵本身是一个逻辑常量。它还具有一个特征，即它与推论的概念紧密相连。由于演绎法则和希尔伯特风格系统中所称的推导定理（即和的等价性），可以将其视为在句子层面上表达推论的方式。

对蕴涵的一个非常自然的理解是将其解读为允许从 A 到 B 的推理规则。根据演绎法则，基于可以从 A 推导出 B。而推导定理可以被视为建立规则的手段：已经证明了 B 可以从 A 推导出来，这就证明了从 A 到 B 的规则是合理的。基于这样的思路，蕴涵的基于规则的语义是证明论语义的几种概念的基础，尤其是洛伦岑、冯库切拉和施罗德-海斯特的概念。

#### 2.1.1 操作逻辑

动态语义学和数学导论（1955）中，洛伦森从无逻辑（原子）演算开始，这对应于产生系统或语法。他称这样的系统中的规则是可接受的，如果它可以被添加到其中而不扩大可推导原子的集合。蕴涵箭头被解释为表示可接受性。如果蕴涵被视为规则时是可接受的（关于基础演算），则被认为是有效的。对于迭代的蕴涵规则，洛伦森发展了一个更高层次的可接受性陈述理论。某些陈述，如

独立于基础演算。它们被称为普遍可接受的（“allgemeinzulässig”），并构成了一个正向蕴涵逻辑系统。类似地，对于具有示意变量的规则，使用可接受性陈述来证明全称量化的法则。

对于逻辑常量和的法则的证明，洛伦森使用了一个倒置原则（他创造了这个术语）。在非常简化的形式中，不考虑规则中的变量，倒置原则说，可以从 A 的每个定义条件中获得的一切都可以从 A 本身获得。例如，在析取的情况下，让 A 和 B 分别是由原始规则和表示的定义条件。然后，倒置原则说，假设和是可接受的，这就证明了析取的消除规则。其他连接词的处理方式类似。在的情况下，荒谬规则是从没有对的定义条件这一事实中得出的。

#### 2.1.2 动态语义

冯·库切拉（1968）在他所称的“动态语义”中，与洛伦岑一样，给出了关于逻辑复合蕴涵式的语义，该语义与控制原子句子推理的演算 K 有关。与洛伦岑的基本区别在于，现在表达的是可导出性而不是可容许性陈述。

为了将其转化为命题逻辑的逻辑常量的语义，冯·库切拉提出了以下论证：当放弃双值性时，我们不能再使用经典真值赋值给原子公式。相反，我们可以使用证明或反驳原子句子的演算。此外，由于演算不仅生成证明或反驳，还生成任意的可导出关系，因此想法是直接从原子系统的可导出性开始，并用表征逻辑联结词的规则扩展它。为此，冯·库切拉给出了一个序列演算，其中包含了在后件和前件中引入 n 元命题联结词的规则，从而得到了广义命题联结词的序列系统。然后，冯·库切拉继续展示了所定义的广义联结词都可以用直觉主义逻辑的标准联结词（合取、析取、蕴涵、荒谬）来表示。

* 进一步阅读：*

对于像冯·库切拉那样的表达完备性扩展，请参考 Wansing（1993a）。

#### 2.1.3 高层规则的自然推理

当为任意逻辑常量开发推理规则的一般模式时，Schroeder-Heister（1984）提出了一个语义要求，即逻辑复杂公式表达了规则系统的内容或共同内容。规则 R 要么是一个公式 A，要么具有形式，其中是规则。这些所谓的“高级规则”将规则可能释放假设公式的思想推广到可能释放假设规则（即用作假设的规则）的情况。对于标准联结词，这意味着表达了对的内容；表达了规则的内容；表达了 A 和 B 的共同内容；而荒谬则表达了空规则系统家族的共同内容。对于任意 n 元命题联结词，这导致了具有广义引入和消除规则的自然演绎系统。这些一般联结词被证明可以用标准联结词来定义，从而建立了标准直觉主义联结词的表达完备性。

### 2.2 基于引入规则的推导的语义

#### 2.2.1 反演原则和和谐性

在他对逻辑推理的研究中，根岑对自然推理中引入和消除推理之间的语义关系进行了一些（经常引用的）纲领性的论述。

> 引入推理代表了所涉及符号的“定义”，而消除推理在最终分析中不过是这些定义的结果。这个事实可以表达如下：在消除一个符号时，我们只能“根据引入该符号的意义”使用与其终端符号相关的公式。（根岑，1934/35，第 80 页）

当然，这并不意味着消除规则从字面上可以由引入规则推导出来；事实上，它们并不能。它只能意味着它们可以以某种方式由引入规则来证明。

> 通过使这些思想更加精确，应该可以将 E-推理显示为其相应的 I-推理的唯一函数，基于某些要求。（同上，第 81 页）

因此，Gentzen 计划的基本思想是我们有以引入规则形式的“定义”，以及某种语义推理，通过使用“某些要求”来验证消除规则。

通过采用 Lorenzen 的术语并将其基本思想（见第 2.1.1 节）调整到自然演绎的背景下，Prawitz（1965）提出了一个“倒置原则”来使 Gentzen 的言论更加精确：

> 设为一个具有 B 作为结果的消除规则的应用。那么，当与（如果有的话）的次要前提的推导结合起来满足推导的充分条件[...]，已经“包含”了 B 的推导；因此，可以直接从给定的推导中获得 B 的推导，而无需添加[...]。（第 33 页）

在这里，充分条件由相应引入规则的前提给出。因此，反演原则表明，如果在最后一步中使用引入规则推导出了其主要前提，则可以在不应用消除规则的情况下获得消除规则的结论的推导，这意味着可以避免使用一系列步骤，其中  代表次要前提的（可能为空的）推导列表。

of steps, where  stands for a (possibly empty) list of deductions of minor premisses, can be avoided.

介绍规则和消除规则之间的关系通常被描述为“和谐”（Dummett 1973，第 396-397 页），或者受“和谐原则”（Tennant，1978，第 74 页）的支配。这个术语并不统一，有时甚至不太清楚。它本质上表达了“倒置”的含义。即使“和谐”是一个暗示对称关系的术语，它经常被理解为基于引入规则的概念，例如在 Read（2010）的“一般消除和谐”中（尽管有时也包括基于消除的概念）。有时候，和谐被认为意味着连接词在某种意义上在引入规则或消除规则下是最强或最弱的。这个想法是 Tennant（1978）的和谐原则、Popper 和 Koslow 的结构特征化的基础（见第 2.4 节）。倒置原则中规定的介绍规则和消除规则之间的具体关系排除了所谓的推理定义，例如连接词 tonk 的推理定义，它将析取的引入规则与合取的消除规则相结合，这引发了关于推理定义格式的持续争论。和谐的形式特征化使用了推理规则转化为二阶命题逻辑（Girard 的 F 系统）的翻译，并成为意向性证明论语义学（Tranchini，2023）的一个核心主题。

* 进一步阅读：*

对于逻辑连接词的一般情况，请参阅形式逻辑中关于句子连接词的条目。

对于反演原理，请参见 Schroeder-Heister（2007）。

对于证明论和谐的变体，请参见 Francez（2015），Schroeder-Heister（2016）和 Tranchini（2023）。

#### 2.2.2 证明论有效性

证明论有效性是证明论语义学中的主要方法。作为一个技术概念，它是由普拉维茨（Prawitz）（1971 年；1973 年；1974 年）开发的，通过将基于 Tait（1967 年）的思想的证明论有效性概念转化为语义概念，最初用于证明强归纳。达梅特（Dummett）为这个概念提供了很多哲学基础（参见达梅特，1991 年）。主要有效的对象是作为论证表示的证明。在次要意义上，如果单个规则从有效证明导出有效证明，则该规则也是有效的。在这个意义上，有效性是一个全局而不是局部的概念。它适用于给定原子系统上的任意推导，该系统为原子定义了可推导性。如果一个证明在最后一步使用了引入规则，则称其为规范证明，证明论有效性基于以下三个思想：

1. 封闭规范证明的优先级。
2. 将封闭非规范证明化简为规范证明。
3. 开放证明的替代观点。

附注 1：有效性的定义基于 Gentzen 的观点，即引入规则是“自证自明的”，并赋予逻辑常量其含义。这种自证自明的特性仅用于封闭证明，封闭证明被认为优先于开放证明。

附注 2：非规范证明通过将其归约为规范证明来进行证明。因此，规范化证明中使用的归约过程（绕道归约）起着至关重要的作用。由于它们证明了论证，Prawitz 将其称为“证明”。这个定义同样只适用于封闭证明，对应于自然推理中封闭正常推导的引入形式属性（见第 1.3 节）。

第 3 点：通过考虑其封闭实例来证明开放证明的合理性。这些封闭实例是通过用它们的封闭证明替换其开放假设，并用封闭术语替换其开放变量而获得的。例如，如果从 A 的封闭有效证明替换开放假设 A 获得的每个封闭证明都是有效的，则认为从 A 到 B 的证明是有效的。通过这种方式，开放假设被认为是封闭证明的占位符，这就是为什么我们可以谈论开放证明的替代解释的原因。

这导致了证明论有效性的以下定义：

1. 在基础原子系统中，每个封闭证明都是有效的。
2. 如果一个闭合的规范证明的直接子证明都是有效的，则认为该证明是有效的。
3. 如果一个闭合的非规范证明可以化简为一个有效的闭合规范证明或者一个原子系统中的闭合证明，则认为该证明是有效的。
4. 如果通过用闭合有效证明替换其开放假设和闭合项替换其开放变量所得到的每个闭合证明都是有效的，则认为一个开放证明是有效的。

从形式上讲，这个定义必须相对于所考虑的原子系统（见第 2.6 节）和一组可用的证明（证明缩减）进行相对化。此外，证明在这里被理解为有效证明的候选人（Prawitz 术语中的“论证”），这意味着它们由哪些规则组成并不固定。它们看起来像是证明树，但它们的每一步都可以有任意（有限）数量的前提，并且可以消除任意的假设。有效性的定义通过给定的缩减程序来确定那些“真实”证明结构。

相对于每个原子系统的选择，有效性可以被视为逻辑有效性的广义概念。实际上，如果我们考虑直觉逻辑的标准缩减，那么直觉逻辑中的所有推导都是有效的，无论所考虑的原子系统如何。这是语义上的正确性。我们可以问，反之是否成立，即对于任何在每个原子系统上都有效的证明，是否存在一个对应的直觉逻辑推导。直觉逻辑在这个意义上是完备的，这被称为 Prawitz 的猜想（参见 Prawitz，1973；2013）。对于超越蕴涵逻辑的系统，对这个猜想的有效性存在一些疑问。无论如何，这将取决于有效性概念的精确表述，特别是它对原子系统的处理（见第 2.8 节）。

有关更正式的定义和详细示例，以及对 Prawitz 猜想的一些评论，请参见

> 证明论有效性示例的补充。

* 进一步阅读：*

关于普拉维茨证明论有效性理论的进一步发展，特别是他的基础理论，请参阅皮科洛米尼·达拉贡纳（2023）的详细阐述。

对于将证明论有效性解释为战术证明方法的计算方法，请参阅 Gheorghiu 和 Pym（2022 年，其他互联网资源）。

#### 2.2.3 构造型理论

Martin-Löf 的类型理论（Martin-Löf，1984 年）是建构逻辑和数学中的一种主要方法。在哲学上，它与 Prawitz 共享标准证明论语义的三个基本假设，如 2.2.2 节所述：封闭规范证明的优先级，将封闭非规范证明归约为规范证明，以及对开放证明的替代观点。然而，Martin-Löf 的类型理论至少具有两个特征，超越了证明论语义中的其他方法：

1. 对证明对象的考虑以及证明作为对象和证明作为演示之间的区别。
2. 将形成规则视为证明系统内在的规则，而不是外部规则。

第一个想法可以追溯到 Curry-Howard 对应（参见 de Groote, 1995; Sørensen and Urzyczyn, 2006），根据这个对应，一个公式 A 有一个特定的证明可以被编码为一个特定的术语 t 是类型 A 的事实，其中公式 A 被认同为类型 A。这可以在类型赋值的演算中形式化，其语句的形式为。在这个系统中的一个证明可以被解读为 t 是 A 的一个证明。Martin-Löf（1995; 1998）通过以下方式将这个问题放入哲学的视角中，区分了证明的这两个层面。首先，我们有形式为的陈述的证明。这些陈述被称为判断，它们的证明被称为演示。在这样的判断中，术语 t 代表了命题 A 的一个证明。在后一种意义上的证明也被称为证明对象。当证明一个判断时，我们证明 t 是命题 A 的一个证明（对象）。在这个双层系统中，演示层是论证的层面。与证明对象不同，演示具有认识论的意义；它们的判断具有断言力。证明层是解释意义的层面：命题 A 的意义通过说明什么被视为 A 的证明（对象）来解释。在规范和非规范证明之间所作的区分是在命题层面而不是在判断层面上的区分。这意味着某种明确性要求。当我证明了某件事，我不仅必须拥有一个证明的理由，就像 Prawitz 对有效性的概念中所说的那样，而且同时必须确信这个理由能够达到其目的。这种确信是由演示所保证的。从数学上讲，证明的这种双重意义只有在类型可以依赖于术语时才能发挥其真正的力量。依赖类型是 Martin-Löf 类型论及相关方法的基本组成部分。

第二个观点使得马丁-勒夫的方法与所有其他证明论有效性定义有着明显的不同之处。关键的区别，例如与普拉维茨的程序相比，是它不是元语言的性质，其中“元语言”意味着首先指定命题和证明候选人，然后通过元语言中的定义来确定哪些是有效的，哪些是无效的。相反，命题和证明只在演示的上下文中发挥作用。例如，如果我们假设某个东西是一个蕴含的证明，我们不一定需要立即显示 A 和 B 都是良构命题，但是除了知道 A 是一个命题之外，我们只需要知道 B 是一个命题，前提是 A 已经被证明。作为一个命题的表达是通过一种特定形式的判断来实现的，这种判断是在用于证明命题的相同演示系统中建立的。

在马丁-勒夫的理论中，证明论语义具有强烈的本体论成分。最近的辩论涉及到证明对象是否具有纯粹的本体论地位，或者它们是否编码知识，即使它们本身不是认识行为。最近，马丁-勒夫将他的方法嵌入到了关于主张、挑战和义务之间相互作用的理论中（马丁-勒夫 2019），这使得他的证明论语义具有了实用的方面，并将其与对话语义联系起来（见第 3.9 节）。

马丁-勒夫的类型论在同伦论中找到了最重要的数学应用，导致了同伦类型论（HoTT）和同伦基础计划（The Univalent Foundations Program 2013）。后者通常（有时有争议地）被认为是一种新颖的基础数学方法，以直觉主义精神为基础，作为传统集合论方法的替代方案。

* 进一步阅读：*

关于马丁-勒夫类型理论的历史和哲学，请参阅 Sommaruga（2000）。关于类型理论的一般性，同伦类型理论以及唯一性基础计划，请参阅直觉型理论和类型理论的条目。

### 2.3 子句定义和定义推理

证明论语义通常关注逻辑常量。这种关注很少受到质疑，显然是因为它被认为是如此明显。在证明论中，对原子系统的关注很少，尽管洛伦岑的早期工作（见第 2.1.1 节）中已经有了对逻辑规则的证明，其中逻辑规则的证明嵌入在任意规则的理论中，以及马丁-勒夫（1971）的迭代归纳定义理论，其中提出了原子公式的引入和消除规则。逻辑编程的兴起扩大了这个视角。从证明论的角度来看，逻辑编程是关于对原子公式进行子句定义的原子推理的理论。定义反射是一种证明论语义的方法，它接受这一挑战，并试图建立一个应用范围超出逻辑常量的理论。

#### 2.3.1 来自逻辑编程的挑战

在逻辑编程中，我们处理的是形式为程序子句的程序。

它们定义了原子公式。这样的子句可以自然地解释为描述原子的引入规则。从证明论语义的角度来看，以下两点是至关重要的：

(1) 逻辑复合公式的引入规则（子句）在原则上与原子的引入规则（子句）没有区别。在证明论语义中解释逻辑编程，可以激发对任意原子的扩展，从而得到一个具有更广泛应用领域的语义。

(2) 程序子句不一定是良基的。例如，一个子句的头部可能出现在其体中。良基程序只是一种特殊类型的程序。在逻辑编程中使用任意子句而不需要进一步的要求，是在证明论语义中追求相同思想的动机。人们将接受任何类型的引入规则，而不仅仅是特殊形式的规则，尤其是不一定是良基的规则。这将逻辑编程的定义自由思想带到语义学中，再次扩大了证明论语义的应用领域。

将引入规则视为给予原子意义的规则的想法与归纳定义理论密切相关，根据该理论，归纳定义是规则系统（参见 Aczel，1977）。

#### 2.3.2 定义反射

定义反射理论（Hallnäs，1991；2006；Hallnäs 和 Schroeder-Heister，1990/91；Schroeder-Heister，1993）接受了逻辑编程的挑战，并为任意表达式提供了证明论语义，而不仅仅是逻辑常量，对于这些表达式可以给出一个子句定义。从形式上讲，这种方法从被认为是定义的子句列表开始。每个子句的形式为

其中头部 A 是一个原子公式（atom）。在最简单的情况下，体部是一个原子的列表，这种情况下定义看起来像一个确定的逻辑程序。我们经常考虑一个扩展的情况，其中可能还包含一些结构蕴涵‘’，有时甚至包含一些结构上的全称量化，这本质上是通过限制替换来处理的。如果 A 的定义具有以下形式

那么 A 具有以下引入和消除规则

引入规则，也称为定义闭包规则，表达了“沿着”子句的推理。消除规则称为定义反射原理，因为它反映了整个定义。如果根据给定的定义耗尽所有可能的条件来生成 A，并且每个条件都蕴含相同的结论 C，那么 A 本身蕴含这个结论。如果将子句定义视为归纳定义，那么这个原理可以被视为表达归纳定义中的极端子句：除了给定的子句之外，没有其他东西定义 A。显然，定义反射是讨论的倒置原理的一种广义形式。它在具有超越纯命题推理的自由变量的定义上发挥了真正的作用，并且在不是良基的上下文中发挥了作用。一个非良基定义的例子是通过它自己的否定来定义一个原子 R：

通过否定来定义一个原子是逻辑编程中的一个标准例子。在定义性反射的背景下，Hallnäs 提出了这个建议。在《定义性反射和悖论补充》中对此进行了详细讨论。

> 进一步阅读：

* Supplement on Definitional Reflection and Paradoxes.*

对于非良基础性和悖论，请参阅关于自指和罗素悖论的条目。

### 2.4 逻辑常量的结构特征化

关于逻辑常量的“结构特征化”有许多思想和结果的领域，其中“结构”在这里既指“证明论规则”的证明论意义，也指一个具有特定结构的框架，而这个框架又可以通过证明论来描述。其中一些作者使用语义学术语，并至少暗示他们的主题属于证明论语义学。其他人明确否认这些内涵，强调他们对建立常量的逻辑性感兴趣的特征化。问题“什么是逻辑常量？”可以用证明论术语来回答，即使常量本身的语义是真值条件的：即要求（也许是真值条件定义的）常量在证明论术语中表现出一定的推理行为。然而，由于一些作者同时将他们的特征化视为语义学，因此我们在这里提及其中一些方法是合适的。

对于逻辑常量而言，最直言不讳的结构主义者，明确将自己视为这样的人，是科斯洛。在他的《逻辑结构主义理论》（1992 年）中，他发展了一种逻辑常量的理论，其中他通过某些“蕴涵关系”来描述它们，其中蕴涵关系大致对应于塔斯基意义下的有限后果关系（再次可以通过某些序列风格系统的结构规则来描述）。科斯洛以精确的元数学意义上的结构理论进行了发展，该理论在给定的公理之外并未以任何方式指定对象的域。如果给定了一种语言或任何其他带有蕴涵关系的对象域，结构方法可以用于通过检查它们的蕴涵属性来单独确定逻辑复合物。

在他关于逻辑基础的早期论文中，波普尔（1947a; 1947b; Binder et al., eds., 2022）以证明论的术语给出了逻辑常量的推理特征化。他使用了序列演算，并通过这些序列的某些可导性条件来描述逻辑常量。他的术语明确表明他打算使用证明论语义来定义逻辑常量，因为他谈到了“推理定义”和通过所描述的方式定义常量所实现的“数学逻辑的平凡化”。尽管他的表述并不完全没有概念上的不精确和错误，但他预见了许多现在在证明论语义中常见的思想，例如通过某些引入或消除规则的最小性或最大性条件来勾画逻辑常量。

对于以序列演算规则推理逻辑常量的逻辑性辩论，Kneale（1956）和 Hacking（1979）提出了重要贡献。Došen（1980；1989）在他的逻辑常量理论中提出了对逻辑性的全面解释，将其理解为在逻辑层面上表达结构特征的“标点符号”。他将逻辑常量理解为遵循某些双线规则的序列，这些规则可以双向阅读。例如，合取和析取（在经典逻辑中，具有多个公式后继）遵守双线规则。

Došen 能够给出包括模态逻辑系统在内的特征描述。他明确将自己的工作视为对逻辑性辩论的贡献，而不是对证明论语义的任何概念的贡献。Sambin 等人在他们的《基本逻辑》（Sambin，Battilotti 和 Faggian，2000）中，明确将 Došen 所称的双线规则理解为基本的赋予意义的规则。合取和析取的双线规则被解读为这些常量的隐式定义，通过某种过程可以转化为我们习惯的显式序列规则。因此，Sambin 等人与 Došen 使用相同的起点，但在语义上将其解释为常量的隐式定义，而不是对行为的结构描述。

有几种其他方法可以对逻辑常量进行统一的证明论特征化，所有这些方法至少涉及到证明论语义的问题。这些理论包括 Belnap 的显示逻辑（Belnap，1982），Wansing 的信息结构逻辑（Wansing，1993b），通用证明编辑系统及其实现，如爱丁堡逻辑框架（Harper，Honsell 和 Plotkin，1987）以及许多后继系统，允许规定各种逻辑系统。自线性逻辑和更一般的次结构逻辑的兴起以来，有各种方法处理在结构规则上有所不同的逻辑（见第 3.10 节）。最近，从将特定逻辑单独作为真理逻辑转向更多元主义立场（例如，Beall 和 Restall，2006），即对不同逻辑的共同之处感兴趣而不偏好特定逻辑，可以看作是从语义证明向结构特征化的转变。

* 进一步阅读：*

关于波普尔的逻辑常量理论，请参阅 Binder 等人（2022），Piecha（2023）。

对于逻辑常量及其逻辑性，请参阅逻辑常量条目。

对于线性和次结构逻辑，请参阅线性逻辑条目和次结构逻辑条目。

对于逻辑多元论，请参阅逻辑多元论条目。

### 2.5 范畴证明论

关于证明论与范畴论的关系有相当多的文献，根据 Lawvere、Lambek 和其他人的开创性工作（参见 Lambek 和 Scott，1986），范畴论本身可以被看作是一种抽象的证明论。如果将范畴中的箭头视为从 A 到 B 的一种抽象证明，我们就有了一种超越了从 A 推导出 B 的纯粹可导性的表示（因为箭头具有其个体性），但它并不涉及这个证明的特定句法结构。对于直觉主义系统来说，范畴形式的证明论语义可能是最接近经典情况下指示语义的方法。

范畴证明论中最发展完善的方法之一是 Došen 提出的。他不仅推进了范畴方法在证明论中的应用（例如，Došen 和 Petrić，2004），还展示了证明论方法如何在范畴论本身中使用（Došen，2000）。对于证明论语义而言，范畴逻辑最重要的是，在范畴逻辑中，箭头总是与一个恒等关系相伴，这在证明论中对应于证明的恒等性。通过这种方式，范畴证明论的思想和结果与所谓的内涵证明论语义（见第 3.7 节）相关，即研究证明作为实体本身的学科，而不仅仅是建立推论的工具（Došen，2006；2016）。

由于范畴意义上的箭头与演绎推理意义上的证明之间存在着强烈的关系，因此在演绎领域中处理的几乎所有概念都有范畴类似物，通常采用新颖的方法、思想和结果来补充演绎方法，这种补充方式非常有效。范畴证明论语义是一个非常广泛的研究领域，与本条目中采用的演绎视角并行进行――演绎视角在哲学中更为常见。在直觉逻辑领域，范畴逻辑涵盖了高级主题：除了传统的量词逻辑和依赖类型理论（参见第 2.2.3 节）之外，还包括同伦类型理论。对于许多其他逻辑系统，也已经发展了范畴语义，包括经典逻辑和各种次结构逻辑，如线性逻辑。

范畴证明论的一个哲学上非常重要的一般特征是其固有的假设性质。这是因为它从假设性陈述（箭头）而不是范畴性陈述 A（“范畴性”与“假设性”相对立，而不是“范畴的”在这里用于“涉及范畴论”）。通过这种方式，它克服了标准的、特别是基于有效性的演绎证明论语义的范式（参见第 3.6 节）。

* 进一步阅读：*

对于一般的范畴论方法，请参阅范畴论条目和数学哲学中的结构主义条目。

对于范畴论证明论语义，请参阅 Pym、Ritter 和 Robinson（2023 年，其他互联网资源）。

### 2.6 原子系统

证明论语义主要关注逻辑常量。即使一个人同意这种取向——定义反射理论（见第 2.3.2 节）是一个例外——我们仍然必须确定原子句和它们的证明的地位。在模型论语义中，逻辑复合句的真值是相对于一个称为该句子的“模型”的结构来定义的。这个结构决定了哪些原子句是真的，哪些不是。一个复合句是否为真取决于它的原子成分。在证明论语义中也是如此。一个复合句的证明是否有效取决于所考虑的系统的原子基础。在这里，原子基础通常被认为是用于生成原子句的演算法：原子基础中的原子句的证明本身就是有效的。类似于模型论对逻辑真理的定义是相对于所有结构的真理，证明论语义中，逻辑有效证明可以定义为相对于所有原子基础都有效的证明。

有各种选择可以考虑作为原子系统的候选原子基础。(1) 最简单的是 Herbrand 模型，它在逻辑编程理论中使用，只是原子句子的集合。从证明论的角度来看，这些将是只包含公理而没有适当推理规则的演算法。(2) 在 Lorenzen 的著作中(见第 2.1.1 节)和 Prawitz 的著作中(见第 2.2.2 节)，原子系统被认为是产生规则的列表，即包含公理和形式为从 A 推导出 B 的规则的演算法。(3) 更复杂的系统可能包含允许推导假设的原子规则，这与逻辑规则(如蕴涵引入)非常类似。(4) 推广这个想法，可以允许原子规则本身推导出规则，即更高层次的规则(见第 2.1.3 节)。(5) 更进一步的是，可以将定义反射的规则纳入原子系统中(见第 2.3.2 节)。- 可以想象出许多其他类型的原子系统构成的原子规则。

对于证明论语义来说，关键点在于某些形式结果取决于哪些类型的原子系统被允许。这对于语义完备性的问题尤为重要（见第 2.8 节）。关于哪些原子系统，当作证明论语义的原子基础时，导致逻辑层面上的哪种形式系统的研究刚刚开始（参见 Sandqvist 2015b; Piecha 和 Schroeder-Heister，2016a; Stafford 2023，其他互联网资源）。值得注意的是，这是证明论语义的一个内涵特征：我们不仅对各种形式的原子系统生成哪些原子感兴趣，还对如何生成感兴趣，也就是通过哪种类型的规则来实现。这是与模型论语义的一个关键区别，后者在这方面纯粹是外延的。有关证明论语义的进一步内涵特征，请参见第 3.7 节。

### 2.7 基于句子的语义

而不是定义句子的证明的有效性，可以直接定义句子的证明论有效性。在逻辑复合句的有效性定义中，然后会舍弃对这些句子的证明的引用。这并不意味着放弃证明论方法，因为仍然会在原子基础上引用证明。证明出现在原子层面，而不是逻辑层面。这种方法在技术上比基于证明的有效性的方法（见第 2.2.2 节）更容易阐述，但仍足以讨论基本主题，如语义完备性（见第 2.8 节）。实际上，从在第 2.2.2 节意义上有效的句子 A 的证明中，可以推断出基于句子语义的 A 的有效性；反之，从基于句子语义的 A 的有效性可以构造出（虽然退化的）有效证明。在某种意义上，基于句子语义与马丁-勒夫系统中固有的证明论语义相关（见第 2.2.3 节），在基本逻辑的情况下（其中依赖类型不起任何作用），判断的证明信息 t 可以被舍弃，以简化判断。

在命题逻辑中，对于以原子系统 S 作为其原子基础的句子的有效性的一个可能定义如下：

1. 如果原子公式 A 在 S 中可导出，则 A 是 S-有效的。
2. 如果 A 和 B 都是 S-有效的，那么一个合取式是 S-有效的。
3. 如果 A 或 B 是 S-有效的，那么一个析取式是 S-有效的。
4. 如果对于 S 的每个扩展，如果 A 是-有效的，则 B 是-有效的，那么一个蕴涵式是 S-有效的。

注意，在假设有效性陈述中，引用了对所考虑的原子基础的任意扩展。与证明有效性的形式定义中一样，考虑基础扩展用于确保单调性并避免虚无有效性。在文献中，沿袭 Sandqvist（2015a）的观点，术语“基础扩展语义”通常以更具体的意义使用：即用于一种特殊形式的基于句子的语义，其中析取接受了异常解释。

基于句子的语义中的有效性取决于原子系统的选择。这个选择使得基于句子的语义成为证明论的。如第 2.6 节所示，原子系统的类型以及对蕴涵和推论陈述考虑的扩展关系都很重要。

### 2.8 语义完备性

证明论语义在精神上是直觉主义的，至少从其起源来看是如此。相应地，普劳维茨（1971）猜测那些由对任何原子基础有效的证明所证明的推论陈述，恰好是直觉主义逻辑形式系统的可导性陈述。在句子语义的框架下，对于与语义完备性相关的有效性问题而言，比起有效证明的框架来说更容易处理，这个猜测被证明是错误的。在这个框架中，直觉主义逻辑中不可导（但可接受）的 Harrop 规则可以在这个框架中得到验证（Piecha 和 Schroeder-Heister，2019）。然而，当原子基础的扩展结构超出集合论的超集关系时，情况就会发生变化，Kripke 对直觉主义逻辑的完备性证明就可以应用于证明论框架（Goldfarb 2016; Stafford 和 Nascimento 2023）。避免不完备性的另一种方法是给予析取一个非标准的解释，例如要求析取消去规则的次前提和结论始终可以被视为原子的（参见 Sandqvist，2015a）。

进一步阅读：

*Further Reading:*

对于普劳维茨的完备性猜想，请参阅《证明论有效性示例补充》。

关于哈罗普规则在直觉逻辑的可接受性陈述背景中的作用，请参阅直觉逻辑条目。

## 3. 对标准证明论语义的扩展和替代方案

### 3.1 消除规则作为基础

大多数证明论语义的方法将引入规则视为基础，意味着给予或自证明，而消除推理则是根据给定的引入规则来证明其有效性。这个概念至少有三个根源：第一个是意义的验证论理论，根据该理论，一个句子的可断言条件构成了它的意义。第二个是我们必须区分给予意义的事物和这个意义的后果，因为并非所有的推理知识都可以由定义的应用组成。第三个是断言在其他言语行为（如假设或否认）之上的优先性，在迄今为止的所有方法中都是隐含的。

人们可以探究将消除规则而非引入规则作为证明论语义基础的程度。Dummett（1991 年第 13 章）曾对基于消除规则而非引入规则的证明论语义提出了一些初步的构想，尽管形式非常简陋。Prawitz（1971 年；2007 年；另见 Schroeder-Heister 2015 年）提出了一种基于消除推理的有效性更精确的定义。其核心思想是，如果将消除规则应用于封闭证明的最终公式的结果是一个有效证明或者归约为一个有效证明，则该封闭证明被认为是有效的。例如，对于任何给定的封闭有效证明 A，蕴含的封闭证明是有效的，如果应用假言演绎法的结果是有效证明。

对这两个证明的证明是 B 的有效证明，或者归结为这样的证明。这个概念保留了 Prawitz 风格的证明论语义（见第 2.2.2 节）的三个基本要素中的两个：证明归结的作用和假设的替代观点。只有以引入结尾的证明的规范性被转化为以消除结尾的证明的规范性。

### 3.2 否定和否认

标准的证明论语义是以断言为中心的，即断言条件决定了逻辑常量的含义。对应于直觉主义的处理方式，一个公式 A 的否定通常被理解为蕴含荒谬，其中荒谬是一个不能被断言的常量，即没有定义断言条件的常量。这是一种“间接”的理解否定的方式。在文献中，一直存在着对于什么是“直接”否定的讨论，这个概念是根据 von Kutschera（1969）的说法而来。根据这个概念，否定是一个一元的原始运算符，不能被归结为蕴含荒谬，或者至少不被归结为蕴含荒谬。它也不是经典的否定。它遵循的规则是对于逻辑常量的常规规则的对偶。有时它被称为一个句子的“否认”，有时也被称为“强否定”（参见 Odintsov，2008）。否定 A 的典型规则是

从本质上讲，运算符的否定规则对应于对偶运算符的断言规则。已经研究了几种否定逻辑，特别是尼尔森（1949 年）的“可构造的虚假”逻辑，这种逻辑是受尼尔森在某种实现语义方面的启发。主要关注的是他后来称为 N3 和 N4 的系统，这两个系统在对待矛盾方面有所不同（N4 是没有 ex contradictione quodlibet 的 N3）。使用否定，可以通过交换断言和否定，并从逻辑常量转换为它们的对偶来对证明论语义的任何方法进行对偶化。这样做，可以得到一个基于否定的证伪证明系统，而不是证明。可以将其理解为将波普尔的观点应用于证明论语义，并保持其直觉主义精神。从形式上讲，这导致了诸如对偶直觉逻辑之类的系统，通过给它们提供证明论语义。

另一种方法不仅是将以断言为中心的证明论语义对偶化为以否定为中心的证伪论语义，而是将断言和否定的规则之间的关系视为由一个倒置原则或自身的定义反射原则来管理。这将是一个被称为“断言-否定-和谐”的原则。在标准的证明论语义中，倒置原则控制着断言和假设（或结果）之间的关系，而这样的原则现在将调节断言和否定之间的关系。根据 A 的某些定义条件，它将表明否定 A 的每个定义条件都会导致否定 A 本身。对于合取和析取，这导致了常见的断言和否定规则对。

这个想法可以很容易地推广到定义反思，从而产生一个推理系统，其中断言和否定交织在一起。它与传统对立方形中研究的判断形式之间的演绎关系有相似之处（Schroeder-Heister，2012a; Zeilberger，2008）。需要强调的是，否定运算符在这里是一个外部符号，表示一种判断形式，而不是一个逻辑运算符。这意味着它特别不能被迭代。

断言和否定条件都赋予一个句子意义，从而赋予逻辑操作意义的想法也被称为“双边主义”，这是 Rumfitt 创造的一个术语。

* 进一步阅读*

对于否定和否认的证明论语义，请参阅 Tranchini（2012b），Wansing（2001; 2017），以及 Carrara，Chiffi 和 De Florio（2017）编辑的关于断言和否认的专题以及关于否定，关于连结逻辑和关于矛盾的条目。

关于双边主义的观点，请参阅 Rumfitt（2000），Kürbis（2016; 2019），Drobyshevich（2021）以及由 Sara Ayhan（2023）编辑的关于双边主义和证明论语义的专题。

关于波普尔主义和证明论语义，请参阅 Binder 等人（2022），Kapsner（2014）。

### 3.3 证明论中的和谐与反思

Gentzen 的序列演算展示了右侧和左侧引入规则之间的对称性，这表明需要寻找一个使这种对称性在证明论语义中具有意义的和谐原则。至少有三种方法被追求来处理这种现象。(i) 要么将右引入规则或左引入规则视为引入规则。然后使用相应的消除规则来证明相反的规则（分别是左引入和右引入）。这意味着之前讨论的方法应用于整个序列而不是序列中的公式。与这些公式不同，序列没有逻辑结构。这种方法建立在定义性反思的基础上，它将和谐和倒置应用于任意结构化实体的规则，而不仅仅是逻辑复合物。这种方法由 de Campos Sanz 和 Piecha（2009）追求。(ii) 右引入规则和左引入规则是从 Došen 的双线规则（第 2.4 节）的表征中推导出来的，然后被解读为某种定义。双线规则的自上而下方向已经是右引入规则或左引入规则。另一个可以通过某些原则从自下而上的方向推导出来。这是 Sambin 等人的基本逻辑（Sambin，Battilotti 和 Faggian，2000）的基本意义论成分。(iii) 右引入规则和左引入规则被视为使用割规则表达序列之间的相互作用。给定右规则或左规则，互补规则表达了与其前提以某种方式相互作用的一切也与其结论相互作用。这种相互作用的思想是定义性反思的广义对称原则。它可以被认为是倒置原则的一种推广，使用相互作用的概念而不是推导出的后果（参见 Schroeder-Heister，2013）。 所有这三种方法都适用于经典形式的推理演算，可能在一个推理的后件中有多个公式，包括在线性和其他逻辑中研究的结构受限版本。因此，这个主题与子结构逻辑和证明论语义的子结构方法密切相关（见第 3.10 节）。

### 3.4 亚原子结构和自然语言

即使在定义反射中，我们考虑的是原子的定义规则，它们的定义条件通常不会分解这些原子。 Więckowski（2008 年；2011 年；2016 年；2021 年）提出了一种考虑原子句子的内部结构的证明论方法，他使用了原子句子的引入和消除规则，其中这些原子句子不仅仅被简化为其他原子句子，而是被简化为表示谓词和个体名称含义的亚原子表达式。除了其基础意义之外，这可以看作是证明论语义在自然语言应用方面的第一步。Francez 在这个方向上又迈出了一步，他为英语的几个片段开发了一种证明论语义（参见 Francez，Dyckhoff 和 Ben-Avi，2010 年；Francez 和 Dyckhoff，2010 年；Francez 和 Ben-Avi，2015 年；Francez，2022 年）。具体而言，Francez 能够使用证明论方法来处理作用域歧义和许多其他语义含义变化的问题。除了计算机科学之外，自然语言语法和自然语言语义在证明论语义的实际应用中将发挥关键作用。

* 进一步阅读*

关于自然语言的证明论语义，请参阅 Francez（2015 年，第二部分）。

### 3.5 经典逻辑

证明论语义在直觉主义上有偏见。这是因为自然推理作为其首选框架具有某些特点，使其特别适用于直觉主义逻辑。在经典自然推理中，ex falso quodlibet 被替换为经典的反证法规则。

允许在推导 A 的过程中进行消除，这个规则破坏了子公式原则。此外，在包含和的情况下，它在一个规则中引用了两个不同的逻辑常量，因此不再有逻辑常量的分离。最后，作为一个消除规则，它不遵循引入和消除的一般模式。因此，它破坏了引入形式属性，即每个封闭的推导都可以简化为在最后一步使用引入规则的推导。

In allowing to discharge  in order to infer *A*, this rule undermines the *subformula principle*. Furthermore, in containing both  and , it refers to two different logical constants in a single rule, so there is no *separation* of logical constants any more. Finally, as an elimination rule for  it does not follow the general pattern of introductions and eliminations. As a consequence, it destroys the *introduction form property* that every closed derivation can be reduced to one which uses an introduction rule in the last step.

经典逻辑非常适用于多后继序列演算。在这里，我们不需要任何额外的原则，只需接受直觉主义情况下的结构特征，即允许在后继中包含多个公式，就足以得到经典逻辑。在后继演算中，有一些合理的方法可以建立右引入和左引入之间的和谐（见第 3.3 节），这使得经典逻辑看起来完全合理。然而，只有在推理被适当地构建为多个结论的过程时，这才是令人信服的，尽管这与我们关注单个结论的标准做法不符。我们可以尝试通过论证，认为朝着多个结论推理描绘了真理所在的领域，而不是建立一个单一命题为真。然而，这种直觉很难维持，并且在没有严重困难的情况下无法形式化捕捉。Shoesmith 和 Smiley（1978）等哲学方法以及证明论方法，如证明网（参见 Girard，1987；线性逻辑条目），都是朝着这个方向的尝试。

古典逻辑中引入属性形式失败的一个根本原因是析取律中固有的不确定性。可以从 A 和 B 中推导出。因此，如果析取律是唯一的推导方式，古典逻辑的一个关键原则，即的可推导性，将意味着 A 或的可推导性，这是荒谬的。摆脱这个困境的方法是废除不确定性的析取，而使用其经典的德摩根等价式。这基本上导致了一个没有适当析取的逻辑。在量词的情况下，也不会有适当的存在量词，如在的意义上理解。如果一个人准备接受这个限制，那么就可以为古典逻辑制定某些和谐原则。

正如卡尔·波普尔首次观察到的那样（参见 Binder 等人，2022 年），古典和直觉主义连接词的简单组合会崩溃成为古典系统。将古典和直觉主义系统以忠实的方式结合的更复杂的理论可以在普世系统中找到（参见 Pimentel 和 Pereira 2021 年）。最初在计算机科学中发展的古典逻辑方法是通过算法考虑，特别是在证明搜索的背景下，米歇尔·帕里戈的λ-演算（Parigot 1992 年）和将聚焦方法应用于古典逻辑（Liang 和 Miller，2009 年；2024 年）。这两种方法都基于这样的思想，即通过某种索引技术，可以区分并单独处理古典序列的多个公式中的一个公式。

* 进一步阅读*

对于一般的经典逻辑，请参阅有关经典逻辑的条目。

### 3.6 假设推理

标准的证明论语义方法，特别是普拉维茨的基于有效性的方法（第 2.2.2 节），将封闭推导视为基本。开放推导的有效性被定义为从假设的封闭推导到断言的封闭推导的有效性传递，其中后者通过将封闭推导替换为开放假设而获得。因此，如果将封闭推导称为“范畴论的”，将开放推导称为“假设的”，则可以将这种方法描述为遵循两个基本思想：（I）范畴论的优先于假设论的，（II）推论的传递观点。这两个假设（I）和（II）可以被视为标准语义的教条。“标准语义”在这里不仅指标准的证明论语义，还包括经典的模型论语义，其中也假设了这些教条。在那里，从真理的定义开始，真理是范畴论的概念，并将推论，即假设论的概念，定义为从条件到结论的真理传递。从这个观点来看，包括证明论语义在内的建设性语义将真理的概念与构造或证明的概念交换，并将“传递”解释为构造函数或过程，但在其他方面保持框架不变。

这些教条原则上没有问题。然而，在标准框架中处理起来存在一些困难的现象。这样一个现象是非良基性，尤其是循环性，其中我们可能有后果，但没有真理和可证性的传递（见第 3.8 节）。另一个现象是子结构的区别，其中从一开始就包括假设的结构非常关键（见第 3.10 节）。此外，最关键的是，我们可能以某种方式定义事物，而不事先知道我们的定义或定义链是否良基。我们不首先涉及我们开始的定义的元语言研究，而是希望立即开始推理。如果我们限制自己只考虑逻辑常量的情况，这个问题就不存在，因为定义规则是显然良基的。但是，当我们考虑超出逻辑常量的更复杂的情况时，问题就立即出现了。

这使得沿着另一个方向继续并从假设的后果概念开始变得值得，即直接对后果进行表征，而不将其简化为分类情况。从哲学上讲，这意味着分类概念是假设概念的限制概念。在经典情况下，真理将是后果的限制情况，即没有假设的后果。这个程序与范畴证明论的方法密切相关（见第 2.5 节），该方法基于假设实体（“箭头”）的首要性。从形式上讲，它会优先选择序列演算而不是自然演绎，因为序列演算允许通过左引入规则来操作序列的假设侧。在一个带有术语注释的系统中，我们不会注释公式，而是通过术语注释假设性陈述。如果一个假设性陈述以序列的形式表示为 ，我们不会像 Curry-Howard 对应中那样将其注释为 ，而是以类似的方式注释为 。也就是说，完整的假设性陈述将被注释，这与范畴方法的类比变得明显，其中 f 将是箭头 ，显而易见。

* 进一步阅读*

有关假设推理和内涵证明论语义，请参阅 Došen（2003; 2016）和 Schroeder-Heister（2012c, 2016）。

### 3.7 动态语义证明论

如第一节（1.1）所述，动态语义是一种动态语义的证明论，因为它关注的是证明而不仅仅是可证明性。对于动态语义证明论来说，重要的不仅是 B 是否从 A 中推导出来，还有我们如何建立 B 是如何从 A 中推导出来的。换句话说，证明的身份是一个重要的问题。然而，尽管这一点乍一看是显而易见的，动态语义证明论者通常会同意这个抽象的说法，但在实践中，动态语义证明论的做法往往不同，对于证明的身份问题往往被忽视。经常发生的情况是，同样强大的规则被认为是相同的。例如，当讨论和谐原则时，考虑到标准的合取引入规则

许多动态语义证明论者认为选择投射对是否无关紧要

 或者这对

作为合取的消除规则。第二对规则通常被认为只是第一对投射规则的更复杂的变体。然而，从内涵的角度来看，这两对规则并不相同。将它们等同起来相当于等同于和，这只是在外延上是正确的，但在内涵上是不正确的。正如多森经常主张的那样（例如，多森 1997 年；2006 年），诸如和的公式是等价的，但不是同构的。这里的“同构”意味着当从一个公式证明另一个公式，反之亦然时，通过组合这两个证明，我们得到了恒等证明。但在这个例子中并非如此。

追求这个思想会导致与标准思想不同的和倒置原则。由于和倒置是证明论语义的核心，因此涉及到了许多问题。认真对待内涵性的话，意味着需要重塑许多证明论语义领域（参见 Schroeder-Heister，2022 年）。这对于各种相关领域，如悖论的处理，产生了影响。第一本关于内涵性证明论语义的专著，特别强调悖论主题，是由特兰奇尼（2023 年）撰写的。

由于证明的身份是范畴证明论的基本主题（见第 2.5 节），因此后者在证明论语义学中需要比目前更多的关注。

### 3.8. 悖论

逻辑、数学和语义学上的悖论在证明论语义学的框架中得到了新的阐释。如果将悖论在引入和消除规则的背景下进行表述，就可以将证明论的证明缩减机制应用于它们。假设给出了集合术语的引入和消除规则如下（一种类似于朴素集合论的形式）：

然后，对于 r 为，我们可以从和相互推导，这是蒙太古悖论的自然演绎变体。现在普劳维茨（1965 年，附录 B）观察到，由蒙太古悖论引起的荒谬推导是非规范化的，这是丹南特（1982 年）能够证明的一种广泛范围的悖论特征。从证明论语义的角度来看，非规范化的证明可能被认为是无效的，至少不是以规范化证明有效的意义上有效。这意味着我们获得了一个证明论标准，用来判断我们是否有一个有意义的证明，而悖论的证明在这个意义上是没有意义的。普劳维茨-丹南特对悖论的分析开辟了悖论的证明论领域，这超出了更狭义的证明论语义。它与内涵性的方面密切相关（见第 3.7 节），也与定义反射的思想相关（见第 2.3.2 节和关于定义反射和悖论的补充）。

从证明论语义的角度来看，Ekman 悖论是一个特别有趣的悖论。它是在极简命题逻辑中编码蒙太古悖论的蕴涵变体所导致的。事实证明，根据如何定义绕行推导的简化，极简命题逻辑中的某些推导是不可规范化的。这对于证明简化的概念投下了强烈的光，证明简化在自然演绎风格的证明论语义中是绝对必要的：很多事情取决于它的精确定义。实际上，证明简化的概念构成了证明身份的概念，并且超出了“证明中的绕行”被移除的外延思想。

*进一步阅读*

对于罗素悖论的一般情况，请参阅有关罗素悖论的条目。

对于证明论语义中悖论的处理，包括埃克曼悖论，请参阅特兰奇尼（2023）。

### 3.9 归约、博弈论和对话

虽然演绎是向前导向的，通过合理的规则从已经建立的句子到进一步的句子，而还原则是向后进行，试图为给定的主张找到一个论证。因此，它属于证明搜索的范畴。在计算机科学中，已经发现并讨论了各种证明搜索的方法：解析和表格系统是著名的例子。然而，从语义学的角度来看，还原方法并不是演绎的概念次要，而是自成体系的理论。甚至可以说，从语义学的角度来看，还原方法是主要的，因为寻找论证或寻找论证的可能方式构成了给定主张的含义。这个想法已经在对话或博弈论语义学中得到采纳，但应该并且应该在证明论语义学中普遍采用。这是证明论语义学的一个重要愿望，迄今为止，它主要基于演绎而不是还原。

*进一步阅读*

有关还原逻辑及其语义的想法，请参阅 David Pym 和 Eike Ritter（2004）的专著。

对于对话逻辑，请参阅对话逻辑条目以及 Thomas Piecha 在《互联网哲学百科全书》上的对话逻辑条目。

对于逻辑中的博弈论方法，请参阅逻辑和博弈条目。

### 3.10 子结构方法

一旦将证明论语义置于序列演算的框架中，从而关注假设性而非范畴性的主张，被称为“次结构逻辑”的受限结构规则的逻辑领域需要语义考虑。在这里，假设在言论中的引入和保留方式代表了比自然推理中的假设更加细粒度的结构，自然推理中的假设通常被认为是一组陈述。由于可以以类似的方式构造序列的后继，证明论语义失去了直觉主义偏见，而不一定变得经典。在次结构逻辑的框架内，可以轻松地建模非常规逻辑系统，如相关逻辑或资源敏感逻辑。一个特别有趣的主题是束缚蕴涵的逻辑，它区分了不同但共存的假设和结论的结构方式（参见 Pym，2002）。次结构逻辑作为一种描述逻辑系统的通用工具在一个统一的结构框架内得到了很好的建立。次结构逻辑是否本身代表了一个语义框架，仍然是一个悬而未决的问题。

*进一步阅读*

有关次结构逻辑的一般信息，请参阅次结构逻辑条目。

## 4. 结论和展望

标准证明论语义几乎完全专注于逻辑常量。逻辑常量在推理和推断中起着核心作用，但绝对不是唯一的，甚至可能不是最典型的可以通过推理定义的实体类型。需要一个框架来处理更广义的推理定义，并涵盖逻辑和非逻辑的推理定义。关于任意定义规则的定义反射的思想（见第 2.3.2 节）和自然语言应用（见第 3.4 节）指向这个方向，但也可以想象更深远的概念。此外，对和谐性、倒置原则、定义反射等的集中关注有些误导性，因为这可能暗示了证明论语义仅由这些构成。需要强调的是，即使在算术方面，除了倒置原则之外，还需要更强的原则。然而，尽管存在这些限制，证明论语义已经取得了与更广泛的语义方法相竞争的非常重要的成就。

*进一步阅读*

对于证明论语义各个方面的贡献，请参阅 Piecha 和 Wehmeier 编辑的读者（2024 年，开放获取）。

## Bibliography

* Aczel, Peter (1977). “An Introduction to Inductive Definitions”, in *Handbook of Mathematical Logic*, John Barwise (ed.), Amsterdam: North-Holland, pp. 739–782.
* Ayhan, Sara (2021). “What is the Meaning of Proofs? A Fregean Distinction in Proof-Theoretic Semantics”, *Journal of Philosophical Logic*, 50: 571–591. doi:10.1007/s10992-020-09577-2.
* Ayhan, Sara, ed. (2023). *Bilateralism and Proof-Theoretic Semantics*, Special Issue of *Bulletin of the Section of Logic*: 52.
* Beall, J.C. and Greg Restall (2006). *Logical Pluralism*, Oxford: Oxford University Press.
* Belnap, Nuel D. (1982). “Display Logic”, *Journal of Philosophical Logic*, 11: 375–417. doi:10.1007/BF00284976
* Binder, David, Thomas Piecha, and Peter Schroeder-Heister, eds. (2022). *The Logical Writings of Karl Popper*, Berlin: Springer. doi:10.1007/978-3-030-94926-6
* Binder, David, Thomas Piecha, and Peter Schroeder-Heister (2022). “Popper’s theory of deductive logic”, *The Logical Writings of Karl Popper*, David Binder et al., eds., Berlin: Springer, 1–79. doi:10.1007/978-3-030-94926-6_1
* Brandom, Robert B. (1994). *Making It Explicit: Reasoning, Representing, and Discursive Commitment*, Cambridge, MA: Harvard University Press.
* ––– (2000). *Articulating Reasons: An Introduction to Inferentialism*, Cambridge, MA: Harvard University Press.
* Carrara, Massimiliano, Daniele Chiffi and Ciro De Florio, eds. (2017). *Logical Investigations on Assertion and Denial*, Special Issue of *Journal of Applied Logic*, 25, Supplement: S1–S122. doi:10.1016/j.jal.2017.11.003
* de Campos Sanz, Wagner and Thomas Piecha (2009). “Inversion by Definitional Reflection and the Admissibility of Logical Rules”, *Review of Symbolic Logic*, 2: 550–569. doi:10.1017/S1755020309990165
* de Groote, Philippe, ed. (1995). *The Curry-Howard Isomorphism*, Volume 8 of *Cahiers du Centre de Logique*, Academia-Bruyland.
* Došen, Kosta (1980). *Logical Constants: An Essay in Proof Theory*, D. Phil. Thesis, Oxford University.
* ––– (1989). “Logical Constants as Punctuation Marks”, *Notre Dame Journal of Formal Logic*, 30: 362–381. doi:10.1305/ndjfl/1093635154
* ––– (1997). “Logical Consequence: A Turn in Style”, in: Dalla Chiara,M.L., K. Doets, D. Mundici, J. van Benthem (eds.), *Logic and Scientific Methods: Volume One of the Tenth International Congress of Logic, Methodology and Philosophy of Science, Florence, August 1995*, Dordrecht: Kluwer, 289–311.
* ––– (2000). *Cut Elimination in Categories*, Berlin: Springer.
* ––– (2003). “Identity of proofs based on normalization and generality”, *Bulletin of Symbolic Logic*, 9: 477–503. doi:10.2178/bsl/1067620091
* ––– (2006). “Models of deduction”, in: Kahle and Schroeder-Heister, eds. (2006), pp. 639–657. doi:10.1007/s11229-004-6290-7
* ––– (2016). “On the paths of categories”, in: Piecha and Schroeder-Heister, eds. (2016b), pp. 65–77. doi:10.1007/978-3-319-22686-6_4
* ––– and Zoran Petrić (2004). *Proof-Theoretical Coherence*, London: College Publications.
* Drobyshevich, Sergey (2021). “Tarskian Consequence Relations Bilaterally: Some Familiar Notions”. *Synthese*, 198 (Suppl 22): S5213-S5240. doi:10.1007/s11229-019-02267-w.
* Dummett, Michael (1973). *Frege: Philosophy of Language*, London: Duckworth.
* ––– (1975). “The Philosophical Basis of Intuitionistic Logic”, in: H.E. Rose and J.C. Shepherdson (eds.), *Proceedings of the Logic Colloquium ’73*, *Studies in Logic and the Foundations of Mathematics*, 80: 5–40. doi:10.1016/S0049-237X(08)71941-4
* ––– (1991). *The Logical Basis of Metaphysics*, London: Duckworth.
* Francez, Nissim (2015). *Proof-theoretic Semantics*, London: College Publications.
* ––– (2022). “Proof-Theoretic Semantics as a Resource for Expressing Semantic Variability”, *Synthese* 200, article 294. doi:10.1007/s11229-022-03780-1
* ––– and Gilad Ben-Avi (2015). “A proof-theoretic reconstruction of generalized quantifiers”, *Journal of Semantics*, 32: 313–371. doi:10.1093/jos/ffu001
* ––– and Roy Dyckhoff (2010). “Proof-theoretic Semantics for a Natural Language Fragment”, *Linguistics and Philosophy*, 33: 447–477. doi:10.1007/s10988-011-9088-3
* –––, Roy Dyckhoff, and Gilad Ben-Avi (2010). “Proof-Theoretic Semantics for Subsentential Phrases”, *Studia Logica*, 94: 381–401. doi:10.1007/s11225-010-9241-y
* Gentzen, Gerhard (1934/35). “Untersuchungen über das logische Schließen”, *Mathematische Zeitschrift*, 39: 176–210, 405–431; English translation in *The Collected Papers of Gerhard Gentzen*, M. E. Szabo (ed.), Amsterdam: North Holland, 1969, pp. 68–131. doi:10.1007/BF01201353
* Girard, Jean-Yves (1987). “Linear Logic”, *Theoretical Computer Science*, 50: 1–102. doi:10.1016/0304-3975(87)90045-4
* Goldfarb, Warren (2016). “On Dummett’s proof-theoretic justifications of logical laws´”, *Advances in Proof-theoretic Semantics*, Thomas Piecha and Peter Schroeder-Heister, eds., Berlin: Springer, pp. 195–210. doi:10.1007/978-3-319-22686-6_13
* Hacking, Ian (1979). “What is Logic?”, *Journal of Philosophy*, 76: 285–319. doi:10.2307/2025471
* Hallnäs, Lars (1991). “Partial Inductive Definitions”, *Theoretical Computer Science*, 87: 115–142. doi:10.1016/S0304-3975(06)80007-1
* ––– (2006). “On the proof-theoretic foundation of general definition theory”, *Synthese*, 148: 589–602. doi:10.1007/s11229-004-6291-6
* Hallnäs, Lars and Peter Schroeder-Heister (1990/91). “A proof-theoretic approach to logic programming: I. Clauses as rules. II. Programs as definitions”, *Journal of Logic and Computation*, 1: 261–283, 635–660. doi:10.1093/logcom/1.2.261 , doi:10.1093/logcom/1.5.635
* Harper, Robert, Furio Honsell, and Gordon Plotkin (1987). “A Framework for Defining Logics”, *Journal of the Association for Computing Machinery*, 40: 194–204. doi:10.1145/138027.138060
* Jaśkowski, Stanisław (1934). “On the Rules of Suppositions in Formal Logic”, *Studia Logica*, 1: 5–32 (reprinted in S. McCall (ed.), *Polish Logic 1920–1939*, Oxford 1967, pp. 232–258.
* Jäger, Gerhard and Robert F. Stärk (1998). “A Proof-Theoretic Framework for Logic Programming”, *Handbook of Proof Theory*, Samuel R. Buss (ed.), Amsterdam: Elsevier, pp. 639–682.
* Kahle, Reinhard and Peter Schroeder-Heister, eds. (2006). *Proof-Theoretic Semantics*, Special issue of *Synthese*, Volume 148. doi:10.1007/s11229-004-6292-5
* Kapsner, Andreas (2014). *Logics and Falsifications: A New Perspective on Constructivist Semantics*, Berlin: Springer.
* Kneale, William (1956). “The Province of Logic”, *Contemporary British Philosophy*, H. D. Lewis (ed.), London: Allen and Unwin, pp. 237–261.
* Koslow, Arnold (1992). *A Structuralist Theory of Logic*, Cambridge: Cambridge University Press.
* Kreisel, Georg (1971). “A Survey of Proof Theory II”, *Proceedings of the Second Scandinavian Logic Symposium*, J. E. Renstad (ed.), Amsterdam: North-Holland, pp. 109–170. doi:10.1016/S0049-237X(08)70845-0
* Kreuger, Per (1994). “Axioms in Definitional Calculi”, *Extensions of Logic Programming*: *Proceedings of the 4th International Workshop, ELP’93, St. Andrews, U.K., March/April 1993* (Lecture Notes in Computer Science, Voluem 798), Roy Dyckhoff (ed.), Berlin: Springer, pp. 196–205. doi:10.1007/3-540-58025-5_57
* Kürbis, Nils (2016). “Some Comments on Ian Rumfitt’s Bilateralism”, *Journal of Philosophical Logic* 45:623–644. doi:10.1007/s10992-016-9395-9
* ––– (2019). *Proof and Falisity: A Logical Investigation*, Cambridge University Press.
* Lambek, J. and P.J. Scott (1986). *Introduction to Higher Order Categorical Logic*, Cambridge: Cambridge University Press.
* Liang, Chuck and Dale Miller (2009). “Focusing and Polarization in Linear, Intuitionistic, and Classical Logics”. *Theoretical Computer Science*, 410(46): 4747–4768. doi:10.1016/j.tcs.2009.07.041
* ––– (2024). “Focusing Gentzen’s LK Proof System”, *Peter Schroeder-Heister on Proof-Theoretic Semantics*, T. Piecha and K. F. Wehmeier, eds. Berlin: Springer, pp. 275-313. doi:10.1007/978-3-031-50981-0_9
* Lorenzen, Paul (1955). *Einführung in die operative Logik und Mathematik*, Berlin: Springer; 2nd edition, 1969.
* Mancosu, Paolo, Sergio Galvan and Richard Zach (2021). *An Introduction to Proof Theory: Normalization, Cut-Elimination, and Consistency Proofs*, Oxford University Press.
* Martin-Löf, Per (1971). “Hauptsatz for the intuitionistic theory of iterated inductive definitions”, *Proceedings of the Second Scandinavian Logic Symposium*, J. E. Fenstad (ed.), Amsterdam: North-Holland, pp. 179–216. doi:10.1016/S0049-237X(08)70847-4
* ––– (1984). *Intuitionistic Type Theory*, Napoli: Bibliopolis.
* ––– (1995). “Verificationism Then and Now”, *The Foundational Debate: Complexity and Constructivity in Mathematics and Physics*, Werner DePauli-Schimanovich, Eckehart Köhler, and Friedrich Stadler (eds.), Dordrecht: Kluwer, pp. 187–196.
* ––– (1998). “Truth and Knowability: On the Principles C and K of Michael Dummett”, *Truth in Mathematics*, Harold G. Dales and Gianluigi Oliveri (eds.), Oxford: Clarendon Press, pp. 105–114.
* ––– (2019). “Logic and Ethics”. *Proof-Theoretic Semantics: Assessment and Future Perspectives. Proceedings of the Third Tübingen Conference on Proof-Theoretic Semantics, March 2019*, T. Piecha and P. Schroeder-Heister (eds.), University of Tübingen, pp. 227–235 (transcript of lecture). doi:10.15496/publikation-35319
* Negri, Sara and Jan von Plato (2001). *Structural Proof Theory*, Cambridge University Press.
* Nelson, David (1949). “Constructible Falsity”, *Journal of Symbolic Logic*, 14: 16–26. doi:10.2307/2268973
* Odintsov, Sergei P. (2008). *Constructive Negations and Paraconsistency*, Berlin: Springer.
* Parigot, Michel (1992). “-Calculus: An Algorithmic Interpretation of Classical Natural Deduction”. *Logic Programming and Automated Reasoning*, A. Voronkov (ed.), Berlin: Springer, pp. 190–201. doi:10.1007/BFb0013061
* Piccolomini d’Aragona, Antonio (2023). *Prawitz*’*s Epistemic Grounding. An Investigation into the Power of Deduction*, Berlin, Springer 2023.
* Piecha, Thomas (2016). “Completeness in Proof-Theoretic Semantics”. In: Piecha and Schroeder-Heister, eds. (2016b), pp. 231–251. doi:10.1007/978-3-319-22686-6_15
* ––– (2023). “Karl Popper on deduction”, Perspectives on Deduction, Antonio Piccolomini d’Aragona (ed.), Berlin: Springer.
* –––, Wagner de Campos Sanz and Peter Schroeder-Heister (2015). “Failure of Completeness in Proof-Theoretic Semantics”, *Journal of Philosophical Logic*, 44: 321–335. doi:10.1007/s10992-014-9322-x
* ––– and Peter Schroeder-Heister (2016a). “Atomic Systems in Proof-Theoretic Semantics: Two Approaches”, in: Redmond, J., O. P. Martins, Á.N. Fernández *Epistemology, Knowledge and the Impact of Interaction*, Cham: Springer, pp. 47–62. doi:10.1007/978-3-319-26506-3_2
* ––– and Peter Schroeder-Heister, eds. (2016b). *Advances in Proof-Theoretic Semantics*, Cham: Springer (Open Access). doi:10.1007/978-3-319-22686-6
* ––– and Peter Schroeder-Heister (2019). “Incompleteness of Intuitionistic Propositional Logic with Respect to Proof-Theoretic Semantics”, *Studia Logica*, 107: 233–246. doi:10.1007/s11225-018-9823-7
* ––– and Kai Wehmeier, eds. (2024). *Peter Schroeder-Heister on Proof-Theoretic Semantics*, Berlin: Springer. doi:10.1007/978-3-031-50981-0
* Pimentel, Elaine, Luiz Carlos Pereira, and Valeria de Paiva (2019). “An Ecumenical Notion of Entailment”, *Synthese* 198 (S22): 5391–5413. doi:10.1007/s11229-019-02226-5
* Popper, Karl Raimund (1947a). “Logic without Assumptions”, *Proceedings of the Aristotelian Society*, 47: 251–292. Reprinted in Binder et al., eds. (2022). doi:10.1007/978-3-030-94926-6_2
* ––– (1947b). “New Foundations for Logic”, *Mind*, 56: 193–235; corrections, *Mind*, 57: 69–70. Reprinted in Binder et al., eds (2022). doi:10.1007/978-3-030-94926-6_3
* Prawitz, Dag (1965). *Natural Deduction: A Proof-Theoretical Study*, Stockholm: Almqvist & Wiksell; reprinted Mineola, NY: Dover Publications, 2006.
* ––– (1971). “Ideas and Results in Proof Theory”, *Proceedings of the Second Scandinavian Logic Symposium* (Oslo 1970), Jens E. Fenstad (ed.), Amsterdam: North-Holland, pp. 235–308. doi:10.1016/S0049-237X(08)70849-8
* ––– (1972). “The Philosophical Position of Proof Theory”, *Contemporary Philosophy in Scandinavia*, R. E. Olson and A. M. Paul (eds.), Baltimore, London: John Hopkins Press, pp. 123–134.
* ––– (1973). “Towards a Foundation of a General Proof Theory”, *Logic, Methodology and Philosophy of Science IV*, Patrick Suppes, et al. (eds.), Amsterdam: North-Holland, pp. 225–250.
* ––– (1974). “On the Idea of a General Proof Theory”, *Synthese*, 27: 63–77. doi:10.1007/BF00660889
* ––– (1985). “Remarks on some Approaches to the Concept of Logical Consequence”, *Synthese*, 62: 152–171. doi:10.1007/BF00486044
* ––– (2006). “Meaning Approached via Proofs”, *Synthese*, 148: 507–524. doi:10.1007/s11229-004-6295-2
* ––– (2007). “Pragmatist and Verificationist Theories of Meaning”, *The Philosophy of Michael Dummett*, Randall E. Auxier and Lewis Edwin Hahn (eds.), La Salle: Open Court, pp. 455–481.
* ––– (2013). “An Approach to General Proof Theory and a Conjecture of a Kind of Completeness of Intuitionistic Logic Revisited”, *Advances in Natural Deduction*, Edward Hermann Haeusler, Luiz Carlos Pereira, and Valeria de Paiva (eds.), Berlin: Springer. doi:10.1007/978-94-007-7548-0_12
* ––– (2015). “Explaining deductive inference”, *Dag Prawitz on Proofs and Meaning* , H. Wansing (ed.), Berlin: Springer, pp. 65–100. doi:10.1007/978-3-319-11041-7_3
* ––– (2024). “The validity of inference and argument”, *Peter Schroeder-Heister on Proof-Theoretic Semantics*, Thomas Piecha and Kai F. Wehmeier. (eds.) Berlin: Springer, pp 135-160. doi:10.1007/978-3-031-50981-0_4
* Pym, David (2002). *The Semantics and Proof Theory of the Logic of Bunched Implications*, Dordrecht: Kluwer.
* ––– and Eike Ritter (2004). *Reductive Logic and Proof Search: Proof Theory, Semantics, and Control*, Oxford: Clarendon Press.
* Read, Stephen (2010). “General-Elimination Harmony and the Meaning of the Logical Constants”, *Journal of Philosophical Logic*, 39: 557–576. doi:10.1007/s10992-010-9133-7
* Rumfitt, Ian (2000). “‘Yes’ and ‘No’”, *Mind* 109: 781–823. doi:10.1093/mind/109.436.781
* Sambin, Giovanni, Giulia Battilotti, and Claudia Faggian (2000). “Basic Logic: Reflection, Symmetry, Visibility”, *Journal of Symbolic Logic*, 65: 979–1013. doi:10.2307/2586685
* Sandqvist, Tor (2009). “Classical Logic without Bivalence”, *Analysis*, 69: 211–218. doi:10.1093/analys/anp003
* ––– (2015a). “Base-extension semantics for intuitionistic sentential logic”, *Logic Journal of the IGPL*, 23: 719–731. doi:10.1093/jigpal/jzv021
* ––– (2015b). “Hypothesis-discharging rules in atomic bases”, *Dag Prawitz on Proofs and Meaning* , H. Wansing (ed.), Berlin: Springer, pp. 313–328. doi:10.1007/978-3-319-11041-7_14
* Schroeder-Heister, Peter (1984). “A natural extension of natural deduction”, *Journal of Symbolic Logic*, 49: 1284–1300. doi:10.2307/2274279
* ––– (1991). “Uniform Proof-Theoretic Semantics for Logical Constants (Abstract)”, *Journal of Symbolic Logic*, 56: 1142. doi:10.2307/2275092
* ––– (1993). “Rules of Definitional Reflection”, *Proceedings of the 8th Annual IEEE Symposium on Logic in Computer Science*, Los Alamitos: IEEE Press, pp. 222–232. doi:10.1109/LICS.1993.287585
* ––– (2006). “Validity Concepts in Proof-Theoretic Semantics”, *Synthese*, 148: 525–571. doi:10.1007/s11229-004-6296-1
* ––– (2007). “Generalized Definitional Reflection and the Inversion Principle”, *Logica Universalis*, 1: 355–376. doi:10.1007/s11787-007-0018-7
* ––– (2012a). “Definitional Reasoning in Proof-Theoretic Semantics and the Square of Opposition”, *The Square of Opposition: A General Framework for Cognition*, Jean-Yves Béziau and Gillman Payette (eds.), Bern: Peter Lang, pp. 323–349. doi:10.15496/publikation-72333
* ––– (2012c). “The Categorical and the Hypothetical: A Critique of some Fundamental Assumptions of Standard Semantics”. In: *Synthese* 187, pp. 925–942. doi:10.1007/s11229-011-9910-z
* ––– (2013). “Definitional Reflection and Basic Logic”, *Annals of Pure and Applied Logic*, 164(4): 491–501. doi:10.1016/j.apal.2012.10.010
* ––– (2015). “Proof-theoretic validity based on elimination rules”. In: Haeusler, Edward Hermann, Wagner de Campos Sanz and Bruno Lopes, eds., *Why is this a Proof? Festschrift for Luiz Carlos Pereira*, London: College Publications, pp. 159–176. doi:10.15496/publikation-70825
* ––– (2016). “Open Problems in Proof-Theoretic Semantics”. In: Piecha and Schroeder-Heister, eds. (2016b), pp. 253–283. doi:10.1007/978-3-319-22686-6_16
* ––– (2022). “Axiomatic thinking, identity of proofs and the quest for an intensional proof-theoretic semantics”. In: F. Ferreira, R. Kahle and G. Sommaruga (eds.), *Axiomatic Thinking I*, Berlin: Springer, pp. 145–165. doi:10.1007/978-3-030-77657-2_8
* Shoesmith, D. J. and Timothy J. Smiley (1978). *Multiple-Conclusion Logic*, Cambridge: Cambridge University Press.
* Sommaruga, Giovanni (2000). *History and Philosophy of Constructive Type Theory*, Dordrecht: Kluwer.
* Sørensen, Morten Heine B. and Pawel Urzyczyn (2006). *Lectures on the Curry-Howard Isomorphism*, Amsterdam: Elsevier.
* Stafford, Will and Victor Nascimento (2023). “Following all the rules: intuitionistic completeness for generalised proof-theoretic validity”, *Analysis*. doi:10.1093/analys/anac100
* Tait, W. W: (1967). “Intensional Interpretations of Functionals of Finite Type I”, *Journal of Symbolic Logic*, 32: 198–212. doi:10.2307/2271658
* Tennant, Neil (1978). *Natural Logic*, Edinburgh: Edinburgh University Press.
* ––– (1982). “Proof and Paradox”, *Dialectica*, 36: 265–296. doi:10.1111/j.1746-8361.1982.tb00820.x
* ––– (1987). *Anti-Realism and Logic: Truth as Eternal*, Oxford: Clarendon Press.
* ––– (1997). *The Taming of the True*, Oxford: Clarendon Press.
* ––– (2017). *Core Logic*, Oxford University Press.
* The Univalent Foundations Program (2013). *Homotopy Type Theory: Univalent Foundations of Mathematics*, Princeton: Institute for Advanced Study.
* Tranchini, Luca (2010). *Proof and Truth: An Anti-Realist Perspective*, Milano: Edizioni ETS, 2013; reprint of Ph.D. dissertation, Department of Philosophy, University of Tuebingen, 2010, [available online](http://nbn-resolving.de/urn:nbn:de:bsz:21-opus-54715).
* ––– (2012a). “Truth from a Proof-Theoretic Perspective”. In: *Topoi* 31, pp. 47–57. doi:10.1007/s11245-012-9121-3
* ––– (2012b). “Natural Deduction for Dual Intuitionistic Logic”, *Studia Logica*, 100: 631–648. doi:10.1007/s11225-012-9417-8
* ––– (2016). “Proof-Theoretic Semantics, Paradoxes, and the Distinction between Sense and Denotation”, *Journal of Logic and Computation*, 26, pp. 495–512. doi:10.1093/logcom/exu028
* ––– (2023). *Harmony and Paradox: Intensional Aspects of Proof-Theoretic Semantics*, Berlin: Springer.
* Troelstra, Anne S. and Dirk van Dalen (1988). *Constructivism in Mathematics: An Introduction*, Amsterdam: North-Holland.
* Troelstra, A. S. and H. Schwichtenberg (2000). *Basic Proof Theory*, Cambridge University Press (second edition 2012).
* von Kutschera, Franz (1968). “Die Vollständigkeit des Operatorensystems  für die intuitionistische Aussagenlogik im Rahmen der Gentzensemantik”, *Archiv für mathematische Logik und Grundlagenforschung*, 11: 3–16. doi:10.1007/BF01973339
* ––– (1969). “Ein verallgemeinerter Widerlegungsbegrifff für Gentzenkalküle”, *Archiv für mathematische Logik und Grundlagenforschung*, 12: 104–118. doi:10.1007/BF01969697
* Wansing, Heinrich (1993a). “Functional Completeness for Subsystems of Intuitionistic Propositional Logic”, *Journal of Philosophical Logic*, 22: 303–321. doi:10.1007/BF01049305
* ––– (1993b). *The Logic of Information Structures* (Lecture Notes in Artificial Intelligence, Volume 681), Berlin: Springer Springer.
* ––– (2000). “The Idea of a Proof-Theoretic Semantics and the Meaning of the Logical Operations”, *Studia Logica*, 64: 3–20. doi:10.1023/A:1005217827758
* ––– (2001). “Negation”, *The Blackwell Guide to Philosophical Logic*, L. Goble (ed.), Cambridge, MA: Blackwell, pp. 415–436.
* ––– (2017). “A More General General Proof Theoy”, *Journal of Applied Logic*, 25: 23–46. doi:10.1016/j.jal.2017.01.002.
* Więckowski, Bartosz (2008). “Predication in Fiction”, in *The Logica Yearbook 2007*, M. Peliš (ed.), Prague: Filosofia, pp. 267–285.
* ––– (2011). “Rules for Subatomic Derivation”, *Review of Symbolic Logic*, 4: 219–236. doi:10.1017/S175502031000033X
* ––– (2016). “Subatomic Natural Deduction for a Naturalistic First-Order Language with Non-Primitive Identity”, *Journal of Logic, Language and Information*, 25: 215–268. doi:10.1007/s10849-016-9238-7
* ––– (2021). “Subatomic Negation”, *Journal of Logic, Language and Information*, 30: 207–262. doi:10.1007/s10849-020-09325-4
* Zeilberger, Noam (2008). “On the Unity of Duality”, *Annals of Pure and Applied Logic*, 153: 66–96. doi:10.1016/j.apal.2008.01.001

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=proof-theoretic-semantics). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/proof-theoretic-semantics/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=proof-theoretic-semantics&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/proof-theoretic-semantics/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* Gheorghiu, Alexander V., and David Pym (2022), “[Proof-Theoretic Semantics and Tactical Proof](http://www0.cs.ucl.ac.uk/staff/D.Pym/Proof_theoretic_Semantics_and_Tactical_Proof.pdf),” online manuscript, [arXiv:2301.02302](https://arxiv.org/abs/2301.02302)
* [“Natural Deduction”](https://iep.utm.edu/nat-ded/), *The Internet Encyclopedia of Philosophy*, entry by Andrzej Indrzejczak
* [“Dialogical Logic”](https://iep.utm.edu/dial-log/), *The Internet Encyclopedia of Philosophy*, entry by Thomas Piecha
* Pym, David, Eike Ritter, and Edmund Robinson (2023). “[Categorical Proof-theoretic Semantics](https://doi.org/10.48550/arXiv.2302.09031),” manuscript (submitted), [arXiv:2302.09031](https://arxiv.org/abs/2302.09031) [math.LO].
* Stafford, Will (2023). “Prawitz’s Conjecture is False; So What?” manuscript (submitted), [arXiv:2305.09310](https://arxiv.org/abs/2305.09310) [math.LO].

## Related Entries

[category theory](https://plato.stanford.edu/entries/category-theory/) | [connectives: sentence connectives in formal logic](https://plato.stanford.edu/entries/connectives-logic/) | [contradiction](https://plato.stanford.edu/entries/contradiction/) | [Curry’s paradox](https://plato.stanford.edu/entries/curry-paradox/) | [Hilbert, David: program in the foundations of mathematics](https://plato.stanford.edu/entries/hilbert-program/) | [logic, history of: intuitionistic logic](https://plato.stanford.edu/entries/intuitionistic-logic-development/) | [logic: and games](https://plato.stanford.edu/entries/logic-games/) | [logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [logic: connexive](https://plato.stanford.edu/entries/logic-connexive/) | [logic: dialogical](https://plato.stanford.edu/entries/logic-dialogical/) | [logic: intuitionistic](https://plato.stanford.edu/entries/logic-intuitionistic/) | [logic: linear](https://plato.stanford.edu/entries/logic-linear/) | [logic: substructural](https://plato.stanford.edu/entries/logic-substructural/) | [logical constants](https://plato.stanford.edu/entries/logical-constants/) | [logical pluralism](https://plato.stanford.edu/entries/logical-pluralism/) | [mathematics, philosophy of: intuitionism](https://plato.stanford.edu/entries/intuitionism/) | [mathematics, philosophy of: structuralism](https://plato.stanford.edu/entries/structuralism-mathematics/) | [natural deduction systems in logic](https://plato.stanford.edu/entries/natural-deduction/) | [negation](https://plato.stanford.edu/entries/negation/) | [paradoxes: and contemporary logic](https://plato.stanford.edu/entries/paradoxes-contemporary-logic/) | [proof theory: development of](https://plato.stanford.edu/entries/proof-theory-development/) | [realism: challenges to metaphysical](https://plato.stanford.edu/entries/realism-sem-challenge/) | [Russell’s paradox](https://plato.stanford.edu/entries/russell-paradox/) | [self-reference](https://plato.stanford.edu/entries/self-reference/) | [truth: revision theory of](https://plato.stanford.edu/entries/truth-revision/) | [type theory](https://plato.stanford.edu/entries/type-theory/) | [type theory: intuitionistic](https://plato.stanford.edu/entries/type-theory-intuitionistic/)

### Acknowledgments

I would like to thank the editors, especially Ed Zalta, and the anonymous reviewers for many helpful comments and suggestions.

[Copyright © 2023](https://plato.stanford.edu/info.html#c) by  
Peter Schroeder-Heister <[*psh@uni-tuebingen.de*](mailto:psh%40uni-tuebingen%2ede)>
