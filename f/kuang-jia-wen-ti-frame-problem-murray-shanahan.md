# 框架问题 frame problem (Murray Shanahan)

*首次发表于 2004 年 2 月 23 日，实质性修订于 2016 年 2 月 8 日*

在大多数人工智能研究者看来，框架问题是在逻辑中表示行动效果而无需明确表示大量直观明显的非效果的挑战。但对许多哲学家来说，人工智能研究者的框架问题暗示了更广泛的认识论问题。原则上是否可能限制推导行动后果所需的推理范围？而且，更一般地，我们如何解释我们显然能够仅考虑对当前情境有关的而不需要明确考虑所有与情境无关的内容就做出决定的能力？

---

## 介绍

框架问题起源于基于逻辑的人工智能（AI）领域中的一个狭义技术问题。但它被心灵哲学家们以一种修饰和改变过的形式来讨论，并给予了更广泛的解释。它在 AI 研究人员的实验室中产生的背景和在哲学家手中的处理方式之间的紧张关系在 20 世纪 80 年代和 90 年代引发了一场有趣且有时激烈的辩论。但由于这个狭义的技术问题在很大程度上已经得到解决，最近的讨论更多地集中在框架问题对认知科学的更广泛影响上，而不是解释问题。为了理解这个问题的关键点，本文将从技术层面上解释框架问题。接下来将探讨一些哲学家对问题的重新解释方式。文章最后将评估框架问题在当今的重要性。

## 逻辑中的框架问题

简而言之，框架问题在其狭义、技术性的形式中是这样的（McCarthy＆Hayes 1969）。使用数理逻辑，如何能够编写描述行动效果的公式，而无需编写大量附带的公式来描述那些行动的平凡、显而易见的非效果？让我们来看一个例子。这个困难可以在没有正式逻辑的完整装置的情况下进行说明，但应该记住，魔鬼在于数学细节。假设我们编写了两个公式，一个描述涂漆一个物体的效果，另一个描述移动一个物体的效果。

1. Colour(x, c)在 Paint(x, c)之后保持
2. Move(x, p)之后，Position(x, p)保持不变

现在，假设我们有一个初始情况，在这种情况下，颜色(A, 红色)和位置(A, 房子)成立。根据演绎逻辑的机制，然后在动作涂色(A, 蓝色)之后跟随动作移动(A, 花园)之后会发生什么？直觉上，我们期望颜色(A, 蓝色)和位置(A, 花园)成立。不幸的是，事实并非如此。如果更正式地用经典谓词逻辑写出，使用适当的形式化来表示时间和动作，比如情境演算（McCarthy & Hayes 1969），上述两个公式只授权得出位置(A, 花园)成立的结论。这是因为它们没有排除 A 的颜色可能会被移动动作改变的可能性。

最明显的改进形式化的方法，以便得出正确的常识性结论，是添加一些明确描述每个动作的非影响的公式。 这些公式称为框架公理。对于手头的例子，我们需要一对框架公理。

3. 在 Move(x, p)之后，如果 Colour(x, c)之前成立，则 Colour(x, c)仍然成立
4. *Position*(*x*, *p*) holds after *Paint*(*x*, *c*) if *Position*(*x*, *p*) held beforehand

换句话说，绘制一个物体不会影响其位置，移动一个物体也不会影响其颜色。通过添加这两个公式（在谓词逻辑中更正式地书写），可以得出所有期望的结论。然而，这绝非一个令人满意的解决方案。由于大多数动作不会影响情境的大多数属性，在一个包含 M 个动作和 N 个属性的领域中，通常我们将不得不写出几乎 MN 个框架公理。无论这些公式是否注定要明确存储在计算机的内存中，还是仅仅是设计者规范的一部分，这都是一个不受欢迎的负担。

挑战在于如何在形式逻辑中更简洁地捕捉行动的非效果。我们需要的是一种声明一般经验法则的方式，即除非有证据证明相反，否则可以假设一个行动不会改变情境的某个属性。这个默认假设被称为常识的惯性法则。技术上的框架问题可以被视为形式化这个法则的任务。

