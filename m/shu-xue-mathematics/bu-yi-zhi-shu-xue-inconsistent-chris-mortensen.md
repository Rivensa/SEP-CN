# 不一致数学 inconsistent (Chris Mortensen)

*首次发表于1996年7月2日；实质性修订于2022年11月30日。*

不一致数学是研究当经典数学公理在一个（非经典的）逻辑框架内被断言时所产生的数学理论。这个逻辑可以容忍矛盾的存在，而不会将每个句子都转化为定理。

***

## 1. 数学基础

不一致的数学始于历史上的基础考虑。弗雷格和罗素提出以集合论的天真原则为基础建立数学：对于每个谓词都有一个集合。但是，这个天真原则很快导致了罗素集合的存在证明，即所有不是自身成员的集合的集合，既是自身的成员又不是自身的成员。罗素和其他人注意到的这个以及其他集合论悖论导致了试图产生一致的集合论作为数学基础的尝试。其中最著名的是策梅洛-弗兰克尔集合论 ZF。但是，ZF 和其他一些理论（如 NBG 等）在各种方式上都是特殊情况，不得不包含多个独立原则，而不是一个简单的包容公理。因此，包括达科斯塔（1974 年）、布雷迪（1971 年，1989 年）、普里斯特、劳特利和诺曼（1989 年，第 152 页，第 498 页）在内的一些人认为，在集合论中保留自然包容原则的全部力量，并容忍一定程度的不一致性是可取的。特别是布雷迪在他的书（2006 年）中对天真集合论的这些结果进行了扩展、简化和简化。有关清晰的解释，请参阅 Restall 的评论（2007 年）。

这些构造当然要求至少放弃布尔逻辑的矛盾推理原则（ECQ）（从矛盾中可以推导出任何命题，也称为爆炸原理）。顺便提一下，C.I.Lewis证明了ECQ可以通过简单的论证从析取三段论原则（DS）（从A或B和非A推导出B）得出。所以DS也必须被放弃。显然，ECQ使任何不一致的理论变得平凡（平凡性=每个句子都是可证明的）。非平凡性应该被视为对有趣理论的限制：平凡的理论对数学计算是无用的，因为平凡的理论不能区分理论中的原则和它们的否定。同样，大量的辩论（Burgess 1981，Mortensen 1983）表明，放弃DS并不那么违反直觉，特别是当关于DS继续成立的特殊条件的合理解释出现时。

还应该注意的是，布雷迪对不一致的天真集合论的构建为弗雷格-罗素的逻辑主义复兴打开了大门（简而言之，数学归结为逻辑）。逻辑主义被广泛认为，即使是弗雷格本人也认为，罗素悖论严重损害了它。如果罗素的矛盾不扩散，那么没有明显的理由可以认为天真集合论为数学提供了足够的基础，并且可以通过天真包容模式从逻辑中推导出天真集合论。唯一需要的变化是转向一种容忍不一致的逻辑。更激进的是，韦伯在相关论文（2010年），（2012年），（2013年）中认为不一致是一种积极的优点，因为它使我们能够解决几个康托尔留下的问题，即良序定理和选择公理是可证明的，以及连续统假设是错误的（2012年，284页）。其中一些既被证明为真又被证明为假；韦伯关心的是推进经典重现的证明，即展示传统结果仍然可证明的项目（2010年，72页）。这是令人振奋的新领域。韦伯还展示了这个项目的一个重要内容，即康托尔定理仍然成立；也就是说，它不依赖于被不一致论者争议的过于强大的逻辑原则。在韦伯看来，保留康托尔定理很重要，因为在不一致集合论中仍然存在不同的无穷序数。

