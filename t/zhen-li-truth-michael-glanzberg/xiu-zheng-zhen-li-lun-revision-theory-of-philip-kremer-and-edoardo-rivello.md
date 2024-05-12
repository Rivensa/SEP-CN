# 修正真理论 revision theory of (Philip Kremer and Edoardo Rivello)

*首次发表于 1995 年 12 月 15 日，实质性修订于 2023 年 6 月 6 日*

考虑以下句子：

(1)

(1) 不是真的。

众所周知，句子(1)产生了一个悖论，即所谓的说谎者悖论：似乎不可能一致地坚持(1)是真的，也不可能一致地坚持(1)不是真的：如果(1)是真的，那么(1)真实地说(1)不是真的，所以(1)不是真的；另一方面，如果(1)不是真的，那么(1)所说的是事实，即(1)是真的。（有关详细信息，请参见下面的第 1 节。）鉴于这样的悖论，人们可能对真理的概念持怀疑态度，或者至少对给出一个科学上可接受的真理解释的前景持怀疑态度。

阿尔弗雷德·塔斯基的伟大成就在于展示了如何给出一种广泛类形式化语言的真理的形式定义，与此怀疑论相反。然而，塔斯基并没有展示如何给出包含自己真理谓词的语言（如英语）的真理定义。他认为这是不可能的，正是因为说谎者悖论。更一般地说，塔斯基认为，只要遵守标准古典逻辑的规则，并且具有指称自己句子的能力，任何具有自己真理谓词的语言都将是不一致的。正如我们将在第 2.3 节关于定理 2.1 的评论中看到的那样，塔斯基并不完全正确：存在一致的经典解释语言，它们指称自己的句子并具有自己的真理谓词。（这一观点源自 Gupta 1982，并在 Gupta 和 Belnap 1993 中得到加强。）

鉴于意义与真理之间的密切联系，普遍认为，对于语言 L 的任何语义学，即 L 的任何意义理论，都与 L 的真理理论密切相关：事实上，普遍认为，类似于塔斯基的 L 的真理理论将是 L 的语义学的核心部分。因此，对于具有自己真理谓词的语言无法给出塔斯基的真理理论，这威胁到了为具有自己真理谓词的语言提供语义学的项目。

我们不得不等到 Kripke 1975 和 Martin＆Woodruff 1975 的工作，才有了关于具有自己真理谓词的语言的系统形式提议的语义学。基本思想很简单：将有问题的句子，如（1），视为既非真又非假。特别是，Kripke 展示了如何对各种语言实施这一思想，实际上采用了具有真、假和既非真又非假三个值的语义学。可以说，Kripkean 方法已经取代了塔斯基的悲观主义，成为关于具有自己真理谓词的语言的新正统。

三值语义的主要竞争对手之一是真理修正论（Revision Theory of Truth，简称 RTT），由汉斯·赫茨伯格（Hans Herzberger）和阿尼尔·古普塔（Anil Gupta）独立构思，并首次在赫茨伯格（1982a 和 1982b）、古普塔（1982）和贝尔纳普（1982）的出版物中提出。关于该主题的第一本专著是雅各布（Yaqūb，1993）和经典著作《真理修正论》（Gupta & Belnap，1993）。RTT 旨在模拟在双值语境中谎言句导致的推理方式。（关于 RTT 是否真正是双值的问题，请参见第 5.2 节。）其核心思想是修正过程的概念：一种通过修正关于一个或多个句子真值的假设的过程。本文的目的是概述真理修正论。我们按照以下步骤进行：

---

## 1. 半正式介绍

让我们仔细看一下上面给出的句子（1）。

(1)

(1) 不是真的。

将悖论的推理明确化将会很有用。首先，假设：

(2)

(1) 不是真的。

似乎有一个关于真理的直观原则，对于任何句子 p，我们有所谓的 T-双条件

(3)

“p”是真的当且仅当 p。

（这里我们使用“当且仅当”的缩写“iff”。）特别地，我们应该有

(4)

当且仅当(1)不为真时，‘(1)不为真’为真。

因此，根据(2)和(4)，我们得到

(5)

‘(1)不为真’为真。

然后我们可以应用同一论，

(6)

(1) = ‘(1) 不是真的。’

来得出结论，(1) 是真的。这一切表明，如果 (1) 不是真的，那么 (1) 是真的。同样地，我们也可以推断，如果 (1) 是真的，那么 (1) 不是真的。所以 (1) 似乎既是真的又不是真的：因此产生了悖论。如上所述，对于这个悖论，三值方法认为说谎者句子 (1) 既不是真的也不是假的。这种方法如何以及是否阻止了上述推理是一个有争议的问题。

RTT 并非旨在阻止上述推理，而是对其进行建模-或者说大部分建模。[2] 如上所述，核心思想是修正过程的概念：通过该过程，我们修正关于一个或多个句子真值的假设。

考虑对谎言句子(1)的推理。假设我们假设(1)不是真的。然后，通过相关的 T-双条件式，我们可以如下修正我们的假设：

| 假设：         | (1) 不是真的。                                   |
| ---------------- | -------------------------------------------------- |
| T-双条件：     | 当且仅当(1) 不是真的时，'（1）不是真的' 是真的。 |
| 因此：         | “（1）不是真的” 是真的。                       |
| 已知的同一性： | (1) = ‘(1) 不是真的’.                          |
| 结论:          | (1) 是真的.                                      |
| 新修订的假设： | (1) 是真的。                                     |

我们可以继续修订过程，再次修订我们的假设，如下所示：

| 新假设：       | (1) 是真的。                             |
| ---------------- | ------------------------------------------ |
| T-双条件：     | 当且仅当(1)不为真时，‘(1)不为真’为真。 |
| 因此：         | ‘(1)不为真’不为真。                    |
| 已知的同一性： | (1) = ‘(1) 不是真的’。                 |
| 结论：         | (1) 不是真的。                           |
| 新的修订假设： | (1) 不是真的。                           |

随着修订过程的进行，我们在将谎言句子视为真实和不真实之间来回翻转。

**示例 1.1**
 值得看到这种修订推理在一个有几个相互关联的句子的情况下是如何工作的。让我们将修订的想法应用于以下三个句子：

(7)

(8) 是真的或者 (9) 是真的。

(8)

 (7) 是真的。

(9)

(7) 不是真的。

非正式地说，我们可以如下推理。要么（7）为真，要么（7）不为真。因此，要么（8）为真，要么（9）为真。因此，（7）为真。因此（8）为真且（9）不为真，而（7）仍然为真。再次迭代该过程，我们得到（8）为真，（9）不为真，且（7）为真。更正式地说，考虑任何关于（7），（8）和（9）真值的初始假设 h0。无论 h0 声称（7）为真还是 h0 声称（7）不为真，我们都可以使用 T-双条件生成我们的修订假设 h1：如果 h0 声称（7）为真，则 h1 声称‘（7）为真’为真，即（8）为真；如果 h0 声称（7）不为真，则 h1 声称‘（7）不为真’为真，即（9）为真。因此，h1 声称要么（8）为真，要么（9）为真。因此，h2 声称‘（8）为真或（9）为真’为真。换句话说，h2 声称（7）为真。因此，无论我们从哪个假设 h0 开始，修订过程的两次迭代都会导致一个假设，即（7）为真。类似地，修订过程的三次或更多次迭代，无论我们的初始假设如何，都会导致一个假设，即（7）为真，（8）为真且（9）不为真。在第 3 节中，我们将在更正式的背景下重新考虑这个例子。

值得注意的一点是，在示例 1.1 中，修订过程为所有三个句子提供了稳定的真值。在所有修订序列中稳定为真的句子的概念将是 RTT 的核心概念。在这种情况下，修订论处理与三值方法形成对比：在实施三值思想的大多数方式中，所有三个句子（7），（8）和（9）都不是真也不是假。在这种情况下，RTT 可以说更好地捕捉了正确的非正式推理，而不是三值方法：RTT 为句子（7），（8）和（9）分配了它们在例子开始时非正式推理中分配给它们的真值。

## 2. 构建问题的框架

### 2.1 真理语言

RTT 的目标不是提供一个无悖论的真理解释。相反，RTT 的目标是解释我们对真理的常常不稳定和常常矛盾的推理。RTT 更具体地寻求提供一个双值解释，当直觉推理会给出稳定的经典真值时，该解释将为句子分配稳定的经典真值。我们将为一个形式语言提供一个形式语义学：我们希望该语言既具有一个真理谓词，又具有引用自己句子的资源。

让我们考虑一个一阶语言 L，其中包括连接词&、∨和¬，量词∀和∃，等号=，变量，以及一些名字、函数符号和关系符号的库存。如果 L 具有一个特殊的谓词 T 和引号‘和’，用于形成引用名：如果 A 是 L 的一个句子，则‘A’是一个名字。令 SentL={A:A 是 L 的一个句子}。

识别真理语言 L 的 T-自由片段将会很有用：第一阶语言 L−具有与 L 相同的名称、函数符号和关系符号，除了一元谓词 T。由于 L−具有与 L 相同的名称，包括相同的引用名称，因此 L−将为 L 的每个句子 A 都有一个引用名称‘A’。因此，∀xTx 不是 L−的一个句子，但‘∀xTx’是 L−的一个名称，而∀x(x= ‘∀xTx’)是 L−的一个句子。

