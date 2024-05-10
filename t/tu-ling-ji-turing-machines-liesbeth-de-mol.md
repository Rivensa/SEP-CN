# 图灵机 Turing machines (Liesbeth De Mol)

*首次发布于 2018 年 9 月 24 日星期一*

图灵机，由艾伦·图灵在 1936-7 年首次描述，是一种简单的抽象计算设备，旨在帮助研究计算的范围和限制。图灵在 1936 年称之为“自动机”，专门用于计算实数。阿隆佐·丘奇在对图灵的论文进行评论时首次将其命名为“图灵机”（丘奇 1937）。如今，它们被认为是可计算性和（理论）计算机科学的基础模型之一。[1]

---

## 1. 图灵机的定义

### 1.1 图灵的定义

图灵在研究数学基础时引入了图灵机。更具体地说，他使用这些抽象设备证明了以下问题没有有效的一般方法或过程来解决、计算或计算每个实例：

> Entscheidungsproblem 对于一阶逻辑中的每个陈述（即所谓的受限功能演算，详见古典逻辑条目进行介绍），决定是否可以在该逻辑中推导出来的问题。

注意，在其原始形式（Hilbert＆Ackermann 1928）中，该问题是以有效性而不是可推导性的术语来陈述的。鉴于哥德尔的完备性定理（Gödel 1929）证明了对于可推导性是否存在有效的过程（或不存在），这也是该问题在有效性形式下的解决方案。为了解决这个问题，需要一个形式化的“有效过程”的概念，而图灵机正是为此而设计的。

一个图灵机，或者图灵称之为计算机的计算机，在图灵的原始定义中，是一台能够具有有限配置 q1,…,qn（机器的状态，图灵称之为 m-配置）的机器。它配备了一个单向无限且一维的带子，带子被分成能够携带一个符号的方格。在任何时刻，机器正在扫描一个方格 r 的内容，该方格要么为空（用 S0 表示），要么包含一个符号 S1,…,Sm，其中 S1=0 且 S2=1。

该机器是一台自动机（a-机器），这意味着在任何给定时刻，机器的行为完全由当前状态和正在扫描的符号（称为配置）决定。这就是所谓的确定性条件（第 3 节）。这些 a-机器与所谓的选择机器相对应，对于选择机器，下一个状态取决于外部设备或操作员的决策（图灵 1936-7：232）。图灵机能够执行三种类型的动作：

1. 打印 Si，向左移动一个方格（L）并转到状态 qj
2. 打印 Si，向右移动一个方格（R），并转到状态 qj
3. 打印 Si，不移动（N），并转到状态 qj

图灵机的“程序”可以写成一组有限的五元组形式：

 qiSjSi,jqi,j

其中 qi 是当前状态，Sj 是正在扫描的方格的内容，Si,j 是方格的新内容；Mi,j 指定机器是向左移动一个方格，向右移动一个方格还是保持在同一个方格，qi,j 是机器的下一个状态。这些五元组也被称为给定机器的转换规则。当从空白纸带开始运行时，图灵机 TSimple 计算序列 S0S1S0S1…如表 1 所示。

表 1：TSimple 的五元组表示

;q1S0S0Rq2;q1S1S0Rq2;q2S0S1Rq1;q2S1S1Rq1

注意，TSimple 永远不会进入扫描 S1 的配置，因此四个五元组中有两个是多余的。图灵还使用了另一种表示图灵机的典型格式，即转换表。表 2 给出了 TSimple 的转换表。

表 2：TSimple 的转换表

|    | S0    | S1    |
| ---- | ------- | ------- |
| q1 | S0Rq2 | S0Rq2 |
| q2 | S1Rq1 | S1Rq1 |

当前图灵机的定义通常只有一种类型的符号（通常只有 0 和 1；Shannon 证明任何图灵机都可以简化为二进制图灵机（Shannon 1956））。而图灵在他对所谓的计算机的最初定义中使用了两种类型的符号：完全由 0 和 1 组成的数字和所谓的第二类符号。这些符号在图灵机带上通过使用一种交替的数字和第二类符号的方块系统来区分。一个交替方块序列包含数字并被称为 F 方块序列。它包含机器计算的序列；另一个被称为 E 方块序列。后者用于标记 F 方块并用于“辅助记忆”（图灵 1936-7：232）。E 方块的内容可能会改变。然而，F 方块不能改变，这意味着无法实现需要更改先前计算的数字的算法。此外，如果尚未计算 F 方块，则机器永远不会在 F 方块上打印符号。F 和 E 方块的使用可能非常有用（参见第 2.3 节），但正如 Emil L. Post 所示，它会导致一系列复杂性问题（参见第 1.2 节）。

图灵机设置有两个重要的注意事项。第一个关于机器本身的定义，即机器的带是潜在无限的。这对应于机器内存是（潜在）无限的假设。第二个关于图灵可计算的定义，即如果存在一组指令，使得图灵机在无论花费多长时间的情况下都能计算出函数，则该函数将被认为是图灵可计算的。可以将其视为假设有潜在无限的时间来完成计算。

这两个假设旨在确保所得到的计算定义不会过于狭窄。也就是说，它确保没有可计算函数会因为时间或内存不足而无法进行图灵计算。因此，可能存在一些图灵可计算的函数，但由于没有现有的机器具有足够的内存来完成任务，可能无法由任何现有的计算机执行。一些图灵可计算的函数可能在实践中永远无法计算，因为它们可能需要的内存超过了宇宙中所有（有限数量的）原子所能构建的内存。此外，如果我们假设物理计算机是图灵机的有限实现，并且图灵机作为计算机的良好形式模型，那么一个显示某个函数不是图灵可计算的结果是非常强大的，因为它意味着我们永远无法构建出能够执行该计算的计算机。在第 2.4 节中，将展示一些不是图灵可计算的函数。

### 1.2 波斯特的定义

图灵的定义是通过波斯特在 1947 年对其进行的修改（部分）来标准化的。在那篇论文中，波斯特证明了一个被称为图的问题或半群的字问题的数学问题不是图灵可计算的（或者用波斯特的话来说，是递归不可解的）。波斯特的主要策略是证明，如果它是可判定的，那么图灵在 1936-7 年提出的以下决策问题也将是可判定的：

> PRINT?决定对于每个图灵机 M，它是否会打印某个符号（例如，0）的问题。

然而，图灵证明了 PRINT?是不可图灵计算的，因此 Thue 的问题也是如此。

虽然 PRINT?的不可计算性在 Post 的证明中起着核心作用，但 Post 认为图灵的证明受到了“虚假的图灵约定”的影响（Post 1947: 9），即 F 和 E 方块系统。因此，Post 引入了图灵机的修改版本。Post 和图灵定义之间最重要的区别是：

1. 图灵机在给定状态下，要么打印，要么移动，因此其转换规则更加“原子化”（它没有移动和打印的复合操作）。这导致了图灵机的四元符号表示法，其中每个四元组都属于表 3 的三种形式之一：

表 3：图灵机的四元符号表示法

qiSjSi,jqi,jqiSjLqi,jqiSjRqi,j

2. 艾伦·图灵的图灵机只有一种符号，因此不依赖于 F 和 E 方块的图灵系统。
3. 艾伦·图灵的图灵机有一个双向无限的纸带。
4. 艾伦·图灵的图灵机在达到没有定义动作的状态时停止。

注意，Post 对图灵机的改进在很大程度上源自他 1936 年的文章。Post 对图灵定义的修改成为了标准著作（如 Kleene 1952 和 Davis 1958）中图灵机定义的一部分。自那时以来，已经引入了几个（逻辑上等价的）定义。如今，图灵机的标准定义在某些方面更接近于 Post 的图灵机而不是图灵的机器。在接下来的内容中，我们将使用 Minsky 1967 中的标准定义的变体，该定义使用五元组符号，但没有 E 和 F 方块，并包括一个特殊的停机状态 H。它还只有两个移动操作，即 L 和 R，因此机器仅仅打印的动作不被使用。当机器启动时，磁带除了一部分有限的内容外是空白的。请注意，空白方块也可以表示为包含符号 S0 或简单的 0 的方块。磁带上有限的内容也被称为磁带上的数据字。

### 1.3 定义的形式化

“磁带”和“读写头”的讨论旨在帮助直觉（并揭示了图灵写作时的一些情况），但在图灵机的定义中并不起重要作用。在需要对图灵机进行形式分析的情况下，适当地用更数学化的术语来详细说明机器和程序的定义是合适的。纯粹形式上，图灵机可以被指定为一个四元组 T=(Q,Σ,s,δ)，其中：

* Q 是有限状态集合 q
* Σ是有限符号集合
* s 是初始状态 s∈Q
* δ是确定下一步移动的转换函数：
  δ:(Q×Σ)→(Σ×{L,R}×Q)

机器 T 的转换函数是从计算状态到计算状态的函数。如果δ(qi,Sj)=(Si,j,D,qi,j)，那么当机器的状态为 qj，读取符号 Sj 时，T 将 Sj 替换为 Si,j，向方向 D∈{L,R}移动，并进入状态 qi,j。

### 1.4 描述图灵机的行为

我们引入一种表示方法，允许我们描述图灵机 Tn 的行为或动态，依赖于完整配置的符号表示（图灵 1936-7: 232），今天也被称为瞬时描述（ID）（戴维斯 1982: 6）。在 Ti 的计算的任何阶段，其 ID 由以下内容给出：

* （1）磁带的内容，即其数据词
* (2)读头的位置
* (3)机器的内部状态

因此，给定某个处于状态 qi 并扫描符号 Sj 的图灵机 T，其 ID 由 PqiSjQ 给出，其中 P 和 Q 是包含符号 Sj 的方块左侧和右侧的有限字。图 1 给出了一个处于状态 qi 并扫描磁带的某个图灵机 T 的 ID 的可视化表示。

