# 蒙太古语义学 Montague (Theo M. V. Janssen and Thomas Ede Zimmermann)

*首次发表于 2011 年 11 月 7 日星期一；实质性修订于 2021 年 4 月 14 日星期三*

蒙太古语义是自然语言语义学及其与句法关系的理论。它最初由逻辑学家理查德·蒙太古（1930-1971）开发，并在后来被语言学家、哲学家和逻辑学家进行了修改和扩展。该理论的最重要特点是其使用模型论语义，这在现今逻辑语言的语义中是常用的，并且遵循组合性原则——即整体的意义是其部分的意义及其句法组合方式的函数。本条目介绍了蒙太古语义的起源，总结了经典理论的重要方面，并概述了最近的发展。最后，我们通过一个小例子来说明一些现代特点。

---

## 1. 引言

### 1.1 背景

蒙太古语义是理查德·蒙太古在 20 世纪 70 年代引入的自然语言语义学方法。他描述了他的目标如下：

> 语义学的基本目标是描述真句（在给定解释下）和蕴涵的概念（蒙太古 1970c，373 页脚）。

蒙太古方法的显著特点是模型论语义学、句法和语义之间的系统关系以及对自然语言片段的完全明确描述。他的方法构成了一场革命：在将数学方法引入句法的乔姆斯基革命之后，现在这些方法也被引入了语义学。

蒙太古的方法变得有影响力，许多作者开始在他的框架下工作，并举行了专门讨论“蒙太古语法”的会议。后来，他的方法的某些方面被改编或改变，成为普遍接受的或完全被放弃的。如今，由于蒙太古自己的工作以来语义学发生了许多变化，没有多少作者会将自己的工作描述为“蒙太古语义学”，但他的思想留下了重要的痕迹，并永远改变了语义学的面貌。在我们对蒙太古语义学的介绍中，重点将放在这些发展上。

理查德·蒙太古是一位专攻集合论和模态逻辑的数理逻辑学家。必须将他对自然语言的观点与他的数学背景相结合来理解。蒙太古认为自然语言与谓词逻辑一样，是一种形式语言。因此，在蒙太古看来，对自然语言的研究属于数学范畴，而不是心理学范畴（Thomason 1974, 2）。蒙太古阐述了他的观点：

> 在我看来，自然语言和逻辑学家的人工语言之间没有重要的理论差异；事实上，我认为可以用一个自然且数学上精确的理论来理解这两种语言的句法和语义。（蒙太古 1970c, 373）

有时候只有引文的第一部分被提及，这可能引起疑问，他是否没有注意到巨大的差异：例如，自然语言是在没有先验规则的情况下发展的，而人工语言具有明确的语法，并且是为特定目的而设计的。但是，整个引文清楚地表达了蒙太古对“没有重要的理论差异”的理解；他所追求的“单一的自然和数学精确的理论”在他的论文《通用语法》（Montague 1970c）中被提出。在蒙太古 1973 年的出版后，他变得最为著名，该理论被应用于当时哲学文献中广泛讨论的一些现象。

根据 Caponigro（即将出版），蒙太古对这个领域的兴趣是在 1966 年作为阿姆斯特丹大学的访问教授准备语言哲学研讨会时产生的。仅仅几年前，他曾认为“对英语的系统探索，事实上是对所谓的‘普通英语逻辑’的探索，要么非常费力，要么不可能”，并且“并不觉得有回报”（Montague and Kalish 1964, 10）。然而，在阅读奎恩（1960）的《词语与对象》以及乔姆斯基（1965）的《句法理论的方面》之后，他似乎改变了主意：后者打开了将自然语言的句法视为形式系统的视角，但未能提供任何对语言意义的严肃分析；前者提供了传统语法与形式逻辑之间的系统联系，而且比当代逻辑文本更加系统。事实上，蒙太古的语义工作在很大程度上受益于奎恩对“普通英语逻辑”的描述性洞察，但与前辈不同的是，他以严谨的数学术语建立了语言与逻辑之间的联系。

> 应该强调的是，这不是一个模糊的直觉问题，就像在基础逻辑课程中一样，而是一个我们赋予确切意义的断言。（蒙太古，1973 年，237 页）

接下来，我们将详细描述蒙太古语义的基本思想。第 2 节更详细地介绍了蒙太古语义的几个组成部分。第 3 节包括对哲学上有趣的方面的讨论，第 4 节提供了一个详细的例子和进一步阅读材料。

### 1.2 基本方面

为了实现他的目标，蒙太古应用了逻辑语言的标准方法：模型论语义学。这意味着，使用集合论的构造，定义了一个模型，并且自然语言表达式被解释为该宇宙中的元素（或集合，或函数）。这样的模型不应被看作是现实的模型。一方面，模型提供的信息超过了现实：自然语言不仅仅谈论真实世界的过去、现在和未来，还谈论可能发生的情况，或者是想象中的情况，或者根本不可能发生的情况。然而，另一方面，模型提供的信息较少：它仅仅将现实按照语言的观念进行了规定。例如：我们谈论质量名词，比如水，好像水的每一部分都再次是水，好像它没有最小的部分，这在物理上是不正确的。有关自然语言形而上学的更多信息，请参见巴赫 1986b。

蒙太古语义学对特定情境（例如真实世界）不感兴趣，而是对语言的语义属性感兴趣。在形式化这些属性时，必须引用一类模型，并且因此语言的解释将根据一组（合适的）模型来定义。例如，在介绍中我们提到，推演的表征是语义学的一个基本目标。该概念定义如下：如果在所有使得 A 的解释为真的模型中，B 的解释也为真，则句子 A 蕴含句子 B。同样，一个永真式在所有模型中都为真，而一个矛盾式在任何模型中都为假。

蒙太古语义学的一个重要特点是句法和语义之间的系统关系。这种关系由组合性原则描述，该原则的表述在现今是标准的：

> 复合表达式的意义是其部分的意义以及它们在句法上的组合方式的函数。(Partee 1984, 281)

举个例子：假设 walk 或 sing 的意义（对于类中的每个模型）被定义为共享属性（即是一个行走的个体或是一个唱歌的个体）的个体的集合。通过应用组合性原则，如果有一个规则将这两个表达式组合成动词短语 walk and sing，那么必须有一个相应的规则来确定该动词短语的意义。在这种情况下，结果的意义将是这两个集合的交集。因此，在所有的模型中，walk and sing 的意义是 walk 的意义的子集。此外，我们有一个将名词短语 John 与动词短语组合的规则。结果句子 John walks and sings 的意思是 John 是由动词短语所表示的集合的元素。请注意，在任何一个 John 是行走者和歌手的交集的模型中，他也是行走者的集合的元素。所以 John walks and sings 蕴含着 John walks。

组合性原则的一个重要结果是，在句子的句法组合中扮演角色的所有部分也必须有意义。而且，每个句法规则必须伴随一个语义规则，说明如何获得复合表达式的意义。因此，一个表达式的意义是由表达式的形成方式决定的，因此派生历史在确定意义方面起着作用。有关进一步讨论，请参见第 2.5 节。

蒙太古语义目标的制定（“表征句子的真实性和蕴涵”）在引言中提到，这表明该方法仅适用于陈述句。但这并非必然。在蒙太古 1973 年的论文中（241 页脚注），我们已经找到了如何处理祈使句和疑问句的建议。Hamblin（1973）和 Karttunen（1977）通过将疑问句分析为表示一组命题的方式给出了一种疑问句的语义，即由它们（陈述句）的答案所表达的命题集合；Groenendijk 和 Stokhof（1989）采取了另一种方法，将问题视为将逻辑空间划分为互相排斥的可能性。

由于蒙太古只考虑了孤立的句子，某些评论者指出句子边界是该方法的一个严重限制。但是对于篇章呢？一个明显的要求是对篇章中的句子逐一进行解释。那么如何处理句子边界上的指代共指？首先提出的解决方案是篇章表示理论（Kamp 1981）。一方面，这是蒙太古方法的一个衍生物，因为它使用了模型论语义；另一方面，它是一个偏离，因为（篇章）表示是一个重要的成分。现在有几种 DRT 的改进版本符合蒙太古的框架（参见 van Eijck 和 Kamp 1997）。后来的解决方案基于逻辑的改变；动态蒙太古语义学得到了发展，并提供了一种在逻辑中绑定自由变量的过程，这对后续公式产生了影响（Groenendijk 和 Stokhof 1990, 1991）。因此，句子边界对蒙太古语义并不是一个根本性的障碍。

