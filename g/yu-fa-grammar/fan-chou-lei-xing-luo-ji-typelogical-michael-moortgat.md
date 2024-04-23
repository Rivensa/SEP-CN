# 范畴类型逻辑 typelogical (Michael Moortgat)

_首次发布于2010年9月7日星期二_

范畴类型逻辑是次结构逻辑，旨在推理自然语言中形式和含义的组成。这些语法的核心是类型形成操作的残余家族；范畴类型逻辑的层次结构源自于对类型形成操作的结构特性所做的选择，以及引入的用于控制语法资源管理的手段。计算语义是从范畴推导的柯里-霍华德解释中获得的。解析和自然语言处理是以线性逻辑的证明网的适当精炼版本建模的。
 
***

## 1. 一点历史

范畴类型逻辑起源于半个世纪前Jim Lambek撰写的两篇开创性论文（Lambek 1958, 1961）。在这些论文中，作者设定了自己的目标：“获得一个有效的规则（或算法），用于区分句子和非句子，这个规则不仅适用于数理逻辑学家感兴趣的形式语言，也适用于自然语言\[...]”。为了实现这一目标，熟悉的词类（名词、动词等）被转化为逻辑的公式 —— 一种用于推理语法组成的逻辑。在这种观点下，判断一个短语是否合法是推导过程的结果。通过将语法逻辑转化为Gentzen风格的序言演算格式，可以获得这些判断的决策过程。序言演算的表现形式非常简单：语法逻辑是一种没有结构规则的逻辑。收缩和弱化被舍弃；它们的存在将意味着合法性不受任意复制或删除语法材料的影响。为了考虑词序和短语结构信息，Lambek进一步去除了交换和（在1961年的论文中）结合的结构规则。

在它们发布时，并没有引起共鸣；它们对计算语言学领域的影响可以追溯到上世纪 80 年代。两个因素在这种迟来的认可中起到了重要作用。第一个因素是在范本 1983 年的 Curry-Howard 证明即程序解释的基础上，加入了一种用于范畴推导的计算语义，该论文在 Buszkowski 等人 1988 年的文章中再版。从这种角度看，Lambek 的范畴类型逻辑语法可以被看作是以一种毫不妥协的方式实现蒙塔古的组合性计划，其中λ演算和类型理论提供了强大的工具来研究推导和词汇语义。第二个因素是引入了线性逻辑（Girard 1987），随之而来的是对次结构逻辑的兴趣激增。线性逻辑注入到范畴类型逻辑语法中的一个关键见解是结构规则可以通过所谓的模态性以受控的形式重新引入：在转向更具有区分性的类型逻辑时，并没有失去表现力。从计算的角度看，线性逻辑的证明网的变体为范畴类型自然语言处理提供了基础。

在其当前版本中，范畴类型逻辑语法保留了 Lambek 原始演算的一般架构，但将其扩展到更具表达力的类型形成操作词汇。重要的是乘法操作，用于模拟语法组合；这是本文的重点。除了乘法运算，还可以考虑加法或布尔运算以及第一或第二阶量化，以处理词汇歧义、类型多态性和特征信息的管理现象。Morrill 1994 是这些扩展的很好的例子来源。

本文概述。我们从标准的 Lambek 系统开始。我们研究它们的模型论和证明论方面（框架语义，序言演算），以及两者之间的关系（完备性，完备性）。我们将组合解释特征化为将句法源演算和目标演算相关联的同态关系。该映射将句法推导与语义阅读关联起来，表达为简单类型线性λ演算的术语。在第 3 节中，我们转向标准 Lambek 系统的表达限制，在语法和语义方面，并研究如何通过系统地以模块化方式扩展范畴体系结构来解决这些问题。泛化涉及形成类型操作的性质（二元组合操作与一元控制运算符）；多模扩展，其中多个类型形成操作族共存，并通过结构交互原则进行通信；单分类与多分类逻辑（不连续演算）；单结论与多结论系统（对称演算）；以及更结构化的语法-语义界面观点（续延语义）。为了结束全景之旅，我们介绍了第 3 节中研究的各种范畴类型系统的证明网，然后我们比较这些系统在表达能力和计算可处理性方面的差异。

## 2. Lambek 系统

### 2.1 模拟语法组合

在本节中要考虑的类型语言由一小组原子类型组成，并在乘积、左除和右除等二元运算下封闭。一些符号约定：在下面的规范中，小写 p 范围在原子类型上，大写 A、B 范围在任意类型上。我们将 A_B_ 发音为“A 在 B 下” ，将 B/A 发音为“B 在 A 上”，以明确“分数”的哪部分是分母（A），哪部分是分子（B）。

* 类型：A，B ::= p | A ⊗ B | A_B_ | B/A

在对语言表达进行分类时，原子类型代表可以被认为是语法上“完整”的短语。例如，在英语中，s 可以表示陈述句（“Mary dreams”，…），np 可以表示名词短语（“Mary”，“the girl”，…），n 可以表示普通名词（“girl”，“smart girl”，…）。除法表示不完整性：具有类型 A_B_（B/A）的表达式在与其左侧（右侧）的类型 A 的短语组合在一起时将产生类型为 B 的短语。乘积类型 A ⊗ B 明确表示通过按照 A 和 B 类型的组成部分的顺序形成复杂短语。因此，如果“Mary”被标记为 np，动词“dreams”被标记为 np_s_，我们通过展开这些类型：np ⊗ (np_s_) 获得“Mary dreams” 的类型 s。对于组合“the girl dreams”，其中一个从类型 np/n 开始为冠词，n 为“girl”：((np/n) ⊗ n) ⊗ (np_s_)。

为了使对类型语言的非正式描述更加精确，我们转向模态逻辑。在范畴设置中，框架 F = (W,R) 由一组语言资源（表达式，“符号”）构成，这些资源以三元关系 R 结构化。这个三元关系代表了语法组合，或者在生成传统中被称为“Merge”：将 Rxyz 理解为“通过将子表达式 y 和 z 组合在一起得到表达式 x”。作为比较：在相关逻辑的 Routley-Meyer 语义中，R 将是解释融合操作的可访问关系。

模型 M 是一对 (F,V)，其中 V 是一个将原子类型映射到 W 的子集的解释（估值）。对于复杂类型，解释遵守以下条款。我们将 x ∈ V(A) 写为 M,x ⊩ A 或者，如果不会引起混淆，写为 x ⊩ A。

* x ⊩ A ⊗ B 当且仅当存在 yz 使得 Rxyz 且 y ⊩ A 且 z ⊩ B
* y ⊩ C/B 当且仅当 ∀xz，如果 Rxyz 且 z ⊩ B，则 x ⊩ C
* z ⊩ A_C_ 当且仅当 ∀xy，如果 Rxyz 且 y ⊩ A，则 x ⊩ C

范畴类型语言的句法演算是一个推导系统，产生形如 A ⊢ B 的陈述（‘B 可从 A 推导出’）。在模型中，陈述 A ⊢ B 成立（‘M ⊨ A ⊢ B’）如果 V(A) ⊆ V(B)；它是有效的（‘⊨ A ⊢ B’）如果在所有模型中成立。对于最小语法逻辑，句法演算中的推导集是从下面的公理和推理规则中自由生成的。出于历史原因，这个最小系统被称为 NL（代表‘非结合 Lambek 演算’）。第一行陈述了可推导性是一个自反的、传递的关系，即一个前序关系。第二行的双向（‘当且仅当’）推理规则表征了乘法和除法运算作为残余三元组，正如在残余理论中所知。 （Galatos 等人 2007 年提供了很好的背景阅读。）如此定义的句法演算恰好符合类型语言的预期解释，如下面的完备性和完备性结果所示。

* 先序律：
  * A ⊢ A（自反性）
  * 若 A ⊢ B 和 B ⊢ C 推出 A ⊢ C（传递性）
* 残余定律：A ⊢ C/B 当且仅当 A ⊗ B ⊢ C 当且仅当 B ⊢ A_C_
* 声音性和完备性：在范畴类型逻辑 NL 中，A ⊢ B 在语法基本逻辑中是可证明的，当且仅当 ⊨ A ⊢ B，即当且仅当对于每个估值 V 在每个框架 F 上，V(A) ⊆ V(B)（Došen 1992）。

对于 NL 的完备性结果并不对合并关系 R 的解释施加任何限制。这意味着最小语法逻辑的定理和推理规则具有语法不变性的地位：无论个别语言的结构特点如何，类型组合的属性都是成立的。以下是一些这种普遍有效原则的例子。它们是成对出现的，因为斜杠和反斜杠之间存在左右对称性。

* 应用程序:
  * (_A_/_B_) ⊗ _B_ ⊢ _A_
  * _B_ ⊗ (_BA_) ⊢ _A_
* 共应用:
  * _A_ ⊢ (_A_ ⊗ _B_)/_B_
  * A ⊢ B → 目标(◊,□,/,⊗,), 使得
* 在 Source 逻辑中，当且仅当 μ(A) ⊢ μ(B) 在 Target 逻辑中可推导时，A ⊢ B 是可推导的

在目标逻辑比源逻辑更具辨识性的情况下，翻译实现许可类型的控制。当目标系统不如源系统具辨识性时，通信的另一方向获得。在这种情况下，翻译所产生的模态修饰阻止了结构规则的适用。

