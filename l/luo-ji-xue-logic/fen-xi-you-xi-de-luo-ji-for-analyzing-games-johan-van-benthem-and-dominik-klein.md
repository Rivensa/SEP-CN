# 分析游戏的逻辑 for analyzing games (Johan van Benthem and Dominik Klein)

*首次发表于 2017 年 6 月 14 日，实质修订于 2023 年 12 月 4 日。*

本条目讨论使用数学语言来表达和分析游戏中权力的形式属性。在本条目中讨论的数学语言将被称为逻辑，并根据其表达游戏相关概念的能力进行分类。

本条目的内容将仅限于对合作和非合作正常形式游戏中（群体的）个体的策略和偏好进行逻辑分析。它不涵盖使用博弈论研究逻辑语言以及认识概念在战略决策中的作用。它也不涵盖顺序决策制定的方面，这是广泛博弈中战略推理的典型特征。这些内容可以在相关条目逻辑和游戏、博弈论的认识基础中找到（另请参阅 van Benthem, Pacuit, & Roy 2011 和 van Benthem 2014）。

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

通常情况下，这些游戏是这样的，没有任何参与者能够独自决定最终结果，但在某些情况下，他们可以合作并就共同策略达成一致。

根据玩家的偏好、知识和能力，某些结果更有可能被选择。为了理解哪些结果更可能被选择，博弈论提出了解决方案概念，形式上是从游戏集合到每个游戏结果集合的函数，用数学术语描述玩家的理性。正如我们将在后面看到的，解决方案概念可以简洁地用简单而良好的逻辑表达。

接下来，我们将游戏描述为数学结构，强调各种关键要素（例如，形成联盟的可能性，及时做出决策的可能性等）以及最适合表达它们的语言。

## 2. 基本成分

形式上，游戏由有限的玩家集合 N={1,2,…,n}和可能无限的结果集合 W={w1,w2,…,wk,…}组成。

例 2. 在上面的例子中，玩家集合 N 为{法国，德国，意大利，比利时，荷兰，卢森堡}。如果我们考虑采用边境保护方案的问题，有两个结果：是和否，即 W={是，否}。如果我们考虑花费在边境保护方案上的百万美元问题，结果空间可能是无限的，即 W={0 百万，1 百万，2 百万，…}。甚至可以进一步细化一组结果，例如指定玩家的投票方式。在这种情况下，法国投票是是，其他人投票是否，结果是否的结果与意大利投票是是，其他人投票是否，结果是否的结果是不同的，尽管投票结果是相同的。重要的是强调的是，每组结果都伴随着对基础互动中发生的事情的描述水平。没有先验的正确或错误的描述水平，选择取决于人们对游戏属性的兴趣。

在玩家和结果之上，游戏还具有另外两种关系：

* 一个偏好关系，表示为 ⪰，描述玩家对结果的偏好；
* 一个行动关系，表示为 E，描述玩家或玩家组能够施加或排除的结果；

游戏中的一个重要关系是知识，它正式描述了玩家对游戏和对手的了解。这种关系有时会明确给出，有时则隐含在其中。本条目不会明确给出这种关系，而是将其纳入玩家理性的形式化中。

偏好关系和行动关系都收集了一组个体关系，每个玩家对应一个关系。例如，偏好关系可以分解为一组{⪰i}i∈N，描述每个个体对结果的偏好，而行动关系则收集了一组{EC}C⊆N，描述了特定一组玩家可以实现的行动。

总体而言，游戏可以被看作是一个数学结构

(N,W,⪰,E)

其中 N 是玩家的集合，通常是有限的，W 是结果的集合，⪰ 是偏好关系，E 是行动关系。

这个数学结构也被称为关系结构（Blackburn, Rijke, & Venema 2001），在某种意义上，它是所谓的模态逻辑（Blackburn et al. 2001）的集合论等价物，模态逻辑是一种适合表达关系的数学语言。关系结构将在此后用 F 表示，代表框架。

我们需要的最后一个要素，以便将关系结构和模态逻辑联系起来，是一组原子命题 Atoms 的规范，它表达了我们感兴趣的结果的相关属性。这个集合通常被认为是可数的 [1]，并且通过估值函数与结果相关联，即形式为

V:W→2Atoms

将每个结果关联到在该结果上为真的命题原子的集合。

一个元组（F，V）将被称为模型，表示为 M。

游戏结构中与个体玩家（和群体）相关的关系将在与用于表达其属性的主要模态逻辑的连接中进行形式化描述，以不同的描述和粒度级别。

下面的段落收集了解释本条目中使用的模态语言所需的背景技术概念。已经熟悉模态逻辑的读者可以跳过它。要进行更深入的探索，可以参考有关模态逻辑的相关条目。众所周知的经典教材有《模态逻辑：一种介绍》（Chellas 1980），重点是非正常模态逻辑，以及《模态逻辑》（Blackburn 等人，2001），重点是对正常模态逻辑的更数学化的处理。[2]

模态逻辑：背景概念：模态逻辑的语言是命题逻辑语言的扩展，具有一组模态运算符 □1，…，□n，…，定义在可数个原子命题 Atoms={p1，p2，…}上，通过这些原子命题构建归纳地建立的良构公式集（有关逻辑和归纳的数学处理，请参见例如 Dalen 1980）。每个模态语言 L 的良构公式 φ，以下简称为公式，使用以下语法构建：

φ::=p∣¬φ∣φ∧φ∣□iφ

其中 □i∈{□1，…，□n，…}，p∈Atoms。

这种语言的模型是一个结构 M=((W,R1,…,Rn,…),V)，由一组世界或状态或结果 W 组成；对于每个模态运算符 □i，我们在这里假设它们是所谓的邻域函数（Chellas 1980），即函数 Ri:W→22W 的可访问性关系 Ri；以及一个估值函数 V:Atoms→2W，它将每个原子命题分配给 W 的一个子集，其中每个原子命题被分配给该命题为真的世界集合。

作为一般约定，具有模态 □1，…，□n，…的多模态语言将用 Lf(□1),…,f(□n),…来表示，其中函数 f 将每个模态与其直观的简写关联起来。设 Δ 是具有模态 □1，…，□n，…的模态语言，M=((W,R1,…,Rn,…),V)是该语言的一个模型。对于配对(M,w)，其中 w∈W，公式 φ∈Δ 相对于(M,w)的满足关系根据以下真值条件定义：

M,w⊨p 当且仅当 w∈V(p)M,w⊨¬φ 当且仅当 M,w⊭φM,w⊨φ∧ψ 当且仅当 M,w⊨φ 且 M,w⊨ψM,w⊨□iφ 当且仅当 φM∈Ri(w)

其中 φM={w∈W∣M,w⊨φ}被称为 φ 的真值集或扩展。

模态语言的一个公式 φ：在模型 M 的状态 w 上成立，当且仅当 M,w⊨φ；在模型 M 中是有效的，记作 ⊨Mφ，当且仅当对于每个 w∈W，M,w⊨φ；在模型类 M 中是有效的，记作 ⊨Mφ，当且仅当对于每个 M∈M，它在 M 中都是有效的；在框架 F 中是有效的（一个没有估值函数的模型），记作 ⊨Fφ，当且仅当对于每个估值 V，我们有 ⊨(F,V)φ；在框架类 F 中是有效的，记作 ⊨Fφ，当且仅当它在每个 F∈F 中都是有效的。

