# 逻辑代数的发展 algebra of logic tradition (Stanley Burris and Javier Legris)

*首次发表于 2009 年 3 月 2 日；实质性修订于 2021 年 2 月 12 日*

逻辑代数作为一种显式的代数系统，展示了逻辑的基本数学结构，由乔治·布尔（1815-1864）在他的著作《逻辑的数学分析》（1847 年）中引入。因此，它与代数逻辑的更一般方法有所区别。布尔开创的方法在 19 世纪得到了成功的延续，威廉·斯坦利·杰文斯（1835-1882）、查尔斯·桑德斯·皮尔斯（1839-1914）、恩斯特·施罗德（1841-1902）等人的工作在（数学）逻辑领域建立了一种传统。从布尔的第一本书开始，直到阿尔弗雷德·诺思·怀特海德（1861-1947）和伯特兰·罗素（1872-1970）在第一次世界大战后的巨著《数学原理》（1910-1913）的影响下，逻辑代数的各种版本一直是最发达的数学逻辑形式，尤其是在施罗德的三卷本《逻辑代数讲义》（1890-1905）中所呈现的形式。此外，这一传统激发了莱奥波德·勒文海姆（1878-1957）的研究，最终催生了模型论。此外，1941 年，阿尔弗雷德·塔斯基（1901-1983）在他的论文《关系演算》中回到了皮尔斯在施罗德的逻辑代数中所呈现的关系代数。逻辑代数的传统在逻辑作为演算法的概念与逻辑作为通用语言的概念之间起到了关键作用。除了塔斯基的关系代数之外，逻辑代数的传统影响还可以在其他数学理论中找到，比如范畴论。然而，这种影响超出了本条目的范围，本条目分为 10 个部分。

---

## 1. 引言

布尔的《逻辑的数学分析》提出了许多有趣的逻辑创新：它是 19 世纪逻辑数学化的开始，并提供了一种算法替代方案（通过对传统逻辑的轻微修改）来取代目录方法（即使后者也发展了简化程序）。与列出有效论证形式的清单不同，论证的有效性是基于一般原则和规则确定的。此外，它提供了一种有效的方法来根据一套公理证明逻辑定律。正如布尔后来所写的那样，它是一个适当的“推理科学”，而不是传统的三段论（布尔 1997 年：136）那样的“记忆艺术”。在本书的三分之三处，在完成对三段论逻辑的讨论后，布尔开始发展一般工具，这些工具将在他的《思维的法则》（1854 年）中被广泛应用，允许一个论证有多个前提并涉及多个类别。为了处理这个扩展逻辑的无限多个可能的逻辑论证，他提出了定理，为算法分析提供了关键工具（目录已不再可行）。

布尔的思想是独立于早期预期的，比如 G.W.莱布尼兹所开发的思想。它们源于英国数学的特定背景（参见 Peckhaus 2009）。根据维克多·桑切斯·瓦伦西亚的说法，起源于布尔的传统被称为逻辑代数，自从亚历山大·麦克法兰于 1879 年出版了《逻辑代数原理》以来（参见桑切斯·瓦伦西亚 2004 年：389）。麦克法兰认为“布尔提出的关于质量的分析推理方法”是一种代数（参见麦克法兰 1879 年：3）。

这种方法与通常所称的代数逻辑不同；尽管存在一些重叠，但这两个领域的历史发展是不同的。代数逻辑被理解为：

> 一种逻辑风格，其中概念和关系通过数学符号来表达 [...] 以便可以应用数学技术。在这里，数学主要指代数，即与某个集合上的有限操作有关的数学部分。（Hailperin 2004: 323）

代数逻辑已经可以在莱布尼兹、雅各布·伯努利和其他现代思想家的作品中找到，它无疑构成了布尔方法的重要前身。从更广泛的视角来看，两者都是形式科学中象征性知识传统的一部分，正如莱布尼兹最初构想的那样（参见 Esquisabel 2012）。这种代数逻辑的思想在法国启蒙时代的康迪亚克和孔多塞的作品中得到了一定程度的延续（参见 Grattan-Guinness 2000: 14 ff.）。

布尔处理逻辑问题的方法可以描述如下：

1. 将逻辑数据转化为适当的方程；
2. 应用代数技巧解决这些方程；
3. 如果可能的话，将这个解答重新翻译回原始语言。

换句话说，逻辑问题的符号化表述和逻辑方程的解决构成了布尔的方法（参见桑切斯·瓦伦西亚 2004 年：389）。

后来，在他 1864 年的《纯逻辑》中，杰文斯将布尔的不相交集合的部分并运算改为了现代的无限制并运算，并消除了布尔对于无法解释的术语的可疑使用（参见杰文斯 1890 年）。皮尔斯（1880 年）通过给出“所有 A 都是 B”的现代含义，明确消除了亚里士多德从普遍陈述中推导出特殊陈述的方法。此外，他将逻辑代数扩展到了二元关系的逻辑代数，并引入了一般的求和和乘积来处理量化。恩斯特·施罗德（Ernst Schröder）在皮尔斯的框架下，受到赫尔曼（1809-1877）和罗伯特·格拉斯曼（1815-1901）的先前工作的启发，对 19 世纪逻辑代数的成就进行了发展和系统化，形成了他的三卷本著作《逻辑代数讲义》（1890-1910）。

戈特洛布·弗雷格（Gottlob Frege）在 1879 年至 1903 年期间对逻辑的贡献，基于公理化方法，当时几乎没有影响力（同样可以说 C.S.皮尔斯在世纪之交开发的图示系统也是如此）。怀特海德和罗素拒绝了逻辑代数的方法，其主要是等式表述和代数符号，而是采用了弗雷格的公理系统强烈启发的方法，并使用乔治·皮亚诺（Giuseppe Peano）开发的符号，即使用逻辑连接词、关系符号和量词。

在 20 世纪前两个十年期间，逻辑代数在普拉东·谢尔盖耶维奇·波列茨基（1846-1907）、路易·库图拉（1868-1914）、莱奥波德·勒文海姆（1878-1957）和海因里希·贝曼（1891-1970）的作品中得到进一步发展（参见斯蒂亚金 1969 年）。特别是逻辑代数中的消除定理影响了一阶和二阶逻辑片段的决策过程（参见曼科苏，扎克，巴德萨 2009 年）。

