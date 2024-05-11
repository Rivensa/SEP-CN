# 现代模态逻辑的起源 modal logic (Roberta Ballarin)

*首次发表于2010年11月16日；实质修订于2021年6月25日*

模态逻辑可以广义地看作是不同类型的模态或真实模式的逻辑：必然性（“必然地”），认知性（“已知”），道义性（“应该是这样的”）或时间性（“总是如此”）等等。这些运算符的共同逻辑特征证明了这个共同的标签。然而，严格来说，“模态逻辑”一词是保留给必然性模态逻辑的，与时间性或道义逻辑相对应。从纯技术角度来看，任何具有非真值运算符的逻辑，包括一阶逻辑，都可以被视为模态逻辑：从这个角度来看，量词也可以被视为模态运算符（如Montague 1960中所述）。尽管如此，我们遵循传统理解，将模态逻辑视为不包括完整的一阶逻辑。从这个角度来看，模态运算符可以被视为受限量词，范围包括特殊实体，如可能世界或时间瞬间。亚瑟·普赖尔是第一位强调模态系统S5可以被翻译成一阶逻辑片段的哲学家/逻辑学家之一，他称之为“统一的单调一阶谓词演算”（Prior and Fine 1977: 56）。单调，因为S5不需要陈述世界之间的关系；统一，因为只需要一个变量来量化世界（瞬间），当被约束时，并且在自由时引用特权状态（实际世界或当前时间）（参见Prior and Fine 1977）。关于模态逻辑被理解为一阶逻辑的良好片段的模型论特征的技术问题，请参阅Blackburn和van Benthem的《模态逻辑：语义视角》（2007a）。

本条目的范围是模态逻辑的最近历史发展，严格理解为必然性和可能性的逻辑，特别是模态逻辑系统的历史发展，无论是在句法上还是在语义上，从C.I. Lewis 1912年开始的开创性工作，到S. Kripke在20世纪60年代初的工作。在不到五十年的短时间内，模态逻辑在哲学和数学上都蓬勃发展。在数学上，不同的模态系统得到了发展，并且代数学的进步有助于培养这些系统的模型论。这最终导致了发展出一种形式的语义学，将成功的一阶模型论技术扩展到模态逻辑中，从而为许多系统提供了完备性和可决定性结果，但并非所有系统都能做到。在哲学上，不同系统的可用性和采用可能世界模型论语义自然伴随着对可能性和必然性本质的思考，对不同类型的必然性的思考，对形式语义学的作用的思考，以及对可能世界的本质的思考，仅举几例。特别是不同系统的可用性凸显了哲学问题，即在模态运算符的某种预期解释下，哪种模态逻辑是正确的，例如作为逻辑或形而上学的必然性。关于模态逻辑的可解释性问题，特别是量化模态逻辑，被奎因坚持提出。本条目主要致力于该主题的形式发展，不涉及奎因的解释性问题，请参阅Ballarin 2021。

模态逻辑是一个丰富而复杂的主题。本条目并未提供对所考虑时间段内开发的所有系统和证明的模型论结果的完整调查。然而，它确实提供了一个有意义的调查，旨在对那些寻求该主题的历史概述的人有所帮助，即使不是全面的，也勾勒出了最有趣的模型论结果并指出了进一步的探索方向。Bull 和 Segerberg（1984 年：3）将模态逻辑的原始来源分为三个不同的传统——句法、代数和模型论，并采用了这种划分。对于其他影响较小的传统，请参阅 Bull 和 Segerberg（1984 年：16）。另请参阅 Lindström 和 Segerberg 的《模态逻辑与哲学》（2007 年）。本条目的主要焦点是命题模态逻辑，而只对量化模态逻辑语义的某些特定方面进行了简要讨论。有关条目的符号表示，请注意，⇒被采用作为严格蕴涵的替代符号，⇔表示严格等价。

---

## 1. 语法传统

在 1912 年 Mind 杂志的一篇开创性文章《蕴涵与逻辑代数》中，C.I. Lewis 开始对所谓的“物质蕴涵的悖论”提出了关切。Lewis 指出，在 Russell 和 Whitehead 的《数学原理》中，我们发现了两个“惊人的定理：（1）一个假命题蕴涵任何命题，（2）一个真命题被任何命题蕴涵”（1912 年：522）。用符号表示为：

(1)¬p→(p→q)

 和

(2)p→(q→p)

路易斯对这些定理本身没有异议：

> 本身而言，它们既不是神秘的言论，也不是伟大的发现，也不是荒谬的说法。它们只是以鲜明的轮廓展示了已经纳入代数中的“蕴含”的含义。（1912 年：522）

然而，这些定理对于“蕴含”的预期含义以及我们实际的推理方式是不足够的，而这种预期含义试图捕捉到。因此，刘易斯心中有一个对条件连接词→或⊃的预期含义，即英语词“implies”的含义。 “implies”的含义是“普通推理和证明”的含义（1912 年：531），根据这个含义，如果第二个命题可以从第一个命题逻辑推导出来，则一个命题蕴含另一个命题。在这样的解释下，（1）和（2）不应该是定理，因此命题逻辑可以被视为与将→解释为逻辑蕴涵不一致。例如，考虑（2）：从一个命题 p 的纯粹真实性并不（逻辑上）推出 p 从任何命题中逻辑上推出。此外，根据严格解读的→作为逻辑蕴涵的预期含义以及（¬p→q）和（p∨q）的等价性，刘易斯推断出析取也必须给予一个新的内涵意义，即如果 p 不成立，则必须成立 q。

考虑到这种基于连词的外延和内涵解读之间的区别的思考，并不是刘易斯首创。早在1880年，休·麦考尔在《心灵》杂志上发表的八篇关于符号推理的论文系列中的第一篇中声称(p→q)和(¬p∨q)并不等价：(¬p∨q)是(p→q)的推论，但反之则不成立（麦考尔1880: 54）。这是因为麦考尔将∨解释为常规的外延析取，将→解释为内涵蕴涵，但从p的假或q的真并不意味着p没有q是逻辑上不可能的。在该系列的第二篇论文中，麦考尔区分了确定性、可能性和变量陈述，并引入了希腊字母作为分类命题的指标。因此，αε表示α是确定性，αη表示α是不可能性，αθ表示α是变量，即既不是确定性也不是不可能性（麦考尔1897: 496–7）。利用这种三重陈述分类，麦考尔进一步区分了因果蕴涵和一般蕴涵。如果α为真，则α与β之间存在因果蕴涵，只要α为真，β就为真，而β不是确定性。如果α是不可能性或β是确定性，则存在一般蕴涵（1897: 498）。指标的使用为模态的迭代打开了大门，该系列的第三篇论文（麦考尔1900: 75–6）的开头就是澄清具有迭代指标的陈述的含义，其中包括τ表示真和ι表示否定。例如，Aηιε被解读为“确定A是不可能的是假的”（请注意，指标从右向左阅读）。 有趣的是，伯特兰·罗素（Bertrand Russell）在 1906 年对麦考尔（MacColl）的《符号逻辑及其应用》（Symbolic Logic and its Applications）一书的评论中揭示了罗素对命题的可变性的模态思想的不理解，因此错误地将混淆句子和命题的观点归因于麦考尔，因为罗素只将可变性赋予那些意义（因此真值）不固定的句子。同样，罗素认为确定性和不可能性是命题函数的物质属性（对一切或对无物），而不是命题的模态属性。可以说，麦考尔的工作来得太早，没有引起人们的注意。事实上，雷施尔（Rescher）报道了罗素对理解麦考尔符号体系的困难，并且更重要的是，他认为罗素对逻辑的看法对模态逻辑的发展产生了负面影响（见雷施尔 1974 年的《伯特兰·罗素与模态逻辑》：85-96）。尽管麦考尔的早期工作，刘易斯（Lewis）可以被视为语法传统的奠基人，不仅因为他对后来的逻辑学家影响更大，而且尤其因为他发展了包含新的内涵连接词的各种系统。

### 1.1 刘易斯系统

在《严格蕴涵的微积分》（1914 年）中，刘易斯提出了两种可能的替代方案，以取代怀特海德和罗素的《数学原理》的外延系统。引入严格蕴涵系统的一种方式是从系统中排除那些只对物质蕴涵而非严格蕴涵成立的定理，例如上述的（1）和（2），从而获得一个对物质蕴涵和严格蕴涵都有效的系统，但在任何情况下都不完备。第二种更有成果的替代方案是引入一个新的严格蕴涵系统，仍然以怀特海德和罗素的物质蕴涵系统为模型，将外延命题逻辑（全部或部分）作为一个适当的部分，但至少对严格蕴涵有完备性的追求。这第二个选项在《符号逻辑概论》（1918 年）中进一步发展。刘易斯引入了一个旨在捕捉普通严格蕴涵意义的第一个系统，其指导思想是：

> 除非“蕴涵”有某种“适当”的意义，否则就没有有效性的标准，甚至没有可能争论是否存在这样的标准。然而，“蕴涵”的“适当”意义是一个特别困难的问题。（1918 年：325）

1918 年的系统以不可能性（¬⬦）为原始概念，用其定义了严格蕴涵运算符，并仍然使用了一个内涵析取运算符。然而，波斯特证明了这个系统导致了必然性崩溃为真——或者说不可能性崩溃为假——因为从它的一个定理（（p⇒q)⇔(¬⬦q⇒¬⬦p)）可以证明（¬p⇔¬⬦p）。在 1920 年的《严格蕴涵——一种修正》中，刘易斯通过用较弱的公理（（p⇒q)⇒(¬⬦q⇒¬⬦p)）替换旧公理来修复了该系统。最后，在刘易斯和兰福德的《符号逻辑》（1932 年：492–502）第二附录中，“严格蕴涵系统的结构”给出了（削弱的）1918 年系统的新公理基础。

在 1932 年的附录 C.I. Lewis 引入了五个不同的系统。模态原始符号现在是可能性运算符⬦，严格蕴涵(p⇒q)被定义为¬⬦(p∧¬q)，而∨是普通的外延析取。必然性运算符□也可以被引入和定义，尽管 Lewis 没有这样做，通常的方式是¬⬦¬。

其中 p、q 和 r 是命题变量，系统 S1 具有以下公理：

 S1 的公理

