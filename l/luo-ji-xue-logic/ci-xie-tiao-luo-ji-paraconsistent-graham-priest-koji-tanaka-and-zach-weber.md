# 次协调逻辑 paraconsistent (Graham Priest, Koji Tanaka, and Zach Weber)

*首次发表于 1996 年 9 月 24 日；实质性修订于 2022 年 2 月 21 日。*

标准的当代逻辑学观点认为，从矛盾的前提中可以推出任何东西。如果根据逻辑学的推理关系，任何任意的矛盾 A，¬A 都可以推出任意的结论 B，那么这个逻辑学的推理关系就是爆炸性的（ex contradictione quodlibet (ECQ)）。经典逻辑学，以及大多数标准的“非经典”逻辑学，如直觉主义逻辑学，都是爆炸性的。根据常识，不一致性无法进行一致的推理。

次协调逻辑学挑战了这种标准观点。如果一个推理关系是次协调的，那么它就不是爆炸性的。因此，即使在可用信息不一致的情况下，次协调的推理关系也不会变得琐碎。因此，次协调逻辑学以一种受控的方式容纳了不一致性，将不一致的信息视为潜在的信息。

英语中的前缀“para”有两个意思：“类似于”（或“模仿”）或“超越”。当“paraconsistent”这个术语在 1976 年由米罗·克萨达（Miró Quesada）在第三届拉丁美洲数学逻辑学会议上创造时，他似乎是指的第一个意思。然而，许多次协调逻辑学家将其解释为第二个意思，这为次协调逻辑学的发展提供了不同的理由，我们将在下面看到。

次协调逻辑被否定地定义：只要不是爆炸性的，任何逻辑都是次协调的。这意味着在次协调逻辑中没有单一的一组开放问题或程序。因此，本条目不是次协调逻辑的完整调查。目的是描述一个多样化领域的一些哲学上显著的特征。

---

## 1. 次协调

如果一个逻辑的逻辑推理关系（⊨，无论是语义还是证明论）不是爆炸性的，则该逻辑是次协调的。次协调是一个推理关系的属性。矛盾推理（ECQ）在次协调上是无效的：一般来说，不是所有的 A, ¬A⊨B 都成立。

在正统逻辑中，一致性的概念经常扮演的角色，即任何理论必须满足的最基本要求，被放宽为协调性的概念：如果一个理论被认为是可行的，那么它不能包含任何句子。理论的简单一致性（没有矛盾）是绝对一致性或非平凡性（不是每个句子都是理论的一部分）的特例。正如我们将在下面看到的，许多次协调逻辑确实验证了非矛盾律（LNC），⊨¬(A∧¬A)，尽管它们无效化了 ECQ。

除了次协调的推论关系必须是非爆炸性的这一基本定义要求外，次协调逻辑存在着巨大的分歧。在 21 世纪的发展阶段，可以说“次协调性”并不是指特定的逻辑方法，而是一些逻辑学具有而其他逻辑学没有的属性（例如紧致性或多个结论）。

### 1.1 双真论

在文献中，特别是在包含对次协调逻辑的反对意见的部分中，存在一些混淆次协调与真矛盾主义的倾向，真矛盾主义是指存在真矛盾的观点（参见真矛盾主义词条）。认为一个结果关系应该是次协调的，并不意味着认为存在真矛盾。次协调是一个结果关系的属性，而真矛盾主义是关于真理的观点。能够定义一个非爆炸性的结果关系并不意味着某些句子是真的。能够构建一个模型，在该模型中存在一个矛盾，但并不是语言中的每个句子都成立（或者在某个世界中是这样），并不意味着矛盾本身是真的。因此，必须区分次协调和真矛盾主义。这一观点最近由巴里奥和达雷（2018）提出，并由卡尼埃利和罗德里格斯（2021）明确提出了一个非真矛盾主义的次协调解释。关于次协调可能最终导致真矛盾主义的原因，请参见阿斯穆斯（2012）。

真矛盾主义是指某个矛盾是真的观点，这与“平凡主义”观点不同，平凡主义观点认为一切（包括每个矛盾）都是真的；如果真矛盾主义要具有连贯性，那么真矛盾主义者偏好的逻辑学必须是次协调的（尽管这一点也受到巴里奥和达雷的质疑，基于里普利和其他人的工作，例如里普利 2012）。次协调逻辑学家可能会对真矛盾主义产生一些吸引力，但大多数次协调逻辑学并不是“真矛盾主义”逻辑学。在讨论次协调逻辑学时，主要关注的不是矛盾的可获得性，而是结果关系的爆炸性质。

### 1.2 ex contradictione quodlibet 的简要历史

现在将 ex contradictione quodlibet 视为有效是标准做法。然而，这种当代观点应该放在历史背景下来看。在 19 世纪末，逻辑学的研究实现了数学化，一种爆炸性的逻辑理论成为了标准。在布尔、弗雷格、罗素和希尔伯特等逻辑学家的工作下，经典逻辑成为了正统的逻辑学解释。

然而，在古代，似乎没有人认同 ECQ 的有效性。亚里士多德提出了被称为连结原则的观点：“同一事物的存在和不存在不可能同时导致同一事物的必然性”（《前分析》第二篇第 4 章 57b3）。（连结逻辑最近由 Wansing 重新振兴，例如 Omori 和 Wansing 2019；根据这一原则发展起来的连结逻辑的条目请参见连结逻辑的条目。）这一原则成为了中世纪的辩论话题。尽管中世纪的辩论似乎是在条件语句的背景下进行的，我们也可以将其视为关于推论的辩论。这一原则被博伊修斯（480-524 或 525）和阿贝拉尔（1079-1142）采用，他们考虑了两种推论解释。第一种是熟悉的：前提为真时结论不可能为假。第一种解释因此类似于当代的真值保持概念。第二种解释最近不太被接受：前提的意义包含了结论的意义。这种解释，如布雷迪的意义包含逻辑（Brady 2006）中的一些相关逻辑，不允许结论是任意的推论。阿贝拉尔认为第一种解释未能满足连结原则，而第二种解释（包含解释）捕捉到了亚里士多德的原则。

阿贝拉尔的立场在 1130 年代被巴黎的阿尔贝里克（Alberic of Paris）提出了一个困难。然而，大多数中世纪逻辑学家并没有放弃基于包含或类似原则的有效性解释（例如，参见 Martin 1987）。但是，处理这个困难的一种方法是拒绝连结原则。这种方法已经成为最有影响力的方法，被亚当·巴尔沙姆（Adam Balsham）或帕尔维庞塔努斯（Parvipontanus）的追随者接受（有时也被称为小桥的亚当 [12 世纪]）。帕尔维庞塔努斯的人们接受了与之相关的后果的真值保持解释和“悖论”。事实上，正是帕尔维庞塔努斯的一位成员，瓦朗斯的威廉（William of Soissons），在 12 世纪发现了我们现在称之为 C.I. Lewis（独立）对 ECQ 的论证（参见 Martin 1986）。

然而，包含解释并没有消失。约翰·邓斯·斯科特（John Duns Scotus，1266-1308）及其追随者接受了包含解释（参见 Martin 1996）。15 世纪后期的科隆学派通过拒绝析取三段论来反对 ECQ（参见 Sylvan 2000）。

在亚洲的逻辑学史上，有一种倾向（例如，在贾伊纳教和佛教传统中）认为陈述可能既真又假。此外，由主要佛教逻辑学家 Dignāga（5 世纪）和 Dharmakīrti（7 世纪）发展的逻辑学并不接受 ECQ。事实上，他们的逻辑解释实际上是基于论证要素之间的“普遍性”（梵文：vyāpti，藏文：khyab pa）关系。就像阿贝拉尔的包含解释一样，前提和结论之间必须有比真值保持解释允许的更紧密的联系。关于 Dharmakīrti 的逻辑学及其后续发展，参见 Dunne 2004 和 Tillemans 1999、2016。

### 1.3 次协调逻辑的现代历史

在二十世纪，不同的人在不同的时间和地点独立地提出了逻辑推论的爆炸性解释的替代方案。他们的动机常常是不同的。在当代，最早的次协调逻辑似乎是由两位俄国人提出的。从 1910 年开始，瓦西列夫提出了一种修改过的亚里士多德三段论，其中包括形式为“S 既是 P 又不是 P”的陈述。1929 年，奥尔洛夫给出了第一个次协调逻辑 R 的公理化表述。（关于瓦西列夫，请参见 Arruda 1977 和 Arruda 1989：102f；关于奥尔洛夫，请参见 Anderson，Belnap 和 Dunn 1992：xvii。）

瓦西列夫或奥尔洛夫的工作当时并没有产生任何影响。第一个（正式的）逻辑学家开发次协调逻辑的是波兰的亚斯科夫斯基，他是鲁卡谢维奇的学生，鲁卡谢维奇本人在批评亚里士多德的排中律时已经设想了次协调逻辑（鲁卡谢维奇 1951）。几乎在同一时间，哈尔登（1949）提出了关于无意义逻辑的工作，但这也大多被忽视了。

