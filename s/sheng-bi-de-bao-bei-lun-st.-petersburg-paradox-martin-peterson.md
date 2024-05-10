# 圣彼得堡悖论 St. Petersburg paradox (Martin Peterson)

*首次发表于 2019 年 7 月 30 日；实质修订于 2023 年 8 月 1 日*

圣彼得堡悖论是由尼古拉斯·伯努利于 1713 年引入的。它继续成为决策理论中新难题和洞见的可靠来源。

圣彼得堡悖论的标准版本源自圣彼得堡游戏，游戏规则如下：抛一枚公平的硬币，直到第一次出现正面为止。在那时，如果第二次抛硬币正面朝上，你赢得  2，依此类推。结果的概率分别为 12、14、18，……因此，圣彼得堡游戏的预期货币价值为

12⋅2+14⋅4+18⋅8+⋯=1+1+1+⋯=∞∑n=1(12)n⋅2n=∞。

（有人会说总和趋近于无穷大，而不是无穷大。我们将在第 2 节讨论这个区别。）

“悖论”在于我们最好的理性选择理论似乎暗示，为了获得一次玩圣彼得堡游戏的机会，支付任何有限费用都是理性的，尽管几乎可以肯定玩家只能赢得一笔非常微薄的金额。玩家赢得不超过  4 的概率为 12。

从严格的逻辑意义上讲，圣彼得堡悖论并不是一个悖论，因为没有得出任何形式上的矛盾。然而，声称一个理性的行为体应该为玩这个游戏支付数百万甚至数十亿的费用似乎是荒谬的。因此，至少我们可以说，我们对最大化预期价值原理有一个反例。如果理性迫使我们为了一次玩圣彼得堡游戏的机会而清算所有资产，那么理性似乎是不吸引人的。

---

## 1. 圣彼得堡悖论的历史

圣彼得堡悖论以 18 世纪的一本主要科学期刊《圣彼得堡帝国科学院评论》（Commentarii Academiae Scientiarum Imperialis Petropolitanae）命名，丹尼尔·伯努利（1700-1782）在 1738 年发表了一篇名为《关于风险度量的新理论阐述》的论文。丹尼尔·伯努利是从他的表兄尼古拉斯·伯努利（1687-1759）那里了解到这个问题的，尼古拉斯在 1713 年 9 月 9 日给皮埃尔·雷蒙德·德·蒙蒙特写信时提出了一个早期但不必要复杂的版本的悖论（有关此信和相关信件，请参见 J.伯努利 1975 年）。尼古拉斯请德·蒙蒙特想象一个例子，其中一个普通的骰子被掷出直到出现一个 6：

> 如果 A 承诺给 B 一些硬币，按照这个进展 1、2、4、8、16 等，或者 1、3、9、27 等，或者 1、4、9、16、25 等，或者 1、8、27、64 等，而不是之前的 1、2、3、4、5 等，那么 B 的期望是多少呢？尽管这些问题在大多数情况下并不困难，但你会发现一些非常奇特的东西。（尼古拉斯·伯努利给德·蒙蒙特，1713 年 9 月 9 日）

Montmort 似乎并没有立即理解 Nicolaus 的观点。Montmort 回应说，这些问题并不困难，唯一的问题是找到一系列的和，其中分子是平方、立方等等的等差数列，而分母是等比数列。（Montmort 给 N. Bernoulli 的信，1713 年 11 月 15 日）

> 然而，他从未进行过任何计算。如果他这样做了，他就会发现第一个数列（1、2、4、8、16 等等）的期望值是：

圣彼得堡悖论

∞∑n=15n−16n⋅2n−1.

对于这个级数，它满足

 当 n 趋向于无穷大时，∣∣∣an+1an∣∣∣>1，

因此，通过应用比值测试，很容易验证该级数是发散的。（这个测试是 d'Alembert 在 1768 年发现的，所以批评 Montmort 没有看到这一点可能是不公平的。）然而，尼古拉斯本人提出的数学论证也有些粗略，并不能给当代数学家留下深刻印象。好消息是，他的结论是正确的：

> 从那里可以推断出，B 必须给 A 一个无限的总和，甚至超过无穷大（如果允许这样说），以便他能够在这个 1、2、4、8、16 等等的序列中给他一些硬币。（N.伯努利致蒙蒙，1714 年 2 月 20 日）

辩论的下一个重要贡献是由克拉默在 1728 年提出的。他在蒙蒙出版的一本书中读到了尼古拉斯的原始问题，并在给尼古拉斯的一封信中提出了一个更简单、更优雅的表述：

> 为了使案例更简单，我假设 A 抛一枚硬币，如果正面朝上的一面在第一次抛掷时出现，B 承诺给他一枚硬币；如果是在第二次抛掷时出现，给他两枚硬币；如果是在第三次抛掷时出现，给他四枚硬币；如果是在第四次抛掷时出现，给他八枚硬币，以此类推。悖论在于计算结果表明，A 必须给 B 一个无限的总和作为等价物，这似乎是荒谬的。（克拉默致 N·伯努利，1728 年 5 月 21 日）

在同一封信中，克拉默提出了一种革命性的决策理论解决方案。克拉默指出，应该指导理性行为体的选择的不是预期货币价值，而是“明智之人”对金钱的“使用”。根据克拉默的观点，两千万并不比一千万更有价值，因为一千万足以满足一个行为体合理可能拥有的所有欲望：

> 数学家根据金钱的数量来评估其价值，而明智之人则根据他们可能对其进行的使用来评估其价值。使数学期望无限的是我能够获得的巨额总和，如果正面朝上的一面只在第 100 次或第 1000 次抛掷时出现。现在，如果我以一个明智的人的方式进行推理，这个总和对我来说并不更多，对我来说并没有更多的快乐，对我来说并没有更多的参与游戏的动力，而如果只有 10 或 20 百万枚硬币，情况也是如此。（1728 年 5 月 21 日）

Cramér 在这段文字中提出的观点可以推广。假设一个结果的上限值为 2m。如果是这样，那么当硬币在第 m 次翻转时正面朝上，就会得到这个结果。这意味着硬币翻转超过 m 次的无限多个可能结果的期望值是有限的：它是 2m 乘以这种情况发生的概率，因此不能超过 2m。我们还需要加上前 m 个可能结果的累积值，这显然是有限的。因为任意两个有限数的和是有限的，Cramér 版本的圣彼得堡游戏的期望值是有限的。

Cramér 意识到声称存在一个超过这个界限后额外财富完全无关紧要将引起争议。然而，他指出，即使货币价值严格增加但相对增长越来越小，他的解决方案仍然有效（1728 年 5 月 21 日）：

> 如果有人希望假设商品的道德价值与数学数量的平方根成正比...我的道德期望将会是
>
> 12⋅√1+14⋅√2+18⋅√4+116⋅√8…