此外，数学包含了一种用于元语言的机制，即用于讨论数学本身的机制。这包括以下概念：（i）数学陈述和语法的其他部分的名称，（ii）自指，（iii）证明和（iv）真理。哥德尔对数学哲学的贡献在于他表明这三个概念可以在算术理论中得到严格表达，尽管这些理论要么是不一致的，要么是不完备的。对于这两种选择中前者，即不一致性的良好结构化示例的可能性并未受到重视，这同样是因为对于排中律的信仰。然而，此外，自然语言似乎也有自己的真理谓词。结合自指，这产生了“这个句子是假的”这个悖论，即一个不一致性。普里斯特（1987年）和普里斯特、劳特利和诺曼（1989年，第154页）认为，必须将悖论视为既真又假的陈述，即真正的矛盾。这代表了研究不一致性理论的另一个论据，即某些矛盾是真实的，也被称为二值矛盾论。克里普基（1975年）提出了以一种一致不完备的理论中不同的方式建模真理谓词的方法。我们将在下文中看到，不完备性和不一致性密切相关。

为了简化动机，数学，像许多其他科学一样，遇到了异常，谜题和悖论。悖论通常以矛盾的形式出现，在这种矛盾中有理由接受不相容的两个方面。数学至少在某种程度上通过消除异常来推进一致性重建。这通常是解决异常的方法，并且通过注意到矛盾出现在数学基础中来加以促进。但是在 20 世纪后期注意到还有另一种方式，即接受矛盾并发展包含矛盾两个方面的数学理论。如果矛盾的理论建立在包含布尔原理 Ex Contradictione Quodlibet ECQ 的逻辑基础上，那将是不可能的，因为从矛盾中可以推出任何东西。因此，ECQ 必须被放弃，但幸运的是，这是可能的，事实上在数学上是直接的。剩下的是一个丰富的领域，具有独特的数学应用，这些应用本身就很有趣，它们通过在远离基础的数学领域（如数论或分析）中发展矛盾来回避令人困扰的问题。这就是不一致的数学。

## 2. 算术

但是这些言论是关于基础的，数学并不是它的基础。因此，还有一个进一步的独立动机，即在放松一致性约束的情况下，看看数学结构的剩余部分是什么。但是将这视为对古典数学研究的任何方式的否定是错误的：不一致的结构代表了已知结构的补充。

罗伯特·K·迈耶（1976年）似乎是第一个考虑到不一致算术理论的人。在这一点上，他对一致理论的命运更感兴趣，即他的相关算术R＃。这相当于带有量化的相关逻辑RQ的Peano算术公理，并且迈耶希望相关逻辑的较弱基础能够允许更多的模型。他是正确的。事实证明存在一整类不一致的算术理论；例如，参见迈耶和莫滕森（1984年）。与上述关于复兴逻辑主义的评论类似，迈耶认为这些算术理论为复兴希尔伯特计划提供了基础。希尔伯特的计划是严格形式化数学并通过简单的有限/归纳程序证明其一致性的项目。普遍认为，哥德尔的第二不完全性定理严重损害了这个计划，根据该定理，算术的一致性在算术本身内是无法证明的。但迈耶构建的一个结果是，在他的算术R＃中，可以通过有限手段证明无论可能存在什么矛盾，它们都不会对任何数值计算产生不利影响。因此，只要使用容忍不一致的逻辑，希尔伯特证明数学是无问题的目标在很大程度上是可以实现的。

Meyer 和 Mortensen 后来使用的算术模型被证明允许不一致地表示真理谓词。它们还允许表示超出自然数算术范围的结构，例如环和域，包括它们的序性质。也提供了公理化。最近，Graham Priest 完全刻画了有限的不一致算术崩溃模型，这是 Meyer 和 Mortensen 研究的类的严格更大的类。崩溃模型是通过将域折叠到由各种同余关系生成的同余类上获得的。当同余类的成员被识别时，产生的理论是不一致的。例如，Meyer 的初始构造将整数折叠到模 2 同余。这将 0 和 2 放在同一个同余类中，以便在适当的三值逻辑中，0=2 和 not-(0=2)都成立。Priest 表明这些模型采取一定的一般形式，参见 Priest（1997）和（2000）。严格来说，Priest 在包括“团体模型”时走得有点太远。这由 Paris 和 Pathmanathan（2006）进行了修正，并由 Paris 和 Sirokfskich（2008）扩展到无限。更近期，Tedder（2015）获得了具有不同背景逻辑（Avron 的 A3）的有限崩溃模型的公理化。

