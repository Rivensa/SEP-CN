# 超级任务 supertasks (JB Manchak and Bryan W. Roberts)

*首次发表于 2016 年 4 月 5 日；实质性修订于 2022 年 5 月 31 日*

超级任务是由无限多个组成步骤组成的任务，但在某种意义上在有限的时间内完成。超级任务被前苏格拉底学派研究过，并继续成为现代哲学家、逻辑学家和物理学家感兴趣的对象。术语“超级任务”本身是由 J.F.汤姆森（1954 年）创造的。

在这里，我们首先概述超级任务及其机制的分析。然后我们从广义相对论的角度讨论超级任务的可能性。

---

## 1. 机械属性

当执行一个无限任务时，奇怪的事情可能会发生。

例如，考虑一个有可数无穷多个房间的酒店。一天晚上，当酒店完全被占满时，一位旅客出现并要求一间房间。“没问题，”接待员回答道，“有足够的空间！”然后第一个住客搬到第二个房间，第二个住客搬到第三个房间，第三个住客搬到第四个房间，依此类推。结果是酒店从完全被占满变成有一个空房间，旅客最终可以留宿一晚。这个超级任务是由大卫·希尔伯特在 1924 年的一次讲座中描述的，据 Gamow（1947）报道。

人们可能会将这样的异常结果视为反对超级任务的可能性的证据。或者，我们可以认为它们之所以看起来奇怪，是因为我们的直觉是基于对有限任务的经验，而在对超级任务的分析中会失效。现在，让我们简单地试图理解一些超级任务可能具有的异常机械特性。

### 1.1 缺少最终和初始步骤：芝诺行走

超级任务通常缺少最终或初始步骤。一个著名的例子是芝诺悖论中的第一个悖论，即二分悖论。赛跑者阿基里斯从起跑线开始跑到终点线的距离的一半。然后他再跑剩下距离的一半，即总距离的四分之一。然后他再跑剩下距离的一半，即总距离的八分之一。他以此方式无限进行下去，越来越接近终点线（图 1.1.1）。但在这个任务中没有最终步骤。

