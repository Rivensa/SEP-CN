# 可计算性与复杂度 computability and complexity (Neil Immerman)

*首次发表于 2004 年 6 月 24 日星期四；实质性修订于 2021 年 10 月 18 日星期一*

一个数学问题如果原则上可以通过计算设备解决，则称为可计算的。一些常见的“可计算”的同义词包括“可解的”、“可判定的”和“递归的”。希尔伯特认为所有数学问题都是可解的，但在 20 世纪 30 年代，哥德尔、图灵和丘奇表明这并非如此。对于哪些数学问题是可计算的，哪些不是，进行了广泛的研究和分类。此外，根据问题实例规模的计算量，对可计算问题进行了广泛的分类，以确定需要多少计算才能回答该实例。这些分类的清晰、优雅和精确程度令人印象深刻。

---

## 什么原则上可以计算？简介与历史

在 20 世纪 30 年代，在计算机出现之前，来自世界各地的各种数学家发明了关于可计算性的精确、独立的定义。阿隆佐·邱奇定义了 Lambda 演算，库尔特·哥德尔定义了递归函数，史蒂芬·克利尼定义了形式系统，马尔科夫定义了后来被称为马尔可夫算法的东西，埃米尔·波斯特和艾伦·图灵定义了现在被称为波斯特机和图灵机的抽象机器。

令人惊讶的是，所有这些模型都是完全等价的：在 λ 演算中可计算的任何东西都可以通过图灵机来计算，对于上述计算系统的任何其他配对也是如此。在证明了这一点之后，邱奇表达了这样一种信念，即“原则上可计算”的直观概念与上述精确概念是相同的。这种信念现在被称为“邱奇-图灵论题”，被数学家们普遍接受。

可计算性与复杂度 的部分动力来自数学家 David Hilbert。Hilbert 认为所有数学都可以被精确地公理化。一旦这样做了，就会有一个“有效过程”，即一个算法，它将以任何精确数学陈述作为输入，并在有限步骤之后决定该陈述是真还是假。Hilbert 正在寻求现在被称为数学的决策过程。

作为这个决策问题的一个特例，希尔伯特考虑了一阶逻辑的有效性问题。一阶逻辑是一个数学语言，其中大多数数学陈述都可以被表达。一阶逻辑中的每个陈述在每个适当的逻辑结构中都有明确的含义，即在每个这样的结构中都是真或假的。那些在每个适当的结构中都为真的陈述被称为有效的。那些在某些结构中为真的陈述被称为可满足的。注意，一个公式 φ 是有效的当且仅当它的否定 ¬φ 是不可满足的。

希尔伯特称一阶逻辑的有效性问题为“决策问题”。在希尔伯特和阿克曼合著的《数理逻辑原理》教材中，作者写道：“当我们知道一种程序，允许通过有限次操作来决定任何给定的逻辑表达式的有效性或可满足性时，决策问题就被解决了。... 决策问题必须被视为数理逻辑的主要问题。”（Böerger, Grädel, & Gurevich 1997）。

在他 1930 年的博士论文中，哥德尔（Gödel 1930）基于怀特海德和罗素的《数学原理》（Principia Mathematica），提出了一阶逻辑的完备公理化。哥德尔证明了他的完备性定理，即一个公式仅当它是有效的时才能从公理中证明出来。哥德尔的完备性定理是解决希尔伯特判定问题的一步。

特别是，由于公理很容易识别，推理规则非常简单，因此存在一种机械过程可以列出所有的证明。请注意，证明中的每一行要么是一个公理，要么是根据简单规则从前面的行推导出来的。对于任何给定的字符串，我们可以判断它是否是一个证明。因此，我们可以系统地列出所有长度为 1、2、3 等的字符串，并检查其中的每一个是否是一个证明。如果是，那么我们可以将证明的最后一行添加到我们的定理列表中。通过这种方式，我们可以列出所有定理，即一阶逻辑的所有有效公式，可以通过一个简单的机械过程列出。更准确地说，有效公式的集合是一个可计算函数的值域。用现代术语来说，我们说一阶逻辑的有效公式集是递归可枚举的（r.e.）。

哥德尔的完备性定理并不足以给出对决策问题的积极解决方案。给定一个公式 φ，如果 φ 是有效的，那么上述过程最终会将其列出，从而可以回答：“是的，φ 是有效的。”然而，如果 φ 无效，那么我们可能永远也找不到这个事实。缺失的是一种列出所有非有效公式的过程，或者等效地列出所有可满足公式的过程。

一年后，1931 年，哥德尔通过证明他的不完备定理震惊了数学界：自然数的一阶理论没有完备且可计算的公理化。也就是说，没有一个合理的公理列表，我们可以从中准确证明所有关于数论的真实陈述（哥德尔，1931 年）。

几年后，Church 和 Turing 独立证明了 Entscheidungsproblem 问题是不可解的。Church 通过使用 Gödel 的不完备性定理的方法来证明一阶逻辑可满足公式集合不是可识别的，即它们不能被 λ 演算可计算的函数系统地列出。Turing 引入了他的机器，并证明了许多有趣的定理，其中一些我们将在下一节中讨论。特别是，他证明了停机问题的不可解性。他得到了 Entscheidungsproblem 问题不可解的推论。

希尔伯特感到非常失望，因为他针对数学的决策程序被证明是不可能的。然而，正如我们将在本文的其余部分中看到的那样，关于计算的基本性质已经学到了大量知识。

## 2. 图灵机

在他 1936 年的论文《论可计算数及其在决策问题中的应用》中，Alan Turing 介绍了他的机器并建立了它们的基本属性。

他清晰而抽象地思考了机器执行计算任务意味着什么。 图灵定义他的机器包括以下内容：