### 2.2 基础模型

除了真理谓词之外，我们将假设我们的语言在经典上进行解释。更准确地说，让 L 的一个基础模型为 L−的经典模型 M=⟨D,I⟩，满足以下条件：

1. D 是一个非空的论域；
2. I 是一个将 L 的每个名称映射到 D 的成员的函数；
3. to each name of L a member of D;
4. 对于 L 中的每个 n 元函数符号，从 Dn 到 D 的函数；
5. 对于 L 中的每个 n 元关系符号（除了 T），从 Dn 到集合{t,f}中的一个真值的函数；[4]
6. SentL ⊆ D；和
7. 对于每个 A∈ SentL，我（‘A’）= A。

条款（1）和（2）仅仅指定了 M 作为 L 的 T-free 片段的经典模型的条件。条款（3）和（4）确保 L 在解释时可以谈论自己的句子。给定一个基础模型，我们将考虑提供对 T 的满意解释的前景。最明显的要求是，基础模型扩展到包括对 T 的解释，满足 Tarski 的 T-双条件式，即形式为 T‘A’当且仅当 A 的双条件式。

 T‘A’当且仅当 A。

 对于每个 A∈SentL。

一些有用的术语：给定一个 L 的基础模型 M 和一个名称、函数符号或关系符号 X，我们可以将 I(X)视为 X 的解释或者借用 Gupta 和 Belnap 的术语，X 的意义。Gupta 和 Belnap 将一个表达式或概念在世界 w 中的意义描述为“一个抽象的东西，它携带了关于该表达式（或概念）在 w 中所有外延关系的所有信息”。如果我们想将 Tx 解释为“x 是真的”，那么在给定一个基础模型 M 的情况下，我们希望找到一个合适的意义，或者一个合适的意义范围，来解释 T。

### 2.3 三个基础模型

我们可以尝试给 T 赋予一个经典的意义，通过将 M 扩展为一个包括 T 在内的所有 L 的经典模型 M′=⟨D′,I′⟩。还要记住，我们希望 M′满足 T-双条件：为了我们的即时目的，让我们经典地解释这些。我们说，一个对于一个基础模型 M 的扩展 M′是 Tarskian 的，当且仅当 M′是一个经典模型，并且所有的 T-双条件，在经典解释下，在 M′中都是真的。我们希望将基础模型扩展为 Tarskian 模型。为了评估我们实现这一目标的前景，我们考虑了三个基础模型。

 基础模型 M1

我们的第一个基础模型是上面例子 1.1 的形式化。假设 L1 包含三个非引用名称α、β和γ，并且没有其他谓词除了 T。让 M1=⟨D1,I1⟩如下：D1=SentL1I1(α)=Tβ∨TγI1(β)=TαI1(γ)=¬Tα

 地面模型 M2

假设 L2 包含一个非引用名称 τ，除了 T 之外没有其他谓词。令 M2=⟨D2,I2⟩ 如下：D2=SentL2I2(τ)=Tτ

 地面模型 M3

假设 L3 包含一个非引用名称λ，除了 T 之外没有其他谓词。令 M3=⟨D3,I3⟩如下：D3=SentL3I3(λ)=¬Tλ

**定理 2.1**

(1)

M1 可以扩展为恰好一个塔斯基模型：在这个模型中，句子(Tβ∨Tγ)和 Tα为真，而句子¬Tα为假。

(2)

M2 可以扩展为正好两个塔斯基模型，其中一个模型中句子 Tτ为真，另一个模型中句子 Tτ为假。

(3)

M3 无法扩展为塔斯基模型。

(1)和(2)的证明超出了本文的范围，但有一些评论是必要的。

Re (1): M1 能够扩展为一个 Tarskian 模型并不令人惊讶，根据上面的例子 1.1 的推理：对于这三个问题句子的真值的任何初始假设，在经过三次修正过程后，都会得出一个稳定的假设，即(Tβ∨Tγ)和 Tα为真，而¬Tα为假。M1 能够扩展为仅有一个 Tarskian 模型的事实需要所谓的转移定理，Gupta 和 Belnap 1993 年的定理 2D.4。

备注：在上面的引言中，我们声称存在一些一致的经典解释语言，它们引用自己的句子并具有自己的真值谓词。定理 2.1 的第一条给出了一个例子。设 M′1 是 M1 的唯一 Tarskian 扩展。那么由 M′1 解释的语言 L1 是一个解释语言，它具有满足经典理解下的 T-双条件的自己的真值谓词，遵守标准经典逻辑的规则，并且能够引用自己的每个句子。因此，塔斯基在他认为任何具有自己真值谓词的语言都是不一致的观点上并不完全正确，只要它遵守标准经典逻辑的规则，并且能够引用自己的句子。

Re (2): 唯一可能存在问题的自指是在句子 Tτ中，即所谓的真理告知者，它说自己是真的。非正式推理表明，真理告知者可以一致地被赋予经典真值：如果你赋予它值 t，那么不会产生悖论，因为句子现在真实地说自己是真的；如果你赋予它值 f，那么也不会产生悖论，因为句子现在虚假地说自己是真的。定理 2.1 (2) 正式化了这一点，即 M2 可以扩展为一个 Tarskian 模型，其中 Tτ为真，另一个 Tarskian 模型中 Tτ为假。M2 可以扩展为恰好两个 Tarskian 模型的事实需要转移定理，如上所述。注意，由这些扩展之一解释的语言 L2 提供了另一个例子，即解释语言具有自己的满足经典理解的 T-双条件的真理谓词，遵守标准经典逻辑的规则，并且能够引用其自己的每个句子。

(3)的证明。假设 M′3=⟨D3,I′3⟩是 M3 对 L3 的经典扩展。由于 M′3 是 M3,I3 和 I′3 在 L3 的所有名称上达成一致。所以

I′3(λ)=I3(λ)=¬Tλ=I3(‘¬Tλ’)=I′3(‘¬Tλ’).

因此，在 M'3 中，句子 Tλ和 T'¬Tλ'具有相同的真值。因此，T-双条件式

 T'¬Tλ'≡¬Tλ

 在 M'3 中是假的。

备注：由地面模型 M3 解释的语言 L3 形式化了说谎者悖论，其中句子¬Tλ是冒犯性的说谎者句子。因此，尽管定理 2.1，条款（1）和（2），条款（3）强烈暗示在能够表达自己的真理概念的语言的语义中，T 通常不能具有经典的意义；T-双条件式中的“当且仅当”也不会被解读为经典的双条件式。我们将在下面的第 4 节中讨论这些建议。

## 3. RTT 的基本概念

### 3.1 修正规则

在第 1 节中，我们非正式地勾勒了 RTT 的核心思想，即我们可以使用 T-双条件式来生成修正规则-一种用于修正关于真理谓词的扩展的假设的规则。在这里，我们将形式化这个概念，并通过第 1 节的一个例子来进行工作。

一般来说，设 L 是一个真理语言，M 是 L 的一个基础模型。一个假设是一个函数 h:D→{t,f}。一个假设实际上是对 T 的假设的经典解释。让我们使用一个结合了基础模型 M1 和 M3 特征的例子来工作。我们将正式陈述这个例子，但以半正式的方式进行推理，以从一个假设的 T 扩展过渡到另一个。

例 3.1 假设 L 包含四个非引用名称α、β、γ和λ，除了 T 之外没有其他谓词。还假设 M=⟨D,I⟩如下：D=SentLI(α)=Tβ∨TγI(β)=TαI(γ)=¬TαI(λ)=¬Tλ

让 A 成为句子 Tβ∨TγB 成为句子 TαC 成为句子¬TαX 成为句子¬Tλ会很方便

因此：

Thus:

D=SentLI(α)=AI(β)=BI(γ)=CI(λ)=X

假设假设 h0 假设 A 为假，B 为真，C 为假，X 为假。因此

h0(A)=fh0(B)=th0(C)=fh0(X)=f

现在我们将进行一些半正式的推理，基于假设 h0。在这四个句子 A、B、C 和 X 中，h0 只将 B 放入 T 的范围内。因此，根据 h0 的推理，我们得出以下结论：

¬Tα，因为α的指称不在 T 的范围内。TTβ，因为β的指称在 T 的范围内。¬Tγ，因为γ的指称不在 T 的范围内。¬Tλ，因为λ的指称不在 T 的范围内。

这四个句子 A、B、C 和 X 的 T-双条件如下：

(TA)(TB)(TC)(TX)A 是真的，当且仅当 Tβ∨TγB 是真的，当且仅当 TαC 是真的，当且仅当 ¬TαX 是真的，当且仅当 ¬Tλ 是真的

因此，从 h0 推理，我们得出结论：

A 是真的，B 不是真的，C 是真的，X 是真的

这产生了我们的新假设 h1：

h1(A)=th1(B)=fh1(C)=th1(X)=t

让我们再次修正我们的假设。现在我们将根据假设 h1 进行一些半正式的推理。假设 h1 将 A、C 和 X 放入 T 的范围内，但不包括 B。因此，根据 h1 的推理，我们得出结论：

