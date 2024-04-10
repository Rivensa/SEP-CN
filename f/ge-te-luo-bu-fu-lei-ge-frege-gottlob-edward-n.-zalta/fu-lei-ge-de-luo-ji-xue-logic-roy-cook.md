# 弗雷格的逻辑学 logic (Roy Cook)


*首次发表于 2023 年 2 月 7 日*

弗里德里希·路德维希·戈特洛布·弗雷格（出生于 1848 年，逝世于 1925 年）常被认为是在他的《概念符号》中发明了现代量化逻辑。虽然关于弗雷格的创新之处以及他的作品与同时代人如乔治·布尔、奥古斯都·德摩根、恩斯特·施罗德、查尔斯·桑德斯·皮尔斯和约翰·文恩的作品中存在哪些相似之处存在一些争议（参见普特南 1982 年或布洛斯 1994 年的论述，以抵制将现代逻辑归功于弗雷格的倾向，还有关于逻辑代数传统的条目），但毫无疑问，弗雷格的工作，尤其是在伯特兰·罗素和路德维希·维特根斯坦的推崇下，对哲学和数学逻辑的发展产生了巨大影响。

虽然本条目旨在向读者概述弗雷格在《概念符号》和《基本法则》中提出的逻辑系统，但并不意味着它是将弗雷格的逻辑系统翻译成现代符号的指南，因此以下内容中几乎没有现代符号。尽管“研究”弗雷格逻辑和他的逻辑主义计划的常见方法是通过将他的公理和定理翻译成现代符号，但这种方法往往会导致对弗雷格实际观点的误解，因为他自己的符号（在两个逻辑系统中）与现代的一阶和高阶量化逻辑在很多方面存在显著差异。因此，任何有兴趣以自己的方式理解弗雷格的逻辑和哲学观点的人都需要在《概念符号》和《基本法则》的逻辑和形式语言中研究这些观点，并且需要直接熟练地使用弗雷格的符号、演绎系统等。本条目旨在作为开始这一旅程的手段，除其他目的外。

