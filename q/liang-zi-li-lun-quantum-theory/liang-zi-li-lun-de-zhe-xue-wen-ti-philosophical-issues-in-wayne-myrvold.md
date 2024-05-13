# 量子理论的哲学问题 philosophical issues in (Wayne Myrvold)

*首次发表于 2016 年 7 月 25 日星期一；实质性修订于 2022 年 3 月 23 日星期三。*

本文是对量子理论引发的哲学问题的概述，旨在指向斯坦福哲学百科全书中其他条目的更深入的处理。

***

## 1. 引言

尽管量子理论在当代物理学中具有核心地位，但在物理学家和物理哲学家之间，关于量子理论的实证成功是否告诉我们有关物理世界的问题上并没有共识。这引发了一系列被称为“量子力学解释”的哲学问题。不要被这个术语误导，以为我们拥有的是一个没有与物理世界相连接的未经解释的数学形式主义。相反，有一个共同的操作核心，其中包括用于计算在特定状态准备程序下对系统进行实验的结果概率的配方。通常所称的量子力学的不同“解释”在于对共同核心添加了什么，如果有的话。两种主要方法，即隐藏变量理论和坍缩理论，涉及与标准量子力学不同的物理理论的制定；这使得“解释”这个术语更加不恰当。

与量子理论相关的哲学文献大部分集中在一个问题上，即我们是否应该以现实主义的方式解释该理论，或者以其适当的扩展或修订方式解释，如果是这样，应该如何解释。对于所谓的“测量问题”，各种方法提出了不同的答案。然而，还有其他一些哲学问题值得关注。这些问题包括量子非局域性对我们对时空结构和因果关系的理解的影响，量子态的本体论特征问题，量子力学对信息理论的影响，以及将量子理论与其他理论（实际的和假设的）相互关联的任务。接下来，我们将涉及每个主题，并主要目标是提供相关文献的入口，包括斯坦福百科全书对这些主题的条目。关于本条目涉及的许多问题的当代观点可以在《哲学物理学路德维奇伴侣》（Knox 和 Wilson，编，2021）中找到；《量子诠释历史牛津手册》（Freire 等人，编，2022）包含了关于这些问题讨论历史的论文。

## 2. 量子理论

在本节中，我们将简要介绍量子理论；更详细的介绍请参阅量子力学条目。

### 2.1 量子态和经典态

在经典物理学中，每个物理系统都与一个状态空间相关联，该状态空间表示为系统状态的动力学变量分配值的可能性的总体。对于具有许多自由度的系统，系统状态的完整规范可能无法获得或难以处理；经典统计力学通过在系统的状态空间上引入概率分布来处理这种情况。将分配给某些物理量的概率分布视为系统状态的不完全规范。在量子力学中，情况不同。没有量子态可以为所有物理量分配确定的值，并且概率内建于该理论的标准表述中。

在制定某个系统的量子理论时，通常从该系统的哈密顿或拉格朗日力学理论的表述开始。在经典力学的哈密顿表述中，系统的构型由一组坐标表示。这些坐标可以是一组点粒子的位置，但也可以考虑更一般的情况，例如指定刚体方向的角坐标。对于每个坐标，都有一个相关的共轭动量。如果坐标表示某个物体的位置，则与该坐标共轭的动量可能是我们通常称之为“动量”的量，即物体的速度乘以其质量。如果坐标是一个角度，则与之共轭的动量是一个角动量。

构建物理系统的量子理论首先将动力学自由度与算符关联起来。这些是数学对象，定义了乘法和加法运算，以及与实数和复数的乘法。换句话说，算符集合形成了一个代数。通常说，算符表示一个可观测量，对系统进行实验的结果被认为是某个可观测量的值。如果两个或多个可观测量是兼容的，那么存在一种可能的实验，可以同时得到它们的值。其他情况下，需要进行互斥实验，这些可观测量被认为是不兼容的。

当然，在经典理论中，定义状态的动力学量也形成一个代数，因为它们可以进行乘法和加法运算，并且可以与实数或复数相乘。量子力学与经典力学的不同之处在于算符的乘法顺序可能会有所不同。也就是说，对于某些算符 A、B，乘积 AB 不等于乘积 BA。如果 AB=BA，则这些算符被称为可交换的。

构建给定物理系统的量子理论的方法规定了表示系统动力学变量的算符之间的代数关系。兼容的可观测量与彼此可交换的算符相关联。表示共轭变量的算符需要满足所谓的规范对易关系。如果 q 是某个坐标，p 是它的共轭动量，表示它们的算符 Q 和 P 需要满足不对易的条件。相反，PQ 和 QP 之间的差异需要是单位算符（即，对于所有算符 A，IA=AI）的倍数。

量子态是对系统上可以进行的每个实验的可能结果的概率的规定。这些可以总结为对每个可观测量分配期望值。这些状态需要是线性的。这意味着，如果一个操作符 C 对应于某个可观测量，是操作符 A 和 B 对应于其他可观测量的和，那么量子态对 C 分配的期望值必须是对 A 和 B 分配的期望值的和。这是一个非平凡的约束条件，因为它要求在可观测量是否兼容的情况下都成立。因此，量子态关联了由不兼容实验产生的量的期望值。

由不对易的算符表示的不兼容可观测量导致了不确定关系；请参阅不确定性原理的条目。这些关系意味着没有量子态可以对满足它们的可观测量分配确定的值，并且对于任何量子态，它们能够同时被定义的程度都有一定的限制。

对于任意两个不同的量子态 ρ 和 ω，以及介于 0 和 1 之间的任意实数，存在一个相应的混合态。这个混合态对任何实验结果分配的概率是 p 乘以 ρ 分配的概率加上 1−p 乘以 ω 分配的概率。实现混合态的一种物理方法是使用一个随机装置，例如一个硬币，正面朝上的概率为 p，反面朝上的概率为 1−p，并用它来选择是准备 ρ 态还是准备 ω 态。在我们讨论纠缠的第 3 节之后，我们将看到另一种准备混合态的方法。不是任何两个不同态的混合的态被称为纯态。

使用量子理论的希尔伯特空间表示既有用又习惯，尽管不是严格必要的。在这种表示中，对应于可观测量的算符被表示为作用于适当构造的希尔伯特空间的元素上（有关详细信息，请参见量子力学条目）。通常，希尔伯特空间表示是以这样的方式构造的，使得空间中的向量表示纯态；这样的表示被称为不可约表示。不可约表示中，混合态也可以用向量表示。

希尔伯特空间是一个向量空间。这意味着对于空间中的任意两个向量|ψ⟩、|ϕ⟩，表示纯态，以及任意复数 a、b，存在另一个向量 a|ψ⟩+b|ϕ⟩，也表示一个纯态。这被称为由|ψ⟩ 和|ϕ⟩ 表示的态的叠加。希尔伯特空间中的任何向量都可以以无限多种方式写成其他向量的叠加。有时，在讨论量子力学的基础时，作者会误以为某些态是叠加态，而其他态则不是。这只是一个错误。通常所指的是某些态对宏观可观测量产生确定的值，而其他态无法以不是宏观上不同的态的叠加的方式写成。

量子理论的非争议操作核心包括用于确定任何给定系统的动力学量的适当算符的规则。此外，还有关于在系统受到指定外部场或经受各种操作时演化系统状态的规定（请参见第 1.3 节）。应用量子理论通常涉及对待量子力学的研究对象（系统）和实验装置（非量子力学）之间的区分。这种划分有时被称为海森堡切割。

不论我们是否能够期望超越量子理论的非争议操作核心，并将其视为超出实验结果概率计算的手段，这仍然是当代哲学讨论的一个话题。

### 2.2 量子力学和量子场论

通常认为量子力学是指经典力学的量子化版本，涉及具有固定有限自由度的系统。经典上，例如电磁场，是一个具有无限多自由度的系统。场论的量子化导致了量子场论。量子力学引发的主要哲学问题在转向量子场论时仍然存在；此外，还会出现新的解释问题。量子力学理论和量子场论之间存在有趣的技术和解释上的差异；有关概述，请参阅量子场论和量子理论：冯·诺依曼与狄拉克的条目。

量子场论的标准模型虽然成功，但尚未融入引力理论。试图发展一种既能充分描述量子现象又能描述引力现象的理论，引发了严重的概念问题（参见关于量子引力的条目）。

### 2.3 量子态演化

#### 2.3.1 薛定谔和海森堡图象

在构建一个随时间演化的量子系统的希尔伯特空间表示时，需要做出一些选择。对于每个时间 t，需要有系统的希尔伯特空间表示，其中涉及将算符分配给与时间 t 相关的可观测量。在决定如何关联表示不同时间的可观测量的算符时，存在一种约定的成分。

