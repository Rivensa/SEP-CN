# 一阶逻辑的出现 first-order logic (William Ewald)

*首次发表于2018年11月17日星期六*

对于受过现代逻辑学教育的任何人来说，一阶逻辑似乎是一种完全自然的研究对象，其发现也是不可避免的。它在语义上是完备的；它足以公理化所有普通数学；而林德斯特伦定理表明它是满足紧致性和 Löwenheim-Skolem 性质的最大逻辑。因此，一阶逻辑长期以来一直被视为研究数学基础的“正确”逻辑。它在现代数理逻辑教材中占据中心地位，其他系统则被边缘化。然而，历史并不是一帆风顺的，绝对不是某个独立研究者的突然发现。它的出现与技术发现、对逻辑的不同概念、不同的数学研究计划以及哲学和概念反思密切相关。因此，如果一阶逻辑是“自然”的，那只是事后看来如此。这个故事错综复杂，有争议的地方；以下内容只能提供一个概述。关于发展的各个方面的讨论由 Goldfarb 1979、Moore 1988、Eklund 1996、Brady 2000、Ferreirós 2001、Sieg 2009、Mancosu、Zach & Badesa 2010、Schiemer & Reck 2013、Hilbert [LFL]的注释以及百科全书手册 Gabbay & Woods 2009 提供。

---

## 1. 乔治·布尔

现代逻辑学的研究通常追溯到 1847 年，当时布尔的《逻辑的数学分析》问世。这部作品确立了亚里士多德的三段论逻辑可以被翻译成代数演算的观点，布尔将其中的符号解释为指代类别或命题。他的系统包括了今天所称的命题（或布尔）逻辑，但也能表达基本的量化。例如，命题“所有的 X 都是 Y”在他的系统中用方程 xy=x 表示，其中乘法可以被理解为集合的交集或逻辑的合取。“一些 X 是 Y”则更加困难，其表达更加人为。布尔引入了一个（默认为非空）包含 X 和 Y 共有项的集合 V；然后命题被写作 xy=V（1847 年：21）。从现代的角度来看，布尔的系统可以被视为一阶逻辑的片段。它是一阶的，因为其符号资源无法表达范围涉及谓词的量化。它是单调的，因为它没有 n 元关系的符号表示。而且它是一个片段，因为它无法表达嵌套的量化（“对于每个女孩，都存在一个爱她的男孩”）。但这些是我们的分类，而不是布尔的。他的逻辑系统没有与量词相对应的符号；因此，即使将其称为限制性的量化逻辑系统也是不合时宜的。

产生了一个可以被认出为现代逻辑的布尔系统的两个主要扩展是：（a）除了一元谓词（“x 是有限的”）之外，引入了多元关系（“x 是 y 的兄弟”；“x 位于 y 和 z 之间”）；以及（b）引入了普遍量化和存在量化的符号表示。

在布尔传统中，有两位逻辑学家进行了这些步骤。第一步部分由奥古斯都·德·摩根（在德·摩根 1864 年的著作中）完成。第二步由查尔斯·桑德斯·皮尔斯（在皮尔斯 1885 年的著作中）完成。戈特洛布·弗雷格在他 1879 年的《概念符号》中独立地同时完成了这两个步骤。随后的几十年的历史是一个分支结构，有许多研究者在不同的传统中工作，并且只有部分了解彼此的成就。

## 2. 查尔斯·桑德斯·皮尔斯

皮尔斯在布尔的代数传统中工作。他的第一篇逻辑学论文发表于 1867 年；它们简化了布尔的系统，重新解释了并集或逻辑加法 A+B，使其在 A 和 B 不相离时也适用，纠正了几个错误，并探索了逻辑、算术和代数之间的联系。

三年后，在他的《关系逻辑符号的描述》（1870 年）中，皮尔斯对布尔的系统进行了重大扩展。德·摩根曾指出（德·摩根 1864 年），亚里士多德的三段论无法处理诸如“如果每个人都是动物，那么每个人的头都是动物的头”这样的推理。德·摩根引入了关系逻辑，定义了关系的逆和对立，并对“X 是 Y 的爱人”和“Z 是 W 的仆人”等关系的组合进行了探索，如“x 是一个仆人的爱人”。这项工作成功地扩展了亚里士多德的三段论逻辑，但在几个方面也有限制。首先，德·摩根只处理二元关系。其次，他的符号笨拙不便。（例如：如果 X..LY 表示 X 是 Y 的爱人，那么 X.LY 表示 X 不是 Y 的爱人。德·摩根没有单独的否定符号，也没有布尔命题连接词的符号。）

皮尔斯注意到了这些缺点，并在 1870 年展示了如何扩展布尔的逻辑以涵盖

> 整个形式逻辑的领域，而不仅仅局限于那个最简单且最无用的部分，即绝对术语的逻辑，当[布尔]写作时，这是唯一已知的形式逻辑。

他研究了关系之间以及与类术语的组合，并推导出了导致抽象代数系统的主要定律，最终表明他父亲（哈佛大学数学家本杰明·皮尔斯）研究的线性结合代数都可以用他所称的“基本亲属”来定义。他的 1870 年系统虽然在布尔和德摩根的基础上有了很大的进展，但符号上仍然不够灵活，回顾起来，显然需要量化理论。但这是第一个成功将布尔的系统扩展到关系逻辑的尝试。

1880 年，皮尔斯描述了将命题演算的公式化简为合取和析取范式的过程，并在未发表的作品中证明了命题演算可以从联合否定（“既不 p 也不 q”）的单个联结词中获得。他的 1881 年作品《关于数的逻辑》考察了算术的基础，并通过离散、线性有序集合的概念分析了自然数，其中没有最大元素。他非正式地递归定义了加法和乘法，并证明了这两个运算都是结合的和交换的。

在两篇卓越的论文中，短篇注释《1883 年》和更长的《论逻辑代数》（1885 年），他引入了一个现代符号来表示他首次称之为“量词”的概念。他将他的量词（他使用符号Π和Σ表示）视为布尔连接词的一般化，其中普遍量词Π被解释为（可能是无限的）合取，因此ΠxP(x)被理解为“a 是 P 且 b 是 P 且 c 是 P 且...”。类似地，存在量词Σ被理解为（可能是无限的）析取：“a 是 P 或 b 是 P 或 c 是 P 或...”。这种灵活的Π和Σ符号使他能够轻松地表达任意深度的嵌套量化。因此，在他的符号中，如果 lij 表示“i 是...的爱好者”，ΣiΣj lij 告诉我们有人爱某人，而ΠiΣj lij 告诉我们每个人都爱某人。（当然，Σ和Π符号的目的是在布尔精神中强调与算术求和和乘积的类比。）

《论逻辑代数》还因其他原因而引人注目。它以一个重要的段落（§2）开始，讨论了命题演算，并首次明确使用了两个真值。然后，皮尔斯描述了演算的决策过程：

> [T]要确定一个公式是否必然为真，将 f 和 v 替换为字母，并查看是否可以通过任何这样的值分配假设为假。（1885 年：191）

他为物质蕴涵提供了辩护，并展示了如何通过蕴涵和一个特殊的荒谬符号来定义否定。在下一节（§3）中，他处理了他所称之为“第一意向关系逻辑”的内容，这是他在学院派之后的术语。在这里，他创造了“量词”这个术语；他称量化公式的命题矩阵为“布尔矩阵”。在这一节中，量词仅限于宇宙中的个体；因此，“第一意向逻辑”是一阶逻辑。在这里，他还是第一个讨论将量化公式转化为前束范式的规则。下一节（§4）的标题是“第二意向逻辑”。这里与第一意向逻辑（§3）有明显的区别。在这里，量词被允许范围包括谓词；他使用他的新符号来陈述现代的二阶等同定义：两个对象仅在它们满足相同的谓词时才相等。

皮尔斯的论文在许多方面都超前于他的时代。他对命题、第一意向和第二意向逻辑系统之间的明确区分直到希尔伯特在 1917/18 年的讲座中才得到了同样清晰的界定。皮尔斯还预见到量词可以视为（可能是无限的）求和和乘积，这种符号被洛文海姆认为使得洛文海姆-斯科勒姆定理的发现成为可能，并在 20 世纪 20 年代的希尔伯特证明论计划的制定中起到了重要作用。（皮尔斯的逻辑思想在欧洲大陆非常有名，被恩斯特·施罗德采用，并在他的《逻辑代数》三卷本（1890-1895 年）中广泛传播。）

