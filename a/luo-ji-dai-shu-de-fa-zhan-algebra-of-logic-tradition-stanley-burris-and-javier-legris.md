# 逻辑代数的发展 algebra of logic tradition (Stanley Burris and Javier Legris)

首次发表于2009年3月2日；实质性修订于2021年2月12日

逻辑代数作为一种显示逻辑的底层数学结构的明确的代数系统，是由乔治·布尔（1815-1864）在他的书《逻辑的数学分析》（1847）中引入的。因此，它与*代数逻辑*的更一般的方法有所不同。布尔开创的方法在19世纪得到了成功的延续，由威廉·斯坦利·杰文斯（1835-1882）、查尔斯·桑德斯·皮尔斯（1839-1914）、恩斯特·施罗德（1841-1902）等人的工作继续推进，从而在（数学）逻辑学中建立了一种传统。从布尔的第一本书到亚历克斯·北·怀特海德（1861-1947）和伯特兰·罗素（1872-1970）于第一次世界大战后产生影响的空前巨著《数学原理》（1910-1913），逻辑代数的各种版本一直是数学逻辑的最发达形式，特别是施罗德的三卷本《关于逻辑的代数学讲座》（1890-1905）中所呈现的形式。此外，这一传统促使了利奥波德·勒文海姆（1878-1957）的研究，最终产生了模型理论。此外，1941年，阿尔弗雷德·塔斯基（1901-1983）在他的论文《关系演算》中回到了皮尔斯在施罗德的《逻辑代数》中提出的关系代数。逻辑代数传统在*逻辑作为演算*的概念中起到了关键作用，与*逻辑作为通用语言*的概念相对。除了塔斯基的关系代数之外，逻辑代数传统在其他数学理论中也能找到影响，比如范畴论。然而，这种影响超出了本条目的范围，本条目分为10个部分。