为了具体起见，假设有一个系统，其可观测量包括相对于某个参考系的位置 x 和动量 p。在某种意义上，对于两个不同的时间 t 和 t'，时间 t 的位置和时间 t'的位置是不同的可观测量，也是同一个可观测量在不同时间的值。一旦我们确定了用于表示时间 t 的位置和动量的算符^X 和^P，我们仍然可以选择用哪些算符来表示相应的量在时间 t 的值。在薛定谔图像中，无论考虑哪个时间，都使用相同的算符^X 和^P 来表示位置和动量。由于涉及这些量的实验结果的概率可能随时间变化，必须使用不同的向量来表示不同时间的状态。

量子态矢量遵循的运动方程是薛定谔方程。首先构造与系统的哈密顿量相对应的算符^H，该算符表示系统的总能量。状态矢量的变化率与用哈密顿算符^H 作用于矢量的结果成比例。

iℏd/dt|ψ(t)⟩=^H|ψ(t)⟩.

存在一个运算符，它将时间 0 的状态转化为时间 t 的状态；它由以下公式给出

U(t)=exp(−iHtℏ).

这个算符是一个线性算符，它实现了希尔伯特空间到自身的一对一映射，保持任意两个向量的内积；具有这些性质的算符被称为幺正算符，因此，根据薛定谔方程的演化被称为幺正演化。

对于我们的目的来说，这个方程最重要的特点是它是确定性的和线性的。在任何时间的状态矢量，加上方程，唯一确定了任何其他时间的状态矢量。线性性意味着，如果两个矢量|ψ1(0)⟩ 和|ψ2(0)⟩ 演化成矢量|ψ1(t)⟩ 和|ψ2(t)⟩，那么，如果时间 0 的状态是这两个的线性组合，任何时间 t 的状态将是相应的|ψ1(t)⟩ 和|ψ2(t)⟩ 的线性组合。

a|ψ1(0)⟩+b|ψ2(0)⟩→a|ψ1(t)⟩+b|ψ2(t)⟩。

海森堡图像则根据所考虑的时间（对于动量和其他可观测量也是如此），对于位置使用不同的算符^X(t)、^X(t′)。如果^A(t)是一组在不同时间表示某个可观测量的海森堡图像算符，那么这组算符的成员满足海森堡运动方程，

iℏd/dt^A(t)=^A(t)^H−^H^A(t)。

有时人们会说，在海森堡图像中，系统的状态是不变的。这是不正确的。确实，没有不同的状态矢量对应于不同的时间，但这是因为单个状态矢量用于计算所有时间相关的所有可观测量的概率。这些概率会随时间变化。

#### 2.3.2. 坍缩假设

如前所述，量子理论的标准应用将世界划分为一个在量子理论中处理的系统和其余部分，通常包括实验装置，不在理论范围内。与此划分相关的是一个关于如何在实验后为可观测量分配状态矢量的假设，根据该假设，在实验后，将量子态替换为与所得值对应的本征态。与其他情况下应用的幺正演化不同，这是量子态的不连续变化，有时被称为状态矢量的坍缩或状态矢量的减少。关于坍缩的假设有两种解释，对应于两种不同的量子态概念。如果量子态仅代表关于系统的知识，那么状态坍缩为与观测结果相对应的状态可以被视为知识的简单更新。然而，如果量子态代表物理现实，以使不同的纯态始终代表不同的物理状态，那么坍缩假设意味着系统的物理状态发生了突然、可能是不连续的变化。如果混淆了这两种解释，可能会导致相当大的混乱。

坍缩假设已经在 1927 年第五届索尔维会议的一般讨论中出现（参见 Bacciagaluppi 和 Valentini，2009 年，437-450 页）。它也出现在海森堡的《量子理论的物理原理》中，该书基于 1929 年的讲座（Heisenberg，1930a，27 页；1930b，36 页）。几年后，冯·诺伊曼在对量子理论进行改进时区分了两种类型的过程：过程 1：在进行实验时发生的过程，过程 2：在没有进行测量时发生的幺正演化（von Neumann，1932 年；1955 年，§V.I）。他并不认为这种区别是两个物理上不同的过程。相反，选择使用其中一个过程还是另一个过程取决于对世界进行观察部分和被观察部分的某种任意划分（参见 von Neumann，1932 年，224 页；1955 年，420 页）。

坍缩假设在狄拉克的《量子力学原理》第一版（1930 年）中没有出现；它是在第二版（1935 年）中引入的。狄拉克的表述如下。

> 当我们测量一个真实的动力学变量 ξ 时，测量行为中涉及的干扰会导致动力学系统状态的跃迁。根据物理连续性，如果我们在第一次测量之后立即对相同的动力学变量 ξ 进行第二次测量，第二次测量的结果必须与第一次相同。因此，在第一次测量完成后，第二次测量的结果就不再具有不确定性。因此，在第一次测量完成后，系统处于动力学变量 ξ 的本征态，其所属的本征值等于第一次测量的结果。即使第二次测量实际上没有进行，这个结论仍然成立。通过这种方式，我们可以看到测量总是导致系统跃迁到正在被测量的动力学变量的本征态，而这个本征态所属的本征值等于测量的结果（Dirac 1935: 36）。

与冯·诺依曼和海森堡不同，狄拉克将“跃迁”视为一个物理过程。

冯·诺依曼和狄拉克都不认为意识到结果的观察者的意识是坍缩的必要条件。对于冯·诺依曼来说，将“被观察”系统和“观察者”之间的切割位置放在哪里有些随意。它可以放在研究对象和实验装置之间。另一方面，我们可以将实验装置包括在量子描述中，并将切割放在指示结果的光线击中观察者的视网膜的那一刻。我们甚至可以进一步将视网膜和观察者的相关神经系统部分包括在量子系统中。根据冯·诺依曼的观点，切割可以任意地推进到观察者的感知装置中，这是由心理物理并行原理所要求的。

根据伦敦和鲍尔（1939）的观点，将坍缩假设的一个版本表述为，直到观察到结果，测量才算完成。对于他们来说，就像海森堡一样，这是观察者知识增加的问题。

维格纳（1961）结合了这两种解释的要素。像那些认为坍缩是观察者在获得新信息后更新信念的人一样，他认为当有意识的观察者意识到实验结果时，坍缩就发生了。然而，像狄拉克一样，他认为这是一个真正的物理过程。他的结论是，意识对物理世界有一种影响，量子力学的定律无法捕捉到。这涉及到对冯·诺依曼的心理-物理平行原则的拒绝，根据这一原则，必须能够将主观感知的过程视为像其他任何物理过程一样的物理过程。

有一个持久的误解，即对于冯·诺依曼来说，只有当有意识的观察者意识到结果时，才会引用坍缩。正如前面提到的，这与他的观点相反，因为切割点可以放置在被观察系统和实验装置之间，对于他来说，切割点的位置有些任意。尽管如此，冯·诺依曼的立场有时会与维格纳的推测性提议混淆，维格纳的提议有时会错误地被称为冯·诺依曼-维格纳解释。

标准表述中没有明确说明何时应用坍缩假设；在实验的定义上有一定的余地，或者（对于需要参考观察者的版本）在观察者的定义上有一定的余地。包括冯·诺依曼和海森堡在内的一些人认为，在何处应用假设存在一定的任意性是原则问题。众所周知，在实践中，这种任意性是无害的。实践中似乎应用的经验法则是由贝尔提出的：“当有疑问时，扩大量子系统”，直到将更多内容纳入量子系统对实际预测几乎没有影响（贝尔，1986 年，362 页；贝尔，2004 年，189 页）。如果要将某种理论视为“标准”量子力学，那么它就是我们讨论过的操作核心，再加上这种应用规则的启发式规则。标准量子力学运作得非常好。然而，如果有人寻求一种能够描述所有系统（包括宏观系统）并能够解释宏观事件（包括实验结果）产生过程的理论，这就引发了所谓的“测量问题”，我们将在介绍纠缠概念后讨论这个问题（见第 3 节）。

#### 2.3.3. 波函数

在量子理论的希尔伯特空间表示中，存在波函数表示。

与任何可观测量相关的是其谱，即可观测量可以取得的可能值的范围。对于任何物理系统和该系统的任何可观测量，我们总是可以通过考虑在该可观测量的谱上的复值函数来形成该系统的量子理论的希尔伯特空间表示。这些函数的集合形成一个向量空间。给定可观测量的谱上的一个测度，我们可以通过将仅在零测度集上有差异的函数视为等价（也就是说，我们的希尔伯特空间的元素实际上是函数的等价类），并使用该测度来定义内积（如果这个术语不熟悉，请参阅量子力学条目）来构建一个希尔伯特空间。