框架约束，术语赋值。对于纯残留逻辑的框架语义不对 R◊ 和 R⊗ 关系的解释施加限制。在具有模态控制结构假设的扩展版本中，每个结构假设都有一个框架约束，并且相对于适当受限制的框架，完备性成立。

|     |    |     |    |     |   |     |
| --- | -- | --- | -- | --- | - | --- |
| _x_ |    |     |    | _y_ |   | _z_ |
|     | \\ |     | /  |     |   |     |
|     |    | _s_ |    |     |   | _t_ |
|     |    |     | \\ |     | / |     |
|     |    |     |    | _r_ |   |     |

|     |    |     |    |      |   |      |
| --- | -- | --- | -- | ---- | - | ---- |
|     |    |     |    |      |   | _z_  |
|     |    |     |    |      |   |      |
|     |    | _y_ |    |      |   | _t_′ |
|     |    |     | \\ |      | / |      |
| _x_ |    |     |    | _s_′ |   |      |
|     | \\ |     | /  |      |   |      |
|     |    | _r_ |    |      |   |      |

|     |    |      |    |      |   |     |
| --- | -- | ---- | -- | ---- | - | --- |
|     |    |      |    | _z_  |   |     |
|     |    |      |    |      |   |     |
| _x_ |    |      |    | _t_′ |   |     |
|     | \\ |      | /  |      |   |     |
|     |    | _s_′ |    |      |   | _y_ |
|     |    |      | \\ |      | / |     |
|     |    |      |    | _r_  |   |     |

> 输入 输出 ◊ 混合关联 输出 ◊ 混合交换

用一个分支节点表示 R⊗，用一个非分支节点表示 R◊，在这里讨论的模态控制提取原则中，我们有一个约束条件，对于所有像下面输入配置中组合的 x,y,z,r,s,t，存在替代的内部点 s′, t′ 连接根节点 r 到叶子节点 x,y,z。

对于模态扩展的句法源演算与语义目标演算 LP 之间的映射，我们有两个选项。第一个是将 ◊,□ 纯粹视为句法控制设备。然后设置 (◊A)′ = (□A)′ = A′，影响情态的推理规则在与推导相关联的 LP 项中不留下任何痕迹。第二个是实际为新类型提供指称域，并相应地扩展术语语言。对于 ◊,□ 的最小逻辑，可以参考 Wansing (2002)，他对最小时间直觉逻辑进行了集合论解释。未来可能性和过去必然性的时间情态在控制算子 ◊,□ 的证明理论和关系解释方面是无法区分的。Morrill (1990) 为更强的 S5 情态提供了一种内涵 λ 演算解释，该解释假定在框架语义层次存在一个普遍可达关系。在这种情况下，A 的模态化公式的指称是从指标（情境，参考点）到 A 的指称的函数。

讨论。这里讨论的控制操作符与 Stabler 的最简语法代数形式中使用的句法控制特征非常相似（Stabler 1997, 1999）。这些特征，如◊，□，成对出现，一个是许可证‘+f’，另一个是被许可证‘−f’，它们必须相互抵消才能使推导成功；移位是由适当的许可证特征触发的。有关最简派和范畴类型逻辑对结构控制的明确比较，请参见 Vermaat（2004）。

是否需要模态控制的结构规则的完整表达能力是一个争论的问题。Vermaat（2006）坚持认为，跨语言的位移可能性可以完全用上述讨论的右分支提取假设以及左分支提取的镜像来捕捉。在这种观点下，这个假设集合在通用语法层面上是固定的，并且变化被减少到决定激活哪种可用提取模式的语言特定词汇表的语言特定词汇表，这与原始范畴系统的激进词汇主义一致。

### 3.2 不连续性逻辑

Morrill 及其合作者开发的不连续 Lambek 演算（参见 Morrill 等人 2007 年，2009 年）以及即将出版的专著第 6 章（Morrill 2010 年）扩展了结合性 Lambek 演算 L。我们看到 L 是由串联组成的字符串的逻辑。不连续演算通过概念化分裂字符串丰富了本体论：由分离部分组成的表达式，如习语“take — to task”。要构建短语“take someone to task”，需要将不连续表达式包裹在其对象周围。在这个特定的例子中，存在一个不连续点，但也可以考虑存在多个分裂点的情况。这自然地导致了两种不连续组合的概念：一种是确定性视图，其中包裹目标特定的分裂点，另一种是非确定性视图，其中目标分裂点是任意的。对于具有单个分裂点的表达式，这两种概念是一致的。

DL（不连续 Lambek 演算）的词汇包括一元和二元类型形成操作的残留家族。下面给出了一个代表性样本。对于二元情况，除了 L 的串联积和剩余斜杠操作之外，我们还有一个不连续（包裹）积 ⊙，带有残留中缀 ↓ 和提取 ↑ 操作。对于确定性解释，不连续类型形成操作具有明确指向其解释对象的第 k 个分裂点的索引形式 ↑k，⊙k，↓k。一元操作的功能是控制分裂点的创建和移除。与二元情况一样，我们有非确定性操作（桥 ∧，分裂 ∨）和带有确定性解释的索引形式（∧k，∨k）。

> _A_,_B_ ::= … | _A_ ⊙ _B_ | _A_ ↓ _B_ | _B_ ↑ _A_ | ∧_A_ | ∨_A_

在模型理论方面，DL 的一个创新特点是转向多分类解释。关键概念是分级代数：一个自由生成的代数 (W,·,1, ⎵)，其中 L\* 的解释的幺半群 (W,·,1) 增加了一个称为分隔符的特殊生成器 ⎵。表达式 s 的排序，σ(s)，由其中分隔符的出现次数给出。零元排序的表达式是 L 的语言模型中熟悉的字符串。排序为 n > 0 的表达式是分割字符串，其中有 n 个标记位置可以替换为其他表达式。

类型的解释现在相对于分类域 Wi = {s | σ(s) = i} 进行。因此，框架是分类结构 ({Wi}i∈N,R**bridge,R**wrap,·,{bridgek}k∈N **,{wrapk}k∈N**)，其中有 n + 1 元关系用于 n 元类型形成操作，具有非确定性解释和 n 元操作（函数）用于 n 个位置的确定性词汇项。操作 · : Wi × Wj → W\*\*i+ 是 L 的连接操作的分类版本。

| 关系/操作                                 | interpretation                          |
| ------------------------------------- | --------------------------------------- |
| _Rwrap_⊆_W\*\*i_+1 ×_Wj_×_W\*\*i_+_j_ | 最小关系，使得 Rwrap(u⎵w,v,uvw)                |
| _R\*\*bridge_⊆_W\*\*i_+1 ×_Wi_        | 最小关系，使得 R\*\*bridge(u⎵v,uv)             |
| wrapk：W**i+1 × Wj → W**i+_j_          | wrapk(s,t) 是将 s 中第 k 个分隔符替换为 t 的结果      |
| _bridgek_:_W\*\*i_+1 →_Wi_            | bridgek(s) 是通过将 s 中的第 k 个分隔符替换为 1 得到的结果 |

DL 的解释将第 i 类别的原子类型与 Wi 的子集相关联。新复杂类型的解释子句是标准的。根据下面的示例，我们给出了非确定性 bridge/split 和 wrapping family 的子句。类型的类别可以从解释操作/关系的类别信息中轻松计算得出。

* s ⊩ ∧A 当且仅当 ∃t(Rbridge(t,s) and t ⊩ A)
* t ⊩ ∨B 当且仅当 ∀s(Rbridge(t,s) implies s ⊩ B)
* s ⊩ A ⊙ B 当且仅当 ∃s′s″(Rwrap(s′,s″,s) and s′ ⊩ A and s″ ⊩ B)
* s″ ⊩ A ↓ C 当且仅当 ∀s′s(如果 Rwrap(s′,s″,s) 并且 s′ ⊩ A, 那么 s ⊩ C)
* s′ ⊩ C ↑ B 当且仅当 ∀s″s(如果 Rwrap(s′,s″,s) 并且 s″ ⊩ B, 那么 s ⊩ C)

在证明论方面，DL 的序言表示的切除定理确立了可决定性。DL 序言规则被证明与预期解释相符合；迄今为止尚未获得完备性结果。对于从语法源演算 DL 到语义目标演算 LP 的映射，一元类型形成操作被认为是惰性的：因此，这些连接词的推理规则在与语法源演算中的推导相关的 LP 证明术语中不留下任何痕迹。对于连续和不连续的族群，其余的处理方式完全相同。具体而言，中缀和提取操作被映射到 LP 函数类型，如斜杠。

说明。范畴类型逻辑已成功应用于大量的不连续依存关系，包括明显型和隐蔽型。非确定性操作已被用来建模粒子移位和补语交替结构。第 1 类（单一分裂点）的确定性操作用于分析非周边提取、不连续习语、间隙和省略、量词范围解释、自反化、引导性提取和荷兰语交叉串行依存关系等。

我们用英语粒子移位来说明范畴类型逻辑的非确定性使用，使用标记的自然推导格式来显示推导，其中包含“形式-意义：类型”项目。一个动词-粒子组合“call — up”可以被词汇类型化为∨(np_s_) ↑ np，属于第 2 类，具有内部分裂点和右周边分裂点。消除非确定性提取操作↑提供了一个选择，即包裹将影响第一个还是第二个分裂点。下面显示了第一个选项。在∨的消除步骤中移除了剩余的分隔符，结果是连续的动词短语“call Mary up”或“call up Mary”。

