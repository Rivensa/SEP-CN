# 数学哲学中的演绎主义 deductivism in the philosophy of mathematics (Alexander Paseau and Fabian Pregel)

*首次发布于 2023 年 8 月 25 日*

演绎主义认为数学句子 s 应被理解为表达了 s 从适当的公理演绎出来的主张。例如，演绎主义者可能将“2+2=4”解释为“句子‘2+2=4’从算术公理演绎出来”。演绎主义承诺了许多好处。它捕捉到了数学是关于“从公理中可以推导出什么”的相当普遍的观念；它避免了抽象数学对象的本体论；并且它坚持我们对数学真理的访问不需要超出我们进行逻辑推理的能力。第 1 和第 2 节更详细地定义和推动了演绎主义。第 3 节涵盖了一些曾经支持演绎主义的作者（Russell、Hilbert、Pasch、Curry）。第 4 节旨在澄清演绎主义者所做的语义主张。第 5 至 9 节回顾了对演绎主义的反对意见和可能的回应。



---

## 1. 简介

Deductivism is a philosophy of mathematics that was popular in the late nineteenth and early twentieth century. It understands a mathematical sentence s as expressing the claim that s deductively follows from appropriate axioms. For instance, deductivists might construe “2+2=4” as

> the sentence “2+2=4” deductively follows from the axioms of arithmetic,

or “2 is prime” as

> 数字 2 是质数的推论是从算术公理中推导出来的，

或者以非算术的例子来说，"每个群 G 都有唯一的单位元"这个句子是从群论公理中推导出来的。

> 数字 2 是质数的推论是从算术公理中推导出来的。

演绎主义者因此拒绝数学的表面句法。他们不认为“2 是质数”是将一个属性（质数性）归属于一个实体（数字 2）；对他们来说，它表明句子“2 是质数”是从一些公理推导出来的。

本条目将评估演绎主义的优点和缺点，讨论它在二十世纪初的全盛时期，并将其与当代结构主义的版本进行比较。

## 2. 动机

演绎主义对于许多原因来说都是有趣且重要的。首先，它在数学中具有无可争议的重要性。数学家只有在证明了一个结果之后才认为它是确立的。自然而然地，我们会探索如果我们进一步采取数学真理不仅仅是确立，而是由（可能尚未知晓的）证明的存在所构成，会发生什么。

其次，许多数学家声称相信演绎主义或类似的观点（Maddy 2022: 9）。询问数学家他们的学科是关于什么，至少有些人会回答说它是关于“可以从公理中推导出什么”。当然，这样的口号并不是一个完整的哲学观点，更多地是在对话中遇到而不是在印刷品中遇到。然而，如果这个口号和背后的情感指向任何具体的哲学观点，那肯定是演绎主义。此外，大多数数学的部分都被明确理解为探索规定公理的后果，演绎主义以自己的方式解释并推广到所有数学。不仅如此，正如第 3 节将简要记录的那样，从 19 世纪末到 20 世纪初，许多有影响力的数学哲学家都是演绎主义者或可以被解释为演绎主义者。

第三，这可能在一定程度上解释了第二点，演绎主义被视为在哲学上“干净”（Rheinwald 1984: 49）或者是“避免哲学陷阱”的一种方式（Maddy 2022: 9）。在认识论方面，演绎主义的主要任务是解释演绎逻辑的认识论，没有进一步的特定数学认识论问题。在形而上学方面，演绎主义的解释似乎不预设任何抽象的数学对象，这常常被视为有问题的。演绎主义的另一个优点是它尊重数学的假定客观性，因为从公理中推导出的结果是客观的，与我们无关。此外，演绎主义似乎提供了一个有前途的应用解释：每当你找到一个满足特定数学分支公理的物理系统时，该分支的定理必须适用于该系统。（我们将在下面回到这些所谓的吸引力。）

第四个也是最后一个原因是演绎主义和结构主义是相关的。事实上，一些人（例如，Bostock 2009: 183）认为演绎主义是淘汰性结构主义的一种句法版本。而结构主义，以其各种形式和各种问题，尽管如此，仍然是当今市场上最有吸引力的数学形而上学之一。[2]

演绎主义和淘汰性结构主义具有一些共同特点。粗略地说，两者都将数学命题 p 理解为“公理蕴含 p”（其中“公理”可以理解为相关数学分支的公理或其他方式——有关演绎主义的不同版本，请参见§4）。演绎主义将相关蕴含理解为演绎的，淘汰性结构主义将其理解为语义的。对于演绎主义者来说，相关的蕴含或推理概念是句法的，逻辑中用“⊢”表示；说Γ⊢δ是说在某个指定的演绎系统中，从Γ可以推导出句子δ。对于淘汰性结构主义者来说，相关的蕴含或推理概念是语义的，逻辑中用“⊨”表示。例如，淘汰性结构主义者将“2+2=4”解释为关于满足算术公理的任何结构中的命题。[3]

然而，当我们深入细节时，一些明显的差异就显现出来。演绎主义者认为数学命题是关于句子的，而淘汰性结构主义者认为它们是关于结构的概括。与演绎主义者不同，淘汰性结构主义者因此需要向我们解释结构的形而上学。淘汰性结构主义者通常还将他们的解释与存在主张相结合，即某种合适的结构存在（或可能存在），而演绎主义者通常省略了公理一致性的相应主张。淘汰性结构主义的一个著名版本，由 Putnam（1967b）首次提出并由 Hellman（1989）发展，是模态的，而演绎主义通常不是模态的。（尽管请参见§5，了解如何用原始模态运算符来阐述演绎主义。）最后，淘汰性结构主义只是当今众多形式的结构主义之一。其中一些，例如 Hellman 的版本，与最接近演绎主义的淘汰性结构主义有很多共同之处；而其他一些，例如 Shapiro 的 ante rem 结构主义（Shapiro 1997），则不太相似。

尽管存在一些明显的历史和哲学上的连续性，但这两者之间仍然存在一些差异，因此清楚地了解演绎主义的缺陷可以帮助我们更好地欣赏广义结构主义方法的优点。确实可以肯定的是，在哥德尔于 1929 年发表一阶逻辑的完备性定理之前（随后一年以论文形式发表），人们并没有清楚地理解演绎主义和消除式结构主义之间的差异。这一点将在历史的第 3 节中进行说明。哥德尔于 1931 年发表的第一不完全性定理也与这个故事相关，它将成为对演绎主义的一个关键反对意见（第 9 节）[4]。

最后一个联系点是，当背景逻辑可公理化时，消除式结构主义和演绎主义提供了数学真理的等价扩展解释[5]。简单的原因是，对于可公理化的逻辑，如一阶逻辑，语义蕴涵与演绎推理在外延上是等价的。因此，假设你在数学哲学中倾向于消除式结构主义，并将一阶逻辑作为默认逻辑[6]。那么，当且仅当（一阶）演绎主义者这样做时，你将认为 p 是一个数学真理。避免“陷入演绎主义的语义等价”正是 Hellman 选择了第二阶框架来构建他的消除式结构主义的模态版本的原因之一（Hellman 1989: 18-19）。然而，正如前面所解释的，即使在它们共享的背景逻辑可公理化的情况下，消除式结构主义和演绎主义也不具有比这个外延等价更强的等价关系。

术语说明：演绎主义有时被称为“如果-那么主义”。然而，“如果-那么主义”更像是一个属于演绎主义和消除式结构主义的句法和语义种类的属属。Rheinwald（1984: 49）将“蕴涵主义”用于属的名称，将“句法蕴涵主义”用于演绎主义，将“语义蕴涵主义”用于结构主义。这种术语管理方式既涵盖了属和种，又具有很高的透明度。本条目坚持使用“演绎主义”和“结构主义”这两个种的名称，因为这些名称在今天更常用（而且更短）。

