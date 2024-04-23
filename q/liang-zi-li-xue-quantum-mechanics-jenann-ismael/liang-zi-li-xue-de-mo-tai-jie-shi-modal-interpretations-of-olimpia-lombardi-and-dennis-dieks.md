# 量子力学的模态解释 modal interpretations of (Olimpia Lombardi and Dennis Dieks)

*首次发表于2002年11月12日；实质性修订于2021年10月8日。*

非相对论量子理论的最初的“模态解释”诞生于 20 世纪 70 年代初，当时这个短语指的是一种单一的解释。现在这个短语包含了一类解释，并且最好理解为对量子理论解释的一般方法。我们将描述模态解释的历史，短语如何以这种方式被使用，以及那些支持这种方法的人的一般计划（至少是其中一部分）。

* [1. 模态方法的起源](https://plato.stanford.edu/entries/qm-modal/#OrigModaAppr)
* [2. 模态解释的一般特点](https://plato.stanford.edu/entries/qm-modal/#GeneFeatModaInte)
* [3. 与其他非坍缩解释的关系](https://plato.stanford.edu/entries/qm-modal/#RelaOtheNoncInte)
* [4. 双正交分解和谱分解模态解释](https://plato.stanford.edu/entries/qm-modal/#BiorDecoSpecDecoModaInte)
* [5. 属性组合和原子模态解释](https://plato.stanford.edu/entries/qm-modal/#PropCompAtomModaInte)
* [6. 属性的动力学](https://plato.stanford.edu/entries/qm-modal/#DynaProp)
* [7. 透视模态解释](https://plato.stanford.edu/entries/qm-modal/#PersModaInte)
* [8. 模态-哈密顿解释](https://plato.stanford.edu/entries/qm-modal/#ModaHamiInte)
* [9. 非理想测量](https://plato.stanford.edu/entries/qm-modal/#NoniMeas)
* [10. 相干性的作用](https://plato.stanford.edu/entries/qm-modal/#RoleDeco)
* [11. 重新审视测量问题：完备性和隐藏变量](https://plato.stanford.edu/entries/qm-modal/#MeasProbRevi)
* [12. 概率的解释](https://plato.stanford.edu/entries/qm-modal/#InteProb)
* [13. 未解决的问题和展望](https://plato.stanford.edu/entries/qm-modal/#OpenProbPers)
* [ 参考文献](https://plato.stanford.edu/entries/qm-modal/#Bib)
* [ 学术工具](https://plato.stanford.edu/entries/qm-modal/#Aca)
* [其他互联网资源](https://plato.stanford.edu/entries/qm-modal/#Oth)
* [ 相关条目](https://plato.stanford.edu/entries/qm-modal/#Rel)

---

## 1. 模态方法的起源

在传统的量子测量理论方法中，投影假设起着核心作用，它断言在测量过程中，物理系统的状态会发生不连续的变化：它会被投影（“坍缩”）到与测量结果相对应的本征态上。这个假设导致了许多困难：究竟何时发生坍缩？什么定义了“测量”与普通的物理相互作用的区别？当应用于空间上相互分离的纠缠复合系统时，这个假设尤其令人担忧。例如，在爱因斯坦-波多尔斯基-罗森（EPR）实验中，两个曾经相互作用的系统之间存在严格的相关性，尽管这些相关量在各个系统中并没有明确定义。在这种情况下，投影假设意味着对其中一个系统进行测量所导致的坍缩会立即在远处的另一个系统中定义一个明确的属性。（请参阅有关量子理论中哲学问题的条目中对坍缩或投影假设的讨论。）

解决这些问题的一种可能途径是由范弗拉森（1972 年，1974 年，1991 年）注意到的，他提议从理论中消除投影假设，并对剩余的幺正量子力学形式主义给予概率解释。范弗拉森的解释依赖于系统在任意时刻的“动力状态”和“值状态”之间的区别：

* 动力学状态决定可能发生的情况：系统可能具有的物理属性以及与这些可能性相关的概率。
* 值状态表示实际情况，即在所讨论的瞬间明确定义的系统的所有物理属性。

动力学状态是出现在薛定谔方程中的普通量子态（在非相对论量子力学中），即希尔伯特空间中的矢量或密度矩阵，但必须注意它始终以幺正方式演化，因此永远不会坍缩。

区分动态状态和值状态的动机是这样一个想法：即使系统的幺正演化状态不是该可观测量的本征态，系统仍然可能具有可观测量的一个确定值。这个想法与所谓的“本征态-本征值联系”相矛盾，该联系表明，如果系统的量子态是相应的本征态，那么系统就具有可观测量的一个确定值（即其本征值）。模态方法接受了这个陈述的“如果”部分，但否定了“只有当”部分。因此，范弗拉森引入了“值状态”的概念：系统的物理属性（即明确定义的可观测量）不是通过出现在演化方程中的动态状态来一一对应地表示的，而是通过通常与动态状态不同的值状态来表示的。

范弗拉森将他的提议称为“模态”，因为它自然地与量子命题的模态逻辑相连接。实际上，一般来说，动态状态只告诉我们可能发生的事情，并为各种可能性指定概率。根据范弗拉森的观点，这种模态和概率的方面对于量子力学是基本的，不应被视为描述的不完整性所产生的结果（有关这一点与范弗拉森的建设性经验主义之间的关系，请参见布埃诺 2014 年的论述）。

那么，在给定时间内，给定系统的确定数量和值状态是什么？经验上的适应性要求，在测量的情况下，测量设备的测量后值状态应与确定的测量结果相对应。因此，该方案最少需要生成表示可能的测量结果的值状态上的 Born 概率测量。范弗拉森的解释没有进一步发展；它没有在测量情况之外指定精确的值状态，并对物理系统的属性普遍持不可知论立场（有关这一点的批评性讨论，请参见 Ruetsche 1996）。

很容易看出，这些想法如何激发了一个更详细的模态解释量子理论的计划，即使在没有进行测量的情况下，也会为物理系统分配确定的属性。现在我们转向这个更一般的模态计划。

## 2. 模态解释的一般特点

在 1980 年代，几位作者提出了可以看作是刚提到的模态主题的变体的现实主义解释（有关概述和参考文献，请参见 Dieks 和 Vermaas 1998）。这些模态解释之间存在差异，但它们都同意以下观点：

* 解释应该基于量子力学的标准形式主义，而不包括投影假设：模态解释是一种“非坍缩解释”，即对幺正量子力学的解释。
* 解释应该在“现实主义”意义上，即假设量子系统始终具有一些确定的属性，这些属性可能随时间变化。
* 量子力学被认为是普遍的：它适用于微观和宏观系统。
* 系统的幅度演化状态包含有关系统可能的物理性质和相应概率的信息。因此，动力学状态和物理可能性之间存在概率关系（由可能值状态表示）。
* 量子测量是一种普通的物理相互作用，其中动力学状态始终以幅度演化。

科亨-施佩克尔定理（1967 年）是对量子力学的任何传统现实主义解释的障碍，因为它证明了在保持交换观测量之间的功能关系的同时，不可能同时为量子系统的所有物理量（可观测量）赋予精确值。（请参阅科亨-施佩克尔定理的条目。）因此，现实主义的非坍缩解释致力于从所有可观测量中选择一个（布尔）确定值子集。因此，每个模态解释都提供了一个“确定值归属规则”或“实现规则”，它从量子系统的所有可观测量集合中挑选出确定值属性的子集，这些属性可能随时间变化。

这个实现规则应该是什么样的？在 1990 年代中期，一系列作者面对这个问题（Clifton 1995a，1995b，Dickson 1995a，1995b）。这些作者提出了一个实现规则必须满足的条件，该规则纯粹从动力学状态定义了一组可能性，并得出结论，两部分复合系统的组成部分的可能值状态应由动力学状态的 Schmidt（双正交）分解中出现的状态给出，或者等效地，由表示部分系统的密度矩阵的谱分解中出现的投影算符给出（通过部分追踪获得）-有关详细信息，请参见第 4 节。

问题的确定值属性的问题被 Bub 和 Clifton（1996）以一种更一般的方式来解决；有关改进版本，请参见 Bub，Clifton 和 Goldstein（2000）。这些作者从一个假设出发，即确定值子集由动力学状态|ϕ⟩加上一个“特权观测量”R 来确定，该观测量代表一个先验上始终具有确定值的属性。从这个角度来看，Bub（1992，1994，1997）得出结论，回顾起来，许多传统的量子理论解释可以被视为模态解释。其中包括（Bub 认为的）狄拉克-冯·诺伊曼解释和玻尔的解释；而且，作为一个更明确的案例，还有玻姆的理论。实际上，这个理论（Bohm 1952）是一个具有位置作为特权观测量 R 的模态非坍缩解释。使用特权观测量的模态方案的一个较新提议是模态哈密顿解释（见第 8 节）。

## 3. 与其他非坍缩解释的关系

在范弗拉森发表他的著作之前，其他人也提出了不使用投影假设的建议。特别是，玻姆的隐藏变量理论（自 20 世纪 20 年代以来由德布罗意的提议先于之）和埃弗雷特（1957）的相对态方案（由德威特（1970）发展成为多世界诠释）走上了这条道路。根据玻姆的理论，物理系统由始终具有确定位置的粒子构建，而波函数指定了这些位置可能具有的各种可能值的概率。在玻姆的理论中没有坍缩：波函数在所有时间上都以幺正方式演化。因此，该理论符合量子力学的模态解释：状态确定了一系列可能的粒子配置，并指定了这些可能性实际实现的概率。

埃弗雷特（1957 年）还消除了坍缩，因此在测量之后，物体系统和测量设备（或观察者）最终处于纠缠的叠加态。为了使这种描述与我们经验的独特性相一致，埃弗雷特引入了相对状态的概念：叠加的各个项代表不同的确定性测量结果，并且相对于相应的设备状态，物体系统也具有确定的属性。德威特和其他人将这种解释性的移动进一步发展为一个观点：在后测量叠加中表示的所有测量结果都得到实现：在一个测量中，世界被繁殖，而在每个世界中，不同的测量结果变得确定。

事实上，历史事实是不清楚的，许多共存世界的想法是否符合埃弗雷特自己的观点：埃弗雷特表示，波函数的作用是为我们提供一组关于我们所生活的世界的实际和反事实的描述，这表明他更倾向于将他的相对状态解释视为关于一个单一世界的理论。这将使埃弗雷特的解释成为一种模态解释（详见 Dieks 2021 的广泛讨论）。

然而，与其他非坍缩解释相比，区分模态解释的特征是模态解释涉及一个单一的世界，关于这个世界它们作出“模态陈述”，即关于可能性及其概率的陈述。

## 4. 双正交分解和谱分解模态解释

现在我们转向那些模态解释，其中物理可能性的集合由系统的（动力学的）量子态确定（参见第 2 节倒数第二段）。

在双正交分解解释（BDMI，有时被称为“科亨-迪克斯模态解释”，科亨 1985 年，迪克斯 1988 年，1989 年），确定值观测量是通过状态的双正交（施密特）分解来选择的。

双正交分解定理：
给定一个张量积希尔伯特空间 H1⊗H2 中的向量|ψ⟩，存在 H1 和 H2 的基{|ai⟩}和{|pi⟩}，使得|ψ⟩可以写成形如|ai⟩⊗|pi⟩的项的线性组合。如果这个线性组合中的系数的绝对值（模）都不相等，则这些基是唯一的（例如，参见 Schrödinger 1935 的证明）。

应用于量子力学，该定理表明，给定由两个子系统组成的复合系统，其状态会选择（在许多情况下是唯一的）每个子系统的一个基。在 BDMI 中，这些基被用来生成相应子系统的确定值属性：确定值可观测量是与这些基矢量上的所有投影都对易的可观测量。

BDMI 可以直接应用于量子测量问题。让我们考虑一个理想的测量，根据标准的冯·诺依曼模型，量子测量是系统 S 和测量仪器 M 之间的相互作用。在相互作用之前，M 被准备在一个准备测量状态|p0⟩，是 M 的指针可观测量 P 的特征向量，而 S 的状态是 S 的可观测量 A 的本征态|ai⟩的叠加态。相互作用引入了 A 的本征态|ai⟩和 P 的本征态|pi⟩之间的相关性：

|ψ0⟩=∑ici|ai⟩⊗|p0⟩→|ψ⟩=∑ici|ai⟩⊗|pi⟩

在这种情况下，根据 BDMI 的实现规则，被测量对象系统 S 的首选上下文由集合{|ai⟩}定义，而测量仪器 M 的首选上下文由集合{|pi⟩}定义。因此，指针位置是仪器的确定性属性：作为与对象系统的相互作用的结果，指针获得其可能值（本征值）之一 pi。同样，在相互作用之后，被测量的可观测量是对象系统的确定性属性，并获得其可能值（本征值）之一 ai。

尽管这种模态解释以双正交分解发挥了核心作用，但可以区分出两个不同的版本。其中一个采用了一种所有属性都是关系性的形而上学，因此解释的应用仅限于两组分复合系统的子系统并不是一个问题（Kochen 1985）。这种关系被称为“见证”：属性并不是系统绝对拥有的，而是只有在被另一个系统“见证”时才拥有。考虑上述的测量：指针“见证”了被测系统的被测可观测量所获得的值。

相反，根据另一个版本，被归属于系统的属性并没有关系性质。因此，这个提议面临着关于将总系统分解为组分的不同方式的确定值分配的一致性问题。例如，考虑三组分复合系统 αβχ。我们可以将双正交分解定理应用于两组分系统 (i) α(βχ)，或 (ii) β(χα)，或 (iii) χ(αβ)。假设由此导致，在情况 (i) 中，系统 α 具有确定值属性 P，在情况 (ii) 中，系统 β 具有确定值属性 Q，在情况 (iii) 中，系统 αβ 具有确定值属性 R。系统 α 和 β 的确定值属性与 αβ 的属性有何关系？系统 αβ 的确定值属性是 P&Q，还是 R，还是两者都有？

一种推广是谱分解模态解释（SDMI，Vermaas 和 Dieks 1995）。SDMI 基于约化密度算符的谱分解：系统的确定值属性 Πi 及其相应的概率 Pri 由系统状态的非零对角元素给出。

ϱ=∑iαiΠiPri=Tr(ϱΠi)

这个新提议在旧提议适用的情况下与旧提议相匹配，并通过在双正交分解退化时以多维投影算符来固定确定值属性来推广它：确定值属性不一定总是由一维向量表示-希尔伯特空间的高维子空间也可能出现。

SDMI 对测量情况也有直接应用。考虑上述描述的量子测量，其中被测系统 S 和测量仪器 M 的约化态是

ϱSr=Tr(M)|ψ⟩⟨ψ|=∑i|ci|2|ai⟩⟨ai|=∑i|ci|2ΠaiϱMr=Tr(S)|ψ⟩⟨ψ|=∑i|ci|2|pi⟩⟨pi|=∑i|ci|2Πpi

根据 SDMI，S 的首选上下文由投影算符Πai 定义，而 M 的首选上下文由投影算符Πpi 定义。因此，在 SDMI 中，S 的可观测量 A 和 M 的可观测量 P 获得实际确定的值，其概率由对角化简化态的对角元素给出。

Healey（1989 年）是最早利用双正交分解定理进行解释目的的人之一，他提出了一种略有不同的模态方案。在使用双正交分解定理后，Healey 修改了可能性属性集，以满足各种附加要求，例如关于复合系统与其子系统之间的关系。从这些条件中得出的确定值属性结构相当复杂。自从 Healey 的书出版以来已经取得了一些进展（参见 Reeder 和 Clifton 1995 年），但总体而言，根据这种方法很难看出确定值属性集是什么。

## 5. 物性组合和原子模态解释

如上所述，模态属性的归属在系统可以以不同方式分解为组件时会引发一致性问题。例如，考虑三组分复合系统 αβχ。我们可以将双正交分解定理应用于两组分系统 (i) α(βχ)，或 (ii) β(χα)，或 (iii) χ(αβ)。假设由此导致，在情况 (i) 中，系统 α 具有确定值属性 P，在情况 (ii) 中，系统 β 具有确定值属性 Q，在情况 (iii) 中，系统 αβ 具有确定值属性 R。α 和 β 的确定值属性与 αβ 的属性有何关系？系统 αβ 的确定值属性是 P&Q，还是 R，还是两者都有？这个问题在 1990 年代由不同的作者进行了讨论（参见 Vermaas 1999，Bacciagaluppi 1996）。

在此基础上，让我们考虑一个由 Hilbert 空间 Hα 和 Hβ 分别表示的组分子系统 α 和 β 组成的复合系统 αβ，并考虑由投影算符 Πα 在 Hα 上定义的一个属性。通常假设 Πα 表示与在 Hα ⊗ Hβ 上定义的 Πα⊗Iβ 所表示的属性相同，其中 Iβ 是 Hβ 上的单位算符。这个假设基于 Πα 和 Πα⊗Iβ 所表示的量的观测不可区分性：如果 Πα 的测量有某个结果，那么 Πα⊗Iβ 的测量也会有完全相同的结果。

现在的问题是，当将 BDMI 和 SDMI 的规则应用于α时，是否会给Πα分配一个与将规则应用于复合系统αβ时分配给Πα⊗Iβ相同的值（这种情况被称为属性组合），反之亦然（属性分解）。对于这个问题的答案是否定的：BDMI 和 SDMI 违反了属性组合和属性分解（证明见 Vermaas 1998）。

如果坚持认为投影算符Πα和Πα⊗Iβ必须表示相同的属性，那么属性组合和属性分解的违反就是一个严重的问题。因此，Arntzenius（1990）认为属性组合的违反是奇怪的，因为对于像“桌子的左侧是绿色”和“桌子有一个绿色的左侧”这样的命题分配了不同的真值；Clifton（1996）也提出了类似的论证（另见 Clifton 1995c）。

然而，Vermaas（1998）认为，Πα和Πα⊗Iβ所代表的大小的观测不可区分性并不强迫我们将这两个投影算符视为表示相同的属性：事实上，从理论的角度来看，它们是不同的，因为它们定义在不同的希尔伯特空间上。此外，他认为 Arntzenius 和 Clifton 提出的例子在属性组合和属性分解的光线下听起来很奇怪。但在量子领域，我们必须接受一个事实，即一个系统拥有哪些属性，其子系统拥有哪些属性是不同的问题：复合系统αβ的属性并不总是确定子系统α的属性，反之亦然。Vermaas 得出结论，认为Πα和Πα⊗Iβ代表相同属性的信条可以被视为对量子力学的一种补充，可以像 van Fraassen（1991）所做的那样予以否认。

一个类似的问题是由于希尔伯特空间的因子分解不唯一：任何给定的因子分解 H=H1⊗H2 都可以“旋转”以产生不同的因子分解 H′=H1′⊗H2′。我们是否应该对每个这样的因子分解应用相同的规则？如果有关系，结果如何相关？Bacciagaluppi（1995 年）的一个定理（也参见 Vermaas 1997）表明，如果将 SDMI 应用于每个因子分解，并坚持在不同的因子分解中出现的可观测量的值是因子分解独立的，则最终将得到科亨-施佩克尔类型的数学矛盾。

对于这些困难的一个可能的反应是假设存在一个首选的因子分解。（也可以将上述问题视为系统以关系方式拥有其属性的指示，参见第 5 节）。因此，原子模态解释（AMI，Bacciagaluppi 和 Dickson 1999）假设自然界确定了一组相互不相交的原子量子系统 Sj，它们构成了所有其他量子系统的基本构建块。从数学角度来看，这意味着整个宇宙的希尔伯特空间 Huniv 只能以一种有意义的方式进行因子分解，从而定义了一种首选的因子分解。如果每个原子量子系统 Sj 对应于一个希尔伯特空间 Hj，则宇宙的希尔伯特空间 Huniv 必须写成

Huniv=H1⊗H2⊗⋯⊗Hj⊗⋯

这个想法的吸引力在于它与粒子物理标准模型一致，其中自然界的基本构建块是元素粒子，例如夸克、电子、光子等，以及它们之间的相互作用。此外，上述问题在 AMI 中可以避免：一旦确定了原子构建块的属性，可以规定复合系统的属性是由属性组合得出的。其中一些思想在模态-哈密顿解释中得到了实现，将在第 8 节中讨论。AMI 中对原子量子系统的属性归属进一步遵循模态解释的一般思想，即归属取决于系统的动力学状态。

AMI 面临的主要挑战是证明宇宙存在一个优选的分割，并提供一些关于这个分割应该是什么样的想法。AMI 还面临另一个问题。定义为原子量子系统的复合量子系统 Sσ不一定具有与测量结果相对应的属性。原因是系统 Sσ可能处于量子态ϱσ，并具有特征投影算符Πσ，使得 Trσ(ϱσΠσ)=1。这意味着如果测量由Πσ表示的属性，将以概率 1 获得积极结果。但可能存在这样一种情况，即投影算符Πσ不是原子属性的组合，因此根据 AMI，它不是复合量子系统 Sσ所具有的属性。

对这个困难有两种答案被提出。第一种允许存在除了普通属性之外的倾向性属性（Clifton 1996）。根据第二个答案，投影仪Πσ的结果 1 是对测量设备的集体动力学效应（Dieks 1998）：复合量子系统可以表现为一个集体实体，屏蔽原子量子系统。这意味着非原子量子系统 Sσ有时可以在粗粒度描述中被视为原子。

## 6. 属性的动力学

正如我们所见，模态解释意图为每个瞬间提供一组确定值属性及其概率。一些模态解释的支持者愿意就此事宜放手不管。其他人认为回答以下形式的问题也是至关重要的：假设系统的属性 P 在时间 t0 具有实际值α，那么在时间 t1>t0 时，其属性 P'具有实际值β的概率是多少？换句话说，他们希望有一个实际属性的动力学。

双方都有争论（van Fraassen 1997）。那些主张这种动力学的必要性的人认为，我们必须确保实际属性的轨迹确实如我们所见，至少对于宏观物体来说是这样，即像记忆中所包含的记录一样。例如，我们不仅应该要求静止在桌子上的书具有明确的位置，而且如果不受干扰，它相对于桌子的位置不会随时间变化。因此，我们不能仅仅在每个时间点指定可能的明确属性。我们还需要展示这个规范至少与合理的动力学相容；最好是明确指定这个动力学。

认为实际属性的动力学是多余的人回应说，这种动力学超出了量子力学解释需要提供的范围。每个瞬间的记忆内容足以使经验上的适应性成为可能。

Ruetsche（2003）认为，在这种情况下，将模态解释视为导致隐藏变量理论，即在原始形式主义中添加值状态作为隐藏变量以获得对物理情况的完整描述，或者将其视为将原始形式主义配备新语义的解释性举措（另见第 11 节）是很重要的。在第一种情况下，人们会期望有一个完整的实际属性动力学，而在第二种情况下，这并不那么清楚。

当然，模态解释允许一种平凡的动力学，即从一个时间到下一个时间没有相关性的动力学。在这种情况下，属性 P 在 t0 时具有实际值α到属性 P'在 t1>t0 时具有实际值β的转换的概率只是 P'在 t1 时具有β的单时间概率。然而，这种动力学不太可能引起那些需要任何动力学的人的兴趣。一些研究人员为构建模态解释的更有趣的动力学形式做出了贡献（参见 Vermaas 1996, 1998）。一个重要的解释是由 Bacciagaluppi 和 Dickson（1999，另见 Bacciagaluppi 1998）提出的。该工作展示了构建实际属性动力学所面临的最重要的挑战。

第一个挑战是由于明确值属性集合（我们称之为'S'）可能随时间变化而引起的。因此，必须定义一个映射族，每个映射都是从 t0 时的 S0 到 t 时的不同 St 的一一映射，对于任何时间。通过这样的映射族，可以在单个状态空间内有效地定义条件概率，然后将其转化为“转换”概率。为了使这种技术起作用，St 在任何时间上必须具有相同的基数。然而，一般情况下并非如此：例如，在 SDMI 中，出现在密度矩阵的谱分解中的不同投影仪的数量可能随时间变化。

一种摆脱这个问题的方法是在每个时间点上增加 S 的基数，使其与 S 曾经达到的最高基数相匹配。当然，人们希望以一种不完全特定的方式来做到这一点。例如，在 SDMI 的背景下，Bacciagaluppi、Donald 和 Vermaas（1995）表明，物理系统的约化态的谱分量在希尔伯特空间中的“轨迹”在合理条件下将是连续的，或者只有孤立的不连续点，因此轨迹可以自然地延伸为连续的轨迹（参见 Donald 1998）。这个结果提出了一族自然的映射，如上所讨论的，它将每个时间点的谱分量映射到后续时间点的唯一连续演化分量。

构建动力学的第二个挑战源于一个事实，即人们希望在无穷小的时间单位上定义转移概率，然后从中推导出有限时间的转移概率。Bacciagaluppi 和 Dickson（1999）认为，通过调整随机过程理论的结果，可以证明该过程可以在至少某些模态解释的情况下进行。

最后，必须定义无穷小的转移概率，以在每个时间点产生适当的量子力学概率。在 Bell（1984）、Vink（1993）和其他人的早期论文之后，Bacciagaluppi 和 Dickson（1999）定义了一类无穷小的转移概率，这些概率都能生成正确的单时间概率，这些概率可以说是我们真正可以测试的。然而，Sudbery（2002）认为转移概率的形式与自发衰变或“Dehmelt 量子跳跃”的精确形式相关；他独立地发展了 Bacciagaluppi 和 Dickson 的动力学，并以这种方式应用它，从而导致了这些实验的正确预测。Gambetta 和 Wiseman（2003、2004）以噪声的形式发展了一个动态模态解释，还将他们的方法扩展到了正算符值测量（POVMs）。最近，Hollowood（2013a、2013b、2014）详细阐述了价值状态的动力学可以由离散时间马尔可夫链建模的想法。

## 7. 透视模态解释

在第 5 节中讨论了将物理属性绝对（单调）地归属于系统会引发一致性问题。如果采用一种属性是关系性的形而上学，这些问题可以避免。实际上，可以认为非坍缩量子力学的数学结构强烈暗示了一种关系性的图景，例如 Everett（1957）引入相对态的原因（这些原因与 Wigner 的朋友悖论的非坍缩处理有关，另请参阅 Dieks 2019、2021）。

Kochen（1985）提出了一个早期的关系模态解释。根据 Kochen 的观点，在一个双分体系统中，一个系统的属性是由另一个系统“作为见证者”来确定的。

Bene 和 Dieks（2002）提出了一个更一般的透视模态解释（PMI），其中任何物理系统的属性都是相对于任意其他物理系统来定义的，这些系统被称为“参考系统”（Bene 1997）。PMI 与 SDMI 密切相关，因为它们使用类似的规则来为量子系统分配属性。

更详细地说，相对于参考系统 R，S 的状态用ρSR 表示。在 R 与 S 重合的特殊情况下，状态ρSS 被称为“相对于自身的 S 的状态”。如果系统 S 包含在系统 A 中，则状态ρSA 被定义为可以从ρAA 导出的密度算符，通过对不涉及 S 的 A 的自由度进行偏迹运算得到。

ϱSA=Tr(A∖S)ϱAA

PMI 始于整个宇宙相对于自身的动力学状态，假设它是一个纯态 ϱUU=|ψ⟩⟨ψ|，根据薛定谔方程进行幺正演化。对于宇宙中包含的任何系统 S，其相对于自身的值态 ϱSS 被假设为 ϱSU=Tr(U∖S)ϱUU=Tr(U∖S)|ψ⟩⟨ψ| 的谱分解的投影算符之一。特别地，如果 ϱSU 的本征值之间没有简并，ϱSS 就是一维投影算符 |ψS⟩⟨ψS|。

在 PMI 中，一个系统在一个观察者的视角下可能是定域化的，然而在另一个视角下可能是非定域化的。然而，当不同的观察者观察同一个宏观物体时，由于退相干效应，这种效应将被抑制。

这种透视解释背后的“形而上学”思想是，从不同的透视角度给出的不同关系描述应被视为同样客观；物理现实具有关系性质，透视状态不能简化为更基本的非关系性状态。

在这种关系/透视解释中，EPR 类型实验中事件的进程可以以局部方式描述。实际上，粒子 1 相对于粒子 2 的关系状态的变化可以理解为由粒子 1 和测量设备之间的局部测量相互作用引起的参考系的变化的结果。这种局部测量负责创建一个新的透视，从这个新的透视中，粒子 2 有一个新的关系状态（Dieks 2009, 2019）。

PMI 赞同玻尔的观点，即量子领域中对物理现实的定义应包括实验背景（有关玻尔观点的详细讨论和与模态方法的比较，请参见 Dieks 2017）。然而，PMI 更加普遍和技术上精确：PMI 将系统的状态定义为与任意背景相关，不一定与测量相关。这消除了主观主义的威胁，因为关系状态明确地遵循量子形式主义和物理学的情况。

Berkovitz 和 Hemmo（2006）建议需要一种关系方法来将模态解释推广到相对论情况。Dieks（2021）提供了一个详细的方案，借鉴了多世界诠释的思想，使得 PMI 可以在相对论上具有协变性。

Rovelli 和他的同事们还提出了一种关系解释量子力学的方法，其中存在着对物理系统的不同依赖视角的描述的可能性（Rovelli 1996，Rovelli 和 Smerlak 2007，Laudisa 和 Rovelli 2021，另请参阅 van Fraassen 2010 和关于关系量子力学的条目）。PMI 和 Rovelli 的关系解释有一些接触点，但也存在差异。在 Rovelli 的提议中，离散的相互作用事件（其中一些对应于测量）是基本的，每次发生这样的相互作用事件时，状态都必须更新。相比之下，在 PMI 中，状态演化始终是幺正的。

## 8. 模态-哈密顿解释

正如 Bub（1997）指出的（见第 2 节），在大多数模态解释中，确定值可观测量的首选上下文仅由系统的动力学状态确定；但也可以引入一个首选的确定值可观测量。一个例子是玻姆力学，在其中首选的上下文是由位置可观测量先验定义的；在这种情况下，属性组合和属性分解成立。但这并不是具有固定首选可观测量的模态解释的唯一合理可能性。事实上，模态-哈密顿解释（MHI，Lombardi 和 Castagnino 2008）赋予系统的哈密顿量在系统和子系统的定义以及首选上下文的选择中起决定性作用。

MHI 基于以下假设：

** 系统假设（SP）：**
一个量子系统 S 由一对(O,H)表示，其中(i) O 是 Hilbert 空间上的自伴算子空间，表示系统的可观测量，(ii) H∈O 是系统 S 的时间独立哈密顿量，(iii) 如果ϱ0∈O'（其中 O'是 O 的对偶空间）是 S 的初始状态，它将根据薛定谔方程演化。

尽管任何量子系统都可以以多种方式分解成部分，但根据 MHI，只有当组件的行为在动力学上彼此独立时，分解才会导致部分也是量子系统，也就是说，子系统之间没有相互作用：

**复合系统假设（CSP）：** 
由 S:(O,H)表示的量子系统，初始状态为ϱ0∈O'，当它可以分为两个量子系统 S1:(O1,H1)和 S2:(O2,H2)时，我们称之为复合系统，满足以下条件：(i) O=O1⊗O2，(ii) H=H1⊗I2+I1⊗H2（其中 I1 和 I2 是相应张量积空间中的单位算符）。在这种情况下，我们说 S1 和 S2 是复合系统 S=S1∪S2 的子系统。如果系统不是复合的，则它是基本的。

关于首选上下文，MHI 的基本思想是系统的哈密顿量定义了实现。任何没有哈密顿量的对称性的可观测量都不能获得确定的实际值，因为这种实现会以任意方式破坏系统的对称性。

** 实现规则（AR）：**
给定由 S:(O,H)表示的基本量子系统，S 的实值可观测量是 H 以及与 H 对易且具有至少与 H 相同对称性的所有可观测量。

仅基于首选可观测量选择首选背景的做法已经受到批评，因为在希尔伯特空间形式主义中，所有可观测量都处于同等地位。然而，量子力学不仅仅是希尔伯特空间数学：它是一个包含动力学定律的物理理论，其中哈密顿量被单独选出来起到核心作用。

将哈密顿量选为首选可观测量的理由最终在于 MHI 的成功以及其解决解释困难的能力（参见 Lombardi 和 Castagnino 2008 年第 5 和第 6 节）。关于第一个观点：该方案已经应用于几个众所周知的物理情境（自由粒子与自旋、谐振子、自由氢原子、塞曼效应、精细结构、Born-Oppenheimer 近似），得出了与经验证据一致的结果。关于解释，MHI 通过选择首选背景来面对量子上下文性，并且已经证明能够在理想和非理想情况下解决测量问题；此外，在非理想情况下，它提供了一个区分可靠和不可靠测量的标准，这个标准在信息术语中可以推广（Lombardi，Fortin 和 López 2015 年）。

在 MHI 属性组合和属性分解中，因为实现规则仅适用于元系统：复合系统的确定值属性是基于元组件的属性选择的，并遵循通常的量子假设，即子系统 S1 的可观测量 A1 和复合系统 S=S1S2 的可观测量 A=A1⊗I2 表示相同的属性（Ardenghi 和 Lombardi 2011）。

MHI 的首选上下文不随时间变化：确定值可观测量始终与哈密顿量对易，因此它们是系统的运动常数。这意味着它们在量子系统作为封闭系统的整个“生命周期”中保持不变，从其初始“诞生”时作为相互作用的结果而产生，直到其最终“死亡”时通过与另一个系统的相互作用而消失。因此，不需要像 BDMI 和 SDMI 中那样考虑实际属性的动力学。

在最近几年中，MHI 已将其应用扩展到其他情况，例如物理学中连续测量的非坍缩解释（Ardenghi，Lombardi 和 Narvaja 2013）以及化学中的光学异构体问题（Fortin，Lombardi 和 Martínez González 2018）。

## 9. 非理想测量

在上面，我们建议 BDMI 和 SDMI 立即解决了测量问题。这在理想的冯·诺依曼测量中是正确的，在这种测量中，被测量的可观测量 A 的本征态|ai⟩与测量仪器 M 的指针 P 的本征态|pi⟩完全相关。然而，在实践中永远无法实现理想的测量：S 和 M 之间的相互作用永远不会产生 A 和 P 之间的完全完美的相关性。文献中通常区分两种非理想测量：

* 不完美测量（第一种）
  ∑ici|ai⟩⊗|p0⟩→∑ijdij|ai⟩⊗|pj⟩（一般情况下，dij≠0，其中 i≠j）
* 扰动测量（第二类）
  ∑ici|ai⟩⊗|p0⟩→∑ici|adi⟩⊗|pi⟩（一般情况下，⟨adi∣adj⟩≠δij）

然而，请注意，干扰测量可以被重新解释为不完美的测量（反之亦然）。

不完美的测量对 BDMI 和 SDMI 构成挑战，因为在这种情况下，它们选择明确值属性的规则并未选择出适合仪器的正确属性（参见 Albert 和 Loewer 1990, 1991, 1993；Ruetsche 1995）。在 Stern-Gerlach 实验的背景下，有一个明显展示这些困难的例子（Elby 1993）。这个论证利用了 z 变量中波函数通常具有无限的“尾巴”，从而引入非零的交叉项；因此，“下行”光束的波函数的“尾巴”可能会在上方探测器中产生探测，反之亦然（详见 Dickson 1994 进行详细讨论）。

如果将双正交分解应用于非完全相关的状态∑ijdij|ai⟩⊗|pj⟩=∑ic′i|a′i⟩⊗|p′i⟩，根据 BDMI 的结果，它不会选择指针 P 作为明确值属性，而是选择具有本征态|p′i⟩的不同可观测量 P′。在这种情况下，选择的明确值属性与预期的属性不同，问题就是它们有多大的不同。在不完美测量的情况下，可以假设 dij≠0，其中 i≠j，很小；那么，差异可能也很小。但是在干扰测量的情况下，dij≠0，其中 i≠j，不一定很小，因此，模态解释的分配与实验结果之间的不一致可能是不可接受的（在 Bacciagaluppi 和 Hemmo 1996 中进行了全面讨论）。这个事实被认为是击败 BDMI 和 SDMI 类型的模态解释的“致命一击”（Harvey Brown，引自 Bacciagaluppi 和 Hemmo 1996）。这是过早的结论：涉及环境退相干的更全面的分析能够解决许多这些问题-请参见下文。

BDMI 和 SDMI 解释面临的另一个问题与退化有关。当复合系统（被测系统加上测量设备）的最终状态在由被测可观测量和仪器指针给出的基础上几乎退化（即各种结果的概率几乎相等）时，光谱分解通常不会选择接近理想期望的确定值属性。事实上，所选择的可观测量可能与我们根据观察所期望的可观测量（Bacciagaluppi 和 Hemmo 1994, 1996）不兼容（非对易）。

为了解决这些问题，一些作者诉诸于退相干现象；现在将对此进行讨论。

## 10. 退相干的作用

根据环境诱导的退相干方法（Zurek 1981, 2003; 参见 Schlosshauer 2007），任何宏观测量装置都是一个与其环境持续相互作用的开放系统；由于这种相互作用，装置的约化态几乎瞬间变得与表示装置宏观指针位置的未知但确定的态相同，即一个无知混合态（“适当混合态”）。早期有几位作者提出，退相干可能在模态解释中起重要作用，使得宏观量变得确定（Dieks 1989, Healey 1995）。考虑退相干在非理想测量讨论中的核心意义。

正如我们所见，在 BDMI 和 SDMI 中，双正交和谱分解通常不能正确选择非理想测量中装置的性质。然而，Bacciagaluppi 和 Hemmo（1996）表明，当装置是与包含大量自由度的环境相互作用的有限维系统时，退相干保证了约化装置态的谱分解将非常接近理想预期结果，并且结果是一个非常接近且无法区分于装置指针的可观测量。或者，Bub（1997）建议，可以使用涉及环境的三正交或 n 正交分解定理来确定装置的唯一指针基，而不是退相干——通过“追踪”环境和对装置的约化态进行对角化。

在任何一种情况下，与环境的相互作用解决了有限维宏观仪器中 BDMI 和 SDMI 中非理想测量的问题。然而，对于仪器具有无限多个不同状态的情况更加棘手。Bacciagaluppi（2000）使用仪器与环境的连续模型分析了这种情况。他得出结论，在这种情况下，仪器的约化态的谱分解通常不能选择出与经验要求的性质足够接近的性质。这个结果似乎普遍适用于宏观系统具有无限自由度的情况，由于与环境的相互作用而经历退相干（参见 Donald 1998）。然而，Hollowood（2013, 2014）的模型计算表明，在现实情况下，这个问题可能比最初想象的要轻微，这个问题需要进一步研究。

具有先验固定优选观测量的模态解释（MHI 和玻姆的解释）对上述异议是免疫的：不需要通过环境的退相干来解释仪器指针位置的确定性（无论是在理想测量还是非理想测量中）。然而，在 MHI 中仍然存在与退相干计划的关系。实际上，测量仪器始终是一个具有大量自由度的宏观系统，指针因此必须是一个“集体”的和经验可观测的量子；因此，指针的许多自由度和相应的简并起到了退相干的“内部环境”的作用（有关详细信息，请参见 Lombardi 等人 2011 年的论文）。当从封闭系统的角度理解退相干现象时，退相干在 MHI 中的作用变得更加清晰（参见 Castagnino，Fortin 和 Lombardi 2010 年的条目）。 （请参阅关于量子力学中退相干作用的条目。）

## 11. 重新审视测量问题：完备性和隐藏变量

测量问题通常以以下形式的三个断言的不相容性来表达（参见 Maudlin 1995，Myrvold 2018）：

1. 量子态是“完备的”。
2. 量子态始终按照线性动力学方程（例如薛定谔方程）演化。
3. 成功的测量具有唯一和确定的结果。

为了避免不一致性，通常考虑三种解释策略：否认完备性（a），这通常被认为导致隐藏变量理论；否认（b），这导致坍缩理论；或者否认（c），这导致多世界。

模态解释接受(b)和(c)，因此它们必然违反(a)。因此，很明显，模态解释必须将量子力学视为“不完整”。确实，根据模态解释，量子态并不能确定系统的所有实际物理属性（即所有确定值物理量的实际值），这是(a)中假定的不完整性标准。

然而，许多模态方案的支持者认为后一种特征并不能适当地表达为量子力学在模态上被认为是不完整的。他们反对说这种不完整性术语往往会暗示理论的缺陷，以及需要通过隐藏变量来完成。但是模态理论家坚持认为他们对量子力学的解释不需要添加，因为这些解释已经包含了从根本上描述概率性（不确定性）世界的理论中可以合理期望的一切。首先，模态方案完全指定了哪些可观测量是确定值的。其次，它们确定了这些可观测量可能具有的值，并提供了这些值可能实现的概率。由于核心模态原理认为量子世界中属性的实现是一个基本的概率性（不确定性）过程，因此除了这种概率性描述之外，没有其他可能性。从这个观点来看，坚持认为模态解释的量子力学必然是不完整的，等于是规定任何概率论必须从定义上就是不完整的，即使它适用于一个基本上是概率性的世界。但这似乎是术语的不适当使用。

## 12. 概率的解释

模态解释的主要思想是不确定性和概率性：量子力学并不描述实际情况，而是提供了一系列可能性及其概率。概率的核心地位引发了两个问题：概率的形式处理和概率的解释。

由于给定希尔伯特空间上的所有投影算子的集合没有布尔结构，所以波恩概率（定义在这些投影算子上）不满足科尔莫哥洛夫概率的定义（适用于事件的布尔代数）。因此，一些作者在量子事件的正交代数上定义了广义的非科尔莫哥洛夫概率函数（Hughes 1989，Cohen 1989）。模态解释不遵循这条路径：它们将概率看作是由相互对易的投影算子生成的表示确定值量的布尔代数上的科尔莫哥洛夫测度表示的。正如我们所见，各种模态解释在对所定义的科尔莫哥洛夫概率的首选上下文的定义上存在差异。

一般来说，上下文可以被描述为一个完整的正交投影算子集合{Πα}，满足∑iΠi=I 和ΠiΠj=δijΠi，其中 I 是 H⊗H 中的单位算子。每个这样的上下文都生成一个布尔结构，而系统的状态在每个单独的上下文中定义了一个科尔莫哥洛夫概率函数。然而，只有由所选模态解释选择的首选上下文上定义的概率对应于物理可能性，其中之一是实际情况。

所以我们正在处理可能事件，其中只有一个是实际的。实际事件不被模态解释所单独指出的事实，从原则上讲，这使它们在根本上是概率性的。这一方面区别于多世界解释，其中所有事件都是实际的，因此概率必然是一个有问题的概念。然而，这种关于概率基本作用的模态一致性并不意味着所有模态解释在概率解释上达成一致。

在 BDMI、SDMI 和 PMI 的背景下，通常声称，在可能事件的空间中，状态生成了一个可解释为无知的概率测度：量子概率量化了观察者对系统可观测量实际值的无知（参见，例如，Dieks 1988，Clifton 1995a，Vermaas 1999，Bene 和 Dieks 2002）。

与这种“实在主义”相反，即将可能性归约为实在性（参见 Bueno 2014），一些模态解释，特别是 MHI，采用了可能主义的观念，即可能事件（可能性）构成了基本的本体范畴（参见 Menzel 2018）。在这种情况下，概率测度被视为可能的量子事件成为实际的本体倾向的表示（Suárez 2004；Terekhovich 2019 [其他互联网资源]）。

值得注意的是，模态量子力学的不确定性并不意味着系统的当前量子状态无法确定其未来的量子状态。薛定谔方程是确定性的，因此量子状态中编码的概率以确定性的方式演化。当我们考虑可观测量的实际值时，不确定性就出现了，即使量子状态完全确定，可观测量的实际值也不是预先确定的：模态解释认为实现过程本质上是概率性的。

在这个背景下，关于概率的两种观点（实在主义与可能主义）并不互斥。概率量化了对可观测量实际值的无知（如实在主义），并不意味着这种无知是由于对底层确定性过程的缺乏知识。可能主义认为，量子概率代表倾向性，我们的无知是物理世界不确定性本体论的必然结果，其中倾向性构成了一个基本范畴。

## 13. 未解决的问题和展望

许多量子物理学家在他们的工作中隐含地订阅模态思想，即他们使用幺正量子力学的形式主义来对一个单一的世界（我们自己的世界）进行概率性陈述。这种使用幺正量子力学的方式在量子信息理论中尤为流行。对于一致应用幺正（非坍缩）量子力学到物理世界的概念后果的问题，也越来越受到关注（参见，例如，Frauchiger 和 Renner 2018 以及随后的讨论）。这些问题在模态解释计划中找到了自然的位置。

在过去的十年中，模态解释也更明确地引起了对基础问题感兴趣的实践物理学家和数学家的关注。例如，Hollowood（2014）提出了一种受 PMI 启发的量子力学解释：在这种解释中，开放系统的状态代表了从封闭系统的角度看其属性。Barandes 和 Kagan（2014a，2014b，2020）提出了一种“最小模态解释”，受 SDMI 启发，根据该解释，首选的上下文由开放系统的演化约化态给出。Nakayama（2014a，2014b）探讨了模态解释与拓扑学框架之间的联系。

还有几个与模态计划相关的具体哲学问题：关于量子力学所指的“事物”的本质，即量子本体论的基本范畴。正如我们所见，通常情况下，量子系统的属性在模态解释中被认为是单子的，除了透视版本PMI，其中这些属性是关系性的。在这两种情况下，可以问量子系统是必须被看作是支持属性的个体基质，还是仅仅是不需要以普通意义上的个体构成的属性“束”？根据MHI的原始思想，da Costa、Lombardi和Lastiri（2013）以及da Costa和Lombardi（2014）提出，在模态背景下，束观点是对相同量子粒子不可区分性问题（French和Krause 2006）提供答案的最合适的观点。正如Steven French（2020 [其他互联网资源]）所指出的，这种非个体束的观点与实体结构实在论产生了自然的共鸣，实体结构实在论主要是受到量子力学的本体论挑战的驱动（Ladyman 1998）。此外，这种属性本体论已被用作关系量子力学的形而上学解释的基础（Oldofredi 2021）。值得注意的是，这种束本体论并不与在某些情况下出现经典可区分粒子的情况相矛盾，例如经典极限情况（Lombardi和Dieks 2016）。

最近，与模态解释相关的其他本体论主题也成为讨论的对象。因此，Calosi（2018）认为 BDMI 和 AMI 对量子唯物主义提出了重大挑战，即只有一个基本实体——整个宇宙的观点。在关于ψ-本体和ψ-认识模型分类的讨论中，Oldofredi 和 López（2020）表明这样的分类过于狭窄，无法包括 PMI 等关系解释。

还有一些更技术性的问题需要进一步讨论。这里讨论的模态解释是基于量子力学的标准希尔伯特空间形式主义。然而，Brown、Suárez 和 Bacciagaluppi（1998）认为，量子现实不仅仅由算符和量子态描述，还包括规范和坐标系：他们声称规范和坐标系对我们对物理现实的描述也很重要，而模态解释（AM、BDMI 和 SDMI）通常没有考虑这些因素。在类似的情况下，在 MHI 的背景下，有人认为伽利略时空对称性赋予了量子力学的形式骨架以物理实质，并确定了允许该理论应用于具体物理情况的基本物理量。如果假设系统的确定值可观测量在伽利略变换下不变（直觉是惯性参考系的简单变化不会改变这个集合），则 MHI 的实现规则可以以明确的不变形式重新表述，以伽利略群的 Casimir 算符为基础（Ardenghi、Castagnino 和 Lombardi 2009，Lombardi、Castagnino 和 Ardenghi 2010）。

另一个基本问题是模态方法的相对论扩展。Dickson和Clifton（1998）已经证明，普通量子力学的大部分模态解释不能以直接的方式保持洛伦兹不变性（参见Myrvold 2002）。关于代数量子场论的扩展（参见Dieks 2002，Kitajima 2004），Clifton（2000）提出了非相对论模态方案的自然推广，但Earman和Ruetsche（2005）表明，目前尚不清楚它是否能处理测量情况以及是否符合实证要求。这些调查揭示的问题与模态解释使用非相对论的全局状态概念以及一个瞬间的扩展系统有关。在局部场论背景下，情况变得不同，这可能有助于避免与相对论的冲突（Earman和Ruetsche 2005）。Berkovitz和Hemmo（2005）以及Hemmo和Berkovitz（2005）提出了另一种解决方法：他们认为透视主义可以在这里发挥作用（参见Berkovitz和Hemmo 2006）。透视主义对于确保与特殊相对论的兼容性至关重要的想法由Dieks（2021）详细阐述，他提出了基于PMI的EPR型实验的相对论协变处理方法。

在 MHI 的背景下，已经开发出了一种实现相对论协变性的替代方案，该方案基于这样一个思想：通过相应地改变对称群，可以将以非相对论量子力学中的 Galilean 群的 Casimir 算符表示的实现规则转移到相对论领域。在这种情况下，系统的确定值可观测量变为由 Poincaré群的 Casimir 算符表示的那些。由于质量算符和平方自旋算符是 Poincaré群的唯一 Casimir 算符，因此它们始终是确定值可观测量。这个结论与量子场论中的一个常见假设一致：基本粒子总是具有确定的质量和自旋值，并且这些值正是理论中不同种类的基本粒子的定义（Lombardi，Castagnino 和 Ardenghi 2010）。

这些各种提议和发展是在详细的技术调查的背景下出现的。这说明了模态方法的两个特点：一方面，它使用了精确的数学框架；另一方面，它是灵活和开放的，可以适应关于确定值可观测量集合规则的不同观点。可以预期会出现新的分支；例如，似乎有可能将许多世界诠释中用于定义不同“分支”的策略也纳入模态方法中，以定义单世界的可能性。无论展望如何，至少可以说模态方法已经引发了一系列关于量子理论结构的富有成果的研究。

## Bibliography

* Albert, D. and B. Loewer, 1990, “Wanted dead or alive: two attempts to solve Schrödinger’s paradox,” in *Proceedings of the PSA 1990*, Vol. 1, A. Fine, M. Forbes, and L. Wessels (eds.), East Lansing, Michigan: Philosophy of Science Association, pp. 277–285.
* –––, 1991, “Some alleged solutions to the measurement problem,” *Synthese*, 88: 87–98.
* –––, 1993, “Non-ideal measurements,” *Foundations of Physics Letters*, 6: 297–305.
* Ardenghi, J. S., M. Castagnino, and O. Lombardi, 2009, “Quantum mechanics: modal interpretation and Galilean transformations,” *Foundations of Physics*, 39: 1023–1045.
* Ardenghi, J. S. and O. Lombardi, 2011, “The Modal-Hamiltonian Interpretation of quantum mechanics as a kind of ‘atomic’ interpretation,” *Physics Research International*, 2011: 379604.
* Ardenghi, J. S., O. Lombardi, and M. Narvaja, 2013, “Modal interpretations and consecutive measurements,” in *EPSA 2011: Perspectives and Foundational Problems in Philosophy of Science*, V. Karakostas, and D. Dieks (eds.), Berlin: Springer, pp. 207–217.
* Arntzenius, F., 1990, “Kochen’s interpretation of quantum mechanics,” in *Proceedings of the PSA 1990*, Vol. 1, A. Fine, M. Forbes, and L. Wessels (eds.), East Lansing, Michigan: Philosophy of Science Association, pp. 241–249.
* Bacciagaluppi, G., 1995, “A Kochen-Specker theorem in the modal interpretation of quantum mechanics,” *International Journal of Theoretical Physics*, 34: 1205–1216.
* –––, 1996, *Topics in the Modal Interpretation of Quantum Mechanics*. Dissertation, Cambridge University.
* –––, 1998, “Bohm-Bell dynamics in the modal interpretation,” in *The Modal Interpretation of Quantum Mechanics*, D. Dieks and P. Vermaas (eds.), Dordrecht: Kluwer Academic Publishers, pp. 177–211.
* –––, 2000, “Delocalized properties in the modal interpretation of a continuous model of decoherence,” *Foundations of Physics*, 30: 1431–1444.
* Bacciagaluppi, G. and M. Dickson, 1999, “Dynamics for modal interpretations,” *Foundations of Physics*, 29: 1165–1201.
* Bacciagaluppi, G., M. Donald, and P. Vermaas, 1995, “Continuity and discontinuity of definite properties in the modal interpretation,” *Helvetica Physica Acta*, 68: 679–704.
* Bacciagaluppi, G. and M. Hemmo, 1994, “Making sense of approximate decoherence,” in *Proceedings of the PSA 1994*, Vol. 1, D. Hull, M. Forbes, and R. Burian (eds.), East Lansing, Michigan: Philosophy of Science Association, pp. 345–354.
* –––, 1996, “Modal interpretations, decoherence and measurements,” *Studies in History and Philosophy of Modern Physics*, 27: 239–277.
* Ballentine, L., 1998, *Quantum Mechanics: A Modern Development*, Singapore: World Scientific.
* Barandes, J. and D. Kagan, 2014a, “A synopsis of the minimal modal interpretation of quantum theory,” *arXiv*: 1405.6754v3.
* –––, 2014b, “The minimal modal interpretation of quantum theory,” *arXiv*: 1405.6755v3.
* –––, 2020, “Measurement and quantum dynamics in the minimal modal interpretation of quantum theory,” *Foundations of Physics*, 50: 1189–1218.
* Bell, J. S., 1984, “Beables for quantum field theory,” in *Speakable and Unspeakable in Quantum Mechanics* (1987), Cambridge: Cambridge University Press, pp. 173–180.
* Bene, G., 1997, “Quantum reference systems: A new framework for quantum mechanics,” *Physica A*, 242: 529–565.
* Bene, G. and D. Dieks, 2002, “A perspectival version of the modal interpretation of quantum mechanics and the origin of macroscopic behavior,” *Foundations of Physics*, 32: 645–671.
* Berkovitz, J. and M. Hemmo, 2005, “Can modal interpretations of quantum mechanics be reconciled with relativity?,” *Philosophy of Science*, 72: 789–801.
* –––, 2006, “A new modal interpretation in terms of relational properties,” in *Physical Theory and its Interpretation: Essays in honor of Jeffrey Bub*, W. Demopoulos, and I. Pitowsky (eds.), New York: Springer, pp.1–28.
* Bohm, D., 1952, “A suggested interpretation of the quantum theory in terms of ‘hidden’ variables, I and II,” *Physical Review*, 85: 166–193.
* Brown, H., M. Suárez, and G. Bacciagaluppi, 1998, “Are ‘sharp values’ of observables always objective elements of reality?,” in *The Modal Interpretation of Quantum Mechanics*, D. Dieks and P. Vermaas (eds.), Dordrecht: Kluwer Academic Publishers, pp. 69–101.
* Bub, J., 1992, “Quantum mechanics without the projection postulate,” *Foundations of Physics*, 22: 737–754.
* –––, 1994, “On the structure of quantal proposition systems,” *Foundations of Physics*, 24: 1261–1279.
* –––, 1997, *Interpreting the Quantum World*, Cambridge: Cambridge University Press.
* Bub, J. and R. Clifton, 1996, “A uniqueness theorem for interpretations of quantum mechanics,” *Studies in History and Philosophy of Modern Physics*, 27: 181–219.
* Bub, J., R. Clifton, and S. Goldstein, 2000, “Revised proof of the uniqueness theorem for ‘no collapse’ interpretations of quantum mechanics,” *Studies in History and Philosophy of Modern Physics*, 31: 95–98.
* Bueno, O., 2014, “Constructive empiricism, partial structures and the modal interpretation of quantum mechanics,” *Quanta*, 3: 1–15.
* Calosi, C., 2018, “Quantum monism: an assessment,” *Philosophical Studies*, 175: 3217–3236.
* Castagnino, M., S. Fortin, and O. Lombardi, 2010, “Is the decoherence of a system the result of its interaction with the environment?,” *Modern Physics Letters A*, 25: 1431–1439.
* Clifton, R., 1995a, “Independently motivating the Kochen-Dieks modal interpretation of quantum mechanics,” *The British Journal for the Philosophy of Science*, 46: 33–57.
* –––, 1995b, “Making sense of the Kochen-Dieks ‘no-collapse’ interpretation of quantum mechanics independent of the measurement problem,” *Annals of the New York Academy of Science*, 755: 570–578.
* –––, 1995c, “Why modal interpretations of quantum mechanics must abandon classical reasoning about the physical properties,” *International Journal of Theoretical Physics*, 34: 1302–1312.
* –––, 1996, “The properties of modal interpretations of quantum mechanics,” *The British Journal for the Philosophy of Science*, 47: 371–398.
* –––, 2000, “The modal interpretation of algebraic quantum field theory,” *Physics Letters A*, 271: 167–177.
* Cohen, D. W., 1989, *An Introduction to Hilbert Space and Quantum Logic*, New York: Springer-Verlag.
* Da Costa, N. and O. Lombardi, 2014, “Quantum mechanics: ontology without individuals,” *Foundations of Physics*, 44: 1246–1257.
* Da Costa, N., O. Lombardi, and M. Lastiri, 2013, “A modal ontology of properties for quantum mechanics,” *Synthese*, 190: 3671–3693.
* De Witt, B. S. M., 1970, “Quantum mechanics and reality,” *Physics Today*, 23: 30–35.
* Dickson, M., 1994, “Wavefunction tails in the modal interpretation,” in *Proceedings of the PSA 1994*, Vol. 1, D. Hull, M. Forbes, and R. Burian (eds.), East Lansing, Michigan: Philosophy of Science Association, pp. 366–376.
* –––, 1995a, “Faux-Boolean algebras, classical probability, and determinism,” *Foundations of Physics Letters*, 8: 231–242.
* –––, 1995b, “Faux-Boolean algebras and classical models,” *Foundations of Physics Letters*, 8: 401–415.
* Dickson, M. and R. Clifton, 1998, “Lorentz-invariance in modal interpretations,” in *The Modal Interpretation of Quantum Mechanics*, D. Dieks and P. Vermaas (eds.), Dordrecht: Kluwer Academic Publishers, pp. 9–48.
* Dieks, D., 1988, “The formalism of quantum theory: an objective description of reality?,” *Annalen der Physik*, 7: 174–190.
* –––, 1989, “Resolution of the measurement problem through decoherence of the quantum state,” *Physics Letters A*, 142: 439–446.
* –––, 1998, “Preferred factorizations and consistent property attribution”, in *Quantum Measurement: Beyond Paradox*, R. Healey and G. Hellman (eds.), Minneapolis: University of Minnesota Press, pp. 144–160.
* –––, 2002, “Events and covariance in the interpretation of quantum field theory,” in *Ontological Aspects of Quantum Field Theory*, M. Kuhlmann, H. Lyre, and A. Wayne (eds.), Singapore: World Scientific, pp. 215–234.
* –––, 2009, “Objectivity in perspective: relationism in the interpretation of quantum mechanics,” *Foundations of Physics*, 39: 760–775.
* –––, 2017, “Niels Bohr and the formalism of quantum mechanics,” in J. Faye and H. J. Folse (eds.), *Niels Bohr and the Philosophy of Physics: Twenty-First-Century Perspectives*, London: Bloomsbury Academic, pp. 303–333.
* –––, 2019, “Quantum mechanics and perspectivalism,” in O. Lombardi, S. Fortin, C. López, and F. Holik (eds.), *Quantum Worlds: Perspectives on the Ontology of Quantum Mechanics*, Cambridge: Cambridge University Press, pp. 51–70.
* –––, 2021, “Modal interpretations of quantum mechanics,” in O. Freire (ed.), *Oxford Handbook of the History of Interpretations of Quantum Mechanics*, Oxford: Oxford University Press, Ch. 47.
* Dieks, D. and P. Vermaas (eds.), 1998, *The Modal Interpretation of Quantum Mechanics*, Dordrecht: Kluwer Academic Publishers.
* Donald, M., 1998, “Discontinuity and continuity of definite properties in the modal interpretation,” in *The Modal Interpretation of Quantum Mechanics*, D. Dieks and P. Vermaas (eds.), Dordrecht: Kluwer Academic Publishers, pp. 213–222.
* Earman, J. and L. Ruetsche, 2005, “Relativistic invariance and modal interpretations,” *Philosophy of Science*, 72: 557–583.
* Elby, A., 1993, “Why ‘modal’ interpretations of quantum mechanics don’t solve the measurement problem,” *Foundations of Physics Letters*, 6: 5–19.
* Everett, H., 1957, “*Relative state* formulation of quantum mechanics,” *Review of Modern Physics*, 29: 454–462.
* Fortin, S., O. Lombardi, and J. C. Martínez González, 2018, “A new application of the modal-Hamiltonian interpretation of quantum mechanics: the problem of optical isomerism,” *Studies in History and Philosophy of Modern Physics*, 62: 123–135.
* Frauchiger, D. and R. Renner, 2018, “Quantum theory cannot consistently describe the use of itself,” *Nature Communications*, 9: 3711.
* French, S. and D. Krause, 2006, *Identity in Physics: A Historical, Philosophical and Formal Analysis*, Oxford: Oxford University Press.
* Gambetta, J. and H. M. Wiseman, 2003, “Interpretation of non-Markovian stochastic Schrödinger equations as a hidden-variable theory,” *Physical Review A*, 68: 062104.
* –––, 2004, “Modal dynamics for positive operator measures,” *Foundations of Physics*, 34: 419–448.
* Healey, R., 1989, *The Philosophy of Quantum Mechanics: An Interactive Interpretation*, Cambridge: Cambridge University Press.
* –––, 1995, “Dissipating the quantum measurement problem,” *Topoi*, 14: 55–65.
* Hemmo, M. and J. Berkovitz, 2005, “Modal interpretations of quantum mechanics and relativity: a reconsideration,” *Foundations of Physics*, 35: 373–397.
* Hollowood, T., 2013a, “The Copenhagen interpretation as an emergent phenomenon,” *Journal of Physics A: Mathematical and Theoretical*, 46: 325302.
* –––, 2013b, “New modal quantum mechanics,” *arXiv*: 1312.4751v1.
* –––, 2014, “The emergent Copenhagen interpretation of quantum mechanics,” *Journal of Physics A: Mathematical and Theoretical*, 47: 18530.
* Hughes, R. I. G., 1989, *The Structure and Interpretation of Quantum Mechanics*, Cambridge. Massachusetts: Harvard University Press.
* Kitajima, Y., 2004, “A remark on the modal interpretation of algebraic quantum field theory,” *Physics Letters A*, 331: 181–186.
* Kochen, S., 1985, “A new interpretation of quantum mechanics,” in *Symposium on the Foundations of Modern Physics 1985*, P. Mittelstaedt and P. Lahti (eds.), Singapore: World Scientific, pp. 151–169.
* Kochen, S. and E. Specker, 1967, “The problem of hidden variables in quantum mechanics,” *Journal of Mathematics and Mechanics*, 17: 59–87.
* Ladyman, J., 1998, “What is structural realism?,” *Studies in History and Philosophy of Science*, 29: 409–424.
* Laudisa, F. and C. Rovelli, 2021, “Relational quantum mechanics,” in *The Stanford Encyclopedia of Philosophy*, Spring 2021 Edition, Edward N. Zalta (ed.), URL = <https://plato.stanford.edu/archives/spr2021/entries/qm-relational/>.
* Lombardi, O., J. S. Ardenghi, S. Fortin, and M. Castagnino, 2011, “Compatibility between environment-induced decoherence and the modal-Hamiltonian interpretation of quantum mechanics,” *Philosophy of Science*, 78: 1024–1036.
* Lombardi, O. and M. Castagnino, 2008, “A modal-Hamiltonian interpretation of quantum mechanics,” *Studies in History and Philosophy of Modern Physics*, 39: 380–443.
* Lombardi, O., M. Castagnino, and J. S. Ardenghi, 2010, “The modal-Hamiltonian interpretation and the Galilean covariance of quantum mechanics,” *Studies in History and Philosophy of Modern Physics*, 41: 93–103.
* Lombardi, O. and D. Dieks, 2016, “Particles in a quantum ontology of properties,” in *Metaphysics in Contemporary Physics*, T. Bigaj, and C. Wüthrich (eds.), Leiden: Brill-Rodopi, pp. 123–143.
* Lombardi, O., S. Fortin, and C. López, 2015, “Measurement, interpretation and information,” *Entropy*, 17: 7310–7330.
* Maudlin, T., 1995, “Three measurement problems,” *Topoi*, 14: 7–15.
* Menzel, C., 2018, “Actualism,” in *The Stanford Encyclopedia of Philosophy*, Summer 2018 Edition, Edward N. Zalta (ed.), URL=<https://plato.stanford.edu/archives/sum2018/entries/actualism/>).
* Myrvold, W., 2002, “Modal interpretations and relativity,” *Foundations of Physics*, 32: 1773–1784.
* –––, 2018, “Philosophical issues in quantum theory,” in *The Stanford Encyclopedia of Philosophy*, Fall 2018 Edition, Edward N. Zalta (ed.), URL=<https://plato.stanford.edu/archives/fall2018/entries/qt-issues/>).
* Nakayama, K., 2008a, “Reformulation of a modal interpretation of quantum mechanics in the topos M-set,” *Ryokoku Journal of Humanities and Sciences*, 29: 159–168.
* –––, 2008b, “Topos-theoretic extension of a modal interpretation of quantum mechanics,” *International Journal of Theoretical Physics*, 47: 2065–2094.
* Oldofredi, A., 2021, “The bundle theory approach to relational quantum mechanics,” *Foundations of Physics*, 51: 1–22.
* Oldofredi, A. and C. López, 2020, “On the classification between ψ-ontic and ψ-epistemic ontological models,” *Foundations of Physics*, 50: 1315–1345.
* Reeder, N. and R. Clifton, 1995, “Uniqueness of prime factorizations of linear operators in quantum mechanics,” *Physics Letters A*, 204: 198–204.
* Rovelli, C., 1996, “Relational quantum mechanics,” *International Journal of Theoretical Physics*, 35: 1637–1678.
* Rovelli, C. and M. Smerlak, 2007, “Relational EPR,” *Foundations of Physics*, 37: 427–445.
* Ruetsche, L., 1995, “Measurement error and the Albert-Loewer problem,” *Foundations of Physics Letters*, 8: 327–344.
* –––, 1996, “Van Fraassen on preparation and measurement,” *Philosophy of Science*, 63: S338–S346.
* –––, 2003, “Modal semantics, modal dynamics and the problem of state preparation,” *International Studies in the Philosophy of Science*, 17: 25–41.
* Schlosshauer, M., 2007, *Decoherence and the Quantum-to-Classical Transition*, Heidelberg-Berlin: Springer.
* Schrödinger, E., 1935, “Discussion of probability relations between separated systems,” *Proceedings of the Cambridge Philosophical Society*, 31: 555–563.
* Suárez, M., 2004, “Quantum selections, propensities and the problem of measurement,” *The British Journal for the Philosophy of Science*, 55: 219–255.
* Sudbery, A., 2002, “Diese verdammte Quantenspringerei,” *Studies in History and Philosophy of Modern Physics*, 33: 387–411.
* van Fraassen, B. C., 1972, “A formal approach to the philosophy of science,” in *Paradigms and Paradoxes: The Philosophical Challenge of the Quantum Domain*, R. Colodny (ed.), Pittsburgh: University of Pittsburgh Press, pp. 303–366.
* –––, 1974, “The Einstein-Podolsky-Rosen paradox,” *Synthese*, 29: 291–309.
* –––, 1991, *Quantum Mechanics*, Oxford: Clarendon Press.
* –––, 1997, “Modal interpretation of repeated measurement: A rejoinder to Leeds and Healey,” *Philosophy of Science*, 64: 669–676.
* –––, 2010, “Rovelli’s world,” *Foundations of Physics*, 40: 390–417.
* Vermaas, P., 1996, “Unique transition probabilities in the modal interpretation,” *Studies in History and Philosophy of Modern Physics*, 27: 133–159.
* –––, 1997, “A no-go theorem for joint property ascriptions in modal interpretations of quantum mechanics,” *Physical Review Letters*, 78: 2033–2037.
* –––, 1998, “The pros and cons of the Kochen-Dieks and the atomic modal interpretation,” in *The Modal Interpretation of Quantum Mechanics*, D. Dieks and P. Vermaas (eds.), Dordrecht: Kluwer Academic Publishers, pp. 103–148.
* –––, 1999, *A Philosopher’s Understanding of Quantum Mechanics: Possibilities and Impossibilities of a Modal Interpretation*, Cambridge: Cambridge University Press.
* Vermaas, P. and D. Dieks, 1995, “The modal interpretation of quantum mechanics and its generalization to density operators,” *Foundations of Physics*, 25: 145–158.
* Vink, J., 1993, “Quantum mechanics in terms of discrete beables,” *Physical Review A*, 48: 1808–1818.
* Zurek, W. H., 1981, “Pointer basis of quantum apparatus: into what mixtures does the wave packet collapse?,” *Physical Review D*, 24: 1516–1525.
* –––, 2003, “Decoherence, einselection, and the quantum origins of the classical,” *Reviews of Modern Physics*, 75: 715–776.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=qm-modal). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/qm-modal/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=qm-modal&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](http://philpapers.org/sep/qm-modal/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

* French, S., 2020, “[What is this thing called structure? (Rummaging in the toolbox of metaphysics for an answer)](http://philsci-archive.pitt.edu/id/eprint/16921),” unpublished manuscript, PhiSci Archives.
* Terekhovich, V., 2019, “[Modal approaches in metaphysics and quantum mechanics](https://arxiv.org/abs/1909.10046v1),” manuscript at arXiv.org. Published in Russian in *Metaphysics*, 2015, 1(15): 129–152.

## Related Entries

[quantum mechanics](https://plato.stanford.edu/entries/qm/) | [quantum mechanics: Bohmian mechanics](https://plato.stanford.edu/entries/qm-bohm/) | [quantum mechanics: Everettian](https://plato.stanford.edu/entries/qm-everett/) | [quantum mechanics: Kochen-Specker theorem](https://plato.stanford.edu/entries/kochen-specker/) | [quantum mechanics: many-worlds interpretation of](https://plato.stanford.edu/entries/qm-manyworlds/) | [quantum mechanics: relational](https://plato.stanford.edu/entries/qm-relational/) | [quantum mechanics: the role of decoherence in](https://plato.stanford.edu/entries/qm-decoherence/) | [quantum theory: philosophical issues in](https://plato.stanford.edu/entries/qt-issues/) | [quantum theory: the Einstein-Podolsky-Rosen argument in](https://plato.stanford.edu/entries/qt-epr/)

### Acknowledgments

As of the December 2012 update, the credited authors for this entry are Olimpia Lombardi and Dennis Dieks. The [original version of this entry](https://plato.stanford.edu/archives/fall2007/entries/qm-modal/) (published in 2002, last archived in Fall 2007) was authored solely by Michael Dickson and we acknowledge that some sentences of that first version are still part of the current entry.

[Copyright © 2021](https://plato.stanford.edu/info.html#c) by  
Olimpia Lombardi <[*olimpiafilo@gmail.com*](mailto:olimpiafilo%40gmail%2ecom)>  
Dennis Dieks <[*D.G.B.J.Dieks@phys.uu.nl*](mailto:D%2eG%2eB%2eJ%2eDieks%40phys%2euu%2enl)>
