# 科学研究与大数据 scientific research and big data (Sabina Leonelli)

*首次发表于 2020 年 5 月 29 日星期五*

大数据承诺在科学内外彻底改变知识的生产，通过提供新颖、高效的计划、实施、传播和评估研究的方式。过去几十年见证了创造新的数据生产、存储和分析方式的出现，最终形成了数据科学领域，将计算、算法、统计和数学技术结合起来，从大数据中推断知识。与此同时，开放数据运动——源于开放政府和开放科学等政策趋势——鼓励通过大型数字基础设施共享和互联异构研究数据。机器可读格式中大量数据的可用性促使人们创造高效的程序来收集、组织、可视化和建模这些数据。这些基础设施反过来又成为人工智能发展的平台，旨在提高知识创造过程的可靠性、速度和透明度。各学科的研究人员认为，能够链接和交叉参考来自不同来源的数据，可以提高科学发现的准确性和预测能力，并有助于确定未来的研究方向，从而为经验调查提供新的起点。正如专门的资金、培训计划和出版场所的兴起所证明的那样，大数据被广泛认为是一种开展研究和挑战现有科学知识认知方式的新方法。

本条目探讨了大数据在科学研究中的使用与相关的哲学问题，重点关注由此使用引发的问题。为此，本条目讨论了大数据的出现以及相关技术、机构和规范如何影响以下主题的分析：

1. 统计学、形式和计算模型如何帮助从数据中推断模式，并产生哪些后果；
2. 人类智能在机器学习中的关键审查作用，以及其与研究过程的可理解性的关系；
3. 数据作为研究组成部分的性质；
4. 数据和证据之间的关系，以及数据作为经验洞察的来源的作用；
5. 将知识视为以理论为中心的观点；
6. 对预测和因果关系之间的理解；
7. 事实与价值的分离; 和
8. 数据科学的风险和伦理。

这些是关注围绕大数据的研究实践的领域，可以使哲学受益，特别是在科学的认识论和方法论方面的工作。本条目不涵盖近年来在这个主题上出现的关于科学历史和社会研究的广泛学术成果，尽管在概念上相关时可以找到一些文献的参考。作为对数据研究中的历史和社会科学工作的补充，对数据实践的哲学分析也可以对围绕数据科学的炒作提出重要挑战，并促进对数据驱动人工智能在研究中的角色的批判性理解。

---

## 1. 什么是大数据？

我们正在目睹社会生活的逐步“数据化”。人类的活动和与环境的互动越来越受到有效监测和记录，产生了庞大的数字足迹。由此产生的“大数据”对于研究来说是一座宝库，越来越复杂的计算工具被开发出来，以从这些数据中提取知识。一个例子是利用从癌症患者身上获得的各种不同类型的数据，包括基因组序列、生理测量和个体对治疗的反应，以改善诊断和治疗。另一个例子是将交通流量、环境和地理条件以及人类行为的数据整合起来，为无人驾驶车辆制定安全措施，以便在面对意外事件时（例如一个孩子在寒冷的天气里突然冲到街上），数据可以迅速分析以识别并生成适当的响应（汽车足够转弯以避开孩子，同时最大限度地减少在冰上打滑和损坏其他车辆的风险）。还有一个例子是通过将商业服务（例如超市、社交媒体和餐馆）生成的食物消费数据与公共卫生和社会服务的数据（例如血液检测结果和与营养不良相关的住院记录）相结合，来了解特定人群的营养状况和需求。在这些案例中，数据和相关的分析工具的可用性正在为研究和新形式的探究的发展创造新的机会，被广泛认为对整个科学具有变革性的影响。

反思这些案例对研究的哲学理解的意义，一个有用的起点是考虑当代科学话语中“大数据”一词实际指的是什么。有多种定义大数据的方式（Kitchin 2014，Kitchin & McArdle 2016）。也许最直接的描述是指以数字形式产生的大型数据集，可以通过计算工具进行分析。因此，与大数据最常相关的两个特征是容量和速度。容量指的是用于存档和传播数据的文件的大小。速度指的是数据生成和处理的紧迫速度。研究所创建的数字数据体正在以极快的速度增长，以一种人类认知系统可能无法理解的方式增长，因此需要某种形式的自动化分析。

体积和速度也是大数据最有争议的特征。被认为是“大体积”或“高速度”的东西取决于快速发展的技术来生成、存储、传播和可视化数据。这在高通量生产、存储和传播基因组测序和基因表达数据方面得到了很好的体现，过去二十年内，数据的体积和速度都有了显著增长。同样，对大数据的理解也会随着新的分析软件的建立而迅速改变，将数据捕捉到电子表格中的想法也将成为过去。此外，数据的大小和速度并不能考虑到研究人员使用的数据类型的多样性，这些数据可能不是以数字格式生成的，或者其格式不易计算，这凸显了数据来源（即数据生成和传播的条件）对推理和解释过程的重要性。正如下文所讨论的，对数据物理特征的强调掩盖了数据解释仍然依赖于数据使用情况的事实，包括具体的查询、价值观、技能和研究环境。

另一种选择是不通过它们的物理属性来定义大数据，而是通过它们的用途来定义。从这个观点来看，大数据是从各种不同来源收集的数据的异质集合，通常（但并不总是）以适合算法处理的数字格式存在，以生成新的知识。例如，boyd 和 Crawford（2012 年：663）将大数据定义为“搜索、聚合和交叉引用大型数据集的能力”，而 O'Malley 和 Soyer（2012 年）则关注能够查询和关联不同类型的数据，以便将它们作为单一证据体进行咨询。上述转型性的“大数据研究”示例都很容易符合这个观点：在这些情况下，不仅仅是有大量的数据可用，而是有大量的数据可以从各种来源（医疗记录、环境调查、天气测量、消费者行为）中动员起来。这种解释也解释了与大数据相关的其他特征性“v-words”，包括：

* 数据的格式和用途的多样性，可能包括动物组织样本、自由文本观察、湿度测量、GPS 坐标和血液检测结果等不同的对象；
* 真实性，即大数据的质量和可靠性的程度。高容量、高速度和多样性的数据很可能存在不准确、错误和未考虑偏差的风险。在缺乏适当的验证和质量检查的情况下，这可能导致知识主张的证据基础具有误导性或完全不正确（Floridi＆Illari 2014 年；Cai＆Zhu 2015 年；Leonelli 2017 年）；
* 有效性，即指选择与预期使用相适应的适当数据。选择特定数据集作为证据基础需要充分明确的理由，包括借助相关背景知识来确定在该背景下什么被视为数据（例如，Loettgers 2009，Bogen 2010）；
* 可变性，即数据在存档技术变化的情况下能否保持可用、可访问和可重新解释的程度。这一点非常重要，因为用于生成和分析数据的格式和工具往往会过时，需要努力更新数据基础设施，以确保长期数据访问（Bowker 2006；Edwards 2010；Lagoze 2014；Borgman 2015）；
* 价值，即不同社会部门赋予大数据的多面性意义形式，这些意义形式既取决于数据的预期使用，也取决于历史、社会和地理环境（Leonelli 2016，D’Ignazio 和 Klein 2020）。除了科学价值外，研究人员可能根据数据的预期使用以及其历史、社会和地理环境赋予数据财务、伦理、声誉甚至情感价值。参与治理和资助研究的机构也有评估数据的方式，这可能并不总是与研究人员的优先事项重叠（Tempini 2017）。

这个功能列表虽然不是详尽无遗的，但突出了大数据不仅仅是“大量数据”的特点。大数据的认识力在于它们能够在不同的研究社区、方法论途径和理论框架之间架起桥梁，而这些桥梁由于概念碎片化、社会障碍和技术困难而难以连接（Leonelli 2019a）。事实上，对大数据的呼吁往往出现在技术、概念和社会上具有挑战性的调查情境中，现有的方法和资源已被证明不足或不适当（Sterner＆Franz 2017; Sterner，Franz＆Witteveen 2020）。

这种对大数据的理解根植于研究人员长期以来对大规模和复杂数据集的探索，如天文学、气象学、分类学和人口统计学等领域（参见 Daston 2017、Anorova 等人 2017、Porter＆Chaderavian 2018，以及 Anorova 等人 2010、Sepkoski 2013、Stevens 2016、Strasser 2019 等）。同样，生物医学研究，特别是流行病学、药理学和公共卫生等子领域，长期以来一直致力于处理大量、速度快、种类多样和易变的数据，其有效性、真实性和价值经常由患者、政府、资助机构、制药公司、保险公司和公共机构进行协商和争议（Bauer 2008）。在 20 世纪，这些努力推动了技术、机构和工具的发展，以收集、整理、可视化和分析数据，例如：标准分类系统和格式；管理和保护敏感数据的指南、工具和法规；以及整合和维持长时间数据收集的基础设施（Daston 2017）。

这项工作通过应用计算技术、建模工具和统计方法于大数据（Porter 1995; Humphreys 2004; Edwards 2010），最终达到了数据分析的边界。受监督学习、模型拟合、深度神经网络、搜索和优化方法、复杂数据可视化以及其他与人工智能相关的工具的推动，大数据分析的能力不断提升。其中许多工具都基于算法，这些算法的功能和结果是通过对特定数据样本进行测试的（这个过程称为“训练”）。这些算法被编程为能够从与新数据的每次交互中“学习”：换句话说，它们有能力根据输入到系统中的新信息来改变自己，从而更加适应它们正在分析的现象，并提高其预测未来行为的能力。这种变化的范围和程度受到用于构建算法的假设以及相关软件和硬件的能力的影响，这些软件和硬件能够识别、访问和处理与所讨论的学习相关的信息。然而，这些系统存在一定的不可预测性和不透明性，可能会发展到超出人类理解的程度（下文将详细讨论）。

新的机构、沟通平台和监管框架也出现了，以收集、准备和维护这些数据（Kitchin 2014），例如各种形式的数字数据基础设施、旨在协调和改善全球数据格局的组织（例如研究数据联盟）以及欧盟于 2017 年推出的《通用数据保护条例》等数据保护新措施。这些技术和机构共同提供了在更广泛的范围内汇集和解释数据的机会，同时也承诺在数据分析中提供更精细的细节层次。[1]它们通过使研究人员能够将自己的发现与世界各地无数其他人的发现联系起来，无论是在学术领域内还是在学术领域之外，扩大了任何调查的范围。通过增强数据的流动性，它们促进了数据在最初生成时可能无法预见的各种目标上的再利用。通过改变数据在研究中的角色，它们提高了它们作为有价值的研究成果的地位。这些技术和方法论的发展对数据的哲学概念、推理过程和科学知识以及研究的进行、组织、管理和评估方式都有重要影响。现在我将转向这些哲学问题。

## 2. 推断数据模式：统计学和软件的作用

大数据通常与数据驱动的研究理念相关联，其中学习是通过积累数据并应用方法从中提取有意义的模式来实现的。在数据驱动的探究中，研究人员被期望以数据作为归纳推理的起点，而不依赖于理论先入之见——这种情况被倡导者描述为“理论的终结”，与理论驱动的方法相对应，其中研究包括对假设进行测试（Anderson 2008，Hey et al. 2009）。至少在原则上，大数据构成了有史以来最大的数据池，因此是搜索相关性的强大起点（Mayer-Schönberger＆Cukier 2013）。数据驱动方法的可信度关键在于从数据中推断模式的方法的有效性，以及评估这些模式是否有意义，以及“意义”首先可能涉及什么。因此，一些哲学家和数据学者认为

