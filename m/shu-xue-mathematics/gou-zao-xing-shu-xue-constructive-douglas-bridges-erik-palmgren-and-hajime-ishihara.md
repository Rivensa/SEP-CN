# 构造性数学 constructive (Douglas Bridges, Erik Palmgren, and Hajime Ishihara)
*首次发表于1997年11月18日；实质修订于2022年8月25日。*

构造性数学与其传统对应物——古典数学相区别之处在于对“存在”一词的严格解释，即将其解释为“我们可以构造”。为了进行构造性工作，我们需要重新解释存在量词以及所有逻辑连接词和量词，将其视为关于如何构造涉及这些逻辑表达式的陈述的指令。

在本文中，我们介绍基于 BHK 解释的现代构造性数学，涉及逻辑连接词和量词。我们讨论了四种主要的构造性数学变体，特别强调了与 Errett Bishop 和 Per Martin-Löf 相关的两种变体，它们可以被视为最小的构造性系统。然后，我们概述了（非正式的）构造性逆向数学的进展，这是一个研究计划，旨在确定原则，例如 Brouwer 的扇形定理，将其添加到最小的构造性变体中，以便证明重要的分析定理。在简要讨论构造性代数、经济学和金融学之后，条目以两个附录结束：一个是关于某些在古典、直觉主义和递归数学中成立的逻辑原理，将其添加到 Bishop 的构造性数学中，有助于证明某些有用的分析定理；另一个是讨论构造性发展普通拓扑学的方法。