我们可以将模态逻辑视为在给定模型类 M（框架 F）中有效的公式集合 ΔM(ΔF)。对于一个公式集 Σ，我们写作 M,w⊨Σ 来表示对于所有 σ∈Σ，M,w⊨σ。我们说在模型类 M 中，一组公式（全局地）语义蕴含着一个公式 φ，记作 Σ⊨Mφ，如果对于每个 M∈M，我们有 ⊨MΣ 蕴含 ⊨Mφ。当 F 是一个框架类时，Σ⊨Fϕ 表示 Σ⊨Mϕ，其中 M 是基于框架 F 的模型集合。

 一条模态规则

φ1,…,φnψ

在模型类 M 中是正确的，如果 φ1,…,φn⊨Mψ。

请回忆，根据 Chellas（1980）的说法，如果模态逻辑 Δ 在等价规则下是封闭的，则称其为经典的，即对于语言中的每个 □，我们有：

φ↔ψ□φ↔□ψ

如果它是经典的，并且在单调性规则下也是封闭的，则称其为单调的，即对于语言中的每个 □，我们有：

φ→ψ□φ→□ψ

如果它是单调的，它被称为正常；如果它在概括规则下是封闭的，并且包含 K 公理，即对于每个 □，我们有

φ□φ

并且 Δ 包含所有实例 □(φ→ψ)→(□φ→□ψ)。

当 Ri 是一个主过滤器 [3] 时，我们说 □i 是正常的。在这种情况下，Ri 可以等价地表示为形式 Ri:W→2W 的关系，然后我们有 M,w⊨□iϕ 当且仅当对于所有满足 wRiv 的 v∈W，M,v⊨ϕ。正常的模态逻辑可以在形式为 M=((W,R′1,…,R′n,…),V)的结构中进行解释，其中每个 R′i 都是一个主过滤器。

### 2.1 偏好

回想一下关系结构（N，W，⪰，E），并考虑关系 ⪰。这个关系简洁地表示了一个家庭{⪰i}i∈N，其中每个索引都有一个个体偏好关系。

形式上，对于玩家 i 的偏好是一个关系

⪰i⊆W×W

这个想法是，如果两个结果 w 和 w'满足(w,w')∈⪰i，那么玩家 i 认为结果 w 至少和结果 w'一样好。事实上，(w,w')∈⪰i 将被简写为 w⪰iw'。它的逆关系是关系 ⪯i，当 w'⪰iw 时，它成立。它的严格对应关系是关系 ≻i，当 w⪰iw'且不成立 w'⪰iw 时，它成立。此外，w∼iw'表示 w⪰iw'且 w'⪰iw 的事实，意味着 i 对 w 和 w'之间无所谓。

例子 3. 让我们回到我们的主要例子。通常，国家对决策结果有偏好，例如，意大利认为我们应该在该计划上花费 500 万到 1000 万欧元，德国认为我们应该花费 100 万到 200 万欧元，比利时 500 万到 600 万欧元，卢森堡、荷兰和法国恰好 500 万欧元。这意味着，例如，意大利的偏好关系是这样的：当 5M≤w≤10M 且 w′>10M 或 0≤w′<5M 时，w≻Italyw′。那么其他所有结果呢？在最简单的情况下，意大利对它们是无所谓的。所以 w∼Italyw′，否则。然而，我们也可以假设更复杂的偏好。例如，意大利希望在他们的预算范围内尽可能多地花钱。在这种情况下，偏好关系是：当 5M≤w≤10M 且 w′> 10M 或 0≤w′<5M 时，w≻Italyw′；当 5M≤w′<w≤10M 时，w≻Italyw′；否则，w∼Italyw′。并不是所有的投票结果都会达成一致。为了技术目的，我们定义一个辅助结果 w∗，解释为不达成任何共识的结果。我们假设任何一致都比不一致对每个玩家都更好，即对于每个 i∈N，当 w′=w∗ 且 w≠w∗ 时，w≻iw′。

这些关系的属性可以通过模态逻辑来表达。为此，我们引入相应关系的模态运算符 ◊⪯i、◊≺i 和 ◊∼i，并且我们可以将关系结构视为一个解释了 ◊⪯i 等的模态逻辑框架。

在基于这样一个框架的模型 M 中的解释，对于 R∈{⪯,≺,∼}，如下所示（注意这些模态性是正常的）：

如果且仅当存在 w'使得 wRiw′时，M,w⊨◊Riφ，则 M,w′⊨φ。

问题中的关系通常伴随着额外的属性。例如，⪯i 通常被认为满足以下条件：

* 自反性：即，对于 ∀w∈W，i∈N，我们有：w⪯iw；
* 传递性：即，对于 ∀w1，w2，w3∈W，i∈N，我们有：(w1⪯iw2 and w2⪯iw3) 意味着 w1⪯iw3。
* 连通性：即 ∀w1,w2∈W,i∈N，我们有：要么 w1⪯1w2，要么 w2⪯iw1。

前两个属性可以通过以下公理和有效性来描述。

**命题 1.**  ⊨Fφ→◊⪯iφ 当且仅当 ⪯i 是自反的 ⊨F◊⪯i◊⪯iφ→◊⪯iφ 当且仅当 ⪯i 是传递的。

然而，对于连通性来说情况并非如此，因为像这样的模态语言只能谈论关系的局部属性（Blackburn 等人，2001 年）。

要描述连通性，我们需要引入一种特殊类型的运算符：全域（或全局）模态（Goranko 和 Passy，1992 年）。这种模态表达了模型 M 的域 W 中所有状态的属性，并且其解释如下。

如果且仅当对于所有的 w'∈W，M,w⊨Aφ，则 M,w′⊨φ。

公式 ¬A¬φ 将被缩写为 Eφ。符号 E 是 A 的存在性对偶，并且它表示在模型中某个状态下某个公式成立。通过全局模态，我们确实增加了表达能力（如 Goranko＆Passy 1992 所示，同时也有进一步的成本和收益），因此我们可以通过在一个世界中表达真实性来表达模型中的有效性，这可以看出当且仅当 ⊨Mφ 时， M,w⊨Aφ 成立。

回想一下，如果对于所有 x,y∈W ，关系 R 是三歧的，那么就有 xRy,yRx 或 y=x。我们可以使用偏好和全局模态的组合来获得以下框架对应关系。

命题 2. 设 F 是一个框架。我们有以下结论：

⊨F(φ∧□⪯iψ)→A(ψ∨φ∨◊⪯iφ) 当且仅当 ⪯i 是三分的

作为替代，可能更直观的公式是，对于原子命题 p,q：

Ep∧Eq→E(p∧q)∨E(p∧◊⪯iq)∨E(q∧◊⪯ip)

三分法、传递性和自反性的 ⪯i 等价于关系是弱线性顺序，从而是连通的。

严格偏好关系 ≺i 可以用 ⪯i 来定义。但是 ≺i 满足以下性质：