第一次世界大战后，起初采用代数方法的大卫·希尔伯特（1862-1943）采用了《原理》的方法，逻辑代数不再受青睐。然而，在 1941 年，塔斯基将关系代数视为一个等式定义的类。这样一个类除了在 1800 年代考虑的给定宇宙上的所有二元关系的集合之外，还有许多模型，就像在 1800 年代研究的布尔代数的幂集布尔代数一样。在 1948 年至 1952 年期间，塔斯基与他的学生钦和汤普森一起，创造了圆柱代数作为一阶逻辑的代数逻辑伴侣，并且在 1956 年，保罗·哈尔莫斯（1916-2006）引入了多元代数以达到同样的目的。正如哈尔莫斯（1956 b、c 和 d）所指出的，这些新的代数逻辑倾向于研究它们捕捉一阶逻辑的程度以及它们的通用代数方面，如公理化和结构定理，但对于激发它们创造的一阶逻辑的本质提供了很少的洞察。

## 2. 1847 年-现代版本的逻辑代数的开始

在 1847 年末，布尔（Boole）和奥古斯都·德·摩根（1806-1871）各自出版了一本关于逻辑的书籍 - 布尔的《逻辑的数学分析》（1847 年）和德·摩根的《形式逻辑》（1847 年）。德·摩根的方法是将传统演绎逻辑（通常称为“亚里士多德逻辑”）的每个方面都剖析成最细微的组成部分，考虑如何概括这些组成部分，然后在某些情况下，利用这些组成部分构建一个逻辑系统。不幸的是，他从未能将自己最好的想法融入到一个重要的系统中。他没有引入一个表示相等的符号，这使得无法发展逻辑的等式代数。德·摩根似乎不擅长综合。

德·摩根在 1847 年的著作是逻辑研究复兴的一部分，该复兴始于 19 世纪初的法国约瑟夫·迪埃斯·格尔贡（1771-1859）和波希米亚的伯恩哈德·博尔扎诺（1781-1848），以及其他人的努力。英国的乔治·本特利和威廉·汉密尔顿也参与了这一复兴，他们的研究重点是传统三段论中范畴句子的变化性质，包括所谓的“谓词的量化”；例如，“所有 A 都是一些 B”或“一些 A 都是所有 B”。人们认为这个问题需要扩展亚里士多德的三段论逻辑，并且需要某种形式的符号方法来处理这些陈述并对其不同类型进行分类（参见 Heinemann 2015 的第 2 章和第 3 章）。

布尔从完全不同的角度来处理逻辑，即如何将亚里士多德逻辑转化为符号代数的形式。使用符号代数是他在微分方程研究中熟悉的主题，也是他年轻朋友和导师邓肯·法夸尔森·格雷戈里（1813-1844）的各种论文中尝试将几何等其他学科转化为符号代数语言的尝试。由于将符号代数应用于微分方程是通过引入微分算子进行的，所以布尔自然会寻找适用于亚里士多德逻辑领域的算子。他很快想到了使用“选择”算子的想法，例如，红色的选择算子将从一个类中选择红色成员。在他的 1854 年的著作中，布尔意识到省略选择算子并直接使用类更为简单。（然而，他保留了选择算子，以证明他的逻辑法则并非最终基于对语言使用的观察，而实际上深深扎根于人类思维的过程中。）从现在开始，在本文中讨论布尔的 1847 年著作时，选择算子已被更简单的直接表述使用类的形式所取代。

由于符号代数只是普通代数的句法方面，布尔需要一种方法来解释代数的常规运算和常数，以创建他的逻辑代数。乘法被解释为交集，导致他的一个新定律，即乘法的幂等定律 XX=X，重新发现了莱布尼兹已经提出的一个逻辑定律。加法被定义为并集，前提是处理不相交的类；减法被定义为类差，前提是从一个类中减去一个子类。在其他情况下，加法和减法运算被简单地定义为未定义的，或者如布尔所写的，无法解释的。算术的通常定律告诉布尔，1 必须是宇宙，1−X 必须是 X 的补集。

布尔系统的下一步是将四种范畴命题翻译成方程，例如“所有 X 都是 Y”变为 X=XY，“一些 X 是 Y”变为 V=XY，其中 V 是一个新符号。为了消除三段论中的中项，布尔从普通代数中借用了一个消除定理，但对于他的逻辑代数来说，这个定理太弱了。这在他 1854 年的书中得到了纠正。布尔发现，他不能总是通过上述特殊命题（即具有存在性含义的命题）的翻译推导出所需的结论，因此他添加了变体 X=VY，Y=VX 和 VX=VY（请参阅布尔的条目）。

19 世纪的符号代数不仅包括多项式代数，布尔还尝试了哪些结果和工具可能适用于逻辑代数。例如，他通过使用无限级数展开证明了他的一个结果。他对普通代数的可能性着迷，他考虑了诸如：如果幂等定律被替换为定律 X3=X，逻辑会是什么样子？他的继任者，特别是杰文斯，很快将类的操作缩小到我们今天使用的那些，即并集、交集和补集。

正如前面提到的，在他 1847 年的简短著作中，布尔在完成他系统中传统亚里士多德三段论的推导之后，宣布他的逻辑代数能够应用于更广泛的领域。然后，他继续添加关于展开术语的一般定理，提供方程的解释，并使用长除法将一个类在方程中表示为其他类（附加了附加条件）。

布尔的定理在 1854 年完成和完善，为分析无限多个论证形式提供了算法。这开辟了一种新的、富有成果的视角，偏离了传统的逻辑方法，几个世纪以来，学者们一直努力想出巧妙的记忆法来记住一个非常小的有效转换和三段论及其各种相互关系的目录。

德摩根的形式逻辑没有得到重要的认可，主要是因为它是一个大量的小事实的集合，没有重要的综合。布尔的《逻辑的数学分析》具有强大的方法，引起了德摩根和亚瑟·凯利（1821-1895）等少数学者的注意；但是，布尔的逻辑代数的运作方式立即引发了严重的问题：它与普通代数有多密切的联系？布尔如何证明他的逻辑代数的程序？回顾起来，布尔显然不知道他的系统为什么有效。他声称，根据格雷戈里的观点，为了证明使用普通代数是足够的，只需检查乘法的交换律 XY=YX 和分配律 X（Y+Z）=XY+XZ，这显然是错误的。尽管如此，他很可能已经在足够多的情况下检查了他的结果，以实现他对自己系统正确性的信念。

## 3. 1854 年 - 布尔的逻辑代数的最终呈现

