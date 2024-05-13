# 线性逻辑 linear (Roberto Di Cosmo and Dale Miller)

*首次发表于 2006 年 9 月 6 日星期三；实质性修订于 2023 年 9 月 16 日星期六。*

线性逻辑是经典逻辑和直觉逻辑的一种细化。与经典逻辑强调真理或直觉逻辑强调证明不同，线性逻辑强调公式作为资源的作用。为了实现这个重点，线性逻辑不允许常规的收缩和弱化结构规则适用于所有公式，而只允许适用于特定模态标记的公式。线性逻辑包含一个完全的对偶否定，同时保持强有力的建设性解释。线性逻辑还为经典逻辑和直觉逻辑中证明的性质提供了新的见解。由于其对资源的关注，线性逻辑在计算机科学中找到了许多应用。

---

## 1. 引言

### 1.1 一点历史

线性逻辑是由让-伊夫·吉拉尔德（Jean-Yves Girard）在他的开创性著作中引入的（Girard 1987）。虽然这种新逻辑的发现起源于对 System F（或多态 λ 演算）模型的语义分析，但整个线性逻辑系统可以被视为一种大胆的尝试，旨在将德摩根的对偶性所提供的经典逻辑的美感和对建设性证明的追求相结合，而这种追求导致了直觉主义逻辑的产生。

的确，人们可以将线性逻辑的一个片段，即乘法加法线性逻辑（MALL），视为两个简单观察的结果。

* 在经典逻辑的序列演算表达中，“与”和“或”连接词的规则，以及割断规则和蕴涵规则可以等价地以加法形式（前提的上下文相同）或乘法形式（前提的上下文不同）呈现。这两种表达在经典逻辑中是等价的，因为有一些所谓的“结构”规则可用，即收缩和弱化规则。
* 贡岑使用序列演算来捕捉经典逻辑和直觉逻辑的证明，证明非构造性证明在序列的结论（后继者）中使用了这些结构规则之一。

因此，如果我们想在不破坏序列演算的对称性的情况下消除非构造性证明，就像直觉逻辑中所做的那样，我们可以尝试消除收缩和弱化规则。这样做后，我们将得到每个连接词的两个不同版本：加法版本和乘法版本的合取和析取。这些相同连接词的不同版本现在不再等价。这些新的连接词是&（“与”，加法和）、⊕（“加”，加法或）、⊗（“张量”，乘法和）和 ⅋（“并行”，乘法或）。

这种联结词的重复实际上导致了对经典逻辑和直觉逻辑之间冲突的更清晰的理解。例如，排中律（A 或非 A）在经典世界中被认为是有效的，在直觉主义世界中则是荒谬的。但在线性逻辑中，这个定律有两种解读：加法版本（A⊕¬A）是不可证明的，对应于直觉主义对析取的解读；乘法版本（A⅋¬A）是显然可证明的，只是对应于直觉逻辑中也完全可接受的重言式（A 蕴含 A）。

此外，在构造主义中，对于加法析取，易于建立析取性质。

我们在这个更丰富的逻辑中找到了一种同时代表直觉主义需求和经典逻辑优雅的方式：否定是自反的，推理是对称的，联结词是相互定义的。将这些特性与直觉主义逻辑的特性进行对比，其中否定不是自反的，推理不是对称的，联结词 ¬、∧、∨、⇒ 都不是相互定义的。

注意，一旦消除了收缩和弱化规则，公式就不再表现为真值。实际上，如果我们组合了一个 A⇒B 的证明和一个没有这些结构规则的 A 的证明，我们会消耗它们来得到一个 B 的证明：也就是说，在组合之后，A⇒B 和 A 不再可用。线性逻辑公式更像是只能以受限方式使用的资源。

为了恢复直觉主义和经典逻辑的完整表达能力，需要在 MALL 片段中添加两个对偶的模态，通常在线性逻辑文献中称为指数。特别是，“当然”指数！允许在左手序列上下文中对公式！B 应用收缩和弱化，而“为什么不”指数？允许在右手序列上下文中对公式？B 应用收缩和弱化。这导致了完整的命题线性逻辑，并与计算机科学有着非常好的联系。

注意，除了 MALL 之外，还有另外两个广泛使用的线性逻辑片段：乘法线性逻辑（MLL），即没有加法连接词的 MALL；以及乘法指数线性逻辑（MELL），即没有加法连接词的线性逻辑。

Gentzen 的序列演算证明系统用于直觉逻辑是将他的经典逻辑序列演算限制为所有序列最多包含一个公式的结果（Gentzen 1935）。这种单一结论的限制也可以在线性逻辑的背景下探索。各种研究人员已经考虑了 MLL、MALL 和 MELL 的直觉变体：例如，IMLL（Lamarche 1996）、IMALL（Lincoln 等人 1993）和 IMELL（Dal Lago 和 Laurent 2008）。Schellinx（1991）提供了一些关于经典线性逻辑在相应的直觉变体上的一般保守性结果：另请参阅（Troelstra 1992）。

在 1987 年引入线性逻辑之前，各种研究人员一直在研究各种类型的子结构逻辑，其中不接受 Gentzen 的所有结构规则（收缩、弱化和交换）。Lambek 研究了一种序列演算证明系统，其中不允许使用这些结构规则（Lambek 1958）。这类逻辑的其他例子包括相关逻辑（不接受弱化）（Anderson＆Belnap 1975，Anderson 等人 1992，Avron 1988，Read 1988）和仿射逻辑（不接受收缩）（Grishin 1981）。

### 1.2 线性逻辑与计算机科学

当人们看到将 A⇒B 解读为“如果你给我一个 A，我会给你一个 B”的可能性时，直觉主义和构造逻辑的计算机科学开发开始了，这与经典解读“A 为假或 B 为真”有了显著的不同。

线性逻辑在解读“A⇒B”时提供了进一步的转折：现在它可以被解读为“给我尽可能多的 A，我会给你一个 B”。复制的概念对于计算的思想至关重要，现在已经融入到逻辑中。这种新的观点开辟了新的可能性，包括：

* 表达精细操作属性的新公式，例如“给我一个 A，我会给你一个 B”。应用范围从精细逻辑编程（利用线性逻辑表示状态）（Hodas＆Miller，1994），到经典逻辑及其计算解释的分析（Abramsky，1993），到编程语言中的异常机制规范（Miller，1996），以及线性分析（Wadler，1991）。
* 表达对使用副本的约束的新规则，导致了一个线性逻辑的片段，仅提及最引人注目的应用（Baillot＆Terui，2004 年，Baillot 2015 年）。
* 表示证明的新方法（Abramsky＆Jagadeesan，1994 年，Girard 1987 年）。

## 2. 证明系统

线性逻辑的核心命题连接词分为加法连接词和乘法连接词。经典的合取及其恒等式 ∧ 和 ⊤ 分为加法&（与）和 ⊤（顶）以及乘法 ⊗（张量）和 1（一）。类似地，经典的析取及其恒等式 ∨ 和 ⊥ 分为加法 ⊕（直和）和 0（零）以及乘法 ⅋（并）和 ⊥（底）。在线性逻辑的演示中，否定通常以两种方式之一处理。否定可以被视为原始命题连接词，其在公式中的出现没有任何限制。由于德摩根对偶性存在于否定和所有命题连接词、指数和量词之间，也可以将否定视为仅出现在原子公式中的特殊符号。蕴涵也常常通过定义引入到线性逻辑中：线性蕴涵 B−∘C 可以定义为 B⊥⅋C，而直觉蕴涵 B⇒C 可以定义为!B−∘C。运算符!和?可以称为模态或指数。术语“指数”特别合适，因为根据指数、加法和乘法之间的通常关系，线性逻辑支持等价关系!(B&C)≡(!B⊗!C)和?(B⊕C)≡(?B⅋?C)，以及这些等价关系的 0 元版本，即(!⊤≡1)和(?0≡⊥)。在这里，我们使用二元等价关系 B≡C 表示在线性逻辑中可以推导出公式(B−∘C)&(C−∘B)。

