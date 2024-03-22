# 逻辑代数的发展 algebra of logic tradition (Stanley Burris and Javier Legris)
*首次发表于2009年3月2日；实质性修订于2021年2月12日*

作为显示逻辑的基础数学结构的*逻辑代数*，是由乔治·布尔（1815-1864）在他的书籍《逻辑的数学分析》（1847年）中引入的一个*明确的*代数系统。因此，它与更一般的*代数逻辑*方法有所区别。布尔所开创的方法在19世纪得到了成功的延续，由威廉·斯坦利·杰文斯（1835-1882）、查尔斯·桑德斯·皮尔斯（1839-1914）、恩斯特·施罗德（1841-1902）等人的工作中继续发展，从而在（数学）逻辑中建立了一种传统。从布尔的第一本书开始，直到阿尔弗雷德·诺思·怀特海德（1861-1947）和伯特兰·罗素（1872-1970）在第一次世界大战后的影响下出版的巨著《数学原理》（1910-1913），逻辑代数的各种版本一直是最发达的数学逻辑形式，尤其是在施罗德的三卷本《逻辑代数讲义》（1890-1905）中所呈现的形式。此外，这一传统激发了莱奥波德·勒文海姆（1878-1957）的研究，最终催生了模型论。此外，1941年，阿尔弗雷德·塔斯基（1901-1983）在他的论文《关系演算》中回到了皮尔斯在施罗德的《逻辑代数》中所呈现的关系代数。逻辑代数的传统在“逻辑作为演算”概念与“逻辑作为通用语言”概念之间起到了关键作用。除了塔斯基的关系代数之外，逻辑代数传统的影响还可以在其他数学理论中找到，例如范畴论。然而，这种影响超出了本条目的范围，本条目分为10个部分。