皮尔斯对这些不同之处进行了绘制，特别是一阶逻辑和二阶逻辑之间的区别，比希尔伯特在 1917 年的讲座中更加清晰。而且，与希尔伯特不同的是，皮尔斯深受中世纪逻辑学家的著作影响。他充分意识到关于普遍实在性的论证的哲学意义：这显然是他在第 2 节和第 3 节之间进行如此明确区分逻辑的原因。因此，他有可能为一阶逻辑（至少是）提出名义主义的论证，并反对二阶逻辑。但除了一些附带的评论外，他本人并没有进一步发展他对第二意向逻辑的观察，而现代一阶逻辑和高阶逻辑之间的区别似乎更可能是希尔伯特在 1917/18 年独立重新发现的，而不是直接受到皮尔斯的启发。

## 3. 戈特洛布·弗雷格

弗雷格的逻辑学贡献源于不同的土壤，并且（据所能确定的）完全独立于布尔、德摩根和皮尔斯的英美代数传统。相反，它们根植于德国数学家迪里克雷、黎曼、魏尔斯特拉斯和海涅在实分析基础上的工作。弗雷格从这一传统中首先吸取了为数学提供严格基础的想法（在他手中，这一项目成为展示算术可以建立在逻辑法则之上的项目）；其次，他采用了函数和变量这两个核心数学概念，代替了亚里士多德的谓词和主词概念。这一步骤自然地引导他进入了关系逻辑（因为在数学中考虑的函数是多元的）；而他对数学推理的分析也促使他引入了量化逻辑的符号表示。（例如，魏尔斯特拉斯在对极限概念的分析中已经对量词的“嵌套”和它们的顺序有了敏感：例如，“对于每个ε都存在一个δ”，和“存在一个δ，使得对于每个ε都成立”。现在所需要的是，弗雷格提供了一个形式语言来表达和明确德国分析家的工作中已经存在的量化推理。）因此，在1879年的《概念符号》中，弗雷格一举超越了传统逻辑的两个重要步骤——关系和量词，而这些代数传统分别相隔数十年才取得。

弗雷格的逻辑系统相对于皮尔斯来说有几个优点。他纯粹的句法演算的公理化表达更加精确，对于数概念的分析更加深入。他的系统允许变量和函数都被量化。这是他为算术提供逻辑基础的计划的核心组成部分，因为在他的逻辑系统中，通过高阶量化来定义了恒等性、基数和数学归纳。在他的《基础》（1884）中，他区分了不同阶的概念，所以如果概念 A 属于概念 B，那么 B 就是“二阶”的（§53）。在他的《基本法则》（1893）中，他考虑了三阶量化，尽管他实际推导算术的过程完全在二阶逻辑中进行。

弗雷格因此成为最早认识到逻辑层次结构重要性的逻辑学家之一。他的发现几乎与皮尔斯同时，并且完全独立地追求不同的目标。弗雷格的发现影响更大。它为罗素的类型理论奠定了基础（并且几十年后也影响了与弗雷格一起学习逻辑的卡尔纳普）。

但是虽然弗雷格区分了逻辑层次，但他并没有将他的量化系统中仅涉及一阶变量的部分作为一个独立的逻辑系统来随附：他这样做也是不自然的。在这方面，与皮尔斯形成了显著的对比。弗雷格的项目是要证明算术可以建立在逻辑法则之上：对他来说，只有一个逻辑，逻辑必然包括高阶概念的逻辑。相比之下，皮尔斯拒绝了一个单一的、总体性的逻辑概念，而是从“论域”的角度思考不同的逻辑。正因为这个原因，他在 1885 年的论文中更接近于将命题演算、第一意图的逻辑和第二意图的逻辑作为独立的系统来研究：在这方面，他比弗雷格更接近于现代的概念。还有一个更微妙的差异。皮尔斯的Σ和Π符号对于量词是明确以（可能是无限的）关于个体的命题的合取和析取来构思的。这是一个非常有启发性的概念，在弗雷格的符号系统中很难表示。洛文海姆在他早期的模型论研究中利用了这一概念，从而引发了最终引起对一阶逻辑的关注的技术发现。但是，所有这些工作都是几十年后的事情，既不弗雷格也不皮尔斯能够被认为对一阶逻辑和高阶逻辑之间的差异有现代的理解。

## 4. 恩斯特·施罗德

弗雷格的贡献并没有立即被理解或赞赏，在世纪末的最后十年，逻辑学被恩斯特·施罗德的《逻辑代数讲义》（1890-1895）的三卷本所主导。施罗德对布尔和皮尔斯的逻辑工作进行了百科全书式的处理，系统化并扩展了他们的结果。皮尔斯的量词在第二卷中出现，但一阶量化和二阶量化之间的区别并没有以相当清晰的方式进行划分。正如弗雷格在他的评论中指出的（1895 年），施罗德的符号表示没有区分集合成员关系和子集关系，因此很难确定他是否打算让给定的量化范围涵盖一个域的子集（即二阶量化）还是其元素（即一阶量化）。施罗德同时使用了二阶量化和一阶量化；在他的第三卷中，他使用了将二阶量化扩展为无限乘积的一阶量化技术——这是皮尔斯乘积符号的发展，并为勒文海姆的研究提供了起点。但施罗德没有从他的更广泛系统中提取出一阶逻辑的子系统，并且没有将阶数的区别本身视为具有任何重要意义，无论是在数学上还是在哲学上。从这个意义上说，他比皮尔斯 1885 年的论文更不清晰。（布雷迪 2000 年的一项有益的施罗德逻辑工作分析包含在其中。）

## 5. 朱塞佩·皮亚诺

在 1889 年，乔治·皮亚诺（Giuseppe Peano）独立于皮尔斯（Peirce）和弗雷格（Frege）之外，引入了一种普遍量化的符号表示法。如果 a 和 b 是具有自由变量 x，y，...的命题，则 aϽx，y，...b 的符号表示为：无论 x，y，...是什么，从命题 a 可以推导出 b。我们不愿称之为普遍量词的符号表示法，因为量化与物质蕴涵符号不可分割：从符号表示法上看，这是与皮尔斯相比的一个相当大的倒退。此外，皮亚诺没有区分一阶量化和二阶量化。他的论文的重点是用逻辑符号来呈现算术原理，而他对数学归纳原理的表述在我们看来是二阶的，但只是暗含的。这是一个他似乎并不重视的区别，与皮尔斯不同。然而，他确实为数理逻辑增加了一系列新的符号，这些符号对怀特海德和罗素在《数学原理》中的工作产生了影响；其中一个符号是存在量词的符号∃。（奇怪的是，皮亚诺没有引入一个与普遍量词相对应的符号。似乎是怀特海德在《数学原理》中引入了(x)的符号，而希尔伯特引入了符号∀。）

## 6. 阿尔弗雷德·诺思·怀特海德（Alfred North Whitehead）和伯特兰·罗素（Bertrand Russell）

罗素在1901年发现罗素悖论后，几个月内在给弗雷格的一封信中提出了一种初步版本的类型理论（Frege [PMC]: 144）。他从弗雷格的一阶、二阶和更高阶函数理论中借鉴了中心思想。罗素在《数学原理》（1903）的附录中提出了他的理论的一个版本，然后在他的《基于类型理论的数理逻辑》（1908）中以成熟的形式呈现，为《数学原理》提供了概念基础。罗素将宇宙视为分层或类型化的。第一阶包括个体；第二阶包括“一阶”命题，其量词范围是第一阶个体；一般来说，第n+1阶命题中的量词范围是第n阶命题。事实上，罗素的系统包括两个不同的层次结构：一个用于处理集合论的悖论（具体来说，禁止集合成为自身的元素）；另一个用于处理语义悖论（如说谎者悖论）。这种双重结构，向两个方向分支，使他的理论被称为“分层类型理论”。为了能够建立经典分析，他被迫采用可约性公理，该公理规定了任何n+1阶函数与较低阶的谓词或函数具有相同的外延。这个系统非常复杂；随着Chwistek、Ramsey、Carnap、Tarski和Church的努力，人们认识到处理语义悖论的层次结构可以被修剪掉，留下“简单类型理论”（simple theory of types）。（关于这一演变的概述可参见Church 1974，关于罗素理论的详细研究可参见Landini 1998和Linsky 2011。）