![The Zeno Dichotomy supertask](https://plato.stanford.edu/entries/spacetime-supertasks/fig111.gif)

图 1.1.1 芝诺二分超级任务。

还有一种“回归”版本的 Dichotomy 超级任务，它没有初始步骤。假设阿基里斯确实到达了终点。那么他必须走过最后的 1/2 赛道，之前是 1/4 赛道，再之前是 1/8 赛道，依此类推。在这个阿基里斯比赛的描述中，我们想象时间倒流，看着阿基里斯越来越接近起跑线（图 1.1.2）。但现在任务中没有初始步骤。

![Regressive version of the Zeno Dichotomy supertask](https://plato.stanford.edu/entries/spacetime-supertasks/fig112.gif)

图 1.1.2. Zeno Dichotomy 超级任务的回归版本。

至少在亚里士多德的《物理学》中所描绘的 Zeno 认为，由此可推出运动不存在。由于无法完成无限多的步骤，阿基里斯将永远无法到达终点（或在回归版本中永远没有开始）。然而，现代数学提供了解释阿基里斯如何完成这个超级任务的方法。正如 Salmon（1998）指出的那样，鉴于现代对极限的定义，Zeno 的行走之谜大部分都得到了解决。这提供了一个确切的意义，即以下求和收敛：

12+14+18+116+⋯.

尽管它有无限多个项，但这个和是一个几何级数，在实数的标准拓扑中收敛于 1。关于支撑这一事实的哲学讨论可以在 Salmon（1998）中找到，在任何处理无限级数的实分析教材中也可以找到收敛的数学。从这个角度来看，当步数趋于无穷大时，阿基里斯实际上完成了所有的超级任务步骤。人们只会怀疑实数的标准拓扑是否提供了这个超级任务中收敛的适当概念。Mclaughlin（1998）对拓扑选择的微妙性进行了讨论。

Max Black（1950）认为，完成芝诺任务是不可能的，因为无限序列中没有最后一步。Gwiazda（2012）也以先验的方式要求存在最后一步。但正如 Thomson（1954）和 Earman 和 Norton（1996）所指出的，这个反对意见在“完成”一词的两个不同含义上存在模棱两可之处。一方面，“完成”可以指执行最后一个动作。这种完成的意义在芝诺的二分法中并不存在，因为对于任务中的每一步，都会有另一步发生得更晚。另一方面，“完成”可以指完成任务中的每一步，这在芝诺的二分法中确实发生了。从 Black 的论证中可以看出，芝诺的二分法在第一种意义上无法完成。但在第二种意义上可以完成。对于有限任务，这两个“完成”一词的含义恰好是等价的，我们对任务的大多数直觉都是在这种情况下发展起来的。但是对于超级任务来说，它们并不等价。

赫尔曼·魏尔（1949 年，§2.7）建议，如果承认芝诺竞赛是可能的，那么同样应该承认机器在有限时间内可以执行无限多个任务的可能性。然而，芝诺竞赛和机器之间的一个区别是，芝诺竞赛是连续的，而机器执行的任务通常是离散的。这导致格伦鲍姆（1969 年）考虑了芝诺竞赛的“断奏”版本，在这个版本中，阿基里斯在每个间隔处暂停的时间越来越短。

### 1.2 缺失的极限：汤姆森的灯

超级任务通常由不收敛的序列描述。J·F·汤姆森（1954 年）引入了一个被称为汤姆森的灯的例子，他认为这个例子说明了超级任务真正具有悖论性的一种意义。

假设我们关闭一盏灯。1 分钟后我们打开它。再过半分钟我们再次关闭它，¼ 打开，⅛ 关闭，依此类推。将每个时间相加得到一个无限几何级数，收敛到 2 分钟，此时整个超级任务已完成。但是当 2 分钟到达时，灯是开还是关呢？

![Thomson's lamp](https://plato.stanford.edu/entries/spacetime-supertasks/fig121.gif)

图 1.2.1. 汤姆森的灯。

声称它是开着的似乎是荒谬的：因为每次打开灯的时刻，都有一个更晚的时刻它被关闭。但声称它是关着的同样荒谬：因为每次关闭灯的时刻，都有一个更晚的时刻它被打开。根据汤姆森的观点，这个悖论表明与灯相关的超级任务是不可能的。

为了分析这个悖论，汤姆森建议我们用数字 1 表示地图的“开启”状态，用数字 0 表示“关闭”状态。超级任务就是这些状态的序列，

 0,1,0,1,0,1,....

这个序列在标准实数拓扑中并不收敛于任何实数。然而，我们可以重新定义序列的收敛性来应对这个问题。例如，我们可以用算术平均数来定义收敛性。给定一个序列 xn，Cesàro 平均数是序列 C1=x1，C2=(x1+x2)/2，C3=(x1+x2+x3)/3，依此类推。这些数字描述了序列在给定项之前的平均值。如果且仅如果 Cn（按照普通意义）收敛于 C，就说序列 xn Cesàro 收敛于数字 C。众所周知，序列 0,1,0,1,... Cesàro 收敛于 ½（参见例如 Bashirov 2014）。

汤姆森指出，如果不解释 ½ 代表什么灯状态，这个论证就没有多大帮助。我们想知道灯是开还是关；说它的最终状态与 ½ 的收敛算术平均值相关几乎无法回答这个问题。然而，这种解决悖论的方法仍然被追求，例如由 Pérez Laraudogoita、Bridger 和 Alper（2002）以及 Dolev（2007）。

在缺少极限的情况下，是否有其他一致的方式来描述汤姆森灯的最终状态？

Benacerraf（1962）指出，从某种意义上说，答案是肯定的。汤姆森灯的描述实际上只指定了在 2 分钟之前的每个有限阶段灯的状态。它对 2 分钟时会发生什么没有任何说明，特别是考虑到缺乏收敛极限。仍然可能以某种方式“完成”汤姆森灯的描述，使其在 2 分钟后要么是开着的，要么是关着的。代价是最终状态不会通过收敛序列从前一状态达到。但这本身并不构成逻辑上的矛盾。

汤姆森的描述的这种完整性是由厄曼和诺顿（1996）明确构建的，他们使用了一个弹跳球的例子。

假设一个金属球在一个导电板上弹跳，每次弹跳都会稍微低一点，直到最后停在板上。假设弹跳遵循与之前相同的几何模式。也就是说，球在第一次弹跳后在空中停留 1 分钟，在第二次弹跳后停留半分钟，在第三次弹跳后停留 1/4 分钟，在第四次弹跳后停留 1/8 分钟，依此类推。那么整个无限弹跳序列就是一个超级任务。

现在假设当球击中金属板时，它完成了一个电路，从而打开了一盏灯。这是一个实现汤姆森灯的物理系统。特别地，在有限的 2 分钟内，灯会无限次地开关。

![Thomson's lamp implemented as a physical circuit](https://plato.stanford.edu/entries/spacetime-supertasks/fig122.gif)

图 1.2.2. 由弹跳球实现的汤姆森灯：弹跳球与板子接触时，汤姆森灯打开。超级任务以灯亮结束。

2 分钟后，这盏灯的状态是什么？球将停在板子上，所以灯会亮起。这对于汤姆森灯的描述并没有什么神秘之处。

或者，我们可以安排球在与板子接触时断开电路。这会产生另一种实现汤姆森灯的方式，但当球达到最终静止状态时，灯会在 2 分钟后关闭。

![Thomson's lamp implemented as a physical circuit](https://plato.stanford.edu/entries/spacetime-supertasks/fig123.gif)

图 1.2.3. 汤姆森灯的另一种实现：弹球与板子接触时，汤姆森灯关闭。超级任务以灯关闭结束。

这些例子表明，可以以一种方式填补汤姆森灯的细节，使其在超级任务之后要么明确处于打开状态，要么明确处于关闭状态。因此，Earman 和 Norton 与 Benacerraf 得出结论，汤姆森灯不是一个悖论，而是一个不完整的描述。

与芝诺二分法类似，汤姆森灯超级任务也有一个回归版本。Uzquiano（2012）研究了这样一种灯，尽管它是一组指令而不是一组任务。考虑一个灯，在整点后的 2 秒打开，1 秒后关闭，½ 秒后打开，¼ 秒后关闭，依此类推。在超级任务开始之前的整点时刻，灯的状态是什么？这个超级任务可以像原始的汤姆森灯一样被视为不完整。只要 Earman 和 Norton 的灯中描述的弹球和电路的力学是时间反演不变的，那么时间反演的系统也是可能的，它会自发地开始弹跳，从而提供了回归汤姆森灯的物理实现。然而，反转的汤姆森灯是否是一个物理可能性取决于系统是否是时间可逆的。一个困难是，它的初始状态将不能确定无限次交替的后续历史。

### 1.3 不连续的数量：利特伍德-罗斯悖论

有时，超级任务需要一个物理量在时间上是不连续的。其中一个例子被称为罗斯悖论，由约翰·利特伍德（1953 年）描述为“无限悖论”，并由谢尔顿·罗斯（1988 年）在他著名的概率论教材中进一步阐述。它的内容如下。

假设我们有一个罐子 - 一个非常大的罐子 - 可以容纳无限多个球。我们还有一个可数无穷多的球堆，编号为 1、2、3、4、….首先，我们将球 1-10 放入罐子中，然后取出球 1。（这总共增加了 9 个球到罐子中。）然后，我们将球 11-20 放入罐子中，并取出球 2。（这将总数增加到 18 个。）假设我们以这种方式无限进行下去，并且速度越来越快，以至于我们会在有限的时间内用完我们整个无穷的球堆（图 1.3.1）。当这个超级任务结束时，罐子里会有多少个球？

![The LittlewoodRoss Paradox](https://plato.stanford.edu/entries/spacetime-supertasks/fig131.gif)

图 1.3.1. 小伍德-罗斯程序。

小伍德（1953 年）和罗斯（1976 年）都回答说答案是零。他们的推理如下。

第一阶段移除了球 1。第二阶段移除了球 2。第 n 阶段移除了球 n，以此类推。由于每个球都有一个标签 n，并且每个标签 n 都在超级任务的第 n 阶段被移除，因此在每个阶段完成后，罐子里只能剩下零个球。甚至可以确定每个球被移除的时刻。

有些人可能会倾向于反驳，相反，当超级任务完成时，罐子里的球的数量应该是无限的。第一阶段后，罐子里有 9 个球。第二阶段后，有 18 个。第三阶段后，有 27 个。当阶段的数量趋近于无穷大时，罐子里的球的总数趋于无穷大。如果罐子的最终状态是由有限阶段状态的收敛确定的，那么超级任务应该以无限多个球在罐子里结束。

如果这两种回答都同样合理，那么我们就有了矛盾。罐子里既不能有零个球，也不能有无限个球。从这个意义上说，利特伍德-罗斯的例子可能是一个悖论。

Allis 和 Koetsier（1991）认为，只有第一个回答是合理的，因为存在一个合理的“连续性原理”：球在空间中的位置是时间的连续函数。如果没有这样的原理，当超级任务完成时，罐子外的球的位置可以不连续地瞬间传送回罐子里。但是有了这样的原理，可以得出结论，超级任务结束时罐子必须是空的。这个原理受到 Van Bendegum（1994）的质疑，并得到 Allis 和 Koetsier（1996）的澄清回应。

Earman 和 Norton（1996）在要求罐子中的球的世界线连续方面遵循 Allis 和 Koetsier（以及 Littlewood 和 Ross）的观点，但指出由此产生了一种不连续的不同意义。（“世界线”在这里用于描述粒子在时空中的轨迹；在相对论时空中的时间部分中将对其进行更详细的讨论。）换句话说，如果将罐子中的球的数量视为时间的函数 N(t)的近似值，那么这个“数量函数”在 Littlewood-Ross 超级任务中是不连续的，在超级任务过程中会急剧增加到任意大的值，然后在任务结束后突然降为 0。从这个意义上说，Littlewood-Ross 悖论给我们提供了一个选择，要么，

1. 认为罐子中每个球的世界线在时间上是连续的；或者
2. 认为罐子中的球的数量 N(t)可以用时间的连续函数来近似。

但不能同时存在。因此，这个例子似乎要求一个物理量在时间上是不连续的：要么在球的世界线上，要么在罐子里的球的数量上。

Littlewood-Ross 例子的一个变种已经被 Barrett 和 Arntzenius（1999 年，2002 年）提出作为决策理论的一个难题。他们提出了一个涉及无限数量的  0 的游戏。然后，人们必须在以下两个选项之间进行选择。

* 选项 A：接受 1 美元；或者
* 选项 B：首先接受$2n+1，其中 n 是提议已经提出的次数，然后返回玩家手中序列号最小的账单。

在游戏的每个有限阶段，选择选项 B 似乎是理性的。例如，在阶段 n=1 时，选项 B 返回  1。在阶段 n=2 时，选项 B 返回  1。依此类推。

然而，假设将这个游戏作为超级任务进行，即在有限时间内进行整个无限次数的提议。那么玩家会有多少钱？按照与利特伍德-罗斯悖论完全相同的推理，我们发现答案是$0。对于每张账单的序列号，都存在一个阶段，在该阶段该账单被返回。因此，如果我们假设账单的世界线必须是连续的，那么无限游戏以玩家一无所获而结束。这是一个在每个有限阶段理性策略无法为无限游戏提供获胜策略的游戏。

这个例子有多种变体，对玩家来说产生更积极的收益。例如，Earman 和 Norton（1996）提出了以下金字塔式营销方案。假设一个代理商将一家公司的两股股份以  2,000 的价格卖给另外两个代理商，从而每个代理商净赚  1,000。然后，这四个新代理商都会做同样的事情，依此类推。这个游戏会如何结束？

如果代理商的数量是有限的，那么最后的代理商将背负债务，而之前的所有代理商都会获利。但如果代理商的数量是无限的，并且金字塔式营销方案变成了超级任务，那么当完成时，所有代理商都会获利。在每个代理商负债的阶段，都会有一个稍后的阶段，代理商会卖出股份并获得 1000 美元的利润。因此，这是一个从总利润和债务相等开始的游戏，但最终将债务转化为纯利润。

### 1.4 经典力学的超级任务

迄今为止，对超级任务的讨论表明，超级任务的可能性更多是一种“物理可能性”，而不是逻辑可能性的问题。但是，“物理可能性”是什么意思呢？一种自然的解释是指“根据某些物理定律可能”。因此，我们可以通过问超级任务是否与经典粒子力学定律相容来更加精确地提出超级任务是否可能的问题。

Earman 和 Norton（1996）的弹球提供了肯定的答案。Pérez Laraudogoita（1996, 1998）引入了一个特别简单的例子，如下所示。

假设有一组无限多个质量相同的粒子排列成一个格点，第一个粒子与第二个粒子之间的距离为 1/2，第二个粒子与第三个粒子之间的距离为 1/4，第三个粒子与第四个粒子之间的距离为 1/8，依此类推。现在想象一个质量相同的新粒子与格点中的第一个粒子发生碰撞，如图 1.4.1 所示。如果这是一个完全弹性碰撞，那么进入的粒子将停止运动，并且速度将转移到被撞粒子上。假设第二次碰撞需要 1/2 秒发生。那么第三次碰撞需要 1/4 秒，第四次碰撞需要 1/8 秒，依此类推。整个无限过程将在 1 秒钟后完成。

![Jon Pérez Laraudogoita's 'Beautiful Supertask'](https://plato.stanford.edu/entries/spacetime-supertasks/fig141.gif)

图 1.4.1. Jon Pérez Laraudogoita 的“美丽的超级任务”

Earman 和 Norton（1998）观察到这个系统的几个有趣的事实。首先，与汤姆森的灯不同，这个超级任务不需要无限速度。系统的总速度永远不会超过原始运动粒子的速度。其次，这个超级任务发生在有界的空间区域内。因此，没有“无限远处”的边界条件可以排除超级任务。第三，虽然每个局部碰撞中能量是守恒的，但是这个系统的全局能量不守恒，因为在有限时间后，它变成了一个无限多个静止粒子的晶格。最后，超级任务关键取决于存在无限多个粒子，并且这些粒子的宽度必须无限缩小，同时保持质量不变。这意味着粒子的质量密度必须无限增长。这个系统的全局能量守恒的失败和其他有趣的特征已经被 Atkinson（2007, 2008），Atkinson 和 Johnson（2009, 2010）以及 Peijnenburg 和 Atkinson（2008）和 Atkinson 和 Peijnenburg（2014）研究过。

Pérez Laraudogoita（1997）描述了另一种经典力学的超级任务。再次考虑相同质量的无限粒子晶格，但这次假设第一个粒子静止不动，第二个粒子以某个速度朝第一个粒子运动，并且每个后续粒子的速度加倍（图 1.4.2）。第一次碰撞使第一个粒子开始运动。但是后来的碰撞使它运动得更快，再后来的碰撞使它运动得更快，依此类推。

![A supertask that relies on unbounded speed](https://plato.stanford.edu/entries/spacetime-supertasks/fig142.gif)

图 1.4.2. 依赖无限速度的超级任务。

安排这种情况，使得第一次碰撞发生在半秒钟后，第二次碰撞发生在四分之一秒后，第三次碰撞发生在八分之一秒后，依此类推（Pérez Laraudogoita 1997）。因此，我们再次完成了一个在一秒钟后完成的超级任务。

这个超级任务的结果是什么？他们的答案是，没有任何粒子留在空间中。它们不能在任何空间中，因为对于给定粒子可以占据的每个水平位置，都有一个在 1 秒之前的时间，它被碰撞推出该位置。可以使用图 1.4.3 来说明这个超级任务中任何一个粒子的世界线。这就是 Malament（2008, 2009）所称的“空间逃避者”轨迹。时间反演的“空间入侵者”轨迹是在固定时间后真空中自发产生粒子的轨迹。

![Worldline of the supertask particle](https://plato.stanford.edu/entries/spacetime-supertasks/fig143.gif)

图 1.4.3. 超级任务粒子的世界线。

Earman 和 Norton（1998）对这个超级任务提出了一些变体，包括一个发生在有界空间区域的变体。与 Pérez Laraudogoita（1996）的例子不同，这个超级任务还基本上要求粒子加速到任意高的速度，从这个意义上说是非相对论的。请参阅 Pérez Laraudogoita（1999）的回应。

这个超级任务是基于 Benardete（1964）的一个例子建模的，他考虑了一艘太空船，它连续加倍速度，直到逃离到无限远的空间。像 Lanford（1975，§4）这样的物理学家也研究了这种类型的超级任务，他们确定了一个粒子弹性碰撞的系统，可以在有限时间内进行无限次碰撞。Mather 和 McGehee（1975）指出了一个类似的例子。Earman（1986）也讨论了 Lanford 的例子的奇怪行为，指出这样的超级任务提供了经典的不确定性的例子，但可以通过限制为有限数量的粒子或施加适当的边界条件来消除。

### 1.5 量子力学超级任务

可以将上述对超级任务的考虑从经典力学推广到量子力学。到目前为止，给出的量子力学超级任务的例子比上述的经典超级任务要复杂一些。然而，它们也可能与物理实验有更有趣的关系。

示例 1：诺顿的格子

Norton (1999)调查了是否存在一种直接的量子力学类似于上述超级任务的情况。他首先考虑了图 1.5.1 中所示的经典情景，即无限个相互作用的谐振子的晶格。假设所有弹簧的张力相同，并解决该系统的运动方程，Norton 发现它可以自发激发，在有限的时间内产生无限次的晶格振动。

![Norton's harmonic oscillator supertask](https://plato.stanford.edu/entries/spacetime-supertasks/fig151.gif)

图 1.5.1. Norton 的无限谐振子系统。

基于这个例子，Norton 为量子谐振子晶格制造了一个类似的超级任务。从一个无限的二维量子系统晶格开始，每个系统都有一个基态|ϕ⟩ 和一个激发态|χ⟩。考虑这些向量的集合，

|0⟩=|ϕ⟩⊗|ϕ⟩⊗|ϕ⟩⊗|ϕ⟩⊗⋯|1⟩=|χ⟩⊗|ϕ⟩⊗|ϕ⟩⊗|ϕ⟩⊗⋯|2⟩=|ϕ⟩⊗|χ⟩⊗|ϕ⟩⊗|ϕ⟩⊗⋯|3⟩=|ϕ⟩⊗|ϕ⟩⊗|χ⟩⊗|ϕ⟩⊗⋯|4⟩=|ϕ⟩⊗|ϕ⟩⊗|ϕ⟩⊗|χ⟩⊗⋯⋮

为简单起见，我们将注意力限制在由这个集合张成的系统可能状态上。我们假设一个哈密顿量，它使|0⟩ 保持不变；创建|1⟩ 并销毁|2⟩；创建|2⟩ 并销毁|3⟩；依此类推。然后，诺顿解决了这种相互作用的薛定谔方程的微分形式，并认为它存在解，其中无限晶格中的所有节点都从它们的基态开始，但在有限时间内都会自发激发。

诺顿的量子超级任务需要一个非标准的量子系统，因为他提出的动力学演化不是幺正的，尽管它遵循了波函数空间中薛定谔方程的微分方程形式（Norton 1999，§5）。然而，诺顿的量子超级任务在物理应用中已经出现，并在 Duncan 和 Niedermaier 提出的微扰量子场论框架中被发现自然地出现（2013，附录 B）。

示例 2：Hepp 测量

尽管量子系统有时可能处于可测量状态的纯叠加态，但当它们与量子系统相互作用时，我们从未观察到测量设备处于这种状态。相反，我们的测量设备似乎总是显示出确定的值。为什么？Hepp（1972）提出使用量子超级任务模拟测量过程来解释这一现象。这个例子由贝尔（1987 年，§6）广为流传，并由万（1980 年）和巴布（1988 年）提出作为解决测量问题的方法。

这里是一个玩具示例，用来说明这个想法。假设我们将一个理想的测量设备建模为由无限多个费米子组成。我们想象费米子彼此之间不相互作用，但在我们进行测量时，有限数量的费米子将与我们的目标系统耦合。因此，描述给定测量的可能结果的可观测量将是与一些有限数量 n 的可观测量对应的乘积。

A=A1⊗A2⊗⋯⊗An⊗I⊗I⊗I⊗⋯

限制每次只有有限数量的费米子，会将状态的希尔伯特空间分割成特殊的子空间，称为超选择扇区。当|ψ⟩ 和|ϕ⟩ 来自不同的扇区时，任何形如 a|ψ⟩+b|ϕ⟩ 的叠加态，其中|a|2+|b|2=1，都将是一个混合态。特别地，描述所有费米子都处于 z 自旋向上状态的空间与所有费米子都处于自旋向下状态的空间属于不同的超选择扇区。虽然对于新手来说可能会感到困惑，但任何涉及超选择的教科书都会提到这一点。这使我们能够构建一个有趣的超级任务来描述测量过程。以下是 Bell（1987）给出的简化版本。

假设我们想要测量一个单个费米子。我们将其建模为一个波函数，它在测量设备中每个费米子的位置旁边穿过，与设备中的每个费米子进行局部相互作用（图 1.5.2）。相互作用被设置成这样的方式，每个费米子都在有限的时间内通过，并且在过程完成后，测量设备会指示被测量费米子的原始状态是什么。特别地，假设单个费米子开始处于 z 自旋向上状态。然后，在它穿过无限多个费米子之后，它们都将被发现处于 z 自旋向上状态。如果单个费米子开始处于 z 自旋向下状态，那么无限多个费米子都将处于 z 自旋向下状态。如果单个费米子处于叠加态呢？那么无限多个费米子将包含一些 z 自旋向上和 z 自旋向下状态的混合。

![Bell's implementation of the Hepp measurement supertask](https://plato.stanford.edu/entries/spacetime-supertasks/fig152.gif)

图 1.5.2. 贝尔对 Hepp 测量超级任务的实现。

Hepp 发现，由于该系统的超选择结构，这个测量设备可以接受能够指示单个费米子原始状态的混合态，即使后者开始于纯叠加态。假设我们将测量设备中第 n 个费米子的 z 自旋可观测量表示为，sn=I⊗I⊗⋯(ntimes)⋯⊗σz⊗I⋯。我们现在构造一个新的可观测量，给定为，

 S=limn→∞1n(s1+s2+⋯+sn)。

这个可观测量具有这样的属性，即如果|ψ⟩ 和|ϕ⟩ 都位于与测量设备中的所有费米子都处于 z 自旋向上状态的状态相同的超选择扇区中，则 ⟨ψ，Sϕ⟩=1。如果它们位于与全部向下状态相同的超选择扇区中，则它还具有 ⟨ψ，Sϕ⟩=−1 的属性。但更有趣的是，假设我们要测量的目标费米子处于 z 自旋向上和 z 自旋向下状态的纯叠加态中。然后，在它经过测量设备中的所有费米子之后，该测量设备将处于形式为 a|↑⟩+b|↓⟩ 的叠加态中，其中|↑⟩ 是设备中所有费米子都自旋向上的状态，|↓⟩ 是它们都自旋向下的状态。由于|↑⟩ 和|↓⟩ 位于不同的超选择扇区中，因此它们的叠加态必须是一个混合态。换句话说，即使目标费米子的状态是纯叠加态，该模型也允许测量设备指示目标费米子的纯态，而不需要设备本身处于纯叠加态。

支撑该模型的超级任务需要无限次的相互作用。正如 Hepp 和 Bell 所描述的那样，该模型是不现实的，因为它需要无限长的时间。然而，Wan（1980 年）和 Bub（1988 年）证明了类似的系统可以在有限时间内发生。乍一看，他们的方法似乎是一个有希望的测量模型。然而，Landsman（1991 年）指出，在两个层面中，它都是不足的：要么动力学不是自同构的（对于这样的系统来说，这相当于幺正性），要么任务不能在有限时间内完成。Landsman（1995 年）认为，对于量子系统的现实局部描述来说，这两种结果都是不可信的。

示例 3：连续测量

在所谓的量子 Zeno 效应中发现了另一个量子超级任务。这篇文献以一个问题开始：如果我们不断监测一个量子系统，比如一个不稳定的原子，会发生什么？预测的效应是，即使它是一个本来会迅速衰变的不稳定原子，系统也不会发生变化。

Misra 和 Sudarshan（1977）提出使用类似于 Zeno 的超级任务来精确地定义“持续监测”的概念。想象一个不稳定的原子根据某种幺正演化定律 Ut 发展。假设我们通过上述 Zeno 的递归形式来测量原子是否衰变。也就是说，我们在时间 t 测量它，但也在时间 t/2、时间 t/4 之前以及时间 t/8 等测量它。设 E 是与粒子初始未衰变状态相对应的投影。在超级任务的每个阶段找到原子未衰变对应于序列，

EUtE,EUt/2E,EUt/4E,EUt/8E,….

Misra 和 Sudarshan 将这个序列用作连续测量的模型，假设上述序列收敛到一个算符 T(t)=E，并且对于所有大于或等于零的时间 t 都是如此。目的是捕捉原子从固定时间 t=0 开始持续监测的说法。他们从这个假设中证明，对于大多数合理的量子系统，如果初始状态在未衰变的意义上是未确定的，即 Tr(ρE)=1，则原子在任何给定的时间间隔 [0,t] 内衰变的概率等于零。也就是说，持续监测意味着原子永远不会衰变。

这些想法引发了大量的回应文献。举例来说：Ghirardi 等人(1979)和 Pati(1996)反对这种类似 Zeno 的量子测量模型，认为这种模型违反了量子理论的其他性质，如时间-能量不确定关系，他们认为这应该阻止上述超级任务序列中的测量以任意高的频率进行。Bokulich(2003)回应说，尽管如此，当测量与幺正演化对易时，例如当 E 是投影到一个能量本征态上时，仍然可以进行这样的超级任务。

## 2. 相对论时空中的超级任务

在牛顿物理学中，时间对所有观察者来说以相同的速率流逝。如果爱丽丝和鲍勃都参加了爱丽丝的 20 岁和 21 岁生日派对，两个人之间的经过时间都是一年。（无论爱丽丝或鲍勃在两个事件之间做什么或去哪里，这都是真实的。）相对论物理学中情况并不那么简单。事件之间的经过时间是相对于一个人在它们之间通过时空的路径而言的。事实证明，这一事实打开了一种新型超级任务的可能性。让我们更详细地研究一下这种可能性。

### 2.1 相对论时空中的时间

广义相对论的一个模型，即时空，是一个二元组（M，g）。它代表了与该理论兼容的可能宇宙。这里，M 是一个事件流形。它给出了宇宙的形状。（我们熟悉许多二维流形：平面，球体，环面等等。）M 上的每个点代表了时空中的一个局部事件。超新星爆炸（适当理想化）是一个事件。第一次接吻（适当理想化）也是一个事件。登月也是如此。但是 1969 年 7 月 20 日不是一个事件。月球也不是一个事件。

流形对于表示事件非常有用。但度量 g 决定了这些事件之间的关系。一个人是否可以从这个事件到达那个事件？如果可以，那么人们在它们之间记录了多少经过的时间？度量 g 告诉我们。在每个事件中，g 分配了一个双锥结构。锥结构可以从事件到事件改变；我们只要求它们平滑地改变。通常，我们使用广义相对论的模型，可以将每个双锥的两个叶瓣标记为“过去”和“未来”，而不会出现不连续性。在接下来的内容中，我们将这样做。（见图 2.1.1）

![Events in spacetime and the associated double cones](https://plato.stanford.edu/entries/spacetime-supertasks/fig211.gif)

图 2.1.1. 时空中的事件和相关的双锥体。

直观地说，事件处的双锥结构标志着光的速度。通过时空的轨迹穿过这些“光锥”的未来叶瓣内部是保持低于光速的可能路径。这样的轨迹是一个世界线，原则上可以被一个人穿越。现在，有些事件无法通过世界线连接。但是如果两个事件可以通过世界线连接，那么有无数条世界线连接它们。

每条世界线都有一个由度规 g 测量的“长度”，这个长度是沿着世界线经过的时间。在一个可以通过世界线连接的流形 M 上取两个事件。这两个事件之间的经过时间可能在一条世界线上很长，在另一条世界线上很短。直观地说，如果一条世界线保持接近锥体结构的边界（即轨迹“接近光速”），那么经过的时间相对较短。（见图 2.1.2）事实上，事实证明，如果两个事件可以通过一条世界线连接，那么对于任何数 t>0，都存在一条连接这些事件的世界线，其经过时间小于 t！

![Elapsed time is worldline dependent](https://plato.stanford.edu/entries/spacetime-supertasks/fig212.gif)

图 2.1.2。经过的时间取决于世界线。

### 2.2 Malament-Hogarth 时空

在相对论物理中，经过的时间相对于世界线是相对的，这表明了一种新的分叉超级任务。这个想法很简单。（以下想法的一个版本见 Pitowsky 1990。）两个人，爱丽丝和鲍勃，在一个事件 p（超级任务的开始）相遇。然后，爱丽丝沿着一个有限经过时间的世界线走到一个给定的事件 q（超级任务的结束）。另一方面，鲍勃走另一条路线；他沿着一个有无限经过时间的世界线走。鲍勃可以利用这个无限经过时间来进行一个不需要在有限步骤后停止的计算。例如，鲍勃可以检查所有可能的哥德巴赫猜想的反例。（哥德巴赫猜想是这样一个陈述：每个大于 2 的偶数 n 都可以表示为两个质数的和。目前尚不知道这个猜想是否成立。可以通过逐个检查每个实例化的陈述对于 n=4、n=6、n=8、n=10 等是否成立来解决这个问题。）如果计算停止，鲍勃会在 q 处向爱丽丝发送一个信号来告知。如果计算没有停止，就不会发送这样的信号。结果是，经过有限的时间，爱丽丝就能知道在 q 处的潜在无限计算的结果。

让我们再多做一些工作，使这个想法更加明确。我们说半曲线是一个从某个事件开始，并在未来方向尽可能延伸的世界线。接下来，一个事件 q 的观测过去 OP(q)是所有事件 x 的集合，这些事件有一个从 x 开始并在 q 结束的世界线。直观地说，（慢于光速的）信号可以从事件 x 发送到事件 q，当且仅当 x 在集合 OP(q)中。（见图 2.2.1。）

![The observational past of an event and a halfcurve](https://plato.stanford.edu/entries/spacetime-supertasks/fig221.gif)

图 2.2.1. 一个事件和一个半曲线的观测过去。信号可以从 OP(q)中的每个点发送到 q。不能从半曲线 γ 上的任何点发送信号到 q。

我们现在准备定义广义相对论模型的类别，这些模型允许上述所提到的分叉超级任务的类型（Hogarth 1992, 1994）。

> 定义。如果存在事件 q 在 M 中以及一个在 M 中具有无限经过时间的半曲线 γ，使得 γ 包含在 OP(q)中，那么时空(M,g)就是 Malament-Hogarth 的。

我们可以看到这个定义与上述故事相对应。Bob 沿着半曲线 γ 行进并记录了无限经过时间。此外，在 Bob 的世界线上的任何事件上，Bob 都可以向事件 q 发送信号，而 Alice 会在那里找到计算结果；这是因为 γ 包含在 OP(q)中。请注意，Alice 的世界线和故事中提到的起点 p 并没有出现在定义中；它们只是不需要。半曲线 γ 必须从某个事件开始-这个事件就是我们的起点 p。由于 p 在 OP(q)中，从 p 到 q 有一条世界线。我们将其视为 Alice 的世界线。可以证明这条世界线必须有一个有限的经过时间。

是否存在满足定义的时空？是的。让 M 成为标准 t,x 坐标下的二维平面。让度规 g 使得光锥在 t 方向上定向，并且当 x 的绝对值趋近于无穷大时打开。得到的时空（反德西特时空）是 Malament-Hogarth（见图 2.2.2）。

![Antide Sitter Spacetime is MalamentHogarth](https://plato.stanford.edu/entries/spacetime-supertasks/fig222.gif)

图 2.2.2. 反德西特时空是 Malament-Hogarth。可以从半曲线 γ 上的每个点向 q 发送信号。

### 2.3 Malament-Hogarth 时空有多合理？

在前一节中，我们展示了广义相对论模型的存在，这些模型似乎允许一种分叉的超级任务。在这里，我们问：这些模型是否“物理上合理”？Earman 和 Norton（1993 年，1996 年）以及 Etesi 和 Németi（2002 年）提出了关于 Malament-Hogarth 时空的一些潜在物理问题。首先，我们希望 Bob 的世界线是合理可行的。在上面的反德西特模型中，半曲线 γ 的总加速度是无限的。Bob 需要无限的燃料才能穿越它！（Malament 1985）

反德西特时空的另一个问题是出现了“发散的蓝移”现象。直观上，Bob 发送给 Alice 的任何信号的频率都会随着他的前进而越来越大。最终，即使是最微小的热噪声也会被放大到几乎无法进行通信的程度。因此，如果反高斯巴赫猜想的反例出现得很晚（或根本不出现），那么 Alice 是否能够知道这一点就不清楚了。

可以找到一些 Malament-Hogarth 时空，可以避免上述两个问题（Manchak 2010; Andréka 等，2018）。例如，让 M 成为标准的 t,x 坐标系中的二维平面，然后沿着 t 轴“卷起”。让度规 g 使光锥在 t 方向上定向，并且从点到点不变。（见图 2.3.1）

![An acausal MalamentHogarth spacetime](https://plato.stanford.edu/entries/spacetime-supertasks/fig231.gif)

图 2.3.1. 一个非因果的 Malament-Hogarth 时空。

因为世界性可以环绕圆柱体，对于任何事件 q，OP(q)=M。这使得在选择 Bob 的世界线 γ 时有很大的自由度。事实上，我们可以选择它使得总加速度为零-不需要燃料来穿越它。此外，我们可以选择它使得没有发散的蓝移现象（参见 Earman 和 Norton 1993）。但是，不幸的是，我们有一个新问题：时空是非因果的。一个世界线可以从同一事件开始和结束，从而实现一种“时间旅行”。目前尚不清楚允许时间旅行的时空是否在物理上合理（参见 Smeenk 和 Wüthrich 2011）。事实证明，还可以构造更复杂的例子，避免了迄今为止提到的所有潜在问题以及更多问题（Manchak 2010）。但是这样的例子包含了可能不合理的时空“空洞”（Manchak 2009; Doboszewski 2019）。需要进一步研究以确定是否也可以克服这些问题。

我们最后得出一个潜在问题，它威胁着使所有的 Malament-Hogarth 时空在物理上不合理。Penrose（1979）猜测所有在物理上合理的时空都不会出现某种类型的“裸奇点”和它们带来的确定性崩溃。Penrose 的猜想是否正确是一个备受争议的问题（Earman 1995）。但事实证明，每个 Malament-Hogarth 时空都存在这些裸奇点（Hogarth 1992）。即使如此，在这样的时空中保证了确定性的崩溃，似乎也不排除从初始数据中可能实现 Malament-Hogarth“机器”带来超级任务的可能性（Earman 等人 2016; Manchak 2018）。回顾一下，我们发现 Malament-Hogarth 时空是否只是广义相对论形式主义的产物，或者它们所暗示的分叉超级任务是否可以在我们自己的宇宙中实现，这仍然是一个悬而未决的问题。


## Bibliography

* Andréka, H., Madarász, J., Németi, I., Németi, P. and G. Székely, 2018, “Relativistic Computation”, in M. Cuffaro and S. Fletcher (eds.), *Physical Perspectives on Computation, Computational Perspectives on Physics*, Cambridge: Cambridge University Press, 195–215.
* Atkinson, D., 2007, “Losing energy in classical, relativistic and quantum mechanics”, *Studies in History and Philosophy of Modern Physics*, 38(1): 170–180.
* –––, 2008, “A relativistic zeno effect. *Synthese*”, 160(1): 5–12.
* Atkinson, D. and Johnson, P., 2009, “Nonconservation of energy and loss of determinism I. Infinitely many colliding balls”, *Foundations of Physics*, 39(8): 937–957.
* –––, 2010, “Nonconservation of energy and loss of determinism II. Colliding with an open set”, *Foundations of Physics*, 40(2): 179–189.
* Atkinson, D. and Peijnenburg, J., 2014, “How some infinities cause problems in classical physical theories”, In Allo, P. and Kerkhoeve, B. V., editors, *Modestly radical or radically modest: Festschrift for Jean Paul Van Bendegem on the Occasion of his 60th Birthday*, pages 1–10. London: College Publications.
* Allis, V. and T. Koetsier, 1991, “On Some Paradoxes of the Infinite”, *The British Journal for the Philosophy of Science*, 42: 187–194.
* –––, 1995, “On Some Paradoxes of the Infinite II”, *The British Journal for the Philosophy of Science*, 46: 235–247.
* Barrett, J. A. and F. Arntzenius, 1999, “An infinite decision puzzle”, *Theory and Decision*, 46(1), 101–103.
* –––, 2002, “Why the infinite decision puzzle is puzzling”, *Theory and decision* 52(2): 139–147.
* Bashirov, A.E., 2014, *Mathematical Analysis Fundamentals* Waltham, MA: Elsevier.
* Bell, J. S., 2004, *Speakable and unspeakable in quantum mechanics: Collected papers on quantum philosophy*. Cambridge: Cambridge University Press.
* Benacerraf, P., 1962, “Tasks, Super-Tasks, and the Modern Eleatics”, *The Journal of Philosophy*, 59(24): 765–784.
* Benardete, J. A., 1964, *Infinity: An essay in metaphysics.*, Oxford: Oxford University Press.
* Black, M., 1951, “Achilles and the Tortoise”, *Analysis*, 11(5): 91–101.
* Blum, L., Cucker, F., Shub, M. and Smale, S., 1998, *Complexity and real computation*, New York: Springer-Verlag.
* Bokulich, A., 2003, “Quantum measurements and supertasks”, *International Studies in the Philosophy of Science*, 17(2): 127–136.
* Bub, J., 1988, “How to solve the measurement problem of quantum mechanics”, *Foundations of Physics* 18(7): 701–722.
* Carl, M., Fischbach, T., Koepke, P., Miller, R., Nasfi, M. and Weckbecker, G., 2010, “The basic theory of infinite time register machines”, *Archive for Mathematical Logic* 49(2): 249–273.
* Copeland, B. J., 2015, “The Church-Turing Thesis”, The Stanford Encyclopedia of Philosophy (Summer 2015 Edition), Edward N. Zalta (ed.), URL = <https://plato.stanford.edu/archives/sum2015/entries/church-turing/>.
* Deolalikar, V., Hamkins, J.D. and Schindler, R., 2005, “P ≠ NP ∩ co-NP for infinite time Turing machines”, *Journal of Logic and Computation*, 15(5): 577–592.
* Doboszewski, J., 2019, “Epistemic Holes and Determinism in Classical General Relativity”, *The British Journal for the Philosophy of Science*, 71: 1093–1111. doi:10.1093/bjps/axz011
* Dolev, Y., 2007, “Super-tasks and Temporal Continuity”, *Iyyun: The Jerusalem Philosophical Quarterly*, 56: 313–329.‎
* Duncan, A. and M. Niedermaier, 2013, “Temporal breakdown and Borel resummation in the complex Langevin method”, *Annals of Physics*, 329: 93–124.
* Earman, J., 1986, *A Primer On Determinism*, Dordrecht, Holland: D. Reidel Publishing Company.
* –––, 1995, *Bangs, Crunches, Wimpers, and Shrieks.* Oxford University Press.
* Earman, J. and J. Norton, 1993, “Forever is a Day: Supertasks in Pitowsky and Malament-Hogarth Spacetimes”, *Philosophy of Science*, 60: 22–42.
* –––, 1996, “Infinite Pains: the Trouble with Supertasks”, in A. Morton and S. Stich (eds), *Benacerraf and His Critics*, Oxford: Blackwell, 231–261.
* Earman, J., Wüthrich, C., and J. Manchak, 2016, “Time Machines”, The Stanford Encyclopedia of Philosophy (Winter 2016 Edition), Edward N. Zalta (ed.), URL = <https://plato.stanford.edu/archives/win2016/entries/time-machine/>.
* Etesi, G. and I. Németi, 2002, “Non-Turing Computations Via Malament-Hogarth Space-Times”, *International Journal of Theoretical Physics*, 41: 341–370.
* Gamow, G., 1947, *One Two Three… Infinity: Facts and Speculations of Science*. Dover.
* Ghiradi, G.C., C. Omero, T. Weber and A. Rimini, 1979, “Small-time behaviour of quantum nondecay probability and Zeno’s paradox in quantum mechanics”, *Nuovo Cimento*, 52(A): 421
* Grünbaum, A., 1969, “Can an Infinitude of Operations be performed in Finite Time?” *British Journal for the Philosophy of Science*, 20: 203–218.
* Gwiazda, J., 2012, “A proof of the impossibility of completing infinitely many tasks”, *Pacific Philosophical Quarterly*, 93: 1–7.
* Hamkins, J. D. and Lewis, A., 2000, “Infinite time Turing machines”, *Journal of Symbolic Logic*, 65(2): 567–604.
* Hamkins, J. D. and Miller, R. G., 2009, “Post’s problem for ordinal register machines: an explicit approach”, *Annals of Pure and Applied Logic*, 160(3): 302–309.
* Hamkins, J.D., Miller, R., Seabold, D., and Warner, S., 2008, “Infinite time computable model theory”, in New Computational Paradigms: Changing Conceptions of What is Computable, S. B. Cooper, B. Löwe, and A. Sorbi (Eds.), New York: Springer, pgs. 521–557.
* Hamkins, J.D. and Welch, P.D., 2003, “Pf≠NPf for almost all f”, *Mathematical Logic Quarterly*, 49(5): 536–540.
* Hepp, K., 1972, “Quantum theory of measurement and macroscopic observables”, *Helvetica Physica Acta* 45(2): 237–248.
* Hogarth, M., 1992, “Does General Relativity Allow an Observer to View an Eternity in a Finite Time?” *Foundations of Physics Letters*, 5: 173–181.
* Hogarth, M., 1994, “Non-Turing Computers and Non-Turing Computability”, *PSA: Proceedings of the Biennial Meeting of the Philosophy of Science Association*, 1: 126–138.
* Immerman, N., 2016, “Computability and Complexity”, The Stanford Encyclopedia of Philosophy (Spring 2016 Edition), Edward N. Zalta (ed.), forthcoming URL = <https://plato.stanford.edu/archives/spr2016/entries/computability/>.
* Koepke, P., 2005, “Turing computations on ordinals” *Bulletin of Symbolic Logic*, 11(3): 377–397.
* –––, 2006, “Infinite Time Register Machines”, In *Logical Approaches to Computational Barriers, Second Conference on Computability in Europe, CiE 2006, Swansea, UK, July 2006, Proceedings*, A. Beckmann, U. Berger, B. Löwe, J. V. Tucker (Eds.), Berlin: Springer-Verlag, pgs. 257–266, Lecture Notes in Computer Science 3988.
* –––, 2009, “Ordinal Computability”, In *Mathematical Theory and Computational Practice. 5th Conference on Computability in Europe, CiE 2009, Heidelberg, Germany, July 19–24, 2009. Proceedings*, K. Ambos-Spies, B. Löwe, W. Merkle (Eds.), Heidelberg: Springer-Verlag, pgs. 280–289, Lecture Notes in Computer Science 5635.
* Koepke, P. and Miller, R., 2008, “An enhanced theory of infinite time register machines”. In *Logic and Theory of Algorithms. 4th Conference on Computability in Europe, CiE 2008 Athens, Greece, June 15–20, 2008, Proceedings*, Beckmann, A., Dimitracopoulos, C. and Löwe, B. (Eds.), Berlin: Springer, pgs. 306–315, Lecture Notes in Computer Science 5028.
* Koepke, P. and Seyfferth, B., 2009, “Ordinal machines and admissible recursion theory”, *Annals of Pure and Applied Logic*, 160(3): 310–318.
* Kremer, P., 2015, “The Revision Theory of Truth”, The Stanford Encyclopedia of Philosophy (Summer 2015 Edition), Edward N. Zalta (ed.), URL = <https://plato.stanford.edu/archives/sum2015/entries/truth-revision/>.
* Kühnberger, K.-U., Löwe, B., Möllerfeld, M. and Welch, P.D., 2005, “Comparing inductive and circular definitions: parameters, complexities and games”, *Studia Logica*, 81: 79–98.
* Landsman, N. P., 1991, “Algebraic theory of superselection sectors and the measurement problem in quantum mechanics”, *International Journal of Modern Physics A* 6(30): 5349–5371.
* –––, 1995, “Observation and superselection in quantum mechanics”, *Studies in History and Philosophy of Modern Physics*, 26(1): 45–73.
* Lanford, O. E. (1975) “Time Evolution of Large Classical Systems”, in *Dynamical systems, theory and applications*, J. Moser (Ed.), Springer Berlin Heidelberg, pgs. 1–111.
* Littlewood, J. E., 1953, *A Mathematician’s Miscellany*, London: Methuen & Co. Ltd.
* Löwe, B., 2001, “Revision sequences and computers with an infinite amount of time”, *Journal of Logic and Computation*, 11: 25–40.
* –––, 2006, “Space bounds for infinitary computation”, in *Logical Approaches to Computational Barriers, Second Conference on Computability in Europe, CiE 2006, Swansea, UK, July 2006, Proceedings*, A. Beckmann, U. Berger, B. Löwe, J. V. Tucker (eds.), Berlin: Springer-Verlag, pgs. 319–329, Lecture Notes in Computer Science 3988.
* Löwe, B. and Welch, P. D., 2001, “Set-Theoretic Absoluteness and the Revision Theory of Truth”, *Studia Logica*, 68: 21–41.
* Mather, J. N. and R. McGehee, 1975, “Solutions of the Collinear Four-Body Problem Which Become Unbounded in a Finite Time”, in *Dynamical systems, theory and applications*, J. Moser (Ed.), Springer Berlin Heidelberg, pgs. 573–597.
* Misra, B., and E. C. G. Sudarshan, 1977, “The Zeno’s paradox in quantum theory”, *Journal of Mathematical Physics*, 18(4): 756–763.
* Malament, D., 1985, “Minimal Acceleration Requirements for ”Time Travel“ in Gödel Space-Time”, *Journal of Mathematical Physics*, 26: 774–777.
* –––, 2008, “Norton’s Slippery Slope”, *Philosophy of Science*, 75: 799–816.
* Manchak, J., 2009, “Is Spacetime Hole-Free?” *General Relativity and Gravitation*, 41: 1639–1643.
* –––, 2010, “On the Possibility of Supertasks in General Relativity”, *Foundations of Physics*, 40: 276–288.
* –––, 2018, “Malament-Hogarth Machines”, *The British Journal for the Philosophy of Science*, 71: 1143–1153. doi:10.1093/bjps/axy023
* Mclaughlin, William I., 1998, “Thomson’s lamp is dysfunctional”, *Synthese*, 116: 281–301.
* Norton, J. D., 1999, “A Quantum Mechanical Supertask”, *Foundations of Physics*, 29(8): 1265–1302.
* Penrose, R., 1979, “Singularities and Time-Asymmetry”, in S. Hawking and W. Israel (eds.), *General Relativity: And Einstein Centenary Survey*, Cambridge: Cambridge University Press, 581–638.
* Pati, A. K., 1996, “Limit on the frequency of measurements in the quantum Zeno effect”, *Physics Letters A* 215(1–2): 7–13.
* Peijnenburg, J. and Atkinson, D., 2008, “Achilles, the tortoise, and colliding balls”, *History of Philosophy Quarterly*, 25(3): 187–201.
* Pérez Laraudogoita, J., 1996, “A beautiful supertask”, *Mind*, 105(417): 81–83.
* –––, 1997, “Classical particle dynamics, indeterminism and a supertask”, *The British Journal for the Philosophy of Science*, 48(1): 49–54.
* –––, 1998, “Infinity Machines and Creation Ex Nihilo”, *Synthese*, 115(2): 259–265.
* –––, 1999, “Earman and Norton on Supertasks that Generate Indeterminism”, *The British Journal for the Philosophy of Science*, 50: 137–141.
* Pérez Laraudogoita, J., M. Bridger and J. S. Alper, 2002, “Two Ways Of Looking At A Newtonian Supertask”, *Synthese*, 131(2): 173–189
* Pitowsky, I., 1990, “The Physical Church Thesis and Physical Computational Complexity”, *Iyyun*, 39: 81–99.
* Rin, B., 2014, “The Computational Strengths of α-tape Infinite Time Turing Machines”, *Annals of Pure and Applied Logic*, 165(9): 1501–1511.
* Ross, S. E., 1976, *A First Course in Probability*, Macmillan Publishing Co. Inc.
* Sacks, G. E., 1990, *Higher recursion theory*, Heidelberg: Springer-Verlag, Perspectives in mathematical logic.
* Salmon, W., 1998, “A Contemporary Look at Zeno’s Paradoxes: An Excerpt from *Space, Time and Motion*”, in *Metaphysics: The Big Questions*, van Inwagen and Zimmerman (Eds.), Malden, MA: Blackwell Publishers Ltd.
* Schindler, R., 2003, “P ≠ NP for infinite time Turing machines”, *Monatshefte der Mathematik* 139(4): 335–340.
* Smeenk, C. and C. Wüthrich, 2011, “Time Travel and Time Machines”, in C. Callender (ed.), *The Oxford Handbook of Philosophy of Time*, Oxford: Oxford University Press, 577–630.
* Thomson, J. F., 1954, “Tasks and super-tasks”, *Analysis*, 15(1): 1–13.
* Uzquiano, G., 2011, “Before-Effect without Zeno-Causality” *Noûs*, 46(2): 259–264.
* Van Bendegem, J. P., 1994, “Ross’ Paradox Is an Impossible Super-Task”, *The British Journal for the Philosophy of Science*, 45(2): 743–748.
* Wan, K-K., 1980, “Superselection rules, quantum measurement, and the Schrödinger’s cat”, *Canadian Journal of Physics*, 58(7): 976–982.
* Welch, P. D. 2001, “On Gupta-Belnap revision theories of truth, Kripkean fixed points, and the Next stable set”, *Bulletin for Symbolic Logic*, 7: 345–360.
* –––, 2008, “The extent of computation in Malament-Hogarth spacetimes”, *British Journal for the Philosophy of Science*, 59(4): 659–674.
* Weyl, H., 1949, *Philosophy of Mathematics and Natural Science*, Princeton: Princeton University Press.
* Winter, J., 2009, “Is P=PSPACE for Infinite Time Turing Machines?”, in Infinity in logic and computation. Revised selected papers from the International Conference (ILC 2007) held at the University of Cape Town (UCT), Cape Town, November 3–5, 2007. M. Archibald, V. Brattka, V. Goranko and B. Löwe (Eds.), Berlin: Springer-Verlag, pgs. 126–137. Lecture Notes in Computer Science 5489.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=spacetime-supertasks). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/spacetime-supertasks/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=spacetime-supertasks&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](http://philpapers.org/sep/spacetime-supertasks/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

* Malament, D., 2009, “[Note on Carnap’s ‘On the Dependence of the Properties of Space Upon Those of Time’”](http://philsci-archive.pitt.edu/4909/), unpublished manuscript, PhilSci-Archive.
* Laraudogoitia, Jon Pérez, “Supertasks,” *Stanford Encyclopedia of Philosophy* (Spring 2016 Edition), Edward N. Zalta (ed.), URL = <https://plato.stanford.edu/archives/spr2016/entries/spacetime-supertasks/>. [This was the previous entry on supertasks in the *Stanford Encyclopedia of Philosophy* — see the [version history](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=spacetime-supertasks).]

## Related Entries

[Church-Turing Thesis](https://plato.stanford.edu/entries/church-turing/) | [computability and complexity](https://plato.stanford.edu/entries/computability/) | [computation: in physical systems](https://plato.stanford.edu/entries/computation-physicalsystems/) | [determinism: causal](https://plato.stanford.edu/entries/determinism-causal/) | [truth: revision theory of](https://plato.stanford.edu/entries/truth-revision/) | [Zeno of Elea: Zeno’s paradoxes](https://plato.stanford.edu/entries/paradox-zeno/)

[Copyright © 2022](https://plato.stanford.edu/info.html#c) by  
[JB Manchak](http://www.lps.uci.edu/~jmanchak/) <[*jmanchak@uci.edu*](mailto:jmanchak%40uci%2eedu)>  
Bryan W. Roberts <[*B.W.Roberts@lse.ac.uk*](mailto:B%2eW%2eRoberts%40lse%2eac%2euk)>