> 大数据最重要和独特的特征是其使用统计方法和计算分析手段（Symons＆Alvarado 2016：4）

例如机器学习工具，深度神经网络和其他“智能”数据处理实践。

将数据中提取的模式的有效性和可靠性的统计重视并作为关键裁决者并不是新颖的。逻辑经验主义的倡导者寻求逻辑上严密的方法来确保和证明从数据中推断出的结论，并且他们在二十世纪上半叶科学中统计推理的巩固过程中努力发展了概率理论（Romeijn 2017）。在 1960 年代初，Patrick Suppes 通过他对数据模型的生成和解释的工作，为统计方法和科学哲学之间建立了一个重要的联系。作为一个深入参与实验实践的哲学家，Suppes 对于数据分析中的关键统计程序的手段和动机，如数据简化和曲线拟合，非常感兴趣。他认为，一旦数据为统计建模做好充分准备，所有激发数据处理的关注和选择都与其分析和解释无关。这启发他区分了理论模型、实验模型和数据模型，并指出这些不同的研究组成部分受不同的逻辑支配，不能以直接的方式进行比较。例如，

> 对于任何给定实验的数据模型的精确定义要求在实验过程的意义上存在一个数据理论，以及在研究的经验理论的普通意义上存在一个数据理论。（Suppes 1962: 253）

Suppes 将数据模型视为必然的统计模型：也就是说，作为描述数据的对象

> 设计为将实验的所有信息纳入其中，以便在理论的充分性统计检验中使用。（Suppes 1962: 258）

他对数据模型的正式定义反映了这个决定，将同质性、平稳性和顺序等统计要求确定为识别数据模型 Z 并评估其充分性的最终标准：

> 如果存在一个集合 Y 和一个概率测度 P，使得 Y=⟨Y,P⟩是实验理论的一个模型，Z 是 Y 的 N 元组，并且 Z 满足同质性、平稳性和顺序的统计检验，则 Z 是实验 Y 的 N 重模型。（1962: 259）

这种对数据模型的分析将统计方法描绘为数据和理论之间的关键媒介，因此是推理推断的重要组成部分。

将统计作为从数据推断讨论的入口点的关注在随后的哲学研究中得到广泛推广。著名的例子包括黛博拉·梅奥（Deborah Mayo），她在她的书《误差与实验知识的增长》中提出了以下问题：

> 数据模型应该包括什么？最重要的约束是需要允许统计评估拟合度（预测与实际数据之间的匹配）的数据模型（梅奥 1996: 136）

和 Bas van Fraassen 一样，他也接受了数据模型作为“总结数据中相对频率”的观念（Van Fraassen 2008: 167）。与此密切相关的是统计学作为检测数据集中与特定假设相关的错误的手段，这一观点得到了 Mayo 和 Aris Spanos 提出的错误统计方法的大力支持（Mayo＆Spanos 2009a）。这种方法与大数据研究中的数据分析的计算方法强调相一致，并支持这样一个观点：推理工具和方法越好，从数据中提取可靠知识的机会就越大。

然而，当涉及到解决由大数据的计算分析带来的方法论挑战时，统计专业知识需要与对人工智能相关算法的训练和应用中的计算能力相结合，包括机器学习以及其他数学程序对数据进行操作（Bringsjord＆Govindarajulu 2018）。例如，考虑到过拟合问题，即在数据集中错误地识别出模式，这可能会被机器学习算法所采用的训练技术大大放大。不能保证一个经过训练的算法在成功地从给定数据集中推断出模式时，在应用于其他数据时也同样成功。解决这个问题的常见方法包括重新排序和分割数据和训练方法，以便可以将相同算法应用于不同的数据子集（“交叉验证”），结合来自不同训练算法的预测结果（“集成”），或使用超参数（在数据训练之前设置其值的参数）来准备数据进行分析。

而解决这些问题反过来又需要

> 对所讨论的数学运算、其在代码中的实现以及支持这些实现的硬件架构的熟悉程度。（Lowrie 2017: 3）

例如，机器学习

> 旨在构建能够根据一组数据自行开发分析或描述方法的程序，而不是使用现成的解决方案，如基于规则的推理或传统统计学中的回归。（Lowrie 2017: 4）

换句话说，统计学和数学需要通过编程和计算机工程的专业知识来补充。因此，这种技能的集合构成了一种特定的认识论研究方法，其特点是强调研究目标和成果的最重要驱动力是研究手段。这种方法被 Sabina Leonelli 称为数据中心方法，它更多地关注研究的过程而不是最终结果（Leonelli 2016: 170）。从这个观点来看，程序、技术、方法、软件和硬件是研究的主要推动力和主要影响因素。更具体地说，John Symons 和 Jack Horner 认为，大数据研究的很大一部分是软件密集型科学，而不是数据驱动的研究：也就是说，科学依赖于软件进行设计、开发、部署和使用，因此包括了软件独特的程序、推理类型和错误，例如试图将现实世界的数量映射到离散状态机或近似数值运算所产生的问题（Symons & Horner 2014: 473）。软件密集型科学可以说是基于算法的合理性，重点关注算法的可行性、实用性和效率，通常通过参考具体的研究情境来评估（Lowrie 2017）。

## 3. 人工智能和人类智能

算法在其数学结构和基本概念承诺方面变化多样，并且需要在数据科学和相关应用中使用的计算工具和软件的具体问题上进行更多的哲学研究，计算机科学哲学的新兴工作为此提供了一个很好的前进方向（Turner＆Angius 2019）。然而，显然，一个给定的算法是否成功应用于手头的数据取决于无法通过统计甚至计算方法来控制的因素：例如，数据的大小，结构和格式，用于对数据进行分区的分类器的性质，决策边界的复杂性以及调查的目标。

在基于数学哲学的有力批评中，Christian Calude 和 Giuseppe Longo 认为，假设更多的数据必然会产生更多的信息存在一个根本问题：

> 非常大的数据库必须包含任意的相关性。这些相关性仅出现在数据的大小而不是性质上。（Calude＆Longo 2017：595）

他们得出结论，大数据分析在定义上无法区分虚假和有意义的相关性，因此对科学研究构成威胁。数据科学家有时称之为“维度诅咒”，担心的是在考虑的变量数量和复杂性上，给定数据集的分析能力有多大。众所周知，对于分类样本而言，考虑的维度越多，例如，这些维度能够准确地推广到的数据集就越大。这表明了数据的数量和质量与研究问题的类型和广度之间的持续紧密依赖关系，数据需要作为证据的问题。

确定推理方法与数据之间的匹配需要高水平的专业知识和情境判断（这在机器学习中被称为“没有免费午餐定理”）。事实上，过度依赖软件进行推理和数据建模可能会产生极具问题的结果。Symons 和 Horner 指出，在大数据分析中使用复杂软件使得误差边界无法确定，因为没有明确的统计测试方法（Symons 和 Horner 2014: 473）。高条件性程序的路径复杂性对标准误差修正技术施加了限制。因此，除了测试代码中的所有路径（这在绝大多数情况下是不现实和棘手的，因为代码的复杂性），没有有效的方法来描述软件中的误差分布。

与充当替代品不同，有效和负责任地使用人工智能工具进行大数据分析需要对人类智能进行战略性运用，但要实现这一点，应用于大数据的人工智能系统需要能够接受审查和修改。是否存在这种情况，以及谁最有资格进行这种审查，存在争议。托马斯·尼克尔斯（Thomas Nickles）认为，用于数据分析的日益复杂和分布式算法遵循了长期以来试图超越人类认知限制的科学努力的脚步。由此产生的认知系统可能不再可理解给人类：其中“人类能力不再是认知成功的最终标准”的“外来智能”（尼克尔斯即将发表）。这种无拘束的认知承诺能够从以前无法想象的大量数据中进行强大的推理推断。然而，对这种推理进行情境化和审查的困难对结果的可靠性产生了怀疑。不仅机器学习算法越来越难以评估：在编程代码的复杂性之外，计算数据分析需要一个完整的分类、模型、网络和推理工具生态系统，这些工具通常具有不同的历史和目的，它们之间的关系以及它们一起使用时的效果远未被理解，很可能无法追溯。

这引发了一个问题，即这些数据分析系统产生的知识是否对人类来说是可理解的，如果是的话，它会产生什么形式的可理解性。毫无疑问，从大数据中获取知识可能并不涉及对人类理解的增加，特别是如果理解被理解为一种认识技能（de Regt 2017）。对于那些期待新一代智能机器崛起的人来说，这可能不是一个问题，他们可能以人类无法掌握的方式掌握新的认知工具。但正如 Nickles、Nicholas Rescher（1984）、Werner Callebaut（2012）和其他人指出的那样，即使在那种情况下，“我们也不会得到无透视的科学”（Nickles 即将发表）。虽然这些系统中交织着人类的历史和假设可能很难分开，但它们仍然会影响它们的结果；而这些研究过程是否可以接受批判性审查，它们对地球上的生活的目标、影响和意义是否应该被讨论，这是一个有争议的问题。正如 Dan McQuillan（2018）所提出的，大数据分析的自动化可能促进对新柏拉图主义机械形而上学的接受，其中由人工智能“发现”的数学结构将超越对人类经验的任何诉求。Luciano Floridi 在他对所谓的信息领域的分析中也表达了这种直觉：

> 信息和通信技术所提供的巨大机遇伴随着对其进行正确理解和利用的巨大知识责任。（2014 年：vii）

这些考虑与 Paul Humphreys 长期以来对计算机模拟的认识上不透明性的批评（Humphreys 2004, 2009）相呼应，尤其是他对所谓的基本认识上不透明性的定义：

> 如果并且仅当给定 X 的性质，X 无法知道过程的所有认识相关要素时，过程对 X 来说基本上是认识上不透明的。（Humphreys 2009: 618）

在科学中，关于建模、计算和模拟的角色的广泛哲学学术中，强调了认识上不透明的一般问题的不同方面：例如，对于被建模的具体世界的实验访问的缺乏影响（Morgan 2005; Parker 2009; Radder 2009）；测试模拟中使用的计算方法的可靠性的困难（Winsberg 2010; Morrison 2015）；不透明性与证明之间的关系（Durán & Formanek 2018）；与计算分析中实施的机械推理相关的黑盒化形式（Craver and Darden 2013; Bechtel 2016）；以及关于计算方法和相关专业知识的内在限制的辩论（Collins 1990; Dreyfus 1992）。Roman Frigg 和 Julian Reiss 认为，这些问题并不构成对探究和建模性质的基本挑战，实际上与科学中已知的传统方法论问题在一个连续体中存在（Frigg & Reiss 2009）。无论是否同意这个观点（Humphreys 2009; Beisbart 2012），大数据分析显然正在推动计算和统计方法的极限，从而突显了即使是技术增强的人类也能够知道和理解的边界。

## 4.（大）数据的性质