## 3. 分析

人们很难忽视分析及其特殊情况，即微积分的例子。有关这些的模型论方法，请参见 Mortensen（1990，1995）。

现在，梅耶对自然数的原始方法，即 R#，是公理化而不是模型论的。麦克鲁布-约登斯和韦伯（2012）在分析中也采用了公理化方法。在以矛盾逻辑为基础的公理化分析中，他们的论文进一步推动了梅耶通过 R#对算术的方法。这些同样的作者（2017）重塑了阿基米德手中的积分理论，采用了排除法，使用了矛盾推理。这给出了一个“不一致的”结果，这意味着人们能够证明“经典结果或矛盾”。经典结果可以通过经典的析取三段论应用于经典假（不一致）的第二个析取式来重新捕捉到。

当然，追求这个方向是重要且值得的，但是这里需要提出一点小小的警告：公理化项目与不一致数学有些不同。正如前面所提到的，梅耶在这个阶段是一致主义者-他寻求一个具有容忍矛盾逻辑的一致理论。出于类似的动机，他还关心尝试解决他所称之为“伽玛问题”的问题，这本质上是关于公理化理论 R#是否能够被证明包含经典的 Peano 算术作为一个子理论的问题。如果是这样的话，那么他对 R#的非平凡性证明将立即得到一个新的证明，证明了经典的 Peano 算术的非矛盾性！请注意，这不会违反哥德尔的第二定理，因为假设伽玛结果的证明不会局限于有限技术。（在梅耶的理论中，事实证明并非如此。）

在分析学中已经证明了许多地方存在着独特的不一致的见解。本节剩余部分的例子取自Mortensen（1995）的著作。例如：（1）罗宾逊（1974）的非标准分析是基于无穷小量，即小于任何实数的数量，以及它们的倒数，即无穷大数。这有一个不一致的版本，在计算中有一些优势，可以丢弃高阶无穷小量。有趣的是，微分理论事实上具有这些优势，而积分理论则没有。使用不同的背景逻辑，达科斯塔（2000）也得到了类似的结果。（2）在拓扑学中，还可以找到不一致性在分析中的应用，其中人们常常观察到将空间的切割和粘贴描述为将一个边界与另一个边界“识别”起来。可以证明，这可以在一个不一致的理论中描述，其中这两个边界既相同又不相同，并且可以进一步论证这是对这种实践最自然的描述。（3）另一个应用是不一致连续函数类。并非所有经典上不连续的函数都适用于不一致处理；但有些函数适用，例如对于所有x<0，f(x)=0，对于所有x≥0，f(x)=1。不一致扩展将第一个<替换为≤，并具有独特的结构特性。这些不一致函数在存在不连续跳跃的动态系统中可能有一些应用，例如量子测量系统。对这样的函数进行微分会得到δ函数，Dirac将其应用于量子测量的研究。（4）接下来，有一个众所周知的不一致线性方程组的案例，例如系统（i）x+y=1，加上（ii）x+y=2。这样的系统有可能在自动控制的背景下出现。 在经典领域中，很少有人对这样的系统进行解决，但可以证明在不一致的向量空间中存在良好的解。最后，还可以注意到拓扑学和动力学中的进一步应用。假设似乎是可以想象的，即无论发生什么或是真实的，都发生在一个（时空）点的开集上，那么动态可能路径的逻辑就是开集逻辑，也就是直觉主义逻辑，它支持不完全的理论。这是因为在这样的空间中，命题的否定的自然解释是它在包含原始命题成立的点集的布尔补集中成立，而这个布尔补集通常比布尔补集要小。然而，通过闭集来指定拓扑空间与通过开集来指定它一样合理。然而，闭集的逻辑被认为是不一致的，即支持不一致的非平凡理论；例如，参见Goodman（1981）。因此，根据另一种（替代性的）假设，即无论真实的是什么，都是在一组点的闭集上成立，就可以得出不一致的理论可能成立。这是因为命题的否定的自然解释是它在包含布尔否定的最小闭集上成立，这意味着在重叠的边界上，命题和它的否定都成立。因此，动力学理论确定了它们自己的可能命题的逻辑，并且相应的理论可能是不一致的，并且肯定与它们的不完全对应物一样自然。