## 3. 历史记载

本节涵盖了四个关于演绎主义的历史记载，分别是由罗素（§3.1）、希尔伯特（§3.2）、帕什（§3.3）和柯里（§3.4）提倡的。前三个是哥德尔之前的；第四个是哥德尔之后为捍卫演绎主义而做出的尝试。

将演绎主义归因于早期作者比起初看起来更加困难，现有的文献没有以比较的方式尝试这样做。这个困难归因于几个混淆的因素。主要的一个是，在哥德尔之前，语义和句法蕴涵之间没有明确的区别。术语上的混淆也没有帮助：例如，柯里将他的演绎主义称为“形式主义”，这个标签通常是用来表示另一个立场的。因此，本文着重于对作者实质性主张的分类。与布劳尔（§3.5）的比较也是相关的，布劳尔强调数学中的证明，但并不是演绎主义者。

### 3.1 罗素

罗素的《数学原理》于 1903 年出版。该书的第一句话包含了罗素对数学的信条：

> 纯数学是所有形式为“p 蕴含 q”的命题的集合，其中 p 和 q 是包含一个或多个变量的命题，在这两个命题中变量相同，而且 p 和 q 都不包含除逻辑常量之外的任何常量（罗素 1903 [2009: 3]）。

看起来很奇怪，命题 p 和 q 被认为至少包含一个变量。然而，根据罗素的观点，即使是“1+1=2”也包含了变量，一旦完全明确了——即“如果 x 是一个，y 是一个，并且 x 与 y 不同，那么 x 和 y 就是两个”（罗素 1903 [2009: 6]）。

罗素的信条是演绎主义还是结构主义，或者两者的混合物？在 20 世纪之交，没有人清楚地区分语义学和句法学，罗素也不例外。这导致普特南声称罗素真正考虑的是我们的术语中的消除性结构主义。（普特南将他归因于罗素的结构主义称为“如果-那么主义”；如第 2 节所解释的，本条目避免使用这个术语。）他敦促：

> 他的意思当然不是数学中的所有良好形式的主要连接词都是“蹄铁”！而是数学家的任务是展示如果存在满足某些公理（例如群论的公理）的结构，那么该结构还满足某些其他陈述（群论或其他定理）（普特南 1967a [1975: 20]）。

但是，普特南对罗素的结构主义解释是有争议的，尤其是因为结构主义的阅读似乎明确地与几个段落的演绎措辞相矛盾（Kraal 2014: 1498）。例如，以上述方式定义纯数学后，罗素继续断言，

> 通过十个演绎原则和其他十个一般逻辑性质的前提（例如，“蕴含是一种关系”），所有数学都可以严格和形式化地推导出来；所有出现在数学中的实体都可以用上述二十个前提中出现的实体来定义（Russell 1903 [2009: 3]）。

这里明显强调的是演绎。

证明上述推导性主张是《数学原理》（罗素 1903 [2009: xiii]）的陈述目标。与当时的其他人一样，罗素倾向于假设逻辑蕴涵是一种演绎关系。因此，即使他并没有明确区分语义和语法的意图，因为他历史上并没有处于这样的位置，他的信条与逻辑与演绎蕴涵的等式相结合，使他致力于演绎主义。因此，《数学原理》的关键教义更可理解为演绎主义的一种版本，而不是消除结构主义。[7]

### 3.2 希尔伯特

罗素的其他同时代人也显示出演绎主义倾向。Resnik 将希尔伯特在 1900 年左右的工作归类为“演绎主义时期”（1980: 105）。然而，当时的希尔伯特一方面支持现在可以分开的演绎主义，另一方面支持某种形式的原始结构主义。他没有像我们今天那样区分这两者，因为他假设完全的公理化和证明系统是可用的。

考虑希尔伯特的 1900 年关于“数的概念”。在引言中，希尔伯特宣称他打算将几何学中已知的公理方法应用于数的概念（1900a: 181）。他将公理方法与当时文献中常见的临时方法进行对比。他的公理方法的目的是实现“我们理解的内容的最终呈现和逻辑确定性”（同上）。他首先列出了实数的十八个公理。举个例子，第一个公理是

> 从数 a 和数 b 通过“加法”得到一个特定的数 c，形式上表示为：a+b=c 或 c=a+b。（1900a: 18）

然后希尔伯特断言，关于实数的命题只有在有限步骤内可以从公理集中证明时才是有效的（1900a: 184）。

这种坚持的原因在他同年在巴黎国际数学家大会上的著名演讲中得到了解释（发表为“数学问题”）。在这里，希尔伯特表达了“绝对的信念”，即任何数学问题，无论多么困难，都必须能够“通过有限数量的纯逻辑步骤”来解决（1900b: 261）。他坚持认为，这种信念是所有数学家共享的，并且是一种重要的动力来源；但他也指出，我们没有证据证明有限可导性的主张是真实的（1900b: 262）。尽管没有这样的证明，他认为这种信念是工作数学家的自然工作方式。在《数学问题》中，希尔伯特还坚持认为，就数学中引入的新概念而言，为了使它们在推理中有用，需要对这些概念进行公理化：

> [它们的引入] 使数学研究与新概念相关的原则，并以一种简单而完整的公理系统来固定它们，以使新概念及其在推理中的可用性不逊于旧的算术概念（1900b: 259，我们的翻译和强调）

在强调演绎框架的重要性的同时，希尔伯特也支持原始结构主义的观点。他提到“思考一组对象”，说我们“称这些对象为数字”并“用 a、b、c 表示”（1900a: 181）。例如，在与弗雷格的一年前的通信中，希尔伯特指出

> 例如，不要考虑点，而是考虑一个满足所有公理的爱、法律、烟囱扫除等系统；那么勾股定理也适用于这些事物。任何理论都可以应用于无限多个基本元素系统。（1899 年 12 月 29 日的信件，Frege 1976 [1980: 42]）

希尔伯特通过依赖完备性假设在演绎主义和原始结构主义之间灵活转换。例如，在他写给弗雷格的 1899 年 12 月 29 日的信中，他表示，如果公理系统中的公理不相互矛盾，

> 那么它们是真实的，公理所定义的事物是存在的。对我来说，这是真实和存在的标准。（1899 年 12 月 29 日的信件，Frege 1976 [1980: 42]）

注意，希尔伯特并不认为公理在有模型的情况下是真实的 - 一致性和模型存在仅在公理系统完备时等价。

当时，希尔伯特坚定地支持两种观点。两者都认为数学命题是由公理推导而来的，因此是真实的。一种观点是数学的有效性取决于能够从有限数量的公理中用有限步骤推导出来。另一种观点是数学不涉及具体的对象，而是由公理来定义数学真理（在特定领域内）。

我们还可以观察到罗素和希尔伯特的演绎主义之间的差异。罗素主张数学真理是由逻辑推导而来的，而希尔伯特主张数学真理是由公理推导而来的。

> 数学中出现的所有实体都可以根据上述二十个前提来定义，

罗素将演绎主义与任何公理和定理中的非逻辑词汇最终可消除的主张紧密联系在一起（1903 [2009: xliii]）。因此，罗素将演绎主义与逻辑主义的核心原则相结合，即非逻辑术语可以由逻辑术语来定义。

