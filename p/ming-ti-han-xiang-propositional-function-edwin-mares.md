# 命题函项 propositional function (Edwin Mares)


*首次发表于2011年7月20日*

顾名思义，命题函数是将命题作为其值的函数。命题函数在现代逻辑中起着重要作用，从弗雷格的概念理论和罗素的作品中的分析开始，到它们以非常一般的方式出现在当代类型理论和范畴语法中。

在本文中，我对逻辑理论中命题函数的使用以及对其性质和本体论地位的观点进行了历史概述。

 

---

## 1. 前史

在我们开始讨论命题函项之前，了解其引入之前的内容会有所帮助。在传统逻辑中，命题函项的角色大致由术语扮演。在传统逻辑中，像“狗是哺乳动物”这样的陈述被视为在术语“狗”和“哺乳动物”之间建立了一种关系。

一个术语可以被视为一个对象类或一组属性的内涵。术语“狗”的内涵包括所有包含在“哺乳动物”的内涵中的属性。对于“狗是哺乳动物”的内涵处理将这个句子解释为真，因为主语的语义解释是谓词解释的超集。然而，在外延处理句子时，这个句子是真的，因为主语的解释（狗的类）是谓词的解释（哺乳动物的集合）的子集。

谓词的这两种处理方式是传统逻辑中两种传统的典型代表——内涵和外延传统。可以归为内涵逻辑学家的逻辑学家有戈特弗里德·莱布尼茨、约翰·兰伯特、威廉·哈密尔顿、斯坦利·杰文斯和休·麦考尔。可以归为外延逻辑学家的逻辑学家有乔治·布尔、奥古斯都·德·摩根、查尔斯·皮尔斯和约翰·文恩。

在内涵逻辑传统中，对术语的处理方式对于现代读者来说可能有些奇怪。在 20 世纪哲学中，谓词的内涵仅包括任何能说一种语言的熟练使用者与该谓词相关联的属性。这些属性不足以使像“我家的每只狗都在睡觉”这样的普通陈述成为真实。但是，通过考虑其起源，我们可以理解对术语的内涵观点。内涵逻辑传统的创始人之一是莱布尼茨，他认为所有真理都根植于个体的本质。一个个体的完整概念包含了关于它的一切真实。在此基础上，我们可以看到一个术语的完整概念将包括足够的内容来支持关于它的任何真理。

在内涵逻辑和外延逻辑传统中，我们可以看到关于复合术语的理论。在外延传统中，析取和合取术语通过取类的并集和交集来解释。合取术语 AB 被解释为类 A 和类 B 的交集，而析取术语 A+B 的外延被理解为 A 和 B 的外延的并集。

在内涵传统中，情况正好相反。术语 AB 被解释为 A 的内涵和 B 的内涵的并集，而 A+B 被解释为 A 的内涵和 B 的内涵的交集。这种反转是有道理的，因为更多的事物符合较少的属性，而较少的事物符合较多的属性。

尽管一些从事术语逻辑研究的逻辑学家对否定有非常复杂的处理方式，但我们也可以在外延传统中看到现代概念的起源。在布尔和他的大多数追随者中，一个术语的否定被理解为该术语所代表的类的集合论补集。因此，经典命题逻辑的否定通常被称为“布尔否定”。

## 2. 亲属逻辑

在查尔斯·皮尔斯的《亲属逻辑》（1883 年）中，我们看到了将术语视为函数的一种理解方式。传统术语逻辑的一个问题是它缺乏处理关系的能力。皮尔斯的亲属逻辑旨在解决这个问题。他在布尔代数中添加了表示关系的术语，并对它们进行了外延解释。它们并不是完全意义上的命题函数。皮尔斯的亲属是代表对象对的类别的“普通名称”（1883 年，328 页）。因此，亲属逻辑代表了传统逻辑的一般化，而不是与之背道而驰。

皮尔斯扩展了术语的代数以处理关系的特定特征。与其他术语一样，我们可以有合取、析取和否定的术语。如果 f 和 g 是亲属，则 fg 表示这样一类对（I，J），即 I 既与 f 有关又与 g 有关。类似地，析取亲属 f+g 表示（I，J），如果 I 与 J 之间存在 f 或 g 的关系，而 f′——术语 f 的否定——表示这样一类对（I，J），即 f 在它们之间不成立。皮尔斯还有一个组合运算符; ，如果存在某个实体 K，使得 f 表示（I，K）且 g 表示（K，J），则 f;g 表示（I，J）。

在《论论证的批判》（1892 年）中，皮尔斯采用了一个更接近命题函项的概念。在那里，他发展了“rhema”的概念。他说 rhema 就像一个相对术语，但它不是一个术语。它包含一个连词，也就是说，当与正确数量的参数连接时，它会产生一个断言。例如，“__被__从__购买__”是一个四位 rhema。将其应用于四个对象 a、b、c 和 d，就会产生一个断言，即 a 被 b 从 c 购买 d（ibid. 420）。

