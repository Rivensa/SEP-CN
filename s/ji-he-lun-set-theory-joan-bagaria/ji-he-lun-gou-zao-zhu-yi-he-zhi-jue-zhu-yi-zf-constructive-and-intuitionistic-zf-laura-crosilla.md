# 集合论：构造主义和直觉主义 ZF constructive and intuitionistic ZF (Laura Crosilla)

*首次发表于 2009 年 2 月 20 日星期五；实质性修订于 2024 年 2 月 22 日星期四*

构造主义和直觉主义策梅洛-弗兰克尔集合论是基于直觉主义逻辑的策梅洛-弗兰克尔集合论（ZF）风格的公理化集合论。它们在 20 世纪 70 年代引入，并代表了一个形式上的背景，用于基于直觉主义逻辑编码数学（参见构造主义数学条目）。它们以策梅洛-弗兰克尔集合论的标准一阶语言进行表述，并不直接使用固有的构造性思想。在构造主义和直觉主义 ZF 中工作，我们在某种程度上可以依赖于我们对 ZF 及其启发式方法的熟悉程度。

尽管与经典集合论相似，构造主义和直觉主义集合论所定义的集合概念与经典传统有很大不同；它们之间也存在差异。为了在其中工作以及获得关于它们的元数学结果，所采用的技术在某些方面也与经典传统有所不同，因为它们承认直觉主义逻辑。事实上，正如在直觉主义环境中常见的那样，有大量的语义和证明论方法可用于研究构造主义和直觉主义集合论。

这篇文章介绍了构造主义和直觉主义集合论的主要特点。由于该领域正在快速发展，我们只能简要回顾一些结果和可用技术的关键方面。我们更加关注构造主义集合论，以突出其中涉及的重要基础问题。请注意，我们省略了与构造主义和直觉主义 ZF 的范畴论解释相关的文献的显著部分。这个领域在多年来取得了重大进展，以至于对这一进展的充分处理需要对这篇文章进行大幅扩展。感兴趣的读者可能希望参考范畴论的文章及其参考文献（还可以参考其补充的编程阅读指南）。

---

## 1. 构造主义和直觉主义集合论的本质

构造主义和直觉主义策梅洛-弗兰克尔集合论基于直觉主义逻辑而非经典逻辑，并代表了一个自然的环境，用于编码和研究基于直觉主义逻辑的数学。对于构造主义 ZF，主要关注的是代表 Bishop 的数学实践（Bishop 1967，Bishop and Bridges 1985）。

对于直觉逻辑、构造数学和直觉主义的基本概念和主要思想，读者可以参考以下条目：