在他的第二本书《思维的法则》中，布尔不仅将代数方法应用于传统逻辑，还试图对逻辑进行一些改革。他首先扩充了他 1847 年的逻辑代数的法则（并没有明确表示他之前的三个公理列表是不足的），并对推理规则（在等式的两边执行相同的操作）发表了一些评论。但然后他随意地陈述，他的系统的基础实际上是建立在一个单一（新的）原则上，即只需检查一个论证是否正确，当类符号仅取值为 0 和 1 时，并且操作是通常的算术运算。让我们称之为布尔的 0 和 1 法则。对于布尔采用这个新基础的有意义的理由没有给出，它没有被赋予特殊的名称，并且在书的其余部分对它的引用通常表达得相当笨拙。关于这个 0 和 1 法则的现代分析，请参见 Burris＆Sankappanavar 2013 年。

《思维的法则》中逻辑代数的发展与他 1847 年的书籍类似，只是翻译方案有些微小的变化，并且选择运算符被类替代。有一个新的非常重要的定理（纠正了他在 1847 年使用的定理），即消除定理，它说：给定一个方程 F(x,y,z，...) = 0，其中 x，y，z 等是类符号，从消除某些类符号得出的最一般的结论是通过（1）以所有可能的方式将 0 和 1 代入 F(x,y,z，...)中要消除的符号，然后（2）将这些不同的替代实例相乘，并将乘积设为 0。因此，从 F(x,y,z)=0 中消除 y 和 z 得到 F(x,0,0)F(x,0,1)F(x,1,0)F(x,1,1)=0。这个定理在布尔对亚里士多德的演绎逻辑的解释中也起到了重要的作用。

从逻辑代数的角度来看，1854 年的处理方法在某些时候似乎不如 1847 年的书中那样优雅，但它更深入地揭示了布尔对于他的逻辑代数基础的思考。关于逻辑的最后一章，第 15 章，是试图给予亚里士多德的转换和三段论一个统一的证明。（有趣的是，在第 15 章之前，布尔没有提供任何涉及特定命题的论证示例。）第 15 章的细节非常复杂，主要是因为应用了消除和发展定理时表达式的增大。布尔只是把大部分工作留给读者。后来的评论者会忽略这一章，似乎没有人仔细研究过它的细节。

除了 0 和 1 的规则和消除定理之外，1854 年的演示主要有趣的是布尔试图为他的逻辑代数辩护。他认为，在符号代数中，只要前提和结论中的术语是可解释的，就可以像操作是完全的情况下一样进行等式推导，即使操作是部分的也是可以接受的。他说这就是普通代数使用不可解释的-1 的平方根的方式。（复数的几何解释早在 Wessel、Argand 和 Gauss 的时候就被认可了，但直到 19 世纪 30 年代 Gauss 和 Hamilton 的出版物出现后，对于复数在更大的数学界是否可接受的疑虑才被克服。有趣的是，在 1854 年，布尔将-1 的平方根视为不可解释的。）

关于布尔的逻辑代数方法存在一些问题：

1. 他的逻辑代数和数字代数之间是否存在有意义的联系，还是它们之间的相似性只是偶然的？
2. 在以方程为重点的代数逻辑中，是否可以处理特定命题？
3. 在等式推导中使用无法解释的术语真的可接受吗？
4. 布尔是否使用了“亚里士多德式”的语义（传统逻辑中假定术语的外延非空）？

## 4. 杰文斯：基于总运算的逻辑代数

杰文斯曾在德摩根那里学习过，他是第一个提出与布尔系统不同的选择的人。1863 年，他写信给布尔，认为布尔的加法运算应该被更自然的“包容或”（或“并集”）所取代，从而得到 X+X=X 的法则。布尔完全拒绝了这个建议（因为它会破坏他基于普通代数的系统），并中断了通信。杰文斯在他 1864 年的著作《纯逻辑》中发表了他的系统（在 1890 年的杰文斯重印本中）。他所说的“纯”是指他摒弃了对数字代数的任何依赖——他将使用与数量相关的类别代替，而使用与质量相关的谓词，并且他的法则将直接从包容析取和合取的（总）基本运算中推导出来。但他保留了布尔在他的逻辑代数中将方程式作为陈述的基本形式的用法。

通过采用德摩根的约定，即使用大写/小写字母表示补集，杰文斯的系统不适合为现代布尔代数提供等式公理。然而，他改进了他的公理系统和推理规则，直到结果基本上成为现代布尔代数的系统，适用于基本术语，即将类符号视为常量而不是变量的术语。

必须注意，现代等式逻辑处理普遍量化的等式（在 19 世纪被称为定律）。在 19 世纪的逻辑代数中，可以将“所有 X 都是 Y”翻译为等式 X=XY。这不应被视为普遍量化表达式（∀X）（∀Y）（X=XY）。X 和 Y 应被视为常量（或示意字母）。只有常量（没有变量）的术语称为基本术语。

通过在谓词代数（或等价地，在类代数）的特殊环境中进行这种分析，杰文斯在现代等式逻辑的发展中发挥了重要作用。正如前面提到的，布尔为他的系统提供了不充分的等式公理集，最初从格雷戈里的两个定律开始，再加上他的幂等定律；这些定律伴随着德摩根的推理规则，即可以对等式进行相同的操作（布尔在他的逻辑代数中的基本运算是加法、减法和乘法），并得到相等的结果。然后，布尔转而使用简单而强大（但未解释的）的 0 和 1 规则。

将布尔的基本运算替换为总运算后，杰文斯在多年的时间里继续研究他的系统的公理和规则。我们现在认为理所当然的一些等式逻辑元素需要杰文斯花费相当多的时间来解决：

反身律（A=A）。1864 年，杰文斯将其列为一个公设（1890 年，第 11 页），然后在 §24 中将 A=A 称为“无用的相同命题”。在他 1869 年关于替换的论文中，它成为了“恒等律”。在《科学原理》（1874 年）中，它是三个“思维基本定律”之一。

对称律（B=A 推导自 A=B）。1864 年，杰文斯写道“A=B 和 B=A 是同一命题”。这是他一直坚持的立场。1874 年，他写道

> 我将考虑两种形式 A=B 和 B=A，它们表达了完全相同的身份，只是以不同的方式书写。

对于他逻辑代数的最终形式，我们转向他在《科学原理》（1874 年）中分散在 40 页上的定律，他用 ⋅∣⋅ 取代了之前使用的+，显然是为了进一步远离与数字代数的任何联系：

 组合定律

AABA⋅∣⋅AA⋅∣⋅BA(B⋅∣⋅C)=AA=AAA=&c=BA=A=B⋅∣⋅A=AB⋅∣⋅AC 简易法则（第 33 页）交换律（第 35 页）统一法则（第 72 页）交换律（第 72 页）（未给出名称）（第 76 页）

 思维法则