> 被叫 ⋅ ⎵ ⋅ 上 ⋅ ⎵ −电话：∨(np_s_) ↑ np 玛丽 − m：np E↑

| 范畴类型逻辑 ⋅ Mary ⋅ up ⋅ ⎵ − (phone m) : ∨(np_s_) | _E_∨ |
| --------------------------------------------- | ---- |
| 范畴类型逻辑 ⋅ Mary ⋅ up − (phone m) : np_s_        |      |

对于涉及隐性不连续性的示例，请考虑量词作用域的解释。DL 为诸如“每个人”、“某人”等广义量词表达式提供统一的类型赋值：(s ↑ np) ↓ s。在句法源演算中，这种类型赋值允许量词短语 QP 占据任何常规非量词名词短语可以占据的位置。在语义上，语义目标演算 LP 中↑引入规则的形象将 np 类型假设绑定到 QP 占据的位置（a − x : np 前提，其中 a 和 x 是 np 假设的结构和语义变量）。↓消除规则的形象将代表 QP 含义的术语应用于此抽象。作用域歧义源自源演算 DL 中的推导歧义。下面的推导导致非局部阅读“有一个特定的 x，玛丽认为 x 离开了”。从结论向上看，应用的最后一个规则是↓消除，这意味着 QP 在主句水平上取得作用域。产生局部作用域阅读的另一种推导将使“认为”的/消除规则成为最后一步：(np_s_)/s。

|                |
| -------------- |
| …_a_−_x_:_np_… |
| ⋮              |

> 玛丽 ⋅ 认为 ⋅ 一个 ⋅ 左 − ((认为 (左 x)) m) : s
>
> ↑我 ↓Esomeone − ∃ : (s ↑ np) ↓ s 玛丽 ⋅ 想 ⋅ ⎵ ⋅ 离开 − λx.((想 (离开 x)) m) : s ↑ np 玛丽 ⋅ 想 ⋅ someone ⋅ 离开 − (∃ λx.((想 (离开 x)) m)) : s

讨论。DL 扩展的基础是关联演算 L。正如我们上面所看到的，对短语结构的全局不敏感是一种过度生成的原因，除非被明确的岛屿模态所阻止。在 DL 的发展中，似乎并不依赖于基本系统的结合性：换句话说，将 DL 作为非结合基础的扩展似乎完全可行，从而允许表示成分结构信息。在解释框架中，人们将从分级群体而不是幺半群开始。DL 框架能够轻松适应基于字符串或树的观点，这一事实证明了该方法的多功能性。

### 3.3 对称范畴类型逻辑

我们在前几节中学习的句法演算的扩展都遵守“直觉主义”限制：在语句 A1,…,An ⊢ B 中，前提可以由多个公式组成（在非结合情况下配置为 ⊗ 树，在 L、LP 情况下配置为列表或多重集），而结果是单个公式。

在一篇引人注目的论文中，早于线性逻辑五年，Grishin（1983）提出了许多 Lambek 演算的扩展，这些扩展具有一个共同特征，即通过乘法连接将假设 A1,…,An 一起考虑，通过乘法析取将多个结论 B1,…,Bm 结合在一起。最近几年开始对 Grishin 的想法进行语言学探索。在本节中，我们介绍一个已经被广泛研究的多结论范畴系统：LG（代表 Lambek-Grishin 演算）。我们介绍该系统的语法和关系语义；在下一节中，我们将转向其计算解释。

> 预序定律 A ⊢ A

|                 |
| --------------- |
| _A_⊢_B_ _B_⊢_C_ |
| _A_⊢_C_         |

> (双重) 残余定律

| _A_⊢_C_/_B_ |
| ----------- |
| _A_⊗_B_⊢_C_ |
| _B_⊢_AC_    |

| _B_⦸_C_⊢_A_ |
| ----------- |
| _C_⊢_B_⊕_A_ |
| _C_⊘_A_⊢_B_ |

> 交互原则

| _A_⊗_B_⊢_C_⊕_D_ |
| --------------- |
| _C_⦸_A_⊢_D_/_B_ |

| _A_⊗_B_⊢_C_⊕_D_  |
| ---------------- |
| _B_⊘_D_⊢_A_\\_C_ |

| _A_⊗_B_⊢_C_⊕_D_  |
| ---------------- |
| _C_⦸_B_⊢_A_\\_D_ |

| _A_⊗_B_⊢_C_⊕_D_ |
| --------------- |
| _A_⊘_D_⊢_C_/_B_ |

> 范畴类型逻辑 Lambek-Grishin 演算 LG

LG 由纯残余逻辑 NL 的对称版本以及与结构保持相互作用原则相关的保持结构的操作原则组成。我们依次讨论这些组成部分。为了对称性，形成类型的操作清单加倍：除了 NL 操作⊗,,/（乘积，左右除法）之外，还有第二组⊕,⊘,⦸：余积，右左差。这两组通过箭头反演对称δ相关，根据下表翻译类型公式。

> δ

|                         |
| ----------------------- |
| _C_/_B_ _A_⊗_B_ _AC_    |
| _B_⦸_C_ _B_⊕_A_ _C_⊘_A_ |

在可推导性层面上，我们有 A ⊢ B 当且仅当 δ(B) ⊢ δ(A)：对于 NL 中的每个定理或规则，我们在 LG 中也找到其在 δ 下的映像。关于符号的说明：我们将 B ⦸ A 读作“从 A 中得到 B”，将 A ⊘ B 读作“A 减去 B”，即被减去的量放在带圈的（反）斜杠下面，就像在左除和右除类型的情况下分母放在（反）斜杠下面一样。在“公式即类型”的精神中，我们将自由地将除法操作称为蕴涵，将差异操作称为协蕴涵。

产品和余产品族之间的通信需要将交互原则添加到（对偶的）残留定律中。上述原则采用以下方法得到推理规则：从前提 A ⊗ B ⊢ C ⊕ D 中，选择一个乘积项和一个余积项；在结论中，同时引入剩余两个项的残余操作。利用（对偶的）残留定律，可以从交互原则中推导出以下模式。或者，可以将（P1）-（P4）视为原始公设，并利用传递性和（对偶的）残留定律得出交互原则作为推导的推理规则。

| (P1) | (_A_⦸_B_) ⊗_C_⊢_A_⦸ (_B_⊗_C_)   |
| ---- | ------------------------------- |
| (P2) | _C_⊗ (_A_⦸_B_) ⊢_A_⦸ (_C_⊗_B_)  |
| (P3) | _C_⊗ (_B_⊘_A_) ⊢ (_C_⊗_B_) ⊘_A_ |
| (P4) | (_B_⊘_A_) ⊗_C_⊢ (_B_⊗_C_) ⊘_A_  |

形式为(P1)–(P4)的可导性模式被称为线性分配原则 — 线性，因为它们不会复制任何涉及的术语。在范畴类型逻辑中，除了是线性的之外，它们还尊重非交换、非结合类型构造操作中编码的词序和短语结构信息。

说明。范畴类型逻辑的交互原则提供了一种特别直接的方式来捕捉依赖中缀而不是串联的现象。下面的推导（使用单调性和（对偶）残余步骤）展示了相同信息（相同前提）如何被用于在转角的左侧引入蕴涵 B_C_，或在右侧引入协蕴涵 B ⊘ C。第一种选项导致应用规则 — 标准 Lambek 演算的中心组合操作。第二种选项导致 Co-Application 变体。尽管这两个规则都是从相同的前提推导出来的，但它们之间有一个重要的区别。当蕴涵 B_C_与其参数组合时，它必须保持外部于 X。在协蕴涵的情况下，当 X 是因子 A1,…,An 的某个乘积时，交互原则的条件得到满足。这意味着协蕴涵 B ⊘ C 将能够下降到短语 X 中，并与任何组成部分 Ai 结合成一个公式(B ⊘ C) ⦸ Ai。

|                  |
| ---------------- |
| _X_⊢_B_ _C_⊢_Y_  |
| _BC_ ⊢_XY_       |
| _X_⊗ (_BC_) ⊢_Y_ |

|                     |
| ------------------- |
| _X_⊢_B_ _C_⊢_Y_     |
| _X_⊘_Y_⊢_B_⊘_C_     |
| _X_⊢ (_B_⊘_C_) ⊕_Y_ |

一般来说，类型为 (B ⊘ C) ⦸ A 的表达式在类型为 B 的上下文中表现为 A，然后作为一个将 B 转换为 C 的函数。我们通过前一节中的 DL 分析所见的非局部范围解释的示例进行说明。关键点是将广义量词表达式的词汇类型分配为 (B ⊘ C) ⦸ A，将其实例化为 (s ⊘ s) ⦸ np。这个推导的语义解释将在下面讨论。

> \| np ⊗ (((np_s_)/s) ⊗ (np ⊗ (np_s_))) ⊢ s s ⊢ s | | --- | --- | --- | --- | --- | --- | --- | --- | | np ⊗ (((np_s_)/s) ⊗ ( np ⊗ (np_s_))) ⊢ (s ⊘ s) ⊕ s | | | | | | | | | ⋮ | | | | | | | | | np | ⊗ | (((np_s_)/s) | ⊗ | (( (s ⊘ s) ⦸ np ) | ⊗ | (np_s_)) | ) ⊢ s | | 爱丽丝 | | 认为 | | 有人 | | 离开 | |

