# 帕斯卡的赌注 Pascal’s wager (Alan Hájek)

*首次发表于1998年5月2日，实质性修订于2022年9月11日。*

“帕斯卡的赌注”是布莱士·帕斯卡提出的一个关于相信上帝或至少采取相信上帝的步骤的论证。这个名字有些误导性，因为在他的《思想集》的一个章节中，帕斯卡似乎提出了四个这样的论证，每个都可以称为一个“赌注”——只有第三个传统上被称为“帕斯卡的赌注”。在这个论证中，我们发现了几个重要思想的非凡交汇：神论的辩护；概率论和决策论，这里几乎是历史上第一次使用；实用主义；意志主义（信仰是意志的问题的论点）；以及无限概念的运用。

我们将从一些简要的背景介绍开始：一些历史背景，决策理论的基础知识，以及《思想集》所引发的一些解释问题。然后我们将按照文本提取出三个主要的论证。大部分文献都涉及到这些论证中的第三个，我们在这里的讨论也将主要集中在这个论证上。我们的讨论中一些更技术性和学术性的方面将被放在冗长的脚注中，对于感兴趣的读者，可以点击链接查看。所有引用都来自《思想集》的第 233 节（1910 年，特罗特翻译），这个“思想”的标题是“无限——虚无”。

 
---

## 1. 背景

将帕斯卡的论证与之前提出的各种试图证明上帝存在的“证据”进行对比是很重要的。安瑟姆的本体论论证，阿奎那的“五种方式”，笛卡尔的本体论和宇宙论论证等等，都声称能够证明上帝的存在。帕斯卡对这些试图证明有神论的努力似乎并不感兴趣：“努力……说服自己，而不是通过增加上帝的证据……”事实上，他坚持认为“我们不知道他是否存在……”。因此，帕斯卡的项目是完全不同的。他的目标是要表明我们应该相信上帝，而不是上帝存在。他试图提供相对于证据而言更多是基于谨慎的理由来相信上帝。简单来说，我们应该赌注上帝的存在，因为这是最好的赌注。Ryan 1994 在柏拉图、阿诺比乌斯、拉坦修斯等人的著作中找到了这种推理方式的前身；我们还可以将加扎利列入他的名单——参见帕拉西奥斯 1920。弗兰克林 2018 提出了 1637 年和 1638 年分别由西尔蒙德和钦林沃思提出的与帕斯卡的赌注有惊人相似之处，因此比帕斯卡早了几年。但独特之处在于帕斯卡明确地将推理形式化为决策理论。事实上，哈金 1975 将赌注描述为“决策理论的第一个被充分理解的贡献”（viii）。因此，我们应该简要回顾一些基本的决策理论知识。

在任何决策问题中，世界的状态和代理人的行为共同决定了代理人的结果。我们可以为这些结果分配效用，这些效用是代表代理人对其价值程度的数字。通常将这些数字呈现在决策表中，其中列对应于世界的各种相关状态，行对应于代理人可以执行的各种可能行动。

在不确定性下的决策中，没有给出更多信息，特别是代理人不会对世界的状态分配主观概率。尽管如此，有时理性仍然要求做出唯一的决策。例如，考虑一个在这里特别相关的案例。假设你有两种可能的行动，A1 和 A2，与 A1 相关的最差结果至少与 A2 相关的最佳结果一样好；还假设在至少一个世界状态下，A1 的结果严格优于 A2 的结果。在这种情况下，理性似乎要求你执行 A1。

例子。一个魔术师将抛硬币。你对硬币一无所知——它可能是普通硬币，可能是双面硬币，可能是双头硬币，也可能是任意程度的偏向硬币。假设在对硬币完全无知的情况下，你对硬币正面朝上的概率一无所知。假设你可以押注正面或反面；押注不需要花费任何费用，如果你押注正面，你将赢得 1（我特别喜欢押注正面）。你的可能总收益由以下决策表给出：

|  | *** 硬币正面朝上*** | *** 硬币反面朝上*** |
| -- | --------------------- | --------------------- |
| ***Bet on heads*** | 2                   | 1                   |
| ***Bet on tails*** | 0                   | 1                   |

投注正面朝上的赌注优于投注反面朝上的赌注。投注正面朝上的最差结果（支付  1）；如果硬币正面朝上，投注正面朝上的结果比投注反面朝上的结果更多（  0）。此外，显然你应该押注正面朝上。

在面临风险的决策中，决策者对世界各种状态分配主观概率。假设世界的状态与决策者的行为无关。一个被称为期望效用或给定行动的期望的价值指标可以通过一个简单的公式计算：对于每个状态，将该行动在该状态下产生的效用乘以该状态的概率；然后将这些数字相加。根据决策理论，理性要求你执行最大期望效用的行动（如果存在的话）。

例子。假设金钱的效用与美元数量成线性关系：你以其面值准确地评估金钱的价值。现在假设你知道一个公平的硬币将被抛掷，因此你将概率 1/2 分配给正面和反面。玩以下游戏需要花费一美元。如果硬币正面朝上，你将赢得  比这些相应金额少 1 美元。你应该玩吗？这是决策表：

|  | *** 硬币正面朝上*** | *** 硬币正面朝上*** |
| -- | --------------------- | --------------------- |
| ***Play*** | 2                   | –1                 |
| ***Do not play*** | 0                   | 0                   |

玩的期望值是(2 x 1/2) + (-1 x 1/2) = 1/2。这超过了不玩的期望值，即 0，所以你应该玩。

现在假设硬币正面朝上的回报减少了 1 美元，决策表变为：

|  | *** 硬币正面朝上*** | *** 硬币反面朝上*** |
| -- | --------------------- | --------------------- |
| ***Play*** | 1                   | –1                 |
| ***Do not play*** | 0                   | 0                   |

然后根据决策理论，你可以选择玩或不玩，因为无论哪种方式，你的期望值都是 0。

考虑到这些因素在帕斯卡的论证中起着至关重要的作用。必须承认，在呈现这些论证时存在着某些解释问题。帕斯卡从未完成《思想录》，而是将它们以各种大小的笔记形式固定在一起。Hacking 1972 年将“无限-虚无”描述为“两张纸，四面都写满了各个方向的手写文字，充满了涂改、更正、插入和事后思考”（24）[2]。这可能解释了为什么某些段落在解释上非常困难，正如我们将看到的那样。此外，我们用现代贝叶斯决策理论的术语来表述这些论证可能显得有些时代错误。例如，帕斯卡没有区分我们现在所称的客观概率和主观概率，尽管很明显，后者与他的论证相关。在某种程度上，“帕斯卡的赌注”现在已经有了自己的生命，我们在这里对它的呈现是完全标准的。然而，我们将紧密遵循帕斯卡的文本，尽可能支持我们对他的论证的阅读（有关帕斯卡推理的更详细分析，请参见 Golding 1994 年的另一篇详细分析，比这里的呈现更详细）。

还有一个问题是如何将无限-虚无分为不同的论证。我们将找到三个论证，每个论证都得出结论，即理性要求你为上帝下注，尽管它们在文本中交织在一起[3]。最后，关于“为上帝下注”到底意味着什么存在一些分歧-是相信上帝，还是仅仅引发信仰？我们将以讨论帕斯卡对此的意思作为结论。

## 2. 随附的论证

帕斯卡主张我们无法知道上帝是否存在，但我们必须“赌注”其中一种方式。理性无法决定我们应该倾向于哪一方，但对相关结果的考虑可以。这是第一个关键段落：

