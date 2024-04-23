# 对博弈中权力的分析 for analyzing power in normal form games (Paolo Turrini and Thomas Ågotnes)


*首次发表于2017年6月14日，实质修订于2023年12月4日。*

本条目讨论使用数学语言来表达和分析游戏中权力的形式属性。在本条目中讨论的数学语言将被称为逻辑，并根据其表达游戏相关概念的能力进行分类。

本条目的内容将仅限于对合作和非合作正常形式游戏中（群体的）个体的策略和偏好进行逻辑分析。它不涵盖使用博弈论研究逻辑语言或战略决策中认识概念的角色。它也不涵盖顺序决策制定的方面，这是广泛博弈中战略推理的典型特征。这些方面的解释可以在相关条目逻辑和游戏、博弈论的认识基础中找到（另请参阅 van Benthem, Pacuit, & Roy 2011 和 van Benthem 2014）。

 

---

## 1. 游戏下的逻辑学

游戏是一组个体（或个体群体）与一组潜在结果之间关系的数学描述。个体独立且同时选择结果的子集，最终结果是从每个选择的组合中选择的。独立意味着个体的选择不会相互影响。同时意味着每个个体的选择是在不知道其他玩家选择的情况下进行的。假设每个个体对结果集有偏好，即他们喜欢某些结果胜过其他结果，并且通常假设他们知道其他个体的潜在选择和偏好，并相应地调整他们的决策。

游戏被用来模拟各种情况，从动物行为到国际冲突解决（Osborne＆Rubinstein 1994）。对于本条目的目的，集体决策是一个有用的应用示例，将在整个工作示例中使用。

例子 1（罗马条约）。罗马条约（1958 年至 1973 年）建立了欧洲经济共同体。根据条约第 148 条的规定，理事会（主要立法机构之一）的行为需要满足以下条件才能通过：

* 如果该行为由委员会提议，则需要 12 票；
* 如果该行为不是由委员会提议，则需要至少 4 个成员国的 12 票。

上述数值指的是欧盟六国，即创始成员国。根据该条约，投票权分配如下：

* 4 票：法国、德国、意大利；
* 2 票：比利时、荷兰；
* 1 票: 卢森堡。

这种情景可以被描述为一场游戏。

有六个玩家，这些玩家是国家：
法国、德国、意大利、比利时、荷兰和卢森堡。

他们一次只对一个问题进行投票。问题可以是二元的，例如采用边境保护方案，也可以是多值的，例如在采用边境保护方案上应该花费多少百万。

各国可能对投票结果有偏好，甚至对其他国家的具体投票有偏好，而且通常在不知道其他国家的投票情况下进行投票。

往往情况下，这些游戏是这样的，没有任何参与者能够独自决定最终结果，但在某些情况下，他们可以合作并就共同策略达成一致。

根据玩家的偏好、知识和能力，某些结果更有可能被选择。为了理解哪些结果更可能被选择，博弈论提出了解决方案概念，形式上是从游戏集合到每个游戏结果集合的函数，用数学术语描述玩家的理性。正如我们将在后面看到的，解决方案概念可以简洁地用简单而良好的逻辑表达。

接下来，我们将游戏描述为数学结构，强调各种关键要素（例如，形成联盟的可能性，及时做出决策的可能性等）以及最适合表达它们的语言。

## 2. 基本成分

形式上，游戏由有限的玩家集合  和可能无限的结果集合  组成。

例 2. 在上面的例子中，玩家集合 N 是{法国，德国，意大利，比利时，荷兰，卢森堡}。如果我们考虑采用边境保护方案的问题，有两个结果：是和否，即  。如果我们考虑花费在边境保护方案上的数百万问题，那么可能有无限的结果空间，即  。甚至可以进一步细化一组结果，例如指定玩家的投票方式。在这种情况下，法国投票是是，其他人投票是否，结果是否的结果与意大利投票是是，其他人投票是否，结果是否的结果是不同的，尽管投票结果是相同的。重要的是强调的是，每组结果都伴随着对基础互动中发生的事情的描述水平。没有先验的正确或错误的描述水平，选择取决于人们对游戏属性的兴趣。

在玩家和结果之上，游戏还具有另外两种关系：

* 一个偏好关系，表示为  ，描述玩家对结果的偏好；
* 一个行动关系，表示为  ，描述玩家或玩家组能够施加或排除的结果；

游戏中的一个重要关系是知识，它正式描述了玩家对游戏和对手的了解。这种关系有时会明确给出，有时则隐含在其中。本条目不会明确给出这种关系，而是将其纳入玩家理性的形式化中。

偏好关系和行动关系都收集了一组个体关系，每个玩家对应一个关系。例如，偏好关系可以分解为一个家族  ，描述每个个体对结果的偏好，而行动关系则收集了一个家族  ，每个家族描述了特定一组玩家可以实现的内容。

总体而言，游戏可以被看作是一个数学结构

(�,�,⪰,�)

其中  是玩家的集合，通常是有限的，  是结果的集合，  是偏好关系，  是行动关系。

这个数学结构也被称为关系结构（Blackburn, Rijke, & Venema 2001），它在某种意义上是所谓模态逻辑（Blackburn et al. 2001）的集合论等价物，这是一种适合表达关系的数学语言。关系结构将在此后被表示为  ，代表框架。

为了将关系结构和模态逻辑联系起来，我们还需要最后一个要素，即一组原子命题 Atoms 的规范，它表达了我们感兴趣的结果的相关属性。这个集合通常被认为是可数的[1]，并且通过估值函数与结果相关联，即形式为的函数。

�:�→2Atoms

将每个结果与在该结果上为真的命题原子集关联起来。

元组  将被称为模型，表示为  。

游戏结构中与个体玩家（和群体）相关的关系将在与用于表达其属性的主要模态逻辑的连接中进行形式化描述，以不同的描述和粒度级别。

下面的段落收集了解释本条目中使用的模态语言所需的背景技术概念。已经熟悉模态逻辑的读者可以跳过它。要进行更深入的探索，可以参考有关模态逻辑的相关条目。著名的经典教材有《模态逻辑导论》（Chellas 1980），重点是非正常模态逻辑，以及《模态逻辑》（Blackburn et al. 2001），重点是对正常模态逻辑的更数学化的处理。[2]

模态逻辑：背景概念：模态逻辑的语言是命题逻辑语言的扩展，具有一组在可数个原子命题上定义的模态运算符  ，在其上递归地构建了一组良构公式（有关逻辑和归纳的数学处理，请参见 Dalen 1980）。模态语言  的每个良构公式  ，以下简称为公式，使用以下语法构造：

�::=�∣¬�∣�∧�∣◻��

其中  和  。

这种语言的模型是一个结构  ，由一组世界或状态或结果  组成；对于每个模态运算符  ，我们在这里假设它们是所谓的邻域函数（Chellas 1980），即函数  的可访问关系  ；以及一个估值函数  ，它将每个原子命题分配给  的子集，其中每个原子命题被分配给该命题为真的世界集合。

作为一般约定，具有模态  ，…，  ，…的多模态语言将用  表示，其中函数  将每个模态与其直观的简写关联起来。设  是具有模态  ，…，  ，…的模态语言，而  是该语言的模型。对于配对  ，满足关系的公式  定义如下真值条件：

�,�⊨� if and only if �∈�(�)�,�⊨¬� if and only if �,�⊭��,�⊨�∧� if and only if �,�⊨� and �,�⊨��,�⊨◻�� if and only if ��∈��(�)

其中  被称为  的真值集或扩展。

一个模态语言的公式  ：在模型  的状态  上成立，当且仅当  ；在模型  中有效，表示为  ，当且仅当对于每个  ，其中  是  的域；在模型类  中有效，表示为  ，当且仅当在每个  中有效；在框架  中有效（没有估值函数的模型），表示为  ，当且仅当对于每个估值  ，我们有  ；在框架类  中有效，表示为  ，当且仅当在每个  中有效。

我们可以将模态逻辑视为一组在给定模型类  （框架  ）中有效的公式  （  ）。对于一组公式  ，我们写作  来表示  ，对于所有  。我们说一组公式（全局地）在模型类  中语义蕴含一个公式  ，表示为  ，如果对于每个  ，我们有  蕴含  。当  是一个框架类时，  表示  ，其中  是基于  中的框架的模型集合。

 一个模态规则

