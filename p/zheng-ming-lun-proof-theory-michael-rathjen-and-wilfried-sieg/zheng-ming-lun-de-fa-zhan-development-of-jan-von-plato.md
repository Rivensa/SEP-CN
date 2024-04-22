# 证明论的发展 development of (Jan von Plato)


*首次发表于2008年4月16日星期三；实质性修订于2014年10月13日星期一*

证明论的发展可以自然地分为：古代逻辑和数学中证明概念的前史；弗雷格发现数学证明（而不仅仅是数学命题）可以（而且应该）用逻辑系统表示；希尔伯特的古老公理证明论；希尔伯特的目标未能实现，因为哥德尔的不完全性定理；根岑创造了当代证明论的两种主要逻辑系统，即自然推理和序列演算（参见自动推理条目）；自然推理和序列演算的应用和扩展，直到自然推理的计算解释及其与计算机科学的联系。

* [1. 证明概念的前史](https://plato.stanford.edu/entries/proof-theory-development/#PreNotPro)
* [2. 希尔伯特的古老公理证明论](https://plato.stanford.edu/entries/proof-theory-development/#HilOldAxiProThe)
* [3. 一致性的不可证明性](https://plato.stanford.edu/entries/proof-theory-development/#UnpCon)
* [4. 自然推理和序列演算](https://plato.stanford.edu/entries/proof-theory-development/#NatDedSeqCal)
* [5. 算术和分析的一致性](https://plato.stanford.edu/entries/proof-theory-development/#ConAriAna)
* [6. 自然演绎的后续发展](https://plato.stanford.edu/entries/proof-theory-development/#LatDevNatDed)
* [7. 推理演算：后续发展/应用](https://plato.stanford.edu/entries/proof-theory-development/#SeqCalLatDev)
* [8. 证明论的目标](https://plato.stanford.edu/entries/proof-theory-development/#AimProThe)
* [ 参考文献](https://plato.stanford.edu/entries/proof-theory-development/#Bib)

  * [证明论相关文献](https://plato.stanford.edu/entries/proof-theory-development/#TexProThe)
  * [原著及其再版作品](https://plato.stanford.edu/entries/proof-theory-development/#OriWorTheRep)
  * [ 二手文献](https://plato.stanford.edu/entries/proof-theory-development/#SecLit)
* [ 学术工具](https://plato.stanford.edu/entries/proof-theory-development/#Aca)
* [其他互联网资源](https://plato.stanford.edu/entries/proof-theory-development/#Oth)
* [ 相关条目](https://plato.stanford.edu/entries/proof-theory-development/#Rel)

---

## 1. 证明概念的前史

证明论可以被描述为对数学证明的一般结构以及逻辑中遇到的具有证明力的论证的研究。这种证明性论证的思想，即结论必然地从所假设的前提中得出，是亚里士多德《后分析》中的核心内容：演绎科学围绕着一些基本概念组织起来，这些概念被假定为已经理解，无需进一步解释，以及一些被视为立即真实的基本真理或公理。定义的概念和定理都可以通过这两个基本概念来归纳，后者通过证明来实现。亚里士多德对证明的描述作为证明性论证非常适合欧几里得公理化的古代几何学的结构。亚里士多德逻辑的具体形式，即三段论理论，似乎与欧几里得几何学中的证明几乎没有任何关系。这些证明在两千多年的时间里一直保持着直观性。

在 1879 年 Frege 的工作之前，似乎没有人坚持认为可以有一套完整的证明原理，就像 Frege 在他的符号语言中所表达的那样，一个正确推理所需要的一切都被完整地表达出来，但是不必要的部分通常不被指示；没有留下任何猜测的余地。（《概念符号》第 3 页）

> （对于古代的命题逻辑来说，布尔可能是个例外。）Frege 的进步对于逻辑和基础研究的发展具有决定性的意义。与古代人相比，形成了鲜明的对比：亚里士多德提供了组合论证的模式，但是有限封闭规则集的概念在哲学上在 Frege 之前的任何人的梦想之外。也许只有莱布尼兹是个例外。



今天我们知道，弗雷格的证明原理对于经典谓词逻辑是完备的。

大约在 1890 年，朱塞佩·皮亚诺给出了逻辑推理的形式化，旨在形式化表示算术中的证明。他的开创性论文《Arithmetices principia, nova methodo exposita》最初是用拉丁语写成的，后来被包括在让·范·海耶诺特编辑的《从弗雷格到哥德尔》（1967 年）的英文翻译集中。不幸的是，编辑没有意识到皮亚诺在形式推理方面的贡献，因此人们普遍认为皮亚诺只是形式化了逻辑和算术的语言，而没有形式化它们的证明原理。如果仔细阅读皮亚诺的证明，就会发现它们纯粹是使用了两个原理的形式推导：

1. 公理蕴含其实例。这样的蕴含可以写成证明中的行。
2. 一个蕴含和它的前提一起暗示了结论。

Peano 非常小心地在他的推导的每一行上列出了写这一行的形式基础。

Russell 采用了 Frege 的逻辑，但使用了 Peano 的符号和证明规则，在 1906 年的一篇名为“蕴涵理论”的论文中。它的形式机制与 Peano 完全相同。在后来的工作中，Russell 改变了公理系统，而 Principia Mathematica（Whitehead 和 Russell 1910-13）成为了标准。Russell 的哲学观点，他在这方面追随了 Frege，是公理表达了基本的逻辑真理，其他逻辑真理是通过演绎法和普遍概括从这些公理中推导出来的，这是 Frege 确定的两个原则。数学被归纳到逻辑中，使得它的证明以相同的公理模式呈现。

弗雷格和皮亚诺-罗素对逻辑的方法成为了普遍接受的方法，特别是在希尔伯特及其同事在 20 世纪 20 年代的影响下。在 19 世纪，弗雷格是一个边缘人物，而逻辑的代数方法，如布尔和尤其是恩斯特·施罗德的方法，是主导的。显然，在这个传统中对谓词逻辑的原理有很好的理解，否则怎么可能有洛文海姆-斯科勒姆定理呢？斯科勒姆在 1920 年的论文中通过《数学原理》才了解到弗雷格的逻辑。该论文的第一部分因为范·海耶诺特的《从弗雷格到哥德尔》的英文翻译而广为人知，标志着逻辑的代数传统与格理论悄然融合的终结。论文的其他部分包含了格理论和射影几何证明分析的一个显著开端：斯科勒姆从纯粹的组合和形式观点考虑了数学理论的公理，作为从给定的假设中推导出一个公式的手段。在 1990 年代初发现，格理论部分包含了一个决策问题的解决方案，称为自由生成格的字问题，其已知解决方案源于 1988 年！斯科勒姆在格理论中的术语和符号是施罗德的，这也是他的工作成为证明论的一个失去的机会的部分原因。

## 2. 希尔伯特的旧公理证明论

希尔伯特于 1899 年出版的《几何学基础》为 20 世纪早期数学的核心基础问题奠定了基础。我们可以将这些问题列举如下：

1. 数学理论的形式化。这包括选择其基本对象和关系，以及选择公理。
2. 公理的一致性证明。
3. 公理的相互独立性和完备性的问题。
4. 决策问题：是否存在一种方法来回答理论中可能提出的任何问题？

至于希尔伯特的几何学，其尝试的形式化未能达到其所产生的理想。希尔伯特找到了一个更重要的领域，他的“元数学”将被应用于算术和分析，即纯逻辑公理化的四个基础性问题的研究。命题逻辑因此被形式化，被发现是一致且完备的，并且是可判定的。关于谓词逻辑的第一个结果是从 1915 年开始的，当时 Leopold Löwenheim 提出了他的版本，后来成为谓词逻辑的 Löwenheim-Skolem 定理（参见经典逻辑条目）。他还解决了决策问题的特殊情况。这一发展独立于弗雷格-罗素传统，而是基于恩斯特·施罗德对逻辑的代数方法。大约在 1920 年左右，“希尔伯特风格”的公理化方法，通常被称为，已为所有人所知，并主导了逻辑场景；代数方法几乎不被注意地与格理论融合在一起。到 1928 年，在希尔伯特和阿克曼的《理论逻辑概述》中，提出了谓词逻辑的公理化形式系统，以及其完备性问题。后者由哥德尔于 1929 年解决，并在一年后发表（哥德尔 1930）。第四个基础性问题，谓词逻辑的决策问题，被证明在 1936 年由丘奇在哥德尔的不完全性定理的推论中有一个否定的解。

希尔伯特及其学派，以伯奈斯、阿克曼和冯·诺伊曼为首，以及法国的年轻赫布兰，在 20 世纪 20 年代后期进行了算术的元数学研究。希尔伯特发展了一种处理量词的一致性问题的方法，称为ε替换方法。他认为，在存在无限个对象的情况下，带有量词的间接推理是一致性证明的关键点，并且需要进行证明。比如，假设所有自然数都具有属性 P 会导致一个不可能性，那么可以推断出存在一个具有相反属性 not-P 的数。因此，中心问题是如何证明在数学证明中使用经典逻辑的合理性，首先是算术证明。阿克曼在 20 世纪 20 年代末非常接近解决方案，希尔伯特学派充满了乐观情绪。然后，当哥德尔证明了对初等算术的完全形式化的不可能性时，以及很快被解释为通过有限手段无法证明算术的一致性时，当然发生了意想不到的事情，这些有限手段被希尔伯特认为是“绝对可靠”的。

## 3. 一致性的不可证明性

在哥德尔于 1930 年 9 月公开了算术的不完全性之后，冯·诺伊曼发现算术的一致性将成为哥德尔不可证明命题之一。不幸的是，哥德尔也发现了同样的结果，所以冯·诺伊曼从未发表他的证明。然而，他在与哥德尔的通信中猜测了算术一致性以及整个数学在某种绝对意义上的不可证明性。冯·诺伊曼是哥德尔结果的接受过程中的关键人物：他在 1930 年秋季中断了他在柏林关于希尔伯特证明论的讲座，解释了这些新发现。这些事件在数学家中引起了巨大的兴奋，如卡尔·亨普尔的证词所证明的。

> 我在那里与冯·诺伊曼一起上了一门课，讲的是希尔伯特试图通过有限手段证明经典数学的一致性。我记得在课程中途，冯·诺伊曼有一天进来宣布他刚刚收到了一篇来自库尔特·哥德尔的论文，论文表明希尔伯特心目中的目标，以及我在哥廷根听到希尔伯特的课程中所听到的目标根本无法实现。因此，冯·诺伊曼放弃了这个课题的追求，并将课程的剩余时间用于介绍哥德尔的结果。这一发现引起了巨大的兴奋。（亨普尔 2000 年，第 13 页）

在 1932 年至 1933 年期间，哥德尔和根岑独立地找到了从经典的皮亚诺算术到直觉主义的海廷算术的一种翻译。具体来说，它表明如果在前者中可以证明矛盾，那么在后者中也可以证明矛盾。然后，直觉主义算术的一致性也将保证经典算术的一致性。这个结果是一个惊喜：如前所述，希尔伯特认为“无穷”间接存在证明将是需要确保无矛盾的算术的一部分。通过哥德尔和根岑的结果，已经包含了超越有限推理的原则的直觉主义算术。根岑在 1933 年 2 月 25 日写给海廷的一封信总结了这种情况如下：

> 有限手段的一致性证明迄今为止尚未成功，因此 Hilbert 的这一最初目标尚未实现。另一方面，如果一个人将直觉主义立场作为一个安全的基础，即一个一致的基础，那么我的结果可以确保经典算术的一致性。如果一个人希望满足 Hilbert 的要求，仍然需要证明直觉主义算术的一致性。然而，根据 Gödel 的结果和我的证明，即使是经典算术的形式装置也无法实现这一点。即便如此，我倾向于相信，从一个更明显的立场出发，可以证明直觉主义算术的一致性，这也是可行且可取的。（Menzler-Trott 2007，第 38 页）

最后提到的是 Gentzen 在 1932 年初给他的老师 Hellmuth Kneser 写信时设定给自己的目标：

> 我已经将证明逻辑推理在算术中的一致性作为我的具体任务...通过逻辑推理的形式化，这个任务变成了一个纯粹的数学问题。一致性的证明迄今为止只针对特殊情况进行了，例如，整数的算术中没有完全归纳规则。我希望在这一点上进一步，并至少清理具有完全归纳的算术。我已经从事这项工作将近一年了，希望很快完成，并将这项工作作为我的论文（与 Bernays 教授合作）提交。（Menzler-Trott 2007，第 31 页）

## 4. 自然推理和序列演算

在追求他的一致性计划时，根岑将纯逻辑推理的分析作为他的首要任务，后来扩展到算术和分析。在他的论文（1934-1935 年）中，根岑表示他的任务是分析数学证明在实践中的出现方式。首先观察到的是，实际证明并不是基于用逻辑语言表达的公理，如希尔伯特的公理证明论。相反，最典型的特征是定理在某些假设下进行断言。这些假设被分析成部分，结论也被分析成部分，直到这两个分析相遇并合成一个证明。后一种分析通过根岑所称的引入规则进行：它们给出了推导给定形式的命题的充分条件。例如，要推导出一个合取 A & B，只需分别推导出合取的两个分量 A 和 B。推理形式上给出如下规则：

> | *A* *B* | &I |
> | --- | ---- |
> | *A*&*B* |    |

相反，假设通过消除规则进行分析，这些规则基本上给出了假设的直接推论。例如，作为假设使用的合取可以分解为其组成部分，如以下规则所示：

> |   |     |
> | --- | ----- |
> | *A*&*B* | &E1 |
> | *A*  |     |
>
> |   |     |
> | --- | ----- |
> | *A*&*B* | &E2 |
> | *B*  |     |

1932 年，Gentzen 开发并研究了自然推理系统，并在同年 9 月达到了今天的标准自然推理（ND）的演算。在此期间，他注意到，如果一个引入，比如从 A 和 B 分别推导出 A＆B 的推导，后面跟着相应的消除，比如推导出 A，那么公式 A＆B 构成了一个局部最大值，一个“小山丘”，可以被消除。他还称这样的小山丘为“绕道”，现在称为绕道转换，可以消除这种不必要的引入-消除步骤对。 “规范化”步骤的结果是一个“正常形式”的推导。

蕴涵可能比合取更典型：要推导出 A⊃B，首先暂时假设 A，然后试图推导出 B。如果成功，当得出 A⊃B 的结论时，临时假设将被关闭或“解除”，就像在示意性推导中一样。

> | [*A*] |     |
> | ---- | ----- |
> | ⋮ |     |
> | *B*   | ⊃I |
> | *A*⊃*B* |     |

另一方面，如果找到了 A 的推导，就可以消除 A⊃B，因为可以得出 B。

> | *A*⊃*B* *A* | ⊃E |
> | ----- | ----- |
> | *B*    |     |

如果 ⊃I 规则后跟 ⊃E 规则，那么通过一种绕道转换消除了一个非正常性：通过将消除规则的次要前提 A 的推导和引入中的假设 A 推导 B（以及其后的内容）的推导结合在一起，构造了 B 的推导，该推导不包含绕道公式 A ⊃ B。在根岑的论文中，所有假设最终都通过蕴涵引入封闭，但现在人们也考虑将一组公式作为开放假设的推导。

查看合取和蕴涵的规则，可以注意到前提（推理线上方的公式）在 I-规则中是结论的子公式，而在 E-规则中则相反。根岑注意到，在正常推导中，这种单步的性质被整个推导继承，即所有公式都是结论的子公式。这个结果作为副产品提供了直觉命题逻辑的决策方法。另一个推论是一致性的句法证明：如果可以证明矛盾，那么任何事情都可以证明，但是原子公式，比如说，没有证明：如果它有一个证明，那么它有一个正常的证明，但是 E-规则不适用于原子公式，I-规则也不会得出它。

Gentzen 的想法是通过添加与完全归纳原理相对应的规则，将自然推理扩展到算术系统中。一致性将从推导的归一化和子公式性质中得出。到 1933 年初，Gentzen 意识到这种证明策略行不通：归纳规则是概要的，并且有无限多个实例，对归纳公式的复杂性没有限制。不可能事先限制这些公式，因此无法保持子公式性质。在这次失败之后，Gentzen 从他早期的论文手稿中直接引用了从经典算术到直觉主义算术的翻译，并于 1933 年 3 月将其提交为一篇论文，但在听说哥德尔发表了结果后撤回了这篇论文。

Gentzen 写道，他无法证明经典 ND 系统的归一化定理。因此，他发明了另一种逻辑演算法，称之为序列演算法（Sequenzenkalkul，字面意思是“序列演算法”），并将其作为他论文的核心主题。演算法的名称来自将推导的假设表示为列表的表示方法。作为名词使用的“sequent”一词是 Kleene 在他的《元数学导论》（1952: 441）中的建议，以纯粹的创造词形式在许多语言中被采用。

证明论，简称 SC，可以看作是自然推理中可导关系的形式表示。一个证明论由一个公式列表Γ、一个箭头（在 Gentzen 中，后来也使用了其他标记）和一个公式作为结论组成。列表给出了结论在推导中依赖的假设，在 ND 中它们在推导树的叶子中找到，使用本地符号表示。Gentzen 还推广了证明论，使其在箭头之后有一个可能情况列表，而不是一个结论。这一创新导致了经典逻辑的第一个令人满意的证明系统的形成。Gentzen 的 SC 规则用逗号分隔列表中的元素表示：

** 解释**

| Γ → Δ，A Γ → Δ，B | R& |
| ------------------------- | ---- |
| Γ **→** Δ,*A*&*B*                  |    |

| *A*, Γ **→** Δ  | L&1 |
| --------- | ----- |
| *A*&*B*, Γ **→** Δ |     |

| *B*, Γ **→** Δ  | L&2 |
| --------- | ----- |
| *A*&*B*, Γ **→** Δ |     |

** 蕴涵**

| *A*, Γ **→** Δ,*B* | R⊃ |
| --------- | ----- |
| Γ **→** Δ,*A*⊃*B* |     |

| Γ **→** Θ,*A* *B*, Δ **→** Λ     | L⊃ |
| ------------------ | ----- |
| *A*⊃*B*, Γ, Δ **→** Θ, Λ |     |

这不是解释 ND 和 SC 细节的地方（但请参阅关于自动推理的条目）。Gentzen 制定了后者，表示为 LK，以便它给出直觉主义演算，表示为 LJ，作为一个特例，其中结论是最多一个案例的列表。然后，他证明了经典演算的归一化定理的类似物，演算和证明经过精心制定，以便直觉主义演算的结果是经典演算的一个特例。在 LJ 和 LK 中，L 代表“logistic”，这是 Gentzen 用来指代 Frege、Russell 和 Hilbert 和 Bernays 的逻辑公理演算的术语。在这样的演算中，推导中的每一行本身都是正确的，即逻辑真理，因此得名。字母 K 和 J 来自德语单词 klassisch 和 intuitionistisch。（后者因此应该是大写的"I"，但是旧的德语使用大写的"J"来表示大写的"I"。）

Gentzen 将归一化的类似物称为 Hauptsatz，“主要定理”，这个名字缺乏想象力。今天的标准术语是“削减定理”。SC 的所有逻辑规则在非常直接的意义上都具有子公式性质：前提中的每个公式都是结论中的公式或子公式。用于组合推导的规则，类似于上面解释的 ND 中的绕道转换的规则，称为“削减”。在其中，一个公式 A 作为第一个前提中的一个案例出现，并作为第二个前提中的一个假设出现。在结论中，这个公式消失了，两个前提的假设被收集在一起：

> | Γ **→**  *A* *A*, Δ **→**  *C* | Cut |
> | ----------- | ----- |
> | Γ, Δ **→**  *C*   |     |

因此，割除是唯一一个在推导中使一个公式“消失”的规则。Gentzen 证明了割除规则的实例可以通过将它们向上排列直到达到推导开始的点来消除。在 ND 中，起始点是假设，在 SC 中，起始点是形式为 A → A 的“初始序列”，其中假设公式 A 同时也是结论。具有这样一个序列作为前提的割除规则的另一个前提等于结论，因此可以删除。

在割除证明之后，Gentzen 对直觉主义自然推理的归一化证明没有用处。他将他的论文的第一个手写版本，其中包含了归一化的详细证明（相当于大约 13 页印刷页），交给了伯奈斯，但后者似乎从未意识到他手中的东西。这个证明在伯奈斯的论文中被本文作者于 2005 年 2 月发现，并且现在有一个英文翻译版本可供使用（Gentzen 1933 [2008]）。

## 5. 算术和分析的一致性

在纯逻辑的ND和SC的论文工作之后，根岑继续他证明算术一致性的计划。结果在1934年12月完成。关于这个最初的证明的细节不详。然而，1938年给伯奈斯的一封信表明，根岑在1935年夏天写下的证明不是这个最初的证明，而是第二个证明（参见Menzler-Trott 2001, 79）。伯奈斯和哥德尔在1935年9月的普林斯顿大学航行期间讨论了这个第二个证明并对其提出了批评。根岑在证明中的想法如下：首先，将自然推理的合取-否定-全称量化片段作为算术形式化中使用的逻辑。然后，将每个规则实例写成前提和结论在左边列出的开放假设，用箭头分隔结论，形成序列。这种变体的ND现在被称为SC风格的ND。考虑一个序列Γ → C。如果其结论是一个原子公式，它是数字之间的等式。在最坏的情况下，它是假的，因此考虑假设的列表。如果一个假设是一个合取，用你选择的一个合取替换它，如果是一个全称量化，用一个实例替换它。如果是一个否定¬A，将结论替换为A。在这个“简化过程”的任何阶段，如果一个序列的结论是一个复合公式，你必须将任何合取或任何全称量化的实例视为可能的结论。如果结论是否定¬A，将A移到假设部分，并将结论替换为0 = 1。根岑证明，通过在假设该序列可导的前提下按照这种方式进行，要么找到一个真等式作为结论，要么找到一个假等式作为假设。因此，不存在所有假设为真且结论为假的可导序列。

哥德尔和伯奈斯不清楚证明假设了什么；他们认为它假设了直觉主义数学中所知的扇形定理，但这是错误的。相反，根据良序树的归纳（“条归纳”），可以证明Gentzen的简化过程的终止性，这是Gentzen根据直觉的理由使用的原则。无论如何，批评的结果是，Gentzen毫不犹豫地将证明改为第三个证明，该证明使用了现在著名的第一个epsilon数的超穷归纳原理。这个归纳原理通过使用十进制数进行编码来呈现。然而，Gentzen在1936年发表的论文的具体结果并不好：逻辑演算在一篇七十多页的文章中被中途更改，变得非常难以阅读。因此，Gentzen在1938年（苏黎世联邦理工学院伯奈斯档案馆）又给出了现在计算的第四个一致性证明，这次是基于1933年的经典序列演算LK。如前所述，与伯奈斯的通信表明，他回到了导致1934年成功的证明方法。在1938年的论文中，超穷归纳的使用通过序数表示清晰可见。这种关于康托尔的“第二数类”的归纳原理在希尔伯特的1925年演讲“关于无限”（1926年发表）中详细讨论，Gentzen在其中提到了这篇论文。

人们本以为事情就这样了，但根岑有理由提出算术一致性的第四个证明，这是他在 1943 年发表的最后一篇论文，但在 1939 年战争之前写的。他通过超限序数扩展了 Peano 算术，并将超限归纳原理作为这个扩展演算的一部分。然后他直接证明了超限归纳直到第一个ε数ε0 是可表达的但不可证明的。哥德尔的不完全性定理因此以完全不同的方式得到证明。简而言之，证明的思路如下：首先，规定了在系统中推导超限归纳到特定序数的含义。其次，将ε0 以下的序数与推导关联起来。这些被称为“值”。然后证明了如果可以推导到一个序数的超限归纳，那么这个序数不能大于推导的值。因此，无法推导出超限归纳到ε0。

由于归纳原理可以在普通算术中表达但无法证明，在 Peano 算术中找到了一个无法证明的公式。根岑版本的不完全性定理的一个简单推论是 Peano 算术的一致性，因为在一个不一致的系统中任何东西都是可证明的。与哥德尔通过对算术化的可证明性谓词进行编码得到的“人为”不可证明公式不同，根岑的超限归纳原理是“普通”数学的原理。

证明论中，Gentzen 的最后证明确定了 Peano 算术的“证明论序数”，即证明一致性所需的序数，具有不可替代性的特性。这项工作标志着序数证明论的开始。毫无疑问，这是继哥德尔的不完全性定理之后算术领域最显著的基础性成就，但它仍然鲜为人知——可以找到许多关于哥德尔定理的书籍，甚至没有提到 Gentzen。

哥德尔似乎没有考虑通过使用非有限但仍然具有建设性原则来给出算术的一致性证明。至少从 1938 年开始，他作为对 Gentzen 证明的回应，发展了自己对直觉主义逻辑和算术的特殊解释，后来被称为 Dialectica 解释。它使用可计算的函数来解释直觉主义算术的证明。哥德尔在 1958 年才发表了这个解释，尽管他在 1941 年的讲座中已经提出了它。目前还不清楚他是否在 1939 年 12 月与 Gentzen 会面时讨论了这个问题。

在 Bernays 的要求下，Ackermann 于 1940 年用 Hilbert 的ε-演算重新复制了 Gentzen 的证明。Ackermann 的论文是 Kreisel 于 1951 年提出的“无反例”算术解释的起点。当哥德尔的论文集出版时，人们惊讶地发现他在 1938 年维也纳的“Zilsel 讲座”中概述了这个解释，将其作为 Gentzen 在 1935 年证明的重新表述。（这个问题在 Tait（2005）中详细讨论，他自己在 1960 年代研究了无反例解释及其在分析学中的扩展。）

证明论中的下一个明显任务，在证明算术的一致性之后，是证明分析的一致性，即实数理论的一致性。Gentzen 在这个方向上做了一些工作，但后来在 1939 年秋季被派去服兵役。（他观察并报告了在不来梅市上空飞行的飞机的类型、数量和方向，直到他在 1942 年初因神经崩溃而倒下。）从 1943 年开始，他重新开始了对分析的研究，但这个主题本身的困难很大，战争带来的实际困难也很大。分析将被表述为一个二阶算术系统，这意味着量化是在数论谓词或等价地在自然数集合上扩展的。Gentzen 的最后一篇论文中使用了二阶数论，该论文发表于 1943 年，其中简要地显示了在二阶数论中可以推导出直到ε0 的超限归纳原理。

已经过去了半个多世纪，仍然没有关于全面二阶算术一致性的建设性证明。这个领域的早期先驱包括 Kurt Schütte 和 Gaisi Takeuti。前者在 1951 年创建了一个无穷序列演算法，以清晰的方式呈现一致性证明，而后者则使用了更传统的 Gentzen 风格的演算法（参见 Takeuti 1987 年）。

在当前对二阶算术的证明论研究中，人们研究的是所谓的二阶算术的子系统。截至今天，最强的结果可以简要概括如下：让 X 代表数论谓词。像 X(x)这样的公式表示 x 具有 X 所表达的属性。我们现在可以使用一阶和二阶逻辑来形成诸如∀X(X**x ∨ ¬ X**x)这样的复合公式。对于这样一个带有一个全称二阶量词的公式成立的自然数集合被称为Π11 集合（在这种情况下，是自然数的全体）。更一般地，一个包含公理的形式是∃X∀x(X**x ↔ B(x))。如果公式 B 没有二阶量词，该公理给出了所谓的算术包容性或 ACA。如果 B 可以具有形式∀Y∃Z C(x)，而没有其他二阶量词，则得到Π12 包容性的特殊情况。关于带有Π12 包容性的二阶算术子系统的一致性证明是由 Toshiyasu Arai 和 Michael Rathjen 在 1990 年代中期给出的（有关这些发展，请参见 Rathjen 1995）。

## 6. 自然演绎的后续发展

当 Gentzen 制定出他的自然演绎系统时，Stanislaw Jaskowski 也在开发一种用于推理的逻辑系统。推导中的公式按线性顺序排列，但是 Jaskowski 在 1934 年的论文中仍然是片段性的，并且没有像子公式性质这样的实质性结果。自然演绎的线性变体在许多初等逻辑的教学阐述中被采用（有时被称为“Fitch 系统”）。Gentzen 在 1936 年 6 月发现了 Jaskowski 的工作，当时两人都在明斯特，并认为其公式的线性排列是一种改进，是一种“从树形式的束缚中解放出来”，反映了“思维的线性性”（前者来自未发表的笔记，后者来自 Gentzen 的论文）。

自然演绎系统在大部分时间里都处于休眠状态，直到 1965 年 Dag Prawitz 的论文《自然演绎：一个证明论研究》出现。Prawitz 展示的规范化定理的顺序与 Gentzen 早期论文手稿中的顺序不同。Prawitz 首先给出了一个经典逻辑自然演绎系统的规范化定理和子公式性质。该系统不包含析取或存在量词。在第二阶段，他考虑了完整的谓词逻辑语言的直觉主义自然演绎，并将其规范化简化为删除类似于经典逻辑片段中的绕道可转换性。当 Gentzen 的规范化证明在 2005 年被发现时，Prawitz 在与本文作者的对话中表示，很明显 Gentzen 知道这个结果，因为印刷论文中的备注非常暗示性。

在 1960 年代末，强规范化成为一个问题：Prawitz 在 1971 年利用 William Tait 和 Jean-Yves Girard 的先前工作证明，推导中的非规范性可以以任意顺序进行转换，从而得到一个终止的规范化过程和唯一的正常推导。Gentzen 似乎没有注意到后者，而似乎认为相反的情况是成立的，即割除规则在序列演算中无法满足这个性质。

在强正规化研究的同时，柯里-霍华德对应关系出现了。柯里在 20 世纪 50 年代晚期的组合逻辑研究中观察到了自然推理中的蕴涵消除与函数应用之间的类比（Curry 和 Feys 1958）。这个想法与直觉主义逻辑一样古老：“BHK 解释”（布劳尔-海廷-科尔莫戈洛夫）认为，直觉主义逻辑中的命题形式表达了如何证明这些命题的规定：通过连词和量词的解释，合取 A & B 通过分别证明 A 和 B 来证明，析取 A ∨ B 通过证明 A 和 B 中的一个来证明，蕴涵 A ⊃ B 通过展示如何将 A 的任何证明转化为 B 的某个证明来证明，等等。这些解释非常接近自然推理的引入规则，但它们对根岑思想的影响仍然未知。

柯里-霍华德对应关系，来源于 William Howard 于 1969 年的一篇论文，但直到 1980 年才发表，它基于“公式即类型”原则，或者换句话说，基于“命题即集合”原则。命题被视为其证明集合。命题的真值对应于集合的非空性。A ⊃ B 的证明现在是从 A 的证明到 B 的证明的函数，而 A ⊃ B 本身是这些函数的集合。因此，如果 f : A ⊃ B 且 a : A，则函数应用给出 f(a) : B。相反，对应于蕴涵的引入，由 Alonzo Church 的λ演算的函数抽象原则捕捉到。

康威-霍华德对应使直觉主义自然演绎成为计算机科学课程的一部分：它为直觉主义逻辑提供了计算语义，其中计算和程序的执行更一般地通过归一化来实现。假设 A ⊃ B 的证明是一个将类型 A 的数据转换为类型 B 的输出的程序。类型 A ⊃ B 的对象（证明、函数、程序）f 的构建以抽象结束。当将类型 A 的对象 a 作为参数输入到 f 中时，得到的表达式不是正常的，而是具有与引入后消除相对应的形式。归一化现在与程序 f 的执行相同。直觉主义逻辑的使用不限于任何直觉主义数学哲学，而只是对计算机程序执行终止的系统性保证。

## 7. 推理演算：后续发展/应用

Gentzen 的博士论文标志着结构证明论的诞生，与希尔伯特的旧公理证明论形成对比。在 1944 年，Oiva Ketonen 在他的博士论文中对序列演算系统的发展迈出了重要一步。Ketonen 是赫尔辛基的数学和哲学学生，于 1938 年前往哥廷根与 Gentzen 一起研究证明论，成为后者最接近的学生。这种联系似乎是由 Ketonen 的哲学教授 Eino Kaila 建立的，后者在 1936 年在明斯特与 Gentzen 见面。Ketonen 后来回忆说，Gentzen 是一个“寡言的和令人愉快的年轻人”，他向他介绍了证明论系统和结果。Ketonen 最著名的发现是经典命题逻辑的序列演算，其逻辑规则都是可逆的，这意味着每当一个序列具有与逻辑规则结论匹配的形式时，相应的前提（从给定的序列和规则唯一定义）也是可导出的。反之亦然（只需应用规则）。例如，规则 L&和 L⊃被修改为

> |         |    |
> | --------- | ---- |
> | *A*,*B*, Γ **→** Δ | L& |
> | *A*&*B*, Γ **→** Δ |    |
>
> |                         |     |
> | ------------------------- | ----- |
> | Γ → Δ，A B，Γ → Δ | L⊃ |
> | *A*⊃*B*, Γ **→** Δ                |     |

对于合取只有一个左规则（对偶地，析取只有一个右规则）。左蕴含规则具有所谓的“共享上下文”：结论中的假设和情况，除了带有联结词的公式外，在两个前提中完全重复。Ketonen 的想法是定义一个证明搜索系统：从给定的待导出序列开始，选择其中的一个公式，并写出可以推导出给定序列的前提。通过可逆性，可导性的问题被替换为一个或两个关于更简单序列可导性的等价问题。新的规则需要确保在这种“从根开始”的分解中前提是唯一定义的。

Ketonen 的证明论中，他的序列演算的逻辑规则的可逆性使用了剪切的结构规则。后来，Kurt Schütte（1950 年）和 Haskell Curry（1963 年）直接证明了可逆性，后者明确指出反演是保持高度的：如果一个给定的序列在最多 n 步内可导出，那么能够推导出该序列的规则的前提也在最多 n 步内有一个推导。

Ketonen 的工作中有多少是源于 Gentzen 的建议，目前尚不清楚，因为没有找到任何通信记录。Ketonen 在他的论文前言中写道：“Göttingen 的 G. Gentzen 博士引导我进入了这个工作的问题领域。”这篇论文是 Ketonen 在逻辑学上唯一的原创作品，因为 Bernays 在 1945 年为《符号逻辑学杂志》写了一篇长篇评论，使其免于被遗忘。

在 1940 年代末，了解 Ketonen 的演算的人之一是 Evert Beth。当 Beth 在 1955 年提出他著名的表演演算时，他似乎忘记了表演演算的起源是 Ketonen 的改编，而是提到了 Kleene 于 1952 年出版的《元数学导论》。Kleene 从 Bernays 的评论中接受了 Ketonen 的演算，并且还处理了直觉主义序列演算，其中可逆性比经典演算更受限制。有了 Kleene 的书，Gentzen 的序列演算变得广为人知和可访问。

20 世纪 50 年代早期的克里尼（Kleene）的工作还开创了证明论中一个引人注目的发展，即今天用 G3c 和 G3i 表示的“无收缩”经典和直觉演算。这些演算具有这样的特性，即不需要根满足原始的“结构规则”。 “弱化”规则允许添加多余的情况和假设，“收缩”规则允许在列表中存在两个副本的情况下删除一个公式，如

> ** 弱化****收缩**
>
> | Γ **→** Δ   | Wk |
> | -------- | ---- |
> | *A*, Γ **→** Δ |    |
>
> | *A*,*A*, Γ **→** Δ | Ctr |
> | --------- | ----- |
> | *A*, Γ **→** Δ  |     |

类似的规则允许在序列的右侧后继部分进行弱化和收缩。通过让初始序列具有 A，Γ → Δ，A 的形式而不是 Gentzen 的 A → A，可以将弱化规则变为可消除规则。通过适当的规则制定，也可以将收缩规则变为可消除规则。这意味着在从根开始的证明搜索中，不需要应用会在前提中产生公式重复的规则。如果没有这个结果，证明搜索的非终止将不会发生。

经典演算具有上述的性质，即其逻辑规则具有保持高度可逆性的特点。阿尔伯特·德拉加林在 20 世纪 70 年代末将演算改进为一种结构规则“保持高度可接受”的演算，这意味着只要这样的规则的前提是可导出的，那么结论就可以在不使用规则的情况下导出，并且最多具有相同的大小（推导分支中规则实例的最大数量）。这个性质对于削减消除有深远的影响：在削减消除中，Gentzen 必须通过弱化和收缩来恢复原始的上下文（Γ和Δ）。有了这些规则的保持高度可接受性，当应用规则时，推导的大小不会增加。德拉加林还给出了一种具有相同类型的结构规则可接受性的直觉主义多后继演算。最后，Troelstra 在教材《基本证明论》（2000 年，第一版 1996 年）中给出了一种具有保持高度可接受性的弱化和收缩的单后继直觉主义演算。无收缩的序列演算是分析形式推导的强大工具。通过对 G3 演算结构的控制，许多逻辑中的困难研究结果只成为练习题。

> 序列演算在数学中最早的应用是在算术的证明论中，出现在 Gentzen 的论文中，并且在 1938 年证明算术的一致性中起到了决定性的作用。Troelstra 提到了 Ketonen 的工作，作为在带有公理的 Gentzen 演算中无割的证明的早期分析；但他认为无割推导的形式是在纯演算中，其中公理出现在推导的前提中。（Troelstra 和 Schwichtenberg 2000: 142）


Ketonen 考虑的公理是来自 Skolem 在上面第一节中讨论的 1920 年论文中的射影几何和仿射几何。Ketonen 希望在序列演算中制定 Skolem 的形式证明规则。然而，Ketonen 的工作大多只通过 Bernays 的评论来了解，只有关于序列演算的逻辑部分在那里详细解释。

应用序列演算的第二种方法是让开始推导分支的序列除了初始序列外，还具有形式→ A，其中 A 是一个公理，或者是一个普遍公理的实例。现在，根据 Gentzen 的“扩展 Hauptsatz”，推导中的割可以互换，直到它们的前提之一是一个公理，但这些割在公理上仍然存在。另一种较新的方法是将公理转化为额外的规则，这些规则添加到序列演算的逻辑规则中，同时保持完全割除（如 Negri 和 von Plato 2001 年第 6 章和 Troelstra 和 Schwichtenberg 的 2000 年第 4.7 章中所解释的）。

## 8. 证明论的目标

证明论在多大程度上实现了其最初的目标？对于希尔伯特来说，目标是通过有限证明来完全澄清基础问题等，这些目标是证明论未能实现的。希尔伯特在他的计划中并不关心数学证明本身，而只关心解决中心基础问题（然后忘记它们）。希尔伯特最近发现的一份笔记给出了不同的描述：这份笔记指出，希尔伯特希望在他著名的 1900 年巴黎数学问题开放列表中添加第 24 个也是最后一个问题，即“数学证明方法的理论发展”。这是在他的元数学计划为证明论的发展出现之前。

对于根岑来说，目标与希尔伯特的目标一样，是为了理解数学证明的结构。就纯粹逻辑和算术而言，这个计划是完全成功的。尤其是序列演算的方法使得对证明进行深入分析成为可能，取得了深远的结果。证明论的宏伟目标，即像希尔伯特的第二个巴黎问题那样证明分析的一致性，尚未实现，但也没有被排除。

对于任何数学家来说，对证明的概念的理解是必要的，即使仅仅是为了数学结果的可传达性：出版依赖于理解证明可以被明确地检查正确性。然而，证明论迄今为止还没有成为工作数学家的实用工具；在数学中的应用案例相对较少。最近在使用计算机化系统对数学证明进行形式化的研究，称为证明编辑器，可能会逐渐改变这种情况。

证明论在传统数学之外创造了新的目标，特别是与计算机科学的关联。计算机程序正确性验证等主题是证明论的产物。自然推理导致了柯里-霍华德对应，并与函数式编程有关联，而序列演算经常用于自动证明搜索系统，如逻辑编程中。
## Bibliography

### Texts on Proof Theory

* Buss, Sam (ed.), 1998, *Handbook of Proof Theory*, Amsterdam: Elsevier.
* Negri, S. and J. von Plato, 2001, *Structural Proof Theory*, Cambridge: Cambridge University Press.
* von Plato, J., 2013, *Elements of Logical Reasoning*, Cambridge: Cambridge University Press.
* Takeuti, G., 1987, *Proof Theory*, Amsterdam: North-Holland, 2nd edition.
* Troelstra, A. and H. Schwichtenberg, 2000, *Basic Proof Theory*, Cambridge: Cambridge University Press, 2nd edition.

### Original Works and Their Reprints

* Ackermann, W. 1940, “Zur Widerspruchsfreiheit der Zahlentheorie,” *Mathematische Annalen*, 117: 162–194.
* Beth, E., 1955, *Semantic entailment and formal derivability* (Mededelingen der Koninklijke Nederlandse Akademie van Wetenschappen. Afd. Letterkunde. Nieuwe reeks, deel 18, no. 13), Amsterdam: North-Holland.
* Church, A., 1936, “A Note on the *Entscheidungsproblem*,” *Journal of Symbolic Logic*, 1: 40–41.
* Curry, H., and Feys, R., 1958. *Combinatory Logic*. (Studies in Logic and the Foundations of Mathematics, Vol. I), 1st edition, Amsterdam: North-Holland.
* Curry, H., 1963, *Foundations of Mathematical Logic*, New York: McGraw-Hill; reprinted New York: Dover, 1977.
* Dragalin, A., 1988, *Mathematical Intuitionism: Introduction to Proof Theory*, Providence, RI: American Mathematical Society.
* Gentzen, G., 1934–1935, *Untersuchungen über das logische Schliessen* (*Investigations into Logical Inference*), Ph.D. thesis, Universität Göttingen. Published in Gentzen 1969: 68–131.
* Gentzen, G., 1938, “Neue Fassung des Widerspruchsfreiheitsbeweises für die reine Zahlentheorie”, *Forschungen zur Logik und zur Grundlegung der exakten Wissenschaften*, *Neue Folge* 4, S. Hrizel, 19–44. Translated in Gentzen 1969: 252–286.
* Gentzen, G., 1943, “Beweisbarkeit und Unbeweisbarkeit von Anfangsfällen der transfiniten Induktion in der reinen Zahlentheorie”, *Mathematische Annalen*, 119: 252–286. Translated in Gentzen 1969: 287–308.
* Gentzen, G., 1969, *The Collected Papers of Gerhard Gentzen*, ed. M. Szabo, Amsterdam: North-Holland.
* Gentzen, G., 2008, “The normalization of derivations,” *The Bulletin of Symbolic Logic*, 14(1): 245–257.
* Gödel, K., 1930, “Die Vollständigkeit der Axiome des logischen Funktionenkalküls”, *Monatshefte für Mathematik und Physik*, 37: 349–360.
* Gödel, K., 1958, “Über eine bisher noch nicht benützte Erweiterung des finiten Standpunktes”, *Dialectica*, 12: 280–287.
* Gödel. K., 1986–2003, *Collected Papers* (Volumes I–V), S. Feferman et al. (eds.), Oxford: Oxford University Press.
* van Heijenoort, J., 1967, *From Frege to Gödel*, Cambridge, MA: Harvard University Press.
* Hilbert, D., 1899, *Grundlagen der Geometrie*, Leipzig: B.G. Teubner.
* Hilbert, D., 1926, “*Über das Unendliche*” (“On the infinite”), *Mathematische Annalen*, 95: 161–190. [Lecture given Münster, 4 June 1925.]
* Hilbert, D., and Ackermann, W., 1928, *Grundzüge der theoretischen Logik*, Berlin: Springer.
* Hilbert, D., 1931, “Die Grundlegung der elementaren Zahlenlehre,” *Mathematische Annalen*, 104: 484–494.
* Howard, W., 1980 [1969], “The formulae-as-types notion of construction,” in J. Seldin and J. Hindley (eds.), *To H. B. Curry: Essays on Combinatory Logic, Lambda Calculus and Formalism*, London, New York: Academic Press, pp. 480–490.
* Jaskowski, S., 1934, “On the rules of supposition in formal logic,” in S. McCall (ed.), *Polish Logic 1920–1939*, Oxford: Clarendon Press, 1967, pp. 232–258.
* Ketonen, O., 1944, *Untersuchungen zum Prädikatenkalkül*, Annales Academiae scientiarum fennicae (Ser. A.I. 23), Helsinki.
* Kleene, S., 1952, *Introduction to Metamathematics*, Amsterdam: North-Holland.
* Kreisel, G., 1951, “On the interpretation of non-finitist proofs: Part I,” *The Journal of Symbolic Logic*, 16(4): 241–267.
* Löwenheim, L., 1915, “Über Möglichkeiten im Relativkalkül”, *Mathematische Annalen*, 76(4): 447–470.
* Menzler-Trott, E., 2001, *Gentzens Problem*, Berlin: Birkhäuser Verlag.
* Menzler-Trott, E., 2007, *Logic's Lost Genius: The Life and Work of Gerhard Gentzen*, Providence, RI: American Mathematical Society.
* Prawitz, D., 1965, *Natural Deduction: A Proof-Theoretical Study*, Stockholm: Almqvist & Wiksell; reprint New York: Dover (with a new preface), 2006.
* –––, 1971, “Ideas and results in proof theory,” in J. Fenstad (ed.), *Proceedings of the Second Scandinavian Logic Symposium*, Amsterdam: North-Holland, pp. 235–308.
* Rathjen, M., 1995, “Recent advances in ordinal analysis; Π12-CA and related systems,” *The Bulletin of Symbolic Logic*, 1(4): 468–485.
* Schütte, K., 1950, “Schlussweisen-Kalküle der Prädikatenlogik,” *Mathematische Annalen*, 122: 47–65.
* –––, 1951, “Beweistheoretische Erfassung der unendlichen Induktion in der Zahlentheorie,” *Mathematische Annalen*, 122: 369–389.
* Skolem, T., 1920, “Logisch-kombinatorische Untersuchungen über die Erfüllbarkeit oder Beweisbarkeit mathematischer Sätze, nebst einem Theoreme über dichte Mengen,” translated and reprinted in *Selected Works in Logic*, J.E. Fenstad (ed.), Oslo, Universitetsforlaget, 1970, pp. 103–136:
* Whitehead, A.N. and B. Russell, 1910–1913, *Principia Mathematica*, Cambridge: Cambridge University Press.

### Secondary literature

* Bernays, P., 1945, “Review: Oiva Ketonen, *Untersuchungen zum Pradikatenkalkul*,” *The Journal of Symbolic Logic*, 10(4): 127–130.
* –––, 1965, “Betrachtungen zum Sequenzen-kalkul,” in *Contributions to Logic and Methodology in Honor of J. M. Bochenski*, Amsterdam: North-Holland, pp. 1–44.
* –––, 1979, “On the original Gentzen consistency proof for number theory,” in J. Myhill et al. (eds.), *Intuitionism and Proof Theory*, Amsterdam: North-Holland, pp. 409–417.
* Feferman, S., 2000, “Highlights in proof theory,” in V. Hendricks et al. (eds.) 2000, 11–31.
* Hempel, C., 2000, “An intellectual autobiography.” In *Science, Explanation, and Rationality*, ed. J. Fetzer, pp. 3-35.
* Hendricks, V., et al. (eds.), 2000, *Proof Theory: History and Philosophical Significance*, Dordrecht: Kluwer.
* Mancosu, P., 1999, “Between Berlin and Vienna: The immediate reception of Gödel's incompleteness theorems,” *History and Philosophy of Logic*, 20: 33–45.
* von Plato, J., 2007, “In the shadows of the Löwenheim-Skolem theorem: early combinatorial analyses of mathematical proofs,” *The Bulletin of Symbolic Logic*, 13(2): 189–225.
* –––, 2007, “From Hilbert's programme to Gentzen's programme,” in the Appendix, Menzler-Trott 2007.
* –––, 2009, “Gentzen's logic,” in *Handbook of the History and Philosophy of Logic* (Volume 5), Amsterdam: Elsevier.
* –––, 2012, “Gentzen's proof systems: byproducts in a program of genius,” *The Bulletin of Symbolic Logic*, 18(3): 313–367.
* Smorynski, C., 2007, “Hilbert's programme,” in the Appendix, Menzler-Trott 2007.
* Tait, W., 2005, “Gödel's reformulation of Gentzen's first consistency proof for arithmetic: the no-counterexample interpretation,” *The Bulletin of Symbolic Logic*, 11(2): 225–238.
* Troelstra, A. and Schwichtenberg, H., 2000, *Basic Proof Theory*, Cambridge: Cambridge University Press, 2nd edition.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=proof-theory-development). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/proof-theory-development/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=proof-theory-development&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](http://philpapers.org/sep/proof-theory-development/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[Boole, George](https://plato.stanford.edu/entries/boole/) | [computability and complexity](https://plato.stanford.edu/entries/computability/) | [epsilon calculus](https://plato.stanford.edu/entries/epsilon-calculus/) | [Frege, Gottlob](https://plato.stanford.edu/entries/frege/) | [Gödel, Kurt: incompleteness theorems](https://plato.stanford.edu/entries/goedel-incompleteness/) | [Hilbert, David: program in the foundations of mathematics](https://plato.stanford.edu/entries/hilbert-program/) | [logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [logic: intuitionistic](https://plato.stanford.edu/entries/logic-intuitionistic/) | [logic: second-order and higher-order](https://plato.stanford.edu/entries/logic-higher-order/) | peano | [proof theory](https://plato.stanford.edu/entries/proof-theory/) | [reasoning: automated](https://plato.stanford.edu/entries/reasoning-automated/) | [Russell, Bertrand](https://plato.stanford.edu/entries/russell/) | [set theory](https://plato.stanford.edu/entries/set-theory/)

[Copyright © 2014](https://plato.stanford.edu/info.html#c) by  
Jan von Plato