**Completeness, decidability**. Relational models for **LG** are given in terms of two interpreting relations: _R_⊗ for multiplicative conjunction (merge, fusion), and _R_⊕ for multiplicative disjunction (fission). The truth conditions for co-product and the difference operations are given below.

* _x_ ⊩ _A_ ⊕ _B_ iff ∀_yz_(if _R_⊕_xyz_, then either _y_ ⊩ _A_ or _z_ ⊩ _B_)
* y ⊩ C ⊘ B 当且仅当 ∃xz(R⊕xyz 且 非-(z ⊩ B) 且 x ⊩ C)
* z ⊩ A ⦸ C 当且仅当 ∃xy(R⊕xyz 且 非-(y ⊩ A) 且 x ⊩ C)

对于这种解释，LG 的完备性在 Kurtonina 和 Moortgat 2010 中得到证明。最小对称系统（不包括交互原则）具有分裂关系 R⊕和合并关系 R⊗作为不同的关系，而不对它们的解释施加限制。在交互原则的存在下，它们的解释与框架约束相关。例如，分配性原则 (A ⦸ B) ⊗ C ⊢ A ⦸ (B ⊗ C) 对应于以下约束：对于每个 x，y，z，w，v，如果我们有一个配置 R⊗xyz 和 R⊕vwy，则存在一个替代的内部点 t，使得 R⊕twx 和 R⊗tvz。为了可判定性，Moortgat（2009）以展示演算的形式给出了 LG 的序列演算表达，允许无割证明搜索。

讨论。LG 是比 CNL 更弱的逻辑，即 Groote 和 Lamarche 2002 年的经典非结合 Lambek 演算。在后者系统中，就像在经典线性逻辑中一样，我们有一个逆否定和德摩根对偶，将乘法连接（times）和析取（par）转化为可互相表达的操作。就语言应用而言，人们可以将 LG 与第 3.2 节的不连续演算进行比较。而后者提供了对抽取和中缀类型的不连续性的统一分析，LG 的分配原则主要是针对中缀类型的。值得注意的是，Grishin 1983 提出了第二组分配原则 —— 是上述讨论的逆。这些原则是否能在对明显位移的分析中发挥作用尚待观察。从形式上看，每组分配原则都是基本对称演算的保守扩展。但是两者的结合（即，分配原则作为可逆规则）会导致（协）乘积操作的部分结合性/交换性，即，结构保持会丢失。

### 3.4 灵活解释，延续语义

在前几节中，重点是扩展句法源演算的能力。在本节中，我们将看一下将更多结构放入源演算和目标演算之间映射的发展。

在第2.2节中讨论的句法-语义映射是刚性的：一旦我们确定了它对句法源演算的原子类型的作用，一切都是固定的。这种刚性在我们有一类句法表达对意义组装贡献不均匀时就会出现问题。名词短语就是一个例子。将np映射到语义类型e对于专有名词和定冠词短语是合适的，它们的指称可以被视为个体。但对于像“某人”、“没有学生”这样的量化表达，类型e的解释是不足够的。因此，刚性的句法-语义映射迫使我们在句法中为这些表达分配一个高阶类型，例如s/(np_s_)，以获得具有正确指称类型的语义类型作为翻译形象，(e → t) → t。如果想要避免这种句法上的语义动机复杂化，可以设定np' = (e → t) → t。但现在的效果将是，简单的及物动词(np_s_)/np，本来希望默认将其视为二元关系e → e → t，却与第三阶解释相关联。

灵活的解释。对于句法-语义界面的这种严格观点，Hendriks 1993年的灵活解释是一个吸引人的替代方案。在这种方法中，句法源演算的一种类型与无限集合的LP类型相关联：其中一个是与句法源类型相关联的默认语义类型，其他类型是通过类型转换法从默认类型派生而来的。类似地，源演算术语被翻译成无限集合的目标语义术语；其中一个是基本翻译（不一定是相关句法类别的默认语义类型），其他术语是通过柯里-霍华德术语映像的类型转换法派生而来的。所使用的类型转换原则是（i）参数降低，（ii）值提升，以及（iii）参数提升。前两者对应于NL的有效类型转换；参数提升是超越句法源演算表达能力的关键原则，正如我们在§2.2中所看到的。

作为范畴类型逻辑灵活解释的一个例子，比较一下“John loves Mary”和“Everyone loves someone”。从句法上看，所有名词短语都被标记为np，动词为(np_s_)/np。“John”和“Mary”被解释为类型e的常量，“loves”被解释为类型e → e → t的常量，这是句法源类型的默认语义类型。但是，“everyone”和“someone”被映射为类型(e → t) → t的常量。解释“Everyone loves someone”的句法推导时，语义类型不再简单地匹配函数应用：动词期望两个e类型的参数，但实际上找到的是两个类型为(e → t) → t的参数。通过参数提升来容纳这些高阶参数有两种方式：取决于首先提升宾语参数然后主语，还是反之，可以获得一个句法推导的两种解读：一个对应表面顺序的解读，∀取范围在∃之上，以及一个具有倒置范围顺序的解读。在这种灵活观点下，句法和语义之间的对应关系已经成为一种关系，而不再是由§2.2的翻译同态决定的功能性确定。

继续。近年来，已经清楚地表明，Hendriks 关于派生歧义的范畴转换解释的核心思想可以以一种继续传递风格解释（CPS）的方式重新阐释，这在计算机科学中得到了发展，并且有不同的可用于这种解释的评估策略。在自然语言语义学中使用继续的先驱是 de Groote（2001b）和 Barker（2002）。在编程语言理论中，继续是控制状态的表示，即要执行的计算的未来。通过将控制状态作为解释中的显式参数添加，程序可以操纵其继续，从而表达否则无法使用的控制结构。从技术上讲，继续语义利用了计算的最终结果的指定响应类型；对于类型 A 的表达式，继续是一个将 A 值取到响应类型的函数。在应用于自然语言语义时，响应类型通常被确定为真值 t 的类型，即分配给完整句子的类型。

Barker 2004 展示了如何通过继续传递风格的转换来获得“每个人都爱某人”中的类型转换作用域歧义。关键思想是，在将源演算映射到语义目标演算时，所有类型都带有额外的继续参数。我们使用一个新的翻译函数(·)_来实现这一点，它将从句法到语义类型的映射与继续化相结合。现在，源语言类型 A 与目标语言中的所谓计算相关联，即作用于其自身继续的函数：A_ = (A′ → t) → t。

在证明的层面上，考虑到类型的上述解释，任务是为下面的 sequent 找到一个 LP 证明，即 A, A_B_ ⊢ B 和 B/A, A ⊢ B 的\和/消除规则的图像。而在源演算中，只有一种将 A_B_（或 B/A）函数与其 A 参数组合的方式，在目标演算中，有关于求值顺序的选择：我们是想先评估参数的翻译图像，然后是函数的图像，还是反过来。我们用·v 表示第一种选项（按值调用），用·n 表示第二种选项（按名调用）。在目标语言中，m 和 n 是类型 A′ → B′和 A′的变量；k 是生成的 B′ → t 延续。

* 应用的 LP 翻译： (_A_′ → _t_) → _t_, ((_A_′ → _B_′) → _t_) → _t_ ⊢ (_B_′ → _t_) → _t_
* 按值调用解决方案: (_M_ ⊲ _N_)_v_ = (_N_ ⊳ _M_)_v_ = λ_k_.(_N\*\*v_ λ_n_.(_M\*\*v_ λ_m_.(_k_ (_mn_))))
* 按名调用解决方案: (_N_ ⊳ _M_)_n_ = (_M_ ⊲ _N_)_n_ = λ_k_.(_M\*\*n_ λ_m_.(_N\*\*n_ λ_n_.(_k_ (_mn_))))

类型转换方法的延续传递风格解释使得可以将句法类型 np 同时分配给专有名词和量化名词短语：在目标演算中，np 的翻译具有适当的语义类型 (e → t) → t。但是提升策略现在被推广到所有源类型：一个及物动词 (np_s_)/np) 被映射为 ((e → e → t) → t) → t，等等。对于类型 A 的词汇常量的翻译，默认的方法是 λk.(k c)，其中 c 是类型 A′ 的非逻辑常量。默认翻译简单地将这些词汇项目的语义值传递给延续参数 k。但是量化名词短语有效地利用了延续参数：它们在其延续上取作用域，导致词汇翻译 λk.(∀ λx.(k x))，λk.(∃ λx.(k x)) 分别对应于 'everyone' 和 'someone'。在评估策略之间的选择，结合这些词汇翻译，然后导致在源演算中单一推导的不同解释，例如 M = (everyone⊳(loves⊲someone))，其中 ·v 产生表层作用域解释，而 ·n 产生倒置作用域解读。