关于封闭集合逻辑和边界作为矛盾理论的自然背景的问题，请参阅Mortensen（2003年，2010年）。Weber和Cotnoir（2015年）也探讨了边界的不一致性，这是由于三个原则的不兼容性引起的：（i）存在边界，（ii）空间在拓扑上是连通的，以及（iii）离散实体可以接触（即它们之间没有空间）。这是一个非常有趣的问题，因为这三个原则都是合理的；特别是在我们的世界中似乎确实存在边界。这个解释的一个最初令人惊讶的特点是边界被视为空的；毕竟，空实体与整体论的精神相悖。但事实证明，这并不令人震惊，因为它们只是在成员上不一致地为空。

范畴论揭示了许多数学结构。它确实被提出作为数学的另一种基础。这种广泛性不可避免地遇到了与集合论中理解问题类似的问题；参见，例如，Hatcher 1982（第255-260页）。因此，存在着相同的不一致解的可能应用。还有一个重要的范畴结构集合，即topos，它以与集合支持布尔逻辑相同的方式支持开放集合逻辑。这被许多人视为数学直觉主义基础观点的证明。然而，可以证明，topos与闭集合逻辑同样容易地支持开放集合逻辑，迄今为止是唯一的范畴论语义学对于一个旁证逻辑。然而，这不应被视为对直觉主义的反对，而更多地是一个论证，即不一致理论与数学研究项目同样合理。参见Mortensen（1995年第11章，合著者Lavers）。这个立场现在已经被Estrada-González（2010年，2015a，2015b）接受、扩展和有力地捍卫。同一作者（2016年）试图提供一个范畴论描述的平凡理论，旨在表明平凡性对于数学理论来说并不是一个无趣的特征。然而，本文作者仍然不信服，因为一个平凡的理论对于数学计算肯定是无用的；但是，这些论证的巧妙性必须被承认。

不完备性/直觉主义与不一致性/超一致性之间存在至少两个方面的二元性。首先是上述的拓扑（开放/闭合）二元性。其次是 Routley_二元性。对于一个句子集合 S，Routley Star_被定义为 S\* =df {A: \~A 不在 S 中}。Routleys（1972）发现了这个作为相关逻辑的语义工具的_操作，在德摩根逻辑的大自然类中，它在不一致和不完备的理论之间进行二元对偶。例如，对 Peano 算术进行星化操作会得到一个推理封闭的不一致完备的非平凡的经典算术理论，其中包含了所有的 PA，这对于哥德尔的不完备性结果提出了一个有趣的挑战，详见 Mortensen（2013）。这两种二元性也相互作用，_ 操作为开放集和闭合集算术理论提供了独特的二元性和不变性定理。基于这些结果，可以公正地认为直觉主义和超一致性这两种数学方法同样合理。

## 4. 几何不一致性

几何发展是解释不一致图片现象的应用。其中最著名的可能是 M.C.埃舍尔的杰作《美景》、《瀑布》和《上升与下降》。事实上，这一传统可以追溯到公元前的庞贝。埃舍尔似乎从瑞典艺术家奥斯卡·罗特斯瓦德那里得到了许多灵感，他从 1934 年开始进行不一致的创作。埃舍尔还积极与英国数学家罗杰·彭罗斯合作。有几次尝试使用经典的一致数学来描述不一致图片的数学结构，如科万、弗朗西斯和彭罗斯等理论家所做的。然而，正如莫滕森（1997）所论证的那样，没有一致的数学理论能够捕捉到看到不可能的事物的感觉。只有不一致的理论才能捕捉到这种感知的内容。这相当于对不一致性的认知合理化的呼吁。然后，可以展示一些候选的不一致理论，这些理论可能包含这种不一致的内容。在这一点上，与经典数学有类似之处：投影几何是一种经典的一致数学理论，它很有趣，因为我们是有眼睛的生物，它解释了为什么事物在透视中看起来是这样的。