(B1)(B2)(B3)(B4)(B5)(B6)(B7)(p∧q)⇒(q∧p)(p∧q)⇒pp⇒(p∧p)((p∧q)∧r)⇒(p∧(q∧r))p⇒¬¬p((p⇒q)∧(q⇒r))⇒(p⇒r)(p∧(p⇒q))⇒q

Axiom B5 was proved redundant by McKinsey (1934), and can thereby be ignored.

规则为 (1932: 125–6):

 S1 的规则

* 统一替换*
  如果在一个有效的公式中，将一个命题变量统一替换为另一个公式，则该公式仍然有效。

*严格等价物的替代*
两个严格等价的公式可以相互替代。

* 附加*
  如果已经推断出Φ和Ψ，那么可以推断出Φ∧Ψ。

* 严格推理*
  如果已经推断出Φ和Φ⇒Ψ，那么可以推断出Ψ。

从系统 S1 获得系统 S2 是通过添加 Lewis 所称的“一致性假设”，因为很明显对于⬦被解释为一致性是成立的：

(B8)⬦(p∧q)⇒⬦p

从系统 S1 获得系统 S3 是通过添加公理：

(A8)((p⇒q)⇒(¬⬦q⇒¬⬦p))

S3 系统对应于《调查》1918 年的系统，刘易斯最初认为这是严格蕴涵的正确系统。到了 1932 年，刘易斯更喜欢 S2 系统。原因如《刘易斯 1932 年论文》所述：496，是因为 Wajsberg 和 Parry 在 S3 系统中——在其 1918 年的公理化中——推导出以下定理：

(p⇒q)⇒((q⇒r)⇒(p⇒r)),

根据刘易斯的观点，这不应被视为演绎的有效原则。1932 年，刘易斯不确定这个有争议的定理是否可以在 S2 中推导出来。如果可以的话，他将认定 S1 是严格蕴涵的适当系统。然而，帕里（1934 年）后来证明 A8 和

(p⇒q)⇒((q⇒r)⇒(p⇒r))

在 S2 中都无法推导出来。

所有这些系统都可以添加一个进一步的存在公理：

(B9)(∃p,q)(¬(p⇒q)∧¬(p⇒¬q))

添加 B9 使得将⇒解释为物质蕴涵变得不可能，因为在物质蕴涵的情况下，可以证明对于任意命题 p 和 q，((p→q)∨(p→¬q)) (1932: 179)。从 B9 出发，Lewis 推断出至少存在四个逻辑上不同的命题：一个真且必然，一个真但非必然，一个假且不可能，一个假但非不可能(1932: 184–9)。

在贝克尔（1930 年）的基础上，刘易斯考虑了三个额外的公理：

 三个额外的公理

（C10）（C11）（C12）¬⬦¬p⇒¬⬦¬¬⬦¬p⬦p⇒¬⬦¬⬦pp⇒¬⬦¬⬦p

系统 S4 在 S1 的基础上添加公理 C10。系统 S5 在 S1 的基础上添加公理 C11，或者是 C10 和 C12。刘易斯通过指出逻辑学的研究最好集中在比 S5 更弱的系统上，而不是仅仅关注 S5，来总结附录 II。

严格蕴涵的悖论与物质蕴涵的悖论类似。鉴于严格蕴涵（p⇒q）被定义为¬⬦（p∧¬q），可以得出一个不可能的命题蕴涵任何事情，而一个必要的命题被任何事情蕴涵。刘易斯认为这是应该的。由于不可能性被认为是逻辑上的不可能性，即最终是一个矛盾，刘易斯认为从一个不可能的命题（如 p∧¬p）可以推出 p 和¬p。从 p 我们可以推导出（p∨q），对于任何命题 q。从¬p 和（p∨q），我们可以推导出 q（1932 年：250）。这个论点是有争议的，因为人们可以争论原则（p⇒（p∨q））不应该是一个旨在表达普通蕴涵的系统的定理（参见，例如，尼尔森 1930 年：447）。无论这个论点的优点如何，那些不同意刘易斯的人开始发展一种基于蕴涵需要超过刘易斯的严格蕴涵的逻辑。例如，参见尼尔森 1930 年，斯特劳森 1948 年和贝内特 1954 年。另请参阅关于相关逻辑的 SEP 条目。

注意，正是刘易斯对一个适合表达严格蕴涵的系统的寻求使得奎因拒绝了模态系统，因为这些系统被制定来表达在对象层面上的证明论或语义概念，如一致性、蕴涵、可导出性和定理性（实际上，每当 p→q 是一个命题定理时，系统 S1，以及所有其他更强的刘易斯系统，都可以证明 p⇒q（帕里 1939 年：143））。

### 1.2 其他系统和对 Lewis 系统的替代公理化

在 1933 年的《直觉主义命题演算的一种解释》中，哥德尔首次提出了对 Lewis 系统 S4 的替代公理化，将系统的命题基础与模态公理和规则分离。哥德尔在命题演算中添加了以下规则和公理。

（必要性）（公理 K）（公理 T）（公理 4）如果⊢α，则⊢□α，⊢□(p→q)→(□p→□q)，⊢□p→p，以及⊢□p→□□p。

首先，哥德尔使用可证明性运算符 B 来翻译 Heyting 的原始直觉连词，然后观察到，如果我们用必然性运算符替换 B，我们就得到了系统 S4。哥德尔还声称，在 S4 中，除非□p 或□q 可证明，否则公式□p∨□q 是不可证明的，类似于直觉性的析取。哥德尔的这一主张在麦金西和塔斯基（1948 年）的代数证明中得到了证实。哥德尔的简短笔记对于开始将模态系统公理化的有益实践以及将命题演算与严格模态部分分离起到了重要作用，同时也连接了直觉主义和模态逻辑。

费斯（1937 年）是第一个通过从哥德尔的系统 S4 中减去公理 4 来提出系统 T 的人（另见费斯 1965 年：123-124）。在《模态逻辑论文》（1951 年）中，冯·赖特讨论了真理、认识和义务的模态性，并引入了系统 M，而索博钦斯基（1953 年）将其证明与费斯的系统 T 等价。冯·赖特（1951 年：84-90）证明了系统 M 包含了刘易斯的 S2，而 S2 包含了 S1——如果系统 S 包含系统 S'，则 S'中的所有公式也可以在 S 中证明。系统 S3 是 S2 的扩展，但不包含在 M 中。M 也不包含在 S3 中。冯·赖特认为 S3 的独立兴趣不大，并且认为没有理由选择 S3 而不是更强的 S4。一般来说，刘易斯系统按强度编号，S1 最弱，S5 最强，较弱的系统包含在较强的系统中。

莱蒙（1957 年）也效仿哥德尔，在命题演算基础上对模态系统进行了公理化，并提出了刘易斯系统的另一种公理化方法。其中，PC 是命题演算基础，PC 可以通过以下三条规则来描述（1957 年：177）：

对命题演算 PC 的描述

PCa

如果α是一个永真式，则⊢α

PCb

命题变量的替换

PCc

物质分离/模态推理：如果α和α→β是重言式，那么β也是重言式

在莱蒙系统中的进一步规则是：

(a)

如果⊢α，则⊢□α（必然性）

(a′)

如果α是一个重言式或公理，则⊢□α

(b)

如果⊢□(α→β)，那么⊢□(□α→□β)

(b′)

严格等价物的可替代性。

在莱蒙系统中的进一步公理是：

(1)(1′)(2)(3)□(p→q)→□(□p→□q)□(p→q)→(□p→□q)(K 公理)□p→p(T 公理)(□(p→q)∧□(q→r))→□(p→r)

使用上述规则和公理，Lemmon 定义了四个系统。系统 P1，被证明与 Lewis 系统 S1 等价，采用命题基础（PC），规则（a'）——必然性的重言式和公理——和（b'），以及公理（2）和（3）。系统 P2，等价于 S2，采用（PC），规则（a'）和（b），以及公理（2）和（1'）。系统 P3，等价于 S3，采用（PC），规则（a'），以及公理（2）和（1）。系统 P4，等价于 S4，采用（PC），规则（a），以及公理（2）和（1）。在 Lemmon 的公理化中，很容易看出 S3 和 von Wright 的系统 M（Feys 的 T）不相互包含，因为 M 具有更强的必然性规则和 S3 具有更强的公理（1）代替（1'）= K。总的来说，Lemmon 的公理化使得不同的 Lewis 系统之间的逻辑区别更加明确。

Lemmon 还考虑了一些比 S1 更弱的系统。特别有趣的是系统 S0.5，它通过用较弱的规则（a"）取代规则（a'）来削弱 S1：

 （a"）

如果α是一个永真式，那么⊢□α。

Lemmon 将系统 S0.5 解释为命题演算的形式化元逻辑，其中□α被解释为“α是一个永真式”。

我们将包括 PC、公理 K 和必要性规则的系统称为“正常”系统。系统 K 是最小的正常系统。系统 T 在系统 K 上添加了公理 T。布劳尔系统 B 添加了公理 B。

⊢p⇒□⬦p（等同于贝克尔的 C12）

对于 T 系统，S4 添加公理 4（等同于贝克尔的 C10）。S5 添加公理 B 和 4，或者选择公理 E。

⊢⬦p⇒□⬦p（等同于贝克尔的 C11）

对于系统 T，根据不包含必要性规则，Lewis 的系统 S1、S2 和 S3 都是非正常的。关于这些（和其他）系统之间的关系，以及公理所施加的框架条件，请参阅模态逻辑的 SEP 条目。

文献中讨论的 Lewis 系统的许多扩展中，这里只提到了其中的一部分。Alban（1943）通过向 S2 添加公理⊢⬦⬦p 引入了系统 S6。Halldén（1950）将添加公理⊢⬦⬦p 到 S3 的系统称为 S7，将添加公理⊢¬⬦¬⬦⬦p 到 S3 的系统称为 S8。虽然添加普遍可能性公理⊢⬦p 与所有的 Lewis 系统都不一致，因为它们都包含形式为⊢□p 的定理，但系统 S6、S7 和 S8 是一致的。相反，将这些公理之一添加到 S4，因此也添加到 S5，将导致一个不一致的系统，因为在 S4 中⊢⬦⬦p⇒⬦p。Halldén 还证明了一个公式是 S3 的定理当且仅当它同时是 S4 和 S7 的定理（1950: 231–232），因此 S4 和 S7 是 S3 的两个替代扩展。

## 2. 矩阵方法和一些代数结果

