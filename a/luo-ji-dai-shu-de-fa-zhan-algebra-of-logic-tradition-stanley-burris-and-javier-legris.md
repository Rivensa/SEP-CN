# 逻辑代数的发展 algebra of logic tradition (Stanley Burris and Javier Legris)

*首次发表于 2009 年 3 月 2 日星期一；实质性修订于 2021 年 2 月 12 日星期五*

逻辑代数作为一种显式的代数系统，展示了逻辑的基本数学结构，由乔治·布尔（George Boole，1815–1864）在他的著作《逻辑的数学分析》（1847 年）中引入。因此，它与代数逻辑的更一般方法有所区别。布尔开创的方法在 19 世纪得到了成功延续，威廉·斯坦利·杰文斯（William Stanley Jevons，1835–1882）、查尔斯·桑德斯·皮尔斯（Charles Sanders Peirce，1839–1914）、恩斯特·施罗德（Ernst Schröder，1841–1902）等人的工作中，奠定了（数学）逻辑的传统。从布尔的第一本书开始，直到阿尔弗雷德·诺思·怀特海德（Alfred North Whitehead，1861–1947）和伯特兰德·罗素（Bertrand Russell，1872–1970）在第一次世界大战后的巨著《数学原理》（1910–1913）的影响，逻辑代数的各种版本一直是数学逻辑的最发达形式，尤其是在施罗德的三卷本《逻辑代数讲义》（1890–1905）中呈现的形式。此外，这一传统激发了莱奥波德·勒文海姆（Leopold Löwenheim，1878–1957）的研究，最终催生了模型论。此外，1941 年，阿尔弗雷德·塔斯基（Alfred Tarski，1901–1983）在他的论文《关系演算》中回到了皮尔斯关系代数，正如施罗德的《逻辑代数》中所呈现的那样。逻辑代数传统在逻辑作为演算的概念中发挥了关键作用，与逻辑作为普遍语言的概念相对立。除了塔斯基的关系代数，逻辑代数传统在逻辑中的影响还可以在其他数学理论中找到，比如范畴论。然而，这种影响超出了本条目的范围，本条目分为 10 个部分。


---

## 1. 引言

布尔的《逻辑的数学分析》提出了许多有趣的逻辑创新：它标志着 19 世纪逻辑数学化的开始，并提供了一种算法替代方案（通过对传统逻辑中使用的目录方法进行轻微修改），而不是传统逻辑中使用的有效论证形式列表（即使后者已经发展出了简化程序）。论证的有效性不再是基于有效论证形式的列表，而是基于一般原则和规则确定的。此外，它提供了一种有效的方法，可以根据一套公设来证明逻辑定律。正如布尔后来所写的那样，这是一种适当的“推理科学”，而不是传统的三段论那样的“记忆艺术”（布尔 1997: 136）。在本书的三分之一处，在完成了对三段论逻辑的讨论后，布尔开始发展将用于他的《思维法则》（1854）中的通用工具，以极大地扩展传统逻辑，允许一个论证具有许多前提并涉及许多类别。为了处理这种扩展逻辑的无限可能的逻辑论证，他提出了一些定理，为算法分析提供了关键工具（目录不再可行）。

布尔的思想是独立于早期预期的，比如 G.W. 莱布尼茨所发展的那些。它们起源于英国数学的特定背景（参见 Peckhaus 2009）。根据维克多·桑切斯·瓦伦西亚（Víctor Sánchez Valencia）的说法，起源于布尔的传统自 1879 年亚历山大·麦克法兰（Alexander MacFarlane）出版的《逻辑代数原理》（Principles of the Algebra of Logic）开始被称为逻辑代数（参见桑切斯·瓦伦西亚 2004 年：389）。麦克法兰认为“布尔提出的关于质的分析推理方法”是一种代数（参见麦克法兰 1879 年：3）。

这种方法与通常所称的代数逻辑有所不同；尽管两者存在一些重叠，但两个领域的历史发展是不同的。代数逻辑被理解为：逻辑代数传统的发展。

> 逻辑代数的发展中，概念和关系通过数学符号表达，以便应用数学技术。在这里，数学主要指代数，即数学中涉及某个集合上有限运算的部分。（Hailperin 2004: 323）

代数逻辑早在莱布尼茨、雅各布·伯努利和其他现代思想家的作品中就可以找到，它无疑构成了布尔方法的重要前身。从更广泛的视角来看，这两者都是形式科学符号知识传统的一部分，最初由莱布尼茨构想（参见 Esquisabel 2012）。这种代数逻辑的思想在法国启蒙运动中在孔迪亚克和孔多塞的作品中得到了一定程度的延续（参见 Grattan-Guinness 2000: 14 ff.）。

布尔处理逻辑问题的方法可以描述如下：

1. 将逻辑数据转化为适当的方程；
2. 将代数技术应用于解决这些方程；
3. 如果可能的话，将这个解答翻译回原始语言。

换句话说，逻辑问题的符号化表达和逻辑方程的解决构成了布尔的方法（参见桑切斯·瓦伦西亚 2004 年：389）。

后来，在他 1864 年的《纯粹逻辑》中，杰文斯将布尔对不相交集合的部分并运算改为现代的不受限制的并集，并消除了布尔对不可解释术语的可疑使用（见杰文斯 1890 年）。皮尔斯（1880 年）明确消除了亚里士多德从普遍命题推导特殊命题的方法，给出了“所有 A 都是 B”现代含义。此外，他将逻辑代数扩展到二元关系的逻辑代数，并引入了一般的求和和乘积来处理量化。恩斯特·施罗德（Ernst Schröder）受到赫尔曼（1809-1877）和罗伯特·格拉斯曼（1815-1901）之前工作的启发，并利用皮尔斯开发的框架，将 19 世纪逻辑代数的成就系统化地发展在他的三卷本著作《逻辑代数讲座》（1890-1910）中。

Gottlob Frege（1848–1925）在 1879 年至 1903 年期间对逻辑的贡献，基于逻辑的公理化方法，当时影响甚微（C.S. Peirce 在世纪之交发展的图解系统也是如此）。怀特海德和罗素拒绝了逻辑代数方法，其主要是等式形式和代数符号，而是倾向于受到 Frege 公理系统强烈启发的方法，并使用由朱塞佩·皮亚诺开发的符号，即使用逻辑连接词、关系符号和量词。

在 20 世纪头两个十年里，逻辑代数在普拉东·谢尔盖耶维奇·波列茨基（1846–1907）、路易·库图拉（1868–1914）、莱奥波德·勒文海姆（1878–1957）和海因里希·贝曼（1891–1970）的作品中进一步发展（参见 Styazhkin 1969）。特别是逻辑代数中的消除定理影响了一阶和二阶逻辑片段的决策过程（参见 Mancosu、Zach、Badesa 2009）。