* 非自反性：即 ∀w∈W，i∈N，我们有：不成立 w≺iw；

在基本模态逻辑中，无法定义不可反身性（Blackburn 等，2001）。然而，如果原子命题足够强大，足以区分每个结果，则可以定义不可反身性。例如，让 wk 是一个标识世界 wk 的变量。我们有以下内容。

**命题 3.**  ⊨Fwk→¬◊≺iwk 当且仅当 ≺i 是不可反身的

最后，不可区分关系 ∼ 满足反身性、传递性和对称性的属性。虽然反身性和传递性与之前的模态类似地定义，但对称性定义如下。

* 对称性：即 ∀w1,w2∈W,i∈N，我们有：w1∼iw2 意味着 w2∼iw1。

虽然第一和第二个公理与 ⪯i 的公理相似，但对称性的特征如下所示

**命题 4.**  如果且仅如果 ∼i 是对称的，那么 ⊨F(ψ→□∼i◊∼iψ)。

上述三个属性共同表明，每个 ∼i 在数学上都是一个等价关系，即一个关系，满足以下条件：

⋃w∈W{[w] ∣w′∈ [w] 每当 w∼iw′}

是 W 的一个划分。该划分的每个元素都是玩家 i 的无差别类，即他或她对结果无所谓的一组结果。

等价关系的逻辑，如 ∼i，也被称为 S5 系统。

偏好和效用：由于在博弈论中的广泛应用，一类重要的偏好关系是与数值或效用函数相对应的关系。

效用函数是一个函数。

ui:W→R

将结果映射到实数，表示玩家对某个状态的价值有多高。

实用函数自然地引导出偏好关系，如下所示。

定义 5. 设 u 为效用函数。如果满足以下条件，我们称 ⪰∗i 对应于 u：

当且仅当 ui(w)≥ui(w′)，w⪰∗iw′

注意每个有限结果集上的弱线性序列都对应于某个效用函数。

我们在偏好和决策理论的相关条目中提到，对于偏好在哲学和决策理论中的作用，可以进行更详细的分析。

### 2.2 选择

游戏也是对玩家在个人或联盟内可以实现的描述。为了形式化这一点，我们使用效果函数，这是一个抽象的权力模型，用于研究委员会中的投票策略（Moulin＆Peleg 1982）。

一个效用函数（Moulin＆Peleg 1982）是一个函数

 E：2N→22W

将每个玩家组关联到一组结果集的集合。

这个想法是，每当 X∈E(C)成立时，联盟 C 能够决定游戏结果位于集合 X 内，并且能够排除集合 W∖X 最终被选择的可能性。换句话说，X 在联盟 C 的掌控范围内。

游戏的有效性函数在超集下是封闭的，即我们有 X∈E(C)和 X⊆Y⊆W 蕴含着 Y∈E(C)。换句话说，如果 X 在联盟 C 的掌控范围内，那么 X 的每个超集也是如此。由此可见，如果某个联盟的有效性函数不为空，则它总是包含所有结果的集合。
对于 X⊆2W，我们用 X+表示其超集闭包。

例子 4. 回到主要的例子，考虑每个个体国家的力量。由于游戏的规则，没有一个国家能够独自排除任何结果。

通过使用效用函数：对于每个 i∈N，我们有 E({i})={W}。

然而，对于不够大的联盟也是如此。例如，考虑在荷兰、比利时和卢森堡之间可以形成的至少包含两个国家的所有联盟。

E({卢森堡，比利时})=E({卢森堡，荷兰})=E({比利时，荷兰})=E({卢森堡，比利时，荷兰})={W}。

因为它们的总权重最多为 5 票，它们本身无法确定或排除任何可能的协议。实际上，对于委员会提出的行动，每个投票权重不至少为 12 的联盟 C 都具有相同的有效性函数 E(C)={W}。

对于其他联盟，情况是不同的。例如，考虑由法国，德国和意大利组成的联盟，它们的投票权重总共为 12。对于它们，我们有：

E({法国，德国，意大利})={{w}∣w∈W}+

这意味着这三个成员国可以独立决定投票结果。对于每个投票权重为 12 或更高的联盟都是如此。

那么对于委员会未提出的行动呢？对于它们，让我们使用一个不同的效力函数，我们将其标记为 E∗。

在这种情况下，获胜的联盟必须至少由四个成员组成。

因此，E∗({法国，德国，意大利})={W}，而 E∗({法国，德国，比利时，荷兰})={{w}∣w∈W}+。

一般而言，当|C|≥4 时，E(C)=E∗(C)成立。由于投票游戏的特性，当|C|≤2 时，我们也有 E(C)=E∗(C)。差异在于大小为 3 的联盟：使用 E∗，它们永远无法获得超过{W}的结果，而使用 E，如果它们的投票权至少为 12，它们可以实现{{w}∣w∈W}+。请注意，卢森堡在委员会提出的法案中是无关紧要的，即 E(C)=E(C∪ 卢森堡)。而对于其他法案，我们已经观察到这种情况不成立。

有效性函数的属性可以用模态逻辑来表达。为了做到这一点，重要的是要观察到，动态有效性函数，本质上是模型中每个状态的有效性函数，对应于关系结构中的（非正常的）关系。因此，有效性函数所做的就是引导一种特殊类型的邻域结构，我们称之为联盟模型。

定义 6 [联盟模型]。联盟模型是一个三元组(W,E,V)，其中：

* W 是一个非空状态集合；
* E:W⟶(2N⟶22W) 是一个动态效能函数；
* V:W⟶2 原子 是一个估值函数。

联盟框架是一个没有估值函数的模型。联盟模型实际上是伪装成关系博弈结构的。正如读者所注意到的，动态效能函数允许每个状态在联盟之间可能具有不同的权力分配。这在博弈中处理权力是严格来说无关紧要的（第 3 节），在那里与结果相关的效能函数可以在模型中的任何地方都被视为等价，但该模型足够一般，可以处理广泛和重复的互动，其中互动的顺序结构被明确定义。我们通常将 E(w)(C)缩写为 Ew(C)，甚至在上下文清楚的情况下缩写为 E(C)。

用于讨论联盟模型的语言是联盟逻辑（Pauly 2001），一种非正常的模态逻辑，用于表达玩家团体的选择。联盟逻辑是命题逻辑的扩展，具有形式为 [C] 的|2N|个模态，每个模态都与一个联盟有关。

对于形式为 [C] φ 的公式，相对于一对 M,w，满足关系定义如下：

当且仅当 φM∈Ew(C)，M,w⊨ [C] φ。

 在这里，φM={w∈W∣M,w⊨φ}。

直观地说，φM∈Ew(C)意味着联盟 C 能够实现属性 φ。

由于闭包在超集下，或者说结果单调性被认为是所有有效性函数的属性，因此单调性规则在联盟逻辑中是有效的，因此它是一种单调的模态逻辑（Hansen 2003）。

对于每个 C⊆N，单调性规则采用以下形式：

φ→ψ [C] φ→[C] ψ

直观上讲，如果 C 能够实现 φ，并且我们有 φ 蕴含 ψ，那么 C 也能够实现 ψ。

