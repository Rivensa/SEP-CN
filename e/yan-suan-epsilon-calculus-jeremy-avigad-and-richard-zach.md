# ε 演算 epsilon calculus (Jeremy Avigad and Richard Zach)

*首次发表于 2002 年 5 月 3 日星期五；实质性修订于 2019 年 5 月 6 日星期一*

ε演算是由 David Hilbert 在数学基础研究中开发的逻辑形式主义。ε运算符是一个术语形成运算符，它取代了普通谓词逻辑中的量词。具体来说，在演算中，术语εxA 表示满足 A(x)的某个 x，如果存在的话。在 Hilbert 的计划中，ε术语扮演着理想元素的角色；Hilbert 的有限一致性证明的目的是提供一种从形式证明中去除这些术语的过程。这一过程的实施基于 Hilbert 的ε替换方法。然而，ε演算在其他情境中也有应用。ε演算的第一个普遍应用是在 Hilbert 的ε定理中，这进而为 Herbrand 定理的第一个正确证明提供了基础。最近，ε运算符的变体已被应用于语言学和语言哲学中，以处理指代代词。

***

## 概览

到了世纪之交，大卫·希尔伯特（David Hilbert）和亨利·庞加莱（Henri Poincaré）被认为是他们那一代最重要的数学家。希尔伯特的数学兴趣范围广泛，包括对数学基础的兴趣：他的《几何基础》于 1899 年出版，而在 1900 年国际数学家大会提出的问题清单中，有三个问题明确涉及基础性问题。

根据罗素悖论的发表，希尔伯特在 1904 年向第三届国际数学家大会发表了一篇演讲，在那里，他首次概述了他通过句法一致性证明为数学提供严格基础的计划。但直到 1917 年，他才认真地回到这个主题，当时他开始了一系列关于数学基础的讲座，并得到了保罗·伯奈斯的协助。尽管希尔伯特对罗素和怀特海德在《数学原理》中的工作印象深刻，但他逐渐确信逻辑主义试图将数学归纳为逻辑的尝试不可能成功，尤其是由于他们的可简化性公理的非逻辑特性。与此同时，他认为直觉主义对排中律的拒绝对数学是不可接受的。因此，为了应对逻辑和集合论悖论的发现引起的担忧，需要一种新的方法来证明现代数学方法的合理性。

到了 1920 年夏天，希尔伯特已经制定了这样一种方法。首先，现代数学方法应该在形式演绎系统中表示出来。其次，这些形式系统应该通过一种显式的、“有限性”特征的直接元数学论证来证明其句法一致性，而不是通过展示一个模型或将它们的一致性归约到另一个系统。这种方法被称为希尔伯特的计划。ε演算将提供该计划的第一个组成部分，而他的ε替换方法将提供第二个组成部分。

ε演算是一种基本形式的扩展，它将一阶谓词逻辑与一个“ε操作”结合起来，该操作为任何真实的存在性公式选择存在量词的见证者。这种扩展在保守意义上是保守的，因为它不会添加任何新的一阶后果。但是，相反地，量词可以用ε来定义，因此一阶逻辑可以用涉及ε操作的无量词推理来理解。正是这一后一特征使得这种演算在证明一致性方面非常方便。ε演算的适当扩展使得能够在无量词演算中嵌入更强大的数和集合的量化理论。希尔伯特期望能够证明这些扩展的一致性。

## 2. The Epsilon Calculus

在 1921 年（1922 年）的汉堡讲座中，希尔伯特首次提出了使用这种运算来处理算术形式系统中排中律原则的想法。这些思想在 1921 年至 1923 年的一系列讲座中发展成了ε演算和ε替换方法，并在希尔伯特（1923 年）的著作中得到了阐述。ε演算的最终呈现可在威廉·阿克曼的论文（1924 年）中找到。

本节将描述与一阶逻辑对应的演算版本，而对一阶和二阶算术的扩展将在下文中描述。

让 L 为一个一阶语言，也就是说，一个具有指定阶数的常量、函数和关系符号列表。L 的 ε 项集合和公式集合分别如下递归地同时定义：

* 每个常数 L 都是一个术语。
* 每个变量都是一个术语。
* 如果 s 和 t 是术语，则 s=t 是一个公式。
* 如果 s1,…,sk 是术语，而 F 是 L 的 k 元函数符号，那么 F(s1,…,sk) 就是一个术语。
* 如果 s1,…,sk 是术语，而 R 是 L 的 k 元关系符号，那么 R(s1,…,sk) 就是一个公式。
* 如果 A 和 B 是公式，那么 A∧B，A∨B，A→B 和¬A 也是公式。
* 如果 A 是一个公式，x 是一个变量，εxA 就是一个术语。

替换和自由变量以及约束变量的概念按照通常的方式进行定义；特别是，变量 x 在项εxA 中变为约束变量。预期的解释是，如果存在一个解，则εxA 表示满足 A 的某个 x。因此，ε项受以下公理（希尔伯特的“超限公理”）的支配：A(x)→A(εxA)此外，ε演算包括一套完整的公理，用于控制经典的命题连接词，以及控制相等符号的公理。演算的唯一规则是以下内容：

* 摩德斯·波能斯
* 从 A(x) 推导出 A(t)，对于任意项 t。

早期形式的ε演算（例如希尔伯特 1923 年提出的形式）使用了ε算子的双重形式，其中εxA 返回一个使 A(x)为假的值。上述版本是在阿克曼的博士论文（1924 年）中使用的，并已成为标准。