不一致的几何研究在莫滕森（2002a）中进一步发展，其中应用范畴论来给出各种理论及其一致化和不完全对偶之间关系的一般描述。有关非正式的解释，强调了视觉“悖论”与语言上更常见的悖论（如说谎者悖论）之间的区别，请参见莫滕森（2002b）。

最近，对几类不一致图形进行了不一致数学描述，例如埃舍尔的立方体（在他的作品《美景》中找到）、罗特斯瓦德-彭罗斯三角形等。请参见莫滕森（2010）。

这引发了另一个有趣的问题。自从欧几里得以来，反证法在几何证明中被充分利用（假设你想证明的是错误的，然后推导出矛盾）。但是在这里，我们有一种不同的技术（利用矛盾来描述不一致的图形，以证明内容确实是矛盾的）。如果成功，这就证明了人类的概念超出了仅仅可能的（一致的）。有关讨论，请参见 Mortensen（2019 年，2022 年）。

再说一点：这些几何悖论是否支持完全二值论？答案是否定的。如果你能画出一个矛盾的图像，那么存在一个不一致的东西。而且，不一致的图形之间暗示了矛盾类型之间的区别，而 ECQ 不允许这种区别。但是这一点不应该被过分强调。并不是因为一个图像有内容，那个内容就一定是真实的：许多图像的内容是虚构的。有关这一主题的更多信息，请参见 Mortensen（2019a）。

## 5. 分块和渗透

最近，出现了一种处理矛盾的替代技术。布朗和普里斯特（2004）提出了一种他们称之为“分块和渗透”的技术，其中从不一致的前提进行推理的方法是将假设分成一致的理论（块），推导出适当的结果，然后将这些结果传递给另一个块以进一步推导结果。他们认为牛顿在微积分中进行导数推理时，就是采用了这种形式。这是一种有趣而新颖的方法，尽管它必须面对这样的反对意见：要相信基于这种基础得出的结论，就应该同样相信所有的前提；因此，最终应该提出一种更常见形式的论证，即不将前提分割开来，而是诉诸于所有前提。因此，反对意见是分块和渗透是发现背景而不是证明背景的一部分。

后来，本哈姆等人（2014）将这些方法扩展到了狄拉克δ函数。这扩大了应用的范围，从而加强了这种技术。然而，也很明显，在这里有一个密切的平行关系，即（一大类）分块和渗透应用与（一致的）非标准分析之间：无论何时分块和渗透通过将块移动到其中无穷小为零的块来进行导数运算，非标准分析通过将导数定义为“仅标准部分”来进行导数运算。当然，这两种技术之间的等价并不能说明哪一种更具解释深度。我们将拭目以待发展。

## 6. 结论

总结：最近出现了一些对不一致数学持同情态度的哲学材料。Colyvan（2000）讨论了不一致的数学理论意味着其主题是不一致的数学对象的问题。他还承担了一个重要任务，即解释不一致数学如何有一个应用数学的分支。Priest（2013）像Colyvan一样指出，不一致的数学增加了形而上学的混合物。Berto（2007）有用地调查了悖论和基础问题，并阐述了一些与重要哲学问题（如不完备定理）相关的算术结果。Van Bendegem（2014）追求了一个有趣的动机，即变化总是一种异常状态，因此总是变化意味着总是异常。例子包括无穷小、复数和无穷大。然而，对于认为不一致总是异常的观点应该保持谨慎，因为这只是更多的数学研究材料而已。

再次强调，这些结构并不以任何方式挑战或否认现有的数学，而是扩展了我们对数学可能性的概念。这进一步加深了数学多元论的问题；参见例如 Davies（2005），Hellman 和 Bell（2006）或 Priest（2013）。不同的作者对数学多元论有不同的版本，但大致上是指不兼容的数学理论可以同样地成立。数学多元论的论据在于观察到存在不同的数学“宇宙”，其中不同的、甚至是不兼容的数学定理或定律成立。众所周知的例子是经典数学与直觉主义数学之间的不兼容性，以及 ZF 类集合宇宙与有选择公理和无选择公理的不兼容性。如果它们都是数学上行为良好的理论的合法例子，那么说 ZF 与选择是真实的数学而 ZF 无选择是虚假的数学似乎是荒谬的。