大数据分析的研究因此揭示了研究过程中无法完全控制、理性化甚至通过正式工具考虑的要素。

其中一个要素是将经验数据以与软件和分析工具兼容的机器可读格式呈现所需的工作。数据需要被选择、清理和准备好以进行统计和计算分析。将数据与噪声分离、对数据进行聚类使其易于处理以及整合不同格式的数据的过程被证明是高度复杂和理论结构化的，例如詹姆斯·麦卡利斯特（James McAllister）（1997、2007、2011）和乌尔雅娜·费斯特（Uljana Feest）（2011）关于数据模式的研究、马塞尔·鲍曼斯（Marcel Boumans）和莱奥内利（Leonelli）对不同领域聚类原则的比较（即将发表）、詹姆斯·格里斯默（James Griesemer）（即将发表）和玛丽·摩根（Mary Morgan）（即将发表）对数据集的特殊性进行分析。苏普斯（Suppes）对所谓的数据生产和处理活动的“令人困惑的复杂性”非常关注，他担心哲学家们不会欣赏统计学如何帮助科学家将数据从这种复杂性中抽象出来。他将用于准备数据进行建模的大量研究组成部分和活动描述为“实用方面”，包括“与实验设计相关的每一个直观考虑，不涉及正式统计学”（Suppes 1962: 258），并将它们定位为模型层次结构的最低层次——与其巅峰相反，即理论模型。尽管最近有努力恢复归纳-统计建模和推理的方法（Mayo & Spanos 2009b），但许多哲学家认为数据生产和处理过程如此混乱，以至于无法进行系统分析。这解释了为什么与模型和理论相比，数据在科学哲学中受到的关注如此之少。

然而，数据的定义和识别方式对于理解大数据在科学研究中的作用至关重要。现在让我们考虑两种哲学观点——表征观和关系观，它们都与大数据的出现相容，但强调现象的不同方面，对于理解数据在推理推断和作为证据的角色有重要影响，我们将在下一节中看到。表征观将数据解释为可靠地反映现实的表征，这些表征是通过人类与世界的互动产生的。产生数据的互动可以发生在任何社会环境中，不论研究目的如何。例如，从生物学家在实验室测量细胞周长并将结果记录在 Excel 文件中，到教师统计班级学生人数并在班级登记册上记录。在这些互动中，被视为数据的是在描述和/或测量世界过程中创建的对象。这些对象可以是数字的（Excel 文件）或物理的（班级登记册），它们形成了与自然世界特定互动的痕迹。正如 Ian Hacking（1992）和 Hans-Jörg Rheinberger（2011）所说的，这种痕迹构成了分析研究和提取新见解的重要参考点。这就是为什么数据形成了经验知识的合法基础的原因：数据的产生相当于“捕捉”可以用于系统研究的世界特征。根据表征方法，数据是具有固定且不可改变内容的对象，其意义需要通过适当的推理方法逐步调查和揭示，因为它们是现实的表征。 伪科学可以对记录细胞形状的数据进行建模，以测试形状与细胞的弹性、渗透性和弹性的相关性，从而产生一个证据基础，以理解细胞间的信号传递和发育。记录班级中学生人数的数据可以与其他学校收集的类似数据进行汇总，从而产生一个证据基础，以评估该地区学生的密度和他们的学校出勤频率。

这反映了数据的直觉，尤其是当它们以数值测量或图像（如照片）的形式出现时，它们以某种方式反映了它们被创建来记录的现象，从而在研究的受控条件下提供了对这些现象的快照，可供研究。它还反映了数据作为研究的“原始”产品的观念，这些数据是接近于对现实的非中介知识。这解释了数据有时被赋予不可辩驳的证据来源的真值的概念 - 如果发现数据支持某个主张，那么该主张至少在没有其他数据证明其错误之前被证实为真。从这个观点来看，数据代表了获取知识的客观基础，而这种客观性 - 即从人类经验中获得知识并超越它的能力 - 正是使知识成为经验性的。这个立场与大数据对科学有价值的观点是一致的，因为它促进了（广义上理解的）归纳知识的积累：通过可靠的方法收集数据产生了大量的事实，可以进行分析，而且产生越多的事实并相互连接，就可以提取更多的知识。

哲学家们长期以来已经认识到数据本身并不能说明问题，不同类型的数据需要不同的分析工具和准备工作才能进行解释（Bogen 2009 [2013]）。根据代表性观点，解释数据存在正确和错误的方式，数据分析的责任人需要揭示出来。但在大数据领域，什么是“正确”的解释呢？在这个领域中，数据被持续地视为可以在无数不同方式和目标中重复使用的流动实体。也许在科学史上的任何其他时期，当前大数据的动员和重复使用凸显了数据解释的程度，以及数据所代表的内容可能因为概念、物质和社会条件的不同而有所不同。对大数据在不同背景中的传播进行分析表明，参与者的期望和能力不仅决定了数据的解释方式，还决定了首先被视为“数据”的内容（Leonelli & Tempini 即将发表）。将数据视为具有固定和与背景无关的意义的对象的代表性观点与这些观察结果不符。

一个替代方法是接受这些发现，并完全放弃将数据视为现实的固定表征的想法。在关系视图中，数据被视为科学主张的潜在或实际证据，并且至少在原则上可以接受审查和解释（Leonelli 2016）。赋予数据的意义取决于它们的来源、物理特征以及这些特征被认为代表的内容，以及用于可视化和捍卫特定解释的动机和工具。因此，数据的可靠性取决于用于生成和分析数据的可信度和严谨性。数据的呈现方式，它们的识别、选择和包含（或排除）在数据库中的方式，以及向用户提供的重新背景化信息对于生成知识并显著影响其内容至关重要。例如，数据格式的变化（如数字化、数据压缩或归档过程中最明显的变化）可能会对使用数据作为知识来源的地点、时间和使用者产生重大影响。

这个框架承认任何对象都可以被用作数据，或者根据情况停止使用作为数据，这一点对于习惯于从各种各样的来源挑选和混合数据的大数据分析师来说是熟悉的。关系视图还解释了同一数据集根据研究视角的不同可能用于代表世界的不同方面（正如詹姆斯·博根和詹姆斯·伍德沃德在 1988 年所描述的“现象”）。当从数据生成和分析的角度考虑科学探究的完整循环时，数据建模阶段赋予数据特定的表征价值（Leonelli 2019b）。

数据的关系视角鼓励关注数据的历史，突出它们的持续演变和有时的根本改变，以及这一特征对数据确认或反驳假设的能力的影响。它解释了记录数据管理和转换过程的重要性，特别是对于通过数字渠道远距离传输并以不同方式和格式进行分组和解释的大数据。它还解释了那些生产、策划和分析数据的专业人员的专业知识在科学内外对大数据的有效解释中的不可或缺性；以及数据共享的潜在影响和数据质量、有效性和安全性方面的社会和伦理关切之间的密不可分的联系（boyd 和 Crawford 2012；Tempini 和 Leonelli，2018）。

根据对数据的不同观点，对大数据在科学中的作用的期望会有很大的差异。表征视角接受大数据作为提供科学史上最全面、可靠和生成性知识基础的观点，这是由于其庞大的规模和异质性。关系视角不做此承诺，而是专注于从这些数据中得出的推论，以及如何和为什么得出这些推论。

## 5. 大数据和证据

众所周知，表征观和关系观都认同数据在知识主张或干预中作为经验证据的关键认识论角色。尽管有大量关于证据性质的哲学文献（例如，Achinstein 2001；Reiss 2015；Kelly 2016），但数据与证据之间的关系却受到较少关注。这可能是因为许多哲学家对数据的表征观持默许态度。在表征观中，确定什么是数据的认定优先于研究这些数据可以作为证据的内容：换句话说，数据是“给定的”，正如词源所示，推理方法负责确定调查人员可用的数据是否以及如何作为证据使用。哲学关注的重点因此是形式方法，以确定错误和误导性解释，并确定被普遍认为是一组证据和给定假设之间的概率和/或解释关系。因此，关于证据的广泛哲学研究往往避免使用“数据”一词。Peter Achinstein 的开创性工作就是一个例子：它讨论了观察到的事实和实验结果，以及科学家在何种条件下有理由相信这些事实，但没有提及数据和相关处理实践（Achinstein 2001）。

相比之下，在关系观中，只有当一个对象被视为具有证据价值时，它才能被确定为数据。证据成为数据识别的一种类别，而不是表征观中数据使用的一种类别（Canali 2019）。因此，证据构成了数据概念本身，无法与其分离。这意味着接受一个给定对象能够作为证据的条件可能会改变；如果这种证据角色完全停止，该对象将恢复成普通的非数据项。例如，游客在偏远地区拍摄的一棵植物的照片可能成为研究该特定地区植物形态的证据；然而，大多数植物照片从未被视为研究世界特征和功能的证据，而那些被视为证据的照片中，许多可能随后被丢弃，因为它们不再有趣或与所提出的问题不再相关。

这种观点解释了大数据使用中的流动性和再利用性，以及原本不是为了作为证据而生成的对象后来可能被采用为证据的可能性。考虑 Mayo 和 Spanos 提出的“证据的最小科学原则”，他们将其定义如下：

> 如果数据 x0 是通过一种几乎没有能力发现 H 中缺陷的方法或过程产生的，即使 H 是错误的，它们也为 H 提供了较差的证据。（Mayo＆Spanos 2009b）

这个原则与数据的关系观相容，因为它包括了生成和处理数据的方法可能并非针对测试假设 H 的情况：它只要求这些方法能够与在使用数据作为 H 的证据时进行测试相关，（我将在下一节中回到假设在处理证据中的作用）。

关系观还强调了数据格式化和处理实践对将数据视为证据的处理的相关性，从而将注意力从数据对象本身的特征转移到与这些特征相关的行为体和行为体所能实现的功能上。Nora Boyd 提供了一种将数据处理概念化为推理过程的一个组成部分，以及我们应该如何理解证据的方法。为此，她引入了“证据线”的概念，她将其定义为：

> 一系列经验结果，包括数据收集记录和在达到某个最终经验约束之前生成的所有后续数据处理产品。（Boyd 2018:406）

她因此提出了一种将数据和处理数据的方式都纳入考虑的证据概念，并强调在解释数据时使用的辅助信息的重要性，其中包括有关数据记录来源和转换工作流程的元数据。(2018: 407)

> 正如她的结论所指出的，

As she concludes,

> 一起，证据线和其相关的元数据组成了我所称之为“丰富的证据线”。证据语料库由许多这样的丰富证据线组成。（2018 年：407）

因此，关系观促进了一种功能性和情境主义的证据方法，作为一种或多种对象被用作特定知识项目的保证方式（可以是命题性主张，也可以是特定决策或行为方式/操作方式的行为）。这与 Reiss（2015）对证据的情境观、John Norton 关于支持归纳推理的多重纠缠推理线索的工作（2003）以及 Hasok Chang 对于确立证据主张所需的认识活动的强调（2012）相吻合。在这些思想和 Stephen Toulmin 关于研究模式的开创性工作（1958）的基础上，Alison Wylie 在评估研究人员（尤其是考古学家，他们经常被要求重新评估相同数据作为新主张的证据；Wylie 2017）需要理解其数据、以能够抵御潜在挑战的方式进行解释，并在面对新发现时修改解释的推理脚手架方面更进一步。这种分析使 Wylie 能够制定一套稳健的证据推理条件，其中包括证据链的认识安全性，作为证据使用的数据的因果锚定和因果独立性，以及明确表达仪器和方法校准的基础（Chapman＆Wylie 2016；Wylie 即将出版）。Jessey Wright 对神经科学家用于理解脑部功能磁共振成像（fMRI 扫描）的各种数据分析技术的评估得出了类似的结论：