皮尔斯的 rhema 尤其有趣的一点是，他和弗雷格在讨论关系与它们的参数之间的关系时使用了相同的化学类比。他们都将关系（和属性）比作“具有不饱和键的原子或基团”。这个类比在弗雷格或皮尔斯那里对关系或属性到底意味着什么，有些不太清楚。

有关皮尔斯逻辑的更完整阐述，请参阅相关条目。

## 3. 命题函项与数理逻辑的诞生

在乔治·皮亚诺（1858-1932）的工作中，我们发现了朝着现代命题函项概念的另一个重要步骤。尽管他的工作不如弗雷格的（见下文）那样复杂，但它之所以重要，是因为对伯特兰·罗素产生了重要影响。

在他的《新方法呈现的算术原理》（1889）中，皮亚诺以现代意义上的命题联结词（蕴涵、否定、合取、析取和双条件）和命题常量（真和假）进行了介绍。

对我们来说更重要的是他对量化的处理。Peano 允许命题包含变量，也就是说，他使用开放公式。他没有对开放公式给出解释。他没有告诉我们它们代表什么。但是它们在他的量化理论中被使用。Peano 只有一个全称量词。他在《原理》中没有定义存在量词。量词总是附加在条件或双条件上。量化命题的形式总是

> *A* ⊃*x*,*y*,… *B*

 或者

> *A* =*x*,*y*,… *B*

Peano 将'A ⊃x,y,… B'解释为'无论 x,y,…是什么，从命题 A 可以推导出 B'，而'='是 Peano 的双条件，他按照常规方式从条件和合取定义。但他没有提供更多的解释。他将变量称为'不定对象'，但没有讨论这个或包含命题对象的命题（或命题函数）是什么。

## 4. Fregean 函项和概念

在弗雷格（Frege）那里，我们对句子有一个相当普遍的解释，即将其解释为应用于参数的函数。我在这里探讨的观点是他在 1890 年代发展起来的观点。

 考虑以下句子

> 我的狗在地板上睡觉。

这个句子，像所有的语言表达一样，既有意义又有指称。它的意义是一个抽象的对象——一个思想。它的指称是它的真值（目前为真）。我们将很快讨论弗雷格对思想的分析，但现在让我们来看看构成这个句子的表达式的指称。

根据弗雷格的观点，表达式“我的狗”是一个特指术语。它指代一个对象（我的狗，泽梅拉）。表达式“在地板上睡觉”指的是一个概念。概念是函数。在这种情况下，该概念是一个从对象到真值（也是对象）的函数。因此，我们可以将上述句子视为表示概念__在地板上睡觉应用于对象我的狗。

弗雷格的概念在现代意义上几乎是命题函数。弗雷格明确地将它们视为函数。像皮尔斯的 rhema 一样，概念是不完全的。它们在某种意义上是不完整的。尽管弗雷格在描述概念和其他函数的不完整性时从未超越隐喻，但有一件事是清楚的：对象和函数之间的区别是他形而上学中的主要分界线。函数有一些特殊之处，使它们与对象非常不同。

让我们再次考虑“我的狗在地板上睡觉”。弗雷格认为这个句子可以以不同的方式进行分析。我们可以将其视为表达概念“我的狗在地板上睡觉”应用于我的狗，而不是将其视为表达“我的狗在地板上睡觉”的应用。

> 我的狗在地板上睡觉__

 对象的应用

> * 地板*

（见弗雷格 1919 年）。弗雷格承认了现在在自然语言的逻辑分析中已经司空见惯的事实。我们可以将多个逻辑形式归属于一个句子。让我们称之为多重分析原则。弗雷格并不声称这个原则总是成立，但正如我们将看到的，现代类型理论确实声称如此。

关于句子的意义，它们也是将函项应用于对象的结果。"我的狗"的意义是一个抽象对象。"在地板上睡觉"的意义是一个从个体意义（如"我的狗"）到思想的函项（见弗雷格 1891 年）。"在地板上睡觉"的意义是一个概念意义。似乎多重分析原则对于意义和指称同样适用。然而，弗雷格有时会说，一个句子的组成表达式的意义实际上以某种方式包含在思想中。如果有不同的方式将句子分析为组成表达式，很难理解所有这些意义如何都包含在思想中。

除了概念和概念意义之外，弗雷格认为还有概念的扩展。弗雷格将概念的扩展称为“值域”。值域是由概念对每个参数的值确定的。因此，概念__的值域是一个记录了它对参数泽梅拉的值为真，对苏格拉底的值为假等等的狗。如果两个概念对每个参数的值都相同，那么它们的值域也相同。因此，值域是外延的。

关于弗雷格的概念理论及其与他的逻辑的关系的更多信息，请参阅关于弗雷格定理和算术基础的条目。

