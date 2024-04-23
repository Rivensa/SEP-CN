# 关系性量子力学 relational (Federico Laudisa and Carlo Rovelli)


*首次发表于2002年2月4日；实质性修订于2019年10月8日。*

关系性量子力学（RQM）是当今最受讨论的量子力学解释之一。它于 1996 年提出，其远期动机是量子引力（Rovelli 1996）；对它的兴趣在过去几十年中缓慢但稳定地增长。RQM 本质上是对经典教科书“哥本哈根”解释的改进，其中哥本哈根观察者的角色不仅限于经典世界，而可以由任何物理系统扮演。RQM 拒绝对波函数（更一般地说，对量子态）进行本体论解读：波函数或量子态仅起辅助作用，类似于经典力学的哈密顿-雅可比函数。这并不意味着拒绝本体论承诺：RQM 基于由物理变量描述的物理系统的本体论，就像经典力学中一样。与经典力学的区别在于：（a）变量仅在相互作用时取值，（b）它们取的值仅相对于受相互作用影响的（其他）系统。这里的“相对”是指在经典力学中，速度是相对于另一个系统的属性。因此，RQM 将世界描述为一个稀疏相对事件的演化网络，由物理变量的点状相对值描述。

RQM 的基本物理假设是以下假设：相对于 S'的（未来）变量值的概率分布取决于相对于 S'的（过去）变量值，而不取决于相对于另一个系统 S''的（过去）变量值。

这种解释不需要假设存在一个经典世界来进行阐述，也不需要特殊的观察者系统；它不赋予任何特殊的角色给测量。相反，它假设任何物理系统都可以扮演哥本哈根的观察者的角色，任何相互作用都可以视为一次测量。由于上述假设，这是可能的，而不会改变量子理论的预测，因为系统 S'观察到的干涉不会被相对于不同系统 S''的变量实现所抹去（当然，它可能会被退相干抑制）。通过这种方式，RQM 可以在不需要隐藏变量、多个世界、物理坍缩机制或特殊的心智、意识、主观性、代理人或类似物的情况下理解一个完全的量子世界。

为了达到这种简洁性，需要削弱经典力学的传统（“强”）实在论，其中物理变量被假设为具有非关联性的值，并且在每个时间点都存在。变量仅在相互作用时才取值的事实给出了一种稀疏的事件（或“闪光”）本体论；它们由所指的系统标记，为世界的表示增加了一层指示性。

RQM 是形而上学中立的，但它对强实在论持有强烈的关系立场（Laudisa 2019），在下面详细说明。由于与实在论的关系，RQM 被放置在各种哲学观点的背景下，包括建设性经验主义（van Fraassen 2010），新康德主义（Bitbol 2007 [其他互联网资源/OIR]，Bitbol 2010），最近的反单一主义（Dorato 2016）和结构实在论（Candiotto 2017）。 （另请参阅 Brown 2009，Wood 2010 [OIR]。）该解释与 QBism（Fuchs 2001, 2002 [OIR]）有共同之处，与 Healey 的实用主义方法（Healey 1989）特别是与 Zeilinger 和 Bruckner 讨论的量子理论观点（Zeilinger 1999，Brukner＆Zeilinger 2003）一致。

 

---

## 1. 主要思想

### 1.1 物理变量的值

RQM 的起点是量子力学不是关于波函数（或量子态）ψ的，而是关于物理变量的值。因此，RQM 假设的本体论仅包括具有取值的物理系统和变量，就像经典力学一样。例如，一个真实的事实是在某个时间 t，具有某个值 x 的粒子的位置。像这样的事实（“粒子在时间 t 处于 x 位置”）被称为“事件”或“量子事件”。量子理论是关于事件的。然而，在经典力学中，有两个一般性假设在量子理论中被放弃了。

在经典力学中，假设系统的所有变量在任何时间都有一个值。相反，RQM假设在自然界中通常情况下并非如此（Heisenberg 1925; Kochen & Specker 1967）。换句话说，这只是一个近似，只有在忽略量子现象时才成立。物理变量只在某些时间点上获得值，在其他时间点上没有值。换句话说，事件是离散的。这是Heisenberg在1925年找到量子力学关键的基本直觉；也就是说，在经典力学中有些问题是有意义的，但在自然界中却没有意义。例如，“当电子的z分量为12ℏ时，其自旋的y分量是多少？”这个问题是没有意义的：它既没有操作定义，也不需要用于对自然界的现实理解（有关现实主义的内容见下文）。那么，系统S的一般变量A何时获得值？事件何时发生？RQM的答案是：只有当系统S与第二个系统S'相互作用，并且该相互作用对S'的影响取决于变量A时，变量A才具有值。

(b) 在 RQM 中放弃了经典力学的第二个假设，即存在可以取绝对值的变量，即与任何其他系统无关的值。相反，RQM 假设所有（偶然的）物理变量都是关系性的。（偶然变量是指在经典理论中由相空间函数表示的变量。）这些变量取的任何值都是相对于第二个物理系统（隐含或明确地）标记的。如果系统 S 的变量 A 在与第二个系统 S'的相互作用中取一个值，那么它取的值只是相对于 S'的。事件的实现始终是相对于一个系统的。这个假设的具体含义是上面的假设，即系统 S 对 S'的影响的未来方式（以概率的形式）取决于 S 的变量相对于 S'取的值，但是系统 S 对第三个系统 S''的未来方式则不取决于这些值。与任意系统 S'相关的所有事件的集合，以及这些事件所带来的概率预测，被称为“观察者”S'的“视角”。

因此，RQM 的基础是：“不同的观察者可以对同一组事件给出不同的解释”（Rovelli 1996: 1643）。教科书上的量子力学是对单个观察者视角的完整描述，但它忽略了该观察者系统对其他系统视角的影响。当观察者对其他系统进行作用时，RQM 强调观察者本身表现为一个量子系统。视角之间的关系将在下面讨论。

### 1.2 相对变量：“不同的观察者可以对同一组事件给出不同的解释”

