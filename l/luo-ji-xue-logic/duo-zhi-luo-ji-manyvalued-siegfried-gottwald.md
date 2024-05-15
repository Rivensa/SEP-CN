# 多值逻辑 many-valued (Siegfried Gottwald)

*首次发表于 2000 年 4 月 25 日；实质性修订于 2015 年 3 月 5 日。*

多类逻辑是非经典逻辑。它们与经典逻辑相似，因为它们接受真功能原则，即复合句的真值由其组成句子的真值确定（因此，当其中一个组成句子被具有相同真值的另一个句子替换时，其真值保持不变）。但它们与经典逻辑的根本区别在于，它们不限制真值的数量仅为两个：它们允许更大的真值集合 W。

正如模态逻辑语义中“可能世界”的概念可以重新解释（例如，在时态逻辑语义中解释为“时间瞬间”，在动态逻辑语义中解释为“状态”），真值程度没有标准解释。它们的理解取决于实际应用领域。然而，通常假设存在两个特定的真值程度，通常用“0”和“1”表示。这些特定的真值程度分别起到传统真值“伪命题”和“真命题”的作用 - 但有时也像“绝对假”和“绝对真”，特别是在经典逻辑的传统真值“分裂”为一系列真值程度的情况下。

多类逻辑将其真值程度视为技术工具，并打算为特定应用选择适当的真值程度。讨论此类“真值程度”或“真值”的（可能的非技术）性质是一个相当困难的哲学问题。感兴趣的读者可以参考 Shramko/Wansing（2011）的专著或有关真值的条目。

多值逻辑系统的形式化语言遵循两种标准模式，分别是命题逻辑和谓词逻辑：

* 在命题语言的情况下，有命题变量以及连接词和（可能还有）真值程度常量，
* 在一阶语言的情况下，有对象变量以及谓词符号，可能还有对象常量和函数符号，以及量词、连接词和（可能还有）真值程度常量。

如同逻辑学中通常的做法一样，这些语言是逻辑学的语义和语法基础。

---

## 1. 语义学

对于多值逻辑系统，有三种语义学。

