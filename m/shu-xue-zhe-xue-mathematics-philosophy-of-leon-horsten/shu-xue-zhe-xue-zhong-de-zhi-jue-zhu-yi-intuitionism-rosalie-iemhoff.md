# 数学哲学中的直觉主义 intuitionism (Rosalie Iemhoff)

*首次发表于2008年9月4日；实质修订于2019年6月11日。*

直觉主义是由荷兰数学家 L.E.J.布劳尔（1881-1966）引入的一种数学哲学。直觉主义基于数学是心灵的创造的观念。数学陈述的真实性只能通过一种心理建构来理解，证明其为真实，并且数学家之间的交流只是为了在不同的思维中创造相同的心理过程。

这种对数学的看法对日常数学实践有深远的影响，其中一个后果是排中律（A∨¬A）原则不再有效。事实上，存在一些命题，如黎曼猜想，目前既没有对该命题的证明，也没有对其否定的证明。在直觉主义中，知道一个命题的否定意味着可以证明该命题不为真，这意味着在直觉主义中，A 和¬A 都不成立，至少在此刻不成立。直觉主义对时间的依赖是必不可少的：随着时间的推移，陈述可以变得可证明，因此可能在直觉上成立，而之前可能不成立。

除了拒绝排中律原则外，直觉主义在对连续体的概念上与古典数学有很大的偏差，在前者的设定中，连续体具有所有在其上的全函数都是连续的属性。因此，与其他一些构造性数学理论不同，直觉主义不是对古典推理的限制；它以一种根本性的方式与古典数学相矛盾。

布劳尔（Brouwer）将他的一生中的大部分时间都致力于在这个新基础上发展数学。尽管直觉主义从未取代古典数学成为数学的标准观点，但它一直吸引着很多关注，并且今天仍然广泛研究。

在本文中，我们重点关注直觉主义与其他构造性数学分支的不同之处，而与基础理论和模型等其他形式的构造主义共享的部分仅作简要讨论。

---

## 1. Brouwer

Luitzen Egbertus Jan Brouwer 出生于荷兰的 Overschie。他在阿姆斯特丹大学学习数学和物理，并于 1907 年获得博士学位。1909 年，他成为同一所大学的讲师，并于 1912 年被任命为正教授，这个职位他一直担任到 1951 年退休。布劳尔是一位杰出的数学家，在拓扑学方面做出了开创性的工作，并在年轻时就已经出名。他一生都是一个独立思考的人，以热情和活力追求自己所信仰的事物，这使他与许多同事发生冲突，尤其是与大卫·希尔伯特。他也有一些崇拜者，在他位于布拉里库姆的“小屋”里，他欢迎了许多当时著名的数学家。在他生命的最后阶段，他变得更加孤立，但他对自己哲学真理的信念从未动摇。他在布拉里库姆的一次车祸中去世，享年 85 岁，七年前他的妻子 Lize Brouwer 去世。

24 岁时，布劳尔写了一本名为《生活、艺术与神秘主义》（Brouwer 1905）的书，其中的唯我论内容预示了他的数学哲学。在他的博士论文中，直觉主义的基础首次被提出，尽管还没有以那个名字，并且还没有最终形式。在他的博士论文之后的几年里，布劳尔的科学生涯大部分时间都致力于拓扑学，他在这个领域以他的维度理论和不动点定理而闻名。这项工作是古典数学的一部分；根据布劳尔后来的观点，他的不动点定理不成立，尽管可以根据他的原则证明一个近似的类比成立。

从 1913 年开始，布劳尔越来越致力于将他在论文中提出的思想发展成一种完整的数学哲学。他不仅完善了直觉主义哲学，还根据这些原则重新构建了数学，特别是连续体理论和集合论。到那时，布劳尔已经是一位著名的数学家，在当时的科学圣地剑桥、维也纳和哥廷根等地发表了有影响力的直觉主义演讲。他的哲学被许多人认为是尴尬的，但在他那个时代，一些最著名的数学家将其视为对古典推理的一种严肃的替代方法，即使他们对此有不同的看法。库尔特·哥德尔一生都是一个柏拉图主义者，他就是其中之一。赫尔曼·韦尔曾经写道：“所以我现在放弃了自己的尝试，加入了布劳尔”（韦尔 1921 年，56 页）。尽管他后来很少实践直觉主义数学，但韦尔从未停止钦佩布劳尔及其直觉主义数学哲学。

布劳尔的一生充满了冲突，其中最著名的冲突是与大卫·希尔伯特的冲突，最终导致布劳尔被驱逐出《数学年鉴》的编辑委员会。这场冲突是 20 世纪初震动数学界的《数学基础争论》的一部分，它是由数学中出现的悖论和高度非构造性证明引起的。哲学家和数学家被迫承认数学缺乏认识论和本体论基础。布劳尔的直觉主义是一种旨在提供这样一个基础的数学哲学。

## 2. 直觉主义

### 2.1 直觉主义的两个行为

根据布劳尔，数学是心灵无语的创造。时间是唯一的先验概念，以康德的意义而言。布劳尔区分了直觉主义的两个行为：

直觉主义的第一个行为是：

> 完全将数学与数学语言以及由理论逻辑描述的语言现象分离开来，认识到直觉主义数学是一种本质上无语言的心智活动，其起源于对时间流动的感知。这种对时间流动的感知可以描述为生活瞬间的分离成两个不同的事物，其中一个让位于另一个，但被记忆所保留。如果这样诞生的二元性剥夺了所有的品质，它就会转化为所有二元性的共同基质的空形式。而这个共同基质，这个空形式，就是数学的基本直觉。（布劳尔 1981，4-5）

如同在数学部分中将要讨论的那样，直觉主义的第一行动产生了自然数，但对允许的推理原则有严格的限制，尤其是拒绝排中律原则。由于拒绝了这个原则并且连续体的逻辑基础消失了，正如布劳尔所说，“人们担心直觉主义数学必然贫乏而无力，特别是对于分析学没有任何位置”（布劳尔 1952，142）。然而，第二行动确立了连续体的存在，这个连续体具有其经典对应物所没有的特性。连续体的恢复依赖于第二行动中规定的选择序列的概念，即由自由选择生成的无限序列的存在，因此这些序列事先并不固定。

直觉主义的第二行动是：

> 承认两种创建新数学实体的方式：首先是以更或多或少自由进行的无限数学实体序列的形式，这些数学实体是先前获得的...；其次是以数学种类的形式，即可假设为先前获得的数学实体的属性，满足这样的条件：如果它们对某个数学实体成立，那么它们也对所有被定义为“相等”的数学实体成立...。（布劳尔，1981 年，8 页）

直觉主义的这两种行为构成了布劳尔哲学的基础；仅凭这两种行为，布劳尔就创造了直觉主义数学的领域，如下所述。从这些基本原则中，可以得出直觉主义与柏拉图主义和形式主义的不同之处，因为它既不假设数学现实存在于我们之外，也不认为数学是按照某些固定规则进行符号游戏。在布劳尔看来，语言用于交流数学思想，但后者的存在与前者无关。直觉主义与其他关于数学的建构观之间的区别在于第二种行为在构建无限序列时所允许的自由。事实上，如下所述，直觉主义第二种行为的数学含义与古典数学相矛盾，因此在大多数建构理论中并不成立，因为这些理论通常是古典数学的一部分。

因此，布劳尔的直觉主义与其他数学哲学不同；它基于对时间的认识和数学是自由思维的创造的信念，因此既不是柏拉图主义也不是形式主义。它是一种建构主义的形式，但只是在更广义上，因为许多建构主义者并不接受布劳尔认为是真实的所有原则。

### 2.2 创造主体

直觉主义的两个直觉行为本身并不排除对数学的心理解释。尽管布劳尔只偶尔提到这一点，但从他的著作中可以清楚地看出，他认为直觉主义是独立于心理学的。布劳尔引入了创造主体（Brouwer 1948）作为一个理想化的思维过程，其中数学发生的地方已经抽象掉了人类推理的非本质方面，如空间和时间的限制以及错误论证的可能性。因此，互为主体性问题，即要求解释人类能够交流的事实的问题，不复存在，因为只存在一个创造主体。在文献中，创造性主体的名称也被用来代替创造主体，但这里使用布劳尔的术语。在（Niekus 2010）中，有人认为布劳尔的创造主体不涉及理想化的数学家。关于创造主体作为胡塞尔意义上的超验主体的现象学分析，请参见（van Atten 2007）。

