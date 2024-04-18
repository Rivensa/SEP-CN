# 自由逻辑 free (John Nolt)

*首次发表于2010年4月5日；实质性修订于2020年12月11日。*

古典逻辑要求每个特定术语在量化域中表示一个对象，这通常被理解为“存在”的对象集合。自由逻辑则不然。因此，自由逻辑对于分析包含可能为空的特定术语的话语非常有用。如果一个术语没有指称对象或指称域外的对象，则该术语为空。

大多数自由逻辑是一阶逻辑，其量词范围是个体。然而，最近出现了一些关于高阶自由逻辑的研究。Corine Besson（2009）认为内在主义的自然种类理论需要量词范围为种类的二阶自由逻辑，并且她发现这个想法的先例可以追溯到 Cocchiarella（1986）。Andrew Bacon，John Hawthorne 和 Gabriel Uzquiano（2016）探讨了使用高阶自由逻辑来解决某些内涵悖论的可能性，但他们发现这个想法面临着困难重重。Timothy Williamson（2016）勉强同意。然而，本文主要关注一阶逻辑。

第 1 节阐述了自由逻辑的基础知识，解释了它与经典谓词逻辑的区别以及它与包容逻辑的关系，后者允许空域或“世界”。第 2 节展示了如何用三种形式方法表示自由逻辑：公理系统、自然演绎规则和树规则。计算包含空的特指项的原子公式的真值的不同约定产生了三种不同形式的自由逻辑：负自由逻辑、正自由逻辑和中性自由逻辑。这些在第 3 节进行了概述，同时还介绍了随附逻辑，它是为了增强中性逻辑而发展起来的。第 4 节是批判性的，检查了大多数自由逻辑中存在的三个异常。第 5 节对自由逻辑应用于描述理论、部分或非严格函数逻辑、具有克里普克语义的逻辑、虚构逻辑以及在某种意义上是迈农派的逻辑进行了抽样。第 6 节对自由逻辑的历史进行了一瞥。