在《关于命题逻辑的多值系统的哲学注释》（1930 年；但是Łukasiewicz 1920 年是这篇论文主要思想的一个初步的波兰版本）中，Łukasiewicz 说：

> 当我在 1920 年意识到传统的关于模态命题的定理的不兼容性时，我致力于通过矩阵方法建立普通的“二值”命题演算系统。当时我满意地发现，只要命题变量只能取两个值，“0”或“假”，以及“1”或“真”，就可以证明普通命题演算的所有命题。 （1970 年：164）

这段文字很好地说明了Łukasiewicz 在二十世纪二十年代对逻辑的思考方式。首先，他以代数术语而非句法术语思考，关注的不是构建新系统，而是相对于值集合对系统进行评估。其次，他引入了三值矩阵，为命题的概念（尤其是关于未来的可能性）提供了既非真又非假的逻辑空间，并引入了新的不确定值½。具有讽刺意味的是，后来使用他原始的矩阵方法的研究将表明，将模态逻辑视为三值系统的希望是无法实现的。另请参阅 SEP 关于多值逻辑的条目。

一个命题逻辑 L 的矩阵由以下部分组成：(i) 一个元素集合 K，即真值；(ii) 一个非空子集 D⊆K，即指定的真值；(iii) 对集合 K 的操作，即从 n 个真值的元组到真值的函数，对应于 L 的联结词。如果在将元素 K 分配给 A 的变量的情况下，A 的值在σ下是 D 的成员，即指定值，则矩阵满足公式 A。如果矩阵在每个分配σ下都满足公式，则矩阵满足该公式。模态逻辑 M 的矩阵通过添加与联结词⬦对应的一元函数来扩展命题逻辑的矩阵。

矩阵通常用于展示系统公理的独立性以及它们的一致性。通过一个矩阵，可以确定两个公式 A 和 B 的一致性，该矩阵在分配σ下将指定值分配给这两个公式。通过一个矩阵，可以确定公式 B 相对于公式 A 的独立性，该矩阵(i)保持系统规则的有效性，并且(ii)在解释σ下将指定值分配给 A 但不分配给 B。Parry（1939）使用矩阵方法证明了 Lewis 的 S3 和 S4 系统的模态数量是有限的。模态是一个只包含运算符¬和⬦的一元模态函数。模态的程度由包含的⬦运算符数量确定。适当的模态的程度大于零。适当的模态可以有四种不同的形式：

(1)(2)(3)(4)¬…⬦p⬦…⬦p¬…⬦¬p⬦…¬p.

不适当的模态是 p 和¬p（1939 年：144）。帕里证明了 S3 具有 42 个不同的模态，而 S4 具有 14 个不同的模态。已经知道系统 S5 只有 6 个不同的模态，因为它将所有模态都归约为零或一阶模态。帕里通过向 S4 添加以下公理引入了系统 S4.5：

 ⊢¬⬦¬⬦¬⬦p⇒¬⬦p。

该系统将 S4 的模态数量从 14 个减少到 12 个（或 10 个适当的模态）。将相同的公理添加到刘易斯的系统 S3 中会得到一个具有 26 个不同模态的系统。此外，如果我们添加

⊢¬⬦¬⬦⬦p⇒¬⬦¬⬦p

对于 S3，我们得到了一个具有 26 种模态的不同系统，这些模态也处于 S3 和 S4 之间。因此，模态的数量并不能唯一确定一个系统。系统 S1 和 S2，以及 T 和 B，都有无限多种模态（Burgess 2009 年，第 3 章关于模态逻辑的讨论了额外的系统 S4.2 和 S4.3，并很好地解释了不同系统中模态的减少）。

对于系统 L 来说，一个特征矩阵是一个满足 L 的所有定理且仅满足 L 的矩阵。如果一个矩阵的真值集合 K 是有限的，则该矩阵是有限的。有限的特征矩阵可以提供一个决策过程，其中一个系统是可判定的，如果系统的每个非定理公式都被某个有限矩阵证伪（这就是有限模型性质）。然而，Dugundji（1940 年）证明了 S1-S5 都没有有限的特征矩阵。因此，这些系统都不能被视为有限 n 值逻辑。后来，Scroggs（1951 年）证明了保留材料蕴涵的分离并且在替换下封闭的 S5 的每个适当扩展都有一个有限的特征矩阵。

尽管它们缺乏有限的特征矩阵，但麦肯锡（1941 年）表明系统 S2 和 S4 是可判定的。为了证明这些结果，麦肯锡引入了模态矩阵（K，D，-， *，×），其中-，* 和×分别对应否定，可能性和连词。如果矩阵满足以下条件，则称其为正常矩阵：

1. 如果 x∈D 且(x⇒y)∈D 且 y∈K，则 y∈D，
2. 如果 x∈D 且 y∈D，则 x×y∈D，
3. 如果 x∈K 且 y∈K 且 x⇔y∈D，则 x=y。

这些条件对应于刘易斯的严格推理规则、严格等价物的结合和替换。麦金西的证明结构如下。该证明分为三个步骤。首先，麦金西利用塔斯基向他解释的林登鲍姆的未发表方法，该方法适用于具有命题变量替换规则的系统，证明存在一个不满足条件(iii)且因此非正常的 S2 特征矩阵 M=(K,D,−,∗,×)。M 是一个平凡的矩阵，其域是系统的公式集合，其指定元素是系统的定理，其操作是连接词本身。平凡矩阵 M 不满足(iii)，因为对于一些不同的公式 A 和 B，A⇔B 是一个 S2 定理。其次，麦金西展示了如何从 M 构造一个正常但仍然无限的 S2 特征矩阵 M1=(K1,D1,−1,∗1,×1)，其元素是 S2 可证等价公式的等价类，即 A 和 B 满足 A⇔B 是 S2 的一个定理，其操作相应地进行了修订。例如，如果 E(A)是可证等价于 A 的公式集合且 E(A)∈K1，则−1E(A)=E(−A)=E(¬A)。M1 恰好满足 M 满足的公式，而不违反条件(iii)，因此它是 S2 的一个特征正常矩阵（M1 是 S2 的林登鲍姆代数）。最后，证明了对于每个不是 S2 定理的公式 A，存在一个有限且正常的矩阵（M1 的子代数）使其为假。对于 S4 也给出了类似的证明。

矩阵是一种特殊类型的代数。代数是没有指定元素集合 D 的矩阵。布尔代数对应于命题逻辑的矩阵。根据 Bull 和 Segerberg（1984: 10）的说法，从矩阵到代数的概括可能会鼓励独立于它们与逻辑和模态系统的联系的结构的研究。事实上，指定元素集合 D 有助于定义一个相对于该系统的有效性，可以评估该系统的定理。没有这样的集合，与逻辑的最明显的联系就被切断了。对于学科的数学发展来说，第二个概括是对代数类的概括，而不仅仅是对个别代数的概括，这也是至关重要的。塔斯基是这一发展中的重要人物。

Jónsson 和 Tarski（1951 年和 1952 年）引入了带运算符的布尔代数的一般思想，即通过添加与模态连接词对应的运算符来扩展布尔代数。他们证明了带运算符的布尔代数的一般表示定理，该定理扩展了 Stone 关于布尔代数的结果（每个布尔代数都可以表示为一个集合代数）。Jónsson 和 Tarski 的这项工作是从塔斯基对关系代数的纯数学研究中发展而来的，没有提及模态逻辑甚至一般逻辑。Jónsson 和 Tarski 的定理是 Kripke 后来语义完备性结果的（更一般的）代数类比，然而这一点在一段时间内并没有意识到。不仅塔斯基不知道这个联系，而且看起来 Kripke 和 Lemmon 在五六十年代进行模态工作时也没有阅读 Jónsson 和 Tarski 的论文，Kripke 声称自己独立地得出了相同的结果。

Lemmon（1966a 和 1966b）改编了 McKinsey 的代数方法，证明了包括 T 在内的各种模态系统的可决定性结果和表示定理（尽管显然对 Jónsson 和 Tarski 的工作一无所知）。特别是，他通过引入一种构造 Kripke 模型结构的子集有限代数的新技术（在本条目的下一节中讨论）扩展了 McKinsey 的方法。Lemmon（1966b：191）将他的第二篇 1966 年论文的主要结果归功于 Dana Scott。这是一个一般的表示定理，证明了模态系统的代数可以表示为基于相应 Kripke 结构中集合 K 的幂集的代数。因此，代数完备性转化为 Kripke 模型论的完备性。因此，Lemmon 非常清楚地阐明了 Kripke 模型（其元素是世界）与相应的代数（其元素是可以被视为命题的世界集合）之间的联系，从而显示了代数和模型论结果之间的深刻联系。Kripke（1963a）已经明确指出了这种联系。在与 Dana Scott 合作并由 Segerberg 编辑的《Lemmon 笔记》（1977）中，将 1966 年的技术转化为纯粹的模型论方法，以尽可能一般的形式为许多模态逻辑系统提供完备性和可决定性结果（1977：29）。

另请参阅关于逻辑代数传统的 SEP 条目。有关模态逻辑代数的基本介绍，请参阅 Hughes 和 Cresswell 1968 年的第 17 章“布尔代数和模态逻辑”。有关更全面的处理，请参阅 Blackburn，de Rijke 和 Venema 2001 年的第 5 章。另请参阅 Goldblatt 2003 年。

## 3. 模型论传统

### 3.1 卡尔纳普

在 1940 年代初，对逻辑真理概念的语义性质的认识使鲁道夫·卡尔纳普以莱布尼茨的可能世界为基础对这一概念进行了非正式的阐释。与此同时，他认识到从 1918 年开始的许多模态逻辑的句法进展仍未伴随适当的语义考虑。一个值得注意的例外是哥德尔将必然性解释为可证明性，并由此偏好 S4。卡尔纳普则将必然性视为逻辑真理或分析性。对逻辑真命题性质的考虑使他认为 S5 是形式化这一“非正式”概念的正确系统。卡尔纳普在 40 年代初的工作主要集中在两个方面：（1）定义一个形式的语义概念 L-真理，以表示逻辑真理、必然性和分析性的非正式语义概念，即仅仅因为意义而真（最初，他没有区分这些概念，但明显将分析性视为主导思想）；（2）提供一个量化的 S5 的形式语义，以 L-真理的形式概念为基础，以获得完备性和一致性结果，即证明所有量化的 S5 的定理都是 L-真理，并且所有 L-真理（可用该系统的语言表达）都是该系统的定理。