这是当代决策理论家和经济学家所称的边际效用递减的第一个明确表述：更多金钱的附加效用永远不为零，但你越富有，通过增加财富来获得的利益越少。克拉默正确地计算出圣彼得堡游戏的预期效用（“道德价值”）约为 2.9 个单位，对于一个其金钱效用由根函数给出的行为体来说。

丹尼尔·伯努利在他著名的 1738 年文章中提出了一个非常相似的观点，该文章在本节开头提到。丹尼尔认为，行为体对财富的效用等于货币金额的对数，这意味着不太可能但金额较大的奖金对游戏的预期效用的贡献要小于更可能但金额较小的奖金。就在他的文章即将发表时，丹尼尔的兄弟尼古拉斯向他提到，克拉默在 1728 年（在上面引用的信中）提出了一个非常相似的观点。在最终版本的文本中，丹尼尔公开承认了这一点：

> 实际上，我发现[Cramér]的理论与我的理论如此相似，以至于我们在这类主题上独立达成如此密切的一致，真是奇迹般的。 （丹尼尔·伯努利 1738 [1954：33]）

## 2. 现代圣彼得堡悖论

Cramér 关于代理人金钱边际效用递减的评论解决了圣彼得堡悖论的原始版本。然而，现代决策理论家一致认为这个解决方案过于狭窄。通过增加结果的价值，直到代理人完全得到对其金钱边际效用递减的补偿，可以恢复这个悖论（参见 Menger 1934 [1979]）。因此，现代文献中讨论的圣彼得堡悖论版本可以如下表述：

> 直到硬币正面朝上为止，才会停止抛掷公平的硬币。此时，玩家将根据玩家个人效用尺度上的 2n 单位的效用获得奖品，其中 n 是硬币抛掷的次数。

需要注意的是，即使代理的边际金钱效用递减，这种赌博的预期效用仍然是无穷大的。我们可以不确定奖品的具体内容，它不一定是金钱。

值得强调的是，圣彼得堡游戏中的奖品都没有无穷大的价值。无论硬币抛掷多少次，玩家总是会赢得一些有限的效用。圣彼得堡游戏的预期效用并不是有限的，但实际结果总是有限的。因此，通过争论实际奖品不能具有无穷大效用来否定这个悖论是错误的。构建这个悖论只需要潜在的无穷大，而不需要实际的无穷大。（有关实际无穷大和潜在无穷大之间的区别的讨论，请参见 Linnebo 和 Shapiro 2019 年的论文。）在讨论圣彼得堡悖论时，将术语“无穷大效用”解释为“不是有限的”通常是有帮助的，但将其是否是无穷大或仅趋近于无穷大的问题留给数学哲学家来确定。

一些作者讨论了修改后的圣彼得堡游戏的预期效用是无限的（即非有限的）这一主张存在何种问题。这仅仅是因为赌注的公平价格“太高”，还是还有其他引发担忧的原因？詹姆斯·M·乔伊斯指出，无限效用的赌注将严格优先于其任何支付，因为后者都是有限的。鉴于我们只关注将赌注视为增加财富手段的赌徒，这是荒谬的。（乔伊斯 1999 年：37）

> 乔伊斯的观点似乎是，支付赌注的公平价格的代理人将确切地知道在支付费用后她实际上会变得更糟。然而，这似乎预设了实际的无限存在。如果只有潜在的无限存在，那么玩家就无法为参与游戏“支付”无限的费用。如果是这样，我们或许可以解释乔伊斯是在提醒我们，无论玩家实际赢得多少有限金额，预期效用总是更高的，这意味着理性的做法是支付更多。罗素和艾萨克斯（2021 年：179）提供了稍微不同的分析。他们的观点是，“无论圣彼得堡赌局价值多少，没有特定的结果可以价值恰好那么多”。这是因为圣彼得堡赌局的价值超过任何有限的结果，但小于无限大的某个东西。

Joyce’s point seems to be that an agent who pays the fair price of the wager will know *for sure* that she will actually be worse off after she has paid the fee. However, this seems to presuppose that actual infinities do exist. If only potential infinities exist, then the player cannot “pay” an infinite fee for playing the game. If so, we could perhaps interpret Joyce as reminding us that no matter what finite amount the player actually wins, the expected utility will always be higher, meaning that it would have been rational to pay even more. Russell and Isaacs (2021:179) offer a slightly different analysis. Their point is that “however much the St. Petersburg gamble is worth, no particular *outcome* could be worth exactly that much”. This is because the St. Petersburg gamble is worth more than any finite outcome, but less than something worth infinitely much.

> 圣彼得堡悖论也许值得一笔无限的金钱吗？不。圣彼得堡悖论只能支付有限的金额。假设有一些东西比每个有限的金额更有价值-比如无限的金钱（不管它可能是多少），或者无价的艺术品，或者真爱。如果[行为体]拥有这样的东西，那么保留它（肯定地）将优于用圣彼得堡悖论交换它；因此圣彼得堡悖论并不那么值钱。当然，没有什么比每个有限的金额更有价值，但也没有什么比每个有限的金额都更有价值。因此，[行为体]推理的结论是，她无论出价多少-无论是货币还是其他方式-都不会是正确的价格。（Russell and Isaacs 2021:179）

决策理论家希望澄清一种目的手段的理性概念，即理性是指为了达到目的而采取最佳手段。因此，玩家知道支付超过实际赢得的金额不能成为最佳的实现效用的手段。但是，总是被迫支付过少也是有问题的，因为这样卖方将“支付”过多（即收到过少）。因此，除非我们能够确定赌博的公平价格，否则至少有一个行为体将是非理性的并支付过多。这一观察使我们能够将原始的“悖论”（其中没有推导出形式上的矛盾）加强为由三个不相容的主张组成的更强版本：

1. 理性支付玩（或出售玩的权利）圣彼得堡游戏的效用量高于每个有限的效用量。
2. 买方知道他或她实际上将获得的效用量是有限的。
3. 明知为某物支付的金额超过将要收到的是不理性的。

许多关于圣彼得堡悖论的讨论都集中在（1）上。正如我们将在接下来的几节中看到的，许多学者认为圣彼得堡游戏的价值出于某种原因是有限的。一个罕见的例外是 Hájek 和 Nover。他们提出了接受（1）的以下论证：

> 圣彼得堡游戏可以被视为一系列截断的圣彼得堡游戏的极限，每个游戏都有逐渐增加的有限截断点 - 例如，如果在第十次抛掷时没有出现正面，游戏就会被取消；在第十一次抛掷时；在第十二次抛掷时；... 如果我们接受优势推理，这些连续的截断可以指导我们对圣彼得堡游戏价值的评估：它的下界是它们每个值，这些界限单调递增。因此，我们有一个原则性的理由接受为了玩圣彼得堡游戏而支付任何有限金额的价值。（Hájek 和 Nover 2006：706）