一战后，戴维·希尔伯特（1862–1943）最初采用了代数方法，后来采纳了《Principia》的方法，逻辑代数逐渐失宠。然而，1941 年，塔斯基将关系代数视为一个等式定义的类。这样的类别除了在 1800 年代考虑的给定宇宙上的所有二元关系集合之外，还有许多模型，就像在 1800 年代研究的幂集布尔代数之外还有许多布尔代数一样。在 1948 年至 1952 年，塔斯基与他的学生钦和汤普森创立了圆柱代数作为第一阶逻辑的代数逻辑伴侣，1956 年，保罗·哈尔莫斯（1916–2006）引入了多元代数以达到相同的目的。正如哈尔莫斯（1956 年 b、c 和 d）所指出的，这些新的代数逻辑倾向于研究它们捕捉第一阶逻辑的程度以及它们的通用代数方面，如公理化和结构定理，但对启发它们创立的第一阶逻辑的本质提供了很少的洞察。

## 2. 1847—现代逻辑代数版本的开端

在 1847 年末，布尔（Boole）和奥古斯都斯·德·摩根（Augustus De Morgan，1806-1871）分别出版了关于逻辑的书籍——布尔的《逻辑的数学分析》（1847 年）和德·摩根的《形式逻辑》（1847 年）。德·摩根的方法是将传统演绎逻辑（通常称为“亚里士多德逻辑”）的每个方面剖析为最微小的组成部分，考虑如何概括这些组成部分，然后在某些情况下，着手利用这些组成部分构建逻辑系统。不幸的是，他从未能将自己最好的想法融入一个重要的系统中。他没有为相等性设计符号，这使得无法发展逻辑的等式代数。看来综合并不是德·摩根的长处。

德·摩根在 1847 年的著作是 19 世纪初在法国由约瑟夫·迪埃斯·热尔贡（Joseph Diez Gergonne，1771-1859）和波西米亚的伯恩哈德·博尔扎诺（Bernhard Bolzano，1781-1848）等人发起的逻辑研究复兴的一部分。英国的乔治·本瑟姆（George Bentham）和威廉·哈密尔顿（William Hamilton）也参与了这一复兴，他们的研究集中在传统三段论中范畴句子变化的性质，包括所谓的“谓词的量化”；例如，“所有 A 都是一些 B”或“一些 A 都是所有 B”。人们认为这个问题需要扩展亚里士多德的三段论逻辑，并且需要某种符号方法来处理这些陈述并对它们的不同类型进行分类（参见 Heinemann 2015 年第 2 章和第 3 章）。

布尔从完全不同的角度接近逻辑，即如何将亚里士多德逻辑表现为符号代数的形式。使用符号代数是他在微分方程研究中熟悉的主题，也是他年轻的朋友兼导师邓肯·法夸尔森·格雷戈里（1813-1844）的各种论文中的主题，格雷戈里试图将其他学科（如几何）转化为符号代数的语言。由于将符号代数应用于微分方程是通过引入微分算子进行的，布尔自然会寻找适用于亚里士多德逻辑领域的算子。他很快想到了使用“选择”算子的想法，例如，红色的选择算子将从一个类中选择红色成员。在他 1854 年的著作中，布尔意识到省略选择算子并直接处理类会更简单。（然而，他保留了选择算子，以证明他的逻辑法则并非最终基于对语言使用的观察，而实际上深深扎根于人类思维的过程中。）从现在开始，在本文讨论布尔 1847 年的著作时，选择算子已被更简单的直接使用类的表述取代。

由于符号代数只是普通代数的句法一面，布尔需要找到方法来解释代数的常规运算和常数，以创建他的逻辑代数用于类。乘法被解释为交集，导致他的一个新法则，即乘法幂等律 XX=X，重新发现了莱布尼茨已经制定的逻辑法则。加法被定义为并集，前提是处理不相交的类；减法被定义为类差，前提是从一个类中减去一个子类。在其他情况下，加法和减法运算被简单地视为未定义，或者如布尔所写，无法解释。算术的常规法则告诉布尔，1 必须是全集，1-X 必须是 X 的补集。

Boole 系统的下一步是将四种范畴命题翻译成方程，例如，“所有 X 都是 Y”变成 X=XY，“一些 X 是 Y”变成 V=XY，其中 V 是一个新符号。为了消除三段论中的中间项，Boole 从普通代数中借用了一个消去定理，但这对他的逻辑代数来说太弱了。这在他 1854 年的著作中得到了纠正。Boole 发现，他不能总是通过上述特殊命题的翻译（即具有存在性含义的命题）推导出期望的结论，因此他添加了变体 X=VY，Y=VX 和 VX=VY（参见 Boole 的条目）。

19 世纪的符号代数不仅包括多项式代数，Boole 还尝试了哪些结果和工具可能适用于逻辑代数。例如，他通过使用无限级数展开证明了他的一个结果。他对普通代数的可能性着迷，使他考虑了诸如：如果幂等律被 X3=X 的法则取代，逻辑会是什么样子？他的继承者，特别是杰文斯，很快将类的操作限制为我们今天使用的并集、交集和补集。

正如前面提到的，在他 1847 年的简短著作中的三分之三处，在他的系统中完成了传统亚里士多德三段论的推导之后，布尔宣布他的逻辑代数能够应用于更广泛的领域。然后，他继续添加了关于发展（扩展）术语的一般定理，提供了方程式的解释，并使用长除法来表达一个方程中的一个类与其他类（附加了条件）的关系。

布尔的定理在 1854 年完成并完善，为分析无限多个论证形式提供了算法。这开辟了一种新的且富有成效的视角，偏离了传统的逻辑方法，几个世纪以来，学者们一直在努力想出巧妙的记忆法来记住一个非常有限的有效转换和三段论目录及其各种相互关系。

De Morgan 的形式逻辑并未获得显著认可，主要是因为它是一大堆零散事实的集合，缺乏重要的综合。Boole 的《逻辑的数学分析》具有强大的方法，引起了德摩根和亚瑟·凯利（1821-1895）等少数学者的注意；但是，关于 Boole 的逻辑代数的运作，立即出现了严重的问题：它与普通代数有多大关联？Boole 如何证明他的逻辑代数的程序？回顾来看，Boole 似乎并不清楚为什么他的系统有效。他声称，继格雷戈里之后，为了证明使用普通代数是足够的，只需检查乘法的交换律 XY=YX 和分配律 X(Y+Z)=XY+XZ，这显然是错误的。尽管如此，他很可能已经在足够多的情况下检查了他的结果，从而使他相信他的系统是正确的。

## 3. 1854 年—Boole 关于他的逻辑代数的最终展示