> 不同的数据分析技术揭示了数据中不同的模式。通过使用多种数据分析技术，研究人员可以产生局部稳健的结果。（Wright 2017: 1179）

Wylie 和 Wright 的分析示范了一种关系性方法对数据的促进，这种方法培养了对“良好证据”的规范理解，该理解以情境判断为基础，即评估证据主张的相关性和重要性的人类特权。这种证据观点的优势在南希·卡特赖特对哲学理论和政策方法的批评中得到了 eloquently 的表达，这些理论和方法没有认识到证据推理的局部和情境性质。正如她所指出的，

> 我们需要一个概念，可以指导我们在决定假设的概率时考虑什么是相关的，而不是要求我们已经了解关于各种证据上假设概率的重要事实。（Cartwright 2013: 6）

因此，她主张一种不太严格的证据概念，考虑到结合和选择证据的困难，并允许在特定调查中对何种类型的证据最合适进行情境判断（Cartwright 2013, 2019）。Reiss 提出的实用主义证据理论的建议同样旨在认真对待科学实践[..]，既在于更多地利用关于科学实践条件的知识，也在于旨在开发对实践科学家有意义的见解（Reiss 2015: 361）。

> 基于对数据处理和聚合方式的研究，更好地描述数据与证据之间的关系可能在很大程度上解决这些要求。正如詹姆斯·伍德沃德所言，数据与主张之间的证据关系并不是“纯粹形式的、逻辑的或先验的问题”（Woodward 2000: S172–173）。这再次与大数据分析可能自动化科学发现并使人类判断变得多余的期望不符。

A better characterisation of the relation between data and evidence, predicated on the study of how data are processed and aggregated, may go a long way towards addressing these demands. As aptly argued by James Woodward, the evidential relationship between data and claims is not a “a purely formal, logical, or a priori matter” (Woodward 2000: S172–173). This again sits uneasily with the expectation that big data analysis may automate scientific discovery and make human judgement redundant.

## 6. 大数据，知识和探究

现在让我们回到数据驱动的探究的概念，这常常被提出作为与假设驱动的科学相对的观点（例如，Hey 等人，2009 年）。Kevin Elliot 和同事们提供了一个关于假设驱动探究的简要历史（Elliott 等人，2016 年），强调科学机构（包括资助计划和出版场所）如何推动研究人员朝着波普尔式的探究概念的方向发展，即将其视为一个强假设的制定和测试过程。大数据分析明显指向了一种不同的、可以说是培根式的对科学中假设角色的理解。理论期望不再被视为驱动探究过程的因素，而经验输入被认为是决定研究方向和研究人员考虑的现象及相关假设的主要因素。

数据作为研究的核心组成部分的强调对于科学知识中最为确立的哲学观点之一构成了重大挑战。根据这个观点，我将其称为以理论为中心的科学观，科学知识由对世界的合理真实信念组成。这些信念是通过经验方法获得的，旨在测试描述或解释现实方面的陈述的有效性和可靠性。因此，科学知识被概念化为本质上是命题性的：作为输出的是在书籍和期刊中发表的主张，这些主张通常也被呈现为对假设驱动的探究的解决方案。这个观点承认方法、数据、模型、仪器和材料在科学研究中的重要性，但最终将它们视为达到一个目标的手段：获得关于世界的真实主张。莱辛巴赫（Reichenbach）关于发现和证明背景的重要区分是这一立场的典型例证（Reichenbach 1938）。以理论为中心的观点承认数据和相关实践技能等研究组成部分对于发现至关重要，更具体地说，对于涉及价值判断、试错、直觉和探索的科学工作中混乱、非理性的部分，其中要研究的现象可能尚未稳定。相比之下，主张的证明涉及对已进行的研究进行合理重构，以使其符合推理推断的既定规范。重要的是，在证明的背景下，只有支持感兴趣主张的数据被明确报告和讨论：其他一切，包括在探究过程中产生的绝大部分数据，都丢失在混乱的发现背景中。[2]

最近的科学哲学，尤其是建模和实验，挑战了以理论为中心的观点，强调模型、方法和干预方式作为研究成果而非简单工具的角色，并强调扩展哲学对科学知识的理解，将这些要素与命题性陈述并列。大数据的兴起为重新构建科学知识的理解提供了另一个机会，不一定以理论为中心，而是包括非命题性组成部分。因此，卡特赖特在吉尔伯特·莱尔著名区分的基础上，重新聚焦于知道如何而非知道那个（卡特赖特，2019）。将以数据为中心的方法解释为能力的概念是一种方式，早期实用主义者如约翰·杜威以及最近由张教授重新提出的方式，特别强调将其作为更广泛范畴中的知识理解，而非仅仅是信息（张教授，2017）。

解释大数据兴起的另一种方式是将其视为归纳主义在面对几个世纪以来针对无理论推理的哲学批评的背景下的辩护。例如，乔恩·威廉姆森（2004 年：88）认为，自动化的进步与大数据的出现相结合，使归纳主义科学哲学变得可信。沃尔夫冈·皮切斯（Wolfgang Pietsch）同意这种观点，并提供了一个复杂的框架来理解大数据和相关机器学习方法（如决策树）所引发的归纳推理的类型（Pietsch 2015）。他遵循约翰·斯图尔特·密尔（John Stuart Mill）的观点，将这种方法称为变分归纳，并将其呈现为大数据方法和探索性实验的共同特点，尽管前者可以处理更多的变量（Pietsch 2015：913）。皮切斯得出结论，机器学习中的理论负荷问题可以通过确定变分归纳在哪些理论假设下起作用来解决（2015：910ff）。

其他人不太倾向于将理论负荷视为可以通过数据密集方法减轻的问题，而是将其视为经验研究过程的组成部分。回顾关于透视主义和实验的广泛文献（Gooding 1990；Giere 2006；Radder 2006；Massimi 2012），沃纳·卡勒鲍特（Werner Callebaut）强烈主张最复杂和标准化的测量体现了特定的理论观点，大数据也不例外（Callebaut 2012）。埃利奥特和同事强调，将大数据分析概念化为无理论的做法会鼓励对经验调查的不成熟态度，可能导致荒谬的结果或虚假的相关性，依赖于在数据分析方面没有足够专业知识的科学家，并产生由收集方式引起的数据偏差（Elliott et al. 2016：880）。

> “钓鱼远征”，有很高的可能性导致无意义的结果或虚假的相关性，依赖于在数据分析方面没有足够专业知识的科学家，并产生由收集方式引起的数据偏差（Elliott et al. 2016：880）

为了解决遗传分析中的相关担忧，Ken Waters 提出了“理论驱动”的有用描述（Waters 2007），可以强调理论如何影响从大数据中提取有意义模式的方法，但并不一定确定数据密集型科学的起点或结果。这并没有解决理论实际起到的作用问题。Rob Kitchin（2014）提出将大数据视为假设推导框架中的新型假设生成模式。Leonelli 对于将多样的大数据方法与特定类型的推理逻辑相匹配的尝试持怀疑态度。她更关注大数据分析中的理论装置在如何对数据进行排序和分类的概念决策上的程度，并提出这样的决策可能导致一种特定形式的理论化，她称之为分类理论（Leonelli 2016）。

这些分歧指出，大数据引发了对知识和探究性质的多样理解，以及不同推理方法之间复杂的迭代过程。再次引用 Elliot 和同事的话，

> 试图在假设驱动和数据密集型科学之间划清鲜明界限是误导性的；事实上，这些研究模式并不正交，而且在实际科学实践中经常交织在一起。（Elliott et al. 2016: 881，另请参阅 O'Malley et al. 2009，Elliott 2012）

## 7. 大数据在因果关系和预测之间

另一个与大数据反思密切相关的认识论辩论涉及数据为中心的研究形式所产生的特定知识类型，特别是预测性知识和因果性知识之间的关系。

大数据科学被广泛认为在支持预测能力方面具有革命性。或许并不令人意外的是，对这一立场进行哲学上的深入辩护来自于数学哲学领域，Marco Panza、Domenico Napoletani 和 Daniele Struppa 认为大数据科学引发了数学分析能够产生的预测性知识的重大转变，从而在更广泛的知识生产过程中发挥了作用。他们提出，大数据分析的整个重点在于对因果性知识的忽视：

> 通过将数据与不带有任何结构理解的模型进行自动拟合的过程，可以找到答案，这些模型仅仅解决问题本身的实际解决方案。(Napoletani, Panza, & Struppa 2014: 486)

这种观点与“理论的死亡”(Anderson 2008)和“相关性的力量”(Mayer-Schoenberg 和 Cukier 2013)的简单化流行话语不同，因为它没有回避与从大数据分析中提取的知识和概括相关的限制。Napoletani、Panza 和 Struppa 认识到，数学推理过度决定经验输入的能力存在不可避免的紧张关系，甚至可以为数据的任何可能解释提供理由。用他们的话来说，

> 面临一个问题，即在历史现象的发展过程中，我们如何获得有意义的理解，考虑到它们的潜在可变性之大。(Napoletani 等，2014: 487)

他们的解决方案是澄清理解现象不是预测推理的目标，而是一种不可知的科学形式：“在没有结构化和普遍理解的情况下进行预测和分析的可能性”（Napoletani 等，2011 年：12）。算法合理性的不透明性因此成为其关键优点，也是基于大数据的预测在认识上取得非凡成功的原因。虽然“现象可能永远对我们的理解隐藏”（同上：5），但数学模型和算法在大数据上的应用仍然可以提供有意义和可靠的答案给明确问题，类似于对于错误模型的论证（Wimsatt，2007 年）所提出的观点。例如，使用“强制”方法，如正则化或扩散几何，以从混乱的数据集中提取有用的见解。

这种观点与将科学理解视为科学的主要目标的解释相矛盾（de Regt，2017 年），以及研究人员最终感兴趣的是不透明的数据模型生成的机器学习技术是否算作输入和输出之间关系的解释（Boon，2020 年：44）。

> whether the opaque data-model generated by machine-learning technologies count as explanations for the relationships found between input and output. (Boon 2020: 44)

在生物哲学中，例如，人们广泛认识到大数据有助于有效提取模式和趋势，并且能够对生物体或生态系统未来的行为进行建模和预测非常重要，特别是在生物医学或保护科学等应用领域。与此同时，研究人员对观察到的相关性的原因感兴趣，并通常使用预测模式作为启发式方法来探索、发展和验证关于实体和过程结构与功能的因果主张。Emanuele Ratti（2015）认为，在癌症基因组学中经常使用的大规模关联研究中，大数据挖掘实际上可以支持机械推理，例如通过支持排除性推理来发展机械假设，并帮助探索和评估用于分析数据的概括。在类似的思路上，Pietsch（2016）提出使用变分归纳作为一种方法来确定大数据模式之间的因果关系，重点关注哪些分析策略能够实现可靠的预测和有效的操纵现象。

