# 逻辑与概率 and probability (Lorenz Demey, Barteld Kooi, and Joshua Sack)
*首次发表于2013年3月7日；实质修订于2023年8月17日*

逻辑学和概率论是形式推理研究中的两个主要工具，已经在哲学、人工智能、认知科学和数学等各个领域得到了富有成果的应用。本文讨论了将逻辑学和概率论结合的主要提议，并试图对这个快速发展的领域中的各种方法进行分类。

* [1. 将逻辑学和概率论结合](https://plato.stanford.edu/entries/logic-probability/#CombLogiProbTheo)
* [2. 命题概率逻辑学](https://plato.stanford.edu/entries/logic-probability/#PropProbLogi)

  * [2.1 概率语义学](https://plato.stanford.edu/entries/logic-probability/#ProbSema)
  * [2.2 亚当斯的概率逻辑学](https://plato.stanford.edu/entries/logic-probability/#AdamProbLogi)
  * [2.3 进一步的概括](https://plato.stanford.edu/entries/logic-probability/#FurtGene)
* [3. 基本概率运算符](https://plato.stanford.edu/entries/logic-probability/#BasiProbOper)

  * [3.1 不确定性的定性表示](https://plato.stanford.edu/entries/logic-probability/#QualReprUnce)
  * [3.2 概率术语的求和和乘积](https://plato.stanford.edu/entries/logic-probability/#SumsProdProbTerm)
* [4. 模态概率逻辑学](https://plato.stanford.edu/entries/logic-probability/#ModaProbLogi)

  * [4.1 基本有限模态概率模型](https://plato.stanford.edu/entries/logic-probability/#BasiFiniModaProbMode)
  * [4.2 索引和解释](https://plato.stanford.edu/entries/logic-probability/#IndeInte)
  * [ 4.3 概率空间](https://plato.stanford.edu/entries/logic-probability/#ProbSpac)
  * [4.4 结合定量和定性不确定性](https://plato.stanford.edu/entries/logic-probability/#CombQuanQualUnce)
  * [4.5 对定量和定性相互作用的约束](https://plato.stanford.edu/entries/logic-probability/#ConsQuanQualInte)
  * [ 4.6 动力学](https://plato.stanford.edu/entries/logic-probability/#Dyna)
* [5. 第一阶概率逻辑学](https://plato.stanford.edu/entries/logic-probability/#FirsOrdeProbLogi)

  * [5.1 第一阶概率逻辑学的一个例子](https://plato.stanford.edu/entries/logic-probability/#ExamFirsOrdeProbLogi)

    * [5.1.1 对多个变量进行量化](https://plato.stanford.edu/entries/logic-probability/#QuanOverThanOneVari)
    * [5.1.2 条件概率](https://plato.stanford.edu/entries/logic-probability/#CondProb)
    * [5.1.3 作为术语的概率](https://plato.stanford.edu/entries/logic-probability/#ProbTerm)
  * [5.2 可能世界一阶概率逻辑](https://plato.stanford.edu/entries/logic-probability/#PossWorlFirsOrdeProbLogi)
  * [ 5.3 元逻辑](https://plato.stanford.edu/entries/logic-probability/#Meta)
* [ 参考文献](https://plato.stanford.edu/entries/logic-probability/#Bib)
* [ 学术工具](https://plato.stanford.edu/entries/logic-probability/#Aca)
* [其他互联网资源](https://plato.stanford.edu/entries/logic-probability/#Oth)
* [ 相关条目](https://plato.stanford.edu/entries/logic-probability/#Rel)

---

## 1. 结合逻辑学和概率论

结合逻辑学和概率论的想法乍一看可能有些奇怪（Hájek 2001）。毕竟，逻辑学关注的是绝对确定的真理和推理，而概率论处理的是不确定性。此外，逻辑学提供了推理的定性（结构性）视角（一个论证的演绎有效性基于论证的形式结构），而概率则是定量（数值）性质的。然而，正如下一节将要展示的，概率论在自然意义上预设并扩展了经典逻辑。此外，从历史上看，多位杰出的理论家，如德·摩根（1847）、布尔（1854）、拉姆齐（1926）、德·芬内蒂（1937）、卡尔纳普（1950）、杰弗里（1992）和豪森（2003、2007、2009），强调了逻辑学和概率论之间的紧密联系，甚至将他们在概率上的工作视为逻辑学的一部分。

通过整合定性逻辑和数值概率论的互补视角，概率逻辑能够提供高度表达力的推理解释。因此，毫不奇怪地，它们已经应用于研究推理机制的所有领域，如哲学、人工智能、认知科学和数学。这种跨学科的普及性的不利之处在于，“概率逻辑”等术语被不同的研究人员以不同的、非等价的方式使用。因此，在进入实际讨论各种方法之前，我们将首先界定本条目的主题。

最重要的区别是概率逻辑和归纳逻辑之间的区别。经典上，一个论证被称为（演绎）有效，当且仅当A的前提全部为真，而其结论为假是不可能的。换句话说，演绎有效性等同于真理保持：在一个有效的论证中，前提的真实性保证了结论的真实性。然而，在某些论证中，前提的真实性并不能完全保证结论的真实性，但它仍然使其高度可能。一个典型的例子是具有前提“我看到的第一只天鹅是白色”，…，“我看到的第1000只天鹅是白色”的论证，以及结论“所有的天鹅都是白色”。这类论证在归纳逻辑中进行研究，归纳逻辑广泛使用概率概念，因此被一些作者认为与概率逻辑有关。关于归纳逻辑和概率逻辑之间的确切关系有一些讨论，这在Kyburg（1994）的引言中有所总结。占主导地位的观点（由Adams和Levine（1975）等人辩护），也是本文所采用的观点，是概率逻辑完全属于演绎逻辑，因此不应涉及归纳推理。然而，大多数关于归纳逻辑的工作都属于“概率保持”方法，并且与第2节讨论的系统密切相关。关于归纳逻辑的更多信息，读者可以参考Jaynes（2003）、Fitelson（2006）、Romeijn（2011）以及本百科全书关于归纳问题和归纳逻辑的条目。

我们还将避免对概率的确切性质进行哲学辩论。这里讨论的形式系统与所有常见的概率解释都是兼容的，但显然，在具体应用中，某些概率解释比其他解释更自然。例如，第 4 节讨论的模态概率逻辑本身对概率的性质持中立态度，但当它们用于描述转换系统的行为时，它们的概率通常以客观方式解释，而对多主体场景建模则最自然地伴随着主观概率解释（作为主体的信念程度）。这个主题在 Gillies（2000）、Eagle（2010）和本百科全书关于概率解释的条目中有详细介绍。

文献中最近的一个趋势是不再将逻辑和概率论整合或结合到一个单一的统一框架中，而是在两个学科之间建立桥梁。这通常涉及将逻辑的定性概念用概率论的定量术语来捕捉，或者反之亦然。我们无法充分涵盖这个蓬勃发展领域中的各种方法，但感兴趣的读者可以参考 Leitgeb（2013, 2014）、Lin 和 Kelly（2012a, 2012b）、Douven 和 Rott（2018）以及 Harrison-Trainor、Holliday 和 Icard（2016, 2018）。这个领域的“当代经典”是 Leitgeb（2017），而 van Benthem（2017）提供了一个有用的调查和一些有趣的规划性评论。

最后，尽管概率逻辑的成功在很大程度上归功于其各种应用，但我们不会详细讨论这些应用。例如，我们不会评估概率作为哲学（贝叶斯认识论）或人工智能（知识表示）中信念的形式表示的使用，以及与其他表示形式（如广义概率论（用于量子理论），p-进概率和模糊逻辑）相比的优缺点。有关这些主题的更多信息，读者可以参考 Gerla（1994），Vennekens 等人（2009），Hájek 和 Hartmann（2010），Hartmann 和 Sprenger（2010），Ilić-Stepić等人（2012），以及本百科全书中关于信念的形式表示，贝叶斯认识论，可废推理，量子逻辑和概率论以及模糊逻辑的条目。

在明确了这些概念之后，我们现在准备好看一下本条目将讨论的内容。获得具体的概率逻辑系统最常见的策略是从经典（命题/模态等）逻辑系统开始，并以某种方式“概率化”它，通过添加概率特征。有多种方式可以实现这种概率化。可以研究经典语言的概率语义（不具有任何显式概率运算符），在这种情况下，推理关系本身具有概率特性：演绎有效性变为“概率保持”，而不是“真值保持”。这个方向将在第 2 节中讨论。或者，可以将各种类型的概率运算符添加到逻辑的语法中。在第 3 节中，我们将讨论一些最初的、相当基本的概率运算符示例。在第 4 节中，将探讨模态概率运算符的完全表达能力。最后，在第 5 节中将讨论具有一阶概率运算符的语言。

## 2. 命题概率逻辑学

在本节中，我们将介绍第一类概率逻辑学，用于研究“概率保持”（或双重地，“不确定性传播”）的问题。这些系统不会通过引入任何概率运算符来扩展语言，而是处理一个“经典”的命题语言 L，该语言具有可数的原子命题集合和通常的真值功能（布尔）连接词。

主要思想是有效论证的前提可能是不确定的，在这种情况下，（演绎）有效性对结论的（不）确定性不施加任何条件。例如，具有前提“如果明天下雨，我会淋湿”和“明天会下雨”，以及结论“我会淋湿”的论证是有效的，但如果其第二个前提是不确定的，其结论通常也是不确定的。命题概率逻辑学将这种不确定性表示为概率，并研究它们如何从前提流向结论；换句话说，它们不研究真值保持，而是概率保持。以下三个小节讨论处理这个问题不断更一般版本的系统。

### 2.1 概率语义学

我们首先回顾一下命题语言 L 的概率函数的概念。（在数学中，概率函数通常是针对给定集合Ω的一个σ-代数的子集定义的，并且要求满足可数可加性；参见第 4.3 节。然而，在逻辑上下文中，更自然的做法是‘立即’为逻辑的客体语言定义概率函数（Williamson 2002）。因为这种语言是有限的——它的所有公式都有有限的长度——所以只需要要求有限可加性即可。）一个概率函数（对于 L）是一个满足以下约束条件的函数 P:L→R：

非负性。对于所有的ϕ∈L，P(ϕ)≥0。

重言式。如果⊨ϕ，则 P(ϕ)=1。

有限可加性。如果⊨¬(ϕ∧ψ)，则 P(ϕ∨ψ)=P(ϕ)+P(ψ)。

在第二和第三个约束中，⊨符号表示经典命题逻辑中的（语义）有效性。因此，概率函数的定义需要经典逻辑的概念，从这个意义上说，概率论可以说是预设了经典逻辑（Adams 1998, 22）。可以很容易地证明，如果 P 满足这些约束，则对于所有公式ϕ∈L，P(ϕ)∈[0,1]，并且对于所有逻辑等价的公式ϕ,ψ∈L（即⊨ϕ↔ψ），有 P(ϕ)=P(ψ)。

现在我们转向概率语义学，如 Leblanc（1983）中所定义的。一个具有前提Γ和结论ϕ的论证，简称为（Γ，ϕ），如果且仅如果满足以下条件，被称为概率上有效，记作Γ⊨pϕ：

对于所有的概率函数 P：L→R：
如果对于所有的γ∈Γ，P(γ)=1，那么也有 P(ϕ)=1。

因此，概率语义学用概率函数 P:L→R 替代了经典命题逻辑的估值 v:L→{0,1}，该函数的取值范围在实数单位区间[0,1]内。因此，真（1）和假（0）的经典真值可以被视为单位区间[0,1]的端点，同样，估值 v:L→{0,1}可以被视为退化的概率函数 P:L→[0,1]。从这个意义上说，经典逻辑是概率逻辑的特例，或者说，概率逻辑是经典逻辑的扩展。

可以证明，经典命题逻辑在概率语义学上是（强）完备和一致的：

如果且仅如果Γ⊢ϕ，则Γ⊨pϕ。

一些作者将概率解释为广义的真值（Reichenbach 1949，Leblanc 1983）。根据这种观点，概率逻辑只是一种特殊类型的多值逻辑，而概率有效性归结为“真值保持”：真（即概率 1）从前提延续到结论。其他逻辑学家，如塔斯基（1936）和亚当斯（1998，15），指出概率不能被视为广义的真值，因为概率函数不是“外延的”；例如，P（ϕ∧ψ）不能表示为 P（ϕ）和 P（ψ）的函数。关于这个主题的更多讨论可以在 Hailperin（1984）中找到。

另一种可能性是将一个句子的概率解释为其（不）确定性的度量。例如，句子“琼斯此刻在西班牙”可以具有任何程度的确定性，从 0（最大的不确定性）到 1（最大的确定性）。 （注意，0 实际上是一种确定性，即关于虚假的确定性；然而，在本条目中，我们遵循亚当斯的术语（1998，31）将 0 解释为最大的不确定性。）根据这种解释，以下定理可以从概率语义的强健完备性推导出来：

定理 1. 考虑一个演绎有效的论证（Γ，ϕ）。如果Γ中的所有前提概率为 1，则结论ϕ的概率也为 1。

这个定理可以被看作是对概率保持（或不确定性传播）问题的第一个非常部分的澄清。它表明，如果对前提没有任何不确定性，那么对结论也不可能有任何不确定性。在接下来的两个小节中，我们将考虑更有趣的情况，即前提存在非零不确定性，并询问它如何传递到结论。

最后，值得注意的是，尽管本小节仅讨论了经典命题逻辑的概率语义，但也存在着各种其他逻辑的概率语义，例如直觉主义命题逻辑（van Fraassen 1981b，Morgan 和 Leblanc 1983），模态逻辑（Morgan 1982a，1982b，1983，Cross 1993），经典一阶逻辑（Leblanc 1979，1984，van Fraassen 1981b），相关逻辑（van Fraassen 1983）和非单调逻辑（Pearl 1991）。所有这些系统都共享一个关键特征：逻辑的语义是概率性的，但概率并没有在客体语言中明确表示；因此，它们在本文所讨论的命题概率逻辑与后面章节中介绍的系统之间更为接近。

这些系统中大多数不是基于一元概率 P(ϕ)，而是基于条件概率 P(ϕ,ψ)。条件概率 P(ϕ,ψ)被视为原始的（而不是像通常那样定义为 P(ϕ∧ψ)/P(ψ)），以避免当 P(ψ)=0 时出现问题。Goosens (1979)提供了关于使用这种原始条件概率概率论的各种公理化的概述。

### 2.2 亚当斯的概率逻辑学

在前一小节中，我们讨论了概率保持的第一原则，即如果所有前提的概率都是 1，那么结论的概率也是 1。当然，当前提不是绝对确定时，会出现更有趣的情况。考虑具有前提 p∨q 和 p→q 以及结论 q 的有效论证（符号‘→’表示真值条件材料蕴涵）。可以很容易地证明

P(q)=P(p∨q)+P(p→q)−1.

换句话说，如果我们知道论证前提的概率，那么我们可以计算出其结论的确切概率，从而为这个特定论证的概率保持问题提供一个完整的答案（例如，如果 P(p∨q)=6/7 且 P(p→q)=5/7，那么 P(q)=4/7）。然而，一般情况下，我们无法根据前提的概率计算出结论的确切概率；我们最多只能得到结论概率的（紧密的）上界和/或下界。现在我们将讨论亚当斯（1998 年）计算这些界限的方法。

亚当斯的结果可以更容易地用不确定性而不是确定性（概率）来表述。给定一个概率函数 P:L→[0,1]，相应的不确定性函数 UP 被定义为

UP:L→[0,1]:ϕ↦UP(ϕ):=1−P(ϕ)。

如果概率函数 P 在上下文中是清楚的，我们通常会简单地写成 U 而不是 UP。在本小节的其余部分（以及下一小节）中，我们将假设所有的论证只有有限多个前提（鉴于经典命题逻辑的紧致性质，这并不是一个重要的限制）。亚当斯的第一个主要结果，最初由苏普斯（1966）建立，现在可以陈述如下：

定理 2. 考虑一个有效的论证（Γ,ϕ）和一个概率函数 P。那么结论ϕ的不确定性不能超过前提γ∈Γ的不确定性之和。形式上：

 U(ϕ)≤∑γ∈ΓU(γ)。

首先，注意这个定理将定理 1 作为一个特例：如果对于所有的γ∈Γ，P(γ)=1，那么对于所有的γ∈Γ，U(γ)=0，所以 U(ϕ)≤∑U(γ)=0，因此 P(ϕ)=1。此外，还要注意结论的不确定性上限取决于|Γ|，即前提的数量。如果一个有效的论证只有少量的前提，每个前提只有很小的不确定性（即高确定性），那么它的结论也会有相对较小的不确定性（即相对较高的确定性）。相反，如果一个有效的论证的前提具有很小的不确定性，那么只有在论证具有大量前提的情况下，它的结论才可能高度不确定（这个逆向原理的一个著名例证是 Kyburg（1965）的彩票悖论，该悖论在本百科全书的认识论悖论条目中有讨论）。更具体地说，注意如果一个有效的论证有三个前提，每个前提的不确定性都是 1/11，那么添加一个不确定性也是 1/11 的前提不会影响论证的有效性，但它会将结论的不确定性上限从 3/11 提高到 4/11，从而使结论比原来更不确定。最后，定理 2 提供的上限是最优的，也就是说（在适当的条件下），结论的不确定性可以与其上限∑U(γ)相一致：

定理 3. 考虑一个有效的论证（Γ,ϕ），并假设前提集合Γ是一致的，并且每个前提γ∈Γ是相关的（即Γ−{γ}⊭ϕ）。那么存在一个概率函数 P:L→[0,1]，使得

 UP(ϕ)=∑γ∈ΓUP(γ)。

定理 2 提供的上界也可以用来定义概率上的有效性概念。如果一个论证(Γ,ϕ)被称为是 Adams 概率上有效的，记作Γ⊨aϕ，那么当且仅当

对于所有的概率函数 P:L→R: UP(ϕ)≤∑γ∈ΓUP(γ)。

Adams 概率上的有效性可以用概率而不是不确定性来进行另一种等价的描述。这种描述说，如果前提的概率足够高，那么结论的概率可以无限接近于 1。形式上：Γ⊨aϕ当且仅当前提的概率足够高时，结论的概率可以无限接近于 1。

对于所有的ϵ>0，存在一个δ>0，使得对于所有的概率函数 P：
如果对于所有的γ∈Γ，P(γ)>1−δ，则 P(ϕ)>1−ϵ。

可以证明，经典命题逻辑在 Adams 的概率语义下是（强）完备和一致的：

Γ⊨aϕ 当且仅当 Γ⊢ϕ.

Adams（1998 年，154 页）还定义了另一种逻辑，他的概率语义是完备和正确的。然而，这个系统涉及到一个非真值功能连接词（概率条件句），因此超出了本节的范围。（关于条件句的概率解释，读者可以参考本百科全书中关于条件句和条件逻辑的条目。）

考虑以下例子。具有前提 p，q，r，s 和结论 p∧（q∨r）的论证 A 是有效的。假设 P（p）=10/11，P（q）=P（r）=9/11，P（s）=7/11。然后，定理 2 表明

U(p∧(q∨r))≤111+211+211+411=911.

这个结论的不确定性上限相当令人失望，并且暴露了定理 2 的主要弱点。上限如此之高的一个原因是，我们计算时考虑了前提 s，而这个前提的不确定性相当高（4/11）。然而，这个前提是无关紧要的，因为结论已经可以从其他三个前提中推导出来。因此，我们不仅可以将 p∧(q∨r)视为有效论证 A 的结论，还可以将其视为同样有效的论证 A'的结论，该论证具有前提 p，q，r。在后一种情况下，定理 2 给出了一个上限为 1/11+2/11+2/11=5/11，这已经低得多了。

定理 2 的弱点在于它考虑了（不确定性的）无关或非必要的前提。为了得到这个定理的改进版本，需要一个更精细的“必要性”概念。在上面的例子中，论证 A 中的前提 s 是绝对无关的。同样，前提 p 是绝对相关的，也就是说，如果没有这个前提，结论 p∧(q∨r)就无法推导出来。最后，前提子集{q，r}处于“中间”位置：q 和 r 一起是相关的（如果两个前提都被省略，结论就无法推导出来），但它们中的每一个都可以被省略（同时保持结论可推导）。

本质性的概念被形式化如下：

本质前提集。给定一个有效的论证（Γ,ϕ），一个集合Γ′⊆Γ是本质的，当且仅当 Γ−Γ′⊭ϕ。

本质性的程度。给定一个有效的论证（Γ,ϕ）和一个前提γ∈Γ，γ的本质性程度，记作 E(γ)，为 1/|Sγ|，其中|Sγ|是包含γ的最小本质前提集的基数。如果γ不属于任何最小本质前提集，则γ的本质性程度为 0。

根据这些定义，可以建立定理 2 的一个精炼版本：

定理 4. 考虑一个有效的论证（Γ,ϕ）。那么结论ϕ的不确定性不能超过前提γ∈Γ的不确定性的加权和，其中权重为重要性的程度。形式上：

 U(ϕ)≤∑γ∈ΓE(γ)U(γ)。

定理 4 的证明比定理 2 的证明要困难得多：定理 2 只需要基本的概率论，而定理 4 使用了线性规划的方法进行证明（Adams 和 Levine 1975；Goldman 和 Tucker 1956）。定理 4 将定理 2 作为一个特例进行了总结：如果所有前提都是相关的（即具有必要性程度为 1），那么定理 4 得出的上界与定理 2 相同。此外，定理 4 在计算这个上界时不考虑无关的前提（即具有必要性程度为 0 的前提）；因此，如果一个前提对于论证的有效性是无关的，那么它的不确定性不会传递到结论中。最后，注意到由于对于所有的γ∈Γ，E(γ)∈[0,1]，因此有

∑γ∈ΓE(γ)U(γ)≤∑γ∈ΓU(γ),

即定理 4 通常给出比定理 2 更紧的上界。为了说明这一点，再次考虑具有前提 p、q、r、s 和结论 p∧(q∨r)的论证。回忆一下，P(p)=10/11，P(q)=P(r)=9/11，P(s)=7/11。可以计算出前提的必要性程度：E(p)=1，E(q)=E(r)=1/2，E(s)=0。因此，定理 4 得出的结果是

U(p∧(q∨r))≤(1×111)+(12×211)+(12×211)+(0×411)=311,

这是对于 p∧(q∨r)的不确定性的一个比定理 2 得到的上界（即 9/11 和 5/11）更紧的上界。

### 2.3 进一步的推广

鉴于有效论证的前提的不确定性（和必要性程度），亚当斯的定理允许我们计算出结论的不确定性的上界。当然，这些结果也可以用概率而不是不确定性来表达；然后它们给出了结论概率的下界。例如，当用概率而不是不确定性来表达时，定理 4 如下所示：

P(ϕ)≥1−∑γ∈ΓE(γ)(1−P(γ)).

亚当斯的结果至少有两个限制：

* 它们只提供了结论概率的下界（给定前提的概率）。从某种意义上说，这是最重要的下界：它代表了结论在“最坏情况下”的概率，这在实际应用中可能是有用的信息。然而，在某些应用中，了解结论概率的上界也可能是有意义的。例如，如果我们知道这个概率的上界是 0.4，那么我们可能会决定避免某些行动（如果这个上界是 0.9 的话，我们可能会执行这些行动）。
* 它们假设前提的确切概率是已知的。然而，在实际应用中，可能只有关于前提γ的概率的部分信息：它的确切值未知，但已知它有一个下界 a 和一个上界 b（Walley 1991）。在这种应用中，有一个方法来计算结论概率的（最优）下界和上界，这是非常有用的，这些下界和上界是根据前提概率的上界和下界计算得出的。

Hailperin（1965，1984，1986，1996）和 Nilsson（1986）使用线性规划的方法来证明这两个限制是可以克服的。他们最重要的结果是以下内容：

定理 5. 考虑一个论证(Γ,ϕ)，其中|Γ|=n。存在函数 LΓ,ϕ:R2n→R 和 UΓ,ϕ:R2n→R，使得对于任何概率函数 P，以下条件成立：如果对于 1≤i≤n，ai≤P(γi)≤bi，则：

1. LΓ,ϕ(a1,…,an,b1,…,bn)≤P(ϕ)≤UΓ,ϕ(a1,…,an,b1,…,bn)。
2. 第 1 项中的界限是最优的，即存在概率函数 PL 和 PU，使得对于 1≤i≤n，ai≤PL(γi)，PU(γi)≤bi，并且

> LΓ,ϕ(a1,…,an,b1,…,bn)=PL(ϕ)

 和

> PU(ϕ)=UΓ,ϕ(a1,…,an,b1,…,bn).

3. 函数 LΓ,ϕ 和 UΓ,ϕ 可以从 Γ∪{ϕ} 中的句子的布尔结构有效确定。

这个结果还可以用来定义另一种概率的有效性概念，我们将其称为 Hailperin 概率有效性或简称 h-有效性。这个概念不是针对公式定义的，而是针对由公式和[0,1]的子区间组成的对。如果 Xi 是与前提γi∈Γ相关联的区间，Y 是与结论ϕ相关联的区间，那么论证(Γ,ϕ)被称为 h-有效，记作Γ⊨hϕ，当且仅当对于所有的概率函数 P：

如果对于 1≤i≤n，P(γi)∈Xi，那么 P(ϕ)∈Y。

在 Haenni 等人的研究中(2011)，这被写作

γX11,…,γXnn|≈ϕY

并被称为标准概率语义。

Nilsson 关于概率逻辑（1986 年，1993 年）的工作在人工智能中引发了大量关于概率推理的研究（Hansen 和 Jaumard 2000; Haenni 等人 2011 年第 2 章）。然而，需要注意的是，尽管定理 5 指出函数 LΓ,ϕ和 UΓ,ϕ可以从Γ∪{ϕ}中的句子有效确定，但这个问题的计算复杂性非常高（Georgakopoulos 等人 1988 年，Kavvadias 和 Papadimitriou 1990 年），因此在实际应用中快速找到这些函数变得计算上不可行。基于概率论证系统和概率网络的现代方法更能够处理这些计算挑战。此外，概率论证系统与 Dempster-Shafer 理论（Dempster 1968 年; Shafer 1976 年; Haenni 和 Lehmann 2003 年）密切相关。然而，对这些方法的详细讨论超出了（当前版本的）本条目的范围；请参阅（Haenni 等人 2011 年）进行最新调查。

## 3. 基本概率运算符

在本节中，我们将研究将命题语言 L 与相当基本的概率运算符扩展的概率逻辑。与第 2 节中的逻辑不同，这里的逻辑涉及到目标语言中的概率运算符。第 3.1 节讨论定性概率运算符；第 3.2 节讨论定量概率运算符。

### 3.1 不确定性的定性表示

有几种应用情况下，定性概率理论可能是有用的，甚至是必要的。在某些情况下，没有可用的频率作为概率的估计值，或者可能在实践上无法获得这些频率。此外，人们经常愿意比较两个陈述的概率（“ϕ比ψ更有可能”），而无法为每个陈述分配明确的概率（Szolovits 和 Pauker 1978，Halpern 和 Rabin 1987）。在这种情况下，定性概率逻辑将是有用的。

最早的定性概率逻辑之一是汉布林的（1959年）。该语言通过一元运算符□进行扩展，其含义为“可能性”。因此，□ϕ这样的公式应该被理解为“可能性很大的ϕ”。这种“可能性”可以被形式化为足够高的（数值）概率（即P(ϕ)≥t，其中1/2<t≤1），或者用概率的非度量化概念来表示。伯吉斯（1969年）进一步发展了这些系统，重点关注“高数值概率”解释。汉布林和伯吉斯都在他们的系统中引入了其他运算符（例如，表达形而上学的必然性和/或知识），并研究了“可能性”运算符与这些其他模态运算符之间的相互作用。然而，“可能性”运算符本身就已经显示出一些有趣的特性（独立于任何其他运算符）。如果将其解释为“足够高的概率”，那么它无法满足原则（□ϕ∧□ψ）→□(ϕ∧ψ)。这意味着它不是一个正常的模态运算符，也不能给出一个基普克（关系）语义。赫尔齐格和隆金（2003年）以及阿尔洛·科斯塔（2005年）为这种“可能性”运算符提供了较弱的邻域语义系统，而亚尔钦（2010年）则从更语言学的角度讨论了它们的行为。

Segerberg（1971）和 Gärdenfors（1975a，1975b）采取了另一种方法，他们在 de Finetti（1937），Kraft，Pratt 和 Seidenberg（1959）以及 Scott（1964）的早期工作基础上进行了建设。他们引入了一个二元运算符≥；公式ϕ≥ψ的含义是‘ϕ至少与ψ一样可能’（形式上：P（ϕ）≥P（ψ））。关键思想是，可以完全公理化≥的行为，而无需使用各个公式的‘基础’概率。值得注意的是，通过比较概率（二元运算符），还可以表达一些绝对的概率性质（一元运算符）。例如，ϕ≥⊤表示ϕ的概率为 1，ϕ≥¬ϕ表示ϕ的概率至少为 1/2。最近，Delgrande 和 Renne（2015）以及 Delgrande，Renne 和 Sack（2019）进一步扩展了定性方法，允许≥的参数为可能具有不同长度的公式有限序列。非正式地，公式（ϕ1,…，ϕn）≥（ψ1,…，ψm）的含义是‘ϕi 的概率之和至少与ψj 的概率之和一样高’。结果逻辑可以完全公理化，并且可以捕捉任何合理的数量，使其与一些定量概率逻辑一样具有表达能力。然而，它仍然与定量概率逻辑不同，因为语言中没有数字。在接下来的几节中，我们将把注意力转向定量概率逻辑。

### 3.2 概率术语的求和和乘积

命题概率逻辑是命题逻辑的扩展，用于表达概率项 P(φ) 之间的数值关系。简单的命题概率逻辑在命题逻辑的基础上添加了形如 P(φ)≥q 的公式，其中 φ 是一个命题公式，q 是一个数值；这样的公式断言 φ 的概率至少为 q。语义学使用模型来形式化，模型由一个概率函数 P 和一个集合 Ω 组成，其中 Ω 的每个元素都被赋予命题逻辑的原子命题的真值赋值。因此，如果赋值使命题公式为真，则命题公式在 Ω 的元素上为真。如果集合 Ω 中使 φ 为真的元素的概率 P 至少为 q，则公式 P(φ)≥q 在模型中为真。有关这样的命题概率逻辑的概述，请参阅 Ognjanović 等人的《第三章》（2016）。

一些命题概率逻辑在目标语言中包含其他类型的公式，例如涉及概率项之和和积的公式。涉及求和的吸引力可以通过概率函数的可加性条件来解释（参见第 2.1 节），该条件可以表示为当 ¬(ϕ∧ψ) 是一个重言式时，P(ϕ∨ψ)=P(ϕ)+P(ψ)，或等价地表示为 P(ϕ∧ψ)+P(ϕ∧¬ψ)=P(ϕ)。明确涉及概率之和的概率逻辑往往更一般地包括概率项的线性组合，例如 Fagin 等人的研究（1990）。在这里，命题逻辑通过形如 a1P(ϕ1)+⋯+anP(ϕn)≥b 的公式进行扩展，其中 n 是一个正整数，可能因公式而异，而 a1、…、an 和 b 都是有理数。以下是一些可以表达的例子。

* 通过 -P(ϕ)≥-q 来表示 P(ϕ)≤q。
* P(ϕ)<q 通过 ¬(P(ϕ)≥q),
* P(ϕ)=q 通过 P(ϕ)≥q∧P(ϕ)≤q.
* P(ϕ)≥P(ψ) 通过 P(ϕ)−P(ψ)≥0.

具有和不具有线性组合的表达能力：尽管线性组合为表达概率术语之间的众多关系提供了一种便捷的方式，但没有概率术语之和的语言仍然非常强大。考虑限制在形如 P(ϕ)≥q 的公式的语言，其中ϕ是命题公式，q 是有理数。我们可以定义

 P(ϕ)≤q 为 P(¬ϕ)≥1−q，

这是合理的，考虑到命题的补集的概率等于命题的概率减去 1。公式 P(ϕ)<q 和 P(ϕ)=q 可以像上面那样不使用线性组合来定义。使用这种受限的概率语言，我们可以以一种不太直接的方式推理加性。该公式

[P(ϕ∧ψ)=a∧P(ϕ∧¬ψ)=b]→P(ϕ)=a+b

表明如果ϕ∧ψ的概率为 a，ϕ∧¬ψ的概率为 b，则公式的析取（等同于ϕ）的概率为 a+b。然而，虽然使用线性组合可以通过使用公式 P(φ∧ψ)+P(φ∧¬ψ)=P(φ)来断言φ∧ψ和φ∧¬ψ的概率是可加的，但是上述没有线性组合的公式只有在选择正确的数字 a 和 b 时才能实现。关于命题概率逻辑的表达能力的形式比较在 Demey 和 Sack（2015）中给出。如果且仅当它们在没有线性组合的所有公式上达成一致时，任何两个模型在所有具有线性组合的公式上达成一致（Demey 和 Sack（2015）的引理 4.1）。然而，并不是任何由单个没有线性组合的公式定义的模型类都可以由单个没有线性组合的公式来定义（Demey 和 Sack（2015）的引理 4.2）。特别地，由公式 P(p)−P(q)≥0 定义的模型类不能由任何没有线性组合的公式来定义。

属于给定子集的概率：Ognjanović和 Rašković（1999）通过一种新类型的运算符 QF 扩展了概率逻辑的语言。直观地，公式 QFϕ表示ϕ的概率属于集合 F，其中 F⊆[0,1]。这个 QF 运算符不能用形如 P(ϕ)≥a 的公式来定义。Ognjanović和 Rašković（1999）提供了这种类型逻辑系统的一个完备的公理化。将 QF 运算符与更标准的 P 运算符连接起来的关键桥梁原则是对于所有 a∈F，公理 P(ϕ)=a→QFϕ以及指定从 P(ϕ)=a→ψ（其中 a∈F）可以推导出 QFϕ→ψ的无穷规则。

多项式权重公式：具有多项式权重公式（包括概率项的加权和和乘积）的逻辑可以允许形式为 P(ϕ)P(ψ)−P(ϕ∧ψ)=0 的公式，即ϕ和ψ的概率等于ϕ和ψ的概率的乘积。这个公式捕捉了ϕ和ψ在统计上独立的含义。这样的逻辑在 Fagin 等人（1990）中进行了研究，但主要包括了一阶逻辑特征，然后在 Perović等人（2008）中在一个更简单的上下文中（没有量词）再次进行了研究。

紧致性和完备性：紧致性是逻辑的一个属性，其中如果每个有限子集都是可满足的，则一组公式是可满足的。命题概率逻辑缺乏紧致性属性，因为{P(p)>0}∪{P(p)≤a|a>0}的每个有限子集都是可满足的，但整个集合不可满足。

没有紧致性，逻辑学可能是弱完备的（每个有效的公式在公理系统中是可证明的），但不是强完备的（对于每个公式集合Γ，Γ的每个逻辑推论都可以从Γ在公理系统中证明）。在 Fagin 等人（1990）中，给出了一个涉及线性组合的证明系统，并且证明了该逻辑既是完备的又是弱完备的。在 Ognjanović和 Rašković（1999）中，给出了一个无线组合的命题概率逻辑的完备证明系统。在 Heifetz 和 Mongin（2001）中，给出了一个不涉及线性组合的逻辑变体的证明系统，该系统使用类型系统来允许概率公式的迭代（我们将在第 4 节中看到如何使用可能世界来实现这种迭代），并且证明了该逻辑是完备的和弱完备的。他们还观察到，对于这样的逻辑，没有有限证明系统可以是强完备的。Ognjanović等人（2008）提出了一些具有无穷推导规则（需要可数无穷多个前提）的定性概率逻辑，并证明了其强完备性。Goldblatt（2010）为相关的共代数逻辑提供了一个强完备的证明系统。Perović等人（2008）为具有多项式权重公式的命题概率逻辑提供了一个证明系统和强完备性的证明。最后，获得强完备性的另一种策略是将概率函数的取值范围限制为固定的有限数集；例如，Ognjanović等人（2008）讨论了一种定性概率逻辑，其中概率函数的取值范围不是完整的实数单位区间[0,1]，而是“离散化”的版本{0,1n,2n,…,n−1n,1}（其中 n 是某个固定的自然数）。有关完备性结果的概述，请参阅 Ognjanović等人（2016）的第 7 章。

## 4. 模态概率逻辑

许多概率逻辑学是在一个单一的、任意的概率空间上进行解释的。模态概率逻辑学利用许多概率空间，每个概率空间与一个可能的世界或状态相关联。这可以看作是对模态逻辑的关系语义的微小调整：模态概率逻辑学不像模态逻辑那样，将每个可能的世界与一组可访问的世界相关联，而是将每个可能的世界与一个概率分布、一个概率空间或一组概率分布相关联。模态概率逻辑学的语言允许在概率之内嵌入概率，也就是说，它可以推理出可能是不同的概率为1/2的概率。这种涉及多个概率的模态设置通常被赋予(1)随机解释，涉及系统可能转换到的下一个状态的不同概率(Larsen and Skou 1991)，以及(2)主观解释，涉及不同代理人对情况或彼此概率的不同概率(Fagin and Halpern 1988)。这两种解释可以使用完全相同的形式框架。

一个基本的模态概率逻辑在命题逻辑中添加了形式为 P(ϕ)≥q 的公式，其中 q 通常是一个有理数，ϕ是语言中的任意公式，可能是一个概率公式。这个公式的解读是ϕ的概率至少为 q。这个公式的一般解读并不反映模态概率逻辑与其他具有相同公式的概率逻辑之间的任何差异；差异在于能够将概率嵌入到概率术语的参数中以及语义上的差异。下面的小节提供了模态概率逻辑建模的各种变体的概述。在某些情况下，语言稍作修改（第 4.2 节），在其他情况下，逻辑被扩展以处理定性和定量不确定性之间的相互作用（第 4.4 节和第 4.5 节）或动态性（第 4.6 节）。

### 4.1 基本有限模态概率模型

形式上，一个基本有限模态概率模型是一个元组 M=(W,P,V)，其中 W 是一组有限的可能世界或状态，P 是一个将分布 Pw 与每个世界 w∈W 相关联的函数，V 是一个“估值函数”，将原子命题从集合Φ分配给每个世界。分布从单个世界扩展到世界集合：Pw(S)=∑s∈SPw(s)。基本模态概率模型的前两个组成部分实际上与一个 Kripke 框架相同，其关系用数字（概率值）装饰。这样的结构有不同的名称，例如在数学中是带有标记边的有向图，或者在计算机科学中是概率转换系统。估值函数，就像在 Kripke 模型中一样，允许我们为世界分配属性。

公式的语义是在(M,w)对上给出的，其中 M 是一个模型，w 是模型的一个元素。对于一个对(M,w)来说，公式 P(ϕ)≥q 是真的，记作(M,w)⊨P(ϕ)≥q，当且仅当 Pw({w′∣(M,w′)⊨ϕ})≥q。

### 4.2 索引和解释

第一个常见的一般化是在模态概率逻辑的应用中，允许分布被两个集合而不是一个集合索引。第一个集合是世界的集合 W（模型的基本集合），而另一个是索引集合 A，通常被视为动作、代理或游戏的玩家的集合。形式上，对于每个 w∈W 和 a∈A，P 将一个分布 Pa,w 与 W 相关联。对于语言而言，不再涉及 P(ϕ)≥q 形式的公式，而是涉及 Pa(ϕ)≥q，当且仅当 Pa,w({w′∣(M,w′)⊨ϕ})≥q。

例子：假设我们有一个指标集合 A={a,b}，和一个原子命题集合Φ={p,q}。考虑(W,P,V)，其中

* W={w,x,y,z}
* Pa,w 和 Pa,x 将 w 映射为 1/2，x 映射为 1/2，y 映射为 0，z 映射为 0。
  Pa,y 和 Pa,z 将 y 映射为 1/3，z 映射为 2/3，w 映射为 0，x 映射为 0。
  Pb,w 和 Pb,y 将 w 映射为 1/2，y 映射为 1/2，x 映射为 0，z 映射为 0。
  Pb,x 和 Pb,z 将 x 映射为 1/4，z 映射为 3/4，w 映射为 0，y 映射为 0。
* V(p)={w,x}
  V(q)={w,y}.

我们用以下图表来描述这个例子。每个圆圈内部是对每个命题字母在以圆圈右侧标记的世界的真值的标记。箭头表示概率。例如，从世界 x 到世界 z 的箭头上标有(b,3/4)，表示在标记为 b 的情况下，从 x 到 z 的概率为 3/4。概率为 0 的情况不标记。

![Four circles each with a possible state of p,q and probability arrows between them](https://plato.stanford.edu/entries/logic-probability/figure1.svg)

 图

随机解释：考虑 A 中的元素 a 和 b 作为行动，例如在机器上按按钮。在这种情况下，按下按钮没有确定的结果。例如，如果机器处于状态 x，按下 a 后保持在相同状态的概率为 1/2，按下 b 后保持在相同状态的概率为 1/4。即，

(M,x)⊨Pa(p∧¬q)=1/2∧Pb(p∧¬q)=1/4。

模态逻辑学的一个重要特征（包括模态概率逻辑学在内）是支持高阶推理的能力，即对概率的概率进行推理。高阶概率的重要性可以从它们在米勒原则中的作用中清楚地看出，该原则规定 P1(ϕ∣P2(ϕ)=b)=b。在这里，P1 和 P2 是概率函数，可以有不同的解释，例如两个代理人的概率、逻辑和统计概率，或者一个代理人在不同时间点的概率（Miller 1966；Lewis 1980；van Fraassen 1984；Halpern 1991）。高阶概率也出现在 Judy Benjamin 问题中（van Fraassen 1981a），其中条件化的是概率信息。无论一个人是否同意关于高阶概率的文献中提出的原则，代表它们的能力都迫使人们研究统治它们的原则。

为了更具体地说明高阶推理，我们回到我们的例子中，可以看到在 x 处，按下 a 后，有 1/2 的概率按下 b 后，¬p 为真，即

(M,x)⊨Pa(Pb(¬p)=1/2)=1/2。

主观解释：假设 A 的元素 a 和 b 是一个游戏的玩家。p 和¬p 是玩家 a 的策略，q 和¬q 是玩家 b 的两种策略。在这个模型中，每个玩家都对自己的策略有确定性；例如在 x 处，玩家 a 确定自己会选择 p，而玩家 b 确定自己会选择¬q，即

(M,x)⊨Pa(p)=1∧Pb(¬q)=1.

但是玩家们会对对手进行随机选择。例如在 x 处，玩家 b 对玩家 a 选择¬q 的概率为 1/2 的概率是 1/4，即

(M,x)⊨Pb(Pa(q)=1/2)=1/4.

### 4.3 概率空间

概率通常被定义为测度空间中的测度。测度空间是一个集合Ω（样本空间），以及一个σ-代数（也称为σ-域）A，它是Ω的子集的非空集合，满足 A∈A 意味着Ω−A∈A，并且对于所有自然数 i，都有 Ai∈A 意味着⋃iAi∈A。测度是定义在σ-代数 A 上的函数μ，满足对于每个集合 A∈A，都有μ(A)≥0，以及当 Ai∩Aj=∅对于每个 i,j 时，有μ(⋃iAi)=∑iμ(Ai)。

σ-代数的效果是限制定义域，使得Ω的每个子集不一定都有概率。这对于在不可数无限集上定义一些概率至关重要；例如，在单位区间上的均匀分布不能在区间的所有子集上定义，同时还保持概率测度的可数可加性条件。

与基本有限概率逻辑相同的基本语言不需要改变，但语义略有不同：对于每个状态 w∈W，模态概率模型的组成部分 Pw 被整个概率空间(Ωw,Aw,μw)替代，其中Ωw⊆W，Aw 是Ωw 上的σ-代数。我们之所以希望不同世界之间的整个空间有所不同，是为了反映对哪个概率空间是正确的的不确定性。对于概率公式的语义，(M,w)⊨P(ϕ)≥q 当且仅当μw({w′∣(M,w′)⊨ϕ})≥q。如果{w′∣(M,w′)⊨ϕ}∉Aw，这样的定义就不是良定义的。因此，通常对模型施加约束，以确保这样的集合始终在σ-代数中。

### 4.4 结合定量和定性不确定性

虽然概率在某个层面上反映了数量上的不确定性，但也可能存在关于概率的质性不确定性。我们可能希望有质性和数量上的不确定性，因为对于某些情况，我们可能对其事件的概率不想分配具体的数字，而对于其他情况，我们可能对其事件的概率有一定的了解；而且这些情况可以相互影响。

在许多情况下，我们可能不想为不确定性分配数值。一个例子是当计算机选择一个位 0 或 1 时，我们对于这个位的选择一无所知。而硬币抛掷的结果通常被用作我们会为各个结果分配概率的例子。

这些情况的相互作用的一个例子是，位的结果决定了是使用一个公平的硬币还是一个有偏的硬币（例如，正面的概率为 2/3）进行硬币抛掷。因此，关于抛硬币结果为正面的概率是 1/2 还是 2/3 存在质性上的不确定性。

形式化概率和定性不确定性之间的相互作用的一种方法是在模型中添加另一个关系和语言中的模态运算符，就像 Fagin 和 Halpern（1988 年，1994 年）所做的那样。形式上，我们在基本有限概率模型中添加一个关系 R⊆W2。然后我们在语言中添加一个模态运算符□，使得当且仅当 wRw′时，(M,w)⊨□ϕ 当且仅当(M,w′)⊨ϕ。

考虑以下例子：

* W={(0,H),(0,T),(1,H),(1,T)},
* Φ={h,t} 是原子命题的集合，
* R=W2，
* P 与 (0,H) 和 (0,T) 相关联，将分布映射 (0,H) 和 (0,T) 分别映射到 1/2，并与 (1,H) 和 (1,T) 相关联，将 (1,H) 映射到 2/3，(1,T) 映射到 1/3，
* V 将 h 映射到集合{(0,H),(1,H)}，将 t 映射到集合{(0,T),(1,T)}。

然后在(0,H)处，以下公式成立：¬□h∧(¬□P(h)=1/2)∧(⬦P(h)=1/2)。这可以理解为不知道 h 是否为真，不知道 h 的概率为 1/2，但 h 的概率可能为 1/2。

### 4.5 对定量和定性交互的约束

我们将更详细地讨论如何将定量和定性的不确定性联系起来。其中很多内容与有关信念的形式表示的目标相似，但我们在这里重点关注定性和定量工具之间的联系，例如上面讨论的认知关系 R 和概率空间 Pw=(Ωw,Aw,μw)。

与其让定量和定性的不确定性自由交互，更现实的做法是在两者之间引入约束。Fagin 和 Halpern（1994）提出了一些约束。其中一种约束称为一致性，确保局部定义的样本空间Ωw 包含在代理人在定性上认为可能的所有世界集合中。另一种约束称为一致性，确保样本空间Ωw 内的所有世界在概率空间上达成一致。这两个约束在第 4.4 节关于概率分配的定性不确定性的示例中得到满足。

另一种约束定量和定性不确定性之间关系的方法是从定量不确定性中定义定性信念。一种自然的方法是将对 A 的信念定义为对 A 的定量确定性（分配 A 的概率为 1）。这可以通过由认知关系 R 定义的方式产生。

若且唯若μw({v})>0，则(w,v)∈R。

与其说样本空间Ωw 包含在定性可能性集合中，不如说相反；在这里，样本空间通常是所有可能世界的集合，而一个代理人认为可能的集合是其中的一个子集。在本小节的其余部分，我们假设所有世界都同意一个单一的概率空间 P=(W,P,μ)。

我们可能希望允许一种信念形式比概率 1 更弱。例如，某人可能“相信”她的阳性医学检测结果，同时承认存在虚阳性的非零机会，因此无法确定她是否患有被检测的疾病。这种信念虽然比概率确定性更弱，但如果它导致决策和行动，可能会特别相关。定义这种弱信念的一种自然方式是“洛克论命题”，它将对事件 A 的信念定义为μ(A)≥r，其中 r 是小于 1 的某个阈值（有关信念形式的形式化表示的更多细节，请参见信念的形式化表示条目），尽管这种信念并不总是可以从认识关系中产生。或者，可以通过概率函数μ和阈值 q 来定义一个认识关系 R，其中

(w,v)∈R 当且仅当 μ({v})≥q。

由于我们假设每个世界都同意概率空间，关系 R 满足 KD45 信念公理（参见关于认识逻辑的 KD45 公理条目）。可能性的阈值 q 通常非常小；它是被认为合理可能性的最低可能性，并被纳入认识关系 R 中。相比之下，Lockean 阈值 r 介于 0.5 和 1 之间。根据 Lockean 论点定义的信念运算符不一定对应于任何认识关系，但有特殊情况下它确实对应。如果存在一个 q 使得 K={w∣μ({w})>q}是 P 稳定的（其中 W 的子集 K 是 P 稳定的，如果对于所有 w∈K，μ({w})>μ(W∖K)），那么由(w,v)∈R 当且仅当 v∈K 定义的认识关系 R 会产生一个满足 Lockean 论点的模态信念运算符，其阈值为 r=P(K)（参见 Leitgeb 2013 和 Delgrande 2022）。

### 4.6 动力学

我们已经讨论了两种模态概率逻辑的观点。一种是时间性或随机性的观点，其中与每个状态相关联的概率分布决定了转换到其他状态的可能性；另一种是关于代理人主观观点的观点，代理人可以推理其他代理人的概率。随机系统是动态的，因为它表示不同转换的概率，这可以通过模态概率模型本身来传达。但从主观的角度来看，模态概率模型是静态的：概率与当前情况有关。尽管在解释上是静态的，但模态概率设置可以放置在动态环境中。

模态概率设置中的动态通常涉及对所有可能世界中的概率进行同时更改。直观地说，这种变化可能是由于调用每个可能世界的概率修订的新信息引起的。主观概率的动态通常使用条件概率建模，例如在 Kooi（2003）、Baltag 和 Smets（2008）以及 van Benthem 等人（2009）中。条件概率 P(E∣F)表示在 F 的条件下 E 的概率，即 P(E∩F)/P(F)。当通过集合 F 进行更新时，概率分布 P 被概率分布 P'替换，使得 P'(E)=P(E∣F)，只要 P(F)≠0。在本动态子节的剩余部分，让我们假设每个相关集合都具有正概率。

使用线性组合的概率逻辑，我们可以通过 P(ϕ∣ψ)≥q 来缩写条件概率。在模态设置中，可以向语言中添加一个运算符[!ψ]，使得 M,w⊨[!ψ]ϕ当且仅当 M′,w⊨ϕ，其中 M′是通过ψ修订每个世界的概率得到的模型。注意，!ψ与 P(ϕ∣ψ)≥q 不同，因为在!ψ中，ϕ内部的概率术语的解释受到ψ的修订的影响，而在 P(ϕ∣ψ)≥q 中，它们不受影响，这就是为什么 P(ϕ∣ψ)≥q 可以很好地展开为另一个概率公式的原因。然而，[!ψ]ϕ也可以展开，但需要更多的步骤：

 !ψ↔(ψ→P([!ψ]ϕ∣ψ)≥q)。

关于模态概率逻辑及其动态的其他概述，请参见 Demey 和 Kooi（2014）、Demey 和 Sack（2015）以及动态认知逻辑条目中关于概率更新的附录 L。

## 5. 第一阶概率逻辑

在本节中，我们将讨论第一阶概率逻辑。正如本条目第 1 节所解释的那样，逻辑可以具有多种概率特征。逻辑的模型可以具有概率方面，推论的概念可以具有概率风味，或者逻辑的语言可以包含概率运算符。在本节中，我们将重点关注那些具有第一阶特征的逻辑运算符。第一阶特征是区分这些运算符与前一节中的概率模态运算符的特点。

考虑来自 Bacchus（1990）的以下示例：

超过 75%的鸟会飞。

这个句子有一个直接的概率解释，即当随机选择一只鸟时，被选择的鸟会飞的概率超过 3/4。需要一阶概率运算符来表达这类陈述。

还有另一种类型的句子，比如 Halpern（1990）中讨论的以下句子：

Tweety 飞行的概率大于 0.9。

这个句子考虑了 Tweety（一种特定的鸟）能否飞行的概率。这两种类型的句子由两种不同类型的语义处理，前者涉及到一个域上的概率，而后者涉及到一个与域分离的可能世界集合上的概率。

### 5.1 一阶概率逻辑的一个例子

在这个小节中，我们将更详细地研究一个特定的一阶概率逻辑，其语言尽可能简单，以便专注于概率量词。这种语言非常类似于经典一阶逻辑的语言，但与熟悉的全称量词和存在量词不同，该语言包含一个概率量词。

该语言建立在一组个体变量（用 x、y、z、x1、x2 等表示）、一组函数符号（用 f、g、h、f1 等表示），每个符号都与一个元数相关联（零元函数符号也称为个体常量），以及一组谓词字母（用 R、P1 等表示），每个符号都与一个元数相关联。该语言包含两种语法对象，即项和公式。项的定义如下：

* 每个个体变量 x 都是一个项。
* 每个具有 n 元的函数符号 f 后面跟着一个 n 元组(t1,...,tn)都是一个术语。

根据这个术语的定义，公式可以按如下方式归纳定义：

* 每个具有 n 元的谓词符号 R 后面跟着一个 n 元组(t1,...,tn)都是一个公式。
* 如果ϕ是一个公式，那么¬ϕ也是一个公式。
* 如果ϕ和ψ是公式，那么(ϕ∧ψ)也是一个公式。
* 如果ϕ是一个公式，q 是区间[0,1]中的有理数，那么 Px(ϕ)≥q 也是一个公式。

形如 Px(ϕ)≥q 的公式应该被理解为：“选择一个满足ϕ的 x 的概率至少为 q”。公式 Px(ϕ)≤q 是 Px(¬ϕ)≥1−q 和 Px(ϕ)=q 的缩写形式。ϕ中的每个自由出现的 x 都受到运算符的约束。

这种语言在非常简单的一阶模型上进行解释，这些模型是三元组 M=(D,I,P)，其中论域 D 是一个有限非空对象集合，解释 I 将每个 n 元函数符号与 D 上的 n 元函数相关联，并将每个 n 元谓词符号与 D 上的 n 元关系相关联。P 是一个概率函数，它将概率 P(d)分配给 D 中的每个元素 d，使得∑d∈DP(d)=1。

为了解释包含自由变量的公式，还需要一个分配 g，它将 D 中的元素分配给每个变量。给定模型 M=(D,I,P)和分配 g，术语 t 的解释[[t]]M,g 如下递归定义：

* [[x]]M,g=g(x)
* [[f(t1,…,tn)]]M,g=I(f)([[t1]],…,[[tn]])

真理被定义为模型与赋值和公式之间的关系：⊨

* M,g⊨R(t1,…,tn) 当且仅当 ([[t1]],…,[[tn]])∈I(R)
* M,g⊨¬ϕ 当且仅当 M,g⊭ϕ
* M,g⊨(ϕ∧ψ) 当且仅当 M,g⊨ϕ 且 M,g⊨ψ
* M,g⊨Px(ϕ)≥q 当且仅当 ∑d:M,g[x↦d]⊨ϕP(d)≥q

举个例子，考虑一个包含九个弹珠的花瓶模型：五个是黑色的，四个是白色的。假设 P 将每个弹珠的概率都分配为 1/9，这表达了任何一个弹珠被选中的可能性都是相等的。假设语言中包含一个一元谓词 B，其解释是黑色弹珠的集合。在这个模型中，无论如何分配，句子 Px(B(x))=5/9 都是真的。

我们刚刚介绍的逻辑过于简单，无法涵盖许多关于概率的推理形式。我们将在这里讨论三个扩展。

#### 5.1.1 对多个变量进行量化

首先，我们希望推理涉及从域中选择多个对象的情况。例如，考虑从花瓶中首先选择一个黑色大理石，放回去，然后再选择一个白色大理石的概率。这个概率是 5/9 × 4/9 = 20/81，但我们不能用上述语言来表达这个概率。为此，我们需要一个同时处理多个变量的运算符，写作 Px1,…xn(ϕ)≥q。这样，这类运算符的语义将需要在 Dn 的子集上提供一个概率度量。最简单的方法是简单地将概率函数 P 在 D 上的乘积作为度量，这可以看作是将 P 扩展到元组上，其中 P(d1,…dn)=P(d1)×⋯×P(dn)，从而得到以下语义：

* M,g⊨Px1…xn(ϕ)≥q 当且仅当∑(d1,…,dn):M,g[x1↦d1,…,xn↦dn]⊨ϕP(d1,…,dn)≥q

这种方法由 Bacchus（1990）和 Halpern（1990）采用，对应于选择是独立且可替换的观念。根据这些语义，上述示例可以形式化为 Px,y(B(x)∧¬B(y))=20/81。还有更一般的方法来扩展域上的度量到域中的元组，例如 Hoover（1978）和 Keisler（1985）的方法。

#### 5.1.2 条件概率

当考虑到最初的例子，即超过 75％的鸟会飞，人们会发现这在一个包含非鸟对象的模型中无法充分捕捉到。这些对象对于表达人们的意图并不重要，但概率量词却量化整个域。为了限制量化，必须添加条件概率运算符 Px(ϕ|ψ)≥q，并具有以下语义：

* M,g⊨Px(ϕ|ψ)≥q 当且仅当存在一个 d∈D 使得 M,g[x↦d]⊨ψ 成立
  ∑d:M,g[x↦d]⊨ϕ∧ψP(d)∑d:M,g[x↦d]⊨ψP(d)≥q.

利用这些运算符，公式 Px(F(x)∣B(x))>3/4 表达了超过 75%的鸟会飞行。

#### 5.1.3 概率作为术语

当人们想要比较不同事件的概率时，比如选择一个黑球和选择一个白球的概率，将概率视为独立的术语可能更方便。也就是说，表达式 Px(ϕ) 被解释为指代某个有理数。然后可以通过加法和乘法等算术运算，以及通过等式和不等式等运算符来扩展语言，以比较概率术语。可以这样说，选择一个黑球的概率是选择一个白球的两倍，即 Px(B(x))=2×Px(W(x))。这样的扩展要求语言包含两个独立的术语类别：一个用于概率、数字以及对这些术语进行算术运算的结果，另一个用于概率运算符量化的论域。我们不会在这里详细介绍这样的语言和语义。可以在 Bacchus (1990)中找到这样的系统。

### 5.2 可能世界一阶概率逻辑

在本小节中，我们考虑一阶概率逻辑与可能世界语义（我们简称为 FOPL）。FOPL 的语言与我们在第 5.1 节中给出的 Bacchus 的例子类似，只是这里我们有形如(∀x)ϕ的全量词公式，而不是形如 Px(ϕ)≥q 的概率公式，我们有形如 P(ϕ)≥q 的概率公式（类似于命题概率逻辑中的概率公式）。

FOPL 的模型形式为 M=(W,D,I,P)，其中 W 是一组可能世界，D 是一个论域，I 是一个局部解释函数，将每个 w∈W 映射到一个解释函数 I(w)，该函数将每个函数和谓词符号映射到适当元数的函数或谓词，P 是一个概率函数，为 W 中的每个 w 分配一个概率 P(w)。

类似于之前的简单例子，我们涉及一个分配函数 g，将每个变量映射到论域 D 的一个元素。为了解释术语，对于每个模型 M、世界 w∈W 和分配函数 g，我们将每个术语 t 映射到论域元素，如下所示：

* [[x]]M,w,g=g(x)
* [[f(t1,…,tn)]]M,w,g=I(w)(f)([[t1]],…,[[tn]])

真理根据指定世界的模型（具有指定世界的模型）之间的关系⊨来定义，其中包括分配和公式，如下所示：

* M,w,g⊨R(t1,…,tn) 当且仅当 ([[t1]],…,[[tn]])∈I(w)(R)
* M,w,g⊨¬ϕ 当且仅当 M,w,g⊭ϕ
* M,w,g⊨(ϕ∧ψ) 当且仅当 M,w,g⊨ϕ 且 M,w,g⊨ψ
* M,w,g⊨(∀x)φ 当且仅当 M,w,g[x/d]⊨φ 对于所有的 d∈D 成立，其中 g[x/d] 与 g 相同，只是将 x 映射到 d。
* M,w,g⊨P(φ)≥q 当且仅当 P({w′∣(M,w′,g)⊨φ})≥q。

举个例子，考虑一个模型，其中有两个可能的花瓶：4 个白色弹珠和 4 个黑色弹珠被放入了两个可能的花瓶中。但是后来又放入了另一个弹珠，称为 x，在一个可能的花瓶中，x 是白色的，在另一个花瓶中，x 是黑色的。因此最终有两个可能的花瓶：一个有 5 个黑色弹珠和 4 个白色弹珠，另一个有 4 个黑色弹珠和 5 个白色弹珠。假设 P 对这两个可能的花瓶分配了 1/2 的概率。那么对于这个变量分配，P(B(last))=1/2 是真的，如果选择了任何其他的变量分配，公式 (∃x)P(B(x))=1/2 仍然是真的。

### 5.3 金属逻辑学

通常很难为一阶概率逻辑提供证明系统，因为这些逻辑的有效性问题通常是不可判定的。与经典一阶逻辑不同的是，即使一个推理是有效的，也不能在有限时间内找到（参见 Abadi 和 Halpern（1994））。

尽管如此，对于一阶概率逻辑有许多结果。例如，Hoover（1978）和 Keisler（1985）研究了完备性结果。Bacchus（1990）和 Halpern（1990）分别提供了完备的公理化以及一阶概率逻辑和可能世界一阶概率逻辑的组合。在 Ognjanović和 Rašković（2000）中，给出了一个更一般的可能世界一阶概率逻辑的无穷完备公理化。


## Bibliography

* Abadi, M. and Halpern, J. Y., 1994, “Decidability and Expressiveness for First-Order Logics of Probability,” *Information and Computation*, 112: 1–36.
* Adams, E. W. and Levine, H. P., 1975, “On the Uncertainties Transmitted from Premisses to Conclusions in Deductive Inferences,” *Synthese*, 30: 429–460.
* Adams, E. W., 1998, *A Primer of Probability Logic*, Stanford, CA: CSLI Publications.
* Arló Costa, H., 2005, “Non-Adjunctive Inference and Classical Modalities,” *Journal of Philosophical Logic*, 34: 581–605.
* Bacchus, F., 1990, *Representing and Reasoning with Probabilistic Knowledge*, Cambridge, MA: The MIT Press.
* Baltag, A. and Smets, S., 2008, “Probabilistic Dynamic Belief Revision,” *Synthese*, 165: 179–202.
* van Benthem, J., 2017, “Against all odds: when logic meets probability”, in *ModelEd, TestEd, TrustEd. Essays Dedicated to Ed Brinksma on the Occasion of His 60th Birthday*, J. P. Katoen, R. Langerak and A. Rensink (eds.), Cham: Springer, pp. 239–253.
* van Benthem, J., Gerbrandy, J., and Kooi, B., 2009, “Dynamic Update with Probabilities,” *Studia Logica*, 93: 67–96.
* Boole, G., 1854, *An Investigation of the Laws of Thought, on which are Founded the Mathematical Theories of Logic and Probabilities*, London: Walton and Maberly.
* Burgess, J., 1969, “Probability Logic,” *Journal of Symbolic Logic*, 34: 264–274.
* Carnap, R., 1950, *Logical Foundations of Probability*, Chicago, IL: University of Chicago Press.
* Cross, C., 1993, “From Worlds to Probabilities: A Probabilistic Semantics for Modal Logic,” *Journal of Philosophical Logic*, 22: 169–192.
* Delgrande, J. and Renne, B., 2015, “The Logic of Qualitative Probability,” in *Proceedings of the Twenty-Fourth International Joint Conference on Artificial Intelligence (IJCAI 2015)*, Q. Yang and M. Wooldridge (eds.), Palo Alto, CA: AAAI Press, pp. 2904–2910.
* Delgrande, J., Renne, B., and Sack, J., 2019, “The logic of qualitative probability,” *Artificial Intelligence*, 275: 457–486.
* Delgrande, J., Sack, J., Lakemeyer, G., and Pagnucco, M., 2022, “Epistemic Logic of Likelihood and Belief,” in *Proceedings of the Thirty-First International Joint Conference on Artificial Intelligence* (IJCAI-22), published by the International Joint Conferences on Artificial Intelligence, pp. 2599–2605. [[Delgrande et al. 2022 available online](https://www.ijcai.org/proceedings/2022/0360.pdf)
* Demey, L. and Kooi, B., 2014, “Logic and Probabilistic Update,” in A. Baltag and S. Smets (eds.), *Johan van Benthem on Logic and Information Dynamics*, pp. 381–404.
* Demey, L. and Sack, J., 2015, “Epistemic Probabilistic Logic,” in the *Handbook of Epistemic Logic*. H. van Ditmarsch, J. Halpern, W. van der Hoek and B. Kooi (eds.), London: College Publications, pp. 147–202.
* Dempster, A., 1968, “A Generalization of Bayesian Inference,” *Journal of the Royal Statistical Society*, 30: 205–247.
* De Morgan, A., 1847, *Formal Logic*, London: Taylor and Walton.
* de Finetti, B., 1937, “La Prévision: Ses Lois Logiques, Ses Sources Subjectives”, *Annales de l’Institut Henri Poincaré*, 7: 1–68; translated as “Foresight. Its Logical Laws, Its Subjective Sources,” in *Studies in Subjective Probability*, H. E. Kyburg, Jr. and H. E. Smokler (eds.), Malabar, FL: R. E. Krieger Publishing Company, 1980, pp. 53–118.
* Douven, I. and Rott, H., 2018, “From probabilities to categorical beliefs: Going beyond toy models,” *Journal of Logic and Computation*, 28: 1099–1124.
* Eagle, A., 2010, *Philosophy of Probability: Contemporary Readings*, London: Routledge.
* Fagin, R. and Halpern, J. Y., 1988, “Reasoning about Knowledge and Probability,” in *Proceedings of the 2nd conference on Theoretical aspects of reasoning about knowledge*, M. Y. Vardi (ed.), Pacific Grove, CA: Morgan Kaufmann, pp. 277–293.
* –––, 1994, “Reasoning about Knowledge and Probability,” *Journal of the ACM*, 41: 340–367.
* Fagin, R., Halpern, J. Y., and Megiddo, N., 1990, “A Logic for Reasoning about Probabilities,” *Information and Computation*, 87: 78–128.
* Fitelson, B., 2006, “Inductive Logic,” in *The Philosophy of Science: An Encyclopedia*, J. Pfeifer and S. Sarkar (eds.), New York, NY: Routledge, pp. 384–394.
* van Fraassen, B., 1981a, “A Problem for Relative Information Minimizers in Probability Kinematics,” *British Journal for the Philosophy of Science*, 32:375–379.
* –––, 1981b, “Probabilistic Semantics Objectified: I. Postulates and Logics,” *Journal of Philosophical Logic*, 10: 371–391.
* –––, 1983, “Gentlemen’s Wagers: Relevant Logic and Probability,” *Philosophical Studies*, 43: 47–61.
* –––, 1984, “Belief and the Will,” *Journal of Philosophy*, 81: 235–256.
* Gärdenfors, P., 1975a, “Qualitative Probability as an Intensional Logic,” *Journal of Philosophical Logic*, 4: 171–185.
* –––, 1975b, “Some Basic Theorems of Qualitative Probability,” *Studia Logica*, 34: 257–264.
* Georgakopoulos, G., Kavvadias, D., and Papadimitriou, C. H., 1988, “Probabilistic Satisfiability,” *Journal of Complexity*, 4: 1–11.
* Gerla, G., 1994, “Inferences in Probability Logic,” *Aritificial Intelligence*, 70: 33–52.
* Gillies, D., 2000, *Philosophical Theories of Probability*, London: Routledge.
* Goldblatt, R. (2010) “Deduction systems for coalgebras over measurable spaces.” *Journal of Logic and Computation* 20(5): 1069–1100
* Goldman, A. J. and Tucker, A. W., 1956, “Theory of Linear Programming,” in *Linear Inequalities and Related Systems. Annals of Mathematics Studies 38*, H. W. Kuhn and A. W. Tucker (eds.), Princeton: Princeton University Press, pp. 53–98.
* Goosens, W. K., 1979, “Alternative Axiomatizations of Elementary Probability Theory,” *Notre Dame Journal of Formal Logic*, 20: 227–239.
* Hájek, A., 2001, “Probability, Logic, and Probability Logic,” in *The Blackwell Guide to Philosophical Logic*, L. Goble (ed.), Oxford: Blackwell, pp. 362–384.
* Hájek, A. and Hartmann, S., 2010, “Bayesian Epistemology,” in *A Companion to Epistemology*, J. Dancy, E. Sosa, and M. Steup (eds.), Oxford: Blackwell, pp. 93–106.
* Haenni, R. and Lehmann, N., 2003, “Probabilistic Argumentation Systems: a New Perspective on Dempster-Shafer Theory,” *International Journal of Intelligent Systems*, 18: 93–106.
* Haenni, R., Romeijn, J.-W., Wheeler, G., and Williamson, J., 2011, *Probabilistic Logics and Probabilistic Networks*, Dordrecht: Springer.
* Hailperin, T., 1965, “Best Possible Inequalities for the Probability of a Logical Function of Events,” *American Mathematical Monthly*, 72: 343–359.
* –––, 1984, “Probability Logic,” *Notre Dame Journal of Formal Logic*, 25: 198–212.
* –––, 1986, *Boole’s Logic and Probability*, Amsterdam: North-Holland.
* –––, 1996, *Sentential Probability Logic: Origins, Development, Current Status, and Technical Applications*, Bethlehem, PA: Lehigh University Press.
* Halpern, J. Y. and Rabin, M. O., 1987, “A Logic to Reason about Likelihood”, *Artificial Intelligence*, 32: 379–405.
* Halpern, J. Y., 1990, “An analysis of first-order logics of probability”, *Artificial Intelligence*, 46: 311–350.
* –––, 1991, “The Relationship between Knowledge, Belief, and Certainty,” *Annals of Mathematics and Artificial Intelligence*, 4: 301–322. Errata appeared in *Annals of Mathematics and Artificial Intelligence*, 26 (1999): 59–61.
* –––, 2003, *Reasoning about Uncertainty*, Cambridge, MA: The MIT Press.
* Hamblin, C.L., 1959, “The modal ‘probably’”, *Mind*, 68: 234–240.
* Hansen, P. and Jaumard, B., 2000, “Probabilistic Satisfiability,” in *Handbook of Defeasible Reasoning and Uncertainty Management Systems. Volume 5: Algorithms for Uncertainty and Defeasible Reasoning*, J. Kohlas and S. Moral (eds.), Dordrecht: Kluwer, pp. 321–367.
* Harrison-Trainor M., Holliday, W. H., and Icard, T., 2016, “A note on cancellation axioms for comparative probability”, *Theory and Decision*, 80: 159–166.
* –––, 2018, “Inferring probability comparisons”, *Mathematical Social Sciences*, 91: 62–70.
* Hartmann, S. and Sprenger J., 2010, “Bayesian Epistemology,” in *Routledge Companion to Epistemology*, S. Bernecker and D. Pritchard (eds.), London: Routledge, pp. 609–620.
* Heifetz, A. and Mongin, P., 2001, “Probability Logic for Type Spaces”, *Games and Economic Behavior*, 35: 31–53.
* Herzig, A. and Longin, D., 2003, “On Modal Probability and Belief,” in *Proceedings of the 7th European Conference on Symbolic and Quantitative Approaches to Reasoning with Uncertainty (ECSQARU 2003)*, T.D. Nielsen and N.L. Zhang (eds.), Lecture Notes in Computer Science 2711, Berlin: Springer, pp. 62–73.
* Hoover, D. N., 1978, “Probability Logic,” *Annals of Mathematical Logic*, 14: 287–313.
* Howson, C., 2003, “Probability and Logic,” *Journal of Applied Logic*, 1: 151–165.
* –––, 2007, “Logic with Numbers,” *Synthese*, 156: 491–512.
* –––, 2009, “Can Logic be Combined with Probability? Probably,” *Journal of Applied Logic*, 7: 177–187.
* Ilić-Stepić, Ognjanović, Z., Ikodinović, N., Perović, A., (2012), “A p-adic probability logic,” *Mathematical Logic Quarterly* 58(4–5): 63–280.
* Jaynes, E. T., 2003, *Probability Theory: The Logic of Science*, Cambridge: Cambridge University Press.
* Jeffrey, R., 1992, *Probability and the Art of Judgement*, Cambridge: Cambridge University Press.
* Jonsson, B., Larsen, K., and Yi, W., 2001 “Probabilistic Extensions of Process Algebras,” in *Handbook of Process Algebra*, J. A. Bergstra, A. Ponse, and S. A. Smolka (eds.), Amsterdam: Elsevier, pp. 685–710.
* Kavvadias, D. and Papadimitriou, C. H., 1990, “A Linear Programming Approach to Reasoning about Probabilities,” *Annals of Mathematics and Artificial Intelligence*, 1: 189–205.
* Keisler, H. J., 1985, “Probability Quantifiers,” in *Model-Theoretic Logics*, J. Barwise and S. Feferman (eds.), New York, NY: Springer, pp. 509–556.
* Kooi B. P., 2003, “Probabilistic Dynamic Epistemic Logic,” *Journal of Logic, Language and Information*, 12: 381–408.
* Kraft, C. H., Pratt, J. W., and Seidenberg, A., 1959, “Intuitive Probability on Finite Sets,” *Annals of Mathematical Statistics*, 30: 408–419.
* Kyburg, H. E., 1965, “Probability, Rationality, and the Rule of Detachment,” in *Proceedings of the 1964 International Congress for Logic, Methodology, and Philosophy of Science*, Y. Bar-Hillel (ed.), Amsterdam: North-Holland, pp. 301–310.
* –––, 1994, “Uncertainty Logics, ” in *Handbook of Logic in Artificial Intelligence and Logic Programming*, D. M. Gabbay, C. J. Hogger, and J. A. Robinson (eds.), Oxford: Oxford University Press, pp. 397–438.
* Larsen, K. and Skou, A., 1991, “Bisimulation through Probabilistic Testing,” *Information and Computation*, 94: 1–28.
* Leblanc, H., 1979, “Probabilistic Semantics for First-Order Logic,” *Zeitschrift für mathematische Logik und Grundlagen der Mathematik*, 25: 497–509.
* –––, 1983, “Alternatives to Standard First-Order Semantics,” in *Handbook of Philosophical Logic, Volume I*, D. Gabbay and F. Guenthner (eds.), Dordrecht: Reidel, pp. 189–274.
* Leitgeb, H., 2013, “Reducing belief simpliciter to degrees of belief,” *Annals of Pure and Applied Logic*, 164: 1338–1389.
* –––, 2014, “The stability theory of belief,” *Philosophical Review*, 123: 131–171.
* –––, 2017, *The Stability of Belief. How Rational Belief Coheres with Probability*, Oxford: Oxford University Press.
* Leitgeb, H., 2013, “Reducing Belief Simpliciter to Degrees of Belief,” *Annals of Pure and Applied Logic*, 164: 1338–1389.
* Lewis, D., 1980, “A Subjectivist’s Guide to Objective Chance,” in *Studies in Inductive Logic and Probability. Volume 2*, R. C. Jeffrey (ed.), Berkeley, CA: University of California Press, pp. 263–293; reprinted in *Philosophical Papers. Volume II*, Oxford: Oxford University Press, 1987, pp. 83–113.
* Lin, H. and Kelly, K. T., 2012a, “A geo-logical solution to the lottery paradox, with applications to conditional logic,” *Synthese*, 186: 531–575.
* –––, 2012b, “Propositional reasoning that tracks probabilistic reasoning,” *Journal of Philosophical Logic*, 41: 957–981.
* Miller, D., 1966, “A Paradox of Information,” *British Journal for the Philosophy of Science*, 17: 59–61.
* Morgan, C., 1982a, “There is a Probabilistic Semantics for Every Extension of Classical Sentence Logic,” *Journal of Philosophical Logic*, 11: 431–442.
* –––, 1982b, “Simple Probabilistic Semantics for Propositional K, T, B, S4, and S5,” *Journal of Philosophical Logic*, 11: 443–458.
* –––, 1983, “Probabilistic Semantics for Propositional Modal Logics”. in *Essays in Epistemology and Semantics*, H. Leblanc, R. Gumb, and R. Stern (eds.), New York, NY: Haven Publications, pp. 97–116.
* Morgan, C. and Leblanc, H., 1983, “Probabilistic Semantics for Intuitionistic Logic,” *Notre Dame Journal of Formal Logic*, 24: 161–180.
* Nilsson, N., 1986, “Probabilistic Logic,” *Artificial Intelligence*, 28: 71–87.
* –––, 1993, “Probabilistic Logic Revisited,” *Artificial Intelligence*, 59: 39–42.
* Ognjanović, Z. and Rašković, M., 1999, “Some probability logics with new types of probability operators,” *Journal of Logic and Computation* 9 (2): 181–195.
* Ognjanović, Z. and Rašković, M., 2000, “Some first-order probability logics,” *Theoretical Computer Science* 247 (1–2): 191–212.
* Ognjanović, Z., Rašković, M., and Marković, Z., 2016, *Probability Logics: Probability-Based Formalization of Uncertain Reasoning*, Springer International Publishing AG.
* Ognjanović, Z., Perović, A., and Rašković, M., 2008, “Logics with the Qualitative Probability Operator,” *Logic Journal of the IGPL* 16 (2): 105–120.
* Paris, J. B., 1994, *The Uncertain Reasoner’s Companion, A Mathematical Perspective*, Cambridge: Cambridge University Press.
* Parma, A. and Segala, R., 2007, “Logical Characterizations of Bisimulations for Discrete Probabilistic Systems,” in *Proceedings of the 10th International Conference on Foundations of Software Science and Computational Structures (FOSSACS)*, H. Seidl (ed.), Lecture Notes in Computer Science 4423, Berlin: Springer, pp. 287–301.
* Pearl, J., 1991, “Probabilistic Semantics for Nonmonotonic Reasoning,” in *Philosophy and AI: Essays at the Interface*, R. Cummins and J. Pollock (eds.), Cambridge, MA: The MIT Press, pp. 157–188.
* Perović, A., Ognjanović, Z., Rašković, M., Marković, Z., 2008, “A probabilistic logic with polynomial weight formulas”. In Hartmann, S., Kern-Isberner, G. (eds.) *Proceedings of the Fifth International Symposium Foundations of Information and Knowledge Systems*, FoIKS 2008, Pisa, Italy, 11–15 February 2008. *Lecture Notes in Computer Science*, vol. 4932, pp. 239–252. Springer.
* Ramsey, F. P., 1926, “Truth and Probability”, in *Foundations of Mathematics and other Essays*, R. B. Braithwaite (ed.), London: Routledge and Kegan Paul, 1931, pp. 156–198; reprinted in *Studies in Subjective Probability*, H. E. Kyburg, Jr. and H. E. Smokler (eds.), 2nd ed., Malabar, FL: R. E. Krieger Publishing Company, 1980, pp. 23–52; reprinted in *Philosophical Papers*, D. H. Mellor (ed.) Cambridge: Cambridge University Press, 1990, pp. 52–94.
* Reichenbach, H., 1949, *The Theory of Probability*, Berkeley, CA: University of California Press.
* Romeijn, J.-W., 2011, “Statistics as Inductive Logic,” in *Handbook for the Philosophy of Science. Vol. 7: Philosophy of Statistics*, P. Bandyopadhyay and M. Forster (eds.), Amsterdam: Elsevier, pp. 751–774.
* Scott, D., 1964, “Measurement Structures and Linear Inequalities,” *Journal of Mathematical Psychology*, 1: 233–247.
* Segerberg, K., 1971, “Qualitative Probability in a Modal Setting”, in *Proceedings 2nd Scandinavian Logic Symposium*, E. Fenstad (ed.), Amsterdam: North-Holland, pp. 341–352.
* Shafer, G., 1976, *A Mathematical Theory of Evidence*, Princeton, NJ: Princeton University Press.
* Suppes, P., 1966, “Probabilistic Inference and the Concept of Total Evidence,” in *Aspects of Inductive Logic*, J. Hintikka and P. Suppes (eds.), Amsterdam: Elsevier, pp. 49–65.
* Szolovits, P. and Pauker S.G., 1978, “Categorical and Probabilistic Reasoning in Medical Diagnosis,” *Artificial Intelligence*, 11: 115–144.
* Tarski, A., 1936, “Wahrscheinlichkeitslehre und mehrwertige Logik”, *Erkenntnis*, 5: 174–175.
* Vennekens, J., Denecker, M., and Bruynooghe, M., 2009, “CP-logic: A Language of Causal Probabilistic Events and its Relation to Logic Programming,” *Theory and Practice of Logic Programming*, 9: 245–308.
* Walley, P., 1991, *Statistical Reasoning with Imprecise Probabilities*, London: Chapman and Hall.
* Williamson, J., 2002, “Probability Logic,” in *Handbook of the Logic of Argument and Inference: the Turn Toward the Practical*, D. Gabbay, R. Johnson, H. J. Ohlbach, and J. Woods (eds.), Amsterdam: Elsevier, pp. 397–424.
* Yalcin, S., 2010, “Probability Operators,” *Philosophy Compass*, 5: 916–937.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-probability). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-probability/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-probability&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](http://philpapers.org/sep/logic-probability/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[Bayes’ Theorem](https://plato.stanford.edu/entries/bayes-theorem/) | [belief, formal representations of](https://plato.stanford.edu/entries/formal-belief/) | [conditionals](https://plato.stanford.edu/entries/conditionals/) | [epistemology: Bayesian](https://plato.stanford.edu/entries/epistemology-bayesian/) | [induction: problem of](https://plato.stanford.edu/entries/induction-problem/) | [logic: conditionals](https://plato.stanford.edu/entries/logic-conditionals/) | [logic: fuzzy](https://plato.stanford.edu/entries/logic-fuzzy/) | [logic: inductive](https://plato.stanford.edu/entries/logic-inductive/) | [probabilities, imprecise](https://plato.stanford.edu/entries/imprecise-probabilities/) | [probability, interpretations of](https://plato.stanford.edu/entries/probability-interpret/) | [quantum theory: quantum logic and probability theory](https://plato.stanford.edu/entries/qt-quantlog/) | [reasoning: defeasible](https://plato.stanford.edu/entries/reasoning-defeasible/)

### Acknowledgments

We would like to thank Johan van Benthem, Joe Halpern, Jan Heylen, Jan-Willem Romeijn and the anonymous referees for their comments on this entry.

[Copyright © 2023](https://plato.stanford.edu/info.html#c) by  
[Lorenz Demey](https://sites.google.com/site/lorenzdemey/)  
[Barteld Kooi](https://www.rug.nl/staff/b.p.kooi/)  
[Joshua Sack](http://www.joshuasack.info/) <[*joshua.sack@gmail.com*](mailto:joshua%2esack%40gmail%2ecom)>
