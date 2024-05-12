# 直觉主义认识论 intuitionistic (Peter Dybjer and Erik Palmgren)

*首次发表于 2016 年 2 月 12 日星期五；实质性修订于 2020 年 6 月 8 日星期一*

直觉主义类型论（也称为建构主义类型论或马丁-勒夫类型论）是一种形式逻辑系统和建构数学的哲学基础。它是一个全面的系统，旨在为建构数学发挥与泽尔梅洛-弗兰克尔集合论对经典数学的类似作用。它基于命题即类型的原则，并阐明了直觉主义逻辑的布劳尔-海廷-科尔莫哥洛夫解释。它将这种解释扩展到直觉主义类型论的更一般设置中，从而不仅提供了建构证明的一般概念，还提供了建构数学对象的一般概念。其主要思想是，数学概念（如元素、集合和函数）是通过编程中的概念（如数据结构、数据类型和程序）来解释的。本文描述了直觉主义类型论的形式系统及其语义基础。

在这个条目中，我们首先概述了直觉主义类型论的最重要方面——一种“扩展摘要”。它适用于那些对该理论有一定了解的读者。另一方面，第 2 节适用于对直觉主义类型论不熟悉但熟悉传统逻辑（包括命题和谓词逻辑、算术和集合论）的读者。在这里，我们非正式地介绍了几个区分直觉主义类型论与这些传统理论的方面。在第 3 节中，我们介绍了该理论的一个基本版本，接近于马丁-勒夫于 1972 年首次发表的版本。对于被第 2 节的非正式性所吸引的读者，现在可以详细了解该理论的构建过程。然后，在第 4 节中，我们介绍了基本理论的一些重要扩展。特别强调归纳（和归纳递归）定义的核心作用。第 5 节介绍了马丁-勒夫所发展的含义理论，包括底层的哲学思想。虽然第 5 节涉及哲学和基础，但第 6 节概述了该理论的数学模型。最后，在第 7 节中，我们描述了第 3 节和第 4 节中所描述的核心马丁-勒夫“内涵”理论的几个重要变体。

---

## 1. 概述

我们首先从鸟瞰一些直觉主义类型论的重要方面开始。对该理论不熟悉的读者可能在第一次阅读时选择跳过此部分。

直觉主义类型论的起源是布劳尔的直觉主义和罗素的类型论。与丘奇的经典简单类型论一样，它基于带有类型的λ演算，但不同的是它基于命题即类型原理，由 Curry（1958）发现了命题逻辑，并由 Howard（1980）和 de Bruijn（1970）将其扩展到谓词逻辑。通过引入索引类型族（依赖类型）来表示谓词逻辑的谓词，使得这种扩展成为可能。通过这种方式，所有逻辑连接词和量词都可以通过类型构造器来解释。在直觉主义类型论中，还添加了其他类型，例如自然数类型、小类型（宇宙）类型和良基树类型。由此产生的理论包含直觉主义数论（Heyting 算术）和更多内容。

该理论以自然推理形式化，其中每个类型构造器的规则被分类为形成、引入、消除和等式规则。这些规则展示了引入规则和消除规则之间的某些对称性，遵循 Gentzen 和 Prawitz 对自然推理的处理方式，如在有关证明论语义的条目中所解释的。

当将命题的元素解释为类型时，它们被称为证明对象。当将证明对象添加到自然推理演算中时，它变成了具有依赖类型的带类型的λ演算，扩展了丘奇最初的带类型的λ演算。等式规则是该演算的术语的计算规则。在该理论中，每个可定义的函数都是总的和可计算的。因此，直觉主义类型论是一种带有非常规属性的带类型的函数式编程语言，所有程序都终止。

直觉主义类型论不仅是一个形式逻辑系统，还为直觉主义提供了一个全面的哲学框架。它是一种解释性语言，其中判断的证明和命题的证明之间的区别起着基本作用（Sundholm 2012）。该框架阐明了直觉主义逻辑的布劳尔-海廷-科尔莫哥洛夫解释，并将其扩展到更一般的直觉主义类型论设置中。通过这样做，它不仅提供了建构性证明的一般概念，还提供了建构性数学对象的一般概念。直觉主义类型论的判断的含义是通过计算类型和项的规范形式来解释的。这些非正式的、直观的含义解释是“预数学的”，应与在标准数学框架（如集合论）内开发的形式数学模型相对比。

这种含义理论还证明了各种归纳、递归和归纳递归定义的合理性。虽然可以证明一些证明论上强的概念，如某些大基数的类比，但该系统被认为是谓词性的。高阶逻辑、直觉主义集合论和拓扑学中的非谓词性定义不属于该理论的范畴。马尔科夫原理也不属于该理论，因此该理论与俄国建构主义不同。

一种用于谓词性建构性数学的替代形式逻辑系统是 Myhill 和 Aczel 的建构性泽尔梅洛-弗雷因克尔集合论（CZF）。该理论基于直觉主义一阶谓词逻辑，并削弱了一些经典泽尔梅洛-弗雷因克尔集合论的公理，在直觉主义类型论中有自然的解释。因此，马丁-勒夫的含义解释也间接地为 CZF 提供了基础。

直觉主义类型论的变体是几个广泛使用的证明助手的基础，包括 NuPRL，Coq 和 Agda。这些证明助手是计算机系统，已被用于形式化数学定理的大型和复杂证明，例如图论中的四色定理和有限群论中的 Feit-Thompson 定理。它们还被用于证明现实中的 C 编译器（Leroy 2009）和其他计算机软件的正确性。

从哲学和实践的角度来看，直觉主义类型论是一个基础性框架，其中建构性数学和计算机编程在深层次上是相同的。这一观点在（Gonthier 2008）的论文中得到了强调，他在该论文中描述了他对四色定理的证明：

> 对于这个证明成功的方法是将几乎每个数学概念转化为 Coq 系统中的数据结构或程序，从而将整个企业转化为程序验证的一部分。

## 2. 类型论中的命题

### 2.1 直觉主义类型论：一种新的逻辑观察方式？

直觉主义类型论通过引入显式证明对象，提供了一种分析逻辑的新方式。这为逻辑提供了直接的计算解释，因为证明对象有计算规则。就表达能力而言，直觉主义类型论可以被视为一阶逻辑的扩展，类似于高阶逻辑，但是是谓词的。

#### 2.1.1 类型论

罗素在发现朴素集合论中的悖论后发展了类型论。在他的分层类型论中，数学对象根据它们的类型进行分类：命题的类型、对象的类型、对象属性的类型等等。当丘奇基于他的带类型的λ演算开发了简单类型论时，他添加了一个规则，即理论中任意两个类型之间都存在函数类型。直觉主义类型论通过依赖类型进一步扩展了简单类型的λ演算，即通过索引类型的类型族。一个例子是由 -tuples 索引的类型族。

类型在编程中长期以来被广泛使用。早期的高级编程语言引入了整数和浮点数的类型。现代编程语言通常具有丰富的类型系统，其中包含许多用于形成新类型的构造。直觉主义类型论是一种功能性编程语言，其类型系统非常丰富，几乎可以将程序的任何可想象的属性表示为类型。因此，类型可以用作程序任务的规范。

#### 2.1.2 具有证明对象的直觉主义逻辑

布劳尔对逻辑的分析使他得出了一种直觉主义逻辑，该逻辑拒绝排中律和双重否定律。这些定律在直觉主义类型论中无效。因此，它不包含经典（皮亚诺）算术，只包含直觉主义（海廷）算术。（皮亚诺算术可以通过双重否定解释在海廷算术中进行解释，详见直觉主义逻辑词条。）

考虑一个直觉主义算术的定理，比如除法定理

这个定理的一个形式证明（通常意义上）是一个公式的序列（或树），其中最后一个（根）公式是定理，序列中的每个公式要么是公理（叶子），要么是应用推理规则到之前（更高级）公式的结果。

当直觉主义类型论中证明了除法定理时，我们不仅仅构建了一个通常意义上的形式证明，还构建了一个证明对象，即证明了该定理的真实性。我们写作

表示是除法定理的证明对象，即表示是代表除法定理的类型的元素。当命题被表示为类型时，量词被认同为依赖函数空间形式（或一般笛卡尔积） ，量词被认同为依赖对类型形式（或一般不相交和） ，合取被认同为笛卡尔积，等号关系=被认同为证明对象的等同性的类型形式，大于关系>被认同为证明对象的大于语句的类型形式。因此，使用“类型符号”，我们可以写作