鲁思·巴肯也想到了量化模态系统。在《基于严格蕴涵的一阶函数演算》（1946a）中，她将量化添加到了刘易斯的命题系统 S2 中；卡尔纳普（1946）将其添加到了 S5 中。尽管将考虑一些关于量化模态逻辑的特定语义问题，但本条目并不侧重于量化模态逻辑的发展，而是关注模态逻辑、命题或量化的模型论形式语义的出现。有关量化模态逻辑的更详尽论述，请参阅 SEP 关于模态逻辑的条目。

在《模态与量化》（1946 年）和《意义与必然性》（1947 年）中，卡尔纳普将必然性的客体语言运算符解释为在客体层面上表达逻辑真理的语义概念：

> [T]我们在构建模态逻辑系统时的指导思想是：命题 p 在逻辑上是必然的，当且仅当表达 p 的句子在逻辑上是真的。也就是说，命题的逻辑必然性概念与句子的逻辑真理或分析性的语义概念相对应。（1946 年：34）

卡尔纳普引入状态描述的装置来定义 L-真理的形式语义概念。然后，这个形式概念将被用来为 S5 提供形式语义学。

语言 L 的状态描述是 L 的一类句子，对于 L 的每个原子句 p，该类句子中要么包含 p，要么包含¬p，但不能同时包含两者。如果一个原子句在状态描述 R 中成立，那么它属于 R。如果句子¬A（其中 A 不一定是原子句）在 R 中成立，那么 A 在 R 中不成立；如果句子(A∧B)在 R 中成立，那么 A 和 B 都在 R 中成立，对于其他连接词也是如此；如果句子(∀x)Fx 在 R 中成立，那么 Fx 的所有替代实例在 R 中都成立。句子的范围是它成立的状态描述类。Carnap 关于有效性或 L-真实性的概念是一种最大概念，即 Carnap 定义一个句子在所有状态描述中成立时，它是有效的或 L-真实的。在后来的工作中，Carnap 采用模型代替状态描述。模型是将语言的原始非逻辑常量赋值的方式。在 Carnap 的情况下，谓词常量是模型赋值的唯一原始常量，因为个体常量被赋予固定的预模型解释，而变量的值赋予是独立于模型的（1963a）。

需要注意的是，L-真实性的定义并没有使用真实性的概念，而只使用了在状态描述中成立的概念。真实性在后来被引入为在真实状态描述中成立的概念。作为分析性的充分形式表示，L-真实性必须尊重分析性背后的基本思想：仅凭意义而成立的真实性。事实上，一个系统 S 的 L-真实性是这样的，S 的语义规则足以确立它们的真实性。非正式地说，状态描述类似于 Leibniz 的可能世界或 Wittgenstein 的可能事态，而某种语言的状态描述范围被认为是该语言中可描述的替代可能性的范围。

关于模态句，卡尔纳普采用以下约定（我们用□代替卡尔纳普的逻辑必然性运算符 N）。设 S 为一个系统：

1. 如果在 S 中 A 是 L-true（即在 S 的所有状态描述中 A 成立），那么句子□A 在 S 中为真；
2. 如果在 S 中□A 为真（即所有状态描述在对模态句的评价上达成一致），那么句子□A 在 S 中为 L-true。

由此可推出：

3. 如果且仅如果 A 在 S 中是 L-真的，那么□A 在 S 中是 L-真的。

如果我们将“在 S 的状态描述中的真实性”替换为“在 S 中的真实性”，卡纳普的约定仍然成立。

Carnap 假设他的量化系统（带有恒等符号的函数演算 FC）和随之而来的带有恒等符号的模态函数演算 MFC，都有一个固定的量化域。FC 的语言包含可数多个个体常量，论域包含可数多个个体，每个常量都被赋予一个域中的个体，并且没有两个常量被赋予相同的个体。这使得像 a=a 这样的句子是 L-真的，而像 a=b 这样的句子是 L-假的（1946 年：49）。关于 MFC，巴尔坎公式及其逆命题都是 L-真的，即

⊨(∀x)□Fx↔□(∀x)Fx.

这个结果是由于固定的量化域的假设所保证的。Carnap 证明了 MFC 是完备的，也就是说，它的所有定理都是 L-真的，并提出了对于 FC 和 MFC 的完备性的问题。哥德尔证明了一阶谓词演算带有恒等符号的完备性，但所采用的有效性概念是在每个非空的量化域中都成立的真实性，包括有限的域。Carnap 相反，采用了一个唯一的可数量化域。采用一个固定的可数个体域在预模态层面上产生了一些额外的有效性，这威胁到了完备性，例如“至少有两个个体”（∃x)(∃y)(x≠y)被证明是有效的（1946 年：53）。

语言和L-真理的状态描述的定义的一个结果是，每个原子句子及其否定在某些状态描述中都是真的，但不是全部。因此，如果p是原子的，那么⬦p和⬦¬p都是L-真的。因此，刘易斯的统一替换规则失败了（如果在⬦p中用p∧¬p替换p，我们得到⬦(p∧¬p)，这是L-假的，而不是L-真的）。马金森（Makinson）（1966a）注意到了这一点，并认为必须重新恢复可替代性，并修订卡纳普（Carnap）关于有效性（作为逻辑必然性）的幼稚概念，而采用奎因（Quine）的原理性概念（“逻辑真理...可以定义为当我们用句子替换其简单句子时，我们只得到真理”奎因1970年：50），这样就不会使像⬦p这样的句子成为有效的。尽管如此，卡纳普证明了命题S5的正确性和完备性，他将其称为“MPC”（模态命题演算），这是继维斯伯格之后的。然而，该证明实际上采用了一种原理性的有效性概念。

已经证明了 Carnap 的最大有效性概念使得量化的 S5 的完备性成为不可能，即存在着 L-真值而不是 Carnap 的 MFC 定理的 L-真值。设 A 是 MFC 的非模态句子。根据约定（1），如果 A 在 MFC 中是 L-真值，则□A 在 MFC 中为真。但 A 也是 FC 的句子，因此如果在 MFC 中是 L-真值，则在 FC 中也是 L-真值，因为模态功能逻辑的状态描述（模型）与功能逻辑的状态描述相同（1946: 54）。这意味着状态描述具有三重作用，即（i）FC 的一阶模型，从而定义了一阶有效性，（ii）MFC 的世界，从而定义了 MFC 的□A 句子的真值，以及（iii）MFC 的模型，从而定义了 MFC 的有效性。不完备性论证的核心在于一阶句子 A 的非有效性可以用模态语言表示为¬□A，但所有模型都同意模态句子的估值，使得¬□A 成为有效。粗略地说，忽略 Carnap 的语义只有可数域所带来的复杂性，如果 A 是 FC 的一阶非有效句子，则 A 在某些模型或状态描述中为真，但不是所有模型或状态描述中都为真。根据 Carnap 的约定，可得¬□A 在 MFC 中为真。但是，¬□A 在 MFC 中是 L-真值，即在 MFC ⊨¬□A。鉴于非有效的一阶句子不可递归枚举，模态系统 MFC 的有效性也不可递归枚举。但是，MFC 的定理类是可递归枚举的。因此，相对于 Carnap 的最大有效性，MFC 是不完备的。Cocchiarella（1975b）将这一结果归因于 Richard Montague 和 Donald Kalish。另请参见 Lindström 2001: 209 和 Kaplan 1986: 275–276。

### 3.2 Kripke 的可能世界语义学

Carnap的语义学确实是可能世界语义学（PWS）的先驱。然而，仍然缺少一些关键要素。首先，最大有效性的概念必须被一个新的普遍概念所取代。其次，状态描述必须为可能世界留出空间，这些可能世界被理解为评估的指标或点。最后，需要引入世界之间的可及性关系。尽管克里普克（Kripke）绝不是五十年代和六十年代初唯一研究这些思想的逻辑学家，但在克里普克的PWS版本中，所有这些创新都得到了体现。康格（Kanger，1957）、蒙塔古（Montague，1960，但最初是在1955年提出的）、辛蒂卡（Hintikka，1961）和普赖尔（Prior，1957）都在思考世界之间的关系，而辛蒂卡（Hintikka，1961）和克里普克（Kripke，1959a）采用了一种新的有效性概念，要求在所有任意世界集合中都成立真值。但是，克里普克是唯一一个将世界描述为简单的评估点（在1963a中）。其他逻辑学家仍然将世界基本上看作是一阶逻辑的模型，尽管普赖尔在他发展时间逻辑方面也在朝着更抽象的时间瞬间的描述方式发展。克里普克对世界的更抽象描述在提供模型论语义学和模态逻辑代数之间的联系方面至关重要。克里普克非常清楚地看到了代数和语义学之间的这种联系，这使得他能够系统地为各种模态系统获得模型论的完备性和可决定性结果。Goldblatt（2003年：第4.8节）有力地论证了克里普克在模型结构中采用评估点的创新性。这种概括打开了未来发展模型论的大门，并使得能够为一般的内涵逻辑提供模型理论。出于这些原因，在本文中，我们更多地关注克里普克的PWS版本。 对于 PWS 初始发展的更全面的处理，包括法国逻辑学家 Bayart 在 50 年代晚期关于 S5 的工作，读者可参考 Goldblatt 2003。关于 Kanger 的语义学与标准 PWS 语义学之间的差异，请参见 Lindström 1996 和 1998。

Kripke 的 1959 年的《模态逻辑的完备性定理》包含了一个关于带有恒等性的量化版本 S5 的模型论完备性结果。在 Kripke 对量化 S5 的语义处理中，他称之为 S5=，将一个公式 A 中的自由个体变量的值分配给一个个体域 D 中的成员，将 A 的命题变量的真值 T 或 F 分配给每个命题变量，将 A 的 n 元谓词变量的有序 n 元组成员的集合分配给每个 n 元谓词变量（该系统的语言不包含非逻辑常量）。Kripke 将一个非空个体域 D 上的模型定义为一个有序对(G,K)，其中 G∈K，K 是对 S5=的公式的值分配的任意子集，并且 K 中的所有 H 在个体变量的值分配上达成一致。对于 K 中的每个 H，H 分配给公式 B 的值是通过归纳定义的。根据假设，命题变量被分配为 T 或 F。如果 B 是 P(x1,…,xn)，当且仅当分配给 x1，…，xn 的元素 n 元组属于 H 分配给 P 的 n 元组集合时，B 被分配为 T。当且仅当 H 分配给 B 的值为 F 时，H 分配给¬B 的值为 T。当且仅当 H 分配给 B 和 C 的值为 T 时，H 分配给 B∧C 的值为 T。如果 B 是 x=y，当且仅当 x 和 y 在 D 中被分配相同的值时，B 被分配为 T。如果 B 是(∀x)Fx，当且仅当对于 x 的每个值分配，Fx 被分配为 T 时，B 被分配为 T。当且仅当每个 H∈K 都将 B 分配为 T 时，□B 被分配为 T。