## 5. 命题函数的出现

“命题函项”一词首次出现在伯特兰·罗素的《数学原理》（1903）中。罗素通过讨论命题的种类来引入这个概念。考虑一种类型的命题，即关于某物是狗的命题。这种类型是“x 是一只狗”。这种类型是一个命题函项，它将任何对象 o 映射到 o 是一只狗的命题。

在这个时期，罗素认为命题是由个体、属性和关系构成的实体。命题“苏格拉底是一个人”由苏格拉底和“是一个人”的属性构成。在复杂的命题中，命题函项与命题之间的关系不太清晰。与弗雷格一样，罗素允许从命题中省略一个实体来抽象出一个命题函项。因此，我们可以将命题视为

> *如果苏格拉底喝了毒酒，他就会死亡的命题。*

作为表示函项应用的

> *x 喝毒药 ⊃ x 会死亡*

对苏格拉底，或函项的应用

> 苏格拉底将会喝 x ⊃ 苏格拉底将会死亡

至于毒芹，等等。换句话说，罗素接受多重分析原理。

在《原理》中，量词“所有”被分析为挑选出类别的指称短语的一部分（1903 年，72 页）。我们可以看到，这是 19 世纪外延逻辑学家的一种延续（见第 1 节）。但在稍后的作品中，比如《论指称》（1905 年），命题函数被说成是普遍命题的组成部分。根据这种分析，像“所有狗叫”这样的句子所表达的命题由命题函数 x 是一只狗 ⊃ x 叫和由量词短语“所有”表示的（命题函数的）函数组成。对我们来说，量化命题很有趣，因为它们包含命题函数作为组成部分。

不清楚罗素是否认为命题函数也作为单一命题的组成部分，例如若苏格拉底喝了毒酒他就会死。这些命题确实包含了属性，例如死亡，和关系，例如喝，但罗素是否认为这些是命题函数存在争议（参见 Linsky 1999 和 Landini 1998）。

## 6. 简单类型理论中的命题函数

在写《数学原理》时，罗素发现了以他名字命名的悖论。在我们讨论罗素悖论之前，让我们先讨论一下对角线化方法，通过这种方法产生了这个悖论和许多其他悖论。

集合 S 的幂集℘S 包含 S 的所有子集。Georg Cantor（1845-1918）使用对角线法证明了对于任何集合 S，℘S 的大小大于 S。

这是 Cantor 的证明。假设℘S 和 S 具有相同的大小。那么，根据集合论中“相同大小”的定义（更准确地说是“相同基数”），S 和℘S 之间存在一一对应的满射。这意味着存在一个函数将 S 的每个成员与℘S 的唯一成员配对，以便℘S 中没有剩余成员。让我们称这个函数为 f。那么，如果 x 是 S 的一个成员，f(x)就在℘S 中。现在，由于℘S 是 S 的幂集，x 可能在 f(x)中，也可能不在 f(x)中。现在，让我们定义一个集合 C：

> *C* = {*x* ∈ *S*: *x* ∉ *f*(*x*)}

显然，C 是 S 的子集，因此它属于℘S。根据假设，f 是满射-对于℘S 的每个成员 y，存在一个 x ∈ S，使得 f(x) = y。因此必定存在某个 c ∈ S，使得

> *f*(*c*) = *C*

 现在，要么

> *c* ∈ *C*

 或者

> *c* ∉ *C*.

假设 c 在 C 中。那么，根据 C 的定义，c 不在 f(c)中。也就是说，c ∉ C。但是，如果 c 不在 C 中，那么 c 也不在 f(c)中。所以，根据 C 的定义，c 在 C 中。因此，

> 当且仅当 c 不在 C 中时，c 在 C 中。

因此，假设一个集合与其幂集具有相同的大小会导致悖论，所以这个假设必须是错误的。

康托尔定理对命题函数理论有重要的影响。考虑一个具有域 D 的（一阶）逻辑语言的模型。语言的变量范围是 D 的成员。现在让我们向语言中添加谓词变量。它们代表命题函数。我们如何在模型中解释它们？这样做的标准方式——继承自外延逻辑传统——是让谓词变量范围是域的子集。谓词变量在标准模型中范围是域的所有子集，这个模型被称为二阶逻辑的“标准模型”。康托尔定理告诉我们，在标准模型中，谓词变量的域比个体变量的域要大。如果我们有谓词的谓词，那么三阶谓词的域就更大了。依此类推。

罗素悖论与康托尔定理密切相关。悖论有两个版本：（1）类版本；（2）命题函数版本。我只讨论命题函数版本的悖论。

在他的早期著作中，罗素希望逻辑成为一门普遍科学。它应该允许我们谈论一切事物的属性。他的意思是逻辑中的变量应该被认为是范围涵盖所有实体。但是命题函数，至少在《原理》中，是实体。所以变量应该范围涵盖它们。现在考虑谓词 R，使得