在他的第二本书《思维的法则》中，布尔不仅将代数方法应用于传统逻辑，还尝试对逻辑进行一些改革。他首先通过增补他 1847 年逻辑代数的法则（并没有明确表示他之前的三条公理列表是不足的），对推理规则（在等式两边执行相同操作）进行了一些评论。但随后他随意地陈述，他的系统的基础实际上是建立在一个（新的）原则上，即只需检查一个论证是否正确，当类符号仅取值 0 和 1 时，操作是通常的算术运算即可。让我们称之为布尔的“0 和 1 法则”。对于布尔采用这一新基础的原因没有给出有意义的理由，也没有给予特别的名称，并且在书的其余部分对它的提及通常表述得相当笨拙。有关这个“0 和 1 法则”的现代分析，请参见 Burris＆Sankappanavar 2013。

在《思维的法则》中逻辑代数的发展与他 1847 年的著作大致相同，只是对他的转换方案进行了一些微小的改变，并用类替换了选择运算符。有一个新而非常重要的定理（纠正了他在 1847 年使用的定理），即消去定理，其内容如下：给定一个类符号 x，y，z 等的方程 F(x，y，z，…)=0，从消去某些类符号得出的最一般结论是通过（1）以所有可能的方式将 0 和 1 代入 F(x，y，z，…)中要消除的符号，然后（2）将这些不同的替换实例相乘，并将乘积设为 0。因此，从 F(x，y，z)=0 中消去 y 和 z 得到 F(x，0，0)F(x，0，1)F(x，1，0)F(x，1，1)=0。这个定理在布尔对亚里士多德三段论的解释中也起着重要作用。

从逻辑代数的角度来看，1854 年的处理有时似乎不如 1847 年的书中那样优雅，但它更深入地揭示了布尔如何思考他的逻辑代数基础。关于逻辑的最后一章，第十五章，是试图统一证明亚里士多德的转换和三段论的一次尝试。（有趣的是，在第十五章之前，布尔并没有提出涉及特定命题的论证示例。）第十五章的细节相当复杂，主要是因为应用淘汰和发展定理时表达式的增加。布尔简单地把大部分工作留给读者。后来的评论者会忽略这一章，似乎没有人仔细研究过其中的细节。

除了 0 和 1 规则和淘汰定理之外，1854 年的表述主要引人注目的是布尔试图证明他的逻辑代数的努力。他认为，在符号代数中，只要前提和结论中的术语是可解释的，就可以进行带有部分操作的等式推导，就像当操作是完全的时候一样。他说这就是普通代数处理不可解释的-1-√，即-1 的平方根的方式。（复数的几何解释早在 Wessel、Argand 和 Gauss 时期就被认可，但直到 1830 年代 Gauss 和 Hamilton 的出版物才克服了关于复数在更大数学界中可接受性的疑虑。有趣的是，在 1854 年，布尔将-1-√视为不可解释的。）

对于布尔（Boole）对逻辑代数的方法存在一些疑虑：

1. 他的逻辑代数与数字代数之间是否存在有意义的联系，还是它们之间的相似性只是偶然的？
2. 能否在一个专注于方程的逻辑代数中处理特定命题？
3. 在等式推导中使用无法解释的术语真的可接受吗？
4. 布尔是否使用“亚里士多德”语义（传统逻辑中预设的语义，其中术语的外延是非空的）？

## 4. 杰文斯：基于全操作的逻辑代数

杰文斯（Jevons）曾在德·摩根（De Morgan）门下学习，他是第一个提出与布尔系统不同的替代方案的人。1863 年，他写信给布尔（Boole），认为布尔的加法运算应该被更自然的“包容性或”（或“并集”）所取代，从而导致 X+X=X 的法则。布尔完全拒绝了这一建议（因为这将破坏他基于普通代数的系统），并中断了通信。杰文斯在 1864 年的著作《纯逻辑》（Jevons 1890 年再版）中发表了他的系统。他所谓的“纯粹”是指他摆脱了对数字代数的任何依赖——他将使用与数量相关联的类别不同的谓词，这些谓词与质量相关联，他的法则将直接从（总体的）包容性析取和合取的基本运算中推导出来。但他保留了布尔在他的逻辑代数中使用方程式作为陈述的基本形式。

通过采用德·摩根使用大写/小写字母表示补集的惯例，杰文斯的系统不适合为现代布尔代数提供等式公理。然而，他不断完善他的公理系统和推理规则，直到最终形成了现代布尔代数的基本系统，即对于基础术语的布尔代数，其中类别符号被视为常数，而不是变量。

必须注意到，现代等式逻辑处理普遍量化的方程（在 19 世纪被称为定律）。在 19 世纪的逻辑代数中，可以将“所有 X 都是 Y”翻译为方程 X=XY。这不应被视为普遍量化表达式(∀X)(∀Y)(X=XY)。X 和 Y 应被视为常量（或示意符号）。只包含常量（没有变量）的术语称为基础术语。

通过在谓词代数（或等价地，在类代数）的特殊环境中进行这种分析，杰文斯在现代等式逻辑的发展中发挥了重要作用。正如前面提到的，布尔为他的系统提供了不充分的等式公理集，最初从格雷戈里的两个定律开始，再加上他的幂等定律；这些定律伴随着德摩根的推理规则，即可以对等式执行相同的操作（布尔在他的逻辑代数中的基本运算是加法、减法和乘法），并得到相等。然后，布尔转向简单而强大（但未解释的）0 和 1 规则。

将布尔的基本运算替换为总运算后，杰文斯在许多年的时间里继续研究他系统的公理和规则。我们现在认为理所当然的一些等式逻辑元素，杰文斯花了相当多的时间来解决：

自反律（A=A）。1864 年，杰文斯将其列为一个公设（1890 年，第 11 页），然后在第 24 节中将 A=A 称为“无用的同一命题”。在他 1869 年关于替换的论文中，它成为了“同一律”。在《科学原理》（1874 年）中，它是三个“思维基本法则”之一。

对称律（B=A 由 A=B 推出）。1864 年，杰文斯写道：“A=B 和 B=A 是相同的陈述”。这是他坚持的立场。1874 年，他写道

> 我将考虑两种形式 A=B 和 B=A 表达完全相同的身份，只是以不同的方式书写。

对于他逻辑代数的最终形式，我们可以看到他在《科学原理》（1874 年）中分散在 40 页中的定律，他用⋅∣⋅取代了早期使用的+，显然是为了进一步远离与数字代数的任何联系：

 组合定律

逻辑代数的发展 AABA⋅∣⋅AA⋅∣⋅BA(B⋅∣⋅C)=AA=AAA=&c=BA=A=B⋅∣⋅A=AB⋅∣⋅AC 简易法则（第 33 页）交换律（第 35 页）统一法则（第 72 页）交换律（第 72 页）（未提供姓名）（第 76 页）

 思维法则