次协调逻辑学是由南美洲的 Florencio Asenjo 和 Newton da Costa 在他们的博士论文中独立开发的，分别于 1954 年和 1963 年，重点是数学应用（参见 Asenjo 1966 年，da Costa 1974 年）。自那时以来，一群活跃的逻辑学家一直在持续研究次协调逻辑学，尤其是在巴西的坎皮纳斯和圣保罗，重点是形式不一致的逻辑学。Carnielli 和 Coniglio（2016 年）对这项工作进行了全面的最新解释。

相关逻辑学形式的次协调逻辑学在英国由 Smiley 于 1959 年提出，同时在美国由 Anderson 和 Belnap 以更为发展的形式提出。匹兹堡的一个活跃的相关逻辑学家团体涌现出来，包括 Dunn，Meyer 和 Urquhart。次协调逻辑学（以相关逻辑学的形式）的发展传播到了澳大利亚。R. Routley（后来的 Sylvan）和 V. Routley（后来的 Plumwood）为 Anderson/Belnap 的一些相关逻辑学发现了一种有意义的语义。在堪培拉，围绕着他们形成了一个学派，其中包括 Brady 和 Mortensen，后来还有 Priest，他与 R. Routley 一起引入了二值矛盾主义的发展。

自 1970 年代以来，次协调逻辑的发展已经国际化。以下概述了一些主要的思想流派，包括适应性逻辑（如 Batens 2001 年所述）和保守主义（如 Schotch、Brown 和 Jennings 2009 年所述）。在阿根廷、澳大利亚、比利时、巴西、加拿大、捷克共和国、英格兰、德国、印度、以色列、意大利、日本、墨西哥、新西兰、波兰、苏格兰、西班牙、美国等地都有相关研究工作。已经举办了一系列重要的国际会议讨论次协调逻辑。1997 年，第一届世界次协调大会在比利时根特大学举行。第二届世界大会于 2000 年在巴西圣塞巴斯蒂安（圣保罗）举行，第三届于 2003 年在图卢兹（法国）举行，第四届于 2008 年在墨尔本（澳大利亚）举行。第五届世界大会于 2013 年在印度加尔各答举行。2014 年的另一次重要次协调会议在慕尼黑举行（Andreas 和 Verdée 2016 年）。请参阅世界大会论文集的参考文献部分。

## 2. 动机

提出次协调的原因是针对特定形式系统的次协调逻辑的发展。然而，有几个一般的原因可以认为逻辑应该是次协调的。在我们总结次协调逻辑系统之前，我们提出一些次协调逻辑的动机。

### 2.1 次协调而非平凡的不一致性

对于次协调逻辑的一个最有说服力的理由是，表面上看，存在一些不一致但非平凡的理论。如果我们承认这些理论的存在，它们的基础逻辑必须是次协调的（尽管参见 Michael 2016）。

#### 2.1.1 非平凡的理论

显然矛盾但非平凡理论的例子很容易产生。一个例子可以从科学史中得出。考虑玻尔的原子理论。根据这个理论，电子在原子核周围轨道运动而不辐射能量。然而，根据该理论的一个组成部分——麦克斯韦方程，加速运动的电子必须辐射能量。因此，玻尔对原子行为的解释是不一致的。然而，显然，并不是关于电子行为的一切都是从它推导出来的，也不应该是。因此，无论它所依赖的推理机制是什么，可以说它必须是次协调的（Brown & Priest 2015）。

#### 2.1.2 真矛盾

尽管必须区分二值矛盾论和次协调，但二值矛盾论可以成为次协调逻辑的动机。一个真矛盾（真正的矛盾）的候选者是说谎悖论。考虑句子：“这个句子不是真的”。有两种选择：要么这个句子是真的，要么不是。假设它是真的。那么它所说的是事实。因此，这个句子不是真的。另一方面，假设它不是真的。这就是它所说的。因此，这个句子是真的。无论哪种情况，它既是真的又不是真的。（参见关于二值矛盾论的条目。）

#### 2.1.3 语言学

自然语言是另一个可能存在非平凡不一致性的场所。在语言学中，人们观察到即使在不一致的语境中，正常的词汇特征仍然保留。例如，像“near”这样的词具有空间意义，即使处理不可能的对象时也不会受到干扰（McGinnis 2013）：

> 如果我告诉你我把一个球状立方体涂成棕色，你会认为它的外部是棕色的......如果我在里面，你知道我不在它附近（Chomsky 1995: 20）

因此，如果说自然语言具有逻辑，那么次协调逻辑学可以成为其形式化的候选者。

### 2.2 人工智能

次协调逻辑学的动机不仅来自哲学考虑，还来自其应用和含义。

#### 2.2.1 自动推理

其中一个应用是自动推理（信息处理）。考虑一个存储大量信息的计算机，就像 Belnap 1992 中所述。虽然计算机存储信息，但它也用于对其进行操作，并且关键是从中推断。现在，由于数据输入操作员的错误或多重来源，计算机包含不一致的信息是很常见的。这对于具有定理证明器的数据库操作确实是一个问题，因此引起了计算机科学家的广泛关注。已经研究了去除不一致信息的技术。然而，所有这些技术都有限的适用性，并且无法保证产生一致性。（逻辑错误没有通用算法。）因此，即使在发现矛盾时采取了措施来消除矛盾，如果隐藏的矛盾不会产生对查询的虚假答案，那么一个基础的次协调逻辑是可取的。

尼尔森的次协调（四值）逻辑 N4 已经专门研究了在计算机科学中的应用（Kamide＆Wansing 2012）。Subrahmanian（1987）提出了注释逻辑，然后由 da Costa，Subrahmanian 和 Vago（1991）提出；这些工具现在正在扩展到机器人技术，医学诊断的专家系统和工程领域，并在 Abe，Akama 和 Nakamatsu（2015）和 Akama（2016）编辑的卷中收集了最新的工作。

#### 2.2.2 信念修正

信念修正是在新证据的光线下对信念体系进行理性修正的研究。众所周知，人们的信念可能是不一致的。他们甚至可能在这样做时是理性的。例如，对于某事物及其否定可能存在明显压倒性的证据。甚至可能存在无法消除这种不一致性的情况。例如，考虑“序言悖论”。一个理性的人，在彻底研究之后，写了一本书，在书中他们声称 A1，...，An。但他们也意识到，任何复杂的书籍都不仅包含真理。因此，他们也理性地相信 ¬(A1∧...∧An)。因此，理性信念修正的原则必须适用于不一致的信念集合。传统的信念修正理论，例如 AGM 理论（参见信念修正的逻辑学），都无法做到这一点，因为它们基于经典逻辑（Tanaka 2005）。更合适的解释可能基于次协调逻辑；参见 Girard 和 Tanaka 2016。

### 2.3 形式语义学和集合论

次协调可以被视为对形式语义学和集合论中的逻辑悖论的回应。

#### 2.3.1 真理理论

语义学是旨在阐明对意义的理论理解的研究。大多数关于语义学的解释坚持认为，阐明一个句子的意义，在某种意义上，就是阐明它的真值条件。现在，至少乍看之下，真理是由塔斯基 T-方案所表征的一种谓词：

T(A)↔A

其中 A 是一个句子，A 是它的名称。但是，给定任何标准的自我引用方式，例如算术化，可以构造一个句子 B，它表明 ¬T(B)。T-方案给出了 T(B)↔¬T(B)。然后可以得出 T(B)∧¬T(B)。（当然，这只是说谎者悖论。）Beall（2009）给出了次协调逻辑中真理理论的完整发展；有关更一般的细节，请参阅 Beall 等人（2018）。

#### 2.3.2 集合论

在集合论中，情况类似。集合论的朴素公理，也可以说是直观上正确的公理，是包含理解模式和外延性原则的：

∃y∀x(x∈y↔A)∀x(x∈y↔x∈z)→y=z

正如罗素所发现的，任何包含理解模式的理论都是不一致的。因为在理解模式中将'A'替换为'y∉y'，并将存在量词实例化为任意的对象'r'，得到：

∀y(y∈r↔y∉y)

因此，将全称量词实例化为'r'得到：

r∈r↔r∉r

随之而来的是 r∈r∧r∉r。

对于这些不一致问题，标准方法大体上都是权宜之计。次协调方法使得在真理和集合性理论中能够尊重数学上的基本直觉。例如，正如 Brady（1989；2006）所示，可以在次协调集合论中允许矛盾的出现，但这些矛盾不必影响整个理论。

