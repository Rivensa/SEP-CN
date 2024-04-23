# 人工智能和机器人伦理 ethics of (Vincent C. Müller)

_首次发布于 2020 年 4 月 30 日_

人工智能（AI）和机器人是数字技术，将对人类的发展产生重大影响。它们引发了一些根本性问题，包括我们应该如何处理这些系统，系统本身应该做什么，它们涉及哪些风险，以及我们如何控制它们。

在对该领域进行介绍（§1）之后，本文的主要主题（§2）包括：与人工智能系统作为_对象_（即由人类制造和使用的工具）相关的伦理问题。这包括隐私问题（§2.1）和操纵问题（§2.2），不透明性问题（§2.3）和偏见问题（§2.4），人机交互问题（§2.5），就业问题（§2.6），以及自主性的影响（§2.7）。然后是人工智能系统作为_主体_的伦理问题，即机器伦理学（§2.8）和人工道德代理（§2.9）。最后，我们讨论了可能导致“奇点”（§2.10）的未来人工智能超级智能的问题。最后，我们对人工智能的愿景进行了一些评论（§3）。

对于这些主题中的每个部分，我们提供了对_伦理问题_的一般解释，概述了现有的_立场_和_论点_，然后分析了这些在当前_技术_中的表现，最后，可以得出什么_政策_后果。