相对变量是其值不依赖于单个系统，而是依赖于两个系统的变量。一个众所周知的例子是经典力学中物体的速度。速度始终是相对于第二个物体的，无论是隐含地还是明确地。在经典力学中，没有“单个物体的速度”，与其他物体无关。其他众所周知的例子包括电势（只有相对于另一个导体的电势具有物理意义）和位置（只有相对于其他物体的位置具有物理意义）。关系量子力学在这个方向上迈出了更大的一步，假设我们可以通过假设所有物理变量在这个意义上都是关系性的来理解量子力学。

有时错误地认为 RQM 是一种解释，其中主体或代理起到了作用。误解的根源在于相对和主观之间的混淆。当我们说我们相对于太阳的速度是 11 千米/秒时，我们并不是假设太阳具有主观性。当我们说一个路标和一个路口之间的距离是 100 米时，我们并不认为路口是一个代理。从自然主义的角度来看，一个人、一个代理、一个主体都是物理系统。另一方面，这个人、代理或主体所关联的世界是通过与她所在的物理系统相关的变量值来描述的。这就像说一个居住在地球上的主体看到宇宙在旋转，因为地球在自转。说 RQM 需要主体或代理是同样的错误，就像说我们对太阳、月亮和星星围绕地球的日常旋转的解释需要考虑代理或主观性一样：这是显而易见的胡说八道。在 RQM 中没有任何主观的、唯心的或心理的东西。

### 1.3 观察者和测量

在教科书的介绍中，量子力学是关于当一个“观察者”对一个量子系统进行“测量”时的测量结果。如果所有物理系统都是量子的，那么什么是观察者？什么算作测量？常见的答案包括观察者是宏观的，退相干的开始，不可逆性，信息的记录等。关系性量子力学不使用这些。任何系统，无论其大小、复杂性或其他因素，都可以扮演教科书中的量子力学观察者的角色。然而，给定观察者的“测量结果”只是相对于该系统的量子系统变量的值。特别是，它们不会影响相对于其他系统的事件。在同样的精神下，量子力学的教科书介绍提到“测量结果”。在关系性解释中，任何相互作用都被视为测量，只要一个系统影响另一个系统，并且这种影响取决于第一个系统的变量。每个物理对象都可以被视为定义一个视角，所有物理量的值都可以参照该视角。

因此，根据关系性量子力学，量子力学不是关于一个实体ψ的动力学理论，从中我们的经验世界以某种方式出现。相反，它是关于我们经验中的标准世界的理论，描述了常规物理变量在相互作用中取值的方式，以及决定哪些值有可能实现的过渡概率，假设其他值已经实现。

### 1.4 波函数

波函数，以及更一般的量子态 ψ，在几种量子理论的表述中被解释为现实的。从 RQM 的角度来看，这正是导致对量子理论的困惑的原因（Rovelli 2018）。RQM 规避了关于波函数实在性的定理（Leifer 2014; Pusey, Barrett, & Rudolph 2012），因为它不是一个强实在主义理论——在下面定义的意义上，这是这些定理的一个隐含假设。在 RQM 的背景下解释波函数类似于在经典力学中解释 Hamilton-Jacobi 泛函：一种用于基于某些给定知识计算未来事件概率的理论工具。

波函数 ψ 与 Hamilton-Jacobi 泛函 S 之间的关系不仅仅是类比，因为在半经典近似中，后者近似于前者（ψ∼expiS/ℏ）。这个事实可以被视为反对对 ψ 的现实解释的一个论据。澄清物理理论数学工具中某个量的解释的一种方法是研究在解释清晰的近似情况下，这个量归约为什么。例如，一个经典粒子的 Hamilton-Jacobi 函数没有现实的解释。请注意，如果我们给它一个现实的解释，我们将产生与波函数类似的神秘坍缩和跳跃。避免对量子态进行现实解释可以避免跳跃和坍缩。（Rovelli 2016 中还提供了反对对 ψ 的现实解释的另一个论据。）

在经典力学中，我们可以不使用 Hamilton-Jacobi 泛函。这证明了它缺乏本体论的重量。同样，在量子理论中，我们也可以不使用ψ。证据是，量子力学形式主义的完整早期发展（Heisenberg 1925; Born & Jordan 1925; Dirac 1925; Born, Heisenberg, & Jordan 1926）早于引入ψ的工作（Schroedinger 1926）！量子力学可以在不引用量子态的情况下进行阐述，作为一种事件序列的概率理论。例如，可以通过给出可观测量的非交换代数和表示时间演化的代数的一参数自同构群，以及代数上的单一正线性函数来阐述量子理论。或者，可以通过变量值集合之间的转移概率来阐述量子理论；这些可以直接计算，例如使用路径积分方法。状态ψ是一种方便而不是必要的工具。

那么，在关系性解释中，量子态是什么？它是一个指涉两个系统而不是单个系统的数学工具。它编码了第一个系统与第二个系统相互作用时已经实现的变量值（Groenewold 1957）；因此，它编码了我们可以相对于第二个系统预测这些变量未来值的任何信息。换句话说，量子态ψ只能被解释为一个信息汇编，这些信息是通过特定的相互作用历史而假设、已知或通过测量收集的：系统与第二个“观测”系统之间的相互作用。以这种方式理解，量子态始终且只能是 Everett（1957）所说的相对态。在这个意义上，关系性量子力学是“Everettian”的；它与许多世界诠释不同，后者基于对普遍波函数的现实主义解释，在关系性量子力学中被拒绝。

### 1.5. 量子叠加：猫可以是半死半活的吗？

如果ψ'和ψ''是系统的两个（正交的）量子态，量子力学预测系统也可以处于状态ψ=(ψ'+ψ'')/2–√。这就是叠加原理，是该理论的基石。例如，如果ψ'是一只活猫的状态，ψ''是一只死猫的状态，那么ψ就是一只猫处于死和活的量子叠加状态；理论预测这是一只猫可能的状态。那么为什么我们从来没有看到半死半活的猫呢？也就是说，为什么我们没有看到宏观物体处于量子叠加状态？