AAaA=A=o=AB⋅∣⋅Ab 同一律 (p. 74) 矛盾律 (p. 74) 对偶律 (p. 74)

对于他的单一推理规则，杰文斯选择了他的替换原则——用现代术语来说，这本质上是地面替换和传递性的结合。他展示了如何从中推导出等式的传递性；他也可以推导出对称性，但他没有这样做。结合律缺失了——这在他的表达式中缺少括号中是隐含的。

仅在他的《演绎逻辑研究》（1880）中，杰文斯提到麦科尔使用重音符号表示否定的做法。在指出麦科尔的重音符号允许将复杂括号术语的否定取出后，他继续表示，大多数情况下，他发现德摩根的符号，也就是他一直在使用的符号，更加优雅。

## 5. 皮尔斯：将逻辑代数建立在包含关系之上

皮尔斯在 19 世纪 60 年代末开始研究逻辑代数。在他的论文《关于布尔逻辑演算的改进》（Peirce 1867）中，他独立得出了杰文斯早先得出的相同结论，即需要用并集的总运算取代布尔的部分加法运算（见 CP 3.3.6）。在他重要的 1880 年论文《关于逻辑代数》，皮尔斯悄然与传统的外延语义决裂，并引入了现代语义的一个常见假设：概念的外延，理解为一个类，可以是空的（以及宇宙），并陈述了我们今天使用的范畴命题的真值。例如，他说命题“所有 A 都是 B”是真的，如果 A 和 B 都是空类。通过限制的转换，也就是说，论证“所有 A 都是 B”因此“一些 B 是 A”，不再是有效的推理。皮尔斯对于他背离传统存在语义假设的原因和优点没有发表任何言论。

皮尔斯还与布尔和杰文斯使用相等作为基本原语的做法决裂，而是使用了可以以不同方式解释的“包含”关系（子类关系，蕴涵等）。他陈述了包含的偏序性质，然后定义了+和×作为最小上界和最大下界的运算——他隐含地假设这样的界存在——并列出了我们现在称之为格的具有两个二元运算的代数的关键等式性质。然后他声称分配律是成立的，但表示证明太繁琐，不包括在内。这种观点的富有成果在他 1885 年的开创性论文中显而易见。在那里，皮尔斯引入了一个基于蕴涵的五个公理的命题逻辑系统（用符号“−<”表示），包括现在称为皮尔斯定律的内容。这无疑使逻辑代数更加优雅。

## 6. De Morgan 和 Peirce：逻辑代数中的关系与量词

De Morgan 在 1846 年至 1863 年间写了一系列名为“论三段论”的六篇论文（收录于 De Morgan 1966 年版）。在努力推广三段论的过程中，De Morgan 在该系列的第二篇论文中（1850 年）用一个一般的二元关系取代了连词“是”。通过允许在三段论的两个前提中使用不同的二元关系，他引入了两个二元关系的组合来表达三段论的结论。在追求广义三段论的过程中，他引入了各种其他二元关系操作，包括逆操作，并为这些操作开发了一个片段性的演算。他在这一主题上的主要论文是该系列的第四篇，名为“论三段论，第四篇，以及关系逻辑”，发表于 1859 年（详见 De Morgan 1966 年版）。

在德·摩根（De Morgan）的论文之后，皮尔斯（Peirce）在他于 1870 年发表的论文《关于布尔逻辑演算的概念扩展所导致的亲属逻辑符号的描述》中，将布尔的工作提升到二元关系的设定中——在二元关系中，除了并集、交集和补集之外，还有组合和逆向的自然运算。二元关系被表征为一组有序对的集合（见 3.328）。他在 1870 年至 1883 年之间致力于这种新的演算。与德·摩根一样，皮尔斯还考虑了许多其他关系上的自然运算。皮尔斯关于这一主题的主要论文是《关于逻辑代数》（1880 年）。通过使用用Σ表示的无限并集和用Π表示的无限交集，皮尔斯因此在他的逻辑代数中引入了量词。

在 1882 年的一篇论文《关于亲属代数的简要描述》，收录于德·摩根 1966 年的著作中，他利用这些量词通过对某种系数的操作来定义关系上的运算。德·摩根因引入关系的概念而受到赞誉，但皮尔斯被认为是关系理论的真正创造者（见例如塔斯基 1941 年：73）。然而，皮尔斯并没有发展这一理论。正如卡利克斯托·巴德萨（Calixto Badesa）所写的，“亲属演算从未得到皮尔斯的喜爱”（巴德萨 2004 年：32）。他认为这太复杂了，因为类操作与关系操作相结合。相反，他从 1885 年开始更倾向于发展一个包括量词但没有关系操作的“一般代数”。通过这种方式，他得出了现在被称为一阶逻辑的基本和非正式的表述（见巴德萨 2004 年，原出处）。

## 7. Schröder 对逻辑代数的系统化

德国数学家恩斯特·施罗德在逻辑代数传统中扮演了关键角色。一个很好的例子是他向皮尔斯提出挑战，要求他证明分配律，作为具有两个二元运算的代数的关键等式性质之一。皮尔斯（1885 年）承认他无法提供证明。多年后，亨廷顿（1904 年：300-301）描述了他在 1903 年 12 月收到的皮尔斯来信的部分内容，声称提供了缺失的证明——显然，皮尔斯在施罗德于 1902 年去世后偶然发现了这些遗失已久的页面。皮尔斯向亨廷顿解释，他最初认为施罗德的挑战是有根据的，他的论文中这一明显缺陷“应被列入由流感引起的那篇论文充斥着的错误清单中……”。实际上，皮尔斯的证明并没有纠正这个错误，因为分配律并不适用于普通格；相反，他的证明引入了补运算——他使用了公理。

> 如果 a 不包含在 b 的补集中，则 a 和 b 有一个共同的下界。

基于他之前的代数工作，Schröder 在 19 世纪末写了一部百科全书式的三卷作品，名为《逻辑代数讲义》（1890-1905 年），建立在皮尔斯提出的现代类语义的包容框架上。这项工作是他在代数方面的研究成果，揭示了不同的影响。Schröder 的目标是建立一个具有广泛数学应用的一般代数理论，其中逻辑代数是核心。正如 Geraldine Brady 所指出的，这部作品提供了抽象格理论的首次阐述，是 Dedekind 之后对链理论的首次阐述，是关系微积分最全面的发展，以及基于关系微积分的数学基础的处理（参见 Brady 2000: 143 f.）。