* 一个有限集合 Q，可能的状态，因为任何设备必须处于有限多个可能的状态之一;
* 一个潜在的无限纸带，由连续的单元格 σ1，σ2，σ3 组成，来自某个有限字母表 Σ;
  (Σ 可以是包含至少两个符号的任意有限集合。将 Σ={0,1,b}固定为包括二进制字母表和空白单元符号的集合是方便的。我们通常假设磁带的有限初始段包含二进制符号，其余部分为空白。)
* 一个读/写磁头，h≥1，扫描磁带单元 σh；最后，
* 一个转移函数，δ：Q×Σ→Q×Σ×{−1,0,1}。
  过渡函数的含义是，从任何给定状态 q，查看任何给定符号 σh，δ 告诉我们机器应该进入的新状态，应该写入当前方格的新符号，以及新的头部位置，h′=h+d，其中 d∈{−1,0,1}是 δ 给出的位移。

其存储带的线性特性，与随机存取存储器相反，限制了计算速度但并非计算能力：图灵机可以找到任何存储位置，即磁带单元，但这可能是耗时的，因为它必须逐步沿着磁带移动其读写头。

图灵机的美妙之处在于该模型极其简单，但却极其强大。图灵机具有潜在的无限工作空间，因此可以处理任意大的输入，例如，计算两个巨大数字的乘积，但它每步只能读取或写入有限数量的信息，即一个符号。即使在图灵机和所有其他数学计算模型被证明等价之前，以及在任何关于教会-图灵论题的陈述之前，图灵有力地论证了他的机器与任何可能的计算设备一样强大。

### 2.1 通用机器

每台图灵机都可以通过其转移表进行唯一描述：对于每个状态 q 和每个符号 σ，δ(q,σ) 是新状态、新符号和头部位移。这些转移表可以写成一串有限的符号，给出每台图灵机的完整指令集。此外，这些符号串可以按词典顺序列出如下：M1，M2，M3，…，其中 Mi 是转移表，即第 i 台图灵机的完整指令集。对于 Mi 的转移表是第 i 台图灵机的程序，或更简单地说，第 i 个程序。

图灵表明他可以构建一个图灵机 U，它是通用的，即它可以运行任何其他图灵机的程序。更明确地说，对于任何 i 和任何输入 w，U 在输入 i 和 w 上所做的事情将与 Mi 在输入 w 上所做的事情完全相同，用符号表示，

U(i,w)=Mi(w)

图灵构建的通用机器为计算提供了最基本的洞察力：一台机器可以运行任何程序。无论将来我们需要执行什么计算任务，一台机器都可以完成。这一洞察力使得建造和销售计算机成为可能。一台计算机可以运行任何程序。我们不需要每次遇到新问题就购买一台新计算机。当然，在个人计算机时代，这一事实是如此基本的假设，以至于可能很难退后一步去欣赏它。

### 2.2 停机问题

由于它们被设计为体现所有可能的计算，图灵机有一个无法摆脱的缺陷：某些输入上的某些图灵机永远不会停机。有些图灵机由于愚蠢的原因而不会停机，例如，我们可以误设一个图灵机，使其陷入一个紧密循环，例如，在状态 17 时看到一个 1，它可能会转移到状态 17，写入一个 1，并将其头部移动 0。稍微不那么愚蠢的是，我们可以到达一个空白符号，只有右侧是空白符号，但仍然保持在相同的状态，向右移动一步，并寻找“1”。这两种不会停机的情况可以很容易地被一个良好的编译器检测和修复。然而，考虑图灵机 MF，它在输入“0”时系统地搜索费马大定理的第一个反例，并在找到后输出反例并停机。直到安德鲁·怀尔斯最近证明了费马大定理，全世界的数学家们，历经三个多世纪的努力，都无法确定 MF 在输入“0”时是否最终会停机。现在我们知道它永远不会停机。

### 2.3 可计算函数与可枚举性

由于图灵机在某些输入上可能不会停机，我们在定义图灵机可计算函数时必须小心谨慎。让自然数 N 为集合{0,1,2,...}，并且将图灵机视为从 N 到 N 的部分函数。

设 M 是一台图灵机，n 是一个自然数。如果 M 的纸带以数字 n 的二进制表示开始（没有不必要的前导 0），然后后面只有空白符号，我们说 M 的纸带包含数字 n。

如果我们在包含 n 的纸带上启动图灵机 M，并最终使其在包含 m 的纸带上停机，那么我们说 M 在输入 n 时计算 m：M(n)=m。如果当我们在输入 n 时启动 M 时，它要么永远不会停机，要么在停机时，其纸带不包含自然数，例如，因为它有前导 0，或者数字与空白符号交错，那么我们说 M(n)未定义，即符号为：M(n)=↗。因此，我们可以将每个图灵机 M 关联到一个偏函数 M:N→N∪{↗}。我们说函数 M 是全定义的，如果对于所有 n∈N，M(n)∈N，即 M(n)总是被定义的。

现在我们可以正式定义集合被递归可枚举（r.e.）的含义，这是我们之前非正式描述过的。设 S⊆N。那么当且仅当存在某个图灵机 M，使得 S 是 M 计算的函数的像时，S 是 r.e.。

 S={M(n)∣n∈N; M(n)≠↗}. S={M(n)∣n∈N; M(n)≠↗}.

因此，S 是 r.e. 当且仅当它可以被某台图灵机列出。假设 S 是 r.e. 并且它的元素如上所述被图灵机 M 枚举。我们可以描述另一台图灵机 P，对于输入 n，以循环赛的方式在所有可能的输入上运行 M，直到最终 M 输出 n。如果这种情况发生，那么 P 将停机并输出“1”，即 P(n)=1。如果 n∉S，则 M 永远不会输出 n，因此 P(n) 永远不会停机，即 P(n)=↗。

让符号 P(n)↓ 表示图灵机 P 在输入 n 上最终停机。对于图灵机 P，定义 L(P) 为 P 接受的集合，即那些使得 P 在输入 n 上最终停机的数字 n。

 L(P)={n∣P(n)↓}. 可计算性与复杂度。