罗素和怀特海德因此拥有了两个量词的符号表示，以及第一阶和更高阶量化的区别。但这与拥有第一阶逻辑的概念并不相同，第一阶逻辑被构想为一个独立的逻辑系统，值得独立研究。有两个主要原因阻碍了这一进展。首先（与皮尔斯相反），他们的研究对象不是多个逻辑系统，而是逻辑本身：他们对将一个片段分离出来进行独立研究没有任何兴趣，更不用说争论第一阶片段是否享有特权地位了。相反地，与弗雷格一样，《数学原理》的雄心是要证明数学可以归约为逻辑，而对怀特海德和罗素来说，逻辑包括了分层类型理论的全部设备（以及无穷性、选择和可约性公理）。其次，虽然《数学原理》提供了类型理论的公理化（因此可以被视为一种演绎推理的概念），但怀特海德和罗素将他们的系统视为一种解释性系统，陈述逻辑的真理，而不是希尔伯特意义上的形式演算。希尔伯特将他们的公理化作为自己公理化各种逻辑系统的起点；但在逻辑和元逻辑之间的区别被明确提出之前，没有人自然而然地提出元逻辑的完备性、一致性和可判定性问题，或者研究演绎和语义完备性之间的关系，或者研究类别性的失败；只有当这些概念成为关注的焦点时，第一阶逻辑的重要性才变得明显。

## 7. 莱奥波尔德·勒文海姆

1915年，Löwenheim发表了他具有里程碑意义的论文《关于相对演算的可能性》。这篇论文以皮尔斯-施罗德相对演算的传统为基础，建立了第一个重要的元逻辑学定理；从某些观点来看，它标志着模型论的开始。Löwenheim考虑了一类他称之为“计数表达式”的表达式（Zählausdrücke），其中的量词仅在宇宙中的对象域范围内，而不涉及相对关系；然后他证明了，对于任何这样的计数表达式，如果它是可满足的，那么它在某个可数域中是可满足的。用现代术语来说，他的“计数表达式”就是一阶逻辑的公式；但他的术语既没有受到皮尔斯的“第一意向”逻辑的影响，也没有受到罗素的类型论的影响。Löwenheim和这个时代的所有逻辑学家一样，没有区分对象语言和元语言。他的证明很难理解，他的定理的确切细节——他认为自己已经证明了什么，以及他实际上证明了什么——成为广泛学术讨论的主题。（Mancosu、Zach和Badesa 2009提供了不同解释的综述，Badesa 2004对证明本身进行了详细的重建。）这篇论文似乎没有产生影响，直到Skolem在他的1920年对其结果进行了进一步的精炼和扩展。Löwenheim、皮尔斯和罗素都没有将一阶逻辑纳入一个公理系统中，也没有区分语法和语义。他更不会争辩说他的“计数表达式”类在某种程度上在逻辑上具有特权，并为数学提供了一个优选的基础。Löwenheim定理最终被认为是隔离了一阶逻辑的一个基本属性。但他的结果的全部含义直到后来，即希尔伯特引入了逻辑系统的元数学研究之后才变得清晰起来。 （顺便说一句，Löwenheim 归功于 Peirce 的优雅的Σ和Π符号，这些符号提示了他证明所必需的无穷扩展；很难想象他如何能够用其他提供的量化符号之一获得他的定理。他仍然在 Löwenheim 1940 年时积极捍卫 Peirce-Schroeder 符号的优势，反对 Principia 的符号。）)

## 8. 大卫·希尔伯特和保罗·伯奈斯

让我们简要回顾一下1915年的情况。皮尔斯区分了一阶逻辑和二阶逻辑，但没有将这个区别用于数学上，并且它逐渐被忽视了。弗雷格和罗素都提出了多层类型理论的版本，但都没有将一阶片段作为值得研究的对象单独提出来。美国的公设论者爱德华·亨廷顿和奥斯瓦尔德·维布伦提出了完备性和类别性的各种概念，维布伦曾指出公理演绎可能与语义蕴涵不一致（Awodey＆Reck 2002：15-19）。但维布伦没有对形式演绎进行精确的描述，他的观察结果没有产生影响。洛文海姆证明了一个关于事后可以被描述为一阶公式的深刻定理，但没有独立出一阶逻辑的系统。对于赫尔曼·韦尔，情况也是类似的。他在1910年提出（实际上）使用一阶逻辑来精确地阐明策梅洛的分离公理中的“确定性属性”概念。但这也是一种事后的描述，韦尔的兴趣在于集合论，而不是研究一阶逻辑的系统。

下一个重要的进展是由大卫·希尔伯特在他的讲座《数学原理》中取得的，该讲座于 1917/18 冬季学期在哥廷根举行。希尔伯特在 1899 年至 1905 年期间就基础问题进行了讲座和出版；在此期间，他专注于其他事务，出版活动停止了，但广泛的课堂讲授仍在继续。他一直关注当前的发展，特别是通过他的学生海因里希·贝曼对怀特海德和罗素的逻辑工作有所了解。1917 年 9 月，他在苏黎世发表了他的纲领性演讲《公理化思维》，呼吁按照他早期在几何学公理化方面探索的思路对逻辑进行公理化处理，并明确提出了元逻辑研究的建议：

> 当我们更仔细地考虑这个问题时，我们很快就会认识到，整数和集合的一致性问题并不是孤立存在的问题，而是属于一个广阔的困难认识论问题领域，这个领域具有明显的数学色彩：例如（简要描述这个问题领域），每个数学问题在原则上的可解性问题，数学研究结果的后续可核查性问题，数学证明的简洁性标准问题，数学和逻辑中内容与形式之间的关系问题，以及数学问题在有限次操作中的可决定性问题。（希尔伯特 1917: 412-413）

正是在这次去苏黎世的旅行中，他邀请保罗·伯奈斯回到哥廷根担任他在基础问题上的助手。尽管伯奈斯在基础问题上几乎没有经验，但这证明是一个明智的选择，也是一个密切而富有成果的研究伙伴关系的开始。

紧随苏黎世演讲之后的哥廷根讲座（由伯奈斯记录在官方议定书中）是一份非凡的文件，标志着现代数理逻辑的诞生。它们与已发表的专著《希尔伯特与阿克曼》（1928 年）基本相同，即使在今天，只需适度补充，仍可作为逻辑学的入门教材。希尔伯特首次明确区分了元语言和对象语言，并逐步呈现了一系列逻辑学的形式逻辑演算，逐渐增强其强度。每个演算都经过仔细研究；确定其优点和缺点，并利用对缺点的分析来准备过渡到下一个演算。他从命题演算开始，然后转向单调量化逻辑（包括对类演算和亚里士多德三段论的广泛讨论），然后转向“函数演算”。

函数演算是一个（多分类的）一阶逻辑系统，其中变量既用于句子，也用于关系。这是我们第一次遇到一个精确的、现代的一阶逻辑表述，与其他演算明确区分，给出了公理基础，并明确提出了元逻辑问题。希尔伯特在讨论一阶逻辑时总结道：

> 如果我们对逻辑学的形式化推理没有其他目的，那么关于逻辑演算的基本讨论就可以在这里结束了。但是，我们对符号逻辑的应用并不满足。我们不仅希望能够以纯粹形式的方式从原则上发展个别理论，还希望调查数学理论本身的基础，研究它们与逻辑的关系以及它们在多大程度上可以从纯粹的逻辑运算和概念形成中建立起来；为此，逻辑演算将作为我们的工具。（1917/18: 188）

这使他接下来引入了一阶逻辑，并进而考虑了逻辑悖论及其通过罗素的分级类型理论解决的问题；可约性公理被简要讨论并作为数学的基础被采纳。讲座记录以以下句子结束：

> 因此，很明显，引入可约性公理是将层次演算转化为一个系统的适当手段，从而可以从中发展出更高级数学的基础。

当 1917 年的讲座被改编成专著（Hilbert＆Ackermann 1928）时，这个句子基本上没有改变。

在他的讲座中，希尔伯特讨论了他在《公理化思维》中提出的元逻辑问题，并（至少是暗示地）展示了如何回答命题情况下的完备性、一致性和可决定性问题。在伯奈斯记录的讲座中，并没有明确提出一阶逻辑的完备性问题，尽管细心的读者很容易将其视为一个未解决的问题。接下来的夏天，伯奈斯撰写了一篇博士论文，在其中以严密的方式发展了希尔伯特风格的命题逻辑公理分析。他将公理系统呈现为一个无解释的形式演算；为其提供了语义学；然后证明了完备性定理，将语法与语义以“每个可证明的公式都是普遍有效的，反之亦然”的形式联系起来。然后，他继续研究可决定性、一致性和各种公理组合的相互独立性问题。