## 2. 蒙太古语义的组成部分

### 2.1 独角兽和意义假设

蒙太古最有影响力的文章是《关于普通英语中量化的适当处理》（Montague 1973），通常简称为“PTQ”。它提出了一种英语片段，涵盖了当时广泛讨论的几种现象。其中一个例子引起了蒙太古语法的特点：独角兽（蒙太古语法的几篇出版物都以独角兽为插图）。

考虑两个句子：约翰找到了一只独角兽和约翰寻找一只独角兽。这两个句子在句法上是相似的（主语-动词-宾语），但在语义上却非常不同。从第一个句子可以得出至少存在一只独角兽，而第二个句子在所谓的逐字（或非特定的，或概念性的）阅读中不意味着独角兽的存在，并且在逐物（或特定的，或客体性的）阅读中意味着独角兽的存在。

这两个句子是一个传统问题的例子，称为“量化进入内涵语境”。传统上，整个第二个句子被视为一个内涵语境，蒙太古的解决方案的新颖之处在于他将 seek 的对象位置视为现象的源头。他将 seek 形式化为不是两个个体之间的关系，而是个体与一个更抽象的实体之间的关系（见第 2.2 节）。在这种分析下，不存在一只独角兽的存在。de re 阅读是以不同的方式获得的（见第 2.5 节）。

蒙太古的策略是将所有类别的表达式都应用最一般的方法，并在需要时通过意义假设（以及在某些情况下的逻辑分解）来缩小范围。因此，最初，find 也被认为是个体与这样一个抽象实体之间的关系，但某些意义假设限制了我们解释该片段的模型类的范围，仅限于那些 find 关系为（经典的）个体之间关系的模型。

由于这种策略的结果，蒙太古的论文有许多意义假设。现在，语义学家通常更喜欢直接在词汇意义中直接表达个别词汇项的语义属性，然后 find 直接解释为个体之间的关系。意义假设主要用于表达模型的结构属性（例如，时间轴的结构）以及词汇意义之间的关系。有关意义假设的讨论，请参见 Zimmermann 1999 年。

### 2.2 名词短语和广义量词

像猪、每只猪和小猪这样的名词短语，在很多方面在句法上表现得相似：它们可以出现在相同的位置，可以被并列等。但是，统一的语义似乎是有问题的。有人提出，每只猪表示普遍的泛指猪，而一只猪表示任意的猪。这样的提议被著名的刘易斯（1970）拒绝了，他提出了一个问题，即普遍的猪是什么颜色，是所有颜色还是无色的？

蒙太古提出了描述性短语的指称是一组属性。例如，约翰的指称是包含适用于他的属性的集合，而每个男人的指称是适用于每个男人的属性的集合。因此，它们在语义上是统一的，任意量词短语（包括大多数但不是全部）的并列和/或析取可以以统一的方式处理。

这种抽象方法导致了广义量词理论，参见 Barwise 和 Cooper 1981 以及 Peters 和 Westerståhl 2006。广义量词理论最受欢迎的成就之一是对所谓的“负极性项目”进行语义表征：例如 yet 和 ever 等词。它们的出现可以由否定来许可：The 6:05 has arrived yet is out，而 The 6:05 hasn’t arrived yet is OK。但是还有更多的上下文中可能出现负极性项目，而句法学家未能对它们进行表征。Ladusaw（1980）通过使用广义量词理论的表征来做到这一点。这被广泛认为是形式语义学的一大成功。他的提议大致如下。向下蕴涵表达式是指从超集到子集的推理被许可的表达式。No 是向下蕴涵的，因为从 No man walks 可以推出 No father walks。只有在负向蕴涵表达式的范围内解释负极性项目才是可接受的，例如 No man ever walks。进一步的研究表明，这种分析需要细化，并且应该使用负极性项目的层次结构（Ladusaw 1996，Homer 2021）。

### 2.3 逻辑与翻译

表达式可以直接与模型中的某个元素相关联。例如，与一些个体的集合相关的 walk。然后，还必须直接指定有关含义的操作，这导致了诸如以下的表述：

> G3(┌is┐) 是函数 f∈((2I)A×A)Aω，对于所有 x∈Aω，所有 u,t∈A 和所有 i∈I，当且仅当 t=u 时，f(x)(t,u)(i)=1。（蒙太古 1970a, 195）

这样的描述不容易理解，也不方便处理。蒙太古（1973, 228）说，“间接处理可能更加明晰”。为此，他引入了一种称为“内涵逻辑”的语言。上述描述的操作由 ∧λtλu[t=u] 表示。λt 表示它是一个以 t 为参数的函数，λu 也是如此。因此，λtλu[t=u] 是一个接受两个参数的函数，如果参数相等则返回 true，否则返回 false。前面的 ∧ 表示我们考虑从可能的世界和时间时刻到这样定义的函数的函数。

蒙太古的“内涵逻辑”引起了人们的注意的三个特点：

1. 这是一种高阶逻辑。尽管类型逻辑在当时已经是一个成熟的逻辑框架，但语言学家、哲学家和数学家更熟悉一阶逻辑（即只有基本实体的变量的逻辑）。由于在蒙太古语义学中，表达式的部分也必须具有意义，因此需要一种高阶逻辑（我们已经看到每个人都表示一组属性）。
2. 它是内涵的，因为它既不遵守莱布尼茨的共指项替换定律，也不遵守存在泛化定律，从而似乎将逻辑与自然语言更加接近。为了实现这一点，蒙太古将克里普基（1963）的一阶模态逻辑的开创性语义技术推广到了高阶类型逻辑。然而，使用双排序的外延类型逻辑（Gallin 1975；Zimmermann 1989；2021）也可以实现相同的解释效果，这是许多语义学家今天更喜欢的方法。
3. 蒙太古使用了λ抽象，这在当时不是逻辑的标准组成部分。如第 4.1 节所示，λ运算符使得可以表达高阶函数，这些函数可以作为句子部分对真值的贡献。巴巴拉·帕蒂在关于“蒙太古语法的第一个十年”的演讲中曾经表达过λ表达式的重要性：“λ改变了我的生活”（Partee 1996，24）。如今，λ表达式是自然语言语义学中的一种标准工具，特别是在由海姆和克拉策（1998）广为流行的类型驱动方法中。在第 4.1 节中，将给出一个例子，以说明λ表达式的强大之处。

通过组合翻译作为获取明确意义表达的工具，间接解释的动机具有一些重要的后果：

1. 翻译是获取代表意义的公式的工具。不同但等价的公式同样可接受。在本文的引言中提到，蒙太古语法提供了一种获取逻辑翻译的机械过程。事实上，蒙太古将 Every man runs 翻译的结果与传统翻译并不完全相同，尽管等价，详见第 4.1 节的例子。
2. 将翻译转化为逻辑只是一种符号上的便利，在原则上是可有可无的。因此，在蒙太古语义中，将翻译转化为逻辑符号并不能提供唯一的“逻辑形式”。
3. 对于每个句法结构（操作加规则，在蒙太古的术语中），都有一个语义规则，将相应的意义表示组合在一起。巴赫（1976）恰当地将这种解释策略称为“规则对规则假设”。
4. 不允许依赖公式句法特征的操作。詹森（1997）对此方面的几个提议进行了批评。他表明，在这方面存在缺陷的提议要么是不正确的（对相关句子做出错误预测），要么可以进行修正和概括，从而得到改进。

使用逻辑符号表示意义的方法具有悠久的历史，至少可以追溯到像达尔加诺和莱布尼兹这样的哲学家，他们开发了形式语言以清晰地表达哲学。在 19 世纪，有几个提议使用人工语言来使数学论证更加透明，例如弗雷格和皮亚诺。弗雷格的《概念符号》（Frege 1879）可以看作是谓词逻辑的诞生：他引入了量词。他的动机来自于数学的需求；他在关于自然语言的论文中没有使用他的《概念符号》。罗素（1905）使用逻辑来表示自然语言的意义。他论文中的一个经典例子是对“法国国王是秃头”的分析。从句法上看，它具有主谓结构，但如果将其逻辑上构造为主谓结构，那么法国国王，它不表示任何东西，就不能成为主语。因此，句法形式和逻辑形式可能会有所不同：自然语言模糊了真正意义的视野。这被称为“误导性形式论题”。因此，当时的语言哲学家将逻辑视为改进自然语言的工具，这是蒙太古语义所陌生的目标。事实上，蒙太古（1970c）使用高阶函数类型理论（Church 1940）作为翻译的目标，开发了罗素分析的“组合”版本，它确实保留了源语言（英语）的成分结构。关于将自然语言翻译为逻辑的历史的有趣概述可参见 Stokhof 2007。