在 1959 年的模态理论中，最重要的是注意到有效性的定义。如果且仅如果在模型（G，K）中 D 中的公式 A 被赋予 T，那么它被称为在 D 中有效；如果且仅如果它在 D 中的每个模型中都有效，那么它在域 D 中有效；如果且仅如果它在每个非空域中都有效，那么它是普遍有效的。克里普基说：

> 在试图构建普遍逻辑有效性的定义时，似乎合理假设不仅论域可以包含任意数量的元素，并且谓词可以在实际世界中被赋予任何给定的解释，而且任何可能世界的组合都可以与真实世界相关联，与某些谓词组相关。换句话说，可以合理地假设对于 D、G 和 K，除了 D 非空的标准限制外，不需要进一步的限制。这个假设直接导致了我们对普遍有效性的定义。（1959a：3）

这种新的普遍有效性概念比卡纳普的最大有效性要更加普遍。K的元素H仍然对应于一阶模型，就像卡纳普的状态描述一样，在每个克里普克模型中，K的元素H被赋予相同的个体域D和固定的跨模型分配的个体变量。到目前为止，与卡纳普最大有效性相比，唯一显著的分歧是不同的克里普克模型可以具有不同基数的域。这本身足以重新引入系统的非模态部分的完备性。但最重要的发展，也是使得能够证明模态系统的完备性的发展，是将有效性的定义不是作为最大结构中所有世界的真实性，而是作为最大结构的所有子集中的真实性。考虑到可能世界的任意子集，使得克里普克的模型理论能够将有效性与必然性分离开来。虽然必然性是相对于一个模型的，因此是相对于一组世界的，但有效性必须在所有这些集合中成立。这允许重新引入统一替换规则。为了在一个简单的情况下直观地看到这一点，考虑一个原子句p。p的经典真值表包含两行，一行是p为真，一行是p为假。每一行都像一个可能世界，或者是K的一个元素H。如果我们只考虑这个完整的真值表，我们只考虑包含两个世界的最大模型（哪个世界是实际的没有区别）。根据公式□B的真值定义，□p在最大模型的所有世界中都为假，⬦p在其中所有世界中都为真。如果有效性是指在这个最大模型的所有世界中的真实性，就像卡纳普一样，那么⊨⬦p成立，但在S5中⊬⬦p。相反，如果我们像克里普克那样定义有效性，我们还必须考虑只包含一个世界的非最大模型，也就是取消了一些行的不完整真值表。 因此，还有两个模型需要考虑：一个只包含一个世界H=G，其中p为真，因此□p也为真；另一个只包含一个世界H=G，其中p为假，因此□p和⬦p也都为假。由于这最后一个模型 ⊭⬦p。请注意，关键的创新在于将有效性定义为在所有世界子集上的真实性，而不仅仅是在最大子集上。在模型中，有效性被定义为模型的实际世界上的真实性，而不是模型的所有世界上的真实性。尽管这揭示了克里普克没有将必然性的概念与有效性的概念联系起来，但对于这个技术结果来说是无关紧要的。

Kripke的完备性证明使用了Beth的语义表。语义表用于测试一个公式B是否是一些公式A1,...,An的语义推论。表假设公式A1,...,An为真，B为假，并根据逻辑连接词的定义构建。例如，如果一个公式¬A在表的左列（列出真公式的地方），那么A将被放在右列（列出假公式的地方）。为了处理模态公式，必须考虑一组表，因为如果□A在表的右列，就必须引入一个新的辅助表，其中A在其右列。主表和其辅助表组成一组表。如果一个公式A∧B在主表的右列，那么表的集合将分裂成两个新的表集合：一个主表的右列列出A，另一个主表的右列列出B。因此，我们必须考虑备选的表集。当且仅当所有备选表都关闭时，语义表才是关闭的。如果一个表（主表或辅助表）达到以下形式的矛盾，即（i）同一公式A出现在其两列中，或者（ii）右侧出现形如a=a的恒等公式，则表集是关闭的（这是对关闭表定义的过度简化，但对我们的目的没有害处）。再次过度简化，Kripke的完备性证明的结构包括证明用于测试一个公式B是否是公式A1,...,An的语义推论的语义表是关闭的，当且仅当（i）在S5=*A1,...,An⊢B和（ii）A1,...,An⊨B。通过展示如何从语义表构建模型，可以得到最后的结果。作为（i）和（ii）的结果，我们得到了S5=*的正确性和完备性，即：如果A1,...,An⊢B，则A1,...,An⊨B。

1959 年的论文还包含了关于一阶逻辑的模态对应的 Löwenhein-Skolem 定理的证明，根据该定理，如果一个公式在一个非空域中是可满足的，则它在一个模型(G,K)中是可满足的，因此也是有效的（在 G 中为真），其中 K 和 D 都是有限的或可数的；如果一个公式在每个有限的或可数的域中都是有效的，则它在每个域中都是有效的。

Kripke 在 1962 年的《单调模态量化理论的不可判定性》一文中，发展了一阶逻辑与一元模态逻辑之间的平行关系，证明了一阶模态逻辑的这个片段已经是不可判定的。

“模态逻辑的语义分析 I”（Kripke 1963a）这篇论文非常重要，其中讨论了正常系统。在这篇论文中，Kripke 完全发展了与 Jónsson 和 Tarski 的代数结果的类比，并证明了命题系统 T、S4、S5 和 B（Brouwersche 系统）的完备性和可判定性，这里还引入了 Brouwersche 系统。Kripke 声称通过他自己的语义方法的代数类比，推导出了“带运算符的布尔代数”的主要定理（69，脚注 2）。在这篇论文中，引入了模型论的两个重要的推广。第一个是将 K 的元素 H 理解为简单的索引，而不是值的赋值。一旦引入了这个变化，模型就必须通过一个辅助函数Φ来补充，该函数用于将命题变量相对于世界赋值。因此，在 1959 年的模型论中，模型的定义是通过将值分配给命题变量来完成的。

> 在每个原子公式上分配相同真值的两个世界是不可能的[这在处理一般的正常 MPC 时可能是方便的，但对于 S5 来说却不方便]（1963a：69）

现在我们可以有世界的重复。从 K 的元素中分离出评估函数最重要的是它为一般的模态框架打开了大门，即世界的集合加上它们之间的二元关系，并且这些框架与模态系统的对应关系。因此，论文的第二个新元素，即在 K 的元素之间引入关系 R，自然地伴随着第一个新元素的引入。再次强调，世界之间的关系的想法对 Kripke 来说并不新鲜。例如，在 Montague 1960 年，Hintikka 1961 年和 Prior 1962 年中，它已经作为一种替代关系存在，并且这个想法被归因于 Peter Geach。

在 1963a 年，Kripke“就关系 R 提出了各种问题”（1963a：70）。首先，他证明了每个可满足的公式都有一个连通模型，即基于模型结构（G，K，R）的模型，在其中对于所有 H∈K，GR∗H，其中 R∗是与 R 对应的祖先关系。因此，只需要考虑连通模型。然后，Kripke 展示了现在众所周知的结果，即公理 4 对应于关系 R 的传递性，公理 B 对应于对称性，以及添加到系统 T 的 S5 的特征公理对应于 R 是等价关系。使用表格法，证明了模态命题系统 T，S4，S5 和 B 相对于适当的模型类（T 的自反结构）的完备性。还证明了这些系统的可决定性，包括 S4 的更复杂情况。（有关框架的更详细的处理，请参阅有关模态逻辑的 SEP 条目。）

在1965年的论文《模态逻辑的语义分析II》中，克里普克将模型理论扩展到处理非正常模态系统，包括刘易斯的S2和S3。尽管这些系统被认为有些不自然，但它们的模型理论被认为是优雅的。通过对结构的适当类进行完备性和可决定性的证明，包括S2和S3的完备性以及S3的可决定性。为了实现这些结果，通过引入不符合标准Leibnizian解释□为每个可访问世界中的真实性的非正常世界，并使得形式为□B的每个公式为假的方式，扩展了模型理论。这导致了对□解释的相应修订，并引入了模型结构(G,K,R,N)中的新元素N⊆K。N是符合□的标准解释的正常世界的子集。非正常世界的存在是为了防止像□□A这样的公式在□A有效时也有效，基本上允许A在从实际世界可访问的每个世界中为真，但□A在实际世界中成立而□□A不成立。这是必需的，因为所考虑的系统没有完全的必要性规则。非正常系统的另一个有趣方面是，在与它们相关的模型理论结果中，实际世界G起着重要作用，特别是在S2和S3模型结构中，实际世界必须是正常的。相反，正常系统中的完全必要性规则消除了非正常世界的需要，并使得G的选择在模型理论上无关紧要。

尽管 Kripke 模型理论取得了巨大的成功，但值得强调的是，并非所有的模态逻辑都是完备的。关于不完备性结果，请参见 Makinson 1969，对于比 S4 弱的系统；以及 Fine 1974，S. Thomason 1974，Goldblatt 1975 和 van Benthem 1978，对于介于 S4 和 S5 之间的系统。一些模态公式对于无法用一阶语言表达的框架施加了条件，因此即使是命题模态逻辑本质上也是二阶的。就框架有效性与二阶逻辑之间的对应关系以及区分可用一阶表达和本质上是二阶的模态句子的模型论标准，请参见 Blackburn 和 van Benthem 的《模态逻辑：语义视角》（2007a）。

在 1963b 年的《关于模态逻辑的语义考虑》中，Kripke 引入了量化模态系统模型的新概括。在 1959 年，一个模型在一个域 D 中被定义。因此，一个模型中的所有世界具有相同的基数。在 1963b 年，模型不是在一个域中给出的，因此同一个模型中的世界可以通过将域分配给 K 的元素 H 的函数Ψ而被赋予不同的域。鉴于世界之间域的可变性，Kripke 现在可以构造反例来证明 Barcan 公式的错误。