第一卷涉及了类的等式逻辑，主要结果是布尔（Boole）于 1854 年提出的消去定理。在第一卷的附录中出现了三个相当复杂的反例，用以反驳皮尔斯（Peirce）关于分配律的主张，其中一个涉及九百九十个四元群的恒等式。基于这一卷，戴德金（Dedekind，1897 年）创作了一个优雅的现代抽象格（他称之为 Dualgruppen）的表述；在这篇论文中，他提出了一个五元素的反例，以反驳皮尔斯的分配律主张。

第二卷扩展了第一卷中发展的类的逻辑代数，以便处理存在性陈述。首先，使用现代语义，舒尔德（Schröder）证明了不能使用等式来表达“某些 X 是 Y”。然而，他指出可以用否定的等式来轻松表达，即 XY≠0。第二卷研究了使用等式和否定等式的类的微积分，试图涵盖第一卷中涵盖的相同主题，特别是在寻找消去定理方面付出了相当大的努力。在处理了几个特殊情况后，舒尔德将这个主题推荐为一个重要的研究领域——寻找消去定理的探索被称为消去问题。

受皮尔斯的工作启发，舍恩多尔在他的《逻辑代数讲义》第三卷中研究了二元关系的逻辑代数。正如塔斯基曾指出的那样，舍恩多尔以非常彻底和系统的方式延续和扩展了皮尔斯的工作。他特别着迷的一个项目是：在这种代数中给定一个方程 E(x,y,z,...)=0，找到一个关系符号的一般解，比如说对于 x，用其他关系符号来表示。他设法在给定一个特定解 x=x0 的情况下，找到一个引人注目的术语 S(t,y,z,...)，具有以下特性：(1) x=S(t,y,z,...)对于任意关系 t 都会给出方程 E=0 的解，(2) 方程 E=0 的每个解都可以通过选择适当的 t 以这种方式获得。皮尔斯对舍恩多尔对解方程问题的关注并不感到印象深刻，并指出舍恩多尔的参数解法有点欺骗性——逻辑代数对于关系的表达能力非常强大，通过评估术语 S(t,y,z,...)实质上就是在执行检查 E(t,y,z,...)=0 的步骤；如果答案是肯定的，那么 S(t,y,z,...)将返回值 t，否则将返回值 x0。

总结一下，舍恩多尔构建了现代谓词逻辑的代数版本，还有一个关系理论。他将其应用于不同领域（例如，康托尔的集合论），并将他的代数符号视为一种通用或普遍语言（pasigraphy，参见 Peckhaus 2004 和 Legris 2012）。值得注意的是，1940 年洛文海姆仍然认为这与集合论一样合理。根据他的说法，舍恩多尔解决关系方程的想法是斯科莱姆函数的前身，舍恩多尔启发了洛文海姆对于每个“算术”句子具有无限模型的句子有可数模型的著名定理的表述和证明。舍恩多尔的关系演算是诺伯特·维纳（1894-1964）在哈佛的博士论文的基础（Wiener 1913）。根据布雷迪的说法，维纳对关系演算给出了第一个公理化处理，比塔斯基的公理化提前了二十多年（参见布雷迪 2000 年：165）。

## 8. 亨廷顿：逻辑代数的公理研究

在 19 世纪之交，大卫·希尔伯特（1862–1943）在他的《几何基础》中提出，欧几里得几何作为一个公理化的学科，不依赖于图表来证明（希尔伯特 1899）。这引发了对数学中公理系统的研究兴趣潮流；特别是人们想知道这些公理是否是独立的，以及哪些基元导致了最优雅的系统。爱德华·弗米利耶·亨廷顿（1874–1952）是最早研究逻辑代数这个问题的人之一。他给出了逻辑代数的三种公理化，表明每组公理是独立的，并且它们是等价的（见亨廷顿 1904）。1933 年，他再次回到这个话题，提出了三组新的公理，其中一组包含以下三个方程（1933: 280）：

a+b(a+b)+c(a′+b′)′+(a′+b)′=b+a=a+(b+c)=a.

不久之后，Herbert Robbins (1915–2001) 猜想第三个方程可以被稍微简化为

[(a+b)′+(a+b′)′]′=a.

既不是亨廷顿也不是罗宾斯能够证明这一点，后来它经受住了许多其他人的努力，甚至包括塔斯基及其在伯克利的才华横溢的学生。基于温克尔的部分结果，由阿贡国家实验室的威廉·麦肯设计的自动定理证明器 EQP 在 1996 年找到了罗宾斯猜想的证明。这一成就在 2010 年科拉塔的著作中得到了普及。

根据亨廷顿（1933: 278）的说法，“布尔代数”一词是由亨利·M·谢弗（1882-1964）在一篇论文中引入的，他在该论文中展示了可以使用联合排斥这一单一基本运算给出布尔代数的五方程公理化，现在被称为谢弗符号（见谢弗 1913 年）。怀特海德和罗素在《数学原理》第二版前言中声称，谢弗符号是自《数学原理》出版以来逻辑上最重大的进展。（相比之下，希尔伯特和阿克曼（1928 年）则表示，谢弗符号只是一种好奇。）两位都没有意识到几十年前，许德尔发现了谢弗符号的对偶也是这样一种运算——许德尔的运算符号是双刃剑的形状。

在 1930 年代，加勒特·伯克霍夫（1911-1996）建立了等式逻辑的基本结果，即（1）代数的等式类恰好是在同态、子代数和直积下封闭的类，以及（2）等式逻辑基于五条规则：自反性、对称性、传递性、替换和代入。在 1940 年代，塔斯基加入了这一等式逻辑的发展；这一主题从 1950 年代迅速发展至今。

## 9. Stone: 逻辑代数的模型

传统逻辑研究了类之间的某些简单关系，即作为一个子类和具有非空交集。然而，一旦采用了公理化方法，除了明显的模型之外，还出现了可能的模型主题。贝尔特拉米在 19 世纪 60 年代末引入了非欧几里得几何的模型。在 19 世纪 90 年代，舒尔德和戴德金构建了格论公理的模型，以表明分配律不成立。但是当涉及到类的代数时，舒尔德只考虑了标准模型，即每个模型都是给定类的所有子类的集合。

对布尔代数公理的一般模型的研究直到 20 世纪 20 年代末才开始；在马歇尔·哈维·斯通（Marshall Harvey Stone，1903–1989）的工作中很快达到了一个非常高的水平（参见他的论文 1936 年，1937 年）。他对线性算子环的结构感兴趣，并意识到中心幂等元素，即与环中所有其他算子在乘法下交换（即对于环中的所有 L，EL=LE）且在乘法下是幂等的算子 E（EE=E）起着重要作用。中心幂等元素以一种自然的方式形成了一个布尔代数。