表达证明对象“”是一个将两个数字和一个证明对象映射到一个四元组的函数，其中是商，是将除以得到的余数。第三个组件是一个证明对象，证明和第四个组件是一个证明对象，证明。

关键是，不仅是一个经典意义上的函数；它也是直觉主义意义上的函数，即一个程序，当给定输入时，计算输出。该程序是一个带有特殊常量的λ演算中的术语，即一个函数式编程语言中的程序。

#### 2.1.3 一阶谓词逻辑的扩展

直觉主义类型论可以被视为一阶逻辑的扩展，就像高阶逻辑是一阶逻辑的扩展一样。在高阶逻辑中，我们可以找到一些个例域，可以被解释为任意我们喜欢的集合。如果签名中有关系常量，这些常量可以被解释为解释个例域的集合之间的任意关系。除此之外，我们还可以对关系进行量化，以及对关系的关系进行量化等等。我们可以将高阶逻辑看作是一阶逻辑配备了一种引入新的量化域的方式：如果是量化域，则是由所有个例域之间的 n 元关系组成的新的量化域。高阶逻辑具有直观的集合论解释，其中被解释为幂集，其中是的解释，对于。这是 Ramsey、Church 和其他人引入的高阶逻辑或简单类型理论。

直觉主义类型论可以以类似的方式来看待，只是在这里引入量化域的可能性更丰富，可以使用来从旧的量化域构造新的量化域（第 3.1 节；Martin-Löf 1998 [1972]）。直觉主义类型论也有一个直观的集合论解释，其中，等被解释为相应的集合论构造；见下文。我们可以像在 HOL 中一样向直觉主义类型论中添加未指定的个例域。这些被解释为集合，就像在 HOL 中一样。现在我们展示了与 HOL 的一个不同之处：在直觉主义类型论中，我们可以引入未指定的族符号。我们可以将解释为一个关于个例域的类型族。

如果被解释为，可以被解释为由索引的任意集合族。作为一个非数学的例子，我们可以将个例域中的成员之间的二元关系“爱”表示如下。引入关于个例域 People 的二元族 Loves

解释可以是任何一组集合的家族（, ）。这如何涵盖标准的关系概念？假设我们有一个二元关系在熟悉的集合论意义上的。我们可以按照以下方式构建一个对应于此关系的二元家族

现在很明显，当且仅当成立时，是非空的。（我们可以选择我们的集合论宇宙中的任何其他元素而不是 0 来表示真实。）因此，从任何关系中，我们可以构造一个其真实性等价于非空的家族。请注意，这种解释不关心关于的证明是什么，只关心它是否成立。回想一下，直觉主义类型论将命题解释为类型，因此意味着是真实的。

将关系解释为家族允许跟踪证明或证据，表明成立，但我们也可以选择忽略它。

在蒙塔古语义学中，使用高阶逻辑来给出自然语言的语义（如上所示的例子）。Ranta（1994）引入了使用直觉主义类型论来更好地捕捉句子结构的想法，借助于依赖类型。

相比之下，在直觉主义类型论中如何处理自然数之间的数学关系？首先，我们需要一个数字的类型。我们可以原则上引入一个未指定的个体域，然后添加公理，就像我们在一阶逻辑中为 Peano 算术设置公理系统时所做的那样。然而，这样做并不能给我们带来理想的计算解释。因此，如下所述，我们制定了构造新自然数的引入规则，并为在上定义函数的消除和计算规则（通过递归）。标准的顺序关系应满足

在直觉主义类型论中，右手边被渲染为，我们将其作为关系的定义（通过递归方程定义，是身份类型构造）。现在，关于的所有属性都由上述引入、消除和计算规则确定。

#### 2.1.4 具有多种判断形式的逻辑

直觉主义类型论的类型系统非常表达力强。因此，类型的良好形式不再是简单的解析问题，而是需要证明的事情。类型的良好形式是直觉主义类型论的一种判断形式。与类型相关的术语的良好类型是另一种判断形式。此外，还有用于类型和术语的相等判断。这是直觉主义类型论与普通的一阶逻辑不同之处之一，后者专注于表达命题真理的唯一判断。

#### 2.1.5 语义学

在标准的一阶逻辑表达中，会遵循塔斯基的定义模型的概念，直觉主义类型论则遵循布劳尔意义论的传统，由海廷和科尔莫哥洛夫进一步发展，即所谓的 BHK-逻辑解释。关键点在于蕴含的证明是一种将证明转化为证明的方法。在直觉主义类型论中，这种方法通过程序或者来形式上表示：蕴含的证明类型是将证明映射到证明的函数类型。

此外，塔斯基语义通常以元数学的方式呈现，并假设集合论，而马丁-勒夫的直觉主义类型论的意义论应该直接理解为“预数学”的，即不假设像集合论这样的元语言。

#### 2.1.6 一种函数式编程语言

具有 lambda 演算和函数式编程背景的读者可以通过将其视为 Haskell 或 ML 方言之一的类型化函数式编程语言来获得直觉主义类型论的替代初步近似。然而，它与这些语言在两个关键方面有所不同：（i）它具有依赖类型（见下文）和（ii）所有可类型化的程序都会终止。（请注意，直觉主义类型论已经影响了 Haskell 的最新扩展，其中包括广义代数数据类型，有时可以起到类似于归纳定义的依赖类型的作用。）

### 2.2 库里-霍华德对应

如前所述，解释/原理是

> *命题是其证明的类型。*

是直觉主义类型论的基础。这个原理也被称为 Curry-Howard 对应或 Curry-Howard 同构。Curry 发现了直觉主义逻辑的蕴涵片段与简单类型λ演算之间的对应关系。Howard 将这个对应关系扩展到了一阶谓词逻辑。在直觉主义类型论中，这个对应关系变成了命题和类型的等同，已经扩展到了对更高类型的量化等。

### 2.3 证明对象的集合

那么这些证明对象是什么样的？它们不应被视为逻辑推导，而应被视为某种（结构化的）符号证据，证明某个命题为真。另一个称呼这种证据的术语是“真理生成者”。

作为一个相对粗略的第一近似，将类型替换为普通集合是有启发性的。根据以下定义，定义一个依赖于的集合：

那么当且仅当时，集合是非空的。集合对应于命题，而数字是居住在集合中的证明对象（真理生成者）。

考虑将偶数表示为公式的命题。我们可以通过使用一般的集合论和操作来构建与此公式对应的证明对象集合。假设()是一组集合。那么它的不相交和由一对组成的集合给出

如果我们将这个构造应用于家族，我们可以看到当存在一个使得时，是非空的。使用一般的集合论积操作，我们可以类似地获得与普遍量化命题对应的集合。

### 2.4 依赖类型

在直觉主义类型论中，存在原始类型形成器，用于一般的和积、以及用于身份类型，类似于上述集合论构造。与集合对应的身份类型是依赖类型的一个例子，因为它依赖于和 。它也被称为类型的索引族，因为它是由和索引的类型族。类似地，我们可以形成一般的不相交和以及一般的笛卡尔积，这些都是由这样一个由索引的类型族形成的，对应于上述集合论的和与积运算。

依赖类型也可以通过原始递归来定义。一个例子是由方程定义的由类型的元素组成的-tuple，其中是一个单元素类型，表示两个类型的笛卡尔积。我们注意到，依赖类型引入了类型中的计算：上述定义规则是计算规则。例如，计算的结果是。

where  is a one element type and  denotes the cartesian product of two types. We note that dependent types introduce computation in types: the defining rules above are computation rules. For example, the result of computing  is .

### 2.5 直觉主义类型论中的命题作为类型

将命题作为类型，谓词变成了依赖类型。例如，谓词成为了素数的证明的类型。这个类型依赖于。类似地，是小于的证明的类型。

根据 Curry-Howard 解释，将命题作为类型，逻辑常量被解释为类型构造者：

其中  是类型族的不交和，  是它的笛卡尔积。  的规范元素是成对的  ，其中  且  （通过将  中的所有自由出现替换为  而获得的类型）。  的元素是（可计算的）函数  ，其中  ，只要  。

例如，考虑命题

表示存在任意大的素数。在柯里-霍华德解释下，这变成了将一个数字映射到三元组的函数的类型，其中是一个数字，是一个证明，而是一个证明。这是证明即程序的原则：存在任意大的素数的建构性证明成为一个程序，它给定任何数字产生一个更大的素数，并附带证明它确实更大且确实是素数。