* [1. 基础知识](https://plato.stanford.edu/entries/logic-free/#1)

  * [1.1 自由逻辑的定义](https://plato.stanford.edu/entries/logic-free/#1.1)
  * [1.2 自由逻辑与经典谓词逻辑的区别](https://plato.stanford.edu/entries/logic-free/#1.2)
  * [1.3 自由逻辑与包容逻辑的关系](https://plato.stanford.edu/entries/logic-free/#incl)
* [2. 形式系统](https://plato.stanford.edu/entries/logic-free/#2)

  * [ 2.1 公理系统](https://plato.stanford.edu/entries/logic-free/#ax)
  * [2.2 自然推理规则](https://plato.stanford.edu/entries/logic-free/#natded)
  * [ 2.3 树规则](https://plato.stanford.edu/entries/logic-free/#trees)
* [ 3. 语义学](https://plato.stanford.edu/entries/logic-free/#3)

  * [ 3.1 负面语义学](https://plato.stanford.edu/entries/logic-free/#negsem)
  * [ 3.2 正面语义学](https://plato.stanford.edu/entries/logic-free/#possem)
  * [ 3.3 中立语义学](https://plato.stanford.edu/entries/logic-free/#neusem)
  * [ 3.4 随附价值论](https://plato.stanford.edu/entries/logic-free/#super)
* [4. 通用异常](https://plato.stanford.edu/entries/logic-free/#4)

  * [4.1 原始谓词的问题](https://plato.stanford.edu/entries/logic-free/#probs)
  * [4.2 替换失败](https://plato.stanford.edu/entries/logic-free/#subfail)
  * [4.3 存在条件的不可表达性](https://plato.stanford.edu/entries/logic-free/#inexp)
* [5. 一些应用](https://plato.stanford.edu/entries/logic-free/#Applications)

  * [5.1 确定描述的理论](https://plato.stanford.edu/entries/logic-free/#defdes)
  * [5.2 具有部分或非严格函数的逻辑学](https://plato.stanford.edu/entries/logic-free/#Partial)
  * [5.3 逻辑学与克里普克语义](https://plato.stanford.edu/entries/logic-free/#Kripke)
  * [5.4 虚构逻辑学](https://plato.stanford.edu/entries/logic-free/#fiction)
  * [ 5.5 迈农逻辑学](https://plato.stanford.edu/entries/logic-free/#Meinong)
* [ 6. 历史](https://plato.stanford.edu/entries/logic-free/#Hist)
* [ 参考文献](https://plato.stanford.edu/entries/logic-free/#Bib)
* [ 学术工具](https://plato.stanford.edu/entries/logic-free/#Aca)
* [其他互联网资源](https://plato.stanford.edu/entries/logic-free/#Oth)
* [ 相关条目](https://plato.stanford.edu/entries/logic-free/#Rel)

---

## 1. 基础知识

### 1.1 自由逻辑的定义

自由逻辑是一种形式逻辑，其量词的解释方式与通常方式相同——即在指定的域 D 上进行对象解释，但其特指项可以表示 D 之外的对象，或者根本不表示。特指项包括专有名词（个体常量）、确定描述以及诸如“2+2”之类的函数表达式。由于经典（即弗雷格式）谓词逻辑要求特指项表示 D 的成员，自由逻辑是一种“非经典”逻辑。当 D 通常被视为现存事物的类时，自由逻辑可以被描述为其特指项的指称不一定存在的逻辑。

### 1.2 自由逻辑与经典谓词逻辑的区别

Karel Lambert（1960 年）将术语“自由逻辑”作为“逻辑学中不带有关于其术语（特指和一般的）存在假设的逻辑”的缩写。一般术语是谓词。Lambert 认为，正如古典谓词逻辑通过允许谓词被不存在的事物满足（如“是火星人”，“不自我识别”，“比光速更快的旅行”）而推广了亚里士多德逻辑一样，自由逻辑通过允许表示不存在的事物的特指术语（如“阿芙洛狄忒”，“最大的整数”，“法国现任国王”）推广了古典谓词逻辑。

由于古典逻辑的特指术语必须表示存在的事物（通常情况下，“∃”被解读为“存在”），所以古典逻辑在应用于包含特指术语的陈述时是不可靠的，这些特指术语的指称对象要么不存在，要么不为人所知。例如，考虑以下真实陈述：

 （S）

我们没有检测到地球相对于以太的运动，

使用“以太”作为 19 世纪物理学家所假设的光传导介质的单数术语。之所以(S)为真，是因为我们现在知道以太不存在。然而，根据经典逻辑，(S)是假的，因为它暗示了以太的存在。自由逻辑允许这样的陈述在没有指称的单数术语的情况下为真。事实上，它甚至允许形式为∼∃x x=t（例如，“以太不存在”）的陈述为真，尽管在经典逻辑中，这些陈述是自相矛盾的，因为它假设 t 指称量化域中的一个对象。

自由逻辑通过拒绝依赖于经典假设的推理来适应空的单数术语（即不指称量化域 D 的成员）。例如，考虑普遍实例化（规范）规则：从前提“每个 x（在 D 中）满足 A”我们可以推断“t 满足 A”。这个规则的形式表达式是：

∀xA⊢A(t/x),

在自由逻辑中是无效的；即使 D 中的每个对象都满足 A，如果 t 不表示 D 的成员，则 A(t/x)可能为假。（这里和其他地方，A(t/x)是将 A 中所有的 x 的出现替换为个体常量 t 的结果；如果没有这样的出现，则 A(t/x)就是 A 本身。）同样无效的是存在泛化：即从包含一个特指项 t 的公式 A，我们可以推断出在 D 中存在一个满足 A(x//t)的东西，其中 A(x//t)是将 A 中一个或多个 t 的出现替换为 x 的结果：

A⊢∃xA(x//t),

如果 t 在 D 中不表示一个对象，则 A 的真实性不能保证在 D 中存在一个满足 A(x//t)的对象。虽然自由逻辑拒绝这样的经典推理，但它不接受经典上无效的推理；因此，对于具有相同词汇的语言来说，它严格弱于经典逻辑。

为了区分表示 D 的成员和不表示 D 的成员的术语，自由逻辑通常使用一元的“存在”谓词‘E!’（有时简写为‘E’）。对于任何一个特定术语 t，如果 t 表示 D 的一个成员，则 E!t 为真，否则为假。‘E!’可以被视为原始的，或者（在具有恒等性的二值自由逻辑中）可以定义如下：

 E!t=df∃x(x=t)。

使用'E!'，我们可以表达经典逻辑的普遍假设，即特定术语't'表示 D 的成员，作为一个明确的前提，E!t。因此，我们可以制定以下更弱的普遍实例化的类比：

∀xA,E!t⊢A(t/x)

和存在泛化：

A,E!t⊢∃xA(x//t),

这些在自由逻辑中是有效的。

### 1.3 自由逻辑与包容逻辑的关系

古典谓词逻辑假定不仅所有的特指术语都指向量化域 D 的成员，而且 D 是非空的。自由逻辑拒绝这些假设中的第一个。包容逻辑（有时也称为空或普遍自由逻辑）拒绝这两个假设。因此，虽然包容逻辑对于包含特指术语的语言必须是自由的，但自由逻辑不一定是包容的。

许多存在性断言，例如∃x(x=x)，∃x(Px→Px)，∃x(Px→∀yPy)，在所有非空域中都是真的，因此在古典逻辑和非包容自由逻辑中都是有效的。但由于在空域中所有存在量化公式都是假的，因此在包容逻辑中没有一个是有效的。相应地，由于在空域中所有普遍量化公式都是真的，因此在包容逻辑中没有一个是自相矛盾的。即使是真空普遍量化公式（形式为∀xA，其中 x 在 A 中不是自由的）在空域中也是真的。因此有以下模式：

∀xA→A，其中 x 在 A 中不是自由的，

在经典逻辑和非包容自由逻辑中都有效的逻辑，在包容逻辑中是无效的。包容逻辑还使一些约束定律无效，例如：

∀x(P&A)↔(P&∀xA)，其中 x 在 P 中不是自由的，

这些定律用于前缀化公式（使量词具有最广泛的范围）或净化公式（使量词具有最狭窄的范围）。而在包容逻辑中，公式：

∀x(A↔x=t),

在确定描述的理论中广泛使用，与下述表达式不等价，即：

∀x(A→x=t)&A(t/x),

由于 D 为空且 A(t/x)为假，第一个命题为真但第二个命题为假。当需要这样的规律时，非包容性自由逻辑可能比包容性自由逻辑更可取。然而，由于包容性使逻辑摆脱了更多的存在前提，许多自由逻辑学家更喜欢它。

## 2. 形式系统

逻辑可以用各种方式表示。公理系统、自然演绎系统和树（或等价地，表格）是最常见的表示方式之一。本节介绍了三种表示方式，适用于被称为正自由逻辑（PFL）的双值包容形式的自由逻辑，并提及了一些变体。（有关此上下文中“正”一词的含义，请参见第 3.2 节）。PFL 在一个没有命题符号或函数符号的一阶语言 L 中被规定，其原始逻辑运算符为否定（非）‘∼’，条件（如果-那么）‘→’，全称量词（对于所有）‘∀’，恒等‘=’和‘E!’，其他运算符按照通常的方式定义。为了明确起见，我们假设 L 的公式是封闭的（不包含未量化的变量），并且它们可以是虚假量化的（具有∀xA 或∃xA 的形式，其中 x 在 A 中没有自由出现）。变量的出现在它位于绑定该变量的运算符（如‘∀’或‘∃’）的作用范围内时被量化；否则它是自由的。

### 2.1 公理系统

PFL 可以通过将以下模式添加到经典命题逻辑的重言式中，以唯一的推理规则 modus ponens 来进行公理化：

(A1)(A2)(A3)(A4)(A5)A→∀xA∀x(A→B)→(∀xA→∀xB)∀xA(x/t)，如果 A 是一个公理∀xA→(E!t→A(t/x))∀xE!x。

再次，A(x/t)是通过将 A 中的所有个体常量 t 替换为变量 x 得到的结果。如果没有这样的出现，则 A(x/t)就是 A 本身。在(A1)中，变量 x 在 A 中不是自由的（否则 A 将是一个开放公式，而 L 的公式是封闭的）。然而，在(A2)中，x 可以在 A 或 B 中是自由的，在(A3)和(A4)中，x 可以在 A 中是自由的。

(A4)和(A5)是自由逻辑的特殊公理。其他的是经典的。（A4）修改了经典原则：

(A4c)∀xA→A(t/x)

通过使用“E！”来限制规范。（A4）实际上规定量词范围包括满足“E！”的所有对象，（A5）规定量词范围仅包括满足“E！”的对象。省略（A5）并将（A4）替换为（A4c）得到经典逻辑。为了获得一个非包容性的自由逻辑，我们可以在（A1）-（A5）中添加公理∃xE！x - 或者任何形式为∃xT 的公理，其中对于任何术语 t，T（t/x）都是一个重言式。

对于包含恒等谓词的语言，我们还需要：

 （A6）s=t→（A→A（t//s）），

在上述情况下，A(t//s) 是通过将 A 中的一个或多个 s 替换为 t 而得到的结果，并且

(A7)t=t

如果所有自我身份陈述，包括那些具有空特指项的陈述，都要为真或

(A7-)∀x(x=x)

如果不是（见下面的第 3.1 节和第 3.2 节）。如果‘E!’是根据第 1.2 节中所示的身份谓词来定义的，那么（A4）的形式为：

∀xA→(∃y(y=t)→A(t/x)).

‘E!’ 不能在没有身份谓词（Meyer，Bencivenga 和 Lambert，1982）的情况下被定义。

自由逻辑可以在没有‘=’或‘E!’的情况下被形式化。（A1）-（A3）保持不变，但（A4）和（A5）分别被替换为：

（A4'）（A5'）∀y（∀xA→A（y/x））∀x∀yA→∀y∀xA。

(A4′), 像(A4)一样，将规范限制在 D 内的对象上，但它使用量词而不是'E!'来实现。量词置换公理(A5′)在存在身份公理的情况下是冗余的，但正如 Fine 在(1983)年证明的那样，它与其他公理是独立的。

到目前为止讨论的公理系统中使用的公式是封闭的，但一些自由逻辑允许开放的公式，即包含自由变量的公式。这些逻辑遵循两种变量赋值的约定之一。将每个自由变量分配给 D 的成员的逻辑称为 E+-逻辑；不分配给 D 的成员的逻辑称为 E-逻辑。在 E+-逻辑中，以下规范规则是有效的，但在 E-逻辑中不是：

 ∀xA⊢A(v/x)。

（这里 A(v/x)是将 A 中的每个变量 x 替换为一个对于 A 中的 x 自由的变量 v 的结果。）相反地，在 E-逻辑中有效但在 E+-逻辑中无效的以下替换规则成立：

 A⊢A(t/x)。

但由于本文采用了封闭公式，E-逻辑和 E+-逻辑之间的区别可以在这里被忽略。（有关允许包含公式中的开放公式引发的问题的阐明性讨论，请参见 Williamson（1999）的论述。）

### 2.2 自然演绎规则

PFL 也可以等价地在自然演绎系统中进行表述。命题逻辑和恒等符号的引入和消除规则与通常相同。量词的引入和消除规则受到谓词'E!'的限制，如下所示：

| (∀I) | 给定从'E!t'推导出'A(t/x)'的推导，其中't'是新的且不出现在'A'中，撤销'E!t'并推断出'∀xA'。                                          |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| (∀E) | 从∀xA 和 E!t 推导出 A(t/x)。                                                                                                     |
| (∃I) | 从 A 和 E!t 推导出∃xA(x//t)。                                                                                                    |
| (∃E) | 给定∃xA 和一个从 A(t/x)&E!t 推导出公式 B 的推导，其中 t 是新的且不出现在 A 或 B 中，从∃xA 中解释 A(t/x)&E!t 并从∃xA 推导出 B。 |

变量 x 在 A 中不一定是自由的，此时 A(t/x)就是 A。'E!'可以被视为原始的（在这种情况下，它不需要额外的规则），或者可以根据身份谓词在 1.2 节中定义。对于非包容逻辑，我们可以添加一个规则，引入∃xE!x。

### 2.3 树规则

PFL 的 Jeffrey 风格树规则（Jeffrey 1991）可以通过用以下规则替换存在量词和全称量词公式的经典规则来获得：

存在规则：如果∃xA 在一个开放路径上未被选中，选中它，并且

1. 如果 x 在 A 中是自由的，选择一个新的个体常量 t，并在∃xA 下的每个开放路径底部列出 E!t 和 A(t/x)，以及
2. 如果 x 在 A 中不是自由的，在∃xA 下的每个开放路径底部写下 A。

通用规则：如果∀xA 出现在一个开放路径上，那么

1. 如果 x 在 A 中是自由的，那么在该路径上的公式中出现的个体常量 t，或者如果路径上没有个体常量，则是一个新的个体常量，将∀xA 下方的每个开放路径分成两个分支，将∼E!t 写在第一个分支的底部，将 A(t/x)写在第二个分支的底部，并且
2. 如果 x 在 A 中不是自由的，在∀xA 下方的每个开放路径的底部写下 A。

对于不允许空量词化的语言，每种情况下都可以省略条款（ii）。非包容性自由逻辑需要一个额外的规则，如果路径中尚未包含此形式的公式，则引入一个新的个体常量 E！t。

## 3. 语义学

自由逻辑的语义学在如何为包含至少一个空的特指项的原子公式分配真值方面存在差异。有三种常见的方法：

1. 负面语义要求所有空术语的原子公式为假，
2. 正面语义允许一些非 E!t 形式的空术语的原子公式为真，而
3. 中立（或无价值）语义要求所有非 E!t 形式的空术语的原子公式为无真值。

### 3.1 负语义学

负语义学是一种双值语义学，其中所有空术语的原子公式（包括恒等式）都为假。这里介绍的包容版本只对经典语义学进行最小调整，以允许非指称术语。

设语言 L 如第 2 节所定义。那么，L 的负包容模型是一个二元组⟨D，I⟩，其中 D 是可能为空的集合（域），I 是一个将个体常量指派给指称对象并将谓词的扩展指派给其解释函数。

1. 对于 L 的每个个体常量 t，要么 I(t)∈D，要么 I(t)未定义，并且
2. 对于 L 的每个 n 元谓词 P，有 I(P)⊆Dn。

（Dn 是 D 的 n 元组集合，一个对象 d 的 1 元组就是 d 本身。）给定一个模型⟨D,I⟩，我们递归地定义一个赋值函数 V，它按照以下方式为公式分配真值：

V(Pt1…tn)=⎧⎪⎨⎪⎩T⇔I(t1),…,I(tn)都被定义且⟨I(t1),…,I(tn)⟩∈I(P);F 否则.V(s=t)={T⇔I(s),I(t)都被定义且 I(s)=I(t);F 否则.V(E!t)={T⇔I(t)被定义;F 否则.V(∼A)={T⇔V(A)=FF 否则.V(A→B)={T⇔V(A)=F 或 V(B)=T;F 否则.V(∀xA)=⎧⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪⎨⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪⎩T⇔ 对于所有的 d∈D,V(t,d)(A(t/x))=T(其中 t 是任意不在 A 中的个体常量且 V(t,d) 是模型 ⟨D,I∗⟩ 上的估值函数，其中 I∗ 与 I 相同，除了 I∗(t)=d);F 否则.

(元语言符号‘⇔’表示“当且仅当”。) 逻辑学对这种语义是足够的，可以通过对 PFL 的公理进行三个改变来进行公理化。第一个改变是添加公理：

(A-)Pt1…tn→E!ti, 其中 1≤i≤n 且 P 是任意原始的 n 元谓词，包括 ‘=’。

这表达了一个约定，即原子公式只有在其术语引用时才能为真。其次，由于所有空术语的等同性陈述在负语义上都是假的，(A7)是无效的，必须用(A7-)替换。第三，由于(A2)，(A3)，(A-)和(A7-)共同暗示了(A5)，可以省略(A5)。得到的逻辑学被称为 NFL（负自由逻辑学）。对于具有函数符号的语言，负自由逻辑学还需要严格性公理：

E!f(t1,…,tn)→E!ti，其中 1≤i≤n，

这确保了一个函数只有在每个参数都有值的情况下才有值。由于对等同性的不寻常处理，负自由逻辑学验证了以下等价性：

t=t↔E!t.

（这种等价关系有时被视为 E!t 的定义。）负自由逻辑中的身份陈述因此具有存在性的含义。在某些情境下，这可能会引起问题。例如，根据 Shapiro 和 Weir（2000）的观点，使用这种“存在性”概念的身份陈述会玷污一些最近基于自由逻辑的新逻辑主义数学哲学的“认识上的纯洁性”。

负自由逻辑还具有一种奇特之处，即它验证了不存在物的不可辨性原则：

(∼E!s&∼E!t)→(A→A(t//s)),

其中 A(t//s)是通过将 A 中的一个或多个 s 替换为 t 得到的结果.

### 3.2 正向语义学

正向语义允许一些非形式为 E!t 的空术语原子公式为真。它们通常是双值的，尽管也有一些变种允许真值间隙或额外的真值。本节仅考虑双值语义。

正向语义将形式为 t=t 的公式视为真，无论 t 是否为空。因此，它们验证(A7)，该公式肯定了所有自我身份陈述，而不仅仅是较弱的(A(7-)，该公式仅肯定非空术语之间的自我身份。

与负向语义类似，一些正向语义要求每个特指术语要么表示 D 的成员，要么根本不表示任何东西。但是，当一个术语无法表示时，包含它的原子公式的真值通常不能仅仅是其表示的函数，并且必须以某种非标准的方式评估该公式。为了避免这种不规则性，同时允许空术语公式为真，其他正向语义允许特指术语表示，并且谓词被非 D 成员满足。这些非 D 成员被收集到第二个或外部域 Do 中，与之相对比的是 D 被描述为内部域。结果是一个双域语义。

具有双重领域的积极语义通常是最简单的。外部领域 Do 的成员通常代表“不存在”的事物。根据应用的不同，这些可能是理论或理想实体，错误对象（在计算机科学中），虚构对象，仅可能（甚至不可能）的对象等等。一些作者将 D 作为 Do 的子集，这是本文中的约定；其他人则使两者不相交。在双值双领域语义中，每个单数术语都表示 Do 中的一个对象，尽管可能不在 D 中。因此，D，尽管不是 Do，可能为空。谓词被分配到 Do 的扩展上，并且原子公式（无论是否为空术语）的真值按照通常的塔斯基方式计算：当且仅当由其单数术语表示的对象 n 元组按顺序成为谓词的扩展的成员时，原子公式为真。身份陈述也不例外。形式为 s=t 的陈述当且仅当 s 和 t 表示相同的对象时为真。因此，即使是空术语，它们也可能为真。

更正式地说，对于在第 2 节中定义的语言 L，双领域模型是一个三元组⟨D，Do，I⟩，其中 D 是可能为空的内部领域，Do 是一个非空的外部领域，使得 D⊆Do，并且 I 是一个解释函数，对于 L 的每个个体常量 t，I(t)∈Do，并且对于 L 的每个 n 元谓词 P，I(P)⊆Dno。给定一个模型⟨D，Do，I⟩，估值函数 V 如下分配真值给原子和量化公式：

V(Pt1…tn)={T⇔⟨I(t1),…,I(tn)⟩∈I(P);F otherwise.V(s=t)={T⇔I(s)=I(t);F otherwise.V(E!t)={T⇔I(t)∈D;F otherwise.V(∀xA)=⎧⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪⎨⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪⎩T⇔ for all d∈D,V(t,d)(A(t/x))=T(where t is not in A and V(t,d) is thevaluation function on the model ⟨D,Do,I∗⟩such that I∗ is just like I except thatI∗(t)=d);F otherwise.

“∼”和“ → ”的子句与负自由逻辑中的相同。具有经典等同性的 PFL——即由（A1）-（A7）公理化的逻辑——在这种语义上是完备和一致的（Leblanc 和 Thomason 1968）。

双域语义被批评为本体论上的奢侈。作为回应，一些作者提倡单域正义语义，其不为空的特指项分配指称。在这样的语义中，空特指原子公式需要非传统的处理。通常，这样的语义以两种不同的方式确定原子公式的真值：对于所有术语都引用的公式，采用 Tarksi 风格的计算；对于空特指原子公式，采用单独的真值分配。然而，细节往往变得复杂。例如，Antonelli（2000）提倡这样一种单域自由逻辑，他称之为原型语义，但最近（2007 年，第 72 页）他将所有正自由逻辑的语义都描述为“有些人为”，并质疑了普遍自由量化的逻辑特性。

### 3.3 中立语义

中性语义使所有空术语的原子公式不是 E！t 无真值。无真值的公式通常被称为“真值间隙”。中性语义有两种类型：普通中性语义，它提供了从组成部分直接计算复杂公式的真值的约定，即使存在空术语，以及超值语义，它通过考虑组成部分如果它们的空术语有指称时可能具有的所有值来计算复杂公式的真值。本节将讨论普通中性语义，第 3.4 节将讨论超值语义。

使所有空术语的原子公式无真值的统一政策在原子层面上具有合理性和简单性的优势，但它使复杂公式的评估变得复杂。当它们通常操作的一些值缺失时，逻辑运算符如何运作？有些情况是相当明确的。例如，无真值公式的否定通常被认为是无真值的。但是：

* 如果 A 为真且 B 无真值，那么 A→B 是假还是无真值？
* 如果 A 为假且 B 没有真值，那么 A→B 是真还是没有真值？
* 设 A=(B&C)，其中 B 中的 x 是自由的，B 对于 D 的某些成员为真但不是全部成员，C 是封闭的且没有真值。显然，这个开放公式对于 D 中的每个对象来说要么没有真值，要么对某些对象没有真值而对其他对象为假。在任一情况下，∃xA 是没有真值还是假？

在极端情况下，我们可能希望运算符产生尽可能多的合理真值，以验证尽可能多的经典有效公式。另一方面，我们可以安排所有空术语公式都没有真值，这将产生一个非常弱的逻辑（Lehman 2001）。但无论我们如何选择，许多在经典谓词逻辑和通常形式的自由逻辑中都有效的公式，甚至在命题逻辑中也是如此，将变得无效。例如，非矛盾律：

∼(A&∼A)

当 A 是真值空的时候（除非我们使真值空的陈述的否定为真），它变得无效。当然，这个定律和许多其他标准逻辑原理仍然是弱有效的——即，在任何模型上都不是假的——并且可以构建一个基于弱有效性而不是普通有效性的逻辑。但是，因为任何这样的逻辑仍然比经典逻辑弱，并且它的定理甚至不需要是真的，大多数逻辑学家都拒绝这种策略。有关中立自由逻辑的更多信息，请参见 Lehman 1994、2001 和 2002 年的 233-237 页。

### 3.4 随附解释

中性语义学可以通过添加超值来验证所有标准自由逻辑的定理。超值首次由范弗拉森（1966）形式化。这里介绍的版本是 Bencivenga 方法（1981 年和 1986 年）的变体。

基本思想是这样的：当空项剥夺了一个公式的真值时，超值语义学仍然将其视为真（或假），如果将这些项的指称分配给它们的所有可能方式都同意将其视为真（或假）。这种策略恢复了许多在普通中性语义学中会失去的原则的有效性。以下是非矛盾律的一个实例：

 ∼（Pt&∼Pt），

例如，当 t 为非指称时（假设采用使真值为空的普通中性语义的否定），则自由是没有真值的。因此，在这样的语义中，该定律本身是无效的。然而，如果我们给 t 指定一个指称对象，那么该指称对象要么在 P 的外延中，要么不在。如果在外延中，那么 Pt 为真。如果不在外延中，那么 Pt 为假。在任一情况下，∼(Pt&∼Pt)为真。因此，由于将指称对象分配给 t 的所有可能方式都同意使∼(Pt&∼Pt)为真，我们应该将∼(Pt&∼Pt)本身视为真。通过这种方式，可以保留矛盾律。

更明确地说，超值论从一个具有单个、可能为空的域的中性模型 M 开始。然后我们构造 M 的补集的集合。这些可以被看作是双值双域正模型，其内部域是 M 的域，但也有一个外部域 Do，为空项提供指称对象。在每个补集中，M 中非空的特指项保留它们的指称对象，而在 M 中为空的特指项表示 Do−D 的成员。对于每个 n 元谓词 P，P 的外延是 Dno 的子集，也是 M 中 P 的外延的超集。

现在，我们从这些补集中构造一个超值论。M 的超值论是对公式的真值的部分赋值，使得如果 M 的所有补集都使其为真，则该公式为真；如果它们都使其为假，则该公式为假；如果它们不一致，则该公式为真值为空。在超值论语义中，如果一个公式在所有超值论上都为真，则它在该语义上是有效的。这种语义验证了 PFL 的所有定理，且仅验证了这些定理（Bencivenga 1981，Morscher & Simons 2001，pp. 14–18）。

超值论采用了 Bencivenga（1986）所称的“反事实理论”：如果一个空术语陈述在其空术语的任何指派下都是真的，那么它就是真的。这被许多批评者认为是错误的。此外，逻辑本身还有很多不足之处。首先，超值论的推论过于强大。因此，例如，虽然公式 Pt→E！t 在超值论语义上（完全正确地）不是有效的，但是由于在 Pt 为真的每个超值论上 E！t 都为真，所以推论（可推导性陈述）Pt⊢E！t 是不正确的语义上有效的。因此，虽然 PFL 在超值论语义上是正确的，并且每个语义上有效的公式都是 PFL 的定理，但并非所有语义上有效的推论都可以在 PFL 中证明。实际上，超值论的推论不能由任何自由逻辑的扩展公理化。这是根据 Woodruff（1984）的结果得出的，他已经证明超值论语义具有许多第二阶语义的不良特性。Jerry A. Fodor 和 Ernest Lapore（1996）进一步论证，构建超值论所需的补全不是保持意义的。因此，他们得出结论，超值论的两个所谓优势——它们解释了具有真值间隙的句子的意义，并且它们允许我们保留经典逻辑——是虚幻的。最后，由于超值论是由实际上是正向双域模型的补全构建的，我们可能会想知道通过超值论是否值得麻烦，因为仅仅使用正向双域模型就更简单且更适用于 PFL。

## 4. 通用异常

尽管上述问题特定于特定形式的自由逻辑，但有些异常会影响所有或几乎所有形式。本节考虑以下三个问题：（1）与将原始谓词应用于空项相关的一系列问题，（2）共指表达式的真值保持替代性失败，以及（3）自由逻辑无法表达存在的充分条件。

### 4.1 原始谓词的问题

在经典逻辑和正自由逻辑中，任何有效公式（或推理形式）的替代实例本身也是有效的公式（或推理形式）。但在负自由逻辑或中性自由逻辑中，情况并非如此。替代实例是通过用可能更复杂的具有相同语义类型的符号替换原始非逻辑符号的结果 - n 元谓词用 n 个变量的开放公式替换，个体常量用特定术语替换 - 每个相同原始符号的出现都被相同可能复杂的符号替换。将某个公式 B 中的原始 n 元谓词 P 的出现替换为具有自由变量 x1，…，xn 的开放公式 A 的过程如下：在该出现中，t1，…，tn 是紧随 P 的个体常量或变量，将 B 中的 Pt1…tn 替换为 A（ti/xi） - 将 A 中的 xi 替换为 ti 的结果，对于每个 i，1≤i≤n。

例如，让 P 是一个原始的一元谓词。那么，如果语义是负的，那么 Pt→E!t 是有效的。但是现在考虑替换实例∼Pt→E!t，在这个实例中，将开放公式∼Px 替换为 P。当 t 为空时，这个替换实例是假的。因此，有效的公式可能有无效的替换实例。对于普通的中性语义来说，情况也是如此，只要它们的结果为真，条件语句就为真。

此外，在负的语义中，空术语陈述的真值在我们选择的原始谓词上任意取决于。例如，考虑一个在人类领域上解释的负自由逻辑，它以“A”为原始的一元谓词，意思是“是成年人”，并通过以下模式定义“是未成年人”：

Mt=df∼At.

对于任何非指称名称 t，在这个理论中 At 为假；因此 Mt 为真。如果我们将“是未成年人”作为原始概念，那么 At 和 Mt 的真值将被颠倒。但为什么真值要以这种方式依赖于原始性呢？

积极语义学避免了这些异常情况。但是，如果是双值的，在应用中它们迫使我们以某种其他方式为空术语公式分配真值，通常没有足够的理由。例如，考虑以下三个公式，它们都包含空的特指术语“1/0”（其中“/”是除号）：

1/0=1/01/0>1/01/0≤1/0

假设一个双值正义语义，我们应该使哪些为真，哪些为假？由于语义是正义的，'1/0=1/0'自动为真。有人可能进一步争论，由于'≤'表示的关系比'='弱，并且'1/0=1/0'为真，'1/0≤1/0'也应该为真。但这只是用空术语模拟一个适用于指示术语的推理模式。这种模仿有多大程度上是合理的？假设我们决定使'1/0≤1/0'为真；那么我们是否应该使'1/0>1/0'为假？对于回答这类问题，没有非任意性的标准。当然，在很大程度上，答案并不重要。这里没有事实；任何一致的约定都可以。但这正是问题所在。需要一些约定，并且建立一个约定可能会很麻烦，却毫无意义。

### 4.2 替代性失败

古典谓词逻辑具有令人满意的特点，即共同扩展的开放公式可以在任何公式 salva veritate 的情况下互相替换，即不改变该公式的真值。（在 n 个自由变量 x1,...,xn 中，开放公式 A 和 B 是共同扩展的，当且仅当∀x1...∀xn(A↔B)为真。）但是，正如 Lambert 在 1974 年指出的那样，这个原则在几乎所有带有恒等性的自由逻辑中都不成立。例如，考虑公式 t=t，其中 t 为空，这是开放公式 x=x 的一个实例。现在 x=x 与(x=x&E!x)和(E!x→x=x)都是共同扩展的，因为这三个公式都被 D 的所有成员满足。因此，如果共同扩展的开放公式可以在 salva veritate 的情况下互换，(t=t&E!t)和(E!t→t=t)将与 t=t 具有相同的真值。但是在几乎所有的自由逻辑中，情况并非如此。正面自由逻辑和第 3.4 节中描述的超值逻辑使得 t=t 为真，(t=t&E!t)为假；负面自由逻辑使得 t=t 为假，(E!t→t=t)为真；而任何普通的中立自由逻辑，其条件语句在其前件为假时为真，使得 t=t 没有真值，而(E!t→t=t)为真。许多人认为这令人困扰，因为自从 Frege 以来，人们普遍认为（1）复杂语言表达式的扩展应该是其组成部分的扩展的函数（因此共同扩展的组成部分应该可以互换而不影响整体的扩展）和（2）公式（或陈述）的扩展是一个真值。

一个可能的回应是拒绝（2）。Leeb（2006）为 PFL 的一个版本开发了一个双域语义，其中公式的扩展是抽象的事实状态。在这个语义中，共指的开放句子不是 salve veritate 可互换的，而是（正如他所说的）salve extensione；也就是说，这种交换不会改变陈述中所指定的事实状态。但是 Leeb 的事实状态语义非常复杂，可能会阻碍应用。

那些希望保留（2）的人可以得到以下观察的安慰：虽然几乎所有自由逻辑的等价开放公式的可替代性真理失败，但是对于正自由逻辑来说，一个相关但较弱的原则，即等价开放公式的可替代性真理，是有效的。在 n 个自由变量 x1,...,xn 中，开放公式 A 和 B 是等价的，如果对于外部域 Do 中 x1,...,xn 的每个指示的分配，它满足 A 当且仅当它满足 B。例如，在上一段中提到的开放公式中，x=x 和（E！x→x=x）在双域正自由逻辑中是等价的，因为它们被 Do 的所有成员满足，但是（x=x&E！x）与它们不是等价的，因为它只被 D 的成员满足。然而，与等价性不同，等价性不能用 PFL 的语言表达。但是，通过引入对外部域的量词，等价性变得可表达-这是第 5.5 节中考虑的一种策略。

### 4.3 存在条件的不可表达性

“任何思维的存在”，“任何必然存在的存在”，“即刻知道的存在”：这些关于存在的充分条件的陈述在形而上学的辩论中很突出。但是，令人惊讶的是，它们在自由逻辑中是不可表达的。它们的表面形式是∀x（A→E！x）。但是，因为全称量词仅在 D 上范围，而 D 也是 E！的扩展，所以这种形式在自由逻辑中是有效的-就像在将 E！x 表示为∃yy=x 的经典逻辑中一样。这种形式的陈述-甚至包括“所有不可能的事物都存在”-都不能为假。因此，在自由逻辑中，所有这些陈述都同样缺乏内容。因此，论证评估因此受到影响。例如，考虑明显有效的推理：

|    | I think.         |
| ---- | ------------------ |
|    | 任何思维的存在。 |
| ∴ | I exist.         |

它在自由逻辑中的自然形式化是 Ti,∀x(Tx→E!x)⊢E!i。但这种形式是无效的。为了得出结论，我们必须首先通过从第二个前提中的具体化推导出 Ti→E!i，然后再与第一个前提使用演绎法则。但由于逻辑是自由的，具体化需要一个自相矛盾的前提 E!i。

最近在讨论中，涉及“存在限定词”的不令人满意的蕴涵问题——涉及到它们对象存在的断言——尤其是在中性自由逻辑中出现。丹尼尔·耶克尔（2016 年，第 379 页）认为，“在任何中性自由逻辑中，要么存在一些存在限定词将蕴涵一些不希望的存在断言，要么它们将不蕴涵一些希望的存在断言。”但前一段的例子同样适用于负自由逻辑和正自由逻辑。解决方法不仅仅在于自由逻辑本身，而是量化到双域语义的外部域中可能会有所帮助（见第 5.5 节）。

## 5. 一些应用

本节考虑了自由逻辑在确定描述理论、允许部分或非严格函数的语言、具有克里普克语义的逻辑、虚构逻辑和在某种意义上是“迈农式”的逻辑中的应用。自由逻辑还在其他地方找到了应用——最主要的是在谓词理论、编程语言、集合论、预设逻辑（具有中性语义）和定义逻辑中。有关这些和其他应用的更多信息，请参见 Lambert 1991 和 2001b；Lehman 2002，第 250-253 页；以及 Nolt 2006，第 1039-1053 页。

### 5.1 确定描述理论

自由逻辑的最早和最广泛的应用是在确定描述理论中。确定描述是一种可以用“the x such that A”形式表达的短语，其中 A 是一个只有 x 自由的开放公式。形式上，这可以使用一个特殊的逻辑运算符，即确定描述运算符‘ι’，写作ιxA。与罗素相反，自由逻辑将确定描述视为不仅仅是表面上的单个术语，其逻辑形式仅可通过复杂的上下文定义获得，而是真正的单个术语。因此，像一个个体常量一样，ιxA 可以附加到谓词上，并且（在适当的条件下）可以替换变量。对于域 D 中的任何对象 d，当且仅当在 D 中的所有对象中，d 且仅 d 满足 A 时，ιxA 表示 d。如果在 D 中有多个满足 A 的对象，或者没有对象满足 A，则ιxA 为空。因此，描述运算符满足：

（LL）∀y（y=ιxA↔∀x（A↔x=y）），其中 A 中的 x 自由。

（这个公式有时被称为“兰伯特定律”，尽管最早发表提到它的是 Hintikka（1959），第 83 页。然而，在 Hintikka 的系统背景下，它有各种不受欢迎的后果（参见 Lambert 1962; van Fraassen 1991，第 8-10 页）。）将（LL）添加到由（A1）-（A6）和（A7-）定义的自由逻辑中，得到最小自由确定描述理论 MFD。MFD 是几乎所有自由描述理论的核心，因此它们只在它们认可的附加原则上有所不同。

存在很大的变化空间，因为 MFD 未能为包含空描述的原子公式（包括等式）指定真值条件，而有很多方法可以做到这一点。使所有包含空描述的原子公式为假，可以得到一个由将（LL）添加到 NFL（Burge 1974，Lambert 2001h）的否定自由描述理论。结果本质上是 Bertrand Russell 的明确描述理论，但将描述运算符视为原始的而不是上下文定义的。

最简单的正自由描述理论使所有空术语之间的等式为真。被称为 FD2，可以通过添加（LL）和以下内容来公理化：

(∼E!s&∼E!t)→s=t

对于 PFL 来说，FD2 类似于戈特洛布·弗雷格（Gottlob Frege）的确切描述理论；但是，弗雷格选择了一个单一的任意现有对象作为空的特指术语的常规指称对象，而 FD2 则使这个对象不存在。FD2 可以很容易地在具有一个外部域中的一个对象的双域正向语义模型中建模。

在 FD2 中，所有的空描述都可以互换地保持真实。但是，在普通语言中，这个结果容易受到反例的影响。这个陈述：

金山是一个可能的对象，

例如，是真的，而这个是假的：

所有非自身成员的集合是一个可能的对象，

是假的 - 尽管每个都将相同的谓词短语“是一个可能的对象”应用于一个空描述。因此，我们可能更喜欢一种更灵活的积极自由描述理论，其中空术语之间的等同可能是假的。文献中提出了各种各样的这些理论（Lambert 2001a，2003c，2003d，2003h；Bencivenga 2002，第 188-193 页；Lehman 2002，第 237-250 页）。

### 5.2 部分或非严格函数的逻辑

一些逻辑使用原始的 n 元函数符号，这些符号与 n 个特定术语结合形成一个复杂的特定术语。例如，加号“+”是一个二元函数符号，当放置在“2”和“3”之间时，形成一个复杂的特定术语“2+3”，表示数字五。类似地，“2”是一个一元函数符号，当放置在表示数字的术语之后时，形成一个复杂的特定术语，表示该数字的平方。从语义上讲，函数符号的扩展是一个函数，其参数是量化域 D 的成员，而结果复杂术语表示将该函数应用于按照列表顺序列出的 n 个组成特定术语的指示物的结果。由于经典逻辑要求每个特定术语（包括由函数符号形成的特定术语）都要引用 D 中的一个对象，因此对于每个这样的函数符号 f，它要求：

∀x1…∀xn∃y(y=f(x1,…,xn)).

因此，古典逻辑禁止扩展为部分函数的原始函数符号-其值对于某些参数是未定义的函数。例如，二元除法符号“/”就是这样的符号，因为当它放置在两个数字之间时，第二个数字为“0”，它形成一个空的特定术语。同样，当应用于非收敛序列的名称时，极限函数符号“lim”产生一个空的特定术语。古典逻辑可以通过复杂的上下文定义来容纳部分函数的函数符号。但是，这些函数符号通常书写的形式并不是它们的逻辑形式（就像罗素的确定描述一样）。自由逻辑提供了一个更优雅的解决方案。因为它允许空的特定术语，所以部分函数的符号可以简单地被视为原始的。

在涉及部分函数的自由逻辑应用中，存在谓词“E！”通常被后缀定义性谓词“↓”所取代。对于任何特定术语 t，当且仅当 t 在 D 中具有某个确定值时，t↓为真。因此，例如，公式“(1/0)↓”为假。虽然一些作者（例如 Feferman（1995））区分“↓”和“E！” ，但整个文献并没有这样做，“↓”通常只是“E！”的一种语法变体。

除了部分函数之外，正自由逻辑还可以轻松处理非严格函数。非严格函数是指即使其所有参数未定义，也可能产生一个值的函数。例如，二元函数 f(x,y)=x，即使 y 项为空，也可以产生一个值。因此，例如，公式 f(1,1/0)=1 可以被视为真。非严格函数的逻辑必须是正的，因为在负面或中立的逻辑中，空项的原子公式，例如 f(1,1/0)=1，不能为真。涉及非严格函数的自由逻辑在一些编程语言中有应用（Gumb 2001，Gumb 和 Lambert 1991）。这样的逻辑可以使用双域语义，其中空的函数表达式（如'1/0'）的指称被视为错误对象-在程序运行中对应于错误消息的对象。因此，例如，计算 f(1,1/0)的指令可能返回值 1，但计算 f(1/0,1)的指令将返回错误消息。

### 5.3 具有克里普克语义的逻辑

Kripke语义学适用于量化模态逻辑、时态逻辑、义务逻辑、直觉逻辑等等，通常是自由的。这是因为它们将真值索引到我们称之为“世界”的某些对象上，而通常我们所命名的一些事物在某些世界中并不存在。世界可以以各种方式构思：例如，在真理模态逻辑中，它们可以被理解为可能的宇宙；在时态逻辑中，它们可以是时间或时刻；在义务逻辑中，它们可以是可允许的条件；在直觉逻辑中，它们可以是认知上可能的知识状态。与每个世界w相关联的是一个对象域Dw（直观上，存在于w的对象集合）。一个对象可能存在于一个以上的世界中，但不一定存在于所有世界中。因此，例如，时态逻辑的Kripke语义学通过Russell成为某些“世界”（即，过去两个世纪的某些时间段）的成员，但不是其他“世界”（例如，现在或所有未来时间）的成员，来表示Bertrand Russell曾经存在但现在不存在的事实。这里做出了两个自然的假设：同一个对象可以存在于一个以上的世界中（这是跨世界身份的假设），并且一些特指项（特别是专有名词）不仅指代给定世界上的一个对象，而且指代每个世界上的同一个对象。这样的术语被称为刚性指示符。任何将刚性指示符与其指示物在其不存在的世界的域上的量词相结合的逻辑必须是自由的。

克里普克语义在不同的世界中给予谓词不同的外延。因此，例如，在文明的黎明之前的所有世界（时代）中，“是哲学家”的谓词的外延是空的，而最近则有所变化。对于刚性指定的术语来说，这引发了一个问题，即如何在其指称不存在的世界中评估原子公式。例如，在罗素不存在的世界（时代）中，如现在这样的时代，“是哲学家”的谓词是否满足？对于这类问题给出的一般答案决定了克里普克语义是积极的、消极的还是中性的。

对于消极或中性语义，n 元谓词 P 在 w 的外延是 Dnw 的子集。只有当原子公式中的所有特指术语在 Dw 中都有指称时，原子公式才能在 w 上为真；否则，在消极语义中为假，在中性语义中为无真值。在积极语义中，原子公式在 w 上可能是空指的，但仍然可以为真。谓词通常在所有世界的域的并集 U 上进行解释，这在每个世界中充当一种外部域，因此 n 元谓词 P 在世界 w 上的外延是 Un 的子集。然而，某些应用程序要求谓词对不存在于任何世界中的对象为真，并且要求特指术语能够指称这些对象。如果是这样，我们可以将这些对象收集到一个超集 U 的外部域中。（它们可能是虚构的对象、无时无刻的柏拉图对象、不可能的对象等等。）

量化公式，像所有的公式一样，只有相对于一个世界才能是真或假。因此，例如∃xA，在世界 w 上是真的，当且仅当 Dw 中的某个对象满足 A。除了直觉逻辑，它有一个专门的解释外，普遍量词的解释类似：∀xA 在 w 上是真的，当且仅当 Dw 中的所有对象都满足 A。Kripke 语义经常规定对于每个 w，Dw 都是非空的，这样得到的自由逻辑是非包容性的，但我们不这样做。

任何各种自由的模态或时态逻辑都可以通过在第 2 节中定义的语言 L 中添加命题运算符“□”来形式化。如果 A 是一个公式，那么□A 也是一个公式。在真理模态逻辑中，这个运算符被解读为“必然是这样的情况”。更一般地，它意味着“在所有可访问的世界中都是真的”，其中从给定世界的可访问性对于不同的模态是一个不同的关系：对于真理逻辑来说是可能性，对于道义逻辑来说是允许性，对于时态逻辑来说是各种时间关系，等等。这样的语言的一个典型的二值 Kripke 模型 M 由一组世界、在该集合上定义的二元可达关系 R、对每个世界 w 的域 Dw 的赋值、对象的“外部”域 Do（通常是 U 或其超集）以及一个二元解释函数 I 组成，该函数将世界上的指称分配给个体常量，并将谓词在世界上的扩展分配给谓词。对于每个个体常量 t 和世界 w，I(t,w)∈Do。在这样的模型中，如果对于所有的世界 w1 和 w2，I(t,w1)=I(t,w2)，那么一个特定的术语是一个刚性指示符。对于模型 M 的世界上的每个 n 元谓词 P，如果语义是否定的或中性的，那么 I(P,w)⊆Dnw；如果是肯定的，那么 I(P,w)⊆Dno。模型 M 的世界上的真值由一个二元估值函数 V（其中 V(A,w)被解读为“真值 V 在世界 w 上分配给公式 A”）分配如下：

V(Pt1…tn,w)={T⇔⟨I(t1,w),…,I(tn,w)⟩∈I(P,w);F otherwise.V(s=t,w)={T⇔I(s,w)=I(t,w);F otherwise.V(E!t,w)={T⇔I(t,w)∈Dw;F otherwise.V(∼A,w)={T⇔V(A,w)=FF otherwise.V(A→B,w)={T⇔V(A,w)=F or V(B,w)=T;F otherwise.V(□A,w)={T⇔ for all u such that wRu,V(A,u)=TF otherwise.V(∀xA,w)=⎧⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪⎨⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪ ⎪⎩T⇔ for all d∈Dw,V(t,d)(A(t/x),w)=T(where t is not in A and V(t,d) is thevaluation function on the model just like Mexcept that its interpretation function I∗ issuch that for each world w,I∗(t,w)=d);F otherwise.

在允许世界具有不同领域的情况下，符合条件的模型使所有个体常量成为刚性指示符，并且 I(P,w)⊆Dno，标准的自由逻辑 PFL，以及与我们分配给 R 的结构相适应的模态公理和规则，在这种语义上是完备和正确的。

因此，当允许世界具有不同领域时，模态语义要求使用自由逻辑，即当世界 u 和 w 可能具有不同的领域时。在这种情况下，必须存在一个对象 d，它存在于其中一个领域（假设为 Dw），但不存在于另一个领域，因此任何刚性指示符 d 的特指项 t 在世界 u 上必须为空。因此，在世界 u 上，∼∃x(x=t)（在经典逻辑中是自相矛盾的）必须为真。当 Do 包含不在 U 中的对象时，这样的语义还要求使用自由逻辑，因为在这种情况下，这些对象的刚性指示符在所有世界中都为空。最后，如果任何世界具有空领域，这种语义要求使用包容逻辑。因此，根据这种语义，使得所得到的逻辑不自由的唯一方法是要求固定领域，即所有世界具有相同的领域 D，D 为非空，并且 Do=D。

所以，这三个要求正是索尔·克里普克在他关于模态逻辑的开创性论文（1963 年）中提出的，作为保留经典量化的两种策略之一。（另一种更严厉的策略是允许不同的域，但禁止个体常量，并将开放公式视为普遍量化。）但是这种固定域语义验证了不可信的公式：

∀x□∃y(y=x),

它断言一切都是必然存在的，同样不可信的巴尔坎公式：

∀x□A→□∀xA

（以 Ruth Barcan 之名命名，后来 Ruth Barcan Marcus 在 20 世纪 40 年代末讨论过它）。为了看出它的不合理性，考虑这个例子：“如果一切都必然是大爆炸的产物，那么一切都必然是大爆炸的产物”。很可能真实世界中的一切都必然是大爆炸的产物，即没有它，这个世界上的任何事物都不会存在。但似乎并不必然一切都是大爆炸的产物，因为其他宇宙中可能存在着在真实世界中不存在的事物，它们有其他的根源。由于固定域语义的限制性和不合理性，许多模态逻辑学家放松了 Kripke 的限制并采用了自由逻辑学。

我们还可以放弃特指项是刚性指示符的假设，从而允许非刚性指示符的存在。在这里考虑的语义上，这些是某些世界 w1 和 w2，使得 I(t,w1)≠I(t,w2)的特指项 t。被归属性地理解的确定描述是最好的例子。因此，“最年长的人”这个描述在不同的时间（世界）指代不同的人，并且在人类存在之前的时间（“世界”w，其中 I(t,w)未定义）不指代任何人。

非刚性指示符，如果在某些世界上为空，则即使在固定的域中也需要自由逻辑。（因此，只有当我们要求每个特指项 t 在每个世界 w 上指代 Dw 中的某个对象时，才可能存在具有非刚性指示符的经典逻辑。）对于非刚性指示符的某些语义，量词规则必须与上述规则不同，并且必须进行其他调整。有关详细信息，请参见 Garson 1991，Cocchiarella 1991，Schweitzer 2001 和 Simons 2001。

直觉主义逻辑也具有 Kripke 语义，尽管需要特殊的估值子句来适应直觉主义者对‘∼’，‘→’和‘∀’的特殊含义，并且通常不使用‘□’。通常的一阶直觉主义逻辑，Heyting 谓词演算（HPC）-也称为直觉主义谓词演算-具有定理∃x（x=t），因此不是自由的。但是直觉主义者只承认在某种意义上可以构造的对象的存在，而经典数学家则假设了更广泛的对象范围。因此，HPC 的用户不能合法地命名所有经典数学家可以命名的对象。更糟糕的是，他们不能合法地命名其可构造性尚未确定的对象。然而，一些 HPC 的基于 Kripke 风格的语义确实允许使用这些对象的名称（从实际世界可访问但不在实际世界本身存在的对象的语义上的名称）。尽管这些语义意图用于 HPC，但事实证明，它们对于 HPC 来说并不足够。一个明显的修复方法，由 Posy（1982）提倡，是采用自由直觉主义逻辑。有关此问题的更多信息，请参见 Nolt 2007。

### 5.4 虚构逻辑

因为虚构作品使用的名称并不指涉实际存在的事物，所以自由逻辑有时被用于对其进行分析。然而，只要我们参与故事的假装，就没有特别需要它。例如，在托尔金的《指环王》中，戈鲁姆讨厌太阳是真实的，我们可以合理地推断在故事中存在着某种讨厌太阳的东西。因此，只要我们只考虑发生在故事中和存在于故事中的事物，“量词”可以经典地行为。（然而，虚构作品的一般逻辑通常被认为是非经典的，有两个原因：（1）故事可能是不一致的，因此需要一个既不排除矛盾的逻辑，（2）故事所描述的对象通常（也许总是）是不完整的；也就是说，故事不能确定每个对象 o 和每个属性 P 是否 o 具有 P。）

然而，当我们区分故事中的真实与字面上的真实时，情况就会改变。为此，虚构作品的逻辑学常常使用一个可以读作“在故事中”的句子运算符。在这里，我们将使用“Sx”来表示“在故事 x 中”，其中“x”将被具体故事的名称替换。该运算符范围内的任何内容都被断言为在所命名的故事中是真实的；而其范围之外的内容则应被理解为字面上的。 （有关在故事中真实意味着什么的理论概述，请参见 Woods 2006 年的论文。）

使用这个运算符，陈述“在故事《指环王》中，戈鲁姆讨厌太阳”可以形式化如下：

(GHS)《指环王》（咕噜恨太阳）。

在《指环王》中，有某物恨太阳的陈述是：

《指环王》∃x(x 恨太阳)。

这个第二个陈述是从第一个陈述中得出的，尽管咕噜并不存在。但这并不意味着存在某种东西，它在《指环王》中憎恨太阳：

∃x《指环王》(x 憎恨太阳)。

实际上，这个陈述是不真实的，因为从字面上讲，咕噜并不存在。然而，太阳在现实中和故事中都存在，所以这个陈述是不真实的：

∃x《魔戒》之主（咕噜恨 x）

是真实的，并且根据（GHS）与真实前提“E！（太阳）”自由存在普遍化而得出。因此，自由逻辑可能在混合虚构和字面话语的推理中发挥作用。

虚构实体的术语也出现在完全字面的陈述中，不提及“故事中”什么是真实的。例如，考虑以下陈述：

(G)戈鲁姆比哥德尔更有名。

马克·桑斯伯里（2005 年，第 6 章）认为，引用失败总是使这些陈述为假，因此最好用否定的自由逻辑来表示它们。然而，其他人，包括奥兰多 2008 年和杜米特鲁和克伦 2008 年，对桑斯伯里的处理提出了质疑，认为像(G)这样的陈述既是原子的又是真实的。如果是这样，它们就需要一种积极的自由逻辑。这种逻辑必须是自由的，因为它处理的是一个空的特指术语，而且它必须是积极的，因为只有在积极的语义上，空术语的原子陈述才能为真。然而，人们仍然必须决定‘戈鲁姆’这个名称是没有指称还是有一个不存在的指称。

如果‘戈鲁姆’没有指称，那么(G)可能会通过单域积极语义来处理。但是，这种语义必须非标准地处理原子公式；它不能像通常那样规定(G)为真，只要对‘比…更有名’的谓词的外延中有一对⟨戈鲁姆，哥德尔⟩的成员；因为如果没有戈鲁姆，就没有这样的一对。在这样的语义上，‘戈鲁姆比哥德尔更有名’并不意味着有东西比哥德尔更有名。

另一方面，如果诸如“Gollum”之类的术语指的是不存在的对象，那么这些对象可以居住在双域正自由逻辑的外部域中。例如，Dumitru（2015）使用自由描述提出了这样一个关于虚构话语的双域语义，并将其与使用自由描述的超值论方法进行了比较。在这样的双域语义中，原子公式具有其标准的真值条件：只有当⟨Gollum，Gödel⟩是“比...更有名”的扩展的成员时，（G）才为真。此外，如果我们允许量词覆盖该外部域，那么“某物比 Gödel 更有名”（其中量词范围在外部域上）确实可以从“Gollum 比 Gödel 更有名”推出，尽管“确实存在某物比 Gödel 更有名”（其中量词范围在内部域上）不成立。虚构逻辑学采用了这种策略。

### 5.5 虚构逻辑学

Alexius Meinong 以他的观点而闻名，即一些不存在的对象仍然具有存在。他的名字与逻辑的各种发展有关。一些自由逻辑学家使用它来描述任何双域语义。对于其他人来说，虚构逻辑学是一种更为复杂的东西：一种关于我们可以思考的各种对象的丰富理论-可能的或不可能的，抽象的或具体的，字面的或虚构的，完整的或不完整的。在本节中，该术语用于描述比第一类型更强但可能比第二类型更弱的逻辑：具有额外一组量词，其范围涵盖双域语义的外部域的正自由逻辑。

这样的逻辑是否可以合理地被认为是自由的存在争议。在旧的概念中，自由逻辑禁止对不存在的事物进行量化（参见 Paśniczek 2001 和 Morscher 和 Hieke 2001 中 Lambert 的回应，第 246-8 页）。但根据任何人的定义，至少当内部领域被解释为现有事物的集合时，这里所指的 Meinongian 逻辑至少包含自由逻辑。此外，在本文中严格使用的语义定义（第 1.1 节），也是 Lehman 2002 的定义，D 的成员是否存在与逻辑是否自由无关。有关这一定义的辩护，请参见 Nolt 2006，第 1054-1057 页。

从历史上看，对包含不存在对象的域进行量化被广泛认为是本体论上的不负责任。Quine（1948）著名地认为存在只是存在量词所表达的内容。然而，没有什么强制我们将对每个域的“存在性”量化解释为表达存在或任何形式的存在。从语义上讲，变量 x 上的存在量词只是一个逻辑运算符，它将 x 上的开放公式映射为真值；当且仅当开放公式由量词的域中的至少一个对象满足时，其值为 T。域中的对象是否具有或缺乏任何特定的本体论地位是对形式语义学的哲学解释。Alex Orenstein（1990）认为“存在性”是一个误称，我们通常应该将这样的量词称为“特定的”。本节的其余部分将遵循这个建议。

对于双域语义的外部域范围的量词被称为外部量词，而对于内部域范围的量词被称为内部量词。如果将内部特定量词解释为“存在”，并且外部域的成员是可能性，则外部特定量词可以表示“存在这样的事物”或“至少存在一个可能的事物”。我们将使用广义乘积符号“Π”表示外部全称量词，使用广义求和符号“Σ”表示其特定对偶。这种符号使我们能够形式化，例如，那些令人困惑但显然是真实的陈述“有些事物不存在”（Routley 1966）如下：

Σx∼E!x.

由于在双域语义中，所有的特指术语都表示外部域的成员，外部量词的逻辑不是自由的，而是经典的。通过将“E!”作为原始概念，可以将自由的内部量词定义为以下经典的外部量词：

∀xA=dfΠx(E!x→A)∃xA=dfΣx(E!x&A).

然而，外部量词不能用内部量词来定义。

具有内部和外部量词的逻辑学具有各种应用。例如，它们使我们能够形式化存在的实质充分条件，并因此充分表达第 4.3 节的论证，如下所示：

 自由,Πx(Tx→E!x)⊢E!i.

这种形式是有效的。在 n 个自由变量 x1,...,xn 中，开放公式 A 和 B 的共包含性（见第 4.2 节）也可以形式化为：

 Πx1...Πxn(A↔B).

理查德·格兰迪（1972 年）关于确定描述的理论认为，当且仅当 A 和 B 是共同全面的时，ιxA=ιxB 为真，并且可以很容易地用迈农逻辑来表达。具有外部量词的自由逻辑也被用于提供关于对象的理论（包括某些情况下的虚构对象），这种理论在丰富的意义上受到迈农的工作的启发（Routley 1966 和 1980，Parsons 1980，Jacquette 1996，Paśniczek 2001，Priest 2005 和 2008，第 295-7 页）。

## 6. 历史

包容逻辑在自由逻辑之前就已经被构思和形式化了。因此，由于带有特指项的包容逻辑实际上是自由逻辑，包容逻辑的发明者可能是无意中发明了自由逻辑。伯特兰·罗素在 1919 年（第 201 页，注）提出了包容逻辑的想法。安德烈·莫斯托夫斯基（1951 年）似乎是最早将这样的逻辑形式化的人之一。但莫尔舍尔和西蒙斯（2001 年，第 27 页，注 3）记录了更早的关于这个想法的讨论，而本西文加（2014 年）认为雅斯科夫斯基（1934 年）至少含有第一个包容逻辑的隐含内容。西奥多·海尔佩林（1953 年），切斯瓦夫·莱耶夫斯基（1954 年）和 W·V·O·奎因（1954 年）做出了重要的早期贡献。奎因将这样的逻辑称为“包容逻辑”。

Henry S. Leonard（1956）是第一个开发自由逻辑的人，尽管他使用了一个有缺陷的“E！”的定义。Karel Lambert在1958年开始了他对该领域的大量贡献，批评了Leonard的定义，然后在1960年创造了“自由逻辑”这个术语。早期的自由逻辑系统是积极的。Rolf Schock在1960年代的一系列论文中发展了负自由逻辑，最终在1968年达到顶峰。Timothy Smiley在1960年提出了中立自由逻辑的概念，但第一部全面论述该概念的著作出现在1994年的Lehman中。Mehlberg在1958年的256-260页中描述了超值论，作为处理模糊性而不是中立自由逻辑的一种工具。但是，他们在自由逻辑中的形式化和应用始于1966年的van Fraassen，其中引入了“超值论”这个术语。双域语义在Lambert、Nuel Belnap等人的讲座中早在1950年代末就被讨论过，但似乎Church 1965和Cocchiarella 1966是第一篇发表的解释。

## Bibliography

* Antonelli, Gian Aldo, 2000, “Proto-Semantics for Positive Free Logic,” *Journal of Philosophical Logic*, 29 (3): 277–294.
* –––, 2007, “Free Quantification and Logical Invariance,” *Rivista de Estetica* (New Series), 33 (1): 61–73.
* Bacon, Andrew, Hawthorne, John, and Uzquiano, Gabriel, 2016, ”Higher-order free logic and the Prior-Kaplan paradox,“ *Canadian Journal of Philosophy* 46(4–5): 493–541.
* Bencivenga, Ermanno, 1981, “Free Semantics” in *Boston Studies in the Philosophy of Science*, 47: 38–41; revised version reprinted in Lambert 1991, pp. 98–110.
* –––, 1986, “Free Logics,” in D. Gabbay and F. Guenthner (eds.), *Handbook of Philosophical Logic*, vol. III: *Alternatives to Classical Logic*, Dordrecht: D. Reidel, pp. 373–426
* –––, 2002, “Free Logics,” in D. Gabbay and F. Guenthner (eds.), *Handbook of Philosophical Logic*, 2nd edition, vol. 5, Dordrecht: Kluwer, pp. 147–196. (This is a republication of Bencivenga 1986.)
* –––, 2014, “Jaśkowski’s Universally Free Logic,” *Studia Logica* 102: 1095–1102.
* Besson, Corine, 2009, “Externalism, Internalism, and Logical Truth,” *Review of Symbolic Logic*, 2 (1): 1–29.
* Burge, Tyler, 1974, “Truth and Singular Terms,” *Noûs*, 8: 309–25; reprinted in Lambert 1991, pp. 189–204.
* Church, Alonzo, 1965, review of Lambert 1963 in *Journal of Symbolic Logic*, 30: 103–104.
* Cocchiarella, Nino B., 1966, “A Logic of Actual and Possible Objects” (abstract), *Journal of Symbolic Logic*, 31: 688–689.
* –––, 1986, *Logical Investigations of Predication Theory and the Problem of Universals*, Napoli, Italy: Bibliopolis.
* –––, 1991, “Quantification, Time and Necessity,” in Lambert 1991, pp. 242–256.
* Dumitru, Mircea, 2015, “A Free Logic for Fictionalism“ in Iulian D. Toader, Gabriel Sandu & Ilie Pȃrvu, eds., *Romanian Studies in Philosophy of Science*, Springer Verlag, pp. 149–163.
* Dumitru, Mircea and Frederick Kroon, 2008, “What to Say When There Is Nothing to Talk about (Qué decir cuando no hay nada de quehablar),” *Crítica: Revista Hispanoamericana de Filosofía*, 40 (120): 97–109.
* Feferman, Solomon, 1995, “Definedness,” *Erkenntnis*, 43 (3): 295–320.
* Fine, Kit, 1983, “The Permutation Principle in Quantificational Logic,” *Journal of Philosophical Logic*, 12: 33–7.
* Fodor, Jerry A., and Ernest Lepore, 1996, “What Cannot be Evaluated Cannot be Evaluated and it Cannot be Supervalued Either,” *Journal of Philosophy*, 93 (10): 516–535.
* Garson, James W., 1991, “Applications of Free Logic to Quantified Intensional Logic,” in Lambert 1991, pp. 111–142.
* Grandy, Richard E., 1972, “A Definition of Truth for Theories with Intensional Definite Description Operators,” *Journal of Philosophical Logic*, 1: 137–55; reprinted in Lambert 1991, pp. 171–188.
* Gumb, Raymond D., 2001, “Free Logic in Program Specification and Verification,” in Morscher and Hieke 2001, pp. 157–93.
* Gumb, Raymond D., and Karel Lambert, 1991, “Definitions in Nonstrict Positive Free Logic,” *Modern Logic*, 7: 25–55 and 435–440 (errata).
* Hailperin, Theodore, 1953, “Quantification Theory and Empty Individual Domains,” *Journal of Symbolic Logic*, 18: 197–200.
* Hintikka, Jaakko, 1959, “Towards a Theory of Definite Descriptions,” *Analysis*, 19: 79–85.
* Jacquette, Dale, 1996, *Meinongian Logic: The Semantics of Existence and Nonexistence*, Berlin: Walter de Gruyter.
* –––, (ed.), 2006, *Philosophy of Logic* (Series: Volume 5 of the *Handbook of the Philosophy of Science*), Amsterdam: Elsevier.
* Jaśkowski, Stanisław, 1934, “On the Rules of Supposition in Formal Logic,” *Studia Logica* 1: 5–32. Reprinted in *Polish Logic 1920–1939*, Storrs McCall (ed.), Oxford, Clarendon Press, 1967, pp. 232–258.
* Jeffrey, Richard, 1991, *Formal Logic: Its Scope and Limits*, 3rd edition, New York: McGraw-Hill.
* Kripke, Saul 1963, “Semantical Considerations on Modal Logic,” *Acta Philosophical Fennica*, 16: 83–94.
* Lambert, Karel, 1958, “Notes on E!,” *Philosophical Studies*, 9: 60–63.
* –––, 1960, “The Definition of E! in Free Logic,” in *Abstracts: The International Congress for Logic, Methodology and Philosophy of Science*, Stanford: Stanford University Press.
* –––, 1962, “Notes on E! III: A Theory of Descriptions,” *Philosophical Studies*, 13(4): 51–59.
* –––, 1963, “Existential Import Revisited,” *Notre Dame Journal of Formal Logic*, 4: 288–292.
* –––, 1974, “Predication and Extensionality,” *Journal of Philosophical Logic*, 3: 255–264.
* –––, (ed.), 1991, *Philosophical Applications of Free Logic*, New York: Oxford University Press.
* –––, 2001a, “Free Logic and Definite Descriptions,” in Morscher and Hieke 2001, pp. 37–47.
* –––, 2001b, “Free Logics,” in Lou Goble (ed.), *The Blackwell Guide to Philosophical Logic*, Oxford: Blackwell Publishing, pp. 258–279.
* –––, 2003a, *Free Logic: Selected Essays*, Cambridge: Cambridge University Press.
* –––, 2003b, “Existential Import, E! and ‘The’” in Lambert 2003a, pp. 16–32.
* –––, 2003c, “Foundations of the Hierarchy of Positive Free Definite Description Theories” in Lambert 2003a, pp. 69–91.
* –––, 2003d, “The Hilbert-Bernays Theory of Definite Descriptions” in Lambert 2003a, pp. 44–68.
* –––, 2003e, “Nonextensionality” in Lambert 2003a, pp. 107–121.
* –––, 2003f, “The Philosophical Foundations of Free Logic” in Lambert 2003a, pp. 122–175.
* –––, 2003g, “Predication and Extensionality” in Lambert 2003a, pp. 92–106.
* –––, 2003h, “Russell’s Version of the Theory of Definite Descriptions” in Lambert 2003a, pp. 1–15.
* Leblanc, Hughes, 1971, “Truth Value Semantics for a Logic of Existence,” *Notre Dame Journal of Formal Logic*, 12: 153–68.
* Leblanc, Hughes and Richmond H. Thomason, 1968, “Completeness Theorems for Some Presupposition-Free Logics,” *Fundamenta Mathematicae*, 62: 125–64; reprinted in Leblanc’s *Existence, Truth and Provability*, Albany: State University of New York Press, 1982, pp. 22–57.
* Leeb, Hans-Peter, 2006, “State-of-Affairs Semantics for Positive Free Logic,” *Journal of Philosophical Logic*, 35 (2): 183–208.
* Lehman, Scott, 1994, “Strict Fregean Free Logic,” *Journal of Philosophical Logic*, 23 (3): 307–336.
* –––, 2001, “No Input, No Output Logic,” in Morscher and Hieke 2001, pp. 147–54.
* –––, 2002, “More Free Logic,” in D. Gabbay and F. Guenthner (eds.), *Handbook of Philosophical Logic*, 2nd edition, vol. 5, Dordrecht: Kluwer, pp. 197–259.
* Lejewski, Czeslaw, 1954, “Logic and Existence,” *British Journal for the Philosophy of Science*, 5 (18): 104–19; reprinted in Dale Jacquette (ed.), *Philosophy of Logic: An Anthology*, Oxford: Blackwell, 2002, pp. 147–55.
* Leonard, H. S., 1956, “The Logic of Existence,” *Philosophical Studies*, 7: 49–64.
* Mehlberg, Henryk, 1958, *The Reach of Science*, Toronto: University of Toronto Press.
* Meyer, Robert K., Ermanno Bencivenga and Karel Lambert, 1982, “The Ineliminability of E! in Free Quantification Theory without Identity,” *Journal of Philosophical Logic*, 11: 229–231.
* Meyer, Robert K. and Karel Lambert, 1968, “Universally Free Logic and Standard Quantification Theory,” *Journal of Symbolic Logic*, 33: 8–26.
* Morscher, Edgar and Alexander Hieke (eds.), 2001, *New Essays in Free Logic: In Honour of Karel Lambert* (Applied Logic Series, vol., 23), Dordrecht: Kluwer.
* Morscher, Edgar and Peter Simons, 2001, “Free Logic: A Fifty-Year Past and an Open Future,” in Morscher and Hieke 2001, pp. 1–34.
* Mostowski, Andrezej, 1951, “On the Rules of Proof in the Pure Functional Calculus of the First Order,” *Journal of Symbolic Logic*, 16: 107–111.
* Nolt, John, 2006, “Free Logics,” in Jacquette 2006, pp. 1023–1060.
* –––, 2007, “Reference and Perspective in Intuitionistic Logic,” *Journal of Logic, Language and Information*, 16 (1): 91–115.
* Orenstein, Alex, 1990, “Is Existence What Existential Quantification Expresses?” in Robert B. Barrett and Roger F. Gibson (eds.), *Perspectives on Quine*, Cambridge: Blackwell, 1990, pp. 245–270.
* Orlando, Eleonora, 2008, “Names without Fictional Objects (Ficción sin metafísica),” *Crítica: Revista Hispanoamericana de Filosofía*, 40 (120): 111–127.
* Parsons, Terence, 1980, *Nonexistent Objects*, New Haven: Yale University Press.
* Paśniczek, Jacek, 1998, *The Logic of Intentional Objects*: *A Meinongian Version of Classical Logic*, Dordrecht: Kluwer.
* –––, 2001, “Can Meinongian Logic Be Free?” in Morscher and Hieke 2001, pp. 227–36.
* Posy, Carl J., 1982, “A Free IPC is a Natural Logic: Strong Completeness for Some Intuitionistic Free Logics,” *Topoi*, 1: 30–43; reprinted in Lambert 1991, pp. 49–81.
* Priest, Graham, 2005, *Towards Non-Being*, Oxford: Oxford University Press.
* –––, 2008, *An Introduction to Non-Classical Logic: From If to Is*, 2nd edition, Cambridge: Cambridge University Press.
* Quine, W. V. O., 1948, “On What There Is,” *Review of Metaphysics*, 48: 21–38; reprinted as Chapter 1 of Quine 1963).
* –––, 1954, “Quantification and the Empty Domain,” *Journal of Symbolic Logic*, 19: 177–179.
* –––, 1963, *From a Logical Point of View*, 2nd edition, New York: Harper & Row.
* Routley, Richard, 1966, “Some Things Do Not Exist,” *Notre Dame Journal of Formal Logic*, 7: 251–276.
* –––, 1980, *Exploring Meinong’s Jungle and Beyond*, Canberra: Australian National Unversity.
* Russell, Bertrand, 1919, *Introduction to Mathematical Philosophy*, New York: Simon & Schuster.
* Sainsbury, R. M., 2005, *Reference without Referents*, Oxford: Clarendon Press.
* Schock, Rolf, 1968, *Logics without Existence Assumptions*, Stockholm: Almqvist & Wiskell.
* Schweitzer, Paul, 2001, “Free Logic and Quantification in Syntactic Modal Contexts,” in Morscher and Hieke 2001, pp. 69–85.
* Shapiro, Stewart, and Alan Weir, 2000, “‘Neo-Logicist’ Logic is Not Epistemically Innocent,” *Philosophia Mathematica*, 3 (8): 160–189.
* Simons, Peter, 2001, “Calculi of Names: Free and Modal,” in Morscher, Edgar and Alexander Hieke 2001, pp. 49–65.
* Smiley, Timothy, 1960, “Sense without Denotation,” *Analysis*, 20: 125–135.
* van Fraassen, Bas C., 1966, “Singular Terms, Truth Value Gaps and Free Logic,” *Journal of Philosophy*, 63: 481–95; reprinted in Lambert 1991, pp. 82–97.
* –––, 1991, “On (the *X*)(*X* = Lambert),”, in W. Spohn, et al. (eds.), *Existence and Explanation*: *Essays Presented in Honor of Karel Lambert*, Dordrecht: Kluwer, pp. 1–18.
* Williamson, Timothy, 1999, “A Note on Truth, Satisfaction and the Empty Domain,” *Analysis*, 59(1): 3–8.
* –––, 2016, “Reply to Bacon, Hawthorne, and Uzquiano,” *Canadian Journal of Philosophy* 46(4–5): 542–547.
* Woods, John, 2006, “Fictions and their Logic,” in Jacquette 2006, pp. 1061–1126.
* Woodruff, Peter W., 1984, “On Supervaluations in Free Logic,” *Journal of Symbolic Logic*, 49: 943–950.
* Yeakel, Daniel, 2016, “Existence Hedges and Neutral Free Logic,” *Proceedings of the Aristotelian Society*, cxvi (3): 379–386.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-free). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-free/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-free&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/logic-free/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[descriptions](https://plato.stanford.edu/entries/descriptions/) | [fiction: fictional entities](https://plato.stanford.edu/entries/fictional-entities/) | [logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [logic: intuitionistic](https://plato.stanford.edu/entries/logic-intuitionistic/) | [logic: modal](https://plato.stanford.edu/entries/logic-modal/) | [logic: temporal](https://plato.stanford.edu/entries/logic-temporal/) | [nonexistent objects](https://plato.stanford.edu/entries/nonexistent-objects/) | [possible objects](https://plato.stanford.edu/entries/possible-objects/)

### Acknowledgments

The author thanks Ian Orr and Eddy Falls for help in researching this article, and Karel Lambert and İskender Taşdelen for useful comments on, or corrections to, earlier versions.

[Copyright © 2020](https://plato.stanford.edu/info.html#c) by  
John Nolt