如果所选可观测量的谱是连续的（例如，位置或动量），这种类型的希尔伯特空间表示被称为波函数表示，而表示量子态的函数被称为波函数（也称为“波函数”或“波函数”）。这种形式最熟悉的表示是位置空间波函数，它是系统可能配置的函数，以及动量空间波函数，它是涉及系统动量的函数。

## 3. 纠缠、非局域性和非可分性

给定两个不相交的物理系统 A 和 B，我们将它们分别与希尔伯特空间 HA 和 HB 相关联，与复合系统相关联的希尔伯特空间是张量积空间，表示为 HA⊗HB。

当两个系统分别以纯态|ψ⟩ 和|ϕ⟩ 独立准备时，复合系统的状态是乘积态|ψ⟩⊗|ϕ⟩（有时省略交叉符号 ⊗）。

除了乘积态，张量积空间还包含乘积态的线性组合，即形式为的状态向量

a|ψ1⟩⊗|ϕ1⟩+b|ψ2⟩⊗|ϕ2⟩

张量积空间可以定义为包含所有乘积态的最小希尔伯特空间。任何由非乘积向量表示的纯态都是纠缠态。

复合系统的状态为所有可以在复合系统上进行的实验结果分配概率。我们还可以考虑对系统 A 进行实验的限制，或对系统 B 进行实验的限制。这样的限制分别产生了 A 和 B 的状态，称为系统的约化态。当复合系统 AB 的状态是纠缠态时，A 和 B 的约化态是混合态。为了看到这一点，假设在上述状态中，向量|ϕ1⟩ 和|ϕ2⟩ 表示可区分的状态。如果将注意力限制在对 A 进行的实验上，无论是否还对 B 进行实验都没有影响。对 B 进行的实验可以区分|ϕ1⟩ 和|ϕ2⟩，将 A 的状态投影到|ψ1⟩ 或|ψ2⟩，对应的概率分别为|a|2 和|b|2，对 A 进行的实验的结果的概率是状态|ψ1⟩ 和|ψ2⟩ 的概率的平均值。正如前面提到的，这些概率与在 B 上不进行实验的情况下的概率相同。因此，即使在 B 上不进行实验，对 A 进行实验的结果的概率也完全如同系统 A 处于由|ψ1⟩ 或|ψ2⟩ 表示的状态，对应的概率分别为|a|2 和|b|2。

一般来说，任何既不是乘积态也不是乘积态混合物的纯态或混合态都被称为纠缠态。

纯纠缠态的存在意味着，如果我们考虑由空间分离的部分组成的复合系统，即使系统的状态是纯态，该状态也不由其组成部分的约化态决定。因此，量子态表现出一种非可分离性形式。有关物理学中整体性和非可分离性的更多信息，请参阅关于整体性和非可分离性的条目。

量子纠缠导致了一种对经典物理学来说陌生的非局域性形式。即使我们假设 A 和 B 的约化态不能完全表征它们的物理状态，而必须通过一些进一步的变量来补充，仍然存在无法归约为 A 和 B 状态之间的相关性的量子相关性。请参阅关于贝尔定理和量子力学中的超距作用的条目。

## 4. 测量问题

### 4.1 测量问题的表述

如果量子理论被认为是（原则上）一种普适理论，那么它应该在原则上适用于所有物理系统，包括像我们的实验装置这样大而复杂的系统。很容易证明，当线性演化作用于宏观物体时，通常会导致宏观上不同状态的叠加。其中会发生这种情况的情况包括实验设置，早期的讨论主要集中在如何用量子力学的术语来解释测量过程。因此，解释问题被称为测量问题。在讨论量子力学基础的最初几十年中，它通常被称为观测问题。

考虑一个模式化的实验。假设我们有一个量子系统，可以准备至少两个可区分的状态，|0⟩S 和 |1⟩S。让 |R⟩A 成为仪器的就绪状态，即仪器准备好进行测量的状态。

如果仪器正常工作，并且测量是最小干扰的，系统 S 与仪器 A 的耦合应该导致一种可预测的演化，产生以下形式的结果

|0⟩S|R⟩A⇒|0⟩S|“0”⟩A|1⟩S|R⟩A⇒|1⟩S|“1”⟩A

其中 |“0”⟩A 和 |“1”⟩A 是表示结果 0 和 1 的仪器状态。

现在假设系统 S 准备在状态 |0⟩S 和 |1⟩S 的叠加态中。

|ψ(0)⟩S=a|0⟩S+b|1⟩S，

当 a 和 b 都不为零时。如果从实验前状态到实验后状态的演化是线性的薛定谔演化，那么我们将会有

|ψ(0)⟩S|R⟩A→a|0⟩S|“0”⟩A+b|1⟩S|“1”⟩A。

这不是一个仪器读数变量的本征态，而是一个读数变量和系统变量相互纠缠的状态。将本征态-本征值联系应用于这样的状态，不能为仪器读数得到确定的结果。如何解释这个问题被称为“测量问题”，下面将详细讨论。

### 4.2 测量问题的方法

如果量子态演化通过薛定谔方程或其他线性方程进行，那么，正如我们在前一节中所看到的，典型的实验将导致量子态是对应于不同实验结果的叠加项。有时候会说这与我们的经验相冲突，根据我们的经验，实验结果变量（如指针读数）总是具有确定的值。这是一种误导性的表述方式，因为我们不清楚如何解释这种状态作为包括实验装置在内的系统的物理状态，如果我们无法说出观察装置处于这种状态会是什么样子，那么说我们从未观察到它处于这种状态是没有意义的。

尽管如此，我们面临着一个解释问题。如果我们认为量子态是系统的完整描述，那么与先前的预期相反，该态不是对应于唯一确定结果的状态。这就是为什么 J.S.贝尔评论说：“无论是薛定谔方程给出的波函数不是一切，还是它不正确”（贝尔 1987：41，2004：201）。这给我们提供了一种（表面上）整洁的方法来分类解决测量问题的方法：

1. 有一些方法涉及否认量子波函数（或任何其他表示量子态的方式）提供了物理系统的完整描述。
2. 有一些方法涉及修改动力学以在适当的情况下使量子态坍缩。
3. 有一些方法拒绝贝尔困境的两个角度，并认为量子态始终经历幺正演化，并且量子态描述在原则上是完整的。

我们将否认量子态应被视为在现实中代表任何东西的方法归入第一类。这包括哥本哈根诠释的变体，以及实用主义和其他反现实主义方法。第一类还包括寻求完成量子态描述的方法。这包括隐藏变量方法和模态解释。第二类解释激发了一个研究计划，即寻找适当的量子动力学的不确定性修改。拒绝贝尔困境两个角的方法以埃弗雷特或“多世界”解释为典型。

#### 4.2.1 “哥本哈根诠释”

自 20 世纪 50 年代中期以来，“哥本哈根诠释”一词通常用于指代使用该术语的人对量子力学引发的哲学问题的“正统”观点。根据霍华德（2004）的说法，这个短语首次由海森堡（1955 年，1958 年）使用，并意在暗示玻尔及其同事（包括伯恩和海森堡本人）之间的观点的共同性。最近的历史学研究强调了与哥本哈根诠释相关人物之间观点的多样性；请参阅有关量子力学哥本哈根诠释的条目以及其中的参考文献。读者应该意识到这个术语并不是一致的，不同的作者在谈到“哥本哈根诠释”时可能指的是不同的事物。

#### 4.2.2 非现实主义和实用主义对量子力学的方法

从量子力学的早期开始，存在一种思想流派认为，对待量子力学的正确态度是一种工具主义或实用主义的态度。在这种观点下，量子力学是协调我们的经验和形成实验结果预期的工具。这种观点的变体包括哥本哈根诠释的一些版本。最近，物理学家们提出了这种观点，包括 QBists，他们认为量子态代表主观或认识论概率（参见 Fuchs 等人，2014 年）。哲学家理查德·希利（Richard Healey）提出了一个相关观点，认为量子态虽然客观存在，但不应被视为表征性的（参见 Healey 2012, 2017a, 2020 年）。有关这些方法的更多信息，请参阅关于量子贝叶斯和实用主义量子理论观点的条目。

#### 4.2.2 隐藏变量和模态解释

结构包括量子态但包含额外结构的理论，旨在规避测量问题，传统上被称为“隐藏变量理论”。爱因斯坦、波多尔斯基和罗森（EPR）在一篇著名论文中论证了量子态描述不能被视为对物理现实的完整描述，并由爱因斯坦在随后的出版物中进一步论证（爱因斯坦 1936 年，1948 年，1949 年）。请参阅关于爱因斯坦-波多尔斯基-罗森论证的量子理论条目。