(∀x)□Fx→□(∀x)Fx

 以及它的逆

□(∀x)Fx→(∀x)□Fx.

在具有不断增长的域的结构中，巴肯公式可以被证伪。例如，一个具有两个世界 G 和另一个可能世界 H 的模型，G 的域是{a}，在 G 中，Fa 为真。H 的域是集合{a,b}，在 H 中，Fa 为真，但 Fb 不为真。在这个模型中，(∀x)□Fx 为真，但□(∀x)Fx 在 G 中不为真。要证伪巴肯公式的逆，我们需要具有递减域的模型。例如，一个具有两个世界 G 和 H 的模型，G 的域是{a,b}，H 的域是{a}，在 G 中，Fa 和 Fb 为真，在 H 中，Fa 为真，但 Fb 为假。这个模型要求我们在个体 b 在世界 H 中不存在（不在 H 的域中）时为公式 Fb 分配一个真值。克里普克指出，从模型理论的角度来看，这只是一个技术选择。（克里普克的系统没有个体常量，所以我们的解释为了简洁起见进行了简化；例如，要准确，我们不应该说 Fb 在 H 中为真，而应该说在将 b 分配给 x 的情况下，Fx 为真。）

Kripke 在量化 T 中重建了逆 Barcan 公式的证明，并且表明只有通过允许必要性的自由变量句子才能进行证明。但是，如果将自由变量视为普遍绑定，这一步是不合法的。直接必要一个开放式公式，而不是先闭合它，等于假设了要证明的内容。Kripke 的评论不太关注必要性规则，而是（继 Quine 之后）关注一阶逻辑开放式公式的定理性。Prior 1956 年的另一种形式中包含了 Barcan 公式的证明。

⬦(∃x)Fx→(∃x)⬦Fx.

Kripke 没有讨论 Prior 证明的细节。Prior 对于 Barcan 公式的证明采用了Łukasiewicz 的存在量词引入规则。这些规则中的第二条规定，如果⊢A→B，则⊢A→(∃x)B。Prior 将该规则应用于

⊢⬦Fx→⬦Fx

 并推导出

⊢⬦Fx→(∃x)⬦Fx

他随后将其必要性归因于

 ⊢□(⬦Fx→(∃x)⬦Fx)。

如前所述，克里普基反对开放公式的必要性。实际上，如果将开放公式理解为普遍封闭的话，⬦Fx→(∃x)⬦Fx 将被解读为(∀x)(⬦Fx→(∃x)⬦Fx)，而普赖尔的证明将无法进行下去。另一方面，开放公式⬦Fx→(∃x)⬦Fx 在某种程度上已经是“有问题的”，因为它在一个具有两个世界 G 和 H 的模型中不成立，其中 G 的域是{a}，H 的域是{a,b}，并且在 G 和 H 中都为假，但在 H 中 Fb 为真。在这个模型中，⬦Fx 为真，但(∃x)⬦Fx 在 G 中为假。在这个反例模型中，⬦Fx 在 G 中通过不在 G 的域中的个体 b 而成为真实。

一般而言，存在泛化，例如Łukasiewicz 的规则形式，即如果⊢A→B，则⊢A→(∃x)B，如果我们允许 Fx 在一个不存在的个体的世界中成为真实，那么它就不能保持有效性。在讨论 Barcan 公式的逆命题时，Kripke 指责了开放公式的必要性，尽管他暗示问题不在于必要性规则，而是在于所应用的开放公式的定理性，以及随之而来的存在泛化和普遍实例化规则的有效性。Kripke 对这个问题的讨论是有限的，也因为他的模态系统不使用个体常量，这将恢复在不使用带有自由变量的定理的情况下证明 Barcan 公式及其逆命题的可能性。

对 Barcan 公式及其逆命题的讨论伴随着量化模态逻辑的发展，因为这些公式既与如何将经典量化理论与模态逻辑相结合的技术问题，又与量化模态系统的有效性定义以及域的可变性和量词的解释等哲学问题相关。从证明的角度来看，最直接的经典量化理论和模态逻辑的组合使得 Barcan 公式及其逆命题成为定理。从模型论的角度来看，模型内域的可变性是一个受欢迎的概括。我们在这里不讨论逻辑学家们希望建立对于可变域具有声音的系统的技术解决方案，即像 Kripke 的系统一样，不允许证明 Barcan 公式及其逆命题（Deutsch 1994 和 Linsky 和 Zalta 1994 包含了各种技术选项的有用概述；另请参阅 SEP 关于可能主义-实在论辩论的条目）。

<!--md-padding-ignore-begin-->
## Bibliography

Please note that the distinction in the bibliography between introductory texts, primary, and secondary literature is partially artificial.

### Introductory Texts

* Blackburn, Patrick, Maarten de Rijke, and Yde Venema, 2001, *Modal Logic*, Cambridge: Cambridge University Press. doi:10.1017/CBO9781107050884
* Chellas, Brian F., 1980, *Modal Logic: an Introduction*, Cambridge: Cambridge University Press.
* Fitting, M. and Richard L. Mendelsohn, 1998, *First-Order Modal Logic*, Dordrecht: Kluwer Academic Publishers.
* Garson, James W., 2013, *Modal Logic for Philosophers*, Cambridge: Cambridge University Press.
* Hughes, G.E. and M.J. Cresswell, 1968, *An Introduction to Modal Logic*, London: Methuen.
* –––, 1984, *A Companion to Modal Logic*, London: Methuen.
* –––, 1996, *A New Introduction to Modal Logic*, London: Routledge.

### Primary Literature