上述论点表明，如果一个集合 S 是可列的，那么它被某个图灵机 P 接受，即 S=L(P)。这个陈述的逆命题也成立。也就是说，S 是可列的当且仅当它被某个图灵机 P 接受。

我们说一个集合 S 是可判定的，当且仅当存在一个全图灵机 M，对于所有 n∈N，决定 n∈S 还是 n∉S。将“1”看作“是”，将“0”看作“否”。对于所有 n∈N，如果 n∈S，则 M(n)=1，即 M 在输入 n 后最终停机并输出“是”，而如果 n∉S，则 M(n)=0，即 M 在输入 n 后最终停机并输出“否”。可判定的同义词有：可计算的，可解的，和递归的。

对于 S⊆N，S 的补集是 N−S，即所有不在 S 中的自然数的集合。我们说集合 S 是 co-r.e.，当且仅当它的补集是 r.e.。如果一个集合 S 是 r.e.和 co-r.e.，那么我们可以将其所有元素列在一列中，将其所有非元素列在第二列中。通过这种方式，我们可以确定给定元素 n 是否在 S 中：只需扫描这两列并等待 n 出现。如果它出现在第一列中，则 n∈S。否则它将出现在第二列中，n∉S。事实上，一个集合是递归的当且仅当它是 r.e.和 co-r.e.。

### 2.4 停机问题的不可解性

图灵问道每个自然数集是否可决定。通过以下计数论证很容易看出答案是否定的。自然数集 N 的子集有不可数多个，但由于图灵机只有可数多个，可决定集只能是可数多个。因此，几乎所有集合都是不可决定的。

Turing 实际上构造了一个不可判定的集合。正如我们将看到的，他是使用对角线论证来做到这一点的。对角线论证可以追溯到 Georg Cantor，他用它来展示实数是不可数的。Gödel 在他的不完备性定理证明中使用了类似的对角线论证，他构造了一个句子 J，在数论中其含义可以理解为，“J 不是一个定理”。

图灵构造了一个对角线停机集 K，如下所示：

 K={n∣Mn(n)↓}. K={n∣Mn(n)↓}.

也就是说，K 包括那些在输入自己的程序时最终会停机的图灵机。

很容易看出，K 是可识别的。假设为了推导矛盾，K 也是可识别的，让 d 是一个接受 K 补集的图灵机的编号。也就是说，对于任意 n，

 n∉K⇔Md(n)↓ n∉K⇔Md(n)↓

但是考虑当我们在上述方程中用 d 替换 n 时会发生什么：

 d∉K⇔Md(d)↓. d∉K⇔Md(d)↓.

然而，K 的定义告诉我们：

 d∈K⇔Md(d)↓. d∈K ⇔ Md(d)↓.

因此我们得到

d∈K⇔d∉K,

这是一个矛盾。因此，我们假设 K 是共递归的是错误的。因此 K 不是递归的。由此可知，对于给定一个图灵机及其输入，并决定该图灵机是否最终会在该输入上停机，即停机问题是不可解的。

## 3. Primitive Recursive Functions 3. 原始递归函数

我们接下来定义原始递归函数类。这是一类非常有趣的函数，由 Skolem（1923）在一篇论文中描述，并被 Gödel 在他证明不完备定理中使用。我们感兴趣的是从 Nr 到 N 的函数 f，其中 r=0,1,2,…。这里 r 被称为函数 f 的 arity，即它所接受的参数数量。Gödel 从三个非常简单的函数开始，即初始函数，以及两个自然的闭包操作，即复合和原始递归，每个操作都使用一些已定义的函数来定义一个新函数。接下来我们详细解释他的定义。这一部分内容较为技术性，可以安全地跳过。重要的观点是原始递归函数构成了一个非常庞大且强大的可计算函数类，所有这些函数都是以极其简单的方式生成的。

我们从三个初始原始递归函数开始：

* ζ，零元数的零函数，ζ( ) = 0;
* η，arity 1 的恒等函数，η(n)=n；
* σ，具有 1 个参数的后继函数，σ(n)=n+1。

现在考虑以下两个操作：

* 如果 f 是一个具有 a 个元的原始递归函数，g1,…,ga 是具有 r1,…,ra 个元的原始递归函数，并且 k∈N，则以下是一个具有 k 个元的原始递归函数：h(x1,…,xk)=f(g1(w1),…,ga(wa))
  其中每个 wi 都是来自 x1,…,xk 的 ri 个参数的列表，可能会有重复；并且，
* 原始递归：如果 f 和 g 是分别具有 k 和 k+2 个元的原始递归函数，则存在一个原始递归函数 h，其元为 k+1，满足以下条件：h(0,x1,…,xk)=f(x1,…,xk)；以及 h(n+1,x1,…,xk)=g(h(n,x1,…,xk),n,x1,…,xk)。

这里的合成是组合函数的自然方式，原始递归是一种受限的递归形式，其中具有第一个参数 n+1 的 h 是根据具有第一个参数 n 的 h 来定义的，而所有其他参数保持不变。

定义原始递归函数为包含初始函数并在复合和原始递归下封闭的最小函数类。原始递归函数集合等于使用有界迭代计算的函数集合（Meyer & Ritchie 1967），即语言 Bloop 中可定义的函数集合（Hofstadter 1979）。

原始递归函数有一个非常简单的定义，但它们却非常强大。哥德尔通过归纳证明，每个原始递归函数都可以简单地在一阶数论中表示。然后，他使用原始递归函数通过数字对公式甚至公式序列进行编码。最后，他使用原始递归函数计算所表示公式的性质，包括公式是否良构以及公式序列是否构成证明。

需要一长串引理来展示原始递归函数有多强大。以下是一些示例，显示加法、乘法和指数运算都是原始递归的。

