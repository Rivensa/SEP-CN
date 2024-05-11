# 描述性决策理论 descriptive (Jake Chandler)

*首次发布于 2017 年 9 月 26 日*

描述性决策理论关注的是人们倾向于做出的选择中的规律性，并试图对其进行解释。它通常与一个平行的领域——规范性决策理论相区分，后者旨在提供人们应该做出的选择的解释。这个领域的大部分工作都致力于构建和测试形式模型，旨在改进一个被称为“主观预期效用”（SEU）的框架的描述性适应性。这种适应性在上个世纪中叶首次受到质疑，并在从 20 世纪 60 年代中期开始的心理学和经济学的大量实验工作的挑战下进一步受到质疑。

本条目首先概述了 SEU 的基本承诺，然后介绍了它最著名的实证缺陷以及一些被提出来取代它的模型。接下来讨论了描述性决策理论与其规范性对应物之间的关系，并与哲学文献中的一些相关主题进行了联系。[1]

---

## 1. 标准模型：主观预期效用

选择的经典理论——主观预期效用（SEU）——起源于 Savage（1954）的工作，建立在 De Finetti（1937）、Ramsey（1931）和 von Neumann 和 Morgenstern（1947）的先前贡献之上。它提供了对“风险”下的决策和“不确定性”下的决策的统一处理。在“风险”情况下，决策者对与其行动成功相关的所有事件的客观概率有知识或坚定的信念；而在“不确定性”情况下，决策者则没有这些知识或信念。在其非规范化的形式中，它至少提出了这样的观点：代理人可以被描述为：

1. 将可用行为的可能后果与两个数值相关联。
2. 与他们希望结果发生的程度相对应的“效用”，
3. 与他们对行为结果发生的信心程度相对应的“主观概率”，这种信心程度可能或可能不是通过对客观概率的相应评估给出的；
4. 这些量决定了他们在行为之间的偏好，因此他们选择某些行为而不选择其他行为的倾向，以这种方式对行为进行排序，即通过主观概率加权求和他们可能结果的效用来确定行为的主观预期效用。

本体论上更大胆的观点认为，代理人之所以可以被描述，是因为他们确实拥有信念和欲望的程度，内省熟悉的心理状态，这些状态决定了他们的偏好和选择方式。

一些重要的形式结果，被称为“表示定理”，表明这种关于可描述性的主张可以从一组看似合理的一般原则，即“公设”或“公理”，推导出来，这些原则涉及代理人对行为的偏好。此外，这些公理不仅集体上足以推导出 SEU 的主张，而且其中的一个显著真子集也被证明是个别上必要的。因此，评估 SEU 的经验充分性的工作很大程度上集中在对上述公理的测试上。这些测试在最好的情况下可能会削弱支持该主张的一个关键原因，在最坏的情况下可能会提供拒绝该主张的理由。因此，有必要简要概述 Savage 自己早期的结果。

### 1.1 Savage 的表示定理

在 Savage 的框架中，行为被建模为将世界可能状态映射到结果的函数，如果你愿意的话，就是在相关自然状态下执行相关行为的后果。行为集合将被表示为 A={f1,f2,…g1,g2…}，状态集合为 S={s1,s2,…}，结果集合为 X={x1,x2,…,xn}。为了本文的目的，可以假设所考虑的行为是简单的，即它们的范围是有限的。如果一个行为将所有状态映射到同一个结果，那么它将被称为“常数”行为。状态集合，也称为事件，将用大写字母 A1,A2,…,B1,B2,… 等表示。这些事件的集合将被表示为 E。Efi 将表示行为 f 将状态映射到结果 xi 的状态集合，即 {s∈S:f(s)=xi}。还有一个有用的表示法，fAg 表示将 A 中的状态映射到 f 的结果，将 A 之外的状态映射到 g 的结果。

在某一时刻，代理人的选择倾向被认为是由他或她的偏好决定的，以这样的方式，从任何一组特定的行为中，代理人可能会选择所有且仅选择那些没有其他行为严格优先的行为。f⪰g 表示代理人认为行为 f 至少和行为 g 一样可取。≻（严格优先）和∼（无差别）分别表示⪰的非对称部分和对称部分，所以 f≻g 当且仅当 f⪰g 但不是 g⪰f，f∼g 当且仅当 f⪰g 且 g⪰f。方便起见，将这种偏好关系扩展到结果集合，设定对于所有结果 x1 和 x2，x1⪰x2 当且仅当在所有状态下产生 x1 的常数行为在弱意义上优于在所有状态下产生 x2 的行为。

Savage 证明了存在一定特定的对行为的偏好排序的约束集，只有当这个排序可以用定义域为 A 的实值函数 U 来表示时，这些约束集才会被满足（即 f⪰g 当且仅当 U(f)⪰U(g)）。

U(f)=n∑i=1P(Efi)u(xi)

其中 u:X↦R 是一个唯一的后果效用函数，满足正线性变换，P:S↦[0,1]是一个唯一的主观概率函数，满足 P(∅)=0，P(S)=1，以及有限可加性质 P(A∪B)=P(A)+P(B)，其中 A 和 B 是不相交的事件。换句话说，U 返回可能结果的效用之和，每个结果的效用乘以映射到该结果的状态集的主观概率。

对于 X 有限的情况，Savage 的公理集有六个。然而，在后续讨论中只有三个出现。第一个不需要评论。

弱序⪰是一种弱序，即：它既是传递的（对于所有的行为 f，g，h：如果 f⪰g 且 g⪰h，则 f⪰h），又是完备的（对于所有的行为 f，g：要么 f⪰g，要么 g⪰f）。

第二个告诉我们，在比较两个行为时，我们忽略它们在具有相同结果的状态集上的行为：

对于所有的行为 f，g，h，h'和任何事件 A：fAh⪰gAh 当且仅当 fAh'⪰gAh'。

第三个如下所示：

对于所有的结果 x1、x2、x3、x4 和事件 A、B，如果 x1≻x2 并且 x3≻x4，则当 x3Ax4⪰x3Bx4 时，x1Ax2⪰x1Bx2。

提出这个建议的理由在于，如果 x1≻x2，则 x1Ax2⪰x1Bx2 反映了对于 A 至少与 B 一样可能的承诺，因此，当 x3≻x4 时，x3Ax4⪰x3Bx4 也必须如此。

这三个条件需要注意，它们分别是 SEU 可表示性的必要条件，因此任何 SEU 最大化者都必须满足这些条件。此外，Savage 提出了两个进一步的非必要条件，即“非退化性”和“小事件连续性”，以及一个进一步的必要条件“事件单调性”，它告诉我们，在某些温和的情况下，将给定结果的一个或多个出现替换为另一个结果将产生一个首选行为，当且仅当新结果优于原始结果。

### 1.2 Savage 的证明

有了这些，Savage 的结果可以如下建立。首先，引入一个“主观比较概率”关系⊵，使得对于所有的结果 x1 和 x2，如果 x1≻x2，则 x1Ax2⪰x2Ax1 当且仅当 x1Bx2⪰x2Bx1。然后可以证明 Savage 的公理确保⊵满足一些适当的性质，而小事件连续性确保⊵可以由唯一的主观概率函数 P 表示。值得注意的是，在弱比较概率存在的情况下，主要是确定性原则允许推导出 P 的可加性属性。

其次，再次使用这些公理，可以得出结论，对于任何两个行为，代理人对于每个结果都分配相等的概率给它们映射到该结果的各自状态集合，代理人对于这两个行为是无差别的。换句话说：

状态中立性 如果 Pf=Pg，则 f∼g，其中 Pf(xi)=P(Efi)。

由于还可以证明，对于 P 中的每个彩票 P，存在一个行为 f，使得 Pf=P，这个结果的重要结论是，可以有效地简化代理人对行为的偏好的表示，将它们重新构造为对所谓的主观彩票集合 P 的偏好，即对结果的主观概率分布。为了简化表示法，对 P 的偏好关系将用相同的符号 ⪰ 表示，上下文可以消除歧义。

公理的进一步应用使我们能够确定这些对抽签的偏好满足三个重要的性质：（i）“混合弱序”条件，要求对抽签的偏好是传递的和完备的，（ii）“混合连续性”条件，在这里不重要的细节，最后（iii）“独立性”条件，与排序条件一起，将在接下来的讨论中成为重点。