主要障碍是古典逻辑的单调性。在古典逻辑中，从一组公式中可以得出的结论集合总是随着进一步添加公式而增加。这使得无法表达一个具有无限例外的规则，而常识的惯性法则正是这样一条规则。例如，我们可能希望在适当的时候添加一个公式，以捕捉当我们将物体放入油漆罐时引发的公理 3 的例外情况。但是，我们之前没有考虑到这个例外情况不应该阻止我们应用常识的惯性法则，并得出足够广泛的（可废除的）结论以启动进程。

因此，基于逻辑的人工智能研究人员在开发各种非单调推理形式主义方面付出了很多努力，例如缩小（McCarthy 1986），并研究它们在框架问题中的应用。所有这些都没有变得简单。进展中最棘手的障碍之一是在所谓的耶鲁枪击问题（Hanks＆McDermott 1987）中突出显示的，这是一个简单的场景，如果用非单调形式主义天真地表示，就会产生令人费解的结论。更糟糕的是，一个完整的解决方案需要在存在并发动作、具有非确定性效果的动作、连续变化以及具有间接影响的动作的情况下运作。尽管存在一些解决逻辑 AI 研究所需的技术框架问题的解决方案，虽然不断发现改进和扩展，但可以说，尘埃已经落定，而框架问题在其技术形式上基本上已经解决（Shanahan 1997; Lifschitz 2015）。

## 3. 认识论框架问题

让我们继续谈论框架问题，因为它已被各种哲学家重新解释。在哲学文献中，框架问题的首次重要提及是由丹尼特（1978, 125）所提出。根据丹尼特的说法，这个谜团是如何“一个认知的创造物……拥有许多关于世界的信念”，当它执行一个行为时，如何更新这些信念以使它们“大致符合世界”？在《心智的模块化》一书中，福多穿上了机器人学家的鞋子，并在考虑框架问题的同时，提出了类似的问题：“当机器的程序决定机器人应该重新评估哪些信念时，它已经开始进行一项或另一项行动，会如何？”（福多 1983, 114）。

这个问题乍看之下只是在印象上与 AI 研究人员所面临的逻辑问题有关。与 AI 研究人员的问题相比，哲学家的问题并未表达在形式逻辑的背景下，也并不特别关注行动的非效果。在后来的一篇文章中，丹尼特承认了对 AI 研究人员术语的借用（1987）。然而，他继续重申他的信念，在框架问题中，AI 发现了“一个新的、深刻的认识论问题——原则上是可以访问的，但被几代哲学家忽视了”。

最好的理解问题的方法是想象自己是一个必须执行日常任务的机器人的设计者，例如泡一杯茶。此外，为了清晰地突出框架问题，我们必须将我们的思维实验限制在某一类机器人设计上，即那些使用明确存储的、类似句子的世界表征的设计，这反映了经典人工智能的方法论原则。解决原始框架问题的人工智能研究人员是在这种限制下工作的，因为基于逻辑的人工智能是经典人工智能的一种。对于计算思维理论（假定心理状态包括一系列命题态度，心理过程是对相关命题的推理形式）持有同情态度的哲学家们也倾向于接受这种约束。

现在，假设机器人必须从橱柜里拿一个茶杯。杯子的当前位置在其事实数据库中表示为一个句子，与表示正在进行的情况的无数其他特征一起，比如环境温度，手臂的配置，当前日期，茶壶的颜色等等。抓住杯子并从橱柜里取出后，机器人需要更新这个数据库。杯子的位置显然已经改变，这是一个需要修订的事实。但是哪些其他句子需要修改呢？环境温度不受影响。茶壶的位置也不受影响。但如果碰巧有一个勺子放在杯子里，那么勺子的新位置，从其容器继承而来，也必须更新。

哲学家们现在所觉察到的认识论困难是这样的。机器人如何能够限制在行动的光线下必须重新考虑的命题范围？在一个足够简单的机器人中，这似乎不是什么大问题。毫无疑问，机器人可以逐个检查其整个命题数据库，并确定哪些需要修改。但是，如果我们想象一下，我们的机器人具有接近人类水平的智能，因此负担着一个庞大的事实数据库，每次它只是旋转一个电机，这样的策略开始看起来是计算上难以处理的。