* Alban, M.J., 1943, “Independence of the Primitive Symbols of Lewis’s Calculi of Propositions”, *Journal of Symbolic Logic*, 8(1): 25–26. doi:10.2307/2267978
* Anderson, Alan Ross, 1957, “Independent Axiom Schemata for Von Wright’s M”, *Journal of Symbolic Logic*, 22(3): 241–244. doi:10.2307/2963591
* Barcan (Marcus), Ruth C., 1946a, “A Functional Calculus of First Order Based on Strict Implication”, *Journal of Symbolic Logic*, 11(1): 1–16. doi:10.2307/2269159
* –––, 1946b, “The Deduction Theorem in a Functional Calculus of First Order Based on Strict Implication”, *Journal of Symbolic Logic*, 11(4): 115–118. doi:10.2307/2268309
* –––, 1947, “The Identity of Individuals in a Strict Functional Calculus of Second Order”, *Journal of Symbolic Logic*, 12(1): 12–15. doi:10.2307/2267171
* Bayart, Arnould, 1958, “Correction de la Logique Modal du Premier et du Second Ordre S5”, *Logique et Analyse*, 1: 28–45.
* –––, 1959, “Quasi-Adéquation de la Logique Modal du Second Ordre S5 et Adéquation de la Logique Modal du Premier Ordre S5”, *Logique et Analyse*, 2: 99–121.
* Becker, Oskar, 1930, “Zur Logik der Modalitäten”, *Jahrbuch für Philosophie und Phänomenologische Forschung*, 11: 497–548.
* Bennett, Jonathan, 1954, “Meaning and Implication”, *Mind*, 63(252): 451–463.
* Bernays, Paul, 1926, “Axiomatische Untersuchung des Aussagenkalküls der *Principia Mathematica*”, *Mathematische Zeitschrift*, 25: 305–320.
* –––, 1948, “Review of Rudolf Carnap’s ‘Modalities and Quantification’ (1946)”, *Journal of Symbolic Logic*, 13(4): 218–219. doi:10.2307/2267149
* –––, 1950, “Review of Rudolf Carnap’s *Meaning and Necessity*”, *Journal of Symbolic Logic*, 14(4): 237–241. doi:10.2307/2269233
* Bull, R.A., 1964, “A Note on the Modal Calculi S4.2 and S4.3”, *Zeitschrift für Mathematische Logik und Grundlagen der Mathematik*, 10(4): 53–55. doi:10.1002/malq.19640100403
* –––, 1965, “An Algebraic Study of Diodorean Modal Systems”, *Journal of Symbolic Logic*, 30(1): 58–64. doi:10.2307/2270582
* –––, 1966, “Than All Normal Extensions of S4.3 Have the Finite Model Property”, *Zeitschrift für Mathematische Logik und Grundlagen der Mathematik*, 12: 341–344. doi:10.1002/malq.19660120129
* –––, 1968, “An Algebraic Study of Tense Logics with Linear Time”, *Journal of Symbolic Logic*, 33(1): 27–38. doi:10.2307/2270049
* Carnap, Rudolf, 1946, “Modalities and Quantification”, *Journal of Symbolic Logic*, 11(2): 33–64. doi:10.2307/2268610
* –––, 1947, *Meaning and Necessity*, Chicago: University of Chicago Press, 2nd edition with supplements, 1956.
* –––, 1963a, “My Conception of the Logic of Modalities”, in Schlipp 1963: 889–900.
* –––, 1963b, “My Conception of Semantics”, in Schlipp 1963: 900–905.
* Dugundji, James, 1940, “Note on a Property of Matrices for Lewis and Langford’s Calculi of Propositions”, *Journal of Symbolic Logic*, 5(4): 150–151. doi:10.2307/2268175
* Dummett, M.A.E. and E.J. Lemmon, 1959, “Modal Logics between S4 and S5”, *Zeitschrift für Mathematische Logik und Grundlagen der Mathematik*, 5(5): 250–264. doi:10.1002/malq.19590051405
* Feys, Robert, 1937, “Les Logiques Nouvelles des Modalités”, *Revue Néoscolastique de Philosophie*, 40(56): 517–553.
* –––, 1963, “Carnap on Modalities”, in Schlipp 1963: 283–297.
* –––, 1965, *Modal Logics*, in *Collection de Logique Mathématique* (Volume 4), J. Dopp (ed.), Louvain: E. Nauwelaerts.
* Fine, Kit, 1974, “An Incomplete Logic Containing S4”, *Theoria*, 40(1): 23–29. doi:10.1111/j.1755-2567.1974.tb00076.x
* Gödel, Kurt, 1933, “Eine Interpretation des Intuitionistischen Aussagenkalküls”, *Ergebnisse eines Mathematischen Kolloquiums*, 4: pp. 39–40. English translation “An Interpretation of the Intuitionistic Propositional Calculus”, with an introductory note by A.S. Troelstra, in *Kurt Gödel. Collected Works*, Vol. 1: *Publications 1929–1936*, S. Feferman, J.W. Dawson, S.C. Kleene, G.H. Moore, R.M. Solovay, and J. van Heijenoort (eds.), Oxford: Oxford University Press, 1986, pp. 296–303.
* Goldblatt, R.I., 1975, “First-order Definability in Modal Logic”, *Journal of Symbolic Logic*, 40(1): 35–40. doi:10.2307/2272267
* Halldén, Sören, 1948, “A Note Concerning the Paradoxes of Strict Implication and Lewis’s System S1”, *Journal of Symbolic Logic*, 13(1): 138–139. doi:10.2307/2267814
* –––, 1950, “Results Concerning the Decision Problem of Lewis’s Calculi S3 and S6”, *Journal of Symbolic Logic*, 14(4): 230–236. doi:10.2307/2269232
* –––, 1951, “On the Semantic Non-Completeness of Certain Lewis Calculi”, *Journal of Symbolic Logic*, 16(2): 127–129. doi:10.2307/2266686
* Hintikka, Jaakko, 1961, “Modality and Quantification”, *Theoria*, 27(3): 119–28; expanded version in Hintikka 1969: 57–70. doi:10.1111/j.1755-2567.1961.tb00020.x
* –––, 1963, “The Modes of Modality”, *Acta Philosophica Fennica*, 16: 65–81. Reprinted in Hintikka 1969: 71–86.
* –––, 1969, *Models for Modalities*, Dordrecht: D. Reidel.
* Jónsson, Bjarni and Alfred Tarski, 1951, “Boolean Algebras with Operators. Part I”, *American Journal of Mathematics*, 73(4): 891–939. doi:10.2307/2372123
* –––, 1952, “Boolean Algebras with Operators. Part II”, *American Journal of Mathematics*, 74(1): 127–162. doi:10.2307/2372074
* Kanger, Stig, 1957, *Provability in Logic*, (Acta Universitatis Stockholmiensis, Stockholm Studies in Philosophy, Vol. 1), Stockholm: Almqvist and Wiksell.
* Kripke, Saul A., 1959a, “A Completeness Theorem in Modal Logic”, *Journal of Symbolic Logic*, 24(1): 1–14. doi:10.2307/2964568
* –––, 1959b, “Semantical Analysis of Modal Logic” (abstract from the Twenty-Fourth Annual Meeting of the Association for Symbolic Logic), *Journal of Symbolic Logic*, 24(4): 323–324. doi:10.1017/S0022481200123321
* –––, 1962, “The Undecidability of Monadic Modal Quantification Theory”, *Zeitschrift für Mathematische Logik und Grundlagen der Mathematik*, 8(2): 113–116. doi:10.1002/malq.19620080204
* –––, 1963a, “Semantical Analysis of Modal Logic I. Normal Modal Propositional Calculi”, *Zeitschrift für Mathematische Logik und Grundlagen der Mathematik*, 9(5–6): 67–96. doi:10.1002/malq.19630090502
* –––, 1963b, “Semantical Considerations on Modal Logic”, *Acta Philosophica Fennica*, 16: 83–94.
* –––, 1965, “Semantical Analysis of Modal Logic II. Non-normal Modal Propositional Calculi”, in *Symposium on the Theory of Models*, J.W. Addison, L. Henkin, and A. Tarski (eds.), Amsterdam: North-Holland, pp. 206–220.
* –––, 1967a, “Review of E.J. Lemmon ‘Algebraic Semantics for Modal Logics I’ (1966a)”, *Mathematical Reviews*, 34: 1021–1022.
* –––, 1967b, “Review of E.J. Lemmon ‘Algebraic Semantics for Modal Logics II’ (1966b)”, *Mathematical Reviews*, 34: 1022.
* Lemmon, E.J., 1957, “New Foundations for Lewis Modal Systems”, *Journal of Symbolic Logic*, 22(2): 176–186. doi:0.2307/2964179
* –––, 1966a, “Algebraic Semantics for Modal Logics I”, *Journal of Symbolic Logic*, 31(1): 46–65. doi:10.2307/2270619
* –––, 1966b, “Algebraic Semantics for Modal Logics II”, *Journal of Symbolic Logic*, 31(2): 191–218. doi:10.2307/2269810
* Lemon, E.J. (with Dana Scott), 1977, *The “Lemmon Notes”. An Introduction to Modal Logic* (American Philosophical Quarterly Monograph Series, vol. 11), K. Segerberg (ed.), Oxford: Basil Blackwell.
* Lewis, C.I., 1912, “Implication and the Algebra of Logic”, *Mind*, 21(84): 522–531. doi:10.1093/mind/XXI.84.522
* –––, 1914, “The Calculus of Strict Implication”, *Mind*, 23(1): 240–247. doi:10.1093/mind/XXIII.1.240
* –––, 1918, *A Survey of Symbolic Logic*, Berkeley: University of California Press.
* –––, 1920, “Strict Implication—An Emendation”, *Journal of Philosophy, Psychology and Scientific Methods*, 17(11): 300–302. doi:10.2307/2940598
* Lewis, C.I. and C.H. Langford, 1932, *Symbolic Logic*, London: Century; 2nd edition 1959, New York: Dover.
* Łukasiewicz, Jan, 1920, “O Logice Trójwartościowej”, *Ruch Filozoficzny*, 5: 170–171.
* –––, 1930, “Philosophische Bemerkungen zu Mehrwertigen Systemen des Aussagenkalküls”, *Comptes Rendus des Séances de la Société des Sciences et des Lettres de Varsovie*, 23: 51–77. Translated and reprinted in Łukasiewicz 1970: 153–178.
* –––, 1970, *Selected Works*, L. Borkowski (ed.), Amsterdam: North-Holland.
* Łukasiewicz, Jan and Alfred Tarski, 1931,“Investigations into the Sentential Calculus”, in Alfred Tarski, 1956, *Logic, Semantics, Metamathematics*, Oxford: Clarendon Press, pp. 38–59.
* MacColl, Hugh, 1880, “Symbolical Reasoning”, *Mind*, 5(17): 45–60. doi:10.1093/mind/os-V.17.45
* –––, 1897, “Symbolical Reasoning (II)”, *Mind*, 6(4): 493–510. doi:10.1093/mind/VI.4.493
* –––, 1900, “Symbolical Reasoning (III)”, *Mind*, 9(36): 75–84. doi:10.1093/mind/IX.36.75
* –––, 1906, *Symbolic Logic and its Applications*, London: Longmans, Green, and Co.
* Makinson, David C., 1966a, “How Meaningful are Modal Operators?”, *Australasian Journal of Philosophy*, 44(3): 331–337. doi:10.1080/00048406612341161
* –––, 1966b, “On Some Completeness Theorems in Modal logic”, *Zeitschrift für Mathematische Logik und Grundlagen der Mathematik*, 12: 379–384. doi:10.1002/malq.19660120131
* –––, 1969, “A Normal Modal Calculus Between T and S4 Without the Finite Model Property”, *Journal of Symbolic Logic*, 34(1): 35–38. doi:10.2307/2270978
* McKinsey, J.C.C., 1934, “A Reduction in Number of the Postulates for C.I. Lewis’ System of Strict Implication”, *Bulletin of the American Mathematical Society* (New Series), 40(6): 425–427. doi:10.1090/S0002-9904-1934-05881-6
* –––, 1941, “A Solution of the Decision Problem for the Lewis Systems S2 and S4, with an Application to Topology”, *Journal of Symbolic Logic*, 6(4): 117–134. doi:10.2307/2267105
* –––, 1944, “On the Number of Complete Extensions of the Lewis Systems of Sentential Calculus”, *Journal of Symbolic Logic*, 9(2): 42–45. doi:10.2307/2268020
* –––, 1945, “On the Syntactical Construction of Systems of Modal Logic”, *Journal of Symbolic Logic*, 10(3): 83–94. doi:10.2307/2267027
* McKinsey, J.C.C. and Alfred Tarski, 1944, “The Algebra of Topology”, *Annals of Mathematics*, 45(1): 141–191. doi:10.2307/1969080
* –––, 1946, “On Closed Elements in Closure Algebras”, *Annals of Mathematics*, 47(1): 122–162. doi:10.2307/1969038
* –––, 1948, “Some Theorems about the Sentential Calculi of Lewis and Heyting”, *Journal of Symbolic Logic*, 13(1): 1–15. doi:10.2307/2268135
* Montague, Richard, 1960, “Logical Necessity, Physical Necessity, Ethics, and Quantifiers”, *Inquiry*, 3(1–4): 259–269. doi:10.1080/00201746008601312
* Nelson, Everett J., 1930, “Intensional Relations”, *Mind*, 39(156): 440–453. doi:10.1093/mind/XXXIX.156.440
* Parry, William Tuthill, 1934, “The Postulates for ‘Strict Implication’”, *Mind*, 43(169): 78–80. doi:10.1093/mind/XLIII.169.78
* –––, 1939, “Modalities in the Survey System of Strict Implication”, *Journal of Symbolic Logic*, 4(4): 137–154. doi:10.2307/2268714
* Prior, Arthur N., 1955, *Formal Logic*, Oxford: Clarendon Press.
* –––, 1956, “Modality and Quantification in S5”, *Journal of Symbolic Logic*, 21(1): 60–62. doi:10.2307/2268488
* –––, 1957, *Time and Modality*, Oxford: Clarendon Press.
* –––, 1962, “Possible Worlds”, *Philosophical Quarterly*, 12(46): 36–43. doi:10.2307/2216837
* Prior, Arthur N. and Kit Fine, 1977, *Worlds, Times and Selves*, Amherst, MA: University of Massachusetts Press.
* Quine, W.V., 1947a, “The Problem of Interpreting Modal Logic”, *Journal of Symbolic Logic*, 12(2): 43–48. doi:10.2307/2267247
* –––, 1947b, “Review of *The Deduction Theorem in a Functional Calculus of First Order Based on Strict Implication* by Ruth C. Barcan (1946b)”, *Journal of Symbolic Logic*, 12(3): 95–96. doi:10.2307/2267230
* –––, 1970, *Philosophy of Logic*, Cambridge, MA: Harvard University Press.
* Russell, Bertrand, 1906, “Review of Hugh MacColl *Symbolic Logic and Its Applications* (1906)”, *Mind*, 15(58): 255–260. doi:10.1093/mind/XV.58.255
* Schlipp, Paul Arthur (ed.), 1963, *The Philosophy of Rudolf Carnap* (The Library of Living Philosophers: Volume 11), La Salle: Open Court.
* Scroggs, Schiller Joe, 1951, “Extensions of the Lewis System S5”, *Journal of Symbolic Logic*, 16(2): 112–120. doi:10.2307/2266683
* Segerberg, Krister, 1968, “Decidability of S4.1”, *Theoria*, 34(1): 7–20. doi:10.1111/j.1755-2567.1968.tb00335.x
* –––, 1971, *An Essay in Classical Modal Logic*, 3 volumes, (Filosofiska Studier, Vol. 13), Uppsala: Uppsala Universitet.
* Simons, Leo, 1953, “New Axiomatizations of S3 and S4”, *Journal of Symbolic Logic*, 18(4): 309–316. doi:10.2307/2266554
* Sobociński, Boleslaw, 1953, “Note on a Modal System of Feys-von Wright”, *Journal of Computing Systems*, 1(3): 171–178.
* –––, 1962, “A Contribution to the Axiomatization of Lewis’ System S5”, *Notre Dame Journal of Formal Logic*, 3(1): 51–60. doi:10.1305/ndjfl/1093957059
* Strawson, P.F., 1948, “Necessary Propositions and Entailment-Statements”, *Mind*, 57(226): 184–200. doi:10.1093/mind/LVII.226.184
* Thomason, Richmond H., 1973, “Philosophy and Formal Semantics”, in *Truth, Syntax and Modality*, Hugues Leblanc (ed.), Amsterdam: North-Holland, pp. 294–307.
* Thomason, Steven K., 1973, “A New Representation of S5”, *Notre Dame Journal of Formal Logic*, 14(2): 281–284. doi:10.1305/ndjfl/1093890907
* –––, 1974, “An Incompleteness Theorem in Modal Logic”, *Theoria*, 40(1): 30–34. doi:10.1111/j.1755-2567.1974.tb00077.x
* van Benthem, Johan, 1978, “Two Simple Incomplete Modal Logics”, *Theoria*, 44: 25–37. doi:10.1111/j.1755-2567.1978.tb00830.x
* –––, 1984, “Possible Worlds Semantics: A Research Program that Cannot Fail?”, *Studia Logica*, 43: 379–393.
* von Wright, G.H., 1951, *An Essay in Modal Logic* (Studies in Logic and the Foundations of Mathematics: Volume V), L.E.J. Brouwer, E.W. Beth, and A. Heyting (eds.), Amsterdam: North-Holland.
* Whitehead, Alfred North and Bertrand Russell, 1910, *Principia Mathematica* (Volume I), Cambridge: Cambridge University Press.