> (∀*x*)(*Rx* = ¬*xx*)

(Russell 的谓词 R 与 Cantor 的集合 C 非常相似。) 如果我们将 R 实例化并替换 x，我们得到

> *RR* ≡ ¬*RR*

看起来，将变量视为完全通用，并通过任何良构公式定义命题函数的自由使我们能够推导出矛盾。

罗素通过引入类型理论来阻止矛盾。这是一个简单的类型理论，只区分各种命题函数（或者在其类形式中，类）。为了更严谨和更现代化地阐述类型理论，我们将离开罗素自己的阐述，给出一个更严格和更现代化的版本。这将使我对分层类型理论和更现代化的类型理论的介绍更容易。

我们将使用一个基本类型 i（个体的类型），并按照以下方式定义类型：

1. i 是一种类型；
2. 如果 t1,…, t**n 是类型，那么 &lt;t1,…, t**n> 也是类型，其中 n ≥ 0。
3. 除了通过重复应用 (1) 和 (2) 之外，没有其他类型。

类型<t1，...，t**n&gt;是类型 t1，...，t**n 之间关系的类型。但是，为了简单起见，我们将其解释为将这些实体转化为命题的函数的类型。（注意，当 n = 0 时，空类型< >是命题的类型。）这个定义融入了良基结构的概念。这里没有循环。我们不能有一个将同一类型或更高类型的函数作为参数的函数。因此，简单类型理论禁止了导致罗素悖论产生的自我应用的方式。

类型层次结构与我们在康托尔定理讨论中看到的域层次结构相对应。一元谓词的类型是<code1001>；它的域是 D-个体的集合。谓词的谓词的类型是<<code1002>>，这对应于 D 的子集的域。依此类推。

更多信息，请参见罗素悖论的条目。

## 7. 命题函项在分层类型理论中

然而，在原则之后，罗素开始相信简单的类型理论是不够的。原因与说谎者悖论有关。假设'L'是一个命题的名称：

> L 是假的。

如果且仅当它为真时，此命题为假。这里的问题与自我引用有关，但仅仅通过简单的类型理论是无法避免的。对于简单类型只给出了命题函数类型的层次结构。在简单类型理论中，所有命题具有相同的类型。

分层类型理论的思想是引入命题的层次结构。在这个观点中，命题和命题函数有一个顺序。如果将命题函数应用于特定顺序的命题，则会产生一个更高层次的命题。每个函数的层次都必须高于其参数。因此，我们通过禁止命题在自身内部出现来避免了说谎者悖论。如果命题 p 在另一个命题中出现，作为函数的参数，如 x 为假，则结果命题的层次高于 p。

不幸的是，罗素从未给出分层类型理论的精确表述。也许最好的表述是由阿隆佐·邱奇（1976 年）提出的。[1]

罗素在采用类型分层理论的同时，放弃了命题。从大约 1908 年到 1918 年，虽然罗素保留了有真命题的观念，但他否认有假命题的存在。当我们思考一个假的命题时，比如说，泽梅拉是一只猫，我们并不是在思考一个假命题，而是在思考泽梅拉和“是一只猫”的属性。在一个专门用来分层命题的层次结构中宣称没有命题似乎有些奇怪。然而，一些解释者声称，罗素否认命题的存在不应该被认真对待，而且有很好的理由将《原理》解读为主要是关于命题的理论（参见 Church 1984）。

采纳类型分层理论的一个原因（即使不接受命题）是它可以有用地纳入替代量化理论。在替代解释中，普遍量化的公式，如(∀x)Fx，当且仅当它的所有实例 Fa1，Fa2，Fa3，...都为真时，才为真。类似地，(∀x)Fa 为真当且仅当它的至少一个实例为真。

考虑一个变量范围为谓词的替代解释，如公式(∀P)Pa。当且仅当它的所有实例为真时，该公式为真。在一个简单的类型理论中，变量 P 的类型是<i>，因为它的参数都是个体（或特指术语）。但是，函数(∀P)Px 的简单类型也是<i>。因此，(∀P)Pa 的一个实例就是(∀P)Pa 本身。替代解释要求实例比它们所属的公式更简单。在这种情况下，我们只是发现一个特定的公式只有在它为真时才为真。这是没有信息的，而且似乎是恶性循环的。

*为了阻止这种循环性，我们可以转向类型的分层理论。在分层理论中，命题函项（∀P）Px 的阶数为 2，因为存在量词绑定阶数为 1 的变量。通过这种方式，分层理论强制公式比它们的实例（参见 Hazen 和 Davoren 2000）更简单（至少在阶数方面）。

## 8. 在罗素的理论中，命题函项是什么？