因此，人工智能领域的一个相关问题被称为框架问题的计算方面（McDermott，1987）。这个问题是如何计算一个动作的后果，而无需计算其非影响。大多数符号人工智能程序采用的框架问题计算方面的解决方案是 McDermott 所称的“睡狗”策略的某种变体（1987）。这里的想法是，在更新以反映世界变化时，并不需要检查表示正在发生情况的数据结构的每个部分。相反，只需修改那些表示发生变化的世界方面的部分，并简单地将其余部分保留原样（遵循“让睡狗躺着”的格言）。在我们讲述的机器人和茶杯的例子中，我们可以通过使机器人更新自己关于杯子位置和橱柜内容的信念来应用“睡狗”策略。但机器人不会担心可能在杯子上或里面的一把勺子，因为机器人的目标并不直接涉及任何勺子。

然而，哲学问题并没有被这个计算问题所耗尽。突出的哲学问题是机器人如何确定它是否成功地修正了所有信念，以符合其行为的结果。只有在那时，它才能安全地应用“常识惯性法则”，并假设其余的世界是未被触及的。福多（Fodor 1987, 140）有趣地将此比作“哈姆雷特的问题：何时停止思考”。他声称，框架问题是“从工程师的视角看待的哈姆雷特的问题”。因此，显然避免框架问题的一种方法是诉诸相关性的概念。据反驳称，只有在任何特定行动的情境中，某些性质才具有相关性，并且对行动后果的考虑可以方便地限制在其中。

然而，针对相关性的呼吁并不是有帮助的。现在的困难在于确定什么是相关的，什么是无关的，这取决于上下文。再次考虑从橱柜中取出一个茶杯的行为。如果机器人的工作是泡茶，那么这有助于从茶壶中倒满杯子就是相关的。但如果机器人的任务是清洁橱柜，一个更相关的结果是暴露出杯子放置的表面。经典模式下的人工智能研究员可以应对这一挑战，尝试指定哪些命题与哪个上下文相关。但哲学家们，如韦勒（2005；2008），从德里福斯（1992）那里汲取灵感，意识到这里存在无限回归的威胁。正如德里福斯所说，“如果每个上下文只能根据被选为相关并在更广泛上下文中解释的特征来识别，AI 工作者将面临一个上下文的回归”（德里福斯 1992, 289）。

一种缓解无限回归威胁的方法是诉诸于事实，即人类比今天的机器人更聪明，但他们仍然会犯错误（McDermott 1987）。正如任何初学国际象棋的人都能证明的那样，人们经常无法预见他们行为的每一个后果，即使他们并不缺少推导这些后果所需的任何信息。Fodor 主张“框架问题非常深刻；它深入到了对理性分析的探索”（Fodor 1987）。但是对理性的分析可以容纳计算资源的有限性，这些资源可用于得出相关结论（Simon 1957; Russell & Wefald 1991; Sperber & Wilson 1996）。由于有时会得出过早的结论，有限理性在逻辑上是有缺陷的，但并不比人类的思维更糟糕。然而，正如 Fodor 指出的，诉诸于人类的局限性来证明对信息推导过程施加启发式界限的合理性本身并不能解决认知的框架问题（Fodor 2000, Ch.2; Fodor 2008, Ch.4; 另见 Chow 2013）。这是因为它忽视了启发式边界的划定问题，也就是说，它未能解决如何确定对推导过程而言什么是相关内容的最初问题。

然而，古典人工智能研究者相信，上下文的回归最终会停止，仍然可能选择继续追求基于确定相关性规则的系统构建研究议程，从古典人工智能的过去成功中汲取灵感。在此期间，持不同意见的哲学家可能会指出，人工智能过去的成功总是局限于狭窄的领域，如下棋或在已知且固定的潜在相关命题集中进行推理的有限微观世界。相比之下，人类智能可以处理一个开放且不断变化的上下文集合。此外，古典人工智能研究者容易受到整体论的质疑。Fodor 的工作中的一个关键主张是，当涉及限定行动后果时，就像在科学理论确认业务中一样，任何事物都可能是相关的。正在进行的情况的特性没有先验限制可能会发挥作用。因此，在他的模块化论文中，Fodor 使用框架问题来支持这样一种观点，即心智的中心过程——那些参与信念形成的过程——是“信息非封装的”，这意味着它们可以从任何来源获取信息。对于 Fodor 来说，这是提供这些过程的计算解释的一个根本障碍。

