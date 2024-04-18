# 逻辑蕴含 logical consequence (Jc Beall, Greg Restall, and Gil Sagi)

*首次发表于2005年1月7日；实质性修订于2019年2月21日。*

一个好的论证是指其结论从其前提中推导出来；其结论是前提的蕴含。但是结论从前提中推导出来是以何种意义上的呢？结论成为前提的蕴含是什么意思呢？这些问题在很多方面都是逻辑学（作为一门哲学学科）的核心。考虑以下论证：

1. 如果我们对大学收取高额费用，只有富人才会报名。
    我们对大学收取高额费用。
    因此，只有富人才会报名。

对于这个论证，人们可以提出许多不同的观点，但是很多人都认为，如果我们不模棱两可（如果前提和结论的术语意思相同），那么这个论证是有效的，也就是说，结论是由前提演绎出来的。这并不意味着结论是真实的。也许前提是不真实的。然而，如果前提是真实的，那么结论也是真实的，这是逻辑上的事实。本文讨论的是有效论证中前提和结论之间的关系。

当代对于蕴含概念（随附关系）的分析认为它既是必然的又是形式的，这些答案通常通过证明或模型（或者在某些情况下两者兼有）来阐明。本文旨在对当代逻辑蕴含的一些核心概念进行简要描述。

我们应该注意，我们只强调逻辑蕴含的一些哲学方面，几乎不涉及任何技术细节，也不涉及大量关于这个主题的哲学争论。我们这样做的理由是，通过研究具体的逻辑学——具体的逻辑蕴含理论（例如相关逻辑、次结构逻辑、非单调逻辑、动态逻辑、模态逻辑、量化理论等），人们可以了解到技术细节和激发它们的特定哲学问题。（此外，关于语言的几乎任何特征——句子的结构与形式、命题、上下文敏感性、意义，甚至真理——都与逻辑蕴含的争论相关，使得详尽讨论几乎不可能。）我们在这里的目的只是简要涉及一些对逻辑蕴含至关重要的基本问题。