### 2.4 内涵性和重言式

蒙太古将句子的指称定义为从可能的世界和时间瞬间到真值的函数。这样的函数被称为“内涵”。正如他所说（蒙太古 1970a，220），这使得处理常见现象的语义成为可能，例如修饰语，例如在“必然地，该恩的父亲是亚当”。它的指称不能从“该恩的父亲是亚当”的真值中获得：我们需要知道其他可能的世界和时间瞬间的真值。内涵方法还使得处理几个经典难题成为可能。蒙太古 1973 年的两个例子是：“温度正在上升”，这不应该被分析为某个数字在上升；以及“约翰希望捕捉一条鱼并吃掉它”，这不应该被分析为暗示约翰有一条特定的鱼在心中。

动态语义因所有重言式具有相同的意义（同义）而受到批评。事实上，像约翰生病或他没有生病这样的重言式的内涵是始终为真的函数，其他重言式也是如此。如果我们有兴趣在语义上区分重言式，那么需要对“意义”和“等价性”的概念进行细化：意义应该能够区分重言式之间的差异，而“等价性”应该对经过细化的意义概念敏感。解决这个问题的最早提议可以追溯到卡纳普（1947 年，第 14 节），后来由刘易斯（1970 年，第 5 节）接受：命题通过包含其部分的意义来构造。因此，“绿草是绿色的”和“白雪是白色的”确实具有不同的意义。然而，词汇同义词仍然存在问题。由于"woodchuck"和"groundhog"是指同一物种的名称，根据这种观点，"约翰相信菲尔是一只土拨鼠"与"约翰相信菲尔是一只土拨鼠"是等价的。我们可以将信念背景视为一个单独的问题，但大多数作者将其视为所有重言式等价性问题的一部分。

后来，出现了几种处理这个问题的提议；可以在 Bäuerle 和 Cresswell（2003 年），Fox 和 Lappin（2005 年）和 Egré（2021 年）的调查中找到。后者解释了有两种策略：第一种是引入不可能的世界，在这些世界中，"woodchuck"和"groundhog"不等价；第二种是引入一个蕴涵关系，该关系具有不从互逆蕴涵中得出恒等的属性。Fox 和 Lappin 采用了第二种策略。

### 2.5 范围和派生历史

范围歧义的一个众所周知的例子是每个男人都爱一个女人。是否只涉及一个女人（例如圣母玛利亚），还是每个男人都爱一个不同的女人？这个句子没有词汇上的歧义，也没有句法论证来给它们分配多于一个成分结构。如何解释这种歧义？

在蒙太古 1973 年的论文中，通过为该句提供两个不同的推导来处理范围歧义。在每个都具有广泛范围的解读中，该句由每个男人和爱一个女人组成。在只涉及一个女人的解读中，该句由每个男人爱他 1 得到。他 1 是一种人工构造的占位符，或者可以说是一种句法变量。一种特殊类型的规则，称为“量化内规则”，将用一个名词短语或代词（如果有多个此类占位符的出现）替换这个他 1。该占位符对应一个逻辑变量，由量化内规则的语义对应物绑定。对于正在讨论的句子，将量化内规则应用于一个女人和每个男人都爱他 1 的效果是产生所需的句子，并且与一个女人对应的量词具有广泛的范围。如果我们将其推导描绘为一棵树，由于引入和后来移除他 1，这棵树将比句子的成分结构更大。

蒙太古还将这种量化内规则用于其他现象。一个例子是共指性：玛丽爱她亲吻的那个男人是从他 1 爱他 1 亲吻的那个男人得到的。而约翰寻找一只独角兽的 de re 解读是从一只独角兽和约翰寻找他 1 得到的。

许多研究人员不喜欢使用强大的句法规则和人工符号（him1）的这种分析。下面我们考虑两种纠正策略。

第一种策略是否认歧义。一些语言学家认为范围顺序与表面顺序相同；这被称为“杰肯多夫原则”（Jackendoff 1972）。但是有些句子不适用于这种方法。其他人认为只需获得最弱的解读（每个宽范围），当有额外信息可用时，会推断出更强的解读。但是有些句子的不同范围解读在逻辑上是独立的，例如每个女人都爱一个男人。

第二种策略是以一种不同于量化规则的方式捕捉歧义。历史上的第一种方法是将名词短语的解释放入存储中，需要时可以检索这些解释：检索的不同阶段对应着范围的差异。有人认为这是一种语法，其中语法和语义之间的直接对应关系已经放松。这种方法被称为“库珀存储”（Cooper 1983），以提出这个方法的作者命名。后来提出了 DRT（=话语表示理论），其中使用表示来解释这种歧义（van Eijck and Kamp 1997）。

最近的一种方法是通过“提升规则”（见第 3.3 节）：名词短语的意义被“提升”到更抽象的层次，不同的层次产生不同的范围解读（参见 Hendriks 2001 和 Jacobson 2014）。

即使可以避免派生历史对于范围和共指性的作用，仍然存在其他现象，其中派生历史起到了作用。一个例子是约翰想知道爱丽丝何时说她会离开。这句话在离开的时间和说话的时间之间存在歧义。因此，这个句子是有歧义的，即使没有理由将多个成分结构分配给它。Pelletier（1993）提出了这个句子和其他句子，并说：“为了保持组合性原则，理论家们采用了一些或多或少没有动机的设备（除了保持原则）：Montagovian 的“量化内”规则，痕迹，空缺，[...]。”如果假设意义分配与成分结构直接相关，那么可以理解 Pelletier 的反对意见。但是，如第 1.2 节所解释的那样，情况并非如此。派生过程指定了以哪种顺序组合哪些规则，这个派生过程构成了意义分配函数的输入。成分结构由句法规则的输出确定，不同的派生过程可能生成相同的成分结构。通过这种方式，语义的歧义得到了解释。如果某物不是旨在作为“成分结构”，那么就不应该称之为“成分结构”，然后因为它没有所需的属性而予以反驳。

在语法的几个理论中，推导树和成分树之间有所区别。在树相邻语法（TAGs）中，关于爱一个女人的句子的不同范围解读在基本树中替换名词短语的顺序上有所不同。在乔姆斯基语法中的一个经典例子是猎人的射击是血腥的，这个句子在猎人射击或者猎人被射击之间存在歧义。这两种解读来自于两个不同的来源：一个是猎人是句子的主语，另一个是猎人是句子的宾语。

## 3. 哲学方面

### 3.1 从弗雷格到内涵

在蒙太古的大部分语义工作中，他明确采用了弗雷格（1892 年）对“意义”和“指称”的区分的版本。弗雷格最初的思路涉及到像“希腊人不知道晨星是夜星”这样的句子，这似乎并不表达希腊人对金星的自我认同感到困惑。弗雷格的分析通过在普通语境中使描述性名称（如晨星）指称它们的指称对象，但在嵌套从句（或更一般地说，在“间接语境”中）中指称不同的东西：它们的“意义”- 一种语义值，捕捉对象被引用的方式。由于通过晨星来指称天体与通过夜星来指称天体不同，嵌套从句并不指称一个分析真理，而是一个可能被希腊人忽视的偶然命题。

Frege 的方法被认为存在一些问题。其中之一涉及间接语境的迭代，比如戈特洛布怀疑希腊人不知道晨星是夜星。虽然 Frege 没有明确解决这个问题，但通常认为他采用了一种无限层次的越来越间接的意义，与每个否则不含糊的表达式相关联（Dummett 1981, 267; Carnap 1947, §30; Kripke 2008, 183; 但请参见 Parsons 1981，以获得更谨慎的解释）。所谓的 Frege 分析方法被批评为在必要之外增加了歧义（Janssen 2012），并引发了严重的可学习性问题（Davidson 1968, 11）。尽管 Montague 承认了意义的层次结构，但他没有将其用于分析迭代的间接语境。相反，他将 Frege（1892）的意义与 Carnap（1947）的意向相对应-在可能世界（或世界-时间对）的逻辑空间上的集合论函数，其值是表达式的指称-它们的外延。特别是，描述词如何指称其指称物是通过其对偶事实的依赖来捕捉的。作为一个例子，著名的 Frege 描述词在意向上是不同的，只要存在一个可能的世界，在这个世界中，黎明时最亮的星不是夜晚最亮的星。