> “上帝存在，或者上帝不存在。”但我们应该倾向于哪一方呢？理性在这里无法做出决定。有一个无限的混乱将我们分开。在这无限距离的极端处正在进行一场游戏，正反面将会出现...那么你会选择哪一面呢？让我们看看。既然你必须选择，让我们看看哪个对你的利益最小。你有两样东西可以失去，真理和善良；你有两样东西可以押注，你的理性和意愿，你的知识和幸福；而你的本性有两样东西要避免，错误和痛苦。在选择一方而不是另一方时，你的理性并不会受到震惊，因为你必须必然地做出选择...但是你的幸福呢？让我们权衡一下赌注上帝存在的得失...如果你赢了，你赢得一切；如果你输了，你什么也不输。所以，毫不犹豫地赌注上帝存在。

这里已经存在一些解释上的问题，部分是因为帕斯卡似乎自相矛盾。他将“真理”视为一种你可以“失去”的东西，将“错误”视为一种“要避免”的东西。然而，他接着声称，如果你输掉了上帝存在的赌注，那么“你什么也不输”。当然，在这种情况下，你“失去了真理”，这只是说你犯了一个错误，而且既然这是一种“要避免”的东西，那么它显然是一种代价。帕斯卡相信，上帝的存在就是“真理”——但这不是他在这个论证中可以诉诸的东西。此外，不是因为“你必须必然地做出选择”，所以“在选择一方而不是另一方时，你的理性并不会受到震惊”。根据帕斯卡自己的说法，这是因为“理性在这里无法做出决定”。（如果可以的话，如果你选择与理性相反的方式，它可能会受到震惊。）

根据麦克莱恩（McClennen）1994 年的观点，帕斯卡的论证似乎最好被概括为以下决策表：

|                     | ***God exists***         | *** 上帝不存在*** |
| --------------------- | ---------- | ------------------- |
| *** 赌注为上帝***   | Gain all | Status quo        |
| *** 赌注反对上帝*** | Misery   | Status quo        |

赌注支持上帝超越了赌注反对上帝：赌注支持上帝（现状）所关联的最差结果至少与赌注反对上帝（现状）所关联的最佳结果相同；而且如果上帝存在，赌注支持上帝的结果严格优于赌注反对上帝的结果。（目前结果更好并不重要。）帕斯卡在这一点上得出结论，你应该赌注支持上帝。

在没有对上帝存在的概率分配的任何假设下，这个论证是无效的。如果你将上帝的存在概率分配为 0，作为一个严格的无神论者可能不要求你赌注支持上帝。帕斯卡直到后面的一段才明确排除了这种可能性，当他假设你对上帝的存在分配了正概率时；然而，这个论证被呈现为自成体系。他声称“[理性]在这里无法决定任何事情”可能表明帕斯卡将其视为在不确定性下的决策，这意味着你根本不对上帝的存在分配概率。如果这是一个进一步的前提，那么这个论证显然是有效的；但这个前提与他后来的假设相矛盾，即你对上帝的存在分配正概率。参见麦克莱恩对这个论证的解释作为在不确定性下的决策的阅读。

帕斯卡似乎意识到了这个论证的进一步反驳，因为他立即想象一个反对者回答道：

> “那很好。是的，我必须下赌注；但我可能下得太多。”

这种想法似乎是，如果我为上帝下赌注，而上帝并不存在，那么我确实会失去一些东西。事实上，帕斯卡自己在谈到为上帝下赌注时提到了押上一些东西，如果上帝不存在的话，这些东西可能会被失去。（我们已经提到“真实”是其中之一；帕斯卡似乎还把人的世俗生活视为另一种东西。）在这种情况下，这个表格在“上帝不存在”下呈现两种结果，似乎是错误的，我们并没有一个随附的情况。

帕斯卡在他的第二个论点中立即解决了这个问题，我们将只简要讨论一下，因为它可以被看作是主要论点的序幕。

## 3. 期望的论证

 他继续说道：

> 让我们来看看。既然获得和损失的风险是相等的，如果你只能获得两条生命而不是一条，你可能仍然会赌注。但是如果有三条生命可以获得，你将不得不玩（因为你被迫玩），当你被迫玩时，不冒险去赌注你的生命以获得三条生命，而在这个游戏中获得和损失的风险是相等的。但是有无尽的生命和幸福。

在这里理解“相等的风险”为“相等的概率”，获胜（赢得赌注）和失败（输掉赌注）的概率必须各自为 1/2。他假设“两条生命”和“三条生命”，可能会让人感到奇怪。有助于记住帕斯卡对赌博的兴趣（毕竟赌博是他研究概率的最初动机），并且在这里非常认真地采用赌博模型。事实上，赌注中充满了赌博的隐喻：“游戏”，“赌注”，“正反面”，“纸牌”，当然还有“赌注”。现在，回想一下我们对两美元和三美元赌博的预期计算。帕斯卡显然假设效用与生命数量成正比，为了上帝而赌注“一条生命”，然后类似于我们在上面的预期计算中所做的推理！这是一种热身。既然即使在奖品之一是三条生命的假设情况下，为上帝而赌注是理性所要求的，那么在实际情况下，其中一个奖品是无尽的生命（救赎），更是理性所要求的。

所以帕斯卡现在做出了两个引人注目的假设：

(1). 上帝存在的概率是 1/2。

(2). 如果上帝存在，为上帝下赌注将带来无限的回报。

莫里斯 1994 年对(1)持有同情态度，而哈金 1972 年认为它是一个“怪异的前提”（189）。为了捍卫这一点，有一种方式是通过经典概率解释，根据这种解释，所有可能性都被赋予相等的权重。这种解释在各种赌博游戏中似乎很有吸引力，因为这些游戏的设计与其结果具有证据对称性；帕斯卡甚至将上帝的存在比作抛硬币，在证据上来说是一样的。然而，除非有更多的解释，否则这种解释会产生不合理甚至矛盾的结果。（你中彩票的机会是百万分之一；但是你要么中彩票要么不中，所以这两种可能性的概率都是 1/2？！）帕斯卡对(1)的论证可能是“[理性在这里无法决定任何事情]”。（在彩票案例中，理性可以决定一些事情。）但是完全不清楚应该将完全无知建模为等概率。莫里斯想象了一个有证据支持和反对上帝存在的代理人，但这些证据是平衡的。无论如何，显然帕斯卡的听众中有人不将上帝的存在概率定为 1/2。因此，这个论证对他们没有说服力。

然而，帕斯卡意识到，由于（2）的存在，1/2 的价值实际上在论证中并没有真正的作用。这使我们进入了他的第三个，也是最重要的论证。

## 4. 从广义期望的论证：“帕斯卡的赌注”

我们继续引用。

> 但是存在着永恒的生命和幸福。既然如此，如果有无限的机会，其中只有一个是属于你的，那么你仍然有理由赌注一赢二，并且你会表现得很愚蠢，因为你被迫玩这个游戏，拒绝以一条生命对三条生命下注，在这个游戏中，如果有无限的机会，其中有一个是属于你的，那么你将会赢得无限幸福的生命。但是在这里，存在着无限幸福的生命可以获得，有一次获得的机会对应有限次失去的机会，而你下注的是有限的。这一切都被分割开来；无论无限在哪里，没有无限的失去机会对应于获得机会，没有时间犹豫，你必须全力以赴...

再次，这段话很难完全理解。帕斯卡谈论赢得两条或三条生命有点误导人。根据他自己的决策理论，你不会“通过拒绝以一条生命对三条生命下注在这个游戏中，其中有无限的机会，其中有一个是属于你的”而表现愚蠢-事实上，在这种情况下，你不应该下注超过一个无穷小的金额（一个大于 0 但小于每个正实数的金额）。相反，关键是潜在的奖品是“无限幸福的生命”。简而言之，如果上帝存在，那么为上帝下注将获得无限效用。