布劳尔使用涉及创造主体的论证来构造对某些直觉主义不可接受的陈述的反例。在下面讨论的弱反例中，只能表明某些陈述目前不能以直觉主义方式接受，而理想化思维过程的概念则证明了某些经典原理是错误的。在第 5.4 节中给出了一个关于创造主体概念形式化的例子。在那里还解释了以下原理，即所谓的克里普基模式，可以从创造主体的角度进行论证：

(KS)∃α(A↔∃nα(n)=1).

在 KS 中，A 涵盖公式，α涵盖由创造主体产生的选择序列，这些序列是由创造主体逐个选择其元素而产生的自然数序列。选择序列和 Kripke 的模式在第 3.4 节中进一步讨论。

在大多数数学哲学中，例如在直觉主义中，数学陈述是无时态的。在直觉主义中，真与假具有时间性的方面；一个已经确立的事实将保持不变，但在某个时间点被证明的陈述在此之前缺乏真值。在所述的创造主体概念的形式化中，这个概念并非由布劳尔提出，而是后来由其他人提出，直觉主义的时间性显而易见。

尽管使用“创造主体”概念的论证对于进一步理解直觉主义作为数学哲学的重要性可能很大，但它在该领域的发展中的作用比直接导致布劳尔和他之后的数学家愿意接受的数学真理的两个直觉主义行为的作用要小。

## 3. 数学

虽然布劳尔对直觉主义的发展在 20 世纪初的数学家基础性辩论中起到了重要作用，但他的哲学对数学的深远影响只有经过多年的研究才变得明显。直觉主义的两个最显著特点是它允许在证明中使用的逻辑推理原则和直觉连续体的完整概念。只有在后者方面，直觉主义才与古典数学不可比拟。本文重点介绍直觉主义与其他数学学科的区别，因此其其他建设性方面将被较少详细讨论。

### 3.1 直觉主义的 BHK 解释

在直觉主义中，知道一个陈述 A 是真的意味着拥有一个证明。1934 年，布劳尔的学生阿伦德·海廷引入了一种后来被称为布劳尔-海廷-科尔莫戈洛夫解释的形式，它捕捉了直觉主义中逻辑符号的含义，以及构造主义的一般含义。它以非正式的方式定义了直觉主义证明应该包含的内容，指示了如何解释连接词和量词。

* ⊥不可证明。
* 一个对于 A∧B 的证明由一个对于 A 的证明和一个对于 B 的证明组成。
* 一个对于 A∨B 的证明由一个对于 A 的证明或一个对于 B 的证明组成。
* 一个对于 A→B 的证明是一种构造，它将任何对于 A 的证明转化为一个对于 B 的证明。
* 给出∃xA(x)的证明是通过提供一个域中的元素 d 和 A(d)的证明来完成的。
* 给出∀xA(x)的证明是一种将属于域的每个证明转化为 A(d)的证明的构造。

一旦证明了不存在 A 的证明，即提供了一个从任何可能的 A 的证明中推导出虚假的构造，就可以证明公式 A 的否定¬A。因此，¬A 等价于 A→⊥。BHK 解释不是一个形式定义，因为构造的概念没有被定义，因此可以有不同的解释。然而，即使在这个非正式的层面上，人们也被迫拒绝古典逻辑中一直存在的逻辑原则之一：排中律(A∨¬A)。根据 BHK 解释，如果创造主体知道 A 的证明或证明 A 不能被证明，那么这个陈述在直觉主义下成立。如果对于 A 和它的否定都没有已知的证明，那么陈述(A∨¬A)不成立。存在开放问题，如哥德巴赫猜想或黎曼猜想，就说明了这一事实。但一旦找到了 A 的证明或它的否定的证明，情况就会改变，对于这个特定的 A，从那一刻起，原则(A∨¬A)就成立了。

### 3.2 直觉主义逻辑

布劳尔基于他的哲学观点拒绝了排中律原则，但阿伦德·海廷是第一个从直觉主义观点出发制定了可接受的原则的综合逻辑。直觉主义逻辑，也是大多数其他形式的建构主义逻辑，通常被称为“没有排中律原则的经典逻辑”。它用 IQC 表示，代表直觉主义量词逻辑，但文献中也出现了其他名称。在希尔伯特风格中的可能公理化包括以下原则

| A∧B→A                       | A∧B→B       | A→A∨B                    | B→A∨B |
| ------------------------------- | --------------- | ---------------------------- | --------- |
| A→(B→A)                     | ∀xA(x)→A(t) | A(t)→∃xA(x)              | ⊥→A   |
| (A→(B→C))→((A→B)→(A→C)) |               |                            |         |
| A→(B→A∧B)                  |               |                            |         |
| (A→C)→((B→C)→(A∨B→C))   |               |                            |         |
| ∀x(B→A(x))→(B→∀xA(x))    |               | ∀x(A(x)→B)→(∃xA(x)→B) |         |

以最后两个公理的通常附加条件和推理规则 Modus Ponens 开始，

从 A 和(A→B)推导出 B，

作为唯一的推理规则。直觉主义逻辑自 Heyting 提出以来一直是研究的对象。在命题层面上，它与经典逻辑有许多不同之处，例如析取性质：

(DP)IQC⊢A∨B 意味着 IQC⊢A 或 IQC⊢B。

这个原则在经典逻辑中明显被违反，因为经典逻辑证明了独立于逻辑的公式 (A∨¬A) ，即 A 和 ¬A 都不是永真式。直觉主义逻辑中包含了“虚假推出任何”的原则 (⊥→A)，这是研究布劳尔关于该主题的评论的一个讨论点；在 van Atten 2008 中，有人认为该原则在直觉主义中无效，布劳尔的观点认为有效的逻辑原则是相关逻辑的原则。有关布劳尔和“虚假推出任何”的更多信息，请参阅 van Dalen 2004。

尽管直觉推理中使用的所有逻辑都包含在 IQC 中，但原则上可以想象，在某些时候会发现一种从直觉主义观点可接受但不被这种逻辑所覆盖的原则。对于大多数形式的建构主义，广泛接受的观点是这种情况永远不会发生，因此 IQC 被认为是建构主义的逻辑。对于直觉主义来说，情况不太清楚，因为不能排除我们的直觉主义理解可能会引导我们理解之前未曾掌握的新的逻辑原则。

直觉主义逻辑被广泛使用的原因之一是它在证明论和模型论的角度上都表现良好。存在许多针对它的证明系统，如 Gentzen 演算和自然推理系统，以及各种形式的语义，如 Kripke 模型、Beth 模型、Heyting 代数、拓扑语义和范畴模型。然而，其中几种语义只是研究直觉主义逻辑的经典手段，因为可以证明它们与之间不存在直觉主义的完备性证明（Kreisel 1962）。然而，已经证明存在一些替代但稍微不太自然的模型，对于这些模型而言，完备性是可以建设性地成立的（Veldman 1976）。直觉主义逻辑的建设性特征在 Curry-Howard 同构中变得特别清晰，该同构建立了逻辑推导和简单类型λ演算中的项之间的对应关系，即证明和计算之间的对应关系。这种对应保持结构，即项的规约对应于证明的归一化。

### 3.3 自然数

自然数的存在是由直觉主义的第一个直觉行为给出的，即对时间的运动和生活瞬间的分离的感知：过去的事物为 1，现在的事物与过去的事物为 2，以此类推到 3、4、……与经典数学相反，在直觉主义中，所有的无穷都被认为是潜在的无穷。特别是对于自然数的无穷而言，这种情况更是如此。因此，对于量化这个集合的陈述必须谨慎处理。另一方面，归纳原理从直觉主义的角度来看是完全可接受的。

由于自然数的有限性与实数（例如）的对比，许多在经典数学中为真的有限性算术陈述在直觉主义中也是如此。例如，在直觉主义中，每个自然数都有一个素因子分解；存在着可计算可枚举的集合，而这些集合本身是不可计算的；对于所有的无量词陈述 A，(A∨¬A)都成立。对于更复杂的陈述，如范德瓦尔登定理或克鲁斯卡尔定理，直觉主义的有效性就不那么直接了。事实上，这两个陈述的直觉主义证明都是复杂的，并且与经典证明有所偏离（Coquand 1995，Veldman 2004）。

因此，在自然数的背景下，直觉主义和经典数学有很多共同之处。只有当考虑其他无限集合，如实数集，直觉主义才开始与经典数学以及大多数其他形式的构造主义有明显的区别。

