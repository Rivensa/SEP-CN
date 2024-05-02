# 多元量化 plural quantification (Øystein Linnebo)

*首次发表于2004年10月27日；实质性修订于2022年2月16日。*

普通英语包含对对象的不同形式的量化。除了通常的单数量化，如

(1)

桌子上有一个苹果

还有复数量化，如

(2)

桌子上有一些苹果。

自从弗雷格以来，形式逻辑更倾向于使用两个单数量词∀x 和∃x，而不是它们的复数对应物∀xx 和∃xx（读作对于任意的事物 xx 和存在一些事物 xx）。但是在最近几十年中，有人争论我们有充分的理由在我们的原始逻辑概念中也包括复数量词∀xx 和∃xx（Boolos 1984 和 1985a）。

更有争议的是，有人认为带有复数和单数量化的结果形式系统符合“纯逻辑”的条件；特别是，它是普遍适用的、本体论上无罪的和完全理解的。除了本身具有趣味性外，如果这个论点是正确的，它将使复数量化成为一个无罪但极其强大的工具，可以应用于形而上学、数学哲学和哲学逻辑。例如，乔治·布洛斯（George Boolos）使用复数量化来解释单调二阶逻辑[1]，并基于此论证单调二阶逻辑符合“纯逻辑”的条件。复数量化还被用于试图捍卫逻辑主义思想、解释集合论，并消除对数学对象和复杂对象的本体论承诺。

---

## 1. 复数量化的语言和理论

自从弗雷格以来，在分析传统中占主导地位的逻辑形式主义不允许复数量化。在入门逻辑课程中，学生通常被教导将复数表达式改写成其他形式。例如，他们可能被教导将“Alice and Bob are hungry”翻译为“Alice is hungry & Bob is hungry”，将“There are some apples on the table”翻译为“∃x∃y(x 是桌子上的一个苹果 & y 是桌子上的一个苹果 & x≠y)”。然而，这样的改写不仅常常不自然，而且可能无法实现。一个最有趣的抵抗单数改写的复数表达式的例子是所谓的 Geach-Kaplan 句子：

(3)

有些批评家只钦佩彼此

这个句子可以证明只使用句子本身中出现的谓词没有单数的一阶释义。[2]

我们如何形式化这样的句子？传统观点，例如奎因所辩护的观点是，所有的释义必须用经典的一阶逻辑来给出，必要时还可以补充集合论。特别是，奎因建议将(3)形式化为

(3′)∃S(∃u.u∈S&∀u(u∈S→Cu)&∀u∀v(u∈S&Auv→v∈S&u≠v))

(1973: 111 和 1982: 293).[ 3]

在 20 世纪 80 年代的两篇重要文章中，乔治·布洛斯（George Boolos）对这种传统观点提出了质疑（Boolos 1984 和 1985a）。他认为坚持将自然语言中的复数表达式进行释义只是一种偏见。相反，他建议正如单数量词∀x 和∃x 之所以合法是因为它们代表了自然语言中的某些量化设备，复数量词∀xx 和∃xx 也是如此。因为毫无疑问，在自然语言中我们使用并理解表达式“对于任何事物”和“存在一些事物”。由于这些量词绑定的是取名（而不是谓词）位置的变量，它们是一阶量词，尽管是复数的。

### 1.1 规范化复数量化

现在我将描述一个简单的形式语言，该语言可以用来规范英语和其他自然语言中出现的复数量词。

形式语言 LPFO。让形式语言 LPFO（用于复数一阶）如下。

1. LPFO 具有以下术语（对于每个自然数 i）：

* 单数变量 xi
* 复数变量 xxi
* 单数常量 ai
* 复数常量 aai

2. LPFO 具有以下谓词：

* 两个二元逻辑谓词 = 和 ≺（被视为身份和关系之一）
* 所有参数位置都是单数的非逻辑谓词 Rni（对于每个适应度 n 和每个自然数 i）

3. LPFO 具有以下公式：

* 当 Rni 是 n 元谓词且 tj 是单数术语时，Rni(t1,…,tn)是一个公式
* 当 t 为单数术语，T 为复数术语时，t≺T 是一个公式
* 当ϕ和ψ为公式时，¬ϕ和ϕ&ψ是公式
* 当ϕ为公式，v 为单数变量，vv 为复数变量时，∃v.ϕ和∃vv.ϕ是公式
* 其他连接词通常被视为缩写。

在 LPFO 中，我们可以形式化许多涉及复数的英语断言。例如，(2)可以形式化为

(2′)∃xx∀u(u≺xx→Au&Tu)

并且 Geach-Kaplan 句子（3）可以形式化为

（3′′）∃xx[∀u(u≺xx→Cu)&∀u∀v(u≺xx&Auv→v≺xx&u≠v)].

然而，LPFO 语言有一个严重的限制。我们通过区分两种复数断言来看到这一点。一个接受复数参数的谓词 P 被称为是分布的，只有当它是分析的：如果 P 适用于一些事物 xx，那么 P 适用于每个 u，使得 u≺xx.[5]例如，谓词“在桌子上”是分布的，因为它是分析的，只有当一些事物 xx 都在桌子上时，xx 的每个成员都在桌子上。一个不是分布的谓词 P 被称为是非分布的或集体的。[6]例如，谓词“形成一个圆”是非分布的，因为它不是分析的，只有当一些事物 xx 形成一个圆时，xx 的每个成员都形成一个圆。非分布的复数断言的另一个例子是逻辑谓词≺的第二个参数位置：因为不是真的（更不用说是分析的）每当 u 是 xx 的一个成员时，u 是 xx 的每个成员之一。因此，考虑一个稍微丰富一些的语言是自然且有用的。

> 形式语言 LPFO+。语言 LPFO+允许非分配性复数谓词，而不仅限于≺。我们通过修改 LPFO 的定义，允许谓词 Rni 接受一个或多个复数参数。这些谓词可以是逻辑的或非逻辑的。[7]

我们是否还应该允许带有既有单数参数又有复数参数的谓词？许多英语谓词都是这样工作的，例如“…在桌子上”。因此，如果我们的主要兴趣是分析自然语言，我们可能需要允许这样的谓词。然而，出于当前的目的，不允许这样的谓词会更简单。我们很快将允许由仅包含一件事物的复数构成。[8]

目前，LPFO 和 LPFO+这两种形式语言仅通过将它们翻译成普通英语来进行解释，同时增加索引以便于交叉参考（Boolos 1984: 443–5 [1998a: 67–9]; Rayo 2002: 458–9）。（更严重的语义问题将在第 4 节中讨论，我们的主要问题是我们的复数量化理论是否对任何“类似集合”的实体有本体论承诺。）这个翻译中立即涉及复数术语的两个子句是

(4)

Tr(xi≺xxj)=iti 是其中之一 j

(5)

Tr(∃xxj.ϕ)= 有一些东西 j 使得 Tr(ϕ)