* [1. 介绍](https://plato.stanford.edu/entries/ethics-ai/#Intr)
* [1.1 领域背景](https://plato.stanford.edu/entries/ethics-ai/#BackFiel)
* [1.2 人工智能和机器人](https://plato.stanford.edu/entries/ethics-ai/#AIRobo)
* [1.3 政策说明](https://plato.stanford.edu/entries/ethics-ai/#NotePoli)
* [2. 主要辩论](https://plato.stanford.edu/entries/ethics-ai/#MainDeba)
* [2.1 隐私与监视](https://plato.stanford.edu/entries/ethics-ai/#PrivSurv)
* [2.2 行为操控](https://plato.stanford.edu/entries/ethics-ai/#ManiBeha)
* [2.3 AI 系统的不透明性](https://plato.stanford.edu/entries/ethics-ai/#OpacAISyst)
* [2.4 决策系统中的偏见](https://plato.stanford.edu/entries/ethics-ai/#BiasDeciSyst)
* [2.5 人机交互](https://plato.stanford.edu/entries/ethics-ai/#HumaRoboInte)
* [2.6 自动化与就业](https://plato.stanford.edu/entries/ethics-ai/#AutoEmpl)
* [2.7 自主系统](https://plato.stanford.edu/entries/ethics-ai/#AutoSyst)
* [2.8 机器伦理](https://plato.stanford.edu/entries/ethics-ai/#MachEthi)
* [2.9 人工道德代理](https://plato.stanford.edu/entries/ethics-ai/#ArtiMoraAgen)
* [2.10 奇点](https://plato.stanford.edu/entries/ethics-ai/#Sing)
* [3. 结束](https://plato.stanford.edu/entries/ethics-ai/#Clos)
* [参考文献](https://plato.stanford.edu/entries/ethics-ai/#Bib)
* [学术工具](https://plato.stanford.edu/entries/ethics-ai/#Aca)
* [其他互联网资源](https://plato.stanford.edu/entries/ethics-ai/#Oth)
* [参考文献](https://plato.stanford.edu/entries/ethics-ai/#Refe)
* [研究机构](https://plato.stanford.edu/entries/ethics-ai/#ReseOrga)
* [会议](https://plato.stanford.edu/entries/ethics-ai/#Conf)
* [政策文件](https://plato.stanford.edu/entries/ethics-ai/#PoliDocu)
* [其他相关页面](https://plato.stanford.edu/entries/ethics-ai/#OtheRelePage)
* [相关条目](https://plato.stanford.edu/entries/ethics-ai/#Rel)

***

## 1. 简介

### 1.1 领域背景

人工智能和机器人伦理通常关注各种“关切”，这是对新技术的典型反应。许多这样的关切事实上相当古怪（火车对灵魂来说太快了）；有些在预测上是错误的，因为它们暗示技术将从根本上改变人类（电话将破坏个人交流，写作将破坏记忆，录像带将使外出变得多余）；有些在广义上是正确的，但只是适度相关（数字技术将摧毁制造胶片、盒式磁带或黑胶唱片的行业）；但有些在广义上是正确的，且具有深刻的相关性（汽车将伤害儿童并从根本上改变景观）。这样一篇文章的任务是分析这些问题并消除那些不是问题的问题。

一些技术，如核能、汽车或塑料，已经引起了伦理和政治讨论，并采取了重要的政策措施来控制这些技术的发展轨迹，通常是在造成一些损害之后。除了这些“伦理关切”之外，新技术还挑战着当前的规范和概念体系，这对哲学来说尤为重要。最后，一旦我们理解了技术在其背景下的意义，我们需要塑造我们的社会反应，包括监管和法律。所有这些特征在新的人工智能和机器人技术的情况下也存在，此外还有更基本的担忧，即它们可能结束人类对地球的控制时代。

人工智能和机器人伦理在近年来得到了大量的媒体报道，这些报道支持相关研究，但也可能削弱了它：媒体经常以讨论的问题只是对未来技术带来的预测，并且似乎我们已经知道什么是最具伦理的以及如何实现。媒体报道因此侧重于风险、安全（Brundage 等人，2018 年，在下面的[其他互联网资源](https://plato.stanford.edu/entries/ethics-ai/#Oth)部分，以下简称 OIR）和对影响的预测（例如对就业市场的影响）。结果是对基本上是技术问题的讨论，重点是如何实现期望的结果。当前的政策和行业讨论也受到形象和公共关系的影响，其中“伦理”这个标签实际上并不比“绿色”更有意义，可能只是用于“伦理洗白”。对于一个问题是否适合成为人工智能伦理问题，需要我们不容易知道应该做什么。在这个意义上，失业、盗窃或者使用人工智能杀人并不是伦理问题，但在特定情况下是否允许这些行为则是一个问题。本文重点讨论那些我们不容易知道答案的真正伦理问题。

最后需要注意的是，人工智能和机器人伦理是应用伦理学中一个非常年轻的领域，具有重要的动态，但很少有确立的问题和权威的概述——尽管有一个有希望的大纲（欧洲科学与新技术伦理小组，2018 年），以及关于社会影响的初步研究（Floridi 等人，2018 年；Taddeo 和 Floridi，2018 年；S. Taylor 等人，2018 年；Walsh，2018 年；Bryson，2019 年；Gibert，2019 年；Whittlestone 等人，2019 年），以及政策建议（AI HLEG，2019 年\[OIR]；IEEE，2019 年）。因此，本文不能仅仅重复社区迄今为止取得的成就，而必须提出一个在很少有秩序的情况下进行排序的方案。

### 1.2 人工智能和机器人

“人工智能”（AI）的概念广泛理解为任何一种显示智能行为的人工计算系统，即具有有助于实现目标的复杂行为。特别地，我们不希望将“智能”限制在只有_人类_才能完成的任务上，正如明斯基（1985）所建议的那样。这意味着我们包括了一系列的机器，包括那些在“技术 AI”中只显示有限的学习或推理能力，但在特定任务的自动化方面表现出色的机器，以及在“通用 AI”中旨在创建一个普遍智能的代理机器。

人工智能（AI）在某种程度上比其他技术更接近我们的生活，因此出现了“人工智能哲学”这个领域。也许这是因为人工智能的项目是创建具有我们人类自我认知核心特征的机器，即有感知、思考和智能的存在。人工智能代理的主要目的可能涉及感知、建模、规划和行动，但当前的人工智能应用还包括感知、文本分析、自然语言处理（NLP）、逻辑推理、游戏对弈、决策支持系统、数据分析、预测分析，以及自动驾驶车辆和其他形式的机器人（P. Stone 等，2016 年）。人工智能可能涉及各种计算技术来实现这些目标，无论是受自然认知启发的经典符号操作人工智能，还是通过神经网络进行的机器学习（Goodfellow、Bengio 和 Courville，2016 年；Silver 等，2018 年）。

从历史上看，值得注意的是，“人工智能”一词在大约 1950 年至 1975 年左右被使用，然后在“人工智能寒冬”期间（大约 1975 年至 1995 年）声名狼藉，并且范围变窄。因此，“机器学习”、“自然语言处理”和“数据科学”等领域通常没有被标记为“人工智能”。自 2010 年左右，使用范围再次扩大，有时几乎所有计算机科学甚至高科技都被归为“人工智能”。现在，这是一个令人自豪的名字，是一个投资巨大的蓬勃发展的行业（Shoham 等，2018 年），并且再次处于炒作的边缘。正如 Erik Brynjolfsson 所指出的，它可能使我们能够

几乎消除全球贫困，大规模减少疾病，并为全球几乎每个人提供更好的教育。（引自 Anderson，Rainie 和 Luchsinger 2018）

虽然人工智能可以完全是软件，但机器人是能够移动的物理机器。机器人受到物理冲击的影响，通常通过“传感器”，并通过“执行器”对世界施加物理力量，例如夹持器或转动的轮子。因此，自动驾驶汽车或飞机都是机器人，而只有极小部分的机器人是“人形”的（类似电影中的形状）。一些机器人使用人工智能，而一些则不使用：典型的工业机器人盲目地遵循完全定义的脚本，具有最少的感知输入和无学习或推理能力（每年约有 50 万台此类新工业机器人被安装（IFR 2019 \[OIR]））。可以说，虽然机器人系统在公众中引起更多关注，但人工智能系统更有可能对人类产生更大的影响。此外，用于一组狭窄任务的人工智能或机器人系统不太可能引起新问题，而更灵活和自主的系统则更有可能引起新问题。

机器人技术和人工智能可以被看作是两个重叠的系统集合：只有人工智能的系统、只有机器人的系统以及两者兼具的系统。我们对这三者都感兴趣；因此，本文的范围不仅仅是两者的交集，还包括两者的并集。

### 1.3 关于政策的说明

政策只是本文关注的一个问题。关于人工智能伦理问题，公众进行了大量的讨论，政治家们也经常发表声明称这个问题需要新的政策，但实际上这并不容易：科技政策的制定和执行都很困难。它可以采取多种形式，包括激励和资金、基础设施、税收或善意声明，以及各种参与者和法律的监管。人工智能的政策可能会与科技政策或一般政策的其他目标发生冲突。近年来，工业化国家的政府、议会、协会和行业界发布了报告和白皮书，一些人提出了善意的口号（“可信赖的/负责任的/人道的/以人为中心的/良好的/有益的人工智能”），但这是否就是所需要的呢？有关调查，请参阅 Jobin、Ienca 和 Vayena（2019）以及 V. Müller 的[PT-AI 政策文件和机构列表](http://www.pt-ai.org/TG-ELS/policy/)。

对于从事伦理和政策工作的人来说，可能会倾向于高估新技术的影响和威胁，低估现行法规的覆盖范围（例如产品责任）。另一方面，企业、军方和一些公共行政部门往往只是“说说而已”，进行一些“伦理洗白”，以保持良好的公众形象并继续以前的做法。实际上，要实施具有法律约束力的监管将挑战现有的商业模式和实践。实际政策不仅仅是伦理理论的实施，而是受制于社会权力结构，而那些拥有权力的行动者将反对任何限制他们的事物。因此，监管在面对经济和政治权力时很可能保持无力的状态。

虽然实际政策很少，但有一些值得注意的开端：最新的欧盟政策文件建议“可信的人工智能”应当合法、道德和技术健全，并将其具体阐述为七个要求：人类监督、技术健全性、隐私和数据治理、透明度、公平性、福祉和问责（AI HLEG 2019 \[OIR]）。目前，许多欧洲研究都以“负责任的研究和创新”（RRI）为口号，并且“技术评估”自核能发展以来就成为一个标准领域。职业道德也是信息技术的一个标准领域，其中包括本文所涉及的问题。也许 AI 工程师可以制定一个类似于医生职业道德准则的“道德守则”（Véliz 2019）。数据科学本身应该做什么在（L. Taylor 和 Purtova 2019）中有所涉及。我们还预计，许多政策最终将涵盖 AI 和机器人的具体用途或技术，而不是整个领域。关于 AI 伦理框架的有用摘要可参考（European Group on Ethics in Science and New Technologies 2018: 13ff）。关于一般的 AI 政策，请参阅 Calo（2018），以及 Crawford 和 Calo（2016）；Stahl，Timmermans 和 Mittelstadt（2016）；Johnson 和 Verdicchio（2017）；以及 Giubilini 和 Savulescu（2018）。技术的更多政治角度通常在“科学与技术研究”（STS）领域中讨论。正如《发明的伦理学》（Jasanoff 2016）等书所显示的那样，STS 领域的关注点通常与伦理学中的关注点非常相似（Jacobs 等人 2019 \[OIR]）。在本文中，我们将分别讨论每种问题类型的政策，而不是针对整个人工智能或机器人领域。

## 2. 主要辩论

在本节中，我们概述了人类使用更或更少自主的人工智能和机器人系统所涉及的伦理问题，这意味着我们关注的是某些技术使用中出现的问题，而其他技术使用中则不会出现这些问题。然而，必须记住，技术总是会使某些使用变得更容易、更频繁，并阻碍其他使用。因此，技术工件的设计对于它们的使用具有伦理意义（Houkes 和 Vermaas 2010；Verbeek 2011），所以在这个领域，除了“负责任的使用”，我们还需要“负责任的设计”。对使用的关注并不预设哪种伦理方法最适合解决这些问题；它们可能更适合于德性伦理学（Vallor 2017），而不是后果主义或价值导向的方法（Floridi 等人 2018）。本节对于人工智能系统是否真正具有“智能”或其他心理属性的问题也持中立态度：如果人工智能和机器人仅仅被视为自动化的当前形式（参见 Müller 即将发表的文章），那么这些观点同样适用。

### 2.1 隐私与监视

关于信息技术中的隐私和监控（例如，Macnish 2017; Roessler 2017），有一个普遍的讨论，主要涉及对私人数据和个人身份可识别数据的访问。隐私有几个被广泛认可的方面，例如“被单独留下的权利”，信息隐私，作为个人特征的隐私，对自己信息的控制以及保密权（Bennett and Raab 2006）。隐私研究历史上主要关注秘密服务的国家监视，但现在也包括其他国家机构、企业甚至个人的监视。技术在过去几十年中发生了重大变化，而监管的反应却很缓慢（尽管有《欧盟法规（EU）2016/679》）——结果是一种被最强大的参与者利用的某种无政府状态，有时公然进行，有时隐藏起来。

数字领域已经大大扩展：所有数据的收集和存储现在都是数字化的，我们的生活越来越数字化，大部分数字数据与一个单一的互联网相连，并且越来越多的传感器技术被用于生成关于我们生活中非数字化方面的数据。人工智能增加了智能数据收集和数据分析的可能性。这既适用于对整个人群的全面监视，也适用于经典的有针对性监视。此外，大部分数据通常以费用交易给其他机构。

同时，在数字世界中，控制谁收集哪些数据以及谁有权访问比在纸质和电话通话的模拟世界中要困难得多。许多新的人工智能技术加剧了已知的问题。例如，照片和视频中的人脸识别可以进行身份识别，从而进行个人画像和搜索（Whittaker 等，2018 年：15ff）。这继续使用其他识别技术，例如“设备指纹识别”，这在互联网上很常见（有时在“隐私政策”中公开）。结果是“在这个庞大的数据海洋中，有一个令人恐惧的完整的我们的画像”（Smolan，2016 年：1:01）。结果可以说是一个丑闻，但仍未得到应有的公众关注。

我们留下的数据痕迹是我们所使用的“免费”服务的付出代价，但我们并没有被告知这些数据的收集以及这种新原材料的价值，我们被操纵着留下越来越多的这些数据。对于“五巨头”公司（亚马逊、谷歌/Alphabet、微软、苹果、Facebook），他们业务的主要数据收集部分似乎是基于欺骗、利用人类弱点、推迟行动、产生上瘾和操纵（Harris，2016 年\[OIR]）。社交媒体、游戏和大部分互联网在这个“监控经济”中的主要关注点是获取、维持和引导注意力，从而获得数据供应。“监控是互联网的商业模式”（Schneier，2015 年）。这种监控和关注经济有时被称为“监控资本主义”（Zuboff，2019 年）。它导致了许多企图逃离这些公司掌控的努力，例如进行“极简主义”练习（Newport，2019 年），有时通过开源运动，但似乎现代公民已经失去了逃离的自主权，同时完全继续他们的生活和工作。我们失去了对我们的数据的所有权，如果“所有权”在这里是正确的关系的话。可以说，我们失去了对我们的数据的控制。

这些系统经常会揭示关于我们的事实，这些事实我们自己希望压制或者不知道：它们比我们自己更了解我们自己。即使只是观察在线行为，也能洞察我们的心理状态（Burr 和 Christianini 2019）和操纵（见下文[section 2.2](https://plato.stanford.edu/entries/ethics-ai/#ManiBeha)）。这导致了对“派生数据”的保护的呼吁（Wachter 和 Mittelstadt 2019）。在他的畅销书《人类简史》的最后一句话中，哈拉里问到了人工智能的长期后果：

> 当无意识但高度智能的算法比我们自己更了解我们自己时，社会、政治和日常生活会发生什么？（2016: 462）

机器人设备在这个领域中还没有扮演重要角色，除了安全巡逻之外，但一旦它们在工业环境之外更加普遍，这将会改变。与“物联网”一起，所谓的“智能”系统（手机、电视、烤箱、灯、虚拟助手、家庭等），“智能城市”（Sennett 2018）和“智能治理”一起，它们将成为数据收集机器的一部分，提供更详细、不同类型的实时数据，信息越来越多。

在数据科学中，能够在很大程度上隐藏个人或群体身份的隐私保护技术已经成为标准工具；它们包括（相对）匿名化、访问控制（加密）以及其他模型，其中计算是使用完全或部分加密的输入数据进行的（Stahl 和 Wright 2018）；在“差分隐私”的情况下，这是通过向查询的输出添加校准噪声来实现的（Dwork 等人 2006；Abowd 2017）。虽然需要更多的努力和成本，但这些技术可以避免许多隐私问题。一些公司还将更好的隐私视为可以利用和以价格出售的竞争优势。

一个主要的实际困难是实际执行监管，无论是在国家层面还是在提出索赔的个人层面上。他们必须确定负责的法律实体，证明行为，也许还要证明意图，找到一个宣布自己有权处理此事的法院……最终让法院实际执行其决定。在数字产品中，往往缺乏对消费者权益、产品责任和其他民事责任或知识产权保护等权利的法律保护，或者很难执行。这意味着具有“数字”背景的公司习惯于在不担心责任的情况下对消费者进行产品测试，同时大力维护其知识产权。这种“互联网自由主义”有时被认为技术解决方案本身可以解决社会问题（Mozorov 2013）。

### 2.2 行为操纵

人工智能在监控中的伦理问题不仅仅涉及数据的积累和注意力的引导：它们还包括利用信息来操纵行为，无论是在线还是离线，以破坏自主理性选择。当然，操纵行为的努力是古老的，但当它们使用人工智能系统时，它们可能获得新的质量。鉴于用户与数据系统的密切互动以及对个人的深入了解，他们容易受到“助推”、操纵和欺骗的影响。通过足够的先前数据，算法可以用来针对个人或小团体，提供可能影响这些特定个体的输入。'助推'是改变环境以预测方式影响行为，对个体有积极影响，但很容易避免且成本低廉（Thaler 和 Sunstein 2008）。从这里到家长式管理和操纵有一个滑坡。

许多广告商、营销人员和在线销售商将利用一切合法手段来最大化利润，包括利用行为偏见、欺骗和成瘾生成（Costa 和 Halpern 2019 \[OIR]）。这种操纵在赌博和游戏行业中是商业模式，但正在扩散，例如廉价航空公司。在网页或游戏的界面设计中，这种操纵使用所谓的“黑暗模式”（Mathur 等人 2019）。目前，赌博和成瘾物质的销售受到严格监管，但在线操纵和成瘾却没有，尽管在线行为的操纵正在成为互联网的核心商业模式。

此外，社交媒体现在已成为政治宣传的主要场所。这种影响力可以用来操纵选民行为，就像 Facebook-Cambridge Analytica 的“丑闻”一样（Woolley 和 Howard 2017; Bradshaw，Neudert 和 Howard 2019），如果成功，可能会损害个人的自主权（Susser，Roessler 和 Nissenbaum 2019）。

改进的人工智能“伪造”技术使曾经可靠的证据变得不可靠 - 这已经发生在数字照片，音频记录和视频上。很快就会很容易创建（而不是修改）具有任何所需内容的“深度伪造”文本，照片和视频材料。很快，通过文本，电话或视频与人进行复杂的实时互动也将被伪造。因此，在我们越来越依赖这种互动的同时，我们不能信任数字互动。

一个更具体的问题是，人工智能中的机器学习技术依赖于大量的数据训练。这意味着在数据隐私和权利与产品技术质量之间往往存在权衡。这影响了对侵犯隐私行为的后果伦理评估。

这个领域的政策有其起伏：公民自由和个人权利受到商业游说、秘密服务和其他依赖于监控的国家机构的巨大压力。与数字化前的时代相比，隐私保护大大减弱，当时的通信基于信件、模拟电话通信和个人对话，监控活动受到重大法律限制。

虽然欧盟《通用数据保护条例》（条例（EU）2016/679）加强了隐私保护，但美国和中国更倾向于少一些监管的增长（Thompson 和 Bremmer 2018），可能是希望这能提供竞争优势。很明显，国家和商业行为者借助人工智能技术增强了侵犯隐私和操纵人们的能力，并将继续这样做以进一步推动他们的特定利益，除非在整个社会的利益上加以限制。

不透明性和偏见是现在有时被称为“数据伦理”或“大数据伦理”的核心问题（Floridi 和 Taddeo 2016; Mittelstadt 和 Floridi 2016）。用于自动决策支持和“预测分析”的人工智能系统引发了“对缺乏正当程序、问责制、社区参与和审计的重大关切”（Whittaker 等人 2018: 18ff）。它们是一个权力结构的一部分，在这个结构中，“我们正在创造限制和限制人类参与机会的决策过程”（Danaher 2016b: 245）。与此同时，受影响的人通常无法知道系统是如何得出这个结果的，即对于那个人来说，系统是“不透明的”。如果系统涉及机器学习，即使对于专家来说，也通常是不透明的，他不知道如何识别特定模式，甚至不知道模式是什么。决策系统和数据集中的偏见由此不透明性加剧。因此，至少在希望消除偏见的情况下，不透明性和偏见的分析是相互关联的，政治回应必须同时解决这两个问题。

许多人工智能系统依赖于（模拟的）神经网络中的机器学习技术，这些技术将从给定的数据集中提取模式，无论是否提供“正确”的解决方案；即，有监督、半监督或无监督。通过这些技术，“学习”捕捉到数据中的模式，并以对决策系统有用的方式进行标记，而程序员实际上不知道系统使用了数据中的哪些模式。事实上，这些程序是不断演化的，因此当新数据进来或者给出新的反馈（“这是正确的”，“这是错误的”）时，学习系统使用的模式也会改变。这意味着结果对用户或程序员来说是不透明的。此外，程序的质量严重依赖于提供的数据的质量，遵循“垃圾进，垃圾出”的老口号。因此，如果数据已经存在偏见（例如，关于嫌疑人肤色的警方数据），那么程序将重现这种偏见。有关数据集的标准描述的提议在“数据表”中，这将使发现此类偏见更加可行（Gebru 等人 2018 \[OIR]）。最近还有大量关于机器学习系统局限性的文献，这些系统本质上是复杂的数据过滤器（Marcus 2018 \[OIR]）。有人认为，今天的伦理问题是人工智能采取的技术“捷径”的结果（Cristianini 即将出版）。

有几项技术活动旨在实现“可解释的人工智能”，从（Van Lent, Fisher, and Mancuso 1999; Lomas et al. 2012）开始，最近还有一个 DARPA 计划（Gunning 2017 \[OIR]）。更广泛地说，对于“阐明和表达计算工具在社会中所具有的权力结构、偏见和影响”的需求（Diakopoulos 2015: 398）是存在的。

有时被称为“算法问责报道”。这并不意味着我们期望人工智能“解释其推理”——这需要比我们目前赋予人工智能系统更严肃的道德自治（见下文[§2.10](https://plato.stanford.edu/entries/ethics-ai/#ArtiMoraAgen)）。

政治家亨利·基辛格指出，如果我们依赖于一个被认为优于人类但无法解释其决策的系统，那么对于民主决策来说存在一个根本性问题。他说我们可能已经“创造了一种潜在的主导技术，却缺乏指导性的哲学”（基辛格，2018 年）。丹纳赫（2016b）将这个问题称为“算法统治的威胁”（采用了 Aneesh 2002 \[OIR], 2006 中对‘算法统治’的先前使用）。在类似的观点中，Cave（2019 年）强调我们需要更广泛的社会运动朝着更“民主”的决策过程发展，以避免人工智能成为导致公共行政和其他领域出现卡夫卡式难以渗透的压制系统的力量。这个讨论的政治角度已经被 O'Neil 在她有影响力的书籍《数学毁灭的武器》（2016 年）中强调，也被 Yeung 和 Lodge（2019 年）提及。

在欧盟，一些问题已经在《法规（欧盟）2016/679》中得到考虑，该法规预见到，当消费者面临基于数据处理的决策时，他们将拥有合法的“解释权”——这个权利的范围和可执行性的程度存在争议（Goodman 和 Flaxman 2017；Wachter、Mittelstadt 和 Floridi 2016；Wachter、Mittelstadt 和 Russell 2017）。Zerilli 等人（2019）认为，在这里可能存在双重标准，即我们要求机器决策提供高水平的解释，尽管人类有时未能达到这一标准。

### 2.4 决策系统中的偏见

自动化的人工智能决策支持系统和“预测分析”在数据上运作，并产生“输出”决策。这个输出的范围可以从相对琐碎到非常重要：例如“这家餐厅符合您的偏好”，“这个 X 光片上的患者已经完成骨骼生长”，“信用卡申请被拒绝”，“捐赠器官将会给另一个患者”，“保释被拒绝”，或者“目标已被确认并参与”。数据分析经常被用于商业、医疗保健和其他领域的“预测分析”，以预见未来的发展情况——因为预测更容易，所以它也将成为一种更廉价的商品。预测的一个应用是“预测性执法”（NIJ 2014 \[OIR]），许多人担心这可能会导致公共自由的侵蚀（Ferguson 2017），因为它可能剥夺那些被预测行为的人的权力。然而，似乎许多关于执法的担忧都依赖于未来情景，即执法部门预见并惩罚计划中的行动，而不是等到犯罪发生后再采取行动（就像 2002 年的电影《少数派报告》中那样）。一个担忧是这些系统可能会延续已经存在于建立系统所使用的数据中的偏见，例如通过增加在某个地区的警务巡逻并在该地区发现更多犯罪。实际的“预测性执法”或“情报驱动执法”技术主要涉及警察力量在何时何地最需要的问题。此外，警察可以获得更多数据，为他们提供更多控制权，并促进更好的决策，例如工作流支持软件（例如“ArcGIS”）。这是否成为问题取决于对这些系统技术质量的适当信任水平，以及对警察工作目标的评估。也许最近的一篇论文标题指出了正确的方向：“预测性执法中的人工智能伦理：从威胁模型到关怀伦理”（Asaro 2019）。

当个体在判断时受到一个与事情实际无关的特征的影响时，通常会出现偏见，这种不公平的判断通常是对某个群体成员的歧视性先入之见。因此，一种偏见的形式是个人学习的认知特征，通常不是明确表达的。相关人可能并不意识到自己有这种偏见——他们甚至可能对自己发现的偏见持有诚实和明确的反对态度（例如通过启动，参见 Graham 和 Lowery 2004）。关于机器学习中的公平与偏见，请参阅 Binns（2018）。

除了学习偏见的社会现象之外，人类的认知系统通常容易产生各种“认知偏见”，例如“确认偏见”：人类倾向于将信息解释为证实他们已有信念的内容。这种第二种偏见通常被认为会妨碍理性判断的表现（Kahnemann 2011）-尽管至少一些认知偏见会产生进化优势，例如对直觉判断的资源经济利用。有一个问题是 AI 系统是否可以或应该具有这种认知偏见。

第三种偏见存在于数据中，当数据表现出系统性错误时，例如“统计偏见”。严格来说，任何给定的数据集只对一种问题是无偏的，因此仅仅创建一个数据集就涉及到可能被用于不同种类问题的危险，然后被证明对该种类问题是有偏见的。基于这种数据的机器学习不仅无法识别偏见，而且会将“历史偏见”编码和自动化。亚马逊的一个自动化招聘筛选系统（于 2017 年初停用）发现存在这种历史偏见，该系统歧视女性-可能是因为该公司在招聘过程中存在歧视女性的历史。发现“Correctional Offender Management Profiling for Alternative Sanctions”（COMPAS）系统，该系统用于预测被告是否会再次犯罪，其准确率与一组随机人类相当（65.2%准确率），并且对黑人被告产生更多的假阳性和较少的假阴性（Dressel 和 Farid 2018）。这类系统的问题因此是偏见加上人类对系统的过度信任。这类自动化系统在美国的政治维度在 Eubanks（2018）中进行了调查。

有重要的技术努力来检测和消除人工智能系统中的偏见，但可以说这些努力还处于早期阶段：参见英国伦理人工智能与机器学习研究所（Brownsword、Scotford 和 Yeung 2017；Yeung 和 Lodge 2019）。似乎技术修复有其局限性，因为它们需要一个难以获得的公平的数学概念（Whittaker 等人 2018：24ff；Selbst 等人 2019），以及一个正式的“种族”概念（参见 Benthall 和 Haynes 2019）。一个机构提案在（Veale 和 Binns 2017）中。

### 2.5 人机交互

人机交互（HRI）是一个独立的学术领域，现在越来越关注伦理问题、双方感知的动态以及社会背景的复杂性，包括合作工作（例如，Arnold 和 Scheutz 2017）。关于机器人伦理的有用调查包括 Calo、Froomkin 和 Kerr（2016）；Royakkers 和 van Est（2016）；Tzafestas（2016）；一本标准的论文集是 Lin、Abney 和 Jenkins（2017）。

虽然人工智能可以被用来操纵人类相信和做事情（参见[第 2.2 节](https://plato.stanford.edu/entries/ethics-ai/#ManiBeha)），但它也可以被用来驱动那些在过程或外观上涉及欺骗、威胁人类尊严或违反康德的“尊重人性”要求的机器人。人类很容易将心理属性归因于物体，并与之产生共鸣，特别是当这些物体的外观类似于生物时。这可以用来欺骗人类（或动物），使其将更多的智力甚至情感意义归属于机器人或人工智能系统，而这些机器人或系统并不值得拥有。在这方面，一些人形机器人的部分是有问题的（例如，石黑浩的遥控 Geminoids），并且有一些案例在公关目的上明显是欺骗性的（例如，关于 Hanson Robotics 的“Sophia”的能力）。当然，商业伦理和法律的一些基本限制也适用于机器人：产品安全和责任，或者广告中的不欺骗。看起来这些现有的限制已经解决了许多提出的问题。然而，有些情况下，人与人之间的互动具有特别人性化的方面，也许无法由机器人来取代：关怀、爱和性。

#### 2.5.1 例子 (a) 护理机器人

目前，在人类医疗保健领域中使用机器人仍处于概念研究阶段，但在未来几年内可能成为一项可用技术，并引发了对于无人化护理的反乌托邦未来的一系列担忧 (A. Sharkey 和 N. Sharkey 2011; Robert Sparrow 2016)。目前的系统包括支持人类护理者的机器人（例如，帮助抬起病人或运输物品的机器人），使患者能够自己完成某些事情的机器人（例如，用机械臂进食），以及作为陪伴和安慰给予患者的机器人（例如，“Paro”机器人海豹）。有关概述，请参阅 van Wynsberghe (2016); Nørskov (2017); Fosch-Villaronga 和 Albo-Canals (2019)，有关用户调查，请参阅 Draper 等人 (2014)。

关于关怀问题引起关注的一个原因是人们认为在老龄化社会中我们将需要机器人。这个论点存在问题的假设，即随着寿命的延长，人们将需要更多的关怀，并且无法吸引更多的人从事关怀职业。这也可能显示出对年龄的偏见（Jecker 即将发表）。最重要的是，它忽视了自动化的本质，自动化不仅仅是替代人类，而是让人类能够更高效地工作。目前并不十分清楚这里是否真的存在问题，因为讨论主要集中在对机器人去人性化关怀的恐惧上，但实际上和可预见的护理机器人是用于经典技术任务自动化的辅助机器人。因此，它们在行为上只是在护理环境中执行任务的“护理机器人”，而不是像人类一样“关心”病人。似乎“被关心”的成功依赖于这种有意识的“关怀”意义，可预见的机器人无法提供这种意义。如果有什么问题，那么机器人在护理中的风险就是缺乏这种有意识的关怀，因为可能需要更少的人类护理者。有趣的是，关心某物，甚至是虚拟代理人，对关心者本身是有好处的（Lee 等，2019 年）。假装关心的系统将是具有欺骗性的，因此存在问题，除非这种欺骗性被足够大的效用收益所抵消（Coeckelbergh，2016 年）。一些假装在基本层面上“关心”的机器人已经可用（Paro seal），其他机器人正在制造中。也许在某种程度上感受到机器人的关心对于某些患者来说是进步的。

#### 2.5.2 示例（b）性机器人

有几位科技乐观主义者认为，人类很可能对与机器人进行性和伴侣关系感兴趣，并对这个想法感到舒适（Levy 2007）。考虑到人类性偏好的多样性，包括性玩具和性娃娃，这似乎非常可能：问题是是否应该制造和推广这些设备，以及在这个敏感领域是否应该设定限制。最近，这似乎已经成为“机器人哲学”的主流话题（Sullins 2012；Danaher and McArthur 2017；N. Sharkey et al. 2017 \[OIR]；Bendel 2018；Devlin 2018）。

人类长期以来对物品有着深厚的情感依恋，因此与可预测的机器人建立伴侣关系甚至爱情可能会吸引人，尤其是对那些与真实人类相处困难、已经更喜欢狗、猫、鸟、电脑或_玩具宠物_的人来说。Danaher（2019b）反驳（Nyholm and Frank 2017）认为这些关系可以是真正的友谊，因此是一个有价值的目标。即使缺乏深度，这样的友谊似乎可以增加整体效用。在这些讨论中存在一个欺骗的问题，因为机器人（目前）无法表达真实意图，或对人类有感情。众所周知，人类往往会将感情和思想归因于表现得像有感知能力的实体，甚至是明显无行为的非生物物体。此外，为欺骗付费似乎是传统性产业的一个基本部分。

最后，还有一些与性问题经常相关的担忧，即同意（Frank 和 Nyholm 2017），审美关注以及人类可能会被某些经历“腐化”。尽管这种观点可能显得过时，但人类行为受到经验的影响，很可能色情片或性机器人支持将其他人视为纯粹的欲望对象，甚至是虐待的对象，从而破坏了更深层次的性和情欲体验。在这方面，“反对性机器人运动”认为这些设备是奴隶制和卖淫的延续（Richardson 2016）。

### 2.6 自动化和就业

似乎很明显，人工智能和机器人将带来显著的生产力增长，从而增加整体财富。提高生产力的尝试通常是经济的一个特征，尽管对“增长”的强调是现代现象（Harari 2016: 240）。然而，通过自动化实现的生产力增长通常意味着同样的产出所需的人力减少。然而，这并不一定意味着整体就业的减少，因为可用的财富增加，这可以增加足够的需求来抵消生产力的增长。从长远来看，工业社会的生产力提高导致了整体财富的增加。过去曾发生过重大的劳动力市场扰动，例如，农业在 1800 年时雇佣了欧洲和北美地区 60%的劳动力，而到 2010 年时在欧盟雇佣的劳动力约为 5%，在最富裕的国家甚至更少（European Commission 2013）。在 1950 年至 1970 年的 20 年间，英国雇佣的农业工人数量减少了 50%（Zayed and Loft 2019）。其中一些扰动导致了更多劳动密集型产业转移到劳动力成本较低的地方。这是一个持续进行的过程。

经典自动化取代了人类的肌肉，而数字自动化则取代了人类的思维或信息处理——与物理机器不同，数字自动化非常廉价易复制（Bostrom and Yudkowsky 2014）。因此，它可能对劳动力市场产生更为根本的变革。因此，主要问题是：这一次的影响会有所不同吗？新的工作岗位和财富的创造能否跟得上工作岗位的消失？即使情况_不_不同，过渡成本是多少，由谁承担？我们是否需要进行社会调整，以公平分配数字自动化的成本和利益？

对于人工智能引发的失业问题，人们的回应从担忧（Frey 和 Osborne 2013; Westlake 2014）到中立（Metcalf，Keller 和 Boyd 2016 \[OIR]; Calo 2018; Frey 2019）再到乐观（Brynjolfsson 和 McAfee 2016; Harari 2016; Danaher 2019a）不一而足。原则上，自动化对劳动力市场的影响似乎已经相当清楚，涉及两个渠道：

> （i）不同技能工人与新技术之间的互动性质影响劳动力需求，以及（ii）技术进步通过劳动力供应和产品市场的相应变化对平衡的影响。（Goos 2018: 362）

目前在劳动力市场上，由于人工智能和机器人自动化，出现了“工作极化”或“哑铃形”（Goos、Manning 和 Salomons 2009）：高技能技术工作需求旺盛且薪酬高，低技能服务工作需求旺盛但薪酬低，而工厂和办公室的中等资格工作，即大部分工作，由于相对可预测且最有可能被自动化，面临压力和减少（Baldwin 2019）。

也许巨大的生产力增长将使“休闲时代”成为现实，这是（Keynes 1930）预测将在 2030 年左右发生的，假设年增长率为 1%。实际上，我们已经达到了他预计的 2030 年水平，但我们仍在工作-消费更多并发明更多层次的组织。哈拉里解释了这种经济发展如何使人类克服了饥饿、疾病和战争-现在我们通过人工智能追求永生和永恒的幸福，因此他的书名是《赫拉利 2016：75》中的《赫莫·德斯》。

总的来说，失业问题是一个关于社会商品如何公正分配的问题。一个标准观点是，分配正义应该从一个“无知的面纱”（Rawls 1971）后面理性地决定，即假设一个人不知道自己在社会中的真实位置（劳工或工业家等）。Rawls 认为，选择的原则将支持基本自由和对社会中处于最不利地位的成员最有利的分配。人工智能经济似乎具有三个特点，使得这种正义变得不太可能：首先，它在一个基本没有监管的环境中运作，责任往往很难分配。其次，它在具有“赢者通吃”特征的市场中运作，垄断迅速形成。第三，数字服务行业的“新经济”是基于无形资产，也被称为“无资本主义”（Haskel 和 Westlake 2017）。这意味着很难控制不依赖特定地点的物理设施的跨国数字公司。这三个特点似乎表明，如果我们将财富分配交给自由市场力量，结果将是一种极不公正的分配：这确实是我们已经可以看到的发展。

一个没有得到太多关注的有趣问题是人工智能的发展是否具有环境可持续性：与所有计算系统一样，人工智能系统产生的废物很难回收利用，并且它们消耗大量能源，尤其是用于机器学习系统的训练（甚至用于“挖掘”加密货币）。同样，似乎有些参与者将这些成本转嫁给了整个社会。

### 2.7 自主系统

在讨论自主系统时，有几种关于自主性的概念。在哲学辩论中，自主性是责任和人格的基础（Christman 2003 \[2018]）。在这个背景下，责任意味着自主性，但反之则不然，因此可能存在一些具有技术自主性程度的系统，而不涉及责任问题。在机器人学中，自主性的概念较为弱化和技术化：一个系统被称为相对于人类控制具有一定程度的自主性（Müller 2012）。这里与人工智能中的偏见和不透明性问题存在一种类似的并行关系，因为自主性也涉及到权力关系：谁在控制，谁负责？

总的来说，一个问题是自主机器人引发了我们现有概念体系必须适应的程度，还是仅需要技术调整。在大多数司法管辖区，有一个复杂的民事和刑事责任制度来解决这些问题。技术标准，例如医疗环境中安全使用机械的标准，可能需要进行调整。已经存在一个“可验证的人工智能”领域，用于处理这些安全关键系统和“安全应用”。像 IEEE（电气和电子工程师学会）和 BSI（英国标准协会）这样的机构已经制定了“标准”，特别是在更多技术子问题上，如数据安全和透明度。在陆地、水上、水下、空中或太空中的众多自主系统中，我们讨论两个样本：自动驾驶车辆和自主武器。

#### 2.7.1 示例（a）自动驾驶车辆

自动驾驶车辆有望减少目前人类驾驶所造成的巨大伤害，每年约有 100 万人死亡，更多人受伤，环境受到污染，地球被混凝土和柏油封闭，城市里停满了汽车等等。然而，关于自动驾驶车辆应该如何行为以及责任和风险应该如何在复杂的系统中分配，似乎存在一些问题。（对于完全自动化或“5 级”汽车（SAE International 2018）的开发需要多长时间，也存在很大分歧。）

在这个背景下，有一些关于“电车难题”的讨论。在经典的“电车难题”（Thomson 1976; Woollard and Howard-Snyder 2016: section 2）中，提出了各种困境。最简单的版本是一辆电车在一条轨道上行驶，将撞向五个人并导致他们死亡，除非将电车转向一条侧轨，但在那条侧轨上有一个人，如果电车选择那条侧轨，他将会被撞死。这个例子可以追溯到（Foot 1967: 6）中的一句话，他在其中讨论了一些行动的容忍和意图后果不同的困境案例。“电车难题”并不是描述实际的伦理问题，也不能通过“正确”的选择来解决。相反，它们是思想实验，将选择人为地限制在有限的几个不同的一次性选项上，并且代理人具有完美的知识。这些问题被用作研究伦理直觉和理论的理论工具，特别是主动做某事与允许某事发生、意图后果与容忍后果以及后果主义与其他规范方法之间的差异（Kamm 2016）。这类问题让许多人想起了实际驾驶和自动驾驶中遇到的问题（Lin 2016）。然而，实际上，司机或自动驾驶汽车可能永远不需要解决电车难题（但参见 Keeling 2020）。虽然自动驾驶汽车的电车难题受到了很多媒体的关注（Awad et al. 2018），但它们似乎对伦理理论或自动驾驶车辆的编程没有提供任何新的东西。

在驾驶中，更常见的道德问题，如超速、冒险超车、不保持安全距离等，都是个人利益与公共利益之间的经典问题。其中绝大部分都受到了驾驶法规的约束。将汽车编程为“按规则行驶”而不是“按乘客的利益”或“追求最大效用”，因此成为了编程伦理机器的标准问题（参见[第 2.9 节](https://plato.stanford.edu/entries/ethics-ai/#MachEthi)）。可能还有一些礼貌的自由裁量规则和关于何时违反规则的有趣问题（Lin 2016），但再次看起来更像是将标准考虑因素（规则与效用）应用于自动驾驶车辆的情况。

在这一领域，值得注意的政策努力包括（德国联邦交通和数字基础设施部 2017 年）的报告，强调“安全”是首要目标。第 10 条规定

在自动化和互联驾驶系统的情况下，之前由个体独自承担的责任转移到了技术系统的制造商和运营商，以及负责基础设施、政策和法律决策的机构。

（参见下面的[2.10.1 节](https://plato.stanford.edu/entries/ethics-ai/#RespForRobo)）。由此产生的德国和欧盟关于自动驾驶许可的法律比美国的法律更加严格，美国的一些公司采用了“在消费者身上进行测试”的策略，而没有得到消费者或潜在受害者的知情同意。

#### 2.7.2 例子（b）自主武器

自动化武器的概念相当古老：

例如，我们可以不再使用简单的制导导弹或遥控飞行器，而是可以发射完全自主的陆地、海洋和空中载具，能够执行复杂而广泛的侦察和攻击任务。（DARPA 1983: 1）

这个提议当时被嘲笑为“幻想”（Dreyfus, Dreyfus, and Athanasiou 1986: ix），但现在它已经成为现实，至少对于更容易识别的目标（导弹、飞机、船只、坦克等），但对于人类战斗人员来说并非如此。对于（致命的）自主武器系统（AWS 或 LAWS）的主要反对观点是，它们支持非法杀戮，剥夺了人类的责任，并增加了战争或杀戮的可能性 - 有关问题的详细列表请参见 Lin，Bekey 和 Abney（2008: 73-86）。

降低使用这些系统（自动驾驶车辆、“发射即忘”导弹或装有爆炸物的无人机）的门槛，减少被追究责任的可能性，似乎会增加使用这些系统的可能性。在常规的无人机战争中，存在着一种关键的不对称性，即一方可以无罪杀人，因此几乎没有理由不这样做（例如，美国在巴基斯坦的行动）。很容易想象出一种小型无人机，它可以搜索、识别并杀死一个人，或者可能是某一类人。这些是由“停止杀人机器人运动”和其他活动团体提出的案例。有些案例似乎等同于说自主武器确实是武器...而武器是用来杀人的，但我们仍然大量生产它们。关于追究责任的问题，自主武器可能会使确定和起诉负责人更加困难，但鉴于数字记录可以保留，至少在常规战争中并不清楚。分配惩罚的困难有时被称为“报复差距”（Danaher 2016a）。

另一个问题是使用自主武器是否会使战争变得更糟，还是减少战争的恶劣程度。如果机器人能减少战争罪行和战争中的犯罪行为，答案可能是肯定的，并且已被用作支持这些武器的论据（Arkin 2009；Müller 2016a），但也被用作反对它们的论据（Amoroso 和 Tamburrini 2018）。可以说，主要威胁不是在常规战争中使用这些武器，而是在非对称冲突或由非国家主体，包括犯罪分子使用它们。

也有人说，自主武器无法遵守国际人道法，该法要求在军事冲突中遵守区分（战斗人员和平民之间的区别）、比例（武力的比例）和军事必要性（武力的必要性）的原则（A. Sharkey 2019）。确实，战斗人员和非战斗人员之间的区分很困难，但平民船只和军舰之间的区分很容易——所以这一切只是说，如果这些武器违反人道法，我们不应该制造和使用这些武器。还有人提出了其他担忧，认为被自主武器杀害会威胁人的尊严，但即使是这些武器禁令的支持者似乎也认为这些不是好的论据：

> 还有其他武器和技术也会损害人的尊严。鉴于这一点，以及概念本身的模糊性，更明智的做法是在反对自主武器的论证中运用多种类型的反对意见，而不仅仅依赖于人的尊严（A. Sharkey 2019）。

在军事武器的指导方针中，人们一直强调将人类“置于循环中”或“置于循环外”——这些“有意义的控制”方式在（Santoni de Sio 和 van den Hoven 2018）中有所讨论。关于自主武器杀伤责任的分配困难进行了讨论，并提出了“责任缺口”（尤其是 Rob Sparrow 2007），意味着既不是人类也不是机器可能负责。另一方面，我们并不假设每个事件都有某个人对该事件负责，而真正的问题可能是风险的分配（Simpson 和 Müller 2016）。风险分析（Hansson 2013）表明，关键是确定谁面临风险，谁是潜在的受益者，以及谁做出决策（Hansson 2018：1822-1824）。

### 2.8 机器伦理学

机器伦理是为机器而设的伦理，是为“伦理机器”而设的，是为机器作为“主体”而设的，而不是为人类使用机器作为“客体”而设的。这往往不太清楚是否应该涵盖所有的人工智能伦理或者是其中的一部分（Floridi 和 Saunders 2004; Moor 2006; Anderson 和 Anderson 2011; Wallach 和 Asaro 2017）。有时候看起来好像有一个（可疑的）推理在这里起作用，即如果机器以伦理相关的方式行动，那么我们就需要机器伦理。因此，有些人使用了一个更广泛的概念：

> 机器伦理关注的是确保机器对人类用户以及可能对其他机器的行为是符合伦理的。（Anderson 和 Anderson 2007: 15）

这可能包括仅仅涉及产品安全的事项，例如。其他作者听起来相当雄心勃勃，但使用了一个更狭窄的概念：

> 人工智能推理应该能够考虑社会价值观、道德和伦理考虑因素；权衡不同多元文化背景下不同利益相关者所持价值观的优先级；解释其推理过程；并保证透明度。（Dignum 2018: 1, 2）

机器伦理的讨论中，有一些非常重要的假设是机器在某种意义上可以成为道德行为的伦理主体，或者说是“自治道德主体”（见 van Wynsberghe 和 Robbins 2019）。机器伦理的基本思想现在正在实际的机器人技术中得到应用，但通常并不认为这些机器在任何实质意义上都是人工道德主体（Winfield 等人 2019）。有时候会观察到，一个被编程遵循道德规则的机器人很容易被修改为遵循不道德的规则（Vanderelst 和 Winfield 2018）。

机器伦理可能采取“法律”的形式的想法，由艾萨克·阿西莫夫（Isaac Asimov）进行了著名的研究，他提出了“机器人三定律”（Asimov 1942）：

第一定律——机器人不得伤害人类，也不得通过不采取行动使人类受到伤害。第二定律——机器人必须服从人类的命令，除非这些命令与第一定律相冲突。第三定律——机器人必须保护自己的存在，只要这种保护不与第一或第二定律相冲突。

阿西莫夫在一系列故事中展示了这三个定律之间的冲突如何使它们在使用上变得棘手，尽管它们有着层级组织。

并没有明确的“机器伦理”概念，因为较弱的版本有可能将“拥有伦理”降低到通常不被认为足够的概念（例如，没有“反思”甚至没有“行动”）；而更强的概念则可能描述了一个目前为空的集合。

### 2.9 人工道德代理

如果将机器伦理视为关注道德主体，在某种实质意义上，这些主体可以被称为“人工道德主体”，拥有权利和责任。然而，关于人工实体的讨论挑战了伦理学中的许多常见概念，从人类案例中抽象出来可以非常有用（参见 Misselhorn 2020; Powers 和 Ganascia 即将出版）。

一些作者在使用“人工道德主体”一词时，采用了一个要求较低的意义，借鉴了软件工程中“主体”一词的用法，此时责任和权利的问题不会出现（Allen，Varner 和 Zinser 2000）。詹姆斯·穆尔（2006）区分了四种类型的机器主体：道德影响主体（例如，机器人骑师），隐含道德主体（例如，安全自动驾驶），显性道德主体（例如，使用形式化方法估计效用），以及完全道德主体（能够“做出明确的道德判断，并且通常有能力合理地证明它们。一个普通成年人是一个完全道德主体。”）已经提出了几种实现“显性”或“完全”道德主体的方法，通过编程（操作性道德），通过“发展”伦理学本身（功能性道德），以及具有完全智能和感知能力的完全道德（Allen，Smit 和 Wallach 2005; Moor 2006）。编程代理有时被认为不是“完全”代理，因为它们“能力强大但没有理解力”，就像大脑中的神经元一样（Dennett 2017; Hakli 和 Mäkelä 2019）。

在一些讨论中，“道德患者”的概念起着作用：道德“代理人”有责任，而道德“患者”有权利，因为对他们的伤害是重要的。似乎很明显，有些实体是患者而不是代理人，例如，能感受痛苦但不能做出合理选择的简单动物。另一方面，通常认为所有代理人也将成为患者（例如，在康德的框架下）。通常，成为一个人被认为是使一个实体成为负责任的代理人的原因，一个能够承担义务并成为伦理关注对象的人。这样的人格通常是与现象意识、意图和自由意志相关的深层概念（Frankfurt 1971; Strawson 1998）。Torrance（2011）提出“人工（或机器）伦理可以被定义为设计机器来做那些当人类做时表明这些人具有‘伦理地位’的事情”（2011: 116）-他认为这是“伦理生产力和伦理接受能力”（2011: 117）-他对道德代理人和患者的表达方式。

#### 2.9.1 对机器人的责任

有广泛的共识认为，在面对新技术时，问责、责任和法治是必须维护的基本要求（欧洲科学与新技术伦理小组 2018 年，18 页），但在机器人的情况下，问题是如何做到这一点以及如何分配责任。如果机器人行动，它们自己会对自己的行为负责、承担责任或接受问责吗？或者，风险的分配是否应优先于责任的讨论？

传统的责任分配已经存在：汽车制造商负责汽车的技术安全，驾驶员负责驾驶，机械师负责适当的维护，公共机构负责道路的技术状况等等。总的来说

基于人工智能的决策或行动的影响往往是许多参与者之间无数互动的结果，包括设计师、开发人员、用户、软件和硬件... 随着分布式代理的出现，责任也分散了。（Taddeo 和 Floridi 2018: 751）。

这种分布可能发生的方式并不是人工智能特有的问题，但在这个背景下，它变得特别紧迫（Nyholm 2018a，2018b）。在经典控制工程中，分布式控制通常通过控制层次结构加上这些层次结构之间的控制回路来实现。

#### 2.9.2 机器人的权利

一些作者指出，应该认真考虑是否应该给予当前的机器人权利（Gunkel 2018a, 2018b; Danaher forthcoming; Turner 2019）。这个立场似乎在很大程度上依赖于对反对者的批评以及对机器人和其他非人类被视为拥有权利的经验观察。在这方面，提出了一个“关系转向”的观点：如果我们将机器人视为拥有权利的对象，那么我们可能会明智地不去探究他们是否“真正”拥有这些权利（Coeckelbergh 2010, 2012, 2018）。这引发了一个问题，即这种反实在主义或准实在主义能够走多远，以及在以人为中心的方法中说“机器人拥有权利”意味着什么（Gerdes 2016）。在辩论的另一方面，Bryson 坚持认为机器人不应该享有权利（Bryson 2010），尽管她认为这是一种可能性（Gunkel and Bryson 2014）。

是否应该将机器人（或其他人工智能系统）赋予“法律主体”或“法人”地位是一个完全不同的问题，就像自然人、国家、企业或组织一样都是“实体”，即它们可以拥有法律权利和义务。欧洲议会曾考虑将此类地位分配给机器人，以处理民事责任（欧洲议会 2016 年；Bertolini 和 Aiello 2018 年），但不包括刑事责任，刑事责任是为自然人保留的。也可以将一定的权利和义务仅分配给机器人的某个子集。有人说，“这样的立法行动在道德上是不必要的，法律上也会带来麻烦”，因为它不符合人类的利益（Bryson，Diamantis 和 Grant 2017 年：273）。在环境伦理学中，长期以来一直存在关于赋予树木等自然物体法律权利的讨论（C. D. Stone 1972 年）。

还有人说，未来发展具有权利或人工道德对象的机器人的原因在伦理上是值得怀疑的（van Wynsberghe 和 Robbins 2019 年）。在“人工意识”研究者社区中，人们非常关注是否在伦理上创造这种意识是合适的，因为创造它可能意味着对一个有感知能力的存在有伦理义务，例如，不伤害它，不通过关闭它来终结它的存在——一些作者呼吁对“合成现象学”实施“停止令”（Bentley 等人 2018 年：28f）。

### 2.10 单一性

#### 2.10.1 单一性和超级智能

在某些领域，当前人工智能的目标被认为是“人工通用智能”（AGI），与技术或“狭义”人工智能形成对比。AGI 通常被区分为一种通用目的系统，与西尔的“强人工智能”概念有所不同：

> 给予计算机适当的程序，可以说它们“理解”并具有其他认知状态。（西尔 1980: 417）

人工智能和机器人伦理 “奇点”（singularity）的概念是，如果人工智能的发展轨迹达到了与人类智能水平相当的系统，那么这些系统本身就具备了开发超越人类智能水平的人工智能系统的能力，即它们是“超级智能”的（见下文）。这样的超级智能人工智能系统将会迅速自我改进或开发出更加智能的系统。在达到超级智能人工智能之后，这种剧变被称为“奇点”，从而使得人工智能的发展超出了人类的控制，并且难以预测（Kurzweil 2005: 487）。

“我们创造的机器人将会掌控世界”的恐惧甚至在计算机出现之前就已经引起了人类的想象（例如，Butler 1863），并且是Čapek 的著名戏剧中的中心主题，该戏剧首次引入了“机器人”一词（Čapek 1920）。这种恐惧首次被形容为现有人工智能进入“智能爆炸”的可能轨迹，由 Irvin Good 提出：

让超级智能机器被定义为一种能够远远超越任何聪明人的智力活动的机器。由于机器的设计是其中之一的智力活动，超级智能机器可以设计出更好的机器；这将无疑引发一场“智能爆炸”，人类的智能将远远落后。因此，第一台超级智能机器是人类需要制造的最后一项发明，前提是机器足够温顺，能够告诉我们如何控制它。（Good 1965: 33）

从加速到奇点的乐观论证由库兹韦尔（Kurzweil）（1999 年，2005 年，2012 年）详细阐述，他基本上指出，计算能力一直以指数方式增长，即自 1970 年以来，根据“摩尔定律”（关于晶体管数量）每两年翻一番，而且在未来一段时间内将继续如此。他在（Kurzweil 1999）中预测，到 2010 年，超级计算机将达到人类计算能力，到 2030 年，“思维上传”将成为可能，到 2045 年将发生“奇点”。库兹韦尔谈到了一种可以以给定成本购买的计算能力的增加，但当然，近年来 AI 公司可用的资金也大幅增加：Amodei 和 Hernandez（2018 \[OIR]）因此估计，在 2012 年至 2018 年期间，用于训练特定 AI 系统的实际计算能力每 3.4 个月翻一番，增加了 300,000 倍，而不是每两年翻一番所产生的 7 倍增长。

这个论点的一个常见版本（Chalmers 2010）讨论的是人工智能系统的“智能”增长（而不是计算能力），但“奇点”的关键点仍然是人工智能的进一步发展被人工智能系统接管并超越人类水平的那个点。Bostrom（2014）详细解释了在那一点会发生什么以及对人类的风险是什么。这个讨论在 Eden 等人（2012）、Armstrong（2014）和 Shanahan（2015）中有总结。除了计算能力的增加之外，还有其他可能通向超级智能的路径，例如在计算机上完全模拟人脑（Kurzweil 2012；Sandberg 2013）、生物路径或网络和组织（Bostrom 2014：22-51）。

尽管在将“智能”与处理能力等同起来的认定中存在明显的弱点，但 Kurzweil 似乎是对的，人类往往低估了指数增长的力量。小测试：如果你每走一步的步长是前一步的两倍，从一米的步长开始，你走 30 步会走多远？（答案：几乎比地球上唯一的永久天然卫星走得更远。）的确，人工智能的大部分进展很容易归因于处理器速度的提高、更大的存储空间和更高的投资（Müller 2018）。实际的加速和速度在（Müller 和 Bostrom 2016；Bostrom，Dafoe 和 Flynn 即将出版）中有讨论；Sandberg（2019）认为进展将会持续一段时间。

这场辩论的参与者都是科技爱好者，他们期望科技能够快速发展并带来广泛的欢迎变革。然而，除此之外，他们又分为两派：一派关注利益（例如库兹韦尔），另一派关注风险（例如博斯特罗姆）。这两派都赞同“超人类”观点，即人类以不同的物理形式存活，例如上传到计算机中（Moravec 1990, 1998; Bostrom 2003a, 2003c）。他们还考虑了“人类增强”在各个方面的前景，包括智能，通常被称为“IA”（智能增强）。未来的人工智能可能被用于人类增强，或进一步促使人类这个清晰定义的个体的消解。罗宾·汉森对于如果人类的“大脑仿真”使得真正智能的机器人或“ems”成为可能，经济上会发生什么提供了详细的推测（Hanson 2016）。

从超级智能到风险的论证需要假设超级智能并不意味着善意，这与康德伦理学传统的观点相反，后者认为更高水平的理性或智能将伴随着对道德的更好理解和更好的道德行为能力（Gewirth 1978; Chalmers 2010: 36f）。关于超级智能风险的论证认为理性和道德是完全独立的维度，有时被明确地称为“正交性论题”（Bostrom 2012; Armstrong 2013; Bostrom 2014: 105–109）。

从各个角度提出了对奇点叙事的批评。库兹韦尔和博斯特罗姆似乎假设智能是一个一维属性，并且智能代理的集合在数学意义上是完全有序的，但他们的书中都没有详细讨论智能。总的来说，可以说尽管有一些努力，但在超级智能和奇点的强大叙事中所做的假设并没有得到详细的调查。一个问题是这样的奇点是否会发生——它可能在概念上是不可能的，在实践上是不可能的，或者只是因为偶然事件，包括人们积极阻止它而没有发生。从哲学上讲，有趣的问题是奇点是否只是一个“神话”（弗洛里迪 2016；加纳西亚 2017），而不是实际人工智能研究的轨迹。这是从业者经常假设的（例如，布鲁克斯 2017 \[OIR]）。他们这样做可能是因为他们担心公共关系的反弹，因为他们高估了实际问题，或者因为他们有充分的理由认为超级智能不太可能是当前人工智能研究的结果（穆勒即将出版-a）。这个讨论引发了一个问题，即对“奇点”的关注是否只是基于人类恐惧的关于虚构人工智能的叙事。但即使一个人认为有负面理由令人信服，奇点不太可能发生，仍然有很大的可能性证明自己是错误的。哲学不是“一门科学的安全道路”（康德 1791：B15），也许人工智能和机器人也不是（穆勒 2020）。因此，似乎讨论奇点的非常高影响风险是有正当理由的，即使一个人认为奇点发生的概率非常低。

思考超级智能的长期影响引发了一个问题，即超级智能是否会导致人类物种的灭绝，这被称为“存在风险”（或 XRisk）：超级智能系统可能具有与人类在地球上存在相冲突的偏好，并可能决定终结人类的存在，并且由于其卓越的智能，它们将有能力这样做（或者它们可能因为并不真正关心而终结人类存在）。

长期思考是这一文献的关键特征。无论奇点（或其他灾难性事件）在 30 年、300 年还是 3000 年后发生，实际上并不重要（Baum 等，2019）。也许存在一种天文模式，智能物种注定在某个时刻发现人工智能，并因此导致自身灭亡。这样的“伟大过滤器”将有助于解释“费米悖论”，即尽管宇宙中出现生命的概率很高，但为什么我们没有发现生命的迹象。如果我们发现“伟大过滤器”在我们之前，而不是地球已经度过的障碍，那将是个坏消息。有时，这些问题被狭义地理解为关于人类灭绝的问题（Bostrom，2013），或者更广泛地涉及物种面临的任何重大风险（Rees，2018）——其中人工智能只是其中之一（Häggström，2016；Ord，2020）。Bostrom 还使用“全球灾难风险”这一类别来描述那些在“范围”和“严重性”这两个维度上足够高的风险（Bostrom 和Ćirković，2011；Bostrom，2013）。

这些关于风险的讨论通常与风险下的伦理问题没有联系（例如，Hansson 2013, 2018）。长期视角有其自身的方法论挑战，但已经产生了广泛的讨论：（Tegmark 2017）关注于在奇点之后的人工智能和人类生活“3.0”，而 Russell、Dewey 和 Tegmark（2015）以及 Bostrom、Dafoe 和 Flynn（即将出版）则调查了伦理人工智能的长期政策问题。一些论文集研究了人工通用智能（AGI）的风险以及可能使这一发展更具风险或风险较小的因素（Müller 2016b；Callaghan 等人 2017；Yampolskiy 2018），包括非代理人人工智能的发展（Drexler 2019）。

#### 2.10.3 控制超级智能？

在狭义上，"控制问题"是指我们人类如何在 AI 系统变得超级智能后仍然保持对其的控制（Bostrom 2014: 127ff）。在广义上，这是一个问题，即我们如何确保 AI 系统在人类的感知中是积极的（Russell 2019）；这有时被称为"价值对齐"。控制超级智能的难易程度在很大程度上取决于超级智能系统的"起飞"速度。这导致了对具有自我改进能力的系统（如 AlphaZero）特别关注（Silver et al. 2018）。

这个问题的一个方面是，我们可能会决定某个特定的特征是可取的，但后来发现它有意想不到的后果，这些后果是如此负面，以至于我们不再希望拥有那个特征。这是古老的米达斯王的问题，他希望他触碰的一切都变成黄金。这个问题已经在各种例子中讨论过，比如"纸夹子最大化者"（Bostrom 2003b），或者优化国际象棋表现的程序（Omohundro 2014）。

关于超级智能的讨论包括对全知存在的猜测，对“末日”后的彻底改变的思考，以及通过超越我们当前的肉体形态来实现永生的承诺-因此有时候它们具有明显的宗教色彩（Capurro 1993; Geraci 2008, 2010; O’Connell 2017: 160ff）。这些问题也提出了一个众所周知的认识论问题：我们能否了解全知的方式（Danaher 2015）？通常的反对者已经出现了：无神论者的典型回应是

> 人们担心计算机会变得太聪明并接管世界，但真正的问题是它们太愚蠢了，它们已经接管了世界（Domingos 2015）

新的虚无主义者解释说，通过信息技术的“技术催眠”现在已成为我们从意义丧失中分散注意力的主要方法（Gertz 2018）。因此，双方都会说我们需要针对实际人工智能和机器人出现的“小”问题的伦理道德（上述[2.1 至 2.9 节](https://plato.stanford.edu/entries/ethics-ai/#MainDeba)），而对于来自人工智能的存在风险的“大伦理”则需要的较少（[第 2.10 节](https://plato.stanford.edu/entries/ethics-ai/#Sing)）。

## 3. 结束

人工智能的奇点再次引发了对 AI 概念的问题。令人注目的是，自从“达特茅斯夏季研究项目”（麦卡锡等人，1955 年\[OIR]；西蒙和纽厄尔，1958 年）开始，想象力或“视野”就一直在起着核心作用。而对这种愿景的评估则经历了戏剧性的变化：几十年间，我们从“AI 是不可能的”（德雷福斯，1972 年）和“AI 只是自动化”（莱特希尔，1973 年）的口号，转变为“AI 将解决所有问题”（库兹韦尔，1999 年）和“AI 可能会杀死我们所有人”（博斯特罗姆，2014 年）。这引起了媒体的关注和公关努力，但也引发了一个问题，即这种“AI 的哲学和伦理”到底是关于 AI 还是关于一种想象中的技术。正如我们在开头所说的，人工智能和机器人引发了关于我们应该如何处理这些系统、系统本身应该做什么以及它们在长期内存在哪些风险的根本问题。它们也挑战了人类作为地球上智慧和主导物种的观点。我们已经看到了一些被提出的问题，并且将密切关注技术和社会发展，以及及早发现新问题、进行哲学分析并从传统哲学问题中学习。

## Bibliography

NOTE: Citations in the main text annotated “\[OIR]” may be found in the [Other Internet Resources](https://plato.stanford.edu/entries/ethics-ai/#Oth) section below, not in the Bibliography.

* Abowd, John M, 2017, “How Will Statistical Agencies Operate When All Data Are Private?”, _Journal of Privacy and Confidentiality_, 7(3): 1–15. doi:10.29012/jpc.v7i3.404
* Allen, Colin, Iva Smit, and Wendell Wallach, 2005, “Artificial Morality: Top-down, Bottom-up, and Hybrid Approaches”, _Ethics and Information Technology_, 7(3): 149–155. doi:10.1007/s10676-006-0004-4
* Allen, Colin, Gary Varner, and Jason Zinser, 2000, “Prolegomena to Any Future Artificial Moral Agent”, _Journal of Experimental & Theoretical Artificial Intelligence_, 12(3): 251–261. doi:10.1080/09528130050111428
* Amoroso, Daniele and Guglielmo Tamburrini, 2018, “The Ethical and Legal Case Against Autonomy in Weapons Systems”, _Global Jurist_, 18(1): art. 20170012. doi:10.1515/gj-2017-0012
* Anderson, Janna, Lee Rainie, and Alex Luchsinger, 2018, _Artificial Intelligence and the Future of Humans_, Washington, DC: Pew Research Center.
* Anderson, Michael and Susan Leigh Anderson, 2007, “Machine Ethics: Creating an Ethical Intelligent Agent”, _AI Magazine_, 28(4): 15–26.
* ––– (eds.), 2011, _Machine Ethics_, Cambridge: Cambridge University Press. doi:10.1017/CBO9780511978036
* Aneesh, A., 2006, _Virtual Migration: The Programming of Globalization_, Durham, NC and London: Duke University Press.
* Arkin, Ronald C., 2009, _Governing Lethal Behavior in Autonomous Robots_, Boca Raton, FL: CRC Press.
* Armstrong, Stuart, 2013, “General Purpose Intelligence: Arguing the Orthogonality Thesis”, _Analysis and Metaphysics_, 12: 68–84.
* –––, 2014, _Smarter Than Us_, Berkeley, CA: MIRI.
* Arnold, Thomas and Matthias Scheutz, 2017, “Beyond Moral Dilemmas: Exploring the Ethical Landscape in HRI”, in _Proceedings of the 2017 ACM/IEEE International Conference on Human-Robot Interaction—HRI ’17_, Vienna, Austria: ACM Press, 445–452. doi:10.1145/2909824.3020255
* Asaro, Peter M., 2019, “AI Ethics in Predictive Policing: From Models of Threat to an Ethics of Care”, _IEEE Technology and Society Magazine_, 38(2): 40–53. doi:10.1109/MTS.2019.2915154
* Asimov, Isaac, 1942, “Runaround: A Short Story”, _Astounding Science Fiction_, March 1942. Reprinted in “I, Robot”, New York: Gnome Press 1950, 1940ff.
* Awad, Edmond, Sohan Dsouza, Richard Kim, Jonathan Schulz, Joseph Henrich, Azim Shariff, Jean-François Bonnefon, and Iyad Rahwan, 2018, “The Moral Machine Experiment”, _Nature_, 563(7729): 59–64. doi:10.1038/s41586-018-0637-6
* Baldwin, Richard, 2019, _The Globotics Upheaval: Globalisation, Robotics and the Future of Work_, New York: Oxford University Press.
* Baum, Seth D., Stuart Armstrong, Timoteus Ekenstedt, Olle Häggström, Robin Hanson, Karin Kuhlemann, Matthijs M. Maas, James D. Miller, Markus Salmela, Anders Sandberg, Kaj Sotala, Phil Torres, Alexey Turchin, and Roman V. Yampolskiy, 2019, “Long-Term Trajectories of Human Civilization”, _Foresight_, 21(1): 53–83. doi:10.1108/FS-04-2018-0037
* Bendel, Oliver, 2018, “Sexroboter aus Sicht der Maschinenethik”, in _Handbuch Filmtheorie_, Bernhard Groß and Thomas Morsch (eds.), (Springer Reference Geisteswissenschaften), Wiesbaden: Springer Fachmedien Wiesbaden, 1–19. doi:10.1007/978-3-658-17484-2\*22-1
* Bennett, Colin J. and Charles Raab, 2006, _The Governance of Privacy: Policy Instruments in Global Perspective_, second edition, Cambridge, MA: MIT Press.
* Benthall, Sebastian and Bruce D. Haynes, 2019, “Racial Categories in Machine Learning”, in _Proceedings of the Conference on Fairness, Accountability, and Transparency - FAT_ ’19\*, Atlanta, GA, USA: ACM Press, 289–298. doi:10.1145/3287560.3287575
* Bentley, Peter J., Miles Brundage, Olle Häggström, and Thomas Metzinger, 2018, “Should We Fear Artificial Intelligence? In-Depth Analysis”, European Parliamentary Research Service, Scientific Foresight Unit (STOA), March 2018, PE 614.547, 1–40. \[[Bentley et al. 2018 available online](https://op.europa.eu/en/publication-detail/-/publication/f27d7e2c-88a2-11e8-ac6a-01aa75ed71a1)]
* Bertolini, Andrea and Giuseppe Aiello, 2018, “Robot Companions: A Legal and Ethical Analysis”, _The Information Society_, 34(3): 130–140. doi:10.1080/01972243.2018.1444249
* Binns, Reuben, 2018, “Fairness in Machine Learning: Lessons from Political Philosophy”, _Proceedings of the 1st Conference on Fairness, Accountability and Transparency_, in _Proceedings of Machine Learning Research_, 81: 149–159.
* Bostrom, Nick, 2003a, “Are We Living in a Computer Simulation?”, _The Philosophical Quarterly_, 53(211): 243–255. doi:10.1111/1467-9213.00309
* –––, 2003b, “Ethical Issues in Advanced Artificial Intelligence”, in _Cognitive, Emotive and Ethical Aspects of Decision Making in Humans and in Artificial Intelligence, Volume 2_, Iva Smit, Wendell Wallach, and G.E. Lasker (eds), (IIAS-147-2003), Tecumseh, ON: International Institute of Advanced Studies in Systems Research and Cybernetics, 12–17. \[[Botstrom 2003b revised available online](https://nickbostrom.com/ethics/ai.html)]
* –––, 2003c, “Transhumanist Values”, in _Ethical Issues for the Twenty-First Century_, Frederick Adams (ed.), Bowling Green, OH: Philosophical Documentation Center Press.
* –––, 2012, “The Superintelligent Will: Motivation and Instrumental Rationality in Advanced Artificial Agents”, _Minds and Machines_, 22(2): 71–85. doi:10.1007/s11023-012-9281-3
* –––, 2013, “Existential Risk Prevention as Global Priority”, _Global Policy_, 4(1): 15–31. doi:10.1111/1758-5899.12002
* –––, 2014, _Superintelligence: Paths, Dangers, Strategies_, Oxford: Oxford University Press.
* Bostrom, Nick and Milan M. Ćirković (eds.), 2011, _Global Catastrophic Risks_, New York: Oxford University Press.
* Bostrom, Nick, Allan Dafoe, and Carrick Flynn, forthcoming, “Policy Desiderata for Superintelligent AI: A Vector Field Approach (V. 4.3)”, in _Ethics of Artificial Intelligence_, S Matthew Liao (ed.), New York: Oxford University Press. \[[Bostrom, Dafoe, and Flynn forthcoming – preprint available online](https://nickbostrom.com/papers/aipolicy.pdf)]
* Bostrom, Nick and Eliezer Yudkowsky, 2014, “The Ethics of Artificial Intelligence”, in _The Cambridge Handbook of Artificial Intelligence_, Keith Frankish and William M. Ramsey (eds.), Cambridge: Cambridge University Press, 316–334. doi:10.1017/CBO9781139046855.020 \[[Bostrom and Yudkowsky 2014 available online](http://intelligence.org/files/EthicsofAI.pdf)]
* Bradshaw, Samantha, Lisa-Maria Neudert, and Phil Howard, 2019, “Government Responses to Malicious Use of Social Media”, Working Paper 2019.2, Oxford: Project on Computational Propaganda. \[[Bradshaw, Neudert, and Howard 2019 available online/](https://comprop.oii.ox.ac.uk/research/government-responses/)]
* Brownsword, Roger, Eloise Scotford, and Karen Yeung (eds.), 2017, _The Oxford Handbook of Law, Regulation and Technology_, Oxford: Oxford University Press. doi:10.1093/oxfordhb/9780199680832.001.0001
* Brynjolfsson, Erik and Andrew McAfee, 2016, _The Second Machine Age: Work, Progress, and Prosperity in a Time of Brilliant Technologies_, New York: W. W. Norton.
* Bryson, Joanna J., 2010, “Robots Should Be Slaves”, in _Close Engagements with Artificial Companions: Key Social, Psychological, Ethical and Design Issues_, Yorick Wilks (ed.), (Natural Language Processing 8), Amsterdam: John Benjamins Publishing Company, 63–74. doi:10.1075/nlp.8.11bry
* –––, 2019, “The Past Decade and Future of Ai’s Impact on Society”, in _Towards a New Enlightenment: A Transcendent Decade_, Madrid: Turner - BVVA. \[[Bryson 2019 available online](https://www.bbvaopenmind.com/en/books/towards-a-new-enlightenment-a-transcendent-decade/)]
* Bryson, Joanna J., Mihailis E. Diamantis, and Thomas D. Grant, 2017, “Of, for, and by the People: The Legal Lacuna of Synthetic Persons”, _Artificial Intelligence and Law_, 25(3): 273–291. doi:10.1007/s10506-017-9214-9
* Burr, Christopher and Nello Cristianini, 2019, “Can Machines Read Our Minds?”, _Minds and Machines_, 29(3): 461–494. doi:10.1007/s11023-019-09497-4
* Butler, Samuel, 1863, “Darwin among the Machines: Letter to the Editor”, Letter in _The Press (Christchurch)_, 13 June 1863. \[[Butler 1863 available online](http://nzetc.victoria.ac.nz/tm/scholarly/tei-ButFir-t1-g1-t1-g1-t4-body.html)]
* Callaghan, Victor, James Miller, Roman Yampolskiy, and Stuart Armstrong (eds.), 2017, _The Technological Singularity: Managing the Journey_, (The Frontiers Collection), Berlin, Heidelberg: Springer Berlin Heidelberg. doi:10.1007/978-3-662-54033-6
* Calo, Ryan, 2018, “Artificial Intelligence Policy: A Primer and Roadmap”, _University of Bologna Law Review_, 3(2): 180-218. doi:10.6092/ISSN.2531-6133/8670
* Calo, Ryan, A. Michael Froomkin, and Ian Kerr (eds.), 2016, _Robot Law_, Cheltenham: Edward Elgar.
* Čapek, Karel, 1920, _R.U.R._, Prague: Aventium. Translated by Peter Majer and Cathy Porter, London: Methuen, 1999.
* Capurro, Raphael, 1993, “Ein Grinsen Ohne Katze: Von der Vergleichbarkeit Zwischen ‘Künstlicher Intelligenz’ und ‘Getrennten Intelligenzen’”, _Zeitschrift für philosophische Forschung_, 47: 93–102.
* Cave, Stephen, 2019, “To Save Us from a Kafkaesque Future, We Must Democratise AI”, _The Guardian_ , 04 January 2019. \[[Cave 2019 available online](https://www.theguardian.com/commentisfree/2019/jan/04/future-democratise-ai-artificial-intelligence-power)]
* Chalmers, David J., 2010, “The Singularity: A Philosophical Analysis”, _Journal of Consciousness Studies_, 17(9–10): 7–65. \[[Chalmers 2010 available online](http://consc.net/papers/singularityjcs.pdf)]
* Christman, John, 2003 \[2018], “Autonomy in Moral and Political Philosophy”, (Spring 2018) _Stanford Encyclopedia of Philosophy_ (EDITION NEEDED), URL = [https://plato.stanford.edu/archives/spr2018/entries/autonomy-moral/](https://plato.stanford.edu/archives/spr2018/entries/autonomy-moral/)
* Coeckelbergh, Mark, 2010, “Robot Rights? Towards a Social-Relational Justification of Moral Consideration”, _Ethics and Information Technology_, 12(3): 209–221. doi:10.1007/s10676-010-9235-5
* –––, 2012, _Growing Moral Relations: Critique of Moral Status Ascription_, London: Palgrave. doi:10.1057/9781137025968
* –––, 2016, “Care Robots and the Future of ICT-Mediated Elderly Care: A Response to Doom Scenarios”, _AI & Society_, 31(4): 455–462. doi:10.1007/s00146-015-0626-3
* –––, 2018, “What Do We Mean by a Relational Ethics? Growing a Relational Approach to the Moral Standing of Plants, Robots and Other Non-Humans”, in _Plant Ethics: Concepts and Applications_, Angela Kallhoff, Marcello Di Paola, and Maria Schörgenhumer (eds.), London: Routledge, 110–121.
* Crawford, Kate and Ryan Calo, 2016, “There Is a Blind Spot in AI Research”, _Nature_, 538(7625): 311–313. doi:10.1038/538311a
* Cristianini, Nello, forthcoming, “Shortcuts to Artificial Intelligence”, in _Machines We Trust_, Marcello Pelillo and Teresa Scantamburlo (eds.), Cambridge, MA: MIT Press. \[[Cristianini forthcoming – preprint available online](https://philpapers.org/rec/CRISTA-3)]
* Danaher, John, 2015, “Why AI Doomsayers Are Like Sceptical Theists and Why It Matters”, _Minds and Machines_, 25(3): 231–246. doi:10.1007/s11023-015-9365-y
* –––, 2016a, “Robots, Law and the Retribution Gap”, _Ethics and Information Technology_, 18(4): 299–309. doi:10.1007/s10676-016-9403-3
* –––, 2016b, “The Threat of Algocracy: Reality, Resistance and Accommodation”, _Philosophy & Technology_, 29(3): 245–268. doi:10.1007/s13347-015-0211-1
* –––, 2019a, _Automation and Utopia: Human Flourishing in a World without Work_, Cambridge, MA: Harvard University Press.
* –––, 2019b, “The Philosophical Case for Robot Friendship”, _Journal of Posthuman Studies_, 3(1): 5–24. doi:10.5325/jpoststud.3.1.0005
* –––, forthcoming, “Welcoming Robots into the Moral Circle: A Defence of Ethical Behaviourism”, _Science and Engineering Ethics_, first online: 20 June 2019. doi:10.1007/s11948-019-00119-x
* Danaher, John and Neil McArthur (eds.), 2017, _Robot Sex: Social and Ethical Implications_, Boston, MA: MIT Press.
* DARPA, 1983, “Strategic Computing. New-Generation Computing Technology: A Strategic Plan for Its Development an Application to Critical Problems in Defense”, ADA141982, 28 October 1983. \[[DARPA 1983 available online](https://apps.dtic.mil/docs/citations/ADA141982)]
* Dennett, Daniel C, 2017, _From Bacteria to Bach and Back: The Evolution of Minds_, New York: W.W. Norton.
* Devlin, Kate, 2018, _Turned On: Science, Sex and Robots_, London: Bloomsbury.
* Diakopoulos, Nicholas, 2015, “Algorithmic Accountability: Journalistic Investigation of Computational Power Structures”, _Digital Journalism_, 3(3): 398–415. doi:10.1080/21670811.2014.976411
* Dignum, Virginia, 2018, “Ethics in Artificial Intelligence: Introduction to the Special Issue”, _Ethics and Information Technology_, 20(1): 1–3. doi:10.1007/s10676-018-9450-z
* Domingos, Pedro, 2015, _The Master Algorithm: How the Quest for the Ultimate Learning Machine Will Remake Our World_, London: Allen Lane.
* Draper, Heather, Tom Sorell, Sandra Bedaf, Dag Sverre Syrdal, Carolina Gutierrez-Ruiz, Alexandre Duclos, and Farshid Amirabdollahian, 2014, “Ethical Dimensions of Human-Robot Interactions in the Care of Older People: Insights from 21 Focus Groups Convened in the UK, France and the Netherlands”, in _International Conference on Social Robotics 2014_, Michael Beetz, Benjamin Johnston, and Mary-Anne Williams (eds.), (Lecture Notes in Artificial Intelligence 8755), Cham: Springer International Publishing, 135–145. doi:10.1007/978-3-319-11973-1\*14
* Dressel, Julia and Hany Farid, 2018, “The Accuracy, Fairness, and Limits of Predicting Recidivism”, _Science Advances_, 4(1): eaao5580. doi:10.1126/sciadv.aao5580
* Drexler, K. Eric, 2019, “Reframing Superintelligence: Comprehensive AI Services as General Intelligence”, FHI Technical Report, 2019-1, 1-210. \[[Drexler 2019 available online](https://www.fhi.ox.ac.uk/reframing/)]
* Dreyfus, Hubert L., 1972, _What Computers Still Can’t Do: A Critique of Artificial Reason_, second edition, Cambridge, MA: MIT Press 1992.
* Dreyfus, Hubert L., Stuart E. Dreyfus, and Tom Athanasiou, 1986, _Mind over Machine: The Power of Human Intuition and Expertise in the Era of the Computer_, New York: Free Press.
* Dwork, Cynthia, Frank McSherry, Kobbi Nissim, and Adam Smith, 2006, _Calibrating Noise to Sensitivity in Private Data Analysis_, Berlin, Heidelberg.
* Eden, Amnon H., James H. Moor, Johnny H. Søraker, and Eric Steinhart (eds.), 2012, _Singularity Hypotheses: A Scientific and Philosophical Assessment_, (The Frontiers Collection), Berlin, Heidelberg: Springer Berlin Heidelberg. doi:10.1007/978-3-642-32560-1
* Eubanks, Virginia, 2018, _Automating Inequality: How High-Tech Tools Profile, Police, and Punish the Poor_, London: St. Martin’s Press.
* European Commission, 2013, “How Many People Work in Agriculture in the European Union? An Answer Based on Eurostat Data Sources”, _EU Agricultural Economics Briefs_, 8 (July 2013). \[[Anonymous 2013 available online](https://ec.europa.eu/info/sites/info/files/food-farming-fisheries/farming/documents/agri-economics-brief-08_en.pdf)]
* European Group on Ethics in Science and New Technologies, 2018, “Statement on Artificial Intelligence, Robotics and ‘Autonomous’ Systems”, 9 March 2018, European Commission, Directorate-General for Research and Innovation, Unit RTD.01. \[[European Group 2018 available online](https://op.europa.eu/en/publication-detail/-/publication/dfebe62e-4ce9-11e8-be1d-01aa75ed71a1) ]
* Ferguson, Andrew Guthrie, 2017, _The Rise of Big Data Policing: Surveillance, Race, and the Future of Law Enforcement_, New York: NYU Press.
* Floridi, Luciano, 2016, “Should We Be Afraid of AI? Machines Seem to Be Getting Smarter and Smarter and Much Better at Human Jobs, yet True AI Is Utterly Implausible. Why?”, _Aeon_, 9 May 2016. URL = <[Floridi 2016 available online](https://aeon.co/essays/true-ai-is-both-logically-possible-and-utterly-implausible)>
* Floridi, Luciano, Josh Cowls, Monica Beltrametti, Raja Chatila, Patrice Chazerand, Virginia Dignum, Christoph Luetge, Robert Madelin, Ugo Pagallo, Francesca Rossi, Burkhard Schafer, Peggy Valcke, and Effy Vayena, 2018, “AI4People—An Ethical Framework for a Good AI Society: Opportunities, Risks, Principles, and Recommendations”, _Minds and Machines_, 28(4): 689–707. doi:10.1007/s11023-018-9482-5
* Floridi, Luciano and Jeff W. Sanders, 2004, “On the Morality of Artificial Agents”, _Minds and Machines_, 14(3): 349–379. doi:10.1023/B:MIND.0000035461.63578.9d
* Floridi, Luciano and Mariarosaria Taddeo, 2016, “What Is Data Ethics?”, _Philosophical Transactions of the Royal Society A: Mathematical, Physical and Engineering Sciences_, 374(2083): 20160360. doi:10.1098/rsta.2016.0360
* Foot, Philippa, 1967, “The Problem of Abortion and the Doctrine of the Double Effect”, _Oxford Review_, 5: 5–15.
* Fosch-Villaronga, Eduard and Jordi Albo-Canals, 2019, “‘I’ll Take Care of You,’ Said the Robot”, _Paladyn, Journal of Behavioral Robotics_, 10(1): 77–93. doi:10.1515/pjbr-2019-0006
* Frank, Lily and Sven Nyholm, 2017, “Robot Sex and Consent: Is Consent to Sex between a Robot and a Human Conceivable, Possible, and Desirable?”, _Artificial Intelligence and Law_, 25(3): 305–323. doi:10.1007/s10506-017-9212-y
* Frankfurt, Harry G., 1971, “Freedom of the Will and the Concept of a Person”, _The Journal of Philosophy_, 68(1): 5–20.
* Frey, Carl Benedict, 2019, _The Technology Trap: Capital, Labour, and Power in the Age of Automation_, Princeton, NJ: Princeton University Press.
* Frey, Carl Benedikt and Michael A. Osborne, 2013, “The Future of Employment: How Susceptible Are Jobs to Computerisation?”, Oxford Martin School Working Papers, 17 September 2013. \[[Frey and Osborne 2013 available online](http://www.oxfordmartin.ox.ac.uk/publications/view/1314)]
* Ganascia, Jean-Gabriel, 2017, _Le Mythe De La Singularité_, Paris: Éditions du Seuil.
* EU Parliament, 2016, “Draft Report with Recommendations to the Commission on Civil Law Rules on Robotics (2015/2103(Inl))”, _Committee on Legal Affairs_, 10.11.2016. https://www.europarl.europa.eu/doceo/document/A-8-2017-0005_EN.html
* EU Regulation, 2016/679, “General Data Protection Regulation: Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the Protection of Natural Persons with Regard to the Processing of Personal Data and on the Free Movement of Such Data, and Repealing Directive 95/46/Ec”, _Official Journal of the European Union_, 119 (4 May 2016), 1–88. \[[Regulation (EU) 2016/679 available online](http://data.europa.eu/eli/reg/2016/679/oj)]
* Geraci, Robert M., 2008, “Apocalyptic AI: Religion and the Promise of Artificial Intelligence”, _Journal of the American Academy of Religion_, 76(1): 138–166. doi:10.1093/jaarel/lfm101
* –––, 2010, _Apocalyptic AI: Visions of Heaven in Robotics, Artificial Intelligence, and Virtual Reality_, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780195393026.001.0001
* Gerdes, Anne, 2016, “The Issue of Moral Consideration in Robot Ethics”, _ACM SIGCAS Computers and Society_, 45(3): 274–279. doi:10.1145/2874239.2874278
* German Federal Ministry of Transport and Digital Infrastructure, 2017, “Report of the Ethics Commission: Automated and Connected Driving”, June 2017, 1–36. \[[GFMTDI 2017 available online](https://www.bmvi.de/SharedDocs/EN/publications/report-ethics-commission.html)]
* Gertz, Nolen, 2018, _Nihilism and Technology_, London: Rowman & Littlefield.
* Gewirth, Alan, 1978, “The Golden Rule Rationalized”, _Midwest Studies in Philosophy_, 3(1): 133–147. doi:10.1111/j.1475-4975.1978.tb00353.x
* Gibert, Martin, 2019, “Éthique Artificielle (Version Grand Public)”, in _L’Encyclopédie Philosophique_, Maxime Kristanek (ed.), accessed: 16 April 2020, URL = <[Gibert 2019 available online](https://encyclo-philo.fr/item/199)>
* Giubilini, Alberto and Julian Savulescu, 2018, “The Artificial Moral Advisor. The ‘Ideal Observer’ Meets Artificial Intelligence”, _Philosophy & Technology_, 31(2): 169–188. doi:10.1007/s13347-017-0285-z
* Good, Irving John, 1965, “Speculations Concerning the First Ultraintelligent Machine”, in _Advances in Computers 6_, Franz L. Alt and Morris Rubinoff (eds.), New York & London: Academic Press, 31–88. doi:10.1016/S0065-2458(08)60418-0
* Goodfellow, Ian, Yoshua Bengio, and Aaron Courville, 2016, _Deep Learning_, Cambridge, MA: MIT Press.
* Goodman, Bryce and Seth Flaxman, 2017, “European Union Regulations on Algorithmic Decision-Making and a ‘Right to Explanation’”, _AI Magazine_, 38(3): 50–57. doi:10.1609/aimag.v38i3.2741
* Goos, Maarten, 2018, “The Impact of Technological Progress on Labour Markets: Policy Challenges”, _Oxford Review of Economic Policy_, 34(3): 362–375. doi:10.1093/oxrep/gry002
* Goos, Maarten, Alan Manning, and Anna Salomons, 2009, “Job Polarization in Europe”, _American Economic Review_, 99(2): 58–63. doi:10.1257/aer.99.2.58
* Graham, Sandra and Brian S. Lowery, 2004, “Priming Unconscious Racial Stereotypes about Adolescent Offenders”, _Law and Human Behavior_, 28(5): 483–504. doi:10.1023/B:LAHU.0000046430.65485.1f
* Gunkel, David J., 2018a, “The Other Question: Can and Should Robots Have Rights?”, _Ethics and Information Technology_, 20(2): 87–99. doi:10.1007/s10676-017-9442-4
* –––, 2018b, _Robot Rights_, Boston, MA: MIT Press.
* Gunkel, David J. and Joanna J. Bryson (eds.), 2014, _Machine Morality: The Machine as Moral Agent and Patient_ special issue of _Philosophy & Technology_, 27(1): 1–142.
* Häggström, Olle, 2016, _Here Be Dragons: Science, Technology and the Future of Humanity_, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780198723547.001.0001
* Hakli, Raul and Pekka Mäkelä, 2019, “Moral Responsibility of Robots and Hybrid Agents”, _The Monist_, 102(2): 259–275. doi:10.1093/monist/onz009
* Hanson, Robin, 2016, _The Age of Em: Work, Love and Life When Robots Rule the Earth_, Oxford: Oxford University Press.
* Hansson, Sven Ove, 2013, _The Ethics of Risk: Ethical Analysis in an Uncertain World_, New York: Palgrave Macmillan.
* –––, 2018, “How to Perform an Ethical Risk Analysis (eRA)”, _Risk Analysis_, 38(9): 1820–1829. doi:10.1111/risa.12978
* Harari, Yuval Noah, 2016, _Homo Deus: A Brief History of Tomorrow_, New York: Harper.
* Haskel, Jonathan and Stian Westlake, 2017, _Capitalism without Capital: The Rise of the Intangible Economy_, Princeton, NJ: Princeton University Press.
* Houkes, Wybo and Pieter E. Vermaas, 2010, _Technical Functions: On the Use and Design of Artefacts_, (Philosophy of Engineering and Technology 1), Dordrecht: Springer Netherlands. doi:10.1007/978-90-481-3900-2
* IEEE, 2019, _Ethically Aligned Design: A Vision for Prioritizing Human Well-Being with Autonomous and Intelligent Systems_ (First Version), <[IEEE 2019 available online](https://standards.ieee.org/content/dam/ieee-standards/standards/web/documents/other/ead1e.pdf)>.
* Jasanoff, Sheila, 2016, _The Ethics of Invention: Technology and the Human Future_, New York: Norton.
* Jecker, Nancy S., forthcoming, _Ending Midlife Bias: New Values for Old Age_, New York: Oxford University Press.
* Jobin, Anna, Marcello Ienca, and Effy Vayena, 2019, “The Global Landscape of AI Ethics Guidelines”, _Nature Machine Intelligence_, 1(9): 389–399. doi:10.1038/s42256-019-0088-2
* Johnson, Deborah G. and Mario Verdicchio, 2017, “Reframing AI Discourse”, _Minds and Machines_, 27(4): 575–590. doi:10.1007/s11023-017-9417-6
* Kahnemann, Daniel, 2011, _Thinking Fast and Slow_, London: Macmillan.
* Kamm, Frances Myrna, 2016, _The Trolley Problem Mysteries_, Eric Rakowski (ed.), Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780190247157.001.0001
* Kant, Immanuel, 1781/1787, _Kritik der reinen Vernunft_. Translated as _Critique of Pure Reason_, Norman Kemp Smith (trans.), London: Palgrave Macmillan, 1929.
* Keeling, Geoff, 2020, “Why Trolley Problems Matter for the Ethics of Automated Vehicles”, _Science and Engineering Ethics_, 26(1): 293–307. doi:10.1007/s11948-019-00096-1
* Keynes, John Maynard, 1930, “Economic Possibilities for Our Grandchildren”. Reprinted in his _Essays in Persuasion_, New York: Harcourt Brace, 1932, 358–373.
* Kissinger, Henry A., 2018, “How the Enlightenment Ends: Philosophically, Intellectually—in Every Way—Human Society Is Unprepared for the Rise of Artificial Intelligence”, _The Atlantic_, June 2018. \[[Kissinger 2018 available online](https://www.theatlantic.com/magazine/archive/2018/06/henry-kissinger-ai-could-mean-the-end-of-human-history/559124/)]
* Kurzweil, Ray, 1999, _The Age of Spiritual Machines: When Computers Exceed Human Intelligence_, London: Penguin.
* –––, 2005, _The Singularity Is Near: When Humans Transcend Biology_, London: Viking.
* –––, 2012, _How to Create a Mind: The Secret of Human Thought Revealed_, New York: Viking.
* Lee, Minha, Sander Ackermans, Nena van As, Hanwen Chang, Enzo Lucas, and Wijnand IJsselsteijn, 2019, “Caring for Vincent: A Chatbot for Self-Compassion”, in _Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems—CHI ’19_, Glasgow, Scotland: ACM Press, 1–13. doi:10.1145/3290605.3300932
* Levy, David, 2007, _Love and Sex with Robots: The Evolution of Human-Robot Relationships_, New York: Harper & Co.
* Lighthill, James, 1973, “Artificial Intelligence: A General Survey”, _Artificial intelligence: A Paper Symposion_, London: Science Research Council. \[[Lighthill 1973 available online](http://www.chilton-computing.org.uk/inf/literature/reports/lighthill_report/p001.htm)]
* Lin, Patrick, 2016, “Why Ethics Matters for Autonomous Cars”, in _Autonomous Driving_, Markus Maurer, J. Christian Gerdes, Barbara Lenz, and Hermann Winner (eds.), Berlin, Heidelberg: Springer Berlin Heidelberg, 69–85. doi:10.1007/978-3-662-48847-8\*4
* Lin, Patrick, Keith Abney, and Ryan Jenkins (eds.), 2017, _Robot Ethics 2.0: From Autonomous Cars to Artificial Intelligence_, New York: Oxford University Press. doi:10.1093/oso/9780190652951.001.0001
* Lin, Patrick, George Bekey, and Keith Abney, 2008, “Autonomous Military Robotics: Risk, Ethics, and Design”, ONR report, California Polytechnic State University, San Luis Obispo, 20 December 2008), 112 pp. \[[Lin, Bekey, and Abney 2008 available online](http://ethics.calpoly.edu/ONR_report.pdf)]
* Lomas, Meghann, Robert Chevalier, Ernest Vincent Cross, Robert Christopher Garrett, John Hoare, and Michael Kopack, 2012, “Explaining Robot Actions”, in _Proceedings of the Seventh Annual ACM/IEEE International Conference on Human-Robot Interaction—HRI ’12_, Boston, MA: ACM Press, 187–188. doi:10.1145/2157689.2157748
* Macnish, Kevin, 2017, _The Ethics of Surveillance: An Introduction_, London: Routledge.
* Mathur, Arunesh, Gunes Acar, Michael J. Friedman, Elena Lucherini, Jonathan Mayer, Marshini Chetty, and Arvind Narayanan, 2019, “Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites”, _Proceedings of the ACM on Human-Computer Interaction_, 3(CSCW): art. 81. doi:10.1145/3359183
* Minsky, Marvin, 1985, _The Society of Mind_, New York: Simon & Schuster.
* Misselhorn, Catrin, 2020, “Artificial Systems with Moral Capacities? A Research Design and Its Implementation in a Geriatric Care System”, _Artificial Intelligence_, 278: art. 103179. doi:10.1016/j.artint.2019.103179
* Mittelstadt, Brent Daniel and Luciano Floridi, 2016, “The Ethics of Big Data: Current and Foreseeable Issues in Biomedical Contexts”, _Science and Engineering Ethics_, 22(2): 303–341. doi:10.1007/s11948-015-9652-2
* Moor, James H., 2006, “The Nature, Importance, and Difficulty of Machine Ethics”, _IEEE Intelligent Systems_, 21(4): 18–21. doi:10.1109/MIS.2006.80
* Moravec, Hans, 1990, _Mind Children_, Cambridge, MA: Harvard University Press.
* –––, 1998, _Robot: Mere Machine to Transcendent Mind_, New York: Oxford University Press.
* Mozorov, Eygeny, 2013, _To Save Everything, Click Here: The Folly of Technological Solutionism_, New York: Public Affairs.
* Müller, Vincent C., 2012, “Autonomous Cognitive Systems in Real-World Environments: Less Control, More Flexibility and Better Interaction”, _Cognitive Computation_, 4(3): 212–215. doi:10.1007/s12559-012-9129-4
* –––, 2016a, “Autonomous Killer Robots Are Probably Good News”, In _Drones and Responsibility: Legal, Philosophical and Socio-Technical Perspectives on the Use of Remotely Controlled Weapons_, Ezio Di Nucci and Filippo Santoni de Sio (eds.), London: Ashgate, 67–81.
* ––– (ed.), 2016b, _Risks of Artificial Intelligence_, London: Chapman & Hall - CRC Press. doi:10.1201/b19187
* –––, 2018, “In 30 Schritten zum Mond? Zukünftiger Fortschritt in der KI”, _Medienkorrespondenz_, 20: 5–15. \[[Müller 2018 available online](https://philarchive.org/archive/MLLIS)]
* –––, 2020, “Measuring Progress in Robotics: Benchmarking and the ‘Measure-Target Confusion’”, in _Metrics of Sensory Motor Coordination and Integration in Robots and Animals_, Fabio Bonsignorio, Elena Messina, Angel P. del Pobil, and John Hallam (eds.), (Cognitive Systems Monographs 36), Cham: Springer International Publishing, 169–179. doi:10.1007/978-3-030-14126-4\*9
* –––, forthcoming-a, _Can Machines Think? Fundamental Problems of Artificial Intelligence_, New York: Oxford University Press.
* ––– (ed.), forthcoming-b, _Oxford Handbook of the Philosophy of Artificial Intelligence_, New York: Oxford University Press.
* Müller, Vincent C. and Nick Bostrom, 2016, “Future Progress in Artificial Intelligence: A Survey of Expert Opinion”, in _Fundamental Issues of Artificial Intelligence_, Vincent C. Müller (ed.), Cham: Springer International Publishing, 555–572. doi:10.1007/978-3-319-26485-1\*33
* Newport, Cal, 2019, _Digital Minimalism: On Living Better with Less Technology_, London: Penguin.
* Nørskov, Marco (ed.), 2017, _Social Robots_, London: Routledge.
* Nyholm, Sven, 2018a, “Attributing Agency to Automated Systems: Reflections on Human–Robot Collaborations and Responsibility-Loci”, _Science and Engineering Ethics_, 24(4): 1201–1219. doi:10.1007/s11948-017-9943-x
* –––, 2018b, “The Ethics of Crashes with Self-Driving Cars: A Roadmap, II”, _Philosophy Compass_, 13(7): e12506. doi:10.1111/phc3.12506
* Nyholm, Sven, and Lily Frank, 2017, “From Sex Robots to Love Robots: Is Mutual Love with a Robot Possible?”, in Danaher and McArthur 2017: 219–243.
* O’Connell, Mark, 2017, _To Be a Machine: Adventures among Cyborgs, Utopians, Hackers, and the Futurists Solving the Modest Problem of Death_, London: Granta.
* O’Neil, Cathy, 2016, _Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy_, Largo, ML: Crown.
* Omohundro, Steve, 2014, “Autonomous Technology and the Greater Human Good”, _Journal of Experimental & Theoretical Artificial Intelligence_, 26(3): 303–315. doi:10.1080/0952813X.2014.895111
* Ord, Toby, 2020, _The Precipice: Existential Risk and the Future of Humanity_, London: Bloomsbury.
* Powers, Thomas M. and Jean-Gabriel Ganascia, forthcoming, “The Ethics of the Ethics of AI”, in _Oxford Handbook of Ethics of Artificial Intelligence_, Markus D. Dubber, Frank Pasquale, and Sunnit Das (eds.), New York: Oxford.
* Rawls, John, 1971, _A Theory of Justice_, Cambridge, MA: Belknap Press.
* Rees, Martin, 2018, _On the Future: Prospects for Humanity_, Princeton: Princeton University Press.
* Richardson, Kathleen, 2016, “Sex Robot Matters: Slavery, the Prostituted, and the Rights of Machines”, _IEEE Technology and Society Magazine_, 35(2): 46–53. doi:10.1109/MTS.2016.2554421
* Roessler, Beate, 2017, “Privacy as a Human Right”, _Proceedings of the Aristotelian Society_, 117(2): 187–206. doi:10.1093/arisoc/aox008
* Royakkers, Lambèr and Rinie van Est, 2016, _Just Ordinary Robots: Automation from Love to War_, Boca Raton, LA: CRC Press, Taylor & Francis. doi:10.1201/b18899
* Russell, Stuart, 2019, _Human Compatible: Artificial Intelligence and the Problem of Control_, New York: Viking.
* Russell, Stuart, Daniel Dewey, and Max Tegmark, 2015, “Research Priorities for Robust and Beneficial Artificial Intelligence”, _AI Magazine_, 36(4): 105–114. doi:10.1609/aimag.v36i4.2577
* SAE International, 2018, “Taxonomy and Definitions for Terms Related to Driving Automation Systems for on-Road Motor Vehicles”, J3016_201806, 15 June 2018. \[[SAE International 2015 available online](https://www.sae.org/standards/content/j3016_201806/)]
* Sandberg, Anders, 2013, “Feasibility of Whole Brain Emulation”, in _Philosophy and Theory of Artificial Intelligence_, Vincent C. Müller (ed.), (Studies in Applied Philosophy, Epistemology and Rational Ethics, 5), Berlin, Heidelberg: Springer Berlin Heidelberg, 251–264. doi:10.1007/978-3-642-31674-6\*19
* –––, 2019, “There Is Plenty of Time at the Bottom: The Economics, Risk and Ethics of Time Compression”, _Foresight_, 21(1): 84–99. doi:10.1108/FS-04-2018-0044
* Santoni de Sio, Filippo and Jeroen van den Hoven, 2018, “Meaningful Human Control over Autonomous Systems: A Philosophical Account”, _Frontiers in Robotics and AI_, 5(February): 15. doi:10.3389/frobt.2018.00015
* Schneier, Bruce, 2015, _Data and Goliath: The Hidden Battles to Collect Your Data and Control Your World_, New York: W. W. Norton.
* Searle, John R., 1980, “Minds, Brains, and Programs”, _Behavioral and Brain Sciences_, 3(3): 417–424. doi:10.1017/S0140525X00005756
* Selbst, Andrew D., Danah Boyd, Sorelle A. Friedler, Suresh Venkatasubramanian, and Janet Vertesi, 2019, “Fairness and Abstraction in Sociotechnical Systems”, in _Proceedings of the Conference on Fairness, Accountability, and Transparency—FAT_ ’19\*, Atlanta, GA: ACM Press, 59–68. doi:10.1145/3287560.3287598
* Sennett, Richard, 2018, _Building and Dwelling: Ethics for the City_, London: Allen Lane.
* Shanahan, Murray, 2015, _The Technological Singularity_, Cambridge, MA: MIT Press.
* Sharkey, Amanda, 2019, “Autonomous Weapons Systems, Killer Robots and Human Dignity”, _Ethics and Information Technology_, 21(2): 75–87. doi:10.1007/s10676-018-9494-0
* Sharkey, Amanda and Noel Sharkey, 2011, “The Rights and Wrongs of Robot Care”, in _Robot Ethics: The Ethical and Social Implications of Robotics_, Patrick Lin, Keith Abney and George Bekey (eds.), Cambridge, MA: MIT Press, 267–282.
* Shoham, Yoav, Perrault Raymond, Brynjolfsson Erik, Jack Clark, James Manyika, Juan Carlos Niebles, … Zoe Bauer, 2018, “The AI Index 2018 Annual Report”, 17 December 2018, Stanford, CA: AI Index Steering Committee, Human-Centered AI Initiative, Stanford University. \[[Shoam et al. 2018 available online](https://hai.stanford.edu/ai-index/previous-reports/2018)]
* Silver, David, Thomas Hubert, Julian Schrittwieser, Ioannis Antonoglou, Matthew Lai, Arthur Guez, Marc Lanctot, Laurent Sifre, Dharshan Kumaran, Thore Graepel, Timothy Lillicrap, Karen Simonyan, and Demis Hassabis, 2018, “A General Reinforcement Learning Algorithm That Masters Chess, Shogi, and Go through Self-Play”, _Science_, 362(6419): 1140–1144. doi:10.1126/science.aar6404
* Simon, Herbert A. and Allen Newell, 1958, “Heuristic Problem Solving: The Next Advance in Operations Research”, _Operations Research_, 6(1): 1–10. doi:10.1287/opre.6.1.1
* Simpson, Thomas W. and Vincent C. Müller, 2016, “Just War and Robots’ Killings”, _The Philosophical Quarterly_, 66(263): 302–322. doi:10.1093/pq/pqv075
* Smolan, Sandy (director), 2016, “The Human Face of Big Data”, _PBS Documentary,_ 24 February 2016, 56 mins.
* Sparrow, Robert, 2007, “Killer Robots”, _Journal of Applied Philosophy_, 24(1): 62–77. doi:10.1111/j.1468-5930.2007.00346.x
* –––, 2016, “Robots in Aged Care: A Dystopian Future?”, _AI & Society_, 31(4): 445–454. doi:10.1007/s00146-015-0625-4
* Stahl, Bernd Carsten, Job Timmermans, and Brent Daniel Mittelstadt, 2016, “The Ethics of Computing: A Survey of the Computing-Oriented Literature”, _ACM Computing Surveys_, 48(4): art. 55. doi:10.1145/2871196
* Stahl, Bernd Carsten and David Wright, 2018, “Ethics and Privacy in AI and Big Data: Implementing Responsible Research and Innovation”, _IEEE Security Privacy_, 16(3): 26–33.
* Stone, Christopher D., 1972, “Should Trees Have Standing - toward Legal Rights for Natural Objects”, _Southern California Law Review_, 45: 450–501.
* Stone, Peter, Rodney Brooks, Erik Brynjolfsson, Ryan Calo, Oren Etzioni, Greg Hager, Julia Hirschberg, Shivaram Kalyanakrishnan, Ece Kamar, Sarit Kraus, Kevin Leyton-Brown, David Parkes, William Press, AnnaLee Saxenian, Julie Shah, Milind Tambe, and Astro Teller, 2016, “Artificial Intelligence and Life in 2030”, One Hundred Year Study on Artificial Intelligence: Report of the 2015–2016 Study Panel, Stanford University, Stanford, CA, September 2016. \[[Stone et al. 2016 available online](https://ai100.stanford.edu/2016-report)]
* Strawson, Galen, 1998, “Free Will”, in _Routledge Encyclopedia of Philosophy_, Taylor & Francis. doi:10.4324/9780415249126-V014-1
* Sullins, John P., 2012, “Robots, Love, and Sex: The Ethics of Building a Love Machine”, _IEEE Transactions on Affective Computing_, 3(4): 398–409. doi:10.1109/T-AFFC.2012.31
* Susser, Daniel, Beate Roessler, and Helen Nissenbaum, 2019, “Technology, Autonomy, and Manipulation”, _Internet Policy Review_, 8(2): 30 June 2019. \[[Susser, Roessler, and Nissenbaum 2019 available online](https://policyreview.info/articles/analysis/technology-autonomy-and-manipulation)]
* Taddeo, Mariarosaria and Luciano Floridi, 2018, “How AI Can Be a Force for Good”, _Science_, 361(6404): 751–752. doi:10.1126/science.aat5991
* Taylor, Linnet and Nadezhda Purtova, 2019, “What Is Responsible and Sustainable Data Science?”, Big Data & Society, 6(2): art. 205395171985811. doi:10.1177/2053951719858114
* Taylor, Steve, et al., 2018, “Responsible AI – Key Themes, Concerns & Recommendations for European Research and Innovation: Summary of Consultation with Multidisciplinary Experts”, June. doi:10.5281/zenodo.1303252 \[[Taylor, et al. 2018 available online](https://zenodo.org/record/1303253)]
* Tegmark, Max, 2017, _Life 3.0: Being Human in the Age of Artificial Intelligence_, New York: Knopf.
* Thaler, Richard H and Sunstein, Cass, 2008, _Nudge: Improving decisions about health, wealth and happiness_, New York: Penguin.
* Thompson, Nicholas and Ian Bremmer, 2018, “The AI Cold War That Threatens Us All”, _Wired_, 23 November 2018. \[[Thompson and Bremmer 2018 available online](https://www.wired.com/story/ai-cold-war-china-could-doom-us-all/)]
* Thomson, Judith Jarvis, 1976, “Killing, Letting Die, and the Trolley Problem”, _Monist_, 59(2): 204–217. doi:10.5840/monist197659224
* Torrance, Steve, 2011, “Machine Ethics and the Idea of a More-Than-Human Moral World”, in Anderson and Anderson 2011: 115–137. doi:10.1017/CBO9780511978036.011
* Trump, Donald J, 2019, “Executive Order on Maintaining American Leadership in Artificial Intelligence”, 11 February 2019. \[[Trump 2019 available online](https://www.federalregister.gov/documents/2019/02/14/2019-02544/maintaining-american-leadership-in-artificial-intelligence)]
* Turner, Jacob, 2019, _Robot Rules: Regulating Artificial Intelligence_, Berlin: Springer. doi:10.1007/978-3-319-96235-1
* Tzafestas, Spyros G., 2016, _Roboethics: A Navigating Overview_, (Intelligent Systems, Control and Automation: Science and Engineering 79), Cham: Springer International Publishing. doi:10.1007/978-3-319-21714-7
* Vallor, Shannon, 2017, _Technology and the Virtues: A Philosophical Guide to a Future Worth Wanting_, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780190498511.001.0001
* Van Lent, Michael, William Fisher, and Michael Mancuso, 2004, “An Explainable Artificial Intelligence System for Small-Unit Tactical Behavior”, in _Proceedings of the 16th Conference on Innovative Applications of Artifical Intelligence, (IAAI’04)_, San Jose, CA: AAAI Press, 900–907.
* van Wynsberghe, Aimee, 2016, _Healthcare Robots: Ethics, Design and Implementation_, London: Routledge. doi:10.4324/9781315586397
* van Wynsberghe, Aimee and Scott Robbins, 2019, “Critiquing the Reasons for Making Artificial Moral Agents”, _Science and Engineering Ethics_, 25(3): 719–735. doi:10.1007/s11948-018-0030-8
* Vanderelst, Dieter and Alan Winfield, 2018, “The Dark Side of Ethical Robots”, in _Proceedings of the 2018 AAAI/ACM Conference on AI, Ethics, and Society_, New Orleans, LA: ACM, 317–322. doi:10.1145/3278721.3278726
* Veale, Michael and Reuben Binns, 2017, “Fairer Machine Learning in the Real World: Mitigating Discrimination without Collecting Sensitive Data”, _Big Data & Society_, 4(2): art. 205395171774353. doi:10.1177/2053951717743530
* Véliz, Carissa, 2019, “Three Things Digital Ethics Can Learn from Medical Ethics”, _Nature Electronics_, 2(8): 316–318. doi:10.1038/s41928-019-0294-2
* Verbeek, Peter-Paul, 2011, _Moralizing Technology: Understanding and Designing the Morality of Things_, Chicago: University of Chicago Press.
* Wachter, Sandra and Brent Daniel Mittelstadt, 2019, “A Right to Reasonable Inferences: Re-Thinking Data Protection Law in the Age of Big Data and AI”, _Columbia Business Law Review_, 2019(2): 494–620.
* Wachter, Sandra, Brent Mittelstadt, and Luciano Floridi, 2017, “Why a Right to Explanation of Automated Decision-Making Does Not Exist in the General Data Protection Regulation”, _International Data Privacy Law_, 7(2): 76–99. doi:10.1093/idpl/ipx005
* Wachter, Sandra, Brent Mittelstadt, and Chris Russell, 2018, “Counterfactual Explanations Without Opening the Black Box: Automated Decisions and the GDPR”, _Harvard Journal of Law & Technology_, 31(2): 842–887. doi:10.2139/ssrn.3063289
* Wallach, Wendell and Peter M. Asaro (eds.), 2017, _Machine Ethics and Robot Ethics_, London: Routledge.
* Walsh, Toby, 2018, _Machines That Think: The Future of Artificial Intelligence_, Amherst, MA: Prometheus Books.
* Westlake, Stian (ed.), 2014, _Our Work Here Is Done: Visions of a Robot Economy_, London: Nesta. \[[Westlake 2014 available online](https://www.nesta.org.uk/report/our-work-here-is-done-visions-of-a-robot-economy/)]
* Whittaker, Meredith, Kate Crawford, Roel Dobbe, Genevieve Fried, Elizabeth Kaziunas, Varoon Mathur, … Jason Schultz, 2018, “AI Now Report 2018”, New York: AI Now Institute, New York University. \[[Whittaker et al. 2018 available online](https://ainowinstitute.org/publication/ai-now-2018-report-2)]
* Whittlestone, Jess, Rune Nyrup, Anna Alexandrova, Kanta Dihal, and Stephen Cave, 2019, “Ethical and Societal Implications of Algorithms, Data, and Artificial Intelligence: A Roadmap for Research”, Cambridge: Nuffield Foundation, University of Cambridge. \[[Whittlestone 2019 available online](https://www.adalovelaceinstitute.org/nuffield-foundation-publishes-roadmap-for-ai-ethics-research/)]
* Winfield, Alan, Katina Michael, Jeremy Pitt, and Vanessa Evers (eds.), 2019, _Machine Ethics: The Design and Governance of Ethical AI and Autonomous Systems_, special issue of _Proceedings of the IEEE_, 107(3): 501–632.
* Woollard, Fiona and Frances Howard-Snyder, 2016, “Doing vs. Allowing Harm”, _Stanford Encyclopedia of Philosophy_ (Winter 2016 edition), Edward N. Zalta (ed.), URL = [https://plato.stanford.edu/archives/win2016/entries/doing-allowing/](https://plato.stanford.edu/archives/win2016/entries/doing-allowing/)
* Woolley, Samuel C. and Philip N. Howard (eds.), 2017, _Computational Propaganda: Political Parties, Politicians, and Political Manipulation on Social Media_, Oxford: Oxford University Press. doi:10.1093/oso/9780190931407.001.0001
* Yampolskiy, Roman V. (ed.), 2018, _Artificial Intelligence Safety and Security_, Boca Raton, FL: Chapman and Hall/CRC. doi:10.1201/9781351251389
* Yeung, Karen and Martin Lodge (eds.), 2019, _Algorithmic Regulation_, Oxford: Oxford University Press. doi:10.1093/oso/9780198838494.001.0001
* Zayed, Yago and Philip Loft, 2019, “Agriculture: Historical Statistics”, _House of Commons Briefing Paper_, 3339(25 June 2019): 1-19. \[[Zayed and Loft 2019 available online](https://commonslibrary.parliament.uk/research-briefings/sn03339/)]
* Zerilli, John, Alistair Knott, James Maclaurin, and Colin Gavaghan, 2019, “Transparency in Algorithmic and Human Decision-Making: Is There a Double Standard?”, _Philosophy & Technology_, 32(4): 661–683. doi:10.1007/s13347-018-0330-6
* Zuboff, Shoshana, 2019, _The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power_, New York: Public Affairs.

## Academic Tools

| ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=ethics-ai).                                                                      |
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/ethics-ai/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
| ![inpho icon](https://plato.stanford.edu/symbols/inpho.png)         | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=ethics-ai\&redirect=True) at the Internet Philosophy Ontology Project (InPhO).   |
| ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif)      | [Enhanced bibliography for this entry](https://philpapers.org/sep/ethics-ai/) at [PhilPapers](https://philpapers.org/), with links to its database.                          |

## Other Internet Resources

### References

* AI HLEG, 2019, “[High-Level Expert Group on Artificial Intelligence: Ethics Guidelines for Trustworthy AI](https://ec.europa.eu/digital-single-market/en/high-level-expert-group-artificial-intelligence)”, _European Commission_, accessed: 9 April 2019.
* Amodei, Dario and Danny Hernandez, 2018, “[AI and Compute](https://openai.com/blog/ai-and-compute/)”, _OpenAI Blog_, 16 July 2018.
* Aneesh, A., 2002, [Technological Modes of Governance: Beyond Private and Public Realms](https://web.archive.org/web/20021231052640/http://www.ifz.tu-graz.ac.at/sumacad/02/aaneesh.pdf), paper in the Proceedings of the 4th International Summer Academy on Technology Studies, available at archive.org.
* Brooks, Rodney, 2017, “[The Seven Deadly Sins of Predicting the Future of AI](https://rodneybrooks.com/the-seven-deadly-sins-of-predicting-the-future-of-ai/)”, on _Rodney Brooks: Robots, AI, and Other Stuff_, 7 September 2017.
* Brundage, Miles, Shahar Avin, Jack Clark, Helen Toner, Peter Eckersley, Ben Garfinkel, Allan Dafoe, Paul Scharre, Thomas Zeitzoff, Bobby Filar, Hyrum Anderson, Heather Roff, Gregory C. Allen, Jacob Steinhardt, Carrick Flynn, Seán Ó hÉigeartaigh, Simon Beard, Haydn Belfield, Sebastian Farquhar, Clare Lyle, et al., 2018, “[The Malicious Use of Artificial Intelligence: Forecasting, Prevention, and Mitigation](https://arxiv.org/abs/1802.07228)”, unpublished manuscript, ArXiv:1802.07228 \[Cs].
* Costa, Elisabeth and David Halpern, 2019, “[The Behavioural Science of Online Harm and Manipulation, and What to Do About It: An Exploratory Paper to Spark Ideas and Debate](https://www.bi.team/publications/the-behavioural-science-of-online-harm-and-manipulation-and-what-to-do-about-it/)”, The Behavioural Insights Team Report, 1-82.
* Gebru, Timnit, Jamie Morgenstern, Briana Vecchione, Jennifer Wortman Vaughan, Hanna Wallach, Hal Daumeé III, and Kate Crawford, 2018, “[Datasheets for Datasets](https://arxiv.org/abs/1803.09010)”, unpublished manuscript, arxiv:1803.09010, 23 March 2018.
* Gunning, David, 2017, “[Explainable Artificial Intelligence (XAI)](https://www.darpa.mil/attachments/XAIProgramUpdate.pdf)”, Defense Advanced Research Projects Agency (DARPA) Program.
* Harris, Tristan, 2016, “[How Technology Is Hijacking Your Mind—from a Magician and Google Design Ethicist](https://medium.com/thrive-global/how-technology-hijacks-peoples-minds-from-a-magician-and-google-s-design-ethicist-56d62ef5edf3)”, _Thrive Global_, 18 May 2016.
* International Federation of Robotics (IFR), 2019, [_World Robotics 2019 Edition_](https://ifr.org/free-downloads/).
* Jacobs, An, Lynn Tytgat, Michel Maus, Romain Meeusen, and Bram Vanderborght (eds.), Homo Roboticus: 30 Questions and Answers on Man, Technology, Science & Art, 2019, [Brussels: ASP](https://books.google.gr/books?id=Qzo0xQEACAAJ).
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

[computing: and moral responsibility](https://plato.stanford.edu/entries/computing-responsibility/) | [ethics: internet research](https://plato.stanford.edu/entries/ethics-internet-research/) | [ethics: search engines and](https://plato.stanford.edu/entries/ethics-search/) | [information technology: and moral values](https://plato.stanford.edu/entries/it-moral-values/) | [information technology: and privacy](https://plato.stanford.edu/entries/it-privacy/) | [manipulation, ethics of](https://plato.stanford.edu/entries/ethics-manipulation/) | [social networking and ethics](https://plato.stanford.edu/entries/ethics-social-networking/)

### Acknowledgments

Early drafts of this article were discussed with colleagues at the IDEA Centre of the University of Leeds, some friends, and my PhD students Michael Cannon, Zach Gudmunsen, Gabriela Arriagada-Bruneau and Charlotte Stix. Later drafts were made publicly available on the Internet and publicised via Twitter and e-mail to all (then) cited authors that I could locate. These later drafts were presented to audiences at the INBOTS Project Meeting (Reykjavik 2019), the Computer Science Department Colloquium (Leeds 2019), the European Robotics Forum (Bucharest 2019), the AI Lunch and the Philosophy & Ethics group (Eindhoven 2019)—many thanks for their comments.

I am grateful for detailed written comments by John Danaher, Martin Gibert, Elizabeth O’Neill, Sven Nyholm, Etienne B. Roesch, Emma Ruttkamp-Bloem, Tom Powers, Steve Taylor, and Alan Winfield. I am grateful for further useful comments by Colin Allen, Susan Anderson, Christof Wolf-Brenner, Rafael Capurro, Mark Coeckelbergh, Yazmin Morlet Corti, Erez Firt, Vasilis Galanos, Anne Gerdes, Olle Häggström, Geoff Keeling, Karabo Maiyane, Brent Mittelstadt, Britt Östlund, Steve Petersen, Brian Pickering, Zoë Porter, Amanda Sharkey, Melissa Terras, Stuart Russell, Jan F Veneman, Jeffrey White, and Xinyi Wu.

Parts of the work on this article have been supported by the European Commission under the INBOTS project (H2020 grant no. 780073).

[Copyright © 2020](https://plato.stanford.edu/info.html#c) by\
[Vincent C. Müller](http://www.sophia.de/) <[_vincent.c.mueller@fau.de_](mailto:vincent%2ec%2emueller%40fau%2ede)>