相比之下，对于世纪之交的希尔伯特来说，我们推导中的数字和其他非逻辑术语（我们可以称之为如此）仍然是原始的。虽然它们不能被消除，但它们是通用的。希尔伯特要求我们想象“一个我们将称之为数字的事物系统”（希尔伯特 1900a: 181）。然后，公理提供了“数字的精确而完整的描述”和“相互关系”（希尔伯特 1900a: 181）。正如他曾经形象地说过，“人们必须能够在任何时候说——而不是点、直线和平面——桌子、椅子和啤酒杯”（肯尼迪 1972: 133）。在这里，希尔伯特的立场实际上源自帕什。帕什称他的方法为“形式主义”，并坚持认为，如果基本概念在整个过程中被任何概念或无意义的符号所替代，数学证明必须保持有效（Schlimm 2010: 103）。

### 3.3 Pasch

这使我们想到了莫里茨·帕什（Moritz Pasch）本人，他是罗素（Russell）和希尔伯特（Hilbert）的另一位同时代人，他捍卫了一种演绎主义的风格。帕什以他在 1882 年的《关于新几何的讲座》中对几何学的公理化而闻名。在 1882 年的第一版中，以及在 1926 年的第二版中，有一段关键的文字如下：

> 实际上，如果几何学要真正成为演绎的，那么演绎必须在几何术语的含义之外独立存在，就像它必须独立于图表一样；只有在使用的定理和定义中规定的几何术语之间的关系可以被考虑。在演绎过程中，思考几何术语的含义是被允许和有用的，但并不是必要的；事实上，如果必须这样做，这就表明了演绎中的缺陷，甚至是证明中所引用的定理的不足之处（1882/1926，我们的翻译和强调）[8]。

这段文字有两个作用：一是坚持认为几何术语的含义在最严格的几何学中没有任何作用；二是强调证明。因此，它可以被视为主张演绎主义或可能是形式主义。“形式主义”在这里指的是有时被称为“游戏形式主义”的观点，即数学只是按照定义好的规则进行符号游戏。然而，帕什的其他文章更倾向于演绎主义的解释：

> 数学是一个必须明确区分的两个部分的系统。第一个部分，即真正的数学部分，完全致力于演绎。第二个部分通过引入和阐明一系列洞察力来使演绎成为可能，这些洞察力将作为演绎的材料，并在演绎部分需要时准备新的材料。这个第二部分相对于真正的数学部分来说较小，可以称为前数学部分，而我可能会将另一个部分称为刚性部分，因为它形成了一个以其推理规则的绝对严谨性为特征的结构。虽然忽视这些规则的严谨性是很诱人的，但这并不会使它们变得不严谨。刚性部分就是我所说的真正的数学部分。它通过数学证明和数学定义进行推进。（帕什 1918 [2010: 51]，我们的强调）

帕什因此区分了数学和我们可以称之为“前数学”。数学完全是演绎的，而前数学则用于激发“演绎的材料”。数学“使前数学相形见绌”，并以“其推理规则的绝对严谨性”为特征，这就是为什么帕什称之为“刚性”的原因（starr）。根据上述和其他段落，帕什可以合理地被归类为演绎主义者。

Pasch 对于推理主义者可以采用的所有可能公理集合中，什么是“好”的公理集合有着与 Hilbert 明显不同的观点。Hilbert 对这个问题的回答预示了他未来形式主义的发展。在《关于数的概念》中，他认为，一旦公理集合的一致性得到证明，对于数的概念的存在的任何进一步怀疑“就失去了所有的理由”（Hilbert 1900a: 184）。在经典逻辑中，一致性是一个好的公理集合的必要条件，因此所有基于经典逻辑的推理主义都会采用它。但是，一致性是否也足够是各种推理主义可能存在分歧的问题。从现代的角度来看，我们可以将足够性的主张理解为：在没有完备性证明的情况下，一组公理的一致性通常并不意味着它们具有模型。具体来说，让 PA2 表示二阶 Peano 公理集合，Con(PA2)表示 PA2 的一致性陈述。由于哥德尔的第二不完全性定理，PA2⊬Con(PA2)，所以 PA2∪{¬Con(PA2)}在 PA2 一致的情况下也是一致的。然而，PA2∪{¬Con(PA2)}没有模型，因此在传统的语言-世界观下，公理系统的语言并没有指向世界中的任何事物。但对于一个主张只有一致性重要的推理主义者来说，所谓成功的指称的缺失并不重要。

Pasch 的推理主义与 Hilbert 的区别在于 Pasch 同时坚持了关于公理的经验主义（Schlimm 2010: 95–96）。他认为公理应该有独立的经验基础（“上述的预数学部分”）。例如，Pasch 承认几何学可能存在其他一致的公理集合，但他认为在没有经验基础的情况下，这样的系统只是“假设几何学”（1917 [2010: 46]）。特别是，Pasch 认为，在这样的几何学中推导出的假设性句子可能缺乏适用性（1917 [2010: 46]；Schlimm 2010: 101）。

### 3.4 Curry

Haskell Curry 在他的 1951 年《形式主义数学哲学概要》中捍卫了一种更近期的演绎主义版本。他认为，“数学是形式系统的科学”（1951: 56）。对于 Curry 来说，形式系统应该从演绎的角度来理解——它们由形式语言、公理和推理规则组成，称为“程序规则”（1951: 11–13）。在不完备性被发现之后，Curry 对其影响有以下看法：

> 不完备性定理[…]表明找到一个包括所有通常理解的数学的单一形式系统是没有希望的。此外，构成形式系统原始框架的定义的任意性表明，原则上所有形式系统都是平等的。因此，数学的本质不在于任何特定类型的形式系统，而在于形式结构本身。（Curry 1951: 56）

Curry 将他的观念称为形式主义。但是，通过形式主义，Curry 只是指可以在形式系统中推导出什么的科学。形式主义和演绎主义（如本条目所理解的）在关注语法而非语义方面相似。然而，演绎主义认为数学命题具有真值条件，而不像游戏；它只认为逻辑推理是可允许的，而形式主义原则上可以容忍任何符号推导实践。与形式主义解释相反，Curry 在他的著作中广泛使用真理概念，并拒绝将形式系统视为一种游戏：

> 必须有一个客观的真理标准，数理逻辑学家的首要任务是找到它。本书的第一个论点是这样的定义是可以找到的。(1951: 3)
>
> 在我们继续讨论数学形式主义定义之前，有必要考虑其基本概念的定义，即形式系统的概念。[...] 这里阐述的概念与通常的概念有些表面上的不同之处，因为这样的系统被构想为一组命题，而不是一个游戏。[...] 第一点是，以下使用的“命题”、“真实”、“谓词”等词语是以普通话语的意义来理解的。[...] [命题] 指示了一些验证条件；当命题被断言——被视为真实——这意味着这些条件得到满足，因此验证过程在本质上决定了命题的意义。(1951: 8)
>
> 对于数学而言，只需要有识别形式系统的标准以及判断哪些命题是真实的即可。(1951: 31)

根据 Curry 的观点，这种观点的主要优势之一是没有形而上学的推测，这是演绎主义的一个关键动机（见§2）：

> 数学形式主义的概念因此不受形而上学的偏见影响，因此与几乎任何哲学观点都兼容。这是迄今为止唯一提出的具有这种特征的概念。（1951 年：58；我们的强调）

### 直觉主义和布劳尔

直觉主义有时与演绎主义并提。例如，柯里认为，如果我们从直觉主义中减去其形而上学，那么它与形式主义在数学真理定义上的差异是表面的。对于构造性方法的强调，希尔伯特的“有限立场”，递归定义和数学归纳，形式主义者和直觉主义者都在使用。（1951 年：58）

> 布劳尔的直觉主义与演绎主义有关，但在一个有趣的方面有所不同。简而言之，它们的相似之处和不同之处是什么？

Brouwer’s intuitionism is related to deductivism but differs from it in an interesting way. What, briefly, are the similarities and differences?