有一些定理限制了可能的隐藏变量理论的范围。最自然的想法是寻找一种理论，为所有量子可观测量分配明确的值，这些值仅在测量时才被揭示，以这样的方式，任何在传统量子力学中被视为可观测量的实验过程都会产生分配给可观测量的明确值。这种类型的理论被称为非上下文隐藏变量理论。贝尔（1966 年）和科亨-施佩克尔（1967 年）证明了对于希尔伯特空间维度大于三的任何系统，都不存在这样的理论（请参阅科亨-施佩克尔定理的条目）。

贝尔-科亨-施佩克尔定理并不排除隐藏变量理论的存在。规避该定理的最简单方法是始终选择某个可观测量或兼容的可观测量集作为始终明确的，以确保实验的确定结果；其他可观测量不被分配明确的值，并且被认为是对这些可观测量的“测量”的实验不会揭示预先存在的值。

这种类型的最完善的理论是由德布罗意开发并在 1927 年在布鲁塞尔举行的第五届索尔维会议上由他提出的波粒二象性理论，由大卫·玻姆在 1952 年重新提出，并目前由一小群物理学家和哲学家进行积极研究。根据这个理论，存在具有明确轨迹的粒子，它们由量子波函数引导。关于德布罗意理论的历史，请参阅 Bacciagaluppi 和 Valentini（2009）的引言章节。有关德布罗意-玻姆理论及其相关的哲学问题的概述，请参阅关于玻姆力学的条目。

还有其他关于用额外结构补充量子态的提议；这些被称为模态解释；请参阅关于量子力学模态解释的条目。

#### 4.2.3 动力学坍缩理论

正如已经提到的，Dirac 写道，量子态矢量的坍缩是由对系统的实验干预引起的，这是一个真正的物理变化，不同于通常的幺正演化。如果将坍缩视为真正的物理过程，那么关于其发生的情况需要更多的说明，而不仅仅是在进行实验时发生。这引发了一个研究计划，即制定一个精确定义的量子态动力学，以近似线性、幺正的薛定谔演化在已经得到充分证实的情况下，并在典型的实验设置中将其坍缩到结果变量的本征态，或者在无法实现这一点时，近似到一个本征态。唯一有希望的坍缩理论是具有随机性质的；事实上，可以证明，确定性的坍缩理论将允许超光速信号传输。请参阅有关坍缩理论的条目以获取概述，并参阅 Gao，ed.（2018）以了解当代讨论的最新情况。

表面上看，这种类型的动力学坍缩理论可以是量子态单一论的理论，即在 Bell 的话中，“波函数就是一切”。近年来，这一观点受到了质疑；有人认为，坍缩理论除了量子态之外还需要“原始本体论”。请参阅 Allori et al.（2008），Allori（2013），以及有关坍缩理论的条目和其中的参考文献。Egg（2017，2021），Myrvold（2018）和 Wallace（2020）对这种方法表示了保留意见。

#### 4.2.4 埃弗雷特，或“多世界”理论

在他 1957 年的博士论文中（收录在 Everett 2012 中），休·埃弗雷特三世提出了量子力学应该被接受为它本身的样子，没有坍缩假设，也没有任何“隐藏变量”。由此产生的解释被称为相对态解释。

基本思想是这样的。在实验之后，系统加上仪器的量子态通常是对应于不同结果的项的叠加。当仪器与其环境（可能包括观察者）相互作用时，这些系统与仪器和量子系统纠缠在一起，其净结果是一个涉及每个可能的实验结果的量子态，其中仪器读数对应于该结果，环境中有该结果的记录，观察者观察到该结果等等。埃弗雷特提出将这些项都视为同样真实。从上帝的视角来看，没有唯一的实验结果，但也可以将注意力集中在一个特定的确定性子系统状态上，比如实验仪器，并将参与纠缠态的其他系统相对于该仪器状态赋予一个相对态。也就是说，相对于仪器读数为“+”，环境记录该结果以及观察者观察到该结果的状态（有关埃弗雷特对量子力学的相对态表述的更多细节，请参见相关条目）。

埃弗雷特的工作启发了一系列被称为“多世界”解释的观点；其思想是，叠加态的每个项对应一个连贯的世界，而所有这些世界都同样真实存在。随着时间的推移，这些世界不断增多，因为出现了导致更多结果多样性的情况（有关最近讨论的概述，请参阅量子力学的多世界解释条目和 Saunders 2007；Wallace 2012 是对埃弗雷特量子力学解释的详细辩护）。

有一系列不同但相关的观点被称为“关系性量子力学”。这些观点与埃弗雷特一致，只将系统的动力学变量的确定值归因于其他系统的状态；它们的不同之处在于，与埃弗雷特不同，它们不将量子态作为基本本体论（有关更多详细信息，请参阅关系性量子力学条目）。

### 4.3 扩展的维格纳朋友场景作为无解定理的来源

如前所述，量子理论通常采用将世界分为一个被理论处理的部分和一个未被处理的部分。冯·诺依曼和海森堡都强调了划分位置的任意性。在某些表述中，这个划分被认为是观察者和被观察者之间的区别，并且常常说量子力学需要参考观察者来进行其表述。

量子力学的创始人们倾向于默认，尽管这个“切割”有些可移动性，但在任何给定的分析中，都会确定一个划分，并且不会尝试在一个实验的分析中结合不同的切割选择。然而，如果将切割视为标志着观察者和被观察者之间的区别，就会产生关于涉及多个观察者的情况的问题。每个观察者是否被允许将其他观察者视为量子系统？

对这种情景的考虑是由维格纳（1961）发起的。维格纳考虑了一个假设情景，在这个情景中，一个朋友进行了观察，而他自己将朋友和被实验系统组成的联合系统视为一个量子系统。因此，这类情景被称为“维格纳的朋友”情景。维格纳通过考虑这种情景推测，意识观察者不能处于对应于不同感知的叠加态；引入意识观察者会引发量子态的物理坍缩；根据维格纳的说法，这涉及“意识发挥作用的物理定律的违反”（维格纳 1961 年，294；167，181）。

Frauchiger 和 Renner（2018）发起了关于涉及两个以上观察者的情景的讨论，这些情景被称为“扩展的维格纳朋友”情景。沿着这些线路的进一步结果包括 Brukner（2018），Bong 等人（2020）和 Guérin 等人（2021）。这些研究的策略是提出一些看似合理的假设集（对于每个被引用的作品都是不同的），并通过考虑涉及多个观察者的假设情景来展示该假设集的不一致性。因此，这些定理是针对试图满足已被证明不一致的假设集中的所有成员的测量问题方法的禁止定理。

所有这些研究共同假设的一个前提是，一个观察者始终可以将包含其他观察者的系统视为量子力学中的系统，并对这些系统采用幺正演化。这意味着坍缩不被视为物理过程。还假设每个观察者对其进行的任何实验始终会感知到唯一的结果；这排除了埃弗雷特的解释。被引用的作品在其他假设上的变化。

值得注意的是，对于测量问题的主要方法，每一种方法都能够解释任何物理情景中的事件，包括这些作品中考虑的情景。因此，每一种方法都必然违反了一些被证明不一致的假设集合中的成员。这些结果并不对现有的解决测量问题的方法构成问题；相反，它们是对那些可能试图满足所有被证明不一致的假设集合的方法的禁止定理。由于考虑的假设包括了幺正演化和实验的唯一结果，并且所考虑的情景涉及到不同实验结果的叠加，因此这些结果涉及到的理论是指量子态，如薛定谔方程所给出的，不是对现实的完整描述，因为它未能确定观察者所感知到的唯一结果。这些感知可以被视为随附于大脑状态，这种情况下，量子态中没有包含物理结构，或者是无物质心灵的属性。无论是哪种解释，被排除的理论类型都属于贝尔困境的第一角，第 4.2 节中提到的，这些禁止结果在一定程度上重现了某些模态解释的禁止结果（参见量子力学模态解释条目）。

这些涉及扩展的维格纳朋友情景的结果引发了相当多的哲学讨论；参见 Sudbery（2017, 2019），Healey（2018, 2020），Dieks（2019），Losada 等人（2019），Dascal（2020），Evans（2020），Fortin 和 Lombardi（2020），Kastner（2020），Muciño＆Okon（2020），Bub（2020, 2021），Cavalcanti（2021），Cavalcanti 和 Wiseman（2021），以及 Żukowski 和 Markiewicz（2021）。

### 4.4 退相干的作用

一个量子态，它是两个不同项的叠加，例如