* [ 1. 引言](https://plato.stanford.edu/entries/mathematics-constructive/#Intr)
* [2. 构造性逻辑的解释](https://plato.stanford.edu/entries/mathematics-constructive/#ConsInteLogi)
* [3. 构造性数学的种类](https://plato.stanford.edu/entries/mathematics-constructive/#VariConsMath)

  * [3.1 直觉主义数学](https://plato.stanford.edu/entries/mathematics-constructive/#IntuMath)
  * [3.2 构造性数学的递归](https://plato.stanford.edu/entries/mathematics-constructive/#RecuConsMath)
  * [3.3 比舍普的构造性数学](https://plato.stanford.edu/entries/mathematics-constructive/#BishConsMath)
  * [3.4 马丁-勒夫的构造性类型理论](https://plato.stanford.edu/entries/mathematics-constructive/#MartLofsConsTypeTheo)
* [4. 选择公理](https://plato.stanford.edu/entries/mathematics-constructive/#AxioChoi)
* [5. 构造性逆向数学](https://plato.stanford.edu/entries/mathematics-constructive/#ConsReveMath)

  * [5.1 构造性逆向数学中的 Fan 定理](https://plato.stanford.edu/entries/mathematics-constructive/#FanTheoCRM)
* [6. 构造性拓扑](https://plato.stanford.edu/entries/mathematics-constructive/#ConsTopo)
* [7. 构造性数学经济学和金融学](https://plato.stanford.edu/entries/mathematics-constructive/#ConsMathEconFina)
* [ 8. 结论说明](https://plato.stanford.edu/entries/mathematics-constructive/#ConcRema)
* [ 参考书目](https://plato.stanford.edu/entries/mathematics-constructive/#Bib)

  * [ 参考文献](https://plato.stanford.edu/entries/mathematics-constructive/#Refe)
  * [ 相关文献](https://plato.stanford.edu/entries/mathematics-constructive/#RelaLite)
* [ 学术工具](https://plato.stanford.edu/entries/mathematics-constructive/#Aca)
* [其他互联网资源](https://plato.stanford.edu/entries/mathematics-constructive/#Oth)
* [ 相关条目](https://plato.stanford.edu/entries/mathematics-constructive/#Rel)

---

## 1. 引言

在数学家断言某个命题（除了公理之外）之前，他们应该已经证明了它的真实性。那么，当数学家断言一个析取命题 P∨Q 时，其中 P 和 Q 是某个（形式或非形式的）数学语言中的句子，他们到底是什么意思呢？一个自然的解释（尽管，正如我们将看到的，不是唯一的解释）是，这个析取命题不仅意味着（至少）有一个命题 P 或 Q 成立，而且我们可以确定哪个命题成立。因此，就像数学家只有在通过证明来确定 P 成立时才会断言 P 一样，他们只有在能够提供 P 的证明或者提供 Q 的证明时才会断言 P∨Q。

然而，采用这种解释，我们在 Q 是 P 的否定 ¬P 的特殊情况下遇到了一个严重的问题。断言 ¬P 就是要表明 P 蕴含一个矛盾（比如 0=1）。但是数学家通常既没有 P 的证明，也没有 ¬P 的证明。为了看清楚这一点，我们只需要思考一下下面的哥德巴赫猜想（GC）：

每个大于 2 的偶数都可以写成两个质数的和，

尽管自 1742 年 Goldbach 写信给 Euler 以来，许多顶尖数学家尽力证明或证伪这个命题，但仍然没有得到证明或证伪。我们不得不得出结论，在非常自然的可决定性解释下，只有顽固的乐观主义者才能坚持排中律（LEM）的信念：

对于每个命题 P，要么 P 成立，要么¬P 成立。

通过扩大析取的解释，经典逻辑规避了这个问题：它将 P∨Q 解释为¬(¬P∧¬Q)，或者换句话说，“P 和 Q 都为假是矛盾的”。这进一步导致了存在的唯心主义解释，其中∃xP(x)意味着¬∀x¬P(x)（“对于每个 x，P(x)都为假是矛盾的”）。正是基于这些对析取和存在的解释，数学家们建立了宏伟而似乎坚不可摧的经典数学体系，为物理学、社会学和（越来越多地）生物学等学科提供了基础。然而，这种更广泛的解释是有代价的：例如，当我们从最初的自然解释 P∨Q 过渡到理想主义解释¬(¬P∧¬Q)时，所得到的数学通常无法在递归函数理论等计算模型中解释。

这一点可以通过一个常见的例子来说明：命题为：

存在无理数 a、b，使得 ab 是有理数。

一个巧妙的古典证明如下。要么√2 是有理数，这种情况下我们取 a=b=√2；要么√2 是无理数，这种情况下我们取 a=√2√2 和 b=√2（参见 Dummett 1977 [2000]，6）。但是，就目前而言，这个证明并不能确定(a,b)中的哪个选择具有所需的性质。为了确定正确的(a,b)的选择，我们需要决定√2 是有理数还是无理数，这正是使用我们对析取的初始解释，其中 P 是陈述“√2 是有理数”。

这里是另一个解释之间的区别的例证。考虑关于实数集 R 的以下简单陈述：

 (*)∀x∈R(x=0∨x≠0)，

在我们不久将透露的原因下，x≠0 意味着我们可以找到一个有理数 r，使得 0<r<|x|。对于()的一个自然计算解释是，我们有一个过程，应用于任何实数 x，要么告诉我们 x=0，要么告诉我们 x≠0。（例如，如果 x=0，则这样的过程可能输出 0，如果 x≠0，则输出 1。）然而，由于计算机只能通过有限的有理近似来处理实数，我们面临着下溢问题，即一个足够小的正数可能被计算机误读为 0；因此，不能有一个决策过程来证明该陈述（）。换句话说，在我们对量词∀和联结词∨的自然计算解释下，我们不能期望(*)成立。

让我们从另一个角度来考虑这个问题。让 G(n)作为简写，表示“2n+2 是两个质数的和”的陈述，其中 n 取遍正整数，并定义一个无限二进制序列 a=(a1,a2,…)如下：

an={0，如果对于所有 k≤n，G(k)成立；1，如果对于某个 k≤n，¬G(k)成立。

毫无疑问，a 是一个计算上明确定义的序列，我们有一个算法来计算每个 n 的 an：检查偶数 4,6,8,...,2n+2，确定它们是否是两个质数的和；如果是，设置 an=0，否则设置 an=1。现在考虑一个实数，其第 n 个二进制位是 an：

x=(0⋅a1a2⋯)2=2−1a1+2−2a2+⋯=∞∑n=12−nan。

如果(*)在我们的计算解释下成立，那么我们可以在以下两种选择之间做出决定：

* 2−1a1+2−2a2+⋯=0，这意味着对于每个 n，an=0；
* 我们可以找到一个正整数 N，使得 2−1a1+2−2a2+⋯>2−N；

在后一种情况下，通过测试 a1，…，aN，我们可以找到 n≤N，使得 an=1。因此，(*)的计算解释使我们能够决定是否存在 n 使得 an=1；换句话说，它使我们能够决定哥德巴赫猜想的状态。这种类型的例子，展示了对某个经典结果 P 的构造性证明将使我们能够解决哥德巴赫猜想（以及类似的论证，许多迄今为止未解决的问题，如黎曼猜想），被称为布劳威尔式的例子，甚至是布劳威尔式的反例，对于陈述 P 来说（尽管它不是常规意义上的反例）。

在这里使用哥德巴赫猜想纯粹是戏剧性的。因为，前面段落的论证可以修改为，在我们的计算解释下，(*)意味着全知有限原理（LPO）：

对于每个二进制序列（a1，a2，...），要么对于所有 n，an=0，要么存在 n 使得 an=1，

这通常被认为是一个本质上非构造性的原理，原因有几个。首先，它的递归解释，

存在一个递归算法，应用于任何递归定义的二进制序列（a1，a2，...），如果对于所有 n，an=0，则输出 0，如果对于某些 n，an=1，则输出 1，

在递归函数理论中，即使使用经典逻辑（参见 Bridges＆Richman [1987]，第 3 章），这是可以被证明为假的；因此，如果我们想要允许对我们所有的数学进行递归解释，那么我们不能使用 LPO。其次，有一个模型理论（Kripke 模型），可以证明 LPO 不是可构造推导的（Bridges＆Richman [1987]，第 7 章）。

## 2. 逻辑的构造性解释

到目前为止，应该清楚地认识到，一个充分发展的计算数学不允许大多数经典数学所依赖的关于析取和存在的理想主义解释。为了进行构造性工作，我们需要回到自然的构造性解释，而不是经典解释：

| ∨ (or):              | 要证明 P∨Q，我们必须要么有 P 的证明，要么有 Q 的证明。                              |
| ----------------------- | -------------------------------------------------------------------------------------- |
| ∧ (and):             | 要证明 P∧Q，我们必须既有 P 的证明，又有 Q 的证明。                                  |
| ⇒ (implies):         | 一个证明 P→Q 的算法是将任何证明 P 转化为证明 Q 的算法。                             |
| ¬ (not):             | 要证明 ¬P，我们必须展示 P 蕴含 0=1。                                                |
| ∃ (存在)：           | 为了证明∃xP(x)，我们必须构造一个对象 x，并证明 P(x)成立。                           |
| ∀（对于每个/所有）： | 证明∀x∈SP(x)的算法是一个应用于任何对象 x 和证明 x∈S 的数据的算法，证明 P(x)成立。 |

这些 BHK 解释（名称反映了它们在 Brouwer、Heyting 和 Kolmogorov 的工作中的起源）可以使用 Kleene 的可实现性概念更加精确地描述；参见（Dummett [1977/2000]，222-234；Beeson [1985]，第 VII 章）。

有一个常见的误解，即构造性数学只是没有通过矛盾证明（反证法论证）的数学。事实并非如此。考虑典型的证明√2 是无理数的证明：这些证明从假设“√2 是有理数”开始，然后通过基本的、完全构造性的步骤得出矛盾。这样的过程是一个完全构造性的证明，证明了√2 不是有理数；实际上，“¬p”的构造性解释恰好是假设 p 会导致矛盾。本段开头提到的误解是由于将否定陈述的证明（如前述证明）与以下类型的证明混淆：假设¬p，推导出矛盾，然后得出 p 必须成立的结论。从构造性的角度来看，从后一种类型的证明中最多可以得出结论¬¬p；最后一步声称 p 必须成立，这是非构造性的。

为了加强这一观点，考虑一个形式为的证明

> 假设不存在 boojum；然后通过构造性的论证得出矛盾。

这样的证明通常不包含算法信息，使我们能够建立构造性地证明存在一个 boojum。更正式地说，¬¬∃xP(x)的构造性证明并不能自动让我们得出∃xP(x)的结论。

总结一下：要证明¬p，我们可以，并且通常会假设 p 并推导出矛盾。要证明 p，仅仅假设¬p 并推导出矛盾是不够的。

现在我们转向实践中的直觉逻辑。如果我们真的想要以这样的方式发展数学，使得当一个定理断言存在一个具有性质 P(x)的对象 x 时，定理的证明体现了构造 x 和通过必要的计算证明 x 具有性质 P(x)的算法，那么我们在寻找什么样的东西呢？以下是一些定理的例子，每个定理后面都有对其构造性证明要求的非正式描述。

1. 对于每个实数 x，要么 x=0，要么 x≠0。

证明要求：一个算法，应用于给定的实数 x，决定 x=0 还是 x≠0。请注意，为了做出这个决定，算法可能不仅使用描述 x 的数据，还使用显示 x 实际上是一个实数的数据。

2. 对于 R 中的每个非空有界上方有界的子集 S，都存在一个最小上界。

证明要求：一个算法，应用于实数集合 S，S 的一个成员 s 和 S 的一个上界，

1. 计算一个对象 b 并显示 b 是一个实数；
2. 表明对于每个 x∈S，都有 x≤b; 并且
3. 给定一个实数 b′<b，计算一个元素 x∈S，使得 x>b′。
4. 如果 f 是一个在闭区间[0,1]上连续的实值映射，使得 f(0)⋅f(1)<0，则存在一个 x，使得 0<x<1 且 f(x)=0。

证明要求：一个应用于函数 f、f 的连续性模和 f(0)和 f(1)的值的算法，

1. 计算出一个对象 x，并显示 x 是一个介于 0 和 1 之间的实数；并且
2. 显示 f(x)=0。
3. 如果 f 是一个在闭区间 [0,1] 上连续的实值映射，使得 f(0)⋅f(1)<0，那么对于每个 ε>0，存在一个 x 满足 0<x<1 且 |f(x)|<ε。

证明要求：一个算法，应用于函数 f，一个函数 f 的连续性模，函数值 f(0) 和 f(1)，以及一个正数 ε，

1. 计算一个对象 x，并显示 x 是一个介于 0 和 1 之间的实数；并且
2. 表明|f(x)|<ε。

我们已经有理由怀疑(A)是否有一个构造性证明。如果(B)的证明要求可以满足，那么对于任何数学命题 P，我们可以将(B)的证明应用于计算出一个有理逼近值 z，使其接近集合的上确界σ，该集合定义为 S={0}∪{x∈R:P∧x=1}。

S={0}∪{x∈R:P∧x=1}

有错误<1/4。然后我们可以确定是否 z>1/4，在这种情况下σ>0，或者 z<3/4，当σ<1。在第一种情况下，存在 x∈S，使得 x>0，所以我们必须有 x=1，因此 P。在情况σ<1 下，我们有¬P。因此(B)蕴含了排中律。

然而，在 Bishop 的基于预先指定收敛速率的 Cauchy 序列的构造性实数理论中，我们可以证明以下构造性上确界原理：

> 设 S 是 R 的一个非空上界有界子集。那么 S 有一个最小上界，当且仅当它是上序定位的，即对于所有实数α，β，其中α<β，要么β是 S 的一个上界，要么存在 x∈S，使得 x>α（Bishop & Bridges [1985]，第 37 页，命题（4.3））。

顺便提一下，我们提到了基于区间算术的构造性数学理论的另一种发展方式；请参阅 Bridges＆Vîță [2006]的第 2 章。

陈述（C）和（D）都是经典上等价的中值定理的版本。在这些陈述中，函数 f 的连续性模数是一个由正实数对（ε，δ）组成的集合Ω，具有以下两个性质：

* 对于每个ε>0，存在δ>0，使得（ε，δ）∈Ω。
* 对于每个(ε,δ)∈Ω，以及对于所有的 x,y∈[0,1]，满足|x−y|<δ，我们有|f(x)−f(y)|<ε。

陈述(C)蕴含另一个本质上非构造性的原则，即较小的有限知识原则(LLPO)：

对于每个二进制序列(a1,a2,…)，最多只有一个项等于 1，要么对于所有偶数 n，an=0，要么对于所有奇数 n，an=0。

陈述（D），作为（C）的一种弱形式，可以通过使用标准类型的区间二分论证来证明构造性地。下面的更强的构造性中值定理，对于大多数实际目的来说是足够的，它使用了近似区间二分论证来证明：

设 f 是闭区间[0,1]上的连续实值映射，使得 f(0)⋅f(1)<0。假设 f 在局部非零，即对于每个 x∈[0,1]和每个 r>0，存在 y 使得|x−y|<r 且 f(y)≠0。那么存在 x 使得 0<x<1 且 f(x)=0。

中值定理的情况是构造性分析中的许多情况的典型代表，我们在其中找到一个经典定理和几个构造性版本，其中一些或全部在经典逻辑下可能是等价的。

有一个全知原则，其构造性状态不如 LPO 和 LLPO 明确——即马尔可夫原则（MP）：

对于每个二进制序列（an），如果所有项 an 都等于 0 是矛盾的，则存在一个等于 1 的项。

这个原则等价于一些简单的经典命题，包括以下命题：

* 对于每个实数 x，如果 x 等于 0 是矛盾的，那么 x≠0（按照我们之前提到的意义）。
* 对于每个实数 x，如果 x 等于 0 是矛盾的，那么存在 y∈R，使得 xy=1。
* 对于每个一一连续映射 f:[0,1]→R，如果 x≠y，则 f(x)≠f(y)。

马尔可夫原理代表了一种无限搜索：如果你有一个证明，证明所有项都为 0 会导致矛盾，那么通过依次测试项 a1，a2，a3，...，你保证会找到一个等于 1 的项；但这个保证并不意味着你会在宇宙的尽头之前找到所需的项。大多数构造性数学的从业者对马尔可夫原理持怀疑态度，甚至完全不相信。这种观点得到了一个克里普克模型的观察的支持，该模型表明 MP 在构造上是不可推导的（Bridges＆Richman [1987]，137-138）。

## 3. 构造性数学的不同形式

保留计算解释的可能性是使用我们上面给出的逻辑连接词和量词的构造性重新解释的动机之一；但这并不完全是数学构造主义先驱们的动机。在本节中，我们将介绍过去 130 年来数学构造主义的一些不同方法。

### 3.1 直觉主义数学

在 19 世纪末，某些人，尤其是克罗内克和庞加莱，对他们的同时代人使用的理想主义、非构造性方法表示怀疑，甚至不赞成；但是在勒约夫·布劳尔（1881-1966）的辩论著作中，从他的阿姆斯特丹博士论文《布劳尔[1907]》开始，持续了 47 年，为构造性数学的精确、系统化方法奠定了基础。在布劳尔的哲学中，即直觉主义，数学是人类思维的自由创造，只有当一个对象可以（在思维中）构造出来时，它才存在。如果一个人持有这种哲学立场，那么他就不可避免地会被前述的对逻辑联结词和量词的构造性解释所吸引：因为怎么可能证明某个对象 x 不存在的不可能性，并描述出 x 的思维构造呢？

布劳尔并不是他的思想的最清晰的阐述者，这可以从以下引文中看出：

> 数学是当时间的流逝导致的二元性的主题被抽象出来，从所有特殊事件中抽象出来。所有这些二元性的共同内容的剩余空形式[关于 n 和 n+1 的关系]成为数学的原始直觉，并且无限重复地创造出新的数学主题。(引自 Kline [1972]，1199-2000)

布劳尔观点的现代版本由 Errett Bishop 提出(Bishop [1967]，第 2 页)：

> 数学的主要关注点是数字，这意味着正整数。我们对数字的感觉就像康德对空间的感觉一样。正整数及其算术是我们智力的本质所预设的，我们倾向于相信，这也是智力的本质所预设的。从单位的原始概念、添加单位的概念和数学归纳的过程中，正整数的发展是完全令人信服的。用 Kronecker 的话来说，正整数是上帝创造的。

然而，不管布劳尔的著作有多晦涩，有一点总是清楚的：对他来说，数学优先于逻辑。可以说，正如赫尔曼·韦尔在下面的段落中所说的那样，布劳尔认为经典数学在使用经典逻辑时没有参考基础数学，因此存在缺陷：

> 根据[布劳尔]的观点和对历史的阅读，经典逻辑是从有限集合及其子集的数学中抽象出来的。...忘记了这个有限起源，后来人们错误地将那种逻辑误认为高于并先于所有数学，并最终无理由地将其应用于无限集合的数学。这是集合论的堕落和原罪，它因此受到了自反矛盾的惩罚。令人惊讶的不是这些矛盾的出现，而是它们在游戏的最后阶段才出现。（韦尔[1946]）

特别是这种对逻辑的误用导致了非构造性的存在证明，用韦尔的话来说，“告诉世界存在一个宝藏，却不透露它的位置”。

为了描述直觉主义数学家使用的逻辑，首先需要分析心智的数学过程，从中可以提取出逻辑。1930 年，布劳尔最著名的学生阿伦德·海廷发表了一套形式公理，这些公理清晰地表征了直觉主义所使用的逻辑，因此被普遍称为直觉主义逻辑的公理（海廷[1930]）。这些公理捕捉了我们之前给出的关于联结词和量词的非正式 BHK 解释。

直觉主义数学（INT）在对“序列”一词的解释上与其他类型的构造性数学有所不同。通常，在构造性数学中，序列由一个规则给出，该规则事先确定了如何构造每个项；这样的序列可以被称为法则性的或预定的。布劳尔将序列的这个概念推广到包括逐个构造项的可能性，每个项的选择是自由的，或者仅受事先规定的某些限制。大多数序列的操作不要求它们是预定的，并且可以在这些更一般的自由选择序列上执行。

因此，对于直觉主义者来说，一个实数 x=(x1,x2,…)——本质上是一个有理数的柯西序列——不需要通过规则给出：它的项 x1,x2,…只是有理数，逐个构造，仅受某种柯西限制的约束，比如 Bishop [1967]使用的以下限制：

∀m∀n[|xm−xn|≤(1m+1n)]

一旦自由选择序列被引入到数学中，某些强选择原则也会被引入，这可能会让人感到惊讶。设 P 是 NN×N（其中 N 表示自然数集，对于集合 A 和 B，BA 表示从 A 到 B 的映射集合）的子集，并且假设对于每个 a∈NN，存在 n∈N 使得(a,n)∈P。从构造性的角度来看，这意味着我们有一个适用于序列的过程，可以计算出给定 a 的 n。根据布劳威尔的观点，NN 的元素的构造是永远不完全的：一个通用序列 a 在任何给定时刻，我们只能知道关于 a 的有限个项。由此可知，我们的过程必须能够从一些有限的初始序列(a0,…,aN)中计算出一个自然数 n，使得 P(a,n)成立。如果 b∈NN 是满足对于 0≤k≤N 有 bk=ak 的任意序列，则我们的过程对于 b 必须返回与 a 相同的 n。这意味着 n 是关于 a 的一个连续函数，相对于 NN 上由度量ϱ:(a,b)⇝inf{2−n:ak=bk for 0≤k≤n}给出的拓扑。

ϱ:(a,b)⇝inf{2−n:ak=bk for 0≤k≤n}.

因此，我们得出了连续选择原则的以下表述，我们将其分为连续部分和选择部分。

CC1：从 NN 到 N 的任何函数都是连续的。

CC2：如果 P⊆NN×N，并且对于每个 a∈NN，存在 n∈N 使得(a,n)∈P，则存在一个函数 f:NN→N，使得对于所有 a∈NN，(a,f(a))∈P。

如果 P 和 f 如同 CC2 中所述，那么我们称 f 是 P 的选择函数。

在假设 CC1-2 下，全知原理 LPO 和 LLPO 可以被证明是错误的；但是 MP 与之一致。CC1-2 的一些显著结果包括以下内容。

* 从 NN 或 2N 到度量空间的任何函数都是逐点连续的。
* 每个从一个非空完备可分度量空间到度量空间的映射都是逐点连续的。
* 每个从实数线 R 到自身的映射都是逐点连续的。
* 设 X 是一个完备可分的赋范空间，Y 是一个赋范空间，(un)是从 X 到 Y 的线性映射序列，对于 X 的每个单位向量 x，ϕ(x)=sup{∥un(x)∥:n∈N}
  存在。那么存在 c>0，使得对于所有 n∈N 和 X 的所有单位向量 x，∥un(x)∥≤c（统一有界性原理）。

这些陈述中的每一个似乎都与已知的经典定理相矛盾。然而，与经典数学的比较不应该表面化：为了理解这里没有真正的矛盾，我们必须认识到直觉主义数学中“函数”甚至“实数”的含义与经典设置中的含义相当不同。（实际上，直觉主义数学不能轻易直接地与经典数学进行比较。）

布劳尔对函数和连续体的本质的内省使他得出了一个第二原理，与连续选择原理不同，这个原理在经典上是有效的。这个原理需要更多的背景来解释。

对于任意集合 S，我们用 S∗ 表示由 S 的所有有限序列组成的集合，包括空序列 ( )。如果 α=(a1,…,an) 是 S∗ 中的一个元素，则 n 被称为 α 的长度，用 |α| 表示。如果 m∈N，且 α 是 S 中长度至少为 m 的有限或无限序列，则我们用 ¯α(m) 表示 α 的前 m 个项组成的有限序列。注意，¯α(0)=( ) 且 |¯α(0)| = 0。如果 α∈S∗，且 β=¯α(m) 对于某个 m 成立，则我们说 α 是 β 的扩展，β 是 α 的限制。

如果 S 的子集 σ 是可分离的（从 S 中），则称为可分离（从 S 中）。

 ∀x∈S(x∈σ∨x∉σ)。

如果 N∗的可分离子集σ满足以下条件，则称其为一个扇形：

* 它在限制下是封闭的：对于每个α∈N∗和每个 n，如果¯α(n)∈S，则当 0≤k≤n 时，¯α(k)∈S；并且
* 对于每个α∈σ，集合{α∗n∈S:n∈N}
  是有限的或者为空，其中 α∗n 表示通过将自然数 n 附加到 α 的项上得到的有限序列。

在一个扇形 σ 中，路径 α 是一个有限或无限的序列，使得对于每个适用的 n，都有 ¯α(n)∈σ。如果路径 α 被子集 B 阻挡，则表示 α 的某个限制在 B 中；如果路径 α 的任何限制都不在 B 中，则表示 α 错过了 B。对于扇形 σ 的子集 B，如果 σ 的每个无限路径都被 B 阻挡，则称 B 为 σ 的一根栏杆；如果存在 n∈N，使得每个长度为 n 的路径都被 B 阻挡，则称 B 为 σ 的一根均匀栏杆。

最后，我们可以陈述布劳威尔的直觉主义的下一个原理，即可分离栏杆的扇形定理（FTD）：

每个可拆卸的风扇杆都是均匀的。

在其经典的逆否形式中，FTD 被称为 König 引理：如果对于每个 n，存在一条长度为 n 的路径，它不经过 B，那么存在一条不经过 B 的无限路径（参见 Dummett 1977 [2000]，49-53 页）。（当然，经典条件的可拆卸性是多余的。）构造一个布劳威尔反例来反驳 König 引理是很简单的。

布劳威尔实际上提出了风扇定理，没有风扇杆可拆卸的限制。试图证明更一般的风扇定理的构造性依赖于我们如何知道一个子集是一个杆的分析，并导致布劳威尔提出了杆归纳的概念；这在数学哲学条目的直觉主义的第 3.6 节中进行了讨论；关于杆归纳的另一个好的参考文献是 van Atten（2004）。我们将在第 4 节中回到风扇定理。

在布劳尔原理的众多应用中，最著名的是他的一致连续性定理（它是由 CC1-2 的逐点连续性结果和比 FTD 更一般的扇形定理推导出来的）：

> 从一个紧致（即完备、全有界）度量空间到一个度量空间的每个映射都是一致连续的。

再次警告读者要在布劳尔直觉主义框架内仔细解释这一点，并不要得出错误的结论，即直觉主义与古典数学相矛盾。更明智的做法是将这两种数学视为不可比较的。有关进一步讨论，请参阅直觉逻辑条目。

不幸的是，面对希尔伯特等数学家的反对，布劳尔的直觉主义数学和哲学学派越来越多地涉及到对建设性思维本质的准神秘的推测，至少对于古典数学家来说，这对建设性数学的实践是有害的。布劳尔派和希尔伯特派之间的这种不幸的两极化在 20 世纪 20 年代达到了顶点，有关细节可以在范·达伦[1999, 2005]和范·斯蒂赫特[1990]的布劳尔传记中找到。

### 3.2 递归构造性数学

在 20 世纪 40 年代末，俄国数学家马尔科夫开始发展一种替代形式的构造性数学 RUSS，它本质上是带有直觉主义逻辑的递归函数论（马尔科夫[1954]，库什纳[1985]）。在这种形式中，对象是通过哥德尔编号定义的，而过程都是递归的；RUSS 与图灵、丘奇等人在 1936 年之后发展起来的经典递归分析的主要区别在于 RUSS 使用的逻辑是直觉主义的。

数学家在努力理解 RUSS 时面临的一个障碍是，它以递归理论的语言表达，不容易阅读；事实上，当打开库什纳的优秀讲座[1985]的一页时，人们可能会想这是分析还是逻辑。（这个评论应该参考阿伯斯[1980, 2001]关于经典递归分析的两本相对容易阅读的书。）幸运的是，我们可以通过 Richman [1983]的公理方法（也参见 Bridges＆Richman [1987]的第 3 章）来深入理解 RUSS 的核心。

首先，我们定义一个集合 S 是可数的，如果存在一个从可分离的 N 的子集到 S 的映射。根据直觉逻辑，我们无法证明 N 的每个子集都是可分离的（读者可以提供一个布劳威尔式的例子来证明这一点）。Richman 的公理方法中，N 的可数子集是 RUSS 正常发展中递归可枚举集合的对应物。

通过 N 上的部分函数，我们指的是定义域是 N 的子集的映射；如果定义域是 N 本身，则称该函数为 N 上的全函数。Richman 对 RUSS 的方法基于直觉逻辑和一个可计算部分函数（CPF）的单一公理。

存在一个枚举 ϕ0,ϕ1,… ，它是从 N 到 N 的所有具有可数定义域的偏函数集合。

令人惊讶的是，使用这个原理可以清晰而迅速地推导出许多结果。例如，我们可以证明以下结果，几乎立即表明在递归设置中 LLPO 和 LPO 都是错误的。

> 存在一个总函数 f:N×N→{0,1}。
>
> * 对于每个 m，最多存在一个 n 使得 f(m,n)=1; 并且
> * 对于每个全函数 f:N→{0,1}，存在 m,k∈N 使得 f(m,2k+f(m))=1.

然而，更有趣的是 RUSS 中的以下结果。

* Specker 定理（Specker [1949]）：存在一个严格递增的有理数序列（r1，r2，...），位于闭区间[0,1]中，对于每个 x∈R，存在 N∈N 和δ>0，使得对于所有 n≥N，|x−rn|≥δ。
* 对于每个ε>0，存在一个有界开区间序列（I1，I2，...），位于 R 中，使得 R⊆⋃∞n=1In 且对于每个 N，∑Nn=1|In|<ε。（这样的区间序列称为 R 的ε-奇异覆盖。）
* 存在一个逐点连续的函数 f：[0,1]→R，它不是一致连续的。
* 存在一个正值的一致连续函数 f:[0,1]→R，其下确界为 0。

从经典观点来看，当人们意识到诸如“函数”和“实数”这样的词应该被解释为“递归函数”和“递归实数”时，这些结果就能够合理地解释。请注意，上述四个递归定理中的第二个是对（递归）实数线的开覆盖紧致性质的一个强递归反例；而第四个是对于每个将紧致集映射到 R 的一致连续映射都达到其下确界的经典定理的一个递归反例。

### 3.3 Bishop 的构造性数学

构造性数学的各个领域在接下来的十五年中进展相对缓慢。要提高构造主义在数学中的地位，需要一位顶级的古典数学家来展示，在没有承诺布劳尔的非古典原则或递归函数理论的情况下，可以进行彻底的构造性深度分析。这个需求在 1967 年得到满足，当时 Errett Bishop 的专著《构造分析基础》[1967]（另见 Bishop＆Bridges [1985]）问世。在这本书中，Bishop 以一种非凡的方式，用正常分析师使用的非正式但严谨的风格，对二十世纪分析学的大部分内容进行了构造性的发展，包括 Stone-Weierstrass 定理、Hahn-Banach 和分离定理、希尔伯特空间上自伴算子的谱定理、抽象积分的 Lebesgue 收敛定理、Haar 测度和抽象傅里叶变换、遍历定理以及 Banach 代数理论的基本要素。因此，他一举驳斥了希尔伯特如此有力地表达的普遍观点：

> 从数学家那里剥夺排中律原则，就好比禁止天文学家使用望远镜，或者禁止拳击手使用拳头一样。（希尔伯特[1928]）

不仅 Bishop 的数学，BISH，具有可读性的优势 - 如果您在 Bishop 的书的任何一页上打开，您所看到的清晰可辨认为分析，即使在证明过程中，他的步骤有时对于受过排中律训练的人来说可能显得奇怪 - 但与直觉主义或递归数学不同，它允许许多不同的解释。直觉主义数学，递归构造性数学，甚至经典数学都提供了 BISH 的模型。实际上，BISH 中的结果和证明可以在任何合理的可计算数学模型中进行解释，例如 Weihrauch 的第二类有效性理论（Weihrauch [2000]；Bauer [2005]），最多只需进行微小的修改。

这种多重可解释性是如何实现的？至少部分原因是 Bishop 拒绝确定他的“算法”或者用他的话说，“有限例程”的原始概念。这种拒绝导致了对他的方法缺乏逻辑学家通常对基础系统的期望的精确性的批评。然而，通过更仔细地观察 BISH 的实践者在证明定理时实际上所做的事情，可以克服这种批评：实践中，他们使用直觉主义逻辑进行数学推理。经验表明，限制为直觉主义逻辑总是迫使数学家以至少非正式地可以描述为算法的方式工作；因此，算法数学似乎等同于仅使用直觉主义逻辑的数学。如果是这样的话，那么我们可以使用直觉主义逻辑在任何合理定义的数学对象上进行构造性数学的实践，而不仅仅是某些“构造性对象”的类别。

这种观点或多或少是由 Richman [1990, 1996]首次提出的。将逻辑作为构造性数学的主要特征，它并没有反映出 Brouwer、Heyting、Markov、Bishop 等构造主义先驱者对数学优于逻辑的主张。另一方面，它确实捕捉到了构造性数学在实践中的本质。

因此，可以区分 Brouwer 等人的本体论构造主义和 Richman 等人的认识论构造主义。前者认为数学对象是心智创造，从而导致了对构造性数学的信仰；而后者将构造性数学的特征归因于其基于直觉逻辑的方法论。当然，前一种方法论不可避免地导致了后一种方法论；而后一种方法论与 Brouwer 的本体论并不矛盾。

要进行实际的数学工作，我们需要的不仅仅是直觉逻辑。对于 Bishop 来说，数学的基本构件是正整数（参见上文第 3.1 节中 Bishop [1967]的引用）。在 BISH 的早期形式系统中，有 Myhill [1975]基于数、集合和函数的原始概念的公理基础；Feferman [1975]的显式数学系统；以及 Friedman [1977]的直觉主义 ZF 集合论。在这个阶段，BISH 最受欢迎的两种形式基础是构造性 Zermelo-Fraenkel 集合论（CZF），见 Aczel 和 Rathjen [2010, in Other Internet Resources]；以及直觉主义类型论，见 Martin-Löf [1975, 1984]。

### 3.4 Martin-Löf 的构造性类型论

在结束我们对现代构造性数学的各种形式的介绍之前，我们来看一种基于 Per Martin-Löf 直觉主义类型论的第四种形式，即 ML。Martin-Löf 在他的《构造性数学笔记》[1968]中发表了他的观点，这是他在 1966 年至 1968 年间在欧洲讲授的课程的基础上写成的；因此，他对数学中的构造主义的参与至少可以追溯到 Bishop 撰写《构造性分析基础》的时期。Martin-Löf 的书与 RUSS 的精神相符，而不是 BISH；事实上，他在自己的手稿完成之前并没有接触到 Bishop 的书。后来，Martin-Löf 将他的注意力转向了他的类型理论作为 Bishop 风格构造性数学的基础。

在这里，用他自己的话解释了 ML 背后的思想的非正式解释：

> 我们将考虑数学对象或构造。每个数学对象都属于某种类型，并且始终与其类型一起给出。... 通过描述我们必须做什么来构造该类型的对象来定义类型。... 换句话说，如果我们理解... 成为该类型对象的含义，那么类型就是明确定义的。因此，例如 N→N [从 N 到 N 的函数] 是一种类型，不是因为我们知道特定的数论函数，如原始递归函数，而是因为我们认为我们理解了数论函数的概念。 （Martin-Löf [975]）

特别地，在这个系统中，每个命题都可以表示为一种类型：即，该命题的证明类型。反过来，每个类型确定一个命题：即，该类型所涉及的命题是有人居住的。因此，当我们将某个类型 T 视为命题时，我们解释公式

x∈T

如“x 是命题 T 的证明”。

马丁-勒夫继续从旧的类型中构造新的类型，例如笛卡尔积和不交并。例如，笛卡尔积

(Πx∈A)B(x)

是一种将类型为 A 的任意对象 x 映射为类型为 B(x)的对象的函数类型。在命题即证明的解释中，其中 B(x)表示一个命题，上述笛卡尔积对应于全称命题(∀x∈A)B(x)。

 Martin-Löf 在证明和推导之间进行了仔细区分：证明对象是某个命题已被证明的证人；而推导是证明对象构造的记录。此外，他进行了两种基本形式（这里不敢说“类型”）。第一种是证明对象和命题之间的关系，第二种是某些命题的属性。在第一种情况下，判断要么是一个证明对象 a 是命题 A 的证人，要么是两个证明对象 a 和 b 相等，并且都证明了 A 已被证明。第二种形式的第一种情况说明命题 A 是良构的，第二种情况记录了两个命题 A 和 B 相等。

Martin-Löf distinguishes carefully between proofs and derivations: a *proof object* is a witness to the fact that some proposition has been proved; whereas a *derivation* is the record of the construction of a proof object. Also, he exercises two basic forms (one dare not say “types” here) of *judgement*. The first is a relation between proof objects and propositions, the second a property of some propositions. In the first case, the judgement is either one that a proof object a is a witness to a proposition A, or else one that two proof objects a and b are equal and both witness that A has been proved. The first case of the second form of judgement states that a proposition A is well-formed, and the second records that two propositions A and B are equal.

有一套谨慎且高度详细的规则来形式化 ML。我们不会在这里详述，而是将读者引用到其他来源，如 Sambin＆Smith [1998]。

当在类型论中实际进行构造性数学时，人们经常需要为完全呈现的集合（类型）配备一个等价关系，这种组合被称为 setoid。映射然后是尊重这些等价关系的函数。这与 Bishop 呈现他的集合非正式理论的方式非常一致。Martin-Löf 的依赖类型对于构造子集非常有用。例如，可以使用Σ类型构造实数（参见 Martin-Löf [1984]）：

(Σx∈N+→Q)(Πm∈N+)(Πn∈N+)[|xm−xn|≤(1m+1n)]，

因此，这种类型 B 的元素是由一个收敛的有理数序列 x 和一个证明 p 组成的一对。通过取(x,p)∼(y,q)来定义 R 上的适当等价关系∼，其中

 ∀m∈N+(|xm−ym|≤2m)。

得到的实数集合是 R=(R,∼)。我们可以轻松证明

∀x∈R∃n∈Z(n<x<n+2)

然后，使用类型论的选择公理（见下面的第 4 节），找到一个函数 f:R→Z，使得 f(x)<x<f(x)+2。然而，没有理由相信函数 f 遵守等价关系，即如果 x∼y，则 f(x)=f(y)。

每个构造性证明都体现了一个算法，原则上可以被提取出来并重构为计算机程序；此外，构造性证明本身就是验证算法正确性的一种方式——即满足其规范。Martin-Löf 对构造性数学的形式化方法的一个主要优势是它极大地促进了从证明中提取程序的工作。这导致了在各个地方对构造性数学实现的认真研究（参见 Martin-Löf [1980]，Constable [1986]，Hayashi＆Nakano [1988]，Schwichtenberg [2009]）。一些最近用于证明提取的类型理论实现是 Coq 和 Agda（请参见其他互联网资源中的链接）。

## 4. 选择公理和连续假设

完全的选择公理可以表述如下：

如果 A、B 是非空集合，且 S 是 A×B 的子集，使得

∀x∈A∃y∈B((x,y)∈S),

那么存在一个选择函数 f:A→B，使得

∀x∈A((x,f(x))∈S).

现在，如果这在一个构造性解释下成立，那么对于给定的 x∈A，选择函数的值 f(x)不仅取决于 x，还取决于证明 x 属于 A 的数据。一般来说，我们不能期望产生这种类型的选择函数。然而，公理中的假设的 BHK 解释是存在一个算法 A，应用于任何给定的 x∈A，产生一个元素 y∈B，使得(x,y)∈S。如果 A 是一个完全呈现的集合，即在构造集合的每个元素之外不需要额外的工作来证明该元素确实属于 A，那么我们可以合理地期望算法 A 是一个选择函数。在 Martin-Löf 的类型论中，每个集合都是完全呈现的，并且根据 BHK 解释，选择公理是可导出的。

另一方面，在 Bishop 风格的数学中，完全呈现的集合（或者用他的术语来说，基本集合）是罕见的，其中一个例子是 N；因此我们可以预期选择公理是不可导出的。事实上，正如 Diaconescu [1975]和 Goodman & Myhill [1978]所示，并且 Bishop 自己在 1967 年的第 58 页的问题 2 中预示的那样，选择公理蕴含排中律。显然，Diaconescu-Goodman-Myhill 定理仅在假设不是每个集合都是完全呈现的情况下适用。

在不使用 ML 的构造性数学家通常拒绝完全的选择公理，但接受可数选择公理，其中选择的域是 N，以及依赖选择。但有些人更喜欢甚至不使用可数选择，因为在不给出规则的情况下谈论无穷选择会带来一个困难，无论无穷是可数的还是不可数的。有趣的是，勒贝格在给博雷尔的一封信中正是指出了这一点（参见 Moore [2013]，第 316 页）：

> 当 Hadamard 完全同意时，他说，如果在不给出规则的情况下谈论无限选择，无论无限选择是否可数，都会带来同样大的困难。

放弃可数选择的影响是排除了许多定理，这些定理在它们的证明中使用了顺序、基于选择的论证。但那些主张避免选择的人会认为，避免选择迫使你更好地阐述事物。

一个特别感兴趣的情况是代数基本定理：每个复多项式在复平面上至少有一个根。Richman [2000]已经证明，如果没有可数选择，尽管我们只能构造出孤立的（可能是多重的）根，但我们可以构造出对根的多重集合的任意接近逼近。这种方法侧重于找到多项式的近似线性因子分解，而不是找到每个根的单独近似。

要进一步分析集合论和类型论中的选择公理，请参阅 Martin-Löf [2006]，以及关于范畴论、类型论和直觉类型论的 SEP 条目。

现在我们回顾一下经典集合论中的幂集公理：如果 X 是一个集合，那么它的幂集 sb(X)≡{S:S⊂X}也是一个集合。由于这个定义是不确定的，大多数构造性数学家不愿意将 sb(X)视为一个集合。他们通常使用的，我们也将采用的是幂集公理的构造性替代：如果 A 和 B 是集合，那么从 A 到 B 的所有映射的集合也是一个集合。特别地，所有二进制序列的类 2N 是一个集合。

为了讨论连续统假设，我们需要对类 A 和 B 的大小进行比较。我们说，类 A 比类 B 更大，如果存在从 B 到 A 的单射，但不存在从 A 到 B 的单射。

* 如果存在一个将 A 双射映射到 B 的映射，且
* 如果 A 与 B 的一个子类等势，则 A 被基数地包含在 B 中。

在第一种情况下，我们写作 A≅B，而在第二种情况下，写作 A≲B。

构造性泽尔梅洛-弗兰克尔集合论中替换公理的一个结果是，如果 A 是一个集合，B 是与 A 等势的类，则 B 也是一个集合。由此可知，可分离子集类 dch(N)≡{S⊂N:∀x∈N(x∈S∨x∉S)}，等同于 2N，是一个集合。

在经典逻辑中，N 的每个子集都可以从 N 中分离出来，因此 dch(N) = sb(N)。但在构造性逻辑中并非如此：如果对于每个命题 p，集合{x∈1:p∨¬p}都在 dch(N)中，那么我们可以推导出排中律。

经典连续统假设指的是不存在一个集合，其基数严格介于集合 N 和 sb(N)之间。我们可以更正式地表述如下：∀C(N≲C≲sb(N)⇒C≅N∨C≅sb(N))或等价地，∀C(N≲C≲sb(N)∧¬(C≲N)⇒C≅sb(N))。这两个陈述的构造性可接受的经典等价形式是：∀C(N≲C≲dch(N)⇒C≅N∨C≅dch(N))，以及我们作为构造性连续统假设 CH 所采用的陈述，∀C(N≲C≲dch(N)∧¬(C≅N)⇒C≅dch(N))。

我们勾画了一个证明，即 CH 蕴含排中律。首先我们注意到 2N 在强意义下是不可数的：康托尔的对角线论证表明，如果 S 是 2N 的可数子集，则存在 f∈2N 使得 f∉S。假设 CH 成立，我们现在定义 X≡{S∈dch(N):p∨¬p}和 C≡N∪X。那么 N≲C≲dch(N)。如果 C≅N，则 p∨¬p 为假，这是荒谬的。因此¬(C≅N)，因此 C≅dch(N)。但是 dch(N)与 2N 等势，是不可数的，因此存在 S∈dch(N)不属于 dch(N)的可数子集 N。因此 S∈C，因此 p∨¬p 成立。

顺便提一下，尽管根据 BHK 解释的'∨'，我们两个构造性陈述之一在经典意义上等价于经典连续统假设，可能看起来比 CH 更强，因为后者蕴含排中律，但在构造性意义上它们是等价的。

对于 CH 的前述工作可以在 CZF 中形式化，CZF 与经典的 Zermelo-Fraenkel 集合论 ZF 等价。如果我们允许自己引用哥德尔-科恩定理，即连续统假设与 ZF 独立，那么我们可以通过更仔细地观察 CH 蕴含 LEM 的证明得出一些有趣的结论。为此，在我们的证明中取 p=CH，使得 X≡{S∈dch(N):CH∨¬CH}。如果 X=0，则¬(CH∨¬CH)，这是荒谬的；因此¬(X=0)。另一方面，如果 X 是有元素的，即包含一个点，则 CH∨¬CH，因此在“∨”的构造性解释下，我们要么有 CH 的证明，要么有¬CH 的证明。由于这与前述的哥德尔-科恩定理相矛盾，我们可以将 X 视为一个明确的例子，即一个非空集合，但无法构造一个成员。这本身并不无趣；但它也给了我们对 CH 的构造性地位的新见解。从我们证明 CH 蕴含 LEM 的证明中，我们可以看到集合 C≡N∪X 满足 N≲C≲dch(N)∧¬(C≅N)。此外，¬(C≅dch(N))⇒X=0，这是荒谬的，因此¬¬(C≅dch(N))。另一方面，C≅dch(N)⇒CH∨¬CH。因此，只要 CH 与 CZF 独立（考虑到 CZF 与 ZF 的等价性，这最好是如此），我们可以看到 C 是一个明确的例子，具有性质 N≲C≲dch(N)∧¬(C≅N)∧¬¬(C≅dch(N))，但在 CZF 内部无法证明与 dch(N)等势。

## 5. 构造性逆向数学

在 1970 年代，哈维·弗里德曼（Harvey Friedman）发起了一个逆向数学研究计划，旨在根据它们与一小部分集合论原理的等价性对数学定理进行分类（Friedman 1975）。这种分类揭示了在证明论复杂性方面有趣且有时引人注目的差异。例如，尽管阿斯科利-阿尔泽拉定理在标准的皮亚诺存在定理的证明中被用到（Hurewicz [1958]，第 10 页），但逆向数学分析表明前者与一个比等价于皮亚诺定理更强的集合论原理等价（Simpson [1984]，定理 3.9 和 4.2）。关于经典逆向数学的标准论著是（Simpson [1999/2009]）。

在本世纪之交，荷兰的 Veldman（参见其他互联网资源）和日本的石原[2005, 2006]独立发起了一个基于直觉主义逻辑而不是经典逻辑的构造性逆向数学（CRM）计划。（尽管如此，现代 CRM 的第一篇发表作品可能是 Julian 和 Richman [1984]，比其时代领先了二十年。）在本文的这一部分，我们描述了一种较不正式的 CRM 方法，采用 BISH 的风格和框架。该 CRM 计划的目标是根据我们必须和只需在 BISH 中添加哪些原理来证明它们，对三个标准模型（CLASS、INT 和 RUSS）中的定理进行分类。

我们强调，我们在这里限制自己于非正式的 CRM，其中我们默认了 Bishop [1967]或 Bishop & Bridges [1985]第一章中描述的函数和集合构造原理，并且我们以从业分析师、代数学家、拓扑学家等的非正式但严谨的风格工作。

在实践中，CRM 自然地分为两个部分。在其中的第一部分中，我们考虑 INT 或 RUSS 的一个定理 T，并试图找到一个在该模型中有效且不同于 T 本身的原则，将其添加到 BISH 中是构造性证明 T 所必需且充分的。在 CRM 的第二部分中，我们处理一个我们怀疑是非构造性的 CLASS 定理 T，并试图证明在 BISH 上，T 等价于一些已知的本质上非构造性原则之一，例如 MP，LLPO，LPO 或 LEM。作为 CRM 的一个例子，我们提到了我们早期的证明，即经典的上确界原则蕴含并且等价于 LEM。

顺便提一下，有一个强有力的论据支持布劳威尔[1921]是第一个处理逆向数学思想的人：他的布劳威尔反例（见上面第 1 节中使用哥德巴赫猜想的那个）正好位于 CRM 的第二部分。即使布劳威尔没有将这些例子陈述为逻辑等价关系，而是陈述为以下类型的蕴含关系

P⇒某些非构造性原则

很难相信他不知道在这些情况下，右侧暗示了左侧。

### 5.1 构造性数学中的扇形定理

为了说明构造性数学的第一部分，我们现在集中讨论类型为的定理。

 BISH ⊢ FT?⇔T,

其中 FT?是 Brouwer 的风扇定理的某种形式，而 T 是 INT 的一个定理。为了做到这一点，我们需要区分完全二进制风扇 2∗（{0,1}中所有有限序列的集合）的某些类型的栏杆。

让α≡（α1，α2，…）是一个有限或无限的二进制序列。将α与另一个字符串β连接起来，

α⌢β≡(α1,α2,…,αn,β1,…,βm).

对于 b∈{0,1}，我们使用α⌢b 而不是α⌢(b)。通过 2∗的 c-子集，我们指的是 2∗的子集 B，满足以下条件：

(1)B={u∈2∗:∀v∈2∗(u⌢v∈D)}

对于 2∗的某个可分离子集 D。2∗的每个可分离子集都是一个 c-子集。另一方面，通过 2∗的Π01-子集，我们指的是具有以下特性的 2∗的子集 B：存在一个可分离子集 S，使得 2∗×N 的每个(u,n)∈S 都满足(u⌢0,n)∈S∧(u⌢1,n)∈S。

∀u∈2∗∀n∈N((u,n)∈S⇒(u⌢0,n)∈S∧(u⌢1,n)∈S)

 并且

B={u∈2∗:∀n∈N((u,n)∈S)}.

每个 2∗的 c-子集 B 都是Π01-子集：只需取 S=D×N，其中 D 是 2∗的可分离子集，满足(1)成立。

如果?表示 2∗的子集的一个性质，则布劳尔的?条扇形定理告诉我们，具有性质?的每个条都是均匀的条。我们特别关注可分离条的扇形定理（已在第 3.1 节中讨论）：

FTD: 完全二进制扇的每个可分离的条是均匀的；

对于 c-子集（即 c-条），c-条的扇定理：

FTc: 完全二进制扇的每个 c-条是均匀的；

对于Π01-条（即Π01-子集）的扇形定理：

FTΠ01：完全二进制扇形的每个Π01-条都是均匀的；

以及完全扇形定理：

FT: 完全二进制扇的每个条都是均匀的。

注意，相对于 BISH，

 FT ⇒ FTΠ01 ⇒ FTc ⇒ FTD.

Lubarsky 和 Diener [2014]已经表明这些蕴涵是严格的。

通常，我们想要证明 FT?在 BISH 上等价于命题：对于适当类型的每个集合 S，存在形式为(2)∀x∈S∃t∈TP(s,t)的逐点性质。

(2)∀x∈S∃t∈TP(s,t)

实际上在以下形式中统一保持

(3)∃t∈T∀s∈SP(s,t).

我们攻击这个问题的策略是双重的。首先，给定一个适当类型的集合 S，我们构造一个 2∗的?-子集 N，使得

* 如果(2)成立，则 B 是一个 bar，且
* 如果 B 是一个均匀的 bar，则(3)成立。

然而，这只是解决方案的一半。为了证明从(3)到(2)的蕴含意味着 FT？，我们考虑一个 2∗的?-子集 B，并构造一个相应的集合 S，使得

* 如果 B 是一个条，那么(2)成立，并且
* 如果(3)成立，那么 B 是一个均匀的条。

这种结果的典型例子是 Julian 和 Richman [1984]的例子，其中 S 是给定的一致连续映射 f:[0,1]→R 的值的集合，T 是正实数的集合，而

P(s,t)≡(s≥t).

我们考虑的逐点性质是

∀x∈[0,1]∃t>0(f(x)≥t),

其统一版本为

∃t>0∀x∈[0,1](f(x)%E2%89%A5t).

Julian-Richman 的结果如下。

定理 1：设 f：[0,1]→R 是一致连续的函数。那么存在一个可分离的子集 B⊆2∗，使得

* 若对于每个 x∈[0,1]，都有 f(x)>0，则 B 是一个栅栏，并且
* 若 B 是一个均匀栅栏，则 inff>0。

定理 2：设 B 是 2∗的一个可分离子集。那么存在一个一致连续的函数 f：[0,1]→R，使得

* 如果 B 是一个栅栏，那么对于每个 x∈[0,1]，有 f(x)>0，并且
* 如果 inf f>0，那么 B 是一个一致栅栏。

这两个定理的证明是微妙而棘手的；请参阅 Julian＆Richman [1984]。

两个 Julian-Richman 定理共同揭示出，相对于 BISH，扇形定理 FTD 等价于正性原则 POS：

在[0,1]上的每个正值、一致连续的函数都有一个正下确界。

由此可见，POS 在 INT 中是可导出的，其中完全扇形定理不仅仅是 FTD，而是一个标准原则。而在 RUSS 中情况则完全相反，存在一个非均匀的可分离的 2∗的条和一个在[0,1]上具有下确界为 0 的正值、一致连续的函数；参见 Bridges＆Richman [1987]的第 5 章和第 6 章。

Berger 和 Ishihara [2005]采用了一种不同的间接方法来证明 POS 和 FTc 的等价性。他们建立了 POS、FTc 和四个类型的原则之间的等价链：“如果最多只有一个具有属性 P 的对象，则存在一个这样的对象”。这四个唯一存在原则是：

CIN！：具有至多一个公共点的紧度量空间的每个有限闭定位子集的降序列具有有限交集（具有唯一性的康托尔交集定理）。注意，度量空间（X，ρ）的子集 S 如果对于 X 中的每个 x，从 x 到 S 的下确界距离存在。

构造性数学！每个在至多一个最小点上具有最小点的紧度量空间上的一致连续的实值函数都有一个最小点。

随附！每个至多有一个无限分支的无限树都有一个无限分支（具有唯一性的弱 König 引理）。

解释！每个从紧度量空间到自身的至多有一个不动点且具有近似不动点的一致连续函数都有一个不动点。

在这些例子中，我们说度量空间(X, ϱ)到自身的映射 f 至多有一个不动点，如果当ϱ(x, y)>0 时，有ϱ(f(x), x)+ϱ(f(y), y)>0；

* 如果对于每个ε>0，存在 x∈X 使得ϱ(f(x), x)<ε，则称其具有近似不动点。
* *has approximate fixed points* if for each ε>0 there exists x∈X such that ϱ(f(x),x)<ε.

CRM 中的一个重要的开放问题是找到一个在 BISH 上等价于[0,1]上的一致连续性定理的扇形定理形式，

UCT[0,1]：[0,1]到 R 的每个逐点连续映射都是一致连续的，

这个命题是 Brouwer 最初为了证明扇形定理而发展出来的。 （注意，相对于 BISH，UCT[0,1]等价于度量空间的一般一致连续性定理：完备的、完全有界的度量空间到度量空间的每个逐点连续映射都是一致连续的。例如，参见 Loeb [2005]。）

由 Berger [2006]的结果可知，

 BISH ⊢ UCT[0,1]⇒ FTc.

此外，Diener 和 Loeb（2008）已经证明了，

 BISH ⊢ FTΠ01⇒ UCT[0,1].

然而，我们不知道这些蕴涵是否可以被双向蕴涵所替代。也许 UCT[0,1]，以及对于紧度量空间的完整一致连续性定理，相对于 BISH 来说，等价于某种自然的、但尚未确定的版本的风扇定理。

关于构造性逆向数学中风扇定理的更多资料，可以参考 Berger＆Bridges [2007]；Diener [2008, 2012]；Diener＆Loeb [2009]；以及 Diener＆Lubarsky [2014]。在 Dent [2013]中，有一个清晰但复杂的图表，说明了风扇定理、连续性和全知原理之间的相互关系（参见其他互联网资源）。

有兴趣的读者可以在以下补充文件中更详细地探讨构造性逆向数学的主题：

> [石原原则 BD-N 和反 Specker 性质](https://plato.stanford.edu/entries/mathematics-constructive/supplement1.html)

## 6. 构造性代数和拓扑学

构造性数学家最初将他们的努力集中在分析领域，取得了相当大的成功——见 Bishop [1967]中发展的丰富的函数分析。这并不意味着，例如，代数已经从构造性企业中被边缘化：Mines 等人[1986]的专著中的材料可以被视为 Bishop 进行的构造性分析的实质性代数对应物。最近，Lombardi 和 Quitté [2011]出版了拟议的两卷作品中的第一大卷构造性代数。然而，我们并不精通代数，并且意识到使本文过长以吸引读者注意力的危险，我们选择不详细讨论构造性分析或代数；相反，在下面的补充文件中，我们转向构造性拓扑，描述一些与该主题相当不同的方法：

> [构造性拓扑的方法](https://plato.stanford.edu/entries/mathematics-constructive/supplement2.html)

## 7. 构造性数学经济学和金融学

对构造性数学经济学的研究可以追溯到 1982 年以来有关偏好、效用和需求的一系列论文；参见 Bridges [1999]。在他的博士论文中，Hendtlass [2013]大大削弱了需求函数存在的条件；他还在不动点理论及其应用方面取得了大量成果，特别是对经济均衡存在性的两个经典证明的构造化。

2015 年，Berger 和 Svindland 在慕尼黑的路德维希-马克西米利安大学开始了一个关于构造性数学金融的研究项目。他们首先证明了资产定价的基本定理、分离超平面定理和马尔可夫原理在构造上是等价的（Berger & Svindland [2016]）。他们最近的工作集中在如何规避经典的极值定理的非构造性，以证明在相对较弱的凸性条件下函数的极点的存在性（Berger & Svindland [2016a]）。他们的项目表明，数学金融和数学经济学一样，可能是优雅、实用的构造性定理的丰富源泉。

## 8. 结束语

数学家们想要分析数学的构造性内容所采取的传统途径是遵循经典逻辑的途径；为了避免无法由真实计算机做出的决策，比如一个实数是否等于 0，数学家必须遵循严格的算法边界，比如递归函数理论所形成的边界。相比之下，构造性数学家所采取的途径是遵循直觉逻辑，这种逻辑自动处理了计算上不可接受的决策。这种逻辑（连同适当的集合论或类型论框架）足以将数学保持在构造性的范围内。因此，数学家可以自由地以分析家、代数学家（例如，Mines 等人[1988]）、几何学家、拓扑学家（例如，Bridges 和 Vîță[2011]，Sambin 即将出版）或其他正常数学家的自然风格工作，唯一的限制是直觉逻辑所强加的限制。正如 Bishop 和其他人所展示的，希尔伯特和今天仍然广泛持有的传统观念，即直觉逻辑会施加如此限制，以至于无法发展严肃的数学，是显然错误的：深入现代数学的大部分内容可以通过纯粹的构造性方法来产生。此外，构造性数学与编程之间的联系对于将抽象数学在计算机上实现和发展具有巨大的潜力。

有关现代构造性数学状况的进一步信息，我们推荐即将出版的《构造性数学手册》[Bridges 等人，编，2023]。


## Bibliography

### References

* Aberth, O., 1980, *Computable Analysis*, New York: McGraw-Hill.
* –––, 2001,*Computable Calculus*, New York: Academic Press.
* Bauer, A., 2005, “Realizability as the connection between computable and constructive Mathematics”, Lecture notes for a tutorial at a satellite seminar of CCA2005, Kyoto, Japan [[available online](http://math.andrej.com/2005/08/23/realizability-as-the-connection-between-computable-and-constructive-mathematics/)].
* Beeson, M., 1985, *Foundations of Constructive Mathematics*, Heidelberg: Springer Verlag.
* Berger, J., 2006, “The logical strength of the uniform continuity theorem”, in *Logical Approaches to Computational Barriers*, A. Beckmann, U. Berger, B. Löwe, and J. V. Tucker (eds.), Heidelberg: Springer Verlag.
* Berger, J., and Bridges, D.S., 2007, “A fan-theoretic equivalent of the antithesis of Specker’s theorem”, *Proceedings of Royal Dutch Mathematical Society (Indagationes Mathematicae)* (Indag. Math. N.S.), 18(2): 195–202.
* –––, 2009, “The fan theorem and positive-valued uniformly continuous functions on compact intervals”, *New Zealand Journal of Mathematics*, 38: 129–135.
* Berger, J., and Ishihara, H., 2005, “Brouwer’s fan theorem and unique existence in constructive analysis”, *Mathematical Logic Quarterly*, 51(4): 360–364.
* Berger, J., and Schuster, P.M., 2006, “Classifying Dini’s theorem”, *Notre Dame Journal of Formal Logic*, 47: 253–262.
* Berger, J., and Svindland, G., 2016, “A separating hyperplane theorem, the fundamental theorem of asset pricing, and Markov’s principle ”, *Annals of Pure and Applied Logic*, 167: 1161–1170.
* –––, 2016a, “Convexity and constructive infima”, *Archive for Mathematical Logic*, 55: 873–881.
* Bishop, E., 1967, *Foundations of Constructive Analysis*, New York: McGraw-Hill.
* –––, 1973, *Schizophrenia in Contemporary Mathematics* (American Mathematical Society Colloquium Lectures), Missoula: University of Montana; reprinted in *Errett Bishop: Reflections on Him and His Research*, American Mathematical Society Memoirs 39.
* Bishop, E. and Bridges, D., 1985, *Constructive Analysis*, (Grundlehren der mathematischen Wissenschaften, 279), Heidelberg: Springer Verlag.
* Bourbaki, N., 1984, *Éléments d’histoire des mathématiques*, Paris: Masson; English-language edition, *Elements of the History of Mathematics*, J. Meldrum (trans.), 2006, Berlin: Springer Verlag.
* Bridges, D.S., 1999, “Constructive methods in mathematical economics”, in *Zeitschrift für Nationalökonomie* (Supplement), 8: 1–21.
* Bridges, D.S., and Diener, H., 2007, “The pseudocompactness of [0, 1] is equivalent to the uniform continuity theorem”, *Journal of Symbolic Logic*, 72(4): 1379–1383.
* Bridges, D.S., and Richman, F., 1987, *Varieties of Constructive Mathematics*, London Mathematical Society Lecture Notes 97, Cambridge: Cambridge University Press.
* Bridges, D.S. and Vîță, L.S., 2006, *Techniques of Constructive Analysis*, Heidelberg: Springer Verlag.
* –––, 2011, *Apartness and Uniformity—A Constructive Development*, Heidelberg: Springer Verlag.
* Bridges, D.S., Ishihara, H., Rathjen, M.J., and Schwichtenberg, H. (eds), forthcoming, *Handbook of Constructive Mathematics*, Cambridge: Cambridge University Press.
* Brouwer, L.E.J., 1907, *Over de Grondslagen der Wiskunde*, Doctoral Thesis, University of Amsterdam; reprinted with additional material, D. van Dalen (ed.), by Matematisch Centrum, Amsterdam, 1981.
* –––, 1908, “De onbetrouwbaarheid der logische principes”, *Tijdschrift voor Wijsbegeerte*, 2: 152–158.
* –––, 1921, “Besitzt jede reelle Zahl eine Dezimalbruchentwicklung?”, *Mathematische Annalen*, 83: 201–210.
* –––, 1924, “Beweis, dass jede volle Funktion gleichmässig stetig ist”, *Proceedings of Royal Dutch Mathematical Society*, 27: 189–193.
* –––, 1924A, “Bemerkung zum Beweise der gleichmässigen Stetigkeit voller Funktionen”, *Proceedings of Royal Dutch Mathematical Society*, 27: 644–646.
* Cederquist, J., and Negri, S., 1996, “A constructive proof of the Heine-Borel covering theorem for formal reals”, in *Types for Proofs and Programs* (Lecture Notes in Computer Science, Volume 1158), 62–75, Berlin: Springer Verlag.
* Constable, R., *et al*., 1986, *Implementing Mathematics with the Nuprl Proof Development System*, Englewood Cliffs, NJ: Prentice-Hall.
* Coquand, T., 1992, “An intuitionistic proof of Tychonoff’s theorem”, *Journal of Symbolic Logic*, 57: 28–32.
* –––, 2009, “Space of valuations”, *Annals of Pure and Applied Logic*, 157: 97–109.
* –––, 2016, “Type Theory”, *Stanford Encyclopedia of Philosophy* (Winter 2016 Edition), Edward N. Zalta (ed.), URL = <[https://plato.stanford.edu/entries/type-theory/](https://plato.stanford.edu/archives/win2016/entries/type-theory/)>.
* Coquand, T., and Spitters, B., 2009, “Integrals and Valuations”, *Journal of Logic and Analysis*, 1(3): 1–22.
* Coquand, T., Sambin, G., Smith, J., and Valentini, S., 2003, “Inductively generated formal topologies”, *Annals of Pure and Applied Logic*, 124: 71–106.
* Curi, G., 2010, “On the existence of Stone-Čech compactification”, *Journal of Symbolic Logic*, 75: 1137–1146.
* Dent, J.E., 2013, *Anti-Specker Properties in Constructive Reverse Mathematics*, Ph.D. thesis, University of Canterbury, Christchurch, New Zealand.
* Diaconescu, R., 1975, “Axiom of choice and complementation”, *Proceedings of the American Mathematical Society*, 51: 176–178.
* Diener, H., 2008, *Compactness under Constructive Scrutiny*, Ph.D. thesis, Christchurch, New Zealand: University of Canterbury.
* –––, 2008a, “Generalising compactness”, *Mathematical Logic Quarterly*, 51(1): 49–57.
* –––, 2012,“Reclassifying the antithesis of Specker’s theorem”, *Archive for Mathematical Logic*, 51: 687–693.
* Diener, H., and Loeb, I., 2009, “Sequences of Real Functions on [0, 1] in Constructive Reverse Mathematics”, *Annals of Pure and Applied Logic*, 157(1): 50–61.
* Diener, H., and Lubarsky, R., 2013, “Separating the fan theorem and its weakenings”, in *Logical Foundations of Computer Science* (Lecture Notes in Computer Science, 7734), S. Artemov and A. Nerode (eds.), Berlin: Springer Verlag.
* Dummett, Michael, 1977 [2000], *Elements of Intuitionism* (Oxford Logic Guides, 39), Oxford: Clarendon Press, 1977; 2nd edition, 2000. [Page references are to the 2nd edition.]
* Ewald, W., 1996, *From Kant to Hilbert: A Source Book in the Foundations of Mathematics* (Volume 2), Oxford: Clarendon Press.
* Feferman, S, 1975, “A language and axioms for explicit mathematics”, in *Algebra and Logit*, J. N. Crossley (ed.), Heidelberg: Springer Verlag, pp. 87–139.
* –––, 1979, “Constructive theories of functions and classes”, in *Logic Colloquium ‘78*, M. Boffa, D. van Dalen, and K. McAloon (eds.), Amsterdam: North Holland, pp. 159–224.
* Friedman, H., 1975, “Some systems of second order arithmetic and their use”, in *Proceedings of the 17th International Congress of Mathematicians*, Vancouver, BC, 1974.
* –––, 1977, “Set theoretic foundations for constructive analysis”, *Annals of Mathematics*, 105 (1): 1–28.
* Goodman, N.D., and Myhill, J., 1978, “Choice Implies Excluded Middle”, *Zeitschrift für Logik und Grundlagen der Mathematik*, 24: 461.
* Hayashi, S., and Nakano, H., 1988, *PX: A Computational Logic*, Cambridge MA: MIT Press.
* Hendtlass, M., 2013, *Constructing fixed points and economic equilibria*, Ph.D. thesis, University of Leeds.
* Heyting, A., 1930, “Die formalen Regeln der intuitionistischen Logik”, *Sitzungsberichte der Preussische Akadademie der Wissenschaften. Berlin*, 42–56.
* –––, 1971, *Intuitionism—an Introduction*, 3rd edition, Amsterdam: North Holland.
* Hilbert, D., 1925, “Über das Unendliche”, *Mathematische Annalen*, 95: 161–190; translation, “On the Infinite”, by E. Putnam and G. Massey, in *Philosophy of Mathematics: Selected Readings*, P. Benacerraf and H. Putnam (eds.), Englewood Cliffs, NJ: Prentice Hall, 1964, 134–151.
* Hurewicz, W., 1958, *Lectures on Ordinary Differential Equations*, Cambridge, MA: MIT Press.
* Ishihara, H., 1992, “Continuity properties in constructive mathematics”, *Journal of Symbolic Logic*, 57 (2): 557–565.
* –––, 1994, “A constructive version of Banach’s inverse mapping theorem”, *New Zealand Journal of Mathematics*, 23: 71–75.
* –––, 2005, “Constructive Reverse mathematics: compactness properties”, in *From Sets and Types to Analysis and Topology: Towards Practicable Foundations for Constructive Mathematics*, L. Crosilla and P. Schuster (eds.), Oxford: The Clarendon Press.
* –––, 2006, “Reverse mathematics in Bishop’s constructive mathematics”, *Philosophia Scientiae* (Cahier Special), 6: 43–59.
* –––, 2013, “Relating Bishop’s function spaces to neighbourhood spaces”, *Annals of Pure and Applied Logic*, 164: 482–490.
* Johnstone, P.T., 1982, *Stone Spaces*, Cambridge: Cambridge University Press.
* –––, 2003, “The point of pointless topology”, *Bulletin of the American Mathematical Society*, 8: 41–53.
* Joyal, A., and Tierney, M., 1984, “An extension of the Galois theory of Grothendieck”, *Memoirs of the American Mathematical Society*, 309: 85 pp.
* Julian, W.H., and Richman, F., 1984, “A uniformly continuous function on [0, 1] that is everywhere different from its infimum”, *Pacific Journal of Mathematics*, 111: 333–340.
* Kushner, B., 1985, *Lectures on Constructive Mathematical Analysis*, Providence, RI: American Mathematical Society.
* Lietz, P., 2004, *From Constructive Mathematics to Computable Analysis via the Realizability Interpretation*, Dr. rer. nat. dissertation, Universität Darmstadt, Germany.
* Lietz, P., and Streicher, T., “Realizability models refuting Ishihara’s boundedness principle”, *Annals of Pure and Applied Logic*, 163(12): 1803–1807.
* Loeb, I., 2005, “Equivalents of the (Weak) Fan Theorem”, *Annals of Pure and Applied Logic*, 132: 51–66.
* Lombardi, H., Quitté, C., 2011, *Algèbre Commutative. Méthodes constructives*, Nanterre, France: Calvage et Mounet.
* Lorenzen, P., 1955, *Einführung in die operative Logik und Mathematik* (Grundlehren der mathematischen Wissenschaften, Volume 78), 2nd edition, 1969, Heidelberg: Springer.
* Lubarsky, R., and Diener, H., 2014, “Separating the Fan Theorem and Its Weakenings”, *Journal of Symbolic Logic*, 79(3): 792–813.
* Markov, A.A., 1954, *Theory of Algorithms*, Trudy Mat. Istituta imeni V.A. Steklova, 42, Moskva: Izdatel’stvo Akademii Nauk SSSR.
* Marquis, J.-P., “Category Theory”, 2015, *The Stanford Encyclopedia of Philosophy* (Winter 2015 Edition), Edward N. Zalta (ed.), URL = <https://plato.stanford.edu/archives/win2015/entries/category-theory/>.
* Martin-Löf, P., 1968, *Notes on Constructive Analysis*, Stockholm: Almquist & Wiksell.
* –––, 1975, “An intuitionistic theory of types: predicative part”, in *Logic Colloquium 1973*, H.E. Rose and J.C. Shepherdson (eds.), Amsterdam: North-Holland.
* –––, 1980, “Constructive mathematics and computer programming”, in *Proc. 6th. Int. Congress for Logic, Methodology and Philosophy of Science*, L. Jonathan Cohen (ed.), Amsterdam: North-Holland.
* –––, 1984, *Intuitionistic Type Theory*, Notes by Giovanni Sambin of a series of lectures given in Padova, June 1980, Naples: Bibliopolis.
* –––, 2006, “100 years of Zermelo’s axiom of choice: what was the problem with it?”, *The Computer Journal*, 49(3): 345–350.
* Menger, K., 1940, “Topology without points”, *Rice Institute Pamphlet*, 27(1): 80–107 [[available online](https://scholarship.rice.edu/handle/1911/9052)].
* Mines, R., Richman, F., and Ruitenburg, W., 1988, *A Course in Constructive Algebra*, Universitext, Heidelberg: Springer Verlag.
* Moerdijk, I., 1984, “Heine-Borel does not imply the fan theorem”, *Journal of Symbolic Logic*, 49(2): 514–519.
* Moore, G.H., 2013, *Zermelo’s Axiom of Choice: Its Origins, Development, and Influence*, New York: Dover.
* Myhill, J., 1973, “Some Properties of Intuitionistic Zermelo-Fraenkel Set Theory”, in *Cambridge Summer School in Mathematical Logic*, A. Mathias and H. Rogers (eds.), Lecture Notes in Mathematics, 337, Heidelberg: Springer Verlag, 206–231.
* –––, 1975, “Constructive Set Theory”, *Journal of Symbolic Logic*, 40(3): 347–382.
* Naimpally, S., 2009, *Proximity Approach to Problems in Topology and Analysis*, Munich: Oldenbourg Verlag.
* Naimpally, S., and Warrack, B.D., 1970, *Proximity Spaces* (Cambridge Tracts in Math. and Math. Phys., Volume 59), Cambridge: Cambridge University Press.
* Nordström, B., Peterson, K., and Smith, J.M., 1990, “Programming in Martin-Löf’s Type Theory”, Oxford: Oxford University Press.
* Palmgren, E., 2007, “A constructive and functorial embedding of locally compact metric spaces into locales”, *Topology and its Applications*, 154: 1854–1880.
* –––, 2008, “Resolution of the uniform lower bound problem in constructive analysis”, *Mathematical Logic Quarterly*, 54: 65–69.
* –––, 2009, “From intuitionistic to formal topology: some remarks on the foundations of homotopy theory”, in: *Logicism, Intuitionism and Formalism—what has become of them?*, S. Lindström, E. Palmgren, K. Segerberg, and V. Stoltenberg-Hansen (eds.), 237–253, Berlin: Springer Verlag.
* Petrakis, I., 2016, “A constructive function-theoretic approach to topological compactness”, in *Logical Methods in Computer Science 2016*, IEEE Computer Society Publications: 605–614.
* –––, 2016a, “The Urysohn Extension Theorem for Bishop Spaces”, in S. Artemov and A. Nerode (eds.), *Symposium on Logical Foundations in Computer Science 2016* (Lecture Notes in Computer Science 9537), Berlin: Springer Verlag, 299–316.
* Picado, J., and Pultr, A., 2011, *Frames and Locales: Topology without Points*, Basel: Birkhäuser Verlag.
* Richman, F., 1983, “Church’s Thesis Without Tears”, *Journal of Symbolic Logic*, 48: 797–803.
* –––, 1990, “Intuitionism as generalization”, *Philosophia Mathematica*, 5: 124–128.
* –––, 1996, “Interview with a constructive mathematician”, *Modern Logic*, 6: 247–271.
* –––, 2000, “The Fundamental Theorem of Algebra: A Constructive Treatment Without Choice”, *Pacific Journal of Mathematics*, 196: 213–230.
* Riesz, F., 1908, “Stetigkeitsbegriff und abstrakte Mengenlehre”, *Atti IV Congresso Internationale Matematica Roma II*, 18–24.
* Sambin, G., 1987, “Intuitionistic formal spaces—a first communication”, in *Mathematical Logic and its Applications*, D. Skordev (ed.), 187–204, New York: Plenum Press.
* –––, forthcoming, *The Basic Picture: Structures for Constructive Topology*, Oxford: Oxford University Press.
* Sambin, G., and Smith, J. (eds.), 1998, *Twenty Five Years of Constructive Type Theory*, Oxford: Clarendon Press.
* Schuster, P.M., 2005, “What is continuity, constructively?”, *Journal of Universal Computer Science*, 11: 2076–2085
* –––, 2006, “Formal Zariski topology: positivity and points”, *Annals of Pure and Applied Logic*, 137: 317–359.
* Schwichtenberg, H., 2009, “Program extraction in constructive analysis”, in *Logicism, Intuitionism and Formalism—what has become of them?*, S. Lindström, E. Palmgren, K. Segerberg, and V. Stoltenberg-Hansen (eds.), Berlin: Springer Verlag, 255–275.
* Simpson, S.G., 1984, “Which set existence axioms are needed to prove the Cauchy/Peano theorem for ordinary differential equations”, *Journal of Symbolic Logic*, 49(3): 783–802.
* –––, 2009, *Subsystems of Second Order Arithmetic*, second edition, Cambridge: Cambridge University Press.
* Specker, E., 1949, “Nicht konstruktiv beweisbare Sätze der Analysis”, *Journal of Symbolic Logic*, 14: 145–158.
* Steinke, T.A., 2011, *Constructive Notions of Compactness in Apartness Spaces*, M.Sc. Thesis, University of Canterbury, Christchurch, New Zealand.
* Troelstra, A.S., 1978, “Aspects of Constructive Mathematics”, in *Handbook of Mathematical Logic*, J. Barwise (ed.), Amsterdam: North-Holland.
* Troelstra, A.S., and van Dalen, D., 1988, *Constructivism in Mathematics: An Introduction* (two volumes), Amsterdam: North Holland.
* van Atten, M., 2004, *On Brouwer*, Belmont: Wadsworth/Thomson Learning.
* van Dalen, D., 1981, *Brouwer’s Cambridge Lectures on Intuitionism*, Cambridge: Cambridge University Press.
* –––, 1999, *Mystic, Geometer and Intuitionist: The Life of L.E.J. Brouwer* (Volume 1), Oxford: Clarendon Press.
* –––, 2005, *Mystic, Geometer, and Intuitionist: The Life of L.E.J. Brouwer* (Volume 2), Oxford: Clarendon Press.
* van Stigt, W.P., 1990, *Brouwer’s Intuitionism*, Amsterdam: North-Holland.
* Vickers, S., 2005, “Localic completion of generalized metric spaces I”, *Theory and Applications of Categories*, 14(15): 328–356.
* Waaldijk, F., 2005, *On the foundations of constructive mathematics*, *Foundations of Science*, 10(3): 249–324.
* Wallman, H., 1938, “Lattices of topological spaces”, *Annals of Mathematics*, 39: 112–126.
* Weihrauch, K., 2000, *Computable Analysis* (EATCS Texts in Theoretical Computer Science), Heidelberg: Springer Verlag.
* Weyl, H., 1946, “Mathematics and Logic”, *American Mathematical Monthly*, 53(1): 2–13.
* Whitehead, A.N., 1919, *An Enquiry Concerning the Principles of Natural Knowledge*, Cambridge: Cambridge University Press, second edition, 1925.

### Related Literature

* Heijenoort, Jean van, 1967, *From Frege to Gödel: A Source Book in Mathematical Logic 1879–1931*, Cambridge, MA: Harvard University Press.
* Hilbert, David, 1928, “Die Grundlagen der Mathematik”, Hamburger Mathematische Einzelschriften 5, Teubner, Leipzig. Reprinted in English translation in van Heijenoort 1967.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=mathematics-constructive). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/mathematics-constructive/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=mathematics-constructive&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/mathematics-constructive/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* [The Agda Wiki](http://wiki.portal.chalmers.se/agda/pmwiki.php), a typed functional programming language and proof assistant, Göteborg University and Chalmers University of Technology.
* [Agda](https://en.wikipedia.org/wiki/Agda_(programming_language)), entry in Wikipedia.
* [The Coq Proof Assistant](https://coq.inria.fr/), Inria, 1984–2017.
* [Coq](https://en.wikipedia.org/wiki/Coq), entry in Wikipedia.
* [James Dent’s Diagram](https://docs.zoho.com/file/3rxha57eec879e68f420c810738a9e966f4e9).
* Aczel, P., and Rathjen, M., 2010, [*CST Book Draft*](http://www1.maths.leeds.ac.uk/~rathjen/book.pdf), draft of a book on constructive set theory.
* Bauer, A., 2005, “[Realizability as the connection between computable and constructive mathematics](http://math.andrej.com/2005/08/23/realizability-as-the-connection-between-computable-and-constructive-mathematics/)”.
* Veldman, W., 2014, “[Brouwer’s Fan Theorem as an Axiom and as a Contrast to Kleene’s Alternative](https://arxiv.org/abs/1106.2738)”, arxiv:1106.2738https://arxiv.org/abs/1106.2738.

## Related Entries

[Brouwer, Luitzen Egbertus Jan](https://plato.stanford.edu/entries/brouwer/) | [logic, history of: intuitionistic logic](https://plato.stanford.edu/entries/intuitionistic-logic-development/) | [logic: intuitionistic](https://plato.stanford.edu/entries/logic-intuitionistic/) | [mathematics, philosophy of](https://plato.stanford.edu/entries/philosophy-mathematics/) | [mathematics, philosophy of: intuitionism](https://plato.stanford.edu/entries/intuitionism/) | [set theory: constructive and intuitionistic ZF](https://plato.stanford.edu/entries/set-theory-constructive/) | [type theory: intuitionistic](https://plato.stanford.edu/entries/type-theory-intuitionistic/)

### Acknowledgments

Bridges thanks Philip Catton for kindly advising him about an early version of this entry; Fred Richman, the late Ray Mines, Bill Julian, Hajime Ishihara, Helmut Schwichtenberg, and Peter Schuster, for decades of friendship, mathematical collaboration, and support during visits to their institutions; Luminita Vîţă, Hannes Diener, Matt Hendtlass, Maarten McKubre-Jordens, Josef Berger, Iris Loeb, and many other students, postdocs, and colleagues, for their participation in the constructive programme; the University of Buckingham, England, for giving him opportunity and encouragement at the start of his academic career; and the Universities of Waikato and Canterbury, for supporting him in New Zealand since 1989. Last, but not least, he thanks Hajime Ishihara for stepping into the authorial breach made by the untimely death of Erik Palmgren.

[Copyright © 2022](https://plato.stanford.edu/info.html#c) by  
[Douglas Bridges](http://www.math.canterbury.ac.nz/~mathdsb/) <[*dugbridges@gmail.com*](mailto:dugbridges%40gmail%2ecom)>  
[Erik Palmgren](http://staff.math.su.se/palmgren/)  
Hajime Ishihara <[*ishihara@jaist.ac.jp*](mailto:ishihara%40jaist%2eac%2ejp)>
