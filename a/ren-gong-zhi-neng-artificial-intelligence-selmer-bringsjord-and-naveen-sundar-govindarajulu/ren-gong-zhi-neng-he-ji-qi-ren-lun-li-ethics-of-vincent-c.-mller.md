# 人工智能和机器人伦理 ethics of (Vincent C. Müller)


*首次发表于 2020 年 4 月 30 日星期四*

人工智能（AI）和机器人技术是数字技术，将对人类的发展产生重大影响。它们引发了关于我们应该如何处理这些系统、系统本身应该做什么、它们涉及哪些风险以及我们如何控制它们的基本问题。

在介绍领域（§1）之后，本文的主要主题（§2）包括：AI 系统作为对象时引发的伦理问题，即由人类制造和使用的工具。这包括隐私问题（§2.1）和操纵问题（§2.2），不透明性问题（§2.3）和偏见问题（§2.4），人机交互问题（§2.5），就业问题（§2.6）以及自主性的影响（§2.7）。然后是 AI 系统作为主体时的伦理问题，即机器伦理（§2.8）和人工道德行为（§2.9）。最后，我们讨论了可能导致“奇点”的未来 AI 超级智能的问题（§2.10）。我们以对 AI 愿景的评论结束（§3）。

对于这些主题中的每个部分，我们提供了对伦理问题的一般解释，概述了现有的立场和论点，然后分析了这些问题在当前技术中的表现，最后，提出了可能的政策后果。

---

## 1. 引言

### 1.1 领域背景

AI 和机器人的伦理往往集中在各种“关切”上，这是对新技术的典型反应。许多这样的关切事实上相当古怪（火车对灵魂来说太快了）；有些在预测上是错误的，当它们暗示技术将从根本上改变人类时（电话将破坏个人交流，写作将破坏记忆，录像带将使外出变得多余）；有些在广义上是正确的，但是相关性适中（数字技术将摧毁制造照相胶片、盒式磁带或黑胶唱片的行业）；但有些在广义上是正确的，而且非常相关（汽车将杀死儿童并从根本上改变景观）。这样一篇文章的任务是分析这些问题并消除那些不重要的问题。

一些技术，如核能、汽车或塑料，引发了伦理和政治讨论，并采取了重大政策努力来控制这些技术的发展轨迹，通常只有在造成一些损害后才会采取行动。除了这些“伦理关切”之外，新技术还挑战着当前的规范和概念体系，这对哲学来说尤为重要。最后，一旦我们在其背景下理解了一项技术，我们就需要塑造我们的社会回应，包括监管和法律。所有这些特征在新的人工智能和机器人技术案例中也存在，而且更基本的担忧是它们可能终结人类对地球的控制时代。

近年来，人工智能和机器人伦理受到了重大的媒体关注，这支持了相关研究，但也可能削弱了它：媒体经常谈论的问题似乎只是对未来技术带来的预测，并且似乎我们已经知道什么是最具伦理的以及如何实现。因此，媒体报道主要关注风险、安全（Brundage 等人，2018 年，在下面的其他互联网资源部分，以下简称[OIR]）以及对影响的预测（例如，对就业市场的影响）。结果是对基本上是技术问题的讨论，重点是如何实现期望的结果。当前的政策和行业讨论也受到形象和公共关系的驱动，其中“伦理”标签实际上并不比新的“绿色”标签更有意义，可能只是用于“伦理洗白”。对于一个问题是否符合人工智能伦理问题的要求，需要我们不容易知道应该做什么才是正确的。在这个意义上，人工智能导致的失业、盗窃或杀人并不是伦理问题，而是在某些情况下是否允许这些行为才是问题。本文重点关注那些我们不容易知道答案的真正伦理问题。

最后一个警告：人工智能和机器人伦理是应用伦理学中一个非常年轻的领域，具有重要的动态，但很少有确立的问题和权威的概述——尽管有一个有希望的大纲（欧洲科学与新技术伦理小组 2018 年），以及关于社会影响的开端（Floridi 等人 2018 年；Taddeo 和 Floridi 2018 年；S. Taylor 等人 2018 年；Walsh 2018 年；Bryson 2019 年；Gibert 2019 年；Whittlestone 等人 2019 年），以及政策建议（AI HLEG 2019 年[OIR]；IEEE 2019 年）。因此，本文不能仅仅复制社区迄今为止取得的成就，而必须提出一个在很少有秩序的情况下进行排序的建议。

### 1.2 人工智能和机器人

“人工智能”（AI）的概念广泛理解为任何一种显示智能行为的人工计算系统，即有助于实现目标的复杂行为。特别是，我们不希望将“智能”限制在如果由人类完成则需要智能的范围内，正如明斯基（1985 年）所建议的那样。这意味着我们包括一系列机器，包括在“技术 AI”中只显示有限学习或推理能力但在特定任务的自动化方面表现出色的机器，以及在“通用 AI”中旨在创建一个普遍智能的代理机器。

人工智能在某种程度上比其他技术更贴近我们的皮肤，因此有了“人工智能哲学”这个领域。也许这是因为人工智能的项目是创建具有我们人类自身核心特征的机器，即感知、思考和智能的存在。人工智能代理的主要目的可能涉及感知、建模、规划和行动，但当前的人工智能应用还包括感知、文本分析、自然语言处理（NLP）、逻辑推理、游戏对弈、决策支持系统、数据分析、预测分析，以及自动驾驶车辆和其他形式的机器人技术（P. Stone 等，2016 年）。人工智能可能采用各种计算技术来实现这些目标，无论是受自然认知启发的经典符号操作人工智能，还是通过神经网络进行机器学习（Goodfellow、Bengio 和 Courville，2016 年；Silver 等，2018 年）。

历史上值得注意的是，“人工智能”一词在大约 1950 年至 1975 年间被用于上述含义，然后在“人工智能寒冬”期间（大约 1975 年至 1995 年）声名狼藉，并且范围变窄。因此，“机器学习”、“自然语言处理”和“数据科学”等领域通常没有被标记为“人工智能”。自 2010 年以来，使用范围再次扩大，有时几乎将整个计算机科学甚至高科技都归为“人工智能”。现在它是一个值得骄傲的名字，是一个投资巨大的蓬勃发展的行业（Shoham 等，2018 年），并且再次处于炒作的边缘。正如 Erik Brynjolfsson 所指出的，它可能使我们能够实现几乎消除全球贫困、大规模减少疾病并为全球几乎每个人提供更好的教育（引自 Anderson、Rainie 和 Luchsinger，2018 年）。

> virtually eliminate global poverty, massively reduce disease and provide better education to almost everyone on the planet. (quoted in Anderson, Rainie, and Luchsinger 2018)

虽然人工智能可以完全是软件，但机器人是能够移动的物理机器。机器人受到物理冲击的影响，通常通过“传感器”，它们通过“执行器”（如夹持器或转动轮）对世界施加物理力。因此，自动驾驶汽车或飞机都是机器人，而只有极小部分的机器人是“人形”（类似电影中的人形机器人）。有些机器人使用人工智能，有些则不使用：典型的工业机器人只是盲目地按照完全定义的脚本进行操作，几乎没有感知输入、学习或推理（每年约有 50 万台这样的新工业机器人被安装，根据 IFR 2019 [OIR]）。可以说，虽然机器人系统在公众中引起了更多的关注，但人工智能系统更有可能对人类产生更大的影响。此外，用于一组狭窄任务的人工智能或机器人系统不太可能引起新问题，而更灵活和自主的系统则更有可能引起新问题。

因此，机器人技术和人工智能可以被看作是涵盖两个重叠系统的概念：只有人工智能的系统、只有机器人的系统以及两者兼具的系统。我们对这三种系统都感兴趣；因此，本文的范围不仅仅是两者的交集，而是两者的并集。

### 1.3 关于政策的说明

政策只是本文关注的其中一个问题。关于人工智能伦理的公众讨论很多，政治家们也经常发表声明称这个问题需要新的政策，但实际上这并不容易：实际的技术政策很难规划和执行。它可以采取多种形式，包括激励和资金、基础设施、税收或善意声明，以及各种行为体和法律的监管。人工智能的政策可能会与技术政策或一般政策的其他目标发生冲突。近年来，工业化国家的政府、议会、协会和行业界发布了报告和白皮书，一些人提出了善意口号（“可信赖/负责任/人道/以人为中心/良好/有益的人工智能”），但这是否是所需的呢？有关调查，请参阅 Jobin、Ienca 和 Vayena（2019）以及 V. Müller 的 PT-AI 政策文件和机构清单。

对于从事伦理和政策工作的人来说，可能会倾向于高估新技术的影响和威胁，低估现行法规的覆盖范围（例如，产品责任）。另一方面，一些企业、军方和一些公共行政部门倾向于“只是说说”并进行一些“伦理洗白”，以保持良好的公众形象并继续以前的做法。实际实施具有法律约束力的监管将挑战现有的商业模式和实践。实际政策不仅仅是伦理理论的实施，而是受到社会权力结构的制约，而那些拥有权力的行为体将反对任何限制他们的事物。因此，监管在面对经济和政治权力时很可能保持无力。

尽管实际政策很少，但有一些值得注意的开端：最新的欧盟政策文件建议“可信的人工智能”应该合法、伦理和技术健全，并将其具体阐述为七个要求：人类监督、技术健全性、隐私和数据治理、透明度、公平性、福祉和问责（AI HLEG 2019 [OIR]）。现在，许多欧洲研究都以“负责任的研究和创新”（RRI）为口号，自核能发展以来，“技术评估”一直是一个标准领域。职业伦理也是信息技术的一个标准领域，其中包括本文相关的问题。也许 AI 工程师应该有一个类似于医生职业道德准则的“伦理准则”是一个选择（Véliz 2019）。数据科学本身应该做什么在（L. Taylor and Purtova 2019）中有所涉及。我们还预计，许多政策最终将涵盖 AI 和机器人的具体用途或技术，而不是整个领域。关于 AI 伦理框架的有用摘要可参考（European Group on Ethics in Science and New Technologies 2018: 13ff）。关于一般的 AI 政策，请参阅 Calo（2018），以及 Crawford 和 Calo（2016）；Stahl，Timmermans 和 Mittelstadt（2016）；Johnson 和 Verdicchio（2017）；以及 Giubilini 和 Savulescu（2018）。技术的更多政治角度通常在“科学与技术研究”（STS）领域中讨论。正如《发明的伦理》（Jasanoff 2016）等书所显示的那样，STS 中的关注点通常与伦理学中的关注点非常相似（Jacobs 等人 2019 [OIR]）。在本文中，我们将分别讨论每种问题类型的政策，而不是针对整个 AI 或机器人领域。

## 2. 主要辩论

在本节中，我们概述了人类使用更或更少自主的人工智能和机器人系统的伦理问题，这意味着我们关注的是在某些技术使用中出现的问题，而在其他技术使用中不会出现的问题。然而，必须记住，技术总是会导致某些使用更容易、更频繁，同时阻碍其他使用。因此，技术工件的设计对于它们的使用具有伦理意义（Houkes 和 Vermaas 2010；Verbeek 2011），因此在这个领域，除了“负责任的使用”之外，我们还需要“负责任的设计”。对于解决这些问题，关注使用并不预设哪种伦理方法最适合；它们可能是美德伦理学（Vallor 2017），而不是后果主义或价值导向的伦理学（Floridi 等人 2018）。本节对于人工智能系统是否真正具有“智能”或其他心理属性的问题也持中立态度：如果人工智能和机器人仅仅被视为自动化的当前面貌（参见 Müller 即将发表的文章），那么这一观点同样适用。

### 2.1 隐私与监视

在信息技术领域存在着关于隐私和监视的普遍讨论（例如，Macnish 2017；Roessler 2017），主要涉及对私人数据和个人身份可识别数据的访问。隐私有几个被广泛认可的方面，例如“被单独放置的权利”，信息隐私，作为人格的一个方面的隐私，对自己的信息的控制权以及保密权（Bennett 和 Raab 2006）。隐私研究历史上主要关注秘密服务的国家监视，但现在也包括其他国家机构、企业甚至个人的监视。技术在过去几十年中发生了重大变化，而监管的反应速度较慢（尽管有《规则（欧盟）2016/679》），结果是一种被最强大的参与者利用的混乱状态，有时是公然的，有时是隐藏的。

数字领域已经大大扩大：所有数据的收集和存储现在都是数字化的，我们的生活越来越数字化，大部分数字数据都与一个单一的互联网连接，而且越来越多的传感器技术被使用，生成关于我们生活中非数字化方面的数据。人工智能增加了智能数据收集和数据分析的可能性。这既适用于对整个人口的全面监视，也适用于经典的有针对性的监视。此外，大部分数据都在代理之间进行交易，通常需要支付费用。

与此同时，在数字世界中，控制谁收集哪些数据以及谁有访问权限比在纸张和电话通话的模拟世界中要困难得多。许多新的人工智能技术放大了已知的问题。例如，照片和视频中的人脸识别可以进行身份识别，从而进行个人画像和搜索（Whittaker 等人，2018 年：15ff）。这继续使用其他识别技术，例如“设备指纹识别”，这在互联网上很常见（有时在“隐私政策”中公开）。结果是，“在这个庞大的数据海洋中，有一个令人恐惧的完整的我们的画像”（Smolan，2016 年：1:01）。可以说，这个结果是一个仍然没有得到应有公众关注的丑闻。

我们留下的数据痕迹是我们“免费”服务的付出方式，但我们并没有被告知这些数据的收集和这种新的原材料的价值，我们被操纵着留下越来越多的这样的数据。对于“五巨头”公司（亚马逊、谷歌/Alphabet、微软、苹果、Facebook）来说，他们业务的主要数据收集部分似乎是基于欺骗、利用人类的弱点、推动拖延、产生上瘾和操纵（Harris 2016 [OIR]）。社交媒体、游戏和大部分互联网在这个“监控经济”中的主要关注点是获取、维持和引导注意力，从而获得数据供应。“监控是互联网的商业模式”（Schneier 2015）。这种监控和关注经济有时被称为“监控资本主义”（Zuboff 2019）。它导致了许多企图逃离这些公司掌控的尝试，例如通过“极简主义”（Newport 2019）的练习，有时通过开源运动，但似乎现代公民已经失去了逃离的自主权，同时完全继续他们的生活和工作。我们失去了对我们的数据的所有权，如果“所有权”在这里是正确的关系的话。可以说，我们失去了对我们的数据的控制权。

这些系统通常会揭示我们自己希望压制或不知道的关于我们的事实：它们比我们自己更了解我们。即使只是观察在线行为，也可以洞察我们的心理状态（Burr and Christianini 2019）和操纵（见下面的第 2.2 节）。这导致了对“派生数据”的保护的呼吁（Wachter and Mittelstadt 2019）。在他畅销书《未来简史》的最后一句话中，哈拉里问到了人工智能的长期后果：

> 当无意识但高度智能的算法比我们自己更了解我们时，社会、政治和日常生活会发生什么？（2016: 462）

机器人设备在这个领域中还没有发挥重要作用，除了安全巡逻之外，但一旦它们在工业环境之外更加普遍，这将会改变。与“物联网”一起，所谓的“智能”系统（手机、电视、烤箱、灯、虚拟助手、家庭等），“智能城市”（Sennett 2018）和“智能治理”将成为数据收集机器的一部分，提供更详细、不同类型的实时数据，信息越来越多。

在数据科学中，可以大部分隐藏个人或群体身份的隐私保护技术现在已经成为标准工具；它们包括（相对）匿名化、访问控制（加密）、以及其他模型，其中计算是通过完全或部分加密的输入数据进行的（Stahl 和 Wright 2018）；在“差分隐私”的情况下，通过向查询结果添加校准噪声来加密输出（Dwork 等人 2006；Abowd 2017）。虽然需要更多的努力和成本，但这些技术可以避免许多隐私问题。一些公司还将更好的隐私视为可以利用和以价格出售的竞争优势。