通过意义到内涵的替代，为迭代内涵性的另一种方法铺平了道路：Kripke（1963）对模态的语义进行了概括，Montague（1970b，73）解释了从命题运算符的角度来看从句嵌入，其外延与其论证的外延一样，取决于逻辑空间中的给定点。事实证明，这种所谓的“邻域语义”在迭代的间接环境中甚至不需要参考意义层次（同上，76），这就是为什么 Montague 将其作为他对自然语言的一般组合分析的基础。Montague（同上，75f.）仍然将他的方法与 Frege 的方法保持一致，从而强调了语义理论整体架构中的共同点，他将其称为“Frege 的功能原则”：

> 一个公式的外延是其部分的普通外延（不在间接语境中的部分）的外延的函数（即[…]不在运算符的范围内），以及那些在间接语境中的部分的内涵（Frege 也称之为间接外延）。 （Montague 1970b，74f。）

此外，Montague（1970c，390）将他的参考的一项关键构造称为“Fregean interpretation”；在他的类型逻辑层次中，内涵由字母“s”标记，这是“sense”的缩写（同上，379）。这种符号在语义学中已经相当常见，尽管“s”经常被认为代表可能的情境！

蒙太古在他的语义工作中只有在一个点上放弃了他的弗雷格立场：在他的论文《英语作为形式语言》（1970a）中，他采用了“罗素式”的指称一级架构，并对弗雷格对非命题意义的合理性提出了疑问（同上，第 9 节，第 11 条注），从而预示了卡普兰（1975）对弗雷格 1892 年和罗素 1905 年框架的比较。然而，在他的《通用语法》中，蒙太古评论道：

> 然而，我想撤回我对于在意义和指称之间没有区别的可能性的强调[...]。虽然在特殊情况下可以避免这种区别，但对于一般理论来说，它仍然是必要的，并且可能是解决特殊情况的最清晰的方法。（蒙太古 1970c，374 页，脚注）

尽管蒙太古倾向于淡化这种差异，从意义到内涵的转变已被证明对语义分析的细粒度有着重大影响。特别是如第 2.4 节所述，任何两个逻辑等价的句子都具有相同的内涵；然而，如果它们的真值不以相同的方式确定，它们的意义将会分歧。蒙太古指出了如何通过世界和语境之间的不匹配来避免这种不受欢迎的后果，从而创造出他所称的“不可实现的”参照点（同上，382 页），但他没有提供详细的分析来证实他的粗略言论。

### 3.2 动态语义

对于蒙太古来说，组合性原则似乎不是一个需要深思熟虑或讨论的主题，而是唯一的前进方式。实际上，他将组合性作为他的“意义理论”的核心部分（蒙太古 1970c，378），后来总结为口号：“语法是一种代数，语义是一种代数，意义是它们之间的同态映射”（Janssen 1983，25）。然而，尽管蒙太古将“弗雷格的功能性原则”用于描述外延和内涵如何组合在一起，但他并没有为组合性总体提供一个特殊的术语。后来的作者将组合性原则视为蒙太古工作的基石，也使用了“弗雷格的原则”这个术语（最早由 Cresswell 1973, 75 提出）；Thomason 1980 是“组合性”这个术语的早期来源。

有人声称蒙太古对代词的分析不是组合性的。然而，事实并非如此。为了解释他对代词处理的组合性质，Janssen（1997）和 Dowty（2007）解释了逻辑中变量的解释；我们遵循他们的解释。考虑传统的塔斯基解释中的以下子句，这是关于谓词逻辑的解释。

1. [[φ∧ψ]]g=1 当且仅当 [[φ]]g=1 且 [[ψ]]g=1
2. [[∃ xφ]]g=1 当且仅当存在某个 h，h∼xg 且 [[φ]]h=1

第一个子句说：当使用赋值 g 时， φ∧ψ 为真当且仅当使用赋值 g 时， φ 和 ψ 为真。第二个子句引入了赋值 h （通过 ∼xg）它们与 g 相等，除了它们可能为变量 x 分配的值。蒙太古使用相同的格式，不同之处在于除了 g 之外，他还有 i，即参考时间和 j，即可能世界，作为上标。

在条款的制定中，没有什么可以被指定为“意义”，实际上它是一个以 g 和 h 为参数的真理定义。那么这（以及蒙太古的工作）如何是组合的呢？

答案需要一个视角的转变。一个公式φ的意义，简称为 M(φ)，是使得该公式为真的赋值集合。然后第一个条款说

 M(φ∧ψ)=M(φ)∩M(ψ)，

所以对这两个意义进行了简单的集合论组合。并且

M(∃x φ)={g∼xh∣h∈M(φ)},

即，{g∣对于某个 h∈M(φ)，g∼xh}，可以描述为：用所有的 x 变体扩展集合 M(φ)。（对于‘x’的引用可能被认为是有问题的，但是蒙太古通过为变量分配适当的含义，甚至消除了这种非组合性的痕迹；有关详细信息，请参见 Zimmermann 和 Sternefeld 2013 年第 10 章。）一般来说，在蒙太古语义中，表达式的含义是一个函数，其定义域为三元组⟨时间瞬间，可能世界，变量赋值⟩。

是否可能实现自然语言的组合性？明显的反例候选人是习语，因为它们的意义似乎不是由构成它们的词语建立起来的。然而，Westerståhl（2002）提出了一系列方法，从复合基本表达式到构成部分的异常含义。Janssen（1997）驳斥了文献中提出的其他几个反例。

组合性有多强？数学结果表明，任何语言都可以通过使用非正统的语法（Janssen 1997）或使用非正统的语义（Zadrozny 1994）来给出组合语义。然而，他们的证明在实践中并不有用。Hodges（2001）展示了在什么情况下给定的片段的组合语义可以扩展到更大的语言。

形式语义学家之间对组合性的作用和地位没有一致的看法；至少有以下四个立场被提出（Partee 1996 中给出了几乎相同的列表）：

1. 组合性是一种基本的方法论原则；任何提议都应遵守它。Janssen（1997）和 Jacobson（2014）都是这一立场的拥护者。
2. 组合性是一种好的方法，但也可以使用其他方法。例如，可以以实质性的方式使用形式化的意义表示。一个例子是 DRT（篇章表示理论，Kamp 1981）。
3. 组合性是一种理想，但一个提议不一定要满足它。
4. 是否能实现组合性是一个经验问题。有关讨论，请参阅 Dowty 2007。

Janssen 1997 和有关组合性的条目中对组合性进行了广泛讨论。

### 3.3 句法类别和语义类型

根据蒙太古的观点，语法的目的是为了提供给语义的输入：

> 除了作为语义的前提之外，我没有看到语法有任何兴趣。（蒙太古 1970c，223）

尽管在他看来语法是次要的，但他在规则中明确地使用了一些临时的语法工具。

在蒙太古 1970a 和 1970c 中，句法类别和语义类型之间的关系仅由列表给出。蒙太古（1973）定义了一种系统关系，其结果与范畴语法中的关系相同。然而，蒙太古的语法不是范畴语法，因为规则并不总是由类别驱动，并且其中一些规则不是连接规则。

针对这两个方面，已经提出了改变情况的建议。一个方向是更接近范畴语法的理想，只使用类型驱动的规则，有时允许对连接规则的权力进行有限扩展（例如，Morrill 1994，Carpenter 1998）。另一种方法是尽可能地将句法理论的见解纳入蒙太古语法中，特别是源自乔姆斯基传统的理论。Partee（1973）首先采取了一步，让语法生成结构（标记括号化）；在 Rosetta 翻译项目中使用了一个句法复杂的语法（具有乔姆斯基运动规则）。Heim 和 Kratzer（1998）的有影响力的教材通过将类型驱动的解释应用于（乔姆斯基的）逻辑形式的句法层面，结合了这两种方法。