注意，从假设存在最大素数推导出矛盾的证明并不是建构性的，因为它没有明确给出计算更大素数的方法。要将这个证明转化为建构性的证明，我们必须明确展示如何构造更大的素数。（由于上述命题()是一个-公式，我们可以例如使用弗里德曼的 A-翻译将这样一个经典算术中的证明转化为直觉主义算术中的证明，从而转化为直觉主义类型论中的证明。）

## 3. 基本直觉主义类型论

现在我们介绍直觉主义类型论的核心版本，与马丁-勒夫在 1972 年提出的第一个版本密切相关（Martin-Löf 1998 [1972]）。除了上述列出的用于 Curry-Howard 解释的类型形成器之外，我们还有两种类型：自然数类型和小类型类型。

结果理论可以显示包含直觉主义数论（Heyting 算术），哥德尔的高阶原始递归函数系统，以及高阶 Heyting 算术理论。

这个核心直觉主义类型论不仅是最初的版本，而且可能是展示该理论基本特征的最小版本。后来的扩展包括原始身份类型、良基树类型、宇宙层次结构以及归纳和归纳递归定义的一般概念，增强了该理论的证明论力量，并使其在编程和数学形式化方面更加方便。例如，通过添加良基树，我们可以解释 Aczel（1978 [1977]）的建构性泽尔梅洛-弗雷因克尔集合论。然而，我们将在下一节中描述这些扩展。

### 3.1 判断

在 Martin-Löf（1996）中，提出了一种关于逻辑的普遍哲学，其中扩展了传统的判断概念并赋予其核心地位。判断不再仅仅是对命题的肯定或否定，而是一种知识的一般行为。在数学推理中，我们对数学对象进行判断。一种判断形式是陈述某个数学命题为真。另一种判断形式是陈述某物是一个数学对象，例如一个集合。逻辑规则提供了从先前判断中产生正确判断的方法。通过这些规则获得的判断可以以树形或顺序形式呈现。

或者以顺序形式呈现

* (1)
* (2)
* (3)
* (4)
* (5)
* (6)
* (7)
* (8)

后一种形式在数学论证中很常见。由公理通过逻辑规则形成的这样的序列或树是一个判断的推导或证明。

一阶推理可以使用一种判断方式来呈现：

> 在假设命题都为真的情况下，命题为真。

我们将这种假设性判断称为所谓的 Gentzen 序列。

注意，这是一个单一判断，不应与从判断中推导出判断混淆。当，那么范畴判断陈述为在没有任何假设的情况下为真。使用序列符号，合取引入的熟悉规则变为

### 3.2 判断形式

Martin-Löf 类型论具有四种基本的判断形式，比一阶逻辑复杂得多。一个原因是由于命题和类型的等同性，推导中携带了更多的信息。另一个原因是语法更加复杂。例如，良构公式（类型）必须与可证明为真的公式（有居住类型）同时生成。

范畴判断的四种形式是

* ，意味着是一个良构的类型，
* ，意味着具有类型，
* ，意味着和是相等的类型，
* ，意味着和是类型的相等元素。

一般来说，判断是假设性的，也就是说，它是在一个上下文中进行的，即一个变量列表，这些变量可能在判断中自由出现，并且带有它们各自的类型。请注意，上下文中的类型可以依赖于先前类型的变量。例如，可以依赖于。假设性判断有四种形式。

* ，意味着在上下文中，类型为的是一个良构的类型，
* ，意味着在上下文中，类型为的具有类型，
* ，意味着在上下文中，类型和是相等的类型，
* ，意味着在上下文中，和是类型的相等元素。

在类型作为命题的解释下，

可以理解为是命题的证明对象。当我们忽略这个对象时，我们得到一个对应于普通一阶逻辑中的判断（见上文）的判断：

备注 3.1. Martin-Löf（1994）认为，康德的先验分析判断和先验综合判断可以在逻辑领域中分别通过（[analytic]）和（[synthetic]）来举例。在分析判断（[analytic]）中，使判断明显所需的一切都是明确的。对于其综合版本（[synthetic]），需要提供可能复杂的证明构造来使其明显。这种对分析性和综合性的理解有一个令人惊讶的结果，即“通常表述的逻辑定律都是综合的。”Martin-Löf（1994: 95）。他的分析进一步给出：

> “[…]分析判断的逻辑，即推导两种分析形式判断的逻辑，是完备且可判定的，而综合判断的逻辑是不完备且不可判定的，这是哥德尔证明的。”Martin-Löf（1994: 97）。

两种分析判断（和）的可判定性取决于类型论的元数学性质：强归纳和可判定类型检查。

有时也明确将以下形式视为该理论的判断：

* ，意味着  是一个良构的上下文。
* ，意味着  和  是相等的上下文。

Below we shall abbreviate the judgment  as  and  as

### 3.3 Inference Rules

When stating the rules we will use the letter  as a meta-variable ranging over contexts,  as meta-variables ranging over types, and  as meta-variables ranging over terms.

第一组推理规则是包括假设规则、替换规则和上下文形成规则在内的一般规则。还有一些规则表达了等式是等价关系。有许多这样的规则，我们只展示了对于类型相等至关重要的特别重要的规则，这对于类型中的计算至关重要：

剩下的规则是特定于类型形成者的。这些规则被分类为形成规则、引入规则、消除规则和相等规则。

### 3.4 直觉主义谓词逻辑

我们只给出了类型论的规则。对于与类型化谓词逻辑的逻辑常量相对应的其他类型形成器，也有类似的规则。

在下文中，表示通过将术语替换为自由出现的变量中的术语（避免变量捕获）而获得的术语。

 -形成。

 -介绍。

 -消除。

 -相等。

这是 -conversion 的规则。我们还可以添加 -conversion 的规则：

此外，还有一些一致性规则，表明由形成、引入和消除规则引入的操作保持相等性。例如，对于  的一致性规则是：

### 3.5 自然数

正如在 Peano 算术中，自然数是由 0 和后继操作生成的。消除规则表明这些是生成自然数的唯一可能方式。

我们用  表示由对自然数进行原始递归定义的函数，其中基本情况为  ，步骤函数为  （或者  ），它将前一个数  的值映射到  的值。注意，  是一个新的变量绑定运算符：变量  和  在  中变为绑定的。

 -形成。

 -介绍。

 -消除。

-相等（在适当的前提下）。

通过原始递归定义的函数的类型以及在 Curry-Howard 解释下的数学归纳法规则，-消除规则同时表达了函数的类型：我们通过对自然数的归纳证明了属性的。

哥德尔的系统本质上是只有类型形成器和（从到的函数类型，这是不依赖于的特殊情况）的直觉主义类型论。由于系统中没有依赖类型，规则可以简化。

### 3.6 小类型的宇宙

类型论的第一个版本（Martin-Löf 1971a）中有一个公理，它声明存在一个包含所有类型的类型。Girard 证明了这个公理是不一致的，他发现 Burali-Forti 悖论可以在这个理论中被编码。

为了克服这种病态的非预测性，但仍保留一些表达能力，Martin-Löf 在 1972 年引入了一个小类型的宇宙，该宇宙在理论的所有类型形成器下都是封闭的，但它本身不包含在内（Martin-Löf 1998 [1972]）。规则如下：

 -形成。

 -介绍。

 -消除。

由于是一个类型，我们可以使用-消除来通过原始递归定义小类型。例如，如果，我们可以如下定义元素在中的-tuples 类型：

这种类型论的宇宙类似于集合论中的 Grothendieck 宇宙，它是一个在泽尔梅洛-弗兰克尔集合论中，对所有集合构造方式都封闭的集合。一个 Grothendieck 宇宙的存在不能从泽尔梅洛-弗兰克尔集合论的通常公理中证明，而需要一个新的公理。

在 Martin-Löf（1975）中，宇宙被扩展为一个可数的宇宙层次结构。

这样，每个类型都有一个类型，不仅仅是每个小类型。

### 3.7 命题等同性

在上面，我们介绍了等同判断

这通常被称为“定义等同性”，因为它可以通过对术语进行归一化并检查归一化形式是否相同来决定。然而，这种等同性是一个判断而不是一个命题（类型），因此我们不能通过归纳来证明这种判断性等同性。因此，我们需要引入命题等同类型。例如，自然数的等同类型可以通过值为的原始递归来定义。然后我们可以表达和证明 Peano 公理。此外，函数的外延等同性可以通过

### 3.8 The Axiom of Choice is a Theorem

The following form of the axiom of choice is an immediate consequence of the BHK-interpretation of the intuitionistic quantifiers, and is easily proved in intuitionistic type theory:

The reason is that  is the type of functions which map elements  to pairs  with  and . The choice function  is obtained by returning the first component  of this pair.