Fodor 的关注点是否正好建立在一个谬误的论证上，即一个过程必须在信息上封闭才能被计算上处理。我们只需要考虑到因为巧妙的索引技术因此并非如此。只需要向网络搜索引擎提交一对看似不相关的关键词（比如“香蕉”和“曼陀林”），在一小部分的时间内它就能够识别出数据库中提到这两个关键词的每一个网页，这个数据库中拥有成十亿的网页（现在包括这个网页，毫无疑问）。但这不是眼前要讨论的问题。重申这一观点，真正的问题在于相关性。有一个过程的确可能能够索引它所知道的有关，比方说，香蕉和曼陀林的一切，但被质疑的神秘之处就在于它如何能够弄清楚，在所有的东西中，香蕉和曼陀林首次对于其推理任务是有关的。

总结一下，我们可以辨别出一个认识论的框架问题，并将其与计算问题区分开来。认识论问题是：在经典人工智能中使用的命题式、类似语言的表示方式如何能够捕捉到整体性、开放性和上下文敏感性的相关性？而计算问题则是认识论问题的计算对应。鉴于相关性是整体性、开放性和上下文敏感性的，如何使推理过程仅限于相关的内容，从而使其可行呢？

## 常识惯性的形而上学

框架问题中的另一个维度在（Fodor 1987）中被揭示，那里对常识惯性法则的形而上学理由提出了质疑。尽管 Fodor 本人并没有清楚地将这个问题与更广泛的框架问题的其他方面区分开来，但经过检查，它似乎是一个独立的哲学难题。这里是论点。如上所述，人工智能研究人员开发的逻辑框架问题的解决方案通常倾向于某种常识惯性法则的版本，根据这个法则，假定情况的属性默认情况下不会因为行动的结果而改变。这一假设据说是由导致逻辑框架问题产生的观察本身所证明的，即大多数情况下，当执行一个动作或发生一个事件时，大多数事物并不会发生变化。

根据 Fodor 的观点，这种形而上学的理由是没有根据的。首先，有些行为改变了很多事情。那些肯定在一个房间里画一个物体几乎没有影响大多数物体的大多数属性的人可能会承认，引爆炸弹实际上确实影响了这些属性的大部分。但当我们问什么是“大多数属性”时，一个更深层的困难出现了。我们的本体论应该包括哪些谓词来使得任何关于“大多数属性”的说法成立？为了阐明这一点，Fodor 引入了“冰箱子”的概念。如果在某个时刻 Fodor 的冰箱开着，那么任何粒子都被定义为一个 fridgeon。现在似乎，简单地打开或关闭 Fodor 的冰箱会导致大量的附带变化。在一个可能包括 fridgeon 的宇宙中，难道真的是这样，大多数行动都不会改变大多数事物吗？

这里的重点不是逻辑问题。关闭和打开 Fodor 的冰箱对冰箱粒子的影响可以简洁地表示出来，没有任何困难（Shanahan 1997, 25）。相反，重点是形而上学的。常识的惯性定律只有在正确的本体论、正确的对象和谓词选择的背景下才能得到证明。但是，使常识的惯性定律起作用的正确本体论是什么？显然，冰箱粒子等应该被排除在外。但是，什么形而上学原则支持这样的决定？

这些问题以及引向这些问题的论证，令人深感古德曼对归纳的处理(Goodman 1954)。古德曼的“归纳的新谜题”，通常被称为葛鲁悖论，邀请我们考虑谓词葛鲁，该谓词在时间 t 之前仅对绿色的物体成立，在时间 t 之后则仅对蓝色的物体成立。问题在于每一个在时间 t 之前检查的绿色翡翠实例也是葛鲁翡翠的实例。因此，归纳推理认为所有翡翠是葛鲁的推理似乎和所有翡翠是绿色的归纳推理一样合法。当然，问题在于谓词的选择。古德曼表明，仅在正确的谓词集的背景下，归纳推理才行得通，福多尔为常识的惯性法则证明了相同的观点。

Fetzer(1991)提出了框架问题与归纳问题之间一种不同的亲密关系, 他写道“归纳问题是：对未来的一些推断进行辩护，而不是其他。同样，框架问题也是：对未来的一些推断进行辩护，而不是其他。第二个问题是第一个问题的一个实例。”然而, 这种对框架问题的看法在学界颇具争议(Hayes 1991)。

## 5. 框架问题今天

框架问题在 20 世纪 80 年代末和 90 年代初在基于逻辑的人工智能领域引起了大量工作，其更广泛的哲学意义也在大致同一时期浮出水面。但是，每位思想家今天赋予框架问题的重要性通常取决于他们对其他问题的立场。