Hilbert 1917年的讲座和1918年的Bernays Habilitation是一阶逻辑发展的里程碑。在这些讲座中，首次将一阶逻辑作为一个公理化的逻辑系统进行了介绍，适合使用新的元逻辑技术进行研究。正是这些元逻辑技术代表了对Peirce、Frege和Russell的重要进展，并最终使一阶逻辑成为焦点。但这并不是一蹴而就的，还有大量的工作需要完成。在1917/18年的讲座中，希尔伯特将他的逻辑演算法序列作为通向完整的高阶分层类型理论的阶梯，他继续认为这是研究数学基础的“正确”逻辑框架。希尔伯特的特点是将复杂的数学现象分解为其组成部分：这个演算法序列可以被看作是将高阶逻辑分解为更简单的组成部分，向他的学生展示了构建完整系统的步骤。尽管他讨论了函数演算法，但并没有特别关注它。换句话说（就像三十年前的Peirce一样），一阶逻辑主要作为一种阐述工具引入：它的重要性尚不清楚。

此外，希尔伯特自己对元逻辑问题的处理有些仓促和不正式。他尝试了几个“完备性”的概念版本：人们有一种感觉，他正在迅速开辟新的领域，还不确定哪些概念会证明最有成果。他对命题演算的完备性证明只是一个简单的草图，并被放在了脚注中；而对于一阶逻辑的类似问题，甚至没有提出猜想。更引人注目的是，当伯纳斯最终在 1926 年发表他的博士论文时，他省略了完备性定理的证明，因为（正如他后来懊悔地说）这个结果当时似乎是显而易见且不重要的。（关于这一点的讨论，请参见希尔伯特[LFL]：229。有关易于获取的一般讨论，请参见 Sieg 1999 年，Zach 1999 年以及 Sieg 2013 年收集的论文；有关原始文献和详细分析，请参见希尔伯特[LFL]。）

换句话说，即使在 20 世纪 20 年代的哥廷根，人们对希尔伯特在 1917 年引入的思想的重要性没有完全理解。整个 20 世纪 20 年代，希尔伯特学派将一阶逻辑视为类型论的一个片段，并没有为其作为一个独特优选系统提出论证。直到 1928 年的专著《希尔伯特与阿克曼》（Hilbert & Ackermann 1928）（以及同时期的“博洛尼亚演讲”（Hilbert 1928）），希尔伯特才明确提出一阶逻辑的完备性作为一个未解问题。这为哥德尔的工作铺平了道路：但在此之前，我们需要向时间线倒退一步。

## 9. 托拉尔夫·斯科勒姆

1915 年至 1916 年冬天，斯科勒姆访问了哥廷根，在那里他与费利克斯·伯恩斯坦讨论了集合论；没有迹象表明他见过希尔伯特。他当时已经熟悉了勒文海姆的定理，并且知道它对策尔梅洛的集合论公理化的悖论性影响：具体来说，非可数集合理论的一阶公理化将会有一个可数模型。他当时没有发表关于这些主题的论文，因为正如他后来所说：

> 我相信，集合论的公理化作为数学的最终基础是不令人满意的，所以大体上，数学家们不会过多地关注它。令我惊讶的是，最近我看到许多数学家将这些集合论公理视为数学的理想基础。因此，我觉得是时候发表一篇批评文章了。（斯科勒姆 1922 年：附录。）

斯科勒姆的第一篇重要论文是他的 1920 年和特别是他的 1922 年的论文。在第一篇论文中，他以更明确的形式证明（或重新证明）了下降的勒文海姆-斯科勒姆定理。在第二篇论文中，他提供了一个新的证明结果。他还批评了策尔梅洛的分离公理，该公理采取了以下形式：给定一个集合 S 和一个明确的命题ϕ(x)，存在一个集合 S *’* ，其中包含 S 中所有使得ϕ(s)成立的元素 s。这里的“明确的命题”概念略显不精确。斯科勒姆的建议是将“明确的命题”与一阶逻辑（带有恒等符号）的公式等同起来。尽管斯科勒姆宣称这种等同是“自然的”和“完全清晰的”，但他并没有明确论证量词限制在第一层级上。然后，他给出了策尔梅洛集合论的最早令人满意的一阶公式，并应用了勒文海姆-斯科勒姆结果得到了斯科勒姆悖论。

这些技术结果对随后关于一阶逻辑的辩论非常重要。但重要的是不要在斯科勒姆1922年的论文中读出后来对这些问题的理解。在这一点上，斯科勒姆并没有区分对象语言和元语言。尽管回顾他的集合论公理化可以被解释为一阶逻辑，但他从未强调这一事实。（事实上，埃克伦德（1996）提出了一个有说服力的论点，即斯科勒姆尚未清楚地意识到一阶逻辑和二阶逻辑之间的区别的重要性，并且分离公理的重新表述实际上并不像通常认为的那样明确是一阶逻辑。）

Skolem关于一阶逻辑的言论需要仔细解释（参见Ferreirós 2001: 470–74），但显然必须放在20世纪20年代的Grundlagenkrise背景下来看，以及Hilbert、Brouwer和Weyl之间的辩论。在这些年里，逻辑学有两个广泛的倾向，它们相互拉扯。一个倾向是修剪逻辑和数学系统，以适应Brouwer及其追随者的批评。目标是避免悖论，界定“合法”数学的领域，并将其建立在稳固的基础上。集合论受到争议，Skolem明确将他1922年的结果作为对集合论基础的批判。Weyl在1910年已经通过对Zermelo系统的研究，提出了一套逻辑原则，回顾起来（尽管符号表达方式独特），可以看作是一种形式的一阶逻辑。总的来说，无论是Weyl还是Skolem，出于方法论的原因，都倾向于采用某种建构主义作为避免悖论的手段；这意味着他们认为，例如对无限集合的所有子集进行量化是应该避免的：无论对“所有整数”的概念掌握如何，对“所有整数的属性”的概念都不够牢固。换句话说，公理化集合论的关键是以一种能够清楚看到其哲学上有问题的假设的方式陈述它们的内容。但如果在背景逻辑中已经预设了问题的“所有子集”的概念，那么这个目标就会受到损害，因为这个目标本身就是要阐明的。一种可能性是限制自己使用一阶逻辑；另一种可能性是采用某种谓词高阶系统。

在 20 世纪 20 年代，希尔伯特和伯奈斯及其追随者的证明理论工作中，也明显出现了广泛的建构主义倾向。早在希尔伯特 1921/22 年的讲座时，希尔伯特就已经确定了（经典）量词的引入是超限进入逻辑的关键步骤。希尔伯特像 C.S.皮尔斯一样，将量词看作是无限的合取和析取，并且从 20 世纪 20 年代初开始，哥廷根已经很清楚，为了实现希尔伯特一致性计划的目标，对量词进行有限分析是必要的。ε-替换方法是希尔伯特引入的主要手段，以试图达到这个结果。（Sieg 2009 提供了这项研究的概述，并在希尔伯特[LFL]的引言中提供了说明。）

但是尽管存在这些建构主义倾向，20 世纪 20 年代的许多逻辑学家（包括希尔伯特）仍然认为高阶类型理论，而不是它的一阶片段，是研究数学基础的适当逻辑。最终的希望是为整个经典数学（包括集合论）提供一致性证明。但是，在此期间，研究人员对某些基本区别仍然有些不清楚。希尔伯特有时未能观察到一阶公理模式和二阶公理之间的区别；布劳威尔的直觉主义有时被认为是“有限主义”；完备性（在几个意义上）、类别性（也在几个意义上）以及一阶和高阶逻辑之间的关系尚未被理解。事实上，格雷戈里·摩尔指出，即使在 1929 年哥德尔证明了一阶逻辑的完备性，他仍然没有完全理解类别性的概念及其与二阶逻辑的关系（摩尔 1988：125）。

## 10. 库尔特·哥德尔

