# 数学中的逻辑代数 the mathematics of (J. Donald Monk)

*首次发表于 2002 年 7 月 5 日星期五；实质性修订于 2018 年 7 月 11 日星期三*

逻辑代数是仅具有联结词的两值逻辑代数，或者等效地说是集合代数中的并和补运算。严格的概念是某种类型的代数，类似于数学概念中的群。这个概念在逻辑（林登鲍姆-塔斯基代数和模型论）、集合论（集合域）、拓扑学（完全不连通紧致 Hausdorff 空间）、集合论基础（布尔值模型）、测度论（测度代数）、函数分析（投影代数）和环论（布尔环）中有根源和应用。对逻辑代数的研究有几个方面：结构理论、逻辑代数的模型论、布尔代数类的可判定性和不可判定性问题，以及指示的应用。此外，尽管这里没有解释，但与其他逻辑、作为特殊类型代数逻辑的一部分的包含关系、有限布尔代数和开关电路理论以及布尔矩阵存在联系。

---

## 1. 定义和简单性质

布尔代数（BA）是一个集合 A，具有二元运算+和⋅以及一元运算−，以及 A 的元素 0、1，使得以下定律成立：加法和乘法的交换律和结合律，乘法对加法的分配律和加法对乘法的分配律，以及以下特殊定律：

$$\begin{aligned}
&x+(x\cdot y)&& =x \\
&x\cdot(x+y)&& =x \\
&x+(-x)&& =1 \\
&x\cdot(-x)&& =0 
\end{aligned}$$

这些定律最好通过一个 BA 的基本示例来理解，该示例由集合 A 组成，这些集合是集合 X 的子集，在并集、交集、相对于 X 的补运算下封闭，并且包含成员`∅`和 X。可以很容易地从这些公理中推导出许多基本定律，牢记这个示例以获得动力。任何 BA 都有一个自然的偏序≤，定义为 x≤y 当且仅当 `x+y=y`。在我们的主要示例中，这对应于⊆。特别重要的是双元 BA，通过仅取集合 X 具有一个元素来形成。双元 BA 显示了与基本逻辑的直接联系。两个成员 0 和 1 分别对应于虚假和真实。布尔运算然后表达了析取（用+表示）、合取（用⋅表示）和否定（用−表示）的普通真值表。一个重要的基本结果是，一个方程在所有 BA 中成立当且仅当它在双元 BA 中成立。接下来，我们定义 `x⊕y=(x⋅−y)+(y⋅−x)`。然后 A 连同⊕和⋅，以及 0 和 1，形成一个带单位元的环，其中每个元素都是幂等的。反之，给定这样一个环，带有加法⊕和乘法的定义为 `x+y=x⊕y⊕(x⋅y)`和`−x=1⊕x`。这使得环成为一个 BA。这两个过程彼此互为反函数，并显示了布尔代数和每个元素都是幂等的带单位元的环的理论在定义上是等价的。这将 BA 的理论置于代数研究的标准对象中。在 BA 中，原子是一个非零元素 a，使得没有元素 b 满足 `0<b<a`。如果 BA 中的每个非零元素都在原子上方，则 BA 是原子的。有限 BA 是原子的，但许多无限 BA 也是原子的。在上述偏序≤下，x+y 是 x 和 y 的最小上界，x⋅y 是 x 和 y 的最大下界。我们可以推广这一点：ΣX 是元素集 X 的最小上界，ΠX 是元素集 X 的最大下界。这并不适用于所有布尔代数中的所有集合；如果它们总是存在，则称布尔代数是完备的。

## 2. 初等代数理论