答案是，像ψ=(ψ'+ψ'')/2–√这样的状态的存在并不意味着我们应该“看到叠加态”：根据教科书上的量子理论，我们“看到”的，也就是我们测量的是自伴算符的本征值，而不是量子态。测量得到的本征值总是唯一确定的，从不“叠加”。

那么，状态处于叠加态意味着什么呢？首先，它意味着如果一个可观测量在ψ'中的值为 a'，在ψ''中的值为 a''，那么对系统的任何观测都会给出 a'或 a''，每个的概率都是 1/2。其次，任何在(ψ'，ψ'')基底中不对角的可观测量的测量结果的概率分布将受到干涉的影响：也就是说，它不会是ψ'和ψ''中可观测量平均值的平均值。这就是处于量子叠加态的意义。因此，对于问题“为什么我们从来没有看到一半活着一半死的猫？”的答案是：因为量子理论预测我们从来不会看到这种情况。它预测我们要么看到活着的猫，要么看到死去的猫。它还预测我们原则上应该能够预测两个状态之间的干涉效应。这些干涉效应在宏观系统（如猫）的情况下被退相干强烈抑制，因此理论实际上预测它们极难观察到，与我们的经验相符。

然而，在量子力学中，如果我们问猫本身会感知到什么，就会出现一个问题。假设猫的大脑测量它的心脏是否在跳动。理论预测，大脑要么发现心脏在跳动，要么发现心脏不在跳动。在传统的量子力学中，这意味着ψ会坍缩为ψ'或ψ''。反过来，这意味着这两个状态之间不会发生进一步的干涉效应。这与干涉效应是真实存在的结论相矛盾，尽管由于退相干的缘故，干涉效应很小。这个问题通过 RQM 中的上述假设得到解决：作为一个量子系统，猫对外部系统的影响不受猫的心脏如何影响其大脑的具体方式的影响。也就是说，猫与外部世界的状态在猫的一部分与另一部分相互作用时不会坍缩。

## 2. 相关问题

### 2.1 信息

RQM 的早期表述是用信息论的语言进行的（Rovelli 1996）。量子态是编码观测系统 S'对量子系统 S 可能具有的信息的一种方式，用于预测 S 对 S'的未来影响方式。这些信息由 S 过去对 S'的影响方式决定。Rovelli（1996）提出了一个希望，即基于简单的信息假设可以对量子形式主义进行完整重建。提出了两个主要的假设：

* (i)对于具有紧凑相空间的系统，相关信息是有限的，
* (ii)总是可以获得新信息。

这两个假设并不相互矛盾，因为当收集到新信息时，一些先前的相关信息变得不再相关。这里的“相关”意味着它会影响未来的概率。经过一番思考可以发现，第一个假设暗示了量子理论的特征离散性，第二个假设暗示了海森堡的不确定性。Zeilinger 和 Bruckner（Zeilinger 1999; Brukner & Zeilinger 2003）独立提出了非常相似的假设。

正如 Dorato（2017）所强调的那样，信息最好不要被理解为一个主要概念。它必须在物理上以其他事物来定义；因此，在爱因斯坦（1919）的“原理理论”中，它可以起到重要的作用。在 RQM 中，信息被定义为一个物理系统对另一个系统的相对信息（在 Shannon 的意义上）。相对信息是两个系统之间的物理相关性（参见 Rovelli 1996），即由于物理约束的存在，组合系统可能状态数与两个系统状态数的乘积之差的度量。因此，我们说一个系统的变量 OA 对另一个系统的变量 A 具有信息，如果 A 和 OA 可以取的值是相关的。在 Shannon 的精神中，这是一个非常弱的信息定义，没有心理、语义或认知方面的内容。RQM 早期工作的强大信息观点影响了后来发展的多个信息理论方法对量子理论基础的研究（见下文）。

### 2.2 离散性

离散性不是量子理论的附属特征：它是其最典型的特征（也是该理论的名称来源）。

在量子理论中，离散性以两种相关方式出现。首先，关于系统状态的信息量在其相空间的有限区域 R 中可以收集到。它由 R 的 Liouville 测度除以普朗克常数，每个自由度一份来给出。这就是导致离散光谱的原因。连续光谱需要无限相空间，并且可以看作是理想化的效应。量子力学的离散性由这两个信息假设中的第一个所捕捉到。

其次，量子力学以特定离散时间的变量值来描述世界。这种离散性的第二个方面直接由 RQM 的稀疏（或“闪光”）本体论解释。例如，量子粒子的历史既不是时空中的连续线（如经典力学），也不是时空上的连续波函数。相对于任何其他系统，它是一组在时空中局部化的离散相互作用。

RQM 的闪光本体论似乎引发了一个困难：是什么决定了事件发生的时机？问题在于确定某个时刻，例如，测量发生的困难。这个问题在 Rovelli（1998）中得到了解答，观察到量子力学本身对测量何时发生给出了（概率性的）预测。这是因为问题“是否发生了测量”的含义是确定观测系统 S 中的指针变量 OA 是否与系统 A 的测量变量 A 适当地相关。反过来，这是一个有意义的物理问题，因为可以通过测量 A 和 OA 并检查它们是否一致来经验地提出。

### 2.3 与其他解释的比较

澄清量子力学解释的一种方法是将其与最常讨论的替代方案进行比较。

教科书哥本哈根：在很大程度上，RQM 是标准教科书解释的一种完善。不同之处在于后者假设存在一个经典世界或经典观察者，并描述量子系统如何通过相互作用影响它。相反，关系性解释假设这种描述对任何物理系统都是有效的。因此，RQM 是一种“民主化”的哥本哈根，其中任何物理系统都可以扮演单个观察者的角色。

多世界：RQM 和多世界诠释（参见 Vaidman 2002 [2018]）都源于 Everett（1957）的工作。两者都试图通过添加一层指标性来解决量子理论的谜团。在 RQM 中，变量相对于其他物理系统具有值。在多世界中，变量相对于宇宙波函数的分支具有值。在这两种解释中，测量或观察者没有先验特殊角色。区别在于深刻不同的本体论承诺：多世界诠释基于宇宙波函数的现实主义解释，它遵循确定性演化定律。这意味着多世界诠释必须努力恢复海森堡不确定性（通过分支指标性）、概率（通过主观解释概率）和离散性。RQM 在其基础上很容易实现所有这些。另一方面，多世界诠释基于（根据一些人的说法，夸大的）无废话的现实主义形而上学，这在 RQM 中是不允许的。通过简单的观察，可以将模态性转化为多世界实在论，即以实际性换取指标性。