定义加法函数 P(x, y)如下：

P(0,y)=η(y)P(n+1,y)=σ(P(n,y))

（注意，这符合原始递归的定义，因为函数 g(x1,x2,x3)=η(σ(x1)) 可以通过初始函数 η 和 σ 的组合来定义。）

接下来，定义乘法函数 T(x,y)，如下所示：

T(0,y)=ζ( )T(n+1,y)=P(T(n,y),y). T(0,y)=ζ( )T(n+1,y)=P(T(n,y),y).

接下来，我们定义指数函数，E(x,y)。（通常 00 被视为未定义，但由于原始递归函数必须是全局的，我们定义 E(0,0)为 1。）由于原始递归只允许我们在第一个参数上递归，我们使用两个步骤来定义指数函数。

R(0,y)=σ(ζ( ))R(n+1,y)=T(R(n,y),y). R(0,y)=σ(ζ( ))R(n+1,y)=T(R(n,y),y). R(0,y)=σ(ζ( ))R(n+1,y)=T(R(n,y),y).

最后，我们可以通过组合来定义 E(x,y)=R(η(y),η(x))。 (Recall that η is the identity function so this could be more simply written as E(x,y)=R(y,x).)

指数函数 E 增长非常迅速，例如，E(10,10)是一百亿，而 E(50,50)超过了 1084（因此远远超过了宇宙中估计的原子数量）。然而，存在增长更快的原始递归函数。正如我们所看到的，E 是从增长缓慢的函数 σ 定义的，使用三次原始递归：一次用于加法，一次用于乘法，然后再一次用于指数运算。我们可以继续应用原始递归来构建一系列难以想象的快速增长函数。让我们在定义超指数函数 H(n,m)的系列中再做一步，其中 2 的 2 的 2 的...的 m 次方，有 n 个 2 的塔。H 是原始递归的，因为它可以从 E 中使用一次原始递归的应用来定义。

H(0,y)=y H(n+1,y)=E(2,H(n,y))

因此，H(2,2)=24=16，H(3,3)=2256 超过 1077，并且与宇宙中的原子数量相当。如果这对您来说还不够大，那么考虑 H(4,4)。要用十进制表示这个数字，我们需要一个一，后面跟着比宇宙中的粒子数量还多的零。

### 3.1 递归函数

原始递归函数集是一个庞大的可计算函数类。实际上，它们可以被描述为在某个与输入长度 n 的原始递归函数有关的时间内可计算的函数集。例如，由于 H(n,n)是一个原始递归函数，原始递归函数包括所有 TIME [H(n,n)] 中的函数。（有关计算复杂性，包括 TIME，请参见下一节。）因此，原始递归函数包括所有通过任何可行的可行度量方式可行计算的函数，远远超出这个范围。

然而，原始递归函数并不包括原则上可计算的所有函数。为了看到这一点，我们可以再次使用对角线化。我们可以系统地对所有一元原始递归函数的定义进行编码，称它们为 p1、p2、p3 等等。

我们可以构建一个图灵机来计算以下对角函数的值，D(n)=pn(n)+1。

注意到 D 是从 N 到 N 的一个全函数，但它不是原始递归的。为什么？假设为了矛盾， D 是原始递归的。那么 D 将等于某个 d∈N 的 pd。但接着就会得出结论说

pd(d)=pd(d)+1,

这是一个矛盾。因此，D 不是原始递归的。

哎呀，上述对角线论证适用于任何一类可以被视为所有可计算函数类候选的全函数。唯一的方法是，如果我们希望原则上所有函数都是可计算的，而不仅仅是在实践中，就需要添加某种无界搜索操作。这就是哥德尔为了将原始递归函数扩展为递归函数所做的事情。

定义无界最小化运算符 μ 如下。设 f 是一个可能是 k+1 元的部分函数。那么 μ [f] 被定义为以下的 k 元函数。对于输入 x1,…,xk，执行以下操作：

 对于 i 从 0 到 ∞，执行{

如果 f(i, x1, ..., xk) = 1，则输出 i

}

因此，如果 f(i,x1,…,xk)=1，并且对于所有 j<i，f(j,x1,…,xk) 被定义，但不等于 1，则 μ f=i。否则 μ f 未定义。

哥德尔定义了递归函数集合为初始原始递归函数在复合、原始递归和 μ 下的闭包。根据这个定义，递归函数恰好与 λ 演算、克里尼形式系统、马尔可夫算法、波斯特机以及图灵机可计算的部分函数集合完全相同。

## 4. Computational Complexity: Functions Computable in Practice 4. 计算复杂性：实践中可计算的函数

在二战期间，图灵帮助设计并建造了一种名为“Bombe”的专用计算设备，位于布莱切利园。他利用 Bombe 破译了德国的“恩尼格玛”密码，极大地帮助了盟军事业 [Hodges, 1992]。到了 20 世纪 60 年代，计算机在工业和大学中广泛普及。随着算法的发展解决了各种问题，一些数学家和科学家开始根据效率对算法进行分类，并寻找某些问题的最佳算法。这标志着现代计算理论的开端。

在这一部分，我们处理的是复杂度而不是可计算性，我们考虑的所有图灵机都会在所有输入上停机。与其通过停机来接受，我们假设图灵机通过输出“1”来接受，通过输出“0”来拒绝，因此我们重新定义了由总机器 M 接受的集合。

 L(M)={n∣M(n)=1}. 可计算性与复杂度。

算法所需的时间取决于输入和运行该算法的计算机。复杂性理论中的第一个重要见解是，算法复杂性的一个很好的度量是其作为输入规模函数的渐近最坏情况复杂性。

