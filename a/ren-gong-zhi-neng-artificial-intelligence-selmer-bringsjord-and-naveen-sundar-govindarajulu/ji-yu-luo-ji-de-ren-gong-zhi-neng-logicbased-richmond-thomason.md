# 基于逻辑的人工智能 logic-based (Richmond Thomason)

_首次发表于 2003 年 8 月 27 日；实质性修订于 2024 年 2 月 27 日_

人工智能（以下简称“AI”）是计算机科学的一个子领域，致力于开发能够展示智能行为的程序。\[[1](https://plato.stanford.edu/entries/logic-ai/notes.html#note-1)]

在 AI 的早期阶段，许多具有影响力的人物都有雄心勃勃的目标和观点。约翰·麦卡锡的计划是利用哲学逻辑的思想来形式化常识推理。在他的一生中，他和他的学生和合作者进行了一些具有明显哲学特色的项目。这个主题一直存在，但大部分已经被吸收到了知识表示的工作中。它变得更加直接关注应用；与哲学和哲学逻辑的联系仍然存在，但更加脆弱。

从人工智能中产生的新见解和理论在任何需要推理的哲学研究领域中具有巨大的潜在价值，例如关于如何行动或关于我们自己的态度或他人的态度的推理。虽然人工智能中的逻辑起源于哲学逻辑，但在这个新的环境中，它产生了新的理论和雄心勃勃的计划，这些计划只有在致力于构建工作的大规模计算模型的社区中才能得到培育。

本条目假定主要是哲学家的受众，他们对人工智能几乎没有了解。它集中讨论了在理解机械化推理系统中使用逻辑时出现的问题。它提供了一个选择性的概述，而不试图实现完全覆盖。[第 3 节](https://plato.stanford.edu/entries/logic-ai/#NonmReasNonmLogi)和[第 4 节](https://plato.stanford.edu/entries/logic-ai/#ReasAbouActiChan)描述了早期出现并持续至今的两个重要主题：非单调逻辑和关于行动和变化的推理。其余部分概述了一些选定的主题，并参考了主要文献。



***

## 1. 人工智能中的逻辑

### 1.1 逻辑在人工智能中的作用

理论计算机科学起源于逻辑、计算理论（如果将其视为与逻辑不同的学科）以及相关的数学领域。\[[2](https://plato.stanford.edu/entries/logic-ai/notes.html#note-2)] 因此，大多数计算机科学家对逻辑有很好的了解，即使他们不是逻辑学家。他们熟悉逻辑提供的分析语言推理属性的技术，并且了解高层次逻辑分析推理问题与其实现之间的区别。例如，逻辑可以通过将程序映射到应该许可的计算，并使这些计算符合某些标准的证明，为编程语言提供规范。

然而，逻辑与计算机程序之间的联系往往没有这么紧密。当一个软件应用在可证明的情况下是完备且正确的时，可以说它实现了逻辑形式化，但也可以说当逻辑思想影响了软件开发过程的某些部分时，它实现了逻辑形式化。一个被称为实现逻辑模型的程序可能是不完整的，甚至是不正确的。

有时候，一个工作系统的某些部分受到逻辑思想的启发，而其他部分似乎存在逻辑上的问题。这些具有挑战性的特征可能会提出对逻辑理论的改进建议。因此，逻辑理论为应用提供了指导，而应用则对逻辑理论提出了挑战，并可能导致理论创新。逻辑编程提供了许多这样的互动示例。

即使是有限目标的推理系统也可能需要大量复杂的陈述性信息。人工智能领域普遍认识到，处理陈述性表示以及它们的检索、维护和为之服务的推理系统作为独立的组成部分是很重要的，每个部分都有自己的研究问题。专家系统的发展说明了这一点。最早的专家系统完全基于大型的过程规则系统，没有对背景知识进行单独的表示。但是后一代的专家系统在设计上显示出更高的模块化。一个独立的知识表示组件对于软件工程目的是有用的——拥有一个能够多种不同用途的通用事实的单一表示，使系统更易于开发和修改。这种模块化对于使这些系统能够提供解释而不仅仅是结论是至关重要的。

为了满足设计这个陈述性组件的需求，人工智能的一个子领域——知识表示在 20 世纪 80 年代出现。自 1989 年以来，专门讨论这个主题的会议已经举行；这些会议提供了该领域研究的深入记录。请参阅[第 12 节](https://plato.stanford.edu/entries/logic-ai/#Read)以获取会议记录列表。

典型的 KR 和推理会议上的演讲涉及以下主题。

1. 逻辑理论和计算理论的主题，包括
2. 非单调逻辑
3. 复杂性理论
4. 应用领域的研究，包括
5. 时间推理
6. 计划、行动和变化以及因果推理的形式化方法
7. 元推理
8. 推理上下文
9. 推理价值和欲望
10. 推理其他代理人的心理状态，尤其是关于知识和信念的推理
11. 空间推理
12. 推理模糊性
13. 论证和论证理论
14. 许多种类的聚合问题，例如冲突知识源的整合
15. 应用技术的研究，包括
16. 逻辑编程
17. 描述逻辑
18. 定理证明
19. 模型构建
20. 大规模应用的研究，包括
21. 认知机器人
22. 创建、合并、更新和纠正知识库
23. 查询知识库

这些主题与《符号逻辑杂志》的内容几乎没有共同之处，该杂志是数理逻辑的主要记录期刊。但是与《哲学逻辑杂志》存在很大的重叠，特别是在时态逻辑、认知逻辑、逻辑方法与实际推理以及信念变化等主题上。当然，也存在一些差异；《哲学逻辑杂志》很少涉及复杂性理论或潜在的自动推理应用。

成立于 1936 年，_JSL_旨在汇集在逻辑领域工作的数学家和哲学家。第一卷中的文章在数学家和哲学家之间几乎平均分配，早期的卷册并没有显示出两个群体在主题上有明显的差异。

这种情况在 1960 年代发生了变化。1969 年的_JSL_卷册中有 39 篇数学家的文章，只有 9 篇是哲学家的。到了 1970 年代初，许多哲学家认为逻辑方面的哲学论文不太可能被_JSL_接受，而且被接受的论文也不太可能被哲学家阅读。此时，这两个群体已经明显分道扬镳。数学家追求越来越复杂和技术性的方法和定理，而许多哲学家认为这种趋势缺乏启发性，与哲学无关。这些分歧导致了 1972 年《哲学逻辑学杂志》的创刊。第一期中的样本主题包括：

1. 对与哲学相关的逻辑理论分支的贡献，例如归纳逻辑、模态逻辑、义务逻辑、量子逻辑、时态逻辑、自由逻辑、问题逻辑、命令逻辑、偏好逻辑、条件逻辑、多值逻辑、相关逻辑；
2. 对利用形式逻辑工具进行哲学讨论的贡献...；
3. 关于逻辑和语言的逻辑结构的哲学问题的讨论，...；
4. 关于特殊科学的哲学工作，....

这里的共同线索是希望将数学逻辑的方法应用于非数学领域。例如，量子逻辑和归纳逻辑将逻辑应用于物理学和经验科学。_JPL_列表中的其他主题涉及逻辑发展，可能有助于处理非科学推理。

### 1.3 人工智能中的逻辑和哲学逻辑

[McCarthy 1959](https://plato.stanford.edu/entries/logic-ai/#mccarthy_j1:1959a1)，一个早期的逻辑人工智能贡献，讨论了如何到达机场的问题。在这里，麦卡锡提出了一个现实的推理问题。它的解决方案可能涉及许多相关的推理，尽管最终它可能看起来像一个证明——证明执行某些动作将产生一个某人位于机场的结果——但它与数学练习不同，因为它利用了更广泛和不易处理的资源。这些资源包括因果知识以及目标和偏好。相比之下，哲学逻辑的研究论文使用推理示例来_说明_，而不是_激发_逻辑理论，它们引用的推理示例是简单的、孤立的推理。

将早期的逻辑人工智能工作描述为致力于一个新的、雄心勃勃的应用领域的哲学逻辑，并不完全错误。事实上，AI 逻辑学家的第一代\[[4](https://plato.stanford.edu/entries/logic-ai/notes.html#note-4)]阅读了哲学逻辑的文献，并受其影响。然而，随后两个领域开始分道扬镳。在逻辑人工智能领域出现了新的逻辑理论（非单调逻辑是最重要的例子），这些理论并未出现在哲学家的思考中。AI 社区对算法的理论分析以及有用技术的兴趣，也导致了其他差异。AI 研究人员经常关注使用前所未有的大量数据和推理规则的雄心勃勃的应用。它们的庞大规模产生了新的问题和新的方法论。另一方面，哲学逻辑学家是哲学家，因此他们通常对计算机科学家不感兴趣的主题（例如形而上学主题）感兴趣。

如果哲学逻辑和人工智能中的逻辑继续分道扬镳，可能是出于方法论的原因。但尽管如此，基础研究目标是相同的——逻辑人工智能是受到对大规模形式化和可行实现推理的兴趣所限制的哲学逻辑。

哲学逻辑对人工智能中的逻辑产生了深远影响。《[McCarthy & Hayes 1969](https://plato.stanford.edu/entries/logic-ai/#mccarthy\*j1-hayes\*pj1:1969a1)》这篇最有影响力的早期逻辑人工智能论文的参考文献很好地说明了这一点。参考文献中有 58 个引用，其中 35 个引用了哲学逻辑文献。（其中有 17 个计算机科学引用，一个数学逻辑引用，一个经济学引用和一个心理学引用。）这篇论文是在几乎没有任何计算机科学文献中提到逻辑人工智能的时候写的。当然，随着逻辑人工智能作为计算机科学的一个分支逐渐成熟和发展，跨学科引用的比例已经减少。从 1989 年举办的第一届知识表示会议的文章中抽样，可以看到在 522 个抽样引用中，只有 12 个是哲学逻辑引用。从《[Cohn ](https://plato.stanford.edu/entries/logic-ai/#cohn\*ag-etal:1998a)​\*[et al](https://plato.stanford.edu/entries/logic-ai/#cohn\*ag-etal:1998a)\*​[. 1998](https://plato.stanford.edu/entries/logic-ai/#cohn\*ag-etal:1998a)》的文章抽样中，可以看到在 468 个抽样引用中，有 23 个是哲学逻辑引用。\[[5](https://plato.stanford.edu/entries/logic-ai/notes.html#note-5)]

尽管明确引用的数量大大减少，但后来的逻辑人工智能文献反映出对哲学逻辑的间接了解，通过引用直接受哲学工作影响的计算机科学会议上的论文。当然，随着时间的推移，这种影响变得越来越微弱，而且这一趋势加速了事实，即在逻辑人工智能中发明了一些新的理论主题，这些主题在哲学文献中最多只是模糊地预示出来。在欧洲，很难在逻辑学家之间划定专业分工的界线。一些欧洲期刊，尤其是《逻辑、语言和信息学杂志》和《逻辑研究》，在保持逻辑焦点的同时，吸引了来自逻辑所涉及的各个学科的作者。

归根结底，逻辑处理的是推理问题，而我们所做的推理中数学内容相对较少，而非数学专业人士所做的几乎所有数学推理都只是简单的计算。为了具有范围和严谨性，逻辑需要保持自身作为一个单一学科，将其数学和哲学两个方面统一起来。但计算机科学的需求为这种统一增加了强大的统一动机，提供了一种新的方法论和与新的有益应用的关系。

## 2. 约翰·麦卡锡和常识逻辑

### 2.1 逻辑与人工智能

约翰·麦卡锡（John McCarthy）是逻辑人工智能中最有影响力的人物，至今仍然如此。麦卡锡是人工智能的创始人之一，并始终主张逻辑形式化是实现人级智能的途径。麦卡锡研究计划中的几乎所有工作都可以在[Lifschitz 1990a](https://plato.stanford.edu/entries/logic-ai/#lifschitz:1990c)中找到，该文还包括[Lifschitz 1990b](https://plato.stanford.edu/entries/logic-ai/#lifschitz:1990d)，对麦卡锡的工作进行了介绍。有关更多历史背景，请参阅[Israel 1991](https://plato.stanford.edu/entries/logic-ai/#israel_d:1991a)。

麦卡锡的观点首次在[McCarthy 1959](https://plato.stanford.edu/entries/logic-ai/#mccarthy_j1:1959a1)中得到阐述，并在[McCarthy & Hayes 1969](https://plato.stanford.edu/entries/logic-ai/#mccarthy_j1-hayes_pj1:1969a1)中进行了详细说明和修正。他认为，即使人工智能的实现不直接使用像定理证明这样的逻辑推理技术，逻辑形式化也有助于理解推理问题本身。该观点认为，如果没有对推理领域进行逻辑描述，将无法实现推理本身。这实际上是有争议的。许多人工智能研究人员认为在他们的工作中不需要逻辑形式化。例如，机器学习的产品通常与逻辑没有明显的关系，而是依赖于训练语料库和累积学习经验的组合。无法以声明性、概念性的方式明确地描述或理解它们，它们与逻辑的关系也会存在问题。

[McCarthy & Hayes 1969](https://plato.stanford.edu/entries/logic-ai/#mccarthy_j1-hayes_pj1:1969a1)的建议在很大程度上与分析哲学的建议重叠，但其目标不同：可编程的通用智能而不是概念分析。一些哲学家也有类似的目标；例如，参见[Carnap 1956](https://plato.stanford.edu/entries/logic-ai/#carnap:1956a)（第 244-247 页）和[Pollock 1995](https://plato.stanford.edu/entries/logic-ai/#pollock:1995a)。

假设本文的大多数读者对逻辑人工智能与哲学逻辑之间的关系感兴趣，本文的剩余部分将忽略与哲学的一般关系以及开发人类级智能系统的可行性。

### 2.2 常识的形式化

麦卡锡的长期目标是形式化_常识推理_，即人类在日常问题上进行的非科学推理。我们已经提到了一个规划问题：如何去机场。其他例子包括：

1. _叙事理解._ 从叙述中重建隐含信息的推理，例如事件的顺序和推断的因果关系。
2. _诊断._ 例如，根据观察解释物理设备的故障。
3. _空间推理._ 例如，推理刚体的部分及其形状，以及它们与整体形状的关系。
4. _推理其他智能体的态度._ 例如，根据“钥匙孔观察”或在简短的互动访谈中获得的对话线索，对其他智能体的信念和欲望进行明智的猜测。

麦卡锡的目标对大多数哲学家来说可能看起来是荒谬的，因为他们被训练成将常识视为难以捉摸和不连贯的。但哲学家在哲学争议中引用常识时，常识的运用是有问题的。麦卡锡考虑的是日常实际的常识。如果在这些情境中常识不可靠，我们将无法应对简单的日常任务。形式化支持这些任务的推理可能是不可行的，但这个项目本身既不是误导的，也不是狂想的。

无论形式化是否是人工智能达到人类水平的秘诀，它在较小规模上已经取得了成功，不仅在非实体环境中\[[6](https://plato.stanford.edu/entries/logic-ai/notes.html#note-6)]，而且在在线机器人规划和执行中也有应用。它被用于一些完全自主的代理人方法\[[7](https://plato.stanford.edu/entries/logic-ai/notes.html#note-7)]。它在多智能体系统中起着重要作用，其中沟通和推理知识至关重要\[[8](https://plato.stanford.edu/entries/logic-ai/notes.html#note-8)]。它还阐明了对物理设备行为的定性推理\[[9](https://plato.stanford.edu/entries/logic-ai/notes.html#note-9)]。

## 3. 非单调推理和非单调逻辑

### 3.1 非单调性

虽然数学证明必须涵盖每一种可能性，但实际推理常常忽略一些可能性。考虑一下去机场的计划。它可能会受到地震、陨石撞击或高速公路事故的阻碍。但忽略前两个因素是完全合理的，甚至第三个因素通常也可以安全地忽略。接受一个计划，与接受一个证明不同，是有风险的。事实上，风险和可能出现不愉快的意外是合乎常识的推理的特点。这意味着这种推理是_非单调的_。

经典逻辑是为数学设计的，它们的推理关系是单调的。也就是说，如果一组公式蕴含一个结果，那么一个更大的集合也将蕴含这个结果。如果一个逻辑的推理关系缺乏这个特性，那么它就是非单调的。_优先模型_提供了一种通用的方法来引导非单调的推理关系。调用一个函数，对于每个公式，产生一个模型的子集；一般来说，我们期望这个子集是这些模型的一个真子集。然后我们说，如果每个模型都满足，那么就认为蕴含。只要我们不假设如果，蕴含关系就是非单调的。

不确定性并不是忽视一种可能性的唯一原因。其他原因包括（1）对正常和通常情况的感觉；（2）认识上的可原谅性-免受忽视可能性所带来的任何责备；（3）进一步思考的估计成本；以及（4）不注意和纯粹的认知懒惰。其中一些可能比其他因素更“理性”，但实际上很难确定理性和非理性因素之间的界限。可能没有人成功地阐明和梳理这些激励因素。

在发展的早期阶段，许多研究人员希望非单调逻辑能够提供一种关于不确定性的有效推理的通用方法。但到了 20 世纪 80 年代末，完全定量的概率推理不仅可以实施，而且在许多应用中明显优于涉及非单调逻辑的方法。非单调性并不是高效推理的魔法路径。它在推理不确定性方面可能是有用的。但概率也是如此。

### 3.2 开端

1980 年出现了三篇有影响力的非单调逻辑论文：McDermott 和 Doyle 1980 年，[Reiter 1980](https://plato.stanford.edu/entries/logic-ai/#reiter_r:1980a1)，以及[McCarthy 1980](https://plato.stanford.edu/entries/logic-ai/#mccarthy_j1:1980a)。在每种情况下，这些论文中提出的形式化方法都经历了数年或更长时间的孕育期。为了准确阐述历史影响，需要对作者进行采访，但这尚未完成。然而，似乎存在两个动机因素：与人工智能的长期目标有关的战略考虑，以及从 20 世纪 70 年代部署的推理系统的分析中产生的更具体的战术考虑。

[3.1 节](https://plato.stanford.edu/entries/logic-ai/#Nonm)解释了为什么人们普遍认为单调性使得经典逻辑不适合作为形式化常识推理的工具。[Minsky 1974](https://plato.stanford.edu/entries/logic-ai/#minsky:1974a1)在发表时广泛阅读，帮助明确了这种态度。Minsky 的论文提出了一系列人工智能的挑战，首先关注自然语言理解的问题。\[[10](https://plato.stanford.edu/entries/logic-ai/notes.html#note-10)]他提倡“基于框架”的知识表示技术\[[11](https://plato.stanford.edu/entries/logic-ai/notes.html#note-11)]，并（将其视为逻辑的替代方案），他提出了一系列与逻辑方法相关的挑战，包括以下问题：构建大规模表示、高效推理、表示控制知识以及提供灵活修订可废除信念的能力。回顾起来，大多数人工智能研究人员可能会同意这些问题是任何研究计划（包括当时 Minsky 本人提倡的计划）所面临的普遍挑战，并且会补充说逻辑技术是解决某些，也许是所有问题的重要元素。例如，良好结构化的逻辑设计可以在扩展任何计算上有用的知识体系方面提供很大帮助。

也许无意中，Minsky 的论文通过将单调性视为逻辑的所谓缺点的源头，激励了非单调逻辑学家。尽管 Minsky 显然意图贬低人工智能中的逻辑方法，[McDermott & Doyle 1980](https://plato.stanford.edu/entries/logic-ai/#mcdermott_d-doyle_j:1980a)和[McCarthy 1980](https://plato.stanford.edu/entries/logic-ai/#mccarthy_j1:1980a)将他的批评解读为一种挑战，要通过发展不具备单调性属性的逻辑来应对。

非单调逻辑的发展也在很大程度上归功于人工智能应用的需求。事实上，这种影响力至少与麦卡锡的战略考虑一样有说服力，并且在形成出现的形式主义方面更具影响力。在这里，我们提到了三个应用，这些应用似乎对早期的非单调逻辑学家来说非常重要：信念修正、封闭世界推理和规划。

#### 3.2.1 信念修正

[Doyle 1979](https://plato.stanford.edu/entries/logic-ai/#doyle_j:1979b1) 提出了一个“真实维护系统”。Doyle 的真实维护算法满足了一个普遍需求，为知识库的“信念”更新提供了一种机制。其思想是跟踪信念的支持，并在需要修订信念时使用这些支持依赖的记录。

在 TMS 中，对于一个信念的支持部分可以包括对其他信念的“缺席”。这引入了非单调性。例如，它提供了默认值：由于相反信念的缺席而引发的信念。

TMS 算法及其改进对人工智能应用产生了重大影响，这就需要进行逻辑分析。（即使在相当简单的情况下，如果没有分析工具，很难看出 TMS 应该产生什么后果。）这为那些试图发展非单调逻辑的人提供了一个自然而高度具体的挑战。TMS 还提出了非单调性与基于不可证明性的推理有关的观点；这一洞察对于模态方法和默认逻辑非常重要。而 TMS 对论证之间相互作用的强调则引发了非单调逻辑中一个至今仍然重要的主题。_抽象论证_是一个与逻辑编程有关的默认推理框架，一直受到广泛关注。例如，参见[Besnard & Hunter 2008](https://plato.stanford.edu/entries/logic-ai/#besnard_p-hunter_a:2008a)和[Rahwan & Simari 2009](https://plato.stanford.edu/entries/logic-ai/#rahwan-simari:2009a)。

#### 3.2.2 闭世界推理

计算机科学中对数据库的研究有一个逻辑的方面；参见[Minker 1997](https://plato.stanford.edu/entries/logic-ai/#minker:1997a)进行调查。这个领域与逻辑人工智能有交互。在非单调逻辑的问题上，演绎数据库范式正在形成，与此同时，许多人工智能研究人员正在思考这些问题，并提供了几个需要分析的非单调推理的具体例子。其中，可能最重要的是“封闭世界假设”。根据这个假设，至少就简单的主张（即正面或负面的文字）而言，系统假设它知道所有应该知道的事情。当系统在其数据中找不到直飞从底特律到博洛尼亚的航班时，这个封闭世界假设就证明了对查询“是否有从底特律到博洛尼亚的直飞航班？”的否定回答。这又是一种从证据的缺失中推理出的情况。通过系统性地尝试证明正面主张的失败，实际上证明了否定主张。这个想法在[Reiter 1978](https://plato.stanford.edu/entries/logic-ai/#reiter_r:1978a1)和[Clark 1978](https://plato.stanford.edu/entries/logic-ai/#clark_kl:1978a1)等论文中进行了研究，为非单调逻辑学家提供了明确的挑战，以及如何应对这一挑战的建议。

#### 3.2.3 规划

理性规划在没有能够推理一系列考虑行动结果的能力时是不可能的。这种预测性推理是局部的；在一个具有许多动态变量的复杂世界中，我们假设大多数变量在执行某个行动后不会改变。如何形式化这种“因果惯性”的问题被称为_框架问题_。

很自然地，我们假设惯性是默认存在的——除非有特殊理由认为它们会改变，否则变量在执行某个行动后不会改变。这表明非单调时间形式化方法在推理行动和变化方面可能有用，并且特别可能解决框架问题。[Sandewall 1972](https://plato.stanford.edu/entries/logic-ai/#sandewall:1972a)是这方面的早期尝试。后续的研究在这个方向上提供了一个特别重要和有启发性的案例研究，展示了逻辑在人工智能中的应用；请参见[第 4.4 节](https://plato.stanford.edu/entries/logic-ai/#PredFramProb)进行进一步讨论。

### 3.3 最早的形式化方法

[第 3.2 节](https://plato.stanford.edu/entries/logic-ai/#Begi)提到了三种对非单调逻辑有影响的方法：_圆周缩减_（麦卡锡）、_模态方法_（多伊尔和麦克德莫特）和_默认逻辑_（赖特）。

在[McCarthy 1993a](https://plato.stanford.edu/entries/logic-ai/#mccarthy_j1:1993a)中，麦卡锡敦促我们在考虑环绕论的早期历史时，要考虑一组三篇论文：麦卡锡[1986](https://plato.stanford.edu/entries/logic-ai/#mccarthy_j1:1986a1)、[1980](https://plato.stanford.edu/entries/logic-ai/#mccarthy_j1:1980a)和[1987](https://plato.stanford.edu/entries/logic-ai/#mccarthy_j1:1977a5)。第一篇论文将麦卡锡和海耶斯[1969](https://plato.stanford.edu/entries/logic-ai/#mccarthy_j1-hayes_pj1:1969a1)的战略思想与需要非单调逻辑的联系起来，并概述了_领域环绕论_的逻辑思想，这是环绕论的最简单情况。第二篇论文提供了更全面的逻辑基础，并引入了更一般和强大的_谓词环绕论_方法。第三篇论文讨论了具有挑战性的常识例子和形式化技术。

所有形式的环绕论都涉及将注意力限制在某些集合最小化的模型上；因此，环绕论可以与非单调性的首选模型处理方法归为一类。麦卡锡的方法是保守的：它使用经典的二阶逻辑。因此，环绕论文献可以避免逻辑基础，并集中于形式化。其他形式的非单调逻辑，包括默认逻辑和模态非单调逻辑，引发了对哲学逻辑学家来说似曾相识的问题。这些问题涉及到设计新逻辑、系统研究关于有效性的问题以及管理替代逻辑的增多。

将文本翻译为简体中文，请不要解释我的原始文本： 将非单调推理视为“有保留的”是很自然的。也就是说，非单调推理可能不仅需要已证明的结论的存在，还需要其他结论的“缺席”。这种默认规则的一般形式是：

:

在存在 的情况下，且在 的缺席下，得出结论 。

我们将这样的规则写为 ; 。

一个重要的特例是 的一个_正常默认_，一个简单的规则，即在假设 的条件下，默认情况下 成立。这可以通过将结论的否定本身作为必须缺失的内容来形式化。

:

在存在 和不存在 的情况下，得出结论 ，写作 。

特殊情况规定，一个结论 默认成立，即 或简称 。

一个_默认理论_由两个组成部分组成：一组作为公理的公式和一组默认规则。

乍一看，如何描述默认逻辑中的证明是令人困惑的，因为可证性的默认解释是循环的：证明是根据正确推理的链条来定义的，但正确推理是根据（不）可证性来定义的。因此，可证性不能像单调情况那样归纳地进行描述。早期的理论[Sandewall 1972](https://plato.stanford.edu/entries/logic-ai/#sandewall:1972a)没有成功地解决这个困难。[McDermott & Doyle 1980](https://plato.stanford.edu/entries/logic-ai/#mcdermott_d-doyle_j:1980a)和[Reiter 1980](https://plato.stanford.edu/entries/logic-ai/#reiter_r:1980a1)提出了解决这个问题的方法。在这两种情况下，逻辑任务是（1）开发一种形式体系，可以在其中表达像 这样的规则，并且（2）定义非单调公理和规则的组合 与理论 之间的关系，后者可以被视为 的合理推论。在后来成为标准的术语中，我们需要定义默认理论 与其 _扩展_ 之间的关系。

这是与经典逻辑截然不同的一种方式，它将公理基础与一组后果关联起来。默认理论可以确定许多不同的后果集合，而逻辑本身无法在它们之间进行选择。

回顾起来，我们可以确定非单调逻辑的两种方法：基于“偏好”的方法和基于“冲突”的方法。第一种方法的理论（如圆满化）涉及对普通模型论定义的相对简单的修改，利用模型之间的偏好关系。第二种方法的理论（如默认逻辑）需要对逻辑思想进行更彻底的改造。多个扩展的可能性——从一组前提中可以得出不同的可能的一致、推理完备的结论集——意味着我们必须将逻辑推理视为一个关系，而不是将其视为将一组公理映射到其逻辑闭包的函数。由于逻辑推理如此基础，这代表了一个重大的理论转变。通过多个扩展，我们仍然可以以各种方式检索理论与公式之间的推理关系，其中最简单的方法是说如果在每个扩展中都是的成员，则“非单调地蕴含”。然而，基于冲突的推理关系提供了比基于偏好的推理关系更丰富的基础结构。

Reiter 以保守的方式处理形式化问题。默认逻辑的语言与一阶逻辑的语言相同，其公式无法表达默认值。但是，一个理论可以涉及一组_默认规则_，即形式为的规则。因此，一个_默认理论_是一个由一组（单调的）公理和一组默认规则组成的对。[Reiter 1980](https://plato.stanford.edu/entries/logic-ai/#reiter_r:1980a1)提供了这种理论扩展的不动点定义，并为这种方法开发了理论基础，证明了一些基本定理。

其中一个定理将在[第 4.5 节](https://plato.stanford.edu/entries/logic-ai/#NonmTreaInerPackProb)中提到，与耶鲁枪击异常有关。其思想是采用一个猜测的扩展（将是一个集合）并将该集合用于一种类似证明的过程中的一致性检查，该过程依次将默认规则应用于以开始的阶段。

我们定义相对于的默认证明过程如下。

* 让。
* 如果在相对于 的情况下，没有默认规则在 中非空地适用于 ，则在 的 FOL 中，逻辑闭包为

否则，选择一些默认规则；即对于相对于而言是非空适用的规则，并让

.

换句话说，只要我们可以在适用的默认情况下非空地关闭我们正在处理的阶段，我们就这样做；否则，我们什么也不做。 Reiter 的一个定理表明，在这些情况下：

> 是的，如果相对于，存在一个证明过程，那么就是的扩展。

因此，我们可以通过以下方式证明是的扩展：(1) 从中构建一个默认推理过程，该过程使用进行一致性检查，(2) 取此过程的极限，(3) 并验证实际上

模态方法调用模态运算符，非正式地解释为“可证明”。\[12] McDermott 和 Doyle 的方法的本质，就像 Reiter 的方法一样，是非单调逻辑扩展的一个不动点定义。将非单调性纳入客体语言会产生一些额外的复杂性，在早期的模态方法中主要体现在逻辑的增多和评估替代方案的困难上。随着模态解释的更好基础的出现，可以证明模态和默认逻辑方法的等价性，这是预期的。\[13]

与非单调逻辑的其他早期展示不同，Reiter 的展示显示出对逻辑编程中非单调性的早期和独立工作的具体影响 - 这项工作似乎在很大程度上受到了为演绎数据库中的非单调推理提供逻辑基础的需求的启发。非单调逻辑的后续历史与逻辑编程语义的文献密切相关。

Doyle 和 McDermott 的论文引用了逻辑 AI 的早期文献，将非单调逻辑作为形式化常识合理性计划的一部分。但这项工作显然也受到提供真值维护的形式化解释的需求的影响。

### 3.4 非单调逻辑的后续工作

非单调逻辑是一个复杂而强大的研究领域。由于有许多不同的基础范式用于形式化非单调推理，并且这些范式之间的关系并不简单，因此提供该主题的综述变得困难。对该领域的一个重要部分进行充分的描述需要类似于一本书的篇幅。有许多书籍和手册文章可供参考，包括[Łukaszewicz 1990](https://plato.stanford.edu/entries/logic-ai/#lukasiewicz\*w:1990a)、[Brewka 1991](https://plato.stanford.edu/entries/logic-ai/#brewka:1991b)、[Besnard 1992](https://plato.stanford.edu/entries/logic-ai/#besnard:1992a)、[Marek & Truszczynski 1994](https://plato.stanford.edu/entries/logic-ai/#marek-truszcynski:1994a)、[Gabbay ](https://plato.stanford.edu/entries/logic-ai/#gabbay-etal:1994a)​\*[et al](https://plato.stanford.edu/entries/logic-ai/#gabbay-etal:1994a)_​_[_. 1994_](https://plato.stanford.edu/entries/logic-ai/#gabbay-etal:1994a)_、_[_Antoniou 1997_](https://plato.stanford.edu/entries/logic-ai/#antoniou:1997a)_、_[_Brewka_ ](https://plato.stanford.edu/entries/logic-ai/#brewka-etal:1997a)_​_[et al](https://plato.stanford.edu/entries/logic-ai/#brewka-etal:1997a)\*​[. 1997](https://plato.stanford.edu/entries/logic-ai/#brewka-etal:1997a)、[Schlechta 1997](https://plato.stanford.edu/entries/logic-ai/#schlechta:1997a)、[Makinson 2005](https://plato.stanford.edu/entries/logic-ai/#makinson:2005b)、[Antoniou & Wang 2007](https://plato.stanford.edu/entries/logic-ai/#antoniou-wang\*kw:2007a)、[Bochman 2007](https://plato.stanford.edu/entries/logic-ai/#bochman\*a:2007a)、[Horty 2012](https://plato.stanford.edu/entries/logic-ai/#horty:2012a)、[Straßer 2014](https://plato.stanford.edu/entries/logic-ai/#strasser\*c:2014a)和[Straßer & Antonelli 2019](https://plato.stanford.edu/entries/logic-ai/#strasser\*c-antonelli\*ga:2019a)。[Ginsberg 1987](https://plato.stanford.edu/entries/logic-ai/#ginsberg:1987a)这本书对于对该主题的早期历史感兴趣的读者来说是一个有用的资源，并且有一个出色的引言。

#### 3.4.1 偏好语义

[3.1 节](https://plato.stanford.edu/entries/logic-ai/#Nonm)解释了如何使用优先模型来描述非单调的推理关系。这种对非单调性的模型理论方法在[Shoham 1988](https://plato.stanford.edu/entries/logic-ai/#shoham:1988a)中得到了澄清，这是在[3.2 节](https://plato.stanford.edu/entries/logic-ai/#Begi)讨论的工作之后的五年。Shoham 的工作提供了一种更一般和抽象的方法。

优先语义依赖于一个将模型集合映射到的子集的函数。_优先蕴涵_的关键定义规定，如果对于每个模型，当(_Models_意味着时，是(_Models_的一个（非单调）结果。Shoham 通过模型之间的偏序关系来描述。是在中的模型集合，这些模型在中是最小的。为了确保除非经典地蕴涵矛盾，否则没有集合可以优先地蕴涵矛盾，必须禁止无限下降的链。

这种对非单调性的处理类似于早期条件语义理论中的模态语义理论 - 使用条件语义的演示，如与前提相关联的世界集合的[Chellas 1975](https://plato.stanford.edu/entries/logic-ai/#chellas:1975a)。当然，经典条件逻辑的结果关系是单调的，条件语义使用可能世界，而不是模型。但条件语句的左非单调性（事实上，不蕴含不引起与非单调结果关系相关的问题。条件语句与非单调逻辑之间的相互关系成为非单调逻辑后续工作中的重要主题。例如，[Gärdenfors＆Makinson 1994](https://plato.stanford.edu/entries/logic-ai/#gardenfors-makinson:1994a)，[Boutilier 1992](https://plato.stanford.edu/entries/logic-ai/#boutilier:1992a)，[Pearl 1994](https://plato.stanford.edu/entries/logic-ai/#pearl:1994b)，[Gabbay 1995](https://plato.stanford.edu/entries/logic-ai/#gabbay:1995a)，[Delgrande 1998](https://plato.stanford.edu/entries/logic-ai/#delgrande:1998b)，[Arlo-Costa＆Shapiro 1992](https://plato.stanford.edu/entries/logic-ai/#arlocosta-shapiro:1992a)，[Alcourrón 1995](https://plato.stanford.edu/entries/logic-ai/#alcourron:1995a)，[Asher 1995](https://plato.stanford.edu/entries/logic-ai/#asher:1995a)，[Kern-Isberner 2001](https://plato.stanford.edu/entries/logic-ai/#kernisberner:2001a)，[Giordano＆Schwind 2004](https://plato.stanford.edu/entries/logic-ai/#giordano-schwind_c:2004a)，[Lent＆Thomason 2015](https://plato.stanford.edu/entries/logic-ai/#lent-thomason:2015a)和[Casini＆Straccia 2022](https://plato.stanford.edu/entries/logic-ai/#casini-straccia:2022a)。

偏好语义为制定和证明关于偏好关系条件与抽象结果关系属性的表示定理提供了机会。这一研究方向始于[Lehmann＆Magidor 1992](https://plato.stanford.edu/entries/logic-ai/#lehmann_d-magidor:1992b1)。

#### 3.4.2 模态和认识论理论

无论是 Doyle 还是 McDermott 都没有在初始阶段之外深入探讨模态方法。然而，在 Robert Stalnaker 的有益建议下（参见[Stalnaker 1993](https://plato.stanford.edu/entries/logic-ai/#stalnaker:1993c)），Robert C. Moore 提出了一种模态理论，对早期的想法进行了许多改进。Moore 在他的系统中赋予了模态运算符一个认识论解释，基于这样一个概念：默认规则是指除非有知识阻止推论，否则允许推论的推理主体。在 Moore 的_自我认知逻辑_中，一个理论的扩展是一个超集，它是_稳定的_，即它是演绎闭合的，并且满足以下两个规则：

1. 如果 那么 。
2. 如果 那么 。

通常在自我认知扩展中对基于的条件进行_基于性_的约束，以确保扩展的每个成员都有一些与追溯到的原因。已经考虑了各种这样的条件；最简单的条件限制扩展满足以下条件：

3. 是的非模态后果的集合。

自我认知逻辑仍然是非单调逻辑的一种流行方法，部分原因是它在为逻辑编程提供理论基础方面的实用性。参见[Marek & Truszczynski 1991](https://plato.stanford.edu/entries/logic-ai/#marek-truszcynski:1991a)、[Marek & Truszczynski 1989](https://plato.stanford.edu/entries/logic-ai/#marek-truszynski:1989a)、[Konolige 1994](https://plato.stanford.edu/entries/logic-ai/#konolige:1994b)、[Antoniou 1997](https://plato.stanford.edu/entries/logic-ai/#antoniou:1997a)、[Moore 1993](https://plato.stanford.edu/entries/logic-ai/#moore\*rc:1993b)和[Deneker ](https://plato.stanford.edu/entries/logic-ai/#denecker-etal:2003a)​\*[et al](https://plato.stanford.edu/entries/logic-ai/#denecker-etal:2003a)\*​[. 2003](https://plato.stanford.edu/entries/logic-ai/#denecker-etal:2003a)。

认知逻辑启发了其他非单调逻辑的方法。与其他非单调性的模态理论一样，这些方法使用模态性来反映对象语言中的一致性，因此允许表达类似于的默认规则。但是，与一致性不同，这些方法使用的是_无知_。参见[Halpern & Moses 1985](https://plato.stanford.edu/entries/logic-ai/#halpern-moses:1984a2)和[Levesque 1987](https://plato.stanford.edu/entries/logic-ai/#levesque:1987a)以了解这个想法的变体。这些理论在[Meyer & van der Hoek 1995](https://plato.stanford.edu/entries/logic-ai/#meyer_jjc-vanderhoek:1995a)中得到解释并与其他非单调逻辑进行比较。在最近的工作中，Levesque 的想法被系统地呈现并应用于知识库理论中[Levesque & Lakemeyer 2000](https://plato.stanford.edu/entries/logic-ai/#levesque-lakemeyer:2000a)。

## 4. 推理行动和变化

### 4.1 先验时态逻辑

现代时间逻辑的轮廓在 1950 年代和 1960 年代由亚瑟·普赖尔（Arthur Prior）标准化：参见普赖尔[1956](https://plato.stanford.edu/entries/logic-ai/#prior:1956b)、[1967](https://plato.stanford.edu/entries/logic-ai/#prior:1967a)、[1968](https://plato.stanford.edu/entries/logic-ai/#prior:1968a)。\[[14](https://plato.stanford.edu/entries/logic-ai/notes.html#note-14)] 由于它是在哲学逻辑中发展起来的，时态逻辑被证明是一种模态逻辑。因此，它将公式的真值相对化为世界状态或世界的时间阶段；这些是普通模态逻辑中无时无刻的可能世界的时态理论类比。然后可以从模态逻辑中借用一个研究计划，例如，研究公理系统与相应的模型论约束之间的关系，以及时间排序。例如，参见[Burgess 1984](https://plato.stanford.edu/entries/logic-ai/#burgess_jp:1984c)和[van Benthem 1983](https://plato.stanford.edu/entries/logic-ai/#vanbenthem:1983a)。

普赖尔的时态逻辑与模态逻辑共同关注使用关系的一阶理论来解释逻辑现象，期望重要的时间运算符将是对世界状态的量化器，并且与现实的、实际的时间推理之间有着相当薄弱的联系。当然，这些时态逻辑确实产生了有效性，例如

（如果，那么就是这样的情况，）这些在直觉上是有效的。但最多只能在解释常识推理的时间方面起到广泛的基础性作用。很难想象出它们在推理中起主导作用的现实例子。

### 4.2 计划问题和情景演算

规划问题为将逻辑分析与人工智能应用相结合提供了最丰富的展示场景之一。一方面，自动规划具有许多实际价值的应用，另一方面，规划的逻辑形式化在理解规划问题和设计算法方面确实是有帮助的。

AI 规划问题的经典表示，如[Amarel 1968](https://plato.stanford.edu/entries/logic-ai/#amarel:1968a1)所述，显然源自 Herbert Simon 在 1966 年发表的 CMU 技术报告[Simon 1966](https://plato.stanford.edu/entries/logic-ai/#simon_ha:1966a)的早期工作。在这样一个问题中，一个处于初始世界状态的代理被赋予一组“动作”，这些动作被认为是将世界状态转化为世界状态的部分函数。动作只在满足适当约束的世界状态下可行。（这些约束现在被称为动作的“前提条件”）。然后，规划问题就变成了寻找一系列可行动作的搜索，这些动作逐步将初始世界状态转化为所需的世界状态。

基于逻辑的人工智能（Situation Calculus），由约翰·麦卡锡（John McCarthy）开发，是后来大部分形式化推理行为和变化工作的起源。它首次在 1969 年被描述，关于该主题的最早一篇普遍可访问的出版物是[McCarthy＆Hayes 1969](https://plato.stanford.edu/entries/logic-ai/#mccarthy_j1-hayes_pj1:1969a1)。

显然，普里尔时态逻辑对 Amarel 没有影响。但是 Amarel 的世界状态与普里尔时态逻辑的世界状态之间没有重要的区别。Situation Calculus 中的“情境”就是这些相同的世界状态，只是换了个名字。\[[15](https://plato.stanford.edu/entries/logic-ai/notes.html#note-15)] 它们类似于模态逻辑中的可能世界，提供支持一致和完整的真理集合的抽象位置。与时态逻辑类似，这些位置是有序的，并且变化通过从一个位置到另一个位置的真值条件的变化来表示。当然，这些差异是受到 Situation Calculus 的预期用途的启发：它旨在形式化 Simon 对规划问题的表示，其中单个代理人推理关于顺序执行动作的情景。\[[16](https://plato.stanford.edu/entries/logic-ai/notes.html#note-16)] Situation Calculus 中的变化是动态的，由行动的执行驱动。因此，基本的模型论组成部分是

行动 a、执行 a 的输入情境 s 和行动执行后的输出情境之间的关系。通常（虽然这并非绝对必要），我们假设这种关系是确定性的且唯一的。

当然，所有这些都是基于离散时间的观点。在其他以行动为驱动的框架中，比如博弈论和数字计算理论，这种观点似乎是不可或缺的。

一般来说，只有在某些有限的情况下才能成功执行动作。这可以通过允许存在这样的情况来建模，即不存在这样的情况使得。然而，通常假设是一个总函数，但在 s 不满足 a 的“前提条件”的情况下，对满足的没有任何限制。这意味着在这种情况下，a 的因果效应将完全不受限制，并且在惯性定律存在的情况下，“执行”a 将使事物保持不变。

一个规划问题从一组有限的动作开始（每个动作都与前提条件和效果相关联），一个初始情况和一个目标（可以视为一个公式）。规划问题是找到一系列动作的问题，这些动作将在给定初始情况的情况下实现目标。也就是说，给定目标和初始情况 s，问题将包括找到一系列动作，将 s 转化为满足的最终情况。规划问题实际上是在寻找这样一系列动作的过程中进行搜索。搜索的成功条件可以用类似情境演算的形式化方法来描述，该方法允许表达有关动作结果的信息。

到目前为止，关于情境演算的实际语言还没有提到过。关键是如何表达变化。考虑到时态逻辑，调用类似的模态词是很自然的，其真值条件为

这种形式化，以动态逻辑的风格，实际上是对麦卡锡的一种有吸引力的替代方案。

但是[McCarthy＆Hayes 1969](https://plato.stanford.edu/entries/logic-ai/#mccarthy_j1-hayes_pj1:1969a1)使用了一种更接近一阶逻辑的语言。（这种形式化风格是 McCarthy 的作品的特点；参见[McCarthy 1979](https://plato.stanford.edu/entries/logic-ai/#mccarthy_j1:1979c1)。）将动作视为个体。而可以随时间改变真值的命题（命题_流变量_）也被视为个体。其中 表示一种情境， 表示一个流变量， 表示在 中 为真。

自 19 世纪和 20 世纪初逻辑学家的开创性工作以来，形式化数学领域的过程已经变得常规化。尽管（与集合论一样），关于哪些公理和逻辑基础最适合形式化数学领域可能存在争议，但形式化的方法和评估标准是自动的，且（大多数）未经审查的。这种方法论的清晰性尚未成功扩展到其他领域；即使是对经验科学的形式化也存在难题，尚未解决。\[17]

关于时间推理的形式化，特别是关于行动和计划的推理，是现代形式化技术在数学理论以外领域中最成功的扩展。这一转变需要创造新的方法论。一种方法论创新将在[第 4.5 节](https://plato.stanford.edu/entries/logic-ai/#NonmTreaInerPackProb)中出现：开发一套场景库来测试各种形式主义的适用性，并创建专门的领域，如块世界领域（在[第 4.2 节](https://plato.stanford.edu/entries/logic-ai/#PlanProbSituCalc)中提到），用于测试想法。有关块世界的更多信息，请参见[Genesereth＆Nilsson 1987](https://plato.stanford.edu/entries/logic-ai/#genesereth-nilsson_nj:1987a)；[Davis 1991](https://plato.stanford.edu/entries/logic-ai/#davis_e:1991a)。麦卡锡关于“详细容忍度”（elaboration tolerance）的想法[McCarthy 1999](https://plato.stanford.edu/entries/logic-ai/#mccarthy_j1:1999a)提供了一个有趣的尝试，以提供形式化的适用性标准。在形式化常识领域的过程中出现的另一个想法是明确本体论的重要性；例如，请参见[Fikes 1996](https://plato.stanford.edu/entries/logic-ai/#fikes:1996a)和[Lenat＆Guha 1989](https://plato.stanford.edu/entries/logic-ai/#lenat-guha:1989a)。另一个是明确表示上下文的潜在有用性；例如，请参见[Guha, 1991](https://plato.stanford.edu/entries/logic-ai/#guha:1991a)。另一个是使用模拟技术：例如，请参见[Johnstone＆Williamson 2007](https://plato.stanford.edu/entries/logic-ai/#johnstone-williamson:2007)。

### 4.4 预测和框架问题

要判断一个计划是否实现了其目标，你需要看目标是否在计划的最终状态中保持。这需要进行_预测性_推理，这是一种时态逻辑文献中忽视的推理类型。与力学类似，预测涉及从早期状态推断出后续状态。但是（至少在简单的规划问题中），变化是由行动驱动而不是由微分方程驱动的。对这种定性形式的时间推理以及相关推理形式（例如，计划识别，旨在从观察到的行动中推断目标，以及叙事解释，旨在填补时间叙述中的隐含信息）的研究是常识逻辑主义简史中最令人印象深刻的章节之一。

预测的本质是推断在执行一个动作后所发生的情况中的内容，给定关于初始情况的信息。如果代理人对初始情况有完全的了解，这个问题就容易得多——这个假设通常是不现实的，但在经典规划形式化中很常见。

行动驱动动力学的很大一部分与不发生变化的事物有关。以使用文字处理器输入“cat”为例的简单计划：自然的计划是先输入“c”，然后输入“a”，然后输入“t”。对这个计划的信心的一部分在于这些动作是独立的：例如，输入“a”不会同时删除“c”。所需的推理可以被看作是一种惯性的形式。框架问题是如何形式化所需的惯性推理的问题。

帧问题（Frame Problem）是在 1969 年由麦卡锡和海耶斯（McCarthy & Hayes）命名和引入的。与大多数在人工智能中出现的哲学上有趣的技术问题不同，它引起了哲学家的兴趣；大部分相关论文和背景信息可以在[Ford & Pylyshyn 1996](https://plato.stanford.edu/entries/logic-ai/#ford-pylyshyn:1996a)和[Pylyshyn 1987](https://plato.stanford.edu/entries/logic-ai/#pylyshyn:1987a)中找到。这两个文集都记录了人工智能和哲学之间的互动。

这些互动的质量令人沮丧。像任何现实的常识推理问题一样，帧问题是开放性的，并且可以依赖于各种各样的情况。如果你把 20 美元放在钱包里，把钱包放在口袋里，然后去商店，你可以安全地假设 20 美元会留在钱包里。但是如果你在购物时把 20 美元留在柜台上，你不能安全地期望它以后还在那里。这可能解释了为什么一些哲学家\[[19](https://plato.stanford.edu/entries/logic-ai/notes.html#note-19)]希望将帧问题解释得非常广泛，以至于很快它就变得难以区分于在任意领域中形式化常识的问题。\[[20](https://plato.stanford.edu/entries/logic-ai/notes.html#note-20)]这样广泛的解释可能会引入关于人工智能性质的推测性讨论，但它与人工智能社区发现的与时间推理相关的真正新的逻辑问题失去了所有联系。

纯粹的逻辑框架问题可以通过使用单调逻辑来解决，只需编写明确的公理来陈述在执行动作时不会发生什么变化。这种技术可以成功应用于相当复杂的形式化问题。\[[21](https://plato.stanford.edu/entries/logic-ai/notes.html#note-21)] 但是，对于该框架的非单调解决方案已经得到广泛研究和应用；这些解决方案引导了新的有趣的逻辑发展方向。

一些哲学家（[Fodor 1987](https://plato.stanford.edu/entries/logic-ai/#fodor_ja:1987b)，[Lormand 1996](https://plato.stanford.edu/entries/logic-ai/#lormand:1996a)）认为，人为构造的命题在与框架问题相关时会带来特殊困难。正如 Shanahan 指出的那样[Shanahan 1997](https://plato.stanford.edu/entries/logic-ai/#shanahan:1997a)\[p. 24])，Fodor 的“冰箱”例子可以很容易地在情境演算中进行形式化，并且不会带来特殊问题。然而，正如 Lormand 所建议的那样，Goodman 的例子[Goodman, 1946](https://plato.stanford.edu/entries/logic-ai/#goodman_n:1946a)如果被作为流变量被接受，将会产生问题；在某些异常的扩展中，物体会从绿色变为蓝色，以保持它们的绿色特性。

这是哲学家们对于框架问题提出的少数几个观点之一，它对于 AI 形式化提出了一个真正的困难。但是这个困难是次要的，因为这个例子是不现实的。在流畅性中并不假设闭包性质（比如布尔运算的闭包性）。事实上，通常假设在规划领域的形式化中选择的流畅性将代表状态相关函数的一个非常有限的子集；通常，它将是一个相对较小的有限变量集合，代表领域中被认为重要的特征。在特定情况下，这些变量将以与统计建模中选择变量的方式相似的方式选择。

我不知道 AI 文献中是否有关于形式化方法论的系统性论述，或者特别是如何选择适当的流畅性集合。但是在这样的论述中，肯定会包括所有流畅性应该对应于 Goodman 所说的可投射谓词的要求。

### 4.5 惯性的非单调处理和一系列问题

对于框架问题的非单调解决方案使惯性成为默认情况；只有在某些特殊原因下才会假设发生变化。在以行动为中心的变化描述中，这些特殊原因可以在规定行动的直接影响的公理中找到。

我们可以用 Reiter 的默认逻辑来说明形式化。回想一下，在 Reiter 的理论中，默认规则被表示为规则，而不是公理；这意味着我们需要使用默认规则模式来形式化惯性。对于每个流畅、动作和情境，惯性模式将包括以下规则：

这种做事方式使得流畅的真值的任何变化都是一个_prima facie_的异常。但根据 Reiter 对扩展的描述，这些默认规则在与给出状态动态的（单调）公理冲突时被覆盖。例如，如果有一个单调的因果公理，规定将某个棋子移动到 Q4 将使棋子位于 Q4，那么实例

将被覆盖，并且在执行移动-P4 到 Q4 操作后，兵将不会保持原位。**惯性**将确保其他棋子保持不动。

广受关注的框架问题被孤立地脱离了上下文。如果有人对于理解在部署类似情境演算的形式化方法时出现的哲学上有趣的问题感兴趣，最好考虑更广泛的问题范围。这些问题不仅包括框架问题本身，还包括资格问题、分歧问题，以及一系列特定的挑战，例如本节后面提到的场景。而且还必须思考如何进行概括：例如如何处理不完全信息、多个代理同时行动以及环境中的持续变化。

_资格问题_与几乎任何常识概括的形式化有关。通常，这些概括会涉及一个开放且似乎难以处理的例外数组。同样的现象，在分析哲学中被称为“_ceteris paribus_概括问题”，也出现在自然语言中的_泛指_结构的语义中。

非单调逻辑通过实现增量形式化为这个问题做出了贡献。如果将一个常识概括表述为默认规则，那么可以非破坏性地添加进一步的限定。默认公理被保留，然后添加一个例外，该例外本身可能是一个默认规则。即使它不能解决更深层次的哲学问题，这也是有帮助的。

资格问题是在[麦卡锡 1986 年](https://plato.stanford.edu/entries/logic-ai/#mccarthy_j1:1986a1)提出的，主要是基于对行动后果的概括。麦卡锡详细考虑了在汽车中转动点火钥匙将启动汽车的概括。实际上，对于几乎任何行动，包括将一个积木叠放在另一个上面，都可以得出同样的结论——这是早期情境演算的标准示例。[利夫希茨 1987 年](https://plato.stanford.edu/entries/logic-ai/#lifschitz:1987c)提出了一种圆周逻辑的解决方案，明确地将行动与其前提条件的关系引入到形式化中，并通过圆周逻辑最小化前提条件，从优选模型中消除可能使行动无效的“未知前提条件”。

并非每种非单调逻辑都提供了优雅的资格机制。例如，普通的默认逻辑无法提供直观上期望的结论，因为它没有办法让默认规则覆盖其他默认规则。要实现这种效果，需要一种高级版本的逻辑，其中默认规则具有优先级。这可能会大大复杂化理论；例如，参见[阿舍尔和莫罗 1991 年](https://plato.stanford.edu/entries/logic-ai/#asher-morreau:1991a)和[霍蒂 1994 年](https://plato.stanford.edu/entries/logic-ai/#horty:1994a)。正如[埃尔坎 1995 年](https://plato.stanford.edu/entries/logic-ai/#elkan:1995a)指出的，资格问题引发了计算问题。

相对于时间推理中的其他问题，对于表征行动的资格问题给予的关注相对较少。特别是，对于_不成功_的行动的标准解释有些不直观。例如，在[Lifschitz 1987](https://plato.stanford.edu/entries/logic-ai/#lifschitz:1987c)的形式化中，只有在前提条件得到满足时，行动的常规效果才能得到保证，这与前提条件全部成功的行动有所区别。就好像在任何时刻都可以进行一笔 100 万美元的交易，尽管如果你没有钱，特定的效果将无法保证。\[[23](https://plato.stanford.edu/entries/logic-ai/notes.html#note-23)]此外，对于那些甚至无法尝试的行动（比如在悉尼时试图登机伦敦的飞机）、可以尝试但预计会失败的行动（比如在资金不足时取款）、可以尝试并有合理成功希望的行动，以及可以尝试并保证成功的行动之间没有区别。正如 J.L.奥斯汀在[Austin 1961](https://plato.stanford.edu/entries/logic-ai/#austin:1961x)中明确指出的那样，行动的尝试方式以及尝试行动的失败方式是常识推理中一个发展完善的部分。显然，在考虑可能失败的行动的计划时，人们可能需要推理失败的后果。对行动的病理进行形式化，提供关于行动及其包含的计划可能出错的系统理论，将是规划形式化的有益补充，也将阐明哲学中的重要主题。

由_分支问题_（首次由[Finger 1987](https://plato.stanford.edu/entries/logic-ai/#finger_j:1987a)描述）提出的挑战是形式化行动的间接后果，其中“间接”效果是同步的\[[24](https://plato.stanford.edu/entries/logic-ai/notes.html#note-24)]，但是因果上是派生的。如果一个人走进一个房间，直接效果是他现在在房间里。还有许多间接效果，例如他的衬衫现在也在房间里。

从这个表述中可以看出，假设在行动形式主义的人工智能文献中，预设了行动的直接后果（与行动本身紧密相关并由其成功执行所确保）与其他后果之间的区别。这个假设通常被毫无疑问地接受。你可以为其常识上的合理性提出充分的论据，例如，我们很多表示行动的词语（如“加热”、“延长”、“填充”）都是从与其惯常相关的效果中派生出来的。在这些情况下，成功是必然的：如果有人把某物加热了，那就意味着它变热了。但是也存在一些复杂情况。[Lin 1995](https://plato.stanford.edu/entries/logic-ai/#lin_fz:1995a)讨论了一个简单的例子：一个特定的手提箱有两个锁，只有当两个锁都打开时，它才是打开的。然后（假设行动不是同时进行的）如果打开一个锁只有在另一个锁打开的情况下才能打开手提箱。Lin 的形式化处理将打开每个锁都视为一种行动，具有直接后果。但是打开手提箱并不是一种行动，而是一种间接效果。

显然，分支问题与框架问题密切相关。在采用非单调解决方案来解决框架问题的方法中，惯性默认需要被分支所覆盖，以获得正确的结果。在 Lin 的例子中，假设手提箱的左锁是打开的，并执行了打开右锁的行动。那么默认的结论是手提箱仍然关闭，需要以某种方式被抑制。

一些解决分支问题的方法依赖于常识因果理论的发展，因此与关于时间和行动推理的因果方法密切相关，如[第 4.6 节](https://plato.stanford.edu/entries/logic-ai/#SomeEmerFram)所述。例如，参见[Giunchiglia ](https://plato.stanford.edu/entries/logic-ai/#giunchiglia\*e-etal:1997a)​\*[et al](https://plato.stanford.edu/entries/logic-ai/#giunchiglia\*e-etal:1997a)\*​[. 1997](https://plato.stanford.edu/entries/logic-ai/#giunchiglia\*e-etal:1997a)、[Thielscher 1989](https://plato.stanford.edu/entries/logic-ai/#thielscher:1997a)、[Lin 1995](https://plato.stanford.edu/entries/logic-ai/#lin\*fz:1995a)。

哲学逻辑学家一直以来都乐于用相对小规模的例子来说明他们的观点。即使是大规模数学理论的形式化也相对不成问题。逻辑主义人工智能是逻辑学的第一个分支，它承担了形式化现实且非平凡的常识推理的任务。在这个过程中，该领域不得不发明新的方法。在形式化行动和变化的过程中，方法论的一个重要部分是突出挑战，以“场景”的形式提出。这些场景代表了形式化问题，通常涉及相对简单、现实的例子，旨在以特定方式挑战逻辑理论。通常，对于这些情况，人们会有明确的常识直觉，知道应该推导出什么样的推理。挑战在于设计一个逻辑形式化方法，能够为这些基准问题提供一般且有充分动机的解决方案。

在文献中讨论的许多情景中，有婴儿情景、乘车情景、国际象棋棋盘情景、渡船连接情景、家具组装情景、藏火鸡情景、厨房水槽情景、俄罗斯火鸡情景、斯坦福谋杀之谜、斯德哥尔摩交付情景、被盗汽车情景、闷热房间情景、被罚款的汽车情景、行走的火鸡情景和耶鲁枪击异常。这些情景的描述可以在[Shanahan 1997](https://plato.stanford.edu/entries/logic-ai/#shanahan:1997a)和[Sandewall 1994](https://plato.stanford.edu/entries/logic-ai/#sandewall:1994a)中找到；特别是参见[Sandewall 1994](https://plato.stanford.edu/entries/logic-ai/#sandewall:1994a)的第 2 章和第 7 章。

这些情景中的许多都是为了测试高级问题而设计的，这些问题在这里不会讨论，例如处理多个代理人或连续变化的挑战。在这里，我们集中讨论最早的、可能也是最微妙的情景之一：耶鲁枪击异常，首次报道于[Hanks & McDermott 1985](https://plato.stanford.edu/entries/logic-ai/#hanks-mcdermott_d:1985a)，并发表于[Hanks & McDermott 1986](https://plato.stanford.edu/entries/logic-ai/#hanks-mcdermott_d:1986a)和[Hanks & McDermott 1987](https://plato.stanford.edu/entries/logic-ai/#hanks-mcdermott_d:1987b)。

耶鲁枪击异常涉及三个动作：装弹、射击和等待。一个命题流畅的"Loaded"跟踪某个手枪是否装弹；另一个流畅的"Alive"跟踪某只火鸡弗雷德是否活着。装弹动作没有前提条件；它的唯一效果是"Loaded"。射击动作的唯一前提条件是"Loaded"，唯一效果是"Not-Alive"；等待动作没有前提条件和效果。

关于公理的因果信息被形式化如下。

\| **负载：** | |

\| --- | --- |

\| **射击 1：** | |

\| **射击 2：** | |

没有等待公理。

我们将使用 Reiter 的默认逻辑来形式化这种情景中的惯性推理。该理论的默认集包括惯性模式的所有实例。在初始情况下，Fred 是活着的，手枪未装弹。

\| **IC1:** | |

\| --- | --- |

\| **IC2:** | |

场景的单调理论由以下组成：（1）动作公理**Load**，**Shoot 1**和**Shoot 2**，以及（2）初始条件和。

让 ，和 。

耶鲁枪击异常涉及动作序列加载；等待；射击，从 到 ，如下所示。

\| | | | | | | |

\| --- | --- | --- | --- | --- | --- | --- |

这是一个异常情况——对于惯性的天真理论提出了挑战——因为默认逻辑允许一种扩展，根据这种扩展，手枪是未装弹的，弗雷德在最终情况下是活着的。异常的扩展如下图所示。

\| | | | | | | |

\| --- | --- | --- | --- | --- | --- | --- |

以叙述形式，这个扩展中发生的情况如下。一开始，弗雷德还活着，手枪没有装弹。装弹后，手枪装弹了，弗雷德仍然活着。等待后，手枪变成了未装弹状态，弗雷德仍然活着。射击变得无意义，因为手枪没有装弹。所以最后，在射击之后，弗雷德仍然活着，手枪仍然没有装弹。

最好的方法是通过证明来看出这是一个扩展。然而，更不正式地说，你可以看到，Fred 最终死亡的预期扩展只违反了一个默认值：当 Fred 在最后一步改变状态时，违反了 Alive 的框架默认值。但是，异常的扩展也只违反了一个默认值：当枪在等待时突然变得未装填时，违反了 Loaded 的框架默认值。如果只根据违反的默认值数量来判断，两个扩展都是同样好的。

基于对因果惯性的直接默认逻辑形式化的规划算法将无法按预期执行。它将无法验证一个完全合理的常识计划来杀死 Fred，并且在除了最简单的规划场景之外也会失败。因此，耶鲁射击异常代表了在发展基于惯性的预测推理理论时的一个重大障碍。一个合理且有动机的逻辑解决方案已经在一个简单而明确的例子中遭遇了错误的结果。

自然地，关于耶鲁枪击异常的文献非常广泛。有关这些工作的一些调查，包括参考文献，可以在[Shanahan 1997](https://plato.stanford.edu/entries/logic-ai/#shanahan:1997a)和[Morgenstern 1996](https://plato.stanford.edu/entries/logic-ai/#morgenstern:1996a)中找到。

### 4.6 一些新兴框架

普遍认为，良好的解决方案需要在大量场景中表现出令人满意的性能，并且具有可推广性：特别是，即使引入连续时间、并发操作和各种形式的无知，它们也应该是可部署的。并且人们一致认为它们应该支持多种推理任务，包括不仅仅是预测和计划验证，还包括根据执行的动作和代理目标解释历史信息或叙述。

在这里，我们提到了四种方法：（1）特征和流畅（Sandewall），（2）动机行为理论（Morgenstern 和 Stein），（3）事件演算中的状态最小化（Shanahan）和（4）因果理论（Lifschitz 和其他人）。第四种方法最有可能引起哲学家的兴趣，并包含一些无论未来发展如何都具有持久重要性的元素，并且将进行更详细的讨论。

#### 4.6.1 特征和流畅性

这种方法，描述在[Sandewall 1994](https://plato.stanford.edu/entries/logic-ai/#sandewall:1994a)中，使用偏好语义作为组织非单调解决关于行动和变化的推理问题的方式。桑德沃尔并没有引入单一的逻辑框架，而是考虑了许多时间逻辑，包括使用离散、连续和分支时间的逻辑。这些逻辑的属性经过系统地测试，针对大量的测试场景。

#### 4.6.2 动机行为理论

这个理论是基于对上述时间推理问题的直接考虑而发展起来的，尤其是耶鲁枪击案的情景。[Morgenstern & Stein 1994](https://plato.stanford.edu/entries/logic-ai/#morgenstern-stein:1994a)试图找到一个通用的、直观动机的逻辑框架来解决这些困难。Morgenstern 和 Stein 认为，无动机的行为应该被最小化，其中一个行为可以直接通过公理或间接通过因果链来获得动机。关键的技术思想是在基于区间的时间逻辑中对动机进行（相当复杂的）定义。

[Morgenstern 1996](https://plato.stanford.edu/entries/logic-ai/#morgenstern:1996a) 提供了该理论的摘要，以及拒绝其因果竞争对手的原因。其中最重要的原因是基于情境演算的解释似乎无法推广到允许并发和无知的情况。她还引用了早期因果理论无法处理逆推的失败。

#### 4.6.3 事件演算中的基于状态的最小化

[Baker 1989](https://plato.stanford.edu/entries/logic-ai/#baker_ab:1989a)使用了 Yale Shooting Anomaly 的限定版本进行工作。回想一下，circumscription 使用首选模型来最小化异常性谓词的扩展。在这个最小化过程中，某些参数（包括当然要最小化的谓词）被允许变化；其余参数保持不变。哪些参数变化，哪些参数保持不变是由应用程序决定的。

在最早的对框架问题的限定解决方案中，惯性规则使用了一个异常性谓词来表述。

这个公理使用了一个双条件语句，因此可以用于逆向推理；这是常识惯性更近期的表述的典型特征。对于框架问题的一个不成熟的解决方案是将异常谓词最小化，同时允许"Holds"谓词变化并保持所有其他参数固定。这种方法与默认逻辑一样会导致耶鲁枪击异常。Circumscription 不涉及多个扩展，因此在枪击后无法得出 Fred 已经死亡的结论。

在 Baker 对问题的重新表述中，单独的公理确保了与每个布尔组合的情态对应的情境的存在，并且"Result"函数允许变化，而"Holds"谓词保持不变。在这种情况下，"Result"函数需要针对"反事实"行为进行指定，特别是针对枪击和耶鲁枪击异常中的等待。正是这个特征消除了该场景的错误模型；有关详细信息，请参见[Baker 1989](https://plato.stanford.edu/entries/logic-ai/#baker_ab:1989a)和[Shanahan 1997](https://plato.stanford.edu/entries/logic-ai/#shanahan:1997a)，第 6 章。

这个想法，Shanahan 称之为“基于状态的最小化”，在[Shanahan 1997](https://plato.stanford.edu/entries/logic-ai/#shanahan:1997a)中得到了发展和扩展，它是从[Kowalski＆Sergot 1986](https://plato.stanford.edu/entries/logic-ai/#kowalski-sergot:1986a)的事件演算中推导出来的时间逻辑的背景下。 Shanahan 的版本具有与逻辑编程密切相关的优势。

#### 4.6.4 因果理论

回想一下，在耶鲁枪击事件的异常模型中，枪在执行等待动作后变为空弹夹，这个动作没有常规效果。因此，卸弹是无因果的。这表明了一种最小化没有原因的结果的解决方案。

这种策略在[Geffner 1990](https://plato.stanford.edu/entries/logic-ai/#geffner:1990a)和[1992](https://plato.stanford.edu/entries/logic-ai/#geffner:1992c)中得到了追求。从[Lifschitz 1987](https://plato.stanford.edu/entries/logic-ai/#lifschitz:1987c)开始的类似方法沿着这个方向发展了一系列的研究，不仅由 Lifschitz 及其在德克萨斯行动小组的学生和同事进行，还有其他一些人。关于这项工作和进一步的参考资料，请参见[Thielscher 1989](https://plato.stanford.edu/entries/logic-ai/#thielscher:1997a)、[Gustaffson & Doherty 1996](https://plato.stanford.edu/entries/logic-ai/#gustaffson\*j-doherty:1996a)、[Baral 1995](https://plato.stanford.edu/entries/logic-ai/#baral:1995a)、[Nakashima ](https://plato.stanford.edu/entries/logic-ai/#nakashima-etal:1997a)​\*[et al](https://plato.stanford.edu/entries/logic-ai/#nakashima-etal:1997a)\*​[. 1997](https://plato.stanford.edu/entries/logic-ai/#nakashima-etal:1997a)、[Lifschitz 1997](https://plato.stanford.edu/entries/logic-ai/#lifschitz:1997a)、[Giunchiglia & Lifschitz 1998](https://plato.stanford.edu/entries/logic-ai/#giunchiglia\*e-lifschitz:1998a)、[Lin 1995](https://plato.stanford.edu/entries/logic-ai/#lin\*fz:1995a)、[Haugh 1987](https://plato.stanford.edu/entries/logic-ai/#haugh:1987a)、[Lifschitz 1998b](https://plato.stanford.edu/entries/logic-ai/#lifschitz:1998a)、[Turner 1999](https://plato.stanford.edu/entries/logic-ai/#turner\*h:1999a)、[McCain & Turner 1995](https://plato.stanford.edu/entries/logic-ai/#mccain-turner\*h:1995a)、[Elkan 1991](https://plato.stanford.edu/entries/logic-ai/#elkan:1991b)、[McCain & Turner 1997](https://plato.stanford.edu/entries/logic-ai/#mccain-turner\*h:1997a)、[Thielscher 1996](https://plato.stanford.edu/entries/logic-ai/#thielscher:1996a)和[Gelfond & Lifschitz 1998](https://plato.stanford.edu/entries/logic-ai/#gelfond-lifschitz:1998a)。

在这里，我们描述了在[Turner 1999](https://plato.stanford.edu/entries/logic-ai/#turner_h:1999a)中提出的因果解决方案。Turner 回到了[Geffner 1992](https://plato.stanford.edu/entries/logic-ai/#geffner:1992c)的思想，但将它们放置在一个更简单的逻辑环境中，并将它们应用于更复杂的场景的形式化，以说明因果惯性与其他考虑因素的相互作用，特别是分支问题。

分支是由存在的_静态_法则引起的，这些法则将行动的直接后果与其他变化联系起来。一个启动汽车的场景说明了困难。有一个动作，即_turn-on_，它打开点火开关；假设这个动作没有前提条件。有一个表示点火开关是否打开的流畅状态，一个表示电池是否没电的流畅状态，以及一个表示发动机是否运行的流畅状态。一个静态法则说，如果点火开关打开且电池没电，发动机就会运行。（假设在这个场景中已经排除了其他故障的可能性；不启动的唯一可能原因是电池没电。）我们想考虑的是在点火开关未打开、电池未没电且汽车未运行的情况下执行_turn-on_的转换。

当然，我们希望在这种情况下推断出，_打开_的表现将导致点火开启、电池未耗尽且发动机运行的情况。但是，对立的因果定律使得这个结论变得困难。问题在于：我们可以通过对立我们唯一的静态定律得出结论，即如果点火开启而发动机未运行，则电池已耗尽。这个定律不仅在我们的场景中是正确的，而且可以用来解释启动汽车失败的尝试。但是，如果它用于预测，那么执行_打开_将产生一个“墨菲定律”的结果，其中点火开启，电池已耗尽，发动机未运行。在这个不希望的结果中，一切都有原因：电池因为因果惯性而耗尽，发动机因为对立的因果定律而未运行。

想要详细探讨在相对表达力强的行动语言中嵌入非单调解决方案的问题的读者可以参考[Gelfond & Lifschitz 1998](https://plato.stanford.edu/entries/logic-ai/#gelfond-lifschitz:1998a)。这篇论文提出了一系列越来越强大和复杂的行动语言，其中包含了对 Ramification 问题的一种相对_特设_的解决方案。[Turner 1999](https://plato.stanford.edu/entries/logic-ai/#turner_h:1999a)是在这些方面的一种改进。

Turner 的想法是将 视为一个带有非单调优先模型解释的模态运算符。在优先模型中普遍存在普遍因果关系：被引起的命题和真命题必须一致。此外，该模型必须是唯一的；它必须是与语言的外延部分一致的唯一可能性。

为了理解这个想法，回顾一下在 的可能世界解释中，世界可以与_状态描述_（即完整、一致的文字集合 ）相对应。这使我们可以将模型视为一对 ，其中 是包括 在内的解释集合。模态运算符 具有标准语义。其中 是一组解释，当且仅当对于所有 ，对于所有 都_满足_一组公式 时， 。

Turner 对于的首选模型是这样的一对：（1）满足，（2） ，（3）是满足条件（1）和（2）的唯一解释_I_，_S_。条件（2）保证了“因果关系的普遍性”；它验证了。条件（3）以最强的意义上将因果关系“基于”非因果信息（在我们感兴趣的模型中，这将涉及哪些情况下的哪些流变量），它是由这些信息唯一确定的。

尽管不明显，但 Turner 对于首选模型的描述与更一般的非单调逻辑（如默认逻辑）相关。有关详细信息，请参阅[Turner 1999](https://plato.stanford.edu/entries/logic-ai/#turner_h:1999a)。

规定行动效果的公理将这些效果视为原因；例如，装载的公理模式如下所示：

> \| **因果-装载：** | \[[25](https://plato.stanford.edu/entries/logic-ai/notes.html#note-25)] |

\| --- | --- |

行动的直接影响的后果也被视为是有原因的。而且还有两个非单调惯性公理模式：

因此，一个真命题可以是由于它是一个行动的直接或间接效果，或者因为它涉及到一个被引起的命题的持续存在而引起的。根据规定，初始条件也被认为是被引起的

为了说明这种方法的工作原理，考虑最简单的情况：一个只有一个表示流畅的常量 f 和一个表示动作的常量 wait 的语言。与耶鲁枪击问题一样，wait 没有公理；该动作始终可以执行且没有相关效果。令 s 为在 s 中执行等待动作的结果。

该理论包含一个初始条件

并且有一个陈述说初始条件是由引起的，

两个模型满足条件（1）和（2）：

在所谓的模型中，什么都不会改变。它满足条件（3），因为如果满足，则根据惯性公理，它也满足

因此， .

是一个异常的模型，其中流畅自发地停止。这个模型不满足条件（3），因为 也满足 ; 特别地，它满足了 f 的惯性公理，因为它不满足 . 因此，虽然 是一个首选模型，但 不是。

Turner 的方法通过赋予因果关系以下形式来避免对偶问题：

当对偶时，这变成了

不具有因果定律的形式。

“普遍因果原则”在解释定性常识推理中一系列问题时的明显有用性应该引起哲学家的兴趣。而由 Geffner 发起并由 Turner 发展起来的因果理论具有许多有趣的详细特征。例如，尽管关于因果关系的哲学研究集中在因果关系本身上，Taylor 的方法表明仅凭非关系性的因果谓词就可以做很多事情。

基于行动驱动的动力学可以用来构建条件逻辑的模型。[Lent and Thomason 2015](https://plato.stanford.edu/entries/logic-ai/#lent-thomason:2015a)使用了 Turner 的因果方法，在前提是行动表达式和简单的非模态条件的合取的受限情况下提供了这样的模型。对框架问题的明确解决提供了反事实的预测，并自动提供了条件语义。

[Morgenstern 1996](https://plato.stanford.edu/entries/logic-ai/#morgenstern:1996a)对于关于行动推理的因果方法提出了两个主要批评：它没有给出一个充分的解释\[[26](https://plato.stanford.edu/entries/logic-ai/notes.html#note-26)]，而且情境演算本身的范围有限。这两个批评都不是致命的；两者都可以被视为未来研究的挑战。

对于另一种基于输入输出逻辑（Makinson & van der Torre 2000）的非单调因果推理方法，请参见[Bochman 2004](https://plato.stanford.edu/entries/logic-ai/#bochman:2004b)。

## 5. 因果推理

当然，因果推理本身就是一个重要的主题。例如，它在关于设备的定性推理中起到了作用。赫伯特·西蒙（Herbert Simon）在这个领域的工作可以追溯到 1950 年代：参见[Simon 1952](https://plato.stanford.edu/entries/logic-ai/#simon_ha:1952a)；[1977](https://plato.stanford.edu/entries/logic-ai/#simon_ha:1977a)；[Iwasaki & Simon 1986](https://plato.stanford.edu/entries/logic-ai/#iwasaki-simon:1986a)。朱迪亚·珀尔（Judea Pearl）及其学生和合作者负责对因果模型和因果推理进行最持久和成功的研究。珀尔和他的许多合著者是计算机科学家，但统计学家和哲学家也为这个研究项目做出了贡献。我们在这里不再讨论因果网络。请参见[Halpern 2016](https://plato.stanford.edu/entries/logic-ai/#halpern_jy:2016a)和[Hitchcock 2022](https://plato.stanford.edu/entries/logic-ai/#hitchcock_c:2022a)。

## 6. 空间推理

在哲学逻辑中，与空间推理相关的预计算文献相对较少。但是，在应用领域中支持关于空间的计算推理，如运动规划和物理空间中的操作，图像的索引和检索，地理信息系统，图解推理以及高级图形程序的设计的需求，导致了对空间表示和空间推理的新兴兴趣。当然，几何传统为这一企业提供了异常强大的数学资源。但是，与许多其他与人工智能相关的领域一样，这些理论是否适用于这些应用并不清楚，许多计算机科学家认为开发新的基础是值得的。其中一些工作与上述定性推理研究密切相关，并且在某些情况下由同一人员进行。当然，还与哲学逻辑中的部分论文有关。

空间推理的人工智能文献非常广泛；有关这里未讨论的一些领域的参考文献，请参见[Stock 1997](https://plato.stanford.edu/entries/logic-ai/#stock:1997a)、[Kapur & Mundy 1988](https://plato.stanford.edu/entries/logic-ai/#kapur\*d-etal:1988a)、[Hammer 1995](https://plato.stanford.edu/entries/logic-ai/#hammer:1995a)、[Wilson 1998](https://plato.stanford.edu/entries/logic-ai/#wilson\*rh:1998a)、[Osherson & Lasnik 1990](https://plato.stanford.edu/entries/logic-ai/#osherson-lasnik:1990b)、[Renz & Nebel 1999](https://plato.stanford.edu/entries/logic-ai/#renz-nebel:1999a)、[Yeap & Jeffries 1999](https://plato.stanford.edu/entries/logic-ai/#yeap-jeffreys:1999a)、[Chen 1990](https://plato.stanford.edu/entries/logic-ai/#chen\*s:1990a)、[Burger & Bhanu 1992](https://plato.stanford.edu/entries/logic-ai/#burger\*w-bhanu:1992a)、[Allwein & Barwise 1996](https://plato.stanford.edu/entries/logic-ai/#allwein-barwise:1996a)、[Glasgow ](https://plato.stanford.edu/entries/logic-ai/#glasgow-etal:1995a)​\*[et al](https://plato.stanford.edu/entries/logic-ai/#glasgow-etal:1995a)\*​[. 1995](https://plato.stanford.edu/entries/logic-ai/#glasgow-etal:1995a)和[Kosslyn 1990](https://plato.stanford.edu/entries/logic-ai/#kosslyn:1990a)。在这里，我们只讨论与哲学逻辑中的并行工作密切相关的一个趋势。

二十世纪初，Stanisław Leśniewski 在逻辑文献中引入了对空间的定性方法；参见[Leśniewski 1916](https://plato.stanford.edu/entries/logic-ai/#lesniewski:1916a)，该文提出了一个关于物理个体之间的部分-整体关系的_mereology_或定性理论的概念。这种关于区域之间关系的逻辑理论的思想在哲学逻辑中仍然活跃，尽管吸引了相对较少的研究者。哲学文献中的更近期的研究，特别是[Casati & Varzi 1999](https://plato.stanford.edu/entries/logic-ai/#casati-varzi:1999a)、[Simons 1987](https://plato.stanford.edu/entries/logic-ai/#simons_p:1987a)、[Casati & Varzi 1996](https://plato.stanford.edu/entries/logic-ai/#casati-varzi:1996a)、[Clarke 1981](https://plato.stanford.edu/entries/logic-ai/#clarke_b:1981a)和[Clarke 1985](https://plato.stanford.edu/entries/logic-ai/#clarke_b:1985a)，对当前的计算工作产生了影响。

利兹大学的计算机科学家们开发的区域连接演算（RCC）是基于一种原始的空间区域关系的：对于 ，其预期解释是 和 的值的闭包的交集非空。详细信息和参考文献请参见[Cohn ](https://plato.stanford.edu/entries/logic-ai/#cohn\*ag-etal:1997a)​\*[et al](https://plato.stanford.edu/entries/logic-ai/#cohn\*ag-etal:1997a)_​_[_. 1997_](https://plato.stanford.edu/entries/logic-ai/#cohn\*ag-etal:1997a)_和_[_Cohn 1996_](https://plato.stanford.edu/entries/logic-ai/#cohn\*ag-:1997a)_。用这个简单的原始概念可以定义的范围令人惊讶，但技术细节很快变得复杂；例如，请参见_[_Gotts 1994_](https://plato.stanford.edu/entries/logic-ai/#gotts:1994a)_和_[_Gotts 1996_](https://plato.stanford.edu/entries/logic-ai/#gotts:1996a)_。_[_Cohn_ ](https://plato.stanford.edu/entries/logic-ai/#cohn\*ag-etal:1997a)_​_[et al](https://plato.stanford.edu/entries/logic-ai/#cohn\*ag-etal:1997a)\*​[. 1997](https://plato.stanford.edu/entries/logic-ai/#cohn\*ag-etal:1997a)中引用的工作描述了基于 RCC 及其扩展的直觉命题逻辑中的约束传播技术和编码作为支持实现推理的方法。基于 RCC 的最新工作涉及表示和推理运动，当然这涉及到空间和时间问题的结合；请参见[Wolter & Zakharyaschev 2000](https://plato.stanford.edu/entries/logic-ai/#wolter-zakharyaschev:2000a)。有关运动的定性理论的更多信息以及其他方法的参考，请参见[Galton 1997](https://plato.stanford.edu/entries/logic-ai/#galton:1997a)。

## 7. 关于知识的推理

[Hintikka 1962](https://plato.stanford.edu/entries/logic-ai/#hintikka:1962a)是认识逻辑的经典来源，它从模态逻辑中汲取灵感。因此，该工作集中于如何用模态运算符来建模单个主体的态度。由于可能世界语义适应了替代的模态运算符，Hintikka 详细讨论了哪些替代方案适用于知识和信念，并选择了模态逻辑。有关更多背景和后续发展的信息，请参阅[Rendsvig＆Symons 2022](https://plato.stanford.edu/entries/logic-ai/#rendsvig_r-symons_j)。而[Laux＆Wansing 1995](https://plato.stanford.edu/entries/logic-ai/#laux-wansing:1995a)则讨论了 1994 年以前的哲学和计算传统。

认识论态度在博弈论以及逻辑人工智能中起着重要作用，并且在这两个应用领域中的工作要么与 Hintikka 的模态方法相平行，要么受其影响。在几篇论文中（包括[McCarthy 1979](https://plato.stanford.edu/entries/logic-ai/#mccarthy_j1:1979c1)），约翰·麦卡锡推荐了一种使用一阶逻辑来形式化知识的方法，但是这种方法明确地量化了个体概念等内容。然而，在这里，我们讨论的是大多数计算机科学家采取的方法，他们与麦卡锡不同，使用模态逻辑，但与 Hintikka 不同，他们专注于多主体情况。

[Fagin ](https://plato.stanford.edu/entries/logic-ai/#fagin-etal:1995b)​\*[et al](https://plato.stanford.edu/entries/logic-ai/#fagin-etal:1995b)_​_[_. 1995_](https://plato.stanford.edu/entries/logic-ai/#fagin-etal:1995b)_简化了底层的模态性，使用 表示知识（或者使用 表示信念），但是专注于代理人对彼此态度的看法。这样的逻辑在分布式系统的分析中有直接应用，动态系统通过消息行为实现变化，这些行为根据由通信协议确定的规则修改代理人的知识。多主体认识论逻辑是应用需求为逻辑学做出重要贡献的另一个例子。_[_Fagin_ ](https://plato.stanford.edu/entries/logic-ai/#fagin-etal:1995b)_​_[et al](https://plato.stanford.edu/entries/logic-ai/#fagin-etal:1995b)\*​[. 1995](https://plato.stanford.edu/entries/logic-ai/#fagin-etal:1995b)是任何对这个主题感兴趣的人必读的重要资料。认识论逻辑的其他应用工作记录在从 1986 年开始的一系列会议的论文集中，其中包括[Halpern 1986](https://plato.stanford.edu/entries/logic-ai/#halpern:1986c)。这些会议记录了哲学家与计算机科学中的逻辑学家之间最成功的合作之一，尽管参与的哲学家群体相对较小。这些会议的重点逐渐从计算机科学转向经济学。

计算机科学家习惯将推理视为符号表示的操作。而正是由于人工智能，有限理性成为一个严肃关注的话题，为哲学和经济学的理想化提供了一种对立面。\[[27](https://plato.stanford.edu/entries/logic-ai/notes.html#note-27)] 因此，你可能会认为，在人工智能领域，认知态度在逻辑推论下的封闭性将不受欢迎。但事实并非如此；在涉及的领域中，可能世界方法不仅是主导理论，而且甚至在机器人应用中得到了提倡；参见[Rosenschein & Kaelbling 1995](https://plato.stanford.edu/entries/logic-ai/#rosenschein_sj-kaelbling:1995a); [Rosenschein 1989](https://plato.stanford.edu/entries/logic-ai/#rosenschein_sj:1989a)。然而，超内涵性问题在人工智能文献中得到了研究；参见[Perlis 1985](https://plato.stanford.edu/entries/logic-ai/#perlis:1985a); [Konolige 1986](https://plato.stanford.edu/entries/logic-ai/#konolige:1986a); [Lakemeyer 1997](https://plato.stanford.edu/entries/logic-ai/#lakemeyer:1994a); [Levesque 1984](https://plato.stanford.edu/entries/logic-ai/#levesque:1984b))。尽管人工智能领域对这一主题的研究提供了新的理论和一些新的结果，但尚未出现主导方法。

## 8. 迈向常识的形式化

约翰·麦卡锡（John McCarthy）明确的长期目标——对常识知识的形式化——被相对较小的人工智能研究者子群体所采纳和追求。更大的一个群体（涉及知识表示、认知机器人和定性物理学的人员）的工作为支持更大目标的专门项目做出了贡献。任何类似于对常识的形式化的工作，远未完成，以至于——如果有可能的话——我们无法猜测何时能够完成这个任务。但至少这个努力已经使我们更好地了解如何开发一种可行的方法来形式化常识的例子和领域，以及如何将更大的问题分解为更可管理的部分。

这个主题的第一本专著，[戴维斯 1991](https://plato.stanford.edu/entries/logic-ai/#davis_e:1991a)，将这个总体问题分为以下子主题。

1. 数量和测量
2. 时间
3. 空间
4. 物理学
5. 心智
6. 计划和目标
7. 社会

这些主题中的前四个与定性物理学重叠。有关这个相关子领域的更多信息，请参阅[Weld & de Kleer 1990](https://plato.stanford.edu/entries/logic-ai/#weld-dekleer:1990a)、[Davis 2008](https://plato.stanford.edu/entries/logic-ai/#davis_e:2008b)和[Forbus 2008](https://plato.stanford.edu/entries/logic-ai/#forbus_kd:2008b)。

项目 6 是戴维斯七项中研究最广泛的。[第 4 节](https://plato.stanford.edu/entries/logic-ai/#ReasAbouActiChan)讨论了这项工作的早期阶段。关于规划和目标形成的研究有着丰富的后续历史，后来的工作融入了对自主代理人规划架构的研究。项目 5 和项目 7 的研究较少。虽然人工社会和人工智能架构已经得到了深入研究，但对常识心理学和常识人际推理的形式化工作相对较少。然而，可以参考[Davis 1991](https://plato.stanford.edu/entries/logic-ai/#davis_e:1991a)和[Hobbs & Gordon 2005](https://plato.stanford.edu/entries/logic-ai/#hobbs-gordon_a:2005a)。

关于常识挑战的书籍详细论述，请参见[Mueller, 2006](https://plato.stanford.edu/entries/logic-ai/#mueller_et:2006a)。该书超过一半的篇幅用于推理行为和变化。书中还有关于空间和心理状态的简短章节，以及对非单调推理的较长论述。

计算机科学的研究几乎完全受到资金的驱动。常识推理的形式化从未得到过大量的资金支持，但直到约翰·麦卡锡在 2011 年去世之前，仍有少量的资金可用。常识兴趣小组在 1998 年、2001 年、2003 年、2005 年、2007 年和 2009 年定期举行会议。2003 年会议上提交的许多论文在 2004 年以扩展形式收集在《人工智能》第 153 卷中。[戴维斯和莫根斯特恩 2004](https://plato.stanford.edu/entries/logic-ai/#davis_e-morgenstern:2004a)是这个系列的引言，提供了对常识形式化和常识推理机械化研究的有用调查和赞赏。[常识问题页面](http://www-formal.stanford.edu/leora/commonsense/)仍在维护，但从 2010 年至今，该领域的活动一直较为缓慢，除了相关的知识表示研究。

借鉴计算机科学其他领域的思想，常识社区试图开发一系列“基准问题”：公开一些困难但不是不可能解决的问题，并鼓励解决方案的创造和比较。迄今为止，可能有最详细文档的问题是欧内斯特·戴维斯的“打蛋问题”。在[常识问题页面](http://www-formal.stanford.edu/leora/commonsense/)中，问题被表述如下。

一个厨师正在将生鸡蛋敲在一个玻璃碗的边缘上。如果操作正确，鸡蛋撞击碗的边缘会将蛋壳劈成两半。厨师将鸡蛋悬在碗上方，用手指分开蛋壳的两半，扩大裂缝，鸡蛋的内容物会轻轻地掉进碗里。最终的结果是整个鸡蛋的内容物都在碗里，鸡蛋没有破裂，而蛋壳的两半在厨师的手指间。

_变体：_ 如果厨师将鸡蛋迅速撞击会发生什么？如果非常缓慢撞击会怎样？厨师将鸡蛋放在碗里并用手稳定施加压力会怎样？厨师在破裂鸡蛋后试图像剥煮熟鸡蛋一样剥离鸡蛋的内容物会怎样？碗是由活页纸制成的会怎样？由软黏土制成的会怎样？碗比鸡蛋小会怎样？碗倒置会怎样？厨师用煮熟的鸡蛋尝试这个过程会怎样？用椰子？用 M\&M 巧克力？

随着问题本身，三个解决方案被发布：[Shanahan 2004](https://plato.stanford.edu/entries/logic-ai/#shanahan:2004a)，[Lifschitz 1998a](https://plato.stanford.edu/entries/logic-ai/#lifschitz:1998b)，以及[Morgenstern 2001](https://plato.stanford.edu/entries/logic-ai/#morgenstern:2001a)的一个版本。比较这些解决方案是有益的，相似之处超过了差异。所有的作者都认为这是一个规划问题，并在形式化中使用了情境演算或事件演算的版本。每个公理化都是模块化的，例如，有专门用于相关几何和材料属性的模块。每个作者都通过展示公理支持在简单情况下破解鸡蛋计划的正确性来提供了“概念证明”。没有一个作者考虑到戴维斯对问题的所有阐述，但公理是以阐述为目标并考虑了一些阐述。目前尚不清楚任何作者是否实际实施了他们的形式化（例如，使用定理证明器、动画或机器人控制器）。

破蛋的例子引出了如何评估常识问题的中等规模形式化的问题。莫根斯特恩和沙纳汉明确表达了这个问题。莫根斯特恩建议重要的标准是（1）认识论的充分性（与直觉推理相一致，由从事其中的人体验到），（2）对真实世界的忠实性，（3）可重用性和（4）阐述容忍度。前两个标准可能过于主观，不太有用。沙纳汉另外增加了（5）可用性。然而，从长远来看，更重要的是通过生成场景并与真实世界或模拟机器人代理进行测试和评估的自动化。

任何一种即使是稍微成功的形式化常识的尝试，很快就会遇到前所未有的规模问题，这会带来与软件工程类似的挑战。即使是相当小的程序和公理系统也很难理解，并且可能产生意想不到的结果。创建和维护它们可能需要开发团队，引发组织问题，以及与模块集成、大型系统的维护和测试以及从不同知识源生成公理的问题。尽管对大规模软件系统的需求为这类企业提供了最佳实践，但即使有充足的资金，人类专业知识可能仍然不足以完成这项任务。

可以想象有两种自动化创建形式化的方法。(1) 知识表示社区创建的大规模本体可以被挖掘以获取公理，或者(2) 可以使用机器学习技术直接从语料库中创建公理。第一种方法将涉及与知识整合有关的前所未有的困难。用于解释机器学习产生的产品的技术\[[28](https://plato.stanford.edu/entries/logic-ai/notes.html#note-28)]为第二种方法提供了一些希望，但这些技术的输出与逻辑公理完全不同，将它们转换的任务似乎是具有挑战性的，至少可以这么说。

所有这些与哲学分析方法形成鲜明对比。分析规模较小，没有以实现为目标进行形式化，并且很少或根本不关注它们的整合。哲学家从未选择与规划领域相当的特定领域，并进行持续的努力来形式化它，同时还进行了相应的逻辑发展。

很容易怀疑许多一直困扰着分析哲学的主题是否展示了类似于人工智能研究人员试图形式化关于行动及其影响的推理所出现的复杂性。如果人工智能研究人员能够为像[Common Sense Problem Page](http://www-formal.stanford.edu/leora/commonsense/)中列出的那些问题开发并部分自动化形式化方法，那肯定会是对分析哲学所取得成就的巨大进步。但也许哲学家可以庆幸这被证明是一个如此困难的挑战。

## 9.基于逻辑的人工智能

### 9.1 基于概念的分类

传统上，为了通用推理而表示大量领域信息的任务一直是知识表示中最重要的领域之一。利用领域的直观分类组织的系统对此非常有用；分类层次不仅有助于组织知识获取过程，还提供了与基于规则的推理的有用连接。

对于那些以复杂定义作为组织信息的自然方式的领域，基于概念定义的知识工程服务非常成功。像无变量版本的一阶逻辑一样（参见，例如，[Quine 1960](https://plato.stanford.edu/entries/logic-ai/#quine:1960a)），这些系统以概念或一阶谓词为中心，并提供了一些机制来定义它们。与这些“分类逻辑”相关的基本算法是一个分类器，它输入一组定义并输出定义和原始概念之间的蕴涵关系。有关这些系统的背景，请参见[Woods & Schmolze 1992](https://plato.stanford.edu/entries/logic-ai/#woods\*wa-schmolze:1992a)和[Brachman ](https://plato.stanford.edu/entries/logic-ai/#brachman-etal:1991a)​\*[et al](https://plato.stanford.edu/entries/logic-ai/#brachman-etal:1991a)\*​[. 1991](https://plato.stanford.edu/entries/logic-ai/#brachman-etal:1991a)。

最简单的分类逻辑可以被看作是具有复杂谓词的一阶逻辑的子系统。但是它们已经以许多方式进行了扩展，并且许多这些扩展引发的问题在许多情况下与哲学逻辑中的主题重叠。

### 9.2 非单调继承

当允许将一个领域组织成层次结构并允许有例外时，会出现更复杂的逻辑问题。探索如何使分类逻辑非单调是一种处理这个主题的方法；但是，_非单调继承_是一个独立的主题。尽管与非单调逻辑有很强的关联，非单调继承更多地依赖于基于图形的表示，而不是传统的逻辑思想，并且似乎提供了一种更细粒度的非单调推理方法，引发了全新的问题，并且很快变得棘手。因此，非单调继承系统往往表达能力较弱，并且它们与更强大的非单调逻辑之间的关系从未完全澄清。有关此主题的背景，请参阅[Thomason 1992](https://plato.stanford.edu/entries/logic-ai/#thomason_rh:1992a)和[Horty 1994](https://plato.stanford.edu/entries/logic-ai/#horty:1994a)。

## 10. 上下文推理

在处理表达式解释中的语境效应的哲学逻辑传统中，以及在动态逻辑的最新传统中，语境主要被形式化为对变量的值的分配，并且语言的设计旨在使对语境的推理要么非常有限，要么根本不可能。

人工智能领域对表示大型和明显异构领域以及整合不同知识源的关注，以及对形式化常识的兴趣（如上文[2.2 节](https://plato.stanford.edu/entries/logic-ai/#FormCommSens)所讨论的），导致人工智能社区对更明确地考虑语境的形式化语言产生了兴趣。

在[麦卡锡 1993b](https://plato.stanford.edu/entries/logic-ai/#mccarthy_j1:1993b)中，麦卡锡推荐研究包含一个构造的语言

其中 被读作“是真的”。这类似于情境演算的 构造，但现在 代表一个上下文，而 是一个可能复杂的命题表示，许多人（包括麦卡锡）认为它指的是一个句子。

这里既有模态逻辑的类比，也有带有明确真值谓词的语言。但是，对于上下文逻辑的应用所设想的机会和问题在很多方面都是新的。在麦卡锡最初的建议之后，关于上下文逻辑的研究包括[McCarthy & Buvac 1998](https://plato.stanford.edu/entries/logic-ai/#mccarthy\*j1-buvac:1995a2)、[Guha 1991](https://plato.stanford.edu/entries/logic-ai/#guha:1991a)，以及会议论文集[Akman ](https://plato.stanford.edu/entries/logic-ai/#akman-etal:2001a)​\*[et al](https://plato.stanford.edu/entries/logic-ai/#akman-etal:2001a)_​_[_. 2001_](https://plato.stanford.edu/entries/logic-ai/#akman-etal:2001a)_和_[_Bouquet_ ](https://plato.stanford.edu/entries/logic-ai/#bouquet-etal:1999a)_​_[et al](https://plato.stanford.edu/entries/logic-ai/#bouquet-etal:1999a)\*​[. 1999](https://plato.stanford.edu/entries/logic-ai/#bouquet-etal:1999a)中的一些论文。关于麦卡锡建议所激发的 Richard Montague 的内涵逻辑的扩展，请参见[Thomason 2003](https://plato.stanford.edu/entries/logic-ai/#thomason\*rh:2003a)和[2005](https://plato.stanford.edu/entries/logic-ai/#thomason\*rh:2005a)。

由于某种原因，关于上下文明确形式化的研究在计算机界并没有得到深入的追求，但是对于信息整合的应用，请参见[Snidaro 2019](https://plato.stanford.edu/entries/logic-ai/#snidaro_l-etal:2019a)。

哲学对于语境的兴趣，尤其是对语境与命题态度和情态动词的相互作用的兴趣，仍然很强烈；但是，麦卡锡设想的非常普遍的语境逻辑框架尚未被哲学家们采纳。

## 11. 实践理性的逻辑理论前景

有理由希望，在人工智能中将逻辑方法与规划应用相结合，可以实现对实践推理的更全面和更充分的理论发展，这是迄今为止不可能实现的。与许多与常识推理有关的问题一样，所需的形式化的规模和复杂性超出了哲学逻辑的传统技术。然而，通过实施和测试这些形式化的计算方法，并且借助认知机器人等领域提供的实验室来开发和测试想法，我们可以希望在这个问题上取得根本性的进展，这个问题自亚里士多德首次提出以来几乎没有取得任何进展：如何设计一个真正适用于现实问题的实践推理的形式化。

冯·赖特（见[von Wright 1983](https://plato.stanford.edu/entries/logic-ai/#vonwright:1983a)）开始的关于德意逻辑的经典工作是一个思路的来源；参见（[Horty 2001](https://plato.stanford.edu/entries/logic-ai/#horty:2001a)和[van der Torre 1997](https://plato.stanford.edu/entries/logic-ai/#vandertorre-tan:1997b)）。事实上，正如最近的德意逻辑研究所显示的，非单调逻辑为经典德意逻辑提供了一种自然且有用的补充。最近的一项工作（[Horty 2012](https://plato.stanford.edu/entries/logic-ai/#horty:2012a)）试图将德意逻辑基于 Reiter 的默认逻辑的优先版本。

当这些思想与在上述[第 4 节](https://plato.stanford.edu/entries/logic-ai/#ReasAbouActiChan)中讨论的关于规划和行动推理基础的工作相结合时，我们开始看到更加强大的实践推理模型。但是，通过将形式化扩展到包括偏好和意图，这一发展可以进一步推进。\[[30](https://plato.stanford.edu/entries/logic-ai/notes.html#note-30)]

最终，我们需要一个智能推理和行动代理的模型。开发这样的模型不一定完全是逻辑的问题，但根据一种思想流派，逻辑在其中起着核心作用；例如，参见[Baral & Gelfond 2000](https://plato.stanford.edu/entries/logic-ai/#baral-gelfond:2000a)、[Wobcke ](https://plato.stanford.edu/entries/logic-ai/#wobcke-etal:1998a)​\*[et al](https://plato.stanford.edu/entries/logic-ai/#wobcke-etal:1998a)_​_[_. 1998_](https://plato.stanford.edu/entries/logic-ai/#wobcke-etal:1998a)_、_[_Burkhard_ ](https://plato.stanford.edu/entries/logic-ai/#burkhard\*hd-etal:1998a)_​_[et al](https://plato.stanford.edu/entries/logic-ai/#burkhard\*hd-etal:1998a)\*​[. 1998](https://plato.stanford.edu/entries/logic-ai/#burkhard\*hd-etal:1998a)、[Wooldridge 2000](https://plato.stanford.edu/entries/logic-ai/#wooldridge\*mj:2000a)、[Thielscher 2005](https://plato.stanford.edu/entries/logic-ai/#thielscher\*m:2005a)和[Levesque & Lakemeyer 2008](https://plato.stanford.edu/entries/logic-ai/#levesque\*hj-lakemeyer\*g:2008a)。

## 12. 阅读材料

[Minker 2000b](https://plato.stanford.edu/entries/logic-ai/#minker:2000b) 是一本关于基于逻辑的人工智能领域的综合性调研论文集，包括对文献的广泛引用和原创贡献。杰克·明克尔（Jack Minker）的引言，[Minker 2000a](https://plato.stanford.edu/entries/logic-ai/#minker:2000a)，对该领域提供了有用的导向。对于希望进一步研究这个主题的读者来说，这本书是一个很好的起点。[Brachman & Levesque 2004](https://plato.stanford.edu/entries/logic-ai/#brachman-levesque:2004a) 以教科书的形式介绍了知识表示领域。[Davis 1991](https://plato.stanford.edu/entries/logic-ai/#davis_e:1991a) 和 [Mueller 2006](https://plato.stanford.edu/entries/logic-ai/#mueller_et:2006a) 是关于形式化常识推理这一具有挑战性问题的专著。[Straßer & Antonelli 2012](https://plato.stanford.edu/entries/logic-ai/#strasser_c-antonelli_ga:2019a) 是对非单调逻辑感兴趣的读者的良好入门点，而 [Shanahan 2009](https://plato.stanford.edu/entries/logic-ai/#shanahan:2009a) 则是对框架问题的有用讨论。[Wooldridge 2000](https://plato.stanford.edu/entries/logic-ai/#wooldridge_mj:2000a) 讨论了理性代理的逻辑形式化。

知识表示与推理会议的论文集提供了从 1989 年至今人工智能领域逻辑研究的最详细记录：[Brachman ](https://plato.stanford.edu/entries/logic-ai/#brachman-etal:1989b)​\*[et al](https://plato.stanford.edu/entries/logic-ai/#brachman-etal:1989b)_​_[_. 1989_](https://plato.stanford.edu/entries/logic-ai/#brachman-etal:1989b)_、_[_Allen_ ](https://plato.stanford.edu/entries/logic-ai/#allen\*jf-etal:1991a)_​_[et al](https://plato.stanford.edu/entries/logic-ai/#allen\*jf-etal:1991a)_​_[_. 1991_](https://plato.stanford.edu/entries/logic-ai/#allen\*jf-etal:1991a)_、_[_Nebel_ ](https://plato.stanford.edu/entries/logic-ai/#nebel-etal:1992a)_​_[et al](https://plato.stanford.edu/entries/logic-ai/#nebel-etal:1992a)_​_[_. 1992_](https://plato.stanford.edu/entries/logic-ai/#nebel-etal:1992a)_、_[_Doyle_ ](https://plato.stanford.edu/entries/logic-ai/#doyle\*j-etal:1994a)_​_[et al](https://plato.stanford.edu/entries/logic-ai/#doyle\*j-etal:1994a)_​_[_. 1994_](https://plato.stanford.edu/entries/logic-ai/#doyle\*j-etal:1994a)_、_[_Aiello_ ](https://plato.stanford.edu/entries/logic-ai/#aiello-etal:1996a)_​_[et al](https://plato.stanford.edu/entries/logic-ai/#aiello-etal:1996a)_​_[_. 1996_](https://plato.stanford.edu/entries/logic-ai/#aiello-etal:1996a)_、_[_Cohn_ ](https://plato.stanford.edu/entries/logic-ai/#cohn\*ag-etal:1998a)_​_[et al](https://plato.stanford.edu/entries/logic-ai/#cohn\*ag-etal:1998a)_​_[_. 1998_](https://plato.stanford.edu/entries/logic-ai/#cohn\*ag-etal:1998a)_、_[_Cohn_ ](https://plato.stanford.edu/entries/logic-ai/#cohn\*ag-etal:2000a)_​_[et al](https://plato.stanford.edu/entries/logic-ai/#cohn\*ag-etal:2000a)_​_[_. 2000_](https://plato.stanford.edu/entries/logic-ai/#cohn\*ag-etal:2000a)_、_[_Fensel_ ](https://plato.stanford.edu/entries/logic-ai/#fensel-etal:2002a)_​_[et al](https://plato.stanford.edu/entries/logic-ai/#fensel-etal:2002a)_​_[_. 2002_](https://plato.stanford.edu/entries/logic-ai/#fensel-etal:2002a)_、_[_Dubois_ ](https://plato.stanford.edu/entries/logic-ai/#dubois\*d-etal:2004a)_​_[et al](https://plato.stanford.edu/entries/logic-ai/#dubois\*d-etal:2004a)_​_[_. 2004_](https://plato.stanford.edu/entries/logic-ai/#dubois\*d-etal:2004a)_、_[_Doherty_ ](https://plato.stanford.edu/entries/logic-ai/#doherty-etal:2006a)_​_[et al](https://plato.stanford.edu/entries/logic-ai/#doherty-etal:2006a)_​_[_. 2006_](https://plato.stanford.edu/entries/logic-ai/#doherty-etal:2006a)_、_[_Brewka & Lang 2008_](https://plato.stanford.edu/entries/logic-ai/#brewka-lang\*j:2008a)_、_[_Lin_ ](https://plato.stanford.edu/entries/logic-ai/#lin\*fz-etal:2010a)_​_[et al](https://plato.stanford.edu/entries/logic-ai/#lin\*fz-etal:2010a)_​_[_. 2010_](https://plato.stanford.edu/entries/logic-ai/#lin\*fz-etal:2010a)_、_[_Eiter_ ](https://plato.stanford.edu/entries/logic-ai/#eiter\*t-etal:2012a)_​_[et al](https://plato.stanford.edu/entries/logic-ai/#eiter\*t-etal:2012a)_​_[_. 2012_](https://plato.stanford.edu/entries/logic-ai/#eiter\*t-etal:2012a)_、_[_Baral_ ](https://plato.stanford.edu/entries/logic-ai/#baral-etal:2014a)_​_[et al](https://plato.stanford.edu/entries/logic-ai/#baral-etal:2014a)_​_[_. 2014_](https://plato.stanford.edu/entries/logic-ai/#baral-etal:2014a)_、_[_Baral_ ](https://plato.stanford.edu/entries/logic-ai/#baral-etal:2016a)_​_[et al](https://plato.stanford.edu/entries/logic-ai/#baral-etal:2016a)_​_[_. 2016_](https://plato.stanford.edu/entries/logic-ai/#baral-etal:2016a)_、_[_Thielscher_ ](https://plato.stanford.edu/entries/logic-ai/#thielscher\*m-etal:2018a)_​_[et al](https://plato.stanford.edu/entries/logic-ai/#thielscher\*m-etal:2018a)_​_[_. 2018_](https://plato.stanford.edu/entries/logic-ai/#thielscher\*m-etal:2018a)_、_[_Calvanese_ ](https://plato.stanford.edu/entries/logic-ai/#calvanese\*d-etal:2020a)_​_[et al](https://plato.stanford.edu/entries/logic-ai/#calvanese\*d-etal:2020a)_​_[_. 2020_](https://plato.stanford.edu/entries/logic-ai/#calvanese\*d-etal:2020a)_、_[_Bienvenu_ ](https://plato.stanford.edu/entries/logic-ai/#bienvenu\*m-etal:2021a)_​_[et al](https://plato.stanford.edu/entries/logic-ai/#bienvenu\*m-etal:2021a)_​_[_. 2021_](https://plato.stanford.edu/entries/logic-ai/#bienvenu\*m-etal:2021a)_和_[_Kern-Isberner_ ](https://plato.stanford.edu/entries/logic-ai/#kernisberner\*g-etal:2022a)_​_[et al](https://plato.stanford.edu/entries/logic-ai/#kernisberner\*g-etal:2022a)\*​[. 2022](https://plato.stanford.edu/entries/logic-ai/#kernisberner\*g-etal:2022a)。

## Bibliography

* Aiello, Luigia Carlucci, Doyle, Jon, and Shapiro, Stuart (eds.), 1996, _KR’96: Principles of Knowledge Representation and Reasoning_, San Francisco: Morgan Kaufmann.
* Akman, Varol, Bouquet, Paolo, Thomason, Richmond, and Young, Roger A. (eds.), 2001, _Modeling and Using Context_, Berlin: Springer-Verlag.
* Alcourrón, Carlos E., 1995, “Defeasible logics: Demarcation and affinities”, in _Conditionals: From Philosophy to Computer Science_, Gabriella Crocco, Luis Fariñas del Cerro, and A. Herzig (eds.), Oxford: Oxford University Press, 67–102.
* Allen, James F., Fikes, Richard, and Sandewall, Erik (eds.), 1989, _KR’89: Principles of Knowledge Representation and Reasoning_, San Francisco: Morgan Kaufmann.
* Allen, James F., Fikes, Richard, and Sandewall, Erik (eds.), 1991, _KR’91: Principles of Knowledge Representation and Reasoning_, San Mateo, California: Morgan Kaufmann.
* Allwein, Gerard and Barwise, Jon (eds.), 1996, _Logical Reasoning with Diagrams_, Oxford: Oxford University Press.
* Amarel, Saul, 1968, “On representations of problems of reasoning about actions”, in _Machine Intelligence 3_, Donald Mitchie (ed.), Chichester, England: Ellis Horwood, 131–171.
* Antoniou, Grigoris, 1997, _Nonmonotonic Reasoning_, Cambridge, Massachusetts: The MIT Press.
* Antoniou, Grigoris and Wang, Kewen, 2007, “Default logic”, in _Handbook of the History of Logic, Volume 8: The Many-Valued and Nonmonotonic Turn in Logic_, Dov Gabbay and John Woods (eds.), Amsterdam: Elsevier Science Publishers, 517–555.
* Arlo-Costa, Horacio and Shapiro, Scott, 1992, “Maps between nonmonotonic logic and conditional logic”, in _KR’92. Principles of Knowledge Representation and Reasoning: Proceedings of the Third International Conference_, Bernhard Nebel, Charles Rich, and William Swartout (eds.), San Mateo, California: Morgan Kaufmann, 553–564.
* Asher, Nicholas, 1995, “Commonsense entailment: A conditional logic for some generics”, in _Conditionals: From Philosophy to Computer Science_, Gabriella Crocco, Luis Fariñas del Cerro, and A. Herzig (eds.), Oxford: Oxford University Press, 103–145.
* Asher, Nicholas and Morreau, Michael, 1991, “Commonsense entailment: a modal theory of nonmonotonic reasoning”, in _Proceedings of the Twelfth International Joint Conference on Artificial Intelligence_, J. Mylopoulos and R. Reiter (eds.), Los Altos, California: Morgan Kaufmann, 387–392.
* Austin, John L., 1961, “A plea for excuses”, in _Philosophical Papers_, J.O. Urmson and G.J. Warnock (eds.), Oxford: Oxford University Press.
* Bacchus, Fahiem, Halpern, Joseph Y., and Levesque, Hector J., 1999, “Reasoning about noisy sensors and effectors in the situation calculus”, _Artificial Intelligence_, 111(1–2): 171–208.
* Baker, Andrew B., 1989, “A simple solution to the Yale shooting problem”, in _KR’89: Principles of Knowledge Representation and Reasoning_, Ronald J. Brachman, Hector J. Levesque, and Raymond Reiter (eds.), San Mateo, California: Morgan Kaufmann, 11–20.
* Baral, Chitta, 1995, “Reasoning about actions: Non-deterministic effects, constraints, and qualification”, in _Proceedings of the Fourteenth International Joint Conference on Artificial Intelligence_, Chris Mellish (ed.), San Francisco: Morgan Kaufmann, 2017–2023.
* Baral, Chita, De Giacomo, Giuseppe, and Eiter, Thomas (eds.), 2014, _KR2014: Principles of Knowledge Representation and Reasoning_, Menlo Park, California: AAAI Press.
* Baral, Chita, Delgrande, James, and Wolter, Frank (eds.), 2016, _KR2016: Principles of Knowledge Representation and Reasoning_, Menlo Park, California: AAAI Press.
* Baral, Chitta and Gelfond, Michael, 2000, “Reasoning agents in dynamic domains”, in _Logic-Based Artificial Intelligence_, Jack Minker (ed.), Dordrecht: Kluwer Academic Publishers, 257–279.
* Besnard, Philippe, 1992, _Default Logic_, Berlin: Springer-Verlag.
* Besnard, Philippe and Hunter, Anthony, 2008, _Elements of Argumentation_, Cambridge, Massachusetts: The MIT Press.
* Bienvenu, Meghyn, Lakemeyer, Gerhard, and Erdem, Esra (eds.), 2021, _KR2021: Principles of Knowledge Representation and Reasoning_, Menlo Park, California: AAAI Press.
* Bochman, Alexander, 2004, “A causal approach to nonmonotonic reasoning”, _Artificial Intelligence_, 160(1–2): 105–143.
* Bochman, Alexander, 2007, “Nonmonotonic reasoning”, in _Handbook of the History of Logic. Volume 8: The Many Valued and Nonmonotonic Turn in Logic_, Dov M. Gabbay and John Woods (eds.), Amsterdam: Elsevier Publishing Co., 557–622.
* Boolos, George, 1993, _The Logic of Provability_, Cambridge, England: Cambridge Universoti Press.
* Bouquet, Paolo, Serafini, Luigi, Brézillon, Patrick, Benerecetti, Massimo, and Castellani, Francesca (eds.), 1999, _Modeling and Using Contexts: Proceedings of the Second International and Interdisciplinary Conference, CONTEXT’99_, Berlin: Springer-Verlag.
* Boutilier, Craig, 1992, “Conditional logics for default reasoning and belief revision”, Tech. Rep. KRR-TR-92-1, Computer Science Department, University of Toronto, Toronto, Ontario.
* Boutilier, Craig, 1996, “Iterated revision and minimal change of conditional beliefs”, _Journal of Philosophical Logic_, 25(3): 263–305.
* Boutilier, Craig, Dean, Thomas, and Hanks, Steve, 1996, “Planning under uncertainty: Structural assumptions and computational leverage”, in _New Directions in AI Planning_, Malik Ghallab and Alfredo Milani (eds.), Amsterdam: IOS Press, 157–171.
* Brachman, Ronald J., Levesque, Hector J., and Reiter,, Raymond, 1989, _KR’89: Principles of Knowledge Representation and Reasoning_, San Mateo, Morgan Kaufmann.
* Brachman, Ronald J., McGuinness, Deborah L., Patel-Schneider, Peter F., and Resnik, Lori A., 1991, “Living with CLASSIC: When and how to use a KL-ONE-like language”, in _Principles of Semantic Networks_, John F. Sowa (ed.), San Mateo, California: Morgan Kaufmann, 401–456.
* Brachman, Ronald J. and Levesque, Hector J., 2004, _Knowledge Representation and Reasoning_, Amsterdam: Elsevier.
* Brewka, Gerhard, 1991, _Nonmonotonic Reasoning: Logical Foundations of Commonsense_, Cambridge, England: Cambridge University Press.
* Brewka, Gerhard, Dix, Jürgen, and Konolige, Kurt, 1997, _Nonmonotonic Reasoning: An Overview_, Stanford: CSLI Publications.
* Brewka, Gerhard and Lang, Jérôme (eds.), 2008, _KR2008: Proceedings of the Eleventh National Conference_, Menlo Park, California: AAAI Press.
* Burger, Wilhelm and Bhanu, Bir, 1992, _Qualitative Motion Planning_, Dordrecht: Kluwer Academic Publishers.
* Burkhard, Hans-Dieter, Hannebauer, Markus, and Wendler, Jan, 1998, “Belief-desire-intention deliberation in artificial soccer”, _The AI Magazine_, 1998(3): 87–93.
* Burgess, John P., 1984, “Basic tense logic”, in _Handbook of Philosophical Logic, Volume II: Extensions of Classical Logic_, Dov Gabbay and Franz Guenther (eds.), Dordrecht: D. Reidel Publishing Co., 89–133.
* Calvanese, Diego, Erdem, Esra, and Thielscher, Michael (eds.), 2020, _KR2020: Principles of Knowledge Representation and Reasoning_, Menlo Park, California: AAAI Press.
* Carlson, Greg N. and Pelletier, Francis Jeffry (eds.), 1995, _The Generic Book_, Chicago, IL: Chicago University Press.
* Carnap, Rudolph, 1955, “Meaning and synonymy in natural languages”, _Philosophical Studies_, 7: 33–47. Reprinted in [Carnap 1956](https://plato.stanford.edu/entries/logic-ai/#carnap:1956a), pp. 233–247.
* Carnap, Rudolph, 1956, _Meaning and Necessity_, Chicago: Chicago University Press, second edition (First edition published in 1947.).
* Casati, Roberto and Varzi, Achille C., 1996, _Holes and Other Superficialities_, Cambridge, Massachusetts: The MIT Press.
* Casati, Roberto and Varzi, Achille C., 1999, _Parts and Places: The Structures of Spatial Representation_, Cambridge, Massachusetts: The MIT Press.
* Casini, Giovanni and Straccia, Umberto, 2022, “A general framework for modelling conditional reasoning—Preliminary Report”, in _KR2022: Principles of Knowledge Representation and Reasoning, Proceedings of the Nineteenth International Conference_, Gabriele Kern-Isberner and Gerhard Lakemeyer and Thomas Meyer (eds.), Menlo Park, California, 575–595.
* Chellas, Brian, 1975, “Basic conditional logic”, _Journal of Philosophical Logic_, 4(2): 133–154.
* Chen, Su-Shing (ed.), 1990, _Advances in Spatial Reasoning, Volume 1_, Norwood, New Jersey: Ablex.
* Chopra, Amit, van der Torre, Leon, Verhagen, Harko, and Villata, Serena 1997, _Handbook of Normative Multiagent Systems_, London: College Publications.
* Clancey, William J., 1983, “The epistemology of a rule-based expert system: a framework for explanation”, _Artificial Intelligence_, 20: 215–251.
* Clark, Keith L., 1978, “Negation as failure”, in _Logic and Data Bases_, H. Gallaire and Jack Minker (eds.), New York: Plenum Press, 293–322.
* Clarke, Bowman L., 1981, “A calculus of individuals based on ‘connection’”, _Notre Dame Journal of Formal Logic_, 22(3): 204–218.
* Clarke, Bowman L., 1985, “Individuals and points”, _Notre Dame Journal of Formal Logic_, 26(1): 61–75.
* Cohen, Philip R. and Levesque, Hector J., 1990, “Intention is choice with commitment”, _Artificial Intelligence_, 42(3): 213–261.
* Cohn, Anthony G., 1996, “Qualitative spatial representation and reasoning techniques”, in _KI-97, Advances in Artificial Intelligence_, Gerhard Brewka, Christopher Habel, and Bernhard Nebel (eds.), Berlin: Springer-Verlag, 1-30.
* Cohn, Anthony G., Bennett, Brandon, Gooday, John, and Gotts, Nicholas M., 1997, “Representing and reasoning with qualitative spatial relations”, in _Spatial and Temporal Reasoning_, Oliviero Stock (ed.), Dordrecht: Kluwer Academic Publishers, 97–134.
* Cohn, Anthony G., Schubert, Lenhart, and Shapiro, Stuart C. (eds.), 1998, _KR’98: Principles of Knowledge Representation and Reasoning_, San Francisco: Morgan Kaufmann.
* Cohn, Anthony G., Giunchiglia, Fausto, and Selman, Bart (eds.), 2000, _KR2000: Principles of Knowledge Representation and Reasoning_, San Francisco: Morgan Kaufmann.
* Copeland, B. Jack, 1996, “Arthur Prior’s life and legacy”, in _Logic and Reality: Essays on the Legacy of Arthur Prior_, Jack Copeland (ed.), Oxford: Oxford University Press, 1–40.
* Davis, Ernest, 1991, _Common Sense Reasoning_, San Francisco: Morgan Kaufmann.
* Davis, Ernest and Morgenstern, Leora, 2004, “Introduction: Progress in formal commonsense reasoning”, _Artificial Intelligence_, 153(1–2): 1–12.
* Davis, Martin, 1988, “Mathematical Logic and the Origin of Modern Computers”, in _The Universal Turing Machine: A Half-Century Survey_, Jack Copeland (ed.), Oxford: Oxford University Press, 149–174.
* Davis, Ernest, 2008, “Physical reasoning”, in _Handbook of Knowledge Representation_, van Harmelen, Frank, Lifschitz, Vladimir and Porter, Bruce (eds.), : Elsevier, 597–620.
* DeJong, Gerald D. and Bennett, Scott W., 1989, “Permissive planning: Extending classical planning to uncertain task domains”, _Artificial Intelligence_, 89(1–2): 173–217.
* Delgrande, James P., 1998, “Conditional logics for defeasible logics”, in _Handbook of Defeasible Reasoning and Uncertainty Management Systems, Volume 2_, Dov M. Gabbay and Philippe Smets (eds.), Dordrecht: Kluwer Academic Publishers, 135–174.
* Deneker, Marc, Marek, Victor W., and Truszczyński, Miroslaw 1998, “Uniform semantic treatment of default and autoepistemic logics”, _Artificial Intelligence_, 143(1): 79–122.
* Dennett, Daniel, 1987, “Cognitive wheels: The frame problem of AI”, in _The Robot’s Dilemma: The Frame Problem in Artificial Intelligence_, Zenon Pylyshyn (ed.), Norwood, New Jersey: Ablex Publishing Co., 41–64.
* Doherty, Patrick, Fikes, Richard, and Sandewall, Erik (eds.), 2006, _KR’2006: Proceedings, Tenth International Conference on Principles of Knowledge Representation and Reasoning_, Palo Alto: AAAI Press.
* Doyle, Jon, 1995, “A truth maintenance system”, _Artificial Intelligence_, 12(1): 231–272.
* Doyle, Jon, Sandewall, Erik, and Torasso, Pietro (eds.), 1994, _KR’94: Principles of Knowledge Representation and Reasoning_, San Francisco: Morgan Kaufmann.
* Doyle, Jon and Thomason, Richmond H., 1999, “Background to qualitative decision theory”, _AI Magazine_, 20(2): 55–68.
* Dubois, Didier, Welty, Christopher, and Williams, Mary-Anne (eds.), 2004,_KR2004: Principles of Knowledge Representation and Reasoning_, Palo Alto: AAAI Press.
* Eiter, Tomas, McIlraith, Sheila A., and Brewka, Gerald (eds.), 1992, _KR2012: Proceedings of the Thirteenth International Conference_, Menlo Park, California: AAAI Press.
* Elkan, Charles, 1991, “Reasoning about action in first-order logic”, in _Proceedings of the Conference of the Canadian Society for Computational Studies of Intelligence (CSCSI)_, Canadian Society for Computational Studies of Intelligence, San Francisco: Morgan Kaufman, 221–227.
* Elkan, Charles, 1995, “On solving the qualification problem”, in _Working Notes of the AAAI Spring Symposium on Extending Theories of Action: Formal Theories and Applications_, Menlo Park, California: American Association for Artificial Intelligence.
* Fagin, Ronald, Halpern, Joseph Y., Moses, Yoram, and Vardi, Moshe Y., 1995, _Reasoning about Knowledge_, Cambridge, Massachusetts: The MIT Press.
* Fensel, Dieter, Giunchiglia, Fausto, McGuinness, Deborah, and Williams, Mary-Anne (eds.), 2002, _KR2002: Principles of Knowledge Representation and Reasoning_, San Francisco, California: Morgan Kaufmann.
* Fikes, Richard, 1996, “Ontologies: What are they, and where’s the research?”, in _KR’96: Principles of Knowledge Representation and Reasoning_, Luigia Carlucci Aiello, Jon Doyle, and Stuart Shapiro (eds.), San Francisco, California: Morgan Kaufmann, 652–654.
* Finger, Jeffrey J., 1987, _Exploiting Constraints in Design Synthesis_, Ph.D. dissertation, Department of Computer Science, Stanford University, Stanford, California.
* Fodor, Jerry A., 1987, “Modules, frames, fridgeons, sleeping dogs, and the music of the spheres”, in _The Robot’s Dilemma: The Frame Problem in Artificial Intelligence_, Zenon Pylyshyn (ed.), Norwood, New Jersey: Ablex Publishing Co., 139–149.
* Forbus, Kenneth 2008, “Qualitative Modeling”, in _Handbook of Knowledge Representation_, van Harmelen, Frank, Lifschitz, Vladimir and Porter, Bruce (eds.), : Elsevier, 361–393.
* Ford, Kenneth M. and Pylyshyn, Zenon (eds.), 1996, _The Robot’s Dilemma Revisited: The Frame Problem in Artificial Intelligence_, Norwood, New Jersey: Ablex Publishing Co.
* Gabbay, Dov, Hogger, Christopher J., and Robinson, J. A. (eds.), 1994, _Handbook of Logic in Artificial Intelligence and Logic Programming, Volume 3: Nonmonotonic Reasoning and Uncertain Reasoning_, Oxford: Oxford University Press.
* Gabbay, Dov M., 1995, “Conditional implications and non-monotonic consequence”, in _Conditionals: From Philosophy to Computer Science_, Gabriella Crocco, Luis Fariñas del Cerro, and A. Herzig (eds.), Oxford: Oxford University Press, 337–359.
* Galton, Anthony, 1997, “Space, time, and movement”, in _Spatial and Temporal Reasoning_, Oliviero Stock (ed.), Dordrecht: Kluwer Academic Publishers, 321–352.
* Gärdenfors, Peter and Makinson, David, 1994, “Nonmonotonic inferences based on expectations”, _Artificial Intelligence_, 65(2): 197–245.
* Geffner, Hector, 1990, “Causal theories of nonmonotonic reasoning”, in _Proceedings of the Eighth National Conference on Artificial Intelligence_, Thomas Dietterich and William Swartout (eds.), American Association for Artificial Intelligence, Menlo Park, CA: AAAI Press, 524–530.
* Geffner, Hector, 1992, _Default Reasoning: Causal and Conditional Theories_, Cambridge, Massachusetts: MIT Press.
* Gelfond, Michael and Lifschitz, Vladimir, 1998, [“Action languages”](https://www.diva-portal.org/smash/get/diva2:1716299/FULLTEXT02.pdf), _Electronic Transactions on AI_, 3.
* Genesereth, Michael and Nilsson, Nils J., 1987, _Logical Foundations of Artificial Intelligence_, San Mateo, California: Morgan Kaufmann.
* Ghallab, Malik, Nau, Dana, and Traverso, Paolo, 2014, “The actor’s view of automated planning and acting: A position paper”, _Artificial Intelligence_, 208: 1–17.
* Ginsberg, Matthew L. (ed.), 1987, _Readings in Nonmonotonic Reasoning_, Los Altos, California: Morgan Kaufmann. (Out of print.).
* Giordano, Laura and Schwind, Camilla, 2004, “Conditional logic of actions and causation”, _Artificial Intelligence_, 157(1–2): 239–279.
* Giunchiglia, Enrico, Kartha, G. Neelakantan, and Lifschitz, Vladimir, 1997, “Representing action: Indeterminacy and ramifications”, _Artificial Intelligence_, 95(2): 409–438.
* Giunchiglia, Enrico and Lifschitz, Vladimir, 1998, “An action language based on causal explanation”, in _Proceedings of the Fourteenth National Conference on Artificial Intelligence and the Ninth Innovative Applications of Artificial Intelligence Conference_, Ted Senator and Bruce Buchanan (eds.), American Association for Artificial Intelligence, Menlo Park, California: AAAI Press, 623–628.
* Glasgow, Janice, Narayanan, N. Hari, and Chandrasekaran, B. (eds.), 1995, _Diagrammatic Reasoning_, Cambridge, Massachusetts: The MIT Press.
* Goodman, Nelson, 1946, _Fact, Fiction and Forecast_, Cambridge, Massachusetts: Harvard University Press, fourth edition.
* Gotts, N.M., 1994, “How far can we ‘C’? defining a doughnut using connection alone”, in _KR’94: Principles of Knowledge Representation and Reasoning_, Jon Doyle, Erik Sandewall, and Pietro Torasso (eds.), San Francisco, California: Morgan Kaufmann, 246–257.
* Gotts, N.M., 1996, “Topology from a single primitive relation: Defining topological properties and relations in terms of connection”, Tech. Rep. 96.24, School of Computer Studies, University of Leeds, Leeds.
* Guha, Ramanathan V., 1991, “Contexts: a formalization and some applications”, Tech. Rep. STAN-CS-91-1399, Stanford Computer Science Department, Stanford, California.
* Guidotti, Riccardo, Monreale, Anna, Ruggieri, Salvatore, Turini, Franco, Giannotti, Fosca, and Pedreschi, Dino, 2018, “A survey of methods for explaining black box models”, _ACM Computing Surveys_, 51(5): 1–42.
* Gustaffson, Joakim and Doherty, Patrick, 1996, “Embracing occlusion in specifying the indirect effects of actions”, in _KR’96: Principles of Knowledge Representation and Reasoning_, Luigia Carlucci Aiello, Jon Doyle, and Stuart Shapiro (eds.), San Francisco, California: Morgan Kaufmann, 87–98.
* Halpern, Joseph Y. (ed.), 1986, _Theoretical Aspects of Reasoning about Knowledge: Proceedings of the First Conference (TARK 1986)_, Los Altos, California: Morgan Kaufmann Publishers, Inc.
* Halpern, Joseph L., 2016, _Actual Causality_, Cambridge, Massachusetts: The MIT Press.
* Halpern, Joseph Y. and Moses, Yoram, 1985, “Towards a theory of knowledge and ignorance”, in _Logics and Models of Concurrent Systems_, Krzysztof R. Apt (ed.), Berlin: Springer-Verlag, 459–476.
* Halpern, Joseph, and Pearl, Judea, 2001, “Causes and explanations: a Structural-model approach”, in _Uncertainty in Artificial Intelligence. Proceedings of the Seventeenth Conference_, San Francisco: Morgan Kaufmann, 194–202.
* Hammer, Eric M., 1995, _Logic and Visual Information_, Stanford, California: CSLI Publications.
* Hanks, Steven and McDermott, Drew, 1985, “Temporal reasoning and default logics”, Tech. Rep. YALEU/CSD/RR#430, Department of Computer Science, Yale University, New Haven, Connecticut.
* Hanks, Steven and McDermott, Drew, 1986, “Default reasoning, nonmonotonic logics and the frame problem”, in _Proceedings of the Fifth National Conference on Artificial Intelligence_, Tom Kehler and Stan Rosenschein (eds.), American Association for Artificial Intelligence, Los Altos, California: Morgan Kaufmann, 328–333.
* Hanks, Steven and McDermott, Drew, 1987, “Non-monotonic logics and temporal projection”, _Artificial Intelligence_, 33(3): 379–412.
* Haugeland, John, 1981, “Semantic engines: An introduction to mind design”, in _Mind Design_, John Haugeland (ed.), Cambridge, Massachusetts: The MIT Press, 1–34.
* Haugh, Brian, 1987, “Simple causal minimization for temporal persistence and projection”, in _Proceedings of the Seventh National Conference on Artificial Intelligence_, Kenneth Forbus and Howard Shrobe (eds.), American Association for Artificial Intelligence, Menlo Park, California: AAAI Press, 218–223.
* Hintikka, Jaakko, 1962, _Knowledge and Belief_, Ithaca, New York: Cornell University Press.
* Hitchcock, Christopher, 2022, “Causal models”, in _The Stanford Encyclopedia of Philosophy_, Edward N. Zalta (ed.), URL https://plato.stanford.edu/archives/spr2022/entries/causal-models/.
* Hobbs, Jerry and Gordon, Andrew, 2005, “Encoding knowledge of commonsense psychology”, _7th International Symposium on Logical Formalizations of Commonsense Reasoning._ May 22–24, 2005, Corfu, Greece.
* Horty, John F., 1994, “Some direct theories of nonmonotonic inheritance”, in _Handbook of Logic in Artificial Intelligence and Logic Programming, Volume 3: Nonmonotonic Reasoning and Uncertain Reasoning_, Dov Gabbay, Christopher J. Hogger, and J. A. Robinson (eds.), Oxford University Press, 111–187.
* Horty, John F., 2001, _Agency and Deontic Logic_, Oxford: Oxford University Press.
* Horty, John, 2012, _Reasons as Defaults_, Oxford: Oxford University Press.
* Israel, David J., 1991, “A short sketch of the life and career of John McCarthy”, in _Artificial Intelligence and Mathematical Theory of Computation: Papers in Honor of John McCarthy_, Vladimir Lifschitz (ed.), San Diego, California: Academic Press.
* Iwasaki, Yumi and Simon, Herbert, 1986, “Causality in device behavior”, _Artificial Intelligence_, 29(1): 3–32.
* Johnston, Benjamin and Williams, Mary-Anne, “A generic framework for approximate simulation in commonsense reasoning systems”, AAAI 2007 Spring Symposium on Commonsense Reasoning, American Association for Artificial Intelligence, Menlo Park, 2007.
* Kapur, Deepak and Mundy, Joseph L., 1988, “Geometric reasoning and artificial intelligence: Introduction to the special volume”, _Artificial Intelligence_, 37(1–3): 1–11.
* Kern-Isberner, Gabriele, 2001, _Conditionals in Nonmonotonic Reasoning and Belief Revision: Considering Conditionals as Agents_, Berlin: Springer-Verlag.
* Kern-Isberner, Gabriele, Lakemeyer, Gerhard, and Meyer, Thomas (eds.), 2022, _KR2022: Principles of Knowledge Representation and Reasoning_, Menlo Park, California: AAAI Press.
* Konolige, Kurt, 1986, “What awareness isn’t: A sentential view of implicit and explicit belief”, in _Theoretical Aspects of Reasoning about Knowledge: Proceedings of the First Conference_, Joseph Y. Halpern (ed.), Los Altos, California: Morgan Kaufmann Publishers, Inc., 241–250.
* Konolige, Kurt, 1988, “On the relation between default and autoepistemic logic”, _Artificial Intelligence_, 35(3): 343–382. (See also errata, Artificial Intelligence (1): 115.).
* Konolige, Kurt, 1994, “Autoepistemic logic”, in _Handbook of Logic in Artificial Intelligence and Logic Programming, Volume 3: Nonmonotonic Reasoning and Uncertain Reasoning_, Dov Gabbay, Christopher J. Hogger, and J. A. Robinson (eds.), Oxford: Oxford University Press, 217–295.
* Konolige, Kurt and Pollack, Martha, 1993, “A representationalist theory of intention”, in _Proceedings of the Thirteenth International Joint Conference on Artificial Intelligence_, Ruzena Bajcsy (ed.), San Mateo, California: Morgan Kaufmann.
* Kosslyn, Stephen Michael, 1990, “Visual cognition: Introduction”, in _An Invitation to Cognitive Science. Volume 2: Visual Cognition and Action_, Daniel N. Osherson and Howard Lasnik (eds.), Cambridge, Massachusetts: The MIT Press, 3–4.
* Kowalski, Robert A. and Sergot, Marek J., 1986, “A logic-based calculus of events”, _New Generation Computing_, 4: 67–95.
* Lakemeyer, Gerhard, 1997, “Limited reasoning in first-order knowledge bases”, _Artificial Intelligence_, 71(2): 213–255.
* Laux, Armin and Wansing, Heinrich (eds.), 1995, _Knowledge and Belief in Philosophy and Artificial Intelligence_, Berlin: Akedemie Verlag.
* Lehmann, Daniel and Magidor, Menachem, 1992, “What does a conditional knowledge base entail?”, _Artificial Intelligence_, 55(1): 1–60.
* Lenat, Douglas B. and Guha, R.V., 1989, _Building Large Knowledge-Based Systems: Representation and Inference in the CYC Project._, Reading, Massachusetts: Addison-Wesley Publishing Company.
* Lent, Jeremy and Thomason, Richmond, 2015, “Action models for conditionals”, _Journal of Logic, Language, and Information_, 24(2): 211–231.
* Leśniewski, Stanisław, 1916, “Podstawy ogólnej teorii mnogosci I”, English Title: “Foundations of a general set theory I.”, Moscow: Popławski.
* Levesque, Hector and Lakemeyer, Gerhard, 2000, _The Logic of Knowledge Bases_, Cambridge, Massachusetts: The MIT Press.
* Levesque, Hector J., 1984, “A logic of implicit and explicit belief”, in _Proceedings of the Fourth National Conference on Artificial Intelligence_, American Association for Artificial Intelligence, 198–202.
* Levesque, Hector J., 1987, “Taking issue: Guest editor’s introduction”, _Computational Intelligence_, 3(3): 149–150.
* Levesque, Hector and Lakemeyer, Gerhard, 2008, “Cognitive robotics”, in _Handbook of Knowledge Representation_, Harmelen, Frank van, Lifschitz, Vladimir, and Porter, Bruce (eds.), Amsterdam: Elsevier, 969–886.
* Levy, Alon Y., 2000, “Logic-based techniques in data integration”, in _Logic-Based Artificial Intelligence_, Jack Minker (ed.), Dordrecht: Kluwer Academic Publishers, 575–595.
* Lin, Fangshen, Sattler, Ulrike, and Truszczyński, Miroslaw (eds.), 2010, _KR2010: Principles of Knowledge Representation and Reasoning_, Menlo Park, California: AAAI Press.
* Lifschitz, Vladimir, 1987, “Formal theories of action: Preliminary report”, in _Proceedings of the Tenth International Joint Conference on Artificial Intelligence_, John McDermott (ed.), Los Altos, California: Morgan Kaufmann.
* Lifschitz, Vladimir (ed.), 1990a, _Formalizing Common Sense: Papers by John McCarthy_, Norwood, New Jersey: Ablex Publishing Corporation.
* Lifschitz, Vladimir, 1990b, “Understanding common sense: McCarthy’s research in artificial intelligence”, in _Formalizing Common Sense: Papers by John McCarthy_, Vladimir Lifschitz (ed.), Norwood, New Jersey: Ablex Publishing Corporation, 1–8.
* Lifschitz, Vladimir, 1997, “On the logic of causal explanation”, _Artificial Intelligence_, 96(2): 451–465.
* Lifschitz, Vladimir, 1998a, “Cracking an Egg: An Exercise in Commonsense Reasoning”, presented at the Fourth Symposium on Logical Formalizations of Commonsense Reasoning, London, January 1998. [Lifschitz 1998a available online in PostScript](https://www.cs.utexas.edu/\~vl/papers/egg.ps).
* Lifschitz, Vladimir, 1998b, “Situation calculus and causal logic”, in _KR’98: Principles of Knowledge Representation and Reasoning_, Anthony G. Cohn, Lenhart Schubert, and Stuart C. Shapiro (eds.), San Francisco, California: Morgan Kaufmann, 536–546.
* Lin, Fangzhen, 1995, “Embracing causality in specifying the indirect effects of actions”, in _Proceedings of the Fourteenth International Joint Conference on Artificial Intelligence_, Chris Mellish (ed.), San Francisco: Morgan Kaufmann, 1985–1991.
* Lin, Fangzhen, Sattler, Ulrike, and Truszczynski, Miroslaw (eds.), 2010, _KR2010: Proceedings of the Twelfth International Conference_, Palo Alto: AAAI Press.
* Lormand, Eric, 1996, “The holorobophobe’s dilemma”, in _The Robot’s Dilemma Revisited: The Frame Problem in Artificial Intelligence_, Kenneth M. Ford and Zenon Pylyshyn (eds.), Norwood, New Jersey: Ablex Publishing Co., 61–88.
* Łukaszewicz, Witold, 1990, _Non-Monotonic Reasoning: Formalization of Commonsense Reasoning_, New York: Ellis Horwood.
* Makinson, David, 2005a, “How to go non-monotonic”, in _Handbook of Philosophical Logic_ (Volume 12, Second edition), Dov Gabbay and Franz Guenthner (eds.), Berlin: Springer-Verlag, 175–278.
* Makinson, David, 2005b, _Bridges from Classical to Nonmonotonic Logic_, London: King’s College Publications.
* Makinson, David C. and Leendert van der Torre “Input/output logics”, _Journal of Philosophical Logic_, 29(4): 383–408.
* Marek, Victor and Truszczynski, Mirosaw, 1991, “Autoepistemic logic”, _Journal of the Association for Computing Machinery_, 38(3): 588–619.
* Marek, Wictor and Truszczynski, Mirosaw, 1989, “Relating autoepistemic and default logics”, in _KR’89: Principles of Knowledge Representation and Reasoning_, Ronald J. Brachman, Hector J. Levesque, and Raymond Reiter (eds.), San Mateo, California: Morgan Kaufmann, 276–288.
* Marek, Wictor and Truszczynski, Mirosaw, 1994, _Nonmonotonic Logic: Context-Dependent Reasoning_, Berlin: Springer-Verlag.
* McCain, Norman and Turner, Hudson, 1995, “A causal theory of ramifications and qualifications”, in _Proceedings of the Fourteenth International Joint Conference on Artificial Intelligence_, Chris Mellish (ed.), San Francisco: Morgan Kaufmann, 1978–1984.
* McCain, Norman and Turner, Hudson, 1997, “Causal theories of action and change”, in _Proceedings of the Thirteenth National Conference on Artificial Intelligence and the Eighth Innovative Applications of Artificial Intelligence Conference_, Howard Shrobe and Ted Senator (eds.), American Association for Artificial Intelligence, Menlo Park, California: AAAI Press, 460–465.
* McCarthy, John, 1959, “Programs with common sense”, in _Proceedings of the Teddington Conference on the Mechanization of Thought Processes_, London: Her Majesty’s Stationary Office, 75–91.
* McCarthy, John, 1979, “First order theories of individual concepts and propositions”, in _Machine Intelligence 9_, J.E. Hayes, D. Mitchie, and L.I. Mikulich (eds.), Chichester, England: Ellis Horwood, 129–148.
* McCarthy, John, 1980, “Circumscription: A form of non-monotonic reasoning”, _Artificial Intelligence_, 13: 27–39.
* McCarthy, John, 1983, “Situations, actions, and causal laws”, Tech. Rep. Memo 2, Stanford Artificial Intelligence Project, Stanford University.
* McCarthy, John, 1986, “Applications of circumscription to formalizing common sense knowledge”, _Artificial Intelligence_, 13: 27–39.
* McCarthy, John, 1987, “Epistemological problems of artificial intelligence”, in _Readings in Nonmonotonic Reasoning_, Matthew L. Ginsberg (ed.), Los Altos, California: Morgan Kaufmann, 46–55.
* McCarthy, John, 1993a, “History of circumscription”, _Artificial Intelligence_, 59: 23–26.
* McCarthy, John, 1993b, “Notes on formalizing contexts”, in _Proceedings of the Thirteenth International Joint Conference on Artificial Intelligence_, Ruzena Bajcsy (ed.), San Mateo, California: Morgan Kaufmann, 555–560.
* McCarthy, John, 1999, [“Elaboration tolerance”](http://www-formal.stanford.edu/jmc/elaboration.html) .
* McCarthy, John and Buvac, Saša, 1998, “Formalizing context (expanded notes)”, in _Computing Natural Language_, Atocha Aliseda, Rob van Glabbeek, and Dag Westerståhl (eds.), Stanford, California: CSLI Publications, 13–50.
* McCarthy, John and Hayes, Patrick J., 1969, “Some philosophical problems from the standpoint of artificial intelligence”, in _Machine Intelligence 4_, B. Meltzer and D. Michie (eds.), Edinburgh: Edinburgh University Press, 463–502.
* McDermott, Drew, 1982, “Nonmonotonic logic II: Nonmonotonic modal theories”, _Journal of the Association for Computing Machinery_, 29(1): 33–57.
* McDermott, Drew and Doyle, Jon, 1980, “Non-monotonic logic I”, _Artificial Intelligence_, 13: 41–72.
* Meyer, John-Jules Ch. and van der Hoek, Wiebe, 1995, _Epistemic Logic for AI and Computer Science_, Cambridge: Cambridge University Press.
* Minker, Jack, 1997, “Logic and databases: Past, present and future”, _AI Magazine_, 18(3): 21–47.
* Minker, Jack, 2000a, “Introduction to logic-based artificial intelligence”, in _Logic-Based Artificial Intelligence_, Jack Minker (ed.), Dordrecht: Kluwer Academic Publishers, 3–33.
* Minker, Jack (ed.), 2000, _Logic-Based Artificial Intelligence_, Dordrecht: Kluwer Academic Publishers.
* Minsky, Marvin, 1974, “A framework for representing knowledge”, Tech. Rep. 306, Artificial Intelligence Laboratory, MIT. Republished in several places, including [Haugeland 1981](https://plato.stanford.edu/entries/logic-ai/#haugeland:1981b).
* Moore, Johanna, 1995, _Participating in Explanatory Dialogues_, The MIT Press.
* Moore, Robert C., 1993, “Autoepistemic logic revisited”, _Artificial Intelligence_, 59(1–2): 27–30.
* Moore, Robert C., 1995, _Logic and Representation_, Cambridge, England: Cambridge University Press.
* Morgenstern, Leora, 1996, “The problem with solutions to the frame problem”, in _The Robot’s Dilemma Revisited: The Frame Problem in Artificial Intelligence_, Kenneth M. Ford and Zenon Pylyshyn (eds.), Norwood, New Jersey: Ablex Publishing Co., 99–133.
* Morgenstern, Leora, 2001, “Mid-Sized Axiomatizations of Commonsense Problems: A Case Study in Egg Cracking”, _Studia Logica_, 67(3):333–384.
* Morgenstern, Leora and Stein, Lynn, 1994, “Motivated action theory: a formal theory of causal reasoning”, _Artificial Intelligence_, 71(1): 1–42.
* Mueller, Erik T., 2006, _Common Sense Reasoning_, Elsevier.
* Nakashima, Hideyuki, Matsubara, Hitoshi, and Osawa, Ichiro, 1997, “Causality as a key to the frame problem”, _Artificial Intelligence_, 91(1): 37–50.
* Nebel, Bernhard, Rich, Charles, and Swartout, William (eds.), 1992, _KR’: Principles of Knowledge Representation and Reasoning_, San Francisco: Morgan Kaufmann.
* Nilsson, Nils J., 1991, “Logic and artificial intelligence”, _Artificial Intelligence_, 47(1–3): 31–56.
* Ohrstrom, Peter and Hasle, Per F.V., 1995, _Temporal Logic from Ancient Ideas to Artificial Intelligence_, Dordrecht: Kluwer Academic Publishers.
* Osherson, Daniel N. and Lasnik, Howard (eds.), 1990, _An Invitation to Cognitive Science. Volume 2: Visual Cognition and Action_, Cambridge, Massachusetts: The MIT Press.
* Pearl, Judea, 1994, “From Adams’ conditionals to default expressions, causal conditionals, and counterfactuals”, in _Probability and Conditionals: Belief Revision and Rational Decision_, Ellery Eells and Brian Skyrms (eds.), Cambridge, England: Cambridge University Press, 47–74.
* Pearl, Judea, 2000, _Causality: Models, Reasoning, and Inference_, Cambridge, England: Cambridge University Press.
* Perlis, Donald, 1985, “Languages with self-reference I: Foundations”, _Artificial Intelligence_, 25: 301–322.
* Pollack, Martha, 1992, “The uses of plans”, _Artificial Intelligence_, 57(1): 43–68.
* Pollock, John L., 1995, _Cognitive Carpentry: A Manual for How to Build a Person_, Cambridge, Massachusetts: The MIT Press.
* Prior, Arthur, 1956, _Time and Modality_, Oxford: Oxford University Press.
* Prior, Arthur, 1967, _Past, Present and Future_, Oxford: Oxford University Press.
* Prior, Arthur, 1968, _Papers on Time and Tense_, Oxford: Oxford University Press.
* Pylyshyn, Zenon (ed.), 1987, _The Robot’s Dilemma: The Frame Problem in Artificial Intelligence_, Norwood, New Jersey: Ablex Publishing Co.
* Quine, Willard V.O, 1960, “Variables explained away”, in _Selected Logic Papers_, Willard V. Quine (ed.), Cambridge, Massachusetts: Harvard University Press, 227–235.
* Rahwan, Iyad and Simari, Guillermo R., 2009, _Argumentation in Artificial Intelligence_, Berlin: Springer-Verlag.
* Reiter, Raymond, 1978, “On closed world data bases”, in _Logic and Data Bases_, H. Gallaire and J. Minker (eds.), New York: Plenum Press, 55–76.
* Reiter, Raymond, 1980, “A logic for default reasoning”, _Artificial Intelligence_, 13: 81–32.
* Reiter, Raymond, 1993, “Proving properties of states in the situation calculus”, _Artificial Intelligence_, 64: 337–351.
* Reiter, Raymond, 2001, _Knowledge in Action: Logical Foundations for Specifying and Implementing Dynamical Systems_, Cambridge, Massachusetts: The MIT Press.
* Rendsvig, Rasmus and Symons,John 2022, “Epistemic logic”, in _The Stanford Encyclopedia of Philosophy_ (Spring 2022 Edition), Edward M. Zalta (ed.), URL =[https://plato.stanford.edu/archives/spr2022/entries/logic-epistemic/“](https://plato.stanford.edu/archives/spr2022/entries/logic-epistemic/).
* Renz, Jochen and Nebel, Bernhard, 1999, ”On the complexity of qualitative spatial reasoning: A maximal tractable fragment of the region connection calculus“, _Artificial Intelligence_, 108(1–2): 69–123.
* Rosenschein, Stanley J., 1989, ”Synthesizing information-tracking automata from environment descriptions“, in _KR’89: Principles of Knowledge Representation and Reasoning_, Ronald J. Brachman, Hector J. Levesque, and Raymond Reiter (eds.), San Mateo, California: Morgan Kaufmann, 386–393.
* Rosenschein, Stanley J. and Kaelbling, Leslie Pack, 1995, ”A situated view of representation and control“, _Artificial Intelligence_, 73(1–2): 149–173.
* Russell, Stuart and Norvig, Peter, 2020, _Artificial Intelligence: A Modern Approach_, Englewood Cliffs, New Jersey: Prentice Hall, fourth edition.
* Russell, Stuart J. and Wefald, Eric, 1991, _Do the Right Thing_, Cambridge, Massachusetts: The MIT Press.
* Sadek, M.D., 1992, ”A study in the logic of intention“, in _KR’92. Principles of Knowledge Representation and Reasoning: Proceedings of the Third International Conference_, Bernhard Nebel, Charles Rich, and William Swartout (eds.), San Mateo, California: Morgan Kaufmann, 462–473.
* Sandewall, Eric, 1972, ”An approach to the frame problem, and its implementation“, in _Machine Intelligence 7_, D. Michie and B. Meltzer (eds.), Edinburgh University Press, 195–204.
* Sandewall, Erik, 1994, _Features and Fluents: A Systematic Approach to the Representation of Knowledge About Dynamical Systems_, Oxford: Oxford University Press.
* Schlechta, Karl, 1997, _Nonmonotonic Logics_, Berlin: Springer-Verlag.
* Schlechta, Karl, 2007, ”Non-monotonic logics: A preferential approach“, in _Handbook of the History of Logic, Volume 8: The Many-Valued and Nonmonotonic Turn in Logic_, Dov Gabbay and John Woods (eds.), Amsterdam: Elsevier Science Publishers, 451–516.
* Schubert, Lenhart, 1990, ”Monotonic solution of the frame problem in the situation calculus; an efficient method for worlds with fully specified actions“, in _Knowledge Representation and Defeasible Reasoning_, Henry Kyburg, Ronald Loui, and Greg Carlson (eds.), Dordrecht: Kluwer Academic Publishers, 23–67.
* Seligman, Jerry and Moss, Lawrence S., 1996, ”Situation theory“, in _Handbook of Logic and Language_, Johan van Benthem and Alice ter Meulen (eds.), Amsterdam: Elsevier, 239–307.
* Shanahan, Murray, 1997, _Solving the Frame Problem_, Cambridge, Massachusetts: The MIT Press.
* Shanahan, Murray, 2004, ”An attempt to formalise a non-trivial benchmark problem in common sense reasoning“, _Artificial Intelligence_, 153(1–2): 141–165.
* Shanahan, Murray, 2009, ”The Frame Problem“, _The Stanford Encyclopedia of Philosophy_ (Winter 2009 Edition), Edward N. Zalta (ed.), URL [The Frame Problem (Stanford Encyclopedia of Philosophy/Winter 2009 Edition)](https://plato.stanford.edu/archives/win2009/entries/frame-problem/).
* Shoham, Yoav, 1988, _Reasoning About Change: Time and Causation From the Standpoint of Artificial Intelligence_, Cambridge, Massachusetts: The MIT Press.
* Simon, Herbert, 1952, ”On the definition of the causal relation“, _The Journal of Philosophy_, 49: 517–528.
* Simon, Herbert, 1966, ”On reasoning about action“, Tech. Rep. Complex Information Processing Paper #87, Carnegie Institute of Technology, Pittsburgh, Pennsylvania.
* Simon, Herbert A., 1977, _Models of Discovery_, Dordrecht: D. Reidel Publishing Co.
* Simon, Herbert A., 1982a, _Models of Bounded Rationality, Volume 1_, Cambridge, Massachusetts: The MIT Press.
* Simon, Herbert A., 1982b, _Models of Bounded Rationality, Volume 2_, Cambridge, Massachusetts: The MIT Press.
* Simons, Peter, 1987, _Parts: A Study in Ontology_, Oxford: Oxford University Press.
* Snidaro, Lauro, Herrero Jesús Garcíia, Llinas, James, and Blash, Erik, 2019, ”Recent trends in context exploitation for information fusion and AI“, _The AI Magazine_, 40(3): 14–27.
* Stalnaker, Robert C., 1993, ”A note on non-monotonic modal logic“, _Artificial Intelligence_, 64(2): 183–196. Widely circulated in manuscript form, 1980 to 1992.
* Stefik, Mark J., 1995, _An Introduction to Knowledge Systems_, San Francisco: Morgan Kaufmann.
* Stock, Oliviero (ed.), 1997, _Spatial and Temporal Reasoning_, Dordrecht: Kluwer Academic Publishers.
* Stone, Matthew, 1998, _Modality in Dialogue: Planning, Pragmatics and Computation_, Ph.D. dissertation, Computer Science Department, University of Pennsylvania, Philadelphia, Pennsylvania.
* Straßer, Christian, 2014, _Adaptive Logic and Defeasible Reasoning: Applications in Argumentation, Normative Reasoning and Default Reasoning_, Berlin: Springer Verlag.
* Straßer, Christian, and Antonelli, G. Aldo, 2019, ”Non-Monotonic Logic“, _The Stanford Encyclopedia of Philosophy_ (Winter 2012 Edition), Edward N. Zalta (ed.), URL [Non-monotonic Logic (Stanford Encyclopedia of Philosophy/Winter 2012 Edition)](https://plato.stanford.edu/archives/win2012/entries/logic-nonmonotonic/).
* Thielscher, Michael, 1989, ”Ramification and causality“, _Artificial Intelligence_, 89(1–2): 317–364.
* Thielscher, Michael, 1996, ”Causality and the qualification problem“, in _KR’96: Principles of Knowledge Representation and Reasoning_, Luigia Carlucci Aiello, Jon Doyle, and Stuart Shapiro (eds.), San Francisco, California: Morgan Kaufmann, 51–62.
* Thielscher, Michael, 2005, _Reasoning Robots: The Art and Science of Programming Robotic Agents_, Dordrecht: Kluwer Academic Publishers.
* Thielscher, Michael, Toni, Francesco, and Wolter, Frank (eds.), 2018, _KR2018: Principles of Knowledge Representation and Reasoning_, Menlo Park, California: AAAI Press.
* Thomason, Richmond H., 1992, ”NETL and subsequent path-based inheritance theories“, in _Semantic Networks in Artificial Intelligence_, Fritz Lehmann (ed.), Oxford: Pergamon Press, 179–204.
* Thomason, Richmond, 2003, ”Dynamic contextual intensional logic: logical foundations and an application“, in _Modeling and Using Context: Fourth International and Interdisciplinary Conference_, Patrick Blackburn, Chiara Ghidini, and Roy Turner (eds.), Berlin: Springer-Verlag, 328-341.
* Thomason, Richmond, 2005, ”Making contextual intensional logic nonmonotonic“, in _Modeling and Using Context: Fifth International and Interdisciplinary Conference_, Anind Dey, Boicho Kokinov, David Leake, and Roy Turner (eds.), Berlin: Springer-Verlag, 502–514.
* Turner, Hudson, 1999, ”A logic of universal causation“, _Artificial Intelligence_, 113(1–2): 87–123.
* van Benthem, Johan, 1983, _The Logic of Time_, Dordrecht: D. Reidel Publishing Company.
* van der Torre, Leendert W.N., 1997, _Reasoning about Obligations: Defeasibility in Preference-Based Deontic Logic_, Amsterdam: Thesis Publishers.
* van Harmelen, Frank, Lifschitz, Vladimir, and Porter, Bruce (eds.) 2008,_Handbook of Knowledge Representation_, Amsterdam: Elsevier.
* von Wright, Georg Henrik, 1983, _Practical Reason: Philosophical Papers, Volume 1_, Ithaca: Cornell University Press.
* Weld, Daniel S. and de Kleer, Johan (eds.), 1990, _Qualitative Reasoning about Physical Systems_, San Mateo, California: Morgan Kaufmann.
* Wilson, Randall H., 1998, ”Geometric reasoning about assembly tools“, _Artificial Intelligence_, 98(1–2): 237–279.
* Wobcke, Wayne, Pagnucco, Maurice, and Zhang, C. (eds.), 1998, _Agents and Multi-Agent Systems—Formalisms, Methodologies, and Applications_, Berlin: Springer-Verlag.
* Wolter, Frank and Zakharyaschev, Michael, 2000, ”Spatio-temporal representation and reasoning based on RCC-8“, in _KR2000: Principles of Knowledge Representation and Reasoning_, Anthony G. Cohn, Fausto Giunchiglia, and Bart Selman (eds.), San Francisco: Morgan Kaufmann, 3–14.
* Woods, William A. and Schmolze, James G., 1992, ”The KL-ONE family“, in _Semantic Networks in Artificial Intelligence_, Fritz Lehmann (ed.), Oxford: Pergamon Press, 133–177.
* Wooldridge, Michael J., 2000, _Reasoning about Rational Agents_, Cambridge, England: Cambridge University Press.
* Yeap, Wai K. and Jeffries, Margaret E., 1999, ”Computing a representation of the local environment“, _Artificial Intelligence_, 107(2): 265–301.

## Academic Tools

| ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-ai).                                                                      |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-ai/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
| ![inpho icon](https://plato.stanford.edu/symbols/inpho.png)         | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-ai\&redirect=True) at the Internet Philosophy Ontology Project (InPhO).   |
| ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif)      | [Enhanced bibliography for this entry](https://philpapers.org/sep/logic-ai/) at [PhilPapers](https://philpapers.org/), with links to its database.                          |

## Other Internet Resources

* Stanford Formal Reasoning Group, [Formal Reasoning Group Web Pages](http://www-formal.stanford.edu/).
* John McCarthy, [John McCarthy’s Web Pages](http://www-formal.stanford.edu/jmc/).
* Stanford Computer Science, [John McCarthy’s Posthumous Stanford Pages](http://jmc.stanford.edu/).
* Leora Morgenstern, [Common Sense Problem Page](http://www-formal.stanford.edu/leora/commonsense/).
* Toronto Cognitive Robotics Group, [Toronto Cognitive Robotics Pages](http://www.cs.toronto.edu/cogrobo/main/).

## Related Entries

[conditionals](https://plato.stanford.edu/entries/conditionals/) | [frame problem](https://plato.stanford.edu/entries/frame-problem/) | [logic: non-monotonic](https://plato.stanford.edu/entries/logic-nonmonotonic/) | [reasoning: automated](https://plato.stanford.edu/entries/reasoning-automated/)

### Acknowledgments

I am grateful to John McCarthy, who read an early draft of this article and provided extensive and helpful comments.

[Copyright © 2024](https://plato.stanford.edu/info.html#c) by\
Richmond Thomason <[_rthomaso@umich.edu_](mailto:rthomaso%40umich%2eedu)>
