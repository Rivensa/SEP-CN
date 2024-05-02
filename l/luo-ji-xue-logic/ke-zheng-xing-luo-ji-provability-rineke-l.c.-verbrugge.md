# 可证性逻辑 provability (Rineke (L.C.) Verbrugge)

*首次发表于2003年4月2日；实质性修订于2024年3月4日*

可证性逻辑是一种模态逻辑，用于研究算术理论在受限语言中关于可证性谓词的表达能力。该逻辑受到了元数学发展的启发，例如 1931 年哥德尔的不完全性定理和 1953 年洛布的定理。作为一种模态逻辑，可证性逻辑自上世纪 70 年代以来一直受到研究，并在数学基础领域具有重要应用。

从哲学角度来看，可证性逻辑很有趣，因为在固定的算术理论中，可证性的概念具有独特且非问题性的含义，与模态逻辑和认识逻辑中研究的必然性和知识等概念不同。此外，可证性逻辑提供了研究自指概念的工具。

---

## 1. 可证性逻辑的历史

两个研究方向导致了可证性逻辑的诞生。第一个方向源自 K. Gödel（1933）的一篇论文，他在其中将直觉主义命题逻辑翻译为模态逻辑（更准确地说是现在称为 S4 的系统），并简要提到可证性可以被视为一种模态运算符。更早之前，C.I. Lewis 通过引入严格蕴涵作为一种推导性质开始了对模态逻辑的现代研究，他可能指的是像《数学原理》这样的形式系统中的推导性质，但这并不清楚从他的著作中无法确定。

另一条线索始于元数学研究：通过编码有趣的属性，数学理论能够对自身说些什么？1952 年，L. Henkin 提出了一个看似简单的问题，受到了哥德尔的不完全性定理的启发。为了阐述 Henkin 的问题，需要一些背景知识。作为提醒，哥德尔的第一不完全性定理指出，对于像 Peano 算术这样足够强的形式理论，任何断言自身不可证性的句子实际上都是不可证的。另一方面，在“外部”观察形式理论，人们可以看到这样一个句子在标准模型中是真实的，这指向了真实性和可证性之间的重要区别。

更正式地说，让┌A┐表示算术公式 A 的哥德尔数，即将数值编码分配给 A。让 Prov 成为 Peano 算术的形式化可证性谓词，其形式为∃pProof(p,x)。这里，Proof 是 Peano 算术的形式化证明谓词，Proof(p,x)表示“哥德尔数 p 编码了一个正确的从 Peano 算术公理到具有哥德尔数 x 的公式的证明”。（有关更精确的表述，请参见 Smoryński（1985），Davis（1958）。）现在，假设 Peano 算术证明了 A↔¬Prov(┌A┐)，那么根据哥德尔的结果，A 在 Peano 算术中是不可证的，因此它是真实的，实际上自指句子 A 陈述了“我是不可证的”。

另一方面，亨金想知道是否可以对断言其自身可证性的句子进行陈述：假设 Peano 算术证明了 B↔Prov(┌B┐)，那么这对 B 意味着什么？三年后，Löb 接受了这一挑战，并以令人惊讶的方式回答了亨金的问题。尽管在 Peano 算术中可证的所有句子确实关于自然数是真的，但 Löb 表明，这一事实的形式化版本 Prov(┌B┐)→B 只能在 Peano 算术中在 Peano 算术已经证明了 B 本身的平凡情况下被证明。这个结果现在被称为 Löb 定理，立即回答了亨金的问题。（关于 Löb 定理的证明，请参见第 4 节。）Löb 还展示了他定理的一个形式化版本，即 Peano 算术证明

Prov(┌Prov(┌B┐)→B┐)→Prov(┌B┐)。

在同一篇论文中，Löb 对 Peano 算术的可证性谓词提出了三个条件，这些条件对于 Hilbert 和 Bernays 在 1939 年证明 Gödel 第二不完全性定理的复杂条件进行了有用的修改。在接下来的内容中，从 Peano 算术中推导出 A 的可导性用 PA⊢A 表示：

1. 如果 PA⊢A，则 PA⊢可证性(┌A┐);
2. PA⊢可证性(┌A→B┐)→(可证性(┌A┐)→可证性(┌B┐));
3. PA⊢可证性(┌A┐)→可证性(┌可证性(┌A┐)┐).

这些如今被称为 Löb 条件的条件似乎呼唤着对模态逻辑的研究，其中□代表 PA 中的可证性。具有讽刺意味的是，Löb 定理的形式化版本首次被陈述为模态原理是在 1963 年 Smiley 的一篇关于伦理学逻辑基础的论文中，该论文根本没有考虑算术。然而，更相关的研究直到 Löb 的论文发表近二十年后才真正开始。20 世纪 70 年代初，命题可证性逻辑迅速发展，不同国家的几位研究人员独立证明了在第 2、3 和 4 节中讨论的最重要的结果。命题可证性逻辑事实上捕捉到了许多形式化算术理论通过命题手段关于自身可证性谓词的陈述。最近，研究人员对这种方法的边界进行了调查，并提出了几个有趣的更具表达力的可证性逻辑扩展（见第 5 节）。

□(□A→A)→□A