因此，整个20世纪20年代的问题仍然不清楚。但是希尔伯特学派的建构主义抱负、对量词分析的关注以及对元逻辑问题的明确提出，使得一阶逻辑作为一个值得研究的体系的出现几乎是不可避免的。关键的技术突破发生在1929年和1931年，哥德尔先后发表了一阶逻辑的完备性定理和不完备性定理。通过这些结果（以及随后出现的其他结果），终于清楚地认识到一阶逻辑与高阶逻辑之间存在重要的元逻辑差异。也许最重要的是，一阶逻辑是完备的，并且可以完全形式化（在这种意义上，只有当一个句子在所有模型中都成立时，它才能从公理中推导出来）。一阶逻辑还满足紧致性和向下的Löwenheim-Skolem性质；因此它具有可处理的模型论。而二阶逻辑则不具备这些性质。到了20世纪30年代中期，这些区别开始被广泛理解，人们也开始意识到一般只有在高阶系统中才能获得范畴性。林德斯特伦后来证明（1969年），没有同时满足紧致性和Löwenheim-Skolem性质的逻辑系统能够比一阶逻辑具有更强的表达能力：因此，在这个意义上，一阶逻辑确实是一个“自然”的实体。

但仅仅技术上的结果并没有使一阶逻辑占据上风。正如Schiemer和Reck指出的（2013年），即使在20世纪30年代，即使在主要的元逻辑结果已经取得之后，哥德尔、卡尔纳普、塔斯基、丘奇以及希尔伯特和伯奈斯等逻辑学家仍然继续使用高阶系统（通常是某种类型简单理论的版本）。换句话说，即使在元逻辑结果之后，仍然存在选择，并且选择支持一阶逻辑并非必然。毕竟，元逻辑结果可以被视为对一阶逻辑的严重限制的证明：它无法为自然数指定唯一的模型。希尔伯特在1917/18年将一阶逻辑视为一个简单的过渡阶段，元逻辑结果可以被视为证实他方法的智慧：如果你想要唯一性，那么你就被迫转向一个高阶系统。

在1930年代的这一时刻，然而，关于逻辑的几个其他思维流派现在开始融合在一起。知识形势非常复杂。卡尔纳普、冯·诺伊曼和海廷在1931年的科尼斯堡大会上发表的著名论文确定了逻辑主义、形式主义和直觉主义学派：他们的辩论将塑造未来几十年数学基础的思维。寻求稳固的基础，特别是避免集合论悖论，是他们共同的目标，这有助于使一阶逻辑占据优势。首先（正如韦伊尔和斯科勒姆已经指出的，并且至少在希尔伯特计划中是隐含的），有很好的建构主义和哲学上的理由，可以尽可能避免高阶量化，限制逻辑在一阶。其次，现在已经给出了几个明确的一阶形式化的策梅洛-弗兰克尔集合论和冯·诺伊曼-伯纳斯-哥德尔集合论（允许有限公理化）。这些理论的一阶性质在1930年代的一些出版物中得到了强调：塔斯基（1935年）、奎因（1936年）、伯纳斯（1937年）和哥德尔（1940年）。实际上，这些一阶集合论足以表达所有现有的数学实践；因此，在数学证明的编码中，没有必要诉诸于高阶逻辑。（这证实了希尔伯特早在1917年就已经提出的观察，尽管他自己没有完全发展这一观点。）第三，人们越来越倾向于区分逻辑和集合论，并将集合论视为数学的一个分支。高阶逻辑可以被解释为（奎因后来的说法）“披着绵羊皮的集合论”，这加强了其他倾向：真正的逻辑是一阶的；高阶逻辑“实际上”是集合论。 十年结束时，人们达成了一个共识，即在数学基础研究中，数学理论应该用一阶术语来表述。经典的一阶逻辑已经成为“标准”。

## 11. 结论

现在让我们试着得出一些教训，特别是问一下一阶逻辑的出现是否是不可避免的。我从一个观察开始。这个复杂历史的每个阶段都受到两种不同类型的背景考虑的制约。一种是广义上的数学考虑：已经建立的定理。另一种是广义上的哲学考虑：对逻辑和数学基础的假设（明确或暗示）。这两个因素相互作用。序列中的每个思想家都从一些或多或少直观的逻辑观念开始。这些观念引发了数学问题：进行了区分：证明了定理：注意到了结果，并且哲学理解得到了深化。在每个阶段，问题“逻辑是什么？”（或者：“正确的逻辑是什么？”）需要根据数学和哲学背景进行评估：抽象地提出这个问题没有多大意义。

现在让我们考虑一个问题：一阶逻辑是何时被发现的？这个问题太笼统了。它需要被分解成三个附属问题：

* (α)一阶逻辑何时首次明确被认定为一个独立的逻辑系统？这个问题有一个相对直接的答案。一阶逻辑在 1885 年由皮尔斯首次明确认定，但随后被遗忘。它在希尔伯特 1917/18 年的讲座中被独立重新发现，并在 1928 年的专著《希尔伯特与阿克曼》中广泛流传。皮尔斯是第一个认定它的人，但是希尔伯特将这个系统推向了世界舞台。
* (β)一阶逻辑何时被认识为与高阶系统有重要的区别？这是一个更复杂的问题。虽然希尔伯特将一阶逻辑单独提出，但他并没有将其视为特别重要，他自己继续在类型理论中工作。对于一阶逻辑与高阶逻辑之间的基本元逻辑差异的认识直到 20 世纪 30 年代初才开始出现，主要是由哥德尔等人提出的，尽管不完全是他们提出的。
* (γ)一阶逻辑是如何被视为特权逻辑系统的，即在某种意义上，作为研究数学基础的“正确”逻辑？这个问题也是非常复杂的。即使在哥德尔的结果被广泛理解之后，逻辑学家们仍然继续研究类型论，而且花了很多年才使一阶逻辑获得了规范地位。这个过渡是逐渐的，无法给出一个具体的日期。

有了这些区别，现在让我们问一下：为什么一阶逻辑没有早些被发现？

引人注目的是，皮尔斯在 1885 年已经清楚地区分了命题逻辑、一阶逻辑和二阶逻辑。他意识到命题逻辑比量化逻辑要弱得多，特别是对于算术基础的分析是不足够的。然后他可以进一步观察到，二阶逻辑在某些方面在哲学上是有问题的，而且总的来说，我们对于对象的量化的把握要比对属性的量化的把握更牢固。即使在论域是有限的情况下，这个问题也会出现。例如，我们对于用一阶术语来说所有的行星，或者说存在一个具有特定属性的行星，有一个合理的理解。但是用二阶术语来谈论行星的所有属性意味着什么？这些属性的个体化标准是什么？成为最外层行星的属性和成为最小行星的属性是相同的吗？关于负属性我们该怎么说？土星不等于整数 17 是土星的一个属性吗？在这种情况下，虽然行星的数量是有限的，但我们的二阶量词必须涵盖无限多的属性。等等。奎因的反对意见是众所周知的。

这类论证在现实主义者和名义主义者之间的学术争议中已经被提出过：皮尔斯深入研究了关于这些主题的中世纪文献。他不必走得那么远，即提出（γ）点，即认为一阶逻辑是特权的。无论如何，这与他的逻辑多元主义相悖。但他确实有工具来提出（β）点，并强调二阶逻辑与一阶逻辑之间存在重要的鸿沟，就像一阶逻辑与布尔命题演算之间存在重要的鸿沟一样。为什么他在1885年就没有提出这些观点呢？

任何答案都只能是推测性的。一个次要因素是皮尔斯本人并不是名义主义者。另一个因素是他在各种逻辑系统中运作：他的性格多样化，不倾向于寻找“唯一真理的逻辑”。还有技术上的考虑。与希尔伯特不同，皮尔斯没有将第一意向逻辑呈现为一个公理化的系统，也没有将其作为研究数学基础的工具。他没有区分未解释的、形式的、公理化的演算法和其元语言之间的区别。因此，他不会问关于可决定性、完备性或类别性的问题；而没有元数学结果，他无法完全理解一阶逻辑和二阶逻辑在表达能力上的差异。反对二阶逻辑的最有力的论据之一是，对可数集合的所有子集进行量化会导致对一个不可数的整体进行量化，而这个论点直到康托尔的定理被发现才能被提出。逻辑和集合论的悖论尚未被发现，泽尔梅洛尚未公理化集合论：因此，皮尔斯缺乏对发现“数学的安全基础”的敏锐动机。当然，皮尔斯对勒文海姆-斯科伦定理、斯科伦悖论或将一阶逻辑带入清晰焦点的一系列元逻辑定理毫无所知。他提供了一种灵活而富有启发性的符号表示法，这种表示法被证明是非常富饶的，他是第一个清楚区分一阶逻辑和二阶逻辑的人：但是，理解这种区别的数学意义的工具尚不存在。（正如亨利·皮伦尼曾经说过，维京人发现了美洲，但他们忘记了它，因为他们还没有需要它。）