直觉主义类型论直接验证选择公理可能令人惊讶，因为从建构主义的观点来看，这个公理通常被认为是有问题的。对于这种情况的一个可能解释是，上述是类型的选择公理，并且类型通常不是在经典意义上适当的建构近似集合。例如，在直觉主义类型论中，我们可以将实数表示为柯西序列，但实数集不是柯西序列的类型，而是柯西序列的等价收敛类型。更一般地，Bishop 的建构性数学中的集合由一个类型（通常称为“预设”）和一个等价关系表示。

如果和配备了等价关系，当然不能保证上述的选择函数在将等价元素映射到等价元素方面是外延的。这是外延选择公理的失败，请参见 Martin-Löf（2009）进行分析。

## 4. 扩展

### 4.1 逻辑框架

上述完成了对直觉主义类型论核心版本的描述，该版本接近于(Martin-Löf 1998 [1972])的描述。

1986 年，Martin-Löf 提出了直觉主义类型论的重新表述；详见 Nordström，Peterson 和 Smith（1990）的阐述。其目的是给出一种更紧凑的表述，其中和是唯一的变量绑定操作。现今，它被认为是该理论的主要版本。它也是 Agda 证明助手的基础。1986 年的理论有两个部分：

* 类型论（逻辑框架）的理论；
* 集合论（小型类型）的理论。

备注 4.1.请注意，逻辑框架中的“集合”一词与 Bishop 的建构主义数学中的用法不一致。为了避免混淆，直觉主义类型论中通常将类型与等价关系一起称为“集合型”或“外延集合”。

逻辑框架只有两种类型形成器：（通常在逻辑框架公式中写作或）和（通常称为）。对于（）的规则与上述给出的规则相同（包括-conversion）。对于（）的规则也是相同的，只是逻辑框架只规定了在类型形成下的封闭性。

其他小型类型形成器（“集合形成器”）是在集合理论中引入的。在逻辑框架公式中，每个形成、引入和消除规则都可以表示为新常量的类型。例如，自然数的规则变为

其中我们省略了常见的上下文，因为这些常量的类型是封闭的。请注意，递归运算符与原始公式中的不同，它有一个第一个参数。

此外，相等规则可以用方程式表示

在适当的假设下。

接下来，我们将介绍类型论的几个扩展。为了保持演示的一致性，我们将不使用逻辑框架演示类型论，而是使用第 2 节中相同的符号表示法。

### 4.2 一个通用的身份类型构造器

正如我们在上面提到的，自然数上的身份可以通过原始递归来定义。其他类型上的身份关系也可以在直觉主义类型论的基本版本中进行定义，该版本在第 2 节中介绍。

然而，Martin-Löf（1975）通过一个统一的原始身份类型构造器扩展了直觉主义类型论，适用于所有类型。表达式的规则表明，身份关系是通过自反性的证明递归生成的，这是一个称为的规范常量。（请注意，在 2.3 中的证明对象的引导展示中，用数字 0 编码了。身份类型的消除规则是谓词逻辑中身份消除的一般化，并引入了一个消除常量。我们在这里展示的是 Paulin-Mohring（1993）的表述，而不是 Martin-Löf（1975）的原始表述。推理规则如下所示。

 -形成。

 -介绍。

 -消除。

-相等性（在适当的假设下）。

注意，如果只依赖于而不依赖于证明（我们也省略了证明对象）在-消除规则中，我们恢复了谓词逻辑中的恒等消除规则。

通过构建一个类型论模型，其中类型被解释为群体（所有箭头都是同构的类别），霍夫曼和斯特赖彻（1998）表明，直觉主义类型论中无法证明所有的证明都是相同的。这似乎是该理论的不完备性，斯特赖彻建议从中得出所有证明都等同于的新公理。

类型通常被称为内涵等同类型，因为它不满足函数外延性原则。具有内涵等同类型的直觉主义类型论也经常被称为内涵直觉主义类型论，以区别于将在第 7.1 节中介绍的外延直觉主义类型论。

### 4.3 基于良基的树

引入了一种形式的良基树类型，由 Martin-Löf 1982 年引入（Scott 1970 年以更受限制的形式引入）。的元素是具有不同和任意分支的树：不同，因为分支类型由索引，并且任意，因为可以是任意的。该类型通过广义归纳定义给出，因为良基树可以是无限分支的。我们可以将其视为自由项代数，其中每个代表具有（可能是无限的）元数的项构造器。

 -形成。

 -介绍。

我们省略了-消除和-相等的规则。

将良基树添加到直觉主义类型论中，显著增强了其证明论的强度（Setzer（1998））。

### 4.4 迭代集合和 CZF

良基树的一个重要应用是 Aczel（1978）对建构性泽尔梅洛-弗兰克尔集合论的类型论模型的构造。为此，他将迭代集合的类型定义为

令 为一个小类型，为一个索引的迭代集合的家族。那么，或者用更具启发性的符号表示，是一个迭代集合。换句话说：一个迭代集合是由一个小类型索引的迭代集合的家族。

注意，迭代集合是函数式编程意义上的数据结构：可能是无限分支的良基树。不同的树可能表示相同的集合。因此，我们需要定义迭代集合之间的外延相等的概念，忽略元素的重复和顺序。这个定义在形式上类似于过程代数中进程的双模拟定义。在外延相等的情况下，类型可以被视为建构主义类型论模型的累积层次结构，有关 CZF 的更多信息，请参阅集合论：建构主义和直觉主义 ZF 的条目。

### 4.5 归纳定义

归纳定义的概念在直觉主义类型论中是基础的。它是一个原始概念，而不是像集合论中那样一个派生概念，其中归纳定义的集合被无限地定义为满足某些规则的最小集合。然而，在直觉主义类型论中，归纳定义被认为是预测性的：它们被视为从下方逐步构建起来的。

类型的归纳可定义性是直觉主义类型论中的意义解释的内在特性，我们将在下一节中讨论。事实上，直觉主义类型论可以简要地描述为基于具有依赖类型的λ演算框架的归纳、递归和归纳递归定义的理论。

我们已经看到了自然数类型和良基树类型作为归纳定义给出的类型的示例；自然数是一个普通有限归纳定义的示例，而良基树是一个广义可能无限归纳定义的示例。引入规则描述了如何归纳生成这些类型的元素，消除和相等规则描述了如何通过结构递归定义从这些类型到函数。根据命题即类型原理，消除规则同时也是根据元素生成方式进行结构归纳证明的规则。

类型形成者和解释直觉主义谓词逻辑的逻辑常量的例子是退化归纳定义的例子。即使是恒等类型（在直觉主义类型论中）也是归纳生成的；它是由自反公理生成的证明的类型。它的消除规则通过对自反性证明进行模式匹配来表达证明。

类型形成者的规则的共同结构可以通过归纳定义的一般模式来捕捉（Dybjer 1991）。这个一般模式有许多有用的实例，例如，具有类型为的元素的列表的类型具有以下引入规则：

其他有用的实例是二叉树和其他树的类型，例如第二和更高数类的布劳尔序数的无限分支树。

一般模式不仅适用于归纳定义的类型，还适用于归纳定义的类型族，例如身份关系。上述类型的-tuples 类型是通过对上述的原始递归进行定义的。它也可以作为一个归纳族来定义，具有以下引入规则

归纳类型和族的模式是 Martin-Löf（1971b）提出的谓词逻辑中迭代归纳定义模式（以自然推理形式化）的类型论概括。这篇论文紧随 Martin-Löf 直觉主义类型论的首个版本之前。它在概念上和技术上都是理论发展的先驱。

Agda 和 Coq 等证明助手的一个重要特点是它使用户能够通过列出引入规则（构造函数的类型）来定义自己的归纳类型和族。这与 Haskell 和不同方言的 ML 等类型化函数式编程语言非常相似。然而，与这些编程语言不同的是，直觉主义类型论中的归纳定义模式强制执行一种限制，即定义类型的元素必须是良基的。

### 4.6 归纳递归定义

我们已经提到直觉主义类型论中有两个主要的定义原则：类型（集合）的归纳定义和通过对这些类型的元素的归纳生成进行递归的（原始的、结构的）函数的定义。通常，集合的归纳定义首先出现：形成和引入规则不涉及消除规则。然而，在直觉主义类型论中存在这样的定义，不满足这种情况，我们同时归纳生成一个类型和一个由结构递归定义的来自该类型的函数。这样的定义是同时归纳递归的。

