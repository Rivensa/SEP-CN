# 选择公理 choice, axiom of (John L. Bell)

*首次发表于 2008 年 1 月 8 日；实质性修订于 2021 年 12 月 10 日*

集合论中被称为_选择公理_的原则被誉为“可能是最有趣的，尽管出现较晚，但也是数学中讨论最多的公理，仅次于欧几里得的平行公设，后者是两千多年前引入的”（Fraenkel，Bar-Hillel＆Levy 1973，§II.4）。这种描述的丰富性可能会让那些不熟悉这个公理的人期望它像光速不变原理或海森堡不确定性原理那样令人惊讶。但事实上，选择公理通常陈述起来平淡无奇，甚至显而易见。因为它仅仅是这样一个主张：对于任何一组互不相交的非空集合，可以组合一个新集合——一个_横截面_或_选择集_，其中包含给定集合的每个成员中的一个元素。然而，这个看似无害的原则具有深远的数学后果——许多是必不可少的，一些是令人惊讶的，并且已经成为数学基础讨论中的重要内容。它（或其等价形式）已被应用于无数数学论文，并且有许多专门致力于它的专著。

***

## 1. 选择公理的起源和年表

1904 年，恩斯特·策梅洛提出了选择公理（本文中简称为_AC_），并用他称之为_覆盖_（Zermelo 1904）的术语来阐述。他从任意集合_M_开始，并用符号_M′_ 来表示_M_的任意非空子集，他将这些子集的集合表示为_M_。他继续说道：

想象对于每个子集 *M′* 都有一个相关的任意元素 *m′1*，它出现在 *M′* 本身中；让 *m′1* 被称为 *M′* 的“显著”元素。这产生了集合 *M* 的某些元素的“覆盖” *g*。这些覆盖的数量等于所有子集 *M′* 的基数的乘积，并且肯定不等于 0。

这个引语的最后一句话——实际上断言了对于任意（非空）集合的非空子集的集合总是存在覆盖物——是策梅洛对选择公理的第一个表述。这通常用_选择函数_来陈述：这里，对于一组非空集合 H 上的选择函数是一个映射 f，其定义域为 H，使得对于每个 X∈H，f(X)∈X。 \[1]

作为一个非常简单的例子，让 H 成为 {0,1} 的非空子集的集合，即 H=\{{0},{1},{0,1\}}。那么 H 有两个不同的选择函数 f1 和 f2 ，分别为：

f1({0})f1({1})f1({0,1})f2({0})f2({1})f2({0,1})=0=1=0=0=1=1

一个更有趣的选择函数的例子是，将 H 设为（无序）实数对的集合，函数是将每对实数分配给其最小元素。通过将每对实数分配给其最大元素，可以得到另一个不同的选择函数。显然，可以定义许多关于 H 的选择函数。

以选择函数的术语来表述，策梅洛对_AC_的第一次阐述如下：

**选择公理 1**

任何非空集合的集合都有一个选择函数。

**AC1** 可以用_索引_或_变量集_来重新表述。一组索引集合 A={Ai:i∈I}可以被看作是一个_变量集_，即作为一个集合_varying_在索引集 I 上。然后，每个 Ai 就是变量集 A 在_stage_ i 上的“值”。在 A 上的一个_选择函数_是一个映射 f:I→⋃i∈IAi，使得对于所有的 i∈I，f(i)∈Ai。因此，在 A 上的一个选择函数就是在每个阶段选择变量集 A 的元素；换句话说，在 A 上的一个选择函数是 A 的一个_变量元素_。**AC1**等价于断言

**选择公理 2**：

任何索引集合的集合都有一个选择函数。

非正式地说，**AC2**相当于断言每个阶段具有一个元素的变量集具有一个可变元素。

**AC1** 可以用关系的术语重新表述，即 选择公理 。

**选择公理**

对于集合 A、B 之间的任意关系 R ，

∀x∈A ∃y∈B\[R(x,y)]⇒∃f\[f:A→B&∀x∈A\[R(x,fx)]]. ∀x∈A ∃y∈B\[R(x,y)]⇒∃f\[f:A→B&∀x∈A\[R(x,fx)]].

换句话说，每个关系都包含一个具有相同定义域的函数。