数学哲学的主要问题无疑是什么是数学。拓扑对偶或 Routley\*等二元操作强调了不完全/不一致的对偶同样合理作为数学的例子。从这个角度来看，关于接受直觉主义、经典主义还是不一致数学的争论似乎是毫无意义的；它们都是数学的主题的一部分。这一观点由 Shapiro（2014）有效地提出（相反，参见他的 2002 年观点）。Shapiro 的独特立场还有其他要素：数学作为结构科学，以及数学多元论暗示逻辑多元论（关于逻辑多元论，还可以参见 Beall 和 Restall 2006）；但我们在这里不讨论这些。

就其价值而言，笔者认为数学多元论的某种版本显然是正确的，如果我们将数学首先看作是允许不一致性的数学理论，而仅次于数学理论的是这些理论内部的对象。当然，如果将不兼容的理论视为命题结构，它们共存就没有问题。理论的首要性也符合数学认识论是演绎证明的自然观察。只有当我们以数学对象作为理论的真理生成者的起点时，我们才需要担心它们的对象如何共存。

<!--md-padding-ignore-begin-->
## Bibliography

* Beall, J.C. and G. Restall, 2006, *Logical Pluralism*, Oxford: The Clarendon Press.
* Benham, R., C. Mortensen and G. Priest, 2014, “Chunk and Permeate III: The Dirac Delta Function”, *Synthese*, 191(13): 3057-3062. doi:10.1007/s11229-014-0473-7
* Berto, F., 2007, *How to Sell a Contradiction*, London: College Publications.
* Brady, R., 1971, “The Consistency of the Axioms of Abstraction and Extensionality in a Three-Valued Logic”, *Notre Dame Journal of Formal Logic*, 12: 447–453.
* –––, 1989, “The Nontriviality of Dialectical Set Theory”, in G. Priest, R. Routley and J. Norman (eds.), *Paraconsistent Logic*, Munich: Philosophia Verlag.
* –––, 2006, *Universal Logic*, Stanford: CSLI Publications.
* Brown, B., and G. Priest, 2004, “Chunk and Permeate: A Paraconsistent Inference Strategy. Part I: The Infinitesimal Calculus”, *The Journal of Philosophical Logic*, 33: 379–388.
* Burgess, J., 1981, “Relevance, a Fallacy?”, *Notre Dame Journal of Formal Logic*, 22: 97–104.
* Colyvan, M., 2000, “Applying Inconsistent Mathematics”, *New Waves in the Philosophy of Mathematics*, O.Bueno and O. Limmbo (eds.), London: Palgrave McMillan, 160-172.
* Da Costa, Newton C.A., 1974, “On the Theory of Inconsistent Formal Systems”, *Notre Dame Journal of Formal Logic*, 15: 497–510.
* –––, 2000, “Paraconsistent Mathematics”, in D. Batens *et al*. (eds.), *Frontiers of Paraconsistent Logic*, Hertfordshire: Research Studies Press, 165–180.
* Davies, E.B., 2005 “A Defence of Mathematical Pluralism ”, *Philosophia Mathematica*, 13: 252–276.
* Estrada-González, L., 2010, “Complement-Topoi and Dual Intuitionistic Logic”, *Australasian Journal of Logic*, 9: 26–44.
* –––, 2015a, “The Evil Twin: The Basics of Complement-toposes”, in Beziau, Chakraborty and Dutta (eds.), *New Directions in Paraconsistent Logic*, Dordrecht: Springer: 375-425.
* –––, 2015b, “From (paraconsistent) topos logic to Universal (topos) logic”, in Koslow and Buchsbaum (eds.), *The Road to Universal Logic: Festschrift for Jean-Yves Beziau on his Fiftieth Birthday*, Dordrecht: Springer, 263-295.
* –––, 2016, “Prospects for Triviality”, in H. Andreas and P. Verdee (eds.), *Logical Studies of Paraconsistent Reasoning in Science and Mathematics*, Dordrecht: Springer, 81-89.
* Goodman, N., 1981, “The Logic of Contradictions”, *Zeitschrift fur Mathematische Logic und Grundlagen der Arithmetik*, 27: 119–126.
* Hatcher, W. S., 1982, *The Logical Foundations of Mathematics*, Oxford: Pergamon.
* Hellman, G. and J. Bell, 2006, “Pluralism and the Foundations of Mathematics”, in C.K. Waters et al. (eds.), *Scientific Pluralism* (Minnesota Studies in the Philosophy of Science, Volume XIX), Minneapolis: University of Minnesota Press.
* Kripke, S., 1975, “Outline of a Theory of Truth”, *The Journal of Philosophy*, 72: 690–716.
* McKubre-Jordens, M., and Zach Weber, 2012, “Real Analysis and Paraconsistent Logic”, *Journal of Philosophical Logic*, 41(5): 901–922.
* Meyer, R. K., 1976, “Relevant Arithmetic”, *Bulletin of the Section of Logic of the Polish Academy of Sciences*, 5: 133–137.
* Meyer, R. K. and C. Mortensen, 1984, “Inconsistent Models for Relevant Arithmetics”, *The Journal of Symbolic Logic*, 49: 917–929.
* Mortensen, C., 1983, “Reply to Burgess and to Read”, *Notre Dame Journal of Formal Logic*, 24: 35–40.
* –––, 1990, “Models for Inconsistent and Incomplete Differential Calculus”, *Notre Dame Journal of Formal Logic*, 31: 274–285.
* –––, 1995, *Inconsistent Mathematics*, Kluwer Mathematics and Its Applications Series, Dordrecht: Kluwer. \[[Errata available online](https://www.adelaide.edu.au/directory/chris.mortensen?dsn=directory.file;field=data;id=15292;m=view).]
* –––, 1997, “Peeking at the Impossible”, *Notre Dame Journal of Formal Logic*, 38: 527–534.
* –––, 2000, “Prospects for Inconsistency”, in D. Batens *et al*. (eds.), *Frontiers of Paraconsistent Logic*, London: Research Studies Press, 203–208.
* –––, 2002a, “Towards a Mathematics of Impossible Pictures”, in W. Carnielli, M. Coniglio and I. D’Ottaviano (eds.), *Paraconsistency: The Logical Way to the Infinite*, (Lecture Notes in Pure and Applied Mathematics, Volume 228), New York: Marcel Dekker, 445–454.
* –––, 2002b, “Paradoxes Inside and Outside Language”, *Language and Communication*, 22: 301–311.
* –––, 2003, “Closed Set Logic”, in R. Brady (ed.), *Relevant Logics and Their Rivals* (Volume II), Aldershot: Ashgate, pp. 252-262 (especially 255-6).
* –––, 2006, “An Analysis of Inconsistent and Incomplete Necker Cubes”, *Australasian Journal of Logic*, 4: 216–225.
* –––, 2010, *Inconsistent Geometry* (Studies in Logic, Volume 27), London: College Publications (King’s College).
* –––, 2011, “Merge”, *Australasian Journal of Logic*, 9: 135–141.
* –––, 2013, “Arithmetic Starred”, in K. Tanaka, F. Berto, E. Mares and F. Paoli (eds.), *Paraconsistency: Logic and Applications*, Dordrecht: Springer, 309–314.
* –––, 2019, “Euclid's Geometry: the Case of Contradiction”, *Journal of Modern Greek Studies* (Australia and New Zealand), Special Issue, 2019, 71–83.
* –––, 2019a, “Dialethism and Impossible Figures”, in A. Rieger and G. Young (eds.), *Dialetheism and Its Applications*, Cham: Springer International Publishing, 185–194.
* –––, 2022, *The Impossible Arises*, Bloomington, Indiana University Press.
* Paris, J., and Pathmanathan, N., 2006, “A Note on Priest’s Finite Arithmetics”, *The Journal of Philosophical Logic*, 35: 529–537.
* Paris, J., and Sirokofskich, A., 2008, “On LP-models of Arithmetic”, *The Journal of Symbolic Logic*, 73(1): 212–226.
* Priest, G., 1987, *In Contradiction*, Dordrecht: Nijhoff; second expanded edition, Oxford: The Clarendon Press, 2006.
* –––, 1997, “Inconsistent Models for Arithmetic: I, Finite Models”, *The Journal of Philosophical Logic*, 26: 223–235.
* –––, 2000, “Inconsistent Models for Arithmetic: II, The General Case”, *The Journal of Symbolic Logic*, 65: 1519–29.
* –––, 2013, “Mathematical Pluralism”, *Logic Journal of IGPL*, 21(1): 4–13: doi:10.1093/jzs018
* Priest, G., R. Routley and J. Norman (eds.), 1989, *Paraconsistent Logic*, Munich: Philosophia Verlag.
* Restall, G., 2007, “Review of Brady *Universal Logic*”, *Bulletin of Symbolic Logic*, 13(4): 544–547.
* Robinson, A., 1974, *Non-standard Analysis*, Amsterdam: North-Holland, revised edition.
* Routley, R. and V. Routley, 1972, “The Semantics of First Degree Entailment”, *Noûs*, 6: 335–359.
* Shapiro, S., 2002, “Inconsistency and Incompleteness”, *Mind*, 111: 817–832.
* –––, “Structures and Logics: a Case for (a) Relativism”, *Erkenntnis*, 79: 309–329.
* Tedder, A., 2015,“Axioms for Finite Collapse Models of Arithmetic”, *The Review of Symbolic Logic*, 8(3): 529-539.
* Van Bendegem, J-P., 2014, “Inconsistency in Mathematics and the Mathematics of Inconsistency”, *Synthese*, 191(13), 3063-3078.
* Weber, Z., 2010, “Transfinite Numbers in Paraconsistent Set Theory”, *The Review of Symbolic Logic*, 3(1): 71-92.
* –––, 2012, “Transfinite Cardinals in Paraconsistent Set Theory”, *The Review of Symbolic Logic*, 5(2): 269–293.
* –––, 2013, “Notes on Inconsistent Set Theory”, in K. Tanaka, F. Berto, E. Mares and F. Paoli (eds.), *Paraconsistency: Logic and Applications*, Dordrecht: Springer, 315–328.
* ––– and Cotnoir, A.J., 2015, “Inconsistent Boundaries”, *Synthese*, 192: 1267–1294. doi:10.1007/511229-014-0614-2
* Weber, Z., and M. McKubre-Jordens, 2017, “Paraconsistent Measurement of the Circle”, *Australasian Journal of Logic*, 14(1): doi:10.26686/ajl.v14i1.4034

## Academic Tools

| ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=mathematics-inconsistent).                                                                      |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/mathematics-inconsistent/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
| ![inpho icon](../../.gitbook/assets/inpho.png)         | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=mathematics-inconsistent\&redirect=True) at the Internet Philosophy Ontology Project (InPhO).   |
| ![phil papers icon](../../.gitbook/assets/pp.png)      | [Enhanced bibliography for this entry](https://philpapers.org/sep/mathematics-inconsistent/) at [PhilPapers](https://philpapers.org/), with links to its database.                          |

## Other Internet Resources

\[Please contact the author with suggestions.]

## Related Entries

[contradiction](https://plato.stanford.edu/entries/contradiction/) | [logic: paraconsistent](https://plato.stanford.edu/entries/logic-paraconsistent/) | [mathematics, philosophy of](https://plato.stanford.edu/entries/philosophy-mathematics/) | [self-reference](https://plato.stanford.edu/entries/self-reference/)

[Copyright © 2022](https://plato.stanford.edu/info.html#c) by\
[Chris Mortensen](https://www.adelaide.edu.au/directory/chris.mortensen) <[*Chris.Mortensen@adelaide.edu.au*](mailto:Chris%2eMortensen%40adelaide%2eedu%2eau)>
<!--md-padding-ignore-end-->