实际执行监管的一个主要困难是在国家层面和个人层面上确实执行监管，他们必须确定负责的法律实体，证明行为，可能还要证明意图，找到一个宣布自己有权的法院...并最终让法院实际执行其决定。对于数字产品来说，往往缺乏对消费者权益、产品责任和其他民事责任或知识产权保护的法律保护，或者很难执行。这意味着具有“数字”背景的公司习惯于在不担心责任的情况下对消费者进行产品测试，同时大力维护其知识产权。这种“互联网自由主义”有时被认为技术解决方案本身可以解决社会问题（Mozorov 2013）。

### 2.2 行为操纵

AI 在监视中的伦理问题不仅仅涉及数据的积累和注意力的引导：它们还包括利用信息来操纵行为，无论是在线还是离线，以一种破坏自主理性选择的方式。当然，操纵行为的努力是古老的，但当它们使用 AI 系统时，它们可能获得新的质量。鉴于用户与数据系统的密切互动以及对个人的深入了解，他们容易受到“推动”、操纵和欺骗的影响。通过足够的先前数据，算法可以用来针对个人或小团体，提供可能影响这些特定个体的输入。'推动'改变了环境，以一种对个体有益但容易和廉价避免的可预测方式影响行为（Thaler＆Sunstein 2008）。从这里到家长式管理和操纵有一个滑坡。

许多广告商、营销人员和在线销售商将利用一切合法手段来最大化利润，包括利用行为偏见、欺骗和成瘾生成（Costa 和 Halpern 2019 [OIR]）。这种操纵在赌博和游戏行业中是商业模式，但正在扩散，例如廉价航空公司。在网页或游戏的界面设计中，这种操纵使用了所谓的“黑暗模式”（Mathur 等人 2019）。目前，赌博和销售成瘾物质受到严格监管，但在线操纵和成瘾却没有受到监管，尽管在线行为的操纵正在成为互联网的核心商业模式。

此外，社交媒体现在是政治宣传的主要场所。这种影响力可以用来引导选民行为，就像 Facebook-Cambridge Analytica“丑闻”中那样（Woolley 和 Howard 2017；Bradshaw，Neudert 和 Howard 2019），如果成功，可能会损害个人的自主权（Susser，Roessler 和 Nissenbaum 2019）。

改进的人工智能“伪造”技术使曾经可靠的证据变得不可靠——这已经发生在数字照片、音频记录和视频上。很快就会很容易创建（而不是修改）具有任何所需内容的“深度伪造”文本、照片和视频材料。很快，与人进行文本、电话或视频的复杂实时互动也将被伪造。因此，在我们越来越依赖这种互动的同时，我们不能信任数字互动。

另一个具体问题是，人工智能中的机器学习技术依赖于大量数据的训练。这意味着在数据隐私权和数据技术质量之间往往存在权衡。这影响了对侵犯隐私的实践的后果主义评估。

在这个领域的政策有起伏：公民自由和个人权利受到企业游说、秘密服务和其他依赖于监视的国家机构的巨大压力。与数字化时代之前基于信件、模拟电话通信和个人对话以及监视受到重大法律限制的情况相比，隐私保护大大减弱。

尽管欧盟《通用数据保护条例》（条例（EU）2016/679）加强了隐私保护，但美国和中国更倾向于少一些监管的增长（Thompson 和 Bremmer 2018），可能是希望这能提供竞争优势。很明显，国家和企业行为者借助人工智能技术增强了侵犯隐私和操纵人们的能力，并将继续这样做以进一步推动他们的特定利益，除非在整个社会的利益上通过政策加以限制。

### 2.3 AI 系统的不透明度

不透明度和偏见是现在有时被称为“数据伦理”或“大数据伦理”的核心问题（Floridi 和 Taddeo 2016; Mittelstadt 和 Floridi 2016）。用于自动决策支持和“预测分析”的 AI 系统引发了“对缺乏正当程序、问责制、社区参与和审计的重大关切”（Whittaker 等人 2018: 18ff）。它们是一个权力结构的一部分，在这个结构中，“我们正在创造限制和限制人类参与机会的决策过程”（Danaher 2016b: 245）。与此同时，受影响的人通常无法知道系统是如何得出这个输出的，即对于那个人来说，系统是“不透明”的。如果系统涉及机器学习，即使对于专家来说，他们也无法知道如何识别特定模式，甚至不知道模式是什么。决策系统和数据集中的偏见由于这种不透明度而加剧。因此，至少在存在消除偏见的愿望的情况下，不透明度和偏见的分析是相互关联的，政治回应必须同时解决这两个问题。

许多人工智能系统依赖于机器学习技术在（模拟的）神经网络中从给定的数据集中提取模式，无论是否提供了“正确”的解决方案；即，有监督的、半监督的或无监督的。通过这些技术，“学习”捕捉数据中的模式，并以一种对系统所做的决策似乎有用的方式进行标记，而程序员实际上并不知道系统使用了数据中的哪些模式。事实上，程序是不断演化的，因此当新数据进来或者给出新的反馈（“这是正确的”，“这是错误的”）时，学习系统使用的模式会发生变化。这意味着结果对用户或程序员来说是不透明的。此外，程序的质量严重依赖于提供的数据的质量，遵循“垃圾进，垃圾出”的老口号。因此，如果数据已经存在偏见（例如，关于嫌疑人肤色的警方数据），那么程序将重现这种偏见。有关在“数据表”中对数据集进行标准描述的提议，使得识别此类偏见更加可行（Gebru 等人，2018 年[OIR]）。最近还有大量关于机器学习系统的限制的文献，这些系统本质上是复杂的数据过滤器（Marcus，2018 年[OIR]）。有人认为，当今的伦理问题是人工智能采取的技术“捷径”的结果（Cristianini 即将出版）。

有几种旨在实现“可解释人工智能”的技术活动，从（Van Lent，Fisher 和 Mancuso，1999 年；Lomas 等人，2012 年）开始，最近还有一个 DARPA 计划（Gunning，2017 年[OIR]）。更广泛地说，需要一种机制来阐明和表达计算工件在社会中所行使的权力结构、偏见和影响（Diakopoulos，2015 年：398）。

> a mechanism for elucidating and articulating the power structures, biases, and influences that computational artefacts exercise in society (Diakopoulos 2015: 398)

有时被称为“算法问责新闻报道”。这并不意味着我们期望人工智能“解释其推理”-这需要比我们目前赋予人工智能系统更严肃的道德自主性（见下文§2.10）。

政治家亨利·基辛格指出，如果我们依赖于一个被认为优于人类但无法解释其决策的系统，那么对于民主决策来说存在一个根本问题。他说我们可能“创造了一种潜在的主导技术，却缺乏指导性的哲学”（基辛格 2018 年）。Danaher（2016b）将这个问题称为“算法统治的威胁”（采用了 Aneesh 2002 [OIR]，2006 年的先前使用）。在类似的观点中，Cave（2019 年）强调我们需要更广泛的社会运动，以实现更多“民主”的决策，以避免人工智能成为导致卡夫卡式难以渗透的压制系统在公共行政和其他领域。这个讨论的政治角度已经被 O'Neil 在她有影响力的书《数学毁灭的武器》（2016 年）中强调，以及由 Yeung 和 Lodge（2019 年）提出。

在欧盟，一些这些问题已经在（欧盟法规 2016/679）中得到考虑，该法规预见到，当消费者面临基于数据处理的决策时，他们将拥有合法的“解释权”-这在多大程度上以及在多大程度上可以强制执行存在争议（Goodman 和 Flaxman 2017; Wachter，Mittelstadt 和 Floridi 2016; Wachter，Mittelstadt 和 Russell 2017）。Zerilli 等人（2019 年）认为，在这里可能存在双重标准，即我们要求机器决策提供高水平的解释，尽管人类有时未达到这一标准。

### 2.4 决策系统中的偏见

自动化的 AI 决策支持系统和“预测分析”在数据上操作并产生“输出”决策。这个输出可能从相对琐碎到非常重要： “这家餐厅符合您的偏好”，“这个 X 光片上的患者已经完成骨骼生长”，“信用卡申请被拒绝”，“捐赠器官将会给另一个患者”，“拒绝保释”，或者“目标已被确认并参与”。数据分析经常在商业、医疗保健和其他领域中用于“预测分析”，以预见未来的发展——因为预测更容易，它也将成为一种更便宜的商品。预测的一个用途是“预测性执法”（NIJ 2014 [OIR]），许多人担心这可能会削弱公共自由（Ferguson 2017），因为它可能夺走了被预测行为的人们的权力。然而，似乎许多关于执法的担忧依赖于未来主义的情景，即执法机关预见并惩罚计划中的行动，而不是等到犯罪发生后再采取行动（就像 2002 年的电影《少数派报告》中那样）。一个担忧是这些系统可能会延续已经存在于用于建立系统的数据中的偏见，例如通过增加在某个地区的警务巡逻并在该地区发现更多犯罪。实际的“预测性执法”或“情报导向执法”技术主要涉及警察部队最需要在哪里和何时的问题。此外，警察可以获得更多数据，为他们提供更多控制并促进更好的决策，例如工作流支持软件（例如“ArcGIS”）。这是否成为问题取决于对这些系统技术质量的适当信任水平，以及对警察工作目标的评估。也许最近的一篇论文标题指出了正确的方向：“预测性执法中的 AI 伦理：从威胁模型到关怀伦理”（Asaro 2019）。

偏见通常在不公平的判断出现时表现出来，因为做出判断的个体受到了与事实无关的特征的影响，通常是对某个群体成员的歧视性先入之见。因此，一种形式的偏见是一个人学习到的认知特征，通常不是明确表达的。相关人员可能没有意识到自己有这种偏见，甚至可能坦率地明确反对他们发现自己有的偏见（例如，通过启动，参见 Graham 和 Lowery 2004）。关于机器学习中的公平与偏见，请参见 Binns（2018）。

除了学习偏见的社会现象之外，人类的认知系统通常容易产生各种“认知偏见”，例如“确认偏见”：人们倾向于将信息解释为证实他们已有的信念。这第二种形式的偏见通常被认为会妨碍理性判断的表现（Kahnemann 2011）-尽管至少一些认知偏见会产生进化优势，例如对直觉判断的资源经济利用。关于 AI 系统是否能够或应该具有这种认知偏见存在疑问。

第三种偏见形式存在于数据中，当数据表现出系统性错误时，例如“统计偏见”。严格来说，任何给定的数据集只对一种问题是无偏的，因此创建数据集本身就存在危险，可能会被用于其他类型的问题，并且结果可能对该问题存在偏见。基于这种数据的机器学习不仅无法识别偏见，还会将“历史偏见”编码和自动化。亚马逊的一个自动化招聘筛选系统（于 2017 年停用）发现存在这种历史偏见，该系统歧视女性，可能是因为该公司在招聘过程中存在歧视女性的历史。发现“惩教罪犯管理替代制裁”（COMPAS）系统，该系统用于预测被告是否会再次犯罪，其准确率与一组随机人类（Dressel 和 Farid 2018）相当（65.2%），并且对黑人被告产生更多的假阳性和较少的假阴性。这类系统的问题在于偏见加上人类对系统的过度信任。美国的这类自动化系统的政治维度在 Eubanks（2018）中进行了调查。

目前有重要的技术努力来检测和消除人工智能系统中的偏见，但可以说这些努力还处于早期阶段：参见英国伦理人工智能与机器学习研究所（Brownsword、Scotford 和 Yeung 2017；Yeung 和 Lodge 2019）。似乎技术修复的局限性在于它们需要数学上的公平概念，而这很难实现（Whittaker 等人 2018：24ff；Selbst 等人 2019），正如“种族”的正式概念也很难界定（参见 Benthall 和 Haynes 2019）。一个机构提议在（Veale 和 Binns 2017）中提出。

### 2.5 人机交互

人机交互（HRI）是一门独立的学术领域，现在越来越关注伦理问题，双方感知的动态以及社会背景的复杂性和不同利益的存在，包括合作工作（例如，Arnold 和 Scheutz 2017）。关于机器人伦理学的有用调查包括 Calo，Froomkin 和 Kerr（2016）；Royakkers 和 van Est（2016）；Tzafestas（2016）；一本标准的论文集是 Lin，Abney 和 Jenkins（2017）。

尽管人工智能可以用来操纵人类相信和做事情（见第 2.2 节），但它也可以用来驱动机器人，如果它们的过程或外观涉及欺骗，威胁人的尊严，或违反康德的“尊重人性”的要求，那么这些机器人就会成为问题。人类很容易将心理属性归因于物体，并与之产生共鸣，特别是当这些物体的外观与生物相似时。这可以用来欺骗人类（或动物），使他们将更多的智力甚至情感意义归因于机器人或人工智能系统。在这方面，一些人形机器人的部分是有问题的（例如，石黑浩的遥控 Geminoids），并且有一些明显是为了公关目的而具有欺骗性的案例（例如，关于 Hanson Robotics 的“Sophia”的能力）。当然，商业伦理和法律的一些相当基本的限制也适用于机器人：产品安全和责任，或者在广告中不欺骗。看起来这些现有的限制已经解决了许多提出的问题。然而，有些情况下，人与人之间的互动具有特定的人类方式，也许无法由机器人取代：关怀、爱和性。

#### 2.5.1 示例（a）护理机器人

在人类医疗保健中使用机器人目前仅处于概念研究阶段，但在未来几年可能成为一项可用技术，并引发了对无人化护理的反乌托邦未来的一系列担忧（A. Sharkey 和 N. Sharkey 2011; Robert Sparrow 2016）。目前的系统包括支持人类护理者的机器人（例如，抬举病人或运输物品的机器人），使病人能够自己完成某些事情的机器人（例如，用机械臂进食），以及作为陪伴和安慰给予病人的机器人（例如，“Paro”机器人海豹）。有关概述，请参阅 van Wynsberghe（2016）；Nørskov（2017）；Fosch-Villaronga 和 Albo-Canals（2019），有关用户调查，请参阅 Draper 等人（2014）。

关于关怀问题引起关注的一个原因是人们认为在老龄化社会中我们将需要机器人。这个论点存在问题的假设，即随着寿命的延长，人们将需要更多的关怀，并且无法吸引更多的人从事关怀职业。它可能还显示了对年龄的偏见（Jecker 即将发表）。最重要的是，它忽视了自动化的本质，自动化不仅仅是替代人类，而是让人类更高效地工作。目前并不清楚这里是否真的存在问题，因为讨论主要集中在担心机器人使关怀失去人性，但实际上和可预见的关怀机器人是用于经典技术任务自动化的辅助机器人。因此，它们在行为上只是在关怀环境中执行任务的“关怀机器人”，而不是像人类一样“关心”病人。似乎“被关心”的成功依赖于这种有意识的“关怀”意义，可预见的机器人无法提供。如果有什么，关怀机器人的风险就是缺乏这种有意识的关怀，因为可能需要更少的人类关怀者。有趣的是，关心某物，甚至是虚拟代理，对关心者本身是有益的（Lee 等，2019）。假装关心的系统将是具有欺骗性的，因此存在问题，除非欺骗性被足够大的效用增益所抵消（Coeckelbergh，2016）。一些假装在基本层面上“关心”的机器人已经可用（Paro 海豹），其他机器人正在制造中。也许在某种程度上感觉到机器人的关心对于某些患者来说是进步的。

#### 2.5.2 示例（b）性机器人