最后**AC3**很容易地被证明等价于：\[[2](https://plato.stanford.edu/entries/axiom-choice/notes.html#2)]

**选择公理 4**：

任何满射函数都有右逆。

在 1908 年的一篇论文中，策梅洛引入了_AC_的修改形式。让我们称为对于集合族 H 的_横截集_（或_选择集_）为任意子集 T⊆⋃H，其中每个交集 T∩X 对于 X∈H 都恰好有一个元素。作为一个非常简单的例子，让 H=\{{0},{1},{2,3\}}。那么 H 有两个横截集{0,1,2}和{0,1,3}。一个更重要的例子是让 H 成为平行于 x 轴的欧几里得平面上所有直线的集合。那么在 y 轴上的点集 T 就是 H 的一个横截集。

以横截线的术语来表述，那么策梅洛的第二（1908 年）_选择公理_的表述相当于断言任何一组互不相交的非空集合都有一个横截线。

Zermelo 断言，“这个原则的纯客观特性”“是显而易见的。”在做出这一断言时，Zermelo 的意图是强调这一原则在这种形式下并不涉及“选择”的可能性。Zermelo 可能还考虑了以下对该原则的“组合”理由。给定一个互不相交的非空集合族 H，称子集 S⊆⋃H 为 H 的_选择器_，如果对于所有 X∈H，S∩X≠∅。显然，H 的选择器是存在的；⋃H 本身就是一个例子。现在可以想象取一个 H 的选择器 S，并“稀疏化”每个交集 S∩X，直到它只包含一个单一元素。结果是 H 的一个横截面。这一论证，经过适当的完善，从以下被称为_Zorn 引理_的集合论原理中精确推导出了这种形式中的_AC_（见下文）。

让我们称之为 Zermelo 的 1908 年阐述的_组合_选择公理：

**CAC**: 选择公理

任何一组互不相交的非空集合都有一个横截集。

值得注意的是，对于_有限_集合，**AC1**和**CAC**在通常的集合理论中都是可证明的（通过归纳）。但是对于_无限_集合，即使其中的每个成员都是有限的，选择函数或横截面的存在问题是有问题的。例如，正如前面提到的，很容易为实数对的集合想出一个选择函数（只需选择每对中较小的元素）。但为_任意实数集_的对的集合产生选择函数却并不明显。

Zermelo 最初引入_AC_的目的是为了建立康托尔集合论的一个中心原则，即每个集合都有一个良序，因此也可以被赋予一个基数。Zermelo 在 1904 年引入这个公理，以及他使用它的方式，引起了当时数学家们的广泛批评。主要反对意见是一些人认为它具有高度非构造性，甚至理想主义的特征：虽然这个公理断言了进行许多——甚至是无穷多——任意“选择”的可能性，但它完全没有表明这些后者实际上如何被实现，换句话说，选择函数如何被_定义_。这特别令一些“建设性”倾向的数学家反感，比如所谓的法国经验主义者 Baire、Borel 和 Lebesgue，对他们来说，数学对象只有在能够被定义为独特表征它的方式下才能被断言存在。Zermelo 对批评者的回应体现在 1908 年的两篇论文中。在这两篇论文中，他重新用横截面的术语重新阐述了_AC_；在第二篇（1908a）中，他明确说明了证明良序定理所需的进一步假设。这些假设构成了集合论的第一个明确的公理系统的阐述。

随着关于选择公理的辩论的持续，人们开始意识到许多重要数学定理的证明基本上都必须使用它，因此许多数学家开始将其视为他们工作中不可或缺的工具。例如，希尔伯特认为_AC_是数学的一个基本原则，并在捍卫经典数学推理免受直觉主义者攻击时使用了它。事实上，他的ε-算子本质上只是选择函数（请参阅关于[ε-演算](https://plato.stanford.edu/entries/epsilon-calculus/)的条目）。

尽管_AC_的实用性很快变得明显，但对其可靠性的怀疑仍然存在。这些怀疑得到了加强，因为它具有某些引人注目的反直觉后果。其中最引人注目的是 Banach 和 Tarski 的球的悖论分解（Banach 和 Tarski 1924）：任何实心球都可以分成有限多个部分，这些部分可以重新组合成两个相同大小的实心球；并且任何实心球都可以被分成有限多个部分，以便以一种使它们能够重新组合成任意大小的实心球的方式。 （参见 Wagon 1993。）

直到 1930 年代中期，库尔特·哥德尔证明了_AC_相对于集合论的其他公理的一致性，才最终解决了选择公理的合理性问题。

这里是_选择公理_的简要年表：\[[6](https://plato.stanford.edu/entries/axiom-choice/notes.html#6)]

\| 1904/1908 | Zermelo introduces axioms of set theory, explicitly formulates *AC* and uses it to prove the well-ordering theorem, thereby raising a storm of controversy. | | 1904/1908 |策尔梅洛引入集合论公理，明确阐述_选择公理_并用它证明了良序定理，从而引发了一场争议风暴。|

\| --- | --- |

\| 1904 | Russell recognizes *选择公理* as the *multiplicative axiom*: the product of arbitrary nonzero cardinal numbers is nonzero. |

\| 1914 | Hausdorff 从 *选择公理* 推导出非可测集的存在，以“悖论”的形式，即一个球的一半与它的三分之一全等 (Hausdorff 1914)。|

\| 1922 | Fraenkel introduces the “permutation method” to establish independence of *AC* from a system of set theory with atoms (Fraenkel 1922). | | 1922 | 弗兰克尔引入“排列方法”来建立_AC_与一个带原子的集合论体系的独立性（弗兰克尔 1922）。|

\| 1924 | 建立在豪斯多夫、巴拿赫和塔斯基的工作基础上，从_选择公理_中推导出了他们对球体的悖论分解。|

\| 1926 | Hilbert introduces into his proof theory the “transfinite” or “epsilon” axiom as a version of *AC*. (Hilbert 1926). | | 1926 年 | 希尔伯特将“transfinite”或“epsilon”公理引入他的证明理论，作为_选择公理_的一个版本。(希尔伯特 1926 年)。|

\| 1936 | Lindenbaum 和 Mostowski 扩展和完善了 Fraenkel 的排列方法，并证明了比 *AC* 弱的集合论各种陈述的独立性。 (Lindenbaum 和 Tarski 1938) |

\| 1935–38 | Gödel establishes relative consistency of *AC* with the axioms of set theory (Gödel 1938a, 1938b, 1939, 1940). | | 1935–38 | 哥德尔证实了_选择公理_与集合论公理的相对一致性（哥德尔 1938a，1938b，1939，1940）。|

\| 1950 年代 | Mendelson、Shoenfield 和 Specker 独立工作，使用排列方法从一个没有原子的集合论系统中建立各种形式的_选择公理_的独立性，但也缺乏基础公理（Mendelson 1956, 1958, Shoenfield 1955, Specker 1957）。|

\| 1963 | 保罗·科恩证明了选择公理_AC_与集合论标准公理的独立性（Cohen 1963, 1964）。|

## 2. 选择公理的独立性和一致性

如上所述，1922 年 Fraenkel 证明了_AC_与包含“原子”的集合论体系的独立性。这里所说的_原子_是指纯个体，即，一个没有成员但与空集不同的实体（因此_更重要的是_原子不能是一个集合）。在具有原子的集合论体系中，假定给定一个无限集 A 的原子。可以通过从 A 开始，添加 A 的所有子集，添加结果的所有子集等进行迭代，构建关于 A 的集合宇宙 V(A)。然后，V(A)是具有原子的集合论模型。Fraenkel 证明_AC_独立性的方法的核心是观察到，由于原子在集合论上无法区分，原子集 A 的任何排列都会导致一个保持结构的排列—一个_自同构_—从 A 构建的集合宇宙 V(A)的排列。这个想法可以用来构建另一个集合论模型 Sym(V)—一个_置换_或_对称模型_—在这个模型中，A 的一组互不相交的元素对没有选择函数。

现在让我们假设我们有一个自同构群 G of automorphisms of A. 让我们说如果一个自同构 π; of A *fixes* an element x of V(A) if π(x)=x. 显然，如果 π∈G fixes every element of A, 它也会 fix every element of V(A). 现在可能存在这样一种情况，对于某些元素 x∈V(A), 通过任何 π∈G fixing a *subset* of A 的元素就足以 fix x. 因此，我们因此定义 x 的一个 *support* 为 X of A 的一个子集，每当 π∈G fixes each member of X, 它也会 fix x. 拥有一个 *finite* support 的 V(A) 的成员被称为 *symmetric*.

我们接下来定义宇宙 Sym(V)由 V(A)的_遗传对称_成员组成，即那些 x∈V(A)使得 x，x 的元素，x 的元素的元素等都是对称的。Sym(V)也是具有原子集 A 的集合论模型，并且π诱导了 Sym(V)的自同构。

现在假设 A 被划分为一个（必然是无限的）互不相交的对集 P。取 G 为保持 P 中所有对不变的 A 的置换群。那么 P∈Sym(V)；现在可以证明 Sym(V)不包含 P 上的选择函数。假设 f 是 P 上的选择函数且 f∈Sym(V)。那么 f 有一个有限支撑，可以取为{a1,…,an,b1,…,bn}，其中每对{ai,bi}∈P。由于 P 是无限的，我们可以从 P 中选择一对{c,d}=U，它与所有{ai,bi}都不同。现在我们定义π∈G，使得π保持每个 ai 和 bi，并交换 c 和 d。那么π也保持 f。由于假设 f 是 P 上的选择函数，且 U∈P，我们必须有 f(U)∈U，即 f(U)=c 或 f(U)=d。由于π交换 c 和 d，可知π(f(U))≠f(U)。但由于π是自同构，它也保持函数应用，因此π(f(U))=πf(π(U))。但π(U)=U 且πf=f，所以π(f(U))=f(U)。我们已经得出矛盾，表明 Sym(V)中不包含 P 上的选择函数。

这里的要点是，对于定义在集合 P 上的对称函数 f，存在一个有限的对列表 L，其中的所有元素的固定足以确定 f，从而也确定了 f 的所有值。现在，对于集合 P 中但不在列表 L 中的任意对 U，总是可以找到一个置换π，它固定列表 L 中所有对的元素，但不固定集合 U 的成员。由于π必须固定 U 处 f 的值，该值不能在 U 中。因此 f 不能“选择”U 中的元素，因此\*f 不能是集合 P 上的选择函数。

这个论点表明，*原子集合_的集合不一定需要选择函数，但它未能证明对于数学中的“通常”集合，例如实数集合，情况也是如此。直到 1963 年，保罗·科恩才证明，根据集合论的标准公理（排除了原子的存在），假设一可数对实数集合的集合没有选择函数是一致的。科恩证明方法的核心——著名的_强制法*——比任何先前的技术都要广泛得多；然而，他的独立证明也基本上使用了排列和对称性，这正是弗兰克尔最初使用它们的形式。

哥德尔对选择公理与集合论公理的相对一致性的证明（参见[Kurt Gödel](https://plato.stanford.edu/entries/goedel/)条目）建立在一个完全不同的思想上：即_可定义性_。他通过类比于累积类型层次结构引入了一种新的集合层次结构——_可构造_层次。我们回顾一下后者是通过对序数进行以下递归定义的，其中 P(X)是 X 的幂集，α是一个序数，λ是一个极限序数：

V0Vα+1Vλ=∅=P(Vα)=⋃α<λVα

可构造层次是通过对序数进行类似的递归定义的，其中 Def(X) 是结构 (X,∈,(x)x∈X) 中可在一阶逻辑中定义的 X 的所有子集的集合:\[[7](https://plato.stanford.edu/entries/axiom-choice/notes.html#7)]

L0Lα+1Lλ=∅=Def(选择公理)=⋃α<λLα

*可构造宇宙* 是类 L=⋃α∈OrdLα；L 的成员是_可构造集_。 Gödel 表明（假设 Zermelo-Fraenkel 集合论公理 **ZF**）结构 (L,∈) 是 **ZF** 和_AC_以及广义连续体假设的模型）。*AC* 相对一致于 **ZF**。

这也被 Gödel（1964 年）（以及 Myhill 和 Scott 1971 年，Takeuti 1963 年和 Post 1951 年独立地）观察到，_选择公理_的相对一致性可以用_序数可定义性_来阐明。如果我们将 D(X)写为结构（X,∈）中一阶可定义的 X 的所有子集的集合，则_序数可定义集_的类 OD 被定义为并集⋃α∈OrdD(Vα)。_继承序数可定义集_的类 HOD 包括所有集合 a，其中 a，a 的成员，a 的成员的成员，...等都是序数可定义的。然后可以证明结构（HOD，∈）是**ZF** + _AC_的模型，从而_AC_与**ZF**的相对一致性再次得以证明。

## 3. 极大原理和佐恩引理

选择公理 与一组数学命题密切相关，这些命题统称为_极大原理_。广义上讲，这些命题断言特定条件足以确保偏序集合至少包含一个_极大元素_，即一个元素，对于给定的偏序关系，没有任何元素严格大于它。

要看最大元素的概念与_AC_之间的联系，让我们回到后者以索引集合形式表述的**AC2**。因此，假设我们有一个非空集合的索引家族 A={Ai:i∈I}。让我们定义 A 上的一个_潜在选择函数_为一个函数 f，其定义域是 I 的一个子集，使得对所有 i∈J，f(i)∈Ai。（这里使用_潜在_修饰语是因为定义域是 I 的一个子集；请记住，A 上的选择函数 f 具有与我们现在称之为潜在选择函数相同的属性，只是 f 的定义域要求是 I 的全部，而不仅仅是一个子集。）潜在选择函数集 P 可以通过包含关系进行部分排序：我们同意，对于 P 中的潜在选择函数 f、g，如果 f 的定义域包含在 g 的定义域中，并且 f 在其定义域的元素处的值与 g 的值相同，则关系 f≤g 成立。现在很容易看出，相对于部分排序≤，P 的最大元素恰好是 A 上的选择函数。

*Zorn's Lemma* 是确保存在这样的极大元素的最著名原理。为了陈述它，我们需要一些定义。给定一个偏序集合 (P,≤)，对于 P 的子集 X，如果存在元素 a∈P 使得对于每个 x∈X 都有 x≤a，则 a 被称为 X 的 *上界*；P 的 *极大元素* 可以被定义为一个元素 a，使得{a} 的上界集合与 {a} 相等，这基本上意味着没有任何 P 的元素严格大于 a。在 (P,≤) 中，*链* 是 P 的子集 C，满足对于任意 x, y∈P，要么 x≤y，要么 y≤x。如果 P 中的每个链都有一个上界，则称 P 是 *归纳* 的。现在 Zorn's Lemma 断言：

**Zorn’s Lemma** (**ZL**): Zorn 引理 (ZL):

每个非空的归纳偏序集合都有一个最大元素。

为什么 Zorn's Lemma 是可信的？这里是一个非正式的论证。给定一个非空的归纳偏序集合 (P,≤)，选择 P 的任意元素 p0。如果 p0 是极大的，就停在那里。否则选择一个元素 p1>p0；如果 p1 是极大的，就停在那里。否则选择一个元素 p2>p1，并重复这个过程。如果没有元素 p0\<p1\<p2<…\<pn<… 是极大的，那么 pi 构成一个链，由于 P 是归纳的，它有一个上界 q0。如果 q0 是极大的，就停在那里。否则，该过程可以重复进行，q0\<q1，...，然后迭代。这个过程最终必须终止，否则所生成的链的并集将构成一个集合，使得 P 本身成为一个集合，与假设相矛盾。过程终止的点产生了 P 的一个极大元素。

这个论证，经过适当严谨化，从 Zermelo-Fraenkel 集合论的**AC1**中给出了**ZL**的证明\[[9](https://plato.stanford.edu/entries/axiom-choice/notes.html#9)]：在这个证明中，**AC1**被用来“选择”非正式论证中提到的元素。

另一种 Zorn 引理的版本可以用集合的形式给出。给定一个集合 H，让我们称 H 中的任何子集合 N 为 *嵌套*，使得对于 N 中的任意一对成员，其中一个包含在另一个中。\[10] 如果 H 的任何嵌套的并集是 H 的成员，则称 H 为 *强归纳*。然后 Zorn 引理可以等价地重新陈述为任何非空的强归纳集合 H 中的集合具有一个极大成员，即一个不被 H 中任何成员适当包含的成员。这反过来可以用另一种形式表达。如果一个集合族在嵌套的交集下是封闭的，则称其为 *强还原*。那么任何非空的强还原集合族都有一个 *最小* 元素，即一个在该族中不包含任何成员的成员。

**选择公理 2** 现在可以从 Zorn 引理以这种替代形式轻松推导出来。对于索引集族 A 上的潜在选择函数集 P 显然是非空的，并且很容易证明它是强归纳的；因此 Zorn 引理得出在 A 上存在选择函数。

**CAC** 可以从 **ZL** 中推导出，这种方式回应了上面概述的 **CAC** 的“组合”理由。因此，假设我们有一个互不相交的非空集合族 H；如果对于任意的 X∈H，集合 S⊆⋃H 被称为 H 的一个 *抽样*，那么要么 X⊆S，要么 S∩X 是非空且有限的。最小的抽样恰好是 H 的横截集；\[[11](https://plato.stanford.edu/entries/axiom-choice/notes.html#11)] 显然，抽样的集合 T 明显是非空的，因为它包含 ⋃H。因此，如果可以证明 T 是强约简的，\[[12](https://plato.stanford.edu/entries/axiom-choice/notes.html#12)] Zorn 引理将产生 T 的最小元素，从而得到 H 的一个横截集。T 的强约简性可如下看待：假设 {Si:i∈I} 是一组抽样的嵌套；令 S=⋂i∈ISi。我们需要展示 S 本身也是一个抽样；为此，让 X∈H 并假设 ¬(X⊆S)。那么存在 i∈I 使得 ¬(X⊆Si)；由于 Si 是一个抽样，Si∩X 是有限且非空的，假设 Si∩X={x1,…,xn}。显然，S∩X 也是有限的；假设为了推导矛盾假设，假设 S∩X=∅。那么对于每个 k=1,…,n，都有 ik∈I 使得 ¬(xk∈Sik)。这意味着 ¬(Si⊆Sik)，对于 k=1,…,n。因此，由于 Si 构成一个链，每个 Sik 都是 Si 的子集。让 Si1,…,Sik 中最小的为 Sj；那么 Sj⊆Si。但由于 ¬(xk∈Sj)，对于 k=1,…,n，现在得出 Sj∩X=∅，这与 Sj 是一个抽样的事实相矛盾。因此 S∩X≠∅；S 就是一个抽样，如所述。

我们注意到，虽然 Zorn's lemma 和 选择公理 在集合论上是等价的，但从后者推导前者要比反过来困难得多。

这里是最大原理的简要时序。

\| 1909 | Hausdorff introduces first explicit formulation of a maximal principle and derives it from *AC* (Hausdorff 1909) | | 1909 | Hausdorff 首次提出了最大原理的明确表述，并从_AC_ (Hausdorff 1909) 推导出它 |

\| --- | --- |

\| 1914 | Hausdorff 的_Grundzüge der Mengenlehre_（集合论和一般拓扑学的最早著作之一）包括几个极大原理。|

\| 1922 | Kuratowski 制定并运用了几个极大原理，避免使用超限序数（Kuratowski 1922）。|

\| 1926–28 | Bochner 和其他人独立引入最大原理（Bochner 1928，Moore 1932）。|

\| 1935 | Max Zorn，显然不熟悉先前的极大原理表述，发表了（Zorn 1935）他的最终版本，后来成为他的引理（**ZL**）而广受赞誉。**ZL**最初是在 1933 年在汉堡制定的，Chevalley 和 Artin 迅速“采纳”了它。似乎是 Artin 首先意识到**ZL**将产生_AC_，因此这两者是等价的（在集合论的其余公理下）。Zorn 认为他的原则不太像定理，而更像一个_公理_——他希望它能取代代数中对超越归纳和良序的繁琐应用，这些应用在诺特学派的代数学家中被视为“超自然”设备。|

\| 1939–40 | Teichmüller, Bourbaki and Tukey independently reformulate **ZL** in terms of “properties of finite character”(Bourbaki 1939, Teichmuller 1939, Tukey 1940). | | 1939–40 | Teichmüller, Bourbaki 和 Tukey 独立地用“有限特性”重新阐述了 **ZL**（Bourbaki 1939, Teichmuller 1939, Tukey 1940）。|

## 4. 选择公理的数学应用

选择公理在数学中有许多应用，其中一些已被证明与其形式上等价\[13]。历史上最重要的应用是第一个，即：

**良序定理**（Zermelo 1904, 1908）。每个集合都可以被良序。

在 Zermelo 发表了他 1904 年关于良序定理的证明后，很快就看到这两者是等价的。

另一个早期等价的_选择公理_是

**乘法公理**（Russell 1906）。任何一组非零基数的乘积都是非零的。

早期应用包括：

*每个无限集合都有一个可数子集。这个原则，再次比_AC_弱，不能在集合论的其余公理的背景下证明。*

_每个无限基数等于它的平方。这在 Tarski 1924 年被证明等同于_AC *。*

*每个向量空间都有一个基（由 Hamel 1905 发起）。这被证明等价于_AC_在 Blass 1984 年。*

*每个领域都有一个代数闭包（Steinitz 1910）。这个断言比_AC_弱，实际上是第一阶逻辑（见下文）的（更弱的）紧致性定理的结果。*

*存在一个勒贝格不可测的实数集（Vitali 1905）。这后来被证明是_​***BPI***​*（见下文）的一个结果，因此比_AC\*要弱。Solovay（1970）证明了它与集合论的其余公理无关。

一个重要的“民间传说”等同于_选择公理_

**集合论分配律**。对于任意的双重索引集合族{Mi,j:i∈I,j∈J}，其中 JI 是所有定义域为 I 且取值在 J 中的函数集合：

⋂i∈I⋃j∈JMi,j=⋃f∈JI⋂i∈IMi,f(i)

一个被广泛研究的_选择公理_的特殊情况是

**依赖选择原理**（Bernays 1942，Tarski 1948）。对于集合 *A* 上的任何非空关系 *R*，其中 range(R)⊆domain(R)，存在一个函数 *f:ω→A*，使得对于所有 *n∈ω*，都有 R(f(n),f(n+1))。这个原理虽然比 *AC* 要弱（得多），但在集合论的其余公理的背景下，不能在没有 *AC* 的情况下证明它。

数学等价物包括： 选择公理

* **Tychonov’s Theorem** (1930): 紧致拓扑空间的乘积是紧致的。这被证明等价于_AC_在 Kelley 1950 中。但对于紧致 Hausdorff 空间，它等价于**BPI**（见下文），因此比_AC_弱。
* **Löwenheim-Skolem-Tarski 定理**（Löwenheim 1915, Skolem 1920, Tarski 和 Vaught 1957）：一个具有无限基数κ的一阶句子也具有任意无限基数μ的模型，使得μ≤κ。这被 Tarski 证明等价于_选择公理_。
* **Krein-Milman Theorem**: 实数范数线性空间的对偶单位球 B 具有一个极端点，即不是 B 中任何线段的内部点的点。这在 Bell 和 Fremlin 1972a 中被证明等价于 *AC*。在那里指出，对于任意非空集合的索引族 A，存在一个自然双射，将 A 上的选择函数与从 A 构造的某个实数范数线性空间的对偶单位球的极端点对应起来。

_每个分配格都有一个极大理想。这在 Klimovsky 1958 年被证明等价于_AC *，在 Bell 和 Fremlin 1972 年的集合格中也是如此。*

_每个带单位元的可交换环都有一个极大理想。这在 1979 年由霍奇斯证明等价于_选择公理 *。*

有一些数学后果是已知比它更弱的_选择公理_的，特别是：

* **布尔代数素理想定理** (**BPI**): 每个布尔代数都有一个极大（或素）理想。这在 Halpern 和 Levy 1971 年被证明比_AC_弱。
* **布尔代数的 Stone 表示定理**（Stone 1936）：每个布尔代数同构于一个集合的域。这等价于**BPI**，因此比_AC_弱。
* **选择公理** (Gödel 1930, Malcev 1937, others): 如果一阶句子集合的每个有限子集都有一个模型，那么该集合也有一个模型。这在 Henkin 1954 年被证明等价于**BPI**，因此比_AC_要弱。
* **第一阶逻辑的完备性定理**（哥德尔 1930 年，亨金 1954 年）：每个一阶句子的一致集合都有一个模型。亨金在 1954 年证明了这与**BPI**等价，因此比_AC_弱。如果以正确的方式指定模型的基数，这个断言就等价于_AC_。

最后，有选择公理

* **布尔代数的 Sikorski 扩展定理**（Sikorski 1949）：每个完备的布尔代数都是可插入的，即对于任何布尔代数 A 和任何完备的布尔代数 B，从 A 的子代数到 B 的任何同态映射都可以扩展到整个 A。

这个问题与_选择公理_的等价性是这一领域中仅存的几个有趣的未决问题之一；虽然它明显蕴含**BPI**，但在 1983 年的贝尔中被证明与**BPI**是独立的。

许多这些定理在 Bell and Machover (1977)中讨论。

## 5. 选择公理和逻辑

一个关于_选择公理_和逻辑之间的最初联系是通过回到其用关系形式**AC3**来阐述，即：任何二元关系都包含一个具有相同定义域的函数。这个版本的**选择公理**在一个具有个体变量 x、y、z…和函数变量 f、g、h…的二阶语言 L 中自然地可表达。在 L 中，二元关系由具有两个自由个体变量 x、y 的公式ϕ(x,y)来表示。在 L 中，**AC3**的断言对应的是

**选择公理**:

∀x∃yϕ(x,y)→∃f∀xϕ(x,fx). 选择公理.

这个句子方案是_选择公理_的标准逻辑形式。

Zermelo 的选择公理的原始形式，**AC1**，可以被表达为一系列句子的方案，位于适当加强版本的 L 内。因此，我们现在假设 L 还包含谓词变量 X，Y，Z，…和二阶函数变量 F，G，H，…。这里，二阶函数变量 F 可以应用于谓词变量 X，以产生一个个体术语 FX。这些句子的方案

**选择公理 1**：

∀X\[Φ(X)→∃xX(x)]→∃F∀X\[Φ(X)→X(FX)]

是在这个加强的二阶语言中直接对应于**AC1**。用文字来说，**AC1L**断言，如果每个具有某种性质Φ的谓词都有实例，那么就存在一个关于谓词的函数 F，使得对于任何满足Φ的谓词 X，FX 都是 X 的一个实例。在这里，谓词扮演着集合的角色。

直到现在，我们默认我们的背景逻辑是通常的古典逻辑。但是，只有当_直觉主义_或_建构性_逻辑被引入时，**AC**与逻辑之间的真正联系才会显现出来。一个引人注目的事实是，假设只有直觉逻辑框架以及某些温和的进一步假设，就可以显示出选择公理蕴含了古典逻辑的基本规则，排中律——对于任何命题 A，都有 A∨¬A 的断言。准确地说，使用直觉逻辑规则在我们的增强语言 L 中，我们将从**AC1L**与以下附加原则连接推导\[[15](https://plato.stanford.edu/entries/axiom-choice/notes.html#15)]排中律。

**预测性理解**：

∃X∀x\[X(x)↔ϕ(x)],其中 ϕ 不包含绑定函数或谓词变量。

**函数的外延性**：

∀X∀Y∀F\[X≈Y→FX=FY]，其中 X≈Y 是 ∀x\[X(x)↔Y(x)] 的缩写，即 X 和 Y 是_外延等价_。

**两个不同的个体**：

0–≠1–，其中 0– 和 1– 是个别常数。

现在让 A 是一个给定的命题。通过预测性理解，我们可以引入谓词常量 U，V 以及断言。

∀x\[U(x)↔(A∨x=0)]∀x[V(x)↔(A∨x=1)](1/)

让 Φ(X) 为公式 X≈U∨X≈V。那么显然我们可以断言 ∀X\[Φ(X)→∃xX(x)]，因此可以调用 **选择公理** 来断言 ∃F∀X\[Φ(X)→X(FX)]。现在我们可以引入一个函数常数 K 以及这样的断言。

∀X\[Φ(X)→X(KX)].(2)

由于显然我们可以断言 Φ(U) 和 Φ(V)，根据 (2)，我们可以断言 U(KU) 和 V(KV)，因此也可以利用 (1)，

\[A∨KU=0]∧\[A∨KV=1].

使用分配律（在直觉逻辑中成立），我们可以断言

A∨\[KU=0∧KV=1].

从前提 0≠1 的假设，我们得出

A∨KU≠KV(3)

是可以断言的。但从(1)可以推出我们可以断言 A→U≈V，因此也可以利用函数的外延性得出 A→KU=KV。这导致了 KU≠KV→¬A 的可断言性，再加上(3)便导致了可断言性。

A∨¬A

也就是，排中律。

选择公理暗示排中律的事实乍看之下似乎与前者经常被视为直觉主义逻辑控制的建构性数学系统中的_有效_原则相抵触，例如，Bishop 的建构分析\[[16](https://plato.stanford.edu/entries/axiom-choice/notes.html#16)]和 Martin-Löf 的建构类型理论\[[17](https://plato.stanford.edu/entries/axiom-choice/notes.html#17)]，在这些系统中不肯定排中律。用 Bishop 的话说，“在建构性数学中存在选择函数是因为选择_隐含在存在的含义之中_。” 因此，例如，**ACL**的前提∀x∃yϕ(x,y)，在建构解释下，只是_意味着_我们有一个程序，应用于每个 x，产生一个 y，使得ϕ(x,y)成立。但这恰恰是**ACL**的结论∃f∀xϕ(x,fx)所表达的内容。

为了解决这个困难，我们注意到从**ACL1**中推导出排中律时，必须基本使用谓词包容性和函数外延性原则\[[18](https://plato.stanford.edu/entries/axiom-choice/notes.html#18)]。由此可见，在肯定**AC**（但不是排中律）的构造性数学系统中，*谓词包容性原则或函数外延性原则必须失败*。虽然谓词包容性原则可以给出一个构造性的理由，但对于函数外延性原则却无法提供这样的理由。谓词上的函数是以内涵方式给出的，并且仅满足相应的内涵性原则∀X∀Y∀F\[X=Y→FX=FY]。函数外延性原则很容易通过考虑例如谓词 P：_有理无羽的两足动物_和 Q：_人类_以及函数 K（作用于谓词的函数，将每个谓词分配到其描述中的单词数）而失败。然后我们可以同意 P≈Q 但 KP=3 且 KQ=2。

在直觉性集合论（即基于直觉性而非经典逻辑的集合论，我们将其缩写为**IST**）和拓扑学中，预测性包容原理和函数外延性原理（均适当解释）成立，因此**AC**蕴含排中律。

从_选择公理_中首次推导出排中律的是 Diaconescu（1975 年）在范畴论设置中给出的。他的证明基本上采用了与上面提出的证明完全不同的思想；特别是，它不使用外延性原则，而是采用了对象（或集合）通过等价关系的商的概念。在**IST**中阐述 Diaconescu 的论证是很有启发性的。为了做到这一点，让我们称集合_A_的子集_U_为_可分离的_，如果存在集合_A_的子集_V_，使得_U∩V=∅_ 且_U∪V=A_。Diaconescu 的论证归结为从**AC4**（见上文）推导出每个集合的子集都是可分离的断言，从而很容易得出排中律。以下是它。

首先，给定 U⊆A，*U*（在 A 中）的指示器是一个满足

U={x∈A:g(x,0)=g(x,1)} -> U={x∈A:g(x,0)=g(x,1)}

很容易证明，子集是可分离的当且仅当它有一个指示器。

现在我们展示，如果**选择公理**成立，那么集合的任何子集都有一个指示器，因此是可分离的。

对于 U⊆A，让 R 成为 A+A=A×{0}∪A×{1}上的二元关系，给定如下

R={((x,0),(x,0)):x∈A}∪{((x,1),(x,1)):x∈A}∪{((x,0),(x,1):x∈A}∪{((x,1),(x,0)}:x∈A R={((x,0),(x,0)):x∈A}∪{((x,1),(x,1)):x∈A}∪{((x,0),(x,1):x∈A}∪{((x,1),(x,0)}:x∈A

可以检查到 R 是一个等价关系。写 r 表示从 A+A 到商集\[[21](https://plato.stanford.edu/entries/axiom-choice/notes.html#21)] Q 的自然映射，商集是通过 R 对 (A+A) 进行的商集，它将 A+A 的每个成员映射到它的 R−等价类。

现在应用**选择公理 4**来获得一个映射$f:Q→A+A$，满足对所有$X∈Q$，都有$f(X)∈X$。然后，很容易证明，记$\pi1$为第一个坐标的投影，

对于 n=0,1 和 x∈A, π1(f(r(x,n)))=x;(\*)

和

x∈U↔f(r(x,0))=f(r(x,1)).( **) -> x∈U↔f(r(x,0))=f(r(x,1)).(** )

现在定义 g:A×2→2 为 g=π2∘f∘r，其中 π2 是第二坐标的投影。那么 g 是 U 的指示器，如下等价关系所示：

x∈U↔f(r(x,0))=f(r(x,1))…by (\*\*)↔π1(f(r(x,0)))=π1(f(r(x,1)))∧π2(f(r(x,0)))=π2(f(r(x,1)))↔π2(f(r(x,0)))=π2(f(r(x,1)))…using (\*)↔g(x,0)=g(x,1。

证明完成。

可以显示（Bell 2006）, 一些直观上无效的逻辑原则，包括排中律，都等价于（直观集合论中）选择公理的适当削弱版本。因此，这些逻辑原则可以被视为选择原则。

这里涉及的逻辑原则是：

\| **SLEM** | α∨¬α (α 任意句子) |

\| --- | --- |

\| **Lin** | (α→β)∨(β→α) (α, β 任意句子) |

\| **石头** | ¬α∨¬¬α (α 任意句子) |

\| **选择** | ∃x\[∃xα(x)→α(x)] (α(x) 任意至多带有 x 自由的公式) |

\| **不** | ∃x\[α(x)→∀xα(x)] (α(x) 任意至多带有 x 自由变元的公式) |

\| **Dis** | ∀x\[α∨β(x)]→α∨∀xβ(x) (α 任意句子, β(x) 任意具有至多 x 自由变元的公式) |

在直觉主义逻辑中，**Lin**，**Stone**和**Ex**是**SLEM**的结果；而**Un**蕴含**Dis**。当然，所有这些方案都可以从排中律得出，即对任意公式都成立的**SLEM**。

在接下来的内容中，空集由 0 表示，{0}由 1 表示，{0,1}由 2 表示。

我们制定以下选择原则—这里 X 是一个任意集合， Fun(X) 是定义域为 X 的函数类， ϕ(x,y) 是至多具有自由变量 x, y 的集合论语言的任意公式：

\| **选择公理**X | ∀x∈X 存在 yϕ(x,y)→存在 f∈Fun(X) ∀x∈X ϕ(x,fx) |

\| --- | --- |

\| **选择公理**∗X | ∃f∈Fun(X)\[∀x∈X ∃yϕ(x,y)→∀x∈X ϕ(x,fx)] |

\| **选择公理** | ∀f∈Fun(X) 存在 x∈X ϕ(x,fx)→存在 x∈X ∀yϕ(x,y) |

\| **选择公理**∗X | ∃f∈Fun(X) \[∃x∈X ϕ(x,fx)→∃x∈X ∀yϕ(x,y)] |

第一和第二个是_X_的_AC_形式；虽然在古典逻辑中等价，但在**IST**中**AC**∗X 意味着**AC**X，但反之不成立。原则**DAC**X 和**DAC**∗X 是_X_的选择公理的对偶形式：在古典逻辑中它们都等价于**AC**X 和**AC**∗X，但在直觉主义中**DAC**∗X 意味着**DAC**X，反之则不然。

我们还制定了_弱外延选择原则_，其中α(x)和β(x)是具有最多自由变量 x 的任意公式：

**WESP**:

∃x∈2 α(x)∧∃x∈2 β(x)→∃x∈2 ∃y∈2 \[α(x)∧β(y)∧\[∀x∈2 \[α(x)↔β(x)]→x=y]].

这个原则是选择公理的一个直接推论，它断言对于 2 的成员的任何一对被实例化的属性，可以以仅仅取决于它们的外延的方式将实例分配给这些属性。

每个上表中列出的逻辑原理都等价于（在**IST**中）一个选择原理。实际上：

* **WESP** 和 **SLEM** 在 **IST** 上是等价的。
* **选择公理**∗1 和 **Ex** 在 **IST** 上是等价的。

此外，虽然**DAC**1 在**IST**中很容易被证明，我们有

* **DAC**∗1 和 **Un** 在 **IST** 上是等价的。

接下来，虽然**AC**2 在**IST**中很容易证明，相比之下我们有

* **DAC**2 和 **Dis** 在 **IST** 上是等价的。
* 在**IST**之上，**DAC**∗2 等同于**Un**，因此也等同于**DAC**∗1。

为了提供与**Lin**和**Stone**等价的选择方案，我们引入

**选择公理**∗X:

∃f∈2X\[∀x∈X ∃y∈2 ϕ(x,y)→∃x∈X ϕ(x,fx)] --> ∃f∈2X\[∀x∈X ∃y∈2 ϕ(x,y)→∃x∈X ϕ(x,fx)]

**wac**∗X:

∃f∈2X\[∀x∈X ∃y∈2 ϕ(x,y)→∀x∈X ϕ(x,fx)] provided it is provable in **IST** that ∀x\[ϕ(x,0)→¬ϕ(x,1)] 存在 f∈2X\[∀x∈X ∃y∈2 ϕ(x,y)→∀x∈X ϕ(x,fx)] ，假设在**IST**中可以证明 ∀x\[ϕ(x,0)→¬ϕ(x,1)]

显然 **ac**∗X 等价于

∃f∈2X\[∀x∈X\[ϕ(x,0)∨ϕ(x,1)]→∀x∈X ϕ(x,fx)] --> ∃f∈2X\[∀x∈X\[ϕ(x,0)∨ϕ(x,1)]→∀x∈X ϕ(x,fx)]

同样地对于 **dac**∗X。

然后，在**IST**中，**ac**∗1 和**dac**∗1 分别等同于**Lin**和**Stone**。

这些结果展示了选择原理与逻辑是如何深入交互的，当假定背景逻辑是直觉主义时。在假定排中律成立的古典设置中，这些联系被抹去。

对选择公理和类型理论感兴趣的读者可以参考以下补充文件：

> [选择公理和类型理论](https://plato.stanford.edu/entries/axiom-choice/choice-and-type-theory.html)

## Bibliography

* Aczel, P., 1978. “The type-theoretic interpretation of constructive set theory,” in A. ManIntyre, L. Pacholski, and J. Paris (eds.), *Logic Colloquium 77*, Amsterdam: North-Holland, pp. 55–66.
* –––, 1982. “The type-theoretic interpretation of constructive set theory: choice principles,” in A. S. Troelstra and D. van Dalen (eds.), *The L.E.J. Brouwer Centenary Symposium*, Amsterdam: North-Holland, pp. 1–40.
* Aczel, P. and N. Gambino, 2002. “Collection principles in dependent type theory,” in P. Callaghan, Z. Luo, J. McKinna and R. Pollack (eds.), *Types for Proofs and Programs* (Lecture Notes on Computer Science, Volume 2277), Berlin: Springer, pp. 1–23.
* –––, 2005. “The generalized type-theoretic interpretation of constructive set theory,” *Journal of Symbolic Logic*, 71/1: 67–103. \[[Preprint available online in compressed Postscript](http://www.cs.man.ac.uk/\~petera/gambino-aczel.ps.gz)]
* Aczel, P., Berg, B. and J. Granstrom, 2013. “Are there enough injective sets?,” *Studia Logica*, 101(3): 467–482.
* Aczel, P. and M. Rathjen, 2001. *Notes on Constructive Set Theory*. Technical Report 40, Mittag-Leffler Institute, The Swedish Royal Academy of Sciences. \[[Preprint available online](http://www.mittag-leffler.se/sites/default/files/IML-0001-40.pdf)]
* Banach, S. and Tarski, A., 1924. “Sur la décomposition des ensembles de points en parties respectivement congruentes,” *Fundamenta Mathematicae*, 6: 244–277.
* Bell, J.L., 1983. “On the strength of the Sikorski extension theorem for Boolean algebras,” *Journal of Symbolic Logic*, 48: 841–846.
* –––, 1988. *Toposes and Local Set Theories: An Introduction*, Oxford: Clarendon Press.
* –––, 1997. “Zorn’s lemma and complete Boolean algebras in intuitionistic type theories,” *Journal of Symbolic Logic*, 62: 1265–1279.
* –––, 2003. “Some new intuitionistic equivalents of Zorn’s Lemma,” *Archive for Mathematical Logic*, 42: 811–814.
* –––, 2005. *Set Theory: Boolean-valued Models and Independence Proofs*, Oxford: Clarendon Press.
* –––, 2006. “Choice principles in intuitionistic set theory,” in *A Logical Approach to Philosophy*, Devidi, D. and Kenyon, T.(eds.), Berlin: Springer, 36–44.
* –––, 2008. “The axiom of choice and the law of excluded middle in weak set theories,” *Mathematical Logic Quarterly*, 48: 841–846.
* –––, 2009. *The Axiom of Choice*, London: College Publications.
* –––, 2011. “The axiom of choice in an elementary theory of operations and sets” in *Analysis and Interpretation in the Exact Sciences*, Devidi, D. and Kenyon, T.(eds.), Berlin: Springer, 163–175.
* Bell, J.L. and Fremlin, D., 1972. “The maximal ideal theorem for lattices of sets,” *Bulletin of the London Mathematical Society*, 4: 1–2.
* –––, 1972a. “A geometric form of the axiom of choice,” *Fundamenta Mathematicae*, 77: 167–170.
* Bell, J.L. and Machover, M. , 1977. *A Course in Mathematical Logic*. Amsterdam: North-Holland.
* Bernays, P., 1942. “A system of axiomatic set theory, Part III,” *Journal of Symbolic Logic*, 7: 65–89.
* Bishop, E. and Bridges, D., 1985. *Constructive Analysis*, Berlin: Springer.
* Blass, A., 1984. “Existence of bases implies the axiom of choice,” in *Axiomatic Set Theory*, Baumgartner, Martin and Shelah (eds.) (Contemporary Mathematics Series, Volume 31), American Mathematical Society, pp. 31–33.
* Bochner, S., 1928. “Fortsetzung Riemannscher Flachen,” *Mathematische Annalen*, 98: 406–421.
* Bourbaki, N., 1939. *Elements de Mathematique, Livre I: Theorie des Ensembles*, Paris: Hermann.
* –––, 1950.“Sur le theoreme de Zorn,” *Archiv dem Mathematik*, 2: 434–437.
* Cohen, P.J., 1963. “The independence of the continuum hypothesis I,” *Proceedings of the U.S. National Academy of Sciemces*, 50: 1143–48.

    \[The independence of the Axiom of Choice from the standard axioms of set theory, ZF, is part of Theorem 1 of this paper.]
* –––, 1964. “The independence of the continuum hypothesis II,” *Proceedings of the U.S. National Academy of Sciemces*, 51: 105–110.
* –––, 1966. *Set Theory and the Continuum Hypotheis*, New York: Benjamin.
* Curry, H.B. and R. Feys, 1958. *Combinatory Logic*, Amsterdam: North Holland.
* Devidi, D., 2004. “Choice principles and constructive logics,” *Philosophia Mathematica*, 12(3): 222–243.
* Diaconescu, R., 1975. “Axiom of choice and complementation,” *Proceedings of the American Mathematical Society*, 51: 176–8.
* Fraenkel, A., 1922. “Zu den Grundlagen der Cantor-Zermeloschen Mengenlehre”, *Mathematische Annalen*, 86: 230–237.
* Fraenkel, A., 1922a.“Über den Begriff ‘definit’ und die Unabhängigkeit des Auswahlsaxioms,” *Sitzungsberichte der Preussischen Akademie der Wissenschaften, Physik-math. Klasse*, 253–257. Translated in van Heijenoort, From Frege to Gödel: A Source Book in Mathematical Logic 1879–1931, Harvard University Press, 1967, pp. 284–289.
* Fraenkel, A., Y. Bar-Hillel and A. Levy, 1973. *Foundations of Set Theory*, Amsterdam: North-Holland, 2nd edition.
* Gödel, K., 1938a. “The consistency of the axiom of choice and of the generalized continuum-hypothesis,” *Proceedings of the U.S. National Academy of Sciences*, 24: 556–7.
* Gödel, K., 1938b. “Consistency-proof for the generalized continuum-hypothesis,” *Proceedings of the U.S. National Academy of Sciemces*, 25: 220–4.
* Gödel, K., 1940. *The Consistency of the Axiom of Choice and of the Generalized Continuum-Hypothesis with the Axioms of Set Theory*, Annals of Mathematics Studies, No. 3, Princeton: Princeton University Press.
* Gödel, K., 1964. “Remarks before the Princeton Bicentennial Conference,” in *The Undecidable*, Martin Davis (ed.), CITY: Raven Press, pp. 84–88.
* Goodman, N. and Myhill, J., 1978. “Choice implies excluded middle,” *Zeitschrift fur Mathematische Logik und Grundlagen der Mathematik* , 24(25–30): 461.
* Grattan-Guinness, I., 2012. “Jourdain, Russell and the axiom of choice: a new document,” *Russell: The Journal of the Bertrand Russell Archives*, 32(1): 69–74.
* Grayson, R.J., 1975. “A sheaf approach to models of set theory,” M.Sc. Thesis, Mathematics Department, Oxford University.
* Halpern, , J.D. and Levy, A., 1971. “The Boolean prime ideal theorem does not imply the axiom of choice,” *Axiomatic Set Theory*, Proceedings of Symposia in Pure Mathematics, Vol. XIII, Part I. American Mathematical Society, pp. 83–134.
* Hamel, G., 1905. “Eine Basis aller Zahlen und die unstetigen Lösungen der Funktionalgleichung: *f(x* + *y*) = *f(x*) + *f(y*),” *Mathematische Annalen*, 60: 459–62.
* Hausdorff, F., 1909. “Die Graduierung nach dem Endverlauf,” *Königlich Sächsichsen Gesellschaft der Wissenschaften zu Leipzig, Math.—Phys. Klasse, Sitzungberichte*, 61: 297–334.
* –––, 1914. *Grundzüge der Mengenlehre*, Leipzig: de Gruyter. Reprinted, New York: Chelsea, 1965.
* –––, 1914a. “Bemerkung über den Inhalt von Punktmengen,” *Mathematische Annalen*, 75: 428–433.
* Hilbert D., 1926. “Über das Unendliche,” *Mathematische Annalen*, 95. Translated in J. van Heijenoort (ed.) *From Frege to Gödel: A Source Book in Mathematical Logic, 1879–1931*, Cambridge, MA: Harvard University Press, 1967, pp. 367–392.
* Hodges, W., 1979. “Krull implies Zorn,” *Journal of the London Mathematical Society*, 19: 285–7.
* Howard, P. and Rubin, J. E., 1998. *Consequences of the Axiom of Choice*, American Mathematical Society Surveys and Monographs, Vol. 59.
* Howard, W. A., 1980. “The formulae-as-types notion of construction,” in J. R. Hindley and J. P. Seldin (eds.), *To H. B. Curry: Essays on Combinatorial Logic. Lambda Calculus and Formalism*, New York and London: Academic Press, pp. 479–490.
* Jacobs, B., 1999. *Categorical Logic and Type Theory*, Amsterdam: Elsevier.
* Jech, T., 1973. *The Axiom of Choice*, Amsterdam: North-Holland.
* Kelley, J.L., 1950. “The Tychonoff product theorem implies the axiom of choice,” *Fundamenta Mathematicae*, 37: 75–76.
* Klimovsky, G., 1958. “El teorema de Zorn y la existencia de filtros a ideales maximales en los reticulados distributivos,” *Revista de la Union Matematica Argentina* , 18: 160–64.
* Kuratowski, K., 1922. “Une méthode d’élimination des nombres transfinis des raissonements mathématiques,” *Fundamenta Mathematicae*, 3: 76–108.
* Lawvere, F. W. and Rosebrugh, R., 2003. *Sets for Mathematics*, Cambridge: Cambridge University Press.
* Lindenbaum, A., and Mostowski, A., 1938. “Über die Unabhängigkeit des Auswahlsaxioms und einiger seiner Folgerungen,” *Comptes Rendus des Séances de la Société des Sciences et des Lettres de Varsovie*, 31: 27–32.
* Maietti, M.E., 2005. “Modular correspondence between dependent type theories and categories including pretopoi and topoi,” *Mathematical Structures in Computer Science*, 15/6: 1089–1145.
* Martin-Löf, P., 1975. “An Intuitionistic theory of types; predicative part,” in H. E. Rose and J. C. Shepherdson (eds.), *Logic Colloquium 73*, Amsterdam: North-Holland, pp. 73–118.
* –––, 1982. “Constructive mathematics and computer programming,” in L. C. Cohen, J. Los, H. Pfeiffer, and K.P. Podewski (eds.), *Logic, Methodology and Philosophy of Science VI*, Amsterdam: North-Holland, pp. 153–179.
* –––, 1984. *Intuitionistic Type Theory*, Naples: Bibliopolis.
* –––, 2006. “100 years of Zermelo’s axiom of choice: what was the problem with it?,” *The Computer Journal*, 49(3): 345–350.
* Mendelson, E., 1956. “The independence of a weak axiom of choice,” *Journal of Symbolic Logic*, 21: 350–366.
* –––, 1958. “The axiom of fundierung and the axiom of choice,” *Arkiv fur Mathematische Logik und Grundlagenforschung*, 4: 67–70.
* –––, 1987. *Introduction to Mathematical Logic*, CITY: Wadsworth & Brooks, 3rd edition.
* Moore, G.H., 1982. *Zermelo’s Axiom of Choice*, Berlin: Springer-Verlag.
* Moore, R.L., 1932. *Foundations of Point Set Theory*, Anerican Mathematical Society Colloquium Publications, vol. 13.
* Myhill, J. and Scott, D.S., 1971. “Ordinal definability,” *Axiomatic Set Theory*. Proceedings of Symposia in Pure Mathematics, Vol. XIII, Part I. American Mathematical Society, pp. 271–8.
* Post, E.L., 1953. “A necessary condition for definability for transfinite von Neumann-Gödel set theory sets, with an application to the problem of the existence of a definable well-ordering of the continuum.” Preliminary Report, *Bulletin of the American Mathematical Society*, 59: 246.
* Ramsey, F. P., 1926. “The foundations of mathematics,” *Proceedings of the London Mathematical Society*, 25: 338–84. Reprinted in *The Foundations of Mathematics and Other Essays*, D.H. Mellor, ed. London: Routledge, 2001.
* Rubin, H. and Rubin, J. E., 1985. *Equivalents of the Axiom of Choice II*, Amsterdam: North-Holland.
* Rubin, H. and Scott, D.S., 1954. “Some topological theorems equivalent to the prime ideal theorem,” *Bulletin of the American Mathematical Society*, 60: 389.
* Russell, B., 1906. “On some difficulties in the theory of transfinite numbers and order types,” *Proceedings of the London Mathematical Society*, 4(2): 29–53.
* Shoenfield, J. R., 1955. “The independence of the axiom of choice,” *Journal of Symbolic Logic*, 20: 202.
* Sikorski, R., 1948. “A theorem on extensions of homomorphisms,” *Annales de la Societé Polonaise de Mathématiques*, 21: 332–35.
* Solovay, R., 1970. “A model of set theory in which every set of reals is Lebesgue measurable,” *Annals of Mathematics*, 92: 1–56.
* Specker, E., 1957. “Zur Axiomatik der Mengenlehre (Fundierungs- und Auswahlaxiom),” *Zeit. Math. Logik und Grund.*, 3: 173–210.
* Steinitz, E., 1910. “Algebraische Theorie der Körper,” *Journal für die Reine und angewandte Mathematik (Crelle)*, 137: 167–309.
* Stone, M.H., 1936. “The theory of representations for Boolean algebras,” *Transactions of the American Mathematical Society*, 40: 37–111.
* Tait, W. W., 1994. “The law of excluded middle and the axiom of choice,” in *Mathematics and Mind*, A. George (ed.), New York: Oxford University Press, pp. 45–70.
* Takeuti, G., 1961. “Remarks on Cantor’s Absolute,” *Journal of the Mathematical Society of Japan*, 13: 197–206.
* Tarski, A., 1948. “Axiomatic and algebraic aspects of two theorems on sums of cardinals,” *Fundamenta Mathematicae*, 35: 79–104.
* Tarski, A., and Robert L. Vaught, 1957. “Arithmetical extensions of relational systems,” *Compositio Mathematica*, 13: 81–102. \[[Tarski & Vaught 1957 available online](http://www.numdam.org/article/CM\1956-1958\\13\\81\0.pdf)]
* Teichmuller, O., 1939. “Brauch der Algebraiker das Auswahlaxiom?” *Deutsches Mathematik*, 4: 567–577.
* Vitali, G., 1905. *Sul problema della misura dei gruppi di punti di una retta*, Bologna: Tip. Gamberini e Parmeggiani.
* Wagon, S., 1993.*The Banach-Tarski Paradox*, Cambridge University Press.
* Zermelo, E., 1904. “Neuer Beweis, dass jede Menge Wohlordnung werden kann (Aus einem an Herrn Hilbert gerichteten Briefe)”, *Mathematische Annalen*, 59: 514–16. Translated in J. van Heijenoort (ed.), *From Frege to Gödel: A Source Book in Mathematical Logic, 1879–1931*, Cambridge, MA: Harvard University Press, 1967, pp. 139–141.
* –––, 1908. Neuer Beweis für die Möglichkeit einer Wohlordnung, *Mathematische Annalen*, 65: 107–128. Translated in J. van Heijenoort (ed.), *From Frege to Gödel: A Source Book in Mathematical Logic, 1879–1931*, Cambridge, MA: Harvard University Press, 1967, pp. 183–198.
* –––, 1908a.“Untersuchungen uber die Grundlagen der Mengenlehre,” *Mathematische Annalen*, 65: 107–128. Translated in J. van Heijenoort (ed.), *From Frege to Gödel: A Source Book in Mathematical Logic, 1879–1931*, Cambridge, MA: Harvard University Press, 1967, pp. 199–215.
* Zorn, M., 1935. A remark on method in transfinite algebra, *Bulletin of the American Mathematical Society*, 41: 667–70.

## Academic Tools

| ![sep man icon](../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=axiom-choice).                                                                      |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![sep man icon](../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/axiom-choice/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
| ![inpho icon](../.gitbook/assets/inpho.png)         | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=axiom-choice\&redirect=True) at the Internet Philosophy Ontology Project (InPhO).   |
| ![phil papers icon](../.gitbook/assets/pp.png)      | [Enhanced bibliography for this entry](http://philpapers.org/sep/axiom-choice/) at [PhilPapers](http://philpapers.org/), with links to its database.                            |

## Other Internet Resources

* [A home page for the axiom of choice](http://www.math.vanderbilt.edu/\~schectex/ccc/choice.html), maintained by Eric Schecter (Vanderbilt).

## Related Entries

[category theory](https://plato.stanford.edu/entries/category-theory/) | [Gödel, Kurt](https://plato.stanford.edu/entries/goedel/) | [logic, history of: intuitionistic logic](https://plato.stanford.edu/entries/intuitionistic-logic-development/) | [logic: intuitionistic](https://plato.stanford.edu/entries/logic-intuitionistic/) | [mathematics: constructive](https://plato.stanford.edu/entries/mathematics-constructive/) | [set theory: constructive and intuitionistic ZF](https://plato.stanford.edu/entries/set-theory-constructive/) | [set theory: Zermelo’s axiomatization of](https://plato.stanford.edu/entries/zermelo-set-theory/) | [type theory: intuitionistic](https://plato.stanford.edu/entries/type-theory-intuitionistic/)

### Acknowledgments

The author and editors would like to thank Jesse Alama for carefully reading this piece and making many valuable suggestions for improvement.

[Copyright © 2021](https://plato.stanford.edu/info.html#c) by\
[John L. Bell](http://publish.uwo.ca/\~jbell/) <[*jbell@uwo.ca*](mailto:jbell%40uwo%2eca)>