请注意，刚刚描述的演算是无量词的。量词可以定义如下：∃xA(x)≡A(εxA)∀xA(x)≡A(εx(¬A))可以从这些定义中推导出通常的量词公理和规则，因此上述定义用于将一阶逻辑嵌入到ε演算中。然而，反之则不成立：并非ε演算中的每个公式都是在此嵌入下普通量化公式的映像。因此，ε演算比谓词演算更具表现力，仅因为ε项可以以比量词更复杂的方式组合。请注意，刚刚描述的演算是无量词的。量词可以定义如下：∃xA(x)≡A(εxA)∀xA(x)≡A(εx(¬A))可以从这些定义中推导出通常的量词公理和规则，因此上述定义用于将一阶逻辑嵌入到ε演算中。然而，反之则不成立：并非ε演算中的每个公式都是在此嵌入下普通量化公式的映像。因此，ε演算比谓词演算更具表现力，仅因为ε项可以以比量词更复杂的方式组合。

值得注意的是，ε项是非确定性的。例如，在一个具有常量符号 a 和 b 的语言中，εx(x=a∨x=b)可以是 a 或 b，但演算完全不确定是哪种情况。可以向演算中添加一个外延性模式，∀x(A(x)↔B(x))→εxA=εxB，它断言ε算子为等价公式 A 和 B 分配相同的见证者。然而，在许多应用中，这个额外的模式是不必要的。

## 3. The Epsilon Theorems3. Epsilon 定理

希尔伯特和伯奈斯的《数学基础》第二卷（1939 年）提供了当时已经证明的关于ε-演算的结果。这包括对第一和第二ε定理的讨论，以及对一阶逻辑的应用，带有开放归纳的ε替换方法，以及使用ε-演算进行分析（即，二阶算术）的发展。

第一和第二ε定理如下：

第一个ε定理：假设Γ∪{A}是一组不涉及ε符号的无量词自由公式。如果在ε演算中从Γ推导出 A，则在无量词自由谓词逻辑中也可以推导出 A。

第二ε定理：假设Γ∪{A}是一组不涉及ε符号的公式集。如果在ε演算中从Γ推导出 A，则在谓词逻辑中也可以从Γ推导出 A。

在第一个ε定理中，“无量词谓词逻辑”旨在包括上述的替换规则，因此无量词谓词逻辑公理的行为类似于它们的全称闭包。由于ε演算包括一阶逻辑，第一个ε定理意味着通过一阶谓词逻辑进行的任何绕道，用于从无量词谓词逻辑公理推导出无量词定理，最终可以避免。第二个ε定理表明，通过ε演算进行的任何绕道，用于从谓词逻辑语言中的公理推导出谓词逻辑语言中的定理，也可以避免。

第一阿尔法定理确立了量词和ε总是可以从其他无量词公式的证明中消除，这对希尔伯特计划尤为重要，因为ε在数学中扮演着理想元素的角色。如果无量词公式对应于数学理论的“真实”部分，第一阿尔法定理表明，只要公理也是真实陈述，就可以从真实陈述的证明中消除理想元素。

希尔伯特和伯奈斯从第一个ε-定理中推导出某种一般性一致性定理，该定理明确了这一观念：设 F 是通过向谓词演算添加常量、函数和谓词符号以及真公理（这些公理是不含量词和ε的），并假设新语言中原子公式的真值是可判定的任何形式系统。那么 F 在强意义上是一致的，即每个可推导的不含量词和ε的公式都是真实的。希尔伯特和伯奈斯利用这个定理给出了初等几何的有限一致性证明（1939 年，第 1.4 节）。

在为算术和分析提供一致性证明时的困难在于将这一结果推广到公理中还包含理想元素（即ε项）的情况。

进一步阅读。关于ε-演算和ε定理的原始来源（Ackermann 1924，Hilbert＆Bernays 1939）仅以德文形式提供。Leisenring 1969 是一本相对现代的英文ε-演算介绍性著作。第一和第二ε定理在 Zach 2017 中有详细描述。Moser＆Zach 2006 对无等式情况进行了详细分析。给出了ε-演算的公理表述的原始证明。Maehara 1955 首次考虑了带有ε项的序演算。他展示了如何使用切割消除来证明第二ε定理，然后加强了该定理以包括外延性模式（Maehara 1957）。Baaz 等人在 2018 年提供了第一个ε定理的改进版本。有关文献中的错误更正（包括 Leisenring 的著作）可在 Flannagan 1975；Ferrari 1987；和 Yasuhara 1982 中找到。基于 Skolem 函数的ε-演算变体，因此与一阶逻辑兼容，已在 Davis＆Fechter 1991 中讨论。

## Herbrand's Theorem赫布兰定理

希尔伯特（Hilbert）和伯奈斯（Bernays）使用ε演算的方法来建立关于一阶逻辑的定理，这些定理本身不涉及ε演算。其中一个例子是赫布兰德定理（Herbrand 1930；参见 Buss 1995，Girard 1982 和 Buss 1998 的第 2.5 节）。通常这被表述为：如果一个存在公式∃x1…∃xkA(x1,…,xk)在一阶谓词逻辑（不包括相等性）中是可导出的，其中 A 是无量词的，那么存在项序列 t11,…,t1k,…,tn1,…,tnk，使得 A(t11,…,t1k)∨…∨A(tn1,…,tnk)是一个重言式。如果处理带相等性的一阶逻辑，则必须将“重言式”替换为“相等公理的替换实例的重言性推论”；我们将使用术语“准重言式”来描述这样的公式。

Herbrand 定理的这个版本是直接从 Hilbert 和 Bernays 的 Extended First Epsilon Theorem 推导出来的。然而，使用与第二 epsilon 定理证明相关的方法，Hilbert 和 Bernays 得出了一个更强的结果，类似于 Herbrand 最初的表述，提供了更多信息。要理解下面定理的两个部分，有助于考虑一个特定的例子。设 A 是公式。

∃x1∀x2∃x3∀x4B(x1,x2,x3,x4)其中 B 是无量词的。A 的否定等价于∀x1∃x2∀x3∃x4¬B(x1,x2,x3,x4)。通过斯科莱姆化，即使用函数符号来见证存在量词，我们得到∃f2,f4∀x1,x3¬B(x1,f2(x1),x3,f4(x1,x3))。对此取否定，我们看到原始公式“等价于”∀f2,f4∃x1,x3B(x1,f2(x1),x3,f4(x1,x3))。