|ψ⟩=a|ψ1⟩+b|ψ2⟩，

其中|ψ1⟩ 和|ψ2⟩ 是可区分的态，与|ψ1⟩ 和|ψ2⟩ 的混合态不同，后者适用于状态准备为|ψ1⟩ 或|ψ2⟩ 的情况，但我们不知道是哪个。两个项的相干叠加和混合态之间的区别具有实证后果。为了看清这一点，考虑双缝实验，其中一束粒子（如电子、中子或光子）通过两个窄缝，然后射到屏幕上，粒子被探测到。将|ψ1⟩ 视为粒子通过顶部缝隙的状态，将|ψ2⟩ 视为粒子通过底部缝隙的状态。这个态是这两个选择的叠加态，在屏幕上表现为干涉条纹，高吸收率和低吸收率的交替带。

这通常是以经典和量子概率之间的差异来表达的。如果粒子是经典粒子，屏幕上某点 p 的探测概率将简单地是两个条件概率的加权平均：在粒子通过顶部缝隙时在 p 点探测到的概率，以及在粒子通过底部缝隙时在 p 点探测到的概率。干涉的出现是非经典性的指标。

现在假设电子在前往屏幕的过程中与其他物体（称之为环境）发生相互作用，这些物体可以作为“哪条路径”探测器；也就是说，辅助系统的状态与电子的状态纠缠在一起，以使其状态与|ψ1⟩ 和|ψ2⟩ 相关。那么量子系统 s 和其环境 e 的状态为

|ψ⟩se=a|ψ1⟩s|ϕ1⟩e+b|ψ2⟩s|ϕ2⟩e

如果环境状态|ϕ1⟩e 和|ϕ2⟩e 是可区分的状态，那么这将完全破坏干涉条纹：粒子与屏幕的相互作用就像它们确定地通过了一个或另一个狭缝，而出现的图案是两个单缝图案的叠加结果。也就是说，我们可以将粒子视为（近似地）遵循确定轨迹，并以经典方式应用概率。

现在，宏观物体通常与一个庞大而复杂的环境发生相互作用——它们不断受到空气分子、光子等的轰击。因此，这样一个系统的约化态很快就会成为准经典态的混合态，这种现象被称为退相干。

退相干的一种推广是量子力学解释的一种方法，称为一致性历史方法（请参阅关于量子力学一致性历史方法的条目以获取概述）。

退相干在量子力学的其他方法中起着重要作用，尽管它所起的作用因方法而异；有关退相干在量子力学中的作用的信息，请参阅有关退相干在量子力学中的作用的条目。

### 4.5 对测量问题方法的比较

上述大多数方法认为目标是提供一个解释世界中事件的原理，至少在某种近似下，恢复类似于我们熟悉的经典物体行为的世界。主流方法中没有任何一种方法赋予意识观察者任何特殊的物理角色。然而，已经有了朝着这个方向的提议（有关量子研究方法与意识的讨论，请参阅该条目）。

所有上述方法都与观察一致。然而，仅仅一致是不够的；将量子理论与实验结果连接起来的规则通常涉及非平凡的（即不等于零或一）概率，这些概率被分配给实验结果。这些计算出的概率与重复实验的统计数据形式的经验证据相对比。现有的隐藏变量理论可以重现量子概率，而坍缩理论具有重现迄今为止进行的所有实验的量子概率的非常接近的特点，但在其他可想象的实验中与量子概率有所不同。这原则上允许通过实证来区分这些理论和非坍缩理论。

对埃弗雷特理论提出的批评是，不清楚它们是否能够对这种统计测试有意义，因为以任何直接的方式来说，当可以确定在波函数的某个分支上会出现所有可能的结果时，谈论获得某个实验的“+”结果的概率是没有意义的。这被称为“埃弗雷特证据问题”。这一问题已经成为埃弗雷特理论的研究重点；有关介绍和概述，请参见 Saunders（2007）。

如果接受埃弗雷特理论对证据问题的解决方案，那么在主要的研究方法中，没有一种方法在经验证据方面直接受到偏爱。这里没有足够的空间来对这些持续进行的讨论进行深入概述，但可以提及一些考虑因素，以使读者对讨论有所了解；有关特定方法的详细信息，请参阅相关条目。

埃弗雷特派认为，该方法的优点在于它不涉及量子形式主义的扩展或修改。玻姆派声称，这种方法提供了最直接的事件图像；当涉及到埃弗雷特派理论或坍缩理论时，本体论问题就不那么明确了。

另一个考虑因素是与相对论因果结构的兼容性。有关对测量问题方法的相对论约束的概述，请参阅 Myrvold（2021）。德布罗意-玻姆理论需要一个明确的远程同时性关系来进行其表述，并且可以争论的是，这是这类隐藏变量理论中不可消除的特征，它选择某些可观测量始终具有确定值（参见 Berndl 等人 1996 年；Myrvold 2002, 2021）。另一方面，有些坍缩模型是完全相对论的。在这种模型中，坍缩是局部事件。虽然空间分离的坍缩的概率不是独立的，但这种概率依赖并不要求我们将一个视为较早，另一个视为较晚。因此，这些理论不需要一个明确的远程同时性关系。然而，关于如何为这些理论配备可观测量（或“现实元素”）仍然存在一些讨论。请参阅有关坍缩理论的条目及其中的参考文献；另请参阅 Fleming（2016）、Maudlin（2016）和 Myrvold（2016）对该讨论的一些最新贡献。在埃弗雷特派理论的情况下，首先必须考虑如何提出相对论局域性的问题。几位作者以稍微不同的方式接近了这个问题，但得出了一个共同的结论，即埃弗雷特量子力学确实是局域的。（参见 Vaidman 1994；Bacciagaluppi 2002；Wallace 2012 的第 8 章；Tipler 2014；Vaidman 2016；Brown 和 Timpson 2016。）

## 5.本体论问题

如前所述，量子力学解释的一个核心问题是量子态是否应被视为在物理现实中代表着什么。如果肯定回答了这个问题，就会引发新的问题，即，量子态所代表的物理现实是什么样的，以及量子态是否原则上能够对物理现实给出详尽的解释。

### 5.1 量子态实在性的问题

Harrigan 和 Spekkens（2010）提出了一个讨论这些问题的框架。在他们的术语中，物理属性的完整规范由系统的本体态给出。本体论模型假设了一个本体态空间，并将任何制备过程与本体态上的概率分布相关联。如果本体态唯一确定了量子态，那么模型被称为 ψ-本体论；也就是说，存在一个从本体态到量子态的函数（这包括量子态也完全确定物理态的情况，以及量子态并不完全确定物理态的情况，如隐藏变量理论）。在他们的术语中，不是 ψ-本体论的模型被称为 ψ *-认识论*。如果一个模型不是 ψ-本体论的，这意味着某些本体态可能是由导致不同纯量子态分配的两个或更多制备过程的结果；也就是说，相同的本体态可能与不同的量子态兼容。

这提供了一个很好的方式来提出量子态实在性的问题：是否存在与不同纯量子态对应的准备，可以导致相同的本体态，或者反过来，是否存在与不同量子态兼容的本体态？Pusey、Barrett 和 Rudolph（2012）证明，如果一个人采用了一个看似自然的关于态准备的独立性假设，即假设可以以某种方式准备一对系统，使得两个系统的本体态的概率在效果上是独立的，那么答案是否定的；任何重现量子预测并满足这种准备独立性假设的本体论模型必须是一个 ψ-本体模型。

Pusey、Barrett 和 Rudolph（PBR）定理并没有排除关于量子态的反实在性的所有选择；关于量子态的反实在论者可以拒绝准备独立性假设，或者拒绝定理所设定的框架；参见 Spekkens（2015）中的讨论：92-93。请参阅 Leifer（2014）对与量子态实在性相关的定理进行仔细而全面的概述，以及 Myrvold（2020）对基于这类定理的量子态实在性的案例的介绍。

### 5.2 量子态的本体论范畴

测量问题的主要现实主义方法在某种程度上都是对量子态的现实主义。仅仅这样说是不足以解释给定解释的本体论的。需要解决的问题包括：如果量子态代表着某种物理上的实在，那么它是什么样的东西？这是关于量子态的本体论解释的问题。另一个问题是 EPR 问题，即量子态的描述是否可以被认为是原则上完备的，还是必须通过不同的本体论来补充。

德布罗意最初对“导引波”（pilot wave）的构想是它将是一个场，类似于电磁场。最初的构想是每个粒子都有自己的导引波。然而，在由薛定谔发展起来的量子力学中，对于两个或更多粒子的系统，没有每个粒子的单独波函数，而是一个定义在空间中 n 个点的 n 元组上的单一波函数，其中 n 是粒子的数量。德布罗意、薛定谔和其他人认为，这与将量子波函数视为场的构想相抵触。如果量子态在物理现实中代表着某种东西，那么它们与经典物理中熟悉的任何东西都不同。