对于逻辑代数（BAs），有一些代数构造具有明显的定义和简单的性质：子代数，同态，同构，以及直积（甚至是无限多个代数的直积）。一些其他标准的代数构造对于逻辑代数来说更为特殊。在逻辑代数中，理想是一个子集 I，满足对于任意 `a≤b∈I`，都有 `a∈I`，并且 0 也是 I 的成员。虽然不是立即显而易见的，这与环论中的概念相同。还有一个对偶概念是滤子（在一般环中没有对应）。滤子是一个子集 F，满足对于任意 `a≥b∈F`，都有 `a∈F`，并且 1 也是 F 的成员。在集合 A 上的超滤是一个具有以下特性的滤子 `F：0∉F`，并且对于任意 `a∈A`，要么 `a∈F`，要么 `−a∈F`。对于任意 `a∈A`，令

$$S(a)= \{F : F \text{ is an ultrafilter on } A \text{ and } a \in F\}.$$

然后 S 是到 A 上所有超滤集合 X 的逻辑代数的同构。这确立了基本的 Stone 表示定理，并澄清了逻辑代数作为集合的具体代数的起源。此外，集合 S(a) 可以被声明为 X 上拓扑的一个基础，这将 X 转变为一个完全不连通的紧致哈斯多夫空间。这确立了逻辑代数类与这类空间类之间的一一对应关系。作为一个结果，在逻辑代数理论中被广泛使用，许多拓扑定理和概念对逻辑代数也有影响。如果 x 是逻辑代数 A 的元素，我们定义 `0x=−x` 和 `1x=x`。如果 `(x(0), …x(m−1))` 是逻辑代数 A 的有限元素序列，那么 A 由 `{x(0),…,x(m−1)}` 生成的子代数的每个元素都可以被写成一些函数集合中的单项式和的形式，这些函数将 `m={0,…,m−1}` 映射到 `2={0,1}`。这是命题逻辑析取范式定理的代数表达。从逻辑代数 A 的生成集 X 到逻辑代数 B 的函数 f 可以被扩展为同态，当且仅当

$$e(0)x(0) \cdot \ldots \cdot e(m - 1)x(m - 1) = 0$$

 总是意味着

$$e(0)f(x(0)) \cdot \ldots \cdot e(m - 1)f(x(m - 1)) = 0.$$

这是 Sikorski 的扩展准则。每个逻辑代数 A 都可以嵌入到一个完备的逻辑代数 B 中，使得 B 的每个元素都是 A 的一组元素的最小上界。B 在 A-同构下是唯一的，并称为 A 的完备化。如果 f 是从逻辑代数 A 到完备逻辑代数 B 的同态，并且 A 是 C 的子代数，则 f 可以扩展为 C 到 B 的同态。这就是 Sikorski 的扩展定理。适用于逻辑代数的另一个一般代数概念是自由代数的概念。这可以具体构造为逻辑代数。即，κ上的自由逻辑代数是两元离散空间的闭开子集的κ次幂的逻辑代数。

## 3. 逻辑代数的特殊类

有许多逻辑代数的特殊类对于逻辑代数的内在理论和应用都很重要：

* 原子逻辑代数，如上所述。
* 无原子逻辑代数，被定义为没有任何原子的逻辑代数。例如，任何无限自由逻辑代数都是无原子的。
* 完备逻辑代数，如上所定义。这在集合论的基础中特别重要。
* 区间代数。这些是从线性有序集合（L，<）派生的，其中第一个元素如下。一个取包含所有半开区间 [a，b) 的最小子集代数，其中 a 在 L 中，b 在 L 中或等于 ∞。这些 BAs 在 Lindenbaum-Tarski 代数的研究中很有用。每个可数 BA 都同构于一个区间代数，因此可以通过指示一个有序集合来描述一个可数 BA，使其同构于相应的区间代数。
* 树代数。树是一个部分有序集（T，<），其中任何元素的前任集是良序的。给定这样一棵树，人们考虑由形式为 `{b：a≤b}` 的所有集合生成的 T 的子集代数。
* 超原子 BAs。这些不仅是原子的 BAs，而且每个子代数和同态像都是原子的。

## 4. 逻辑代数上的结构理论和基数函数

大部分关于逻辑代数的更深层理论，讲述它们的结构和分类，可以用某些针对所有逻辑代数定义的函数来表述，其值为无限基数。我们定义了一些更重要的基数函数，并陈述了一些已知的结构事实，大多数是用它们来表述的。

