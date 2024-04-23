# 联结主义 connectionism (Cameron Buckner and James Garson)

*首次发表于 1997 年 5 月 18 日星期日；实质性修订于 2019 年 8 月 16 日星期五*

联结主义是认知科学中的一个运动，希望通过使用人工神经网络（也称为“神经网络”或“神经元网络”）来解释智力能力。神经网络是大量单元（类似于神经元）以及衡量单元之间连接强度的权重构成的大脑简化模型。这些权重模拟了连接一个神经元到另一个神经元的突触的影响。对这种模型的实验表明，它们具有学习诸如面部识别、阅读以及简单语法结构检测等技能的能力。

哲学家们对联结主义产生了兴趣，因为它承诺提供了一种替代经典心灵理论的可能性：即心灵类似于处理符号语言的数字计算机的广泛观点。联结主义范式如何以及在多大程度上构成对经典主义的挑战，近年来一直是热烈争论的话题。

---

## 神经网络的描述

一个神经网络由大量单元以连接的模式组成。网络中的单元通常分为三类：输入单元接收要处理的信息，输出单元显示处理结果，中间的单元称为隐藏单元。如果一个神经网络要模拟整个人类神经系统，那么输入单元类似于感觉神经元，输出单元类似于运动神经元，隐藏单元类似于其他所有神经元。

这里是一个简单的神经网络的简单示例：