在这种特定情况下，下面的定理第一条款表示，如果且仅当在扩展语言中存在一系列术语 t11，t13，…，tn1，tn3，具有 f2 和 f4 的公式 A 是一阶逻辑中可导出的，使得 B(t11,f2(t11),t13,f4(t11,t13))∨…∨B(tn1,f2(tn1),tn3,f4(tn1,tn3))是一个准永真式。

在这种特定情况下，下面的定理第二条款表明，如果且仅当在原始语言中存在变量序列 x12，x14，…，xn2，xn4 和术语 s11，s13，…，sn1，sn3，使得 B（s11，x12，s13，x14）∨…∨B（sn1，xn2，sn3，xn4）是一个准重言式，并且 A 可以仅使用以下描述的量词和幂等性规则从这个公式推导出来。

更一般地说，假设 A 是任意前纳式公式，形式为 Q1x1…QnxnB(x1,…,xn)，其中 B 是无量词的。然后 B 被称为 A 的矩阵，B 的一个实例是通过用 B 语言中的项替换其某些变量而获得的。A 的 Herbrand 标准形式 AH 是通过替换 B 语言中的项来获得的。

* 删除每个普遍量词
* 用 fi(x1i,…,xk(i)i)替换每个普遍量化的变量 xi，其中 x1i,…,xk(i)i 是对应于 A 中 Qi 之前（按顺序）的存在量化符号的变量，fi 是为此角色指定的新函数符号。

当我们提到 AH 矩阵的一个实例时，我们指的是通过在 AH 矩阵中的扩展语言中替换项而获得的公式。我们现在可以陈述希尔伯特和伯奈斯的制定。

Herbrand 定理。 (1) 如果且仅如果存在 AH 矩阵的实例的析取式是准重言式，那么前纽斯公式 A 在谓词演算中是可导的。

(2) 如果且仅如果存在 A 的矩阵实例的析取⋁jBj，使得⋁jBj 是准重言式，并且 A 可以从⋁jBj 中使用以下规则推导出

* 从 C1∨…∨Ci(t)∨…∨Cm 得出 C1∨…∨∃xCi(x)∨…∨Cm
* 从 C1∨…∨Ci(x)∨…∨Cm 得出 C1∨…∨∀xCi(x)∨…∨Cm（如果 x 不在 Cj 中，其中 j≠i）

以及∨的幂等性（从 C∨C∨D 推出 C∨D）。

Herbrand's theorem 也可以通过使用削减消去来获得，通过 Gentzen 的“中序定理”。然而，使用第二ε定理的证明具有成为 Herbrand 定理的第一个完整且正确的证明的特点。此外，很少有人认识到，基于削减消去的证明仅提供了 Herbrand 析取长度的上界，仅作为证明中削减等级和削减公式的复杂性的函数，而基于ε演算的证明获得的长度提供了作为超越公理应用次数的函数的上界，以及其中出现的ε项的等级和度。换句话说，Herbrand 析取的长度仅取决于所涉及的替换的量词复杂性，例如，并不取决于命题结构或证明的长度。

Herbrand 定理在本节开头陈述的版本实质上是(2)的特例，其中公式 A 是存在的。根据这个特例，(1)等同于这样一种断言：如果且仅如果 AH，则一阶谓词逻辑中的公式 A 是可导出的。这等价性的正向方向要容易得多；事实上，对于任何公式 A，A→AH 在谓词逻辑中是可导出的。证明逆向方向涉及消除 AH 中的额外函数符号，尤其在存在相等性的情况下更加困难。在这里，ε方法发挥着核心作用。

给定一个前束范式，Skolem 标准形式 AS 被对偶地定义为 AH，即通过用见证函数替换存在量化的变量。如果Γ是一个前束句集合，让ΓS 表示它们的 Skolem 标准形式集合。使用演绎定理和 Herbrand 定理，不难证明以下是成对等价的：Γ证明 AΓ证明 AHΓS 证明 AΓS 证明 AH

Herbrand 定理及相关方法的一个引人注目的应用可在 Luckhardt（1989）对 Roth 定理的分析中找到。有关 Herbrand 方法有用扩展的讨论，请参阅 Sieg 1991。这一模型论版本的讨论见于 Avigad 2002a。

## 5. The Epsilon Substitution Method and Arithmetic5. ε替换法和算术

如上所述，历史上，ε演算的主要兴趣在于作为获得一致性证明的手段。希尔伯特在 1917 年至 1918 年的讲座中已经指出，可以轻松地证明命题逻辑的一致性，方法是将命题变量和公式范围限定为真值 0 和 1，并将逻辑连接词解释为相应的算术运算。同样，可以证明谓词逻辑（或纯粹的ε演算）的一致性，方法是专门针对解释，其中论域具有单个元素。这些考虑建议了以下更一般的一致性证明计划：

* 将ε演算扩展，以便表示更大部分的数学。
* 使用有限方法，证明扩展系统中的每个证明都有一致的解释。

考虑算术语言，其中包括符号 0, 1, +, ×, <。除了定义基本符号的量词自由公理外，可以指定 epsilon 项 εxA(x) 挑选出满足 A 的最小值，如果存在的话，具有以下公理：(\*)A(x)→A(εxA(x))∧εxA(x)≤x 结果是一个足够强大的系统，可以解释一阶（Peano）算术。或者，可以将 epsilon 符号视为满足以下公理的符号：A(y)→A(εxA(x))∧εxA(x)≠y+1.

换句话说，如果存在任何满足 A(y) 的见证 y，则 ε 项返回一个其前任没有相同属性的值。显然，由 () 描述的 ε 项满足替代公理；反之，可以检查给定 A，满足替代公理的 εx(∃z≤xA(x)) 的值可用于解释 εxA(x) 在 () 中。可以进一步通过要求如果没有 A 的见证，则 ε 项返回 0 的公理 εxA(x)≠0→A(εxA(x)) 来确定 ε 项的含义。然而，在下面的讨论中，集中于 (\*) 是最方便的。