权力的数学属性 除了结果单调性之外，还有许多其他属性被认为是对游戏中的联盟力量进行建模所必需的。例如，一个有效性函数通常具有以下属性：

* 活性：即，对于每个 C⊆N，∅∉E(C)；
* 安全性：即，对于每个 C⊆N，W∈E(C)；
* 规律性：即，对于每个 C⊆N，X∈E(C)意味着 ¯¯¯¯¯X∉E(¯¯¯¯¯C)，X⊆W；
* N-最大性：即，¯¯¯¯¯X∈E(∅)意味着 X∈E(N)且 X⊆W；
* 超加性：即，对于每个 C，D⊆N，C∩D=∅，X,Y⊆W，X∈E(C)且 Y∈E(D)意味着 X∩Y∈E(C∪D)；
* 联盟单调性：即，对于每个 C⊆D⊆N，X∈E(C)意味着 X∈E(D)，X⊆W；
* 良基性：即，对于每个 X⊆W，X∈E(N)意味着存在 x∈X，使得{x}∈E(N)。

如果一个效用函数具有活性、安全性、N-最大性和超添加性，则称其为可玩的（Pauly 2001）。如果一个效用函数可玩且良基，则称其为真正可玩的（Goranko, Jamroga, & Turrini 2013）。观察到，如果 W 是有限的，则一个效用函数可玩当且仅当它是真正可玩的（Goranko et al. 2013）。

真正的可玩性是游戏有效性函数的基本属性，并将一次性联盟游戏与一次性非合作游戏联系起来，这一点以后将会清楚。

例 5. 我们工作示例的有效性函数都是真正可玩的。

在邻域结构中，集合论和逻辑属性之间的关系通常是直接的，并且类框架和邻域函数之间的标准对应结果（Chellas 1980）可以自动用于联盟逻辑。

游戏逻辑实际上足够表达所有迄今为止提到的约束，除了最后一个。

命题 7. 设 F=(W,E)为一个博弈框架，C，C′，C′′为联盟，使得 C∩C′=∅ 且 C⊆C′′。以下结果成立：

* 若且仅若 E 是正则的，⊨F [C] φ→¬ [¯¯¯¯C] ¬φ。
* ⊨F [C] ⊤ 当且仅当 E 具有安全性；
* ⊨F [C] φ→[C′′] φ 当且仅当 E 是联盟单调的；
* ⊨F¬ [C] ⊥ 当且仅当 E 具有活力；
* ⊨F¬ [∅] ¬φ→[N] φ 当且仅当 E 是 N-最大的；
* ⊨F [C′] φ∧ [C] ψ→ C′∪C 当且仅当 E 是超加性的；
* φ→ψ⊨F [C] φ→[C] ψ 当且仅当 E 是结果单调的。

实际上，上述公理和推导规则除了命题逻辑外，还对具有可玩效能函数的所有模型类具有完备和可靠性。有关证明，请参阅 Pauly 2001 年的论文。

对应结果使我们能够通过模态手段区分出许多类框架。然而，模态运算符的表达能力严重限制了语言识别结构类的能力。在这个意义上，读者应该注意到可玩效能框架和真正可玩效能框架的逻辑都具有 ⊨F [∅] ⊤ 的事实。然而，这个命题的解释是对于每个 w∈W，{W}∈Ew(∅)，但这并不足以在两个不同的效能函数类别中对 Ew(∅)进行形式上的区分。

沿着这些线路，以下结果告诉我们，联盟逻辑也足够强大，可以推理真正可玩效能函数（或者，如果您愿意，无法区分）。

定理 8.（Goranko 等人，2013 年）设 P 为可玩帧的类别，P∗ 为真正可玩的类别。那么，对于每个联盟逻辑公式 φ，

若且仅若 ⊨Pφ，则 ⊨P∗φ。

这是因为可玩联盟逻辑具有有限模型性质（Pauly，2001 年），在有限模型中，可玩有效性函数是真正可玩的。[5]

正如前面所指出的，本条目仅涉及知识如何隐含在游戏结构中，而不深入研究理性游戏的认识前提。与之相关的条目专注于认识逻辑、动态认识逻辑，尤其是认识博弈论，深入探讨了知识在决策中的作用。关于以信息为重点的游戏模态逻辑的研究，请参考 Hoek & Pauly 2006。

## 3. 分析权力

本节讨论的是个体或群体在独立且同时进行选择的游戏，强调了从时间演化中抽象出来的交互方式。它特别关注玩家选择和偏好之间的关系，提到了知识的作用，最重要的是它涉及如何用逻辑语言表达解决概念。

该部分首先描述了合作游戏的一般设置，然后考虑了更为受限且可能更为知名的非合作游戏类别。

### 3.1 合作游戏及其逻辑

在形式为（N，W，⪰，E）的关系结构中给出的游戏描述并不足以理解最终将选择哪个确切的结果。为此，我们需要一个解决方案概念，即将游戏与该游戏的一组结果相关联的映射（Abdou＆Keiding 1991）。在这里，我们考虑合作或联盟游戏的一般设置，其中 E：W→（2N→22W）是一个（不一定可玩的）动态有效性函数（严格来说，动态有效性函数将一个联盟游戏分配给每个状态/结果）。

为联盟游戏引入了许多解决方案概念（例如，参见 Osborne＆Rubinstein 1994 和 Apt 2009（其他互联网资源））。对于目前的目的，我们只讨论可能是最为人所知的：核心。核心是一组稳定的结果，即没有联盟存在其成员既能够又愿意偏离该结果。它可以被看作是没有有效反对意见的结果集（Abdou＆Keiding 1991）。

形式上，给定一个关系结构 F =（N，W，⪰，E），如果不存在联盟 C 和结果集 X⊆W，满足以下两个条件之一，则结果 w∈W 被认为是稳定的（在 v 中）：

1. X∈Ev（C）
2. y∈X 且 i∈C 意味着 y≻iw

换句话说，如果没有一组个体能够实现他们都严格偏好的替代方案，则结果是稳定的。

核心是所有稳定结果的集合。

例 6. 考虑结果 1M，这是德国认为可接受的唯一结果。正如已经观察到的那样，德国的有效性函数为 E({德国})={W}，因此单独来看，他们无法将自己的偏好转化为结果。然而，与其他国家一起，他们可以这样做。假设他们的盟友是比利时、法国和荷兰。那么 1M 是一个好的结果吗？如果我们看一下联盟中其他玩家的偏好，即比利时、法国和荷兰，我们会观察到以下情况。比利时更希望在 4M 和 5M 之间的结果，法国和荷兰则完全希望 5M。这些国家可以聚在一起选择 5M，这是他们可以接受的结果。然而，{比利时、法国、荷兰}的有效性函数为 E({比利时、法国、荷兰})={W}，这意味着这三个国家不足以通过 5M 法案。但是由比利时、法国、意大利和荷兰组成的联盟可以。此外，请注意，5M 是意大利首选的结果之一。实际上，5M 是游戏的唯一稳定结果：没有一个联盟愿意并且能够偏离它。

模态逻辑可以用来表示核心，其中 Ew(C)解释为 [C] 与之前一样。首先考虑公式

p→⋁C⊆N [C](%E2%8B%80i%E2%88%88C%E2%97%8A%E2%89%BBip)