### 3.4 连续体

在直觉主义中，连续体既是其经典对应物的扩展，又是其限制。在其完整形式中，这两个概念是无法比较的，因为直觉主义实数具有经典实数所没有的性质。一个著名的例子，将在下面讨论，是直觉主义中的每个连续体上的总函数都是连续的定理。直觉主义连续体不满足某些经典性质可以通过弱反例很容易地看出。它还包含经典实数所不具备的性质，这源于直觉主义中选择序列的存在。

#### 弱反例

弱反例是布劳威尔于 1908 年引入的第一个例子，布劳威尔用它们来展示从经典数学观念到直觉主义数学观念的转变对于可以根据这些哲学建构所建立的数学真理是有后果的。它们表明某些经典陈述从直觉主义的角度来看是不可接受的。举个例子，考虑以下定义给出的实数序列：

rn={2−n 如果 ∀m≤nA(m)2−m 如果 ¬A(m)∧m≤n∧∀k<mA(k).

这里 A(n) 是一个可判定的属性，对于任意的 n，我们不知道 ∀nA(n) 是真还是假。可判定性意味着目前对于任意给定的 n，都存在（可以构造）一个 A(n) 或 ¬A(n) 的证明。在撰写本文时，我们可以让 A(n) 表示当 n 大于 2 时，它是三个质数的和；那么 ∀nA(n) 就表达了（原始的）哥德巴赫猜想，即每个大于 2 的数都可以表示为三个质数的和。序列 ⟨rn⟩ 定义了一个实数 r，其中语句 r=0 等价于语句 ∀nA(n)。由此可知，语句 (r=0∨r≠0) 不成立，因此直觉主义连续体上的三分律 ∀x(x<y∨x=y∨x>y) 不成立。

注意“A 不是直觉主义真”的微妙差别和“A 是直觉主义可反驳”的差别：在第一种情况下，我们知道 A 不能有一个直觉主义证明，而第二种情况则表示我们有一个¬A 的证明，即从任何可能的 A 的证明中推导出虚假。对于三分律，我们刚刚证明它不是直觉主义真。下面将证明即使是更强的形式，即该定律是可反驳的，也在直觉主义中成立。然而，对于存在弱反例的所有陈述来说，这并不成立。例如，哥德巴赫猜想是排中律的一个弱反例，因为目前我们不知道∀nA(n)是真还是假，因此我们不能直觉主义地断言∀nA(n)∨¬∀nA(n)，至少目前不能。但是这个陈述的反驳，¬(∀nA(n)∨¬∀nA(n))，在直觉主义中是不成立的，因为可以证明对于任何陈述 B，都可以从假设¬B 和¬¬B 推导出矛盾（因此也可以从 B 和¬B 推导出矛盾）。换句话说，¬¬(B∨¬B)在直觉主义中是真的，因此，尽管存在排中律的弱反例，它的否定在直觉主义中是假的，也就是说，它是直觉主义可反驳的。

直觉主义者无法确定是否存在实数 r 为正数或非正数，这表明在直觉主义的背景下，某些在经典逻辑中是完全的函数不再是完全的，例如分段常数函数

 f(r)={0 如果 r≥01 如果 r<0.

存在许多经典有效陈述的弱反例。构造这些弱反例通常遵循与上面示例相同的模式。例如，证明中值定理在直觉上无效的论证如下所示。设 r 是[−1,1]中的实数，使得(r≤0∨0<r)尚未决定，就像上面的示例一样。在[0,3]上定义一致连续函数 f，如下所示：

f(x)=min(x−1,0)+max(0,x−2)+r。

显然，f(0)=−1+r 且 f(3)=1+r，因此 f 在[0,3]的某一点 x 处取值为 0。如果可以确定这样的 x，那么要么 1≤x，要么 x≤2。由于 f 在[1,2]上等于 r，在第一种情况下 r≤0，在第二种情况下 0≤r，这与(r≤0∨0≤r)的不可决性相矛盾。

这些例子似乎表明，在从经典数学转向直觉主义数学的过程中，会失去分析学中的几个基本定理。然而事实并非如此，因为在许多情况下，直觉主义通过一种类似的方式重新获得这些定理，其中存在性陈述被替换为关于在任意精度内存在逼近的陈述，就像这个经典等价形式的中值定理一样，它在建设性上是有效的：

> 定理。对于区间[a,b]上的每个连续实值函数 f，其中 a<b，对于 f(a)和 f(b)之间的每个 c，以下条件成立：
>
> ∀n∃x∈[a,b]|f(x)−c|<2−n.

弱反例是一种展示某些数学命题在直觉主义下不成立的手段，但它们尚未揭示直觉主义连续体的丰富性。只有在布劳尔引入选择序列之后，直觉主义才获得了其独特的特点，并与古典数学不可比拟。

#### 选择序列

选择序列是布劳尔引入的，用于捕捉连续体的直觉。对于直觉主义者来说，无限是潜在的，无限对象只能通过逐步生成它们的过程来把握。因此，什么样的合法构造将被允许决定了哪些无限对象将被接受。例如，在大多数其他形式的构造主义中，只允许使用可计算的规则来生成这些对象，而在柏拉图主义中，无限被认为是已完成的整体性存在，即使在没有已知的生成规则的情况下也被接受。

Brouwer 的直觉主义的第二个行动引发了选择序列，这些序列为某些无限集合提供了从古典观点来看是不可接受的属性。选择序列是由自由意志创建的无限数字（或有限对象）序列。该序列可以由法律或算法确定，例如仅由零组成的序列，或按递增顺序排列的质数序列，这种情况下我们称之为法律性序列，或者它可能不受任何法律约束，这种情况下称之为无法律性序列。例如，无法律性序列可以通过反复抛硬币或要求创造主体逐个选择序列的连续数字来创建，允许它选择任何喜欢的数字。因此，无法律性序列永远不会完成，而在任何时间阶段，关于它的唯一可用信息是迄今为止创建的序列的初始段。显然，由于无法律性的本质，我们永远无法确定其值是否与法律性序列重合。此外，自由意志能够创建起初是法律性的序列，但在某一点上可能解除法律约束，自由选择的过程接管生成后续数字，或者反之亦然。

根据 Brouwer 的观点，每个实数都由一个选择序列表示，而选择序列使他能够通过有争议的连续性公理捕捉直觉主义连续体。Brouwer 在他的就职演说中首次提到了选择序列（Brouwer 1912），但当时他还没有将它们视为他数学的基本部分。逐渐地，它们变得更加重要，从 1918 年开始，Brouwer 开始以下一节中解释的方式使用它们。

### 3.5 连续性公理

对选择序列概念的接受具有深远的影响。对于直觉主义者来说，它为使用连续性公理提供了正当性，从而可以推导出在经典逻辑中无效的陈述。其中最弱的公理是弱连续性公理：

(WC-N)∀α∃nA(α,n)→∀α∃m∃n∀β∈α(¯¯¯¯¯m)A(β,n)。

这里，n 和 m 取自自然数，α和β取自选择序列，β∈α(¯¯¯¯¯m)表示α和β的前 m 个元素相等。尽管迄今为止，尚未对任意选择序列的大多数连续性公理给出完全令人满意的理论解释，甚至包括布劳威尔在内，但对于无序序列类的情况，支持弱连续性公理有效性的论证如下。直觉主义者何时能够建立形如∀α∃nA(α,n)的陈述？根据无序序列概念的本质，对于 A(α,n)成立的数 n 的选择必须在只知道α的有限初始段之后进行。因为我们不知道α将如何随时间发展，所以我们必须基于在我们希望确定 n 的那个时间点已知的α的初始段来选择 n。这意味着对于具有与α相同初始段的每个无序序列β，A(β,n)也成立。

弱连续公理已被证明是一致的，并且通常以可以被证明的形式应用，即在谓词 A 仅涉及α的值而不涉及其可能具有的高阶属性的情况下。这里将省略论证的细节，但它包含了与无序序列原则的证明相同的要素，并可在 van Atten 和 van Dalen 2002 年的著作中找到。

弱连续并不能完全满足直觉主义者对连续性的直觉，因为在给定弱连续公理的情况下，合理地假设可以明确选择一个数 m，使得对于每个β∈α(¯¯¯¯¯m)A(β,n)都成立。因此，∀α∃nA(α,n)意味着存在一个连续的函数Φ，对于每个α，它产生一个基于α长度确定 n 的 m。更正式地说，让 CF 是将自然数分配给无限序列的连续函数Φ的类，即满足

∀α∃m∀β∈α(¯¯¯¯¯m)Φ(α)=Φ(β)。

连续性的完全公理是弱连续性公理的扩展，可以表示为：

(C-N)∀α∃nA(α,n)→∃Φ∈CF∀αA(α,Φ(α)).

通过连续性公理，某些弱反例可以转化为对经典接受原则的真正反驳。例如，它暗示了排中律的量化版本是错误的：

¬∀α(∀nα(n)=0∨¬∀nα(n)=0).

这里，α(n)表示α的第 n 个元素。为了看到这个否定成立，假设，通过反证法，¬∀α(∀nα(n)=0∨¬∀nα(n)=0)成立。这意味着

∀α∃k((∀nα(n)=0∧k=0)∨(¬∀nα(n)=0∧k=1)).

通过弱连续公理，对于只由零组成的α，存在一个固定选择 k 的数字 m，这意味着对于所有的β∈α(¯¯¯¯¯m)，k=0。但是存在一些序列，它们的前 m 个元素是 0，并且包含一个 1，这表明这是不可能的。

这个例子表明，在直觉主义中，排中律原则不仅不成立，而且实际上是错误的，这导致了连续体的许多基本性质的反驳。例如，考虑实数 rα，它是由在弱反例部分中给出的数字 rn 组成的序列的极限，其中定义中的 A(m)被取为α(m)=0。然后上述的反驳意味着¬∀α(rα=0∨rα≠0)，从而反驳了三分律定律：

 ∀x(x<y∨x=y∨y<x)。

以下定理是连续性公理反驳某些经典原理的另一个例子。

> 定理（C-N）每个实函数都是连续的。

实际上，对于这个定理的一个经典反例，即无处连续的函数 f(x)={0 如果 x 是有理数 1 如果 x 是无理数，从直觉主义的观点来看并不是一个合法的函数，因为有理数的性质在实数上是不可判定的。上述定理暗示了连续体是不可分解的，并且在 van Dalen 1997 中，还证明了这一点甚至适用于无理数集。

上述两个例子是直觉主义数学中连续性公理应用的特点。它们是直觉主义中唯一与经典推理相矛盾的公理，因此代表了布劳尔哲学中最丰富多彩、最具争议的部分。

#### 邻域函数

在文献中广泛使用了一种方便的连续泛函表示法，尽管布劳尔本人并未使用。将将数值分配给无限序列的连续泛函可以通过邻域函数表示，其中邻域函数 f 是自然数上的函数，满足以下两个性质（⋅表示连接，f(α(¯¯¯n))表示 f 在有限序列 α(¯¯¯n) 的编码上的值）。

α∃nf(α(¯¯¯n))>0    ∀n∀m(f(n)>0→f(n⋅m)=f(n)).

直觉上，如果 f 代表 Φ ，那么 f(α(¯¯¯n))=0 意味着 α(¯¯¯n) 不足以计算 Φ(α)，而 f(α(¯¯¯n))=m+1 意味着 α(¯¯¯n) 足够长以计算 Φ(α)，且 Φ(α) 的值为 m。如果 K 表示邻域函数的类，则连续性公理 C-N 可以重新表述为∀α∃nA(α,n)→∃f∈K∀m(f(m)>0→∀β∈mA(β,f(m−1))),

其中 β∈m 表示 β 的初始段的代码为 m。

### 3.6 酒吧定理

布劳尔引入了选择序列和连续性公理来捕捉直觉主义连续体，但这些原则本身不足以恢复布劳尔认为直觉主义合理的传统分析的那部分，例如每个闭区间上的连续实函数都是一致连续的定理。因此，布劳尔证明了所谓的酒吧定理。这是一个经典上有效的陈述，但布劳尔给出的证明被许多人认为根本不是证明，因为它使用了一种没有提供严格论证的证明形式的假设。这就是酒吧定理也被称为酒吧原理的原因。

酒吧定理最著名的结果是扇形定理，它足以证明前述的一致连续性定理，并且将首先进行处理。扇形定理和酒吧定理都允许直觉主义者沿着某些良基对象集合进行归纳，这些对象集合被称为扩展。扩展是集合的直觉主义类比，捕捉了无限对象作为不断增长而永远不会完成的思想。扩展本质上是一个带有自然数或其他有限对象标记的可数分支树，只包含无限路径。

一个扇形是一个有限分支的扩展，而扇形原理表达了一种紧致性，从直觉主义的观点来看，这种紧致性在经典上等同于 König 的引理，其经典证明是不可接受的。该原理表明，对于每个扇形 T，在某一点处的每个分支都满足某个属性 A，存在一个统一的界限，该属性在该深度上得到满足。这样的属性被称为 T 的随附。

(扇形)∀α∈T∃nA(α(¯¯¯n))→∃m∀α∈T∃n≤mA(α(¯¯¯n)).

这里的α∈T 表示α是 T 的一个分支。扇形原理足以证明上述定理：

> 定理（FAN）闭区间上的每个连续实函数都是一致连续的。

布劳威尔对于扇形定理的证明是他对于普遍传播的杆原理的辩护：

（BI）[∀α∀n(A(α(¯¯¯n))∨¬A(α(¯¯¯n)))∧∀α∃nA(α(¯¯¯n)) ∧∀α∀n(A(α(¯¯¯n))→B(α(¯¯¯n))) ∧∀α∀n(∀mB(α(¯¯¯n)⋅m)→B(α(¯¯¯n)))]→B(ε)。

这里ε代表空序列，⋅代表连接，BI 代表 Bar 归纳，下标 D 指的是谓词 A 的可决定性。Bar 原则为直觉主义提供了一种树的归纳原则；它表达了关于可决定性属性的传播的良基原则。从布劳威尔的工作中可以提取出弱化可决定性要求的这一原则，但在此将被省略。连续性和 Bar 原则有时被捕捉在一个被称为 Bar 连续性公理的公理中。

Bar 原则与连续性公理部分提到的邻域函数之间存在密切联系。设 IK 为归纳定义的邻域函数类，包括所有常数非零序列λm.n+1，并且如果 f(0)=0 且对于所有 x，λm.f(x⋅m)∈IK，则 f∈IK。等式 K=IK，即邻域函数可以归纳生成的等式，等价于 BID。

布劳威尔的 Bar 定理证明非常引人注目，因为它使用了假设证明的良序性质。它基于这样一个假设：任何关于序列属性 A 是 Bar 的证明都可以分解为一个良序的规范证明。尽管在经典数学中是有效的，但布劳威尔对该原则的证明表明，在直觉主义中接受它作为有效原则的理由与在经典数学中支持其可接受性的论证根本不同。

### 3.7 选择公理

从建设性的角度来看，完整形式的选择公理是不可接受的，至少在集合论的某些其他核心公理的存在下是如此（Diaconescu 1975）。假设 A 是一个未知真假的陈述。那么以下两个集合的成员资格是不可判定的。

X={x∈{0,1}∣x=0∨(x=1∧A)}Y={y∈{0,1}∣y=1∨(y=0∧A)}

存在一个选择函数 f:{X,Y}→{0,1} 从 X 和 Y 中选择一个元素将意味着 (A∨¬A)。因为如果 f(X)≠f(Y)，则可推出 X≠Y，因此 ¬A，而 f(X)=f(Y) 则意味着 A。因此，{X,Y} 的选择函数是不存在的。

然而，直觉主义者可以接受某些对公理的限制，例如可数选择公理，也被半直觉主义者视为合理的原则，将在下面讨论：

(AC-N)∀R⊆N×N(∀m∃nmRn→∃α∈NN∀mmRα(m)).

这个方案可以如下证明。前提的证明应该提供一种方法，给定 m 可以提供一个数 n，使得 mRn。因此，可以逐步构建自然数 N 上的函数α：首先选择一个元素 m0，使得 0Rm0，这将是α(0)的值。然后选择一个元素 m1，使得 1Rm1，这将是α(1)的值，依此类推。

还有几个选择公理可以用类似的方式证明。这里只提到另一个，即依赖选择公理：

(DC-N)∀R⊆N×N(∀m∃nmRn→∀k∃α∈NN(α(0)=k ∧∀i≥0α(i)Rα(i+1)))。

在古典数学中，选择公理被谨慎对待，通常明确指出在证明中需要多少选择。由于依赖选择公理与古典集合论中的一个重要公理（决策公理）一致，而完全选择公理不一致，因此特别关注这个公理，并且一般尽量减少选择在证明中的使用，如果有选择的话，就使用依赖选择公理。

### 3.8 描述集合论、拓扑学和拓扑学理论

布劳尔在对某些古典推理形式的怀疑方面并不孤单。这在描述集合论中尤为明显，描述集合论作为对康托尔集合论中高度非构造性概念的反应而出现。该领域的创始人，包括埃米尔·博雷尔和亨利·勒贝格作为主要人物之一，被称为半直觉主义者，他们对连续体的构造性处理导致了博雷尔层次的定义。从他们的观点来看，像所有实数集的集合这样的概念是没有意义的，因此必须用具有明确描述的子集层次结构来替代。

在 Veldman 1999 中，提出了直觉主义等价于 Borel 集合概念的表述，并且证明了经典等价定义的 Borel 集合会产生多种直觉主义上不同的类别，这在直觉主义中经常发生。对于直觉主义 Borel 集合，Borel 层次定理的类似定理在直觉主义上是有效的。这一事实的证明基本上使用了上述讨论的连续性公理，并且展示了经典数学如何引导对直觉主义类似物的探索，然而，这些类似物必须以完全不同的方式进行证明，有时使用从经典观点来看是不可接受的原则。

对于连续体的子集，或者一般情况下的拓扑空间的研究，另一种方法通过形式化或抽象拓扑学的发展出现了（Fourman 1982，Martin-Löf 1970，Sambin 1987）。在这种构造性拓扑学中，开集和点的角色被颠倒；在经典拓扑学中，开集被定义为一定的点集，而在构造性情况下，开集是基本概念，点是根据它们来定义的。因此，这种方法有时被称为无点拓扑学。

在布劳威尔之后，直觉主义函数分析已经被许多人广泛发展，但由于大多数方法不仅是严格的直觉主义，而且还是更广义上的构造性，因此本研究将不再进一步讨论。

## 4. 构造主义

直觉主义与大多数其他形式的构造主义有着核心的共同点。总体而言，构造主义关注的是构造性数学对象和推理。从构造性证明中，至少在原则上，可以提取计算元素和模拟构造的算法，这些构造的存在是在证明中建立的。大多数形式的构造主义与经典数学兼容，因为它们通常基于对量词、联结词和允许的构造的更严格解释，而不做任何额外的假设。几乎所有构造性社区接受的逻辑是相同的，即直觉逻辑。

在经典数学中，许多存在性定理在构造性数学中都有一个构造性的类比，其中存在性陈述被一个关于近似的陈述所取代。我们在上面关于弱反例的部分看到了一个例子，即中值定理。数学的大部分内容可以以类似的方式构造性地恢复。之所以不在这里进一步讨论它们，是因为本条目的重点是直觉主义与其他构造数学分支的区别。对于构造主义的全面处理，读者可以参考本百科全书中相应的条目。

## 5. 元数学

虽然布劳尔以一种精确而基本的方式发展了他的数学，但是在今天我们所知的意义上的形式化只是后来由其他人完成的。事实上，根据布劳尔认为数学在内部展开的观点，形式化虽然不是不可接受的，但是是不必要的。其他人持有不同的观点，直觉主义数学的形式化以及对其元数学性质的研究，特别是算术和分析，吸引了许多研究者。上面已经讨论了所有形式化都基于的直觉主义逻辑的形式化。

### 5.1 算术

Heyting 算术 HA 是由阿伦德·海廷提出的直觉主义自然数理论的形式化（Heyting 1956）。它具有与 Peano 算术 PA 相同的非逻辑公理，但它基于直觉主义逻辑。因此，它是古典算术的限制，并且在几乎所有建构性数学领域中被接受为自然数的理论。Heyting 算术具有许多反映其建构性特征的性质，例如直觉主义逻辑也满足的析取性质。HA 具有而 PA 不具备的另一个性质是数值存在性质：（¯¯¯n 是对应于自然数 n 的数字）

(NEP)HA⊢∃xA(x)⇒∃n∈NHA⊢A(¯¯¯n)。

PA 无法满足这个性质的原因是因为 PA 证明了∃x(A(x)∨∀y¬A(y))。例如，考虑 A(x)是公式 T(e,e,x)，其中 T 是可判定的 Kleene 谓词，表示 x 是代码为 e 的程序在输入 e 上终止计算的编码。如果对于每个 e 都存在一个数 n，使得 PA⊢T(e,e,n)∨∀y¬T(e,e,y)，那么通过检查 T(e,e,n)是否成立，就可以判断程序 e 在输入 e 上是否终止。然而，这在一般情况下是不可判定的。

马尔可夫规则是一个在经典逻辑和直觉主义逻辑中都成立的原则，但只有对于 HA 来说，这个事实的证明是非平凡的：

(MR)HA⊢∀x(A(x)∨¬A(x))∧¬¬∃xA(x)⇒HA⊢∃xA(x)。

由于 HA 对于每个原始递归谓词都证明了排中律，因此对于这样的 A，在 HA 中可导出¬¬∃xA(x)就意味着也可导出∃xA(x)。由此可得，PA 在 HA 上是Π02-保守的。也就是说，对于原始递归的 A：PA⊢∀x∃yA(x,y)⇒HA⊢∀x∃yA(x,y)。因此，HA 的可证明递归函数类与 PA 的可证明递归函数类重合，这一性质根据构造主义和直觉主义的思想并不令人意外。

### 5.2 分析

直觉主义数学的形式化涵盖了不仅仅是算术。从建设性的角度来看，大部分分析已经被公理化了（Kleene 1965，Troelstra 1973）。这些系统的建设性可以通过使用功能性、类型论或实现性解释来建立，其中大多数是基于或扩展了哥德尔的 Dialectica 解释（Gödel 1958，Kreisel 1959），Kleene 的实现性（Kleene 1965）或类型理论（Martin-Löf 1984）。在这些解释中，构造性陈述的基础功能，例如为每个 x 在∀x∃yA(x,y)中分配一个 y 的函数，以各种方式被明确地表达出来。

在（Scott 1968 和 1970）中，提出了一个拓扑模型，用于解释二阶直觉主义分析理论，其中实数被解释为从 Baire 空间到经典实数的连续函数。在这个模型中，Kripke 的 Schema 以及某些连续性公理成立。在（Moschovakis 1973）中，这种方法被改编为用选择序列构建直觉主义分析理论的模型。在这个模型中，Kripke 的 Schema 和某些连续性公理成立。在（Van Dalen 1978）中，使用 Beth 模型来提供算术和满足选择模式、弱连续性和 Kripke 的 Schema 的选择序列的模型。在这个模型中，每个节点的域是自然数，因此不需要使用非标准模型，就像 Kripke 模型的情况一样。此外，创造主体的公理 CS1-3 也可以在其中进行解释，从而证明了该理论的一致性。

### 5.3 无法律序列

存在无法律序列的公理化，它们都包含连续性公理的扩展（Kreisel 1968，Troelstra 1977）。特别是以开放数据公理的形式，该公理声明对于不包含除α以外的其他非法律参数的 A(α)：

 A(α)→∃n∀β∈α(¯¯¯n)A(β)。

在（Troelstra 1977）中，直觉主义分析的背景下发展了（并得到了证明）一种无序序列的理论。除了基本分析的公理外，它还包含了对无序序列的加强形式的开放数据、连续性、可决定性和密度公理（密度公理表明每个有限序列都是无序序列的初始段）。特别有趣的是，在这些理论中，可以消除对无序序列的量词，这也可以看作是为这些理论提供了一种类似法则序列的模型的结果。在范畴论中，还构建了其他经典的无序序列理论模型，以层模型的形式（van der Hoeven and Moerdijk 1984）。在（Moschovakis 1986）中，引入了相对于某个法则元素集的选择序列的理论，并提供了一个经典模型，其中无序序列恰好是通用序列。

### 5.4 创建主体的形式化

创建主体在第 2.2 节中引入，可以生成选择序列，这些序列是布劳尔的直觉主义中最重要和复杂的数学实体之一。几位哲学家和数学家试图在数学和哲学上进一步发展创建主体的理论。

在对创造主体概念进行形式化时，其时间性方面使用符号□nA 进行形式化，该符号表示创造主体在时间 n 拥有 A 的证明（在其他一些表述中：在时间 n 体验到 A 的真实性）。Georg Kreisel（1967）引入了以下三个创造主体公理，它们一起被表示为 CS：

(CS1)(CS2)(CS3)□nA∨¬□nA（在时间 n，可以决定创造主体是否拥有 A 的证明）□mA→□m+nA（创造主体永远不会忘记它所证明的内容）（∃n□nA→A）∧（A→¬¬∃n□nA）（创造主体只证明真实的陈述，对于创造主体来说，没有真实的陈述是不可能证明的）

在 Anne Troelstra（1969）的版本中，最后一个公理被加强为

(CS3+)∃n□nA↔A（创造主体仅证明真实的事实，并且真实的事实将在某个时间点被创造主体证明）

第一个公理 CS1 是无争议的：在任何时间点，可以确定创造主体是否有一个给定陈述的证明。第二个公理 CS2 明显使用了创造主体是一种理想化的事实，因为它表达了证明将始终被记住。最后一个公理 CS3 是创造主体形式化的最有争议的部分，或者更准确地说，它的第二个连结（A→¬¬∃n□nA）是有争议的，这个连结被 Kreisel 称为基督教慈善公理。例如，Göran Sundholm（2014）认为基督教慈善公理从建设性的角度来看是不可接受的。而哥德尔的不完全性定理甚至暗示了当□nA 被解释为在足够强的证明系统中是可证明的时，这个原则是错误的，然而这显然不是布劳尔所考虑的解释。

给定一个不包含任何关于时间的陈述 A，即没有出现□n 的情况，可以根据以下规则（Brouwer 1953）定义一个选择序列：

α(n)={0 如果 ¬□nA1 如果 □nA.

由此得出了被称为 Kripke 模式 KS 的原则，该原则在第 2.2 节中介绍，与创造主体理论的公理不同，不含有对时间的明确参考：∃α(A↔∃nα(n)=1)。

使用 Kripke 模式，可以在不涉及创造主体的情况下正式表达弱反例论证。以下示例摘自（van Atten 2018）。设 A 是一个陈述，目前不知道¬A∨¬¬A 是否成立。使用 KS 可以得到选择序列α1 和α2，使得

¬A↔∃nα1(n)=1    ¬¬A↔∃nα2(n)=1.

将这两个序列与实数 r0 和 r1 相关联，其中对于 i=0,1：

ri(n)=⎧⎪⎨⎪⎩0 如果αi(n)≠1(−1)i2−m 如果存在某个 m≤n，αi(m)=1，并且对于任何 k<m，αi(k)=1。

对于 r=r0+r1，命题¬A∨¬¬A 是由(r>0∨r<0)推导出来的，这表明(r>0∨r<0)无法被证明。

在(van Dalen 1978)中，构建了一个模型，用于描述算术和选择序列背景下的创造性主体公理，从而证明它们与直觉主义算术和某些分析部分一致。在(van Dalen 1982)中，证明了 CS 在 Heyting 算术上是保守的。Kripke 模式的数学后果可以在(van Dalen 1997)中找到，其中显示了 KS 和连续性公理拒绝了 Markov 原理，而 KS 与 Markov 原理一起暗示了排中律原理。

Kripke 已经证明了 KS 暗示了非递归函数的存在，这个结果不是由他本人发表的，而是由 Kreisel (1970)发表的。显然，这意味着理论 CS 也暗示了非递归函数的存在。CS 的一个可能的论证如下所示。假设 X 是一个不可计算但可计算枚举的集合，并定义函数 f 如下：

f(m,n)={0 如果不是 □m(n∉X)1 如果 □m(n∉X)。

然后可以得出结论，当且仅当对于某个自然数 m， f(m,n)=1 时，才有 n∉X，这意味着 f 不能被计算。如果可以计算，那么 X 的补集将是可计算枚举的，这意味着 X 是可计算的。由于 f 是从直觉主义观点来看的一个函数，这证明了在直觉主义中并非所有函数都是可计算的。

### 5.5 基础

旨在为建设性数学提供基础的形式化理论要么是集合论的（Aczel 1978，Myhill 1975），要么是类型论的（Martin-Löf 1984）性质。前者是将泽尔梅洛-弗兰克尔集合论适应到建设性环境中的理论，而在类型论中，建设性陈述中隐含的构造被明确地表达在系统中。集合论可以被视为数学的外延基础，而类型论通常是内涵基础。

近年来，出现了许多关于直觉主义数学基础理论的模型，其中一些已经在上面提到过。特别是在拓扑学理论（van Oosten 2008）中，有许多模型捕捉到直觉主义的某些特征。例如，存在一些拓扑空间，其中所有的全体实函数都是连续的。实现性解释以及类型论中的解释也可以被视为直觉主义数学和大多数其他建设性理论的模型。

### 5.6 逆向数学

在逆向数学中，人们试图确定数学定理所需的公理。在直觉主义逆向数学中，人们有类似的目标，但是针对的是直觉主义定理：在一个弱直觉主义理论上工作，将公理和定理进行比较。人们希望用来比较定理的典型公理包括扇形原理和条形原理、克里普克的模式和连续性公理。

在（Veldman 2011）中，研究了一个名为基础直觉主义数学的基本理论上的扇形原理的等价物。结果表明，扇形原理等价于单位区间[0,1]具有 Heine-Borel 性质的陈述，并从此得出了许多其他等价物。在（Veldman 2009）中，证明了扇形原理也等价于布劳威尔的近似不动点定理。在（Lubarsky et al. 2012）中，将逆向数学应用于一种克里普克的模式，证明了它与某些拓扑陈述等价。

直觉主义逆向数学中有许多类似的例子。特别是在构造性逆向数学的更大领域中，有许多这样的结果也与直觉主义观点相关。

## 6. 哲学

布劳尔从头开始建立了他的直觉主义，并没有对直觉主义与其他现有哲学之间的关系进行过多评论，但在他之后的其他人做了。本节讨论了其中一些联系，特别是直觉主义原则如何可以通过其他哲学来证明。

### 6.1 现象学

直觉主义与爱德蒙·胡塞尔（Edmund Husserl）发展的现象学之间的联系已经被几位作者调查过，无论是在布劳尔（Brouwer）的有生之年还是几十年后。赫尔曼·韦尔（Hermann Weyl）是第一个讨论布劳尔思想与数学现象学观点之间关系的人之一。像布劳尔一样，韦尔在他的书《连续体》（第 2 章）中谈到了直觉连续体，但韦尔的概念是基于（时间的意识的）现象学。韦尔后来感到，布劳尔对实分析的发展比他自己对直觉连续体的理念更忠实（Weyl 1921），因此他将自己置于布劳尔的一边，至少在这个方面（van Atten 2002）。

Van Atten（2003 年和 2007 年）使用现象学来证明选择序列作为数学对象的合理性。作者（2002 年）对布劳尔对选择序列的证明持批评态度，这是寻找其他哲学证明的动机。选择序列出现在贝克尔（Becker）（1927 年）和韦尔的作品中，但它们与布劳尔的概念不同，而胡塞尔从未公开讨论过选择序列。Van Atten 解释了连续体的同质性如何解释其不可穷尽性和非原子性，这是布劳尔对直觉连续体的两个关键特性。通过利用这两个基本特性在选择序列的定义中的存在，可以得出它们的现象学证明。

### 6.2 维特根斯坦

1928 年 3 月 10 日，布劳尔在维也纳就他的直觉主义数学基础进行了讲座。路德维希·维特根斯坦参加了那次讲座，受到赫伯特·费格尔的说服，之后费格尔写道，在讲座结束后，他与维特根斯坦和其他人一起度过了几个小时：一个伟大的事件发生了。突然间，维特根斯坦开始大谈哲学，谈了很长时间。也许这是一个转折点，因为从那时起，1929 年，当他搬到剑桥大学时，维特根斯坦再次成为一名哲学家，并开始产生巨大的影响力。

其他人对布劳尔的讲座是否影响了维特根斯坦的思想持有异议（Hacker 1986，Hintikka 1992，Marion 2003）。维特根斯坦是否受到布劳尔的观点的影响尚不完全清楚，但他们的观点之间确实存在有趣的一致和分歧。Marion（2003）认为，维特根斯坦在《论述》中对数学的理解与布劳尔非常接近，并且维特根斯坦同意拒绝排中律（1929 手稿，见 Wittgenstein 1994 的第 155-156 页），但他不同意布劳尔反对排中律的论证。Marion（2003）声称，维特根斯坦的立场比布劳尔更激进，因为在前者看来，排中律在数学中的无效性是所有数学命题（与经验命题相对）的一个显著特征，而不仅仅是无限数学的特殊性。

Veldman（即将出版）讨论了布劳尔和维特根斯坦之间的几个（不）一致之处，例如逻辑的危险，根据两者的观点，逻辑可能导致没有数学内容的构造。论文中提出的分歧之一涉及维特根斯坦认为数学是一项共同的事业，这与布劳尔的创造性主体和他认为数学是一种无语言活动的观点形成鲜明对比。

### 6.3 邓梅特

英国哲学家迈克尔·邓梅特（1975 年）为直觉主义，尤其是直觉主义逻辑，发展了一个哲学基础。邓梅特明确表示，他的理论不是对布劳威尔工作的解释，而是一种可能的哲学理论，以（用他的话说）拒绝数学中的经典推理，而支持直觉主义推理。

邓梅特的方法始于这样一个观点：选择一种逻辑而不是另一种逻辑必然取决于人们对逻辑陈述的意义的理解。邓梅特所使用的意义理论基于维特根斯坦关于语言的思想，特别是他关于意义即使用的观点，即一个句子的意义由该句子的使用方式决定。数学陈述的意义表现在对其的使用中，对其的理解是对使用该陈述的能力的了解。这种观点得到了我们获得数学知识的方式的支持。当我们学习一个数学概念时，我们学习如何使用它：如何计算它，证明它或从中推断。而确立我们已经理解了一个数学陈述的意义的唯一方法就在于我们正确使用该陈述的能力。

鉴于对意义的这种观点，在数学意义理论中，中心概念不是像柏拉图主义那样的真理，而是证明；对数学陈述的理解在于能够在给出证明时识别出它的证明。正如达梅特所辩称的那样，这导致了直觉逻辑作为数学推理的逻辑的采用。

有趣的是，正如达梅特（1975）自己所指出的，他关于意义的理论与布劳尔对数学的理解作为一种本质上无语言的活动相去甚远。因此，至少有两种完全不同的思路导致了直觉逻辑取代经典逻辑的采用，一种是布劳尔提出的，另一种是达梅特提出的。达梅特的直觉主义研究已经受到了诸如达格·普拉维茨（1977）、帕森斯（1986）和理查德·蒂森（1994 年和 2000 年）等哲学家的评论。

### 6.4 有限主义

各种形式的有限主义基于与邓美特表达的观点类似的观点，但是在这种观点中，被允许用来证明数学命题的构造不仅要在原则上存在，而且还要在实践中存在。根据后一概念的具体实施，人们得到不同形式的有限主义，例如亚历山大·叶谢宁-沃尔平（1970年）发展的超直觉主义和克里斯平·赖特（1982年）发展的严格有限主义。

## Bibliography

* Aczel, P., 1978, ‘The type-theoretic interpretation of constructive set theory,’ in A. Macintyre, L. Pacholski, J. Paris (eds.), *Logic Colloquium ’77*, special issue of *Studies in Logic and the Foundations of Mathematics*, 96: 55–66.
* van Atten, M., 2004, *On Brouwer*, Belmont: Wadsworth/Thomson Learning.
* –––, 2007, *Brouwer meets Husserl: On the phenomenology of choice sequences*, Dordrecht: Springer.
* –––, 2008, ‘On the hypothetical judgement in the history of intuitionistic logic,’ in C. Glymour and W. Wang and D. Westerståhl (eds.), *Proceedings of the 2007 International Congress in Beijing* (Logic, Methodology, and Philosophy of Science: Volume XIII), London: King’s College Publications, 122–136.
* van Atten, M. and D. van Dalen, 2002, ‘Arguments for the continuity principle,’ *Bulletin of Symbolic Logic*, 8(3): 329–374.
* Beth, E.W., 1956, ‘Semantic construction of intuitionistic logic,’ *Mededeelingen der Koninklijke Nederlandsche Akademie van Wetenschappen*, *Afdeeling Letterkunde* (Nieuwe Serie), 19(11): 357–388.
* Brouwer, L.E.J., 1975, *Collected works I*, A. Heyting (ed.), Amsterdam: North-Holland.
* –––, 1976, *Collected works II*, H. Freudenthal (ed.), Amsterdam: North-Holland.
* –––, 1905, *Leven, kunst en mystiek*, Delft: Waltman.
* –––, 1907, *Over de grondslagen der wiskunde*, Ph.D. Thesis, University of Amsterdam, Department of Physics and Mathematics.
* –––, 1912, ‘Intuïtionisme en formalisme’, Inaugural address at the University of Amsterdam, 1912. Also in *Wiskundig tijdschrift*, 9, 1913.
* –––, 1925, ‘Zur Begründung der intuitionistischen Mathematik I,’ *Mathematische Annalen*, 93: 244–257.
* –––, 1925, ‘Zur Begründung der intuitionistischen Mathematik II,’ *Mathematische Annalen*, 95: 453–472.
* –––, 1948, ‘Essentially negative properties’, *Indagationes Mathematicae*, 10: 322–323.
* –––, 1952, ‘Historical background, principles and methods of intuitionism,’ *South African Journal of Science*, 49 (October-November): 139–146.
* –––, 1953, ‘Points and Spaces,’ *Canadian Journal of Mathematics*, 6: 1–17.
* –––, 1981, *Brouwer’s Cambridge lectures on intuitionism*, D. van Dalen (ed.), Cambridge: Cambridge University Press, Cambridge.
* –––, 1992, *Intuitionismus*, D. van Dalen (ed.), Mannhein: Wissenschaftsverlag.
* Brouwer, L.E.J. and C.S. Adama van Scheltema, 1984, *Droeve snaar, vriend van mij – Brieven*, D. van Dalen (ed.), Amsterdam: Uitgeverij de Arbeiderspers.
* Coquand, T., 1995, ‘A constructive topological proof of van der Waerden’s theorem,’ *Journal of Pure and Applied Algebra*, 105: 251–259.
* van Dalen, D., 1978, ‘An interpretation of intuitionistic analysis’, *Annals of Mathematical Logic*, 13: 1–43.
* –––, 1997, ‘How connected is the intuitionistic continuum?,’ *Journal of Symbolic Logic*, 62(4): 1147–1150.
* –––, 1999/2005, *Mystic, geometer and intuitionist*, Volumes I (1999) and II (2005), Oxford: Clarendon Press.
* –––, 2001, *L.E.J. Brouwer (een biografie)*, Amsterdam: Uitgeverij Bert Bakker.
* –––, 2004, ‘Kolmogorov and Brouwer on constructive implication and the Ex Falso rule’ *Russian Math Surveys*, 59: 247–257.
* van Dalen, D. (ed.), 2001, *L.E.J. Brouwer en de grondslagen van de wiskunde*, Utrecht: Epsilon Uitgaven.
* Diaconescu, R., 1975, ‘Axiom of choice and complementation,’ in *Proceedings of the American Mathematical Society*, 51: 176–178.
* Dummett, M., 1975, ‘The Philosophical Basis of Intuitionistic Logic,’ in H.E. Rose and J.C. Shepherdson (eds.), *Proceedings of the Logic Colloquium ’73*, special issue of *Studies in Logic and the Foundations of Mathematics*, 80: 5–40.
* Fourman, M., and R. Grayson, 1982, ‘Formal spaces,’ in A.S. Troelstra and D. van Dalen (eds.), *The L.E.J. Brouwer Centenary Symposium*, Amsterdam: North-Holland.
* Gentzen, G., 1934, ‘Untersuchungen über das logische Schließen I, II,’ *Mathematische Zeitschrift*, 39: 176–210, 405–431.
* Gödel, K., 1958, ‘Über eine bisher noch nicht benützte Erweiterung des finiten Standpunktes,’ *Dialectia*, 12: 280–287.
* Hacker, P. M. S., 1986, *Insight & Illusion. Themes in the Philosophy of Wittgenstein*, revised edition, Clarendon Press, Oxford.
* Heyting, A., 1930, ‘Die formalen Regeln der intuitionistischen Logik,’ *Sitzungsberichte der Preussischen Akademie von Wissenschaften. Physikalisch-mathematische Klasse*, 42–56.
* –––, 1956, *Intuitionism, an introduction*, Amsterdam: North-Holland.
* van der Hoeven, G., and I. Moerdijk, 1984, ‘Sheaf models for choice sequences,’ *Annals of Pure and Applied Logic*, 27: 63–107.
* Kleene, S.C., and R.E. Vesley, 1965, *The foundations of intuitionistic mathematics*, Amsterdam: North-Holland.
* Kreisel, G., 1959, ‘Interpretation of analysis by means of constructive functionals of finite type,’ in A. Heyting (ed.), *Constructivity in Mathematics*, Amsterdam: North-Holland.
* –––, 1962, ‘On weak completeness of intuitionistic predicate logic,’ *Journal of Symbolic Logic*, 27: 139–158.
* –––, 1968, ‘Lawless sequences of natural numbers,’ *Compositio Mathematica*, 20: 222–248.
* Kripke, S.A., 1965, ‘Semantical analysis of intuitionistic logic’, in J. Crossley and M. Dummett (eds.), *Formal systems and recursive functions*, Amsterdam: North-Holland.
* Lubarsky, R., F. Richman, and P. Schuster 2012, ‘The Kripke schema in metric topology’, *Mathematical Logic Quarterly*, 58(6): 498–501.
* Maietti, M.E., and G. Sambin, 2007, ‘Toward a minimalist foundation for constructive mathematics,’ in L. Crosilla and P. Schuster (eds.), *From sets and types to topology and analysis: toward a minimalist foundation for constructive mathematics*, Oxford: Oxford University Press.
* Marion, M., 2003, ‘Wittgenstein and Brouwer’, *Synthese* 137: 103–127.
* Martin-Löf, P., 1970, *Notes on constructive mathematics*, Stockholm: Almqvist & Wiskell.
* –––, 1984, *Intuitionistic type theory*, Napoli: Bibliopolis.
* Moschovakis, J.R., 1973, ‘A topological interpretation of second-order intuitionistic arithmetic,’ *Compositio Mathematica*, 26(3): 261–275.
* –––, 1986, ‘Relative lawlessness in intuitionistic analysis,’ *Journal of Symbolic Logic*, 52(1): 68–87.
* Myhill, J., 1975, ‘Constructive set theory,’ *Journal of Symbolic Logic*, 40: 347–382.
* Niekus, J., 2010, ‘Brouwer’s incomplete objects’ *History and Philosophy of Logic*, 31: 31–46.
* van Oosten, J., 2008, *Realizability: An introduction to its categorical side*, (Studies in Logic and the Foundations of Mathematics: Volume 152), Amsterdam: Elsevier.
* Prawitz, D., 1977, ‘Meaning and proofs: On the conflict between classical and intuitionistic logic,’ *Theoria*, 43(1): 2–40.
* Parsons, C., 1986, ‘Intuition in Constructive Mathematics,’ in *Language, Mind and Logic*, J. Butter (ed.), Cambridge: Cambridge University Press.
* Sambin, G., 1987, ‘Intuitionistic formal spaces,’ in *Mathematical Logic and its Applications*, D. Skordev (ed.), New York: Plenum.
* Scott, D., 1968, ‘Extending the topological interpretation to intuitionistic analysis,’ *Compositio Mathematica*, 20: 194–210.
* –––, 1970, ‘Extending the topological interpretation to intuitionistic analysis II’, in *Intuitionism and proof theory*, J. Myhill, A. Kino, and R. Vesley (eds.), Amsterdam: North-Holland.
* Sundholm, B.G., ‘Constructive Recursive Functions, Church’s Thesis, and Brouwer's Theory of the Creating Subject: Afterthoughts on a Paris Joint Session’, in Jacque Dubucs & Michel Bordeau (eds.), *Constructivity and Computability in Historical and Philosophical Perspective* (Logic, Epistemology, and the Unity of Science: Volume 34), Dordrecht: Springer: 1–35.
* Tarski, A., 1938, ‘Der Aussagenkalkül und die Topologie,’ *Fundamenta Mathematicae*, 31: 103–134.
* Tieszen, R., 1994, ‘What is the philosophical basis of intuitionistic mathematics?,‘ in D. Prawitz, B. Skyrms and D. Westerstahl (eds.), *Logic, Methodology and Philosophy of Science*, IX: 579–594.
* –––, 2000, ‘Intuitionism, Meaning Theory and Cognition,‘ *History and Philosophy of Logic*, 21: 179–194.
* Troelstra, A.S., 1973, *Metamathematical investigations of intuitionistic arithmetic and analysis*, (Lecture Notes in Mathematics: Volume 344), Berlin: Springer.
* –––, 1977, *Choice sequences* (Oxford Logic Guides), Oxford: Clarendon Press.
* Troelstra, A.S., and D. van Dalen, 1988, *Constructivism I and II*, Amsterdam: North-Holland.
* Veldman, W., 1976, ‘An intuitionistic completeness theorem for intuitionistic predicate logic,’ *Journal of Symbolic Logic*, 41(1): 159–166.
* –––, 1999, ‘The Borel hierarchy and the projective hierarchy in intuitionistic mathematics,’ Report Number 0103, Department of Mathematics, University of Nijmegen. [[available online](http://repository.ubn.ru.nl/bitstream/2066/18749/1/18749.pdf)]
* –––, 2004, ‘An intuitionistic proof of Kruskal’s theorem,’ *Archive for Mathematical Logic*, 43(2): 215–264.
* –––, 2009, ‘Brouwer’s Approximate Fixed-Point Theorem is Equivalent to Brouwer’s Fan Theorem,’ in S. Lindström, E. Palmgren, K. Segerberg, V. Stoltenberg-Hansen (eds.), *Logicism, Intuitionism, and Formalism* (Synthese Library: Volume 341), Dordrecht: Springer, 277–299.
* –––, 2014, ‘Brouwer’s Fan Theorem as an axiom and as a contrast to Kleene’s Alternative,’ in *Archive for Mathematical Logic*, 53(5–6): 621–693.
* –––, forthcoming, ‘Intuitionism is all bosh, entirely. Unless it is an inspiration,’ in G. Alberts, L. Bergmans, and F. Muller, (eds.), *Significs and the Vienna Circle: Intersections*, Dordrecht: Springer. [[preprint available online](https://www.researchgate.net/publication/324835676_Intuitionism_is_all_bosh_entirely_Unless_it_is_an_inspiration)]
* Weyl, H., 1921, ‘Über die neue Grundlagenkrise der Mathematik,’ *Mathematische Zeitschrift*, 10: 39–70.
* Wittgenstein, L., 1994, *Wiener Ausgabe, Band 1, Philosophische Bemerkungen*, Vienna, New York: Springer Verlag.
* Wright, C., 1982, ‘Strict Finitism’, *Synthese* 51(2): 203–282.
* Yessenin-Volpin, A.S., 1970, ‘The ultra–intuitionistic criticism and the antitraditional program for foundations of mathematics’, in A. Kino, J. Myhill, and R. Vesley (eds.), *Intuitionism and Proof Theory*, Amsterdam: North-Holland Publishing Company, 3–45.

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=intuitionism). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/intuitionism/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=intuitionism&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](https://philpapers.org/sep/intuitionism/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[Brouwer, Luitzen Egbertus Jan](https://plato.stanford.edu/entries/brouwer/) | [category theory](https://plato.stanford.edu/entries/category-theory/) | [choice, axiom of](https://plato.stanford.edu/entries/axiom-choice/) | [Gödel, Kurt](https://plato.stanford.edu/entries/goedel/) | Hilbert, David | [Hilbert, David: program in the foundations of mathematics](https://plato.stanford.edu/entries/hilbert-program/) | [logic, history of: intuitionistic logic](https://plato.stanford.edu/entries/intuitionistic-logic-development/) | [logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [logic: intuitionistic](https://plato.stanford.edu/entries/logic-intuitionistic/) | [mathematics, philosophy of: formalism](https://plato.stanford.edu/entries/formalism-mathematics/) | [mathematics: constructive](https://plato.stanford.edu/entries/mathematics-constructive/) | [phenomenology](https://plato.stanford.edu/entries/phenomenology/) | [Platonism: in metaphysics](https://plato.stanford.edu/entries/platonism/) | [set theory](https://plato.stanford.edu/entries/set-theory/) | [type theory](https://plato.stanford.edu/entries/type-theory/)

### Acknowledgments

I thank Sebastiaan Terwijn, Mark van Atten, and an anonymous referee for their useful comments on an earlier draft of this entry.

[Copyright © 2019](https://plato.stanford.edu/info.html#c) by  
[Rosalie Iemhoff](https://www.phil.uu.nl/~iemhoff/) <[*R.Iemhoff@uu.nl*](mailto:R%2eIemhoff%40uu%2enl)>