这样一个归纳递归定义的第一个例子是一个按照塔斯基的方式的小型类型宇宙的替代表述。我们上面介绍了按照罗素的方式表述的宇宙，其中元素和相应的类型之间没有符号上的区别。对于按照塔斯基的方式的宇宙，存在这样的区别，例如，元素和相应的类型之间。元素被称为的代码。

类型论中的宇宙消除规则是：

这表明存在一个函数，它将一个代码映射到其对应的类型。等式规则定义了这种对应关系。例如，

我们可以看到，类型是通过每个小类型构造子引入规则的归纳生成的，而类型是通过对这些小类型构造子进行递归定义的。这个定义的同时归纳递归性质在例如类型的规则中变得明显。引入规则是

相应的等式规则是

注意，对于引入规则，它指的是，因此必须同时定义和。

还有一些其他的递归定义的宇宙构造：宇宙层次结构，超宇宙（Palmgren 1998; Rathjen, Griffor, and Palmgren 1998），和 Mahlo 宇宙（Setzer 2000）。这些宇宙类似于集合论中的某些大基数：不可达基数，超不可达基数和 Mahlo 基数。

其他归纳递归定义的示例包括 Martin-Löf 在直觉主义类型论的早期归一化证明中使用的可计算性谓词的非正式定义（Martin-Löf 1998 [1972]）。还有许多自然的“小型”归纳递归定义的示例，其中递归定义（解码）函数返回的是类型的元素而不是类型本身。

包括上述内容在内的大部分归纳递归定义可以通过一个通用模式（Dybjer 2000）来捕捉，该模式扩展了上述归纳定义的模式。正如 Setzer 所示，具有这类归纳递归定义的直觉主义类型论在证明论上非常强大（Dybjer and Setzer 2003）。然而，根据 Setzer 最近的未发表工作的建议，可以进一步增强理论的强度，并定义诸如自主 Mahlo 宇宙之类的宇宙，这些宇宙类似于更大的基数。

## 5. 意义解释

相对于集合论，直觉主义类型论的一致性可以通过模型构造来证明。也许最简单的方法是通过解释，将每个类型论概念赋予其相应的集合论意义，如第 2.3 节所述。例如，函数类型被解释为在集合论意义下，由表示的集合和表示的集合之间的所有函数的集合。为了解释，我们需要一个在所有（集合论类比的）类型构造器下封闭的集合论宇宙。如果我们假设存在一个不可达基数，并通过在累积层次结构中解释，可以证明这样的宇宙的存在。

可行性模型和内涵类型论的术语模型是替代方法。后者也可用于证明理论判断的可决定性。

数学模型只能相对于经典集合论（或我们使用的其他元理论）证明一致性。有没有可能以更直接的方式确信理论的一致性，即所谓的简单一致性（Martin-Löf 1984）？事实上，有没有一种方法可以以一种直接的非数学方式解释判断的正确性？而且，既然我们知道判断的意义，我们能否确信理论的推理规则是有效的？Martin-Löf 在 1979 年的论文《建构性数学与计算机编程》（Martin-Löf 1982）中提出了这个问题的一个答案，并在后来的许多讲座和笔记中进行了详细阐述，例如，Martin-Löf（1984，1987）。这些关于直觉主义类型论的意义解释也被称为直接语义、直观语义、非正式语义、标准语义或语法-语义方法。

这个意义理论遵循维特根斯坦的意义即使用传统。意义基于构建类型的对象（引入规则）和计算规则（消除规则）来计算这些对象。与维特根斯坦传统的区别在于，也使用规则来赋予高阶类型如类型论以意义。

要解释判断的意义，我们首先必须知道判断中的术语如何计算为规范形式。然后，形成规则解释如何构建正确的规范类型，引入规则解释如何构建这些规范类型的正确的规范对象。我们引用（Martin-Löf 1982）：

> 规范类型通过规定如何形成类型的规范对象以及如何形成两个相等的类型的规范对象来定义。对于这个规定，除了规范对象之间的相等关系必须是自反的、对称的和传递的之外，没有任何限制。

换句话说，规范类型配备了规范对象上的等价关系。下面我们将给出一种简化的意义解释形式，其中这个等价关系是对象的外延身份。

尽管这种意义理论具有预数学性质，但其技术方面可以被捕捉为一个数学模型构造，类似于克里尼的直觉逻辑实现解释，见下一节。这里的实现者是类型论的术语，而不是克里尼使用的数值实现者。

### 5.1 计算到规范形式

判断的意义是通过判断中的类型和项的计算来解释的。当达到规范形式时，这些计算停止。所谓规范形式是指最外层形式是构造器（引入形式）的项。这些是惰性函数式编程中使用的规范形式（例如 Haskell 语言）。

为了说明，我们仅考虑三个类型形成器的意义解释：、和。这个直觉主义类型论片段的无上下文语法如下：

规范项由以下语法生成：

其中  在任意情况下都可以是任意的，不一定是规范的术语。请注意，即使  不是规范的，  也是规范的。

为了解释术语如何计算为规范形式，我们引入了封闭术语和规范形式（值）之间的关系，该关系由以下计算规则给出：

除了规则之外

声明一个规范术语本身作为值。

### 5.2 范畴判断的含义

范畴判断是一个上下文为空且没有自由变量的判断。

范畴判断的意义是具有规范类型作为值。在我们的片段中，这意味着以下任一情况成立：

* ,
* ,
* 而且，还有 和 。

范畴判断的意义是具有规范类型 的规范术语作为值。在我们的片段中，这意味着以下任一情况成立：

* 并且要么  或者  和 ,
* 并且要么  或者  而且此外  和 ,
* 并且  和 .

范畴判断的意义是和具有相同的规范类型作为值。在我们的片段中，这意味着以下任一情况成立：

* 和，
* 和，
* 并且并且进一步说明并且。

范畴判断的意义以类似的方式解释。

这是对意义解释的默认假设，即规范形式的重复计算是有良好基础的。例如，自然数是有限次继承函数计算的结果，以 . 结束。在直觉主义类型论中，导致无限次计算的计算不是自然数。（然而，有类型论的扩展，例如部分类型论和非标准类型论，可以出现这样的无限计算，请参见第 7.3 节。为了证明这些理论的规则，目前的意义解释是不够的。）

### 5.3 假设判断的含义

根据马丁-勒夫（1982）的观点，假设判断的含义是通过将适当类型的闭合项替换自由变量的方式来简化范畴判断的含义。例如，假设判断的含义是范畴判断的含义的替代。

是指范畴判断的含义。

只要分类判断有效，就是有效的。

 是有效的。

## 6. 数学模型

### 6.1 类别模型

#### 6.1.1 超教义

在 20 世纪 60 年代末，霍华德（1980）和德布鲁因（1970）将 Curry 在命题与类型之间的对应扩展到了谓词逻辑。与此同时，劳维尔在范畴逻辑中发展了相关的思想。特别是，他提出了超教义（Lawvere 1970）的概念，作为（有类型的）谓词逻辑的范畴模型。超教义是一个索引范畴，其中是一个范畴，其中的对象表示类型，箭头表示项。如果是一个类型，那么纤维是一个依赖于变量的命题范畴。这个范畴中的箭头是证明，可以被看作是证明对象。此外，由于我们有一个索引范畴，对于从到的每个箭头，都有一个重新索引函子，表示将替换为变量。假定该范畴是笛卡尔闭的，而合取和蕴含则由该范畴中的积和指数来建模。量词和则由重新索引函子的左伴随和右伴随来建模。此外，劳维尔还为超教义添加了进一步的结构，以建模身份命题（作为对角函子的左伴随）和一个理解模式。

#### 6.1.2 Contextual categories, categories with attributes, and categories with families

Lawvere’s definition of hyperdoctrines preceded intuitionistic type theory but did not go all the way to identifying propositions and types. Nevertheless Lawvere influenced Scott’s (1970) work on *constructive validity*, a somewhat preliminary precursor of intuitionistic type theory. After Martin-Löf (1998 [1972]) had presented a more definite formulation of the theory, the first work on categorical models was presented by Cartmell in 1978 with his notions of category with attributes and contextual category (Cartmell 1986). However, we will not define these structures here but instead the closely related *categories with families* (Dybjer 1996) which are formulated so that they directly model a variable-free version of a formulation of intuitionistic type theory with explicit substitutions (Martin-Löf 1995).

A category with families is a functor , where  is the category of families of sets. The category  is the category of contexts and substitutions. If  is an object of  (a context), then  is the family of terms of type  which depend on variables in . If  is an arrow in  representing a substitution, then the arrow part of the functor represents substitution of  in types and terms. A category with families also has a terminal object and a notion of context comprehension, reminiscent of Lawvere’s comprehension in hyperdoctrines. The terminal object captures the rules for empty contexts and empty substitutions. Context comprehension captures the rules for extending contexts and substitutions, and has projections capturing weakening and assumption of the last variable.