* [1.1 标准逻辑矩阵](https://plato.stanford.edu/entries/logic-manyvalued/#StaLogMat)
* [1.2 代数语义学](https://plato.stanford.edu/entries/logic-manyvalued/#AlgSem)
* [1.3 游戏语义学](https://plato.stanford.edu/entries/logic-manyvalued/#GameSem)

我们依次讨论这些。

### 1.1 标准逻辑矩阵

定义多值逻辑系统 S 最合适的方式是确定其语言的特征逻辑矩阵，即确定：

* 真值程度的集合，
* 解释命题连接词的真值函数，
* 真值常量的含义，
* 量词的语义解释，

 而且，此外，

* 指定的真值程度，它们构成真值程度集合的一个子集，并充当传统真值“verum”的替代品，
* 有时也会有反指定的真值程度，它们构成真值程度集合的一个子集，并充当传统真值“falsum”的替代品。

一个命题语言的良构公式 A 在某个赋值 α（将命题变量集映射到真值程度集合）下被视为有效，当且仅当它在 α 下具有指定的真值程度。而 A 在所有赋值下都是逻辑有效或者是一个重言式，当且仅当它在所有赋值下都是有效的。

在一阶语言的情况下，这样一个良构公式 A 在语言的解释 α 下被视为有效，当且仅当它在该解释下以及将该解释的宇宙域中的对象变量分配给对象时具有指定的真值程度。A 在所有解释下都是逻辑有效，当且仅当它在所有解释下都是有效的。

像在经典逻辑中一样，这样一个解释必须提供

* 一个（非空的）论域，
* 语言中的对象常量的含义，
* 语言中的谓词符号和函数符号的含义。

某个集合 Σ 的一种良好形式的公式模型是一个估值 α 或解释 α，使得所有 A ∈ Σ 在 α 下都是有效的。Σ 蕴含 A 意味着 Σ 的每个模型也是 A 的模型。

### 1.2 代数语义学

对于多值逻辑系统 S，存在一种基于整个特征类 K 的第二种语义学。每个这样的代数结构必须提供 S 语言的特征逻辑矩阵所需的所有数据。

相对于来自 K 的代数结构，公式 A 的有效性概念被定义为如果该结构形成一个逻辑矩阵。而在这里，逻辑有效性意味着对于 K 类中的所有结构都是有效的。

形成某个 MVL 系统 S 的特征类 K 的代数结构类型通常可以来自两个不同的来源。第一个来源可以通过区分某些这样的代数结构类的非逻辑考虑来确定。然而，如果 MVL 系统 S 是通过语法或单个特征矩阵来确定的，这样的代数结构类通常是由 S 的（语法或语义的）Lindenbaum 代数确定的，并且在这种情况下通常在代数完备性证明中也起着关键作用。K 中的代数结构对于 S 的作用类似于布尔代数对于经典逻辑的作用。

对于特定的 MVL 系统，例如有以下特征类的代数结构：

* 对于无限值的 Łukasiewicz 逻辑，MV-代数的多类，
* 对于无限值的 Gödel 逻辑，所有满足预线性(x→y)∪(y→x)=1 的 Heyting 代数的多类，
* 对于 Hajek 的基本 t-范数逻辑 BL，所有 t-代数的多类，即由实数单位区间和左连续 t-范数 T 以及它们的剩余运算 IT 定义为 IT(x,y)=sup{z∣T(x,z)≤y}所形成的代数结构。

对于这两个例子中的前两个，历史上逻辑是由一个特征矩阵确定的，而后来确定了相应的代数结构类。对于第三个例子，情况不同：BL 被设计为所有连续 t-范数的逻辑，从这种超逻辑方法中找到了满足预线性的所有可分割剩余格的类。

然而，从哲学的角度来看，通常更希望为使用单一特征逻辑矩阵的 MVL 系统建立语义基础。但是，从形式的角度来看，这两种方法同样重要，而代数语义学被证明是更一般的方法。

### 1.3 游戏语义学

逻辑学和游戏之间存在多种关联方式。例如，对话逻辑为经典逻辑和直觉逻辑提供了一个博弈论语义：如果陈述该公式的支持者具有能够战胜对手可能实现的攻击的获胜策略，那么该公式被视为有效。

在模糊集合和多值逻辑之间的关系背景下，Robin Giles 提出了一种面向游戏的逻辑有效性观点。从 1975 年开始，他在一系列论文中（Giles 1975,1976,1979），以及 Giles (1988)中，提出了一种基于方便的对话解释的形式系统，用于处理模糊谓词的推理。他已经在其他论文中使用了这种对话解释，例如 Giles 1974，该论文涉及主观信念和物理学的基础。主要思想是让“一个句子通过以赌注的形式明确地表达信念”。赌注涉及具有不同可能结果的分散实验的实际结果的情况下。在这种情况下，“当接受赌注 ϕ1,…,ϕn 的人可以同时放心地下注 ψ 时，句子 ψ 被认为是从句子 ϕ1,…,ϕn 中推导出来的”。

以这种方式获得的（形式）语言与 Łukasiewicz 的无穷值逻辑 L∞ 密切相关：实际上，如果将一个句子 ϕ 赋予真值 1−⟨ϕ⟩，其中 ⟨ϕ⟩ 表示断言 ϕ 的风险值，那么这两个系统就完全一致。他甚至补充说：“通过这种对话解释，Łukasiewicz 逻辑恰好适用于 L.A. Zadeh（1965）首次描述的‘模糊集合理论’的表述；事实上，可以说 L∞ 与模糊集合理论的关系与经典逻辑与普通集合论的关系非常相似”。

近年来，对这些对话游戏的不同版本和概括进行了研究。这些发展的各个方面已经在 Fermüller（2008）和 Fermüller/Roschger（2014）中进行了讨论。这种方法不仅能够为 Gödel 逻辑和乘积逻辑等提供游戏语义，还能够将这些游戏与多值逻辑的序列演算设计相连接，参见 Fermüller/Metcalfe（2009）。

还有一种与 m 值 Łukasiewicz 逻辑相关的对话游戏类型：提出者询问信息，回答者被允许撒谎最多 m 次。这种“带有谎言的 Ulam 游戏”由 Mundici（1992）引入。

## 2. 证明论

主要的逻辑学演算类型都适用于多值逻辑系统：

* [2.1 希尔伯特类型演算](https://plato.stanford.edu/entries/logic-manyvalued/#HilTypCal)
* [2.2 格恩岑类型序演算](https://plato.stanford.edu/entries/logic-manyvalued/#GenTypSeqCal)
* [2.3 表格演算](https://plato.stanford.edu/entries/logic-manyvalued/#TabCal)

然而，上述一些方法仅适用于有限值系统。关于广泛类别的无限值逻辑的现有技术可参考 Metcalfe/Olivetti/Gabbay (2009)。

### 2.1 希尔伯特类型演算

这些演算法的形成方式与经典逻辑的相应演算法相同：使用一组公理和一组推理规则。推导的概念是通常的。

### 2.2 Gentzen 类型的序列演算法

除了通常的序列演算法类型外，研究人员最近还开始讨论多值逻辑系统的“超序列”演算法。超序列是有限的多重集合，即有限的无序序列列表。

对于有限值系统，特别是 m 值系统，也有使用广义序列的序列演算。在 m 值情况下，这些是长度为 m 的公式集的序列。

### 2.3 表演演算

这些演算中的表格树结构与经典逻辑的表演演算中的表格树结构相同。节点的标签变得更加一般化，即有符号公式。有符号公式是一对，由符号和良构公式组成。符号可以是真值程度或真值程度的集合。

具有带符号公式的表格演算通常限制在多值逻辑的有限值系统中，以便可以以有效的方式处理它们。

## 3. 多值逻辑系统

多值逻辑的主要系统通常以家族的形式出现，其中包括统一定义的有限值系统和无限值系统。以下是一个列表：

* [3.1 Łukasiewicz 逻辑学](https://plato.stanford.edu/entries/logic-manyvalued/#LukLog)
* [3.2 Gödel 逻辑学](https://plato.stanford.edu/entries/logic-manyvalued/#GodLog)
* [3.3 基于 t-范数的系统](https://plato.stanford.edu/entries/logic-manyvalued/#TNorBasSys)
* [3.4 三值系统](https://plato.stanford.edu/entries/logic-manyvalued/#ThrValSys)
* [3.5 Dunn/Belnap 的四值系统](https://plato.stanford.edu/entries/logic-manyvalued/#Dun4ValSys)
* [3.6 乘积系统](https://plato.stanford.edu/entries/logic-manyvalued/#ProSys)

### 3.1 Łukasiewicz 逻辑学

系统 Lm 和 L∞ 由具有某个有限集合的逻辑矩阵定义

Wm={km−1∣0≤k≤m−1}

在实数单位区间内的有理数，或整个单位区间内

W∞=[0,1]={x∈R∣0≤x≤1}

作为真值程度集合。程度 1 是唯一指定的真值程度。

这些系统的主要连接词是强连词和弱连词，分别由真值函数给出，即&和 ∧。

u&vu∧v=max{0,u+v−1},=min{u,v}，

由否定连接词 ¬ 确定

¬u=1−u,

以及一个具有真值度函数的蕴涵连接词→

u→v=min{1,1−u+v}.

通常，还会使用两个析取连接词。这些是通过使用 ¬ 分别基于&和 ∧ 来定义的，通过通常的德摩根定律。对于一阶 Łukasiewicz 系统，通过以这样的方式添加两个量词 ∀，∃，使得 ∀xH(x)的真值程度是 H(x)的所有相关真值程度的下确界，并且 ∃xH(x)的真值程度是 H(x)的所有相关真值程度的上确界。

### 3.2 Gödel 逻辑

系统 Gm 和 G∞ 由具有某个有限集合的逻辑矩阵定义

Wm={km−1∣0≤k≤m−1}

在实数单位区间内的有理数，或整个单位区间

W∞=[0,1]={x∈R∣0≤x≤1}

作为真度集合。度数 1 是唯一指定的真度。

这些系统的主要连接词是由真度函数确定的合取 ∧ 和析取 ∨。

u∧vu∨v=min{u,v},=max{u,v}，

一个具有真实度函数的蕴涵连接词→

|      | u→v |
| ------ | ------ |
| u≤v | 1    |
| u>v  | v    |

和一个具有真实度函数的否定连接词 ∼

|      | ∼u |
| ------ | ----- |
| u=0  | 1   |
| u≠0 | 0   |

对于一阶哥德尔系统，我们以一种方式添加了两个量词 ∀，∃，使得 ∀xH(x)的真实度是 H(x)的所有相关真实度的下确界，并且 ∃xH(x)的真实度是 H(x)的所有相关真实度的上确界。

### 3.3 基于 t-范数的系统

对于具有真值度集合的无限值系统

W∞=[0,1]={x∈R∣0≤x≤1}

自 20 世纪 80 年代中期以来，模糊集合理论的影响引发了对多值逻辑系统的研究。

这些系统基本上由一个（可能非幂等的）强合取连接词&T 决定，其对应的真值度函数是一个 t-范数 T，即一个在单位区间上的二元运算 T，它是结合的、交换的、非递减的，并且具有度数 1 作为中性元素：

T(u,T(v,w))=T(T(u,v),w),T(u,v)=T(v,u),u≤v→T(u,w)≤T(v,w),T(u,1)=u.

对于所有具有随附保持性质的 t-范数

T(u,supivi)=supiT(u,vi),

存在一种标准方法引入相关的蕴涵连接符→T，其真值度函数为

u→Tv=sup{z∣T(u,z)≤v}.

这个蕴涵连接词与 t-范数 T 通过关键的伴随条件相连。

T(u,v)≤w⇔u≤(v→Tw),

逻辑学中的多类决定了每个具有随附性质的 T 的唯一 T→T。

该语言进一步丰富了否定连接词 −T，由真值度函数决定。

 −Tu=u→T0。

这迫使语言也具有一个真度常数 0-来表示真度 0，因为这样- T 就成为一个可定义的连接词。

通常，人们还添加了两个进一步的连接词，一个是（弱）合取 ∧，一个是析取 ∨，具有真度函数。

u∧vu∨v=min{u,v},=max{u,v}，

对于连续函数的 t-范数（在实函数的标准连续性意义下），这些附加的连接词甚至可以被定义。适当的定义是

min{u,v}max{u,v}=T(u,(u→Tv)),=min{((u→Tv)→Tv),((v→Tu)→Tu)}。

这种 t-范数相关系统的特殊情况是无穷值的 Łukasiewicz 和 Gödel 系统 L∞，G∞，以及具有常规算术乘积作为其基本 t-范数的乘积逻辑。

从分析的角度来看，对于一个 t-范数 T，它们的随附性质是这个二元函数 T 的左连续性，即每一个一元函数 Ta(x)=T(a,x)都是左连续的。而这样一个 t-范数 T 的连续性可以通过代数可除性条件来表征。

u&T(u→Tv)=u∧v.

所有 t-范数的类别非常庞大，迄今为止还没有真正理解透彻。即使对于那些具有随附性质的 t-范数，其结构的理解也远未完成，但相对于一般情况要好得多：Jenei（2004）对最新研究现状进行了讨论。只有连续 t-范数的进一步子类别被充分理解：它们由 Łukasiewicz t-范数、乘积 t-范数和 Gödel t-范数的同构副本组成，例如在 Gottwald（2001）中有解释。

实际上，人们能够为某些特定类别的 t-范数系统进行公理化。作为一个基本结果，Hájek（1998）给出了所有连续 t-范数的逻辑 BL 的公理化。除了之前提到的代数语义，根据 Hajek 在 Cignoli/Esteva/Godo/Torrens（2000）中的猜想并得到证明，这个逻辑还有另一种代数语义，即所有基于 t-范数的结构的类别，其 t-范数是一个连续函数。基于这项工作，Esteva 和 Godo（2001）猜想了一个具有 sup-preservation 属性的逻辑 MTL 的公理化，而 Jenei/Montagna（2002）证明了这确实是一个充分的公理化。而 Esteva/Godo/Montagna（2004）提供了一种方法来公理化每个单一连续 t-范数的逻辑：他们提供了一个算法，对于每个特定的连续 t-范数 T，该算法给出了一个有限的公理模式列表，如果将其添加到所有连续 t-范数的逻辑 BL 中，就会得到一个关于 T 的适当的逻辑公理化。

进一步的基于 t-范数的系统的公理化，以及基于 t-范数的量词的问题，是最近的研究问题。主要关注以下两个方面，涉及对这些基于 t-范数的系统表达能力的修改：（i）通过形成具有附加否定运算符或具有多个基于 t-范数的合取操作的系统来加强这种表达能力；（ii）通过从语言中删除真值度常数 0-，但在基本词汇中添加蕴涵连接词来修改这种表达能力，以及（iii）将基本 t-范数修改为非交换的“伪 t-范数”，从而导致具有非交换合取连接词的逻辑。关于这些发展的调查由 Gottwald/Hájek（2005），Gottwald（2008）和 Cintula/Hájek（2010）提供。

2011 年的一本几乎完整的现代著作是 Cintula/Hájek/Noguera (2011)。而 P. Hájek 对这些发展的特殊贡献在书籍 Montagna (2015)中得到了赞赏。

### 3.4 三值系统

三值系统似乎是特别简单的情况，可以提供对真值程度的直观解释；这些系统除了经典真值之外只包括一个额外的程度。

数学家和逻辑学家克利尼在部分递归函数的背景下使用了“未定义”的第三个真值度。他的联结词是否定、弱合取和弱析取，与 3 值 Łukasiewicz 系统的可定义合取 ∧+和可定义蕴涵→+一起，由真值度函数确定，具有以下函数表（这些后者的真值度为 ½，当且仅当它们的组成部分之一的真值度为 ½）：

| ∧+ | 0  | ½ | 1  |
| ----- | ---- | ---- | ---- |
| 0   | 0  | ½ | 0  |
| ½  | ½ | ½ | ½ |
| 1   | 0  | ½ | 1  |

| →+ | 0  | ½ | 1  |
| ----- | ---- | ---- | ---- |
| 0   | 1  | ½ | 1  |
| ½  | ½ | ½ | ½ |
| 1   | 0  | ½ | 1  |

这里的 ½ 是第三个真值度“未定义”。在这个克利尼系统中，度数 1 是唯一的指定真值度。

布劳（1978 年）使用了不同的系统作为自然语言的固有逻辑。在布劳的系统中，度数 1 和 ½ 都是指定的。对第三个真值度 ½ 的其他解释，例如“无意义”、“未确定”或“悖论”，促使了对其他 3 值系统的研究。

### 3.5 Dunn/Belnap 的 4 值系统

这个特别有趣的 MVL 系统是对相关逻辑的研究结果，但它也对计算机科学应用具有重要意义。它的真值集可以被看作是

W∗={∅,{⊥},{⊤},{⊥,⊤}},

并且将真实度解释为指示（例如，关于某个特定事态的数据库查询）没有关于这个事态的信息，

* 没有关于这个事态的信息，
* 信息表明这个事态失败，
* 陈述事实发生的信息，
* 冲突的信息，既说事实发生，又说事实失败。

这组真值程度具有两个自然（格）排序：

* 一个真理排序，其顶部是不可比较的程度 ∅，{⊥,⊤}之上有{⊤}，底部是{⊥}；即，
  ![4Vtruth](https://plato.stanford.edu/entries/logic-manyvalued/4V-truth.gif)
* 一个信息（或：知识）排序，其顶部是不可比较的程度{⊥},{⊤}，{⊥,⊤}之上有{⊥,⊤}，底部是 ∅；即，
  ![4Vinfo](https://plato.stanford.edu/entries/logic-manyvalued/4V-info.gif)

给定真理排序下的 inf 和 sup，存在一个合取和析取连接词的真值程度函数。否定是以自然方式由一个真值程度函数确定的，该函数交换程度{⊥}和{⊤}，并保持程度{⊥,⊤}和 ∅ 不变。

实际上，对于蕴涵连接词并没有标准的候选者，指定的真值程度的选择取决于预期的应用：

* 对于计算机科学应用来说，将{⊤}作为唯一的指定程度是自然的，
* 对于相关逻辑的应用来说，选择{⊤}，{⊥,⊤}作为指定程度被证明是足够的。

适当的蕴涵关系的选择仍然是一个开放的研究课题。

这个 4 值系统在计算机存储的信息库的背景下有一个有趣的解释，这是由 Belnap（1977）解释的。Shramko/Wansing（2005）对计算机网络中的知识库进行了最近的推广，导致了 16 值系统，这也是 Odintsov（2009）所研究的。

这些 16 值系统在哲学观点上也很有趣，并且在 Shramko/Wansing（2011）的专著中有详细介绍。

### 3.6 产品系统

寻找对真值程度的直观理解的一般问题有时有一个不错的解决方案：可以将它们视为包含评估句子不同方面的不同方面。在这种情况下，假设有 k 个不同的方面，可以选择真值程度作为评估单个方面的 k 元组值。（例如，这些值可以是标准真值。）

这样的 k 元组上的真值程度函数还可以从单个组成部分的真值程度（或真值）函数“逐分量”定义。通过这种方式，k 个逻辑系统可以合并成一个多值产品系统。

通过这种方式，可以将 Dunn/Belnap 的四值系统的真值程度视为评估与数据库相关的事务状态（SOA）的两个方面：

1. 是否存在关于该 SOA 真实性的积极信息，
2. 是否存在关于该 SOA 虚假性的积极信息。

对于这种评估，两个方面都可以使用标准的真值。

在这种情况下，Dunn/Belnap 的四值系统的合取、析取和否定可以通过经典逻辑的合取、析取或否定来逐个定义，即这个四值系统是经典二值逻辑的两个副本的乘积。

## 4. 多值逻辑的应用

多类逻辑在一定程度上受到了从未实现的哲学目标的推动，同时也受到了关于功能完备性的形式考虑的影响。在发展的早期阶段，这引发了对 MVL 实用性的一些怀疑。然而，与此同时，在不同领域中发现了一些有趣的应用。现在将提到其中的一些。

* [4.1 语言学应用](https://plato.stanford.edu/entries/logic-manyvalued/#AppLin)
* [4.2 逻辑学应用](https://plato.stanford.edu/entries/logic-manyvalued/#AppLog)
* [4.3 应用于哲学问题](https://plato.stanford.edu/entries/logic-manyvalued/#AppPhiPro)
* [4.4 应用于硬件设计](https://plato.stanford.edu/entries/logic-manyvalued/#AppHarDes)
* [4.5 应用于人工智能](https://plato.stanford.edu/entries/logic-manyvalued/#AppArtInt)
* [4.6 数学应用](https://plato.stanford.edu/entries/logic-manyvalued/#AppMat)

### 4.1 语言学应用

在语言学中，一个具有挑战性的问题是处理预设，即在给定句子中只是隐含的假设。例如，句子“加拿大现任国王在维也纳出生”具有存在性预设，即存在一个加拿大现任国王。

理解这些句子的命题处理并不是一项简单的任务，例如给出形成它们否定的标准，或者理解蕴涵的真值条件。

解决这些问题的一种方法是使用多个真值度量，例如使用有序对作为真值度量的产品系统：这意味着它们的组成部分同时评估前提是否满足以及句子的真假。但也讨论了三值方法。

在语言学中，使用多值逻辑工具的另一种思路是对自然语言现象建模。一些基本思想和应用可以在 Novák/Perfilieva/Močkoř（1999）和 Novák（2008）中找到。

### 4.2 逻辑学的应用

MVL 系统对逻辑学本身的第一种应用是利用它们来更好地理解其他逻辑系统。通过这种方式，哥德尔系统是从一种测试直觉逻辑是否可以理解为有限值逻辑的方法中产生的。Łukasiewicz（1920）引入 MVL 系统最初是受到理解可能性概念（即模态逻辑）以三值方式的（最终不成功的）想法的指导。

对逻辑学的第二种应用是合并不同类型的逻辑系统，例如形成具有分级模态的系统。Melvin Fitting（1991/92）考虑通过合并模态逻辑和多值逻辑来定义这些模态的系统，旨在解决人工智能问题。

逻辑学的第三种应用是对部分谓词和真值间隙进行建模。然而，这只有在真值间隙在复合句中的行为可以用适当的真值函数来描述时才可能（并非总是如此，例如在使用超值化的表述中就不是这样）。

### 4.3 对哲学问题的应用

如何理解“真实”一词的含义是一个古老的哲学问题。对这个问题的逻辑方法是通过将形式化语言 L 与一个真值谓词 T 相结合，应用于 L 的句子 - 或者更好地说，应用于带有谓词 T 的 L 的扩展 LT 的句子。

基于这个观点，A.塔斯基在 20 世纪 30 年代中期发展了一种合理的包含真理谓词的语言的理论。其中一个结果是，这样一种语言 LT，它包含自己的真理谓词 T，并具有一定的表达能力，必然是不一致的。

S.克里普克（1975）提出了另一种对包含自己的真理谓词 T 的语言 LT 的方法，该方法基本上是基于将 T 视为一个部分谓词，即一个具有“真值间隙”的谓词。在克里普克（1975）考虑的一个案例中，这些真值间隙在“真值功能”上表现出来，因此可以像第三个真值程度一样对待。它们在复合句中的传播可以通过适当的三值系统的真值程度函数来描述。在克里普克（1975）的方法中，这个参考是 S.C.克利尼（1938）在递归理论中考虑的三值系统的（数学）上下文中的部分函数和谓词。

MVL 在哲学中的第二个应用是对像 Sorites（堆）或 falakros（秃头男人）这样的古老悖论的应用。（参见 Sorites 悖论词条。）在 Sorites 的情况下，悖论如下：

> (i) 一粒沙子不是一堆沙子。而且 (ii) 将一粒沙子加到不是一堆的东西上也不会使其变成一堆。因此 (iii) 无论有多少粒沙子加到其中，一粒沙子永远不会变成一堆沙子。

因此，真正的前提 (i) 通过使用 (ii) 的推理序列给出了一个错误的结论 (iii)。在多值逻辑的扩展中，一个相当自然的解决方案是使用一个带有分级推理概念的模糊逻辑，通常称为模糊逻辑，将堆的概念视为模糊的，即只对给定的对象在某种程度上（真实度）成立。此外，将前提 (ii) 视为部分真实，但是真实度接近最大值 1 的程度。然后，每个单独的推理步骤的形式为：

(a)

*k 个沙粒不能构成一堆。*

(ii)

*向 k 个沙粒中添加一个沙粒并不能使(k+1)个沙粒成为一堆。*

 因此

(b)

 *(k+1)颗沙子不能构成一个堆。*

然而，这种推理必须涉及前提(a)和(ii)的真实程度，并且必须为结论(b)提供一个真实程度。在 MVL 内部对这种推理进行建模的关键思想是确保在(ii)的真实程度小于最大真实程度的情况下，(b)的真实程度小于(a)的真实程度。实际上，对于递增的颗粒数 n，句子“n 颗沙子不构成一堆”趋向于假。

### 4.4 硬件设计应用

经典命题逻辑被用作一种技术工具，用于分析和合成一些由具有两个稳定状态（即电压水平）的“开关”构建的电路的类型。一个相当直接的推广允许使用 m 值逻辑来讨论由具有 m 个稳定状态的类似“开关”构建的电路。这个许多值逻辑的应用领域被称为多值（甚至模糊）开关。Epstein (1993)提供了一个很好的介绍。

### 4.5 人工智能应用

人工智能实际上是最有前景的应用领域，它提供了一系列不同的领域，其中多值逻辑系统已经被使用。

应用的第一个领域涉及模糊概念和常识推理，例如在专家系统中。这两个主题都是通过模糊集合和模糊逻辑进行建模的，而这些又涉及到适当的多值逻辑系统。此外，在数据库和基于知识的系统中，人们希望存储模糊信息。

第二个应用领域与第一个紧密相关：数据和知识挖掘的自动化。在这里，聚类方法成为考虑的因素；这些方法通过模糊集和多值逻辑来引用不精确的聚类。在这个背景下，人们还对多值逻辑系统的自动定理证明技术以及逻辑编程方法感兴趣。这一趋势的一部分是最近发展起来的广义描述逻辑，即所谓的模糊描述逻辑，它允许将多值逻辑领域的技术工具（真值程度、连接词、分级谓词）纳入到逻辑学领域中，从全一阶逻辑的角度来看，这些系统可以被称为基本的描述逻辑，参见 Straccia（2001）、Hájek（2005）、Stoilos 等人（2008）。

### 4.6 数学应用

数学中与多值逻辑相关的主要主题有三个。第一个是模糊集的数学理论和“模糊”或近似推理的数学分析。在这两种情况下，都涉及到多值逻辑系统。第二个主题是使用适当的多值逻辑系统对集合论进行一致性证明的方法。在独立性证明中（例如对于公理系统），通常只有隐含的对多值逻辑基本思想的引用，这些证明经常涉及到具有超过两个真值程度的逻辑矩阵。然而，在这里，多值逻辑更多地是一种纯粹的技术工具，因为在这些独立性证明中，人们对真值程度的直观理解并不感兴趣。

## 5. 多类逻辑的历史

多类逻辑作为一个独立的学科是由波兰逻辑学家和哲学家 Łukasiewicz（1920 年）创立的，并首先在波兰发展起来。他最初的意图是使用第三个附加的真值来表示“可能”，并以此方式模拟“必然”和“可能”的方式。然而，这种对模态逻辑的应用并没有实现。然而，这些研究的结果是 Łukasiewicz 系统以及关于这些系统的一系列理论结果。

与 Łukasiewicz 方法基本平行的是，美国数学家 Post（1921 年）引入了附加真值程度的基本思想，并将其应用于函数可表示性的问题。

后来，哥德尔（1932）试图用多个真值程度来理解直觉主义逻辑。结果是哥德尔系统的家族，以及一个结论，即直觉主义逻辑没有只有有限个真值程度的特征逻辑矩阵。几年后，亚斯科夫斯基（1936）为直觉主义逻辑构造了一个无穷值特征矩阵。然而，这个矩阵的真值程度似乎没有一个好的和简单的直观解释。

俄罗斯逻辑学家博赫瓦尔（1938）提出了将三值逻辑应用于悖论讨论的哲学应用，而美国逻辑学家克里恩（1938）则提出了将三值逻辑应用于偏函数和关系的数学应用。后来，克里恩的联结词也成为了哲学上的一个有趣的技术工具，用于确定由克里普克（1975）发起的真理修正理论中的不动点。

1950 年代见证了以下几个事件：（i）麦克诺顿（1951）对无穷值命题 Łukasiewicz 系统中可定义的真值程度函数进行了分析性的刻画，（ii）张（1958, 1959）对同一系统进行了完备性证明，引入了 MV-代数的概念，罗斯/罗瑟（1958）提供了一个更传统的证明，以及（iii）邓梅特（1959）对无穷值命题哥德尔系统进行了完备性证明。1950 年代还见证了斯科勒姆（1957）在无穷值逻辑领域证明集合论一致性的一种方法。

在 1960 年代，Scarpellini（1962）明确指出，一阶无穷值 Łukasiewicz 系统不可（递归地）公理化。Hay（1963）以及 Belluce/Chang（1963）证明了添加一个无穷推理规则可以对 L∞ 进行公理化。Horn（1969）提出了一阶无穷值 Gödel 逻辑的完备性证明。除了这些在纯多值逻辑内部的发展之外，Zadeh（1965）通过广义集合论手段开始了对模糊概念的形式化的（应用导向）方法，这很快被 Goguen（1968/69）与哲学应用联系起来，并且后来也激发了 MVL 内部许多理论考虑。

1970 年代标志着纯多值逻辑活动的有限期。然而，在（计算机科学）将模糊概念形式化为模糊集合的相关领域中，有很多工作，例如由 Zadeh（1975, 1979）发起的工作。并且在 Pavelka（1979）中对 MVL 进行了一个重要的推理和蕴涵的分级扩展。

在 1980 年代，模糊集合及其应用仍然是一个需要用多值逻辑方法进行理论基础研究的热门话题。此外，Ragaz（1983）通过研究一阶无穷值 Łukasiewicz 逻辑中逻辑有效公式的集合等复杂性结果。Mundici（1986）开始对 MV-代数进行深入研究。

这些趋势自 1980 年代以来一直持续发展。研究包括将多值逻辑应用于模糊集合理论及其应用，对与多值逻辑系统相关的代数结构进行详细研究，对分级蕴涵概念进行研究，以及对多值逻辑系统中不同问题的复杂性问题进行调查。这项研究还得到了有关证明理论的有趣工作、自动定理证明的工作、人工智能领域的不同应用以及基于 t-范数的无穷值系统的详细研究的补充，这些系统现在通常被称为（数学）模糊逻辑。


## Bibliography

### Monographs and Survey Papers

* Ackermann, R., 1967, *An Introduction to Many-Valued Logics*, London: Routledge and Kegan Paul.
* Bolc, L. and Borowik, P., 1992, *Many-Valued Logics* (1. Theoretical Foundations), Berlin: Springer.
* –––, 2003, *Many-Valued Logics* (2. Automated Reasoning and Practical Applications), Berlin: Springer.
* Cignoli, R., d’Ottaviano, I. and Mundici, D., 2000, *Algebraic Foundations of Many-Valued Reasoning*, Dordrecht: Kluwer.
* Cintula, P. and Hájek, P., 2010, Triangular norm based predicate fuzzy logics, *Fuzzy Sets and Systems*, 161 (3): 311–346.
* Cintula, P., Hájek, P. and Noguera Ch. (eds.), 2011, *Handbook of Mathematical Fuzzy Logic* (Studies in Logic, Volumes 37–38), College Publications: London.
* Epstein G., 1993, *Multiple-Valued Logic Design*, Bristol: Institute of Physics Publishing.
* Fitting, M. and Orlowska, E. (eds.), 2003, *Beyond Two*, Heidelberg: Physica Verlag.
* Gottwald, S., 1999, Many-valued logic and fuzzy set theory, in U. Höhle, S.E. Rodabaugh (eds.) *Mathematics of Fuzzy Sets: Logic, Topology, and Measure Theory* (The Handbooks of Fuzzy Sets Series), Boston: Kluwer, 5–89.
* –––, 2001, *A Treatise on Many-Valued Logics* (Studies in Logic and Computation, vol. 9), Baldock: Research Studies Press Ltd..
* –––, 2007, Many-valued logics, in D. Jacquette (ed.) *Philosophy of Logic* (Handbook of the Philosophy of Science Series), Amsterdam: North-Holland, 675–722.
* –––, 2008, Mathematical fuzzy logics, *Bulletin Symbolic Logic*, 14: 210–239.
* Gottwald, S. and Hájek, P., 2005, T-norm based mathematical fuzzy logics, in E.-P. Klement, R. Mesiar (eds.), *Logical, Algebraic, Analytic, and Probabilistic Aspects of Triangular Norms*, Dordrecht: Elsevier, 275–299.
* Hähnle, R., 1993, *Automated Deduction in Multiple-Valued Logics*, Oxford : Clarendon Press.
* –––, 1999, Tableaux for many-valued logics, in M. d’Agostino *et al*. (eds.) *Handbook of Tableau Methods*, Dordrecht: Kluwer, 529–580.
* –––, 2001, Advanced many-valued logics, in D. Gabbay, F. Guenthner (eds.), *Handbook of Philosophical Logic* (Volume 2), 2nd ed., Dordrecht: Kluwer, 297–395.
* Hájek, P., 1998, *Metamathematics of Fuzzy Logic*, Dordrecht: Kluwer.
* Karpenko, A.S., 1997, *Mnogoznacnye Logiki* (Logika i Kompjuter, vol. 4), Moscow: Nauka.
* Malinowski, G., 1993, *Many-Valued Logics*, Oxford: Clarendon Press.
* Metcalfe, G., Olivetti, N. and Gabbay, D., 2009, *Proof Theory for Fuzzy Logics*, New York: Springer.
* Montagna, F. (ed.), 2015, *Petr Hájek on Mathematical Fuzzy Logic* (Outstanding Contributions to Logic, vol. 6), Cham etc.:Springer.
* Novák, V., Perfilieva, I. and Močkoř, J., 1999, *Mathematical Principles of Fuzzy Logic*, Boston: Kluwer.
* Panti, G., 1998, Multi-valued logics, in P. Smets (ed.) *Quantified Representation of Uncertainty and Imprecision* (*Handbook of Defeasible Reasoning and Uncertainty Management Systems*, Vol. 1), Dordrecht: Kluwer, 25–74.
* Rescher, N., 1969, *Many-Valued Logic*, New York: McGraw Hill.
* Rine, D.C. (ed.), 1977, *Computer Science and Multiple Valued Logic*, Amsterdam : North-Holland [2nd rev. ed. 1984].
* Rosser, J.B. and Turquette, A.R., 1952, *Many-Valued Logics*, Amsterdam: North-Holland.
* Shramko, Y. and Wansing H., 2011, *Truth and Falsehood. An Inquiry into Generalized Logical Values* (Trends in Logic: Volume 36), Dordrecht etc.: Springer.
* Urquhart, A., 2001, Basic many-valued logic, in D. Gabbay, F. Guenthner (eds.), *Handbook of Philosophical Logic*, Vol. 2 (2d edition), Dordrecht: Kluwer, 249–295.
* Wojcicki, R. and Malinowski, G. (eds.), 1977, *Selected Papers on Łukasiewicz Sentential Calculi*, Wroclaw: Ossolineum.
* Wolf, R.G., 1977, A survey of many-valued logic (1966–1974), in J.M. Dunn, G. Epstein (eds.), *Modern Uses of Multiple-Valued Logic*, Dordrecht: Reidel, 167–323.
* Zinovev, A.A., 1963, *Philosophical Problems of Many-Valued Logic*, Dordrecht: Reidel.

### Other Works Cited

* Belluce, L.P. and Chang, C.C., 1963, A weak completeness theorem for infinite valued first-order logic, *Journal Symbolic Logic*, 28: 43–50.
* Belnap, N.D., 1977, How a computer should think, in G. Ryle (ed.), *Contemporary Aspects of Philosophy*, Stockfield: Oriel Press, 30–56.
* –––, 1977, A useful four-valued logic, in J.M. Dunn, G. Epstein (eds.), *Modern Uses of Multiple-Valued Logic*, Dordrecht: Reidel, 8–37.
* Blau, U., 1978, *Die dreiwertige Logik der Sprache: ihre Syntax, Semantik und Anwendung in der Sprachanalyse*, Berlin: de Gruyter.
* Bochvar, D.A., 1938, Ob odnom trechznacnom iscislenii i ego primenenii k analizu paradoksov klassiceskogo rassirennogo funkcional’nogo iscislenija, *Matematiceskij Sbornik*, 4 (46): 287–308. [English translation: Bochvar, D.A., On a three-valued logical calculus and its application to the analysis of the paradoxes of the classical extended functional calculus, *History and Philosophy of Logic*, 2: 87–112.]
* Chang, C.C., 1958, Algebraic analysis of many valued logics, *Transactions American Mathematical Society*, 88: 476–490.
* –––, 1959, A new proof of the completeness of the Łukasiewicz axioms, *Transactions American Mathematical Society*, 93: 74–80.
* Cignoli, R., Esteva, F., Godo, L. and Torrens, A., 2000, Basic Fuzzy Logic is the logic of continuous t-norms and their residua, *Soft Computing*, 4: 106–112.
* Dummett, M., 1959, A propositional calculus with denumerable matrix, *Journal Symbolic Logic*, 24: 97–106.
* Dunn, J.M., 1976, Intuitive semantics for first-degree entailments and ‘coupled trees’, *Philosophical Studies*, 29: 149–168.
* Esteva, F. and Godo, L., 2001, Monoidal t-norm based logic: towards a logic for left-continuous t-norms, *Fuzzy Sets and Systems*, 124: 271–288.
* Esteva, F., Godo, L. and Montagna, F., 2004, Equational characterization of the subvarieties of BL generated by t-norm algebras, *Studia Logica*, 76: 161–200.
* Fermüller, C.G., 2008, Dialogue games for many-valued logics–an overview, *Studia Logica*, 90: 43–68.
* Fermüller, C.G. and Metcalfe, G., 2009, Giles’s game and the proof theory of Łukasiewicz logic, *Studia Logica*, 92: 27–61.
* Fermüller, C.G. and Roschger, C., 2014, From games to truth functions: a generalization of Giles’s game, *Studia Logica*, 102: 389–410.
* Fitting, M.C., 1991/92, Many-valued modal logics (I,II), *Fundamenta Informaticae*, 15: 235–254; 17: 55–73.
* Giles, R., 1974, A non-classical logic for physics, *Studia Logica*, 33: 397–415.
* –––, 1975. Łukasiewicz logic and fuzzy set theory. In: *Proceedings 1975 Internat. Symposium Multiple-Valued Logic* (Indiana Univ., Bloomington/IN)}, Long Beach/CA: IEEE Computer Soc., 197–211.
* –––, 1976, Łukasiewicz logic and fuzzy set theory. *Internat. Journ. Man-Machine Studies*, 8: 313–327.
* –––, 1979, A formal system for fuzzy reasoning. *Fuzzy Sets and Systems*, 2: 233–257.
* Giles, R., 1988, The concept of grade of membership. *Fuzzy Sets and Systems*, 25: 297–323.
* Gödel, K., 1932, Zum intuitionistischen Aussagenkalkül, *Anzeiger Akademie der Wissenschaften Wien* (Math.-naturwiss. Klasse), 69: 65–66; – reprinted: (1933), *Ergebnisse eines mathematischen Kolloquiums*, 4: 40.
* Goguen, J.A., 1968–69, The logic of inexact concepts, *Synthese*, 19: 325–373.
* Hájek, P., 2005, Making fuzzy description logic more general, *Fuzzy Sets and Systems*, 154: 1–15.
* Hájek, P. and Zach, R., 1994, Review of *Many-Valued Logics 1: Theoretical Foundations*, by Leonard Bolc and Piotr Borowik, *Journal of Applied Non-Classical Logics*, 4 (2): 215–220.
* Hay, L.S., 1963, Axiomatization of the infinite-valued predicate calculus, *Journal Symbolic Logic*, 28: 77–86.
* Jaskowski, S., 1936, Recherches sur le système de la logique intuitioniste, in *Actes du Congrès Internationale de Philosophie Scientifique 1936*, vol. 6, Paris, 58–61. [English translation: *Studia Logica*, 34 (1975): 117–120.]
* Jenei, S., 2004, How to construct left-continuous triangular norms – state of the art, *Fuzzy Sets and Systems*, 143: 27–45.
* Jenei, S. and Montagna, F., 2002, A proof of standard completeness of Esteva and Godo’s logic MTL, *Studia Logica*, 70: 183–192.
* Kleene, S.C., 1938, On notation for ordinal numbers, *Journal Symbolic Logic*, 3: 150–155.
* Kripke, S.A., 1975, Outline of a theory of truth, *Journal of Philosophy*, 72: 690–716.
* Łukasiewicz, J., 1920, O logice trojwartosciowej, *Ruch Filozoficny*, 5: 170–171. [English translation in: Łukasiewicz (1970).]
* –––, 1970, *Selected Works*, L. Borkowski (ed.), Amsterdam: North-Holland and Warsaw: PWN.
* McNaughton, R., 1951, A theorem about infinite-valued sentential logic, *Journal Symbolic Logic*, 16: 1–13.
* Mundici, D., 1986, Interpretation of AF C*-algebras in Łukasiewicz sentential calculus, *J. Functional Analysis*, 65: 15–63.
* –––, 1992, The logic of Ulam’s game with lies, in: C. Bicchieri and M.L. dalla Chiara (eds.) *Knowledge, belief, and strategic interaction*, Cambridge: Cambridge Univ. Press, 275–284.
* Novák, V., 2008, A formal theory of intermediate quantifiers, *Fuzzy Sets and Systems*, 159: 1229–1246.
* Odintsov, S.P., 2009, On axiomatizing Shramko-Wansing’s Logic, *Studia Logica*, 91: 407–428.
* Post, E. L., 1920, Determination of all closed systems of truth tables, *Bulletin American Mathematical Society*, 26: 437.
* –––, 1921, Introduction to a general theory of elementary propositions, *American Journal Mathematics*, 43: 163–185.
* Ragaz, M., 1983, Die Unentscheidbarkeit der einstelligen unendlichwertigen Prädikatenlogik, *Archiv mathematische Logik Grundlagenforschung*, 23: 129–139.
* Rose, A. and Rosser, J.B., 1958, Fragments of many-valued statement calculi, *Transactions American Mathematical Society*, 87: 1–53.
* Scarpellini, B., 1962, Die Nichtaxiomatisierbarkeit des unendlichwertigen Prädikatenkalküls von Łukasiewicz, *Journal Symbolic Logic*, 27: 159–170.
* Shramko, Y. and Wansing H., 2005, Some useful 16-valued logics. How a computer network should think, *Journal Philosophical Logic*, 34: 121–153.
* Skolem, Th., 1957, Bemerkungen zum Komprehensionsaxiom, *Zeitschrift mathematische Logik Grundlagen Mathematik*, 3: 1–17.
* Stoilos, G. Stamou, G., Pan, J.Z., Tzouvaras, V., and Horrocks, I., 2007, Reasoning with very expressive fuzzy description logics, *J. Artificial Intelligence Res*, 30: 273–320.
* Straccia, U. (2001), Reasoning within fuzzy description logics, *J. Artificial Intelligence Res*, 14: 137–166.
* White, R.B., 1979, The consistency of the axiom of comprehension in the infinite-valued predicate logic of Łukasiewicz, *J. Philosophical Logic*, 8: 509–534.
* Wronski, A., 1987, Remarks on a survey article on many valued logic by A. Urquhart, *Studia Logica*, 46: 275–278.
* Zadeh, L.A., 1965, Fuzzy sets, *Information and Control*, 8: 338–353.
* –––, 1975, Fuzzy logic and approximate reasoning, *Synthese*, 30: 407–428.
* –––, 1978, Fuzzy sets as a basis for a theory of possibility, *Fuzzy Sets and Systems*, 1: 3–28.
* –––, 1979, A theory of approximate reasoning, in J.E. Hayes, D. Michie, L.I. Mikulich (eds.), *Machine Intelligence 9*. New York: Halstead Press, 149–194.

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-manyvalued). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-manyvalued/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-manyvalued&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](http://philpapers.org/sep/logic-manyvalued/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

* [Journal of Multiple-Valued Logic and Soft Computing](http://www.oldcitypublishing.com/journals/mvlsc-home/), Dan A. Simovici and Ivan Stojmenovic, managing editors.

## Related Entries

[logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [logic: fuzzy](https://plato.stanford.edu/entries/logic-fuzzy/) | [logic: paraconsistent](https://plato.stanford.edu/entries/logic-paraconsistent/) | [logic: relevance](https://plato.stanford.edu/entries/logic-relevance/) | [Prior, Arthur](https://plato.stanford.edu/entries/prior/) | [Sorites paradox](https://plato.stanford.edu/entries/sorites-paradox/)

[Copyright © 2015](https://plato.stanford.edu/info.html#c) by  
[Siegfried Gottwald](http://www.sozphil.uni-leipzig.de/cm/philosophie/mitarbeiter/siegfried-gottwald/)