通过次协调逻辑，可以采用几种方法来处理具有天真包容性的集合论。Libert（2005）描述了次协调集合论的模型。韦伯（2010b，2012）使用相关逻辑公理化地发展了序数和基数的理论。从 da Costa 的传统中，Omori（2015）考虑了添加一种一致性运算符来跟踪理论的非悖论片段的可能性。Verdée（2013）提出了使用自适应逻辑的天真集合论；有关自适应弗雷格集合论的最新发展，请参阅 Batens（2020）。

Incurvati (2020, 第 4 章) 对次协调方法论进行了详细的批判，该方法论是针对天真集合论的。最近在代数值模型的次协调集合论中，摆脱了天真集合论，而是将标准泽尔梅洛-弗兰克尔集合论（ZF）的公理放置在一个次协调的框架中。沿着这些思路进行的代数模型正在被 Tarafder、Venturi 和 Jockwich 积极研究（参见 Jockwich 和 Venturi 2021），继而 Löwe 和 Tarafder 2015。

#### 2.3.3 数学的一般性

根据 da Costa (1974: 498)，

> 研究不一致的系统与非欧几何一样有趣：我们将对悖论的本质有更好的了解，对获得确定结果所需的各种逻辑原则之间的联系有更深入的洞察力等等。我们的目标不是消除不一致性，而是分析和研究它们。

在韦伯 2021 年的研究中，我们在这个方向上迈出了最新的一步。有关次协调逻辑中数学的进一步发展，请参阅关于不一致数学的条目。

### 2.4 算术和哥德尔定理

与形式语义学和集合论不同，可能没有明显的算术原则导致矛盾的产生。尽管如此，就像经典的非标准算术模型一样，存在一类不一致的算术模型（或更准确地说是不一致算术的模型），它们具有有趣且重要的数学结构。

不一致的算术模型存在的一个有趣推论是其中一些是有限的（与经典的非标准模型不同）。这意味着在元数学定理中有一些重要的应用。例如，经典的 Löwenheim-Skolem 定理指出，Q（罗宾逊的算术，是 Peano 算术的一个片段）具有每个无限基数的模型，但没有有限模型。但是，通过参考不一致的算术模型，可以证明 Q 也具有有限大小的模型。

不仅是 Löwenheim-Skolem 定理，其他元数学定理也可以进行次协调处理。然而，在其他定理的情况下，通常由元数学的限制性定理所示的负面结果可能不再成立。一个重要的定理是哥德尔定理。

哥德尔的第一不完全性定理的一个版本表明，对于任何一致的可被认为是完备的算术公理理论，其中可以被确认为正确的，将存在一个算术真理——即其哥德尔句子——在该理论中无法被证明，但可以通过直观正确的推理被证明为真。哥德尔定理的核心实际上是一个涉及句子 G 的悖论，即“这个句子是不可证明的”。如果 G 是可证明的，那么它是真的，因此不可证明。因此 G 被证明了。因此 G 是真的，因此不可证明。如果用次协调逻辑来形式化算术，并且因此允许理论不一致，那么哥德尔句子很可能在该理论中是可证明的（基本上是通过上述推理）。因此，对算术采用次协调方法克服了（许多人认为）由哥德尔定理导致的算术限制。有关其他“限制性”元数学定理，请参见 Priest 2002。有关 Meyer 将次协调逻辑应用于算术的一些原始工作，以及新的评论和发展，请参见 Ferguson 和 Priest 2021 的合集。

### 2.5 模糊性

从一开始，次协调逻辑部分地旨在处理模糊性问题和索拉斯悖论（Jaśkowski 1948 [1969]）。一些经验证据表明，自然语言中的模糊性是次协调处理的一个很好的候选对象（Ripley 2011）。

已经提出了几种不同的次协调方法来处理模糊性。次值论是超值论的逻辑对偶：如果某个模糊谓词的某种可接受的锐化上的主张是真的，那么它就是真的。超值论家看到的是不确定性或真值间隙，而次值论家看到的是过度确定性或真值过剩。次值逻辑将像其超值对偶一样保留所有经典的重言式，只要有效性的定义限制在非过剩的情况下。由于它在结构上与超值论非常相似，次值论也受到了大部分相同的批评（Hyde 1997）。

更广泛地说，（二值）次协调已经在直接的三值真值功能方法中用于处理模糊性。其目的是保留以下两个直观主张：

1. 容忍性：对于模糊的 F，不是 x 是 F 但某个非常类似于 F 的 x 不是 F 的情况。
2. 截断：对于所有的 F，如果有一些 x 是 F，一些 y 不是 F，并且存在一个从 x 到 y 的有序 F-进展，那么就存在一些最后的 F 和一些第一个非 F

再次，分析的关键是将截断视为不一致性的场所，适用于既是 F 又不是 F 的对象。然后，所有关于模糊 F 的容忍性主张都被视为真实；但由于次协调地推理不是普遍有效的析取三段论，这些主张并不意味着像“每个人都秃头”这样的荒谬。次协调模型非常强调模糊谓词的截断点，将大部分关于索尔蒂斯悖论的问题归因于模糊谓词的潜在不一致性（Weber 2010a）。

关于索尔蒂斯悖论是否与其他众所周知的语义和集合论悖论（如罗素悖论和说谎者悖论）属于同一类别存在争议。如果是这样，那么对于其中一个悖论的次协调方法就像对另一个悖论一样自然。

## 3. 次协调逻辑系统

已经设计了许多形式技术来否定 ECQ。随着对次协调逻辑的兴趣增长，不同的技术在世界各地发展起来。因此，这些技术的发展在某种程度上具有地区特色（当然也有例外，并且地区差异可能被夸大了；参见 Tanaka 2003）。其中一些已经在 Brown 2002 和 Priest 2002 中总结。这里列举的系统列表绝不是详尽无遗的，将在未来的更新中扩展。

大多数次协调逻辑学家并不提倡对经典逻辑的全面否定。他们通常接受在一致的上下文中经典推理的有效性。正是需要在不扩散到所有地方的情况下隔离出一致性，这促使了对 ECQ 的否定。根据认为需要多少修订，我们有一种用于次协调的技术。这里给出的分类是基于对经典逻辑修订程度的。 （关于基于接近经典逻辑的次协调逻辑的比较，请参见 Arieli，Avron 和 Zamansky（2011），有关更多方法论问题，请参见 Wansing 和 Odinstov（2016）。）由于逻辑的新颖性可以在命题层面上看到，我们将集中讨论命题次协调逻辑。

### 3.1 讨论逻辑学

第一个被发展出来的形式次协调逻辑学是由波兰逻辑学家 Jaśkowski（1948）提出的讨论逻辑学。讨论逻辑学的思想是，在一个讨论中，每个参与者都提出一些信息、信念或观点。每个陈述根据在讨论中提出它的参与者而言是真实的。但在整个讨论中真实的是参与者提出的陈述的总和。每个参与者的观点可能是自洽的，但可能与其他人的观点不一致。Jaśkowski 将这个思想形式化为讨论逻辑学的形式。

通过在模态逻辑中对话进行建模，可以形式化讨论逻辑学。为了简单起见，Jaśkowski 选择了 S5。我们将每个参与者的信念集合视为 S5 模型 M 中某个世界上为真的句子集合。因此，一个在讨论中由参与者断言的句子 A 被解释为“可能是 A”或 S5 中的 ⬦A 句子。然后，A 在讨论中成立当且仅当 A 在 M 中的某个世界上为真。由于 A 可能在一个世界中成立但在另一个世界中不成立，因此在讨论中 A 和 ¬A 都可能成立。实际上，在一个理性的讨论中，参与者应该在某个问题上存在分歧。因此，B 是 A1，…，An 的次协调结果当且仅当 ⬦B 是 ⬦A1…⬦An 的 S5 结果。

要看到讨论逻辑是次协调的，考虑一个 S5 模型 M，使得 A 在 w1 成立，¬A 在另一个世界 w2 成立，但是对于某个 B，B 在任何世界都不成立。那么在 M 中，A 和 ¬A 都成立，但是 B 在 M 中不成立。因此，讨论逻辑使 ECQ 无效。

然而，没有一个 S5 模型使得 A∧¬A 在某个世界成立。因此，在讨论逻辑中，形式为{A∧¬A}⊨B 的推理是有效的。这意味着在讨论逻辑中，结合律({A,¬A}⊨A∧¬A)不成立。但是可以定义一个讨论的合取，∧d，如 A∧⬦B（或 ⬦A∧B）。然后，∧d 的结合律成立（Jaśkowski 1949）。

一个困难是条件语句的表述。在 S5 中，从 ⬦p 和 ⬦(p⊃q)推出 ⬦q 的推理是无效的。Jaśkowski 选择引入一个他称之为讨论蕴涵的联结词，⊃d，定义为 ⬦A⊃B。这个联结词可以理解为“如果某个参与者陈述 A，则 B”。由于在 S5 中，从 ⬦A⊃B 和 ⬦A 推出 ⬦B 是有效的，因此 ⊃d 的演绎法则在讨论逻辑中成立。还可以定义一个讨论的双蕴涵，≡d，如(⬦A⊃B)∧⬦(⬦B⊃A)（或 ⬦(⬦A⊃B)∧(⬦B⊃A)）。关于 Jaśkowski 逻辑及其公理化工作的一些历史，请参见 Omori 和 Alama（2018）。