| _M\*\*v_ | = | λ_k_.(∀ λ_x_.(∃ λ_y_.(_k_((_loves_ _y_)_x_))) |
| -------- | - | --------------------------------------------- |
| _M\*\*n_ | = | λ_k_.(∃ λ_y_.(∀ λ_x_.(_k_((_loves_ _y_)_x_))) |

以上示例仅使用了范畴类型逻辑中的斜杠消除。引入延续的一个重要动机是使得能够对经典逻辑（而非直觉主义逻辑）给出建设性解释；详见 Sørensen 和 Urzyczyn 2006 年的讨论。因此，也不足为奇，多结论对称范畴语法 LG 在延续传递风格中有自然解释（Bernardi 和 Moortgat 2010 年，Moortgat 2009 年）。在我们上面给出的示例中，源类型 A 提供了一个单一的延续参数。在 LG 类型的 CPS 翻译中，对语法源类型的延续化是递归执行的。我们用 V(A)表示类型 A 的目标语言值，用 K(A)表示延续，即函数 V(A) → R，用 C(A)表示计算，即函数 K(A) → R，其中 R 是响应类型。对于 LG 的语法源类型 A，按值调用的 CPS 翻译产生 LP 值 V(A)如下。对于原子类型，V(p) = p，

* implications: _V_(_AB_) = _V_(_B_/_A_) = _K_(_B_) → _K_(_A_)
* 联合蕴含（对偶于蕴含）：V(A ⊘ B) = V(B ⦸ A) = K(A_B_)

在证明层面（以及与之对应的柯里-霍华德对应中的术语），CPS 翻译将多结论源推导转换为单结论 LP 推导。该翻译遵守以下不变性。活跃输出公式 A（在下方方框中用竖线标记）映射到计算 C(A)，活跃输入公式映射到延续 K(A)。因此，剪切被解释为将 C(A)应用于 K(A)。

| 范畴类型逻辑：LG/,,⊘,⦸ | →CPS    | target:**LP**→         |
| --------------- | ------- | ---------------------- |
| _X_⊢_A_         | _Y_     |                        |
| _X_             | _A_⊢_Y_ |                        |
| _X_⊢_Y_         |         | _V_(_X_),_K_(_Y_) ⊢_R_ |

讨论。现在可以使用基于延续的方法来处理一些看似无法进行组合处理的顽固现象。在句子级别上的例子包括 Shan 和 Barker 2006 年关于原位范围构建和 wh 问题的处理，其中交叉和优越性违规是以人类处理器对左到右评估策略的偏好来解释的；驴子照应（Barker 和 Shan 2008）；对于 LG 的按值调用和按名调用解释的量词范围歧义在 Bernardi 和 Moortgat 2010 年进行了研究。在话语层面上，de Groote（2006）对动态现象进行了类型理论分析，将命题建模为对句子左右上下文（延续）的函数。

## 4. 证明网和处理

在前几节中，我们已经看到不同的范畴计算可以被呈现为具有基于序列的决策过程的证明系统。然而，在这些系统中进行朴素的证明搜索在计算上是低效的：一般来说，会有多种构建替代证明的方式，它们仅在推理规则应用的顺序上有所不同，但产生相同的解释（与解释同态下的推导相关联的 LP 术语）。这种“虚假”歧义问题可以通过引入正规形式推导（如 Hepple 1990、Hendriks 1993 中所述）来解决，比较线性逻辑中的焦点证明搜索制度），结合使用基于图表的解析方法，如 Hepple 1999、Capelletti 2007 中所述。对于范畴“解析即推导”的另一种选择是将序列演算留在原地，转而采用证明网方法。证明网最初是在线性逻辑的背景下开发的，它使用一种推导的表示形式，从根本上不受“虚假歧义”的影响，即，无关紧要的规则排序问题根本不存在。关于证明网的一般处理，我们参考线性逻辑条目。以下我们评论一些专门解决范畴语法问题的方面。

Lambek演算的证明网。Roorda（1991年，1992年）最初研究了关联演算L和交换变体LP的证明网。为了捕捉这些系统的“直觉主义”特性，人们使用带极性的公式：对于公式前提出现的输入（“给定”）极性，与对于结论出现的输出（“要证明”）极性。正确性标准将证明网识别为更广泛的图形类别：对于线性逻辑一般适用的无环和连通性标准，添加平面性以捕捉词序敏感性：在L的证明网中，公理链接不能交叉。在语法-语义界面方面，de Groote和Retoré（1996年）表明，与LP推导在语义目标演算中的Curry-Howard对应的lambda项可以通过指定一组“遍历指令”从证明网中读取；然后，这些指令逐步对应于相关lambda项的构建。

增量处理。证明网，静态地被视为满足某些正确性标准的图形，消除了关于推理演算中规则应用顺序的虚假选择：在这方面，它们代表了对范畴推导的纯粹“声明性”观点。Johnson（1998）和Morrill（2000）指出，对于构建网的实际过程的另一种“程序性”观点也是有意义的，并且提供了一个有吸引力的性能现象视角。在这种解释下，通过在实时发生时建立与词汇项目相关的部分证明网的输入/输出文字之间的可能连接，网以从左到右的增量方式构建。这表明了一个简单的复杂度度量，即增量遍历中未解决的文字之间的依赖关系数量。这种复杂度度量与许多经过验证的处理问题相关，例如中心嵌套的困难，花园路径效应，附着偏好以及模棱两可结构中的优先范围解释。

一阶量词。平面性条件将非交换证明网从 LP 网中单独出来。为了处理这里讨论的更有结构的范畴演算，正确性标准必须得到细化。其中一种做法是通过将其翻译成 MILL1（一阶乘法直觉线性逻辑），在那里，人们可以使用具有额外链接的证明网，用于一阶变量的存在量化和全称量化。然后可以以一种非常类似于逻辑编程中使用的确定性子句语法中的位置参数的方式使用这些变量。Moot 和 Piazza（2001）为 L 和 NL 制定了这样的翻译。对于 L 的连接操作，可以用两元术语替换命题字母（原子公式），标记连续字符串的开始和结束。对于非结合性 NL，可以添加一个额外的变量来跟踪子公式的嵌套深度。对于简单的不连续演算 DL 中的包装操作（允许单个分割点），Morrill 和 Fadda（2008）使用四元谓词。一般来说，在这里我们发现演算的句法表达能力与需要编码其结构资源管理的变量数量之间存在相关性。

网络和重写。第 3.1 节和第 3.3 节的多模态和对称演算对最初为线性逻辑开发的证明网方法构成了挑战。在这些系统中，我们通常会发现单向结构规则，例如用于明显位移的提取公设，或者在 LG 情况下的 Grishin 分配律：这些单向规则自然地暗示了图重写的概念。已经在 Moot 和 Puite 2002 年以及 Moot 2007 年中开发了一个针对扩展 Lambek 演算的完全通用的证明网框架，其正确性标准基于重写。

Moot-Puite 网络的基本构建块是一种广义的链接概念，可容纳任何阶数的连接词。一个链接由其类型（张量或余张量）、其前提（一个序列 P1,…,Pn，0 ≤ n）、其结论（一个序列 C1,…,Cm，0 ≤ m）和其主公式（可以为空，在中性链接的情况下，或者是 Pi 或 Ci 中的一个）确定。证明结构是一组链接，涵盖了一个有限公式集，使得每个公式最多是一个链接的前提，最多是一个结论。不是任何链接的结论的公式是证明结构的假设，而不是任何链接的前提的公式是结论。公理公式是不是任何链接的主公式的公式。通过擦除内部节点上的所有公式获得抽象证明结构。证明网是一个证明结构，其中抽象证明结构转换为张量树 —— 在直觉主义系统的情况下是一棵根树，可能是对称 LG 的情况下是一棵非根树。如此定义的证明网可以显示为对应于有效推导的图形。

将候选抽象证明结构转换为证明网的重写步骤有两种类型。逻辑收缩对应于复杂公式 A 的恒等式 A ⊢ A；它们将匹配张量和余张量链接的配置减少到一个点。结构转换执行具有假设 H1,…,Hn 和结论 C1,…,Cm 的证明结构的内部重连，以一些 Hi 的排列作为假设，以一些 Ci 的排列作为结论。换句话说，复制和删除被排除。例如，与第 3.3 节讨论的 Grishin 交互原则之一对应的重写，使我们能够从 A ⊗ B ⊢ C ⊕ D 推断出 C ⦸ A ⊢ D/B。假设 A、B 在左侧，结论 C、D 在右侧。网状表示清楚地表明这些原则是保持结构的：它们不改变假设和结论的顺序。

> <img src="https://plato.stanford.edu/entries/typelogical-grammar/net.png" alt="ABCD net" data-size="original">

## 5. 识别能力，复杂性

思考以上内容，人们可以说，这里介绍的句法演算的扩展是出于希望在表达能力和计算可处理性之间找到适当平衡的动机：在表达能力方面，一个合适的范畴类型框架应该能够识别严格上下文无关之外的模式；理想情况下，希望保持这种表达能力与多项式可导性问题兼容。在当代的“词汇化”语法形式主义中，有一个显著的趋同性，即符合这些要求的系统：所谓的“温和上下文敏感”系统（Joshi, Vijay-Shanker, and Weir 1991）。在识别能力和复杂性方面，我们如何定位这里讨论的范畴类型系统？

在范畴类型逻辑层次结构中，最小系统存在多项式识别问题（参见de Groote 1999年和Capelletti 2007年的实际解析算法），但它是严格上下文无关的（Kandulski 1988年）。具有全局结构规则的扩展在表达能力和复杂性方面都不尽如人意。至于L，Pentus（1993b，2006）表明它仍然是严格上下文无关的，而全局结合性的添加使得可导性问题成为NP完全问题。对于L的无乘法片段，NP完全性已经成立（Savateev 2009）。对于LP，即乘法直觉线性逻辑，我们也有NP完全性（Kanovich 1994）。关于识别能力，van Benthem（1995）表明LP可以识别所有上下文无关语言的排列闭包：从句法角度来看，这个类别太宽泛了。作为意义组装的逻辑，LP是范畴类型库存的核心组成部分。但正如我们在讨论句法-语义界面时所看到的，我们可以将注意力限制在LP的子语言上，这些子语言形成了在句法演算中推导的图像，从而对词序和短语结构提出有趣的主张。

多模态和对称扩展的情况更加复杂。这里的表现力直接与对结构资源管理施加的限制类型相关。在光谱的一端，没有结构规则的多模态并不能使我们超越上下文无关识别：Jäger（2003）表明，用于 n 元类型形成操作族的纯残留逻辑仍然严格上下文无关。如果要求结构规则对资源敏感（不允许复制或删除），并且对于一元模态，非扩展的，那么就会获得上下文敏感语法的完整表现力，以及伴随其而来的 PSPACE 复杂度（Moot 2002）。 （PSPACE 由一些多项式内存空间可解决的问题组成。请参阅可计算性和复杂性条目。如果对结构规则不加限制（具体来说，如果允许复制和删除操作），毫不奇怪，就会获得无限制重写系统的表现力（Carpenter 1999）。在 Jäger 2005 中，复制的受控使用用于研究指代消解。

没有交互原则的对称演算 LG 是上下文无关的，如 Bastenhof 2010 所示。对于具有第 3.3 节交互原则的系统，Melissen（2009）表明，所有语言，这些语言是上下文无关语言和上下文无关语言的置换闭包的交集，在 LG 中是可识别的。在这个类别中，我们找到了 MIX 的广义形式（由 a、b、c 等数量的符号以任意顺序组成的语言），以及在任意顺序中具有 k 个字母符号的等数量，并且对于任意数量 k 的字母符号，具有 a\*\*n1…ank 的计数依赖性。这种类型的模式由范围串联语法和全局索引语法识别；然后，与这些形式体系的比较可能有助于确定 LG 的识别能力的上限，目前尚不清楚。

在计算复杂性方面，Moot（2008）在词汇化树相邻语法与具有第 3.1 节多模提取假设和受限的 LG 语法之间建立了对应关系。对于这些语法，他通过将其转换为超边替换语法获得了多项式可分析性结果。在 LG 的情况下，该限制要求在词汇类型分配中以匹配对的方式出现协同关系⊘,⦸。Melissen 2009 年的广义 MIX 构造的词汇表，以及 Bernardi 和 Moortgat 2010 年在量词短语分析中使用的类型分配，不遵守这一限制。对于具有第 3.3 节交互原则的 LG 的一般情况，Bransen（2010）建立了 NP 完全性。在这种层次结构中，第 3.2 节的不连续演算的位置必须确定：它们识别的内容超出了上下文无关语言，但尚不清楚它们是否仍在轻度上下文敏感语言族内。

## 6. 相关方法

范畴类型逻辑，如本文所讨论的那样，与许多相关的形式语法框架共享一些特征，其中类型也起着关键作用。我们简要讨论了其中一些相关内容，并为希望进一步探索这些联系的读者提供了文献指引。

范畴类型逻辑语法（CCG）。CCG 框架（详见 Steedman 2000 进行全面介绍）的名称源自 Curry 和 Feys 的组合逻辑。而范畴类型逻辑语法的设计遵循逻辑议程（序言演算、完备性等），CCG 传统中的语法被呈现为用于类型变换和类型组合的有限规则集。这些规则清单通常包括函数应用模式、类型提升和功能组合，既包括在关联 L 内有效的类型组合（组合具有相同方向性的蕴涵类型），也包括混合类型组合（组合具有不同方向性的函子）。

20 世纪 80 年代 CCG 和 Lambek 风格的范畴类型逻辑语法最初走向不同。最近，出现了融合的迹象。一个重要因素是引入了多模态控制的范畴类型技术，以微调 CCG 组合模式的适用性（Baldridge 2002，Kruijff 和 Baldridge 2003）。从这个角度看，多模态范畴类型语法扮演着作为用于建立 CCG 组合模式有效性的基础一般逻辑的角色，而对原始组合子的特定选择则受到计算效率考虑的驱动（Hoyt 和 Baldridge 2008）。在生成能力方面，CCG 是一种轻度上下文敏感语法形式家族的成员。通过对功能组合模式施加限制，可以获得多项式可分性。

Pregroup grammars. Pregroups是紧凑双线性逻辑（Lambek 1993）的代数版本，通过折叠张量和余张量操作而获得。Pregroup grammars是Lambek 1999年引入的，作为原始Syntactic Calculus L的简化版本。此后，Lambek及其同事们已经使用它们来构建各种语言的计算片段。Pregroup是一个部分有序幺半群，其中每个元素a都有左和右伴随al、ar，满足al a → 1 → aal和aar → 1 → ara。范畴类型逻辑采用将一个单词与由基本类型部分有序集生成的自由pregroup中的一个或多个元素相关联的形式。与范畴类型公式的连接，可以使用翻译a/b = abl和b_a_ = bra。在pregroup设置中，解析非常简单。Lambek（1999）证明，只需执行替换ala和ala的收缩，即可。这本质上是对良括号的检查，这个操作可以委托给一个下推自动机。扩展1 → aal和1 → ara是为了证明像(ab)l = blal这样的等式。我们已经利用后者获得了下面示例中的高阶相对代词类型(n_n_)/(s/np)的pregroup版本。

|                          | book | that                 | Carroll | wrote           |      |
| ------------------------ | ---- | -------------------- | ------- | --------------- | ---- |
| type assignment in**L**: | _n_  | (_nn_)/(_s_/_np_)    | _np_    | (_nps_)/_np_    |      |
| 范畴类型逻辑分配 :               | _n_  | _nr_ _n_ _npll_ _sl_ | _np_    | _npr_ _s_ _npl_ | →_n_ |

紧凑双线性逻辑不是原始句法演算的保守扩展。在 L 中可推导的每个序列在相应的 pregroup 中也可推导出一个翻译，但反之则不成立：例如，类型(a ⊗ b)/c 和 a ⊗ (b/c)的 pregroup 映像是 a b cl，但这两种类型在 L 中并不可相互推导。

关于生成能力，Buszkowski（2001）表明 pregroup 语法等价于上下文无关语法。换句话说，它们与原始范畴语法具有相同的表达限制。为了克服这些限制，人们采取了不同的策略，包括词汇规则（元规则）、派生约束、可控的交换形式和 pregroup 的乘积。Studia Logica 特刊（Buszkowski 和 Preller 2007）和专著 Lambek 2008 展示了当前研究的全貌。

范畴类型逻辑。ACG 框架（de Groote 2001a）是一种组合语法体系的元理论。ACG 建立在高阶线性签名Σ =（A，C，τ）上，其中 A 和 C 分别是原子类型和常量的有限集合，τ是一个函数，为每个常量分配一个在 A 上的线性蕴涵类型。给定源签名Σ和目标签名Σ'，一个解释是一个从Σ到Σ'的映射，由一对函数给出：η将Σ的类型原子映射到Σ'的线性蕴涵类型，θ将Σ的常量映射到Σ'的良型线性λ项，以一种与类型映射兼容的方式。使用编译器理论的术语，将源和目标签名称为抽象词汇和具体词汇，将解释映射称为词汇表。然后通过将Σ的原子类型指定为语法的特殊类型来获得 ACG。

在 ACG 设置中，可以通过抽象与对象词汇的区分来建模语法-语义界面。但也可以通过解释映射的结果获得表面形式，使用字符串和树的规范λ项编码以及对它们的操作。ACG 已经为将编码为 ACG 的重写语法形式主体带来了一个有趣的复杂性层次结构：上下文无关语法，树相邻语法等；例如参见 de Groote 和 Pogodalla 2004。这些形式体系的表达能力是通过抽象词汇中常量的最大阶数和解释原子抽象类型的对象类型来衡量的。对于范畴类型系统的 ACG 编码的研究始于 Retoré和 Salvati 2010；这些作者提出了一个用于（无乘积）NL 的 ACG 构造。

从这个描述中可以清楚地看出，ACG架构与在本文中讨论的范畴类型逻辑的组合解释密切相关。一个关键区别在于“抽象语法”的性质，即解释是同态地导出的源演算。在标准Lambek系统和上文第3节讨论的扩展系统的情况下，抽象语法是一个方向性类型逻辑；在ACG的情况下，LP和线性λ演算在源端和目标端都可以找到。关于语言的结构属性是否必须在抽象语法层面加以解释的争论有着悠久的历史，始于Curry 1961；有关讨论请参见Muskens 2007。范畴类型观点解释了其逻辑常量的层面上的语序普遍规律，即类型形成操作和管理它们的规则。ACG观点在这方面更加自由：表层形式的推导可以基于逐词指定。关于抽象语法和表层实现之间这种更加宽松的联系是否可取，存在争议。ACG的一个吸引人的特点，在范畴类型设置中尚未系统研究的是表达能力与源常量和解释映射的顺序限制之间的联系。

## Bibliography

Note: In addition to the regular text references, the bibliography contains some items that can place the entry in a broader context.

* For general logical and mathematical background, see Galatos et al. 2007, Restall 2000, Sørensen and Urzyczyn 2006.
* For monographs, collections and survey articles on typelogical grammar, see Buszkowski 1997, Buszkowski et al. 1988, Carpenter 1998, Jäger 2005, Moortgat 1988, 1997, Morrill 1994, 2010, Oehrle et al. 1988, van Benthem 1995.
* Baldridge, J. (2002). _Lexically Specified Derivational Control in Combinatory Categorial Grammar_. Ph. D. thesis, University of Edinburgh.
* Barker, C. (2004). Continuations in natural language. In H. Thielecke (Ed.), _CW'04: Proceedings of the 4th ACM SIGPLAN continuations workshop_, Tech. Rep. CSR-04-1, School of Computer Science, University of Birmingham, pp. 1–11.
* –––. (2002). Continuations and the nature of quantification. _Natural language semantics_, 10: 211–242.
* Barker, C. and C. Shan (2006). Types as graphs: Continuations in type logical grammar. _Journal of Logic, Language and Information_, 15(4): 331–370.
* –––. (2008). Donkey anaphora is in-scope binding. _Semantics and Pragmatics_, 1(1): 1–46.
* Barry, G., M. Hepple, N. Leslie, and G. Morrill (1991). Proof figures and structural operators for categorial grammar. In _Proceedings of the 5th conference on European chapter of the Association for Computational Linguistics_, Association for Computational Linguistics, pp. 198–203.
* Bastenhof, A. (2010). Tableaux for the Lambek-Grishin calculus. CoRR abs/1009.3238. To appear in _Proceedings ESSLLI 2010 Student Session_. Copenhagen.
* Bernardi, R. and M. Moortgat (2010). Continuation semantics for the Lambek-Grishin calculus. _Information and Computation_, 208(5): 394–416.
* Bernardi, R. and A. Szabolcsi (2008). Optionality, Scope, and Licensing: An Application of Partially Ordered Categories. _Journal of Logic, Language and Information_, 17(3): 237–283.
* Bransen, J. (2010). The Lambek-Grishin calculus is NP-complete. To appear in _Proceedings 15th Conference on Formal Grammar_, Copenhagen. CoRR abs/1005.4697.
* Buszkowski, W. (2001). Lambek grammars based on pregroups. In P. de Groote, G. Morrill, and C. Retoré (Eds.), _Logical Aspects of Computational Linguistics_, _Lecture Notes in Artificial Intelligence_ (Volume 2099), Berlin: Springer, pp. 95–109.
* –––. (1997). Mathematical linguistics and proof theory. In J. van Benthem and A. ter Meulen (Eds.), _Handbook of Logic and Language_ (Chapter 12), Amsterdam: Elsevier, and Cambridge, MA: MIT Press, pp. 683–736.
* Buszkowski, W. and G. Penn (1990). Categorial grammars determined from linguistic data by unification. _Studia Logica_, 49(4): 431–454.
* Buszkowski, W. and A. Preller (2007). Editorial introduction special issue on pregroup grammars. _Studia Logica_, 87(2): 139–144.
* Buszkowski, W., W. Marciszewski, and J. van Benthem (Eds.) (1988). _Categorial Grammar_. Amsterdam: John Benjamins.
* Capelletti, M. (2007). _Parsing with structure-preserving categorial grammars_. Ph. D. thesis, Utrecht Institute of Linguistics OTS, Utrecht University.
* Carpenter, B. (1999). The Turing-completeness of multimodal categorial grammars. In J. Gerbrandy, M. Marx, M. de Rijke, and Y. Venema (Eds.), _JFAK. Essays Dedicated to Johan van Benthem on the Occasion of his 50th Birthday_. Amsterdam: Amsterdam University Press.
* –––. (1998). _Type-logical Semantics_. Cambridge, MA: MIT Press.
* Curry, H. B. (1961). Some logical aspects of grammatical structure. In R. Jacobson (Ed.), _Structure of Language and its Mathematical Aspects_, _Proceedings of the Symposia in Applied Mathematics_ (Volume XII), American Mathematical Society, pp. 56–68.
* de Groote, P. (2006). Towards a Montagovian account of dynamics. In _Proceedings SALT 16_. CLC Publications.
* –––. (2001a). Towards abstract categorial grammars. In _Proceedings of 39th Annual Meeting of the Association for Computational Linguistics_, Association for Computational Linguistics, pp. 252–259.
* –––. (2001b). Type raising, continuations, and classical logic. In M. S. R. van Rooy (Ed.), _Proceedings of the Thirteenth Amsterdam Colloquium_, Amsterdam: ILLC (Universiteit van Amsterdam), pp. 97–101.
* –––. (1999). The non-associative Lambek calculus with product in polynomial time. In N. V. Murray (Ed.), _Automated Reasoning With Analytic Tableaux and Related Methods_, _Lecture Notes in Artificial Intelligence_ (Volume 1617), Berlin: Springer, pp. 128–139.
* de Groote, P. and F. Lamarche (2002). Classical non-associative Lambek calculus. _Studia Logica_, 71(3): 355–388.
* de Groote, P. and S. Pogodalla (2004). On the Expressive Power of Abstract Categorial Grammars: Representing Context-Free Formalisms. _Journal of Logic, Language and Information_, 13(4): 421–438.
* de Groote, P. and C. Retoré (1996). On the semantic readings of proof nets. In G.-J. Kruijff, G. Morrill, and D. Oehrle (Eds.), _Proceedings 2nd Formal Grammar Conference_, Prague, pp. 57–70.
* Došen, K. (1992). A brief survey of frames for the Lambek calculus. _Mathematical Logic Quarterly_, 38(1): 179–187.
* Galatos, N., P. Jipsen, T. Kowalski, and H. Ono (2007). _Residuated Lattices: An Algebraic Glimpse at Substructural Logics, Studies in Logic and the Foundations of Mathematics (Volume 151)_, Amsterdam: Elsevier.
* Girard, J.-Y. (1987). Linear logic. _Theoretical Computer Science_, 50: 1–102.
* Grishin, V. (1983). On a generalization of the Ajdukiewicz-Lambek system. In A. Mikhailov (Ed.), _Studies in Nonclassical Logics and Formal Systems_, Moscow: Nauka, pp. 315–334. \[English translation in Abrusci and Casadio (eds.) New Perspectives in Logic and Formal Linguistics. Bulzoni, Rome, 2002].
* Hendriks, H. (1993). _Studied Flexibility. Categories and Types in Syntax and Semantics_. Ph. D. thesis, ILLC, University of Amsterdam.
* Hepple, M. (1999). An Earley-style predictive chart parsing method for Lambek grammars. In _Proceedings of the 37th Annual Meeting of the Association for Computational Linguistics_, Association for Computational Linguistics, pp. 465–472.
* –––. (1990). Normal form theorem proving for the Lambek calculus. In _Papers presented to the 13th International Conference on Computational Linguistics_, Helsinki, pp. 173–178.
* Hoyt, F. and J. Baldridge (2008). A logical basis for the D combinator and normal form in CCG. In _Proceedings of ACL-08: HLT_, Association for Computational Linguistics, pp. 326–334.
* Jäger, G. (2005). _Anaphora And Type Logical Grammar_. Berlin: Springer.
* –––. (2004). Residuation, Structural Rules and Context Freeness. _Journal of Logic, Language and Information_, 13: 47–59.
* Johnson, M. (1998). Proof nets and the complexity of processing center-embedded constructions. _Journal of Logic, Language and Information_, 7(4): 433–447.
* Joshi, A. K., K. Vijay-Shanker, and D. Weir (1991). The convergence of mildly context-sensitive grammar formalisms. In P. Sells, S. M. Shieber, and T. Wasow (Eds.), _Foundational Issues in Natural Language Processing_, Cambridge, MA: MIT Press, pp. 31–81.
* Kanazawa, M. (1998). _Learnable classes of categorial grammars_. Stanford: CSLI Publications.
* Kandulski, M. (1988). The equivalence of nonassociative Lambek categorial grammars and context-free grammars. _Zeitschrift für mathematische Logik und Grundlagen der Mathematik_, 34: 41–52.
* Kanovich, M. (1994). The Complexity of Horn Fragments of Linear Logic. _Annals of Pure and Applied Logic_, 69(2-3): 195–241.
* Kruijff, G.-J. and J. Baldridge (2003). Multi-modal combinatory categorial grammar. In _Proceedings of the 10th Conference of the European Chapter of the Association for Computational Linguistics_, Association for Computational Linguistics, pp. 211–218.
* Kurtonina, N. (1995). _Frames and Labels. A Modal Analysis of Categorial Inference_. Ph. D. thesis, OTS Utrecht, ILLC Amsterdam.
* Kurtonina, N. and M. Moortgat (2010). Relational semantics for the Lambek-Grishin calculus. In C. Ebert, G. Jäger, and J. Michaelis (Eds.), _The Mathematics of Language. Proceedings of the 10th and 11th Biennial Conference_, Lecture Notes in Computer Science (Volume 6149). Berlin: Springer, pp. 210–222.
* ––– (1997). Structural control. In P. Blackburn and M. de Rijke (Eds.), _Specifying Syntactic Structures_, Stanford: CSLI Publications, pp. 75–113.
* Lambek, J. (2008). _From word to sentence. A computational algebraic approach to grammar_. Polimetrica.
* –––. (1999). Type grammar revisited. In A. Lecomte, F. Lamarche, and G. Perrier (Eds.), _Logical Aspects of Computational Linguistics_, _Lecture Notes in Artificial Intelligence_ (Volume 1582), Berlin: Springer, pp. 1–27.
* –––. (1993). From categorial to bilinear logic. In K. Došen and P. Schröder-Heister (Ed.), _Substructural Logics_. Oxford University Press.
* –––. (1961). On the calculus of syntactic types. In R. Jacobson (Ed.), _Structure of Language and its Mathematical Aspects_, _Proceedings of the Symposia in Applied Mathematics_ (Volume XII), American Mathematical Society, pp. 166–178.
* –––. (1958). The mathematics of sentence structure. _American Mathematical Monthly_, 65: 154–170.
* Melissen, M. (2009). The generative capacity of the Lambek-Grishin calculus: A new lower bound. In P. de Groote (Ed.), _Proceedings 14th Conference on Formal Grammar_, Lecture Notes in Computer Science (Volume 5591), Berlin: Springer.
* Moortgat, M. (2009). Symmetric categorial grammar. _Journal of Philosophical Logic_, 8(6), 681–710.
* –––. (1997). Categorial type logics. In J. van Benthem and A. ter Meulen (Eds.), _Handbook of Logic and Language_ (Chapter 2), Amsterdam: Elsevier, pp. 93–177. (Second edition, revised and updated: Elsevier Insights Series, 2010).
* –––. (1996). Multimodal linguistic inference. _Journal of Logic, Language and Information_, 5(3–4): 349–385.
* –––. (1988). _Categorial Investigations. Logical and Linguistic Aspects of the Lambek calculus_. Berlin: De Gruyter.
* Moot, R. (2008). Lambek grammars, tree adjoining grammars and hyperedge replacement grammars. In _Proceedings of TAG+9, The 9th International Workshop on Tree Adjoining Grammars and Related Formalisms_, Tübingen, pp. 65–72.
* –––. (2007). Proof nets for display logic. _CoRR_, abs/0711.2444.
* –––. (2002). _Proof Nets for Linguistic Analysis_. Ph. D. thesis, Utrecht Institute of Linguistics OTS, Utrecht University.
* Moot, R. and M. Piazza (2001). Linguistic Applications of First Order Intuitionistic Linear Logic. _Journal of Logic, Language and Information_, 10(2): 211–232.
* Moot, R. and Q. Puite (2002). Proof Nets for the Multimodal Lambek Calculus. _Studia Logica_, 71(3): 415–442.
* Morrill, G. (2010). _Categorial Grammar: Logical Syntax, Semantics, and Processing_. Oxford: Oxford University Press.
* –––. (2000). Incremental processing and acceptability. _Computational linguistics_, 26(3): 319–338.
* –––. (1994). _Type Logical Grammar: Categorial Logic of Signs_. Dordrecht: Kluwer Academic Publishers.
* –––. (1990). Intensionality and boundedness. _Linguistics and Philosophy_, 13(6): 699–726.
* Morrill, G. and M. Fadda (2008). Proof nets for basic discontinuous Lambek calculus. _Journal of Logic and Computation_, 18(2): 239–256.
* Morrill, G., M. Fadda, and O. Valentin (2007). Nondeterministic discontinuous Lambek calculus. In _Proceedings of the Seventh International Workshop on Computational Semantics (IWCS7)_, Tilburg.
* Morrill, G., O. Valentin, and M. Fadda (2009). Dutch grammar and processing: A case study in TLG. In P. Bosch, D. Gabelaia, and J. Lang (eds.), _Logic, Language, and Computation: 7th International Tbilisi Symposium on Logic, Language, and Computation_, Tbilisi, Georgia, October 1-5, 2007 (Revised Selected Papers), Lecture Notes in Artificial Intelligence (Volume 5422), Berlin: Springer, pp. 272–286.
* Muskens, R. (2007). Separating syntax and combinatorics in categorial grammar. _Research on Language & Computation_, 5(3): 267–285.
* Oehrle, R. T., E. Bach, and D. Wheeler (Eds.) (1988). _Categorial Grammars and Natural Language Structures_, Studies in Linguistics and Philosophy (Number 32). Dordrecht: Reidel.
* Pentus, M. (1993b). Lambek grammars are context free. In _Proceedings of the 8th Annual IEEE_ Symposium on Logic in Computer Science}, IEEE Computer Society Press, pp. 429–433.
* –––. (2006). Lambek calculus is NP-complete. _Theoretical Computer Science_, 357: 186–201.
* –––. (1995). Models for the Lambek calculus. _Annals of Pure and Applied Logic_, 75(1–2), 179–213.
* Restall, G. (2000). _An Introduction to Substructural Logics_. London: Routledge.
* Retoré, C. and S. Salvati (2010). A faithful representation of non-associative Lambek grammars in Abstract Categorial Grammars. _Journal of Logic, Language and Information_, 19(2). Special issue on New Directions in Type Theoretic Grammars.
* Roorda, D. (1992). Proof Nets for Lambek calculus. _Journal of Logic and Computation_, 2(2): 211–231.
* Savateev, Y. (2009). Product-free Lambek Calculus is NP-complete. In S. Artemov and A. Nerode (Eds.), _Proceedings of the 2009 International Symposium on Logical Foundations of Computer Science_, Lecture Notes in Computer Science (Volume 5407), Berlin: Springer, pp. 380–394.
* Shan, C. and C. Barker (2006). Explaining Crossover and Superiority as Left-to-right Evaluation. _Linguistics and Philosophy_, 29(1): 91–134.
* Sørensen, M. H. and P. Urzyczyn (2006). _Lectures on the Curry-Howard Isomorphism_, _Studies in Logic and the Foundations of Mathematics_ (Volume 149), Amsterdam: Elsevier.
* Stabler, E. (1999). Remnant movement and complexity. In G. Bouma, E. Hinrichs, G.-J. Kruijff, and R. T. Oehrle (Eds.), _Constraints and Resources in Natural Language Syntax and Semantics_, Stanford: CSLI, pp. 299–326.
* –––. (1997). Derivational minimalism. In C. Retoré (Ed.), _Logical Aspects of Computational Linguistics_, _Lecture Notes in Artificial Intelligence_ (Volume 1328), Berlin: Springer, pp. 68–95.
* Steedman, M. (2000). _The Syntactic Process_. Cambridge, MA: MIT Press.
* van Benthem, J. (1995). _Language in Action: Categories, Lambdas and Dynamic Logic_. Cambridge, MA: MIT Press.
* –––. (1983). The semantics of variety in categorial grammar. Technical Report 83-29, Simon Fraser University. Revised version in W. Buszkowski _et al_. (1988).
* Vermaat, W. (2006). _The logic of variation. A cross-linguistic account of wh-question formation_. Ph. D. thesis, Utrecht Institute of Linguistics OTS, Utrecht University.
* –––. (2004). The minimalist move operation in a deductive perspective. _Research on Language & Computation_, 2(1), 69–85.
* Wansing, H. (2002). Sequent systems for modal logics. In D. Gabbay and F. Guenthner (Eds.), _Handbook of Philosophical Logic_ (Volume 8), Dordrecht: Kluwer Academic Publishers, pp. 61–145.
* –––. (1992). Formulas-as-types for a hierarchy of sublogics of intuitionistic propositional logic. In D. Pearce and H. Wansing (Eds.), _Nonclassical Logics and Information Processing_, Lecture Notes in Computer Science (Volume 619), Berlin: Springer, pp. 125–145.

## Academic Tools

| ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=typelogical-grammar).                                                                      |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/typelogical-grammar/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
| ![inpho icon](https://plato.stanford.edu/symbols/inpho.png)         | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=typelogical-grammar\&redirect=True) at the Internet Philosophy Ontology Project (InPhO).   |
| ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif)      | [Enhanced bibliography for this entry](http://philpapers.org/sep/typelogical-grammar/) at [PhilPapers](http://philpapers.org/), with links to its database.                            |

## Other Internet Resources

* [Moot's typelogical theorem prover](http://www.labri.fr/perso/moot/grail3.html)
* [Symmetric Categorial Grammar](http://symcg.pbworks.com/)
* [Combinatory Categorial Grammar](http://groups.inf.ed.ac.uk/ccg/)

## Related Entries

[compositionality](https://plato.stanford.edu/entries/compositionality/) | [logic: linear](https://plato.stanford.edu/entries/logic-linear/) | [logic: modal](https://plato.stanford.edu/entries/logic-modal/) | [logic: relevance](https://plato.stanford.edu/entries/logic-relevance/) | [logic: substructural](https://plato.stanford.edu/entries/logic-substructural/) | [type theory](https://plato.stanford.edu/entries/type-theory/)

[Copyright © 2010](https://plato.stanford.edu/info.html#c) by\
Michael Moortgat <[_Michael.Moortgat@phil.uu.nl_](mailto:Michael%2eMoortgat%40phil%2euu%2enl)>