这意味着如果 p 为真，则某个联盟的成员可以改善某个 p 世界，这似乎不是用逻辑来表达稳定性的正确公式。然而，我们可以证明以下结果，这利用了公式与特定类别的框架之间的对应关系。

让 E 是一个（结果单调）有效性函数，⪰i 是一个弱线性顺序。那么：

 （F，V'），w ⊨ p→⋁C⊆N C

对于每个 V'，如果且仅当存在一个 C⊆N 和 X∈Ew(C)，对于 C 中的每个 i，x∈X，我们有 x≻iw，则在 w 处成立。

因此，如果对于每个估值，该公式在 w 处成立，那么 w 不属于核心。显然，如果该公式在某个结果和某个估值处为假，则意味着该结果属于核心。

注意，由于效果函数是结果单调的，如果我们有 X∈Ew(C)且

X⊆(⋀i∈C◊≻ip)(F,V′),

 那么

(⋀i∈C◊≻ip)(F,V′)∈Ew(C).

还要注意上面的结果允许 ∅=(⋀i∈C◊≻ip)M∈Ew(C)的情况，

 这可能是违反直觉的。要求 E 具有活力可以解决这个问题。

which might be counterintuitive. Requiring E to have liveness takes care of this.

注意我们如何不得不对估值集合进行普遍量化。如果没有这种明确的量化，该公式只适用于一个特定的模型，这将不是一个合适的解决方案。相反，如果我们只关心是否存在某个稳定的结果，或者相反，核心是否为空，那么要求上述公式成立就足够了。这意味着没有任何结果是稳定的，即核心是空的。

命题 10. 设 F 是一个具有 Ew=Ev 的框架，其中 w,v∈W。我们有

⊨Fp→⋁C⊆N [C](%E2%8B%80i%E2%88%88C%E2%97%8A%E2%89%BBip)

当且仅当 F 中没有结果属于核心时。

再次，活力将处理其中的平凡情况，即

 (⋀i∈C◊≻ip)(F,V)=∅。

一种替代方法是用语言中的名称（或者在混合逻辑的语言中，一个名词）来标识每个结果。然后我们有以下内容。

命题 11. 让 wk 为一个原子命题，在结果 wk 上为真且仅在结果 wk 上为真。

 （F,V），wk⊨wk→⋁C⊆N C

当且仅当 wk 不属于核心时。

另一种选择是为集体权力设定原子（Ågotnes，van der Hoek 和 Wooldridge 2009）：（F，V），w⊨pC 当且仅当 w∈Ew（C）。然后：

命题 12. 让 wk 为原子命题，在结果 wk 上为真，且仅在结果 wk 上为真。

((F,V),w⊨⋁C⊆N⋄≻pC

当且仅当 w 不属于 Ew 中的核心时。

Ew 的核心为空可以进一步用第 2.1 节中的全称模态 A 来表示：(F,V),w⊨A(⋁C⊆N⋄≻pC)。

因此，根据我们感兴趣的属性不同，基本模态逻辑的不同扩展与不同形式的有效性（在世界、模型或框架上）结合起来，最适合表达它们。

### 3.2 非合作游戏及其逻辑

非合作游戏是个体而不是联盟所能实现的表达，以及他们的偏好是什么。

形式上，一个战略游戏形式是一个元组

(N,W,{Σi}i∈N,o)

其中 N 是一组有限的玩家，W 是一组结果，{Σi}i∈N 是一组策略，每个玩家 i 都有一个策略，o:∏i∈NΣi→W 是一个结果函数，将一组策略关联到一个结果。

一个非合作游戏是一个元组 (S,{⪰i}i∈N)，其中 S 是一个战略游戏形式，{⪰i}i∈N 是每个玩家 i 的偏好关系的集合。

例 7. 如果我们将我们之前的例子中的国家视为个体玩家，将他们的投票视为个体策略，我们可以将罗马条约游戏建模为一个非合作游戏，其中每个个体可以投票决定用于边境保护的金额，偏好如上所述。

结果函数将负责将每个个体玩家的投票与集体决策的最终结果关联起来，例如，选择由至少 12 个国家投票权投票的结果，或者如果没有达成共识则不做决定。

 例如：

* 法国投票 0M
* 比利时投票 2M
* 意大利投票 10M
* 德国投票 0M
* 荷兰投票 0M
* 卢森堡投票 0M

这一轮结果没有决定，因为没有任何结果收集到至少 12 的投票权重。

然而，假设第二轮是这样的，除了比利时之外的每个人都坚持自己的投票，并假设比利时改变投票为 0M。现在 0M 的总和为 13，这意味着它被选为最终决定。

从我们的例子的统一处理来看，非合作游戏和合作游戏之间似乎存在着关系。这种关系可以被形式化地指定。

让我们首先考虑在游戏中一组玩家可以做什么。为此，我们定义 α-效用函数，这是对游戏中联盟策略的数学描述，描述了它们可以强制实现的结果集。

定义 12. [α-效用函数] 设 S 为非合作游戏。我们定义 S 的 α-效用函数为 EαS(C)，其中 ¯¯¯¯C 是 C 的补集：

EαS(C)={X ∣ 存在 σC，使得对于所有的 σ'¯¯¯¯C，我们有 o(σC,σ'¯¯¯¯C)∈X}

直观上，S 的 α-效用函数收集了每个玩家组的结果集，他们可以通过固定自己的策略来实现，无论对手如何玩。

以下结果显示了策略和效用函数之间的关系。

定理 13（Goranko 等人，2013 年）。如果一个效用函数是真正可玩的，那么它必须是某个非合作游戏的 α-效用函数。

这是 Peleg 1998 年关于有限游戏结果的推广，从 Pauly 2001 年首次定义的非合作游戏模型开始。简而言之，这些结果意味着以下内容。

命题 14. 设 F 是一个关系游戏结构。对于每个 w∈W，当且仅当以下公式在 F 中对于不相交的 C 和 C'成立时，Ew 是某个非合作游戏的 α-效用函数。

* φ→ψ⊨F [C] φ→[C] ψ
* ⊨F [C] ⊤
* ⊨F¬ [C] ⊥
* ⊨F¬ [∅] φ→[N] φ
* ⊨F [C′] φ∧ [C] ψ→[C′∪C](%CF%86%E2%88%A7%CF%88)

以与合作游戏相同的方式，我们可以问自己在战略情境中一个结果是否稳定或合理。

纳什均衡和可定义性 分析非合作游戏的主要解决概念是纳什均衡。非正式地说，纳什均衡是一组策略，每个玩家都有一个策略，使得没有玩家有兴趣改变自己的策略，只要其他玩家坚持他们的策略。形式上，策略配置 σ 是一个（纯策略）纳什均衡，如果对于所有玩家 i∈N 和所有 σ′i∈Σi，我们有

o(σi,σ−i)⪰io(σ′i,σ−i)

例 8.考虑以下投票

* 法国投票 5M
* 比利时投票 5M
* 意大利投票 10M
* 德国投票 1M
* 荷兰投票 5M
* 卢森堡投票 5M