在他的剑桥讲座中，布劳尔否定了“通过逻辑公理进行数学创造”（1981 年：7）。对他来说，“所有公理都变得虚幻”（1981 年：92）。布劳尔在这里的目标是他所称的“旧形式主义学派”，其中包括戴德金德、皮亚诺、罗素和希尔伯特，他努力与之保持距离。对于布劳尔来说，“数学命题的真假标准”不是推理，而是“数学活动本身”（布劳尔 1981 年：92）。相关的活动是提供一个构造的过程。因此，对于直觉主义者来说，真理和谬误被替换为直觉上可接受的构造的存在或不存在（布劳尔 1981 年：92）。

构造是一系列的心理行为；因此，它们与证明是适当连接的句子序列不同。对于布劳尔来说，直觉主义的第一个行为是完全将“数学与数学语言以及由理论逻辑描述的语言现象”分离开来（1981 年：4）。对于布劳尔来说，没有任何语言的记录或言述能够传达直觉中构造的真实本质。数学与语言和逻辑的分离是布劳尔直觉主义的基石，这使其与演绎主义有了明显的区别。

话虽如此，直觉主义与演绎主义有一些相似之处。一个显著的相似之处是用基于验证的方法替代了数学中通常的指称真理观：演绎主义是通过证明来实现这一点，直觉主义是通过构造来实现。直觉主义逻辑的发展揭示了一个重要事实：演绎主义并不与任何特定的形式系统相联系。它可以基于经典逻辑，也可以基于海廷的直觉主义形式系统，或者是一些第三种选择。[9]

## 4. 意义至关重要

我们在第 3 节中概述了对演绎主义的历史支持。在第 5 至 9 节中，我们考虑了它所面临的一些挑战。在本节中，我们的目标是更清楚地阐明演绎主义者所提出的语义主张。

第一点是我们将演绎主义描述为“理解”或“解释”或“表达”数学句子 p 为“Ax⊢p”。这种描述故意保持中立，可以有两种更精确的解读。一种是演绎主义者认为他们的解释捕捉到了数学陈述的普通口语意义[10]。另一种是他们并不希望这样做，而是希望提供一个符合哲学标准的数学重建。这样的标准可能包括与通常理解的数学话语接近，但通常这不会是一个主要因素。其他标准将包括提供一种有吸引力的形而上学、认识论和数学应用解释。本条目将在这一点上保持中立，但应注意的是，第一种方法面临着相当大的证明负担：没有明显的理由认为我们实际上是以演绎主义的方式说话。

第二点是演绎主义者必须提供比简单地声称数学句子 p 应被解释为 "Ax⊢p" 更多的内容。首先，她对数学的（意义捕捉或重建）语义不能仅限于句子层面，而必须也适用于单词。例如，演绎主义者必须给出一个与她对 "2 是质数" 解释为 "Ax⊢2 是质数" 一致的 "2" 和 "是质数" 的语义解释。

其次，她必须解释涉及数学陈述的言语行为。自然而然地，我们可以假设她将 "569 是质数" 的断言解释为 "Ax⊢569 是质数" 的断言。同样，对于许多命题态度，也是如此：对于演绎主义者来说，我们通常描述的对于 569 是否是质数的疑惑应该被理解为对于公理是否演绎地意味着 569 是质数的疑惑；我们通常描述的对于 569 是否是质数的怀疑应该被理解为对于公理是否演绎地意味着 569 是质数的怀疑；等等。一个初步的建议可能是，演绎主义者应该认为 "Ax⊢" 在力操作符（断言、疑惑、怀疑等）上具有狭义范围。

这两个任务——为数学语言提供单词层面的语义和解释涉及数学句子的言语行为——似乎都不是完全简单的。对于第一个任务，演绎主义者对数学语言的解释必须允许其在经验背景下用于直接的字面意义的陈述。例如，"观众中有 569 人" 应该被理解为对一个物理情境的直接陈述，而不是从公理中隐含的暗示。对于演绎主义者来说，这是 "569" 的一种与纯数学不同的使用方式。第 8 节讨论了演绎主义者的应用问题（尽管是在句子层面而不是单词层面）。

至于第二点，演绎主义者并不总是希望以相同机械的方式应用“Ax⊢”-takes-narrow-scope 策略。以假设证明为例，我们首先假设 p1，并通过 p2，…，pn−1 推导出 pn。我们最初的假设 p1 可能是 m 是一个奇完全数，而最后一行 pn 可能是关于任何这样的 m 的一些有趣事实。很明显，“assume”在这里是否采用广义范围，而“Ax⊢”采用狭义范围并不明显。因为如果是这样，“Assume p1”将被解释为“Assume Ax⊢p1”，直观上这是一个不同的主张。从更技术的角度来看，由于 m 在 Ax 中没有自由出现，似乎我们可以推广得到“Ax⊢∀mp1”。如果是这样，“假设 Ax 证明 m 是一个奇完全数”意味着“假设 Ax 证明对于每个 m，m 是一个奇完全数”。但是后者的假设是一个彻头彻尾的错误主张。一个更有希望的方法是将假设中的第一步视为允许我们将 p1 添加到公理集中，并将第二行解释为“Ax+p1⊢p2”（或通过演绎定理的等价形式“Ax⊢p1→p2”），第三行解释为“Ax+p1⊢p3”（或“Ax⊢p1→p3”），依此类推。总之，演绎主义者在这方面还有工作要做，将这些思想阐述为一个连贯的理论。

第三点基于帕森斯（Parsons）（2008: 55 n. 35）对所谓的自反和非自反演绎主义的区分。正如本条目所定义的那样，演绎主义是自反的，因为它将 p 解释为“Ax⊢p”。相比之下，非自反演绎主义将 p 解释为“if ∧Ax then p”（∧是一个将公理集中的所有元素连接起来的运算符），并断言这个条件是演绎逻辑真理。莱茵瓦尔德（Rheinwald）（1984: 50）选择了前者，自反形式，就像我们一样。帕森斯评论莱茵瓦尔德，主张采用后者，非自反形式。因为在他看来，自反形式在数学陈述的内容中引入了一个非必要的反思要素-明确提及公理，而他认为数学陈述中缺乏这种要素。帕森斯有一定道理，特别是如果演绎主义的目的是捕捉含义。即便如此，本条目将演绎主义视为自反的，以避免非自反演绎主义在公理集是无限的情况下面临的问题，例如在一阶皮亚诺公理的情况下。因为在这种情况下，“if ∧Ax then p”的句子是无限长的，因此不是普通语言的句子。相比之下，“Ax⊢p”是（数学）英语的普通句子，其中“Ax”是一个表示相关公理集的名称。话虽如此，非自反演绎主义可能更适合处理演绎主义面临的一些问题。

第四个也是最后一个观点。到目前为止，这个条目对于陈述演绎主义的公理“Ax”是什么保持中立。一个“局部”的演绎主义者，如第 1 节所示，将一个数学分支的定理演绎地基于该分支的公理，例如，将算术定理基于皮亚诺算术的公理。另一种演绎主义可能基于数学的某个特定的所谓基础，比如 ZFC 集合论的公理。因此，一个 ZFC 演绎主义者将数学命题 p 理解为“p 从 ZFC 公理演绎出来”。选择 ZFC 并不是必要的：如果演绎主义者偏好的基础不是 ZFC，而是其他集合论、拓扑学或其他完全不同的理论，他们可以基于那个理论来建立他们的演绎主义。比这个更宽松的第三种演绎主义形式可以称为“无论如何演绎主义”。在这种观点中，构成数学真理的可证明性公理不是一个特定的集合，比如 ZFC 公理，而是更模糊地描述：它们是证明数学定理所需的任何公理。这个最后的版本相对于第二个版本的优点在于它没有将可证明性（可能是人为地）与单一的基础系统联系起来。然而，它以相当的不精确为代价。[11]简而言之，不同形式的演绎主义源于对演绎主义的经典陈述中“Ax”的不同理解。

