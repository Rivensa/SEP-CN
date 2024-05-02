# 范畴论 category theory (Jean-Pierre Marquis)

*首次发表于 1996 年 12 月 6 日；实质性修订于 2019 年 8 月 29 日*

范畴论已经成为当代数学和理论计算机科学的中心领域，并且也被应用于数学物理学。大致而言，它是关于结构和结构系统的一般数学理论。由于范畴论仍在发展，其功能也相应地在发展、扩展和增多。至少，它是一种强大的语言，或概念框架，使我们能够看到某种特定类型结构族的通用组成部分，以及不同类型结构之间的相互关系。范畴论既是哲学研究的一个有趣对象，也是一个潜在强大的形式工具，用于哲学对空间、系统甚至真理等概念的调查。它可以应用于逻辑系统的研究，在这种情况下，范畴论被称为“范畴学说”，涉及句法、证明论和语义层面。范畴论甚至导致对集合的不同理论构想，从而为数学的标准集合论基础提供可能的替代方案。因此，它引发了许多关于数学本体论和认识论的问题。范畴论为哲学家和逻辑学家提供了许多可以利用和思考的内容。

***

## 1. 一般定义，示例和应用

### 1.1 定义

范畴是具有许多互补性质的代数结构，例如几何、逻辑、计算、组合等，就像群是多面向的代数结构一样。Eilenberg & Mac Lane（1945）以纯辅助的方式引入了范畴，作为他们所称的函子和自然变换的准备。范畴的定义随着时间的推移而演变，根据作者选择的目标和元数学框架。Eilenberg & Mac Lane 最初给出了范畴的纯抽象定义，沿着群的公理化定义的思路。其他人，从 Grothendieck（1957）和 Freyd（1964）开始，出于实用性的考虑，选择用集合论术语来定义范畴。

一种替代方法，即 Lawvere（1963 年，1966 年）的方法，首先对范畴的范畴进行表征，然后规定范畴是该宇宙的一个对象。这种方法正在被各种数学家、逻辑学家和数学物理学家积极发展，导致了现在所谓的“高维范畴”（Baez 1997，Baez＆Dolan 1998a，Batanin 1998，Leinster 2002，Hermida 等人 2000 年，2001 年，2002 年）。范畴的定义本身具有哲学重要性，因为对范畴论作为基础框架的反对之一是，由于范畴被_定义_为集合，范畴论无法为数学提供哲学上启发性的基础。我们将简要介绍其中一些定义，从 Eilenberg 和 Mac Lane（1945 年）的代数定义开始。然而，在进一步讨论之前，将需要以下定义。

**定义**：如果存在任何乘积 eα 或 βe，则称映射 e 为_恒等映射_，当且仅当 eα=α 和 βe=β

这是范畴的原始定义。

**定义**（Eilenberg & Mac Lane 1945）：一个范畴 C 是一个抽象元素的集合 Ob，称为 C 的_对象_，以及抽象元素**Map**，称为范畴的_映射_。这些映射受以下五个公理约束：

(C1) 鉴于三个映射 α1,α2 和 α3，当且仅当 (α3α2)α1 被定义时，三重积 α3(α2α1) 被定义。当任一被定义时，结合律

α3(α2α1)=(α3α2)α1

持有。这个三重积写作 α3α2α1。

（C2）只要两个积 α3α2 和 α2α1 都有定义，三重积 α3α2α1 就被定义。

(C3) 对于每个映射 α，至少存在一个恒等元素 e1 使得 αe1 被定义，并且至少存在一个恒等元素 e2 使得 e2α 被定义。

(C4) 与每个对象 X 对应的映射 eX 是一个恒等映射。

(C5) 对于每个身份 e，都有一个唯一的 C 的对象 X，使得 eX=e。

正如 Eilenberg & Mac Lane 迅速指出的，对象起着次要的作用，可以完全从定义中省略。然而，这样做会使应用的操作不太方便。在实践中，以映射和对象的术语思考可能更合适，也许在心理上更简单。术语“聚合”是由 Eilenberg & Mac Lane 自己使用的，可能是为了保持中立，不受想要采用的背景集合论的影响。

Eilenberg & Mac Lane 在 1945 年出于严谨性的原因定义了范畴。正如他们所指出的：

> 首先应该注意到，范畴的整个概念本质上是一个辅助性的概念；我们的基本概念本质上是函子和自然变换的概念（…）。范畴的概念之所以需要，仅仅是因为每个函数应该有一个明确定义的类作为定义域和一个明确定义的类作为值域的原则，因为范畴被提供作为函子的定义域和值域。因此，人们可以完全放弃范畴的概念，采用更直观的观点，其中像“Hom”这样的函子并非在“所有”群的范畴上定义，而是针对每对可能给定的特定群。这种观点对应用是足够的，因为我们的任何发展都不会涉及对范畴本身的复杂构造。（1945 年，第 1 章，第 6 段，第 247 页）

事物在接下来的十年发生了变化，当范畴开始在代数拓扑学和同调代数中被使用。Mac Lane，Buchsbaum，Grothendieck 和 Heller 正在考虑范畴，其中两个固定对象之间的态射集合具有额外的结构。更具体地，对于范畴 C 的任意两个对象 X 和 Y，从 X 到 Y 的态射的集合 Hom(X,Y) 形成一个阿贝尔群。此外，出于与同调和上同调理论相关的原因，范畴的定义必须满足一个额外的形式属性（我们暂且不讨论）：它必须是自对偶的。这些要求导致了以下定义。

**定义**：一个范畴 C 可以被描述为一个集合 Ob，其成员是 C 的对象，满足以下三个条件：

*态射*：对于每一对对象 X，Y，都有一个集合 Hom(X,Y)，称为 C 中从 X 到 Y 的_态射_。如果 f 是从 X 到 Y 的态射，我们写作 f:X→Y。

*同一性*：对于每个对象 X，存在一个 Hom(X,X)中的态射 idX，称为 X 上的_同一性_。

*范畴*：对于每个三元组 X,Y 和 Z 的对象，存在一个从 Hom(X,Y)×Hom(Y,Z) 到 Hom(X,Z) 的部分二元运算，称为 C 中态射的合成。如果 f:X→Y 和 g:Y→Z，则 f 和 g 的合成记为 (g∘f):X→Z。

恒同态、态射和合成满足两个公理：

*结合律*：如果 f:X→Y，g:Y→Z 和 h:Z→W，则 h∘(g∘f)=(h∘g)∘f。

*单位元*：如果 f:X→Y，则 (idY∘f)=f 和 (f∘idX)=f。

这是大多数范畴论教科书中所找到的定义。因此，它明确依赖于集合论背景和语言。一种替代方案是由 Lawvere 在六十年代初提出的，即为范畴的范畴开发一个适当的语言和背景框架。我们不会在这里介绍正式的框架，因为这会让我们偏离我们的主要关注点，但基本思想是定义所谓的弱 n-范畴（和弱ω-范畴），之前称为范畴的东西将被称为弱 1-范畴（而集合将被称为弱 0-范畴）。 （例如，参见 Baez 1997，Makkai 1998，Leinster 2004，Baez＆May 2010，Simpson 2011。）

同样在六十年代，Lambek 提出将范畴视为演绎系统。这始于一个_图_的概念，包括两个类_箭头_和_对象_，以及它们之间的两个映射，s：Arrows→Objects 和 t：Arrows→Objects，即源和目标映射。箭头通常被称为“定向边缘”，而对象被称为“节点”或“顶点”。在此之后，一个_演绎系统_是一个带有指定箭头的图：

(R1) idX：X→X，

以及箭头的二元运算：

(R2) 鉴于 f:X→Y 和 g:Y→Z，f 和 g 的合成是 (g∘f):X→Z。

当然，演绎系统的对象通常被认为是_公式_，箭头被认为是_证明_或_推导_，箭头上的操作被认为是_推理规则_。*范畴* 被定义如下：

**定义**（Lambek）：一个_范畴_是一个演绎系统，在其中以下方程式在证明之间成立：对于所有的 f：X→Y，g：Y→Z 和 h：Z→W，

（E1） f∘idX=f， idY∘f=f， h∘(g∘f)=(h∘g)∘f。

因此，通过对证明施加适当的等价关系，任何演绎系统都可以转化为一个范畴。因此，将范畴视为演绎系统的代数编码是合法的。这种现象对逻辑学家来说已经是众所周知的，但可能还没有完全意识到。这种代数编码的一个例子是林登鲍姆-塔斯基代数，它是对应于经典命题逻辑的布尔代数。由于布尔代数是偏序集，它也是一个范畴。（还要注意，具有适当同态的布尔代数之间形成逻辑中另一个有用的范畴。）到目前为止，我们只是换了一种词汇。当考虑一阶和高阶逻辑时，事情变得更有趣。对于这些系统的林登鲍姆-塔斯基代数，如果正确进行，会产生范畴，有时被称为“概念范畴”或“句法范畴”（Mac Lane & Moerdijk 1992，Makkai & Reyes 1977，Pitts 2000）。

### 1.2 例子

几乎每个已知的具有适当结构保持映射的数学结构示例都会产生一个范畴。

1. 具有对象集合和态射常规函数的范畴_Set_。这里有一些变体：可以考虑部分函数，或者单射函数，或者满射函数。在每种情况下，因此构建的范畴都是不同的。
2. 用拓扑空间和态射连续函数的范畴_Top_。再次，可以将态射限制为_开_连续函数，从而得到一个不同的范畴。
3. 用拓扑空间和同伦函数等价类的态射的范畴_hoTop_。这个范畴不仅在数学实践中很重要，它是代数拓扑的核心，而且也是一个基本的范畴示例，其中态射不是结构保持函数。
4. 具有对象向量空间和态射线性映射的范畴_Vec_。
5. 具有对象微分流形和态射光滑映射的范畴_Diff_。
6. 具有对象预序和偏序集的范畴_Pord_和_PoSet_，以及保序函数的态射。
7. 具有格和布尔代数对象的范畴_Lat_和_Bool_，以及保结构同态的态射，即(⊤,⊥,∧,∨)同态。
8. 具有对象 Heyting 代数和 (⊤,⊥,∧,∨,→) 同态的范畴 *Heyt*。
9. 具有对象幺半群和幺半群同态的范畴 *Mon*。
10. 具有对象阿贝尔群和态射群同态的范畴 *AbGrp*，即 (1,×,(−)−1) 同态。
11. 具有对象群和态射群同态的范畴 *Grp*，即 (1,×,(−)−1) 同态。
12. 具有对象环（带单位）和态射环同态的范畴 *Rings*，即 (0,1,+,×) 同态。
13. 具有对象域和态射域同态的范畴 *Fields*，即 (0,1,+,×) 同态。
14. 具有对象公式和态射证明的任何演绎系统 T。

这些例子很好地说明了范畴论如何以统一的方式处理结构的概念。请注意，一个范畴是由其态射而不是由其对象来表征的。因此，具有开映射的拓扑空间范畴与具有连续映射的拓扑空间范畴不同 - 或者更准确地说，后者的范畴属性与前者的不同。

我们应该再次强调，并非所有范畴都由具有保结构映射的结构集构成。因此，任何预序集都是一个范畴。对于预序集的两个元素 p、q，只有当 p≤q 时，才存在一个态射 f:p→q。因此，预序集是一个范畴，其中任意两个对象之间最多只有一个态射。任何幺半群（因而任何群）都可以看作是一个范畴：在这种情况下，该范畴只有一个对象，其态射是幺半群的元素。态射的合成对应于幺半群元素的乘法。很容易验证，幺半群公理对应于范畴公理。

因此，范畴的概念推广了预序和幺半群的概念。我们还应指出，群 oid 在范畴背景下有一个非常简单的定义：它是一个每个态射都是同构的范畴，也就是说，对于任意态射 f:X→Y，存在一个态射 g:Y→X，使得 f∘g=idX 和 g∘f=idY。

### 1.3 理论的基本概念