- [1. 引言](https://plato.stanford.edu/entries/algebra-logic-tradition/#Int) - [2. 1847年-现代逻辑代数的起步](https://plato.stanford.edu/entries/algebra-logic-tradition/#a184BegModVerAlgLog) - [3. 1854年-布尔关于他的逻辑代数的最终呈现](https://plato.stanford.edu/entries/algebra-logic-tradition/#a185FinPreHisAlgLog) - [4. 杰文斯：基于总操作的逻辑代数](https://plato.stanford.edu/entries/algebra-logic-tradition/#JevAlgLogBasTotOpe) - [5. 皮尔斯：基于包容的逻辑代数](https://plato.stanford.edu/entries/algebra-logic-tradition/#PeiBasAlgLogSub) - [6. 德摩根和皮尔斯：逻辑代数中的关系和量词](https://plato.stanford.edu/entries/algebra-logic-tradition/#DeMorPeiRelQuaAlgLog) - [7. 施罗德对逻辑代数的系统化](https://plato.stanford.edu/entries/algebra-logic-tradition/#SchSysAlgLog) - [8. 亨廷顿：逻辑代数的公理研究](https://plato.stanford.edu/entries/algebra-logic-tradition/#HunAxiInvAlgLog) - [9. 斯通：逻辑代数的模型](https://plato.stanford.edu/entries/algebra-logic-tradition/#StoModForAlgLog) - [10. 斯科勒姆：量词消除和可决定性](https://plato.stanford.edu/entries/algebra-logic-tradition/#SkoQuaEliDec) - [11. 塔斯基与代数逻辑的复兴](https://plato.stanford.edu/entries/algebra-logic-tradition/#TarRevAlgLog) - [参考文献](https://plato.stanford.edu/entries/algebra-logic-tradition/#Bib) - [主要来源](https://plato.stanford.edu/entries/algebra-logic-tradition/#PriSou) - [次要来源](https://plato.stanford.edu/entries/algebra-logic-tradition/#SecSou) - [学术工具](https://plato.stanford.edu/entries/algebra-logic-tradition/#Aca) - [其他互联网资源](https://plato.stanford.edu/entries/algebra-logic-tradition/#Oth) - [相关条目](https://plato.stanford.edu/entries/algebra-logic-tradition/#Rel)

---

 ## 1. 简介

布尔的《逻辑数学分析》中介绍了许多有趣的逻辑创新：它标志着19世纪逻辑的数学化起步，并通过对传统逻辑的一些微小修改，提供了一种算法性的替代方法（即使后者中也有简化过程）。它不是基于有效的推理形式的列表，而是根据一般原则和规则来确定论证的有效性。此外，它提供了一种在公设系统上证明逻辑法则的有效方法。正如布尔后来所写，它是一门正确的“推理科学”，而不是传统修辞学（布尔1997：136）。在本书完成对三段论逻辑的讨论后的四分之三时，布尔开始开发通用工具，这些工具将在他的《思维法则》（1854）中被广泛应用，以允许一个论证有多个前提并涉及多个类别。为了处理这种扩展逻辑中可能的无限多个逻辑论证，他提出了一些定理，为算法分析提供了关键工具（目录已不再可行）。

布尔的思想是独立于早期的预期而产生的，就像G.W.莱布尼茨所发展的那些思想一样。它们源于英国数学的特定背景（参见Peckhaus 2009）。根据维克多·桑切斯·瓦伦西亚的说法，起源于布尔的传统被称为“逻辑代数”，自从亚历山大·麦克法兰于1879年出版了《逻辑代数原理》（参见桑切斯·瓦伦西亚2004年：389）。麦克法兰将“布尔提出的关于质量的分析推理方法”视为一种代数（参见麦克法兰1879年：3）。

这种方法与通常所称的“代数逻辑”不同；尽管存在一些重叠，但这两个领域的历史发展是不同的。代数逻辑被理解为：

*一种逻辑风格*，其中概念和关系通过数学符号来表达[...] 以便可以应用数学技术。在这里，数学主要指代数学，即与某个集合上的有限操作有关的数学部分。（Hailperin 2004: 323）

代数逻辑已经可以在莱布尼兹、雅各布·伯努利和其他现代思想家的作品中找到，它无疑构成了布尔方法的重要前身。从更广泛的视角来看，两者都是形式科学中*符号知识*传统的一部分，这个传统最初由莱布尼兹构思（参见Esquisabel 2012）。这种代数逻辑的思想在法国启蒙时期在康迪亚克和孔多塞的作品中得到了一定程度的延续（参见Grattan-Guinness 2000: 14 ff.）。

布尔处理逻辑问题的方法可以描述如下：

1. 将逻辑数据转化为适当的方程； 2. 应用代数技巧解决这些方程； 3. 如果可能，将解答重新转化为原始语言。

换句话说，逻辑问题的符号化表述和逻辑方程的解决构成了布尔的方法（见桑切斯·瓦伦西亚2004年：389）。

后来，在1864年的《纯粹逻辑》中，杰文斯将布尔的不相交集合的部分运算改为了现代的无限制并运算，并消除了布尔对不可解释术语的可疑使用（见杰文斯1890年）。皮尔斯（1880年）通过给出“所有A都是B”的现代含义，明确消除了亚里士多德从普遍命题到特殊命题的推导。此外，他将逻辑代数从类的逻辑扩展到了二元关系的逻辑代数，并引入了一般求和和乘积来处理量化。取材于赫尔曼（1809-1877）和罗伯特·格拉斯曼（1815-1901）先前的工作，并使用皮尔斯发展的框架，恩斯特·施罗德（Ernst Schröder）在他的三卷作品《关于逻辑代数的课程》（1890-1910）中对19世纪的逻辑代数成果进行了发展和系统化。

哥特洛布·弗雷格（1848-1925）在1879年至1903年期间对逻辑的贡献，基于公理化的逻辑方法，当时几乎没有影响力（同样可以说，C.S.皮尔斯在世纪之交开发的图解系统也是如此）。怀特海德和罗素拒绝了逻辑代数方法，其主要是等式形式和代数符号，而是采用了弗雷格公理系统的方法，使用乔治·皮亚诺开发的符号表示，即使用逻辑连接词、关系符号和量词。

在20世纪前两个十年中，逻辑代数在普拉东·谢尔盖耶维奇·波列茨基（1846-1907）、路易·库图拉（1868-1914）、莱奥波德·勒文海姆（1878-1957）和海因里希·贝曼（1891-1970）的作品中得到进一步发展（参见斯蒂亚金1969年）。特别是逻辑代数中的消除定理影响了一阶和二阶逻辑的决策过程（参见曼科苏、扎克、巴德萨2009年）。

第一次世界大战后，起初采用代数方法的大卫·希尔伯特（1862-1943）转而采用了《原理》的方法，逻辑代数逐渐不受青睐。然而，1941年，塔斯基将关系代数视为一个等式定义的类。这样的类除了考虑到19世纪的“给定宇宙上的所有二元关系的集合”之外，还有许多模型，就像19世纪研究的布尔代数中有许多布尔代数一样。在1948年至1952年期间，塔斯基与他的学生钦和汤普森创造了圆柱代数作为一阶逻辑的代数逻辑伴侣，而在1956年，保罗·哈尔莫斯（1916-2006）引入了多元代数以达到同样的目的。正如哈尔莫斯（1956 b、c和d）所指出的，这些新的代数逻辑倾向于研究它们捕捉一阶逻辑的程度以及它们的通用代数方面，如公理化和结构定理，但对于激发它们创造的一阶逻辑的本质提供了很少的洞察。

## 2. 1847年——现代版本的逻辑代数的起源

在1847年末，布尔（Boole）和奥古斯都斯·德·摩根（Augustus De Morgan，1806-1871）各自出版了一本关于逻辑的书籍——布尔的《逻辑的数学分析》（1847年）和德·摩根的《形式逻辑》（1847年）。德·摩根的方法是将传统演绎逻辑（通常称为“亚里士多德逻辑”）的每个方面都剖析成最微小的组成部分，考虑如何概括这些组成部分，然后在某些情况下，利用这些组成部分构建一个逻辑系统。不幸的是，他从未能将自己最好的想法融入到一个重要的系统中。他没有引入一个表示相等的符号，这使得发展逻辑的等式代数成为不可能。德·摩根似乎不擅长综合。

德·摩根在1847年的著作是逻辑研究复兴的一部分，这一复兴始于19世纪初的法国约瑟夫·迪埃斯·热尔贡（Joseph Diez Gergonne，1771-1859）和波希米亚的伯恩哈德·博尔扎诺（Bernhard Bolzano，1781-1848），以及其他一些人的努力。英国的乔治·本特姆（George Bentham）和威廉·汉密尔顿（William Hamilton）也参与了这一复兴，他们的研究重点是传统三段论中范畴句的变体性质，包括所谓的“谓词的量化”；例如，“所有的A都是一些B”或“一些A都是所有的B”。人们认为这个问题需要对亚里士多德的三段论逻辑进行扩展，并且需要某种形式的符号方法来处理这些陈述，并对它们的不同类型进行分类（参见Heinemann 2015年第2章和第3章）。

布尔从完全不同的角度来看待逻辑，即如何将亚里士多德逻辑转化为符号代数的形式。使用符号代数是他在微分方程研究中熟悉的主题，也是他年轻朋友和导师邓肯·法夸尔森·格雷戈里（1813-1844）的各种论文中的尝试，他试图将几何等其他学科转化为符号代数的语言。由于将符号代数应用于微分方程是通过引入微分算子进行的，所以布尔自然会寻找适用于亚里士多德逻辑领域的算子。他很快想到了使用“选择”算子的想法，例如，红色的选择算子将从一个类中选择红色成员。在他的1854年的书中，布尔意识到省略选择算子并直接使用类更为简单。（然而，他保留了选择算子，以证明他的逻辑法则并不是最终基于对语言使用的观察，而是深深扎根于人类思维的过程。）从现在开始，在本文讨论布尔的1847年的书时，选择算子已被更简单的直接表述使用类的方式取代。

由于符号代数只是普通代数的句法方面，布尔需要找到解释代数的常规运算和常数的方法，以创建他的逻辑代数。乘法被解释为交集，导致了他的一个新法则，幂等律 XX=X ，这是莱布尼兹已经提出的一个逻辑法则。加法被定义为并集，前提是处理的是*不相交*的类；减法被定义为类的差集，前提是从一个类中减去一个子类。在其他情况下，加法和减法运算是未定义的，或者如布尔所写的，*无法解释的*。算术的通常法则告诉布尔，1必须是全集，而 1−X 必须是 X 的补集。

布尔系统的下一步是将四种范畴命题翻译成方程，例如“所有的X都是Y”变成了X=XY，而“一些X是Y”变成了V=XY，其中V是一个新的符号。为了消除三段论中的中项，布尔从普通代数中借用了一个消除定理，但对于他的逻辑代数来说，这个定理太弱了。这个问题在他1854年的书中得到了解决。布尔发现，他不能总是通过上述特定命题的翻译（即具有存在意义的命题）推导出所需的结论，因此他添加了变体X=VY，Y=VX和VX=VY（参见[布尔](https://plato.stanford.edu/entries/boole/)条目）。

19世纪的符号代数不仅包括多项式代数，布尔还尝试了哪些结果和工具适用于逻辑代数。例如，他通过使用无限级数展开证明了他的一个结果。他对普通代数的可能性的着迷使他考虑了诸如：如果幂等律被替换为X3=X，逻辑会变成什么样子？他的继任者，特别是杰文斯，很快将类的运算缩小到我们今天使用的并集、交集和补集。

正如前面提到的，在他1847年的简短著作中，布尔在完成他系统中传统亚里士多德三段论的推导后，宣布他的逻辑代数能够应用于更广泛的领域。然后，他继续添加了关于展开术语的一般定理，提供了方程的解释，并使用长除法将一个类别在方程中表示为其他类别（附加了一些条件）。

布尔的定理在1854年得到完善，为分析无限多个论证形式提供了算法。这开辟了一种新的、富有成果的视角，偏离了传统的逻辑方法，几个世纪以来，学者们一直努力想出巧妙的记忆法来记住一小部分有效的转换和三段论及其各种相互关系。

德摩根的《形式逻辑》没有获得显著的认可，主要是因为它是一大堆没有显著综合的小事实。布尔的《逻辑的数学分析》有强大的方法，引起了德摩根和亚瑟·凯利等几位学者的注意；但是马上就有了关于布尔逻辑代数运作的严重问题：它与普通代数有多么密切的联系？布尔如何证明他的逻辑代数的过程？回顾来看，布尔显然不知道他的系统为什么有效。他跟随格雷戈里的主张，即为了证明使用普通代数是足够的，只需检查乘法的交换律XY=YX和分配律X(Y+Z)=XY+XZ是否成立，这显然是错误的。然而，他也很有可能在足够多的案例中核对了他的结果，以证明他的系统是正确的。

## 3. 1854年—布尔对他的逻辑代数的最后演示

在他的第二本书《思维的法则》中，布尔不仅将代数方法应用于传统逻辑，还试图对逻辑进行一些改革。他首先扩充了他在1847年逻辑代数中的法则（并没有明确表示他之前的三个公理列表是不足的），并对推理规则（在等式的两边执行相同的操作）发表了一些评论。但然后他随意地陈述，他的系统的基础实际上是建立在一个（新的）原则上的，即只需检查一个论证是否正确，当类符号仅取值0和1时，并且操作是通常的算术运算。让我们称之为“布尔的0和1法则”。对于布尔采用这个新基础的有意义的理由没有给出，它也没有被赋予特殊的名称，并且在书的其余部分对它的引用通常表达得相当笨拙。关于这个“0和1法则”的现代分析，请参见Burris＆Sankappanavar 2013年的著作。

在《思维的法则》中，逻辑代数的发展与他在1847年的书中基本相同，只是对翻译方案进行了一些小的改变，并用类替换了选择运算符。有一个新的非常重要的定理（纠正了他在1847年使用的定理），即消除定理，它表明：对于类符号x，y，z等的方程F(x,y,z,...)=0，通过消除某些类符号得到的最一般结论是通过（1）以所有可能的方式将0和1代入F(x,y,z,...)中要消除的符号，然后（2）将这些不同的替代实例相乘，并将乘积设为0。因此，从F(x,y,z)=0中消除y和z得到F(x,0,0)F(x,0,1)F(x,1,0)F(x,1,1)=0。这个定理在布尔对亚里士多德的三段论的解释中也起到了重要的作用。

从逻辑代数的角度来看，1854年的处理方法在某些时候似乎不如1847年的书中那样优雅，但它更深入地揭示了布尔对他的逻辑代数基础的思考。关于逻辑的最后一章，第15章，是试图给出亚里士多德的转换和三段论的统一证明的尝试。（有趣的是，在第15章之前，布尔没有提供任何涉及特定命题的论证示例。）第15章的细节非常复杂，主要是因为应用了消去和展开定理后表达式的增大。布尔只是把大部分工作留给读者。后来的评论家们对这一章进行了概述，似乎没有人仔细研究过其中的细节。

除了0和1的规则和消去定理之外，1854年的演示主要有趣的是布尔试图为他的逻辑代数辩护。他认为，在符号代数中，只要前提和结论中的术语是可解释的，就可以像处理完全运算一样进行等式推导，即使操作是部分的也是可以接受的。他说这就是普通代数处理不可解释的-1的方式，就像处理复数的几何解释一样。（复数的几何解释早在Wessel、Argand和Gauss的时代就被认可了，但直到1830年代Gauss和Hamilton的出版物出现后，复数在更大的数学界中的可接受性才得到克服。有趣的是，在1854年，布尔将-1的平方根视为不可解释的。）

关于布尔对逻辑代数的方法，存在一些问题：

1. 他的逻辑代数与数字代数之间是否有意义的联系，还是仅仅是它们如此相似的偶然？2. 在一个专注于方程的代数逻辑中，是否能处理特定的命题？3. 在方程推导中使用无法解释的术语是否真的可接受？4. 布尔是否使用了“亚里士多德式”的语义（传统逻辑中预设的语义，其中术语的扩展是非空的）？

## 4. 杰文斯：基于全面运算的逻辑代数

杰文斯曾在德·摩根的指导下学习，他是第一个提出与布尔系统不同的替代方案的人。1863年，他致信布尔，认为布尔的加法运算应该被更自然的“包容或”（或“并集”）所取代，从而得出X+X=X的法则。布尔完全拒绝了这个建议（因为这将破坏他基于普通代数的系统），并中断了通信。杰文斯在他1864年的著作《纯粹逻辑》中发表了他的系统（见杰文斯1890年的再版）。他所谓的“纯粹”是指他摒弃了对数字代数的依赖，而是使用与数量相关的类别代替，使用与质量相关的谓词，并且他的法则直接从包容的析取和合取的（全面的）基本运算中推导出来。但他保留了布尔在他的逻辑代数中将方程式作为陈述的基本形式的用法。

通过采用德摩根的约定，使用大写/小写字母表示补集，杰文斯的系统不适合为现代布尔代数提供等式公理。然而，他改进了他的公理系统和推理规则，直到结果基本上成为现代布尔代数的系统，适用于“基本术语”，即将类符号视为常量而不是变量的术语。

必须注意到，现代等式逻辑处理“全称量化”的等式（在19世纪被称为“定律”）。在19世纪的逻辑代数中，可以将“所有X都是Y”翻译为方程X=XY。这不应被视为全称量化表达式(∀X)(∀Y)(X=XY)。X和Y应被视为常量（或示意字母）。只包含常量（没有变量）的术语称为“基本”术语。

通过在谓词代数（或等价地，在类代数）的特殊环境中进行这种分析，杰文斯在现代等式逻辑的发展中起到了重要作用。正如前面提到的，布尔为他的系统提供了不充分的等式公理集，最初是从格雷戈里的两个定律开始，再加上他的幂等律；这些定律伴随着德摩根的推理规则，即可以对等式进行相同的操作（布尔在他的逻辑代数中的基本运算是加法、减法和乘法），并得到相等的结果。然后，布尔转而使用简单而强大（但未解释的）的0和1规则。

杰文斯用总运算取代了布尔的基本运算，并在多年的时间里致力于他的系统的公理和规则。我们现在认为理所当然的一些等式逻辑元素，杰文斯花了很多年才解决：

*反身律*（A=A）。1864年，杰文斯将其列为一个公设（1890年，第11页），然后在第24节中将A=A称为“无用的同一命题”。在他1869年关于替代的论文中，它成为了“同一律”。在《科学原理》（1874年）中，它是三个“思维基本定律”之一。

*对称律*（B=A推导自A=B）。1864年，杰文斯写道“A=B和B=A是同一命题”。这是他坚持的立场。1874年，他写道

我将考虑两种形式A=B和B=A，它们表达了完全相同的身份，只是以不同的方式书写。

对于他的逻辑代数的最终形式，我们转向他在《科学原理》（1874年）中分散在40页上的定律，他用⋅∣⋅取代了之前使用的+，显然是为了进一步远离与数字代数的任何联系

 组合法则

AABA⋅∣⋅AA⋅∣⋅BA(B⋅∣⋅C)=AA=AAA=&c=BA=A=B⋅∣⋅A=AB⋅∣⋅AC简易法则（第33页）交换律（第35页）统一法则（第72页）交换律（第72页）（未给出名称）（第76页）

 思维定律

AAaA=A=o=AB⋅∣⋅Ab同一律（第74页）矛盾律（第74页）对偶律（第74页）

对于他的推理规则，杰文斯选择了他的替换原则——用现代术语来说，这本质上是地面替换和传递性的结合。他展示了如何从中推导出等式的传递性；他本可以推导出对称性，但没有这样做。结合律缺失了——这在他的表达式中没有括号中隐含着。

直到他的《演绎逻辑研究》（1880）中，杰文斯才提到麦考尔使用重音符号表示否定。在指出麦考尔的重音符号允许我们对复杂的括号项取否定之后，他继续说，大部分情况下，他发现德摩根的符号，也就是他一直使用的符号，更加优雅。

## 5. 皮尔斯：在包含关系中奠定逻辑代数的基础

皮尔斯在19世纪60年代末开始对逻辑代数进行研究。在他的论文《关于补尔逻辑演算的改进》（皮尔斯 1867）中，他独立地得出与杰文斯早先得出的相同结论，即需要用并集的整体操作来取代补尔的部分操作（参见CP 3.3.6）。在他重要的1880年论文《逻辑代数》，皮尔斯悄然与传统的外延语义划清界限，并引入了现代语义学的常见假设：一个概念的外延，即类，可以为空（以及宇宙），并陈述了我们今天使用的范畴命题的真值。例如，他说“所有A是B”的命题如果A和B都是空类，则为真。从而，按限制转换，即论证“所有A是B”，因此“一些B是A”，不再是有效的推理。皮尔斯对他远离传统存在语义假设的原因和价值未作任何说明。

皮尔斯也与布尔和杰文斯对等号的使用分道扬镳，取而代之使用可解释为不同方式的“包含”关系（子类关系、蕴涵等）。他阐述了“包含”的偏序特性，然后定义了+和×的运算作为最小上界和最大下界，他默认存在这样的界限，并列出了我们现在称之为格的两个二元运算的关键等式性质。然后他声称分配律成立，但是说证明步骤太繁琐，不包含在内。这一观点的多产性在他1885年的重要论文中显而易见。在那里，皮尔斯提出了一个基于五个蕴涵公理（用符号“−<”表示）的命题逻辑系统，其中包括现在称为皮尔斯定律的内容。它确实使逻辑代数更加优雅。

## 6. 德摩根和皮尔斯：关系和量词在逻辑代数中的运用

德摩根在1846年至1863年间写了一系列名为《论三段论》的六篇论文（收录于德摩根1966年版）。在他努力推广三段论的过程中，德摩根在该系列的第二篇论文中（1850年）用一个普遍的二元关系取代了连词“是”。通过允许三段论的前提中存在不同的二元关系，他引入了两个二元关系的组合来表达三段论的结论。在追求广义三段论的过程中，他还引入了二元关系的其他各种运算，包括逆运算，并为这些运算开发了一个片段的演算法。他在这个主题上的主要论文是该系列的第四篇，名为《论三段论，第四篇，以及关系的逻辑》，发表于1859年（详见德摩根1966年版）。

在德摩根的论文之后，皮尔斯在他的1870年的论文《关系逻辑符号的描述，源于布尔逻辑演算法概念的扩展》中，将布尔的工作推广到了二元关系的领域——在二元关系中，除了并、交和补之外，还有组合和逆的自然运算。二元关系被定义为一组有序对（见3.328）。他在1870年至1883年间致力于这个新的演算法。与德摩根一样，皮尔斯还考虑了许多其他关系的自然运算。皮尔斯在这个主题上的主要论文是《关于逻辑代数》（1880年）。通过使用无限制的并集（用Σ表示）和无限制的交集（用Π表示），皮尔斯在他的逻辑代数中引入了量词。

在1882年的一篇论文《关系代数的简要描述》中，重新印刷于德摩根1966年的著作中，他使用这些量词通过对某种系数的操作来定义关系的操作。德摩根因引入关系的概念而受到赞誉，但皮尔斯被认为是关系理论的真正创造者（参见，例如，塔斯基1941年：73）。然而，皮尔斯并没有发展这个理论。正如卡利克斯托·巴德萨所写的那样，“关系的演算从来不是皮尔斯所喜欢的”（巴德萨2004年：32）。他认为由于类操作与关系操作的结合，它过于复杂。相反，他从1885年开始更喜欢发展一个包括量词但不包括关系操作的“一般代数”。通过这种方式，他得到了现在称为一阶逻辑的基础和非正式的表达（参见巴德萨2004年，*loc. cit.*）。

## 7. 施罗德对逻辑代数的系统化

德国数学家恩斯特·施罗德在逻辑代数传统中扮演了关键角色。一个很好的例子是他向皮尔斯提出挑战，要求他证明分配律，作为具有两个二元运算的代数的关键等式性质之一。皮尔斯（1885年）承认他无法提供证明。多年后，亨廷顿（1904年：300-301）描述了他在1903年12月收到的皮尔斯来信的部分内容，声称提供了缺失的证明 - 显然是在施罗德于1902年去世后，皮尔斯偶然发现了这些失落已久的页面。皮尔斯向亨廷顿解释说，他最初认为施罗德的挑战是有根据的，而他的论文中的这个明显缺陷“将被添加到由于流感而充斥其中的错误清单中...”。实际上，皮尔斯的证明并没有纠正这个错误，因为分配律在普遍的格中并不成立；相反，他的证明引入了补运算 - 他使用了公理

> 如果a不包含在b的补集中，则a和b有一个共同的下界。

基于他之前的代数工作，Schröder在19世纪末写了一本百科全书式的三卷作品，名为《逻辑代数讲义》（1890-1905），以皮尔斯提出的现代类语义为基础，建立在包容框架上。这项工作是他在代数领域的研究成果，揭示了不同的影响。Schröder的目标是建立一个应用于许多数学领域的通用代数理论，其中逻辑代数是核心。正如Geraldine Brady指出的，它提供了抽象格理论的首次阐述，是Dedekind之后对链理论的首次阐述，是关系演算最全面的发展，并基于关系演算对数学基础进行了处理（参见Brady 2000: 143 f.）。

第一卷涉及类的等式逻辑，主要结果是布尔的1854年消除定理。在附录中出现了三个相当复杂的反例，用于反驳Peirce关于分配律的主张，其中一个涉及九百九十个四元群的恒等式。基于这一卷，Dedekind（1897）构建了一个优雅的现代抽象格理论（他称之为“Dualgruppen”）；在这篇论文中，他提出了一个五元素的反例，用以反驳Peirce的分配律主张。

第二卷扩展了第一卷中发展的逻辑代数，以便处理存在性陈述。首先，根据现代语义，Schröder证明了不能使用方程来表达“某个X是Y”。然而，他指出可以用否定的方程很容易地表达它，即XY≠0。第二卷是对使用方程和否定方程的类的微积分的研究，试图涵盖第一卷中涵盖的相同主题，特别是在寻找消除定理方面付出了相当大的努力。在处理了几个特殊情况之后，Schröder将这个主题推荐为一个重要的研究领域——寻找消除定理的探索被称为消除问题。

受Peirce的工作的主要启发，Schröder在他的《逻辑代数讲义》第三卷中研究了二元关系的逻辑代数。正如Tarski曾指出的那样，Peirce的工作在Schröder那里得到了非常全面和系统的延续和扩展。对他来说，一个特别迷人的问题是：在这个代数中给定一个方程E(x,y,z,...)=0，找到一个关系符号（比如x）的一般解，用其他关系符号表示。他设法在给定一个特定解x=x0的情况下，找到一个非凡的术语S(t,y,z,...)，具有以下特性：(1) x=S(t,y,z,...)对于任何关系t的选择都是方程E=0的解，(2) 方程E=0的每个解x都可以通过选择适当的t以这种方式获得。Peirce对Schröder对解方程问题的过度关注并不感到印象深刻，并指出Schröder的参数解是一个小把戏——逻辑代数对于关系的表达能力非常强大，通过评估术语S(t,y,z,...)实际上就是执行检查E(t,y,z,...)=0的步骤；如果答案是肯定的，那么S(t,y,z,...)返回值t，否则返回值x0。

总结一下，Schröder构建了现代谓词逻辑的代数版本，还构建了关系理论。他将其应用于不同领域（例如，康托尔的集合论），并将他的代数符号视为一种通用或普遍语言（*pasigraphy*，参见Peckhaus 2004和Legris 2012）。值得注意的是，Löwenheim在1940年仍然认为这与集合论一样合理。根据他的观点，Schröder解决关系方程的想法是Skolem函数的先驱，而Schröder启发了Löwenheim对著名定理的表述和证明，即每个具有无限模型的“算术”句子都有一个可数模型。Schröder的关系演算是Norbert Wiener（1894-1964）在哈佛大学的博士论文的基础（Wiener 1913）。根据Brady的说法，Wiener首次对关系演算进行了公理化处理，比Tarski的公理化处理早了二十多年（参见Brady 2000: 165）。

## 8. Huntington: 逻辑代数的公理研究

在19世纪末，大卫·希尔伯特（1862-1943）在他的《几何学基础》中提出了欧几里得几何作为一门公理化学科，不依赖于图示来证明（希尔伯特1899）。这引发了对数学中公理系统的研究的浪潮；特别是人们想知道这些公理是否是独立的，以及哪些基本原理能够导致最优雅的系统。爱德华·弗米利耶·亨廷顿（1874-1952）是最早研究逻辑代数这个问题的人之一。他给出了逻辑代数的三个公理化形式，证明了每组公理都是独立的，并且它们是等价的（参见亨廷顿1904）。1933年，他又提出了三组新的公理，其中一组包含了以下三个方程式（1933: 280）：

a+b(a+b)+c(a′+b′)′+(a′+b)′=b+a=a+(b+c)=a.

在此之后不久，Herbert Robbins（1915-2001）猜测第三个方程可以被稍微简化为

[(a+b)′+(a+b′)′]′=a.

亨廷顿和罗宾斯都无法证明这一点，后来它经受住了许多其他人的努力，包括塔尔斯基和他在伯克利的才华横溢的学派。基于温克尔的部分结果，由阿贡国家实验室的威廉·麦克肯设计的自动定理证明器EQP在1996年证明了罗宾斯猜想。这一成就在科拉塔2010年的著作中得到了广泛宣传。

根据亨廷顿（1933: 278）的说法，“布尔代数”一词是由亨利·M·谢弗（1882-1964）在他的论文中引入的，他在该论文中展示了可以使用联合排除的单一基本运算（现在被称为谢弗符号）给出布尔代数的五方程公理化。怀特海德和罗素在《*原理*》第二版的前言中声称，谢弗符号是自《原理》出版以来逻辑学的最大进展。（希尔伯特和阿克曼（1928）则表示谢弗符号只是一种奇特的现象。）两位都没有意识到几十年前，舒尔德尔已经发现了谢弗符号的对偶也是一种运算——舒尔德尔的符号是双刃剑的形状。

在1930年代，加勒特·伯克霍夫（1911-1996）确立了等式逻辑的基本结果，即（1）代数的等式类恰好是在同态、子代数和直积下封闭的类，以及（2）等式逻辑基于五个规则：自反性、对称性、传递性、替换和代入。在1940年代，塔斯基加入了这一等式逻辑的发展；从1950年代至今，这个学科取得了快速进展。

## 9. 斯通：逻辑代数的模型

传统逻辑研究了类之间的某些简单关系，即“是子类”和“具有非空交集”。然而，一旦采用公理化方法，除了显而易见的模型之外，还出现了可能的其他模型的话题。贝尔特拉米在19世纪60年代末引入了非欧几何的模型。在19世纪90年代，舒尔德和戴德金构建了格论公理的模型，以证明分配律不成立。但是，当涉及到类的代数时，舒尔德只考虑了标准模型，即每个模型都是给定类的所有子类的集合。

对布尔代数公理的一般模型的研究直到20世纪20年代末才开始；在马歇尔·哈维·斯通（1903-1989）的工作中，这一研究很快达到了非常高的水平（参见他的论文1936年，1937年）。他对线性算子环的结构感兴趣，并意识到中心幂等元（即与环中所有其他算子在乘法下交换的算子E（即EL=LE对于环中的所有L）并且在乘法下是幂等的（EE=E））起着重要作用。中心幂等元以一种自然的方式形成了布尔代数。

追求这个研究方向使斯通开始探讨任意布尔代数的结构，他通过证明“每个布尔代数都同构于一个集合的布尔代数”来回答这个问题。在他对布尔代数的研究中，他注意到同态核与环论中研究的理想之间存在某种类比，这使他将这种同态核命名为“理想”。不久之后，他发现了布尔代数和布尔环之间的一种转换；在这种转换下，布尔代数的理想与相关的布尔环的理想完全对应。他的下一个重要贡献是建立了布尔代数和现在称为布尔空间（或斯通空间）的某些拓扑空间之间的对应关系。这种对应关系后来被证明是构建奇特布尔代数的有价值工具。斯通的这些结果仍然是逻辑代数发展的范例。

受到《逻辑代数》第三卷对关系的一阶陈述的相对简短的处理的启发，勒文海姆（1915年）证明了如果这样的陈述在一个无限域中可以满足，那么它也可以在一个可数域中满足。1920年，索克勒姆（1887-1963）通过引入索克勒姆标准形式简化了勒文海姆的证明，并在1928年用一个更简单的想法取代了标准形式，即使用现在称为索克勒姆函数的东西。他使用这些函数将一阶句子转换为全称句子，也就是说，转换为前束范式的句子，其中所有的量词都是全称量词（∀）。

## 10. 斯科勒姆：量词消除和可决定性

斯科勒姆受到了舒尔德尔的《逻辑代数》的强烈影响，从他的博士论文开始。后来，他对在类的演算中寻求消除定理产生了特别的兴趣。在他1919年的论文中，他为格子建立了一些结果，特别是他证明了可以通过一个我们现在认识到的多项式时间算法来决定普遍Horn句子的有效性（即，具有一个由否定和非否定原子的析取构成的矩阵，最多只有一个正原子）。这个算法是基于在通用Horn句子的产生规则下找到一个有限偏序格子的最小不动点。尽管这个结果与斯科勒姆对勒文海姆定理的著名贡献在同一篇论文中，但直到1990年代初才被偶然重新发现。（惠特曼（1941年）对格子的更有限的等式决策问题提供了不同的解决方案；它被广泛称为格子的词问题的解决方案。）

Skolem（1920年）对Schröder提出的类演算的消除问题提供了一个优雅的解决方案，他通过展示如果添加谓词来表示“至少有n个元素”，其中n=1,2,…，那么就有一个简单（但通常很冗长）的过程可以将关于类的一阶公式转化为无量词的公式。特别是这表明了类演算的一阶理论是可判定的。Mostowski（1952年）利用这个量词消除结果分析了单个结构的直积和直和的一阶性质，然后Feferman和Vaught（1959年）对结构的一般直和和直积进行了相同的分析。

量词的消除成为数理逻辑中证明可判定性的主要方法，并且在Hilbert和Ackermann（1928年）中将证明可判定性作为数理逻辑的主要问题来阐述。然而，由于Church和Turing的著名不可判定性结果，这个目标在随后的版本中被放弃了。

## 11. 塔斯基与代数逻辑的复兴

模型论可以被看作是希尔伯特的元数学方法和逻辑代数传统的产物，特别是由Löwenheim和Skolem的结果所代表的。但是塔斯基给予了这门学科其经典的基础。模型论是研究形式语言与其在“实现”中的解释之间的关系（即，语言变量的域和其原始符号的解释）。如果解释恰好使得语言的一个句子陈述某个真实的事情，那么这个解释就是该句子的一个*模型*（参见[model theory](https://plato.stanford.edu/entries/model-theory/)条目）。模型基本上由代数结构组成，模型论成为一门独立的数学学科，其根源不仅在于逻辑代数，还在于抽象代数（参见Sinaceur 1999）。

除了模型论之外，塔斯基在他1941年的论文《关系演算》中复兴了关系代数。首先，他概述了一个基于对元素和关系进行量化的形式逻辑，然后他转向对该系统中仅涉及关系变量的无量词公式的更详细研究。在提出了一系列在关系代数中显然成立的公理之后，他证明了这些公理使得可以将无量词关系公式化简为方程。因此，他的关系演算成为了对某种等式理论的研究，他指出这种理论与对集合上的所有二元关系进行研究的布尔代数的等式理论具有相同的关系。这引发了与布尔代数已经提出并解决的问题类似的问题，例如，他关系代数的公理模型是否同构于一个关于集合上的关系代数？其中一个问题已经由阿尔温·科塞尔特（1864-1947）回答，即在二元关系理论中存在一阶句子，它们与关系演算中的方程不等价-因此，关系演算的表达能力明显比关系的一阶理论要弱。实际上，关系代数的表达能力与仅具有三个变量的一阶逻辑完全等价。然而，如果在关系代数（关系演算）中想要形式化一个具有诸如对偶公理之类的集合论，那么可以将许多变量化简为三个变量，因此可以通过方程来表达该理论的任何一阶陈述。蒙克证明了，与类的演算不同，二元关系的演算没有有限的等式基础（参见蒙克1964年）。塔斯基和吉万特（1987年）表明，关系代数的等式逻辑是如此表达能力强大，以至于可以在其中进行一阶集合论。

此外，圆柱代数是在1948年至1952年间由塔斯基与他的学生Louise Chin和Frederick Thompson（参见Henkin＆Tarski 1961年）引入的，它是基于布尔代数的一元圆柱操作Cx的代数，旨在捕捉存在量词（∃x）。多元代数是另一种用于一阶逻辑的逻辑代数的方法-它是由Halmos（1956c）创建的。在这些系统中的工作重点再次是看在多大程度上可以与上世纪30年代布尔代数的著名结果相媲美。
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