隐藏变量（玻姆）：隐藏变量理论，其中玻姆理论（Bohm 1952）是最好的例子，提供了量子力学的现实主义和确定性解释。RQM 和玻姆理论之间的相似之处在于对某些变量（如粒子的位置）的现实主义解释。不同之处在于 RQM 的稀疏本体论，与玻姆理论中隐含的原则上不可观测的数量的假设相比。

物理坍缩：物理坍缩理论，如 Ghirardi，Rimini 和 Weber（1986）以及 Penrose（1996），在 RQM 中与标准 QM 在物理上是可区分的，而在 RQM 中则假定 QM 在相反的经验指示下是正确的。

量子力学也有一些与关系性解释接近的解释：

Zeilinger Bruckner：关系性解释与 Zeilinger 和 Bruckner 提出的量子理论观点非常接近；特别是，几乎与 RQM 的原始公设完全相同的公设在(Zeilinger 1999, Brukner & Zeilinger 2003)中独立提出。这些想法产生了一些有趣的数学工作，旨在从信息论公设中精确推导量子理论的形式化。与 RQM 严密相关的版本请参见(Grinbaum 2005; Höhn 2017; Höhn & Wever 2017)。

QBism：Rovelli (1996)对信息的强调影响了 QBism 的诞生（参见 Fuchs 1998: 3）。RQM 和 QBism 之间存在相似之处（Fuchs 2001, 2002 [ OIR]）。一个相似之处是弃置被认为无意义的问题的强调。第二个相似之处是使用信息论的语言（Spekkens 2014）。不同之处主要在于对持有信息的主体的处理方式。在 RQM 中，这个主体是完全自然化的：它本身被认为是一个可以用量子理论描述的物理系统。这导致了比 QBism 更强的现实主义版本，并强调了所有变量的关系性。而在 QBism 中，重点是一个单一主体所持有的关于世界的信息，被视为首要。在 RQM 中，信息是一个物理系统对另一个系统的相对信息（在 Shannon 的意义上）；它不是首要的（参见 Dorato 2017）：它可以简单地在物理上理解为两个系统之间的相关性，可以被第三个系统观察到（Rovelli 1996）。

理查德·希利：希利的实用主义方法（希利 1989 年）与 RQM 共同的观点是，量子态不是对物理现实的描述，甚至不完整。它的主要功能是作为生成量子概率的（可有可无的）工具。主要区别在于对量子态相对于什么的强调。对于希利的实用主义观点，量子态的归属只相对于一个实际或潜在的观察者的视角（希利 2012 年）。在 RQM 中，值是客观的，并且相对于任何物理系统。将量子理论限制为仅由观察者使用并不是希利实用主义哲学的关注点；在自然主义的视角中，寻求一种在没有观察者的情况下仍然具有意义的自然理解更为重要。这与 RQM 和 QBism 之间的差异相同，但希利的立场更接近 RQM，因为 QBism 的量子态归属取决于观察者的认识状态，而对于希利来说，归属于系统的量子态仅取决于定义观察者视角的物理环境。

### 2.4 表示

量子力学解释的问题与提供表示的可能性问题密切相关：即对世界上发生的事情的描述。给出支持不同解释的图像的简单图像表示可能是有用的。想象在时间 t1 时，一个放射性原子被盖革计数器包围，在时间 t2 时，其中一个计数器发出声响，检测到衰变产物。在 t1-t2 的时间间隔内发生了什么？

* 根据教科书上的量子理论，一个经典困在原子核中的粒子的波函数会对称地泄漏出核外，填充核周围的空间。在检测的那一刻，这个波函数神奇地在除了特定的点击探测器之外的所有地方消失。
* 根据多世界诠释，所有的探测器都会点击。实际上，每个探测器在每个时间点都会点击，但宇宙的波函数会不断地分支成无数个分支：我们自己恰好处于其中一个分支，其中一个特定的探测器在一个特定的时间点点击。
* 根据玻姆诠释，波函数在空间中均匀泄漏，但与此同时，由这个波函数引导的相关粒子会蜿蜒曲折地移动，直到撞击到一个特定的探测器。
* 根据物理坍缩解释，波函数也均匀地泄漏出来，但当它对重型盖革探测器产生的影响开始使太多物质发生位移时，波函数会像教科书解释中那样坍缩，但是由一种尚未明确观察到的假设动力过程驱动（Ghirardi 2002 [2018]）。
* RQM 呢？按照海森堡的精神，自然界中没有实际的波函数，也没有关于粒子在 t1 和 t2 之间任何时刻相对于盖革计数器位置的事实。然而，可能存在其他事实。例如，粒子相对于途中的某个空气分子的位置。另一方面，这些事实与粒子相对于盖革计数器的位置无关，后者在 t2 时实现，并且其概率分布不依赖于粒子相对于空气分子的位置。

### 2.5 Frauchiger-Renner 实验和局域性

Frauchiger-Renner 思想实验（Frauchiger＆Renner 2018）可以被视为对 RQM 的间接支持，因为它具体化了“不同观察者可以对同一组事件给出不同解释”的想法，就像原始的 RQM 口号一样（Rovelli 1996：1463）。 Waaijer 和 van Neerven（2019 [OIR]）在 RQM 的概念框架中讨论了这个实验。

将 RQM 应用于 EPR 背景和量子非局域性问题最初在 Smerlak 和 Rovelli（2007）以及（Laudisa 2001）中进行了讨论。关于 RQM“局部”的一些说法受到了质疑，指出 RQM 在任何情况下都应该“被迫接受量子现象中某种形式的非局域性”（Laudisa 2019：227）。在 Martin-Dussaud，Rovelli 和 Zalamea（2019）中有一个更近期的讨论，其中指定了从 RQM 角度看量子理论是非局域的特定意义，并将其淡化。有关评论，请参见 Pienaar（2018 [OIR]）。

### 2.6 孤立主义？