* [1. 简介](https://plato.stanford.edu/entries/algebra-logic-tradition/#Int) * [2. 1847年：逻辑代数现代版本的开端](https://plato.stanford.edu/entries/algebra-logic-tradition/#a184BegModVerAlgLog) * [3. 1854年：布尔关于逻辑代数的最终介绍](https://plato.stanford.edu/entries/algebra-logic-tradition/#a185FinPreHisAlgLog) * [4. 杰文斯：基于总操作的逻辑代数](https://plato.stanford.edu/entries/algebra-logic-tradition/#JevAlgLogBasTotOpe) * [5. 皮尔斯：将逻辑代数建立在包容性上](https://plato.stanford.edu/entries/algebra-logic-tradition/#PeiBasAlgLogSub) * [6. 德·摩根和皮尔斯：逻辑代数中的关系和量词](https://plato.stanford.edu/entries/algebra-logic-tradition/#DeMorPeiRelQuaAlgLog) * [7. 施罗德对逻辑代数的系统化](https://plato.stanford.edu/entries/algebra-logic-tradition/#SchSysAlgLog) * [8. 亨廷顿：对逻辑代数的公理研究](https://plato.stanford.edu/entries/algebra-logic-tradition/#HunAxiInvAlgLog) * [9. 斯通：逻辑代数的模型](https://plato.stanford.edu/entries/algebra-logic-tradition/#StoModForAlgLog) * [10. 斯科勒姆：量词消除和可决定性](https://plato.stanford.edu/entries/algebra-logic-tradition/#SkoQuaEliDec) * [11. 塔斯基和代数逻辑的复兴](https://plato.stanford.edu/entries/algebra-logic-tradition/#TarRevAlgLog) * [参考文献](https://plato.stanford.edu/entries/algebra-logic-tradition/#Bib)
* [初级来源](https://plato.stanford.edu/entries/algebra-logic-tradition/#PriSou) * [次级来源](https://plato.stanford.edu/entries/algebra-logic-tradition/#SecSou) * [学术工具](https://plato.stanford.edu/entries/algebra-logic-tradition/#Aca) * [其他互联网资源](https://plato.stanford.edu/entries/algebra-logic-tradition/#Oth) * [相关条目](https://plato.stanford.edu/entries/algebra-logic-tradition/#Rel)

---

## [1. 引言]()

布尔的《逻辑的数学分析》提出了许多有趣的逻辑创新：它是19世纪逻辑数学化的开始，并通过对普通代数的轻微修改提供了一种*算法*替代传统逻辑中使用的*目录*方法（即使后者也发展了简化程序）。与列出有效论证形式的清单不同，论证的有效性是基于一般原则和规则确定的。此外，它提供了一种基于公设系统证明逻辑定律的有效方法。正如布尔后来所写的那样，它是一个适当的“推理科学”，而不是传统的三段论那样的“记忆艺术”（布尔1997：136）。在本书的三分之三处，在完成对三段论逻辑的讨论后，布尔开始发展一般工具，这些工具将在他的《思维法则》（1854年）中被广泛应用，允许一个论证有多个前提并涉及多个类别。为了处理这种扩展逻辑的无限多个可能的逻辑论证，他提出了定理，为算法分析提供了关键工具（目录已不再可行）。

布尔的思想独立于早期的预期，如G.W.莱布尼兹所发展的思想。它们源于英国数学的特定背景（参见Peckhaus 2009）。根据维克多·桑切斯·瓦伦西亚的说法，起源于布尔的传统被称为“逻辑代数”，自从亚历山大·麦克法兰于1879年出版《逻辑代数原理》以来（参见桑切斯·瓦伦西亚2004：389）。麦克法兰认为“布尔提出的关于质量的分析推理方法”是一种代数（参见麦克法兰1879：3）。

这种方法与通常所称的“代数逻辑”不同；尽管存在一些重叠，但这两个领域的历史发展是不同的。代数逻辑被理解为：

> *一种* [逻辑的] *风格*，*其中概念和关系* 通过数学符号来表达 [  **…**  …] 以便可以应用数学技巧。在这里，数学主要指的是代数，即与某个集合上的有限操作有关的数学部分。（Hailperin 2004: 323）

逻辑代数的发展可以在莱布尼茨、雅各布·伯努利和其他现代思想家的作品中找到，它无疑构成了布尔方法的重要前身。从更广泛的视角来看，这两者都是形式科学中*符号知识*传统的一部分，最初由莱布尼茨构想（参见Esquisabel 2012）。这种代数逻辑的思想在法国启蒙时期在康迪亚克和孔多塞的作品中得到了一定程度的延续（参见Grattan-Guinness 2000: 14 ff.）。

布尔处理逻辑问题的方法可以描述如下：

1. 将逻辑数据转化为适当的方程； 2. 应用代数技巧解决这些方程； 3. 如果可能的话，将这个解答重新翻译回原始语言。

换句话说，逻辑问题的符号化表达和逻辑方程的解决构成了布尔的方法（参见桑切斯·瓦伦西亚2004年：389）。

后来，在他1864年的《纯粹逻辑》中，杰文斯将布尔的不相交集合的部分运算改为了现代的无限制并集，并消除了布尔对于无法解释的术语的可疑使用（参见杰文斯1890年）。皮尔斯（1880年）通过给出“所有**A**是**B**”的现代含义，明确消除了亚里士多德从普遍陈述中推导出特殊陈述的方法。此外，他将逻辑代数扩展到了二元关系的逻辑代数，并引入了一般的求和和乘积来处理量化。恩斯特·施罗德（Ernst Schröder）在皮尔斯的框架下，受到赫尔曼（1809-1877）和罗伯特·格拉斯曼（1815-1901）的先前工作的启发，对19世纪逻辑代数的成就进行了系统化和发展，并在他的三卷本著作《逻辑代数讲义》（1890-1910）中进行了阐述。

哥德尔·弗雷格（Gottlob Frege）在1879年至1903年期间对逻辑的贡献，基于公理化的方法，当时几乎没有影响力（同样可以说是C.S.皮尔斯在世纪之交开发的图解系统）。怀特海德和罗素拒绝了逻辑代数的方法，其主要是等式形式和代数符号，而是采用了弗雷格公理系统的强烈启发，并使用乔治·皮亚诺（Giuseppe Peano）开发的符号表示，即使用逻辑连接词、关系符号和量词。

在20世纪的前两个十年里，逻辑代数在普拉东·谢尔盖耶维奇·波列茨基（1846-1907）、路易·库图拉（1868-1914）、莱奥波德·勒文海姆（1878-1957）和海因里希·贝曼（1891-1970）的著作中得到进一步发展（参见斯夏金1969年）。特别是逻辑代数中的消除定理影响了一阶和二阶逻辑片段的决策过程（参见曼科苏、扎克、巴德萨2009年）。

第一次世界大战后，起初采用代数方法的大卫·希尔伯特（1862-1943）转而采用了《原理》的方法，逻辑代数因此不再受欢迎。然而，1941年，塔斯基将关系代数视为一个等式定义的类。这样一个类除了考虑到19世纪的“给定宇宙上的所有二元关系的集合”之外，还有许多模型，就像19世纪研究的布尔代数除了“幂集布尔代数”之外还有许多。在1948年至1952年期间，塔斯基与他的学生钦和汤普森一起，创造了圆柱代数作为一阶逻辑的代数逻辑伴侣，而在1956年，保罗·哈尔莫斯（1916-2006）引入了多元代数以达到同样的目的。正如哈尔莫斯（1956年b、c和d）所指出的，这些新的代数逻辑倾向于研究它们捕捉一阶逻辑的程度以及它们的通用代数方面，如公理化和结构定理，但对于激发它们创造的一阶逻辑的本质提供了很少的洞察。

## [2. 1847年——现代逻辑代数的起源]()

1847年末，布尔（George Boole）和德·摩根（Augustus De Morgan，1806-1871）各自出版了一本关于逻辑的书籍——布尔的《逻辑的数学分析》（1847年）和德·摩根的《形式逻辑》（1847年）。德·摩根的方法是将传统演绎逻辑（通常称为“亚里士多德逻辑”）的每个方面都进行细致的剖析，考虑如何概括这些组成部分，并在某些情况下，尝试使用这些组成部分构建一个逻辑系统。不幸的是，他从未能将自己最好的想法融入到一个重要的系统中。他没有引入一个表示相等的符号，这使得发展逻辑代数的等式代数成为不可能。德·摩根似乎不擅长综合思考。

德摩根（De Morgan）于1847年出版的书是逻辑研究复兴的一部分，这一复兴始于19世纪初的法国约瑟夫·迪埃斯·格尔贡（Joseph Diez Gergonne，1771-1859）和波希米亚的伯恩哈德·博尔扎诺（Bernhard Bolzano，1781-1848）等人。英国的乔治·本特姆（George Bentham）和威廉·汉密尔顿（William Hamilton）也参与了这一复兴，他们的研究重点是传统三段论中范畴句的变体性质，包括所谓的“谓词的量化”；例如，“所有的**A**都是一些**B**”或“一些**A**都是所有的**B**”。人们认为这个问题需要对亚里士多德的三段论逻辑进行扩展，并且需要一种符号方法来处理这些陈述并对它们的不同类型进行分类（参见Heinemann 2015的第2章和第3章）。

布尔从完全不同的角度来看待逻辑，即如何将亚里士多德逻辑转化为符号代数的形式。使用符号代数是他在微分方程研究中熟悉的主题，也是他年轻朋友和导师邓肯·法夸尔森·格雷戈里（Duncan Farquharson Gregory，1813-1844）的各种论文中试图将几何等其他学科转化为符号代数语言的尝试。由于将符号代数应用于微分方程是通过引入微分算子进行的，所以布尔自然会寻找适用于亚里士多德逻辑领域的运算符。他很快想到了使用“选择”运算符的想法，例如，红色的选择运算符将从一个类中选择红色成员。在他1854年的书中，布尔意识到省略选择运算符并直接使用类更为简单（然而，他保留了选择运算符以证明他的逻辑法则并非最终基于对语言使用的观察，而实际上深深扎根于人类思维的过程中）。从现在开始，在本文讨论布尔1847年的书时，选择运算符已被更简单的直接表述使用类的形式所取代。

由于符号代数只是普通代数的句法方面，布尔需要一种解释代数的常规运算和常数的方法，以创建他的逻辑代数。乘法被解释为交集，导致他的一个新定律，幂等定律 **X**X  **=**  X��=�，重新发现了莱布尼兹已经提出的一个逻辑定律。加法被定义为并集，前提是处理的是*不相交*的类；减法被定义为类的差集，前提是从一个类中减去一个子类。在其他情况下，加法和减法运算被简单地定义为未定义，或者如布尔所写的，*无法解释*。算术的通常定律告诉布尔，1必须是宇宙，**1**−**X**1−�必须是**X**�的补集。

布尔系统的下一步是将四种范畴命题翻译成方程，例如“所有**X**�都是**Y**�”变成**X**=**X**Y�=��，而“一些**X**�是**Y**�”变成**V**=**X**Y�=��，其中**V**�是一个新符号。为了消除三段论中的中项，布尔从普通代数中借用了一个消除定理，但对于他的逻辑代数来说，这个定理太弱了。这个问题在他的1854年的书中得到了解决。布尔发现，他不能总是通过上述特定命题的翻译（即具有存在性含义的命题）推导出所需的结论，因此他添加了变体**X**=**V**Y�=��，**Y**=**V**X�=��，和**V**X  **=**  V**Y**��=��（参见[布尔](https://plato.stanford.edu/entries/boole/)条目）。

19世纪的符号代数不仅包括多项式代数，布尔还进行了实验，看看哪些结果和工具适用于逻辑代数。例如，他通过使用无限级数展开证明了他的一个结果。他对普通代数的可能性着迷，使他考虑了一些问题，比如：如果幂等律被替换为**X**3  **=**  X�3=�，逻辑会变成什么样子？他的继任者，尤其是杰文斯，很快将类的操作缩小到我们今天使用的那些，即并集、交集和补集。

正如前面提到的，在他1847年的简短著作的三分之三处，在他的系统中完成了传统亚里士多德三段论的推导之后，布尔宣布他的逻辑代数能够具有更广泛的应用。然后，他继续添加关于展开项的一般定理，提供方程的解释，并使用长除法将一个类在方程中表示为其他类（添加了附加条件）。

布尔的定理在1854年完成和完善，提供了分析无限多个论证形式的算法。这开辟了一种新的、富有成果的视角，偏离了传统的逻辑方法，几个世纪以来学者们一直努力想出聪明的记忆法来记住一个非常小的有效转换和三段论及其各种相互关系的目录。

德摩根的《形式逻辑》没有获得重要的认可，主要是因为它是一个大量的小事实的集合，没有重要的综合。布尔的《逻辑的数学分析》有强大的方法，引起了德摩根和亚瑟·凯利（1821-1895）等几位学者的注意；但是，布尔的逻辑代数的运作方式立即引发了严重的问题：它与普通代数有多密切的联系？布尔如何证明他的逻辑代数的过程？回顾起来，布尔显然不知道他的系统为什么有效。他声称，根据格雷戈里的说法，为了证明使用普通代数是足够的，只需检查乘法的交换律**X**Y  **=**  Y**X**和分配律**X**(**Y**+**Z**)  **=**  X**Y**+**X**Z�(�+�)=��+��，这显然是错误的。尽管如此，他很可能已经在足够多的情况下检查了他的结果，以实现他的系统是正确的这一信念。

## [3. 1854年 - 布尔关于他的逻辑代数的最终演讲]()

在他的第二本书《思维的法则》中，布尔不仅将代数方法应用于传统逻辑，还尝试对逻辑进行一些改革。他首先扩充了他在1847年逻辑代数中的法则（并没有明确表示他之前列出的三个公理是不足的），并对推理规则（在等式的两边执行相同的操作）发表了一些评论。但然后他随意地陈述，他的系统的基础实际上是建立在一个单一的（新的）原则上，即只需检查一个论证是否正确，当类符号仅取值为0和1时，并且操作是通常的算术运算。让我们称之为*布尔的0和1法则*。对于布尔采用这个新基础的有意义的理由没有给出，它也没有被赋予一个特殊的名称，并且在书的其余部分对它的引用通常表达得相当笨拙。关于这个0和1法则的现代分析，请参见Burris＆Sankappanavar 2013年的著作。

逻辑代数的发展在《思维的法则》中进行得与他1847年的著作类似，只是翻译方案有些微小的变化，并且选择运算符被类别所取代。有一个新的非常重要的定理（纠正了他在1847年使用的那个定理），即消除定理，它表明：给定一个方程**F**(**x**,**y**,**z**,  **…**  )  **=**  0（其中**x**,**y**,**z**等为类别符号），从消除某些类别符号得出的最一般的结论是通过（1）以所有可能的方式将0和1代入**F**(**x**,**y**,**z**,  **…**  )（即将要消除的符号）中，然后（2）将这些不同的替代实例相乘，并将乘积设为0。因此，从**F**(**x**,**y**,**z**)  **=**  0（其中**x**,**y**,**z**等为类别符号）中消除**y**和**z**得到**F**(**x**,**0**,**0**)**F**(**x**,**0**,**1**)**F**(**x**,**1**,**0**)**F**(**x**,**1**,**1**)  **=**  0（其中**x**为类别符号）。 这个定理在布尔对亚里士多德的演绎逻辑的解释中也起到了重要的作用。

从逻辑代数的角度来看，1854年的处理方法有时似乎不如1847年的书中那样优雅，但它更深入地揭示了布尔对逻辑代数基础的思考。关于逻辑的最后一章，第15章，是试图给出亚里士多德的转换和三段论的统一证明。（有趣的是，在第15章之前，布尔没有提供任何涉及特定命题的论证示例。）第15章的细节相当复杂，主要是因为应用了消除和展开定理后表达式的增大。布尔只是把大部分工作留给读者。后来的评论家们对这一章进行了概述，似乎没有人仔细研究过其中的细节。

除了0和1的规则和消除定理之外，1854年的演讲主要是因为布尔试图证明他的逻辑代数而引起人们的兴趣。他认为，在符号代数中，只要前提和结论中的术语是可解释的，就可以像处理完全运算一样进行等式推导，即使是使用部分运算也是可以接受的。他说这就是普通代数处理不可解释的 **−**  1−−−√−1，即-1的平方根的方式。（复数的几何解释早在Wessel、Argand和Gauss的时候就被认可了，但直到1830年代Gauss和Hamilton的出版物出现后，对于复数在更大的数学界是否可接受的疑虑才被克服。有趣的是，在1854年，布尔将 **−**  1−−−√−1视为不可解释的。）

对于布尔的逻辑代数方法存在一些问题：

1. 他的逻辑代数和数字代数之间是否存在有意义的联系，还是仅仅是它们如此相似的偶然？2. 在一个专注于方程的代数逻辑中，是否可以处理特定的命题？3. 在等式推导中使用无法解释的术语真的可接受吗？4. 布尔是否使用了“亚里士多德式”的语义（传统逻辑中预设的语义，其中术语的范围不为空）？

## [4. 杰文斯：基于全操作的逻辑代数]()

杰文斯曾在德摩根那里学习过，他是第一个提出与布尔系统不同的选择的人。1863年，他写信给布尔，认为布尔的加法运算应该被更自然的“包含或”（或“并集”）所取代，从而得出定律**X**+**X**=**X**�+�=�。布尔完全拒绝了这个建议（这将破坏他基于普通代数的系统），并中断了通信。杰文斯在他1864年的书《纯粹逻辑》中发表了他的系统（在杰文斯1890年的重印本中）。他所说的“纯粹”是指他摆脱了对数字代数的依赖——他将使用与数量相关的类，而不是与质量相关的谓词，并且他的定律将直接从包含析取和合取的（总体）基本运算中推导出来。但他保留了布尔在他的逻辑代数中使用方程式作为陈述的基本形式。

通过采用德摩根的约定，即使用大写/小写字母表示补集，杰文斯的系统不适合为现代布尔代数提供等式公理。然而，他改进了他的公理和推理规则，直到最终得到的基本上是现代布尔代数的系统，适用于“基本术语”，即将类符号视为常量而不是变量的术语。

必须注意到，现代等式逻辑处理的是*全称量化*的等式（在19世纪被称为*定律*）。在19世纪的逻辑代数中，可以将“所有**X**�都是**Y**�”翻译为等式**X**=**X**Y�=��。这不应被视为全称量化表达式 **(**  ∀**X**)  **(**  ∀**Y**)  **(**  X  **=**  X**Y**)(∀�)(∀�)(�=��)。**X**�和**Y**�应被视为常量（或示意字母）。只包含常量（没有变量）的术语称为*基础*术语。

通过在谓词代数（或等价地，在类代数）的特殊环境中进行这种分析，杰文斯在现代等式逻辑的发展中发挥了重要作用。正如前面提到的，布尔为他的系统提供了不充分的等式公理集，最初是从格雷戈里的两个定律开始，再加上他的幂等律；这些定律伴随着德摩根的推理规则，即可以对等式进行相同的操作（布尔在他的逻辑代数中的基本运算是加法、减法和乘法），并得到相等的结果。然后，布尔转而使用简单而强大（但未解释的）的0和1规则。

用总操作替代了布尔的基本操作后，杰文斯在很多年的时间里继续研究他的系统的公理和规则。我们现在认为理所当然的一些等式逻辑的要素，杰文斯花了很多年才解决：

*自反律*（**A**=**A**�=�）。1864年，杰文斯将其列为一个公设（1890年，第11页），然后在§24中将**A**=**A**�=�称为“无用的同一命题”。在他1869年关于替换的论文中，它成为了“同一律”。在《科学原理》（1874年）中，它是三个“思维基本定律”之一。

*对称律* (**B**=**A**�=� 是由 **A**=**B**�=� 推导出来的)。1864年，杰文斯写道：“**A**=**B**�=� 和 **B**=**A**�=� 是同一个陈述”。这是他坚持的立场。1874年，他写道：

> 我将考虑两种形式的 **A**=**B**�=� 和 **B**=**A**�=�，它们表达了完全相同的不同写法的等同性。

对于他的逻辑代数的最终形式，我们转向他在《科学原理》（1874年）中分散在40页上的定律，他用 **⋅**  ∣  **⋅**  ⋅∣⋅取代了之前使用的+，显然是为了进一步远离与数字代数的任何联系：

 组合定律

**A**A**B**A  **⋅**  ∣  **⋅**  A**A**⋅  **∣**  ⋅**B**A  **(**  B  **⋅**  ∣  **⋅**  C  **)**  =**A**A  **=**  A**A**A  **=**  &**c**=**B**A  **=**  A  **=**  B  **⋅**  ∣  **⋅**  A  **=**  A**B**⋅  **∣**  ⋅**A**C**简单性法则（第33页）**  交换律（第35页）**统一法则（第72页）**  交换律（第72页） **（未给出名称）（第76页）**  �=��=���=&�简单性法则（第33页）��=��交换律（第35页）�⋅∣⋅�=�统一法则（第72页）�⋅∣⋅�=�⋅∣⋅�交换律（第72页）�（�⋅∣⋅�）=��⋅∣⋅��（未给出名称）（第76页）

 思维定律

**A**A**a**A  **=**  A  **=**  o  **=**  A**B**⋅  **∣**  ⋅**A**b**恒等律（第74页）**  矛盾律（第74页）**对偶律（第74页）**  �=�恒等律（第74页）��=�矛盾律（第74页）�=��⋅∣⋅��对偶律（第74页）

杰文斯选择了他的替换原则作为他的单一推理规则——用现代术语来说，这本质上是地面替换和传递性的结合。他展示了如何从中推导出等式的传递性；他也可以推导出对称性，但他没有这样做。缺少了结合律——这在他的表达式中没有括号中是隐含的。

只有在他的《演绎逻辑研究》（1880年）中，杰文斯才提到麦考尔使用重音符号表示否定的方法。在指出麦考尔的重音符号可以表示复杂括号内术语的否定后，他接着说，大部分情况下，他发现德摩根的符号表示法更加优雅，而这也是他一直使用的符号表示法。

## [5. 皮尔斯：以包容为基础的逻辑代数]()

Peirce 在19世纪60年代末开始着手研究逻辑代数。在他的论文《布尔逻辑运算改进》（Peirce 1867）中，他独立得出与 Jevons 较早达成的相同结论，即需要用并集的总运算取代布尔的部分加法运算（参见 CP 3.3.6）。在他重要的1880年论文《论逻辑代数》中，Peirce 悄然与传统的外延语义决裂，并引入了现代语义的一个通常假设：概念的外延，理解为一个类，可能是空的（以及宇宙），并且陈述了我们今天使用的范畴判断的真值。例如，他说命题“所有 **A** is **B**” 如果**A**和**B** 都是空类，则为真。由限制换位，也就是说，论证“所有 **A** is **B**” 因此“一些 **B** 是 **A**”，不再是有效的推理。Peirce 没有提及他背离传统语义存在假设的原因和优点。

Peirce 还与 Boole 和 Jevons 使用等号作为基础原语决裂，取而代之的是可解释为不同方式的“包含”关系（子类关系、蕴含等）。他阐述了“包含”的偏序性质，然后定义了+ 和 × 操作为上确界和下确界——他暗示了这样的确界是存在的，并列出了我们现在称为格的两个二元操作的关键等式性质。然后，他声称分配律是成立的，但说证明过于繁琐，无法包含。这一观点的富有成果在他1885年的开创性论文中明显。在那里，Peirce 提出了一个基于蕴含的五条公理的命题逻辑系统（以符号 ‘  **−**  <−<’ 表示），包括现在称为 Peirce 法则的内容。这无疑使逻辑代数更加优雅。

## [6. 德摩根和皮尔斯：逻辑代数中的关系和量词]()

德摩根在1846年至1863年间写了一系列名为《论三段论》的六篇论文（收录于德摩根1966年的重印版）。在他努力推广三段论的过程中，德摩根在该系列的第二篇论文中，于1850年将连词“是”替换为了一个一般的二元关系。通过允许在三段论的前提中使用不同的二元关系，他引入了两个二元关系的组合来表达三段论的结论。在追求广义三段论的过程中，他还引入了其他各种二元关系的操作，包括逆操作，并为这些操作开发了一个片段的演算法。他在该系列中的主要论文是第四篇，名为《论三段论，第四篇，以及关系的逻辑》，发表于1859年（详见德摩根1966年）。

在德摩根的论文之后，皮尔斯在他1870年的论文《关系逻辑的符号化描述，源于布尔逻辑演算法的扩展》中，将布尔的工作提升到了二元关系的设置中——除了并、交和补之外，二元关系还具有组合和逆的自然运算。二元关系被定义为有序对的集合（见3.328）。他在1870年至1883年之间致力于这个新的演算法。与德摩根一样，皮尔斯还考虑了许多其他关系的自然运算。皮尔斯关于这个主题的主要论文是《关于逻辑代数》（1880年）。通过使用无限制的并集（用Σ表示）和无限制的交集（用Π表示），皮尔斯在他的逻辑代数中引入了量词。

在1882年的一篇论文《关系代数的简要描述》中，重新印刷于德摩根1966年的著作中，他使用这些量词通过对某种系数进行运算来定义关系的运算。德摩根因引入关系的概念而受到赞誉，但皮尔斯被认为是关系理论的真正创造者（参见，例如，塔斯基1941年：73）。然而，皮尔斯并没有发展这个理论。正如卡利克斯托·巴德萨所写的，“皮尔斯从来不喜欢关系的演算法”（巴德萨2004年：32）。他认为这个演算法因为类操作与关系操作的结合而过于复杂。相反，他从1885年开始更喜欢发展一个包括量词但不包括关系运算的“一般代数”。通过这种方式，他得到了现在被称为一阶逻辑的基本和非正式的表述（参见巴德萨2004年，*loc. cit*.）。

## [7. 逻辑代数的发展：Schröder的系统化]()

德国数学家恩斯特·施罗德在逻辑代数的发展中扮演了关键角色。一个很好的例子是他向皮尔斯提出挑战，要求他证明分配律，作为具有两个二元运算的代数的关键等式性质之一。皮尔斯（1885年）承认自己无法提供证明。多年后，亨廷顿（1904年：300-301）描述了他在1903年12月收到的皮尔斯来信的部分内容，声称提供了这个缺失的证明——显然，皮尔斯在施罗德于1902年去世后偶然发现了这些遗失已久的页面。皮尔斯向亨廷顿解释说，他最初认为施罗德的挑战是有根据的，而他论文中的这个明显缺陷“应该被列入由于流感而导致的错误清单中……”。实际上，皮尔斯的证明并没有纠正这个错误，因为分配律在普遍的格中并不成立；相反，他的证明引入了补运算——他使用了公理

如果**a**�不包含在**b**�的补集中，则**a**�和**b**�有一个共同的下界。

基于他以前的代数工作，Schröder在19世纪末写了一部百科全书式的三卷作品，名为《逻辑代数讲义》（1890-1905），基于皮尔斯提出的现代类语义的包容框架。这项工作是他在代数领域的研究成果，揭示了不同的影响。Schröder的目标是建立一个应用于许多数学领域的通用代数理论，其中逻辑代数是核心。正如Geraldine Brady指出的那样，它提供了抽象格理论的第一次阐述，是Dedekind之后对链理论的第一次阐述，是关系演算最全面的发展，并且基于关系演算对数学基础的处理（参见Brady 2000: 143 f.）。

第一卷涉及了类的等式逻辑，主要成果是布尔的1854年消去定理。皮尔斯声称的分配率的三个相当复杂的反例出现在第一卷的附录中，其中一个包括九百九十个关于拟群的恒等式。基于这一卷，戴德金（1897）创作了一个优雅的现代抽象格的演示（他称之为“对偶群”）；在这篇论文中，他提出了一个包含五个元素的反例，证明了皮尔斯声称的分配律是错误的。

第二卷扩展了第一卷中关于类的逻辑代数，以处理存在性陈述。首先，使用现代语义，施罗德证明了“某个X是Y”不能使用方程来表示。然而，他指出可以使用否定方程轻松地表达它，即X Y ≠ 0 ≠ 0。第二卷，研究了使用方程和否定方程的类演算，试图涵盖第一卷中涵盖的相同主题，特别是在寻找消去定理方面投入了相当大的努力。在处理了几个特殊情况之后，施罗德推荐将这个主题作为一个重要的研究领域——寻找消去定理的问题将被称为消去问题。

受皮尔斯的工作的主要启发，Schröder在他的《逻辑代数讲义》第三卷中研究了二元关系的逻辑代数。正如塔斯基曾经指出的那样，皮尔斯的工作在Schröder那里得到了非常彻底和系统的延续和扩展。对他来说，一个特别迷人的问题是：在这个代数中，给定一个方程**E**(**x**,**y**,**z**,  **…**  )  **=**  0�(�,�,�,…)=0，找到一个关系符号的一般解，比如说**x**�，用其他关系符号表示。他设法找到了一个非凡的术语**S**(**t**,**y**,**z**,  **…**  )�(�,�,�,…)，具有以下特性：(1) 对于任意选择的关系**t**�，**x**=**S**(**t**,**y**,**z**,  **…**  )�=�(�,�,�,…)都是**E**=**0**�=0的解，(2) 通过选择适当的**t**�，可以用这种方式获得**E**=**0**�=0的每个解**x**�。皮尔斯对Schröder对解方程问题的关注并不感到印象深刻，并指出Schröder的参数解是一个小小的骗局——逻辑代数对于关系的表达能力非常强大，通过计算术语**S**(**t**,**y**,**z**,  **…**  )�(�,�,�,…)实际上就是执行检查**E**(**t**,**y**,**z**,  **…**  )  **=**  0�(�,�,�,…)=0的步骤；如果答案是肯定的，那么**S**(**t**,**y**,**z**,  **…**  )�(�,�,�,…)返回值**t**�，否则返回值**x**0�0。

总结一下，Schröder构建了现代谓词逻辑的代数版本，还构建了关系理论。他将其应用于不同的领域（例如，康托尔的集合论），并将他的代数符号视为一种通用或普遍语言（*pasigraphy*，参见Peckhaus 2004和Legris 2012）。值得注意的是，洛文海姆在1940年仍然认为这与集合论一样合理。根据他的观点，Schröder解决关系方程的想法是Skolem函数的前身，而Schröder启发了洛文海姆对于每个具有无穷模型的“算术”句子都有可数模型的著名定理的表述和证明。Schröder的关系演算是Norbert Wiener（1894-1964）在哈佛大学的博士论文的基础（Wiener 1913）。根据Brady的说法，Wiener对关系演算进行了第一个公理化处理，比塔斯基的公理化处理早了二十多年（参见Brady 2000: 165）。

## [8. 亨廷顿：逻辑代数的公理研究]()

在19世纪末，大卫·希尔伯特（1862-1943）在他的《几何学基础》中提出了欧几里得几何作为一个公理化学科，不依赖于图表来证明（希尔伯特1899）。这引发了对数学中公理系统的研究的浪潮；特别是人们想知道这些公理是否是独立的，以及哪些基本原理能够导致最优雅的系统。爱德华·弗米利·亨廷顿（1874-1952）是最早研究逻辑代数这个问题的人之一。他给出了逻辑代数的三个公理化形式，证明了每组公理都是独立的，并且它们是等价的（参见亨廷顿1904）。1933年，他又提出了三组新的公理，其中一组包含以下三个方程式（1933: 280）：

**a**+**b**(**a**+**b**)  **+**  c  **(**  a  **′**  +**b**′  **)**  ′  **+**  (**a**′  **+**  b  **)**  ′  **=**  b  **+**  a  **=**  a  **+**  (**b**+**c**)  **=**  a  **.**  �+�=�+�(�+�)+�=�+(�+�)(�′+�′)′+(�′+�)′=�.

不久之后，赫伯特·罗宾斯（1915-2001）猜测第三个方程可以用稍微简单的方式替代

 **[**  (**a**+**b**)  **′**  +  **(**  a  **+**  b  **′**  )  **′**  ]  **′**  =**a**.[(a+b)′+(a+b′)′]′=a。

亨廷顿和罗宾斯无法证明这一点，后来，包括塔斯基和他在伯克利的才华横溢的学派在内的许多其他人的努力都没有成功。根据温克尔的部分结果，Argonne国家实验室的威廉·麦基尼设计的自动定理证明器EQP在1996年找到了罗宾斯猜想的证明。这一成就在2010年的Kolata一书中得到了宣传。

根据亨廷顿（1933: 278）的说法，“布尔代数”一词是由亨利·M·谢弗（1882-1964）在他展示了可以使用单一的基本运算——联合排斥（现在被称为谢弗符号）给出布尔代数的五方程公理化的论文中引入的（参见谢弗1913年的论文）。怀特海德和罗素在《*原理*》第二版的前言中声称，谢弗符号是自《*原理*》出版以来逻辑学最重要的进展。（相比之下，希尔伯特和阿克曼（1928年）则认为谢弗符号只是一种奇特的现象。）两位都没有意识到几十年前，舒尔德尔发现了谢弗符号的对偶也是一种运算——舒尔德尔为他的运算符号是双刃剑的形状。

在1930年代，加勒特·伯克霍夫（1911-1996）建立了等式逻辑的基本结果，即（1）代数的等式类恰好是在同态、子代数和直积下封闭的类，以及（2）等式逻辑基于五个规则：自反性、对称性、传递性、替换性和代入性。在1940年代，塔斯基加入了等式逻辑的发展；从1950年代至今，这个学科取得了快速进展。

## [9. 逻辑代数的发展]()

传统逻辑研究了类之间的某些简单关系，即“是子类”和“与非空交集”。然而，一旦采用公理化方法，除了显而易见的模型之外，还出现了可能的模型的主题。贝尔特拉米在19世纪60年代末引入了非欧几何的模型。在19世纪90年代，施罗德和戴德金德构建了格论公理的模型，以证明分配律不成立。但是，当涉及到类的代数时，施罗德只考虑了标准模型，即每个模型都是给定类的所有子类的集合。

布尔代数公理的一般模型的研究直到20世纪20年代末才开始；在马歇尔·哈维·斯通（1903-1989）的工作中，这一研究很快达到了非常高的水平（参见他的论文1936年，1937年）。他对线性算子环的结构感兴趣，并意识到与环中所有其他算子在乘法下交换（即，对于环中的所有L，EL = LE = L）且在乘法下幂等（EE = E）的中心幂等在其中起着重要作用。中心幂等以一种自然的方式形成了一个布尔代数。

追求这个研究方向使斯通开始探讨任意布尔代数的结构，他通过证明“每个布尔代数都同构于一个集合的布尔代数”来回答了这个问题。在他对布尔代数的研究中，他注意到同态的核与环论中研究的理想之间存在某种类比性，这使他将这些核命名为“理想”。不久之后，他发现了布尔代数和布尔环之间的一种对应关系；在这种对应关系下，布尔代数的理想与相关的布尔环的理想完全对应。他的下一个重要贡献是建立了布尔代数和某些拓扑空间之间的对应关系，现在称为布尔空间（或斯通空间）。这种对应关系后来证明是构建奇特布尔代数的有价值工具。斯通的这些结果仍然是逻辑代数发展的范例。

受到《逻辑代数》第三卷对于关系的一阵简短论述的启发，勒文海姆（1915年）证明了如果一个关于关系的一阶陈述在无限域中可以满足，那么它也可以在可数域中满足。1920年，索克勒姆（1887-1963年）通过引入索克勒姆标准形式简化了勒文海姆的证明，并在1928年用一个更简单的想法取代了标准形式，即使用现在称为索克勒姆函数的东西。他使用这些函数将一阶句子转化为全称句子，也就是说，转化为前束范式的句子，其中所有的量词都是全称量词（ **∀**  ∀）。

## [10. 索克勒姆：量词消除和可判定性]()

Skolem在他的博士论文中受到Schröder的《逻辑代数》的强烈影响。后来，他对在类的演算中寻找消除定理的问题产生了特别的兴趣。在他1919年的论文中，他为格子建立了一些结果，特别是他证明了可以通过一个我们现在认识到的多项式时间算法来决定普遍Horn句子（即，具有一个由否定和非否定原子的析取构成的矩阵，最多有一个正原子）的有效性。这个算法是基于在通用Horn句子中导出的产生规则下找到有限部分格子的最小不动点。尽管这个结果与Skolem对Löwenheim定理的著名贡献在同一篇论文中，但直到20世纪90年代初才被偶然重新发现。（Whitman（1941）为格子的更有限的等式决策问题提供了不同的解决方案；它被广泛称为格子的词问题的解决方案。）

Skolem（1920）通过展示如果为了表达“至少有n个元素”，添加谓词，对于每个n=1,2,…，那么有一个简单（但通常冗长）的过程可以将关于类的一阶公式转化为无量词的公式，从而给出了Schröder提出的类演算的消除问题的优雅解决方案。特别地，这表明了类演算的一阶理论是可判定的。Mostowski（1952）利用这个量词消除结果分析了单个结构的直积和直和的一阶性质，然后由Feferman和Vaught（1959）用于对结构的一般直和和直积进行相同的分析。

量词的消除成为数理逻辑中证明可判定性的主要方法，并且在希尔伯特和阿克曼（1928年）中，证明可判定性被提出作为数理逻辑的主要问题。然而，由于丘奇和图灵的著名不可判定性结果，这个目标在随后的版本中被放弃了。

## [11. 塔斯基和代数逻辑的复兴]()

模型论可以被看作是希尔伯特的元数学方法和逻辑代数传统的产物，特别是由Löwenheim和Skolem的结果代表。但是，正是塔斯基给予了这门学科其经典基础。模型论是研究形式语言与其在“实现”中的解释之间关系的学科（即，语言变量的域以及其原始符号的解释）。如果解释恰好使语言的一个句子陈述某个真实的事情，那么解释就是该句子的*模型*（参见[模型论条目](https://plato.stanford.edu/entries/model-theory/)）。模型基本上由代数结构组成，模型论成为一门独立的数学学科，其根源不仅在于逻辑代数，还在于抽象代数（参见Sinaceur 1999）。

除了模型论，塔斯基在他的1941年论文《关系演算》中复兴了关系代数。首先，他概述了一种基于允许对元素和关系进行量化的形式逻辑，然后他转向对该系统中仅涉及关系变量的无量词公式的更详细研究。在提出了一系列在Schröder的第三卷中明显成立的公理之后，他证明了这些公理使得可以将无量词关系公式化简为方程。因此，他的关系演算成为了对某种等式理论的研究，他指出这种理论与集合上的所有二元关系的研究之间具有与布尔代数的等式理论与集合的所有子集的研究之间相同的关系。这引发了与布尔代数已经提出并解决的问题类似的问题，例如，他的关系代数公理的每个模型是否同构于一个关于集合上的关系的代数？其中一个问题已经由Arwin Korselt（1864-1947）回答，即在二元关系理论中存在着不等价于关系演算中的方程的二阶句子，因此关系演算明显比关系的一阶理论具有较弱的表达能力。实际上，关系代数的表达能力与仅具有三个变量的一阶逻辑完全等价。然而，如果在关系代数（关系演算）中想要形式化具有诸如对偶公理之类的集合论，那么可以将许多变量化简为三个变量，因此可以通过方程来表达该理论的任何一阶陈述。Monk证明了，与类的演算不同，二元关系的演算没有有限的等式基础（参见Monk 1964）。塔斯基和吉万特（1987）表明，关系代数的等式逻辑是如此表达能力强大，以至于可以在其中进行一阶集合论。

此外，圆柱代数是在1948年至1952年间由塔斯基与他的学生Louise Chin和Frederick Thompson引入的，它本质上是布尔代数，配备了一元圆柱操作**C**x，旨在捕捉存在量词（ **∃**  x∃�）。这是为了创建一个逻辑代数，以捕捉一阶二元关系理论的表达能力（参见Henkin＆Tarski 1961）。多元代数是另一种用于一阶逻辑的逻辑代数方法，它是由Halmos（1956c）创建的。在这些系统中，工作的重点再次是看到在多大程度上可以与上世纪30年代布尔代数的著名结果相媲美。

## [Bibliography]()

### [Primary Sources]()

* Boole, G., 1847, *The Mathematical Analysis of Logic, Being an Essay Towards a Calculus of Deductive Reasoning*, Cambridge: Macmillan, Barclay, & Macmillan; reprinted Oxford: Basil Blackwell, 1951.
* –––, 1854, *An Investigation of The Laws of Thought on Which are Founded the Mathematical Theories of Logic and Probabilities*, London: Macmillan; reprint by Dover 1958.
* –––, 1997. *Selected Manuscripts on Logic and its Philosophy*, Ivor Grattan-Guinness and Gérard Bornet (eds.), Basel, Boston, Berlin, Birkhäuser: Springer.
* Couturat, Louis, 1905, *L’Algèbre de la Logique*, Paris: Gauthier-Villars; 2^nd^ edition, Paris: Blanchard 1980.
* Dedekind, R., 1897, “Über Zerlegungen von Zahlen durch ihre grössten gemeinsamen Teiler”, reprinted in *Gesammelte mathematische Werke* (1930–1932), 2: 103–147.
* –––, 1930–1932, *Gesammelte mathematische Werke*, Robert Fricke, Emmy Noether, Öystein Ore (eds.), Braunschweig: Friedr. Vieweg & Sohn.
* De Morgan, A., 1847, *Formal Logic: or, the Calculus of Inference, Necessary and Probable*, London: Taylor and Walton; reprinted London: The Open Court Company 1926.
* –––, 1966, *On the Syllogism and Other Logical Writings*, a posthumous collection of De Morgan’s papers on logic, edited by Peter Heath, New Haven: Yale University Press.
* Feferman, S. and R.L. Vaught, 1959, “The first order properties of products of algebraic systems”, *Fundamenta Mathematica*, 47: 57–103.
* Frege, F., 1879, *Begriffsschrift: eine der arithmetischen nachgebildete Formelsprache des reinen Denkens*, Halle a. S.: Louis Nebert.
* –––, 1884, *Die Grundlagen der Arithmetik:eine logisch-mathematische Untersuchung über den Begriff der Zahl*, Breslau: W. Koebner.
* –––, 1893/1903, *Grundgesetze der Arithmetik, begriffsschriftlich abgeleitet*, 2 vols, Jena: Verlag Hermann Pohle.
* Halmos, P.R., 1956a, “Algebraic logic. I. Monadic Boolean algebras”, *Compositio Mathematica*, 12: 217–249.
* –––, 1956b, “The basic concepts of algebraic logic”, *American Mathematical Monthly*, 63: 363–387.
* –––, 1956c, “Algebraic logic. II. Homogeneous locally finite polyadic Boolean algebras of infinite degree”, *Fundamenta Mathematica*, 43: 255–325.
* –––, 1956d, “Algebraic logic. III. Predicates, terms, and operations in polyadic algebras”, *Transactions of the American Mathematical Society*, 83: 430–470.
* –––, 1957, “Algebraic logic. IV. Equality in polyadic algebras”, *Transactions of the American Mathematical Society*, 86: 1–27.
* –––, 1962, *Algebraic logic*, New York: Chelsea Publishing Co.
* Henkin, L. and J.D. Monk, 1974, “Cylindric algebras and related structures”, in L. Henkin et al. (eds.), *Proceedings of the Tarski Symposium*, Proceedings of Symposia in Pure Mathematics, vol. XXV, Providence, RI: American Mathematical Society, pp. 105–121.
* Henkin, L. and A. Tarski, 1961, “Cylindric algebras”, in *Lattice Theory, Proceedings of Symposia in Pure Mathematics 2*, R. P. Dilworth (ed.), Providence, RI: American Mathematical Society, pp. 83–113.
* Hilbert, D., 1899, *The Foundations of Geometry*; reprinted Chicago: Open Court 1980, 2^nd^ edition.
* Hilbert, D. and W. Ackermann, 1928, *Grundzüge der theoretischen Logik*, Berlin: Springer.
* Huntington, E.V., 1904, “Sets of independent postulates for the algebra of logic”, *Transactions of the American Mathematical Society*, 5: 288–309.
* –––, 1933, “New sets of independent postulates for the algebra of logic, with special reference to Whitehead and Russell’s Principia Mathematica”, *Transactions of the American Mathematical Society*, 35(1): 274–304.
* Jevons, W.S., 1869, *The Substitution of Similars, the True Principle of Reasoning, Derived from a Modification of Aristotle’s Dictum*, London: Macmillan and Co.
* –––, 1870, *Elementary Lessons in Logic, Deductive and Inductive*, London: Macmillan & Co.; reprinted 1957.
* –––, 1874, *The Principles of Science, A Treatise on Logic and the Scientific Method*, London and New York: Macmillan and Co.; reprinted 1892.
* –––, 1880, *Studies in Deductive Logic. A Manual for Students*, London and New York: Macmillan and Co.
* –––, 1883, *The Elements of Logic*, New York and Chicago: Sheldon & Co.
* –––, 1890, *Pure Logic and Other Minor Works*, Robert Adamson and Harriet A. Jevons (eds), New York: Lennox Hill Pub. & Dist. Co.; reprinted 1971.
* Jónsson, B. and A. Tarski, 1951, “Boolean Algebras with Operators. Part I”, *American Journal of Mathematics*, 73(4): 891–939.
* Kolata, G., 1996, “Computer Math Proof Shows Reasoning Power”, *The New York Times*, December 10 (Technology Section, Cybertimes Column). [[Available Online](http://www.nytimes.com/library/cyber/week/1210math.html)]
* Löwenheim, L., 1915, “Über möglichkeiten im Relativkalül”, *Mathematische Annalen*, 76(4): 447–470.
* –––, 1940, “Einkleidung der Mathematik in Schröderschen Relativkalkul”, *Journal of Symbolic Logic*, 5: 1–17.
* Macfarlane, A., 1879, *Principles of the Algebra of Logic. With Examples*, Edinburgh: David Douglas.
* Monk, J. D., 1964, “On Representable Relation Algebras”, *The Michigan Mathematical Journal*, 11: 207–210.
* Mostowski, A., 1952, “On direct products of theories”, *Journal of Symbolic Logic*, 17: 1–31.
* Peirce, C.S., 1867, “On an Improvement in Boole’s Calculus of Logic”, *Proceedings of the American Academy of Arts and Sciences*, 7: 250–261; reprinted in Peirce 1933 [CP], vol. III, pp. 1–19.
* Peirce, C.S., 1870, “Description of a notation for the logic of relatives, resulting from an amplification of the conceptions of Boole’s calculus of logic”, *Memoirs of the American Academy*, 9: 317–378; reprinted in *Collected Papers* 1933: Volume III, 27–98.
* –––, 1880, “On the algebra of logic. Chapter I: Syllogistic. Chapter II: The logic of non-relative terms. Chapter III: The logic of relatives”, *American Journal of Mathematics*, 3: 15–57; reprinted in *Collected Papers* 1933: Volume III, 104–157.
* –––, 1885, “On the Algebra of Logic: A Contribution to the Philosophy of Notation”, *American Journal of Mathematics* 7(2): 180–202; reprinted in *Collected Papers* 1933: Volume III, 359–403.
* –––, 1933 [CP], *Collected Papers*, Charles Hartshorne and Paul Weiss (eds.), Cambridge: Harvard University Press.
* Schröder, E., 1890–1910, *Algebra der Logik, Vols. I–III*; reprint Chelsea 1966.
* Sheffer, H.M., 1913, “A set of five independent postulates for Boolean algebras, with application to logical constants”, *Transactions of the American Mathematical Society*, 14(4): 481–488.
* Skolem, T., 1919, “Untersuchungen über die Axiome des Klassenkalküls und Über Produktations- und Summationsprobleme, welche gewisse Klassen von Aussagen betreffen”, *Videnskapsselskapets skrifter, I. Matematisk-naturvidenskabelig*, klasse 3; reprinted in Skolem 1970: 66–101.
* –––, 1920, “Logisch-kombinatorische Untersuchungen über die Erfülbarkeit oder Beweisbarkeit mathematischer Sätze nebst einem Theoreme über dichte Menge”, *Videnskapsselskapets skrifter, I. Matematisk-naturvidenskabelig*, klasse 6: 1–36.
* –––, 1922, “Einige Bemerkungen zur axiomatischen Begrundung der Mengenlehre”, *Matematikerkongressen i Helsingfors den 4–7 Juli 1922, Den femte skandinaviska matematikerkongressen, Redogörelse*, Helsinki: Akademiska Bokhandeln; reprinted in Skolem 1970: 189–206.
* –––, 1928, “Über die mathematische Logik”, *Norsk Mathematisk Tidsskrift*, 10: 125–142; in van Heijenoort 1967: 508–524.
* –––, 1970, *Selected Works in Logic*, Oslo: Universitetsforlaget.
* Stone, M.H., 1936, “The theory of representations for Boolean algebras”, *Transactions of the American Mathematical Society*, 40(1): 37–111.
* –––, 1937, “Applications of the theory of Boolean rings to general topology”, *Transactions of the American Mathematical Society*, 41(3): 375–481.
* Tarski, A., 1941, “On the calculus of relations”, *The Journal of Symbolic Logic*, 6(3): 73–89
* Tarski, A. and S. Givant, 1987, *Set Theory Without Variables*, (Series: Colloquium Publications, Volume 1), Providence: American Mathematical Society.
* Whitehead, A.N., and B. Russell, 1910–1913, *Principia Mathematica I–III*, Cambridge: Cambridge University Press.
* Whitman, P.M., 1941, “Free lattices”, *Annals of Mathematics*, second series, 42(1): 325–330.
* Wiener, N., 1913, *A Comparison between the treatment of the algebra of relatives by Schroeder and that by Whitehead and Russell*, Ph.D. thesis, Harvard University (Norbert Wiener Papers. MC 22. Institute Archives and Special Collections, MIT Libraries, Cambridge, Massachusetts).

### [Secondary Sources]()

* Badesa, Calixto, 2004, *The Birth of Model Theory. Löwenheim Theorem in the Frame of the Theory of Relations*, Princeton & Oxford: Princeton University Press.
* Brady, Geraldine, 2000, *From Peirce to Skolem*, Amsterdam et al.: North-Holland.
* Burris. Stanley & H.P. Sankappanavar, 2013, “The Horn Theory of Boole’s Partial Algebras”, *The Bulletin of Symbolic Logic*, 19(1): 97–105.
* Esquisabel, Oscar M., 2012, “Representing and Abstracting. An Analysis of Leibniz’s Concept of Symbolic Knowledge”, in Abel Lassalle Casanave (ed.), *Symbolic Knowledge from Leibniz to Husserl*, London: College Publications, pp. 1–49.
* Gabbay, Dov. M. & John Woods (eds.), 2004, *Handbook of the History of Logic. Volume 3, The Rise of Modern Logic: From Leibniz to Frege*, Amsterdam et al.: Elsevier North Holland.
* Grattan-Guinness, Ivor, 1991, “The Correspondence between George Boole and Stanley Jevons, 1863–1864”, *History and Philosophy of Logic*, 12(1): 15–35
* –––, 2000, *The Search for Mathematical Roots,1870–1940. Logic, Set Theories and the Foundations of Mathematics from Cantor trough Russell to Gödel*, Princeton & Oxford: Princeton University Press.
* Hailperin, Theodore, 2004, “Algebraical Logic 1685–1900”, in Gabbay & Woods 2004: 323–388.
* Haaparanta, Leila (ed.), 2009, *The Development of Modern Logic*, New York and Oxford: Oxford University Press.
* Heinemann, Anna-Sophie, 2015, *Quantifikation des Prädikats und numerisch definiter Syllogismus*, Münster: Mentis 2015.
* Legris, Javier, 2012, “Universale Sprache und Grundlagen der Mathematik bei Ernst Schröder”, in G. von Löffladt (ed.), *Mathematik – Logik – Philosophie. Ideen und ihre historischen Wechselwirkungen*, Frankfurt a. M.: Harri Deutsch, pp. 255–269.
* Mancosu, Paolo, Richard Zach, and Calixto Badesa, 2009, “The Development of Mathematical Logic from Russell to Tarski: 1900–1935”, in Haaparanta 2009: 318–471
* Peckhaus, Volker, 1997, *Logik, Mathesis universalis und allgemeine Wissenschaft*, Berlin: Akademie Verlag.
* –––, 2004, “Schröder’s Logic”, in Gabbay & Woods 2004: pp. 557–609.
* –––, 2009, “The Mathematical Origins of Nineteenth-Century Algebra of Logic”, in Haaparanta 2009: 159–195.
* Sánchez Valencia, Victor, 2004, “The Algebra of Logic”, in Gabbay & Woods 2004: pp. 389–544.
* Sinaceur, Hourya, 1999, *Corps et Modèles. Essai sur l’histoire de l’algèbre réelle*, 2^nd^ ed., Paris: Vrin.
* Styazhkin, N. I., 1969, *History of Mathematical Logic from Leibniz to Peano*, Cambridge, MA: MIT Press.
* Van Heijenoort, Jean, 1967, “Logic as Calculus and Logic as Language”, *Synthese*, 17: 324–330

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=algebra-logic-tradition).                                                     |
> | -------------------------------------------------------------------- | ------------------------------------------------------- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/algebra-logic-tradition/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/).                                             |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png)         | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=algebra-logic-tradition&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif)      | [Enhanced bibliography for this entry](https://philpapers.org/sep/algebra-logic-tradition/) at [PhilPapers](https://philpapers.org/), with links to its database.                     |

## [Other Internet Resources]()

[Please contact the author with suggestions.]

## [Related Entries]()

[algebra](https://plato.stanford.edu/entries/algebra/) | [Boole, George](https://plato.stanford.edu/entries/boole/) | [Leibniz, Gottfried Wilhelm: influence on 19th century logic](https://plato.stanford.edu/entries/leibniz-logic-influence/) | [model theory](https://plato.stanford.edu/entries/model-theory/) | [model theory: first-order](https://plato.stanford.edu/entries/modeltheory-fo/)

[Copyright © 2021](https://plato.stanford.edu/info.html#c) by
[Stanley Burris](http://www.math.uwaterloo.ca/~snburris/)
Javier Legris <*[javier.legris@gmail.com](mailto:javier%2elegris%40gmail%2ecom)*>