* [1. 演绎和归纳蕴含](https://plato.stanford.edu/entries/logical-consequence/#DeduInduCons)
* [2. 形式和实质蕴含](https://plato.stanford.edu/entries/logical-consequence/#FormMateCons)
* [3. 数学工具：模型与证明](https://plato.stanford.edu/entries/logical-consequence/#MathToolModeProo)

  * [3.1 逻辑蕴含的模型论解释](https://plato.stanford.edu/entries/logical-consequence/#ModeTheoAccoLogiCons)
  * [3.2 逻辑蕴含的证明论解释](https://plato.stanford.edu/entries/logical-consequence/#ProoTheoAccoLogiCons)
  * [3.3 模型与证明之间](https://plato.stanford.edu/entries/logical-consequence/#BetwModeProo)
* [4. 前提和结论](https://plato.stanford.edu/entries/logical-consequence/#PremConc)
* [5. 一个还是多个？](https://plato.stanford.edu/entries/logical-consequence/#OneMany)
* [ 参考文献](https://plato.stanford.edu/entries/logical-consequence/#Bib)

  * [逻辑蕴含的历史](https://plato.stanford.edu/entries/logical-consequence/#HistLogiCons)
  * [20 世纪的发展](https://plato.stanford.edu/entries/logical-consequence/#ThCentDeve)
  * [逻辑蕴含的哲学](https://plato.stanford.edu/entries/logical-consequence/#PhilLogiCons)
* [ 学术工具](https://plato.stanford.edu/entries/logical-consequence/#Aca)
* [其他互联网资源](https://plato.stanford.edu/entries/logical-consequence/#Oth)
* [ 相关条目](https://plato.stanford.edu/entries/logical-consequence/#Rel)

---

## 1. 演绎和归纳的蕴含

有些论证是这样的，即前提的（共同）真实性对于结论的真实性来说是必要充分的。在当前传统中，这种“必要充分性”是与演绎有效性和归纳有效性区分开的逻辑蕴涵的核心意义。在归纳有效的论证中，前提的（共同）真实性很可能（但不一定）对于结论的真实性来说是充分的。归纳有效的论证是这样的，常常说，它的前提使得结论更有可能或更合理（尽管在前提的共同真实性下，结论可能是不真实的）。这个论证

2. 到目前为止，观察到的所有天鹅都是白色的。
    Smoothy 是一只天鹅。
    因此，Smoothy 是白色的。

不是演绎有效的，因为前提不一定足以推出结论。Smoothy 很可能是一只黑天鹅。

可以区分不同的归纳论证。有些归纳论证似乎相当合理，而其他一些则不太合理。有许多不同的方法来尝试分析归纳蕴含。我们可以考虑前提使结论更有可能发生的程度（概率解读），或者我们可以检查前提为真时最常见的情况是否也使结论为真。（这导致了某些默认或非单调推理的形式。）归纳蕴含领域是困难而重要的，但我们将在这里离开这个主题，专注于演绎有效性。

（有关这些主题的更多信息，请参见归纳逻辑和非单调逻辑的条目。）

必要性的限制并不足以解决演绎有效性的概念，因为必要性的概念也可以以多种方式具体化。说一个结论必然从前提中得出，意味着这个论证在某种程度上是无例外的，但是有很多不同的方式可以使这个想法变得精确。

对这个概念的第一次尝试可能使用我们现在称之为形而上学的必要性。也许一个论证是有效的，如果前提为真且结论为假在（形而上学上）不可能的情况下，有效的是指在每一个可能的世界中，只要前提成立，结论也成立。这个限制被认为是逻辑蕴含的必要条件（如果前提为真且结论不为真是可能的，那么毫无疑问结论不是从前提中得出的）；然而，在大多数逻辑蕴含的解释中，这并不是有效性的充分条件。许多人承认存在后验的必然性，比如水是 H2O 的说法。如果这个说法是必然的，那么这个论证：

3. x 是水。
    因此，x 是 H2O。

在必然保真方面，它似乎与演绎有效性相去甚远。发现水是 H2O 是一个真正的发现，这需要进行大量的经验调查。虽然可能会有我们以前没有认识到的有效论证的真正发现，但认为这些发现需要经验调查是完全不同的事情。

关于必要性的另一种观点是概念上的必要性。在这种观点上，(3)的结论不是其前提的蕴含，因为水是 H2O 不是一个概念上的真理。水的概念和 H2O 的概念碰巧指代同一属性，但这种一致性部分由世界决定。

逻辑的类似图像将蕴含视为分析真理的问题，而水是 H2O 并不是一种分析真理。词语“水”和公式“H2O”在范围上是一致的（必然如此），但它们在意义上并不一致。

如果形而上学的必然性对于确定逻辑蕴含来说过于粗糙（因为它可能被认为使得太多的论证在演绎上成立），那么诉诸于概念或分析必然性似乎是一条更好的途径。然而，正如奎因所争论的那样，分析和综合（以及类似地，概念和非概念）真理之间的区别并不像我们在 20 世纪初期所认为的那样简单。（参见关于分析/综合区别的条目。）此外，许多论证似乎仅仅基于分析就能保持真实：

4. 彼得是格雷格的母亲的兄弟的儿子。
    因此，彼得是格雷格的表兄弟。

人们可以理解，结论是基于对涉及概念的理解，从前提中推导出来的。人们不需要了解彼得是格雷格的表兄弟的任何信息。尽管(4)在分析或概念上保持真实性，但许多人认为它并非演绎有效。它并不像它本可以那样普遍，因为它不够正式。这个论证之所以成功，仅仅是因为涉及到家庭概念的特定细节。

进一步刻画逻辑蕴含的独特必要性基础的可能性是先验性的概念。无论演绎有效的论证是什么，都可以在不依赖经验的情况下被知道是如此，因此它们必须是先验可知的。先验性的限制显然排除了论证(3)作为演绎有效的可能性，这是正确的。然而，排除论证(4)是不合适的。如果我们认为像(4)这样的论证不是基于演绎有效性等问题，而是基于先验可知的定义等其他因素，那么我们必须在其他地方寻找逻辑蕴含的特征描述。

## 2. 形式和实质的蕴含

寻找更狭窄的逻辑蕴含标准的最强大且最广泛的建议是诉诸形式性。从“彼得是格雷格的母亲的兄弟的儿子”到“彼得是我的表兄弟”的步骤是一种实质蕴含而不是形式蕴含，因为要从前提到结论的步骤，我们需要的不仅仅是所涉及的主张的结构或形式，还需要理解它们的内容。

形式和内容之间的区别可能意味着什么？我们的意思是说，如果蕴含依赖于所涉及的主张的形式而不是实质，那么蕴含就是形式的。但这句话该如何理解？我们将至多给出一个概要，这个概要可以用多种方式填充。

显而易见的第一步是注意到逻辑蕴含规则的所有表述都依赖于方案。亚里士多德的三段论是一个骄傲的例子。

费里奥：没有 F 是 G。一些 H 是 G。因此一些 H 不是 F。

推理方案，就像上面的例子一样，展示了有效论证的结构。也许说一个论证在形式上有效是指它符合某个通用方案，其中每个实例都是有效的，比如费里奥。

那也是对形式的不完整规范。物质论证（4）是一个实例：

5. x 是 y 的母亲的兄弟的儿子。
    因此，x 是 y 的表兄弟。

每个实例都是有效的。我们必须更多地解释为什么某些方案被视为适当的形式（因此是逻辑蕴含的充分依据），而其他方案则不是。一个普遍的答案将阐明逻辑形式的概念，这本身就是一个重要问题（涉及逻辑常量等概念）。我们不会探讨不同逻辑形式候选的细节，而是提及关于这个问题的不同提议。

要求有效性以逻辑形式的概念为基础的目的是什么？至少有三种不同的提议来解释所需的形式概念，并且每种提议对这个问题提供了不同类型的答案。

我们可以认为逻辑的形式规则在对象的特定特征方面是完全中立的。在这种观点下，逻辑法则必须抽象出对象的特定特征。逻辑是形式的，因为它是完全普遍的。表征什么是完全普遍概念的一种方式是通过置换。塔斯基（1986）提出，如果一个操作或谓词在一个域上是不变的（或逻辑的），那么它就被认为是普遍的。 （一组对象的置换为每个对象分配该集合中的一个唯一对象，使得没有对象被分配超过一次。例如，{a，b，c，d}的一个置换可能将b分配给a，d分配给b，c分配给c，a分配给d。）如果对于任何置换p，二元谓词R在置换下是不变的，那么当Rxy成立时，Rp（x）p（y）也成立。你可以看到，恒等关系是置换不变的——如果x=y，那么p（x）=p（y）——但是母亲关系不是。我们可能有置换p，即使x是y的母亲，p（x）也不是p（y）的母亲。我们也可以使用置换来表征逻辑性，不仅仅是谓词：我们可以说，一个一元命题连接词“∙”是置换不变的，当且仅当对于所有A，如果p（∙A）为真，则∙p（A）也为真。严格定义这一点需要确定置换如何作用于句子，这超出了本文的范围。可以说，否定这样的操作通过了不变性测试，但是“JC相信”这样的操作没有通过。

与形式性密切相关的分析是，形式规则是完全抽象的。它们抽象出思想或主张的语义内容，只留下语义结构。术语“母亲”和“表兄弟姐妹”在论证中起着本质作用（5）。根据这种观点，命题连接词和量词等表达式不会为表达式增加新的语义内容，而只会增加组合和结构语义内容的方式。相比之下，“母亲”和“表兄弟姐妹”等表达式则增加了新的语义内容。

划分这种区别的另一种方法（或者说划分一个不同的区别）是将逻辑的形式规则视为思维的构成规范，而不论其主题是什么。可以合理地认为，无论我们思考什么，将我们的思想连接、分离和否定以形成新的思想都是有意义的。量化也可能是有意义的。因此，逻辑词汇的行为可以用来构建和规范任何类型的理论，逻辑词汇的规范适用于所有情况。在这种观点下，有效论证的规范是适用于思维的规范，而不论思维的具体内容是什么。[1]

## 3. 数学工具：模型和证明

二十世纪关于逻辑蕴含概念的技术工作主要集中在两种不同的数学工具上，即证明论和模型论。这两种工具可以被看作是阐明逻辑蕴含概念不同方面的方式，支持不同的哲学观点。

### 3.1 模型论对逻辑蕴含的解释

我们将逻辑蕴含定义为基于形式的必要真理保持。这个想法可以通过形式化的方式来解释。可以使用数学结构来解释需要保持真理的可能性范围。逻辑蕴含的形式性可以通过赋予逻辑词汇特殊的角色来形式化解释，这些逻辑词汇构成了句子的形式。让我们看看模型论如何同时处理这两个任务。

逻辑蕴含的模型中心方法将论证的有效性视为缺乏反例。对于一个论证来说，反例通常是一种展示前提无法导致结论的方式。一种方法是提供一个具有相同形式的论证，其中前提明显为真而结论明显为假。另一种方法是提供一种情境，其中前提为真而结论为假。在当代文献中，反例的直观概念被发展成为一种模型理论。

模型的确切结构取决于所使用的语言类型（外延/内涵，一阶/高阶等）。对于一个外延一阶语言，模型由一个非空集合构成，该集合构成了领域，并且有一个解释函数，该函数将每个非逻辑术语分配给领域上的一个外延——任何与其语义类型一致的外延（个体常量被分配给领域的元素，函数符号被分配给从领域到自身的函数，一元一阶谓词被分配给领域的子集等）。

当代模型论的逻辑蕴含定义可以追溯到塔斯基（1936年）。它建立在塔斯基在1935年给出的模型中真实性的定义之上。塔斯基通过给出逻辑词汇的真实性（或满足条件）来递归地定义模型中的真实句子。例如，一个合取式在一个模型中是真的，当且仅当两个合取项在该模型中都是真的。一个全称量化句子∀xFx在一个模型中是真的，当且仅当每个实例在该模型中都是真的。（或者，根据塔斯基的满足定义，当且仅当模型的域中的每个对象都满足开放式句子Fx时，该句子是真的。关于如何实现这一点的详细信息，请参见塔斯基真实性定义的条目。）现在，我们可以将逻辑蕴含定义为在模型上保持真实性：如果在任何使前提为真的模型中（或者根据这些前提的任何解释使其为真的模型中），结论也为真，则该论证是有效的。

模型论的定义是迄今为止最成功的数学阐释哲学概念之一。它承诺通过观察所有模型上的真值来捕捉逻辑蕴含的必然性，并通过在模型之间变化非逻辑词汇的解释来捕捉逻辑蕴含的形式性：无论非逻辑词汇的含义如何，一个论证都是有效的。然而，模型只是集合，只是数学对象。它们如何解释所需的可能性或情境范围？约翰·埃切门迪（1990）提供了两种理解模型的视角。在代表性方法中，每个模型被视为代表一个可能世界。如果一个论证在模型上保持真值，那么我们可以确保它在可能世界上也保持真值，如果我们接受必然性与所有可能世界中的真值等同的观点，那么逻辑蕴含的必然真值保持就得到了解释。这种方法的问题在于它将逻辑蕴含与形而上学蕴含等同起来，并且对逻辑蕴含的形式性没有解释。在代表性方法中，没有基础来区分逻辑词汇和非逻辑词汇，并且没有解释为什么非逻辑词汇的解释是最大程度的多样化。模型的第二种视角是解释性方法，每个模型从实际世界为非逻辑词汇分配扩展：模型之间的变化不是所描绘的世界，而是术语的含义。在这种方法中，令人担忧的是无法捕捉必然性。例如，在通常将词汇划分为逻辑和非逻辑的情况下，认同被认为是逻辑术语，并且可以用来形成关于域的基数的陈述（例如，“至少有两个东西”），这些陈述在每次重新解释下都是真的，但可能并非必然真的。 在这种方法中，没有依据来考虑具有不同于实际存在的宇域的模型，并且具体而言，对于模型理论使用不同大小的宇域没有解释。正如在这里所描述的，每种方法在我们对于逻辑蕴含的必要性和形式性的分析方面都存在缺陷。解释性方法仅仅关注实际世界，未能解释必然性，而表征性方法则未能解释形式性（有关详细信息，请参见Etchemendy 1990年，Sher 1996年和Shapiro 1998年，以及有关改进的内容，请参见Etchemendy 2008年）。对于Etchemendy的一个可能的回应是将表征性和解释性的观点结合起来，将每个模型视为在对非逻辑词汇重新解释的情况下代表一个可能的世界（Shapiro 1998年，另请参见Sher 1996年和Hanson 1997年的其他回应）。

逻辑蕴含的模型论定义提出了一个主要挑战，即区分逻辑词汇和非逻辑词汇。逻辑词汇通过递归子句（如上述的合取和全称量词）在所有模型中被定义，并且从这个意义上说，它的意义是固定的。逻辑词汇的选择决定了在评估有效性时考虑的模型类别，从而确定了逻辑有效论证的类别。现在，虽然每种形式语言通常都是通过选择逻辑词汇来定义的，但人们可以要求对逻辑词汇进行更有原则性的刻画。塔斯基在他1936年的著作中没有给出一个原则性的区分问题的答案，只是提出了一种相对主义立场的思路，即不同的逻辑词汇选择可能是可接受的。其他人提出了逻辑性的标准，要求逻辑常量在形式上适当、普遍或主题中立（有关参考和详细信息，请参见逻辑常量条目）。请注意，选择逻辑词汇是对要使用的模型类别设置约束的特例。有人认为，关注逻辑词汇的标准忽视了这一点，更一般地说，问题是应该采用哪些语义约束，限制语言的可接受模型（Sagi 2014a，Zinke 2017）。

模型论解释面临的另一个挑战是由于其集合论基础的限制。回想一下，模型是集合。担心是，模型上的真实保持可能不能保证必要的真实保持 - 而且，甚至可能不能保证材料真实保持（在实际世界中的真实保持）。原因是每个模型域都是一个集合，但实际世界可能包含所有集合，并且作为一个包含所有集合的集合（构成一个适当的类），实际世界不被任何模型所解释（参见 Shapiro 1987）。

处理这个担忧的一种方法是使用外部手段，例如证明论，来支持模型论定义。这是由 Georg Kreisel 在他的“挤压论证”中所做的，我们在第 3.3 节中介绍。 Kreisel 的论证关键取决于所讨论的语言具有一个完备的证明系统。另一个选择是使用集合论的反射原理。一般来说，反射原理陈述了无论集合宇宙中的什么是真实的，在其初始段中已经是真实的（始终是一个集合）。如果接受反射原理，那么至少就相关语言而言，可以认为一个论证是有效的当且仅当没有反例集合模型（参见 Kreisel 1967，Shapiro 1987，Kennedy＆Väänänen 2017）。

最后，以模型中真理的角度解释逻辑蕴含通常被“现实主义者”所青睐，他们认为句子的真理与所能知道的内容无关。以模型中真理的角度解释逻辑蕴含与以真理的角度解释逻辑蕴含非常接近，而对于模型中真理的分析有时被视为对对应关系真理的解释，这是一种典型的现实主义观念。然而，一些人认为逻辑蕴含具有不可或缺的认识论成分，与我们基于前提来建立结论的方式有关。“反现实主义者”通常不愿采用真理（或至少是对应关系真理）作为解释概念，他们更倾向于以证明的方式来解释逻辑蕴含，下面我们将转向这个问题。

### 3.2 逻辑蕴含的证明论解释

在以证明为中心的逻辑蕴含方法中，一个论证的有效性取决于是否存在一个从前提到结论的证明。什么是证明是一个重要问题，但这个想法相当明确（至少如果你接触过某种证明系统的话）。证明由小步骤组成，这些小步骤是证明系统的原始推理原则。20 世纪出现了很多不同类型的证明系统，从所谓的希尔伯特证明，具有简单的规则和复杂的公理，到自然推理系统，几乎没有公理或非常多的规则。

证明为中心的方法强调逻辑蕴含的认识论方面。证明不仅仅证实了论证的有效性：它提供了我们建立这种有效性的步骤。因此，如果推理者对论证的前提有理由，并且他们通过一系列有效推理规则的应用推导出结论，他们因此获得了对结论的理由（参见普劳维茨2012年）。人们可以进一步订阅推理主义，即表达式的意义由其在推理中的角色决定的观点。这个想法是，我们对语言表达的使用受到规则的调节，掌握规则足以理解表达。这给我们对表达式的语义值可能性提出了初步的限制：它们不能做出任何规则未能解释的区别。然后，人们可以进一步拒绝任何超越规则的意义形式，采用后期维特根斯坦的口号“意义即使用”。这个观点受到关于意义的反实在论者的青睐，因为在这个观点中，意义完全由可知的内容解释。

在以证明为中心的方法中，逻辑蕴含的必要条件获得了一种新的解释。这个条件可以重新表述为：在一个有效的论证中，结论的真实性是由思维的必然性（Prawitz 2005）从前提的真实性中得出的。让我们解析这个表述。真实性是以建设性的方式理解的：句子之所以为真，是因为它们有潜在的证据支持，而真实句子所描述的事实因此被构建为潜在证据的术语。 （请注意，可以完全不提及真实性，而是谈论句子的可断言性或接受性。）现在，论证的思维必然性是通过所涉及术语的含义来解释的，这迫使我们在前提为真的情况下接受结论的真实性。表达式的含义又是通过规则来理解的：通常的真实条件变成了包含表达式的公式的证明条件。

因此，人们可以为一种语言提供证明论义的语义（Schroeder-Heister 1991）。在介绍他的自然推理系统时，Gentzen 指出，逻辑表达式的引入规则代表了它们的“定义”，而消除规则是这些定义的结果（Gentzen 1933）。例如，合取的引入规则规定了可以从两个合取项 A 和 B 推导出合取 A&B，这个规则捕捉了这个联结词的含义。相反，合取的消除规则表明，可以从 A&B 推导出 A 和 B。全称量词的规则告诉我们，从全称量化的主张∀xFx 我们可以推导出任何实例 Fa，并且我们可以从实例 Fa 推导出∀xFx，前提是没有涉及名字 a 的其他假设。在满足一定要求的情况下，可以证明消除规则由引入规则验证。

以证明为中心的方法面临的主要挑战之一是区分真正决定意义的规则和不决定意义的规则。对于某些连词的规则，如果添加到系统中，将导致平凡性。Prior（1960）提出了连词“TONK”的以下规则。其引入规则表明从 A 可以推导出 ATONKB，其消除规则表明从 ATONKB 可以推导出 B。引入这些规则后，只要至少有一个命题是可证明的，系统就变得平凡，因为从任何假设 A 都可以推导出任何结论 B。必须对推理规则施加一些限制，随后的大部分文献都关注这些限制（Belnap 1962，Dummett 1991，Prawitz 1974）。

为了使证明和有效性的概念更加系统化，Prawitz 引入了规范证明的概念。一个句子可以通过多种不同的方式证明，但是直接的或规范的证明构成了其意义。规范证明是最后一步是引入规则的证明，其直接子证明是规范的（除非它们具有自由变量或未解除的假设-有关详细信息，请参见 Prawitz 2005）。规范证明被认为是直接证明所证明的句子的直接证据，因为它通过构成其连词意义的规则来建立句子的真实性。有关规范证明以及其他证明如何归约为规范证明的方法，请参见有关证明论语义学的条目。

我们已经指出了必要条件在以证明为中心的方法中如何解释。形式性条件也可以解释。请注意，在当前的观点下，词汇被分为逻辑和非逻辑两部分。这种分割可以用来定义一个论证的替换。一个论证的替换是通过以统一的方式用相同语法类别的术语替换非逻辑术语而得到的论证。一个符合形式性条件的有效性定义将要求一个论证只有在它的所有替换都是有效的情况下才是有效的，并且在当前的背景下，这要求所有替换都有证明。这个条件在只为逻辑词汇给出规则的任何证明系统中都得到满足。当然，在以证明为中心的方法中，也存在一个区分逻辑词汇的问题（参见逻辑常量的条目）。

最后，值得注意的是，对于经典逻辑以及各种非经典逻辑，都可以给出一个证明论义语义。然而，由于以证明为中心的方法基于认识论反实在主义的态度，其支持者通常倾向于直觉主义逻辑（参见 Dummett 1991）。

有关以证明为中心的观点和证明论义语义的更多信息，请参见有关证明论义语义的条目。

### 3.3 模型与证明之间的关系

证明论和模型论的观点被认为是逻辑蕴含的竞争解释。然而，人们也可以将“逻辑蕴含”和“有效性”视为表达群集概念：“许多不同但密切相关的概念都被称为这些名字。它们涉及到模态性、意义、有效性、合理性和形式”（Shapiro 2014）。人们还可以注意到，模型论和证明论的观点之间的区分是现代的，只有在元数学研究工具得到发展之后才成为可能。例如，弗雷格的概念符号在这些工具发展之前就已经被制定为一个公理证明系统，但是连接词的意义是通过真值条件给出的。

一旦存在逻辑蕴含关系的两种不同分析，就可以探讨可能的相互作用，我们将在下面进行讨论。人们还可以问这种关系在证明论或模型论分析之外具有哪些一般特征。回答这个问题的一种方式可以追溯到塔斯基，他引入了蕴含操作的概念。对于我们的目的，我们只注意一些这种操作的特征。设 Cn(X)为 X 的蕴含结果。（可以将操作符 Cn 看作是源自先前的蕴含关系，当将 X 作为“输入（或前提）”集合时，告诉你从 X 中可以得出什么。但也可以反过来看这个“过程”，一个关键的洞察是蕴含关系和相应的操作实际上是可以互相定义的。有关详细信息，请参阅关于代数命题逻辑的条目。）对于蕴含关系可能施加的一些最小条件，有以下两个条件（来自塔斯基）：

1. X 是 Cn(X)的子集。
2. Cn(Cn(X))=Cn(X)。

如果你将 X 看作一组命题的集合，那么第一个条件告诉你，一组命题的蕴含包括这些命题本身。第二个条件要求 X 的蕴含就是 X 的蕴含的蕴含。这两个条件可以从模型论和证明论方法的反思中得到动机；还有其他类似的条件。（有关一般讨论，请参见关于代数命题逻辑的条目。）但是，就像许多基础问题一样（例如，“一般情况下，蕴含关系的基本特征是什么？”），即使是这些最小条件在哲学逻辑和逻辑哲学中也存在争议。例如，一些人可能认为条件（2）是不可接受的，因为出于模糊性（或其他原因），重要的自然语言（无论是否形式化）的蕴含关系通常不以（2）所反映的方式具有传递性。（有关反对传递性蕴含的哲学动机，请参见 Tennant 1994，Cobreros 等人 2012 和 Ripley 2013。）但是我们将这些问题留给更高级的讨论。

虽然现实主义者和反现实主义者之间的哲学分歧仍然巨大，但以证明为中心和以模型为中心的蕴含解释在许多情况下（至少在范围上）已经统一起来。不同证明系统（或者从另一个角度来看，不同的模型论语义）的伟大的完备性和完全性定理表明，在重要意义上，这两种方法通常在范围上一致。如果一个证明系统相对于模型论语义是完全的，那么每个模型论上有效的论证在该系统中都有证明。虽然对于任何值得一提的证明系统来说，正确性是一个主要条件，但并不总是可以期望完备性。诚然，这些定义对模型论的观点有偏见：模型论语义将“正确”和“完全”作为标准。撇开术语问题不谈，如果一个证明系统相对于模型论语义既是正确的又是完全的（如一阶谓词逻辑的情况），那么证明系统和模型论语义在哪些论证是有效的上是一致的。

完备性结果也可以支持模型论解释的充分性，就像 Kreisel 的“挤压论证”一样。我们已经注意到模型论解释的一个弱点：所有的模型都是集合，所以可能没有任何模型能够代表实际世界。Kreisel 已经证明，如果我们有一个“直观上正确”的证明系统，并且该系统相对于模型论语义是完备的，那么我们不会错过任何模型：每个直观上有效的论证都会有一个反例模型。设 L 为一个一阶语言。设 Val 表示 L 中直观上有效的论证的集合。Kreisel 认为直观有效性是在所有结构（无论是集合还是其他）上保持真实性。他的分析优先考虑了逻辑蕴含的模态分析，但请注意我们要解决的弱点是考虑集合论结构可能不足够。设 V 表示 L 中模型论上有效的论证的集合：即在模型上保持真实性的论证。设 D 为某个被接受的一阶逻辑证明系统的演绎有效的论证的集合。现在，任何这样的证明系统都是“直观上正确”的，意味着系统中通过演绎有效的论证是直观上有效的。这给我们带来了 D⊆Val。显然，根据我们给出的定义，Val⊆V，因为一个在所有结构上保持真实性的论证也会在集合结构上保持真实性。

根据一阶逻辑的完备性结果，我们有：V⊆D。将这三个包含关系放在一起（“挤压”），我们得到这三个集合必须相等，特别地：V=Val。通过这种方式，我们证明了如果存在某个结构是一阶论证的反例，那么存在一个集合论的反例。

证明论和模型论观点之间相互作用的另一个领域与逻辑词汇的定义有关。例如，人们可以持有一种“适度”的推理主义观点，通过语义（即真值条件）来定义逻辑连接词的含义，但要求连接词的含义由推理规则确定。卡尔纳普（Carnap）已经著名地证明了经典推理规则允许逻辑表达式的非标准解释（Carnap 1943）。该领域的许多最近研究致力于卡尔纳普的范畴性问题的确切性质和程度（Raatikainen 2008，Murzi 和 Hjortland 2009，Woods 2012，Garson 2013，Peregrin 2014，Bonnay 和 Westerståhl 2016。另请参阅形式逻辑中关于句子连接词的条目）。

最后，我们应该注意，虽然模型论和证明论是解释逻辑蕴含的最重要的竞争者，但还有其他形式语义学的框架，如代数语义学、博弈论语义学和动态语义学（参见 Wansig 2000）。

## 4. 前提和结论

甚至在亚里士多德时代，对于“逻辑蕴含”的“形式”也存在异议。特别是，在“联系”蕴含关系所需的前提或结论的数量上，尚无定论。

在亚里士多德的三段论中，三段论涉及两个或多个前提和一个结论。事实上，亚里士多德关注的是恰好有两个前提（主前提和次前提）的论证，但他的定义并不禁止有三个或更多前提的论证。当然，这样的论证应该是允许的：例如，如果我们有一个从前提 A 和 B 到结论 C 的三段论，又有另一个从前提 C 和 D 到结论 E 的三段论，那么从前提 A、B 和 D 到结论 E 的更长的论证在某种意义上是一个好的论证。它是通过将这两个较小的论证链接在一起得到的。如果这两个原始论证在形式上是有效的，那么从三个前提到结论的更长论证也是有效的。另一方面，在对亚里士多德的三段论定义的普遍解读中，单前提论证被排除在外，但这似乎是武断的，因为即使是亚里士多德自己的“转换”推理也被排除在外。

基于这些原因，许多人认为逻辑蕴含的关系是将一个任意（可能是无限）的前提集合与一个单一的结论配对。这种解释的优点是可以包括没有前提的特殊情况。从没有任何前提到一个结论的论证是那些仅凭逻辑就能得出结论为真的论证。这样的“结论”是逻辑真理（有时是重言式），或者在以证明为中心的方法中，是定理。

或许有理由允许逻辑蕴含的概念应用得更广泛一些。在Gentzen的经典逻辑证明理论中，蕴含的概念被定义为多个前提和多个结论之间的关系。从前提集合X到结论集合Y的论证是有效的，如果X中的每个成员的真值保证（在相关意义上）Y中的某个成员的真值。毫无疑问，这在形式上是明晰的，但是多个前提-多个结论的逻辑蕴含的哲学适用性仍然是一个未决的哲学问题。特别是那些将逻辑蕴含定义为证明的反实在主义者（如迈克尔·达梅特）拒绝了多个结论分析的逻辑蕴含。对于一个反实在主义者来说，良好的推理是通过从前提到结论传递保证的方式来描述的，因此，似乎不可能通过多个结论的分析来理解逻辑蕴含。在从A到B、C的多个结论的论证中，我们对A的保证并不一定传递到B或C：我们被保证得出的唯一结论是B或C的析取，因此，如果我们希望使用逻辑蕴含作为定义逻辑词汇的工具，就需要理解一些逻辑词汇（在这种情况下是析取）。在单个结论的情况下，不会出现这样的问题。（然而，对于反实在主义者的多个结论蕴含的辩护，请参见Restall（2005）；对于在非经典解决方案中为了辩护某些次经典的多个结论逻辑，请参见Beall（2011）。）

另一种扩展这个概念的方式（或者一些人试图扩展它的方式）涉及到对子结构逻辑的最新研究。这里的建议是，我们可以考虑不使用一些规定论证的前提（或结论）如何组合的标准规则。结构规则涉及到论证的形状或结构，即前提和结论如何被收集在一起的方式，而不是这些陈述如何构建的方式。例如，弱化的结构规则规定，如果从一些前提集合 X 到一个结论 C 的论证是有效的，那么从 X 和另一个前提 A 到结论 C 的论证也是有效的。这个规则对一些人来说似乎是有问题的（主要是因为额外的前提 A 在推导结论 C 时不一定被使用，因此 C 并不以适当的方式从前提 X，A 中得出）。相关逻辑被设计成尊重这种思想，并且不使用弱化的结构规则。（有关证明论的图景，请参见 Negri 和 von Plato（2001）。）

其他结构规则也受到质疑。子结构逻辑的另一个可能应用是在分析诸如 Curry 悖论之类的悖论时发现的。Curry 悖论和其他类似悖论的推理中的一个关键步骤似乎需要将一个假设的两个应用减少为一个（然后被解除）。根据一些人的观点，这一步骤是有问题的，因此他们必须区分从 A 到 B 的论证和从 A，A 到 B 的论证。收缩规则被拒绝。

在其他一些例子中，前提的使用顺序很重要，从 A、B 到 C 的论证与从 B、A 到 C 的论证是有区别的。（有关子结构逻辑的更多细节，请参阅相关条目。）毫无疑问，子结构逻辑的形式系统是优雅而有趣的，但是对于子结构逻辑的哲学重要性和适用性的论证尚未结束。

## 5. 一个还是多个？

我们只触及了逻辑蕴含概念的一些核心方面，将更多的问题、辩论和细节留给特定解释（这些解释在本百科全书中得到了很好的代表）。但是，即使是对相关链接部分的快速浏览也可以证明，存在着相当多不同的逻辑理论，不同的关于什么（逻辑上）蕴含什么的解释。这一观察引发了一个问题，我们将在此作出结论：是否存在一个逻辑蕴含概念是所有这些理论的目标，还是存在多个概念？

我们都同意，有许多不同的形式技术用于研究逻辑蕴含，并且有很多不同的形式系统，每个系统都提出了不同的逻辑蕴含关系。但是对于一个特定的论证，是否它是否具有演绎有效性是一个全有或全无的问题呢？正统派，即逻辑唯一主义，回答是肯定的。存在一种演绎蕴含关系，不同的形式系统在模拟这种关系方面做得好或不好。（例如，参见Priest 1999年对唯一主义的辩护。）逻辑语境主义者或相对主义者认为，一个论证的有效性取决于评估的主题、参考框架或其他上下文。（例如，在经典数学教材中使用排中律可能是有效的，但在直觉主义数学教材中或在我们推理虚构或模糊问题的上下文中可能无效。）另一方面，逻辑多元主义者认为，在同一上下文中的同一论证中，有时对于其有效性应该说不同的事情。例如，也许人们应该说，从矛盾的前提到无关的结论的论证是有效的，因为从其形式上来说，前提为真而结论为假的情况并不存在（因此在一个明确的意义上是有效的），但是另一方面，论证的形式并不能确保前提的真实性导致结论的真实性。唯一主义者或语境主义者认为，在一个论证的情况下，必须找到一个单一的答案来回答其有效性的问题。而多元主义者则否认这一点。多元主义者认为，逻辑蕴含本身的概念可以以多种方式更加精确，就像“好的论证”的最初想法分为演绎有效性和归纳有效性一样（参见Beall和Restall 2000年对多元主义的辩护）。


## Bibliography

### History of Logical Consequence

#### Expositions

* Coffa, J. Alberto, 1993, *The Semantic Tradition from Kant to Carnap*, Linda Wessels (ed.), Cambridge: Cambridge University Press.  
  An historical account of the Kantian origins of the rise of analytic philosophy and its development from Bolzano to Carnap.
* Kneale, W. and Kneale, M., 1962, *The Development of Logic*, Oxford: Oxford University Press; reprinted, 1984.  
  The classic text on the history of logic until the middle 20th Century.

#### Source Material

* Ewald, William, 1996, *From Kant to Hilbert: a source book in the foundations of mathematics* (Volumes I and II), Oxford: Oxford University Press.  
  Reprints and translations of important Texts, including Bolzano on logical consequence.
* van Heijenoort, Jean, 1967, *From Frege to Gödel: a sourcebook in mathematical logic 1879–1931*, Cambridge, MA: Harvard University Press.  
  Reprints and translations of central texts in the development of logic.
* Husserl, Edmund, 1900 [2001], *Logical Investigations* (Volumes 1 and 2), J. N. Findlay (trans.), Dermot Moran (intro.), London: Routledge.
* Mill, John Stuart, 1872 [1973], *A System of Logic* (8th edition), in J. M. Robson (ed.), *Collected works of John Stuart Mill* (Volumes 7 & 8), Toronto: University of Toronto Press.

### 20th Century Developments

* Anderson, A.R., and Belnap, N.D., 1975, *Entailment: The Logic of Relevance and Necessity* (Volume I), Princeton: Princeton University Press.
* Anderson, A.R., Belnap, N.D. Jr., and Dunn, J.M., 1992, *Entailment* (Volume II), Princeton: Princeton University Press.  
  This book and the previous one summarise the work in relevant logic in the Anderson–Belnap tradition. Some chapters in these books have other authors, such as Robert K. Meyer and Alasdair Urquhart.
* Dummett, Michael, 1991 *The Logical Basis of Metaphysics*, Cambridge, MA: Harvard University Press.  
  Groundbreaking use of natural deduction proof to provide an anti-realist account of logical consequence as the central plank of a theory of meaning.
* Gentzen, Gerhard, 1969, *The Collected Papers of Gerhard Gentzen*, M. E. Szabo (ed.), Amsterdam: North Holland.
* Mancosu, Paolo, 1998, *From Brouwer to Hilbert*, Oxford: Oxford University Press.  
  Reprints and translations of source material concerning the constructivist debates in the foundations of mathematics in the 1920s.
* Negri, Sara and von Plato, Jan, 2001, *Structural Proof Theory*, Cambridge: Cambridge University Press.  
  A very accessible exposition of so-called structural proof theory (which involves a rejection of some of the standard structural rules at the heart of proof theory for classical logic).
* Shoesmith D. J. and Smiley, T. J., 1978, *Multiple-Conclusion Logic*, Cambridge: Cambridge University Press.  
  The first full-scale exposition and defence of the notion that logical consequence relates multiple premises and multiple conclusions.
* Restall, Greg, 2000, *An Introduction to Substructural Logics*, Lond: Routledge. ([Précis available online](http://consequently.org/isl/))  
  An introduction to the field of substructural logics.
* Tarski, Alfred, 1935, “The Concept of Truth in Formalized Languages,“ J.H. Woodger (trans.), in Tarski 1983, pp. 152–278.
* –––, 1936, “On The Concept of Logical Consequence,“ J.H. Woodger (trans.), in Tarski 1983, pp. 409–420.
* –––, 1983, *Logic, Semantics, Metamathematics: papers from 1923 to 1938*, second edition, J. H. Woodger (trans.), J. Corcoran (ed.), Indianapolis, IN: Hacket.

### Philosophy of Logical Consequence

There are many (many) other works on this topic, but the bibliographies of the following will serve as a suitable resource for exploring the field.

* Avron, Arnon, 1994, “What is a Logical System?” in *What is a Logical System?*, D.M. Gabbay (ed.), Oxford: Clarendon Press (Studies in Logic and Computation: Volume 4), pp. 217–238.
* Beall, Jc, 2011, “Multiple-conclusion LP and default classicality,” *Review of Symbolic Logic*, 4(2): 326–336.
* Beall, Jc and Restall, Greg, 2000, “Logical Pluralism,” *Australasian Journal of Philosophy*, 78: 457–493.
* Belnap, Nuel D., 1962, “Tonk, Plonk and Plink,” *Analysis*, 22 (6): 130–134.
* Bonnay, Denis and Westerståhl, Dag, 2012, “Consequence Mining: Constants Versus Consequence Relations,” *Journal of Philosophical Logic*, 41(4): 671–709.
* –––, 2016, “ Compositionality Solves Carnap’s Problem,” *Erkenntnis*, 81 (4): 721–739.
* Brandom, Robert, 1994, *Making It Explicit*, Cambridge, MA: Harvard University Press. [See especially Chapters 5 and 6 on the account of logical consequence according to which truth is not a fundamental explanatory notion.]
* Caret, Colin R. and Hjortland, Ole T. (eds.), 2015, *Foundations of Logical Consequence*, Oxford: Oxford University Press.
* Carnap, Rudolf, 1943, *Formalization of Logic*, Cambridge, MA: Harvard University Press.
* Cobreros, Pablo; Égré, Paul; Ripley, David and van Rooij, Robert, 2012, “Tolerance and mixed consequence in the s’valuational setting,” *Studia Logica*, 100(4): 855–877.
* Etchemendy, John, 1990, *The Concept of Logical Consequence*, Cambridge, MA: Harvard University Press.
* –––, 2008, “Reflections on Consequence”, in D. Patterson (ed.), 2008.
* Garson, James W., 2013, *What Logics Mean: From Proof Theory to Model-Theoretic Semantics*, Cambridge: Cambridge University Press.
* Gomez-Torrente, Mario, 1996, “Tarski on Logical Consequence,” *Notre Dame Journal of Formal Logic*, 37: 125–151.
* Hanson, William H., 1997, “The Concept of Logical Consequence,” *The Philosophical Review*, 106 (3): 365–409.
* Kennedy, Juliette and Väänänen, Jouko, 2017, “Squeezing arguments and strong logics,”, in Hannes Leitgeb, Ilkka Niiniluoto, Elliot Sober and P. Seppälä (eds.), *Logic, Methodology, and the Philosophy of Science: Proceedings of the Fifteenth International Congress* (CLMPS 2015), London: College Publications.
* Kreisel, Georg, 1967, “Informal Rigour and Completeness Proofs,” in I. Lakatos (ed.), *Problems in the Philosophy of Mathematics*, (Studies in Logic and the Foundations of Mathematics: Volume 47), Amsterdam: North Holland, pp. 138–186.
* McGee, Vann, 1992, “Two Problems with Tarski’s Theory of Consequence,” *Proceedings of the Aristotelian Society*, 92: 273–292.
* Murzi, Julien and Carrara, Massimiliano, 2014, “More Reflections on Consequence,” *Logique et Analyse*, 57 (227): 223–258.
* Murzi, Julien and Hjortland, Ole T., 2009, “Inferentialism and the Categoricity Problem: Reply to Raatikainen,“ *Analysis*, 69 (3): 480–488.
* Patterson, Douglas, (ed.), 2008, *New Essays on Tarski and Philosophy*, Oxford: Oxford University Press.
* Peregrin, Jaroslav, 2014, *Inferentialism: Why Rules Matter*, UK: Palgrave Macmillan.
* Prawitz, Dag, 1974, “On the Idea of a General Proof Theory,” *Synthese*, 27 (1–2): 63–77.
* –––, 1985, “Remarks on some approaches to the concept of logical consequence,” *Synthese*, 62: 153–171.
* –––, 2005, “Logical Consequence from a Constructivist Point of View,” in S. Shapiro (ed.), *The Oxford Handbook of the Philosophy of Mathematics and Logic*, Oxford: Oxford University Press, pp. 671–695.
* –––, 2012, “The Epistemic Significance of Valid Inference,” *Synthese*, 187: 887–898.
* Priest, Graham, 1999, “Validity,” *European Review of Philosophy*, 4: 183–205 (Special Issue: *The Nature of Logic*, Achillé C. Varzi (ed.), Stanford: CSLI Publications.
* Prior, Arthur N., 1960, “The Runabout Inference-Ticket,” *Analysis*, 21 (2): 38–39.
* Putnam, Hilary, 1971, *Philosophy of Logic*, New York: Harper & Row.
* Quine, W.V.O., 1986 (2nd Ed.), *Philosophy of Logic*, Cambridge, MA: Harvard University Press.
* Raatikainen, Panu, 2008, “On Rules of Inference and the Meanings of Logical Constants,” *Analysis*, 68 (300): 282–287.
* Ray, Greg, 1996, “Logical Consequence: A Defense of Tarski,” *The Journal of Philosophical Logic*, 25 (6): 617–677.
* Read, Stephen, 1994, “Formal and Material Consequence,” *The Journal of Philosophical Logic*, 23 (3): 247–265.
* Restall, Greg, 2005, “Multiple Conclusions,” in P. Hájek, L. Valdés-Villanueva, and D. Westerståhl (eds.), *Logic, Methodology and Philosophy of Science: Proceedings of the Twelfth International Congress*, London: KCL Publications, pp. 189–205. [[Preprint available online in PDF](http://consequently.org/papers/multipleconclusions.pdf)].
* Ripley, David, 2013, “Paradoxes and failures of cut,” *Australasian Journal of Philosophy*, 91(1): 139–164. doi: 10.1080/00048402.2011.630010.
* Sagi, Gil, 2014a, “Formality in Logic: From Logical Terms to Semantic Constraints,” *Logique et Analyse*, 57 (227): 259–276.
* –––, 2014b, “Models and Logical Consequence,” *Journal of Philosophical Logic*, 43 (5): 943–964.
* Shapiro, Stewart, 1987, “Principles of Reflection and Second Order Logic,” *Journal of Philosophical Logic* 16 (3): 309–333.
* –––, 1998, “Logical Consequence: Models and Modality,” in M. Schirn (ed.), *The Philosophy of Mathematics Today*, Oxford: Oxford University Press, pp. 131–156.
* –––, 2005, “Logical Consequence, Proof Theory, and Model Theory,” in S. Shapiro (ed.), *The Oxford Handbook of the Philosophy of Mathematics and Logic*, Oxford: Oxford University Press, pp. 651–670.
* –––, 2014, *Varieties of Logic*, Oxford: Oxford University Press.
* Sher, Gila, 1991, *The Bounds of Logic*, Cambridge, MA: MIT Press.
* –––, 1996, “Did Tarski Commit Tarski’s Fallacy?,” *Journal of Symbolic Logic*, 61 (2): 653–686.
* Schroeder-Heister, Peter, 1991, “Uniform Proof-Theoretic Semantics for Logical Constants (Abstract),” *Journal of Symbolic Logic*, 56: 1142.
* Tarski, Alfred, 1986, “What are Logical Notions,” *History and Philosophy of Logic*, 7: 143–154.
* Tennant, Neil, 1994, “The Transmission of Truth and the Transitivity of Deduction,” in *What is a Logical System?* (Studies in Logic and Computation: Volume 4), D.M. Gabbay (ed.), Oxford: Clarendon Press, pp. 161–177.
* Wansing, Heinrich, 2000, “The Idea of a Proof-Theoretic Semantics and the Meaning of the Logical Operations,” *Studia Logica*, 64 (1): 3–20.
* Westerståhl, Dag, 2012, “From constants to consequence, and back,” *Synthese*, 187 (3): 957–971.
* Woods, Jack, 2012, “Failures of Categoricity and Compositionality for Intuitionistic Disjunction,” *Thought: A Journal of Philosophy*, 1 (4): 281–291.
* Zinke, Alexandra, 2018, *The Metaphysics of Logical Consequence* (Studies in Theoretical Philosophy: Volume 6), Frankfurt am Main: Vittorio Klostermann.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logical-consequence). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logical-consequence/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logical-consequence&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](http://philpapers.org/sep/logical-consequence/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

* MacFarlane, John, 2000, [*What Does it Mean to Say that Logic is Formal?*](http://johnmacfarlane.net/dissertation.pdf), Ph. D. Dissertation, Philosophy Department, University of Pittsburgh.

## Related Entries

[Aristotle, General Topics: logic](https://plato.stanford.edu/entries/aristotle-logic/) | [Bolzano, Bernard](https://plato.stanford.edu/entries/bolzano/) | [Carnap, Rudolf](https://plato.stanford.edu/entries/carnap/) | [Frege, Gottlob: theorem and foundations for arithmetic](https://plato.stanford.edu/entries/frege-theorem/) | [logic, normative status of](https://plato.stanford.edu/entries/logic-normative/) | [logic: algebraic propositional](https://plato.stanford.edu/entries/logic-algebraic-propositional/) | [logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [logic: inductive](https://plato.stanford.edu/entries/logic-inductive/) | [logic: intuitionistic](https://plato.stanford.edu/entries/logic-intuitionistic/) | [logic: non-monotonic](https://plato.stanford.edu/entries/logic-nonmonotonic/) | [logic: substructural](https://plato.stanford.edu/entries/logic-substructural/) | [logical constants](https://plato.stanford.edu/entries/logical-constants/) | [logical form](https://plato.stanford.edu/entries/logical-form/) | [logical pluralism](https://plato.stanford.edu/entries/logical-pluralism/) | [logical truth](https://plato.stanford.edu/entries/logical-truth/) | [model theory](https://plato.stanford.edu/entries/model-theory/) | [proof theory](https://plato.stanford.edu/entries/proof-theory/) | [Russell, Bertrand](https://plato.stanford.edu/entries/russell/) | [schema](https://plato.stanford.edu/entries/schema/) | [semantics: proof-theoretic](https://plato.stanford.edu/entries/proof-theoretic-semantics/)

[Copyright © 2019](https://plato.stanford.edu/info.html#c) by  
[Jc Beall](http://entailments.net/)  
[Greg Restall](http://consequently.org/)  
[Gil Sagi](http://gilisagi.wixsite.com/gil-sagi) <[*gilisagi@gmail.com*](mailto:gilisagi%40gmail%2ecom)>
