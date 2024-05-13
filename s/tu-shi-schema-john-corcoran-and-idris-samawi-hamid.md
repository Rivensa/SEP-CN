# 图式 schema (John Corcoran and Idris Samawi Hamid)

*首次发表于 2004 年 5 月 28 日；实质性修订于 2016 年 8 月 2 日*

图式（复数：图式或图式），也被称为方案（复数：方案），是一种语言的“模板”，“框架”或“模式”，以及使用它来指定潜在无限的短语，句子或论证的规则，这些被称为图式的实例。图式在逻辑中用于指定推理规则，在数学中用于描述具有无限多个公理的理论，在语义学中用于给出真理定义的充分条件。

---

## 1. 什么是图式？

图式是一个复杂的系统，由

1. 一个模板文本或图式模板：由重要的词语和/或符号以及占位符（字母、空格、圆圈数字、省略号、序数表达式如“第一”和“第二”等）组成的句法字符串，以及
2. 一个附加条件，指定如何填充占位符以获得实例，并且有时还指定如何理解重要的词语或符号（Tarski 1933/1983: 155; Church 1956: 172）。特别是，附加条件指定了模板的实例所属的语言，无论是自然语言还是形式语言。

最著名的图式之一是 Tarski 的图式 T，其模板文本是一个由八个词和两个省略号组成的字符串：

> …是一个真命题，当且仅当…

边界条件要求第二个空白处填入一个英语的（陈述性）句子，并且第一个空白处填入该句子的名称（塔斯基 1933/1983: 155）。以下字符串是一个实例：

> 当且仅当零等于一时，'零等于一'是一个真命题。

通过使用一个既不被认为是真的也不被认为是假的句子，可以获得更多揭示性的例子：

> "每个完美数都是偶数" 这个句子只有当每个完美数都是偶数时才是真的。

这个十四个字的句子

> 零是偶数或者零不是偶数的情况下。

是英语中排中律句式的一个实例，其中涉及到模板

> 要么 A，要么不是 A 的情况下。

侧条件是，两个“A”的出现都要用同一个良好形式的英语陈述句来填充，不连续表达式“要么...要么...”表示经典的非排他性析取，六个词的句子前缀“不是这样的情况”表示经典的否定。请注意，这个图式模板不是一个英语句子。将其用作一个断言的句子将严格来说是不连贯的。将其称为真或假也是错误的，尽管可以根据这些模糊的词的适当意义将其描述为有效或无效。

一些逻辑学家似乎将图式仅与模板本身等同起来（塔斯基在 1933/1983 年的措辞表明了这种等同，而丘奇在 1956 年的措辞似乎是为了避免这种等同）。但是，同一个图式模板可以是任意数量的不同图式的组成部分，这取决于侧条件或基础语言。此外，由于不同的字符或字符串可以用作占位符（参见上文），并且即使一个符号变化也会产生严格意义上的不同语法字符串（Corcoran 等人，1974 年），即使在固定的语言环境下，同一个实例集合也可以由不同的图式模板/侧条件配对确定。也许正是这个事实导致一些作者写作时将图式与实例集合等同起来。对于许多目的来说，指定实例集合是最重要的，关于如何准确地指定它的问题被认为是一个纯粹的技术性问题。

有时候（如上面的排中律图式中），图式模板中的占位符会用字母标记。重要的是要区分开一个开放句子，例如‘（x+y）=（y+x）’，其中的目标语言数值变量‘x’和‘y’范围是数字，和一个数论交换图式，其模板文本是‘（X+Y）=（Y+X）’，其侧条件是‘X’的两个出现要被替换为两个相同的数字，‘Y’的两个出现也是如此。数字属于目标语言，而占位符属于元语言。目标语言中的变量范围是对象的域，而模板文本中的‘虚拟字母’只是用于语法替代的占位符。（有关区分的详细阐述，请参见奎恩 1945 年：第 1 节。）

图式可以根据其实例的句法类型分类为句子图式、子句图式或参数文本图式。我们已经看到了两个句子图式的例子。字符串

> A 的继承者

是一个子句图式的模板文本，其中的附加条件指定字母'A'被阿拉伯数字替换。这个明确的描述

> 9 的后继

将是一个实例。请注意，这个图式与开放术语非常不同。

> x 的继承者，

