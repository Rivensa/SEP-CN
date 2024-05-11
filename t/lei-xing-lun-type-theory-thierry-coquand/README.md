# 类型论 type theory (Thierry Coquand)

*首次发表于 2006 年 2 月 8 日；实质性修订于 2022 年 9 月 6 日*

类型论的主题在逻辑学和计算机科学中都是基础性的。在这里，我们仅限于概述一些在逻辑学中重要的方面。关于计算机科学中类型的重要性，我们可以参考 Reynolds 1983 年和 1985 年的著作。

---

## 1. 悖论和罗素的类型理论

类型理论是由罗素引入的，目的是解决他在集合论中发现的一些矛盾，并在罗素 1903 年的《附录 B：类型学说》中引入。这个矛盾是通过分析康托尔的一个定理得到的，该定理指出没有映射能够将一个集合映射到其自身的真子集。

F:X→Pow(X)

（其中 Pow(X)是类 X 的子类的集合）可以是满射的；也就是说，F 不能使得 Pow(X)的每个成员 b 等于 F(a)，其中 a 是 X 的元素。这可以用“直观地”表达为 X 的子集比 X 的元素更多的事实。这个事实的证明非常简单和基础，值得在这里给出。考虑 X 的以下子集：

A={x∈X∣x∉F(x)}.

这个子集不能在 F 的范围内。因为如果对于某个 a，A=F(a)，那么 a∈F(a)当且仅当 a∈A 当且仅当 a∉F(a)

这是一个矛盾。

which is a contradiction.

有几点需要注意。首先，证明不使用排中律，因此在直觉主义下是有效的。其次，所使用的方法，称为对角化，在杜布瓦雷蒙德的工作中已经存在，用于构建比给定函数序列中的任何函数增长更快的实函数。

罗素分析了如果我们将这个定理应用于 A 是所有类的情况会发生什么，承认存在这样一个类。然后，他被引导去考虑那些不属于自己的特殊类的类。

(*)R={w∣w∉w}.

 然后我们有

 R∈R 当且仅当 R∉R。

事实上，康托尔似乎已经意识到所有集合的类本身不能被视为一个集合。

罗素将这个问题传达给弗雷格，并且他们的信件连同弗雷格的回答一起出现在 1967 年的范·海耶诺特的著作中。重要的是要意识到，(*)的表述并不适用于弗雷格的系统。正如弗雷格在回信中写道，“一个谓词被自身所谓”这个表达并不准确。弗雷格在谓词（概念）和对象之间有一个区别。一个（一阶）谓词适用于一个对象，但它不能有一个谓词作为参数。在弗雷格的系统中，悖论的确切表述使用了谓词 P 的外延的概念，我们将其指定为εP。谓词的外延本身就是一个对象。重要的公理 V 是：

（公理 V）εP=εQ≡∀x[P(x)≡Q(x)]

这个公理断言，如果且仅如果 P 和 Q 在实质上等价，那么 P 的外延就等于 Q 的外延。然后我们可以通过定义谓词来在弗雷格的系统中翻译罗素的悖论(*)。

 R(x) 当且仅当 ∃P[x=εP∧¬P(x)]

可以通过关键地使用公理 V 进行检验，得出

R(εR)≡¬R(εR)