通过对流行病学中数据采集和处理的研究，Stefano Canali 反而强调了从大数据分析中得出机械性主张的困难，特别是当数据多样且具有不兼容的观点和方法论方法时（Canali 2016, 2019）。相关地，组织大数据的语义和后勤挑战使人们对从这些数据中提取的因果主张的可靠性产生怀疑。在后勤方面，拥有大量数据并不意味着拥有所有数据，而且培养全面性的幻觉是一种冒险且可能具有误导性的策略，特别是考虑到开发和应用除高通量“组学”方法之外的数据的策展标准所面临的挑战（另见下一节）。对数据的偏见和可靠性的持续担忧反映在数据库策展人员在使数据库用户评估这些属性方面所付出的努力上；以及研究人员自身，特别是在生物和环境科学领域，对评估在互联网上找到的数据质量的重视（Leonelli 2014，Fleming et al. 2017）。在语义方面，我们回到了数据分类作为大数据分析的理论支架的角色，这是我们在前一节中讨论过的。对数据进行分类和可视化的分类学努力为从这些数据中提取的因果推理提供了信息（Sterner＆Franz 2017），并且可以构成一种自下而上的方法，即在没有完整的理论或解释可用于研究对象的情况下，以比较推理为基础为数据模型赋予意义（Sterner 2014）。

这并非巧合，从大数据中提取因果和预测知识之间的关系的哲学工作很大程度上来自生命科学的哲学领域，在那里，缺乏公理化理论引发了对推理推理中理论形式和功能多样性的复杂观点。此外，生物数据在内容和格式上都是异质的；它们被策划和重新利用以满足高度不同和碎片化的认识社群的需求；并且对策划者提出了特定的挑战，涉及跟踪复杂、多样和不断演化的有机结构和行为，其与不断变化的环境的关系很难稳定地确定（例如，Shavit＆Griesemer 2009）。因此，在这个领域中，实验研究的一些核心方法和认识论关注点，包括探索性实验、抽样和寻找因果机制，仍然是数据中心查询的重要组成部分。

## 8. 事实/价值区分

在本文的开头，我将“价值”列为大数据的一个重要特征，并指出了评估程序在识别、处理、建模和解释数据作为证据方面的关键作用。识别和协商不同形式的数据价值是大数据分析中不可避免的一部分，因为这些估值实践决定了哪些数据向谁提供，在哪些条件下以及为了哪些目的。研究人员选择将什么数据（和数据来源）视为可靠数据与他们的研究目标和解释方法密切相关，也与他们对数据生产、打包、存储和共享的方法相关。因此，研究人员需要考虑他们的数据对自己和他人未来研究的价值，以及如何增强这个价值，比如通过决定哪些数据以何种方式、何时以及以何种格式公开；或者，每当处理已经在公共领域（如社交媒体上的个人数据）中的数据时，决定是否应该共享和使用这些数据，以及如何处理。

无论一个人如何概念化价值实践，很明显，它们在数据管理和分析中的关键作用阻止了价值和“事实”（即数据提供证据支持的命题性主张）之间的轻率区分。例如，考虑一个既重视开放性（以及广泛数据共享相关实践）又重视科学严谨性（需要严格监控数据解释条件的可信度和有效性）的研究人员。大数据的动员和分析规模和方式在这两个价值观之间产生了紧张关系。虽然对开放性的承诺可能会促使对数据共享产生兴趣，但对严谨性的承诺可能会阻碍它，因为一旦数据在网上自由流通，很难控制它们如何被解释，由谁以及使用哪些知识、技能和工具。研究人员如何应对这种冲突将影响哪些数据可用于大数据分析以及在什么条件下可用。同样，不同数据集的三角测量和比较程度取决于数据和相关分析工具所属的知识产权制度。私有数据通常对公共资助的研究人员不可用；而许多用于大数据分析的算法、云系统和计算设施只对有足够资源购买相关访问和培训的人可用。因此，大数据分析所得出的任何主张都严重依赖于社会、财务和文化约束，这些约束影响着数据池及其分析。

这种价值在塑造与数据相关的认识实践中的突出作用并不令人意外，因为现有的哲学批评已经对事实/价值区分进行了批判（例如，道格拉斯 2009 年），而关于科学中的价值的现有文献，例如海伦·朗吉诺（Helen Longino）在她 1990 年的著作《科学作为社会知识》中提出的构成性价值和背景价值之间的重要区别，可能也适用于这种情况。同样，众所周知，技术和社会条件对研究的设计和结果有很大影响。在大数据的情况下，特别令人担忧的是，由于对数据分析能力的夸大期望，人们很容易忽视或把价值选择置于次要位置，而这些价值选择是支撑大数据提取方法、基础设施和算法的基础。

考虑到高通量数据生产工具的使用，这些工具使研究人员能够轻松生成大量的数据，并以已经适合计算分析的格式呈现。就像其他技术一样，研究人员有很大的动力采用这些工具进行数据生成；即使在这些工具不是追求特定调查的最佳方式甚至不适合的情况下，他们也可能这样做。乌尔里希·克罗斯（Ulrich Krohs）使用方便实验这个术语来指代采用的实验设计，并不是因为它们是追求特定调查的最合适方式，而是因为它们易于获取和使用，因此是研究人员追求目标的“便利”方式（Krohs 2012）。

对便利性的诉求可以延伸到数据密集型分析的其他方面。并非所有数据都同样容易通过现有算法进行数字化收集、传播和链接，这使得某些数据类型和格式对于计算分析来说更加方便。例如，研究数据库通常展示了资源充足的实验室在处理“可处理”数据格式（如“组学”）方面的成果。实际上，资源、基础设施和技能的现有分布决定了大数据在研究中的生产、传播和使用中存在高度的不平等。拥有大量财力和技术资源的大型参与者正在引领数据分析工具的发展和应用，这使得全球范围内许多公共资助的研究成为这一领域创新的接受方。与数据革命被描绘为透明、民主和社会平等的普遍观点相反，能够访问和使用数据技术的人与不能的人之间的数字鸿沟不断扩大。这种分歧的结果之一是与某些亚群体和地理位置相关的数据的稀缺性，这再次限制了可用数据资源的全面性。

在大数据基础设施的广阔生态系统中，很难跟踪这些扭曲并评估它们对数据解释的重要性，特别是在通过不同价值观的呼吁而结构化的异构数据源被混合在一起的情况下。因此，方便数据集和分析工具的系统聚合往往导致一个大数据池，其中无法找到和解释相关偏见的来源和形式（Pasquale 2015; O’Neill 2016; Zuboff 2017; Leonelli 2019a）。在这样的背景下，主张事实与价值之间的分离，甚至在知识生产中认识论价值和非认识论价值的角色之间明确区分，变得非常困难，否则将使整个大数据科学的基础不可信。然而，考虑到这种方法已经渗透到所有领域的研究中，批评大数据科学中充满价值的结构而不质疑科学本身的合法性可能是不可能的。更具建设性的方法是接受大数据科学根植于人类选择、利益和价值的程度，并确定这如何影响对知识、真理和方法的哲学观点。

## 9. 大数据风险与数据科学的伦理

总结一下，考虑到与大数据研究相关的风险和伦理问题至关重要。正如前一节中已经提到的，依赖强大机构或公司收集的大数据会引发重大社会关切。与将大数据视为民主社会参与研究的先兆相反，科学研究的治理和资金来源并未受到大数据的挑战。相反，某些类型的数据（例如个人数据）的商品化和高价值赋予，导致了不同国家、人口群体和科学界之间权力和可见性的不平等增加（O’Neill 2016；Zuboff 2017；D’Ignazio 和 Klein 2020）。那些不仅能够访问数据，还能够使用数据的人与那些不能的人之间的数字鸿沟正在扩大，从数字鸿沟演变为“数据鸿沟”的状态（Bezuidenout 等，2017 年）。

此外，数据的私有化对研究界及其所产生的知识有着严重的影响。首先，它影响了哪些数据被传播以及传播的期望。企业通常只会发布它们认为商业价值较低且需要公共部门协助解释的数据。这在在线可获取的数据来源和类型上引入了另一种扭曲，而更昂贵和复杂的数据则被保密。甚至许多鼓励公民（包括研究人员）与数据库和数据解释网站互动的方式往往鼓励产生进一步商业价值的参与。社会学家最近将这种社会参与形式描述为一种剥削形式（Prainsack＆Buyx 2017; Srnicek 2017）。反过来，这些利用数据的方式加强了它们的经济价值而不是科学价值。当涉及到分析公司之间的个人数据交易时，数据作为商业产品的价值（包括评估访问某些数据能够帮助开发新产品的速度和效率）往往优先于科学问题，例如数据的代表性和可靠性以及分析方法。这可能导致在科学上存在问题的决策，或者根本不关心对所假设和使用的过程的后果进行调查。这种缺乏兴趣很容易导致对数据中的歧视、不平等和潜在错误的无知。这种无知是高度战略和经济生产力的，因为它使得在使用数据时不必考虑社会和科学的影响。在这种情况下，对数据质量的评估缩小为对其对客户所需的短期分析或预测的有用性的评估。 在这个系统中，没有激励机制来鼓励对数据分析的长期影响进行评估。这里的风险是，数据的商业化伴随着数据与其背景之间的日益分歧。对数据传输历史的兴趣、它们情感或科学价值的多样性以及对其起源的重新评估往往随着时间的推移而消失，被数据的财务价值的不断增长所取代。

数据来源和聚合工具的多样性也带来了风险。数据景观的复杂性使得更难确定哪些基础设施需要更新，或者哪些已经受到新科学发展的质疑。当考虑到每个科学研究领域中充斥着大量数据库时，情况变得更加糟糕。每个数据库都包含影响数据流通和互操作性的假设，并且通常没有可靠和定期的更新。仅仅为了提供一个数字概念，著名的科学出版物《核酸研究》每年都会出版一期专题，介绍与分子生物学相关的新数据库。2015 年新增了 56 个基础设施，2016 年新增了 62 个，2017 年新增了 54 个，2018 年新增了 82 个。这些只是生命科学领域每年开发的数百个数据库中的一小部分。这些数据库依赖短期资金，这意味着越来越多的资源仍然可以在线查询，尽管它们早已失效。这种情况对于数据库的用户来说并不总是可见的，他们信任这些数据库而不去核实它们是否得到积极维护。这些基础设施何时变得过时？在构建彼此依赖的基础设施的同时，涉及到的风险是什么，考虑到它们的管理方式存在差异，以及在确定和比较它们的先决条件、理论和支撑结构方面存在的挑战？其中一个风险是猖獗的保守主义：坚持回收旧数据，而这些数据的特征和管理要素随着时间的推移变得越来越模糊，而不是鼓励生成具有特定响应用户需求和环境要求特征的新数据。 在生物学和医学等研究生物的学科中，由于其定义上的不断演化和发展，对旧数据的信任尤其令人担忧。例如，十年、二十年甚至一百年前收集的真菌数据并不能可靠地解释现在或将来同一物种的行为（Leonelli 2018）。