### Secondary Literature

* Ballarin, Roberta, 2005, “Validity and Necessity”, *Journal of Philosophical Logic*, 34(3): 275–303. doi:10.1007/s10992-004-7800-2
* –––, 2021, “Quine on Modality”, in *The Routledge Handbook of Modality*, Otávio Bueno and Scott A. Shalkowski (eds.), New York: Routledge, pp. 390–399.
* Belnap, Nuel D., Jr., 1981, “Modal and Relevance Logics: 1977”, in *Modern Logic: A Survey*, Evandro Agazzi (ed.), Dordrecht: D. Reidel, pp. 131–151. doi:10.1007/978-94-009-9056-2_8
* Blackburn, Patrick and Johan van Benthem, 2007a, “Modal Logic: A Semantic Perspective”, in Blackburn, van Benthem, and Wolter 2007b: chapter 1.
* Blackburn, Patrick, Johan van Benthem, and Frank Wolter, (eds.), 2007b, *Handbook of Modal Logic* (Studies in Logic and Practical Reasoning: Volume 3), Amsterdam: Elsevier.
* Bull, Robert and Krister Segerberg, 1984, “Basic Modal Logic”, in *Extensions of Classical Logic* (Handbook of Philosophical Logic: Volume 2), D.M. Gabbay and F. Guenthner (eds.), Dordrecht: Kluwer, pp. 1–88. doi:10.1007/978-94-009-6259-0_1
* Burgess, John P., 2009, *Philosophical Logic*, Princeton: Princeton University Press.
* Cocchiarella, Nino B., 1975a, “Logical Atomism, Nominalism, and Modal Logic”, *Synthese*, 31(1): 23–62. doi:10.1007/BF00869470
* –––, 1975b, “On the Primary and Secondary Semantics of Logical Necessity”, *Journal of Philosophical Logic*, 4(1): 13–27. doi:10.1007/BF00263118
* Copeland, B. Jack, 2002, “The Genesis of Possible Worlds Semantics”, *Journal of Philosophical Logic*, 31(2): 99–137. doi:10.1023/A:1015273407895
* Curley, E.M., 1975, “The Development of Lewis’ Theory of Strict Implication”, *Notre Dame Journal of Formal Logic*, 16(4): 517–527. doi:10.1305/ndjfl/1093891890
* Deutsch, Harry, 1994, “Logic for Contingent Beings”, *Journal of Philosophical Research*, 19: 273–329.
* Goldblatt, Robert, 2003, “Mathematical Modal Logic: A View of its Evolution”, in *Logic and the Modalities in the Twentieth Century* (Handbook of the History of Logic: Volume 7), D.M. Gabbay and J. Woods (eds.), Amsterdam: Elsevier, pp. 1–98. [2003, *Journal of Applied Logic*, 1(5–6): 309–392. doi:10.1016/S1570-8683(03)00008-9]
* Kaplan, David, 1966, “Review of Saul A. Kripke, *Semantical Analysis of Modal Logic I. Normal Modal Propositional Calculi* (1963a)”, *Journal of Symbolic logic*, 31(1): 120–122. doi:10.2307/2270649
* –––, 1986, “Opacity”, in *The Philosophy of W.V. Quine* (The Library of Living Philosophers: Volume 18), Lewis Edwin Hahn and Paul Arthur Schlipp (eds.), La Salle: Open Court, pp. 229–289.
* Lindström, Sten, 1996, “Modality Without Worlds: Kanger’s Early Semantics for Modal Logic”, in *Odds and Ends. Philosophical Essays Dedicated to Wlodek Rabinowicz on the Occasion of his Fiftieth Birthday*, S. Lindström, R. Sliwinski, and J. Österberg (eds.), Uppsala, Sweden, pp. 266–284.
* –––, 1998, “An Exposition and Development of Kanger’s Early Semantics for Modal Logic”, in *The New Theory of Reference: Kripke, Marcus, and its Origins*, P.W. Humphreys, and J.H. Fetzer (eds.), Dordrecht: Kluwer, pp. 203–233.
* –––, 2001, “Quine’s Interpretation Problem and the Early Development of Possible Worlds Semantics”, *Uppsala Philosophical Studies*, 50: 187–213.
* Lindström, Sten and Krister Segerberg, 2007, “Modal Logic and Philosophy”, in Blackburn, van Benthem, and Wolter 2007b: chapter 1.
* Linsky, Bernard and Edward N. Zalta, 1994, “in Defense of the Simplest Quantified Modal Logic”, *Philosophical Perspectives*, 8: 431–458.
* Linsky, Leonard (ed.), 1971, *Reference and Modality*, Oxford: Oxford University Press.
* Löb, M.H., 1966, “Extensional Interpretations of Modal Logic”, *Journal of Symbolic Logic*, 31(1): 23–45. doi:10.2307/2270618
* Rahman, Shahid and Juan Redmond, 2007, *Hugh MacColl: An Overview of his Logical Work with Anthology*, London: College Publications.
* Rescher, Nicholas, 1974, *Studies in Modality*, Oxford: Basil Blackwell.
* Zakharyaschev, Michael, Krister Segerberg, Maarten de Rijke, and Heinrich Wansing, 2001, “The Origins of Modern Modal Logic”, in *Advances in Modal Logic 2*, M. Zakharyaschev, K. Segerberg, M. de Rijke, and H. Wansing (eds.), Stanford: CSLI Publications, pp. 11–38.

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-modal-origins). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-modal-origins/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up this entry topic](https://www.inphoproject.org/entity?sep=logic-modal-origins&redirect=True) at the [Internet Philosophy Ontology Project](https://www.inphoproject.org/) (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](http://philpapers.org/sep/logic-modal-origins/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

* [Basic Concepts in Modal Logic](https://mally.stanford.edu/notes.pdf), by Edward N. Zalta (course notes)
* [Modal Logic Handbook](https://www.csc.liv.ac.uk/~frank/MLHandbook/), by P. Blackburn, J. van Benthem, and F. Wolter

## Related Entries

[algebra of logic tradition](https://plato.stanford.edu/entries/algebra-logic-tradition/) | [Boolean algebra: the mathematics of](https://plato.stanford.edu/entries/boolalg-math/) | [logic: algebraic propositional](https://plato.stanford.edu/entries/logic-algebraic-propositional/) | [logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [logic: deontic](https://plato.stanford.edu/entries/logic-deontic/) | [logic: hybrid](https://plato.stanford.edu/entries/logic-hybrid/) | [logic: intensional](https://plato.stanford.edu/entries/logic-intensional/) | [logic: many-valued](https://plato.stanford.edu/entries/logic-manyvalued/) | [logic: modal](https://plato.stanford.edu/entries/logic-modal/) | [logic: relevance](https://plato.stanford.edu/entries/logic-relevance/) | [logic: temporal](https://plato.stanford.edu/entries/logic-temporal/) | [Łukasiewicz, Jan](https://plato.stanford.edu/entries/lukasiewicz/) | [modality: medieval theories of](https://plato.stanford.edu/entries/modality-medieval/) | [possibilism-actualism debate](https://plato.stanford.edu/entries/possibilism-actualism/) | [possible objects](https://plato.stanford.edu/entries/possible-objects/) | [possible worlds](https://plato.stanford.edu/entries/possible-worlds/) | [Prior, Arthur](https://plato.stanford.edu/entries/prior/)

### Acknowledgments

I would like to thank Max Weiss who has assisted me with the initial 2010 version of this entry and Harry Deutsch for constructive feedback on a previous version of the last section of this entry.

[Copyright © 2021](https://plato.stanford.edu/info.html#c) by  
Roberta Ballarin <[*rballari@mail.ubc.ca*](mailto:rballari%40mail%2eubc%2eca)>