Tα由于α的指称不在 T 的外延中 T¬Tβ由于β的指称在 T 的外延中 TTγ由于γ的指称不在 T 的外延中 TTλ由于λ的指称不在 T 的外延中。

回想一下上面给出的四个句子 A，B，C 和 X 的 T-双条件。根据 h1 和这些 T-双条件的推理，我们得出结论：

A 是真的 B 是真的 C 不是真的 X 不是真的

这产生了我们的新假设 h2：

h2(A)=th2(B)=th2(C)=fh2(X)=f□

让我们将在示例 3.1 中进行的半正式推理形式化。首先，我们假设某些句子在 T 的扩展中或不在其中。考虑普通的经典模型理论。假设我们的语言具有谓词 G 和一个名字 a，并且我们有一个模型 M=⟨D,I⟩，它将 a 的指称放在 G 的扩展中：

 我（G）（我（α））= t

然后我们经典地得出结论，句子 Ga 在 M 中是真的。对于一个经典模型 M 中句子 S 的经典真值，我们需要一些符号表示。我们将写成 ValM(S)。在这种情况下，ValM(Ga)=t。在例 3.1 中，我们没有从整个语言 L 的经典模型开始，而只有 L 的 T-free 片段的经典模型。但是然后我们添加了一个假设，以便获得 L 的全部经典模型。当您通过假设 h 为 T 分配一个扩展时，让我们使用符号 M+h 表示 L 的全部经典模型。一旦您为谓词 T 分配了一个扩展，您可以计算 L 的各种句子的真值。也就是说，对于 L 的每个句子 S，我们可以计算

ValM+h(S)

在示例 3.1 中，我们从假设 h0 开始，如下所示：

h0(A)=fh0(B)=th0(C)=fh0(X)=f

然后我们计算如下：

ValM+h0(Tα)=fValM+h0(Tβ)=tValM+h0(Tγ)=fValM+h0(Tλ)=f

然后我们得出以下结论：

ValM+h0(A)=ValM+h0(Tβ∨Tγ)=tValM+h0(B)=ValM+h0(Tα)=fValM+h0(C)=ValM+h0(¬Tα)=tValM+h0(X)=ValM+h0(¬Tλ)=t

这些结论产生了我们的新假设，h1：

h1(A)=th1(B)=fh1(C)=th1(X)=t

请注意，一般来说，

h1(S)=ValM+h0(S).

我们现在准备定义由一个基础模型 M=⟨D,I⟩给出的修正规则。一般来说，给定一个假设 h，让 M+h=⟨D,I′⟩成为与 M 在 L 的 T-free 片段上一致的 L 的模型，并且使得 I′(T)=h。所以 M+h 只是 L 的一个经典模型。对于 L 的所有模型 M+h 和任意句子 S，让 ValM+h(S)成为 S 在 M+h 中的普通经典真值。

**定义 3.2**