�1,…,���

如果  在一类模型中是合理的，那么  。

回想一下，根据 Chellas（1980）的说法，如果一个模态逻辑  在等价规则下是封闭的，那么它被称为经典的，即对于语言中的每个  ，我们有：

�↔�◻�↔◻�

如果一个逻辑是经典的，并且它还在单调性规则下是封闭的，那么它被称为单调的，即对于语言中的每个  ，我们有：

�→�◻�→◻�

如果它是单调的，它在概括规则下是封闭的，并且包含  公理，那么它被称为正常。

�◻�

并且  包含  的所有实例。

当  是一个主过滤器[3]时，我们说模态  是正常的。在这种情况下，  可以等价地表示为  的关系，然后我们有  当且仅当  对于所有满足  的  。正常的模态逻辑可以在形式为  的结构中解释，其中每个  都是一个主过滤器。

### 2.1 偏好

回想一下关系结构  并考虑关系  。这个关系简洁地表示了一个家庭  ，其中每个玩家都有一个索引的个人偏好关系。

形式上，对于玩家  的偏好是一个关系

⪰�⊆�×�

这个想法是，如果两个结果  和  满足  ，那么玩家  认为结果  至少和结果  一样好。事实上，  将被缩写为  。它的逆关系是  ，对于  ，只要  。它的严格对应关系是  ，对于  ，只要  且不是  。此外，  表示  和  的事实，意味着  在  和  之间没有偏好。

例子 3. 让我们回到我们的主要例子。通常，国家对决策结果有偏好，例如，意大利认为我们应该在该计划上花费 500 万到 1000 万欧元，德国认为我们应该花费 100 万到 200 万欧元，比利时认为我们应该花费 400 万到 500 万欧元，卢森堡、荷兰和法国则恰好是 500 万欧元。这意味着，例如，意大利的偏好关系是这样的：  ，只要  并且  或  。那么其他所有结果呢？在最简单的情况下，意大利对它们是无差别的。所以  ，否则。然而，我们也可以假设更复杂的偏好。例如，意大利希望在他们的预算范围内尽可能多地花钱。在这种情况下，偏好关系是：  ，只要  并且  或  ，  ，只要  而  ，否则。并不是所有的投票结果都会达成一致。为了技术目的，我们定义一个辅助结果  ，解释为不达成任何共识的投票结果。我们假设任何一致都比不一致对任何玩家都更好，即  ，只要  和  ，对于每个  。

这些关系的属性可以通过模态逻辑来表达。为此，我们引入相应关系的模态运算符  ，  和  ，我们可以将关系结构视为一个解释  等的模态逻辑框架。

在基于这样一个框架的模型  中，对于  的解释如下（注意这些模态性质是正常的）：

�,�⊨◊���\enskip if and only if \enskip�,�′⊨�, for some �′ with ����′

所讨论的关系通常具有额外的属性。例如，  通常被认为满足以下条件：

* 反身性：即，我们有：  ;
* 传递性：即，我们有：（  和  ）蕴含  。
* 连通性：即，我们有：要么  ，要么  。

第一和第二个属性可以通过以下公理和有效性来描述。

 命题 1.

然而，对于连通性来说情况并非如此，因为像这样的模态语言只能谈论关系的局部属性（Blackburn 等，2001 年）。

为了描述连通性，我们需要引入一种特殊类型的运算符：全局（或全域）形式（Goranko＆Passy 1992）。这种形式表达了模型  中所有状态的属性，并且其解释如下。

�,�⊨��\enskip if and only if \enskip�,�′⊨�, for all �′∈�

公式  将被缩写为  。符号  是  的存在性对偶，并且它表示某个状态在模型中成立的某个公式。通过全局形式，我们真正增加了表达能力（如 Goranko＆Passy 1992 所示，同时伴随着进一步的成本和收益），因此我们可以通过在世界中表达真实性来表达模型中的有效性，证明了当且仅当  成立时，  成立。

回想一下，如果对于所有  ，关系  是三歧的，那么就是  或  。我们可以使用偏好和全局形式的组合来获得以下框架对应关系。

命题 2. 设  为一个框架。我们有以下结论：

 当且仅当  是三分的

另一个可能更直观的公式是，对于  是原子命题的情况可以使用以下公式代替：

��∧��→�(�∧�)∨�(�∧◊�⪯�)∨�(�∧◊�⪯�)

三分法、传递性和自反性的  等同于关系是弱线性序，从而是连通的。

关系  ，即严格偏好关系，可以用  来定义。但  满足以下性质：

* 非自反性：即  我们有：不是这样的  ；

在基本模态逻辑中，无法定义不可反身性（Blackburn 等，2001）。然而，如果原子命题足够强大，足以区分每个结果，则可以定义不可反身性。例如，让  是一个标识世界  的变量。[4]我们有以下内容。

 命题 3.

最后，无差别关系  满足反身性、传递性和对称性的性质。虽然反身性和传递性的定义与前面的模态类似，但对称性的定义如下。

* 对称性：即，我们有：若  则必然  。

虽然第一和第二个公理与  的公理相似，但对称性的特征如下所示：

 命题 4.

上述三个属性共同表明，每个  在数学上都是一个等价关系，即一个满足以下条件的关系：

⋃�∈�{[�]∣�′∈[�] whenever �∼��′}

是  的一个划分。该划分的每个元素都是玩家  的无差别类，即他或她对这些结果都是无差别的。

等价关系的逻辑，例如  ，也被称为  系统。

偏好和效用：由于在博弈论中的广泛应用，一类重要的偏好关系是与数值或效用函数相对应的关系。

一个效用函数是一个函数

��:�→�

将结果映射到实数，表示玩家对某种状态的价值有多大。

实用函数自然地引发了偏好关系，以以下方式。

定义 5. 设  为一个实用函数。如果满足以下条件，我们说  对应于  ：

�⪰�∗�′\enskip if and only if \enskip��(�)≥��(�′)

注意每个有限结果集上的弱线性序列都对应于某个实用函数。

我们在偏好和决策理论的相关条目中提到，关于偏好在哲学和决策理论中的作用，可以进行更详细的分析。

### 2.2 选择

游戏也是对玩家在个人或联盟内可以实现的描述。为了形式化这一点，我们使用效果函数，这是一个抽象的权力模型，用于研究委员会中的投票策略（Moulin＆Peleg 1982）。

一个效用函数（Moulin＆Peleg 1982）是一个函数

�:2�→22�

将每个玩家组关联到一组结果集。

这个想法是，每当情况  成立时，联盟  能够决定游戏结果位于集合  内，并且可以排除结果  最终被选择。换句话说，联盟  有能力决定  。

游戏的有效性函数在超集下是封闭的，即我们有  和  意味着  。换句话说，如果  在联盟  的权力范围内，那么  的每个超集也是如此。由此可见，如果某个联盟的有效性函数不为空，则它总是包含所有结果的集合。
对于  ，我们将其超集闭包表示为  。

例 4. 回到主要例子，考虑每个个体国家的权力。由于游戏规则，没有一个国家能够单独排除任何结果。

诉诸效能函数：对于每个  ，我们有  。

然而，对于不够大的联盟也是如此。例如，考虑在荷兰、比利时和卢森堡之间可以形成的至少包括两个国家的所有联盟。

�({Luxembourg, Belgium})=�({Luxembourg, The Netherlands})=�({Belgium, The Netherlands})=�({Luxembourg, Belgium, The Netherlands})={�}.

因为它们的总权重最多为 5 票，它们本身无法决定或排除任何可能的协议。实际上，对于委员会提出的行动，每个联盟  ，其投票权重不至少为 12，具有相同的效能函数  。

对于其他联盟来说，情况是不同的。例如，考虑由法国、德国和意大利组成的联盟，它们的投票权重总共为 12。对于它们来说，我们有以下情况：

�({France, Germany, Italy})={{�}∣�∈�}+

这意味着这三个成员可以独自决定投票结果。对于每个投票权重为 12 或更高的联盟都是如此。

那么对于委员会未提出的行动呢？对于它们，让我们使用一个不同的效力函数，我们将其标记为  。

在这种情况下，获胜的联盟必须至少由四个成员组成。

因此，当法国、德国、比利时、荷兰时。