而且我们也有一个矛盾。(注意，在定义谓词 R 时，我们使用了谓词的非谓词存在量化。可以证明，Frege 系统的谓词版本是一致的（参见 Heck 1996 和进一步的改进 Ferreira 2002）。

从这个解释中可以清楚地看出，类型的概念已经存在于 Frege 的工作中：我们在那里找到了对象、谓词（或概念）、谓词的谓词等的区别。（这一点在 Quine 1940 中强调。）这个层次结构被 Russell（1959）称为“外延层次结构”，Russell 认识到它的必要性是他悖论的结果。

## 2. 简单类型论和λ演算

正如我们在上面看到的，对象、谓词、谓词的谓词等的区别似乎足以阻止罗素悖论（这一点被克维斯特克和拉姆齐所认可）。我们首先描述类型结构，即在《原理》中的结构，然后在本节中介绍基于λ演算的丘奇 1940 年的优雅表述。类型可以定义为

1. i 是个例的类型
2. () 是命题的类型
3. 如果 A1，...，An 是类型，则(A1，...，An)是相应类型 A1，...，An 的 n 元关系的类型

例如，个体之间的二元关系的类型是(i,i)，二元连接词的类型是((),())，个体之间的量词的类型是((i))

为了形成命题，我们使用这种类型结构：因此，如果 R 是类型(A1，...，An)，ai 是类型 Ai（i=1，...，n），则 R(a1，...，an)是一个命题。这个限制使得无法形成形如 P(P)的命题：P 的类型应该是(A)的形式，P 只能应用于类型为 A 的参数，因此不能应用于自身，因为 A 与(A)不同。

然而，简单的类型论并不是谓词性的：我们可以通过∀P[P(x)⊃P(y)]来定义一个类型为(i,i)的对象 Q(x,y)

 假设我们有两个个例 a 和 b，使得 Q(a,b)成立。我们可以定义 P(x)为 Q(x,a)。很明显，P(a)成立，因为它是 Q(a,a)。因此，P(b)也成立。我们以一种非谓词性的方式证明了 Q(a,b)蕴含 Q(b,a)。

Assume that we have two individuals a and b such that Q(a,b) holds. We can define P(x) to be Q(x,a). It is then clear that P(a) holds, since it is Q(a,a). Hence P(b) holds as well. We have proved, in an impredicative way, that Q(a,b) implies Q(b,a).

保留只有类、类的类等概念的替代简化表述是由哥德尔和塔斯基提出的。实际上，哥德尔在他 1931 年关于形式不可判定命题的论文中使用了这个更简化的版本。对于无法将一阶逻辑的完备性定理推广到类型论的启发性论证可能是发现不可判定命题的动机之一（参见他 1930 年在哥尼斯堡的演讲结尾，详见哥德尔的《哥德尔文集》第三卷，Awodey 和 Carus 2001 以及 Goldfarb 2005）。塔斯基在类型论中有一个表达可定义性定理的版本（参见 Hodges 2008）。详见 Schiemer 和 Reck 2013。

我们有类型为 0 的对象，表示个体；类型为 1 的对象，表示个体类；类型为 2 的对象，表示个体类的类，依此类推。两个或更多个参数的函数（如关系）不需要包含在原始对象中，因为可以将关系定义为有序对的类，将有序对定义为类的类。例如，个体 a、b 的有序对可以定义为{{a},{a,b}}，其中{x,y}表示其唯一元素为 x 和 y 的类（Wiener 1914 曾建议将关系简化为类）。在这个系统中，所有命题的形式都是 a(b)，其中 a 是类型为 n+1 的符号，b 是类型为 n 的符号。因此，这个系统是建立在任意类或给定域的对象子集的概念上，并且基于给定域的所有子集的集合可以形成下一个类型的新域的事实。从给定的个体域开始，然后迭代这个过程。正如 Scott 1993 中强调的那样，在集合论中，形成子集的这个过程会迭代到超限。

在这些版本的类型论中，就像在集合论中一样，函数不是原始对象，而是表示为函数关系。例如，加法函数被表示为一个三元关系，类型为(i,i,i)的对象。1940 年，丘奇提出了一个优雅的简单类型论的公式，通过将函数引入为原始对象来扩展它。它使用了λ-演算符号（Barendregt 1997）。由于这样的公式在计算机科学中很重要，与范畴论的联系以及马丁-勒夫类型论，我们会详细描述它。在这个公式中，谓词被看作是一种特殊类型的函数（命题函数），这个想法可以追溯到弗雷格（例如，奎因 1940 年）。此外，函数的概念被看作比谓词和关系的概念更为原始，函数不再被定义为一种特殊类型的关系。（Oppenheimer 和 Zalta 2011 年提出了一些反对这种原始函数表示的论据。）该系统的类型如下递归地定义：

1. 有两种基本类型 i（个例的类型）和 o（命题的类型）
2. 如果 A、B 是类型，则 A→B，从 A 到 B 的函数的类型是一种类型

我们可以通过这种方式形成类型：

| i→o      | (谓词的类型) |
| ----------- | -------------- |
| (i→o)→o | 谓词的类型   |

对应于类型 (i) 和 ((i))，但也包括新的类型

| i→i      | (type of functions) |
| ----------- | --------------------- |
| (i→i)→i | (函数类型)          |

写成这样很方便

A1,…,An→B

 对于

A1→(A2→…→(An→B))

 以这种方式

A1,…,An→o

对应于类型 (A1,…,An)。

一阶逻辑仅考虑形式为类型的类型。

| i,…,i→i | (函数符号的类型),    | and |
| ----------- | ---------------------- | ----- |
| i,…,i→o | (谓词类型，关系符号) |     |

 注意

A→B→C

 代表

A→(B→C)

（从右结合）.

对于这个逻辑的术语，我们不会遵循丘奇的解释，而是采用了一种略微变化的解释，由柯里提出（在丘奇的论文出现之前就有类似的想法），并且在 R. Hindley 的类型论书中详细介绍。像丘奇一样，我们使用λ-演算，它为函数提供了一般的符号表示法

M::=x∣MM∣λx.M

在这里，我们使用了所谓的 BNF 表示法，在计算科学中非常方便。这提供了λ-项的语法规范，当展开时意味着：

* 每个变量都是一个函数符号；
* 两个函数符号的并置是一个函数符号；
* 每个λx.M 都是一个函数符号；
* 没有其他函数符号。

函数应用的表示法 MN 与数学表示法有些不同，数学表示法应为 M(N)。一般来说，

M1M2M3

 代表

(M1M2)M3

(从左到右结合)。术语λx.M 表示将 N 关联到 M[x:=N]的函数。这种表示法非常方便，让人想知道为什么在数学中没有广泛使用。λ-演算的主要方程式是(β-转换)

(λx.M)N=M[x:=N]

表达了将λx.M 视为函数的含义。我们使用 M[x:=N]作为符号表示，表示当 N 替换矩阵 M 中的变量 x 时得到的表达式的值。通常将这个等式视为重写规则（β-还原）。

(λx.M)N→M[x:=N]

在无类型的λ演算中，这样的重写可能不会终止。典型的例子是由术语Δ=λx.xx 和应用程序给出的

ΔΔ→ΔΔ

（注意与罗素悖论的相似之处。）然后，Curry 的想法是将类型视为对λ项的谓词，写作 M:A 来表示 M 满足谓词/类型 A 的含义。

N:A→B

 然后是

 ∀M，如果 M:A，则 NM:B

证明以下规则

N:A→BM:ANM:BM:B[x:A]λx.M:A→B

通常情况下，我们使用形式为的判断

x1:A1,...,xn:An⊢M:A

其中 x1,...,xn 是不同的变量，而 M 是一个在 x1,...,xn 之间具有所有自由变量的术语。为了能够得到丘奇的系统，需要添加一些常量以形成命题。通常

| not:       | o→o      |
| ------------ | ----------- |
| imply:     | o→o→o   |
| 和：       | o→o→o   |
| 对于所有： | (A→o)→o |

 该术语

λx.¬(xx)

代表不适用于自身的谓词的谓词。然而，这个术语没有类型，也就是说，不可能找到一个 A 使得

λx.¬(xx):(A→o)→o

这是表达罗素悖论无法表达的事实的形式表达式。莱布尼兹相等性

Q:i→i→o

将被定义为

Q=λx.λy.∀(λP.蕴含(Px)(Py))

通常人们会写∀x[M]而不是∀(λx.M)，然后可以将 Q 的定义重写为

Q=λx.λy.∀P[imply(Px)(Py)]

这个例子再次说明我们可以在简单类型论中制定非预测性定义。

使用λ-项和β-规约最方便，用于表示简单类型论中所需的复杂替换规则。例如，如果我们想要在命题中将谓词λx.Qax 替换为 P，则得到

imply(Pa)(Pb)

 我们得到

暗示((λx.Qax)a)((λx.Qax)b)

 并且，使用β-还原，

 暗示(Qaa)(Qab)

简单类型论总结起来禁止自我应用，但不禁止在非预测定义中存在的循环性。

λ-演算形式主义还允许更清晰地分析罗素悖论。我们可以将其视为谓词的定义。

Rx=¬(xx)

如果我们将β-还原视为展开定义的过程，我们会发现对于理解 R R 的定义已经存在问题。

RR→¬(RR)→¬(¬(RR))→…

从某种意义上说，我们有一个非良基定义，这与矛盾（一个与其否定等价的命题）一样有问题。一个重要的定理，即归一化定理，表明这在简单类型中是不可能发生的：如果我们有 M:A，则 M 以强方式可归一化（从 M 开始的任何还原序列都会终止）。

For more information on this topic, we refer to the entry on Church’s simple type theory.

## 3. Ramified Hierarchy and Impredicative Principles

Russell introduced another hierarchy, that was not motivated by any formal paradoxes expressed in a formal system, but rather by the fear of “circularity” and by informal paradoxes similar to the paradox of the liar. If a man says “I am lying”, then we have a situation reminiscent of Russell’s paradox: a proposition which is equivalent to its own negation. Another informal such paradoxical situation is obtained if we define an integer to be the “least integer not definable in less than 100 words”. In order to avoid such informal paradoxes, Russell thought it necessary to introduce another kind of hierarchy, the so-called “ramified hierarchy”. The need for such a hierarchy is hinted in Appendix B of Russell 1903. Interestingly this is connected there to the question of the identity of equivalent propositions and of the logical product of a class of propositions. A thorough discussion can be found in Chapter 10 of Russell 1959. Since this notion of ramified hierarchy has been extremely influential in logic and especially proof theory, we describe it in some details.

为了进一步激励这种层次结构，这里有一个由罗素提出的例子。如果我们说

 拿破仑是科西嘉人。

在这个句子中，我们并不是指任何属性的集合。被称为“是科西嘉人”的属性被称为谓词性的。另一方面，如果我们说

拿破仑具备了一位伟大将军的所有品质

我们指的是一系列的品质。被称为“具备一位伟大将军的所有品质”的属性被认为是不可预言的。

另一个例子，也来自罗素，展示了不可预言属性可能导致类似谬误悖论的问题。假设我们提出以下定义

典型的英国人是那些拥有大多数英国人所拥有属性的人。

很明显，大多数英国人并不拥有大多数英国人所拥有的所有属性。因此，根据这个定义，一个典型的英国人应该是非典型的。根据罗素的观点，问题在于“典型”一词是通过参考所有属性来定义的，并被视为一种属性。（值得注意的是，在定义随机数的概念时，类似的问题也会出现，参见马丁-勒夫的《关于构造性数学的注释》（1970）。）罗素引入了分层体系来处理这种不确定性定义的循环性。应该区分一阶属性（如科西嘉人）与不涉及属性的总体，并考虑到二阶属性仅涉及一阶属性的总体。然后可以引入涉及二阶属性总体的三阶属性，依此类推。这显然消除了与不确定性定义相关的所有循环性。

大约在同一时间，庞加莱进行了类似的分析。他强调了“陈述性”分类的重要性，并且不使用对该类的量化来定义类的元素（庞加莱 1909 年）。庞加莱使用了以下例子。假设我们有一个集合，其中包含元素 0、1 和一个满足条件的操作+。

x+0=0x+(y+1)=(x+y)+1

假设一个属性是归纳的，如果它对于 0 成立，并且对于 x+1 成立，如果它对于 x 成立。

一个非谓词性的、潜在的“危险”的定义是，如果一个元素满足所有归纳属性，则将其定义为一个数字。然后很容易证明这个“成为一个数字”的属性本身是归纳的。确实，0 是一个数字，因为它满足所有归纳属性，如果 x 满足所有归纳属性，那么 x+1 也满足。类似地，如果 x，y 是数字，那么 x+y 也是一个数字。确实，属性 Q(z)，即 x+z 是一个数字，是归纳的：Q(0)成立，因为 x+0=x，如果 x+z 是一个数字，那么 x+(z+1)=(x+z)+1 也是。然而，整个论证是循环的，因为“成为一个数字”的属性不是谓词性的，应该持怀疑态度。

相反，应该引入一种分层的属性和数字体系。一开始，只有一阶归纳属性，其定义中不涉及属性的总体，定义一阶数为满足所有一阶归纳属性的元素。接下来可以考虑二阶归纳属性，可以涉及一阶属性的集合，以及满足二阶归纳属性的二阶数。然后可以类似地考虑三阶数，依此类推。庞加莱强调了一个事实，即二阶数从逻辑上来说也是一阶数，更一般地，n+1 阶数从逻辑上来说也是 n 阶数。因此，我们有一系列越来越受限制的属性：一阶、二阶归纳属性，以及一系列越来越受限制的对象集合：一阶、二阶数等。此外，“是 n 阶数”的属性本身也是 n+1 阶归纳属性。

似乎无法证明如果 x、y 是 n 阶数，则 x+y 是 n 阶数。另一方面，可以证明如果 x 是 n+1 阶数，y 是 n+1 阶数，则 x+y 是 n 阶数。实际上，“P(z)”即“x+z 是 n 阶数”的属性是 n+1 阶归纳属性：P(0)成立，因为 x+0=x 是 n+1 阶数，因此也是 n 阶数；如果 P(z)成立，即 x+z 是 n 阶数，则 x+(z+1)=(x+z)+1 也是 n 阶数，因此 P(z+1)成立。由于 y 是 n+1 阶数，P(z)是 n+1 阶归纳属性，因此 P(y)成立，所以 x+y 是 n 阶数。这个例子很好地说明了分层体系引入的复杂性。

如果像罗素对弗雷格那样，将基本对象如自然数定义为类的类，那么复杂性将进一步增加。例如，数字 2 被定义为具有恰好两个元素的个例类的类。我们在分层结构中再次获得不同阶数的自然数。除了罗素本人之外，尽管存在所有这些复杂性，克维斯泰克试图以分层的方式发展算术，并且斯科勒姆强调了这种分析的重要性。有关最新进展，请参阅伯吉斯和哈森（1998）。

另一个经常提到的数学例子是对有界实数类的上确界的定义。如果我们将实数与小于该实数的有理数集合等同起来，我们可以看到这个上确界可以定义为该类中所有元素的并集。让我们将有理数的子集视为谓词。例如，对于有理数 q，当且仅当 q 是被标识为 P 的子集的成员时，谓词 P(q)成立。现在，我们将谓词 LC（有理数的子集）定义为类 C 的上确界：

∀q[LC(q)↔∃P[C(P)∧P(q)]]

这是不可预测的：我们通过对所有谓词进行存在量化来定义了一个谓词 L。在分级层次中，如果 C 是有理数的一阶类的类，则 L 将是有理数的二阶类。因此，我们得到的不是一个实数的概念或实数，而是不同阶数的实数 1、2、...。一组一阶实数的上确界通常至少是二阶的。

正如我们之前所看到的，另一个不可预测定义的例子是莱布尼兹对等号的定义。对于莱布尼兹来说，谓词“等于 a”对于 b 来说是真的，当且仅当 b 满足 a 满足的所有谓词。

如何处理分级层次引入的复杂性？罗素在《数学原理》第二版的引言中表明，在某些情况下可以避免这些复杂性。他甚至认为，在《数学原理》第二版的附录 B 中，一阶、二阶...的自然数的分级层次在定义关系的自反传递闭包时在第 5 阶处崩溃。然而，哥德尔后来发现了他的论证中的问题，事实上，Myhill 1974 年证明了这个层次在任何有限层次上实际上都不会崩溃。罗素在《数学原理》第二版的引言中讨论的一个类似问题出现在康托尔证明中，即不能从所有谓词的集合到所有对象的集合中存在任何单射函数（我们在引言中介绍的弗雷格系统中的罗素悖论版本）。这在分级层次中能够实现吗？罗素对在谓词的分级层次中能够实现这一点表示怀疑，这在后来的研究中得到了证实（参见 Chwistek 1926 年，Fitch 1939 年和 Heck 1996 年）。

由于这些问题，罗素和怀特海德在《数理原理》第一版中引入了以下的可约性公理：谓词的层次结构，一阶、二阶等，在第一级上崩溃。这意味着对于任何阶数的谓词，都存在一个等价于它的一阶级谓词。例如，在等式的情况下，我们假设一个一阶关系“a=b”，它等价于“a 满足 b 满足的所有属性”。这个公理的动机纯粹是实用的。如果没有它，所有基本的数学概念，如实数或自然数，都会被分层到不同的阶数中。此外，尽管看似循环定义，可约性公理似乎并不会导致矛盾。

然而，正如 Chwistek 首先注意到的，后来由 Ramsey 注意到的，在可约性公理的存在下，实际上根本没有必要引入分层体系！从一开始就接受循环定义要简单得多。简单的“外延”个体、类、类的类等层次结构就足够了。我们以这种方式得到了哥德尔 1931 年或丘奇 1940 年所形式化的更简单的系统，这些系统如上所述。

可约性公理引起了对循环定义问题的关注。引用魏尔 1946 年的话，可约性公理“是一个大胆的，几乎是奇幻的公理；在我们生活的真实世界中，几乎没有理由支持它，也没有任何证据支持我们的思维构建”！到目前为止，使用可约性公理还没有发现矛盾。然而，正如我们将在下面看到的，证明论研究证实了这样一个原理的极端强度。

分层结构的概念在数理逻辑中非常重要。罗素只考虑了分层的有限迭代：一阶、二阶等等，但从一开始就考虑了无限迭代的可能性。庞加莱（1909 年）提到了科尼希在这个方向上的工作。对于上面的不同阶数的数字的例子，他还定义了一个数是ω阶归纳的，如果它是所有有限阶数的归纳的。然后他指出，如果 x 和 y 都是ω阶归纳的，那么 x+y 也是ω阶归纳的。这表明，引入无限阶数在某些情况下可以起到可约性公理的作用。哥德尔进一步分析了这种分层结构的无限扩展，他注意到以下形式的可约性公理实际上是可证明的：当将属性的分层结构扩展到自然数的无限时，这个分层结构在ω1 级处崩溃，即最小的不可数序数（哥德尔 1995 年，普拉维茨 1970 年）。此外，在所有<ω1 级的层次上，谓词的集合是可数的，而在ω1 级上的谓词的集合的基数是ω1。这个事实是哥德尔构造集合模型的一个强有力的动机。在这个模型中，所有自然数集合的子集（由谓词表示）的集合的基数是ω1，并且类似于分层结构。这个模型以这种方式满足连续统假设，并给出了这个公理的相对一致性证明。（哥德尔最初的动机只是建立一个模型，其中所有自然数的子集的集合是良序的。）

分层结构也是证明论中的重要研究领域。根根发现算术的一致性可以通过超限归纳（在可判定谓词上）沿着序数ε0 来证明后，自然的问题是找到分层结构不同层次对应的序数。谢特（1960）发现，对于分层结构的第一层，即我们只在一阶属性上量化扩展算术，我们得到一个序数强度为εε0 的系统。对于第二层，我们得到序数强度为εεε0，依此类推。我们回忆一下，εα表示第α个ε序数，ε序数是指满足ωβ=β的序数β，详见谢特（1960）。

哥德尔强调了他对连续假设问题的方法并非是建设性的，因为它需要不可数序数ω1，并且研究分层结构沿着建设性序数是自然的。在洛伦岑和王的初步工作之后，舒特分析了如果我们按照更建设性的方式进行，会发生什么情况。由于算术具有序数强度ε0，我们首先考虑分层结构的迭代直到ε0。舒特计算了结果系统的序数强度，并找到了一个序数强度 u(1)>ε0。然后我们迭代分层结构直到这个序数 u(1)，得到一个序数强度 u(2)>u(1)，依此类推。每个 u(k)可以用所谓的 Veblen 分层来计算：u(k+1)是ϕu(k)(0)。这个过程的极限给出了一个称为Γ0 的序数：如果我们迭代分层结构直到序数Γ0，我们得到一个序数强度Γ0 的系统。关于同一时间，S. Feferman 独立地获得了这样一个序数。有人声称Γ0 对于预测性系统来说起到了与算术的ε0 类似的作用。然而，最近的证明论工作涉及具有更大的证明论序数的系统，这些系统可以被认为是预测性的（例如，参见 Palmgren 1995）。

除了与分层结构相关的证明论研究之外，证明论还致力于分析可约性公理的一致性，或者等价地，即非预测性定义的一致性。在根岑对削减性质在序列演算中的分析之后，武内提出了简单类型理论（无分层）的优雅序列形式，并大胆猜想该系统应该具有削减性质。考虑到非预测性量化的循环性，这个猜想起初似乎非常可疑，而这在这个形式主义中得到了很好的反映。量化的规则确实是

Γ⊢∀X[A(X)]Γ⊢A[X:=T]

其中 T 是任意的术语谓词，它本身可能涉及对所有谓词的量化。因此，公式 A[X:=T]本身可能比公式 A(X)复杂得多。

一个早期的结果是，Takeuti 的非谓词系统的削减消除意味着第二阶算术的一致性（人们表明这意味着适当形式的无穷公理的一致性，参见 Andrews 2002）。根据 Schütte（1960b）的工作，后来由 W. Tait 和 D. Prawitz 证明了削减消除性质的成立（这个证明必须使用更强的证明理论原则，正如不完备性定理所要求的那样）。

这里重要的是，这些研究揭示了非谓词量化的极端强大性，或者等价地说，可化约性公理的极端强大性。这在某种程度上证实了庞加莱和罗素的直觉。第二阶算术的证明理论强度远远超过了 Schütte 考虑的所有分叉扩展算术。另一方面，尽管 Takeuti 的演算中明确表达了非谓词定义的循环性，但在第二阶算术中尚未发现悖论。

证明论中的另一个研究方向是理解在直觉主义数学中可以从可用原理中解释多少无限制量化。最强的这类原理是归纳定义的强形式。通过这样的原理，可以解释一种有限形式的无限制量化，称为Π11-包容，其中只使用一级谓词的无限制量化。有趣的是，几乎所有已知的无限制量化的用途：莱布尼兹相等性，上确界等等，都可以用Π11-包容来完成。这种Π11-包容的简化首先由竹内间接实现，后来由布赫霍尔兹和舒特使用所谓的Ω规则进行了简化。它可以被看作是对一些受限但非平凡的无限制定义用途的建设性解释。

## 4. 类型论/集合论

类型论可以作为数学的基础，并且事实上，它在罗素于 1908 年发表的论文中被提出为这样的基础，该论文与策梅洛于同一年发表的将集合论作为数学基础的论文同时出现。

直观上，我们可以用集合论来解释类型论：类型简单地被解释为集合，函数类型 A→B 可以用集合论中的函数概念来解释（作为一个函数关系，即一组元素对的集合）。类型 A→o 对应于幂集操作。

另一个方向更有趣。我们如何用类型来解释集合的概念？A. Miquel 提出了一个优雅的解决方案，补充了 P. Aczel（1978）的先前工作，并且还有解释非必须良基集合（如 Finsler 集合）的优势。简单地将集合解释为一个有指向的图（图中的箭头表示成员关系）。这在类型论中非常方便地表示为一个类型 A 和一对元素。

a:A,R:A→A→o

We can then define in type theory when two such sets A,a,R and B,b,S are equal: this is the case iff there is a bisimulation T between A and B such that Tab holds. A bisimulation is a relation

T:A→B→o

such that whenever Txy and Rxu hold, there exists v such that Tuv and Syv hold, and whenever Txy and Ryv hold, there exists u such that Tuv and Rxu hold. We can then define the membership relation: the set represented B,b,S is a member of the set represented by A,a,R iff there exists a1 such that Ra1a and A,a1,R and B,b,S are bisimilar.

然后可以检查在这个简单模型中，所有集合论的常规公理（外延性、幂集、并集、对有界公式的包容性，甚至是反基础性，使得成员关系不需要良基）都成立。（有界公式是指所有量化都是形如∀x∈a…或∃x∈a…的公式）。通过这种方式，可以证明丘奇的简单类型论与策梅洛的集合论的有界版本等价一致。

## 5. 类型论/范畴论

类型论与范畴论之间存在着深刻的联系。我们仅限于介绍类型论对范畴论的两个应用：构造自由笛卡尔闭范畴和自由拓扑（有关“笛卡尔闭”和“拓扑”的解释，请参见范畴论条目）。

为构建自由笛卡尔闭范畴，我们在简单类型论中扩展了类型 1（单位类型）和乘积类型 A×B，其中 A、B 为类型。通过添加配对操作、投影和类型 1 的特殊元素来扩展术语。如同 Lambek 和 Scott 1986 所述，可以定义术语之间的类型转换概念，并证明该关系是可判定的。然后可以证明（Lambek 和 Scott 1986）以类型为对象、从 A 到 B 的态射为类型 A→B 的闭合术语集合（以相等性为转换）的范畴是自由笛卡尔闭范畴。这可以用来证明该范畴中箭头之间的相等性是可判定的。

Church 的类型理论也可以用于构建自由拓扑。为此，我们将 A 类型和 E 部分等价关系（即闭合术语 E:A→A→o，对称且传递）作为对象。对于 A、E 和 B、F 之间的态射，我们取关系 R:A→B→o，要求它是函数性的，即对于任意满足 Eaa 的 a:A，存在一个且仅存在一个（模 F）的 B 中元素 b，使得 Fbb 和 Rab 成立。对于子对象分类器，我们取 o、E 作为一对，其中 E:o→o→o 定义为

EMN= 和 (implyMN)(implyNM)

然后可以证明，这个范畴形成一个拓扑，确实是自由拓扑。

值得注意的是，Lambek 和 Scott 在 1986 年的类型论使用了一种类型论的变体，由 Henkin 引入并由 P. Andrews（2002 年）进行了改进，该变体只有一个外延相等作为逻辑连接词，即一个多态常量。

eq:A→A→o

并且从这个连接词和常量 T，F:o 定义所有逻辑连接词。例如，人们定义

∀P=dfeq(λx.T)P

类型 o 上的相等是逻辑等价。

内涵式表述的一个优点是它允许直接使用λ演算（Martin-Löf 1971 和 Coquand 1986）来表示基于证明的符号。

## 6. 类型系统的扩展，多态性，悖论

我们已经看到了类型上的操作 A → A → o 和集合上的幂集操作之间的类比。在集合论中，幂集操作可以在累积层次结构上进行无限迭代。因此，寻找类型论的类似的超限版本是自然的。

丘奇的简单类型论的一个扩展是通过添加宇宙来实现的（Martin-Löf 1970）。添加一个宇宙是一个反射过程：我们添加一个类型 U，其对象是到目前为止考虑的类型。对于丘奇的简单类型论，我们将有

o:U,i:U 和 A→B:U 如果 A:U,B:U

而且，如果 A:U，则 A 是一个类型。然后我们可以考虑类型，例如

(A:U)→A→A

和函数，例如

id=λA.λx.x:(A:U)→A→A

函数 id 接受一个“小”类型 A:U 和一个类型为 A 的元素 x 作为参数，并输出一个类型为 A 的元素。更一般地，如果 T(A)是在假设 A:U 下的一个类型，那么可以形成依赖类型

(A:U)→T(A)

M 是这种类型的意思是，只要 A:U，就有 MA:T(A)。通过这种方式，我们得到了类型论的扩展，其强度类似于泽尔梅洛的集合论（Miquel 2001）。在（Palmgren 1998）中考虑了更强大的宇宙形式。Miquel（2003）提出了一种与泽尔梅洛-弗雷因克尔等价的类型论版本。

通过添加公理 U:U，可以获得一种非常强大的宇宙形式。这是由 P. Martin-Löf 在 1970 年提出的。J.Y. Girard 证明了由此产生的类型论作为一个逻辑系统是不一致的（Girard 1972）。虽然乍一看似乎可以直接使用所有集合的集合来重现罗素悖论，但由于集合和类型之间的差异，实际上不可能出现这样的直接悖论。事实上，在这样的系统中推导出矛盾是微妙且相当间接的（尽管如 Miquel 2001 中所注意到的，现在可以通过将集合表示为指向图来将其简化为罗素悖论）。J.Y. Girard 最初为一个较弱的系统获得了他的悖论。这个悖论后来得到了改进（Coquand 1994 和 Hurkens 1995）。（纯类型系统的概念，由 Barendregt 1992 引入，方便对这些悖论进行明确的表述。）而不是假设公理 U:U，只假设

(A:U)→T(A):U

如果 T(A):U[A:U]。注意循环性，确实与被分层次拒绝的循环性相同：我们通过量化所有 U 的元素来定义类型 U 的元素。例如，类型

(A:U)→A→A:U

将是多态身份函数的类型。尽管存在这种循环性，但 J.Y. Girard 能够证明具有这种形式多态性的类型系统的归一化。然而，将 Church 的简单类型理论与多态性扩展是不一致的逻辑系统，即所有命题（类型为 o 的项）都是可证明的。

J.Y. Girard 考虑具有多态性的类型系统的动机是为了将 Gödel 的 Dialectica（Gödel 1958）解释扩展到二阶算术。他使用了 Tait（1967）引入的可约性方法来证明归一化，该方法是在分析 Gödel 1958 时引入的。令人惊讶的是，内含的非预测性循环性并不导致非归一化的项。（Girard 的论证随后被用来证明上述 Takeuti 的序列演算中的削减消除终止。）类似的系统由 J. Reynolds（1974）在分析计算机科学中的多态性概念时独立引入。

Martin-Löf 引入的所有类型的类型来自于 Curry 和 Howard 的工作提出的命题和类型的概念的识别。在这里值得回顾他的三个动机点：

1. Russell 将类型定义为命题函数的意义范围
2. 需要对所有命题进行量化的事实（简单类型论的非谓词性）
3. 命题和类型的确定

鉴于（1）和（2），我们应该有一个命题的类型（如简单类型论中的类型），并且鉴于（3），这也应该是所有类型的类型。吉拉尔悖论表明，不能同时具有（1），（2）和（3）。马丁-勒夫的选择是去掉（2），将类型论限制为谓词性的（实际上，宇宙的概念首次出现在类型论中，作为所有类型的谓词性版本）。关于去掉（3）的替代选择在科昆德 1986 年的论文中进行了讨论。

## 7. 同伦基础

类型论、集合论和范畴论之间的联系通过对单价基础(Univalent Foundations)（Voevodsky 2015）和单价公理(Axiom of Univalence)的研究得到了新的启示。这在很大程度上涉及到了前一节中描述的类型论的扩展，特别是依赖类型、将命题视为类型以及类型宇宙的概念。这些发展对于讨论结构的概念也是相关的，其中的重要性例如在 Russell 1959 中得到了强调。

Martin-Löf 1975 [1973]引入了一个新的基本类型 IdA(a,b)，其中 a 和 b 是类型 A 中的元素，可以将其视为元素 a 和 b 的相等证明的类型。这个新类型的一个重要特点是它可以进行迭代，因此我们可以考虑类型 IdIdA(a,b)(p,q)，其中 p 和 q 是类型 IdA(a,b)的元素。如果我们将类型视为一种特殊类型的集合，那么自然会猜想对于任意两个相等证明 p 和 q，这样的相等证明类型总是存在的。实际上，直观上看，元素 a 和 b 之间最多只有一个相等证明。令人惊讶的是，Hofmann 和 Streicher 1996 设计了一个依赖类型论的模型，其中这个猜想是不成立的，也就是说，存在不同的证明表明两个元素是相等的。在这个模型中，一个类型被解释为一个群体，而类型 IdA(a,b)被解释为 a 和 b 之间的同构的集合，这个集合可能有多个元素。这个模型的存在意味着在类型论中通常不能证明相等类型最多只有一个元素。这个群体解释已经被推广如下，它给出了对身份类型的直观解释。一个类型被解释为一个拓扑空间，通过同伦，而类型 IdA(a,b)被解释为连接 a 和 b 的路径的类型。（参见 Awodey et al. 2013 和[HoTT 2013，其他互联网资源]。）

Voevodsky 2015 引入了以下类型的分层。 （这种分层部分是基于将类型解释为拓扑空间的观点，但可以直接理解而不参考这种解释。）我们说类型 A 是一个命题，如果对于 A 的任意元素 a 和 b，我们有 IdA（a，b）（这意味着类型 A 最多只有一个元素）。我们说类型 A 是一个集合，如果对于 A 的任意元素 a 和 b，类型 IdA（a，b）是一个命题。我们说类型 A 是一个群体，如果对于 A 的任意元素 a 和 b，类型 IdA（a，b）是一个集合。这个术语的正当性在于，只使用类型论的规则，可以证明任何这样的类型实际上可以被看作是通常范畴意义上的群体，其中对象是该类型的元素，a 和 b 之间的态射集合由集合 IdA（a，b）表示。组合是等式的传递性的证明，恒等态射是等式的自反性的证明。每个态射都有逆的事实对应于恒等关系是对称关系的事实。然后可以扩展这种分层，并且我们可以定义类型何时是 2-群体、3-群体等等。从这个观点来看，类型论似乎是集合论的广泛推广，因为集合是一种特殊类型。

Voevodsky 2015 还引入了一种类型之间等价的概念，这种概念以一种统一的方式推广了逻辑上的命题等价、集合之间的双射、群体之间的范畴等价等概念。我们说一个映射 f:A→B 是一个等价，如果对于 B 中的任意元素 b，对于类型为 IdB(fa,b) 的对 a,p，其为一个命题且有元素。这以一种强有力的方式表达了 B 中的元素是 A 中恰好一个元素的映像，如果 A 和 B 是集合，我们就恢复了集合之间的双射的通常概念。（一般来说，如果 f:A→B 是一个等价，那么我们有一个映射 B→A，可以看作是 f 的逆映射。）例如，可以证明恒等映射总是一个等价。设 Equiv(A,B) 是对 f,p 的类型，其中 f:A→B，p 是 f 是一个等价的证明。利用恒等映射是一个等价的事实，对于任意类型 A，我们有 Equiv(A,A) 的元素。这意味着我们有一个映射

IdU(A,B)→Equiv(A,B)

而唯一性公理则声明了这个映射是一个等价。特别地，我们有以下蕴含关系

Equiv(A,B)→IdU(A,B)

如果两个小类型之间存在等价关系，则这些类型相等。

这个公理可以看作是外延性原理的一种强形式。它确实推广了丘奇 1940 年提到的命题外延性公理，该公理指出两个逻辑等价的命题是相等的。令人惊讶的是，它还暗示了函数外延性公理，即丘奇 1940 年的公理 10，该公理指出两个逐点相等的函数是相等的（Voevodsky 2015）。它还直接暗示了两个同构集合是相等的，两个范畴等价的群体是相等的，等等。

这可以用来给出结构传递的概念（Bourbaki 1957）的表述。例如，设 MA 是集合 A 上的幺半群结构的类型：这是由元组 m，e，p 组成的类型，其中 m 是 A 上的二元操作，e 是 A 的元素，p 是证明这些元素满足通常的幺半群法则的证明。等同替换规则采用以下形式

IdU(A,B)→MA→MB

如果 A 和 B 之间存在双射，根据唯一性公理，它们是相等的，我们可以使用这个蕴含式将 A 的任何幺半群结构传递到 B 的幺半群结构中。

罗素在 1919 年和 1959 年都强调了结构的重要性。例如，在罗素 1919 年的第六章中，注意到两个相似的关系本质上具有相同的属性，因此具有相同的“结构”。（关系的“相似性”概念是在罗素 1901 年引入的。）我们还可以使用这个框架来完善罗素对结构概念的讨论。例如，让 Monoid 成为一对 A，p 的类型，其中 p 是 MA 的元素。如果存在一个双射 f 从 A 到 B，使得 q 等于 p 沿着 f 的结构传递，则这样的一对 A，p 和 B，q 是同构的。Univalence 公理的一个结果是，Monoid 类型的两个同构元素是相等的，因此具有相同的属性。注意，在集合论框架中，这样一种一般性的属性传递是不可能的。实际上，在集合论框架中，可以使用成员关系来表达属性，例如结构的载体集合包含自然数 0 的属性，但这种属性通常不会被同构保持。直观地说，结构的集合论描述不够抽象，因为我们可以谈论这个结构是如何构建的。集合论和类型论之间的这种差异是 J.Reynolds 在 1983 年对类型结构的“语法纪律以强制抽象级别”的表征的又一个例证。

<!--md-padding-ignore-begin-->
## Bibliography

* Aczel, P., 1978, “The type theoretic interpretation of constructive set theory”, *Logic Colloquium ’77*, Amsterdam: North-Holland, 55–66.
* Andrews, P., 2002, *An introduction to mathematical logic and type theory: to truth through proof* (Applied Logic Series: Volume 27), Dordrecht: Kluwer Academic Publishers, second edition.
* Awodey, S. and Carus, A.W., 2001, “Carnap, completeness and categoricity: the Gabelbarkeitssatz of 1928”, *Erkenntnis*, 54: 145–171.
* ––– and Pelayo, A., Warren, M. 2013, “The Axiom of Univalence in Homotopy Type Theory”, *Notices of the American Mathematical Society*, 60(9): 1157–1164.
* Barendregt, H., 1997, “The impact of the lambda calculus in logic and computer science”, *Bulletin of Symbolic Logic*, 3(2): 181–215.
* –––, 1992, *Lambda calculi with types. Handbook of logic in computer science*, Volume 2, Oxford, New York: Oxford University Press, 117–309.
* Bell, J.L., 2012, “Types, Sets and Categories”, in Akihiro Kanamory *Handbook of the History of Logic. Volume 6: Sets and Extensions in the Twentieth Century*, Amsterdam: North Holland.
* Bourbaki, N., 1958, *Théorie des Ensembles*, 3rd edition, Paris: Hermann.
* de Bruijn, N. G., 1980, “A survey of the project AUTOMATH”, in *To H. B. Curry: essays on combinatory logic, lambda calculus and formalism*, London-New York: Academic Press, 579–606.
* Burgess J. P. and Hazen A. P., 1998, “Predicative Logic and Formal Arithmetic Source,” *Notre Dame J. Formal Logic*, 39(1): 1–17.
* Buchholz, W. and K. Schütte, 1988, *Proof theory of impredicative subsystems of analysis* (Studies in Proof Theory: Monograph 2), Naples: Bibliopolis.
* Church, A., 1940, “A formulation of the simple theory of types,” *Journal of Symbolic Logic*, 5: 56–68
* –––, 1984, “Russell’s theory of identity of propositions,” *Philosophia Naturalis*, 21: 513–522
* Chwistek, L., 1926, “Ueber die Hypothesen der Mengelehre,” *Mathematische Zeitschrift*, 25: 439–473
* –––, 1948, *The Limits of Science: Outline of Logic and of the Methodology of the Exact Sciences*, London: Routledge and Kegan Paul.
* Coquand, T., 1986, “An analysis of Girard’s paradox,” *Proceedings of the IEEE Symposium on Logic in Computer Science*, 227–236.
* –––, 1994, “A new paradox in type theory,” *Stud. Logic Found. Math.* (Volume 134), Amsterdam: North-Holland, 555–570.
* du Bois-Reymond, P., 1875, “Ueber asymptotische Werthe, infintaere Appproximationen und infitaere Aufloesung von Gleichungen,” *Mathematische Annalen*, 8: 363–414.
* Feferman, S., 1964, “Systems of predicative analysis,” *Journal of Symbolic Logic*, 29: 1–30.
* Ferreira, F. and Wehmeier, K., 2002, “On the consistency of the Delta-1-1-CA fragment of Frege’s Grundgesetze,” *Journal of Philosophic Logic*, 31: 301–311.
* Fitch, F. B., 1964, “The hypothesis that infinite classes are similar,” *Journal of Symbolic Logic*, 4: 159–162.
* Girard, J.Y., 1972, *Interpretation fonctionelle et eleimination des coupures dans l’arithmetique d’ordre superieure*, These d’Etat, Université Paris 7.
* Goldfarb, Warren, 2005. “On Godel’s way in: The influence of Rudolf Carnap.” *Bulletin of Symbolic Logic* 11(2): 185–193.
* Gödel, K., 1995, *Collected Works Volume III, Unpublished Essays and Lectures*, Oxford: Oxford University Press, 1995.
* –––, 1931, “Über formal untentscheidbare Sätze der Principia Mathematica und verwandter Systeme I,” *Monatshefte fü Mathematik und Physik*, 38: 173–198.
* –––, 1944, “Russell’s mathematical logic,” in *The philosophy of Bertrand Russell*, P. A. Schilpp (ed.), Evanston: Northwestern University Press, 123–153.
* –––, 1958, “Über eine bisher noch nicht benützte Erweiterung des finiten Standpunktes,”, *Dialectica*, 12: 280–287.
* Heck, R., Jr., 1996, “The consistency of predicative fragments of Frege’s Grundgesetze der Arithmetik,” *History and Philosophy of Logic*, 17(4): 209–220.
* van Heijenoort, 1967, *From Frege to Gödel. A source book in mathematical logic 1879–1931*, Cambridge, MA: Harvard University Press.
* Hindley, R., 1997, *Basic Simple Type Theory*, Cambridge: Cambridge University Press.
* Hodges, W., 2008, “Tarski on Padoa’s Method: a test case for understanding logicians of other traditions”, in *Logic, Navya-Nyāya and Applications: Homage to Bimal Krishna Matilal*, Mihir K. Chakraborti et al. (eds.), London: College Publications, pp. 155–169
* Hofmann, M. and Streicher, Th. 1996, “The Groupoid interpretation of Type Theory,” in *Twenty-five years of constructive type theory* (Oxford Logic Guides: Volume 36), Oxford, New York: Oxford University Press, 83–111.
* Howard, W. A., 1980, “The formulae-as-types notion of construction,” in *To H. B. Curry: essays on combinatory logic, lambda calculus and formalism*, London, New York: Academic Press, 480–490.
* Hurkens, A. J. C., 1995, “A simplification of Girard’s paradox. Typed lambda calculi and applications,” in *Lecture Notes in Computer Science* (Volume 902), Berlin: Springer: 266–278.
* Lambek, J., 1980. “From λ-calculus to Cartesian Closed Categories” in *To H.B. Curry: Essays on Combinatory Logic, λ-calculus and Formalism*, J. Seldin and J. Hindley (eds.), London, New York: Academic Press. pp. 375–402.
* Lambek, J. and Scott, P. J., 1986, *Introduction to higher order categorical logic* (Cambridge Studies in Advanced Mathematics: Volume 7), Cambridge: Cambridge University Press; reprinted 1988.
* Lawvere, F. W. and Rosebrugh, R., 2003, *Sets for mathematics*, Cambridge: Cambridge University Press.
* Martin-Löf, P., 1970, *Notes on constructive mathematics*, Stockholm: Almqvist & Wiksell.
* –––, 1971, *A Theory of Types*, Technical Report 71–3, Stockholm: Stockholm University.
* –––, 1998, “An intuitionistic theory of types,” in *Twenty-five years of constructive type theory* (Oxford Logic Guides: Volume 36), Oxford, New York: Oxford University Press, 127–172.
* –––, 1975 [1973], “An intuitionistic theory of types: Predicative Part,” in *Logic Colloquium ’73* (Proceedings of the Logic Colloquium, Bristol 1973) (Studies in Logic and the Foundations of Mathematics: Volume 80), H.E. Rose and J.C. Shepherdson (eds.), Amsterdam: North-Holland, 73–118.
* Myhill, J., 1974, “The Undefinability of the Set of Natural Numbers in the Ramified Principia”, in *Bertrand Russell’s Philosophy*, G. Nakhnikian (ed.), London: Duckworth, 19–27.
* Miquel, A., 2001, *Le Calcul des Constructions implicite: syntaxe et sémantique*, Thèse de doctorat, Université Paris 7.
* –––, 2003, “A strongly normalising Curry-Howard correspondence for IZF set theory,” in *Computer science Logic* (Lecture Notes in Computer Science, 2803), Berlin: Springer: 441–454.
* Oppenheimer, P. and E. Zalta, 2011, “Relations Versus Functions at the Foundations of Logic: Type-Theoretic Considerations”, Journal of Logic and Computation, 21: 351–374.
* Palmgren, Erik, 1998, “On universes in type theory,” in *Twenty-five years of Constructive Type Theory* (Oxford Logic Guides: Volume 36), Oxford, New York: Oxford University Press, 191–204.
* Poincaré, 1909, “H. La logique de l’infini” *Revue de metaphysique et de morale*, 17: 461–482.
* Prawitz, D., 1967, “Completeness and Hauptsatz for second order logic”, *Theoria*, 33: 246–258.
* –––, 1970, “On the proof theory of mathematical analysis,” in *Logic and value* (Essays dedicated to Thorild Dahlquist on his fiftieth birthday), Filosofiska Studier (Filosof. Föreningen och Filosof. Inst.), No. 9, Uppsala: Uppsala University, 169–180.
* Quine, W., 1940, “Review of Church ‘A formulation of the simple theory of types’,” *Journal of Symbolic Logic*, 5: 114.
* Ramsey, F.P., 1926, “The foundations of mathematics,” *Proceedings of the London Mathematical Society*, s2–25 (1), 338–384.
* Russell, B., 1901, “Sur la logique des relations avec des applications a la théorie des séries”, *Revue de Mathématique*, 7: 115–136, 137–148.
* –––, 1903, *The Principles of Mathematics*, Cambridge: Cambridge University Press.
* –––, 1908, “Mathematical logic as based on the theory of types,” *American Journal of Mathematics*, 30: 222–262.
* –––, 1919, *Introduction to Mathematical Philosophy*, London: George Allen and Unwin.
* –––, 1959, *My philosophical development*, London, New York: Routledge.
* Russell, B. and Whitehead, A., 1910, 1912, 1913, *Principia Mathematica* (3 volumes), Cambridge: Cambidge University Press.
* Reynolds, J., 1974, “Towards a theory of type structure,” in *Programming Symposium* (Lecture Notes in Computer Science: Volume 19), Berlin: Springer, 408–425.
* –––, 1983, “Types, Abstraction and Parametric Polymorphism,” *Proceedings of the IFIP 9th World Computer Congress*, Paris, 513–523.
* –––, 1984, “Polymorphism is not set-theoretic. Semantics of data types,” *Lecture Notes in Computer Science* (Volume 173), Berlin: Springer, 145–156.
* –––, 1985, “Three approaches to type structure. Mathematical foundations of software development,” in *Lecture Notes in Computer Science* (Volume 185), Berlin: Springer, 97–138.
* Schiemer, G. and Reck, E.H., 2013, “Logic in the 1930s: Type Theory and Model Theory,” *The Bulletin of Symbolic Logic*, 19(4): 433–472.
* Schütte, K., 1960, *Beweistheorie*, Berlin: Springer-Verlag.
* –––, 1960b, “Syntactical and Semantical Properties of Simple Type Theory,” *Journal of Symbolic Logic*, 25: 305–326.
* Scott, D., 1993 “A type-theoretic alternative to ISWIM, CUCH, OWHY,” *Theoretical Computer Science*, 121: 411–440.
* Skolem, T., 1970, *Selected works in logic*, Jens Erik Fenstad (ed.), Oslo: Universitetsforlaget.
* Tait, W. W., 1967, “Intensional interpretations of functionals of finite type,” *Journal of Symbolic Logic*, 32 (2): 198–212.
* Takeuti, G., 1955 “On the fundamental conjecture of GLC: I”, *Journal of the Mathematical Society of Japan*, 7: 249–275.
* –––, 1967, “Consistency proofs of subsystems of classical analysis,” *The Annals of Mathematics* (Second Series), 86 (2): 299–348.
* Tarski, A., 1931, “Sur les ensembles definissables de nombres reels I,” *Fundamenta Mathematicae*, 17: 210–239.
* Urquhart, A., 2003, “The Theory of Types,” in *The Cambridge Companion to Bertrand Russell*, Nicholas Griffin (ed.), Cambridge: Cambridge University Press.
* Voevodsky, V., 2015, “An experimental library of formalized mathematics based on univalent foundations,” *Mathematical Structures in Computer Science*, 25: 1278–1294, [available online](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/0E37CCB09CC1B7BA0AAE3F6A34F9727C/S0960129514000577a.pdf/an_experimental_library_of_formalized_mathematics_based_on_the_univalent_foundations.pdf).
* Wiener, N., 1914, “A simplification of the logic of relations,” *Proceedings of the Cambridge Philosophical Society*, 17: 387–390.
* Weyl, H., 1946, “Mathematics and Logic,” *American Mathematical Monthly*, 53: 2–13.
* Zermelo, E., 1908, “Untersuchungen über die Grundlagen der Mengenlehre I,” *Mathematische Annalen*, 65: 261–281.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=type-theory). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/type-theory/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=type-theory&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](http://philpapers.org/sep/type-theory/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

* Kubota, K., 2018, “[Foundations of Mathematics. Genealogy and Overview](http://www.owlofminerva.net/files/fom.pdf),” manuscript, draft of March 27, 2018.
* [HoTT 2013], [*Homotopy Type Theory: Univalent Foundations of Mathematics*](http://homotopytypetheory.org/book/), Institute for Advanced Study.

## Related Entries

[Russell, Bertrand](https://plato.stanford.edu/entries//russell/) | [category theory](https://plato.stanford.edu/entries/category-theory/) | [Frege, Gottlob](https://plato.stanford.edu/entries/frege/) | [Frege, Gottlob: theorem and foundations for arithmetic](https://plato.stanford.edu/entries/frege-theorem/) | [logic: paraconsistent](https://plato.stanford.edu/entries/logic-paraconsistent/) | [mathematics: inconsistent](https://plato.stanford.edu/entries/mathematics-inconsistent/) | peano | [*Principia Mathematica*](https://plato.stanford.edu/entries/principia-mathematica/) | [type theory: Church’s type theory](https://plato.stanford.edu/entries/type-theory-church/) | [type theory: intuitionistic](https://plato.stanford.edu/entries/type-theory-intuitionistic/)

[Copyright © 2022](https://plato.stanford.edu/info.html#c) by  
[Thierry Coquand](http://www.cs.chalmers.se/~coquand) <[*coquand@chalmers.se*](mailto:coquand%40chalmers%2ese)>