AAaA=A=o=AB⋅∣⋅Ab 同一律（第 74 页）矛盾律（第 74 页）对偶律（第 74 页）

对于他的推理规则，杰文斯选择了他的替换原则 - 用现代术语来说，这本质上是地面替换和传递性的结合。他展示了如何从中推导出等式的传递性；他也可以推导出对称性，但他没有这样做。结合律缺失了 - 这在他的表达式中没有括号中是隐含的。

只有在他的《演绎逻辑研究》（1880 年）中，杰文斯提到了麦考尔使用重音符号表示否定的方法。在指出麦考尔的重音符号允许我们对复杂的括号项取否定之后，他继续说，大部分情况下，他发现德摩根的符号表示法更加优雅，而这也是他一直使用的表示法。

## 5. 皮尔斯：以包容为基础的逻辑代数

皮尔斯在 19 世纪 60 年代末开始研究逻辑代数。在他的论文《关于改进布尔逻辑的演算法》（皮尔斯 1867 年）中，他独立得出了杰文斯早先得出的相同结论，即需要用并集的总运算取代布尔的部分运算（参见 CP 3.3.6）。在他重要的 1880 年论文《关于逻辑代数》中，皮尔斯悄然与传统的外延语义决裂，并引入了现代语义学的一个常见假设：概念的外延，即类，可以是空的（以及宇宙），并陈述了我们今天使用的范畴命题的真值。例如，他说命题“所有 A 都是 B”如果 A 和 B 都是空类，则为真。限制转换，即论证“所有 A 都是 B”因此“一些 B 是 A”，不再是一个有效的推理。皮尔斯对他离开传统语义存在假设的原因和优点没有提及。

皮尔斯还与布尔和杰文斯使用相等性作为基本原语的做法决裂，而是使用了可以以不同方式解释的“包含”关系（子类关系、蕴涵等）。他陈述了“包含”的偏序性质，然后定义了+和 × 的运算作为最小上界和最大下界——他隐含地假设这样的界存在——并列出了我们现在称之为格的具有两个二元运算的代数的关键等式性质。然后他声称分配律成立，但说证明过程太繁琐，不包括在内。这种观点的富有成果在他 1885 年的开创性论文中显而易见。在那里，皮尔斯引入了一个基于五个蕴涵公理（用符号“−<”表示）的命题逻辑系统，其中包括现在称为皮尔斯定律的公理。这无疑使逻辑代数更加优雅。

## 6. 德摩根和皮尔斯：关系和量词在逻辑代数中的应用

德摩根在 1846 年至 1863 年间写了一系列名为《论三段论》的六篇论文（收录于德摩根 1966 年的重印版）。在他努力推广三段论的过程中，德摩根在该系列的第二篇论文中于 1850 年用一个普遍的二元关系取代了连词“是”。通过允许在三段论的两个前提中使用不同的二元关系，他引入了两个二元关系的组合来表达三段论的结论。在追求广义三段论的过程中，他引入了二元关系的其他各种运算，包括逆运算，并为这些运算开发了一个片段的演算法。他在该主题上的主要论文是该系列的第四篇，名为《论三段论，第四篇，以及关系的逻辑》，发表于 1859 年（参见德摩根 1966 年）。

在德摩根的论文之后，皮尔斯在他 1870 年的论文《关于亲属逻辑的符号化描述，源自布尔逻辑演算法的概念的扩展》中，将布尔的工作推广到二元关系的环境中——在二元关系中，除了并、交和补之外，还有组合和逆的自然运算。二元关系被定义为一组有序对（见 3.328）。他在 1870 年至 1883 年间研究了这个新的演算法。与德摩根一样，皮尔斯还考虑了许多其他关系的自然运算。皮尔斯在这个主题上的主要论文是《关于逻辑代数》（1880 年）。通过使用无限制的并集，用 Σ 表示，和无限制的交集，用 Π 表示，皮尔斯在他的逻辑代数中引入了量词。

在 1882 年的一篇论文《亲属代数的简要描述》中，重新印刷于德摩根 1966 年，他使用这些量词通过对某种系数的操作来定义关系的操作。德摩根因引入关系的概念而受到赞誉，但皮尔斯被认为是关系理论的真正创造者（参见，例如，塔斯基 1941 年：73）。然而，皮尔斯并没有发展这个理论。正如卡利克斯托·巴德萨所写的，“亲属演算从来不是皮尔斯喜欢的”（巴德萨 2004 年：32）。他认为由于类操作与关系操作的组合，它太复杂了。相反，他从 1885 年开始更喜欢发展一个包括量词但没有关系操作的“一般代数”。这样，他得到了现在称为一阶逻辑的基本和非正式的表达（参见巴德萨 2004 年，loc. cit.）。

## 7. 谢林对逻辑代数的系统化

德国数学家恩斯特·谢林在逻辑代数传统中起着关键作用。一个很好的例子是他向皮尔斯提出挑战，要求他证明分配律，作为具有两个二元操作的代数的关键等式性质之一。皮尔斯（1885 年）承认他无法提供证明。多年后，亨廷顿（1904 年：300-301）描述了他在 1903 年 12 月收到的一封皮尔斯来信的部分内容，声称提供了缺失的证明 - 显然皮尔斯在谢林 1902 年去世后偶然发现了这些遗失已久的页面。皮尔斯向亨廷顿解释说，他最初认为谢林的挑战是有根据的，而他的论文中的这个明显的缺点“将被添加到由于流感而充斥其中的错误清单中...”。实际上，皮尔斯的证明并没有纠正这个错误，因为分配律在普遍的格中并不成立；相反，他的证明引入了补集操作 - 他使用了公理

> 如果 a 不包含在 b 的补集中，则 a 和 b 有一个共同的下界。

基于他之前的代数工作，Schröder 在 19 世纪末写了一部百科全书式的三卷作品，名为《逻辑代数讲义》（1890-1905），以 Peirce 提出的现代类语义为基础的包含框架。这项工作是他在代数研究中的成果，揭示了不同的影响。Schröder 的目标是建立一个具有广泛应用于许多数学领域的一般代数理论，其中逻辑代数是核心。正如 Geraldine Brady 指出的，它提供了抽象格理论的首次阐述，是 Dedekind 之后对链理论的首次阐述，是关系演算最全面的发展，并且基于关系演算对数学基础的处理（参见 Brady 2000: 143 f.）。

第一卷涉及类的等式逻辑，主要结果是布尔的 1854 年消除定理。在附录中出现了三个相当复杂的反例，用于反驳 Peirce 关于分配律的主张，其中一个涉及九百九十个四元群的恒等式。基于这一卷，Dedekind（1897）构建了一个优雅的现代抽象格理论（他称之为 Dualgruppen）；在这篇论文中，他提出了一个五元素的反例，反驳了 Peirce 关于分配律的主张。