乍看之下，RQM 可能会暗示一种透视唯我主义的形式，因为在某个系统 S'的透视中实现的变量值不一定与相对于另一个系统 S''实现的变量值相同。然而，这并非事实，这直接来自于量子理论本身。关键在于观察到任何物理比较本身就是一个量子相互作用。假设 S'通过测量 S 的变量 A 并将其存储到 S'的变量 A'中。这意味着相互作用已经在 A 和 A'之间创建了相关性。反过来，这意味着第三个系统测量 A 和 A'将肯定找到一致的值。也就是说：S'和 S''的观点在这方面是一致的，并且可以通过物理相互作用进行检验。

例如：想象实验者 S'测量电子 S 的自旋，并将自旋的值写在一张纸上。原则上，实验者 S''可以设计一个实验，她可以检测到由于两个分支之间的干涉而产生的效应，其中电子的自旋（和文本）具有一个或另一个值。但是，如果 S''测量自旋并阅读纸上的内容，她会发现实验者 S'看到的自旋与她自己看到的自旋相同。

为什么？因为量子理论预测如此，可以从以下内容中看出：相对于 S''，第一次相互作用产生了一个形式为的量子态

|自旋向上⟩×|带有文本“自旋向上”的纸⟩+|自旋向下⟩×|带有文本“自旋向下”的纸⟩

测量自旋会将状态投影到两个分支中的一个，而两个分支都导致一致性。因此，只要我们不追求隐藏在退相干背后的微妙干涉现象，RQM 意味着我们都“看到同一个世界”。

## 3. 一般评论

### 3.1 现实主义和关系性

RQM 的核心思想是将所有物理变量解释为关系性的，即指涉两个系统而不是单个系统，并将它们视为仅在相互作用中实现。随着我们对自然界的认识不断增加，关系性在其中发挥着越来越重要的作用。例如，经典力学中速度的关系性，广义相对论中的局域性，电磁学中的势能，非阿贝尔规范理论中的规范不变观测量等等。RQM 在这个方向上更进了一步。如果认真对待，这种超越性关系的哲学含义可能是沉重的。其中一个主要含义是对强实在论的削弱。

如果我们所说的实在论是指世界是“存在的”，与我们的心理状态或感知无关，那么 RQM 中没有什么与实在论相矛盾的地方。但是，如果我们所说的实在论是指每个子系统的每个变量在每个时间点都有一个单一值的更强假设，那么 RQM 会削弱这种强实在论。RQM 的本体论是一种稀疏的（“闪光”）关系量子事件本体论，被视为原始的，而不是从任何“基础”表示中推导出来的。

这种现实主义的削弱是与伽利略或爱因斯坦的相对论类似的方向，它们表明单个物体的速度或两个空间分离事件的同时性没有确切的事实。但这是更为激进的一步。在 Laudisa（2019）中指出，RQM 对主要过程的深层理论或基础动力学表示没有更深的证明：即量子事件在相互作用中的实现。这是在教科书量子理论中称为测量的过程，并伴随着状态减缩。量子力学给出了量子事件发生的概率，而不是描述它们发生的故事。RQM 并没有解决量子理论的这个核心方面：它被视为世界的事实。RQM 解决的是这个问题：任何时候一个系统影响另一个系统，它相对于这个其他系统发生。RQM 所做的是展示这与干涉效应的存在并不矛盾。但是，量子事件实现的核心离散性在 RQM 中并没有被“解释”：它被理解为量子理论描述自然运作的图景。

现实主义的削弱是对量子力学关系性解释所付出的“代价”。它可以与其他解释中的“代价”进行比较，例如多世界诠释中的膨胀本体论和本体论与我们所看到的世界之间的距离，玻姆理论中的不可观测变量的存在和洛伦兹不变性的丧失，等等。

每个“付出代价”的另一面是我们可以从量子理论的实证成功中获得的教训：例如，对于多世界诠释来说，教训是其他分支的真实存在；对于玻姆理论来说，教训是不可观测变量选择了一个优先参考系等等。对于 RQM 来说，量子理论的教训是当物理系统相互作用时，它们如何影响彼此（而不是物理系统的“存在方式”）的描述耗尽了对物理世界的所有陈述。物理世界必须被描述为一个相互作用组件的网络，孤立系统的“状态”或变量的值没有意义。物理系统的状态是它与周围系统之间的关系网络。世界的物理结构被确定为这种关系网络。在西方哲学中起重要作用的物质概念可能不适用于解释这门科学；也许“相互依赖”的想法[Nāgārjuna 1995]可以提供一个相关的哲学框架。

### 3.2 反应和批评

在van Fraassen（2010）中，Bas van Fraassen探索了“RQM所描绘的量子力学世界”（2010：390），澄清了相对于观察者而言什么是相对的，什么不是相对的。他集中关注RQM中表面上悖论的方面。观察者可以获得的信息受到限制，这些信息只能通过物理相互作用获得，在观察者进行测量时，第二个观察者对第一个观察者和其目标进行测量，甚至第三个观察者进来观察涉及前两个观察者的过程。当正确理解RQM中情况的表示时，van Fraassen得出结论，所有一致性问题都可以解决。另一方面，他还观察到，如果在RQM中，相对于观察者的系统状态本身并不相对于任何东西，那么就可以提出一个问题，即不同观察者之间的特定纠缠系统或其组成部分的状态之间存在什么关系。他提出了一个额外的假设，弱化了不同观察者对同一系统描述之间的关系，这禁止了由于视角的增加而引起的矛盾不一致性的可能性。

Laura Candiotto（2017）认为，对于RQM来说，最好的哲学框架是本体结构实在论（OSR）（Ladyman＆Ross 2007；French＆Ladyman 2011）。本体结构实在论旨在成为一种可辩护的科学实在论形式（Ladyman 2007 [2019]）；它主张关系优先于物质，作为自给自足的个体对象（Morganti 2011）。对于Candiotto来说，RQM是一种现实主义理论，它假设关系的概念（系统和仪器之间的物理相互作用）是原始的；对象作为关系的“节点”（French 2006）或过程的交叉点出现。缺乏观察者独立性并不意味着无法解释物质的结构，因为没有固有属性可以独立于它们的相互作用而被赋予系统，因此这种结构本身是关系性的，特别是依赖于观察者。通过信息交换的动态过程，关系可以被视为宇宙的构建基块。