假设我们希望表明上述系统是一致的；换句话说，我们希望表明没有证明公式 0=1。通过将所有替换推到公理，并用常数 0 替换自由变量，我们只需表明从一组封闭公理的有限集合中没有命题证明 0=1。为此，只需表明，对于任何一组封闭公理的有限集合，可以以某种方式为术语分配数值，以便在解释下所有公理都为真。由于算术运算 + 和 × 可以以通常的方式解释，唯一的困难在于找到适当的值来分配给 epsilon 项。

希尔伯特的ε替换方法大致可以描述如下：

* 给定一组有限的公理集，从将所有的ε项解释为 0 开始。
* 在解释下述公理(\*)时找到一个例子，该例子在解释下是错误的。只有当存在一个术语 t，使得在解释中 A(t)为真，但是 A(εxA(x))为假或者 t 的值小于εxA(x)的值时，才会发生这种情况。
* 将“修复”分配给εxA(x)的值为 t，并重复这个过程。

一旦以有限接受的方式展示了这个连续“修复”过程终止，就获得了一个有限一致性证明。如果是这样，所有关键公式都是没有ε项的真公式。

这个基本思想（“希尔伯特方法”）最初由希尔伯特在他 1922 年的演讲（1923）中提出，并在 1922-1923 年的讲座中详细阐述。然而，在那里给出的例子仅涉及证明，其中无穷公理的所有实例对应于单个ε项 εxA(x)。挑战在于将这种方法扩展到不止一个ε项，到嵌套的ε项，最终到二阶ε项（以获得一致性证明，不仅仅是算术，而是分析）。

处理嵌套的ε项的困难可以描述如下。假设证明中的公理之一是超限公理 B(y)→B(εyB(y))εyB(y)可能会出现在证明中的其他公式中，特别是在其他超限公理中，例如 A(x,εyB(y))→A(εxA(x,εyB(y)),εyB(y))。因此，首先似乎有必要为εyB(y)找到正确的解释，然后再尝试为εxA(x,εyB(y))找到解释。然而，在证明中可能存在更复杂的模式，其中ε项可能出现。在确定εyB(y)的正确解释方面发挥作用的公理实例可能是 B(εxA(x,εyB(y)))→B(εyB(y))。如果 B(0)为假，则在程序的第一轮中，εyB(y)将被解释为 0。随后将εxA(x,0)的解释从 0 更改为 n，将导致将此实例解释为 B(n)→B(0)，如果 B(n)为真，则此公式将为假。因此，εyB(y)的解释将必须更正为 n，这反过来可能导致εxA(x,εyB(y))的解释不再是真公式。

这只是将希尔伯特的思想推广到一般情况中所涉及的困难的简要概述。Ackermann（1924）提供了这样一个概括，使用一种“回溯”的程序，每当在某个阶段出现新的解释导致需要纠正已在先前阶段找到的解释时。

Ackermann 的程序应用于二阶算术系统，其中，然而，二阶项被限制，以排除第二阶ε的交叉绑定。这大致相当于将算术理解限制为可用的集合形成原则（请参见本节末尾的讨论）。第二阶ε项出现了进一步的困难，很快就显而易见，证明是错误的。然而，直到 1930 年，当 Gödel 宣布他的不完备性结果时，希尔伯特学派中没有人意识到困难的程度。在那之前，人们认为证明（至少在 Ackermann 引入的一些修改，其中一些涉及 von Neumann（1927）版本的ε替换方法的思想）至少对于一阶部分是成立的。希尔伯特和 Bernays（1939）建议所使用的方法仅为一阶算术提供了一致性证明，其中包含开放归纳。1936 年，Gerhard Gentzen 成功地证明了基于谓词逻辑的一阶算术的一致性，而不使用ε符号。这个证明使用了直到ε0 的超限归纳。Ackermann（1940）后来能够调整 Gentzen 的想法，使用ε替换方法给出一致性证明的正确的一阶算术。

尽管阿克曼尝试为二阶算术提供一致性证明未能成功，但他们提供了对于在数学形式化中使用二阶ε项的更清晰理解。阿克曼使用了二阶ε项εf A(f)，其中 f 是一个函数变量。类比于一阶情况，εf A(f)是一个使得 A(f)为真的函数，例如，εf(x+f(x)=2x)是恒等函数 f(x)=x。再次类比于一阶情况，可以使用二阶ε项来解释二阶量词。特别地，对于任意二阶公式 A(x)，可以找到一个项 t(x)使得 A(x)↔t(x)=1 在演算中是可推导的（公式 A 可能有其他自由变量，在这种情况下，这些变量也会出现在项 t 中）。然后可以利用这一事实来解释包容原则。在一个带有函数符号的语言中，这些原则采取∃f∀x(A(x)↔f(x)=1)的形式，对于任意公式 A(x)。包容原则更常用以集合变量的形式表达，这时采取∃Y∀x(A(x)↔x∈Y)的形式，断言每个带参数的二阶公式都定义了一个集合。

分析，或二阶算术，是将一阶算术与任意二阶公式的理解模式扩展的理论。该理论是不可预测的，因为它允许使用量词定义自然数集，这些量词涵盖整个集合宇宙，包括隐含的正在定义的集合。通过限制理解公理中允许的公式类型，可以获得该理论的可预测片段。例如，与 Ackermann 讨论相关的限制对应于算术理解模式，其中公式不涉及二阶量词。有各种方法可以获得更强的分析片段，尽管在逻辑上是合理的。例如，通过将序数秩与集合变量相关联，可以获得分级分析；粗略地说，在给定秩的集合定义中，量词仅涵盖较低秩的集合，即那些在逻辑上先前定义的集合。

进一步阅读。Hilbert 和 Ackermann 的早期证明在 Zach 2003; 2004 中讨论。Von Neumann 的证明是 Bellotti 2016 的主题。Ackermann 的 1940 年证明在 Hilbert & Bernays 1970 和 Wang 1963 中讨论。Moser 2006 给出了现代的展示。epsilon 替换的早期应用是无反例解释 (Kreisel 1951)。