在他的句法解释中，蒙太古倾向于将“逻辑”词语（如冠词 the、a、every 和连词 and、or、not）作为同类词处理，即不通过词汇条目，而是作为特定句法规则的效果；这个决定的原因尚不清楚，但可以推测这是对语法意义以逻辑性为基础的表征的一部分，可能沿着塔斯基的 1986 年不变性标准的思路。因此，对于 John walks and sings 和 John walks and Mary sings，需要不同的规则：从句法上看，前者是动词短语的连接，而后者是句子的连接。然而，and 的两个意义密切相关，却错过了一个概括性的规则。作为一种通用解决方案，提议使用改变表达式类别的规则（或者替代的通用原则）——这种变化对应于“提升”意义的语义规则。例如，将 and 作为动词短语之间的连接词的意义是通过将句子连接词∧的意义提升为λPλQλx[P(x)∧Q(x)]得到的。这种分析方法在 Partee 和 Rooth 1983、Partee 1987、Hendriks 2001 和 Winter 2001 中得到了广泛研究。

蒙太古在 20 世纪 80 年代的蒙太古语法鼎盛时期，通过完全明确的句法定义片段的方法已经不如以前受欢迎。现在的语义学家更喜欢关注特定现象，提出只涉及语义方面的规则。这种倾向受到了 Partee 在 Janssen 1997 和 Jacobson 2014 中的批评，其中实际提供了一个片段。

### 3.4 语用学

句子的真实条件有时会随着使用的语境而变化。因此，我是否快乐是真的，取决于说话者是谁；其他例子包括这里和这个的指代。蒙太古（1968 年；1970b 年）解决了这些因素，指出除了时间和可能的世界之外，还可以通过引入其他参数来处理它们。尽管偶尔受到批评（Cresswell 1973, 111; Lewis 1980, 86f.），但通过固定有限的参数列表来处理语境依赖已经成为形式语义学中相当标准的做法。

蒙太古最初将语境参数与时间和世界并列处理，但在《通用语法》（Montague 1970c）中，他指出应该区分那些确定内容的参数（根据 Frege 1892 年的说法，间接语境中所指的是什么）和构成内容的参数：

> 因此，意义是两个参数的函数-一个可能的世界和一个使用的语境。第二个参数是为了允许处理指示代词、第一和第二人称单数代词以及自由变量（被视为一种指示代词）等指标表达式。另一方面，意义只是一个参数的函数，被视为可能的世界。直观上的区别是：意义是作为表达式的解释而起作用的实体（因此，如果复合表达式的解释始终是其组成部分的解释的函数，不能仅仅与可能的世界的函数等同），而意义是有时由表达式所指的内涵实体。（蒙太古 1970c，379）

虽然这些言论与动态语义的双索引方法（Kamp 1971）相去甚远，但它们确实展示了区分语境和索引的可变性标准的基本思想（Lewis 1980）。特别是，蒙太古的意义与卡普兰（1989）的字符具有核心特征：两者都将参数化的语境映射到命题，理解为（特征函数的）可能世界的集合。

蒙太古（1970c，68）在处理语境依赖性时遵循了巴尔-希勒尔 1954 年的方法，将其视为语用学的一部分。直到他去世后，他的框架才与语用学的其他方面联系起来。特别是，在蒙太古语法的早期工作中，提出了各种关于预设和（常规的）蕴涵的组合特征的建议（Peters 1979; Karttunen and Peters 1979），但后来的处理并不总是完全组合的，考虑了几个语境因素（Beaver 1997）。在类似的思路中，传统的早期工作对将蒙太古语义直接应用于（陈述性）句子的非陈述性用途持乐观态度（Cresswell 1973），但后来的解释必须引入更多的语言意义，包括对话者观点的模型（Gunlogson 2003）。

### 3.5 本体论

蒙太古的语义分析是以一种类型逻辑层次结构为基础的，其基本成分是真值、可能的个体和可能的世界。虽然个体和世界的确切性质取决于特定模型（或“弗雷格解释”）的（任意）选择，但真值 1（真）和 0（假）超越了所有模型的类别，从而强调它们作为逻辑对象的地位。当前语言语义学中的许多工作仍然应用蒙太古的类型逻辑层次结构，但通常通过事件（或更一般地说：事件性）来丰富动词和动词短语的指称对象（巴赫 1986a；帕森斯 1990）。

在关于内涵分析的早期工作中（卡尔纳普 1947 年，卡普兰 1964 年），可能的世界被认为是适当外延语言的模型。出于第 3.1 节所示的原因，蒙太古（1969 年，164 页）打破了这一传统，借鉴了基于可能的世界作为非结构化基本对象的克里普克的可能性解释。在他的论文《论某些哲学实体的本质》（蒙太古 1969 年）中，他认为这个看似不太重要的技术创新为哲学分析开辟了新的视角，通过将某些“可疑”的实体归约为谓词内涵或属性-将可能的世界映射到对象集合的函数。这个想法是，一旦克服了内涵语言语义学的概念和技术问题，它们可以取代外延谓词逻辑成为哲学论证的基础：

> 哲学总是有能力扩大自己；也就是说，通过集合论内的元数学或模型论手段，可以“证明”超越集合论的语言或理论，然后在新语言中进行新的哲学分支的交易。现在是时候迈出这样一步，奠定内涵语言的基础了。（蒙太古 1969 年，165f.）

蒙太古通过对疼痛、任务、义务和事件的详细分析，以二阶意向逻辑的术语来阐述他的观点，这包含了他稍后对英语的组合解释的核心要素。

虽然在语义学中，将内容分析为可能世界已经变得很常见，但并不总是认为可能世界完全没有结构。以 Kratzer（2002）为例，她认为动词“知道”将主语与事实联系起来，因此其解释需要诉诸于世界的部分整体论：事实是世界的具体部分。此外，与 Kripke 最初的方法类似，语义理论经常在逻辑空间上施加一些外部结构。因此，可访问关系和世界之间的距离度量被用来解释命题态度（沿着 Hinitkka 1969 的思路）和虚拟条件句（遵循 Lewis 1973）。同样，个体的宇宙（或蒙太古所说的“实体”）现在让位给了一个更丰富的结构化对象域，包括物质及其部分，可以作为质量名词（如水）的扩展（Pelletier＆Schubert 2003），以及群体及其成员，由复数名词短语表示（Link 1983）。当考虑到属性（喜欢约翰）作为谓词可能成立的实体时（玛丽喜欢喜欢约翰），需要额外的结构：属性理论提供了将它们纳入的工具（Turner 1983）。

对于蒙太古的高阶意向逻辑作为自然语言语义解释工具的适用性，偶尔会产生疑问。

> 在我看来，这似乎是蒙太古语义学家采用的策略，他们实际上非常致力于组合性。[...]. 然而，这是有代价的。在这种“类型论上升”中引发的高阶实体在哲学和心理语言学上比我们最初的个体更不现实。因此，这种上升必然会削弱理论的心理语言学和方法论现实性。（Hintikka 1983, 20）

这个反对意见没有意识到高阶抽象在组合语义中所起的作用，其作用并不是形成关于高阶函数的句子。相反，λ-抽象被用作描述表达式对更大的句法环境的组合贡献的启发性工具（参见 Zimmermann 2021，第 2.1 节）。因此，例如，冠词的扩展被定义为它在句子（主语位置）中出现时对真值的贡献，这可以用与其组合的名词和动词短语的扩展来描述 - 而这些扩展本身就是集合（通过类似的推理）。因此，抽象的高阶对象仅仅是描述组合性运动学的便利方式，并不用作所描述的语言句子的对象，也不用作其术语所指的对象。正如一个例子，可以证明，即使蒙太古 1973 年的英语片段的（间接）解释使用了对二阶变量的λ-抽象，其表达能力也比高阶类型逻辑要弱得多，甚至没有资源来制定其词汇项遵守的某些意义假设（Zimmermann 1983）。实际上，Hintikka 的替代（博弈论）语义在以组合方式表述时也不会更好（参见 Hodges 1997 或 Caicedo 等人 2009）。

## 4. 结论说明

### 4.1 遗产

蒙太古革命了语义理论领域。他引入了数学逻辑的方法和工具，并为语义学的明确性设定了标准。现在所有的语义学家都知道逻辑不仅仅只有一阶逻辑。