对于一个输入 w，令 n=|w|为 w 的长度。根据 [Hartmanis, 1989]，如果对于所有长度为 n 的 w，图灵机 M 在 T(n)时间内运行，即 M(w)最多经过 T(n)步骤然后停机，我们称之为图灵机 M 在时间 T(n)内运行。这被称为最坏情况复杂度，因为 T(n)必须至少与任何长度为 n 的输入所花费的时间一样长。

对于任意函数 T:N→N，让

时间 [T(n)] = {A∣A=L(M) 对于某个在时间 T(n)内运行的 M}.

Alan Cobham 和 Jack Edmonds 确定了复杂度类 P，即在多项式时间内可识别的问题，作为可行问题类的出色数学封套，即那些所有中等规模实例都可以被可行识别的问题类

P=⋃i=1,2,…TIME [ni]

任何不在 P 中的问题肯定是不可行的。另一方面，在 P 中有算法的自然问题往往最终会有实际可行的算法被发现。

除了 P 之外，还定义和研究了许多重要的复杂性类，其中一些是 NP、PSPACE 和 EXPTIME。PSPACE 包括那些可以使用多项式量的内存空间解决的问题。EXPTIME 是在某个多项式 p 的时间 2^p(n)内可解决的问题集合。

也许以上类别中最有趣的是 NP：非确定性多项式时间。该定义并非来自真实机器，而是来自数学抽象。一个非确定性图灵机 N，在每一步都会做出两种可能行动中的一种选择（猜测）。如果在输入 w 上，这些选择的某个序列导致接受，那么我们说 N 接受 w，并且我们说 N 在输入 w 上所花费的非确定性时间，就是导致接受的序列中所花费的步数。非确定性机器不会因为它可能做出的所有其他可能选择而受到惩罚，只计算正确选择的单个序列。

NP 有时被描述为具有成员短证明的问题集合 S。例如，假设我们有一个包含 m 个大自然数的列表：a1,…,am，以及一个目标数 t。这是子集和问题的一个实例：是否存在一个数字 m 的子集，其总和恰好为 t？这个问题在非确定性线性时间内很容易解决：对于每个 i，我们猜测是否取 ai。接下来，我们将决定取的所有数字相加，如果总和等于 t，则接受。因此，非确定性时间是线性的，即输入 n 的长度的某个常数倍。然而，目前没有已知的（确定性）方法可以在小于指数时间内解决这个问题。

### 4.1 减少和完备性

对算法和许多重要问题的复杂性进行了大量研究，我们对此有很好的理解。特别是，已经定义了问题之间的归约，并用于比较两个问题的相对难度。直观地，我们说 A 可归约于 B（A≤B），如果存在一个易于计算的转换 τ，将 A 的实例映射到 B 的实例，这种映射方式保持成员资格，即 τ(w) ∈B⇔ w ∈A。

值得注意的是，自然发生的计算问题中有很高比例的问题被证明是上述类别中的一个完全问题。（一个问题 A 对于一个复杂度类 C 是完全的，如果 A 是 C 的成员，并且所有其他问题 B 在 C 中都不比 A 更难，即 B≤A。对于同一类别的两个完全问题具有等价的复杂度。）

这种完备性现象的原因尚未得到充分解释。一个合理的解释是，自然计算问题往往在图灵的通用机器意义上是普遍的。在某个复杂度类中的一个通用问题可以模拟该类中的任何其他问题。

1971 年，Cook 证明了 SAT 是 NP 完全问题 [Cook, 1971]。不久之后，Karp 展示了许多重要的组合问题也是 NP 完全的，从而确立了 NP 类的重要性 [Karp, 1972]。

我们上面对归约的定义缺乏精确性，只是说映射 τ 必须是易于计算的。卡普使用的归约是多项式时间归约，即 τ 在多项式时间内是可计算的。从那时起，许多研究人员观察到，在包括 logspace 归约 [Jones, 1973]、一阶归约 [Immerman, 1999]、投影 [Valiant, 1982] 和一阶投影 [Immerman, 1999] 在内的意外弱归约下，自然问题仍然对于自然复杂度类是完全的。

除了极少数例外情况外，当一个自然问题属于 NP 时，结果要么是 NP 完全的，要么是 P 的。人们想知道这是否总是如此。Ladner 证明了如果 P ≠ NP，那么存在一个中间问题 I，它属于 NP 但不属于 P，也不是 NP 完全的 [Ladner, 1975]。

Ladner 的证明方法被称为延迟对角化。他将他的结果推广到表明对于任意两个良好行为的复杂度类 C、E，使得 C 严格包含于 E，存在一个中间类 D，使得 C 严格包含于 D 且 D 严格包含于 E。因此，复杂度类的排序是密集的。

然而，这些中间问题往往不会出现。最近，费德尔和瓦尔迪（Feder and Vardi, 1999）提出的二分猜想引起了广泛关注。舍弗（Schaefer, 1978）在一篇富有洞察力的论文中介绍了这项工作，他研究了布尔可满足性问题的所有变体。他证明了每个这样的问题要么是 NP 完全的，要么在 P 中，因此拉德纳的中间问题不会出现在这些可满足性问题中。由于只有这两种可能性，舍弗称之为二分法。

实际上，如果我们仔细观察，所有 Schaefer 的可满足性问题要么是 NP 完全的，要么是 P 完全的，⊕L 完全的，NL 完全的，L 完全的，或者是平凡的 [Allender 等人，2009]。也就是说，在 P 中的非平凡问题可能是 P 完全的，或者是这三个 P 内的复杂度类之一的完全问题。换句话说，如果我们仔细观察，NP/P 二分现象实际上是一个“多分裂”现象，也就是说，所有非平凡的可满足性问题都是五个众所周知的复杂度类中的一个完全问题。

Feder 和 Vardi 研究了 Schaefer 的二分法，并猜想它适用于所有有限域约束满足问题（CSP）[Feder 和 Vardi，1999]。 有限域 CSP C 包括有限域 D 和有限关系 R1,…,Rk 的有限集。 C 的一个实例包括一组变量 v1,…vn 和原子的合取 φ≡⋀Ri(vj1,…)。 实例 φ 的答案是“是”，即 φ∈C 当且仅当存在将变量分配给域 D 中的元素的分配，使得 φ 被满足。

