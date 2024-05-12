# 模糊逻辑 fuzzy (Petr Cintula, Christian G. Fermüller, and Carles Noguera)

*首次发表于2016年11月15日；实质修订于2021年11月11日。*

模糊逻辑旨在模拟具有模糊或不精确陈述的逻辑推理，例如“Petr 年轻（富有、高大、饥饿等）”。它指的是一类多值逻辑，其中真值被解释为真实程度。逻辑复合命题的真值，例如“Carles 高大且 Chris 富有”，由其组成部分的真值确定。换句话说，就像在经典逻辑中一样，它强调真值功能性。

模糊逻辑出现在模糊集合理论的背景下，由 Lotfi Zadeh（1965）引入。模糊集合为宇宙中的元素分配一个成员度，通常是来自区间\[0,1]的实数。模糊逻辑通过为命题分配真值来产生。标准的真值（程度）集合是实数单位区间\[0,1]，其中 0 表示“完全错误”，1 表示“完全正确”，其他值表示部分真实性，即中间程度的真实性。\[1]

“模糊逻辑”通常被理解为一种广义概念，包括所有与某种程度的系统处理相关的形式主义和技术（例如，Nguyen＆Walker 2000）。特别是在工程背景下（模糊控制，模糊分类，软计算），它旨在实现对次优性和不精确性具有容忍性的高效计算方法（例如，Ross 2010）。本条目侧重于以限定意义上的模糊逻辑，它作为数理逻辑学的一个学科而确立，遵循 Petr Hájek（1998）的开创性专著，现今通常称为“数学模糊逻辑”。有关不同变体模糊逻辑的历史细节，请参阅 Bělohlávek，Dauben 和 Klir 2017。

数学模糊逻辑专注于基于部分真实性的真值功能解释，并以经典数学逻辑的精神研究它们，研究语法、模型论语义学、证明系统、完备性等，无论是在命题层面还是谓词层面（参见 Cintula，Fermüller，Hájek 和 Noguera 2011 和 2015）。

***

## 1. 基于 t-范数的模糊连接词

模糊逻辑的标准真值集是实数单位区间\[0,1]，具有自然的顺序≤，从完全虚假（由 0 表示）到完全真实（由 1 表示）通过一系列中间程度的真实度进行变化（有关真实常数的替代解释和真值集的替代集合，请参见第 5 和第 7 节）。数学模糊逻辑的一个基本假设是，连接词在真实度集合上以真值函数的方式进行解释。在标准设置中，这样的真值函数被假定在极值 0 和 1 上的行为是经典的。通过强加 x∧y=min{x,y}，x∨y=max{x,y}和¬x=1−x，可以实现合取、析取和否定的非常自然的行为，其中 x，y∈\[0,1]。

这三个真值函数产生了由 Joseph Goguen（1975）提出的模糊逻辑的原始语义，后来由 Gehrke、Walker 和 Walker（1997）等人进行了形式化研究。许多研究人员仍然将其称为“模糊逻辑”。然而，很快就明显地发现，这个语义框架过于简单，无法（1）编码/模拟许多有趣的推理方面和（2）支持一个完整的数学逻辑理论。

另外，非幂等的连接词&通常被添加以解释这样的直觉：对部分真实的假设应用两次可能导致与仅使用一次时不同的真实程度。这样的连接通常被解释为\[0,1]上的二元运算，它不一定是幂等的，但仍然是结合的、交换的、在两个参数上非递减，并且具有 1 作为中性元素。这些运算被称为 t-范数（三角范数），它们的数学性质已经被深入研究（参见 Klement, Mesiar, & Pap 2000）。t-范数的著名例子包括前面提到的函数 min，实数的标准乘积⋅，以及Łukasiewicz t-范数：x∗Ły=max{x+y−1,0}。这三个 t-范数实际上是连续函数，任何其他连续 t-范数都可以描述为这三个基本 t-范数的序数和（Ling 1965; Mostert & Shields 1957）。

有趣的是，每个左连续的 t-范数都确定了一个合适的蕴涵选择。事实上，已知 t-范数∗是左连续的当且仅当存在唯一的二元运算⇒∗在\[0,1]上满足所谓的_剩余条件：_ x∗y≤z 当且仅当 x≤y⇒∗z。函数⇒∗被称为∗的剩余，可以证明 x⇒∗y=max{z∣x∗z≤y}。前面提到的三个著名 t-范数的剩余是：x⇒miny=1 如果 x≤y，否则为 y；x⇒⋅y=1 如果 x≤y，否则为 yx；x⇒Ły=min{1,1−x+y}。

在一般的 t-范数设置中，否定是使用剩余来解释的。即，对于给定的左连续 t-范数∗，我们设置¬∗x=x⇒∗0。对于Łukasiewicz t-范数，我们得到否定¬Łx=1−x（称为Łukasiewicz 否定或标准的逆否定），而对于最小值和乘积 t-范数，我们得到相同的否定（称为 Gödel 否定）：¬G0=1，否则为 0。

## 2. MTL：一个基本的模糊逻辑

用上述类型的真值函数解释的连接词最弱的逻辑是 MTL（Monoidal T-norm based Logic，Esteva & Godo 2001）。它是一个具有原始二元连接词&、→、∧和真值常量¯¯¯¯0 的逻辑，可导出的连接词定义为：φ∨ψ=((φ→ψ)→ψ)∧((ψ→φ)→φ)、¬φ=φ→¯¯¯¯0、φ↔ψ=(φ→ψ)∧(ψ→φ)、¯¯¯¯1=¬¯¯¯¯0。MTL 通过由所有左连续 t-范数给出的语义来定义为一个推理关系。换句话说，给定一个特定的左连续 t-范数∗和一个从命题变量到\[0,1]的映射，我们通过将&解释为∗、将蕴涵→解释为其余部分⇒、将∧和¯¯¯¯0 解释为 min 和 0，分别定义了所有公式的∗-评估。

在 MTL 中，如果对于每个左连续 t-范数∗和每个∗-评估 e，使得对于Γ中的每个ψ，e(ψ)=1，则有 e(φ)=1，则称公式φ是Γ的一个随附/监督。换句话说，如果前提完全为真，则结论也为真。总是评估为 1 的公式（即∅⊨MTLφ）被称为 MTL 的有效或重言式。请注意，公式φ&ψ→φ∧ψ在 MTL 中是一个重言式，但逆向蕴涵φ∧ψ→φ&ψ则不是，即，合取&比∧更强。

MTL 也可以通过以下公理的希尔伯特样式证明系统来表示：

(φ→ψ)→((ψ→χ)→(φ→χ))φ&ψ→φφ&ψ→ψ&φφ∧ψ→φφ∧ψ→ψ∧φ(χ→φ)→((χ→ψ)→(χ→φ∧ψ))(φ&ψ→χ)→(φ→(ψ→χ))(φ→(ψ→χ))→(φ&ψ→χ)((φ→ψ)→χ)→(((ψ→φ)→χ)→χ)¯¯¯0→φ

并且唯一的推理规则是假言演绎：从φ和φ→ψ推导出ψ。我们写作Γ⊢MTLφ，每当在该系统中存在一个从Γ到φ的证明时，即存在一个以φ结尾的有限公式序列，其成员是公理的实例、Γ的元素，或者是通过推理规则（假言演绎）从先前的公式推导出来的。这个希尔伯特样式系统是逻辑 MTL 的一个强完备（有限）公理化，即对于每个前提集合Γ，我们有：Γ⊨MTLφ当且仅当Γ⊢MTLφ。MTL 的有效性问题已知是可判定的，然而其计算复杂性尚未确定。