![一个水平的拼接的方框 0 和 1 的条带，条带的左右两端是不规则的。从左到右的数字是 01001100000010000000。从左边数第六个 0 是红色的，并且标签指向它，说明\qi 0 0 R qi, 0](https://plato.stanford.edu/entries/turing-machine/TM_basic0.svg)

图 1：某个图灵机 T 的完整配置

因此，这种表示法允许我们通过连续的 ID 来捕捉机器和它的纸带的发展行为。图 2 使用图形表示给出了 TSimple 的前几个连续的 ID。

![一个水平的拼接的方框 0 的条带，条带的左右两端是不规则的。从左边数第三个 0 是红色的，并且有一个标签指向它，上面写着\q1 0 0 R q2](https://plato.stanford.edu/entries/turing-machine/Simple1.svg)

图 2：TSimple 的动态图形表示

可以通过点击图片来启动动画。也可以使用它们的符号表示显式打印连续的 ID。这将得到一个图灵机行为的状态空间图。因此，对于 TSimple，我们得到（注意，¯¯¯0 表示 0 的无限重复）：

¯¯¯0q10¯¯¯0¯¯¯00q20¯¯¯0¯¯¯001q10¯¯¯0¯¯¯0010q20¯¯¯0¯¯¯00101q10¯¯¯0¯¯¯001010q20¯¯¯0⋮

## 2. 使用图灵机进行计算

如第 1.1 节所解释的那样，图灵机最初是为了形式化可计算性的概念，以解决数学的一个基本问题。与图灵独立地，阿隆佐·邱奇提出了一个不同但逻辑上等价的表述（见第 4 节）。今天，大多数计算机科学家都同意图灵的，或者任何其他逻辑上等价的，形式化概念能够涵盖所有可计算问题，即对于任何可计算问题，都存在一个能够计算它的图灵机。这被称为邱奇-图灵论题，图灵论题（当只涉及图灵的工作时）或邱奇论题（当只涉及邱奇的工作时）。

这意味着，如果被接受，任何图灵机无法计算的问题都无法通过任何有限的方式计算。确实，由于图灵的野心是捕捉“在计算一个数字时可以执行的所有可能过程”（图灵 1936-7：249），所以如果我们接受图灵的分析：

* 任何图灵机无法计算的问题在绝对意义上都不是“可计算的”（至少相对于人类来说，参见第 3 节）。
* 对于我们认为可计算的任何问题，我们应该能够构建一个能够计算它的图灵机。用图灵的措辞来说：

  > 我认为[计算机的]操作包括用于计算数字的所有操作。(艾伦·图灵 1936-7: 231)
  >

在本节中，将给出一些例子，以说明图灵机模型的计算能力和边界。第 3 节讨论了与图灵的论文相关的一些哲学问题。

### 2.1 一些（简单）例子

为了谈论一个从人类角度来看有用的图灵机，我们必须提供对磁带上记录的符号的解释。例如，如果我们想设计一台能计算某个数学函数（比如加法）的机器，那么我们需要描述如何将磁带上出现的 1 和 0 解释为数字。

在接下来的例子中，我们将把数字 n 表示为磁带上 n+1 个符号'1'的块。因此，我们将把数字 0 表示为单个'1'，将数字 3 表示为一个由四个'1'组成的块。这被称为一元表示法。

为了解释计算过程，我们还需要对机器启动时和结束时的磁带配置做一些假设。我们假设如果要计算的函数需要 n 个参数，那么图灵机将从扫描最左边的一个由 n 个'1'块组成的序列的'1'开始。表示参数的'1'块之间必须用一个'0'符号分隔。例如，要计算 3+4 的和，图灵机将从图 3 所示的配置开始。

![一个水平的条形拼接的方框 0 和 1，条形的左右两端是不规则的。从左到右的数字是 00111101111100000000。从左边开始的第一个 1 是红色的，带有一个指向它的标签，标签上写着\q1 j R q1](https://plato.stanford.edu/entries/turing-machine/Initial.svg)

图 3：对两个数字 n 和 m 进行计算的初始配置

这里假设的加法机器接受两个参数，表示要相加的数字，从第一个参数的最左边的 1 开始。参数之间用一个单独的 0 分隔，第一个块包含四个'1'，表示数字 3，第二个块包含五个'1'，表示数字 4。

一台机器也必须以标准配置完成。必须有一个符号块（表示某个数字的一串 1 或表示另一种输出的符号）并且机器必须在扫描该序列的最左边符号。如果机器正确计算函数，则该块必须表示正确答案。

采用这种终止配置的图灵机约定意味着我们可以通过将一个机器的最终状态与下一个机器的初始状态进行标识来组合机器。

##### 两个数字 n 和 m 的相加

表 4 给出了图灵机 TAdd2 的转换表，该机器将两个自然数 n 和 m 相加。我们假设机器从状态 q1 开始，扫描 n+1 的最左边的 1。

表 4：TAdd2 的转换表

|    | 0    | 1       |
| ---- | ------ | --------- |
| q1 | /    | 0Rq2    |
| q2 | 1Lq3 | 1Rq2    |
| q3 | 0Rq4 | 1Lq3    |
| q4 | /    | 0Rqhalt |

使用图灵机进行一元表示的加法的思想是将最左边的数字 n 向右移动一格。这是通过擦除 n+1 的最左边的 1（在状态 q1 中完成）然后将 n+1 和 m+1 之间的 0 设置为 1（状态 q2）来实现的。然后我们有 n+m+2，所以我们仍然需要擦除一个额外的 1。这是通过擦除最左边的 1（状态 q3 和 q4）来完成的。图 4 显示了 3+4 的计算过程。

![一个水平的条形图，由连接的方框 0 和 1 组成，条形图的左右两端是不规则的。从左到右的数字是 00111101111100000000。从左边开始的第一个 1 是红色的，并标有\q1 1 0 R q2](https://plato.stanford.edu/entries/turing-machine/tm1.svg)

图 4：通过 TAdd2 计算 3+4

##### n 个数字的相加

我们可以将 TAdd2 推广为图灵机 TAddi，用于对任意数量的整数 n1，n2，...，nj 进行加法。我们再次假设机器从状态 q1 开始扫描 n1+1 的最左边的 1。这样的机器 TAddi 的转换表如表 5 所示。

表 5：TAddi 的转换表

|    | 0       | 1    |
| ---- | --------- | ------ |
| q1 | /       | 0Rq2 |
| q2 | 1Rq3    | 1Rq2 |
| q3 | 0Lq6    | 1Lq4 |
| q4 | 0Rq5    | 1Lq4 |
| q5 | /       | 0Rq1 |
| q6 | 0Rqhalt | 1Lq6 |

机器 TAddi 使用了将被加数向右移动的原理，这也是 TAdd2 所使用的原理。更具体地说，TAddi 从左到右计算 n1+1，n2+1，...，ni+1 的和，即它按以下方式计算这个和：

N1=n1+n2+1N2=N1+n3N3=N2+n4⋮Ni=Ni−1+ni+1

最重要的区别在于 TAdd2 和 TAddi 之间，TAddi 需要验证最左边的加数 Nj，1<j≤i 是否等于 Ni。这是通过检查 Nj 右边的第一个 0 后面是否还有一个 0 来实现的（状态 q2 和 q3）。如果不是这种情况，则至少还有一个加数 nj+1 需要相加。请注意，与 TAdd2 的情况一样，机器需要从加数 nj+1 中擦除一个额外的 1，这是通过状态 q5 完成的。然后它回到状态 q1。另一方面，如果 Nj=Ni，则机器移动到 Ni=n1+n2+…+ni+1 的最左边的 1 并停止。

### 2.2 可计算数和问题

图灵的原始论文涉及可计算（实数）。如果存在一台图灵机可以计算出对该数字的任意精确逼近，则该（实）数是图灵可计算的。所有代数数（具有代数系数的多项式的根）和许多超越数学常数，如 e 和π，都是图灵可计算的。图灵给出了几个由图灵机可计算的数字类的示例（参见图灵 1936-7 年的第 10 节“可计算的大类数字的示例”），作为一种启发性论证，表明图灵机可以计算出各种各样的数字类。

然而，人们可能会想知道，以数字进行计算，即计算，如何捕捉非数字但可计算的问题，以及图灵机如何捕捉确定某事是真实还是不真实的所有一般和有效的过程。此类问题的示例包括：

* “对于任何给定的 x，决定 x 是否表示一个素数”
* “decide for any given *x* whether or not *x* is the description of a Turing machine”.

In general, these problems are of the form:

* “decide for any given *x* whether or not *x* has property *X*”

无论是在理论上还是在计算方面的具体进展中（通常与其他学科的接口），提供对 X 的解释以便进行计算处理已成为一个重要挑战。举一个具体例子，在日常的计算实践中，对于任何数字“源”，能否信任它可能是重要的，因此需要对信任进行计算解释。

谓词的特征函数是一个函数，当给定适当的参数时，它的值为 TRUE 或 FALSE。为了使这样的函数可计算，图灵依赖于哥德尔的洞察力，即这类问题可以编码为关于数字的问题（参见哥德尔的不完全性定理和下一节 2.3）。用图灵的措辞来说：

> 表达式“存在一种确定的一般过程…”已被用作“存在一种将确定…”的等价。只有我们能够证明“可计算”的定义才能证明这种用法是合理的。对于这些“一般过程”问题中的每一个，都可以表达为关于确定给定整数 n 是否具有属性 G(n)的一般过程的问题[例如，G(n)可能意味着“n 是令人满意的”或“n 是可证明公式的哥德尔表示”]，这等价于计算一个数字，其第 n 位为 1，如果 G(n)为真，则为 0，如果为假。（1936-7：248）

艾伦·图灵的构建通用图灵机及其在证明存在一些无法由图灵机计算的问题中的使用，关键在于将“一般过程”问题编码为数值问题的可能性。

### 2.3 图灵的通用机器

为了证明某些问题的不可计算性而构建的通用图灵机，粗略地说，是一台能够计算任何其他图灵机计算的图灵机。假设图灵机概念完全捕捉了可计算性（因此图灵的论题成立），则可以推断出任何可以“计算”的东西也可以被那台通用机器计算。相反，任何无法由通用机器计算的问题被认为是不可计算的。

这就是通用机器概念的修辞和理论力量，即一个相对简单的形式设备可以捕捉到“在计算一个数字时可以进行的所有可能过程”（图灵 1936-7）。这也是图灵被追溯地认定为计算机科学奠基人之一的主要原因之一（见第 5 节）。

那么如何利用我们可以使用的基本操作构建一个通用机器 U？图灵的方法是构建一个机器 U，它能够（1）“理解”任何其他机器 Tn 的程序，并基于该“理解”（2）“模仿”Tn 的行为。为此，需要一种方法，允许将程序和 Tn 的行为互换使用，因为这两个方面都在同一条带子上并由同一台机器操作。图灵通过两个基本步骤实现了这一目标：（1）开发一种符号方法，（2）开发一组基本函数，该方法将该符号视为文本进行比较、复制、擦除等操作，而不管它是形式化程序还是 Tn 的行为。换句话说，图灵开发了一种技术，可以在同一层次上处理程序和行为。

#### 2.3.1 程序和行为的互换性：一种符号化方法

给定一台机器 Tn，图灵的基本思想是构造一台机器 T'n，它不直接打印出 Tn 的输出，而是打印出 Tn 的连续完整配置或瞬时描述。为了实现这一点，T'n：

> [...] 可以依赖于在自身内部某处写有[Tn]的操作规则[...] 每一步都可以通过参考这些规则来执行。（图灵 1936-7：242）

换句话说，T'n 通过在其磁带上写入 Tn 的程序来打印出 Tn 的连续完整配置。因此，图灵需要一种记号方法，使得能够在同一磁带上“捕捉”图灵机的两个不同方面，以便它们可以被同一台机器处理，即：

* (1)以它应该做的事情的描述——五元组符号
* (2)以它正在做的事情的描述——完整配置符号

因此，在构建 U 的过程中，第一步也许是最重要的一步，就是五元组和完整配置符号的描述，以及将它们放在同一条纸带上的想法。更具体地说，纸带被分为两个区域，我们在这里称之为 A 区域和 B 区域。A 区域包含 Tn 的“程序”的符号表示，而 B 区域包含 Tn 的连续完整配置的符号表示。在图灵的论文中，它们由一个额外的符号“::”分隔开来。

为了简化 U 的构建并将任何图灵机编码为唯一的数字，图灵开发了第三种符号表示法，只允许使用字母来表示五元组和完整配置。这是由以下方式确定的[请注意，我们使用图灵的原始编码。当然，有各种可能的编码方式，包括二进制编码]：

* 将 Tn 中五元组中的每个状态 qi 替换为 DA...Ai，因此，例如 q3 变为 DAAA。
* 将 Tn 中五元组中的每个符号 Sj 替换为 DC...Cj，因此，例如 S1 变为 DC。

使用这种方法，可以用一系列大写字母来表示图灵机 Tn 的每个五元组，因此任何机器 Tn 的“程序”可以用符号 A、C、D、R、L、N 和;的集合来表示。这就是所谓的图灵机的标准描述（S.D.）。例如，TSimple 的 S.D.如下：

;*DADDRDAA*;*DADCDRDAA*;*DAADDCRDA*;*DAADCDCRDA*

这实质上是图灵的哥德尔编号版本。事实上，正如图灵所示，可以通过替换来轻松获得图灵机 Tn 的数值描述表示或描述编号（D.N.）：

* A" 由 "1
* C" 由 "2
* D" 由 "3
* “L” by “4”
* “R” by “5”
* “N” by “6”
* “;” 由 “7”

因此，TSimple 的 D.N.是：

7313353117313135311731133153173113131531

注意，每个机器 Tn 都有一个唯一的 D.N.；一个 D.N.只代表一个机器。

Clearly, the method used to determine the S.D. of some machine Tn can also be used to write out the successive complete configurations of Tn. Using “:” as a separator between successive complete configurations, the first few complete configurations of TSimple are:

:*DAD*:*DDAAD*:*DDCDAD*:*DDCDDAAD*:*DDCDDCDAD*

#### 2.3.2 Interchangeability of program and behavior: a basic set of functions

Having a notational method to write the program and successive complete configurations of some machine Tn on one and the same tape of some other machine T′n is the first step in Turing’s construction of *U*. However, *U* should also be able to “emulate” the program of Tn as written in region *A* so that it can actually write out its successive complete configurations in region *B*. Moreover it should be possible to “take out and exchange[…] [the rules of operations of some Turing machine] for others” (Turing 1936–7: 242). Viz., it should be able not just to calculate but also to compute, an issue that was also dealt with by others such as Church, Gödel and Post using their own formal devices. It should, for instance, be able to “recognize” whether it is in region *A* or *B* and it should be able to determine whether or not a certain sequence of symbols is the next state qi which needs to be executed.

This is achieved by Turing through the construction of a sequence of Turing computable problems such as:

* Finding the leftmost or rightmost occurrence of a sequence of symbols
* Marking a sequence of symbols by some symbol *a* (remember that Turing uses two kinds of alternating squares)
* Comparing two symbol sequences
* Copying a symbol sequence

图灵开发了一种称为骨架表的符号技术，用于这些函数，它作为完整的图灵机表的一种简写符号，但可以轻松地用于构建更复杂的机器。这种技术非常类似于组合的递归技术（参见：递归函数）。

为了说明这些函数如何是图灵可计算的，我们更详细地讨论了一个这样的函数，即比较函数。它是基于一些其他图灵可计算函数构建的，这些函数是相互叠加的。为了理解这些函数的工作原理，请记住图灵使用了一种交替的 F 和 E 方块系统，其中 F 方块包含实际的五元组和完整的配置，而 E 方块则用作标记机器带的某些部分的方式。对于两个序列 S1 和 S2 的比较，S1 的每个符号将由某个符号 a 标记，S2 的每个符号将由某个符号 b 标记。

图灵定义了九个不同的函数来展示如何使用图灵机计算比较函数：

* FIND(qi,qj,a)：这个机器函数搜索 a 的最左出现。如果找到 a，机器将移动到状态 qi，否则移动到状态 qj。这是通过让机器首先移动到磁带的开头（由特殊标记表示），然后向右移动直到找到 a 或达到磁带上的最右符号来实现的。
* FINDL(qi,qj,a)：与 FIND 相同，但在找到 a 后，机器向左移动一格。这在需要在由符号 a 标记的 E 方格中计算符号的函数中使用。
* ERASE(qi,qj,a)：机器计算 FIND。如果找到 a，它会擦除 a 并转到状态 qi，否则转到状态 qj。
* ERASE_ALL(qj,a)=ERASE(ERASE_ALL,qj,a)：机器重复地对 a 进行 ERASE 操作，直到所有的 a 都被擦除。然后它移动到 qj 状态。
* EQUAL(qi,qj,a)：机器检查当前符号是否为 a。如果是，它移动到 qi 状态；否则，它移动到 qj 状态。
* CMP_XY(qi,qj,b)=FINDL(EQUAL(qi,qj,x),qj,b)：无论当前符号 x 是什么，机器在 b 上执行 FINDL 操作（查找由 b 标记的符号）。如果存在一个由 b 标记的符号 y，机器执行 EQUAL 操作比较 x 和 y；否则，机器转到 qj 状态。换句话说，CMP_XY(qi,qj,b)比较当前符号是否与最左边由 b 标记的符号相同。
* COMPARE_MARKED(qi,qj,qn,a,b)：机器检查左侧分别标记为 a 和 b 的最左符号是否相同。如果没有标记为 a 或 b 的符号，则机器进入状态 qn；如果标记为 a 和 b 的符号相同，则机器进入状态 qi，否则机器进入状态 qj。该函数的计算方式为 FINDL(CMP_XY(qi,qj,b),FIND(qj,qn,b),a)
* COMPARE_ERASE(qiqj,qn,a,b)：与 COMPARE_MARKED 相同，但当标记为 a 和 b 的符号相同时，将擦除标记 a 和 b。这通过先在 a 上执行 ERASE，然后在 b 上执行 ERASE 来实现。
* COMPARE_ALL(qj,qn,a,b)：机器比较分别标记为 a 和 b 的序列 A 和 B。这通过反复对 a 和 b 执行 COMPARE_ERASE 来完成。如果 A 和 B 相等，则所有的 a 和 b 都将被擦除，机器将移动到状态 qj；否则，它将移动到状态 qn。它通过 COMPARE_ERASE(COMPARE_ALL(qj,qn,a,b),qj,qn,a,b)的递归调用来计算，从而通过递归调用 COMPARE_ALL 来实现。

以类似的方式，图灵定义了以下函数：

* 复制(qi,a)：将标记为 a 的符号序列复制到最后一个完整配置的右侧，并擦除标记。
* 复制 n(qi,a1,a2,…,an)：将标记为 a1 到 an 的序列复制到最后一个完整配置的右侧，并擦除所有标记 ai。
* REPLACE(qi,a,b): 用字母 b 替换所有的字母 a
* MARK_NEXT_CONFIG(qi,a): 将机器头右侧的第一个配置 qiSj 标记为字母 a
* FIND_RIGHT(qi,a): 找到最右边的符号 a

使用基本功能 COPY、REPLACE 和 COMPARE，图灵构建了一台通用图灵机。

下面是通用图灵机的概要，显示了这些基本功能确实使通用计算成为可能。假设在初始化时，U 的磁带上有某个图灵机 Tn 的 S.D.。请记住，图灵使用交替的 F 和 E 方块系统，因此，例如，TSimple 的 S.D.将被写在 U 的磁带上：

;**D**​*A*​**D**​*D*​**R**​*D*​**A**​*A*​ **;**​*D*​**A**​*D*​**C**​*D*​**R**​*D*​**A**​*A*​ **;**​*D*​**A**​*A*​**D**​*D*​**C**​*R*​**D**​*A*​ **;**​*D*​**A**​*A*​**D**​*C*​**D**​*C*​**R**​*D*​**A**

其中“_”表示未标记的 E 方块。

* INIT：在 Tn 的最右五元组的右侧，U 打印:::DA_，其中_表示未标记的 E 方块。
* FIND_NEXT_STATE：机器首先使用 y 标记右侧（即最后一个）由 U 在磁带的 B 部分计算得出的完整配置 qCC，iSCC，j，并使用 x 标记左侧五元组 qq，mSq，n，该五元组之前没有被标记（使用字母 z）的分号在磁带的 A 部分。比较这两个配置。如果它们相同，机器将移动到 MARK_OPERATIONS，如果不同，它将使用 z 标记在 qq，mSq，n 之前的分号，并转到 FIND_NEXT_STATE。这可以通过使用 COMPARE_ALL 函数轻松实现，这意味着无论比较的结果如何，标记 x 和 y 都将被擦除。例如，假设 Tn=TSimple，并且由 U 计算得出的 TSimple 的最后一个完整配置为：
  (1):_D_S0D_C_S1D_S0D_A_A_q2D_S0
  然后 U 将移动到区域 A，并确定相应的五元组为：
  (2)D_A_A_q2D_S0D_C_S1R_D_A_q1
* MARK_OPERATIONS: 机器 U 标记它需要执行的操作，以计算 Tn 的下一个完整配置。打印和移动（L，R，N）操作用 u 标记，下一个状态用 y 标记。所有的标记 z 都被擦除。继续我们的例子，U 将如下标记（2）：
  D_A_A_D_DuCuRuDyAy
* MARK_COMPCONFIG: 由 U 计算的 Tn 的最后一个完整配置被标记为四个区域：配置 qCC，iSCC，j 本身不标记；它之前的符号用 x 标记，左边或标记的剩余符号用 v 标记。最后，右边的所有符号（如果有的话）都用 w 标记，并在最右边的符号右边打印一个“:”，以指示下一个由 U 计算的 Tn 的完整配置的开始。继续我们的例子，(1)将由 U 标记如下：
  DvS0DvCvS1DxS0D_A_A_q2D_S0:_
  U 然后转到 PRINT
* PRINT。在已标记为 MARK_OPERATIONS 的指令中，确定是否存在操作 Print 0 或 Print 1。如果是这样，分别在最后一个完整配置的右侧打印 0 或 1。这不是必要的功能，但图灵坚持让 U 不仅打印出 Tn 计算的（编码的）完整配置，还打印出 Tn 计算的实际（二进制）实数。
* 打印完整配置。U 打印下一个完整配置并擦除所有标记 u、v、w、x、y。然后返回到查找下一个状态。U 首先搜索最右边的字母 u，以检查需要哪种移动（R、L、N），并擦除 R、L、N 的标记 u。根据 L、R 或 N 的值，通过应用 COPY5 到 u、v、w、x、y 来写下下一个完整配置。移动操作（L、R、N）由 u、v、w、x、y 的特定组合来解释：
  当<sub>L:COPY5(查找下一个状态,v,y,x,u,w)当</sub>R:COPY5(查找下一个状态,v,x,u,y,w)当~N:COPY5(查找下一个状态,v,x,y,u,w)
  根据我们的例子，由于 TSimple 需要向右移动，所以在 U 的磁带上写下的 TSimple 的新的最右边的完整配置是：
  D_S0D_C_S1D_S0D_C_S1D_A_q1
  由于我们知道，对于这个完整的配置，TSimple 正在扫描的正方形不是上一个完整配置中包含的（即 TSimple 已经超过了最右边的点），因此由 U 写出的完整配置实际上是不完整的。这个小缺陷是由 Post（Post 1947）通过在下一轮中使用的函数中包含一个额外的指令来纠正的，该指令用于标记完整配置。

显然，图灵的通用机确实要求程序和该程序生成的“数据”可以互换地操作，即将程序和其生成物放在一起，并以相同的方式处理，作为要复制、标记、擦除和比较的字母序列。

图灵的特殊构造非常复杂，它依赖于 F 和 E 方块，使用了一组相当庞大的符号和一种相当晦涩的符号来描述上述不同的函数。自 1936 年以来，已经实施了几种修改和简化。F 和 E 方块之间的差异的消除已经在第 1.2 节中讨论过，并且 Shannon 证明了任何图灵机，包括通用机器，都可以简化为二进制图灵机（Shannon 1956）。自 1950 年代以来，已经进行了相当多的研究，以确定可能的最小通用设备（就状态和符号数量而言），并且已经找到了相当多的“小型”通用图灵机。这些结果通常是通过依赖于其他等效的可计算性模型（例如标签系统）来实现的。有关对小型通用设备的研究的调查（请参见 Margenstern 2000; Woods＆Neary 2009）。

### 2.4 停机问题和决策问题

如前所述，图灵的论文的目的是证明一阶逻辑的决策问题是不可计算的。通过使用一种与图灵机逻辑等价的不同类型的形式设备，Church（1936a，1936b）独立地实现了相同的结果（参见第 4 节）。这个结果与希尔伯特希望通过他的有限性和形式主义计划实现的目标非常不符。事实上，除了哥德尔的不完全性定理之外，它们还破坏了希尔伯特使数学摆脱 Ignorabimus 的梦想，这在希尔伯特的以下话中明确表达出来：

> 康德找不到一个无解问题的真正原因，在我看来，是因为他断言不存在无解问题。我们的解决方案不应该是愚蠢的 Ignorabimus，而应该是：我们必须知道。我们将会知道。（1930 年：963）[作者翻译]

注意，希尔伯特在这里所指的可解性是指数学问题的可解性，而不仅仅是机械可解的问题。然而，在 Mancosu 等人的 2009 年的研究中（第 94 页），证明了解决每个数学问题的这一总体目标，支持了希尔伯特的两个特定信念，即（1）数论公理是完备的，（2）数学中没有不可判定的问题。

#### 2.4.1 不可计算决策问题的直接和间接证明

那么，如何证明对于一个特定的决策问题 Di，它是不可计算的呢？有两种主要方法：

* 间接证明：取一个已知为不可计算的问题 Duncomp，并展示该问题“归约”到 Di。
* 直接证明：通过假设某个版本的 Church-Turing 论题，直接证明 Di 的不可计算性。

Today, one usually relies on the first method while it is evident that in the absence of a problem Duncomp, Turing but also Church and Post (see [Sec. 4](https://plato.stanford.edu/entries/turing-machine/#AlteHistModeComp)) had to rely on the direct approach.

The notion of reducibility has its origins in the work of Turing and Post who considered several variants of computability (Post 1947; Turing 1939). The concept was later appropriated in the context of computational complexity theory and is today one of the basic concepts of both computability and computational complexity theory (Odifreddi 1989; Sipser 1996). Roughly speaking, a reduction of a problem Di to a problem Dj comes down to providing an effective procedure for translating every instance di,m of the problem Di to an instance dj,n of Dj in such a way that an effective procedure for solving dj,n also yields an effective procedure for solving di,m. In other words, if Di reduces to Dj then, if Di is uncomputable so is Dj. Note that the reduction of one problem to another can also be used in decidability proofs: if Di reduces to Dj and Dj is known to be computable then so is Di.

In the absence of **D**uncomp a very different approach was required and Church, Post and Turing each used more or less the same approach to this end (Gandy 1988). First of all, one needs a formalism which captures the notion of computability. Turing proposed the Turing machine formalism to this end. A second step is to show that there are problems that are not computable within the formalism. To achieve this, a uniform process **U** needs to be set-up relative to the formalism which is able to compute every computable number. One can then use (some form of) diagonalization in combination with **U** to derive a contradiction. Diagonalization was introduced by Cantor to show that the set of real numbers is “uncountable” or not denumerable. A variant of the method was used also by Gödel in the proof of his [first incompleteness theorem](https://plato.stanford.edu/entries/goedel-incompleteness/sup2.html).

#### 2.4.2 图灵的基本问题 CIRC？，PRINT？和决策问题

回想一下，在图灵的原始图灵机版本中，机器正在计算实数。这意味着“行为良好”的图灵机实际上不应该停止并打印出无限序列的数字。图灵将这样的机器称为无环机器。所有其他机器被称为循环机器。一个数字 n，它是一个无环机器的 D.N.，被称为令人满意的。

图灵在证明不可计算性的过程中使用了这个基本差异：

> CIRC？决定对于每个数字 n 是否满意

CIRC？的不可计算性证明使用了一个假设的无环机器 Tdecide 的构造，该机器计算由无环机器计算的所有可计算数字的对角线序列。因此，它在构造上依赖于通用图灵机和一个假设的机器，该机器能够对给定的每个数字 n 解决 CIRC？。证明了当机器 Tdecide 提供了自己的描述编号时，它变成了一个循环机器，因此假设能够解决 CIRC？的机器是错误的。

基于 CIRC？的不可计算性，图灵随后证明了 PRINT？也是不可计算的。更具体地说，他证明了如果 PRINT？是可计算的，那么 CIRC？也是可判定的，即他重新表述 PRINT？，使其成为对于任何机器决定它是否会打印无限多个符号的问题，这等同于决定 CIRC？。

最后，基于 PRINT 的不可计算性？图灵表明，决策问题是不可判定的。这是通过展示以下内容实现的：

1. 对于每个图灵机 T，可以构造一个相应的一阶逻辑公式 T，并且
2. 如果存在一种通用方法来确定 T 是否可证明，则存在一种通用方法来证明 T 是否会打印 0。这就是 PRINT 的问题？因此无法判定（前提是我们接受图灵的论点）。

由于 PRINT?的不可计算性，因此可以得出结论，决策问题是不可计算的。

#### 2.4.3 停机问题

鉴于图灵对可计算实数的关注，他的基本决策问题是确定某个图灵机是否不会停机，因此与更为著名的停机问题不完全相同：

* HALT？决定对于每个图灵机 T，T 是否会停机的问题。

图灵的 PRINT？问题实际上与 HALT？非常接近（参见 Davis 1958 年：第 5 章，定理 2.3）。

HALT？的一个流行证明如下。假设 HALT？是可计算的。那么应该可以构造一个图灵机，对于每个机器 Ti 和某个输入 w 对于 Ti，判断 Ti 是否会在 w 上停机。让我们称这个机器为 TH。特别地，我们有：

TH(Ti,w)={如果 Ti 在 w 上停机，则 HALT 如果 Ti 在 w 上循环，则 LOOP

现在我们定义第二台机器 TD，它依赖于机器 TH 可以被构建的假设。更具体地说，我们有：

TD(Ti,D.N. of Ti)=⎧⎪ ⎪ ⎪ ⎪⎨⎪ ⎪ ⎪ ⎪⎩如果 Ti 不会在其自身的描述号上停机，则 HALT 如果 Ti 会在其自身的描述号上停机，则 LOOP

如果我们现在将 Ti 设置为 TD，我们就会得到一个矛盾：如果 TD 停机，那么意味着 TD 不会停机，反之亦然。这个证明的一个流行但相当非正式的变体是由克里斯托弗·斯特拉奇在编程的背景下给出的（Strachey 1965）。

### 2.5 图灵机的变体

如 1.1 和 1.2 节所示，图灵机有多种定义。可以使用五元组或四元组表示法；可以有不同类型的符号或只有一个符号；可以有双向无限或单向无限的纸带等。过去还考虑和使用了其他一些不太明显的修改。这些修改可以是泛化或限制。这些修改并不会导致“更强”或“更弱”的模型。换句话说，这些修改后的机器计算的函数与图灵可计算函数一样多，也不会少。这增加了图灵机定义的稳健性。

##### 二进制机器

在他 1936 年的短文中，波斯特考虑了只标记或取消标记一个方格的机器，这意味着我们只有两个符号 S0 和 S1，但他没有证明这个表述恰好捕捉到图灵可计算函数。证明了对于任何具有 n 个符号的图灵机 T，存在一个具有两个符号的图灵机模拟 T 的香农（Shannon 1956）。他还证明了对于任何具有 m 个状态的图灵机，存在一个只有两个状态的图灵机模拟它。

##### 非擦除机器

非擦除机是只能覆盖 S0 的机器。在 1952 年的 Moore 中提到，Shannon 证明了非擦除机可以计算任何图灵机计算的内容。这个结果是在 50 年代实际的数字计算机的背景下给出的，这些计算机依赖于打孔纸带（因此不能擦除）。然而，Shannon 的结果从未发表过。是 Wang 在 1957 年发表了这个结果（Wang 1957）。

##### 非写入机器

Minsky 证明了对于每个图灵机，都存在一个具有两个磁带的非写入图灵机来模拟它。

##### 多重带

不仅可以考虑一条带的图灵机，还可以考虑具有多条带的图灵机。这在几个不同的背景下被证明非常有用。例如，Minsky 使用了两条带的非写入图灵机证明了由 Post 定义的某个决策问题是非图灵可计算的（Minsky 1961）。Hartmanis 和 Stearns 在他们的计算复杂性理论的创始论文中证明了任何 n 条带的图灵机可以归约为一条带的图灵机，因此任何可以由 n 条带或多带图灵机计算的东西也可以由一条带的图灵机计算，反之亦然（Hartmanis＆Stearns 1965）。他们使用多带机器是因为它们被认为更接近实际的数字计算机。

##### n 维图灵机

另一种变体是考虑到图灵机的带不是一维的，而是 n 维的。这个变体也可以简化为一维的变体。

##### 非确定性机器

图灵机的一个明显更激进的重新表述是非确定性图灵机。如 1.1 所解释的，图灵机的一个基本条件是所谓的确定性条件，即在任何给定的时刻，机器的行为完全由其所处的配置或状态以及正在扫描的符号决定。除此之外，图灵还提到了选择机的概念，其中下一个状态不完全由状态和符号对决定，而是由某个外部设备随机选择下一步要做什么。非确定性图灵机是一种选择机：对于每个状态和符号对，非确定性机器在有限（可能为零）个状态之间进行任意选择。因此，与确定性图灵机的计算不同，非确定性机器的计算是可能配置路径的树。一种可视化非确定性图灵机计算的方法是，机器为每个可用的转换生成一个自身的精确副本和磁带，并且每个机器都继续计算。如果任何一个机器成功终止，那么整个计算终止并继承该机器的结果磁带。请注意前面一句话中的成功一词。在这种表述中，某些状态被指定为接受状态，当机器在其中一个状态中终止时，计算就成功了，否则计算就失败了，其他机器继续寻找成功的结果。将非确定性添加到图灵机中不会改变图灵可计算性的范围。非确定性是在 Rabin＆Scott 1959 年的论文中引入有限自动机的，该论文还表明添加非确定性不会导致更强大的自动机。 非确定性图灵机是计算复杂性理论中的重要模型。

##### 弱和半弱机器

弱图灵机是指在输入的左右两侧无限重复某个字母的机器。半弱机器是指在输入的左侧或右侧无限重复某个字母的机器。这些机器是标准模型的推广，初始带上包含某个有限字母（可能为空）。它们被引入用于确定更小的通用机器。Watanabe 是第一个定义了一个具有六个状态和五个符号的通用半弱机器的人（Watanabe 1961）。最近，许多研究人员确定了几个小型的弱和半弱通用图灵机（例如，Woods＆Neary 2007; Cook 2004）。

除了图灵机模型的这些变体之外，还有一些变体会导致以某种明确定义的方式捕捉到比（图灵）可计算函数更多的模型。这些模型的例子包括预言机（图灵 1939 年），无限时间图灵机（Hamkins＆Lewis 2008 年）和加速图灵机（Copeland 2002 年）。引入这些更强大的模型有各种原因。有些是计算性或递归论的众所周知的模型，并在高阶递归和相对可计算性理论中使用（预言机）；而其他的，如加速机器，则是在超任务的背景下引入的，并提供了“计算”不可图灵计算的函数的物理模型的想法。

## 3.与图灵机相关的哲学问题

### 3.1 人类和机器的计算

在其原始背景下，图灵将可计算数与图灵机进行了等同的鉴定，旨在证明决策问题不是一个可计算问题，因此也不是所谓的“一般过程”问题（图灵 1936-7: 248）。为了得出这个结果，需要做出的基本假设是我们对“可计算性”的“直观”概念可以被形式化地定义为图灵可计算性，因此没有“可计算”的问题是不可图灵计算的。但是，图灵的“直观”计算性概念是什么，我们如何确信它确实涵盖了所有可计算问题，更一般地说，涵盖了所有种类的计算？这是计算机科学哲学中一个非常基本的问题。

在图灵撰写这篇论文的时候，现代计算机尚未发展起来，因此将图灵的论文重新解释为图灵可计算性与现代计算机可计算性等同的观点，实际上是对图灵论文的历史正确性的解释。图灵撰写论文时存在的计算机，如微分分析仪或桌上计算器，在计算能力上受到很大限制，并且在人类计算实践的背景下使用（Grier 2007）。因此，图灵并没有试图形式化机器计算，而是人类计算，因此图灵论文中的可计算问题变成了通过人类手段可计算。这在图灵 1936-7 年的第 9 节中非常明确，他在分析人类计算过程时展示了图灵机是（人类）计算的“自然”模型。分析结果是一种抽象的人类“计算器”，它满足一系列根植于图灵对人类局限性的认识的不同条件，这些条件限制了我们能够计算的范围（包括我们的感知装置和我们的思维装置）。这个“计算器”在一个被分成方格的无限一维纸带上计算（真实的）数字[注：图灵假设纸张的二维特性对计算“并非必要”（图灵 1936-7 年：249）]。它具有以下限制（Gandy 1988; Sieg 1994）：

* 决定性条件 D：“计算机在任何时刻的行为由他所观察到的符号和他当时的‘心态’决定。”（图灵 1936-7 年：250）
* 有界性条件 B1：“计算机在一个时刻内能够观察到的符号或方格的数量有一个上限 B。如果他想观察更多，他必须使用连续的观察。”（图灵 1936-7 年：250）
* 有界性条件 B2“需要考虑的心理状态数量是有限的”（艾伦·图灵 1936-7：250）
* 局部性条件 L1“我们可以假设被改变符号的方块总是‘被观察’的方块。”（艾伦·图灵 1936-7：250）
* 局部性条件 L2“每个新观察到的方块都在离前一个观察到的方块 L 个方块之内。”（艾伦·图灵 1936-7：250）

It is this so-called “direct appeal to intuition” (1936–7: 249) of Turing’s analysis and resulting model that explain why the Turing machine is today considered by many as the best standard model of computability (for a strong statement of this point of view, see Soare 1996). Indeed, from the above set of conditions one can quite easily derive Turing’s machines. This is achieved basically by analyzing the restrictive conditions into “‘simple operations’ which are so elementary that it is not easy to imagine them further divided” (Turing 1936–7: 250).

Note that while Turing’s analysis focuses on human computation, the application of his identification between (human) computation and Turing machine computation to the Entscheidungsproblem suggests that he did *not* consider the possibility of a model of computation that somehow goes “beyond” human computation and is capable of providing an effective and general procedure which solves the Entscheidungsproblem. If that would have been the case, he would not have considered the Entscheidungsproblem to be uncomputable.

图灵在计算分析中对人类计算的关注，导致研究人员将图灵的分析扩展到物理设备的计算。这导致了（版本的）物理丘奇-图灵论题。罗宾·甘迪专注于将图灵的分析扩展到离散机械设备（请注意，他没有考虑模拟机器）。更具体地说，像图灵一样，甘迪从离散机械设备的计算的基本限制出发，并在此基础上开发了一个新模型，他证明它可以归约到图灵机模型。这项工作由威尔弗里德·西格继续进行，他提出了可计算动力系统的框架（Sieg 2008）。其他人考虑了物理学中“合理”的模型，这些模型可以“计算”一些图灵不可计算的东西。例如，参见 Aaronson、Bavarian 和 Gueltrini 2016（其他互联网资源），其中显示如果存在闭合时间曲线，停机问题将可以用有限资源解决。其他人提出了计算的替代模型，这些模型受到图灵机模型的启发，但捕捉到当前计算实践的特定方面，而图灵机模型被认为不太适合。一个例子是旨在捕捉交互过程的持久图灵机。然而，请注意，这些结果并不表明存在图灵不可计算的“可计算”问题。一些作者认为这些和其他相关提议是计算的合理模型，它们以某种方式比图灵机计算更多。正是这种类型的陈述与所谓的超计算研究相关联，导致了计算机科学界在 21 世纪初的一场激烈辩论，参见 Teuscher 2004 以了解各种立场。

### 3.2 论题、定义、公理或定理

显然，严格来说，图灵的论点是不可证明的，因为在其原始形式中，它是关于形式和模糊或直观概念之间关系的主张。因此，许多人将其视为一个论点或定义。如果能够提供一个直观可接受的有效过程来完成一个不可图灵计算的任务，那么这个论点将被推翻。到目前为止，还没有找到这样的反例。基于其他独立定义的可计算性概念，如递归函数和算盘机，也已被证明与图灵可计算性等价。这些不同形式之间的等价性表明，我们对可计算性有一个自然而强大的概念。鉴于我们对可计算性的这种明显的强大性，一些人提议完全避免使用论点的概念，而是提出一组用于精确化非正式概念的公理。有几种方法，最著名的是结构公理化方法，其中可计算性本身被公理化（Sieg 2008），以及通过给出一个公理化，可以推导出丘奇-图灵论点的公理化方法（Dershowitz＆Gurevich 2008）。

## 4. 可计算性的替代历史模型

除了图灵机之外，在数学基础研究的背景下，还独立于图灵引入了几种其他模型，这些模型的论题在逻辑上等同于图灵的论题。对于这些模型的每一个，都已经证明它们捕捉到了图灵可计算函数。需要注意的是，现代计算机的发展促进了其他模型的发展，例如寄存器机器或马尔可夫算法。最近，在生物学或物理学等学科中的计算方法导致了受生物启发和物理启发的模型，例如 Petri 网或量子图灵机。然而，对于这些模型的讨论超出了本条目的范围。

### 4.1 通用递归函数

通用递归函数的最初形式可以在 Gödel 1934 中找到，它建立在 Herbrand 的建议上。在 Kleene 1936 中给出了一个更简单的定义，在 Kleene 1943 中引入了使用所谓的最小化或μ运算符的标准形式。更多信息，请参阅关于递归函数的条目。

教堂使用一般递归函数的定义来陈述他的论点：

> 教堂的论点是，每个可有效计算的函数都是一般递归的。

在递归函数的背景下，人们使用递归可解和不可解的概念，而不是图灵可计算和不可计算。这个术语是由 Post（1944）提出的。

### 4.2 λ-可定义性

Church 的λ演算起源于(Church 1932, 1933)的论文，旨在作为数学的逻辑基础。当时，Church 相信这种不同的形式方法可能避免哥德尔不完备性(Sieg 1997: 177)。然而，Church 提出的逻辑系统被他的两位博士生 Stephen C. Kleene 和 Barkley Rosser 证明是不一致的，因此他们开始专注于该逻辑的一个子部分，即λ演算。Church、Kleene 和 Rosser 开始λ定义他们能想到的任何可计算函数，而 Church 很快提出用λ-可定义性来定义有效可计算性。然而，只有在 Church、Kleene 和 Rosser 证明了一般递归性和λ-可定义性是等价的之后，Church 才公开宣布他的论文，并以一般递归函数而不是λ-可定义性的术语来表达(Davis 1982; Sieg 1997)。

在λ演算中，只有两种类型的符号。三个原始符号λ、(、)也称为不正确的符号，以及一个无限列表的变量。有三个规则来定义λ演算的良构公式，称为λ公式。

1. λ-公式首先是变量本身。
2. 如果 P 是一个包含 x 作为自由变量的λ-公式，那么λx[P]也是一个λ-公式。λ-运算符用于绑定变量，因此它将包含自由变量的表达式转换为表示函数的表达式。
3. 如果 M 和 N 是λ-公式，那么{M}(N)也是λ-公式，其中{M}(N)被理解为将函数 M 应用于 N。

λ-公式，或λ-演算的良构公式，是仅由这三个规则的（重复）应用所得到的公式。

有三个操作或转换规则。让我们定义 SxNM|代表在 M 中将 x 替换为 N 所得到的公式。

1. 简化。将公式的任何部分{λx[M]}(N)替换为 SxNM|，前提是 M 的绑定变量既与 x 不同，也与 N 的自由变量不同。例如{λx[x2]}(2)简化为 22。
2. 扩展 通过将公式的任何部分 SxNM|替换为{λx[M]}(N)，前提是((λxM)N)是良好形式的，并且 M 的绑定变量与 x 和 N 中的自由变量都不同。例如，22 可以扩展为{λx[x2]}(2)
3. 更改绑定变量 通过将公式的任何部分 M 替换为 SxyM|，前提是 x 不是 M 的自由变量，y 不在 M 中出现。例如将{λx[x2]}更改为{λy[y2]}

Church 引入以下缩写来定义λ演算中的自然数：

1→λyx.yx,2→λyx.y(yx),3→λyx.y(y(yx)),…

使用这个定义，可以对正整数进行λ-定义函数。如果存在一个λ-公式 F，使得 F(m)=n，其中 m 和 n 是表示整数 m 和 n 的λ-公式，则一个正整数的函数 F 是λ-可定义的，那么通过应用λ-演算的转换规则，可以将λ-公式{F}(m)转换为 n。例如，由 Church 首次引入的后继函数 S 可以如下λ-定义：

S→λabc.b(abc)

举个例子，将 S 应用于代表 2 的λ-公式，我们得到：

(λabc.b(abc))(λyx.y(yx))→λbc.b((λyx.y(yx))bc)→λbc.b((λx.b(bx))c)→λbc.b(b(bc))

今天，λ-演算被认为是编程理论中的基本模型。

### 4.3 后期制作系统

大约在 1920-1921 年，埃米尔·波斯特（Emil Post）开发了不同但相关的生产系统，以便开发一种语法形式，使他能够解决一阶逻辑的决策问题。其中一种形式是波斯特规范系统 C，后来被称为波斯特生产系统。

规范系统由有限字母表Σ、有限集合的初始词 W0,0、W0,1、…、W0,n 和一组有限的产生规则组成，形式如下：

g11Pi11g12Pi12…g1m1Pi1m1g1(m1+1)g21Pi21g22Pi22…g2m2Pi2m2g2(m2+1)……………………………gk1Pik1gk2Pik2…gkmkPikmkgk(mk+1)产生 g1Pi1g2Pi2…gmPimg(m+1)

符号 g 是一种元符号：它们对应于实际产生中实际字母序列。符号 P 是操作变量，因此可以表示产生中的任何字母序列。因此，例如，考虑一个字母表Σ={a,b}上的产生系统，初始词为：

W0=ababaaabbaabbaabbaba

并且以下的产生规则：

P1,1bbP1,2 产生 P1,3aaP1,4

然后，从 W0 开始，有三种可能的方式应用产生规则，在每次应用中，变量 P1,i 的值将不同，但 g 的值是固定的。由规范系统产生的有限词序列集合称为规范集。

由 Post 定义的一类特殊的规范形式是正常系统。一个正常系统 N 由一个有限字母表Σ，一个初始词 W0∈Σ∗和一个有限的产生规则集合组成，每个规则的形式如下：

giPproducesPg′i

由正常系统产生的任何有限词序列的集合被称为正常集。Post 能够证明，对于任何某个字母表Σ上的规范集 C，存在一个字母表Δ上的正常集 N，使得Σ⊆Δ且 C=N∩Σ∗。他坚信(1)任何可以通过有限手段生成的有限词序列集合都可以通过规范系统生成，以及(2)对于每个规范集，存在一个包含它的正常集的证明，这导致了 Post 的论文 I 的产生。

> 文章的论点 I (Davis 1982) 每个由有限过程生成的有限字母序列集合也可以由正常系统生成。更具体地说，任何由有限过程生成的字母表Σ上的词的集合都是 N∩Σ∗的形式，其中 N 是一个正常集合。

Post 意识到“[为了使论点具有完全的普遍性]必须对人类思维建立有限过程生成序列的所有可能方式进行全面分析”(Post 1965: 408)，很可能是在这样的分析结果下给出了 Post 1936 中的公式 1，该公式几乎与图灵机相同。

Post 的产生系统成为计算机科学和更具体地说是形式语言理论中重要的形式设备(Davis 1989; Pullum 2011)。

### 4.4 第一公式

1936 年，波斯特发表了一篇简短的笔记，从中可以推导出波斯特的第二个论题（德·莫尔 2013 年）：

> 波斯特的第二论题：在直观意义上的问题可解与通过第一公式可解相一致

公式 1 与图灵机非常相似，但“程序”以一系列指令的形式给出，需要人工工作者按照指令进行操作。与单向无限纸带不同，Post 的“机器”由一个双向无限符号空间组成，被分成多个方格。这个想法是，工作者在这个符号空间中工作，能够执行五种原始操作（O1 标记一个方格，O2 取消标记一个方格，O3 将一个方格向左移动，O4 将一个方格向右移动，O5 确定他所在的方格是否被标记），按照有限的一组指令 d1,...,dn 进行操作，其中每个指令 di 始终具有以下形式之一：

1. 执行操作（O1-O4）之一，并转到指令 dj
2. 执行操作 O5，并根据工作者所在的方格是否被标记，按照指令 dj'或 dj''进行操作。
3. 停止。

波斯特还为他的公式 1 定义了一个特定的术语，以便用公式 1 来定义问题的可解性。这些概念包括适用性，有限 1 过程，1 解和 1 给定。粗略地说，这些概念确保决策问题在给定的形式化中始终以正确的解终止的条件下，可以用公式 1 解决。

## 5. 图灵机对计算机科学的影响

图灵是当今计算机科学界最受赞誉的人物之一。许多人认为他是计算机科学之父，计算机科学界主要奖项被称为图灵奖，这清楚地表明了这一点（Daylight 2015）。这一点在 2012 年图灵百年庆典中得到了加强，这次庆典主要由 S. Barry Cooper 协调。这不仅导致了大量围绕图灵的科学活动，还有一些倡议将图灵作为计算机科学之父的想法传播给更广泛的公众（Bullynck，Daylight 和 De Mol 2015）。在当今被认为是开创性的图灵贡献中，1936 年关于图灵机的论文是最有影响力的一篇。然而，最近的历史研究也表明，人们应该非常谨慎地对待图灵机的影响，并且在将过去迁移到现在时应该小心谨慎。

### 5.1 对理论计算机科学的影响

如今，图灵机及其理论已成为计算机科学的理论基础的一部分。它是研究基础性问题的标准参考，例如：

* 什么是算法？
* 什么是计算？
* 什么是物理计算？
* 什么是高效计算？
* 等等。

它也是理论计算机科学中广泛研究的主要模型之一，包括：可计算性的变体和最小模型，高阶可计算性，计算复杂性理论，算法信息论等。图灵机模型对于理论计算机科学的重要性至少有两个历史根源。

首先，从 20 世纪 20 年代和 30 年代的数学逻辑工作延续下来，像马丁·戴维斯（他是 Post 和 Church 的学生）和克利恩这样的人。在这个传统中，图灵的工作当然是众所周知的，图灵机被认为是最好的可计算性模型。戴维斯和克利恩在 1950 年代出版了一本关于这些主题的书（克利恩 1952 年；戴维斯 1958 年），这些书很快成为早期可计算性理论以及在 1950 年代末和 1960 年代对计算的更多理论反思的标准参考资料。

其次，人们可以看到在 1950 年代，需要有理论模型来反映新的计算机、它们的能力和限制，以更系统的方式进行研究。在这个背景下，已经完成的理论工作被采用。一个重要的发展是自动机理论，其中可以将其他机器模型的发展放置在其中，例如寄存器机器模型或王 B 机器模型，这些模型最终源于图灵和 Post 的机器；在第 5.2 节中讨论了最小机器设计；在形式语言理论的起源中使用了图灵机，即研究不同类别的机器能够识别的“语言”，以及它们的限制和优势。正是这些更多的理论发展促成了 20 世纪 60 年代计算复杂性理论的建立。当然，除了图灵机，其他模型在这些发展中也起到了重要的作用。然而，在理论计算机科学中，图灵机仍然是主要的模型，即使在今天也是如此。事实上，当 1965 年计算复杂性理论的创始论文之一（Hartmanis＆Stearns 1965 年）发表时，多带图灵机被引入为计算机的标准模型。

### 5.2 图灵机与现代计算机

在几个解释中，图灵不仅被认定为计算机科学之父，也被认定为现代计算机之父。这个经典的故事大致如下：现代计算机的蓝图可以在冯·诺伊曼的 EDVAC 设计中找到，如今经典计算机通常被描述为具有所谓的冯·诺伊曼体系结构。EDVAC 设计的一个基本思想是所谓的存储程序思想。粗略地说，这意味着将指令和数据存储在同一内存中，从而允许对程序进行数据操作。有充分的理由认为冯·诺伊曼知道图灵论文的主要结果（Davis 1988）。因此，可以认为存储程序的概念源于图灵对通用图灵机的概念，并且将其作为现代计算机的定义特征，有人可能声称图灵是现代计算机之父。另一个相关的论点是，图灵是第一个通过他对通用机器的概念来“捕捉”通用机器的想法，并且在这个意义上他也“发明”了现代计算机（Copeland＆Proudfoot 2011）。这个论点得到了加强，因为图灵还参与了一类重要的计算设备（Bombe）的构建，用于解密德国 Enigma 密码，并且后来提出了 ACE（自动计算引擎）的设计，图灵本人明确将其视为通用机器的一种物理实现：

> 几年前，我正在研究可能被描述为对数字计算机的理论可能性和限制的调查。[...]像 ACE 这样的机器可以被视为这种类型机器的实际版本。（图灵 1947）

然而需要注意的是，图灵已经了解 ENIAC 和 EDVAC 的设计，并提出 ACE 作为对该设计的改进（除此之外，它还具有更简单的硬件架构）。

关于图灵作为计算机发明者和/或创始人的说法已经受到一些计算机历史学家的审查（Daylight 2014; Haigh 2013; Haigh 2014; Mounier-Kuhn 2012），主要是在图灵百年纪念之后，从多个角度进行的。根据这项研究，很明显，关于图灵是现代计算机发明者的说法给出了对现代计算机发展的扭曲和偏见的描述。最好的情况是，他是众多为现代计算机的几个历史发展（科学、政治、技术、社会和工业）做出贡献的人之一。事实上，“第一台”计算机是许多创新的结果，根植于不仅一个人，而是几个具有不同背景和观点的人的工作。

然后在 1950 年代，（通用）图灵机开始成为与实际计算机相关的一种被接受的模型，并被工程师、数学家和逻辑学家用作反思通用计算机的限制和潜力的工具。尤其是在机器设计方面，人们认识到只需要很少的操作就可以构建一台通用机器的洞察力，这在 1950 年代激发了对最小机器架构的思考。部分构建 MINAC 的弗兰克尔如下所述：

> 图灵调查的一个显著结果是，他能够描述一台能够计算任何可计算数的计算机。他称这台机器为通用计算机。因此，它是所提到的“最好的可能”计算机。
>
> [...] 这个令人惊讶的结果表明，在研究计算机原则上可以解决哪些问题时，我们不需要考虑一个越来越复杂的无限系列计算机，而只需要考虑一台单一的机器。
>
> 比“最好的可能”计算机的理论可能性更令人惊讶的是，它不需要非常复杂。图灵对通用计算机的描述并不唯一。许多计算机，其中一些相当简单，都满足通用计算机的要求。（Frankel 1956: 635）

结果是一系列实验机器，如 MINAC、TX-0（林肯实验室）或 ZERO 机器（范德普尔），它们又成为一些商用机器的前身。值得指出的是，图灵的 ACE 机器设计也符合这种理念。它也作为 BENDIX G15 机器（德·莫尔，布林克和戴利特，2018 年）商业化。

当然，通过最小化机器指令，编码或编程变得更加复杂。用图灵的话来说，他在设计 ACE 时清楚地意识到了代码和（硬连线的）指令之间的权衡：“[W]我们经常简化电路，以换取代码”（图灵，1947 年）。事实上，可以看到在这些早期的最小设计中，大量的工作投入到开发更高效的编码策略中。正是在这里，人们也可以将通用图灵机与硬件和程序之间的互换性的重要原则联系起来。

如今，通用图灵机在许多人看来仍然被视为现代计算机的主要理论模型，特别是与所谓的冯·诺伊曼体系结构相关的。当然，对于其他体系结构，也引入了其他模型，例如用于并行机器的批同步并行模型或用于建模交互问题的持久图灵机。

### 5.3 编程理论

任何通用机器原则上都可以被建模为通用图灵机的想法，在 20 世纪 50 年代的自动编程背景下也成为了一个重要原则（Daylight 2015）。在机器设计背景下，这个观点的最重要结果是机器指令的最小化。在编程背景下，这个观点是关于可以构建一台能够“模拟”任何其他机器行为的机器，从而最终实现机器硬件和语言实现之间的互换性。这个观点在 20 世纪 50 年代由约翰·W·卡尔三世和索尔·戈恩等人引入了多种形式，他们也积极参与了计算机协会（ACM）的形成，作为自动编程的统一理论思想，实际上是关于将高阶语言“翻译”为低级语言，最终转化为机器代码。因此，在编程的背景下，通用图灵机在 20 世纪 50 年代开始扮演其基础性角色（Daylight 2015）。

尽管图灵机在一般层面上是一个限定可能性的基本理论模型，但它对编程语言的语法和语义并没有真正的影响。在这个背景下，λ演算和 Post 生产系统才有影响（尽管在这里也要小心过分强调形式模型对编程实践的影响）。事实上，图灵机通常被视为机器模型，而不是编程模型：

> 图灵机在概念上与一般使用的自动计算机没有什么不同，但它们在控制结构方面非常简陋。[…] 当然，大部分可计算性理论都涉及与计算的特定方式无关的问题。只要可计算函数以某种方式由符号表达式（例如数字）表示，并且以给定函数的表达式计算的函数以某种方式由表示原始函数的表达式计算，就足够了。然而，实际计算理论必须适用于特定的算法。（麦卡锡 1963 年：37）

因此，人们可以看到，图灵机在计算机科学中的作用应该更多地位于理论层面：通用机器在今天仍被许多人视为现代计算机的模型，而通过程序作为数据进行操作以模拟机器的能力是现代计算的基本原则之一。此外，它作为可计算性模型的稳健性和自然性使其成为挑战所谓（物理）丘奇-图灵论题的主要模型。

## Bibliography

* Barwise, Jon and John Etchemendy, 1993, *Turing’s World*, Stanford, CA: CSLI Publications.
* Boolos, George S. and Richard C. Jeffrey, 1974, *Computability and Logic*, Cambridge: Cambridge University Press; fifth edition 2007. doi:10.1017/CBO9780511804076 (fifth edition)
* Bromley, Allan G., 1985, “Stored Program Concept. The Origin of the Stored Program Concept”, Technical Report 274, Basser Department of Computer Science, November 1985. [[Bromley 1985 available online](https://web.archive.org/web/20171002030127/http://sydney.edu.au/engineering/it/research/tr/tr274.pdf)]
* Bullynck, Maarten, Edgar G. Daylight, and Liesbeth De Mol, 2015, “Why Did Computer Science Make a Hero Out of Turing?”, *Communications of the ACM*, 58(3): 37–39.doi:10.1145/2658985
* Church, Alonzo, 1932, “A Set of Postulates for the Foundation of Logic”, *Annals of Mathematics*, 33(2): 346–366. doi:10.2307/1968337
* –––, 1933, “A Set of Postulates for the Foundation of Logic (Second Paper)”, *Annals of Mathematics*, 34(4): 839–864. doi:10.2307/1968702
* –––, 1936a, “An Unsolvable Problem of Elementary Number Theory”, *American Journal of Mathematics*, 58(2): 345–363.
* –––, 1936b, “A Note on the Entscheidungsproblem”, *Journal of Symbolic Logic*, 1(1): 40–41. doi:10.2307/2269326
* –––, 1937, “Review of: On Computable Numbers with An Application to the Entscheidungsproblem by A.M. Turing”, *Journal of Symbolic Logic*, 2(1): 42–43. doi:10.1017/S002248120003958X
* Cook, Matthew, 2004, “Universality in Elementary Cellular Automata”, *Complex Systems*, 15(1): 1–40.
* Cooper, S. Barry and Jan Van Leeuwen, 2013, *Alan Turing: His Work and Impact*, Amsterdam: Elsevier. doi:10.1016/C2010-0-66380-2
* Copeland, B. Jack, 2002, “Accelerating Turing Machines”, *Minds and Machines*, 12(2): 281–301. doi:10.1023/A:1015607401307
* Copeland, B. Jack and Diane Proudfoot, 2011, “Alan Turing: Father of the Modern Computer”, *The Rutherford Journal*, 4: 1. [[Copeland & Proudfoot 2011 available online](http://www.rutherfordjournal.org/article040101.html)]
* Davis, Martin, 1958 [1982], *Computability and Unsolvability*, New York: McGraw-Hill. Reprinted Dover, 1982.
* –––, 1965, *The Undecidable. Basic papers on undecidable propositions, unsolvable problems and computable functions*, New York: Raven Press.
* –––, 1978, “What is a Computation?”, Lynn Arthur Steen (ed.), *Mathematics Today: Twelve Informal Essays*, New York: Springer, pp. 241–267. doi:10.1007/978-1-4613-9435-8_10
* –––, 1982, “Why Gödel Didn’t Have Church’s Thesis”, *Information and Control*, 54:(1–2): 3–24. doi:10.1016/S0019-9958(82)91226-8
* –––, 1988, “Mathematical Logic and the Origin of the Modern Computer”, in Herken 1988: 149–174.
* –––, 1989, “Emil Post’s Contribution to Computer Science”, *Proceedings of the Fourth Annual Symposium on Logic in Computer Science*, IEEE Computer Society Press, pp. 134–137. doi:10.1109/LICS.1989.39167
* Davis, Martin and Wilfried Sieg, 2015, “Conceptual Confluence in 1936: Post and Turing”, in Giovanni Sommaruga and Thomas Strahm (eds.), *Turing’s Revolution: The Impact of His Ideas about Computability*, Cham: Springer. doi:10.1007/978-3-319-22156-4_1
* Daylight, Edgar G., 2014, “A Turing Tale”, *Communications of the ACM*, 57(10): 36–38. doi:10.1145/2629499
* –––, 2015, “Towards a Historical Notion of ‘Turing—The Father of Computer Science’”, *History and Philosophy of Logic*, . 36(3): 205–228. doi:10.1080/01445340.2015.1082050
* De Mol, Liesbeth, 2013, “Generating, Solving and the Mathematics of Homo Sapiens. Emil Post’s Views On computation”, Hector Zenil (ed.), *A Computable Universe. Understanding Computation & Exploring Nature As Computation*, Hackensack, NJ: World Scientific, pp. 45–62. doi:10.1142/9789814374309_0003 [[De Mol 2013 available online](https://hal.univ-lille3.fr/hal-01396500/document)]
* De Mol, Liesbeth, Maarten Bullynck, and Edgar G. Daylight, 2018, “Less is More in the Fifties: Encounters between Logical Minimalism and Computer Design during the 1950s”, *IEEE Annals of the History of Computing*, 40(1): 19–45. doi:10.1109/MAHC.2018.012171265 [[De Mol et al. 2018 available online](https://hal.univ-lille3.fr/hal-01345592)]
* Deutsch, D., 1985, “Quantum Theory, the Church-Turing Principle and the Universal Quantum Computer”, *Proceedings of the Royal Society A*, 400(1818): 97–117. doi:10.1098/rspa.1985.0070
* Dershowitz, Nachum and Yuri Gurevich, 2008, “ A Natural Axiomatization of Computability and Proof of Church’s Thesis”, *Bulletin of Symbolic Logic*, 14(3): 299–350.
* Frankel, Stanley, 1956, “Useful Applications of a Magnetic-Drum Computer”, *Electrical Engineering*, 75(7): 634–39, doi:10.1109/EE.1956.6442018
* Gandy, Robin, 1980, “Church’s Thesis and Principles for Mechanism”, in Jon Barwise, H. Jerome Keisler, and Kenneth Kunen (eds.), *The Kleene Symposium: Proceedings of the Symposium Held June 18–24, 1978 at Madison, Wisconsin, U.S.A.*, (Studies in Logic and the Foundations of Mathematics, 101), Amsterdam: North-Holland, pp. 123–148. doi:10.1016/S0049-237X(08)71257-6
* –––, 1988, “The Confluence of Ideas in 1936”, in Herken 1988: 55–111.
* Gödel, Kurt, 1929, “Die Vollständigkeit der Axiome des logischen Funktionenkalkül”, *Monatshefte für Mathematik und Physik*, 37: 349–360. doi:10.1007/BF01696781
* –––, 1934, “On Undecidable Propositions of Formal Mathematical Systems”, mimeographed lecture notes by S. C. Kleene and J. B. Rosser, Institute for Advanced Study, Princeton, NJ; corrected and amplified in Davis 1965: 41–74.
* Grier, David Alan, 2007, *When Computers Were Human*, Princeton, NJ: Princeton University Press.
* Haigh, Thomas, 2013, “‘Stored Program Concept’ Considered Harmful: History and Historiography”, in Paola Bonizzoni, Vasco Brattka, and Benedikt Löwe, *The Nature of Computation. Logic, Algorithms, Applications: 9th Conference on Computability in Europe, CiE 2013, Milan, Italy, July 1–5, 2013 Proceedings*, (Lecture Notes in Computer Science, 7921), Berlin: Springer, pp. 241–251. doi:10.1007/978-3-642-39053-1_28
* –––, 2014, “Actually, Turing Did Not Invent the Computer”, *Communications of the ACM*, 57(1): 36–41. doi:10.1145/2542504
* Hamkins, Joel David and Andy Lewis, 2000, “Infinite Time Turing Machines”, *Journal of Symbolic Logic*, 65(2): 567–604. doi:10.2307/2586556
* Hartmanis, J. and R.E. Stearns, 1965, “On the Computational Complexity of Algorithms” *Transactions of the American Mathematical Society*, 117: 285–306. doi:10.1090/S0002-9947-1965-0170805-7
* Herken, Rolf, (ed.), 1988, *The Universal Turing Machine: A Half-Century Survey*, New York: Oxford University Press.
* Hilbert, David, 1930, “Naturerkennen und Logik”, *Naturwissenschaften*, 18(47–49): 959–963. doi:10.1007/BF01492194
* Hilbert, David and Wilhelm Ackermann, 1928, *Grundzüge der Theoretischen Logik*, Berlin: Springer. doi:10.1007/978-3-642-65400-8
* Hodges, Andrew, 1983, *Alan Turing: The Enigma*, New York: Simon and Schuster.
* Kleene, Stephen Cole, 1936, “General Recursive Functions of Natural Numbers”, *Mathematische Annalen*, 112: 727–742. doi:10.1007/BF01565439
* –––, 1943, “Recursive predicates and quantifiers”, *Transactions of the American Mathematical Society*, 53(1): 41–73. doi:10.2307/2267986
* –––, 1952, *Introduction to Metamathematics*, Amsterdam: North Holland.
* Lambek, Joachim, 1961, “How to Program an Infinite Abacus”, *Canadian Mathematical Bulletin*, 4: 295–302. doi:10.4153/CMB-1961-032-6
* Lewis, Henry R. and Christos H. Papadimitriou, 1981, *Elements of the Theory of Computation*, Englewood Cliffs, NJ: Prentice-Hall.
* Lin, Shen and Tibor Radó, 1965, “Computer Studies of Turing Machine Problems”, *Journal of the Association for Computing Machinery*, 12(2): 196–212. doi:10.1145/321264.321270
* Mancosu, Paolo, Richard Zach, and Calixto Badesa, 2009, “The Development of Mathematical Logic from Russell to Tarski, 1900–1935”, in Leila Haaparanta (ed.), *The Development of Modern Logic*, New York: Oxford University Press, pp. 318–470. doi:10.1093/acprof:oso/9780195137316.003.0029 [[Mancosu et al. 2009 available online](https://ucalgary.ca/rzach/papers/history.html)]
* Margenstern, Maurice, 2000, “Frontier Between Decidability and Undecidability: A Survey”, *Theoretical Computer Science*, 231(2): 217–251. doi:10.1016/S0304-3975(99)00102-4
* McCarthy, John, 1963, “A Basis for a Mathematical Theory of Computation”, in: P. Braffort and D. Hirschberg, *Computer Programming and Formal Systems*, Amsterdam: North-Holland, pp. 33–70. [[McCarthy 1963 available online](http://www-formal.stanford.edu/jmc/basis1/basis1.html)]
* Minsky, Marvin, 1961, “Recursive Unsolvability of Post's Problem of ‘Tag’ and other Topics in Theory of Turing Machines”, *Annals of Mathematics*, 74(3): 437–455. doi:10.2307/2269716
* –––, 1967, *Computation: Finite and Infinite Machines*, Englewood Cliffs, NJ: Prentice Hall.
* Moore, E.F., 1952, “A simplified universal Turing machine”, *Proceedings of the Association of Computing Machinery* (meetings at Toronto, Ontario), Washington, DC: Sauls Lithograph, 50–55. doi:10.1145/800259.808993
* Mounier-Kuhn, Pierre, 2012, “Logic and Computing in France: A Late Convergence”, in *AISB/IACAP World Congress 2012: History and Philosophy of Programming*, University of Birmingham, 2-6 July 2012. [[Mounier-Kuhn 2012 available online](https://www.academia.edu/5252629/Logic_and_Computing_in_France_A_Late_Convergence)]
* Odifreddi, P., 1989, *Classical Recursion Theory*, Amsterdam: Elsevier.
* Petzold, Charles, 2008, *The Annotated Turing: A Guided Tour Through Alan Turing’s Historic Paper on Computability and Turing Machines*, Indianapolis, IN: Wiley.
* Post, Emil L., 1936, “Finite Combinatory Processes-Formulation 1”, *Journal of Symbolic Logic*, 1(3): 103–105. doi:10.2307/2269031
* –––, 1944, “Recursively Enumerable Sets of Positive Integers and Their Decision Problems”, *Bulletin of the American Mathematical Society*, 50(5): 284–316. [[Post 1944 available online](https://projecteuclid.org/euclid.bams/1183505800)]
* –––, 1947, “Recursive Unsolvability of a Problem of Thue”, *Journal of Symbolic Logic*, 12(1): 1–11. doi:10.2307/2267170
* –––, 1965, “Absolutely Unsolvable Problems and Relatively Undecidable Propositions—Account of an Anticipation”, in Martin Davis (ed.), *The Undecidable: Basic Papers on Undecidable Propositions, Unsolvable Problems and Computable Functions*, New York: Raven Press. Corrected republication 2004, Dover publications, New York, pp. 340–433.
* Pullum, Geoffrey K., 2011, “On the Mathematical Foundations of *Syntactic Structures*”, *Journal of Logic, Language and Information*, 20(3): 277–296. doi:10.1007/s10849-011-9139-8
* Rabin, M.O. and D. Scott, 1959, “Finite Automata and their Decision Problems”, *IBM Journal of Research and Development*, 3(2): 114–125. doi:10.1147/rd.32.0114
* Radó, Tibor, 1962, “On Non-Computable Functions”, *Bell System Technical Journal*, 41(3/May): 877–884. doi:10.1002/j.1538-7305.1962.tb00480.x
* Shannon, Claude E., 1956, “A Universal Turing Machine with Two Internal States”, in Shannon & McCarthy 1956: 157–165. doi:10.1515/9781400882618-007
* Shannon, Claude E. and John McCarthy (eds), 1956, *Automata Studies*, (Annals of Mathematics Studies, 34), Princeton: Princeton University Press.
* Shapiro, Stewart, 2007, “Computability, Proof, and Open-Texture”, in Adam Olszewski, Jan Wolenski, and Robert Janusz (eds.), *Church’s Thesis After 70 years*, Berlin: Ontos Verlag, pp. 420–455. doi:10.1515/9783110325461.420
* Sieg, Wilfried, 1994, “Mechanical Procedures and Mathematical Experience”, in Alexander George (ed.), *Mathematics and Mind*, Oxford: Oxford University Press, pp. 71–117.
* –––, 1997, “Step by Recursive Step: Church’s Analysis of Effective Calculability”, *The Bulletin of Symbolic Logic*, 3(2): 154–180. doi:10.2307/421012
* –––, 2008, “Church without Dogma: Axioms for Computability”, in S. Barry Cooper, Benedikt Löwe, and Andrea Sorbi (eds.), *New Computational Paradigms: Changing Conceptions of What is Computable*, New York: Springer Verlag, pp. 139–152. doi:10.1007/978-0-387-68546-5_7
* Sipser, Michael, 1996, *Introduction to the Theory of Computation*, Boston: PWS Publishing.
* Soare, Robert I., 1996, “Computability and Recursion”, *Bulletin for Symbolic Logic*, 2(3): 284–321. doi:10.2307/420992
* Strachey, Christopher, 1965, “An Impossible Program (letter to the editor )”, *The Computer Journal*, 7(4): 313. doi:10.1093/comjnl/7.4.313
* Teuscher, Christof (ed.), 2004, *Alan Turing: Life and Legacy of a Great Thinker*, Berlin: Springer. doi:10.1007/978-3-662-05642-4
* Turing, A.M., 1936–7, “On Computable Numbers, With an Application to the Entscheidungsproblem”, *Proceedings of the London Mathematical Society*, s2-42: 230–265; correction *ibid*., s2-43: 544–546 (1937). doi:10.1112/plms/s2-42.1.230 and doi:10.1112/plms/s2-43.6.544
* –––, 1937, “Computability and λ-Definability”, *Journal of Symbolic Logic*, 2(4): 153–163. doi:10.2307/2268280
* –––, 1939, “Systems of Logic Based on Ordinals”, *Proceedings of the London Mathematical Society*, s2-45: 161–228. doi:10.1112/plms/s2-45.1.161
* –––, 1947 [1986], “Lecture to the London Mathematical Society on 20 February 1947”, reprinted in *A M. Turing's ACE Report of 1946 and Other Papers: Papers by Alan Turing and Michael Woodger*, (Charles Babbage Institute Reprint, 10), B.E. Carpenter and R.W. Doran (eds.), Cambridge, MA: MIT Press, 1986.
* –––, 1954, “Solvable and Unsolvable Problems”, *Science News*, (February, Penguin), 31: 7–23.
* Wang, Hao, 1957, “A Variant to Turing’s Theory of Computing Machines”, *Journal of the ACM*, 4(1): 63–92. doi:10.1145/320856.320867
* Watanabe, Shigeru, 1961, “5-Symbol 8-State and 5-Symbol 6-State Universal Turing Machines”, *Journal of the ACM*, 8(4): 476–483. doi:10.1145/321088.321090
* Woods, Damien and Turlough Neary, 2007, “Small Semi-Weakly Universal Turing Machines”, in Jérôme Durand-Lose and Maurice Margenstern (eds.), *Machines, Computations, and Universality: 5th International Conference, MCU 2007 Orléans, France, September 10–13, 2007*, (Lecture Notes in Computer Science, 4664), Berlin: Springer, pp. 303–315. doi:10.1007/978-3-540-74593-8_26
* –––, 2009, “The Complexity of Small Universal Turing Machines: A Survey”, *Theoretical Computer Science*, 410(4–5): 443–450. doi:10.1016/j.tcs.2008.09.051

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=turing-machine). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/turing-machine/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=turing-machine&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](http://philpapers.org/sep/turing-machine/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

* “Turing Machines”, *Stanford Encyclopedia of Philosophy* (Fall 2018 Edition), Edward N. Zalta (ed.), URL = <http://plato.stanford.edu/archives/fall2018/entries/turing-machine/>. [This was the previous entry on Turing Machines in the SEP, written by David Barker-Plummer.].
* Aaronson, Scott, Mohammad Bavarian, and Giulio Gueltrini, 2016, “[Computability Theory of Closed Timelike Curves](https://arxiv.org/abs/1609.05507)”, manuscript available at arXiv.org.
* [The Alan Turing Home Page](https://www.turing.org.uk/turing/), maintained by Andrew Hodges
* [Bletchley Park](https://www.bletchleypark.org.uk/), in the U.K., where, during the Second World War, Alan Turing was involved in code breaking activities at Station X.

### Busy Beaver

* [Michael Somos’ page of Busy Beaver references.](https://web.archive.org/web/20161105013714/http://somos.crg4.com:80/bb.html)

### The Halting Problem

* [Halting problem is solvable (funny)](https://www.netfunny.com/rhf/jokes/89q4/halting.760.html)

### Online Turing Machine Simulators

Turing machines are more powerful than any device that can actually be built, but they can be simulated both in software and hardware.

#### Software simulators

There are many Turing machine simulators available. Here are three software simulators that use different technologies to implement simulators using your browser.

* [Andrew Hodges’ Turing Machine Simulator](https://www.turing.org.uk/book/update/tmjavar.html) (for limited number of machines)
* [Suzanne Britton’s Turing Machine Simulator](http://ironphoenix.org/tril/tm/) (A Java Applet)

Here is an application that you can run on the desktop (no endorsement of these programs is implied).

* [Visual Turing](http://www.softlookup.com/download.asp?id=2147): freeware simulator for Windows 95/98/NT/2000

#### Hardware simulators

* [Turing Machine in the Classic Style](http://aturingmachine.com/), Mike Davey’s physical Turing machine simulator.
* [Lego of Doom](http://legoofdoom.blogspot.com/), Turing machine simulator using Lego™.

## Related Entries

[Church-Turing Thesis](https://plato.stanford.edu/entries/church-turing/) | [computability and complexity](https://plato.stanford.edu/entries/computability/) | [computational complexity theory](https://plato.stanford.edu/entries/computational-complexity/) | [recursive functions](https://plato.stanford.edu/entries/recursive-functions/) | [Turing, Alan](https://plato.stanford.edu/entries/turing/)

### Acknowledgments

The version of this entry published on September 24, 2018 is essentially a new entry, though the author would like to acknowledge the few sentences that remain from the previous version written by David Barker-Plummer. See also footnote 1 for an acknowledgment to S. Barry Cooper.

[Copyright © 2018](https://plato.stanford.edu/info.html#c) by  
[Liesbeth De Mol](https://pro.univ-lille.fr/liesbeth-de-mol/) <[*liesbeth.demol@univ-lille3.fr*](mailto:liesbeth%2edemol%40univ-lille3%2efr)>