一般来说，只要。由于投票游戏的特性，我们还有只要。区别在于三人联盟：如果他们的投票权至少为 12，他们永远无法实现。请注意，卢森堡在委员会提出的法案方面是无关紧要的，即。这对其他法案来说并非如此，正如我们所观察到的。

有效性函数的属性可以用模态逻辑来表达。为了做到这一点，重要的是要观察到，动态有效性函数，本质上是模型中每个状态的有效性函数，对应于关系结构中的（非正常的）关系。因此，有效性函数所做的就是引导一种特殊类型的邻域结构，我们称之为联盟模型。

定义 6 [联盟模型]。联盟模型是一个三元组  ，其中：

* 是一个非空状态集合；
* 是一个动态有效性函数；
* 是一个估值函数。

联盟框架是一个没有估值函数的模型。联盟模型当然是伪装成关系博弈结构的。正如读者所注意到的，动态有效性函数允许每个状态在联盟之间可能具有不同的权力分配。这在博弈中处理权力是严格来说无关紧要的（第 3 节），在那里与结果相关的有效性函数可以在模型中的任何地方被视为等效，但该模型足够一般，可以处理广泛和重复的互动，其中互动的顺序结构被明确定义。通常我们会将  缩写为  ，甚至在上下文清楚的情况下缩写为  。

用于讨论联盟模型的语言是联盟逻辑（Pauly 2001），一种非正常的模态逻辑，用于表达玩家群体的选择。联盟逻辑是命题逻辑的扩展，具有形式为  的模态性，每个模态运算符都与一个联盟索引相关联。

对于形式为  的公式，与对于一对  的满足关系定义如下：

�,�⊨[�]�\enskipif and only if\enskip��∈��(�)

 其中，  。

直观上，  意味着联盟  能够实现属性  。

作为超集的闭包，或者结果单调性，被认为是所有有效性函数的属性，单调性规则在联盟逻辑中是有效的，因此它是一种单调的模态逻辑（Hansen 2003）。

单调性规则对于每个  采取以下形式：

�→�[�]�→[�]�

直观地说，如果  能够实现  并且我们有  蕴含  ，那么  也能够实现  。

权力的数学属性除了结果单调性之外，还有许多其他属性被认为是建模博弈中的联合权力所必需的。例如，一个有效性函数通常具有以下属性：

* 活力性：即  ，对于每个  ；
* 安全性：即每个  都是如此；
* 规律性：即  意味着每个  ，对于每个  ；
* N-最大性：即  意味着  和  ；
* 随附性：即  和  意味着对于每个  ，  ，  ，  都成立  ；
* 协同单调性：即  意味着对于每个  ，  都成立  ；
* 良基性：即  意味着存在某个  ，对于每个  都成立  。

如果一个效用函数具有活力、安全性、N-最大性和超添加性，则称其为可玩的（Pauly 2001）。如果一个效用函数可玩且有良好基础，则称其为真正可玩的（Goranko、Jamroga 和 Turrini 2013）。观察到，如果  是有限的，则效用函数可玩当且仅当它是真正可玩的（Goranko 等人，2013 年）。

真正的可玩性是游戏效用函数的基本属性，它将一次性联盟游戏与一次性非合作游戏联系起来，这一点将在后面变得清楚。

示例 5. 我们的工作示例中的效用函数都是真正可玩的。

在邻域结构中，集合论和逻辑属性之间的关系通常是直接的，而类框架和邻域函数之间的标准对应结果（Chellas 1980）可以自动用于协作逻辑。

实际上，协作逻辑足够表达所有迄今为止提到的约束，除了最后一个。

命题 7. 设  为一个协作框架，  为协作，使得  和  。则以下结果成立：

* 当且仅当  是正规的；
* 当且仅当  具有安全性；
* 当且仅当  是联盟单调的；
* 当且仅当  具有活力；
* 当且仅当  是 N-最大的；
* 当且仅当  是超加性的；
* 当且仅当  是结果单调的。

实际上，上述公理和推导规则除了命题逻辑外，还对所有具有可玩效能函数的模型类具有声音和完备性。有关证明，请参阅 Pauly 2001 年的论文。

对应结果使我们能够通过模态手段区分多个框架类别。然而，模态运算符的表达能力严重限制了语言区分结构类别的能力。在这个意义上，读者应该注意到可玩效能框架和真正可玩效能框架的逻辑都共享这个事实：  。然而，这个命题的解释是对于每个  ，并不足以在两个不同类别的效能函数中进行形式上的区分。  。

沿着这些线路，以下结果告诉我们，联盟逻辑也足够强大，可以推理（或者，如果你愿意，太弱以至于无法区分）真正可玩的效能函数。

定理 8.（Goranko 等人，2013）设  为可玩框架的类，  为真正可玩的类。那么，对于每个联盟逻辑的公式

⊨�� if and only if ⊨�∗�

这是因为可玩联盟逻辑具有有限模型性质（Pauly，2001），在有限模型中，可玩的效能函数是真正可玩的。[5]

正如前面所指出的，本条目仅涉及知识如何隐含在游戏结构中，而不深入研究理性游戏的认识前提。与之相关的条目专注于认识逻辑、动态认识逻辑，尤其是认识博弈论，深入探讨了知识在决策中的作用。关于以信息为重点的游戏模态逻辑的研究，请参考 Hoek & Pauly 2006。

## 3. 分析权力

本节讨论的是个体或群体在独立且同时进行选择的游戏，强调了从时间演化中抽象出来的交互方式。它特别关注玩家选择和偏好之间的关系，提及了知识的作用，最重要的是它涉及如何用逻辑语言表达解决概念。

该部分首先描述了合作游戏的一般设置，然后考虑了更受限制且可能更为人所知的非合作游戏类别。

### 3.1 合作游戏及其逻辑学

在以  形式的关系结构中给出的游戏描述并不足以理解最终将选择哪个确切的结果。为此，我们需要一个解决概念，即将游戏与该游戏的一组结果相关联的映射（Abdou＆Keiding 1991）。在这里，我们考虑合作或联盟游戏的一般设置，其中  是一个（不一定可玩的）动态有效性函数（严格来说，动态有效性函数将一个联盟游戏分配给每个状态/结果）。

对于联盟游戏，已经引入了许多解决概念（例如，参见 Osborne＆Rubinstein 1994 和 Apt 2009（其他互联网资源））。对于目前的目的，我们只讨论可能是最为人所知的：核心。核心是一组稳定的结果，即没有联盟存在，其成员既能够又愿意偏离该结果。它可以被视为没有有效反对意见的结果集（Abdou＆Keiding 1991）。

形式上，给定一个关系结构  ，如果不存在联盟  和结果集  ，使得同时满足以下两个条件，则结果  在  中被称为稳定的：

1. �∈��(�)
2. 和  意味着

用言辞来说，如果没有一组个体能够实现他们全都严格偏好的替代方案，那么一个结果就是稳定的。

核心是所有稳定结果的集合。

例 6.考虑结果 1M，这是德国认为可接受的唯一结果。正如已经观察到的那样，德国的有效性函数是  ，因此单独来看，他们无法将自己的偏好转化为结果。然而，与其他国家一起，他们可以这样做。假设他们的盟友是比利时、法国和荷兰。那么 1M 是一个好的结果吗？如果我们看一下联盟中其他玩家的偏好，即比利时、法国、荷兰，我们会观察到以下情况。比利时更希望在 4M 和 5M 之间有一个结果，法国和荷兰则完全是 5M。这些国家可以聚在一起选择 5M，这是他们可以接受的结果。然而，比利时、法国、荷兰的有效性函数是  比利时、法国、荷兰  ，这意味着这三个国家不足以通过 5M 法案。但是由比利时、法国、意大利和荷兰组成的联盟可以。此外请注意，5M 是意大利首选结果之一。实际上，5M 是游戏的唯一稳定结果：没有一个联盟愿意并且能够偏离它。

模态逻辑可以用来表示核心，其中  解释为之前的内容。首先考虑以下公式

�→⋁�⊆�[�](⋀�∈�◊�≻�)

这意味着如果  为真，则某个联盟的成员可以改善某个  世界，这似乎不是表达逻辑稳定性的正确公式。然而，我们可以证明以下结果，利用了公式与特定类别的框架之间的对应关系。

让  是一个（结果单调）有效性函数，让  是一个弱线性序。那么：

(�,�′),�⊨�→⋁�⊆�[�](⋀�∈�◊�≻�)