对于其他可能的结果，效用如何？对于“痛苦”的效用存在争议。Hacking 将其解释为“诅咒”（188），帕斯卡在后来确实提到了“地狱”作为这种情况的结果。马丁 1983 年等人将其赋予了负无穷的价值。另一方面，索贝尔 1996 年是认为这个值是有限的作者之一。这种阅读有一些文本支持：“上帝的公正必须像他的怜悯一样广大。现在对于被遗弃者的公正比对选民的怜悯要小。”至于与上帝不存在相关的结果的效用，帕斯卡告诉我们“你所押注的是有限的”。这表明无论这些值是什么，它们都是有限的。

帕斯卡的指导性见解是，无论你对上帝存在的概率是多少，只要它是非零且有限（非无穷小），期望论的论证都是成立的——“对有限次数的损失有一次获胜的机会。”[4]

帕斯卡对效用和概率的假设现在已经就位。在这一段落中的另一个里程碑时刻，他接下来提出了预期效用理论的一个表述。在赌博时，“每个玩家都押上一种确定性来获得一种不确定性，然而他押上一种有限的确定性来获得一种有限的不确定性，而不违背理性”。那么，一个玩家应该准备押多少而不违背理性呢？这是帕斯卡的答案：“……获得的不确定性与押注的确定性成比例，根据获胜和失败的机会比例……”要证明这一点确切地得出了预期效用理论的答案需要一些工作，但这项工作对于其历史重要性来说是非常值得的，并且已经包含在一个脚注中。[5]。)

现在让我们将所有这些观点汇集成一个单一的论证。我们可以将帕斯卡的赌注看作有三个前提：第一个涉及奖励的决策表，第二个涉及你应该给予上帝存在的概率，第三个是关于理性决策的格言。具体来说：

1. 要么上帝存在，要么上帝不存在，你可以为上帝打赌，也可以反对上帝打赌。相关可能结果的效用如下，其中 f1、f2 和 f3 是数值，其值未指定，只要它们是有限的即可：

|                     | ***God exists***   | *** 上帝不存在*** |
| --------------------- | ---- | ------------------- |
| *** 赌注为上帝***   | ∞ | f1                |
| *** 赌注反对上帝*** | f2 | f3                |

2. 理性要求您分配给上帝存在的概率为正（且有限）。
3. 理性要求你执行最大预期效用的行为（如果有的话）。
4. 结论 1. 理性要求你为上帝赌注。
5. 结论 2. 你应该为上帝赌注。

我们面临一个有风险的决策，对世界可能的方式分配了概率，并对结果分配了效用。特别地，我们将与救赎相关的无限效用表示为'∞'。我们假设实数线被扩展以包括元素'∞'，并且基本算术运算被扩展如下：

对于所有实数 r：∞+r=∞。
对于所有实数 r：如果 r>0，则∞×r=∞。

第一个结论似乎可以从通常的预期效用计算中得出（其中 p 是您对上帝存在的正（有限）概率）：

E(对上帝的赌注)=∞×p+f1×(1−p)=∞

也就是说，您对上帝信仰的预期效用是无限的 - 正如帕斯卡所说，“我们的命题具有无限的力量”。另一方面，您对抗上帝的赌注的预期效用是

E(赌注反对上帝)=f2×p+f3×(1−p)

这是有限的。[ 6] 根据前提 3，理性要求您执行最大预期效用的行为。因此，理性要求您为上帝下注。

现在我们来看一些对这个论证的主要反对意见。

## 5. 对帕斯卡的赌注的反对意见

### 5.1 前提 1：决策表

这里的反对意见很多。其中大部分可以很快地陈述，但我们将特别关注通常被认为是最重要的反对意见，“多神反对意见”（另请参阅脚注 7 的链接）。

1. 不同的人有不同的决策表。该论点假设相同的决策表适用于每个人。然而，也许对于不同的人来说，相关的回报是不同的。例如，根据 Mackie 1982 的建议，对于被选中的人来说，无论他们做什么，都有一个注定的无限回报，而对于其他人来说，只有有限的效用。或者，也许对于某些人来说，得救的前景比其他人更具吸引力，正如 Swinburne 1969 所指出的那样。

即使承认一个单独的 2×2 表适用于每个人，人们可能对其中的价值产生争议。这引出了接下来的两个反对意见。

2. 得救的效用不能是无限的。有人可能会争辩说，无限效用的概念本身就是可疑的—例如参见 Jeffrey 1983 和 McClennen 1994.[7]因此，反对意见继续说，无论得救的效用是什么，它必须是有限的。对于对无限概念持怀疑态度的严格有限主义者来说，他们会同意—参见 Dummett 1978 和 Wright 1987。或者也许无限效用的概念是有意义的，但是一个无限的回报只能被人类有限地欣赏到。
3. 在表格中应该有不止一个无限大。对于赌注的批评者也有人不仅不反对无限效用，而且希望在表格中看到更多的无限效用。例如，可以认为一个宽恕的上帝会赋予赌徒和反对赌徒无限的效用-Rescher 1985 是一个提出这种可能性的作者。或者可以认为，相反地，反对一个存在的上帝的赌注会导致负无限的效用。（正如我们已经注意到的，一些作者认为帕斯卡本人也是这么说的。）无论哪种方式，f2 实际上根本不是有限的，而是∞或−∞，具体情况可能是这样。也许 f1 和 f3 可以是∞或−∞。例如，假设上帝不存在，但我们无限次转世，并且我们所接收到的总效用是一个发散到无穷大或负无穷大的无限和。
4. 表格应该有更多行。也许有多种方式可以为上帝下赌注，而上帝所赐予的奖励也因此而不同。例如，上帝可能不会无限地奖励那些仅仅出于帕斯卡所给出的非常功利的原因而努力相信他的人，正如詹姆斯 1956 年所观察到的那样。人们还可以想象根据信仰和基于证据的理由来区分信仰，并在每种情况下提出不同的奖励。
5. 这个表格应该有更多的列：多神论的反对意见。如果帕斯卡真的正确，理性在这里无法决定任何事情，那么似乎其他各种神论假设也是可行的选择。帕斯卡可能考虑到了天主教对上帝的概念 - 让我们假设这是一个“存在”或“不存在”的上帝。根据排中律，这是一个分区。然后，反对意见是，这个分区不够细致，而“（天主教）上帝不存在”这一列实际上可以细分为其他各种神论假设。同样地，反对意见也可以认为帕斯卡的论证“证明了太多的东西”：通过类似的推理，我们可以“证明”理性要求相信各种不兼容的神论假设。正如狄德罗（1746）所说：“一位伊玛目也可以用同样好的方式推理”。

从那时起，这个观点又以各种方式被提出并得到了改进。麦基（1982）写道：“唯有在罗马教堂内才能找到救赎，但这并不一定是罗马教堂，而可能是重洗派、摩门教、穆斯林逊尼派、卡利或奥丁的崇拜者”（203）。卡吉尔（1966）展示了如何轻松地增加神论假设的数量：对于每个实数 x，考虑那个更喜欢思考 x 而不是其他任何活动的上帝。看起来，这样的“替代上帝”多如牛毛 - 或者说ℵ1。