第二卷扩展了第一卷中发展的类别逻辑代数，以便能处理存在性陈述。首先，使用现代语义学，谢林证明了不能使用方程式来表达“某个 X 是 Y”。然而，他指出可以用否定的方程式来轻松表达它，即 XY≠0。第二卷是对使用方程式和否定方程式的类别演算的研究，试图涵盖第一卷中涵盖的相同主题，特别是在寻找消除定理方面付出了相当大的努力。在处理了几个特殊情况之后，谢林将这个主题推荐为一个重要的研究领域——寻找消除定理的探索被称为消除问题。

受皮尔斯的工作的主要启发，谢林在他的《逻辑代数讲义》第三卷中研究了二元关系的逻辑代数。正如塔斯基曾经指出的那样，谢林以非常全面和系统的方式继续并扩展了皮尔斯的工作。对他来说，一个特别迷人的问题是：在这个代数中给定一个方程 E(x,y,z,...)=0，找到关系符号之一（比如 x）的一般解，以其他关系符号为条件。他设法在给定一个特定解 x=x0 的情况下，找到一个具有以下特性的非凡术语 S(t,y,z,...)：（1）对于任何关系 t 的选择，x=S(t,y,z,...)都是方程 E=0 的解，（2）通过选择适当的 t，可以以这种方式获得方程 E=0 的每个解 x。皮尔斯对谢林对解方程问题的过度关注并不感到印象深刻，并指出谢林的参数解是一个小小的骗局——逻辑代数对于关系的表达能力非常强大，通过评估术语 S(t,y,z,...)实际上就是执行检查 E(t,y,z,...)=0 的步骤；如果答案是肯定的，那么 S(t,y,z,...)返回值 t，否则返回值 x0。

总结一下，Schröder 构建了现代谓词逻辑的代数版本，还构建了关系理论。他将其应用于不同领域（例如，康托尔的集合论），并将其代数符号视为一种通用语言（通用文字，参见 Peckhaus 2004 和 Legris 2012）。值得注意的是，Löwenheim 在 1940 年仍然认为这与集合论一样合理。根据他的说法，Schröder 解决关系方程的想法是 Skolem 函数的前身，而 Schröder 启发了 Löwenheim 对著名定理的表述和证明，即每个具有无限模型的“算术”句子都有一个可数模型。Schröder 的关系演算是 Norbert Wiener（1894-1964）在哈佛大学（Wiener 1913）的博士论文的基础。根据 Brady 的说法，Wiener 对关系演算进行了第一个公理化处理，比 Tarski 的公理化处理早了二十多年（参见 Brady 2000：165）。

## 8. Huntington：逻辑代数的公理研究

在 19 世纪末，David Hilbert（1862-1943）在他的《几何的基础》中将欧几里得几何作为一门不依赖于图示的公理学科进行了展示（Hilbert 1899）。这引发了对数学中公理系统的研究的兴趣浪潮；特别是人们想知道这些公理是否是独立的，以及哪些基本概念可以导致最优雅的系统。Edward Vermilye Huntington（1874-1952）是最早研究逻辑代数中这个问题的人之一。他给出了逻辑代数的三个公理化处理，证明了每组公理都是独立的，并且它们是等价的（参见 Huntington 1904）。1933 年，他再次回到这个主题，提出了三组新的公理，其中包含以下三个方程（1933：280）：

a+b(a+b)+c(a′+b′)′+(a′+b)′=b+a=a+(b+c)=a.

不久之后，赫伯特·罗宾斯（1915-2001）猜测第三个方程可以用稍微简单一点的方式替代

[(a+b)′+(a+b′)′]′=a.

亨廷顿和罗宾斯都无法证明这一点，后来许多其他人的努力也未能证明，包括塔斯基和他在伯克利的才华横溢的学派。在 Winker 的部分结果的基础上，由阿贡国家实验室的威廉·麦克尤恩设计的自动定理证明器 EQP 在 1996 年证明了罗宾斯猜想。这一成就在科拉塔 2010 年的著作中得到了广泛宣传。

根据亨廷顿（1933: 278）的说法，“布尔代数”一词是由亨利·M·谢弗（1882-1964）在他的论文中引入的，他在该论文中展示了可以使用联合排斥的单一基本运算（现在被称为谢弗符号）给出布尔代数的五方程公理化。怀特海德和罗素在《原理》第二版的前言中声称，谢弗符号是自《原理》出版以来逻辑学的最大进展。（希尔伯特和阿克曼（1928）则表示谢弗符号只是一种奇特现象。）两位都没有意识到几十年前，舒尔德尔发现了谢弗符号的对偶也是这样一个运算，舒尔德尔对他的运算的符号是双刃剑的形状。

在 1930 年代，加勒特·伯克霍夫（1911-1996）建立了等式逻辑的基本结果，即（1）代数的等式类恰好是在同态、子代数和直积下封闭的类，以及（2）等式逻辑基于五个规则：自反性、对称性、传递性、替换性和代入性。在 1940 年代，塔斯基加入了等式逻辑的发展；从 1950 年代至今，这个学科取得了快速进展。

## 9. 石头：逻辑代数的模型

传统逻辑研究了类之间的某些简单关系，即是子类和具有非空交集。然而，一旦采用公理化方法，除了显而易见的模型之外，还出现了可能的模型的话题。贝尔特拉米在 19 世纪 60 年代末引入了非欧几何的模型。在 19 世纪 90 年代，舍尔德和戴德金德构建了格论公理的模型，以证明分配律不成立。但是，当涉及到类的代数时，舍尔德只考虑了标准模型，即每个模型都是给定类的所有子类的集合。

对布尔代数公理的一般模型的研究直到 20 世纪 20 年代末才开始；在马歇尔·哈维·斯通（1903-1989）的工作中，这一研究很快达到了很高的水平（参见他的论文 1936 年，1937 年）。他对线性算子环的结构感兴趣，并意识到与环中所有其他算子在乘法下交换（即 EL=LE 对于环中的所有 L）且在乘法下是幂等的（EE=E）的中心幂等元在其中起着重要作用。中心幂等元以一种自然的方式形成了一个布尔代数。