范畴论以两种不同的方式统一数学结构。首先，正如我们所看到的，几乎每个在集合论意义下定义的数学结构，只要具有适当的同态概念，就会产生一个范畴。这是在一个集合论环境中提供的统一。其次，也许更重要的是，一旦某种类型的结构被定义，就必须确定如何从给定的结构中构造新的结构。例如，给定两个集合 *A* 和 *B*，集合论允许我们构造它们的笛卡尔积 *A×B*。还必须确定如何将给定的结构分解为更基本的子结构。例如，给定一个有限阿贝尔群，如何将其分解为某些子群的乘积？在这两种情况下，了解某种类型的结构如何组合是必要的。从纯粹的集合论角度看，这些组合的性质可能看起来有很大不同。

范畴论揭示了许多这些构造实际上是范畴中具有“普遍性质”的某些对象。事实上，从范畴论的角度看，集合论中的笛卡尔积，群的直积（阿贝尔或其他），拓扑空间的积，以及演绎系统中命题的合取，都是具有普遍性质的范畴积的实例。形式上，范畴 C 中两个对象 X 和 Y 的_积_是 C 中的一个对象 Z_连同_两个称为投影的态射，即 p:Z→X 和 q:Z→Y，使得——这就是普遍性质——对于所有带有态射 f:W→X 和 g:W→Y 的对象 W，存在唯一的态射 h:W→Z，使得 p∘h=f 且 q∘h=g。

请注意，我们已经为 X 和 Y 定义了一个积，而不是_X_和_Y_的积。实际上，积和具有普遍性质的其他对象仅在同构下定义。因此，在范畴论中，构成某个构造的元素的性质是无关紧要的。重要的是对象与范畴中其他对象的关系方式，即进入和离开的态射，或者换句话说，某些结构如何映射到给定对象中，以及给定对象如何将其结构映射到同类的其他结构中。

范畴论揭示了不同类型的结构是如何相互关联的。例如，在代数拓扑学中，拓扑空间与群（以及模、环等）以各种方式相关联（如同调、上同调、同伦、K-理论）。正如上面所指出的，带有群同态的群构成一个范畴。艾伦伯格和麦克莱恩正是为了澄清和比较这些联系而发明了范畴论。重要的是范畴之间的态射，由函子给出。非正式地说，函子是范畴之间保持结构的映射。给定两个范畴 C 和 D，从 C 到 D 的一个函子 F 将 C 的对象发送到 D 的对象，将 C 的态射发送到 D 的态射，使得 C 中态射的合成被保持，即 F(g∘f)=F(g)∘F(f)，并且单位态射被保持，即 F(idX)=idFX。立即可以得出，函子保持范畴之间的图表的可交换性。同调、上同调、同伦、K-理论都是函子的例子。

更直接的例子是幂集操作，它在集合范畴上产生了两个函子，具体取决于如何定义其对函数的作用。因此，给定一个集合 X，℘(X) 是 X 的子集的常规集合，并且给定一个函数 f:X→Y，℘(f):℘(X)→℘(Y) 将 X 的子集 A 映射到 B=f(A)，即 f 限制在 X 中 A 的像。很容易验证这定义了一个从集合范畴到自身的函子。

一般来说，两个给定范畴之间存在许多函子，它们之间的联系是一个值得探讨的问题。例如，给定一个范畴 C，总是存在从 C 到 C 的恒同函子，它将 C 的每个对象/态射映射到自身。特别地，存在于集合范畴上的恒同函子。

现在，恒同函子与上述幂集函子以一种自然的方式相关联。实际上，给定集合 X 及其幂集 ℘(X)，存在一个函数 hX，它接受 X 的元素 x 并将其发送到单元素集合 {x}，即 X 的子集，也就是 ℘(X) 的元素。这个函数实际上属于一组函数，由集合范畴中的对象索引而来 {hY:Y→℘(X)|Y 在 Ob(Set) 中}。此外，它满足以下可交换条件：给定任何函数 f:X→Y，恒同函子产生相同的函数 Id(f):Id(X)→Id(Y)。因此，可交换条件变为：hY∘Id(f)=℘(f)∘hX。因此，函数族 h(-) 以一种自然的方式关联这两个函子。这样的态射族被称为函子之间的 *自然变换*。类似地，理论模型之间的自然变换产生传统集合理论框架中结构的常规同态。

上述概念虽然重要，但并非范畴_理论_的基础。后者的标题可以说包括极限/余极限的概念；反过来，这些是范畴理论的基石，即伴随函子的概念，由 Daniel Kan 于 1956 年首次定义，并于 1958 年发表。

伴随函子可以被看作是概念上的逆。这可能最好通过一个例子来说明。设 U:Grp→Set 是遗忘函子，即将每个群 G 发送到其元素的基础集合 U(G)，将群同态 f:G→H 发送到基础集合函数 U(f):U(G)→U(H)。换句话说，U 忘记了群结构，也忘记了态射是群同态的事实。范畴 Grp 和 Set 作为范畴，显然不是同构的。（一个简单的论证如下：范畴 Grp 有零对象，而 Set 没有。）因此，我们当然无法找到通常代数意义下的函子 U 的逆。但是有许多非同构的方式在给定集合 X 上定义一个群结构，人们可能希望在这些构造中至少有一个是函子性的，并且与函子 U 有系统关联。忘记所有群论结构并获得一个集合的操作的概念逆是什么？它是仅仅基于群的概念构造一个群，没有任何其他东西，即没有外部关系或数据。这样的群是“自由”构造的；也就是说，除了理论公理所施加的限制外，没有任何限制。换句话说，在从给定集合构造群的过程中所记住的一切就是所得到的构造必须是一个群的事实。这样的构造是存在的；它是函子性的，并且产生了所谓的_自由群_。换句话说，有一个函子 F:Set→Grp，它将任何集合 X 分配给 X 上的自由群 F(X)，并将每个函数 f:X→Y 映射到群同态 F(f):F(X)→F(Y)，以明显的方式定义。情况可以这样描述：我们有两个概念上下文，一个是群论上下文，一个是集合论上下文，有两个函子在两个上下文之间系统地相反移动。其中一个函子是基本的，即遗忘函子 U。它显然是微不足道且没有信息量的。另一个函子在数学上是重要且显著的。令人惊讶的事实是 F 与 U 之间存在着简单的规则关系，并且在某种意义上，它是由 U 引出的。伴随情况的一个显著特征恰恰是基本的数学和逻辑构造是由给定的通常是基本的函子产生的。

事实上，U 和 F 是概念上的反向，形式上表现为：先应用 F 然后应用 U 并不会产生原始集合 X，但 X 和 UF(X) 之间存在基本关系。实际上，存在一个函数 η：X→UF(X)，称为伴随的单位，简单地将 X 的每个元素发送到 UF(X) 中的自身，并且该函数满足以下的普适性质：对于任意函数 g:X→U(G)，存在一个唯一的群同态 h:F(X)→G，使得 U(h)∘η=g。换句话说，UF(X) 是将 X 的元素插入群中的问题的最佳解决方案（在数学术语中称为“生成元的插入”）。将 U 和 F 以相反的顺序组合，我们得到一个态射 ξ:FU(G)→G，称为伴随的余单位，满足以下的普适性质：对于任意群同态 g:F(X)→G，存在一个唯一的函数 h:X→U(G)，使得 ξ∘F(h)=g。换句话说，FU(G) 构成了将 G 表示为自由群的商的最佳解决方案。如果 U 和 F 是彼此的简单代数反向，我们将有以下恒等式：UF=ISet 和 FU=IGrp，其中 ISet 表示在 Set 上的恒等函子，IGrp 表示在 Grp 上的恒等函子。正如我们所指出的，这些恒等式在这种情况下确实不成立。然而，一些恒等式确实成立：它们最好通过交换图表来表达：

\| Uη∘U−−−→UFU↘↓U∘ξU | | FF∘η−−−→FUF↘↓ξ∘FF |

\| --- | --- | --- |

其中对角箭头表示适当的恒同自然变换。

这只是一个非常普遍的情况：每个自由构造都可以被描述为两个充分选择的范畴之间的一个适当的遗忘函子产生。可以描述为伴随的数学构造的数量令人惊叹。尽管这些构造的细节各不相同，但它们都可以用相同的语言描述这一事实展示了数学概念和数学思维的深刻统一。在我们给出更多例子之前，有必要给出伴随函子的正式和抽象定义。

**定义**：设 F:C→D 和 G:D→C 是相反方向的函子。如果存在自然变换 η:IC→GF 和 ξ:FG→ID，使得复合

Gη∘G−−−→GFGG∘ξ−−−→G

和

FF∘η−−−→FGFξ∘F−−−→F

是恒等自然变换。(有关不同但等效的定义，请参阅 Mac Lane 1971 或 1998 年，第 IV 章。)

以下是关于伴随函子的一些重要事实。首先，伴随函子是同构唯一的；也就是说，任意两个函子 G 的左伴随 F 和 F'是自然同构的。其次，伴随性的概念在形式上等同于普遍态射（或构造）的概念，以及可表函子的概念。（例如，参见 Mac Lane 1998 年，第四章。）所有这些概念都展示了给定情况的一个方面。第三，左伴随保留其定义域中存在的所有余极限，而对偶地，右伴随保留其定义域中存在的所有极限。

现在我们给出一些伴随情况的示例，以说明这一概念的普遍性。

1. 而不是有一个遗忘函子进入集合范畴，在某些情况下只有部分结构被遗忘。以下是两个标准示例：

* 有一个明显的遗忘函子 U: **AbGrp** → **AbMon** 从交换群范畴到交换幺半群范畴： U 忘记了逆运算。函子 U 有一个左伴随 F: **AbMon** → **AbGrp** ，对于给定的交换幺半群 M，将其分配给最佳的交换群 F(M) ，使得 M 可以嵌入 F(M) 作为子幺半群。例如，如果 M 是 N，则 F(N) “是” Z，即它同构于 Z。
* 同样，从 Hausdorff 拓扑空间范畴到拓扑空间范畴的明显遗忘函子 U：Haus→Top，它遗忘了 Hausdorff 条件。同样，存在一个函子 F：Top→Haus，使得 F⊣U。给定一个拓扑空间 X，F(X)给出了从 X 构造出的最佳 Hausdorff 空间：它是 X 通过对角线¯¯¯¯¯ΔX⊆X×X 的闭包的商空间，这是一个等价关系。与前一个例子相比，在那里我们有一个嵌入，这一次我们得到了原始结构的商空间。

2. 现在考虑_紧致_Hausdorff 空间**kHaus**的范畴和遗忘函子 U：**kHaus**→Top，它遗忘了紧致性和分离性质。这个 U 的左伴随是 Stone-Cech 紧致化。
3. 存在一个遗忘函子 $U:\text{Mod}R→\text{AbGrp}$ 从一个 $R$-模范畴到交换群范畴的函子，其中 $R$ 是带幺环。函子 $U$ 忘记了环 $R$ 对群 $G$ 的作用。函子 $U$ 既有左伴随又有右伴随。左伴随是 $R⊗−:\text{AbGrp}→\text{Mod}R$，它将一个交换群 $G$ 发送到张量积 $R⊗G$，右伴随由函子 $Hom(R,−):\text{AbGrp}→\text{Mod}R$ 给出，它将任意群 $G$ 分配到线性映射模 $Hom(R,G)$。
4. 分类 $C$ 和 $D$ 是偏序集的情况在这里值得特别关注。在这种情况下，伴随函子通常被称为 *Galois 连接*。设 $C$ 是一个偏序集。考虑对角函子 $Δ:C→C×C$，其中 $Δ(X)=⟨X,X⟩$，对于 $f:X→Y$，$Δ(f)=⟨f,f⟩:⟨X,X⟩→⟨Y,Y⟩$。在这种情况下，$Δ$ 的左伴随是余积，或者上确界，$Δ$ 的右伴随是积，或者下确界。伴随情况可以用以下特殊形式描述：$X∨Y≤Z ⇔ X≤Z,Y≤Z ⇔ Z≤X∧Y,Z≤Y ⇔ Z≤X$。

在这里，垂直双箭头可以被解释为双向推理规则。