一些科技乐观主义者认为，人类很可能对与机器人的性和伴侣关系感兴趣，并对这个想法感到舒适（Levy 2007）。考虑到人类性偏好的多样性，包括性玩具和性娃娃，这似乎非常可能：问题是是否应该制造和推广这些设备，以及在这个敏感领域是否应该设定限制。最近，“机器人哲学”似乎已经进入主流（Sullins 2012; Danaher and McArthur 2017; N. Sharkey et al. 2017 [OIR]; Bendel 2018; Devlin 2018）。

人类长期以来对物体有着深厚的情感依恋，因此与可预测的机器人建立伴侣关系甚至爱情可能具有吸引力，尤其是对那些与真实人类相处困难、已经更喜欢狗、猫、鸟、电脑或数码宠物的人来说。Danaher（2019b）反对（Nyholm and Frank 2017）这些可能是真正的友谊，因此是一个有价值的目标。即使缺乏深度，这样的友谊似乎可能增加整体效用。在这些讨论中存在一个欺骗的问题，因为机器人（目前）不能表达其真实意图，也不能对人类产生感情。众所周知，人类往往会将感情和思想归因于表现得像有感知能力的实体，甚至是明显无行为的非生物物体。此外，为欺骗付费似乎是传统性产业的一个基本部分。

最后，人们常常对性问题有一些担忧，即同意（Frank 和 Nyholm 2017），审美问题以及人类可能会被某些经历“腐化”。尽管这种观点似乎有点过时，但人类行为受经验影响，很可能色情或性机器人支持将其他人视为纯粹的欲望对象，甚至是虐待的对象，从而破坏了更深层次的性和情欲体验。在这方面，“反对性机器人运动”认为这些设备是奴隶制和卖淫的延续（Richardson 2016）。

### 2.6 自动化和就业

显然，人工智能和机器人技术将带来显著的生产力增长，从而增加整体财富。提高生产力的尝试通常是经济的一个特征，尽管“增长”强调是现代现象（Harari 2016: 240）。然而，通过自动化实现的生产力增长通常意味着同样的产出所需的人力减少。然而，这并不一定意味着整体就业的减少，因为可用的财富增加，这可以增加足够的需求来抵消生产力的增长。从长远来看，工业社会的生产力提高导致整体财富增加。过去曾发生过重大的劳动力市场扰动，例如，1800 年农业在欧洲和北美雇佣了超过 60%的劳动力，而到 2010 年，欧盟的农业就业人数约为 5%，在最富裕的国家甚至更少（欧洲委员会 2013 年）。在 1950 年至 1970 年的 20 年间，英国雇佣的农业工人数量减少了 50%（Zayed 和 Loft 2019）。其中一些扰动导致更多的劳动密集型产业转移到劳动力成本较低的地方。这是一个持续进行的过程。

经典自动化取代了人类的肌肉，而数字自动化则取代了人类的思维或信息处理——与物理机器不同，数字自动化非常廉价易复制（Bostrom 和 Yudkowsky 2014）。因此，它可能对劳动力市场产生更为激进的变革。因此，主要问题是：这一次效果会有所不同吗？新的工作岗位和财富的创造能否跟得上工作的破坏？即使没有不同，过渡成本是多少，由谁承担？我们是否需要进行社会调整，以公平分配数字自动化的成本和利益？

对于人工智能引起的失业问题的回应从警惕（Frey 和 Osborne 2013; Westlake 2014）到中立（Metcalf，Keller 和 Boyd 2016 [OIR]; Calo 2018; Frey 2019）再到乐观（Brynjolfsson 和 McAfee 2016; Harari 2016; Danaher 2019a）不等。原则上，自动化对劳动力市场的影响似乎已经相当清楚，涉及两个渠道：

> （i）不同技能工人与新技术之间的互动性质影响劳动力需求，以及（ii）技术进步通过劳动力供应和产品市场的相应变化产生的均衡效应。（Goos 2018: 362）

目前在劳动力市场上，由于人工智能和机器人自动化的影响，出现了“职位极化”或“哑铃”形状（Goos、Manning 和 Salomons 2009）：高技能技术工作需求量大且薪酬高，低技能服务工作需求量大但薪酬低，而工厂和办公室的中等资格工作，即大部分工作，由于相对可预测且最有可能被自动化（Baldwin 2019），正面临压力和减少。

也许巨大的生产力增长将使“休闲时代”成为现实，这是（Keynes 1930）预测将在 2030 年左右发生的，假设年增长率为 1%。实际上，我们已经达到了他预计的 2030 年水平，但我们仍在工作-消费更多并发明更多层次的组织。哈拉里解释了这种经济发展如何使人类克服了饥饿、疾病和战争-现在我们通过人工智能追求永生和永恒的幸福，因此他的书名是《上帝之人》（Harari 2016: 75）。

一般来说，失业问题是一个关于社会商品如何公正分配的问题。一个标准观点是，分配正义应该在“无知的面纱”（Rawls 1971）后面理性地决定，即假设一个人不知道自己在社会中实际上会处于什么位置（劳工或实业家等）。Rawls 认为，选择的原则将支持基本自由和对社会中最不利成员最有利的分配。人工智能经济似乎具有三个特点，使得这种正义变得不太可能：首先，它在一个基本上没有监管的环境中运作，责任往往很难分配。其次，它在具有“赢者通吃”特征的市场中运作，垄断迅速形成。第三，数字服务行业的“新经济”是基于无形资产，也被称为“无资本主义”（Haskel 和 Westlake 2017）。这意味着很难控制不依赖于特定地点的物理设施的跨国数字公司。这三个特点似乎表明，如果我们将财富分配留给自由市场力量，结果将是一种极不公正的分配：这确实是我们已经看到的发展。

一个没有得到太多关注的有趣问题是人工智能的发展是否具有环境可持续性：与所有计算系统一样，人工智能系统产生的废物很难回收利用，而且它们消耗大量能源，尤其是用于机器学习系统的训练（甚至用于“挖掘”加密货币）。同样，似乎有些参与者将这些成本转嫁给了整个社会。

### 2.7 自主系统

在讨论自主系统时，存在几种自主性概念。在哲学辩论中，自主性是责任和人格的基础的一个更强的概念（克里斯特曼 2003 [2018]）。在这种情况下，责任意味着自主性，但反之则不然，因此可能存在具有技术自主性程度的系统，而不涉及责任问题。机器人学中更弱、更技术性的自主性概念是相对和渐进的：一个系统被认为在一定程度上相对于人类控制是自主的（穆勒 2012）。这里与 AI 中的偏见和不透明性问题存在类似之处，因为自主性也涉及权力关系：谁在控制，谁负责？

一般来说，一个问题是自主机器人引发了我们现有概念体系必须适应的程度，还是只需要技术调整。在大多数司法管辖区，有一个复杂的民事和刑事责任制度来解决这些问题。技术标准，例如医疗环境中安全使用机械的标准，可能需要进行调整。已经存在一个“可验证的 AI”领域，用于这种安全关键系统和“安全应用”。像 IEEE（电气和电子工程师学会）和 BSI（英国标准协会）这样的机构已经制定了“标准”，特别是在更多技术子问题上，如数据安全和透明度。在陆地、水下、水下、空中或太空中的众多自主系统中，我们讨论两个样本：自主车辆和自主武器。

#### 2.7.1 示例（a）自主车辆

自动驾驶车辆有望减少目前人类驾驶所造成的巨大损害，每年约有 100 万人死亡，更多人受伤，环境受到污染，地球被混凝土和柏油封闭，城市停满了汽车等等。然而，关于自动驾驶车辆应该如何行驶以及责任和风险在复杂的系统中如何分配，似乎存在一些问题。（对于完全自动化或“5 级”汽车（SAE International 2018）的开发需要多长时间，也存在着相当大的分歧。）

在这个背景下，对“电车难题”进行了一些讨论。在经典的“电车难题”中（Thomson 1976; Woollard and Howard-Snyder 2016: section 2），提出了各种困境。最简单的版本是指一辆行驶在轨道上的电车，正朝着五个人行驶，如果不改变轨道，它们将会被撞死，但如果将电车转向另一条轨道，那边有一个人，他将会被撞死。这个例子可以追溯到（Foot 1967: 6）中的一句话，他在其中讨论了一些行为的容忍和意图后果不同的困境案例。“电车难题”并不是用来描述实际的伦理问题或通过“正确”选择来解决的。相反，它们被视为思想实验，其中选择被人为地限制在有限的几个明确的一次性选项上，并且行为体具有完美的知识。这些问题被用作研究伦理直觉和理论的理论工具，特别是主动做某事与允许某事发生、意图后果与容忍后果以及后果主义与其他规范方法之间的差异（Kamm 2016）。这类问题让许多人想起了实际驾驶和自动驾驶中遇到的问题（Lin 2016）。然而，实际上，司机或自动驾驶汽车可能永远不需要解决电车难题（但参见 Keeling 2020）。虽然自动驾驶汽车的电车难题受到了很多媒体的关注（Awad et al. 2018），但它们似乎对伦理理论或自动驾驶车辆的编程并没有提供任何新的东西。

驾驶中更常见的伦理问题，如超速、冒险超车、不保持安全距离等，都是追求个人利益与公共利益之间的经典问题。其中绝大部分都受到了驾驶法规的约束。将汽车编程为“按规则行驶”而不是“按乘客的利益”或“实现最大效用”，因此被降级为编程伦理机器的标准问题（见第 2.9 节）。可能还有一些礼貌的自由裁量规则和有趣的问题，例如何时打破规则（Lin 2016），但这似乎又是将标准考虑因素（规则与效用）应用于自动驾驶车辆的情况。

在这个领域，值得注意的政策努力包括报告（德国交通和数字基础设施部 2017 年）强调安全是首要目标。第 10 条规定

> 在自动化和互联驾驶系统的情况下，以前由个体承担的责任转移到了技术系统的制造商和运营商，以及负责基础设施、政策和法律决策的机构。

（见下面的 2.10.1 节）。德国和欧盟关于许可自动驾驶的法律要比美国的法律更加严格，其中一些公司采用“在消费者身上进行测试”的策略，而没有得到消费者或可能的受害者的知情同意。

#### 2.7.2 示例（b）自主武器

自动武器的概念相当古老：

> 例如，我们可以发射完全自主的陆地、海洋和空中载具，能够进行复杂的、广泛的侦察和攻击任务，而不是使用简单的制导导弹或遥控飞行器。（DARPA 1983: 1）

当时，这个提议被嘲笑为“幻想”（Dreyfus, Dreyfus, and Athanasiou 1986: ix），但现在它已经成为现实，至少对于更容易识别的目标（导弹、飞机、船只、坦克等），但对于人类战斗人员来说不是。对（致命的）自主武器系统（AWS 或 LAWS）的主要反对观点是，它们支持非法杀戮，剥夺了人类的责任，并增加了战争或杀戮的可能性 - 有关问题的详细列表请参见 Lin，Bekey 和 Abney（2008: 73-86）。

降低使用这种系统（自主载具，“发射即忘”导弹或装有爆炸物的无人机）的门槛，减少被追究责任的可能性，似乎会增加使用这些系统的可能性。在遥控武器的常规无人机战争中（例如美国在巴基斯坦的行动），已经存在一种关键的不对称性，即一方可以无罪杀人，因此几乎没有理由不这样做。很容易想象一种小型无人机，它可以搜索、识别和杀死一个人，或者可能是某种类型的人。这些是由“停止杀人机器人”运动和其他活动团体提出的案例。有些案例似乎等同于说自主武器确实是武器...，而武器是杀人的，但我们仍然大量生产它们。关于追究责任的问题，自主武器可能会使确定和起诉负责人更加困难 - 但这并不清楚，至少在常规战争中可以保留数字记录。分配惩罚的困难有时被称为“报复差距”（Danaher 2016a）。

另一个问题是在战争中使用自主武器是否会使战争变得更糟，或者使战争变得不那么糟。如果机器人能减少战争罪行和战争中的犯罪行为，答案可能是肯定的，并且已被用作支持这些武器的论据（Arkin 2009; Müller 2016a），但也被用作反对它们的论据（Amoroso 和 Tamburrini 2018）。可以说，主要威胁不是在常规战争中使用这种武器，而是在非对称冲突或非国家行为体，包括犯罪分子中使用。

还有人说自主武器无法遵守国际人道法，该法要求在军事冲突中遵守区分（战斗人员和平民之间的区别）、比例（武力的比例）和军事必要性（武力的必要性）的原则（A. Sharkey 2019）。诚然，战斗人员和非战斗人员之间的区别很难，但平民和军舰之间的区别很容易——所以这一切只是说，如果这些武器确实违反人道法，我们就不应该制造和使用这样的武器。还有人提出了其他担忧，即被自主武器杀害会威胁人的尊严，但即使是这些武器禁令的支持者似乎也说这些不是好的论据：

> 还有其他武器和其他技术也会损害人的尊严。鉴于这一点，以及概念本身的模糊性，更明智的做法是在反对自主武器系统的论证中引用几种不同类型的反对意见，而不仅仅依赖于人的尊严。（A. Sharkey 2019）

对于在军事武器指导中保持人类“在循环中”或“在循环上”的重要性已经引起了很多讨论 - 这些拼写出“有意义的控制”的方式在（Santoni de Sio 和 van den Hoven 2018）中进行了讨论。关于为自主武器的杀戮分配责任的困难已经有所讨论，并且提出了“责任差距”（尤其是 Rob Sparrow 2007），意味着既不是人类也不是机器可能负责。另一方面，我们并不假设对于每个事件都有某个人负责，而真正的问题可能是风险的分配（Simpson 和 Müller 2016）。风险分析（Hansson 2013）表明，确定谁面临风险，谁是潜在受益者以及谁做出决策是至关重要的（Hansson 2018：1822-1824）。

### 2.8 机器伦理

机器伦理是为机器而设的伦理，是为“伦理机器”，是为机器作为主体而不是为人类使用机器作为客体的伦理。通常不太清楚这是否应该涵盖所有的 AI 伦理或者是其中的一部分（Floridi 和 Saunders 2004；Moor 2006；Anderson 和 Anderson 2011；Wallach 和 Asaro 2017）。有时候看起来好像有一个（可疑的）推理在这里起作用，即如果机器以伦理相关的方式行动，那么我们就需要机器伦理。因此，有些人使用了更广泛的概念：

> 机器伦理关注确保机器对人类用户以及可能对其他机器的行为在伦理上是可接受的。（安德森和安德森 2007：15）

这可能包括仅仅涉及产品安全的事项，例如。其他作者听起来相当雄心勃勃，但使用了一个更狭窄的概念：

> AI 推理应该能够考虑到社会价值观、道德和伦理考虑因素；权衡不同利益相关者在各种多元文化背景中所持价值观的优先级；解释其推理过程；并保证透明度。（Dignum 2018：1, 2）

机器伦理的讨论中，有一种非常重要的假设，即机器在某种意义上可以成为对其行为负责的伦理行为体，或者称为“自主道德行为体”（见 van Wynsberghe 和 Robbins 2019）。机器伦理的基本思想现在正在实际机器人技术中得到应用，通常不会认为这些机器在任何实质意义上都是人工道德行为体（Winfield 等人 2019）。有时候会观察到，一个被编程遵循伦理规则的机器人很容易被修改为遵循非伦理规则（Vanderelst 和 Winfield 2018）。

机器伦理可能采取“法律”的形式的想法已经被艾萨克·阿西莫夫（Isaac Asimov）进行了著名的研究，他提出了“机器人三定律”（Asimov 1942）：