1905 年之后，我们在罗素身上看到了一种简约的倾向。他希望从本体论中消除实体。在 1908 年至 1910 年之间的某个时候，他开始否认命题的存在，并且这种否认一直持续到他在 1918 年发展出命题作为图像或文字结构的理论为止。那么，命题函项的命运是什么？在没有命题存在的情况下，似乎很难理解命题函项是什么，但罗素的观点并不复杂。罗素只拒绝虚假命题。他保留了事实在他的本体论中。在《原理》中，命题函项现在被称为“偏函数”。也就是说，它们并不总是有值。例如，命题函项__是一只狗在以悉尼歌剧院作为参数时没有值，但当以我的狗作为参数时，它有一个值。因此，对虚假命题的拒绝对罗素的命题函项理论并不构成严重问题。

处理完这个问题后，让我们继续看看怀特海德和罗素认为命题函数的本质是什么。在《原理》中，他们说：

> 通过“命题函数”，我们指的是包含一个变量 x，并且一旦给 x 赋值就表达一个命题的东西。也就是说，它与命题的唯一区别在于它是模棱两可的：它包含一个未赋值的变量。（1910 年，38 页）。

在这段话中，他们似乎在说命题函数是一个模棱两可的命题。考虑到对命题的拒绝，这个观点尤其难以理解。厄奎特（2003 年）说，对于怀特海德和罗素来说，命题函数有点像一个公式。这似乎是正确的，因为命题函数包含变量。

但是在《原理》中，命题函数到底是什么？这是罗素学者们之间激烈辩论的问题。也许最有影响力的解释是建构性解释，由库尔特·哥德尔（1944 年）提出。根据这种解释，命题函数是某种人类构造物。它们依赖于我们思考它们或引用它们的能力。建构性解释的一个版本也可以在林斯基（1999 年）的著作中找到。在兰迪尼（1998 年）的著作中还有一种更名义主义的解释。在现实主义一方面，有阿隆佐·丘奇（1984 年）和沃伦·戈德法布（1989 年）提出的解释。戈德法布认为，《原理》的逻辑理论是由罗素试图找到命题函数的真实本质所驱动的，而这种本质是独立于我们对其思考的。戈德法布有一定道理，因为罗素的逻辑理论被认为是对事物本质的明晰表达。但是罗素似乎经常否认命题函数是真实实体。

## 9. 可能世界和命题函数

跳过几十年，将可能世界与集合论结合到逻辑学家的工具箱中，为他们提供了一个非常强大和灵活的语义框架。

首先，让我们回顾一下现代函数的概念。函数是一组有序对。如果<a,b>在函数 f 中，这意味着 f 对于参数 a 的值是 b，或者更简洁地说，f(a) = b。根据数学上对函数的定义，对于函数的每个参数，只有一个值。因此，如果有序对<a,b>在函数 f 中，而且<a,c>也在函数 f 中，那么 b 和 c 是相同的。

命题函数的构建始于可能世界和存在集合的假设。让我们称可能世界的集合为 W。命题是可能世界的集合。例如，Zermela 叫的命题是所有 Zermela 叫的世界集合。我们还需要假设存在一个可能个体的集合 I（即至少存在于一个可能世界中的个体）。现在，我们拥有了构建一个简单类型论层次结构的所有材料。

对于谓词的含义的通常处理与我在这里描述的方式略有不同。通常，谓词的内涵被认为是从可能世界到个体集合（或者对于二元关系，是从可能世界到个体有序对集合，对于三元关系，是从可能世界到有序三元组集合等）的函数。严格来说，这些函数不是命题函数，因为它们的值不是命题。但是对于每个这样的函数，我们可以通过使用一个叫做“柯里化”的过程来构造一个“等价”的命题函数，这个过程是以逻辑学家 Haskell Curry 的名字命名的。让我们从一个从世界到个体集合的函数 f 开始。然后我们可以构造相应的命题函数 g 如下。对于每个世界 w 和个体 i，我们构造 g 使得

> 如果且仅如果 i 在 f(w)中，那么 w 在 g(i)中。

因此，对谓词意义的更标准的处理实际上等同于使用命题函数。

## 10. 蒙塔古语义学

现在我们有了一整套命题函数的层次结构，我们应该为它们找一些工作来做。一个理论中命题函数发挥良好作用的例子是蒙塔古语义学，由理查德·蒙塔古在 20 世纪 60 年代末发展起来。

为了理解蒙塔古的方法，我们需要理解λ抽象。对于公式 A(x)，我们将表达式λx[A(x)]读作谓词表达式。它的扩展（在给定的可能世界中）是满足公式 A(x)的事物的集合。λ抽象器受到两个规则的控制，即α转换和β还原：

> （α转）A(a)（一个带有自由变量 x 的公式）可以被替换为λx[A(x)]a。

> (β-红) λx[A(x)]a 可以被 A(a) 替换（其中 x 在 A(x) 中对 a 是自由的）。