作为回应，一些作者认为，在各种可能的神灵之间竞争一个人的信仰时，有些比其他的更有可能。尽管在相信其中一种神灵时，预期效用可能存在无限的联系，但它们各自的概率可以用作决定胜负的因素。施莱辛格（1994年，90页）提出了这个原则：“在数学期望无限的情况下，选择下注结果的标准是其概率”。（请注意，这个原则在赌注本身中没有找到，尽管它可能被视为一个友好的补充。Askell 2018提出了一个类似的原则。）那么，有没有理由将某些神灵的概率赋予更高的可能性呢？乔丹（1994a，107页）认为，一些奇特的神论假设可能因为“没有传统的支持”而被驳回。同样，施莱辛格认为，帕斯卡是在向“对真正宗教有所了解”的读者发表讲话（88页），我们可以认为，卡吉尔所想象的神灵，例如，可能被赋予比帕斯卡的神更低的概率。富兰克林（2018年，41页）写道，“[帕斯卡的]修辞是针对真实的行动者，即1660年的巴黎的‘世俗人士’”，对于他们来说，“他们所依附的宗教理论的范围，构成了主观非零概率的基础，只包括天主教和无神论”。萨卡（2018年，190-191页）回应了将赌注相对化为帕斯卡所预期的受众的各种作者，他说“帕斯卡的同辈人知道希腊罗马的异教，犹太教，伊斯兰教，新世界的异教，以及多种品牌的新教；他们知道所谓的撒旦教……他们从对上述事物的了解中，很容易推测出其他宗教。”但仍然存在一个问题，即应该给替代神灵分配什么样的概率。Lycan 和 Schlesinger 1989 年提供了更多理论上的理由，支持在概率分配中偏向于帕斯卡的上帝而不是其他上帝。他们首先指出科学中理论受证据限制的熟悉问题。面对多种理论，它们都能很好地适应观察数据，我们更倾向于选择最简单的理论。他们继续论证，简洁性的考虑同样支持将上帝理解为“绝对完美”，“在神学上是独特的，因为它意味着所有传统上归于上帝的其他谓词”（104），我们可以补充说这个理解是帕斯卡的。相比之下，对手上帝的理解则对其本质提出了各种问题，回答这些问题会减弱其简洁性，从而降低其概率。

最后，Bartha 2012 年模拟了一个人对各种神论假设的概率分配随时间演变的“思考动力学”，有点类似于自然选择的演化动力学。在这种理解下，帕斯卡的赌注不是一个单一的决策，而是一系列决策，其中一个人的概率在每一轮中按照上一轮中每个上帝的可选择性来顺序更新。（这依赖于他在 2007 年提供的关于无限效用的复杂处理，详见下文。）他认为，只有当给定的概率分配是这种思考动力学的平衡时，它才是可选择的。他通过这个标准证明了某些概率分配是可选择的，从而在某种程度上为帕斯卡反驳了多神论的异议。

### 5.2 前提 2：对上帝存在的概率分配

对于这个前提，有四种问题。前两个问题很直接，后两个问题更加技术性，可以通过链接跟踪到脚注 9 找到答案。

1. 对上帝存在的概率未定义。前提 1 假设你应该首先对上帝的存在有一个概率。然而，也许你可以合理地不给它一个概率——你对上帝存在的概率可能仍然未定义。我们不能在这里讨论关于将概率归因于代理人的棘手问题。但是，即使在帕斯卡自己的文本中，也有一些支持这种回应的地方，再次引用关键的说法：“[理性]在这里无法决定任何事情。有一个无限的混乱将我们分开。在这个无限距离的极端处正在进行一场游戏，正面或反面将会出现……”这个想法可能是任何概率分配都与“认识空无”状态不一致（用莫里斯 1986 年的说法）：即使是对上帝的存在分配一个概率，即使是 1/2，也是在假装拥有实际上完全缺乏的证据。因为与我们知道是公平的硬币不同，这个比喻性的“硬币”与我们“无限远”，因此显然对我们完全未知。也许，因此，理性实际上要求我们不给上帝的存在分配一个概率（在这种情况下，至少超卓论证似乎是有效的）。或者也许理性不要求这样做，但至少允许这样做。无论哪种方式，赌注甚至无法起步。
2. 对上帝存在的零概率。严格的无神论者可能坚持将概率分配为 0 的合理性，正如 Oppy 1990 等人所指出的。例如，他们可能主张仅凭理性就可以确定上帝不存在，也许通过论证全知、全能、全善的概念本身就是矛盾的。或者，贝叶斯主义者可能认为，理性对概率判断没有超出一致性（或符合概率计算）的限制。因此，只要严格的无神论者将概率 1 分配给上帝的不存在，并将概率 0 分配给上帝的存在，就不会违反任何理性规范。

此外，一个 p=0 的分配显然会阻止通往帕斯卡的结论的途径，在通常的假设下

∞×0=0

因为这样，期望计算变为：

E(赌注为上帝)=∞×0+f1×(1−0)=f1E(赌注反对上帝)=f2×0+f3×(1−0)=f3

而论证中没有暗示 f1>f3 的内容。（实际上，这个不等式是有问题的，即使帕斯卡似乎也允许。）简而言之，帕斯卡的赌注对严格的无神论者没有影响力。[9]

### 5.3 前提 3：理性要求最大化预期效用

最后，人们可以质疑帕斯卡的决策理论假设，即理性要求人们执行最大预期效用的行为（如果有的话）。现在也许这是一个分析真理，在这种情况下，我们可以在不再讨论的情况下将其授予帕斯卡 - 也许最大化期望是理性的构成要素，正如一些人可能会说的那样。但是，这个前提遭到了严重的反对。例如，Allais 1953 年和 Ellsberg 1961 年的悖论被认为表明，最大化期望可能导致人们执行直观上次优的行动。同样，圣彼得堡悖论中，人们被认为愚蠢，因为他们愿意支付任何有限金额来玩一个期望无限的游戏。（这个悖论在这里特别适用。）[10]

针对这些问题，已经提出了对期望效用理论的各种改进。例如，我们可以考虑选项的支付差异的期望，并且只有当前者相对于后者的期望差异为正时，我们才会偏好前者而不是后者 - 参见 Hájek 和 Nover 2006 年，Hájek 2006 年，Colyvan 2008 年和 Colyvan＆Hájek 2016 年。或者，我们可以考虑适当定义的效用比率，并且只有当前者相对于后者的效用比率大于 1 时，我们才会偏好前者而不是后者 - 参见 Bartha 2007 年。如果我们要么接受传统期望效用理论的改进，要么对我们的决策规则持多元论立场，那么前提 3 在其现有形式下显然是错误的。尽管如此，这为某种适当的重新表述打开了大门，这可能有助于帕斯卡的目的。事实上，Bartha 认为他基于比率的重新表述回答了对赌注提出的一些最紧迫的反对意见，这些反对意见涉及其对无限效用的引用。

最后，人们可以区分实践理性和理论理性。然后可以承认实践理性要求您最大化预期效用，同时坚持理论理性可能要求您做其他事情-比如，将信念与可用证据的数量相称。这个反对意见尤其重要，因为帕斯卡承认也许您“必须放弃理性”才能遵循他的建议。但是当这两种理性的方面相互拉扯时，正如它们在这里显然可以做到的那样，实践理性是否应该优先并不明显。（有关对信仰的实用而非理论原因的讨论，请参见弗利 1994 年。）

### 5.4 这个论证是否有效？

一些其他对赌注持批评态度的作者明确承认赌注是有效的-例如，麦基 1982 年，雷施尔 1985 年，穆金和索伯 1994 年，以及最强烈的是哈金 1972 年。也就是说，这些作者同意帕斯卡的观点，即根据帕斯卡的决策表和对上帝存在的正面概率以及对理性行动的决策理论解释，为上帝下赌注确实是理性所要求的。

然而，Duff 1986 和 Hájek 2003 认为这个论证实际上是无效的。他们的观点是，除了为上帝下赌注之外，还有其他策略也具有无限期望值，即混合策略，即您不是直接为或反对上帝下赌注，而是根据某种机会设备的结果选择执行哪种行动。考虑混合策略：“抛一枚公平的硬币：正面，您为上帝下赌注；反面，您反对上帝下赌注”。根据帕斯卡的观点，您的期望值将以 1/2 的概率为无限，以 1/2 的概率为有限。整个策略的期望值为：

12×∞+12×[f2×p+f3×(1−p)]=∞