> 第一定律——机器人不得伤害人类，也不得通过不作为使人类受到伤害。第二定律——机器人必须服从人类的命令，除非这些命令与第一定律冲突。第三定律——机器人必须保护自己的存在，只要这种保护不与第一或第二定律冲突。

阿西莫夫随后在一系列故事中展示了这三个法则之间的冲突如何使它们在使用上变得棘手，尽管它们有着层次化的组织。

目前尚不清楚是否存在一致的“机器伦理”概念，因为较弱的版本有可能将“拥有伦理”降低为通常不被认为足够的概念（例如，没有“反思”甚至没有“行动”）；而更强的概念则可能描述了一个目前为空的集合，即人工道德代理。

### 2.9 人工道德代理

如果将机器伦理视为关注道德行为体的话，在某种实质意义上，这些行为体可以被称为“人工道德行为体”，具有权利和责任。然而，关于人工实体的讨论挑战了伦理学中的许多常见概念，从人类案例中抽象出来可以非常有用（参见 Misselhorn 2020; Powers 和 Ganascia 即将出版）。

几位作者在较为宽松的意义上使用“人工道德行为体”，借鉴了软件工程中“行为体”一词的用法，此时责任和权利的问题将不会出现（Allen，Varner 和 Zinser 2000）。James Moor（2006）区分了四种类型的机器行为体：道德影响行为体（例如，机器人骑师），隐含道德行为体（例如，安全自动驾驶），显性道德行为体（例如，使用形式化方法估计效用），以及完全道德行为体（能够“做出明确的道德判断，并且通常有能力合理地证明它们。一个普通成年人是一个完全道德行为体。”）。已经提出了几种实现“显性”或“完全”道德行为体的方法，通过编程（操作性道德），通过“发展”伦理学本身（功能性道德），以及具有完全智能和感知能力的完全道德（Allen，Smit 和 Wallach 2005; Moor 2006）。编程代理有时不被认为是“完全”代理，因为它们“能力强大但没有理解力”，就像大脑中的神经元一样（Dennett 2017; Hakli 和 Mäkelä 2019）。

在一些讨论中，“道德患者”的概念起着重要作用：伦理行为体有责任，而伦理患者有权利，因为对他们的伤害是重要的。显然，有些实体是患者而不是行为体，例如，能感受痛苦但不能做出合理选择的简单动物。另一方面，通常认为所有行为体也将成为患者（例如，在康德的框架下）。通常，成为一个人被认为是使一个实体成为负责任的行为体的原因，一个能够承担义务并成为伦理关注对象的人。这样的人格通常是与现象意识、意图和自由意志相关联的深层概念（Frankfurt 1971；Strawson 1998）。Torrance（2011）提出“人工（或机器）伦理可以被定义为设计机器来做那些当人类做时表明这些人具有‘伦理地位’的事情”（2011：116）——他认为这是“伦理生产力和伦理接受能力”（2011：117）——他对道德行为体和患者的表达方式。

#### 2.9.1 对机器人的责任

广泛共识认为，在面对新技术时，问责、责任和法治是必须维护的基本要求（European Group on Ethics in Science and New Technologies 2018, 18），但在机器人的情况下，问题是如何做到这一点以及如何分配责任。如果机器人行动，它们本身会对自己的行为负责、承担责任或追究责任吗？或者在讨论责任之前，风险的分配是否更为重要？

责任的传统分配已经存在：汽车制造商负责汽车的技术安全，驾驶员负责驾驶，机械师负责适当的维护，公共机构负责道路的技术状况等。总的来说，

> 基于人工智能的决策或行动的影响往往是许多参与者之间无数次互动的结果，包括设计师、开发人员、用户、软件和硬件...随着分布式行为体的出现，责任也分散了。（Taddeo 和 Floridi 2018: 751）。

这种分配方式的实现并不是人工智能特有的问题，但在这个背景下，它变得尤为紧迫（Nyholm 2018a，2018b）。在经典控制工程中，分布式控制通常通过控制层次结构加上这些层次结构之间的控制回路来实现。

#### 2.9.2 机器人的权利

一些作者指出，是否应该认真考虑是否应该给予当前的机器人权利（Gunkel 2018a, 2018b; Danaher forthcoming; Turner 2019）。这个立场似乎主要依赖于对反对者的批评以及对机器人和其他非人类被视为具有权利的经验观察。在这方面，提出了一个“关系转向”的观点：如果我们将机器人视为具有权利，那么我们可能最好不要去探究他们是否“真正”拥有这些权利（Coeckelbergh 2010, 2012, 2018）。这引发了一个问题，这种反实在论或准实在论可以走多远，以及在以人为中心的方法中说“机器人有权利”意味着什么（Gerdes 2016）。在辩论的另一方面，Bryson 坚持认为机器人不应该享有权利（Bryson 2010），尽管她认为这是可能的（Gunkel and Bryson 2014）。

是否应该将机器人（或其他 AI 系统）赋予“法律主体”或“法人”的地位是一个完全不同的问题，就像自然人、国家、企业或组织一样，它们都是“实体”，即它们可以拥有法律权利和义务。欧洲议会曾考虑将这种地位分配给机器人，以处理民事责任（EU Parliament 2016; Bertolini and Aiello 2018），但不包括刑事责任，刑事责任是保留给自然人的。也可以只给机器人分配一定的权利和义务子集。有人说，“这样的立法行动在道德上是不必要的，法律上也会引起麻烦”，因为它不符合人类的利益（Bryson, Diamantis, and Grant 2017: 273）。在环境伦理学中，长期以来一直存在关于给予树木等自然物体法律权利的讨论（C. D. Stone 1972）。

也有人说，未来开发具有权利或人工道德患者身份的机器人的原因在伦理上是值得怀疑的（van Wynsberghe 和 Robbins 2019）。在“人工意识”研究者社区中，人们非常关注是否在伦理上创造这种意识是合适的，因为创造它可能意味着对有感知能力的生物有伦理义务，例如不伤害它，不通过关闭它来终结它的存在 - 一些作者呼吁对“合成现象学”实施“停止令”（Bentley 等人 2018：28f）。

### 2.10 单一性

#### 2.10.1 单一性和超级智能

在某些领域，当前人工智能的目标被认为是“人工通用智能”（AGI），与技术或“狭义”人工智能相对。AGI 通常与传统的人工智能概念区分开来，作为一个通用目的系统，并与西尔的“强人工智能”概念区分开来：

> 给予正确的程序，计算机可以被认为真正理解并具有其他认知状态。（西尔，1980 年：417）

奇点的概念是，如果人工智能的轨迹达到了具有人类水平智能的系统，那么这些系统本身将具备开发超越人类水平智能的人工智能系统的能力，即它们是“超级智能”的（见下文）。这样的超级智能人工智能系统将迅速自我改进或开发出更加智能的系统。在达到超级智能人工智能之后，这种事件的急剧转变是“奇点”，从而使人工智能的发展超出人类的控制，并且难以预测（库兹韦尔，2005 年：487）。

“我们创造的机器人将掌控世界”的恐惧甚至在计算机出现之前就已经引起了人类的想象（例如，巴特勒 1863 年），并且是奇佩克著名戏剧的中心主题，该戏剧引入了“机器人”一词（奇佩克 1920 年）。这种恐惧首次被艾文·古德（Irvin Good）提出，作为现有人工智能可能进入“智能爆炸”的轨迹：

> 让超级智能机器被定义为一种可以远远超越任何聪明人的智力活动的机器。由于机器的设计是这些智力活动之一，超级智能机器甚至可以设计出更好的机器；那么无疑会出现“智能爆炸”，人类的智能将远远落后。因此，第一台超级智能机器是人类需要制造的最后一项发明，前提是机器足够温顺，可以告诉我们如何控制它。（Good 1965: 33）

从加速到奇点的乐观论证由库兹韦尔（Kurzweil）（1999 年，2005 年，2012 年）详细阐述，他基本上指出，计算能力一直以指数方式增长，即自 1970 年以来，根据“摩尔定律”（关于晶体管数量）每两年翻一番，而且在未来一段时间内将继续如此。他在（Kurzweil 1999）中预测，到 2010 年，超级计算机将达到人类计算能力，到 2030 年，“思维上传”将成为可能，到 2045 年将发生“奇点”。库兹韦尔谈到了一种可以以给定成本购买的计算能力的增加，但当然，近年来 AI 公司可用的资金也大幅增加：Amodei 和 Hernandez（2018 [OIR]）因此估计，在 2012 年至 2018 年期间，用于训练特定 AI 系统的实际计算能力每 3.4 个月翻一番，导致增加了 300,000 倍，而不是每两年翻 7 倍的增长。

这个论点的一个常见版本（Chalmers 2010）谈到的是人工智能系统的“智能”增加（而不是原始计算能力），但“奇点”的关键点仍然是人工智能的进一步发展被人工智能系统接管并超越人类水平的那个点。Bostrom（2014）详细解释了在那一点会发生什么以及对人类的风险是什么。这个讨论在 Eden 等人（2012）；Armstrong（2014）；Shanahan（2015）中有总结。除了计算能力的增加之外，还有其他通往超级智能的可能途径，例如在计算机上完全模拟人脑（Kurzweil 2012；Sandberg 2013），生物途径，或者网络和组织（Bostrom 2014：22-51）。

尽管在将“智能”与处理能力等同起来的认定中存在明显的弱点，但 Kurzweil 似乎是对的，人类往往低估了指数增长的力量。小测试：如果你以每步是前一步的两倍的方式行走，从一米的步伐开始，经过 30 步你会走多远？（答案：几乎比地球上唯一的永久天然卫星走得更远。）的确，人工智能的大部分进展可以归因于处理器速度的可用性的巨大提升，更大的存储空间和更高的投资（Müller 2018）。实际的加速和速度在（Müller 和 Bostrom 2016；Bostrom，Dafoe 和 Flynn 即将出版）中有讨论；Sandberg（2019）认为进展将会持续一段时间。

这场辩论的参与者都是科技爱好者，他们希望科技能够快速发展并带来广泛的欢迎变革，但除此之外，他们分为关注利益的人（例如库兹韦尔）和关注风险的人（例如博斯特罗姆）。两派都赞同“超人类”对人类以不同的物理形式存活的观点，例如上传到计算机上（Moravec 1990, 1998; Bostrom 2003a, 2003c）。他们还考虑了“人类增强”在各个方面的前景，包括智能，通常被称为“IA”（智能增强）。未来的人工智能可能被用于人类增强，或进一步促使人类单一定义的人格的解体。罗宾·汉森对于如果人类“脑仿真”使得真正智能的机器人或“ems”成为可能，经济上会发生什么提供了详细的推测（Hanson 2016）。

从超级智能到风险的论证需要假设超级智能并不意味着善意，这与康德伦理学传统的观点相反，后者认为更高水平的理性或智能将伴随着对道德的更好理解和更好的道德行为能力（Gewirth 1978; Chalmers 2010: 36f）。关于超级智能风险的论证认为理性和道德是完全独立的维度，有时被明确地称为“正交性论题”（Bostrom 2012; Armstrong 2013; Bostrom 2014: 105–109）。

从各个角度提出了对奇点叙事的批评。库兹韦尔和博斯特罗姆似乎假设智能是一个一维属性，并且智能体的集合在数学意义上是完全有序的，但他们的书中都没有详细讨论智能。总的来说，可以说尽管有一些努力，但超级智能和奇点强大叙事中所做的假设并没有得到详细的调查。一个问题是这样的奇点是否会发生——它可能在概念上是不可能的，实际上是不可能的，或者可能不会发生，因为包括人们积极阻止在内的偶然事件。从哲学上讲，有趣的问题是奇点是否只是一个“神话”（弗洛里迪 2016 年；加纳西亚 2017 年），而不是实际人工智能研究的轨迹。这是从业者经常假设的（例如，布鲁克斯 2017 年[OIR]）。他们这样做可能是因为他们担心公共关系的反弹，因为他们高估了实际问题，或者因为他们有充分的理由认为超级智能不太可能是当前人工智能研究的结果（穆勒即将出版-a）。这个讨论引发了一个问题，即对“奇点”的关注是否只是基于人类恐惧的虚构人工智能的叙事。但即使有人发现负面原因令人信服，奇点不太可能发生，仍然有很大的可能性证明他们是错误的。哲学不是“科学的安全道路”（康德 1791 年：B15），人工智能和机器人技术也可能不是（穆勒 2020 年）。因此，即使有人认为奇点发生的概率非常低，讨论奇点的非常高影响风险也是有正当理由的。

#### 2.10.2 超级智能带来的存在风险

长期思考超级智能是否会导致人类物种灭绝的问题，这被称为“存在风险”（或 XRisk）：超级智能系统可能有与人类在地球上存在相冲突的偏好，因此可能决定终结人类的存在，并且由于其卓越的智能，他们有能力这样做（或者他们可能因为并不真的在乎而终结人类的存在）。

长期思考是这一文献的关键特征。无论奇点（或其他灾难性事件）发生在 30 年、300 年还是 3000 年后并不重要（Baum 等人，2019 年）。也许有一种天文模式，智能物种注定会在某个时刻发现人工智能，从而导致自己的灭亡。这样的“伟大过滤器”将有助于解释“费米悖论”，即尽管宇宙中出现生命的概率很高，但为什么没有生命的迹象。如果我们发现“伟大过滤器”在我们面前，而不是地球已经通过的障碍，那将是个坏消息。有时，这些问题被更狭义地视为关于人类灭绝（Bostrom，2013 年），或更广泛地涉及物种的任何重大风险（Rees，2018 年）-其中人工智能只是其中之一（Häggström，2016 年；Ord，2020 年）。Bostrom 还使用“全球灾难风险”这一类别来表示在“范围”和“严重性”这两个维度上足够高的风险（Bostrom 和Ćirković，2011 年；Bostrom，2013 年）。

这些关于风险的讨论通常与伦理学中的风险问题没有联系（例如，Hansson 2013，2018）。长期视角有其自己的方法论挑战，但已经产生了广泛的讨论：（Tegmark 2017）关注人工智能和人类生活在奇点之后的“3.0”时代，而 Russell，Dewey 和 Tegmark（2015）以及 Bostrom，Dafoe 和 Flynn（即将出版）调查了伦理人工智能的长期政策问题。一些论文集研究了人工通用智能（AGI）的风险以及可能使这一发展更具风险或风险较小的因素（Müller 2016b; Callaghan 等人 2017; Yampolskiy 2018），包括非代理人人工智能的发展（Drexler 2019）。

#### 2.10.3 控制超级智能？

从狭义上讲，“控制问题”是指我们人类如何在超级智能系统变得超级智能后仍然保持对其的控制（Bostrom 2014: 127ff）。从更广义上讲，这是一个问题，即我们如何确保人工智能系统在人类感知中是积极的（Russell 2019）；这有时被称为“价值对齐”。控制超级智能的难易程度在很大程度上取决于超级智能系统的“起飞”速度。这导致特别关注具有自我改进能力的系统，例如 AlphaZero（Silver 等人 2018）。

这个问题的一个方面是，我们可能会决定某个特定的特征是可取的，但后来发现它有意想不到的负面后果，以至于我们不再希望拥有这个特征。这是古老的米达斯国王的问题，他希望他触碰到的一切都变成黄金。这个问题已经在各种例子的情况下进行了讨论，比如“回形针最大化者”（博斯特罗姆 2003b）或优化国际象棋表现的程序（Omohundro 2014）。

关于超级智能的讨论包括对全知存在的猜测，对“末日”的彻底改变以及通过超越我们当前的肉体形态来实现永生的承诺，因此有时候它们具有明显的宗教色彩（Capurro 1993；Geraci 2008, 2010；O’Connell 2017: 160ff）。这些问题也提出了一个众所周知的认识论问题：我们能否了解全知的方式（Danaher 2015）？通常的反对者已经出现了：无神论者的典型回应是