![a diagram of three columns with the first having seven circles, the second having four circles, and the third having three circles Each circle in the first column is connected to each circle in the second by a line Each circle in the second column is connected to each circle in the third column by a line](https://plato.stanford.edu/entries/connectionism/net.svg)

每个输入单元都有一个表示与网络外部某些特征的激活值。输入单元将其激活值发送给其连接的每个隐藏单元。这些隐藏单元中的每一个根据它从输入单元接收到的激活值计算自己的激活值。然后，该信号传递到输出单元或另一层隐藏单元。那些隐藏单元以相同的方式计算它们的激活值，并将它们发送给它们的邻居。最终，输入单元处的信号通过整个网络传播，以确定所有输出单元的激活值。

网络建立的激活模式由单位之间的权重或连接强度决定。权重可以是正的也可以是负的。负权重表示发送单位的活动抑制接收单位。每个接收单位的激活值根据简单的激活函数计算。激活函数在细节上有所不同，但它们都遵循相同的基本计划。该函数将所有发送单位的贡献相加，其中单位的贡献被定义为发送单位和接收单位之间连接的权重乘以发送单位的激活值。通常还会进一步修改这个总和，例如通过将激活总和调整为 0 到 1 之间的值和/或者除非达到总和的阈值水平，否则将激活设置为零。联结主义者假设认知功能可以通过以这种方式运作的单位集合来解释。由于假设所有单位计算的基本激活函数基本相同，人类的智力成就主要取决于单位之间权重的设置。

上面所示的网络称为前馈网络。激活直接从输入流向隐藏单元，然后流向输出单元。大脑的更现实的模型将包括许多层隐藏单元和递归连接，这些连接会将信号从更高的层级发送回较低的层级。这种递归是必要的，以解释诸如短期记忆之类的认知特征。在前馈网络中，同一输入的重复呈现每次产生相同的输出，但即使是最简单的生物也会习惯于（或学会忽略）同一刺激的重复呈现。连接主义者倾向于避免递归连接，因为对于训练递归网络的一般问题了解甚少。然而，Elman（1991）和其他人在简单的递归网络方面取得了一些进展，其中递归受到严格限制。

## 2. 神经网络学习与反向传播

寻找完成特定任务所需的正确权重集是联结主义研究的中心目标。幸运的是，已经设计出了可以计算执行许多任务所需正确权重的学习算法（参见 Hinton 1992 年的一篇易懂的评论）。这些算法大致分为两类：监督学习和无监督学习。希伯学习是最著名的无监督形式。当每个输入被呈现给网络时，连接在一起的节点之间的权重会增加，而连接在一起的节点之间的权重会减少。这种训练形式对于构建能够将输入分类为有用类别的网络特别有用。最广泛使用的监督算法称为反向传播。要使用这种方法，需要一个包含许多输入示例及其给定任务的期望输出的训练集。这个外部示例集“监督”着训练过程。例如，如果任务是区分男性和女性的面孔，训练集可能包含面孔图片以及每张图片中所示人物性别的指示。可以学习这个任务的网络可能有两个输出单元（表示男性和女性两个类别）和许多输入单元，其中一个专门用于图片中每个像素（小区域）的亮度。待训练的网络的权重最初设置为随机值，然后训练集的成员会反复暴露给网络。将成员的输入值放在输入单元上，然后将网络的输出与该成员的期望输出进行比较。然后微调网络中的所有权重，使网络的输出值更接近期望输出的值。例如，当男性面孔呈现给输入单元时，权重会调整，使男性输出单元的值增加，女性输出单元的值减少。经过多次重复这个过程，网络可能会学会为训练集中的每个输入产生期望的输出。如果训练顺利，网络还可能已经学会推广到训练集中没有的输入和输出的期望行为。例如，它可能会很好地区分从未呈现给它的图片中的男性和女性。

训练神经网络模拟人类智能的各个方面是一门精湛的艺术。通过反向传播和其他联结主义学习方法取得成功可能取决于对算法和训练集的微妙调整。训练通常涉及数十万次的权重调整轮次。鉴于过去计算机的局限性，训练一个网络执行有趣任务可能需要数天甚至数周的时间。最近，大规模并行专用处理器（GPU）的使用有助于减轻这些沉重的计算负担。但即便如此，联结主义学习理论仍将面临一些限制。人类（以及许多智力较低的动物）展示了从单个示例中学习的能力；例如，一个被展示一个新颖的双轮车辆并被命名为“Segway”的孩子，立刻知道什么是 Segway（Lake, Zaremba 等人，2015 年）。反向传播等联结主义学习技术远未能解释这种“一次性”学习。

## 3. 神经网络的示例

联结主义者在展示神经网络掌握认知任务的能力方面取得了显著进展。以下是三个著名实验，这些实验鼓舞了联结主义者相信神经网络是人类智能的良好模型。其中最吸引人的努力之一是 Sejnowski 和 Rosenberg 于 1987 年进行的一项名为 NETtalk 的能够阅读英文文本的网络。NETtalk 的训练集是一个大型数据库，包括英文文本及其相应的语音输出，以一种适合与语音合成器一起使用的代码编写。在训练的不同阶段录制的 NETtalk 表现的磁带非常有趣。起初，输出是随机噪音。后来，网络听起来像在胡言乱语，再后来就像在说英语双关语（由类似英语单词的声音组成的语音）。在训练结束时，NETtalk 能够相当好地发音给予它的文本。此外，这种能力在未包含在训练集中的文本上也有相当好的泛化能力。

另一个具有影响力的早期联结主义模型是由 Rumelhart 和 McClelland（1986）训练的网络，用于预测英语动词的过去式。这个任务很有趣，因为尽管英语中大多数动词（常规动词）通过添加后缀“-ed”来形成过去式，但许多最常用的动词是不规则的（“is” / “was”，“come” / “came”，“go” / “went”）。该网络首先在包含大量不规则动词的集合上进行训练，后来在包含大多数常规动词的 460 个动词集合上进行训练。该网络在大约 200 轮训练中学会了这 460 个动词的过去式，并且在不在训练集中的动词上表现出了相当好的泛化能力。它甚至展现出对不规则动词中的“规律性”有很好的理解（“send” / “sent”，“build” / “built”；“blow” / “blew”，“fly” / “flew”）。在学习过程中，随着系统接触到包含更多常规动词的训练集，它有过度规范化的倾向，即结合不规则和常规形式：“break” / “broked”，而不是“break” / “broke”。这通过更多的训练得到了纠正。有趣的是，众所周知，儿童在语言学习过程中也表现出同样的过度规范化倾向。然而，关于 Rumelhart 和 McClelland 的模型是否是人类实际学习和处理动词词尾的好模型存在激烈的争论。例如，Pinker 和 Prince（1988）指出，该模型在泛化到一些新颖的常规动词时表现不佳。他们认为这是联结主义模型的一个基本缺陷的迹象。网络可能擅长建立关联和匹配模式，但在掌握常规过去式形成等一般规则方面存在根本性限制。这些抱怨引发了联结主义模型制作者的一个重要问题，即网络是否能够适当地泛化以掌握涉及规则的认知任务。尽管 Pinker 和 Prince 的反对意见，许多联结主义者仍相信，正确类型的泛化仍然是可能的（Niklasson & van Gelder 1994）。

Elman（IGNORE）1991 年关于能够理解语法结构的网络的研究对于关于神经网络是否能够学会掌握规则的讨论具有重要意义。Elman 训练了一个简单的循环网络，以预测一个大型英语句子语料库中的下一个单词。这些句子由一个包含 23 个单词的简单词汇表组成，使用英语语法的一个子集。尽管语法很简单，但对语言意识提出了一个严格的测试。它允许相对从句的无限形成，同时要求头名词和动词之间的一致。因此，例如，在句子

> 追逐追逐猫的狗的人...跑。

“人” 这个单数名词必须与动词 “runs” 保持一致，尽管中间有复数名词 (“dogs”, “cats”) 可能导致选择 “run”。Elman 模型的一个重要特征之一是使用循环连接。隐藏单元的值保存在一组所谓的上下文单元中，以便发送回输入级别进行下一轮处理。从隐藏层到输入层的这种循环反馈为网络提供了输入句子中单词序列的一种基本记忆形式。Elman 的网络展示了对不在训练集中的句子的语法结构的欣赏。网络对语法的掌握是通过以下方式衡量的。预测英语句子中的下一个单词当然是一项不可能的任务。然而，这些网络至少通过以下方式取得了成功。在输入句子的某一点，该点的语法连续的单词的输出单元应处于活跃状态，而所有其他单词的输出单元应处于非活跃状态。经过密集训练，Elman 能够产生表现完美的网络，包括不在训练集中的句子。Christiansen 和 Chater (1999a) 以及 Morris, Cottrell 和 Elman (2000) 的工作将这项研究扩展到更复杂的语法。有关联结主义自然语言处理进展的更广泛视角，请参阅 Christiansen 和 Chater (1999b) 以及 Rohde 和 Plaut (2003) 的总结。

尽管这种表现令人印象深刻，但在训练能够处理英语等语言的网络方面仍有很长的路要走。此外，对 Elman 的结果的重要性提出了疑问。例如，Marcus（1998，2001）认为 Elman 的网络无法将这种表现推广到由新词汇组成的句子。他声称，这表明联结主义模型仅仅是将实例关联起来，无法真正掌握抽象规则。另一方面，Phillips（2002）认为，在这方面，传统的架构也没有更好。联结主义模型据称无法以这种方式推广表现已成为系统性辩论中的一个重要主题。（见下文第 7 节。）

关于联结主义语言处理的充分性，有一个略有不同的关注点集中在模拟婴儿学习简单人工语法的任务上。反应时间的数据证实，婴儿可以学会区分实验者创建的新语言中的合法句子和非法句子。舒尔茨（Shultz）和贝尔（Bale）（2001）报告称，在同一任务上训练神经网络取得了成功。维尔库（Vilcu）和哈德利（Hadley）（2005）反对称这项工作未能证明对语法的真正习得，但请参阅舒尔茨和贝尔（2006）以获取详细回复。

## 4. 神经网络模型的优势和劣势

哲学家对神经网络感兴趣，因为它们可能为理解心灵的本质及其与大脑的关系提供一个新的框架（Rumelhart & McClelland 1986: 第 1 章）。联结主义模型似乎特别适合我们对神经学的了解。大脑确实是一个神经网络，由大量单元（神经元）及其连接（突触）组成。此外，神经网络模型的几个特性表明，联结主义可能提供了对认知加工本质的特别忠实的描绘。神经网络在面对现实世界提出的挑战时表现出强大的灵活性。嘈杂的输入或单元的破坏会导致功能的优雅退化。尽管网络的响应仍然适当，但准确性略有降低。相比之下，在经典计算机中的噪声和电路损失通常会导致灾难性的失败。神经网络也特别适用于需要并行解决许多相互冲突约束的问题。人工智能研究中有大量证据表明，诸如物体识别、规划，甚至协调运动等认知任务存在这种问题。尽管经典系统能够满足多个约束，但联结主义者认为神经网络模型提供了处理这类问题的更自然机制。

多个世纪以来，哲学家们一直在努力理解我们的概念是如何被定义的。现在广泛认可的是，试图用必要和充分条件来表征普通概念注定会失败。几乎任何提出的定义都会有例外。例如，有人可能提出老虎是一种大型的黑色和橙色的猫科动物。但是白化老虎呢？哲学家和认知心理学家认为，类别是以更灵活的方式界定的，例如通过家族相似性或与原型的相似性。联结主义模型似乎特别适合容纳这种类别成员资格的渐进概念。神经网络可以学习欣赏那些很难用严格规则表达的微妙统计模式。联结主义承诺用无法轻易表达为无例外原则形式的方法来解释人类智能中发现的灵活性和洞察力（Horgan & Tienson 1989, 1990），从而避免了由标准符号表示形式产生的脆弱性。

尽管这些引人入胜的特点，联结主义模型存在一些值得一提的弱点。首先，大多数神经网络研究都忽略了大脑许多有趣且可能重要的特征。例如，联结主义者通常不尝试明确地模拟大脑神经元的各种不同类型，也不考虑神经递质和激素的影响。此外，目前尚不清楚大脑是否包含类似反向连接，这种连接在大脑要通过反向传播等过程学习时可能是必要的，而这种训练方法所需的大量重复似乎远非现实。如果要构建令人信服的人类认知加工的联结主义模型，就可能需要关注这些问题。还有一个更严重的反对意见需要解决。广泛认为，尤其是在古典主义者中，神经网络在被认为支撑语言、推理和更高形式思维的基于规则的处理方面表现不佳。（有关这种批评的著名文章，请参见 Pinker 和 Prince，1988 年。）当我们转向系统性辩论时，我们将进一步讨论这个问题。

有一个小型产业致力于开发更具生物学可信度的误差驱动训练算法，这些算法可以被证明在不涉及不可信特征的情况下近似反向传播的结果。著名的例子包括 O’Reilly 的广义误差循环算法（O’Reilly 1996），该算法使用随机化误差信号而不是为每个神经元单独计算的误差信号（Lillicrap, Cownden, Tweed, & Akerman 2016），以及使用时序相关塑性来修改权重——后者是深度学习研究中知名人物的最爱（Bengio 等人 2017 年）。 （有关深度学习的更多信息，请参见下面的第 11 节。）

## 5. 连结主义与经典主义之争的形态

在过去的四十年中，古典观点主导着（至少更高级的）人类认知类似于数字计算机中的符号计算。根据古典观点，信息由符号串表示，就像我们在计算机内存或纸张上表示数据一样。另一方面，联结主义者声称，信息以非符号方式存储在神经网络单元之间的权重或连接强度中。古典主义者认为认知类似于数字处理，其中根据（符号）程序的指令按顺序产生字符串。联结主义者将心理加工视为神经网络中活动的动态和分级演变，每个单元的激活取决于其邻居的连接强度和活动。

乍看之下，这些观点似乎非常不同。然而，许多联结主义者并不认为他们的工作是对古典主义的挑战，一些人甚至公开支持古典主义的观点。所谓的实现联结主义者寻求两种范式之间的融合。他们认为大脑的网络实现了一个符号处理器。的确，思维是一个神经网络；但它也是一个在更高和更抽象的描述层面上的符号处理器。因此，根据实现主义者的观点，联结主义研究的作用在于发现如何从神经网络材料中构建出符号处理所需的机制，以便将古典处理归结为神经网络的解释。

然而，许多联结主义者抵制实现的观点。这些激进的联结主义者声称，符号处理是对大脑运作方式的错误猜测。他们抱怨经典理论在解释功能的优雅退化、数据的整体表示、自发泛化、对语境的理解以及人类智能的许多其他特征方面表现不佳，而这些特征在他们的模型中得到了捕捉。经典编程无法匹配人类认知的灵活性和效率，根据他们的观点，这是认知科学需要新范式的迹象。因此，激进的联结主义者将永远从认知科学中消除符号处理。

联结主义的争议因所谓的混合联结主义架构的发明而变得复杂。在这些架构中，经典符号处理的元素被包含在神经网络中（Wermter & Sun 2000）。例如，Miikkulainen（1993）倡导一种复杂的神经网络模块集合，这些模块共享以激活模式编码的数据。由于其中一个模块充当记忆，整个系统看起来类似于具有用于存储和操作数字“词”的独立机制的经典处理器。Smolensky（1990）因发明所谓的张量积方法以模拟变量绑定过程而闻名，其中符号信息存储在已知的“位置”并从中检索。最近，Eliasmith（2013）提出了使用所谓的语义指针的复杂和庞大架构，这些架构展现了经典变量绑定的特征。一旦这类混合架构出现，将某个联结主义模型归类为激进还是仅仅是实施变得更加困难。这引发了一个有趣的展望，即人类大脑中是否实际存在符号处理可能取决于程度的问题。

关于人类认知涉及符号处理程度的分歧自然地与先天性辩论纠葛在一起——即高层能力如语言和推理是否是人类遗传禀赋的一部分，或者它们是通过学习获得的。联结主义模型在从随机选择的权重开始学习任务方面取得的成功使经验主义者振奋，他们认为婴儿大脑能够利用简单的学习机制从感知输入中构建智能（Elman 等人，1996 年）。另一方面，理性主义传统中的先天主义者认为，至少对于基于语法的语言而言，感知刺激的贫乏（Chomsky，1965 年：58）意味着存在一个适合学习语法的遗传确定机制。然而，联结主义与非先天主义之间的关系并不那么清晰。联结主义模型并不排斥从先天主义的角度解释，其中持续的“学习”代表了物种一代又一代的进化细化过程。人类大脑具有遗传确定的特定领域知识的想法可以通过偏置模型的初始权重来容纳在联结主义范式中，使得这种知识易于或者平凡地学习。联结主义研究通过提供一种新策略来消除刺激贫乏论点，与先天性辩论取得最佳联系。先天主义者认为，观念的联想，传统经验主义者提出的学习机制，对于发展高层认知能力来说太过脆弱。他们认为，先天机制对于学习（例如）从儿童的语言输入中学习英语语法是必不可少的，因为“纯粹的联想”可用的统计规律远不能确定那种语法。联结主义可以通过提供一个概念验证，即这种结构化知识可以从人类可获得的输入中仅使用非经典结构中发现的学习机制来学习，从而支持经验主义。当然，现在还为时过早来判断这一承诺是否能实现。

## 6. 联结主义表征

联结主义模型为我们提供了一种新的范式，用于理解信息如何在大脑中被表示。一个诱人但幼稚的想法是，单个神经元（或微小的神经束）可能被用来表示大脑需要记录的每一件事情。例如，我们可能想象存在一个祖母神经元，当我们想到祖母时会被激活。然而，这样的局部表示不太可能存在。有充分的证据表明，我们对祖母的思维涉及到分布在大脑皮层相对较大部分的复杂活动模式。

有趣的是，联结主义训练方法的自然产物是隐藏单元上的分布式表示，而不是局部表示。在 NETtalk 处理文本时出现在隐藏单元上的激活模式就是一个例子。分析揭示了网络学会了表示辅音和元音这样的类别，不是通过创建一个激活于辅音的单元和另一个激活于元音的单元，而是通过在所有隐藏单元上发展两种不同的特征活动模式。

鉴于我们对印刷页面上的局部表示的经验形成的期望，分布式表示似乎既新颖又难以理解。但这种技术具有重要优势。例如，分布式表示（不同于存储在单独固定内存位置的符号）在模型的部分被破坏或过载时仍然相对完好保存。更重要的是，由于表示是以模式而不是个体单元的激活来编码的，表示之间的关系是通过这些模式之间的相似性和差异性来编码的。因此，表示的内部属性携带有关其内容的信息（Clark 1993: 19）。相比之下，局部表示是传统的。表示的内在属性（单元的激活）并不决定它与其他符号的关系。分布式表示的这种自我报告特性有望解决关于含义的哲学难题。在符号表示方案中，所有表示都由符号原子（如语言中的单词）组成。复杂符号串的含义可以通过它们由组成部分构建而定义，但是是什么确定了原子的含义呢？

联结主义表征方案通过简单地摒弃原子来绕过这个难题。每个分布式表征都是所有单元之间活动的模式，因此没有原则性的方法来区分简单和复杂的表征。可以肯定的是，表征是由各个单元的活动组成的。但是，这些“原子”中没有一个编码任何符号。这些表征在分析其组成部分时是亚符号的，这意味着超越了符号水平。

分布式表示的非符号性质提供了一种新颖的方式来构想大脑中的信息处理。如果我们用一个数字来模拟每个神经元的活动，那么整个大脑的活动可以用一个巨大的向量（或列表）来表示，每个神经元对应一个数字。大脑从感觉系统接收的输入以及输出到单个肌肉神经元的活动也可以被视为相同类型的向量。因此，大脑可以被视为一个向量处理器，而心理学问题则转化为关于哪些向量操作解释了人类认知的不同方面的问题。

亚符号表示对于大脑必须包含类似语言句子的符号表示的经典假设具有有趣的含义。这个想法通常被称为思维语言（或 LOT）论题，可能会受到联结主义表示性质的挑战。很难准确地说 LOT 论题到底意味着什么，但范·格尔德（1990）提供了一个有影响力且被广泛接受的标准，用于确定何时应该说大脑包含类似句子的表示。即当一个表示被标记时，从而标记了该表示的组成部分。例如，如果我写下“John loves Mary”，我已经写下了句子的组成部分：“John”、“loves”和“Mary”。对于像“John loves Mary”这样的复杂表达式，可以构建分布式表示，而这些表示不包含任何明确表示它们部分的表示（Smolensky，1990）。有关组成部分的信息可以从表示中提取出来，但神经网络模型本身不需要明确提取这些信息才能正确处理它（Chalmers，1990）。这表明神经网络模型作为思维语言对人类认知是必要条件的反例。然而，这个问题仍然是一个活跃的讨论话题（Fodor，1997）。

分布式和叠加的联结主义信息存储的新颖性自然引起人们对经典符号计算概念在描述大脑中的可行性产生疑问。Ramsey (1997) 认为，尽管我们可能将符号表示归因于神经网络，但这些归因并不在模型行为的合法解释中起作用。这一觏定很重要，因为经典认知加工的描述（和民间直觉）假定表示在理解心智中起到解释作用。人们普遍认为，认知科学本质上需要诉诸于表示的解释（Von Eckardt 2003）。如果 Ramsey 是正确的，这一观点可能有两种不同的解读。有些人可能会用它来主张对心智的新的非经典理解，而另一些人则会用它来主张联结主义是不足的，因为它无法解释必须解释的内容。然而，Haybron (2000) 反驳 Ramsey，认为在激进的联结主义结构中，表示具有解释作用的空间是充足的。Roth (2005) 提出了一个有趣的观点，与初步印象相反，即通过参考计算机程序来解释网络的行为也可能是完全合理的，即使没有办法通过时间来区分计算的一系列步骤。

关于经典表征和思维语言存在的争论，由于在定义分布式神经模型中应当算作表征“载体”方面缺乏清晰度而变得模糊。Shea（2007）指出，分布式表征的个体化应当由隐藏单元上的激活模式聚类的方式来定义。在可能激活模式空间中聚类区域之间的关系承载着表征内容，而不是激活本身，也不是负责激活的单元集合。根据这一理解，可以更好地在神经网络中定位表征内容，这些内容可以在不同架构的网络中进行比较，与处理有因果关系，并且克服了一些对于整体意义解释的异议。

在一系列的论文中，Horgan 和 Tienson（1989 年，1990 年）提出了一种称为无规则表征的观点。根据这一观点，经典主义者认为人类大脑（以及对它们的良好连接主义模型）包含具有解释力的表征是正确的；但他们错误地认为这些表征会像计算机程序的步骤那样进入到严格的规则中。联结主义系统可能遵循分级或近似规律（Horgan 和 Tienson 称之为“软法则”）的想法是直观和吸引人的。然而，Aizawa（1994 年）认为，鉴于任意的神经网络具有表征层描述，总是可以为其配备严格的表征层规则。Guarini（2001 年）回应说，如果我们关注对认知建模有用的规则遵循概念，Aizawa 的构想将显得无关紧要。

## 系统性辩论

在关于联结主义的哲学文献中，争议的主要焦点在于联结主义者是否提供了一种可行且新颖的范式来理解心智。有人批评称，联结主义模型只擅长处理关联。但语言和推理等任务不可能仅通过联想方法完成，因此联结主义者不太可能在解释这些更高层认知能力方面与经典模型的表现相匹敌。然而，很容易证明神经网络可以做任何符号处理器能做的事情，因为可以构建模仿计算机电路的网络。因此，反对意见不能是联结主义模型无法解释更高认知能力；而是它们只有在实现经典主义者的符号处理工具时才能做到。实现性联结主义可能会成功，但激进的联结主义者永远无法解释心智。

Fodor 和 Pylyshyn 的经常被引用的论文（1988）引发了这种辩论。他们确定了一种称为系统性的人类智能特征，他们认为联结主义者无法解释。语言的系统性指的是产生/理解/思考某些句子的能力与产生/理解/思考其他相关结构的句子的能力之间的固有联系。例如，任何理解“John loves Mary”并掌握英语的人都不可能不理解“Mary loves John”。从古典观点来看，这两种能力之间的联系可以很容易地通过假设英语专家代表“John”、“loves”和“Mary”的成分并从这些成分的含义计算出“John loves Mary”的含义来解释。如果是这样，那么理解像“Mary loves John”这样的新句子可以被解释为相同符号过程的另一个实例。类似地，符号处理将解释推理、学习和思考的系统性。它将解释为什么没有人能够从 P &（Q & R）推断出 P，但无法从 P & Q 推断出 P，为什么没有人能够学会更喜欢红色立方体而不是绿色正方形的人，却无法学会更喜欢绿色立方体而不是红色正方形，以及为什么没有人能够认为 John 爱 Mary 而不能想到 Mary 爱 John。

Fodor 和 McLaughlin（1990）详细论证了联结主义者未能解释系统性。尽管联结主义模型可以被训练成具有系统性，但它们也可以被训练，例如，识别“John 爱 Mary”而无法识别“Mary 爱 John”。由于联结主义不能保证系统性，它无法解释为什么系统性在人类认知中如此普遍。系统性可能存在于联结主义结构中，但存在的地方，不过是一种幸运的偶然。经典解决方案要好得多，因为在经典模型中，普遍的系统性是免费的。

联结主义网络在解释系统性方面处于劣势的指责引起了很多兴趣。查尔默斯（Chalmers，1993）指出，福多尔（Fodor）和皮利欣（Pylyshyn）的论点证明过于过分，因为它暗示着所有神经网络，即使是实现了经典架构的网络，也不具备系统性。鉴于大脑是一个神经网络这一无争议的结论，可以得出结论，系统性在人类思维中是不可能的。另一个经常提到的反驳观点（Aizawa，1997b；马修斯（Matthews），1997；哈德利（Hadley），1997b）是，经典架构在解释系统性方面并不比联结主义做得更好。也有经典模型可以被编程来识别“约翰爱玛丽”，但无法识别“玛丽爱约翰”，因为这取决于经典处理中的哪些符号规则。关键在于，无论是仅使用联结主义架构还是仅使用经典架构，都不能强制施加足够强的约束来解释普遍的系统性。在这两种架构中，必须进一步假设有关处理性质的内容，以确保“玛丽爱约翰”和“约翰爱玛丽”被同等对待。

对这一观点的讨论应该提到 Fodor 和 McLaughlin 的要求，即系统性应该被解释为一种必然性，也就是自然法则的问题。对联结主义者的抱怨是，虽然他们可能实现展示系统性的系统，但除非它作为一种必然性从他们的模型中得出，否则他们将无法解释它。然而，对必然性的要求是非常强烈的，而且经典架构显然也无法满足这一要求。因此，对联结主义者提出有力反对意见的唯一策略是将对系统性解释的要求削弱到经典架构可以满足而联结主义者无法满足的程度。迄今为止，尚未提出这种类型的令人信服的案例。

随着系统性辩论的发展，人们开始关注定义能够回应 Fodor 和 Pylyshyn 挑战的基准。Hadley（1994a, 1994b）区分了三种系统性品牌。联结主义者已经清楚地展示了其中最弱的一种，通过展示神经网络可以学习正确识别训练集中没有的新序列词（例如，“Mary loves John”）。然而，Hadley 认为，一个令人信服的反驳必须展示出强系统性，或者更好地说，强语义系统性。强系统性至少需要“Mary loves John”被识别，即使“Mary”在训练集中的任何句子中都没有出现在主语位置。强语义系统性还要求网络展示出正确的语义处理能力，而不仅仅是区分语法和非语法形式。Niklasson 和 van Gelder（1994）声称取得了强系统性的成功，尽管 Hadley 抱怨这最多只是一个边缘案例。Hadley 和 Hayward（1997）探讨了强语义系统性，但根据 Hadley 自己的承认，他们是否避免了使用经典架构并不清楚。Boden 和 Niklasson（2000）声称已经构建了一个至少符合强语义系统性精神的模型，但 Hadley（2004）认为即使在那里也没有展示出强系统性。无论一个人对这些尝试持积极还是消极的观点，可以肯定地说没有人能够应对提供一个能够学习复杂语义处理并推广到真正全新输入范围的神经网络的挑战。

对清晰展示强系统性的网络的研究一直在继续。Jansen 和 Watter（2012）对沿着这些方向进行的更近期努力提供了很好的总结，并提出了解决问题的有趣基础。他们使用了一个更复杂的架构，将无监督的自组织映射与简单循环网络的特征相结合。然而，主要创新在于允许正在处理的单词的代码表示单词所代表的感觉运动特征。一旦训练完成，他们的网络在区分那些训练集中甚至从未出现过的单词的语法特征方面显示出非常好的准确性。这可能看起来像作弊，因为单词代码可能暗中表示语法类别，或者至少它们可能不公平地促进学习这些类别。然而，Jansen 和 Watter 指出，一个刚刚学会一个新单词的孩子对单词所代表的感觉运动特征是显而易见的，因此这些信息在语言学习模型中并不是禁区。他们做出了有趣的观察，即解决系统性问题可能需要包括迄今在语言学习理论中被忽视的环境信息来源。这项工作使系统性辩论变得更加复杂，因为它引发了一个关于如何回应挑战的合法信息资源是什么的新担忧。然而，这提醒我们，无论是经典的还是联结主义的架构，单靠架构本身都不会解决系统性问题，因此有趣的问题涉及需要哪些补充信息来源才能使语法学习成为可能。

肯特·约翰逊（2004）认为整个系统性辩论是误导的。试图精确定义语言或思维的系统性，要么让我们陷入琐碎，要么让我们陷入错误。联结主义者确实有解释的责任，但约翰逊建议，将他们的负担视为系统性的范畴是徒劳的。艾扎瓦（2014）也建议，鉴于认知科学当前的氛围，这场辩论已不再相关。相反，需要发展出神经可信的联结主义模型，能够处理具有递归句法的语言，对词汇表中新项目的引入做出即时反应，而不引入古典架构的特征。正如约翰逊建议的那样，“系统性”辩论可能已经结束，因为哈德利对强语义系统性的要求可以被视为要求联结主义者在这方面取得成功。

最近的研究（Loula, Baroni, & Lake 2018）为这一争议带来了新的视角。在这项研究中，循环神经网络被训练来解释一个包含“跳跃”、“行走”、“左”、“右”、“相反”和“环绕”等基本命令的简单语言中的复杂命令。 “相反”被解释为要求执行一项命令两次，“环绕”则要求执行四次。因此，“跳跃环绕左”要求左跳四次。作者报告称，他们的神经网络在展示强语义系统性的任务上表现出非常准确的泛化能力。即使“跳跃环绕右”这个短语在训练集中从未出现，网络也能正确解析测试集中包含该短语的命令。然而，网络在更具挑战性的任务上的失败表明了它们在泛化方面存在局限性，无法展示真正的系统性。当测试集中的命令比训练集中呈现的命令更长（甚至更短）时，网络表现出非常糟糕的性能。因此，它们似乎无法自发地从各部分的含义中组合出复杂表达式的含义。需要进行新的研究来了解这些失败的本质，以及它们是否可以在非经典架构中克服，以及人类在类似情况下是否会展示类似的错误。

自系统性辩论首次开始以来已经将近三十年，Fodor 和 Pylyshyn 的原始论文已被引用超过 3,000 次。因此，这个简要说明必然是不完整的。Aizawa（2003）提供了对文献的出色概述，而 Calvo 和 Symons（2014）则是另一个较新的资源。

## 8. Connectionism as 联结主义和语义相似性

在联结主义模型中分布式表示的吸引力之一在于，它们提出了一个解决大脑状态如何具有意义的理论问题的方案。其核心思想是，沿着不同神经活动维度的激活模式之间的相似性和差异记录了语义信息。因此，神经激活的相似性属性提供了决定意义的内在属性。然而，当涉及到组合语言表示时，Fodor 和 Lepore（1992 年：第 6 章）在两个方面挑战基于相似性的解释。第一个问题是，人类大脑在神经元数量和连接方面可能存在显著差异。虽然可以很容易地定义两个包含相同单元数量的网络之间的相似性度量，但当两个网络的基本架构不同时，如何做到这一点就更难了。Fodor 和 Lepore 提到的第二个问题是，即使可以成功地制定出关于含义的相似性度量，它们也无法满足理论意义上必须满足的要求。

Churchland (1998)指出这两个异议中的第一个可以得到解决。他引用 Laakso 和 Cottrell (2000)的工作，解释了如何定义在具有根本不同结构的网络中激活模式之间的相似性度量。不仅如此，Laakso 和 Cottrell 还表明，不同结构的网络在相同任务上训练后，根据他们推荐的度量，发展出的激活模式非常相似。这为在不同个体之间经验上明确定义概念和思想的相似性度量提供了希望。

另一方面，基于相似性的传统意义理论的发展面临严重障碍（Fodor & Lepore 1999），因为这样的理论将需要根据对其部分含义的分析来赋予句子真值条件，而仅仅依靠相似性是否足以完成标准理论要求的确定指称的任务尚不清楚。然而，大多数提倡基于相似性的意义解释的联结主义者拒绝了许多标准理论的前提。他们希望制定一个可行的替代方案，既拒绝或修改这些前提，同时又忠实于有关人类语言能力数据。

Calvo Garzón (2003) 抱怨说，有理由认为联结主义者必定会失败。柴奇兰的回应对于附带信息挑战没有答案。问题在于，在两个人类大脑中概念（比如：祖母）的激活模式之间的相似性被测量时，由于两个人对于他们的祖母（姓名、外貌、年龄、性格）的（附带）信息会非常不同，所以保证会非常低。如果概念是由我们所知道的一切来定义的，那么我们概念的激活模式的测量值必然会相距甚远。这是任何希望通过大脑状态之间的功能关系来定义意义的理论中的一个真正深刻的问题。许多不同派别的哲学家都必须努力应对这个问题。鉴于传统或联结主义范式中概念的理论尚未成功制定，公平地将这个问题留给未来的研究。

## 9. 联结主义与民间心理学的消除

联结主义研究在哲学关于心灵的辩论中的另一个重要应用是与民间心理学的地位有关。民间心理学是我们自发应用于理解和预测人类行为的概念结构。例如，知道约翰渴望一杯啤酒，并且他相信冰箱里有一杯啤酒，这使我们能够解释为什么约翰刚刚走进厨房。这种知识在很大程度上取决于我们能否将他人构想为拥有欲望和目标、为实现这些目标制定计划以及有指导这些计划的信念。人们拥有信念、计划和欲望的想法是日常生活中的常见之处；但这是否提供了大脑实际上所发现的忠实描述呢？

其辩护者会主张，民间心理学太过完善以至于不可能是虚假的（Fodor 1988: Ch. 1）。对于一个理论的真实性，我们还能要求什么，除了它为成功与他人进行协商提供了不可或缺的框架？另一方面，废除论者会回应说，一个概念方案的有用和广泛应用并不能证明其真实性（Churchland 1989: Ch. 1）。古代天文学家发现天体球的概念对他们学科的进行是有用的（甚至是必不可少的），但现在我们知道并不存在天体球。从废除论者的观点来看，对民间心理学的忠诚，就像对民间（亚里士多德式）物理学的忠诚一样，阻碍了科学的进步。一个可行的心理学可能需要像量子力学中发现的那样彻底革命性地改变其概念基础。

消除论者对联结主义感兴趣，因为它承诺提供一个概念基础，可能取代民间心理学。例如，Ramsey, Stich, & Garon (1991) 认为，某些前馈网络表明可以执行简单的认知任务，而无需使用与信念、欲望和计划相对应的特征。假设这些网络忠实于大脑的工作方式，民间心理学的概念与天体球一样不尽人意。联结主义模型是否以这种方式削弱了民间心理学仍存在争议。对于声称联结主义模型支持消除论结论的主要回应有两条主要线索。一个反对意见是，Ramsey 等人使用的模型是前馈网络，这些网络过于薄弱，无法解释认知的一些最基本特征，如短期记忆。Ramsey 等人并未表明，在适用于人类认知的一类网络中，信念和欲望必须不存在。第二条反驳线索挑战了声称与信念和欲望相对应的特征在所讨论的前馈网络中必然不存在的说法（Von Eckardt 2005）。

问题变得更加复杂，因为人们对民间心理学的本质存在分歧。许多哲学家将民间心理学所假设的信念和欲望视为具有符号内容的大脑状态。例如，认为冰箱里有啤酒的信念被认为是一个包含与啤酒和冰箱相对应的符号的大脑状态。从这个角度来看，民间心理学的命运与符号处理假设紧密相连。因此，如果联结主义者能够证明大脑处理基本上是非符号的，那么就会得出废除论的结论。另一方面，一些哲学家认为民间心理学并非基本上是符号的，甚至有些人会质疑民间心理学本身是否应该被视为一种理论。根据这种观念，要在联结主义研究结果和废除民间心理学之间建立联系就困难得多。

## 10. 预测编码认知模型

随着联结主义研究从上世纪 80 年代的“黄金时代”走向成熟，主要范式已辐射出多种不同的方法。两个值得一提的重要趋势是预测编码和深度学习（将在下一节中介绍）。预测编码是一种成熟的信息处理工具，具有广泛的应用。例如，在压缩数据集的大小方面非常有用。假设您希望传输一幅蓝天风景图片。由于图像顶部大部分像素大致相同，反复记录每个像素的颜色值（例如十六进制中的红色：46 绿色：78 蓝色：FF）是非常低效的。由于一个像素的值强烈预测其邻居的值，有效的做法是在每个像素位置记录预测值（邻居的平均值）与该像素的实际值之间的差异。（在表示均匀阴影的天空的情况下，我们只需要记录蓝色值一次，然后是大量的零。）这样，主要的编码资源只需要用来跟踪图像中的点（如边缘），在那里发生较大的变化，即“惊喜”或“意外”变化的点。

众所周知，大脑中的早期视觉处理涉及获取相邻数值之间的差异（例如，用于识别视觉边界）。因此，自然而然地探讨大脑如何利用预测编码来进行感知、推理甚至行动是很重要的。（参见 Clark 2013 年的优秀总结和文献入口。）在预测编码范式中提出的模型种类繁多，它们往往在更高的一般性水平上进行规范，而不像迄今讨论的联结主义模型那样具体。假设我们有一个神经网络，具有输入、隐藏和输出层，已经在某项任务上进行了训练（比如人脸识别），因此可能在连接隐藏层节点的权重中存储了关于人脸的信息。三个特征将使这个网络被分类为预测编码（PC）模型。首先，该模型将具有从更高层次向下的连接，能够预测该任务的下一个输入。（预测可能是一个通用人脸的表示。）其次，发送给更高层的数据并不是记录在输入节点的值，而是预测值与实际值之间的差异。（因此，在这个例子中，提供的数据跟踪要识别的人脸与通用人脸之间的差异。）通过这种方式，网络接收的数据已经经过预处理以提高编码效率。第三，该模型通过调整权重进行训练，以使输入处的误差最小化。换句话说，经过训练的网络尽可能减少原始输入与其预测之间的“惊喜”。通过这样做，它能够预测要识别的个体的面孔以消除误差。一些预测编码模型的支持者认为，这种方案提供了对所有认知现象的统一解释，包括感知、推理、规划和运动控制。通过在与环境互动中最小化预测误差，网络被迫发展概念资源来模拟外部世界的因果结构，从而更有效地导航该世界。

预测编码（PC）范式引起了很多关注。有充分证据表明，PC 模型捕捉了哺乳动物大脑视觉功能的基本细节（Rao＆Ballard 1999; Huang＆Rao 2011）。例如，当在典型视觉输入上进行训练时，PC 模型会自发地发展出用于边缘、方向和运动检测的功能区域，这些功能区域已知存在于视觉皮层中。这项工作还提出了一个有趣的观点，即视觉结构可能会根据所遇到的场景统计数据而发展，以便不同环境中的生物拥有特别适应其需求的视觉系统。

必须承认，目前仍然没有令人信服的证据表明 PC 模型的基本特征直接作为大脑解剖结构实现。尽管有猜测表明表层金字塔细胞可能传递预测误差，深层金字塔细胞进行预测，但我们并不知道它们实际上是如何运作的。另一方面，PC 模型似乎比反向传播架构更符合神经学上的合理性，因为不需要在外部提供的训练样本集上进行单独的训练过程。相反，预测取代了训练集的作用，因此学习和与环境互动是统一的无监督过程的两个方面。

PC 模型还显示出解释更高层认知现象的潜力。一个经常被引用的例子是双眼竞争。当两只眼睛分别呈现完全不同的图像时，人类报告两幅图像之间的振荡，因为每幅图像轮流“聚焦”。PC 的解释是系统通过预测一个眼睛的场景成功消除错误，但只会增加另一个眼睛的错误。因此，系统是不稳定的，从一个预测到另一个预测“猎取”。预测编码还对我们为什么不知道我们的盲点有一个自然的解释，因为该区域缺乏输入相当于没有错误的报告，结果是人们感知到“更多相同的事物”。

关于注意力的 PC 模型也得到了支持。例如，Hohwy（2012）指出，现实的 PC 模型需要容忍嘈杂的输入，需要包括跟踪所需精度的参数，以便在报告错误时使用。因此，PC 模型需要对给定情况下的错误精度进行预测。Hohwy 探讨了优化精度期望的机制与解释注意力的机制之间的映射，并认为注意力现象，如变化盲点，可以在 PC 范式内得到解释。

预测编码对认知科学哲学主题有着有趣的启示。通过将自上而下的预测过程与自下而上的错误检测过程整合在一起，感知的 PC 解释将其视为内在具有理论负荷的过程。在网络较高层次中体现的世界的概念性分类的部署对于收集关于世界的数据的过程至关重要。这也强调了信念、想象能力和感知之间紧密的联系（Grush 2004）。PC 范式还倾向于支持认知的情境化或具身化概念，因为它将行动视为生物体对环境产生影响、对这些影响（即其计划）的预测以及对错误的持续监控之间的动态互动，这提供了反馈以帮助确保成功。

现在评估联结主义模型在解释认知各个方面的重要性和范围还为时过早。毕竟，提供一个关于大脑功能的统一理论是一个不可能实现的高标准。克拉克（Clark）的目标文章（2013）为对联结主义模型提出抱怨和一些可能回应提供了一个有用的论坛。经常听到的一个反对意见是，一个拥有联结主义大脑的有机体可以预期会蜷缩在黑暗房间里并死去，因为这是最大程度减少其感官输入误差的最佳方式。然而，这种观点可能对有机体可用的预测的复杂性持有过于狭隘的看法。如果它要生存下去，其遗传赋予以及沿途所学到的东西很可能会使其期望它去寻找环境中所需的资源。为了使其行为的预测最小化误差，它将离开黑暗房间。然而，尚待观察的是，生物冲动的理论是否可以以这种方式有用地重新表述为联结主义术语，或者联结主义理论是否更好地被描述为解释的一部分。另一个抱怨是，我们感知的自上而下影响与大脑接收误差信号而不是原始数据的约束将在幻想的代表世界和真实世界之间施加一个不切实际的分隔。很难评估这是否合格作为一个严肃的反对意见。如果联结主义模型实际上提供了我们现象经验的解释，并描述了这种经验与我们认为是真实的东西之间的关系，那么应该得出的怀疑结论将被视为观点的特征而不是反对意见。对克拉克目标文章的一些回应者还担心联结主义模型过于一般化。试图解释一切的结果是什么都不解释。在架构上没有足够的约束条件，仅仅通过用预测、比较、误差最小化和优化精度的词汇重新描述认知现象，就太容易假装解释认知现象。布丁的真正证明将随着在联结主义框架中开发更复杂和详细的计算机模型，这些模型在生物学上是合理的，并能展示认知的定义特征而来。

## 11. 深度学习：联结主义的新浪潮

尽管联结主义的抱负似乎在其黄金时代末期（1980 年至 1995 年）变得成熟和温和，但神经网络研究最近重新受到关注，这是由于技术成就的结合使得训练具有许多层节点的网络变得实用（Krizhevsky、Sutskever 和 Hinton，2012 年；Goodfellow、Bengio 和 Courville，2016 年）。亚马逊、Facebook、谷歌、微软和优步自那时起都在这些“深度学习”系统上进行了大量投资。它们许多有前途的应用包括识别照片中的物体和面孔、自然语言翻译和文本生成、蛋白质折叠的预测、医学诊断和治疗，以及自动驾驶车辆的控制。游戏程序 AlphaZero 的成功（Silver 等人，2018 年）在大众媒体中引起了强烈的关注。关于 AlphaZero 尤其值得注意的是，基本上相同的算法能够学会击败人类世界冠军和其他在三种不同基于规则的游戏（国际象棋、将棋和围棋）中表现优异的人工系统，而“无需人类知识”策略，也就是说，仅使用这些游戏规则和它从广泛的自我对弈中学到的策略信息。它能够坚定地击败基于专家知识的程序在它们的强项上被誉为人工智能传统符号范式的丧钟。

然而，深度学习系统的新能力也带来了新的担忧。深度网络通常从比它们的前辈更多得多的数据中学习（AlphaZero 从超过 1 亿局自我对弈的围棋游戏中学习），并且可以提取更加微妙、结构化的模式。虽然对 AlphaZero 在战略上不寻常的方法的分析在国际象棋和围棋研究领域引发了一场小型革命（Sadler & Regan 2019），但也引发了担忧，即深度网络发现的解决方案是陌生和神秘的。因此，对于那些必须对人类利益和目标做出响应的任务依赖深度学习技术是否值得再三考虑是很自然的。

深度学习的成功离不开专门的图形处理单元（GPUs），这些大规模并行处理器针对训练大型网络的计算负担进行了优化。然而，深度学习成功背后的关键创新在于网络架构。尽管文献中描述了深度网络设计的令人困惑的各种变体（Schmidhuber，2015），但有一些共同主题有助于定义这一范式。

最明显的特征是隐藏层数量的大幅增加。黄金时代的网络通常只有一两个隐藏层，而深度神经网络的隐藏层数量从五个到数百个不等。已经证明，相比于具有相同节点数的较浅网络，额外的深度可以指数级增加神经网络的表征和计算能力（Bengio＆Dellaleau 2011；Montúfar 等人 2014；Raghu 等人 2017）。关键在于，在给定层次上检测到的模式可能会被后续层次重复利用，从而不断创造出更加复杂的区分。

层数的数量并不是解释深度网络优越能力的唯一特征。一个新兴的共识是，许多难以学习的任务的特点是存在“无关参数”，即输入信号中与决策成功无关的变化源。在视觉分类任务中的无关参数示例包括姿势、大小和在视野中的位置；在听觉任务中的示例包括音调、音高和持续时间。成功的系统必须学会识别隐藏在这种变化之下的更深层次的相似之处，以识别图像中的物体或音频数据中的单词。

其中一种最常用的深度架构——深度卷积网络——利用了一系列适合克服无关变化的策略。黄金时代网络使用相同的激活函数来激活所有单元，并且一层中的单元与相邻层中的单元完全连接。然而，深度卷积网络采用了几种不同的激活函数，并且与下一层单元的连接被限制在小窗口内，比如图像的一个方形块或声音文件的一个时间片段。

一个深度卷积网络的玩具示例，用于识别图像中的物体，将有助于说明一些细节。这样一个网络的输入由一个数字化场景组成，其中每个像素的颜色强度具有红色、绿色和蓝色（RGB）值。这个输入层被馈送到一个滤波单元层，这些单元仅连接到输入像素的一个小窗口。滤波单元使用称为卷积的操作检测图像的特定局部特征。例如，它们可能通过注意附近像素强度差异最大的地方来找到边缘。这些单元的输出然后传递到修正线性单元（或“ReLU”节点），它们只传递超过一定阈值的滤波节点的激活。ReLU 单元将它们的信号发送到一个池化层，该层从许多 ReLU 单元收集数据，并仅传递每个位置上最激活的特征。卷积-ReLU-池化层的这个三明治的结果是一个“特征图”，它标记了在整个图像的每个位置检测到的所有且仅有最显著的特征。然后，这个特征图可以被发送到一整套这样的三明治中，以检测更大和更抽象的特征。例如，一个三明治可能从边缘构建线条，下一个从线条构建角度，再下一个从线条和角度构建形状，最后从形状构建物体。然后，一个最终的全连接分类层被用来为在倒数第二层提供的最抽象特征图中检测到的物体分配标签。

这种分工对抗烦人的变异非常高效，与浅层的黄金时代网络相比。此外，将滤波节点的输入限制在一个小窗口内，与全连接网络相比，显著降低了每个层次需要学习的权重数量。如果特征通常只依赖于局部关系（即通常不需要看某人的脚来读懂他们的面部表情），那么这种收益并不会对分类准确性造成任何成本。此外，汇集几个不同滤波节点的输出有助于在姿势或位置等烦人变量的微小差异中检测相同的特征。这种神经计算分工在认知科学中备受推崇，因为它最初受到哺乳动物新皮层解剖研究的启发（Hubel & Wiesel 1965; Fukushima 1980）。其他经验证据显示了这种网络作为灵长类动物感知相似性和物体识别判断模型的潜力（Khaligh-Razavi & Kriegeskorte 2014; Hong 等，2016; Kubilius，Bracci，& Beeck 2016; Lake，Zaremba 等，2015; Yamins & DiCarlo 2016; 以及 Guest & Love 2019【其他互联网资源，以下简称 OIR】）。这些观点还与第 6 节讨论的先天性争议相互作用。例如，Buckner（2018）最近提出这些激活函数结合起来实现了一种认知抽象形式，解决了传统经验主义心灵哲学所面临的问题，即心智如何能够高效地在特定的、独特的感知中发现抽象的范畴知识。

深度网络架构带来的计算能力增强也带来了额外的危险。事实上，深度网络的表征能力非常强大，它们甚至可以简单地记住大型复杂数据集中每个项目的正确答案，即使“正确”标签是随机分配的（Zhang 等人，2016 年，OIR 中）。结果是对要学习的任务的泛化能力差，完全无法正确响应训练集之外的输入。因此，有效的深度网络采用一系列策略来防止它们仅仅记住训练数据，主要是通过使网络偏向于不学习细粒度的特异性。流行的选项包括辍学（dropout），在训练过程中随机关闭少量节点，以及权重衰减规则，如果权重没有不断被不同示例刷新，则导致权重值减小。

尽管这些一般性观点可能解释了为什么深度卷积网络在各种任务上往往取得成功，但它们复杂的结构使得在具体情况下解释它们的决策变得困难。这一关注点与可解释人工智能（XAI）运动相互作用，该运动旨在激发开发更好的工具来分析计算机算法的决策，特别是以便人工智能系统能够获得符合实际或法律要求的认证（可解释人工智能（XAI）；B. Goodman 和 Flaxman 2017）。深度可视化方法是解决深度神经网络这些目标的重要工具。一种流行的方法家族使用进一步的机器学习来创建一幅人工图像，最大化某个特定隐藏层单元的激活（Yosinski 等人 2015）。这幅图像旨在给人一种印象，即当该单元激活时它检测到的特征类型。正如预期的那样，随着我们向层次结构的上层升级，这些图像看起来更加复杂和更像物体（有关示例和软件，请参见 http://yosinski.com/deepvis）。然而，没有额外处理，许多这些可视化看起来是虚构的和毫无意义的，目前尚不清楚这种方法究竟有多好地揭示了网络处理中真正重要的特征。另一种方法家族试图揭示输入图像中对网络决策最显著的方面。例如，相关性分解确定了哪些节点如果停用，将对某个特定决策产生最大影响（Montavon，Samek 和 Müller 2018）。这可以生成一个“热图”，显示了对该决策最有影响力的输入方面。进一步的机器学习也被用来构建能够提供描述导致网络决策的特征的简短英语短语的系统（Hendricks 等人 2016 [OIR]；Ehsan 等人 2018）。尽管取得了这些进展，对于深度网络行为的充分解释所需的方法仍不清楚，并且会受益于进一步的哲学思考（Lipton 2016 [OIR]；Zednik 2019 [OIR]）。

对可解释深度网络的需求变得更加迫切，因为发现了所谓的“对抗样本”（Goodfellow 等人，2014 年；Nguyen，Yosinski 和 Clune，2015 年）。这些对抗样本至少有两种形式：“扰动图像”，即自然照片被微小地修改，导致深度网络的分类发生显著变化，尽管这种差异对人类来说是难以察觉的；以及“垃圾图像”，这些图像据称对人类毫无意义，但却被深度网络以高置信度分数进行分类。对抗样本导致一些人得出结论，即网络对物体的理解必须与人类的理解根本不同。对抗样本展现出一些令人惊讶的特性：尽管是从特定训练集构建的，它们在欺骗其他在相同任务上训练的网络方面非常有效，甚至是在具有不同训练集和不同架构的网络上也是如此。此外，寻找有效的对抗措施的过程中出现了令人沮丧的失败。然而，人们也发现，扰动方法可以制造出欺骗人类的图像（Elsayed 等人，2018 年），并且人类受试者可以高准确度地预测网络对垃圾图像的首选标签（Z. Zhou 和 Firestone，2019 年）。其他人指出，在对抗样本中网络检测到的特征导致在自然数据中可靠的分类，挑战了网络的决策是否应被视为错误的观念（Ilyas 等人，2019 年【OIR】）。这些问题与传统关于可投射性和归纳的问题相交，可能为认识论和科学哲学中的旧哲学难题提供新的测试案例（N. Goodman，1955 年；Quine，1969 年；Harman 和 Kulkarni，2007 年）。

尽管深度学习在计算机科学和大众媒体中受到了极大关注，但在哲学领域中直接涉及它的出版物却惊人地少见（尽管情况正在发生变化—Buckner 2018, 2019 [ OIR]; Miracchi 2019; Shevlin & Halina 2019; 以及 Zednik 2019 [ OIR]）。然而，深度学习领域存在着丰富的哲学研究机会。一些相关问题的例子包括：

* 在实际应用中，为了消除我们对深度神经网络可靠性的担忧，需要哪些解释或理由？在深度网络研究中，需要哪些结果来确保相关的解释或理由是可靠的？
* 深度神经网络能否作为认知神经科学中生物认知的解释模型？如果可以，它们提供什么样的科学解释？它们是机械的、功能性的还是非因果性的？
* 深度神经网络自然语言处理领域的新突破前景如何？这些突破将如何为系统性争议带来新的启示？
* 深度学习研究是否改变了激进联结主义者与那些认为符号处理模型是必要的来解释更高层次认知功能之间的冲突条件？
* 深度网络（如 AlphaZero）是否证明了关于高级推理的经典经验主义？或者它们最终必须复制更多人类偏见和特定领域知识，以像人类那样推理？

## Bibliography

* Aizawa, Kenneth, 1994, “Representations without Rules, Connectionism and the Syntactic Argument”, *Synthese*, 101(3): 465–492. doi:10.1007/BF01063898
* –––, 1997a, “Exhibiting versus Explaining Systematicity: A Reply to Hadley and Hayward”, *Minds and Machines*, 7(1): 39–55. doi:10.1023/A:1008203312152
* –––, 1997b, “Explaining Systematicity”, *Mind & Language*, 12(2): 115–136. doi:10.1111/j.1468-0017.1997.tb00065.x
* –––, 2003, *The Systematicity Arguments*, Dordrecht: Kluwer.
* –––, 2014, “A Tough Time to be Talking Systematicity”, in Calvo and Symons 2014: 77–101.
* Bechtel, William, 1987, “Connectionism and the Philosophy of Mind: An Overview”, *The Southern Journal of Philosophy*, 26(S1): 17–41. doi:10.1111/j.2041-6962.1988.tb00461.x
* –––, 1988, “Connectionism and Rules and Representation Systems: Are They Compatible?”, *Philosophical Psychology*, 1(1): 5–16. doi:10.1080/09515088808572922
* Bechtel, William and Adele Abrahamsen, 1990, *Connectionism and the Mind: An Introduction to Parallel Processing in Networks*, Cambridge, MA: Blackwell.
* Bengio, Yoshua and Olivier Delalleau, 2011, “On the Expressive Power of Deep Architectures”, in *International Conference on Algorithmic Learning Theory (ALT 2011)*, Jyrki Kivinen, Csaba Szepesvári, Esko Ukkonen, and Thomas Zeugmann (eds.) (Lecture Notes in Computer Science 6925), Berlin, Heidelberg: Springer Berlin Heidelberg, 18–36. doi:10.1007/978-3-642-24412-4_3
* Bengio, Yoshua, Thomas Mesnard, Asja Fischer, Saizheng Zhang, and Yuhuai Wu, 2017, “STDP-Compatible Approximation of Backpropagation in an Energy-Based Model”, *Neural Computation*, 29(3): 555–577. doi:10.1162/NECO_a_00934
* Bodén, Mikael and Lars Niklasson, 2000, “Semantic Systematicity and Context in Connectionist Networks”, *Connection Science*, 12(2): 111–142. doi:10.1080/09540090050129754
* Buckner, Cameron, 2018, “Empiricism without Magic: Transformational Abstraction in Deep Convolutional Neural Networks”, *Synthese*, 195(12): 5339–5372. doi:10.1007/s11229-018-01949-1
* Butler, Keith, 1991, “Towards a Connectionist Cognitive Architecture”, *Mind & Language*, 6(3): 252–272. doi:10.1111/j.1468-0017.1991.tb00191.x
* Calvo Garzón, Francisco, 2003, “Connectionist Semantics and the Collateral Information Challenge”, *Mind & Language*, 18(1): 77–94. doi:10.1111/1468-0017.00215
* Calvo, Paco and John Symons, 2014, *The Architecture of Cognition: Rethinking Fodor and Pylyshyn’s Systematicity Challenge*, Cambridge: MIT Press.
* Chalmers, David J., 1990, “Syntactic Transformations on Distributed Representations”, *Connection Science*, 2(1–2): 53–62. doi:10.1080/09540099008915662
* –––, 1993, “Connectionism and Compositionality: Why Fodor and Pylyshyn Were Wrong”, *Philosophical Psychology*, 6(3): 305–319. doi:10.1080/09515089308573094
* Chomsky, Noam, 1965, *Aspects of the Theory of Syntax*, Cambridge, MA: MIT Press.
* Christiansen, Morten H. and Nick Chater, 1994, “Generalization and Connectionist Language Learning”, *Mind & Language*, 9(3): 273–287. doi:10.1111/j.1468-0017.1994.tb00226.x
* –––, 1999a, “Toward a Connectionist Model of Recursion in Human Linguistic Performance”, *Cognitive Science*, 23(2): 157–205. doi:10.1207/s15516709cog2302_2
* –––, 1999b, “Connectionist Natural Language Processing: The State of the Art”, *Cognitive Science*, 23(4): 417–437. doi:10.1207/s15516709cog2304_2
* Churchland, Paul M., 1989, *A Neurocomputational Perspective: The Nature of Mind and the Structure of Science*, Cambridge, MA: MIT Press.
* –––, 1995, *The Engine of Reason, the Seat of the Soul: A Philosophical Journey into the Brain*, Cambridge, MA: MIT Press.
* –––, 1998, “Conceptual Similarity Across Sensory and Neural Diversity: The Fodor/Lepore Challenge Answered”, *Journal of Philosophy*, 95(1): 5–32. doi:10.5840/jphil19989514
* Clark, Andy, 1989, *Microcognition: Philosophy, Cognitive Science, and Parallel Distributed Processing*, (Explorations in Cognitive Science), Cambridge, MA: MIT Press.
* –––, 1990 [1995], “Connectionist Minds”, *Proceedings of the Aristotelian Society*, 90: 83–102. Reprinted in MacDonald and MacDonald 1995: 339–356. doi:10.1093/aristotelian/90.1.83
* –––, 1993, *Associative Engines: Connectionism, Concepts, and Representational Change*, Cambridge, MA: MIT Press.
* –––, 2013, “Whatever next? Predictive Brains, Situated Agents, and the Future of Cognitive Science”, *Behavioral and Brain Sciences*, 36(3): 181–204. doi:10.1017/S0140525X12000477
* Clark, Andy and Rudi Lutz (eds.), 1992, *Connectionism in Context*, London: Springer London. doi:10.1007/978-1-4471-1923-4
* Cotrell G.W. and S.L. Small, 1983, “A Connectionist Scheme for Modeling Word Sense Disambiguation”, *Cognition and Brain Theory*, 6(1): 89–120.
* Cummins, Robert, 1991, “The Role of Representation in Connectionist Explanations of Cognitive Capacities”, in Ramsey, Stich, and Rumelhart 1991: 91–114.
* –––, 1996, “Systematicity”:, *Journal of Philosophy*, 93(12): 591–614. doi:10.2307/2941118
* Cummins, Robert and Georg Schwarz, 1991, “Connectionism, Computation, and Cognition”, in Horgan and Tienson 1991: 60–73. doi:10.1007/978-94-011-3524-5_3
* Davies, Martin, 1989, “Connectionism, Modularity, and Tacit Knowledge”, *The British Journal for the Philosophy of Science*, 40(4): 541–555. doi:10.1093/bjps/40.4.541
* –––, 1991, “Concepts, Connectionism and the Language of Thought”, in Ramsey, Stich, and Rumelhart 1991: 229–257.
* Dinsmore, John (ed.), 1992, *The Symbolic and Connectionist Paradigms: Closing the Gap*, Hillsdale, NJ: Erlbaum.
* Ehsan, Upol, Brent Harrison, Larry Chan, and Mark O. Riedl, 2018, “Rationalization: A Neural Machine Translation Approach to Generating Natural Language Explanations”, in *Proceedings of the 2018 AAAI/ACM Conference on AI, Ethics, and Society (AIES ’18)*, New Orleans, LA: ACM Press, 81–87. doi:10.1145/3278721.3278736
* Eliasmith, Chris, 2007, “How to Build a Brain: From Function to Implementation”, *Synthese*, 159(3): 373–388. doi:10.1007/s11229-007-9235-0
* –––, 2013, *How to Build a Brain: a Neural Architecture for Biological Cognition*, New York: Oxford University Press.
* Elman, Jeffrey L., 1991, “Distributed Representations, Simple Recurrent Networks, and Grammatical Structure”, in Touretzky 1991: 91–122. doi:10.1007/978-1-4615-4008-3_5
* Elman, Jeffrey, Elizabeth Bates, Mark H. Johnson, Annette Karmiloff-Smith,Domenico Parisi, and Kim Plunkett, 1996, *Rethinking Innateness: A Connectionist Perspective on Development*, Cambridge, MA: MIT Press.
* Elsayed, Gamaleldin F., Shreya Shankar, Brian Cheung, Nicolas Papernot, Alexey Kurakin, Ian Goodfellow, and Jascha Sohl-Dickstein, 2018, “Adversarial Examples That Fool Both Computer Vision and Time-Limited Humans”, in *Proceedings of the 32Nd International Conference on Neural Information Processing Systems, (NIPS’18)*, 31: 3914–3924.
* Fodor, Jerry A., 1988, *Psychosemantics: The Problem of Meaning in the Philosophy of Mind*, Cambridge, MA: MIT Press.
* –––, 1997, “Connectionism and the Problem of Systematicity (Continued): Why Smolensky’s Solution Still Doesn’t Work”, *Cognition*, 62(1): 109–119. doi:10.1016/S0010-0277(96)00780-9
* Fodor, Jerry and Ernest Lepore, 1992, *Holism: A Shopper’s Guide*, Cambridge: Blackwell.
* Fodor, Jerry and Ernie Lepore, 1999, “All at Sea in Semantic Space: Churchland on Meaning Similarity”, *Journal of Philosophy*, 96(8): 381–403. doi:10.5840/jphil199996818
* Fodor, Jerry and Brian P. McLaughlin, 1990, “Connectionism and the Problem of Systematicity: Why Smolensky’s Solution Doesn’t Work”, *Cognition*, 35(2): 183–204. doi:10.1016/0010-0277(90)90014-B
* Fodor, Jerry A. and Zenon W. Pylyshyn, 1988, “Connectionism and Cognitive Architecture: A Critical Analysis”, *Cognition*, 28(1–2): 3–71. doi:10.1016/0010-0277(88)90031-5
* Friston, Karl, 2005, “A Theory of Cortical Responses”, *Philosophical Transactions of the Royal Society B: Biological Sciences*, 360(1456): 815–836. doi:10.1098/rstb.2005.1622
* Friston, Karl J. and Klaas E. Stephan, 2007, “Free-Energy and the Brain”, *Synthese*, 159(3): 417–458. doi:10.1007/s11229-007-9237-y
* Fukushima, Kunihiko, 1980, “Neocognitron: A Self-Organizing Neural Network Model for a Mechanism of Pattern Recognition Unaffected by Shift in Position”, *Biological Cybernetics*, 36(4): 193–202. doi:10.1007/BF00344251
* Garfield, Jay L., 1997, “Mentalese Not Spoken Here: Computation, Cognition and Causation”, *Philosophical Psychology*, 10(4): 413–435. doi:10.1080/09515089708573231
* Garson, James W., 1991, “What Connectionists Cannot Do: The Threat to Classical AI”, in Horgan and Tienson 1991: 113–142. doi:10.1007/978-94-011-3524-5_6
* –––, 1994, “Cognition without Classical Architecture”, *Synthese*, 100(2): 291–305. doi:10.1007/BF01063812
* –––, 1997, “Syntax in a Dynamic Brain”, *Synthese*, 110(3): 343–355.
* Goodfellow, Ian, Yoshua Bengio, and Aaron Courville, 2016, *Deep Learning*, Cambridge, MA: MIT Press.
* Goodfellow, Ian J., Jonathon Shlens, and Christian Szegedy, 2015, “Explaining and Harnessing Adversarial Examples.”, in *3rd International Conference on Learning Representations, ICLR 2015*, San Diego, CA, May 7–9, 2015, [available online](http://arxiv.org/abs/1412.6572).
* Goodfellow, Ian J., Jean Pouget-Abadie, Mehdi Mirza, Bing Xu, David Warde-Farley, Sherjil Ozair, Aaron Courville, and Yoshua Bengio, 2014, “Generative Adversarial Nets”, in *Proceedings of the 27th International Conference on Neural Information Processing Systems, (NIPS’14)*, Cambridge, MA: MIT Press, 2: 2672–2680.
* Goodman, Bryce and Seth Flaxman, 2017, “European Union Regulations on Algorithmic Decision-Making and a ‘Right to Explanation’”, *AI Magazine*, 38(3): 50–57. doi:10.1609/aimag.v38i3.2741
* Goodman, Nelson, 1955, *Fact, Fiction, and Forecast*, Cambridge, MA: Harvard University Press.
* Grush, Rick, 2004, “The Emulation Theory of Representation: Motor Control, Imagery, and Perception”, *Behavioral and Brain Sciences*, 27(3): 377–396. doi:10.1017/S0140525X04000093
* Guarini, Marcello, 2001, “A Defence of Connectionism Against the ‘Syntactic’ Argument”, *Synthese*, 128(3): 287–317. doi:10.1023/A:1011905917986
* Hadley, Robert F., 1994a, “Systematicity in Connectionist Language Learning”, *Mind & Language*, 9(3): 247–272. doi:10.1111/j.1468-0017.1994.tb00225.x
* –––, 1994b, “Systematicity Revisited: Reply to Christiansen and Chater and Niklasson and van Gelder”, *Mind & Language*, 9(4): 431–444. doi:10.1111/j.1468-0017.1994.tb00317.x
* –––, 1997a, “Explaining Systematicity: A Reply to Kenneth Aizawa”, *Minds and Machines*, 7(4): 571–579. doi:10.1023/A:1008252322227
* –––, 1997b, “Cognition, Systematicity and Nomic Necessity”, *Mind & Language*, 12(2): 137–153. doi:10.1111/j.1468-0017.1997.tb00066.x
* –––, 2004, “On The Proper Treatment of Semantic Systematicity”, *Minds and Machines*, 14(2): 145–172. doi:10.1023/B:MIND.0000021693.67203.46
* Hadley, Robert F. and Michael B. Hayward, 1997, “Strong Semantic Systematicity from Hebbian Connectionist Learning”, *Minds and Machines*, 7(1): 1–37. doi:10.1023/A:1008252408222
* Hanson, Stephen J. and Judy Kegl, 1987, “PARSNIP: A Connectionist Network that Learns Natural Language Grammar from Exposure to Natural Language Sentences”, *Ninth Annual Conference of the Cognitive Science Society*, Hillsdale, NJ: Erlbaum, pp. 106–119.
* Harman, Gilbert and Sanjeev Kulkarni, 2007, *Reliable Reasoning: Induction and Statistical Learning Theory*, Cambridge MA: MIT Press.
* Hatfield, Gary, 1991a, “Representation in Perception and Cognition: Connectionist Affordances”, in Ramsey, Stich, and Rumelhart 1991: 163–195.
* –––, 1991b, “Representation and Rule-Instantiation in Connectionist Systems”, in Horgan and Tienson 1991: 90–112. doi:10.1007/978-94-011-3524-5_5
* Hawthorne, John, 1989, “On the Compatibility of Connectionist and Classical Models”, *Philosophical Psychology*, 2(1): 5–15. doi:10.1080/09515088908572956
* Haybron, Daniel M., 2000, “The Causal and Explanatory Role of Information Stored in Connectionist Networks”, *Minds and Machines*, 10(3): 361–380. doi:10.1023/A:1026545231550
* Hinton, Geoffrey E., 1990 [1991], “Mapping Part-Whole Hierarchies into Connectionist Networks”, *Artificial Intelligence*, 46(1–2): 47–75. Reprinted in Hinton 1991: 47–76. doi:10.1016/0004-3702(90)90004-J
* ––– (ed.), 1991, *Connectionist Symbol Processing*, Cambridge, MA: MIT Press.
* –––, 1992, “How Neural Networks Learn from Experience”, *Scientific American*, 267(3): 145–151.
* –––, 2010, “Learning to Represent Visual Input”, *Philosophical Transactions of the Royal Society B: Biological Sciences*, 365(1537): 177–184. doi:10.1098/rstb.2009.0200
* Hinton, Geoffrey E., James L. McClelland, and David E. Rumelhart, 1986, “Distributed Representations”, Rumelhart, McClelland, and the PDP group 1986: chapter 3.
* Hohwy, Jakob, 2012, “Attention and Conscious Perception in the Hypothesis Testing Brain”, *Frontiers in Psychology*, 3(96): 1–14. doi:10.3389/fpsyg.2012.00096
* Hong, Ha, Daniel L K Yamins, Najib J Majaj, and James J DiCarlo, 2016, “Explicit Information for Category-Orthogonal Object Properties Increases along the Ventral Stream”, *Nature Neuroscience*, 19(4): 613–622. doi:10.1038/nn.4247
* Horgan, Terence E. and John Tienson, 1989, “Representations without Rules”, *Philosophical Topics*, 17(1): 147–174.
* –––, 1990, “Soft Laws”, *Midwest Studies In Philosophy*, 15: 256–279. doi:10.1111/j.1475-4975.1990.tb00217.x
* ––– (eds.), 1991, *Connectionism and the Philosophy of Mind*, Dordrecht: Kluwer. doi:10.1007/978-94-011-3524-5
* –––, 1996, *Connectionism and the Philosophy of Psychology*, Cambridge, MA: MIT Press.
* Hosoya, Toshihiko, Stephen A. Baccus, and Markus Meister, 2005, “Dynamic Predictive Coding by the Retina”, *Nature*, 436(7047): 71–77. doi:10.1038/nature03689
* Huang, Yanping and Rajesh P. N. Rao, 2011, “Predictive Coding”, *Wiley Interdisciplinary Reviews: Cognitive Science*, 2(5): 580–593. doi:10.1002/wcs.142
* Hubel, David H. and Torsten N. Wiesel, 1965, “Receptive Fields and Functional Architecture in Two Nonstriate Visual Areas (18 and 19) of the Cat”, *Journal of Neurophysiology*, 28(2): 229–289. doi:10.1152/jn.1965.28.2.229
* Jansen, Peter A. and Scott Watter, 2012, “Strong Systematicity through Sensorimotor Conceptual Grounding: An Unsupervised, Developmental Approach to Connectionist Sentence Processing”, *Connection Science*, 24(1): 25–55. doi:10.1080/09540091.2012.664121
* Johnson, Kent, 2004, “On the Systematicity of Language and Thought”:, *Journal of Philosophy*, 101(3): 111–139. doi:10.5840/jphil2004101321
* Jones, Matt and Bradley C. Love, 2011, “Bayesian Fundamentalism or Enlightenment? On the Explanatory Status and Theoretical Contributions of Bayesian Models of Cognition”, *Behavioral and Brain Sciences*, 34(4): 169–188. doi:10.1017/S0140525X10003134
* Khaligh-Razavi, Seyed-Mahdi and Nikolaus Kriegeskorte, 2014, “Deep Supervised, but Not Unsupervised, Models May Explain IT Cortical Representation”, *PLoS Computational Biology*, 10(11): e1003915. doi:10.1371/journal.pcbi.1003915
* Krizhevsky, Alex, Ilya Sutskever, and Geoffrey E. Hinton, 2012, “Imagenet Classification with Deep Convolutional Neural Networks”, *Advances in Neural Information Processing Systems*, 25: 1097–1105.
* Kubilius, Jonas, Stefania Bracci, and Hans P. Op de Beeck, 2016, “Deep Neural Networks as a Computational Model for Human Shape Sensitivity”, *PLOS Computational Biology*, 12(4): e1004896. doi:10.1371/journal.pcbi.1004896
* Laakso, Aarre and Garrison Cottrell, 2000, “Content and Cluster Analysis: Assessing Representational Similarity in Neural Systems”, *Philosophical Psychology*, 13(1): 47–76. doi:10.1080/09515080050002726
* Lake, Brenden M., Ruslan Salakhutdinov, and Joshua B. Tenenbaum, 2015, “Human-Level Concept Learning through Probabilistic Program Induction”, *Science*, 350(6266): 1332–1338. doi:10.1126/science.aab3050
* Lake, Brenden M., Wojciech Zaremba, Rob Fergus, and Todd M. Gureckis, 2015, “Deep Neural Networks Predict Category Typicality Ratings for Images”, *Proceedings of the 37th Annual Cognitive Science Society*, Pasadena, CA, 22–25 July 2015, [available online](https://mindmodeling.org/cogsci2015/papers/0219/).
* Lillicrap, Timothy P., Daniel Cownden, Douglas B. Tweed, and Colin J. Akerman, 2016, “Random Synaptic Feedback Weights Support Error Backpropagation for Deep Learning”, *Nature Communications*, 7(1): 13276. doi:10.1038/ncomms13276
* Loula, João, Marco Baroni, and Brenden Lake, 2018, “Rearranging the Familiar: Testing Compositional Generalization in Recurrent Networks”, in *Proceedings of the 2018 EMNLP Workshop BlackboxNLP: Analyzing and Interpreting Neural Networks for NLP*, Brussels, Belgium: Association for Computational Linguistics, 108–114. doi:10.18653/v1/W18-5413
* MacDonald, Cynthia and Graham MacDonald (eds), 1995, *Connectionism*, (Debates on Psychological Explanation, 2), Oxford: Blackwell.
* Matthews, Robert J., 1997, “Can Connectionists Explain Systematicity?”, *Mind & Language*, 12(2): 154–177. doi:10.1111/j.1468-0017.1997.tb00067.x
* Marcus, Gary F., 1998, “Rethinking Eliminative Connectionism”, *Cognitive Psychology*, 37(3): 243–282. doi:10.1006/cogp.1998.0694
* –––, 2001, *The Algebraic Mind: Integrating Connectionism and Cognitive Science*, Cambridge, MA: MIT Press.
* McClelland, James L and Jeffrey L Elman, 1986, “The TRACE Model of Speech Perception”, *Cognitive Psychology*, 18(1): 1–86. doi:10.1016/0010-0285(86)90015-0
* McClelland, James L., David E. Rumelhart, and the PDP Research Group (ed.), 1986, *Parallel Distributed Processing, Volume II: Explorations in the Microstructure of Cognition: Psychological and Biological Models*, Cambridge, MA: MIT Press.
* McLaughlin, Brian P., 1993, “The Connectionism/Classicism Battle to Win Souls”, *Philosophical Studies*, 71(2): 163–190. doi:10.1007/BF00989855
* Miikkulainen, Risto, 1993, *Subsymbolic Natural Language Processing: An Integrated Model of Scripts, Lexicon, and Memory*, Cambridge, MA: MIT Press.
* Miikkulainen, Risto and Michael G. Dyer, 1991, “Natural Language Processing With Modular Pdp Networks and Distributed Lexicon”, *Cognitive Science*, 15(3): 343–399. doi:10.1207/s15516709cog1503_2
* Miracchi, Lisa, 2019, “A Competence Framework for Artificial Intelligence Research”, *Philosophical Psychology*, 32(5): 588–633. doi:10.1080/09515089.2019.1607692
* Montavon, Grégoire, Wojciech Samek, and Klaus-Robert Müller, 2018, “Methods for Interpreting and Understanding Deep Neural Networks”, *Digital Signal Processing*, 73: 1–15. doi:10.1016/j.dsp.2017.10.011
* Montúfar, Guido, Razvan Pascanu, Kyunghyun Cho, and Yoshua Bengio, 2014, “On the Number of Linear Regions of Deep Neural Networks”, in *Proceedings of the 27th International Conference on Neural Information Processing Systems (NIPS’14)*, Cambridge, MA: MIT Press, 2: 2924–2932.
* Morris, William C., Garrison W. Cottrell, and Jeffrey Elman, 2000, “A Connectionist Simulation of the Empirical Acquisition of Grammatical Relations”, in Wermter and Sun 2000: 1778:175–193. doi:10.1007/10719871_12
* Nguyen, Anh, Jason Yosinski, Jeff Clune, 2015, “Deep Neural Networks Are Easily Fooled: High Confidence Predictions for Unrecognizable Images”, *Proceedings of the 28th IEEE Conference on Computer Vision and Pattern Recognition (CVPR 2015)*, 427–436, [available online](https://www.cv-foundation.org/openaccess/content_cvpr_2015/html/Nguyen_Deep_Neural_Networks_2015_CVPR_paper.html).
* Niklasson, Lars F. and Tim van Gelder, 1994, “On Being Systematically Connectionist”, *Mind & Language*, 9(3): 288–302. doi:10.1111/j.1468-0017.1994.tb00227.x
* O’Reilly, Randall C., 1996, “Biologically Plausible Error-Driven Learning Using Local Activation Differences: The Generalized Recirculation Algorithm”, *Neural Computation*, 8(5): 895–938. doi:10.1162/neco.1996.8.5.895
* Phillips, Steven, 2002, “Does Classicism Explain Universality?”, *Minds and Machines*, 12(3): 423–434. doi:10.1023/A:1016160512967
* Pinker, Steven and Jacques Mehler (eds.), 1988, *Connections and Symbols*, Cambridge, MA: MIT Press.
* Pinker, Steven and Alan Prince, 1988, “On Language and Connectionism: Analysis of a Parallel Distributed Processing Model of Language Acquisition”, *Cognition*, 28(1–2): 73–193. doi:10.1016/0010-0277(88)90032-7
* Pollack, Jordan B., 1989, “Implications of Recursive Distributed Representations”, in Touretzky 1989: 527–535, [available online](http://papers.nips.cc/paper/114-implications-of-recursive-distributed-representations).
* –––, 1991, “Induction of Dynamical Recognizers”, in Touretzky 1991: 123–148. doi:10.1007/978-1-4615-4008-3_6
* Pollack, Jordan B., 1990 [1991], “Recursive Distributed Representations”, *Artificial Intelligence*, 46(1–2): 77–105. Reprinted in Hinton 1991: 77–106. doi:10.1016/0004-3702(90)90005-K
* Port, Robert F., 1990, “Representation and Recognition of Temporal Patterns”, *Connection Science*, 2(1–2): 151–176. doi:10.1080/09540099008915667
* Port, Robert F. and Timothy van Gelder, 1991, “Representing Aspects of Language”, *Proceedings of the Thirteenth Annual Conference of the Cognitive Science Society*, Hillsdale, N.J.: Erlbaum, 487–492, [available online](http://mindmodeling.org/cogscihistorical/cogsci_13.pdf).
* Quine, W. V., 1969, “Natural Kinds”, in *Essays in Honor of Carl G. Hempel*, Nicholas Rescher (ed.), Dordrecht: Springer Netherlands, 5–23. doi:10.1007/978-94-017-1466-2_2
* Raghu, Maithra, Ben Poole, Jon Kleinberg, Surya Ganguli, and Jascha Sohl-Dickstein, 2017, “On the Expressive Power of Deep Neural Networks”, in *Proceedings of the 34th International Conference on Machine Learning*, 70: 2847–2854, [available online](http://proceedings.mlr.press/v70/raghu17a.html).
* Ramsey, William, 1997, “Do Connectionist Representations Earn Their Explanatory Keep?”, *Mind & Language*, 12(1): 34–66. doi:10.1111/j.1468-0017.1997.tb00061.x
* Ramsey, William, Stephen P. Stich, and Joseph Garon, 1991, “Connectionism, Eliminativism, and the Future of Folk Psychology”, in Ramsey, Stich, and Rumelhart 1991: 199–228.
* Ramsey, William, Stephen P. Stich, and David E. Rumelhart, 1991, *Philosophy and Connectionist Theory*, Hillsdale, N.J.: Erlbaum.
* Rao, Rajesh P. N. and Dana H. Ballard, 1999, “Predictive Coding in the Visual Cortex: A Functional Interpretation of Some Extra-Classical Receptive-Field Effects”, *Nature Neuroscience*, 2(1): 79–87. doi:10.1038/4580
* Rohde, Douglas L. T. and David C. Plaut, 2003, “Connectionist Models of Language Processing”, *Cognitive Studies* (Japan), 10(1): 10–28. doi:10.11225/jcss.10.10
* Roth, Martin, 2005, “Program Execution in Connectionist Networks”, *Mind & Language*, 20(4): 448–467. doi:10.1111/j.0268-1064.2005.00295.x
* Rumelhart, David E. and James L. McClelland, 1986, “On Learning the Past Tenses of English Verbs”, in McClelland, Rumelhart, and the PDP group 1986: 216–271.
* Rumelhart, David E., James L. McClelland, and the PDP Research Group (eds), 1986, *Parallel Distributed Processing, Volume 1: Explorations in the Microstructure of Cognition: Foundations*, Cambridge, MA: MIT Press.
* Sadler, Matthew and Natasha Regan, 2019, *Game Changer: AlphaZero’s Groundbreaking Chess Strategies and the Promise of AI*, Alkmaar: New in Chess.
* Schmidhuber, Jürgen, 2015, “Deep Learning in Neural Networks: An Overview”, *Neural Networks*, 61: 85–117. doi:10.1016/j.neunet.2014.09.003
* Schwarz, Georg, 1992, “Connectionism, Processing, Memory”, *Connection Science*, 4(3–4): 207–226. doi:10.1080/09540099208946616
* Sejnowski, Terrence J. and Charles R. Rosenberg, 1987, “Parallel Networks that Learn to Pronounce English Text”, *Complex Systems*, 1(1): 145–168, [available online](https://www.complex-systems.com/abstracts/v01_i01_a10/).
* Servan-Schreiber, David, Axel Cleeremans, and James L. McClelland, 1991, “Graded State Machines: The Representation of Temporal Contingencies in Simple Recurrent Networks”, in Touretzky 1991: 57–89. doi:10.1007/978-1-4615-4008-3_4
* Shastri, Lokendra and Venkat Ajjanagadde, 1993, “From Simple Associations to Systematic Reasoning: A Connectionist Representation of Rules, Variables and Dynamic Bindings Using Temporal Synchrony”, *Behavioral and Brain Sciences*, 16(3): 417–451. doi:10.1017/S0140525X00030910
* Shea, Nicholas, 2007, “Content and Its Vehicles in Connectionist Systems”, *Mind & Language*, 22(3): 246–269. doi:10.1111/j.1468-0017.2007.00308.x
* Shevlin, Henry and Marta Halina, 2019, “Apply Rich Psychological Terms in AI with Care”, *Nature Machine Intelligence*, 1(4): 165–167. doi:10.1038/s42256-019-0039-y
* Shultz, Thomas R. and Alan C. Bale, 2001, “Neural Network Simulation of Infant Familiarization to Artificial Sentences”, *Infancy*, 2(4): 501–536.
* –––, 2006, “Neural Networks Discover a Near-Identity Relation to Distinguish Simple Syntactic Forms”, *Minds and Machines*, 16(2): 107–139. doi:10.1007/s11023-006-9029-z
* Silver, David, Thomas Hubert, Julian Schrittwieser, Ioannis Antonoglou, Matthew Lai, Arthur Guez, Marc Lanctot, et al., 2018, “A General Reinforcement Learning Algorithm That Masters Chess, Shogi, and Go through Self-Play”, *Science*, 362(6419): 1140–1144. doi:10.1126/science.aar6404
* Smolensky, Paul, 1987, “The Constituent Structure of Connectionist Mental States: A Reply to Fodor and Pylyshyn”, *The Southern Journal of Philosophy*, 26(S1): 137–161. doi:10.1111/j.2041-6962.1988.tb00470.x
* –––, 1988, “On the Proper Treatment of Connectionism”, *Behavioral and Brain Sciences*, 11(1): 1–23. doi:10.1017/S0140525X00052432
* –––, 1990 [1991], “Tensor Product Variable Binding and the Representation of Symbolic Structures in Connectionist Systems”, *Artificial Intelligence*, 46(1–2): 159–216. Reprinted in Hinton 1991: 159–216. doi:10.1016/0004-3702(90)90007-M
* –––, 1995, “Constituent Structure and Explanation in an Integrated Connectionist/Symbolic Cognitive Architecture”, in MacDonald and MacDonald 1995: .
* St. John, Mark F. and James L. McClelland, 1990 [1991], “Learning and Applying Contextual Constraints in Sentence Comprehension”, *Artificial Intelligence*, 46(1–2): 217–257. Reprinted in Hinton 1991: 217–257 doi:10.1016/0004-3702(90)90008-N
* Tomberlin, James E. (ed.), 1995, *Philosophical Perspectives 9: AI, Connectionism and Philosophical Psychology*, Atascadero: Ridgeview Press.
* Touretzky, David S. (ed.), 1989, *Advances in Neural Information Processing Systems I*, San Mateo, CA: Kaufmann, [available online](http://papers.nips.cc/book/advances-in-neural-information-processing-systems-1-1988).
* ––– (ed.), 1990, *Advances in Neural Information Processing Systems II*, San Mateo, CA: Kaufmann.
* ––– (ed.), 1991, *Connectionist Approaches to Language Learning*, Boston, MA: Springer US. doi:10.1007/978-1-4615-4008-3
* Touretzky, David S., Geoffrey E. Hinton, and Terrence Joseph Sejnowski (eds), 1988, *Proceedings of the 1988 Connectionist Models Summer School*, San Mateo, CA: Kaufmann.
* Van Gelder, Tim, 1990, “Compositionality: A Connectionist Variation on a Classical Theme”, *Cognitive Science*, 14(3): 355–384. doi:10.1016/0364-0213(90)90017-Q
* –––, 1991, “What is the ‘D’ in PDP?” in Ramsey, Stich, and Rumelhart 1991: 33–59.
* Van Gelder, Timothy and Robert Port, 1993, “Beyond Symbolic: Prolegomena to a Kama-Sutra of Compositionality”, in Vasant G Honavar, Leonard Uhr (eds.), *Symbol Processing and Connectionist Models in AI and Cognition: Steps Towards Integration*, Boston: Academic Press.
* Vilcu, Marius and Robert F. Hadley, 2005, “Two Apparent ‘Counterexamples’ to Marcus: A Closer Look”, *Minds and Machines*, 15(3–4): 359–382. doi:10.1007/s11023-005-9000-4
* Von Eckardt, Barbara, 2003, “The Explanatory Need for Mental Representations in Cognitive Science”, *Mind & Language*, 18(4): 427–439. doi:10.1111/1468-0017.00235
* –––, 2005, “Connectionism and the Propositional Attitudes”, in Christina Erneling and David Martel Johnson (eds.), *The Mind as a Scientific Object: Between Brain and Culture*, New York: Oxford University Press.
* Waltz, David L. and Jordan B. Pollack, 1985, “Massively Parallel Parsing: A Strongly Interactive Model of Natural Language Interpretation*”, *Cognitive Science*, 9(1): 51–74. doi:10.1207/s15516709cog0901_4
* Wermter, Stefan and Ron Sun (eds.), 2000, *Hybrid Neural Systems*, (Lecture Notes in Computer Science 1778), Berlin, Heidelberg: Springer Berlin Heidelberg. doi:10.1007/10719871
* Yamins, Daniel L. K. and James J. DiCarlo, 2016, “Using Goal-Driven Deep Learning Models to Understand Sensory Cortex”, *Nature Neuroscience*, 19(3): 356–365. doi:10.1038/nn.4244
* Yosinski, Jason, Jeff Clune, Anh Nguyen, Thomas Fuchs, and Hod Lipson, 2015, “Understanding Neural Networks Through Deep Visualization”, *Deep Learning Workshop, 31st International Conference on Machine Learning*, Lille, France, [available online](http://yosinski.com/media/papers/Yosinski__2015__ICML_DL__Understanding_Neural_Networks_Through_Deep_Visualization__.pdf).
* Zhou, Zhenglong and Chaz Firestone, 2019, “Humans Can Decipher Adversarial Images”, *Nature Communications*, 10(1): 1334. doi:10.1038/s41467-019-08931-6

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=connectionism). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/connectionism/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=connectionism&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](http://philpapers.org/sep/connectionism/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

* Bengio, Yoshua, Aaron Courville, and Pascal Vincent, 2014, “[Representation Learning: A Review and New Perspectives](http://arxiv.org/abs/1206.5538)”, manuscript at arXiv.org, original submission 2012.
* Buckner, C., 2019, “[Deep Learning: A Philosophical Introduction](https://philsci-archive.pitt.edu/id/eprint/16326/contents)”, preprint at PhilSci Archives.
* [Explainable Artificial Intelligence](https://www.darpa.mil/program/explainable-artificial-intelligence) (XAI), DARPA /I2O program.
* Guest, Olivia and Bradley C. Love, 2019, “[Levels of Representation in a Deep Learning Model of Categorization](https://www.biorxiv.org/content/10.1101/626374v1)”, manuscript at bioRxiv.org.
* Hendricks, Lisa Anne, Zeynep Akata, Marcus Rohrbach, Jeff Donahue, Bernt Schiele, and Trevor Darrell, 2016, “[Generating Visual Explanations](http://arxiv.org/abs/1603.08507)”, manuscript at arXiv.org, 28 March 2016.
* Ilyas, Andrew, Shibani Santurkar, Dimitris Tsipras, Logan Engstrom, Brandon Tran, and Aleksander Madry, 2019, “[Adversarial Examples Are Not Bugs, They Are Features](http://arxiv.org/abs/1905.02175)”, manuscript at arXiv.org, 19 June 2019.
* Lipton, Zachary C., 2016, “[The Mythos of Model Interpretability](https://arxiv.org/abs/1606.03490)”, manuscript at arXiv.org.
* Zednik, Carlos, 2019, “[Solving the Black Box Problem: A General-Purpose Recipe for Explainable Artificial Intelligence](https://arxiv.org/abs/1903.04361)”, manuscript at arXiv.org.
* Zhang, Chiyuan, Samy Bengio, Moritz Hardt, Benjamin Recht, and Oriol Vinyals, 2016, “[Understanding Deep Learning Requires Rethinking Generalization](https://arxiv.org/abs/1611.03530)”, manuscript at arXiv.org.
* [Papers on Connectionism](https://philpapers.org/s/connectionism), search result fot the topic “connectionism” at philpapers.org.

## Related Entries

[artificial intelligence](https://plato.stanford.edu/entries/artificial-intelligence/) | [language of thought hypothesis](https://plato.stanford.edu/entries/language-thought/) | [mental representation](https://plato.stanford.edu/entries/mental-representation/)

[Copyright © 2019](https://plato.stanford.edu/info.html#c) by  
[Cameron Buckner](http://cameronbuckner.net/professional/) <[*cjbuckner@uh.edu*](mailto:cjbuckner%40uh%2eedu)>  
[James Garson](http://www.hfac.uh.edu/phil/garson/Jim_Garson.htm) <[*JGarson@uh.edu*](mailto:JGarson%40uh%2eedu)>