5. 蕴涵也可以被引入。考虑一个带有参数的函子：(−∧X)：C→C。很容易验证，当 C 是一个偏序集时，函数(−∧X)是保序的，因此是一个函子。对(−∧X)的右伴随是一个函子，它产生 C 的最大元素，使得它与 X 的下确界小于 Z。这个元素有时被称为 X 的相对伪补，或者更常见的是_蕴涵_。它用_X⇒Z_或者 X⊃Z 表示。伴随可以表示如下：Y∧X≤ZY≤X⇒Z⇕
6. 否定运算符 ¬X 可以从最后的附加项中引入。实际上，让 Z 是格的底部元素 ⊥。因此，由于 Y∧X≤⊥ 总是成立，可得 Y≤X⇒⊥ 也总是成立。但由于 X⇒⊥≤X 总是成立，我们得到在分子部分 (X⇒⊥∧X)=⊥。因此， X⇒⊥ 是与 X 不相交的最大元素。因此，我们可以定义 ¬X=defX⇒⊥。
7. 极限、余极限以及范畴论的所有基本构造都可以描述为伴随。因此，积和余积是伴随的，等值子、余等值子、拉回和推出等也是伴随的。这是伴随性对于范畴论本身至关重要的原因之一：因为范畴论的所有基本操作都源自伴随情况。
8. 一个_范畴的等价_是伴随性的一个特例。实际上，如果在上述三角恒等式中，箭头η:IC→GF 和ξ:FG→ID 是自然_同构_，那么函子 F 和 G 构成一个_范畴的等价_。在实践中，重要的是范畴的等价概念，而不是范畴的同构概念。

可以直接从伴随性质证明关于这些操作的某些事实。例如，考虑蕴涵。设 Z=X。然后我们在分子得到 Y∧X≤X，在偏序集中这总是成立（很容易验证）。因此，对于所有的 Y，Y≤X⇒X 都是成立的，这只有当 X⇒X=⊤时才可能，这是格的最大元素。逻辑操作不仅可以描述为伴随性，而且自然地作为基本操作的伴随而出现。事实上，伴随性可以用来定义各种结构，分配格、Heyting 代数、布尔代数等（参见 Wood, 2004）。从简单的前述例子中，可以清楚地看出伴随性的形式主义如何用于给出各种逻辑理论的句法表述。此外，这是一个关键要素，标准的全称量词和存在量词可以被证明是作为替换操作的伴随而出现。因此，量词与其他逻辑操作处于同等地位，与逻辑的其他代数方法形成鲜明对比（参见 Awodey 1996 或 Mac Lane & Moerdijk 1992）。更一般地，Lawvere 展示了句法和语义是如何通过伴随函子相关的（参见 Lawvere 1969b）。

双重性在数学中扮演着重要角色，它们可以通过范畴之间的等价关系来描述。换句话说，许多重要的数学定理可以被翻译为关于伴随函子存在的陈述，有时还满足额外的性质。这有时被视为表达定理的_概念_内容。考虑以下基本情况：设 C 是对象为局部紧阿贝尔群且态射为连续群同态的范畴。那么，庞特里亚金对偶定理相当于声称范畴 C 等价于范畴 C°，即对偶范畴。当然，准确的陈述要求我们描述函子 F:C→C°和 G:C°→C，并证明它们构成了范畴的等价关系。

另一个众所周知且重要的对偶是由斯通在三十年代发现的，现在以他的名字命名。在一个方向上，任意的布尔代数产生一个拓扑空间，而在另一个方向上，从一个（紧致豪斯多夫且完全不连通的）拓扑空间，可以得到一个布尔代数。此外，这种对应是函子性的：任何布尔同态被发送到拓扑空间的连续映射，反之亦然，空间之间的任何连续映射被发送到布尔同态。换句话说，在布尔代数范畴和布尔空间（也称为斯通空间）的对偶之间存在范畴的等价关系。（有关优秀介绍和更多发展，请参阅 Johnstone 1982。）斯通定理建立的代数结构范畴与拓扑结构范畴的对偶之间的联系只是一个例子，吸引并仍然吸引着范畴论者的极大关注。对偶定理的范畴研究仍然是一个非常活跃和重要的领域，很大程度上受到斯通结果的启发。（有关逻辑的最新应用，请参见 Makkai 1987，Taylor 2000，2002a，2002b，Caramello 2011。）

## 2. 简要历史概况

要公正地概括这个领域短暂而错综复杂的历史是困难的。特别是不可能提及所有为其快速发展做出贡献的人。在提醒的话语说完之后，我们将看一些主要的历史脉络。

范畴、函子、自然变换、极限和余极限几乎是在 Eilenberg & Mac Lane（1945）的一篇名为“自然等价的一般理论”的论文中突然出现的。我们说“几乎”，因为他们早期的一篇论文（1942）包含了特定的函子和自然变换，限于群。Eilenberg & Mac Lane 为了澄清和抽象化他们 1942 年的结果，开始设计范畴论。当时的中心概念，正如他们的标题所示，是自然变换。为了给出后者的一般定义，他们定义了函子，借用了 Carnap 的术语，并且为了定义函子，他们从亚里士多德、康德和 C. S. Peirce 的哲学中借用了‘范畴’这个词，但在数学上重新定义了它。

在他们 1945 年的论文之后，范畴论的概念是否会超出方便的语言并不清楚；事实上，这大约是持续了十五年的现状。Eilenberg & Steenrod（1952）在一本有影响力的关于代数拓扑基础的书中以这种方式使用了范畴论，Cartan & Eilenberg（1956）在一本开创性的关于同调代数的书中也是如此。（有趣的是，尽管 Eilenberg & Steenrod 定义了范畴，但 Cartan & Eilenberg 却只是假定了它们！）这些书使新一代数学家能够直接用范畴语言学习代数拓扑和同调代数，并掌握图表方法。事实上，如果没有图表追踪方法，这两本书中的许多结果似乎是难以想象的，或者至少需要更复杂的表达。

情况在 Grothendieck（1957）的里程碑式论文“Sur quelques points d’algèbre homologique”中发生了根本性的变化，作者在其中内在地使用范畴来定义和构建更一般的理论，然后将其应用于特定领域，例如代数几何学。Kan（1958）表明，伴随函子包含极限和余极限的重要概念，并且可以捕捉其他领域中的基本概念（在他的情况下是同伦论）。

在这一点上，范畴论不再仅仅是一种方便的语言，而是因为两个发展而变得更为重要。

1. 利用公理方法和范畴的语言，Grothendieck（1957 年）以抽象方式定义了各种类型的范畴，例如，加性范畴和 Abel 范畴，展示了如何在这些范畴中执行各种构造，并证明了关于它们的各种结果。（应指出，Mac Lane 在他 1950 年的论文中曾尝试过引入某些关键思想，例如使用箭头来定义某些基本概念，并且 Buchsbaum 在 1955 年基本上独立地引入了“正合范畴”的概念。）简言之，Grothendieck 展示了如何在这种抽象设置中发展同调代数的一部分。从那时起，特定的结构范畴，例如，一个拓扑空间 X 上的层范畴，可以被看作是某种类型的抽象范畴的一个代表，例如，一个 Abel 范畴。因此，人们可以立即看到如何将同调代数的方法应用于，例如，代数几何学。此外，寻找其他类型的抽象范畴是有意义的，这些范畴将像 Abel 范畴一样概括各种数学领域的基本和形式方面。
2. 大部分归功于 Freyd 和 Lawvere 的努力，范畴论者逐渐意识到伴随函子的概念的普遍性。不仅给定函子存在伴随函子允许定义抽象范畴（并且据推测，通过这种方式定义的范畴具有特权地位），而且正如我们之前提到的，许多重要定理甚至各个领域的理论都可以看作是特定范畴之间存在特定函子的等价性。到了 1970 年代初，伴随函子的概念被视为范畴论的核心。

随着这些发展，范畴论成为一个独立的研究领域，纯粹的范畴论得以发展。事实上，它作为一门学科迅速发展，不仅在应用上，主要是在其源头背景中，即代数拓扑学和同调代数中，也在代数几何学以及 Lawvere 的博士论文出现后的通用代数学中。这篇论文也构成了该领域历史上的一个里程碑，因为在其中 Lawvere 提出了范畴的范畴作为范畴论、集合论以及整个数学的基础，并利用范畴来研究数学的逻辑方面。

在 1960 年代，Lawvere 概述了一种全新的逻辑和数学基础的基本框架。他取得了以下成就：

* 公理化了集合的范畴（Lawvere 1964）和范畴的范畴（Lawvere 1966）；
* 给出了一个理论的范畴描述，独立于句法选择，并勾勒了如何通过范畴方法获得逻辑系统的完备性定理（Lawvere 1967）；
* 描述了笛卡尔闭范畴，并展示了它们与逻辑系统以及各种逻辑悖论的联系（Lawvere 1969）;
* 表明量词和理解方案可以被捕捉为给定基本操作的伴随函子（Lawvere 1966, 1969, 1970, 1971）;
* 认为伴随函子通常应通过“范畴学教义”的概念发挥重要的基础作用（Lawvere 1969）。

同时，Lambek（1968，1969，1972）用演绎系统的术语描述范畴，并运用范畴方法进行证明论的目的。

所有这些工作最终汇聚成另一个概念，这要感谢 Grothendieck 及其学派：_拓扑_的概念。尽管拓扑学在 1960 年代出现在代数几何的背景中，再次出自 Grothendieck 之手，但可以肯定的是，Lawvere 和 Tierney（1972 年）对拓扑进行的基本公理化推动了它获得基础地位。粗略地说，一个基本拓扑是一个具有足够丰富的逻辑结构的范畴，可以发展出大部分“普通数学”，也就是大部分传授给数学本科生的内容。因此，一个基本拓扑可以被看作是集合的范畴理论。但它也是一个广义的拓扑空间，从而在逻辑和几何之间提供了直接联系。（有关范畴逻辑历史的更多信息，请参阅 Marquis & Reyes 2012，Bell 2005。）

20 世纪 70 年代见证了拓扑概念在许多不同方向上的发展和应用。在代数几何之外的第一个应用是在集合论中，各种独立性结果被重新表述为拓扑的术语（Tierney 1972，Bunge 1974，还有 Blass & Scedrov 1989，Blass & Scedrov 1992，Freyd 1980，Mac Lane & Moerdijk 1992，Scedrov 1984）。与直觉主义和更一般的构造性数学的联系早已被注意到，拓扑仍然被用来研究直觉主义和构造主义各个方面的模型（Lambek & Scott 1986，Mac Lane & Moerdijk 1992，Van der Hoeven & Moerdijk 1984a，1984b，1984c，Moerdijk 1984，Moerdijk 1995a，Moerdijk 1998，Moerdijk & Palmgren 1997，Moerdijk & Palmgren 2002，Palmgren 2012，Palmgren 2018。有关拓扑理论历史的更多信息，请参阅 McLarty 1992 和 Bell 2012）。

最近，拓扑学理论已被用于研究各种形式的建构性数学或集合论（Joyal & Moerdijk 1995，Taylor 1996，Awodey 2008），递归性，以及一般高阶类型理论的模型。所谓的“有效拓扑”和对合成域论公理的探索值得一提（Hyland 1982，Hyland 1988，1991，Hyland 等人 1990，McLarty 1992，Jacobs 1999，Van Oosten 2008，Van Oosten 2002 以及其中的参考文献）。Lawvere 早期的动机是为微分几何提供一个新的基础，这是一个活跃的研究领域，现在被称为“合成微分几何”（Lawvere 2000，2002，Kock 2006，Bell 1988，1995，1998，2001，Moerdijk & Reyes 1991）。这只是冰山一角；拓扑学可能会成为 21 世纪对 20 世纪的李群所起的作用。

从 1980 年代到现在，范畴论已找到新的应用。在理论计算机科学中，范畴论现在已经扎根，并且在其他方面，包括发展新的逻辑系统和编程语言语义方面做出了贡献（Pitts 2000，Plotkin 2000，Scott 2000 以及其中的参考文献）。它在数学上的应用变得更加多样化，甚至涉及到理论物理，后者使用高维范畴论——类似于高维几何对平面几何的关系——来研究所谓的“量子群”和量子场论（Majid 1995，Baez & Dolan 2001 以及这些作者的其他出版物）。