一个被提出的回应是坚持认为量子波函数仍然是场，尽管是在一个极高维度的空间上，即 3n，其中 n 是宇宙中基本粒子的数量。从这个观点来看，这个高维空间被认为比熟悉的三维空间（或四维时空）更为基本，而后者通常被视为物理事件的舞台。参见 Albert（1996 年，2013 年）对这一观点的经典陈述；其他支持者包括 Loewer（1996 年）、Lewis（2004 年）、Ney（2012 年，2013 年 a、b，2021 年）和 North（2013 年）。对这一提议的大部分讨论发生在非相对论量子力学的背景下，这并不是一个基本理论。有人认为，考虑非相对论量子力学的波函数如何从量子场论中产生，削弱了波函数与配置空间上的场类似以及配置空间可以被认为比普通时空更为基本的观点（Myrvold 2015 年）。

将波函数视为高维空间上的场的观点必须与将其视为 Belot（2012）所称的多场的观点区分开来，后者将属性分配给普通三维空间点的 n 元组。这些是不同的观点；支持 3n 维概念的人们非常重视它恢复了可分性：在这个观点上，对世界在某个时间的完整规范是通过在基本（3n 维）空间的每个地址上规定局部事务的方式来给出的。另一方面，将波函数视为多场涉及接受不可分性。将波函数视为普通空间上的多场和将其视为高维空间上的场之间的另一个区别是，在多场观点上，普通三维空间与某个更基本空间的关系是没有问题的。Hubert 和 Romano（2018）认为波函数自然而直接地被解释为多场。

有人认为，在德布罗意-玻姆导引波理论和相关导引波理论中，量子态的作用更类似于经典力学中的定律；它的作用是为玻姆粒子提供动力学，而这些粒子根据该理论组成普通物体。参见 Dürr，Goldstein 和 Zanghì（1997），Allori 等人（2008），Allori（2021）。

Dürr，Goldstein 和 Zanghì（1992）引入了“原始本体论”一词，用于描述根据物理理论构成普通物理对象的内容；在德布罗意-玻姆理论中，这是玻姆粒子。Allori 等人（2008）将这一概念扩展到了坍缩理论的解释上。原始本体论与其他本体论（如量子态）有所区别，后者是为了解释原始本体论的行为而引入到理论中的。这种区别旨在指导如何理解理论的非原始本体论。

## 6. 量子计算和量子信息理论

量子力学不仅引发了解释上的困惑，还催生了计算和信息理论中的新概念。量子信息理论研究了量子理论所开启的信息处理和传输的可能性。这导致了对量子理论的不同视角，正如 Bub（2000 年，597 页）所说：“量子力学的令人困惑的特征被视为一种需要开发的资源，而不是需要解决的问题”（请参阅量子计算和量子纠缠与信息的条目）。

## 7. 量子力学及其重建

量子力学基础研究的另一个活跃领域是试图深入了解该理论的结构，以及它与经典物理学和其他可能构建的理论之间的差异，通过用非常普遍的原则来描述该理论的结构，通常具有信息论的特点。

这个项目源于 Mackey（1957, 1963），Ludwig（1964）和 Piron（1964）的早期工作，旨在用操作术语来描述量子力学。这导致了广义概率模型框架的发展。它还与 Birkhoff 和 von Neumann（1936）发起的量子逻辑研究有关（请参阅量子逻辑和概率论条目以获取概述）。

对于从具有明确操作内容的公理中推导量子理论的项目的兴趣，由 Hardy（2001 \[2008]，其他互联网资源）的工作重新引起。在这方面取得的重要结果包括 Masanes 和 Müller（2011）以及 Chiribella，D’Ariano 和 Perinotti（2011）的公理化。有关这一蓬勃发展的研究领域的概述，请参阅 Chiribella 和 Spekkens（2015）。

<!--md-padding-ignore-begin-->
## Bibliography