弗雷格和罗素也有类似的观点。他们拥有逻辑层次结构的概念，原则上他们也可以将一阶逻辑孤立出来，从而完成步骤(α)。但他们从未考虑将层次结构的最低层作为一个独立的系统。这既有哲学原因，也有数学原因。从哲学上讲，逻辑主义的目标是要显示“数学可以归结为逻辑”：他们认为整个类型层次结构构成了逻辑。然后，从数学上讲，二阶逻辑对他们构建整数是必要的。因此，他们没有任何哲学或数学上的强制性原因来关注一阶片段。

这里与皮尔斯形成了一个有教育意义的对比。皮尔斯，以 19 世纪代数学家的精神，乐于探索丰富多样的逻辑结构：他的态度基本上是多元论的。逻辑主义者在分析传统中工作，更关心整数的实际含义：他们的态度基本上是唯一主义和还原主义的。但是，为了像在 20 世纪 30 年代那样单独确定一阶逻辑，需要两个条件：意识到存在不同的逻辑系统，并为其中一个提供优势的论证。皮尔斯具有多元论：逻辑主义者具有寻找“正确”系统的冲动：但两者都没有同时具备。

现在让我们转向问题，一阶逻辑的出现是否是不可避免的？无法避免地需要考虑反事实的因素，答案必须更具推测性。在这里，也需要区分技术结果（β）的必然性和点（γ）的必然性。

让我们从（β）开始。到1928年，可以说，元逻辑的结果是不可避免的。希尔伯特和阿克曼已经独立并描述了一阶逻辑；数学和元数学之间的区别已经被充分理解；他们已经展示了如何证明命题演算的完备性；并明确提出了一阶逻辑的完备性作为一个重要的未解问题。可以肯定的是，在接下来的几年内，一些有进取心的逻辑学家会提供一个答案：正如事实上发生的那样，哥德尔首先达到了这个目标。然后，关于高阶系统的完备性的探究将成为一个明显的下一步。因此，在希尔伯特和阿克曼之后的几年内，基本的元逻辑定理将被建立。

如果这是正确的，那么希尔伯特在1917/18年的讲座中的决定性一步并不是孤立地一阶逻辑——也就是不是步骤(α)。那只是一个相对无关紧要的问题。这一步已经被皮尔斯明确提出，魏尔和勒文海姆默默地采取了这一步。希尔伯特并没有把它视为重要的事情，而且似乎主要将其视为一种阐述工具，一种简化《数学原理》逻辑呈现的手段。1917年的重要一步实际上是引入了元数学的技术，并明确提出了完备性、一致性和可决定性的问题。为逻辑系统提出这些问题是一个巨大的概念飞跃，希尔伯特也理解到了这一点。他自己在1905年海德堡演讲中的首次尝试，在庞加莱的批评下崩溃了，他曾经努力寻找一个令人满意的表述。即使在他在20世纪20年代的论文中引入了他的元逻辑区分之后，像罗素、布劳威尔和拉姆齐这样的逻辑学家也很难理解他试图做什么。这一发展在1917年绝非必然：如果没有引入元逻辑技术，20世纪20年代和30年代的逻辑和证明理论的历史将会截然不同。哥德尔定理是否会被构想出来？勒文海姆、斯科勒姆或策梅洛的工作是否会独立地导致对一阶逻辑的元逻辑性质的研究？回顾起来，我们可以想象出一条替代的技术结果(β)的路径，但没有理由认为它们注定要在当时以及以它们的方式出现。

如果我们现在转向(γ)这一点并问：一阶逻辑被视为“特权”的逻辑系统是不可避免的吗？正如我们所见，上世纪 30 年代的元逻辑结果并没有解决一阶逻辑的首要性问题。这种“特权”是后来出现的，并且似乎更多地依赖于哲学考虑：避免集合论悖论的需要，寻找数学的安全基础，适应布劳尔和韦尔的反对意见，感觉到高阶逻辑在方法上是可疑的且可以避免的。所有这些都显示了 20 世纪 20 年代 Grundlagenkrise 的持续影响，这对随后对数学基础的哲学理解的术语设定起到了很大作用。

因此，强调一点很重要，即另一种历史是可能的，并且 Grundlagenkrise 在希尔伯特 1917/18 年的逻辑著作中完全不存在。布劳尔和韦尔的名字从未被提及。希尔伯特当然意识到了这些悖论（他自 1897 年以来就知道），但他长期以来一直相信策梅洛的公理化已经展示了如何避免它们。在他的著作中，我们也找不到对“唯一真理逻辑”的追求。相反，在 1917/18 年和 20 世纪早期未发表的讲稿中，重点是利用新的元逻辑技术来探索各种逻辑系统的优势和劣势。这项工作明确是在他对几何公理的研究精神下进行的。他会采用一个系统，研究一段时间，然后放弃它来研究其他东西。在他的多元主义和实用主义的实验态度上，他更接近皮尔斯而不是逻辑主义者。

Grundlagenkrise 和他与布劳尔的公开辩论发生在后来，它们给人们对他逻辑研究动机的扭曲印象。这些哲学辩论对他的计划的技术方面有什么影响？对于一阶逻辑的表述和元逻辑问题的提出，答案很简单：根本没有任何影响。Hilbert 和 Ackermann 在 1928 年的内容已经在 1917/18 年的讲座中出现。至于 Hilbert 在 20 世纪 20 年代的证明论研究，其主要发展线路与布劳尔和韦伊尔完全独立。这些争论可能增加了一种紧迫感，但很难在实际数学中检测到任何影响。

因此，即使我们想象将哲学的 Grundlagenkrise 完全从图景中移除，希尔伯特学派的技术结果也不会受到重大影响。完备性和不完备性结果很可能会按计划或多或少地出现。（值得注意的是，伯奈斯和希尔伯特早在 1928 年就考虑了各种不完备性的可能性：参见 Wilfried Sieg 在 Hilbert [LFL]中的讨论：792-796。）但是这些结果将在一个非常不同的哲学氛围中出现。不完备性定理可能会被视为希尔伯特计划更广泛的重要技术贡献，而不是其戏剧性的反驳。也许（正如 Angus Macintyre 2011 年所建议的那样），它们会被视为集合论中的独立结果，少谈数学创造力的限制。

换句话说，远非不可避免的是，20 世纪 30 年代末，一阶逻辑作为一种特权逻辑系统的出现取决于两个相互独立的因素。在数学方面，它取决于希尔伯特引入的元逻辑技术；在哲学方面，它取决于 Grundlagenkrise 的论证。这些事情都不是不可避免的：它们发生在大致相同的时间也不是不可避免的。在不同的历史背景下，希尔伯特灵活的态度可能会占上风，更加强调高阶系统，或者探索代数逻辑、无穷逻辑、范畴论系统等等：简而言之，强调逻辑多元主义。

值得注意的是，随着 Grundlagenkrise 的哲学关注逐渐消退，以及来自计算机科学和同伦理论的新方法进入领域，一阶逻辑的首要地位值得重新考虑。

<!--md-padding-ignore-begin-->
## Bibliography