为了呈现最后一个条件，还需要一个定义和一个符号：对于任意两个抽签 Pf 和 Pg 以及λ∈[0,1]，可以通过设置（λPf+(1−λ)Pg）(x)，即混合抽签分配给结果 x 的概率，等于λPf(x)+(1−λ)Pg(x)，来定义第三个简单抽签λPf+(1−λ)Pg。从启发上来说，可以将λPf+(1−λ)Pg 视为一个高阶抽签，它以概率λ进行 Pf 抽签，以互补概率进行 Pg 抽签。然后条件可以表述为：

独立性 对于所有的行为 f、g 和 h 以及所有的λ∈(0,1]：Pf⪰Pg 当且仅当λPf+(1−λ)Ph⪰λPg+(1−λ)Ph。

然后，通过引用冯·诺依曼和莫根斯特恩（1947）的一个结果，证明了上述三个性质对于用函数 U 表示⪰是必要且充分的。

U(Pf)=n∑i=1Pf(xi)u(xi),

其中 u:X↦R 是一个唯一的后果效用函数，可以通过正线性变换来确定。

### 1.3 概率三角形

概率三角形（又称“Marschak-Machina 三角形”）提供了一个有用的视觉表示，用于表示对{x1,x2,x3}上的彩票空间的偏好，其中 x3≻x2≻x1。由于对于任何 P∈P，P(x2)=1−P(x1)−P(x3)，因此可以将情况二维化，将彩票表示为单位三角形中的点，其中水平轴给出 P(x1)，垂直轴给出 P(x3)。西北角、西南角和东南角分别对应于确保获得 x3、x2 和 x1 的彩票。

现在，正如很容易证明的那样，SEU 致力于

对于所有的行为 f 和 g，如果对于任何结果 x，根据 Pf 的概率获得一个弱优于 x 的结果的概率至少与根据 Pg 的相应概率相等或更大（换句话说：∑{y∈X:y⪰x}Pf(y) ≥ ∑{y∈X:y⪰x}Pg(y)），那么 Pf⪰Pg。

实际上，上述原则是由独立性推导出来的，并且在其他条件成立的情况下等价于 Savage 的事件单调性条件（Grant 1995）。因此，随着向北或向西移动，彩票变得越来越受欢迎，因为在任一方向上，都会将概率从一个较不受欢迎的结果（从 x2 到 x3，向北移动；从 x1 到 x2，向西移动）转移到一个更受欢迎的结果。因此，无差别曲线是向上倾斜的。更陡的斜率表示更大的风险规避，具体来说：东北方向的移动增加了分布的扩散，即涉及的风险程度，将概率从中间结果（x2）转移到极端结果（x1 和 x3）。无差别曲线越陡，为了弥补这种增加的风险，需要对最佳结果的概率进行更大的增加。SEU 显然还要求无差别曲线既是线性的又是平行的。[2] 为了说明：