RQM与本体结构实在论之间的关系也被Mauro Dorato（2016）强调过。Dorato对RQM进行了广泛评估，指出了其主要特点。他强调了RQM的两个方面。第一个是对量子理论的修正性而非描述性的形而上学解释；也就是说，如果与当代物理理论相矛盾，那么常识的核心假设必须被放弃。在这里，被放弃的是量子系统具有非关系性、固有本质的假设。RQM的形而上学之所以是修正性的，还有第二个原因。类似于多世界诠释，RQM并不建议改变量子理论的形式主义，而是修改我们解释形式主义的概念框架，从而修改我们的形而上学。Dorato观察到，价值的相对化意味着对对象或实体的概念本身的相对化，如果（i）拥有一些固有的、非纯粹的倾向性属性对于一个对象的身份至关重要，以及（ii）如果一个实体没有固有的身份，那么它就无法存在（参见纳伽尔朱那公元2世纪[1995]）。在RQM中，唯一的现实是由不同量子系统之间的相互作用所产生的事件，但即使这些事件也可以由不同的物理系统以不同的方式描述。这种相互作用不能以爱因斯坦的意义上的建设性理论来更加精确地描述，后者可以解释一个明确结果的产生而不仅仅是将其作为一个基本事实假设。Dorato得出结论，RQM中没有测量问题，因为RQM隐含地被构建为一个原则理论。他还考虑了Schaffer（2010）中定义的优先单一主义问题：Shaffer认为量子力学的纠缠是整个宇宙在其部分之前具有本体优先权的证据。 多拉托指出，RQM 对关系主义的坚决拥护反而具有激进的反整体主义后果。

多拉托指出的 RQM 的第二个特征是，因此，捕捉尚未相互作用的量子系统的本质的最佳方式是调动一种倾向性主义：将量子系统的状态相关属性归因于它们根据所受到的相互作用以某种方式显现的倾向性。倾向性主义存在于许多其他量子力学观点中（多拉托，2006 年），但在 RQM 的背景下特别适用。与量子比斯特对量子理论的解释不同，在 RQM 中，关系“S 相对于 S'显现 q”是对称的，这是 RQM 中量子系统和“观察者”处于同一水平的假设的简单结果。由于其关系性和倾向性方面，多拉托强调了在 RQM 中不能有普遍的变化流动，而只能有局部的、世界线依赖的和关系性的变化流动。这仍然被视为一种关系性的变化形式：没有普遍的生成潮流，只有交错的涟漪。由于物理系统只能相对于另一个系统而不是绝对地展示一系列事件的发生，所以在 RQM 中不能有宇宙时间，因此在广义相对论中，事件的时间顺序也不能被视为完全有序。在某种意义上，在 RQM 中没有宇宙的量子状态，或者说没有上帝的视角，因为宇宙只能从“在给定视角内”来描述。
## Bibliography