对于大小为 2 的域，CSP 问题只是一个可满足性问题，因此 Schaefer 的定理已经为这种情况建立了 Feder 和 Vardi 的猜想。一个具有域大小为 3 的 CSP 的简单实例是无向图的 3COLOR 问题。给定这样一个图 G，能否将 G 的顶点涂上三种颜色，使得相邻的两个顶点颜色不同？为了将其写成 CSP 问题，让 D={R,Y,B}成为三种不同颜色的集合，让关系 N 成为 D 上的不相等关系。然后从 G=(V,E)得到 3COLOR 的实例 φG=⋀(u,v)∈EN(u,v)。注意 φG 表示，每当在 G 中存在连接顶点 u 和 v 的边时，u 和 v 被分配不同的颜色。

Feder 和 Vardi 的猜想导致了一个非常富有成效的研究项目。特别是，从 [Jeavons 等人，1997] 开始，一系列关于 CSPs 的丰富的代数理论在多篇论文中得到了发展；参见 [Bulatov，2018] 进行概述。最终，通过应用和推进这一代数理论，Bulatov 和 Zhuk 独立地证明了 Feder 和 Vardi 的猜想 [Bulatov，2017；Zhuk，2017]。

### 4.2 复杂度的重要性

类 NP 得到如此广泛研究的原因是许多重要的实际问题都是 NP 完全问题，包括子集和问题。目前尚不知道这些问题中是否存在比指数时间更快的算法，尽管一些 NP 完全问题可以接受其解的可行近似解。

关于计算复杂性仍有许多问题尚未解决。我们知道，更多特定的计算资源严格意义上让我们能够解决更加困难的问题，例如，TIME [n] 严格包含于 TIME [n1.01]，类似的情况也适用于 SPACE 和其他度量标准。然而，不同计算资源之间的权衡仍然理解得很不透彻。显然，P 包含于 NP。此外，NP 包含于 PSPACE，因为在 PSPACE 中，我们可以系统地尝试 NP 计算的每一个分支，重复利用空间来处理后续的分支，并在任何一个分支导致接受时接受。PSPACE 包含于 EXPTIME，因为如果一个 PSPACE 机器花费超过指数时间，那么它必定精确地重复了某个配置，因此必定陷入无限循环。以下是上述类别之间已知的关系：

 P⊆NP⊆PSPACE⊆EXPTIME --> P⊆NP⊆PSPACE⊆EXPTIME

然而，尽管看起来很明显 P 严格包含于 NP， NP 严格包含于 PSPACE，以及 PSPACE 严格包含于 EXPTIME，但这些不等式都没有被证明。事实上，甚至不知道 P 是否与 PSPACE 不同，也不知道 NP 是否与 EXPTIME 不同。从上述已知的唯一适当包含是 P 严格包含于 EXPTIME。关于不同计算资源相对能力的剩余问题是计算理论中的基本未解问题。

下图展示了我们讨论过的所有复杂性类别以及一些其他类别。这个图表源自描述性复杂性的研究 [Immerman, 1999]，显示了所有重要的复杂性类别都有描述性特征。Fagin 通过证明 NP = SO∃ 开创了这一领域，即一个属性在 NP 中当且仅当它可以用二阶存在逻辑表达 [Fagin, 1974]。

Vardi 和本条目的作者后来独立证明了 P = FO(LFP)：一个性质在 P 中当且仅当它可以用一阶逻辑加上一个最小不动点算子(LFP)来表达，该算子形式化了通过归纳定义新关系的能力。这一引人入胜的推论是，P = NP 当且仅当 SO = FO(LFP)。也就是说，P 等于 NP 当且仅当在二阶逻辑中可表达的每个性质已经可以在一阶逻辑加上归纳定义中表达。（所涉及的语言是在有限有序输入结构上。有关详细信息，请参见 [Immerman, 1999]。)