尽管他们没有明确表示，Hájek 和 Nover 可能会拒绝（3）。最不具争议的说法可能是（2）。当然，从逻辑上讲，硬币每次翻转都会落在反面，即使无限序列的反面概率为 0，这是可能的。（有关这种可能性的讨论，请参见 Williamson 2007 年。）一些概率为 0 的事件实际上确实发生，在不可数的概率空间中，不可能所有的结果都具有大于 0 的概率。即使如此，如果硬币每次翻转都会落在反面，代理人赢得 0 单位的效用。因此，（2）仍然成立。

## 3. 不切实际的假设？

一些作者声称，圣彼得堡游戏应该被驳回，因为它建立在永远无法实现的假设上。例如，杰弗里（1983 年：154）认为，“任何提供让行为体玩圣彼得堡赌博的人都是个骗子，因为他假装拥有一个无限大的银行”。十八世纪的布丰和方丹也提出了类似的反对意见（参见杜特卡 1988 年）。

然而，杰弗里关于现实约束的观点为何相关并不清楚。评估一个高度理想化的游戏，我们几乎没有理由相信我们将来会玩到，有什么问题吗？哈杰克和史密森（2012 年）指出，圣彼得堡悖论具有传染性，即只要你给银行的承诺分配了一些非零概率，无论你对这个假设的确信度有多低，期望效用都将是无穷大的。任何非零概率乘以无穷大都等于无穷大，因此只要你有非零概率玩圣彼得堡游戏，期望效用就是无穷大。

值得注意的是，圣彼得堡游戏可能并不像杰弗里所声称的那样不切实际。在硬币翻转之前，银行没有无限的资金（或其他资产）可用并不是一个问题。重要的是，银行能够向玩家作出可信的承诺，在翻转完成后的合理时间内提供正确的金额。银行在玩家玩游戏时在保险库中有多少钱是无关紧要的。这一点很重要，因为如第 2 节所述，玩家实际赢得的金额总是有限的。因此，我们可以想象游戏的运作方式如下：我们首先翻转硬币，一旦我们知道银行欠玩家多少有限金额，首席执行官将确保银行筹集足够的资金。

如果这不能说服玩家，我们可以想象中央银行发行一张空白支票，玩家在硬币翻转后可以填写正确的金额。由于支票是由中央银行发行的，它不会被拒付。随着中央银行发行的支票进入经济中，新的货币会自动产生。杰弗里用以下论点驳斥了这个版本的圣彼得堡游戏：

> [想象一下]财政部给赢家提供了一张崭新的十亿亿美元的钞票。由于由此引起的通货膨胀，这种高额回报的边际欲望可能会降低到足以使玩游戏的前景具有有限的预期[效用]。（杰弗里 1983 年：155）

杰弗里可能是对的，即“一张崭新的十亿亿美元的钞票”会引发一些通货膨胀，但这似乎是我们在构建游戏时可以考虑的事情。重要的是，回报方案中的效用是线性的。

对于这个论点感到不信服的读者可能希望想象一种圣彼得堡游戏的版本，其中玩家连接到诺齐克的体验机（参见快乐主义条目中的第 2.3 节）。根据构造，这台机器可以产生任何代理希望的愉悦体验。因此，一旦硬币被抛掷 n 次，体验机将在玩家个人效用尺度上生成价值为 2n 单位的愉悦体验。奥曼（1977）在没有明确提到体验机的情况下指出：

> 支付可能无需用固定有限数量的商品来表达，或者根本不需要用商品来表达[...]彩票可能是某种开放性活动--可能会导致他以前未曾体验过的感觉。例如，宗教、美学或情感体验，如进入修道院、攀登山脉或从事可能具有惊人结果的研究。（奥曼 1977：444）

奥曼所指的一种可能的体验类型的例子可能是在天堂度过的天数。目前尚不清楚为什么在天堂度过的时间必须具有递减的边际效用。

另一种实际担忧的类型涉及到圣彼得堡游戏的时间维度。Brito（1975）声称，抛硬币可能需要太长时间。如果每次抛硬币需要 n 秒，我们必须确保在玩家死亡之前能够抛足够多的次数。显然，如果硬币抛掷次数存在上限，期望效用也将是有限的。

对于这种担忧的直接回应是想象抛硬币发生在昨天，并且被录制在视频中。第一次抛硬币发生在晚上 11 点整，第二次抛硬币在第一次之后 602 分钟，第三次在第二次之后 604 分钟，依此类推。视频尚未对任何人公开，但是一旦玩家支付了游戏费用，视频将会被放置在公共领域。请注意，在一个小时内，硬币原则上可以被抛掷无限次。（这是一个“超任务”的例子；请参阅超任务的条目。）

这个随机实验需要硬币越来越快地翻转是真实的。在某一点上，我们将不得不使硬币的旋转速度超过光速。尽管这个假设违反了一个偶然的自然法则，但这并不是逻辑上不可能的。如果你觉得这个有问题，我们可以想象有人在 0 和 1 之间的实数线上扔飞镖。飞镖命中区间[0,12)的概率是 12。飞镖命中区间[12,34)的概率是 14，依此类推。如果“硬币翻转”是以这种方式生成的，随机实验将在瞬间结束。为了避免现实世界中没有无限锋利的飞镖这个担忧，我们可以定义飞镖命中实数线的点如下：设 a 为飞镖的面积。飞镖命中区间[0,1]的点被定义为使得 a 的一半面积在通过 a 的垂直线的右侧，另一半面积在左侧。垂直线穿过区间[0,1]的点是随机实验的结果。

在关于圣彼得堡悖论的当代文献中，实际的担忧经常被忽视，要么是因为可以想象出不会出现这些担忧的情景，要么是因为高度理想化的决策问题具有无限效用和无限状态空间，被认为本身就很有趣。

## 4. 有界效用函数？

Arrow（1970: 92）建议理性行为体的效用函数应该“被认为是有界函数...因为这样的假设是为了避免[圣彼得堡悖论]”。Basset（1987）提出了类似的观点；参见 Samuelson（1977）和 McClennen（1994）。

Arrow 的观点是为了避免圣彼得堡悖论，效用必须是有界的，而传统的公理化对预期效用原则的解释保证了这一点。Ramsey（1926）、von Neumann 和 Morgenstern（1947）以及 Savage（1954）提出的众所周知的公理化，例如，都要求决策者的效用函数是有界的。（有关 von Neumann 和 Morgenstern 的公理化的概述，请参见决策理论条目中的第 2.3 节。）

如果效用函数是有界的，那么圣彼得堡游戏的预期效用当然是有限的。但是，为什么预期效用理论的公理保证效用函数是有界的呢？关键的假设是对抽签的合理偏好是连续的。为了解释这个公理的重要性，引入一些符号是有帮助的。设{pA，（1−p）B}是以概率 p 得到 A 和以概率 1−p 得到 B 的抽签。表达式 A⪯B 表示行为体认为 B 至少和 A 一样好，即弱偏好 B 于 A。此外，A∼B 表示 A 和 B 等偏好，A≺B 表示 B 优先于 A。考虑：