* Bitbol, Michel, 2010, *De l’intérieur du monde*, Paris: Flammarion. (Relational Quantum Mechanics is extensively discussed in Chapter 2.)
* Bohm, David, 1952, “A Suggested Interpretation of the Quantum Theory in Terms of ‘Hidden’ Variables. I”, *Physical Review*, 85(2): 166–179. doi:10.1103/PhysRev.85.166
* Born, M. and P. Jordan, 1925, “Zur Quantenmechanik”, *Zeitschrift für Physik*, 34(1): 858–888. doi:10.1007/BF01328531
* Born, M., W. Heisenberg, and P. Jordan, 1926, “Zur Quantenmechanik. II.”, *Zeitschrift für Physik*, 35(8–9): 557–615. doi:10.1007/BF01379806
* Brown, Matthew J., 2009, “Relational Quantum Mechanics and the Determinacy Problem”, *The British Journal for the Philosophy of Science*, 60(4): 679–695. doi:10.1093/bjps/axp017
* Brukner, Časlav and Anton Zeilinger, 2003, “Information and Fundamental Elements of the Structure of Quantum Theory”, in *Time, Quantum and Information*, Lutz Castell and Otfried Ischebeck (eds.), Berlin, Heidelberg: Springer Berlin Heidelberg, 323–354. doi:10.1007/978-3-662-10557-3_21
* Candiotto, Laura, 2017, “The Reality of Relations”, *Giornale di Metafisica*, 2017(2): 537–551. [[Candiotto 2017 preprint available online](http://philsci-archive.pitt.edu/14165/)]
* Dirac, Paul Adrien Maurice, 1925, “The Fundamental Equations of Quantum Mechanics”, *Proceedings of the Royal Society A: Mathematical, Physical and Engineering Sciences*, 109(752): 642–653. doi:10.1098/rspa.1925.0150
* Dorato, Mauro, 2006, “Properties and Dispositions: Some Metaphysical Remarks on Quantum Ontology”, in *Quantum Mechanics*, Angelo Bassi, Detlef Dürr, Tullio Weber and Nino Zanghi (eds), (AIP Conference Proceedings, 844), 139–157. doi:10.1063/1.2219359
* –––, 2016, “Rovelli’s Relational Quantum Mechanics, Anti-Monism, and Quantum Becoming”, in *The Metaphysics of Relations*, Anna Marmodoro and David Yates (eds.), Oxford: Oxford University Press, 235–262. doi:10.1093/acprof:oso/9780198735878.003.0014 [[Dorato 2006 preprint available online](http://arxiv.org/abs/1309.0132)]
* –––, 2017, “Dynamical versus Structural Explanations in Scientific Revolutions”, *Synthese*, 194(7): 2307–2327. doi:10.1007/s11229-014-0546-7 [[Dorato 2017 preprint available online](http://philsci-archive.pitt.edu/10982/)]
* Einstein, Albert, 1919 [1920] “Time, Space, and Gravitation”, Times (London), 28 November 1919, 13–14. Reprinted 1920, *Science*, 51(1305): 8–10. doi:10.1126/science.51.1305.8
* Everett, Hugh, 1957, “‘Relative State’ Formulation of Quantum Mechanics”, *Reviews of Modern Physics*, 29(3): 454–462. doi:10.1103/RevModPhys.29.454
* Frauchiger, Daniela and Renato Renner, 2018, “Quantum Theory Cannot Consistently Describe the Use of Itself”, *Nature Communications*, 9: article number 3711. doi:10.1038/s41467-018-05739-8
* French, Steven, 2006, “Structure as a Weapon of the Realist”, *Proceedings of the Aristotelian Society*, 106(1): 170–187. doi:10.1111/j.1467-9264.2006.00143.x
* French, Steven and James Ladyman, 2011, “In Defence of Ontic Structural Realism”, in *Scientific Structuralism*, Alisa Bokulich and Peter Bokulich (eds.), Dordrecht: Springer Netherlands, 25–42. doi:10.1007/978-90-481-9597-8_2
* Fuchs, Christopher A., 1998, “Information Gain vs. State Disturbance in Quantum Theory”, *Fortschritte Der Physik*, 46(4–5): 535–565. Reprinted in *Quantum Computation: Where Do We Want to Go Tomorrow?*, Samuel L. Braunstein (ed.), Weinheim: Wiley-VCH Verlag, pp. 229–259.
* –––, 2001, “Quantum Foundations in the Light of Quantum Information”, in *Decoherence and Its Implications in Quantum Computation and Information Transfer: Proceedings of the NATO Advanced Research Workshop*, Antonios Gonis and P. E. A. Turchi (eds.) Amsterdam: ios press. [[Fuchs 2001 early version available online](https://arxiv.org/abs/quant-ph/0106166)]
* Fuchs, Christopher A., N. David Mermin, and Rüdiger Schack, 2014, “An Introduction to QBism with an Application to the Locality of Quantum Mechanics”, *American Journal of Physics*, 82(8): 749–754. doi:10.1119/1.4874855
* Ghirardi, Giancarlo, 2002 [2018], “Collapse Theories”, *The Stanford Encyclopedia of Philosophy* (Fall 2018 Edition), Edward N. Zalta (ed.), URL=<https://plato.stanford.edu/archives/fall2018/entries/qm-collapse>.
* Ghirardi, G. C., A. Rimini, and T. Weber, 1986, “Unified Dynamics for Microscopic and Macroscopic Systems”, *Physical Review D*, 34(2): 470–491. doi:10.1103/PhysRevD.34.470
* Grinbaum, Alexei, 2005, “Information-Theoretic Principle Entails Orthomodularity of a Lattice”, *Foundations of Physics Letters*, 18(6): 563–572. doi:10.1007/s10702-005-1129-0
* Groenewold, H.J., 1957, “Objective and Subjective Aspects of Statistics in Quantum Description.,” in *Observation and Interpretation in the Philosophy of Physics. Proceedings of the Ninth Symposium of the Colston Research Society*, S. Körner (ed.), New York: Dover, pp. 197–203.
* Healey, Richard A., 1989, *The Philosophy of Quantum Mechanics: An Interactive Interpretation*, Cambridge: Cambridge University Press. doi:10.1017/CBO9780511624902
* –––, 2012, “Quantum Theory: A Pragmatist Approach”, *The British Journal for the Philosophy of Science*, 63(4): 729–771. doi:10.1093/bjps/axr054
* Heisenberg, W., 1925, “Über quantentheoretische Umdeutung kinematischer und mechanischer Beziehungen.”, *Zeitschrift für Physik*, 33(1): 879–893. doi:10.1007/BF01328377
* Höhn, Philipp Andres, 2017, “Toolbox for Reconstructing Quantum Theory from Rules on Information Acquisition”, *Quantum*, 1(December): article 38. doi:10.22331/q-2017-12-14-38
* Höhn, Philipp Andres and Christopher S. P. Wever, 2017, “Quantum Theory from Questions”, *Physical Review A*, 95(1): 012102. doi:10.1103/PhysRevA.95.012102
* Kochen, Simon and E. P. Specker, 1967, “The Problem of Hidden Variables in Quantum Mechanics”, *Journal of Mathematics and Mechanics*, 17(1): 59–87.
* Ladyman, James, 2007 [2019], “Structural Realism”, in *The Stanford Encyclopedia of Philosophy* (Fall 2019 edition), Edward N. Zalta (ed.), URL = <https://plato.stanford.edu/archives/fall2019/entries/structural-realism/>
* Ladyman, James and Don Ross, 2007, *Every Thing Must Go: Metaphysics Naturalized*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199276196.001.0001
* Laudisa, Federico, 2001, “The EPR Argument in a Relational Interpretation of Quantum Mechanics”, *Foundations of Physics Letters*, 14(2): 119–132. doi:10.1023/A:1012325503383
* –––, 2019, “Open Problems in Relational Quantum Mechanics”, *Journal for General Philosophy of Science*, 50(2): 215–230. doi:10.1007/s10838-019-09450-0
* Leifer, Matthew Saul, 2014, “Is the Quantum State Real? An Extended Review of ψ-Ontology Theorems”, *Quanta*, 3(1): 67. doi:10.12743/quanta.v3i1.22
* Lewis, David K., 1986, *On the Plurality of Worlds*, New York: Blackwell.
* Martin-Dussaud, Pierre, Carlo Rovelli, and Frederico Zalamea, 2019, “The Notion of Locality in Relational Quantum Mechanics”, *Foundations of Physics*, 49(2): 96–106. doi:10.1007/s10701-019-00234-6
* Morganti, Matteo, 2011, “Is There a Compelling Argument for Ontic Structural Realism?”, *Philosophy of Science*, 78(5): 1165–1176. doi:10.1086/662258
* Nāgārjuna, c. 2nd century CE [1995], “Mūlamadhyamakakārikā”, Translated in *The Fundamental Wisdom of the Middle Way: Nagarjuna’s “Mulamadhyamakakarika”*, Jay L. Garfield (trans.), Oxford: Oxford University Press, 1995.
* Penrose, Roger, 1996, “On Gravity’s Role in Quantum State Reduction”, *General Relativity and Gravitation*, 28(5): 581–600. doi:10.1007/BF02105068
* Pusey, Matthew F., Jonathan Barrett, and Terry Rudolph, 2012, “On the Reality of the Quantum State”, *Nature Physics*, 8(6): 475–478. doi:10.1038/nphys2309
* Rovelli, Carlo, 1996, “Relational Quantum Mechanics”, *International Journal of Theoretical Physics*, 35(8): 1637–1678. doi:10.1007/BF02302261
* –––, 1998, “‘Incerto Tempore, Incertisque Loci’: Can We Compute the Exact Time at Which a Quantum Measurement Happens?”, *Foundations of Physics*, 28(7): 1031–1043. doi:10.1023/A:1018889802170
* –––, 2016, “An Argument Against the Realistic Interpretation of the Wave Function”, *Foundations of Physics*, 46(10): 1229–1237. doi:10.1007/s10701-016-0032-9
* –––, 2018, “‘Space Is Blue and Birds Fly through It’”, *Philosophical Transactions of the Royal Society A: Mathematical, Physical and Engineering Sciences*, 376(2123): 20170312. doi:10.1098/rsta.2017.0312
* Schaffer, Jonathan, 2010, “Monism: The Priority of the Whole”, *Philosophical Review*, 119(1): 31–76. doi:10.1215/00318108-2009-025
* Schrödinger, Erwin, 1926, “Quantisierung als Eigenwertproblem (Zweite Mitteilung)”, *Annalen der Physik*, 384(6): 489–527. doi:10.1002/andp.19263840602
* Smerlak, Matteo and Carlo Rovelli, 2007, “Relational EPR”, *Foundations of Physics*, 37(3): 427–445. doi:10.1007/s10701-007-9105-0 [[Smerlak and Rovelli 2007 preprint available online](https://arxiv.org/abs/quant-ph/0604064)]
* Spekkens, Robert, 2014, “The Invasion of Physics by Information Theory”, talk at Perimeter Institute, 26 March 2014, [[Spekkens 2014 available online](http://pirsa.org/14030085/)].
* Strawson, P. F., 1959, *Individuals: An Essay in Descriptive Metaphysics*, London: Methuen.
* Vaidman, Lev, 2002 [2018], “Many-Worlds Interpretation of Quantum Mechanics”, *The Stanford Encyclopedia of Philosophy* (Fall 2018 Edition), Edward N. Zalta (ed.), URL = <https://plato.stanford.edu/archives/fall2018/entries/qm-manyworlds/>.
* van Fraassen, Bas C., 2010, “Rovelli’s World”, *Foundations of Physics*, 40(4): 390–417. doi:10.1007/s10701-009-9326-5 [[van Fraassen 2010 preprint available online](https://www.princeton.edu/~fraassen/abstract/Rovelli_sWorld-FIN.pdf)]
* Wigner, Eugene P., 1967, “Remarks on the Mind-Body Question”, in his *Symmetries and Reflections: Scientific Essays of Eugene P. Wigner*, Bloomington, IN: Indiana University Press, pp. 171–184. Reprinted in his *Philosophical Reflections and Syntheses*, Jagdish Mehra (ed.), (The Collected Works of Eugene Paul Wigner 6), Berlin, Heidelberg: Springer Berlin Heidelberg, 247–260. doi:10.1007/978-3-642-78374-6_20
* Zeilinger, Anton, 1999, “A Foundational Principle for Quantum Mechanics”, *Foundations of Physics*, 29(4): 631–643. doi:10.1023/A:1018820410908

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=qm-relational). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/qm-relational/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=qm-relational&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/qm-relational/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* Bitbol, Michel, 2007, “Physical Relations or Functional Relations? A Non-Metaphysical Construal of Rovelli’s Relational Quantum Mechanics”, unpublished manuscript. *Philosophy of Science Archive*: = < [Physical Relations or Functional Relations ? A non-metaphysical construal of Rovelli’s Relational Quantum Mechanics - PhilSci-Archive](http://philsci-archive.pitt.edu/3506/)>
* Fuchs, Christopher A., 2002, “Quantum Mechanics as Quantum Information (and Only a Little More)”, unpublished manuscript. [[arXiv:quant-ph/0205039](http://arxiv.org/abs/quant-ph/0205039)].
* Pienaar, Jacques, 2018, “Comment on ‘The Notion of Locality in Relational Quantum Mechanics’”, unpublished manuscript. [[arXiv:1807.06457 [quant-ph]](http://arxiv.org/abs/1807.06457)]
* Smolin, Lee, 1995, “The Bekenstein bound, topological quantum field theory and pluralistic quantum field theory”, Penn State preprint CGPG-95/8-7, 1995, Los Alamos Archive. [[arXiv:gr-qc/9508064](http://arxiv.org/abs/gr-qc/9508064)]
* Waaijer, Marijn and Jan van Neerven, 2019, “Relational Analysis of the Frauchiger—Renner Paradox and Existence of Records from the Past”, unpublished manuscript. [[arXiv: 1902.07139](http://arxiv.org/abs/1902.07139)]
* Wood, Daniel, 2010, “Everything is Relative: Has Rovelli Found the Way Out of the Woods?”, unpublished manuscript. URL = <http://dwolf.eu/uploads/2/7/1/3/27138059/rqm_essay_dwood.pdf>

## Related Entries

[Nāgārjuna](https://plato.stanford.edu/entries/nagarjuna/) | [properties](https://plato.stanford.edu/entries/properties/) | [quantum mechanics](https://plato.stanford.edu/entries/qm/) | [quantum mechanics: action at a distance in](https://plato.stanford.edu/entries/qm-action-distance/) | [quantum mechanics: collapse theories](https://plato.stanford.edu/entries/qm-collapse/) | [quantum mechanics: Everettian](https://plato.stanford.edu/entries/qm-everett/) | [quantum mechanics: modal interpretations of](https://plato.stanford.edu/entries/qm-modal/) | [quantum theory: philosophical issues in](https://plato.stanford.edu/entries/qt-issues/) | [quantum theory: quantum entanglement and information](https://plato.stanford.edu/entries/qt-entangle/) | [quantum theory: quantum logic and probability theory](https://plato.stanford.edu/entries/qt-quantlog/)

[Copyright © 2019](https://plato.stanford.edu/info.html#c) by  
[Federico Laudisa](https://www.federicolaudisa.it/) <[*federico.laudisa@unitn.it*](mailto:federico%2elaudisa%40unitn%2eit)>  
[Carlo Rovelli](http://www.cpt.univ-mrs.fr/~rovelli/rovelli.html) <[*rovelli.carlo@gmail.com*](mailto:rovelli%2ecarlo%40gmail%2ecom)>