![descriptiveWorld](https://plato.stanford.edu/entries/computability/descriptiveWorld2015.jpg)

可计算性与复杂度的世界

图表的右上角显示了可递归枚举（r.e.）问题；这包括 r.e.-完全问题，如停机问题（Halt）。左边是对偶可递归问题的集合，包括对偶可递归-完全问题 ¯¯¯¯¯¯¯¯¯¯¯Halt -- 在给定输入上永远不会停机的图灵机集合。我们在第 2.3 节末尾提到，可递归问题集合与对偶可递归问题集合的交集等于递归问题集合。原始递归问题集合是递归问题集合的严格子集。

沿着图表向下移动，有一个用绿色虚线标记的区域，标注为“真正可行”。请注意，这不是一个数学上定义的类别，而是一个直觉概念，即那些问题可以在合理大小的所有实例中精确解决，而且可以在我们负担得起的计算机上在合理的时间内解决。(有趣的是，随着多年来计算机速度的显著增加，我们对应该能处理多大实例的期望也相应增加。因此，“真正可行”的边界变化速度比计算机速度增长可能暗示的要慢。)

如前所述，P 是可行问题集合的良好数学封装。在 P 中有一些问题需要对大小为 n 的问题花费 n^1,000 的时间，因此是不可行的。自然似乎是我们的朋友，在 P 中自然发生的问题更倾向于相对简单的算法，并且“自然”问题往往是可行的。对于大小为 n 的问题所需的步骤数往往小于 cn^k，其中 c 是小的乘法常数，k 是非常小的指数，即 k≤2。

在实践中，自然发生问题的渐近复杂度往往是决定其可行性的关键问题。一个复杂度为 17n 的问题可以在现代计算机上在不到一分钟的时间内处理，对于每一个大小为十亿的实例。另一方面，一个最坏情况复杂度为 2n 的问题，对于某些大小为一百的实例，在我们的一生中无法处理。

正如讨论的那样，自然问题往往对于重要的复杂度类来说是完备的，即图表中的那些类以及极少数其他类。这一引人入胜的现象意味着算法和复杂度不仅仅是抽象概念；它们在实际层面上也是重要的。我们在证明我们感兴趣的问题是某个众所周知的复杂度类的完备性方面取得了显著成功。如果该类包含在 P 中，那么我们通常可以查找已知的高效算法。否则，我们必须考虑我们的问题的简化或近似，这可能是可行的。

存在丰富的 NP 优化问题可近似性理论（参见 [Arora & Barak, 2009]）。例如，上面提到的子集和问题是一个 NP 完全问题。很可能需要指数时间来判断给定的子集和问题是否有精确解。然而，如果我们只想看看是否可以在固定数量的数字精度上达到目标，那么这个问题就相当容易，即，子集和问题很难，但近似起来非常容易。

即使是可计算性与复杂度中的 r.e.-complete 停机问题也有许多重要的可行子问题。给定一个程序，通常不可能弄清楚它的功能以及它是否最终会停机。然而，大多数由程序员或学生编写的程序可以被现代编译器和模型检查器自动分析、优化甚至纠正。

类 NP 在实践和哲学上非常重要。它是问题类 S 的集合，其中任何输入 w 都在 S 中当且仅当存在一个证明 p(w)，表明 w∈S 且 p(w) 的规模不比 w 大很多。因此，非常不严谨地说，我们可以将 NP 视为可能可以达到的智力努力的集合：如果我们找到了关于 w∈S 的答案，我们可以说服其他人我们已经这样做了。

布尔可满足性问题（SAT）是第一个被证明为 NP 完全问题的问题【Cook, 1971】，即，它是一个最难的 NP 问题。SAT 是 NP 完全意味着 NP 中的所有问题都可归约为 SAT。多年来，研究人员建立了非常高效的 SAT 求解器，可以快速解决许多 SAT 实例 - 即，找到一个满足的赋值或证明不存在这样的赋值 - 即使对于具有数百万变量的实例也是如此。因此，SAT 求解器被用作通用问题求解器。另一方面，已知某些小实例类别的 SAT 求解器失败。因此，P 与 NP 问题的一部分涉及 SAT 的实际和理论复杂性【Nordström, 2015】。

存在着广泛的计算复杂性理论。本条目简要描述了这一领域，并将其置于原则上可计算与实践中可计算的问题背景下。对于希望了解更多关于复杂性的读者，有一些优秀的书籍，例如 [Papadimitriou, 1994] 和 [Arora and Barak, 2009]。还有关于计算复杂性理论的条目。


## Bibliography

* Allender, E., M. Bauland, N. Immerman, H. Schnoor and H. Vollmer, 2009, “The Complexity of Satisfiability Problems: Refining Schaefer’s Theorem”, *Journal of Computer and System Science* 75(4): 245–254.
* Arora, Sanjeev and Boaz Barak, 2009, *Computational Complexity: A Modern Approach*, New York: Cambridge University Press.
* Böerger, Egon, Erich Grädel, and Yuri Gurevich, 1997, *The Classical Decision Problem*, Heidelberg: Springer.
* Bulatov, Andrei, 2017, “A Dichotomy Theorem for Nonuniform CSPs”, *IEEE 58th Annual Symposium on Foundations of Computer Science*, 319–330.
* –––, 2018, “Constraint Satisfaction Problems: Complexity and Algorithms”, *SIGLOG News* 4(5): 3–24.
* Church, Alonzo, 1933, “A Set of Postulates for the Foundation of Logic (Second Paper)”, *Annals of Mathematics* (Second Series), 33: 839–864.
* –––, 1936a, “An Unsolvable Problem of Elementary Number Theory,” *American Journal of Mathematics*, 58: 345–363.
* –––, 1936b, “A Note on the Entscheidungsproblem,” *Journal of Symbolic Logic*, 1: 40–41; correction 1, 101–102.
* Cobham, Alan, 1964, “The Intrinsic Computational Difficulty of Functions,” *Proceedings of the 1964 Congress for Logic, Mathematics, and Philosophy of Science*, Amsterdam: North-Holland, pp. 24–30.
* Cook, Stephen, 1971, “The Complexity of Theorem Proving Procedures,” *Proceedings of the Third Annual ACM STOC Symposium*, Shaker Heights, Ohio, pp. 151–158.
* Davis, Martin, 2000, *The Universal Computer: the Road from Leibniz to Turing*, New York: W. W. Norton & Company.
* Edmonds, Jack, 1965, “Paths, Trees and Flowers,” *Canadian Journal of Mathematics*, 17: 449–467.
* Enderton, Herbert B., 1972, *A Mathematical Introduction to Logic*, New York: Academic Press.
* Fagin, Ronald, 1974, “Generalized First-Order Spectra and Polynomial-Time Recognizable Sets,” in *Complexity of Computation*, R. Karp (ed.), *SIAM-AMS Proc*, 7: 27–41.
* Feder, Tomas and Moshe Vardi, 1999, “The Computational Structure of Monotone Monadic SNP and Constraint Satisfaction: A Study Through Datalog and Group Theory”, *SIAM Journal of Computing* 28: 57–104.
* Garey, Michael and David S. Johnson, 1979, *Computers and Intractability*, New York: Freeman.
* Gödel, Kurt, 1930, “The Completeness of the Axioms of the Functional Calculus,” in van Heijenoort 1967: 582–591.
* –––, 1931, “On Formally Undecidable Propositions of Principia Mathematica and Related Systems I,” in van Heijenoort, 1967: 592–617.
* Hartmanis, Juris, 1989, “Overview of computational Complexity Theory” in J. Hartmanis (ed.), *Computational Complexity Theory*, Providence: American Mathematical Society, pp. 1–17.
* Hilbert and Ackermann, 1928/1938, *Grundzüge der theoretischen Logik*, Springer. English translation of the 2nd edition: *Principles of Mathematical Logic*, New York: Chelsea Publishing Company, 1950.
* Hodges, Andrew, 1992, *Alan Turing: the Enigma*, London: Random House.
* Hofstadter, Douglas, 1979, *Gödel, Escher, Bach: an Eternal Golden Braid*, New York: Basic Books.
* Hopcroft, John E., 1984, “Turing Machines”, *Scientific American*, 250(5): 70–80.
* Immerman, Neil, 1999, *Descriptive Complexity*, New York: Springer.
* Jeavons, P.G., D.A. Cohen and M. Gyssens, 1997, “Closure Properties of Constraints”, *Journal of the ACM*, 44: 527–548.
* Jones, Neil, 1973, “Reducibility Among Combinatorial Problems in Log *n* Space”, *Proc. Seventh Annual Princeton Conf. Info. Sci. and Systems*, 547–551.
* Karp, Richard, 1972, “Reducibility Among Combinatorial Problems,”, in *Complexity of Computations*, R.E. Miller and J.W. Thatcher (eds.), New York: Plenum Press, pp. 85–104.
* Kleene, Stephen C., 1935, “A Theory of Positive Integers in Formal Logic,” *American Journal of Mathematics*, 57: 153–173, 219–244.
* –––, 1950, *Introduction to Metamathematics*, Princeton: Van Nostrand.
* Ladner, Richard, 1975, “On the structure of polynomial time reducibility”, *Journal of the ACM*, 155–171.
* Levin, Leonid, 1973, “Universal search problems,” *Problemy Peredachi Informatsii*, 9(3): 265–266; partial English translation in B.A.Trakhtenbrot, 1984, “A Survey of Russian Approaches to Perebor (Brute-force Search) Algorithms,” *IEEE Annals of the History of Computing*, 6(4): 384–400.
* Markov, A.A., 1960, “The Theory of Algorithms,” *American Mathematical Society Translations* (Series 2), 15: 1–14.
* Meyer, Albert and Dennis Ritchie, 1967, “The Complexity of Loop Programs,” *Proceedings of the 22nd National ACM Conference*, Washington, D.C., 465–470.
* Nordström, Jakob, 2015, “On the Interplay Between Proof Complexity and SAT Solving,” SIGLOG News, 2(3): 18–44.
* Papadimitriou, Christos H., 1994, *Computational Complexity*, Reading, MA: Addison-Wesley.
* Péter, Rózsa. 1967, *Recursive Functions*, translated by István Földes, New York: Academic Press.
* Post, Emil, 1936, “Finite Combinatory Processes – Formulation I,” *Journal of Symbolic Logic*, 1: 103–105.
* Rogers, Hartley Jr., 1967, *Theory of Recursive Functions and Effective Computability*, New York: McGraw-Hill.
* Schaefer, Thomas, 1978, “The Complexity of Satisfiability Problems”, *Proceedings of the Tenth Annual ACM STOC Symposium*, 216–226.
* Skolem, Thoralf, 1923, “The foundations of elementary arithmetic established by means of the recursive mode of thought,” in van Heijenoort 1967: 302–33.
* Turing, A. M., 1936–7, “On Computable Numbers, with an Application to the Entscheidungsproblem”, *Proceedings of the London Mathematical Society*, 2(42): 230–265 [[Preprint available online](http://www.abelard.org/turpap2/tp2-ie.asp)].
* Valiant, Leslie, 1982, “Reducibility By Algebraic Projections”, *L’Enseignement mathematique*, 28(3–4): 253–268.
* van Heijenoort, Jean, (ed.), 1967, *From Frege To Gödel: A Source Book in Mathematical Logic, 1879–1931*, Cambridge, Massachusetts: Harvard University Press.
* Whitehead, Alfred North and Bertrand Russell, 1910–1913, *Principia Mathematica*, first edition, Cambridge: Cambridge University Press.
* Zhuk, Dmitriy, 2020, “A Proof of CSP Dichotomy Conjecture”, *Journal of the ASM*, 30: 1–78.

## Academic Tools

> | ![sep man icon](../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=computability). |
> | --- | --- |
> | ![sep man icon](../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/computability/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=computability&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](https://philpapers.org/sep/computability/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* [Descriptive Complexity](http://people.cs.umass.edu/~immerman/descriptive_complexity.html): a webpage describing research in Descriptive Complexity which is Computational Complexity from a Logical Point of View (with a diagram showing the World of Computability and Complexity). Maintained by Neil Immerman, University of Massachusetts, Amherst.
* [Mass, Size, and Density of the Universe](http://www.cs.umass.edu/~immerman/stanford/universe.html), from the National Solar Observatory/Sacramento Peak.

## Related Entries

Church, Alonzo: logic, contributions to | [Church-Turing Thesis](https://plato.stanford.edu/entries/church-turing/) | [computational complexity theory](https://plato.stanford.edu/entries/computational-complexity/) | [Gödel, Kurt](https://plato.stanford.edu/entries/goedel/) | [quantum theory: quantum computing](https://plato.stanford.edu/entries/qt-quantcomp/) | [recursive functions](https://plato.stanford.edu/entries/recursive-functions/) | [set theory](https://plato.stanford.edu/entries/set-theory/) | [Turing, Alan](https://plato.stanford.edu/entries/turing/) | [Turing machines](https://plato.stanford.edu/entries/turing-machine/)

[Copyright © 2021](https://plato.stanford.edu/info.html#c) by  
[Neil Immerman](http://www.cs.umass.edu/~immerman/) <[*immerman@cs.umass.edu*](mailto:immerman%40cs%2eumass%2eedu)>