也就是说，“抛硬币”策略与直接为上帝下赌注具有相同的期望值。但是 1/2 的概率与结果无关。任何给予为上帝下赌注正面和有限概率的混合策略也将具有无限期望值：“如果公平的骰子掷出 6，则为上帝下赌注”，“如果您的彩票中奖，则为上帝下赌注”，“如果一颗流星通过您房子的一侧进行量子隧道，则为上帝下赌注”，等等。

可以争论说，问题比这更糟糕，因为从某种意义上讲，你所做的任何事情都可以被视为在对上帝下赌注和反对上帝之间的混合策略，每个策略都有适当的概率权重。假设你选择忽略赌注，去吃个汉堡。尽管如此，你可能仍然会给自己下注给上帝的概率分配一个正的有限概率；而这个概率乘以无穷大又得到无穷大。因此，忽略赌注而去吃汉堡的期望与直接下注给上帝的期望相同。更糟糕的是，假设你将所有精力都集中在避免相信上帝上。尽管如此，你可能仍然会给自己的努力失败分配一个正的有限概率，结果你仍然会下注给上帝。在这种情况下，你的期望再次是无穷大。因此，即使理性要求你在存在最大期望效用的行为时执行该行为，在这里却没有最大期望效用的行为。相反，可以说有很多并列的第一名。一切都乱了套：根据期望效用的标准，你可能做的任何事情都是最好的。

Monton 2011为帕斯卡的赌注辩护，反驳了这一反对意见。他认为，无神论者或不可知论者有多次选择遵循混合策略的机会。回到第一个例子，假设公平的硬币正面朝上。Monton认为，你的预期效用现在发生了变化；它不再是无限的，而是一个无神论者或不可知论者的效用，他们没有无限奖励的前景。你回到了起点。但既然你第一次遵循混合策略是合理的，现在再次遵循它也是合理的——也就是说，再次抛硬币。如果它再次正面朝上，你再次抛硬币也是合理的……硬币最终会正面朝上，从那时起你将为上帝而赌注。类似的推理适用于只有在n面骰子落在1（比如）的情况下才赌注上帝：以概率1，骰子最终会落在1，所以如果你反复根据骰子制定混合策略，以概率1，你将在有限次数的掷骰后开始赌注上帝。Robertson 2012回应说，并非所有这样的混合策略都能（概率上）保证你最终会赌注上帝：其中概率在连续试验中足够快地减小的策略不包括在内。例如，考虑掷一个4面骰子，然后是一个9面骰子，以及一般情况下第n次试验掷一个（n+1）2面骰子……这样的策略，你最终赌注上帝的概率只有1/2，正如Robertson所示。然而，Easwaran和Monton 2012反驳说，如果骰子可以在连续的时间点上掷出，Robertson提出的掷骰序列可以在任意短的时间内完成。在这种情况下，你接下来应该怎么做呢？根据Monton的论证，似乎你应该再次掷骰子。 Easwaran和Monton证明，如果有无数次实施混合策略并以非零概率为上帝下注的时机，那么以概率1，最终会在其中一次下注给上帝。（他们假设，一旦下注给上帝，就无法回头。）他们承认，想象无数次掷骰子，例如，涉及到一个肯定无法在现实中实现的理想化。但他们坚持认为，你应该按照一个理想化版本的自己最终会采取的行动方式行事，这个版本的自己可以实现所描述的掷骰子的结果，也就是直接下注给上帝。

对于混合策略反驳，还有一个进一步的转折。重申一下，反驳的要点是，即使承认帕斯卡的所有前提，为上帝下赌注也不是理性所必需的。但我们已经看到了许多不承认他所有前提的理由。那么好吧，我们就不承认。事实上，假设你给予它们全部为真的概率p很小，其中p是一个正有限的数。所以你给予你的决策问题正是帕斯卡所声称的概率p。但是，根据混合策略反驳，如果是这样的话，一切都会乱套。再次，p乘以无穷大等于无穷大。因此，似乎每个根据帕斯卡得到无穷期望效用的行动，根据你的观点也得到无穷期望效用；但根据之前的推理，这是你可能做的任何事情。现在，曾经打击帕斯卡的反驳的全部力量也打击到了你。我们忽略了一些微妙之处；例如，如果你还给予一个负无穷效用的来源正的有限概率，那么期望效用就变成了∞ - ∞，这是未定义的。但这只是你陷入困境的另一种方式：在这种情况下，你根本无法评估你可能采取的行动的选择价值。无论如何，你都面临决策理论上的瘫痪。我们可以称之为帕斯卡的复仇。更多讨论请参见Hájek（2015）。

布莱士·帕斯卡的赌注面临着混合策略的质疑，杰克逊和罗杰斯（2019）在杰克逊（2016）的基础上提出，这是一个“结构性的，而非实质性的”（61）对赌注的质疑。他们提供了一些情况，其中明显地理性地偏好一种无限的好处而不是另一种。他们建议重新制定如何比较无限奖励前景的方法。（这也对许多神的质疑提供了回应。）哈杰克（2003 年和特别是 2018 年）提供了许多有效的赌注改进方案，更细致地表示了救赎的效用，即对上帝下注的概率越低，预期效用越低。有关进一步讨论，请参见脚注 11。

### 5.5 对上帝下注的道德质疑

让我们出于论证的目的，承认帕斯卡的第一个结论：理性要求你对上帝下注。第二个结论，即你应该对上帝下注，显然并不成立。我们承认的只是一个规范——理性的规范——规定了对上帝下注。根据已经说过的一切，可能还有其他规范规定反对上帝下注。除非我们能够证明理性规范胜过其他规范，否则我们没有解决你应该怎么做的问题，综合考虑所有事情。

有几个论点表明道德要求你对抗上帝的赌注。帕斯卡本人似乎意识到其中一个论点。他承认，如果你不相信上帝，他推荐的行动“会使你的敏锐度降低”（这是特罗特的翻译。帕斯卡原文的法语措辞是“vous abêtira”，其字面翻译更令人震惊：“会使你成为野兽”）。一个表达这个论点的方式是，为上帝下赌注可能要求你败坏自己，从而违反康德对自己的义务。克利福德（Clifford）在1877年的论文中认为，个人在证据不足的情况下相信某事会通过鼓励轻信来伤害社会。佩内尔姆（Penelhum）在1971年的论文中认为，所谓的神圣计划本身就是不道德的，因为它谴责了诚实的非信徒失去永恒的幸福，而这种不信仰并没有任何过错；而采纳相关信仰就是对这个不道德计划的共谋。参见奎因（Quinn）1994年的回应这些论点。例如，对佩内尔姆的反驳是，只要上帝公正地对待非信徒，他对信徒给予特殊恩惠并不是不道德的，甚至可能超过他们应得的。 （然而，请注意，帕斯卡在赌注中并没有明确非信徒的回报是否公正；事实上，就他的论证而言，非信徒的回报可能极其不公正。）

最后，伏尔泰抗议整个赌注的某种不合适之处：“那篇文章似乎有点不雅和幼稚；那种赌博、输赢的概念并不适合这个严肃的主题”（伏尔泰 1778 [1961, 123]）。这并不是支持反对上帝的赌注，而是完全否定所有关于“赌注”的讨论。施莱辛格（1994, 84）提出了这一反对意见的更加明确的表述：贪婪和自私的动机与宗教所必需的“对虔诚的追求”不相容。他回应说，帕斯卡的赌注所容忍的救赎的快乐是“最崇高的一种”，如果寻求它被视为贪婪，那么它就是“一种值得称赞的高尚贪婪的表现”（85）。富兰克林（1998, 2018）认为伏尔泰夸大了对帕斯卡的赌注的描绘，并错过了他的关键观点“你必须下注”。富兰克林认为，鉴于帕斯卡提出的选择是不可避免的，应该基于理性的计算来做出选择，而他的结论涉及行动，而不是神论的真理。

## 6. 第四个“赌注”？