在这个游戏中，没有关于任何预算的共识。情况可能看起来像是一种僵局，因为每个人都根据自己的偏好投票。然而，结果是不一致的，没有任何玩家喜欢任何协议。玩家们能够达成一致的唯一方法是意大利改变他们的投票为 5M。如果这种情况发生，5M 将成为结果。

注意，修改后的游戏，意大利投票 5M，是纳什均衡。

现在考虑上述游戏的修改，意大利和荷兰投票 10M，而其他人坚持他们的投票。令人惊讶的是，尽管存在不一致，这也是纳什均衡，因为没有任何玩家能够同时达成某种协议，尽管他们愿意这样做。

如何用逻辑表达纳什均衡？回想一下公式

p→⋁C⊆N [C](%E2%8B%80i%E2%88%88C%E2%97%8A%E2%89%BBip)

在一个框架 F 中成立，当且仅当核心为空，并且混合逻辑扩展可以告诉我们特定结果是否属于核心。如果 F 基于一个真正可玩的效用函数，我们已经有了一个非合作形式的博弈版本的核心：一个结果，使得没有联盟能够并愿意偏离，而不考虑其他人的行动。然而，纳什均衡固定了一组策略，使得没有玩家能够并愿意偏离。换句话说，它要求对于给定的策略组合，每个玩家都有最佳反应的概念。

形式主义，如联盟逻辑，过于薄弱，无法表达纳什均衡。然而，它们可以表达某些效用函数允许纳什均衡可能性的事实。这就是 Hansen＆Pauly 2002 年所称的纳什一致联盟逻辑。事实上，纳什均衡在基本模态逻辑中是不可定义的（van Benthem 等人，2011 年），但可以通过一个既涉及偏好关系又涉及选择关系的模态来实现（van Benthem 等人，2011 年）（有关选择关系，请参见下面的第 3.2.2 节）。

如果且仅当 w（≈i∩≻i）w'蕴含 w⊨⟨≈i∩≻i⟩φ，则（F，V），w⊨⟨≈i∩≻i⟩φ

然后，对于 i 来说，最佳反应被定义为 ⟨≈i∩≻i⟩⊤，因为没有同时可实现和可取代 i 的替代方案。或者，语言中提及策略配置文件的混合逻辑可以提供解决方案，类似于核心的情况。

#### 3.2.1 注射游戏和带交集的 PDL

上述给出的非合作游戏的一般定义允许存在两个不同的策略配置导致相同的结果，即 o(σ)=o(σ′)对于 σ≠σ′，其中结果函数不是注射的。然而，在博弈论中，注射性往往是隐含或明确假设的。实际上，结果经常与策略配置等同。

因此，当我们将非合作游戏限制为注射性时，自然而然会产生一个问题，即联盟逻辑会发生什么变化。答案是，首先，变化不大：联盟逻辑的语言无法区分注射性和非注射性游戏（Goranko 等人，2006 年）。但是，第二，有效性函数的类别发生了变化：并非所有真正可玩的有效性函数都是注射游戏的 α-有效性函数。

回想一下效用函数的良基性质：如果 X∈E(N)，那么存在 x∈X 使得{x}∈E(N)。事实上，这等价于（Goranko 等人，2013 年）E(∅)具有完全非单调核心的性质。非单调核心 Enc(C)是 E(C)的最小元素：Enc(C)={X∈E(C):¬∃Y(Y∈E(C)且 Y⊂X)}。当且仅当对于每个 X∈E(C)，存在 Y∈Enc(C)使得 Y⊆X 时，非单调核心是完全的。虽然真实可玩性意味着空联盟的非单调核心是完全的，但对于任意联盟来说并非如此。

然而，对于单射游戏来说是成立的：除了真实可玩性属性之外，单射游戏的 α-效用函数对于所有联盟都具有完全非单调核心。此外，非单调核心具有一些结构性质。更详细地说，我们说效用函数 E 是可单射玩的（Ågotnes 和 Alechina，2015 年），如果它是真实可玩的，并且对于所有的 C，i，j，X，Y 具有以下附加属性：

* E(C)具有完全非单调核心；
* Enc(C)={⋂i∈CXi:Xi∈Enc({i})} 当 C≠∅;
* 若 X,Y∈Enc({i}) 且 X≠Y，则 X∩Y=∅;
* 若 X∈Enc(j) 且 x∈X，则 ∃Y∈Enc(i)，x∈Y.

由其非单调核心完全决定了 E(C)。

定理 15.（Ågotnes 和 Alechina 2015）一个效用函数是可注入可玩的，当且仅当它是某个可注入的非合作游戏的 α-效用函数。

交集在游戏中的联盟效用中起着关键作用：直观地说，一个联盟的力量是联盟成员个体力量的交集。然后，根据 van Benthem 2012 的自然想法是，联盟力量可以通过使用交集模态来表达。这确实是这样的，在以下准确意义上（Ågotnes 和 Alechina 2015）：从联盟逻辑到命题动态逻辑与交集（Gargov 等人 1988）存在一个保持可满足性的翻译。这种翻译依赖于这样一个事实，即对于每个非注入游戏，存在一个（联盟逻辑）等价的可注入游戏。

#### 3.2.2 非单调行动逻辑

一些逻辑学利用了与非合作游戏相对应的那些关系结构的更紧凑的表示形式。

与其使用效果函数，每个玩家 i 都与一个等价关系 ≈i⊆W×W 相关联，其诱导的分割表示他或她可以执行的选择。这些等价关系描述了一组玩家可以执行的确切选择集合，文献中将这些起源模型称为后果主义（例如，Belnap，Perloff 和 Ming 2001）。

现在定义一个效能函数 E∗，满足以下条件：

E∗(i)={[x] ∣x′∈ [x] 当且仅当 x≈ix′}+

直观上，E∗(i)收集了个体确切能够实现的事物以及它们的所有超集。

如果 E∗ 称为后果主义，则认为：

* E∗(C)={⋂i∈CXi∣ 对于某个 Xi∈E∗(i)}
* 对于每个 C≠N，都有 ∅∉E∗(C)
* E∗(N)={{x}∣x∈W}+

注意，E∗ 是一个真正可玩的效能函数。

最后一个属性是良基性，就像任意效能函数的情况一样。这不是所有变体都假设的属性，例如 Kooi＆Tamminga 2008 中的选择结构及其时间变体 STIT（Belnap 等人，2001）就不具备该属性。然而，正如 Turrini 2012 和 Tamminga 2013 所观察到的那样，良基的后果主义模型对应于非合作游戏，而效能函数 E 可以通过每个玩家的等价关系 ≈i 进行有效模拟。直观地说，E∗(i)是 i 可以在不进一步细化的情况下选择的结果集的集合。

为了推理关于后果主义模型，我们使用所谓的后果主义逻辑，即命题逻辑与形式为 [C] φ 的模态的扩展，其解释如下：

若且仅若对于所有满足 w(⋂i∈C≈i)w′的 w′，M,w′⊨φ，则 M,w⊨ [C] φ。

后果主义逻辑已经发展用于推理行动和后果，并在道义逻辑中有有趣的应用，例如 Kooi＆Tamminga 2008; Tamminga 2013; Turrini 2012。此外，它们还是后续讨论的 STIT 和战略 STIT 等战略时间逻辑的基础。命题控制逻辑（Hoek＆Wooldridge 2005; Troquard，Hoek，＆Wooldridge 2009）是其特例。