由于公式 A(x) 和 λx[A(x)]a 之间的等价性，人们可能会想知道为什么要在我们的语言中添加 lambda 抽象符号。在蒙塔古语义学中，答案与他将自然语言表达式直接翻译成逻辑语言的方式有关。我们很快将讨论这个问题，但首先让我们了解一些关于蒙塔古的内涵逻辑的知识。

蒙塔古在他的语言中添加了另外两个符号：∧ 和 ∨。表达式∧λx[Fx]表示从世界到个体集合的函数。给定一个可能的世界 w，∧λx[Fx]表示一个将 w 映射到 λx[Fx] 的外延的函数。运算符∨将形式为∧λx[Fx]的表达式“下降”到其在评估该表达式的世界中的外延。例如，在 w 中，∨∧λx[Fx] 的外延与 λx[Fx] 的外延完全相同。

蒙塔古语义学的特殊之处在于它可以以非常直接的方式用作自然语言的大片段的语义。考虑以下句子：

> 泽梅拉吠叫。

在蒙塔古语义学中，这个句子的意义被理解为其组成表达式的意义的结构。蒙塔古使用翻译规则来表示表达式的意义。在这里，我们使用以下翻译规则：

> Zermela 翻译成 λP[(∨P)z]

> barks 翻译成 ∧B

现在我们可以构建一个公式来表示“Zermela barks”的含义：

> λ*P*[(∨*P*)*z*]∧*B*

注意，在构建句子时，我们按照英语中它们出现的顺序放置表达式。使用λ抽象允许我们颠倒两个表达式的顺序，与正常的形式逻辑语言陈述的顺序相反（不包含λ）。现在我们可以使用β-还原得到：

> (∨∧*B*)*z*

现在我们应用蒙塔古的规则来消除∨∧：

> *Bz*

在这个过程中，我们从一个具有与原始英语句子相同顺序的表达式开始，然后将其简化为一个非常标准的逻辑公式。这告诉我们，“泽梅拉叫”这个句子的真值条件是由 Bz 所表示的命题的世界集合。当然，我们独立于蒙塔古的工作就已经知道了这一点，但重点在于蒙塔古的简化方法向我们展示了如何将英语句子的表面语法与我们逻辑语言的公式相连接。标准逻辑的公式还以一种非常明晰的方式显示其真值条件。因此，蒙塔古的简化方法向我们展示了自然语言句子与其真值条件之间的联系。

## 11. 范畴语法

范畴语法最早由卡扎米尔·阿杜基维奇（1890-1963）在 1930 年代构建，由耶霍舒亚·巴尔·希勒（1915-1975）和约阿希姆·兰贝克（1922-）在 1950 年代和 1960 年代发展。范畴语法是表示语言句法的逻辑工具。

在范畴语法中，语言的句法使用一种与蒙塔古语义学中的函数符号不同的泛化方式来表示。在蒙塔古语义学中，使用λ抽象符号将表达式的含义移动到该表达式在句子中所占位置。在范畴语法中，谓词和许多其他类型的表达式被视为排序的函数。但在范畴语法中，对函数应用其参数有两种不同的方式。

让我们看看这是如何工作的。让我们从原始类型 CN（普通名词）和 NP（名词短语）开始。不定冠词“a”接受一个普通名词（在其右侧）并返回一个 NP。因此它的类型是 NP/CN。当然，普通名词“dog”的类型是 CN。我们将“A 的类型是 T”写作“A⊢T”。所以我们有，

> **a** ⊢ NP/CN

 和

> 狗 ⊢ CN

为了将这两个命题放在一起，我们可以使用一种称为“演绎法则”的形式，该法则表示从一个命题 X ⊢ A/B 和一个命题 Y ⊢ B，我们可以推导出命题 X.Y ⊢ A。我们可以使用这个法则推导出：

> 一只狗 ⊢ NP

此外，不及物动词的类型为 NP\S，其中 S 是句子的类型。NP\S 中的反斜杠表示该表达式在左侧接受 NP 类型的参数，并返回类型为 S 的表达式。动词“barks”是不及物动词，也就是说，

> **barks** ⊢ NP\S

我们使用反斜杠的假言推理版本略有不同。它告诉我们，从 X ⊢ A*B*和 Y ⊢ A，我们可以推导出 Y.X ⊢ B。因此，我们现在可以得到，

> (**a**.**dog**).**barks** ⊢ S

这表明‘a dog barks’是一个句子。

用于以这种方式描述语法的逻辑是次结构逻辑。

我们在这里感兴趣的是，在范畴语法中，像“a”这样的限定词和动词被认为是函数，但它们在是否在右侧或左侧接受参数方面可能不同。在集合论概念中，函数被认为仅仅是通过将参数与值进行关联来思考。在范畴语法中，函数的结构比这更复杂。这是对逻辑中使用的函数概念的有趣概括。我们可以看到它还与命题函数的概念有重要联系，特别是在蒙塔古语义中的使用。