对于每个  ，如果且仅当存在  和  ，对于所有  ，  ，我们有  ，则在  成立。

因此，如果公式在每个估值中成立，那么  不属于核心。显然，如果公式在一个结果和某个估值中为假，则意味着该结果属于核心。

注意，由于效果函数是结果单调的，如果我们有如果  和

�⊆(⋀�∈�◊�≻�)(�,�′),

 然后

(⋀�∈�◊�≻�)(�,�′)∈��(�).

还要注意上面的结果允许

∅=(⋀�∈�◊�≻�)�∈��(�),

这可能是违反直觉的。要求  具有活力可以解决这个问题。

注意我们如何对估值集合进行普遍量化。如果没有这种明确的量化，该公式只适用于一个特定的模型，这将不是一个合适的解决方案。相反，如果我们只关心是否存在某个稳定的结果，或者相反，核心是否为空，那么只需要要求上述公式成立即可。这意味着没有任何结果是稳定的，即核心为空。

命题 10. 设  是一个具有  的框架，对于每个  。我们有以下结论：

⊨��→⋁�⊆�[�](⋀�∈�◊�≻�)

当且仅当  中没有任何结果属于核心。

再次，活力将处理一个微不足道的情况，即

(⋀�∈�◊�≻�)(�,�)=∅.

另一种方法是将每个结果与语言中的一个名称（或者在混合逻辑的语言中，一个名词）进行标识。然后我们有以下结果。

命题 11. 让  一个原子命题在结果  上为真，且仅在结果  上为真。

(�,�),��⊨��→⋁�⊆�[�](⋀�∈�◊�≻��)

当且仅当  不属于核心时。

另一种选择是为联盟力量设立原子（Ågotnes，van der Hoek 和 Wooldridge 2009）：  当且仅当  。然后：

命题 12. 假设  是一个原子命题，在结果  上为真且仅在结果  上为真。