* Albert, David Z., 1996, “Elementary quantum metaphysics”, in J.T. Cushing, A. Fine, & S. Goldstein (eds.), *Bohmian Mechanics and Quantum Mechanics: An appraisal*, Dordrecht: Kluwer, 277–284.
* –––, 2013, “Wave function realism”, in Ney and Albert (eds.) 2013: 52–57.
* Allori, Valia, 2013, “Primitive Ontology and the Structure of Fundamental Physical Theories”, in Ney and Albert (eds.) 2013: 58–90.
* Allori, Valia, 2021, “Wave-functionalism”, *Synthese*, 199: 12271–12293.
* Allori, Valia, Sheldon Goldstein, Roderich Tumulka, and Nino Zanghì, 2008, “On the Common Structure of Bohmian Mechanics and the Ghirardi–Rimini–Weber Theory”, *The British Journal for the Philosophy of Science*, 59(3): 353–389. doi:10.1093/bjps/axn012
* Bacciagaluppi, Guido, 2002, “Remarks on Space-time and Locality in Everett’s Interpretation”, in T. Placzek and J. Butterfield (eds.), *Non-locality and Modality*, Berlin: Springer, 105–124.
* Bacciagaluppi, Guido, and Antony Valentini, 2009, *Quantum Theory at the Crossroads: Reconsidering the 1927 Solvay Conference*, Cambridge: Cambridge University Press.
* Bell, J.S., 1966, “On the Problem of Hidden Variables in Quantum Mechanics”, *Reviews of Modern Physics*, 38: 447–52; reprinted in Bell 2004: 1–13.
* –––, 1986, “Six Possible Worlds of Quantum Mechanics”, in S. Allén (ed.), *Possible Worlds in Humanities, Arts and Sciences*, Berlin, Walter de Gruyter, 359–373; reprinted in Bell 2004, 181–195.
* –––, 1987, “Are There Quantum Jumps?” in C.W. Kilmister (ed), *Schrödinger: Centenary celebration of a polymath*, Cambridge: Cambridge University Press, 41–52; reprinted in Bell 2004: 201–212.
* –––, 1990, “Against ‘Measurement’”, *Physics World*, 3: 33–40; reprinted in Bell 2004: 213–231.
* –––, 2004, *Speakable and Unspeakable in Quantum Mechanics*, 2nd edition, Cambridge: Cambridge University Press.
* Bell, Mary and Shan Gao (eds.), 2016, *Quantum Nonlocality and Reality: 50 Years of Bell’s Theorem*, Cambridge: Cambridge University Press.
* Belot, Gordon, 2012, “Quantum States for primitive ontologists: a case study”, *European Journal for the Philosophy of Science*, 2: 67–83.
* Berndl, Karin, Detlef Dürr, Sheldon Goldstein, and Nino Zanghì, 1996, “Nonlocality, Lorentz invariance, and Bohmian quantum theory“, *Physical Review A*, 53: 2062–2073.
* Birkhoff, Garrett, and John von Neumann, 1936, “The Logic of Quantum Mechanics”, *Annals of Mathematics* (second series), 37: 823–43.
* Bong, Kok-Wei, Aníbal Utreras-Alarcón, Farzad Ghafari, Yeong-Cherng Liang, Nora Tischler, Eric G. Cavalcanti, Geoff J. Pryde & Howard M. Wiseman, 2020, “A strong no-go theorem on the Wigner’s friend paradox”, *Nature Physics*, 16: 1199–1205.
* Brown, Harvey R. and Christopher G. Timpson, 2016,“Bell on Bell’s Theorem: The Changing Face of Nonlocality”, in Bell and Gao (eds.) 2016: 91–123.
* Brukner, Časlav, 2018, “A no-go theorem for observer-independent facts”, *Entropy*, 20(5): 350.
* Bub, Jeffrey, 2000, “Indeterminacy and entanglement: the challenge of quantum mechanics”, *The British Journal for the Philosophy of Science*, 51: 597–615.
* –––, 2020, “‘Two Dogmas’ Redux”, in M. Hemmo and O. Shenker (eds.), *Quantum, Probability, Logic: The Work and Influence of Itamar Pitowsky*, Berlin: Springer, 199–216.
* –––, 2021, “Understanding the Frauchiger–Renner Argument”, *Foundations of Physics*, 51: 36.
* Cavalcanti, Eric, 2021, “The View from a Wigner Bubble”, *Foundations of Physics*, 51: 39.
* Cavalcanti, Eric, and Howard M. Wiseman, 2021, “Implications of Local Friendliness for Violation for Quantum Causality”, *Entropy*, 23: 925.
* Chiribella, Giulio, Giacomo Mauro D’Ariano, and Paolo Perinotti, 2011, “Informational derivation of quantum theory”, *Physical Review A*, 84: 012311. doi:10.1103/PhysRevA.84.012311
* Chiribella, Giulio and Robert W. Spekkens (eds.), 2015, *Quantum Theory: Informational Foundations and Foils*, Berlin: Springer.
* Dascal, Michael, 2020, “What’s left for the neo-Copenhagen theorist”, *Studies in History and Philosophy of Modern Physics*, 72: 310–321.
* Deutsch, David and Patrick Hayden, 2000, “Information flow in entangled quantum systems”, *Proceedings of the Royal Society of London A*, 456: 1759–74.
* Dieks, Dennis, 2019, “Quantum Mechanics and Perspectivalism”, in O. Lombardi, S. Fortin, C. Lopez, and F. Holik (eds.), *Quantum Worlds: Perspectives on the Ontology of Quantum Mechanics*, Cambridge: Cambridge University Press, 51–70.
* Dirac, P.A.M., 1935, *Principles of Quantum Mechanics*, 2nd edition, Oxford: Oxford University Press.
* Dürr, Detlef, Sheldon Goldstein, and Nino Zanghì, “Quantum Equilibrium and the Origin of Absolute Uncertainty”, *Journal of Statistical Physics*, 67: 843–907.
* –––, 1997, “Bohmian Mechanics and the Meaning of the Wave Function”, in R.S. Cohen, M. Horne and J. Stachel (eds.), *Experimental Metaphysics: Quantum Mechanical Studies for Abner Shimony* (Volume 1), Boston: Kluwer Academic Publishers.
* Einstein, Albert, Boris Podolsky, and Nathan Rosen, 1935, “Can Quantum-Mechanical Description of Reality Be Considered Complete?” *Physical Review*, 47: 777–780.
* Einstein, Albert, 1936, “Physik und Realität”, *Journal of the Franklin Institute*, 221: 349–382. English translation in Einstein 1954.
* –––, 1948, “Quanten-Mechanik und Wirklichkeit”, *Dialectica*, 2: 320–324.
* –––, 1949, “Autobiographical notes”, in P.A. Schilpp (ed.), *Albert Einstein: Philosopher-Scientist*, Chicago: Open Court.
* –––, 1954, “Physics and reality”, in *Ideas and Opinions*, New York: Crown Publishers, Inc., 290–323 (translation of Einstein 1936).
* Egg, Matthias, 2017, “The physical salience of non-fundamental local beables”, *Studies in History and Philosophy of Modern Physics*, 57: 104–110.
* –––, 2021, “Quantum Ontology without Speculation”. *European Journal for Philosophy of Science*, 11: 32.
* Evans, Peter W., 2020, “Perspectival objectivity, Or: how I learned to stop worrying and love observer-dependent reality”, *European Journal for Philosophy of Science*, 10: 19.
* Everett III, Hugh, 2012, *The Everett Interpretation of Quantum Mechanics: Collected Works 1955–1980 With Commentary*, Jeffrey A. Barrett and Peter Byrne (eds.), Princeton: Princeton University Press.
* Fleming, Gordon N., 2016, “Bell Nonlocality, Hardy’s Paradox and Hyperplane Dependence”, in Bell and Gao (eds.) 2016: 261–281.
* Fortin, Sebastian, and Olimpia Lombardi, 2020, “The Frauchiger-Renner argument: A new no-go result?” *Studies in History and Philosophy of Modern Physics*, 70: 1–7.
* Frauchiger, Daniela, & Renato Renner, 2018, “Quantum theory cannot consistently describe the use of itself”, *Nature Communications*, 9: 3711.
* Freire Jr., Olival , Guido Bacciagaluppi, Olivier Darrigol, Thiago Hartz, Christian Joas, Alexei Kojevnikov, and Osvaldo Pessoa Jr. (eds.), 2022, *The Oxford Handbook of the History of Quantum Interpretations*, Oxford: Oxford University Press.
* French, Steven, and Juha Saatsi (eds.), 2020, *Scientific Realism and the Quantum*, Oxford: Oxford University Press.
* Fuchs, Christopher A., N. David Mermin, and Rüdiger Schack, 2014, “An introduction to QBism with an application to the locality of quantum mechanics”, *American Journal of Physics*, 82: 749–752.
* Gao, Shan (ed.), 2018, *Collapse of the Wave Function: Models, Ontology, Origin, and Implications*, Cambridge: Cambridge University Press.
* Guérin, Philippe Allard, Veronika Baumann, Flavio Del Santo, and Časlav Brukner, 2021, “A no-go theorem for the persistent reality of Wigner’s friend’s perception”, *Communications Physics*, 4: 93.
* Harrigan, Nicholas and Robert W. Spekkens, 2010, “Einstein, Incompleteness, and the Epistemic View of Quantum States”, *Foundations of Physics*, 40: 125–157.
* Healey, Richard, 2012, “Quantum Theory: A Pragmatist Approach”, *The British Journal for the Philosophy of Science*, 63: 729–771.
* –––, 2017a, “Quantum States as Objective Informational Bridges”, *Foundations of Physics*, 47: 161–173.
* –––, 2017b, *The Quantum Revolution in Philosophy*, Oxford: Oxford University Press.
* –––, 2018, “Quantum theory and the limits of objectivity”, *Foundations of Physics*, 48: 1568–1589.
* —, 2020, “Pragmatist Quantum Realism”, in French and Saatsi (eds.), 2021: 123–146.
* Heisenberg, Werner, 1930a, *Die Physicalische Prinzipien der Quantentheorie*, Leipzig: Verlag von S. Hirzel.
* –––, 1930b, *The Physical Principles of the Quantum Theory*, Carl Eckert and F.C. Hoyt (trans.), Chicago: University of Chicago Press.
* Howard, Don, 2004, “Who Invented the ‘Copenhagen Interpretation’? A Study in Mythology”, *Philosophy of Science*, 71: 669–682.
* Hubert, Mario, and Davide Romano, 2018, “The wave-function as a multi-field”, *European Journal for the Philosophy of Science*, 8: 521–537.
* Kastner, Ruth, 2020, “Unitary‑Only Quantum Theory Cannot Consistently Describe the Use of Itself: On the Frauchiger–Renner Paradox”, *Foundations of Physics*, 50: 441–456.
* Knox, Eleanor, and Alastair Wilson (eds.), 2021, *The Routledge Companion to Philosophy of Physics*, London: Routledge.
* Kochen, Simon and Ernst Specker, 1967, “The Problem of Hidden Variables in Quantum Mechanics”, *Journal of Mathematics and Mechanics*, 17: 59–87.
* Lazarovici, Dustin, and Mario Hubert, 2019, “How Quantum Mechanics can consistently describe the use of itself”, *Scientific Reports*, 9: 470.
* Leifer, Matthew Saul, 2014, “Is the Quantum State Real? An Extended Review of ψ-ontology Theorems”, *Quanta*, 3: 67–155.
* Lewis, Peter J., 2004, “Life in configuration space”, *The British Journal for the Philosophy of Science*, 55: 713–729. doi:10.1093/bjps/55.4.713
* Loewer, B., 1996, “Humean supervenience”, *Philosophical Topics*, 24: 101–127.
* London, Fritz and Edmond Bauer, 1939, *La théorie de l’observation en mécanique quantique*, Paris: Hermann. English translation, “The theory of observation in quantum mechanics”, in *Quantum Theory and Measurement*, J.A. Wheeler and W.H. Zurek (eds.), Princeton: Princeton University Press, 1983, 217–259.
* Losada, Marcelo, Roberto Laura, and Olimpia Lombardi, 2019, “Frauchiger-Renner argument and quantum histories”, *Physical Review A*, 100: 052114.
* Ludwig, G., 1964, “Versuch einer axiomatischen Grundlegung der Quantenmechanik und allgemeinerer physikalischer Theorien”, *Zeitschrift für Physik*, 181: 233–260.
* Mackey, George W. 1957, “Quantum Mechanics and Hilbert Space”, *American Mathematical Monthly*, 64: 45–57.
* –––, 1963, *The Mathematical Foundations of Quantum Mechanics: A lecture-note volume*, New York: W.A. Benjamin.
* Masanes, Lluís and Markus P. Müller, 2011, “A derivation of quantum theory from physical Requirements”, *New Journal of Physics*, 13: 063001.
* Maudlin, Tim, 2016, “Local Beables and the Foundations of Physics”, in Bell and Gao (eds.) 2016: 317–330.
* Muciño, R., and E. Okon, 2020, “Wigner’s convoluted friends”, *Studies in History and Philosophy of Modern Physics*, 72: 87–90.
* Myrvold, Wayne C., 2002, “Modal Interpretations and Relativity”, *Foundations of Physics*, 32: 1773–1784.
* –––, 2015, “What is a Wavefunction?” *Synthese*, 192: 3247–3274.
* –––, 2016, “Lessons of Bell”s Theorem: Nonlocality, Yes; Action at a Distance, Not Necessarily”, in Bell and Gao (eds.) 2016: 237–260.
* –––, 2018, “Ontology for Collapse Theories,” in Gao (ed.) 2018: 97–123.
* –––, 2020, “On the Status of Quantum State Realism,” in French and Saatsi (eds.), 2020: 229–251.
* –––, 2021, “Relativistic Constraints on Interpretations of Quantum Mechanics”, in Knox and Wilson (eds.) 2021: 99–121.
* Ney, Alyssa, 2012, “The status of our ordinary three dimensions in a quantum universe”, *Noûs*, 46: 525–560.
* –––, 2013a, “Introduction”, in Ney and Albert (eds.) 2013: 1–51.
* –––, 2013_b_, “Ontological reduction and the wave function ontology”, in Ney and Albert (eds.) 2013: 168– 183.
* –––, 2021, *The World in the Wave Function: A Metaphysics for Quantum Physics*, Oxford, Oxford University Press.
* Ney, Alyssa and David Z. Albert (eds.), 2013, *The Wave Function: Essays on the Metaphysics of Quantum Mechanics*, Oxford: Oxford University Press.
* North, Jill, 2013, “The structure of a quantum world”, in Ney and Albert (eds.) 2013: 184–202.
* Piron, Constantin, 1964, “Axiomatique quantique”, *Helvetica Physica Acta*, 37: 439–468.
* Pusey, Matthew F., Jonathan Barrett, and Terry Rudolph, 2012, “On the Reality of the Quantum State”, *Nature Physics*, 8: 475–478.
* Saunders, Simon, 2007. “Many Worlds? An Introduction”, in S. Saunders, J. Barrett, A. Kent, and D. Wallace (eds.), *Many Worlds? Everett, Quantum Theory, and Reality*, Oxford: Oxford University Press, 1–50.
* Spekkens, Robert W., 2007, “Evidence for the Epistemic view of Quantum States: A Toy Theory”, *Physical Review A*, 75: 032110.
* –––, 2015, “Quasi-Quantization: Classical Statistical Theories with an Epistemic Restriction”, in Chiribella and Spekkens 2015: 83–135.
* Sudbery, Anthony, 2017, “Single-world theory of the extended Wigner’s friend experiment”, *Foundations of Physics*, 47: 658–669.
* –––, 2019, “The Hidden Assumptions of Frauchiger and Renner”, *International Journal of Quantum Foundations*, 5: 98-109.
* Tipler, Frank J., 2014, “Quantum nonlocality does not exist”, *Proceedings of the National Academy of Sciences*, 111: 11281–6.
* Vaidman, Lev, 1994, “On the paradoxical aspects of new quantum experiments”, in D. Hull, M. Forbes and R.M. Burian (eds.), *PSA 1994* (Volume 1), Philosophy of Science Association, 211–17.
* –––, 2016, “The Bell Inequality and the Many-Worlds Interpretation”, in Bell and Gao (eds.) 2016: 195–203.
* von Neumann, John, 1932, *Mathematische Grundlagen der Quantenmechanik*, Berlin, Springer Verlag.
* –––, 1955, *Mathematical Foundations of Quantum Mechanics*, Robert T. Beyer (trans.), Princeton: Princeton University Press.
* Wallace, David, 2012, *The Emergent Multiverse: Quantum Theory according to the Everett interpretation*, Oxford: Oxford University Press.
* –––, 2020, “On the Plurality of Quantum Theories: Quantum Theory as a Framework, and its Implications for the Quantum Measurement Problem”, in French and Saatsi (eds.) 2020: 78–102.
* Wigner, Eugene P., 1962, “Remarks on the Mind-Body Problem”, in I.J. Good (ed.), *The Scientist Speculates: An Anthology of Partly-Baked Ideas*, London: William Heinemann, 284–320; reprinted in Wigner (1967), 171–184.
* –––, 1967, *Symmetries and Reflections: Scientific Essays of Eugene P. Wigner*, Bloomington, Indiana University Press.
* Żukowski, Marek, and Marcin Markiewicz, 2021, “Physics and Metaphysics of Wigner’s Friends: Even Performed Pre-measurements Have No Results”, *Physical Review Letters*, 126: 130402.