在范畴语法中，我们可以给一个语言表达式赋予多个类型。让我们称之为多类型原则。这里有一个由马克·斯特德曼提出的例子。考虑以下句子：

> 我不喜欢，而玛丽喜欢音乐剧。

“不喜欢”和“喜欢”这两个及物动词的类型是(NP\S)/NP，也就是说，它们在右侧接受一个名词短语，并返回一个动词短语。但是在“I dislike, and Mary enjoys musicals”这个例子中，动词与它们的宾语分离并与它们的宾语连接。斯特德曼通过提升主语“I”和“Mary”的类型来处理这个问题。通常，我们将这些词视为具有类型 NP，但在这里它们具有类型 S/(NP\S)。这是一个表达式的类型，它在右侧接受一个动词短语，并返回一个句子。然后，斯特德曼使用一个规则，使反斜杠具有传递性，并推导出“I.dislike”具有类型 S/NP，它在右侧接受一个名词短语（如“musicals”），并返回一个句子。

我们可以看到，多类型原理在分析其他类型理论的句子时也成立，比如简单类型理论。考虑以下句子：

> 玛丽吃了一个汉堡。

在解释这个句子时，我们可以将“Mary”视为类型 i，但我们也可以将其视为类型<>, 即个体命题函数的命题函数类型。我们还可以将“吃汉堡包”这个类型提升为<<>>，即个体命题函数的命题函数的命题函数类型。依此类推。多类型原理和多分析原理共同表明，一个表达式或句子可以被解释为具有非常多的逻辑形式。

##  12. 结论

这个关于命题函数的简要历史表明它们是有用的实体，并且在哲学和语言学中发挥了核心作用。我省略了命题函数的更多数学用途，例如在罗素和拉姆齐的类构造中以及高阶逻辑的一般模型处理中的应用。但是命题函数的主题是一个庞大的主题，我们无法在一篇百科全书文章中涵盖所有内容。

---
## Bibliography

### Important Works in which Propositional Functions Play a Key Role