## 5. 可证明性：实体化还是不实体化？

本条目的其余部分将在第 5 至 9 节中讨论对演绎主义的五个挑战，每个挑战占据一节。第一个挑战涉及可证明性的概念。由于演绎主义声称数学是关于在某些公理系统中可证明的内容，因此提供可证明性的解释对于演绎主义至关重要。问题是是否将可证明性解释为证明的存在与否。简而言之，实体化还是不实体化？

首先采取具体化的方法。它将“p 是从公理 Ax 可证明的”解读为“存在一个从公理 Ax 推导出 p 的证明”（在特定的演绎系统中理解）。这是最自然和最标准的可证明性理解。根据这种方法，说一个系统 T 是一致的就是说在 T 的语言中不存在一个公式ϕ，使得从 T 中存在一个ϕ的证明和一个¬ϕ的证明。然而，有些公式和证明太长了，无法具体化为物理实例；一个简单的例子是涉及极大数的数值方程的证明。即使是具体化的公式也不应该与其中的一个具体化或其具体化类别等同。换句话说，这里理解的证明是类型而不是标记：符合演绎系统规则的抽象字符串，无论在言语、白板、纸张还是屏幕上的任何物理实例都存在。实际上，如果演绎主义者希望保留对理论的引用能力，她肯定会希望这样做，她将不得不接受语言类型。 （与类似 Field 的名义主义者相比，他们也必须引用科学和数学理论，即使他们试图避免引用数学对象。）

结论是，演绎主义者将不得不承认语言类型。她作为演绎主义者的动机因此不能是为了避免所有抽象对象（即名义主义），因为语言类型是抽象的。因此，她必须解释为什么承认一些抽象对象（如类型）是可以接受的，而承认数学对象则不是。她可能会指出经济性的考虑：语言类型只是抽象领域的一小部分。或者她可能在认识论上争辩说，语言类型更容易被知晓，因为它们具有具体的实例，而数学对象则没有。然而，文献中对于那些拒绝抽象数学对象的人也应该拒绝抽象语言类型的论据并不少见；例如，参见 Wetzel 的 2009 年著作《类型和标记》。

当然，一个人之所以成为演绎主义者，并不一定是因为对抽象对象的厌恶。正如我们在第 4 节中所看到的，一种演绎主义者可能认为语义分析揭示了数学陈述的含义是“p 从公理中演绎出来”。将这种观点与接受抽象对象和以存在证明为基础的演绎推论的标准解释相结合是完全一致的。然而，尽管完全一致，这种观点似乎缺乏独立的动机。

可见，与具体化相反的选择是不具体化，而最明显的方法是采用模态路径。推理主义者可以将可证性视为模态原始概念，而不是通过证明存在来兑现可证性。逻辑可能性和必然性通常是以模型论方式理解的：当某个陈述在某个模型中为真时，它就是逻辑上可能的或一致的；当某个陈述在所有模型中为真时，它就是必然的。推理主义者必须放弃这种一致性的解释（她将其等同于逻辑可能性），否则将重新引入元理论中的数学。与主流的模型论解释相对立，她必须将“逻辑上可能”视为一个原始概念，并放弃用模型来分析它（Putnam 1967b）。这样做，她就和所有无法在元理论中使用模型论或集合论的反实在主义者一样。这艘特殊的船上人满为患：不仅有消除结构主义者，还有各种形式主义者和名义主义者。例如，名义主义者不相信抽象对象的存在。因此，他们面临着同样的困境-他们无法在元理论中诉诸于模型的存在。Hartry Field（1991）发展了一种名义主义逻辑，将逻辑一致性视为原始概念，我们可以用⋄来表示，与之相关的逻辑必然性的概念为□。特别地，⋄T 是理论 T 在逻辑上一致的主张，而逻辑蕴涵的主张是以□为前缀的条件句。非具体化的推理主义者可以利用这些资源，并将 G⊢p 解释为□(∧G→p)。

像 Field 所提出的这种“模态主义”逻辑推理方式在逻辑学家中并不普遍接受。许多人认为没有太多理由将其优先于模型论的推理方式。模态主义的解释在表达能力上存在问题，因为它们无法对可能性进行量化；而且它们在理论上不如通常的模型论解释那样优越，因为它们假设存在集合模型和原始一致性事实之间的联系。Melia（2003）的第 4 章对于关于形而上学模态性的模态主义所面临的问题进行了清晰的概述，这些问题在逻辑情况中也有对应。如果非具体化的推理主义者选择这条路线，他们将不得不对这些挑战提出令人满意的回应。

## 6. 非公理化数学

对于演绎主义的第二个反对意见是，演绎主义无法解释非公理数学。[13] 这包括前公理数学，比如公元前二千年左右的“古巴比伦”数学，其中首要原则从未明确陈述（Robson 2008: 90）。[14] 但它也包括非演绎数学；例如，我们可能希望将十八世纪瑞士数学家欧拉归功于通过类比推理、广泛验证案例等方式获得的结果知识。

将数学知识归因于巴比伦数学家似乎是正确的，他们能够解决特定的二次方程等问题。然而，这个挑战可能并不令人担忧。首要原则虽然不明确，但并不意味着它们不存在。可以假设，巴比伦数学家愿意接受没有争议的任何数学原则都应该被视为首要原则或公理。独立于这一点，演绎主义者还应该指出，非公理方法可以产生知识，如果它们能够追踪到证明所能产生的结果。巴比伦数学家使用的方法可靠地产生了特定二次方程的解，即使他们不能表述，更不用说解决一般的二次方程了。欧拉的方法可靠地追踪到他的结果的证明的存在；如果不能，他就不会像他那样经常是正确的。这解决了绝大多数这样的情况。此外，思考剩余的情况，有一些理由认为非演绎推理即使在没有证明的情况下也能产生数学真理的知识（Paseau 2015）。

## 7. 一个回归？

我们现在转向第三个挑战。为了介绍它，考虑一下是否应该将演绎主义应用于诸如“2+2=4”这样的句子。

> 句子“2+2=4”从 Ax 中演绎出来（像往常一样，我们写 Ax 以保持对公理的确切性的中立性；有关选项，请参见第 4 节）。由于证明论似乎是像其他任何数学分支一样的数学分支，您可能会认为一位一致的演绎主义者应该将这个句子解释为任何其他数学句子一样。在这种情况下，“2+2=4”应该被解释为不是