### 3.2 非附加系统

非附加系统是指不验证附加性的系统（即，{A,B}⊭A∧B）。正如我们上面所看到的，没有讨论连接词的讨论逻辑是非附加的。Rescher 和 Manor（1970）提出了另一种非附加策略。实际上，我们可以连接前提，但只能达到最大一致性。具体而言，如果 Σ 是一组前提，那么最大一致子集是任何一致子集 Σ'，满足如果 A∈Σ−Σ'，那么 Σ'∪{A}是不一致的。然后我们说 A 是 Σ 的结果，当且仅当 A 是某个最大一致子集 Σ'的经典结果。然后{p,q}⊨p∧q，但{p,¬p}⊭p∧¬p。

### 3.3 保全主义

在 Rescher 和 Manor 的非附加系统中，一个结果关系被定义在前提的某个最大一致子集上。这可以被看作是一种“测量”前提集合一致性水平的方式。{p,q}的水平为 1，因为最大一致子集就是集合本身。然而，{p,¬p}的水平为 2：{p}和{¬p}。

如果我们在某个最大一致子集上定义一个结果关系，那么这个关系可以被认为是保持一致片段水平的方法。这就是所谓的保持主义方法。它最早由加拿大逻辑学家 Ray Jennings 和 Peter Schotch 开发。

更准确地说，一个（有限的）公式集 Σ 可以被划分为经典一致的片段，它们的并集是 Σ。让 ⊢ 表示经典的结果关系。Σ 的覆盖是一个集合{Σi:i∈I}，其中每个成员都是一致的，并且 Σ=⋃i∈IΣi。Σ 的水平，l(Σ)，是最小的 n，使得 Σ 可以被划分为 n 个集合，如果存在这样的 n，否则为 ∞。一个被称为强制的结果关系，⊩，可以定义如下。Σ⊩A 当且仅当 l(Σ)=∞，或者 l(Σ)=n 并且对于每个大小为 n 的覆盖，存在一个 j∈I 使得 Σj⊢A。如果 l(Σ)=1 或 ∞，则强制关系与经典结果关系一致。在 l(Σ)=∞ 的情况下，必须存在一个形如 A∧¬A 的句子，因此强制关系会爆炸。

一种分块策略也被应用于捕捉科学和数学中一些理论的推理机制。在数学中，关于无穷小的最佳可用理论是不一致的。在莱布尼兹的原始微积分中，在计算导数时，无穷小既必须是零又必须是非零的。（参见 Colyvan 2012 年第 7 章。牛顿使用了类似的'fluxions'。）为了捕捉这一推理机制（以及玻尔的原子理论），我们需要在分块中添加一种机制，允许有限的信息在这些不一致但非平凡的理论的一致片段之间流动。也就是说，一个分块的某些信息可能渗透到其他分块中。理论的推理过程必须是分块和渗透的。

设 C={Σi:i∈I}，ϱ 是 C 上的渗透关系，使得 ϱ 是从 I×I 到语言公式的子集的映射。如果 i0∈I，则任何结构 ⟨C,ϱ,i0⟩ 被称为 Σ 上的 C&P 结构。如果 B 是 Σ 上的 C&P 结构，我们定义 Σ 关于 B 的 C&P 推论，如下所示。对于每个 i∈I，通过对 n 进行递归定义一组句子 Σni：

Σ0i=Σ⊢iΣn+1i=(Σni∪⋃j∈I(Σnj∩ρ(j,i)))⊢

也就是说，Σn+1i 包括了从 Σni 推导出的结果，以及从级别 n 的其他块渗透到块 i 中的信息。然后我们收集所有有限阶段：

Σωi=⋃n<ωΣni

Σ 的 C&P 结果可以根据在指定的块 i0 中推导出的句子来定义，当所有适当的信息都被允许沿着渗透关系流动时（参见 Brown & Priest 2004, 2015）。

### 3.4 自适应逻辑学

人们可能认为不仅需要隔离不一致性，而且对不一致性的考虑是罕见的。这种想法可能是一致性是规范，除非有证据证明相反：我们应该尽可能地将一个句子或理论视为一致。这基本上是比利时的迪德里克·巴滕斯开创的自适应逻辑学的动机。

自适应逻辑学是一种根据推理规则应用时的情况而自适应的逻辑。它模拟了我们推理的动态过程。推理有两种动态的意义：外部动态和内部动态。如果有新的信息可用来扩展前提集合，之前推断出的结论可能需要撤回，那么推理就是外部动态的。外部动态因此是某些推论关系的非单调特性：对于某些 Γ、Δ 和 A，Γ⊢A 且 Γ∪Δ⊬A。然而，即使前提集合保持不变，一些先前推断出的结论在后期可能被认为是不可推导的。当我们的推理从前提集合进行时，我们可能会遇到这样一种情况：我们推断出一个结论，前提是在推理过程的某个阶段没有发生任何异常情况，特别是没有发生矛盾。如果我们被迫在后期推断出一个矛盾，我们的推理就必须自适应，以便撤回先前使用的推理规则。在这种情况下，推理是内部动态的。如果有效推理集合不是递归可枚举的（即，如果推理确实有效，则没有决策过程在有限步骤后会导致“是”），那么我们的推理可能是内部动态的。自适应逻辑学旨在捕捉内部动态。

为了阐明适应性逻辑背后的思想，考虑前提集合 Γ={p,¬p∨r,¬r∨s,¬s,s∨t}。可以从 ¬s 和 s∨t 开始推理，使用析取三段论（DS）推导出 t，前提是 s∧¬s 不成立。然后，我们可以用 p 和 ¬p∨r 进行推理，使用 DS 推导出 r，前提是 p∧¬p 不成立。现在，我们可以将 DS 应用于 ¬r∨s 和 r，推导出 s，前提是 r∧¬r 不成立。然而，通过连接 s 和 ¬s，我们可以得到 s∧¬s。因此，我们必须撤回第一次应用 DS 的推理，因此 t 的证明失效。这种推理的一个结果是在过程的任何阶段都无法被击败。

适应性逻辑系统通常可以被描述为由三个元素组成：

1. 一个下限逻辑（LLL）
2. 一组异常
3. 一种适应策略

LLL 是适应逻辑的一部分，不受适应性的影响。它主要由一些推理规则（和/或公理）组成，无论在推理过程中的情况如何，人们都愿意接受。一组异常是一组在推理开始时被假定为不成立（或荒谬）的公式，直到它们被证明为相反为止。对于许多适应逻辑来说，这个集合中的公式的形式是 A∧¬A。适应策略指定了基于异常集合处理推理规则应用的策略。如果 LLL 扩展为不可能存在异常性的要求，就得到了上限逻辑（ULL）。ULL 不仅包含 LLL 的推理规则（和/或公理），还包括在不存在异常性的情况下可以应用的补充规则（和/或公理），如 DS。通过指定这三个元素，可以得到一个适应逻辑系统。

### 3.5 形式不一致的逻辑学

迄今为止，我们所见到的激发次协调逻辑系统的方法将不一致性与给定理论的一致部分隔离开来。其目的是在开发一个次协调逻辑系统时尽可能保留尽可能多的经典机制，同时避免在面对矛盾时出现爆炸。一个明确这一目标的方法是通过在客体语言中编码一致性（和不一致性）的元理论概念来扩展我们语言的表达能力。形式不一致的逻辑学（LFIs）是一类次协调逻辑学，它们构成了经典逻辑的一致片段，但在存在矛盾时拒绝爆炸原理。对这类逻辑学的研究由巴西的牛顿·达·科斯塔发起。

在客体语言中编码一致性（和不一致性）的一个效果是我们可以明确地将不一致性与琐碎性分开。通过一个足够丰富的语言来表达不一致性（和一致性），我们可以研究不一致的理论，而不必假设它们必然是琐碎的。这明确了矛盾的存在是一个与次协调推理的非琐碎性质分开的问题。

LFIs 背后的思想是我们应尽可能尊重经典逻辑。只有在存在矛盾时，逻辑才应该偏离经典逻辑。这意味着在没有矛盾的情况下，我们可以承认 ECQ 的有效性。为了做到这一点，我们通过 ∘ 将“一致性”编码到我们的客体语言中。然后，⊢ 是 LFI 的一个结果关系，当且仅当

1. ∃Γ∃A∃B(Γ,A,¬A⊬B) 和
2. ∀Γ∀A∀B(Γ,∘A,A,¬A⊢B)。