## 更近期的发展

在这一部分，我们讨论了用于获得强系统一致性结果的ε-替换方法的发展；这些结果属于数学性质。不幸的是，我们无法在这里讨论证明的细节，但想指出ε-替换方法并没有随着希尔伯特的计划而消失，目前有大量研究是在ε形式主义中进行的。

根廷的一致性证明为算术开创了一个被称为序数分析的研究领域，使用序数符号来衡量数学理论的强度的计划至今仍在进行。这对于延续希尔伯特的计划尤为重要，其目标是相对于建构性或准建构性系统证明经典数学的合理性。根廷的切割消除方法（以及由保罗·洛伦岑、彼得·诺维科夫和库尔特·舒特发展的无穷逻辑扩展）在很大程度上取代了这些追求中的ε替换方法。但ε演算方法提供了一种替代方法，仍在积极研究如何将希尔伯特-阿克曼方法扩展到更强的理论。总体模式保持不变：

1. 将研究理论嵌入适当的ε演算中。
2. 描述一个更新作业到ε项的过程。
3. 证明该过程是正规化的，即，对于任何一组术语，存在一系列更新的顺序，导致一个满足公理的赋值。

自上一步确保了原始理论的一致性，从基础的角度来看，人们对用于证明规范化的方法感兴趣。例如，通过将序数符号分配给程序中的步骤，以使符号的值随着每个步骤的进行而减少，可以获得序数分析。

在 1960 年代，Tait（1960, 1965, 2010）将 Ackermann 的方法扩展到使用超限归纳原理的算术扩展的序数分析中。这种方法的更简化和现代化版本可以在 Mints 2001 和 Avigad 2002b 中找到。最近，Mints、Tupailo 和 Buchholz 考虑了更强大但仍然可以预测地证明的分析片段，包括算术理解理论和Δ11-理解规则（Mints、Tupailo & Buchholz 1996；Mints & Tupailo 1999；另请参阅 Mints 2016）。Arai 2002 将ε替换方法扩展到允许沿着原始递归良序进行算术理解迭代的理论。特别是，他的工作为涉及超限层次和超限归纳的预测分析片段提供了序数分析。

一些初步步骤已经在使用ε替换方法分析不可预测理论中被采取（见 Arai 2003, 2006 和 Mints 2015）。

对步骤 3 的变体涉及显示规范化过程不会对更新的选择敏感，也就是说，任何更新序列都会终止。这被称为强规范化。Mints 1996 已经表明，许多考虑的程序具有这种更强的性质。

除了传统的、基础的证明理论分支外，今天对结构证明理论也有相当大的兴趣，这是该学科的一个分支，专注于逻辑演绎演算及其性质。这项研究与计算机科学相关的问题密切相关，涉及自动推导、函数式编程和计算机辅助验证。在这方面，Gentzen 风格的方法往往占主导地位（请参阅有关证明理论的条目）。但ε演算也可以提供有价值的见解；例如参见 Aguilera & Baaz 2019，或上文对 Herbrand 定理的讨论。

除了在证明理论中对ε演算的研究外，还应该提到两个应用。一个是在 Bourbaki 的《集合论》（1958 年）中使用ε符号。第二个，也许更具当前兴趣的是，在定理证明系统 HOL 和 Isabelle 中使用ε运算符，其中ε项的表达能力带来了显著的实际优势。

## 在语言学、哲学和非经典逻辑中的ε算子

将 epsilon 运算符解读为一个不定选择运算符（“存在一个 x 使得 A(x)”）暗示着它可能是形式语义中分析不定和定名词短语的有用工具。实际上，epsilon 符号已经被这样使用，并且这种应用在处理指代性引用方面特别有用。

考虑这个熟悉的例子

1. 每个拥有驴的农民都会打它。

这句话的普遍接受的分析是由普遍句给出

1. ∀x∀y(农夫(x)∧驴(y)∧拥有(x,y))→打(x,y))

缺点在于“一头驴”暗示了一个存在量词，因此分析应该在形式上与由 4 给出的第 3 句的分析相对应

1. 每个拥有驴的农民都很快乐
2. ∀x(农夫(x)∧∃y(驴(y)∧拥有(x,y))→快乐(x))

但最接近的可能形式化