1. 逻辑代数 A 的细胞度 `c(A)`是 A 的两两不交元素集的基数的最大值。
2. BA A 的子集 X 是独立的，如果 X 是它所生成的子代数的自由生成器集。 A 的独立性是 A 的独立子集的基数的上确界。
3. BA A 的子集 X 在 A 中是稠密的，如果 A 的每个非零元素≥X 的某个非零元素。 A 的π-权重是 A 的稠密子集的最小基数。
4. A 的两个元素 x，y 如果彼此都不≤另一个，则它们是不可比的。 A 的由成对不可比元素组成的子集 X 的基数的上确界是 A 的不可比性。
5. 集合 A 的子集 X 如果 X 中没有任何元素在其他元素生成的子代数中，则 X 是不冗余的。

有关细胞性的一个重要事实是 Erdős-Tarski 定理：如果 BA 的细胞性是一个奇异基数，那么实际上存在一个具有相同大小的不相交元素集；对于细胞性正则极限（不可达），存在反例。每个无限完备的 BA 都有一个与代数大小相同的独立子集。每个无限 BA A 都有一个不冗余的不可比子集，其大小是 A 的π-权重。每个区间代数都具有可数独立性。超原子代数甚至没有无限独立子集。每个树代数都可以嵌入到一个区间代数中。只有恒同自同构的 BA 称为刚性。存在刚性完备 BA，也有刚性区间代数和刚性树代数。

最近，许多 min-max 类型的基数函数已被研究。例如，小独立性是无限极大独立集的最小大小；小细胞性是无限单位分割的最小大小。

## 5. 可判定性和不可判定性问题

塔斯基的一个基本结果是布尔代数的基本理论是可判定的。即使具有一个特殊理想的布尔代数的理论也是可判定的。另一方面，具有一个特殊子代数的布尔代数的理论是不可判定的。可判定性结果和不可判定性结果在各种方式上延伸到一阶逻辑的扩展中的布尔代数。

## 6. 林登鲍姆-塔斯基代数

一个非常重要的构造，适用于许多逻辑和布尔代数之外的许多代数，是与某些逻辑中的句子相关联的布尔代数的构造。最简单的情况是命题逻辑。在这里有句子符号，以及常见的连接词从中构建更长的句子：析取、合取和否定。给定这种语言中的句子集合 A，当且仅当它们之间的双条件语句是 A 的逻辑推论时，两个句子 s 和 t 在模 A 下是等价的。等价类可以制成一个 BA，使得 + 对应于析取，⋅ 对应于合取，- 对应于否定。任何 BA 都同构于这种形式之一。对于一阶理论，可以做类似的事情。设 T 是一阶语言 L 中的一阶理论。我们称公式 `ϕ` 和 `ψ` 等价，前提是 `T ⊢ ϕ↔ψ`。句子 ϕ 的等价类用 `[ϕ]` 表示。设 A 是在此等价关系下的所有等价类的集合。我们可以通过以下定义将 A 制成一个 BA，这些定义很容易证明：

$$\begin{aligned}
[\phi]+[\psi]& =[\phi\lor\psi] \\
[\phi]\cdot[\psi]& =[\phi\wedge\psi] \\
-[\phi]& =[\neg\phi] \\
&\text{-} \mathrm{]=[F]} \\
&1=[\mathrm{T}]
\end{aligned}$$

每个 BA 都同构于一个 Lindenbaum-Tarski 代数。然而，这些经典的 Lindenbaum-Tarski 代数最重要的用途之一是为重要理论（通常是可判定理论）描述它们。对于可数语言，可以通过描述它们的同构区间代数来实现这一点。通常这会给出对该理论的全面了解。一些例子是：