让 ⊢C 成为经典的推理（或可导性）关系，∘（Γ）表示公式集合 Γ 的一致性，使得如果 ∘A 和 ∘B，则 ∘（A∗B），其中 ∗ 是任意的二元逻辑连接词。然后，我们可以通过等价关系来捕捉一致上下文中的可导性：∀Γ∀B∃Δ（Γ⊢CB 当且仅当 ∘（Δ），Γ⊢B）。

现在，以带有假言推理和双重否定消除（¬¬A→A）的经典逻辑的正片段作为公理，并加入一些控制 ∘ 的公理：

∘A→（A→（¬A→B））（∘A∧∘B）→∘（A∧B）（∘A→∘B）→∘（A→B）

然后 ⊢ 提供了 da Costa 的系统 C1。如果我们让 A1 缩写为 ¬(A∧¬A)，并且 An+1 缩写为(¬(An∧¬An))1，那么我们可以得到每个大于 1 的自然数 i 的 Ci。

要得到 da Costa 的系统 Cω，我们不使用经典逻辑的正片段，而是使用正直觉主义逻辑。有限 i 的 Ci 系统不排除理论中存在(An∧¬An∧An+1)。通过向上层次结构推进到 ω，Cω 排除了这种可能性。然而，请注意，Cω 不是一个包含经典正片段逻辑的 LFC。关于 da Costa 的 C 系统的语义，请参见 da Costa 和 Alves 1977 以及 Loparic 1977。

LFIs 是这些思想的一个强大扩展。关于这一传统的全面概述和进一步研究可参考 Carnielli 和 Coniglio 2016。关于寻找一致性或恢复运算符的进一步研究可参考 Barrio 和 Carnielli 2020。

### 3.6 次协调逻辑

或许生成次协调逻辑最简单的方法是使用次协调逻辑学，这是 Asenjo 在他的博士论文中首次提出的。经典逻辑中有两个真值。而次协调逻辑学则放弃了这个经典假设，允许存在超过两个真值。最简单的策略是使用三个真值：只有真、只有假和真假都有，用于公式的评估。逻辑连接词的真值表（条件连接词除外）可以如下给出：

| ¬ |   |
| ---- | --- |
| t  | f |
| b  | b |
| f  | t |

| ∧ | t | b | f |
| ---- | --- | --- | --- |
| t  | t | b | f |
| b  | b | b | f |
| f  | f | f | f |

| ∨ | t | b | f |
| ---- | --- | --- | --- |
| t  | t | t | t |
| b  | t | b | b |
| f  | t | b | f |

这些真值表本质上是 Kleene 和 Łukasiewicz 的三值逻辑的真值表，其中中间值被认为是不确定的或既非真也非假。

对于一个条件 ⊃，根据克里尼的强三值逻辑，我们可以指定一个真值表如下：

| ⊃ | t | b | f |
| ---- | --- | --- | --- |
| t  | t | b | f |
| b  | t | b | b |
| f  | t | t | t |

设 t 和 b 为指定值。这些值在有效推理中被保留。如果我们根据保留这些指定值来定义一个结果关系，那么我们就有了次协调逻辑 LP（Priest 1979）。在 LP 中，ECQ 是无效的。为了看清楚这一点，我们将 b 赋值给 p，将 f 赋值给 q。然后 ¬p 也被评估为 b，所以 p 和 ¬p 都是指定的。然而，q 的评估结果并没有指定值。因此，在 LP 中，ECQ 是无效的。

正如我们所看到的，LP 通过给矛盾赋予一个既真又假的指定值来使 ECQ 无效。因此，LP 比我们之前看到的系统更偏离经典逻辑，并且通常与二值矛盾论相一致。然而，我们可以将真值解释为认识论意义上的真值，而不是真理论意义上的真值：真值（或指定值）表达了认识论或信念论的承诺（例如 Belnap 1992）。或者我们可以认为既真又假的值在语义上是必要的：我们可能需要表达一些我们的信念、断言等的矛盾性质（见 Dunn 1976: 157）。如果这种解释策略成功，我们可以将 LP 与必然地归入二值矛盾论区分开来。

LP 的一个需要注意的特点是，在 LP 中，推理模态不成立。因为如果 p 既为真又为假，但 q 只为假，那么 p⊃q 既为真又为假，因此被指定。所以 p 和 p⊃q 都被指定，但结论 q 却没有被指定。因此，在 LP 中，⊃ 的推理模态是无效的。（解决这个问题的一种方法是在相关逻辑部分中添加适当的条件连接词，我们将在那里看到。）

发展一种多值次协调逻辑的另一种方法是将真值分配视为关系而不是函数。设 P 为命题参数的集合。那么一个评估 η 是 P×{0,1}的子集。一个命题只能与 1（真）相关，只能与 0（假）相关，可以与 1 和 0 都相关，或者可以与 1 和 0 都不相关。通过以下递归子句，将评估扩展为所有公式的关系：

¬Aη1 当且仅当 Aη0，¬Aη0 当且仅当 Aη1，A∧Bη1 当且仅当 Aη1 且 Bη1，A∧Bη0 当且仅当 Aη0 或 Bη0，A∨Bη1 当且仅当 Aη1 或 Bη1，A∨Bη0 当且仅当 Aη0 且 Bη0

如果我们将有效性定义为在所有关系评估下保持真实性，那么我们得到了第一阶段蕴涵（FDE），它是相关逻辑的一个片段。这些关系语义对于 FDE 来说是由 Dunn 1976 提出的；参见 Omori 和 Wansing 2017。通过非确定性矩阵的思想，探索了一种不同的方法，这种方法由 Avron 及其合作者研究（例如，Avron＆Lev 2005）。

### 3.7 相关逻辑学

我们上面所讨论的对次协调的方法都集中在某些矛盾的必然存在或真实性上。在这些方法中，对 ECQ 的拒绝取决于包含矛盾的前提的分析。有人可能认为 ECQ 的真正问题与矛盾的前提无关，而是与前提和结论之间的缺乏联系有关。思想是结论必须与前提在一个有效的推理中相关。

次协调逻辑学的先驱是安德森和贝尔纳普（1975 年）在匹兹堡进行的，目的是研究结论与前提的相关性。安德森和贝尔纳普通过自然演绎系统推动了次协调逻辑学的发展，但他们在公理系统中发展了一系列次协调逻辑学。随着发展的进行，澳大利亚也进行了相关研究，更加关注语义学方面的内容。

次协调逻辑学的语义学由 Fine（1974 年）、Routley 和 Routley（1972 年）、Routley 和 Meyer（1993 年）以及 Urquhart（1972 年）进行了研究。（还有代数语义学；例如 Dunn 和 Restall 2002: 48ff）。Routley-Meyer 语义学基于可能世界语义学，是次协调逻辑学中最常研究的语义学，尤其在澳大利亚地区。在这种语义学中，合取和析取的行为方式与通常相同。但是每个世界 w 都有一个关联世界 w∗，并且否定是根据 w∗ 来评估的：在 w 处，¬A 为真当且仅当 A 在 w 处为假，而不在 w∗ 处为假。因此，如果 A 在 w 处为真，但在 w∗ 处为假，则 A∧¬A 在 w 处为真。要获得标准的次协调逻辑学，需要添加约束条件 w∗∗=w。显然，这些语义学中的否定是一种内涵运算符。

次协调逻辑学的主要关注点不是否定，而是条件连接词→（满足演绎法则）。在次协调逻辑学中，如果 A→B 是一个逻辑真理，那么 A 与 B 相关，即 A 和 B 至少共享一个命题变量。

相关条件的语义是通过为每个 Routley-Meyer 模型提供一个三元关系来获得的。在 Priest 和 Sylvan（1992）以及 Restall（1993, 1995）的简化语义中，世界被分为正常和非正常。如果 w 是一个正常的世界，在 w 处 A→B 为真，当且仅当在所有 A 为真的世界中，B 也为真。如果 w 是非正常的，对于所有的 x,y，使得 Rwxy，如果 A 在 x 处为真，B 在 y 处为真，则在 w 处 A→B 为真。如果 B 在 x 处为真但在 y 处不为真，其中 Rwxy，则在 w 处 B→B 不为真。然后可以证明 A→（B→B）不是一个逻辑真理。（有效性被定义为在正常世界上保持真实性。）这给出了基本的相关逻辑 B。通过在三元关系上添加约束条件，可以得到更强的逻辑，如逻辑 R。

还有基于 Dunn 对 FDE 的关系语义的相关逻辑的世界语义版本。然后否定是外延的。现在，条件连接词需要同时给出真和假的条件。因此，我们有：在 w 处 A→B 为真，当且仅当对于所有的 x,y，使得 Rwxy，如果 A 在 x 处为真，B 在 y 处为真；在 w 处 A→B 为假，当且仅当存在一些 x,y，使得 Rwxy，如果 A 在 x 处为真，B 在 y 处为假。在三元关系上添加各种约束条件可以提供更强的逻辑。然而，这些逻辑不是由 Anderson 和 Belnap 开发的标准相关逻辑。要获得标准的相关逻辑系列，需要邻域框架（参见 Mares 2004）。有关详细信息，请参阅相关逻辑条目。