> 人们担心计算机会变得太聪明并接管世界，但真正的问题是它们太愚蠢了，而且它们已经接管了世界（Domingos 2015）

新虚无主义者解释说，通过信息技术的“技术催眠”现在已成为我们从意义丧失中分散注意力的主要方法（Gertz 2018）。因此，双方都会说我们需要一种伦理来处理实际人工智能和机器人中出现的“小”问题（上述 2.1 至 2.9 节），而对于人工智能带来的存在风险的“大伦理”则需要的程度较小（第 2.10 节）。

## 3. 结论

因此，奇点再次引发了对人工智能概念的问题。令人注目的是，自从“达特茅斯夏季研究项目”（McCarthy 等人，1955 年[OIR]；Simon 和 Newell，1958 年）开始，想象力或“视野”一直在起着核心作用。而对这一愿景的评估则经历了戏剧性的变化：几十年间，我们从“人工智能是不可能的”（Dreyfus，1972 年）和“人工智能只是自动化”（Lighthill，1973 年）的口号，转变为“人工智能将解决所有问题”（Kurzweil，1999 年）和“人工智能可能会杀死我们所有人”（Bostrom，2014 年）。这引起了媒体的关注和公共关系的努力，但也引发了一个问题，即这种“人工智能的哲学和伦理”到底是关于人工智能还是关于一种想象中的技术。正如我们在开头所说，人工智能和机器人引发了关于我们应该如何处理这些系统、系统本身应该做什么以及它们在长期内存在的风险的根本问题。它们还挑战了人类作为地球上智慧和主导物种的观点。我们已经看到了被提出的问题，并将密切关注技术和社会发展，以及及早发现新问题、进行哲学分析并从传统哲学问题中学习。

## Bibliography