## 3. 哲学意义

范畴论在两个方面挑战哲学家，这两个方面并不一定是互相排斥的。一方面，理清范畴和范畴方法在数学实践和基础领域中的一般认识论和本体论地位，无疑是哲学的任务。另一方面，哲学家和哲学逻辑学家可以运用范畴论和范畴逻辑来探讨哲学和逻辑问题。我现在依次简要讨论这些挑战。

范畴论现在是数学家工具箱中常用的工具；这一点是显而易见的。同样清楚的是，范畴论组织和统一了许多数学内容。当代数学领域如果没有范畴论，就不会是现在这个样子，比如代数拓扑学、同调代数、同伦论和同伦代数、表示论、算术几何学和代数几何学。（例如参见 Mac Lane 1971，1998 或 Pedicchio＆Tholen 2004。）没有人会否认这些简单的事实。此外，当代数学的广大部分现在依赖于一种不同的实践，这种实践在很大程度上依赖于新图形符号的操作，一方面，以及不同层次的抽象，另一方面。范畴论和在该框架内发展的数学学科不仅仅使用交换图表，尽管这本身就导致了一些有趣的哲学探讨，例如 De Toffoli 2017 中所述，而且范畴论者已经意识到需要发展系统化和形式化的图形语言，以直接表达各种论证形式。（例如，参见 Joyal＆Street 1993；Joyal，Street＆Verity 1996；Fong＆Spivak 2019，其他互联网资源。）自从 Bourbaki 以来，数学是“同构的”，在某些情况下，现在是“等价的”或“双等价的”甚至是“n-等价的”。（有关澄清这些抽象层次意味着什么的尝试，请参见 Marquis 2014，Marquis 2016。）

在范畴论框架中进行数学研究几乎总是与在集合论框架中进行研究截然不同（例外情况是使用布尔拓扑的内部语言；每当拓扑不是布尔时，主要区别在于逻辑是_直觉主义_）。因此，通常情况下，当采用不同的概念框架时，关于所研究对象的性质、所涉及知识的性质以及所使用方法的性质的许多基本问题都必须重新评估。我们将依次讨论这三个方面。

在范畴论框架内，数学对象的本质有两个方面需要强调。首先，对象总是在一个范畴中给出的。一个对象存在于并依赖于一个环境范畴。此外，一个对象的特征在于进入它和/或离开它的态射。其次，对象总是被同构特征化（在最好的情况下，是唯一同构）。例如，并不存在所谓的“自然数”。然而，可以说存在“自然数的概念”。确实，自然数的概念可以通过戴德金-皮亚诺-劳维尔公理明确给出，但这个概念在具体情况下所指的内容取决于其被解释的背景，例如集合范畴或拓扑空间上的层叠拓扑。因此，在范畴论背景下，似乎意义并不能决定指称。很难抵制这种诱惑，认为范畴论体现了一种结构主义形式，即它描述数学对象为结构，因为后者往往总是被同构特征化。因此，关键在于范畴论框架内所使用的同一标准的类型，以及它如何类似于为被视为一般形式的对象给出的任何标准。针对这一观点提出的标准异议之一是，如果将对象视为结构，且仅视为“抽象”结构，这里的意思是它们与任何具体的或具体的表现分离，那么就不可能将它们定位于数学宇宙中。（有关此问题的相关材料，请参阅 Hellman 2003 年的标准表述，McLarty 1993 年，Awodey 2004 年，Landry＆Marquis 2005 年，Shapiro 2005 年，Landry 2011 年，Linnebo＆Pettigrew 2011 年，Hellman 2011 年，Shapiro 2011 年，McLarty 2011 年，Logan 2015 年。）

一种稍微不同的理解情况的方式是将数学对象视为_类型_，在不同的上下文中给出了令牌。这与在集合论中找到的情况截然不同，在集合论中，数学对象是唯一定义的，它们的引用是直接给出的。虽然可以通过等价类或一般同构类型在集合论中为类型腾出空间，但在该框架中，身份的基本标准是由外延公理给出的，因此，最终是参考特定的集合。此外，可以认为类型及其令牌之间的关系_不_通过成员关系充分表示。令牌不属于类型，它不是类型的元素，而是它的一个实例。在范畴论框架中，人们总是提到类型的_令牌_，理论直接表征的是类型，而不是令牌。在这个框架中，人们不必定位一个类型，但至少在数学中，它的令牌在认识论上是必需的。这只是在认识论意义上抽象和具体之间互动的反映（而不是这些后者表达的本体论意义）。 (参见 Ellerman 1988，Ellerman 2017，Marquis 2000，Marquis 2006，Marquis 2013。)

范畴论的历史为探索和考虑数学的历史敏感认识论提供了丰富的信息源。很难想象，例如，代数几何学和代数拓扑学如果没有范畴工具，它们现在会变成什么样子。 （请参见，例如，Carter 2008，Corfield 2003，Krömer 2007，Marquis 2009，McLarty 1994，McLarty 2006。）范畴论已经导致了基于纯抽象基础的各个数学领域的重新概念化。此外，当在范畴论框架中发展时，传统学科之间的界限被打破和重新配置；举一个重要的例子，拓扑理论提供了代数几何学和逻辑之间的直接桥梁，以至于代数几何学中的某些结果直接转化为逻辑，反之亦然。某些最初是几何学概念的概念现在更清晰地被视为逻辑的（例如，连贯拓扑的概念）。代数拓扑学也潜伏在背景中。 （例如，Caramello 2018 系统地利用了拓扑作为数学桥梁的想法。）在另一个但同样重要的方面，可以认为数学和元数学之间的区别不能以已有的方式表达。所有这些问题都必须重新考虑和重新评估。

接近数学实践，范畴论为发展方法提供了可能，这些方法已经改变并继续改变数学的面貌。可以说，范畴论代表了二十世纪数学思想中最深刻、最强大倾向的顶点：在特定情境中寻找最一般和抽象的要素。从这个意义上讲，范畴论是戴德金-希尔伯特-诺特-布尔巴基传统的合法继承者，强调公理化方法和代数结构。（有关不同阐释，请参阅 Rodin 2014。）当用于表征特定数学领域时，范畴论揭示了该领域建立的框架，主导其稳定性、强度和连贯性的整体结构。从某种意义上讲，这个特定领域的结构可能不需要依赖任何东西，也就是说，不需要依赖某种坚实的土壤，因为它很可能只是更大网络的一部分，而这个网络没有任何阿基米德点，就像漂浮在空间中一样。用一个众所周知的隐喻来说：从范畴论的角度来看，诺拉斯船已经变成了一艘宇宙飞船。

然而，范畴论是否应该“在同一平面上”，可以说，与集合论是否应该被视为数学基础的严肃替代品，或者是否在完全不同意义上具有基础性，这仍有待观察。（即使这个问题更加强烈地适用于拓扑学，我们也不会深入讨论。）

Lawvere 从早期开始就提倡了一个想法，即范畴的范畴可以被用作基础框架。(见 Lawvere 1964, 1966.) 这一提议现在在某种程度上依赖于高维范畴的发展，也被称为弱 n-范畴。(见，例如 Makkai 1998.) 七十年代拓扑学的出现带来了新的可能性。Mac Lane 提出，某些拓扑空间应被视为数学的真正基础。(见 Mac Lane 1986.) Lambek 提出了所谓的自由拓扑空间作为最佳框架，意味着具有不同哲学观点的数学家可能会同意采用它。(见 Couture & Lambek 1991, 1992, Lambek 1994.) 他还认为没有一个拓扑空间能彻底满足古典数学家。(见 Lambek 2004.) (有关范畴论者之间各种基础观点的更多信息，请参见 Landry & Marquis 2005.)

有人提出支持和反对将范畴论作为基础框架的论点。(Blass 1984 对范畴论与集合论之间的关系进行了调查。Feferman 1977, Bell 1981 和 Hellman 2003 反对范畴论。请参见 Marquis 1995 进行快速概述和提议，McLarty 2004 和 Awodey 2004 回应 Hellman 2003.) 辩论虽然进展缓慢但稳步前行。人们已经认识到可以用范畴论的语言提出一个基础框架，无论是以集合范畴的基础理论 ETCS 形式，还是 Makkai 的抽象数学结构主义基础 SFAM 的范畴范畴。因此，似乎社区不再质疑这些方法的逻辑和概念上的自主性，使用 Linnebo & Pettigrew 2011 引入的术语。主要问题似乎是是否能为这些框架之一提供一个在哲学上令人满意的理由。(有关这些，请参见 Hellman 2013, Landry 2013, Marquis 2013b, McLarty 2018.)

这个问题更加复杂的事实是，范畴论本身的基础尚未被澄清。因为可能有许多不同的方式来考虑一个更高维度的范畴宇宙作为数学的基础。我们可以肯定地说，我们现在对所谓的（∞，1）-范畴有很好的理解，并且在这个框架下已经获得了重要的数学结果。（例如，参见 Cisinski 2019 的介绍。）一个适当的语言，用于任意更高维度范畴的宇宙，仍然需要提出，以及数学的明确公理。 （参见 Makkai 1998 对这种语言的简要描述。基于同伦理论但与更高维度范畴有密切联系的不同方法已被 Voevodsky 等人提出，并正在积极追求。请参阅 Awodey 等人 2013 年的书籍《同伦类型理论》。）

已经确立的事实是，范畴论被用来研究逻辑和哲学。事实上，范畴逻辑，即通过范畴手段研究逻辑的学科，已经进行了大约 40 年，仍然充满活力。在范畴逻辑中获得的一些在哲学上相关的结果有：

* 范畴学说的等级制度：常规范畴，连贯范畴，Heyting 范畴和 Boolean 范畴；所有这些对应于明确定义的逻辑系统，连同演绎系统和完备性定理；它们表明逻辑概念，包括量词，在特定顺序中自然产生，并非杂乱无章（参见 Walsh 2017 年对使用范畴论对逻辑联结词进行哲学上的理据，以及 Halvorson＆Tsementzis 2018 年从科学理论角度审视的观点）；
* Joyal 将直觉主义逻辑的 Kripke-Beth 语义推广到层语义（Lambek＆Scott 1986 年，Mac Lane＆Moerdijk 1992 年）；
* 一致和几何逻辑，所谓的，其实践和概念意义尚未被探索（Makkai＆Reyes 1977，Mac Lane＆Moerdiejk 1992，Johnstone 2002，Caramello 2011b，2012a）；
* 一个理论的通用模型和分类拓扑的概念（Makkai＆Reyes 1977，Boileau＆Joyal 1981，Bell 1988，Mac Lane＆Moerdijk 1992，Johnstone 2002，Caramello 2012b）；
* 强概念完备性的概念及相关定理（Makkai＆Reyes 1977，Butz＆Moerdijk 1999，Makkai 1981，Pitts 1989，Johnstone 2002）;
* 几何证明连续假设的独立性以及集合论的其他强公理（Tierney 1972，Bunge 1974，Freyd 1980，1987，Blass＆Scedrov 1983，1989，1992，Mac Lane＆Moerdijk 1992）;
* 构造数学的模型和发展（见下面的参考文献）；
* 合成微分几何，作为标准和非标准分析的替代方法（Kock 1981，Bell 1998，2001，2006）；
* 所谓有效拓扑的构建，在其中自然数上的每个函数都是递归的（McLarty 1992，Hyland 1982，1991，Van Oosten 2002，Van Oosten 2008）；
* 线性逻辑、模态逻辑、模糊集和一般高阶类型理论的范畴模型（Reyes 1991，Reyes & Zawadoski 1993，Reyes & Zolfaghari 1991，1996，Makkai & Reyes 1995，Ghilardi & Zawadowski 2002，Rodabaugh & Klement 2003，Jacobs 1999，Taylor 1999，Johnstone 2002，Blute & Scott 2004，Awodey & Warren 2009，Awodey et al. 2013，Kishida 2018，Cockett & Seely 2018）；
* 一种名为“草图”的图形语法（Barr＆Wells 1985，1999，Makkai 1997a，1997b，1997c，Johnstone 2002）。
* 量子逻辑，量子物理学和量子场论的基础（Brunetti 等人 2003 年，Abramsky＆Duncan 2006 年，Heunen 等人 2009 年，Baez＆Stay 2010 年，Baez＆Lauda 2011 年，Coecke 2011 年，Isham 2011 年，Döring 2011 年，Eva 2017 年，Coecke＆Kissinger 2018 年）。