### 2.1 线性逻辑的序列演算

下图展示了线性逻辑的双侧序列演算。请注意，这里将否定视为任何其他逻辑连接词一样处理：即，公式中的否定出现没有限制，并且左侧和右侧都有否定的引入规则。序列的左侧和右侧是公式的多重集合：因此，这些上下文中的公式顺序无关紧要，但它们的重复次数是重要的。

身份规则 B⊢B initΔ1⊢B,Γ1Δ2,B⊢Γ2Δ1,Δ2⊢Γ1,Γ2 cut

否定规则 Δ⊢B,ΓΔ,B⊥⊢Γ (⋅)⊥LΔ,B⊢ΓΔ⊢B⊥,Γ (⋅)⊥R

乘法规则 Δ⊢ΓΔ,1⊢Γ 1L⊢1 1R⊥⊢ ⊥LΔ⊢ΓΔ⊢⊥,Γ ⊥RΔ,B1,B2⊢ΓΔ,B1⊗B2⊢Γ ⊗LΔ1⊢B1,Γ1Δ2⊢B2,Γ2Δ1,Δ2⊢B1⊗B2,Γ1,Γ2 ⊗RΔ1,B1⊢Γ1Δ2,B2⊢Γ2Δ1,Δ2,B1⅋B2⊢Γ1,Γ2 ⅋LΔ⊢B1,B2,ΓΔ⊢B1⅋B2,Γ ⅋R

添加规则 Δ,0⊢Γ 0LΔ⊢⊤,Γ ⊤RΔ,Bi⊢ΓΔ,B1&B2⊢Γ &L (i=1,2)Δ⊢B1,ΓΔ⊢B2,ΓΔ⊢B1&B2,Γ &RΔ,B1⊢ΓΔ,B2⊢ΓΔ,B1⊕B2⊢Γ ⊕LΔ⊢Bi,ΓΔ⊢B1⊕B2,Γ ⊕R (i=1,2)

量词规则 Δ,B [t/x] ⊢ΓΔ,∀x.B⊢Γ ∀LΔ⊢B [y/x],ΓΔ⊢∀x.B,Γ ∀RΔ⊢B [t/x],ΓΔ⊢∃x.B,Γ ∃RΔ,B [y/x] ⊢ΓΔ,∃x.B⊢Γ ∃L,

指数规则 Δ⊢ΓΔ,!B⊢Γ !WΔ,!B,!B⊢ΓΔ,!B⊢Γ !CΔ,B⊢ΓΔ,!B⊢Γ !D!Δ⊢B,?Γ!Δ⊢!B,?Γ !RΔ⊢ΓΔ⊢?B,Γ ?WΔ⊢?B,?B,ΓΔ⊢?B,Γ ?CΔ⊢B,ΓΔ⊢?B,Γ ?D!Δ,B⊢?Γ!Δ,?B⊢?Γ ?L

注意，弱化和收缩规则仅适用于在序列的左侧标有指数！或右侧标有？的公式。?R 和！L 规则通常被称为“遗弃”规则。?L 和！R 规则通常被称为“提升”规则，并类似于在处理 S4 模态逻辑中使用的序列演算规则（Ono 1998）。假定 ∀-right 和 ∃-left 引入规则的常规规定; 特别是，变量 y 不能在这些推理规则的下序列的公式中自由出现。这里假设量化是一阶的。Girard 在他 1987 年的论文中提出了线性逻辑的高阶版本。

割规则可以被消除，完备性仍然保持。相反，除了涉及原子公式的 init 出现之外，init 规则也可以被消除。

### 2.2 焦点证明

一个关于无割证明结构的重要正常形式定理是由 Andreoli（1992）提供的。他将非原子公式分为异步的和同步的。如果其顶层逻辑连接词是 ⊤、&、⊥、⅋、?或 ∀，则称之为异步；如果其顶层逻辑连接词是 0、⊕、1、⊗、!或 ∃，则称之为同步。

当将证明搜索视为一种计算模型时，我们考虑推理规则如何将一个序列作为其结论转化为前提。因此，我们可以将序列中的公式视为“代理”，它们可以独立地或与环境中的其他代理协同工作。在这里，这些代理的行为是通过自下而上地阅读其引入规则来确定的。如果一个异步公式出现在一个序列的右侧，它可以在不影响可证性且不与其上下文交互的情况下演化，即相应的引入规则是可逆的。例如，代理(B⅋C)通过应用 ⅋-右引入规则变为两个代理 B 和 C（现在并行工作）。同样，代理(B&C)通过应用&-右引入规则产生两个完全相同的世界（序列），只是其中一个世界中有 B，另一个世界中有 C。

另一方面，如果我们将同步公式视为一个代理，其演化是通过自下而上地阅读相应的右引入规则来确定的，那么一个可证的序列可能演化为一个不可证的序列（例如，通过应用 ⊕-右引入规则）。此外，这些推理规则的实例取决于公式的上下文细节。例如，1-右引入规则的成功要求周围的上下文为空，⊗-右引入规则的成功取决于代理的上下文如何分为两个上下文。因此，这些代理的演化取决于与上下文的其他部分的“同步”。

现在考虑线性逻辑的单向序列演算表示，其中唯一的引入规则是右引入规则。根据上述连词的分类，可以证明证明搜索可以分为以下阶段，而不会丧失完备性。如果序列中存在异步公式，则发生异步阶段。在此阶段，按任意顺序应用右引入规则（自下而上），直到没有进一步的异步公式为止。在同步阶段，选择某个同步公式，并成为此阶段的“焦点”：即，将右引入规则（自下而上）应用于它及其可能生成的任何同步子公式。

下图展示了线性逻辑的聚焦证明系统。请注意，两个阶段由不同的箭头表示：上箭头表示异步阶段，下箭头表示同步阶段。此外，序列被分为三个区域（区域由分号或上箭头和下箭头分隔）。特别地，在上箭头和下箭头的左侧是两个区域。以 Ψ 表示的区域表示可以在该序列的证明中使用任意次数的公式集合。以 Δ 表示的区域表示公式的多重集合。上箭头右侧的区域也是公式的多重集合，而下箭头右侧的区域是单个公式。可以对上箭头右侧的公式施加任意顺序，因为可以以任意顺序引入异步公式。原子具有极性，在下图中，A 代表正原子，而 A 的否定代表负原子。通过这些推理规则构建的证明称为聚焦证明。聚焦证明对于线性逻辑的完备性在 Andreoli 1992 中得到证明。

异步阶段 Ψ; Δ⇑LΨ; Δ⇑⊥,L [⊥] Ψ; Δ⇑F; Δ⇑LΨ; Δ⇑?F,L [?] Ψ; Δ⇑⊤,L [⊤] Ψ; Δ⇑F [y/x],LΨ; Δ⇑∀x.F,L [∀] Ψ; Δ⇑F1,F2,LΨ; Δ⇑F1⅋F2,L [⅋] Ψ; Δ⇑F1,LΨ; Δ⇑F2,LΨ; Δ⇑F1&F2,L [&] Ψ; Δ,F⇑LΨ; Δ⇑F,L [R⇑] 前提是 F 不是异步的