在经典人工智能领域，已经发展出了各种可行的逻辑框架问题的解决方案，即使那些严格基于逻辑范式工作的人也不再将其视为严重障碍（Shanahan 1997; Reiter 2001; Shanahan 2003; Lifschitz 2015）。值得注意的是，具有逻辑思维的人工智能研究人员可以始终保留其方法论，然而，只要他们将其产品纯粹视为工程，就可以拒绝传统认知科学家认为计算比理解心智更重要的信念。此外，对于经典人工智能的目标并非是拥有人类水平智能的计算机，而是设计更好更有用的计算机程序，因此，它不受 Fodor、Dreyfus 等人的哲学异议影响。然而，对于完全不在象征性代表范式下工作的人工智能研究人员——例如，从事情境机器人研究的人——逻辑框架问题根本不在日常调查中突显。

尽管可以争论认为它甚至在连接主义环境中出现（Haselager＆Van Rappard 1998; Samuels 2010），但框架问题从其对计算在表征上的解释价值的经典假设中继承了其哲学意义的大部分，这个假设已经受到了长时间的激烈攻击（Clark 1997; Wheeler 2005）。尽管如此，许多心灵哲学家与 Fodor 和 Pylyshyn 一起仍然认同人类心理过程主要由一组命题的推理组成，并且这些推理是通过某种形式的计算来进行的。对于这些哲学家来说，认识论框架问题及其计算对应物仍然是一个真正的威胁。

对于 Wheeler 和其他人来说，传统人工智能和认知科学基于笛卡尔的假设，需要被推翻，以支持更具海德格尔气质的立场，然后才能克服框架问题（Dreyfus 2008; Wheeler 2005; 2008; Rietveld 2012）。根据 Wheeler（2005; 2008）所言，始于 Brooks（1991）的人工智能中的处境机器人运动展现了正确的道路。Dreyfus 在某种程度上同意，但他认为，处境机器人的早期产品“精致处理而非解决了框架问题”，因为“Brooks 的机器人只对环境的固定可分离特征做出响应，而不对上下文或变化的重要性做出响应”（Dreyfus 2008, 335）。Dreyfus 认为 Freeman（2000）的神经动力学工作更适合作为支持海德格尔式人工智能的基础，框架问题可以通过此种方法被消解（另见 Shanahan 2010, Ch.5; Rietveld 2012; Bruineberg & Rietveld 2014）。Dreyfus 对 Freeman 的方法印象深刻，因为意义的神经动力学记录既不是代表也不是联想，而是（在动力系统术语中）一组可以分类可能响应的“吸引子”，“吸引子本身是过去经验的产物”（Dreyfus 2008, 354）。

框架问题的一个哲学遗产是，它引起了一系列与整体论有关的问题，或者所谓的信息非封装。回想一下，如果某个过程在信息上是非封装的（Fodor 有时使用术语“各向同性”）, 那就意味着它没有先验的边界来决定哪些信息与其相关。Fodor 最近的著作中，在所有信息非封装的过程的语境中使用了“框架问题”这个术语，并不仅限于推断变化的后果（Fodor 2000, 第二章; Fodor 2006, 第四章）。很明显，理想化的理性在信息上是非封装的。在这个意义上，也有人建议各向同性对于所谓的民间心理理论是有害的（Heal 1996）。（对于 Heal 来说，这支持了竞争的模拟理论，但 Wilkerson (2001) 认为信息非封装对民间心理学的这两种解释都构成了问题。）类推推理，正如 Fodor 所说，就是“最纯粹的各向同性的一个例子：一个过程，它恰好依赖于在先前被认为无关的认知领域之间转移信息” (Fodor 1983, 105)。可以说，类比和隐喻思维的能力——创造性地超越理解的不同领域之间的界限的才能——是人类认知能力的根源 (Lakoff & Johnson 1980; Mithen 1996)。因此，类比推理的信息非封装可能是非常棘手的问题，特别是对于心灵模块的理论，其中模块被视为（上下文不敏感的）专家（Carruthers 2003; 2006）。

