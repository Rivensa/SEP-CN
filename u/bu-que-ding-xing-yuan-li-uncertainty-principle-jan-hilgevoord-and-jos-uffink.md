# 不确定性原理 Uncertainty Principle (Jan Hilgevoord and Jos Uffink)

*首次发表于 2001 年 10 月 8 日；实质性修订于 2016 年 7 月 12 日*

量子力学通常被认为是我们对物理世界进行基本和普遍描述的最佳候选物理理论。这个理论所采用的概念框架与经典物理学大相径庭。事实上，从经典物理到量子物理的转变标志着我们对物理世界理解的真正革命。

经典物理学假设所有物理量都可以被准确地同时赋予确定的值，而量子物理学否认了这种可能性，最典型的例子就是粒子的位置和动量。根据量子力学，给出粒子位置（动量）的精确度越高，就越无法确定其动量（位置）。这是关于位置和动量的量子力学不确定性原理的（简化和初步的表述）。不确定性原理在许多关于量子力学哲学含义的讨论中起着重要作用，特别是在关于所谓的哥本哈根解释的一致性的讨论中，这是由海森堡和玻尔等创始人支持的解释。

这并不意味着不确定性原理是经典物理和量子物理之间概念差异的唯一方面：量子力学对于（非）局域性、纠缠和身份等概念的影响同样对经典直觉造成了混乱。

---

## 1. 引言

不确定性原理无疑是量子力学中最著名的方面之一。它经常被认为是量子力学与经典物理理论之间最显著的区别特征。粗略地说，不确定性原理（对于位置和动量）表明一个物理系统的位置和动量不能同时被确定为精确的值。相反，这些量只能以一些特征性的“不确定性”来确定，这些不确定性不能同时变得任意小。但是，这个原理的确切含义是什么？它真的是量子力学的原理吗？（在他的原始工作中，海森堡只谈到了不确定关系。）特别是，说一个量只能确定到某种不确定性，这是什么意思？这些是我们将在接下来探讨的主要问题，重点关注海森堡和玻尔的观点。

“不确定性”这个概念在物理文献中有几种不同的含义。它可能指的是观察者对某个量的不了解，或者是测量某个量的实验误差，或者是某个量的定义上的模糊性，或者是一组类似准备的系统中的统计分布。此外，对于这种不确定性，还使用了几种不同的名称：不准确性、扩散、不精确性、不确定性、不确定性、不确定性、纬度等等。正如我们将看到的，即使是海森堡和玻尔对于量子力学的不确定性也没有决定使用一个单一的术语。在讨论量子力学中哪个名称最合适之前，我们使用“不确定性原理”这个名称，仅仅是因为它在文献中最常见。

## 2. 海森堡

### 2.1 海森堡的不确定关系之路

海森堡在 1927 年的一篇文章中引入了他著名的关系，题为《关于量子理论运动学和力学的直观内容》。这个标题的（部分）翻译是：“关于量子理论运动学和力学的直观内容”。这里，术语“直观”特别引人注目。显然，这是那些德语词汇之一，无法明确翻译成其他语言。Wheeler 和 Zurek（1983）将海森堡的标题翻译为“关于物理内容...”。他的著作集（Heisenberg 1984）将其翻译为“关于可感知内容...”，而 Cassidy 对海森堡的传记（Cassidy 1992）将这篇论文称为“关于感知内容...”。从字面上看，术语“直观”的最接近的翻译是“可视化的”。但是，与大多数语言一样，涉及视觉的词语并不总是字面上的意思。视觉广泛用作理解的隐喻，尤其是对于直接理解。因此，“直观”也可以理解为“可理解的”或“直观的”。[1]

为什么海森堡对量子力学的 Anschaulichkeit 问题如此关注？这个问题已经被许多评论者考虑过（Jammer 1974; Miller 1982; de Regt 1997; Beller 1999）。答案是，我们必须回溯一段时间。1925 年，海森堡为量子理论开发了第一个连贯的数学形式（Heisenberg 1925）。他的主要思想是，只有那些原则上可观测的量才应在理论中发挥作用，并且应避免所有试图形成原子内部发生的情况的图像。在原子物理学中，观测数据是通过光谱学获得的，并与原子跃迁相关联。因此，海森堡被引导去考虑“跃迁量”作为理论的基本要素。同年晚些时候，马克斯·玻恩意识到跃迁量遵循矩阵微积分的规则，这是一门当时并不像现在那样广为人知的数学分支。在一系列著名的论文中，海森堡、玻恩和约旦将这个想法发展成了矩阵力学版本的量子理论。

形式上，矩阵力学与经典力学相近。其核心思想是，所有物理量必须由无限自伴随矩阵（后来被认定为希尔伯特空间上的算符）表示。假设表示粒子的规范位置和动量变量的矩阵 Q 和 P 满足所谓的规范对易关系

QP−PQ=iℏ(1)

其中ℏ=h/2π，h 表示普朗克常数，粗体用于表示矩阵（或算符）。这个新理论通过包括电子自旋概念在理论框架中，取得了令人瞩目的实证成功，几乎涵盖了当时已知的所有光谱数据。

因此，当一年后埃尔温·薛定谔提出了一种被称为波动力学的替代理论时，这是一个巨大的惊喜。薛定谔假设原子中的电子可以被表示为一个振荡的电荷云，在空间和时间上根据波动方程连续演化。原子光谱中的离散频率不是由于像矩阵力学中的不连续跃迁（量子跃迁）而产生的，而是由于共振现象。薛定谔还证明了这两个理论是等价的。[2]

尽管如此，这两种方法在解释和精神上有很大的差异。海森堡避免使用可视化图像，并接受不连续跃迁作为一个原始概念，而薛定谔声称他的理论的优点是它是“anschaulich”（直观的）。在薛定谔的词汇中，这意味着该理论通过在空间和时间中不断演化的因果过程来表示观测数据。他认为这种“Anschaulichkeit”的条件是任何可接受的物理理论的基本要求。薛定谔并不是唯一一个欣赏他理论这一方面的人。许多其他领先的物理学家出于同样的原因被波动力学所吸引。在 1926 年之前的一段时间里，薛定谔的方法似乎在物理学界获得了比矩阵力学更多的支持，直到后来波动力学自身出现了严重问题。

可以理解的是，海森堡对这一发展感到不满。在 1926 年 6 月 8 日写给泡利的信中，他承认：“我越想物理部分的薛定谔理论，就越觉得恶心”，并且：“薛定谔关于他理论的直观性的描述，我认为是垃圾”（Pauli 1979: 328）。同样，这个德语术语在不同的评论者中有不同的翻译：如“垃圾”（Miller 1982）、“废话”（Beller 1999）、“胡说八道”（Cassidy 1992）、“胡扯”（Bacciagaluppi & Valentini 2009），或者更直接地翻译为“胡说八道”（Moore 1989；de Regt 1997）。然而，在他的发表著作中，海森堡表达了更加平衡的观点。在《自然科学》（1926）的一篇论文中，他总结了两种竞争理论同时发展所带来的奇特局面。尽管他认为薛定谔的解释是站不住脚的，但他承认矩阵力学没有提供使波动力学如此吸引人的直观性。他得出结论：

> 要获得一个无矛盾的直观解释，我们仍然缺少关于物质结构的一些重要特征。

他在 1927 年的论文中的目的正是提供这个缺失的特征。

### 2.2 海森堡的论证

现在让我们来看看导致海森堡不确定关系的论证。他首先重新定义了 Anschaulichkeit 的概念。而 Schrödinger 将这个术语与提供现象的因果时空图相联系，相比之下，海森堡则声明：

> 如果在所有简单情况下，我们可以从定性上理解实验结果，并且看到该理论不会导致任何矛盾，那么我们相信我们已经获得了对物理理论的 Anschaulich 理解（Heisenberg 1927: 172）。

他的目标当然是要表明，在这个新的词义上，矩阵力学可以像波动力学一样具有直观性。

为了做到这一点，他采取了一个操作性的假设：只有在指定了适当的实验来测量“粒子的位置”时，“粒子的位置”这样的术语才有意义。我们将称这个假设为“测量=意义原则”。一般来说，这样的实验并不缺乏，即使在原子物理领域也是如此。然而，实验永远不会完全准确。因此，我们应该准备好接受，一般来说，这些量的意义也只能确定到某种特征的不准确程度。

以测量电子位置的显微镜为例。这样的测量精度受到照射电子的光的波长的限制。因此，原则上可以通过使用波长非常短的光，例如γ射线，使位置测量达到任意精度。但对于γ射线，康普顿效应不能忽视：电子和照射光的相互作用应被视为至少一个光子与电子的碰撞。在这样的碰撞中，电子会受到反冲，扰乱其动量。此外，波长越短，动量变化越大。因此，海森堡认为，在粒子的位置准确知道的那一刻，它的动量就无法准确知道了。

> 在确定位置的瞬间，也就是光子被电子散射的瞬间，电子的动量发生了不连续的变化。这种变化与所使用的光的波长越小，也就是位置的确定越精确，变化就越大。在电子位置被确定的瞬间，它的动量只能知道与那种不连续变化相对应的大小；因此，位置确定得越精确，动量就越不确定，反之亦然。（海森堡 1927 年：174-5）

这是不确定性原理的第一个表述。以其现行形式而言，它是一个认识论原理，因为它限制了我们对电子的认识。根据“康普顿效应的基本公式”，海森堡估计了“不确定性”的数量级。

δpδq∼h(2)

他继续说：“在这种情况下，我们看到了关系 QP−PQ=iℏ的直接 anschaulich 内容。”

他继续考虑其他实验，旨在测量其他物理量，并获得了关于时间和能量的类似关系：

δtδE∼h(3)

和行动 J 和角度 w

δwδJ∼h(4)

他认为这对应于“众所周知”的关系

 tE−Et=iℏ 或 wJ−Jw=iℏ(5)

然而，这些概括并不像海森堡所建议的那样简单。特别是，在他关系（3）的几个例子中，时间变量的地位并不清楚（Hilgevoord 2005; 另见第 2.5 节）。