* Awodey, Steve & Erich H. Reck, 2002, “Completeness and Categoricity, Part I: Nineteenth-century Axiomatics to Twentieth-century Metalogic”, *History and Philosophy of Logic*, 23(1): 1–30. doi:10.1080/01445340210146889
* Badesa, Calixto, 2004, *The Birth of Model Theory: Löwenheim’s Theorem in the Frame of the Theory of Relatives*, Princeton: Princeton University Press.
* Bernays, Paul, 1918, “Beiträge zur axiomatischen Behandlung des Aussagen-Kalküls”, Habilitation Thesis, University of Göttingen; first published in Hilbert [LFL], pp. 231-268.
* –––, 1926, “Axiomatische Untersuchung des Aussagen-Kalküls der Principia Mathematica”, *Mathematische Zeitschrift*, 25: 305–320.
* –––, 1937, “A System of Axiomatic Set Theory”, *Journal of Symbolic Logic*, 2(1): 65–77. doi:10.2307/2268862
* Boole, George, 1847, *The Mathematical Analysis of Logic: Being An Essay Towards a Calculus of Deductive Reasoning*, Cambridge: Macmillan. Reprinted in Ewald 1996: vol. 1, pp. 451–509. [[Boole 1847 available online](http://archive.org/details/mathematicalanal00booluoft)]
* Brady, Geraldine, 2000, *From Peirce to Skolem: A Neglected Chapter in the History of Logic*, (Studies in the History and Philosophy of Mathematics, 4), Amsterdam: Elsevier.
* Carnap, Rudolf, “Die logizistische Grundlegung der Mathematik”, *Erkenntnis*, 2(1): 91–105. (References to the translation in Paul Benacerraf and Hilary Putnam, *Philosophy of Mathematics: Selected Readings*, Cambridge: Cambridge University Press, 1983, 41–52.) doi:10.1007/BF02028142 (de) doi:10.1017/CBO9781139171519.003 (en)
* Church, Alonzo, 1956, *Introduction to Mathematical Logic*, Princeton: Princeton University Press.
* –––, 1974, “Russellian Simple Type Theory”, *Proceedings and Addresses of the American Philosophical Association*, 47: 21–33. doi:10.2307/3129899
* De Morgan, Augustus, 1864, “On the Syllogism, No. IV, and on the Logic of Relations”, *Transactions of the Cambridge Philosophical Society*, 10: 173–230. (Read 8 Feb. 1858.) [[De Morgan 1864 available online](https://hdl.handle.net/2027/nyp.33433004518415?urlappend=%3Bseq=185)]
* Dutilh Novaes, Catarina, forthcoming, “Axiomatizations of Arithmetic and the First-order/Second-order Divide”, *Synthese*, first online: 30 December 2014. doi:10.1007/s11229-014-0636-6
* Eklund, Matti, 1996, “On How Logic Became First-Order”, *Nordic Journal of Philosophical Logic*, 1(2): 147–167. [[Eklund 1996 available online](http://www.hf.uio.no/ifikk/forskning/publikasjoner/tidsskrifter/njpl/vol1no2/howlogic.pdf)]
* Ewald, William Bragg (ed.), 1996, *From Kant to Hilbert: A Source Book in the Foundations of Mathematics*, 2 vols., Oxford: Clarendon Press.
* Ferreirós, José, 2001, “The Road to Modern Logic—An Interpretation”, *Bulletin of Symbolic Logic*, 7(4): 441–484. doi:10.2307/2687794
* Fraenkel, Abraham A., 1927, “Review of Skolem 1922”, *Jahrbuch über die Fortschritte der Mathematik*, 49: 138–139.
* Frege, Gottlob, 1879, *Begriffsschrift, eine der arithmetischen nachgebildete Formelsprache des reinen Denkens*, Halle: Nebert. Translated by Stefan Bauer-Mengelberg in van Heijenoort 1967: 1–82.
* –––, 1884, *Die Grundlagen der Arithmetik, eine logisch-mathematische Untersuchung über den Begriff der Zahl*, Breslau: Koebner. Translated by J. L. Austin as *The Foundations of Arithmetic, A Logico-Mathematical Inquiry into the Concept of Number*, Oxford: Blackwell, 1950.
* –––, 1893, *Grundgesetze der Arithmetik, begriffsschriftlich abgeleitet*, vol. 1, Jena: Pohl.
* –––, 1895, “Kritische Beleuchtung einiger Punkte in E. Schröders Vorlesungen über die Algebra der Logik”, *Archiv für systematische Philosophie*, 1: 433–456. [[Frege 1895 available online](https://hdl.handle.net/2027/pst.000052388057?urlappend=%3Bseq=443)]
* –––, [**PMC**], *Philosophical and Mathematical Correspondence*, Gottfried Gabriel, Hans Hermes, Friedrich Kambartel, Christian Thiel, Albert Veraart, Brian McGuinness, and Hans Kaal (eds.), Chicago: University of Chicago Press, 1980.
* Gabbay, Dov M. & John Woods (eds.), 2009, *Handbook of the History of Logic, Vol. 5: Logic from Russell to Church*, Amsterdam: Elsevier-North Holland.
* Gödel, Kurt, 1929, *Über die Vollständigkeit des Logikkalküls*, Doctoral Dissertation, University of Vienna. Printed with translation in Sol Feferman et al. (eds), *Kurt Gödel: Collected Works, Vol. 1: Publications 1929–1936*, Oxford: Clarendon Press, pp. 60–101.
* –––, 1931, “Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I”, *Monatshefte für Mathematik und Physik*, 38: 173–198; translated by S. Bauer-Mengelberg in van Heijenoort 1967: 596–616.
* –––, 1940, *The Consistency of the Axiom of Choice and of the Generalized Continuum Hypothesis with the Axioms of Set Theory*, Princeton: Princeton University Press.
* Goldfarb, Warren D., 1979, “Logic in the Twenties: The Nature of the Quantifier”, *Journal of Symbolic Logic*, 44(3): 351–368. doi:10.2307/2273128
* Hilbert, David, 1905, “Über die Grundlagen der Logik und der Arithmetik”, in *Verhandlungen des Dritten Internationalen Mathematiker-Kongresses in Heidelberg vom 8. bis 13. August 1904*, Leipzig: Teubner, pp. 174–185; translated by S. Bauer-Mengelberg in van Heijenoort 1967: 130–138.
* –––, 1917, “Axiomatisches Denken”, *Mathematische Annalen* 78(1–4): 405–415; translated by W. Ewald in Ewald 1996 (Volume 2), pp. 1105–1115. doi:10.1007/BF01457115 (de)
* –––, 1917/18, *Prinzipien der Mathematik*, unpublished lectures held in Göttingen, Winter Semester, 1917/18 (lecture notes recorded by Paul Bernays). Reprinted in Hilbert 2013: 31–221.)
* –––, 1928, “Probleme der Grundlegung der Mathematik”, (the “Bologna Lecture”), reprinted in Hilbert 2013: 954–966.
* –––, [**LFL**], *David Hilbert, Lectures on the Foundations of Logic, Mathematics and the Natural Sciences* (Volume III: Foundations of Logic and Arithmetic, 1917–1933), William Ewald and Wilfried Sieg (eds.), Berlin: Springer Verlag, 2013. doi:10.1007/978-3-540-69444-1
* Hilbert, David & Wilhelm Ackermann, 1928, *Grundzüge der theoretischen Logik*, Berlin: Springer Verlag.
* Hilbert, David & Paul Bernays, 1939*, Prinzipien der Mathematik II*, Berlin: Springer Verlag.
* Landini, Gregory, 1998, *Russell’s Hidden Substitutional Theory*, Oxford: Oxford University Press.
* Lindström, Per, 1969, “On Extensions of Elementary Logic”, *Theoria*, 35(1): 1–11. doi:10.1111/j.1755-2567.1969.tb00356.x
* Linsky, Bernard, 2011, *The Evolution of ‘Principia Mathematica’: Bertrand Russell’s Manuscripts and Notes for the Second Edition*, Cambridge: Cambridge University Press. doi:10.1017/CBO9780511760181
* Löwenheim, Leopold, 1915, “Über Möglichkeiten im Relativkalkül”, *Mathematische Annalen*, 76(4): 447–470. Translation in van Heijenoort 1967: 228–251. doi:10.1007/BF01458217 (de)
* –––, 1940, “Einkleidung der Mathematik im Schröderschen Relativkalkül”, *Journal of Symbolic Logic*, 5(1): 1–15. doi:10.2307/2269177
* Macintyre, Angus, 2011, “The Impact of Gödel’s Incompleteness Theorems on Mathematics”, in *Kurt Gödel and the Foundations of Mathematics: Horizons of Truth*, Matthias Baaz, Christos H. Papadimitriou, Dana S. Scott, Hilary Putnam, and Charles L. Harper (eds.), Cambridge: Cambridge University Press, pp. 3–26. doi:10.1017/CBO9780511974236.004
* Mancosu, Paolo (ed.), 1998, *From Brouwer to Hilbert: The Debate on the Foundations of Mathematics in the 1920s*, Oxford: Oxford University Press.
* Mancosu, Paolo, Richard Zach, & Calixto Badesa, 2009, “The Development of Mathematical Logic from Russell to Tarski, 1900–1935”, in L. Haaparanta (ed.), *The Development of Modern Logic*, Oxford: Oxford University Press, pp. 318–470; reprinted in Paolo Mancosu (ed.), *The Adventure of Reason: Interplay Between Philosophy of Mathematics and Mathematical Logic, 1900–1940*, Oxford: Oxford University Press, pp. 5–120.
* Moore, Gregory S., 1988, “The Emergence of First-Order Logic”, in William Aspray and Philip Kitcher (eds), *History and Philosophy of Modern Mathematics*, (Minnesota Studies in the Philosophy of Science, 11), pp. 95–135, Minneapolis: University of Minnesota Press.
* Peano, Giuseppe, 1889, *Arithmetices Principia, nova methodo exposita*, Turin: Bocca. Translated in van Heijenoort 1967: 20–55. [[Peano 1889 (it) available online](http://archive.org/details/arithmeticespri00peangoog)]
* Peirce, Charles S., 1867, Five Papers on Logic Presented to the American Academy; reprinted in *Writings of Charles S. Peirce: A Chronological Edition* (Volume 2), Edward C. Moore (ed.), Bloomington: Indiana University Press, 1984, pp. 12-86.
* –––, 1870 [1873], “Description of a Notation for the Logic of Relatives, Resulting from an Amplification of the Conceptions of Boole’s Calculus of Logic”, *Memoirs of the American Academy of Arts and Sciences*, 9(2): 317–378, communicated 26 January 1870, published 1873. doi:10.2307/25058006
* –––, 1881, “On the Logic of Number”, *American Journal of Mathematics*, 4(1): 85–95. Reprinted in Ewald 1996: vol. 1, pp. 598–608. doi:10.2307/2369151
* –––, 1883, “A Theory of Probable Inference”, in C. S. Peirce (ed.), *Studies in Logic by Members of the Johns Hopkins University*, Boston: Little Brown, pp. 126–181. [[Peirce 1883 available online](http://archive.org/details/studiesinlogic00peiruoft)]
* –––, 1885, “On the Algebra of Logic: A Contribution to the Philosophy of Notation”, *American Journal of Mathematics*, 7(2): 180–202. Reprinted in Ewald 1996: vol. 1, pp. 608–632. doi:10.2307/2369451
* Quine, Willard V., 1936, “Set-theoretic Foundations for Logic”, *Journal of Symbolic Logic*, 1(2): 45–57. doi:10.2307/2268548
* Reck, Erich H., 2013, “Developments in Logic: Carnap, Gödel, and Tarski”, in *Oxford Handbook of the History of Analytical Philosophy*, Michael Beaney (ed.), Oxford: Oxford University Press, pp 546–571.
* Russell, Bertrand, 1903, *The Principles of Mathematics*, Cambridge: Cambridge University Press. [[Russell 1903 available online](http://archive.org/details/principlesmathe00russgoog)]
* –––, 1908, “Mathematical Logic as Based on the Theory of Types”, *American Journal of Mathematics*, 30(3): 222–262. Reprinted in van Heijenoort 1967: 150–182. doi:10.2307/2369948
* Schiemer, Georg & Erich H. Reck, 2013, “Logic in the 1930s: Type Theory and Model Theory”, *Bulletin of Symbolic Logic*, 19(4): 433–472. doi:10.1017/S1079898600010568
* Schröder, Ernst, 1890–95, *Vorlesungen über die Algebra der Logik (exakte Logik)*, 3 volumes, Leipzig: Teubner.
* Sieg, Wilfried, 1999, “Hilbert’s Programs: 1917–1922”, *Bulletin of Symbolic Logic*, 5(1): 1–44. doi:10.2307/421139
* –––, 2009, “Hilbert’s Proof Theory”, in Gabbay & Woods 2009: 321–384. doi:10.1016/S1874-5857(09)70012-3
* –––, 2013, *Hilbert’s Programs and Beyond*, Oxford: Oxford University Press.
* Skolem, Thoralf, 1920, “Logisch-kombinatorische Untersuchungen über die Erfüllbarkeit oder Beweisbarkeit mathematischer Sätze nebst einem theoreme über dichte Mengen”, Kristiania. Partially translated by S. Bauer Mengelberg in van Heijenoort 1967: 252–263.
* –––, 1922, “Einige Bemerkungen zur axiomatischen Begründung der Mengenlehre”, translated by S. Bauer Mengelberg in van Heijenoort 1967: 217–232.
* –––, 1923, “Begründung der elementaren Arithmetik durch die rekurrierende Denkweise ohne Anwendung scheinbarer Veränderlichen mit unendlichem Ausdehnungsbereich”, Kristiania. Translated by S. Bauer Mengelberg in van Heijenoort 1967: 302–333. [[Skolem 1923 (de) available online](https://www.ucalgary.ca/rzach/files/rzach/skolem1923.pdf)]
* Tarski, Alfred, 1935, “Der Wahrheitsbegriff in den formalisierten Sprachen”, *Studia Philosophica*, 1: 261–405. Translated in *Logic, Semantics, Metamathematics: Papers from 1923 to 1938*, Oxford: Oxford University Press, 1956.
* van Heijenoort, Jean, (ed.), 1967, *From Frege to Gödel: A Source Book in Mathematical Logic, 1879–1931*, Cambridge, MA: Harvard University Press
* von Neumann, John, 1927, “Zur Hilbertschen Beweistheorie”, *Mathematische Zeitschrift*, 26: 1–46.
* Weyl, Hermann, 1910, “Über die Definitionen der mathematischen Grundbegriffe”, *Mathematisch-Wissenschaftliche Blätter*, 7: 93–95, 109–113.
* –––, 1918, *Das Kontinuum*, Berlin: de Gruyter.
* Whitehead, Alfred N. & Bertrand Russell, 1910–1913, *Principia Mathematica*, 3 volumes, Cambridge: Cambridge University Press.
* Zach, Richard, 1999, “Completeness Before Post: Bernays, Hilbert, and the Development of Propositional Logic”, *Bulletin of Symbolic Logic*, 5: 331–366.
* Zermelo, Ernst, 1908, “Untersuchungen über die Grundlagen der Mengenlehre, I”, *Mathematische Annalen*, 65(2): 261–281. Translated by S. Bauer Mengelberg in van Heijenoort 1967: 199–215. doi:10.1007/BF01449999 (de)
* –––, 1929, “Über den Begriff der Definitheit in der Axiomatik”, *Fundamenta Mathematicae*, 14: 339–344. doi:10.4064/fm-14-1-339-344

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-firstorder-emergence). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-firstorder-emergence/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-firstorder-emergence&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](http://philpapers.org/sep/logic-firstorder-emergence/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[epsilon calculus](https://plato.stanford.edu/entries/epsilon-calculus/) | [Frege, Gottlob](https://plato.stanford.edu/entries/frege/) | [Gödel, Kurt: incompleteness theorems](https://plato.stanford.edu/entries/goedel-incompleteness/) | [logic: second-order and higher-order](https://plato.stanford.edu/entries/logic-higher-order/) | [logical pluralism](https://plato.stanford.edu/entries/logical-pluralism/) | [model theory: first-order](https://plato.stanford.edu/entries/modeltheory-fo/) | [paradox: Skolem’s](https://plato.stanford.edu/entries/paradox-skolem/) | [Peirce, Benjamin](https://plato.stanford.edu/entries/peirce-benjamin/) | [Peirce, Charles Sanders](https://plato.stanford.edu/entries/peirce/) | [Peirce, Charles Sanders: logic](https://plato.stanford.edu/entries/peirce-logic/) | [proof theory: development of](https://plato.stanford.edu/entries/proof-theory-development/) | [Russell, Bertrand](https://plato.stanford.edu/entries/russell/) | [Russell’s paradox](https://plato.stanford.edu/entries/russell-paradox/) | [set theory: Zermelo’s axiomatization of](https://plato.stanford.edu/entries/zermelo-set-theory/) | [type theory](https://plato.stanford.edu/entries/type-theory/) | [Whitehead, Alfred North](https://plato.stanford.edu/entries/whitehead/)

### Acknowledgments

I am grateful to Erich Reck for comments.

[Copyright © 2018](https://plato.stanford.edu/info.html#c) by  
[William Ewald](https://www.law.upenn.edu/cf/faculty/wewald/) <[*wewald@law.upenn.edu*](mailto:wewald%40law%2eupenn%2eedu)>
<!--md-padding-ignore-end-->