<!--md-padding-ignore-begin-->
## Bibliography

[Bibliography Sorted by Topic](https://plato.stanford.edu/entries/logic-paraconsistent/readings-by-topic.html)

### References

* Abe, Jair Minoro, Seiki Akama, and Kazumi Nakamatsu (eds.), 2015, *Introduction to Annotated Logics: Foundations for Paracomplete and Paraconsistent Reasoning* (Intelligent Systems Reference Library 88), Dordrecht: Springer. doi:10.1007/978-3-319-17912-4
* Akama, Seiki (ed.), 2016, *Towards Paraconsistent Engineering* (Intelligent Systems Reference Library 110), Dordrecht: Springer. doi:10.1007/978-3-319-40418-9
* Anderson, Alan Ross and Nuel D. Belnap, 1975, *Entailment: The Logic of Relevance and Necessity*, Volume 1, Princeton: Princeton University Press.
* Anderson, Alan Ross, Nuel D. Belnap, and J. Michael Dunn, 1992, *Entailment: The Logic of Relevance and Necessity*, Volume 2, Princeton: Princeton University Press.
* Andreas, Holger and Peter Verdée, 2016, *Logical Studies of Paraconsistent Reasoning in Science and Mathematics* (Trends in Logic 45), Dordrecht: Springer. doi:10.1007/978-3-319-40220-8
* Arieli, Ofer and Arnon Arnon and Anna Zamansky, 2011, “Ideal Paraconsistent Logics”, *Studia Logica*, 99(1–3): 31–60.
* Arruda, Ayda I., 1977, “On the Imaginary Logic of N.A. Vasil’év”, in Arruda et al. 1977: 3–24. doi:10.1016/S0049-237X(08)70642-6
* –––, 1989, “Aspects of the Historical Development of Paraconsistent Logic”, in Priest et al. 1989: 99–130.
* Arruda, Ayda I., Newton da Costa and R. Chuaqui (eds.), 1977, *Non-Classical Logic, Model Theory and Computability* (Studies in Logic and the Foundations of Mathematics 89), Amsterdam: North Holland.
* Asenjo, F.G., 1966, “A Calculus of Antinomies”, *Notre Dame Journal of Formal Logic*, 7(1): 103–105. doi:10.1305/ndjfl/1093958482
* Asmus, Conrad, 2012, “Paraconsistency on the Rocks of Dialetheism”, *Logique et Analyse*, 55(217): 3–21. [[Asmus 2012 available online](http://virthost.vub.ac.be/lnaweb/ojs/index.php/LogiqueEtAnalyse/article/view/1812)]
* Avron, Arnon and Iddo Lev, 2005, “Non-deterministic Multi-valued Structures”, *Journal of Logic and Computation*, 15(3): 241–261.
* Barrio, Eduardo and Bruno Da Ré, 2018, “Paraconsistency and its philosophical interpretations”, *Australasian Journal of Logic*, 15(2): 151–170.
* Barrio, Eduardo and Walter Carnielli (eds.), 2020, *Recovery Operators in Logics of formal inconsistency*, special issue of the *Logic Journal of the IGPL*, 28(5).
* Batens, Diderik, 2001, “A General Characterization of Adaptive Logics”, *Logique et Analyse*, 44(173–175): 45–68. [[Batens 2001 available online](http://virthost.vub.ac.be/lnaweb/ojs/index.php/LogiqueEtAnalyse/article/view/1521)]
* –––, 2007, “A Universal Logic Approach to Adaptive Logics”, *Logica Universalis*, 1(1): 221–242. doi:10.1007/s11787-006-0012-5
* –––, 2020, “Adaptive Fregean Set Theory”, *Studia Logica*, 108: 903–939.
* Batens, Diderik, Chris Mortensen, Graham Priest, and Jean-Paul van Bendegem (eds.), 2000, *Frontiers of Paraconsistent Logic* (Studies in Logic and Computation 8), Baldock, England: Research Studies Press. [First World Congress proceedings]; see also [*Logique & Analyse*, Volume 41, Numbers 161–163.](http://virthost.vub.ac.be/lnaweb/ojs/index.php/LogiqueEtAnalyse/issue/view/150)
* Beall, Jc, 2009, *Spandrels of Truth*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199268733.001.0001
* Beall, Jc, Michael Glanzberg and David Ripley, 2018, *Formal Theories of Truth*, Oxford: Oxford University Press.
* Belnap, Nuel D., Jr., 1992, “A Useful Four-valued Logic: How a computer should think”, *Entailment: The Logic of Relevance and Necessity*, Volume II, Alan Ross Anderson, Nuel D. Belnap, Jr, and J. Michael Dunn, Princeton: Princeton University Press; first appeared as “A Useful Four-valued Logic”, *Modern Use of Multiple-valued Logic*, J. Michael Dunn and George Epstein (eds.), Dordrecht: D. Reidel, 1977: 5–37, and “How a Computer Should Think”, *Contemporary Aspects of Philosophy*, Gilbert Ryle (ed.), Oriel Press, 1977: 30–. doi:10.1007/978-94-010-1161-7_2
* Besnard, Philippe and Anthony Hunter (eds.), 1998, *Reasoning with Actual and Potential Contradictions*, (Handbook of Defeasible Reasoning and Uncertainty Management Systems, volume 2), Dordrecht: Kluwer Academic Publishers. doi:10.1007/978-94-017-1739-7
* Beziau, Jean-Yves, Walter A. Carnielli, and Dov M. Gabbay (eds.), 2007, *Handbook of Paraconsistency* (Studies in Logic 9), London: College Publications. [Third World Congress proceedings]
* Beziau, Jean-Yves, Mihir Chakraborty, and Soma Dutta (eds.), 2015, *New Directions in Paraconsistent Logic*, Dordrecht: Springer. doi:10.1007/978-81-322-2719-9 [Fifth World Congress proceedings]
* Brady, Ross T., 1989, “The Non-Triviality of Dialectical Set Theory”, in Priest et al. 1989: 437–471.
* ––– (ed.), 2003, *Relevant Logics and Their Rivals*, Volume 2, Aldershot: Ashgate.
* –––, 2006, *Universal Logic*, Stanford, CA: CSLI Publications.
* Brown, Bryson, 2002, “On Paraconsistency”, in *A Companion to Philosophical Logic*, Dale Jacquette (ed.), Oxford: Blackwell, pp. 628–650. doI:10.1002/9780470996751.
* Brown, Bryson and Graham Priest, 2004, “Chunk and Permeate: A Paraconsistent Inference Strategy. Part 1: The Infinitesimal Calculus”, *Journal of Philosophical Logic*, 33(4): 379–388. doi:10.1023/B:LOGI.0000036831.48866.12
* –––, 2015, “Chunk and Permeate II: Bohr’s Hydrogen Atom”, *European Journal for Philosophy of Science*, 5(3): 297–314.
* Carnielli, Walter A. and Marcelo Esteban Coniglio, 2016, *Paraconsistent Logic: Consistency, Contradiction and Negation*, Dordrecht: Springer. doi:10.1007/978-3-319-33205-5
* Carnielli, Walter A., Marcelo E. Coniglio, and João Marcos, 2007, “Logics of Formal Inconsistency”, in *Handbook of Philosophical Logic*, Volume 14 (Second Edition), Dov M. Gabbay and Franz Guenthner (eds.), Berlin: Springer, pp. 15–107. doi:10.1007/978-1-4020-6324-4_1
* Carnielli, Walter A., M. Coniglio, and Itala Maria Lof D’ottaviano (eds.), 2002, *Paraconsistency: the Logical Way to the Inconsistent* (Lecture Notes in Pure and Applied Mathematics: Volume 228), Boca Raton: CRC Press. [Second World Congress proceedings]
* Carnielli, Walter and Abilio Rodrigues, 2021, “On Epistemic and Ontological Interpretations of Intuitionistic and Paraconsistent Paradigms”, *Logic Journal of the IGPL*, 29(4): 569–584.
* Chomsky, Noam, 1995, *The Minimalist Program*, Cambridge, MA: MIT Press.
* Colyvan, Mark, 2012, *An Introduction to the Philosophy of Mathematics*, Cambridge: Cambridge University Press.
* da Costa, Newton C.A., 1974, “On the Theory of Inconsistent Formal Systems”, *Notre Dame Journal of Formal Logic*, 15(4): 497–510. doi:10.1305/ndjfl/1093891487
* da Costa, Newton C.A. and E.H. Alves, 1977, “Semantical Analysis of the Calculi Cn”, *Notre Dame Journal of Formal Logic*, 18(4): 621–630. doi:10.1305/ndjfl/1093888132
* da Costa, Newton C.A. and L. Dubikajtis, 1977, “On Jaśkowski’s Discussive Logic”, in Arruda et al. 1977: 37–56. doi:10.1016/S0049-237X(08)70644-X
* da Costa, Newton C.A., V.S. Subrahmanian, and Carlo Vago, 1991, “The Paraconsistent Logics PT”, *Zeitschrift für Mathematische Logic und Grundlangen der Mathematik*, 37(9–12): 139–148. doi:10.1002/malq.19910370903
* Dunn, J. Michael, 1976, “Intuitive Semantics for First Degree Entailment and ‘Coupled Trees’”, *Philosophical Studies*, 29(3): 149–68. doi:10.1007/BF00373152
* Dunn, J. Michael and Greg Restall, 2002, “Relevance Logic”, *Handbook of Philosophical Logic*, Volume 6, second edition, Dov M. Gabbay and Franz Guenthner (eds.), Dordrecht: Kluwer Academic Publishers, pp. 1–136.
* Dunne, John D., 2004, *Foundations of Dharmakīrti’s Philosophy*, Boston: Wisdom Publications.
* Ferguson, Thomas Macaulay and Graham Priest (eds.), 2021, *Robert Meyer and Relevant Arithmetic*, special issue of the *Australasian Journal of Logic*, 18(5).
* Fine, Kit, 1974, “Models for Entailment”, *Journal of Philosophical Logic*, 3(4): 347–372. doi:10.1007/BF00257480
* Girard, Patrick and Koji Tanaka, 2016, “Paraconsistent Dynamics”, *Synthese*, 193(1): 1–14. doi:10.1007/s11229-015-0740-2
* Halldén, Sören, 1949, *The Logic of Nonsense*, Uppsala: A.-B. Lundequistska Bokhandeln.
* Hyde, Dominic, 1997, “From Heaps and Gaps to Heaps of Gluts”, *Mind*, 106(424): 641–660. doi:10.1093/mind/106.424.641
* Incurvati, Luca, 2020, *Conceptions of Set and the Foundations of Mathematics*, Cambridge: Cambridge University Press.
* Jaśkowski, Stanisław, 1948 [1969], “Rachunek zdań dla systemów dedukcyjnych sprzecznych”, *Studia Societatis Scientiarum Torunensi* (Sectio A), 1(5): 55–77; an English translation appeared as “Propositional Calculus for Contradictory Deductive Systems”, *Studia Logica*, 24(1969): 143–157. (An updated translation by J. Perzanowski appeared in 1999 as “A Propositional Calculus for Inconsistent Deductive Systems”, *Logic and Logical Philosophy*, 7: 35–56.
* –––, 1949 [1999], “O koniunkcji dyskusyjnej w rachunku zdań dla systemów dedukcyjnych sprzecznych”, *Studia Societatis Scientiarum Torunensis* (Sectio A), 1(8): 171–172; an English translation appeared as “On the Discussive Conjunction in the Propositional Calculus for Inconsistent Deductive Systems”, *Logic and Logical Philosophy*, 7(1999): 57–59.
* Jockwich, Santiago and Giorgio Venturi, 2021, “Non-classical models of ZF”, *Studia Logica*, 109: 509–537.
* Kamide, Norihiro and Heinrich Wansing, 2012, “Proof Theory of Nelson’s Paraconsistent Logic: A Uniform Perspective”, *Theoretical Computer Science*, 415: 1–38. doi:10.1016/j.tcs.2011.11.001
* Libert, Thiery, 2005, “Models for a Paraconsistent Set Theory”, *Journal of Applied Logic*, 3(1): 15–41. doi:10.1016/j.jal.2004.07.010
* Loparic, A., 1977, “Une étude semantique de quelques calculs propositionnels”, *Comptes Rendus Hebdomadaires des Séances de l’Academie des Sciences*, 284: 835–838.
* Löwe, Benedikt and Sourav Tarafder, 2015, “Generalized Algebra-Valued Models of Set Theory”, *Review of Symbolic Logic*, 8(1): 209–225.
* Łukasiewicz, Jan, 1951, *Aristotle’s Syllogistic: From the Standpoint of Modern Formal Logic*, Oxford: Oxford University Press.
* Mares, Edwin D., 2004, “‘Four-Valued’ Semantics for the Relevant Logic R”, *Journal of Philosophical Logic*, 33(3): 327–341. doi:10.1023/B:LOGI.0000031375.18295.30
* Martin, Christopher J., 1986, “William’s Machine”, *Journal of Philosophy*, 83(10): 564–572. doi:10.2307/2026432
* –––, 1987, “Embarrassing Arguments and Surprising Conclusions in the Development Theories of the Conditional in the Twelfth Century”, *Gilbert De Poitiers Et Ses Contemporains*, J. Jolivet, A. De Libera (eds.), Naples: Bibliopolis, pp. 377–401.
* –––, 1996, “Impossible Positio as the Foundation of Metaphysics or, Logic on the Scotist Plan?”, *Vestigia, Imagines, Verba: Semiotics and Logic in Medieval Theological Texts*, C. Marmo (ed.), Turnhout: Brepols, pp. 255–276.
* McGinnis, Nicholas D., 2013, “The Unexpected Applicability of Paraconsistent Logic: A Chomskyan Route to Dialetheism”, *Foundations of Science*, 18(4): 625–640. doi:10.1007/s10699-012-9294-7
* Michael, Michaelis, 2016, “On a ‘most telling’ Argument for Paraconsistent Logic”, *Synthese*, 193(10): 3347–3362. doi:10.1007/s11229-015-0935-6
* Mortensen, Chris, 1995, *Inconsistent Mathematics*, Dordrecht: Kluwer Academic Publishers.
* Omori, Hitoshi, 2015, “Remarks on Naive Set Theory Based on LP”, *Review of Symbolic Logic*, 8(2): 279–295. doi:10.1017/S1755020314000525
* Omori, Hitoshi, and Jesse Alama, 2018, “Axiomatizing Jaśkowski’s Discussive Logic D2”, *Studia Logica*, 106(6):1163–1180. doi: 10.1007/s1122.
* Omori, Hitoshi, and Heinrich Wansing (eds.), 2017, *40 Years of FDE*, special issue of *Studia Logica*, 105(6).
* ––– (eds.), 2019, *Advances in Connexive Logic*, special issue of *Logic and Logical Philosophy*, 28(3).
* Priest, Graham, 1979, “The Logic of Paradox”, *Journal of Philosophical Logic*, 8(1): 219–241. doi:10.1007/BF00258428
* –––, 1987, *In Contradiction: A Study of the Transconsistent*, Dordrecht: Martinus Nijhoff; second edition, Oxford: Oxford University Press, 2006.
* –––, 2001, “Paraconsistent Belief Revision”, *Theoria*, 67(3): 214–228. doi:10.1111/j.1755-2567.2001.tb00204.x
* –––, 2002, “Paraconsistent Logic”, in *Handbook of Philosophical Logic*, second edition, volume 6, Dov M. Gabbay and Franz Guenthner (eds.), Dordrecht: Kluwer Academic Publishers, pp. 287–393.
* –––, 2003, “Inconsistent Arithmetic: Issues Technical and Philosophical”, in *Trends in Logic: 50 Years of Studia Logica* (Studia Logica Library, volume 21), V.F. Hendricks and J. Malinowski (eds.), Dordrecht: Kluwer Academic Publishers, pp. 273–99.
* –––, 2007, “Paraconsistency and Dialetheism”, in *Handbook of the History of Logic*, Volume 8, D. Gabbay and J. Woods (eds.), Amsterdam: North Holland, pp. 129–204.
* Priest, Graham, J.C. Beall and Bradley Armour-Garb (eds.), 2004, *The Law of Non-Contradiction*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199265176.001.0001
* Priest, Graham, Richard Routley, and Jean Norman (eds.), 1989, *Paraconsistent Logic: Essays on the Inconsistent*, München: Philosophia Verlag.
* Priest, Graham and Richard Sylvan, 1992, “Simplified Semantics for Basic Relevant Logics”, *Journal of Philosophical Logic*, 21(2): 217–232. doi:10.1007/BF00248640
* Rescher, Nicholas and Ruth Manor, 1970, “On Inference from Inconsistent Premises”, *Theory and Decision*, 1(2): 179–217. doi:10.1007/BF00154005
* Restall, Greg, 1993, “Simplified Semantics for Relevant Logics (and some of their rivals)”, *Journal of Philosophical Logic*, 22(5): 481–511. doi:10.1007/BF01349561
* –––, 1995, “Four-Valued Semantics for Relevant Logics (and some of their rivals)”, *Journal of Philosophical Logic*, 24(2): 139–160. doi:10.1007/BF01048529
* Restall, Greg and John Slaney, 1995, “Realistic Belief Revision”, *Proceedings of the Second World Conference in the Fundamentals of Artificial Intelligence*, M. De Glas and Z. Pawlak (eds.), Paris: Angkor, pp. 367–378.
* Ripley, David, 2011, “Contradictions at the Borders”, in R. Nouwen, R. van Rooij, U. Sauerland & H.-C. Schmitz (eds.), *Vagueness in Communication*, Dordrecht: Springer, pp. 169–188. doi:10.1007/978-3-642-18446-8_10
* –––, 2012, “Conservatively extending classical logic with transparent truth”, *Review of Symbolic Logic*, 5(2): 354–378.
* Routley, Richard and Robert K. Meyer, 1993, “Semantics of Entailment”, *Truth, Syntax and Modality*, H. Leblanc (ed.), Amsterdam: North Holland, pp. 194–243.
* Routley, Richard, Val Plumwood, Robert K. Meyer, and Ross T. Brady, 1982, *Relevant Logics and Their Rivals*, Volume 1, Ridgeview: Atascadero.
* Routley, Richard and Val Routley, 1972, “Semantics of First Degree Entailment”, *Noûs*, 6(4): 335–359. doi:10.2307/2214309
* Schotch, P.K. and R.E. Jennings, 1980, “Inference and Necessity”, *Journal of Philosophical Logic*, 9(3): 327–340. doi:10.1007/BF00248398
* Schotch, Peter, Bryson Brown, and Raymond Jennings (eds.), 2009, *On Preserving: Essays on Preservationism and Paraconsistent Logic*, Toronto: University of Toronto Press.
* Smiley T.J., 1959, “Entailment and Deducibility”, *Proceedings of the Aristotelian Society*, 59: 233–254.
* Subrahmanian, V.S., 1987, “On the Semantics of Qualitative Logic Programs”, *Proc. 4th IEEE Symp. Logic Programming*, San Francisco, CA: IEEE Computer Society Press, 178–182.
* Sylvan, Richard, 2000, “A Preliminary Western History of Sociative Logics”, in *Sociative Logics and Their Applications: Essays by the late Richard Sylvan*, Dominic Hyde and Graham Priest (eds.), Aldershot: Ashgate Publishers, pp. 53–138.
* Tanaka, Koji, 2003, “Three Schools of Paraconsistency”, *The Australasian Journal of Logic*, 1: 28–42.
* –––, 2005, “The AGM Theory and Inconsistent Belief Change”, *Logique et Analyse*, 48(189–192): 113–150. [[Tanaka 2005 available online](http://virthost.vub.ac.be/lnaweb/ojs/index.php/LogiqueEtAnalyse/article/view/1614)]
* Tanaka, Koji, Francesco Berto, Edwin Mares, and Francesco Paoli (eds.), 2013, *Paraconsistency: Logic and Applications* (Logic, Epistemology, and the Unity of Science 26), Dordrecht: Springer. doi:10.1007/978-94-007-4438-7 [Fourth World Congress proceedings]
* Tillemans, Tom J.F., 1999, *Scripture, Logic, Language: Essays on Dharmakīrti and His Tibetan Successors*, Boston: Wisdom Publications.
* –––, 2016, *How Do Mādhyamikas Think?*, Somerville MA: Wisdom Publications.
* Urquhart, Alasdair, 1972, “Semantics for Relevant Logics”, *Journal of Symbolic Logic*, 37(1): 159–169. doi:10.2307/2272559
* Verdée, Peter, 2013, “Strong, Universal and Provably Non-trivial Set Theory by Means of Adaptive Logic”, *Logic Journal of the IGPL*, 21(1): 108–125. doi:10.1093/jigpal/jzs025
* Wansing, Heinrich and Sergei Odinstov, 2016, “On the Methodology of Paraconsistent Logic”, in Andreas and Verdée 2016: 175–204.
* Weber, Zach, 2010a, “A Paraconsistent Model of Vagueness”, *Mind*, 119(476): 1025–1045. doi:10.1093/mind/fzq071
* –––, 2010b, “Transfinite Numbers in Paraconsistent Set Theory”, *Review of Symbolic Logic*, 3(1): 71–92. doi:10.1017/S1755020309990281
* –––, 2012, “Transfinite Cardinals in Paraconsistent Set Theory”, *Review of Symbolic Logic*, 5(2): 269–293. doi:10.1017/S1755020312000019
* –––, 2021, *Paradoxes and Inconsistent Mathematics*, Cambridge: Cambridge University Press.

### World Congress of Paraconsistency Volumes

* [First Congress] Batens, Diderik, Chris Mortensen, Graham Priest, and Jean-Paul van Bendegem (eds.), 2000, *Frontiers of Paraconsistent Logic* (Studies in Logic and Computation 8), Baldock, England: Research Studies Press.
* [Second Congress] Carnielli, Walter A., M. Coniglio, and Itala Maria Lof D’ottaviano (eds.), 2002, *Paraconsistency: the Logical Way to the Inconsistent* (Lecture Notes in Pure and Applied Mathematics: Volume 228), Boca Raton: CRC Press.
* [Third Congress] Beziau, Jean-Yves, Walter A. Carnielli, and Dov M. Gabbay (eds.), 2007, *Handbook of Paraconsistency* (Studies in Logic 9), London: College Publications.
* [Fourth Congress] Tanaka, Koji, Francesco Berto, Edwin Mares, and Francesco Paoli (eds.), 2013, *Paraconsistency: Logic and Applications* (Logic, Epistemology, and the Unity of Science 26), Dordrecht: Springer. doi:10.1007/978-94-007-4438-7
* [Fifth Congress] Beziau, Jean-Yves, Mihir Chakraborty, and Soma Dutta (eds.), 2015, *New Directions in Paraconsistent Logic*, Dordrecht: Springer. doi:10.1007/978-81-322-2719-9

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-paraconsistent). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-paraconsistent/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-paraconsistent&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](http://philpapers.org/sep/logic-paraconsistent/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

* [First World Congress on Paraconsistency](http://logica.ugent.be/centrum/events/WCP97/)
* [Second World Congress on Paraconsistency](http://www.cle.unicamp.br/index.php/?q=node/335)
* [Third World Congress on Paraconsistency](http://www.cle.unicamp.br/wcp3/index.htm)
* [Fourth World Congress on Paraconsistency](http://citeseerx.ist.psu.edu/viewdoc/download?rep=rep1&type=pdf&doi=10.1.1.183.3575)
* [Fifth World Congress on Paraconsistency](http://www.paraconsistency.org/wcp5.html)

## Related Entries

[Abelard [Abailard], Peter](https://plato.stanford.edu/entries/abelard/) | [Boethius, Anicius Manlius Severinus](https://plato.stanford.edu/entries/boethius/) | [dialetheism](https://plato.stanford.edu/entries/dialetheism/) | [Duns Scotus, John](https://plato.stanford.edu/entries/duns-scotus/) | [liar paradox](https://plato.stanford.edu/entries/liar-paradox/) | [logic: connexive](https://plato.stanford.edu/entries/logic-connexive/) | [logic: many-valued](https://plato.stanford.edu/entries/logic-manyvalued/) | [logic: of belief revision](https://plato.stanford.edu/entries/logic-belief-revision/) | [logic: relevance](https://plato.stanford.edu/entries/logic-relevance/) | [logic: substructural](https://plato.stanford.edu/entries/logic-substructural/) | [mathematics: inconsistent](https://plato.stanford.edu/entries/mathematics-inconsistent/) | [paradoxes: and contemporary logic](https://plato.stanford.edu/entries/paradoxes-contemporary-logic/) | [self-reference](https://plato.stanford.edu/entries/self-reference/) | [Sorites paradox](https://plato.stanford.edu/entries/sorites-paradox/)

### Acknowledgments

The editors and authors would like to thank Joy Britten for noticing an error in the example of adaptive logic reasoning in [Section 3.4](https://plato.stanford.edu/entries/logic-paraconsistent/#AdapLogi), and to Hitoshi Omori for identification and discussion of an error in the section on discussive logic [Section 3.1](https://plato.stanford.edu/entries/logic-paraconsistent/#DiscLogi).

[Copyright © 2022](https://plato.stanford.edu/info.html#c) by  
Graham Priest <[*g.priest@unimelb.edu.au*](mailto:g%2epriest%40unimelb%2eedu%2eau)>  
Koji Tanaka <[*Koji.Tanaka@anu.edu.au*](mailto:Koji%2eTanaka%40anu%2eedu%2eau)>  
[Zach Weber](https://sites.google.com/site/doctorzachweber/home) <[*zach.weber@otago.ac.nz*](mailto:zach%2eweber%40otago%2eac%2enz)>
<!--md-padding-ignore-end-->