![right triangle with the with the 90 degree angle on the bottom left and labeled '0' The other two angles are each labeled '1' The vertical side is labeled 'Px3' and the horizontal side labeled 'Px1' Five parallel diagonal lines in the triangle from the bottom left to top right](https://plato.stanford.edu/entries/decision-theory-descriptive/fig1.svg)

 图 1

尽管 SEU 模型在选择行为的规范模型中仍然得到广泛支持（尽管请参见下面的第 5 节），但它不再被普遍认为是描述性充分的。早在 1950 年代和 1960 年代初，Allais（1953a，b）和 Ellsberg（1961）等人就注意到了其预测的一些重大偏差，并在 1970 年代进一步进行了研究。这些观察结果导致了替代模型的发展，其自身的预测结果已成为过去三十年左右广泛测试的焦点。[3]

## 2. 独立性问题

### 2.1 Allais 悖论

Allais（1953a: 527）考虑了通过从两个不同菜单中选择抽取的假设偏好，这些偏好与不同的财富增量和不同的客观概率相关，其中一个菜单包含以下选项 P1 和 P2，另一个菜单包含 P3 和 P4：

![circle with P1 with a line labeled '1' to the right pointing to '1M'](https://plato.stanford.edu/entries/decision-theory-descriptive/fig2a.svg)

(a)

![circle with P2 with a line labeled '1' to '5M' and a line labeled '89' to '1M' and a line labeled '01' to '0''](https://plato.stanford.edu/entries/decision-theory-descriptive/fig2c.svg)

(b)

![circle with P3 with a line labeled '11' to '1M' and a line labeled '89' to '0''](https://plato.stanford.edu/entries/decision-theory-descriptive/fig2b.svg)

 （c）

![circle with P4 with a line labeled '1' to '5M' and a line labeled '9' to '0''](https://plato.stanford.edu/entries/decision-theory-descriptive/fig2d.svg)

 （d）

 图 2

他声称，对于大部分代理人来说，我们会发现 P1≻P2 和 P4≻P3（称之为“奥莱偏好”）。然而，在以下假设的基础上，即（i）主体的信念程度与给定的客观概率一致，以及（ii）结果可以完全用财富水平的变化来描述，这种偏好组合与独立性相悖。更具体地说，它与原则的特殊情况相悖，根据该原则，在一对混合物中用一个共同的“后果”，即彩票，替代不会改变偏好顺序：

共同后果 对于所有的行为 f，g，h，h'和λ∈（0,1]：

λPf+(1−λ)Ph⪰λPg+(1−λ)Ph 当且仅当 λPf+(1−λ)Ph′⪰λPg+(1−λ)Ph′。

要了解原因，让λ=0.11，Q1（P1 和 P2 共同的“结果”）是一个彩票，以 10/11 的概率获得  5M，以 100%的概率获得  0。P1 实际上是 Q1 和 Q1 的λ混合物，P2 是 Q2 和 Q1 的混合物，P3 是 Q1 和 Q3 的混合物，P4 是 Q2 和 Q3 的混合物。这可能最好通过考虑表示相应复合彩票的决策树来理解：

![circle with P1 with a line labeled '11' to a circle with Q1 which has a line labeled '1' to '1M' Another line from P1 labeled '1' goes to a circle also with Q1 which has a line labeled '1' to '1M'](https://plato.stanford.edu/entries/decision-theory-descriptive/fig3a.svg)

 （a）

![circle with P2 with a line labeled '11' to a circle with Q2 which has a line labeled '10/11' to '5M' and a line labeled '1/11' to '0' A second line from P1 labeled '89' goes to a circle with Q1 which has a line labeled '1' to '1M' ''](https://plato.stanford.edu/entries/decision-theory-descriptive/fig3c.svg)

 （b）

![circle with P3 with a line labeled '11' to a circle with Q1 which has a line labeled '1' to '1M' Another line from P1 labeled '1' goes to a circle with Q3 which has a line labeled '1' to '0'](https://plato.stanford.edu/entries/decision-theory-descriptive/fig3b.svg)

 （c）

![circle with P4 with a line labeled '11' to a circle with Q2 which has a line labeled '10/11' to '5M' and a line labeled '1/11' to '0' A second line from P1 labeled '89' goes to a circle with Q3 which has a line labeled '1' to '0' ''](https://plato.stanford.edu/entries/decision-theory-descriptive/fig3d.svg)

 （d）

 图 3

这样，根据常见的结果，P1⪰P2 当且仅当 P3⪰P4。[4]

概率三角形为说明 Allais 偏好与 SEU 的不兼容性提供了有益的示例。实际上，连接 P1 和 P2 的线段与连接 P3 和 P4 的线段是平行的，因此，一个欧盟最大化者，其无差别曲线也是平行的，将无法展示模态偏好，因为没有一对无差别曲线能够满足要求，即一条从下方穿过[P1,P2]线段，而另一条从上方穿过[P3,P4]线段：

![Similar to figure 1 except no diagonal lines and the vertical side is labeled 'Px1' and the horizontal 'Px3' In addition a short vertical segment starts at the right angle vertice and is labeled 'P1' at the bottom and 'P2' at the top Another short vertical segment that seems to be the same length is on the right connecting the horizontal line of the triangle to its hypotenuse; it is labeled 'P3' on the bottom and 'P4' on the top](https://plato.stanford.edu/entries/decision-theory-descriptive/fig4.svg)

 图 4

除了上述已被称为常见后果问题的问题外，还有一个进一步的问题，即常见比率问题，由阿莱（Allais）（1953a：529-530）提出。这次的困难涉及到独立性的另一个后果，它告诉我们，在共同组分彩票发生变化的情况下，两个具有相同权重的混合物之间的偏好顺序不受混合物权重的改变影响：

对于所有的行为 f,g,h 和 λ,γ∈(0,1]：

λPf+(1−λ)Ph⪰λPg+(1−λ)Ph 当且仅当 γPf+(1−γ)Ph⪰γPg+(1−γ)Ph。

这里不会给出相关选项对的演示。请注意，这里再次出现的问题选择涉及两对选项，其在概率三角形中的相应部分是平行的。[5]

20 世纪 60 年代和 70 年代进行的一些实验研究随后证实了 Allais 发现的效应的稳健性。例如，Slovic＆Tversky（1974）报告称，在他们对共同后果问题的调查中，29 个受试者中有 17 个（59％）表现出 Allais 偏好。有关此早期工作的有用摘要以及他们自己的进一步数据，请参阅 MacCrimmon＆Larson（1979）。

自 20 世纪 70 年代末以来，已经提出了相当多的 SEU 的推广，以适应问题偏好模式。以下小节提供了对这些推广的简要概述。

### 2.2 理论回应

#### 2.2.1 概率复杂性

对于 Allais 类型现象的大部分回应涉及到对 SEU 的概括，这些概括足够保守，以保持 Machina＆Schmeidler（1992）所称的“概率复杂性”的要求：即对行为的偏好归结为对彩票的偏好，并且这些彩票遵守混合弱序、混合连续性和随机优势，如果不是独立性。[6] Machina＆Schmeidler 提供了对概率复杂性偏好的公理化描述，放弃了 Savage 的 Sure-Thing 条件，这在推导独立性时起到了关键作用，并保留了其余条件。然而，由于 Sure-Thing 原则在确保一组事件上存在适当的概率分布方面也起着重要作用，他们将弱比较概率条件加强为以下条件：

对于所有的结果 x1，x2，x3，x4，行为 f，g 和不相交的事件 A，B：如果 x1≻x2 且 x3≻x4，则当且仅当 x3Ax4Bg⪰x4Ax3Bg 时，x1Ax2Bf⪰x2Ax1Bf。

其中 x1Ax2Bf 表示对于所有的 s∈A，产生结果 x1，对于所有的 s∈B，产生结果 x2，并且对于其他所有的 s，产生 f(s)的行为。然后，他们提供了一个相应修改的主观定性概率和偏好关系之间的对应关系的解释，提出如果 x1≻x2，则 A⊵B 当且仅当 x1Ax2Bf⪰x2Ax1Bf。

#### 2.2.2 具有介于性质的模型

在不满足独立性和更具体地不强制施加等效曲线平行性属性的概率复杂偏好模型中，仍然有一些满足较弱的线性原则，即：

在所有行为 f 和 g 以及 λ∈[0,1] 的情况下：如果 Pf∼Pg，则 Pf∼λPf+(1−λ)Pg。

这特别适用于加权效用 (Weighted Utility, WU) (Chew & MacCrimmon 1979; Chew 1983)，它建议将期望效用公式中的每个加数乘以相应的权重，以便通过更一般的函数表示对抽签的偏好。

U(f)=n∑i=1Pf(xi)u(xi)(w(xi)/n∑i=1w(xi)Pf(xi))

其中 w 是 X 上的一个正实值函数。如果 w 是常数，就得到了 EU 函数。通过引入权重，可以容纳 Allais 偏好，允许等效曲线从概率三角形的西南象限“扇出”。随着向西北方向移动，即向越来越受欢迎的彩票方向移动，这些曲线变得更陡，因此代表了更高程度的风险规避。适当放置的交点允许等效曲线从下方穿过 [P1,P2]，从上方穿过 [P3,P4]，如所需。[7]

#### 2.2.3 没有 Betweenness 的模型

有相当多的证据表明，无差异曲线的线性性并不比它们的平行性更具有实证充分性（参见 Camerer＆Ho 1994 的调查），而一些概率复杂的偏好模型也放弃了 Betweenness。其中最著名的无疑是 Rank Dependent Utility（RDU），其版本最早由 Quiggin（1982）提出。为了以函数形式呈现该提议，假设与 X 中的每个结果相关联的下标表示偏好的递增顺序，即 x1⪯x2⪯…⪯xn，因此 n⋃j=iEfj 是给定 f 的事件，该事件产生的结果至少与 xi 一样好。RDU 提出：

U(f)=u(x1)+n∑i=2(u(xi)−u(xi−1))w(P(n⋃j=iEfj))

其中 w：[0,1]↦[0,1]是一个严格递增的概率加权函数，使得 w(0)=0 且 w(1)=1。换句话说：一个彩票的效用等于各结果的边际效用贡献之和，每个边际效用贡献乘以获得至少与之一样好的结果的加权概率（x1 的边际贡献是 u(x1)，其关联的乘数是 w(P({S}))=w(1)=1）。如果 w 是恒等函数，即 w∘P=P，那么可以恢复到期望效用函数。如果不是，适当选择 w 可以恢复到 Allais 偏好。为了看到这一点，假设简单起见 u(0)=0。那么有 P1≻P2 当且仅当

u(1)w(1)>u(1)w(0.99)+(u(5)−u(1))w(0.1)

并且当且仅当 u(5)w(0.1)>u(1)w(0.11)时，P4≻P3。这意味着通过使 w 满足 w(1)−w(0.99)>w(0.11)−w(0.1)，可以恢复偏好，使得在概率尺度的较高端，0.01 的概率差异比在相对较低端产生更大的影响。[9]

需要注意的是，RDU 本身是也许是最为人所知的 SEU 的替代方案之一，即 Kahneman 和 Tversky 的累积前景理论（Tversky＆Kahneman 1992），这使得 Kahneman 在 2002 年获得了诺贝尔经济学奖。该模型通过引入一个参考点来推广 RDU，该参考点将结果集划分为正面和负面子集，根据这些子集是否严格优先于或严格不优于参考点。然后，偏好函数中涉及两个概率转换函数 w+和 w−：w+用于确定负面结果的效用贡献，w−则在与正面结果的关系中发挥类似的作用。当 w+是 w+的对偶时，就恢复了 RDU。

虽然 RDU 不满足独立性，但它满足这个原则的一种弱化形式，称为“序数独立性”（Green＆Jullien 1988）。该原则被表述为对应于各种彩票的累积分布函数（cdf）的约束条件，对于每个 xi，返回获得不比 xi 更好的结果（即，具有 j≤i 的结果 xj）的概率。与 Pf 对应的 cdf 将用 F 表示。然后我们有

对于所有的行为 f，f′，g 和 g′，以及 X 的子集 A：如果 Pf⪰Pg，并且

1. 对于所有的 x∈A，F(x)=G(x) 和 F′(x)=G′(x)
2. 对于所有的 x∉A，有 F(x)=F′(x)和 G′(x)=G′(x)

 那么 Pf′⪰Pg′。[10]

这个约束可以更有帮助地表述为：在比较两个行为时，忽略它们在它们所同意的结果集上的累积分布函数的值。很容易验证 Allais 偏好与这个原则一致。在给定概率认知的情况下，序数独立性本身可以从对行为的偏好的约束中推导出来，这个约束被称为“共单调独立性”，在下面的 3.2.1 小节中介绍。Wakker (2010)提供了关于 RDU 和累积概率理论的教科书介绍，以及关于下一节讨论的问题的相关处理方法。

## 3. 概率信念的问题

### 3.1 艾尔斯伯格的三色悖论

在对 SEU 提出另一个经典挑战中，艾尔斯伯格（1961）要求被试者考虑一个情景，其中一个罐子中含有 30 个红球和 60 个黑球或黄球，但未知相对比例，并报告他们在从罐子中随机抽取一个球的颜色上的各种赌注之间的偏好。所引发的偏好是在一方面 f1 和 g1 之间，另一方面 f2 和 g2 之间的偏好。

| | 30 个球⏞ | 60 个球⏞ | | --- | --- | --- | --- | | | 红 | 蓝 | 黄 | | f1 |  0 |  0 |  0 | | f2 |  0 |  0 |  100 |

Ellsberg 报告称，大多数受试者表现出 f1≻g1 的偏好，但 g2≻f2，这是一种被称为模糊规避的现象：相对于未知（“模糊”）概率的事件，更倾向于下注已知概率的事件。

如果承认结果仅以财富水平的变化来充分描述，这些“Ellsberg 偏好”与 Savage 的 Sure-Thing 原则直接矛盾。这些偏好也违反了 Machina＆Schmeidler 的强比较概率原则，自然假设受试者严格偏好结果  0。事实上，很容易看出 Ellsberg 偏好与概率的复杂性不一致。更具体地说，它们与决策者对行为的偏好能否归结为对相应结果的彩票的偏好不一致，这些彩票由对事件集合分配的主观概率生成，并且他或她通过一阶随机优势对这些彩票进行部分排序。为了看到为什么，假设这些条件成立。首先注意，如果且仅如果 P（{b}）≥P（{r}），则 Pg1 将随机优于 Pf1，并且如果且仅如果 P（{r}）≥P（{b}），则 Pf2 将随机优于 Pg2。 f1≻g1 将导致 Pg1 不随机优于 Pf1，因此 P（{r}）>P（{b}）。但是 g2≻f2 将导致 Pf2 不随机优于 Pg2，因此 P（{b}）>P（{r}）。矛盾。

相当多的实证证据已经证实了 Ellsberg 的非正式观察和相关现象（从 Becker＆Brownson 1964 开始，包括经典研究，如 Slovic＆Tversky 1974 和 MacCrimmon＆Larsson 1979；有关更多详细信息，请参阅经典的 Camerer＆Weber 1992，以及更为更新的 Trautmann＆van de Kuilen 2015），现在的文献中包含了大量可以适应这些现象的 SEU 的概括。

### 3.2 理论回应

#### 3.2.1 非加性“概率”

一个能够适应 Ellsberg 案例的 SEU 的一个显著削弱是 Choquet 期望效用(CEU)，最初由 Schmeidler(1989)提出。其对偏好的表示中的关键概念是容量：一个函数 v:E↦[0,1]，使得 v(∅)=0，v(S)=1，并且对于所有的 A,B∈E，如果 A⊆B，则 v(A)≤v(B)。可以将其视为一种非加性的“概率”函数，因为加性性质，即对于不相交的事件 A 和 B，v(A∪B)=v(A)+v(B)不成立。与 RDU 的表示方式类似，这里的约定是与结果相关的指数表示偏好的增加，因此，n⋃j=iEfj 是给定 f 的事件，其中 f 产生的结果至少与 xi 一样好。CEU 提出：

U(f)=u(x1)+n∑i=2(u(xi)−u(xi−1))v(n⋃j=iEfj)

根据这个建议，一个行为的价值是由结果的边际效用贡献之和来衡量的，每个结果的边际效用贡献乘以给定该行为会产生至少与之一样好的结果的事件的容量。这里与 RDU 存在明显的形式上的相似之处，实际上，后者可以看作是 CEU 的特殊情况，其中决策者的容量是通过概率加权函数(v=w∘P)从其概率信念中导出的[11]。

返回到三色问题中的 Ellsberg 偏好，很容易看出 f1≻g1 当且仅当 v({r})>v({b})，且 g2≻f2 当且仅当 v({b,y})>v({r,y})。显然，这些不等式在特殊情况下无法同时满足，即 c 是可加的情况下，CEU 就等于 SEU。在更一般的情况下，没有问题：例如，让 v 满足：

v({r})=v({r,y})=v({b,y})=1/3v({b})=v({y})=0v({b,y})=2/3。

Gilboa（1987）和 Wakker（1989）都在 Savage 框架中提供了该提议的公理化。这些的关键区别特征是将 Savage 的 Sure-Thing 原则有效地限制在特定类型的行为集合上：

共同单调的确定性对于所有的行为 f，g，h，h'和任何事件 A：如果 fAh，gAh，fAh'和 fAh'是共同单调的，则 fAh⪰gAh 当且仅当 fAh'⪰gAh'。

当且仅当不存在两个状态 s1 和 s2，使得 f(s1)≻f(s2)但 g(s2)≻g(s1)，或者当且仅当 f 和 g 通过所关联的后果的可取性产生状态的排序是一致的（Chew＆Wakker 1996），则两个行为 f 和 g 是共同单调的。显然，Ellsberg 偏好与这种 Sure-Thing 原则的削弱完全兼容，因为涉及的行为不是共同单调的。例如，f1(r)≻f1(b)但 f2(b)≻f2(r)。[12]

#### 3.2.2 多个先验

上面用来说明 CEU 与 Ellsberg 风格偏好一致性的容量具有一个值得注意的特性：它是凸的，意味着对于所有的 A，B∈E，

v(A∪B)+v(A∩B)≥v(A)+v(B)。

Schmeidler（1986）已经证明，如果强制要求容量的凸性，CEU 就成为一种被称为最小最大期望效用（MEU）的方法的特例（Gilboa＆Schmeidler 1989），该方法将决策者表示为在 X 上的一组非空概率函数Γ中最大化最小期望效用：

U(f)=infP∈Γ(n∑i=1P(Efi)u(xi))

特定的连接如下：对于一个凸容量 v，关于它的 CEU 最大化者是一个所谓的核心的 EU 最大化者，核心定义为对于每个事件，概率函数分配的概率至少与 v 分配给该事件的容量一样大：{P∈P:P(A)≥v(A),∀A∈E}。

现在，Γ的一个常见但不是强制的解释是，它对应于决策者认为与他或她的证据一致的客观概率分配的集合。鉴于刚刚提到的结果，这反过来促使了容量作为客观概率的下限估计的解释。更具体地说，一个容量是凸的 CEU 最大化者可以被解释为仅考虑与该容量给出的下限估计一致的客观概率分配。在手头的特定示例中，对于决策者对{r}和{b,y}的概率的估计，1/3 和 2/3 构成了合理的下限。

如果以这种方式解释Γ，将凸容量与 CEU 相结合以获得 MEU 成为一个有吸引力的选择，因为它不仅可以模拟 Ellsberg 偏好，还可以适应那些对客观概率的看法不能简单地用较低估计来捕捉的决策者的偏好（例如，涉及对概率比率的某些事实的承诺）。由于空间限制，这里省略了 MEU 的公理化处理的细节。[13]

然而，MEU 仍然相当限制性，因为它强制实施了一种相当激进的模糊规避形式。模型的一个流行的推广，α−MEU（Ghirardato 等人，2004），提出 MEU 所施加的偏好仅位于可能的模糊规避谱系的一端，由以下对（5）的削弱所捕捉：

U(f)=αinfP∈Γ(n∑i=1P(Efi)u(xi))+(1−α)supP∈Γ(n∑i=1P(Efi)u(xi))

其中α∈[0,1]。当α=1 时，我们得到高度厌恶歧义的 MEU。当α=0 时，我们有强烈喜爱歧义的偏好。因此，参数α在某种程度上可解释为歧义厌恶的度量。[14],[15]

然而，与 MEU 一样，α-MEU 将其注意力限制在极端预期效用上（在这种情况下是最好和最坏情况）。一类流行的提议允许将Γ中的全范围预期效用纳入考虑，通过在多重先验模型中补充一个高阶概率分布μ。一个众所周知的函数形式，特别出现在 Klibanoff 等人的“平滑模型”（2005）中，涉及到相对于μ的加权预期效用相对于Γ的成员的期望：

U(f)=∑P∈Γμ(P)Φ(n∑i=1P(Efi)u(xi))

凹Φ将会使得低预期效用被过重考虑，从而导致相对于模糊厌恶的偏好。

## 4. 弱序问题

### 4.1 传递性

尽管上述所有模型都对偏好施加了传递性，但长期以来一直有人研究违反这一原则的可能性，无论是在确定性选择还是在风险选择方面。关于后者，在经典的早期研究中，Tversky（1969）提出了对严格偏好的传递性的显著系统违反，这是由弱偏好的传递性所蕴含的，与一系列彩票 P1-P5 相关，每个彩票都提供了获得奖品 xi 的机会 pi 和获得空手而归的补充机会：

|    | pi    | xi    |
| ---- | ------- | ------- |
| P1 | 7/24  | $5    |
| P2 | 8/24  | $4.75 |
| P3 | 9/24  | $4.5  |
| P4 | 10/24 | $4.25 |
| P5 | 11/24 | $4    |

Tversky 认为，有很多受试者倾向于对每个彩票都有严格的偏好，但对第一个彩票有严格的偏好而对最后一个彩票没有。他提出，这些受试者仅根据回报来排列相邻的彩票，因为中奖概率的差异几乎不可察觉，但在比较 P1 和 P5 时，会考虑中奖概率，因为差值很大。尽管后来有人复制了 Tversky 的结果，但应注意，关于不传递性偏好的经验支持水平仍存在争议（有关最新文献综述，请参阅 Regenwetter 等人的 2011 年文章）。

Loomes 和 Sugden 的（1982 年，1987 年）遗憾理论也预测了一种稍有不同的不传递性。这个提议背后的主要思想是，在给定状态下，对于给定结果的欣赏是一种基本上比较的问题。它由与这样一种想法相关的遗憾（或喜悦）决定，即在同样的情况下，可替代的行为会导致一组特定的替代结果。在二元选择的特殊情况下，这种直觉转化为以下依赖于菜单的偏好函数：

U{f,g}(f)=∑s∈SP({s})M(f(s),g(s))

其中 M:X×X↦R 是一个在第一个参数上递增且在第二个参数上非递减的比较效用函数。在他们对框架的讨论中，Loomes 和 Sugden 等价地提出了以下观点：

f⪰g 当且仅当∑s∈SP({s})Ψ(f(s),g(s))≥0

其中Ψ(f(s),g(s))被定义为 M(f(s),g(s))−M(g(s),f(s))。这个数量因此对应于在状态 s 中选择 f 而不是 g 所带来的后悔/喜悦的净平衡。根据Ψ的属性，决策者可以被描述为“后悔中立”，“后悔回避”甚至“寻求后悔”。后悔中立对应于对于所有的 x1,x2,x3∈X，

Ψ(x1,x3)=Ψ(x1,x2)+Ψ(x2,x3).

在这些条件下，选择行为与 SEU 一致。后悔厌恶对应于满足以下凸性要求的Ψ：对于 x1≻x2≻x3，

Ψ(x1,x3)>Ψ(x1,x2)+Ψ(x2,x3)。

Loomes＆Sugden（1982）已经表明，至少在涉及的彩票的概率独立性假设下，这种处置方式可以预测出共同结果和共同比例效应：遗憾理论并不意味着独立性。[17]

为了对遗憾理论预测的传递性违规有所了解，这里是一个由 Loomes＆Sugden 1987 提出的例子。假设Ψ是凸函数，并考虑以下决策问题，其中 x1≺x2≺x3，且 P（Ai）=1/3：

|      | A1   | A2       | A3                          |
| ------ | ------ | ---------- | ----------------------------- |
| f    | 开始 | 翻译     | 结果                        |
| 源   | 翻译 | 翻译     | 开始                        |
| 翻译 | x2   | 开始翻译 | 根据遗憾理论，f≻g 当且仅当 |

According to Regret Theory, f≻g iff

Ψ（x1，x3）+Ψ（x2，x1）+Ψ（x3，x2）>0。

Ψ的凸性将确保这个不等式成立。通过类似的推理，可以进一步确定 g≻h 和 h≻f。[18]

上述例子还清楚地表明，遗憾理论允许违反状态中立性，因为不同的行为产生相同的结果概率分布。Loomes＆Sugden（1987）进一步证明了他们的模型允许违反随机优势。然而，尽管存在这些偏离正统的情况，但应注意的是，遗憾理论保留了 SEU 的许多其他强大结果，包括确定性原则以及对于概率独立分布的 Betweenness。Sugden 1993 提供了一个关于有限菜单的广义（8）的公理化描述。请参阅 Bleichrodt＆Wakker 2015，了解该框架及其与实验数据的关系的清晰概述。

### 4.2 完备性

尽管这个问题在对 SEU 的经验挑战的目录中排在最后，但早期对完备性假设的经验充分性的怀疑是由该框架的设计者之一，包括冯·诺伊曼和莫根斯特恩（1947 年：630）和萨维奇（1954 年：21）提出的。例如，冯·诺伊曼和莫根斯特恩写道：

> 这个理想化现实的假设是否是有效的，是否合适甚至方便，都是非常可疑的。

完备性的失败被认为源于两个方面：(i) 对比概率的判断不完备，或者(ii) 对结果之间的偏好不完备。这两种不完备性可以在“多先验期望多效用”模型中处理，该模型提供了一种对行为偏好的“超估值”表示，如下所示：

对于所有的⟨P,u⟩∈Φ，f⪰g 当且仅当 n∑i=1P(Efi)u(xi)≥n∑i=1P(Egi)u(xi)

这里由于篇幅限制，略去了公理细节。有兴趣的读者可以参考 Galaabaatar 和 Karni（2013）最近的综述，他们将自己的结果与 Bewley（1986）、Seidenfeld 等人（1995）、Ok 等人（2012）和 Nau（2006）等人的重要早期工作联系起来。

## 5. 描述性与规范性决策理论

虽然人们很快意识到阿莱证明了 SEU 的一个经验缺陷，但重要的是要注意，他的野心有些超过了这个成就。他进一步提出，他的发现也给人们理由怀疑这个理论的规范充分性。在他看来，在评估一个理性选择理论时，可以提出两种考虑因素。第一种是证明该理论从各种具有安全认知地位的一般原则中演绎出来，或与之存在逻辑冲突。第二种是关于那些在其他方面有理由相信会理性行事的人的行为的实验证据。

> （Allais 1953b: 34）[19]

然而，他没有找到足够的第一类证据来支持像 SEU 这样强大的东西。例如，他拒绝了 Marschak（1951 年）关于风险情况下期望效用最大化的“长期成功”论证（Allais 1953b: 70–73）。他承认存在一个“一致性”要求，根据这个要求，一个人只有在追求相互一致的目标（即不矛盾的目标）并采用适合这些目标的手段时才被认为是理性的（Allais 1953b: 78）。

> 但是，他声称，这个要求只是要求对抽签的偏好进行弱排序并满足随机优势。这使得选择行为的数据能够裁决 SEU 的进一步承诺。在他看来，这些数据清楚地支持违反独立性的理性允许性。

But, this requirement, he claimed, simply entailed that preferences over lotteries be weakly ordered and satisfy Stochastic Dominance. This left data on choice behaviour to adjudicate on the further commitments of SEU. This data, in his view, clearly supported the rational permissibility of violating Independence.

Savage 并没有明确讨论他同行的集体偏好对 Allais 案例的证明力。然而，他确实评论了他自己个人偏好的影响，这些偏好 Allais 在 1952 年的巴黎研讨会上从他那里引出，并且这些偏好违反了 SEU 的建议。虽然承认他同时保持这些偏好和对他的公理的规范充分性的承诺是非理性的，但他报告说进一步的“反思”使他倾向于修正前者，认为这些偏好是错误的，与信念的逻辑不一致。他声称，这个事实使他有权保持他的规范承诺（参见 Savage 1952: 101–103）。由于很容易推测 Savage 认为他自己的倾向代表了整个人口的倾向，因此他的评论被广泛认为是对理性选择理论测试的一种隐含的替代实验途径（参见 Slovic＆Tversky 1974 和 Jallais＆Pradier 2005。这也是 Ellsberg 的观点，他在他 1961 年的博士论文第 1 章中提供了一个有价值的讨论，该论文重印为 Ellsberg 2001，Zappia 2016 提供了一个最近的以哲学为导向的讨论）。这个过程将涉及确定决策者是否在对冲突与该理论的基本公理的反思后仍然表现出这样的模式，而不是确定某些决策者是否展示了该理论禁止的偏好模式。

许多研究旨在按照提出的方法测试 SEU 的规范充分性。MacCrimmon（1968）在一组经验丰富的商业高管样本中报告了对 SEU 的广泛后果的违反，其中一些后来在被明显提供支持和削弱这些原则的考虑后仍然存在。然而，那些偏好后来被纠正的原则主要包括传递性和随机优势。然而，Allais 或 Ellsberg 风格的偏好更加坚定，这一事实在 Slovic＆Tversky（1974）的后续研究中得到了证实。然而，Savage 没有考虑到的另一种偏好的坚韧性最近由 van de Kuilen＆Wakker（2006）进行了研究。他们研究了在决策结果上提供反馈对选择序列中常见后果效应的普遍性的影响，然后发现 SEU 违规显著减少。

尽管长期以来一直有将理性选择理论应用于各种哲学问题的传统，但描述性决策理论对其规范对应物的潜在相关性的问题似乎并没有引起哲学界的兴趣。Allais 对 Savage 的挑战在哲学文献中基本上被忽视了。

说到这一点，已经有相当多的哲学关注于推理规范与观察到的推理模式之间的关系问题。在那里可以找到一条有影响力的思路，似乎与阿莱的主张相关，它源于古德曼对归纳推理的合理化讨论。在他的观点中，

> [t]制定规则来定义有效和无效的归纳推理之间的差异的任务，就像定义任何具有已建立用法的术语的任务一样。 （古德曼 1965 年：66）

正如语义分析可以基于提供关于特定情境中特定术语适用性的一组直觉的良好系统化而被认可一样，古德曼声称，推理的规范理论同样可以通过与“我们实际进行和认可的特定...推理”的良好契合来合理化（古德曼 1965 年：63）：不需要进一步的考虑就能够认可某个原则作为理性的约束。

Goodman 的讨论很简短，至少在我们的阅读中，还存在一些问题。我们是否应该承认除了观察到的推理模式之外的任何考虑因素，比如长期趋向真理的收敛性等等？当 Goodman 谈到“我们实际进行和认可的特定推理”时，“我们”指的是谁？专家？整个人类群体？我们是否应该将相关推理的类别限定为那些可能被称为“经过考虑的”判断？这些是需要解决的重要问题。事实上，对这些问题的某种组合的回答（即规范推理理论的合理性完全取决于它们能否系统化地表达在一般人群中观察到的“即时和未经教导的”推理倾向）曾经引起了 Cohen（1981）的关注，他支持了这样一个惊人的观点：由于规范和描述模型源自同一数据集，行为证据从原则上无法证明人类的非理性。关于这个一般主题的进一步讨论，请参见 Stich（1990：第 4 章），Stein（1996：第 5 章），Stanovich（1999：第 1 章）和 Thagard（1982）[23]。

虽然 Allais 和 Goodman 都没有提出这种联系，但对于实验数据在规范理论建立中的证据相关性可能的合理性可以在康多塞特陪审团定理和相关结果的文献中寻找[24]。该定理告诉我们，在某些条件下，关于一个特定问题的 n 个最小可靠人群在该问题上进行是/否投票的多数裁决的概率在 n 趋于无穷大时收敛于 1，个体可靠性越大，收敛速度越快。此外，即使个体可靠性非常有限，多数可靠性在相当小的群体规模下也能达到显著水平。当然，感兴趣的问题并不完全符合该特定模型：虽然 Allais 偏好的表达可以被认为是对独立性规范的规范充分性的“投票”反对，但与这一原则一致的偏好的表达几乎无法被解释为对其的支持。

最后，虽然本节重点讨论了描述性决策理论对其规范对应物的影响问题，但应注意到也有一些关于相反影响方向的讨论。Guala（2000）和 Starmer（2005）都认为，选择描述性理论的发展受到了保留一组被认为是规范充分的原则的偏见的指导。在决策风险下，这些原则基本上是弱序和随机优势的传递性组成部分，根据迄今为止已经发展的绝大多数非 SEU 理论，这些原则是满足的[25]。Starmer 声称在 Friedman 和 Savage（1952）的一篇著名论文中找到了支持这种做法的论据。这种思路，Starmer 对其提出了质疑，从假设真正的理性原则对大多数受试者来说是明显的，并且决策者将相应地按照这些原则行事。

## 6. 进一步阅读

尽管关于这个主题的哲学文献仍然相对稀少，但在经济学和心理学文献中有很多一流的总结。关于第 1 节中提到的技术结果的详细介绍，请参阅 Fishburn（1970：第 14 章）或稍微不太详细的 Kreps（1988：第 9 章）。Joyce（1999）的第 3 章在这里也很有帮助。关于特定的独立性文献，讨论在第 2 节中，参见 Machina（1987），Starmer（2000）和 Weber＆Camerer（1987）。关于特定的概率信念问题，讨论在第 3 节中，请参阅 Camerer＆Weber（1992），Etner 等（2012），Gilboa＆Marinacci（2013），Machina＆Siniscalchi（2014）和 Trautmann＆van de Kuilen（2015）。一些更广泛的调查涵盖了上述问题以及其他一些问题。其中最重要的是 Camerer（1995）和出色的 Sugden（2004）。最后，关于决策实验文献发展的清晰而详细的历史记录，请参阅 Heukelom（2014）。

<!--md-padding-ignore-begin-->
## Bibliography

* Allais, Maurice, 1953a, “Le Comportement de l’Homme Rationnel devant le Risque: Critique des Postulats et Axiomes de l’Ecole Américaine”, *Econometrica*, 21(4): 503–546. doi:10.2307/1907921
* –––, 1953b, “Fondements d’une Théorie Positive des Choix Comportant un Risque et Critique des Postulats et Axiomes de L’Ecole Américaine”, *Econométrie, Colloques Internationaux du CNRS*, XL: 257–332; page reference is to the translation titled “The Foundations of a Positive Theory of Choice Involving Risk and a Criticism of the Postulates and Axioms of the American School” in Allais & Hagen 1979: 27–145. doi:10.1007/978-94-015-7629-1_2
* Allais, Maurice and Ole Hagen (ed.), 1979, *Expected Utility Hypotheses and the Allais Paradox*, (Theory and Decision Library, 21), Dordrecht: Reidel. doi:10.1007/978-94-015-7629-1
* Anscombe, F.J., and R.J. Aumann, 1963, “A Definition of Subjective Probability”, *Annals of Mathematics and Statistics*, 34(1): 199–205. doi:10.1214/aoms/1177704255
* Anand, Paul, 2009, “Rationality and Intransitive Preference: Foundations for The Modern View”, in Anand, Pattanaik, & Puppe 2009: 156–172. doi:10.1093/acprof:oso/9780199290420.003.0007
* Anand, Paul, Prastanta K. Pattanaik, and Clemens Puppe (ed.), 2009, *The Handbook of Rational and Social Choice*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199290420.001.0001
* Becker, Selwyn W. and Fred O. Brownson, 1964, “What Price Ambiguity? Or the Role of Ambiguity in Decision-Making”, *Journal of Political Economy*, 72(1): 62–73. doi:10.1086/258854
* Becker, Joao L., and Rakesh K. Sarin, 1987, “Lottery Dependent Utility”, *Management Science*, 33(11): 1367–1382. doi:10.1287/mnsc.33.11.1367
* Bewley, Truman F., 1986, “Knightian Decision Theory: Part I”, Cowles Foundation discussion paper no. 807. Reprinted with minor changes, 2002, *Decisions in Economics and Finance*, 25(2): 79–110. doi:10.1007/s102030200006
* Bleichrodt, Han and Peter P. Wakker, 2015, “Regret Theory: A Bold Alternative to the Alternatives”, *Economic Journal*, 125(583): 493–532. doi:10.1111/ecoj.12200
* Broome, John, 1991, *Weighing Goods: Equality, Uncertainty, and Time*, Oxford: Basil Blackwell.
* Buchak, Lara, 2013, *Risk and Rationality*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199672165.001.0001
* Camerer, Colin F., 1989, “An Experimental Test of Several Generalized Utility Theories”, *Journal of Risk and Uncertainty*, 2(1): 61–104. doi:10.1007/BF00055711
* –––, 1995, “Individual Decision Making”, in John H. Kagel and Alvin E. Roth (ed.), *Handbook of Experimental Economics*, Princeton, NJ: Princeton University Press, pp. 587–703.
* Camerer, Colin F. and Teck-Hua Ho, 1994, “Violations of the Betweenness Axiom and Nonlinearity in Probability”, *Journal of Risk and Uncertainty*, 8(2): 167–96. doi:10.1007/BF01065371
* Camerer, Colin and Martin Weber, 1992, “Recent Developments in Modeling Preferences: Uncertainty and Ambiguity”, *Journal of Risk and Uncertainty*, 5(4): 325–370. doi:10.1007/BF00122575
* Chew Soo Hong, 1983, “A Generalization of the Quasilinear Mean with Applications to the Measurement of Income Inequality and Decision Theory Resolving the Allais Paradox”, *Econometrica*, 51(4): 1065–1092. doi:10.2307/1912052
* –––, 1989, “Axiomatic Utility Theories with the Betweenness Property”, *Annals of Operations Research*, 19(1): 273–298. doi:10.1007/BF02283525
* Chew Soo Hong, L.G. Epstein and U. Segal, 1991, “Mixture Symmetry and Quadratic Utility”, *Econometrica*, 59(1): 139–163. doi:10.2307/2938244
* Chew Soo Hong, and K. MacCrimmon, 1979, “Alpha-Nu Choice Theory: A Generalization of Expected Utility Theory”, Working Paper 669, University of British Columbia.
* Chew Soo Hong and Peter Wakker, 1996, “The Comonotonic Sure-Thing Principle”, *Journal of Risk and Uncertainty*, 12(1): 5–27. doi:10.1007/BF00353328
* Cohen, L. Jonathan, 1981, “Can Human Irrationality be Experimentally Demonstrated?”, *Behavioral and Brain Sciences*, 4(3): 317–370. doi:10.1017/S0140525X00009092
* de Finetti, Bruno, 1937, “La Prévision: Ses Lois Logiques, ses Sources Subjectives”, *Annales de l’Institut Henri Poincaré*, 7: 1–68.
* Ellsberg, Daniel, 1961, “Risk, Ambiguity, and the Savage Axioms”, *Quarterly Journal of Economics*, 75(4): 643–669. doi:10.2307/1884324
* –––, 2001, *Risk, Ambiguity, and Decision*, New York & London: Garland.
* Etner, Johanna, Megleria Jeleva, and Jean-Marc Tallon, 2012, “Decision Theory under Ambiguity”, *Journal of Economic Surveys*, 26(2): 234–270. doi:10.1111/j.1467-6419.2010.00641.x
* Fishburn, Peter C., 1970, *Utility Theory for Decision Making*, (Publications in Operations Research, No. 18), New York: John Wiley and Sons.
* –––, 1989, “Non-Transitive Measurable Utility for Decision under Uncertainty”, *Journal of Mathematical Economics*, 18(2): 187–207. doi:10.1016/0304-4068(89)90021-9
* Friedman, Milton and L.J. Savage, 1952, “The Expected-Utility Hypothesis and the Measurability of Utility”, *Journal of Political Economy*, 60(6): 463–474. doi:10.1086/257308
* Galaabaatar, Tsogbadral and Edi Karni, 2013, “Subjective Expected Utility with Incomplete Preferences”, *Econometrica*, 81(1): 255–284. doi:10.3982/ECTA9621
* Ghirardato, Paolo, Fabio Maccheroni, Massimo Marinacci, and Marciano Siniscalchi, 2003, “A Subjective Spin on Roulette Wheels”, *Econometrica*, 71(6): 1897–1908. doi:10.1111/1468-0262.00472
* Gilboa, Itzhak, 1987, “Expected Utility with Purely Subjective Non-Additive Probabilities”, *Journal of Mathematical Economics*, 16(1): 65–88. doi:10.1016/0304-4068(87)90022-X
* Gilboa, Itzhak and Massimo Marinacci, 2013, “Ambiguity and the Bayesian Paradigm”, in D. Acemoglu, M. Arellano, and E. Dekel (ed.), *Advances in Economics and Econometrics: Theory and Applications*, (Tenth World Congress of the Econometric Society), New York: Cambridge University Press.
* Gilboa, Itzhak and David Schmeidler, 1989, “Maxmin Expected Utility with a Non-Unique Prior”, *Journal of Mathematical Economics*, 18(2): 141–153. doi:10.1016/0304-4068(89)90018-9
* Goodman, Nelson, 1965, *Fact, Fiction and Forecast*, second edition, Indianapolis, IN: Bobbs-Merrill.
* Grant, Simon, 1995, “Subjective Probability without Monotonicity: Or How Machina’s Mom May also Be Probabilistically Sophisticated”, *Econometrica*, 63(1): 159 189. doi:10.2307/2951701
* Green, Jerry R. and Bruno Jullien, 1988, “Ordinal Independence in Nonlinear Utility Theory”, *Journal of Risk and Uncertainty*, 1(4): 355–387. doi:10.1007/BF00117641
* Guala, Francesco, 2000, “The Logic of Normative Falsification: Rationality and Experiments in Decision Theory”, *Journal of Economic Methodology*, 7(1): 59–93. doi:10.1080/135017800362248
* Gul, Faruk, 1991, “A Theory of Disappointment Aversion”, *Econometrica*, 59(3): 667–686. doi:10.2307/2938223
* Hales, Steven D., 2006, *Relativism and the Foundations of Philosophy*, Cambridge, MA: MIT Press.
* Handa, Jagdish, 1977, “Risk, Probabilities and a New Theory of Cardinal Utility”, *Journal of Political Economy*, 85(1): 97–122. doi:10.1086/260547
* Harless, David W. and Colin F. Camerer, 1994, “The Predictive Utility of Generalized Expected Utility Theories”, *Econometrica*, 62(6): 1251–1289. doi:10.2307/2951749
* Heukelom, Floris, 2014, *Behavioral Economics: A History*, Cambridge: Cambridge University Press. doi:10.1017/CBO9781139600224
* Hey, John Denis, 2014, “Choice Under Uncertainty: Empirical Methods and Experimental Results”, in Machina & Viscusi 2014: 809–850.
* Hurwicz, Leonid, 1951, “Some Specification Problems and Applications to Econometric Models”, *Econometrica*, 19(3): 343–344.
* Jallais, Sophie and Pierre-Charles Pradier, 2005, “The Allais Paradox and its Immediate Consequences for Expected Utility Theory”, in Philippe Fontaine and Robert Leonard (ed.) *The Experiment in the History of Economics*, London: Routledge, pp. 25–49.
* Jallais, Sophie, Pierre-Charles Pradier, and David Teira, 2008, “Facts, Norms and Expected Utility Functions”, *History of the Human Sciences*, 21(2): 45–62. doi:10.1177/0952695108091414
* Joyce, James M., 1999, *The Foundations of Causal Decision Theory*, Cambridge: Cambridge University Press. doi:10.1017/CBO9780511498497
* –––, 2005, “How Probabilities Reflect Evidence”, *Philosophical Perspectives*, 19(1): 153–178. doi:10.1111/j.1520-8583.2005.00058.x
* Kahneman, Daniel and Amos Tversky, 1979, “Prospect Theory: An Analysis of Decision under Risk”, *Econometrica*, 47(2): 263–291. doi:10.2307/1914185
* Keynes, John Maynard, 1921, *A Treatise on Probability*, London: Macmillan.
* Klibanoff, Peter, Massimo Marinacci, and Sujoy Mukerji, 2005, “A Smooth Model of Decision Making Under Ambiguity”, *Econometrica*, 73(6): 1849–1892. doi:10.1111/j.1468-0262.2005.00640.x
* Kreps, David M., 1988, *Notes on the Theory of Choice*, Boulder, CO: Westview Press.
* List, Christian and Philip Pettit, 2011, *Group Agency: The Possibility, Design, and Status of Corporate Agents*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199591565.001.0001
* Loomes, Graham and Robert Sugden, 1982, “Regret Theory: An Alternative Theory of Rational Choice under Uncertainty”, *Economic Journal*, 92(386): 805–824. doi:10.2307/2232669
* –––, 1987, “Some implications of a More General Form of Regret Theory”, *Journal of Economic Theory*, 41(2): 270–287. doi:10.1016/0022-0531(87)90020-2
* Luce, R. Duncan and Howard Raiffa, 1957, *Games and Decisions: Introduction and Critical Survey*, New York: Wiley.
* Machina, Mark J., 1987, “Choice under Uncertainty: Problems Solved and Unsolved”, *Journal of Economic Perspectives*, 1(1): 121–154. doi:10.1257/jep.1.1.121
* Machina, Mark J. and David Schmeidler, 1992, “A more Robust Definition of Subjective Probability”, *Econometrica*, 60(4): 745–780. doi:10.2307/2951565
* Machina, Mark J., and Marciano Siniscalchi, 2014, “Ambiguity and Ambiguity Aversion”, in Machina & Viscus 2014i 2014: 729–807.
* Machina, Mark J. and Kip Viscusi (ed.), 2014, *Handbook of the Economics of Risk and Uncertainty*, Volume 1, Amsterdam: Elsevier.
* MacCrimmon, Kenneth R., 1968, “Descriptive and Normative Implications of the Decision-Theory Postulates”, in K. Borch and J. Mossin (ed.), *Risk and Uncertainty*, New York: St. Martins Press, pp. 3–32.
* MacCrimmon, Kenneth R. and Stig Larsson, 1979, “Utility Theory: Axioms versus ‘Paradoxes’”, in Allais & Hagen 1979: 333–409. doi:10.1007/978-94-015-7629-1_15
* Maher, Patrick, 1993, *Betting on Theories*, Cambridge: Cambridge University Press.
* Marschak, Jacob, 1951, “Why ‘Should’ Statisticians and Businessmen Maximize ‘Moral Expectation’”, *Proceedings of the Second Berkeley Symposium on Mathematical Statistics and Probability*, Berkeley: University of California Press, pp. 493–506.
* May, Kenneth O., 1954, “Intransitivity, Utility, and the Aggregation of Preference Patterns”, *Econometrica*, 22(1): 1–13. doi:10.2307/1909827
* McClennen, Edward F., 2009, “The Normative Status of the Independence Principle”, in Anand, Pattanaik, & Puppe 2009: 140–155. doi:10.1093/acprof:oso/9780199290420.003.0006
* Mongin, Philippe, 2009, “Duhemian Themes in Expected Utility Theory”, Anastasios Brenner & Jean Gayon (eds), *French Studies In The Philosophy Of Science*, (Boston Studies In The Philosophy Of Science, 276), Springer, pp. 303–357. doi:10.1007/978-1-4020-9368-5_13
* –––, 2014, “Le Paradoxe d’Allais. Comment Lui Rendre sa Signification Perdue?”, *Revue Économique*, 65(5): 743–779.
* Morgenstern, Oskar, 1979, “Some Reflections on Utility”, in Allais & Hagen 1979: 175–184. doi:10.1007/978-94-015-7629-1_6
* Nau, Robert, 2006, “The Shape of Incomplete Preferences”, *Annals of Statistics*, 34: 2430–2448. doi:10.1214/009053606000000740
* Ok, Efe A., Pietro Ortoleva, and Gil Riella, 2012, “Incomplete Preferences under Uncertainty: Indecisiveness in Beliefs versus Tastes”, *Econometrica*, 80(4): 1791–1808. doi:10.3982/ECTA8040
* Quiggin, John, 1982, “A Theory of Anticipated Utility”, *Journal of Economic Behavior and Organization*, 3(4): 323–343. doi:10.1016/0167-2681(82)90008-7
* –––, 1992, *Generalized Expected Utility Theory: The Rank Dependent Model*, Dordrecht: Kluwer.
* Ramsey, Frank P., 1931, “Truth and Probability”, in R.B. Braithwaite (ed.) *The Foundations of Mathematics and other Logical Essays*, New York: Harcourt and Brace, pp. 156–198.
* Regenwetter, Michel, Jason Dana, and Clinton P. Davis-Stober, 2011, “Transitivity of Preferences”, *Psychological Review*, 118(1): 42–56. doi:10.1037/a0021150
* Savage, Leonard J., 1954, *The Foundations of Statistics*, New York: Wiley, Second Edition.
* Schmeidler, David, 1986, “Integral Representation without Additivity”, *Proceedings of the American Mathematical Society*, 97(2): 255–261.
* –––, 1989, “Subjective Probability and Expected Utility without Additivity”, *Econometrica*, 57(3): 571–587. doi:10.2307/1911053
* Seidenfeld, Teddy, Mark J. Schervish, and Joseph B. Kadane, 1995, “A Representation of Partially Ordered Preferences”, *Annals of Statistics*, 23(6): 2168–2217. doi:10.1214/aos/1034713653
* Slovic, Paul and Amos Tversky, 1974, “Who Accepts Savage’s Axiom?”, *Systems Research and Behavioral Science*, 19(6): 368–373. doi:10.1002/bs.3830190603
* Stanovich, Keith E., 1999, *Who Is Rational? Studies of Individual Differences in Reasoning*, Mahwah, NJ: Lawrence Erlbaum Associates.
* Starmer, Chris, 2000, “Developments in Non-Expected Utility Theory: The Hunt for a Descriptive Theory of Choice under Risk”, *Journal of Economic Literature*, 38(2): 332–382. doi:10.1257/jel.38.2.332
* –––, 2005, “Normative Notions in Descriptive Dialogues”, *Journal of Economic Methodology*, 12(2): 277–289. doi:10.1080/13501780500086206
* Stein, Edward, 1996, *Without Good Reason: The Rationality Debate in Philosophy and Cognitive Science*, Oxford: Clarendon Press.
* Stich, Stephen P., 1990, *The Fragmentation of Reason*, Cambridge, MA: MIT Press.
* Sugden, Robert, 1993, “An Axiomatic Foundation For Regret Theory”, *Journal of Economic Theory*, 60(1): 159–180. doi:10.1006/jeth.1993.1039
* –––, 2004, “Alternatives to Expected Utility: Foundations”, in Salvador Barberà, Peter J. Hammond, and Christian Seidl (ed.), *Handbook of Utility Theory: Volume 2 Extensions*, Boston, MA: Springer, pp. 685–755.
* Sytsma, Justin and Jonathan Livengood, 2014, *The Theory and Practice of Experimental Philosophy*, Peterborough, ON: Broadview Press.
* Talbot, Brian, 2014, “Why so Negative? Evidence Aggregation and Armchair Philosophy”, *Synthèse*, 191(16): 3865–3896. doi:10.1007/s11229-014-0509-z
* Thagard, Paul, 1982, “From the Descriptive to the Normative in Psychology and Logic”, *Philosophy of Science*, 49(1): 24–42. doi:10.1086/289032
* Trautmann, Stefan T., and Gijs van de Kuilen, 2015, “Ambiguity Attitudes”, in Gideon Keren & George Wu (ed.), *The Wiley Blackwell Handbook of Judgment and Decision Making*, Oxford: Blackwell, 89–116.
* Tversky, Amos, 1969, “Intransitivity of Preferences”, *Psychological Review*, 76(1): 31–48. doi:10.1037/h0026750
* Tversky, Amos and Daniel Kahneman, 1986, “Rational Choice and the Framing of Decisions”, *The Journal of Business*, 59(4): 251–278.
* –––, 1992, “Advances in Prospect Theory: Cumulative Representation of Uncertainty”, *Journal of Risk and Uncertainty*, 5(4): 297–323. doi:10.1007/BF00122574
* van de Kuilen, Gijs and Peter P. Wakker, 2006, “Learning in the Allais Paradox”, *Journal of Risk and Uncertainty*, 33(3): 155–164. doi:10.1007/s11166-006-0390-3
* van Fraassen, Bas C., 1989, *Laws and Symmetry*, Oxford: Oxford University Press. doi:10.1093/0198248601.001.0001
* von Neumann, John and Oskar Morgenstern, 1947, *Theory of Games and Economic Behavior*, second edition, Princeton: Princeton University Press.
* Wald, Abraham, 1950, *Statistical Decision Functions*. New York: John Wiley and Sons.
* Wakker, Peter P., 1989, “Continuous Subjective Expected Utility with Nonadditive Probabilities”, *Journal of Mathematical Economics*, 18(1): 1–27. doi:10.1016/0304-4068(89)90002-5
* –––, 2010, *Prospect Theory: For Risk and Ambiguity*, Cambridge: Cambridge University Press.
* Wakker, Peter P. and Amos Tversky, 1993, “An Axiomatization of Cumulative Prospect Theory”, *Journal of Risk and Uncertainty*, 7(2): 147–175. doi:10.1007/BF01065812
* Weber, Michael, 1998, “The Resilience of the Allais Paradox”, *Ethics*, 109(1): 94–118. doi:10.1086/233875
* Weber, Michael and Colin F. Camerer, 1987, “Recent Developments in Modelling Preferences under Risk”, *OR Spektrum*, 9(3): 129–151. doi:10.1007/BF01721094
* Weirich, Paul, 1986, “Expected Utility and Risk”, *British Journal for the Philosophy of Science*, 37(4): 419–442. doi:10.1093/bjps/37.4.419
* Zappia, Carlo, 2016, “Daniel Ellsberg and the Validation of Normative Propositions”, *Oeconomia*, 6(1): 57–79. doi:10.4000/oeconomia.2276

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=decision-theory-descriptive). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/decision-theory-descriptive/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=decision-theory-descriptive&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](http://philpapers.org/sep/decision-theory-descriptive/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

* [Bibliography](https://personal.eur.nl/wakker/refs/webrfrncs.docx), Annotated, in Word, by Peter Wakker; a useful resources that starts with a list of keywords and abbreviations, but consists mostly of an annotated list of references with links to the paper when available.
* [Decision Theory Forum](https://groups.google.com/forum/#!forum/decision_theory_forum), on Google Groups; includes regular posts from leading decision theorists, including conference annoucements and the like.

## Related Entries

[belief, formal representations of](https://plato.stanford.edu/entries/formal-belief/) | [decision theory](https://plato.stanford.edu/entries/decision-theory/) | [economics: philosophy of](https://plato.stanford.edu/entries/economics/) | [preferences](https://plato.stanford.edu/entries/preferences/) | [probabilities, imprecise](https://plato.stanford.edu/entries/imprecise-probabilities/) | [rational choice, normative: expected utility](https://plato.stanford.edu/entries/rationality-normative-utility/)

### Acknowledgments

I am extremely grateful to John Quiggin, Peter Wakker, Paul Weirich and Greg Wheeler for helpful comments on an earlier draft of this entry. Any remaining omissions, errors or inaccuracies remain, of course, my own responsibility.

[Copyright © 2017](https://plato.stanford.edu/info.html#c) by  
[Jake Chandler](http://www.jakechandler.net/) <[*jake.chandler@cantab.net*](mailto:jake%2echandler%40cantab%2enet)>