((�,�),�⊨⋁�⊆�⋄≻��

当且仅当  不属于  的核心时。

 的核心为空可以用第 2.1 节中的普遍性模态  进一步表达：  。

因此，根据我们感兴趣的属性，不同的基本模态逻辑扩展与不同形式的有效性（在世界、模型或框架上）最适合表达它们。

### 3.2 非合作游戏及其逻辑学

非合作游戏是对个体而非联盟所能实现的以及他们的偏好的一种表示。

形式上，一个战略游戏形式是一个元组

(�,�,{Σ�}�∈�,�)

其中 N 是有限玩家集合，  是结果集合，  是策略的集合，每个玩家  有一个策略，  是一个结果函数，将策略元组与结果相关联。

非合作博弈是一个元组  ，其中  是一个战略博弈形式，  是一个偏好关系的集合，每个玩家  有一个偏好关系。

例 7. 如果我们将前面的例子中的国家视为个体玩家，将他们的投票视为个体策略，我们可以将《罗马条约》博弈建模为一个非合作博弈，其中每个个体可以投票决定用于边境保护的资金数量，偏好关系如上所述。

结果函数将负责将每个个体选民的投票与集体决策的最终结果相关联，例如，选择由至少 12 个国家投票权重投票的结果，或者如果没有达成共识，则不做决定。

 例如：

* 法国投票 0M
* 比利时投票 2M
* 意大利投票 10M
* 德国投票 0M
* 荷兰投票 0M
* 卢森堡投票 0M

这一轮结果没有决定，因为没有任何结果收集到至少 12 的投票权重。

但是，假设第二轮游戏是这样的，除了比利时之外的所有人都坚持他们的投票，并假设比利时改变投票为 0M。现在 0M 的总和为 13，这意味着它被选为最终决定。

在我们的例子中，统一对待似乎存在着非合作游戏和合作游戏之间的关系。这种关系可以被正式地指定。

让我们首先考虑在游戏中一组玩家可以做什么。为此，我们定义了  -效果函数，它是对游戏中的联盟策略的数学描述，描述了它们可以强制实现的结果集。

定义 12. [  -效用函数] 设  是一个非合作游戏。我们定义  的  效用函数为  ，其中  是  的补集：

 存在  ，对于所有的  ，我们有

直观上，  的  -效用函数收集了每个玩家组的结果集，他们可以通过固定自己的策略来实现，无论对手如何行动。

以下结果显示了策略和效能函数之间的关系。

定理 13（Goranko 等人，2013 年）。如果一个效能函数是某个非合作游戏的  -效能函数，那么它是真正可玩的。

这是 Peleg 1998 年关于有限游戏的结果的一般化，从 Pauly 2001 年首次定义的非合作游戏模型开始。简而言之，这些结果意味着以下内容。

命题 14. 设  是一个关系游戏结构。那么对于每个  ，当且仅当以下公式在  中对于不相交的  成立时，  是某个非合作游戏的  -效用函数：

* �→�⊨�[�]�→[�]�
* ⊨�[�]⊤
* ⊨�¬[�]⊥
* ⊨�¬[∅]�→[�]�
* ⊨�[�′]�∧[�]�→[�′∪�](�∧�)

与合作游戏一样，我们可以问自己在战略情境中一个结果是否稳定或合理。

纳什均衡和可定义性分析非合作游戏的主要解决概念是纳什均衡。非正式地说，纳什均衡是一组策略，每个玩家一个，使得没有玩家有兴趣改变自己的策略，只要其他人坚持他们的策略。形式上，策略配置  是一个（纯策略）纳什均衡，如果对于所有玩家  和所有  ，我们有

�(��,�−�)⪰��(��′,�−�)

例 8. 考虑以下投票

* 法国投 5M 票
* 比利时投 5M 票
* 意大利投票 1000 万
* 德国投票 100 万
* 荷兰投票 500 万
* 卢森堡投票 5M

在这个游戏中，对于任何预算都没有共识。情况可能看起来像是僵局，因为每个人都按照自己的偏好投票。然而，结果是不一致的，没有任何玩家喜欢任何协议。玩家们能够达成一致的唯一方法是意大利改变他们的投票为 5M。如果这种情况发生，5M 将成为结果。

注意，修改后的游戏，即意大利投票 5M，是一个纳什均衡。

现在考虑对上述游戏的修改，意大利和荷兰投票 10M，而其他人坚持他们的投票。令人惊讶的是，尽管存在分歧，这是纳什均衡，因为没有玩家能够同时达成某种协议，尽管他们愿意这样做。

如何用逻辑来表达纳什均衡？回想一下公式

�→⋁�⊆�[�](⋀�∈�◊�≻�)

在一个框架  中是否成立，当且仅当核心为空，并且混合逻辑扩展可以告诉我们特定结果是否属于核心。如果  基于一个真正可玩的效用函数，我们已经有了一个非合作形式的核心游戏版本：一个结果，使得没有联盟能够并愿意偏离，而不考虑其他人的行动。然而，纳什均衡固定了一组策略，使得没有玩家能够并愿意偏离。换句话说，它需要对于给定配置的最佳反应的概念。

形式主义，如联盟逻辑，过于薄弱，无法表达纳什均衡。然而，它们可以表达某些效能函数允许纳什均衡的可能性。这就是汉森和保利（Hansen & Pauly）在 2002 年所称的纳什一致联盟逻辑。事实上，纳什均衡在基本模态逻辑中是不可定义的（van Benthem 等人，2011 年），但可以通过一个既涉及偏好关系又涉及选择关系的模态来实现（van Benthem 等人，2011 年）（有关选择关系，请参见下文的第 3.2.2 节）。

当且仅当  暗示  时，  成立。

然后，对于  的最佳反应被定义为  ，因为没有同时可实现和可取代  的替代方案。或者，一种提及语言中的策略配置文件的混合逻辑可以提供解决方案，类似于核心的情况。

#### 3.2.1 注射游戏和带交集的 PDL

上述给出的非合作游戏的一般定义允许存在两个不同的策略配置导致相同的结果，即当  时，即结果函数不是注射的情况。然而，在博弈论中，注射性往往是隐含或明确假设的。实际上，结果经常与策略配置等同。

因此，一个自然的问题是，当我们将非合作游戏限制为注射性时，联盟逻辑会发生什么。答案是，首先，没有太大变化：联盟逻辑的语言无法区分注射性和非注射性游戏（Goranko 等人，2006 年）。但是，第二，有效性函数的类别发生了变化：并非所有真正可玩的有效性函数都是注射游戏的  -有效性函数。

回想一下效用函数的良基性质：如果  ，那么  对于某个  来说是成立的。事实上，这等价于（Goranko 等人，2013 年）  具有一个完整的非单调核心。非单调核心  是  的最小元素：  。当且仅当对于每个  ，存在一个  使得  时，非单调核心是完整的。虽然真实可玩性意味着空联盟的非单调核心是完整的，但对于任意联盟来说并非如此。

然而，对于单射游戏来说是如此：除了真实可玩性属性之外，单射游戏的  -效用函数对于所有联盟都有一个完整的非单调核心。此外，非单调核心具有一些结构性质。更详细地说，我们说效用函数  是可单射玩的（Ågotnes 和 Alechina，2015 年），如果它是真正可玩的，并且对于所有  具有以下附加属性：

* 具有一个完整的非单调核心；
* 当  时；
* 如果  和  那么  ；
* 如果  和  那么  。

由其非单调核心完全决定，这意味着  。

定理 15.（Ågotnes 和 Alechina 2015）一个效用函数是可注入可玩的，当且仅当它是某个注入非合作游戏的  -效用函数。

交集在游戏中的联盟效用中起着关键作用：直观地说，联盟的力量是联盟中个体的交集。然后，根据 van Benthem 2012 的自然想法是，联盟力量可以通过使用交集模态来表达。这确实是这样的，在以下准确意义上（Ågotnes 和 Alechina 2015）：从联盟逻辑到命题动态逻辑与交集（Gargov 等人 1988）存在一种保持可满足性的翻译。这种翻译依赖于这样一个事实，即对于每个非注入游戏，存在一个（联盟逻辑）等效的注入游戏。

#### 3.2.2 非单调行动逻辑

一些逻辑学利用了与非合作游戏相对应的那些关系结构的更紧凑的表示形式。

与其使用效果函数，每个玩家  与一个等价关系  相关联，其诱导的分割表示他或她可以执行的选择。这些等价关系描述了一组玩家可以执行的确切选择，而产生的模型在文献中被称为后果主义（例如，Belnap，Perloff 和 Ming 2001）。

现在定义一个效用函数  ，使得它满足以下条件：

�∗(�)={[�]∣�′∈[�] whenever �≈��′}+

直观地说，  收集了个体能够实现的所有内容以及它们的超集。

如果  满足以下条件，则称其为后果主义：

* �∗(�)={⋂�∈���∣for some ��∈�∗(�)}
* 对于每个  ，
* �∗(�)={{�}∣�∈�}+

注意到  是一个真正可玩的效用函数。

最后一个属性是良基性，就像任意效用函数的情况一样。这不是所有变体都假设的属性，例如 Kooi＆Tamminga 2008 中的选择结构及其时间变体 STIT（Belnap 等人，2001）不假设该属性。然而，正如 Turrini 2012 和 Tamminga 2013 所观察到的那样，良基的后果主义模型对应于非合作游戏，而效用函数  可以通过每个玩家的等价关系  进行有效模拟。直观地说，  是  可以在不进一步细化的情况下选择的结果集的集合。

为了推理关于后果主义模型，我们使用所谓的后果主义逻辑，即命题逻辑扩展了形式为  的模态。其解释如下：

 当且仅当对于所有满足  的  ，  成立。

后果主义逻辑已经发展用于推理行动和后果，并在道义逻辑中有有趣的应用，例如 Kooi＆Tamminga 2008; Tamminga 2013; Turrini 2012。此外，它们还是后续讨论的 STIT 和战略 STIT 等策略时间逻辑的基础。一个特殊情况是命题控制逻辑（Hoek＆Wooldridge 2005; Troquard，Hoek，＆Wooldridge 2009）。

#### 3.2.3 量化和高阶协同逻辑

游戏中权力的许多有趣属性涉及对协同的量化，例如代理  是弱否决者（Wooldridge 和 Dunne 2004）相对于  的情况，意味着任何能够实施  的协同必须包括  ，或者在协同逻辑的某个一阶或高阶扩展中：  。量化协同逻辑（QCL）（Ågotnes 等人，2008）通过对协同进行有限形式的量化来扩展协同逻辑，而不会使得结果逻辑不可判定，或者增加可满足性问题的计算复杂性。在 QCL 中，模态内的协同被协同谓词所取代。直观地说，  （  ）意味着满足谓词  的任何（一些）协同都有能力实施  。例如，  是  的弱否决者：

¬⟨¬��������({�})⟩�

* 不是任何不是  的超集的协同都有能力实施  。或者  是  的独裁者：  。这些属性以及可以在 QCL 中表达的所有属性都可以通过使用析取和合取对协同进行量化来在协同逻辑中表达，但是这些表达通常在代理数量上呈指数级增长。QCL 可以简洁地表达这些属性，并且比协同逻辑更加简洁。QCL 还可以通过 Belief-Intention-Desire（BDI）逻辑（Chen 等人，2014）进一步扩展，而不会增加复杂性。

高阶联盟逻辑（HCL）（Boella 等人，2010 年）将 QCL 扩展为一个单调二阶语言，统一了描述联盟和描述其权力的语言，并显著扩展了表达能力。存在 HCL 的表达性可处理的片段（Doherty 等人，2011 年）。

#### 3.2.4 概率和资源边界

正如我们所见，联盟逻辑的（真正可玩的）有效性函数对应于游戏，其中所有代理的联合策略配置唯一确定结果。联盟逻辑可以通过多种方式进行修改（Naumov 等人，2021 年），以处理随机游戏，即这样的配置仅确定可能结果集上的概率分布。将模态  解释为“  可以以概率  强制执行  ”会导致有趣且非平凡的（无效的）属性，例如以下超加性的变体  。

[�]�(�→�)→([�′]��→[�∪�′]���{�,�}�)

不是有效的，而

[�]�+�+�(�∨�∨�)→[�]2�(�∨�)∨[�]2�(�∨�)∨[�]2�(�∨�)

（其中  是所有代理的集合）是有效的。

作为随机转换的替代方案，可以考虑具有随机故障的游戏，从逻辑学的角度来看，这些游戏要容易处理一些（Naumov 等，2021）。将  解释为“  可以有一个联合策略，以确保在每个结果中  为真，并且无论其他代理做什么，都保证不会以至少  的概率失败”，例如，我们得到了上述提到的超加性公理的变体成立。

资源边界也已添加到联盟模态中，这些模态在与执行联合动作的成本相关的联盟模型中进行解释（Alechina 等，2009）。在这里，  表示  可以强制  在资源边界  下为真，即他们可以选择一个最多花费  的联合动作，以确保  为真。这些模态满足以下超添加性的变体  ：

[��]�∧[��]�→[(�∪�)�+�](�∧�).

#### 3.2.5 条件权力和协调

从真正可玩的效力函数和联盟逻辑的观点来看，如果联盟根据  效力定义具有相同的权力，则两个游戏是等价的。然而，Van Benthem 等人（2019）指出，由于单调性，具有相同  效力的游戏之间存在有意义的差异：两个不同的原因可能导致  成立。首先，可能存在一个由  执行的联合动作，使得其他代理人也执行一个联合动作，结果为  ，并且其他代理人还执行另一个联合动作，结果为  ；或者第二，可能只有  或  成立（在这种情况下  或  ）。Van Benthem 等人（2019）将第一种权力称为基本权力，并对两个代理人情况下的效力函数属性进行了描述，并使用 Instantial Neighbourhood Logic（INL）的变体给出了一个完备的公理化，该逻辑是标准模态逻辑与邻域语义的扩展。基本权力的一个重要意义在于，它涵盖了其他玩家在给定某个联盟的选择之一的情况下可以自由选择任何状态的所有结果集。

也开发了几种扩展的 Coalition Logic 语言，用于推理代理和联盟之间的条件和相互关联的权力，通常结合存在量化和普遍量化来进行选择。Goranko 和 Enqvist 2018 年引入了扩展的联盟运算符形式

[�](�;�1,…,��)

具有直观的意义，即  有能力使  成为真，同时使其他代理在同一时间能够实现任何目标  。由此产生的逻辑也可以看作是 INL 的多代理扩展。Goranko 和 Enqvist 2018 年还引入了以下形式的运算符

[�1▹�1,…,��▹��]

具有直观的意义，即联盟  具有一个共同策略，对于每个  ，该共同策略的限制对联盟  强制执行目标  。

Goranko 和 Ju 2022 年注意到后一种运算符可以用来表达一种特定类型的条件能力，即  ，直观地说，  具有一种共同行动，强制执行  ，同时使  能够应用一种共同行动，以强制执行  。他们还引入了两种额外的条件能力模态：

[�]�(�;⟨�⟩�) and [�]�(�;⟨�⟩�)

其中前者表示  具有一种共同策略，如果  应用任何确保  的行动，那么该共同策略（由  ）同时确保  ，而后者表示对于  通过强制执行  的任何共同行动，存在一致的  通过同时强制执行  的共同行动。这些能力概念分别对应于  和  的有效性。

协调不仅是不同联盟之间的问题，也是联盟  中的代理人在  的解释中的问题。在联盟逻辑中，隐含地假设，就像经常发生的那样（Schelling 1960），  中的代理人可以以某种方式协调他们的行动，以实现结果  。Hawke 2017 年引入了联盟模态的新变体，捕捉到更强的联盟能力概念，放宽了关于协调的假设（在两个代理人的情况下）。与  相反，这些新的模态  不是单调的。

#### 3.2.6 动态联盟逻辑

受动态认知逻辑的模型更新语义启发，联盟逻辑已经通过多种方式扩展，使用动态模态来建模联盟能力的变化。Broersen、Meyer 和 Turrini（2009）添加了形式为  的表达式，直观地表示在  选择  之后，  成立。Ågotnes 和 Galimullin（2021）添加了模态来添加和删除动作和能力，受箭头更新逻辑的启发：  直观地表示在联盟模型通过在每个  状态中添加一个新动作给代理  ，以确保无论其他代理做什么动作都能保证  ，那么  成立。类似的模态也适用于删除能力。Ågotnes 和 Galimullin（2023）通过启发认知动作模型，扩展了联盟逻辑，添加了更一般和表达力更强的联盟行动模型的模态。

#### 3.2.7 基于逻辑的游戏

在许多情况下，代理人对某些命题变量（Hoek＆Wooldridge 2005）具有控制权，例如他们可以负责交通流量或否决某个问题。变量也可以是共享的（Gerbrandy 2006），例如投票，其中玩家共享对一个变量的控制权，其实现由某个聚合函数确定，例如多数（Troquard，Hoek 和 Wooldridge 2011）。这些命题控制逻辑指定了代理人在其有效性函数中具有的命题。例如，如果代理人  控制  ，那么  和  都在他或她的有效性函数中。从某种意义上说，这些模型是非常特殊类型的有效性函数，代理人控制的内容可以被视为一种选择或策略，可供他们使用。

命题控制逻辑具有类型为  的模态，意味着玩家  具有“控制”策略，以确保无论其他代理人如何选择他们的控制策略，最终  成立。但它们也具有类型为  的模态，意味着  中的玩家具有共同的控制策略，确保最终  成立。因此，策略配置文件等效于估值函数，它为每个可用命题分配一个真值。反过来，玩家  的策略可以被视为一个部分估值函数，仅为  控制的命题分配一个真值。

稍微滥用符号，我们说估值  满足公式  ，表示为  ，只要在当前命题分配下使  为真。换句话说，命题控制游戏在一个单一的世界中进行，个体分配确定了该世界中的真命题。记  为所有估值的集合，记  为  控制的部分估值。我们有以下内容。

 当且仅当对于所有的  ，存在  ，使得对于所有的  ，我们有

因此，当  成立时，联盟  可以以一种控制策略进行游戏，无论对手采取什么控制策略，最终的结果都满足

提议控制的逻辑可以扩展到基于目标的形式化方法，即所谓的布尔游戏（Harrenstein, van der Hoek, Meyer, & Witteveen 2001）：命题被分配给各个玩家，每个玩家控制分配给他或她的命题集合。此外，每个玩家还被分配一个命题逻辑公式，该公式旨在成为他或她的目标，其实现可能不仅取决于他或她能够做出的选择。

在多智能体系统领域，布尔游戏在逻辑基础设置中被广泛研究，作为简单而紧凑的模型来表示战略互动（Dunne＆Hoek 2004; Dunne＆Wooldridge 2012; Dunne，Hoek，Kraus 和 Wooldridge 2008）。

在它们最一般的变体中，它们是逻辑与命题控制的扩展，其中每个代理被分配一个目标公式。目标公式是语言中可满足的公式，重要特征是每个代理的目标不需要在他或她的控制之下。

例如，代理  可能只被分配了命题  的控制权，但可能有  的目标。因此，无论  的目标是否满足，不仅取决于  设置命题  为真，还取决于其他代理，比如  设置命题  为真。另一方面，代理  可能对于  是否为真感兴趣，也可能不感兴趣。例如，他或她可能希望命题  为真，因此对于最终是否实现  或  都是漠不关心的。甚至可能有  的目标。

在布尔游戏中，一些目标可以同时实现，例如代理人可能都希望  为真，或者可能存在某些估值不能实现所有代理人的目标，但是没有不满意的代理人能够通过改变对命题变量的分配来改善自己的情况。这种情况是布尔游戏中一种非常简单的纳什均衡形式。

因此，对于  是玩家  的目标，  是由玩家  控制的部分估值，我们说估值  是一种纳什均衡，如果对于每个  和每个  都成立。

(��,�−�)⊭�� implies that (��′,�−�)⊭��

因此，如果  不满足  的目标，那么  无法做任何事情来满足它。

在布尔游戏中分析纳什均衡显示出这些游戏与命题逻辑之间的密切对应关系：通过将布尔游戏的问题归约到命题逻辑公式的可满足性问题，检查一个结果  是否是布尔游戏的纳什均衡问题是 co-NP 完全的（Wooldridge，Endriss，Kraus 和 Lang 2013）。

除了定性地表示支付之外，另一种常见的表示某些类别游戏的简洁方法是对支付函数施加限制。结合这两种方法的是 Das 等人在 2023 年提出的方法，其中使用单调最小不动点逻辑来表达具有成对可分离支付函数的纯策略纳什均衡的存在。

## 4. 结论：关于正确的分析水平

回想一下第一个例子，在那个例子中，一个投票游戏的结果集只能通过考虑投票的整体结果或明确描述每个国家的投票情况来描述。

当用简洁的语言描述数学结构时，我们常常面临一个问题，那就是哪种语言最适合。有些语言能够同时表达偏好、知识和联合能力，有些只能表达其中两个，有些只能表达其中一个。最后，有些语言可能只能表达个体而不能表达联合体所能实现的。

同样，对于这个问题没有正确答案。一切取决于一个人试图建模的基本特征是什么。要在协调游戏中表达纳什均衡，不需要基于时间逻辑的形式化。相反，如果想要表达反向归纳，那么一个不明确表达决策问题的顺序结构的语言可能不是合适的选择。

回到我们的例子，一些国家可能对其他国家的投票方式有偏好，这可能会影响他们的决策，改变游戏的整体均衡点。如果是这种情况，那么更丰富的语言就很重要。否则，如果我们可以安全地排除这种可能性，更简洁的语言似乎是合适的选择。

## Bibliography

* Abdou, Joseph and Hans Keiding, 1991, *Effectivity Functions in Social Choice*, (Theory and Decision Library 8), Dordrecht: Springer Netherlands, doi:10.1007/978-94-011-3448-4
* Ågotnes, Thomas, Alechina, Natasha, 2015, “Embedding Coalition Logic in the Minimal Normal Multimodal Logic with Intersection”, in S. Ju, H. Liu, and H. Ono (eds.), *Modality, Semantics and Interpretations* (Logic in Asia: Studia Logica Library), Berlin, Heidelberg: Springer.
* Ågotnes, Thomas, van der Hoek, W., & Wooldridge, M., 2008, “Quantified Coalition Logic”, *Synthese*, 165(2): 269–294. [[Ågotnes *et al*. 2008 available online](https://www.jstor.org/stable/40271103)]
* –––, 2009, “Reasoning about coalitional games”, 2009, *Artificial Intelligence*, 173: 45–79.
* Alechina, Natasha, Brian Logan, Hoang Nga Nguyen, Abdur Rakib, 2011, “Logic for coalitions with bounded resources”, *Journal of Logic and Computation*, 21(6): 907–937. doi:10.1093/logcom/exq032
* Baltag, Alexandru and Bryan Renne, 2016, “Dynamic Epistemic Logic”, in *Stanford Encyclopedia of Philosophy*, (Winter 2016 Edition), Edward N. Zalta (ed.), URL = <https://plato.stanford.edu/archives/win2016/entries/dynamic-epistemic/>
* Belnap, Nuel, Michael Perloff, and Ming Xu, 2001, *Facing the Future: Agents and Choices in Our Indeterminist World*, Oxford: Oxford University Press.
* Benthem, Johan van, 2012, “In praise of strategies”, in J. van Eijck, R. Verbrugge (eds.), *Games, Actions and Social Software* (Lecture Notes in Computer Science: Volume 7010), Berlin, Heidelberg: Springer, pp. 96–116.
* –––, 2014, *Logic in Games*, Cambridge, MA: MIT Press.
* Benthem, J. van, Bezhanishvili, N., Enqvist, S., and Yu, J., 2017, “Instantial Neighbourhood Logic”, *The Review of Symbolic Logic*, 10(1): 116–144. doi:10.1017/S1755020316000447
* Benthem, Johan van, Eric Pacuit, and Olivier Roy, 2011, “Toward a Theory of Play: A Logical Perspective on Games and Interaction”, *Games*, 2(1): 52–86. doi:10.3390/g2010052
* Blackburn, Patrick, Maarten de Rijke, and Yde Venema, 2001, *Modal Logic*, Cambridge: Cambridge University Press. doi:10.1017/CBO9781107050884
* Boella, Guido, Dov M. Gabbay, Valerio Genovese, and Leendert van der Torre, 2010, “Higher-Order Coalition Logic”, in *Proceedings of the 2010 conference on ECAI 2010: 19th European Conference on Artificial Intelligence*, IOS Press, NLD, 555–560.
* Broersen, J., Mastop, R., Ch.Meyer, J. J. and Turrini, P., 2009, “Strategic Ability Update: A Modal Logic Account”, in *2009 IEEE/WIC/ACM International Joint Conference on Web Intelligence and Intelligent Agent Technology*, Milan, Italy, 2009, pp. 470–473. doi: 10.1109/WI-IAT.2009.328
* Chellas, Brian, 1980, *Modal Logic: An Introduction*, Cambridge: Cambridge University Press.
* Chen, Q., Li, Q., Su, K., Luo, X., 2014, “Quantified Coalition Logic for BDI-Agents: Completeness and Complexity”, in DN. Pham and SB. Park (eds.), *PRICAI 2014: Trends in Artificial Intelligence* (Lecture Notes in Computer Science: Volume 8862), Cham: Springer. doi:10.1007/978-3-319-13560-1_72
* Chen, Q., Shi, C., and Wang, Y., 2023, “Reasoning about Dependence, Preference and Coalitional Power”, *Journal of Philosophical Logic*, first online 28 November 2023. doi:10.1007/s10992-023-09727-2
* Dalen, Dirk van, 1980, *Logic and Structure*, Berlin: Springer-Verlag. doi:10.1007/978-3-662-02962-6
* Das, R., Ramanujam, R., Simon, S., 2023, “A Logical Description of Priority Separable Games”, in N. Alechina, A. Herzig, and F. Liang (eds.), *Logic, Rationality, and Interaction*: LORI 2023 (Lecture Notes in Computer Science: Volume 14329), Cham: Springer. doi:10.1007/978-3-031-45558-2_3
* Doherty, Patrick, Barbara Dunin-Keplicz, and Andrzej Szałas, 2011, “Tractable model checking for fragments of higher-order coalition logic”, in *The 10th International Conference on Autonomous Agents and Multiagent Systems – Volume 2* (AAMAS ’11), International Foundation for Autonomous Agents and Multiagent Systems, Richland, SC, 743–750.
* Dunne, Paul E. and Wiebe van der Hoek, 2004, “Representation and Complexity in Boolean Games”, in José Júlio Alferes & João Alexandre Leite (eds.), *Logics in Artificial Intelligence, 9th European Conference, JELIA 2004, Lisbon, Portugal, September 27–30, 2004, Proceedings*, Berlin, Heidelberg: Springer, 3229: 347–359. doi:10.1007/978-3-540-30227-8_30
* Dunne, Paul E. and Michael Wooldridge, 2012, “Towards Tractable Boolean Games”, in Wiebe van der Hoek, Lin Padgham, Vincent Conitzer, & Michael Winikoff (eds.), *Proceedings of the 11th International Conference on Autonomous Agents and Multiagent Systems*, (AAMAS 2012), Valencia, Spain, June 4–8, 2012, Richland, SC: International Foundation for Autonomous Agents and Multiagent Systems, vol. 2, pp. 939–946.
* Dunne, Paul E., Wiebe van der Hoek, Sarit Kraus, and Michael Wooldridge, 2008, “Cooperative Boolean Games”, in Lin Padgham, David C. Parkes, Jörg P. Müller, & Simon Parsons (eds.), *Proceedings of the 7th International Joint Conference on Autonomous Agents and Multiagent Systems*, (AAMAS 2008), Estoril, Portugal, May 12–16, 2008, Richland, SC: International Foundation for Autonomous Agents and Multiagent System, vol. 2, pp. 1015–1022.
* Enqvist, Sebastian, Nick Bezhanishvili & Johan van Benthem, 2019, “A New Game Equivalence, its Logic and Algebra”, *Journal of Philosophical Logic*, 48(4): 649–684
* Galimullin, R. and Ågotnes, T., 2021, “Dynamic Coalition Logic: Granting and Revoking Dictatorial Powers”, in *Logic, Rationality, and Interaction*: LORI 2021 (Proceedings of the 8th International Workshop), Xi’an, China, October 16-18, Berlin, Heidelberg: Springer-Verlag, pp. 88–101. doi:10.1007/978-3-030-88708-7_7
* Galimullin, R., Ågotnes, T., 2023, “Action Models for Coalition Logic”, in C. Areces and D. Costa (eds.), *Dynamic Logic. New Trends and Applications*: DaLí 2022 (Lecture Notes in Computer Science: Volume 13780), Cham: Springer. doi:10.1007/978-3-031-26622-5_5
* Gargov, G., Passy, S., 1988, “A note on boolean modal logic”, in *Mathematical Logic* (Proceedings of The Summer School and Conference on Mathematical Logic, Heyting’88), New York: Plenum Press, pp. 311–321.
* Garson, James, 2014, “Modal Logic”, in *Stanford Encyclopedia of Philosophy*, (Spring 2016 Edition), Edward N. Zalta (ed.), URL = <https://plato.stanford.edu/archives/spr2016/entries/logic-modal/>.
* Gerbrandy, Jelle, 2006, “Logics of Propositional Control”, in Hideyuki Nakashima, Michael P. Wellman, Gerhard Weiss, & Peter Stone (eds.), *Proceedings of the 5th International Joint Conference on Autonomous Agents and Multiagent Systems*, (AAMAS 2006), Hakodate, Japan, May 8–12, 2006, New York: ACM, pp. 193–200. doi:10.1145/1160633.1160664
* Goranko, Valentin and Salomon Passy, 1992, “Using the Universal Modality: Gains and Questions”, *Journal of Logic and Computation*, 2(1): 5–30. doi:10.1093/logcom/2.1.5
* Goranko, V., van Drimmelen, G., 2006, “Complete axiomatization and decidability of alternating-time temporal logic”, *Theoretical Computer Science*, 353(1–3): 93–117 (2006)
* Goranko, Valentin, Wojciech Jamroga, and Paolo Turrini, 2013, “Strategic Games and Truly Playable Effectivity Functions”, *Autonomous Agents and Multi-Agent Systems*, 26(2): 288–314. doi:10.1007/s10458-012-9192-y
* Goranko, Valentin and Enqvist, Sebastian, 2018, “Socially Friendly and Group Protecting Coalition Logics”, in *Proceedings.of the 17th International Conference on Autonomous Agents and Multiagent Systems* (AAMAS 2018), M. Dastani, G. Sukthankar, E. André, S. Koenig (eds.), July 10–15, 2018, Stockholm, Sweden. International Foundation for Autonomous Agents and Multiagent Systems.
* Goranko, Vanetin and Ju, Fengkui, 2022, “A Logic for Conditional Local Strategic Reasoning”, *Journal of Logic, Language and Information*, 31: 167–188.
* Hansen, Helle Hvid, 2003, *Monotonic Modal Logics*, Masters Thesis, University of Amsterdam.
* Hansen, Helle Hvid and Marc Pauly, 2002, “Axiomatising Nash-Consistent Coalition Logic”, in Sergio Flesca, Sergio Greco, Nicola Leone, & Giovambattista Ianni (eds.), *Logics in Artificial Intelligence*, Berlin: Springer, 2424: 394–406. doi:10.1007/3-540-45757-7_33
* Hansen, Helle Hvid, Clemens Kupke, and Eric Pacuit, 2009, “Neighbourhood Structures: Bisimilarity and Basic Model Theory”, *Logical Methods in Computer Science*, 5(2): lmcs:1167. [[Hansen, Kupke, & Pacuit 2009 available online](https://lmcs.episciences.org/1167)]
* Hansson, Sven Ove and Till Grune-Yanoff, 2011, “Preferences”, in *Stanford Encyclopedia of Philosophy*, (Fall 2011 Edition), Edward N. Zalta (ed.), URL = <[Preferences (Stanford Encyclopedia of Philosophy/Fall 2011 Edition)](https://plato.stanford.edu/archives/fall2011/entries/preferences/)>
* Harrenstein, Paul, Wiebe van der Hoek, John-Jules Meyer, and Cees Witteveen, 2001, “Boolean Games”, in Johan van Benthem (ed.), *Proceedings of the 8th Conference on Theoretical Aspects of Rationality and Knowledge*, (Tark ’01), San Francisco: Morgan Kaufmann, pp. 287–298.
* Hawke, Peter, 2017, “The Logic of Joint Ability in Two-Player Tacit Games” *Review of Symbolic Logic*, 10(3): 481–508.
* Hendricks, Vincent and John Symons, 2006, “Epistemic Logic”, in *Stanford Encyclopedia of Philosophy*, (Spring 2006 Edition), Edward N. Zalta (ed.), URL = <[Epistemic Logic (Stanford Encyclopedia of Philosophy/Spring 2006 Edition)](https://plato.stanford.edu/archives/spr2006/entries/logic-epistemic/)>
* Hodges, Wilfrid, 2013, “Logic and Games”, in *Stanford Encyclopedia of Philosophy*, (Spring 2013 Edition), Edward N. Zalta (ed.), URL = <[Logic and Games (Stanford Encyclopedia of Philosophy/Spring 2013 Edition)](https://plato.stanford.edu/archives/spr2013/entries/logic-games/)>.
* Hoek, Wiebe van der and Marc Pauly, 2006, “Modal Logic for Games and Information”, in Patrick Blackburn, Johan van Benthem, & Frank Wolter (eds.), *Handbook of Modal Logic*, pp. 1077–1148, Elsevier.
* Hoek, Wiebe van der and Michael Wooldridge, 2005, “On the Logic of Cooperation and Propositional Control”, *Artificial Intelligence*, 164(1–2): 81–119. doi:10.1016/j.artint.2005.01.003
* Kooi, Barteld and Allard Tamminga, 2008, “Moral Conflicts Between Groups of Agents”, *Journal of Philosophical Logic*, 37(1): 1–21. doi:10.1007/s10992-007-9049-z
* Kracht, Marcus and Frank Wolter, 1999, “Normal Monomodal Logics Can Simulate All Others”, *Journal of Symbolic Logic*, 64(1): 99–138. doi:10.2307/2586754
* Moulin, Herve and Bezalel Peleg, 1982, “Cores of Effectivity Functions and Implementation Theory”, *Journal of Mathematical Economics*, 10(1): 115–145. doi:10.1016/0304-4068(82)90009-X
* Naumov, Pavel and Kevin Ros, 2021, “Strategic coalitions in stochastic games”, *Journal of Logic and Computation*, 31(7): 1845–1867. doi:10.1093/logcom/exab032
* Osborne, Martin and Ariel Rubinstein, 1994, *A Course in Game Theory*, Cambridge, MA: MIT Press.
* Pacuit, Eric and Olivier Roy, 2015, “Epistemic Foundations of Game Theory”, in *Stanford Encyclopedia of Philosophy*, (Spring 2015 Edition), Edward N. Zalta (ed.), URL = <https://plato.stanford.edu/archives/spr2015/entries/epistemic-game/>
* Pauly, Marc, 2001, *Logic for Social Software*, Ph.D. thesis, University of Amsterdam. [[Pauly 2001 available online](http://hdl.handle.net/11245/1.194561)]
* Peleg, Bezalel, 1998, “Effectivity Functions, Game Forms, Games and Rights”, *Social Choice and Welfare*, 15(1): 67–80. doi:10.1007/s003550050092
* Schelling, T., 1960, *The Strategy of Conflict*, Cambridge, MA: Harvard University Press.
* Steele, Katie and Orri Stefansson, 2015, “Decision Theory”, in *Stanford Encyclopedia of Philosophy*, (Winter 2015 Edition), Edward N. Zalta (ed.), URL = <https://plato.stanford.edu/archives/win2015/entries/decision-theory/>
* Tamminga, Allard, 2013, “Deontic Logic for Strategic Games”, *Erkenntnis*, 78(1): 183–200. doi:10.1007/s10670-011-9349-0
* Troquard, Nicolas, Wiebe van der Hoek, and Michael Wooldridge, 2009, “A Logic of Games and Propositional Control”, in Carles Sierra, Cristiano Castelfranchi, Keith S. Decker, & Jaime Simão Sichman (eds.), *Proceedings of the 8th International Joint Conference on Autonomous Agents and Multiagent Systems*, (AAMAS 2009), Budapest, Hungary, May 10–15, 2009, Volume 2, Richland, SC: International Foundation for Autonomous Agents and Multiagent Systems, pp. 961–968.
* –––, 2011, “Reasoning About Social Choice Functions”, *Journal of Philosophical Logic*, 40(4): 473–498. doi:10.1007/s10992-011-9189-z
* Turrini, Paolo, 2012, “Agreements as Norms”, in Thomas Ågotnes, Jan Broersen, & Dag Elgesem (eds.), *Deontic Logic in Computer Science: 11th International Conference* (DEON 2012), Bergen, Norway, July 16–18, 2012, Berlin: Springer, 31–45. doi:10.1007/978-3-642-31570-1_3
* Wooldridge, Michael, & Dunne, P. E., 2004, “On the computational complexity of qualitative coalitional games”, *Artificial Intelligence*, 158(1): 27–73.
* Wooldridge, Michael, Ulle Endriss, Sarit Kraus, and Jérôme Lang, 2013, “Incentive Engineering for Boolean Games”, *Artificial Intelligence*, 195: 418–439. doi:10.1016/j.artint.2012.11.003

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-power-games). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-power-games/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-power-games&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/logic-power-games/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* Apt, Krzysztof, 2009, “[Cooperative Games](http://homepages.cwi.nl/~apt/coop/10.pdf)”, Course Notes, Centrum Wiskunde & Informatica, Amsterdam.
* [Logic in Action](http://www.logicinaction.org/)

## Related Entries

[decision theory](https://plato.stanford.edu/entries/decision-theory/) | [game theory: epistemic foundations of](https://plato.stanford.edu/entries/epistemic-game/) | [logic: and games](https://plato.stanford.edu/entries/logic-games/) | [logic: dynamic epistemic](https://plato.stanford.edu/entries/dynamic-epistemic/) | [logic: epistemic](https://plato.stanford.edu/entries/logic-epistemic/) | [logic: modal](https://plato.stanford.edu/entries/logic-modal/) | [preferences](https://plato.stanford.edu/entries/preferences/)

### Acknowledgments

The author wishes to thank the anonymous reviewers and Valentin Goranko for the very constructive comments on earlier versions of the manuscript.

[Copyright © 2023](https://plato.stanford.edu/info.html#c) by  
Paolo Turrini <[*p.turrini@imperial.ac.uk*](mailto:p%2eturrini%40imperial%2eac%2euk)>  
Thomas Ågotnes <[*Thomas.Agotnes@infomedia.uib.no*](mailto:Thomas%2eAgotnes%40infomedia%2euib%2eno)>