具有家族的类别是代数结构，用于模拟依赖类型论的一般规则，这些规则出现在特定类型形成器的规则之前，例如，恒等类型、宇宙等。为了模拟特定类型形成器对应的额外结构需要添加。

#### 6.1.3 本地笛卡尔闭类别

从范畴论的角度来看，上述结构可能显得有些特殊和临时。产生直觉主义类型论模型的更规则的结构是本地笛卡尔闭类别。这些类别具有一个终对象，其中每个切片类别都是笛卡尔闭的。可以证明，拉回函子具有左伴随和右伴随，分别表示-类型和-类型（Seely 1984，Clairambault 和 Dybjer 2014）。值得注意的是，与直觉主义类型论的对应关系有些间接，因为需要解决一个关于连贯性的问题，从范畴论的角度来看。问题在于，在本地笛卡尔闭类别中，类型替换由拉回表示，但这些拉回仅定义到同构，参见 Curien 1993 和 Hofmann 1994。

### 6.2 集合论模型

直觉主义类型论是建构主义数学的一个可能框架，符合 Bishop 的意义。这样的建构主义数学与经典数学是兼容的：Bishop 意义上的建构性证明可以直接理解为经典逻辑中的证明。一个形式化的理解方式是通过构建直觉主义类型论的集合论模型，其中类型论的每个概念被解释为 Zermelo-Fraenkel 集合论中相应的概念。例如，类型被解释为集合，而在集合论意义上，类型中的函数类型被解释为从表示 A 的集合到表示 B 的集合的所有函数的集合。自然数类型被解释为自然数的集合。关于恒等类型、Π类型和Σ类型的解释已在引言中讨论过。并且如前所述，为了解释类型论的宇宙，我们需要一个不可达基数。

#### 6.2.1 CZF 模型

可以证明，上述解释可以在 Aczel 的建构集合论 CZF 中进行。因此，它不依赖于经典逻辑或集合论的非预测性特征。

### 6.3 实现模型

可以批评集合论模型，因为它将函数类型建模为所有集合论函数的集合，尽管类型论中的函数总是可计算的，而集合论函数可能不可计算。

为了解决这个问题，可以构建一个可实现模型，其中从一组实现者开始。可以在这里紧密遵循 Kleene 的数值可实现性，其中函数由图灵机的代码实现。或者，可以让实现者成为 lambda 演算或组合逻辑中的术语，可能还可以扩展适当的常量。类型然后由实现者集合表示，或者通常表示为实现者集合上的部分等价关系。部分等价关系是一种方便的方式来表示具有“相等性”概念的类型。

可实现模型的主题有许多变种。一些这样的模型默认假设集合论作为元理论（Aczel 1980，Beeson 1985），而其他模型明确假设建构主义元理论（Smith 1984）。

可实现模型也是直觉主义类型论的外延版本的模型（Martin-Löf 1982），将在下面的第 7.1 节中介绍。

### 6.4 正常形式和类型检查模型

在直觉主义类型论中，每个类型和每个良好类型的术语都有一个正常形式。这个正常形式属性的一个结果是所有判断都是可判定的：例如，给定一个正确的上下文 ，一个正确的类型  和一个可能有错误类型的术语 ，存在一个算法来决定是否 。这个类型检查算法是直觉主义类型论证明助手（如 Agda）的关键组成部分。

正常形式属性的正确性可以表示为正常形式模型，其中每个上下文、类型和术语都被解释为它们各自的正常形式。

## 7. 类型论的变体

### 7.1 外延类型论

在外延直觉主义类型论中（Martin-Löf 1982），一般身份类型的消除和相等性规则被以下两个规则取代：

第一个导致命题和判断相等之间的区别消失。第二个强制身份证明是唯一的。与内涵身份类型形式的规则不同，外延身份类型的规则不适合上述归纳定义类型的模式。

然而，这些规则是由 Martin-Löf（1982）中的意义解释所证明的。这是因为范畴判断是有效的当且仅当判断是有效的。

当且仅当判断是有效的。

然而，这些规则使得可以定义没有正常形式的术语。由于类型检查算法依赖于类型的正常形式的计算，它不再适用于外延类型论，参见（Castellan，Clairambault 和 Dybjer 2015）。

另一方面，在外延类型论中可以使用一些在内涵类型论中不可用的构造。例如，函数外延性是一个定理。

is a theorem.

另一个例子是，-类型可以用于在外延类型论中对其他归纳定义的类型进行编码。例如，第二和更高阶数类的布劳尔序数可以被定义为-type 的特殊实例（Martin-Löf 1984）。更一般地，可以证明所有由严格正类型算子给出的归纳定义类型都可以表示为良基树的实例（Dybjer 1997）。

### 7.2 不可辨基础和同伦类型论

不可辨基础是指 Voevodsky 关于基于直觉主义类型论和同伦理论思想的数学新基础的计划。在这里，每个类型被视为一个空间，而恒等类型是从点到点的路径的空间。迭代的恒等类型表示更高阶同伦，例如。

是介于和之间的同伦空间。普通集合的概念可以被看作是一个离散空间，其中所有在中的路径都是平凡回路。

这些思想的起源是由（Hofmann 和 Streicher 1998）的重要发现，即内涵类型论的公理并不要求所有的等同证明是相等的，也就是说，并不需要所有的路径都是平凡的。这是通过一个模型构造来展示的，其中每个类型被解释为一个群体。

随后，（Awodey 和 Warren 2009）、（Lumsdaine 2010）和（van den Berg 和 Garner 2011）发现了身份类型与同伦论和高阶范畴的概念之间的进一步联系。Voevodsky 意识到整个内涵直觉主义类型论可以通过同伦论中研究的一个著名范畴，即 Kan 单纯集，来建模。在这个模型的启发下，他引入了不变性公理。对于一个小型类型的宇宙，这个公理规定了与运算符相关联的替换映射。

是一个等价关系。这里的等价关系（）指的是高维对象的一般等价概念，例如序列中的相等元素，同构集合，等价群体，双等价双群体等。单价公理表达了“一切都被等价关系保持”的观点，从而实现了非正式范畴论口号，即所有范畴构造都被同构保持，以及其推广，即所有范畴构造都被范畴等价关系保持等。

单价公理最初是由沃沃茨基的简单集模型来证明的。然而，这个模型并不是建构主义的，最近（Bezem，Coquand 和 Huber 2014 [2013]）提出了一个基于 Kan 立方集的模型。

尽管单价基础理论涉及一般数学结构的保持，受范畴论的强烈启发，其在同伦论中的应用尤其受到活跃的研究。因此，扩展了单价公理和所谓的高阶归纳类型的内涵类型论也被称为“同伦类型论”。有关类型论的详细信息，请参阅类型论条目。

### 7.3 部分和非标准类型论

直觉主义类型论并不旨在模拟布劳尔的自由选择序列概念，尽管类似法则的选择序列可以被建模为从中的函数。然而，有一些扩展理论可以包含这样的选择序列：即部分类型论和非标准类型论（Martin-Löf 1990）。部分类型论中的类型可以被解释为 Scott 域（Martin-Löf 1986，Palmgren 和 Stoltenberg-Hansen 1990，Palmgren 1991）。通过这种方式，可以解释包含无限个例的类型。然而，在部分类型论中，所有类型都由最小元素所居住，因此无法保持命题即类型原则。非标准类型论包括非标准元素，例如一个无限个例而不居住于所有类型。

### 7.4 非预测类型论

Martin-Löf（1971a）的直觉主义类型论的不一致版本是基于强非预测公理，即存在一个包含所有类型的类型。然而，（Coquand 和 Huet 1988）通过他们的构造演算表明，存在一种强非预测但一致的类型论版本。在这个理论中，宇宙（通常在这个理论中称为）在以下形成规则下是封闭的，用于类型族的笛卡尔积：

这个规则比直觉主义类型论中构造小型类型族的小型笛卡尔积的规则更一般，因为我们现在可以量化任意类型，包括和不仅仅是小型类型。我们说是非预测的，因为我们可以通过量化所有元素，甚至是构造的元素，来构造它的新元素。

这个理论的动机是归纳定义的类型和类型族可以用非预测量化来定义。例如，自然数的类型可以定义为 Church 数的类型：