其中'x'是一种对象语言变量。图式本质上是生成句法实例的配方。模板文本中的“虚拟字母”'A'只是替代物（在这里是数字）的占位符。相比之下，开放术语中的'x'是一个范围在对象（在这里是数字）上的变量。

参数文本图式是其实例为参数文本的图式。参数文本是由一组称为前提的句子和一个称为结论的单个句子组成的双部分系统。（参数是由参数文本表达的东西，就像命题是由句子表达的东西一样。）在呈现参数文本的各种方式中，可能最不容易被误解的是前提-线-结论格式，其中前提后跟一条线，然后是结论。例如：

每个圆都是一个多边形。每个三角形都是一个圆。每个正方形都是一个三角形。每个正方形都是一个多边形。

一个论证文本图式的例子是推理规则演绎法则：

 如果 A，则 B。

侧条件指定将‘A’和‘B’替换为英语的陈述句，并且‘A’（以及‘B’）的两个出现都被同一个句子或公式替换。

公理图式可以被视为零前提的论证文本图式。

## 2. 图式的用途

图式在逻辑、数学和语义的形式化中被使用。在逻辑中，它们被用来指定系统的公理和推理规则。例如，一种对一阶逻辑的形式化（在 Shapiro 1991: 65 中）规定：

> 通过将希腊字母的公式替换为公式所得到的任何公式都是公理：
>
> Φ(Φ→(Ψ→Ξ))(¬Φ→¬Ψ)∀xΦ(x)→(Ψ→Φ)→((Φ→Ψ)→(Φ→Ξ))→(Ψ→Φ)→Φ(t)
>
> 其中 t 是 Φ 中自由于 x 的术语，

并且任何形式的推理都是

ΦΦ→ΨΨ

或者（其中 x 在 Φ 中不自由出现）

 ΦΦ→Ψ(x)→∀xΨ(x)

 是有效的。

一些数学理论可以在一阶语言中有限地公理化，但某些历史上重要的数论和集合论不能。这些理论的公理有时可以使用图式来指定。例如，在一阶数论中，归纳原理可以使用以下图式来指定：