卢西亚诺·弗洛里迪所称的信息领域的研究者们——数字技术引入改变世界的方式——正逐渐意识到大数据的破坏潜力，迫切需要将管理和使用数据的努力集中在积极而深思熟虑的方式上，以改善人类的状况。用弗洛里迪自己的话来说：

> 信息通信技术带来了巨大的机遇，然而也带来了巨大的智力责任，即理解这项技术并以最合适的方式使用它（Floridi 2014: vii；另见英国学院和皇家学会 2017）。

鉴于这些发现，将伦理和社会问题视为与数据管理和分析相关的技术和科学要求的核心部分至关重要。伦理数据管理不仅仅通过调节研究商业化和个人数据管理，或引入研究融资监控来获得，尽管这些是重要的策略。为了确保大数据以最具科学和社会前瞻性的方式使用，有必要超越将伦理视为与研究外部和异质的概念。对数据科学伦理影响的分析应成为那些负责数据和用于查看和分析数据的方法的人背景和活动的基本组成部分。伦理评估和选择隐藏在数据管理的每个方面中，包括那些可能看似纯粹技术的选择。

## 10. 结论：大数据和良好的科学

这篇文章强调了大数据的兴起如何标志着一种以数据为中心的研究方法的崛起，其中努力动员、整合、传播和可视化数据被视为对发现的重要贡献。数据中心主义的出现凸显了在收集、分类和解释数据以及围绕这些过程的概念、技术和机构方面所面临的挑战。高通量测量仪器和智能手机应用等工具正在快速产生大量数字格式的数据。原则上，这些数据可以通过互联网平台立即传播，任何拥有宽带连接的人都可以在几秒钟内访问。然而，在实践中，获取数据涉及概念、技术、法律和伦理等方面的问题；即使可以获得访问权限，也不能保证数据能够有助于进一步的研究。此外，用于分析大数据的数学和计算工具通常在其功能和假设方面不透明，导致结果的科学意义和可信度可能难以评估。这增加了对大数据科学可能以及最终支持将人类智慧变成外来、人工和难以理解的智能过程的担忧。

也许在本文讨论的大数据科学中，最令人担忧的一点是它在理性理解上与个体行为和认知能力的偏离程度（这是当代科学哲学的基础）。任何一个数据集产生知识的能力在于它与其他数据集的关联程度：这就是为什么数字对象（如 GPS 位置或测序数据）具有高度认识价值，以及为什么从各种来源进行广泛数据聚合成为一种高效的监控工具。社交媒体、政府数据库和研究资料库等数据生产和传播渠道在全球化、互联和分布式网络中运作，其运行需要各种技能和专业知识。大数据基础设施和分析涉及的决策分散性使得任何个体都无法对所产生的知识的质量、科学意义和潜在社会影响保持全面监督。

大数据分析可能构成分布式认知系统的最终实例。这给问责问题留下了什么？许多个人、团体和机构最终共同承担起对特定数据使用的概念解释和社会结果的责任。大数据治理面临的一个关键挑战是找到机制，以在这个复杂网络中分配责任，以便能够找出错误和不合理的决策，以及明确指出、纠正和适当制裁明显的欺诈、不道德、滥用、歧视或误导行为。思考数据的复杂历史、处理和使用可以鼓励哲学家避免对证据问题采取非历史性、非情境化的方法，而是考虑处理数据（尤其是大数据）所涉及的方法、技能、技术和实践对于理解经验知识生成至关重要。

<!--md-padding-ignore-begin-->
## Bibliography