同步阶段 Ψ; ⋅⇓1 [1] Ψ; Δ1⇓F1Ψ; Δ2⇓F2Ψ; Δ1,Δ2⇓F1⊗F2 [⊗] Ψ; ⋅⇑FΨ; ⋅⇓!F [!] Ψ; Δ⇓FiΨ; Δ⇓F1⊕F2 [⊕i] Ψ; Δ⇓F [t/x] Ψ; Δ⇓∃x.F [∃] Ψ; Δ⇑FΨ; Δ⇓F [R⇓] 前提是 F 要么是异步的，要么是一个原子

身份和决策规则 Ψ; A⇓A⊥ [I1] Ψ,A; ⋅⇓A⊥ [I2] 其中 A 是一个原子 Ψ; Δ⇓FΨ; Δ,F⇑⋅ [D1] Ψ; Δ⇓FΨ,F; Δ⇑⋅ [D2] 其中 F 是一个正公式

针对经典逻辑和直觉主义逻辑，也设计了专注证明系统（Danos 等，1997 年；Laurent 等，2005 年；Liang 和 Miller，2009 年）。

### 2.3 证明网

使用序列演算表示的证明包含很多细节，有时这些细节是无趣的：例如考虑从 ⊢Γ,A1,A2,…,An 的推导中形成 ⊢Γ,(A1⅋A2),…,(An−1⅋An) 的证明有多少无趣的不同方式。这个令人不快的事实源于序列演算中证明的顺序性质：如果我们想要将一组 n 个规则 S 应用于序列的不同部分，即使它们彼此不干扰，我们也不能一步完成。我们必须对它们进行顺序化，即在 S 上选择一个线性顺序，并根据这个顺序在 n 步中应用规则。

一个自然的问题出现了：“是否有一种证明的表示方式，可以摆脱这些无趣的细节？”在直觉主义序列演算的情况下，类似的问题通过所谓的自然推理得到了肯定的回答，通过柯里-霍华德对应（Howard 1980），它与被称为 λ 演算的计算设备有着紧密的联系。

对于线性逻辑，这种简洁的证明表示由证明网提供，证明网是一种类似图形的结构，对于逻辑的 MLL 片段具有特别好的性质。这种表示的第一步是使用否定的逆性将所有的序列演算系统转换为单侧系统，其中序列的形式为 ⊢Γ。因此，规则的数量减少了，因为我们没有左引入规则，但我们保持了相同的表达能力，因为可证性保持不变。

对于 MLL 中的每个序列演算证明，可以通过归纳地将其与相同结论的证明网相关联，方法如下：