假设 L 是一个真理语言，M=⟨D,I⟩是 L 的一个基础模型。修正规则τM 是将假设映射到假设的函数，如下所示：τM(h)(d)={t，如果 d∈D 是 L 的一个句子且 ValM+h(d)=tf，否则

“否则”条款告诉我们，如果 d 不是 L 的一个句子，在进行一次修正后，我们坚持假设 d 不是真的。[5] 注意，在示例 3.1 中，h1=τM(h0)和 h2=τM(h1)。当上下文清楚指出涉及的基础模型时，我们经常省略下标的“M”。

### 3.2 修正序列

让我们选择示例 3.1，并看看在应用修正规则的迭代过程中会发生什么。

示例 3.3（示例 3.1 继续）
 请记住，L 包含四个非引用名称，α，β，γ和λ，除了 T 之外没有其他谓词。 还记得 M = ⟨D，I⟩如下：D = SentLI（α）= A = Tβ∨TγI（β）= B = TαI（γ）= C = ¬TαI（λ）= X = ¬Tλ

下表显示了对于来自示例 3.1 的假设 h0，重复应用修正规则τM 的结果。在这个表中，我们将用τ代替τM：

| S | h0(S) | τ(h0)(S) | τ2(h0)(S) | τ3(h0)(S) | τ4(h0)(S) | ⋯ |
| --- | ------- | ----------- | ------------ | ------------ | ------------ | ---- |
| A | f     | t         | t          | t          | t          | ⋯ |
| B | t     | f         | t          | t          | t          | ⋯ |
| C | f     | t         | f          | f          | f          | ⋯ |
| X | f     | t         | f          | t          | f          | ⋯ |

因此，h0 生成了一个修正序列（见下面的定义 3.7）。在该修正序列中，A 和 B 是稳定真的（见下面的定义 3.6），而 C 是稳定假的。不出所料，谎言句子 X 既不稳定真也不稳定假：谎言句子是不稳定的。类似的计算将表明，无论初始假设如何，A 都是稳定真的：因此 A 是绝对真的（见定义 3.8）。

在给出修正序列的精确定义之前，我们举一个例子，其中我们希望将修正过程延伸到有限阶段之外，h,τ1(h),τ2(h),τ3(h)，等等。

**例子 3.4**
 假设 L 包含非引用名称 α0,α1,α2,α3,…，以及一元谓词 G 和 T。现在我们将指定一个基础模型 M=⟨D,I⟩，其中名称 α0 指的是某个重言式，名称 α1 指的是句子 Tα0，名称 α2 指的是句子 Tα1，名称 α3 指的是句子 Tα2 ⋮

更正式地说，让 A0 成为句子 Tα0∨¬Tα0，对于每个 n≥0，让 An+1 成为句子 Tαn。因此，A1 是句子 Tα0，A2 是句子 Tα1，A3 是句子 Tα2，依此类推。我们的基础模型 M=⟨D,I⟩如下：

D=SentLI(αn)=AnI(G)(A)=t 当且仅当 A=An 对于某个 n

因此，G 的扩展是以下句子集合：{A0,A1,A2,A3,…}={(Tα0∨¬Tα0),Tα0,Tα1,Tα2,Tα3,…}。最后，让 B 成为句子∀x(Gx⊃Tx)。让 h 是任何我们对于每个自然数 n 都有的假设。

h(An)=h(B)=f.

重复应用修正规则τM 到假设 h 的结果如下表所示。在这个表中，我们将用τ代替τM：

| S  | h(S) | t(h)(S) | τ2(h)(S) | τ3(h)(S) | τ4(h)(S) | ⋯     |
| ---- | ------ | --------- | ----------- | ----------- | ----------- | -------- |
| A0 | f    | t       | t         | t         | t         | ⋯     |
| A1 | f    | f       | t         | t         | t         | ⋯     |
| A2 | f    | f       | f         | t         | t         | ⋯     |
| A3 | f    | f       | f         | f         | t         | ⋯     |
| A4 | f    | f       | f         | f         | f         | ⋯     |
| ⋮ | ⋮   | 真理    | 公理化    | 融贯论    | 真理      | 公理化 |
| B  | f    | f       | f         | f         | f         | 融贯论 |

在第 0 阶段，每个 An 都在 T 的假设扩展之外。但是从第 n+1 阶段开始，An 在 T 的假设扩展之内。因此，对于每个 n，句子 An 最终被稳定地假设为真。尽管如此，没有一个有限的阶段所有的 An 都被假设为真：因此，句子 B=∀x(Gx⊃Tx)在每个有限阶段都保持为假。这表明将过程扩展如下：

| S  | h(S) | τ(h)(S) | τ2(h)(S) | τ3(h)(S) | ⋯ | ω | ω+1 | ω+2   | ⋯     |
| ---- | ------ | ---------- | ----------- | ----------- | ---- | ---- | ------ | -------- | -------- |
| A0 | f    | t        | t         | t         | ⋯ | t  | t    | t      | ⋯     |
| A1 | f    | f        | t         | t         | ⋯ | t  | t    | t      | ⋯     |
| A2 | f    | f        | f         | t         | ⋯ | t  | t    | t      | ⋯     |
| A3 | f    | f        | f         | f         | ⋯ | t  | t    | t      | ⋯     |
| A4 | f    | f        | f         | f         | ⋯ | t  | t    | t      | ⋯     |
| ⋮ | 真理 | 公理化   | 融贯论    | ⋮        | ⋮ | ⋮ | 真理 | 公理化 | 融贯论 |
| B  | f    | f        | f         | f         | ⋯ | f  | t    | t      | ⋯     |

因此，如果我们允许修正过程在有限阶段之外继续进行，那么句子 B=∀x(Gx⊃Tx)从第ω+1 阶段开始就是稳定真的。□

In Example 3.4, the intuitive verdict is that not only should each An receive a stable truth value of t, but so should the sentence B=∀x(Gx⊃Tx). The only way to ensure this is to carry the revision process beyond the finite stages. So we will consider revision sequences that are very long: not only will a revision sequence have a nth stage for each finite number n, but a ηth stage for every *ordinal* number η. (The next paragraph is to help the reader unfamiliar with ordinal numbers.)

One way to think of the ordinal numbers is as follows. Start with the finite natural numbers:

0,1,2,3,…

添加一个大于所有这些数字但不是任何一个数字的直接后继的数字，ω：

0,1,2,3,…,ω

然后取ω的后继，它的后继，依此类推：

0,1,2,3,…,ω,ω+1,ω+2,ω+3,…

然后加上一个大于所有这些数的数ω+ω，或者ω×2（而且不是任何一个数的直接后继），然后重新开始，一遍又一遍地重复这个过程：

0,1,2,3,…ω,ω+1,ω+2,ω+3,…,ω×2,(ω×2)+1,(ω×2)+2,(ω×2)+3,…,ω×3,(ω×3)+1,(ω×3)+2,(ω×3)+3,… ⋮

在此之后，我们添加一个序数 ω×ω 或 ω2:

0,1,2,…,ω,ω+1,ω+2,…,ω×2,(ω×2)+1,…,ω×3,…,ω×4,…,ω×5,…,ω2,ω2+1,…

序数具有以下结构：每个序数都有一个称为继承序数的直接后继；对于任何无限递增的序数序列，都存在一个极限序数，它大于序列的所有成员，并且不是序列中任何成员的直接后继。因此，以下是继承序数：5,178,ω+12,(ω×5)+56,ω2+8；以下是极限序数：ω,ω×2,ω2,(ω2+ω)，等等。给定一个极限序数η，如果对于每个序数δ<η都有一个对象 Sδ，则序列 S 是一个η长的序列。我们将序数类表示为 On。任何对象序列 S 都是一个 On 长的序列，如果对于每个序数δ都有一个对象 Sδ。

在评估一个句子是否具有稳定的真值时，RTT 考虑了长度为 On 的假设序列。假设 S 是一个长度为 On 的假设序列，ζ和η是序数。显然，为了使 S 能够表示修正过程，我们需要通过修正规则从ζth 假设生成ζ+1th 假设。因此，我们坚持要求 Sζ+1=τM(Sζ)。但是在极限阶段应该怎么办呢？也就是说，当η是一个极限序数时，我们应该如何设置 Sη(d)？显然，任何在该阶段之前稳定为真[假]的对象应该在该阶段为真[假]。因此，考虑例子 3.4。例如，句子 A2 在ωth 阶段之前是真的；所以我们将 A2 设置为在ωth 阶段为真。对于在该阶段之前没有稳定的对象，Gupta 和 Belnap 1993 采取了一种自由的策略：在构建修正序列 S 时，如果对象 d∈D 的值在达到极限阶段η之前没有稳定，那么你可以将 Sη(d)设置为你喜欢的 t 或 f 中的任何一个。在我们给出修正序列的精确定义之前，我们继续看例子 3.3，以了解这个思想的应用。

例子 3.5（例子 3.3 继续）
 请记住，L 包含四个非引用名称，α，β，γ和λ，除了 T 之外没有其他谓词。还记得 M=⟨D,I⟩如下：

D=SentLI(α)=A=Tβ∨TγI(β)=B=TαI(γ)=C=¬TαI(λ)=X=¬Tλ

以下表格显示了对于来自示例 3.3 的假设 h0 重复应用修正规则τM 时会发生什么。对于每个序数η，我们将通过 Sη表示第η个假设（在τ上省略索引 M）。因此，S0=h0，S1=τ(h0)，S2=τ2(h0)，S3=τ3(h0)，而 Sω，第ω个假设，以某种方式由前面的假设确定。因此，从示例 3.3 的 h0 开始，我们的修正序列如下：

| S | S0(S) | S1(S) | S2(S) | S3(S) | S4(S) | ⋯ |
| --- | ------- | ------- | ------- | ------- | ------- | ---- |
| A | f     | t     | t     | t     | t     | ⋯ |
| B | t     | f     | t     | t     | t     | ⋯ |
| C | f     | t     | f     | f     | f     | ⋯ |
| X | f     | t     | f     | t     | f     | ⋯ |

在第ω阶段会发生什么？A 和 B 在第ω阶段之前都是稳定的真，而 C 在第ω阶段之前都是稳定的假。所以在第ω阶段，我们必须有以下情况：

| S | S0(S) | S1(S) | S2(S) | S3(S) | S4(S) | ⋯ | Sω(S) |
| --- | ------- | ------- | ------- | ------- | ------- | ---- | -------- |
| A | f     | t     | t     | t     | t     | ⋯ | t      |
| B | t     | f     | t     | t     | t     | ⋯ | t      |
| C | f     | t     | f     | f     | f     | ⋯ | f      |
| X | f     | t     | f     | t     | f     | ⋯ |  **?**       |

但是对于 Sω(X)的条目可以是 t 或 f。换句话说，初始假设 h0 至少生成两个修正序列。每个修正序列 S 的初始假设必须满足 Sω(A)=t，Sω(B)=t 和 Sω(C)=f。但是存在一些修正序列 S，其初始假设为 h0，并且 Sω(X)=t；还有一些修正序列 S'，其初始假设为 h0，并且 S'ω(X)=f.□

现在我们准备定义修正序列的概念：

**定义 3.6**

假设 L 是一个真理语言，M=⟨D,I⟩是一个基础模型。假设 S 是一个 On-长的假设序列。那么我们说 d∈D 在 S 中是稳定的 t[f]，当且仅当对于某个序数θ，我们有 Sζ(d)=t[f]，对于每个序数ζ≥θ。

假设 S 是一个η-长的假设序列，其中η是一个极限序数。那么我们说 d∈D 在 S 中是稳定的 t[f]，当且仅当对于某个序数θ<η，我们有

Sζ(d)=t [f]，对于每个满足ζ≥θ且ζ<η的序数ζ。

如果 S 是一个 On 长的假设序列，η是一个极限序数，则 S|η是 S 到η之前的初始段。注意，S|η是一个η长的假设序列。

**定义 3.7**

假设 L 是一个真理语言，M=⟨D，I⟩是一个基础模型。假设 S 是一个 On-长序列的假设。如果 S 是 M 的修正序列，则 Sζ+1=τM(Sζ)，对于每个ζ∈On，并且

* 对于每个极限序数η和每个 d∈D，如果 d 在 S|η中稳定地 t[f]，那么 Sη(d)=t[f]。
* for each limit ordinal η and each d∈D, if d is stably t [f] in S|η, then Sη(d)=t[f].

**定义 3.8**

假设 L 是一个真理语言，M=⟨D,I⟩是一个基础模型。我们说在 M 中，如果 A 在每个 M 的修订序列中是稳定的，则 A 在 M 中是绝对真实[假]的。我们说在 M 中，如果 A 在 M 中要么是绝对真实的，要么是绝对假的。

现在我们用一个例子来说明这些概念。这个例子还将说明一个之后要定义的新概念。

**示例 3.9**
 假设 L 是一个包含非引用名称β,α0,α1,α2,α3,…和一元谓词 G 和 T 的真理语言。让 B 是句子 Tβ∨∀x∀y(Gx&¬Tx&Gy&¬Ty⊃x=y)。

让 A0 是句子∃x(Gx&¬Tx)。对于每个 n≥0，让 An+1 是句子 Tαn。考虑以下基础模型 M=⟨D,I⟩

D=SentLI(β)=BI(αn)=AnI(G)(A)=t iff A=An for some n

Thus, the extension of G is the following set of sentences: {A0,A1,A2,A3,…}={∃x(Gx&¬Tx),Tα0,Tα1,Tα2,Tα3,…}. Let h be any hypothesis for which we have, h(B)=f and for each natural number n,

h(An)=f.

让 S 成为一个修正序列，其初始假设为 h，即 S0=h。下表显示了一些 Sγ(C)的值，其中 C∈{B,A0,A1,A2,A3,…}。在顶部行中，我们只指示表示修订过程中阶段的序数。

|    | 0    | 1      | 2      | 3    | ⋯     | ω     | ω+1 | ω+2   | ω+3   | ⋯   | ω×2  | (ω×2)+1 | (ω×2)+2 | ⋯ |
| ---- | ------ | -------- | -------- | ------ | -------- | -------- | ------ | -------- | -------- | ------ | -------- | ----------- | ----------- | ---- |
| B  | f    | f      | f      | f    | ⋯     | f      | t    | t      | t      | ⋯   | t      | t         | t         | ⋯ |
| A0 | f    | t      | t      | t    | ⋯     | t      | f    | t      | t      | ⋯   | t      | f         | t         | ⋯ |
| A1 | f    | f      | t      | t    | ⋯     | t      | t    | f      | t      | ⋯   | t      | t         | f         | ⋯ |
| A2 | f    | f      | f      | t    | ⋯     | t      | t    | t      | f      | ⋯   | t      | t         | t         | ⋯ |
| A3 | f    | f      | f      | f    | ⋯     | t      | t    | t      | t      | ⋯   | t      | t         | t         | ⋯ |
| A4 | f    | f      | f      | f    | ⋯     | t      | t    | t      | t      | ⋯   | t      | t         | t         | ⋯ |
| ⋮ | 真理 | 公理化 | 融贯论 | 真理 | 公理化 | 融贯论 | 真理 | 公理化 | 融贯论 | 真理 | 公理化 | 融贯论    | ⋮        | ⋱ |

值得对比的是句子 B 和句子 A0 的行为。从第ω+1 阶段开始，B 稳定为真。实际上，对于 M 的每个修正序列，B 都是稳定真的。因此，B 在 M 中是绝对真的。然而，句子 A0 从未完全稳定：它通常是真的，但在有限阶段的极限序数之后，句子 A0 可能是假的。在这种情况下，我们说 A0 几乎是稳定真的（见下面的定义 3.10）。实际上，对于 M 的每个修正序列，A0 几乎是稳定真的。□

示例 3.9 不仅说明了修正序列中稳定性的概念，还说明了近稳定性的概念，我们现在进行定义：

**定义 3.10。**

假设 L 是一个真理语言，M=⟨D,I⟩是一个基础模型。假设 S 是一个 On-长序列的假设。那么我们说 d∈D 在 S 中几乎稳定地 t [f]，当且仅当存在某个序数θ，我们有

对于每个ζ≥θ，存在一个自然数 n，使得对于每个 m≥n，Sζ+m(d)=t [f]。

Gupta 和 Belnap 1993 将稳定性和近稳定性之间的差异描述如下：“稳定性简单地要求一个元素[在我们的情况下是一个句子]在一些初始波动之后稳定到一个值 x[在我们的情况下是一个真值]，比如说在[一个序数η]之后...相比之下，近稳定性允许在η之后也有波动，但这些波动必须局限于极限序数之后的有限区域”(第 169 页)。Gupta 和 Belnap 1993 引入了基于稳定性和近稳定性的两个真理理论，T∗和 T#。下面的定理 3.12 和 3.13 说明了 T#系统的一个优势，即基于近稳定性的系统。

**定义 3.11**

假设 L 是一个真理语言，M=⟨D，I⟩是一个基础模型。我们说如果一个句子 A 在每个修订序列中是稳定真的，那么 A 在 M 中通过 T∗是有效的[6]。我们说如果一个句子 A 在每个修订序列中几乎是稳定真的，那么 A 在 M 中通过 T#是有效的。

**定理 3.12**

假设 L 是一个真理语言，M=⟨D，I⟩是一个基础模型。那么对于 L 的每个句子 A，以下等式在 M 中通过 T#是有效的：T‘¬A’≡¬T‘A’。

**定理 3.13**

存在一个真理语言 L 和一个基础模型 M=⟨D,I⟩以及 L 的一个句子 A，使得在 M 中以下语句不被 T∗所验证：T‘¬A’≡¬T‘A’。

Gupta 和 Belnap 1993 年第 6C 节中指出，T#相对于 T∗具有类似的优势。例如，T#验证以下语义原则，而 T∗则不验证：

T‘A&B’≡T‘A’&T‘B’T‘A∨B’≡T‘A’∨T‘B’

Gupta 和 Belnap 对于 T#和 T∗（以及他们定义的另一种选择 Tc）哪个更可取保持中立。

## 4. 解释形式主义

RTT 的主要形式概念是修正规则的概念（定义 3.2），即修正假设的规则；以及修正序列的概念（定义 3.7），根据适当的修正规则生成的假设序列。利用这些概念，我们可以在给定一个基础模型的情况下，指定一个句子在特定的修正序列中是稳定（或几乎稳定）真实的或稳定（或几乎稳定）虚假的（分别定义为 3.6 和 3.10）。因此，我们可以基于稳定性和近稳定性（分别）定义两个真理理论 T∗和 T#（定义 3.11）。最后的想法是，每个理论都会根据基础模型对语言中的哪些句子是有效的（定义 3.11）做出裁决。

回顾第 2 节末尾提出的建议：

> 在能够表达自己的真理概念的语言的语义中，T 通常不具有经典的意义；而 T-双条件式中的“当且仅当”也不会被解读为经典的双条件式。

Gupta 和 Belnap 以以下方式填写这些建议。

### 4.1 T 的意义

首先，他们建议，在给定一个基础模型 M 的情况下，T 的意义是修正规则τM 本身。如前一段所述，我们可以根据直接从修正规则τM 生成的概念，对句子的状态和相互关系进行细致的分析。因此，τM 是 T 的意义的一个很好的候选，因为它似乎是“一个抽象的东西，携带着关于 M 中所有[ T 的]外延关系的所有信息”。（请参见 Gupta 和 Belnap 在上述第 2 节中对表达式意义的描述。）

### 4.2 T-双条件中的“当且仅当”

Gupta 和 Belnap 关于 T-双条件中的“当且仅当”的相关建议是，这个“当且仅当”不是经典的双条件，而是用来定义先前未定义概念的特殊双条件。在 1993 年，Gupta 和 Belnap 将真理修正论作为循环定义概念修正论的特例进行了介绍。假设 L 是一个具有一元谓词 F 和二元谓词 R 的语言。考虑通过以下定义引入的谓词 G 来表达一个新概念：

Gx=df∀y(Ryx⊃Fx)∨∃y(Ryx&Gx)。

假设我们从一个论域 D 和对谓词 F 和关系符号 R 的解释开始。Gupta 和 Belnap 对概念的修正论处理因此引入了循环，使得我们能够对某些 d∈D 是否满足 G 给出无条件的判断。其他对象相对于 G 是不稳定的：我们既不能无条件地断言 d 满足 G，也不能断言 d 不满足 G。在真理的情况下，Gupta 和 Belnap 采用形式为(10)T‘A’=dfA 的 T-双条件式的集合来给出真理概念的定义。他们对‘=df’（定义概念引入的‘当且仅当’）的处理，以及形式为(10)的 T-双条件式，决定了修正规则τM 的定义。

(10)T‘A’=dfA

together to give the definition of the concept of truth. It is their treatment of ‘=df’ (the ‘iff’ of definitional concept introduction), together with the T-biconditionals of the form (10), that determine the revision rule τM.

### 4.3 悖论推理

回想一下这篇文章开头的谎言句子(1)：

(1)

(1) 不是真的

在第 1 节中，我们声称 RTT 的设计目的是对(1)的悖论推理进行建模，而不是阻止它。但我们在脚注 2 中指出，RTT 确实避免了这些情况中的矛盾。有两种方法可以看到这一点。首先，虽然 RTT 确实支持双条件式

(1)为真当且仅当(1)不为真，

但相关的“当且仅当”不是物质双条件式，如上所述。因此，并不意味着(1)既为真又不为真。其次，注意在任何假设下，我们都不能得出(1)既为真又不为真的结论。如果我们牢记修正论推理是假设性的而不是范畴性的，那么我们就不会从存在像(1)这样的句子中推断出任何矛盾。

### 4.4 符号化论题

Gupta 和 Belnap 关于 T 的符号化和 T-双条件式中“如果且仅如果”的解释的建议与 Gupta＆Belnap 1993 中表达的两个紧密相关的直觉相吻合。第一个直觉，粗略地表达，是“T-双条件式是分析的并且确定了‘真’的意义”（第 6 页）。更紧密地表达，它变成了“符号化论题”（第 31 页）：“T-双条件式确定了每个世界（其中世界由一个基模型表示）中真理的符号化。”[7]鉴于修正论的对“如果且仅如果”的定义的处理，以及给定一个基模型 M，正如注意到的那样，T-双条件式（10）确实确定了 T 的建议符号化，即修正规则τM。

### 4.5 语义的随附性

第二个直觉是真理意义的随附性。这是 M. Kremer 在 1988 年提出的语义随附性的后裔。这个想法很简单：哪些句子属于真理的概念应该由（1）非语义词汇的解释和（2）经验事实来确定。在非循环的情况下，这个直觉特别强烈：对“雪”和“白色”的标准解释以及雪是白色的经验事实足以确定句子“雪是白色”属于真理的概念。真理意义的随附性是这样一个命题：无论真理的意义是什么，都由基本模型 M 来确定。显然，RTT 满足这个原则。

值得看看真理理论如何违反这个原则。考虑一个真话者句子，即说自己是真的句子：

(11)

 (11) 是真的

如上所述，克里普基的三值语义允许三个真值，真（t），假（f）和既非真也非假（n）。给定一个真理语言 L 的基础模型 M=⟨D,I⟩，T 的候选解释是三值解释，即函数 h:D→{t,f,n}。给定 T 的三值解释和一个用于评估复合句的真值的方案，我们可以为 L 中的每个句子 A 指定一个真值 ValM+h(A)=t，f 或 n。三值语义的核心定理是，对于任何基础模型 M，存在一个 T 的三值解释 h，使得对于每个句子 A，我们有 ValM+h(T‘A’)=ValM+h(A)。[8]我们将称这样的 T 解释为可接受的解释。我们在这里的观点是：如果存在一个说真话的人，如（11）所示，那么 T 不仅有一个可接受的解释，而是有三个：一个根据该解释（11）为真，一个根据该解释（11）为假，一个根据该解释（11）既非真也非假。因此，给定一个基础模型 M，没有单一的“正确”解释 T。因此，三值语义似乎违反了语义的随附性。[9]

RTT 不为说真话的人（11）分配一个真值。相反，它提供了一种关于对说真话的人进行推理的分析：如果我们从一个假设 h 开始，根据该假设（11）为真，那么在修正后（11）仍然为真。如果我们从一个假设 h 开始，根据该假设（11）不为真，那么在修正后（11）仍然不为真。这就是真的概念给我们留下的全部。鉴于（11）的这种行为，RTT 告诉我们（11）既不是绝对真也不是绝对假，但这与（11）既不是真也不是假的判断完全不同。

### 4.6 对形式主义的非随附解释

我们注意到修正论形式主义的另一种解释。Yaqūb 1993 年同意 Gupta 和 Belnap 的观点，即 T-双条件式是定义性的而不是物质双条件式，并且真理的概念因此是循环的。但是 Yaqūb 以独特的方式解释了这种循环性。他认为，

> 由于某些句子的真理条件以本质的、不可简化的方式涉及到真理，这些条件只能在一个已经包含真理谓词扩展的世界中获得或失败。因此，为了使修正过程确定真理谓词的扩展，必须假设一个初始的谓词扩展。这一点可以从循环性和双值性推导出来。（1993 年，40 页）

像 Gupta 和 Belnap 一样，Yaqūb 对 T 没有特权扩展进行假设。像 Gupta 和 Belnap 一样，他认为每个由初始假设扩展生成的 T 的修正序列都能“适应（和诊断）所考虑语言中各种有问题和无问题的句子”（1993 年，41 页）。但是，与 Gupta 和 Belnap 不同的是，他从这些考虑中得出结论：“在双值语言中，真理不是随附的”（1993 年，39 页）。他在一个脚注中解释道：为了使真理成为随附的，每个句子的真理状态必须“完全由非语义事实确定”。Yaqūb 并没有明确使用概念的指示概念。但是 Yaqūb 似乎坚持这样的观点：T 的指示概念——即决定每个句子真理状态的东西——由一个特定的修正序列本身给出。而且没有一个修正序列仅仅由非语义事实，即基础模型，来确定：一个修正序列最多由一个基础模型和一个初始假设来确定。[10]

### 4.7 对句子进行分类

要根据稳定性（或接近稳定性）的概念来获得 T 的意义和基于稳定性的有效性概念，绝不是我们可以对修正序列进行的唯一用途。首先，我们可以使用修正理论的概念对句子进行相当细致的区分：有些句子在每个修正序列中都是不稳定的；其他句子在每个修正序列中都是稳定的，尽管在某些序列中是稳定真的，在其他序列中是稳定假的；等等。因此，我们可以使用修正理论的思想对各种句子的状态以及各种句子之间的关系进行细致的分析。Hsiung（2017）通过将修正序列的概念推广到有向图上的修正映射，进一步探讨了这种可能性，以便将此分析扩展到某种特定类型的句子集合，称为布尔悖论。正如 Hsiung 2022 所示，这个过程也可以反过来进行，至少在某种程度上：我们不仅可以使用修正序列（或映射）通过其修正理论模式对悖论句子进行分类，还可以根据给定的修正理论模式构造“新”的悖论。Rossi（2019）将修正理论技术与图论工具和不动点构造相结合，以在单个模型中表示悖论句子的三重分类（类似说谎者、类似说真话者和复仇句子）。

## 5. 进一步问题

### 5.1 三值语义

在上面关于真理意义的随附讨论中，我们只是简单地介绍了三值语义。给定一个真理语言 L 和一个基础模型 M，我们将可接受的三值解释定义为一个解释 h:D→{t,f,n}，使得对于 L 中的每个句子 A，ValM+h(T‘A’)=ValM+h(A)。一般来说，对于一个基础模型 M，存在许多可接受的 T 的解释。假设每个解释都是真正可接受的解释。那么三值语义就违反了 T 的意义的随附性。

另一方面，假设对于每个基础模型 M，我们可以将一个特权的可接受解释作为 T 的正确解释。Gupta 和 Belnap 提出了一些反对这种构想的考虑。（参见 Gupta＆Belnap 1993 年第 3 章。）其中一个主要论点是，中心定理即对于每个基础模型都存在一个可接受的解释，只有在底层语言在某些方面表达贫乏时才成立：例如，如果语言具有以下真值表的连接词∼，则三值方法将失败：

| A | ∼A |
| --- | ----- |
| t | f   |
| f | t   |
| n | t   |

三值方法能处理的唯一否定运算符具有以下真值表:

| A | ¬A |
| --- | ----- |
| t | f   |
| f | t   |
| n | n   |

但是考虑一下说自己是“不”真实的谎言者，在“不”这个后一种意义上。Gupta 和 Belnap 主张这个句子“在直觉上不再是悖论的”（1993 年，100 页）。RTT 的优势在于它能够描述真正悖论句子的行为：真正的谎言者在语义评估下是不稳定的：“无论我们假设它的值是什么，语义评估都会驳斥我们的假设。”三值语义只能处理“弱谎言者”，即只是弱化否定自己的句子，但不一定是悖论的：“这里有谎言者的表象，但它们是欺骗的。”

到目前为止，我们已经回顾了 Gupta 和 Belnap 对三值方法的两个抱怨，现在我们提出第三个抱怨：在三值理论中，即使语言中没有恶意引用，真理通常也表现得像一个非经典概念。在这里不定义术语，我们注意到三值方法的一种流行精确化是将 T 的正确解释视为“强克里尼方案”的“最小不动点”所给出的解释：撇开细节，即使基础模型不允许循环引用，更不用说恶意引用，这种解释总是将真值 n 赋予句子∀x(Tx∨¬Tx)。Gupta 和 Belnap 声称 RTT 有一个优势：根据修正论的方法，他们声称，当没有恶意引用时，真理总是表现得像一个经典概念。

Kremer 2010 通过将其作为一项正式主张来具体化这一主张，以针对特定的修正理论（例如 T∗或 T#，见上文定义 3.11）和特定的三值理论进行测试。事实证明，在许多三值理论中，当没有恶意引用时，真理实际上表现得像一个经典概念：例如，超估值方案的自然变体的最小不动点在没有恶意引用的情况下总是赋予 T 一个经典解释。当没有恶意引用时，如果我们采用 Gupta 和 Belnap 的理论 T∗，则可以认为真理表现得像一个经典概念，然而，Kremer 认为，如果我们改为采用 Gupta 和 Belnap 的理论 T#，情况就不是这样。Wintein 2014 进一步讨论了这个问题。从元语义的角度来看，对三值方法和修正理论方法的相对优点进行总体评估是 Pinder 2018 的核心问题。

### 5.2 两个值？

这个条目所假定的对比是在所谓的两值理论（如 RTT）和所谓的三值或其他多值竞争对手之间。人们可以认为 RTT 本身提供了无限多的语义值，例如每个可能的修订序列都有一个值。或者可以为句子提取三个语义值：范畴真，范畴假和非范畴性。

In reply, it must be granted that the RTT generates many *statuses* available to sentences. Similarly, three-valued approaches also typically generate many statuses available to sentences. The claim of two-valuedness is not a claim about statuses available to sentences, but rather a claim about the *truth values* presupposed in the whole enterprise.

### 5.3 Amendments to the RTT

We note three ways to amend the RTT. First, we might put constraints on which hypotheses are acceptable. For example, Gupta and Belnap 1993 introduce a theory, Tc, of truth based on *consistent* hypotheses: an hypothesis h is *consistent* iff the set {A:h(A)=t} is a complete consistent set of sentences. The relative merits of T∗,T# and Tc are discussed in Gupta & Belnap 1993, Chapter 6.

其次，我们可能采用比 Gupta 和 Belnap 更严格的限制政策。回想一下在第 3 节中提出的问题：当η是一个极限序数时，我们应该如何设置 Sη(d)？我们给出了一个部分答案：任何在那个阶段稳定为真[假]的对象应该在那个阶段为真[假]。我们还注意到，对于一个在阶段η之前不稳定的对象 d∈D，Gupta 和 Belnap 1993 允许我们将 Sη(d)设置为 t 或 f。在类似的背景下，Herzberger 1982a 和 1982b 将不稳定对象的值设为 f。而 Gupta 最初在 Gupta 1982 中建议，不稳定元素接收初始假设 S0 中接收的任何值。

这两种修正真理理论的方式实际上都限制了修正序列的概念，通过对哪些修正序列真正被视为可接受的修正序列施加限制。这些限制在某种意义上是局部的：第一个限制通过对可以使用的假设施加限制来实现，而第二个限制通过对极限序数处发生的情况施加限制来实现。第三个选项是对被认为是可接受的假设修正序列施加更全局的限制。Yaqūb 1993 建议，实际上，一个限制规则，即在某个极限阶段η上对不稳定句子的可接受判决取决于在其他极限阶段上作出的判决。Yaqūb 认为，这些限制使我们能够避免某些“人为构造物”。例如，假设一个基础模型 M=⟨D,I⟩具有两个独立的说谎者，通过具有两个名称α和β，其中 I(α)=¬Tα和 I(β)=¬Tβ。Yaqūb 认为，修正语义学的天真呈现存在修正序列，其中句子¬Tα≡¬Tβ是稳定为真的，因为这两个说谎者是独立的，这只是一个“人为构造物”。他的全局限制被制定出来排除这样的序列。（有关进一步讨论，请参见 Chapuis 1996。）

第一和第二种修改 RTT 的方式在某种意义上由 Campbell-Moore（2019）合并在一起。在这里，对象的稳定性概念被扩展到假设集合：如果存在某个序数θ，使得所有假设 Sζ（其中ζ≥θ）都属于 H，则假设集合 H 在假设序列 S 中是稳定的。基于此，我们可以引入 P-修正序列的概念：如果 P 是一类假设集合，那么序列 S 是一个 P-修正序列，只要在每个极限序数η处，如果假设集合 H 属于 P 并且在 S 中是稳定的，则 Sη属于 H。可以证明，对于适当选择的 P，P-修正序列的所有极限阶段都是最大一致的假设。

### 5.4 循环定义概念的修正理论

如我们在第 4 节中讨论的“当且仅当”在 T-双条件中所示，Gupta 和 Belnap 将 RTT 作为循环定义概念的修正理论的特例。重新考虑第 4 节中的例子。假设 L 是一个具有一元谓词 F 和二元谓词 R 的语言。考虑通过定义 D 引入的谓词 G 来表示的新概念，定义如下：

Gx=dfA(x,G)

其中 A(x,G)是公式

∀y(Ryx⊃Fx)∨∃y(Ryx&Gx).

在这个背景下，一个基础模型是语言 L 的一个经典模型 M=⟨D,I⟩：我们从一个论域 D 和谓词 F 以及关系符号 R 的解释开始。我们希望将 M 扩展为语言 L+G 的解释。因此，在这个背景下，一个假设将被视为对新引入的概念 G 的假设性扩展。形式上，一个假设只是一个函数 h:D→{t,f}。给定一个假设 h，我们将 M+h 视为经典模型 M+h=⟨D,I′⟩，其中 I′以与 I 相同的方式解释 F 和 R，并且 I′(G)=h。给定对 G 的假设性解释 h，我们按以下方式生成 G 的新解释：对于任意对象 d∈D，如果在模型 M+h 中定义公式 A(x,G)对 d 成立，则 d 属于 G 的新扩展。形式上，我们使用基础模型 M 和定义 D 来定义一个修正规则δD,M，将假设映射到假设，即将对 G 的假设性解释映射到对 G 的假设性解释。特别地，对于任意带有一个自由变量 x 的公式 B 和 d∈D，我们可以按照标准方式定义真值 ValM+h,d(B)。然后，

δD,M(h)(d)=ValM+h,d(A)

给定修正规则δD,M，我们可以推广修正序列的概念，现在是对 G 的假设性扩展的序列，而不是对 T 的序列。我们可以相对于修正序列推广句子 B 相对于修正序列的稳定真值、几乎稳定真值等概念。Gupta 和 Belnap 引入了系统 S∗和 S#，类似于 T∗和 T#，如下所示：[11]

> **定义 5.1。**
>
> * 如果在系统 S∗中，基础模型 M 中的定义 D 上的句子 B 在修正规则δD,M 的每个修正序列中相对稳定地为真，则句子 B 在定义 D 上在基础模型 M 中是有效的（表示为 M⊨∗,DB）。
> * 如果在系统 S#中，基础模型 M 中的定义 D 上的句子 B 在修正规则δD,M 的每个修正序列中相对近乎稳定地为真，则句子 B 在定义 D 上在基础模型 M 中是有效的（表示为 M⊨#,DB）。
> * 在系统 S∗（符号⊨∗，DB）中，如果对于所有经典基模 M，我们有 M⊨∗，DB，则定义 D 上的句子 B 在此定义上是有效的。
> * 在系统 S#（符号⊨#，DB）中，如果对于所有经典基模 M，我们有 M⊨#，DB，则定义 D 上的句子 B 在此定义上是有效的。

Gupta 和 Belnap 的一个主要问题是是否存在这些系统的完备演算法：也就是说，对于每个定义 D，以下两组句子之一是否是可递归公理化的：{B:⊨∗，DB}和{B:⊨#，DB}。Kremer 1993 证明了答案是否定的：他证明了存在一个定义 D，使得这两组句子的复杂度至少为Π12，从而限制了 S∗和 S#的复杂度的下限。（Antonelli 1994a 和 2002 证明了这也是一个上限。）

Kremer 的证明利用了在修正论上理解的循环定义和在归纳定义上理解的循环定义之间的密切关系：归纳定义理论在一段时间内已经被很好地理解。特别是，Kremer 证明了每个归纳定义的概念都可以在修正论上进行定义。关于循环定义的修正论处理的表达能力和其他方面是一个非常有趣的研究课题：参见 Welch 2001，Löwe 2001，Löwe 和 Welch 2001 以及 Kühnberger 等人的 2005 年的研究。

除了 Kremer 的限制性结果之外，还有一个积极的观察结果，即对于基于受限修正序列的某些语义定义系统，存在着完备和正确的演算法。例如，Gupta 和 Belnap 给出了一些仅使用有限修正序列的演算法和修正论系统的示例。对于捕捉一些修正论语义系统的证明论演算法的进一步研究在 Bruni 2013，Standefer 2016，Bruni 2019 和 Fjellstad 2020 中进行。

### 5.5 真理的公理化理论和修正论

RTT 是一个明显的以语义为动机的真理理论的典型例子。完全不同的传统寻求给出一个令人满意的真理公理化理论。我们承认，如果允许恶性自指，我们无法保留所有经典逻辑和关于真理的直观原则。但也许我们可以得出令人满意的真理公理系统，例如保持一致性和经典逻辑，但在涉及我们关于真理的直观原则时只放弃一点点，比如 T-双条件（经典解释）；或者保持一致性和所有 T-双条件，但只放弃一点点经典逻辑。Halbach 2011 全面研究了这样的公理化理论（主要是保留经典逻辑的理论），Horsten 2011 也是同一传统。Halbach 2011 的第 14 章和 Horsten 2011 的第 8 章都研究了 Friedman-Sheard 理论 FS 与修正语义之间的关系，并得出了一些有趣的结果。有关公理系统和 RTT 的更多研究，请参阅 Horsten 等人的 2012 年的工作。

2008 年的 Field 领域对公理化真理理论做出了有趣的贡献，尽管该书中大部分的积极工作都是模型构建，因此属于语义学。特别是，Field 对于产生一个尽可能接近经典逻辑的理论感兴趣，该理论保留了所有的 T-双条件（条件本身将是非经典的），同时在某种意义上可以表达这样一个主张：某个句子是有缺陷的。Field 使用多值逻辑、不动点语义和修正论来构建模型，以实际上展示一个非常有吸引力的公理系统是一致的。Field 的构造是使用不动点构造来逐步解释 T，以及使用修正序列来逐步解释非经典条件的复杂相互作用 - 最终解释是由一种超修正论过程确定的。

修正和 Field 的理论之间的联系在 Standefer 2015b 和 Gupta 和 Standefer 2017 中进一步探讨。

### 5.6 应用

鉴于古普塔和贝尔纳普对循环定义的普遍修正论处理 - 其中真理的处理是一个特例 - 人们预计修正论思想将被应用于其他概念。安东内利（Antonelli）1994b 将这些思想应用于非良基集合：非良基集合 X 可以被视为循环的，因为对于某些 X0，...，Xn，我们有 X∈X0∈...∈Xn∈X。Chapuis 2003 将修正论思想应用于理性决策。这一联系由 Bruni 2015 和 Bruni 和 Sillari 2018 进一步发展。有关修正论和抽象对象的讨论，请参见 Wang 2011。有关修正论和模糊性的讨论，请参见 Asmus 2013。

Standefer（2015a）研究了修正论循环定义与特定模态逻辑 RT（“修正论”）之间的联系。Campbell-Moore 等人。2019 和 Campbell-Moore 2021 分别使用修正序列来建模概率和确信度。Cook 2019 采用修正论分析来找到 Benardete 版本的 Zeno 悖论的新可能解决方案。

近年来，人们越来越关注弥合关于真理本质的经典辩论 - 紧缩论、符合论、极简主义、实用主义等 - 与基于说谎者悖论的真理的形式工作之间的鸿沟。RTT 与 Belnap 2006 的句式主义相关；与紧缩论相关，由 Yaqūb 2008 提出；与极简主义相关，由 Restall 2005 提出。

我们还必须提到 Gupta 2006。在这项工作中，Gupta 认为，经验不是直接赋予体验者一个命题的权利，而是赋予一个假设性的权利：正如 Berker 2011 所解释的那样，如果主体 S 有经验 e 并有权持有观点 v（其中 S 的观点是 S 的概念、构想和信念的总体），那么 S 有权相信一定类别的知觉判断，Γ(v)。（Berker 在他的表述中使用“命题”而不是“知觉判断”）但是这引发了一个问题：S 如何有权持有一个观点？在观点的权利和知觉判断的权利之间似乎存在循环相互依赖。在这里，Gupta 诉诸于修正论的一般形式——超越了真理修正论和循环定义概念修正论（上文第 5.4 节）——以解释“假设性知觉权利如何产生范畴性权利”（Berker 2011）。

### 5.7 一个未解之谜

我们以一个关于 T∗和 T#的未解之谜作为结束。回顾上文第 3.11 定义，该定义通过 T∗或 T#来定义一个真理语言 L 中的句子 A 在基础模型 M 中是否有效。我们将说，如果对于每个基础模型 M，A 通过 T∗[或者 T#]是有效的，那么 A 通过 T∗[或者 T#]在基础模型 M 中是有效的。我们的未解之谜是：通过 T∗[T#]有效的句子集合的复杂性是多少？

<!--md-padding-ignore-begin-->
## Bibliography

* Antonelli, G.A., 1994a, “The complexity of revision”, *Notre Dame Journal of Formal Logic*, 35: 204–218.
* –––, 1994b, “Non-well-founded sets via revision rules”, *Journal of Philosophical Logic*, 23: 633–679.
* –––, 2002, “The complexity of revision, revised”, *Notre Dame Journal of Formal Logic*, 43: 75–78.
* Asmus C.M., 2013, “Vagueness and revision sequences”, *Synthese*, 190: 953–974.
* Belnap, N., 1982, “Gupta’s rule of revision theory of truth”, *Journal of Philosophical Logic*, 11: 103–116.
* –––, 2006, “Prosentence, Revision, Truth, and Paradox”, *Philosophy and Phenomenological Research*, 73: 705–712.
* Berker S., 2011, “Gupta’s gambit”, *Philosophical Studies*, 152: 17–39.
* Bruni, R., 2013, “Analytic calculi for circular concepts by finite revision”, *Studia Logica*, 101(5): 915–932.
* –––, 2015, “Some remarks on the finite theory of revision”, in *Unifying the Philosophy of Truth*, Achourioti *et al*. (eds.), Dordrecht: Springer, 169–187.
* –––, 2019, “Addressing circular definitions via systems of proofs”, in *Mathesis Universalis, Computability and Proof* (Synthese Library 412), Centrone *et al*. (eds.), Cham: Springer, 75–100.
* Bruni, R., and Sillari, G., 2018, “A rational way of playing: Revision theory for strategic interaction”, *Journal of Philosophical Logic*, 47(3): 419–448.
* Campbell-Moore, C., 2019, “Limits in the revision theory”, *Journal of Philosophical Logic*, 48(1): 11–35.
* –––, 2021, “Indeterminate Truth and Credences”, in *Modes of Truth* (Routledge Studies in Contemporary Philosophy), London: Routledge, 182–208.
* Campbell-Moore, C., Horsten, L., and Leitgeb, H., 2019, “Probability for the revision theory of truth”, *Journal of Philosophical Logic*, 48(1): 87–112.
* Chapuis, A., 1996, “Alternate revision theories of truth”, *Journal of Philosophical Logic*, 25: 399–423.
* –––, 2003, “An application of circular definitions: rational decision”, in Löwe, Malzkorn, and Räsch (eds.), *Foundations of the Formal Sciences II: Applications of Mathematical Logic in Philosophy and Linguistics*, Dordrecht: Kluwer, 47–54.
* Cook, R. T., 2019, “Revising Benardete’s Zeno”, *Journal of Philosophical Logic*, 48(1): 37–56.
* Field H., 2008, *Saving Truth from Paradox*, Oxford: Oxford University Press.
* Fjellstad, A., 2020, “Herzberger’s limit rule with labelled sequent calculus”, *Studia Logica*, 108(4): 815–855.
* Gupta, A., 1982, “Truth and paradox”, *Journal of Philosophical Logic*, 11: 1–60.
* –––, 2006, *Empiricism and Experience*, Oxford: Oxford University Press.
* Gupta, A., and Belnap, N., 1993, *The Revision Theory of Truth*, Cambridge, MA: MIT Press.
* Gupta, A., and Standefer, S., 2017, “Conditionals in theories of truth”, *Journal of Philosophical Logic*, 46(1): 27–63.
* Halbach, V., 2011, *Axiomatic Theories of Truth*, Cambridge: Cambridge University Press.
* Hammer, E., 2003, “The Revision Theory of Truth”, *The Stanford Encyclopedia of Philosophy* (Spring 2003 Edition), Edward N. Zalta (ed.), URL = <[The Revision Theory of Truth (Stanford Encyclopedia of Philosophy/Spring 2003 Edition)](https://plato.stanford.edu/archives/spr2003/entries/truth-revision/)>.
* Herzberger, H.G., 1982, “Notes on naive semantics”, *Journal of Philosophical Logic*, 11: 61–102.
* –––, 1982, “Naive semantics and the liar paradox”, *Journal of Philosophy*, 79: 479–497.
* Horsten, L., 2011, *The Tarskian Turn: Deflationism and Axiomatic Truth*, Cambridge, MA: MIT Press.
* Horsten, L., Leigh, G.E., Leitgeb, H., and Welch, P., 2012, “Revision Revisited”, *The Review of Symbolic Logic*, 5: 642–665.
* Hsiung, M., 2017, “Boolean paradoxes and revision periods”, *Studia Logica*, 105(5): 881–914.
* –––, 2022, “Designing Paradoxes: A Revision-theoretic Approach”, *Journal of Philosophical Logic*, 51: 739–789.
* Kremer, M., 1988, “Kripke and the logic of truth”, *Journal of Philosophical Logic*, 17: 225–78.
* Kremer, P., 1993, “The Gupta-Belnap systems S# and S∗ are not axiomatisable”, *Notre Dame Journal of Formal Logic*, 34: 583–596.
* –––, 2010, “How Truth Behaves When There’s No Vicious Reference”, *Journal of Philosophical Logic*, 39: 345–367.
* Kripke, S., 1975, “Outline of a theory of truth”, *Journal of Philosophy*, 72: 690–716.
* Kühnberger, K., Löwe, B., Möllerfeld, M., and Welch, P., 2005, “Comparing inductive and circular definitions: parameters, complexity and games”, *Studia Logica*, 81: 79–98.
* Löwe, B., 2001 “Revision sequences and computers with an infinite amount of time”, *Journal of Logic and Computation*, 11: 25–40.
* Löwe, B., and Welch, P., 2001, “Set-theoretic absoluteness and the revision theory of truth”, *Studia Logica*, 68(1): 21–41.
* Martin, R., and Woodruff, P., 1975, “On representing ‘True-in-L’ in L”, *Philosophia*, 5: 217–221.
* Pinder, M., 2018, “How to find an attractive solution to the liar paradox”, *Philosophical Studies*, 175(7): 1661–1680.
* Restall, G., 2005, “Minimalists about Truth Can (and Should) Be Epistemicists, and it Helps if They Are Revision Theorists too”, in *Deflation and Paradox*, JC Beall and B. Armour-Garb (eds.), Oxford: Oxford University Press, 97–106.
* Rossi, L., 2019, “A unified theory of truth and paradox”, *The Review of Symbolic Logic*, 12(2): 209–254.
* Standefer, S., 2015a, “Solovay-type theorems for circular definitions”, *The Review of Symbolic Logic*, 8(3): 467–487.
* –––, 2015b, “On artifacts and truth-preservation”, *Australasian Journal of Logic*, 12(3): 135–158.
* –––, 2016, “Contraction and revision”, *Australasian Journal of Logic*, 13(3): 58–77.
* Wang, W., 2011, “Theories of abstract objects without ad hoc restriction”, *Erkenntnis* 74: 1–15.
* Welch, P., 2001, “On Gupta-Belnap revision theories of truth, Kripkean fixed points, and the Next stable set”, *Bulletin for Symbolic Logic*, 7: 345–360.
* Wintein, S., 2014, “Alternative Ways for Truth to Behave When There’s no Vicious Reference”, *Journal of Philosophical Logic* 43: 665–690.
* Yaqūb, A., 1993, *The Liar Speaks the Truth : A Defense of the Revision Theory of Truth*, Oxford: Oxford University Press.
* –––, 2008, “Two types of deflationist”, *Synthese*, 165: 77–106.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=truth-revision). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/truth-revision/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=truth-revision&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/truth-revision/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* Hammer, E., 2003, “The Revision Theory of Truth”, *The Stanford Encyclopedia of Philosophy* (Spring 2003 Edition), Edward N. Zalta (ed.), URL = <[The Revision Theory of Truth (Stanford Encyclopedia of Philosophy/Spring 2003 Edition)](https://plato.stanford.edu/archives/spr2003/entries/truth-revision/)>. (This was the entry on the revision theory of truth which appeared in the active portion of the SEP from 1997–2006.)

## Related Entries

[Curry’s paradox](https://plato.stanford.edu/entries/curry-paradox/) | [definitions](https://plato.stanford.edu/entries/definitions/) | [liar paradox](https://plato.stanford.edu/entries/liar-paradox/) | [Tarski, Alfred: truth definitions](https://plato.stanford.edu/entries/tarski-truth/) | [truth](https://plato.stanford.edu/entries/truth/) | [truth: axiomatic theories of](https://plato.stanford.edu/entries/truth-axiomatic/)

[Copyright © 2023](https://plato.stanford.edu/info.html#c) by  
[Philip Kremer](http://individual.utoronto.ca/philipkremer/)  
[Edoardo Rivello](https://unito.academia.edu/EdoardoRivello) <[*edoardo.rivello@unito.it*](mailto:edoardo%2erivello%40unito%2eit)>
<!--md-padding-ignore-end-->