追求这个研究方向使斯通开始思考任意布尔代数的结构，他通过证明每个布尔代数都与一个布尔代数集合同构来回答了这个问题。在他对布尔代数的研究中，他注意到同态的核与环论中研究的理想之间存在某种类比，这使他将这样的核命名为“理想”。不久之后，他发现了布尔代数和布尔环之间的一种转换；在这种转换下，布尔代数的理想与相关的布尔环的理想完全对应。他的下一个重要贡献是建立了布尔代数和现在称为布尔空间（或斯通空间）的某些拓扑空间之间的对应关系。这种对应关系后来证明是构造奇特布尔代数的有价值工具。斯通的这些结果仍然是逻辑代数发展的范例。

受《逻辑代数》第三卷关于关系的一阶陈述的简短论述的启发，勒文海姆（1915 年）证明了如果这样的陈述在一个无穷域中可以满足，那么它也可以在一个可数域中满足。1920 年，索克勒姆（1887-1963）通过引入索克勒姆标准形式简化了勒文海姆的证明，而在 1928 年，索克勒姆用一个更简单的想法取代了他对标准形式的使用，即使用现在称为索克勒姆函数的东西。他使用这些函数将一阶句子转换为全称句子，也就是说，转换为前束范式的句子，其中所有的量词都是全称量词（∀）。

## 10. 斯克勒姆：量词消除和可决定性

斯科勒姆在他的博士论文中受到了舍尔德的《逻辑代数》的强烈影响。后来，他对在类的演算中寻找消除定理的问题产生了特别的兴趣。在他 1919 年的论文中，他为格子建立了一些结果，特别是他证明了可以通过一个我们现在认识到是多项式时间算法的过程来决定普遍 Horn 句子（即，具有一个由否定和非否定原子的析取构成的矩阵，最多有一个正原子）的有效性。这个算法是基于在通用 Horn 句子中导出的产生规则下找到一个有限偏序格子的最小不动点。尽管这个结果与斯科勒姆对勒文海姆定理的著名贡献在同一篇论文中，但直到 1990 年代初才被偶然重新发现。（惠特曼（1941 年）对格子的更有限的等式决策问题提供了一个不同的解决方案；它被广泛称为格子的词问题的解决方案。）

斯科勒姆（1920 年）通过展示如果为了表达“至少有 n 个元素”，添加谓词，其中 n=1,2,…，那么有一个简单（但通常冗长）的过程可以将关于类的一阶公式转化为无量词的公式，为舍尔德在类的演算中提出的消除问题提供了一个优雅的解决方案。特别地，这表明了类的一阶理论是可判定的。这个量词消除结果被莫斯托夫斯基（1952 年）用于分析单个结构的直接幂和直接和的一阶性质，然后被费弗曼和沃特（1959 年）用于对结构的一般直接和和直接积进行相同的分析。

量词的消除成为数理逻辑中证明可决定性的主要方法，并且在希尔伯特和阿克曼（1928 年）中，证明可决定性被陈述为数理逻辑的主要问题。由于丘奇和图灵的著名不可决定性结果，这个目标在随后的版本中被放弃了。

## 11. 塔斯基和代数逻辑的复兴

模型论可以被看作是希尔伯特的元数学方法和逻辑代数传统的产物，特别是由于 Löwenheim 和 Skolem 的结果。但是塔斯基给予了这门学科其经典基础。模型论是研究形式语言与其在“实现”中的解释之间的关系（即，语言变量的域和其原始符号的解释）。如果解释恰好使得语言的一个句子陈述某个真实的事情，那么这个解释就是该句子的一个模型（参见模型论词条）。模型基本上由代数结构组成，模型论成为一门独立的数学学科，其根源不仅在于逻辑代数，还在于抽象代数（参见 Sinaceur 1999 年）。

除了模型论之外，塔斯基在他 1941 年的论文《关系演算》中复兴了关系代数。首先，他概述了一个基于对元素和关系进行量化的形式逻辑，然后他转向对该系统中仅涉及关系变量的无量词公式的更详细研究。在提出了一系列在关系代数中显然成立的公理之后，他证明了这些公理使得可以将无量词关系公式化简为方程。因此，他的关系演算成为了对某种等式理论的研究，他指出这种理论与集合上的所有二元关系的研究之间具有与布尔代数的等式理论与集合的所有子集的研究之间相同的关系。这引发了与布尔代数已经提出并解决的问题类似的问题，例如，他关于关系代数公理的每个模型是否同构于一个关于集合上的关系代数的代数？阿尔温·科塞尔特（1864-1947）已经回答了一个问题，即在二元关系理论中存在一阶句子，它们与关系演算中的方程不等价-因此，关系演算的表达能力明显比关系的一阶理论要弱。实际上，关系代数的表达能力与仅具有三个变量的一阶逻辑完全等价。然而，如果在关系代数（关系演算）中想要形式化一个具有诸如对偶公理之类的集合论，那么可以将许多变量化简为三个变量，因此可以用方程来表达该理论的任何一阶陈述。蒙克证明了，与类的演算不同，二元关系的演算没有有限的等式基础（参见蒙克 1964 年）。 Tarski 和 Givant（1987）表明，关系代数的等式逻辑非常表达力，以至于可以在其中进行一阶集合论。

此外，圆柱代数是在 1948 年至 1952 年间由 Tarski 与他的学生 Louise Chin 和 Frederick Thompson 引入的，它本质上是布尔代数配备了捕捉存在量词（∃x）的一元圆柱操作 Cx，以创建一个捕捉二元关系一阶理论表达能力的逻辑代数（参见 Henkin＆Tarski 1961）。多元代数是另一种用于一阶逻辑的逻辑代数方法，它由 Halmos（1956c）创建。这些系统的工作重点再次是看到在多大程度上可以与上世纪 30 年代布尔代数的著名结果相媲美。


## Bibliography

### Primary Sources