* Church, Alonzo, forthcoming, *Alonzo Church's Logic of Sense and Denotation*, Cambridge: Cambridge University Press. (This has Church's papers in which he develops an intensional logic. In this logic the hierarchy of propositional functions plays an important role in dealing with paradoxes concerning propositional attitude reports—i.e., statements about what people believe, think, deny, etc.)
* Cresswell, M. J., 1973, *Logics and Languages*, London: Methuen. (This presents a simpler cousin of Montague semantics. The view is used as a semantics for propositional attitude reports in M. Cresswell, *Structured Meanings*, Cambridge, MA: MIT Press, 1985.)
* Frege, Gottlob, 1892, ‘On Concept and Object’, in *Collected Papers*, Oxford: Blackwell, 1991, 182–194. (This is the classic presentation of Frege's notion of a concept.)
* Goldblatt, Robert, 2011, *Quantifers, Propositions and Identity*, Cambridge: Cambridge University Press. (This presents a new semantics for modal predicate logic that uses propositions as well as worlds. Chapter 4 explores some formal reasons for also adding propositional functions to the semantics.)
* Montague, Richard, 1973, *Formal Philosophy*, New Haven: Yale University Press. (The latter half of the book is about Montague's intensional logic and his semantics for natural language.)
* Ramsey, Frank, 1925, ‘Foundations of Mathematics’, in Ramsey, *Foundations: Essays in Philosophy, Logic, Mathematics and Economics*, Atlantic Highlands, NJ: Humanities Press, 1978, 152–212. (This presents a theory of propositional functions as a key element of Ramsey's philosophy of mathematics.)
* Russell, Bertrand, 1903, *The Principles of Mathematics*, New York: Norton and Norton. (This is Russell's first sustained discussion of propositional functions.)
* Whitehead, Alfred North, and Bertrand Russell, 1910–1913 [1925], *Principia Mathematica*, Cambridge: Cambridge University Press. (This is a sustained, but extremely difficult, presentation of ramified type theory.)

### Textbooks in which Propositional Functions Feature Prominently

* Dowty, David R., Robert E. Wall, and Stanley Peters, 1981, *Introduction to Montague Semantics*, Dordrecht: Reidel, 1981. (This is a very clear textbook on Montague semantics.)
* Gamut, L. T. F., 1991, *Logic, Language, and Meaning*, Chicago: University of Chicago Press. (A very good and clearly written textbook that covers modal logic, categorial grammar, and Montague semantics, among other topics.)
* Hylton, Peter, 1990, *Russell, Idealism and the Emergence of Analytic Philosophy*, Oxford: Oxford University Press, 1990.
* Hylton, Peter, 2005, *Propositions, Functions, and Analysis: Selected Essays on Russell's Philosophy*, Oxford: Oxford University Press. (This work and Hylton 1990 are important texts on the interpretation of Russell's logic. Hylton maintains that Russell's notion of a propositional function does not fit with the rest of his metaphysics.)
* Moortgat, Michael, 1988, *Categorial Investigations: Logical and Linguistic Aspects of the Lambek Calculus*, Dordrecht: Foris Publications. (This is a dated but excellent book on categorial grammar.)

### Other Primary Sources:

* Boole, George, 1854, *An Investigation of the Laws of Thought on Which are Founded the Mathematical Theories of Logic and Probabilities*, New York: Dover, 1958.
* Frege, Gottlob, 1891, Letter to Edmund Husserl, dated 24 May 1891, in Frege, *Philosophical and Mathematical Correspondence*, Chicago: University of Chicago Press, 1980, 61–64.
* Frege, Gottlob, 1919,‘Notes for Ludwig Darmstaedter’, in Frege, *Posthumous Writings*, Chicago: University of Chicago Press, 1979, 253–257.
* Frege, Gottlob, *Collected Papers on Mathematics, Logic, and Philosophy*, Oxford: Blackwell, 1991.
* Jevons, W. S., 1890, *Pure Logic and other Minor Works*, Whitefish, MT: Kessinger Publishing, 2009.
* Peano, Giuseppe, 1889, ‘The Principles of Arithmetic Presented by a New Method’, in J. van Heijenoort (ed.), *From Frege to Gödel: A Sourcebook in Mathematical Logic, 1879–1931*, Cambridge, MA: Harvard University Press, 1981, 83–97.
* Peirce, C. S., 1883, ‘The Logic of Relatives’, in *Collected Papers of Charles Sanders Peirce* (Volume III: Exact Logic), Cambridge, MA: Harvard University Press, 1933, 195–209.
* Peirce, C. S., 1892, ‘The Critic of Arguments’, in *Collected Papers of Charles Sanders Peirce* (Volume III: Exact Logic), Cambridge, MA: Harvard University Press, 1933, 250–264.

### Other Works Cited

* Church, Alonzo, 1976, ‘Comparison of Russell's Resolution of the Semantical Antinomies with that of Tarski’ *The Journal of Symbolic Logic*, 41: 747–760.
* Church, Alonzo, 1984, ‘Russell's Theory of Identity of Propositions’ *Philosophia Naturalis*, 21: 513–22.
* Gödel, Kurt, 1944, ‘Russell's Mathematical Logic’, in P. A. Schilpp (ed.), *The Philosophy of Bertrand Russell*, New York: Tudor Publishing Co., 123–144.
* Goldfarb, Warren, 1989, ‘Russell's Reasons for Ramification’, in C. W. Savage and C. A. Anderson (eds.), *Rereading Russell: Essays on Bertrand Russell's Metaphysics and Epistemology*, Minneapolis: University of Minnesota Press, 24–40.
* Hazen, A. P. and J. M. Davoren, 2000, ‘Russell's 1925 Logic’ *Australasian Journal of Philosophy*, 78: 534–556.
* Kneale, William and Martha Kneale, 1984, *The Development of Logic*, Oxford: Oxford University Press.
* Landini, Gregory, 1998, *Russell's Hidden Substitutional Theory*, Oxford: Oxford University Press.
* Lewis, C. I., 1918, *A Survey of Symbolic Logic*, Berkeley: University of California Press.
* Linsky, Bernard, 1999, *Russell's Metaphysical Logic*, Stanford: CSLI.
* Steadman, Mark, 1991, ‘Type Raising and Directionality in Combinatory Grammar’ University of Pennsylvania Department of Computer and Information Science Technical Report MS-CIS-91-11.
* Urquhart, Alasdair, 2003, ‘The Theory of Types’, in N. Griffin (ed.), *Cambridge Companion to Russell*, Cambridge Cambridge University Press, 286–309.

## Academic Tools

> | ![sep man icon](../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=propositional-function). |
> | --- | --- |
> | ![sep man icon](../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/propositional-function/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=propositional-function&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](http://philpapers.org/sep/propositional-function/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[Frege, Gottlob: theorem and foundations for arithmetic](https://plato.stanford.edu/entries/frege-theorem/) | [logic: modal](https://plato.stanford.edu/entries/logic-modal/) | [logic: substructural](https://plato.stanford.edu/entries/logic-substructural/) | [Peirce, Charles Sanders: logic](https://plato.stanford.edu/entries/peirce-logic/) | [propositional attitude reports](https://plato.stanford.edu/entries/prop-attitude-reports/) | [Russell, Bertrand](https://plato.stanford.edu/entries/russell/) | [Russell’s paradox](https://plato.stanford.edu/entries/russell-paradox/)

[Copyright © 2011](https://plato.stanford.edu/info.html#c) by  
[Edwin Mares](http://www.vuw.ac.nz/phil/ed.html) <[*Edwin.Mares@vuw.ac.nz*](mailto:Edwin%2eMares%40vuw%2eac%2enz)>