was in a paper by Smiley in 1963 about the logical basis of ethics, which did not consider arithmetic at all. More relevant investigations, however, seriously started only almost twenty years after publication of Löb’s paper. The early 1970s saw the rapid development of propositional provability logic, where several researchers in different countries independently proved the most important results, discussed in Sections [2](https://plato.stanford.edu/entries/logic-provability/#AxioSystPropProvLogi), [3](https://plato.stanford.edu/entries/logic-provability/#PossWorlSemaTopoSema), and [4](https://plato.stanford.edu/entries/logic-provability/#ProvLogiPeanArit). Propositional provability logic turned out to capture exactly what many formal theories of arithmetic can say by propositional means about their own provability predicate. More recently, researchers have investigated the boundaries of this approach and have proposed several interesting more expressive extensions of provability logic (see [Section 5](https://plato.stanford.edu/entries/logic-provability/#ScopProvLogi)).

## 2. 可证性逻辑的命题公理系统

可证性逻辑的逻辑语言除了包含命题原子和通常的真值功能运算符以及矛盾符号⊥之外，还包含一个模态运算符□，其意义是“在 T 中是可证的”，其中 T 是一个足够强大的形式理论，我们可以称之为 Peano 算术（见第 4 节）。⬦A 是¬□¬A 的缩写。因此，该语言与模态逻辑中的 K 和 S4 等系统的语言相同，详见模态逻辑条目。

### 2.1 公理和规则

命题可证性逻辑通常被称为 GL，以 Gödel 和 Löb 命名。（在文献中还可以找到等价系统的其他名称，如 L，G，KW，K4W 和 PrL）。GL 逻辑是通过将以下公理添加到基本的模态逻辑 K 中得到的：

 (GL)□(□A→A)→□A。

作为提醒，由于 GL 扩展了 K，它包含所有具有命题重言式形式的公式。出于同样的原因，GL 包含了随附

(分配公理)□(A→B)→(□A→□B).

此外，它在演绎规则下是封闭的，该规则允许从 A→B 和 A 推导出 B，以及泛化规则，该规则指出如果 A 是 GL 的一个定理，那么□A 也是一个定理。

符号 GL⊢A 表示命题可证性逻辑中模态公式 A 的可证性。不难看出，模态公理□A→□□A（也称为模态逻辑的公理 4）在 GL 中确实是可证的。为了证明这一点，我们在公理(GL)中使用 A∧□A 替换 A。然后，看到结果蕴含式的前提是由□A 得出的，我们应用了分配公理和泛化规则以及一些命题逻辑。

注意，GL 证明了许多与其他众所周知的模态逻辑（如 K 和 S4）不共享的意外定理。例如，公理 GL 的一个实例是□（□⊥→⊥）→□⊥，通过其他公理和规则，可以得出对于任意公式 A 和 B，□⬦A→□B[1]。除非另有明确说明，在接下来的内容中，“可证性逻辑”代表命题可证性逻辑系统 GL。

至于可证性逻辑的证明理论，Valentini（1983）证明了 GL 的标准序列演算公式遵循削减消去，这意味着，粗略地说，从序列演算中可证明的每个公式也有一个“无绕道”的 GL 序列证明（有关削减消去的精确解释，请参见证明理论发展的条目）。近年来，对 GL 的证明理论再次引起了兴趣，例如 Goré和 Ramanayake（2008 年，2012 年）以及 Goré，Ramanayake 和 Shillito（2021 年）。削减消去导致 GL 具有理想的子公式性质，因为在无削减证明中出现的所有公式都是最终公式的子公式。

关于基于不同无削减序列演算的可证性逻辑的最新证明理论研究，请参见（Negri 2005, 2014; Poggiolesi 2009）。Negri 提出了两个等价的标记序列演算用于 GL，并给出了削减消去的句法证明。尽管由于标记的存在，这些演算不具备完全的子公式性质，但可以建立子公式性质的通常后果：标记形式主义允许直接的完备性证明，可用于建立可判定性以及有限模型性质，这意味着任何不可证明的公式都有一个有限的反模型。

一个引人入胜的新的可证性发展是 Shamkanov 通过允许循环证明（Shamkanov 2014）来扩展序列式证明系统。考虑一个序列系统用于 K4，这是由 GL 通过将公理 GL 替换为较弱的公理□A→□□A（公理 4）而得到的模态系统。然而，假设允许开放性假设，只要在证明树中该假设的严格下方严格出现相同的序列。更加技术化地表述，可以通过将其非公理叶子与相同的内部节点连接起来，从普通的推导树中找到循环推导。Shamkanov（2014）证明了所得系统的一致性，并且而且，一般情况下，每个序列具有 GL-推导当且仅当它具有循环 K4-推导。循环证明还提供了一种证明理论上 Lyndon 的插值定理适用于 GL 的方法（Shamkanov 2011）。GL 的标准插值已经通过不同的方法证明过（Boolos 1979; Smoryński 1978; Rautenberg 1983），统一插值也是如此（Shavrukov 1993b，Bílková 2016，Férée 等[其他互联网资源]）。 （有关一阶逻辑的 Lyndon 插值定理的更多信息，还可以参见一阶模型论条目）。

### 2.2 不动点定理

关于可证性逻辑的主要“模态”结果是固定点定理，这是 D. de Jongh 和 G. Sambin 在 1975 年分别证明的（Sambin 1976，Smoryński 1985，de Jongh 即将发表）。尽管它是通过严格的模态方法来表述和证明的，但固定点定理仍具有重要的算术意义。它实质上表明自我引用并不是真正必要的，具体来说，假设在给定的公式 A(p)中，命题变量 p 的所有出现都在可证性运算符的范围之下，例如 A(p)=¬□p 或 A(p)=□(p→q)。那么存在一个不包含 p 的公式 B，其中 B 中出现的所有命题变量已经出现在 A(p)中，并且满足以下条件：

 GL⊢B↔A(B)。

这个公式 B 被称为 A(p)的一个固定点。此外，这个固定点是唯一的，或者更准确地说，如果存在另一个公式 C 使得 GL⊢C↔A(C)，那么我们必须有 GL⊢B↔C。文献中的大多数证明都给出了一种计算固定点的算法（参见 Smoryński 1985，Boolos 1993，Sambin 和 Valentini 1982，Lindström 2006）。Reidhaar-Olson（1990）中可以找到一种特别简短明了的证明，以及一种非常高效的计算固定点的算法。

例如，假设 A(p)=¬□p。那么这种算法产生的不动点是¬□⊥，而且确实可以证明

 GL⊢¬□⊥↔¬□(¬□⊥)。

如果这是以算术方式阅读的话，从左到右的方向只是哥德尔第二不完全性定理的形式化版本：如果像 Peano 算术这样的足够强的形式理论 T 不能证明矛盾，那么在 T 中不可证明 T 不证明矛盾。因此，足够强的一致算术理论不能证明自身的一致性。我们将在第 4 节更详细地研究可证性逻辑与算术之间的关系，但为此首先需要提供 GL 的另一个“模态”方面：语义学。

## 3. 可能世界语义和拓扑语义

可证性逻辑具有适当的可能世界语义，就像许多其他模态逻辑一样。作为提醒，可能世界模型（或 Kripke 模型）是一个三元组 M=⟨W,R,V⟩，其中 W 是一组非空的可能世界，R 是 W 上的二元可达关系，V 是一个对于 W 中每个世界的每个命题变量分配真值的估值。这个模型的框架被称为 F=⟨W,R⟩。在模型 M 中，公式 A 在世界 W 上的真值，表示为 M,w⊨A，是通过归纳定义的。让我们只重复最有趣的子句，即可证性运算符□的子句：

M,w⊨□A 当且仅当对于每个 w′，如果 wRw′，则 M,w′⊨A。

有关一般可能世界语义的更多信息，请参阅模态逻辑词条。

### 3.1 特征和模态合理性

模态逻辑 K 在所有 Kripke 模型中都是有效的。然而，它的扩展 GL 不是：我们需要将可能世界模型的类别限制为更合适的类别。假设一个公式 A 在框架 F 中是有效的，记作 F⊨A，当且仅当在基于 F 的 Kripke 模型 M 中的所有世界中 A 都为真。事实证明，可证性逻辑的新公理(GL)对应于框架上的一个条件，如下所示：

对于所有的框架 F=⟨W,R⟩，当且仅当 R 是传递的且反向良基时，F ⊨ □(□p→p)→□p。

这里，传递性是众所周知的性质，对于 W 中的所有世界 w1、w2、w3，如果 w1Rw2 且 w2Rw3，则 w1Rw3。一个关系是反向良基的，当且仅当不存在无限递增的序列，即形如 w1Rw2Rw3R… 的序列。请注意，反向良基的框架也是非自反的，因为如果 wRw，则会产生一个无限递增的序列 wRwRwR…。

上述对应结果立即显示了 GL 相对于传递反向良基框架上的可能世界模型是模态上的完备的，因为 GL 的所有公理和规则在这样的模型上都是有效的。问题是完备性是否也成立：例如，对于所有传递框架上都有效的公式 □A→□□A，在 GL 中是否确实是可证的，正如第 1 节中提到的那样。但是，对于在所有传递反向良基框架上都有效的公式，是否也都可以在 GL 中证明呢？

### 3.2 模态完备性

K. Segerberg 在 1971 年证明了 GL 相对于传递性逆良基框架是完备的，但他并不知道 GL 的算术意义；D. de Jongh 和 S. Kripke 也独立证明了这个结果。Segerberg 还证明了 GL 相对于更为受限的有限传递非自反树类也是完备的，这个事实后来对 Solovay 的算术完备性定理的证明非常有用（见第 4 节）。

模态的正确性和完备性定理立即导致了一种决策过程，可以通过有界深度的非自反传递树的深度优先搜索来检查任何模态公式 A 是否遵循 GL。更详细地看这个过程，可以证明 GL 在计算复杂性类 PSPACE 中是可判定的，就像众所周知的模态逻辑 K、T 和 S4 一样。这意味着存在一台图灵机，给定一个公式 A 作为输入，回答 A 是否遵循 GL；图灵机在计算过程中所需的内存大小仅与 A 的长度多项式相关。可以证明 GL 的决策问题（同样，像 K、T 和 S4 的决策问题一样）是 PSPACE 完全的，也就是说，PSPACE 中的所有其他问题都不比决定给定公式是否是 GL 的定理更难。（有关 GL 的自动定理证明器的描述，请参见 Goré和 Kelly 2007 [其他互联网资源]。）

为了更好地理解复杂性，可以将在输入长度的多项式时间内可计算的函数类 P 包含在 PSPACE 中，而 PSPACE 又包含在在指数时间内可计算的函数类 EXPTIME 中（参见可计算性和复杂性条目）。尽管许多复杂性理论家认为这两个包含关系是严格的，但它们是否严格仍然是一个著名的未解问题。一些其他众所周知的模态逻辑，如具有共同知识的认知逻辑，在 EXPTIME 中是可判定的，因此根据未解问题的不同，它们可能比 GL 更复杂。

### 3.3 强完备性的失败

许多众所周知的模态逻辑 S 不仅对于适当的框架类是完备的，甚至是强完备的。为了解释强完备性，我们需要假设集合中的可导性的概念。如果在模态逻辑 S 中，公式 A 可以从假设集合Γ中推导出来，即Γ⊢A，那么 A 要么在Γ中，要么是根据Γ中的公式和 S 的公理通过应用演绎法则和概括规则得出的。在这里，概括规则只能应用于没有假设的推导（参见 Hakli 和 Negri 2010）。

现在，如果对于所有（有限或无限）集合Γ和所有公式 A，适当的 S-框架上，A 在所有使Γ中的所有公式为真的世界中为真，则在逻辑 S 中Γ⊢A，则模态逻辑 S 是强完备的。

对于像 K、M、K4、S4 和 S5 这样的系统，这个条件成立。如果限制在有限集合Γ上，上述条件对应于完备性。

This condition holds for systems like K, M, K4, S4, and S5. If restricted to finite sets Γ, the above condition corresponds to completeness.

可证性逻辑不具备强完备性，因为语义紧凑性失败。语义紧凑性是指对于每个无穷公式集Γ，

如果Γ的每个有限子集Δ在适当的 S-框架上有一个模型，那么Γ在适当的 S-框架上也有一个模型。

作为一个反例，考虑无穷公式集合

Γ={⬦p0,□(p0→⬦p1),□(p1→⬦p2),□(p2→⬦p3),…, □(pn→⬦pn+1),…}

那么对于Γ的每个有限子集Δ，可以在一个传递的、反向良基的框架上构建一个模型，并在模型中找到一个世界，其中Δ的所有公式都为真。因此，根据模态的合理性，GL 不能从Δ中证明⊥，对于任何有限的Δ⊆Γ，而且从Γ中也不能证明⊥，因为任何 GL 证明都是有限的。另一方面，很容易看出，在任何一个世界中，没有一个模型在一个传递的、反向良基的框架上，所有Γ的公式都成立。因此，⊥在语义上从Γ中推导出来，但在 GL 中不能从中证明⊥，这与强完备性的条件相矛盾。[2]

### 3.4 可证性逻辑的拓扑语义

作为可能世界语义的替代，许多模态逻辑可以给出拓扑语义。显然，命题可以被解释为拓扑空间的子集。很容易看出，命题连接词∧对应于集合论运算∩，而∨对应于∪，¬对应于集合论的补集，→对应于⊆。包含反射公理□A→A 的模态逻辑也享有一种特别自然的模态运算符解释。对于这些逻辑，⬦对应于拓扑空间中的闭包运算符，而□对应于内部运算符。要理解为什么这些解释是合适的，请注意反射公理对应于每个集合都包含在其闭包中，每个集合都包含其内部的事实。

然而，可证性逻辑并不证明反射，因为反射的实例化□⊥→⊥会与公理(GL)产生矛盾。

因此，可证性逻辑需要一种不同的方法。基于 J. McKinsey 和 A. Tarski（1944）的建议，L. Esakia（1981, 2003）研究了⬦作为导出集运算符 d 的解释，该运算符将集合 B 映射到其极限点集 d(B)。为了解释这种⬦的解释的后果，我们需要另外两个定义，即密集自身和稀疏的概念。拓扑空间的子集 B 如果 B⊆d(B)则称为密集自身。如果一个拓扑空间没有非空的密集自身子集，则称其为稀疏空间。区间拓扑中的序数是稀疏空间的例子。Esakia（1981）证明了一个重要的对应关系：他证明了一个拓扑空间满足公理 GL 当且仅当该空间是稀疏的。这个对应关系很快导致了一个结果，由 Abashidze（1985）和 Blass（1990）独立发现，即可证性逻辑对于任何大于等于ωω的序数是完备的。

在过去的几十年中，可证性逻辑的拓扑语义经历了一次真正的复兴，特别是在对 Japaridze 的双模可证性逻辑 GLB（GL 的扩展）的研究中（Japaridze 1986）。GLB 逻辑在其可能世界语义上被证明是模态不完备的，意味着它不对应于任何一类框架[3]。这个特点使得双模 GLB 与单模 GL 形成鲜明对比，后者对应于有限传递非自反树的类，如上所述。Beklemishev 等人（2009）证明了 GLB 在其拓扑语义上是完备的（另见 Beklemishev 2009，Icard 2011）。Esakia 关于 GL 和分散拓扑空间之间的对应的引人深思的回响甚至可以在空间和认知逻辑的拓扑研究中找到（参见 Aiello 等人 2007 年）。（有关 GLB 的进一步讨论，请参见第 5.4 节）。

## 4. 可证性逻辑和 Peano 算术

从 GL 被提出以来，研究人员就想知道它是否足够适用于像 Peano 算术（PA）这样的形式理论：GL 是否证明了关于可证性概念的一切，这些概念可以用命题模态语言表达，并且可以在 Peano 算术中证明，或者 GL 是否需要添加更多原则？为了使这个适用性概念更加精确，我们定义一个实现（有时称为翻译或解释）为一个函数 f，它将模态逻辑的每个命题原子分配给一个算术句子，其中

* f(⊥)=⊥;
* f 尊重逻辑连接词，例如，f(B→C)=(f(B)→f(C)); and
* □被翻译为可证性谓词 Prov，因此 f(□B)=Prov(┌f(B)┐).

### 4.1 算术的正确性

早在 1970 年代初期就已经清楚，GL 相对于 PA 在算术上是正确的，形式上说：

如果 GL⊢A，那么对于所有的实现 f，PA⊢f(A)。

为了给予一些元数学的味道，让我们勾勒一下正确性证明。

算术正确性的证明草图。PA 确实证明了命题重言式的实现，并且 GL 的分配公理的可证性转化为

PA⊢Prov(┌A→B┐)→(Prov(┌A┐)→Prov(┌B┐))

对于所有的公式 A 和 B，这就是 Löb 的第二可证性条件（见第 1 节）。此外，PA 遵守 Modus Ponens，以及广化规则的翻译：

如果 PA⊢A，则 PA⊢Prov(┌A┐)，

这就是 Löb 的第一可证性条件。最后，主公理（GL）的翻译在 PA 中确实是可证的：

PA⊢可证性(┌可证性(┌A┐)→A┐)→可证性(┌A┐).

这正是第 1 节提到的 Löb 定理的形式化版本。

让我们简要概述一下 Löb 定理本身的证明，从他的可导性条件出发（形式化版本的证明类似）。该证明基于哥德尔的对角线引理，该引理表明对于任何算术公式 C(x)，都存在一个算术公式 B，使得

PA⊢B↔C(┌B┐).

用文字来说，公式 B 表示“我具有属性 C”。

Löb 定理的证明：假设 PA⊢可证性(┌A┐)→A；我们需要证明 PA⊢A。根据对角线引理，存在一个公式 B，使得

 PA⊢B↔(可证性(┌B┐)→A).

由此可得，根据 Löb 的第一和第二可导性条件以及一些命题推理，

PA⊢可证性(┌B┐)↔可证性(┌可证性(┌B┐)→A┐).

因此，再次根据 Löb 的第二个条件，

PA⊢可证性(┌B┐)→(可证性(┌可证性(┌B┐)┐)→可证性(┌A┐)).

另一方面，Löb 的第三个条件给出了

PA⊢可证性(┌B┐)→可证性(┌可证性(┌B┐)┐),

 因此

 PA⊢可证性(┌B┐)→可证性(┌A┐).

随着假设 PA⊢Prov(┌A┐)→A，这给出了

 PA⊢Prov(┌B┐)→A。

最后，对角线引理产生的方程意味着 PA⊢B，因此 PA⊢Prov(┌B┐)，因此

 PA⊢A，

 如所期望的。

注意，在 Löb 定理中将⊥替换为 A，我们得出 PA⊢¬Prov(┌⊥┐)蕴含 PA⊢⊥的结论，这正是哥德尔第二不完全性定理的逆否命题。

### 4.2 算术完备性

在可证性逻辑中，R. Solovay 于 1976 年提出了具有里程碑意义的算术完备性定理，证明了 GL 确实适用于 Peano 算术：

如果对于所有的实现 f，PA⊢f(A)，则 GL⊢A。

这个定理本质上说，模态逻辑 GL 捕捉到了 Peano 算术在模态术语中关于其自身可证性谓词的真实陈述。从左到右的方向，GL 的算术正确性在上面已经讨论过了。Solovay 试图证明另一个更困难的方向，即通过反证法。他的证明基于复杂的自指技术，这里只能给出一个小小的一瞥。

Segerberg 的模态完备性定理是 Solovay 证明 GL 相对于 Peano 算术的算术完备性的重要第一步。假设 GL 不能证明模态公式 A。那么，根据模态完备性，存在一个有限的传递非自反树，使得 A 在该树的根处为假。现在，Solovay 设计了一种巧妙的方法，在 Peano 算术的语言中模拟这样一个有限树。因此，他找到了一个从模态公式到算术句子的实现 f，使得 Peano 算术不能证明 f(A)。

Solovay 的完备性定理提供了一种构造许多在 Peano 算术中不可证明的算术句子的替代方法。例如，可以很容易地构造一个可能世界模型来显示 GL 不能证明□p∨□¬p，因此根据 Solovay 的定理，存在一个算术句子 f(p)，使得 Peano 算术不能证明 Prov(┌f(p)┐)∨Prov(┌¬f(p)┐)。特别地，这意味着在 Peano 算术中既不能证明 f(p)也不能证明¬f(p)；假设相反，即 PA⊢f(p)，然后根据 Löb 的第一个条件和命题逻辑，PA⊢Prov(┌f(p)┐)∨Prov(┌¬f(p)┐)，导致矛盾，如果假设 PA⊢¬f(p)同样如此。

Solovay 的定理非常重要，因为它表明一个不可判定的形式理论（如 Peano 算术）的一个有趣片段，即算术可以用命题术语表达关于自身可证性谓词的内容，可以通过一个可判定的模态逻辑 GL 和一个清晰的可能世界语义来研究。

## 5. 可证性逻辑的范围

在本节中，讨论了关于可证性逻辑研究的一些趋势。一个重要的方向涉及 GL 的范围限制，主要问题是除了 Peano 算术之外，GL 是否是适用的命题可证性逻辑？接下来，我们讨论了在更具表达力的模态语言中的一些命题可证性逻辑的推广。

### 5.1 边界

自从 1980 年代末，逻辑学家们研究了许多比皮亚诺算术更弱的算术系统。通常，这些逻辑学家从可计算性问题中获得灵感，例如多项式时间可计算函数的研究。他们对以下问题给出了部分答案：“对于哪些算术理论，Solovay 的算术完备性定理（关于适当的可证性谓词）仍然成立？”为了讨论这个问题，需要两个概念。Δ0-公式是算术公式，其中所有的量词都被一个项所限制，例如

∀y≤ss0∀z≤y∀x≤y+z(x+y≤(y+(y+z))),

其中 s 是继承运算符（“+1”）。算术理论 IΔ0（其中 I 代表“归纳”）类似于 Peano 算术，只是它允许较少的归纳：归纳方案

A(0)∧∀x(A(x)→A(sx))→∀xA(x)

仅限于Δ0-公式 A。

正如 De Jongh 和其他人（1991）指出的那样，对于满足以下两个条件的理论 T，算术完备性肯定成立：

1. T 证明了Δ0-公式的归纳法则，以及 T 证明了 EXP，即对于所有的 x，其幂 2x 存在。更常见的符号表示：T 扩展了 IΔ0+EXP；
2. T 不证明任何形式为∃xA(x)的假句，其中 A(x)是一个Δ0-公式。

对于这样的理论，只要□被翻译为 ProvT，即关于 T 的足够简单的公理化的自然可证性谓词，GL 的算术健全性和完备性就成立。因此，对于模态句子 A：

如果对于所有的实现 f，T⊢f(A)，那么 GL⊢A。

目前还不清楚条件 1 是否给出了可证性逻辑范围的下界。例如，GL 是否是 IΔ0+Ω1 的可证性逻辑仍然是一个未解决的问题，其中 IΔ0+Ω1 是一个比 IΔ0+EXP 稍弱的理论，Ω1 是一个断言，对于所有的 x，它的幂 xlog(x)存在。可证性逻辑 GL 相对于 IΔ0+Ω1 在算术上是健全的，但除了 Berarducci 和 Verbrugge（1993）的一些部分结果之外，为与 GL 一致的受限类别的句子提供与 IΔ0+Ω1 一致的算术实现，这个问题仍然是未解决的。它的答案可能取决于计算复杂性理论中的未解决问题。

De Jongh 等人的上述结果显示了可证性逻辑的一个强大特征：对于许多不同的算术理论，GL 恰好捕捉到了这些理论关于它们自己的可证性谓词的含义。与此同时，这也是一个弱点。例如，命题可证性逻辑并没有指出那些有限公理化和非有限公理化的理论之间的任何区别。

### 5.2 解释逻辑

为了能够用模态语言讨论理论之间的重要区别，研究人员以许多不同的方式扩展了可证性逻辑。让我们提到其中几种。一种扩展是添加一个二元模态⊳，其中对于给定的算术理论 T，模态句子 A⊳B 的含义是“T+A 中可解释 T+B”（Švejdar，1983）。De Jongh 和 Veltman（1990）研究了几种解释逻辑的模态语义，而 De Jongh 和 Visser（1991）证明了其中最重要的解释逻辑具有显式的不动点性质。Visser 刻画了最常见的有限公理化理论的解释逻辑，而 Berarducci 和 Shavrukov 独立地刻画了 PA 的解释逻辑，后者不是有限公理化的。事实上，有限公理化理论的解释逻辑与 Peano 算术的解释逻辑是不同的（参见 Montagna 1987; Visser 1990, 1998; Berarducci 1990, Shavrukov 1988; Joosten and Visser 2000）。

### 5.3 命题量词

扩展命题可证性逻辑框架的另一种方法是添加命题量词，以便可以表达类似 Goldfarb 的原则：

 ∀p∀q∃r□((□p∨□q)↔□r)，

声称对于任意两个句子，存在第三个句子，当且仅当前两个句子中的任意一个是可证的时，第三个句子是可证的。这个原则在 Peano 算术中是可证的（参见 Artemov 和 Beklemishev 1993）。具有命题量词的 GL 句子集被证明是不可判定的（Shavrukov 1997）。

### 5.4 Japaridze 的双模和多模可证性逻辑

Japaridze（1988）的双模逻辑 GLB 具有两个类似□的可证性运算符，分别用[0]和[1]表示，它们的对偶是⬦-like 运算符⟨0⟩和⟨1⟩。在 Japaridze 的解释中，可以认为[0]代表 Peano 算术中的标准可证性谓词。另一方面，[1]对应于更强的可证性谓词，即ω-可证性。

让我们定义理解 GLB 的概念所需的概念。如果对于所有带有自由变量 x 的公式 A，T⊢¬A(In)对于所有 n 都意味着 T⊬∃xA(x)，则算术理论 T 被定义为ω-一致的；这里，In 是 n 的数字表示，即具有 n 个后继操作符 s 的术语 ss…s0。Peano 算术（PA）是ω-一致理论的最著名例子（也参见哥德尔的不完全性定理）。现在让 PA+成为算术理论，其公理是 PA 的公理以及所有句子∀x¬A(x)，使得对于每个 n，PA⊢¬A(In)。现在ω-可证性就是在 PA+中的可证性，因此它是ω-一致性的对偶。

Japaridze 的双模可证性逻辑 GLB 可以由 GL 的公理和规则（见第 2 节）分别针对[0]和[1]进行公理化。此外，GLB 还有两个混合公理，即：（单调性）[0]A→[1]A（Π01-完备性）⟨0⟩A→[1]⟨0⟩AJaparidze 的逻辑是可判定的，并且具有合理的 Kripke 语义，它在算术上是完备且与 Peano 算术相一致（Japaridze 1988，Boolos 1993）。

Japaridze 的 GLB 的多模态类比 GLP 近年来受到了很多关注。GLP 具有无限多个类似□的可证性算子，用方框[n]表示，其中 n 是每个自然数，以及它们的对偶⬦-like 算子⟨n⟩。同样，可以将[0]视为 Peano 算术中的标准可证性谓词，⟨1⟩表示ω-可证性，等等。GLP 通过从 GL 的公理和规则（见第 2 节）分别针对每个[n]进行公理化来进行公理化。此外，GLP 还有三个混合公理方案，如 Beklemishev（2010）所述：[m]A→[n]A，对于 m≤n⟨k⟩A→[n]⟨k⟩A，对于 k<n[m]A→[n][m]A，对于 m≤n

GLP 已经被赋予了与 Kripke 语义相关的完备性，并且还被证明在 Peano 算术方面具有算术完备性（参见 Beklemishev 2010a，2011a）。就像 GL 一样，GLP 的决策问题是 PSPACE 完全的（Shapirovsky 2008），而其封闭片段是多项式时间可决定的（Pakhomov 2014）。

在过去的三十年中，关于强可证性谓词的多模态逻辑 GLP 已经证明了许多结果。以下是一些特别富有成果的主题：

* GLP 的封闭片段（参见 Ignatiev 1993; Beklemishev, Joosten 和 Vervoort 2005）；
* GLP 和可证性的证明论序数（Beklemishev 2004）；
* GLP 的邻域语义（Shamkanov 2020）；
* GLP 的插值定理（见 Beklemishev 2010b，Shamkanov 2011）；
* 拓扑语义与集合论之间的关系，以及其他特定的大基数公理和稳定反射（参见 Beklemishev 2011b; Beklemishev 和 Gabelaia 2013, 2014; Fernández-Duque 2014; Aguilera 和 Fernández-Duque 2017）。

### 5.5 谓词可证性逻辑

最后，当然可以研究谓词可证性逻辑。该语言是不带函数符号的谓词逻辑，加上运算符□。在这里，情况比命题可证性逻辑复杂得多。首先，GL 的量化版本没有固定点性质，不完备于任何 Kripke 框架类，并且在 Peano 算术方面也不完全（Montagna, 1984; 最近的推广请参见 Rybakov 2023）。然后问题出现了：是否存在任何良好公理化的谓词可证性逻辑，它是充分的，恰好证明了可证性的有效原理？不幸的是，答案是坚决的否定的：Vardanyan（1986）基于 Artemov（1985a）的思想证明了谓词可证性逻辑的句子集合，所有实现都可以在 PA 中证明，甚至不是递归可枚举的，而是Π02-完全的，因此它没有合理的公理化。Visser 和 De Jonge（2006）通过证明一个推广结果，表明无法逃脱 Vardanyan 的定理：对于广泛的算术理论 T，谓词可证性逻辑的句子集合，所有实现都可以在 T 中证明，结果也是Π02-完全的。然而，最近 Borges 和 Joosten（2020, 2022）表明，基于严格正语言的谓词可证性逻辑的一个片段，其中包含命题连接词∧，模态运算符⬦和量词∀，是算术完全且仍然可判定的。

### 5.6 其他的概括

在上述讨论中没有涉及到可证性逻辑及其扩展中的许多其他重要研究领域。感兴趣的读者可以参考以下领域：

* 直觉算术的可证性逻辑（参见 Troelstra 1973; Visser 1982, 1999, 2002, 2008; Iemhoff 2000, 2001, 2003; Ardeshir and Mojtahedi 2018; Litak and Visser 2018, forthcoming; Mojtahedi 2022 [其他互联网资源]; Visser and Zoethout 2021; van der Giessen and Iemhoff 2021; van der Giessen 2023; Shillito 2023）被忽略了。
* 可证性逻辑的分类（参见 Visser 1980 年，Artemov 1985b 年，Beklemishev 1989 年，Beklemishev 等人 1999 年）；
* Rosser 排序和证明加速（参见 Guaspari 和 Solovay 1979 年，Švejdar 1983 年，Montagna 1992 年）；
* 含有不同理论的可证性算子的几种双模态可证性逻辑（参见 Carlson 1986 年；Smoryński 1985 年；Beklemishev 1994 年，1996 年；Visser 1995 年）；
* 可证性逻辑用于标准可证性与外部枚举 PA 的非常规可证性谓词的组合，例如 Feferman 和 Parikh 的可证性谓词和缓慢可证性谓词（参见 Feferman 1960; Parikh 1971; Montagna 1978; Visser 1989; Carbone 和 Montagna 1990; Shavrukov 1994; Lindström 1994, 2006; Henk 和 Pakhomov 2016（其他互联网资源））;
* 使用可证性和可解释性逻辑分析哥德尔的第二不完全性定理（Visser 2016; 2020）;
* 显式证明的逻辑（参见 Artemov 1994, 2001; Artemov 和 Montagna 1994; Yavorskaya 2001; Artemov 和 Iemhoff 2007; Kuznets 和 Studer 2019）;
* 可证性逻辑与证明逻辑之间的对应关系（参见 Artemov 和 Nogina 2005；Shamkanov 2016（其他互联网资源）；Fitting 2020）；
* 基于相关逻辑 R 的相关可证性逻辑（参见 Mares 2000）；
* 可证性逻辑在证明论中的应用（参见 Beklemishev 1999, 2003, 2004, 2005, 2006）；
* 可证性逻辑 GL 与命题模态逻辑的证明理论密切相关，即 Grzegorczyk 逻辑（Grz）和弱 Grzegorczyk 逻辑（wGrz）（参见 Litak 2007; Maksimova 2014; Goré和 Ramanayake 2014; Dyckhoff 和 Negri 2016; Savateev 和 Shamkanov 2019, 2021）；
* 正可证性逻辑和反射演算（见 Beklemishev 2012, 2014, 2018a, 2018b; Dashkov 2012）；
* 可证性逻辑 GLP 的推广，即具有无穷多个模态的可证性逻辑（见 Beklemishev 等人 2014; Fernández-Duque 和 Joosten 2013a, 2013b, 2014, 2018; Joosten 2021; Beklemishev 和 Pakhomov 2022）；
* 可证性逻辑与μ-演算之间的关系（参见 van Benthem 2006，Visser 2005，Alberucci 和 Facchini 2009）; 和
* 可证性代数，也称为对角化代数或 Magari 代数（参见 Magari 1975a，1975b；Montagna 1979，1980a，1980b；Bernardi 和 D'Aquino 1988；Shavrukov 1993a，1993b，1997；Zambella 1994；关于它们的基本理论的最新结果，请参见 Pakhomov 2012，2014a（其他互联网资源），2015。

对于希望为可证性逻辑及其推广领域做出贡献的读者，Beklemishev 和 Visser（2006）提出了一个有趣的开放问题的注释列表。

## 6. 哲学意义

尽管命题可证性逻辑是一种带有一种“必然性”运算符的模态逻辑，但它经受住了奎因（1976 年）对模态概念的争议性批评，因为它具有明确且明确的算术解释。例如，与许多其他模态逻辑不同，具有嵌套模态的公式，如□⬦p→□⊥，并不成问题，也没有关于哪些公式应该是重言式的争议。事实上，可证性逻辑体现了奎因（1953 年）为语法处理模态性所设定的所有期望。

然而，奎因的主要批评对象是模态谓词逻辑，特别是包含量词范围内的模态运算符的句子的构造（“量化内部”）。然而，在谓词可证性逻辑中，量词范围限于自然数，无论是 de dicto 还是 de re 模态都有直接的解释，与其他模态逻辑的情况相反（请参见关于 de dicto / de re 区别的注释）。例如，像这样的公式：

∀x□∃y(y=x)

一点都不成问题。如果将数字 n 分配给 x，则对于这个分配，当且仅当在 Peano 算术中可证明句子∃y(y=In)时，□∃y(y=x)为真；这里，In 是 n 的数字，即具有 n 个后继操作符 s 的术语 ss…s0。这个句子对于自然数的标准模型中的所有 n 都为真，并且∀x□∃y(y=x)甚至在 Peano 算术中是可证的。

顺便说一下，巴尔坎公式

∀x□A(x)→□∀xA(x)

对于整数来说，这个命题不是真的，更不用说可证了（例如，取 A(x)为“x 不编码一个⊥的证明”）。它的逆命题

□∀xA(x)→∀x□A(x)

另一方面，对于任何公式 A，可证性在 Peano 算术中是可证的。

可证性逻辑与其他模态逻辑有非常不同的原则，即使是那些看似相似的目的。例如，虽然可证性逻辑捕捉了算术形式理论中的可证性，认识论逻辑致力于描述知识，这可以被视为一种非正式的可证性。在许多版本的认识论逻辑中，最重要的原则之一是真理公理（5）：

S5 ⊢ □A→A，（如果一个人知道 A，则 A 是真的）。

类似的原则显然不适用于 GL：毕竟，

 如果 GL⊢□A→A，则 GL⊢A。

因此，将这两个概念的强度进行比较或将它们结合在一个模态系统中似乎是错误的。

自 20 世纪 40 年代以来，数学哲学家对非正式可证性或绝对可证性的概念产生了很大兴趣（哥德尔 1946 年，克雷塞尔 1967 年），包括对其适当定义的争议（参见利奇-克鲁斯 2013 年；肯尼迪 2014 年；克罗科 2019 年；对这些争议的很好讨论）。威廉姆森（2016 年）给出了以下定义：“数学假设是绝对可证的，当且仅当它原则上可以通过正常的数学过程来知道。”。无论如何，很明显，绝对可证性的概念与给定形式系统中的形式可证性的概念非常不同，后者是本文中关于可证性逻辑的核心概念。

与绝对可证陈述的概念相关的是绝对不可判定陈述的概念，即那些既不是绝对可证的陈述 A，也不是绝对可证的非 A。一个有趣的问题是哥德尔的析取是否成立：即“思维不能被机械化”或“存在绝对不可判定的陈述”是否成立？对这个问题的迷人观点可以在（科尔纳 2016 年，利奇-克鲁斯 2016 年，威廉姆森 2016 年）中找到。

对哥德尔不完备定理后果的讨论有时会涉及对可证性概念的混淆，从而产生人类可以在“知道”定理方面击败形式系统的说法；参见（戴维斯 1990 年，1993 年；弗兰森 1995 年；林德斯特伦 2001 年）对此类说法的良好批判性讨论。

总之，形式可证性是一个精确定义的概念，比真理和知识更加明确。因此，在可证性范围内的自我引用不会导致像谎言悖论那样的语义悖论。相反，它导致了一些关于数学的最重要的结果，比如哥德尔的不完全性定理。

## Bibliography

### General references on provability logic

* Artemov, S.N., 2006, “Modal Logic in Mathematics,” in P. Blackburn, et al. (eds.), *Handbook of Modal Logic*, Amsterdam: Elsevier, pp. 927–970.
* Artemov, S.N. and L.D. Beklemishev, 2004, “Provability Logic,” in *Handbook of Philosophical Logic*, Second Edition, D. Gabbay and F. Guenthner, eds., Volume 13, Dordrecht: Kluwer, pp. 229–403.
* Boolos, G., 1979, *The Unprovability of Consistency: An Essay in Modal Logic*, Cambridge: Cambridge University Press.
* –––, 1993, *The Logic of Provability*, New York and Cambridge: Cambridge University Press.
* de Jongh, D.H.J. and G. Japaridze, 1998, “The Logic of Provability,” in *Handbook of Proof Theory*, Buss, S.R. (ed.), Amsterdam: North-Holland, pp. 475-546.
* Lindström, P., 1996, “Provability Logic—A Short Introduction,” *Theoria*, 52(1–2): 19–61.
* Segerberg, K., 1971, *An Essay in Classical Modal Logic*, Uppsala: Filosofiska Föreningen och Filosofiska Institutionen vid Uppsala Universitet.
* Švejdar, V., 2000, “On Provability Logic,” *Nordic Journal of Philosophy*, 4: 95–116.
* Smoryński, C., 1984, “Modal Logic and Self-Reference,” in D.M. Gabbay and F. Guenthner (eds.), *Handbook of Philosophical Logic* (Volume II: Extensions of Classical Logic), Dordrecht: Springer, pp. 441–495.
* Smoryński, C., 1985, *Self-Reference and Modal Logic*, New York: Springer-Verlag.
* Verbrugge, R. 1996, “Provability” in *The Encyclopedia of Philosophy* (Supplement), D.M. Borchert (ed.), New York: Simon and Schuster MacMillan, pp. 476–478.
* Visser, A., 1998, “Provability Logic,” in *Routledge Encyclopedia of Philosophy*, W. Craig (ed.), London: Routledge, pp. 793–797.

### History

* van Benthem, J.F.A.K., 1978, “Four Paradoxes,” *Journal of Philosophical Logic*, 7(1): 49–72.
* Boolos, G. and G. Sambin, 1991, “Provability: The Emergence of a Mathematical Modality,” *Studia Logica*, 50(1): 1–23.
* Gödel, K., 1933, “Eine Interpretation des intuitionistischen Aussagenkalküls,” *Ergebnisse eines Mathematischen Kolloquiums*, 4: 39–40; translation “An Interpretation of the Intuitionistic Propositional Calculus,” in K. Gödel, *Collected Works*, S. Feferman et al. (eds.), Oxford and New York: Oxford University Press, Volume 1, 1986, pp. 300–302.
* –––, 1931, “Über Formal Unentscheidbare Sätze der Principia Mathematica und Verwandter Systeme I,” *Monatshefte für Mathematik und Physik*, 38: 173–198.
* Halbach, V., and A. Visser, 2014, “The Henkin Sentence,” in M. Mazano, I. Sain, and E. Alonso (eds.), *The Life and Work of Leon Henkin: Essays on His Contributions*, Dordrecht: Springer International Publishing, pp. 249–263.
* Henkin, L., 1952, “A Problem Concerning Provability,” *Journal of Symbolic Logic*, 17: 160.
* –––, 1954, “Review of G. Kreisel: On a Problem of Leon Henkin’s,” *Journal of Symbolic Logic*, 19(3): 219–220.
* Hilbert, D. and P. Bernays, 1939, *Grundlagen der Mathematik*, volume 2, Berlin/Heidelberg/New York: Springer-Verlag.
* de Jongh, D.H.J., forthcoming, “Notes on my Scientific Life,” in N. Bezhanishvili, R. Iemhoff and F. Yang (eds.), *Dick de Jongh on Intuitionistic and Provability Logic*, Cham: Springer.
* Kreisel, G., 1953, “On a Problem of Leon Henkin’s,” *Indagationes Mathematicae*, 15: 405–406.
* Lewis, C.I., 1912, “Implication and the Algebra of Logic,” *Mind*, 21: 522–531.
* Löb, M.H., 1955, “Solution of a Problem of Leon Henkin,” *Journal of Symbolic Logic*, 20: 115–118.
* Macintyre, A.J. and H. Simmons, 1973, “Gödel’s Diagonalization Technique and Related Properties of Theories,” *Colloquium Mathematicum*, 28: 165–180.
* Magari, R., 1975a, “The Diagonalizable Algebras,” *Bollettino della Unione Mathematica Italiana*, 12: 117–125.
* –––, 1975b, “Representation and Duality Theory for Diagonalizable Algebras,” *Studia Logica*, 34(4): 305–313.
* Smiley, T.J., 1963, “The Logical Basis of Ethics,” *Acta Philosophica Fennica*, 16: 237–246.
* Smoryński, C., 1991, “The Development of Self-reference: Löb’s Theorem,” in T. Drucker (ed.), *Perspectives on the History of Mathematical Logic*, Basel: Birkhäuser, pp. 110–133.

### Cut-elimination for provability logic

* Avron, A., 1984, “On Modal Systems Having Arithmetical Interpretations,” *The Journal of Symbolic Logic*, 49(3): 935–942.
* Bílková, M., 2016, “Uniform Interpolation in Provability Logics,” in J. van Eijck, R. Iemhoff, and J.J. Joosten (eds.), *Liber Amicorum Alberti: A Tribute to Albert Visser*, London: College Publications, pp. 57–90.
* Goré, R. and R. Ramanayake, 2008, “Valentini’s Cut-Elimination for Provability Logic Resolved,” in *Advances in Modal Logic* (Volume 7), C. Areces and R. Goldblatt (eds.), London: College Publications, pp. 67–86.
* Goré, R. and R. Ramanayake, 2012, “Valentini’s Cut-Elimination for Provability Logic Resolved,” *Review of Symbolic Logic*, 5(2): 212–238.
* Goré, R., Ramanayake, R., and Shillito, I., 2021, “Cut-Elimination for Provability Logic by Terminating Proof-Search: Formalised and Deconstructed Using Coq,” in *Automated Reasoning with Analytic Tableaux and Related Methods: 30th International Conference, TABLEAUX 2021*, Cham: Springer International Publishing, pp. 299–313.
* Maksimova, L.L., 1989a, “A Continuum of Normal Extensions of Modal Provability Logic with the Interpolation Property,” *Sibirskii Matematicheskii Zhurnal*, 30(6): 122–131.
* Maksimova, L.L., 1989b, “Definability Theorems in Normal Extensions of the Probability Logic,” *Studia Logica*, 48(4): 495–507.
* Negri, S., 2005, “Proof Analysis in Modal Logic,” *Journal of Philosophical Logic*, 50: 507–544.
* Negri, S., 2014, “Proofs and Countermodels in Non-classical Logics,” *Logica Universalis*, 8(1): 25–60.
* Poggiolesi, F., 2009, “A Purely Syntactic and Cut-free Sequent Calculus for the Modal Logic of Provability,” *The Review of Symbolic Logic*, 2(4): 593–611.
* Rautenberg, W., 1983, “Modal Tableau Calculi and Interpolation,” *Journal of Philosophical Logic*, 12(4): 403–423.
* Sambin, G., and S. Valentini, 1982, “The Modal Logic of Provability. The Sequential Approach,” *Journal of Philosophical Logic*, 11(3): 311–342.
* Shamkanov, D.S., 2011, “Interpolation Properties for Provability Logics GL and GLP,” *Proceedings of the Steklov Institute of Mathematics*, 274(1): 303–316.
* –––, 2014, “Circular Proofs for the Gödel-Löb Provability Logic,” *Mathematical Notes*, 96(4): 575–585.
* –––, 2020, “Non-well-founded Derivations in the Gödel-Löb Provability Logic,” *Review of Symbolic Logic*, 13(4): 776–796.
* Smoryński, C., 1978, “Beth’s Theorem and Self-referential Sentences,” *Studies in Logic and the Foundations of Mathematics*, 96: 253–261.
* Valentini, S., 1983, “The Modal Logic of Provability: Cut-Elimination,” *Journal of Philosophical Logic*, 12: 471–476.

### The fixed point theorem

* van Benthem, J., forthcoming, “An Abstract Look at the Fixed-Point Theorem for Provability Logic,” in N. Bezhanishvili, R. Iemhoff and F. Yang (eds.), *Dick de Jongh on Intuitionistic and Provability Logic*, Cham: Springer.
* de Jongh, D.H.J., and F. Montagna, 1988, “Provable Fixed Points,” *Zeitschrift fur mathematische Logik und Grundlagen der Mathematik*, 34(3): 229–250.
* Lindström, P., 2006, “Note on Some Fixed Point Constructions in Provability Logic,” *Journal of Philosophical Logic*, 35(3): 225–230.
* Reidhaar-Olson, L., 1990, “A New Proof of the Fixed-point Theorem of Provability Logic,” *Notre Dame Journal of Formal Logic*, 31(1): 37–43.
* Sambin, G., 1976, “An Effective Fixed Point Theorem in Intuitionistic Diagonalizable Algebras (The Algebraization of the Theories Which Express Theor, IX),” *Studia Logica* 35: 345–361.
* Sambin, G., and S. Valentini, 1982, “The Modal Logic of Provability. The Sequential Approach,” *Journal of Philosophical Logic*, 11(3): 311–342.

### Possible worlds semantics and topological semantics

* Abashidze, M., 1985, “Ordinal Completeness of the Gödel-Löb Modal System,” (in Russian) in *Intensional Logics and the Logical Structure of Theories*, Tbilisi: Metsniereba, pp. 49–73.
* Aiello, M., I. Pratt-Hartmann and J. van Benthem (eds.), 2007, *Handbook of Spatial Logics*, Berlin: Springer-Verlag.
* Beklemishev, L.D. 2009, “Ordinal Completeness of Bimodal Provability Logic GLB,” In *International Tbilisi Symposium on Logic, Language, and Computation*, Berlin: Springer-Verlag, pp. 1–15.
* Beklemishev, L.D., G. Bezhanishvili, and T. Icard, 2009, “On Topological Models of GLP,” in R. Schindler (ed.), *Ways of Proof Theory* (Ontos Mathematical Logic: Volume 2), Frankfurt: Ontos Verlag, pp. 133–153.
* van Benthem, J.F.A.K., 1979, “Syntactic Aspects of Modal Incompleteness Theorems,” *Theoria*, 45(2): 63–77.
* Blass, A., 1990, “Infinitary Combinatorics and Modal Logic,” *Journal of Symbolic Logic*, 55(2): 761–778.
* Esakia, L., 1981, “Diagonal Constructions, Löb’s Formula and Cantor’s Scattered Spaces,” (in Russian), in *Studies in Logic and Semantics*, Z. Mikeladze (ed.), Tbilisi: Metsniereba, pp. 128–143.
* –––, 2003, “Intuitionistic Logic and Modality via Topology,” *Annals of Pure and Applied Logic*, 127: 155–170.
* Goré, R., 2009, “Machine Checking Proof Theory: An Application of Logic to Logic,” In *ICLA ’09: Proceedings of the 3rd Indian Conference on Logic and Its Applications*, Berlin: Springer-Verlag, pp. 23–35.
* Hakli, R. and S. Negri, 2012, “Does the Deduction Theorem Fail for Modal Logic?,” *Synthese* 187(3): 849–867.
* Holliday, W.H. and Litak, T., 2019, “Complete Additivity and Modal Incompleteness,” *The Review of Symbolic Logic*, 12(3): 487–535.
* Icard, T.F. III, 2011, “A Topological Study of the Closed Fragment of GLP,” *Journal of Logic and Computation*, 21(4): 683–696; first published online 2009, doi:10.1093/logcom/exp043
* Japaridze, G.K., 1986, *The Modal Logical Means of Investigation of Provability*, Thesis in Philosophy (in Russian), Moscow.
* McKinsey, J.C.C. and A. Tarski, 1944, “The Algebra of Topology,” *Annals of Mathematics*, 45: 141–191.
* Shillito, I., 2023, *New Foundations for the Proof Theory of Bi-Intuitionistic and Provability Logics Mechanized in Coq*, Ph.D. Thesis, Canberra: The Australian National University.
* Verbrugge, R., 2021, “Zero-One Laws for Provability Logic: Axiomatizing Validity in Almost All Models and Almost All Frames,” in L. Libkin (ed.), *Proceedings of the 36th Annual ACM/IEEE Symposium on Logic in Computer Science (LICS)*, Rome: IEEE Press.

### Provability and Peano Arithmetic

* Davis, M., 1958, *Computability and Unsolvability*, New York, McGraw-Hill; reprinted with an additional appendix, New York, Dover Publications 1983.
* Feferman, S., 1960, “Arithmetization of Metamathematics in a General Setting,” *Fundamenta Mathematicae*, 49(1): 35–92.
* Hájek, P. and P. Pudlák, 1993, *Metamathematics of First-Order Arithmetic*, Berlin: Springer-Verlag.
* Solovay, R.M., 1976, “Provability Interpretations of Modal Logic,” *Israel Journal of Mathematics*, 25: 287–304.

### The scope of provability logic: boundaries

* Berarducci, A. and R. Verbrugge, 1993, “On the Provability Logic of Bounded Arithmetic,” *Annals of Pure and Applied Logic*, 61: 75–93.
* Buss, S.R., 1986, *Bounded Arithmetic*, Naples: Bibliopolis.
* de Jongh, D.H.J., M. Jumelet and F. Montagna, 1991, “On the Proof of Solovay’s Theorem,” *Studia Logica*, 50(1): 51–70.
* Parikh, R., 1971, “Existence and Feasibility in Arithmetic“, *The Journal of Symbolic Logic*, 36(3): 494–508.

### Interpretability logic

* Areces, C., Hoogland, E. and de Jongh, D.H.J., 2001, “Interpolation, Definability and Fixed-points in Interpretability Logics“, in M. Zakharyaschev, K. Segerberg, M. de Rijke and H. Wansing (eds.), *Advances in Modal Logic* (Volume 2), Stanford: CSLI Publications, pp. 35–58.
* Berarducci, A., 1990, “The Interpretability Logic of Peano Arithmetic,” *Journal of Symbolic Logic*, 55: 1059–1089.
* Bílková, M., de Jongh, D. and Joosten, J.J., 2009, “Interpretability in PRA,” *Annals of Pure and Applied Logic*, 161(2): 128–138.
* de Jongh, D.H.J., and F. Veltman, 1990, “Provability Logics for Relative Interpretability,” in P.P. Petkov (ed.), *Mathematical Logic: Proceedings of the Heyting 1988 Summer School in Varna, Bulgaria*, Boston: Plenum Press, pp. 31–42.
* de Jongh, D.H.J., and A. Visser, 1991, “Explicit Fixed Points in Interpretability Logic,” *Studia Logica*, 50(1): 39–49.
* Joosten, J.J., and Visser, A., 2000, “The Interpretability Logic of All Reasonable Arithmetical Theories,” *Erkenntnis*, 53(1-2): 3–26.
* Joosten, J.J., Mas Rovira, J., Mikec, L., and Vuković, M., forthcoming, “An Overview of Verbrugge Semantics, a.k.a. Generalised Veltman Semantics,” in N. Bezhanishvili, R. Iemhoff and F. Yang (eds.), *Dick de Jongh on Intuitionistic and Provability Logic*, Cham: Springer.
* Mikec, L. and Vuković, M., 2020, “Interpretability Logics and Generalised Veltman Semantics,” *The Journal of Symbolic Logic*, 85(2): 749–772.
* Montagna, F., 1987, “Provability in Finite Subtheories of PA,” *Journal of Symbolic Logic*, 52(2): 494–511.
* Shavrukov, V.Yu., 1988, “The Logic of Relative Interpretability over Peano Arithmetic,” Technical Report No. 5, Moscow: Steklov Mathematical Institute (in Russian).
* Švejdar, V., 1983, “Modal Analysis of Generalized Rosser Sentences,” *Journal of Symbolic Logic*, 48: 986–999.
* Visser, A., 1990, “Interpretability Logic,” in P.P. Petkov (ed.), *Mathematical Logic: Proceedings of the Heyting 1988 Summer School in Varna, Bulgaria*, Boston: Plenum Press, pp. 175–209.
* –––, 1998, “An Overview of Interpretability Logic,” in M. Kracht et al. (eds.), *Advances in Modal Logic* (Volume 1), Stanford: CSLI Publications, pp. 307–359.

### Propositional quantifiers

* Artemov, S.N. and L.D. Beklemishev, 1993, “On Propositional Quantifiers in Provability Logic,” *Notre Dame Journal of Formal Logic*, 34: 401–419.
* Shavrukov, V.Yu., 1997, “Undecidability in Diagonalizable Algebras,” *Journal of Symbolic Logic*, 62: 79–116.

### Japaridze’s bimodal and polymodal provability logics

* Beklemishev, L.D., 2004, “Provability Algebras and Proof-Theoretic Ordinals, I,” *Annals of Pure and Applied Logic*, 128: 103–123.
* –––, 2010a, “Kripke Semantics for Provability Logic GLP,” *Annals of Pure and Applied Logic*, 161(6): 756–774.
* –––, 2010b, “On the Craig Interpolation and the Fixed Point Properties of GLP,” in S. Feferman et al. (eds.), *Proofs, Categories and Computations* (Tributes, 13), London: College Publications, pp. 49–60.
* –––, 2011a, “A Simplified Proof of Arithmetical Completeness Theorem for Provability Logic GLP,” *Proceedings Steklov Institute of Mathematics*, 274(1): 25–33.
* –––, 2011b, “Ordinal Completeness of Bimodal Provability Logic GLB,” in N. Bezhanishvili et al. (eds.), *Logic, Language, and Computation, 8th International Tbilisi Symposium TbiLLC 2009* (Lecture Notes in Computer Science: Volume 6618), Heidelberg: Springer, pp. 1–15.
* Beklemishev, L.D., and D. Gabelaia, 2013, “Topological Completeness of the Provability Logic GLP,” *Annals of Pure and Applied Logic*, 164(12): 1201–1223.
* –––, 2014, “Topological Interpretations of Provability Logic,“ in G. Bezhanishvili (ed.), *Leo Esakia on Duality in Modal and Intuitionistic Logics* (Outstanding Contributions to Logic: Volume 4), Heidelberg: Springer, pp. 257–290.
* Beklemishev, L.D., J. Joosten and M. Vervoort, 2005, “A Finitary Treatment of the Closed Fragment of Japaridze’s Provability Logic,” *Journal of Logic and Computation*, 15(4): 447–463.
* Fernández-Duque, D. and J.J. Joosten, 2014, “Well-orders on the Transfinite Japaridze Algebra,” *Logic Journal of the IGPL*, 22 (6): 933–963.
* Fernández-Duque, D. and Joosten, J.J., 2018, “The Omega-Rule Interpretation of Transfinite Provability Logic,” *Annals of Pure and Applied Logic*, 169(4): 333–371.
* Ignatiev, K.N., 1993, “On Strong Provability Predicates and the Associated Modal Logics,” *Journal of Symbolic Logic*, 58: 249–290.
* Japaridze, G., 1988, “The Polymodal Provability Logic,” In *Intensional Logics and the Logical Structure of Theories: Material from the Fourth Soviet-Finnish Symposium on Logic*, Telavi, pp. 16–48.
* Pakhomov, F.N., 2014, “On the Complexity of the Closed Fragment of Japaridze’s Provability Logic,” *Archive for Mathematical Logic*, 53(7-8): 949–967.
* Shamkanov, D., 2020, “Global Neighbourhood Completeness of the Provability Logic GLP,” in N. Olivetti, R. Verbrugge, S. Negri, and G. Sandu (eds.), *Proceedings Advances in Modal Logic* (Volume 13), London: College Publications, pp. 581–595.

### Predicate provability logic

* Artemov, S.N., 1985a, “Nonarithmeticity of Truth Predicate Logics of Provability,” *Doklady Akademii Nauk SSSR*, 284: 270–271 (in Russian); English translation in *Soviet Mathematics Doklady*, 32: 403–405.
* Borges, A.A. and Joosten, J.J., 2020, “Quantified Reflection Calculus with One Modality,” in N. Olivetti, R. Verbrugge, S. Negri, and G. Sandu (eds.), *Proceedings Advances in Modal Logic* (Volume 13), London: College Publications, pp. 13–32.
* –––, 2022, “An Escape from Vardanyan’s Theorem,” *The Journal of Symbolic Logic*, first online 13 May 2022. doi:10.1017/jsl.2022.38
* Borges, A.A., 2022, “Towards a Coq Formalization of a Quantified Modal Logic,” in C. Benzmüller and J. Otten (eds.), *Proceedings of the 4th Workshop on Automated Reasoning in Quantified Non-Classical Logics (ARQNL 2022)*, CEUR Workshop Proceedings, pp. 13–27.
* McGee, V. and G. Boolos, 1987, “The Degree of the Set of Sentences of Predicate Provability Logic that are True under Every Interpretation,” *Journal of Symbolic Logic*, 52: 165–171.
* Montagna, F., 1984, “The Predicate Modal Logic of Provability,” *Notre Dame Journal of Formal Logic*, 25(2): 179–189.
* Rybakov, M., 2023, “Predicate Counterparts of Modal Logics of Provability: High Undecidability and Kripke Incompleteness,” *Logic Journal of the IGPL*, first online 28 February 2023. doi:10.1093/jigpal/jzad002
* Vardanyan, V.A., 1986, “Arithmetic Complexiy of Predicate Logics of Provability and their Fragments,” *Doklady Akademii Nauk SSSR*, 288: 11–14 (in Russian); English translation in *Soviet Mathematics Doklady*, 33: 569–572.
* Visser, A. and M. de Jonge, 2006, “No Escape from Vardanyan’s Theorem,” *Archive of Mathematical Logic*, 45(5): 539–554.

### Other generalizations

* Aguilera, J.P. and Fernández-Duque, D., 2017, “Strong Completeness of Provability Logic for Ordinal Spaces,” *The Journal of Symbolic Logic*, 82(2): 608–628.
* Alberucci, L., and A. Facchini, 2009, “On Modal μ-Calculus and Gödel-Löb logic,” *Studia Logica*, 91: 145–169.
* Ardeshir, M. and Mojtahedi, M., 2018, “The Σ1-Provability Logic of HA,” *Annals of Pure and Applied Logic*, 169(10): 997–1043.
* Artemov, S.N., 1985b,“On Modal Logics Axiomatizing Provability,” *Izvestiya Akadademii Nauk SSSR, Seriya Matematicheskaya*, 49(6): 1123–1154 (in Russian); English translation in *Mathematics of the USSR–Izvestiya*, 27(3): 402–429.
* –––, 1994, “Logic of Proofs,” *Annals of Pure and Applied Logic*, 67(2): 29–59.
* –––, 2001, “Explicit Provability and Constructive Semantics,” *Bulletin of Symbolic Logic*, 7: 1–36.
* Artemov, S.N. and R. Iemhoff, 2007, “The Basic Intuitionistic Logic of Proofs,” *Journal of Symbolic Logic*, 72(2): 439–451.
* Artemov, S.N. and F. Montagna, 1994, “On First-order Theories with Provability Operator,” *Journal of Symbolic Logic*, 59(4): 1139–1153.
* Artemov, S.N. and Nogina, E., 2005, “Introducing Justification into Epistemic Logic,” *Journal of Logic and Computation*, 15(6): 1059–1073.
* Beklemishev, L.D., 1989, “On the Classification of Propositional Provability Logics,” *Izvestiya Akademii Nauk SSSR, Seriya Matematicheskaya.*, 53(5): 915–943 (in Russian); English translation in *Mathematics of the USSR–Izvestiya*, 35 (1990) 247–275.
* –––, 1994, “On Bimodal Logics of Provability,” *Annals of Pure and Applied Logic*, 68: 115–160.
* –––, 1996, “Bimodal Logics for Extensions of Arithmetical Theories,” *Journal of Symbolic Logic*, 61: 91–124.
* –––, 1999, “Parameter-Free Induction and Provably Total Computable Functions,” *Theoretical Computer Science*, 224: 13–33.
* –––, 2003, “Proof-theoretic Analysis by Iterated Reflection,” *Archive for Mathematical Logic*, 6(42): 515–552.
* –––, 2005, “Reflection Principles and Provability Algebras in Formal Arithmetic,” *Uspekhi Matematicheskikh Nauk*, 60(2): 3–78. (in Russian); English translation in: *Russian Mathematical Surveys*, 60(2): 197–268.
* –––, 2006, “The Worm Principle,” in *Lecture Notes in Logic 27. Logic Colloquium ’02*, Z. Chatzidakis, P. Koepke, and W. Pohlers (eds.), Natick (MA): AK Peters, pp. 75–95.
* –––, 2012, “Calibrating Provability Logic: From Modal Logic to Reflection Calculus,” in T. Bolander, T. Braüner, S. Ghilardi, and L. Moss (eds.), *Advances in Modal Logic* (Volume 9), London: College Publications, pp. 89–94.
* –––, 2014, “Positive Provability Logic for Uniform Reflection Principles,” *Annals of Pure and Applied Logic*, 165 (1): 82–105.
* –––, 2018a, “A Note on Strictly Positive Logics and Word Rewriting Systems,” in S. Odintsov (ed.), *Larisa Maksimova on Implication, Interpolation, and Definability* (Outstanding Contributions to Logic: Volume 15), Cham: Springer, pp.61–70.
* –––, 2018b, “Reflection Calculus and Conservativity Spectra “, *Russian Mathematical Surveys*, 73(4): 569–613.
* Beklemishev, L.D., D. Fernández-Duque, and J.J. Joosten, 2014, “On Provability Logics with Linearly Ordered Modalities,” *Studia Logica*, 102(3): 541–566.
* Beklemishev, L. D., and Pakhomov, F. N., 2022, “Reflection Algebras and Conservation Results for Theories of Iterated Truth,” *Annals of Pure and Applied Logic*, 173(5): 103093.
* Beklemishev, L.D., M. Pentus and N. Vereshchagin, 1999, *Provability, Complexity, Grammars*, American Mathematical Society Translations (Series 2, Volume 192).
* Beklemishev, L.D. and A. Visser, 2006, “Problems in the Logic of Provability,” in D.M. Gabbay, S.S. Goncharov and M. Zakharyashev (eds.), *Mathematical Problems from Applied Logic I: Logics for the XXIst Century* (International Mathematical Series, Volume 4), New York: Springer, pp. 77–136.
* van Benthem, J., 2006, “Modal Frame Correspondences and Fixed-points,” *Studia Logica*, 83(1-3): 133–155.
* Bernardi, C. and D’Aquino, P., 1988, “Topological Duality for Diagonalizable Algebras“, *Notre Dame Journal of Formal Logic*, 29(3): 345–364.
* Carbone, A. and Montagna, F., 1990, “Much Shorter Proofs: A Bimodal Investigation,” *Mathematical Logic Quarterly*, 36(1): 47–66.
* Carlson, T., 1986, “Modal Logics with Several Operators and Provability Interpretations,” *Israel Journal of Mathematics*, 54(1): 14–24.
* Dashkov, E.V., 2012, “On the Positive Fragment of the Polymodal Provability Logic GLP,” *Mathematical Notes*, 91 (3): 318–333.
* Dyckhoff, R and Negri, S., 2016, A Cut-free Sequent System for Grzegorczyk Logic, with an Application to the Gödel–McKinsey–Tarski Embedding, *Journal of Logic and Computation*, 26: 169–187.
* Fernández-Duque, D., 2014, “The Polytopologies of Transfinite Provability Logic,“ *Archive for Mathematical Logic*, 53(3-4): 385–431.
* Fernández-Duque, D. and J.J. Joosten, 2013a, “Hyperations, Veblen Progressions, and Transfinite Iteration of Ordinal Functions,” *Annals of Pure and Applied Logic* 164 (7-8): 785–801, [[available online](http://www.sciencedirect.com/science/article/pii/S0168007213000109)].
* Fernández-Duque, D. and J.J. Joosten, 2013b, “Models of Transfinite Provability Logic,” *Journal of Symbolic Logic*, 78(2): 543–561, [[available online](http://projecteuclid.org/DPubS?service=UI&version=1.0&verb=Display&handle=euclid.jsl/1368627064)].
* van der Giessen, I., 2023, “Admissible Rules for Six Intuitionistic Modal Logics,” *Annals of Pure and Applied Logic*, 174(4): 103233.
* van der Giessen, I. and Iemhoff, R., 2021, “Sequent Calculi for Intuitionistic Gödel–Löb Logic,” *Notre Dame Journal of Formal Logic*, 62(2): 221–246.
* Goré, R and Ramanayake, R., 2014, “Cut-elimination for Weak Grzegorczyk Logic Go,” *Studia Logica*, 102(1): 1–27.
* Guaspari, D. and R.M. Solovay, 1979, “Rosser Sentences,” *Annals of Mathematical Logic*, 16: 81–99.
* Iemhoff, R., 2000, “A Modal Analysis of some Principles of the Provability Logic of Heyting Arithmetic,” in *Advances in Modal Logic* (Volume 2), M. Zakharyashev et al. (eds.), Stanford: CSLI Publications, pp. 319–354.
* –––, 2001, “On the Admissible Rules of Intuitionistic Propositional Logic,” *Journal of Symbolic Logic*, 66: 281–294.
* –––, 2003, “Preservativity Logic: An Analogue of Interpretability Logic for Constructive Theories,” *Mathematical Logic Quarterly*, 49(3): 1–21.
* Iemhoff, R., de Jongh, D. and Zhou, C., 2005, “Properties of Intuitionistic Provability and Preservativity Logics,” *Logic Journal of the IGPL*, 13(6): 615–636.
* Joosten, J.J., 2021, “Münchhausen Provability,” *The Journal of Symbolic Logic*, 86(3): 1006–1034.
* Kuznets, R. and Studer, T., 2019, *Logics of Proofs and Justifications*, London: College Publications.
* Lindström, P., 1994, “The Modal Logic of Parikh Provability,” *Filosofiska Meddelanden*, Gröna Serien, Gothenburg: Göteborgs Universitetet.
* Lindström, P., 2006, “On Parikh Provability: An Exercise in Modal Logic,” in H. Lagerlund, S. Lindström, and R. Sliwinski (eds.), *Modality Matters: Twenty-Five Essays in Honour of Krister Segerberg*, Uppsala: Uppsala Philosophical Studies (Volume 53), pp. 53–287.
* Litak, L., 2007, “The Non-Reflexive Counterpart of Grz,” *Bulletin of the Section of Logic*, 36(3–4): 195–208.
* Litak, T. and Visser, A., 2018, “Lewis Meets Brouwer: Constructive Strict Implication,” *Indagationes Mathematicae*, 29(1): 36–90.
* –––, forthcoming, “Lewisian Fixed Points I: Two Incomparable Constructions,” in N. Bezhanishvili, R. Iemhoff and F. Yang (eds.), *Dick de Jongh on Intuitionistic and Provability Logic*, Cham: Springer.
* Maksimova, L.L., 2014, “The Lyndon Property and Uniform Interpolation over the Grzegorczyk Logic,” *Siberian Mathematical Journal*, 55(1): 118–124.
* Mares, E.D., 2000, “The Incompleteness of RGL,” *Studia Logica*, 65: 315–322.
* Mojtahedi, M., forthcoming, “The Σ1-provability logic of HA revisited,” in N. Bezhanishvili, R. Iemhoff and F. Yang (eds.), *Dick de Jongh on Intuitionistic and Provability Logic*, Cham: Springer.
* Montagna, F.,1978, “On the algebraization of a Feferman’s predicate,” *Studia Logica*, 37(3): 221–236.
* –––, 1979, “On the Diagonalizable Algebra of Peano Arithmetic,” *Bollettino della Unione Matematica Italiana*, B(5), 16: 795–812.
* –––, 1980a, “Interpretations of the First-order Theory of Diagonalizable Algebras in Peano Arithmetic,” *Studia Logica*, 39: 347–354.
* –––, 1980b, “Undecidability of the First-order Theory of Diagonalizable Algebras, ” *Studia Logica*, 39: 355–359.
* –––, 1992, “Polynomially and Superexponentially Shorter Proofs in Fragments of Arithmetic,” *Journal of Symbolic Logic*, 57: 844–863.
* Pakhomov, F.N., 2012, “Undecidability of the Elementary Theory of the Semilattice of GLP-words,” *Sbornik: Mathematics*, 203(8): 1211.
* Pakhomov, F.N., 2015, “On Elementary Theories of Ordinal Notation Systems Based on Reflection Principles,” *Proceedings of the Steklov Institute of Mathematics*, 289: 194–212.
* Savateev, Y., and Shamkanov, D., 2019, “Cut Elimination for the Weak Modal Grzegorczyk Logic via Non-well-founded Proofs,” in R. Iemhoff, M. Moortgat, M. and R. de Queiroz (eds.), *Proceedings of WoLLIC 2019*, Heidelberg: Springer, pp. 569–583.
* –––, 2021, “Non-well-founded Proofs for the Grzegorczyk Modal Logic,” *The Review of Symbolic Logic*, 14(1): 22–50.
* Shamkanov, D.S., 2016, “A Realization Theorem for the Gödel–Löb Provability Logic,” *Sbornik: Mathematics*, 207(9): 1344–1360.
* Shapirovsky, I., 2008, “PSPACE-decidability of Japaridze’s Polymodal Logic,” *Advances in Modal Logic*, 7: 289–304.
* Shavrukov, V.Yu., 1993a, “A Note on the Diagonalizable Algebras of PA and ZF,” *Annals of Pure and Applied Logic*, 61: 161–173.
* –––, 1993b, “Subalgebras of Diagonalizable Algebras of Theories Containing Arithmetic,” *Dissertationes Mathematicae*, 323.
* –––, 1994, “A Smart Child of Peano’s,” *Notre Dame Journal of Formal Logic*, 35(2): 161–185.
* Troelstra, A.S., 1973, *Metamathematical Investigation of Intuitionistic Arithmetic and Analysis*, Berlin: Springer-Verlag.
* Visser, A., 1980, *Aspects of Diagonalization and Provability*, Ph.D. Thesis, Utrecht: University of Utrecht.
* –––, 1982, “On the Completeness Principle: A Study of Provability in Heyting’s Arithmetic and Extensions,” *Annals of Mathematical Logic*, 22(3): 263–295.
* –––, 1989, “Peano’s Smart Children: A Provability Logical Study of Systems with Built-in Consistency,” *Notre Dame Journal of Formal Logic*, 30(2): 161–196.
* –––, 1995, “A Course on Bimodal Provability Logic,” *Annals of Pure and Applied Logic*, 73(1): 109–142.
* –––, 1999, “Rules and Arithmetics,” *Notre Dame Journal of Formal Logic*, 40(1): 116–140.
* –––, 2002, “Substitutions of Σ1 Sentences: Explorations between Intuitionistic Propositional Logic and Intuitionistic Arithmetic,” *Annals of Pure and Applied Logic*, 114: 227–271.
* –––, 2005, “Löb’s Logic Meets the μ-Calculus,” in A. Middeldorp, V. van Oostrom, F. van Raamsdonk and R. de Vrijer (eds.), *Processes, Terms and Cycles: Steps on the Road to Infinity*, Berlin: Springer, pp. 14–25.
* –––, 2008, “Closed Fragments of Provability Logics of Constructive Theories,” *Journal of Symbolic Logic*, 73: 1081–1096.
* –––, 2016, “The Second Incompleteness Theorem: Reflections and Ruminations,” in L. Horsten and P. Welch (eds.), *Gödel’s Disjunction: The Scope and Limits of Mathematical Knowledge*, Oxford: Oxford University Press, pp. 67–91.
* –––, 2020, “Another Look at the Second Incompleteness Theorem,” *The Review of Symbolic Logic*, 13(2): 269–295.
* Visser, A. and Zoethout, J., 2019, “Provability Logic and the Completeness Principle,” *Annals of Pure and Applied Logic*, 170(6): 718–753.
* Yavorskaya, T., 2001, “Logic of Proofs and Provability,” *Annals of Pure and Applied Logic*, 113(1-3): 345–372.
* Zambella, D., 1994, “Shavrukov’s Theorem on the Subalgebras of Diagonalizable Algebras for Theories Containing IΔ0+exp,” *Notre Dame Journal of Formal Logic*, 35: 147–157.

### Philosophical significance

* Crocco, G., 2019, “Informal and Absolute Proofs: Some Remarks from a Gödelian Perspective,” *Topoi*, 38: 561–575.
* Davis, M., 1990, “Is Mathematical Insight Algorithmic?,” Commentary on Roger Penrose, The Emperor’s New Mind, *Behavioral and Brain Sciences*, 13: 659–660.
* –––, 1993, “How Subtle is Gödel’s Theorem? More on Roger Penrose” (Commentary on Roger Penrose, The Emperor’s New Mind), *Behavioral and Brain Sciences*, 16: 611–612.
* Egré, P., 2005, “The Knower Paradox in the Light of Provability Interpretations of Modal Logics,” *Journal of Logic, Language, and Information*, 14(1): 13–48.
* Franzén, T., 2005, *Gödel’s Theorem: An Incomplete Guide to its Use and Abuse*, Boca Raton, Florida: CRC Press.
* Gödel, K., 1946, “Remarks Before the Princeton Bicentennial Conference on Problems in Mathematics,” reprinted in S. Feferman et al. (eds.), *Kurt Gödel Collected Works, Volume II: Publications 1938–1975*, New York, Oxford: Oxford University Press, 1990, pp. 150–153.
* Kaplan, D. and R. Montague, 1960, “A Paradox Regained,” *Notre Dame Journal of Formal Logic*, 1(3): 79–90.
* Kennedy, J., 2014, “Gödel’s 1946 Princeton Bicentennial Lecture: An Appreciation,” in J. Kennedy (ed.), *Interpreting Gödel: Critical Essays*, Cambridge: Cambridh=ge University Press, pp.109–130.
* Koellner, P., 2016, “Gödel’s Disjunction,” in L. Horsten and P. Welch (eds.), *Gödel’s Disjunction: The Scope and Limits of Mathematical Knowledge*, Oxford: Oxford University Press, pp. 148–188.
* Kreisel, G., 1967, “Informal Rigour and Completeness Proofs,” in I. Lakatos (ed.), *Problems in the Philosophy of Mathematics*, Amsterdam: North-Holland, pp. 138–157.
* Leach-Krouse, G.E., 2013, “Conceptions of Absolute Provability,” Ph.D. Thesis, Note Dame: Notre Dame University.
* Leach-Krouse, G.E., 2016, “Provability, Mechanism, and the Diagonal Problem,” in L. Horsten and P. Welch (eds.), *Gödel’s Disjunction: The Scope and Limits of Mathematical Knowledge*, Oxford: Oxford University Press, pp. 211–242.
* Lindström, P, 2001, “Penrose’s New Argument,” *Journal of Philosophical Logic*, 30: 241–250.
* Montague, R., 1963, “Syntactical Treatments of Modality, with Corollaries on Reflection Principles and Finite Axiomatizability,” *Acta Philosophica Fennica*, 16: 153–67.
* Quine, W.V., 1966, “Necessary Truth,” in Quine, W.V., *The Ways of Paradox and Other Essays*, New York: Random House, pp. 48–56.
* –––, 1953, “Three Grades of Modal Involvement,” in *Proceedings of the 11th International Congress of Philosophy*, Amsterdam: North-Holland, pp. 65-81; reprinted in W.V. Quine, *The Ways of Paradox and Other Essays*, New York: Random House, 1966, pp. 156–174.
* de Vos, M., Verbrugge, R., and Kooi, B., 2023, “Solutions to the Knower Paradox in the Light of Haack’s Criteria,” *Journal of Philosophical Logic*, 52: 1101–1132.
* Williamson, T., 2016, “Absolute Provability and Safe Knowledge of Axioms,” in L. Horsten and P. Welch (eds.), *Gödel’s Disjunction: The Scope and Limits of Mathematical Knowledge*, pp. 243–253.

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-provability). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-provability/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-provability&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](https://philpapers.org/sep/logic-provability/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

### Papers and Presentations

* Férée, H., I. van der Giessen, S. van Gool, and I. Shillito, 2024, “[Mechanised Uniform Interpolation for Modal Logics K, GL and iSL](https://arxiv.org/abs/2402.10494)”, manuscript at arxiv.org.
* Fitting, M., 2020, “[A Second GL Justification Logic](https://id144254.securedata.net/melvinfitting/bookspapers/pdf/papers/GLJustification.pdf),” manuscript available on the author’s website.
* Goré, R. and J. Kelly, 2007, “[Automated Proof Search in Gödel-Löb Provability Logic](https://www.dcs.bbk.ac.uk/~roman/blc/gore-kelly-provability.pdf),” presented at the [British Logic Colloquium](http://www.dcs.bbk.ac.uk/~roman/blc/) 2007.
* Henk, P., and Pakhomov, F., 2016, “[Slow and Ordinary Provability for Peano Arithmetic](https://arxiv.org/pdf/1602.01822v2.pdf),” manuscript at arxiv.org.
* Mojtahedi, M., 2022, “[On Provability Logic of HA](https://arxiv.org/abs/2206.00445),” manuscript at arxiv.org.
* Pakhomov, F., 2014a, “[On Elementary Theories of GLP-algebras](http://arxiv.org/abs/1412.4439),” manuscript at arxiv.org.
* Verbrugge, Rineke, [Presentation slides on provability logic](https://rinekeverbrugge.nl/wp-content/uploads/2017/02/VerbruggeProvability-Logic-clc11-1.pdf), slides, University of Groningen
* Visser, Albert, 1986, [On formal provability versus human provability](https://www.phil.uu.nl/onderwijs/cki/cki10/cki/slides/lucasac.pdf) (in Dutch), online manuscript, University of Utrecht.

### Other Sites

* [Open problems in Provability Logic](http://www.mi.ras.ru/~bekl/problems.html), maintained by Lev Beklemishev
* [Mailing list Foundations of Mathematics](http://www.cs.nyu.edu/mailman/listinfo/fom/), New York University

## Related Entries

[artificial intelligence: logic-based](https://plato.stanford.edu/entries/logic-ai/) | [computability and complexity](https://plato.stanford.edu/entries/computability/) | [Curry’s paradox](https://plato.stanford.edu/entries/curry-paradox/) | [Fitch’s paradox of knowability](https://plato.stanford.edu/entries/fitch-paradox/) | [Gödel, Kurt](https://plato.stanford.edu/entries/goedel/) | [Gödel, Kurt: incompleteness theorems](https://plato.stanford.edu/entries/goedel-incompleteness/) | [Hilbert, David: program in the foundations of mathematics](https://plato.stanford.edu/entries/hilbert-program/) | [logic, history of: modal logic](https://plato.stanford.edu/entries/logic-modal-origins/) | [logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [logic: epistemic](https://plato.stanford.edu/entries/logic-epistemic/) | [logic: intuitionistic](https://plato.stanford.edu/entries/logic-intuitionistic/) | [logic: justification](https://plato.stanford.edu/entries/logic-justification/) | [logic: modal](https://plato.stanford.edu/entries/logic-modal/) | [logic: relevance](https://plato.stanford.edu/entries/logic-relevance/) | [mathematics, philosophy of](https://plato.stanford.edu/entries/philosophy-mathematics/) | [mathematics: constructive](https://plato.stanford.edu/entries/mathematics-constructive/) | [model theory](https://plato.stanford.edu/entries/model-theory/) | [possible worlds](https://plato.stanford.edu/entries/possible-worlds/) | [*Principia Mathematica*](https://plato.stanford.edu/entries/principia-mathematica/) | [proof theory: development of](https://plato.stanford.edu/entries/proof-theory-development/) | [Quine, Willard Van Orman](https://plato.stanford.edu/entries/quine/) | [self-reference](https://plato.stanford.edu/entries/self-reference/) | [set theory: independence and large cardinals](https://plato.stanford.edu/entries/independence-large-cardinals/) | [Turing, Alan](https://plato.stanford.edu/entries/turing/)

### Acknowledgments

I would like to express my immense gratitude to Lev Beklemishev, who was so kind as to write me a long letter in 2017, including many literature references to developments in provability logic as seen from his perspective. Thanks are also due to Albert Visser, Sara Uckelman, Rajeev Goré, Giovanni Sambin, Vítězslav Švejdar, Sara Negri, Joost Joosten, Ian Shillito, Wesley Holliday, Revantha Ramanayake, Anupam Das, Shawn Standefer, Toby Meadows, Edson Bezerra, Nils Kürbis, and Tadeusz Litak for their suggestions of improvements and additions to the 2017 and/or 2024 versions of this article.

This 2024 version of the article on provability logic is dedicated to the memory of three Nestors of provability logic and the meta-mathematics of first-order arithmetic: Franco Montagna (1948–2015), Sol Feferman (1928–2016), and Petr Hájek (1940–2016).

[Copyright © 2024](https://plato.stanford.edu/info.html#c) by  
[Rineke (L.C.) Verbrugge](https://rinekeverbrugge.nl/) <[*L.C.Verbrugge@rug.nl*](mailto:L%2eC%2eVerbrugge%40rug%2enl)>