1. ∀x((Farmer(x)∧∃y(Donkey(y)∧Owns(x,y))→Beats(x,y))

包含自由出现的 y。Evans 1980 建议，由于代词是指称表达式，因此应将其分析为确定描述；如果代词出现在条件句的后件中，则描述性条件由前件确定。这导致对(1)的以下 E 型分析：∀x((Farmer(x)∧∃y(Donkey(y)∧Owns(x,y))→(Beats(x,ιy(Donkey(y)∧Owns(x,y)))这里，ιx 是确定描述运算符，因此ιy(Donkey(y)∧Owns(x,y))是“x 拥有的驴；”。这种方法的问题在于，在标准分析中，确定描述具有唯一性条件，因此如果有一位农夫拥有多头驴，则(5)将为假。摆脱这一困境的方法是引入一个新的运算符，whe (whoever, whatever)，它作为一个泛化量词（Neale, 1990）：∀x((Farmer(x)∧∃y(Donkey(y)∧Owns(x,y))→(Beats(x,whey(Donkey(y)∧Owns(x,y)))

正如冯·霍辛格（1994）所指出的，这表明尼尔（Neale）致力于代词在确定描述（ι-表达式）和 whe-表达式之间的模糊性。霍辛格建议改用依赖于上下文的选择函数索引的ε运算符。根据这种方法，对（1）的分析是根据冯·霍辛格（1994）的指出，这表明尼尔（Neale）致力于代词在确定描述（ι-表达式）和 whe-表达式之间的模糊性。霍辛格建议改用依赖于上下文的选择函数索引的ε运算符。根据这种方法，对（1）的分析是

> 对于每个选择函数 i：∀x((Farmer(x)∧Owns(x,εiyDonkey(y))→Beats(x,εa∗yDonkey(y))

这里 a∗是一个取舍函数，它取决于 i 和条件语句的前提：如果 i 是一个选择函数，从所有驴中选择εiyDonkey(y)，那么εa∗yDonkey(y)从 x 拥有的驴的集合中进行选择。

这种使用由选择函数索引的ε运算符处理代词的方法使冯·豪辛格能够处理各种情况（见 Egli 和 von Heusinger，1995 年；von Heusinger，2000 年）。

最近几年，形式语义学中的ε-算子和一般选择函数的应用引起了广泛关注。Von Heusinger 和 Egli（2000a）列举了以下内容：问题的表示（Reinhart，1992），特定的不定代词（Reinhart 1992; 1997; Winter 1997），E 型代词（Hintikka 和 Kulas 1985; Slater 1986; Chierchia 1992，Egli 和 von Heusinger 1995）和定名词短语（von Heusinger 1997, 2004）。

有关语言学和语言哲学中ε算子的问题和应用的讨论，请参阅 B.H. Slater 关于ε演算的文章（见下面的其他互联网资源部分引用），以及 von Heusinger 和 Egli 2000 年以及 von Heusinger 和 Kempson 2004 年的合集。

ε演算的另一个应用是作为一种推理任意对象的一般逻辑。Meyer Viol（1995a）对ε演算与 Fine（1985）的任意对象理论进行了比较。事实上，这种联系并不难理解。鉴于等价性 ∀xA(x)≡ A(εx(¬A))，术语 εx(¬A) 在某种意义上是一个任意对象，即当 A 为真时，A 为真通常。

梅耶·维奥尔（Meyer Viol）（1995a，1995b）包含了对ε演算的进一步证明和模型论研究；具体来说是直觉主义ε演算。在这里，ε定理不再成立，即引入ε项会产生直觉主义逻辑的非保守扩展。在直觉主义逻辑中对ε算子的其他研究可在 Shirai（1971），Bell（1993a，1993b）和 DeVidi（1995）中找到。关于多值逻辑中的ε算子，请参阅 Mostowski（1963），关于模态ε演算，请参阅 Fitting（1975）。

进一步阅读。以下是一些与 epsilon 演算及其应用领域相关的语言学出版物列表。特别指出读者可参考 von Heusinger & Egli（编）2000 和 von Heusinger & Kempson（编）2004 进行进一步讨论和参考：Bell 1993a, 1993b; Chierchia 1992; DeVidi 1995; Egli & von Heusinger 1995; Fine 1985; Fitting 1975; von Heusinger 1994, 1997, 2000, 2004; von Heusinger & Egli（编）2000; von Heusinger & Kempson（编）2004; Hintikka & Kulas 1985; Kempson, Meyer Viol, & Gabbay 2001; Meyer Viol 1995a, 1995b, Neale 1990; Mostowski 1963; Reinhart 1992, 1997; Slater 1986, 1988, 1994, 2000; 以及 Winter 1997.

<!--md-padding-ignore-begin-->
## Bibliography

* Aguilera, J.P., Baaz, M., 2019, ‘Unsound inferences make proofs shorter’. *Journal of Symbolic Logic* 84: 102–122.
* Ackermann, W., 1924, ‘Begründung des ’’tertium non datur’’ mittels der Hilbertschen Theorie der Widerspruchsfreiheit’, *Mathematische Annalen*, 93: 1–36.
* –––, 1937–38, ‘Mengentheoretische Begründung der Logik’, *Mathematische Annalen*, 115: 1–22.
* –––, 1940, ‘Zur Widerspruchsfreiheit der Zahlentheorie’, *Mathematische Annalen*, 117: 162–194.
* Arai, T., 2002, ‘Epsilon substitution method for theories of jump hierarchies’, *Archive for Mathematical Logic*, 2: 123–153.
* –––, 2003, ‘Epsilon substitution method for ID1(Π01∨Σ01)’, *Annals of Pure and Applied Logic*, 121: 163–208.
* –––, 2006, ‘Epsilon substitution method for Π02-FIX. *Journal of Symbolic Logic* 71: 1155–1188
* Avigad, J., 2002a, ‘Saturated models of universal theories’, *Annals of Pure and Applied Logic*, 118: 219–234.
* –––, 2002b, ‘Update procedures and the 1-consistency of arithmetic’, *Mathematical Logic Quarterly*, 48: 3–13.
* Baaz, M., Leitsch, A., Lolic, A., 2018, ‘A sequent-calculus based formulation of the extended first epsilon theorem’, in: Artemov, S., Nerode, A. (eds.), *Logical Foundations of Computer Science*, Berlin: Springer, 55–71.
* Bell, J. L., 1993a. ‘Hilbert’s epsilon-operator and classical logic’, *Journal of Philosophical Logic*, 22: 1–18.
* –––, 1993b. ‘Hilbert’s epsilon operator in intuitionistic type theories’, *Mathematical Logic Quarterly*, 39: 323–337.
* Bellotti, L., 2016, ‘Von Neumann’s consistency proof’, *Review of Symbolic Logic*, 9: 429–455.
* Bourbaki, N., 1958, *Theorie des ensembles*, Paris: Hermann.
* Buss, S., 1995, ‘On Herbrand’s theorem’, *Logic and Computational Complexity* (Lecture Notes in Computer Science 960), Berlin: Springer, 195–209.
* ––– 1998, ‘Introduction to proof theory’, in: Buss (ed.), *The Handbook of Proof Theory*, Amsterdam: North-Holland, 1–78.
* Chierchia, G., 1992. ‘Anaphora and dynamic logic’. *Linguistics and Philosophy*, 15: 111–183.
* Davis, M., and R. Fechter, 1991, ‘A free variable version of the first-order predicate calculus’, *Journal of Logic and Computation*, 1: 431–451.
* DeVidi, D., 1995. ‘Intuitionistic ε- and τ-calculi’, *Mathematical Logic Quarterly* 41: 523–546.
* Egli, U., von Heusinger, K., 1995, ‘The epsilon operator and E-type pronouns’, in U. Egli *et al*. (eds.), *Lexical Knowledge in the Organization of Language*, Amsterdam: Benjamins, 121–141 (Current Issues in Linguistic Theory 114).
* Evans, G., 1980, ‘Pronouns’, *Linguistic Inquiry*, 11: 337–362.
* Ewald, W. B. (ed.), 1996, *From Kant to Hilbert. A Source Book in the Foundations of Mathematics*, Vol. 2, Oxford: Oxford University Press.
* Ferrari, P. L., 1987, ‘A note on a proof of Hilbert’s second ε-theorem’, *Journal of Symbolic Logic*, 52: 214–215.
* Fine, K., 1985. *Reasoning with Arbitrary Objects*, Oxford: Blackwell.
* Fitting, M., 1975. ‘A modal logic epsilon-calculus’, *Notre Dame Journal of Formal Logic*, 16: 1–16.
* Flannagan, T. B., 1975, ‘On an extension of Hilbert’s second ε-theorem’, *Journal of Symbolic Logic*, 40: 393–397.
* Girard, J.-Y., 1982, ‘Herbrand’s theorem and proof theory’, *Proceedings of the Herbrand Symposium*, Amsterdam: North-Holland, 29-38.
* Herbrand, J., 1930, *Recherches sur la thèorie de la dèmonstration*, *Dissertation*, University of Paris. English translation in Herbrand 1971, pp. 44–202.
* –––, 1971, *Logical Writings*, W. Goldfarb (ed.), Cambridge, Mass.: Harvard University Press.
* Hilbert, D., 1922, ‘Neubegründung der Mathematik: Erste Mitteilung’, *Abhandlungen aus dem Seminar der Hamburgischen Universität*, 1: 157–177, English translation in Mancosu, 1998, 198–214 and Ewald, 1996, 1115–1134.
* –––, 1923, ‘Die logischen Grundlagen der Mathematik’, *Mathematische Annalen*, 88: 151–165, English translation in Ewald, 1996, 1134–1148.
* Hilbert, D., Bernays, P., 1934, *Grundlagen der Mathematik*, Vol. 1, Berlin: Springer.
* –––, 1939, *Grundlagen der Mathematik*, Vol. 2, Berlin: Springer.
* –––, 1970, ‘Grundlagen der Mathematik’, Vol. 2, 2nd, edition, Berlin: Springer, Supplement V.
* Hintikka, J., Kulas, J., 1985. *Anaphora and Definite Descriptions: Two Applications of Game-Theoretical Semantics*, Dordrecht: Reidel.
* Kempson, R., Meyer Viol, W., and Gabbay, D., 2001.  *Dynamic Syntax: The Flow of Language Understanding*, Oxford: Blackwell.
* Kreisel, G, 1951, ‘On the interpretation of non-finitist proofs – part I’, *Journal of Symbolic Logic*, 16: 241–267.
* Leisenring, A. C., 1969, *Mathematical Logic and Hilbert’s Epsilon-Symbol*, London: Macdonald.
* Luckhardt, H., 1989, ‘Herbrand-Analysen zweier Beweise des Satzes von Roth: Polynomiale Anzahlschranken’, *Journal of Symbolic Logic*, 54: 234–263.
* Maehara, S., 1955, ‘The predicate calculus with ε-symbol’, *Journal of the Mathematical Society of Japan*, 7: 323–344.
* –––, 1957, ‘Equality axiom on Hilbert’s ε-symbol’, *Journal of the Faculty of Science*, University of Tokyo, Section 1, 7: 419–435.
* Mancosu, P. (ed.), 1998, *From Brouwer to Hilbert. The Debate on the Foundations of Mathematics in the 1920s*, Oxford: Oxford University Press.
* Meyer Viol, W. P. M., 1995a, *Instantial Logic. An Investigation into Reasoning with Instances*, Ph.D. thesis, University of Utrecht. ILLC Dissertation Series 1995–11.
* –––, 1995b. ‘A proof-theoretic treatment of assignments’, *Bulletin of the IGPL*, 3: 223–243.
* Mints, G., 1994, ‘Gentzen-type systems and Hilbert’s epsilon substitution method. I’, *Logic, Methodology and Philosophy of Science, IX* (Uppsala, 1991), Amsterdam: North-Holland, 91-122.
* –––, 1996, ‘Strong termination for the epsilon substitution method’, *Journal of Symbolic Logic*, 61: 1193–1205.
* –––, 2001, ‘The epsilon substitution method and continuity’, in W. Sieg *et al*. (eds.), *Reflections on the Foundations of Mathematics: Essays in Honor of Solomon Feferman*, Lecture Notes in Logic 15, Association for Symbolic Logic.
* –––, 2008, ‘Cut Elimination for a simple formulation of epsilon calculus’, *Annals of Pure and Applied Logic*,152 (1–3): 148–160.
* –––, 2013. ‘Epsilon substitution for first- and second-order predicate logic’, *Annals of Pure and Applied Logic*, 164: 733–739.
* –––, 2015. ‘Non-deterministic epsilon substitution method for PA and ID1’, in: Kahle, R., Rathjen, M. (Eds.), *Gentzen’s Centenary: The Quest for Consistency*. Berlin: Springer, pp. 479–500.
* Mints, G., Tupailo, S., 1999, ‘Epsilon-substitution method for the ramified language and Δ11-comprehension rule’, in A. Cantini *et al*. (eds.), *Logic and Foundations of Mathematics* (Florence, 1995), Dordrecht: Kluwer, 107–130.
* Mints, G., Tupailo, S., Buchholz, W., 1996, ‘Epsilon substitution method for elementary analysis’, *Archive for Mathematical Logic*, 35: 103–130.
* Moser, G., 2006, ‘Ackermann’s substitution method (remixed)’, *Annals of Pure and Applied Logic*, 142 (1–3): 1–18.
* Moser, G. and R. Zach, 2006, ‘The epsilon calculus and Herbrand complexity’, *Studia Logica*, 82(1): 133–155.
* Mostowski, A., 1963. ‘The Hilbert epsilon function in many-valued logics’, *Acta Philosophica Fennica*, 16: 169–188.
* Neale, S., 1990, *Descriptions*, Cambridge, MA: MIT Press.
* Reinhart, T., 1992. ‘Wh-in-situ: An apparent paradox’. In: P. Dekker and M. Stokhof (eds.). *Proceedings of the Eighth Amsterdam Colloquium*, December 17–20, 1991. ILLC. University of Amsterdam, 483–491.
* –––, 1997. ‘Quantifier scope: How labor is divided between QR and choice functions’. *Linguistics and Philosophy*, 20: 335–397.
* Shirai, K., 1971, ‘Intuitionistic predicate calculus with ε-symbol’, *Annals of the Japan Association for Philosophy of Science* 4: 49–67.
* Sieg, W., 1991, ‘Herbrand analyses’, *Archive for Mathematical Logic*, 30: 409–441.
* Slater, B. H., 1986, ‘E-type pronouns and ε-terms’, *Canadian Journal of Philosophy*, 16: 27–38.
* –––, 1988, ‘Hilbertian reference’, *Noûs*, 22: 283–97.
* –––, 1994, ‘The epsilon calculus’ problematic’, *Philosophical Papers*, 23: 217–42.
* –––, 2000, ‘Quantifier/variable-binding’, *Linguistics and Philosophy*, 23: 309–21.
* Tait, W. W., 1960, ‘The substitution method.’ *Journal of Symbolic Logic*, 30: 175–192.
* –––, 1965, ‘Functionals defined by transfinite recursion,’ *Journal of Symbolic Logic*, 30: 155–174.
* –––, 2010. ‘The substitution method revisited.’ in: S. Feferman and W. Sieg (eds.), *Proofs, Categories and Computations: Essays in Honor of Grigori Mints*, London: College Publications, pp. 131–14.
* von Heusinger, K., 1994, Review of Neale (1990). *Linguistics* 32: 378–385.
* –––, 1997. ‘Definite descriptions and choice functions’. In: S. Akama (ed.). *Logic, Language and Computation*, Dordrecht: Kluwer, 61–91.
* –––, 2000, ‘The Reference of Indefinites’, in von Heusinger and Egli, (2000), 265–284.
* –––, 2004, ‘Choice functions and the anaphoric semantics of definite NPs’, *Research in Language and Computation*, 2: 309–329.
* von Heusinger, K., Egli, U., (eds.), 2000. *Reference and Anaphoric Relations*, Dordrecht: Kluwer.
* –––, 2000a. ‘Introduction: Reference and the Semantics of Anaphora’, in von Heusinger and Egli (2000), 1–13.
* von Heusinger, K., Kempson, R., (eds.), 2004. *Choice Functions in Semantics*, Special Issue of *Research on Language and Computation* 2(3).
* von Neumann, J., 1927, ‘Zur Hilbertschen Beweistheorie’, *Mathematische Zeitschrift*, 26: 1–46.
* Wang, H., 1963, *A Survey of Mathematical Logic*, Peking: Science Press.
* Winter, Y., 1997. ‘Choice functions and the scopal semantics of indefinites’. *Linguistics and Philosophy*, 20: 399–467.
* Yasuhara, M., 1982, ‘Cut elimination in ε-calculi’, *Zeitschrift für mathematische Logik und Grundlagen der Mathematik*, 28: 311–316.
* Zach, R., 2003, ‘The practice of finitism. Epsilon calculus and consistency proofs in Hilbert’s Program’, *Synthese*, 137: 211–259.
* –––, 2004. ‘Hilbert’s “Verunglückter Beweis”, the first epsilon theorem, and consistency proofs’. *History and Philosophy of Logic*, 25, 79–94.
* –––, 2017. ‘Semantics and proof theory of the epsilon calculus’, in: Ghosh, S., Prasad, S. (Eds.), *Logic and Its Applications. ICLA 2017*, LNCS. Springer, Berlin, Heidelberg, pp. 27–47.

## Academic Tools

| ![sep man icon](../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=epsilon-calculus).                                                                      |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![sep man icon](../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/epsilon-calculus/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
| ![inpho icon](../.gitbook/assets/inpho.png)         | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=epsilon-calculus\&redirect=True) at the Internet Philosophy Ontology Project (InPhO).   |
| ![phil papers icon](../.gitbook/assets/pp.png)      | [Enhanced bibliography for this entry](https://philpapers.org/sep/epsilon-calculus/) at [PhilPapers](https://philpapers.org/), with links to its database.                          |

## Other Internet Resources

* [Epsilon Calculi](http://www.utm.edu/research/iep/e/ep-calc.htm) by B. Hartley Slater (Internet Encyclopedia of Philosophy).

Please contact the authors with further suggestions.

## Related Entries

[anaphora](https://plato.stanford.edu/entries/anaphora/) | finitism | Hilbert, David | [Hilbert, David: program in the foundations of mathematics](https://plato.stanford.edu/entries/hilbert-program/) | [logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [mathematics, philosophy of](https://plato.stanford.edu/entries/philosophy-mathematics/) | [proof theory](https://plato.stanford.edu/entries/proof-theory/) | [quantifiers and quantification](https://plato.stanford.edu/entries/quantification/)

[Copyright © 2019](https://plato.stanford.edu/info.html#c) by\
[Jeremy Avigad](http://www.andrew.cmu.edu/\~avigad) <[*avigad@cmu.edu*](mailto:avigad%40cmu%2eedu)>\
[Richard Zach](https://richardzach.org/) <[*rzach@ucalgary.ca*](mailto:rzach%40ucalgary%2eca)>
<!--md-padding-ignore-end-->