#### 3.2.3 量化和高阶协同逻辑

游戏中权力的许多有趣属性涉及对协同的量化，例如代理人 i 相对于 ϕ 是一个弱否决者（Wooldridge 和 Dunne 2004），意味着任何能够实施 ϕ 的协同必须包括 i，或者在协同逻辑的某个一阶或高阶扩展中：∀C（[C] ϕ→i∈C）。量化协同逻辑（QCL）（Ågotnes 等人，2008）通过对协同进行有限形式的量化来扩展协同逻辑，而不会使得结果逻辑不可判定，或者增加可满足性问题的计算复杂性。在 QCL 中，模态内部的协同被协同谓词所取代。直观地说，[P] ϕ（⟨P⟩ϕ）意味着满足谓词 P 的任何（某些）协同都有能力实施 ϕ。作为一个例子，i 对于 ϕ 是一个弱否决者：

¬⟨¬supseteq({i})⟩ϕ

* 这并不是说任何不是{i}的超集的联盟都有能力执行 ϕ。或者说 i 是 ϕ 的独裁者：¬⟨¬supseteq({i})⟩ϕ∧ [supseteq({i})] ϕ *.*  这样的属性，实际上所有可以用 QCL 表达的属性，都可以通过使用析取和合取来量化联盟在 Coalition Logic 中表达，但是这些表达通常在代理人数量上呈指数级增长。QCL 可以简洁地表达这样的属性，实际上比 Coalition Logic 更加简洁。QCL 还可以通过 Belief-Intention-Desire (BDI) logic (Chen et al. 2014)进一步扩展，而不增加复杂性。
* 高阶 Coalition Logic (HCL) (Boella et al. 2010)将 QCL 扩展为一个单调的二阶语言，统一了描述联盟和描述其权力的语言，并显著扩展了表达能力。存在 HCL 的表达能力可计算的片段 (Doherty et al. 2011)。

#### - 3.2.4 概率和资源边界

正如我们所见，Coalition Logic 的（真正可玩的）有效性函数对应于游戏，其中所有代理的联合策略配置唯一确定结果。Coalition Logic 可以通过多种方式进行修改（Naumov 等人，2021 年），以处理随机游戏，即这样的配置仅确定可能结果的概率分布。将模态 [C] pϕ 解释为“C 可以以概率 p 强制执行 ϕ”会导致有趣且非平凡的（无效）属性，例如以下超加性的变体（C∩C′=∅）

[C] p(ϕ→ψ)→([C′] qϕ→[C∪C′] max{p,q}ψ)

不是有效的，而

[N] p+q+r(ϕ∨ψ∨σ)→[N] 2p(ϕ∨ψ)∨ [N] 2q(ψ∨σ)∨ [N] 2r(ϕ∨σ)

(其中 N 是所有代理的集合)是有效的。

作为随机转换的替代方案，可以考虑具有随机故障的游戏，从逻辑学的角度来看，这些游戏要容易处理一些（Naumov 等人，2021）。将 [C] pϕ 解释为“C 可以有一个联合策略，以确保在每个结果中 ϕ 为真，并且无论其他代理做什么，都保证不会以至少概率 p 失败”，例如，我们得到了上述提到的超加性公理的变体。

资源边界也已添加到联盟模态中，这些模态在与执行联合动作的成本相关的博弈中被解释为联盟模型（Alechina 等，2009）。在这里，[Cb] ϕ 表示 C 可以在资源边界 b 下强制 ϕ 为真，即他们可以选择一个最多花费 b 的联合动作，以确保 ϕ 为真。这些模态满足以下超加性变体（C∩D=∅，C≠∅，D≠∅）：

[Cb] ϕ∧ [Dd] ψ→[(C∪D)b+d](%CF%95%E2%88%A7%CF%88).

#### 3.2.5 条件权力和协调

从真正可玩的效能函数和联盟逻辑的观点来看，如果联盟的权力由 α-效能定义，则两个游戏是等价的。然而，Van Benthem 等人在 2019 年指出，由于单调性，具有相同 α-效能的游戏之间存在有意义的差异：对于两个不同的原因，{w,v}∈E(C)可能成立。首先，可能存在 C 的联合行动，使得其他代理也有联合行动，结果将是 w，并且其他代理还有另一个联合行动，结果将是 v；或者第二，可能只对 w 或 v 成立（在这种情况下，{w}∈E(C)或{v}∈E(C)）。Van Benthem 等人在 2019 年将第一种权力称为基本权力，并对两个代理的基本权力的效能函数特性进行了描述，并使用 Instantial Neighbourhood Logic（INL）的变体给出了一个完备的公理化，该逻辑是标准模态逻辑与邻域语义的扩展。基本权力的一个重要意义在于，它涵盖了其他玩家在给定某个联盟的选择之一的情况下可以自由选择任何状态的所有结果集。

还开发了几种扩展的联盟逻辑语言，用于推理代理和联盟之间的条件和相互关联的权力，通常结合存在量词和全称量词来进行。Goranko 和 Enqvist 在 2018 年引入了扩展的联盟运算符形式

[C](%CF%95;%CF%881,%E2%80%A6,%CF%88k)

具有直观意义的是，C 具有使 ϕ 成为真实的能力，同时使其他代理在同一时间能够实现任何目标 ψ1，…，ψk 的可能性。所得到的逻辑也可以看作是 INL 的多代理扩展。Goranko 和 Enqvist 2018 还引入了形式为 [C1▹ϕ1,…,Cn▹ϕn] 的运算符，其直观意义是联盟 C=C1∪⋯Cn 具有一个共同策略，使得对于每个 i，该共同策略在联盟 Ci 上强制执行目标 ϕi。

 具有直观意义的是，联盟 C=C1∪⋯Cn 具有一个共同策略，使得对于每个 i，该共同策略在联盟 Ci 上强制执行目标 ϕi。

with the intuitive meaning that the coalition C=C1∪⋯Cn has a joint strategy such that, for each i, the restriction of that joint strategy to coalition Ci enforces objective ϕi.

Goranko 和 Ju 2022 年指出，后一种运算符可以用来表达一种特定类型的条件权力，即 [A▹ϕ，A∪B▹ψ]，直观地说，A 具有一种共同行动，可以强制执行 ϕ，同时使 B 能够应用一种共同行动，以确保 ψ。他们还引入了两种额外的条件权力模态：

[A] α(ϕ; ⟨B⟩ψ)和 [A] β(ϕ; ⟨B⟩ψ)

其中前者表示 B∖A 有一种共同策略，如果 A 应用任何确保 ϕ 的行动，那么该共同策略（由 B∖A）同时确保 ψ，而后者表示对于 A 的任何强制执行 ϕ 的共同行动，B 存在一致的共同行动，同时强制执行 ψ。这些权力概念分别对应于 α-和 β-效力。