其他条款是显而易见的，例如：Tr(ϕ&ψ)=(Tr(ϕ) and Tr(ψ))。这种翻译使我们能够根据我们对英语的直观理解来解释 LPFO 和 LPFO+的所有句子。考虑一些例子是有用的。将 Tr 应用于(2')，例如，会产生：

(2″)

有一些事物 1，对于每一件事物 2（如果它 2 是其中之一 1，则它 2 是一个苹果且它 2 在桌子上）。

### 1.2 PFO 和 PFO+理论

我们现在将描述一个基于 LPFO 语言的复数一阶量化理论 PFO。让我们从一个带有恒等性的普通一阶逻辑的公理化开始。对于我们当前的目的，将这个逻辑公理化为自然演绎系统是方便的，将所有重言式作为公理，将熟悉的自然演绎规则作为推理规则，控制着单数量词和恒等符号。然后，我们以明显的方式扩展自然演绎规则，使其适用于复数量词。接下来，我们需要一些公理，对于适当的公式ϕ(x)，允许我们谈论关于ϕ的事物。在普通英语中，使用复数表达通常意味着关注两个或更多的对象。但是，存在两个或更多的对象可能并不在语义上要求；例如，“注册这门课程的学生将学到很多东西”即使只有一个学生注册，似乎也可能是真实的。因此，只要至少存在一个满足ϕ(x)的对象，要求只是合理且方便的。（大多数研究这个主题的人都做出了这个让步。）这就产生了复数理解公理，它们是模式的实例

(Comp)∃uϕ(u)→∃xx∀u(u≺xx↔ϕ(u))

其中ϕ是 LPFO 中包含“u”和可能包含其他自由变量但不包含“xx”的公式。（也就是说，如果某物是ϕ，则存在一些事物，如果且仅如果它是ϕ，则每个事物都是它们之一。）为了完全捕捉到所有复数都是非空的这个想法，我们还采用了解释。

(6)∀xx∃u(u≺xx).

(也就是说，对于任何事物，都存在一个属于它们之一的东西。)

让 PFO+成为基于 LPFO+语言的理论，该语言以类似的方式产生，但另外还具有以下不可辨别性公理模式，它声明共同存在的复数满足相同的公式：

(7)∀xx∀yy[∀u(u≺xx↔u≺yy)→(ϕ(xx)↔ϕ(yy))]

（也就是说，对于任何事物 1 和任何事物 2（如果某物是它们 1 中的一个，当且仅当它是它们 2 中的一个，那么它们 1 是ϕ当且仅当它们 2 是ϕ）。）这是莱布尼兹的不可辨认性法则的复数量化版本，因此需要将其限制在不设立内涵语境的公式ϕ上。

尽管 PFO 和 PFO+理论代表了如今最传统的复数逻辑形式，但也有一些不同的观点限制了复数理解模式。即使一个复数除了包含的对象之外没有其他东西，这些对象仍然需要被限定。而在某些形而上学观点中，整个现实都抵制适当的限定（Spencer 2012; Florio 和 Linnebo 2020 和 2021，第 12 章; 另请参阅 Hossack 2014）。基于这种考虑，Florio 和 Linnebo（op. cit.）发展了一种替代的批判性复数逻辑。

关于术语的说明。为了便于沟通，我们将使用“多元性”一词，而不对是否真的存在多元性实体持立场。涉及“多元性”一词的陈述总是可以通过更冗长地重新表述而不使用该词。例如，上述声称“所有多元性都是非空的”可以重新表述为“每当存在一些事物 xx 时，存在一个事物 u，它是事物 xx 之一”。当提出本体论主张时，将使用“多元实体”这个说法来表示。

## 2. 多元量化 vs. 二阶量化

“二阶逻辑”是指通过允许量化到谓词位置来扩展普通的一阶逻辑的逻辑。例如，从“a 是一个苹果”我们可以在二阶逻辑中推断出“∃F.Fa”。但是上述描述的多元逻辑以一种不同的方式扩展了普通的一阶逻辑，即允许量化到复数参数位置。但是谓词和复数名词短语属于不同的句法和语义类别。例如，前者由未饱和表达式组成（按弗雷格的意义），即包含空缺或参数位置，而后者由饱和表达式组成（Higginbotham 1998: sect. 7; Oliver and Smiley 2001 and 2016; Rayo and Yablo 2001: sect. X; Simons 1997; Williamson 2003: sect. IX; Yi 2005; Florio and Linnebo 2021）。因此，二阶量化和多元量化通常被视为不同形式的量化。在本节中，我讨论一些差异和相似之处。

### 2.1 复数量化和一阶单调逻辑

（对技术问题不太感兴趣的读者可以略过本节。）Boolos 观察到可以在 PFO 理论中解释一阶单调逻辑。[9] 设 MSO 是一些标准的（完全非谓词化的）一阶单调逻辑在某种适当的语言 LMSO 中的公理化（Shapiro 1991: ch. 3; Boolos et al. 2002: ch. 22）。Boolos 首先定义了一个翻译 Tr'，将 LMSO 的任何公式映射到 LPFO 的某个公式。这个定义按照 LMSO 公式的复杂性进行归纳，其唯一的非平凡子句是以下两个与二阶变量有关的子句：

(8)Tr'(Xjxi)=xi≺xxj(9)Tr'(∃Xj.ϕ)= ∃xxj.Tr'(ϕ)∨Tr'(ϕ∗)

其中ϕ∗是将 xi≠xi 替换为 Xjxi 的结果。这两个子句背后的思想是用关于这些概念的对象来替代对概念的讨论（或者说对于单调二阶变量的范围）。因此，我们不再说 xi 属于概念 Xj，而是说 xi 是 xxj 之一。唯一的困难在于有些概念没有实例，而所有的复数必须至少包含一件事物。但是，概念可能无法实例化的可能性由（9）右侧的第二个析取式容纳。

通过对 MSO 中的推导进行归纳，很容易证明每个 MSO 的定理都映射到 PFO 的某个定理。此外，很容易定义一个“反向”翻译，将 LPFO 的公式映射到 LMSO 的公式，并证明该翻译将前者的定理映射到后者的定理。这表明 PFO 和 MSO 是等价可解释的。关于 PFO+和 MSO+的类似结果可以证明，其中 MSO+允许（一级）概念的谓词，前提是 MSO+包含一个公理模式，即共同扩展的概念是不可辨别的。

清楚地了解 PFO 和 PFO+分别与 MSO 和 MSO+的等价解释所展示的内容及其不展示的内容是很重要的（Florio 和 Linnebo 2021：sect. 4.2）。它表明这两对理论在大多数技术目的上是等价的。但仅凭此事实并不能表明这两对理论在哲学家们常常关心的更苛刻意义上是等价的（例如具有相同的认识论地位、本体论承诺或分析程度）。（例如，PFO 与原子外延测度论是等价可解释的，而哲学家们往往认为这比 PFO 更有问题。）为了表明这两对理论在某些哲学上重要的方面 F 上是等价的，我们需要表明上述翻译保留了 F 性质。

### 2.2 关系

虽然复数量化对（一元）概念的量化提供了相当自然的解释，但对（多元）关系的量化却没有自然的解释。

这个限制可以被克服（至少在技术目的上），如果在相关领域上存在一个配对函数，也就是说，如果存在一个函数π，使得π（u，v）=π（u'，v'）当且仅当 u=u'且 v=v'。因此，对二元关系的量化可以通过对有序对进行复数量化来表示。此外，通过有序对函数的迭代应用，我们可以表示 n 元组，从而也可以对 n 元关系进行量化。问题是如何理解这个配对函数。一种选择是按照数学的做法，简单地假设存在一个配对函数作为一个抽象的数学对象。但是这个选择的明显缺点是超出了大多数人愿意称之为“纯逻辑”的范畴。一种更聪明的选择，在 Lewis 1991 年的附录中和 Hazen 1997 年和 2000 年的研究中进行了探讨，是使用只有纯粹逻辑资源的方式来模拟关于有序对的讨论。事实证明，关于有序对的讨论可以在单调三阶逻辑中进行模拟，前提是给出一些合理的额外假设。单调三阶逻辑可以在将复数量化与部分整体论相结合的理论中进行解释（Lewis 1991: ch. 3; Burgess and Rosen 1997: II.C.1），或者用高级复数量化的术语来解释（第 2.4 节）。

### 2.3 模态语境

复数量化和二阶量化分离的另一种方式出现在情态语境中。一个对象是否属于一个概念通常是偶然的。尽管我穿着鞋子，但我可能没有这样做。因此，有一个概念 F，我可能属于其中之一，但可能没有属于其中之一。相比之下，似乎成为一些对象中的一个从来不是偶然的。考虑那些所有且仅是当前穿鞋的人 aa。那么我不仅是这些人之一，而且这似乎是必然的（假设相关对象的存在）。将我从这个人群中移除只会导致不同的人群。为了使人群 aa 成为它所是的人群，它必须准确地包括它实际包括的对象。因此，在任何一个存在对象 aa 的世界中，我必须是其中之一。当然，我可能没有穿鞋。但即使如此，我仍然是 aa 中的一个，只是那时 aa 不会是所有仅穿鞋的人。因此，复数名称和变量似乎以类似于单数名称和变量的熟悉刚性的方式是刚性的：在任何一个复数术语指称的世界中，它指称相同的对象。特别是，人们普遍认为复数遵循以下两个原则：

(10)u≺xx→□(Exx→u≺xx)(11)¬(u≺xx)→□(Eu&Exx→¬(u≺xx))

其中 Exx 和 Eu 是分别 xx 和 u 存在的适当形式化的主张。[10]

### 2.4 更高层次的复数量化？

超越 PFO+的一种方法是允许量化进入谓词位置，包括那些带有复数参数的谓词。这样做将导致一个扩展，它与普通（单数）二阶逻辑与普通（单数）一阶逻辑的关系相同。这里不考虑这样的扩展：因为它们是否合法，以及如果合法的话，它们可能支持哪些公理，与复数和复数量化的关系不如与谓词的语义值的预测和量化有关。[11]

对于目前的目的来说，重要的是是否存在某种形式的“超复数”量化，它与普通复数量化的关系就像普通复数量化与单数量化的关系一样。如果是这样，我们称之为第二级复数量化。更一般地说，我们可以尝试引入任何有限级别的复数量化。这将导致一个在技术目的上与简单类型理论完全相同的理论（Hazen 1997: 247; Linnebo 2003: sect. IV; Rayo 2006）。

开发高级复数量化的形式语言和理论是相当直接的（Rayo 2006）。例如，我们可以引入形式为 xxx 的变量，将其视为范围在二级复数上，并将关系 xx≺2 xxx 类比于关系 x≺xx。（有关对无穷级别的扩展和与普通集合论的理论进行比较的内容，请参见 Linnebo 和 Rayo 2012。）但是，这些高级复数量化的形式理论能否通过类似于证明 PFO 和 PFO+理论的考虑来证明呢？

Boolos 和许多其他哲学家否认高级复数量化可以通过这种方式得到证明。对于这一观点，提出了两种论证。首先，有人认为复数总是由事物组成的。但由于复数量化在本体论上是无辜的，因此并不存在复数。因此，无法将事物收集到二级复数中（McKay 2006: 46–53 和 137–139）。其次，普通复数量化之所以得到证明，是因为它捕捉了英语和其他自然语言的某些量化设备。但是英语和其他自然语言中没有高级复数量化（Lewis 1991: 70–71）。

这两种论证都是有争议的。关于第一个论证，不清楚为什么本体论与高级复数量化的合法性有关。只要基本级别的对象可以以某种复杂的方式组织起来即可。例如，基于 Cheerios 组织为 oo oo oo 的二级复数应该与基于相同对象组织为 oooooo 的一级复数一样没有本体论问题，尽管前者具有额外的结构或表达方式（Linnebo 2003: 87–8）。

上述两个论点中的第二个也存在问题。首先，声称自然语言中没有更高级的复数短语几乎可以肯定是错误的。例如，在冰岛语中，数词有复数形式，它们计数的不是个体对象，而是形成自然群体的多个对象。以下是一个例子：

| *einn skór* | means | one shoe |
| -- | ------- | ---------- |
| *einir skór* | means | 一双鞋   |
| *tvennir skór* | means | 两双鞋   |

这使我们能够将鞋子的配对作为二级复数而不是作为一级物体的复数来讨论。 （有关涉及外语的更多示例，请参见 Grimau 2021a。）以英语为例，考虑一个视频游戏，其中任意数量的团队可以参加 n 路比赛。然后，以下句子似乎涉及超复数术语：

(12)

这些人，那些人和其他人彼此竞争。（Linnebo 和 Nicolas 2008）

（另请参见 Oliver 和 Smiley 2004：654–656，2005：1063 和 2016 年第 15 章；Ben-Yami 2013；Simons 2016；Florio 和 Linnebo 2021 年第 9 章，以及 Grimau 2021a 和 2021b）

此外，高层复数量化的合法性是否由英语和其他自然语言中是否存在高层复数表达来决定的这个观点本身就存在问题（Hazen 1993: 138 和 1997: 247; Linnebo 2003: 87; Rayo 2006）。真正重要的是我们是否能够迭代我们对普通一级复数量化理解的原则和考虑因素：如果我们能够，那么高层复数量化将以与普通一级复数量化类似的方式得到证明；如果不能，那么就不会。因此，即使自然语言中没有高层复数表达，这也几乎没有证据支持更强（也更有哲学意义）的主张，即任何由智能体说出的语言中都不能从单数到复数进行迭代。此外，这种类型的任何证据都可以通过指出自然语言中为什么缺乏高层复数表达的独立原因来被推翻。其中一个独立原因可能仅仅是普通说话者对他们的本体论承诺不太关心，因此他们发现通过假设代表一级复数的对象（例如谈论两双鞋）来表达涉及二级复数的事实比跟踪额外的语法设备更方便（如上面冰岛语的例子）。

假设我们接受高层复数量化。这应该如何实施？一种选择是为每个层次的量化引入一个单独的变量集，例如为二级复数引入“xxx”等（Rayo 2006）。另一种选择是使用一组“通用”变量，其值可以是任何层次的复数（Oliver and Smiley 2016, ch. 15; Simons 2016; and Florio and Linnebo 2021, sect. 11.7）。

## 3. 逻辑性论述

人们经常声称 PFO 和 PFO+理论符合“纯逻辑”。我们将这个（无可否认的模糊）主张称为逻辑性论题。由于相应的语言由翻译 Tr 解释为普通英语，这是关于普通英语某些公理和推理规则的逻辑性的主张。[12]

即使在逻辑性论题变得更加明确之前，至少可以评估 PFO 和 PFO+的某些公理和推理规则的合理性。首先是永真式和控制恒等性和单数量词的推理规则。广泛共识认为这些都符合逻辑。接下来是控制复数量词的推理规则。由于这些规则与控制单数量词的规则完全类似，很难否认它们也符合逻辑。然后是不可辨别性公理和所有复数都非空的公理。这些公理是没有问题的，因为可以合理地认为它们是分析的。剩下的是复数理解公理，其中情况要复杂得多。因为这些公理没有明显的单数对应物，并且它们的句法形式表明它们提出了存在性主张。因此，这些公理是否可以被视为纯粹的逻辑并不明显。

这并不是说人们没有认为复数理解公理是纯粹逻辑的。例如，Boolos 毫无争议地断言，每个复数理解公理翻译成英语后，“如果任何英语句子是逻辑真理，那么它们也是逻辑真理”（Boolos 1985b: 342 [1998a: 167]；他的强调）。

为了更有原则地评估逻辑性论题，需要进一步阐述什么是“纯粹逻辑”的理论可能意味着什么。因此，我将对一些常被认为在这样的定义中起作用的特征进行概述。虽然人们可以随意使用“逻辑”一词，但弄清楚不同用法的含义是很重要的；特别是，被认为是纯粹逻辑的理论通常被假定具有各种理想的哲学特性，如认识论和本体论的无罪性。在下一节中，将讨论各种复数量化的应用，我将仔细注意我们的理论 PFO 和 PFO+必须具备哪些逻辑性概念的变种，以使它们的各种应用能够成功。

也许最不具争议的逻辑定义特征候选者是其主题中立性。逻辑原则在任何类型的话语中都是有效的，无论这个话语关注的是什么类型的对象。例如，推论法则不仅在物理学和数学中有效，而且在宗教和对作品的分析中也是有效的。弗雷格在他说逻辑原则在“最广泛的领域中有效；[...] 不仅是实际的，不仅是可直观的，而是一切可思考的东西”时很好地捕捉到了这个思想（弗雷格 1884 年：21）。因此，物理学原则仅在实际世界和与之规律相似的世界中有效，而逻辑原则统治着一切可思考的东西。如果否认其中一个原则，“将导致完全混乱”（同上）.

另一个被广泛认为是逻辑定义的特征是其形式性：逻辑原理的真实性由思维和/或语言的形式保证，不以任何方式依赖于其内容。这个特征的具体含义显然取决于对形式和内容之间区别的理解。形式和内容之间区别的最流行解释源自广泛共享的观点，即没有对象以概念的必要性存在（Field 1993; Yablo 2000）。根据这个观点，自然而然地将与对象的存在以及它们的特定特征有关的任何事物视为属于思维的内容而不是形式。这导致了两个经常被认为是逻辑定义的特征。首先，逻辑必须是本体论上无罪的；也就是说，逻辑原理不能引入任何新的本体论承诺（Boolos 1997; Field 1984）。其次，逻辑的基本概念不能区分不同的对象，而必须同等对待它们。这个后者的想法经常被阐述为逻辑概念必须在对象域的置换下保持不变的要求（Tarski 1986）。

逻辑的第三个被广泛认为是定义逻辑的特征是其（所谓的）认识优先性。原始的逻辑概念可以在不依赖非逻辑概念的情况下被理解；如果可知，逻辑真理可以独立于非逻辑真理而被知晓。例如，假设某些集合论概念或真理必须被视为超逻辑的。那么我们对原始逻辑概念的理解，或对逻辑真理的知识，不能依赖或涉及任何这些集合论材料。

那么，关键问题是复数理解公理是否具备逻辑性的这些特征。正如我们很快将看到的，对于这些公理的本体论无罪和认识优先性，已经提出了实质性的疑问。

## 4. 复数量词的应用

现在我将概述 PFO 和 PFO+理论的一些应用。在前一节中，我们梳理了逻辑性概念的三个变种。我们将特别关注这三个变种中 PFO 和 PFO+必须具备哪些特点才能使应用成功。

### 4.1 确定单调二阶逻辑的逻辑性

正如我们在第 2.1 节中所看到的，布洛斯在复数量化理论 PFO 中定义了单调二阶逻辑理论 MSO 的解释。他试图利用这种翻译来建立 MSO 的逻辑性。这样做需要两个步骤。第一步是论证 PFO 是纯逻辑，也就是建立完整的逻辑性论题（无论如何解释）。第二步是论证在 PFO 中对 MSO 的解释保持逻辑性。

第一步面临的一些挑战将在第 5 节中进行讨论。第二步也不容小觑。也许最大的担忧是布洛斯的翻译将一个类别（单调谓词的类别）的表达式转化为另一个类别（复数名词短语的类别）的表达式。例如，“...是一个苹果”被翻译为“这些苹果”。但是这些类别非常不同（第 2 节）。

然而，由于 MSO 是纯逻辑的命题非常抽象，它的现金价值很大程度上取决于其应用。鉴于 MSO 和 PFO 的等价解释，很可能前者的逻辑性的许多应用同样适用于后者的逻辑性。这在一定程度上减少了进行第二步的重要性。

### 4.2 逻辑主义

弗雷格式和后弗雷格式逻辑主义都必须基本使用二阶量化。弗雷格将纯数学的各种对象定义为概念的外延，并且他著名的基本定律 V 表明，两个概念 F 和 G 的外延相同当且仅当它们是同一外延的：

(V)û.Fu=û.Gu↔∀u(Fu↔Gu)

但众所周知，罗素悖论表明，以(V)为公理的二阶理论是不一致的。

哲学家们试图通过使用比(V)更弱的公理来拯救一些弗雷格逻辑主义的思想。其中最重要的尝试之一是鲍勃·黑尔和克里斯平·赖特的新逻辑主义，它放弃了弗雷格的外延理论，但坚持了他对基数定义的核心思想，即 F 的数量与 G 的数量相等，当且仅当 F 和 G 可以一一对应。这被称为休谟原则，可以形式化为

(HP)Nu.Fu=Nu.Gu↔F≈G

当 F≈G 时，表示存在一种关系，将 Fs 和 Gs 一一对应。具有（HP）作为公理的二阶理论是一致的，并且允许我们使用一些非常自然的定义推导出所有普通的（二阶 Peano-Dedekind）算术（请参阅关于弗雷格逻辑、定理和算术基础的条目）。

更加谦虚的是布洛斯的子逻辑主义，它拒绝了逻辑主义和新逻辑主义都认同的逻辑对象的概念，但坚持认为弗雷格对于关系的祖先的定义可以用来证明，与康德相反，至少一些非平凡的数学是分析的（Boolos 1985b）。回想一下，关系 R 与其祖先 R∗的关系就像父母与祖先的关系一样。（更准确地说，R∗在两个对象 x 和 y 之间成立，当且仅当 x 和 y 通过一系列有限的对象相连，每个对象都与其后继者具有 R 关系。）弗雷格通过规定 x 和 y 之间的关系 R∗，即 y 具有 x 的 R-后继者所具有的每个属性，并在 R 关系下继承：

（定义 R∗）xR∗y↔∀F[∀u(xRu→Fu)&∀u(Fu&uRv→Fv)→Fy]

使用这个定义，弗雷格在 1879 年证明了一些非平凡的数学真理，比如祖先关系 R∗是传递的，并且对于任何函数关系 R，任何对象的 R-祖先都是 R∗-可比的（也就是说，他证明了：函数关系(R)&xR∗y&xR∗z→yR∗z∨zR∗y）。

有人建议使用 PFO 来适应后弗雷格逻辑学家对于二阶量化的需求。由于二元谓词的祖先可以仅使用一阶二元量化来定义，因此 PFO 确实满足 Boolos 的子逻辑主义的逻辑需求[13]。但是由于新逻辑主义对 F≈G 的定义使用了二阶二元逻辑，单独的 PFO 并没有足够的表达能力来适应新逻辑主义的需求。新逻辑主义者可以尝试通过将等势性视为原始的逻辑量词，或者通过在 PFO 的某个适当扩展中模拟二阶二元量化来解决这个问题，如第 2.2 节所讨论的[14]（另请参阅 Boccuni 2013 提供的另一种选择）。

这些应用需要逻辑性论题的哪些变种才能成功？由于这些逻辑主义者试图展示数学的某些部分是分析的（或至少是先验可知的），这将要求 PFO 是分析的（或至少是先验可知的），而这又很可能要求 PFO 具有某种形式的认知首位性。此外，PFO 必须要么是本体上无辜的，要么只承认那些存在在概念上是必然的实体（或至少是先验可证的）。

### 4.3 集合论

逻辑性论题的另一个应用与集合论有关。出于各种原因，人们可能希望讨论和量化集合的集合（Uzquiano 2003）。例如，人们可能想要断言

(13)

存在一些集合，它们全部且仅仅是非自身成员的集合。

如果我们将其形式化为

(13′)∃R∀x(Rx↔x∉x),

那么量词∃R 应该如何理解？显然不能将其范围扩展到所有集合，因为这将直接导致罗素悖论：(13′)将会断言罗素集合的存在。文献中有三种其他的回应备受关注。

第一个回应是∃R 涵盖了类，但有些类太大（或者不适合）作为集合。特别地，（13）断言了罗素类的存在，它不是一个集合。这个回应被认为有问题，因为它假设了不同种类的“类似集合”的存在（Boolos 1984: 442 [1998a: 66] 和 1998b: 35）。也有人反对这个回应只是推迟了（13）所提出的问题。因为也会成立以下命题：

(14)

存在一些类，它们全都是非自身成员的类。

这个类的集合是什么样的实体？是一个超类吗？如果是，我们将被迫假设越来越高层次的类。Lewis (1991: 68) 认为罗素悖论仍然无法逃避，因为当我们考虑所有类似集合的实体时，我们意识到以下命题是真实的：

(15)

有一些类似集合的东西，它们都是非自身成员的类似集合。

然而，Hazen（1993: 141–2）指出，Lewis 的反对触犯了基本的类型限制。不同层次的类属于不同的逻辑类型，就像不同层次的概念一样。因此，Lewis 试图一口气谈论所有类似集合实体的尝试涉及对不同逻辑类型进行量化的尝试。但这与同时量化不同层次的对象和概念的尝试一样，违反了类型限制。尽管我们可以对每个类的层次进行量化，但我们永远无法同时量化所有层次。

第二个回应是，（13）断言了存在一个集合 R，但 R 不在量词∀x 的范围内。这阻止了我们将量词∀x 实例化为 R，这意味着我们不能得出致命的结论：当 R 不是自身的成员时，R 是自身的成员。然而，这个回应意味着量词∀x 不能被选择为绝对所有集合的范围；因为如果可以这样选择，我们将无法否认 R 在这个量化范围内。这意味着集合的宇宙具有一定的无穷性：无论我们是否形成了对某个集合范围的量化的概念，我们都可以定义一个不在这个范围内的集合（Dummett 1981: ch. 15 and 1991: ch. 24; Glanzberg 2004; Parsons 1977）。然而，这个回应被批评为最多难以陈述，最坏的情况是自相矛盾（Boolos 1998b: 30; Lewis 1991: 68; Williamson 2003: sect. V）。（另请参阅 Rayo 和 Uzquiano 2006，其中讨论了是否可能进行绝对普遍量化的一些论文。）

由于前两种回应存在困难，第三种回应在近年来变得流行起来（Boolos 1984 和 1985a; Burgess 2004; Cartwright 2001; Rayo and Uzquiano 1999; Uzquiano 2003）。这是因为量词∃R 是一个复数量词（因此最好写成∃rr），而复数量化在本体论上是无辜的。因此（13）并不断言存在任何“类似集合”的实体，超过了量词∀x 范围内的集合。但正如我们将在第 5 节中看到的，关于本体论无辜性的主张是有争议的。

将复数逻辑应用于集合论的完全不同的应用是使用复数来解释集合。库尔特·哥德尔（Kurt Gödel）著名地写道“集合的”操作，可以应用于任何“明确定义的对象”以形成它们的集合，并且其迭代应用产生集合的累积层次结构（1964: 180）。一个关键问题是如何理解“明确定义的对象”的概念。假设我们接受任何对象 xx 都符合这样的条件。那么任何对象 xx 都会产生一个集合{xx}。由于累积层次结构不包含普遍集合，因此绝对不能有一个包含所有对象的普遍多元体。Florio 和 Linnebo 2020 和 2021，第 12 章发展了一种适合与这种不受限制的“集合的”操作相结合的临界复数逻辑。因此，这种方法放弃了这种逻辑的能力来讨论任意集合的集合，并使用复数来解释集合的性质和我们对集合的认识。

### 4.4 数学名义主义

一些最受欢迎的复数量化应用与本体经济有关。其思想是支付仅仅是一阶理论的本体代价，然后利用复数量化免费获得（具有）相应的单调二阶理论。这显然是一笔本体交易。这类应用分为两个主要类别，将在本小节和下一小节中讨论。

复数量化的一类应用旨在在数学哲学中进行本体交易。特别是，许多哲学家试图将复数量化作为数学唯名主义解释的一个要素。一个很好的例子是杰弗里·赫尔曼（Geoffrey Hellman）的模态唯名主义，根据该理论，承诺存在抽象对象的数学陈述将被替换为关于可能存在具体对象的陈述。例如，赫尔曼声称，存在一个无限集合的具体对象，这些对象之间的关系满足皮亚诺算术的公理（Hellman 1989 和 1996），而不像柏拉图主义者那样声称存在一个无限集合的抽象对象满足皮亚诺算术的公理（即自然数）。然而，即使这个模态主张似乎是关于具体对象的集合和关系的陈述，为了防止通过后门引入集合等抽象对象的异议，赫尔曼需要一些替代的、唯名主义可接受的对这个关于集合和关系的陈述的解释。复数量化可能提供这样的解释。

为了使复数量化的这种应用起作用，PFO 必须适用于所有种类的具体对象，并且它必须本体上无罪，或者至少不致力于与那些被认为是名义主义反对的抽象对象的特征共享的任何实体。此外，为了模拟关系上的量化，我们不仅需要 PFO，还需要更像单调的三阶逻辑的理论（第 2.2 节和第 2.4 节）。

### 4.5 消除复杂对象

另一类应用试图消除科学和常识对（某些或全部）复杂对象的承诺。例如，提议使用按桌子或按椅子排列的部分整体原子进行复数量化，而不是使用通常的对桌子和椅子进行单数量化（Rosen 和 Dorr 2002; Hossack 2000; van Inwagen 1990）。例如，不是说办公室里有一把椅子，而是应该说办公室里有一些按椅子排列的原子。通过这种方式，似乎避免了承认椅子的存在。请注意，这种分析需要 PFO+，而不仅仅是 PFO，因为新的谓词“按 F 方式排列”是非分布的。

让我们将纯粹形而上学的担忧放在一边，因为这些分析与我们目前的关注无关。我们想知道的是，这些分析对于理论 PFO+提出了哪些要求，特别是逻辑性论题的哪些方面是必需的。最明显的要求是 PFO+适用于所有类型的简单对象，并且在本质上是无罪的，或者至少不承诺要消除的那种复杂对象。

一个不太明显的要求与对复杂对象进行普通复数量化的需要有关，例如

(16)

有一些椅子排成一个圆圈。

我们已经“用完”了普通的复数量化和断言，以消除对个别椅子的明显承诺（Uzquiano 2004）。因此，为了分析（16），我们将需要类似于“超复数”量化的东西 - 这种量化与普通的复数量化相比，就像普通的复数量化与单数相比一样 - 以及相应的非分布式断言。这种语言资源的合法性在第 2.4 节中进行了讨论。

也有人试图使用复数逻辑来消除对群体的明显引用。也许我们可以通过以复数形式引用其成员来代替引用最高法院。这种方法面临的一个明显挑战是，一个群体在不同的时间点和可能的世界中可以有不同的成员，而其（当前和实际的）成员的复数似乎是刚性的，无论是在时间上还是在模态上（第 2.3 节）。请参阅（Horden 和 López de Sa 2021）以捍卫所提出的消除措施对抗这些挑战。

## 5. 本体论的无辜？

在分析哲学中，传统观点认为，如果需要的话，所有复数表达应该通过对集合进行量化来进行释义（第 1 节）。乔治·布洛斯（George Boolos）和其他人反对消除复数表达是不自然和不必要的。这导致了 PFO 和 PFO+理论的出现。复数量化的支持者声称，这些理论允许以与旧的集合论释义根本不同的方式形式化复数表达。特别是，他们声称这些理论在本体论上是无罪的，因为它们在问题中引入的是由组成复数的个体对象之外的集合或任何其他“类似集合”的实体的新本体论承诺。让我们称这后一个主张为本体论无罪。

其他哲学家对本体论无罪提出了质疑。例如，迈克尔·雷斯尼克（Michael Resnik）对复数形式化的所谓本体论无罪表达（3'）的吉奇-卡普兰句子（3）表示疑虑。因为当（3'）按照指示翻译成英语时，它的读法如下：

 (3''')

有一些批评家，只有当后者与前者不同的时候，他们中的任何一个才会钦佩另一个批评家。

但是（3′′′），Resnik 说，

> 在我看来，似乎明确地指的是集合。除了将短语“他们中的一个”理解为指向某个集合并表示“一个”的指称属于该集合之外，我们还能怎样理解呢？（Resnik 1988: 77）

相关的担忧已在 Hazen 1993 年，Linnebo 2003 年，Parsons 1990 年和 Rouilhan 2002 年中表达；另请参阅 Shapiro 1993 年。

现在我将讨论三个支持本体论纯洁性的论点。

### 5.1 集合论论证

第一个参数开始要求我们考虑这个主张

(17)

有一些集合是所有且仅是非自身成员的集合。

并承认它是真实的。它继续通过论证，如果复数表达式致力于集合或任何其他“类似集合”的对象，那么（17）的真实性将直接导致罗素悖论。这有时被认为是支持本体论纯洁性的一种无法抵挡的论证（Boolos 1984: 440–443 [1998a: 64–67]; Lewis 1991: 65–69; McKay 2006: 31–32）。但实际上，它并不像看起来那么决定性。因为正如我们在第 4.3 节中看到的，只有在排除了两种替代观点之后，罗素悖论才会出现。由于这些观点不能轻率地被驳回，这个论证在被认为是决定性之前还有很多工作要做。

### 5.2 不正确的预言论证

第二个论证被 Boolos 的评论很好地概括为“当你有一些 Cheerios 时，认为你正在吃一个集合是荒谬的”（1984: 448–9 [1998a: 72]）。Boolos 在这里暗示的是，否认本体无辜的分析很可能会错误地理解复数预言的主语。

显而易见的回应是以一种方式解释复数谓词，确保我们所吃的是集合的元素而不是集合本身。考虑以下句子：

(18)

乔治·布尔斯在 1985 年 1 月 1 日早餐时吃了一些 Cheerios。

当动词“吃”的直接宾语是复数时，我们可以通过关系 x 吃 y 的元素来解释这个动词。

有人会反对说，这种回应使得动词“吃”以一种不可信的方式产生了歧义（Oliver 和 Smiley 2001）。因为当动词有一个单数的直接宾语时，它很可能会通过普通的关系 x 吃 y 来解释。但是有相当有力的证据表明，动词“吃”并不以这种方式产生歧义。例如，歧义的一个效果是不允许某些类型的省略。一个例子是“make”在“make breakfast”和“make a plan”中的歧义，这导致了以下省略的不被允许：

(*19)

布洛斯做了早餐，但他的客人只有一个计划。

因此，如果“吃了”在刚才描述的方式中是模棱两可的，那么下面的省略也将被禁止，但事实并非如此：

(20)

布洛斯吃了一些 Cheerios，但他的客人只有一个苹果。

然而，很明显对于 Boolos 的论证的上述回应并不需要承认任何这种问题上的模棱两可。例如，我们可以让所有谓词都以复数实体作为它们的参数。动词“ate”将始终以“x 的元素吃掉了 y 的元素”的关系作为其解释，从而消除任何歧义。无论这种回应是否最终可接受，它都表明所讨论的论证仍然没有定论。

### 5.3 直接论证

或许对于本体论的无辜性来说，最受欢迎的论证就是我现在要讨论的那个。在其最简单的形式中，这个论证是基于我们对本体论承诺的直觉。当你断言（18）时，你并没有感觉自己在本体上承诺了一个集合或任何其他“类似集合”的对象。当你断言 Geach-Kaplan 句子或任何其他 PFO 或 PFO+句子的英文翻译时，你也没有这样的感觉。至少这就是这个论证的观点。

在这种简单形式中，这个论点容易受到人们的直觉提供了一个不好的基础来解决关于本体承诺的理论争议的反对意见的攻击。我们已经看到，有些英语能力强的人，比如迈克尔·雷斯尼克（Michael Resnik），并不分享这些直觉。此外，正如戴维森（Davidson）对行动句的普遍分析所清楚表明的那样，普通人对本体承诺的直觉并不总是可信的（戴维森，1967 年）。例如，有人可能真诚地断言约翰走得很慢，而不知道他已经承诺存在一个事件（即约翰走得很慢）。

尽管这个反对意见有力，但通过对包含复数表达式的句子进行更仔细的研究，可以使论点更加明确（Boolos 1984: 447 [1998a: 70]; McKay 2006: ch. 2; Yi 2002: 7–15 and 2005: 469–472）。例如，我们可以问以下内容是否可以从（18）中推断出来：

(21)

存在一个对象，Boolos 在 1985 年 1 月 1 日早餐时吃掉了它的所有元素（或组成部分）。

这种推理无疑是相当奇特的。这提供了证据，表明（18）并不致力于任何一种“类似集合”的实体。

然而，这种证据并非无可争议。因为存在着类似的推理，似乎非常自然。例如，从

(22)

一些学生包围了建筑物。

大多数英语使用者可能会很乐意推断出

(23)

一群学生围住了建筑物。

因此，从（18）到（21）的推理的特殊性可能是一种语用现象，而不是一种语义现象。也许这与将一些 Cheerios 视为集合（或其他类型的复数实体）不如将一些学生视为一组自然的事实有关。

然而，让我们假设直接论证的辩护者是正确的，即（18）并不蕴涵（21）。那么会发生什么呢？这意味着（18）不会产生任何额外的本体承诺，这种承诺可以由单数的一阶量词产生。但是这个结论并没有达到论证的期望结论，即（18）不会产生任何额外的任何类型的本体承诺。为了从实际结论得到期望的结论，我们还需要假设所有的本体承诺都是由单数的一阶量词产生的。但是有一个有影响力的哲学传统否认了这个假设，而是认为所有类型的量词都会产生本体承诺，而不仅仅是单数的一阶量词。[15] 这个传统的最著名的代表是弗雷格，他声称二阶量词承诺了概念，就像单数的一阶量词承诺了对象一样。这个传统将本体承诺的概念与语义值的概念紧密联系在一起。这将是下一节和最后一小节的主题。

### 5.4 语义值和本体承诺

在语义学中，广泛认为复杂表达式的每个组成部分对复杂表达式的意义做出了明确的贡献。这个贡献被称为组成部分表达式的语义值。还假设复杂表达式的意义是由组成部分表达式的语义值和它们的句法组合方式功能决定的。这个假设被称为组合性。

根据弗雷格（Frege）的观点，一个句子的语义值就是它的真值，而一个专有名词的语义值就是它的指称物（即，它所指的对象）。一旦我们确定了句子和专有名词所分配的语义值，就很容易确定其他句法类别表达式所分配的语义值的种类。例如，一个一元谓词的语义值将是一个从对象到真值的函数。弗雷格称这样的函数为概念。

举个例子，让我们考虑一个简单的主谓句

(24)

 苏格拉底是有限的。

(24)的逻辑形式是 M(s)，其中 M 是谓词“是有限的”，s 是特定术语“苏格拉底”。让我们用[E]表示表达式 E 的语义值。根据前一段的内容，与(24)相关的语义值如下：

(25)

 [s]=苏格拉底

(26)

[M]=从对象到真值的函数 f，使得如果 x 是有限的，则 f(x)为真，否则为假

(24)的真值因此确定为

(27)

[(24)] =[M(s)]= M=f(苏格拉底)= 真（如果苏格拉底是有限的）或假（否则）。

弗雷格认为语义值和本体承诺之间的联系非常密切。根据上述分析，（24）支持两种存在泛化：不仅是∃x.M(x)（当且仅当存在某个有限的对象时为真），还有∃F.F(s)（当且仅当存在某个概念包含苏格拉底时为真）。根据弗雷格的观点，这表明像（24）这样的句子不仅对一个对象有本体承诺，还对一个概念有本体承诺。

对于目前的目的来说，重要的不是弗雷格关于概念的真实性或虚假性，而是是否可以为复数表达式开发出这样一个有力的论证。为了调查这个问题，让我们考虑一个简单的非分配复数断言，比如

(28)

这些苹果形成一个圆圈。

(28)的逻辑形式似乎是 C(aa)，其中 C 是谓词“形成一个圆圈”，aa 是复数术语“这些苹果”。（如果你认为复杂的复数指示词具有内部语义结构，可以使用一些复数名称来直接指代所讨论的苹果。）然后自然的观点将是如下。

(29)

[aa]=a1 和...和 an （其中 ai 是所有且仅是被证明的苹果）

(30)

[C]=从多元性到真值的函数 g，使得 g(xx) 为真，如果 xx 形成一个圆，否则 g(xx) 为假

(28) 的真值将由以下决定

(31)

[(28)] =[C(aa)]= C=g(a1 和…和 an) = 真（如果 a1 和…和 an 形成一个圈）或假（否则）

这是符合预期的，考虑到（24）和（28）之间的句法相似性。

假设这种分析是正确的，并且每个复数术语都有一些对象作为其语义值，就像每个单数术语都有一个对象作为其语义值一样。这对于本体学的无辜问题意味着什么？根据与 Frege 传统相连的本体学承诺概念，这意味着复数表达式会承担对复数实体的承诺，就像谓词会承担对概念的承诺一样。因为说一个句子承担对复数实体的承诺就是说句子的真实性要求存在某种适合复数表达式的语义值。然而，其他哲学家会反对这种推理方式，他们认为本体学承诺的概念最多应该与单数一阶变量相关联。

这个分歧如何裁决？一方面，弗雷格传统可能会认为他们的观点高度系统化。某些语义价值会导致本体论承诺，而其他类型的语义价值则不会，这个想法可能有些特别。另一方面，另一种观点可能更好地满足许多人强烈的直觉，即复数表达是本体论无辜的。

另一种可能性是整个争议最终只是一种伪争议（尤其参见 Florio 和 Linnebo 2016，以及 Parsons 1990；Shapiro 1993；Linnebo 2003；Rayo 2007；和 Linnebo 和 Rayo 2012）。如果双方都同意复数表达具有语义价值，并且双方都同意只有单数一阶术语和变量承担对象承诺，那么其他类型的术语和变量是否应被视为引入其自己独特类型的本体论承诺可能并不重要。一些哲学家谈论一个理论的意识形态承诺，而不仅仅是其本体论承诺。这意味着理论所使用的逻辑和概念资源。也许哲学家们应该更多地关注一个理论的意识形态承诺所引发的形而上学和认识论问题，而不太担心这些意识形态承诺是否也应被视为引入一种独特的本体论承诺。毕竟，本体论承诺的概念是一个理论性的概念，不具有哲学以外的明确内容。因此，也许我们应该将这个概念更多地视为提供良好哲学解释的手段，而不是目标本身。

## Bibliography

* Armstrong, David, 1978, *Universals and Scientific Realism*, Vol. 1, Cambridge: Cambridge University Press.
* Ben-Yami, Hanoch, 2004, *Logic and Natural Language: On Plural Reference and Its Semantic and Logical Significance*, Hants: Ashgate.
* –––, 2009, “Plural Quantification Logic: A Critical Appraisal”, *Review of Symbolic Logic*, 2(1): 208–232. doi:10.1017/S1755020309090108
* –––, 2013, “Higher-Level Plurals Versus Articulated Reference, and an Elaboration of Salva Veritate”, *Dialectica*, 67(1): 81–102. doi:10.1111/1746-8361.12013
* Black, Max, 1971, “The Elusiveness of Sets”, *Review of Metaphysics*, 24(4): 614–636.
* Boccuni, Francesca, 2013, “Plural Logicism”, *Erkenntnis*, 78: 1051–1067. doi:10.1007/s10670-013-9482-z
* Boolos, George, 1984, “To Be Is To Be a Value of a Variable (or to Be Some Values of Some Variables)”, *Journal of Philosophy*, 81(8): 430–50; repr. in Boolos 1998a. doi:10.2307/2026308
* –––, 1985a, “Nominalist Platonism”, *Philosophical Review*, 94(3): 327–344; repr. in Boolos 1998a. doi:10.2307/2185003
* –––, 1985b, “Reading the *Begriffsschrift*”, *Mind*, 94(375): 331–344; repr. in Boolos 1998a. doi:10.1093/mind/XCIV.375.331
* –––, 1997, “Is Hume’s Principle Analytic?” in Richard G. Heck, Jr. (ed.), *Logic, Language, and Thought*, Oxford: Oxford University Press; repr. in Boolos 1998a.
* –––, 1998a, *Logic, Logic, and Logic*, Richard Jeffrey (ed.), Cambridge, MA: Harvard University Press.
* –––, 1998b, “Reply to Charles Parsons’ ‘Sets and Classes’”, in Boolos 1998a: pp. 30–36.
* Boolos, George, John P. Burgess, and Richard C. Jeffrey, 2007, *Computability and Logic*, 5th edition, Cambridge: Cambridge University Press.
* Bricker, Phillip, 1989, “Quantified Modal Logic and the Plural *De Re*”, *Midwest Studies in Philosophy*, 14: 372–394. doi:10.1111/j.1475-4975.1989.tb00198.x
* Büchi, J. Richard, 1962, “On a Decision Method in Restricted Second Order Arithmetic”, in E. Nagel, P. Suppes, and A. Tarski (eds.), *Logic, Methodology, and Philosophy of Science*, Stanford, CA: Stanford University Press, pp. 1–11. Reprinted in *The Collected Works of J. Richard Büchi*, 1990, pp. 425–435. doi:10.1007/978-1-4613-8928-6_23
* Burgess, John P., 2004, “*E Pluribus Unum*: Plural Logic and Set Theory”, *Philosophia Mathematica*, 12(3): 193–221. doi:10.1093/philmat/12.3.193
* Burgess, John P. and Gideon Rosen, 1997, *A Subject with No Object: Strategies for Nominalistic Interpretation of Mathematics*, Oxford: Clarendon Press. doi:10.1093/0198250126.001.0001
* Cartwright, Richard, 2001, “A Question about Sets”, in Alex Byrne, Robert Stalnaker, and Ralph Wedgwood (eds.), *Fact and Value: Essays on Ethics and Metaphysics for Judith Jarvis Thomson*, Cambridge, MA: MIT Press, pp. 29–46.
* Cocchiarella, Nino B., 2002, “On the Logic of Classes as Many”, *Studia Logica*, 70(3): 303–338. doi:10.1023/A:1015190829525
* Davidson, Donald, 1967, “The Logical Form of Action Sentences”, in *The Logic of Decision and Action*, Nicholas Rescher (ed.), pp. 81–95, Pittsburg: University of Pittsburg Press. Reprinted in his *Essays on Actions and Events*, 1980 (subsequent edition, 2001: 105–148), Oxford: Clarendon. doi:10.1093/0199246270.003.0006
* Dummett, Michael, 1981, *Frege: Philosophy of Language*, 2nd edition, Cambridge, MA: Harvard University Press.
* –––, 1991, *Frege: Philosophy of Mathematics*, Cambridge, MA: Harvard University Press.
* Field, Hartry, 1984, “Is Mathematical Knowledge Just Logical Knowledge?” *Philosophical Review*, 93(4): 509–552. doi:10.2307/2184826
* –––, 1993, “The Conceptual Contingency of Mathematical Objects”, *Mind*, 102(406): 285–299. doi:10.1093/mind/102.406.285
* Florio, Salvatore, 2014a, “Semantics and the Plural Conception of Reality” *Philosophers’ Imprint*, 14(22): 1–20. [[Florio 2014a available online](http://hdl.handle.net/2027/spo.3521354.0014.022)]
* –––, 2014b, “Untyped Pluralism”, *Mind*, 123(490): 317–337. doi:10.1093/mind/fzu069
* Florio, Salvatore and Øystein Linnebo, 2016, “On the Innocence and Determinacy of Plural Quantification”, *Noûs*, 50(3): 565–583. doi:10.1111/nous.12091
* –––, 2020, “Critical Plural Logic”, *Philosophia Mathematica*, 28(2): 172–203. doi:10.1093/philmat/nkaa020
* –––, 2021, *The Many and the One: A Philosophical Study of Plural Logic*, Oxford: Oxford University Press. [[Florio & Linnebo 2021 available online](https://fdslive.oup.com/www.oup.com/academic/pdf/openaccess/9780198791522.pdf)]
* Florio, Salvatore and Stewart Shapiro, 2014, “Set Theory, Type Theory, and Absolute Generality”, *Mind*, 123(489): 157–174. doi:10.1093/mind/fzu039
* Forbes, Graeme, 1989, *The Languages of Possibility*, Oxford: Blackwell.
* Frege, Gottlob, 1879, *Begriffsschrift*, translated in Jean van Heijenoort (ed.), 1967, *From Frege to Gödel*, Cambridge, MA: Harvard University Press.
* –––, 1884, *Foundations of Arithmetic*, transl. J.L. Austin, Evanston, IL: Northwestern University Press.
* –––, 1914, “Logic in Mathematics”, in his *Posthumous Writings*, H. Hermes et al. (eds), 1979, Oxford: Blackwell, pp. 203–250.
* Glanzberg, Michael, 2004, “Quantification and Realism”, *Philosophy and Phenomenological Research*, 69(3): 541–572. doi:10.1111/j.1933-1592.2004.tb00518.x
* Gödel, Kurt, 1964, “What Is Cantor’s Continuum Problem?”, in his *Collected Works* (Volume II), 1990, Oxford: Oxford University Press, pp. 176–188.
* Hazen, A.P., 1993, “Against Pluralism”, *Australasian Journal of Philosophy*, 71(2): 132–144. doi:10.1080/00048409312345142
* –––, 1997, “Relations in Lewis’s Framework without Atoms”, *Analysis*, 57(4): 243–248. doi:10.1111/1467-8284.00082
* –––, 2000, “Relations in Lewis’s Framework without Atoms: a Correction”, *Analysis*, 60(4): 351–353. doi:10.1111/1467-8284.00252
* Hellman, Geoffrey, 1989, *Mathematics without Numbers: Towards a Modal-Structural Interpretation*, Oxford: Clarendon Press. doi:10.1093/0198240341.001.0001
* –––, 1996, “Structuralism without Structures”, *Philosophia Mathematica*, 4(2): 100–123. doi:10.1093/philmat/4.2.100
* Hewitt, Simon Thomas, 2012a, “Modalising Plurals”, *Journal of Philosophical Logic*, 41(5): 853–875. doi:10.1007/s10992-011-9194-2
* –––, 2012b, “The Logic of Finite Order”, *Notre Dame Journal of Formal Logic*, 53(3): 297–318. doi:10.1215/00294527-1716820
* Higginbotham, James, 1998, “On Higher-Order Logic and Natural Language”, *Proceedings of the British Academy*, 95: 1–27. [[Higginbotham 1998 available online](http://www.britac.ac.uk/pubs/proc/volumes/pba95.html)]
* Horden, John and Dan López de Sa, 2021, “Groups as Pluralities”, *Synthese*, 198: 10237–10271. doi:10.1007/s11229-020-02715-y
* Hossack, Keith, 2000, “Plurals and Complexes”, *British Journal for Philosophy of Science*, 51(3): 411–443. doi:10.1093/bjps/51.3.411
* –––, 2014, “Sets and Plural Comprehension”, *Journal of Philosophical Logic*, 43(2–3): 517–539. doi:10.1007/s10992-013-9278-2
* Klement, Kevin C., 2014, “Early Russell on Types and Plurals”, *Journal For The History of Analytical Philosophy*, 2(6): 1–21. doi:10.15173/jhap.v2i6.47
* Landman, Fred, 2000, *Events and Plurality*, Dordrecht: Kluwer.
* Lewis, David, 1991, *Parts of Classes*, Oxford: Blackwell.
* Link, Godehard, 1998, *Algebraic Semantics in Language and Philosophy*, Stanford, CA: CSLI Publications.
* Linnebo, Øystein, 2003, “Plural Quantification Exposed”, *Noûs*, 37(1): 71–92. doi:10.1111/1468-0068.00429
* –––, 2016, “Plurals and Modals”, *Canadian Journal of Philosophy*, 46(4–5): 654–676. doi:10.1080/00455091.2015.1132975
* Linnebo, Øystein and David Nicolas, 2008, “Superplurals in English”, *Analysis*, 68(3): 186–197. doi:10.1111/j.1467-8284.2008.00737.x
* Linnebo, Øystein and Agustín Rayo, 2012, “Hierarchies Ontological and Ideological”, *Mind*, 121(482): 269–308. doi:10.1093/mind/fzs050
* Lønning, Jan Tore, 1997, “Plurals and Collectivity”, in J. van Bentham and A. ter Meulen (eds.), *Handbook of Logic and Language*, Amsterdam: Elsevier, pp. 1009–1054.
* McKay, Thomas, 2006, *Plural Predication*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199278145.001.0001
* Morton, Adam, 1975, “Complex Individuals and Multigrade Relations”, *Noûs*, 9(3): 309–318. doi:10.2307/2214634
* Nicolas, David, 2008, “Mass Nouns and Plural Logic”, *Linguistics and Philosophy*, 31(2): 211–244. doi:10.1007/s10988-008-9033-2
* Oliver, Alex and Timothy Smiley, 2001, “Strategies for a Logic of Plurals”, *Philosophical Quarterly*, 51(204): 289–306. doi:10.1111/j.0031-8094.2001.00231.x
* –––, 2004, “Multigrade Predicates”, *Mind*, 113(452): 609–681. doi:10.1093/mind/113.452.609
* –––, 2005, “Plural Descriptions and Many-Valued Functions”, *Mind*, 114(456): 1039–1068. doi:10.1093/mind/fzi1039
* –––, 2016, *Plural Logic*, second edition, revised and enlarged, Oxford: Oxford University Press.
* Parsons, Charles, 1977, “What Is the Iterative Conception of Set?”, in *Logic, Foundations of Mathematics, and Computability Theory*, Robert E. Butts and Jaakko Hintikka (eds), Dordrecht/Boston: D. Reidel, pp. 335–367. Reprinted in Paul Benacerraf and Hilary Putnam (eds.), *Philosophy of Mathematics: Selected Readings*, 2nd edition, 1983, Cambridge: Cambridge University Press, pp. 503–529. doi:10.1007/978-94-010-1138-9_18 and doi:10.1017/CBO9781139171519.027
* –––, 1990, “The Structuralist View of Mathematical Objects”, *Synthese*, 84(3): 303–346. doi:10.1007/BF00485186
* Quine, W.V., 1973, *Roots of Reference*, La Salle, IL: Open Court.
* –––, 1982, *Methods of Logic*, 4th edition, Cambridge, MA: Harvard University Press
* –––, 1986, *Philosophy of Logic*, 2nd edition, Cambridge, MA: Harvard University Press
* Rayo, Agustín, 2002, “Word and Objects”, *Noûs*, 36(3): 436–464. doi:10.1111/1468-0068.00379
* –––, 2006, “Beyond Plurals”, in Rayo and Uzquiano 2006: 220–254.
* –––, 2007, “Plurals”, *Philosophy Compass*, 2(3): 411–427. doi:10.1111/j.1747-9991.2007.00060.x
* Rayo, Agustín and Gabriel Uzquiano, 1999, “Toward a Theory of Second-Order Consequence”, *Notre Dame Journal of Formal Logic*, 40(3): 315–325. doi:10.1305/ndjfl/1022615612
* –––, 2006 (eds.), *Absolute Generality*, Oxford: Oxford University Press.
* Rayo, Agustín and Stephen Yablo, 2001, “Nominalism through De-Nominalization”, *Noûs*, 35(1): 74–92. doi:10.1111/0029-4624.00288
* Resnik, Michael, 1988, “Second-Order Logic Still Wild”, *Journal of Philosophy*, 85(2): 75–87. doi:10.2307/2026993
* Roberts, Sam, forthcoming, “Pluralities as Nothing Over and Above”, *Journal of Philosophy*. [[preprint of Roberts forthcoming available from the author](https://samrroberts.files.wordpress.com/2021/08/pluralities_as_nothing_over_and_above-5.pdf)]
* Rosen, Gideon and Cian Dorr, 2002, “Composition as Fiction”, in Richard M. Gale (ed.), *The Blackwell Guide to Metaphysics*, Oxford: Blackwell, pp. 151–174. doi:10.1002/9780470998984.ch8
* Rouilhan, Philippe de, 2002, “On What There Are”, *Proceedings of the Aristotelian Society*, 102(1): 183–200. doi:10.1111/j.0066-7372.2003.00049.x
* Rumfitt, Ian, 2005, “Plural Terms: Another Variety of Reference?” in José Luis Bermudez (ed.), *Thought, Reference and Experience: Themes from the Philosophy of Gareth Evans*, Oxford: Oxford University Press, pp. 84–123. doi:10.1093/acprof:oso/9780199248964.003.0004
* Russell, Bertrand, 1903, *Principles of Mathematics*, Cambridge: Cambridge University Press.
* Schein, Barry, 1993, *Plurals and Events*, Cambridge, MA: MIT Press.
* –––, 2006, “Plurals”, in Ernest Lepore and Barry C. Smith (eds.), *Oxford Handbook of Philosophy of Language*, Oxford: Oxford University Press, pp. 716–767. doi:10.1093/oxfordhb/9780199552238.003.0029
* Shapiro, Stewart, 1991, *Foundations without Foundationalism: A Case for Second-Order Logic*, Oxford: Clarendon. doi:10.1093/0198250290.001.0001
* –––, 1993, “Modality and Ontology”, *Mind*, 102(407): 455–481. doi:10.1093/mind/102.407.455
* Simons, Peter, 1982, “Plural Reference and Set Theory”, in Barry Smith (ed.), *Parts and Moments: Studies in Logic and Formal Ontology*, Munich: Philosophia Verlag, pp. 199–260. [[Simons 1982 available online](http://ontology.buffalo.edu/smith/book/P&M/)]
* –––, 1997, “Higher-Order Quantification and Ontological Commitment”, *Dialectica*, 51(4): 255–271. doi:10.1111/j.1746-8361.1997.tb00032.x
* –––, 2016, “The Ontology and Logic of Higher-Order Multitudes”, in Massimiliano Carrara, Alexandra Arapinis, and Friederike Moltmann (eds), *Unity and Plurality: Logic, Philosophy, and Linguistics*, Oxford: Oxford University Press, pp. 55–69. doi:10.1093/acprof:oso/9780198716327.003.0004
* Spencer, Joshua, 2012, “All Things Must Pass Away”, *Oxford Studies in Metaphysics*, 7: 67–92.
* Stenius, Eric, 1974, “Sets”, *Synthese*, 27(1–2): 161–188. doi:10.1007/BF00660894
* Tarski, Alfred (and John Corcoran, trans.), 1986, “What Are Logical Notions?”, *History and Philosophy of Logic*, 7(2): 143–154. doi:10.1080/01445348608837096
* Taylor, Barry and A.P. Hazen, 1992, “Flexibly Structured Predication”, *Logique et Analyse*, 35(139–140): 375–393.
* Uzquiano, Gabriel, 2003, “Plural Quantification and Classes”, *Philosophia Mathematica*, 11(1): 67–81. doi:10.1093/philmat/11.1.67
* –––, 2004, “Plurals and Simples”, *Monist*, 87(3): 429–451. doi:10.5840/monist200487324
* –––, 2011, “Plural Quantification and Modality”, *Proceedings of the Aristotelian Society*, 111(2_pt_2): 219–250. doi:10.1111/j.1467-9264.2011.00307.x
* van Inwagen, Peter, 1990, *Material Beings*, Ithaca, NY: Cornell University Press.
* Williamson, Timothy, 2003, “Everything”, *Philosophical Perspectives*, 17: 415–465. doi:10.1111/j.1520-8583.2003.00017.x
* –––, 2010, “Necessitism, Contingentism, and Plural Quantification”, *Mind*, 119(475): 657–748. doi:10.1093/mind/fzq042
* –––, 2013, *Modal Logic as Metaphysics*, Oxford: Oxford University Press.
* –––, 2016, “Reply to Linnebo”, *Canadian Journal of Philosophy*, 46(4–5): 677–682. doi:10.1080/00455091.2016.1205856
* Yablo, Stephen, 2000, “Apriority and Existence”, in Paul Boghossian and Christopher Peacocke (eds.), *New Essays on the A Priori*, Oxford: Oxford University Press, pp. 197–228. doi:10.1093/0199241279.003.0009
* Yi, Byeong-Uk, 1999, “Is Two a Property?” *Journal of Philosophy*, 96(4): 163–190. doi:10.2307/2564701
* –––, 2002, *Understanding the Many*, New York, NY: Routledge.
* –––, 2005, “The Logic and Meaning of Plurals, Part I”, *Journal of Philosophical Logic*, 34(5): 459–506. doi:10.1007/s10992-005-0560-9
* –––, 2006, “The Logic and Meaning of Plurals, Part II”, *Journal of Philosophical Logic*, 35(3): 239–288. doi:10.1007/s10992-005-9015-6

## Academic Tools

> | ![sep man icon](../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=plural-quant). |
> | --- | --- |
> | ![sep man icon](../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/plural-quant/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=plural-quant&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](https://philpapers.org/sep/plural-quant/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* [PhilPapers Bibliography on Plural Quantification](http://philpapers.org/browse/plural-quantification).

[Please contact the author with suggestions.]

## Related Entries

[Frege, Gottlob](https://plato.stanford.edu/entries/frege/) | [Frege, Gottlob: theorem and foundations for arithmetic](https://plato.stanford.edu/entries/frege-theorem/) | [generalized quantifiers](https://plato.stanford.edu/entries/generalized-quantifiers/) | [logic and ontology](https://plato.stanford.edu/entries/logic-ontology/) | [logicism and neologicism](https://plato.stanford.edu/entries/logicism/) | [mereology](https://plato.stanford.edu/entries/mereology/) | [Russell’s paradox](https://plato.stanford.edu/entries/russell-paradox/) | [set theory](https://plato.stanford.edu/entries/set-theory/)

### Acknowledgments

Thanks to Salvatore Florio, Allen Hazen, Frode Kjosavik, Tom McKay, David Nicolas, Agustín Rayo, and Gabriel Uzquiano for discussions and written comments on earlier drafts.

[Copyright © 2022](https://plato.stanford.edu/info.html#c) by  
Øystein Linnebo <[*oystein.linnebo@ifikk.uio.no*](mailto:oystein%2elinnebo%40ifikk%2euio%2eno)>