(As usual, we write Ax to preserve neutrality on what the axioms are exactly; see [§4](https://plato.stanford.edu/entries/deductivism-mathematics/#MeanMatt) for the options here.) Since proof theory appears to be a branch of mathematics like any other, you might suppose that a consistent deductivist should construe this sentence like any other mathematical one. In which case, the sentence “2+2=4” should be construed not as

> 从 Ax 中可以演绎出“2+2=4”这个句子。

 但是实际上是

> 从 Ax'中可以演绎出“the sentence '2+2=4' deductively follows from Ax”这个句子。

（其中 Ax'可能与 Ax 相同也可能不同-这不会影响主要观点。）现在，如果一个演绎主义者要走这条路，她也必须像对待其他数学句子一样解释这个最后一句。因此，它应该以相同的方式进行注释。同样适用于结果的注释，如此无穷无尽。显然，我们陷入了无限回归。

看起来演绎主义者没有对句子“2+2=4”进行有限的表述。任何这样的表述都必须是无限的，而且，如果它最终结束，必须以一个句子 s 结束，该句子是这个迭代的“不动点”。换句话说，s 必须与“句子 s 从 Ax 演绎出来”（对于某个 Ax）完全相同（不仅仅是逻辑上等价），因为 s 被演绎主义者解释为

> 句子 s 从 Ax 演绎出来

是否存在这样一个句子是非常可疑的。即使存在，一个无限长的句子，带有无限多的嵌套，是一种荒谬复杂的解释“2+2=4”的方式，毕竟这是数学中最简单的句子之一，确实是英语中最简单的句子之一。

刚刚提出的反对意见是基于可证性主张是数学的观点。为了支持这个前提，反对意见的支持者可能会指出，证明论中的结果通常充满了数学。我们相信某个陈述在演绎系统中是可证的，通常不是因为我们自己进行了证明，从公理出发，应用推理规则推导出定理。相反，它通常是基于更抽象的数学推理。

演绎主义者应该如何回应这个挑战？她可以同意我们使用数学，有时甚至是相当复杂的数学，来确定从一些公理中演绎出什么。这是一个认识论的观点。但这并不影响她关于数学是什么的论点。对于演绎主义者来说，数学命题 p 的真实性在于它是一个适当的演绎系统 D 的定理。我们如何确定 D 的定理可能需要数学 - 这是将数学应用于证明系统的过程 - 以及其他机制，但这是一个认识论的观点。p 是 D 的一个定理这个事实是关于演绎系统的事实，即从公理开始，按照系统的规则进行推导，最终得出 p。正如演绎主义者所看到的 - 为了避免回归，她必须这样看待 - 这个事实并不是数学的，即使我们必须使用数学来确定它是否成立。（比较一下一个大型陨石将在 2050 年之前落在地球上的说法：这是一个物理事实，但我们使用复杂的数学来验证或证伪。）

简而言之，为了避免倒退，演绎主义者不应将他们的解释策略应用于演绎结论的主张。对于任何句子 s 和明确定义的演绎系统 D，D 是否证明 s 应该被视为一个确定的事实。这些事实是她哲学的基石，不应该被“演绎化”。与其将演绎主义者的配方应用于它们，我们必须直接接受它们的表面价值。[15]

## 8. 应用

第四个挑战涉及应用。第 2 节提到，演绎主义似乎能够对数学的适用性提供一个直接的解释：只要一个物理系统满足某个数学分支的公理，该分支的定理就必须适用于该物理系统。但是，一个系统满足公理是什么意思呢？最简单的应用解释是映射或同构解释。给定一个物理设置 P，规定一个从 P 到某个数学结构 M 的同构，推导出关于 M 的一些事实，然后，应用反向同构，从中读取关于 P 的相应事实。Resnik（1980 年，125 页），继续跟随 Russell 和 Putnam 的观点，担心这种解释深陷于数学之中——因为同构不就是一个数学对象吗？更一般地说，一个令人满意的数学应用解释将不得不运用数学来解释数学与物理世界的关系。[16]

这是一个重要的问题，适用于许多其他哲学。所有反柏拉图主义者必须说明如何理解用于解释数学适用性的数学本身。消除结构主义者必须解释数学如何将结构与物理世界联系起来。名义主义者同样必须解释科学理论如何能够正确地描述物理事实，尽管没有抽象对象。每种具体的反柏拉图主义似乎都面临这个普遍问题的某个版本。允许在元理论中使用数学使得哲学能够将数学与自然世界联系起来；禁止使用数学似乎会束缚哲学——或者至少是这个挑战的观点。

那么演绎主义者能够解释数学的适用性吗？也许她最有希望这样做的方式是通过一种综合的数学-科学“总体”理论，我们可以称之为 TT。TT 包含了所有数学公理，以及已建立的科学原理和数据。通过数学和科学的结合，TT 能够假设数学“结构”与物理情况之间的各种关系，并因此解释数学应用（至少与任何人一样好）。从 TT 推导出的物理命题的真值条件应该按照通常的指称方式理解，即与物理世界相关；而对于演绎主义者来说，数学命题的真值条件应该如上所述理解，即作为“p 可以从 TT 推导出”的命题。对于演绎主义者来说，“结构”和“同构”应该在理论 TT 中以演绎方式理解。实际上，演绎主义者将模型论内化到演绎框架中。

这种回应似乎解决了数学应用的挑战。数学和科学可以在单一的总体理论 TT 中进行讨论和比较。然而，这种回应有一个致命弱点：混合陈述。演绎主义者以演绎方式解释数字的讨论，以直接的字面方式解释椅子（比如说）。那么她对于像“我最喜欢的东西是数字 7 和这把椅子”这样的陈述应该如何理解？这个陈述不能被字面意义上理解，因为它涉及对一个数字的引用；也不应该以演绎方式理解，因为它涉及对一个具体实体，一个特定的椅子的引用。椅子是我最喜欢的东西之一，这是一个具有经验内容的陈述，应该被字面意义上理解。当然，“我最喜欢的东西是数字 7 和这把椅子”只是一个玩具例子。这个观点更广泛地适用，因为数学与普通语言和（尤其是）科学语言紧密交织在一起。

因此，演绎主义者需要向我们提供一种方法，以在所有混合陈述中将数学与非数学区分开来。这是其他反实在论方法面临的问题，例如对数学的虚构主义者（如 Mary Leng）[17]。他们认为应用数学是一种将（所谓的）数学虚构与科学结合起来的“扩展虚构”，并且他们从字面上解释它（因为它涉及物理世界）。但是哪个是哪个，我们在哪里划定界限，以及如何处理混合虚构和字面上的陈述，这些问题似乎是无法分割的？对于演绎主义者来说，找到对应问题的好答案与虚构主义者一样具有重大挑战。

## 9. 真实完备性

我们转向对演绎主义的第五个也是最后一个挑战。其中一个版本是由 Michael Resnik 提出的[18]。考虑演绎主义的集合论 T 及其哥德尔句子 GT。根据构造，GT 无法从 T 中推导出来。因此，演绎主义者无法解释 GT 的真实性。Resnik 的回应是：演绎主义者可以简单地向反演演绎主义者提出挑战，要求她解释她如何“看到”GT 的真实性。无论反演演绎主义者提供什么数学论证，演绎主义者都可以从中提取出一个公理集 T+，并指出 GT 可以从 T+推导出来。反驳被挡回。

Gödel 的第一不完全性定理确实给演绎主义带来了一个重大问题；但它并不是刚刚提出并回应的那个问题。上述版本关注的是如何在给定一个特定的理论（T）的情况下，我们应该欣赏其 Gödel 句子（GT）的真实性。更强的反对意见以更全局的方式提出，并将 Gödel 句子的真实性问题放在一边。演绎主义似乎犯了一个错误，即它不尊重大多数数学领域作为真实完备的根深蒂固的理解：对于任何来自真实完备数学领域的明确定义的句子 p，p 和非 p 中只有一个是真的。分析和算术是通常被理解为真实完备的领域的例子。例如，人们通常认为像哥德巴赫猜想这样的陈述是真或假的，即使它从任何合理的公理中都无法证明，而不仅仅是现有的公理。[19]但在演绎主义观点中，任何算术和分析的形式化中的不可判定句子都是假的，它们的否定也是假的，因为它们都不能从公理中演绎出来。不可判定句子的存在是由于 Gödel 的第一不完全性定理和对演绎系统的标准约束。[20]因此，演绎主义错误地描述了我们对算术、分析和几何等真实完备数学分支的理解。

这个反对意见似乎影响到我们在第 4 节末尾确定的三种演绎主义变体中的两种：局部演绎主义和 ZFC 演绎主义。 Gödelian 反对意见不影响的一种演绎主义形式是构造主义演绎主义，因为构造主义者在数学中不假设排中律，因此不假设真实完备性。尽管如我们在布劳尔（第 3.5 节）的讨论中所看到的，构造主义者不倾向于成为演绎主义者。

坚持使用经典逻辑的演绎主义者可以通过理想化公理系统或证明系统或两者来回应这个反对意见。第一种方法是将“2+2=4”解释为：

> “2+2=4”这个句子是从算术的理想公理中演绎出来的

结果的立场本质上是无论如何都要演绎主义，如第 4 节所提到的。它在第 4 节中表达的立场上增加了一些细节，即根据规定，算术的理想公理产生了一个完备的系统，以克服目前的反对意见。（当然，无论如何都要演绎主义的非正式版本将完全回避这个反对意见，因为它不是基于一个形式系统。但批评者会反驳说，它之所以这样做，仅仅是因为它对数学真理的解释本质上是模糊的。）第二种方法可能会将证明系统包括无穷推理规则，例如ω规则，众所周知，如果将其添加到一阶 Peano 算术中，将恢复完备性。[21]

然而，以任何这些方式理想化演绎主义都不是为了拯救它，而是为了放弃它。任何一种一致、演绎完备且足够强大以捕捉数学真理的所有真理的组合公理和证明系统都缺乏有效的证明过程，这是哥德尔的第一不完全性定理所证明的。要看到这一点，考虑一下假设“系统”的演绎“定理”包括所有算术的真句子。[22]根据丘奇-图灵论题，这个“定理”的列表不能由任何机械证明过程（即算法）生成。因此，理想化的演绎主义实际上是伪装薄弱的结构主义，因为它主张将无论如何都要捕捉公理的结构内容的组合公理和证明系统作为系统。如果这个想法是数学家认为一个句子是真的，当且仅当它是结构特征公理的语义内容的逻辑结果时，那么应该坦白并接受演绎主义的语义对应物：消除性结构主义。明显的道德是，演绎主义陷入困境的原因是它关注的是语法。与其像 19 世纪末和 20 世纪初那样采取语法转向，而是将“数学陈述是条件性的公理”这个想法转化为语义形式。

归纳主义者可能会尝试另一种辩护。我们在§3.4 中引用了 Curry 的观点，即“所有形式系统都是平等的”。这无疑是许多归纳主义者会觉得有吸引力的想法：原则上，任何形式系统都是可以接受的，一个形式系统与另一个形式系统之间的差异是因为其中一个更适合应用，或者因为我们恰好使用其中一个系统等等。因此，对于归纳主义者来说，如果我们明确或隐含地接受的算术公理 Ax 是不完备的，那么任何由它们无法决定的算术句子 p 都既不是真的也不是假的，因为它的真值是相对于从 Ax 推导出来的可证性而言的。当然，我们可以通过一种方式加强 Ax 以推导出 p，通过另一种方式加强 Ax 以推导出非 p，在这些相应的加强中，p 将分别为真和假。这似乎是 Curry 对于归纳主义者应该如何应对哥德尔结果的建议。

由此产生的多元主义立场出于原则性的原因拒绝了真实完备性。但它仍然拒绝了真实完备性，这必须被视为一个重大的代价。因为算术的真实完备性是数学的一个基本承诺，并渗透到我们对自然数的大部分思考中。（类似的观点也适用于许多其他领域。）有人会说，尊重真实完备性是对数学哲学的一个不可谈判的约束。当然，真实完备性的反对只挑战了归纳主义在数学的某些领域中，特别是那些通常被认为是真实完备的但没有完全的、一致的公理化存在的领域。即使在一阶逻辑中，对于有限结构和一些无限结构，也可以提供一个完全的理论-公理化。因此，人们仍然可以尝试为所有其他领域辩护归纳主义。但是，拥有一个统一的数学哲学是非常有价值的。更重要的是，考虑到归纳主义的动机，如§2 所述，很难看出这种折衷的归纳主义的意义所在。

真实完备性给归纳主义者带来了巨大的挑战。为了满足这一挑战，她不能偏袒任何一个算术系统，认为“PA 是一致的”在一个系统中是真的，在另一个系统中是假的。后哥德尔时代的认识到，如果我们转向一个不可完全的语义推理关系，淘汰性结构主义在这里表现得更好，这导致了结构主义在二十世纪下半叶流行起来，而归纳主义则受到了损失。

## Bibliography

* Benacerraf, Paul, 1973, “Mathematical Truth”, *The Journal of Philosophy*, 70(19): 661–679. doi:10.2307/2025075
* Bostock, David, 2009, *Philosophy of Mathematics: An Introduction*, Chichester, UK/Malden, MA: Wiley-Blackwell.
* Brouwer, Luitzen Egbertus Jan, 1981, *Brouwer’s Cambridge Lectures on Intuitionism*, Dirk van Dalen (ed.), Cambridge/New York: Cambridge University Press.
* Burgess, John Patton, 1983, “Why I Am Not a Nominalist.”, *Notre Dame Journal of Formal Logic*, 24(1): 93–105. doi:10.1305/ndjfl/1093870223
* Curry, Haskell Brooks, 1951, *Outlines of a Formalist Philosophy of Mathematics*, (Studies in Logic and the Foundations of Mathematics), Amsterdam: North-Holland Publishing.
* Field, Hartry, 1991, “Metalogic and Modality”, *Philosophical Studies: An International Journal for Philosophy in the Analytic Tradition,* 62(1): 1–22.
* Frege, Gottlob, 1976 [1980], *Wissenschaftlicher Briefwechsel*, volume 2 of *Nachgelassene Schriften und Wissenschaftlicher Briefwechsel*, Gottfried Gabriel, Hans Hermes, Friedrich Kambartel, Christian Thiel, and Albert Veraart (eds), Hamburg: Meiner. Abridged version translated as *Philosophical and Mathematical Correspondence*, Brian McGuinness (ed.), Hans Kaal (trans.), Chicago: University of Chicago Press and Oxford: Blackwell.
* Gödel, Kurt, 1930, “Die Vollständigkeit der Axiome des logischen Funktionenkalküls”, *Monatshefte für Mathematik und Physik,* 37(1): 349–60. doi:10.1007/BF01696781.
* –––, 1931, “Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I”, *Monatshefte für Mathematik und Physik,* 38(1): 173–98. doi:10.1007/BF01700692.
* Hellman, Geoffrey, 1989, *Mathematics without Numbers: Towards a Modal-Structural Interpretation*, Oxford: Clarendon Press. doi:10.1093/0198240341.001.0001
* –––, 2021, “If ‘If-Then’ Then What?”, in his *Mathematics and Its Logics: Philosophical Essays*, Cambridge: Cambridge University Press, 237–255 (ch. 14).
* Hellman, Geoffrey and Stewart Shapiro, 2019, *Mathematical Structuralism*, Cambridge: Cambridge University Press. doi:10.1017/9781108582933
* Hilbert, David, 1900a, “Über den Zahlbegriff.”, *Jahresbericht der Deutschen Mathematiker-Vereinigung*, 8: 180–183.
* –––, 1900b, “Mathematische Probleme”. *Nachrichten von der Gesellschaft der Wissenschaften zu Göttingen, Mathematisch-Physikalische Klasse* 1900: 253–297.
* Kennedy, Hubert C., 1972, “The Origins of Modern Axiomatics: Pasch to Peano”, *The American Mathematical Monthly*, 79(2): 133–136. doi:10.1080/00029890.1972.11993005
* Kraal, Anders, 2014, “The Aim of Russell’s Early Logicism: A Reinterpretation”, *Synthese*, 191(7): 1493–1510. doi:10.1007/s11229-013-0342-9
* Leng, Mary, 2010, *Mathematics and Reality*, Oxford/New York: Oxford University Press. doi:10.1093/acprof:oso/9780199280797.001.0001
* Linnebo, Øystein, 2017, *Philosophy of Mathematics*, (Princeton Foundations of Contemporary Philosophy), Princeton, NJ: Princeton University Press.
* Maddy, Penelope, 2022, *A Plea for Natural Philosophy: And Other Essays*, New York: Oxford University Press.
* Melia, Joseph, 2003, *Modality*, (Central Problems of Philosophy), Montreal: McGill-Queen’s University Press.
* Parsons, Charles, 2008, *Mathematical Thought and its Objects*. Cambridge: Cambridge University Press.
* Pasch, Moritz, 1882/1926, *Vorlesungen uber neuere Geometrie*, first edition, Leipzig: B.G.Teubner. Second edition, (Die Grundlehren der mathematischen Wissenschaften in Einzeldarstellungen 23), Berlin: J. Springer.
* –––, 1917 [2010], “Grundfragen der Geometrie.”, *Journal für die reine und angewandte Mathematik*, 147: 184–190. Translated as “Fundamental Questions of Geometry”, in Pasch 2010: 45–50. doi:10.1515/crll.1917.147.184 (de) doi:10.1007/978-90-481-9416-2_2 (en)
* –––, 1918 [2010], “Die Forderung der Entscheidbarkeit”, *Jahresbericht der Deutschen Mathematiker-Vereinigung*, 27: 228–232. Translated as “The Decidability Requirement”, in Pasch 2010: 51–54. doi:10.1007/978-90-481-9416-2_3 (en)
* –––, 2010, *Essays on the Foundations of Mathematics by Moritz Pasch*, Stephen Pollard (ed./tran.), (The Western Ontario Series in Philosophy of Science 83), Dordrecht: Springer Netherlands. doi:10.1007/978-90-481-9416-2
* Paseau, Alexander C., 2005, “Naturalism in Mathematics and the Authority of Philosophy”, *The British Journal for the Philosophy of Science*, 56(2): 377–396. doi:10.1093/bjps/axi123
* –––, 2015, “Knowledge of Mathematics without Proof”, *The British Journal for the Philosophy of Science*, 66(4): 775–799. doi:10.1093/bjps/axu012
* –––, forthcoming a, “Trumping Naturalism Revisited”, in *On the Philosophy of Penelope Maddy: Set-theoretic Foundations and Naturalistic Methodology*, Juliette Cara Kennedy (ed.), Springer.
* –––, forthcoming b, *What is Mathematics About?* Oxford: Oxford University Press.
* Putnam, Hilary, 1967a [1975], “The Thesis That Mathematics Is Logic”, in *Bertrand Russell, Philosopher of the Century*, Ralph Schoenman (ed.), London: Allen and Unwin, ch. 18. Reprinted In his *Mathematics, Matter, and Method*, London/New York: Cambridge University Press, 1975, 12–42 (ch. 2). Page refs are to the reprint.
* –––, 1967b, “Mathematics without Foundations”, *The Journal of Philosophy*, 64(1): 5–22. doi:10.2307/2024603
* Quine, Willard Van Orman, 1970, *Philosophy of Logic*, Englewood Cliffs, NJ: Prentice-Hall. Second edition, Cambridge, MA: Harvard University Press, 1986.
* Resnik, Michael D., 1980, *Frege and the Philosophy of Mathematics*,. Ithaca, NY: Cornell University Press.
* Rheinwald, Rosemarie, 1984, *Der Formalismus und seine Grenzen. Untersuchungen zur neueren Philosophie der Mathematik* (Analyse und Grundlegung, 11), Königstein: Hain.
* Robson, Eleanor, 2008, *Mathematics in Ancient Iraq: A Social History*, Princeton, NJ: Princeton University Press.
* Russell, Bertrand, 1903 [2009], *Principles of Mathematics*, first edition, Cambridge: University Press. Reprinted London: Routledge, 2009.
* –––, 1937 [2010], *Principles of Mathematics*, second edition, London: G. Allen & Unwin. Reprinted London: Routledge, 2010.
* Schlimm, Dirk, 2010, “Pasch’s Philosophy of Mathematics”, *The Review of Symbolic Logic*, 3(1): 93–118. doi:10.1017/S1755020309990311
* Shapiro, Stewart, 1997, *Philosophy of Mathematics: Structure and Ontology*, New York: Oxford University Press. doi:10.1093/0195139305.001.0001
* –––, 2000, *Thinking about Mathematics: The Philosophy of Mathematics*, New York: Oxford University Press.
* Sieg, Wilfried, 2020, “The Ways of Hilbert’s Axiomatics: Structural and Formal”, in *The Prehistory of Mathematical Structuralism*, Erich H. Reck and Georg Schiemer (eds.), New York: Oxford University Press, 142–165 (ch. 6). doi:10.1093/oso/9780190641221.003.0006
* Warren, Jared, 2020, *Shadows of Syntax: Revitalizing Logical and Mathematical Conventionalism*, New York: Oxford University Press. doi:10.1093/oso/9780190086152.001.0001
* Wetzel, Linda, 2009, *Types and Tokens: On Abstract Objects*, Cambridge, MA: MIT Press. doi:10.7551/mitpress/9780262013017.001.0001
* Williamson, Timothy, 2014, “Logic, Metalogic and Neutrality”, *Erkenntnis*, 79(S2): 211–231. doi:10.1007/s10670-013-9474-z

## Academic Tools

> | ![sep man icon](../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=deductivism-mathematics). |
> | --- | --- |
> | ![sep man icon](../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/deductivism-mathematics/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=deductivism-mathematics&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](https://philpapers.org/sep/deductivism-mathematics/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the authors with suggestions.]

## Related Entries

[algebra](https://plato.stanford.edu/entries/algebra/) | [Gödel, Kurt: incompleteness theorems](https://plato.stanford.edu/entries/goedel-incompleteness/) | [logicism and neologicism](https://plato.stanford.edu/entries/logicism/) | [mathematics, philosophy of: fictionalism](https://plato.stanford.edu/entries/fictionalism-mathematics/) | [mathematics, philosophy of: formalism](https://plato.stanford.edu/entries/formalism-mathematics/) | [mathematics, philosophy of: intuitionism](https://plato.stanford.edu/entries/intuitionism/) | [mathematics, philosophy of: nominalism](https://plato.stanford.edu/entries/nominalism-mathematics/) | [mathematics, philosophy of: Platonism](https://plato.stanford.edu/entries/platonism-mathematics/) | [mathematics, philosophy of: structuralism](https://plato.stanford.edu/entries/structuralism-mathematics/) To be completed.

### Acknowledgments

For comments on previous drafts and presentations, we are very grateful to Wes Wrigley, two anonymous journal referees, an anonymous SEP referee, and audience members at several venues: University College London, the Munich Center for Mathematical Philosophy, the University of Oxford’s Philosophy of Mathematics Graduate seminar and its Philosophy of Mathematics seminar, the Ghent-Brussels Seminar in Logic, History and Philosophy of Science, and the Express-PhilMath seminar. Particular thanks go to Bill D’Alessandro, Carlo Nicolai, Dan Waxman, Deniz Sarikaya, Francesca Poggiolesi, Giorgio Sbardolini, Hannes Leitgeb, Hans Robin Solberg, Luca Incurvati, Steffen Ducheyne, Volker Halbach and Walter Dean.

[Copyright © 2023](https://plato.stanford.edu/info.html#c) by  
[Alexander Paseau](http://www.acpaseau.com/) <[*alexander.paseau@philosophy.ox.ac.uk*](mailto:alexander%2epaseau%40philosophy%2eox%2eac%2euk)>  
Fabian Pregel <[*fabian.pregel@gmail.com*](mailto:fabian%2epregel%40gmail%2ecom)>