* 直觉逻辑，
* 直觉逻辑的发展，
* 构造主义数学，
* 数学哲学中的直觉主义，
* [Luitzen Egbertus Jan Brouwer](https://plato.stanford.edu/entries/brouwer/).

对于经典集合论，请参阅有关集合论的条目。

构造主义和直觉主义 ZF 基于与经典 ZF 集合论相同的一阶语言，该语言只有二元谓词符号∈（属于）作为非逻辑符号。也就是说，它们是基于直觉主义一阶逻辑与相等性以及二元谓词符号∈的基础上构建的。因此，我们可以利用集合论语言的简单性和我们对其的熟悉程度（Myhill 1975）。与 Bishop 风格的构造性数学一样，构造主义和直觉主义 ZF 与经典传统是兼容的，因为它们的所有定理在经典意义上都是真实的。实际上，我们将考虑的两个形式系统，构造性策梅洛-弗兰克尔（CZF）和直觉主义策梅洛-弗兰克尔（IZF），通过简单添加排中律原理即可得到完整的经典 ZF。

### 1.1 公理自由

古典策梅洛-弗兰克尔集合论基于带有相等性的古典一阶谓词逻辑。在逻辑原理之上，有描述集合论规范的公理和模式。这些原理可以分为三种。首先，有使我们能够从给定集合中形成新集合的原理。例如，对偶公理使我们能够形成一个由两个给定集合构成的集合。其次，有建立集合论结构属性的原理。例如，外延公理确定了具有相同元素的所有集合。第三，也是最后，有断言特定集合存在的公理。因此，无穷公理表明存在一个无限集合。这些原理通常统称为集合论原理。

在引入基于直觉逻辑的 ZF 版本时，第一步是从逻辑中排除排中律原理（EM）。下一步是选择一套良好的集合论原理，以忠实地表示所需的构造性集合概念。这些任务事实证明比最初预期的更具挑战性。事实上，众所周知，基于“较弱”逻辑的系统能够区分从“较强”逻辑的角度来看等价的陈述。在集合论的情况下，ZF 公理或模式经常以许多经典等价的形式之一呈现。在经典情况下，只是在特定时间使用哪个形式是方便的问题。然而，在基于直觉逻辑的基础上工作时，一个经典公理的各种表述可能是不同的（非等价的）。事实上，可以设想出一些经典等价于 ZF 公理但直觉上与之不同的新陈述（例如 CZF 的子集收集公理（Aczel 1978））。

关于第一步，即从逻辑中排除排中律的步骤，事实证明仅仅从基础逻辑中排除这一原理是不够的；也就是说，仅仅采用直觉主义谓词演算而不是经典谓词演算作为我们的基础是不够的。我们还需要确保集合论公理不会在我们的理论中引入不可取的排中律形式。例如，正如 Myhill（1973）所指出的，我们需要在选择适当的公理陈述时格外小心，以满足基础公理的要求。基础公理在集合论中被引入，以排除那些是自身成员的集合，从而排除了集合的∈-链。通常的基础公理陈述断言，每个非空集合（至少有一个元素的集合）在成员关系下都有一个最小元素。然而，可以证明，这个陈述在基于适度集合论假设的情况下会产生构造上不可接受的排中律实例。因此，基于直觉主义逻辑的集合论中必须省略通常的基础公理陈述。有关证明，请参见附加文档：

> 与直觉主义逻辑不兼容的集合论原理。

基于直觉主义逻辑的集合论的典型方法是用集合归纳的经典等价模式替换基础公理，这样做不会产生相同的“副作用”，但会产生类似的结果。[1]

至于第二步，与选择一套良好的集合论原则有关，替代和分离的模式以及幂集公理引起了最多的关注。有关这些原则的确切表述，请参阅附加文件：

> CZF 和 IZF 的公理。

这里是一个典型的情景。在经典情况下，给定一个集合论原则的两个经典变体，它们的经典等价证明在某一点上需要排中律的实例。然而，一般情况下，这种等价证明在直觉主义背景下无法成立，因此在直觉主义工作中，这两个原则的经典等价证明可能会导致两个不同的原则。选择其中一个而不是另一个可能会影响我们所定义的集合的概念。在 CZF 等构造性集合论的背景下，幂集和分离被直觉主义上较弱的原则所取代。这样做的一个原因是认为幂集和完全分离的强度是不必要的，因为它们的较弱替代似乎足以进行构造性数学。另一个原因是认为它们在哲学上存在问题，因为它们可能在集合论中引入形式上的不可预测性（请参阅构造性集合论中的预测性部分）。替代与集合的收集之间的情况有些复杂（例如，参见文章（Friedman 和 Scedrov 1985），（Rathjen 2005）和（Rathjen 2012））。值得强调的是，尽管采用通常的基础公理表述违背了直觉主义逻辑作为背景逻辑的假设，但分离和幂集原则与直觉主义逻辑完全不矛盾，以至于它们是直觉主义集合论 IZF 的组成部分（Friedman 1973a）。

总结一下，在基于直觉逻辑的集合论制定中，第一个任务是排除排中律原则，包括那些可能隐藏在熟悉的集合论公理中的实例。下一个任务是选择每个经典原则的一个版本，以最好地描述所需的集合概念。这打开了一系列可以选择的选择，因为多个直觉主义原则可能对应一个经典原则。值得强调的是，从构造主义的观点来看，这种选择的多样性（以及因此而产生的系统），而不是引起不安，实际上是一种非常可取的情况，因为它构成了一种“公理自由”的形式。例如，它使我们能够区分多个数学概念，从而更好地捕捉到它们作为不同概念的直觉。它还使我们有自由选择最适合特定背景的概念和理论。此外，通过采用直觉逻辑，我们可以在我们的理论中包含经典上非常强的原则，而无需承诺它们的经典强度。例如，可以将不可达集合的概念添加到一个弱的构造性集合论中，并获得一个预测性理论，而在经典背景中，相同的概念变得非常强大（请参见构造性集合论中的预测性部分以及构造性和直觉主义 ZF 中的大集合部分）。最后，这种不同集合论系统之间的关系的（元理论）研究领域自然而然地出现了。正如人们所预料的，这种自由也有代价，因为可能需要对公理理论进行高度技术性的研究，以区分它们的原则并揭示其中的一些微妙之处。这又可以看作是一个优势，因为它迫使我们对所涉及的数学概念进行更深入、更清晰的分析，并促使我们开发新的复杂工具。

### 1.2 构造主义与直觉主义集合论

尽管基于直觉逻辑的集合系统有很多，但我们可以在文献中区分出两个主要趋势。根据第一个趋势，我们保留了经典 ZF 集合论中的所有内容，只修改了那些与直觉逻辑明显不兼容的原则，比如基础性原则。这就产生了直觉主义策梅洛-弗兰克尔集合论（Intuitionistic Zermelo-Fraenkel，IZF），其中的一个变种早在 1973 年就被引入了（参见 Friedman 1973a）。（关于 IZF 的两个调查，请参见 Beeson 1985 的第 8 章和第 9 章以及 Scedrov 1985。）这些理论背后的理念似乎是给予数学家尽可能强大的工具，同时保持与直觉逻辑的兼容性。根据第二种方法，除了遵循直觉逻辑外，我们还对允许的集合论原则进行了限制，只要所得到的系统符合构造主义数学实践。这种第二类理论可以看作是对经典 ZF 的双重限制的结果。首先，对直觉逻辑进行限制，然后对允许的集合论构造进行限制。后者的动机是（1）观察到较弱的原则似乎足以满足构造主义数学实践的需要，以及（2）希望遵循一种可预测性形式（有关可预测性概念的澄清，请参见下一节）。这种第二种方法的典型例子包括 Myhill 的构造集合论（Myhill 1975）、Friedman 的 B 系统（Friedman 1977）和 Aczel 的构造策梅洛-弗兰克尔集合论 CZF（Aczel 1978；1982；1986，Aczel & Rathjen 2001；Aczel & Rathjen 2010，其他互联网资源）。我们还可以说，在这种第二种方法中，基础性的动机对实践产生了更大的影响。

在接下来的内容中，我们使用了一个常见的约定，即“直觉主义”这个形容词通常指的是那些非良基的集合论，比如 IZF，而“构造主义”则指的是那些符合某种预测性的集合论，比如 CZF。然而需要注意的是，这个约定在文献中并不总是遵循。事实上，“构造主义”这个形容词也被用来表示非良基的理论，“直觉主义”则用来指代预测性的基础理论，比如马丁-勒夫类型论（Martin-Löf 1975; 1984）。值得注意的是，目前关于“构造主义”和“直觉主义”这两个词的使用约定与构造性数学的上下文中的使用约定不同（例如，参见有关构造性数学的条目，以及 Bridges 和 Richman 1987）。

### 1.3 构造集合论中的预测性

预测性起源于庞加莱和罗素对康托尔和弗雷格的集合论在 20 世纪初发现的悖论的回应。随后，魏尔对预测性数学的研究做出了重要贡献（魏尔 1918，参见 Feferman 1988）。根据一种观点，如果一个定义通过引用包括待定义对象在内的一个整体来定义对象，则该定义是非良基的。罗素通过他的“恶性循环原则”（VCP）试图消除由此类非良基定义引起的数学中的循环性。罗素提出了 VCP 的各种表述之一，其中之一是：

> 无论包含明显变量的内容都不能是该变量的可能值（Russell 1908，引自 van Heijenoort 1967，163）。

庞加莱、罗素和韦尔的可预测性基础分析为各种逻辑分析奠定了基础。最常接受的分析是由费弗曼和舒特（独立地）根据克雷塞尔的线索进行的（Kreisel 1958，Feferman 1964 和 Schütte 1965；1965a）。在这里，证明论发挥了关键作用。非常粗略地说，这个想法是通过选出一系列理论（由序数索引的分层二阶算术的无穷进展）来表征某种可预测序数的概念。费弗曼和舒特对这些理论的证明论分析确定了一个序数，通常称为Γ0，它是根据这个概念的最小非预测性序数。如果一个形式系统在证明论上可归约为一个由小于Γ0 的序数索引的分层二阶算术系统，则被认为是可预测合理的。因此，在证明论中，Γ0 通常被认为代表可预测性的极限。（有关这种可预测性概念的更准确非正式描述和进一步参考，请参阅 Feferman 2005。另请参阅 Crosilla 2017。读者还可以查阅有关数学哲学和悖论与当代逻辑的可预测主义部分的条目。）

对于构造性基础理论，已经提出了一种更“自由”的谓词主义方法，从 1950 年代末的 Lorenzen、Myhill 和 Wang 的工作开始（参见 Lorenzen 和 Myhill 1959）。驱动思想是所谓的归纳定义应该被允许在构造性数学领域中使用。归纳定义的直观理由与它们可以通过有限规则以“自底向上”的方式来表达有关。归纳定义的证明论强度远远超出了 Feferman 和 Schütte 的界限（Buchholz、Feferman、Pohlers 和 Sieg 1981）。因此，相对强大的理论在当今构造性数学的基础中被认为是谓词的。这种更自由的谓词性概念通常被称为广义谓词性（见 Crosilla 2022 进行讨论）。在本条目中，我们简单地将谓词性写为广义谓词性，并将谓词性称为在古典背景下出现并由 Kreisel、Feferman 和 Schütte 分析的谓词性的更为熟知的形式。

在这个意义上，一个谓词性理论的例子是构造性集合论 CZF，因为它的证明论强度与一个被称为 ID1 的归纳定义理论的强度相同。相反，系统 IZF 是非谓词性的，因为它的证明论强度等同于整个古典 ZF 的强度（Friedman 1973a）。

在基于直觉逻辑的集合论中，谓词性通常通过限制分离原理和幂集原理来实现，因为它们似乎是非谓词性的主要来源（当假设无穷公理时）。

#### 1.3.1 分离的非预测性

分离模式允许我们形成给定集合的一个子集，其元素满足给定的属性（用集合论语言中的公式表示）。给定一个集合 B 和一个公式ϕ(X)，分离允许我们构造一个新集合，即那些元素 X 属于 B 且ϕ成立的集合。通常非正式地表示为：{X∈B:ϕ(X)}。如果公式ϕ包含在整个集合宇宙上范围的无界量词，分离可能导致非预测性；事实上，在通过分离定义新集合时，我们可能会引用这个集合本身，从而违反了罗素的 VCP。例如，如果我们通过分离定义一个集合 C 为{X∈B:∀Yψ(X,Y)}，那么 C 就是需要检查属性ψ的 Y 之一。构造性集合论通过限制分离模式来避免这种形式的非预测性：要求公式ϕ中出现的所有量词仅范围在“先前构造的”集合上。从句法上讲，这意味着给定一个集合 B，我们只能通过分离来形成一个新集合{X∈B:ϕ(X)}，当且仅当ϕ中的所有量词都是有界的；也就是说，当且仅当ϕ中的所有量词具有形式∀X(X∈Y→…)或∃X(X∈Y∧…)，其中 Y 是某个集合。

我们可以通过观察到以这种方式限制分离来避免非预测性，从而确认 CZF 的证明理论强度在预测性范围内。然而，通过将完全分离添加到 CZF 中，可以获得一个非预测性理论，事实上，其证明理论强度与完全二阶算术相同（Lubarsky 2006）。有关在分析构造性和直觉主义集合论中证明理论的作用的讨论，请参见第 5 节。

#### 1.3.2 幂集的非谓词性

幂集公理允许我们形成一个给定集合的所有子集的集合。幂集的非谓词使用的一个例子是对自然数 N 的子集的定义，如下所示：B:={n∈N:∀C⊆Nϕ(n,C)}，其中ϕ可以是一个有界公式。这里出现了一种循环性，因为 B 本身是需要检查ϕ的 N 的子集之一。正如 Myhill（1975 年，354 页）所强调的那样，从构造主义的角度来看，很难证明幂集的合理性：它将给定集合的所有子集聚集在一起，但并没有规定一个“构造”该集合的规则，这似乎是谓词性所要求的。

 Myhill 写道：

> 幂集与其他公理相比，似乎特别不具有构造性和内涵性：它不涉及像其他公理那样将已经构造好的集合组合或拆分，而是从所有集合的总体中选择与给定集合包含关系的集合。（Myhill 1975, 351）。

幂集在无限集合的情况下似乎特别有问题，因为“我们对无限集合的任意子集没有概念；没有办法生成它们，因此我们无法形成它们的全集”（Myhill 1975, 354）。因此，似乎没有办法对无限集合的所有子集给出构造性的意义。

Myhill 关键观察到，对于 Bishop 风格的构造性数学来说，幂集并不是必需的，因为它可以被其后果之一所取代。这通常被称为 Myhill 的指数公理，它声明我们可以形成一个从一个给定集合到另一个集合的所有函数的集合。在经典的背景下，这个公理显然等价于幂集，其中给定集合的子集可以由特征函数表示。然而，在排中律原则缺失的情况下，幂集和指数并不等价。Myhill 的基本观察是指数足以进行（Bishop 1967）的数学运算；例如，它允许在构造性集合论中构造（柯西）实数。Myhill 声称指数具有构造性的意义，因为函数是一条规则，是一个可以实际给出的有限对象。

他还写道，幂集的情况与指数运算的情况不同：

> 即使在无限集合 A 和 B 的情况下，我们也可以想象从 A 到 B 的任意映射。从 Z 到 Z 的任意映射是一个部分递归函数，同时还有一个计算总是终止的证明；类似的解释也可以给出任意实函数。对于“任意子集”没有相应的解释。（Myhill 1975，354）。

Myhill 的指数公理现在是所有主要的构造集合论系统的一部分。事实上，在 CZF 的情况下，指数运算有一个加强版本，称为子集收集，它也是幂集的一种弱化。构造类型理论中也可以找到指数运算的推广。

在 CZF 的情况下，添加幂集公理会导致非良基的主张可以通过技术结果得到证实。Rathjen（2012b）证明了 CZF 加上幂集公理超过了经典的策梅洛集合论的强度，因此将幂集公理添加到 CZF 中将使我们得到一个完全非良基的理论。这也表明了从幂集到子集收集的蕴涵不能被逆转，因为 CZF 的证明论强度远低于策梅洛集合论。换句话说，幂集公理比指数运算和子集收集都要强大得多。

#### 1.3.3 构造主义集合的宇宙

引入适当的约束到幂集和分离后，我们现在可能面临一个重要的反对意见。构造主义集合论和直觉主义集合论可以看作是对经典 ZF 集合论的修改，这是通过：（1）用直觉主义逻辑替换经典逻辑，以及（2）在各种经典等价原理中准确选择那些在特定目的下更合适的原理。例如，我们可以选择足以表示某种数学实践的原理，比如 Bishop 风格的数学。然而，由于这种选择，所得到的集合概念可能变得模糊，而且集合论原理的选择可能在一定程度上显得任意。在直觉主义 ZF 的情况下，可以通过考察其语义解释（如 Heyting 语义）或观察其范畴模型来证明选择集合论原理的合理性。在构造主义集合论的情况下，为了阻止这种反对意见，Aczel 在 Martin-Löf 类型论的一个版本中给出了 CZF 的解释（Aczel 1978）。该论断是，通过观察 Martin-Löf 类型论中 CZF 集合概念的意义，可以为 CZF 的集合概念赋予明确的构造主义含义，因为后者通常被认为是构造主义集合概念的准确和充分动机的表述。Aczel 在构造类型论中对 CZF 的解释是将集合解释为类型论中的树。也就是说，在构造类型论中，CZF 的集合宇宙由一个类型 V 表示，该类型是在小类型宇宙 U 上构建的迭代集合（Aczel 1978；Martin-Löf 1984）。这种解释清楚地突出了 CZF 的（广义）可预测性，其集合可以看作是归纳地构建的树，而且其集合论宇宙也具有明确的归纳结构。

CZF 和相关系统的可预测性与经常与直觉逻辑使用相关的哲学立场一致。例如，如果我们构建数学对象，采用非预测性定义将产生一种不可取的循环形式（参见，例如，（哥德尔 1944））。这显然与通常与经典集合论相关的观点形成鲜明对比，对于这种观点来说，我们的数学活动可以被看作是逐渐揭示出独立于我们的集合宇宙的属性。这种观点通常与使用经典逻辑和非预测性来研究集合论宇宙相结合。可预测性也经常被视为与实际和潜在无限之间的历史悠久的区别有关。可预测（因此，特别是构造性）理论经常被视为避免引用实际无限，并只承诺潜在无限（达梅特 2000 年，弗莱彻 2007 年，费弗曼 1964 年）。这似乎与那些强调我们数学活动的人类维度的哲学立场特别和谐，例如，将数学对象和关于它们的陈述的真实性视为依赖于我们。另一个相关的方面通常被视为与可预测性有关：如果集合宇宙是通过我们自己的数学活动逐步建立起来的，那么将其视为开放的也是自然而然的。因此，在构造性背景下，拒绝经典逻辑满足可预测性的要求时，集合宇宙通常被描述为一个开放的概念，一个“在进行中”的宇宙。这个想法在构造类型论中得到了特别好的体现，Per Martin-Löf 故意将类型论宇宙的概念保持开放（没有为其规定特定的消除规则）。 集合论的宇宙的开放性为通过反射原理的扩展铺平了道路。这些原理在类型论和构造主义集合论中都得到了研究。有关结果和基础讨论的调查，请参阅（Rathjen 2005a），还有第 5.2 节。有关构造主义集合论的形式分析和与冯·诺伊曼层次结构的比较，请参阅（Ziegler 2014）。

## 2. 构造主义和直觉主义集合论的起源

弗里德曼和迈希尔在 20 世纪 70 年代初引入了直觉主义版本的策梅洛-弗兰克尔集合论。在（Friedman 1973）中，作者对各种直觉主义系统的形式属性进行了研究，并为它们引入了 Kleene 的实现方法的扩展。在（Myhill 1973）中，实现技术被应用于展示直觉主义策梅洛-弗兰克尔集合论（替代集合论）的存在性质。弗里德曼还将直觉主义逻辑的双重否定翻译扩展到了经典和直觉主义集合论之间的关系（Friedman 1973a）。这些最早的论文已经涉及了一些主要的直觉主义集合论和经典 ZF 之间的关系。它们还阐明了基于直觉主义逻辑的集合论的一个关键特征，即它适用于强大的构造语义解释，如实现。这些技术被应用于研究一些构造主义和直觉主义集合论所具有的关键元理论性质（请参阅关于语义技术的部分）。这项开创性的工作已经在 Beeson、McCarty 和 Rathjen 等人的工作中得到了充分的利用和大幅度的扩展（例如，Beeson 1985；McCarty 1984，Rathjen 2005、2005b、2006b、2012）。

从一开始，构造主义集合论具有更加独特的基础性使命，并与毕晓普的数学紧密相连。事实上，1967 年，毕晓普出版了《构造分析的基础》一书（Bishop 1967），这开启了一个基于直觉逻辑的数学新时代（详见构造主义数学条目）。这本专著激发了逻辑学界对于澄清和正式表达毕晓普所使用的原则的新尝试，尽管仅限于非正式层面。Goodman 和 Myhill（Goodman and Myhill 1972）的首次尝试使用了哥德尔的 T 系统的版本（类似尝试可参见（Bishop 1970））。然而，Myhill 得出结论，得到的形式化过程过于复杂和人为（Myhill 1975, 347）。相反，Myhill 提出了一种更接近毕晓普最初使用的非正式集合概念，也更接近集合论传统的系统。Myhill 写道（1975, 347）：

> 我们拒绝相信事情必须如此复杂 - （Bishop 1967）的论证看起来非常顺畅，似乎直接从某种关于集合、函数等的概念中得出，并且我们希望发现一种形式主义，以同样的方式隔离这个概念背后的原则，就像策梅洛-弗兰克尔集合论隔离了古典（非构造性）数学的原则一样。我们希望这些原则能够使形式化过程完全平凡，就像在古典情况下一样。

我们观察到，Myhill 的构造集合论区分了函数、自然数和集合的概念；因此，它紧密地代表了一个构造主义传统，其中函数和自然数在概念上独立于集合。构造集合论发展中的另一个基本步骤是 Friedman 的《构造分析的集合论基础》（Friedman 1977）。在这里，除了其他系统之外，定义了一个名为 B 的系统，与 Myhill 的系统相比，它对集合论原理有进一步的限制（特别是没有集合归纳）。它还具有受限的依赖选择公理形式。事实上，已经证明系统 B 足以表示 Bishop（1967）的构造分析，同时在证明论上非常弱（因为没有集合归纳）。系统 B 实际上是算术的保守扩展（因此它远低于在第 1.3 节中简要回顾的自然数的可预测性限制）。Myhill 和 Friedman 的系统随后被 Aczel 修改，以获得一个与 ZF 语言完全兼容的系统 CZF（构造性策梅洛-弗兰克尔）（Aczel 1978, 1982, 1986; Aczel and Rathjen 2001; 2010）。CZF 也不包括选择原理。Aczel 在 Martin-Löf 类型论中给出了 CZF 的解释，旨在证实集合论的构造性质。他还加强了 Myhill 系统的一些原理（即集合收集和指数运算），理由是在类型论解释中仍然验证了更强版本的原理。

早在 1970 年代初，引入了其他基于主教式构造性数学的基础系统。例如：S. Feferman 的显式数学（Feferman 1975）和已经提到的直觉型理论（Martin-Löf 1975；1984）。构造性类型理论通常被认为是主教式构造性数学最令人满意的基础。类型理论和显式数学都可以被看作是更直接地表达构造性数学的计算内容。特别是类型理论可以被看作是一种非常通用和表达能力强的编程语言。构造性和直觉主义集合论只通过它们的语义解释间接显示它们的计算内容（参见例如（Aczel 1977），（Lipton 1995）和关于语义技术的部分）。

## 3. CZF 和 IZF 公理系统

对于已经熟悉 ZF 集合论的读者，我们现在简要回顾一下 CZF 和 IZF 系统的公理。关于它们的公理的完整列表和解释，我们转而参考补充文件：

> CZF 和 IZF 的公理。

CZF 和 IZF 是基于直觉主义一阶逻辑和相等性的基础上制定的，只有∈（属于）作为额外的非逻辑二元谓词符号。它们的集合论公理如下。

| IZF            | CZF         |
| ---------------- | ------------- |
| Extensionality | *（相同）* |
| Pair           | *(相同)*   |
| Union          | *(相同)*   |
| Infinity       | *(相同)*   |
| Separation     | 限制分离    |
| Collection     | 强集合      |
| Powerset       | 子集合      |
| 集合归纳       |  *(same)*            |

注意，在 IZF 中，分离公理模式是无限制的。在 CZF 中，集合论被加强以弥补受限制的分离。子集合集合是 Myhill 的指数公理的加强，因此替代了 ZF 的幂集。

## 4. 构造选择原理

在讨论古典集合论作为数学基础的角色时，通常考虑的是 ZFC 理论，即 ZF 公理系统加上选择公理（AC）。因此，人们可能会想知道在直觉主义环境中选择公理的地位如何。这个问题特别重要，因为选择公理在首次出现时常常被视为有争议和高度非构造性的。然而，在构造性背景下，人们观察到了一个奇特的现象。选择公理的通常形式在类型论（如 Martin-Löf 类型论）等类型理论中是有效的，其中 Curry-Howard 对应关系成立（详见构造性数学条目的第 3.4 节）。另一方面，选择公理的假设在外延背景下导致了排中律的实例，其中也可用一种分离形式。例如，构造性和直觉主义 ZF 就是这种情况。（证明请参见与直觉主义逻辑不相容的集合论原理的补充文档。）关于 AC 与基于直觉主义逻辑的外延集合论不相容性的证明似乎首次出现在（Diaconescu 1975）的范畴论背景中。Goodman 和 Myhill 提出了基于直觉主义逻辑的集合论的论证（Goodman 和 Myhill 1978）。

尽管选择公理与构造性和直觉主义 ZF 都不相容，但可以将其他选择原理添加到基本系统中，而不会产生相同的不良结果。例如，可以添加可数选择原理（AC0）或依赖选择原理（DC）。实际上，这两个原理在构造性数学实践中经常被使用。（有关其确切表述，请参见 CZF 和 IZF 公理的补充文档。）

在（Aczel 1978）中，作者还考虑了一个称为“展示公理”的选择原则，它断言每个集合都是所谓基数的满射像。基数是一个集合，比如说 B，使得具有域 B 的每个关系都可以扩展为具有域 B 的函数。

Aczel 通过将 CZF 的解释扩展到 Martin-Löf 类型理论中（Aczel 1982），证明了所有这些选择形式与构造集合论的兼容性。Rathjen（2006）还考虑了各种构造性选择原则及其相互关系。

最后一点说明：尽管构造性和直觉主义集合论与刚提到的选择原则是兼容的，但这些集合论通常在没有任何选择原则的情况下定义。这旨在允许“多元化”的基础性方法。特别是，人们希望获得与那些上下文（例如集合论的范畴模型）兼容的基础理论，即使这些较弱的选择原则可能无法验证。有关构造类型理论背景下类似的思想，请参见（Maietti 和 Sambin 2005，Maietti 2009）。我们还要在这里提到 Richman 对构造性数学的呼吁，该数学不使用选择原则（Richman 2000；2001）。

## 5. 构造主义和直觉主义 ZF 的证明理论和语义学

在从哲学角度考虑某种数学实践（或用于编码它的理论）时，我们需要尽可能精确地澄清其中所做的假设以及由这些假设产生的后果。当处理基于比经典逻辑更弱的逻辑的理论时，这一点尤为重要，因为这需要更深入、更精确的洞察力。有许多技术工具可用于帮助我们澄清这些方面。在可用的工具中，有证明论技术，如证明论解释，以及语义技术，如实现性、克里普克模型、海廷值语义。事实上，在文献中，人们经常看到证明论和语义技术的相互作用。在这里，我们对其中一些主题进行了粗略的介绍，并建议进一步阅读。

### 5.1 证明论强度

在证明论中（特别是在这个学科分支中，即序数分析），一个基本主题是通过超限序数对理论进行分类，这些超限序数衡量了它们的“一致性强度”和“计算能力”。这些序数给出了一个理论有多强的指示，并因此提供了比较不同理论的方法。例如，序数ε0 是 Peano 算术的证明论序数，远小于序数Γ0，通常称为“可预测性的极限”（见上文 1.3 节）。这表明，有可预测接受的理论比 Peano 算术要强得多。

如第 1 节所讨论的，从经典 ZF 到其直觉主义变体的转变需要我们为每个集合论公理选择一个合适的表述：一个经典公理可能有多个直觉主义变体，这些变体彼此之间是非等价的。这有时反映在所得理论的证明论强度上，这取决于我们选择哪些原则。例如，我们已经注意到，在 CZF 中，我们没有完全的分离和幂集，它们分别被可预测接受的有界分离和子集收集原则所取代。然而，如果我们在 CZF 中添加这些原则之一，我们将得到不可预测的理论。这些理论的不可预测性表现在它们的证明论强度远远超过 CZF 的事实上。

对于理解这些理论及其彼此之间的关系，对构造主义和直觉主义集合论的证明论强度进行调查是一种关键的元理论工具并不足为奇。对于一个理论的证明论强度的调查是丰富而有信息量的。特别是，Feferman（1993）认为，证明论分析可能有助于我们确定某个理论是否符合给定的哲学框架：例如，分析可能揭示一个理论是预测性的还是有限性的等等。此外，作为证明论分析的副产品，我们有时会得到简单的独立性证明。实际上，我们可以证明一个理论不能证明某个特定原理，因为将其添加到该理论中会增加该理论的证明论强度。例如，CZF 不能证明幂集公理，因为将幂集添加到 CZF 会产生一个更强的理论。证明论解释也被用于比较构造主义和直觉主义 ZF 集合论之间的差异，以及它们与经典对应物以及其他构造数学基础系统（例如构造类型论和显式数学）之间的差异（参见 Griffor 和 Rathjen 1994，Tupailo 2003）。关于证明论强度概念的定义和关于证明论的调查，请参见（Rathjen 1999，2006b）等。

虽然 CZF 和 IZF 是最广泛研究的系统，但在文献中迄今为止考虑了许多其他的构造主义和直觉主义集合论系统。通过各种工具，如集合论的双重否定解释的扩展（源自（Friedman 1973a）），以及各种其他的证明论解释，通常是通过仔细结合语义和证明论技术得出的。在许多情况下，系统的证明论强度是通过构造主义和经典系统之间的一系列解释链以及使用各种工具来确定的，从可靠性到更“传统”的证明论技术，如序数分析（参见，例如，Beeson 1985; Griffor 和 Rathjen 1994; Rathjen 2012b）。特别是，由于其灵活性，实现性被证明非常有用。关于这些研究的结果，一些分析的系统被发现与算术一样弱，例如 Friedman 的系统 B（Friedman 1977）；其他系统则与完全经典的 ZF 一样强大，例如 IZF（Friedman 1973a）。还有一些中等强度的系统，如 CZF。事实上，后者的强度等于一个称为 ID1 的归纳定义理论的强度。CZF 与 ID1 具有相同的强度被认为证实了集合论的（广义）可预测性，并证明它超过了给定自然数的可预测性限制，因为 ID1 的证明论序数远远超过Γ0。

作为最后的备注：虽然 CZF 的强度远低于二阶算术，但是将排中律简单地添加到 CZF 中就可以得到（完整的）ZF。这与 IZF 形成对比，IZF 已经具有 ZF 的强度（Friedman 1973a）。与直觉主义集合论相比，CZF 的有限证明论强度常被认为是构造主义的主要优势之一。在某种意义上，CZF 似乎充分利用了直觉逻辑的使用，因为它刻画了一个（广义的）谓词集合的概念，该概念对于构造数学的大部分发展来说足够强大，但又足够弱以避免非谓词性。有趣的是，当一些大集合公理被添加到构造集合论中时，出现了类似的模式，因为所得到的理论的强度远低于相应的经典理论。

### 5.2 构造主义和直觉主义 ZF 中的大集合

在经典集合论中，大基数是研究的一个重要领域（参见集合论条目）。在构造主义背景下，序数并不是线性有序的。（关于构造主义序数的概念及其性质的简要讨论，请参见附加文档：与直觉逻辑不相容的集合论原理。）因此，基数在构造主义背景下不起到与经典设置中相同的作用。

然而，人们仍然可以研究大集合公理对直觉主义和构造主义集合论的影响。例如，可以向构造主义和直觉主义集合论中添加一个公理，断言存在不可及集合，这在经典情况下对应于冯·诺伊曼层次结构的强不可及层级。[2]将大集合公理添加到直觉主义 ZF 中首先是由弗里德曼和斯塞德罗夫提出的（Friedman and Scedrov 1984）。他们引入了不可及集合、马洛集合和元嵌入来表达超紧致性、巨大性和雷因哈特公理在 IZF 上的作用。他们的一个目标是阐明相应的经典概念；另一个目标是研究这些原则对原始集合论的元理论性质的影响。弗里德曼和斯塞德罗夫已经证明，例如，添加大集合公理不会损害 IZF 的析取和数值存在性质的有效性。

在构造集合论的背景下，Aczel 引入了大集合的概念，以所谓的正则集合的形式来表达集合的归纳定义（Aczel 1986）。Rathjen 和合作者确定了一些 CZF 的扩展的证明论强度，这些扩展通过大集合公理表达了与不可达性、Mahloness 和弱紧性相对应的大集合概念（参见 Rathjen et al. 1998；Rathjen 1998；Rathjen 1999；Rathjen 2003a）。在构造集合论的背景下，Ziegler 和 Matthews 在他们的博士论文中进一步扩展了对大集合的研究（Ziegler 2014a；Matthews 2021）。Ziegler 2014a 是对 CZF 背景下大集合和大集合公理的研究。Ziegler 使用了一种新的修改的累积层次结构来描述集合论宇宙中大集合的排列。他发展了一个关于俱乐部的构造理论，提出了 Mahlo 集合的一个特征定理（连接了 Mahloness 的经典方法和构造方法），并提出了一个 2-强集合的特征定理。然后，他研究了集合论宇宙到 CZF 的传递类模型的基本嵌入。Matthews（2021）在经典和直觉主义理论（无幂集）的背景下研究了基本嵌入。Jeon 和 Matthews ms. [其他互联网资源]通过考虑基于构造集合论（包括 CZF）的大集合公理进一步推进了这项研究。虽然 CZF 的扩展中小大集合的证明论强度比二阶 Peano 算术要弱，但他们表明，基于基本嵌入定义的大大集合（大集合概念）的证明论强度远远超过 ZFC 的证明论强度。

在古典集合论中，另一个在与大基数假设相关的关系中起着关键作用的概念是可构造层次结构 L。Lubarsky（1993）首次在 IZF 的背景下研究了可构造层次结构。Matthews 和 Rathjen（2024）进一步研究了可构造层次结构，以阐明其结构和在构造性集合论中的作用。例如，他们调查了 L 是否可以被视为通常意义上的内模，并且证明了构造性情况与古典情况的重要区别。例如，他们证明了可能存在一个不在可构造宇宙中的序数。

从基础的角度来看，对于通过大集合公理扩展构造性集合论的反对意见可能会被提出。在古典集合论中，大基数可以被看作是更高层次的无穷的一种体现。我们如何在构造性的情况下证明这些原理？可以认为，这些概念的构造性证明应再次依赖于类型论解释。在扩展了所谓的“小”大集合原理的集合论中，实际上存在通过宇宙和所谓的 W 类型扩展构造性类型论的对应扩展。从这个角度来看，通过大集合的扩展的证明与 Martin-Löf 类型论的限制问题是紧密相关的（Rathjen 2005）。我们还注意到，将不可达集合公理添加到 CZF 的弱子系统（没有集合归纳）会产生Γ0 强度的理论，这是 Feferman 和 Schütte 根据自然数给出的可预测性极限（Crosilla 和 Rathjen 2001；另见第 1.3 节）。这表明，通过在构造性、可预测性的背景下工作，我们可以驯服重要的传统强集合论概念。对于更强的大集合假设，可能需要其他的证明。有关讨论，请参见 Ziegler 2014。

Crosilla 和 Rathjen 的集合论中包含不可达集合（但没有集合归纳）在证明理论上相对较弱，但在数学上非常表达力强。例如，它已被用于验证将 Voevodsky 的 Univalence 公理添加到 Martin-Löf 类型理论中不会引发非预测性（Rathjen 2017）。Univalence 公理是 Voevodsky 作为他的 Univalent Foundations 计划的一部分引入的（Voevodsky 2015）。Voevodsky 给出了一个基于 Kan 单纯集的构造型类型理论的模型（参见 Kapulkin＆Lumsdaine 2012）。上述文章中发展的具有 Univalence 的构造型类型理论的单纯模型是在具有不可达基数的 ZFC 的扩展内进行的。这引发了一个问题，即是否可以给出这种类型理论的更具构造性的模型，特别是该类型理论是否是预测性的。Bezem，Coquand 和 Huber（2014）提出了一个在立方集合中的这种类型理论的模型，该模型是计算的，并且“可以用构造性的元逻辑表达”。Rathjen（2017）已验证这个新模型可以在比具有不可达基数的经典集合论弱得多的 CZF 的适当扩展中编码。实际上，事实证明，如果我们以相对较弱的类型理论为出发点，即没有 W 类型的理论，并通过 Univalence 公理扩展它，那么得到的理论具有证明论强度Γ0（Rathjen 2017）。为了证明这一点，我们证明了 Bezem，Coquand 和 Huber 的立方模型可以在 Crosilla 和 Rathjen（2001）引入的系统的扩展中进行，该系统通过（有界的）相对化依赖选择。根据（Crosilla 和 Rathjen 2001）和（Rathjen 2003），后者具有证明论序数Γ0。

### 5.3 构造主义和直觉主义 ZF 的元数学性质和语义技术

直觉主义逻辑的各种解释已经扩展到直觉主义和构造主义集合论，例如可实现性，Kripke 模型和 Heyting 值语义。所有这些技术都已应用于获得关于集合论的元数学结果。

#### 5.3.1 构造主义和直觉主义 ZF 的析取和存在性质

一些直觉主义集合论满足某些“标志性”的元数学性质，例如析取性质和存在性质。还可以证明它们与超出我们通常认为的构造性的原则一起是一致的。其中包括，例如，Church 论题和 Markov 原理。有关这些原则在直觉主义逻辑背景下的描述，读者可以参考直觉主义逻辑条目的 4.2 和 5.2 节，或者 Troelstra 和 van Dalen 的书《数学中的构造主义》（Troelstra 和 van Dalen 1988）。

在这里，我们回顾了针对集合论 T 制定的析取和存在性质。对于析取和存在性质的非正式动机是基于我们对析取和存在性质的构造性证明的理解。事实上，我们有理由期望，如果我们构造性地证明了一个析取ϕ∨ψ，那么我们也应该能够证明ϕ或证明ψ。同样，如果我们证明了一个存在性陈述，那么我们应该能够证明该陈述的证人在我们的理论中是可定义的。

尽管这些性质似乎非常自然，并且在算术理论中相当容易建立，但在集合论的情况下，由于其集合的超限层次结构和外延公理，它们实际上带来了相当大的技术挑战。事实上，著名的构造性和直觉主义集合论在存在性质方面并不具备，这将在下一节中讨论。

设 T 是一个语言 L(T)包含集合论语言的理论。此外，为了简单起见，我们假设 L(T)具有一个常数ω，表示冯·诺伊曼自然数集，对于每个 n，有一个常数 cn 表示ω的第 n 个元素。

一个理论 T 具有析取性质（DP），如果对于 T 证明的 L(T)中的句子ϕ和ψ，T 证明ϕ或者 T 证明ψ。

在集合论的背景下，存在性质有两个不同的版本：数值存在性质（NEP）和存在性质（EP）。设θ(x)是一个至多有 x 个自由变量的公式。我们说：

(1)

如果 T 证明∃x∈ωθ(x)，那么对于某个自然数 n，T 证明θ(cn)，则 T 具有 NEP。

(2)

如果每当 T 证明∃xθ(x)，那么存在一个公式ϕ(x)，其中 x 是自由的，使得 T 证明∃!x(ϕ(x)∧θ(x))，则 T 具有 EP。

由于实现技术在对构造主义和直觉主义集合论的存在和析取性质进行研究中起到了关键作用，我们在下一节中讨论这些研究的结果。

#### 5.3.2 实现性

可实现性一直是基于直觉逻辑的集合论研究中的首要工具之一，从弗里德曼和迈希尔的早期贡献开始（弗里德曼 1973 年，迈希尔 1973 年）。可实现性语义首次由克里恩提出，用于直觉算术，并由克雷塞尔和特罗尔斯特拉扩展到高阶海廷算术（克雷塞尔和特罗尔斯特拉 1970 年）。关于算术可实现性的定义，请参见直觉逻辑条目的第 5.2 节。弗里德曼将类似于克雷塞尔和特罗尔斯特拉的可实现性应用于高阶算术系统（弗里德曼 1973 年）。迈希尔引入了一种类似于克里恩斜杠的可实现性变体（迈希尔 1973 年；克里恩 1962 年，1963 年）。他证明了一种将替代性代替集合论的版本（称为 IZFRep）具有 DP、NEP 和 EP 的 IZF。这些结果在（迈希尔 1975 年；弗里德曼和斯塞德罗夫 1983 年）中进一步扩展。虽然弗里德曼和迈希尔为外延集合论提供了可实现性模型，但比森为非外延集合论开发了一种可实现性概念。然后，他通过在非外延对应物中进行解释，研究了外延集合论的元理论性质。他证明了 IZF（带有集合论）具有 DP 和 NEP（比森 1985 年）。随后，麦卡蒂直接为外延集合论引入了可实现性（麦卡蒂 1984 年；1986 年）。对于 CZF 的变体，已经考虑了可实现性语义，例如在（Crosilla 和 Rathjen 2001 年；Rathjen 2006a 年）中。后一篇文章中的可实现性受到麦卡蒂的启发，并具有重要特点，即与 IZF 的麦卡蒂可实现性一样，它是 CZF 的自验证语义（即，这种可实现性概念可以在 CZF 中形式化，并且 CZF 的每个定理在 CZF 中可以被证明实现）。 Rathjen 利用这个实现性的概念来证明 CZF（以及其扩展）具有 DP 和 NEP（Rathjen 2005b）。

另一种被证明非常有用的实现性是 Lifschitz 实现性。Lifschitz（1979）引入了 Kleene 对 Heyting 算术的实现性的修改，它具有验证 Church's Thesis（CT）的弱形式的特点，但不是 CT 本身。van Oosten（1990）将 Lifschitz 实现性扩展到了二阶算术。随后，程和 Rathjen 将其扩展到了完整的 IZF，他们利用它获得了许多独立性结果，以及验证了所谓的较小的全知原理（LLPO）（有关 LLPO，请参见构造数学条目）。

哪些集合论满足存在性质的问题被证明特别难以解决。（Friedman 和 Scedrov 1985）使用 Kripke 模型证明了 IZF（即具有集合的系统）没有 EP，而如上所述，IZFRep 系统（其中替代取代了集合）具有 EP。这促使 Beeson 提出了这个问题[Beeson 1985，IX]：

> 任何具有集合论的合理集合论是否具有存在性质？

对于 Beeson 的问题，第一个答案出现在（Rathjen 2012）中，作者引入了弱存在性质的概念：这里的重点是为每个存在性定理找到一个可证明定义的见证集合。然后，他引入了一种基于一般集合递归函数的实现形式，其中对于存在性陈述的实现者提供了存在量词的见证集合，而不是单个见证。Rathjen 将这种实现性概念与真理相结合，得出了一些具有集合论的理论确实具有弱存在性质的结论（而 IZF 则没有）。其中，特别是没有子集收集加上 Myhill 的指数公理的 CZF 理论，CZFExp。实际上，Rathjen 声称通过将这些结果与他进行的进一步工作相结合，他可以证明 CZFExp（以及其他一些理论）具有存在性质。一个引人注目的观察是，这些理论是用集合论来表述的；因此，在 IZF 的情况下，存在性质的失败不仅仅归因于集合论，而是归因于该方案与无限制分离之间的相互作用。

至于 CZF 本身是否具有存在性属性的突出问题，Swan（2014）已经否定了这一点。在那里，作者利用了三个精心设计的可实现模型和它们之间的嵌入，以显示即使对于 CZF 而言，弱存在性属性也会失败。在这样做的过程中，他还表明 CZF 的子集收集模式是罪魁祸首。正如（Swan 2014）中明确强调的那样，CZF 没有 EP 并不意味着 CZF 作为一种构造性理论的某种弱点。即使 Swan 基本上证明了 CZF 断言存在它不知道如何构造的数学对象，CZF 仍然具有自然解释，其中这些对象可以被构造，例如 Aczel 对类型理论的解释（Aczel 1978）。

关于直觉主义集合论结果的调查，请参见（Beeson 1985，第 IX 章）。关于 CZF 的相应发展，请参见（Rathjen 2005b，2006，2012）和（Swan 2014）。

#### 5.3.3 Kripke 模型和 Heyting 值语义

Kripke 模型用于直觉主义集合论，Friedman 和 Scedrov（1985）使用它们来证明 IZF 没有 EP（结合 Myhill（1973）的结果，我们得到 IZFRep 不能证明 IZF）。最近，Kripke 模型被应用于澄清构造主义替代幂集公理的关系：Myhill 的指数公理和 Aczel 的子集收集模式。很明显，幂集公理蕴含这两个原则，而子集收集蕴含指数公理。另一方面，后两个原则都不蕴含幂集公理，因为以子集收集代替幂集的理论 CZF 比 CZF 和 CZFExp 强得多（Rathjen 2012b）。实际上，CZF 和 CZFExp 具有相同的证明论强度（Griffor 和 Rathjen 1994）；因此，为了研究构造集合论中子集收集和指数公理之间的关系，需要开发除了证明论方法之外的其他工具。Lubarsky（2005）使用 Kripke 模型来证明 Myhill 的指数公理不能蕴含 Aczel 的子集收集（基于 CZF 减去子集收集加上完全分离）。在 Lubarsky 和 Rathjen（2007）中，作者们应用了 Kripke 模型的技术来证明 CZF 和 CZFExp 的后果也是不同的。Aczel 和 Rathjen（2001）已经证明了 Dedekind 实数类在 CZF 中形成一个集合，使用了子集收集。Lubarsky 和 Rathjen（2007）证明了 CZFExp 不能证明相同的陈述。

Kripke 模型也被应用于 Diener 和 Lubarsky 2013 年的不同类型的 Fan 定理。Lubarsky（2023 年）对模型论技术进行了概述，介绍了 Heyting 值和 Kripke 模型以及结合这两个概念的构造。Iemhoff 2010 年、Iemhoff 和 Passmann 2021 年以及 Iemhoff 和 Passmann 2023 年都使用了 Kripke 模型来研究构造集合论。Iemhoff（2010 年）通过使用来自经典模型论的构造，如可构造集合和泛扩展，为构造集合论的子理论构造了 Kripke 模型。她证明在主要构造下，除了集合公理之外的所有公理都可以在构造的 Kripke 模型中成立。Iemhoff 和 Passmann（2021 年）研究了 CZF 的一个重要子系统，直觉主义 Kripke-Platek 集合论（IKP）的逻辑结构。他们证明 IKP 的一阶逻辑是直觉主义一阶逻辑。

Grayson（1979 年）通过 Heyting 值语义获得了直觉主义集合论的对应布尔模型，作为经典集合论的对应。它们尤其通过范畴语义进行了推广（有关介绍，请参见 MacLane 和 Moerdijk 1992 年）。Heyting 值语义在独立性结果中得到了应用（Scedrov 1981 年；1982 年）。Gambino 2006 年给出了一种构造性处理方法（另请参见 Lubarsky 2009 年）。请参阅 Ziegler 2012 年，了解关于构造集合论的实现和 Heyting 模型的推广。

#### 5.3.4 构造和直觉主义集合论的范畴模型

构造主义和直觉主义集合论的范畴模型在多年来蓬勃发展。拓扑和层的概念在这里起着重要作用（参见 Fourman 1980 和 Fourman 和 Scott 1980）。有关主要概念的概述，请参阅范畴论条目和提供的参考文献（特别是补充的程序化阅读指南）。有关更具体与构造主义集合论相关的发展，请参阅（Simpson 2005）和（Awodey 2008），以及网页：代数集合论。

### 5.4 构造主义和直觉主义集合论的变体：具有 U 元素和非外延集合论的集合论

有时，直觉主义和构造主义集合论的系统被提出时，自然数被作为一种单独的 U 元素类型呈现，即没有元素的原始对象（Friedman 1977；Myhill 1975；Beeson 1985）。从构造的角度来看，这是一个自然的选择，与 Bishop（1967）等人表达的观点一致。在 Bishop 的专著中，自然数被视为所有其他数学概念基于的基本概念。从技术角度来看，如果将自然数作为原始对象，并与它们的集合论表示不同，那么无穷公理的形式就变成了：“存在一个自然数的集合（作为 U 元素）”。构造主义集合论中更一般形式的 U 元素已在 Cantini 和 Crosilla 2008 中考虑过。在这里，提出了构造主义集合论的一个变体，它将一种内涵和部分操作的概念与 CZF 的外延集合概念相结合（参见 Cantini 和 Crosilla 2010）。

集合论的外延公理是迄今讨论的所有系统的共同特点。然而，在将语句的计算内容视为关键的背景下，内涵理论可能更为合适。例如，构造型理论和显式数学都包含某种形式的内涵性。文献中曾考虑过没有外延性的直觉集合论（Friedman 1973a，Beeson 1985）。然而，它们的动机不是计算性的，而是技术性的，这是由于在研究直觉集合论的元数学性质时，外延性带来的困难。

<!--md-padding-ignore-begin-->
## Bibliography

* Aczel, P., 1978, “The Type Theoretic Interpretation of Constructive Set Theory”, in *Logic Colloquium ‘77*, A. MacIntyre, L. Pacholski, J. Paris (eds.), Amsterdam and New York: North-Holland, pp. 55–66.
* –––, 1982, “The type theoretic interpretation of constructive set theory: choice principles”, in *The L.E.J. Brouwer Centenary Symposium*, A. S. Troelstra and D. van Dalen (eds.), Amsterdam and New York: North-Holland, pp. 1–40.
* –––, 1986, “The type theoretic interpretation of constructive set theory: inductive definitions”, in *Logic, Methodology, and Philosophy of Science VII*, R.B. Marcus, G.J. Dorn, and G.J.W. Dorn (eds.), Amsterdam and New York: North-Holland, pp. 17–49.
* –––, 1988, *Non-wellfounded Sets* (CSLI Lecture Notes 14), Stanford: CSLI.
* Aczel, P., and M. Rathjen, 2001, “Notes on Constructive Set Theory”, Report No. 40, 2000/2001, Djursholm: Institut Mittag-Leffler, [[available online](http://www.mittag-leffler.se/sites/default/files/IML-0001-40.pdf)]
* Aczel, P., and N. Gambino, 2002, “Collection principles in dependent type theory”, in *Types for Proofs and Programs* (Lecture Notes in Computer Science 2277), P. Callaghan, Z. Luo, J. McKinna, and R. Pollack (eds.), Berlin: Springer, pp. 1–23.
* Awodey, S., 2008, “A Brief Introduction to Algebraic Set Theory”, *The Bulletin of Symbolic*, 14 (3): 281–298.
* Barwise, J., and L. Moss, 1996, *Vicious Circles* (CSLI Lecture Notes 60), Stanford: CSLI.
* Beeson, M., 1985, *Foundations of Constructive Mathematics*, Berlin: Springer.
* Bezem, M., C. Thierry, and S. Huber, 2014, “A model of type theory in cubical sets”, in 19th International Conference on Types for Proofs and Programs (TYPES 2013), Matthes, R. and Schubert, A. (eds.), Dagstuhl: Schloss Dagstuhl–Leibniz-Zentrum fuer Informatik, pp. 107–128.
* Bishop, E., 1967, *Foundations of Constructive Analysis*, New York: McGraw-Hill.
* –––, 1970, “Mathematics as a numerical language”, in *Intuitionism and Proof Theory*, A. Kino, J. Myhill, and R. E. Vesley (eds.), Amsterdam: North-Holland, pp. 53–71.
* Bishop, E., and D. Bridges, 1985, *Constructive Analysis*, Berlin and Heidelberg: Springer.
* Bridges, D., and F. Richman, 1987, *Varieties of Constructive Mathematics*, Cambridge: Cambridge University Press.
* Buchholz, W., S. Feferman, W. Pohlers, and W. Sieg, 1981, *Iterated Inductive Definitions and Subsystems of Analysis*, Berlin: Springer.
* Cantini, A., and L. Crosilla, 2008, “Constructive set theory with operations”, in A. Andretta, K. Kearnes, D. Zambella (eds.), *Logic Colloquium 2004* (Lecture Notes in Logic 29), Cambridge: Cambridge University Press, pp. 47–83.
* –––, 2010, “Explicit operational set theory”, in R. Schindler (ed.), *Ways of Proof Theory*, Frankfurt: Ontos, pp. 199–240.
* Chen, R.-M. and M. Rathjen, 2012, “Lifschitz Realizability for Intuitionistic Zermelo-Fraenkel Set Theory”, *Archive for Mathematical Logic*, 51: 789–818.
* Crosilla, L., 2017, “Predicativity and Feferman”, in G. Jäger and W. Sieg (eds.), *Feferman on Foundations* (Outstanding Contributions to Logic: Volume 13), Cham: Springer, pp. 423–447.
* –––, 2022, “Predicativity and Constructive Mathematics”, in Oliveri, G., Ternullo, C. and Boscolo, S. (eds.), *Objects, Structures, and Logics* (Boston Studies in the Philosophy and History of Science: Volume 339), Cham: Springer.
* Crosilla, L., and M. Rathjen, 2001, “Inaccessible set axioms may have little consistency strength”, *Annals of Pure and Applied Logic*, 115: 33–70.
* Diaconescu, R., 1975, “Axiom of choice and complementation”, *Proceedings of the American Mathematical Society*, 51: 176–178.
* Diener, H., and R. Lubarsky, 2013, “Separating the Fan Theorem and Its Weakenings”, in S. N. Artemov and A. Nerode (eds.), *Proceedings of LFCS ‘13* (Lecture Notes in Computer Science 7734), Dordrecht: Springer, pp. 280–295.
* Dummett, M., 2000, *Elements of Intuitionism*, second edition, (Oxford Logic Guides 39), New York: Oxford University Press.
* Feferman, S., 1964, “Systems of predicative analysis”, *Journal of Symbolic Logic*, 29: 1–30.
* –––, 1975, “A language and axioms for explicit mathematics”, in *Algebra and Logic* (Lecture Notes in Mathematics 450), J. Crossley (ed.), Berlin: Springer, pp. 87–139.
* –––, 1988, “Weyl vindicated: Das Kontinuum seventy years later”, in *Temi e prospettive della logica e della scienza contemporanee*, C. Cellucci and G. Sambin (eds), pp. 59–93.
* –––, 1993, “What rests on what? The proof-theoretic analysis of mathematics”, in *Philosophy of Mathematics*, Part I, Proceedings of the 15th International Wittgenstein Symposium. Vienna: Verlag Hölder-Pichler-Tempsky.
* –––, 2005, “Predicativity”, in *Handbook of the Philosophy of Mathematics and Logic*, S. Shapiro (ed.), Oxford: Oxford University Press.
* Fletcher, P., 2007, “Infinity”, in *Handbook of the Philosophy of Logic*, D. Jacquette, (ed.), Amsterdam: Elsevier, pp. 523–585.
* Fourman, M.P., 1980, “Sheaf models for set theory”, *Journal of Pure Applied Algebra*, 19: 91–101.
* Fourman, M.P., and D.S. Scott, 1980, “Sheaves and logic”, in *Applications of Sheaves* (Lecture Notes in Mathematics 753), M.P. Fourman, C.J. Mulvey and D.S. Scott (eds.), Berlin: Springer, pp. 302–401.
* Friedman, H., 1973, “Some applications of Kleene’s methods for intuitionistic systems”, in *Proceedings of the 1971 Cambridge Summer School in Mathematical Logic* (Lecture Notes in Mathematics 337), A.R.D. Mathias and H. Rogers (eds.), Berlin: Springer, pp. 113–170.
* –––, 1973a, “The consistency of classical set theory relative to a set theory with intuitionistic logic”, *Journal of Symbolic Logic*, 38: 315–319.
* –––, 1977, “Set-theoretical foundations for constructive analysis”, *Annals of Mathematics*, 105: 1–28.
* Friedman, H., and A. Scedrov, 1983, “Set existence property for intuitionistic theories with dependent choice”, *Annals of Pure and Applied Logic*, 25: 129–140.
* –––, 1984, “Large sets in intuitionistic set theory”, *Annals of Pure and Applied Logic*, 27: 1–24.
* –––, 1985, “The lack of definable witnesses and provably recursive functions in intuitionistic set theory”, *Advances in Mathematics*, 57: 1–13.
* Gambino, N., 2006, “Heyting-valued interpretations for constructive set theory”, *Annals of Pure and Applied Logic*, 137: 164–188.
* Gödel, 1944, “Russell’s mathematical logic”, *The Philosophy of Bertrand Russell* (Library of Living Philosophers), P. Schilpp (ed.), New York: Tudor, 1951, pp. 123–153.
* Goodman, N.D., and J. Myhill, 1972, “The formalization of Bishop’s constructive mathematics”, in *Toposes, Algebraic Geometry and Logic* (Lecture Notes in Mathematics 274), F.W. Lawvere (ed.), Berlin: Springer, pp. 83–96.
* –––, 1978, “Choice implies excluded middle”, *Zeitschrift für mathematische Logik und Grundlagen der Mathematik*, 24(5): 461.
* Grayson, R.J., 1979, “Heyting-valued models for intuitionistic set theory”, in *Applications of Sheaves* (Lecture Notes in Mathematics 753), M.P. Fourman, C.J. Mulvey, and D.S. Scott (eds.), Berlin: Springer, pp. 402–414.
* Griffor, E., and M. Rathjen, 1994, “The strength of some Martin-Löf type theories”, *Archive Mathematical Logic*, 33: 347–385.
* van Heijenoort, J., 1967, *From Frege to Gödel. A Source Book in Mathematical Logic 1879–1931*, Cambridge: Harvard Univ. Press.
* Ihemoff, R., 2010, “Kripke models for subtheories of CZF”, *Archive for Mathematical Logic*, 49: 147–167.
* Iemhoff, R., and R. Passmann, 2021, “Logics of intuitionistic Kripke-Platek set theory”, *Annals of Pure and Applied Logic*, 172: 103014.
* –––, 2023, “Logics and admissible rules of constructive set theories”, *Philosophical Transactions of the Royal Society A*, 381 (2248). doi:10.1098/rsta.2022.0018
* Kapulkin, C. and P.L. Lumsdaine, 2021, “The simplicial model of univalent foundations (after Voevodsky)”, *Journal of the European Mathematical Society*, 23(6): 2071–2126
* Kleene, S.C., 1945, “On the interpretation of intuitionistic number theory”, *Journal of Symbolic Logic*, 10: 109–124.
* –––, 1962, “Disjunction and existence under implication in elementary intuitionistic formalisms”, *Journal of Symbolic Logic*, 27: 11–18.
* –––, 1963, “An addendum”, *Journal of Symbolic Logic*, 28: 154–156.
* Kreisel, G., 1958, “Ordinal logics and the characterization of informal concepts of proof”, *Proceedings of the International Congress of Mathematicians* (14–21 August 1958), Paris: Gauthier-Villars, pp. 289–299.
* Kreisel, G., and A. S. Troelstra, 1970, “Formal systems for some branches of intuitionistic analysis”, *Annals of Mathematical Logic*, 1: 229–387.
* Lifschitz, V., 1979, “CT0 is stronger than CT0!”, *Proceedings of the American Mathematical Society*, 73(1): 101–106.
* Lindström, I., 1989, “A construction of non-well-founded sets within Martin-Löf type theory”, *Journal of Symbolic Logic*, 54: 57–64.
* Lipton, J., 1995, “Realizability, set theory and term extraction”, in *The Curry-Howard isomorphism* (Cahiers du Centre de Logique de l’Universite Catholique de Louvain 8), Louvain-la-Neuve: Academia, pp. 257–364.
* Lorenzen, P., and J. Myhill, 1959, “Constructive definition of certain analytic sets of numbers”, *Journal of Symbolic Logic*, 24: 37–49.
* Lubarsky, R., 1993, “Intuitionistic L”, in J.N. Crossley, J.B. Remmel, R.A. Shore, and M.E. Sweedler (eds.), *Logical Methods* (Progress in Computer Science and Applied Logic: Volume 12), Birkhäuser, Boston, MA, 555–571.
* –––, 2005, “Independence results around constructive ZF”, *Annals of Pure and Applied Logic*, *132*: 209–225.
* –––, 2006, “CZF and second order arithmetic”, *Annals of Pure and Applied Logic*, *141*: 29–34.
* –––, 2009, “Topological Forcing Semantics with Settling”, in S. N. Artemov and A. Nerode (eds.), *Proceedings of LFCS ‘09* (Lecture Notes in Computer Science 5407), Dordrecht: Springer, pp. 309–322.
* –––, 2023, “Inner and Outer Models for Constructive Set Theories”, in D. Bridges, H. Ishihara, M. Rathjen, and H. Schwichtenberg (eds.), *The Handbook of Constructive Mathematics*, Cambridge: Cambridge University Press, pp. 584–635.
* Lubarsky, R., and M. Rathjen, 2007, “On the Constructive Dedekind Reals”, in in S. N. Artemov and A. Nerode (eds.), *Proceedings of LFCS 2007* (Lecture Notes in Computer Science 4514), Dordrecht: Springer, pp. 349–362.
* MacLane, S., and I. Moerdijk, 1992, “Sheaves in Geometry and Logic”, New York: Springer.
* Maietti, M.E., 2009, “A minimalist two-level foundation for constructive mathematics “, *Annals of Pure and Applied Logic*, 160(3): 319–354.
* Maietti, M.E., and G. Sambin, 2005, “Toward a Minimalist Foundation for Constructive Mathematics”, in *From Sets and Types to Topology and Analysis: Towards Practicable Foundations for Constructive Mathematics* (Oxford Logic Guides 48), L. Crosilla, and P. Schuster (eds.), Oxford: Oxford University Press.
* Martin-Löf, P., 1975, “An intuitionistic theory of types: predicative part”, in H.E. Rose and J. Sheperdson (eds.), *Logic Colloquium ‘73*, Amsterdam: North-Holland, pp. 73–118.
* –––, 1984, “Intuitionistic Type Theory”, Naples: Bibliopolis.
* Matthews, R. M. A., 2021, “Large Cardinals in Weakened Axiomatic Theories”, Ph.D. Thesis, University of Leeds, [[Matthews 2021 available online](http://etheses.whiterose.ac.uk/29589/)].
* Matthews, R., and M. Rathjen, 2024, “Constructing the Constructible Universe Constructively”, *Annals of Pure and Applied Logic*, 175(3). doi:10.1016/j.apal.2023.103392
* McCarty, D.C., 1984, “Realisability and Recursive Mathematics”, D.Phil. Dissertation, *Philosophy*, Oxford University.
* –––, 1986, “Realizability and recursive set theory”, *Annals of Pure and Applied Logic*, 32: 153–183.
* Myhill, J., 1973, “Some properties of Intuitionistic Zermelo-Fraenkel set theory”, in *Proceedings of the 1971 Cambridge Summer School in Mathematical Logic* (Lecture Notes in Mathematics 337), A.R.D. Mathias, and H. Rogers(eds.), Berlin: Springer, pp. 206–231.
* –––, 1975, “Constructive set theory”, *Journal of Symbolic Logic*, 40: 347–382.
* van Oosten, J., 1990, “Lifschitz’s Realizability”, *The Journal of Symbolic Logic*, 55: 805–821.
* Powell, W., 1975, “Extending Gödel’s negative interpretation to ZF”, *Journal of Symbolic Logic*, 40: 221–229.
* Rathjen, M., 1998, “The Higher Infinite in Proof Theory”, in J. Makowsky & E. Ravve (eds.), *Logic Colloquium ’95: Proceedings of the Annual European Summer Meeting of the Association of Symbolic Logic*, in Haifa, Israel, August 1995, Cambridge: Cambridge University Press, pp. 275–304.
* –––, 1999, “The realm of ordinal analysis”, in *Sets and Proofs* (London Mathematical Society Lecture Notes 258), Cambridge: Cambridge University Press, pp. 219–279.
* –––, 2003, “The anti-foundation axiom in constructive set theories”, in *Games, logic, and constructive sets* (CSLI Lecture Notes 161), Stanford: CSLI Publication, pp. 87–108.
* –––, 2003a, “Realizing Mahlo set theory in type theory”, *Archive for Mathematical Logic*, 42: 89–101.
* –––, 2004, “Predicativity, circularity, and anti-foundation”, in *One hundred years of Russell’s paradox* (Logic and its Applications 6), G. Link (ed.), Berlin: de Gruyter, pp. 191–219.
* –––, 2005, “Replacement versus Collection and related topics in constructive Zermelo-Fraenkel Set Theory”, *Annals of Pure and Applied Logic*, 136: 156–174.
* –––, 2005a, “The constructive Hilbert program and the limits of Martin-Löf type theory”, *Synthese*, 147: 81–120.
* –––, 2005b, “The disjunction and related properties for constructive Zermelo-Fraenkel set theory”, *Journal of Symbolic Logic*, 70(4): 1232–1254.
* –––, 2006, “Choice principles in constructive and classical set theories”, *Logic Colloquium ‘02* (Lecture Notes in Logic 27), Z. Chatzidakis, P. Koepke, and W. Pohlers (eds.), Wellesley, Massachusetts: A.K. Peters, 299–326.
* –––, 2006a, “Realizability for constructive Zermelo-Fraenkel set theory”, in *Logic Colloquium ‘03* (Lecture Notes in Logic 24), V. Stoltenberg-Hansen and J. Väänänen (eds.), Wellesley, Massachusets: A.K. Peters, pp. 282–314.
* –––, 2006b, “Theories and ordinals in proof theory”, *Synthese*, 148(3): 719–743.
* –––, 2008, “The natural numbers in constructive set theory”, *Mathematical Logic Quarterly*, 54: 287–312.
* –––, 2012, “From the weak to the strong existence property”, *Annals of Pure and Applied Logic*, 163: 1400–1418.
* –––, 2012b, “Constructive Zermelo-Fraenkel Set Theory, Power Set, and the Calculus of Constructions”, in *Epistemology versus Ontology: Essays on the Philosophy and Foundations of Mathematics in Honour of Per Martin-Löf*, (Logic, Epistemology and the Unity of Science Series), P. Dybjer, S. Lindström, E. Palmgren and G. Sundhölm (eds.), New York and Dordrecht: Springer Verlag.
* –––, 2017, “Proof Theory of Constructive Systems: Inductive Types and Univalence”, in G. Jäger, and W. Sieg (eds.), *Feferman on Foundations* (Outstanding Contributions to Logic: Volume 13), Cham: Springer, pp. 385–419.
* –––, 2023, “An Introduction to Constructive Set Theories: An Appetizer”, in D. Bridges, H. Ishihara, M. Rathjen, and H. Schwichtenberg (eds.), *The Handbook of Constructive Mathematics*, Cambridge: Cambridge University Press, pp. 20–60.
* Rathjen, M., E. Griffor, and E. Palmgren, 1998, “Inaccessibility in constructive set theory and type theory”, *Annals of Pure and Applied Logic*, 94: 181–200.
* Richman, F., 2000, “The fundamental theorem of algebra: a constructive development without choice”, *Pacific Journal of Mathematics*, 196: 213–230.
* –––, 2001, “Constructive mathematics without choice”, in *Reuniting the Antipodes: Constructive and Nonstandard Views of the Continuum* (Synthese Library 306), P. Schuster, *et al*. (eds.), Dordrecth: Kluwer, pp. 199–205.
* Russell, B., 1908, “Mathematical logic as based on the theory of types”, *American Journal of Mathematics*, 30: 222–262. Reprinted in van Heijenoort (1967), 150–182.
* Scedrov, A., 1981, “Consistency and independence results in Intuitionistic set theory” in *Constructive mathematics* (Lecture Notes in Mathematics 873), F. Richman (ed.), Berlin: Springer, pp. 54–86.
* –––, 1982, “Independence of the fan theorem in the presence of continuity principles” in *The L.E.J. Brouwer Centenary Symposium*, A.S. Troelstra, and D. van Dalen (eds.), Amsterdam: North-Holland, pp. 435–442.
* –––, 1985, “Intuitionistic set theory” in *Harvey Friedman’s research on the foundations of mathematics*, L.A. Garrubgtib *et al*. (eds.), Amsterdam: Elsevier.
* Schütte, K., 1965, “Predicative well-orderings”, in *Formal Systems and Recursive Functions*, J. Crossley and M. Dummett (eds.), Amsterdam: North-Holland, pp. 279–302.
* –––, 1965a, “Eine Grenze für die Beweisbarkeit der Transfiniten Induktion in der verzweigten Typenlogik”, *Archiv für mathematische Logik und Grundlagenforschung*, 7: 45–60.
* Simpson, A., 2005, “Constructive set theories and their category-theoretic models”, in *From Sets and Types to Topology and Analysis: Towards Practicable Foundations for Constructive Mathematics* (Oxford Logic Guides 48), L. Crosilla and P. Schuster (eds.), Oxford: Oxford University Press.
* Swan, A.W., 2014, “CZF does not have the existence property”, *Annals of Pure and Applied Logic*, 165: 1115–1147.
* Troelstra, A.S., and van Dalen, D., 1988, *Constructivism in Mathematics* (two volumes), Amsterdam: North Holland.
* Tupailo, S., 2003, “Realization of constructive set theory into Explicit Mathematics: a lower bound for impredicative Mahlo universe”, *Annals of Pure and Applied Logic*, 120: 165–196.
* Voevodsky, V., 2015, “An experimental library of formalized mathematics based on univalent foundations”, *Mathematical Structures in Computer Science*, 25: 1278–1294.
* Weyl, H., 1918, “Das Kontinuum. Kritische Untersuchungen über die Grundlagen der Analysis”, Veit, Leipzig.
* Ziegler, Albert, 2012, “Generalizing realizability and Heyting models for constructive set theory”, *Annals of Pure and Applied Logic*, 163 (2): 175–184.
* –––, 2014, “A cumulative hierarchy of sets for constructive set theory”, *Mathematical Logic Quarterly*, 60 (1-2): 21–30.
* –––, 2014a, “Large sets in constructive set theory”, Ph.D. Thesis, University of Leeds, [[available online](http://etheses.whiterose.ac.uk/8370/)]

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=set-theory-constructive). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/set-theory-constructive/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=set-theory-constructive&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/set-theory-constructive/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* Aczel, P. and M. Rathjen, 2010, [*CST Book draft*](http://www1.maths.leeds.ac.uk/~rathjen/book.pdf), book draft (version of 19 of August 2010), available online.
* Awodey, S., [Algebraic Set theory](http://www.phil.cmu.edu/projects/ast/), Carnegie Mellon.
* Jeon, H., Matthews, R., m.s., “[Very large set axioms over constructive set theories](https://arxiv.org/abs/2204.05831)”, manuscript at arxiv.org.

[Please contact the author with further suggestions.]

## Related Entries

[Brouwer, Luitzen Egbertus Jan](https://plato.stanford.edu/entries/brouwer/) | [category theory](https://plato.stanford.edu/entries/category-theory/) | [choice, axiom of](https://plato.stanford.edu/entries/axiom-choice/) | [logic, history of: intuitionistic logic](https://plato.stanford.edu/entries/intuitionistic-logic-development/) | [logic: intuitionistic](https://plato.stanford.edu/entries/logic-intuitionistic/) | [mathematics, philosophy of](https://plato.stanford.edu/entries/philosophy-mathematics/) | [mathematics, philosophy of: intuitionism](https://plato.stanford.edu/entries/intuitionism/) | [mathematics: constructive](https://plato.stanford.edu/entries/mathematics-constructive/) | [paradoxes: and contemporary logic](https://plato.stanford.edu/entries/paradoxes-contemporary-logic/) | [proof theory](https://plato.stanford.edu/entries/proof-theory/) | [semantics: proof-theoretic](https://plato.stanford.edu/entries/proof-theoretic-semantics/) | [set theory](https://plato.stanford.edu/entries/set-theory/) | [set theory: alternative axiomatic theories](https://plato.stanford.edu/entries/settheory-alternative/) | [set theory: early development](https://plato.stanford.edu/entries/settheory-early/) | [set theory: non-wellfounded](https://plato.stanford.edu/entries/nonwellfounded-set-theory/) | [type theory](https://plato.stanford.edu/entries/type-theory/) | [type theory: intuitionistic](https://plato.stanford.edu/entries/type-theory-intuitionistic/)

### Acknowledgments

I thank Andrea Cantini, Michael Rathjen and Peter Schuster for valuable comments on an earlier version of this entry. My thanks also to the referee for helpful suggestions and to the editors for their useful comments and their kind assistance with the html files.

[Copyright © 2024](https://plato.stanford.edu/info.html#c) by  
[Laura Crosilla](https://sites.google.com/view/lauracrosilla/home) <[*laura.crosilla@gmail.com*](mailto:laura%2ecrosilla%40gmail%2ecom)>