* 对于一个归约为公理规则的证明，我们将其与一个公理链接相关联。

  > ![Axiom net](https://plato.stanford.edu/entries/logic-linear/Axiom.jpg)
  >
* 对于通过将剪切规则应用于两个证明而获得的证明，我们首先归纳地构建与这两个证明相关联的证明网，然后使用一个剪切链接将它们组合起来。

  > ![Cut net construction](https://plato.stanford.edu/entries/logic-linear/Cut.jpg)
  >
* 对于通过将张量规则应用于两个证明而获得的证明，我们首先归纳地构建与这两个证明相关联的证明网，然后使用一个张量链接将它们组合起来。

  > ![Tensor net construction](https://plato.stanford.edu/entries/logic-linear/Tensor.jpg)
  >
* 对于通过将 par 规则应用于证明而获得的证明，首先通过归纳地构建与该证明相关联的证明网，然后我们添加一个“par 链接”。

  > ![Par net construction](https://plato.stanford.edu/entries/logic-linear/Par.jpg)
  >

所有这些都可以使用超图进行适当的形式化（公式是节点，“链接”是具有前提和结论的有向超边），我们可以正式地定义一个证明网作为一个超图，该超图是通过 MLL 的序列演算推导归纳地构建而成的。请注意，有很多超图并不是证明网。

现在，如果您查看从 ⊢Γ，（A1⅋A2），…，（An−1⅋An）获得的 ⊢Γ，A1，A2，…，An 的推导构建的证明网，您将看到所有应用规则的顺序痕迹都消失了。从某种意义上说，证明网是关于应用可交换的规则的推导顺序的等价类。

假设现在有人向您展示了一个由公理、切割、并联和张量链接构建的巨大超图，并声称它实际上是一个证明的表示。您如何验证它实际上是一个证明的表示，而不仅仅是一个随机的结构？

进行这种正确性检查是一个挑战，相当于为您的结构重建一个顺序构造历史，对应于序列演算中的推导，一开始似乎是一个非常复杂的问题。MLL 证明网的第一个正确性标准，称为“长途标准”，在 Girard 的原始论文中已经存在，是指数级的，Danos 和 Regnier 的 ACC（无环连接）标准（1989 年）稍后发现也是指数级的。然而，存在一种更高效的标准，称为可约性，由 Danos 和 Regnier 提出，最近由 Guerrini、Martini 和 Masini 重新表述为以下优雅的图解析标准：一个超图是一个证明网，当且仅当它通过以下图缩减规则缩减为单节点“网”时。

![Graph Parsing for MLL proof net recognition](https://plato.stanford.edu/entries/logic-linear/parsing.jpg)

以天真的方式进行这种检查可能需要二次时间（每个规则的应用可能需要整个图的查找来找到红式，我们需要执行与图中的超链接数量相同的步骤）。Guerrini（2011 年）和 Murawski 和 Ong（2006 年）提供了线性时间算法。

MLL 证明网的另一种正确性标准风格由 Retoré（2003）给出，其中给出了一个二次算法用于 MLL。

在证明网上，由于其并行性质，可以以一种特别干净的方式进行割除，割可以通过两个简化规则在本地消除：

* 公理移动：

  > ![Axiom move](https://plato.stanford.edu/entries/logic-linear/Identity.jpg)
  >
* 乘法移动：

  > ![Multiplicative move](https://plato.stanford.edu/entries/logic-linear/Multiplicative.jpg)
  >

这些实际上是在证明网上的计算规则，正确性标准允许轻松验证任何此类规则保持正确性，并且作为结果，证明网的缩减仍然来自相同的序列演算证明。

因此，在 MLL 证明网中进行削减可以在线性时间内完成，并为 MLL 的所有部分提供了一个简单、优雅的削减结果。

证明网方法可以扩展到线性逻辑的更大子集，但是如何获得与 MLL 相同优雅的结果就不那么清楚了：例如，Girard 在 1987 年提出的原始系统适用于 MELL，通过将四个指数规则与以下超图构造相关联：

* 收缩

  > ![Contraction construction](https://plato.stanford.edu/entries/logic-linear/Contraction.jpg)
  >
* 弱化

  > ![Weakening construction](https://plato.stanford.edu/entries/logic-linear/Weakening.jpg)
  >
* 弃权

  > ![Dereliction construction](https://plato.stanford.edu/entries/logic-linear/Dereliction.jpg)
  >
* 推广，引入了“盒子”的概念，这是一个将证明网材料化为图形的顺序标记，通过在结论 A 和?Γ 的证明网周围画一个矩形来表示。

  > ![Promotion construction](https://plato.stanford.edu/entries/logic-linear/Promotion.jpg)
  >

尽管这些构造和相关的图形规约与具有显式替换的 λ 演算有着惊人的相似之处，正如 Di Cosmo＆Kesner（1997）首次指出的那样，它们与相应的序列演算规则太相似了。MLL 所具有的并行化效果在这里并没有得到很好的体现，图形规约规则涉及盒子并且不是局部的。

为了恢复一个令人满意的系统，已经提出了许多建议，从 Danos＆Regnier（1995）开始，但我们在这里想提到 Guerrini，Martini 和 Masini（Guerrini 等人，2003）的非常优雅的方法，它清楚地显示了模态逻辑的两级证明系统，MELL 的适当证明网和 λ 演算中的最优化约简之间的联系。

Heijltjes 和 Houston（2016）的最近一篇论文表明，如果还允许使用单位，那么对于 MLL 来说，无法找到令人满意的证明网的概念。

可以对加性连词进行规范处理，甚至包括一阶量化（Heijltjes 等人，2019）。包含乘法和加法连词的公式的证明网具有各种技术表达方式，但没有一种是规范和令人满意的。它们在类似于证明网的证明系统中的处理目前是一个活跃研究的课题。特别是参见（Hughes 和 van Glabbeek，2005）和（Hughes 和 Heijltjes，2016）。

## 3. 语义学

接近线性逻辑的语义学通常沿着两条不同的路径进行。首先，有各种可用的语义结构，可以用来将公式映射到这些结构中的指称。这种方法可以用来建立线性逻辑各个片段的正确性和完备性。一种更新颖的线性逻辑语义方法涉及直接给出证明的语义。我们简要描述了这两种方法，并提供了一些文献链接。

### 3.1 可证性的语义学

试图为线性逻辑片段提供一个健全且完备的语义的一种方法是将一个公式与能够用来证明该公式的所有上下文集合相关联。当然，这样的集合可能需要更抽象，并且需要给出各种封闭性质。Girard（1987）的相位语义提供了这样一种语义：在计算机科学中，已经使用了这种语义的一些用途，以提供反例，并作为一种可以帮助确定给定并发系统不能演变为具有某些属性的另一个系统的工具（Fages 等，2001）。相位语义还被用于为线性逻辑的一阶和高阶版本提供割除消去的语义证明（Okada，1999）。类似地，Kripke 风格的语义已经在 Allwein＆Dunn 1993 和 Hodas＆Miller 1994 中提供。Quantales，这是一种特定类型的偏序代数结构，也已经被用于为线性逻辑的部分提供语义模型（Yetter，1990）。

### 3.2 证明的语义

在在理论计算机科学中如此受欢迎和富有成果的公式即类型类比中，通过将逻辑系统与具有类型的计算设备（如带类型的 λ 演算）相关联，将每个该公式的证明与具有该公式作为类型的程序相关联。例如，命题 A⇒A 的证明对应于程序 fun(x:A).x:A→A，即类型为 A 的对象的恒等函数。这就是为什么在构造性逻辑系统（如直觉主义逻辑和算术）以及线性逻辑中，证明如此重要的原因，以至于构建和研究证明模型比构建和研究可证明性模型更受关注：我们不仅仅满足于知道一个公式是可证明的，我们真正想知道其证明的计算内容。

已经提出了许多线性逻辑证明模型；我们认为，迄今为止，基于所谓的“关系语义”或“克里普克式语义”的构造最简单且最直观，其中公式被解释为多重集合，单侧序列被解释为多重集合的元组，证明被解释为对序列解释的关系（Tortora de Falco 2003，Ehrhard 2012，Melliès 2018）。如果想要给出纯粹的集合论语义，而不借助多重集合，可以通过一种称为相容空间的方式来实现，即用特殊的相容关系装备的集合，正如 Girard 1987 年所示。还有一些有趣的范畴论模型适用于线性逻辑，例如*-自主范畴（Barr 1991）和超相容性（Ehrhard 1993）。

对于证明的语义，还有一种由 Girard 的交互几何给出的方法，它使我们能够对证明进行完全的代数特征描述。对于每个证明网，可以关联一个部分置换矩阵 σ，对应于剪切链接，以及一个适当的矩阵 M，对应于由某种动态代数构建的表达式，描述证明网内的可能路径。然后可以通过执行公式完全描述证明网

EX(σ,M)=(1−σ2)(∑iM(σM))(1−σ2)

在 MLL 案例中，这是归一化过程的一个不变量。一些与数据流理论相关的有趣结果与 Abramsky＆Jagadeesan（1994）的早期工作中展示了联系。

围绕所谓的游戏语义发展起来的语义学领域值得特别关注。A. Blass（1992）早期指出了游戏与线性逻辑之间的紧密联系。实际上，有两种不同的传统将逻辑与游戏联系起来。在追溯到 Lorenzen 的对话游戏传统中，一个玩家试图证明一个公式，而第二个玩家试图反驳它。可以为 MALL 提供一个对话游戏，对于证明者和反驳者来说完全对称（Delande 等人，2010）。在另一种传统中，公式被解释为游戏，逻辑连接词被解释为游戏构造器，证明被解释为描述玩家如何对手动作做出反应的策略。通过对游戏规则施加不同的限制，实际上可以为实际编程语言的各种特性提供精确的语义（技术上，是一个完全抽象的模型），因此在过去几年中对这个领域的兴趣非常大。例如，参见 Abramsky＆Jagadeesan 1994，Abramsky＆Melliès 1999 和 Hyland＆Ong 2000。

## 4. 复杂性

对于任何给定的逻辑学，了解是否存在一种有效的过程来确定逻辑中的每个句子是否可证明是很有用的。一个可判定的逻辑学，即存在一种有效的过程来判断可证明性，通常通过其复杂性类来描述，该类别表征了执行决策过程的难度。已经有大量的研究工作致力于研究命题线性逻辑的复杂性和可判定性问题的几个片段。已知

* MLL 的可证明性是 NP 完全的（Kanovich 1992）和
* MALL 的可证明性是 PSPACE 完全的（Lincoln 等，1992）。

在这里，NP 和 PSPACE 是复杂度类，使得 NP ⊆ PSPACE。令人惊讶的是，对于那些可能忘记线性逻辑的新颖之处在于在没有收缩和弱化的结构规则的情况下管理公式的方式的人来说，即使我们专注于只允许常量而不允许命题变量的逻辑片段，这些结果仍然相同（Lincoln＆Winkler 1994）。事实上，可以将任意公式编码为仅包含常量的公式，从而保留可证明性。

MELL 是一种令人惊讶的表达逻辑。例如，Petri 网中的可达性问题可以编码为 MELL（Gunter＆Gehlot 1989），而该问题等价于具有状态的向量加法系统（VASS）的可达性问题（Reutenauer 1989）。此外，MELL 的可判定性问题等价于分支 VASS 的可达性问题（de Groote 等人，2004），而后者已知具有非元素下界（Lazic 和 Schmitz 2015）。因此，如果 MELL 被证明是可判定的，它至少是 TOWER-hard（Lazic 和 Schmitz 2015）。Bimbó（2015）给出了 MELL 可判定性的证明，但 Straßburger（2019）报告了该证明中的一个漏洞。

关于命题线性逻辑不可判定性的证明在 1990 年代初发表（Lincoln 等，1992 年，Lincoln 1995）。Kanovich（2016）证明了这种不可判定性结果适用于命题线性逻辑的大大简化的片段。并且在（Forster＆Larchey-Wendling，2019）中发表了一个机器验证的不可判定性证明。然而，Bimbó＆Dunn 在（2022）中也发表了命题线性逻辑可判定性的证明，并声称在上述论文中发现了错误。

线性逻辑加上无限弱化规则（也被称为线性仿射逻辑）是可判定的（Kopylov 1995），并且是指数空间难的（Urquhart 2000）。

关于线性逻辑周围复杂性结果的良好概述可以在 Lincoln 1995 中找到。

## 5. 计算机科学影响

当直觉逻辑学在上个世纪初首次提出时，它被提出作为对传统数学家所应该从事的方式的挑战。排中律和矛盾证明的使用被认为是可疑和有问题的，特别是在无限存在的情况下。随着直觉逻辑学的关注发展为建设性数学，新的建设性方法已经出现在拓扑学、代数学和分析学等主题中。鉴于线性逻辑学涵盖了证明（算法）和资源的动态，它的主要影响不在传统数学中，而在计算机科学中。在概述该影响的性质之前，我们概述了逻辑在计算机科学中更一般地使用的各种方式。

逻辑在计算规范中扮演着不同的角色。我们可以确定以下广泛不同的方法，并注意哪些角色受到了线性逻辑的影响。

在计算作为模型的方法中，计算被编码为数学结构，并包括节点、转换和状态等项目。逻辑被外部使用来对这些结构进行陈述。也就是说，计算被用作逻辑表达式的模型。意向操作符，如时间和动态逻辑的模态或霍尔逻辑的三元组，经常被用来表达关于状态变化的命题。逻辑的这种用法来表示和推理计算可能是逻辑在表示计算方面最广泛成功的用法。逻辑在这方面的角色几乎没有受到线性逻辑的影响。

在计算作为推理的方法中，逻辑的语法部分（如公式、术语、类型和证明）直接被用作指定计算的元素。在这个更加纯粹的环境中，有两种不同的方法来建模计算，分别称为证明规范化方法和证明搜索方法。

我们在下面概述了线性逻辑对这两种不同环境产生的重要影响。

### 5.1 证明规范化

证明规范化方法将计算的状态视为证明术语，将计算过程视为规范化（也称为 β-还原或削减）。函数式编程可以使用证明规范化作为其理论基础进行解释（Martin-Löf 1982），并已被用于证明设计新的函数式编程语言的合理性，例如 Abramsky 1993。线性逻辑为计算规范化提供了新的类型，新的声明性手段，以静态地理解资源在计算中的使用方式，并提供了一种吸引人的方式来形式化函数与为其提供参数的环境之间的对偶关系。

线性逻辑在最优规约方面也是一个强大的理论工具。在 J.J. Lévy 最初定义 λ-演算后相当长一段时间内，构建高效（最优）解释器的问题一直未能解决。这个问题在 Lamping 1990 中首次得到解决，通过一个复杂的共享图实现，涉及相当多的规则。许多作者使用线性逻辑的思想和直觉重建了 Lamping 的解决方案，简化了它，并导致了与相互作用几何学相关的丰富理论。进一步阅读的好参考资料是 Asperti＆Guerrini 1998。

由线性逻辑提供的直觉逻辑的细化以及线性逻辑的对偶性提供了一个观察函数及其环境作为相似实体并以对偶方式相互作用的框架。例如，具有类型 A−∘B 的函数可以被建模为一个过程，它从其环境中消耗类型 A 的值并将其转换为类型 B 的值。在线性逻辑中，这个蕴涵式等价于其逆否形式：类型 B⊥−∘A⊥ 可以导致将同一个函数解释为一个将对类型 B 的需求转换为对类型 A 的需求的过程（请注意，这在直觉类型的函数中不会发生，因为例如，输入参数可能是空的）（Curien 2003）。使用游戏语义来模拟函数计算的最近成功也与函数和环境的对偶处理类似（Abramsky 和 Jagadeesan 1994，Hyland＆Ong 2000）。

最后，我们提到在线性逻辑中，将计算编码为证明规范化的领域中，已经使用线性逻辑来提供多项式时间递归函数的基于类型的描述。例如，M. Hofmann（2003）引入了一个具有模态和线性类型的 λ 演算，将 Bellantoni＆Cook 1992 的函数代数扩展到更高的类型。基于线性逻辑的类型也在函数程序中使用：参见 Guzman＆Hudak 1990 和 Wadler 1991。

### 5.2 证明搜索

证明搜索方法将计算状态视为一个序列（一组结构化的公式），将计算过程视为搜索序列证明的过程：序列中发生的变化捕捉到了计算的动态。根据这种计算视角，我们通常自下而上地阅读推理规则，即将其结论转化为前提的转换。逻辑编程可以使用证明搜索作为其理论基础进行解释，线性逻辑为计算规范提供了新的组合子来构建逻辑程序，捕捉丰富的动态，并提供了新的声明性方法来指定并发计算。（有关线性逻辑编程语言的概述，请参见 Miller 2004。）

聚焦证明系统的完备性可以用来在线性逻辑中提供逻辑编程操作语义的声明性解释的一部分。例如，考虑线性逻辑的公式子集 L，该子集仅由连接词 ⊤，&，−∘，⇒ 和 ∀ 构建。（请注意，如果将 ⊥ 添加到此列表中，则可以编码线性逻辑的所有连接词。）可以看出，在 L 中无剪切证明搜索可以定义为两个阶段。给定一个序列 Γ; Δ⊢G，其中 Γ 是一组公式（可以收缩和弱化），Δ 是一组公式的多重集（不能收缩也不能弱化），G（“目标”公式）是一个单一的公式（都来自 L），则证明搜索按照以下方式进行。

1. 如果 G 是非原子的，则只能使用右引入规则来推导此序列。根据这组连接词，右规则是可逆的，而此目标缩减阶段正好对应于聚焦证明的异步阶段。
2. 如果 G 是原子的，那么证明搜索通过从左手上下文中选择一个单一的公式来进行。
3. 一旦选择了一个公式作为焦点，所有的左引入规则只应用于该公式和产生的任何正子公式。这个反向链接阶段对应于聚焦证明构造的异步阶段。

形式上，可以使用以下推理规则来描述这些不同的阶段。在这里，引入了一个新的序列箭头：这个箭头上标有一个左引入规则的结果公式。请注意，左引入规则的规则要求将 Δ 上下文分成两部分 Δ1,Δ2（从下往上读规则时）。当然，如果该上下文有 n≥0 个不同的公式，则有 2n 种这样的分割。这些推理规则中的语法变量 A 范围是原子公式。

目标缩减阶段 Γ; Δ⊢⊤ ⊤RΓ; Δ⊢BΓ; Δ⊢CΓ; Δ⊢B&C &RΓ; Δ,B⊢CΓ; Δ⊢B−∘C −∘RΓ,B; Δ⊢CΓ; Δ⊢B⇒C ⇒RΓ; Δ⊢B [y/x] Γ; Δ⊢∀x.B ∀R

反向推理阶段 Γ; Δ|D1––––AΓ; Δ|D1&D2––––––––––A &LΓ; Δ|D2––––AΓ; Δ|D1&D2––––––––––A &LΓ; Δ|D [t/x]––––––––AΓ; Δ|∀τx.D––––––––A ∀LΓ; Δ1⊢GΓ; Δ2|D––––AΓ; Δ1,Δ2|G−∘D––––––––A −∘LΓ; ⋅⊢GΓ; Δ|D––––AΓ; Δ|G⇒D––––––––A ⇒L

身份和决策规则 Γ,D; Δ|D––––AΓ,D; Δ⊢A decide!Γ; Δ|D––––AΓ; Δ,D⊢A decideΓ; ⋅|A–––A init

线性逻辑限制在 L 上可以被视为一种线性逻辑编程语言。因此，它可以作为计算系统的规范语言，这个角色也被 Petri 网、过程演算、λ 演算等所占据。鉴于线性逻辑具有证明理论和各种语义，通过线性逻辑的元理论可以提供关于在 L 中指定的计算的广泛推理途径。

鉴于线性逻辑的序列演算使用公式的多重集，证明搜索可以直接编码多重集重写。由于许多计算可以自然地被看作多重集重写，因此线性逻辑与 Petri 网（Gunter＆Gehlot 1989）、过程演算（Andreoli＆Pareschi 1991，Kobayashi 等 1999，Miller 1996）以及安全协议（Cervesato 等 1999，Miller 2003）之间可以建立许多联系。

## 6. 变体

### 6.1 模态性的不同处理方式

如果使用传统的序列演算表示法，指数在以下意义上不是规范的：如果引入另一个指数的副本，比如!′和?′，并且具有与原始指数相同的规则，那么无法证明!等价于!′，?等价于?′，而对于其他连接词，这很容易确定。非规范指数的各种应用可以在（Danos 等，1993；Nigam 和 Miller，2009）中找到。尽管目前关于 MELL 的可决定性存在争议（Bimbó 2015，Straßburger 2019），但将 MLL 扩展为三对!和?会产生一个不可决定的逻辑（Chaudhuri 2018）。Martini 和 Masini 1995 描述了一个“2-sequent”证明系统，其中指数是规范的。

割除可以使经典逻辑和直觉逻辑中的证明变得非常庞大的事实可以通过在这些证明系统中应用收缩规则来进行分析。如果证明系统对收缩引入了限制，就可以设计出新的逻辑和证明系统，其中割除的复杂性大大降低。例如，基本线性逻辑（ELL）通过用一个规则同时引入!和?来取代!和?的引入。因此，ELL 可以编码所有且仅编码卡尔马尔基本函数（在固定高度的指数塔时间内可计算）（Girard 1998，Baillot 2015）。此外，还研究了指数的其他推理规则变体。例如，轻量级线性逻辑（Girard 1998）和软线性逻辑（Lafont 2004）都表征了多项式时间可计算的函数：另请参见（Baillot 和 Terui 2004）。

### 6.2 非交换线性逻辑

虽然线性逻辑拒绝了弱化和收缩这两个结构规则的普遍应用，但它允许无限制地使用称为交换的结构规则。一个不普遍使用交换规则的序列演算具有左右上下文为列表的序列：上下文中的公式顺序成为逻辑的一个表达要素。在这种情况下，乘法析取和合取可以变为非交换的。

最早拒绝序列演算的三个结构规则之一的逻辑是由 Lambek 1958 提出的。虽然这个逻辑包含两个蕴涵，但它既不包含否定也不包含任何指数。各种论文提出了将线性逻辑扩展到包括非交换特性的建议，目前还没有一个建议被认为是规范的。有关非交换线性逻辑的一些示例，请参见 Yetter 1990，Abrusci 1991，Retoré 1997，Abrusci＆Ruet 1999 以及 Guglielmi＆Straßburger 2001。

### 6.3 处理无界行为

虽然 MALL 逻辑是一种富有表现力和新颖的逻辑，但它也是可判定的，因此无法捕捉到迭代和递归中的无界行为。如上所述，通过添加指数！和？，可以将 MALL 逻辑丰富为完全线性逻辑，并在其中捕捉无界行为。将 MALL 扩展以捕捉无界行为的第二种方法是将最小和最大不动点运算符直接添加到 MALL 中作为逻辑连接词。为了正确地将不动点特征化为最小或最大，不动点的推理规则必须是“高阶”的，即它们涉及不变量。Baelde（Baelde＆Miller，2007; Baelde 2012）开发了这种扩展到 MALL 的方法（还包括一阶量化和项相等），并用于为模型检验提供了一个证明论基础（Heath＆Miller 2018）。

<!--md-padding-ignore-begin-->
## Bibliography

* Abramsky, S., 1993, “Computational interpretations of linear logic”, *Theoretical Computer Science*, 111: 3–57.
* Abramsky, S., and Jagadeesan, R., 1994, “New Foundations for the Geometry of Interaction”, *Information and Computation*, 111(1): 53–119.
* Abramsky, S., and Melliès, Paul-André, 1999, “Concurrent Games and Full Completeness”, *14th Annual Symposium on Logic in Computer Science*, Trento: IEEE Computer Society Press., pp. 431–442.
* Abrusci, V. M., 1991, “Phase semantics and sequent calculus for pure non-commutative classical linear propositional logic”, *Journal of Symbolic Logic*, 56(4): 1403–1451.
* Abrusci, V.M., and Ruet, P., 1999, “Non-Commutative Logic I: The Multiplicative Fragment”, *Annals of Pure and Applied Logic*, 101(1): 29–64.
* Allwein, G. and Dunn, J.M., 1993, “Kripke Models for Linear Logic”, *Journal of Symbolic Logic*, 58(2): 514–545.
* Anderson, A. R. and Belnap, N. D., 1975, *Entailment: The Logic of Relevance and Necessity* (Volume I), Nuel D. Belnap & J. Michael Dunn (eds.), Princeton, N.J.: Princeton University Press.
* Anderson, A. R., Belnap, N. D., and Dunn, J. M., 1975, *Entailment: The Logic of Relevance and Necessity* (Volume II), Princeton, N.J.: Princeton University Press.
* Andreoli, J.-M., 1992, “Logic programming with focusing proofs in linear logic”, *Journal of Logic and Computation*, 2(3): 297–347.
* Andreoli, J.-M. and Pareschi, R., 1991, “Linear objects: Logical processes with built-in inheritance”, *New Generation Computing*, 9(3–4): 445–473.
* Asperti, A., and Guerrini, S., 1998, “The Optimal Implementation of Functional Programming Languages”, Cambridge Univ. Press.
* Avron, A., 1988, “The Semantics and Proof Theory of Linear Logic”, *Theoretical Computer Science*, 57: 161–184.
* Baelde, D., 2012, “Least and greatest fixed points in linear logic”, ACM Transactions on Computational Logic, 13(1). doi:10.1145/2071368.2071370
* Baelde, D. and Miller, D., 2007, “Least and greatest fixed points in linear logic”, *Logic for Programming, Artificial Intelligence, and Reasoning* (Lecture Notes in Computer Science: Volume 4790), edited by N. Dershowitz and A. Voronkov, pp. 92–106.
* Baillot, P., 2015, “On the expressivity of elementary linear logic: Characterizing Ptime and an exponential time hierarchy”, *Information and Computation*, 241: 3–31.
* Baillot, P., and Terui, K., 2004, “Light Types for Polynomial Time Computation in Lambda-Calculus”, *Proceedings of the Nineteenth Annual IEEE Symposium on Logic in Computer Science*, Turku, Finland, IEEE Computer Society Press, pp. 266–275.
* Barr, M., 1991, “*-Autonomous categories and linear logic”, *Mathemathical Structures in Computer Science*, 1(2): 159–178.
* Bellantoni, S. and Cook, S., 1992, “A New Recursion-Theoretic Characterization of the Polytime Functions”, *Computational Complexity*, 2: 97–110.
* Bimbó, K., 2015, “The decidability of the intensional fragment of classical linear logic”, *Theoretical Computer Science*, 597(13): 1–17.
* Bimbó, K. and J. M. Dunn, 2022, “Modalities in lattice-R”, in *Relevance Logics and other Tools for Reasoning. Essays in Honor of J. Michael Dunn*, London: College Publications, pp. 89–127.
* Blass, A., 1992, “A game semantics for linear logic”, *Annals of Pure and Applied Logic*, 56: 183–220.
* Cervesato, I., Durgin, N., Lincoln, P., Mitchell, J., and Scedrov, A., 1999, “A meta-notation for protocol analysis”, in R. Gorrieri (ed.), *Proceedings of the 12th IEEE Computer Security Foundations Workshop—CSFW 1999*, Los Alamitos, CA: IEEE Computer Society Press, pp. 55–69.
* Chaudhuri, K., 2018, “Encoding additives using multiplicatives and subexponentials”, *Mathematical Structures in Computer Science*, 28(5): 651–666.
* Curien, P.-L., 2003, “Symmetry and interactivity in programming”, *Bulletin of Symbolic Logic*, 9(2): 169–180.
* Dal Lago, U., and Laurent, O., 2008, “Quantitative Game Semantics for Linear Logic”, *Computer Science Logic* (Lecture Notes in Computer Science: Volume 5213), Michael Kaminski and Simone Martini (eds.), Berlin: Springer, pp. 230–245.
* Danos, V., Joinet, J.-P., and Schellinx, H., 1993, “The Structure of Exponentials: Uncovering the Dynamics of Linear Logic Proofs”, pp. 159–171, in *Kurt Gödel Colloquium* (Lecture Notes in Computer Science, Volume 713), edited by G. Gottlob, A. Leitsch, and D. Mundici, Berlin: Springer.
* –––, 1997, “A New Deconstructive Logic: Linear Logic”, *Journal of Symbolic Logic*, 62(3): 755–807.
* Danos, V. and Regnier, L., 1989, “The Structure of Multiplicatives”, *Archive of Mathematical Logic*, Springer, 28:181–203.
* –––, 1995, “Proof-nets and Hilbert space”, in J.-Y. Girard, Y. Lafont, and L. Regnier (eds.), *Advances in Linear Logic*, Cambridge: Cambridge University Press, pp. 307–328.
* de Groote, P., Guillaume, B., and Salvati, S., 2004, “Vector addition tree automata”, in *Proceedings of the 19th IEEE Symposium on Logic in Computer Science* (LICS 2004), 14–17 July 2004, Turku, Finland, pp. 64–73.
* Delande, O., Miller, D., and Saurin, A., 2010, “Proof and refutation in MALL as a game”, *Annals of Pure and Applied Logic*, 161(5): 654–672.
* Di Cosmo, R., and Kesner, D., 1997, “Strong normalization of explicit substitutions via cut elimination in proof nets”, (extended abstract) in *Proceedings of the Twelfth Annual IEEE Symposium on Logic in Computer Science*, Los Alamitos, CA: IEEE Computer Society Press, pp. 35–46.
* Ehrhard, T., 1993, “Hypercoherences: A Strongly Stable Model of Linear Logic”, *Mathematical Structures in Computer Science*, 3(4): 365–385.
* –––, 2012, “The Scott model of linear logic is the extensional collapse of its relational model”, *Theoretical Computer Science*, 13(6): 20–45.
* Fages, F., Ruet, P., and Soliman, S., 2001, “Linear Concurrent Constraint Programming: Operational and Phase Semantics”, *Information and Computation*, 165(1): 14–41.
* Forster, Y. and D. Larchey-Wendling, 2019, “Certified undecidability of intuitionistic linear logic via binary stack machines and Minsky machines”, *Proceedings of the 8th ACM SIGPLAN International Conference on Certified Programs and Proofs (CPP’19)*, New York: Association of Computing Machinery, pp. 104–117. doi:10.1145/3293880.3294096
* Gentzen, G., 1935, “Investigations into Logical Deduction”, in M. E. Szabo (ed.), *The Collected Papers of Gerhard Gentzen*, Amsterdam: North-Holland pp. 68–131.
* Girard, J.-Y., 1987, “Linear logic”, *Theoretical Computer Science*, 50: 1–102.
* –––, 1998, “Light Linear Logic”, *Information and Computation*, 143(2):175–204.
* Grishin, V. N., 1981, “Predicate and set-theoretic calculi based on logic without contraction rules,” (Russian). Izvestiya Akademii Nauk SSSR Seriya Matematicheskaya 45(1): 47–68. 239. Math. USSR Izv., 18, no.1, Moscow.
* Guerrini, S., 2011, “A linear algorithm for MLL proof net correctness and sequentialization”, *Theoretical Computer Science*, 412: 1958–1978.
* Guerrini, S., Martini, S., and Masini, A., 2003, “Coherence for sharing proof-nets”, *Theoretical Computer Science*, 294(3): 379–409.
* Guglielmi, A., and Straßburger, L., 2001, “Non-commutativity and MELL in the Calculus of Structures”, *Computer Science Logic* (Lecture Notes in Computer Science, Volume 2142), Berlin: Springer Verlag, pp. 54–68.
* Gunter, C. A., and Gehlot, V., 1989, “Nets as Tensor Theories”, in G. De Michelis (ed.), *Proceedings of the Tenth International Conference on Application and Theory of Petri Nets* (Lecture Notes in Computer Science: Volume 616), Bonn: Springer-Verlag, pp. 174–191.
* Guzman, J.C. and Hudak, P., 1990, “Single-threaded polymorphic lambda calculus”, in *Proceedings of the Fifth IEEE Symposium on Logic in Computer Science*, Philadelphia: IEEE Computer Society Press.
* Heath, Q. and Miller, D., 2018, “A proof theory for model checking”, *Journal of Automated Deduction*, doi:10.1007/s10817-018-9475-3.
* Heijltjes, W. and Houston, R., 2016, “Proof equivalence in MLL is PSPACE-complete”, *Logical Methods in Computer Science* 12(1).
* Heijltjes, W. B., Hughes, D. J. D., and Straßburger, L., 2018, “Proof nets for first-order additive linear logic”, *4th International Conference on Formal Structures for Computation and Deduction*, (FSCD 2019: Volume 131), Dagstuhl: Leibniz-Zentrum für Informatik, pp. 22:1–22:22.
* Hodas, J., and Miller, D., 1994, “Logic programming in a fragment of intuitionistic linear logic”, *Information and Computation*, 110(2): 327–365.
* Hofmann, M., 2003, “Linear types and non-size increasing polynomial time computation”, *Information and Computation*, 183(1): 57–85.
* Howard, W.A., 1980, “The formulae-as-type notion of construction, 1969”, in J.P. Seldin and R. Hindley (eds.), *To H. B. Curry: Essays in Combinatory Logic, Lambda Calculus, and Formalism*, New York: Academic Press, pp. 479–490.
* Hughes, D.J.D. and van Glabbeek, R., 2005, “Proof Nets for Unit-Free Multiplicative-Additive Linear Logic”, *ACM Transactions on Computational Logic*, 6: 784–842.
* Hughes, D.J.D. and Heijltjes, W. B., 2016, “Conflict nets: efficient locally canonical mall proof nets”, *31st Annual ACM/IEEE Symposium on Logic in Computer Science* (LICS), 2016.
* Hyland, J.M.E., and Ong, C.-H.L., 2000, “On Full Abstraction for PCF: I. Models, observables and the full abstraction problem, II. Dialogue games and innocent strategies, III. A fully abstract and universal game model”, *Information and Computation*, 163: 285–408.
* Kanovich, M.I., 1992, “Horn Programming in Linear Logic is NP-Complete”, in *Proceedings of the Seventh Annual Symposium on Logic in Computer Science*, Santa Cruz, IEEE Computer Society Press, pp. 200–210.
* –––, 2016, “The undecidability theorem for the Horn-like fragment of linear logic (Revisited)”, *Mathematical Structures in Computer Science*, 26: 719–744.
* Kobayashi, N., Shimizu, T., and Yonezawa, A., 1999, “Distributed concurrent linear logic programming”, *Theoretical Computer Science*, 227(1–2): 185–220.
* Kopylov, A. P., 1995, “Decidability of Linear Affine Logic”, Symposium on Logic in Computer Science (LICS’95), IEEE Computer Society Press, pp. 496–505.
* Lafont, Y., 2004, “Soft linear logic and polynomial time”, *Theoretical Computer Science*, 318(1–2): 163–180.
* Lamarche, F., 1996, “From Proof Nets to Games: extended abstract”, in *Linear Logic 96 Tokyo Meeting*, *Electronic Notes in Theoretical Computer Science*, 3: 107–119.
* Lambek, J., 1958, “The mathematics of sentence structure”, *American Mathematical Monthly*, 65: 154–169.
* Lamping, J., 1990, “An algorithm for optimal lambda-calculus reductions”. 17th Annual Symposium on Principles of Programming Languages, San Francisco, ACM Press, pp. 16–30.
* Laurent, O., Quatrini, M., and Tortora de Falco, L., 2005, “Polarized and focalized linear and classical proofs”, *Annals of Pure and Applied Logic*, 134 (2–3): 217–264.
* Lazic, R. and Schmitz, S., 2015, “Nonelementary complexities for branching VASS, MELL, and extensions”, *ACM Transactions on Computational Logic*, 16(3): pp. 20:1–20:30.
* Liang, C. and Miller, D., 2009, “Focusing and Polarization in Linear, Intuitionistic, and Classical Logics”, *Theoretical Computer Science*, 410(46): 4747–4768.
* Lincoln, P., Scedrov, A., and Shankar, N., 1993, “Linearizing intuitionistic implication”, *Annals of Pure and Applied Logic*, 60(2): 151–177.
* Lincoln, P., 1995, “Deciding provability of linear logic formulas”, *Proceedings of the Workshop on Advances in Linear Logic*, J.-Y. Girard, Y. Lafont, and L. Regnier (eds.), Cambridge: Cambridge University Press, pp. 197–210.
* Lincoln, P., Mitchell, J., Scedrov, A., and Shankar, N., 1992, “Decision problems for propositional linear logic”, *Annals of Pure and Applied Logic*, 56: 239–311.
* Lincoln, P., and Winkler, T., 1994, “Constant-Only Multiplicative Linear Logic is NP-Complete”, *Theoretical Computer Science*, 135: 155–169.
* Martini, S. and Masini, A., 1995, “On the fine structure of the exponential rule”, in *Advances in linear logic*, edited by J.-Y. Girard and Y. Lafont and L. Regnier, pp. 197–210, New York: Cambridge University Press.
* Martin-Löf, P., 1982, “Constructive Mathematics and Computer Programming”, *Sixth International Congress for Logic, Methodology, and Philosophy of Science*, Amsterdam: North-Holland, pp. 153–175.
* Melliès, P.-A., Tabareau, N. and Tasson, C., 2018, “An explicit formula for the free exponential modality of linear logic”, *Mathematical Structures in Computer Science*, 28(7): 1253–1286.
* Miller, D., 1996, “Forum: A multiple-conclusion specification language”, *Theoretical Computer Science*, 165(1): 201–232.
* –––, 2003, “Encryption as an abstract data-type: An extended abstract”, in I. Cervesato (ed.), *16th Workshop on Foundations of Computer Security*, Asilomar, IEEE Computing Society, pp. 3–14, 2003.
* –––, 2004, “Overview of linear logic programming”, *Linear Logic in Computer Science*, T. Ehrhard, J.-Y. Girard, P. Ruet, and P. Scott (eds.) (London Mathematical Society Lecture Notes: Volume 316), Cambridge: Cambridge University Press, pp. 119–150.
* Murawski, A. S., and Ong, C.-H. L., 2006, “Fast verification of MLL proof nets via IMLL”, *ACM Transactions on Computational Logic*, 7(3): 473–498.
* Nigam, V. and Miller, D., 2009, “Algorithmic specifications in linear logic with subexponentials”, Proceedings of the 11th ACM SIGPLAN conference on Principles and practice of declarative programming (PPDP), 2009, pp. 129–140.
* Okada, M., 1999, “Phase Semantic Cut-Elimination and Normalization Proofs of First- and Higher-Order Linear Logic”, *Theoretical Computer Science*, 227(1–2): 333–396.
* Ono, H., 1998, “Proof-theoretic methods in nonclassical logic. An Introduction”, in M. Takahashi, M. Okada, and M. Dezani-Ciancaglini (eds.), *Theories of Types and Proofs* (Mathematical Society of Japan Memoirs: Volume 2), 207–254. doi:10.2969/msjmemoirs/00201C060
* Read, S., 1988, *Relevant Logic*, Oxford: Blackwell.
* Retoré, C., 1997, “Pomset logic: a non-commutative extension of classical linear logic”, *Typed Lambda Calculi and Applications* (Lecture notes in Computer Science: Volume 1210), Berlin: Springer Verlag, pp. 300–318.
* Retoré, C., 2003, “Handsome proof-nets: perfect matchings and cographs”, *Theoretical Computer Science*, 294(3): 473–488.
* Reutenauer, C., 1989, “Aspects mathématiques des réseaux de Petri”, Etudes et Recherches en Informatique. Masson.
* Schellinx, H., 1991, “Some Syntactical Observations on Linear Logic”, *Journal of Logic and Computation*, 1(4): 537–559.
* Tortora de Falco, L., 2003, “Obsessional experiments for linear logic proof-nets”, *Mathematical Structures in Computer Science*, 13(6): 799–855.
* Troelstra, A. S., 1992, “Lectures on Linear Logic”, *CSLI Lecture Notes* (Number 29), Stanford: CSLI Publications.
* Straßburger, L., 2019, “On the Decision Problem for MELL”, *Theoretical Computer Science*, 768: 91–98. doi:10.1016/j.tcs.2019.02.022
* Urquhart, A., 2000, “The Complexity of Linear Logic with Weakening”, *Logic Colloquium ’98* (Lecture Notes in Logic 13), Urbana: Association for Symbolic Logic, pp. 500–515.
* Wadler, P., 1991, “Is there a use for linear logic?”, *Proceedings of ACM/SIGPLAN Workshop Partial Evaluation and Semantics-Based Program Manipulation*, New Haven: ACM Press, pp. 255–273, 1991.
* Yetter, D.N., 1990, “Quantales and (noncommutative) linear logic”, *Journal of Symbolic Logic*, 55(1): 41–64.

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-linear). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-linear/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-linear&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](https://philpapers.org/sep/logic-linear/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* The [linear logic bibliography](http://www.cs.cmu.edu/~carsten/linearbib/llb.html) (up to 1998).
* Vincent Danos and Roberto Di Cosmo. [The Linear Logic Primer. Course Notes.](http://www.dicosmo.org/CourseNotes/LinLog/) (1992).

## Related Entries

[logic: and games](https://plato.stanford.edu/entries/logic-games/) | [logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [logic: dialogical](https://plato.stanford.edu/entries/logic-dialogical/) | [logic: intuitionistic](https://plato.stanford.edu/entries/logic-intuitionistic/) | [logic: substructural](https://plato.stanford.edu/entries/logic-substructural/) | [proof theory](https://plato.stanford.edu/entries/proof-theory/)

### Acknowledgment

We thank an anonymous reviewer at the SEP for many comments that have helped us revise this article.

[Copyright © 2023](https://plato.stanford.edu/info.html#c) by  
[Roberto Di Cosmo](http://www.dicosmo.org/) <[*roberto@dicosmo.org*](mailto:roberto%40dicosmo%2eorg)>  
[Dale Miller](http://www.lix.polytechnique.fr/Labo/Dale.Miller/) <[*dale.miller@inria.fr*](mailto:dale%2emiller%40inria%2efr)>
<!--md-padding-ignore-end-->