这是一个非预测性定义，因为它是通过对所有小类型进行量化构造的小类型。类似地，我们可以通过非预测性量化来定义一个恒等类型：

这是莱布尼兹对等式的定义：当且仅当它们满足相同的属性（由 ranged over by ）时， 和  是相等的。

与直觉主义类型论不同，非预测性类型中的函数类型不能以直接的方式在集合论中进行解释，参见（Reynolds 1984）。

### 7.5 证明助手

1979 年，马丁-勒夫写了一篇名为《建构性数学与计算机编程》的论文，其中解释了直觉主义类型论是一种编程语言，也可以用作建构性数学的形式基础。不久之后，出现了帮助用户在理论中推导有效判断的交互式证明系统，即所谓的证明助手。

最早的一个系统之一是 NuPrl 系统（PRL Group 1986），它基于类似于马丁-勒夫的外延类型论（Martin-Löf 1982）。

基于内涵类型论版本的系统可以追溯到 1984 年由 Coquand 和 Huet 编写的构造无限计算的类型检查器。这导致了 Coq 系统的产生，该系统基于归纳构造的演算（Paulin-Mohring 1993），这是一种将构造演算与原始归纳类型和族群扩展的理论。纯构造演算的编码被发现是不方便的，因为无法推导出完整的消除规则，而必须假设它们。我们还注意到，归纳构造演算有一个子系统，即归纳构造的谓词演算，遵循 Martin-Löf 直觉主义类型论的原则。

Agda 是另一个基于直觉主义类型论的逻辑框架公式化的证明助手，但它添加了许多受实际编程语言启发的功能（Norell 2008）。它是一个内涵理论，具有可判定的判断和类似于 Coq 的类型检查器。然而，与 Coq 不同，它基于 Martin-Löf 的谓词直觉主义类型论。

还有其他几个系统，要么基于构造演算（Lego，Matita，Lean），要么基于直觉主义类型论（Epigram，Idris）；参见（Pollack 1994; Asperti et al. 2011; de Moura et al. 2015; McBride and McKinna 2004; Brady 2011）。

<!--md-padding-ignore-begin-->
## Bibliography