我们已经结束了对传统上称为“帕斯卡的赌注”的讨论。但帕斯卡还有最后一个转折。在他的“本演讲的结尾”中，他写道关于为上帝下注：

> 现在，你在选择这一方面会遭受什么伤害呢？你将会忠诚、谦虚、感激、慷慨、真诚的朋友、真实。当然，你将不会拥有那些有毒的快乐、荣耀和奢侈；但是你不会有其他的吗？我告诉你，你将会在这个生活中获得收益，并且在你走上这条道路的每一步，你都会看到如此巨大的收益的确定性，你所冒险的东西是如此的微不足道，以至于你最终会认识到你已经为某种确定而无限的东西下了赌注，而你为此付出了什么。

这段文字对于为上帝下赌注还提出了两个引人注目的主张：你将会“在这个生活中获得收益”，以及“你已经为某种确定的东西下了赌注”。决策表可以如下所示（按照结果排名）：

|                     | ***God exists***                   | *** 上帝不存在***            |
| --------------------- | -------------------- | ------------------------------ |
| *** 赌注为上帝***   | 获得一切（最好的） | 在尘世生活中获得（第二好的） |
| *** 赌注反对上帝*** | 苦难（最糟糕）     | 人间生活（第三好）           |

这又是一个不确定性下的决策（在我们的技术意义上）——它不涉及概率的考虑。实际上，“赌注”两次消失了：仅仅通过效用就可以确定你应该为上帝下注，而且无论如何，这根本不是一个真正的赌博，因为你的收益是确定的！（这是我对“你已经为某种确定的事物下注”的理解；这里的“确定”并不是指上帝的存在本身。“）与为上帝下注相关的最糟糕的结果（在尘世生活中获得）绝对比反对上帝下注相关的最好的结果（尘世生活）要好。由此立即得出你应该为上帝下注的结论。Hájek（2018）将此称为超级主导性的论证。即使我们允许上帝的存在可能是不可能的，这也是一个为上帝下注的有效论证。

帕斯卡已经回到了第一个赌注，并且他现在甚至超越了它。解决这个决策问题是微不足道的。这个“赌注”的地位——这个论证的正确性与否——取决于一个人的前景是否与这个决策表所描绘的一样。有关进一步讨论，请参见 Jordan（2006）和（2018，108-109）。

## 7. “为上帝下注”是什么意思？

现在让我们假设帕斯卡是对的，综合考虑（包括理性和道德），你应该为上帝而赌注。这到底意味着什么？

一些作者认为帕斯卡的观点是你应该相信上帝-参见 Quinn 1994 和 Jordan 1994a。但也许一个人不能简单地随意相信上帝；理性不能要求不可能的事情。帕斯卡对这个反对意见非常清楚：“[我]是这样的人，我不能相信。那么，你希望我怎么办？”，他的想象对话者说。然而，他认为一个人可以采取措施来培养这种信仰：

> 你想获得信仰，但不知道方法；你想治愈自己的不信仰，并询问治疗方法。向那些曾经像你一样被束缚的人学习，他们现在把所有的财产都押上了。这些人知道你想要走的路，并且已经治愈了你想要治愈的病。按照他们开始的方式去行动；假装相信，用圣水，听弥撒等等...
>
> 但是为了向您展示这将引导您到那里，正是这一点将减少您的激情，这些激情是您的绊脚石。

我们在这里找到了两个主要的建议给非信徒：像信徒一样行动，并抑制那些成为信徒障碍的激情。而这些都是一个人可以随意进行的行动。

相信上帝可能是为上帝赌注的一种方式。这段文字暗示，即使是非信徒也可以为上帝赌注，通过努力成为一个信徒。批评者可能会质疑帕斯卡所假设的信仰形成心理学，指出一个人可能会努力去相信（也许是通过完全遵循帕斯卡的处方），但却失败了。对此，帕斯卡的追随者可能会回答说，真正努力的行为已经显示出一个纯洁的心灵，上帝会充分奖赏。

根据帕斯卡的观点，“为上帝赌注”和“反对上帝赌注”是对立的，因为无论如何都无法避免进行赌注：“你必须下赌注，这不是可选的。”在某个时间点，比如 t 时刻，你必须决定是为上帝下赌注还是反对上帝下赌注。但当然，帕斯卡并不认为你会因为瞬间为上帝下赌注而得到无限的回报，然后在之后反对上帝下赌注；也不认为你会因为偶尔为上帝下赌注而得到无限的回报——比如每个月的最后一个星期四。帕斯卡所指的“为上帝下赌注”是一种持续的行动——事实上，一直持续到你死去——它涉及你采取一定的实践和过上一种培养对上帝信仰的生活方式。因此，在 t 时刻，你面临的决策问题是你是否应该开始这种行动；不这样做就是在 t 时刻反对上帝下赌注。

## 8. 帕斯卡赌注的持续影响力

帕斯卡的赌注与安瑟姆的本体论论证竞争成为哲学宗教学中最著名的论证之一。事实上，赌注在当今的影响力可能比其他任何类似的论证都要大——不仅在基督教辩护中发挥作用，而且在与无限、决策理论、概率、认识论、心理学甚至道德哲学相关的各种思路上都有影响。它为发展无限决策理论的尝试提供了一个案例研究。在其中，帕斯卡提出了无穷小概率的概念，早在像刘易斯 1980 年和斯科姆斯 1980 年这样的哲学家将其提到前台之前。它继续凸显了信仰是否可以有实用理由的问题，以及理论和实践合理性之间的假定差异。它引发了关于一个人的信仰在多大程度上可以成为意愿问题以及信仰伦理学的微妙问题。

与布莱士·帕斯卡的赌注相似的推理，通常明确承认它，也在道德哲学的一些理论和应用辩论中发挥作用。 Kenny 1985 年认为核大屠杀具有无限的负效用，有人可能会说即使失去一个人的生命也是如此。 Stich 1978 年批评了他归因于 Mazzocchi 的一个论点，即应该全面禁止重组 DNA 研究，因为这种研究可能导致“安德洛梅达情景”——创造出一种对人类无助的致命细菌菌株；此外，根据 Mazzocchi 的说法，如果“安德洛梅达情景有即使是最小的可能性”，禁令应该得到执行(191)。因此，这可以合理地解释为对安德洛梅达情景赋予了负无限效用。最近，Colyvan、Cox 和 Steele 2010 年讨论了某些义务论道德理论的类似于帕斯卡赌注的问题，其中违反义务被赋予了负无限效用。Colyvan、Justus 和 Regan 2011 年讨论了将自然环境赋予无限价值所面临的困难。Bartha 和 DesRoches 2017 年以相对效用理论为依据做出回应。Stone 2007 年认为帕斯卡赌注的一个版本适用于维持处于持续植物状态的患者；有异议的观点请参见 Varelius 2013 年。帕斯卡赌注甚至在医学界的辩论中被用来讨论是否应该使用抗生素预防一种特定类型的心脏炎症(Shaw 和 Conway 2010 年)。

帕斯卡的赌注是宗教哲学中的一个分水岭。正如我们所见，它还远不止于此。

## Bibliography