* Achinstein, Peter, 2001, *The Book of Evidence*, Oxford: Oxford University Press. doi:10.1093/0195143892.001.0001
* Anderson, Chris, 2008, “The End of Theory: The Data Deluge Makes the Scientific Method Obsolete”, *Wired Magazine*, 23 June 2008.
* Aronova, Elena, Karen S. Baker, and Naomi Oreskes, 2010, “Big science and big data in biology: From the International Geophysical Year through the International Biological Program to the Long Term Ecological Research (LTER) Network, 1957–present”, *Historical Studies in the Natural Sciences*, 40: 183–224.
* Aronova, Elena, Christine von Oertzen, and David Sepkoski, 2017, “Introduction: Historicizing Big Data”, *Osiris*, 32(1): 1–17. doi:10.1086/693399
* Bauer, Susanne, 2008, “Mining Data, Gathering Variables and Recombining Information: The Flexible Architecture of Epidemiological Studies”, *Studies in History and Philosophy of Science Part C: Studies in History and Philosophy of Biological and Biomedical Sciences*, 39(4): 415–428. doi:10.1016/j.shpsc.2008.09.008
* Bechtel, William, 2016, “Using Computational Models to Discover and Understand Mechanisms”, *Studies in History and Philosophy of Science Part A*, 56: 113–121. doi:10.1016/j.shpsa.2015.10.004
* Beisbart, Claus, 2012, “How Can Computer Simulations Produce New Knowledge?”, *European Journal for Philosophy of Science*, 2(3): 395–434. doi:10.1007/s13194-012-0049-7
* Bezuidenhout, Louise, Leonelli, Sabina, Kelly, Ann and Rappert, Brian, 2017, “Beyond the Digital Divide: Towards a Situated Approach to Open Data”. *Science and Public Policy*, 44(4): 464–475. doi: 10.1093/scipol/scw036
* Bogen, Jim, 2009 [2013], “Theory and Observation in Science”, in *The Stanford Encyclopedia of Philosophy* (Spring 2013 Edition), Edward N. Zalta (ed.), URL = <[Theory and Observation in Science (Stanford Encyclopedia of Philosophy/Spring 2013 Edition)](https://plato.stanford.edu/archives/spr2013/entries/science-theory-observation/)>.
* –––, 2010, “Noise in the World”, *Philosophy of Science*, 77(5): 778–791. doi:10.1086/656006
* Bogen, James and James Woodward, 1988, “Saving the Phenomena”, *The Philosophical Review*, 97(3): 303. doi:10.2307/2185445
* Bokulich, Alisa, 2018, “Using Models to Correct Data: Paleodiversity and the Fossil Record”, in *S.I.: Abstraction and Idealization in Scientific Modelling* by *Synthese*, 29 May 2018. doi:10.1007/s11229-018-1820-x
* Boon, Mieke, 2020, “How Scientists Are Brought Back into Science—The Error of Empiricism”, in *A Critical Reflection on Automated Science*, Marta Bertolaso and Fabio Sterpetti (eds.), (Human Perspectives in Health Sciences and Technology 1), Cham: Springer International Publishing, 43–65. doi:10.1007/978-3-030-25001-0_4
* Borgman, Christine L., 2015, *Big Data, Little Data, No Data*, Cambridge, MA: MIT Press.
* Boumans, M.J. and Sabina Leonelli, forthcoming, “From Dirty Data to Tidy Facts: Practices of Clustering in Plant Phenomics and Business Cycles”, in Leonelli and Tempini forthcoming.
* Boyd, Danah and Kate Crawford, 2012, “Critical Questions for Big Data: Provocations for a Cultural, Technological, and Scholarly Phenomenon”, *Information, Communication & Society*, 15(5): 662–679. doi:10.1080/1369118X.2012.678878
* Boyd, Nora Mills, 2018, “Evidence Enriched”, *Philosophy of Science*, 85(3): 403–421. doi:10.1086/697747
* Bowker, Geoffrey C., 2006, *Memory Practices in the Sciences*, Cambridge, MA: The MIT Press.
* Bringsjord, Selmer and Naveen Sundar Govindarajulu, 2018, “Artificial Intelligence”, in *The Stanford Encyclopedia of Philosophy* (Fall 2018 edition), Edward N. Zalta (ed.), URL = <https://plato.stanford.edu/archives/fall2018/entries/artificial-intelligence/>.
* British Academy & Royal Society, 2017, *Data Management and Use: Governance in the 21st Century. A Joint Report of the Royal Society and the British Academy*, [British Academy & Royal Society 2017 available online (see Report).](https://royalsociety.org/topics-policy/projects/data-governance/)
* Cai, Li and Yangyong Zhu, 2015, “The Challenges of Data Quality and Data Quality Assessment in the Big Data Era”, *Data Science Journal*, 14: 2. doi:10.5334/dsj-2015-002
* Callebaut, Werner, 2012, “Scientific Perspectivism: A Philosopher of Science’s Response to the Challenge of Big Data Biology”, *Studies in History and Philosophy of Science Part C: Studies in History and Philosophy of Biological and Biomedical Sciences*, 43(1): 69–80. doi:10.1016/j.shpsc.2011.10.007
* Calude, Cristian S. and Giuseppe Longo, 2017, “The Deluge of Spurious Correlations in Big Data”, *Foundations of Science*, 22(3): 595–612. doi:10.1007/s10699-016-9489-4
* Canali, Stefano, 2016, “Big Data, Epistemology and Causality: Knowledge in and Knowledge out in EXPOsOMICS”, *Big Data & Society*, 3(2): 205395171666953. doi:10.1177/2053951716669530
* –––, 2019, “Evaluating Evidential Pluralism in Epidemiology: Mechanistic Evidence in Exposome Research”, *History and Philosophy of the Life Sciences*, 41(1): art. 4. doi:10.1007/s40656-019-0241-6
* Cartwright, Nancy D., 2013, *Evidence: For Policy and Wheresoever Rigor Is a Must*, London School of Economics and Political Science (LSE), Order Project Discussion Paper Series [Cartwright 2013 [available online](http://dro.dur.ac.uk/11478/)].
* –––, 2019, *Nature, the Artful Modeler: Lectures on Laws, Science, How Nature Arranges the World and How We Can Arrange It Better (The Paul Carus Lectures)*, Chicago, IL: Open Court.
* Chang, Hasok, 2012, *Is Water H2O? Evidence, Realism and Pluralism*, (Boston Studies in the Philosophy of Science 293), Dordrecht: Springer Netherlands. doi:10.1007/978-94-007-3932-1
* –––, 2017, “VI—Operational Coherence as the Source of Truth”, *Proceedings of the Aristotelian Society*, 117(2): 103–122. doi:10.1093/arisoc/aox004
* Chapman, Robert and Alison Wylie, 2016, *Evidential Reasoning in Archaeology*, London: Bloomsbury Publishing Plc.
* Collins, Harry M., 1990, *Artificial Experts: Social Knowledge and Intelligent Machines*, Cambridge, MA: MIT Press.
* Craver, Carl F. and Lindley Darden, 2013, *In Search of Mechanisms: Discoveries Across the Life Sciences*, Chicago: University of Chicago Press.
* Daston, Lorraine, 2017, *Science in the Archives: Pasts, Presents, Futures*, Chicago: University of Chicago Press.
* De Regt, Henk W., 2017, *Understanding Scientific Understanding*, Oxford: Oxford University Press. doi:10.1093/oso/9780190652913.001.0001
* D’Ignazio, Catherine and Klein, Lauren F., 2020, *Data Feminism*, Cambridge, MA: The MIT Press.
* Douglas, Heather E., 2009, *Science, Policy and the Value-Free Ideal*, Pittsburgh, PA: University of Pittsburgh Press.
* Dreyfus, Hubert L., 1992, *What Computers Still Can’t Do: A Critique of Artificial Reason*, Cambridge, MA: MIT Press.
* Durán, Juan M. and Nico Formanek, 2018, “Grounds for Trust: Essential Epistemic Opacity and Computational Reliabilism”, *Minds and Machines*, 28(4): 645–666. doi:10.1007/s11023-018-9481-6
* Edwards, Paul N., 2010, *A Vast Machine: Computer Models, Climate Data, and the Politics of Global Warming*, Cambridge, MA: The MIT Press.
* Elliott, Kevin C., 2012, “Epistemic and methodological iteration in scientific research”. *Studies in History and Philosophy of Science*, 43: 376–382.
* Elliott, Kevin C., Kendra S. Cheruvelil, Georgina M. Montgomery, and Patricia A. Soranno, 2016, “Conceptions of Good Science in Our Data-Rich World”, *BioScience*, 66(10): 880–889. doi:10.1093/biosci/biw115
* Feest, Uljana, 2011, “What Exactly Is Stabilized When Phenomena Are Stabilized?”, *Synthese*, 182(1): 57–71. doi:10.1007/s11229-009-9616-7
* Fleming, Lora, Niccolò Tempini, Harriet Gordon-Brown, Gordon L. Nichols, Christophe Sarran, Paolo Vineis, Giovanni Leonardi, Brian Golding, Andy Haines, Anthony Kessel, Virginia Murray, Michael Depledge, and Sabina Leonelli, 2017, “Big Data in Environment and Human Health”, in *Oxford Research Encyclopedia of Environmental Science*, by Lora Fleming, Niccolò Tempini, Harriet Gordon-Brown, Gordon L. Nichols, Christophe Sarran, Paolo Vineis, Giovanni Leonardi, Brian Golding, Andy Haines, Anthony Kessel, Virginia Murray, Michael Depledge, and Sabina Leonelli, Oxford: Oxford University Press. doi:10.1093/acrefore/9780199389414.013.541
* Floridi, Luciano, 2014, *The Fourth Revolution: How the Infosphere is Reshaping Human Reality*, Oxford: Oxford University Press.
* Floridi, Luciano and Phyllis Illari (eds.), 2014, *The Philosophy of Information Quality*, (Synthese Library 358), Cham: Springer International Publishing. doi:10.1007/978-3-319-07121-3
* Frigg, Roman and Julian Reiss, 2009, “The Philosophy of Simulation: Hot New Issues or Same Old Stew?”, *Synthese*, 169(3): 593–613. doi:10.1007/s11229-008-9438-z
* Frigg, Roman and Stephan Hartmann, 2016, “Models in Science”, in *The Stanford Encyclopedia of Philosophy* (Winter 2016 edition), Edward N. Zalta (ed.), URL = <https://plato.stanford.edu/archives/win2016/entries/models-science/>.
* Gooding, David C., 1990, *Experiment and the Making of Meaning*, Dordrecht & Boston: Kluwer.
* Giere, Ronald, 2006, *Scientific Perspectivism*, Chicago: University of Chicago Press.
* Griesemer, James R., forthcoming, “A Data Journey through Dataset-Centric Population Biology”, in Leonelli and Tempini forthcoming.
* Hacking, Ian, 1992, “The Self-Vindication of the Laboratory Sciences”, In *Science as Practice and Culture*, Andrew Pickering (ed.), Chicago, IL: The University of Chicago Press, 29–64.
* Harris, Todd, 2003, “Data Models and the Acquisition and Manipulation of Data”, *Philosophy of Science*, 70(5): 1508–1517. doi:10.1086/377426
* Hey Tony, Stewart Tansley, and Kristin Tolle, 2009, *The Fourth Paradigm. Data-Intensive Scientific Discovery*, Redmond, WA: Microsoft Research.
* Humphreys, Paul, 2004, *Extending Ourselves: Computational Science, Empiricism, and Scientific Method*, Oxford: Oxford University Press. doi:10.1093/0195158709.001.0001
* –––, 2009, “The Philosophical Novelty of Computer Simulation Methods”, *Synthese*, 169(3): 615–626. doi:10.1007/s11229-008-9435-2
* Karaca, Koray, 2018, “Lessons from the Large Hadron Collider for Model-Based Experimentation: The Concept of a Model of Data Acquisition and the Scope of the Hierarchy of Models”, *Synthese*, 195(12): 5431–5452. doi:10.1007/s11229-017-1453-5
* Kelly, Thomas, 2016, “Evidence”, in *The Stanford Encyclopedia of Philosophy* (Winter 2016 edition), Edward N. Zalta (ed.), URL = <https://plato.stanford.edu/archives/win2016/entries/evidence/>.
* Kitchin, Rob, 2013, *The Data Revolution: Big Data, Open Data, Data Infrastructures & Their Consequences*, Los Angeles: Sage.
* –––, 2014, “Big Data, new epistemologies and paradigm shifts”, *Big Data and Society*, 1(1) April-June. doi: 10.1177/2053951714528481
* Kitchin, Rob and Gavin McArdle, 2016, “What Makes Big Data, Big Data? Exploring the Ontological Characteristics of 26 Datasets”, *Big Data & Society*, 3(1): 205395171663113. doi:10.1177/2053951716631130
* Krohs, Ulrich, 2012, “Convenience Experimentation”, *Studies in History and Philosophy of Science Part C: Studies in History and Philosophy of Biological and Biomedical Sciences*, 43(1): 52–57. doi:10.1016/j.shpsc.2011.10.005
* Lagoze, Carl, 2014, “Big Data, data integrity, and the fracturing of the control zone,” *Big Data and Society*, 1(2) July-December. doi: 10.1177/2053951714558281
* Leonelli, Sabina, 2014, “What Difference Does Quantity Make? On the Epistemology of Big Data in Biology”, *Big Data & Society*, 1(1): 205395171453439. doi:10.1177/2053951714534395
* –––, 2016, *Data-Centric Biology: A Philosophical Study*, Chicago: University of Chicago Press.
* –––, 2017, “Global Data Quality Assessment and the Situated Nature of ‘Best’ Research Practices in Biology”, *Data Science Journal*, 16: 32. doi:10.5334/dsj-2017-032
* –––, 2018, “The Time of Data: Timescales of Data Use in the Life Sciences”, *Philosophy of Science*, 85(5): 741–754. doi:10.1086/699699
* –––, 2019a, *La Recherche Scientifique à l’Ère des Big Data: Cinq Façons Donc les Données Massive Nuisent à la Science, et Comment la Sauver*, Milano: Éditions Mimésis.
* –––, 2019b, “What Distinguishes Data from Models?”, *European Journal for Philosophy of Science*, 9(2): 22. doi:10.1007/s13194-018-0246-0
* Leonelli, Sabina and Niccolò Tempini, 2018, “Where Health and Environment Meet: The Use of Invariant Parameters in Big Data Analysis”, *Synthese*, special issue on the *Philosophy of Epidemiology*, Sean Valles and Jonathan Kaplan (eds.). doi:10.1007/s11229-018-1844-2
* –––, forthcoming, *Data Journeys in the Sciences*, Cham: Springer International Publishing.
* Loettgers, Andrea, 2009, “Synthetic Biology and the Emergence of a Dual Meaning of Noise”, *Biological Theory*, 4(4): 340–356. doi:10.1162/BIOT_a_00009
* Longino, Helen E., 1990, *Science as Social Knowledge: Values and Objectivity in Scientific Inquiry*, Princeton, NJ: Princeton University Press.
* Lowrie, Ian, 2017, “Algorithmic Rationality: Epistemology and Efficiency in the Data Sciences”, *Big Data & Society*, 4(1): 1–13. doi:10.1177/2053951717700925
* MacLeod, Miles and Nancy J. Nersessian, 2013, “Building Simulations from the Ground Up: Modeling and Theory in Systems Biology”, *Philosophy of Science*, 80(4): 533–556. doi:10.1086/673209
* Massimi, Michela, 2011, “From Data to Phenomena: A Kantian Stance”, *Synthese*, 182(1): 101–116. doi:10.1007/s11229-009-9611-z
* –––, 2012, “ Scientific perspectivism and its foes”, *Philosophica*, 84: 25–52.
* –––, 2016, “Three Tales of Scientific Success”, *Philosophy of Science*, 83(5): 757–767. doi:10.1086/687861
* Mayer-Schönberger, Victor and Kenneth Cukier, 2013, *Big Data: A Revolution that Will Transform How We Live, Work, and Think*, New York: Eamon Dolan/Houghton Mifflin Harcourt.
* Mayo, Deborah G., 1996, *Error and the Growth of Experimental Knowledge*, Chicago: University of Chicago Press.
* Mayo, Deborah G. and Aris Spanos (eds.), 2009a, *Error and Inference*, Cambridge: Cambridge University Press.
* Mayo, Deborah G. and Aris Spanos, 2009b, “Introduction and Background”, in Mayo and Spanos (eds.) 2009a, pp. 1–27.
* McAllister, James W., 1997, “Phenomena and Patterns in Data Sets”, *Erkenntnis*, 47(2): 217–228. doi:10.1023/A:1005387021520
* –––, 2007, “Model Selection and the Multiplicity of Patterns in Empirical Data”, *Philosophy of Science*, 74(5): 884–894. doi:10.1086/525630
* –––, 2011, “What Do Patterns in Empirical Data Tell Us about the Structure of the World?”, *Synthese*, 182(1): 73–87. doi:10.1007/s11229-009-9613-x
* McQuillan, Dan, 2018, “Data Science as Machinic Neoplatonism”, *Philosophy & Technology*, 31(2): 253–272. doi:10.1007/s13347-017-0273-3
* Mitchell, Sandra D., 2003, *Biological Complexity and Integrative Pluralism*, Cambridge: Cambridge University Press. doi:10.1017/CBO9780511802683
* Morgan, Mary S., 2005, “Experiments versus Models: New Phenomena, Inference and Surprise”, *Journal of Economic Methodology*, 12(2): 317–329. doi:10.1080/13501780500086313
* –––, forthcoming, “The Datum in Context”, in Leonelli and Tempini forthcoming.
* Morrison, Margaret, 2015, *Reconstructing Reality: Models, Mathematics, and Simulations*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199380275.001.0001
* Müller-Wille, Staffan and Isabelle Charmantier, 2012, “Natural History and Information Overload: The Case of Linnaeus”, *Studies in History and Philosophy of Science Part C: Studies in History and Philosophy of Biological and Biomedical Sciences*, 43(1): 4–15. doi:10.1016/j.shpsc.2011.10.021
* Napoletani, Domenico, Marco Panza, and Daniele C. Struppa, 2011, “Agnostic Science. Towards a Philosophy of Data Analysis”, *Foundations of Science*, 16(1): 1–20. doi:10.1007/s10699-010-9186-7
* –––, 2014, “Is Big Data Enough? A Reflection on the Changing Role of Mathematics in Applications”, *Notices of the American Mathematical Society*, 61(5): 485–490. doi:10.1090/noti1102
* Nickles, Thomas, forthcoming, “Alien Reasoning: Is a Major Change in Scientific Research Underway?”, *Topoi*, first online: 20 March 2018. doi:10.1007/s11245-018-9557-1
* Norton, John D., 2003, “A Material Theory of Induction”, *Philosophy of Science*, 70(4): 647–670. doi:10.1086/378858
* O’Malley M, Maureen A., Kevin C. Elliott, Chris Haufe, and Richard Burian, 2009. “Philosophies of funding”. *Cell*, 138: 611–615. doi: 10.1016/j.cell.2009.08.008
* O’Malley, Maureen A. and Orkun S. Soyer, 2012, “The Roles of Integration in Molecular Systems Biology”, *Studies in History and Philosophy of Science Part C: Studies in History and Philosophy of Biological and Biomedical Sciences*, 43(1): 58–68. doi:10.1016/j.shpsc.2011.10.006
* O’Neill, Cathy, 2016, *Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy*, New York: Crown.
* Parker, Wendy S., 2009, “Does Matter Really Matter? Computer Simulations, Experiments, and Materiality”, *Synthese*, 169(3): 483–496. doi:10.1007/s11229-008-9434-3
* –––, 2017, “Computer Simulation, Measurement, and Data Assimilation”, *The British Journal for the Philosophy of Science*, 68(1): 273–304. doi:10.1093/bjps/axv037
* Pasquale, Frank, 2015, *The Black Box Society: The Secret Algorithms That Control Money and Information*, Cambridge, MA: Harvard University Press.
* Pietsch, Wolfgang, 2015, “Aspects of Theory-Ladenness in Data-Intensive Science”, *Philosophy of Science*, 82(5): 905–916. doi:10.1086/683328
* –––, 2016, “The Causal Nature of Modeling with Big Data”, *Philosophy & Technology*, 29(2): 137–171. doi:10.1007/s13347-015-0202-2
* –––, 2017, “Causation, probability and all that: Data science as a novel inductive paradigm”, in *Frontiers in Data Science*, Matthias Dehmer and Frank Emmert-Streib (eds.), Boca Raton, FL: CRC, 329–353.
* Porter, Theodore M., 1995, *Trust in Numbers: The Pursuit of Objectivity in Science and Public Life*, Princeton, NJ: Princeton University Press.
* Porter, Theodore M. and Soraya de Chadarevian, 2018, “Introduction: Scrutinizing the Data World”, *Historical Studies in the Natural Sciences*, 48(5): 549–556. doi:10.1525/hsns.2018.48.5.549
* Prainsack, Barbara and Buyx, Alena, 2017, *Solidarity in Biomedicine and Beyond*, Cambridge, UK: Cambridge University Press.
* Radder, Hans, 2009, “The Philosophy of Scientific Experimentation: A Review”, *Automated Experimentation*, 1(1): 2. doi:10.1186/1759-4499-1-2
* Ratti, Emanuele, 2015, “Big Data Biology: Between Eliminative Inferences and Exploratory Experiments”, *Philosophy of Science*, 82(2): 198–218. doi:10.1086/680332
* Reichenbach, Hans, 1938, *Experience and Prediction: An Analysis of the Foundations and the Structure of Knowledge*, Chicago, IL: The University of Chicago Press.
* Reiss, Julian, 2015, “A Pragmatist Theory of Evidence”, *Philosophy of Science*, 82(3): 341–362. doi:10.1086/681643
* Reiss, Julian, 2015, *Causation, Evidence, and Inference*, New York: Routledge.
* Rescher, Nicholas, 1984, *The Limits of Science*, Berkely, CA: University of California Press.
* Rheinberger, Hans-Jörg, 2011, “Infra-Experimentality: From Traces to Data, from Data to Patterning Facts”, *History of Science*, 49(3): 337–348. doi:10.1177/007327531104900306
* Romeijn, Jan-Willem, 2017, “Philosophy of Statistics”, in *The Stanford Encyclopedia of Philosophy* (Spring 2017), Edward N. Zalta (ed.), URL: https://plato.stanford.edu/archives/spr2017/entries/statistics/.
* Sepkoski, David, 2013, “Toward ‘a natural history of data’: Evolving practices and epistemologies of data in paleontology, 1800–2000”, *Journal of the History of Biology*, 46: 401–444.
* Shavit, Ayelet and James Griesemer, 2009, “There and Back Again, or the Problem of Locality in Biodiversity Surveys*”, *Philosophy of Science*, 76(3): 273–294. doi:10.1086/649805
* Srnicek, Nick, 2017, *Platform capitalism*, Cambridge, UK and Malden, MA: Polity Press.
* Sterner, Beckett, 2014, “The Practical Value of Biological Information for Research”, *Philosophy of Science*, 81(2): 175–194. doi:10.1086/675679
* Sterner, Beckett and Nico M. Franz, 2017, “Taxonomy for Humans or Computers? Cognitive Pragmatics for Big Data”, *Biological Theory*, 12(2): 99–111. doi:10.1007/s13752-017-0259-5
* Sterner, Beckett W., Nico M. Franz, and J. Witteveen, 2020, “Coordinating dissent as an alternative to consensus classification: insights from systematics for bio-ontologies”, *History and Philosophy of the Life Sciences*, 42(1): 8. doi: 10.1007/s40656-020-0300-z
* Stevens, Hallam, 2016, “Hadooping the Genome: The Impact of Big Data Tools on Biology”, *BioSocieties*, 11: 352–371.
* Strasser, Bruno, 2019, *Collecting Experiments: Making Big Data Biology*, Chicago: University of Chicago Press.
* Suppes, Patrick, 1962, “Models of data”, in *Logic, Methodology and Philosophy of Science*, Ernest Nagel, Patrick Suppes, & Alfred Tarski (eds.), Stanford: Stanford University Press, 252–261.
* Symons, John and Ramón Alvarado, 2016, “Can We Trust Big Data? Applying Philosophy of Science to Software”, *Big Data & Society*, 3(2): 1-17. doi:10.1177/2053951716664747
* Symons, John and Jack Horner, 2014, “Software Intensive Science”, *Philosophy & Technology*, 27(3): 461–477. doi:10.1007/s13347-014-0163-x
* Tempini, Niccolò, 2017, “Till Data Do Us Part: Understanding Data-Based Value Creation in Data-Intensive Infrastructures”, *Information and Organization*, 27(4): 191–210. doi:10.1016/j.infoandorg.2017.08.001
* Tempini, Niccolò and Sabina Leonelli, 2018, “Concealment and Discovery: The Role of Information Security in Biomedical Data Re-Use”, *Social Studies of Science*, 48(5): 663–690. doi:10.1177/0306312718804875
* Toulmin, Stephen, 1958, *The Uses of Arguments*, Cambridge: Cambridge University Press.
* Turner, Raymond and Nicola Angius, 2019, “The Philosophy of Computer Science”, in *The Stanford Encyclopedia of Philosophy* (Spring 2019 edition), Edward N. Zalta (ed.), URL = <https://plato.stanford.edu/archives/spr2019/entries/computer-science/>.
* Van Fraassen, Bas C., 2008, *Scientific Representation: Paradoxes of Perspective*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199278220.001.0001
* Waters, C. Kenneth, 2007, “The Nature and Context of Exploratory Experimentation: An Introduction to Three Case Studies of Exploratory Research”, *History and Philosophy of the Life Sciences*, 29(3): 275–284.
* Wilkinson, Mark D., Michel Dumontier, IJsbrand Jan Aalbersberg, Gabrielle Appleton, Myles Axton, Arie Baak, Niklas Blomberg, Jan-Willem Boiten, Luiz Bonino da Silva Santos, Philip E. Bourne, Jildau Bouwman, Anthony J. Brookes, Tim Clark, Mercè Crosas, Ingrid Dillo, Olivier Dumon, Scott Edmunds, Chris T. Evelo, Richard Finkers, Alejandra Gonzalez-Beltran, et al., 2016, “The FAIR Guiding Principles for Scientific Data Management and Stewardship”, *Scientific Data*, 3(1): 160018. doi:10.1038/sdata.2016.18
* Williamson, Jon, 2004 “A dynamic interaction between machine learning and the philosophy of science”, *Minds and Machines*, 14(4): 539–54. doi:10.1093/bjps/axx012
* Wimsatt, William C., 2007, *Re-Engineering Philosophy for Limited Beings: Piecewise Approximations to Reality*, Cambridge, MA: Harvard University Press.
* Winsberg, Eric, 2010, *Science in the Age of Computer Simulation*, Chicago: University of Chicago Press.
* Woodward, James, 2000, “Data, phenomena and reliability”, *Philosophy of Science*, 67(supplement): Proceedings of the 1998 Biennial Meetings of the Philosophy of Science Association. Part II: Symposia Papers (Sep., 2000), pp. S163–S179. https://www.jstor.org/stable/188666
* –––, 2010, “Data, Phenomena, Signal, and Noise”, *Philosophy of Science*, 77(5): 792–803. doi:10.1086/656554
* Wright, Jessey, 2017, “The Analysis of Data and the Evidential Scope of Neuroimaging Results”, *The British Journal for the Philosophy of Science*, 69(4): 1179–1203. doi:10.1093/bjps/axx012
* Wylie, Alison, 2017, “How Archaeological Evidence Bites Back: Strategies for Putting Old Data to Work in New Ways”, *Science, Technology, & Human Values*, 42(2): 203–225. doi:10.1177/0162243916671200
* –––, forthcoming, “Radiocarbon Dating in Archaeology: Triangulation and Traceability”, in Leonelli and Tempini forthcoming.
* Zuboff, Shoshana, 2017, *The Age of Surveillance Capitalism: The Fight for the Future at the New Frontier of Power*, New York: Public Affairs.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=science-big-data). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/science-big-data/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=science-big-data&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/science-big-data/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[artificial intelligence](https://plato.stanford.edu/entries/artificial-intelligence/) | [Bacon, Francis](https://plato.stanford.edu/entries/francis-bacon/) | [biology: experiment in](https://plato.stanford.edu/entries/biology-experiment/) | [computer science, philosophy of](https://plato.stanford.edu/entries/computer-science/) | [empiricism: logical](https://plato.stanford.edu/entries/logical-empiricism/) | [evidence](https://plato.stanford.edu/entries/evidence/) | [human genome project](https://plato.stanford.edu/entries/human-genome/) | [models in science](https://plato.stanford.edu/entries/models-science/) | [Popper, Karl](https://plato.stanford.edu/entries/popper/) | [science: theory and observation in](https://plato.stanford.edu/entries/science-theory-observation/) | [scientific explanation](https://plato.stanford.edu/entries/scientific-explanation/) | [scientific method](https://plato.stanford.edu/entries/scientific-method/) | [scientific theories: structure of](https://plato.stanford.edu/entries/structure-scientific-theories/) | [statistics, philosophy of](https://plato.stanford.edu/entries/statistics/)

### Acknowledgments

The research underpinning this entry was funded by the European Research Council (grant award 335925) and the Alan Turing Institute (EPSRC Grant EP/N510129/1).

[Copyright © 2020](https://plato.stanford.edu/info.html#c) by  
[Sabina Leonelli](https://socialsciences.exeter.ac.uk/sociology/staff/leonelli/) <[*s.leonelli@exeter.ac.uk*](mailto:s%2eleonelli%40exeter%2eac%2euk)>