范畴逻辑中的范畴工具提供了相当大的灵活性，这一点可以通过建构主义和直觉主义数学的几乎所有令人惊讶的结果都可以在适当的范畴设置中建模来加以说明。与此同时，标准的集合论概念，例如塔斯基的语义学，在范畴中找到了自然的推广。因此，范畴逻辑在逻辑学中有着二十世纪发展的根基，同时提供了一个强大而新颖的框架，与数学的其他部分有着众多联系。

范畴论也涉及更一般的哲学问题。从前述讨论可以明显看出，范畴论和范畴逻辑应该对逻辑哲学中几乎所有问题产生影响：从认同标准的本质到替代逻辑的问题，范畴论总是为这些主题带来新的视角。当我们转向本体论，特别是形式本体论时，类似的评论也可以提出：部分/整体关系，系统的边界，空间概念等。Ellerman（1988）曾勇敢尝试表明，范畴论构成了一种普遍论的理论，其性质与集合论有根本不同，后者也被视为一种普遍论的理论。从本体论转向认知科学，MacNamara & Reyes（1994）试图运用范畴逻辑提供一种不同的参照逻辑。特别是，他们试图澄清可数名词和量词术语之间的关系。其他研究人员正在使用范畴论来研究复杂系统、认知神经网络和类比。（例如，参见 Ehresmann 2018，Ehresmann & Vanbremeersch 1987, 2007，Healy 2000，Healy & Caudell 2006，Arzi-Gonczarowski 1999，Brown & Porter 2006。）最后，科学哲学家们已经转向范畴论，为与科学中的结构主义相关的问题带来新的视角。（例如，参见 Brading & Landry 2006，Bain 2013，Lam & Wüthrich 2015，Eva 2016，Lal & Teh 2017，Landry 2007，2012，2018。）

范畴论因此提供了许多哲学挑战，这些挑战有望在未来几年得到解决。

## Bibliography

Readers may find the following useful:

[Programmatic Reading Guide](https://plato.stanford.edu/entries/category-theory/bib.html)

The citations in this guide and in the text above can all be found in the list below.

* Abramsky, S. & Duncan, R., 2006, “A Categorical Quantum Logic”, *Mathematical Structures in Computer Science*, 16 (3): 469–489.
* Adamek, J. *et al*., 1990, *Abstract and Concrete Categories: The Joy of Cats*, New York: Wiley.
* Adamek, J. *et al*., 1994, Locally Presentable and Accessible Categories, Cambridge: Cambridge University Press.
* Arzi-Gonczaworski, Z., 1999, “Perceive This as That — Analogies, Artificial Perception, and Category Theory”, *Annals of Mathematics and Artificial Intelligence*, 26 (1): 215–252.
* Awodey, S., 1996, “Structure in Mathematics and Logic: A Categorical Perspective”, *Philosophia Mathematica*, 3: 209–237.
* –––, 2004, “An Answer to Hellman’s Question: Does Category Theory Provide a Framework for Mathematical Structuralism”, *Philosophia Mathematica*, 12: 54–64.
* –––, 2006, *Category Theory*, Oxford: Clarendon Press.
* –––, 2007, “Relating First-Order Set Theories and Elementary Toposes”, *The Bulletin of Symbolic*, 13 (3): 340–358.
* –––, 2008, “A Brief Introduction to Algebraic Set Theory”, *The Bulletin of Symbolic*, 14 (3): 281–298.
* Awodey, S., et al., 2013, *Homotopy Type Theory: Univalent Foundations of Mathematics*, The Univalent Foundations Program.
* Awodey, S. & Butz, C., 2000, “Topological Completeness for Higher Order Logic”, *Journal of Symbolic Logic*, 65 (3): 1168–1182.
* Awodey, S. & Reck, E. R., 2002, “Completeness and Categoricity I. Nineteen-Century Axiomatics to Twentieth-Century Metalogic”, *History and Philosophy of Logic*, 23 (1): 1–30.
* –––, 2002, “Completeness and Categoricity II. Twentieth-Century Metalogic to Twenty-first-Century Semantics”, *History and Philosophy of Logic*, 23 (2): 77–94.
* Awodey, S. & Warren, M., 2009, “Homotopy theoretic Models of Identity Types”, *Mathematical Proceedings of the Cambridge Philosophical Society*, 146 (1): 45–55.
* Baez, J., 1997, “An Introduction to n-Categories”, *Category Theory and Computer Science*, Lecture Notes in Computer Science (Volume 1290), Berlin: Springer-Verlag, 1–33.
* Baez, J. & Dolan, J., 1998a, “Higher-Dimensional Algebra III. n-Categories and the Algebra of Opetopes”, *Advances in Mathematics*, 135: 145–206.
* –––, 1998b, “Categorification”, *Higher Category Theory* (Contemporary Mathematics, Volume 230), Ezra Getzler and Mikhail Kapranov (eds.), Providence: AMS, 1–36.
* –––, 2001, “From Finite Sets to Feynman Diagrams”, *Mathematics Unlimited – 2001 and Beyond*, Berlin: Springer, 29–50.
* Baez, J. & Lauda, A.D., 2011, “A Pre-history of n-Categorical Physics”, *Deep Beauty: Understanding the Quantum World Through Mathematical Innovation*, H. Halvorson (ed.), Cambridge: Cambridge University Press, 13–128.
* Baez, J. & May, P. J., 2010, *Towards Higher Category Theory*, Berlin: Springer.
* Baez, J. & Stay, M., 2010, “Physics, Topology, Logic and Computation: a Rosetta Stone”, *New Structures for Physics* (Lecture Notes in Physics 813), B. Coecke (ed.), New York, Springer: 95–172.
* Baianu, I. C., 1987, “Computer Models and Automata Theory in Biology and Medecine”, *Mathematical Modelling*, 7: 1513–1577.
* Bain, J., 2013, “Category-theoretic Structure and Radical Ontic Structural Realism”, *Synthese*, 190: 1621–1635.
* Barr, M. & Wells, C., 1985, *Toposes, Triples and Theories*, New York: Springer-Verlag.
* –––, 1999, *Category Theory for Computing Science*, Montreal: CRM.
* Batanin, M., 1998, “Monoidal Globular Categories as a Natural Environment for the Theory of Weak n-Categories”, *Advances in Mathematics*, 136: 39–103.
* Bell, J. L., 1981, “Category Theory and the Foundations of Mathematics”, *British Journal for the Philosophy of Science*, 32: 349–358.
* –––, 1982, “Categories, Toposes and Sets”, *Synthese*, 51 (3): 293–337.
* –––, 1986, “From Absolute to Local Mathematics”, *Synthese*, 69 (3): 409–426.
* –––, 1988, “Infinitesimals”, *Synthese*, 75 (3): 285–315.
* –––, 1988, *Toposes and Local Set Theories: An Introduction*, Oxford: Oxford University Press.
* –––, 1995, “Infinitesimals and the Continuum”, *Mathematical Intelligencer*, 17 (2): 55–57.
* –––, 1998, *A Primer of Infinitesimal Analysis*, Cambridge: Cambridge University Press.
* –––, 2001, “The Continuum in Smooth Infinitesimal Analysis”, *Reuniting the Antipodes — Constructive and Nonstandard Views on the Continuum* (Synthese Library, Volume 306), Dordrecht: Kluwer, 19–24.
* –––, 2005, “The Development of Categorical Logic”, in *Handbook of Philosophical Logic* (Volume 12), 2nd ed., D.M. Gabbay, F. Guenthner (eds.), Dordrecht: Springer, pp. 279–362.
* –––, 2012, “Types, Sets and Categories”, in *Handbook of the History of Logic: Sets and Extensions in the Twentieth Century* (Volume 6), 1st edition, D. Gabbay, A. Kanamori, J. Woods (eds.), Amsterdam: North Holland, pp. 633–687.
* Birkoff, G. & Mac Lane, S., 1999, Algebra, 3rd ed., Providence: AMS.
* Blass, A., 1984, “The Interaction Between Category Theory and Set Theory”, in *Mathematical Applications of Category Theory* (Volume 30), Providence: AMS, 5–29.
* Blass, A. & Scedrov, A., 1983, “Classifying Topoi and Finite Forcing”, *Journal of Pure and Applied Algebra*, 28: 111–140.
* –––, 1989, *Freyd’s Model for the Independence of the Axiom of Choice*, Providence: AMS.
* –––, 1992, “Complete Topoi Representing Models of Set Theory”, *Annals of Pure and Applied Logic* , 57 (1): 1–26.
* Blute, R. & Scott, P., 2004, “Category Theory for Linear Logicians”, in *Linear Logic in Computer Science*, T. Ehrhard, P. Ruet, J-Y. Girard, P. Scott (eds.), Cambridge: Cambridge University Press, 1–52.
* Boileau, A. & Joyal, A., 1981, “La logique des topos”, *Journal of Symbolic Logic*, 46 (1): 6–16.
* Borceux, F., 1994, *Handbook of Categorical Algebra*, 3 volumes, Cambridge: Cambridge University Press.
* Brading, K. & Landry, E., 2006, “Scientific Structuralism: Presentation and Representation”, *Philosophy of Science*, 73: 571–581.
* Brown, R. & Porter, T., 2006, “Category Theory: an abstract setting for analogy and comparison”, *What is Category Theory?*, G. Sica (ed.), Monza: Polimetrica: 257–274.
* Brunetti, R. & Fredenhagen, K & Verch, R., 2003, “The Generally Covariant Locality Principle – a new paradigm for local quantum field theory”, *Communications in Mathematical Physics*, 237 (1–2): 31–68.
* Buchsbaum, D.A., 1955, “Exact Categories and Duality”, *Transactions of the American Mathematical Society*, 80 (1): 1–34.
* Bunge, M., 1974, “Topos Theory and Souslin’s Hypothesis”, *Journal of Pure and Applied Algebra*, 4: 159–187.
* –––, 1984, “Toposes in Logic and Logic in Toposes”, *Topoi*, 3 (1): 13–22.
* Caramello, O., 2011, “A Characterization Theorem for Geometric Logic”, *Annals of Pure and Applied Logic*,162, 4: 318–321.
* –––, 2012a, “Universal Models and Definability”, *Mathematical Proceedings of the Cambridge Philosophical Society*, 152 (2): 279–302.
* –––, 2012b, “Syntactic Characterizations of Properties of Classifying Toposes”, *Theory and Applications of Categories*, 26 (6): 176–193.
* –––, 2018, *Theories, Sites, Toposes*, Oxford: Oxford University Press.
* Carter, J., 2008, “Categories for the working mathematician: making the impossible possible”, *Synthese*, 162 (1): 1–13.
* Cisinski, J.-C., 2019, *Higher Categories and Homotopical Algebra*, Cambridge: Cambridge University Press.
* Cockett, J. R. B. & Seely, R. A. G., 2001, “Finite Sum-product Logic”, *Theory and Applications of Categories* (electronic), 8: 63–99.
* Cockett, J. R. B. & Seely, R. A. G., 2018, “Proof Theory of the Cut Rule”, in *Categories for the Working Philosopher*, E. Landry (ed.), Oxford: Oxford University Press: 223–261.
* Coecke, B., 2011, “A Universe of Processes and Some of its Guises”, *Deep Beauty: Understanding the Quantum World through Mathematical Innovation*, Cambridge: Cambridge University Press: 129–186.
* Coecke, B. & Kissinger, A., 2018, “Categorical Quentum Mechanics I: Causal Quantum Processes”, *Categories for the Working Philosopher*, E. Landry (ed.), Oxford: Oxford University Press: 286–328.
* Couture, J. & Lambek, J., 1991, “Philosophical Reflections on the Foundations of Mathematics”, *Erkenntnis*, 34 (2): 187–209.
* –––, 1992, “Erratum:”Philosophical Reflections on the Foundations of Mathematics“”, *Erkenntnis*, 36 (1): 134.
* Crole, R. L., 1994, Categories for Types, Cambridge: Cambridge University Press.
* De Toffoli, S., 2017, “Chasing the diagram – the use of visualizations in algebraic reasoning ”, *The Review of Symbolic Logic*, 10 (1): 158–186.
* Dieudonné, J. & Grothendieck, A., 1960 \[1971], *Éléments de Géométrie Algébrique*, Berlin: Springer-Verlag.
* Döring, A., 2011, “The Physical Interpretation of Daseinisation”, *Deep Beauty: Understanding the Quantum World through Mathematical Innovation*, Cambridge: Cambridge University Press: 207–238.
* Ehresmann, A., 2018, “Applications of Categories to Biology and Cognition”, *Categories for the Working Philosopher*, E. Landry (ed.), Oxford: Oxford University Press: 358–380.
* Ehresmann, A. & Vanbremeersch, J.-P., 2007, *Memory Evolutive Systems: Hierarchy, Emergence, Cognition*, Amsterdam: Elsevier
* –––, 1987, “Hierarchical Evolutive Systems: a Mathematical Model for Complex Systems”, *Bulletin of Mathematical Biology*, 49 (1): 13–50.
* Eilenberg, S. & Cartan, H., 1956, *Homological Algebra*, Princeton: Princeton University Press.
* Eilenberg, S. & Mac Lane, S., 1942, “Group Extensions and Homology”, *Annals of Mathematics*, 43: 757–831.
* –––, 1945, “General Theory of Natural Equivalences”, *Transactions of the American Mathematical Society*, 58: 231–294.
* Eilenberg, S. & Steenrod, N., 1952, *Foundations of Algebraic Topology*, Princeton: Princeton University Press.
* Ellerman, D., 1988, “Category Theory and Concrete Universals”, *Erkenntnis*, 28: 409–429.
* –––, 2017, “Category Theory and Set Theory as Theories about Complementary Types of Universals”, *Logic and Logical Philosophy*, 26 (2): 145–162.
* Eva, B., 2016, “Category Theory and Physical Structuralism”, *European Journal for Philosophy of Science*, 6 (2): 231–246.
* –––, 2017, “Topos Theoretic Quantum Realism”, *The British Journal for the Philosophy of Science*, 68 (4): 1149–1181.
* Feferman, S., 1977, “Categorical Foundations and Foundations of Category Theory”, *Logic, Foundations of Mathematics and Computability*, R. Butts (ed.), Reidel, 149–169.
* –––, 2004, “Typical Ambiguity: trying to have your cake and eat it too”, *One Hundred Years of Russell’s Paradox*, G. Link (ed.), Berlin: De Gruyter, 135–151.
* Freyd, P., 1964, *Abelian Categories. An Introduction to the Theory of Functors*, New York: Harper & Row.
* –––, 1965, “The Theories of Functors and Models”. *Theories of Models*, Amsterdam: North Holland, 107–120.
* –––, 1972, “Aspects of Topoi”, *Bulletin of the Australian Mathematical Society*, 7: 1–76.
* –––, 1980, “The Axiom of Choice”, *Journal of Pure and Applied Algebra*, 19: 103–125.
* –––, 1987, “Choice and Well-Ordering”, *Annals of Pure and Applied Logic*, 35 (2): 149–166.
* –––, 1990, *Categories, Allegories*, Amsterdam: North Holland.
* –––, 2002, “Cartesian Logic”, *Theoretical Computer Science*, 278 (1–2): 3–21.
* Freyd, P., Friedman, H. & Scedrov, A., 1987, “Lindembaum Algebras of Intuitionistic Theories and Free Categories”, *Annals of Pure and Applied Logic*, 35 (2): 167–172.
* Galli, A. & Reyes, G. & Sagastume, M., 2000, “Completeness Theorems via the Double Dual Functor”, *Studia Logical*, 64 (1): 61–81.
* Ghilardi, S., 1989, “Presheaf Semantics and Independence Results for some Non-classical first-order logics”, *Archive for Mathematical Logic*, 29 (2): 125–136.
* Ghilardi, S. & Zawadowski, M., 2002, *Sheaves, Games & Model Completions: A Categorical Approach to Nonclassical Porpositional Logics*, Dordrecht: Kluwer.
* Goldblatt, R., 1979, *Topoi: The Categorical Analysis of Logic, Studies in logic and the foundations of mathematics*, Amsterdam: Elsevier.
* Grothendieck, A., 1957, “Sur Quelques Points d’algèbre homologique”, *Tohoku Mathematics Journal*, 9: 119–221.
* Grothendieck, A. *et al*., *Séminaire de Géométrie Algébrique*, Vol. 1–7, Berlin: Springer-Verlag.
* Hatcher, W. S., 1982, *The Logical Foundations of Mathematics*, Oxford: Pergamon Press.
* Healy, M. J., 2000, “Category Theory Applied to Neural Modeling and Graphical Representations”, *Proceedings of the IEEE-INNS-ENNS International Joint Conference on Neural Networks: IJCNN200, Como, vol. 3*, M. Gori, S-I. Amari, C. L. Giles, V. Piuri (eds.), IEEE Computer Science Press, 35–40.
* Healy, M. J., & Caudell, T. P., 2006, “Ontologies and Worlds in Category Theory: Implications for Neural Systems”,*Axiomathes*, 16 (1–2): 165–214.
* Hellman, G., 2003, “Does Category Theory Provide a Framework for Mathematical Structuralism?”, *Philosophia Mathematica*, 11 (2): 129–157.
* –––, 2006, “Mathematical Pluralism: the case of smooth infinitesimal analysis”, *Journal of Philosophical Logic*, 35 (6): 621–651.
* –––, 2011,“Foundational Frameworks”, in *Foundational Theories of Classical and Constructive Mathematics*, G. Sommaruga (ed.), New York: Springer: 53–70.
* Hellman, G., 2013, “Neither Categorical nor Set-Theoretic Foundations”, *The Review of Symbolic Logic*, 6 (1): 16–23.
* Hermida, C. & Makkai, M. & Power, J., 2000, “On Weak Higher-dimensional Categories I”, *Journal of Pure and Applied Algebra*, 154 (1–3): 221–246.
* –––, 2001, “On Weak Higher-dimensional Categories 2”, *Journal of Pure and Applied Algebra*, 157 (2–3): 247–277.
* –––, 2002, “On Weak Higher-dimensional Categories 3”, *Journal of Pure and Applied Algebra*, 166 (1–2): 83–104.
* Heunen, C. & Landsmann, N. & Spitters, B., 2009, “A Topos for Algebraic Quantum Theory”, *Communications in Mathematical Physics*, 291 (1): 63–110.
* Hyland, J. M. E., 1982, “The Effective Topos”, *Studies in Logic and the Foundations of Mathematics* (Volume 110), Amsterdam: North Holland, 165–216.
* –––, 1988, “A Small Complete Category”, *Annals of Pure and Applied Logic*, 40 (2): 135–165.
* –––, 1991, “First Steps in Synthetic Domain Theory”, *Category Theory (Como 1990)* (Lecture Notes in Mathematics, Volume 1488), Berlin: Springer, 131–156.
* –––, 2002, “Proof Theory in the Abstract”, *Annals of Pure and Applied Logic*, 114 (1–3): 43–78.
* Hyland, J. M. E. & Robinson, E. P. & Rosolini, G., 1990, “The Discrete Objects in the Effective Topos”, *Proceedings of the London Mathematical Society (3)*, 60 (1): 1–36.
* Isham, C.J., 2011, “Topos Methods in the Foundations of Physics”, *Deep Beauty: Understanding the Quantum World through Mathematical Innovation*, Cambridge: Cambridge University Press: 187–206.
* Jacobs, B., 1999, *Categorical Logic and Type Theory*, Amsterdam: North Holland.
* Johnstone, P. T., 1977, *Topos Theory*, New York: Academic Press.
* –––, 1979a, “Conditions Related to De Morgan’s Law”, *Applications of Sheaves* (Lecture Notes in Mathematics, Volume 753), Berlin: Springer, 479–491.
* –––, 1979b, “Another Condition Equivalent to De Morgan’s Law”, *Communications in Algebra*, 7 (12): 1309–1312.
* –––, 1981, “Tychonoff’s Theorem without the Axiom of Choice”, *Fundamenta Mathematicae*, 113 (1): 21–35.
* –––, 1982, *Stone Spaces*, Cambridge:Cambridge University Press.
* –––, 1985, “How General is a Generalized Space?”, *Aspects of Topology*, Cambridge: Cambridge University Press, 77–111.
* –––, 2001, “Elements of the History of Locale Theory”, *Handbook of the History of General Topology*, Vol. 3, Dordrecht: Kluwer, 835–851.
* –––, 2002a, *Sketches of an Elephant: a Topos Theory Compendium. Vol. 1* (Oxford Logic Guides, Volume 43), Oxford: Oxford University Press.
* Joyal, A. & Moerdijk, I., 1995, *Algebraic Set Theory*, Cambridge: Cambridge University Press.
* Joyal, A. and Street, R., 1993, “Braided Tensor Categories”, *Advances in Mathematics*, 102 (1): 20–78.
* Joyal, A., Street, R. and Verity, D., 1996, “Traced Monoidal Categories”, *Mathematical Proceedings of the Cambridge Philosophical Society*, 119 (3): 447–468.
* Kan, D. M., 1958, “Adjoint Functors”, *Transactions of the American Mathematical Society*, 87: 294–329.
* Kishida, K., 2018, “Categories and Modalities”, in *Categories for the Working Philosopher*, E. Landry (ed.), Oxford, Oxford University Press: 163–222.
* Kock, A., 2006, *Synthetic Differential Geometry* (London Mathematical Society Lecture Note Series, Volume 51), Cambridge: Cambridge University Press, 2nd ed.
* Krömer, R., 2007, *Tool and Objects: A History and Philosophy of Category Theory*, Basel: Birkhäuser.
* La Palme Reyes, M., John Macnamara, Gonzalo E. Reyes, and Houman Zolfaghari, 1994, “The non-Boolean Logic of Natural Language Negation”, *Philosophia Mathematica*, 2 (1): 45–68.
* –––, 1999, “Count Nouns, Mass Nouns, and their Transformations: a Unified Category-theoretic Semantics”, *Language, Logic and Concepts*, Cambridge: MIT Press, 427–452.
* Lal, R. & Teh, N., 2017, “Categorical Generalization and Physical Structuralism”, *British Journal for the Philosophy of Science*, 68 (1): 213–251.
* Lambek, J., 1968, “Deductive Systems and Categories I. Syntactic Calculus and Residuated Categories”, *Mathematical Systems Theory*, 2: 287–318.
* –––, 1969, “Deductive Systems and Categories II. Standard Constructions and Closed Categories”, *Category Theory, Homology Theory and their Applications I*, Berlin: Springer, 76–122.
* –––, 1972, “Deductive Systems and Categories III. Cartesian Closed Categories, Intuitionâ‰ istic Propositional Calculus, and Combinatory Logic”, *Toposes, Algebraic Geometry and Logic* (Lecture Notes in Mathematics, Volume 274), Berlin: Springer, 57–82.
* –––, 1982, “The Influence of Heraclitus on Modern Mathematics”, *Scientific Philosophy Today*, J. Agassi and R.S. Cohen (eds.), Dordrecht, Reidel, 111–122.
* –––, 1986, “Cartesian Closed Categories and Typed lambda calculi”, *Combinators and Functional Programming Languages* (Lecture Notes in Computer Science, Volume 242), Berlin: Springer, 136–175.
* –––, 1989a, “On Some Connections Between Logic and Category Theory”, *Studia Logica*, 48 (3): 269–278.
* –––, 1989b, “On the Sheaf of Possible Worlds”, *Categorical Topology and its relation to Analysis, Algebra and Combinatorics*, Teaneck: World Scientific Publishing, 36–53.
* –––, 1993, “Logic without Structural Rules”, *Substructural Logics* (Studies in Logic and Computation, Volume 2), Oxford: Oxford University Press, 179–206.
* –––, 1994a, “Some Aspects of Categorical Logic”, *Logic, Methodology and Philosophy of Science IX* (Studies in Logic and the Foundations of Mathematics, Volume 134), Amsterdam: North Holland, 69–89.
* –––, 1994b, “Are the Traditional Philosophies of Mathematics Really Incompatible?”, *Mathematical Intelligencer*, 16 (1): 56–62.
* –––, 1994c, “What is a Deductive System?”, *What is a Logical System?* (Studies in Logic and Computation, Volume 4), Oxford: Oxford University Press, 141–159.
* –––, 2004, “What is the world of Mathematics? Provinces of Logic Determined”, *Annals of Pure and Applied Logic*, 126: 1–3, 149–158.
* Lambek, J. & Scott, P.J., 1981, “Intuitionistic Type Theory and Foundations”, *Journal of Philosophical Logic*, 10 (1): 101–115.
* –––, 1983, “New Proofs of Some Intuitionistic Principles”, *Zeitschrift für Mathematische Logik und Grundlagen der Mathematik*, 29 (6): 493–504.
* –––, 1986, *Introduction to Higher Order Categorical Logic*, Cambridge: Cambridge University Press.
* Lam, V. & Wütrich, C., 2015, “No Categorical Support for Radical Ontic Structural Realism”, *British Journal for the Philosophy of Science*, 66 (3): 605–634.
* Landry, E., 1999, “Category Theory: the Language of Mathematics”, *Philosophy of Science*, 66 (3) (Supplement): S14–S27.
* –––, 2001, “Logicism, Structuralism and Objectivity”, *Topoi*, 20 (1): 79–95.
* –––, 2007, “Shared Structure need not be Shared Set-structure”, *Synthese*, 158 (1): 1–17.
* –––, 2011, “How to be a Structuralist all the way down”, *Synthese*, 179: 435–454.
* –––, 2012, “Methodological Structural Realism”, in *Sructure, Objects, and Causality*, E. Landry & D. Rickles (eds.), Dordrecht, Reidel: 29–59.
* –––, 2013, “The Genetic versus The Axiomatic Method: responding to Feferman 1977”, *The Review of Symbolic Logic*, 6 (1): 24–50.
* –––, 2018, “Structural Realism and Category Mistakes”, in *Categories for the Working Philosopher*, E. Landry (ed.), Oxford, Oxford University Press: 430–449.
* Landry, E. & Marquis, J.-P., 2005, “Categories in Context: Historical, Foundational and philosophical”, *Philosophia Mathematica*, 13: 1–43.
* –––, 2017, *Categories for the Working Philosophers*, Oxford: Oxford University Press.
* Lawvere, F. W., 1963, “Functorial Semantics of Algebraic Theories”, *Proceedings of the National Academy of Sciences U.S.A.*, 50: 869–872.
* –––, 1964, “An Elementary Theory of the Category of Sets”, *Proceedings of the National Academy of Sciences U.S.A.*, 52: 1506–1511.
* –––, 1965, “Algebraic Theories, Algebraic Categories, and Algebraic Functors”, *Theory of Models*, Amsterdam: North Holland, 413–418.
* –––, 1966, “The Category of Categories as a Foundation for Mathematics”, *Proceedings of the Conference on Categorical Algebra*, La Jolla, New York: Springer-Verlag, 1–21.
* –––, 1969a, “Diagonal Arguments and Cartesian Closed Categories”, *Category Theory, Homology Theory, and their Applications II*, Berlin: Springer, 134–145.
* –––, 1969b, “Adjointness in Foundations”, *Dialectica*, 23: 281–295.
* –––, 1970, “Equality in Hyper doctrines and Comprehension Schema as an Adjoint Functor”, *Applications of Categorical Algebra*, Providence: AMS, 1–14.
* –––, 1971, “Quantifiers and Sheaves”, *Actes du Congrès International des Mathématiciens, Tome 1*, Paris: Gauthier-Villars, 329–334.
* –––, 1972, “Introduction”, *Toposes, Algebraic Geometry and Logic*, Lecture Notes in Mathematics, 274, Springer-Verlag, 1–12.
* –––, 1975, “Continuously Variable Sets: Algebraic Geometry = Geometric Logic”, *Proceedings of the Logic Colloquium Bristol 1973*, Amsterdam: North Holland, 135–153.
* –––, 1976, “Variable Quantities and Variable Structures in Topoi”, *Algebra, Topology, and Category Theory*, New York: Academic Press, 101–131.
* –––, 1992, “Categories of Space and of Quantity”, *The Space of Mathematics*, Foundations of Communication and Cognition, Berlin: De Gruyter, 14–30.
* –––, 1994a, “Cohesive Toposes and Cantor’s lauter Ensein ”, *Philosophia Mathematica*, 2 (1): 5–15.
* –––, 1994b, “Tools for the Advancement of Objective Logic: Closed Categories and Toposes”, *The Logical Foundations of Cognition* (Vancouver Studies in Cognitive Science, Volume 4), Oxford: Oxford University Press, 43–56.
* –––, 2000, “Comments on the Development of Topos Theory”, *Development of Mathematics 1950–2000*, Basel: Birkhäuser, 715–734.
* –––, 2002, “Categorical Algebra for Continuum Micro Physics”, *Journal of Pure and Applied Algebra*, 175 (1–3): 267–287.
* –––, 2003, “Foundations and Applications: Axiomatization and Education. New Programs and Open Problems in the Foundation of Mathematics”, *Bulletin of Symbolic Logic*, 9 (2): 213–224.
* Lawvere, F. W. & Rosebrugh, R., 2003, *Sets for Mathematics*, Cambridge: Cambridge University Press.
* Lawvere, F. W. & Schanuel, S., 1997, *Conceptual Mathematics: A First Introduction to Categories*, Cambridge: Cambridge University Press.
* Leinster, T., 2002, “A Survey of Definitions of n-categories”, *Theory and Applications of Categories*, (electronic), 10: 1–70.
* –––, 2004, *Higher Operads, Higher Categories*, London Mathematical Society Lecture Note Series, 298, Cambridge: Cambridge University Press.
* –––, 2014, *Basic Category Theory*, Cambridge: Cambridge University Press.
* Linnebo, O. & Pettigrew, R., 2011, “Category Theory as an Autonomous Foundation”, *Philosophia Mathematica*, 19 (3): 227–254.
* Logan, S., 2015, “Category Theory is a Contentful Theory”, *Philosophia Mathematica*, 23 (1): 110–115.
* Lurie, J., 2009, *Higher Topos Theory*, Princeton: Princeton University Press.
* Mac Lane, S., 1950, “Dualities for Groups”, *Bulletin of the American Mathematical Society*, 56: 485–516.
* –––, 1969, “Foundations for Categories and Sets”, *Category Theory, Homology Theory and their Applications II*, Berlin: Springer, 146–164.
* –––, 1969, “One Universe as a Foundation for Category Theory”, *Reports of the Midwest Category Seminar III*, Berlin: Springer, 192–200.
* –––, 1971, “Categorical algebra and Set-Theoretic Foundations”, *Axiomatic Set Theory*, Providence: AMS, 231–240.
* –––, 1975, “Sets, Topoi, and Internal Logic in Categories”, *Studies in Logic and the Foundations of Mathematics* (Volumes 80), Amsterdam: North Holland, 119–134.
* –––, 1981, “Mathematical Models: a Sketch for the Philosophy of Mathematics”, *American Mathematical Monthly*, 88 (7): 462–472.
* –––, 1986, *Mathematics, Form and Function*, New York: Springer.
* –––, 1988, “Concepts and Categories in Perspective”, *A nCentury of Mathematics in America, Part I*, Providence: AMS, 323–365.
* –––, 1989, “The Development of Mathematical Ideas by Collision: the Case of Categories and Topos Theory”, *Categorical Topology and its Relation to Analysis, Algebra and Combinatorics*, Teaneck: World Scientific, 1–9.
* –––, 1996, “Structure in Mathematics. Mathematical Structuralism”, *Philosophia Mathematica*, 4 (2): 174–183.
* –––, 1997, “Categorical Foundations of the Protean Character of Mathematics”, *Philosophy of Mathematics Today*, Dordrecht: Kluwer, 117–122.
* –––, 1998, *Categories for the Working Mathematician*, 2nd edition, New York: Springer-Verlag.
* Mac Lane, S. & Moerdijk, I., 1992, *Sheaves in Geometry and Logic*, New York: Springer-Verlag.
* MacNamara, J. & Reyes, G. (eds.), 1994, *The Logical Foundation of Cognition*, Oxford: Oxford University Press.
* Majid, S., 1995, *Foundations of Quantum Group Theory*, Cambridge: Cambridge University Press.
* Makkai, M., 1987, “Stone Duality for First-Order Logic”, *Advances in Mathematics*, 65 (2): 97–170.
* –––, 1988, “Strong Conceptual Completeness for First Order Logic”, *Annals of Pure and Applied Logic*, 40: 167–215.
* –––, 1997a, “Generalized Sketches as a Framework for Completeness Theorems I”, *Journal of Pure and Applied Algebra*, 115 (1): 49–79.
* –––, 1997b, “Generalized Sketches as a Framework for Completeness Theorems II”, *Journal of Pure and Applied Algebra*, 115 (2): 179–212.
* –––, 1997c, “Generalized Sketches as a Framework for Completeness Theorems III”, *Journal of Pure and Applied Algebra*, 115 (3): 241–274.
* –––, 1998, “Towards a Categorical Foundation of Mathematics”, *Lecture Notes in Logic* (Volume 11), Berlin: Springer, 153–190.
* –––, 1999, “On Structuralism in Mathematics”, *Language, Logic and Concepts*, Cambridge: MIT Press, 43–66.
* Makkai, M. & Paré, R., 1989, *Accessible Categories: the Foundations of Categorical Model Theory*, Contemporary Mathematics 104, Providence: AMS.
* Makkai, M. & Reyes, G., 1977, *First-Order Categorical Logic*, Springer Lecture Notes in Mathematics 611, New York: Springer.
* –––, 1995, “Completeness Results for Intuitionistic and Modal Logic in a Categorical Setting”, *Annals of Pure and Applied Logic*, 72 (1): 25–101.
* Marquis, J.-P., 1993, “Russell’s Logicism and Categorical Logicisms”, *Russell and Analytic Philosophy*, A. D. Irvine & G. A. Wedekind (eds.), Toronto, University of Toronto Press, 293–324.
* –––, 1995, “Category Theory and the Foundations of Mathematics: Philosophical Excavations”, *Synthese*, 103: 421–447.
* –––, 2000, “Three Kinds of Universals in Mathematics?”, in *Logical Consequence: Rival Approaches and New Studies in Exact Philosophy: Logic, Mathematics and Science*, Vol. II, B. Brown & J. Woods (eds.), Oxford: Hermes, 191–212.
* –––, 2006, “Categories, Sets and the Nature of Mathematical Entities”, in *The Age of Alternative Logics. Assessing philosophy of logic and mathematics today*, J. van Benthem, G. Heinzmann, Ph. Nabonnand, M. Rebuschi, H. Visser (eds.), Springer, 181–192.
* –––, 2009, *From a Geometrical Point of View: A Study in the History and Philosophy of Category Theory*, Berlin: Springer.
* –––, 2013, “Mathematical Forms and Forms of Mathematics: leaving the shores of extensional mathematics”, *Synthese*, 190 (12): 2141–2164.
* –––, 2013b, “Categorical Foundations of Mathematics or how to provide foundations for abstract mathematics”, *The Review of Symbolic Logic*, 6 (1): 51–75.
* –––, 2014, “Mathematical Abstraction, Conceptual Variation and Identity”, *Logic, Methodology and Philosophy of science – logic and science facing the new technologies*, P. Schroeder-Heister, et al. (eds.), London: College Publications, 299–322.
* –––, 2016, “Stairway to Heaven”, *The Mathematical Intelligencer*, 38 (3): 41–51.
* Marquis, J.-P. & Reyes, G., 2012, “The History of Categorical Logic: 1963–1977”, *Handbook of the History of Logic*, Vol. 6, D. Gabbay & J. Woods (eds.), Amsterdam: Elsevier, 689–800.
* McLarty, C., 1986, “Left Exact Logic”, *Journal of Pure and Applied Algebra*, 41 (1): 63–66.
* –––, 1990, “Uses and Abuses of the History of Topos Theory”, *British Journal for the Philosophy of Science*, 41: 351–375.
* –––, 1991, “Axiomatizing a Category of Categories”, *Journal of Symbolic Logic*, 56 (4): 1243–1260.
* –––, 1992, *Elementary Categories, Elementary Toposes*, Oxford: Oxford University Press.
* –––, 1993, “Numbers Can be Just What They Have to”, *Noûs*, 27: 487–498.
* –––, 1994, “Category Theory in Real Time”, *Philosophia Mathematica*, 2 (1): 36–44.
* –––, 2004, “Exploring Categorical Structuralism”, *Philosophia Mathematica*, 12: 37–53.
* –––, 2005, “Learning from Questions on Categorical Foundations”, *Philosophia Mathematica*, 13 (1): 44–60.
* –––, 2006, “Emmy Noether’s set-theoretic topology: from Dedekind to the rise of functors”, *The Architecture of Modern Mathematics*, J.J. Gray & J. Ferreiros, Oxford: Oxford University Press, 187–208.
* –––, 2011, “Recent Debate over Categorical Foundations”, in *Foundational Theories of Classical and Constructive Mathematics*, G. Sommaruga (ed.), New York: Springer: 145–154.
* –––, 2018, “The Role of Set Theory in Mathematics”, in *Categories for the Working Philosopher*, E. Landry (ed.), Oxford, Oxford University Press: 1–17.
* Moerdijk, I., 1984, “Heine-Borel does not imply the Fan Theorem”, *Journal of Symbolic Logic*, 49 (2): 514–519.
* –––, 1995a, “A Model for Intuitionistic Non-standard Arithmetic”, *Annals of Pure and Applied Logic*, 73 (1): 37–51.
* –––, 1998, “Sets, Topoi and Intuitionism”, *Philosophia Mathematica*, 6 (2): 169–177.
* Moerdijk, I. & Palmgren, E., 1997, “Minimal Models of Heyting Arithmetic”, *Journal of Symbolic Logic*, 62 (4): 1448–1460.
* –––, 2002, “Type Theories, Toposes and Constructive Set Theory: Predicative Aspects of AST”, *Annals of Pure and Applied Logic*, 114 (1–3): 155–201.
* Moerdijk, I. & Reyes, G., 1991, *Models for Smooth Infinitesimal Analysis*, New York: Springer-Verlag.
* Palmgren, E., 2012, “Constructivist and Structuralist Foundations: Bishop’s and Lawvere’s Theories of Sets”, *Annals of Pure and Applied Logic*, 63: 1384–1399.
* Palmgren, E., 2018, “A Constructive Examination of a Russell-style Ramified Type Theory”, *The Bulletin of Symbolic Logic*, 24 (1): 90–106.
* Pareigis, B., 1970, *Categories and Functors*, New York: Academic Press.
* Pedicchio, M. C. & Tholen, W., 2004, *Categorical Foundations*, Cambridge: Cambridge University Press.
* Peirce, B., 1991, *Basic Category Theory for Computer Scientists*, Cambridge: MIT Press.
* Peruzzi, A., 2006, “The Meaning of Category Theory for 21st Century Philosophy”, *Axiomathes*, 16 (4): 424–459.
* –––, 2016, “Category Theory and the Search for Universals: A Very Short Guide for Philosophers”, in *Modern Logic 1850–1950, East and West*, F. Abeles & M. Muller (eds.), Basel: Birkhauser, 159–182.
* Pitts, A. M., 1987, “Interpolation and Conceptual Completeness for Pretoposes via Category Theory”, *Mathematical Logic and Theoretical Computer Science* (Lecture Notes in Pure and Applied Mathematics, Volume 106), New York: Dekker, 301–327.
* –––, 1989, “Conceptual Completeness for First-order Intuitionistic Logic: an Application of Categorical Logic”, *Annals of Pure and Applied Logic*, 41 (1): 33–81.
* –––, 1992, “On an Interpretation of Second-order Quantification in First-order Propositional Intuitionistic Logic”, *Journal of Symbolic Logic*, 57 (1): 33–52.
* –––, 2000, “Categorical Logic”, *Handbook of Logic in Computer Science, Vol.5*, Oxford: Oxford Unversity Press, 39–128.
* Pitts, A. M. & Taylor, P., 1989, “A Note of Russell’s Paradox in Locally Cartesian Closed Categories”, *Studia Logica*, 48 (3): 377–387.
* Plotkin, B., 2000, “Algebra, Categories and Databases”, *Handbook of Algebra, Vol. 2*, Amsterdam: Elsevier, 79–148.
* Porter, T., 2004, “Interpreted Systems and Kripke Models for Multiagent Systems from a Categorical Perspective”, *Theoretical Computer Science*, 323 (1–3): 235–266.
* Reyes, G., 1991, “A Topos-theoretic Approach to Reference and Modality”, *Notre Dame Journal of Formal Logic*, 32 (3): 359–391.
* –––, 1974, “From Sheaves to Logic”, in *Studies in Algebraic Logic*, A. Daigneault (ed.), Providence: AMS.
* Reyes, G. & Zawadowski, M., 1993, “Formal Systems for Modal Operators on Locales”, *Studia Logica*, 52 (4): 595–613.
* Reyes, G. & Zolfaghari, H., 1991, “Topos-theoretic Approaches to Modality”, *Category Theory (Como 1990)* (Lecture Notes in Mathematics, Volume 1488), Berlin: Springer, 359–378.
* –––, 1996, “Bi-Heyting Algebras, Toposes and Modalities”, *Journal of Philosophical Logic*, 25 (1): 25–43.
* Riehl, E., 2016, *Category Theory in Context*, Mineola: Dover.
* Rodabaugh, S. E. & Klement, E. P. (eds.), *Topological and Algebraic Structures in Fuzzy Sets: A Handbook of Recent Developments in the Mathematics of Fuzzy Sets* (Trends in Logic, Volume 20), Dordrecht: Kluwer.
* Rodin, A., 2014, *Axiomatic Method and Category Theory* (Synthese Library: Volume 364), New York: Springer.
* Scedrov, A., 1984, *Forcing and Classifying Topoi*, Providence: AMS.
* Scott, P.J., 2000, “Some Aspects of Categories in Computer Science”, *Handbook of Algebra, Vol. 2*, Amsterdam: North Holland, 3–77.
* Seely, R. A. G., 1984, “Locally Cartesian Closed Categories and Type Theory”, *Mathematical Proceedings of the Cambridge Mathematical Society*, 95 (1): 33–48.
* Shapiro, S., 2005, “Categories, Structures and the Frege-Hilbert Controversy: the Status of Metamathematics”, *Philosophia Mathematica*, 13 (1): 61–77.
* –––, 2011,“Foundations: Structures, Sets, and Categories”, in *Foundational Theories of Classical and Constructive Mathematics*, G. Sommaruga (ed.), New York: Springer: 97–110.
* Sica, G. (ed.), 2006, *What is Category Theory?*, Firenze: Polimetrica.
* Simpson, C., 2011, *Homotopy Theory of Higher Categories*, Cambridge: Cambridge University Press.
* Spivak, D., 2014, *Category Theory for the Sciences*, Cambridge: MIT Press.
* Taylor, P., 1996, “Intuitionistic sets and Ordinals”, *Journal of Symbolic Logic*, 61: 705–744.
* –––, 1999, *Practical Foundations of Mathematics*, Cambridge: Cambridge University Press.
* Tierney, M., 1972, “Sheaf Theory and the Continuum Hypothesis”, *Toposes, Algebraic Geometry and Logic*, F.W. Lawvere (ed.), Springer Lecture Notes in Mathematics 274, 13–42.
* Van Oosten, J., 2002, “Realizability: a Historical Essay”, *Mathematical Structures in Computer Science*, 12 (3): 239–263.
* –––, 2008, *Realizability: an Introduction to its Categorical Side* (Studies in Logic and the Foundations of Mathematics, Volume 152), Amsterdam: Elsevier.
* Van der Hoeven, G. & Moerdijk, I., 1984a, “Sheaf Models for Choice Sequences”, *Annals of Pure and Applied Logic*, 27 (1): 63–107.
* –––, 1984b, “On Choice Sequences determined by Spreads”, *Journal of Symbolic Logic*, 49 (3): 908–916.
* –––, 1984c, “Constructing Choice Sequences for Lawless Sequences of Neighbourhood Functions”, *Models and Sets* (Lecture Notes in Mathematics, Volume 1103), Berlin: Springer, 207–234.
* Walsh, P., 2017, “Categorical Harmony and Path Induction”, *The Review of Symbolic Logic*, 10 (2): 301–321.
* Wood, R.J., 2004, “ Ordered Sets via Adjunctions”, *Categorical Foundations*, M. C. Pedicchio & W. Tholen (eds.), Cambridge: Cambridge University Press.
* Yanofski, N., 2003, “A Universal Approach to Self-Referential Paradoxes, Incompleteness and Fixed Points”, *The Bulletin of Symbolic Logic*, 9 (3): 362–386.

## Academic Tools

| ![sep man icon](../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=category-theory).                                                                      |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![sep man icon](../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/category-theory/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
| ![inpho icon](../.gitbook/assets/inpho.png)         | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=category-theory\&redirect=True) at the Internet Philosophy Ontology Project (InPhO).   |
| ![phil papers icon](../.gitbook/assets/pp.png)      | [Enhanced bibliography for this entry](https://philpapers.org/sep/category-theory/) at [PhilPapers](https://philpapers.org/), with links to its database.                          |

## Other Internet Resources

* Cheng, E. & Lauda, A., 2004, [*Higher-Dimensional Categories: an illustrated guide book*](http://eugeniacheng.com/wp-content/uploads/2017/02/cheng-lauda-guidebook.pdf).
* Fong, B. and Spivak, D., 2019, “[Graphical Regular Logic](https://arxiv.org/pdf/1812.05765v2.pdf)”, available at arXiv.org.
* [The category theory mailing list](http://www.mta.ca/\~cat-dist/) (with many links and useful information)
* [The n-category Cafe, A blog on higher-dimensional categories, physics and philosophy](http://golem.ph.utexas.edu/category/)
* [The nLab](https://ncatlab.org/nlab/show/HomePage/) (an open access resource on categories and higher-dimensional categories)
* [Logic Matters](https://www.logicmatters.net/categories/) Peter Smith’s blog on logic. It contains a page on category theory with many references and discussions.
* [The Catsters’ Category Theory Videos, introducing the basic concepts of category theory](https://www.youtube.com/watch?v=yeQcmxM2e5I\&list=PLlGXNwjYhXYxKVa67r0pKuYufECy713bv/)
* [Math3Ma](https://www.math3ma.com/categories/) A math blog that contains introductions to the main concepts of category theory, set theory and other mathematical topics

## Related Entries

[logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [mathematics, philosophy of](https://plato.stanford.edu/entries/philosophy-mathematics/) | [set theory](https://plato.stanford.edu/entries/set-theory/)

[Copyright © 2019](https://plato.stanford.edu/info.html#c) by\
[Jean-Pierre Marquis](http://www.philo.umontreal.ca/personnel/professeur/marquis-jean-pierre/) <[*Jean-Pierre.Marquis@umontreal.ca*](mailto:Jean-Pierre%2eMarquis%40umontreal%2eca)>