Dreyfus 认为这种“框架问题的极端版本”与古典人工智能和认知科学笛卡尔假设一样，后者要求不那么严格 (Dreyfus 2008, 361)。他提出这种海德格尔式的心灵描述也是解决这个框架问题的基础，我们对世界上事物行为的“背景熟悉”在这种情况下足以让我们有能力“退后一步并找出什么是相关的，以及如何相关”。Dreyfus 并没有解释，在相关性的整体性、开放性和场境敏感性特征的前提下，如何实现这种找出。但是，Wheeler 从一个类似的海德格尔立场认为，解决“跨语境”框架问题，正如他所称的，是通过一个动力系统，其中“每个系统组成部分的因果贡献部分地决定，并部分地受到其他大量系统组成部分的因果贡献的影响” (Wheeler 2008, 341)。Shanahan 和 Baars 提出了一个相关的设想 (2005 年; 另请参阅 Shanahan 2010 年，第 6 章)，基于全局工作区理论(Baars 1988)，根据该理论大脑通过实施一种结构解决了信息非封装问题，其中 a) 确定相关性的责任不是集中的，而是分布在平行的专业过程中; b) 一个按顺序展开的全局工作区状态集成了多个领域的相关贡献。

## Bibliography

* Baars, B. (1988), *A Cognitive Theory of Consciousness*, Cambridge University Press.
* Brooks, R.A. (1991), “Intelligence without Reason”, in *Proc. 12th International Conference on Artificial Intelligence*, pp. 569–595.
* Bruineberg, J. & Rietveld, E. (2014), “Self-organization, Free Energy Minimization, and Optimal Grip on a Field of Affordances”, *Frontiers in Human Neuroscience*, 8: 559, doi:10.3389/fnhum.2014.00599
* Carruthers, P. (2003), “On Fodor's Problem”, *Mind and Language*, 18(5): 502–523.
* ––– (2006), *The Architecture of the Mind*, Oxford University Press
* Chow, S.J. (2013), “What’s the Problem with the Frame Problem?”, *Review of Philosophy and Psychology*, 4: 309–331.
* Clark, A. (1997), *Being There: Putting Brain, Body, and World Together Again*, MIT Press.
* Dennett, D. (1978), *Brainstorms*, MIT Press.
* ––– (1987), “Cognitive Wheels: The Frame Problem in Artificial Intelligence”, in Pylyshyn (1987).
* Dreyfus, H.L. (1991), *Being-in-the-World: A Commentary on Heidegger's* Being and Time, *Division I*, MIT Press.
* ––– (1992), *What Computers Still Can't Do*, MIT Press.
* ––– (2008), “Why Heideggerian AI Failed and How Fixing It Would Require Making It More Heideggerian”, in *The Mechanical Mind in History*, P. Husbands, O. Holland & M. Wheeler (eds.), MIT Press, pp. 331–371.
* Fetzer, J.H. (1991), “The Frame Problem: Artificial Intelligence Meets David Hume”, in Ford & Hayes (1991).
* Fodor, J.A. (1983), *The Modularity of Mind*, MIT Press.
* ––– (1987), “Modules, Frames, Fridgeons, Sleeping Dogs, and the Music of the Spheres”, in Pylyshyn (1987).
* ––– (2000), *The Mind Doesn't Work That Way*, MIT Press.
* ––– (2008), *LOT 2: The Language of Thought Revisited*, Oxford University Press.
* Ford, K.M. & Hayes, P.J. (eds.) (1991), *Reasoning Agents in a Dynamic World: The Frame Problem*, JAI Press.
* Ford, K.M. & Pylyshyn, Z.W. (eds.) (1996), *The Robot's Dilemma Revisited: The Frame Problem in Artificial Intelligence*, Ablex.
* Freeman, W.J. (2000), *How Brains Make Up Their Minds*, Phoenix.
* Goodman, N. (1954), *Fact, Fiction, and Forecast*, Harvard University Press.
* Hanks, S. & McDermott, D. (1987), “Nonmonotonic Logic and Temporal Projection”, *Artificial Intelligence*, 33(3): 379–412.
* Haselager, W.F.G. & Van Rappard, J.F.H. (1998), “Connectionism, Systematicity, and the Frame Problem”, *Minds and Machines*, 8(2): 161–179.
* Hayes, P.J. (1991), “Artificial Intelligence Meets David Hume: A Reply to Fetzer”, in Ford & Hayes (1991).
* Heal, J. (1996), “Simulation, Theory, and Content”, in *Theories of Theories of Mind*, eds. P.Carruthers & P.Smith, Cambridge University Press, pp. 75–89.
* Lakoff, G. & Johnson, M. (1980), *Metaphors We Live By*, University of Chicago Press.
* Lifschitz, V. (2015), “The Dramatic True Story of the Frame Default”, *Journal of Philosophical Logic*, 44: 163–196.
* McCarthy, J. (1986), “Applications of Circumscription to Formalizing Common Sense Knowledge”, *Artificial Intelligence*, 26(3): 89–116.
* McCarthy, J. & Hayes, P.J. (1969), “Some Philosophical Problems from the Standpoint of Artificial Intelligence”, in *Machine Intelligence 4*, ed. D.Michie and B.Meltzer, Edinburgh University Press, pp. 463–502.
* McDermott, D. (1987), “We've Been Framed: Or Why AI Is Innocent of the Frame Problem”, in Pylyshyn (1987).
* Mithen, S. (1987), *The Prehistory of the Mind*, Thames & Hudson.
* Pylyshyn, Z.W. (ed.) (1987), *The Robot's Dilemma: The Frame Problem in Artificial Intelligence*, Ablex.
* Rietveld, R. (2012), “Context-switching and Responsiveness to Real Relevance”, in J.Kiverstein & M.Wheeler (eds.), *Heidegger and Cognitive Science: New Directions in Cognitive Science and Philosophy*, Palgrave Macmillan, pp. 105–135.
* Reiter, R. (2001), *Knowledge in Action: Logical Foundations for Specifying and Implementing Dynamical Systems*, MIT Press.
* Russell, S. & Wefald, E. (1991), *Do the Right Thing: Studies in Limited Rationality*, MIT Press.
* Samuels, R. (2010), “Classical Computationalism and the Many Problems of Cognitive Relevance”, *Studies in History and Philosophy of Science*, 41: 280–293.
* Shanahan, M. (1997), *Solving the Frame Problem: A Mathematical Investigation of the Common Sense Law of Inertia*, MIT Press.
* ––– (2003), “The Frame Problem”, in *The Macmillan Encyclopedia of Cognitive Science*, L. Nadel (ed.), Macmillan, pp. 144–150.
* ––– (2010), *Embodiment and the Inner Life: Cognition and Consciousness in the Space of Possible Minds*, Oxford University Press.
* Shanahan, M. & Baars, B.J. (2005), “Applying Global Workspace Theory to the Frame Problem”, *Cognition*, 98(2): 157–176.
* Simon, H. (1957), *Models of Man*, Wiley.
* Sperber, D. & Wilson, D. (1996), “Fodor's Frame Problem and Relevance Theory”, *Behavioral and Brain Sciences*, 19(3): 530–532.
* Wheeler, M. (2005), *Reconstructing the Cognitive World: The Next Step*, MIT Press.
* ––– (2008), “Cognition in Context: Phenomenology, Situated Robotics, and the Frame Problem”, *International Journal of Philosophical Studies*, 16(3): 323–349.
* Wilkerson, W.S. (2001), “Simulation, Theory, and the Frame Problem”, *Philosophical Psychology*, 14(2): 141–153.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=frame-problem). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/frame-problem/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=frame-problem&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](http://philpapers.org/sep/frame-problem/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

* [Articles on the Frame Problem](http://www.cogsci.ecs.soton.ac.uk/cgi/psyc/ptopic?topic=frame-problem&submit=View+Topic) in Psycoloquy, a refereed electronic journal sponsered by the American Psychological Association.

## Related Entries

[artificial intelligence: logic-based](https://plato.stanford.edu/entries/logic-ai/) | [cognitive science](https://plato.stanford.edu/entries/cognitive-science/) | [folk psychology: as a theory](https://plato.stanford.edu/entries/folkpsych-theory/) | [folk psychology: as mental simulation](https://plato.stanford.edu/entries/folkpsych-simulation/) | [induction: problem of](https://plato.stanford.edu/entries/induction-problem/) | [learning theory, formal](https://plato.stanford.edu/entries/learning-formal/) | [logic: action](https://plato.stanford.edu/entries/logic-action/) | [mental representation](https://plato.stanford.edu/entries/mental-representation/) | [mind: computational theory of](https://plato.stanford.edu/entries/computational-mind/)

[Copyright © 2016](https://plato.stanford.edu/info.html#c) by  
Murray Shanahan