### 4.2 进一步阅读

最近的介绍是 Jacobson 2014。对于语言学家和哲学家来说，这是一个对该领域的温和介绍。它介绍了该方法取得的几个成功案例。较早的介绍是 Dowty et al. 1981 和 Gamut 1991，它们更加技术性，并为 Montague 的原始论文做准备。Partee 和 Hendriks（1997）以及 Partee（2011）提供了该领域历史的概述；Caponigro（即将出版）在 Montague 的生平背景方面提供了广泛的背景资料。重要论文集包括 Portner 和 Partee（编辑）2002 和 Partee 2004；更多信息可在 McNally 和 Szabó（即将出版）编辑的专著中找到。《组合性手册》（Werning et al. 2011）讨论了该方法的许多方面。该领域最重要的期刊是《语言学与哲学》、《语义学杂志》、《自然语言语义学》和《语义学与语用学》。

### 4.3 示例

下面给出一个小例子，它由两个句子组成：John is singing 和 Every man is singing。该例子不是按照 Montague 的原始方式呈现的，而是现代化的：有一个提升规则，冠词是一个基本表达式，不考虑内涵方面的因素。

语法有四个基本表达式：

1. John 是专有名词类别的表达式。它的指称在逻辑中由 John 表示的个体。
2. 不及物动词 sing 表示一个集合（歌手的集合），并由谓词符号 sing 表示。
3. 普通名词“man”，表示一个由 man 代表的集合。
4. 限定词“every”。它的表示式是λPλQ∀x[P(x)→Q(x)]；下面将对这个公式进行解释。

语法有三条规则。

1. 一个以专有名词作为输入并生成名词短语的规则。输入词不会改变：它被提升到一个“更高”的语法类别。从语义上讲，它的意义被提升到一个更抽象、更“高”的意义：将 John 的指称表示为名词短语的λP[P(John)]。公式的解释如下。P 是一个属性变量：如果我们为 P 选择了一个解释，我们可以说 P 是否适用于 John，即 P(John)是否为真。λP 抽象了 P 的可能解释：表达式λP[P(John)]表示一个函数，它以属性作为输入，并在属性适用于 John 时返回真，否则返回假。因此，John 的指称是他所具有的属性集的特征函数。
2. 一个以名词短语和不及物动词作为输入，并生成句子作为输出的规则：从 John 和 sing 产生 John is singing。相应的语义规则要求将名词短语的指称应用于不及物动词的指称。这表示为λP P(John)。当应用于 sing 参数时，由λP[P(John)]表示的函数在谓词 sing 适用于 John 时返回真，因此仅当 sing(John)为真时。因此，λP P(John)和 sing(John)是等价的。后者的公式可以通过去除λP 并将 sing 替换为 P 来获得。这称为“λ转换”。
3. 一个以限定词和普通名词作为输入，并生成名词短语的规则：从 every 和 man 产生 every man。从语义上讲，限定词的指称必须应用于普通名词的指称，因此λPλQ∀x P(x)→Q(x)。通过λ转换（刚刚解释过），这简化为λQ∀x[man(x)→Q(x)]。这个结果表示一个函数，当应用于属性 A 时，仅当所有的人都具有属性 A 时返回真。

最后一个规则给出的示例帮助我们理解了每个表示属性 A 和 B 之间关系的:的公式，该公式在每个 A 都具有属性 B 的情况下成立。

下一步现在很容易。应用将名词短语和不及物动词组合的规则到最后的结果上，产生“每个人都在唱歌”。语义规则的输出是λQ∀x man(x)→Q(x)。通过λ转换，我们得到∀x[man(x)→sing(x)]，这是“每个人都在唱歌”的传统逻辑表示。

注意λ运算符的作用：

1. 约翰和每个男人都以类似的方式进行解释：属性集合。这些集合可以通过 lambda 运算符表示。
2. 每个男人和歌唱在句法上处于相同的水平，但语义上歌唱扮演了一个从属的角色：它嵌入在公式中。这种层级的转换是由于 lambda 运算符的存在。

<!--md-padding-ignore-begin-->
## Bibliography