* Allais, Maurice, 1953. “Le Comportment de l’Homme Rationnel Devant la Risque: Critique des Postulats et Axiomes de l’École Américaine”, *Econometrica*, 21: 503–546.
* Askell, Amanda, 2019. “Prudential Objections to Atheism”, in Graham Oppy (ed.), *A Companion to Atheism and Philosophy*, Oxford: Wiley-Blackwell.
* Bartha, Paul, 2007. “Taking Stock of Infinite Value: Pascal’s Wager and Relative Utilities,” *Synthese*, 154: 5–52.
* –––, 2012. “Many Gods, Many Wagers: Pascal’s Wager Meets the Replicator Dynamics”, in Jake Chandler and Victoria S. Harrison (eds.), *Probability in the Philosophy of Religion*, Oxford: Oxford University Press, 187–206.
* –––, 2016. “Probability and the Philosophy of Religion”, in Alan Hájek and Christopher Hitchcock (eds.), *The Oxford Handbook of Probability and Philosophy*, Oxford: Oxford University Press, 738–771.
* –––, 2018. “Pascal’s Wager and the Dynamics of Rational Deliberation”, in Bartha and Pasternack (eds.) 2018, 236–259.
* Bartha, Paul and C. Tyler DesRoches, 2016. “The Relatively Infinite Value of the Environment”, *Australasian Journal of Philosophy*, 95(2): 328–353.
* Bartha, Paul and Lawrence Pasternack (eds.), 2018. *Pascal's Wager* (Classic Philosophical Arguments), Cambridge: Cambridge University Press.
* Brown, Geoffrey, 1984. “A Defence of Pascal’s Wager”, *Religious Studies*, 20: 465–79.
* Cain, James, 1995. “Infinite Utility”, *Australasian Journal of Philosophy*, 73(3): 401–404.
* Cargile, James, 1966. “Pascal’s Wager”, *Philosophy*, 35: 250–7.
* Chen, Eddy, and Daniel Rubio, 2020. “Surreal Decisions”, *Philosophy and Phenomenological Research*, 100(1): 54–74.
* Clifford, William K., 1877. “The Ethics of Belief”, in R. Madigan (ed.), *The Ethics of Belief and Other Essays*, Amherst, MA: Prometheus, 70–96.
* Colyvan, Mark, 2008. “Relative Expectation Theory”, *Journal of Philosophy*, 105(1): 37–54.
* Colyvan, Mark, Damian Cox, and Katie Steele, 2010. “Modelling the Moral Dimension of Decisions”, *Noûs*, 44(3): 503–529.
* Colyvan, M., J. Justus, and H.M. Regan, 2010. “The Natural Environment is Valuable but Not Infinitely Valuable”, *Conservation Letters*, 3(4): 224–8.
* Colyvan, Mark and Alan Hájek, 2016. “Making Ado Without Expectations”, *Mind*, 125(499): 829–857.
* Conway, John, 1976. *On Numbers and Games*, London: Academic Press.
* Cutland, Nigel (ed.), 1988. *Nonstandard Analysis and its Applications*, London: London Mathematical Society, Student Texts 10.
* Diderot, Denis, 1746. *Pensées Philosophiques*, reprinted Whitefish, MN: Kessinger Publishing, 2009.
* Duff, Antony, 1986. “Pascal’s Wager and Infinite Utilities”, *Analysis*, 46: 107–9.
* Dummett, Michael. 1978. “Wang’s Paradox”, in *Truth and Other Enigmas*, Cambridge, MA: Harvard University Press.
* Duncan, Craig, 2018. “The Many Gods Objection to Pascal’s Wager: A Defeat, Then a Resurrection”, in Bartha and Pasternack (eds.) 2018, 148–167.
* Easwaran, Kenny and Bradley Monton, 2012. “Mixed Strategies, Uncountable Times, and Pascal’s Wager: A Reply to Robertson”, *Analysis*, 72(4): 681–685.
* Ellsberg, D., 1961. “Risk, Ambiguity and the Savage Axioms”, *Quarterly Journal of Economics*, 25: 643–669.
* Feller, William, 1971. *An Introduction to Probability Theory and its Applications* (Volume II), 2nd edition, London: Wiley.
* Flew, Anthony, 1960. “Is Pascal’s Wager the Only Safe Bet?”, *The Rationalist Annual*, 76: 21–25.
* Foley, Richard, 1994. “Pragmatic Reasons for Belief”, in Jordan 1994b, 27–44.
* Franklin, James, 1998. “Two Caricatures, I: Pascal’s Wager”, *International Journal for Philosophy of Religion*, 44: 109–14.
* –––, 2018. “Pascal’s Wager and the Origins of Decision Theory: Decision-Making by Real Decision-Makers”, in Bartha and Pasternack (eds.) 2018, 31–46.
* Golding, Joshua, 1994. “Pascal’s Wager”, *The Modern Schoolman*, 71(2): 115–143.
* Hacking, Ian, 1972. “The Logic of Pascal’s Wager”, *American Philosophical Quarterly*, 9(2): 186–92; reprinted in Jordan (ed.) 1994b, 21–29. (Page references are to the 1972 original.)
* –––, 1975. *The Emergence of Probability*, Cambridge: Cambridge University Press.
* Hájek, Alan, 1997. “The Illogic of Pascal’s Wager”, *Proceedings of the 10th Logica International Symposium*, T. Childers et al. (eds.), Filosophia, The Institute of Philosophy of the Academy of Sciences of the Czech Republic, 239–249.
* –––, 2000. “Objecting Vaguely to Pascal’s Wager”, *Philosophical Studies*, 98(1): 1–16.
* –––, 2003. “Waging War on Pascal’s Wager”, *Philosophical Review*, 112(1): 27–56.
* –––, 2006. “Some Reminiscences on Richard Jeffrey, and Some Reflections on *The Logic of Decision*”, *Philosophy of Science*, 73(5): 947–958.
* –––, 2012. “Blaise and Bayes”, in Jake Chandler and Victoria S. Harrison (eds.), *Probability in the Philosophy of Religion*, Oxford: Oxford University Press, 167–186.
* –––, 2015. “Pascal’s Ultimate Gamble”, in Alex Byrne, Joshua Cohen, Gideon Rosen, and Seana Shiffrin (eds.), *The Norton Introduction to Philosophy*, New York: Norton.
* –––, 2018. “The (In)validity of Pascal’s Wager”, in Bartha and Pasternack (eds.) 2018, 123–147.
* Hájek, Alan and Harris Nover, 2006. “Perplexing Expectations”, *Mind*, 115 (July): 703–720.
* Herzberg, Frederik, 2011. “Hyperreal Expected Utilities and Pascal’s Wager”, *Logique et Analyse*, 213: 69–108.
* Jackson, Liz, 2016. “Wagering Against Divine Hiddenness”, *The European Journal for Philosophy of Religion*, 8(4): 85–109.
* Jackson, Liz, and Andrew Rogers 2019. “Salvaging Pascal’s Wager”, *Philosophia Christi*, 21(1): 59–84.
* James, William, 1956. “The Will to Believe”, in *The Will to Believe and Other Essays in Popular Philosophy*, New York: Dover Publications.
* Jeffrey, Richard C., 1983. *The Logic of Decision*, 2nd edition, Chicago: University of Chicago Press.
* Jordan, Jeff, 1994a. “The Many Gods Objection”, in Jordan (ed.) 1994b, 101–113.
* –––, 2006. *Pascal*’*s Wager: Pragmatic Arguments and Belief in God*, Oxford: Oxford University Press.
* –––, 2018. “The Wager and William James”, in Bartha and Pasternack (eds.) 2018, 101–119.
* Jordan, Jeff (ed.), 1994b. *Gambling on God: Essays on Pascal’s Wager*, Lanham, MD: Rowman & Littlefield.
* Joyce, James M., 2005. “How Probabilities Reflect Evidence”, *Philosophical Perspectives*, 19: 153–179.
* Lewis, David, 1980. “A Subjectivist’s Guide to Objective Chance”, in Richard C. Jeffrey (ed.), *Studies in Inductive Logic and Probability* (Volume II), Berkeley and Los Angeles: University of California Press; reprinted in Lewis 1986.
* –––, 1986, *Philosophical Papers: Volume II*, Oxford: Oxford University Press.
* Lindstrom, Tom, 1988. “Invitation to Non-Standard Analysis”, in Cutland (ed.) 1988, 1–139.
* Lycan, William, and George Schlesinger. 1989. “You Bet Your Life”, in Joel Feinberg (ed.), *Reason and Responsibility*, 7th edition, Belmont CA: Wadsworth; also in the 8th, 9th, 10th editions; reprinted in Tom Beauchamp, Joel Feinberg, and James M. Smith (eds.), *Philosophy and the Human Condition*, 2nd edition, Englewood Cliffs, NJ: Prentice Hall, 1989.
* Mackie, J. L., 1982. *The Miracle of Theism*, Oxford: Oxford University Press.
* Martin, Michael 1983. “Pascal’s Wager as an Argument for Not Believing in God”, *Religious Studies*, 19: 57–64.
* –––, 1990. *Atheism: a Philosophical Justification*, Philadelphia: Temple University Press.
* McClennen, Edward, 1994. “Pascal’s Wager and Finite Decision Theory”, in Jordan (ed.) 1994b, 115–137.
* Monton, Bradley, 2011. “Mixed Strategies Can’t Evade Pascal’s Wager”, *Analysis*, 71: 642–645.
* Morris, Thomas V., 1986. “Pascalian Wagering”, *Canadian Journal of Philosophy*, 16: 437–54.
* –––, 1994. “Wagering and the Evidence”, in Jordan (ed.) 1994b, 47–60.
* Mougin, Gregory, and Elliott Sober, 1994. “Betting Against Pascal’s Wager”, *Noûs*, XXVIII: 382–395.
* Nelson, Edward, 1987. *Radically Elementary Probability Theory* (Annals of Mathematics Studies, 117), Princeton: Princeton University Press.
* Nelson, Mark T., 1991. “Utilitarian Eschatology”, *American Philosophical Quarterly*, 28: 339–347.
* Ng, Yew-Kwang, 1995. “Infinite Utility and Van Liedekerke’s Impossibility: A Solution”, *Australasian Journal of Philosophy*, 73: 408–411.
* Oppy, Graham, 1990. “On Rescher on Pascal’s Wager”, *International Journal for Philosophy of Religion*, 30: 159–68.
* –––, 2018. “Infinity in Pascal’s Wager”, in Bartha and Pasternack 2018, 260–277.
* Palacios, M. Asin, 1920. *Los Precedentes Musulmanes del ‘Pari’ de Pascal*, Santander: Boletín de la Biblioteca Menéndez Pelayo.
* Pascal, Blaise, 1670, *Pensées*, translated by W. F. Trotter, London: Dent, 1910.
* Penelhum, Terence, 1971. *Religion and Rationality*, New York: Random House.
* Pivato, Michael, 2014. “Additive Representation of Separable Preferences over Infinite Products”, *Theory and Decision*, 77: 31–83.
* Quinn, Philip L., 1994. “Moral Objections to Pascalian Wagering”, in Jordan (ed.) 1994b, 61–81.
* Rescher, Nicholas, 1985. *Pascal’s Wager*, Notre Dame: South Bend, IN: Notre Dame University Press.
* Rinard, Susanna, 2018. “Pascal’s Wager and Imprecise Probability”, in Bartha and Pasternack (eds.) 2018, 278–292.
* Robinson, Abraham, 1966. *Non-Standard Analysis*, Amsterdam: North Holland.
* Rota, Michael, 2016. “A Better Version of Pascal’s Wager”, *American Catholic Philosophical Quarterly*, 90(3): 415–439.
* Rota, Michael, 2017. “Pascal’s Wager”, *Philosophy Compass*, 12:e12404.
* Ryan, John, 1945. “The Wager in Pascal and Others”, *New Scholasticism*, 19(3): 233–50; reprinted in Jordan (ed.) 1994b, 11–19.
* Saka, Paul, 2018. “Rationality and the Wager”, in Bartha and Pasternack (eds.) 2018, 187–208.
* Schlesinger, George, 1994. “A Central Theistic Argument”, in Jordan (ed.) 1994b, 83–99.
* Shaw, David and David Conway, 2010. “Pascal’s Wager, Infective Endocarditis and the ‘No-Lose’ Philosophy in Medicine”, *Heart*, 96(1): 15–18.
* Skalia, H. J., 1975. *Non-Archimedean Utility Theory*, Dordrecht: D. Reidel.
* Skyrms, Brian, 1980, *Causal Necessity*, New Haven: Yale University Press.
* Sobel, Howard, 1996. “Pascalian Wagers”, *Synthese*, 108: 11–61.
* Sorensen, Roy, 1994. “Infinite Decision Theory”, in Jordan (ed.) 1994b, 139–159.
* Stone, Jim, 2007. “Pascal’s Wager and the Persistent Vegetative State”, *Bioethics*, 21(2): 84–92.
* Swinburne, R. G., 1969. “The Christian Wager”, *Religious Studies*, 4: 217–28.
* Vallentyne, Peter, 1993. “Utilitarianism and Infinite Utility”, *Australasian Journal of Philosophy*, 71: 212–217.
* –––, 1995. “Infinite Utility: Anonymity and Person-Centredness”, *Australasian Journal of Philosophy*, 73: 413–420.
* Vallentyne, Peter and Shelly Kagan, 1997. “Infinite Value and Finitely Additive Value Theory”, *The Journal of Philosophy*, XCIV(1): 5–27
* Van Liedekerke, Luc, 1995. “Should Utilitarians Be Cautious About an Infinite Future?”, *Australasian Journal of Philosophy*, 73(3): 405–407.
* Varelius, Jukka, 2013. “Pascal’s Wager and Deciding About the Life-Sustaining Treatment of Patients in Persistent Vegetative State”, *Neuroethics*, 6: 277–285.
* Voltaire, F. M. A., 1778 [1961]. *Philosophical Letters (Letters Concerning the English Nation)*. Trans. E. Dilworth. Bobbs-Merrill, 17th letter, remark V.
* Weirich, Paul, 1984. “The St. Petersburg Gamble and Risk”, *Theory and Decision*, 17: 193–202.
* Wenmackers, Sylvia, 2018. “Infinitesimal Probabilities and Pascal’s Wager”, in Bartha and Pasternack (eds.) 2018, 293–314.
* Wright, Crispin, 1987. “Strict Finitism”, in *Realism, Meaning and Truth*, Oxford: Blackwell.