追求这一研究方向使斯通开始探讨任意布尔代数的结构，他通过证明每个布尔代数同构于一个集合的布尔代数来回答了这个问题。在他对布尔代数的研究中，他注意到同态的核与环论中研究的理想之间的某种类比—这使他将这种核命名为“理想”。不久之后，他发现了布尔代数和布尔环之间的一种翻译；在这种翻译下，布尔代数的理想与相关的布尔环的理想完全对应。他的下一个重要贡献是建立布尔代数与现在称为布尔空间（或斯通空间）的某些拓扑空间之间的对应关系。这种对应关系后来被证明是构建异国情调的布尔代数的有价值工具。斯通的这些结果仍然是逻辑代数发展的范例。

受《逻辑代数》第三卷对于关于关系的一阶命题的相对简短处理的启发，Löwenheim（1915 年）表明，如果这样的命题可以在无限域中满足，那么它也可以在可数域中满足。1920 年，Thoralf Skolem（1887-1963）通过引入 Skolem 标准形式简化了 Löwenheim 的证明，并在 1928 年，Skolem 用更简单的想法取代了他对标准形式的使用，即使用现在称为 Skolem 函数的方法。他使用这些函数将一阶句子转换为全称句子，也就是说，转换为所有量词都是全称量词（∀）的前束范式中的句子。

## 10. Skolem：量词消除和可判定性

Skolem 在其博士论文中受到 Schröder 的《逻辑代数》的强烈影响。后来，他对在类的演算中寻找消去定理产生了特别兴趣。在他 1919 年的论文中，他建立了一些关于格的结果，特别是他表明可以通过一种我们现在认识到的多项式时间算法来决定通用 Horn 句子（即，带有一个由否定和非否定原子的析取构成的矩阵的通用句子，最多有一个正原子）的有效性。这个算法是基于在通用 Horn 句子中导出的生成规则下找到一个有限部分格的最小不动点。尽管这个结果等同于格的均匀词问题，出现在 Skolem 对 Löwenheim 定理的著名贡献的同一篇论文中，但直到 1990 年代初才被偶然重新发现。（Whitman（1941）为格的更有限的等式决策问题提供了不同的解决方案；它被广泛认为是格中词问题的解决方案。）

Skolem（1920）为 Schröder 在类的演算中提出的消去问题提供了一个优雅的解决方案，他表明如果为了表达“至少有 n 个元素”而添加谓词，对于每个 n=1,2,…，那么有一个简单（但通常冗长）的过程可以将关于类的一阶公式转换为无量词的公式。特别是，这表明了类的演算的一阶理论是可判定的。Mostowski（1952）利用这个量词消去结果来分析单个结构的直积和直和的一阶性质，然后由 Feferman 和 Vaught（1959）用于对结构的一般直和和直积进行相同的分析。

量词的消除成为数理逻辑中证明可判定性的主要方法，并且在希尔伯特和阿克曼 (1928) 中，证明可判定性被表述为数理逻辑的主要问题——由于丘奇和图灵的著名不可判定性结果，这一目标在随后的版本中被放弃。

## 11. 塔斯基与逻辑代数的复兴

模型论可以被看作是希尔伯特的元数学方法论和逻辑代数传统的产物，特别是由 Löwenheim 和 Skolem 的结果所代表。但是，正是塔斯基赋予了这门学科其经典基础。模型论是研究形式语言与其在“实现”中的解释之间的关系的学科（即，语言变量的域以及其原始符号的解释）。如果解释恰好使语言的一个句子陈述某种真实性，那么解释就是该句子的模型（请参阅模型论条目）。模型基本上由代数结构组成，模型论不仅根植于逻辑代数，还根植于抽象代数，成为一门独立的数学学科（请参阅 Sinaceur 1999）。

除了模型论，塔斯基在他 1941 年的论文《关系演算》中复兴了关系代数。他首先概述了一种基于允许对元素和关系进行量化的形式逻辑，然后转向更详细地研究这个系统中仅涉及关系变量的无量词公式。在列出了在 Schröder 的第三卷中呈现的关系代数中显然成立的公理清单后，他证明了这些公理使得可以将无量词关系公式化简为方程。因此，他的关系演算成为了对某种等式理论的研究，他指出这种理论与集合上所有二元关系的研究之间的关系与布尔代数的等式理论与集合所有子集的研究之间的关系相同。这引发了与已经提出并解决的布尔代数类似的问题，例如，他的关系代数公理的每个模型是否同构于集合上的关系代数？有一个问题已经被 Arwin Korselt（1864-1947）回答，即在二元关系理论中存在着不等价于关系演算中的方程的一阶句子，因此关系演算明显比关系的一阶理论具有更弱的表达能力。实际上，关系代数的表达能力与仅具有三个变量的一阶逻辑完全等价。然而，在关系代数（关系演算）中，如果想要形式化具有诸如对偶公理之类的集合论，那么可以将许多变量简化为三个变量，因此可以通过方程表达该理论的任何一阶陈述。Monk 证明，与类的演算不同，二元关系的演算没有有限的等式基础（请参阅 Monk 1964）。塔斯基和吉万特（1987）表明，关系代数的等式逻辑是如此表达力强大，以至于可以在其中进行一阶集合论。

此外，圆柱代数是在 1948 年至 1952 年间由塔斯基与他的学生 Louise Chin 和 Frederick Thompson（参见 Henkin＆Tarski 1961）引入的，它本质上是布尔代数，配备了旨在捕捉存在量词（∃x）的一元圆柱操作 Cx，旨在创建一个逻辑代数，以捕捉二元关系的一阶理论的表达能力。多元代数是另一种适用于一阶逻辑的逻辑代数的方法，它是由 Halmos（1956c）创建的。这些系统的工作重点再次是看到在多大程度上可以与上世纪 30 年代布尔代数的著名结果相媲美。

## Bibliography

### Primary Sources