## 3. Łukasiewicz 逻辑学

Łukasiewicz 逻辑学可以通过在 MTL 的 Hilbert 风格证明系统中添加公理（称为 Wajsberg 公理）（（φ→ψ）→ψ）→（（ψ→φ）→φ）来定义。它对应于基于Łukasiewicz t-范数的评估所定义的有限版本的推论关系（符号表示：对于每个有限公式集Γ和每个公式φ，我们有Γ⊨Łφ当且仅当Γ⊢Łφ）。\[2]

这种逻辑是多值逻辑的早期例子，由 Jan Łukasiewicz 和 Alfred Tarski（1930 年）引入，早于模糊集理论的产生，通过等价的公理系统（仅具有 modus ponens 作为推理规则）引入：

φ→(ψ→φ)(φ→ψ)→((ψ→χ)→(φ→χ))((φ→ψ)→ψ)→((ψ→φ)→φ)(¬ψ→¬φ)→(φ→ψ)((φ→ψ)→(ψ→φ))→(ψ→φ).

Łukasiewicz 逻辑是唯一一种基于 t-范数的模糊逻辑，其中所有的连接词都是由连续函数解释的，包括由函数 x⇒Ły=min{1,1−x+y}给出的蕴含。McNaughton 定理（1951）指出，对于\[0,1]上解释Łukasiewicz 逻辑公式的实值函数，恰好是具有整数系数的连续分段线性函数。在计算复杂性方面，这种逻辑的有效性问题在渐近意义下不比经典逻辑更糟糕：它仍然是 coNP 完全的。

## 4. Gödel–Dummett 逻辑

哥德尔-邓梅特逻辑，也被称为邓梅特的 LC 或简称为哥德尔逻辑，是另一个具有\[0,1]真值的多值逻辑的早期示例。它由迈克尔·邓梅特（1959 年）引入，作为直觉逻辑的扩展，通过公理(φ→ψ)∨(ψ→φ)。这个公式在底层（基于克里普克风格和代数的）语义中强制了一个线性顺序。它还出现在库尔特·哥德尔观察到不可能通过有限真值表来表征直觉逻辑的背景下（哥德尔 1932 年）。在模糊逻辑设置中，哥德尔-邓梅特逻辑可以作为 MTL 的公理扩展来获得，方法是添加公理φ→φ&φ，这等于要求&的幂等性，因此两个合取的解释相同。从语义上讲，哥德尔-邓梅特逻辑也可以定义为由最小 t-范数给出的推理关系。它被区分为唯一一个基于 t-范数的逻辑，其中公式在给定评估中的有效性不依赖于命题变量被赋予的具体值，而只依赖于这些值的相对顺序。从这个意义上讲，哥德尔-邓梅特逻辑可以被看作是一种比较真理的逻辑。与Łukasiewicz 逻辑一样，测试有效性的计算复杂性仍然是 coNP 完全的。

## 5. 其他值得注意的模糊逻辑

除了 MTL（所有左连续 t-范数的逻辑）和Łukasiewicz 和 Gödel-Dummett 逻辑（由特定 t-范数引起），人们还可以考虑由 t-范数集合或一般的 MTL 公理扩展引起的逻辑。特别地，通过在 MTL 的公理中添加φ&(φ→ψ)→ψ&(ψ→φ)的公理，可以得到所有连续 t-范数（Hájek 的基本模糊逻辑 BL）的逻辑。实际上，对于任何一组连续 t-范数，都存在相应逻辑的有限公理化（Esteva，Godo 和 Montagna 2003; Haniková 2014）；在大多数情况下，公理化可以捕捉到有限前提集的语义推理。特别地，第三个著名连续 t-范数（代数乘积）的逻辑，即 Product 逻辑，是通过公理¬φ∨((φ→φ&ψ)→ψ)对 BL 进行扩展得到的。另一方面，并非所有 MTL 的公理扩展都可以给出基于 t-范数的语义。例如，经典逻辑可以被公理化为 MTL + φ∨¬φ，但排中律不是任何基于 t-范数的解释下的重言式。

还有理由考虑更弱的模糊逻辑。例如，可以认为将合取运算符&解释为 t-范数的假设过于强大。特别地，将 1 视为其中性元素的假设强制了将重言式定义为始终求值为 1 的公式，并将推理关系定义为对值 1 的保持 - 也就是说，1 是语义中唯一的指定值。\[3]引入具有多个指定真值度的逻辑的一种自然方式是假设&的中性元素是一个小于 1 的数 t。可以证明，在这种情况下，指定的真值度恰好是大于或等于 t 的那些。这种合取的解释被称为 uninorms。左连续 uninorms 的逻辑在 Metcalfe 和 Montagna（2007）中被公理化。

类似地，人们可以反对&的可交换性甚至结合性。相关逻辑的公理化在文献中有所描述（参见 Cintula, Horčík, & Noguera 2013; Jenei & Montagna 2003）；唯一的例外是非可交换非单调合取的逻辑，其自然公理系统尚未知晓。

最后，考虑到模糊逻辑通常不具备功能完备性，与经典逻辑不同，可以通过添加新的连接词来增强其表达能力。最常考虑的连接词有：对于每个有理数 r∈(0,1)，存在真值常数¯r；一元连接词∼和△的解释为∼x=1−x 和△x=1（如果 x=1）和 0（否则）；二元连接词⊙的解释为通常的代数乘积等（Baaz 1996; Esteva, Gispert, Godo, & Noguera 2007; Esteva, Godo, & Montagna 2001; Esteva, Godo, Hájek, & Navara 2000）。

在本节提到的所有命题模糊逻辑种类（以及其一般理论）的全面概述可以在《数学模糊逻辑手册》（3 卷，Cintula et al. 2011a,b, 2015）中找到。

## 6. 谓词逻辑

命题逻辑 MTL 可以在谓词语言 PL 中给出一个一阶对应物 MTL∀，其定义方式如下。语义由结构给出，其中谓词符号被解释为将域元组映射到真值的函数。更准确地说，给定一个左连续 t-范数∗，一个∗-结构 M 由非空元素域 M，对于每个 n 元函数符号 f∈PL 的函数 fM:Mn→M，以及对于每个 n 元谓词符号 P∈PL 的函数 PM:Mn→\[0,1]组成。在 M 中固定对象变量的赋值 v，可以定义项的值（∥f(t1,…,tn)∥Mv=fM(∥t1∥Mv,…,∥tn∥Mv)）和原子公式的真值（∥P(t1,…,tn)∥Mv=PM(∥t1∥Mv,…,∥tn∥Mv)）。全称/存在量化公式的真值通过公式的实例的真值的下确界/上确界计算，其中量化变量在域 M 的所有元素上运行。形式上：∥∀xφ∥Mv=inf{∥φ∥Mv\[x:a]∣a∈M}∥∃xφ∥Mv=sup{∥φ∥Mv\[x:a]∣a∈M}，其中 v\[x:a]是将 x 映射到 a 并保持其他变量值不变的赋值。其他公式的值通过将&解释为∗，将蕴含→解释为其剩余⇒∗，将∧和¯¯¯0 解释为 min 和 0 来计算，与命题语义相同。

一阶逻辑 MTL∀然后被定义为在∗-结构（允许∗遍历所有左连续 t-范数）中保持总真值（值 1）的推论关系。更准确地说，我们说一个一阶公式φ是一组公式Γ的推论（符号表示为Γ⊨MTL∀φ），如果对于每个左连续 t-范数∗和每个∗-结构 M，对于每个赋值 v，只要对于每个赋值 v 和每个ψ∈Γ，我们有∥φ∥Mv=1，则∥ψ∥Mv=1。