* Angelelli, I. (ed.), 1967, *Gottlob Frege. Kleine Schriften*, Hildesheim: Olms.
* Bach, E., 1976, “An extension of classical transformational grammar”, in J. M. Sadock, D. J. Dwyer, S. C. Song, and E. W. Bach (eds.), *Problems in Linguistic Metatheory* (Proceedings of the 1976 conference), pp. 183–224. East Lansing, Michigan: Michigan State University.
* –––, 1986a, “The algebra of events”, *Linguistics and Philosophy*, 9: 5–16. Reprinted in Portner and Partee (eds.) 2002, pp. 324–33.
* –––, 1986b, “Natural language metaphysics”, in R. Barcan Marcus, G. J. W. Dorn, and P. Weingartner (eds.), *Logic, Methodology, and Philosophy of Science VII*, pp. 573–595, Amsterdam: North Holland.
* Bar-Hillel, Y., 1954, “Indexical Expressions”, *Mind*, 63: 359–376.
* Barwise, J. and Cooper, R., 1981, “Generalized quantifiers and natural language”, *Linguistics and Philosophy*, 4: 159–219. Reprinted in Portner and Partee (eds.) 2002, pp. 75–126.
* Bäuerle, R. and Cresswell, M. J., 2003, “Propositional attitudes”, in Gabbay and Guenthner (eds.) 2003, pp. 121–141.
* Bäuerle, R., Schwarze, C., and von Stechow, A. (eds.), 1983, *Meaning, Use and Interpretation of Language*, Berlin: de Gruyter.
* Beaver, D. I., 1997, “Presupposition”, in J. van Benthem and A. ter Meulen (eds.) 1997, pp. 939–1008.
* van Benthem, J. and ter Meulen, A. (eds.), 1997, *Handbook of Logic and Language*, Amsterdam: Elsevier.
* van Benthem, J. and ter Meulen, A. (eds.), 2011, *Handbook of Logic and Language. Second edition*, Amsterdam: Elsevier MIT Press.
* Caicedo, X., Dechesne, F., and Janssen, T. M. V., 2009, “Equivalence and quantifier rules for logics with imperfect information”, *Logic Journal of the IGPL*, 17: 91–129.
* Caponigro, I., forthcoming: *Richard Montague: The Simplicity of Language, the Complexity of Life*, New York: Oxford University Press.
* Carnap, R., 1947, *Meaning and Necessity: A Study in Semantics and Modal Logic*, Chicago: University of Chicago Press.
* Carpenter, B., 1998, *Type-Logical Semantics*, Cambridge, MA: MIT Press.
* Chomsky, N., 1965, *Aspects of the Theory of Syntax*, Cambridge, MA: MIT Press.
* Church, A., 1940, “A Formulation of the Simple Theory of Types”, *Journal of Symbolic Logic*, 5: 56–68.
* Cooper, R., 1983, *Quantification and Syntactic Theory* (Synthese Language Library, 21), Dordrecht: Reidel.
* Cresswell, M. J., 1973, *Logics and Languages*, London: Methuen.
* Davidson, D., 1968, “On saying that”, *Synthese*, 19: 130–146.
* Davidson, D. and Harman, G. (eds.), 1972, *Semantics of Natural Language* (Synthese Library, 40), Dordrecht: Reidel.
* Dowty, D., 2007, “Compositionality as an empirical problem”, in C. Barker and P. Jacobson (eds.), *Direct Compositionality* (Oxford Studies in Theoretical Linguistics, 14), pp., 23–101, Oxford: Oxford University Press.
* Dowty, D., Wall, R., and Peters, S., 1981, *Introduction to Montague Semantics* (Synthese Language Library, 11), Dordrecht: Reidel.
* Dummett, M., 1981, *Frege – Philosophy of Language*, second edition, Cambridge, MA: Harvard University Press.
* Egré, P., 2021, “Logical Omniscience”, in D. Gutzmann, L. Matthewson, C. Meier, H. Rullmann, and T. E. Zimmermann (eds.), *The Wiley Blackwell Companion to Semantics*, Hoboken: Wiley-Blackwell, vol. 3, Hoboken: Wiley-Blackwell, pp. 1725–1749.
* van Eijck, J. and Kamp, H., 1997, “Representing discourse in context”, in J. van Benthem and A. ter Meulen (eds.) 1997, pp. 179–237. Updated reprint in J. van Benthem and A. ter Meulen (eds.) 2011, pp. 181–252.
* Fox, C. and Lappin, S., 2005, *Foundations of Intensional Semantics*, Malden, MA: Blackwell.
* Frege, G., 1879, *Begriffsschrift, eine der arithmetischen nachgebildete Formelsprache des reinen Denkens*, Halle: Nebert.
* –––, 1892, “Über Sinn und Bedeutung”, *Zeitschrift für Philosophie und philosophische Kritik*, 100: 25–50. Reprinted in Angelelli 1967, pp. 143–162. Translated as ‘On Sense and Reference’ in Geach and Black 1952, pp. 56–58.
* Gabbay, D. M. and Guenthner, F. (eds.), 2003, *Handbook of Philosophical Logic*, second edition, Dordrecht: Kluwer.
* Gallin, D., 1975, *Intensional and higher-order Modal Logic*, Amsterdam: North-Holland.
* Geach, P. T. and Black, M. (eds.), 1952, *Translations from the Philosophical Writings of Gottlob Frege*, Oxford: Blackwell.
* Gamut, L. T. F., 1991, *Logic, Language and Meaning. Volume 2: Intensional Logic and Logical Grammar*, Chicago and London: The University of Chicago Press.
* Groenendijk, J. and Stokhof, M., 1989, “Type-shifting rules and the semantics of questions”, in *Properties, Types and Meanings* (Volume 2: Semantic Issues), G. Chierchia, B. H. Partee, and R. Turner (eds.), Dordrecht: Reidel, pp. 21–68; reprinted in Portner and Partee (eds.) 2002, pp. 421–457.
* –––, 1990, “Dynamic Montague Grammar”, in *Proceedings of the Second Symposion on Logic and Language*, L. Kalman & L Polos (eds.), Budapest: Eotvos Lorand University Press, pp. 3–48.
* –––, 1991, “Dynamic predicate logic”, *Linguistics and Philosophy*, 14: 39–100.
* Gunlogson, C., 2003, *True to Form*, New York: Routledge.
* Hamblin, C. L., 1973, “Questions in Montague English”, *Foundations of Language*, 10: 41–53.
* Heim, I. and Kratzer, A., 1998, *Semantics in Generative Grammar*, Oxford: Blackwell.
* Hendriks, H., 2001, “Compositionality and model-theoretic interpretation”, *Journal of Logic, Language and Information*, 10: 29–48.
* Hintikka, J., 1969, “Semantics for Propositional Attitudes”, in *Philosophical Logic*, J. W. Davis *et al*. (eds.), Dordrecht: Reidel, pp. 21–45.
* –––, 1983, *The Game of Language. Studies in Game-Theoretical Semantics and Its Applications* (Synthese Language Library, 22), Dordrecht: Reidel.
* Hodges, W., 1997, “Compositional semantics for a language of imperfect information”, *Logic Journal of the IGPL*, 5(4): 539–563.
* –––, 2001, “Formal features of compositionality”, *Journal for Logic Language and Computation*, 10: 7–28.
* Homer, V., 2021, “Negative Polarity”, in D. Gutzmann, L. Matthewson, C. Meier, H. Rullmann, and T. E. Zimmermann (eds.), *The Wiley Blackwell Companion to Semantics*, vol. 4, Hoboken: Wiley-Blackwell, pp. 2025–2063.
* Jackendoff, R. S., 1972, *Semantic Interpretation in Generative Grammar*, Cambridge, MA: MIT Press.
* Jacobson, P., 2014, *Compositional Semantics. An introduction to the syntax/semantics interface*, Oxford: Oxford University Press.
* Janssen, T. M. V., 1983, *Foundations and Applications of Montague Grammar*, Ph.D. Dissertation, University of Amsterdam.
* –––, 1997, “Compositionality (with an appendix by B. Partee)”, in van Benthem and ter Meulen (eds.) 1997, pp. 417–473.
* –––, 2001, “Frege, contextuality and compositionality”, *Journal of Logic, Language and Information*, 10: 115–136.
* –––, 2012, “Compositionality: its historic context”, in *The Oxford Handbook of Compositionality, M.* Werning et al. (eds.), Oxford: Oxford University Press, pp. 19–46.
* Kamp, H., 1971, “Formal Properties of ‘Now’”, *Theoria*, 37: 227–273.
* –––, 1981, “A theory of truth and semantic representation”, in J. Groenendijk, T. Janssen, and M. Stokhof (eds.), *Formal Methods in the Study of Language*, Centre for Mathematics and Computer Science, Amsterdam, pp. 1–14; reprinted in Portner and Partee (eds.) 2002, pp. 189–222.
* Kaplan, D., 1964, *Foundations of Intensional Logic*, UCLA dissertation.
* –––, 1975, “How to Russell a Frege-Church ”, *Journal of Philosophy*, 72: 716–729.
* –––, 1989, “Demonstratives”, in J. Almog, J. Perry, and H. Wettstein (eds.), *Themes from Kaplan*, Oxford: Oxford University Press, pp. 481–563.
* Karttunen, L., 1977, “Syntax and semantics of questions”, *Linguistics and Philosophy*, 1: 3–44. Reprinted in Portner and Partee (eds.) 2002, pp. 382–420.
* Karttunen, L. and Peters, S., 1979, “Conventional Implicature”, in *Presupposition* (Syntax and Semantics, 11), New York: Academic Press, pp. 1–56.
* Kratzer, A., 2002, “Facts: Particulars or Information Units?”, *Linguistics and Philosophy*, 25: 655–670.
* Kripke, S., 1963, “Semantical Considerations on Modal Logic”, *Acta Philosophica Fennica*, 16: 83–94.
* –––, 2008 “Frege’s Theory of Sense and Reference: Some Exegetical Notes”, *Theoria*, 74: 181–218.
* Ladusaw, W. A., 1980, “On the notion *Affective* in the analysis of negative-polarity items”, *Journal of Linguistic Research*, 1: 1–16; reprinted in Portner and Partee (eds.) 2002, pp. 457–470.
* –––, 1996, “Negation and polarity items”, in Lappin (ed.) 1996, chapter 12, pp. 321–341.
* Lappin, S. (ed.), 1996, *The Handbook of Contemporary Semantic Theory* (Blackwell Handbooks in Linguistics, 3), Oxford: Blackwell.
* Lewis, D., 1970, “General semantics”, *Synthese*, 22: 18–67.
* –––, 1973, *Counterfactuals*, Oxford: Blackwell.
* –––, 1980, “Index, Context, and Content”, in S. Kanger and S. Öhman (eds.), *Philosophy and Grammar*, Dordrecht: Reidel, pp. 79–100.
* Link, G., 1983, “The logical analysis of plurals and mass terms: a lattice-theoretic approach”, in Bäuerle *et al*. 1983, 302–323; reprinted in Portner and Partee (eds.) 2002, pp. 127–146.
* McNally, L. and Szabó, Z. (eds.), forthcoming, *A Reader’s Guide to Classic Papers in Formal Semantics* (Studies in Linguistics and Philosophiy, 100), Cham: Springer.
* Montague, R., 1968, “Pragmatics”, in R. Klibansky (ed.), *Contemporary Philosophy. A Survey*, Florence: La Nuova Italia Editrice, pp. 102–122; reprinted in Thomason (ed.) 1974, pp. 95–118.
* –––, 1969, “On the nature of certain philosophical entities”, *The Monist*, 353: 159–194; reprinted in Thomason (ed.) 1974, pp. 148–187.
* –––, 1970a, “English as a formal language”, in B. Visentini, et al. (eds.), *Linguaggi nella Società e nella Tecnica*, Milan: Edizioni di Communita, pp. 189–224; reprinted in Thomason (ed.) 1974, pp. 188–221.
* –––, 1970b, “Pragmatics and intensional logic”, *Synthese*, 22: 68–94; reprinted in Thomason (ed.) 1974, pp. 119–147.
* –––, 1970c, “Universal grammar”, *Theoria*, 36: 373–398; reprinted in Thomason (ed.) 1974, pp. 7–27.
* –––, 1973, “The proper treatment of quantification in ordinary English”, in K. J. J. Hintikka, J. M. E. Moravcsik, and P. Suppes (eds.), *Approaches to Natural Language* (Synthese Library, 49), Dordrecht: Reidel, 221–242; reprinted in Portner and Partee (eds.) 2002, pp. 17–35.
* Montague, R. and Kalish, D., 1964, *Logic: Techniques of Formal Reasoning*, New York: Harcourt, Brace, and Jovanovich.
* Morrill, G. V., 1994, *Type Logical Grammar. The Logic of Signs*, Dordrecht: Kluwer.
* Parsons, T., 1981, “Frege’s Hierarchies of Indirect Senses and the Paradox of Analysis”, *Midwest Studies in Philosophy*, 6: 37–57.
* –––, 1990, *Events in the semantics of English. A study in subatomic semantics*, Cambridge, MA: MIT Press.
* Partee, B. H., 1973, “Some transformational extensions of Montague grammar”, *Journal of Philosophical Logic*, 2: 509–534; reprinted in Partee 1976, pp. 51–76.
* –––, 1984, “Compositionality”, in F. Landman and F. Veltman (eds.), *Varieties of Formal Semantics: Proceedings of the 4th Amsterdam Colloquium* (Groningen-Amsterdam Studies in Semantics, No. 3), pp. 281–311, Dordrecht: Foris; reprinted in Partee 2004, pp. 153–181.
* –––, 1987, “Noun phrase interpretation and type-shifting principles”, in J. Groenendijk, D. de Jongh, and M. Stokhof (eds.), *Studies in Discourse Representation Theory and the Theory of Generalized Quantifiers* (Groningen-Amsterdam Studies in Semantics, 8), pp. 115–143, Dordrecht: Foris; reprinted in Partee 2004, pp. 203–224.
* –––, 1996, “The development of formal semantics in linguistic theory”, in Lappin (ed.) 1996, pp. 11–38.
* –––, 2004, *Compositionality in Formal Semantics. Selected Papers by B. H. Partee* (Explorations in Semantics 1), Malden, MA: Blackwell.
* –––, 2011, “Formal Semantics: Origins, Issues, Early Impact”, *Baltic International Yearbook of Cognition, Logic and Communication*, 6: 1–52.
* Partee, B. H. with Hendriks, H., 1997, “Montague grammar”, in van Benthem and ter Meulen (eds.) 1997, pp. 7–91; reprinted in van Benthem and ter Meulen (eds.) 2011, pp. 3–94
* Partee, B. and Rooth, M., 1983, “Generalized conjunction and type ambiguity”, in Bäuerle *et al*. (eds.) 1983, pp. 361–383; reprinted in Portner and Partee (eds.) 2002, pp. 334–356.
* Pelletier, F. J., 1993, “Remarks involving internal and external semantics”, in J. MacNamara and G. Reges (eds.), *The Logical Foundations of Cognition*, Oxford: Oxford University Press, 283–295.
* Pelletier, F. J. and Schubert, L. K., 2003, “Mass expressions”, in Gabbay and Guenthner (eds.) 2003, 249–335.
* Peters, S., 1979, “A truth-conditional formulation of Karttunen’s account of presupposition”, *Synthese*, 40: 301–316.
* Peters, S. and Westerståhl, D., 2006, *Quantifiers in Language and Logic*, Oxford: Oxford University Press.
* Portner, P. and Partee, B. (eds.), 2002, *Formal Semantics: the Essential Readings*, Oxford: Blackwell.
* Quine, W. V. O., 1960, *Word and Object*, Cambridge, MA: MIT Press.
* Rosetta, M. T., 1994, *Compositional Translation* (Kluwer International Series in Engineering and Computer Science, 230), Dordrecht: Kluwer.
* Russell, B., 1905, “On denoting”, *Mind*, 14: 175–226. Reprinted in R. C. Marsh (ed.), *Logic and Knowledge. Essays 1901–1950*, pp. 33–56, New York: Macmillan.
* Stokhof, M., 2007, “Hand or hammer? On formal and natural languages in semantics”, *Journal of Indian Philosophy*, 35: 597–626.
* Tarski, A., 1986, “What are logical notions?”, edited by J. Corcoran, *History and Philosophy of Logic*: 7, 143–154.
* Thomason, R. H. (ed.), 1974, *Formal Philosophy. Selected Papers of Richard Montague*, New Haven: Yale University Press.
* –––, 1980, “A Model Theory for Propositional Attitudes”, *Linguistics and Philosophy*, 4: 47–70.
* Turner, R., 1983, “Montague semantics, nominalizations and Scott’s domains”, *Linguistics and Philosophy*, 6: 259–288.
* Werning, M., Hinzen, W. and Machery, E. (eds.), 2012, *The Oxford Handbook of Compositionality*, Oxford: Oxford University Press
* Westerståhl, D., 2002, “On the compositionality of idioms. An abstract approach”, in D. Barker-Plummer, D. I. Beaver, J. van Benthem, and P. S. di Luzio (eds.), *Words, Proofs and Diagrams* (CSLI Lecture Notes 141), Stanford: CSLI Publications, pp. 241–271.
* Winter, Y., 2001, *Flexibility Principles in Boolean Semantics: Coordination, Plurality and Scope in Natural Language* (Current Studies in Linguistics, 37), Cambridge, MA: MIT Press.
* Zadrozny, W., 1994, “From compositional to systematic semantics”, *Linguistics and Philosophy*, 17: 329–342.
* Zimmermann, T. E., 1983, “A Note on Transparency Postulates”, *Journal of Semantics*, 4: 67–77.
* –––, 1989, “Intensional logic and two-sorted type theory”, *Journal of Symbolic Logic*, 54: 65–77.
* –––, 1999, “Meaning postulates and the model-theoretic approach to natural language semantics”, *Linguistics and Philosophy*, 22: 529–561.
* –––, 2021, “Representing intensionality”, in D. Gutzmann, L. Matthewson, C. Meier, H. Rullmann, and T. E. Zimmermann (eds.), *The Wiley Blackwell Companion to Semantics*, vol. 4, Hoboken: Wiley-Blackwell, pp. 2607–2643.
* Zimmermann, T. E. and Sternefeld, W., 2013, *Introduction to Semantics*, Berlin: De Gruyter.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=montague-semantics). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/montague-semantics/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=montague-semantics&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/montague-semantics/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[compositionality](https://plato.stanford.edu/entries/compositionality/) | [discourse representation theory](https://plato.stanford.edu/entries/discourse-representation-theory/) | [Frege, Gottlob](https://plato.stanford.edu/entries/frege/) | [generalized quantifiers](https://plato.stanford.edu/entries/generalized-quantifiers/) | [identity: transworld](https://plato.stanford.edu/entries/identity-transworld/) | [impossible worlds](https://plato.stanford.edu/entries/impossible-worlds/) | [intensional transitive verbs](https://plato.stanford.edu/entries/intensional-trans-verbs/) | [intentionality](https://plato.stanford.edu/entries/intentionality/) | [logic: intensional](https://plato.stanford.edu/entries/logic-intensional/) | [logical form](https://plato.stanford.edu/entries/logical-form/) | [mass expressions: logic of](https://plato.stanford.edu/entries/logic-massexpress/) | [possible worlds](https://plato.stanford.edu/entries/possible-worlds/) | [presupposition](https://plato.stanford.edu/entries/presupposition/) | [propositional attitude reports](https://plato.stanford.edu/entries/prop-attitude-reports/) | [propositions: structured](https://plato.stanford.edu/entries/propositions-structured/) | [questions](https://plato.stanford.edu/entries/questions/) | [reference](https://plato.stanford.edu/entries/reference/) | [rigid designators](https://plato.stanford.edu/entries/rigid-designators/) | [semantics: dynamic](https://plato.stanford.edu/entries/dynamic-semantics/) | [type theory](https://plato.stanford.edu/entries/type-theory/) | [type theory: Church’s type theory](https://plato.stanford.edu/entries/type-theory-church/)

[Copyright © 2021](https://plato.stanford.edu/info.html#c) by  
Theo M. V. Janssen  
Thomas Ede Zimmermann <[*T.E.Zimmermann@lingua.uni-frankfurt.de*](mailto:T%2eE%2eZimmermann%40lingua%2euni-frankfurt%2ede)>
<!--md-padding-ignore-end-->