* Boole, G., 1847, *The Mathematical Analysis of Logic, Being an Essay Towards a Calculus of Deductive Reasoning*, Cambridge: Macmillan, Barclay, & Macmillan; reprinted Oxford: Basil Blackwell, 1951.
* –––, 1854, *An Investigation of The Laws of Thought on Which are Founded the Mathematical Theories of Logic and Probabilities*, London: Macmillan; reprint by Dover 1958.
* –––, 1997. *Selected Manuscripts on Logic and its Philosophy*, Ivor Grattan-Guinness and Gérard Bornet (eds.), Basel, Boston, Berlin, Birkhäuser: Springer.
* Couturat, Louis, 1905, *L’Algèbre de la Logique*, Paris: Gauthier-Villars; 2nd edition, Paris: Blanchard 1980.
* Dedekind, R., 1897, “Über Zerlegungen von Zahlen durch ihre grössten gemeinsamen Teiler”, reprinted in *Gesammelte mathematische Werke* (1930–1932), 2: 103–147.
* –––, 1930–1932, *Gesammelte mathematische Werke*, Robert Fricke, Emmy Noether, Öystein Ore (eds.), Braunschweig: Friedr. Vieweg & Sohn.
* De Morgan, A., 1847, *Formal Logic: or, the Calculus of Inference, Necessary and Probable*, London: Taylor and Walton; reprinted London: The Open Court Company 1926.
* –––, 1966, *On the Syllogism and Other Logical Writings*, a posthumous collection of De Morgan’s papers on logic, edited by Peter Heath, New Haven: Yale University Press.
* Feferman, S. and R.L. Vaught, 1959, “The first order properties of products of algebraic systems”, *Fundamenta Mathematica*, 47: 57–103.
* Frege, F., 1879, *Begriffsschrift: eine der arithmetischen nachgebildete Formelsprache des reinen Denkens*, Halle a. S.: Louis Nebert.
* –––, 1884, *Die Grundlagen der Arithmetik:eine logisch-mathematische Untersuchung über den Begriff der Zahl*, Breslau: W. Koebner.
* –––, 1893/1903, *Grundgesetze der Arithmetik, begriffsschriftlich abgeleitet*, 2 vols, Jena: Verlag Hermann Pohle.
* Halmos, P.R., 1956a, “Algebraic logic. I. Monadic Boolean algebras”, *Compositio Mathematica*, 12: 217–249.
* –––, 1956b, “The basic concepts of algebraic logic”, *American Mathematical Monthly*, 63: 363–387.
* –––, 1956c, “Algebraic logic. II. Homogeneous locally finite polyadic Boolean algebras of infinite degree”, *Fundamenta Mathematica*, 43: 255–325.
* –––, 1956d, “Algebraic logic. III. Predicates, terms, and operations in polyadic algebras”, *Transactions of the American Mathematical Society*, 83: 430–470.
* –––, 1957, “Algebraic logic. IV. Equality in polyadic algebras”, *Transactions of the American Mathematical Society*, 86: 1–27.
* –––, 1962, *Algebraic logic*, New York: Chelsea Publishing Co.
* Henkin, L. and J.D. Monk, 1974, “Cylindric algebras and related structures”, in L. Henkin et al. (eds.), *Proceedings of the Tarski Symposium*, Proceedings of Symposia in Pure Mathematics, vol. XXV, Providence, RI: American Mathematical Society, pp. 105–121.
* Henkin, L. and A. Tarski, 1961, “Cylindric algebras”, in *Lattice Theory, Proceedings of Symposia in Pure Mathematics 2*, R. P. Dilworth (ed.), Providence, RI: American Mathematical Society, pp. 83–113.
* Hilbert, D., 1899, *The Foundations of Geometry*; reprinted Chicago: Open Court 1980, 2nd edition.
* Hilbert, D. and W. Ackermann, 1928, *Grundzüge der theoretischen Logik*, Berlin: Springer.
* Huntington, E.V., 1904, “Sets of independent postulates for the algebra of logic”, *Transactions of the American Mathematical Society*, 5: 288–309.
* –––, 1933, “New sets of independent postulates for the algebra of logic, with special reference to Whitehead and Russell’s Principia Mathematica”, *Transactions of the American Mathematical Society*, 35(1): 274–304.
* Jevons, W.S., 1869, *The Substitution of Similars, the True Principle of Reasoning, Derived from a Modification of Aristotle’s Dictum*, London: Macmillan and Co.
* –––, 1870, *Elementary Lessons in Logic, Deductive and Inductive*, London: Macmillan & Co.; reprinted 1957.
* –––, 1874, *The Principles of Science, A Treatise on Logic and the Scientific Method*, London and New York: Macmillan and Co.; reprinted 1892.
* –––, 1880, *Studies in Deductive Logic. A Manual for Students*, London and New York: Macmillan and Co.
* –––, 1883, *The Elements of Logic*, New York and Chicago: Sheldon & Co.
* –––, 1890, *Pure Logic and Other Minor Works*, Robert Adamson and Harriet A. Jevons (eds), New York: Lennox Hill Pub. & Dist. Co.; reprinted 1971.
* Jónsson, B. and A. Tarski, 1951, “Boolean Algebras with Operators. Part I”, *American Journal of Mathematics*, 73(4): 891–939.
* Kolata, G., 1996, “Computer Math Proof Shows Reasoning Power”, *The New York Times*, December 10 (Technology Section, Cybertimes Column). [[Available Online](http://www.nytimes.com/library/cyber/week/1210math.html)]
* Löwenheim, L., 1915, “Über möglichkeiten im Relativkalül”, *Mathematische Annalen*, 76(4): 447–470.
* –––, 1940, “Einkleidung der Mathematik in Schröderschen Relativkalkul”, *Journal of Symbolic Logic*, 5: 1–17.
* Macfarlane, A., 1879, *Principles of the Algebra of Logic. With Examples*, Edinburgh: David Douglas.
* Monk, J. D., 1964, “On Representable Relation Algebras”, *The Michigan Mathematical Journal*, 11: 207–210.
* Mostowski, A., 1952, “On direct products of theories”, *Journal of Symbolic Logic*, 17: 1–31.
* Peirce, C.S., 1867, “On an Improvement in Boole’s Calculus of Logic”, *Proceedings of the American Academy of Arts and Sciences*, 7: 250–261; reprinted in Peirce 1933 [CP], vol. III, pp. 1–19.
* Peirce, C.S., 1870, “Description of a notation for the logic of relatives, resulting from an amplification of the conceptions of Boole’s calculus of logic”, *Memoirs of the American Academy*, 9: 317–378; reprinted in *Collected Papers* 1933: Volume III, 27–98.
* –––, 1880, “On the algebra of logic. Chapter I: Syllogistic. Chapter II: The logic of non-relative terms. Chapter III: The logic of relatives”, *American Journal of Mathematics*, 3: 15–57; reprinted in *Collected Papers* 1933: Volume III, 104–157.
* –––, 1885, “On the Algebra of Logic: A Contribution to the Philosophy of Notation”, *American Journal of Mathematics* 7(2): 180–202; reprinted in *Collected Papers* 1933: Volume III, 359–403.
* –––, 1933 [CP], *Collected Papers*, Charles Hartshorne and Paul Weiss (eds.), Cambridge: Harvard University Press.
* Schröder, E., 1890–1910, *Algebra der Logik, Vols. I–III*; reprint Chelsea 1966.
* Sheffer, H.M., 1913, “A set of five independent postulates for Boolean algebras, with application to logical constants”, *Transactions of the American Mathematical Society*, 14(4): 481–488.
* Skolem, T., 1919, “Untersuchungen über die Axiome des Klassenkalküls und Über Produktations- und Summationsprobleme, welche gewisse Klassen von Aussagen betreffen”, *Videnskapsselskapets skrifter, I. Matematisk-naturvidenskabelig*, klasse 3; reprinted in Skolem 1970: 66–101.
* –––, 1920, “Logisch-kombinatorische Untersuchungen über die Erfülbarkeit oder Beweisbarkeit mathematischer Sätze nebst einem Theoreme über dichte Menge”, *Videnskapsselskapets skrifter, I. Matematisk-naturvidenskabelig*, klasse 6: 1–36.
* –––, 1922, “Einige Bemerkungen zur axiomatischen Begrundung der Mengenlehre”, *Matematikerkongressen i Helsingfors den 4–7 Juli 1922, Den femte skandinaviska matematikerkongressen, Redogörelse*, Helsinki: Akademiska Bokhandeln; reprinted in Skolem 1970: 189–206.
* –––, 1928, “Über die mathematische Logik”, *Norsk Mathematisk Tidsskrift*, 10: 125–142; in van Heijenoort 1967: 508–524.
* –––, 1970, *Selected Works in Logic*, Oslo: Universitetsforlaget.
* Stone, M.H., 1936, “The theory of representations for Boolean algebras”, *Transactions of the American Mathematical Society*, 40(1): 37–111.
* –––, 1937, “Applications of the theory of Boolean rings to general topology”, *Transactions of the American Mathematical Society*, 41(3): 375–481.
* Tarski, A., 1941, “On the calculus of relations”, *The Journal of Symbolic Logic*, 6(3): 73–89
* Tarski, A. and S. Givant, 1987, *Set Theory Without Variables*, (Series: Colloquium Publications, Volume 1), Providence: American Mathematical Society.
* Whitehead, A.N., and B. Russell, 1910–1913, *Principia Mathematica I–III*, Cambridge: Cambridge University Press.
* Whitman, P.M., 1941, “Free lattices”, *Annals of Mathematics*, second series, 42(1): 325–330.
* Wiener, N., 1913, *A Comparison between the treatment of the algebra of relatives by Schroeder and that by Whitehead and Russell*, Ph.D. thesis, Harvard University (Norbert Wiener Papers. MC 22. Institute Archives and Special Collections, MIT Libraries, Cambridge, Massachusetts).

### Secondary Sources

* Badesa, Calixto, 2004, *The Birth of Model Theory. Löwenheim Theorem in the Frame of the Theory of Relations*, Princeton & Oxford: Princeton University Press.
* Brady, Geraldine, 2000, *From Peirce to Skolem*, Amsterdam et al.: North-Holland.
* Burris. Stanley & H.P. Sankappanavar, 2013, “The Horn Theory of Boole’s Partial Algebras”, *The Bulletin of Symbolic Logic*, 19(1): 97–105.
* Esquisabel, Oscar M., 2012, “Representing and Abstracting. An Analysis of Leibniz’s Concept of Symbolic Knowledge”, in Abel Lassalle Casanave (ed.), *Symbolic Knowledge from Leibniz to Husserl*, London: College Publications, pp. 1–49.
* Gabbay, Dov. M. & John Woods (eds.), 2004, *Handbook of the History of Logic. Volume 3, The Rise of Modern Logic: From Leibniz to Frege*, Amsterdam et al.: Elsevier North Holland.
* Grattan-Guinness, Ivor, 1991, “The Correspondence between George Boole and Stanley Jevons, 1863–1864”, *History and Philosophy of Logic*, 12(1): 15–35
* –––, 2000, *The Search for Mathematical Roots,1870–1940. Logic, Set Theories and the Foundations of Mathematics from Cantor trough Russell to Gödel*, Princeton & Oxford: Princeton University Press.
* Hailperin, Theodore, 2004, “Algebraical Logic 1685–1900”, in Gabbay & Woods 2004: 323–388.
* Haaparanta, Leila (ed.), 2009, *The Development of Modern Logic*, New York and Oxford: Oxford University Press.
* Heinemann, Anna-Sophie, 2015, *Quantifikation des Prädikats und numerisch definiter Syllogismus*, Münster: Mentis 2015.
* Legris, Javier, 2012, “Universale Sprache und Grundlagen der Mathematik bei Ernst Schröder”, in G. von Löffladt (ed.), *Mathematik – Logik – Philosophie. Ideen und ihre historischen Wechselwirkungen*, Frankfurt a. M.: Harri Deutsch, pp. 255–269.
* Mancosu, Paolo, Richard Zach, and Calixto Badesa, 2009, “The Development of Mathematical Logic from Russell to Tarski: 1900–1935”, in Haaparanta 2009: 318–471
* Peckhaus, Volker, 1997, *Logik, Mathesis universalis und allgemeine Wissenschaft*, Berlin: Akademie Verlag.
* –––, 2004, “Schröder’s Logic”, in Gabbay & Woods 2004: pp. 557–609.
* –––, 2009, “The Mathematical Origins of Nineteenth-Century Algebra of Logic”, in Haaparanta 2009: 159–195.
* Sánchez Valencia, Victor, 2004, “The Algebra of Logic”, in Gabbay & Woods 2004: pp. 389–544.
* Sinaceur, Hourya, 1999, *Corps et Modèles. Essai sur l’histoire de l’algèbre réelle*, 2nd ed., Paris: Vrin.
* Styazhkin, N. I., 1969, *History of Mathematical Logic from Leibniz to Peano*, Cambridge, MA: MIT Press.
* Van Heijenoort, Jean, 1967, “Logic as Calculus and Logic as Language”, *Synthese*, 17: 324–330

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=algebra-logic-tradition). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/algebra-logic-tradition/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=algebra-logic-tradition&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/algebra-logic-tradition/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[algebra](https://plato.stanford.edu/entries/algebra/) | [Boole, George](https://plato.stanford.edu/entries/boole/) | [Leibniz, Gottfried Wilhelm: influence on 19th century logic](https://plato.stanford.edu/entries/leibniz-logic-influence/) | [model theory](https://plato.stanford.edu/entries/model-theory/) | [model theory: first-order](https://plato.stanford.edu/entries/modeltheory-fo/)

[Copyright © 2021](https://plato.stanford.edu/info.html#c) by  
[Stanley Burris](http://www.math.uwaterloo.ca/~snburris/)  
Javier Legris <[*javier.legris@gmail.com*](mailto:javier%2elegris%40gmail%2ecom)>