## Academic Tools

> | ![sep man icon](../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=pascal-wager). |
> | --- | --- |
> | ![sep man icon](../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/pascal-wager/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=pascal-wager&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](https://philpapers.org/sep/pascal-wager/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* [Pascal's Wager: A Pragmatic Argument for Belief in God](https://1000wordphilosophy.com/2021/01/04/pascals-wager-a-pragmatic-argument-for-belief-in-god/), by Liz Jackson, at *1000 Word Philosophy*.
* [*Theistic Belief and Religious Uncertainty*](http://www.infidels.org/library/modern/jeffrey_jordan/belief.html) by Jeff Jordan.
* [Pascal’s Wager](http://www.iep.utm.edu/p/pasc-wag.htm), by Paul Saka, in the *Internet Encyclopedia of Philosophy*.
* [Pascal’s Wager](http://www.infidels.org/library/modern/theism/wager.html), maintained by Stephen R. Welch, at infidels.org.

## Related Entries

[decision theory](https://plato.stanford.edu/entries/decision-theory/) | [infinity](https://plato.stanford.edu/entries/infinity/) | [probability, interpretations of](https://plato.stanford.edu/entries/probability-interpret/)

### Acknowledgments

I thank Bronwyn Finnigan and Liz Jackson for helpful comments.

[Copyright © 2022](https://plato.stanford.edu/info.html#c) by  
[Alan Hájek](http://philosophy.anu.edu.au/profile/alan-hajek/) <[*alan.hajek@anu.edu.au*](mailto:alan%2ehajek%40anu%2eedu%2eau)>