* Aczel, Peter, 1978 [1977], “The type theoretic interpretation of constructive set theory”, in *Logic Colloquium ’77*, A. Macintyre, L. Pacholski, J. Paris (eds), Amsterdam-New York: North-Holland, pp. 55–66.
* –––, 1980, “Frege Structures and the Notions of Proposition, Truth and Set”, in *The Kleene Symposium*, J. Barwise, H.J. Keisler, K. Kunen (eds), Studies in Logic and the Foundations of Mathematics 101, Amsterdam: North-Holland, pp. 31–59.
* Asperti, Andrea, Wilmer Ricciotti, Claudio Sacerdoti Coen, and Enrico Tassi, 2011, “The Matita interactive theorem prover”, in *Automated deduction: CADE-23*, N. Bjørner and V. Sofronie-Stokkermans (eds), Lecture Notes in Computer Science (LNCS), vol. 6803, Heidelberg: Springer-Verlag, pp. 64–69.
* Awodey, Steve and Michael A. Warren, 2009, “Homotopy theoretic models of identity types”, *Mathematical Proceedings of the Cambridge Philosophical Society*, 146(1): 45–55.
* Beeson, Michael, 1985, *Foundations of Constructive Mathematics*, Springer-Verlag, Berlin.
* van den Berg, Benno and Richard Garner, 2011, “Types are weak -groupoids”, *Proceedings of the London Mathematical Society*, 102(2): 370–394. doi:10.1112/plms/pdq026
* Bezem, Marc, Thierry Coquand, and Simon Huber, 2014 [2013], “A model of type theory in cubical sets”, in *19th International Conference on Types for Proofs and Programs (TYPES 2013)*, Ralph Matthes and Aleksy Schubert (eds), Dagstuhl, Germany: Schloss Dagstuhl--Leibniz-Zentrum fuer Informatik, pp. 107–128.
* Bishop, Errett, 1967, *Foundations of constructive analysis*, New York-Toronto, Ont.-London: McGraw-Hill Book Co..
* Brady, Edwin C., 2011, “IDRIS: systems programming meets full dependent types”, in *Proceedings of the 5th ACM workshop on Programming Languages meets Program Verification (PLPV 2011)*, pp. 43–54, doi:10.1145/1929529.1929536.
* de Bruijn, Nicholas G., 1970, “The mathematical language AUTOMATH, its usage, and some of its extensions”, in *Symposium on Automatic Demonstration (Versailles, 1968)*, Lecture Notes in Mathematics, Vol. 125, Berlin: Springer, pp. 29:61.
* Cartmell, John, 1986, “Generalised algebraic theories and contextual categories”, *Annals of Pure and Applied Logic*, 32: 209–243.
* Castellan, Simon, Pierre Clairambault, and Peter Dybjer, 2015: “Undecidability of Equality in the Free Locally Cartesian Closed Category”, *TLCA* pp 138-152.
* Clairambault, Pierre and Peter Dybjer, 2014, “The biequivalence of locally cartesian closed categories and Martin-Löf type theories”, *Mathematical Structures in Computer Science*, 24(6). doi:10.1017/S0960129513000881
* Coquand, Thierry and Gérard Huet, 1988, “The calculus of constructions”, *Information and Computation*, 76(2–3): 95–120, doi:10.1016/0890-5401(88)90005-3.
* Curien, Pierre-Louis, 1993, “Substitution up to isomorphism”, *Fundamentae Informatica*, 19: 51–85.
* Curry, Haskell B. and Robert Feys, 1958, *Combinatory Logic*, Amsterdam: North-Holland.
* Dybjer, Peter, 1991, “Inductive sets and families in Martin-Löf’s type theory and their set-theoretic semantics”, in *Logical Frameworks*, Gérard Huet and Gordon Plotkin (eds), Cambridge: Cambridge University Press, pp. 280–306 .
* –––, 1996, “Internal Type Theory”, in *Types for Proofs and Programs, TYPES '95*, Stefano Berardi and Mario Coppo (eds), Lecture Notes in Computer Science Volume (LNCS), vol. 1158, Heidelberg: Springer-Verlag, pp. 120–134.
* –––, 1997, “Representing inductively defined sets by wellorderings in Martin-Löf’s type theory”, *Theoretical Computer Science*, 176: 329–335.
* –––, 2000, “A general formulation of simultaneous inductive-recursive definitions in type theory”, *Journal of Symbolic Logic*, 65: 525–549.
* Dybjer, Peter and Anton Setzer, 2003, “Induction-recursion and initial algebras”, *Annals of Pure and Applied Logic*, 124: 1–47.
* Gonthier, Georges, 2008, “Formal proof of the four-color theorem”, *Notices American Mathematical Society*, 55: 1382–1393.
* Hofmann, Martin, 1994, “Interpretation of Type Theory in Locally Cartesian Closed Categories”, in *Proceedings of CSL*, Lecture Notes in Computer Science (LNCS), Berlin: Springer-Verlag. doi:10.1007/BFb0022273
* –––, 1997, “Syntax and semantics of dependent types”, in *Semantics and logics of computation*, Andrew M. Pitts and P. Dybjer (eds), Publications of the Newton Institure (No.14), Cambridge: Cambridge University Press, pp. 79–130.
* Hofmann, Martin and Thomas Streicher, 1998, “The groupoid interpretation of type theory”, in Sambin and Smith 1998: 83–111.
* Howard, William A., 1980, “The Formulae-as-Types Notion of Construction”, in *To H.B. Curry: Essays on Combinatory Logic, Lambda Calculus and Formalism*, J.P. Seldin and J.R. Hindley (eds), Academic Press, pp. 479–490.
* Jacobs, Bart, 1999, *Categorical logic and type theory*, Studies in Logic and the Foundations of Mathematics 141, Amsterdam: North-Holland.
* Lawvere, F. William, 1970, “Equality in Hyperdoctrines and Comprehension Schema as an Adjoint Functor”, in *Proceedings of the American Mathematical Society Symposium on Pure Mathematics XVII*, pp. 1–14.
* Leroy, Xavier, 2009, “Formal verification of a realistic compiler”, *Communications of the ACM*, 52(7):107–115.
* Lumsdaine, Peter LeFanu, 2010, “Weak omega-categories from intensional type theory”, *Logical Methods in Computer Science*, 6(3), doi:10.2168/LMCS-6(3:24)2010, [[LeFanu Lumsdaine 2010 available online](http://www.lmcs-online.org/ojs/viewarticle.php?id=628)]
* Martin-Löf, Per, 1971a, *An intuitionistic theory of types*, unpublished preprint.
* –––, 1971b, “Hauptsatz for the intuitionistic theory of iterated inductive definitions”, in *Proceedings of the 2nd Scandinavian logic symposium*, J.E. Fenstad (ed.), Amsterdam: North-Holland, pp. 179–216.
* –––, 1975, “An intuitionistic theory of types: Predicative part”, in *Logic colloquium ’73*, H.E. Rose and J. Shepherdson (eds), Amsterdam: North-Holland, pp. 73–118.
* –––, 1982, “Constructive mathematics and computer programming”, in *Logic, methodology and philosophy of science VI, Proceedings of the 1979 international congress at Hannover, Germany*, L.J. Cohen, J. Los, H. Pfeiffer and K.-P. Podewski (eds). Amsterdam: North- Holland Publishing Company, pp. 153–175.
* –––, 1984, *Intuitionistic type theory: Notes by Giovanni Sambin of a series of lectures given in Padua, June 1980*, Napoli: Bibliopolis.
* –––, 1986, “Unifying Scott’s theory of domains for denotational semantics and intuitionistic type theory (abstract)”, in *Atti del Congresso ’Logica e Filosofia della Scienza, oggi’, San Gimignano, 7–11 December 1983, Vol. I – Logica*, CLUEB, Bologna.
* –––, 1987, “Truth of a proposition, evidence of a judgment, validity of a proof”, *Synthese*, 73: 407–420.
* –––, 1990, “Mathematics of infinity”, in *COLOG-88*, P. Martin-Löf and G. Mints (eds), Berlin: Springer, pp. 146–197.
* –––, 1994, “Analytic and synthetic judgments in type theory”, in *Kant and contemporary epistemology*, P. Parrini (ed.), Dordrecht: Kluwer, pp. 87–99.
* –––, 1996, “On the meanings of the logical constants and the justifications of the logical laws”, *Nordic Journal of Philosophical Logic*, 1(1): 11–60.
* –––, 1998 [1972], “An intuitionistic theory of types”, in Sambin and Smith 1998: 127–172. (Written in 1972 but unpublished.)
* –––, 2009, “100 years of Zermelo’s Axiom of Choice: What was the problem with it?” in *Logicism, intuitionism, and formalism: What has become of them?*, S. Lindström, E. Palmgren, K. Segerberg, and V. Stoltenberg-Hansen (eds), Dordrecht: Springer, pp. 209–219.
* McBride, Conor and James McKinna, 2004, “The view from the left”, *Journal of Functional Programming*, 14: 69–111.
* de Moura, Leonardo, Soonho Kong, Jeremy Avigad, Floris van Doorn and Jakob von Raumer, 2015, “The Lean Theorem Prover”, in *25th International Conference on Automated Deduction (CADE-25)*, Berlin, Germany. [[de Moura et al. 2015 available online](https://leanprover.github.io/papers/system.pdf)]
* Nordström, Bengt, Kent Petersson, and Jan M. Smith, 1990, *Programming in Martin-Löf’s type theory. An introduction*, New York: Oxford University Press.
* Norell, Ulf, 2008, “Dependently Typed Programming in Agda”, in *Proceedings of the 6th international conference on Advanced Functional Programming*, pp. 230–266.
* Palmgren, Erik, 1991, *On Fixed Point Operators, Inductive Definitions and Universes in Martin-Löf Type Theory*, Doctoral dissertation in mathematics, Uppsala University.
* –––, 1998, “On universes in type theory”, in Sambin and Smith 1998: 191-204.
* Palmgren, Erik and Viggo Stoltenberg-Hansen, 1990 “Domain interpretations of Martin-Löf’s partial type theory”, *Annals of Pure and Applied Logic*, 48: 135–196.
* Paulin-Mohring, Christine, 1993, “Inductive Definitions in the system Coq: Rules and Properties”, in *Proceedings of the International Conference on Typed Lambda Calculi and Applications, TLCA '93*, Marc Bezem and Jan F. Groote (eds), Lecture Notes in Computer Science (LNCS), Springer, pp. 328–345.
* Pollack, Randy, 1994, *The theory of LEGO*, PhD Thesis, Edinburgh.
* PRL Group, 1986, *Implementing Mathematics with the Nuprl Proof Development System*, Engelwood Cliffs, NJ: Prentice-Hall.
* Ranta, Aarne, 1994, *Type-theoretical Grammar*, Oxford: Oxford University Press.
* Rathjen, Michael, Edward R. Griffor, and Erik Palmgren, 1998, “Inaccessibility in constructive set theory and type theory”, *Annals of Pure and Applied Logic*, 94: 181–200.
* Reynolds, John C., 1984, “Polymorphism is not Set-Theoretic”, in *Semantics of Data Types: International Symposium Sophia-Antipolis, France, June 27–29, 1984 Proceedings*, Giles Kahn, David B. MacQueen, and Gordon Plotkin (eds), Lecture Notes in Computer Science (LNCS), vol. 173, Springer, pp. 145–156.
* Sambin, G. and Jan M. Smith (eds), 1998, *Twenty-five years of constructive type theory*, Oxford: Clarendon Press.
* Scott, Dana S., 1970, “Constructive Validity”, in *Symposium on Automatics Demonstration (Versailles, December 1968*, M. Laudet, D. Lacombe, L. Nolin, and M. Schützenberg (eds), Lecture Notes in Mathematics, vol. 125, Springer, pp. 237–275.
* Seely, Robert A.G., 1984, “Locally cartesian closed categories and type theory”, *Mathematical Proceedings of the Cambridge Philosophical Society*, 95: 33–48.
* Setzer, Anton, 1998, “Well-ordering proofs for Martin-Löf type theory”, *Annals of Pure and Applied Logic*, 92: 113–159.
* –––, 2000, “Extending Martin-Löf type theory by one Mahlo-universe”, *Archive for Mathematical Logic*, 39: 155–181.
* Smith, Jan, 1984, “An interpretation of Martin-Löf’s type theory in a type-free theory of propositions”, *Journal of Symbolic Logic*, 49: 730–753.
* Sundholm, Göran, 2012, “On the Philosophical Work of Per Martin-Löf”, in P. Dybjer, S. Lindström, E. Palmgren, and G. Sundholm (eds), *Epistemology versus Ontology: Essays on the Philosophy and Foundations of Mathematics in Honour of Per Martin-Löf*, Springer, pp. xxiii–xxiv.
* The Univalent Foundations Program, 2013, *Homotopy Type Theory: Univalent Foundations of Mathematics*, Institute for Advanced Study, Princeton. http://homotopytypetheory.org/book.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=type-theory-intuitionistic). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/type-theory-intuitionistic/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=type-theory-intuitionistic&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/type-theory-intuitionistic/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* [Internet Encyclopedia of Philosophy: Constructive Mathematics](http://www.iep.utm.edu/con-math/)
* [Scholarpedia: Computational Type Theory](http://www.scholarpedia.org/article/Computational_type_theory)
* [nLab: Type Theory](https://ncatlab.org/nlab/show/type+theory)

## Related Entries

[logic, history of: intuitionistic logic](https://plato.stanford.edu/entries/intuitionistic-logic-development/) | [logic: intuitionistic](https://plato.stanford.edu/entries/logic-intuitionistic/) | [mathematics, philosophy of: intuitionism](https://plato.stanford.edu/entries/intuitionism/) | [mathematics: constructive](https://plato.stanford.edu/entries/mathematics-constructive/) | [proof theory: development of](https://plato.stanford.edu/entries/proof-theory-development/) | [semantics: Montague](https://plato.stanford.edu/entries/montague-semantics/) | [semantics: proof-theoretic](https://plato.stanford.edu/entries/proof-theoretic-semantics/) | [set theory](https://plato.stanford.edu/entries/set-theory/) | [set theory: constructive and intuitionistic ZF](https://plato.stanford.edu/entries/set-theory-constructive/) | [set theory: Zermelo’s axiomatization of](https://plato.stanford.edu/entries/zermelo-set-theory/) | [type theory](https://plato.stanford.edu/entries/type-theory/) | [type theory: Church’s type theory](https://plato.stanford.edu/entries/type-theory-church/)

[Copyright © 2020](https://plato.stanford.edu/info.html#c) by  
[Peter Dybjer](http://www.cse.chalmers.se/~peterd/) <[*peterd@chalmers.se*](mailto:peterd%40chalmers%2ese)>  
[Erik Palmgren](http://staff.math.su.se/palmgren/)
<!--md-padding-ignore-end-->