海森堡总结了他的研究结果，得出一个总体结论：在经典力学中使用的所有概念在原子过程领域中也是明确定义的。但是，作为一种纯粹的经验事实（rein erfahrungsgemäß），用于为一个量提供这样的定义的实验受到特定的不确定性的限制，遵循关系（2）-（4），这些关系禁止它们同时定义两个共轭的量。请注意，在这个表述中，重点略有转变：他现在谈论的是对概念定义的限制，即不仅仅是我们可以知道什么，而是我们可以有意义地说关于一个粒子的什么。当然，这个更强的表述是通过应用上述测量=意义原则得出的：如果像海森堡所声称的那样，没有实验可以同时精确测量两个共轭的量，那么这些量也不会同时明确定义。

海森堡的论文中有一个有趣的“补充证明”，提到了玻尔的批评意见，他在论文发表之后才看到这篇论文。玻尔指出，在显微镜实验中，重要的不是电子动量的变化，而是在同一实验中无法精确确定这种变化的情况。对这一异议的改进版本在海森堡 1930 年的芝加哥讲座中给出。

在这里（海森堡 1930 年：16），假设电子被波长为λ的光照射，并且散射光进入一个孔径角为ε的显微镜。根据经典光学定律，显微镜的精度取决于波长和孔径角；阿贝的“分辨能力”准则，即最小可辨别细节的大小，给出了

δq∼λsinε.(6)

另一方面，当散射光子进入显微镜时，其方向在角度ε内是未知的，从而使得电子的动量变化不确定，变化量为δp∼hsinελ(7)，再次导致结果(2)。

δp∼hsinελ(7)