MTL∀可以使用以下公理给出一个强完备的希尔伯特风格证明系统：

* (P)MTL 的一阶公理实例
* (∀1)∀xφ(x)→φ(t)，其中术语 t 可以替代φ中的 x
* (∃1)φ(t)→∃xφ(x)，其中术语 t 可以替代φ中的 x
* (∀2)∀x(χ→φ)→(χ→∀xφ)，其中 x 在χ中不是自由的
* (∃2)∀x(φ→χ)→(∃xφ→χ)，其中 x 在χ中不是自由的
* (∀3)∀x(χ∨φ)→χ∨∀xφ，其中 x 在χ中不是自由的。

MTL∀的推导规则是假言推理加上概括规则：从φ推导出∀xφ。

引入其他命题 t-范数基础模糊逻辑的一阶对应有两种方式。一方面，可以通过在 MTL∀的公理化中添加命题公理的一阶实例来扩展。以此方式可以得到一阶变体的句法表达，例如Łukasiewicz 逻辑、Gödel–Dummett 逻辑、Product 逻辑或 Hájek 的基础模糊逻辑 BL。另一方面，可以通过定义由相应的（一组）t-范数给出的推论关系来轻松修改 MTL∀的语义定义。然后，自然的问题是在每种情况下，这两种途径是否导致相同的逻辑（就像 MTL 一样）。对于正确性，没有问题，因为可以轻松地检查公理系统是否相对于其相应的结构类是正确的。至于完备性，没有一般的答案，问题必须逐案考虑。

对于哥德尔-邓梅特逻辑，其公理系统在语义上是强完备的。然而，卢卡西维奇逻辑的语义中的永真式集合是不可递归公理化的，正如布鲁诺·斯卡佩利尼（1962）所示。埃米尔·拉加兹（1981）证明了它实际上在算术层次上是Σ2-完备的。在乘积逻辑和 Hájek 的基本模糊逻辑 BL 的情况下，情况甚至更糟，由连续 t-范数给出的所有结构的一阶永真式集合与真实算术一样复杂（Montagna 2001）。可以通过向希尔伯特样式的证明系统中添加适当的无穷推理规则来实现完备性，就像路易丝·海（1963）为卢卡西维奇逻辑所做的那样，或者通过推广真值集合（见下一节）。

弱模糊逻辑的一阶对应物可以通过类似的句法和语义方法进行研究；请参阅 Cintula，Horčík 和 Noguera（2014）中的调查报告。

## 7. 代数语义学

模糊逻辑学研究中的主要工具之一是代数语义学。粗略地说，其思想是用任意集合替换实数单位区间，并将连接词解释为该集合上相应阶数的操作。

由 Francesc Esteva 和 Lluís Godo（2001）引入的 MTL 代数是一个元组 A=⟨A,&,→,∧,∨,¯¯¯0,¯¯¯1⟩，其中

* ⟨A,∧,∨,¯¯¯0,¯¯¯1⟩是一个有界格。
* ⟨A,&,¯¯¯1⟩ 是一个可交换的幺半群
* (x→y)∨(y→x)=¯¯¯1
* x\&y≤z 当且仅当 x≤y→z (其中 ≤ 是由 ∧ 或 ∨ 引起的格序)。

如果格序是全序的，则称 A 为 MTL 链。值得注意的是，MTL 代数是可分析格的一个子变种，为次结构逻辑提供了代数语义；这是指向这两个逻辑家族之间紧密联系的第一个指针。

MTL 代数是上述基于 t-范数的语义的推广，并为 MTL 提供了一个完备的语义。\[4]

MTL 链是整个代数类的基本构建块，意味着每个 MTL 代数都可以分解为链的子直积。这意味着逻辑也是完备的，与 MTL 链的语义相对应，这是证明其相对于基于 t-范数的语义的完备性的第一步（Jenei＆Montagna 2002）。

代数语义学是命题逻辑的通用工具。特别是，对于文献中研究的任意模糊逻辑（即使不支持基于 t-范数的语义，如有限值模糊逻辑或非交换单范数逻辑），都可以找到相应的代数类，可以分解为链的子直积。这一事实导致 Libor Běhounek 和 Petr Cintula（2006）提出了模糊逻辑的定义，即与完全有序的代数结构相关的逻辑。

代数语义学可以以相当直接的方式用于一阶模糊逻辑：只需将前一节的∗-结构的定义更改为一种结构，该结构使用任意的 MTL 链及其运算来计算公式的真值，而不是区间\[0,1]和∗及其余元。给定一个命题模糊逻辑，可以使用这种广义语义来获得一个可递归枚举的重言式集合，并获得相应一阶希尔伯特样式证明系统的强完备性定理。

## 8. 证明论

提出模糊逻辑的分析证明系统一直是一个相当大的挑战。这些系统与Gentzen的古典逻辑和直觉逻辑的序列演算具有重要的特征共享，如可消除割和子公式性质（参见证明理论发展条目）。Arnon Avron（1991）引入了Gödel-Dummett逻辑的超序列演算，取得了重大突破。超序列演算是通过定义推理规则，这些规则引用有限多重序列而不是单个序列，从序列演算中产生的。在元层次上，超序列被解释为序列的析取。这种解释意味着可以安全地添加额外的序列（外部弱化）或者将给定超序列中的多个相同序列替换为单个相同序列（外部收缩）。在Gödel-Dummett逻辑的情况下，引入逻辑连接词的规则是通过在原始规则的上下序列中简单地添加侧超序列来实现的。例如，右侧引入合取的序列规则Γ1⇒ϕΓ2⇒ψΓ1,Γ2⇒ϕ∧ψ其中Γ1和Γ2是有限的公式序列，转化为以下超序列规则H∣Γ1⇒ϕH′∣Γ2⇒ψH∣H′∣Γ1,Γ2⇒ϕ∧ψ其中H和H'表示侧超序列，即以析取方式添加到展示序列的有限多重序列。这本身不会改变相应的逻辑（在这种情况下是直觉逻辑）。关键的附加结构规则是所谓的通信规则H∣Γ1,Π1⇒Δ1H′∣Γ2,Π2⇒Δ2H∣H′∣Γ1,Γ2⇒Δ1∣Π2,Π2⇒Δ2这里Γ1、Γ2、Π1、Π2是有限的公式序列；Δ1和Δ2要么是单个公式，要么为空；H和H'表示侧超序列，如上所述。为了理解通信规则的影响，我们提出了一个关键公理(φ→ψ)∨(ψ→φ)的推导，该推导在初始的(超)序列下方立即应用了这个规则：φ⇒φψ⇒ψφ⇒ψ∣ψ⇒φ⇒φ→ψ∣ψ⇒φ⇒φ→ψ∣⇒ψ→φ⇒(φ→ψ)∨(ψ→φ)∣⇒ψ→φ⇒(φ→ψ)∨(ψ→φ)∣⇒(φ→ψ)∨(ψ→φ)⇒(φ→ψ)∨(ψ→φ)

要获得基本模糊逻辑 MTL 的超序列演算，必须将通信规则添加到无收缩版本直觉逻辑的序列系统中（这是一个经过深入研究的子结构逻辑的示例）。对于其他模糊逻辑，特别是Łukasiewicz 逻辑，分析证明系统需要与传统演算有更为根本的区别，其中超序列的序列组成部分的解释与直觉逻辑或经典逻辑不同。还提出了带标签的证明系统和各种表演算法。有关相关现有技术的详细介绍可参见 Metcalfe、Olivetti 和 Gabbay 2008 年以及 Metcalfe 2011 年。