* [ 1. 介绍](https://plato.stanford.edu/entries/frege-logic/#Intr)
* [2. 概念书写的逻辑](https://plato.stanford.edu/entries/frege-logic/#LogiBegr)

  * [2.1 概念书写的运算符](https://plato.stanford.edu/entries/frege-logic/#OperBegr)

    * [2.1.1 判定笔画](https://plato.stanford.edu/entries/frege-logic/#JudgStro)
    * [2.1.2 条件笔画](https://plato.stanford.edu/entries/frege-logic/#CondStro)
    * [2.1.3 否定笔画](https://plato.stanford.edu/entries/frege-logic/#NegaStro)
    * [2.1.4 身份运算符](https://plato.stanford.edu/entries/frege-logic/#IdenOper)
    * [2.1.5 表达一般性的凹凸性](https://plato.stanford.edu/entries/frege-logic/#ConcForExprGene)
  * [2.2 概念书的公理和规则](https://plato.stanford.edu/entries/frege-logic/#AxioRuleBegr)

    * [ 2.2.1 公理](https://plato.stanford.edu/entries/frege-logic/#Axio)
    * [2.2.2 推理规则](https://plato.stanford.edu/entries/frege-logic/#RuleInfe)
* [3.《格言法则》的逻辑](https://plato.stanford.edu/entries/frege-logic/#LogiGrun)

  * [3.1 格伦德格塞的“旧”运算符](https://plato.stanford.edu/entries/frege-logic/#OldOperGrun)

    * [3.1.1 判断符号](https://plato.stanford.edu/entries/frege-logic/#JudgStro_1)
    * [3.1.2 否定符号](https://plato.stanford.edu/entries/frege-logic/#NegaStro_1)
    * [3.1.3 条件笔画](https://plato.stanford.edu/entries/frege-logic/#CondStro_1)
    * [3.1.4 判断笔画的等价性](https://plato.stanford.edu/entries/frege-logic/#EquiForJudgStro)
    * [3.1.5 等号](https://plato.stanford.edu/entries/frege-logic/#EquaSign)
    * [3.1.6 通用量化的两种形式](https://plato.stanford.edu/entries/frege-logic/#TwoFormUnivQuan)
  * [3.2 Grundgesetze 的新运算符](https://plato.stanford.edu/entries/frege-logic/#NewOperGrun)

    * [3.2.1 一种通用性设备：罗马字母](https://plato.stanford.edu/entries/frege-logic/#DeviForGeneRomaLett)
    * [3.2.2 值范围运算符](https://plato.stanford.edu/entries/frege-logic/#ValuRangOper)
    * [3.2.3 确定描述的反斜杠运算符](https://plato.stanford.edu/entries/frege-logic/#BackOperForDefiDesc)
  * [3.3 Grundgesetze 的公理](https://plato.stanford.edu/entries/frege-logic/#AxioGrun)

    * [3.3.1 基本法 I](https://plato.stanford.edu/entries/frege-logic/#BasiLawI)
    * [3.3.2 基本法 II](https://plato.stanford.edu/entries/frege-logic/#BasiLawII)
    * [3.3.3 基本法 III](https://plato.stanford.edu/entries/frege-logic/#BasiLawIII)
    * [3.3.4 基本法第四条](https://plato.stanford.edu/entries/frege-logic/#BasiLawIV)
    * [3.3.5 基本法第五条](https://plato.stanford.edu/entries/frege-logic/#BasiLawV)
    * [3.3.6 基本法第六条](https://plato.stanford.edu/entries/frege-logic/#BasiLawVI)
  * [3.4 Grundgesetze 的推理规则](https://plato.stanford.edu/entries/frege-logic/#RuleInfeGrun)

    * [3.4.1 广义摩德斯·波奈斯](https://plato.stanford.edu/entries/frege-logic/#GeneModuPone)
    * [3.4.2 广义假设三段论](https://plato.stanford.edu/entries/frege-logic/#GeneHypoSyll)
    * [3.4.3 广义反言](https://plato.stanford.edu/entries/frege-logic/#GeneCont)
    * [3.4.4 广义二难推理](https://plato.stanford.edu/entries/frege-logic/#GeneDile)
    * [3.4.5 凹性引入](https://plato.stanford.edu/entries/frege-logic/#ConcIntr)
    * [3.4.6 罗马字母消除](https://plato.stanford.edu/entries/frege-logic/#RomaLettElim)
* [ 参考文献](https://plato.stanford.edu/entries/frege-logic/#Bib)

  * [ 弗雷格的著作](https://plato.stanford.edu/entries/frege-logic/#FregWrit)
  * [ 翻译](https://plato.stanford.edu/entries/frege-logic/#Tran)
  * [ 二手文献](https://plato.stanford.edu/entries/frege-logic/#SecoLite)
* [ 学术工具](https://plato.stanford.edu/entries/frege-logic/#Aca)
* [其他互联网资源](https://plato.stanford.edu/entries/frege-logic/#Oth)
* [ 相关条目](https://plato.stanford.edu/entries/frege-logic/#Rel)
* 补充：

  * [概念符号中的假设矛盾](https://plato.stanford.edu/entries/frege-logic/supp-begriff.html)
  * [概念符号与《Grundgesetze》之间的时期](https://plato.stanford.edu/entries/frege-logic/supp-between.html)
  * [悖论之后的弗雷格逻辑](https://plato.stanford.edu/entries/frege-logic/supp-after.html)

---

## 1. 介绍

关于弗雷格在逻辑方面的创新以及这些创新在他更大的逻辑主义项目中所起的作用的故事通常是按照以下的方式讲述的，重点放在他的三部“伟大著作”上。首先，弗雷格在他的《概念书：一种纯粹思维的算术形式语言》（1879a）中发明了现代的量化逻辑。其次，弗雷格批评了当时领先的数学基础理论的论述，即《算术基础：关于数的概念的逻辑数学研究》（1884），他还非正式地阐述了他将数学归约为逻辑的过程。第三，弗雷格在《算术基本定律：概念书推导的第一卷和第二卷》（1893/1903）中进行了算术的形式重建（并开始重建实数和复数分析），这是在他首先在《概念书》中开发的逻辑内部进行的，或者至少是在通过用值域和控制值域的逻辑定律来扩展系统获得的直接扩展内部进行的。

如果一个人对弗雷格的数学哲学感兴趣，那么这个故事也许是足够的。但是，如果一个人的兴趣反而集中在弗雷格的逻辑哲学上，那么刚才概述的故事就是极其不足的。原因很简单：《算术基本定律》中的逻辑系统实际上与《概念书》中的系统有着显著的不同。毫无疑问，弗雷格得出了《算术基本定律》中的系统，是因为他注意到了《概念书》中的各种不足和局限。但是，这两种逻辑系统在技术细节和哲学解释方面的差异都太大，以至于无法认为弗雷格在他的职业生涯中支持一个单一、统一的逻辑系统，并且当他的逻辑主义项目要求他这样做时，他只是以各种方式扩展了这个系统。注意到这些差异是很重要的，因为弗雷格发明的高阶量化逻辑通常被标记为在《概念书》出版时发生，然而他的逻辑的许多独特的——有些人可能会说是古怪的——特征只出现在后来的《算术基本定律》系统中。

这些特点包括句子指称真值的主张；对象、一级、二级和三级函数、概念和关系的精确类型系统；以及引入分别涵盖这些不同类型的一阶和高阶量词。格伦德格策的后期逻辑的这些方面并不仅仅是对《概念符号》早期逻辑的添加或澄清。相反，这两个系统之间的差异意味着存在一些符号串是《概念符号》逻辑的定理，但却不是《格伦德格策》逻辑的定理。在接下来的内容中，我们将看到一个重要的例子，这个例子是弗雷格本人讨论过的。

在深入讨论之前，有关符号、术语和目标的一些观察是必要的。首先，一些作者，如赫克（2012），在使用术语“概念符号”时存在系统上的歧义，当提到该作品时将其写成斜体（Begriffsschrift），而在提到弗雷格所有著作中所使用的（假定的单一）逻辑系统时则不使用斜体。这种方法在这里行不通，因此我们将继续将这两个系统称为《概念符号》逻辑和《格伦德格策》逻辑。

其次，一些翻译者将弗雷格的“deutscher Buchstabe”翻译为“哥特字母”，另一些翻译为“德语字母”，而将“lateinischer Buchstabe”翻译为“拉丁字母”的也有，另一些则翻译为“罗马字母”。这并没有哲学上的意义，仅仅是一种文体上的差异，因此在翻译中我保留了原样，但在讨论中将使用后一种术语。

第三，我们应该强调，在这两部作品中，弗雷格所使用的逻辑方法和目标的概念与现代对该主题的研究中通常使用的概念有很大不同。沃伦·戈德法布描述了逻辑的现代概念，他称之为图式概念，并认为我们从（其他人中）塔斯基和奎因那里继承了这一概念，主要关注于在这种或那种形式语言中发现逻辑图式之间的性质和关系，其次是确定自然语言的句子是否可以被翻译为具有这种或那种特征的图式的实例。然而，在《概念符号》和《基本法则》中所运用的逻辑概念，即戈德法布所称的普遍主义概念，却是完全不同的。在普遍主义概念中，逻辑致力于陈述和证明适用于任何主题的一般普遍有效的逻辑法则。简而言之，在现代的图式概念中，逻辑的主题是句子（或图式、命题或其他类型的语言实体），目标是发现统治句子（或图式、命题等）的性质和关系的法则。然而，在弗雷格的普遍主义概念中，目标不是发现关于语言的普遍真理，而是发现关于世界的普遍真理（戈德法布 2010）。

最后，尽管弗雷格只在《概念符号》和《基本法则》的早期部分两次全面介绍了他的逻辑，但他在许多其他作品中讨论了他的逻辑的各个方面，包括《函数与概念》、《意义和指称》和《概念与对象》（下文将更多介绍），以及一些不太知名的论文，在这些论文中他明确讨论了他自己的系统与同时代人的工作之间的差异。这些论文包括（但不一定局限于）《布尔的逻辑演算与概念符号》（1880/81）、《布尔的逻辑公式语言和我的概念符号》（1881）、《关于概念符号的科学证明》（1882a）、《关于“概念符号”的目的》（1882b）和《关于皮亚诺先生的概念符号和我的》（1897）。这些论文不仅提供了对弗雷格逻辑及其逻辑哲学发展的额外见解，而且包含了对弗雷格备受诟病的符号体系优越性的有力（并令人信服的）辩护（这些论据在很大程度上同样适用于比较弗雷格的符号与我们现代的反向“E”（∃）和倒置的“A”（∀）符号！）。那些希望在本文所包含的材料之外继续研究弗雷格逻辑的人，应该不仅参考《概念符号》和《基本法则》，还应该参考这些作品。

## 2. 《概念符号》的逻辑

《概念符号学》的逻辑在弗雷格写作《函数与概念》（1891）、《意义与指称》（1892a）和《概念与对象》（1892b）之前就已经形成。这些论文中的每一篇都旨在解决弗雷格在《概念符号学》中提出的原始逻辑中的特定问题：“函数与概念”阐明了概念和关系作为数学函数的地位（并包含了逻辑的许多其他变化的首次出现，包括弗雷格的意义/指称区分的首次发表提及），《意义与指称》为弗雷格提供了处理恰当的同一性问题的工具，而《概念与对象》则解决了弗雷格在“函数与概念”中首次明确引入的高阶逻辑中涉及的类型区分所引发的难题（尽管在《基础》[1884]中也隐含地假定了严格的概念/对象区分，并起到了很大的作用）。这些作品中的每一篇都导致了从《概念符号学》到《基本法则》之间弗雷格的逻辑在形式细节和哲学解释方面的重大变化，我们将在下面讨论其中的一些差异。然而，就理解《概念符号学》逻辑的基本机制而言，这三篇论文中最关键的是《意义与指称》。

在写作《概念符号学》时，弗雷格并没有明确区分意义和指称。因此，他使用了概念内容的概念，这在某种意义上承担了后来他在《意义与指称》之后的著作中分配给意义和指称的工作。

在反对传统的主谓判断分析的论证中（我们将在下文中回到这一点），弗雷格明确表示《概念符号学》的逻辑对于表达相同概念内容的判断之间的差异是不敏感的：

> 我注意到两个判断的内容可以以两种方式不同：一种是当与某些其他判断相结合时，从第一个判断中可以得出的结论与与同样的判断相结合时从第二个判断中得出的结论总是相同的；另一种情况则不然。命题“在普拉泰亚，希腊人击败了波斯人”和“在普拉泰亚，波斯人被希腊人击败了”在第一种方式上有所不同。即使可以察觉到一点意义上的细微差别，一致性仍然占主导地位。现在，我称这两种情况中相同的内容为概念内容。由于只有这部分对于《概念符号》具有意义，所以不需要区分具有相同概念内容的命题。（弗雷格 1879a: §3）

结果，有趣的是，与后来在《基本法则》中采用的方法相比，《概念符号》的逻辑运算符是将适当类型的参数映射到可判断内容的操作（在某种意义上），可以解释为可能的“情况”或“事实”（有关更多讨论，请参见邓梅特 1981 年和柯里 1984 年）。因此，在《概念符号》的逻辑中，否定是一种将可判断内容（再次，类似于可能的事实或情况）作为输入并给出另一个可判断内容作为其值的操作，而弗雷格的全称量词的版本是一种将谓词概念内容作为参数并给出可判断内容作为其值的运算符。

熟悉的关于“否定”和“普遍”事实（或更准确地说，“否定”和“普遍”概念内容）的担忧无疑会困扰《概念符号》的逻辑（比尼 1997），但弗雷格并未解决此类问题，这些问题在《基本法则》的后感/指称区分逻辑中无论如何都会消失。对于我们的目的来说，重要的是使用这种早期的概念内容概念，而不是更细致的意义/指称区分，这意味着在《概念符号》的逻辑中找到的运算符的适用范围要比在《基本法则》的逻辑中找到的（在排版上相同的）运算符的适用范围要窄。

在《概念符号学》第 3 节中，弗雷格引入了与他的同时代人（如布尔和施罗德）以及逻辑传统更普遍的工作有重要区别的重要变革：拒绝主谓分析命题：

> 在我的判断表示中，主语和谓语之间没有区分。（1879a：§3）

他在《概念符号学》后期提出了一种替代方案，更加灵活。

> 假设氢比二氧化碳轻这一情况是用我们的公式语言表达的。那么在氢的符号位置，我们可以插入氧的符号或氮的符号。这样改变了意义，使得“氧”或“氮”进入了“氢”之前所处的关系中。如果将表达式看作以这种方式变量化，它就分解为一个代表关系的总体部分和一个可以被其他符号替换的符号部分，它表示了所处的关系中的对象。前者我称之为函数，后者为其参数。这种区别与概念内容无关，只与我们理解它的方式有关。尽管从刚才指出的方式来看，“氢”是参数，“比二氧化碳轻”是函数，我们也可以以“二氧化碳”成为参数，“比氢重”成为函数的方式来理解相同的概念内容。（1879a: §9）

他在同一部分的后面继续详细说明：

> 如果在一个表达式中（其内容不一定是可判断的内容），一个或多个地方出现了简单或复杂的符号，并且我们认为它在所有或部分出现的地方都可以被另一个符号（但在所有地方都是相同的符号）替换，那么我们称表达式的这一部分在这种情况下出现不变的部分为函数，可替换的部分为其参数。（1879a: §9）

这标志着 Begriffsschrift 逻辑中的一个重要创新：弗雷格用更灵活的观点取代了将命题分析为其唯一的主语和谓语（这是自亚里士多德以来逻辑大部分工作中嵌入的方法），认为命题可以以多种方式分析为一个参数和应用于该参数的函数。

需要提醒的是：弗雷格在 Begriffsschrift 中对函数和参数的区分不应与在 Grundgesetze 中详细发展的对象类型理论混淆。Grundgesetze 中涉及一级函数（应用于对象）、二级函数（应用于一级函数）和三级函数（应用于二级函数）。弗雷格在撰写 Begriffsschrift 时尚未建立这些类型区分，并在 Grundgesetze 的引言中承认了这一点：

> 此外，与对象相比，函数的性质在我的 Begriffsschrift 中被更加精确地描述。由此产生了一级和二级函数之间的区别。（1893/1903: x）

因此，在概念符号中出现的类似于一阶变量的东西（即德语中的“a”、“e”等，以及罗马字母中的“x”、“y”等）实际上更好地理解为变量范围涵盖任何级别的参数（其中包括后来的弗雷格认为是一级和二级函数的内容），而看似是二阶变量的东西（即德语中的“f”、“g”等，以及罗马字母中的“f”、“g”）实际上更好地理解为范围涵盖适用于这些参数的函数的变量。

虽然正确，但即使如此，这也有些误导，因为任何可以被视为判断的参数也可以被视为该判断的函数，反之亦然。在引入概念符号逻辑的凹凸泛化装置时（稍后将详细介绍），弗雷格写道：

> 由于符号Φ出现在表达式Φ(A)中，并且可以被认为是由其他符号Ψ、X 替换，通过这些符号可以表达参数 A 的其他函数，因此Φ(A)可以被视为参数Φ的函数。（弗雷格 1879a: §10）

换句话说，我们可以解析句子“氢比二氧化碳轻”为“氢”是参数，“比二氧化碳轻”是函数，但我们也可以解析同一句子，使得“比二氧化碳轻”成为参数，“氢”（并且不像在《Grundgesetze》中那样，我们可能会解释为“被氢满足”的第二级概念）成为函数—更多讨论请参见 Heck 和 May（2013）。此外，弗雷格指出，函数/参数的区别并不反映关于现实结构的任何客观事实（不像《Grundgesetze》中找到的后来的对象/函数层次结构），而仅仅反映了选择以一种方式而不是另一种方式分析陈述的选择：

> 对我们来说，同一概念内容以不同方式作为这个或那个参数的函数，只要函数和参数完全确定，这些方式并不重要。（1879a: §9）

因此，任何东西都可以是参数或函数，而《概念符号》中表面上的一阶和二阶变量根本不是这样。相反，表面上看起来是一阶变量（即“a”，“e”等，以及罗马字母“x”，“y”等）和表面上看起来是二阶变量（即德语“f”，“g”等，以及罗马字母“f”，“g”）的区别仅仅是一种启发式的区分，有助于读者理解带有多个量词的公式的要点。（下一小节介绍了弗雷格使用的符号，以及弗雷格符号的扩展描述可供参考。）

### 2.1 Begriffsschrift 的运算符

#### 2.1.1 判断符号

判断符号可能是弗雷格逻辑的一个最具争议的方面，无论是哪个版本。简单来说，在 Begriffsschrift 的逻辑中，判断符号将可判断内容转化为判断：

> 判断总是通过符号来表达
>
> ![judgement symbol, a vertical line with a horizontal line going from the center of it to the right](https://plato.stanford.edu/entries/frege-logic/judgement.svg)
>
> 这个符号位于表示判断内容的符号或符号复合物的左侧。如果省略了水平线的左端的小竖线 |，那么判断将被转化为作者并未陈述其真实性的一组想法。例如，让
>
> ![judgement A](https://plato.stanford.edu/entries/frege-logic/judgementA.svg)
>
> 表示判断“相反的磁极会互相吸引”，那么
>
> ![circumstance A](https://plato.stanford.edu/entries/frege-logic/circumstanceA.svg)
>
> 不会表达这个判断，而只是应该在读者心中唤起相互吸引的相反磁极的概念，以便从中得出结论，并通过这些结论来测试思想的正确性。在这里，我们使用词语“这个情况”或“这个命题”进行解释。 （1879a：§2）

在《概念符号》中，弗雷格明确指出，并非每个概念内容都是可判断的内容，因此，并非每个表达式（尤其不是每个对象的名称）都有资格成为判断符号的论据：

> 并非每个内容都可以通过在其符号之前加上  来成为判断；例如，“房子”的概念就不能。因此，我们区分可判断和不可判断的内容。（1879a：§2）

他总结了他对主谓分析命题的拒绝，而更倾向于他的功能-论元方法的讨论，如上所述，以下是关于判断符号作用的观察：

> 想象一种语言，其中命题“阿基米德在攻占锡拉库萨时被杀”以以下方式表达：“阿基米德在攻占锡拉库萨时的暴力死亡是一个事实”。即使在这种情况下，如果有人愿意，主语和谓语可以被区分开来，但主语包含了整个内容，而谓语仅仅是为了将其呈现为一个判断。这样的语言对于所有判断只有一个谓语，即“是一个事实”。可以看出，在这里并没有通常意义上的主语和谓语的问题。我们的 Begriffsschrift 就是这样一种语言，符号  是其所有判断的通用谓语。（1879a: §3）

弗雷格在 Begriffsschrift 中引入判断符号后不久，便声称它由两部分组成，水平符号“  ”和垂直符号“|”，后者是判断符号本身，并且他暗示水平符号将随后的可判断内容的组成部分合而为一：

> 水平笔画形成了符号  ，将其后的符号组合成一个整体，而通过水平笔画左端的垂直笔画来表达这个整体的断言。水平笔画可以称为内容笔画，垂直笔画可以称为判断笔画。内容笔画通常用于将任何符号与跟随笔画的整体相关联。跟随内容笔画的内容必须始终具有可判断的内容。（1879a: §2）

注意判断笔画的参数受限于可判断的内容（宽泛地说，即句子，在非正式的意义上），因此在 Begriffsschrift 的逻辑中，“  2”不是一个错误，而只是不符合规范。我们将在下面理解弗雷格两种逻辑之间的差异时再回到这个观察的重要性。但是在 Begriffsschrift 的逻辑中，水平笔画实际上几乎没有实际作用：它从不单独出现。

#### 2.1.2 条件笔画

接下来是条件符号。在《概念书写》中，弗雷格如下解释条件符号：

> 如果 A 和 B 表示可判断的内容（§2），那么有以下四种可能性：
>
> 1. A 被肯定且 B 被肯定；
> 2. A 被确认，而 B 被否定；
> 3. A 被否定，而 B 被确认；
> 4. A 被否定，而 B 被否定。
>
> ![judgement conditional term B term A](https://plato.stanford.edu/entries/frege-logic/sec2-1-A.svg)
>
> 现在表示这三种可能性中的第三种不成立，但其他三种中的一种成立。因此，如果
>
> ![conditional term B term A](https://plato.stanford.edu/entries/frege-logic/sec2-1-B.svg)
>
> 被否定，那么这就意味着第三种可能性成立；也就是说，否定了 A 并且肯定了 B。（1879a：§5）

简而言之，条件符号是弗雷格的 Begriffsschrift 版本的物质条件：它将两个概念内容合并为一个复杂的概念内容，当且仅当第一个概念内容表示一个事实，但第二个概念内容不表示事实时，它表示一个事实。用现代术语来说，条件符号的结论部分（弗雷格在 Grundgesetze 逻辑中将其称为超部分）出现在前提部分（弗雷格在 Grundgesetze 逻辑中将其称为次部分）的上方。请注意，条件符号的论据明确限定为可判断的内容。

虽然弗雷格在《概念符号》中没有像在《基本法则》中那样明确讨论这一点，但值得注意的是，复杂的条件构造可以以多种方式解析为前提和结论。考虑以下例子：

![conditional term C term conditional term B term A](https://plato.stanford.edu/entries/frege-logic/sec2-1-C.svg)

这个表达式在现代符号中类似（但当然不等同于，在任何合理的等同意义上）于“C→(B→A)”。但弗雷格经常将这种形式的表达式解释为更接近于（经典上）等价的“(C∧B)→A”。简而言之，弗雷格在上述偏移公式中在解读时经常在（二元）条件中将“C”作为前提和

![conditional term B term A](https://plato.stanford.edu/entries/frege-logic/sec2-1-B.svg)

结论，以及在（三元）条件中将“C”和“B”都作为前提，“A”作为结论（这将在下面我们讨论他的推理规则时变得相关）。

#### 2.1.3 否定符号

弗雷格在《概念书写》中引入的第三个概念是否定符号：

> 如果在内容符号的底部附加一个小的竖直符号，那么这意味着表达的情况并不成立。因此，例如，
>
> ![judgement not A](https://plato.stanford.edu/entries/frege-logic/sec2-1-D.svg)
>
> 意味着“A 不获得”。我称这个小竖线为否定线。否定线右侧的水平线段是 A 的内容线段，而否定线左侧的部分则是 A 的否定的内容线段。（1879a: §7）

虽然弗雷格并没有明确将命题逻辑视为 Begriffsschrift 逻辑（或 Grundgesetze 逻辑）的可辨认子系统，否定线和条件线是弗雷格在这两种逻辑中引入的命题运算符（弗雷格的类比）。恒等性在 Begriffsschrift 逻辑和 Grundgesetze 逻辑中扮演了类似双条件的角色。弗雷格并没有提供一个表达完备性的结果（而且在写 Begriffsschrift 时，他可能还没有概念上的能力来陈述这样的结果）。但他在 Begriffsschrift 的第 7 节中指向了这个方向，指出这两个运算符使我们能够表达我们现在称之为包含式析取、排他式析取和合取的内容：

![conditional not term B term A](https://plato.stanford.edu/entries/frege-logic/sec2-1-E1.svg)

 包含式析取

![not conditional term conditional not term B term A not term conditional term B not term A](https://plato.stanford.edu/entries/frege-logic/sec2-1-E2.svg)

 互斥的异或

![not conditional term B not term A](https://plato.stanford.edu/entries/frege-logic/sec2-1-E3.svg)

 同时

 分别。

#### 2.1.4 身份运算符

弗雷格接下来介绍了成为概念书逻辑中可能最臭名昭著的部分，即他的身份运算符。弗雷格显然在努力解决他最终将通过“意义和指称”中的标题区分解决的难题，但这个概念尚不可用，因此他面临以下难题：给定两个名称“a”和“b”，如果“a=b”为真，并且如果名称的概念内容是它们的指称，那么“a=a”和“a=b”具有相同的概念内容。但这不可能是真的：“a=a”和“a=b”显然不具有相同的概念内容，因为它们暗示着不同的事物。

因此，弗雷格被迫否认“a”和“b”在身份声明的上下文中具有相同的概念内容。因此，它们的概念内容不能是它们的指称。弗雷格得出结论，身份陈述中名称的概念内容就是名称本身，定义如下（值得注意的是，他在这里使用“≡”，但在解决这些问题后，他转而使用了更为标准的符号“=”在《Grundgesetze》中）：

> ![judgement A equiv B](https://plato.stanford.edu/entries/frege-logic/sec2-1-F.svg)
>
> 因此，它的意思是：符号 A 和符号 B 具有相同的概念内容，因此 A 可以始终被 B 替代，反之亦然。（1879a：§7）

这解决了问题，因为在真实等同性主张的背景下，像“a=b”这样的语境中，“a”和“b”并不指代同一事物。相反，“a”自我指涉地指代符号“a”（对于“b”也是如此），因此等同性主张“a=b”并不表达（粗略地说）：

> a 与 b 相同。

但是实际上更像是（再次，粗略地说）：

> 被“a”挑选出来的东西与被“b”挑选出来的东西是一样的。

它具有与以下内容不同的概念内涵：

> 被“a”挑选出来的东西与被“a”挑选出来的东西相同。

因此，在 Begriffsschrift 公式中的名称，例如：

![conditional term a equiv b term Ra, b](https://plato.stanford.edu/entries/frege-logic/sec2-1-G.svg)

被迫承担双重责任：在上述条件的前提中，“a”和“b”的出现实际上表示它们自身。然而，在这个条件句的结论部分，“a”和“b”更直接地表示，表示为这些名称实际上指代的任何对象。

弗雷格非常清楚地意识到由于对同一性的理解而产生的困难，他在《概念书写》的第 8 节开始时做出了以下观察：

> 内容的同一性与否定和条件性不同，它是与名称相关联的，而不是与内容相关联的。在其他地方，符号只是简单地代表它们的内容，以至于它们进入的每个组合仅仅表达它们的内容之间的关系，但一旦它们被内容同一性的符号组合，它们立刻代表它们自己；因为这表示两个名称具有相同的内容。因此，引入内容同一性的符号必然会导致每个符号的意义出现分叉，相同的符号一会儿代表它们的内容，下一刻代表它们自己。（1879a: §8）

对这个问题的解决要等到引入意义/指称区分之后才能实现。

到目前为止，我们一直将恒等符号应用于对象的名称。但是弗雷格在《概念符号》中并没有限制恒等符号的应用方式，只要求其应用受限以产生可判断的内容。因此，在《概念符号》的逻辑中，恒等符号可以应用于任意两个参数，而不仅仅是对象之间。

#### 2.1.5 表达普遍性的凹度

最后，我们有弗雷格在《概念符号》中用于表达普遍性的工具：凹度。

> 在判断的表达中，  右侧的符号复合总是可以视为其中一个符号的函数。如果在参数的位置放置一个哥特字母，并在内容笔画中插入包含该字母的凹陷，如
>
> ![judgement all gothic a term higothic a](https://plato.stanford.edu/entries/frege-logic/sec2-1-H.svg)
>
> 那么这表示函数是一个事实，无论其参数取何值。由于用作函数符号的字母，如Φ在Φ(A)中，可以视为函数的参数，因此可以用哥特字母以刚才指定的方式替换它。哥特字母的含义仅受明显限制，即在内容笔画后面的符号复合仍然必须是可判断的（§2），并且如果哥特字母作为函数符号出现，必须考虑这一情况。替换哥特字母可能的所有其他条件都应包括在判断中。（1879a: §11）

因此，这个凹陷是 Begriffsschrift 版本的（类似于）全称量词，以及形式为的公式：

![all gothic a term higothic a](https://plato.stanford.edu/entries/frege-logic/sec2-1-I.svg)

如果且仅如果，对于任意的参数，将由Φ(ξ)表示的函数应用于该参数是真的（或者又是一个事实），那么"是真的"（或者又是一个事实）。请注意，Frege 明确限制了 Begriffsschrift 逻辑中公式的形成，以便凹度只能绑定一个函数，当填入适当的参数时，该函数输出一个可判断的内容。因此，在 Begriffsschrift 逻辑中，“  a+1”是不良形式的。

现在我们可以对 Frege 的 Begriffsschrift 中函数和参数之间的区别的解释增加一些细节，以及在 Grundgesetze 逻辑中将出现的更现代化的对象层次结构，一级函数、二级函数和三级函数。正确理解：

![judgement all gothic a term higothic a](https://plato.stanford.edu/entries/frege-logic/sec2-1-J.svg)

在 Begriffsschrift 中并不断言：

> 对于任何对象 a，Φ(a) 都是一个事实。

但是它更像是在说；

> 对于任何实体（无论“类型”或“种类”如何）a，使得Φ(ξ) 与 a 的组合产生可判断内容，Φ(a) 都是一个事实。

以这种方式理解量化陈述，我们可以自由地将 a 理解为参数，Φ(ξ)理解为函数，或者将Φ(ξ)理解为参数，a 理解为函数，只需满足 a 和Φ(ξ)的组合产生可判断的内容的要求。当然，如果Φ(ξ)是一个仅将对象映射到可判断内容的函数，那么其结果与标准的一阶量化相同。但是弗雷格再次强调这一点，他尚未引入允许他识别这种函数的概念机制，也从未声称特定函数必须只接受一种类型的实体（即只接受对象，或只接受函数等）作为参数。

在格伦特格策的逻辑中用于整理所有这些内容的层次结构的一种明显指示是不存在的，甚至在背景中也没有隐含地存在于概念书写的逻辑中，这表现在弗雷格没有为不同类型的实体引入不同的量词（甚至不是为函数和参数引入）。尽管弗雷格使用不同风格的变量来暗示某些量化范围涵盖参数，而其他量化范围涵盖函数，但这仅仅是一种启发式的方法，必须如此，因为正如我们已经看到的那样，在概念书写的逻辑中，函数/参数的区别并不是在世界中找到的形而上学区别，而只是反映了解释同一陈述的不同方式。因此，概念书写的逻辑中的（单一的普遍）量词涵盖对象和函数（虽然以一种相当复杂的方式），而现代的一阶和高阶量词实际上并没有明确出现在概念书写中，就像它们在格伦特格策的逻辑中清楚地出现的那样。相反，概念书写的逻辑中有一个量词，它涵盖对象和函数（以及概念、关系等），并且对哪些构造是合法的有非正式的限制（即，将函数应用于参数的结果必须产生可判断的内容），这些限制约束了该量词的每个实例的潜在范围。因此，概念书写的逻辑中的量词与现代量词有相当有限的相似之处（参见 Kemp 1995 和 Heck＆May 2013，以了解概念书写中的这种构造甚至不算是一个真正的量词的论点）。

弗雷格有第二种表达普遍性的方式——罗马字母。正如我们将看到的，关于这种设备在格伦特格策的逻辑中应该如何理解存在一些争议。但是在概念书写的逻辑中，关于它们应该如何理解并没有什么神秘，因为在早期的作品中，弗雷格明确表示罗马字母的普遍性设备是德文字母的特殊和特别重要的缩写版本，是普遍量化的凹凸版本的一个特例。

> 只有在其范围内，哥特字母才保留其含义；同一哥特字母可以在一个判断中的不同范围内出现，而在一个范围内赋予其的含义并不会延伸到其他范围。哥特字母的范围可以包括另一个范围，就像下面的例子所示。在这种情况下，必须选择不同的字母；e 不能被替换为 a。当然，可以在其范围内用另一个特定的哥特字母替换一个哥特字母，只要在不同的位置仍然有不同的字母。这对内容没有影响。其他替换只有在凹度紧跟在判断笔画之后时才允许，以便整个判断的内容构成哥特字母的范围。因此，由于这种情况特别重要，我将为其引入以下缩写。斜体字母的范围总是整个判断的内容，而不需要在内容笔画中用凹度表示出来。（1879a: §11）
>
> ![judgement all gothic a conditional all gothic e term Bgothic a, gothic e term Agothic a](https://plato.stanford.edu/entries/frege-logic/sec2-1-K.svg)
>
> 弗雷格在这里非常明确：在概念书写的逻辑公式中出现的罗马（或斜体）字母只不过是相应的用罗马变量替换哥特变量，并且将与这些变量对应的凹度立即放在判断笔画之后的公式的缩写。因此，上述引文中出现的公式在概念书写的逻辑中只是以下公式的缩写：

Frege is quite explicit here: The occurrence of Roman (or italic) letters in a formula of the logic of *Begriffsschrift* is nothing more than an abbreviation of the corresponding formula with the Roman variables replaced by corresponding Gothic variables, and the concavities corresponding to those variables placed immediately after the judgement stroke. Thus, the formula appearing in the quotation above is, in the logic of *Begriffsschrift*, merely an abbreviation for:

![judgement all gothic F all gothic G all gothic a conditional all gothic b term gothic F gothic a, gothic e term gothic G gothic a](https://plato.stanford.edu/entries/frege-logic/sec2-1-L.svg)

罗马字母的普遍性设备旨在提醒读者，通常情况下对德语变量的替换所施加的限制（有效地防止变量冲突）不适用于由凹陷所约束的变量，我们称之为前域位置。

虽然这是弗雷格对罗马字母的官方理解，但他经常将包含罗马字母的公式视为相应凹陷约束的普遍公式的替换实例，即罗马字母选择特定函数和参数的情况。虽然这值得更多关注，但有一个实际原因迫使弗雷格采取这样的举措：由于他在 Begriffsschrift 中没有引入任何命名形成运算符，该语言没有表达任何特定主张的资源。

### 2.2 Begriffsschrift 的公理和规则

Begriffsschrift 的逻辑正式包含九个公理和一个规则，尽管 Frege 通过更不正式的方式“顺便提到”，还额外解释了两个在推导过程中反复使用的规则。在 Begriffsschrift 的推导中，Frege 按照它们在推导序列中的出现顺序对公式进行编号，只有在需要时才引入一个公理，因此根据他的编号，公理分别是 1、2、8、28、31、41、52、54 和 58。在讨论中，我提供了更方便的传统的 1 到 9 的编号，并且这个编号将用于将该系统与 Grundgesetze 中给出的公理和规则集合进行比较。

#### 2.2.1 公理

![judgement conditional term a term conditional term b term a](https://plato.stanford.edu/entries/frege-logic/axiom1.svg)

公理 1（公式 1，1879a：§14）

这是 Begriffsschrift 的类比：

A→(B→A)

尽管应该小心，因为弗雷格的公理，使用罗马字母，是一个量化的公式，而不是一个模式，可能更好地表达为：

∀A∀B(A→(B→A))

其中量词范围涵盖可判断内容。弗雷格如下辩护这一公理：

> [这一公理]… 表明：“否定 a，肯定 b，再肯定 a 的情况被排除”。这是显而易见的，因为 a 不能同时被否定和肯定。我们也可以用文字表达这个判断：“如果命题 a 成立，那么在任意命题 b 成立的情况下它也成立”。（1879a: §14）

公理 2（公式 2）同样很简单，只要我们记住它是一个对可判断内容进行量化的公式的缩写：

![judgement conditional term conditional term c term conditional term b term a term conditional term conditional term c term bterm conditional term c term a](https://plato.stanford.edu/entries/frege-logic/axiom2.svg)

公理 2（公式 2，1879a: §15）

弗雷格（Frege）认为这个公理必须是真实的论证延伸至四页，这里就不再重复。上面引用的公理 1 的论证应该让读者对弗雷格的 Begriffsschrift 对特定公理的理由有所了解（类似的评论也适用于后来更复杂的公理）。这个公理的直观有效性应该是清楚的，因为它是 Begriffsschrift 中类似于某种东西的类比：

∀C∀B∀A(C→(B→A))→((C→B)→(C→A))

其中量词范围涵盖可判断内容。

下一个公理，公理 3（公式 8），允许（与弗雷格的假言推理版本结合使用，见下文）对条件语句的前提进行重新排列：

![judgement conditional term conditional term d term conditional term b term a term conditional term b term conditional term d term a](https://plato.stanford.edu/entries/frege-logic/axiom3.svg)

公理 3（公式 8，1879a: §16）

这个公理将被 Grundgesetze 逻辑中的（更一般的）规则所取代。

公理 4（公式 28）（再次，结合弗雷格的假言推理版本）提供了一个反言的版本。

![judgement conditional term conditional term b term a term conditional not term a not term b](https://plato.stanford.edu/entries/frege-logic/axiom4.svg)

公理 4（公式 28，1879a：§17）

与公理 3 一样，这个公理将在《Grundgesetze》中被一个更一般的规则所取代。

公理 5（公式 31）和公理 6（公式 41）是一对，为我们提供了弗雷格的双重否定引入和双重否定消除的公理化版本。

![judgement conditional not not term a term a](https://plato.stanford.edu/entries/frege-logic/axiom5.svg)

公理 5（公式 31，1879a：§18）

![judgement conditional term a not not term a](https://plato.stanford.edu/entries/frege-logic/axiom6.svg)

公理 6（公式 41，1879a：§19）

这些公理加上弗雷格的假言推理版本完成了我们可以认为是 Begriffsschrift 逻辑的命题部分。卢卡谢维奇证明了这些公理的现代转录，再加上弗雷格的假言推理的现代转录，就在经典逻辑中具有命题量化符号的完备性和完备性，他还证明了（现代转录的）公理 3 在（现代转录的）其他公理加上假言推理的情况下是多余的（卢卡谢维奇 1934）。当然，关于将弗雷格的符号转录为现代符号，并假设他的可判断内容的概念（出现在公理 1 到 6 中的量词的范围）与更现代的命题或句子的概念相同，适用于这一结果的常规警告。

弗雷格对公理 5 和公理 6 的讨论也很好地说明了在《概念符号》和《基本法则》的创作过程中弗雷格逻辑思维发生的变化。在《概念符号》的前言中，弗雷格指出：

> 后来我意识到公式（31）和（41）可以合并成一个单一的公式
>
> ![judgement not not a equiv a](https://plato.stanford.edu/entries/frege-logic/sec-2-2A.svg)
>
> 这样可以进行更多的简化。（1879a：前言）

这个原则与公理 7 和弗雷格的摩德斯·波嫩斯版本结合起来，确实蕴含了公理 5 和 6。此外，有充分理由认为这个原则在弗雷格在《概念书》中提出的非正式语义上是有效的，因为（在《概念书》中）变量被限制为可判断的内容，似乎没有理由怀疑由  a 表示的可判断内容与由 a 表示的可判断内容是相同的。

然而，所有这些都受到一个重要的限制：《概念书》逻辑中的量词受到了限制，而《格伦德格塞茨》中的量词没有受到这种限制。在《概念书》的逻辑中，弗雷格要求量词受到限制，以便将逻辑运算符应用于相关量词范围内的实体的结果得到可判断的内容。因此，在《概念书》对逻辑的理解上有效的公式在《格伦德格塞茨》的理解上不再有效。特别是，正如我们将看到的：

![judgement not all gothic a not not gothic a = gothic a](https://plato.stanford.edu/entries/frege-logic/sec-2-2B.svg)

在《格伦德格塞茨》逻辑的预期解释（一致的、无值域的片段）上是真实的。

接下来的两个公理相对来说比较简单。公理 7（公式 52）提供了相同物的不可辨性的公理化版本：

![judgement conditional term c equiv d term conditional term fc term fd](https://plato.stanford.edu/entries/frege-logic/axiom7.svg)

公理 7（公式 52，1879a: §20）

在《Grundgesetze》的逻辑中，会出现一个更强的版本的这个公理。

而公理 8（公式 54）为我们提供了自我认同：

![judgement c equiv c](https://plato.stanford.edu/entries/frege-logic/axiom8.svg)

公理 8（公式 54，1879a：§21）

再次，这个公理适用于任何论证 c（也就是任何东西），而不仅仅适用于对象。

公理 9（公式 58）对我们来说更有趣一些，不是因为它所说的内容，而是因为它所遗漏的内容。公理 9 本质上允许我们用罗马字母替换条件前提中受凹性约束的德语字母：

![judgement conditional all gothic a term fgothic a term fc](https://plato.stanford.edu/entries/frege-logic/axiom9.svg)

公理 9（公式 58，1879a: §22）

注意，弗雷格没有提供这个公理的相应的二阶版本（就像他在《基本法则》中所做的那样）- 相反，这个公理应该被理解为涵盖了一阶和二阶的情况，因此表达了类似以下的内容：

> 对于任何函数 f 和任何使得 f(c) 是可判断内容的参数 c：如果对于任何使得 f(a) 是可判断内容的参数 a，f(a) 是一个事实，那么 f(c) 也是一个事实。

 而不是：

> 对于任何（一级）函数 f 和任何对象 c：如果对于任何对象 a，f(a) 是一个事实，那么 f(c) 也是一个事实。

#### 2.2.2 推理规则

接下来是推理规则。在《概念符号论》的前言中，弗雷格声称他只使用一种推理方式：

> 在第 6 节中，对于只使用一种推理方式的限制是有道理的，因为在奠定这样一种概念符号论的基础时，如果要实现明晰和秩序，原始要素必须尽可能简单。（1879a：前言）

问题中的规则是一种假言推理的版本，弗雷格解释如下：

> 从第 5 节中给出的解释可以清楚地看出，从这两个判断中
>
> ![judgement conditional term B term A](https://plato.stanford.edu/entries/frege-logic/sec-2-2Ca.svg)
>
> 和
>
> ![judgement term B](https://plato.stanford.edu/entries/frege-logic/sec-2-2Cb.svg)
>
> 新的判断  A 如下。在我们上面列举的四种情况中，第三种情况被排除在外
>
> ![judgement conditional term B term A](https://plato.stanford.edu/entries/frege-logic/sec-2-2D.svg)
>
> 第二种和第四种情况被  B 排除，因此只剩下第一种情况。（1879a: §6）

弗雷格所指的四种情况是指在上面引用的条件符号的解释中给出的 A 和 B 是事实或不是事实的四种可能组合。

乍一看，这似乎是熟悉的假言推理规则，但实际上它要复杂得多。弗雷格经常将该规则应用于包含罗马字母的公式对。记住，在《概念符号》中，罗马字母是前缀凹量化符号的缩写，弗雷格在他对该规则的解释中使用的简单情况实际上是从以下过渡的简写形式：

![judgement all gothic a all gothic e conditional term gothic a term gothic e](https://plato.stanford.edu/entries/frege-logic/sec-2-2Ea.svg)

 和

![judgement all gothic a term gothic a](https://plato.stanford.edu/entries/frege-logic/sec-2-2Eb.svg)

 到：

![judgement all gothic e term gothic e](https://plato.stanford.edu/entries/frege-logic/sec-2-2F.svg)

量词范围涵盖可判断内容的地方。因此，正如他在整个《概念书》中所应用的那样，这条规则根本不是命题规则摩德斯·波能斯。相反，它类似于以下内容（用现代符号表示）：

∀a1∀a2…∀an∀b1∀b2…∀bm∀c1∀c2…∀ck(Φ1(a1,a2,…an,b1,b2,…bm)→Φ2(a1,a2,…an,c1,c2,…ck))[P2] ∀a1∀a2…∀an∀b1∀b2…∀bm(Φ1(a1,a2,…an,b1,b2,…bm))[C] ∀a1∀a2…∀an∀c1∀c2…∀ck(Φ2(a1,a2,…an,c1,c2,…ck))

以这种方式理解这条规则，有两件事情值得注意。

首先，一旦我们认识到在规则的任何实例中，由罗马字母缩写的（德语字母限定的）量词所起的作用，就清楚地看出弗雷格对该规则的辩护是完全不足够的。弗雷格的论证对于规则的特定替换实例可能是足够的，其中没有出现罗马字母。但它并没有涉及到更一般的原则，即规范了他在《概念符号》中实际应用该规则的方式。

其次，实际上，这根本不是一个单一的规则，而是无限多个规则的模式：每个由变量序列 a1、a2、an；b1、b2、…bm；和 c1、c2、…ck 组成的三元组都有一个对应的规则，其中不仅每个实例中的 ai、bi 和 ci 的数量可以变化，而且它们的类型（请记住，这些是参数变量和函数变量，而不是对象变量和函数变量）也可以变化。弗雷格可能对这个规则的强烈的模式化特点感到困扰，因为他的兴趣在于提供特定的逻辑原则，从而我们可以推导出特定的普遍逻辑真理。因此，也许并不奇怪，弗雷格在《基本法则》中对罗马字母的作用给出了完全不同（尽管有些不太清楚）的解释。

尽管弗雷格在《概念符号》的前言中声称这个假言三段论版本是他唯一的推理规则，但他在后来的著作中修改了这一说法，并指出：

> 在逻辑学中，沿袭亚里士多德的观点，列举了一整套推理模式；我只使用其中一种——至少在所有新判断源自不止一个单一判断的情况下。（1879a: §6）

弗雷格所指的两条规则涉及从单一判断到单一判断的转换，这些规则我们将称之为凹入引入和替换规则（弗雷格没有给它们命名）。

弗雷格解释了凹入引入规则如下：

> 斜体字母总是可以用哥特字母来替换，只要这个哥特字母还没有出现在判断式中，凹槽应立即插入判断笔画之后。例如，可以用以下形式代替：
>
> ![judgement Xa](https://plato.stanford.edu/entries/frege-logic/sec-2-2Ga.svg)
>
> 人们可以放置：
>
> ![judgement all gothic a term Xgothic a](https://plato.stanford.edu/entries/frege-logic/sec-2-2Gb.svg)

如果 a 只出现在 X(a)的参数位置中：很明显也可以从中清楚地看出：

![judgement conditional term A term hia](https://plato.stanford.edu/entries/frege-logic/sec-2-2Gc.svg)

* 人们可以得出：*

![judgement conditional term A all gothic a term higothic a](https://plato.stanford.edu/entries/frege-logic/sec-2-2Gd.svg)

如果 A 是一个表达式，其中 a 不出现，并且 a 仅出现在Φ(a)的参数位置。（1879a: §11）

弗雷格随后给出了第二个例子，利用了条件符号结构可以以不止一种方式被解析为前提和结论的事实。

> 同样，从：
>
> ![judgement conditional term B term conditional term A term hia](https://plato.stanford.edu/entries/frege-logic/sec-2-2Ha.svg)
>
> 我们可以推断：
>
> ![judgement conditional term B term conditional term A all gothic a term higothic a](https://plato.stanford.edu/entries/frege-logic/sec-2-2Hb.svg)
>
> （1879a: §11）

弗雷格的凹性引入规则的操作如下：给定任何包含罗马字母的公式，我们可以推断出任何用德语字母统一替换罗马字母并在某个包含所有新德语字母出现的后件之前立即插入一个包含相同德语字母的凹性的命题（回想一下，公式可以以多种方式解析为后件和前件），或者凹性可以放在整个公式的前面（在判断符号之后）。新的德语字母必须选择为不与原始命题中已经存在的其他德语字母“冲突”的字母。看一个更复杂的例子，如果“A”和“B”是不包含罗马字母“x”的任何公式，而“Φ(ξ)”和“Ψ(ξ)”不包含“a”，那么从：

![judgement conditional term A term conditional term B term conditional term hix term six](https://plato.stanford.edu/entries/frege-logic/sec-2-2Ia.svg)

我们可以推断出以下任何一个：

![judgement conditional term A term conditional term B all gothic a term conditional term higothic a term sigothic a](https://plato.stanford.edu/entries/frege-logic/sec-2-2Ib1.svg)

![judgement conditional term A all gothic a term conditional term B term conditional term higothic a term sigothic a](https://plato.stanford.edu/entries/frege-logic/sec-2-2Ib2.svg)

![judgement all gothic a conditional term A term conditional term B term conditional term higothic a term sigothic a](https://plato.stanford.edu/entries/frege-logic/sec-2-2Ib3.svg)

 但不能推断出：

![judgement conditional term A term conditional term B term conditional term higothic a all gothic a term sigothic a](https://plato.stanford.edu/entries/frege-logic/sec-2-2Ic.svg)

这条规则实际上并不涉及在 Begriffsschrift 的逻辑中“引入”凹陷，因为被替换的罗马字母当然是凹陷的一个实例的缩写。相反，这条规则是将一个凹陷从一个位置移动到另一个位置的手段。因此，在这里使用“凹陷引入”这个名称是为了强调这条规则与 Grundgesetze 逻辑中发现的句法类似规则之间的联系（在那里，正如我们将看到的，罗马字母不是对应初始凹陷的缩写，而是实现普遍普遍性的第二个完全独立的设备，因此这条规则确实涉及引入一个之前不存在的凹陷）。

Frege 在 Begriffsschrift 中的最后推理规则是替换规则：一旦证明了特定的公式，那么在以后的推导中，不仅可以使用已经证明的公式本身，还可以使用对原始公式中的罗马字母进行任意统一替换的结果，再次，前提是公式和所有相关子公式都是可判断的内容。Jean van Heijenoort 在他关于 Begriffsschrift 的引言性文章中认为，Frege 以不当的方式应用了他的替换规则，这种方式将导致矛盾。有关讨论，请参阅附加文章《Begriffsschrift 中的所谓矛盾》。

Begriffsschrift 的第三部分介绍了所谓的关系的弱祖先和强祖先的定义，并根据这些概念证明了一个强大的归纳定理。对这一构造的仔细研究超出了本文的范围，鼓励读者查阅有关 Frege 定理的条目以获取更多细节。

对于我们来说，Begriffsschrift 第三部分最重要的方面至少是弗雷格引入的新符号：定义符号“  ”。定义符号最初出现在以下形式的公式中：

![definition term hi equiv si](https://plato.stanford.edu/entries/frege-logic/sec-2-2J.svg)

其中“Ψ”是被定义的部分，“Φ”是定义部分。在展示定义符号如何运作的例子之后（第 69 公式，f-序列中 F 的遗传性概念），弗雷格在 Begriffsschrift 中解释了定义符号如下：

> 这个句子与之前考虑过的句子不同，因为其中出现了以前未被定义的符号；它本身就是给出的定义。它并不是说，“等式的右边与左边具有相同的内容”；而是，“它们应该具有相同的内容”。因此，这个句子不是一个判断；因此，使用康德的表达方式，也不是一个综合判断。[...]
>
> 虽然最初（69）不是一个判断，但它很容易转化为一个；因为一旦新符号的含义被指定，它就从那时起保持不变；因此，公式（69）也作为一个判断成立，但作为一个分析性的判断，因为我们只能得到新符号中所输入的内容。这个公式的双重作用通过判断符号的加倍来表示。（1879a: §24）

在 Begriffsschrift 的定义中使用概念内容的相同性（即“≡”）自动意味着 definiens 和 definiendum 具有相同的内容（即指代相同的事实或情况），而在 Grundgesetze 中使用的身份的改进理解仅仅意味着，从逻辑上讲，definiendum 和 definiens 指代相同的对象。因此，在他的非正式解释中，弗雷格明确规定，在 Grundgesetze 的定义中，身份符号两侧出现的表达不仅具有相同的指称，而且具有相同的意义。

## 3. Grundgesetze 的逻辑

对于对弗雷格在写作《概念符号》和《Grundgesetze》之间的逻辑思想演变感兴趣的读者，应参阅短篇补充文章《《概念符号》和《Grundgesetze》之间的时期》。在这里，我们将直接跳入后一部作品中包含的形式系统。

《概念符号》的逻辑与《Grundgesetze》的逻辑之间的一个主要且最明显的区别之一（除了增加了值域之外）是，弗雷格现在已经有了一个完全成熟、严格的类型理论。最基本的区别在于对象（饱和的）和函数（包括概念作为特例）之间，函数需要通过应用一个或多个参数来“完成”。

函数的两种特别重要的类型是概念和关系。概念是一元函数，对于任何参数（适当类型的参数），函数应用于该参数的值是一个真值。关系是具有两个（或更多）参数的函数，对于任何一对（或 n-元组）参数（同样是适当类型的参数），函数应用于该对的值是一个真值（Frege 1893/1903: §4，另请参见 1893/1903: §22）。

根据弗雷格的说法，函数还可以根据其所接受的参数类型进行细分。因此，如果一个函数仅接受对象或对象作为参数，那么它就是一级函数；如果一个函数仅接受一级函数或函数作为参数，那么它就是二级函数；如果一个函数仅接受二级函数或函数作为参数，那么它就是三级函数（弗雷格 1893/1903: §21 至 §23，另见 §26）。

接下来，我们将把对《Grundgesetze》逻辑的讨论分为三个部分。第一部分考虑了早期《概念书》中出现的符号（尽管理解方式通常有所不同），第二部分介绍了《Grundgesetze》逻辑中的新符号，第三部分介绍了《Grundgesetze》逻辑的公设（现在称为基本定律）和推理规则。

### 3.1 《Grundgesetze》中的“旧”运算符

#### 3.1.1 判断符号

与《概念书》中的情况一样，《格言法则》的判断符号将表达式转化为判断。然而，与早期系统不同，在《格言法则》的逻辑中，判断符号并不附加于命名事实或情况的表达式，而是附加于命名对象（即专有名词）的表达式：

> 上文已经说明，在单纯的等式中并没有包含任何断言；对于“2+3=5”，只是指定了一个真值，而没有说明是其中的哪一个。此外，如果我写下“(2+3=5)=(2=2)”并假设人们知道 2=2 是真的，即使这样，我也并没有断言 2 和 3 的和是 5；相反，我只是指定了这样一个真值：即“2+3=5”指的是与“2=2”相同的东西。因此，我们需要另一个特殊符号来断言某事为真。为此，我让符号  在真值的名称之前，例如在以下情况下：
>
> ![judgement 2^2 = 4](https://plato.stanford.edu/entries/frege-logic/sec-3-1-A.svg)
>
> 据称 2 的平方是 4。我以这样的方式区分判断和思想，即我认为判断是对思想真实性的确认。（弗雷格 1893/1903: §5）

因此，对于缺乏判断符号的 Grundgesetze 表达式的应用，断言所讨论的表达式是 True 的名称，其中 True 是真句所指的对象（False 是假句所指的对象）。形式为：

![judgement hi](https://plato.stanford.edu/entries/frege-logic/sec-3-1-B.svg)

现在不再表示“Φ是一个事实”，而是表示类似于“Φ是（即等同于）True”。值得注意的是，在我们讨论弗雷格新 Grundgesetze 对罗马字母的理解时，对判断符号的这种简单解释将会在一定程度上变得复杂。

在《格伦德格塞特》中，弗雷格再次提出，判断符号（1893/1903: §5），否定符号（1893/1903: §6），条件符号（1893/1903: §12）和凹陷（1893/1903: §8）都可以理解为仅由实际的垂直“划线”或线条（或带有变量的曲线，对于凹陷的情况）组成，附加的水平部分的符号被理解为水平的独立发生。在《格伦德格塞特》中的实际应用中，判断符号从不单独出现，总是带有附加的水平部分。然而，与《概念符号》不同的是，水平符号经常单独出现，作为与判断符号、条件符号和否定符号不同的运算符。

在《格伦德格塞特》的逻辑中，水平符号是一个一元函数符号，附加到对象的名称上，并命名一个总是输出真值的函数，不论输入的对象是什么类型：

> 我将其视为一个函数名称，满足以下条件：
>
> ![circumstance elta](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Ca.svg)
>
> 当Δ为真时，为真，当Δ不为真时，为假。因此，
>
> ![circumstance i](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Cb.svg)
>
> 是一个其值始终为真值的函数，或者根据我们的约定是一个概念。（1893/1903: §5）

换句话说，如果“Δ”的名字前加上水平线，那么得到的复合名字：

![circumstance elta](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Ca.svg)

与“Δ”命名相同的真值。然而，如果“Δ”不命名一个真值，那么“  Δ”就表示 False。

这里特别重要的是，在 Grundgesetze 的逻辑中，横线并不仅限于可判断的内容：横线可以有意义地应用于任何名称。由于 Frege 坚持要求所有函数在适当类型的所有参数上都有定义，因此横线表示的函数必须对所有对象都有定义。因此，当应用于不是真值的对象时，它输出 False。

因此，尽管 Frege 要求在引用上述判断线的解释时，判断线必须附加到一个真值名称上，但在 Grundgesetze 的逻辑中，我们可以通过将判断线附加到“  Δ”来实现将判断线附加到任何名称Δ的效果，得到：

![judgement circumstance elta](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Da.svg)

如果横画是判断笔画的一部分，并且鉴于（如下所讨论的）多个横画可以融合成单个横画，则上述判断等同于：

![judgement elta](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Db.svg)

或者，如果后者构成良好形式的话。因此，“  2”（或者至少，“  （  2)”在 Grundgesetze 逻辑中是一个良好形式的判断，尽管是错误的。

#### 3.1.2 否定笔画

在《Grundgesetze》的逻辑中，否定符号是一个一元函数符号，它附加到对象的名称上——在弗雷格的术语中，它命名了一个一级概念。与水平线一样，否定符号将任何专有名称转换为真值名称：

> 我们不需要一个特定的符号来声明一个真值为假，只要我们有一个符号，通过它，每个真值都可以转换为它的相反值，这在任何情况下都是必不可少的。我现在规定：
>
> 函数的值
>
> ![not i](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Ea.svg)
>
> 对于函数值为假的每个参数，它是假的，对于所有其他参数，它是真的。
>
> ![circumstance i](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Eb.svg)
>
> 是真的，对于所有其他参数，它是真的。（1893/1903: §6）

因此，如果否定符号前缀于一个真值“Δ”的名称，则“  Δ”如果“Δ”表示假，则命名为真，并且如果“Δ”表示真，则命名为假。然而，如果“Δ”不表示一个真值，那么“  Δ”命名为真。

弗雷格将否定符号视为一个全函数的处理方式具有奇怪的后果。例如，如果“Δ”是除了真值以外的任何对象的名称，那么“  Δ”就表示真，因此我们有：

![judgement not elta](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Ed.svg)

弗雷格明确指出“  2”是一个正确的判断（1893/1903: §6）。

#### 3.1.3 条件符号

在《Grundgesetze》的逻辑中，弗雷格的条件符号是一个二元函数符号，它附着于对象的名称上——用弗雷格的术语来说，条件符号命名了一个一级关系：

> 接下来，为了能够指定概念的从属关系和其他重要关系，我引入了具有两个参数的函数：
>
> ![conditional term eta term i](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Fa.svg)
>
> 通过规定，如果将 True 作为ζ参数，那么其值应为 False，而如果将不是 True 的任何对象作为ξ参数，则在所有其他情况下，函数的值应为 True。（1893/1903: §12）

有条件的推断是一个总函数：对于任意两个适当的名称“Δ”和“Γ”：

![conditional term elta term amma](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Fb.svg)

如果“Δ”未能命名为真（即命名为假或未命名为真值），或者“Γ”命名为真，则为真的名称；否则为假。因此，对于任何名称“Δ”：

![conditional term 2 term elta](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Fc.svg)

是真的名称，因此：

![judgement conditional term 2 term elta](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Fd.svg)

在《Grundgesetze》逻辑中是一个正确的判断

弗雷格称条件语句的下部分（现代读者可能称之为前提）为条件语句的子部分，上部分（现代读者可能称之为结论）为条件语句的超部分。然而，正如我们在《Begriffsschrift》逻辑讨论中所指出的，条件语句的构造可以以多种方式解析为超部分和子部分。例如，给定“Δ”、“Γ”、“Θ”、“Λ”和“Ξ”这些专有名词，我们可以将复杂表达式解析为：

![conditional term elta term conditional term amma term conditional term heta term conditional term ambda term i](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Ga.svg)

其中任何一个：

![conditional term amma term conditional term heta term conditional term ambda term i](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Gb1.svg)

![conditional term heta term conditional term ambda term i](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Gb2.svg)

![conditional term ambda term i](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Gb3.svg)

或者“Ξ”作为超组件（分别在每个读数上有一个、两个、三个或四个子组件）。虽然弗雷格将条件划线引入为一个简单的二元一级函数，从对象对到真值，但在他对条件划线的处理（特别是在用条件划线进行推理的推理规则中），他将条件划线视为一种开放式的 n 元函数名称，它以超组件作为单一参数，但可以以任意（有限）数量的参数作为其子组件。由于弗雷格的许多推理规则是以增加、消除或重新定位超组件和子组件的术语来表述的，这种系统的歧义对于格伦德格策内部如何构建证明具有深远的影响。

复杂条件划线结构的多子组件读数在这一点上有两个值得一提的后果。首先，弗雷格指出，在以下读数中：

![conditional term elta term conditional term ambda term heta](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Ha.svg)

其中Δ和Λ是两个子组件，每个子组件的作用完全相同——子组件的“排序”并不重要（1893/1903: §12）。因此，这个表达式命名了与以下相同的真值：

![conditional term ambda term conditional term elta term heta](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Hb.svg)

Frege 引入了一条推理规则（可以在推导中无需注释地应用），允许对子组件进行任意重新排序。这条规则相当于 Begriffsschrift 逻辑中 Axiom 3 的 Grundgesetze 类比。

 沿着类似的思路：

![conditional term elta term conditional term elta term heta](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Ia.svg)

与相同的真值命名为：

![conditional term elta term heta](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Ib.svg)

弗雷格引入了一条推理规则，允许从第一个公式移动到第二个公式，并且通常允许相同子组件的“融合”（同样地，在推导中可以无需注释地应用）。 弗雷格接着指出，这些推理规则可以推广到具有任意数量子组件的条件划线构造。

#### 3.1.4 判断划线的等价性

现在我们已经考虑了我们可能自然地（尽管正如我们已经注意到的那样，有些过时）认为是 Grundgesetze 逻辑的命题片段，我们需要回到水平划线。 弗雷格建议，否定划线、条件划线和判断划线可以被理解为仅由其形式化中涉及的实际垂直“划线”或线条组成，其符号的附加水平部分被理解为水平的单独发生（参见（1893/1903: §5, §6 和§12)）。 因此，对于任何名称“Δ”，所有的：

1. ![not](https://plato.stanford.edu/entries/frege-logic/inline-not.svg) Δ,
2. ![not](https://plato.stanford.edu/entries/frege-logic/inline-not.svg) ( ![circumstance](https://plato.stanford.edu/entries/frege-logic/inline-circumstance.svg) Δ),
3. (  Δ), 和
4. ![circumstance](https://plato.stanford.edu/entries/frege-logic/inline-circumstance.svg) ( ![not](https://plato.stanford.edu/entries/frege-logic/inline-not.svg) ( ![circumstance](https://plato.stanford.edu/entries/frege-logic/inline-circumstance.svg) Δ))

名称相同的真值（1893/1903 年：§6），对于任何名称“Δ”和“Γ”，都有：

![conditional elta term amma](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Ka.svg)

(a)

![circumstance conditional term elta term amma](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Kb.svg)

(b)

![conditional term circumstance elta term amma](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Kc.svg)

(c)

![conditional term elta term circumstance amma](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Kd.svg)

 (d)Translation:

![conditional term circumstance elta  term circumstance amma](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Ke.svg)

(e)

![circumstance conditional term elta term circumstance amma](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Kf.svg)

(f)

![circumstance conditional term circumstance elta term amma](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Kg.svg)

(g)

![circumstance conditional term circumstance elta circumstance Gamma](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Kh.svg)

(h)

名称相同的真值（1893/1903: §12）。弗雷格称之为等价性，并且由于用另一个等效的表达式替换上述表达式而产生的转换，称为水平线的融合。与子组件的排列和相同子组件的融合一样，弗雷格允许在《基本法则》的推导中融合（和“解融”）水平线（1893/1903: §48），而不作任何评论。

细心的读者可能会想知道为什么弗雷格选择了他实际选择的特定函数。他难道不能定义否定，使得“  Δ”在“Δ”不是真值名称时表示真吗？我们现在有能力回答这个问题：否定符号和条件符号必须与水平线融合的事实意味着弗雷格提供的否定符号和条件符号的特定定义是唯一可能的，考虑到他如何定义水平线（Berg＆Cook 2017）。

#### 3.1.5 等号

现在我们来到了 Begriffsschrift 的逻辑和 Grundgesetze 的逻辑之间的另一个重大区别。现在他已经引入了意义/指称的区别，弗雷格可以解释“a=a”和“a=b”（两者都为真）之间内容上的差异，这是基于意义上的差异。因此，在 Grundgesetze 的逻辑中，弗雷格的等号被定义为人们所期望的那样：

> 我们已经比较随意地使用了等号来形成例子，但有必要对它做出更精确的规定。
>
> 'Γ=Δ'
>
> 如果Γ与Δ相同，则指的是真；在其他所有情况下，指的是假。（1893/1903: §7）

请注意，他已经转而使用传统的等号符号“=”，而不是他在《概念符号》中引入的特殊符号“≡”，用于表示概念内容的相同性。关于弗雷格的意义/指称区分发展的良好概述，特别关注该区分在《基本法则》后期逻辑中所起的作用，可参考克雷默（2010）的研究。

虽然等号的定义现在变得很直接，但弗雷格对它的使用与现代谓词逻辑中等号符号的使用有些不同。弗雷格在提出日常等式如“2+2=4”时使用等号，但他也使用同样的符号夹在真值名称之间，以表达真值名称是同一真值的名称的主张，也就是说，所讨论的表达式是等价的。这解释了弗雷格在讨论定义的命题运算符时的一个明显疏忽。弗雷格在《Grundgesetze》中并没有明确给出材料双条件的定义，尽管他本可以很容易地按照标准方式定义材料双条件为两个条件句的合取：

![not conditional term conditional term elta term amma not term conditional term amma term elta](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Ma.svg)

如果“Δ”和“Γ”都是真值名称，那么这个定义的概念和弗雷格原始等号符号所表示的函数输出相同的值。然而，如果“Δ”和/或“Γ”中有一个或两个是适当名称而不是真值名称，那么应用于这些参数的复材料条件的值可能与应用于它们的等号符号的值不同。例如：

![not conditional term conditional term 1 term 2 not term conditional term 2 term 1](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Mb.svg)

是真的名称，而“1 = 2”是假的名称。

弗雷格指出，身份符号与水平线的结合使我们能够构造一个将真值映射到“真” ，并将其他任何对象映射到“假”的函数（1893/1903: §5）：

![i = circumstance i](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Mc.svg)

这个真值概念帮助我们解决了与概念符号逻辑和 Grundgesetze 逻辑之间的深层差异之一相关的技术问题。

请回忆，弗雷格在《概念符号》的前言中指出他本可以添加：

![judgement not not a equiv a](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Na.svg)

对于逻辑来说，这个原则将简化表达，因为它暗示了公理 5 和公理 6。我们还注意到，对于 Begriffsschrift 的逻辑来说，这个论断是正确的，因为所讨论的量词仅限于可判断的内容。然而，在 Grundgesetze 的逻辑中情况就不同了，因为在 Grundgesetze 的解释中，这个相同的公式（在纯语法意义上理解“sameness”，取决于将“≡”替换为“=”）是错误的。假设“Δ”是任何不是真值的对象的名称。那么“  Δ”是 True 的名称，因此“  Δ”是 False 的名称，“Δ”和“  Δ”不是同一个对象的名称。因此，“  Δ=Δ”是 False 的名称。

我们可以利用刚刚讨论的真值概念，在 Grundgesetze 的逻辑中构建一个正确的判断，捕捉到 Frege 考虑添加到 Begriffsschrift 中的直观含义：

![judgement conditional term a = circumstance a term a = not not a](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Oa.svg)

简而言之，如果“Δ”是一个真值的名称，那么“Δ”和“Δ”的双重否定名称相同的对象。

#### 3.1.6 两种普遍量化形式

接下来是量词。在《Grundgesetze》的逻辑中，不像（严格来说）在《Begriffsschrift》的逻辑中，弗雷格动用了两种不同的普遍量化形式。其中第一种是最简单的：凹性。凹性（伴随德语字母）是一个一元的二级概念，将一级函数映射到真值：

> […] 让：
>
> ![all gothic a term higothic a](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Ob.svg)
>
> 如果函数Φ(ξ)的值对于每个参数都为真，则为真，否则为假。（弗雷格 1893/1903：§8）

弗雷格没有限制“Φ(ξ)”必须是一个概念的名称，因此“  a+1”是格兰德格塞茨逻辑中的一个良好形成的判断，尽管是错误的。实际上，他无法一致地施加任何这样的限制，因为二级函数必须以与一级函数完全相同的方式为所有一级函数定义，就像一级函数必须为所有对象定义一样。

在格兰德格塞茨逻辑中，凹度与否定符号和条件符号一样，“融合”于水平线上。换句话说，以下所有内容都表示相同的真值（即等价）：

1. ![all gothic a term higothic a](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Oc1.svg) ,
2. ![circumstance all gothic a term higothic a](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Oc2.svg) ,
3. ，并且
4. ![circumstance all gothic a term circumstance higothic a](https://plato.stanford.edu/entries/frege-logic/sec-3-1-Oc4.svg)

Frege 还允许在推导过程中对与凹度相连的水平线进行融合或解融，而无需进行注释（1893/1903: §8）。

Frege 通过凹度明确引入了通过凹度进行二阶量化的符号表示，使用了现在熟悉的方法：确定这样一个量词表示的是哪个（在这种情况下是三级）函数。如果“Fβ”是一个二级函数名（其中下标的“β”绑定了作为“Fβ”应用的参数中出现的对象级别的“β”），那么：

![all gothic f term athcalFetagothic f eta](https://plato.stanford.edu/entries/frege-logic/sec-3-1-P.svg)

给出了一个命题的真值，即对于每个一级函数Φ(ξ)，应用名为“Fβ”的函数到Φ(ξ)的结果是 True（1893/1903: §24）。因此，与 Begriffsschrift 的逻辑不同，Grundgesetze 的逻辑涉及一级和二级量化的不同量词，而不仅仅是引入一个量词，有时范围是函数，有时范围是这些函数的参数，具体取决于上下文。

Frege 没有引入第三或更高阶的凹量化符号，因为从实际角度来看，他从来不需要它：相反，他使用值域运算符来“降低”Grundgesetze 中的各种结构（如下所述），使它们处于他的一级和二级凹量化的范围内。

最后，我们有定义符号。与 Begriffsschrift 一样，Frege 使用定义符号“  ”来指示一个句子是一个定义：

> 为了通过已知的符号来引入新的符号，我们现在需要定义的双划线，它是由一个双判断划线和一个水平线组合而成：
>
> ![definition symbol](https://plato.stanford.edu/entries/frege-logic/definition.svg)
>
> 并且在需要定义而不是判断的情况下，它代替了判断划线。通过定义，我们通过确定一个由已知符号组成的名称具有相同的意义和相同的指称来引入一个新名称。新的符号因此与解释符号具有共同的指称；因此，定义立即变成了一个命题。因此，我们可以像替换判断划线一样引用一个定义，用判断划线代替定义划线。（1893/1903: §27）

在定义划线的解释上，这与《概念符号》中给出的解释几乎没有区别，但值得注意的是，由《基本法则》定义所涉及的相等判断仅断言“a”和“b”具有相同的指称，而不是它们具有相同的意义。因此，弗雷格明确规定，《基本法则》定义的被定义项和定义项具有相同的意义。

### 3.2 《格伦德格塞的新运算符》

#### 3.2.1 泛化的工具：罗马字母

##### 3.2.1.1 罗马字母的基础

我们开始讨论在 Begriffsschrift 的逻辑中没有出现的新概念，这些概念在 Grundgesetze 中用于表达普遍性的第二种方法：罗马字母普遍性装置。乍一看，这可能令人惊讶，因为罗马字母在 Begriffsschrift 中被用作表达普遍性的装置，如上所讨论的。但在 Begriffsschrift 中，它们（至少在官方上）仅仅是所讨论的公式中最初出现的凹陷的实例的缩写。然而，在 Grundgesetze 的逻辑中，罗马字母是一个全新的、独立的泛化装置。

将我们的注意力限制在最简单的情况下，即小写罗马字母“x”“指示”（按弗雷格的术语）一个对象，而“Φ(ξ)”是任何一级函数名：

![judgement hix](https://plato.stanford.edu/entries/frege-logic/sec-3-2-A.svg)

如果由“Φ(ξ)”命名的函数对于每一个可能的参数都输出 True，那么这是一个正确的 Grundgesetze 命题，否则就是不正确的（1893/1903: §17）。

细心的读者会注意到（继承自弗雷格），我们对罗马字母普遍性装置的解释并不遵循我们在讨论水平线、否定线、条件线或凹陷时所使用的一般模式。简而言之，我们并没有确定“Φ(x)”表达式所指的函数（其中“x”是罗马字母普遍性装置的一个实例），而只是解释了涉及罗马字母普遍性装置的判断何时是正确的。

弗雷格从未为罗马字母普遍性装置给出类似的函数识别定义——也就是说，他从未确定由这个特定逻辑装置表示的特定二级函数。其原因很简单：如果他这样做了，（i）它很可能是与同一“阶”凹陷实例所选取的函数相同；（ii）它将适用于 Grundgesetze 公式中的子表达式，但实际上并不适用；（iii）它实际上并没有灵活的范围。因此，包含罗马字母的表达式并不是名称：

> 我只将那些指向某物的符号或符号组合称为名称。因此，罗马字母及其中出现的符号组合并不是名称，因为它们只是指示。当每个罗马字母被名称替换时总是得到一个适当的名称的符号组合，我将其称为罗马对象标记。此外，当每个罗马字母被名称替换时总是得到一个函数名称的符号组合，我将其称为罗马函数标记或函数的罗马标记。（1893/1903: §17）

鉴于罗马字母的普遍性设备似乎与 Grundgesetze 中发现的其他逻辑概念非常不同，读者可能会想知道(a)为什么弗雷格要包括它，以及(b)我们应该如何理解它。对于第一个问题的答案相对简单，对于第二个问题的答案则较为复杂。弗雷格将罗马字母的普遍性设备解释如下：

> 现在让我们看看逻辑中称为“巴巴拉”的推理如何适用于这里。从以下两个命题：
>
>> “所有的 1 的平方根都是 1 的四次方根”
>>
>
> 并且：
>
>> “1 的所有四次方根都是 1 的八次方根”
>>
>
> 我们可以推断：
>
>> “1 的所有平方根都是 1 的八分之一根”
>>
>
> 如果我们现在这样写前提：
>
> ![judgement all gothic a conditional term gothic a](https://plato.stanford.edu/entries/frege-logic/sec-3-2-B1a.svg)
>
> ![judgement all gothic a conditional term gothic a](https://plato.stanford.edu/entries/frege-logic/sec-3-2-B1a.svg)
>
> 那么我们无法应用我们的推理方式；然而，如果我们将前提写成以下形式，我们就可以应用
>
> ![judgement conditional term x](https://plato.stanford.edu/entries/frege-logic/sec-3-2-B2a.svg)
>
> ![judgement conditional term x](https://plato.stanford.edu/entries/frege-logic/sec-3-2-B2b.svg)
>
> 这里我们有第 15 段的情况。在上文中，我们尝试用罗马字母来表达一般性，但放弃了，因为我们观察到一般性的范围无法得到充分的界定。现在，我们通过规定罗马字母的范围为包括命题中除了判断符号之外的一切来解决这一问题。因此，一个人永远不能用罗马字母来表达一般性的否定，尽管我们可以表达否定的一般性。因此，现在不再存在歧义。然而，德语字母和凹凸的一般性表达并没有变得多余。我们关于罗马字母范围的规定仅仅是为了界定其最窄的范围，而不是最宽的范围。因此，让范围延伸到多个命题仍然是允许的，这样罗马字母就适合用于推理，而德语字母由于其严格的范围界定无法胜任。因此，当我们的前提是
>
> ![judgement conditional x](https://plato.stanford.edu/entries/frege-logic/sec-3-2-C1.svg)
>
> 并且
>
> ![judgement conditional x](https://plato.stanford.edu/entries/frege-logic/sec-3-2-C2.svg)
>
> 那么为了得出结论
>
> ![judgement conditional x](https://plato.stanford.edu/entries/frege-logic/sec-3-2-C3.svg)
>
> 我们暂时扩展“x”的范围，以包括前提和结论，尽管每个命题即使没有这种扩展也成立。（1893/1903: §17）

关于这段文字有几点重要的事情需要注意。首先，与 Begriffsschrift 的逻辑相比，对罗马字母的一般性设备的这种新颖处理正是由我们在本文前面提出的关于假言三段论的谜题所激发的。在这里，所讨论的推理是假设三段论的一个版本（在 Grundgesetze 的§15 中有详细说明，稍后会有更多介绍），但问题是一样的。所讨论的规则允许我们对于任何表达式Δ、Γ和Θ，从以下推导：

![judgement conditional term elta term amma](https://plato.stanford.edu/entries/frege-logic/sec-3-2-D1.svg)

![judgement conditional term amma term heta](https://plato.stanford.edu/entries/frege-logic/sec-3-2-D2.svg)

 至：

![judgement conditional term elta term heta](https://plato.stanford.edu/entries/frege-logic/sec-3-2-D3.svg)

但是，如果像概念书的逻辑中那样，罗马字母涉及公式：

![judgement conditional term x](https://plato.stanford.edu/entries/frege-logic/sec-3-2-D4.svg)

![judgement conditional term x](https://plato.stanford.edu/entries/frege-logic/sec-3-2-D5.svg)

仅仅是缩写形式：

![judgement all gothic a conditional term gothic a ](https://plato.stanford.edu/entries/frege-logic/sec-3-2-D6.svg)

![judgement all gothic a conditional term gothic a ](https://plato.stanford.edu/entries/frege-logic/sec-3-2-D7.svg)

那么严格来说，我们就没有这个规则的前提实例，因此无法得出期望的（也是正确的）结论。因此，我们需要对罗马字母的普遍性设备有一种替代理解。

弗雷格建议，当我们执行假设三段论的相关实例时，我们暂时扩展罗马字母“x”的范围，使其包括前提和结论。因此，罗马字母“x”在所有三个 Grundgesetze 命题中“指示”相同的对象（无论这个对象是什么），我们可以应用假设三段论。

##### 3.2.1.2 高阶量化和罗马字母

弗雷格还允许通过罗马字母的普遍性设备来表达二阶和三阶量化。因此，如果“Δ”是一个对象的名称，那么：

![judgement felta](https://plato.stanford.edu/entries/frege-logic/sec-3-2-E1.svg)

如果且仅如果对于任何一级函数 f，将 f 应用于“Δ”所指代的对象的结果为 True，则是一个正确的 Grundgesetze 命题。同样，如果“Φ(ζ)”是一个一级函数名称，则：

![judgement Metahieta](https://plato.stanford.edu/entries/frege-logic/sec-3-2-E2.svg)

如果且仅如果对于每个二级函数 F，将 F 应用于“Φ(ξ)”所指代的函数的结果为 True（1893/1903: §25）。虽然弗雷格确实通过罗马普遍性设备提供了对第三阶量化的处理（与他对凹度的处理不同，后者仅限于一阶和二阶），但他没有提供任何关于四阶或更高阶量化的符号表示。

##### 3.2.1.3 罗马字母的工作原理

我们现在转向第二个问题：罗马字母设备到底是如何工作的？我们如何理解弗雷格关于涉及罗马字母普遍性设备的表达式“指示”而不是“命名”真值的想法，以及我们如何理解这样一个观点，即它们的范围必须包含它们所在的判断的全部内容（除了可能的判断符号），但可以扩展到一次包含多个公式的情况？正确解答这些问题的方法是一个相当有争议的问题。兰迪尼（Landini）认为，弗雷格在暗示变量赋值的概念（Landini 2012），这个概念直到塔斯基（Tarski）（1933）才得到充分发展；而赫克（Heck）则认为，弗雷格打算用辅助名称的替代方式来理解罗马字母（即，“额外”的名称不包括在对象语言级别的词汇中），例如，形式为的表达式：

![judgement hix](https://plato.stanford.edu/entries/frege-logic/sec-3-2-F.svg)

（或多个这样的表达式在推理中一起使用）当且仅当“Φ(n)”是“真”的名称时，无论辅助名称“n”表示什么对象（Heck 2012）。关于量词的这种处理方式的现代版本，请参见梅茨（Mates）（1972）。本文不打算解决这场辩论。

#### 3.2.2 值域运算符

在《Grundgesetze》中最臭名昭著的原始概念是弗雷格的值域运算符，因为它在罗素悖论和弗雷格逻辑主义项目的崩溃中起着核心作用。值域符号，或“平滑呼吸”，命名了一个从一级函数到对象的二级函数。对于任何一级函数名称“Φ(ξ)”，通过一元二级“平滑呼吸”运算符应用于“Φ(ξ)”所命名的对象：

ἐ(Φ(ε))

就是由“Φ(ξ)”所命名的函数的值域。与《Grundgesetze》逻辑中的其他原始函数符号不同，弗雷格没有对值域运算符所选定的函数给出明确的定义（出于很好的原因，因为由于康托尔的定理，不存在这样的函数！），而是用《基本法则 V》的非正式版本来阐明这个概念：

> 我使用这些词语：
>
>> “函数 Φ(ξ) 的值域与函数 Ψ(ξ) 相同”
>>
>
> 总是与这些词语指代同一事物
>
>> “函数 Φ(ξ) 和 Ψ(ξ) 对于相同的参数总是具有相同的值”。
>>
>
> (1893/1903: §3)

值域运算符最重要的应用之一是其对一级概念的应用，由此产生的对象，弗雷格称之为外延，可以从现代的角度来看，粗略地说，类似于这些概念的特征函数的图。外延在逻辑上表现得非常类似于（天真的）集合，但是敏感的（或者仅仅是明智的）读者应该谨慎地将我们对于格伦特格策外延的现代观点过分归因于集合。关于弗雷格关于外延性质的思想发展的深入研究，请参阅伯奇（1984）。

菲格尔确定了另一类可以使用值域运算符构造的对象子类，这些对象并不对应于现代数学中广泛使用的任何内容：双值域。对于任意二元一级函数名“Φ(ξ,ζ)”，我们通过将值域运算符应用于“Φ(ξ,ζ)”（将由“ξ”标记的参数位置绑定），得到一元一级函数名“ἐ(Φ(ε,ζ))”，从而形成了（由函数命名的）“Φ(ξ,ζ)”的双值域（1893/1903: §36）。

对于双值域的需求为 Grundgesetze 中的高阶量词通常而非仅仅概念和关系提供了一个非常实际的解释。给定一个二元关系符号“Φ(ζ,ξ)”，第一步的结果——即“ἐ(Φ(ε,ξ))”的指称——不是一个概念，而是一个将对象映射到值域的函数。因此，值域的引入要求菲格尔不仅接受概念和关系，而且更普遍地接受函数进入他的高阶本体论——有关进一步讨论，请参见 Landini (2012: ch. 4)。

菲格尔仅为一级函数定义了值域。当然，他本可以扩展这个概念，以直接获得二级和三级函数的对象级类比。但这是没有必要的，因为我们可以通过重复应用值域运算符于一级函数，将二级和更高级函数“归约”为一级函数。例如，给定一个将一级函数映射到真值的二级概念名“Fβ”，我们可以通过首先构造该概念的名称来构造一个对象级类比，该概念对一个对象成立当且仅当该对象是由概念“Fβ”命名的第一级函数的值域映射到 True：

![not all gothic f conditional term i = ἐfarepsilon not term athcalFetafeta](https://plato.stanford.edu/entries/frege-logic/sec-3-2-G.svg)

“Fβ”所指称的第二层概念的对象层对应物，便是这一第一层概念的值域：

![ἀ not all gothic f conditional term lpha= ἐfarepsilon not term athcalFetafeta](https://plato.stanford.edu/entries/frege-logic/sec-3-2-H.svg)

这种操作是相当通用的。每当在 Grundgesetze 中需要第二或第三层函数的对象层对应物时，都可以使用这个技巧来构造这样的对象。

#### 3.2.3 确定描述的反斜杠运算符

《Grundgesetze》逻辑的最终原始符号是反斜杠。反斜杠是一个一元的一级函数，将对象映射到对象：

> […] 通过引入函数，我们可以帮助自己：
>
> ∖ξ
>
> 有规范以区分两种情况：
>
> 1. 如果对于参数存在一个对象 Δ，使得 ἐ(Δ=ε) 是该参数，那么函数 ∖ξ 的值将是 Δ 本身。
> 2. 如果对于参数不存在对象 Δ，使得 ἐ(Δ=ε) 是该参数，那么参数本身将是函数 ∖ξ 的值。
>
> (1893/1903: §11)

术语方面需要一点帮助：对于任何专有名词“Δ”，让我们称呼由“ἐ(Δ=ε)”命名的对象为“Δ”的单例扩展。然后：

1. 如果“∖Γ”与“Δ”是共指的，那么如果“Γ”命名了由“Δ”命名的对象的单例扩展
2. "∖Γ"与"Γ"是互指的。

更简单地说，反斜杠是一个"单例剥离"的工具。

弗雷格将反斜杠用作一种确定描述运算符。在现代处理中，确定描述运算符"ι"附加到谓词上，对于一个谓词"Φ(x)"，"ιx(Φ(x))"表示满足谓词"Φ(ξ)"的唯一对象（如果存在）。然而，弗雷格根据通过连续应用值域运算符来降低层级的策略，将他的确定描述运算符定义为应用于概念的值域，而不是概念本身。因此，对于一个概念名称"Φ(ξ)"，"∖Γ"表示被该概念命名的对象，该对象通过概念"Φ(ξ)"映射为 True（如果存在），否则表示由"ἐ(Φ(ε))"命名的对象。

### 3.3《Grundgesetze》的公理

《概念表达》的逻辑与《Grundgesetze》的逻辑之间一个显著的区别在于前者依赖于许多公理，但推理规则很少，而后者依赖于更少的公理但更多的规则。《Grundgesetze》的逻辑包含仅仅六条公理，现在称为基本定律，其中包括处理值域和反斜杠运算符所需的全新公理。然而，这并不仅仅是重新组织。相反，在《Grundgesetze》的逻辑中，弗雷格用更加灵活、因此在应用中更加强大的相应规则替换了《概念表达》中发现的一些公理。对于 Grundgesetze 时代的弗雷格认为基本定律的特征（与从基本定律和推理规则推导出的任何其他逻辑真理相对）及其与证明的关系的深入讨论，请参见 Pedriali（2019）。

#### 3.3.1 基本定律 I

弗雷格的基本定律 I 看起来很熟悉，因为至少在句法上，它只是 Begriffsschrift 逻辑中的公理 1：

![judgement conditional term a term conditional term b term a](https://plato.stanford.edu/entries/frege-logic/axiom1.svg)

基本定律 I（1893/1903 年：§18）

在《Grundgesetze》中，弗雷格如下证明了基本定律 I：

> 现在我们将为罗马字母制定一些一般规律，以便我们以后会用到。根据第 12 条：
>
> ![judgement conditional term amma term conditional term elta term amma](https://plato.stanford.edu/entries/frege-logic/sec-3-3-A1.svg)
>
> 只有在Γ和Δ为真而Γ不为真时，才会出现假。这是不可能的；因此：
>
> ![judgement conditional term a term conditional term b term a](https://plato.stanford.edu/entries/frege-logic/axiom1.svg)
>
> （1893/1903：第 18 条）

鉴于上述讨论（以及弗雷格在基本定律的证明中谨慎使用“Γ不是真”而不是“Γ是假”），当由“Γ”和“Δ”命名的对象不是真值时，这个表达式作为真的名称并不令人意外。鼓励读者验证以下例子：

![conditional term 2 term conditional term 3 term 2](https://plato.stanford.edu/entries/frege-logic/sec-3-3-A2.svg)

是真的名称。弗雷格指出：

![judgement conditional term a term a](https://plato.stanford.edu/entries/frege-logic/sec-3-3-A3.svg)

是基本定律 I 的特殊实例，通过将“b”替换为“a”，然后融合相等的子组件得到（1893/1903: §18）。由于其明显的实用性，弗雷格将其列为基本定律 I 的第二个版本，我们可以将其作为原始公理而无需明确推导。

#### 3.3.2 基本法 II

基本法 II 也看起来很熟悉，因为它是 Begriffsschrift 逻辑中公理 9 的 Grundgesetze 类比。现在弗雷格对对象、一级函数、二级函数和三级函数的层次结构有了清晰的概念，并且他有了分别针对这个层次结构内不同“级别”的实体的量词，他小心地制定了所讨论的基本法的“一阶”版本和“二阶”版本。第一个版本，基本法 IIa 如下：

![judgement conditional all gothic a term fgothic a term fa](https://plato.stanford.edu/entries/frege-logic/sec-3-3-B1.svg)

基本法 IIa (1893/1903: §20)

弗雷格将这个基本定律描述为表达了“所有对象所具有的性质，也同样适用于任意对象”的思想（1893/1903: §20）。基本定律 IIa 与 Grundgesetze 中使用的推广形式的假言三段论（下文讨论）结合起来，提供了一种从使用凹凸性所表述的一般性推断出罗马字母的一般性的方法。给定一个形式为“  Φ(a)”的凹凸性命题，我们可以调用基本定律 IIa 的一个实例：

![judgement conditional all gothic a term higothic a term hia](https://plato.stanford.edu/entries/frege-logic/sec-3-3-B3.svg)

并结合这些，使用假言三段论，得出“  Φ(a)”的结论。

基本定律 II 的二阶版本被称为基本定律 IIb：

![judgement conditional all gothic f term Metagothic feta term Metafeta](https://plato.stanford.edu/entries/frege-logic/sec-3-3-C1.svg)

基本法 IIb（1893/1903 年：§25）

请注意，子组件中的“f”和超级组件中的“f”的出现是不同的变量（前者是德语字母，后者是罗马字母）。

#### 3.3.3 基本法 III

基本法 III，即掌握平等符号的 Grundgesetze 原则，乍一看似乎是相同物的不可辨识性的轻微变体：

![judgement conditional term ga=b term gall gothic f term conditional gothic fb term gothic fa](https://plato.stanford.edu/entries/frege-logic/sec-3-3-D1.svg)

基本法 III（1893/1903 年：§20）

如果我们用横线替换罗马字母“g”，并应用横线的融合，我们确实会得到 Grundgesetze 版本的相同物的不可辨识性：

![judgement conditional term a=b all gothic f term conditional term gothic f b term gothic fa](https://plato.stanford.edu/entries/frege-logic/sec-3-3-D2.svg)

基本法 III 比这个要强大得多。

但是，基本法 III 规定，对于任何一元一级函数名称“Φ(ξ)”和任何适当的名称“Δ”和“Γ”，命题“Φ(ξ)”命名的函数应用到“Δ=Γ”命名的真值时不成立，而将函数命名为“Φ(ξ)”的应用到真值命名为：

![all gothic f conditional term gothic famma term gothic felta](https://plato.stanford.edu/entries/frege-logic/sec-3-3-D3.svg)

不是真的。因此，这个公理相当于声称一个人总是可以在命题的任何地方（即作为任何函数Φ(ξ)的参数）用相应的全称量化表达式替换相等关系。

否定符号当然是可以替换“g”的功能之一。因此，以下是基本法则 III 的替代实例：

![judgement conditional not term a=b not term all gothic f conditional term gothic fb term gothic fa](https://plato.stanford.edu/entries/frege-logic/sec-3-3-D4.svg)

虽然我们尚未讨论所需的广义对置规则，但这等同于：

![judgement conditional all gothic f term conditional term gothic fb term gothic fa term a=b](https://plato.stanford.edu/entries/frege-logic/sec-3-3-D5.svg)

因此，基本法则 III 暗示了不可辨识者的恒等性的 Grundgesetze 类比。因此，弗雷格在 Grundgesetze 的逻辑中不需要 Begriffsschrift 的公理 8 的类比，因为他证明：

![judgement a = a](https://plato.stanford.edu/entries/frege-logic/sec-3-3-D6.svg)

 首先证明：

![judgement all gothic f conditional term gothic fa term gothic fa](https://plato.stanford.edu/entries/frege-logic/sec-3-3-D7.svg)

然后应用基本法则 III（以及他的 Ponens 推理的 Grundgesetze 版本）。 他将这一自恒原则称为 IIIe（1893/1903: §50）。

#### 3.3.4 基本法则 IV

基本法第四条是：

![judgement conditional not term circumstance a = note b term circumstance a = circumstance b](https://plato.stanford.edu/entries/frege-logic/sec-3-3-E1.svg)

基本法第四条（1893/1903: §18）

这个原则可能只是一个经典命题逻辑中熟悉的 Grundgesetze 原理的类比

(¬(Δ↔¬Γ))→(Δ↔Γ)

然而，通常情况下，我们应该小心，不要将这个公理仅仅解读为适用于真值名称。相反，基本定律 IV 的实例无论用什么名称替换“a”和“b”，都指代真。因此：

![judgement conditional not term circumstance 2 = not 3 term circumstance 2 = circumstance 3](https://plato.stanford.edu/entries/frege-logic/sec-3-3-E2.svg)

是真的名称（请记住，“  2”和“  3”都是假的名称，“  3”是真的名称，因此这个基本定律 IV 的实例的超部分和子部分都是真的名称）。

与大多数 Grundgesetze 逻辑的公理和规则（不涉及值范围的）不同，基本法第四条在 Begriffsschrift 逻辑中没有直接的类似物（但请参阅下面关于公理 5 和 6 的讨论），其目的似乎部分是为了在参数不是真值的情况下强制执行水平和否定的预期解释。然而，鉴于基本法第四条中所有罗马字母的出现都以水平线为前缀，这一原则的实际意义与经典类似：对于任意两个真值，如果第一个不等于第二个的否定，则它们本身相等。

鉴于基本法第四条实际上强制 Grundgesetze 逻辑为双值逻辑，我们可能会想知道在 Begriffsschrift 逻辑中扮演这一角色的公理发生了什么变化——即公理 5 和公理 6。Grundgesetze 中 Axiom 5 和 Axiom 6 的类比在 Grundgesetze 的推导中很早就被证明，但是，与基本法第二条的情况一样，Frege 实际上确定并证明了更一般的版本。相关的定理如下：

![judgement conditional term fnot not a term fcircumstance a](https://plato.stanford.edu/entries/frege-logic/sec-3-3-F1a.svg)

IVc

![judgement conditional term fcircumstance a term not not a](https://plato.stanford.edu/entries/frege-logic/sec-3-3-F1b.svg)

IVd

他分别称为 IVc 和 IVd（1893/1903: §51）。

#### 3.3.5 基本法 V

弗雷格引入如今臭名昭著的基本定律 V 时，伴随着的庆祝声却相当少，这有些令人惊讶。弗雷格仅仅注意到：

> […] 一个值域的相等性总是可以转化为相等性的一般性，反之亦然。（1893/1903: §20）

然后陈述了这条公理：

![judgement ἐfarepsilon = ἀglpha = all gothic a term fgothic a = ggothic a](https://plato.stanford.edu/entries/frege-logic/sec-3-3-G1.svg)

基本法第五条（1893/1903: §20）

《基本法第五条》的 Grundgesetze 表述比现代高阶逻辑中的众所周知的“翻译”要更加普遍，例如：

∀X∀Y（§（X）=§（Y）↔∀z（X（z）↔Y（z）））

其中量词范围涵盖概念或属性。《基本法则 V》的 Grundgesetze 表述不仅意味着每个概念都有对应的外延，而且还意味着任何函数（无论是概念还是其他）都有一个值域。因此，《基本法则 V》的 Grundgesetze 表述也捕捉到了类似于：

∀f∀g(§(f)=§(g)↔∀z(f(z)=g(z)))

由于在现代对高阶逻辑的处理中，概念与函数是不同的类型，而不是像 Grundgesetze 中那样是函数类的子类，所以弗雷格的《基本法则 V》严格来说与现代这些表述都不等价。

#### 3.3.6 基本法六

《格伦德格塞》的最终公理，基本法六，规定了反斜杠的行为：

![judgement a =backslash ἐa = arepsilon](https://plato.stanford.edu/entries/frege-logic/sec-3-3-H1.svg)

基本法六（1893/1903 年：第 18 条）

这个公理明确了之前讨论的反斜杠运算符的非正式定义的一部分。如果“Γ”是由“Δ”命名的对象的单例扩展的名称，那么将反斜杠应用于“Γ”的结果与“Δ”命名的相同对象。但是，基本定律 VI 并没有告诉我们当我们将反斜杠应用于不是单例扩展名称的名称时会得到什么结果。我们可能会想知道为什么弗雷格没有添加第二个控制这种情况的公理，例如：

![judgement conditional all gothic a not term b = ἐgothic a = arepsilon term backslash b = b](https://plato.stanford.edu/entries/frege-logic/sec-3-3-H2.svg)

从《Grundgesetze》的演绎系统中缺乏这个原则，可以深入了解弗雷格的方法论。争议的问题是，弗雷格是否认为他的逻辑是完备的，即他是否认为它能够证明《Grundgesetze》语言中可表达的每个逻辑真理。迈克尔·达梅特提出：

> 毫无疑问，弗雷格会声称他的公理连同其中未体现的附加非正式规定，构成了一个完备的理论：将他归因于对高阶理论不完备的认识是一种时代错误。（1981 年：423）

Dummett 心中所指的规定是在 Grundgesetze 第 10 节的“排列论证”结束时，将真值与其单元素扩展进行等同。然而，基本法则 VI 缺乏第二个实例揭示了一点，那就是弗雷格对 Grundgesetze 逻辑的不完备性（如果它不是不一致的）是非常清楚的，因为他未包含一个在预期解释下显然为真的原则。将他归因于对他的逻辑中实际包含的逻辑原则的明显缺陷的认识（考虑到他提供的关于他逻辑预期解释的非正式语义阐释）与声称他意识到二阶逻辑在原则上的不完备性是完全不同的，当然。

有趣的是，Heck 指出（2012 年：第 2 章），弗雷格后来在 Grundgesetze 中声称一个命题“似乎是不可证明的”（Frege 1893/1903：§114）。弗雷格小心地声称只有这个原则是不可证明的，因此他不会声称它是真的（即，他不会将其写为带有“  ”的判断），但他也不声称它是假的。Heck 认为，弗雷格在这一点上意识到了他的系统（或者至少是与§114 相关的推导的一致子系统）的潜在不完备性。阻止弗雷格证明所讨论的命题的原因，以及允许戴德金德在他自己的算术处理中证明类似原则的原因（Dedekind 1888），是后者在推导中使用了选择公理的非正式版本，而弗雷格在 Grundgesetze 的逻辑中没有包含任何形式的选择公理（Heck 2012 年：第 2 章）。这是一个重要的观察，但为了得出结论，我们并不需要如此复杂的东西，即弗雷格很可能认为他的系统是不完备的。

弗雷格在 Grundgesetze 的形式系统中推导算术时，并不需要涵盖反斜杠应用于非单元素扩展的公理（我们可以假设他在推导实数和复数分析时也不需要它）。因此，他不需要将其添加到他的基本法则库存中。弗雷格的形式系统只需要包括那些对他的算术和分析重建所需的逻辑原则-他的项目并不需要在现代意义上具有证明论上的完备性，因此我们不应该对他所制定的逻辑显然是不完备的（如果基本法则 V 没有使其不一致，从而变得平凡完备）感到惊讶。

### 3.4《格物法则》的推理规则

尽管经常有人声称弗雷格的逻辑笨重且难以使用，但弗雷格制定的推理规则却表明相反的情况：由此产生的系统，充分利用了弗雷格对条件句的系统歧义解读，从许多方面来看，比现代演绎系统更为强大和更为优雅。

首先，我们提醒读者已经讨论过的三条推理规则，这些规则可以在《格物法则》的逻辑推导中无需任何评论或标签地应用。这些规则包括子组件的排列、相同子组件的融合以及水平融合。除了这些规则，弗雷格还引入了六条推理规则。

#### 3.4.1 广义摩德斯·波奈斯

第一个是广义摩德斯·波奈斯（“广义摩德斯·波奈斯”这个术语不是弗雷格提出的，他称这种推理为“推断(a)”），弗雷格如此描述：

> 如果一个命题的一个子组成部分与第二个命题仅在于缺少判断符号上有所不同，那么可以推断出一个命题，该命题通过抑制该子组成部分从第一个命题得出。（1893/1903: §14）

简单来说，如果一个人已经证明了 Grundgesetze 条件，并且还证明了该条件的一个子组成部分，那么可以推断出从该条件中删除该子组成部分的结果。假设我们已经证明了 Grundgesetze 命题：

![judgement conditional term elta term conditional term amma term heta](https://plato.stanford.edu/entries/frege-logic/sec-3-3-I1.svg)

那么，如果我们还有“  Δ”，那么我们可以得出结论：

![judgement conditional term amma term heta](https://plato.stanford.edu/entries/frege-logic/sec-3-3-I2.svg)

在这个应用程序中，我们解析了相关条件，使得“Δ”是相关的子组成部分，并且：

![judgement conditional term amma term heta](https://plato.stanford.edu/entries/frege-logic/sec-3-3-I2.svg)

超组件。另一方面，如果我们有“  Γ”，那么我们将得出以下结论：

![judgement conditional term elta term heta](https://plato.stanford.edu/entries/frege-logic/sec-3-3-I4.svg)

将“Δ”和“Γ”都视为子组件，“Θ”作为超组件。广义准则推理的应用由实线水平线表示。这是过渡符号的第一个实例（1893/1903: §14）。

这个规则是对在 Begriffsschrift 中找到的简单版本的准则推理的非常强大的概括，或者是包含在使用线性符号的现代演绎系统中。考虑一下从以下步骤过渡所需的步骤数量：

A1→(A2→(A3→(A4→(A5→(A6→(A7→(A8→B)))))))

 并且 A8 到：

A1→(A2→(A3→(A4→(A5→(A6→(A7→B)))))I hope this helps! If you need further assistance, feel free to ask

在典型的自然演绎系统中。在《Grundgesetze》的逻辑中，弗雷格可以一步完成类似的推导。关于弗雷格推理规则的威力，类似的评论也适用于利用《Grundgesetze》公式可以以不止一种方式解析为子部分和超部分的其他规则（也就是说，对于广义假言三段论、广义反言三段论和广义二难推理）。

弗雷格允许对广义假言三段论的广义形式进行多次同时应用。因此，如果我们已经证明：

![judgement conditional term elta term conditional term amma term heta](https://plato.stanford.edu/entries/frege-logic/sec-3-3-I1.svg)

然后我们同时证明“  Δ”和“  Γ”，我们可以同时消去两个子部分，用双横线标记过渡（1893/1903: §14）。

#### 3.4.2 广义假设三段论

接下来的推理规则是广义假设三段论（这是一个新颖的术语——弗雷格称这个规则为“推断（b）”）：

> 如果同样的符号组合在一个命题中出现为超部分，而在另一个命题中出现为次部分，那么可以推断出一个命题，在其中后者的超部分作为超部分，两者的所有次部分（除了提到的那个）作为次部分。然而，两者中出现的次部分只需写一次。（1893/1903: §15）

这是一种概括性更强、更强大的常见规则假设三段论的版本，它利用了子组件的“相等”状态：给定一个 Grundgesetze 命题，以及一个命题，其超组件是第一个命题的子组件，我们可以推断出由用第二个命题的子组件替换第一个命题中相关子组件得到的命题。例如，如果我们已经推导出：

![judgement conditional term elta term conditional term amma term heta](https://plato.stanford.edu/entries/frege-logic/sec-3-3-I1.svg)

 和

![judgement conditional term amma term conditional term igma term elta](https://plato.stanford.edu/entries/frege-logic/sec-3-3-M.svg)

那么我们可以将它们组合起来得到：

![judgement conditional term igma term conditional term amma term heta](https://plato.stanford.edu/entries/frege-logic/sec-3-3-N.svg)

请注意，我们将两个“Γ”的出现合并为一个。广义假设三段论的应用由一种新的过渡符号表示，即虚线水平线“—– – –”，而多个同时应用广义假设三段论的情况则由双虚线水平线“= = = =”表示。广义假设三段论是从 Begriffsschrift 逻辑的公理 2 中衍生出的一种更强大的基于规则的形式。

#### 3.4.3 Generalized Contraposition

The third rule of inference is *Generalized Contraposition* (Frege calls this rule merely “contraposition”).

> 只要同时颠倒每个子组件的真值，就可以对子组件和超组件进行置换。（1893/1903: §15）

广义对偶允许我们将 Grundgesetze 命题的超组件与其中的任何子组件进行“切换”，前提是“同时颠倒每个子组件的真值”。回想一下，弗雷格将否定描述为“一种通过它可以将每个真值转化为其相反的符号”（1893/1903: §6），这相当于在问题中的每个公式中添加一个否定或者移除一个否定（如果至少有一个否定存在）。因此，如果我们已经推导出：

![judgement conditional term elta term conditional not term amma term heta](https://plato.stanford.edu/entries/frege-logic/sec-3-3-O1.svg)

那么广义对偶将允许我们获得以下任何一个：

![judgement conditional not term heta term conditional not term amma not term elta](https://plato.stanford.edu/entries/frege-logic/sec-3-3-O2.svg)

 （a）

![judgement conditional term elta term conditional not term heta not not term amma](https://plato.stanford.edu/entries/frege-logic/sec-3-3-O3.svg)

 （b）

![judgement conditional term elta term conditional not term heta term amma](https://plato.stanford.edu/entries/frege-logic/sec-3-3-O4.svg)

 （c）

![judgement conditional not term conditional not term amma term heta not term elta](https://plato.stanford.edu/entries/frege-logic/sec-3-3-O5.svg)

(d)

广义对置的应用使用转换符号“×”表示。广义对置是概念书逻辑中公理 4 的更强大的基于规则的版本。

#### 3.4.4 广义困境

推理的第四条规则是广义二难推理（弗雷格称之为“推断(c)”）：

> 如果两个命题在它们的超部分相符，而一个命题的一个子部分与另一个命题的一个子部分仅仅相差一个前置否定符号，那么我们可以推断出一个命题，其中共同的超部分作为超部分，以及两个命题的所有子部分除了这两个被提到的之外都作为子部分。在这个过程中，出现在两个命题中的子部分只需要写一次。（1893/1903: §16）

因此，如果我们已经推导出形式为 Grundgesetze 的命题：

![judgement conditional term elta term conditional term amma term heta](https://plato.stanford.edu/entries/frege-logic/sec-3-3-I1.svg)

 (a) (一)

![judgement conditional term igma term conditional not term elta term heta](https://plato.stanford.edu/entries/frege-logic/sec-3-3-P.svg)

 (b) (二)

 we can infer: (我们可以推断：)

![judgement conditional term amma term conditional term Sigma term heta](https://plato.stanford.edu/entries/frege-logic/sec-3-3-P1.svg)

广义困境由点划线“⋅−⋅−⋅−⋅”表示。

广义困境是格伦德格策的逻辑中唯一的官方公理或规则，除了那些明确涉及值域的规则之外，在这些规则中，它在概念书的逻辑中没有一些明显的（即使是更弱的）类似物（假设我们将公理 5 和 6 至少视为基本法则 IV 的非常松散的类似物—见上文），尽管在早期的系统中当然可以推导出这条规则的类似物（用当代的术语来说）。在概念书的前言中指出，弗雷格写道：

> 这并不排除，以后，从几个判断到一个新判断的转变，这些转变只能通过这种单一的推理方式间接地实现，为了缩写起见，可以转换为直接的方式。实际上，这对于以后的应用可能是明智的。这样，就会产生进一步的推理方式。（1879a：前言）

然而，在《Grundgesetze》的序言中，弗雷格注意到了一种相当显著的策略转变：

> 为了获得更大的灵活性并避免过长，我允许自己暗中使用子组件（条件）的排列组合和相等子组件的融合，并没有将推理和结果的模式减少到最低程度。熟悉我的小书《Begriffsschrift》的人会从中了解到，即使在这里也可以满足最严格的要求，但这也将导致内容的相当增加。（1893/1903：序言）

很可能弗雷格在这里特别指的是广义困境。

#### 3.4.5 凹性介绍

弗雷格的下一个推理规则，我们将其称为凹性引入（在 Begriffsschrift 逻辑中讨论类似规则后），控制着 Grundgesetze 中表达普遍性的两种设备之间的相互作用，即罗马字母普遍性设备和凹性：

> 可以将罗马字母替换为同一个德语字母，只要它出现在命题中。同时，后者必须放置在一个凹性前面的超组件之上，该超组件中罗马字母不出现。如果在这个超组件中包含了一个德语字母的范围，并且罗马字母出现在这个范围内，则为后者引入的德语字母必须与前者不同。（1893/1903: §17）

从机械的角度来看，这与《概念书》逻辑中所给出的凹性引入版本相同。用于标记凹性引入应用的过渡符号是“⏝”。

#### 3.4.6 罗马字母消除

虽然凹性引入允许我们从用罗马字母表示的一般性移动到用凹性表示的一般性，而基本定律 II（结合了广义摩德斯邦纳斯）允许我们从用凹性表示的一般性移动到用罗马字母表示的概括，但到目前为止，我们还没有办法从表达一般性的命题（无论哪种类型）移动到特定实例（《概念书》的逻辑中不包含名称，因此这种缺乏在早期系统中并不是一个缺点）。弗雷格通过引入我们将称之为罗马字母消除规则（弗雷格称此规则为“引用命题”），来纠正这一点，他描述如下：

> 当引用一个命题时，我们可以通过将命题中的罗马字母统一替换为相同的专有名词或相同的罗马对象标记来进行简单推理。
>
> 同样地，我们可以将命题中所有出现的罗马函数字母“f”、“g”、“h”、“F”、“G”、“H”替换为具有一个或两个参数的一级函数的相同名称或罗马标记，具体取决于罗马字母是否表示具有一个或两个参数的函数。
>
> 当我们引用法则（IIb）时，我们可以将“Mβ”的两个出现都替换为具有第二类一元参数的二级函数的相同名称或罗马标记。（1893/1903: §48）

罗马字母消除允许两种应用。第一种，也是最简单的，涉及统一地用适当的名称替换特定的罗马字母。但是，罗马字母消除规则还允许我们用罗马对象标记替换单个罗马字母。因此，使用这个规则，我们还可以通过用罗马对象标记“  y”替换罗马字母“x”从“  Φ(x)”得到“  Φ(  y)”。同样，给定形式为“  f(Δ)”的 Grundgesetze 命题，我们可以推断出“  Δ”（通过用函数名称“  ”替换罗马字母“f”）或“  g(  Δ)”（通过用罗马函数标记“  g  ”替换罗马字母“f”）。罗马字母消除规则最显著和最重要的应用之一是在引入公理的“实例”时，因为弗雷格不要求我们明确地写出公理。相反，我们可以引用应用罗马字母消除规则（一次或多次）得到的任何公理的“实例”。

对于这种推理，没有转换符号，因为它是在先前推导的公式被用作上述任一规则的前提的应用时应用的。

这结束了我们对弗雷格的《概念书》和《基本法则》中发现的逻辑系统的调查。但这远非是弗雷格在逻辑上的思考的结束。尽管弗雷格最终放弃了他的逻辑主义项目，以及他的逻辑系统中导致矛盾（Basic Laws V 和 VI，以及价值范围的概念）的部分，鉴于罗素悖论，他继续多年教授逻辑课程。对弗雷格后来的观点感兴趣的读者应查阅附加的文章《悖论之后的弗雷格逻辑》。
## Bibliography

### Frege’s Writings

* 1879a, *Begriffsschrift, eine der arithmetischen nachgebildete Formelsprache des reinen Denkens*, Halle a. S.: Louis Nebert; all quotes from this work are from the translation in T.W. Bynum (ed. and trans.), *Frege: Conceptual Notation and Related Articles*, Oxford: Clarendon, 1972.
* 1879b, “Anwendungen der Begriffsschrift”, *Sitzungsberichte der Jenaische Zeitschrift für Medicin und Naturwissenschaft*, 13: 29–33.
* 1880/1881, “Booles rechnende Logik und die Begriffsschrift”, unpublished manuscript. Translated as “Boole’s Logical Calculus and the Concept Script”, in LW79: 9–46.
* 1881, “Booles logische Formelsprache und meine Begriffsschrift”, unpublished manuscript. Translated as “Boole’s Logical Formula Language and my Concept-script”, in LW79: 47–52.
* 1882a, “Über die wissenschaftliche Berechtigung einer Begriffsschrift”, *Zeitschrift für Philosophie und philosophische Kritik*, 81: 48–56. Translated as “On the Scientific Justification of a Conceptual Notation” in By72: 83–89.
* 1882b, “Über den Zweck der Begriffsschrift”, Lecture at the 27 January 1882 meeting of the Jenaischen Gesellschaft für Medizin und Naturwissenschaft. Translated as “On the Aim of the ‘Conceptual Notation’” in By72: 90–100.
* 1884, *Die Grundlagen der Arithmetik: eine logisch mathematische Untersuchung über den Begriff der Zahl*, Breslau: W. Koebner. Translated as *The Foundations of Arithmetic: A Logico-Mathematical Enquiry into the Concept of Number*, J. L. Austin (trans.), second revised edition, Oxford: Blackwell, 1953.
* 1891, “Funktion und Begriff” (“Function and Concept”), *Vortrag, gehalten in der Sitzung vom 9. Januar 1891 der Jenaischen Gesellschaft für Medizin und Naturwissenschaft*, Jena: Hermann Pohle.
* 1892a, “Über Sinn und Bedeutung” (“On Sense and Reference”), *Zeitschrift für Philosophie und philosophische Kritik*, 100: 25–50.
* 1892b, “Über Begriff und Gegenstand”’ (“Concept and Object”), *Vierteljahresschrift für wissenschaftliche Philosophie*, 16: 192–205.
* 1893/1903, *Grundgesetze der Arithmetik: begriffsschriftlich abgeleitet*, Jena: Verlag Hermann Pohle, volume 1 in 1893 and volume 2 in 1903. Translated in ER13.
* 1897, “Über die Begriffsschrift des Herrn Peano und meine eigene”, *Berichte über die Verhandlungen der Königlich Sächsischen Gesellschaft der Wissenschaften zu Leipzig: Mathematisch-physische Klasse*, 48: 361–378. Translated as “On Mr. Peano’s Conceptual Notation and My Own” in BD84: 234–248.

### Translations

* [Be97] *The Frege Reader*, Michael Beaney (ed.), Oxford ; Malden, MA: Blackwell Publishers, 1997.
* [BD84] *Collected Papers on Mathematics, Logic, and Philosophy*, Brian McGuinness (ed.), Oxford/New York: B. Blackwell, 1984.
* [By72] *Conceptual Notation, and Related Articles*, Terrell Ward Bynum (ed./tran.), Oxford: Clarendon Press, 1972.
* [ER13] *Gottlob Frege: Basic Laws of Arithmetic: Derived Using Concept-Script. Volumes I & II*, Philip A. Ebert and Marcus Rossberg (eds/trans), Oxford: Oxford University Press, 2013.
* [LW79] *Posthumous Writings*, Hans Hermes, Friedrich Kambartel, and Friedrich Kaulbach (eds.). Peter Long and Roger White (trans.), Chicago: University of Chicago Press, 1979.
* [RA04] *Frege’s Lectures on Logic: Carnap’s Student Notes, 1910-1914*, Gottfried Gabriel (ed.). Erich H. Reck and Steve Awodey (trans/eds), Chicago, IL: Open Court, 2004.
* Van Heijenoort, Jean (ed.), 1967a, *From Frege to Gödel: A Source Book in Mathematical Logic, 1879–1931*, (Source Books in the History of the Sciences), Cambridge, MA: Harvard University Press.

### Secondary Literature

* Beaney, Michael, 1997, “Introduction”, in Be97, 1–46.
* ––– (ed.), 2013, *The Oxford Handbook of the History of Analytic Philosophy*, Oxford: Oxford University Press. doi:10.1093/oxfordhb/9780199238842.001.0001
* Berg, Eric D. and Roy T. Cook, 2017, “The Propositional Logic of Frege’s *Grundgesetze*: Semantics and Expressiveness”, *Journal for the History of Analytical Philosophy*, 5: article 6. doi:10.15173/jhap.v5i6.2920
* Boolos, George, 1994, “1879?”, in Clark and Hale (eds) 1994: 31–48 (ch. 2).
* Burge, Tyler, 1984, “Frege on Extensions of Concepts, from 1884 to 1903”, *The Philosophical Review*, 93(1): 3–34. doi:10.2307/2184411
* Clark, Peter and Bob Hale (eds.), 1994, *Reading Putnam*, Cambridge, MA: Blackwell Publishers.
* Cook, Roy T., 2013, “How to Read *Grundgesetze*”, appendix to ER13: A1–A42.
* Currie, Gregory, 1984, “Frege’s Metaphysical Argument”, *The Philosophical Quarterly*, 34(136): 329–342. Reprinted Wright 1984: 144–157. doi:10.2307/2218764
* Dedekind, Richard, 1888, *Was sind und was sollen die Zahlen?*, Braunschweig: Friedrich Vieweg.
* Dummett, Michael A. E., 1981, *The Interpretation of Frege’s Philosophy*, London: Duckworth.
* Ebert, Philip A. and Marcus Rossberg (eds.), 2019, *Essays on Frege’s: “Basic Laws of Arithmetic”*, Oxford: Oxford University Press.
* Gabbay, Dov M. and John Woods (eds.), 2004, *Handbook of the History of Logic, Volume 3, the Rise of Modern Logic: From Leibniz to Frege*, Amsterdam/Boston: Elsevier.
* Goldfarb, Warren, 2010, “Frege’s Conception of Logic”, in Potter and Ricketts 2010: 63–85. doi:10.1017/CCOL9780521624282.003
* Heck, Richard Kimberly, 2012, *Reading Frege’s “Grundgesetze”*, Oxford: Clarendon Press. (originally published under Richard G. Heck)
* –––, 2019, “Formal Arithmetic Before *Grundgesetze*”, in Ebert and Rossberg 2019: 497–537 (ch. 18).
* Heck, Richard Kimberly and Robert May, 2013, “The Function Is Unsaturated”, in Beaney 2013: 825–850. (originally published under Richard Kimberley Heck and Robert May) doi:10.1093/oxfordhb/9780199238842.013.0028
* –––, 2020, “The Birth of Semantics”, *Journal for the History of Analytical Philosophy*, 8: article 6. doi:10.15173/jhap.v8i6.3970
* Jones, Emily Elizabeth Constance, 1890, *Elements of Logic as a Science of Propositions*, Edinburgh: T. & T. Clark.
* Jourdain, Philip, 1912, “The Development of Theories of Mathematic Logic and the Principles of Mathematics”, *The Quarterly Journal of Pure and Applied Mathematics*, 43: 219–314.
* Kemp, Gary, 1995, “Truth in Frege’s ‘Law of Truth’”, *Synthese*, 105(1): 31–51. doi:10.1007/BF01064102
* Kremer, Michael, 2010, “Sense and Reference: The Origins and Development of the Distinction”, in Potter and Ricketts 2010: 220–292. doi:10.1017/CCOL9780521624282.007
* Landini, Gregory, 2012, *Frege’s Notations: What They Are and How They Mean*, (History of Analytic Philosophy), Houndmills, UK/New York: Palgrave Macmillan.
* Łukasiewicz, Jan, 1934, “Z Historii Logiki Zdãn”, *Przeglad Filozoficzny*, 37: 369–377.
* Mates, Benson, 1972, *Elementary Logic*, second edition, New York: Oxford University Press.
* Mostowski, Andrzej, 1957, “On a Generalization of Quantifiers”, *Fundamenta Mathematics*, 44(1): 12–36.
* Pedriali, Walter B., 2019, “When Logic Gives Out: Frege on Basic Logical Laws”, in Ebert and Rossberg 2019: 57–89 (ch. 3).
* Potter, Michael D. and Tom Ricketts (eds.), 2010, *The Cambridge Companion to Frege*, Cambridge, UK/New York: Cambridge University Press. doi:10.1017/CCOL9780521624282
* Putnam, Hilary, 1982, “Peirce the Logician”, *Historia Mathematica*, 9(3): 290–301. doi:10.1016/0315-0860(82)90123-9
* Russell, Bertrand, 1902, “Letter to Frege”, printed in van Heijenoort (ed.) 1967a: 124–125.
* Tarski, Alfred, 1933, “The Concept of Truth in the Languages of the Deductive Sciences” (Polish), *Prace Towarzystwa Naukowego Warszawskiego, Wydzial III Nauk Matematyczno-Fizycznych* 34, Warsaw. Reprinted in Zygmunt (ed.), 1995, *Alfred Tarski, Pisma Logiczno-Filozoficzne, 1 Prawda*, Warsaw: Wydawnictwo Naukowe PWN, 13–172. English translation in Tarski’s *Logic, Semantics, Metamathematics: Papers from 1923 to 1938*, 2nd edition, John Corcoran (ed.), Indianapolis: Hackett Publishing Company, 1983, 152–278.
* van Heijenoort, Jean, 1967b, “Introduction to *Begriffsschrift*”, in van Heijenoort (ed.) 1967: 1–5.
* Wright, Crispin (ed.), 1984, *Frege: Tradition and Influence*, Oxford/New York: B. Blackwell.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=frege-logic). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/frege-logic/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up this entry topic](https://www.inphoproject.org/entity?sep=frege-logic&redirect=True) at the [Internet Philosophy Ontology Project](https://www.inphoproject.org/) (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/frege-logic/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[algebra of logic tradition](https://plato.stanford.edu/entries/algebra-logic-tradition/) | [Carnap, Rudolf](https://plato.stanford.edu/entries/carnap/) | [Frege, Gottlob](https://plato.stanford.edu/entries/frege/) | [Frege, Gottlob: controversy with Hilbert](https://plato.stanford.edu/entries/frege-hilbert/) | [Frege, Gottlob: theorem and foundations for arithmetic](https://plato.stanford.edu/entries/frege-theorem/) | [logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [logic: second-order and higher-order](https://plato.stanford.edu/entries/logic-higher-order/) | [logicism and neologicism](https://plato.stanford.edu/entries/logicism/) | [quantifiers and quantification](https://plato.stanford.edu/entries/quantification/) | [Russell’s paradox](https://plato.stanford.edu/entries/russell-paradox/) | [truth values](https://plato.stanford.edu/entries/truth-values/)

[Copyright © 2023](https://plato.stanford.edu/info.html#c) by  
Roy Cook <[*cookx432@umn.edu*](mailto:cookx432%40umn%2eedu)>