[F(0)&∀x((Num(x)&F(x))→F(sx)]→∀x(Num(x)→F(x))

其中标有“F(x)”的两个空白处应填入一个或多个自由出现的变量“x”的一阶公式，标有“F(0)”的空白处应在每个自由出现的“x”被替换为“0”的出现之后填入相同的公式，标有“F(sx)”的空白处应在每个自由出现的“x”被替换为“sx”的出现之后填入相同的公式。

例如，如果我们将标有“F(x)”的两个空白填入“x≠sx”，我们有：

[0≠s0&∀x((Num(x)&x≠sx)→sx≠ssx)]→∀x(Num(x)→x≠sx)

使用英语作为基础目标语言，可以使用以下模板文本。

如果零是 F，并且每个是 F 的数字的后继也是 F，那么每个数字都是 F，

其中四个出现的'F'都要用同一个算术谓词（例如，'小于某个质数'）填充。

相比之下，在数论的二阶形式化中，可以给出一个单一的归纳公理：

∀F{[F(0)&∀x((Num(x)&F(x))→F(sx)]→∀x(Num(x)→F(x))}

对于每个 F，如果零是 F，并且每个是 F 的数字的后继也是 F，那么每个数字都是 F。

这里的“F”不是模式中的占位符，而是真正的变量，范围是属性或类（或者在某些解释中，是对个体的复数范围）。有关一阶逻辑和二阶逻辑之间的比较，请参见 Corcoran 1998。

第一阶归纳图式和第二阶归纳公理之间的正字相似性不幸地模糊了它们之间的重要差异。后者是一种语言中的句子，而前者只是生成句子的配方。它们也不具备推理等价性：第一阶归纳图式的实例集逻辑上比第二阶归纳公理要弱。也就是说，有些一阶算术的句子可以从第二阶归纳公理中推导出来（连同一阶和二阶算术的其他公理），但不能从第一阶归纳图式的实例中推导出来（参见 Shapiro 1991: 110）。

图式在语义学中也起着重要的作用。塔斯基认为他的“T-图式”（他称之为“方案”）的一个实例可以被视为“真实性的部分定义”，或者更确切地说是“真句”的定义：

> 这种类型的句子的一般图式可以用以下方式描述：
>
> * (2)x 是一个真命题，当且仅当 p。
>
> 为了得到具体的定义，我们在这个图式中用任何句子的符号 'p' 的位置替换，并用该句子的任何个体名称替换 'x' 的位置。（塔斯基 1933/1983: 155–6）

他认为，对于一种语言的“真命题”定义来说，它具有所有这些“部分定义”作为推论是一个充分的准则（塔斯基 1933/1983: 187–8）。

## 3. 图式的本体论地位

清楚地了解图式的混合本体论地位是很重要的。图式的模板文本是一个句法对象，是一个字符串，具有与数字、单词、公式等相同的本体论前提。例如，英语命名图式的模板文本——“表达式...命名实体...”——是一个包含四十个字符的表达式，其中包括二十七个字母出现次数、六个空格出现次数和七个句号出现次数。另一方面，侧条件是一个可比较于命题的内涵实体。

图式模板是一种在皮尔斯意义上具有无限多个标记的字符串类型（皮尔斯 1906 年；科科兰等人 1974 年：638 n. 5）。但是，图式模板的任何标记都不是图式的实例。实际上，图式的每个实例都是一种具有自己标记的字符串类型。词语“实例”是一种关系名词，用于描述某些字符串类型与某些图式之间的关系。词语“标记”是一种关系名词，用于描述某些宏观物理对象与某些抽象对象之间的关系。图式和图式模板都不是指代实例的普通名词，也不是指代一组实例的专有名词。

一些哲学家强调使用图式而不是二阶公理可以实现本体经济（例如，奎因 1970/1986 年）。但是很少有哲学家对使用图式所涉及的“本体承诺”进行全面客观的讨论。例如，数论本身假设了数字的存在，也许还包括数字函数和数字属性的存在，但它并不假设数学符号的存在，更不用说我们称之为数论语言的庞大复杂的符号系统的存在了。有时使用图式可能会减少目标语言的本体承诺，同时增加元语言的本体承诺，或者至少不会实现任何净节省。

## 4. 逻辑史中的图式

希腊词“图式”在柏拉图的学院中用于“[几何] 图形”，在亚里士多德的学园中用于“[三段论] 图形”。尽管亚里士多德的三段论图形或“图式”不是现代意义上的图式，但亚里士多德的形式是。例如，BARBARA 的模板文本是

P 属于每个 M。M 属于每个 S。P 属于每个 S。

相关的附加条件是：（1）“P”的两个出现都要用同一个普通名词填充，（2）“M”的两个出现都要用与“P”不同的同一个普通名词填充，（3）“S”的两个出现都要用与“P”和“M”不同的同一个普通名词填充，以及（4）表达式“属于每个”被理解为在先验分析中表示普遍肯定断言。斯多噶哲学的命题逻辑规则被视为图式。

很难确定“图式”这个词的自觉使用的起源时间；在现代意义上。罗素的《数学哲学导论》（1919）中随意使用它来描述命题函数：

> 一个命题函数...可以被视为仅仅是一个图式，一个空壳，一个空的意义容器，而不是已经有意义的东西。（1919 年：157）

但是命题函数在现代意义上并不是语法图式。塔斯基在 1933 年的真理定义论文中（塔斯基 1933/1983：157、160、172）是最早使用“图式”一词接近本文所指的意义的著名出版物之一（塔斯基 1933/1983：155、156）。塔斯基还在二战前使用了“图式”及其复数形式“图式集”（1983：63-64、114、310、386、423）。

20 世纪初的逻辑形式化使用了所谓的“替换规则”，而不是指定无限多个公理的图式。这些“替换规则”并不是用于“等式替换等式”的熟悉规则；相反，它们更接近于今天所称的实例化规则。对于“替换规则”的直观动机非常简单，但是实现它们的语法细节“令人难以忍受复杂”——用保罗·罗森布鲁姆（1950 年：109）的话来说。事实上，一些一流的逻辑学家在这方面犯了令人尴尬的错误，正如罗森布鲁姆在刚才引用的地方所记录的那样。丘奇（1956 年：158）将冯·诺伊曼归功于“使用公理图式的设备”，这使得（众所周知难以陈述的）替换规则变得不必要。

正如教会所强调的（例如，1956 年：59），对图式的元数学处理需要使用形式化或逻辑完美的语言，并且需要在塔斯基 1933 年的真理定义论文中首次发现的字符串的公理化理论（1933/1983：152-256）。有关这个重要但有些被忽视领域的历史、哲学和数学的更多信息，请参阅 Corcoran 等人的 1974 年论文；Corcoran 2006 年的论文。

<!--md-padding-ignore-begin-->
## Bibliography

* Church, A., 1956, *Introduction to Mathematical Logic*, Princeton: Princeton University Press.
* Corcoran, J., 1998, “Second-order Logic”, in C.S. Anderson and M. Zeleny (eds.), *Logic, Meaning, and Computation: Essays in Memory of Alonzo Church*, Dordrecht: Kluwer.
* –––, 2006, “Schemata: the Concept of Schema in the History of Logic”, *Bulletin of Symbolic Logic*, 12(2): 219–40. doi:10.2178/bsl/1146620060
* –––, 2009, “Aristotle’s Demonstrative Logic”, *History and Philosophy of Logic*, 30:1–20. doi:10.1080/01445340802228362
* Corcoran, J., W. Frank, & M. Maloney, 1974, “String theory”, *Journal of Symbolic Logic*, 39(4): 625–637. doi:10.2307/2272846
* Feferman, A. and S. Feferman, 2004, *Alfred Tarski: Life and Logic*, Cambridge: Cambridge University Press.
* Feferman, S. and G. Jäger, 1983, “Choice principles, the bar rule and autonomously iterated comprehension schemes in analysis”, *Journal of Symbolic Logic*, 48: 63–70.
* Horsten, L., 2011, *The Tarskian Turn: Deflationism and Axiomatic Truth*, Cambridge, MA: MIT Press.
* Kleene, S.C., 1967, *Mathematical Logic*, New York: Wiley and Sons; reprinted, New York: Dover, 2002.
* Peirce, C., 1906, “Prolegomena to an Apology for Pragmaticism”, *Monist*, 16: 492–546.
* Quine, W. V., 1945, “On the Logic of Quantification”, *Journal of Symbolic Logic*, 10: 1–12.
* –––, 1970, *Philosophy of logic*, Cambridge MA: Harvard University Press, reprinted 1983.
* Rosenbloom, P., 1950. *Elements of Mathematical Logic*, Dover, New York.
* Russell, B., 1919, *Introduction to Mathematical Philosophy*, London: George Allen and Unwin.
* Shapiro, S., 1991, *Foundations without Foundationalism: A Case for Second-order Logic*, Oxford: Oxford University Press.
* Tarski, A., 1933, “The concept of truth in the languages of the deductive sciences” (Polish), *Prace Towarzystwa Naukowego Warszawskiego, Wydzial III Nauk Matematyczno-Fizycznych*, 34, Warsaw; reprinted in Zygmunt 1995: 13–172; expanded English translation in Tarski 1983: 152–278.
* –––, 1983, *Logic, Semantics, Metamathematics: Papers from 1923 to 1938*, edited with introduction and analytic index by John Corcoran, Indianapolis: Hackett Publishing Company.
* van Heijenoort, J., 1967, *From Frege to Gödel*, Cambridge MA: Harvard University Press.
* Zygmunt, J. (ed.), 1995, *Alfred Tarski, Pisma Logiczno-Filozoficzne, 1 Prawda*, Warsaw: Wydawnictwo Naukowe PWN.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=schema). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/schema/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=schema&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](http://philpapers.org/sep/schema/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

* [Axiom Schema](http://mathworld.wolfram.com/AxiomSchema.html), at mathworld.wolfram.com.

## Related Entries

[argument and argumentation](https://plato.stanford.edu/entries/argument/) | [Aristotle, General Topics: logic](https://plato.stanford.edu/entries/aristotle-logic/) | [logical constants](https://plato.stanford.edu/entries/logical-constants/) | [ontological commitment](https://plato.stanford.edu/entries/ontological-commitment/) | [Quine, Willard Van Orman](https://plato.stanford.edu/entries/quine/) | [Russell, Bertrand](https://plato.stanford.edu/entries/russell/) | [Tarski, Alfred](https://plato.stanford.edu/entries/tarski/)

[Copyright © 2016](https://plato.stanford.edu/info.html#c) by  
John Corcoran  
Idris Samawi Hamid <[*idris.hamid@colostate.edu*](mailto:idris%2ehamid%40colostate%2eedu)>
<!--md-padding-ignore-end-->