协调不仅是不同联盟之间的问题，也是联盟中的代理人在解释 [C] ϕ 时的问题。在联盟逻辑中，隐含地假设（就像 Schelling 1960 年所假设的那样），联盟中的代理人可以以某种方式协调他们的行动以实现结果 ϕ。Hawke 2017 年引入了联盟模态的新变体，捕捉到了更强的联盟能力概念，并放宽了关于协调的假设（在两个代理人的情况下）。与 [C] 相反，这些新的模态((C))不是单调的。

#### 3.2.6 动态联盟逻辑

受动态认知逻辑的模型更新语义的启发，联盟逻辑已经以多种方式扩展，使用动态模态来建模联盟能力的变化。Broersen、Meyer 和 Turrini 2009 年添加了形式为 [C↓ψ] ϕ 的表达式，直观地表示在 C 选择 ψ 之后，ϕ 成立。Ågotnes 和 Galimullin 2021 年添加了模态，用于添加和删除动作和能力，受到箭头更新逻辑的启发：[(ϕ,a,ψ)+] γ 直观地表示在联盟模型通过在每个 ϕ 状态中为代理人 a 添加一个新动作（无论其他代理人做什么，该动作都能保证 ψ）之后进行更新，然后 γ 成立。还有类似的模态用于删除能力。Ågotnes 和 Galimullin 2023 年通过使用启发式行动模型，扩展了联盟逻辑，添加了更一般和更具表达力的联盟行动模态。

#### 3.2.7 逻辑学基础的游戏

在许多情况下，代理人对某些命题变量具有控制权（Hoek＆Wooldridge 2005），例如他们可以负责交通流量或否决某个问题。变量也可以是共享的（Gerbrandy 2006），例如投票，其中玩家共享对一个变量的控制权，其实现由某个聚合函数（例如多数）确定（Troquard，Hoek，＆Wooldridge 2011）。这些命题控制的逻辑学指定了代理人在其有效性函数中具有的命题。例如，如果代理人 i 控制 p，则 pM 和 ¬pM 都在他或她的有效性函数中。从某种意义上说，这些模型是非常特殊类型的有效性函数，代理人控制的内容可以被视为他们可选择或可用的一种选择或策略。

命题控制的逻辑学具有 [[i]]φ 类型的模态，意味着玩家 i 具有“控制”策略，以确保无论其他代理人如何选择他们的控制策略，φ 最终成立。但它们也具有 [[C]]φ 类型的模态，意味着 C 中的玩家具有共同的控制策略，确保 φ 最终成立。因此，策略配置文件等效于估值函数，该函数为每个可用命题分配一个真值。反过来，玩家 i 的策略可以被视为部分估值函数，仅为 i 控制的命题分配一个真值。

稍微滥用符号，我们说一个估值 V 满足一个公式 φ，记作 V⊨φ，当且仅当在当前命题分配下，它使得 φ 成立。换句话说，命题控制游戏在一个单一的世界中进行，个体的分配决定了哪些命题在那个世界中为真。记 V 为所有估值的集合，记 Vi 为在 i 的控制下的部分估值，我们有以下结果。

若对于所有 i∈C，存在 V′i∈Vi，使得对于所有 k∈¯¯¯¯C，V′k∈Vk，那么(F,V)⊨ [[C]]φ。

因此，当 [[C]]φ 成立时，联盟 C 可以以某种方式进行控制策略，无论对手采取什么控制策略，最终的结果都满足 φ。

命题控制的逻辑可以扩展到基于目标的形式主义，即所谓的布尔游戏（Harrenstein，van der Hoek，Meyer 和 Witteveen 2001）：命题被分配给玩家，每个玩家控制分配给他或她的命题集合。除此之外，每个玩家还被分配了一个命题逻辑公式，该公式旨在成为他或她的目标，其实现可能不仅取决于他或她能够做出的选择。

布尔游戏在多智能体系统领域得到了广泛研究，作为在基于逻辑的环境中表示战略互动的简单而紧凑的模型（Dunne＆Hoek 2004; Dunne＆Wooldridge 2012; Dunne，Hoek，Kraus 和 Wooldridge 2008）。

在它们最一般的变体中，它们是具有命题控制的逻辑的扩展，其中每个代理被分配一个目标公式。目标公式是语言中可满足的公式，重要特征是每个代理的目标不需要在他或她的控制之下。

例如，代理人 i 可能只被分配了命题 p 的控制权，但可能有 p↔q 的目标。因此，i 的目标是否得到满足不仅取决于 i 将命题 p 设置为真，还取决于其他代理人 j 将命题 q 设置为真。另一方面，代理人 j 可能对将 q 设置为真或 ¯¯¯q 设置为真感兴趣与否。例如，他或她可能希望命题 r 为真，因此对于 q 或 ¯¯¯q 是否最终实现都不感兴趣。或者甚至可能有 ¯¯¯q 的目标。

在布尔博弈中，一些目标可以同时实现，例如代理人可能都希望 p∨¬q 为真，或者可能存在某些估值不能实现所有代理人的目标，但没有不满意的代理人能够通过改变对其控制的命题变量的分配来改善自己的处境。这种情况是布尔博弈中一种非常简单的纳什均衡形式。

因此，对于 γi 是玩家 i 的目标，vi 是玩家 i 控制的部分估值，我们称估值 v 为纳什均衡，如果对于每个 i 和每个 v′i 都有。

(vi,v−i)⊭γi 意味着(v′i,v−i)⊭γi

因此，如果 v 不满足 i 的目标，那么 i 无法做任何事情来满足它。

对布尔游戏中纳什均衡的分析显示了这些游戏与命题逻辑之间的密切对应关系：通过将布尔游戏的问题简化为命题逻辑公式的可满足性问题，检查一个结果 v 是否是布尔游戏的纳什均衡是 co-NP 完全的（Wooldridge，Endriss，Kraus 和 Lang 2013）。

另一种常见的简洁表示某些类别的游戏的方法是除了定性地表示回报之外，还对回报函数施加限制。一种结合了这两种方法的方法可以在 Das 等人的 2023 年的研究中找到，其中使用单调最小不动点逻辑来表达具有成对可分离回报函数的纯策略纳什均衡的存在。

## 4. 结论：关于正确的分析水平

回想一下最初的例子，其中一个投票游戏的结果集只能通过考虑投票的整体结果或明确描述每个国家的投票情况来描述。

在描述数学结构时，我们常常面临一个问题，即哪种语言是最合适的。有些语言能够同时表达偏好、知识和联合能力，有些只能表达其中两个，还有一些只能表达个体而不是联合体能够实现的内容。

同样，对于这个问题并没有正确答案。一切取决于我们试图建模的基本特征是什么。要在协调游戏中表达纳什均衡，并不需要基于时间逻辑的形式化。相反，如果想要表达反向归纳，那么一个不明确决策问题的顺序结构的语言可能不是正确的选择。

回到我们的例子，一些国家可能对其他国家的投票方式有偏好，这可能会影响它们的决策，改变游戏的整体均衡点。如果是这种情况，那么更丰富的语言就很重要。否则，如果我们可以安全地排除这种可能性，更简洁的语言似乎是合适的选择。


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

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-power-games). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-power-games/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-power-games&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](https://philpapers.org/sep/logic-power-games/) at [PhilPapers](https://philpapers.org/), with links to its database. |

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