## Academic Tools

| ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=qt-issues).                                                                      |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/qt-issues/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
| ![inpho icon](https://plato.stanford.edu/symbols/inpho.png)         | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=qt-issues\&redirect=True) at the Internet Philosophy Ontology Project (InPhO).   |
| ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif)      | [Enhanced bibliography for this entry](https://philpapers.org/sep/qt-issues/) at [PhilPapers](https://philpapers.org/), with links to its database.                          |

## Other Internet Resources

* Feynman, R., [Lectures on Physics](http://www.feynmanlectures.caltech.edu/III\_toc.html). These are introductory lectures aimed at physics undergraduates.
* Hardy, Lucien, 2001 \[2008], “[Quantum Theory from Five Reasonable Axioms](https://arxiv.org/abs/quant-ph/0101012v4)”, manuscript at arxiv.org originally submitted in 2001, but now is labeled version 4 (2008).
* Lewis, Peter J., “[Interpretations of Quantum Mechanics](http://www.iep.utm.edu/int-qm/)”, *Internet Encyclopedia of Philosophy*.
* Norton, John, “[Origins of Quantum Theory](http://www.pitt.edu/\~jdnorton/teaching/HPS\_0410/chapters/quantum\_theory\_origins/),” A good introduction to the history of quantum theory, about which little is said in the present entry.
* [PhET Interactive Simulations project](http://phet.colorado.edu/en/simulations/category/physics/quantum-phenomena), University of Colorado Boulder; these pages contain useful simulations of classic quantum experiments.

## Related Entries

[Bell’s Theorem](https://plato.stanford.edu/entries/bell-theorem/) | [physics: holism and nonseparability](https://plato.stanford.edu/entries/physics-holism/) | [quantum mechanics](https://plato.stanford.edu/entries/qm/) | [quantum mechanics: action at a distance in](https://plato.stanford.edu/entries/qm-action-distance/) | [quantum mechanics: Bohmian mechanics](https://plato.stanford.edu/entries/qm-bohm/) | [quantum mechanics: collapse theories](https://plato.stanford.edu/entries/qm-collapse/) | [quantum mechanics: consistent histories approach](https://plato.stanford.edu/entries/qm-consistent-histories/) | [quantum mechanics: Copenhagen interpretation of](https://plato.stanford.edu/entries/qm-copenhagen/) | [quantum mechanics: Everettian](https://plato.stanford.edu/entries/qm-everett/) | [quantum mechanics: Kochen-Specker theorem](https://plato.stanford.edu/entries/kochen-specker/) | [quantum mechanics: many-worlds interpretation of](https://plato.stanford.edu/entries/qm-manyworlds/) | [quantum mechanics: modal interpretations of](https://plato.stanford.edu/entries/qm-modal/) | [quantum mechanics: relational](https://plato.stanford.edu/entries/qm-relational/) | [quantum mechanics: the role of decoherence in](https://plato.stanford.edu/entries/qm-decoherence/) | [quantum theory: and consciousness](https://plato.stanford.edu/entries/qt-consciousness/) | [quantum theory: and mathematical rigor](https://plato.stanford.edu/entries/qt-nvd/) | [quantum theory: quantum computing](https://plato.stanford.edu/entries/qt-quantcomp/) | [quantum theory: quantum entanglement and information](https://plato.stanford.edu/entries/qt-entangle/) | [quantum theory: quantum field theory](https://plato.stanford.edu/entries/quantum-field-theory/) | [quantum theory: quantum gravity](https://plato.stanford.edu/entries/quantum-gravity/) | [quantum theory: quantum logic and probability theory](https://plato.stanford.edu/entries/qt-quantlog/) | [quantum theory: the Einstein-Podolsky-Rosen argument in](https://plato.stanford.edu/entries/qt-epr/) | [Uncertainty Principle](https://plato.stanford.edu/entries/qt-uncertainty/)

[Copyright © 2022](https://plato.stanford.edu/info.html#c) by\
[Wayne Myrvold](http://publish.uwo.ca/\~wmyrvold/) <[*wmyrvold@uwo.ca*](mailto:wmyrvold%40uwo%2eca)>
<!--md-padding-ignore-end-->