* 连续性公理：假设 A⪯B⪯C。那么存在一个概率 p∈[0,1]，使得{pA,(1−p)C}∼B。

为了解释为什么这个公理意味着没有任何物体可以具有无限价值，假设反证法，A 是一张价值  2 的奖金支票，C 是一个代理人赋予无限效用的奖品。决策者的偏好是 A≺B≺C，但是不存在概率 p 使得{pA,(1−p)C∼B。无论 p 是非零的，决策者都会严格偏好{pA,(1−p)C}而不是 B，而如果 p 是 0，决策者会严格偏好 B。因此，因为没有任何物体（彩票或结果）可以具有无限价值，并且效用函数是由它赋予这些物体（彩票或结果）的效用来定义的，所以效用函数必须是有界的。

这解决了圣彼得堡悖论吗？答案取决于我们是否认为一个被提供玩圣彼得堡游戏的理性行为体有任何理由接受连续性公理。一个可能的观点是，任何被提供玩圣彼得堡游戏的人都有理由拒绝连续性公理。因为圣彼得堡游戏具有无限效用，所以代理人没有理由按照这个公理规定的方式评估彩票。正如在第 3 节中解释的那样，我们可以想象具有无限价值的支付。

有人可能反对连续性公理，以及冯·诺依曼和莫根斯特恩（以及拉姆齐和萨维奇）提出的其他公理，认为这些公理对于以数学精确的方式定义效用是必不可少的。因此，如果我们拒绝连续性公理，谈论效用将毫无意义。这个公理是说某物的效用高于另一物的一部分。一个好的回应可能是发展一种效用理论，其中不使用对抽签的偏好来定义概念的含义；参见卢斯（1959）对这种理论的早期例子。另一个回应可能是发展一种明确拒绝连续性公理的效用理论；参见斯卡拉（1975）。

## 5. 忽略小概率？

布丰在 1777 年提出，理性的决策者应该忽略在圣彼得堡游戏中赢得大量金钱的可能性，因为这样做的概率非常低。根据布丰的观点，一些足够不可能的结果是“道德上不可能的”，因此应该被忽略。从技术角度来看，这个解决方案非常简单：圣彼得堡悖论的产生是因为决策者愿意将无限多个极其有价值但高度不可能发生的结果聚合起来，因此，如果我们通过排除足够不可能的结果来限制“可能”的结果集，期望效用当然将是有限的。

但为什么要忽略小概率事件呢？我们如何划定小概率事件中哪些是无关紧要的，哪些是需要关注的呢？Dutka 总结了 Buffon 的长篇回答如下：

> 为了确定一个合适的阈值，[Buffon]指出，一个 56 岁的男人，相信自己的健康状况良好，会忽略自己在 24 小时内死亡的可能性，尽管死亡率表显示他在这段时间内死亡的几率只有 10189 比 1。因此，Buffon 将 1/10,000 或更小的概率视为可以忽略的概率。（Dutka 1988: 33）

这是一个令人信服的论点吗？根据 Buffon 的观点，我们应该忽略一些小概率事件，因为像他这样的人（56 岁的男性）实际上就忽略了这些事件。因此，Buffon 可能被指责试图从“是”中推导出一个“应该”。为了避免休谟的“从是到应该”的反驳，Buffon 必须添加一个前提，即人们对风险的日常反应总是理性的。但我们为什么要接受这样的前提呢？

另一个反对意见是，如果我们忽略小概率，那么有时我们将不得不忽略事件的所有可能结果。考虑以下例子：一副普通的扑克牌有 52 张牌，因此可以有 52！种不同的排列方式。因此，任何给定排列的概率约为 1/8⋅1067。这是一个非常小的概率。（如果将六张牌添加到牌组中，则可能的排序数量将超过已知的可观测宇宙中的原子数量。）然而，每次我们洗牌时，我们都知道可能的结果中只会出现一种，那么为什么我们要忽略所有这些非常不可能的结果呢？

尼古拉斯·J·J·史密斯（2014 年）为布丰的解决方案辩护。他的论点基于以下原则：

* 理性可忽略的概率（RNP）：对于任何涉及任何代理面临的决策问题的彩票，存在一个ϵ>0，使得代理人不需要考虑概率小于ϵ的彩票结果，以做出完全理性的决策。（史密斯 2014：472）

史密斯指出，RNP 中量词的顺序至关重要。主张是对于每个彩票，存在某个概率阈值ϵ，低于该阈值的所有概率都应该被忽略，但是错误的认为同一个ϵ适用于每个彩票。这一点很重要，否则我们可以认为 RNP 允许我们将成千上万个概率小于ϵ的独立事件组合起来。显然，忽略半百万个百万分之一的事件是没有意义的。通过记住适当的ϵ可能因情况而异，这个担忧可以被排除。

史密斯还指出，如果我们忽略小于ϵ的概率，那么我们必须增加其他一些概率，以确保所有概率之和为一，这是概率公理所要求的（参见概率解释条目中的第 1 节）。史密斯提出了一种系统性的原则来解决这个问题。

然而，我们为什么要接受 RNP？除了解决圣彼得堡悖论之外，接受这个有争议的原则的论证是什么？史密斯的论证如下：

> 无法要求无限精度：相反，在任何给定的上下文中，必须存在一些有限的容忍度-一些正的阈值，使得忽略所有概率低于此阈值的结果被视为满足规范... 决策理论中有一个规范，它说要忽略概率为零的结果。因为这个规范提到了一个具体的概率值（零），所以可以合理地施加一个容忍度：零加或减ϵ（鉴于概率都在 0 和 1 之间，这变成了零加ϵ）... （RNP）的背后思想是，在任何实际的决策环境中，人们从来不需要以这种方式无限精确，因为这从来不重要。对于每个决策问题、每个彩票和每个代理人，都存在某个阈值，使得如果代理人简单地忽略概率低于该阈值的结果，她就不会是非理性的。（Smith 2014: 472–474）

假设我们接受决策理论中不需要无限精度的观点。根据史密斯的论证，这将意味着可以合理地忽略小于ϵ的概率。然而，为了确保决策者在玩圣彼得堡游戏时永远不会付出巨大代价，史密斯似乎必须捍卫更强的主张，即决策者在理性上必须忽略小概率，即不允许不忽略它们。同意史密斯观点的决策者面临着在玩圣彼得堡游戏时支付巨额金额的风险，而不会做出任何被 RNP 认为是非理性的行为。这一点很重要，因为可以说，在可实现和完全现实的目标（如圣彼得堡游戏）中，向决策者展示他们在理性上必须避免“无限精度”更加困难。有关对 RNP 的批评和一些相关问题的讨论，请参见 Hájek（2014）。

另一个对 RNP 的异议是由 Yoaav Isaacs（2016）提出的。他指出，RNP 与 Smith（弱一致性）认可的附加原则一起，会导致决策者有时会为了微不足道的回报而承担任意大的风险。

Lara Buchak（2013）提出了一个更加优雅的解决方案。她建议我们在计算一个选项的价值时，应该对小概率分配指数级别较小的权重。Buchak 讨论的一个可能的加权函数是 r(p)=p2。因此，她的建议是，如果你赢得的概率是 1/8，除了你已经拥有的之外，你应该将你的收益乘以 1256，依此类推。这意味着小概率对风险加权期望效用的贡献非常小。

Buchak 的建议模糊地类似于我们对金钱的边际效用递减的熟悉观念。正如 Cramér 和 Daniel Bernoulli 强调的那样，更多的钱总是比较少的好，但每多一美元所获得的效用是递减的。根据 Buchak 的观点，我们应该为结果的概率分配的权重也是非线性的：小概率的重要性越小，它们的相对重要性就以指数级别递减：

> 风险厌恶的边际效用递减分析背后的直觉是，将金钱添加到结果中，对于结果已经包含的金钱越多，其价值就越小。风险厌恶的现有分析背后的直觉是，将概率添加到结果中，对于结果已经具有更高的可能性获得，其价值就越大。（Buchak 2014: 1099。）

Buchak 指出，这一举措本身并不能解决圣彼得堡悖论。出于与 Menger（1934 [1979]）在他对伯努利解决方案的评论中提到的原因相似的原因，通过调整结果使总和线性增加，可以重新引入悖论（有关详细信息，请参见 Buchak 2013: 73-74）。出于这个原因，Buchak 还致力于 RNP，即有一些概率非常小，对赌博的整体价值没有任何影响的有争议的假设。

另一个担忧是，因为 Buchak 拒绝最大化预期效用原则，并用风险加权最大化预期效用原则取而代之，许多决策理论家提出的针对违反预期效用原则的批评也可以针对她的原则提出。例如，如果您接受风险加权最大化预期效用原则，您必须拒绝独立公理。这意味着您可能会在一些巧妙设计的实用论证中被利用。请参阅 Briggs（2015）以讨论对 Buchak 理论的一些异议。

## 6. 相对期望效用理论

在科利万（2008）引入的彼得罗格勒游戏中，无论硬币翻转多少次，玩家赢得的金额都比在圣彼得堡游戏中多 1 美元。因此，如果硬币在第一次投掷时正面朝上，玩家将赢得 3 个效用单位，依此类推。请参见表 1。

| | | | | | | --- | --- | --- | --- | --- |表 1 | 概率 | 12 | 14 | 18 | … | | 圣彼得堡 | 2 | 4 | 8 | … | | 彼得罗格勒 | 2+1 | 4+1 | 8+1 | … |

显然，彼得堡游戏比圣彼得堡游戏更有价值。然而，解释为什么如此并不容易。两个游戏都有无限的期望效用，所以期望效用原则给出了错误的答案。彼得堡游戏并不比圣彼得堡游戏更有价值，因为它的期望效用更高；这两个游戏的期望效用完全相同。这表明期望效用原则并不适用于所有的风险选择，这是一个有趣的观察。

彼得堡游戏是否比圣彼得堡游戏更有价值，是因为彼得堡游戏的结果优于圣彼得堡游戏的结果？在这个背景下，优势意味着无论世界的真实状态是哪个，玩家总是能赢得 1 美元更多，即无论硬币被抛掷多少次。问题在于，很容易想象到一些彼得堡游戏的版本，优势原则并不适用于这些版本。例如，想象一下彼得堡游戏的一个版本，与表 1 中的游戏完全相同，只是对于某个非常不可能的结果（比如，硬币在第 100 次抛掷时首次正面朝上），玩家赢得的单位比圣彼得堡游戏少 1 个。这个游戏，彼得堡斯基游戏，并不优于圣彼得堡游戏。然而，由于玩彼得堡斯基游戏几乎肯定会比玩圣彼得堡游戏更好，一个合理的决策理论应该能够解释为什么彼得堡斯基游戏比圣彼得堡游戏更有价值。

Colyvan 声称我们可以通过引入一种名为相对期望效用理论（REUT）的新版本的期望效用理论来解决这个难题。根据 REUT，我们应该计算每种可能结果下两个选项的期望效用差异。形式上，行为 Ak 相对于 Al 的相对期望效用（REU）为

REU(Ak,Al)=n∑i=1pi(uki−uli).

根据 Colyvan 的说法，只有当 REU(Ak,Al)>0 时，选择 Ak 而不是 Al 是合理的。

Colyvan 的 REUT 很好地解释了为什么彼得罗格勒游戏比圣彼得堡游戏更有价值，因为相对预期效用为 1。REUT 还解释了为什么彼得罗格勒斯基游戏比圣彼得堡游戏更有价值：预期效用的差异为 1−(12)100，大于 0。

然而，彼得森（2013）指出，REUT 无法解释为什么列宁格勒斯基游戏比列宁格勒游戏更有价值（见表 2）。列宁格勒斯基游戏是彼得罗巴甫洛夫斯基游戏的一个版本，在第二轮中，如果硬币正面朝上，玩家除了获得有限数量的效用单位外，还可以玩圣彼得堡游戏（SP）。在列宁格勒游戏中，如果硬币正面朝上，玩家可以玩圣彼得堡游戏（SP）。

| | | | | | | | --- | --- | --- | --- | --- | --- |表 2 | 概率 | 12 | 14 | 18 | 116 | … | | 列宁格勒 | 2 | 4 | 8+SP | 16 | … | | 列宁格勒斯基 | 2 | 4+SP | 8 | 16 | … |

显然，列宁格勒斯基游戏比列宁格勒游戏更有价值，因为玩家有更高的概率获得作为奖励的圣彼得堡游戏（具有无限期望效用）。然而，REUT 无法解释为什么。在表 2 中，发生概率为 14 的状态的期望效用差为-∞，而发生概率为 18 的状态的期望效用差为+∞。因此，因为对于所有正概率 p，p⋅∞=∞，而“∞−∞”在标准分析中是未定义的，因此 REUT 无法应用于这些游戏。

Bartha（2007）和（2016）提出了相对期望效用理论的更复杂版本。在 Bartha 的理论中，将结果 x 的效用与某个备选结果 y 和基准点 z 的效用进行比较，可以任意选择 z，只要 x 和 y 至少与 z 一样受欢迎。然后，将 x 相对于 y 和基准点 z 的效用定义为 u（x）-u（z）与分母 u（y）-u（z）之间的比率；后者是 u（x）-u（z）与之进行比较的“标尺”。因此，如果 u（x）= 10，u（y）= 20 和 u（z）= 0，则 x 相对于 y 和基准点 z 的相对效用为 U（x，y；z）= 0.5。

Bartha 的建议是要求代理人将圣彼得堡游戏与另外两个游戏之间的彩票进行比较。例如，如果 Petrograd+是玩家无论硬币被投掷多少次都比在圣彼得堡游戏中赢得 2 个单位更多的游戏，那么玩家可以将 Petrograd 游戏与在 Petrograd+和圣彼得堡游戏之间进行彩票比较。通过确定在彩票中以概率 p 玩 Petrograd+和以概率 1-p 玩圣彼得堡游戏比肯定玩 Petrograd 游戏更好的概率 p，可以确定 Petrograd 相对于 Petrograd+或圣彼得堡的相对价值。（有关详细信息，请参见 Bartha 2016 年第 5 节。另请参见 Colyvan 和 Hájek 对 Bartha 理论的 2016 年讨论。）

Bartha 理论的一个奇怪特点是，即使一个彩票严格优于另一个彩票，它们的相对效用也可以相同；参见 Bartha（2011：34-35）。这表明在 Bartha 理论中分配给彩票的相对效用并不总是指导选择的。

让我们还提到原始圣彼得堡游戏的另一种非常简单的变体，游戏规则如下（参见彼得森 2015 年：87）：一个被操纵的硬币以 0.4 的概率正面朝上，玩家赢得价值为 2n 单位效用的奖品，其中 n 是硬币被投掷的次数。这个游戏，莫斯科游戏，更有可能产生一长串的翻转，因此比圣彼得堡游戏更有价值，但两个游戏的预期效用是相同的，因为两个游戏都有无限的预期效用。也许很容易说莫斯科游戏更有吸引力，因为莫斯科游戏在随机上优于圣彼得堡游戏。（一个游戏在随机上优于另一个游戏意味着对于每一个可能的结果，第一个游戏至少有与第二个游戏一样高的概率产生价值至少为 u 单位效用的奖品；对于某些 u，第一个游戏产生 u 的概率比第二个游戏更高。）然而，在存在玩家赢得的奖品价值略低于另一个游戏的小风险的游戏中，随机优势原则不适用。例如，我们可以想象，如果硬币在第 100 次翻转时正面朝上，莫斯科游戏支付的比圣彼得堡游戏少一个单位；在这种情况下，两个游戏都不在随机上优于另一个。尽管如此，坚持认为那个几乎肯定会产生更好结果的游戏（如上所述）更有价值似乎仍然是合理的。挑战在于以一种稳健且非武断的方式解释为什么。

## 7. 帕萨迪纳游戏

由 Nover 和 Hájek（2004）引入的帕萨迪纳悖论受到了圣彼得堡游戏的启发，但支付时间表不同。通常情况下，一个公平的硬币被抛掷 n 次，直到第一次出现正面。如果 n 是奇数，玩家赢得(2n)/n 单位的效用；然而，如果 n 是偶数，玩家必须支付(2n)/n 单位。一个人愿意为玩这个游戏支付多少钱呢？

如果我们按照结果发生的时间顺序总结这些术语，并以通常的方式计算预期效用，我们发现帕萨迪纳游戏的价值是：

12⋅21−14⋅42+18⋅83−116⋅164+132⋅165−⋯=1−12+13−14+15−⋯=∑n(−1)n−1n

这个无限和收敛于 ln 2（约为 0.69 个效用单位）。然而，Nover 和 Hájek 指出，如果我们重新排列相同的数字的求和顺序，我们将得到一个非常不同的结果。这是这个数学事实的一个可能例子：

1−12−14+13−16−18+15−110−112+17−114−116⋯=12(ln2)。

当然，对数学家来说，这并不是新闻。帕萨迪纳游戏产生的无限和被称为交错调和级数，它是一个条件收敛级数。（如果级数 an 条件收敛，则∑∞j=1an 收敛，但∑∞j=1|an|发散。）由于莱曼重排定理，我们知道如果一个无限级数是条件收敛的，那么它的项总是可以重新排列，使得和收敛到任何有限数，或者收敛到+∞或-∞。

Nover 和 Hájek 的观点是，按照硬币翻转产生的时间顺序总结 Pasadena 游戏中的术语似乎是任意的。为了理解其中的原因，想象一下游戏的稍微修改版本会有所帮助。在他们的原始论文中，Nover 和 Hájek 要求我们想象一下：

> 我们抛一枚公平的硬币，直到它第一次正面朝上。我们在连续的卡片上写下了每种可能结果的支付。卡片上的内容如下：（顶部卡片）如果第一次正面朝上是在第一次抛硬币时，我们支付给您 2 美元。[...]不小心，我们把卡片掉了下来，然后把它们捡起来叠放在桌子上，发现它们已经被重新排列。没关系，你说——显然游戏没有改变，因为支付计划保持不变。毕竟，游戏的条件是通过卡片上写的条件完全指定的，我们只是改变了条件呈现的顺序。（Nover 和 Hájek 2004: 237–239）

在这种情况下，我们似乎没有理由偏好以任何特定顺序总结无限级数的术语。那么 Pasadena 游戏的期望值是 ln2 还是 12(ln2)还是 13 还是−∞还是 345.68？所有这些建议似乎同样任意。此外，对于 Altadena 游戏也是如此，其中每个支付都增加了一美元。Altadena 游戏显然比 Pasadena 游戏更好，但期望效用理论的支持者似乎无法解释为什么。

关于帕萨迪纳游戏的文献非常丰富。例如，参见 Hájek 和 Nover（2006），Fine（2008），Smith（2014）和 Bartha（2016）。其中一种特别有影响力的解决方案是由 Easwaran（2008）提出的。他引入了预期效用原则的强弱版本之间的区别，受到了大数定律的强弱版本之间的著名区别的启发。根据大数定律，随着迭代次数趋于无穷大，游戏的平均效用以概率 1 收敛于其预期效用。大数定律的弱版本认为，对于足够大的一组试验，可以使平均效用与预期效用之间的差异小于某个预先指定的小量的概率可以任意小。因此，根据弱预期效用原则，

> 通过事先确定足够大的 n 次游戏，每次游戏的平均回报几乎可以保证与 ln 2 非常接近，

而原则的强版本意味着

> 如果一个玩家一直可以决定是继续玩还是退出，那么无论每次游戏的（恒定）价格如何，她几乎肯定可以保证获得任意多的利润。（Easwaran 2008: 635）

Easwaran 认为，弱期望效用原则应该指导行为体的选择，并且公平价格是 ln 2。

然而，Easwaran 的解决方案不能推广到其他具有稍微不同支付方案的游戏。Bartha（2016: 805）描述了一个没有期望值的 Pasadena 游戏的版本。在这个游戏中，Arroyo 游戏，玩家以概率 pn=1/(n+1)赢得−1n+1(n+1)。如果我们按照产生结果的顺序计算期望效用，我们得到与 Pasadena 游戏相同的结果：1−12+13−14⋯由 Bartha 解释（并证明）的原因，Arroyo 游戏没有弱期望效用。

值得注意的是，类似于帕萨迪纳的情景也可能出现在非概率性的背景下（参见彼得森 2013 年）。例如，想象一下一个无限人口的群体，其中个体编号的效用为（-1）j-1j。这个群体的总效用是多少？或者想象一下你是一幅杰克逊·波洛克（Jackson Pollock）的画作的自豪拥有者。一位艺术经纪人告诉你，这幅画的整体审美价值是其部分的总和。你用任意的数字 1、2、3、...给画中的点编号（也许是通过在卡片上写下数字，然后把所有卡片扔在地上）；每个点的审美价值为（-1）j-1j。这幅画的总审美价值是多少？这些例子是帕萨迪纳问题的非概率性版本，期望效用原则不适用于这些问题。对于任何自然状态都没有不确定性；决策者确切地知道世界的样子。这意味着伊斯瓦兰（Easwaran）对弱期望和强期望之间的区别不适用。

尽管这些问题中的一些可能看起来有些深奥，但我们不能忽视它们。所有类似于帕萨迪纳的问题都容易受到圣彼得堡悖论的传染问题的影响（参见第 2 节）。Hájek 和 Smithson 提供了以下生动的例证：

> 你可以在晚餐时选择比萨和中餐。每个选项的吸引力取决于你如何以概率方式权衡各种情景（烧焦的比萨，完美烹饪的比萨...过于辣的中餐，完美调味的中餐...）以及你给予它们的效用。让我们假设两个选择都没有占优势，但对你来说应该非常简单地做出选择。但是，如果比萨和中餐的期望值被即使是微小的对帕萨迪纳游戏的信任分配所污染，那就不是这样了。如果门只是被微微打开了一点点，它就会把门踢开，并淹没所有的预期效用计算。你甚至不能在比萨和中餐之间做出选择。（Hájek 和 Smithson 2012: 42，强调添加。）

Colyvan（2006）建议我们应该在帕萨迪纳游戏上坚持下去，并承认它没有期望效用。传染问题表明，如果我们这样做，我们将不得不承认最大化期望效用原则几乎不适用于任何决策。此外，由于传染问题同样适用于本条目中讨论的所有游戏（圣彼得堡，帕萨迪纳，阿罗约等），似乎所有这些问题都可能需要一个统一的解决方案。

数百年来，决策理论家一直认为理性的行为体应该最大化期望效用。讨论主要集中在如何解释这个原则，特别是对于世界因果结构不寻常的选择。然而，直到最近，没有人真正质疑最大化期望效用原则是否是适用的正确原则。圣彼得堡悖论所激发的许多难题的丰富而不断增长的文献表明，这可能是一个错误。也许最大化期望效用原则应该被某个完全不同的原则所取代？

## Bibliography

* Alexander, J. M., 2011, “Expectations and Choiceworthiness”, *Mind*, 120(479): 803–817. doi:10.1093/mind/fzr049
* Arrow, Kenneth J., 1970, *Essays in the Theory of Risk-Bearing*, Amsterdam: North-Holland.
* Aumann, Robert J., 1977, “The St. Petersburg Paradox: A Discussion of Some Recent Comments”, *Journal of Economic Theory*, 14(2): 443–445. doi:10.1016/0022-0531(77)90143-0
* Bartha, Paul, 2007, “Taking Stock of Infinite Value: Pascal’s Wager and Relative Utilities”, *Synthese*, 154(1): 5–52.
* Bartha, Paul, Barker, John and Hájek, Alan, 2014, “Satan, Saint Peter and Saint Petersburg: Decision Theory and Discontinuity at Infinity”, *Synthese*, 191(4): 629–660.
* Bartha, Paul F. A., 2016, “Making Do Without Expectations”, *Mind*, 125(499): 799–827. doi:10.1093/mind/fzv152
* Bassett, Gilbert W., 1987, “The St. Petersburg Paradox and Bounded Utility”, *History of Political Economy*, 19(4): 517–523. doi:10.1215/00182702-19-4-517
* Bernoulli, Daniel, 1738 [1954], “Specimen Theoriae Novae de Mensura Sortis”, *Commentarii Academiae Scientiarum Imperialis Petropolitanae*, 5: 175–192. English translation, 1954, “Exposition of a New Theory on the Measurement of Risk”, *Econometrica*, 22(1): 23–36. doi:10.2307/1909829
* Bernoulli, Jakob, 1975, *Die Werke von Jakob Bernoulli*, Band III, Basel: Birkhäuser. A translation from this by Richard J. Pulskamp of [Nicolas Bernoulli’s letters concerning the St. Petersburg Game is available online](https://web.archive.org/web/20200725100737/http://cerebro.xu.edu/math/Sources/NBernoulli/correspondence_petersburg_game.pdf).
* Briggs, Rachael, 2015, “Costs of Abandoning the Sure-Thing Principle”, *Canadian Journal of Philosophy*, 45(5–6): 827–840. doi:10.1080/00455091.2015.1122387
* Brito, D.L, 1975, “Becker’s Theory of the Allocation of Time and the St. Petersburg Paradox”, *Journal of Economic Theory*, 10(1): 123–126. doi:10.1016/0022-0531(75)90067-8
* Buchak, Lara, 2013, *Risk and Rationality*, New York: Oxford University Press. doi:10.1093/acprof:oso/9780199672165.001.0001
* –––, 2014, “Risk and Tradeoffs”, *Erkenntnis*, 79(S6): 1091–1117. doi:10.1007/s10670-013-9542-4
* Buffon, G. L. L., 1777, “Essai d’Arithmdéétique Motale”, in *Suppléments à l’Histoire Naturelle*. Reprinted in *Oeuvres Philosophiques de Buffon*, Paris, 1954.
* Chalmers, David J., 2002, “The St. Petersburg Two-Envelope Paradox”, *Analysis*, 62(2): 155–157. doi:10.1093/analys/62.2.155
* Chen, Eddy Keming and Daniel Rubio, forthcoming, “Surreal Decisions”, *Philosophy and Phenomenological Research*, First online: 5 June 2018. doi:10.1111/phpr.12510
* Colyvan, Mark, 2006, “No Expectations”, *Mind*, 115(459): 695–702. doi:10.1093/mind/fzl695
* –––, 2008, “Relative Expectation Theory”:, *Journal of Philosophy*, 105(1): 37–44. doi:10.5840/jphil200810519
* Colyvan, Mark and Alan Hájek, 2016, “Making Ado Without Expectations”:, *Mind*, 125(499): 829–857. doi:10.1093/mind/fzv160
* Cowen, Tyler and Jack High, 1988, “Time, Bounded Utility, and the St. Petersburg Paradox”, *Theory and Decision*, 25(3): 219–223. doi:10.1007/BF00133163
* Dutka, Jacques, 1988, “On the St. Petersburg Paradox”, *Archive for History of Exact Sciences*, 39(1): 13–39. doi:10.1007/BF00329984
* Easwaran, Kenny, 2008, “Strong and Weak Expectations”, *Mind*, 117(467): 633–641. doi:10.1093/mind/fzn053
* Fine, Terrence L., 2008, “Evaluating the Pasadena, Altadena, and St Petersburg Gambles”, *Mind*, 117(467): 613–632. doi:10.1093/mind/fzn037
* Hájek, Alan, 2014, “Unexpected Expectations”, *Mind*, 123(490): 533–567. doi:10.1093/mind/fzu076
* Hájek, Alan and Harris Nover, 2006, “Perplexing Expectations”, *Mind*, 115(459): 703–720. doi:10.1093/mind/fzl703
* –––, 2008, “Complex Expectations”, *Mind*, 117(467): 643–664. doi:10.1093/mind/fzn086
* Hájek, Alan and Michael Smithson, 2012, “Rationality and Indeterminate Probabilities”, *Synthese*, 187(1): 33–48. doi:10.1007/s11229-011-0033-3
* Isaacs, Yoaav, 2016, “Probabilities Cannot Be Rationally Neglected”, *Mind*, 125(499): 759–762. doi:10.1093/mind/fzv151
* Jeffrey, Richard C., 1983, *The Logic of Decision*, 2nd edition, Chicago: University of Chicago Press.
* Jordan, Jeff, 1994, “The St. Petersburg Paradox and Pascal’s Wager”, *Philosophia*, 23(1–4): 207–222. doi:10.1007/BF02379856
* Joyce, James M., 1999, *The Foundations of Causal Decision Theory*, Cambridge: Cambridge University Press.
* Lauwers, Luc and Peter Vallentyne, 2016, “Decision Theory without Finite Standard Expected Value”, *Economics and Philosophy*, 32(3): 383–407. doi:10.1017/S0266267115000334
* Linnebo, Øystein and Stewart Shapiro, 2019, “Actual and Potential Infinity: Actual and Potential Infinity”, *Noûs*, 53(1): 160–191. doi:10.1111/nous.12208
* Luce, R. Duncan, 1959, “On the Possible Psychophysical Laws”, *Psychological Review*, 66(2): 81–95. doi:10.1037/h0043178
* McClennen, Edward F., 1994, “Pascal’s Wager and Finite Decision Theory”, in *Gambling on God: Essays on Pascal’s Wager*, Jeff Jordan (ed.), Boston: Rowman & Littlefield, 115–138.
* McCutcheon, Randall G., 2021, “How to co-exist with nonexistent expectations”, *Synthese*, 198(3): 2783–2799.
* Menger, Karl, 1934 [1979], “Das Unsicherheitsmoment in der Wertlehre: Betrachtungen im Anschluß an das sogenannte Petersburger Spiel”, *Zeitschrift für Nationalökonomie*, 5(4): 459–485. Translated, 1979, as “The Role of Uncertainty in Economics”, in Menger’s *Selected Papers in Logic and Foundations, Didactics, Economics*, Dordrecht: Springer Netherlands, 259–278. doi:10.1007/BF01311578 (de) doi:10.1007/978-94-009-9347-1_25 (en)
* Nover, Harris and Alan Hájek, 2004, “Vexing Expectations”, *Mind*, 113(450): 237–249. doi:10.1093/mind/113.450.237
* Peterson, Martin, 2011, “A New Twist to the St. Petersburg Paradox”:, *Journal of Philosophy*, 108(12): 697–699. doi:10.5840/jphil20111081239
* –––, 2013, “A Generalization of the Pasadena Puzzle: A Generalization of the Pasadena Puzzle”, *Dialectica*, 67(4): 597–603. doi:10.1111/1746-8361.12046
* –––, 2009 [2017], *An Introduction to Decision Theory*, Cambridge: Cambridge University Press; second edition 2017. doi:10.1017/CBO9780511800917 doi:10.1017/9781316585061
* –––, 2019, “Interval Values and Rational Choice”, *Economics and Philosophy*, 35(1): 159–166. doi:10.1017/S0266267118000147
* Ramsey, Frank Plumpton, 1926 [1931], “Truth and Probability”, printed in *The Foundations of Mathematics and Other Logical Essays*, R. B. Braithwaite (ed.), London: Kegan Paul, Trench, Trubner & Co., 156–198. Reprinted in *Philosophy of Probability: Contemporary Readings*, Antony Eagle (ed.), New York: Routledge, 2011: 52–94. [[Ramsey 1926 [1931] available online](https://econpapers.repec.org/bookchap/hayhetcha/ramsey1926.htm)]
* Russell, Jeffrey Sanford and Isaacs, Yoaav, 2021, “Infinite Prospects”, *Philosophy and Phenomenological Research*, 103(1): 178–198.
* Samuelson, Paul A., 1977, “St. Petersburg Paradoxes: Defanged, Dissected, and Historically Described”, *Journal of Economic Literature*, 15(1): 24–55.
* Savage, Leonard J., 1954, *The Foundations of Statistics*, (Wiley Publications in Statistics), New York: Wiley. Second edition, Courier Corporation, 1974.
* Skala, Heinz J., 1975, *Non-Archimedean Utility Theory*, Dordrecht: D. Reidel.
* Smith, Nicholas J. J., 2014, “Is Evaluative Compositionality a Requirement of Rationality?”, *Mind*, 123(490): 457–502. doi:10.1093/mind/fzu072
* von Neumann, John and Oskar Morgenstern, 1947, *Theory of Games and Economic Behavior*, second revised edtion, Princeton, NJ: Princeton University Press.
* Weirich, Paul, 1984, “The St. Petersburg Gamble and Risk”, *Theory and Decision*, 17(2): 193–202. doi:10.1007/BF00160983
* Williamson, Timothy, 2007, “How Probable Is an Infinite Sequence of Heads?”, *Analysis*, 67(295): 173–180. doi:10.1111/j.1467-8284.2007.00671.x

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=paradox-stpetersburg). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/paradox-stpetersburg/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=paradox-stpetersburg&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/paradox-stpetersburg/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[decision theory](https://plato.stanford.edu/entries/decision-theory/) | [hedonism](https://plato.stanford.edu/entries/hedonism/) | [infinity](https://plato.stanford.edu/entries/infinity/) | [Pascal’s wager](https://plato.stanford.edu/entries/pascal-wager/) | [probability, interpretations of](https://plato.stanford.edu/entries/probability-interpret/) | [rational choice, normative: expected utility](https://plato.stanford.edu/entries/rationality-normative-utility/) | [space and time: supertasks](https://plato.stanford.edu/entries/spacetime-supertasks/) | [statistics, philosophy of](https://plato.stanford.edu/entries/statistics/)

[Copyright © 2023](https://plato.stanford.edu/info.html#c) by  
[Martin Peterson](http://www.martinpeterson.org/) <[*martinpeterson@tamu.edu*](mailto:martinpeterson%40tamu%2eedu)>