leading again to the result [(2)](https://plato.stanford.edu/entries/qt-uncertainty/#ex2).

让我们现在更详细地分析海森堡的论证。请注意，即使在这个改进的版本中，海森堡的论证也是不完整的。根据海森堡的“测量=意义原理”，在给定的背景下，我们还必须指定“电子动量”这个短语的意义，以便理解这个动量是否会被位置测量改变。对于这个问题的解决方案可以在芝加哥讲座中找到（海森堡 1930 年：15）。在这里，他假设最初电子的动量是精确已知的，例如，它在先前的实验中已经用不精确度为δpi 的方式进行了测量，这个不精确度可以任意小。然后，用不精确度为δq 的方式测量其位置，之后再用不精确度为δpf 的方式测量其最终动量。这三个测量都可以以任意精度进行。因此，这三个量δpi、δq 和δpf 可以任意小。如果我们进一步假设在位置测量之前，初始动量没有发生变化，我们可以在位置测量之前谈论一个确定的动量。此外，我们可以对动量在位置测量期间发生变化的想法给出操作性的意义：第二次动量测量的结果（记为 pf）通常与初始值 pi 不同。实际上，我们还可以通过改变三个测量之间的时间来证明这种变化是不连续的。

让我们尝试看看，采用这种更详细的设置，是否可以完成海森堡的论证。我们现在已经能够给出电子动量变化（pf−pi）的经验意义。海森堡的论证声称，这种变化的数量级至少与位置测量的不精确度成反比：

|pf−pi|δq∼h(8)

然而，我们现在能得出动量只是不确定地定义的结论吗？当然不是。在位置测量之前，其值是 pi，在测量之后是 pf。也许有人会声称，在位置测量的那一瞬间，其值尚未确定，但我们可以通过约定来解决这个问题，例如，我们可以将动量在这一瞬间的平均值(pi+pf)/2 分配给它。但是，这样一来，动量在所有瞬间都是确定的，海森堡的不确定性原理的表述就不再成立。因此，上述试图完善海森堡的论证的尝试超出了其目标。

这个问题的解决方法可以在芝加哥讲座中找到。海森堡承认位置和动量可以被准确地知道。他写道：

> 如果电子的速度首先是已知的，然后位置被准确地测量，那么可以计算出位置测量之前的电子位置。对于这些过去的时间，δpδq 小于通常的界限。（海森堡 1930 年：15）

的确，海森堡说：“不确定关系不适用于过去”。

显然，当海森堡提到不确定性或不精确性时，他指的是这个量的值事先无法确定。在我们上面考虑的测量序列中，位置测量发生后动量的不确定性指的是在最终动量测量发生之前，动量的值并不固定。一旦进行了这个测量，并且显示出一个值 pf，不确定关系就不再适用；这些值隶属于过去。显然，海森堡关注的是不可预测性：关键不是粒子的动量因为位置测量而改变，而是它以不可预测的量发生改变。然而，总是可以通过后续对最终动量的测量以任意精度来测量和定义这种变化的大小。

尽管海森堡承认我们可以一致地将动量和位置的值归因于过去的电子，但他认为这种说法几乎没有价值。他指出，这些值永远不能用作对电子未来行为的预测的初始条件，也不能经过实验证实。我们是否将它们赋予物理实际性是个人品味的问题，正如他所说。海森堡自己的品味当然是否认它们的物理实际性。例如，他写道，

> 我相信可以简洁地阐述粒子的经典“路径”出现的方式如下：只有我们观察到它，这个“路径”才会存在。（海森堡 1927: 185）

显然，在他看来，测量不仅仅是为了给一个量赋予意义，它还为这个量创造了一个特定的值。这可以称为“测量=创造”原理。这是一个本体论原理，因为它陈述了物理上的真实性。

这就导致了以下的情景。首先，我们非常准确地测量了电子的动量。根据“测量=意义”，这意味着“粒子的动量”这个术语现在是明确定义的。此外，根据“测量=创造”原理，我们可以说这个动量在物理上是真实存在的。接下来，用不准确度为δq 来测量位置。在这一瞬间，粒子的位置变得明确定义，并且再次，我们可以将其视为粒子的物理属性。然而，动量现在已经改变了一个无法预测的量，大约为|pf−pi|∼h/δq。这个主张的意义和有效性可以通过随后的动量测量来验证。

那么问题是，我们应该给予电子在最终测量之前的动量什么样的地位？它是真实的吗？根据海森堡的观点，它不是真实的。在最终测量之前，我们能够给电子的最好描述是一些模糊的动量。这些术语在这里是以本体论的意义上使用的，用来描述电子的真实属性。

### 2.3 海森堡的不确定关系的解释

海森堡的关系很快被认为是哥本哈根解释量子力学的基石。仅仅几个月后，肯纳德（1927 年）就将它们称为新理论的“核心要素”。结合海森堡的观点，他们提供了理论的直观内容，并在后来关于哥本哈根解释的讨论中发挥了重要作用，形成了一种主导观点，即不确定关系被视为该理论的基本原理。

这些关系的解释经常受到争议。海森堡的关系是否表达了我们在量子系统上可以进行的实验的限制，从而限制了我们对这些系统的信息收集；或者它们是否表达了我们用来描述量子系统的概念的限制？或者，它们是否是本体论性质的限制，即它们断言量子系统在同一时间内根本没有确定的位置和动量值？这些解释之间的差异在关系所知的各种名称中部分体现出来，例如“不准确关系”，或者“不确定性”，“不确定性”或“不锐利关系”。这些观点之间的辩论已经被许多作者讨论过，但从未完全解决。在这里只需要做两个一般观察即可。

首先，很明显，在海森堡自己的观点中，所有上述问题都是相互关联的。事实上，我们已经看到他采用了一个操作性的“测量=意义”原则，根据这个原则，物理量的意义等同于存在一个试验来测量该量。同样，他的“测量=创造”原则使他能够将物理实际性归因于这些量。因此，海森堡的讨论在实验不准确性、认识论或本体论问题之间自由而迅速地转换。

然而，本体论问题似乎对他来说不太感兴趣。例如，有一段话（海森堡 1927 年：197），他在其中讨论了一个观点，即在我们的观测数据背后，可能仍然存在一个隐藏的现实，量子系统在其中对位置和动量具有确定的值，不受不确定关系的影响。他坚决否认这种构想是一种无益且毫无意义的猜测，因为正如他所说，物理学的目的只是描述可观测的数据。同样，在芝加哥讲座中，他警告说，人类语言允许发表没有经验内容但仍然在我们的想象中产生图像的陈述。他指出，

> 在使用“现实”、“实际”等词语时，应特别小心，因为这些词往往会导致刚才提到的类型的陈述。（海森堡 1930 年：11）

因此，海森堡也支持将他的关系解释为拒绝存在粒子同时对位置和动量具有确定值的现实。

第二个观察是，尽管对于海森堡来说，他的关系的实验、信息、认识论和本体论的表述只是同一个问题的不同方面，但对于那些不同意他的操作原则或物理学任务观点的人来说，情况并非如此。其他观点，例如，否定不确定关系的本体论解读，仍然是可行的。在三十年代的文献中经常可以找到这样的说法，即海森堡已经证明了将确定的位置和动量与粒子相关联是不可能的。但是，对于海森堡关系可以一致地附加的确切含义，相当大程度上取决于一个人对量子力学整体的偏好解释。由于对于这个后者问题还没有达成一致意见，因此不能期望对于不确定关系的含义达成一致意见。

### 2.4 不确定关系还是不确定性原理？

现在让我们转向关于海森堡关系的另一个问题：它们是否表达了量子理论的一个原理？可能第一个将这些关系称为“原理”的有影响力的作者是爱丁顿，在他 1928 年的吉福德讲座中将它们称为“不确定性原理”。在英文文献中，不确定性原理成为最常见的名称。它既被康登和罗伯逊在 1929 年使用，也被海森堡芝加哥讲座的英文版本使用（海森堡 1930 年），尽管令人惊讶的是，在同一本书的德文原版中没有出现过这个名称（参见卡西迪 1998 年）。事实上，海森堡似乎从未赞同将他的关系称为“原理”。他最喜欢的术语是“不准确关系”（Ungenauigkeitsrelationen）或“不确定关系”（Unbestimmtheitsrelationen）。我们只知道一处，即海森堡自己的吉福德讲座中提到的，该讲座是在 1955-1956 年间进行的（海森堡 1958 年：43），他在那里提到他的关系“通常被称为不确定关系或不确定性原理”。但这很可能是他顺应常规而不是他自己的偏好。

但是，关系（2）是否符合量子力学的一个原理？几位作者，尤其是卡尔·波普尔（1967 年），对这个观点提出了质疑。波普尔认为，不确定性关系不能被视为一个原理，因为它们可以从理论中推导出来，而不能从不确定性关系中得到理论。（这个论点是说，人们永远无法从一个不等式中推导出任何方程，比如薛定谔方程或对易关系（1）。）

波普尔的论点当然是正确的，但我们认为它忽略了重点。在物理理论中有许多被称为原理的陈述，尽管事实上它们可以从该理论中的其他陈述推导出来。对于这个问题来说，更合适的出发点不是逻辑优先性的问题，而是爱因斯坦对“建设性理论”和“原理理论”的区分。

爱因斯坦在 1919 年提出了这个著名的分类。建设性理论是假设现象背后存在简单实体的理论。它们试图通过对这些实体提出假设来重建现象。另一方面，原理理论从经验原理出发，即经验规律的一般陈述，使用很少或仅有最基本的理论术语。其目的是从这些原理构建理论。也就是说，人们的目标是展示这些经验原理如何为引入进一步的理论概念和结构提供充分条件。

原理理论的典型例子是热力学。在这里，经验原理的作用是由各种永动机不可能性的陈述扮演的。这些被视为粗糙经验事实的表达，为能量和熵的概念及其属性的引入提供了适当的条件。（关于这种观点的可持续性有很多值得讨论的地方，但这不是我们在这里讨论的主题。）

Now obviously, once the formal thermodynamic theory is built, one can also *derive* the impossibility of the various kinds of perpetual motion. (They would violate the laws of energy conservation and entropy increase.) But this derivation should not misguide one into thinking that they were no principles of the theory after all. The point is just that empirical principles are statements that do not rely on the theoretical concepts (in this case entropy and energy) for their meaning. They are interpretable independently of these concepts and, further, their validity on the empirical level still provides the physical content of the theory.

A similar example is provided by special relativity, another theory of principle, which Einstein deliberately designed after the ideal of thermodynamics. Here, the empirical principles are the light postulate and the relativity principle. Again, once we have built up the modern theoretical formalism of the theory (Minkowski space-time), it is straightforward to prove the validity of these principles. But again this does not count as an argument for claiming that they were no principles after all. So the question whether the term “principle” is justified for Heisenberg’s relations, should, in our view, be understood as the question whether they are conceived of as empirical principles.

人们很容易证明这个想法从未离开过海森堡的意图。我们已经看到，海森堡将这些关系呈现为“纯粹的经验事实”的结果。在他 1927 年的论文发表几个月后，他写了一篇名为“关于量子力学基本原理”的普及论文，在这篇论文中，他更加明确地阐述了这一观点。在这里，海森堡描述了他最近在理论解释方面的突破：“似乎这是自然界的一个普遍规律，我们无法同时以任意精确度确定位置和速度”。现在实际上，尽管论文的标题如此，但论文并没有确定或讨论任何量子力学的“基本原理”。因此，他的读者肯定会认为他的意图是声称不确定关系是一种基本原理，是作为一种经验性自然法则强加给我们的，而不是从理论的形式主义中推导出的结果。

海森堡意图的这种解读得到了证实，即使在他的 1927 年的论文中，他的关系的应用也经常将结论呈现为一种原则问题。例如，他说“在一个原子的稳态中，其相位原则上是不确定的”（Heisenberg 1927: 177，[强调添加]）。同样，在 1928 年的一篇论文中，他描述了他的关系的内容：

> 事实证明，原则上不可能知道或测量物质的位置和速度，精确度任意。（Heisenberg 1984: 26，[强调添加]）

因此，尽管海森堡并非首创将他的关系称为原理的传统，但将不确定关系视为一种经验原理，并将其作为量子力学基础的观点归因于他并不是不合理的。事实上，他在 1927 年的论文中明确表达了这种愿望：

> 当然，人们希望能够直接从它们的直观基础中推导出量子力学的定量规律，也就是基本上从关系[（2）]中推导出来。（同上：196）

这并不意味着海森堡在实现这一目标上取得了成功，或者他在其他场合没有表达其他观点。

让我们用三点来总结本节内容。首先，如果不确定性关系要作为一个经验原理，我们可能会问它的直接经验支持是什么。在海森堡的分析中，没有提到这样的支持。他的论证涉及思想实验，在这些实验中，至少在基本水平上，理论的有效性被默认为成立。Jammer（1974: 82）对高精度实验进行了文献搜索，以严肃地测试不确定性关系，并得出结论，这样的实验在 1974 年仍然很少。对于在不确定性关系的不准确性接近量子极限的实验中的真实实验支持，直到最近才出现（参见 Kaiser，Werner 和 George 1983; Uffink 1985; Nairz，Andt 和 Zeilinger 2002）。

第二个问题是量子理论的理论结构或量子理论的定量规律是否可以基于不确定性原理来推导，就像海森堡所希望的那样。迄今为止，从不确定性原理出发建立起完整的量子理论作为原理理论的严肃尝试从未进行过。事实上，海森堡在这方面能够声称的是，不确定关系为实验数据的非经典描述引入了“空间”（Heisenberg 1927: 180）或“自由”（Heisenberg 1931: 43），而并非它们唯一地导致了量子力学的形式主义。Bub (2000)和 Chiribella & Spekkens (2016)最近提出了一种将量子力学作为原理理论来探索的严肃建议。但是，值得注意的是，这个建议并没有将不确定关系作为其基本原理之一。第三，值得注意的是，在他晚年，海森堡对他的关系有了稍微不同的解释。在他 1969 年的自传《部分与整体》中，他描述了他是如何受到爱因斯坦的一句话“决定观察者能够观察到什么的是理论”所启发的，从而将理论置于经验之上，而不是相反。几年后，他甚至承认他对思想实验的著名讨论实际上是琐碎的，因为……如果观察过程本身受到量子理论的规律约束，那么必须能够在这个理论的数学框架中表示其结果。（Heisenberg 1975: 6）

> 2.5 数学阐述

### 2.5 Mathematical elaboration

当海森堡提出他的关系时，他的论证仅基于定性的例子。他没有提供关系中出现的不确定性δq 等的一般精确推导。事实上，他甚至没有给出这些关系中不确定性的定义。当然，这与该论文宣布的目标一致，即为简单实验提供一些量子力学的定性理解。

不确定关系的第一个数学上精确的表述是由肯纳德提出的。他在 1927 年证明了对于所有归一化的状态向量|ψ⟩，以下不等式成立：

ΔψPΔψQ≥ℏ/2(9)

这里，ΔψP 和ΔψQ 是状态向量|ψ⟩中位置和动量的标准差，即，

(ΔψP)2(ΔψQ)2=⟨P2⟩ψ−⟨P⟩2ψ=⟨Q2⟩ψ−⟨Q⟩2ψ(10)

其中⟨⋅⟩ψ=⟨ψ∣⋅∣ψ⟩表示在状态|ψ⟩中的期望值。等价地，我们可以使用波函数ψ(q)及其傅里叶变换：

ψ(q)ψ~(p)=⟨q∣ψ⟩=⟨p∣ψ⟩=12πℏ−−−√∫dqe−ipq/ℏψ(q)(11)

 写

(ΔψQ)2(ΔψP)2=∫dq|ψ(q)|2q2−(∫dq|ψ(q)|2q)2=∫dp|ψ<sub>(p)|2p2−(∫dp|ψ</sub>(p)|2p)2

不等式（9）被罗伯逊（1929）推广，他证明了对于所有的可观测量（自伴算子）A 和 B：

ΔψAΔψB≥12|⟨[A,B]⟩ψ|(12)

其中[A,B]:=AB−BA 表示对易子。

由于上述不等式（9）和（12）具有精确性的优点，与海森堡最初的半定量表述相比，人们很容易将它们视为海森堡关系（2）-（4）的精确对应物。事实上，这就是海森堡自己的观点。在他的芝加哥讲座中（Heisenberg 1930: 15-19），他介绍了肯纳德对关系（9）的推导，并声称“这个证明在数学内容上完全没有区别”，唯一的区别是现在“证明是精确进行的”。

但是指出肯纳德的不等式和海森堡之前的表述（2）在地位和预期角色上存在差异可能是有用的。这里讨论的不等式不是经验事实的陈述，而是量子力学形式主义的定理。作为这样的定理，它们假定了这个形式主义的有效性，特别是对易关系（1）的有效性，而不是阐明其直观内容或为这个形式主义的有效性创造“空间”或“自由”。最好的情况是，人们应该将上述不等式视为表明这个形式主义与海森堡的经验原理一致的证据。

这种情况类似于其他原理理论中出现的情况，正如在第 2.4 节中所指出的，人们经常发现，在经验原理旁边，形式主义还提供了相应的定理。同样，仅凭这种情况本身，并不能怀疑海森堡的关系是否可以被视为量子力学的原理。

（2）和（9）之间还有一个显著的区别。海森堡没有给出“不确定性”δp 和δq 的一般定义。他对它们最明确的说法是可以将它们视为“类似于平均误差”。在思想实验的讨论中，他和玻尔总是根据实验中相关的一些参数来量化不确定性。相比之下，不等式（9）和（12）使用了一个特定的表达式作为“不确定性”的度量：标准偏差。当时，这个选择并不奇怪，因为这个表达式在误差理论和统计波动的描述中是众所周知和广泛使用的。然而，对于不确定性关系的一般表述，几乎没有讨论这个选择是否合适。标准偏差反映了在给定状态下对可观测量进行一系列测量时的扩散或预期波动。将这个概念与测量的“不准确性”（如显微镜的分辨能力）联系起来并不容易。实际上，尽管海森堡将肯纳德的不等式视为不确定性关系的精确表述，但他和玻尔在许多思想实验的讨论中从未依赖于标准偏差，事实上，已经证明（Uffink 和 Hilgevoord 1985; Hilgevoord 和 Uffink 1988）这些讨论不能用标准偏差的术语来表述。

上述阐述的另一个问题是，如果能量 E 和作用 J 是正算子（Jordan 1927），那么“众所周知”的关系（5）实际上是错误的。在这种情况下，自伴算子 t 和 w 不存在，并且类似于（9）的不等式无法推导出来。此外，这些不等式不适用于角度和角动量（Uffink 1990）。这些障碍导致了关于时间-能量和角度-作用不确定关系的相当广泛的文献（Busch 1990；Hilgevoord 1996, 1998, 2005；Muga 等人 2002；Hilgevoord 和 Atkinson 2011；Pashby 2015）。

## 3. 波尔

尽管海森堡和波尔在量子力学上的观点经常被归为（部分）“哥本哈根解释”的一部分，但他们在不确定关系上的观点存在相当大的差异。

### 3.1 从波粒二象性到互补性

在现代量子力学发展之前，玻尔一直对粒子-波二象性问题特别关注，即光和物质行为的实验证据似乎在某些情况下需要波动图像，而在其他情况下需要粒子图像。然而，这些图像是互相排斥的。粒子始终是局部化的，而波长和频率的概念定义要求在空间和时间上进行扩展。此外，经典粒子图像与干涉的特征现象不相容。

他对波粒二象性的长期斗争为他在 1926-1927 年矩阵力学和波动力学之争爆发时迈出了一步激进的举措做好了准备。对于主要的竞争者海森堡和薛定谔来说，争议的焦点是哪种观点能够提供一个单一的连贯和普遍的框架来描述观测数据。选择的本质上是在连续演化的波动描述和经历不连续量子跃迁的粒子描述之间。相比之下，玻尔坚持认为，这两种观点的元素同样有效，同样需要用于对数据进行详尽的描述。他摆脱矛盾的方法是放弃这样一个观念，即这些图像在字面上一一对应地指向物理现实。相反，这些图像的适用性将取决于实验背景。这就是他所称之为“互补性”的观点的要点。

Bohr first conceived the general outline of his complementarity argument in early 1927, during a skiing holiday in Norway, at the same time when Heisenberg wrote his uncertainty paper. When he returned to Copenhagen and found Heisenberg’s manuscript, they got into an intense discussion. On the one hand, Bohr was quite enthusiastic about Heisenberg’s ideas which seemed to fit wonderfully with his own thinking. Indeed, in his subsequent work, Bohr always presented the uncertainty relations as the symbolic expression of his complementarity viewpoint. On the other hand, he criticized Heisenberg severely for his suggestion that these relations were due to discontinuous changes occurring during a measurement process. Rather, Bohr argued, their proper derivation should start from the indispensability of both particle and wave concepts. He pointed out that the uncertainties in the experiment did not exclusively arise from the discontinuities but also from the fact that in the experiment we need to take into account both the particle theory and the wave theory. It is not so much the unknown disturbance which renders the momentum of the electron uncertain but rather the fact that the position and the momentum of the electron cannot be simultaneously defined in this experiment (see the “Addition in Proof” to Heisenberg’s paper).

我们不会深入讨论玻尔对量子力学的解释，因为我们主要关注玻尔对不确定性原理的观点。关于前者的更详细讨论，请参考 Scheibe（1973）、Folse（1985）、Honner（1987）和 Murdoch（1987）。然而，简要概述一些主要观点可能会有所帮助。玻尔考虑的核心是我们在物理学中使用的语言。无论现代物理学的概念多么抽象和微妙，它们本质上是我们日常语言的延伸，是传达实验结果的手段。这些结果是在明确定义的实验条件下获得的，玻尔称之为“现象”。现象是“在给定实验条件下观察到的效应的理解”（玻尔 1939 年：24），它是物理对象、测量仪器及其之间相互作用在具体实验情境中的结果。经典物理学和量子物理学之间的本质区别在于，在量子物理学中，物体和仪器之间的相互作用不能任意小；相互作用至少必须包含一个量子。这由玻尔的量子假设表达：

> “[量子理论的表述的本质]可以用所谓的量子假设来表达，它将任何原子过程归因于一种基本的不连续性或者说个体性，这与经典理论完全不同，并以普朗克的作用量量子来象征。”（玻尔 1928 年：580）

因此，现象是一个不可分割的整体，测量结果不能被视为物体本身在测量背景之外的自主表现。量子假设迫使我们以一种新的方式描述物理现象：

> 在这种情况下，我们面临着对物理现象的描述和解释基础进行彻底修订的必要性。在这里，首先必须认识到，无论量子效应超越了经典物理分析的范围多么远，实验安排的描述和观察记录始终必须用普通语言表达，并补充经典物理学的术语。（玻尔 1948 年：313）

这就是 Scheibe（1973 年）所称的“缓冲假设”，因为它阻止了量子进入经典描述：现象必须始终用经典术语来描述；普朗克常数在这个描述中不出现。

这两个假设共同引发了以下推理。在每个现象中，物体和仪器之间的相互作用至少包含一个量子。但是，现象的描述必须使用不涉及行动量子的经典概念。因此，在这个描述中无法分析这种相互作用。另一方面，描述的经典特性使我们能够用物体本身的术语来说话。我们可以不提及仪器，而是说：“这个地方发现了粒子”。实验背景定义了关于物体可以有意义地说什么，而不是改变或干扰物体的现有属性。

Because the interaction between object and apparatus is left out in our description of the phenomenon, we do not get the whole picture. Yet, any attempt to extend our description by performing the measurement of a different observable quantity of the object, or indeed, on the measurement apparatus, produces a new phenomenon and we are again confronted with the same situation. Because of the unanalyzable interaction in both measurements, the two descriptions cannot, generally, be united into a single picture. They are what Bohr calls complementary descriptions:

> [the quantum of action]…forces us to adopt a new mode of description designated as complementary in the sense that any given application of classical concepts precludes the simultaneous use of other classical concepts which in a different connection are equally necessary for the elucidation of the phenomena. (Bohr 1929: 10)

互补描述的最重要例子是对物体位置和动量的测量。如果想要测量物体相对于给定空间参考系的位置，测量仪器必须牢固固定在定义参考系的物体上。但这意味着无法研究物体和仪器之间的动量交换，我们无法获取有关物体动量的任何信息。另一方面，如果想要测量物体的动量，测量仪器必须能够相对于空间参考系移动。在这里，玻尔假设动量测量涉及到仪器某个可移动部分的反冲注册和动量守恒定律的使用。仪器与物体相互作用的松散性意味着仪器无法准确确定物体的位置。由于测量仪器既不能牢固固定在空间参考系上，又能相对于其移动，用于精确确定物体位置和动量的实验是互相排斥的。当然，这本身对量子力学来说并不典型。但是，由于测量过程中物体和仪器之间的相互作用既不能忽略也不能确定，这两个测量无法结合。这意味着在对物体进行描述时，必须在精确位置和精确动量之间进行选择。

Similar considerations hold with respect to the measurement of time and energy. Just as the spatial coordinate system must be fixed by means of solid bodies so must the time coordinate be fixed by means of unperturbed, synchronised clocks. But it is precisely this requirement which prevents one from taking into account of the exchange of energy with the instrument if this is to serve its purpose. Conversely, any conclusion about the object based on the conservation of energy prevents following its development in time.

The conclusion is that in quantum mechanics we are confronted with a complementarity between two descriptions which are united in the classical mode of description: the space-time description (or coordination) of a process and the description based on the applicability of the dynamical conservation laws. The quantum forces us to give up the classical mode of description (also called the “causal” mode of description by Bohr[[4](https://plato.stanford.edu/entries/qt-uncertainty/notes.html#note-4)]: it is impossible to form a classical picture of what is going on when radiation interacts with matter as, e.g., in the Compton effect.

> Any arrangement suited to study the exchange of energy and momentum between the electron and the photon must involve a latitude in the space-time description sufficient for the definition of wave-number and frequency which enter in the relation [E=hν and p=hσ]. Conversely, any attempt of locating the collision between the photon and the electron more accurately would, on account of the unavoidable interaction with the fixed scales and clocks defining the space-time reference frame, exclude all closer account as regards the balance of momentum and energy. (Bohr 1949: 210)

无法获得对过程的因果描述；我们必须满足于互补描述。根据玻尔的说法，“互补观点可以被看作是因果性理想的合理概括”。

除了互补描述，玻尔还谈到了互补现象和互补量。位置和动量，以及时间和能量，都是互补量。[5]

我们已经看到，玻尔对量子理论的方法非常强调用于传达实验观察的语言，他认为这种语言必须始终保持经典。相比之下，他似乎对从量子理论的数学形式主义出发的论证并不重视。这种非正式的方法是玻尔在量子力学意义上的所有讨论中的典型特点。可以说，对于玻尔来说，情况的概念澄清具有首要重要性，而形式主义只是对这种情况的象征性表示。

这是非常了不起的，因为最终需要解释的是形式主义。对形式主义的忽视是解释波尔量子力学如此困难并引起如此多争议的原因之一。我们通过引用 1948 年的一篇文章来结束本节，以展示波尔对量子力学形式主义的角色的理解：

> 整个形式主义被视为一种推导预测的工具，这些预测具有确定性或统计性质，涉及在经典术语下描述的实验条件下可获得的信息，并通过进入矩阵或波函数的代数或微分方程来指定。这些符号本身，正如虚数的使用已经表明的那样，不容易进行图像解释；即使是像密度和电流这样的派生实函数，也只能被视为表达在明确定义的实验条件下可观察到的个别事件发生的概率。（波尔 1948 年：314）

### 3.2 波尔对不确定性原理的观点

In his Como lecture, published in 1928, Bohr gave his own version of a derivation of the uncertainty relations between position and momentum and between time and energy. He started from the relations

E=hν and p=h/λ(13)

which connect the notions of energy E and momentum p from the particle picture with those of frequency ν and wavelength λ from the wave picture. He noticed that a wave packet of limited extension in space and time can only be built up by the superposition of a number of elementary waves with a large range of wave numbers and frequencies. Denoting the spatial and temporal extensions of the wave packet by Δx and Δt, and the extensions in the wave number σ:=1/λ and frequency by Δσ and Δν, it follows from Fourier analysis that in the most favorable case ΔxΔσ≈ΔtΔν≈1, and, using (13), one obtains the relations

ΔtΔE≈ΔxΔp≈h(14)

注意，Δx，Δσ等不是标准差，而是波包大小的未指定度量。（原文中使用等号而不是近似等号，但由于玻尔没有准确定义扩展，使用近似等号更符合他的意图。此外，玻尔自己在后来的演示中也使用了近似等号。）根据玻尔的说法，这些方程确定了与波场相关的个体的能量和动量的最高可能精度。（玻尔 1928 年：571）。

> the highest possible accuracy in the definition of the energy and momentum of the individuals associated with the wave field. (Bohr 1928: 571).

 他指出，

> 这种情况可以被视为空间-时间描述和因果性要求互补性的简单象征性表达。（见文献）[6]

我们注意到关于玻尔对不确定关系的观点有几点。首先，玻尔并不提到测量过程中相关量的不连续变化。相反，他强调了定义这些量的可能性。这种观点与海森堡的观点明显不同。Como 讲稿的草稿版本在玻尔和海森堡之间的差异上更加明确：

> 这些相互不确定关系是海森堡在最近的一篇论文中提出的，它们是由于量子假设中所暗示的不连续性特征，以经典概念来解释观测结果的统计要素的表达。然而，必须记住，所讨论的不确定性并不仅仅是由于辐射和物质粒子之间的相互作用中能量和动量的不连续变化所导致的，这种相互作用用于测量个体的时空坐标。根据上述考虑，问题实际上是在个体的时空协调也被考虑在内时，无法严格定义这种变化的不可能性。(波尔 1985: 93)

的确，波尔不仅否定了海森堡的论点，即这些关系是由于测量行为所暗示的不连续干扰所导致的，而且否定了他的观点，即测量过程会产生明确的结果：

> 我们在量子理论中面临的情况的不寻常特征要求我们在术语问题上要极为谨慎。经常谈到通过观察来干扰现象，甚至通过测量过程为物体创造物理属性，这样的说法很容易引起混淆，因为所有这些句子都暗示着违背基本语言约定，即使出于简洁起见，这种做法也永远不会是明确的。(波尔 1939: 24)

他也不赞成以认识论或实验误差的术语来表述：[...] 例如，“我们无法同时知道一个原子物体的动量和位置”这样的句子立即引发了关于物体这两个属性的物理实际性的问题，只能通过参考空时概念的明确使用的相互排斥条件以及动力学守恒定律来回答（Bohr 1948: 315; 也参见 Bohr 1949: 211）。

> 特别需要提醒的是，在这种情况下，用“无法同时用任意精确度测量粒子的位置和动量”这样的陈述来表达海森堡著名的不确定关系的内容时，可能会产生误解。根据这样的表述，似乎我们必须放弃测量物体的两个明确定义的属性中的一个，但这并不排除未来的理论可以在经典物理学的基础上同时考虑这两个属性的可能性（Bohr 1937: 292）。
>
> It would in particular not be out of place in this connection to warn against a misunderstanding likely to arise when one tries to express the content of Heisenberg’s well-known indeterminacy relation by such a statement as “the position and momentum of a particle cannot simultaneously be measured with arbitrary accuracy”. According to such a formulation it would appear as though we had to do with some arbitrary renunciation of the measurement of either the one or the other of two well-defined attributes of the object, which would not preclude the possibility of a future theory taking both attributes into account on the lines of the classical physics. (Bohr 1937: 292)

相反，玻尔始终强调不确定性关系首先是互补性的表达。这可能看起来很奇怪，因为互补性是两种描述之间的二分关系，而不确定性关系允许在两个极端之间存在中间情况。它们“表达”了这种二分性，如果我们认为能量和动量是完全明确定义的，符号上ΔE=Δp=0，那么位置和时间变量就完全未定义，Δx=Δt=∞，反之亦然。但它们也允许中间情况，其中提到的不确定性都是非零有限的。这种不确定性关系的更积极方面在 Como 讲座中提到：

> 然而，这种关系的一般特性使得在一定程度上可以调和守恒定律与观测的时空协调，将在时空点上明确定义事件的巧合的概念替换为在时空区域内不明确定义的个体的概念。（玻尔 1928 年：571）

然而，玻尔从未继续探讨这一建议，即我们可能能够在不明确定义的量的术语中在两种互斥的描述模式之间达成妥协。事实上，试图这样做将更加认真地对待量子理论的形式主义，而不是经典语言的概念，而这一步玻尔拒绝采取。相反，在他后来的著作中，他只是满足于陈述不确定性关系在经典术语中根本无法明确解释：

> 这些所谓的不确定性关系明确地展示了因果分析的局限性，但重要的是要认识到，在经典方式中将物理属性客观化的情况下，对这种关系的明确解释无法用适合描述的词语来给出。（Bohr 1948: 315）

最后，在更正式的层面上，我们注意到 Bohr 的推导并不依赖于交换关系（1）和（5），而是依赖于傅里叶分析。就位置和动量之间的关系而言，这两种方法是等效的，但对于时间和能量而言并非如此，因为大多数物理系统没有时间算符。事实上，在与爱因斯坦的讨论中（Bohr 1949），Bohr 将时间视为一个简单的经典变量。这甚至适用于他关于“盒子中的时钟”思想实验的著名讨论，其中时间是由盒子中的时钟定义的，并从经典广义相对论的角度来处理。因此，在基于交换关系的方法中，位置-动量和时间-能量的不确定关系并不平等，这与 Bohr 基于傅里叶分析的方法相反。有关更多详细信息，请参见（Hilgevoord 1996 和 1998）。

## 4. 最小解释

在前两节中，我们已经看到海森堡和玻尔都将不确定关系赋予了深远的地位。他们都认为这些关系对于通常的经典概念的适用性有根本的限制。此外，他们都认为这些限制是不可避免的，是被强加给我们的。然而，我们也看到他们是通过从激进和有争议的假设出发得出这样的结论的。当然，这意味着对于那些拒绝这些假设的人来说，他们的激进结论仍然不令人信服。事实上，这些作者采用的实证主义者观点在物理哲学家中早已失去吸引力。

因此，可以问的问题是不确定关系的替代观点还有哪些是可行的。当然，这个问题与波函数的解释以及量子力学作为一个整体的问题密切相关。由于对后者没有共识，人们也不能期望对不确定关系的解释有共识。在这里，我们只描述一个观点，我们称之为“最小解释”，这似乎是哥本哈根解释和其他观点的支持者所共享的。

在量子力学中，一个系统被认为是通过其波函数来描述的，也被称为其量子状态或状态向量。给定状态向量|ψ⟩，可以推导出与系统相关的所有物理量（通常称为可观测量）的概率分布，例如位置、动量、角动量、能量等。这些概率分布的操作意义是它们对应于在一系列重复测量中获得的这些量的值的分布。更确切地说，人们想象在考虑的系统的许多副本中，所有副本都以相同的方式准备。在每个副本上测量动量，例如。一般来说，这些测量的结果是不同的，并且得到了一个结果的分布。从量子状态推导出的理论动量分布被认为与在动量测量的无限次重复中获得的假设结果分布相一致。对于系统的所有其他物理量，情况也是如此。请注意，在定义概率分布的操作意义时，不需要同时测量两个或更多的量。

上述讨论的不确定关系可以被视为关于同一状态下多个物理量的概率分布扩展的陈述。例如，系统的位置和动量之间的不确定关系可以理解为在任何量子态中，位置和动量分布不能同时任意狭窄——在某种意义上的“狭窄”。不等式（9）就是这样一种关系的例子，其中标准差被用作扩展的度量。根据这种不确定关系的特征化，不需要对量子态进行比前一段给出的更详细的解释来研究不确定关系本身。特别是，不需要假设对不确定性概念的本体论或语言学解释，即海森堡或玻尔给出的我们概念适用性的限制。

当然，这种最简解释仍然存在一个问题，即是否有意义将精确的位置和动量值归属于一个个体系统。量子力学的一些解释，如海森堡和玻尔的解释，否认了这一点；而德布罗意和波姆的解释坚持每个个体系统都有明确的位置和动量（参见关于波姆力学的条目）。唯一的要求是，作为经验事实，不可能准备纯净的系列，其中所有系统对于这些量具有相同的值，或者扩展小于量子理论允许的值。尽管量子力学的解释中，每个系统都有其位置和动量的明确值仍然是可行的，但这并不意味着它们没有自己奇怪的特征；它们并不意味着回归到经典物理学。

我们最后对这种最小解释进行一些评论。首先，可以注意到不确定性关系的最小解释仅仅是填补不等式（9）的经验含义。因此，这种观点与我们上面提到的关于这种不等式的许多限制是相似的。事实上，将测量结果的统计分布的扩展与测量的不准确性（例如显微镜的分辨率或系统受测量干扰）联系起来并不直观。此外，最小解释并没有回答一个问题，即是否可以同时准确测量位置和动量。

事实上，可以证明量子力学的标准形式主义不允许这种同时测量。但这不是关系（9）的结果，而是因为这种形式主义根本没有包含任何可以完成这样任务的可观测量。扩展这种形式主义以允许可观测量由正算子值测度或 POVM 表示，确实允许正式引入描述联合测量的可观测量（见第 6.1 节）。但即使在这种情况下，对于位置和动量的情况，人们发现这样的测量必须是“不锐利”的，这意味着它们不能被视为同时准确的测量。

如果一个人认为关于测量不准确性或同时测量的陈述属于不确定性原理的任何令人满意的表述，那么他将需要寻找其他的不确定性原理表述。关于这种表述的一些候选将在第 6 节中讨论。然而，首先我们将看看那些坚定地保持在最小解释范围内的不确定性原理表述，并且只是通过使用标准差以外的不确定性度量来与（9）不同。

## 5. 不确定性的替代度量

虽然标准差是最为人所知的不确定性或概率分布扩散的定量度量，但它并不是唯一的度量方式，而且实际上它具有其他度量方式所缺乏的独特缺点。例如，在标准差的定义中（11），可以看到概率密度函数|ψ(q)|2 被一个二次因子 q2 加权，这在尾部上增加了重点。因此，ΔψQ 的值主要取决于该密度在尾部的行为：如果尾部迅速下降，例如像高斯分布一样，那么它将很小，但如果尾部下降得很慢，即使大部分概率集中在一个小区间内，标准差可能会非常大。

这个反对意见的要点是，根据海森堡-肯纳德不确定关系（9）对位置和动量的标准差的乘积有一个下界，并不能单独排除一个状态，其中位置和动量的概率密度都非常集中，即使在任意选择的ϵ，δ>0 的情况下，它们的概率都有超过（1-ϵ）集中在一个小于δ的区域内。在我们看来，这意味着关系（9）实际上未能表达出大多数物理学家认为是不确定性原理的核心思想。

处理这个异议的一种方法是考虑用其他方式来量化与概率密度相关的传播或不确定性。在这里，我们讨论了两个这样的提议。

### 5.1 Landau-Pollak 不确定性关系

最直接的替代方法是选择某个接近于一的值α，比如α=0.9，并询问支持总概率分布中占比α的最小区间的宽度，同样适用于动量：

Wα(Q,ψ)Wβ(P,ψ)：=inf|I|{I:∫I|ψ(q)|2dq≥α}：=infI{∫I|ψ~(p)|2dp≥β}(15)

在之前的一项工作中（Uffink 和 Hilgevoord 1985），我们称这样的度量为“宽度”，因为它们指示了概率分布的“宽度”（即α或β的分数）有多集中。Landau 和 Pollak（1961）得到了一个关于这些宽度的不确定性关系。

Wα(Q,ψ)Wβ(P,ψ)≥2πℏ(αβ−(1−α)(1−β)−−−−−−−−−−−−√)2if α+β≥1/2(16)

这个 Landau-Pollak 不等式表明，如果α，β的选择不太低，对于任何量子态，位置和动量分布的体宽度的乘积存在一个与态无关的下界。

注意，体宽度对于分布尾部的行为不太敏感，因此 Landau-Pollak 不等式对上述异议是免疫的。因此，这个不等式表达了量子力学态中不包含在关系（9）中的约束。此外，根据众所周知的 Bienaymé-Chebyshev 不等式，有

Wα(Q,ψ)Wβ(P,ψ)≤21−α−−−−−√ΔψQ≤21−β−−−−−√ΔψP(17)

这样，不等式（16）通过选择最优的α，β（即最优的α，β）意味着ΔψQΔψP≥0.12ℏ。显然，这不是标准差乘积的最佳下界，但重要的是，朗道-波拉克不等式（16）在体宽度方面意味着标准差乘积存在一个下界，而相反，海森堡-肯纳德等式（9）不意味着体宽度的乘积有任何下界。这种方法的推广讨论了有限维希尔伯特空间中非对易观测量的情况（Uffink 1990）。

### 5.2 熵不确定关系

表达不确定性原理的另一种方法是使用熵的不确定度度量。其中最重要的例子是香农熵，对于给定状态矢量|ψ⟩的位置和动量分布，可以定义为：

H(Q,ψ)H(P,ψ):=−∫|ψ(q)|2ln|ψ(q)|2dq:=−∫|ψ<sub>(p)|2ln|ψ</sub>(p)|2dp(18)

一个可以证明的方法是（参见 Beckner 1975; Białinicki-Birula 和 Micielski 1975）

H(Q,ψ)+H(P,ψ)≥ln(eπℏ)(19)

这种熵不确定关系的一个好处是它严格改进了海森堡-肯纳德关系。也就是说，可以独立于量子理论证明，对于任何概率密度函数 p(x)，我们可以证明：

−∫p(x)lnp(x)dx≤ln(2πe−−−√Δx)(20)

将其应用于不等式 (19)，我们得到：

ℏ2≤(2πe)−1exp(H(Q,ψ)+H(P,ψ))≤ΔψQΔψP(21)

表明熵不确定关系暗示了海森堡-肯纳德不确定关系。这个关系的一个缺点是它并没有完全避免上述提到的反对意见（即，这些熵不确定度测量可以变得任意大，而分布中的概率的 1-ϵ集中在一个非常小的区间上），但需要展示这一点的例子确实更为牵强。

对于在 n 维希尔伯特空间中的非对易观测量，可以类似地定义概率分布|⟨ai∣ψ⟩|2 的熵不确定度，其中给定状态|ψ⟩和完备的本征态集合|ai⟩（i=1,…n）是可观测量 A 的本征态。

H(A,ψ):=−∑i=1n|⟨ai∣ψ⟩|2ln|⟨ai∣ψ⟩|2(22)

并且 H(B,ψ)以可观测 B 的完全本征态|bj⟩(j=1,…,n)的概率分布|⟨bj∣ψ⟩|2 表示类似地。然后我们得到不确定关系(Maassen and Uffink 1988)：

H(bA,ψ)+H(B,ψ)≥2lnmaxi,j|⟨ai∣bj⟩|,(23)

这些关系进一步由（Frank 和 Lieb 2012）进行了概括和改进。这些关系的最重要优势是，与罗伯逊不等式（12）相比，下界是一个正常数，与状态无关。

## 6. 不准确性和干扰的不确定性关系

在前一小节中考虑的标准差和其他不确定性度量（以及我们没有提到的许多其他度量！）都旨在指示单个给定概率分布的宽度或扩展程度。应用于量子力学，其中位置和动量的概率分布是从给定的量子态矢量获得的，可以使用它们来制定表征任何给定状态下这些分布的不确定性关系。由此产生的不等式则表达了量子力学允许的状态准备的限制。因此，它们是所谓的准备不确定性原理的表达：

> 在量子力学中，不可能将任何系统准备成一个状态|ψ⟩，使得其位置和动量都可以精确预测，即在位置测量和动量测量中都具有任意小的期望展宽。

关系式（9、16、19）都属于这个类别；它们之间的唯一区别在于它们使用了不同的展宽度量：标准差、体宽度或香农熵。

注意，在这个表述中，没有提及同时或联合测量，也没有提及任何关于测量仪器的分辨能力或被测量系统在被测量过程中受到的干扰程度的概念。本节将讨论超越这种准备不确定性原理模式的尝试。

### 6.1 最近关于误差-干扰关系的辩论

我们已经看到，1927 年海森堡提出了这样的观点：测量（比如位置）必然会通过与之共轭的变量（即动量）的不准确测量来干扰，干扰的程度与前者的测量不准确度成反比。我们也看到，这个观点在肯纳德的不确定关系（9）中并没有得到维持，而这个关系在 1930 年被海森堡和大多数教科书所接受。

因此，一个相当自然的问题就出现了：在量子力学中是否存在进一步的不等式，更直接地解决海森堡最初的思考，即处理一个变量被另一个变量的准确测量所干扰的程度。也就是说，我们将研究试图建立一个被称为测量不确定性原理的主张的尝试。

> 在量子力学中，没有一种测量过程可以准确地测量系统的位置而不干扰其动量，也就是说，位置的不准确度和测量对系统动量的干扰不能同时任意小。

这种不确定性原理的表述一直存在争议。经常被称为“误差干扰关系”或“噪声干扰关系”的不确定关系。我们将看两个最近提出的寻找这种关系的建议：Ozawa（2003）和 Busch，Lahti 和 Werner（2013）。

在 Ozawa 的方法中，我们假设一个感兴趣的系统 S 处于状态|ψ⟩，与处于状态|χ⟩的测量设备 M 耦合，它们的相互作用由一个幺正算符 U 控制。在联合系统的希尔伯特空间上，我们感兴趣的系统 S 的可观测量 Q 由

Qin=Q⊗1(24)

测量相互作用将使我们能够通过在相互作用后读取测量设备的指针可观测量 Q'来执行（不准确的）该数量的测量。因此，这个不准确的可观测量可以表示为

Q′out=U†(1⊗Q′)U(25)

在测量 Q 的噪声度量中，选择如下：

ϵψ(Q):=⟨(Q′out−Qin)2⟩1/2ψ⊗χ(26)

通过选择测量过程对 P 的干扰度量，进行初始动量 Pin=P⊗1 和测量后的最终动量 Pout=U†(P⊗1)U 的比较：

ηψ(P):=⟨(Pin−Pout)2⟩1/2ψ⊗χ(27)

Ozawa 得到了一个涉及这两个测量的不等式，然而，这个不等式比之前的不确定性关系更加复杂。然而，对于我们的目的来说，重要的是 Ozawa 表明了乘积ϵψ(Q)ηψ(P)没有正的下界。他从中得出的结论是违反了海森堡的噪声干扰关系。

然而，关于 Ozawa 的结果是否成功地阐述了海森堡在显微镜示例中对干扰和准确性的定性讨论，存在争议。请参见 Busch，Lahti 和 Werner（2013 年和 2014 年（其他互联网资源）），以及 Ozawa（2013 年，其他互联网资源）。

在这场争议中提出的一个异议是，像⟨(Q′out−Qin)2⟩1/2 这样的数量对于我们了解可观测量 Q′out 作为 Qin 的不准确测量的好坏几乎没有任何帮助。这里要观察的主要观点是，这些算符通常不对易，并且对 Q′out、Qin 及其差异的测量将需要完全不同的测量背景。例如，要求ϵψ(Q)消失只意味着所准备的状态属于算符 Q′out−Qin 的零特征值所对应的线性子空间，因此⟨Q′out⟩ψ=⟨Qin⟩ψ，但这并不排除状态ψ中 Qout 的概率分布可能与 Qin 的概率分布截然不同。但是，没有人会认为 Qout 是 Qin 的准确测量，因此ϵψ(Q)的定义并没有表达出它应该表达的含义。对ηψ(P)也可以提出类似的异议。

另一个观察是，小泽波的结论，即他的误差-干扰乘积没有下界，一点也不令人惊讶。也就是说，即使不通过测量装置对系统进行探测，我们也可以证明这样的下界不存在。如果系统的初始状态在 t=0 时作为一个高斯准单色波包准备，并且自由演化，我们可以使用飞行时间测量来了解其后续位置。埃伦费斯特定理告诉我们：⟨Qt⟩ψ=tm⟨P⟩ψ。

因此，作为位置 Qt 的近似测量，可以提出可观测量 Q't=tmP。众所周知，在所述条件下（且 m 和 t 较大），这个近似非常好，即我们不仅有⟨Q't-Qt⟩ψ=0，而且⟨(Q't-Qt)2⟩≈0，尽可能地接近。但由于 Q't 只是动量乘以一个常数，显然它的测量不会干扰系统的动量。换句话说，在这个例子中，我们可以尽可能地使ϵψ(Q)很小，而不会干扰动量。因此，即使使用最简单的测量方案，即自由演化，也似乎没有希望存在一个正的下界来限制ϵψ(Q)ηψ(P)的乘积。

Ozawa 的结果并没有表明 Heisenberg 对显微镜论证的分析是错误的。相反，它们对他用来形式化 Heisenberg 的非正式论证的定义的适用性提出了疑问。

Busch、Lahti 和 Werner（2013）提出了完全不同的测量不确定性关系问题的分析。这些作者考虑了一个测量设备 M，它对位置和动量进行联合不精确测量。为了描述这样的联合不精确测量，他们采用了扩展的现代形式主义，该形式主义不是通过自伴算子来表征可观测量，而是通过正算子值测度（POVM）来表征。在当前情况下，这意味着测量过程由一组正算子 M(p,q)来表征，其中 p,q 表示测量的结果变量，其中

M(p,q)≥0,∬dpdqM(p,q)=1.(28)

这个 POVM 的两个边际分布,

M1(q)M2(p)=∫dpM(p,q)=∫dqM(p,q)(29)

也是自己的 POVM，并分别表示不确定位置 Q'和不确定动量 P'的可观测量。（请注意，这些不是指自伴算子！）

对于一个处于状态|ψ⟩的系统，在联合不确定测量（28）中获得结果（p,q）的联合概率密度为

ρ(p,q):=⟨ψ∣M(p,q)∣ψ⟩,(30)

当这个联合概率分布的边缘分布给出 Q'和 P'的分布时。

μ'(q)ν'(p):=∫dpρ(p,q)=⟨ψ∣M1(q)∣ψ⟩:=∫dpρ(p,q)=⟨ψ∣M2(q)∣ψ⟩(31)

由于在量子力学中不可能进行位置和动量的联合尖锐测量，因此从 M 得到的这些边缘分布(31)与在状态|ψ⟩上对 Q 和 P 进行理想测量的分布不同。然而，可以通过将(31)与精确分布进行成对比较，来指示这些边缘分布与状态|ψ⟩上的单独精确位置和动量测量相差多少。

μ(q)ν(p):=|⟨q∣ψ⟩|2:=|⟨p∣ψ⟩|2(32)

为了做到这一点，BLW 提出了一个距离函数 D，用于衡量概率分布之间的距离，这样 D(μ,μ′)告诉我们非锐化位置 Q'的边缘位置分布μ′(q)与锐化位置测量中的精确分布μ(q)有多接近，同样，D(ν,ν′)告诉我们动量边缘分布ν′(p)与精确动量分布ν(p)有多接近。

他们选择的距离是 Wasserstein-2 距离，也被称为（一种变体的）地球移动者距离。

定义（Wasserstein-2 距离）
 设μ(x)和μ′(y)是实线上的任意两个概率分布，γ(x,y)是具有μ′和μ作为边缘分布的任意联合概率分布。则：

D(μ,μ′) := infγ(∬(x−y)2γ(x,y)dxdy)1/2(33)

将这个定义应用于手头的情况，即对量子力学分布μ'(q)和μ(q)以及ν'(p)和ν(p)在(31)和(32)中进行成对处理，BLW 的最后一步是对所有可能的输入状态|ψ⟩取上确界，得到

Δ(Q,Q')Δ(P,P')=sup|ψ⟩D(μ,μ')=sup|ψ⟩D(ν,ν')(34)

从这些定义中，他们得到

Δ(Q,Q′)Δ(P,P′)≥ℏ2(35)

认为Δ(Q,Q′)为位置的不准确度或噪声提供了一个合理的度量，Δ(P,P′)为任何这种联合不准确测量对动量的干扰提供了度量，作者得出结论，与 Ozawa 的分析相反，存在一个误差-干扰不确定性关系，他们认为这是对海森堡在显微镜思想实验中直觉的“显著证明”。

在比较这两种方法时，对 Busch-Lahti-Werner（BLW）方法有一些积极的评价。首先，通过关注距离（33），该方法比较的是整个概率分布，而不仅仅是算子差异的期望。当这个距离非常小的时候，我们有理由得出结论，在测量过程中，分布变化很小。这使我们更接近于得出结论，引入的误差或干扰很小。其次，通过引入对所有状态的上确界来获得Δ(Q,Q′)，可以得出结论，当这个表达式很小时，测量分布μ'与精确分布μ之间的差异很小，无论系统的状态如何。正如作者所认为的那样，这意味着Δ(Q,Q′)可以被看作是仅与测量设备本身有关的一个优势指标，并且在这个意义上类似于显微镜的分辨率。

但我们也认为 BLW 方法存在一个不可取的特点。这是因为状态的上确界在Δ(Q,Q′)和Δ(P,P′)中都出现了两次。我们认为，这个特点使得他们的结果失去了实际适用性。

为了阐明：在具体应用中，人们会将系统准备在某个状态（不完全已知），并进行给定的 Q'和 P'的联合测量 M。如果已知Δ(Q,Q′)非常小，那么可以安全地推断 Q 的测量误差很小，因为这保证了测量位置分布与精确位置测量所给出的几乎没有差异，无论系统的状态如何。现在，人们希望能够推断在这种情况下，动量 P 相对于 P'的扰动对于准备的状态来说是相当大的。但是 BLW 只给出了以下结果：

Δ(P,P′)=sup|ψ⟩D(ν,ν′)≥ℏ2Δ(Q,Q′)

而这并不意味着对于所讨论的状态有任何影响！因此，BLW 不确定性关系并不排除对于某些状态可能进行联合测量，其中 D(μ,μ′)和 D(ν,ν′)都非常小，从这个意义上说，具有可忽略的误差和干扰。现在说这证实了海森堡的直觉似乎为时过早。

总结一下，我们强调 BLW 分析与 Ozawa 分析之间没有矛盾：Ozawa 声称对于某些状态，两个量的乘积可能小于通常的限制，而 BLW 表明不同量的乘积将满足这个限制。争议不在于数学上的有效性，而在于这些量是否合理地捕捉到了海森堡的定性考虑。我们认为，在这场争议中，Ozawa 的分析并不令人信服。另一方面，我们也认为 BLW 的不确定性关系并不令人满意。此外，我们还想指出，双方都使用了类似于标准差的度量，对概率分布的尾部行为非常敏感，因此面临着类似于第 5 节提出的相似反对意见。在我们看来，关于是否存在测量不确定性原理的争论尚未达成最终结论。

<!--md-padding-ignore-begin-->
## Bibliography

* Bacciagaluppi, G. and A. Valentini, 2009, *Quantum Theory at the Crossroads; reconsidering the 1927 Solvay Conference*, Cambridge: Cambridge University Press.
* Beller, M., 1999, *Quantum Dialogue*, Chicago: University of Chicago Press.
* Beckner, W., 1975, “Inequalities in Fourier analysis”, *Annals of Mathematics*, 102: 159–182.
* Białinicki-Birula, I. and J. Micielski, 1975, “Uncertainty relations for information entropy in wave mechanics”, *Communications in Mathematical Physics*, 44: 129–132.
* Bohr, N., 1928, “The Quantum postulate and the recent development of atomic theory”, *Nature*, (Supplement) 121: 580–590. Also in Bohr 1934, Wheeler and Zurek 1983, and Bohr 1985.
* –––, 1929, “Introductory survey”, in Bohr 1934: 1–24.
* –––, 1934, *Atomic Theory and the Description of Nature*, Cambridge: Cambridge University Press. Reissued in 1961. Appeared also as Volume I of *The Philosophical Writings of Niels Bohr*, Woodbridge, CT: Ox Bow Press, 1987.
* –––, 1937, “Causality and complementarity”, *Philosophy of Science*, 4: 289–298.
* –––, 1939, “The causality problem in atomic physics”, in *New Theories in Physics*, Paris: International Institute of Intellectual Co-operation. Also in Bohr 1996: 303–322.
* –––, 1948, “On the notions of causality and complementarity”, *Dialectica*, 2: 312–319. Also in Bohr 1996: 330–337.
* –––, 1949, “Discussion with Einstein on epistemological problems in atomic physics”, in *Albert Einstein: philosopher-scientist. The library of living philosophers Vol. VII*, P.A. Schilpp (ed.), La Salle: Open Court, pp. 201–241.
* –––, 1985, *Collected Works*, Volume 6, J. Kalckar (ed.) Amsterdam: North-Holland.
* –––, 1996, *Collected Works*, Volume 7, J. Kalckar (ed.) Amsterdam: North-Holland.
* Bub, J., 2000, “Quantum mechanics as a principle theory”, *Studies in History and Philosophy of Modern Physics*, 31B: 75–94.
* Busch, P., 1990, “ On the energy-time uncertainty relation”, *Foundations of Physics*, 20: 1–32, 33–43.
* Busch, P., P. Lahti, and R. Werner, 2013, “Proof of Heisenberg’s error-disturbance relation”, *Physical Review Letters*, 111, 160405. doi:10.1103/PhysRevLett.111.160405
* Cassidy, D.C., 1992, *Uncertainty, the Life and Science of Werner Heisenberg*, New York: Freeman.
* –––, 1998, “Answer to the question: When did the indeterminacy principle become the uncertainty principle?”, *American Journal of Physics*, 66: 278–279.
* Chiribella, G. and R.W. Spekkens, 2016, *Quantum Theory, Informational Foundations and Foils*, Dordrecht: Springer.
* Condon, E.U., 1929, “Remarks on uncertainty principles”, *Science*, 69: 573–574.
* Eddington, A., 1928, *The Nature of the Physical World*, Cambridge: Cambridge University Press.
* Einstein, A., 1919, “My Theory”, *The Times* (London), November 28, p. 13; reprinted as “What is the theory of relativity?”, in *Ideas and Opinions*, New York: Crown Publishers, 1954, pp. 227–232.
* Folse, H.J., 1985, *The Philosophy of Niels Bohr*, Amsterdam: Elsevier.
* Frank, R.L. and E.H. Lieb, 2012, “Entropy and the uncertainty principle”, *Annales Henri Poincaré*, 13: 1711–1717.
* Heisenberg, W., 1925, “Über quantentheoretische Umdeutung kinematischer und mechanischer Beziehungen”, *Zeitschrift für Physik*, 33: 879–893.
* –––, 1926, “Quantenmechanik”, *Die Naturwissenschaften*, 14: 899–894.
* –––, 1927, “Ueber den anschaulichen Inhalt der quantentheoretischen Kinematik and Mechanik”, *Zeitschrift für Physik*, 43: 172–198. English translation in Wheeler and Zurek 1983: 62–84.
* –––, 1927, “Ueber die Grundprincipien der ‘Quantenmechanik’ “ *Forschungen und Fortschritte*, 3: 83.
* –––, 1928, “Erkenntnistheoretische Probleme der modernen Physik”, in Heisenberg 1984: 22–28.
* –––, 1930, *Die Physikalischen Prinzipien der Quantenmechanik*, Leipzig: Hirzel. English translation *The Physical Principles of Quantum Theory*, Chicago: University of Chicago Press, 1930.
* –––, 1931, “Die Rolle der Unbestimmtheitsrelationen in der modernen Physik”, *Monatshefte für Mathematik und Physik*, 38: 365–372.
* –––, 1958, *Physics and Philosophy*, New York: Harper.
* –––, 1969, *Der Teil und das Ganze*, München : Piper.
* –––, 1975, “Bemerkungen über die Entstehung der Unbestimmtheitsrelation”, *Physikalische Blätter*, 31: 193–196. Translation in Price and Chissick, 1977.
* –––, 1984, *Gesammelte Werke*, Volume C1, W. Blum, H.-P. Dürr, and H. Rechenberg (eds), München: Piper.
* Hilgevoord, J., 1996, “The uncertainty principle for energy and time I”, *American Journal of Physics*, 64: 1451–1456.
* –––, 1998, “The uncertainty principle for energy and time II”, *American Journal of Physics*, 66: 396–402.
* –––, 2002, “Time in quantum mechanics”, *American Journal of Physics*, 70: 301–306.
* –––, 2005, “Time in quantum mechanics: a story of confusion. *Studies in History and Philosophy of Modern Physics*, 36: 29–60.
* Hilgevoord, J. and D. Atkinson, 2011, “Time in quantum mechanics”, in *The Oxford Handbook of Philosophy of Time*, C. Callender (ed.), Oxford: Oxford University Press, pp. 647–662.
* Hilgevoord, J. and J. Uffink, 1988, “The mathematical expression of the uncertainty principle”, in *Microphysical Reality and Quantum Description*, A. van der Merwe et al. (eds.), Dordrecht: Kluwer, pp. 91–114.
* –––, 1990, “A new view on the uncertainty principle”, in *Sixty-Two years of Uncertainty, Historical and Physical Inquiries into the Foundations of Quantum Mechanics*, A.E. Miller (ed.), New York: Plenum, pp. 121–139.
* –––, 1991, “Uncertainty in prediction and inference”, *Foundations of Physics*, 21: 323–341.
* Honner, J., 1987, *The Description of Nature: Niels Bohr and The Philosophy of Quantum Physics*, Oxford: Clarendon Press.
* Jammer, M., 1974, *The Philosophy of Quantum Mechanics*, New York: Wiley.
* Jordan, P., 1927, “Über eine neue Begründung der Quantenmechanik II”, *Zeitschrift für Physik*, 44: 1–25.
* Kaiser, H., S.A. Werner, and E.A. George, 1983, “Direct measurement of the longitudinal coherence length of a thermal neutron beam”, *Physical Review Letters*, 50: 560.
* Kennard, E.H., 1927, “Zur Quantenmechanik einfacher Bewegungstypen”, *Zeitschrift für Physik*, 44: 326–352.
* Landau, H.J. and H.O. Pollak, 1961, “Prolate spheroidal wave functions; Fourier analysis and uncertainty II”, *Bell Systems Technical Journal*, 40: 63–84.
* Maassen, H. and J. Uffink, 1988, “Generalized entropic uncertainty relations”, *Physical Review Letters*, 60: 1103–1106.
* Miller, A.I., 1982, “Redefining Anschaulichkeit”, in: A. Shimony and H.Feshbach (eds) *Physics as Natural Philosophy*, Cambridge, MA: MIT Press.
* Moore, W., 1989, *Schrödinger, Life and Thought*, Cambridge: Cambridge University Press, p. 221.
* Muga, J.G., R. Sala Mayato, and I.L. Egusquiza (eds.), 2002, *Time in quantum mechanics*, Berlin: Springer.
* Muller, F.A., 1997, “The equivalence myth of quantum mechanics”, *Studies in History and Philosophy of Modern Physics*, 28: 35–61, 219–247; ibid. 30(1999): 543–545.
* Murdoch, D., 1987, *Niels Bohr’s Philosophy of Physics*, Cambridge: Cambridge University Press.
* Nairz, O., M. Andt, and A. Zeilinger, 2002, “Experimental verification of the Heisenberg uncertainty principle for fullerene molecules”, *Physical Review A*, 65, 032109. doi:10.1103/PhysRevA.65.032109
* Ozawa, M., 2003, “Universally valid formulation of the Heisenberg uncertainty relation on noise and disturbance in measurement. *Physical Review A*, 67: 042105.
* Pashby, T., 2015, “Time and quantum theory: A history and a prospectus”, *Studies in History and Philosophy of Modern Physics*, 52: 24–38.
* Pauli, W., 1979, *Wissentschaftlicher Briefwechsel mit Bohr, Einstein, Heisenberg u.a.*, Volume 1 (1919–1929) A. Hermann, K. von Meyenn and V.F. Weiskopf (eds) Berlin: Springer.
* Popper, K., 1967, “Quantum mechanics without ‘the observer’”, in *Quantum Theory and Reality*, M. Bunge (ed.), Berlin: Springer.
* Price, W.C. and S.S. Chissick (eds), 1977, *The Uncertainty Principle and the Foundations of Quantum Mechanics*, New York: Wiley.
* Regt, H. de, 1997, “Erwin Schrödinger, *Anschaulichkeit*, and quantum theory”, *Studies in History and Philosophy of Modern Physics*, 28: 461–481.
* Robertson, H.P., 1929, “The uncertainty principle”, *Physical Review*, 34: 573–574; reprinted in Wheeler and Zurek 1983: 127–128.
* Scheibe, E., 1973, *The Logical Analysis of Quantum Mechanics*, Oxford: Pergamon Press.
* Uffink, J., 1985, “Verification of the uncertainty principle in neutron interferometry”, *Physics Letters*, 108 A: 59–62.
* –––, 1990, *Measures of Uncertainty and the Uncertainty Principle*, Ph.D. thesis, University of Utrecht, [available online](http://www.projects.science.uu.nl/igg/jos/publications/proefschrift.pdf) with [online errata](http://www.projects.science.uu.nl/igg/jos/publications/proefschrifterrata.pdf).
* –––, 1993, “The rate of evolution of a quantum state”, *American Journal of Physics*, 61: 935–936.
* –––, 1994, “The joint measurement problem”, *International Journal of Theoretical Physics*, 33: 199–212.
* Uffink, J. and J. Hilgevoord, 1985, “Uncertainty principle and uncertainty relations”, *Foundations of Physics*, 15: 925–944.
* von Neumann, J., 1932, *Mathematische Grundlagen der Quantenmechanik*, Berlin: J. Springer.
* Wheeler, J.A. and W.H. Zurek (eds), 1983, *Quantum Theory and Measurement*, Princeton, NJ: Princeton University Press.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=qt-uncertainty). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/qt-uncertainty/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=qt-uncertainty&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](http://philpapers.org/sep/qt-uncertainty/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

* Busch, P., P. Lahti, and R. Werner, 2014, “[Measurement uncertainty: Reply to critics](https://arxiv.org/pdf/1402.3102v1),” February 13, arXiv:1402.3102 [quant-ph].
* Ozawa, M., 2013, “[Disproving Heisenberg’s error-disturbance relation](https://arxiv.org/pdf/1308.3540v1),” August 16, arXiv:1308.3540 [quant-ph].
* [Exhibit on Heisenberg and the uncertainty principle](https://history.aip.org/exhibits/heisenberg/), from the American Institute of Physics
* [The Nobel prize site](http://nobelprize.org/physics/laureates/1932/heisenberg-bio.html), containing a short biography of Heisenberg and his 1932 Nobel presentation speech

## Related Entries

[quantum mechanics](https://plato.stanford.edu/entries/qm/) | [quantum mechanics: Bohmian mechanics](https://plato.stanford.edu/entries/qm-bohm/) | [quantum mechanics: Copenhagen interpretation of](https://plato.stanford.edu/entries/qm-copenhagen/)

[Copyright © 2016](https://plato.stanford.edu/info.html#c) by  
Jan Hilgevoord  
[Jos Uffink](http://www.philosophy.umn.edu/people/FacultyProfile.php?UID=jbuffink) <[*jbuffink@umn.edu*](mailto:jbuffink%40umn%2eedu)>
<!--md-padding-ignore-end-->