NOTE: Citations in the main text annotated “[OIR]” may be found in the [Other Internet Resources](https://plato.stanford.edu/entries/ethics-ai/#Oth) section below, not in the Bibliography.

* Abowd, John M, 2017, “How Will Statistical Agencies Operate When All Data Are Private?”, *Journal of Privacy and Confidentiality*, 7(3): 1–15. doi:10.29012/jpc.v7i3.404
* Allen, Colin, Iva Smit, and Wendell Wallach, 2005, “Artificial Morality: Top-down, Bottom-up, and Hybrid Approaches”, *Ethics and Information Technology*, 7(3): 149–155. doi:10.1007/s10676-006-0004-4
* Allen, Colin, Gary Varner, and Jason Zinser, 2000, “Prolegomena to Any Future Artificial Moral Agent”, *Journal of Experimental & Theoretical Artificial Intelligence*, 12(3): 251–261. doi:10.1080/09528130050111428
* Amoroso, Daniele and Guglielmo Tamburrini, 2018, “The Ethical and Legal Case Against Autonomy in Weapons Systems”, *Global Jurist*, 18(1): art. 20170012. doi:10.1515/gj-2017-0012
* Anderson, Janna, Lee Rainie, and Alex Luchsinger, 2018, *Artificial Intelligence and the Future of Humans*, Washington, DC: Pew Research Center.
* Anderson, Michael and Susan Leigh Anderson, 2007, “Machine Ethics: Creating an Ethical Intelligent Agent”, *AI Magazine*, 28(4): 15–26.
* ––– (eds.), 2011, *Machine Ethics*, Cambridge: Cambridge University Press. doi:10.1017/CBO9780511978036
* Aneesh, A., 2006, *Virtual Migration: The Programming of Globalization*, Durham, NC and London: Duke University Press.
* Arkin, Ronald C., 2009, *Governing Lethal Behavior in Autonomous Robots*, Boca Raton, FL: CRC Press.
* Armstrong, Stuart, 2013, “General Purpose Intelligence: Arguing the Orthogonality Thesis”, *Analysis and Metaphysics*, 12: 68–84.
* –––, 2014, *Smarter Than Us*, Berkeley, CA: MIRI.
* Arnold, Thomas and Matthias Scheutz, 2017, “Beyond Moral Dilemmas: Exploring the Ethical Landscape in HRI”, in *Proceedings of the 2017 ACM/IEEE International Conference on Human-Robot Interaction—HRI ’17*, Vienna, Austria: ACM Press, 445–452. doi:10.1145/2909824.3020255
* Asaro, Peter M., 2019, “AI Ethics in Predictive Policing: From Models of Threat to an Ethics of Care”, *IEEE Technology and Society Magazine*, 38(2): 40–53. doi:10.1109/MTS.2019.2915154
* Asimov, Isaac, 1942, “Runaround: A Short Story”, *Astounding Science Fiction*, March 1942. Reprinted in “I, Robot”, New York: Gnome Press 1950, 1940ff.
* Awad, Edmond, Sohan Dsouza, Richard Kim, Jonathan Schulz, Joseph Henrich, Azim Shariff, Jean-François Bonnefon, and Iyad Rahwan, 2018, “The Moral Machine Experiment”, *Nature*, 563(7729): 59–64. doi:10.1038/s41586-018-0637-6
* Baldwin, Richard, 2019, *The Globotics Upheaval: Globalisation, Robotics and the Future of Work*, New York: Oxford University Press.
* Baum, Seth D., Stuart Armstrong, Timoteus Ekenstedt, Olle Häggström, Robin Hanson, Karin Kuhlemann, Matthijs M. Maas, James D. Miller, Markus Salmela, Anders Sandberg, Kaj Sotala, Phil Torres, Alexey Turchin, and Roman V. Yampolskiy, 2019, “Long-Term Trajectories of Human Civilization”, *Foresight*, 21(1): 53–83. doi:10.1108/FS-04-2018-0037
* Bendel, Oliver, 2018, “Sexroboter aus Sicht der Maschinenethik”, in *Handbuch Filmtheorie*, Bernhard Groß and Thomas Morsch (eds.), (Springer Reference Geisteswissenschaften), Wiesbaden: Springer Fachmedien Wiesbaden, 1–19. doi:10.1007/978-3-658-17484-2_22-1
* Bennett, Colin J. and Charles Raab, 2006, *The Governance of Privacy: Policy Instruments in Global Perspective*, second edition, Cambridge, MA: MIT Press.
* Benthall, Sebastian and Bruce D. Haynes, 2019, “Racial Categories in Machine Learning”, in *Proceedings of the Conference on Fairness, Accountability, and Transparency - FAT* ’19*, Atlanta, GA, USA: ACM Press, 289–298. doi:10.1145/3287560.3287575
* Bentley, Peter J., Miles Brundage, Olle Häggström, and Thomas Metzinger, 2018, “Should We Fear Artificial Intelligence? In-Depth Analysis”, European Parliamentary Research Service, Scientific Foresight Unit (STOA), March 2018, PE 614.547, 1–40. [[Bentley et al. 2018 available online](https://op.europa.eu/en/publication-detail/-/publication/f27d7e2c-88a2-11e8-ac6a-01aa75ed71a1)]
* Bertolini, Andrea and Giuseppe Aiello, 2018, “Robot Companions: A Legal and Ethical Analysis”, *The Information Society*, 34(3): 130–140. doi:10.1080/01972243.2018.1444249
* Binns, Reuben, 2018, “Fairness in Machine Learning: Lessons from Political Philosophy”, *Proceedings of the 1st Conference on Fairness, Accountability and Transparency*, in *Proceedings of Machine Learning Research*, 81: 149–159.
* Bostrom, Nick, 2003a, “Are We Living in a Computer Simulation?”, *The Philosophical Quarterly*, 53(211): 243–255. doi:10.1111/1467-9213.00309
* –––, 2003b, “Ethical Issues in Advanced Artificial Intelligence”, in *Cognitive, Emotive and Ethical Aspects of Decision Making in Humans and in Artificial Intelligence, Volume 2*, Iva Smit, Wendell Wallach, and G.E. Lasker (eds), (IIAS-147-2003), Tecumseh, ON: International Institute of Advanced Studies in Systems Research and Cybernetics, 12–17. [[Botstrom 2003b revised available online](https://nickbostrom.com/ethics/ai.html)]
* –––, 2003c, “Transhumanist Values”, in *Ethical Issues for the Twenty-First Century*, Frederick Adams (ed.), Bowling Green, OH: Philosophical Documentation Center Press.
* –––, 2012, “The Superintelligent Will: Motivation and Instrumental Rationality in Advanced Artificial Agents”, *Minds and Machines*, 22(2): 71–85. doi:10.1007/s11023-012-9281-3
* –––, 2013, “Existential Risk Prevention as Global Priority”, *Global Policy*, 4(1): 15–31. doi:10.1111/1758-5899.12002
* –––, 2014, *Superintelligence: Paths, Dangers, Strategies*, Oxford: Oxford University Press.
* Bostrom, Nick and Milan M. Ćirković (eds.), 2011, *Global Catastrophic Risks*, New York: Oxford University Press.
* Bostrom, Nick, Allan Dafoe, and Carrick Flynn, forthcoming, “Policy Desiderata for Superintelligent AI: A Vector Field Approach (V. 4.3)”, in *Ethics of Artificial Intelligence*, S Matthew Liao (ed.), New York: Oxford University Press. [[Bostrom, Dafoe, and Flynn forthcoming – preprint available online](https://nickbostrom.com/papers/aipolicy.pdf)]
* Bostrom, Nick and Eliezer Yudkowsky, 2014, “The Ethics of Artificial Intelligence”, in *The Cambridge Handbook of Artificial Intelligence*, Keith Frankish and William M. Ramsey (eds.), Cambridge: Cambridge University Press, 316–334. doi:10.1017/CBO9781139046855.020 [[Bostrom and Yudkowsky 2014 available online](http://intelligence.org/files/EthicsofAI.pdf)]
* Bradshaw, Samantha, Lisa-Maria Neudert, and Phil Howard, 2019, “Government Responses to Malicious Use of Social Media”, Working Paper 2019.2, Oxford: Project on Computational Propaganda. [[Bradshaw, Neudert, and Howard 2019 available online/](https://comprop.oii.ox.ac.uk/research/government-responses/)]
* Brownsword, Roger, Eloise Scotford, and Karen Yeung (eds.), 2017, *The Oxford Handbook of Law, Regulation and Technology*, Oxford: Oxford University Press. doi:10.1093/oxfordhb/9780199680832.001.0001
* Brynjolfsson, Erik and Andrew McAfee, 2016, *The Second Machine Age: Work, Progress, and Prosperity in a Time of Brilliant Technologies*, New York: W. W. Norton.
* Bryson, Joanna J., 2010, “Robots Should Be Slaves”, in *Close Engagements with Artificial Companions: Key Social, Psychological, Ethical and Design Issues*, Yorick Wilks (ed.), (Natural Language Processing 8), Amsterdam: John Benjamins Publishing Company, 63–74. doi:10.1075/nlp.8.11bry
* –––, 2019, “The Past Decade and Future of Ai’s Impact on Society”, in *Towards a New Enlightenment: A Transcendent Decade*, Madrid: Turner - BVVA. [[Bryson 2019 available online](https://www.bbvaopenmind.com/en/books/towards-a-new-enlightenment-a-transcendent-decade/)]
* Bryson, Joanna J., Mihailis E. Diamantis, and Thomas D. Grant, 2017, “Of, for, and by the People: The Legal Lacuna of Synthetic Persons”, *Artificial Intelligence and Law*, 25(3): 273–291. doi:10.1007/s10506-017-9214-9
* Burr, Christopher and Nello Cristianini, 2019, “Can Machines Read Our Minds?”, *Minds and Machines*, 29(3): 461–494. doi:10.1007/s11023-019-09497-4
* Butler, Samuel, 1863, “Darwin among the Machines: Letter to the Editor”, Letter in *The Press (Christchurch)*, 13 June 1863. [[Butler 1863 available online](http://nzetc.victoria.ac.nz/tm/scholarly/tei-ButFir-t1-g1-t1-g1-t4-body.html)]
* Callaghan, Victor, James Miller, Roman Yampolskiy, and Stuart Armstrong (eds.), 2017, *The Technological Singularity: Managing the Journey*, (The Frontiers Collection), Berlin, Heidelberg: Springer Berlin Heidelberg. doi:10.1007/978-3-662-54033-6
* Calo, Ryan, 2018, “Artificial Intelligence Policy: A Primer and Roadmap”, *University of Bologna Law Review*, 3(2): 180-218. doi:10.6092/ISSN.2531-6133/8670
* Calo, Ryan, A. Michael Froomkin, and Ian Kerr (eds.), 2016, *Robot Law*, Cheltenham: Edward Elgar.
* Čapek, Karel, 1920, *R.U.R.*, Prague: Aventium. Translated by Peter Majer and Cathy Porter, London: Methuen, 1999.
* Capurro, Raphael, 1993, “Ein Grinsen Ohne Katze: Von der Vergleichbarkeit Zwischen ‘Künstlicher Intelligenz’ und ‘Getrennten Intelligenzen’”, *Zeitschrift für philosophische Forschung*, 47: 93–102.
* Cave, Stephen, 2019, “To Save Us from a Kafkaesque Future, We Must Democratise AI”, *The Guardian* , 04 January 2019. [[Cave 2019 available online](https://www.theguardian.com/commentisfree/2019/jan/04/future-democratise-ai-artificial-intelligence-power)]
* Chalmers, David J., 2010, “The Singularity: A Philosophical Analysis”, *Journal of Consciousness Studies*, 17(9–10): 7–65. [[Chalmers 2010 available online](http://consc.net/papers/singularityjcs.pdf)]
* Christman, John, 2003 [2018], “Autonomy in Moral and Political Philosophy”, (Spring 2018) *Stanford Encyclopedia of Philosophy* (EDITION NEEDED), URL = <https://plato.stanford.edu/archives/spr2018/entries/autonomy-moral/>
* Coeckelbergh, Mark, 2010, “Robot Rights? Towards a Social-Relational Justification of Moral Consideration”, *Ethics and Information Technology*, 12(3): 209–221. doi:10.1007/s10676-010-9235-5
* –––, 2012, *Growing Moral Relations: Critique of Moral Status Ascription*, London: Palgrave. doi:10.1057/9781137025968
* –––, 2016, “Care Robots and the Future of ICT-Mediated Elderly Care: A Response to Doom Scenarios”, *AI & Society*, 31(4): 455–462. doi:10.1007/s00146-015-0626-3
* –––, 2018, “What Do We Mean by a Relational Ethics? Growing a Relational Approach to the Moral Standing of Plants, Robots and Other Non-Humans”, in *Plant Ethics: Concepts and Applications*, Angela Kallhoff, Marcello Di Paola, and Maria Schörgenhumer (eds.), London: Routledge, 110–121.
* Crawford, Kate and Ryan Calo, 2016, “There Is a Blind Spot in AI Research”, *Nature*, 538(7625): 311–313. doi:10.1038/538311a
* Cristianini, Nello, forthcoming, “Shortcuts to Artificial Intelligence”, in *Machines We Trust*, Marcello Pelillo and Teresa Scantamburlo (eds.), Cambridge, MA: MIT Press. [[Cristianini forthcoming – preprint available online](https://philpapers.org/rec/CRISTA-3)]
* Danaher, John, 2015, “Why AI Doomsayers Are Like Sceptical Theists and Why It Matters”, *Minds and Machines*, 25(3): 231–246. doi:10.1007/s11023-015-9365-y
* –––, 2016a, “Robots, Law and the Retribution Gap”, *Ethics and Information Technology*, 18(4): 299–309. doi:10.1007/s10676-016-9403-3
* –––, 2016b, “The Threat of Algocracy: Reality, Resistance and Accommodation”, *Philosophy & Technology*, 29(3): 245–268. doi:10.1007/s13347-015-0211-1
* –––, 2019a, *Automation and Utopia: Human Flourishing in a World without Work*, Cambridge, MA: Harvard University Press.
* –––, 2019b, “The Philosophical Case for Robot Friendship”, *Journal of Posthuman Studies*, 3(1): 5–24. doi:10.5325/jpoststud.3.1.0005
* –––, forthcoming, “Welcoming Robots into the Moral Circle: A Defence of Ethical Behaviourism”, *Science and Engineering Ethics*, first online: 20 June 2019. doi:10.1007/s11948-019-00119-x
* Danaher, John and Neil McArthur (eds.), 2017, *Robot Sex: Social and Ethical Implications*, Boston, MA: MIT Press.
* DARPA, 1983, “Strategic Computing. New-Generation Computing Technology: A Strategic Plan for Its Development an Application to Critical Problems in Defense”, ADA141982, 28 October 1983. [[DARPA 1983 available online](https://apps.dtic.mil/docs/citations/ADA141982)]
* Dennett, Daniel C, 2017, *From Bacteria to Bach and Back: The Evolution of Minds*, New York: W.W. Norton.
* Devlin, Kate, 2018, *Turned On: Science, Sex and Robots*, London: Bloomsbury.
* Diakopoulos, Nicholas, 2015, “Algorithmic Accountability: Journalistic Investigation of Computational Power Structures”, *Digital Journalism*, 3(3): 398–415. doi:10.1080/21670811.2014.976411
* Dignum, Virginia, 2018, “Ethics in Artificial Intelligence: Introduction to the Special Issue”, *Ethics and Information Technology*, 20(1): 1–3. doi:10.1007/s10676-018-9450-z
* Domingos, Pedro, 2015, *The Master Algorithm: How the Quest for the Ultimate Learning Machine Will Remake Our World*, London: Allen Lane.
* Draper, Heather, Tom Sorell, Sandra Bedaf, Dag Sverre Syrdal, Carolina Gutierrez-Ruiz, Alexandre Duclos, and Farshid Amirabdollahian, 2014, “Ethical Dimensions of Human-Robot Interactions in the Care of Older People: Insights from 21 Focus Groups Convened in the UK, France and the Netherlands”, in *International Conference on Social Robotics 2014*, Michael Beetz, Benjamin Johnston, and Mary-Anne Williams (eds.), (Lecture Notes in Artificial Intelligence 8755), Cham: Springer International Publishing, 135–145. doi:10.1007/978-3-319-11973-1_14
* Dressel, Julia and Hany Farid, 2018, “The Accuracy, Fairness, and Limits of Predicting Recidivism”, *Science Advances*, 4(1): eaao5580. doi:10.1126/sciadv.aao5580
* Drexler, K. Eric, 2019, “Reframing Superintelligence: Comprehensive AI Services as General Intelligence”, FHI Technical Report, 2019-1, 1-210. [[Drexler 2019 available online](https://www.fhi.ox.ac.uk/reframing/)]
* Dreyfus, Hubert L., 1972, *What Computers Still Can’t Do: A Critique of Artificial Reason*, second edition, Cambridge, MA: MIT Press 1992.
* Dreyfus, Hubert L., Stuart E. Dreyfus, and Tom Athanasiou, 1986, *Mind over Machine: The Power of Human Intuition and Expertise in the Era of the Computer*, New York: Free Press.
* Dwork, Cynthia, Frank McSherry, Kobbi Nissim, and Adam Smith, 2006, *Calibrating Noise to Sensitivity in Private Data Analysis*, Berlin, Heidelberg.
* Eden, Amnon H., James H. Moor, Johnny H. Søraker, and Eric Steinhart (eds.), 2012, *Singularity Hypotheses: A Scientific and Philosophical Assessment*, (The Frontiers Collection), Berlin, Heidelberg: Springer Berlin Heidelberg. doi:10.1007/978-3-642-32560-1
* Eubanks, Virginia, 2018, *Automating Inequality: How High-Tech Tools Profile, Police, and Punish the Poor*, London: St. Martin’s Press.
* European Commission, 2013, “How Many People Work in Agriculture in the European Union? An Answer Based on Eurostat Data Sources”, *EU Agricultural Economics Briefs*, 8 (July 2013). [[Anonymous 2013 available online](https://ec.europa.eu/info/sites/info/files/food-farming-fisheries/farming/documents/agri-economics-brief-08_en.pdf)]
* European Group on Ethics in Science and New Technologies, 2018, “Statement on Artificial Intelligence, Robotics and ‘Autonomous’ Systems”, 9 March 2018, European Commission, Directorate-General for Research and Innovation, Unit RTD.01. [[European Group 2018 available online](https://op.europa.eu/en/publication-detail/-/publication/dfebe62e-4ce9-11e8-be1d-01aa75ed71a1) ]
* Ferguson, Andrew Guthrie, 2017, *The Rise of Big Data Policing: Surveillance, Race, and the Future of Law Enforcement*, New York: NYU Press.
* Floridi, Luciano, 2016, “Should We Be Afraid of AI? Machines Seem to Be Getting Smarter and Smarter and Much Better at Human Jobs, yet True AI Is Utterly Implausible. Why?”, *Aeon*, 9 May 2016. URL = <[Floridi 2016 available online](https://aeon.co/essays/true-ai-is-both-logically-possible-and-utterly-implausible)>
* Floridi, Luciano, Josh Cowls, Monica Beltrametti, Raja Chatila, Patrice Chazerand, Virginia Dignum, Christoph Luetge, Robert Madelin, Ugo Pagallo, Francesca Rossi, Burkhard Schafer, Peggy Valcke, and Effy Vayena, 2018, “AI4People—An Ethical Framework for a Good AI Society: Opportunities, Risks, Principles, and Recommendations”, *Minds and Machines*, 28(4): 689–707. doi:10.1007/s11023-018-9482-5
* Floridi, Luciano and Jeff W. Sanders, 2004, “On the Morality of Artificial Agents”, *Minds and Machines*, 14(3): 349–379. doi:10.1023/B:MIND.0000035461.63578.9d
* Floridi, Luciano and Mariarosaria Taddeo, 2016, “What Is Data Ethics?”, *Philosophical Transactions of the Royal Society A: Mathematical, Physical and Engineering Sciences*, 374(2083): 20160360. doi:10.1098/rsta.2016.0360
* Foot, Philippa, 1967, “The Problem of Abortion and the Doctrine of the Double Effect”, *Oxford Review*, 5: 5–15.
* Fosch-Villaronga, Eduard and Jordi Albo-Canals, 2019, “‘I’ll Take Care of You,’ Said the Robot”, *Paladyn, Journal of Behavioral Robotics*, 10(1): 77–93. doi:10.1515/pjbr-2019-0006
* Frank, Lily and Sven Nyholm, 2017, “Robot Sex and Consent: Is Consent to Sex between a Robot and a Human Conceivable, Possible, and Desirable?”, *Artificial Intelligence and Law*, 25(3): 305–323. doi:10.1007/s10506-017-9212-y
* Frankfurt, Harry G., 1971, “Freedom of the Will and the Concept of a Person”, *The Journal of Philosophy*, 68(1): 5–20.
* Frey, Carl Benedict, 2019, *The Technology Trap: Capital, Labour, and Power in the Age of Automation*, Princeton, NJ: Princeton University Press.
* Frey, Carl Benedikt and Michael A. Osborne, 2013, “The Future of Employment: How Susceptible Are Jobs to Computerisation?”, Oxford Martin School Working Papers, 17 September 2013. [[Frey and Osborne 2013 available online](http://www.oxfordmartin.ox.ac.uk/publications/view/1314)]
* Ganascia, Jean-Gabriel, 2017, *Le Mythe De La Singularité*, Paris: Éditions du Seuil.
* EU Parliament, 2016, “Draft Report with Recommendations to the Commission on Civil Law Rules on Robotics (2015/2103(Inl))”, *Committee on Legal Affairs*, 10.11.2016. https://www.europarl.europa.eu/doceo/document/A-8-2017-0005_EN.html
* EU Regulation, 2016/679, “General Data Protection Regulation: Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the Protection of Natural Persons with Regard to the Processing of Personal Data and on the Free Movement of Such Data, and Repealing Directive 95/46/Ec”, *Official Journal of the European Union*, 119 (4 May 2016), 1–88. [[Regulation (EU) 2016/679 available online](http://data.europa.eu/eli/reg/2016/679/oj)]
* Geraci, Robert M., 2008, “Apocalyptic AI: Religion and the Promise of Artificial Intelligence”, *Journal of the American Academy of Religion*, 76(1): 138–166. doi:10.1093/jaarel/lfm101
* –––, 2010, *Apocalyptic AI: Visions of Heaven in Robotics, Artificial Intelligence, and Virtual Reality*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780195393026.001.0001
* Gerdes, Anne, 2016, “The Issue of Moral Consideration in Robot Ethics”, *ACM SIGCAS Computers and Society*, 45(3): 274–279. doi:10.1145/2874239.2874278
* German Federal Ministry of Transport and Digital Infrastructure, 2017, “Report of the Ethics Commission: Automated and Connected Driving”, June 2017, 1–36. [[GFMTDI 2017 available online](https://www.bmvi.de/SharedDocs/EN/publications/report-ethics-commission.html)]
* Gertz, Nolen, 2018, *Nihilism and Technology*, London: Rowman & Littlefield.
* Gewirth, Alan, 1978, “The Golden Rule Rationalized”, *Midwest Studies in Philosophy*, 3(1): 133–147. doi:10.1111/j.1475-4975.1978.tb00353.x
* Gibert, Martin, 2019, “Éthique Artificielle (Version Grand Public)”, in *L’Encyclopédie Philosophique*, Maxime Kristanek (ed.), accessed: 16 April 2020, URL = <[Gibert 2019 available online](https://encyclo-philo.fr/item/199)>
* Giubilini, Alberto and Julian Savulescu, 2018, “The Artificial Moral Advisor. The ‘Ideal Observer’ Meets Artificial Intelligence”, *Philosophy & Technology*, 31(2): 169–188. doi:10.1007/s13347-017-0285-z
* Good, Irving John, 1965, “Speculations Concerning the First Ultraintelligent Machine”, in *Advances in Computers 6*, Franz L. Alt and Morris Rubinoff (eds.), New York & London: Academic Press, 31–88. doi:10.1016/S0065-2458(08)60418-0
* Goodfellow, Ian, Yoshua Bengio, and Aaron Courville, 2016, *Deep Learning*, Cambridge, MA: MIT Press.
* Goodman, Bryce and Seth Flaxman, 2017, “European Union Regulations on Algorithmic Decision-Making and a ‘Right to Explanation’”, *AI Magazine*, 38(3): 50–57. doi:10.1609/aimag.v38i3.2741
* Goos, Maarten, 2018, “The Impact of Technological Progress on Labour Markets: Policy Challenges”, *Oxford Review of Economic Policy*, 34(3): 362–375. doi:10.1093/oxrep/gry002
* Goos, Maarten, Alan Manning, and Anna Salomons, 2009, “Job Polarization in Europe”, *American Economic Review*, 99(2): 58–63. doi:10.1257/aer.99.2.58
* Graham, Sandra and Brian S. Lowery, 2004, “Priming Unconscious Racial Stereotypes about Adolescent Offenders”, *Law and Human Behavior*, 28(5): 483–504. doi:10.1023/B:LAHU.0000046430.65485.1f
* Gunkel, David J., 2018a, “The Other Question: Can and Should Robots Have Rights?”, *Ethics and Information Technology*, 20(2): 87–99. doi:10.1007/s10676-017-9442-4
* –––, 2018b, *Robot Rights*, Boston, MA: MIT Press.
* Gunkel, David J. and Joanna J. Bryson (eds.), 2014, *Machine Morality: The Machine as Moral Agent and Patient* special issue of *Philosophy & Technology*, 27(1): 1–142.
* Häggström, Olle, 2016, *Here Be Dragons: Science, Technology and the Future of Humanity*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780198723547.001.0001
* Hakli, Raul and Pekka Mäkelä, 2019, “Moral Responsibility of Robots and Hybrid Agents”, *The Monist*, 102(2): 259–275. doi:10.1093/monist/onz009
* Hanson, Robin, 2016, *The Age of Em: Work, Love and Life When Robots Rule the Earth*, Oxford: Oxford University Press.
* Hansson, Sven Ove, 2013, *The Ethics of Risk: Ethical Analysis in an Uncertain World*, New York: Palgrave Macmillan.
* –––, 2018, “How to Perform an Ethical Risk Analysis (eRA)”, *Risk Analysis*, 38(9): 1820–1829. doi:10.1111/risa.12978
* Harari, Yuval Noah, 2016, *Homo Deus: A Brief History of Tomorrow*, New York: Harper.
* Haskel, Jonathan and Stian Westlake, 2017, *Capitalism without Capital: The Rise of the Intangible Economy*, Princeton, NJ: Princeton University Press.
* Houkes, Wybo and Pieter E. Vermaas, 2010, *Technical Functions: On the Use and Design of Artefacts*, (Philosophy of Engineering and Technology 1), Dordrecht: Springer Netherlands. doi:10.1007/978-90-481-3900-2
* IEEE, 2019, *Ethically Aligned Design: A Vision for Prioritizing Human Well-Being with Autonomous and Intelligent Systems* (First Version), <[IEEE 2019 available online](https://standards.ieee.org/content/dam/ieee-standards/standards/web/documents/other/ead1e.pdf)>.
* Jasanoff, Sheila, 2016, *The Ethics of Invention: Technology and the Human Future*, New York: Norton.
* Jecker, Nancy S., forthcoming, *Ending Midlife Bias: New Values for Old Age*, New York: Oxford University Press.
* Jobin, Anna, Marcello Ienca, and Effy Vayena, 2019, “The Global Landscape of AI Ethics Guidelines”, *Nature Machine Intelligence*, 1(9): 389–399. doi:10.1038/s42256-019-0088-2
* Johnson, Deborah G. and Mario Verdicchio, 2017, “Reframing AI Discourse”, *Minds and Machines*, 27(4): 575–590. doi:10.1007/s11023-017-9417-6
* Kahnemann, Daniel, 2011, *Thinking Fast and Slow*, London: Macmillan.
* Kamm, Frances Myrna, 2016, *The Trolley Problem Mysteries*, Eric Rakowski (ed.), Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780190247157.001.0001
* Kant, Immanuel, 1781/1787, *Kritik der reinen Vernunft*. Translated as *Critique of Pure Reason*, Norman Kemp Smith (trans.), London: Palgrave Macmillan, 1929.
* Keeling, Geoff, 2020, “Why Trolley Problems Matter for the Ethics of Automated Vehicles”, *Science and Engineering Ethics*, 26(1): 293–307. doi:10.1007/s11948-019-00096-1
* Keynes, John Maynard, 1930, “Economic Possibilities for Our Grandchildren”. Reprinted in his *Essays in Persuasion*, New York: Harcourt Brace, 1932, 358–373.
* Kissinger, Henry A., 2018, “How the Enlightenment Ends: Philosophically, Intellectually—in Every Way—Human Society Is Unprepared for the Rise of Artificial Intelligence”, *The Atlantic*, June 2018. [[Kissinger 2018 available online](https://www.theatlantic.com/magazine/archive/2018/06/henry-kissinger-ai-could-mean-the-end-of-human-history/559124/)]
* Kurzweil, Ray, 1999, *The Age of Spiritual Machines: When Computers Exceed Human Intelligence*, London: Penguin.
* –––, 2005, *The Singularity Is Near: When Humans Transcend Biology*, London: Viking.
* –––, 2012, *How to Create a Mind: The Secret of Human Thought Revealed*, New York: Viking.
* Lee, Minha, Sander Ackermans, Nena van As, Hanwen Chang, Enzo Lucas, and Wijnand IJsselsteijn, 2019, “Caring for Vincent: A Chatbot for Self-Compassion”, in *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems—CHI ’19*, Glasgow, Scotland: ACM Press, 1–13. doi:10.1145/3290605.3300932
* Levy, David, 2007, *Love and Sex with Robots: The Evolution of Human-Robot Relationships*, New York: Harper & Co.
* Lighthill, James, 1973, “Artificial Intelligence: A General Survey”, *Artificial intelligence: A Paper Symposion*, London: Science Research Council. [[Lighthill 1973 available online](http://www.chilton-computing.org.uk/inf/literature/reports/lighthill_report/p001.htm)]
* Lin, Patrick, 2016, “Why Ethics Matters for Autonomous Cars”, in *Autonomous Driving*, Markus Maurer, J. Christian Gerdes, Barbara Lenz, and Hermann Winner (eds.), Berlin, Heidelberg: Springer Berlin Heidelberg, 69–85. doi:10.1007/978-3-662-48847-8_4
* Lin, Patrick, Keith Abney, and Ryan Jenkins (eds.), 2017, *Robot Ethics 2.0: From Autonomous Cars to Artificial Intelligence*, New York: Oxford University Press. doi:10.1093/oso/9780190652951.001.0001
* Lin, Patrick, George Bekey, and Keith Abney, 2008, “Autonomous Military Robotics: Risk, Ethics, and Design”, ONR report, California Polytechnic State University, San Luis Obispo, 20 December 2008), 112 pp. [[Lin, Bekey, and Abney 2008 available online](http://ethics.calpoly.edu/ONR_report.pdf)]
* Lomas, Meghann, Robert Chevalier, Ernest Vincent Cross, Robert Christopher Garrett, John Hoare, and Michael Kopack, 2012, “Explaining Robot Actions”, in *Proceedings of the Seventh Annual ACM/IEEE International Conference on Human-Robot Interaction—HRI ’12*, Boston, MA: ACM Press, 187–188. doi:10.1145/2157689.2157748
* Macnish, Kevin, 2017, *The Ethics of Surveillance: An Introduction*, London: Routledge.
* Mathur, Arunesh, Gunes Acar, Michael J. Friedman, Elena Lucherini, Jonathan Mayer, Marshini Chetty, and Arvind Narayanan, 2019, “Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites”, *Proceedings of the ACM on Human-Computer Interaction*, 3(CSCW): art. 81. doi:10.1145/3359183
* Minsky, Marvin, 1985, *The Society of Mind*, New York: Simon & Schuster.
* Misselhorn, Catrin, 2020, “Artificial Systems with Moral Capacities? A Research Design and Its Implementation in a Geriatric Care System”, *Artificial Intelligence*, 278: art. 103179. doi:10.1016/j.artint.2019.103179
* Mittelstadt, Brent Daniel and Luciano Floridi, 2016, “The Ethics of Big Data: Current and Foreseeable Issues in Biomedical Contexts”, *Science and Engineering Ethics*, 22(2): 303–341. doi:10.1007/s11948-015-9652-2
* Moor, James H., 2006, “The Nature, Importance, and Difficulty of Machine Ethics”, *IEEE Intelligent Systems*, 21(4): 18–21. doi:10.1109/MIS.2006.80
* Moravec, Hans, 1990, *Mind Children*, Cambridge, MA: Harvard University Press.
* –––, 1998, *Robot: Mere Machine to Transcendent Mind*, New York: Oxford University Press.
* Mozorov, Eygeny, 2013, *To Save Everything, Click Here: The Folly of Technological Solutionism*, New York: Public Affairs.
* Müller, Vincent C., 2012, “Autonomous Cognitive Systems in Real-World Environments: Less Control, More Flexibility and Better Interaction”, *Cognitive Computation*, 4(3): 212–215. doi:10.1007/s12559-012-9129-4
* –––, 2016a, “Autonomous Killer Robots Are Probably Good News”, In *Drones and Responsibility: Legal, Philosophical and Socio-Technical Perspectives on the Use of Remotely Controlled Weapons*, Ezio Di Nucci and Filippo Santoni de Sio (eds.), London: Ashgate, 67–81.
* ––– (ed.), 2016b, *Risks of Artificial Intelligence*, London: Chapman & Hall - CRC Press. doi:10.1201/b19187
* –––, 2018, “In 30 Schritten zum Mond? Zukünftiger Fortschritt in der KI”, *Medienkorrespondenz*, 20: 5–15. [[Müller 2018 available online](https://philarchive.org/archive/MLLIS)]
* –––, 2020, “Measuring Progress in Robotics: Benchmarking and the ‘Measure-Target Confusion’”, in *Metrics of Sensory Motor Coordination and Integration in Robots and Animals*, Fabio Bonsignorio, Elena Messina, Angel P. del Pobil, and John Hallam (eds.), (Cognitive Systems Monographs 36), Cham: Springer International Publishing, 169–179. doi:10.1007/978-3-030-14126-4_9
* –––, forthcoming-a, *Can Machines Think? Fundamental Problems of Artificial Intelligence*, New York: Oxford University Press.
* ––– (ed.), forthcoming-b, *Oxford Handbook of the Philosophy of Artificial Intelligence*, New York: Oxford University Press.
* Müller, Vincent C. and Nick Bostrom, 2016, “Future Progress in Artificial Intelligence: A Survey of Expert Opinion”, in *Fundamental Issues of Artificial Intelligence*, Vincent C. Müller (ed.), Cham: Springer International Publishing, 555–572. doi:10.1007/978-3-319-26485-1_33
* Newport, Cal, 2019, *Digital Minimalism: On Living Better with Less Technology*, London: Penguin.
* Nørskov, Marco (ed.), 2017, *Social Robots*, London: Routledge.
* Nyholm, Sven, 2018a, “Attributing Agency to Automated Systems: Reflections on Human–Robot Collaborations and Responsibility-Loci”, *Science and Engineering Ethics*, 24(4): 1201–1219. doi:10.1007/s11948-017-9943-x
* –––, 2018b, “The Ethics of Crashes with Self-Driving Cars: A Roadmap, II”, *Philosophy Compass*, 13(7): e12506. doi:10.1111/phc3.12506
* Nyholm, Sven, and Lily Frank, 2017, “From Sex Robots to Love Robots: Is Mutual Love with a Robot Possible?”, in Danaher and McArthur 2017: 219–243.
* O’Connell, Mark, 2017, *To Be a Machine: Adventures among Cyborgs, Utopians, Hackers, and the Futurists Solving the Modest Problem of Death*, London: Granta.
* O’Neil, Cathy, 2016, *Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy*, Largo, ML: Crown.
* Omohundro, Steve, 2014, “Autonomous Technology and the Greater Human Good”, *Journal of Experimental & Theoretical Artificial Intelligence*, 26(3): 303–315. doi:10.1080/0952813X.2014.895111
* Ord, Toby, 2020, *The Precipice: Existential Risk and the Future of Humanity*, London: Bloomsbury.
* Powers, Thomas M. and Jean-Gabriel Ganascia, forthcoming, “The Ethics of the Ethics of AI”, in *Oxford Handbook of Ethics of Artificial Intelligence*, Markus D. Dubber, Frank Pasquale, and Sunnit Das (eds.), New York: Oxford.
* Rawls, John, 1971, *A Theory of Justice*, Cambridge, MA: Belknap Press.
* Rees, Martin, 2018, *On the Future: Prospects for Humanity*, Princeton: Princeton University Press.
* Richardson, Kathleen, 2016, “Sex Robot Matters: Slavery, the Prostituted, and the Rights of Machines”, *IEEE Technology and Society Magazine*, 35(2): 46–53. doi:10.1109/MTS.2016.2554421
* Roessler, Beate, 2017, “Privacy as a Human Right”, *Proceedings of the Aristotelian Society*, 117(2): 187–206. doi:10.1093/arisoc/aox008
* Royakkers, Lambèr and Rinie van Est, 2016, *Just Ordinary Robots: Automation from Love to War*, Boca Raton, LA: CRC Press, Taylor & Francis. doi:10.1201/b18899
* Russell, Stuart, 2019, *Human Compatible: Artificial Intelligence and the Problem of Control*, New York: Viking.
* Russell, Stuart, Daniel Dewey, and Max Tegmark, 2015, “Research Priorities for Robust and Beneficial Artificial Intelligence”, *AI Magazine*, 36(4): 105–114. doi:10.1609/aimag.v36i4.2577
* SAE International, 2018, “Taxonomy and Definitions for Terms Related to Driving Automation Systems for on-Road Motor Vehicles”, J3016_201806, 15 June 2018. [[SAE International 2015 available online](https://www.sae.org/standards/content/j3016_201806/)]
* Sandberg, Anders, 2013, “Feasibility of Whole Brain Emulation”, in *Philosophy and Theory of Artificial Intelligence*, Vincent C. Müller (ed.), (Studies in Applied Philosophy, Epistemology and Rational Ethics, 5), Berlin, Heidelberg: Springer Berlin Heidelberg, 251–264. doi:10.1007/978-3-642-31674-6_19
* –––, 2019, “There Is Plenty of Time at the Bottom: The Economics, Risk and Ethics of Time Compression”, *Foresight*, 21(1): 84–99. doi:10.1108/FS-04-2018-0044
* Santoni de Sio, Filippo and Jeroen van den Hoven, 2018, “Meaningful Human Control over Autonomous Systems: A Philosophical Account”, *Frontiers in Robotics and AI*, 5(February): 15. doi:10.3389/frobt.2018.00015
* Schneier, Bruce, 2015, *Data and Goliath: The Hidden Battles to Collect Your Data and Control Your World*, New York: W. W. Norton.
* Searle, John R., 1980, “Minds, Brains, and Programs”, *Behavioral and Brain Sciences*, 3(3): 417–424. doi:10.1017/S0140525X00005756
* Selbst, Andrew D., Danah Boyd, Sorelle A. Friedler, Suresh Venkatasubramanian, and Janet Vertesi, 2019, “Fairness and Abstraction in Sociotechnical Systems”, in *Proceedings of the Conference on Fairness, Accountability, and Transparency—FAT* ’19*, Atlanta, GA: ACM Press, 59–68. doi:10.1145/3287560.3287598
* Sennett, Richard, 2018, *Building and Dwelling: Ethics for the City*, London: Allen Lane.
* Shanahan, Murray, 2015, *The Technological Singularity*, Cambridge, MA: MIT Press.
* Sharkey, Amanda, 2019, “Autonomous Weapons Systems, Killer Robots and Human Dignity”, *Ethics and Information Technology*, 21(2): 75–87. doi:10.1007/s10676-018-9494-0
* Sharkey, Amanda and Noel Sharkey, 2011, “The Rights and Wrongs of Robot Care”, in *Robot Ethics: The Ethical and Social Implications of Robotics*, Patrick Lin, Keith Abney and George Bekey (eds.), Cambridge, MA: MIT Press, 267–282.
* Shoham, Yoav, Perrault Raymond, Brynjolfsson Erik, Jack Clark, James Manyika, Juan Carlos Niebles, … Zoe Bauer, 2018, “The AI Index 2018 Annual Report”, 17 December 2018, Stanford, CA: AI Index Steering Committee, Human-Centered AI Initiative, Stanford University. [[Shoam et al. 2018 available online](https://hai.stanford.edu/ai-index/previous-reports/2018)]
* Silver, David, Thomas Hubert, Julian Schrittwieser, Ioannis Antonoglou, Matthew Lai, Arthur Guez, Marc Lanctot, Laurent Sifre, Dharshan Kumaran, Thore Graepel, Timothy Lillicrap, Karen Simonyan, and Demis Hassabis, 2018, “A General Reinforcement Learning Algorithm That Masters Chess, Shogi, and Go through Self-Play”, *Science*, 362(6419): 1140–1144. doi:10.1126/science.aar6404
* Simon, Herbert A. and Allen Newell, 1958, “Heuristic Problem Solving: The Next Advance in Operations Research”, *Operations Research*, 6(1): 1–10. doi:10.1287/opre.6.1.1
* Simpson, Thomas W. and Vincent C. Müller, 2016, “Just War and Robots’ Killings”, *The Philosophical Quarterly*, 66(263): 302–322. doi:10.1093/pq/pqv075
* Smolan, Sandy (director), 2016, “The Human Face of Big Data”, *PBS Documentary,* 24 February 2016, 56 mins.
* Sparrow, Robert, 2007, “Killer Robots”, *Journal of Applied Philosophy*, 24(1): 62–77. doi:10.1111/j.1468-5930.2007.00346.x
* –––, 2016, “Robots in Aged Care: A Dystopian Future?”, *AI & Society*, 31(4): 445–454. doi:10.1007/s00146-015-0625-4
* Stahl, Bernd Carsten, Job Timmermans, and Brent Daniel Mittelstadt, 2016, “The Ethics of Computing: A Survey of the Computing-Oriented Literature”, *ACM Computing Surveys*, 48(4): art. 55. doi:10.1145/2871196
* Stahl, Bernd Carsten and David Wright, 2018, “Ethics and Privacy in AI and Big Data: Implementing Responsible Research and Innovation”, *IEEE Security Privacy*, 16(3): 26–33.
* Stone, Christopher D., 1972, “Should Trees Have Standing - toward Legal Rights for Natural Objects”, *Southern California Law Review*, 45: 450–501.
* Stone, Peter, Rodney Brooks, Erik Brynjolfsson, Ryan Calo, Oren Etzioni, Greg Hager, Julia Hirschberg, Shivaram Kalyanakrishnan, Ece Kamar, Sarit Kraus, Kevin Leyton-Brown, David Parkes, William Press, AnnaLee Saxenian, Julie Shah, Milind Tambe, and Astro Teller, 2016, “Artificial Intelligence and Life in 2030”, One Hundred Year Study on Artificial Intelligence: Report of the 2015–2016 Study Panel, Stanford University, Stanford, CA, September 2016. [[Stone et al. 2016 available online](https://ai100.stanford.edu/2016-report)]
* Strawson, Galen, 1998, “Free Will”, in *Routledge Encyclopedia of Philosophy*, Taylor & Francis. doi:10.4324/9780415249126-V014-1
* Sullins, John P., 2012, “Robots, Love, and Sex: The Ethics of Building a Love Machine”, *IEEE Transactions on Affective Computing*, 3(4): 398–409. doi:10.1109/T-AFFC.2012.31
* Susser, Daniel, Beate Roessler, and Helen Nissenbaum, 2019, “Technology, Autonomy, and Manipulation”, *Internet Policy Review*, 8(2): 30 June 2019. [[Susser, Roessler, and Nissenbaum 2019 available online](https://policyreview.info/articles/analysis/technology-autonomy-and-manipulation)]
* Taddeo, Mariarosaria and Luciano Floridi, 2018, “How AI Can Be a Force for Good”, *Science*, 361(6404): 751–752. doi:10.1126/science.aat5991
* Taylor, Linnet and Nadezhda Purtova, 2019, “What Is Responsible and Sustainable Data Science?”, Big Data & Society, 6(2): art. 205395171985811. doi:10.1177/2053951719858114
* Taylor, Steve, et al., 2018, “Responsible AI – Key Themes, Concerns & Recommendations for European Research and Innovation: Summary of Consultation with Multidisciplinary Experts”, June. doi:10.5281/zenodo.1303252 [[Taylor, et al. 2018 available online](https://zenodo.org/record/1303253)]
* Tegmark, Max, 2017, *Life 3.0: Being Human in the Age of Artificial Intelligence*, New York: Knopf.
* Thaler, Richard H and Sunstein, Cass, 2008, *Nudge: Improving decisions about health, wealth and happiness*, New York: Penguin.
* Thompson, Nicholas and Ian Bremmer, 2018, “The AI Cold War That Threatens Us All”, *Wired*, 23 November 2018. [[Thompson and Bremmer 2018 available online](https://www.wired.com/story/ai-cold-war-china-could-doom-us-all/)]
* Thomson, Judith Jarvis, 1976, “Killing, Letting Die, and the Trolley Problem”, *Monist*, 59(2): 204–217. doi:10.5840/monist197659224
* Torrance, Steve, 2011, “Machine Ethics and the Idea of a More-Than-Human Moral World”, in Anderson and Anderson 2011: 115–137. doi:10.1017/CBO9780511978036.011
* Trump, Donald J, 2019, “Executive Order on Maintaining American Leadership in Artificial Intelligence”, 11 February 2019. [[Trump 2019 available online](https://www.federalregister.gov/documents/2019/02/14/2019-02544/maintaining-american-leadership-in-artificial-intelligence)]
* Turner, Jacob, 2019, *Robot Rules: Regulating Artificial Intelligence*, Berlin: Springer. doi:10.1007/978-3-319-96235-1
* Tzafestas, Spyros G., 2016, *Roboethics: A Navigating Overview*, (Intelligent Systems, Control and Automation: Science and Engineering 79), Cham: Springer International Publishing. doi:10.1007/978-3-319-21714-7
* Vallor, Shannon, 2017, *Technology and the Virtues: A Philosophical Guide to a Future Worth Wanting*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780190498511.001.0001
* Van Lent, Michael, William Fisher, and Michael Mancuso, 2004, “An Explainable Artificial Intelligence System for Small-Unit Tactical Behavior”, in *Proceedings of the 16th Conference on Innovative Applications of Artifical Intelligence, (IAAI’04)*, San Jose, CA: AAAI Press, 900–907.
* van Wynsberghe, Aimee, 2016, *Healthcare Robots: Ethics, Design and Implementation*, London: Routledge. doi:10.4324/9781315586397
* van Wynsberghe, Aimee and Scott Robbins, 2019, “Critiquing the Reasons for Making Artificial Moral Agents”, *Science and Engineering Ethics*, 25(3): 719–735. doi:10.1007/s11948-018-0030-8
* Vanderelst, Dieter and Alan Winfield, 2018, “The Dark Side of Ethical Robots”, in *Proceedings of the 2018 AAAI/ACM Conference on AI, Ethics, and Society*, New Orleans, LA: ACM, 317–322. doi:10.1145/3278721.3278726
* Veale, Michael and Reuben Binns, 2017, “Fairer Machine Learning in the Real World: Mitigating Discrimination without Collecting Sensitive Data”, *Big Data & Society*, 4(2): art. 205395171774353. doi:10.1177/2053951717743530
* Véliz, Carissa, 2019, “Three Things Digital Ethics Can Learn from Medical Ethics”, *Nature Electronics*, 2(8): 316–318. doi:10.1038/s41928-019-0294-2
* Verbeek, Peter-Paul, 2011, *Moralizing Technology: Understanding and Designing the Morality of Things*, Chicago: University of Chicago Press.
* Wachter, Sandra and Brent Daniel Mittelstadt, 2019, “A Right to Reasonable Inferences: Re-Thinking Data Protection Law in the Age of Big Data and AI”, *Columbia Business Law Review*, 2019(2): 494–620.
* Wachter, Sandra, Brent Mittelstadt, and Luciano Floridi, 2017, “Why a Right to Explanation of Automated Decision-Making Does Not Exist in the General Data Protection Regulation”, *International Data Privacy Law*, 7(2): 76–99. doi:10.1093/idpl/ipx005
* Wachter, Sandra, Brent Mittelstadt, and Chris Russell, 2018, “Counterfactual Explanations Without Opening the Black Box: Automated Decisions and the GDPR”, *Harvard Journal of Law & Technology*, 31(2): 842–887. doi:10.2139/ssrn.3063289
* Wallach, Wendell and Peter M. Asaro (eds.), 2017, *Machine Ethics and Robot Ethics*, London: Routledge.
* Walsh, Toby, 2018, *Machines That Think: The Future of Artificial Intelligence*, Amherst, MA: Prometheus Books.
* Westlake, Stian (ed.), 2014, *Our Work Here Is Done: Visions of a Robot Economy*, London: Nesta. [[Westlake 2014 available online](https://www.nesta.org.uk/report/our-work-here-is-done-visions-of-a-robot-economy/)]
* Whittaker, Meredith, Kate Crawford, Roel Dobbe, Genevieve Fried, Elizabeth Kaziunas, Varoon Mathur, … Jason Schultz, 2018, “AI Now Report 2018”, New York: AI Now Institute, New York University. [[Whittaker et al. 2018 available online](https://ainowinstitute.org/publication/ai-now-2018-report-2)]
* Whittlestone, Jess, Rune Nyrup, Anna Alexandrova, Kanta Dihal, and Stephen Cave, 2019, “Ethical and Societal Implications of Algorithms, Data, and Artificial Intelligence: A Roadmap for Research”, Cambridge: Nuffield Foundation, University of Cambridge. [[Whittlestone 2019 available online](https://www.adalovelaceinstitute.org/nuffield-foundation-publishes-roadmap-for-ai-ethics-research/)]
* Winfield, Alan, Katina Michael, Jeremy Pitt, and Vanessa Evers (eds.), 2019, *Machine Ethics: The Design and Governance of Ethical AI and Autonomous Systems*, special issue of *Proceedings of the IEEE*, 107(3): 501–632.
* Woollard, Fiona and Frances Howard-Snyder, 2016, “Doing vs. Allowing Harm”, *Stanford Encyclopedia of Philosophy* (Winter 2016 edition), Edward N. Zalta (ed.), URL = <https://plato.stanford.edu/archives/win2016/entries/doing-allowing/>
* Woolley, Samuel C. and Philip N. Howard (eds.), 2017, *Computational Propaganda: Political Parties, Politicians, and Political Manipulation on Social Media*, Oxford: Oxford University Press. doi:10.1093/oso/9780190931407.001.0001
* Yampolskiy, Roman V. (ed.), 2018, *Artificial Intelligence Safety and Security*, Boca Raton, FL: Chapman and Hall/CRC. doi:10.1201/9781351251389
* Yeung, Karen and Martin Lodge (eds.), 2019, *Algorithmic Regulation*, Oxford: Oxford University Press. doi:10.1093/oso/9780198838494.001.0001
* Zayed, Yago and Philip Loft, 2019, “Agriculture: Historical Statistics”, *House of Commons Briefing Paper*, 3339(25 June 2019): 1-19. [[Zayed and Loft 2019 available online](https://commonslibrary.parliament.uk/research-briefings/sn03339/)]
* Zerilli, John, Alistair Knott, James Maclaurin, and Colin Gavaghan, 2019, “Transparency in Algorithmic and Human Decision-Making: Is There a Double Standard?”, *Philosophy & Technology*, 32(4): 661–683. doi:10.1007/s13347-018-0330-6
* Zuboff, Shoshana, 2019, *The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power*, New York: Public Affairs.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=ethics-ai). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/ethics-ai/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=ethics-ai&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/ethics-ai/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

### References

* AI HLEG, 2019, “[High-Level Expert Group on Artificial Intelligence: Ethics Guidelines for Trustworthy AI](https://ec.europa.eu/digital-single-market/en/high-level-expert-group-artificial-intelligence)”, *European Commission*, accessed: 9 April 2019.
* Amodei, Dario and Danny Hernandez, 2018, “[AI and Compute](https://openai.com/blog/ai-and-compute/)”, *OpenAI Blog*, 16 July 2018.
* Aneesh, A., 2002, [Technological Modes of Governance: Beyond Private and Public Realms](https://web.archive.org/web/20021231052640/http://www.ifz.tu-graz.ac.at/sumacad/02/aaneesh.pdf), paper in the Proceedings of the 4th International Summer Academy on Technology Studies, available at archive.org.
* Brooks, Rodney, 2017, “[The Seven Deadly Sins of Predicting the Future of AI](https://rodneybrooks.com/the-seven-deadly-sins-of-predicting-the-future-of-ai/)”, on *Rodney Brooks: Robots, AI, and Other Stuff*, 7 September 2017.
* Brundage, Miles, Shahar Avin, Jack Clark, Helen Toner, Peter Eckersley, Ben Garfinkel, Allan Dafoe, Paul Scharre, Thomas Zeitzoff, Bobby Filar, Hyrum Anderson, Heather Roff, Gregory C. Allen, Jacob Steinhardt, Carrick Flynn, Seán Ó hÉigeartaigh, Simon Beard, Haydn Belfield, Sebastian Farquhar, Clare Lyle, et al., 2018, “[The Malicious Use of Artificial Intelligence: Forecasting, Prevention, and Mitigation](https://arxiv.org/abs/1802.07228)”, unpublished manuscript, ArXiv:1802.07228 [Cs].
* Costa, Elisabeth and David Halpern, 2019, “[The Behavioural Science of Online Harm and Manipulation, and What to Do About It: An Exploratory Paper to Spark Ideas and Debate](https://www.bi.team/publications/the-behavioural-science-of-online-harm-and-manipulation-and-what-to-do-about-it/)”, The Behavioural Insights Team Report, 1-82.
* Gebru, Timnit, Jamie Morgenstern, Briana Vecchione, Jennifer Wortman Vaughan, Hanna Wallach, Hal Daumeé III, and Kate Crawford, 2018, “[Datasheets for Datasets](https://arxiv.org/abs/1803.09010)”, unpublished manuscript, arxiv:1803.09010, 23 March 2018.
* Gunning, David, 2017, “[Explainable Artificial Intelligence (XAI)](https://www.darpa.mil/attachments/XAIProgramUpdate.pdf)”, Defense Advanced Research Projects Agency (DARPA) Program.
* Harris, Tristan, 2016, “[How Technology Is Hijacking Your Mind—from a Magician and Google Design Ethicist](https://medium.com/thrive-global/how-technology-hijacks-peoples-minds-from-a-magician-and-google-s-design-ethicist-56d62ef5edf3)”, *Thrive Global*, 18 May 2016.
* International Federation of Robotics (IFR), 2019, *[World Robotics 2019 Edition](https://ifr.org/free-downloads/)*.
* Jacobs, An, Lynn Tytgat, Michel Maus, Romain Meeusen, and Bram Vanderborght (eds.), Homo Roboticus: 30 Questions and Answers on Man, Technology, Science & Art, 2019, [Brussels: ASP](https://books.google.gr/books?id=Qzo0xQEACAAJ).
* Marcus, Gary, 2018, “[Deep Learning: A Critical Appraisal](https://arxiv.org/abs/1801.00631)”, unpublished manuscript, 2 January 2018, arxiv:1801.00631.
* McCarthy, John, Marvin Minsky, Nathaniel Rochester, and Claude E. Shannon, 1955, “[A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence](http://www-formal.stanford.edu/jmc/history/dartmouth/dartmouth.html)”, 31 August 1955.
* Metcalf, Jacob, Emily F. Keller, and Danah Boyd, 2016, “[Perspectives on Big Data, Ethics, and Society](https://bdes.datasociety.net/council-output/perspectives-on-big-data-ethics-and-society/)”, 23 May 2016, Council for Big Data, Ethics, and Society.
* National Institute of Justice (NIJ), 2014, “[Overview of Predictive Policing](https://nij.ojp.gov/topics/articles/overview-predictive-policing)”, 9 June 2014.
* Searle, John R., 2015, “[Consciousness in Artificial Intelligence](https://www.youtube.com/watch?v=rHKwIYsPXLg)”, Google’s Singularity Network, Talks at Google (YouTube video).

### Research Organizations

* [Turing Institute (UK): Data Ethics Group](https://www.turing.ac.uk/research/interest-groups/data-ethics-group)
* [AI Now](https://ainowinstitute.org/)
* [Leverhulme Centre for the Future of Intelligence](http://lcfi.ac.uk/)
* [Future of Humanity Institute](https://www.fhi.ox.ac.uk/)
* [Future of Life Institute](https://futureoflife.org/)
* [Stanford Center for Internet and Society](http://cyberlaw.stanford.edu/)
* [Berkman Klein Center](https://cyber.harvard.edu/)
* [Open Roboethics Institute](http://www.openroboethics.org/)

### Conferences

* [Philosophy & Theory of AI](https://www.pt-ai.org/)
* [Ethics and AI 2017](https://philevents.org/event/show/35634)
* [AIES](http://www.aies-conference.com/)
* [We Robot 2018](https://conferences.law.stanford.edu/werobot/)
* [Robophilosophy](http://conferences.au.dk/robo-philosophy/)

### Policy Documents

* [EUrobotics TG ‘robot ethics’ collection of policy documents](http://www.pt-ai.org/TG-ELS/policy)

### Other Relevant pages

* [PhilPapers section on Ethics of Artificial Intelligence](https://philpapers.org/browse/ethics-of-artificial-intelligence)
* [PhilPapers section on Robot Ethics](https://philpapers.org/browse/robot-ethics)

## Related Entries

[computing: and moral responsibility](https://plato.stanford.edu/entries/computing-responsibility/) | [ethics: internet research](https://plato.stanford.edu/entries/ethics-internet-research/) | [ethics: search engines and](https://plato.stanford.edu/entries/ethics-search/) | [information technology: and moral values](https://plato.stanford.edu/entries/it-moral-values/) | [information technology: and privacy](https://plato.stanford.edu/entries/it-privacy/) | [manipulation, ethics of](https://plato.stanford.edu/entries/ethics-manipulation/) | [social networking and ethics](https://plato.stanford.edu/entries/ethics-social-networking/)

### Acknowledgments

Early drafts of this article were discussed with colleagues at the IDEA Centre of the University of Leeds, some friends, and my PhD students Michael Cannon, Zach Gudmunsen, Gabriela Arriagada-Bruneau and Charlotte Stix. Later drafts were made publicly available on the Internet and publicised via Twitter and e-mail to all (then) cited authors that I could locate. These later drafts were presented to audiences at the INBOTS Project Meeting (Reykjavik 2019), the Computer Science Department Colloquium (Leeds 2019), the European Robotics Forum (Bucharest 2019), the AI Lunch and the Philosophy & Ethics group (Eindhoven 2019)—many thanks for their comments.

I am grateful for detailed written comments by John Danaher, Martin Gibert, Elizabeth O’Neill, Sven Nyholm, Etienne B. Roesch, Emma Ruttkamp-Bloem, Tom Powers, Steve Taylor, and Alan Winfield. I am grateful for further useful comments by Colin Allen, Susan Anderson, Christof Wolf-Brenner, Rafael Capurro, Mark Coeckelbergh, Yazmin Morlet Corti, Erez Firt, Vasilis Galanos, Anne Gerdes, Olle Häggström, Geoff Keeling, Karabo Maiyane, Brent Mittelstadt, Britt Östlund, Steve Petersen, Brian Pickering, Zoë Porter, Amanda Sharkey, Melissa Terras, Stuart Russell, Jan F Veneman, Jeffrey White, and Xinyi Wu.

Parts of the work on this article have been supported by the European Commission under the INBOTS project (H2020 grant no. 780073).

[Copyright © 2020](https://plato.stanford.edu/info.html#c) by  
[Vincent C. Müller](http://www.sophia.de/) <[*vincent.c.mueller@fau.de*](mailto:vincent%2ec%2emueller%40fau%2ede)>