|     | **Theory**                     | **同构于区间代数**                                                |
| ----- | ---------------------- | ------------------------------------------------- |
| (1) | 本质上不可判定的理论 | Q，有理数                                       |
| (2) | BAs                  | 正整数的平方，按字典顺序排序                    |
| (3) | 线性顺序             | `A×Q` 按反字典顺序排序，其中 A 按其通常顺序为 NN |
| (4) | 阿贝尔群             | `(Q+A)×Q`                                        |

## 逻辑代数模型

在模型理论中，可以取任何完备逻辑代数中的值，而不仅仅是二元逻辑代数。这种布尔值模型理论是在 1950 年至 1970 年左右发展起来的，但自那时以来并没有得到太多研究。但是，布尔值模型理论在集合论中的一个特殊情况，目前在集合论研究的最前沿。实际上，它构成了一种等价于考恩强制构造的观察方式，并具有一些技术优势和劣势。从哲学上讲，它似乎比强制概念更令人满意。我们在这里描述这个集合论情况；然后将清楚地看到为什么只考虑完备逻辑代数。设 B 是一个完备逻辑代数。首先我们定义布尔值宇宙 V(B)。普通的集合论宇宙可以与 V(2)等同，其中 2 是二元逻辑代数。这个定义是通过超限递归完成的，其中α,β是序数，λ是极限序数：

$$\begin{aligned}
V(B,0)& =\emptyset  \\
V(B,\alpha+1)& =\{f:\mathrm{dom}\left(f\right)\subset V\left(B,\alpha\right)\text{ and range}\left(f\right)\subset B\} \\
V(B,\lambda)& =\bigcup_{\beta<\lambda}V\left(B,\beta\right). 
\end{aligned}$$


这里 dom(f)是函数 f 的定义域，range(f)是函数 f 的值域。布尔值宇宙是一个集合 V(B)，它是所有这些 V 的并集。接下来，通过对良基集进行相当复杂的超限递归，定义了赋予布尔值宇宙中元素的自由变量的集合论公式的值：

$$\begin{aligned}
\|x\in y\|& =\sum_{t\in\mathrm{dom}(y)}\|x=t\|\cdot y(t) \\
\|x\subseteq y\|& =\prod_{t\in\mathrm{dom}(x)}-x(t)+\|t\in y\| \\
\|x=y\|& =\|x\subseteq y\|\cdot\|y\subseteq x\| \\
\left\|\neg\phi\right\|& =-\|\phi\| \\
\|\phi\vee\psi\|& =\|\phi\|+\|\psi\| \\
\|\exists x\phi(x)\|& =\sum_{a\in V(B)}\|\phi(a)\|. 
\end{aligned}$$

## Bibliography

* Halmos, P., 1963, *Lectures on Boolean Algebras*, Princeton: Van Nostrand
* Heindorf, L., and Shapiro, L., 1994, *Nearly projective Boolean algebras*, Lecture Notes in Mathematics no. 1596, Berlin: Springer-Verlag
* Jech, T., 1997, *Set Theory*, 2nd corrected edition, Berlin, New York: Springer-Verlag
* Monk, J. D., and R. Bonnet (eds.), 1989, *Handbook of Boolean algebras*, 3 volumes, Amsterdam: North-Holland.
* Monk, J. D., 2014, *Cardinal Invariants on Boolean Algebras, Second Revised Edition*, Basel: Birkaüser

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=boolalg-math). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/boolalg-math/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=boolalg-math&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](http://philpapers.org/sep/boolalg-math/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[algebra](https://plato.stanford.edu/entries/algebra/) | [algebra of logic tradition](https://plato.stanford.edu/entries/algebra-logic-tradition/) | [Boole, George](https://plato.stanford.edu/entries/boole/) | [logic: algebraic propositional](https://plato.stanford.edu/entries/logic-algebraic-propositional/) | [model theory](https://plato.stanford.edu/entries/model-theory/) | [set theory](https://plato.stanford.edu/entries/set-theory/)

[Copyright © 2018](https://plato.stanford.edu/info.html#c) by  
[J. Donald Monk](http://euclid.colorado.edu/~monkd/)