* Boole, G., 1847, _The Mathematical Analysis of Logic, Being an Essay Towards a Calculus of Deductive Reasoning_, Cambridge: Macmillan, Barclay, & Macmillan; reprinted Oxford: Basil Blackwell, 1951.
* –––, 1854, _An Investigation of The Laws of Thought on Which are Founded the Mathematical Theories of Logic and Probabilities_, London: Macmillan; reprint by Dover 1958.
* –––, 1997. _Selected Manuscripts on Logic and its Philosophy_, Ivor Grattan-Guinness and Gérard Bornet (eds.), Basel, Boston, Berlin, Birkhäuser: Springer.
* Couturat, Louis, 1905, _L’Algèbre de la Logique_, Paris: Gauthier-Villars; 2nd edition, Paris: Blanchard 1980.
* Dedekind, R., 1897, “Über Zerlegungen von Zahlen durch ihre grössten gemeinsamen Teiler”, reprinted in _Gesammelte mathematische Werke_ (1930–1932), 2: 103–147.
* –––, 1930–1932, _Gesammelte mathematische Werke_, Robert Fricke, Emmy Noether, Öystein Ore (eds.), Braunschweig: Friedr. Vieweg & Sohn.
* De Morgan, A., 1847, _Formal Logic: or, the Calculus of Inference, Necessary and Probable_, London: Taylor and Walton; reprinted London: The Open Court Company 1926.
* –––, 1966, _On the Syllogism and Other Logical Writings_, a posthumous collection of De Morgan’s papers on logic, edited by Peter Heath, New Haven: Yale University Press.
* Feferman, S. and R.L. Vaught, 1959, “The first order properties of products of algebraic systems”, _Fundamenta Mathematica_, 47: 57–103.
* Frege, F., 1879, _Begriffsschrift: eine der arithmetischen nachgebildete Formelsprache des reinen Denkens_, Halle a. S.: Louis Nebert.
* –––, 1884, _Die Grundlagen der Arithmetik:eine logisch-mathematische Untersuchung über den Begriff der Zahl_, Breslau: W. Koebner.
* –––, 1893/1903, _Grundgesetze der Arithmetik, begriffsschriftlich abgeleitet_, 2 vols, Jena: Verlag Hermann Pohle.
* Halmos, P.R., 1956a, “Algebraic logic. I. Monadic Boolean algebras”, _Compositio Mathematica_, 12: 217–249.
* –––, 1956b, “The basic concepts of algebraic logic”, _American Mathematical Monthly_, 63: 363–387.
* –––, 1956c, “Algebraic logic. II. Homogeneous locally finite polyadic Boolean algebras of infinite degree”, _Fundamenta Mathematica_, 43: 255–325.
* –––, 1956d, “Algebraic logic. III. Predicates, terms, and operations in polyadic algebras”, _Transactions of the American Mathematical Society_, 83: 430–470.
* –––, 1957, “Algebraic logic. IV. Equality in polyadic algebras”, _Transactions of the American Mathematical Society_, 86: 1–27.
* –––, 1962, _Algebraic logic_, New York: Chelsea Publishing Co.
* Henkin, L. and J.D. Monk, 1974, “Cylindric algebras and related structures”, in L. Henkin et al. (eds.), _Proceedings of the Tarski Symposium_, Proceedings of Symposia in Pure Mathematics, vol. XXV, Providence, RI: American Mathematical Society, pp. 105–121.
* Henkin, L. and A. Tarski, 1961, “Cylindric algebras”, in _Lattice Theory, Proceedings of Symposia in Pure Mathematics 2_, R. P. Dilworth (ed.), Providence, RI: American Mathematical Society, pp. 83–113.
* Hilbert, D., 1899, _The Foundations of Geometry_; reprinted Chicago: Open Court 1980, 2nd edition.
* Hilbert, D. and W. Ackermann, 1928, _Grundzüge der theoretischen Logik_, Berlin: Springer.
* Huntington, E.V., 1904, “Sets of independent postulates for the algebra of logic”, _Transactions of the American Mathematical Society_, 5: 288–309.
* –––, 1933, “New sets of independent postulates for the algebra of logic, with special reference to Whitehead and Russell’s Principia Mathematica”, _Transactions of the American Mathematical Society_, 35(1): 274–304.
* Jevons, W.S., 1869, _The Substitution of Similars, the True Principle of Reasoning, Derived from a Modification of Aristotle’s Dictum_, London: Macmillan and Co.
* –––, 1870, _Elementary Lessons in Logic, Deductive and Inductive_, London: Macmillan & Co.; reprinted 1957.
* –––, 1874, _The Principles of Science, A Treatise on Logic and the Scientific Method_, London and New York: Macmillan and Co.; reprinted 1892.
* –––, 1880, _Studies in Deductive Logic. A Manual for Students_, London and New York: Macmillan and Co.
* –––, 1883, _The Elements of Logic_, New York and Chicago: Sheldon & Co.
* –––, 1890, _Pure Logic and Other Minor Works_, Robert Adamson and Harriet A. Jevons (eds), New York: Lennox Hill Pub. & Dist. Co.; reprinted 1971.
* Jónsson, B. and A. Tarski, 1951, “Boolean Algebras with Operators. Part I”, _American Journal of Mathematics_, 73(4): 891–939.
* Kolata, G., 1996, “Computer Math Proof Shows Reasoning Power”, _The New York Times_, December 10 (Technology Section, Cybertimes Column). \[[Available Online](http://www.nytimes.com/library/cyber/week/1210math.html)]
* Löwenheim, L., 1915, “Über möglichkeiten im Relativkalül”, _Mathematische Annalen_, 76(4): 447–470.
* –––, 1940, “Einkleidung der Mathematik in Schröderschen Relativkalkul”, _Journal of Symbolic Logic_, 5: 1–17.
* Macfarlane, A., 1879, _Principles of the Algebra of Logic. With Examples_, Edinburgh: David Douglas.
* Monk, J. D., 1964, “On Representable Relation Algebras”, _The Michigan Mathematical Journal_, 11: 207–210.
* Mostowski, A., 1952, “On direct products of theories”, _Journal of Symbolic Logic_, 17: 1–31.
* Peirce, C.S., 1867, “On an Improvement in Boole’s Calculus of Logic”, _Proceedings of the American Academy of Arts and Sciences_, 7: 250–261; reprinted in Peirce 1933 \[CP], vol. III, pp. 1–19.
* Peirce, C.S., 1870, “Description of a notation for the logic of relatives, resulting from an amplification of the conceptions of Boole’s calculus of logic”, _Memoirs of the American Academy_, 9: 317–378; reprinted in _Collected Papers_ 1933: Volume III, 27–98.
* –––, 1880, “On the algebra of logic. Chapter I: Syllogistic. Chapter II: The logic of non-relative terms. Chapter III: The logic of relatives”, _American Journal of Mathematics_, 3: 15–57; reprinted in _Collected Papers_ 1933: Volume III, 104–157.
* –––, 1885, “On the Algebra of Logic: A Contribution to the Philosophy of Notation”, _American Journal of Mathematics_ 7(2): 180–202; reprinted in _Collected Papers_ 1933: Volume III, 359–403.
* –––, 1933 \[CP], _Collected Papers_, Charles Hartshorne and Paul Weiss (eds.), Cambridge: Harvard University Press.
* Schröder, E., 1890–1910, _Algebra der Logik, Vols. I–III_; reprint Chelsea 1966.
* Sheffer, H.M., 1913, “A set of five independent postulates for Boolean algebras, with application to logical constants”, _Transactions of the American Mathematical Society_, 14(4): 481–488.
* Skolem, T., 1919, “Untersuchungen über die Axiome des Klassenkalküls und Über Produktations- und Summationsprobleme, welche gewisse Klassen von Aussagen betreffen”, _Videnskapsselskapets skrifter, I. Matematisk-naturvidenskabelig_, klasse 3; reprinted in Skolem 1970: 66–101.
* –––, 1920, “Logisch-kombinatorische Untersuchungen über die Erfülbarkeit oder Beweisbarkeit mathematischer Sätze nebst einem Theoreme über dichte Menge”, _Videnskapsselskapets skrifter, I. Matematisk-naturvidenskabelig_, klasse 6: 1–36.
* –––, 1922, “Einige Bemerkungen zur axiomatischen Begrundung der Mengenlehre”, _Matematikerkongressen i Helsingfors den 4–7 Juli 1922, Den femte skandinaviska matematikerkongressen, Redogörelse_, Helsinki: Akademiska Bokhandeln; reprinted in Skolem 1970: 189–206.
* –––, 1928, “Über die mathematische Logik”, _Norsk Mathematisk Tidsskrift_, 10: 125–142; in van Heijenoort 1967: 508–524.
* –––, 1970, _Selected Works in Logic_, Oslo: Universitetsforlaget.
* Stone, M.H., 1936, “The theory of representations for Boolean algebras”, _Transactions of the American Mathematical Society_, 40(1): 37–111.
* –––, 1937, “Applications of the theory of Boolean rings to general topology”, _Transactions of the American Mathematical Society_, 41(3): 375–481.
* Tarski, A., 1941, “On the calculus of relations”, _The Journal of Symbolic Logic_, 6(3): 73–89
* Tarski, A. and S. Givant, 1987, _Set Theory Without Variables_, (Series: Colloquium Publications, Volume 1), Providence: American Mathematical Society.
* Whitehead, A.N., and B. Russell, 1910–1913, _Principia Mathematica I–III_, Cambridge: Cambridge University Press.
* Whitman, P.M., 1941, “Free lattices”, _Annals of Mathematics_, second series, 42(1): 325–330.
* Wiener, N., 1913, _A Comparison between the treatment of the algebra of relatives by Schroeder and that by Whitehead and Russell_, Ph.D. thesis, Harvard University (Norbert Wiener Papers. MC 22. Institute Archives and Special Collections, MIT Libraries, Cambridge, Massachusetts).

### Secondary Sources

* Badesa, Calixto, 2004, _The Birth of Model Theory. Löwenheim Theorem in the Frame of the Theory of Relations_, Princeton & Oxford: Princeton University Press.
* Brady, Geraldine, 2000, _From Peirce to Skolem_, Amsterdam et al.: North-Holland.
* Burris. Stanley & H.P. Sankappanavar, 2013, “The Horn Theory of Boole’s Partial Algebras”, _The Bulletin of Symbolic Logic_, 19(1): 97–105.
* Esquisabel, Oscar M., 2012, “Representing and Abstracting. An Analysis of Leibniz’s Concept of Symbolic Knowledge”, in Abel Lassalle Casanave (ed.), _Symbolic Knowledge from Leibniz to Husserl_, London: College Publications, pp. 1–49.
* Gabbay, Dov. M. & John Woods (eds.), 2004, _Handbook of the History of Logic. Volume 3, The Rise of Modern Logic: From Leibniz to Frege_, Amsterdam et al.: Elsevier North Holland.
* Grattan-Guinness, Ivor, 1991, “The Correspondence between George Boole and Stanley Jevons, 1863–1864”, _History and Philosophy of Logic_, 12(1): 15–35
* –––, 2000, _The Search for Mathematical Roots,1870–1940. Logic, Set Theories and the Foundations of Mathematics from Cantor trough Russell to Gödel_, Princeton & Oxford: Princeton University Press.
* Hailperin, Theodore, 2004, “Algebraical Logic 1685–1900”, in Gabbay & Woods 2004: 323–388.
* Haaparanta, Leila (ed.), 2009, _The Development of Modern Logic_, New York and Oxford: Oxford University Press.
* Heinemann, Anna-Sophie, 2015, _Quantifikation des Prädikats und numerisch definiter Syllogismus_, Münster: Mentis 2015.
* Legris, Javier, 2012, “Universale Sprache und Grundlagen der Mathematik bei Ernst Schröder”, in G. von Löffladt (ed.), _Mathematik – Logik – Philosophie. Ideen und ihre historischen Wechselwirkungen_, Frankfurt a. M.: Harri Deutsch, pp. 255–269.
* Mancosu, Paolo, Richard Zach, and Calixto Badesa, 2009, “The Development of Mathematical Logic from Russell to Tarski: 1900–1935”, in Haaparanta 2009: 318–471
* Peckhaus, Volker, 1997, _Logik, Mathesis universalis und allgemeine Wissenschaft_, Berlin: Akademie Verlag.
* –––, 2004, “Schröder’s Logic”, in Gabbay & Woods 2004: pp. 557–609.
* –––, 2009, “The Mathematical Origins of Nineteenth-Century Algebra of Logic”, in Haaparanta 2009: 159–195.
* Sánchez Valencia, Victor, 2004, “The Algebra of Logic”, in Gabbay & Woods 2004: pp. 389–544.
* Sinaceur, Hourya, 1999, _Corps et Modèles. Essai sur l’histoire de l’algèbre réelle_, 2nd ed., Paris: Vrin.
* Styazhkin, N. I., 1969, _History of Mathematical Logic from Leibniz to Peano_, Cambridge, MA: MIT Press.
* Van Heijenoort, Jean, 1967, “Logic as Calculus and Logic as Language”, _Synthese_, 17: 324–330

## Academic Tools

| ![sep man icon](../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=algebra-logic-tradition).                                                                      |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![sep man icon](../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/algebra-logic-tradition/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
| ![inpho icon](../.gitbook/assets/inpho.png)         | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=algebra-logic-tradition\&redirect=True) at the Internet Philosophy Ontology Project (InPhO).   |
| ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif)      | [Enhanced bibliography for this entry](https://philpapers.org/sep/algebra-logic-tradition/) at [PhilPapers](https://philpapers.org/), with links to its database.                          |

## Other Internet Resources

\[Please contact the author with suggestions.]

## Related Entries

[algebra](https://plato.stanford.edu/entries/algebra/) | [Boole, George](https://plato.stanford.edu/entries/boole/) | [Leibniz, Gottfried Wilhelm: influence on 19th century logic](https://plato.stanford.edu/entries/leibniz-logic-influence/) | [model theory](https://plato.stanford.edu/entries/model-theory/) | [model theory: first-order](https://plato.stanford.edu/entries/modeltheory-fo/)

[Copyright © 2021](https://plato.stanford.edu/info.html#c) by\
[Stanley Burris](http://www.math.uwaterloo.ca/\~snburris/)\
Javier Legris <[_javier.legris@gmail.com_](mailto:javier%2elegris%40gmail%2ecom)>