## 9. 证明真功能性的语义学解释

从哲学角度来看，不仅如此，还可以更好地掌握模糊逻辑在与模糊和不精确概念进行推理的基本模型中，中间真值和相应的逻辑连接词的含义之间的关系，以便更好地理解其潜在应用。已经引入了一些这样的语义学，旨在证明特定的真值连接词选择是合理的。这里只简要描述其中的两个。

投票语义是基于这样的思想：不同的代理人（选民）可能以一致的方式对待同一个命题进行判断。接受命题φ为真的代理人的比例可以被视为一个真值。如果没有进一步的限制，这不会导致真值功能语义，而是导致对命题的概率分配。但是，如果为每个代理人分配一个固定的怀疑水平，并对逻辑复杂的陈述的判断与这些水平保持一致的一些自然条件进行约束，那么可以分别恢复 min、max 和 1−x 作为合取、析取和否定的真值函数。详细信息可以在 Lawry 1998 中找到。

另一个引人入胜的推理模型是由 Robin Giles（1974）引入的，它为标准Łukasiewicz 逻辑的所有命题连接词提供了合理性的解释。它是一个游戏，两个玩家，我和你，根据以下规则系统地将逻辑复杂的断言（公式）简化为更简单的断言：

* 如果我断言φ∨ψ，那么我必须断言φ或ψ之一。
* 如果我断言φ∧ψ，那么你选择其中一个合取式，我必须相应地断言φ或ψ。
* 如果我断言φ→ψ，那么如果你断言φ，我必须断言ψ。

量化陈述的规则是针对一个固定的领域，假设每个领域元素都有一个常量符号，由人们规定：

* 如果我断言∀xφ(x)，那么我必须断言φ(c)，其中 c 是你选择的一个常量。
* 如果我断言∃xφ(x)，那么我必须断言φ(c)，其中 c 是我自己选择的一个常量。

你的断言规则是双重的。在游戏的每个状态中，我或你当前断言的多重集合中的非原子公式的出现被选择，并按照这些规则替换为子公式，直到只剩下原子断言为止。然后，根据以下投注方案评估最终的游戏状态。

对于每个原子公式，都有一个相应的实验，该实验可能失败或成功，但可能出现离散性，即当重复时可能产生不同的结果。每个实验和每个原子公式都分配了一个固定的失败概率，称为风险值。玩家必须为他们的每个原子断言向对方支付 1 美元，其中相关实验失败。对于任何以我的φ断言开始的游戏，如果我们都理性地玩，可以证明我的预期总体金钱损失与在将风险值的倒数分配为原子公式的真值的Łukasiewicz 逻辑的解释中评估φ的真值的倒数相对应。特别地，一个公式在Łukasiewicz 逻辑中是有效的当且仅当对于每个风险值分配，我都有一种策略保证在游戏结束时我的预期总体损失为 0 或负数。

Christian Fermüller 和 George Metcalfe（2009）指出了 Giles 游戏中最优策略与Łukasiewicz 逻辑的超序列系统中无割证明之间的对应关系。该游戏还在 Fermüller＆Roschger 2014 年进行了扩展，以刻画各种类型的（半）模糊量词，旨在模拟自然语言表达式，如“大约一半”或“几乎全部”。

Jeff Paris (2000)提供了对其他支持不同真值函数选择的语义学的概述；特别是，重新随机化语义学（Hisdal 1988），相似性语义学（例如，Ruspini 1991），可接受性语义学（Paris 1997）和近似语义学（Paris 2000）。让我们还提到 Běhounek 2009 年提出的基于资源的语义学。此外，除了 Giles 对Łukasiewicz 逻辑的评估游戏之外，还有各种模糊逻辑的不同形式的评估游戏。对这些语义游戏的概述在 Fermüller 2015 年中给出。

## 10. 模糊逻辑和模糊性

用模糊谓词和命题建模推理通常被引用为引入模糊逻辑的主要动机。有许多关于模糊性的替代理论，但普遍认为对索拉特悖论的敏感性是模糊性的主要特征。考虑以下版本的悖论：

* (1)10100 是一个巨大的数字。
* (2)如果 n 是一个巨大的数字，那么 n-1 也是巨大的。

表面上看，接受这两个假设似乎是不不合理的。通过在(2)中实例化 n 为 10100，并将(1)作为另一个前提应用演绎法则，我们得出 10100-1 是巨大的结论。通过简单地重复这种推理，我们得出了不合理的陈述。

* (3)0 是一个巨大的数字。

模糊逻辑学表明，对索拉斯悖论的分析应该尊重这样的直觉，即陈述（2）虽然可以说不完全正确，但几乎是正确的。

有多种方式可以在基于 t-范数的模糊逻辑学中建模这种形式的推理，以解决这个悖论。例如，可以声明如果结论的真实程度不低于其前提的强合取的真实程度，则任何假言三段论的实例都是正确的\[5]。如上所示，我们规定每个（2）的实例都是真实程度为 1-ϵ的，其中ϵ是一个非常小的数。即使我们声明（1）是完全正确的，那么 10100-1 也是巨大的这个陈述可能不是完全正确的，但不会损害实例化和假言三段论的正确性。此外，如果两个不完全真实（也不完全假）陈述的合取的真实程度小于每个合取的真实程度，我们可以安全地声明陈述（3）是完全错误的，并坚持在所示的推理链中每一步的正确性。简单来说，通过假设将某个完全巨大的数字反复减少一小部分，会导致越来越不真实的数字也越来越不真实，这个悖论就消失了。

Hájek & Novák 2003 提出了一种基于真值程度的索拉特悖论的替代解决方案。他们引入了一个新的真值函数连接词，模拟了“几乎是真的”这个表达式。通过这种方式，他们在一个基于适当的 t-范数的模糊逻辑的公理化理论中形式化了索拉特式推理。

Nicholas J.J. Smith（2005 年和 2008 年）认为所谓的接近原则捕捉了模糊性的本质。它表达了关于无法区分的对象的相同形式的陈述应该在真实性方面保持接近。许多使用模糊逻辑的索拉特悖论方法与这一原则兼容。\[6]

<!--md-padding-ignore-begin-->
## Bibliography

Supplementary document:

[Bibliography Sorted by Topic](https://plato.stanford.edu/entries/logic-fuzzy/readings-by-topic.html)

* Aguzzoli, Stefano, Simone Bova, and Brunella Gerla, 2011, “Free algebras and functional representation for fuzzy logics”, in Cintula, Petr, Petr Hájek, and Carles Noguera (eds.), *Handbook of Mathematical Fuzzy Logic*, Volume 2, (Mathematical Logic and Foundations, Volume 38), London: College Publications, pages 713–791.
* Avron, Arnon, 1991, “Hypersequents, Logical Consequence and Intermediate Logics for Concurrency”, *Annals of Mathematics and Artificial Intelligence*, 4(3–4): 225–248. doi:10.1007/BF01531058
* Baaz, Matthias, 1996, “Infinite-Valued Gödel Logic with 0–1-Projections and Relativisations”, in Hájek, Petr (ed.), *Gödel’96: Logical Foundations of Mathematics, Computer Science, and Physics*, (Lecture Notes in Logic, Volume 6), Brno: Springer, pages 23–33.
* Baaz, Matthias, Petr Hájek, Franco Montagna, and Helmut Veith, 2002, “Complexity of T-Tautologies”, *Annals of Pure and Applied Logic*, 113(1–3): 3–11.
* Baaz, Matthias and Norbert Preining, 2011, “Gödel–Dummett Logics”, in Cintula, Petr, Petr Hájek, and Carles Noguera (eds.), *Handbook of Mathematical Fuzzy Logic*, Volume 2, (Mathematical Logic and Foundations, Volume 38), London: College Publications, pages 585–625.
* Badia, Guillermo and Carles Noguera, 2021, “Lindström theorems in graded model theory”, *Annals of Pure and Applied Logic*, 172(3): 102916. doi: 10.1016/j.apal.2020.102916
* –––, 2021, “A General Omitting Types Theorem in Mathematical Fuzzy Logic”, *IEEE Transactions on Fuzzy Systems*, 29(6): 1386–1394. doi: 10.1109/TFUZZ.2020.2975146
* Běhounek, Libor, 2009, “Fuzzy Logics Interpreted as Logics of Resources”, in Peliš, Michal (ed.), *The Logica Yearbook 2008*, London: College Publications, pages 9–21.
* –––, 2014, “In Which Sense Is Fuzzy Logic a Logic For Vagueness?”, in Łukasiewicz, Thomas, Rafael Peñaloza, and Anni-Yasmin Turhan (eds.), *PRUV 2014: Logics for Reasoning About Preferences, Uncertainty, and Vagueness*, (CEUR Workshop Proceedings, Volume 1205), Dresden: CEUR.
* Běhounek, Libor and Petr Cintula, 2005, “Fuzzy Class Theory”, *Fuzzy Sets and Systems*, 154(1): 34–55.
* –––, 2006, “Fuzzy Logics as the Logics of Chains”, *Fuzzy Sets and Systems*, 157(5): 604–610.
* Běhounek, Libor and Zuzana Haniková, 2014, “Set Theory and Arithmetic in Fuzzy Logic”, in Montagna, Franco (ed.), *Petr Hájek on Mathematical Fuzzy Logic*, (Outstanding Contributions to Logic, Volume 6), Cham: Springer, pages 63–89.
* Bělohlávek, Radim, Joseph W. Dauben, and George J. Klir, 2017, *Fuzzy Logic and Mathematics: A Historical Perspective*, Oxford: Oxford University Press. doi:10.1093/oso/9780190200015.001.0001
* Bělohlávek, Radim and Vilém Vychodil, 2005, *Fuzzy Equational Logic*, (Studies in Fuzziness and Soft Computing, Volume 186), Berlin and Heidelberg: Springer.
* Bobillo, Fernando, Marco Cerami, Francesc Esteva, Àngel García-Cerdaña, Rafael Peñaloza, and Umberto Straccia, 2015, “Fuzzy Description Logics”, in Cintula, Petr, Christian G. Fermüller, and Carles Noguera (eds.), *Handbook of Mathematical Fuzzy Logic*, Volume 3, (Mathematical Logic and Foundations, Volume 58), London: College Publications, pages 1105–1181.
* Bou, Félix, Francesc Esteva, Lluís Godo, and Ricardo Oscar Rodríguez, 2011, “On the Minimum Many-Valued Modal Logic Over a Finite Residuated Lattice”, *Journal of Logic and Computation*, 21(5): 739–790.
* Busaniche, Manuela and Franco Montagna, 2011, “Hájek’s Logic BL and BL-Algebras”, in Cintula, Petr, Petr Hájek, and Carles Noguera (eds.), *Handbook of Mathematical Fuzzy Logic*, Volume 1, (Mathematical Logic and Foundations, Volume 37), London: College Publications, pages 355–447.
* Ciabattoni, Agata, Nikolaos Galatos, and Kazushige Terui, 2012, “Algebraic Proof Theory for Substructural Logics: Cut-Elimination and Completions”, *Annals of Pure and Applied Logic*, 163(3): 266–290.
* Caicedo, Xavier, George Metcalfe, Ricardo Oscar Rodríguez, and Jonas Rogger, 2017, “Decidability of order-based modal logics”, *Journal of Computer and System Sciences*, 88: 53–74. doi:10.1016/j.jcss.2017.03.012
* Caicedo, Xavier and Ricardo Oscar Rodríguez, 2010, “Standard Gödel Modal Logics”, *Studia Logica*, 94(2): 189–214.
* –––, 2015, “Bi-modal Gödel logic over \[0, 1]-valued Kripke frames”, *Journal of Logic and Computation*, 25(1): 37–55. doi: 10.1093/logcom/exs036
* Cicalese, Ferdinando and Franco Montagna, 2015, “Ulam–Rényi Game Based Semantics For Fuzzy Logics”, in Cintula, Petr, Christian G. Fermüller, and Carles Noguera (eds.), *Handbook of Mathematical Fuzzy Logic*, Volume 3, (Mathematical Logic and Foundations, Volume 58), London: College Publications, pages 1029–1062.
* Cignoli, Roberto, Itala M. D’Ottaviano, and Daniele Mundici, 1999, *Algebraic Foundations of Many-Valued Reasoning*, (Trends in Logic, Volume 7), Dordrecht: Kluwer.
* Cintula, Petr, 2006, “Weakly Implicative (Fuzzy) Logics I: Basic Properties”, *Archive for Mathematical Logic*, 45(6): 673–704.
* Cintula, Petr, Denisa Diaconescu, and George Metcalfe, 2019, “Skolemization and Herbrand theorems for lattice-valued logics”, *Theoretical Computer Science*, 768: 54–75. doi: 10.1016/j.tcs.2019.02.007
* Cintula, Petr, Francesc Esteva, Joan Gispert, Lluís Godo, Franco Montagna, and Carles Noguera, 2009, “Distinguished Algebraic Semantics for T-norm Based Fuzzy Logics: Methods and Algebraic Equivalencies”, *Annals of Pure and Applied Logic*, 160(1): 53–81.
* Cintula, Petr, Christian G. Fermüller, and Carles Noguera (eds.), 2015, *Handbook of Mathematical Fuzzy Logic*, volume 3, (Studies in Logic, Volume 58), London: College Publications.
* Cintula, Petr, Petr Hájek, and Carles Noguera (eds.), 2011a, *Handbook of Mathematical Fuzzy Logic*, volume 1 (Studies in Logic, Volume 37), London: College Publications.
* ––– (eds.), 2011b, *Handbook of Mathematical Fuzzy Logic*, volume 2 (Studies in Logic, Volume 38), London: College Publications.
* Cintula, Petr, Rostislav Horčík, Carles Noguera, 2013, “Non-Associative Substructural Logics and their Semilinear Extensions: Axiomatization and Completeness Properties”, *The Review of Symbolic Logic*, 6(3): 394–423. doi:10.1017/S1755020313000099
* –––, 2014, “The Quest for the Basic Fuzzy Logic”, in Montagna, Franco (ed.), *Petr Hájek on Mathematical Fuzzy Logic*, (Outstanding Contributions to Logic, Volume 6), Cham: Springer, pages 245–290. doi:10.1007/978-3-319-06233-4\_12
* Cintula, Petr, Paula Menchón, and Carles Noguera, 2019, “Toward a general frame semantics for modal many-valued logics”, *Soft Computing*, 23(7): 2233–2241. doi: 10.1007/s00500-018-3369-5
* Cintula, Petr and Carles Noguera, 2011, “A General Framework for Mathematical Fuzzy Logic”, in Cintula, Petr, Petr Hájek, and Carles Noguera (eds.), *Handbook of Mathematical Fuzzy Logic*, Volume 1, (Mathematical Logic and Foundations, Volume 37), London: College Publications, pages 103–207.
* Cintula, Petr and George Metcalfe, 2009, “Structural Completeness in Fuzzy Logics”, *Notre Dame Journal of Formal Logic*, 50(2): 153–183.
* Dellunde, Pilar, 2012, “Preserving Mappings in Fuzzy Predicate Logics”, *Journal of Logic and Computation*, 22(6): 1367–1389.
* Dellunde, Pilar, Àngel García-Cerdaña, and Carles Noguera, 2018, “Back-and-forth systems for fuzzy first-order models”, *Fuzzy Sets and Systems*, 345: 83–98.
* Di Nola, Antonio and Giangiacomo Gerla, 1986, “Fuzzy Models of First-Order Languages”, *Zeitschrift für Mathematische Logik und Grundlagen der Mathematik*, 32(19–24): 331–340.
* Dummett, Michael, 1959, “A Propositional Calculus with Denumerable Matrix”, *Journal of Symbolic Logic*, 24(2): 97–106. doi:10.2307/2964753
* Esteva, Francesc, Joan Gispert, Lluís Godo, and Carles Noguera, 2007, “Adding Truth-Constants to Logics of Continuous T-norms: Axiomatization and Completeness Results”, *Fuzzy Sets and Systems*, 158(6): 597–618. doi:10.1016/j.fss.2006.11.010
* Esteva, Francesc and Lluís Godo, 2001, “Monoidal T-norm Based Logic: Towards a Logic for Left-Continuous T-norms”, *Fuzzy Sets and Systems*, 124(3): 271–288. doi:10.1016/S0165-0114(01)00098-7
* Esteva, Francesc, Lluís Godo, and Àngel García-Cerdaña, 2003, “On the Hierarchy of T-norm Based Residuated Fuzzy Logics”, in Fitting, Melvin and Ewa Orłowska (eds.), *Beyond Two: Theory and Applications of Multiple-Valued Logic*, (Studies in Fuzziness and Soft Computing, Volume 114), Heidelberg: Springer, pages 251–272.
* Esteva, Francesc, Lluís Godo, Petr Hájek, and Mirko Navara, 2000, “Residuated Fuzzy Logics with an Involutive Negation”, *Archive for Mathematical Logic*, 39(2): 103–124. doi:10.1007/s001530050006
* Esteva, Francesc, Lluís Godo, and Enrico Marchioni, 2011, “Fuzzy Logics with Enriched Language”, in Cintula, Petr, Petr Hájek, and Carles Noguera (eds.), *Handbook of Mathematical Fuzzy Logic*, Volume 2, (Mathematical Logic and Foundations, Volume 38), London: College Publications, pages 627–711.
* Esteva, Francesc, Lluís Godo, and Franco Montagna, 2001, “The LΠ and LΠ12 Logics: Two Complete Fuzzy Systems Joining Łukasiewicz and Product Logics”, *Archive for Mathematical Logic*, 40(1): 39–67. doi:10.1007/s001530050173
* –––, 2003, “Axiomatization of Any Residuated Fuzzy Logic Defined by a Continuous T-norm”, in Taner Bilgiç, Bernard De Baets, and Okyay Kaynak (eds.), *Fuzzy Sets and Systems: IFSA 2003*, (Lecture Notes in Computer Science, Volume 2715), Berlin/Heidelberg: Springer, pages 172–179. doi:10.1007/3-540-44967-1\_20
* Fedel, Martina, Hykel Hosni, and Franco Montagna, 2011, “A Logical Characterization of Coherence for Imprecise Probabilities”, *International Journal of Approximate Reasoning*, 52(8): 1147–1170, doi: 10.1016/j.ijar.2011.06.004.
* Fermüller, Christian G., 2015, “Semantic Games for Fuzzy Logics”, Cintula, Petr, Christian G. Fermüller, and Carles Noguera (eds.), 2015, *Handbook of Mathematical Fuzzy Logic*, volume 3, (Studies in Logic, Volume 58), London: College Publications, pages 969–1028.
* Fermüller, Christian G. and George Metcalfe, 2009, “Giles’s Game and Proof Theory for Łukasiewicz Logic”, *Studia Logica*, 92(1): 27–61. doi:10.1007/s11225-009-9185-2
* Fermüller, Christian G. and Christoph Roschger, 2014, “Randomized Game Semantics for Semi-Fuzzy Quantifiers”, *Logic Journal of the Interest Group of Pure and Applied Logic*, 22(3): 413–439. doi:10.1093/jigpal/jzt049
* Flaminio, Tommaso, Lluís Godo, and Enrico Marchioni, 2011, “Reasoning About Uncertainty of Fuzzy Events: An Overview”, in Cintula, Petr, Christian G. Fermüller, Lluís Godo, and Petr Hájek(eds.), *Understanding Vagueness: Logical, Philosophical, and Linguistic Perspectives*, (Studies in Logic, Volume 36), London: College Publications, pages 367–400.
* Flaminio, Tommaso and Tomáš Kroupa, 2015, “States of MV-Algebras”, in Cintula, Petr, Christian G. Fermüller, and Carles Noguera (eds.), *Handbook of Mathematical Fuzzy Logic*, Volume 3, (Mathematical Logic and Foundations, Volume 58), London: College Publications, pages 1183–1236.
* Font, Josep Maria, 2016, *Abstract Algebraic Logic: An Introductory Textbook*, (Mathematical Logic and Foundations, Volume 60), London: College Publications.
* Galatos, Nikolaos, Peter Jipsen, Tomasz Kowalski, and Hiroakira Ono, 2007, *Residuated Lattices: An Algebraic Glimpse at Substructural Logics*, (Studies in Logic and the Foundations of Mathematics, Volume 151), Amsterdam: Elsevier.
* García-Cerdaña, Àngel, Eva Armengol, and Francesc Esteva, 2010, “Fuzzy Description Logics and T-norm Based Fuzzy Logics”, *International Journal of Approximate Reasoning*, 51(6): 632–655.
* Gehrke, Mai, Carol L. Walker, and Elbert A. Walker, 1997, “A Mathematical Setting for Fuzzy Logics”, *International Journal of Uncertainty, Fuzziness, and Knowledge-Based Systems*, 5(3): 223–238. doi:10.1142/S021848859700021X
* Gerla, Giangiacomo, 2001, *Fuzzy Logic—Mathematical Tool for Approximate Reasoning*, (Trends in Logic, Volume 11), New York: Kluwer and Plenum Press.
* Giles, Robin, 1974, “A Non-Classical Logic for Physics”, *Studia Logica*, 33(4): 397–415. doi:10.1007/BF02123379
* Gödel, Kurt, 1932, “Zum intuitionistischen Aussagenkalkül”, *Anzeiger Akademie Der Wissenschaften Wien*, 69: 65–66.
* Godo, Lluís, Francesc Esteva, and Petr Hájek, 2000, “Reasoning About Probability Using Fuzzy Logic”, *Neural Network World*, 10(5): 811–823.
* Goguen, Joseph A., 1969, “The Logic of Inexact Concepts”, *Synthese*, 19(3–4): 325–373.
* Gottwald, Siegfried, 2001, *A Treatise On Many-Valued Logics*, (Studies in Logic and Computation, Volume 9), Baldock: Research Studies Press Ltd.
* Hájek, Petr, 1998, *Metamathematics of Fuzzy Logic*, (Trends in Logic, Volume 4), Dordrecht: Kluwer.
* –––, 2001, “On Very True”, *Fuzzy Sets and Systems*, 124(3): 329–333.
* –––, 2005, “Making Fuzzy Description Logic More General”, *Fuzzy Sets and Systems*, 154(1): 1–15.
* Hájek, Petr and Petr Cintula, 2006, “On Theories and Models in Fuzzy Predicate Logics”, *Journal of Symbolic Logic*, 71(3): 863–880.
* Hájek, Petr and Zuzana Haniková, 2003, “A Development of Set Theory in Fuzzy Logic”, in Fitting, Melvin and Ewa Orłowska (eds.), *Beyond Two: Theory and Applications of Multiple-Valued Logic*, (Studies in Fuzziness and Soft Computing, Volume 114), Heidelberg: Springer, pages 273–285.
* Hájek, Petr, Franco Montagna, Carles Noguera, 2011, “Arithmetical Complexity of First-Order Fuzzy Logics”, in Cintula, Petr, Petr Hájek, and Carles Noguera(eds.), *Handbook of Mathematical Fuzzy Logic*, Volume 2, (Mathematical Logic and Foundations, Volume 38), London: College Publications, pages 853–908.
* Hájek, Petr and Vilém Novák, 2003, “The Sorites Paradox and Fuzzy Logic”, *International Journal of General Systems*, 32(4): 373–383. doi:10.1080/0308107031000152522
* Hájek, Petr, Jeff Paris, and John C. Shepherdson, 2000, “The Liar Paradox and Fuzzy Logic”, *Journal of Symbolic Logic*, 65(1): 339–346.
* Haniková, Zuzana, 2011, “Computational Complexity of Propositional Fuzzy Logics”, in Cintula, Petr, Petr Hájek, and Carles Noguera (eds.), *Handbook of Mathematical Fuzzy Logic*, Volume 2, (Mathematical Logic and Foundations, Volume 38), London: College Publications, pages 793–851.
* –––, 2014, “Varieties Generated by Standard BL-Algebras”, *Order*, 31(1): 15–33. doi:10.1007/s11083-013-9285-5
* Hansoul, Georges and Bruno Teheux, 2013, “Extending Łukasiewicz Logics with a Modality: Algebraic Approach to Relational Semantics”, *Studia Logica*, 101(3): 505–545, doi: 10.1007/s11225-012-9396-9.
* Hay, Louise Schmir, 1963, “Axiomatization of the Infinite-Valued Predicate Calculus”, *Journal of Symbolic Logic*, 28(1): 77–86. doi:10.2307/2271339
* Hisdal, Ellen, 1988, “Are Grades of Membership Probabilities?” *Fuzzy Sets and Systems*, 25(3): 325–348. doi:10.1016/0165-0114(88)90018-8
* Horčík, Rostislav, 2011, “Algebraic Semantics: Semilinear FL-Algebras”, in Cintula, Petr, Petr Hájek, and Carles Noguera (eds.), *Handbook of Mathematical Fuzzy Logic*, Volume 1, (Mathematical Logic and Foundations, Volume 37), London: College Publications, pages 283–353.
* Horn, Alfred, 1969, “Logic with Truth Values in a Linearly Ordered Heyting Algebra”, *The Journal of Symbolic Logic*, 34(3): 395–408.
* Jenei, Sándor and Franco Montagna, 2002, “A Proof of Standard Completeness for Esteva and Godo’s Logic MTL”, *Studia Logica*, 70(2): 183–192. doi:10.1023/A:1015122331293
* Jeřábek, Emil, 2010, “Bases of Admissible Rules of Łukasiewicz Logic”, *Journal of Logic and Computation*, 20(6): 1149–1163.
* –––, 2003, “A Proof of Standard Completeness for Non-Commutative Monoidal T-norm Logic”, *Neural Network World*, 13(5): 481–489.
* Klement, Erich Peter, Radko Mesiar, and Endre Pap, 2000, *Triangular Norms*, (Trends in Logic, Volume 8), Dordrecht: Kluwer.
* Lawry, Jonathan, 1998, “A Voting Mechanism for Fuzzy Logic”, *International Journal of Approximate Reasoning*, 19(3–4): 315–333. doi:10.1016/S0888-613X(98)10013-0
* Leştean, Ioana and Antonio Di Nola, 2011, “Łukasiewicz Logic and MV-Algebras”, in Cintula, Petr, Petr Hájek, and Carles Noguera (eds.), *Handbook of Mathematical Fuzzy Logic*, Volume 2, (Mathematical Logic and Foundations, Volume 38), London: College Publications, pages 469–583.
* Ling, Cho-Hsin, 1965, “Representation of Associative Functions”, *Publicationes Mathematicae Debrecen*, 12: 189–212.
* Łukasiewicz, Jan, 1920, “O Logice Trójwartościowej”, *Ruch Filozoficzny*, 5: 170–171. English translation, “On Three-Valued Logic”, in McCall, Storrs (ed.), 1967, *Polish Logic* *1920–1939*, Oxford: Clarendon Press, pages 16–18, and in Jan Łukasiewicz, 1970, *Selected Works*, Borkowski, Ludwik (ed.), Amsterdam: North-Holland, pages 87–88.
* Łukasiewicz, Jan and Alfred Tarski, 1930, “Untersuchungen über den Aussagenkalkül”, *Comptes Rendus Des Séances de La Société Des Sciences et Des Lettres de Varsovie, Cl. III*, 23(iii): 30–50.
* Marra, Vincenzo and Luca Spada, 2013, “Duality, Projectivity, and Unification in Łukasiewicz Logic and MV-Algebras”, *Annals of Pure and Applied Logic*, 164(3): 192–210.
* McNaughton, Robert, 1951, “A Theorem About Infinite-Valued Sentential Logic”, *Journal of Symbolic Logic*, 16(1): 1–13. doi:10.2307/2268660
* Metcalfe, George, 2011, “Proof Theory for Mathematical Fuzzy Logic”, Cintula, Petr, Petr Hájek, and Carles Noguera (eds.), 2011a, *Handbook of Mathematical Fuzzy Logic*, volume 1 (Studies in Logic, Volume 37), London: College Publications, pages 209–282.
* Metcalfe, George and Franco Montagna, 2007, “Substructural Fuzzy Logics”, *Journal of Symbolic Logic*, 72(3): 834–864. doi:10.2178/jsl/1191333844
* Metcalfe, George, Nicola Olivetti, and Dov M. Gabbay, 2008, *Proof Theory for Fuzzy Logics*, (Applied Logic Series, Volume 36), Dordrecht: Springer Netherlands.
* Montagna, Franco, 2001, “Three Complexity Problems in Quantified Fuzzy Logic”, *Studia Logica*, 68(1): 143–152. doi:10.1023/A:1011958407631
* Montagna, Franco and Carles Noguera, 2010, “Arithmetical Complexity of First-Order Predicate Fuzzy Logics Over Distinguished Semantics”, *Journal of Logic and Computation*, 20(2): 399–424. doi:10.1093/logcom/exp052
* Montagna, Franco, Carles Noguera, and Rostislav Horčík, 2006, “On Weakly Cancellative Fuzzy Logics”, *Journal of Logic and Computation*, 16(4): 423–450.
* Montagna, Franco and Hiroakira Ono, “Kripke Semantics, Undecidability and Standard Completeness for Esteva and Godo’s Logic MTL∀”, *Studia Logica*, 71(2): 227–245.
* Mostert, Paul S. and Allen L. Shields, 1957, “On the Structure of Semigroups on a Compact Manifold with Boundary”, *The Annals of Mathematics, Second Series*, 65(1): 117–143. doi:10.2307/1969668
* Mundici, Daniele, 1987, “Satisfiability in Many-Valued Sentential Logic is NP-Complete”, *Theoretical Computer Science*, 52(1–2): 145–153.
* –––, 1992, “The Logic of Ulam’s Game with Lies”, in Bicchieri, Cristina and Maria Luisa Dalla Chiara (eds.), *Knowledge, Belief, and Strategic Interaction* (*Castiglioncello*, *1989*), Cambridge: Cambridge University Press, 275–284.
* –––, 2011, *Advanced Łukasiewicz Calculus and MV-Algebras*, (Trends in Logic, Volume 35), New York: Springer.
* Novák, Vilém, 2004, “On Fuzzy Type Theory”, *Fuzzy Sets and Systems*, 149(2): 235–273.
* –––, 2015, “Fuzzy Logic with Evaluated Syntax”, in Cintula, Petr, Christian G. Fermüller, and Carles Noguera (eds.), *Handbook of Mathematical Fuzzy Logic*, Volume 3, (Mathematical Logic and Foundations, Volume 58), London: College Publications, pages 1063–1104.
* Novák, Vilém, Irina Perfilieva, and Jiří Močkoř, 2000, *Mathematical Principles of Fuzzy Logic*, Dordrecht: Kluwer.
* Nguyen, Hung T. and Elbert A. Walker, 2005, *A First Course in Fuzzy Logic* (third edition), Chapman and Hall/CRC.
* Paris, Jeff, 1997, “A Semantics for Fuzzy Logic”, *Soft Computing*, 1(3): 143–147. doi:10.1007/s005000050015
* –––, 2000, “Semantics for Fuzzy Logic Supporting Truth Functionality”, in Vilém Novák and Irina Perfilieva (eds.), *Discovering the World with Fuzzy Logic*, (Studies in Fuzziness and Soft Computing. Volume 57), Heidelberg: Springer, pages 82–104.
* Pavelka, Jan, 1979, “On Fuzzy Logic I, II, and III”, *Zeitschrift für Mathematische Logik und Grundlagen der Mathematik*, 25: 45–52, 119–134, and 447–464.
* Ragaz, Matthias Emil, 1981, *Arithmetische Klassifikation von Formelmengen der unendlichwertigen Logik* (PhD thesis), Swiss Federal Institute of Technology, Zürich. doi:10.3929/ethz-a-000226207
* Rodríguez, Ricardo Oscar and Amanda Vidal, 2021, “Axiomatization of Crisp Gödel Modal Logic”, *Studia Logica*, 109(2): 367–395. doi: 10.1007/s11225-020-09910-5
* Ross, Timothy J., 2016, *Fuzzy Logic with Engineering Applications* (fourth edition), Hoboken, NJ: Wiley.
* Ruspini, Enrique H., 1991, “On the Semantics of Fuzzy Logic”, *International Journal of Approximate Reasoning*, 5(1): 45–88. doi:10.1016/0888-613X(91)90006-8
* Scarpellini, Bruno, 1962, “Die Nichtaxiomatisierbarkeit des unendlichwertigen Prädikatenkalküls von Łukasiewicz”, *Journal of Symbolic Logic*, 27(2): 159–170. doi:10.2307/2964111
* Smith, Nicholas J.J., 2005, “Vagueness as Closeness”, *Australasian Journal of Philosophy*, 83(2): 157–183. doi:10.1080/00048400500110826
* –––, 2008, *Vagueness and Degrees of Truth*, Oxford: Oxford University Press.
* –––, 2015, “Fuzzy Logics in Theories of Vagueness”, in Cintula, Petr, Christian G. Fermüller, and Carles Noguera (eds.), *Handbook of Mathematical Fuzzy Logic*, Volume 3, (Mathematical Logic and Foundations, Volume 58), London: College Publications, pages 1237–1281.
* Straccia, Umberto, 1998, “A Fuzzy Description Logic”, in Mostow, Jack and Chuck Rich (eds.), *Proceedings of the 15th National Conference on Artificial Intelligence (AAAI 1998)*, Menlo Park: AAAI Press, pages 594–599.
* Teheux, Bruno, 2016, “Modal definability based on Łukasiewicz validity relations”, *Studia Logica*, 104(2): 343–363. doi: 10.1007/s11225-015-9643-y
* Takeuti, Gaisi and Satako Titani, 1984, “Intuitionistic Fuzzy Logic and Intuitionistic Fuzzy Set Theory”, *Journal of Symbolic Logic*, 49(3): 851–866.
* –––, 1992, “Fuzzy Logic and Fuzzy Set Theory”, *Archive for Mathematical Logic*, 32(1): 1–32.
* Vetterlein, Thomas, 2015, “Algebraic Semantics: The Structure of Residuated Chains”, in Cintula, Petr, Christian G. Fermüller, and Carles Noguera (eds.), *Handbook of Mathematical Fuzzy Logic*, Volume 3, (Mathematical Logic and Foundations, Volume 58), London: College Publications, pages 929–967.
* Vidal, Amanda, 2021, “On transitive modal many-valued logics”, *Fuzzy Sets and Systems*, 407: 97–114. doi: 10.1016/j.fss.2020.01.011
* Vidal, Amanda, Francesc Esteva, and Lluís Godo, 2017, “On modal extensions of Product fuzzy logic”, *Journal of Logic and Computation*, 27(1): 299–336. doi: 10.1093/logcom/exv046
* Zadeh, Lotfi A., 1965, “Fuzzy Sets”, *Information and Control*, 8(3): 338–353. doi:10.1016/S0019-9958(65)90241-X
* –––, 1975, “Fuzzy logic and approximate reasoning”, *Synthese*, 30: 407–428. doi: 10.1007/BF00485052

## Academic Tools

| ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-fuzzy).                                                                      |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-fuzzy/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
| ![inpho icon](../../.gitbook/assets/inpho.png)         | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-fuzzy\&redirect=True) at the Internet Philosophy Ontology Project (InPhO).   |
| ![phil papers icon](../../.gitbook/assets/pp.png)      | [Enhanced bibliography for this entry](https://philpapers.org/sep/logic-fuzzy/) at [PhilPapers](https://philpapers.org/), with links to its database.                          |

## Other Internet Resources

* Hajek, Petr, “Fuzzy Logic”, *The Stanford Encyclopedia of Philosophy* (Fall 2016 Edition), Edward N. Zalta (ed.), URL = [https://plato.stanford.edu/archives/fall2016/entries/logic-fuzzy/](https://plato.stanford.edu/archives/fall2016/entries/logic-fuzzy/). \[This was the previous entry on fuzzy logic in the *Stanford Encyclopedia of Philosophy* — see the [version history](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-fuzzy).]

## Related Entries

[logic: algebraic propositional](https://plato.stanford.edu/entries/logic-algebraic-propositional/) | [logic: many-valued](https://plato.stanford.edu/entries/logic-manyvalued/) | [logic: substructural](https://plato.stanford.edu/entries/logic-substructural/) | [proof theory: development of](https://plato.stanford.edu/entries/proof-theory-development/) | [vagueness](https://plato.stanford.edu/entries/vagueness/)

[Copyright © 2021](https://plato.stanford.edu/info.html#c) by\
[Petr Cintula](http://www2.cs.cas.cz/\~cintula/) <[*cintula@cs.cas.cz*](mailto:cintula%40cs%2ecas%2ecz)>\
[Christian G. Fermüller](http://www.logic.at/staff/chrisf) <[*chrisf@logic.at*](mailto:chrisf%40logic%2eat)>\
[Carles Noguera](http://www.utia.cas.cz/people/noguera) <[*carles.noguera.clofent@gmail.com*](mailto:carles%2enoguera%2eclofent%40gmail%2ecom)>
<!--md-padding-ignore-end-->
