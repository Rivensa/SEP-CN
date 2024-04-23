# 量子力学中退相干的作用 the role of decoherence in (Guido Bacciagaluppi)
*首次发表于2003年11月3日；实质性修订于2020年4月21日。*

干涉现象是量子力学中众所周知且至关重要的一部分，著名的双缝实验就是其典型例证。然而，在许多情况下，干涉效应会被人为或自发地抑制。退相干理论正是研究这种情况的精确学科。它与一系列问题相关（或被声称与之相关），从测量问题到时间箭头，特别是关于“经典世界”如何从量子力学中出现的问题。（另请参阅量子理论中的哲学问题条目。）

在第1节中，我们讨论了干涉抑制的概念，并对该理论进行了简化的概述，强调了后面相关的特征。实际上，退相干这个术语涉及到两个主要重叠的研究领域。第一个领域（通常称为“环境”或“动力学”退相干）的特征是研究系统与其环境之间的具体模型（自发）相互作用，以抑制干涉效应。第二个领域（“退相干历史”或“一致性历史”理论）是一个抽象且更一般的形式体系，捕捉了退相干的基本特征。这两个领域显然密切相关，并将依次进行回顾。第2节批评了退相干解决量子力学的测量问题的主张，并讨论了通过包括环境相互作用而加剧该问题。因此，重要的是考虑退相干本身以及与提供可能解决测量问题和相关难题的量子力学基础的各种方法之间的相互作用。第3节涉及退相干在与Everett、玻姆和GRW等主流基础方法以及冯·诺依曼、海森堡和玻尔等传统方法等多种方法之间的关系。最后，在第4节中，我们描述了由退相干使用产生的新兴结构的整体图景，以及一些更具推测性的应用。[1]

自从量子力学的开始以来，干涉的抑制在许多论文中都有所提及，例如莫特（1929）对α粒子轨迹的分析。作为一个独立学科，退相干的现代基础是由 H.-D. Zeh 在 20 世纪 70 年代初奠定的（Zeh 1970, 1973）。同样有影响力的是 W. Zurek 在 20 世纪 80 年代初的论文（Zurek 1981, 1982）。这些早期的退相干例子（例如，分子的左旋态和右旋态之间的干涉抑制）在数学上更容易理解，而较新的例子则不然。Zurek 在《物理学今日》（1991）中提供了一份简明易懂的理论介绍。这篇文章之后，还发表了几封带有 Zurek 回复的信件（1993），其中突出了有争议的问题。更近期的综述可参考 Zeh（2003a）、Zurek（2003）以及 Giulini 等人的书籍（1996 年版 Joos 等人的第二版 2003 年）和 Schlosshauer 的书籍（2007 年）。

 
---

## 1. 退相干理论

双缝实验是一个干涉实验的典型例子。人们反复将电子或其他粒子通过一个带有两个狭缝的屏幕，电子撞击到第二个屏幕上，我们询问在屏幕表面上检测到的概率分布。人们可能天真地尝试通过将在狭缝处检测到的概率与在屏幕上检测到的概率在检测到狭缝的条件下相乘来计算它们。但这些是另一个实验的正确概率，该实验在狭缝处检测到，无论我们是否相信测量与“真实”的波函数坍缩有关（即只有一个分量在测量中存活并继续撞击屏幕[2]）。如果没有这样的检测，通常在概率的正确表达式中还有一个额外的所谓干涉项，而这个项取决于通过狭缝的波分量[3]。

然而，有些情况下，这个干涉项不会出现或可以忽略不计，而天真的公式适用。如果其他系统与电子在狭缝和屏幕之间发生相互作用，导致与通过两个狭缝的波的分量足够纠缠。那么，在屏幕上检测到的概率就好像我们在狭缝处进行了检测一样。

这是不难理解的。如果爱丽丝和鲍勃共享一对纠缠的系统，那么鲍勃可能进行的任何测量结果的概率都不取决于爱丽丝是否也进行任何测量（这是量子力学的无信号定理）。同样，屏幕上的检测模式无法区分仅仅是与其他系统的纠缠还是实际使用这些系统在缝隙处进行检测。

例如，可能会有足够多的杂散粒子与电子发生散射。波函数的两个分量之间的相位关系，即干涉的原因，现在仅在由电子和杂散粒子组成的较大系统的层次上得到明确定义，并且只能在包括较大系统的适当实验中产生干涉。这种干涉抑制现象被称为退相干。

### 1.1 环境退相干

"环境"退相干是通过系统与其环境的适当相互作用而产生的退相干。对环境退相干的研究在很大程度上涉及构建和研究此类相互作用的具体模型。我们已经提到过，可以采用相对较轻的粒子组成的环境与相对较重的粒子发生散射。这样的模型可以用来研究手性分子等。或者可以采用与电磁场相互作用的原子，或者在振子的热浴中采用谐振子，等等。这些模型通常会出现各种有趣的特征：有些是大多数模型共有的，而其他一些则高度依赖于模型。

这些环境相互作用的一个特征是它们抑制了来自某个首选集合的状态之间的干涉（“退相干变量的本征态”）。这可以是一组离散的状态，例如我们在双缝实验的简单示例中的波函数的上部和下部分，或者手性分子模型中的左手和右手状态；当原子与电磁场相互作用时，首选状态将是稳态（这是我们在光谱学中观察到的状态）。或者它可以是一些连续的集合，例如谐振子的“相干态”（在这种情况下，“首选观测量的本征态”或“本征基”这样的术语并不完全准确）。直观的图像是环境通过自发和持续地“测量”由首选状态集合所表征的某个量来监测感兴趣的系统（即环境与系统的相互作用以一种可以原则上用作测量装置的方式进行）。

这种“类似测量”的相互作用直观上不会干扰被监测可观测量的本征态。因此，这些优选态实际上可以通过它们对环境相互作用的稳定性或稳定性来描述。系统与环境纠缠在一起，但在这种相互作用下，干涉被抑制的状态是那些在环境中本身与环境纠缠最少的状态。在这种联系中，人们还说退相干引发了“有效的超选择规则”，意思是以下。严格的超选择规则适用于某些可观测量-在技术术语中称为经典可观测量-与所有可观测量都对易（有关回顾，请参见 Wightman 1995）。直观地说，这些可观测量是无限稳定的，因为没有可能的相互作用可以干扰它们（至少在将相互作用哈密顿量视为可观测量的情况下）。通过有效的超选择规则，类似地，某些可观测量（例如手性）不会受到实际发生的相互作用的干扰。

在许多退相干模型中，优选态在更强的意义上是稳定的，因为关于它们的信息以冗余的方式存储在环境中（例如，因为薛定谔猫与许多杂散粒子（光子、空气分子、灰尘）发生了相互作用）。这些信息以后可以被观察者获取，而不会进一步干扰系统（我们通过截取与猫相互作用的光的一小部分在视网膜上观察到猫是活着还是死了，尽管这可能会有不同的解释）。

优选的状态将取决于相互作用的细节，但在许多情况下，相互作用的特征是与位置有关的势能函数，因此优选的状态通常与位置有关。对于手性分子来说，左手和右手的状态确实由分子中原子的不同空间配置所表征。对于谐振子，人们应该考虑环境“测量”位置的近似本征态，或者更确切地说是位置和动量的近似共同本征态，即所谓的相干态（因为关于飞行时间的信息也记录在环境中）。

由于相干性被分散的特征长度（“相干长度”）可以非常短，因此导致的定位可以在非常短的长度尺度上进行。在空气中漂浮的半径为 a=10^-5cm 的一粒灰尘将在具有 10^-13cm 宽度的空间定位分量之间抑制干涉。更引人注目的是，这个过程的时间尺度通常很短。在暴露于空气中的一微秒后，就达到了这个相干长度，在纳秒的时间尺度上已经实现了 10^-12cm 长度尺度上的干涉抑制。

在环境退相干的文献中，模型往往以描述系统演化的密度算符的主方程形式进行表述。由于退相干的结果，这个密度算符在优选状态的基础上（无论是离散的还是连续的）很快变为（至少近似地）对角线形式。因此，系统的密度算符的主方程本质上等价于对优选状态上的概率分布的演化方程。在优选相干态被优选的模型中，可以将其与经典相空间上的概率分布的 Liouville 演化进行比较，事实上可以得到非常好的定量一致性。

这些特征并不是声称在所有与某些环境的相互作用中都能获得。详细的物理研究是评估哪些系统展示了哪些特征，以及我们从研究特定模型中可以学到的教训有多普遍的问题。因此，应当警惕常见的过度概括。例如，退相干并不仅仅影响所有的“宏观系统”。确实，中等大小的物体，比如地球表面上的物体，会受到大气中的空气的非常有效的退相干作用，这是退相干工作的一个很好的例子。另一方面，也有很好的例子表明，类似退相干的相互作用会影响微观系统，比如α粒子与气泡室中的气体的相互作用。（然而，需要注意的是，这也依赖于α粒子以强烈向外定向的波包叠加态发射出来。）此外，可以说存在着干涉效应没有被抑制的宏观系统。例如，已经证明可以对 SQUID（一种超导设备）进行足够的屏蔽以观察不同宏观电流的叠加态 - 这与人们的预期相反（参见例如 Leggett 1984，尤其是 2002 年第 5.4 节）。Anglin，Paz 和 Zurek（1997）研究了一些行为不良的环境退相干模型，并提供了对其范围的有用修正。

### 1.2 退相干历史

如上所述，在双缝实验中抑制干涉时，可以应用朴素的概率公式，并且我们可以通过为单个电子“轨迹”添加概率来计算屏幕上的探测概率。退相干历史或一致性历史形式主义（始于 Griffiths 1984; Omnès 1988, 1989; 和 Gell-Mann 和 Hartle 1990）将此视为退相干的定义特征。（另请参阅关于量子力学一致性历史方法的条目。各个作者之间存在一些差异，但我们将忽略它们。[6]）

简而言之，形式主义如下。取时间 t1，…，tn 的序列，并在这些时间上取正交的（海森堡图像）投影，具有

∑α1Pα1(t1)=1,…,∑αnPαn(tn)=1(1)

一个将历史定义为给定时间点上投影的时间顺序序列，分别从每个家族中选择一个投影。这样的历史形成了一个所谓的备选和穷尽的历史集合。

取一个状态 ϱ。我们希望为历史集合定义概率。如果采用基于 Born 规则的重复应用的常规概率公式，我们得到

Tr(Pαn(tn)…Pα1(t0)ϱPα1(t0)…Pαn(tn))(2)

我们将(2)定义为“候选概率”。一般情况下，这些概率会出现干涉现象，也就是说，对它们求和并不等同于在(2)中省略中间投影（“粗粒化”历史）。在任意一对不同历史的干涉项都消失的特殊情况下，我们称该历史集满足一致性或（弱）退相干条件。很容易看出，这个条件的形式为

ReTr(Pα′n(tn)…Pα′1(t1)ϱPα1(t1)…Pαn(tn))=0(3)

对于任意一对不同历史（“退相干泛函”的实部为零）。

如果满足这个条件，我们可以将（2）视为定义具有历史轨迹的随机过程的分布函数。根据这个抽象形式主义的解释，退相干简单地定义为量子概率在后续事件上可以被计算，就好像状态在中间时间坍缩了一样。从定性上讲，我们可以恢复经典行为，也就是历史被分配了量子概率，但仍然满足经典的总概率公式。

退相干条件的一个更强形式是退相干泛函的实部和虚部都为零，可以用来证明关于（较早）事件的（较晚）“永久记录”的存在的定理，这是对“环境监测”概念的一种推广。例如，如果状态 ϱ 是一个纯态 |ψ⟩⟨ψ|，那么（强）退相干条件对于所有 n 来说等价于向量的正交性

Pαn(tn)…Pα1(t1)|ψ⟩(4)

而这反过来等同于存在一组正交投影 Rα1…αi(ti)（对于任何 ti≤tn），这些投影一致地扩展了给定的历史集，并与原始集合的历史完全相关（Gell-Mann 和 Hartle 1990）。然而，请注意，这些“广义记录”不需要存储在单独的自由度中，例如环境或测量装置中。[9]

各种作者认为退相干历史理论提供了量子力学的一种解释。例如，Gell-Mann 和 Hartle 有时将退相干历史视为一种新埃弗雷特方法，而 Omnès 似乎认为历史沿着新哥本哈根的思路（也许作为一个实验背景，创造了一个可以延伸到过去的“量子现象”）。[10] Griffiths（2002）可能是这些解释方法中最详细的一个（还回应了一些早期的批评，例如 Dowker 和 Kent（1995, 1996））。然而，就其本身而言，这种形式主义在解释上是中立的，并且具有特别的优点，即当干涉被抑制时，可以在时间上重新识别状态的不同组成部分，使得这种形式主义特别适用于讨论非干涉组分的时间演化。

### 1.3 比较

在环境退相干和退相干历史方面的工作往往不幸地相对独立。在比较这两者时，我们需要同时考虑可以用两种形式描述的情况（并询问这两种描述是否等价），以及只适用于退相干历史更抽象形式的情况。

关于后者，当然存在一些情况，退相干泛函仅仅是由于数值巧合而消失。但也存在一些系统性的干涉消失情况，即在没有环境监测的情况下，存在“由守恒引起的”退相干（参见 Halliwell 2010）。举个例子，考虑一个孤立系统（例如，具有离散能级），并考虑在任意时间上将其投影到能级上的历史。由于能量守恒，每个单独的组分在能量基下遵循薛定谔方程而不与其他组分干涉，相应的历史退相干。虽然退相干历史文献中的一些作者认为由守恒引起的退相干是该理论的一个重要新颖之处，但应注意到它缺乏环境引起的退相干的稳健性，因为它缺乏主动抑制干涉的机制。

关于前一种情况，环境退相干也可以用退相干历史的术语来描述。需要采用大于退相干时间尺度的时间间隔和对首选态的投影。然后，环境监测确保所得到的历史退相干。（在连续的首选态集合的情况下，可能需要稍微推广历史形式主义，使用“效果”而不是投影；参见例如 Kent 1998）。从这个意义上说，环境退相干可以看作是退相干历史的特例，但是这两种形式主义给出的描述略有不同。虽然退相干历史定义了首选态的多时间分布（在离散时间上），环境退相干模型基本上描述了首选态的单时间分布。虽然它们具有在所有时间上都定义良好的优势，但这些单时间分布并没有明确描述个体组分的时间演化。

在许多环境退相干模型中，然而，即使在个体组成部分的水平上，动力学行为也是显而易见的。具体而言，在首选态为相干态的模型中，将系统的约化态的主方程与经典 Liouville 分布的演化进行比较，可以发现个体组成部分的轨迹实际上与相应的牛顿轨迹非常接近。直观地说，可以通过注意到首选态（即波包在位置上狭窄且保持狭窄，因为在动量上也狭窄）是倾向于与环境最少纠缠的态来解释这一点。因此，它们倾向于基本上不受干扰地遵循薛定谔方程。但事实上，狭窄的波包大致遵循牛顿轨迹，至少如果它们所处的外部势在波包的宽度上足够均匀（这类结果被称为“埃伦费斯特定理”）。因此，得到的轨迹将接近于牛顿轨迹（在相关尺度上）[11]。

这个图像不能是精确的，因为一旦一个局域化的波包扩散足够多，它将被分解成新的更局域化的波包，因此直观上会出现某种轨迹的“扇形展开”。实际上，这种偏离牛顿行为的现象既是个体组成部分扩散的倾向，也是与环境相互作用的局部化效应所致，后者进一步增强了组成部分的集体扩散（因为位置的收窄对应于动量的扩展）。参见 Rosaler（2016）的非常好的处理（使用了“开放系统”版本的埃伦费斯特）。一个生动的例子是云室中观察到的α粒子的轨迹，它们与牛顿轨迹非常接近，除了额外的微小“弯曲”[12]。

在其他模型中，例如当电磁场优先考虑原子的稳态时，与经典方程相比就没有这种比较，多时间分布的缺乏成为模型的限制。通过将环境退相干模型与更多现象学模型的“连续测量”相结合（如 Bhattacharya、Habib 和 Jacobs 2000 年的不同示例中所做的那样），这些限制可能被克服。正如 Brun（2002 年）所示，在退相干历史形式主义中可以从第一原理中获得稳态（量子跃迁！）的动力学。

## 2. 退相干和测量问题

人们经常听到退相干解决了量子力学的测量问题的说法（请参阅量子理论中的哲学问题条目）。从事退相干研究的物理学家通常更清楚，但重要的是要看到，即使在存在退相干现象的情况下，测量问题仍然存在，或者实际上变得更糟。

测量问题实际上是一系列问题的复杂集合，围绕着一个问题：是否可以将量子力学本身应用于量子测量的描述。如果将量子力学视为一种现象学理论，可以否定这一点。但是，如果量子力学不是解释量子测量现象学的基本理论，那么问题就是如何解释“测量”和“结果”是什么。这就是广义上的测量问题。

相反，如果我们假设量子力学本身适用于对测量的描述，那么问题就变成了如何在量子理论中建模测量，具体而言是作为“系统”和“仪器”之间的某种适当的相互作用，并且是否可以通过这样做从系统和仪器的幺正演化中推导出量子测量的三个现象学方面：测量具有结果，这些结果以某种特征概率获得，并且根据测量结果，系统的状态通常以一种特征方式转变（有关该问题的细分，请参见 Maudlin 1995）。然而，这种推导似乎是不可能的。

实际上，正如冯·诺伊曼（1932 年，第 VI.3 节）已经指出的那样，我们不能假设正确的概率是由于我们对宏观仪器的确切状态一无所知而产生的。但无论仪器的确切初始状态如何，如果系统（比如一个电子）被描述为两个给定状态的叠加，比如自旋在 x 方向上等于+12 和自旋在 x 方向上等于-12，而我们让它与一个与这些状态耦合的测量仪器相互作用，复合体的最终量子态将是两个分量的和，一个分量是仪器与 x 自旋=+12 耦合（已经记录）的情况，另一个分量是仪器与 x 自旋=-12 耦合（已经记录）的情况。[13]这就是狭义上的测量问题。

### 2.1 解决测量问题？

干涉通常在宏观物体的局域化态之间被很好地抑制，这表明它至少与宏观物体为什么实际上对我们来说呈现出局域化态有关。在测量仪器的特殊情况下，这将与我们为什么从未观察到仪器指向两个不同结果有关。模拟包括与环境的退相干相互作用的测量是否能够推导出测量总是有结果？这在退相干的“民间传说”中有所涉及，但正如许多物理学家和哲学家所指出的（例如 Pearle 1997; Bub 1997，第 8 章; Adler 2003; Zeh 2003a，第 14-15 页），事实并非如此：虽然退相干解释了为什么我们不观察到测量结果的叠加态，但它并不能解释为什么我们首先观察到测量结果。

实际上，如果我们在描述中包含退相干，会发生什么？退相干告诉我们，除其他事物外，大量的相互作用一直在发生，其中仪器的不同定位状态，例如电子的不同 x 自旋值，与环境的不同状态相耦合。但是现在，根据上述相同的论证，电子、仪器和环境的组合将是一个超位置的组合，其中（i）对应于环境与仪器相耦合，进而与自旋值+12 相耦合的状态，以及（ii）对应于环境与仪器相耦合，进而与自旋值-12 相耦合的状态。因此，我们面临以下选择，无论我们是否包含退相干：要么复合系统不是由这样的超位置描述的，因为薛定谔方程实际上会崩溃并需要修改，要么它由这样的超位置描述，但是我们需要用适当的隐藏变量补充量子力学，或者对超位置给出适当的解释。

因此，退相干本身并不能解决测量问题，至少除非它与适当的理论基础方法相结合-无论是试图解决测量问题的方法，如玻姆、埃弗雷特或 GRW；还是试图消解测量问题的方法，如哥本哈根诠释的各种版本。（另请参见 Wallace 2012b。）

### 2.2 扩大测量问题

退相干显然既不是违背薛定谔方程的动力学演化，也不是理论的新补充或解释。然而，正如我们将讨论的那样，它在薛定谔演化中揭示了重要的动力学效应，并可能暗示了可能的解释性动作。因此，它对量子力学的哲学有很多贡献。然而，起初，似乎讨论环境相互作用实际上会加剧现有的问题。直观地说，如果环境在没有我们干预的情况下进行了许多自发测量，那么测量问题应该更广泛地适用，也适用于这些自发发生的测量。

的确，众所周知，宏观物体的局域态在自由薛定谔演化下随时间扩散得非常缓慢（即，如果没有相互作用），但如果它们与环境相互作用，情况就会有所不同。尽管与环境耦合的不同组分在个体上非常局域化，但它们集体上的扩散可能要大几个数量级。也就是说，物体和环境的状态可以是无数个非常局域化的项的叠加，每个项的位置略有不同，并且在宏观距离上集体扩展，即使是在日常物体的情况下。[14]鉴于日常宏观物体特别容易受到退相干相互作用的影响，这就引发了一个问题，即量子力学是否能解释日常世界的出现，即使与测量问题无关。

因此，存在一个更广泛的问题，我们可以称之为量子力学经典制度问题，与测量问题非常类似。量子力学能否应用于经典系统的描述？我们可以否认它（正统方法如此），但那么经典系统到底是什么？如果我们还将量子力学应用于似乎存在于我们日常世界中的系统，我们能否从量子力学中推导出这些“经典”系统的特征行为？但这样的推导似乎是不可能的。简单地说：如果一切都与一切相互作用，一切都与一切普遍纠缠在一起，那将是一个比测量仪器与被测系统纠缠在一起更严重的问题。

## 3. 退相干在不同量子力学方法中的作用

尽管退相干相互作用将测量问题扩展到经典制度的更广泛问题，但退相干与解决这两个问题相关，因为在波函数的组成部分级别上，退相干现象的量子描述（令人着迷！）既包括测量结果和其他量子现象（如量子跃迁），也包括经典行为。这表明，在很大程度上，退相干为解决测量问题和经典制度问题提供了一个解释中立的策略（Rosaler 2016 更详细地发展了这个论点），而解决这些问题的方法是将退相干与主要的量子力学基础方法相结合。

量子力学基础有多种方法，然而（参见量子理论中的哲学问题条目）。在某些情况下，只需指出一种方法如何符合退相干所建议的整体图景，其他方法实际上较难利用退相干的结果。（这里使用“方法”一词更合适，而不是“解释”一词，因为其中几种实际上是对该理论的修改或补充。）因此，我们将依次讨论几种方法及其与退相干的关系。它们将是：物理哲学中最广泛的三种方法（埃弗雷特、玻姆和 GRW），然后是冯·诺伊曼、海森堡和玻尔等更“正统”的方法，以及其他一些方法。

我们将从埃弗雷特理论（或多世界诠释）的一些主要变体开始。实际上，这与退相干最密切相关，因为后者可以用来自然地识别出宇宙波函数中的稳定（如果分支）结构，这些结构可以实现埃弗雷特观点中的多重世界、测量记录或意识体验。另一种可以说是关键地利用退相干的方法是导引波理论（或德布罗意-玻姆理论，或玻姆力学），其中粒子位置（或其他适当的“可观测量”）在其时间演化中由宇宙波函数引导。后者的分支结构显然会对其引导的变量的演化特征产生影响。相反，直观上，自发坍缩理论与退相干关系较小，因为它们试图抑制不需要的叠加态。然而，可以说它们也能够利用退相干，可能有一些限制。

更传统的量子力学方法在某种程度上偏重于测量或观察的概念，与退相干的联系可能不太明显，实际上与之不太契合，但我们将研究冯·诺依曼、海森堡和玻尔的观点。最后，我们将简要介绍其他方法，并谈论它们与退相干的各种关系。这些方法包括纳尔逊的随机力学、模态解释和 QBism。

### 3.1 埃弗雷特理论

埃弗雷特理论（参见埃弗雷特的相对态解释和多世界诠释的条目）最初于 1957 年开发，早于退相干理论（Everett 1957）。正如我们将看到的，近年来退相干已成为该理论的一个定义性概念，但它与埃弗雷特最初的表述也相当契合。

埃弗雷特自己对该理论的核心技术概念是相对态：例如，电子相对于仪器的相应读出态处于自旋向上的状态，相对于其他读出态处于自旋向下的状态。但埃弗雷特关注的是相对态在宇宙波函数中稳定结构的出现。他的典型例子是氢原子：将一个质子和一个电子放入一个盒子中，两者都分布在整个体积上。过一段时间，质子和电子会放松下来。质子的位置仍然分布在整个盒子上，但相对于质子的每个位置态，电子现在将处于氢原子的常规基态。根据埃弗雷特的观点，这就是我们所说的稳定原子的形成。埃弗雷特以同样的方式思考经典系统（比如炮弹！），并使用这些论证来证明经典系统的存在，特别是那些足够复杂以存储（或者可能对其环境进行测量类似的相互作用）记录的系统。埃弗雷特的目标是恢复这种“伺服机构”的记忆寄存器的量子力学的常规预测。

显然，退相干理论是一个理想的技术工具，如果（像埃弗雷特一样）希望在宇宙波函数中识别稳定结构。事实上，该领域的一些主要研究人员，如泽（2000 年）和（也许更谨慎地）祖雷克（1998 年）以及格尔曼和哈特尔（例如 1990 年），认为退相干最自然地可以用埃弗雷特式的解释来理解。退相干的这种作用最为突出地被桑德斯（例如 1993 年）和华莱士（例如 2003 年）强调，并且实际上是自 1990 年代中期以来埃弗雷特理论在物理哲学中出现的非凡复兴的原因。

直到那时，埃弗雷特被认为遭受了“优选基础”的问题：[19]人们认为，如果不手动确定什么应该被视为“世界”，那么定义这样的世界的可能方式太多，或者定义相对状态的方式太多。但是，寻找已经存在于波函数中的可能相关结构，可以在不假设存在某些优选状态（无论它们是否构成正交基）的情况下，识别出世界（或其他相关结构）。

对这种认同的辩解可以通过以下方式给出：建议“世界”应该是一个时间上延伸的结构，因此随时间的重新识别将是定义世界的必要条件；或者类似地，建议为了观察者能够进化，必须有过去事件的稳定记录（参见Saunders 1993和未发表的Gell-Mann和Hartle 1994 - 请参阅下面的其他互联网资源部分）；或者观察者必须能够通过环境中冗余信息的存在来访问稳健状态（Zurek的“存在解释”，1998年）[20]。但是，关于如何使用宇宙波函数中的结构来理解埃弗雷特，退相干的使用的最全面的辩解是由Wallace给出的，他从他的（2003年）开始，并在他的书（2012a）中给出了最终形式。Wallace将他的讨论置于基于丹尼特的“真实模式”概念的出现方法的更广泛背景中。如果从较低级别（更基本）理论的解决方案到较高级别理论的解决方案之间存在相对简单的映射，那么较高级别理论就是由较低级别理论的功能实例化的。因此，较高级别结构被简化为在更基本级别上的模式，这些模式在（准）丹尼特意义上是真实的，因为它们在预测和解释更高级别现象方面是客观有用的。同时，它们是出现的，因为它们可以被多重实现，并且因为只有在自上而下的视角中才可能找到相关的映射。埃弗雷特的世界就是这样的真实模式，因为退相干确保它们彼此动力上独立。

或者，可以从一个全局的世界概念转而看待（本地）系统的（混合）状态的组成部分，可以从这样的角度来看，退相干定义的不同组成部分将分别影响（另一个系统的状态的不同组成部分），或者从这样的角度来看，它们将分别构成系统的有意识体验（如果有的话）。前者与 Everett 的关系性解释（由 Saunders 在 1990 年代提出，例如 1993 年）以及 Zurek 的观点（1998 年）可能是一致的，也可能与 Everett 的（1957 年）相对状态的原始概念有关。[21] 后者直接导致了 Zeh（2000 年；也是 2003a，第 24 页）所使用的“多心灵”概念。正如 Zeh 所说，冯·诺依曼（参见下面的第 3.4.1 节）所引用的“心理物理平行性”应该被理解为心理在物理上的随附要求：只有一个心理状态被体验，因此在物理状态中应该只有一个相应的组成部分。在一个退相干的非坍缩宇宙中，可以引入一个新的心理物理平行性，其中个体心灵随附于物理状态中的每个不相互干涉的组成部分。（这与 Albert 和 Loewer（1988 年）的多心灵解释不同，其中心理不随附于物理，因为个体心灵具有自己的跨时标身份。[22]）Zeh 确实建议，在退相干的情况下，这是量子力学最自然的解释。[23]

### 3.2 导引波理论

“隐藏变量”方法试图将量子现象解释为深层理论中产生的平衡统计效应，与试图通过统计力学理解热力学类似（参见关于统计力学哲学的条目）。其中最发展的是所谓的波导理论，特别是德布罗意和玻姆的理论（参见关于玻姆力学的条目）。波导理论是量子力学的非坍缩形式，将波函数赋予决定系统演化（“引导”、“指导”）的角色，例如德布罗意（1928 年）和玻姆（1952 年）的理论中的粒子构型，或贝尔（1987 年，第 19 章）的“可观测”量子场论中的费米子数密度，或者各种波导量子场论中的场构型（有关最新调查，请参见 Struyve 2011）。

德布罗意的想法是修改经典哈密顿力学，使其类似于经典波动光学，通过用物理波的相位 S 替代 Hamilton 和 Jacobi 的作用函数。当然，这样的“波动力学”会产生非经典运动，但为了理解德布罗意动力学与典型量子现象的关系，我们必须包括玻姆（1952 年，第二部分）关于坍缩出现的分析。在测量的情况下，玻姆认为波函数演化为组成部分的叠加，这些组成部分在被测系统和仪器的总配置空间中是分离的，并且总配置“被困”在波函数的单个组成部分中，这将引导其进一步演化，就像波函数坍缩了一样（“有效”波函数）。这种分析使得我们能够恢复测量时的表观坍缩（并且通过统计考虑进一步恢复量子概率）。

自然而然地，我们可以将这种分析从由仪器引起的测量情况扩展到退相干理论中环境进行的“自发测量”，从而应用相同的策略来恢复量子和经典现象。由此得到的图像是，在退相干的情况下，德布罗意-玻姆理论描述了被退相干相互作用选择的极其局域化的组分之一内被困的粒子的运动。因此，德布罗意-玻姆轨迹将参与由退相干定义的经典运动（组分的宽度）。这种使用退相干的方法可以解决德布罗意理论的“经典极限”可能性的难题，例如Holland（1996）所讨论的难题。例如，一个令人困惑的问题是，在德布罗意-玻姆理论中，具有不同初始条件的轨迹不能相交，因为波通过一阶方程引导粒子，而众所周知，牛顿的方程是二阶的，牛顿理论中的轨迹可以相交。然而，由退相干产生的不干涉组分确实可以相交，粒子在其中被困的轨迹也可以相交。

如果退相干的主要实例确实与构型分离的实例相一致，那么德布罗意-玻姆理论可以利用退相干的结果来解释经典结构的形成，同时提供了一个解释量子力学的解释，解释了为什么这些结构确实与观测相关。[24] 这个图像是自然的，但并非不言自明。德布罗意-玻姆理论和退相干考虑到两个先验不同的机制与表观坍缩相关：分别是构型空间中组分的分离和干涉的抑制。虽然前者显然意味着后者，但显然退相干并不意味着构型空间的分离。然而，可以预期的是，退相干的相互作用形式近似于位置测量。

Rosaler（2015, 2016）对上述建议的波导理论中退相干的作用进行了讨论。Bohm 和 Hiley（1993 年，第 8 章）给出了非正式的讨论，Appleby（1999 年）给出了部分结果，Sanz 和合作者进行了一些模拟实验（例如 Sanz 和 Borondo 2009 年）。Toroš，Donadi 和 Bassi（2016 年）也得出了相关结果，他们与自发坍缩模型有定量的对应关系（参见 Romano 2016 年）。Allori（2001 年）提出了一种完全不同的方法（参见 Allori 和 Zanghì 2009 年）。

尽管如上所述，退相干可能有助于在非相对论粒子理论的情况下恢复波导轨迹的经典性，但在场论的情况下，这种策略是否同样有效尚不清楚。Saunders（1999）和 Wallace（2008，2012b）提出了对此的疑问。基本上，这些作者怀疑配置空间变量或其粗粒化是否确实是退相干变量。[28]

### 3.3 自发坍缩理论

自发坍缩理论试图修改薛定谔方程，使得不同的“日常”状态的叠加不会出现或者非常不稳定。最著名的这种理论是所谓的 GRW 理论（Ghirardi Rimini and Weber 1986），其中一种物质粒子会在随机时间内自发定位，即它会经历一种用于描述近似位置测量的坍缩形式。[29]在最初的模型中，每个粒子独立发生坍缩（因此大量粒子更频繁地“触发”坍缩）；在后来的模型中，每个粒子的频率由其质量加权，因此坍缩的总体频率与质量密度相关。[30]

能否在 GRW 中利用退相干？这些方法与退相干直观上似乎没有太大关系，因为它们试图压制由退相干产生的那些叠加态。然而，它们与退相干的关系是有趣的（正如我们将在下一节中看到的那样），并且与冯·诺依曼的坍缩假设至少隐含地发挥的角色有所不同。

至少在定性上，由于自发坍缩产生了定位，其效果在形式上与一些退相干模型中的效果相似。但我们有的是“真正的”坍缩，而不是干涉的抑制，自发坍缩发生时系统与其他任何东西之间没有任何相互作用。在退相干相互作用确实采取近似位置测量的形式的情况下，自发坍缩与退相干之间的关系可能归结为定量比较。如果坍缩比退相干发生得更快，那么与退相干相关的叠加态组分将没有时间产生，而且只要坍缩理论成功地恢复了经典现象，退相干在这种恢复中就不起作用。相反，如果退相干发生得比坍缩快，那么坍缩机制可以找到“现成”的结构，真正地坍缩波函数。

在自发坍缩理论的背景下，对于建模退相干的工作并不明确。然而，对比退相干模型和自发坍缩理论中的相关速率表明，退相干通常更快（特格马克，1993 年，尤其是表 2）。Toroš、Donadi 和 Bassi（2016 年，尤其是第五节）提出的更详细模型表明，通过环境的存在，坍缩效应被放大，即坍缩速率增加。当退相干相互作用不仅仅偏向位置（例如，当它选择 SQUID 中的电流时），情况可能更加复杂，因为坍缩和退相干实际上可能在不同的方向上产生作用。[31]

退相干与自发坍缩理论之间的关系的另一个方面与自发坍缩理论的实验可测试性有关。实际上，如果我们假设坍缩是一个真实的物理过程，退相干会使得在实践中极其困难去实证地检测自发坍缩发生的时间和位置：一方面，退相干使得看起来好像坍缩已经发生了，而另一方面，它使得难以进行干涉实验来检查坍缩是否尚未发生。（参见 Albert（1992 年）第 5 章中对这个问题的很好讨论）。

更糟糕的是，可能被解释为坍缩的证据可能被重新解释为埃弗雷特或导引波方法中干涉的‘仅仅’抑制，只有那些坍缩理论预测坍缩但系统免受退相干影响（或者也许在这两者之间产生相反作用的情况）才能用于实验上测试坍缩理论。

对于实验可测试性而言，一个特别糟糕的情况与“质量密度”版本中的猜测有关，即自发坍缩的原因可能与引力有关。Tegmark（1993 年，表 2）引用了一些明显不确定的估计值，用于描述假设的量子引力对干涉的抑制，但它们在数量上非常接近 GRW 坍缩导致的干涉破坏速率（至少在微观领域之外）。Kay（1998 年）的更详细研究得出了类似的结论。如果确实存在这些可能效应之间的数量上的相似性，那么将极其难以区分两者。在引力存在的情况下，任何正面效应都可以被解释为对坍缩或退相干的支持。而在那些系统有效地免受退相干影响的情况下（比如在自由落体中进行实验），如果坍缩机制确实是由引力效应触发的，那么也不应该期望发生坍缩。[32]

### 3.4 正统方法

#### 3.4.1 冯·诺伊曼

在他的书的最后第六章中（冯·诺伊曼 1932 年），冯·诺伊曼对量子力学进行了系统讨论，其中包括测量时的坍缩（他称之为类型 1 的干预），与薛定谔方程（类型 2 的干预）有所不同，并且传统上与意识观察有关。（这两种干预类型已经在第 V.1 节中介绍，但冯·诺伊曼将它们的概念讨论推迟到最后一章。）

实际上，冯·诺伊曼在讨论中指出，测量在现象学上和预设的意识观察上与其他物理过程不同。但他坚持保持他所称的“心理-物理平行性”，要求观察过程也可以纯粹以物理术语来描述。因此，他要求在“被观察者”和“观察者”之间划定一个界限，但这个界限可以任意地向观察者一端移动得很远。（请注意，冯·诺伊曼没有明确地将意识归因于坍缩量子态的因果作用。）

因此，冯·诺伊曼需要证明我们在意识观察中的最终预测对于选择在这样一个“测量链”上继续应用干预 2 的距离是不敏感的，从而确保观察过程中的每一步都可以纯粹以物理术语来描述。在冯·诺伊曼关于温度测量的例子中，我们不需要将干预 1 应用于系统本身，而是可以将其应用于温度计，或者眼睛的视网膜，或者视神经，或者在系统和观察者的“抽象自我”之间的物理领域中的任何其他地方。然而，同样地，我们也可以（更加实际地！）直接将其应用于被测系统。

作为初步工作，冯·诺伊曼讨论了系统和子系统之间的状态关系，特别是部分迹的概念和双正交分解定理（即陈述了纠缠量子态总是可以用子系统的两个特殊基之间的完美相关性来表示的定理）。他还证明了（如上所述），通过假设“观察者”最初处于混合态，无法恢复测量的常规统计结果。然后，他证明了总是可以定义一个相互作用哈密顿量，将“被观察”系统的任何给定可观测量的本征态与“观察者”的某个其他适当可观测量的本征态完美相关起来，并留给读者作为练习来证明预测结果与将边界放在何处无关。

读者应该想象一系列这样的相互作用，系统与温度计之间的相互作用，温度计与光之间的相互作用，光与视网膜之间的相互作用等等，并依赖于每一步都没有干涉来论证，即使我们使用干预 2 来描述多个系统，对于干预 1 的应用目的而言，它们的行为就像它们已经坍缩了一样。在这个意义上，尽管他显然没有考虑抑制干涉的机制，但他依赖于退相干。更详细的处理（例如，温度计如何与光相互作用，并且一些光被眼睛采样）将更接近于以环境退相干为基础的分析。

#### 3.4.2 海森堡

关于海森堡对量子力学的观点，也可以进行类似的考虑，尽管海森堡的概念框架与冯·诺依曼的概念框架可能有所不同。

对于海森堡来说，应用量子力学需要在要描述的系统与被视为系统外部并经典处理的部分之间进行“切割”。实际上，如果将量子力学应用于整个宇宙，将得到一个完全封闭的系统，其中什么都不会发生。但是海森堡特别强调任何特殊系统都必须可以用量子力学来描述（实际上，如果将这样的系统置于适当条件下，它原则上总是能够显示干涉效应[33]）。理论的自洽性要求切割可以任意移动离开系统。（关于这些思想的最详细阐述见海森堡对爱因斯坦-波多尔斯基-罗森论证的初稿回复，参见 Crull 和 Bacciagaluppi（2011）的其他互联网资源。）

如果我们考虑海森堡认为是测量的一些例子，那么与冯·诺依曼的情况相比，海森堡切割的可移动性实际上要求退相干。特别是，他对α粒子轨迹的讨论涉及到当α粒子在云室中使一个原子电离时的连续测量。如果我们要求海森堡切割可以移动到整个云室的水平，我们直接转向了对α粒子轨迹的莫特型分析。

海森堡的另一个特点是，他并不认为量子态是基本的，这与退相干理论不符。对他来说，薛定谔的“态”只是一种方便计算（测量）可观测量之间的过渡概率的数学工具。这也可以看作是支持切割点的可移动性的基础：关于坍缩发生的时间并没有事实，物理上重要的只是可观测量之间的过渡概率。然而，这种观点仍然与退相干相容，只要将量子态的作用再次看作是计算过渡概率的方便工具（比如在一致性历史框架中）[34]。

#### 3.4.3 玻尔

玻尔与冯·诺伊曼和海森堡共享的观点是，量子力学原则上适用于任何物理系统（例如，通过他在与爱因斯坦的辩论中愿意将不确定关系应用于实验装置的部分，而不是作为实验装置使用），但否认将其应用于整个宇宙是有意义的。然而，对于玻尔的观点来说，重要的不是在给定的实验安排中切割的可移动性，而是不同的实验安排通常会选择物理系统描述的互补方面，对应于不同但不能结合的同样必要的经典图像。从这个意义上说，对于玻尔来说，经典概念在概念上优先于量子力学。用康德的术语来说，量子态不是量子对象的直观表示，而只是一个符号表示，是通过应用各种互补的经典图像构成的量子现象的简写形式。（另请参阅哥本哈根诠释的条目。）

因此，如果我们将退相干理论理解为指出经典概念实际上可能是从量子力学中产生的方式，我们会看到与玻尔的基本立场存在紧张关系。根据退相干理论，尽管经典概念在某种意义上是自主的，即是 emergent 的，但它们并不是量子力学的基础。然而，从另一个意义上说，退相干确实支持玻尔的观点，因为我们可以将退相干（特别是环境退相干）视为暗示没有经典记录就没有量子现象：抑制干涉创造了恢复客观性的条件，这种客观性通过玻尔所认为的系统和测量装置的独立实际性的丧失而丧失。[35]

这两个方面都可以在波尔及其圈子对埃弗雷特的理论的接受中看到。虽然埃弗雷特认为自己的理论与冯·诺伊曼的方法直接相反，但他相信自己可以为波尔的互补性观念提供理论依据。然而，波尔拒绝将量子态的概念应用于对整个宇宙的描述。（事实上，埃弗雷特的理论在哥本哈根的被拒绝实际上导致了埃弗雷特离开物理学，转而从事军事运筹研究。[36]）

### 3.5 其他方法

#### 3.5.1 纳尔逊的随机力学

Nelson 的（1966 年，1985 年）随机力学是一种提议，旨在恢复波函数和薛定谔方程作为配置空间中基本扩散过程的有效元素的描述。在这个提议成功的程度上，它与德布罗意-玻姆理论有许多共同之处。实际上，Nelson 理论中的粒子的当前速度等于德布罗意-玻姆速度，而 Nelson 理论中的粒子分布等于德布罗意-玻姆理论中的粒子分布（在平衡状态下）。

这意味着许多来自波导理论的结果可以导入到 Nelson 的随机力学中，包括那些基于退相干的结果。特别是，用于恢复坍缩的外观和经典区域的出现的波导理论中使用的策略也可以应用于随机力学的情况，尽管迄今为止在这方面几乎没有什么工作。这样做很可能也会解决一些特定于 Nelson 理论的概念难题，例如 Nelson（2006 年）中提出的两时间相关性问题。

#### 3.5.2 模态解释

第一个量子力学的“模态解释”是由范弗拉森（1973年，1991年）提出的，严格来说，它是对该理论的一种解释（而其他后来的版本更类似于波导理论；请参阅模态解释的条目）。范弗拉森的基本直觉是，系统的量子态应该被理解为描述一系列可能性的集合，由（混合）量子态中的组分表示。他的提议仅考虑单个瞬间的分解，并对随时间的重新识别持不可知态度。因此，它只能直接利用退相干产生的以经典状态为描述的事实，这在范弗拉森的意义上被视为可能性。这确保了量子描述的“经验充分性”（在范弗拉森的建设性经验主义中至关重要）。退相干的动力学方面可以间接利用，因为单时间组分将展示过去的记录，这确保了与观察的充分性，但范弗拉森对其真实性持不可知态度。

一种不同的模态解释流派与 Kochen（1985）、Healey（1989）和 Dieks（参见 Dieks 和 Vermaas 1998）的（不同）观点松散地相关联。我们将重点放在最后一个上以明确观点。Van Fraassen 的可能分解仅限于通过数学标准（与上文 3.4.1 节中提到的双正交分解定理相关）选择的一个，并且明确寻求了一个动态图像（并且后来得到了发展）。在理想（非近似）量子测量的情况下，这种特殊分解与由所测量的可观测量的本征态和相应的指针态定义的分解相一致，因此该解释似乎至少解决了测量问题。在 Dieks 最初的意图中，该方法旨在在退相干相互作用的情况下也为量子力学提供一种有吸引力的解释，因为至少在退相干的简单模型中，同样类型的分解也会选择出那些干涉被抑制的状态（关于非常简并的状态有一个附注）。

有趣的是，当应用于其他退相干模型时，例如 Joos 和 Zeh（1985，第 III.2 节）中的模型，这种方法失败了。实际上，似乎在更一般的退相干模型中，由这个版本的模态解释选择出的分量是非局域化的状态，并且与退相干自然优先的局域化分量无关（Donald 1998；Bacciagaluppi 2000）。因此，与退相干的关系一直是这些模态解释版本的试金石。请注意，Van Fraassen 的原始解释不受此问题的影响，Spekkens 和 Sipe（2001）、Bene 和 Dieks（2002）以及 Berkovitz 和 Hemmo（2006）可能还有一些较新的模态或类似模态的解释也是如此。

模态解释的一般思想，或多或少地符合范弗拉森的精神，可以更广泛地应用。首先，它与退相干历史文献中表达的一些观点相似。退相干历史可以被看作是世界的替代可能历史，其中一个实际上被实现。Hemmo（1996）概述了这些观点的讨论。这些观点也可能与埃弗雷特自己的观点非常接近，他（对于现代读者来说可能令人惊讶）并不是一个现实主义者，而是一个经验主义者。Barrett（2015）给出了与范弗拉森类似的埃弗雷特的讨论。最后一个观点与范弗拉森的观点有一些相似之处，并且同样能够利用退相干的结果，这就是罗维利的关系量子力学（也参见范弗拉森 2010）。

#### 3.5.3 QBism

QBism（最初缩写为“量子贝叶斯主义”）是由克里斯·福克斯和合作者发展起来的一种量子力学观点，它使得德芬内蒂式的主观概率也可以在量子力学中使用（参见关于量子贝叶斯主义和实用主义量子理论观点的条目）。然而，这个立场更加激进，它不仅声称量子概率应该以量子态定义的方式主观解释，而且量子态本身只是代表一个代理人的信念程度的表达。[39]

退相干在 QBism 中的作用被相对较低估。例如，Fuchs 和 Schack（2012 年，第 7 节）将其视为关于反射原理（涉及代理人对其未来信念的信念）的一种表达方式。具体而言，在 von Neumann 测量链的背景下，代理人可以使用由链的后续元素退相干的系统状态作为他们对在前面的测量链元素完成后他们的信念将是什么的信念的表达方式。（当然，如果代理人考虑对与某个环境相互作用的系统进行测量，退相干的结果也可以被考虑在内。）

然而，由于 QBists 不仅对概率而且对量子态持主观主义态度，他们无法利用退相干与整个经典世界的出现之间的相关性，而在这个世界中（人类）代理人实际上已经进化出来 - 除非，也就是说，代理人不被视为代理人，而是被视为纯粹的物理系统。因此，QBist 的困境与玻尔的困境相似：退相干显然与被认为在量子力学分析之前概念上优先的结构的出现相关。

## 4. 退相干的范围

我们在上一节中看到，并非所有的量子力学方法都能充分利用退相干。然而，在那些能够利用退相干的方法中，退相干在产生从幺正的薛定谔（或海森堡）动力学中产生的丰富结构方面起到了重要作用。这个退相干计划（Zeh 2003a，第 9 页）能够成功发展到什么程度呢？

### 4.1 退相干的世界

很明显，退相干对于我们周围宏观世界的许多现象的出现至关重要，从太阳系中的运动（参见对土星的卫星 Hyperion 运动的讨论 - 有关评估，请参见 Schlosshauer（2008））到酶的工作（依赖于它们的分子形状）。然而，从退相干中产生的世界的详细图景充满了微妙之处。

首先，虽然系统越“宏观”，退相干的影响越普遍，通过退相干产生的结构也越复杂，但这只是一个经验法则。并非所有分子都是手性的（例如，结合氨基团往往处于叠加态），而且没有明确的标准来确定何时一个系统应被视为宏观。事实上，即使在超导系统等例子之外，甚至在宏观层面上，可能会有一些令人惊讶的情况，即并非所有的干涉效应都被退相干所抑制。Hameroff和Penrose（1996）提出了一个著名的观点，将意识现象与微管中的量子叠加可能性联系起来（以及通过坍缩对其进行主动抑制）；其他作者将“量子认知”中描述的类似量子的数学效应解释为实际的量子效应（有关这两者，请参阅有关量子意识方法的条目）。目前，大多数宏观量子效应充其量只是推测，但在量子生物学中可以找到一些有关宏观层面上量子叠加的合理案例，特别是关于候鸟导航系统中可能存在的量子效应的研究（Cai、Guerreschi和Briegel，2010年）。

更接近我们的家园，尽管经典世界被认为始终是从量子力学中产生的一种动态模式，但事实证明它并不像我们预期的那样经典。一个有趣的例子是对经典混沌系统的描述。Zurek和Paz（1994）利用允许在组件级别上推导出牛顿轨迹的技术，直接应用于量子力学中推导出混沌轨迹。量子对混沌行为的描述的问题在于，乍一看似乎是不可能的。混沌大致上被描述为系统行为对初始条件的极端敏感性，即不同初始条件产生的轨迹之间的距离在时间上呈指数增长（参见混沌的条目）。由于薛定谔演化是幺正的，它保持所有标量积和所有量子态矢量之间的距离。因此，看起来，接近的初始条件会导致在所有时间上都统一接近的轨迹，不可能出现混沌行为（“量子混沌问题”）。Zurek和Paz分析的关键点在于，由退相干定义的相关轨迹是系统状态的组件级别的。幺正性得以保持，因为与这些不同组件耦合的环境中的矢量是正交的，并且保持正交：组件本身更具体地演化如何是无关紧要的。明确的建模揭示了量子混沌的图景，其中不同的轨迹分支（这是经典混沌所没有的特征，经典混沌是确定性的），然后确实呈指数级分散。（与第3.2节的德布罗意-玻姆理论中轨迹的交叉一样，组件级别的行为与孤立系统的波函数导出的行为在性质上是不同的。）定性图像与我们在 1.3 节中提到的相同，即稍微偏离轨迹的经典轨迹（带有轻微弯曲的轨迹）。然而，在经典混沌系统的情况下，这会产生戏剧性的影响。这意味着像天气这样的系统由于退相干相互作用而一直处于“分支”状态，所以我们通常认为的经典不可预测性实际上是量子不确定性！（有关优秀的讨论，请参见 Wallace 2012a，第 3 章和第 10 章。)

正如我们之前提到的，量子现象本身是通过退相干而出现的世界特征（Zeh 2003a，第 33 页；另请参见 Bacciagaluppi 2002，第 6.2 节）：不仅是实验测量结果的稳定性，从而是波尔所说的“量子现象”的特定意义上，而且量子跃迁或α粒子轨迹的出现是退相干的直接结果。由退相干产生的经典世界因此是一个（或许多！）由量子现象点缀的世界。

### 4.2 进一步的应用

沿着这些线路进一步，Zeh（2003b）认为退相干可以解释量子场论中粒子探测的出现（参见量子场论条目）。因此，只需要在基本概念中包括场，而“粒子”是一个派生概念，与通过“二次量子化”过程引入场所暗示的情况不同。量子场论的另一个应用是建议将量子场论中对电荷的（严格）超选择规则的正当性也可以用退相干的术语来表述。正如 Giulini，Kiefer 和 Zeh（1995；另请参阅 Giulini 等人 1996 年第 6.4 节）所指出的，电荷周围有一个库仑场（在静电学上是无限延伸的；尽管也可以使用迟滞场进行论证）。粒子的不同电荷状态因此与其电场的不同、可能是正交的状态耦合在一起。可以将远场视为有效上不可控的环境，使粒子（和近场）发生退相干，因此不同电荷的叠加确实总是被抑制。[40]

关于退相干的重要性的另一个主张与时间的不对称性有关（参见热力学和统计力学哲学中关于时间不对称性的条目）。就像明显的坍缩（分支）确实是一个时间导向的过程一样，退相干将直接与“量子力学时间箭头”的出现相关。然而，这并不是一个简单的问题，统计力学基础中熟悉的问题也在退相干的背景下出现。具体问题包括环境退相干模型往往假设非常特殊（非纠缠）的初始条件，以及历史方法中退相干泛函的定义本身是不对称的（尽管也存在对称版本）。有关讨论的一系列问题，请参见哈特尔（1998年及其引用文献）、泽（2001年第4章）和巴恰加卢皮（2002年第6.1节；2007年）。退相干是否与其他熟悉的时间箭头有关是一个更具体的问题。实际上，退相干是否能让我们恢复对气体中粒子轨迹的时间对称经典描述，或者是否能让我们直接推导出时间不对称的热力学行为，绕过经典对其理解的尝试？请注意，就像气体等经典系统被认为是混沌的一样，经典统计力学中概率的起源很可能是量子力学的。有关各种讨论，请参见Zurek和Paz（1994年）、Hemmo和Shenker（2001年）以及Wallace（2012a年第9章；以及2001年、2013a年、2013b年的其他互联网资源）。

最后，有人建议退相干应该成为量子引力理论中的一个有用组成部分（参见量子引力条目），如Kiefer（1994）所讨论的。首先，因为将退相干理论推广到完整的量子引力理论应该导致不同经典时空之间的干涉抑制（参见Giulini等人1996年第4.2节）。其次，有人推测退相干可能解决所谓的时间问题，这在（“规范”方法中的）量子引力中是一个突出的难题。这个问题是候选的基本方程（在这种方法中）——Wheeler-DeWitt方程——是一个类似于无时间的薛定谔方程的模拟，根本不包含时间，因此时间需要以某种方式出现。在退相干理论的背景下，例如可以构建玩具模型，其中Wheeler-DeWitt波函数的模拟分解为不相干的组分（对于一个合适的子系统），每个组分满足一个时间相关的薛定谔方程，因此退相干实际上成为时间的源头。Ridderbos（1999）给出了对这些模型的易懂介绍和哲学讨论，并引用了原始论文。还可以参考Halliwell和Thorwart（2002）的较新模型。[41]


## Bibliography

* Adler, S. L., 2003, ‘Why Decoherence has not Solved the Measurement Problem: A Response to P. W. Anderson’, *Studies in History and Philosophy of Modern Physics*, 34 B: 135–142 [[preprint available online](http://arxiv.org/abs/quant-ph/0112095)].
* Albert, D., 1992, *Quantum Mechanics and Experience*, Cambridge, Mass.: Harvard University Press.
* Albert, D., and Loewer, B., 1988, ‘Interpreting the Many Worlds Interpretation’, *Synthese*, 77: 195–213 [[reprint available online](http://sites.rutgers.edu/barry-loewer/wp-content/uploads/sites/195/2019/06/Albert-Loewer-Interpreting-the-Many-Worlds-Interpretation.pdf)].
* Allori, V., 2001, *Decoherence and the Classical Limit of Quantum Mechanics*, Ph.D. Thesis, Università di Genova.
* Allori, V., and Zanghì, N., 2009, ‘On the Classical Limit of Quantum Mechanics’, *Foundations of Physics*, 39(1): 20–32 [[preprint available online](http://arxiv.org/abs/quant-ph/0112009)].
* Anglin, J. R., Paz, J. P., and Zurek, W. H., 1997, ‘Deconstructing Decoherence’, *Physical Review*, A 55: 4041–4053 [[preprint available online](http://arxiv.org/abs/quant-ph/9611045).]
* Appleby, D. M., 1999, ‘Bohmian Trajectories Post-Decoherence’, *Foundations of Physics*, 29: 1885–1916 [[preprint available online](http://arxiv.org/abs/quant-ph/9908029)].
* Bacciagaluppi, G., 2000, ‘Delocalized Properties in the Modal Interpretation of a Continuous Model of Decoherence’, *Foundations of Physics*, 30: 1431–1444.
* –––, 2002, ‘Remarks on Space-Time and Locality in Everett’s Interpretation’, in T. Placek and J. Butterfield (eds), *Non-Locality and Modality* (NATO Science Series, II. Mathematics, Physics and Chemistry, Volume 64), Dordrecht: Kluwer, pp. 105–122 [[preprint available online](http://philsci-archive.pitt.edu/504/)].
* –––, 2007, ‘Probability, Arrow of Time and Decoherence’, *Studies in History and Philosophy of Modern Physics*, 38: 439–456 [[preprint available online](http://arxiv.org/abs/quant-ph/0701225)].
* –––, 2014a, ‘Insolubility from No-Signalling’, *International Journal of Theoretical Physics*, 53(10): 3465–3474 [[preprint available online](http://aura.abdn.ac.uk/bitstream/handle/2164/4956/insolubility_IQSA.pdf?sequence=1)].
* –––, 2014b, ‘A Critic Looks at QBism‘, in M. C. Galavotti, S. Hartmann, M. Weber, W. Gonzalez, D. Dieks and T. Uebel (eds), *New Directions in the Philosophy of Science*, Cham: Springer, pp. 403–416 [[preprint available online](http://philsci-archive.pitt.edu/9803/)].
* –––, 2020, ‘Unscrambling Subjective and Epistemic Probabilities’, in M. Hemmo and O. Shenker (eds.), *Quantum, Probability, Logic – Itamar Pitowsky’s Work and Influence*, Berlin: Springer, pp. 49–89 [[preprint available online](http://philsci-archive.pitt.edu/16393/)].
* Bacciagaluppi, G., and Valentini, A., 2009, *Quantum Theory at the Crossroads: Reconsidering the 1927 Solvay Conference*, Cambridge: Cambridge University Press.
* Barbour, J., 1999, *The End of Time* (London: Weidenfeld and Nicolson).
* Barrett, J. A., 2015, ‘Pure Wave Mechanics and the Very Idea of Empirical Adequacy’, *Synthese*, 192(10): 3071–3104 [[preprint available online](http://www.socsci.uci.edu/~jabarret/bio/publications/everett4.pdf)].
* Bassi, A. and Ghirardi, G., 2000, ‘A General Argument Against the Universal Validity of the Superposition Principle’, *Physics Letters A*, 275(5–6): 373–381 [[preprint available online](http://arxiv.org/abs/quant-ph/0009020)].
* Bassi, A. and Ulbricht, H., 2014, ‘Collapse Models: From Theoretical Foundations to Experimental Verifications’, *Journal of Physics: Conference Series*, 504(1), 012023 [[preprint available online](http://arxiv.org/abs/1401.6314)].
* Bell, J. S., 1987, *Speakable and Unspeakable in Quantum Mechanics*, Cambridge: Cambridge University Press.
* Bene, G., and Dieks, D., 2002, ‘A Perspectival Version of the Modal Interpretation of Quantum Mechanics and the Origin of Macroscopic Behavior’, *Foundations of Physics*, 32: 645–672 [[preprint available online](http://arxiv.org/abs/quant-ph/0112134)].
* Ben-Menahem, Y., and Hemmo, M. (eds), 2012, *Probability in Physics*, Berlin: Springer.
* Berkovitz, J., 2012, ‘The World According to de Finetti: On de Finetti’s Theory of Probability and its Application to Quantum Mechanics‘, in Ben-Menahem and Hemmo (2012), pp. 249–280 [[preprint available online](http://philsci-archive.pitt.edu/8955/)].
* Berkovitz, J., and Hemmo, M., 2006, ‘Modal Interpretations and Relativity: A Reconsideration’, in W. Demopoulos and I. Pitowsky (eds.), *Physical Theory and its Interpretation: Essays in Honor of Jeffrey Bub* (Western Ontario Series in Philosophy of Science, Vol. 72), New York: Springer, pp. 1–28.
* Bhattacharya, T., Habib, S. and Jacobs, K., 2000, ‘Continuous Quantum Measurement and the Emergence of Classical Chaos’, *Physical Review Letters* 85(23): 4852–4855 [[preprint available online](http://arxiv.org/abs/quant-ph/9906092)].
* de Broglie, L., 1928, ‘La nouvelle dynamique des quanta’, in [H. Lorentz (ed.)], *Électrons et Photons: Rapports et Discussions du Cinquième Conseil de Physique* […] *Solvay*, Paris: Gauthiers-Villars. Translated as ‘The New Dynamics of Quanta’ in Bacciagaluppi and Valentini (2009), pp. 374–407.
* Bohm, D., 1952, ‘A Suggested Interpretation of the Quantum Theory in Terms of “Hidden” Variables: I and II’, *Physical Review*, 85: 166–179 and 180–193. Reprinted in Wheeler and Zurek (1983), pp. 369–396.
* Bohm, D., and Hiley, B., 1993, *The Undivided Universe*, London: Routledge.
* Brun, T., 2002, ‘A Simple Model of Quantum Trajectories’, *American Journal of Physics* 70(7): pp. 719–737 [[preprint available online](http://arxiv.org/abs/quant-ph/0108132)].
* Bub, J., 1997, *Interpreting the Quantum World*, Cambridge: Cambridge University Press (2nd corrected edition, 1999).
* Cai, J., Guerreschi, G. G., and Briegel, H. J., 2010, ‘Quantum Control and Entanglement in a Chemical Compass’, *Physical Review Letters*, 104(22): 220502/1–4 [[preprint available online](http://arxiv.org/abs/0906.2383)].
* Derakhshani, M., 2017, *Stochastic Mechanics Without ad hoc Quantization: Theory and Applications to Semiclassical Gravity*, PhD Thesis, Universiteit Utrecht [[available online](http://dspace.library.uu.nl/handle/1874/355284)].
* Dieks, D., and Vermaas, P. E. (eds), 1998, *The Modal Interpretation of Quantum Mechanics*, Dordrecht: Kluwer.
* Donald, M., 1998, ‘Discontinuity and Continuity of Definite Properties in the Modal Interpretation’, in Dieks and Vermaas (1998), pp. 213–222 [[preprint available online](http://people.bss.phy.cam.ac.uk/~mjd1014/uta.html)].
* Dowker, F., and Kent, A., 1995, ‘Properties of Consistent Histories’, *Physical Review Letters*, 75: 3038–3041 [[preprint available online](http://arxiv.org/abs/gr-qc/9409037)].
* Dowker, F., and Kent, A., 1996, ‘On the Consistent Histories Approach to Quantum Mechanics’, *Journal of Statistical Physics*, 82: 1575–1646 [[preprint available online](http://arxiv.org/abs/gr-qc/9412067)].
* Epstein, S. T., 1953, ‘The Causal Interpretation of Quantum Mechanics’, *Physical Review*, 89: 319.
* Everett, H. III, 1957, ‘“Relative-State” Formulation of Quantum Mechanics’, *Reviews of Modern Physics*, 29: 454–462. Reprinted in Everett (2012), pp. 173–196, and in Wheeler and Zurek (1983), pp. 315–323.
* –––, 2012, *The Everett Interpretation of Quantum Mechanics: Collected Works 1955–1980 with Commentary*, ed. by J. A. Barrett and P. Byrne, Princeton: Princeton University Press.
* Felline, L., and Bacciagaluppi, G., 2013, ‘Locality and Mentality in Everett Interpretations: Albert and Loewer’s Many Minds’, *Mind and Matter*, 11(2): 223–241 [[preprint available online](http://philsci-archive.pitt.edu/8495/)].
* van Fraassen, B., 1973, ‘Semantic Analysis of Quantum Logic’, in C. A. Hooker (ed.), *Contemporary Research in the Foundations and Philosophy of Quantum Theory*, Dordrecht: Reidel, pp. 180–213.
* –––, 1991, *Quantum Mechanics: An Empiricist View*, Oxford: Clarendon Press.
* –––, 2010, ‘Rovelli’s World’, *Foundations of Physics*, 40(4): 390–417 [[reprint available online](http://www.princeton.edu/~fraassen/abstract/docs-publd/Rovelli%20publ.pdf)].
* Fuchs, C. A., and Schack, R., 2012, ‘Bayesian Conditioning, the Reflection Principle, and Quantum Decoherence’, in Ben-Menahem and Hemmo (2012), pp. 233–247 [[preprint available online](http://arxiv.org/abs/1103.5950)].
* Gell-Mann, M., and Hartle, J. B., 1990, ‘Quantum Mechanics in the Light of Quantum Cosmology’, in W. H. Zurek (ed.), *Complexity, Entropy, and the Physics of Information*, Reading, Mass.: Addison-Wesley, pp. 425–458 [[preprint available online](http://arxiv.org/abs/1803.04605)].
* Ghirardi, G.C., Rimini, A., and Weber, T., 1986, ‘Unified Dynamics for Microscopic and Macroscopic Systems’, *Physical Review*, D 34: 470–479 [[preprint available online](http://inis.iaea.org/collection/NCLCollectionStore/_Public/17/063/17063260.pdf)].
* Giulini, D., Kiefer, C. and Zeh, H.-D., 1995, ‘Symmetries, Superselection Rules, and Decoherence’, *Physics Letters A*, 199(5–6): 291–298 [[preprint available online](http://arxiv.org/abs/gr-qc/9410029)].
* Giulini, D., Joos, E., Kiefer, C., Kupsch, J., Stamatescu, I.-O., and Zeh, H.-D., 1996, *Decoherence and the Appearance of a Classical World in Quantum Theory*, Berlin: Springer (for the revised edition, see Joos *et al.* (2003)).
* Griffiths, R. B., 1984, ‘Consistent Histories and the Interpretation of Quantum Mechanics’, *Journal of Statistical Physics*, 36: 219–272.
* –––, 2002, *Consistent Quantum Theory*, Cambridge: Cambridge University Press.
* Halliwell, J. J., 1995, ‘A Review of the Decoherent Histories Approach to Quantum Mechanics’, *Annals of the New York Academy of Sciences*, 755: 726–740 [[preprint available online](http://arxiv.org/abs/gr-qc/9407040)].
* –––, 1999, ‘Somewhere in the Universe: Where is the Information Stored when Histories Decohere?’, *Physical Review*, D 60: 105031/1–17 [[preprint available online](http://arxiv.org/abs/quant-ph/9902008)].
* –––, 2010, ‘ Macroscopic Superpositions, Decoherent Histories, and the Emergence of Hydrodynamical Behaviour’ in Saunders *et al*. (2010), pp. 99–118.
* Halliwell, J. J., and Thorwart, J., 2002, ‘Life in an Energy Eigenstate: Decoherent Histories Analysis of a Model Timeless Universe’, *Physical Review*, D 65: 104009/1–19 [[preprint available online](http://arxiv.org/abs/gr-qc/0201070)].
* Hameroff, S. R., and Penrose, R., 1996 ‘Conscious Events as Orchestrated Spacetime Selections’, *Journal of Consciousness Studies*, 3(1): 36–53.
* Hartle, J. B., 1998, ‘Quantum Pasts and the Utility of History’, *Physica Scripta*, T 76: 67–77 [[preprint available online](http://arxiv.org/abs/gr-qc/9712001)].
* –––, 2005, ‘The Physics of “Now”’, *American Journal of Physics*, 73(2): 101–109 [[preprint available online](http://arxiv.org/abs/gr-qc/0403001)].
* –––, 2010, ‘ Quasiclassical Realms’, in Saunders *et al*. (2010), pp. 73–98.
* Healey, R., 1989, *The Philosophy of Quantum Mechanics: An Interactive Interpretation*, Cambridge: Cambridge University Press.
* Hemmo, M., 1996, *Quantum Mechanics Without Collapse: Modal Interpretations, Histories and Many Worlds*, Ph.D. Thesis, University of Cambridge.
* Hemmo, M. and Shenker, O., 2001, ‘Can we Explain Thermodynamics by Quantum Decoherence?’, *Studies in History and Philosophy of Modern Physics*, 32 B: 555–568. doi:10.1016/S1355-2198(01)00029-6
* Hermann, G., 1935, ‘Die naturphilosophischen Grundlagen der Quantenmechanik’, *Abhandlungen der Fries’schen Schule*, 6: 75–152. Translated as ‘Natural-Philosophical Foundations of Quantum Mechanics‘ in E. Crull and G. Bacciagaluppi (eds), *Grete Hermann: Between Physics and Philosophy*, Dordrecht: Springer (2017), pp. 239–278.
* Holland, P. R., 1996, ‘Is Quantum Mechanics Universal?’, in J. T. Cushing, A. Fine and S. Goldstein (eds), *Bohmian Mechanics and Quantum Theory: An Appraisal*, Dordrecht: Kluwer, pp. 99–110.
* Joos, E. and Zeh, H.-D., 1985, ‘The Emergence of Classical Properties through Interaction with the Environment’, *Zeitschrift für Physik*, B 59: 223–243 [reprint available online from the [decoherence website](http://www.decoherence.de/)].
* Joos, E., Zeh, H.-D., Kiefer, C., Giulini, D., Kupsch, J., and Stamatescu, I.-O., 2003. *Decoherence and the Appearance of a Classical World in Quantum Theory*, Berlin: Springer.
* Kay, B. S., 1998, ‘Decoherence of Macroscopic Closed Systems within Newtonian Quantum Gravity’, *Classical and Quantum Gravity*, 15: L89–L98 [[preprint available online](http://arxiv.org/abs/hep-th/9810077)].
* Kent, A., 1998, ‘Quantum Histories’, *Physica Scripta*, T76: 78–84 [[preprint available online](http://arxiv.org/abs/gr-qc/9809026)].
* Kiefer, C., 1994, ‘The Semiclassical Approximation to Quantum Gravity’, in J. Ehlers and H. Friedrich (eds), *Canonical Gravity: From Classical to Quantum*, Berlin: Springer, pp. 170–212 [[preprint available online](http://arxiv.org/abs/gr-qc/9312015)].
* Kochen, S., 1985, ‘A New Interpretation of Quantum Mechanics’, in P. Mittelstaedt and P. Lahti (eds), *Symposium on the Foundations of Modern Physics 1985*, Singapore: World Scientific, pp. 151–169.
* Leggett, A. J., 1984, ‘Schrödinger’s Cat and her Laboratory Cousins’, *Contemporary Physics*, 25: 583–594.
* –––, 2002, ‘Testing the Limits of Quantum Mechanics: Motivation, State of Play, Prospects’, *Journal of Physics*, C 14: R415–R451.
* Maudlin, T., 1995, ‘Three Measurement Problems’, *Topoi*, 14(1): 7–15.
* Mott, N. F., 1929, ‘The Wave Mechanics of α-ray Tracks’, *Proceedings of the Royal Society of London*, A 126 (1930, No. 800 of 2 December 1929): 79–84.
* Nelson, E., 1966, ‘Derivation of the Schrödinger Equation from Newtonian Mechanics’, *Physical Review*, 150: 1079–1085.
* –––, 1985, *Quantum Fluctuations*, Princeton: Princeton University Press.
* –––, 2006, ‘Afterword’, in W. G. Faris (ed.), *Diffusion, Quantum Theory, and Radically Elementary Mathematics* (Mathematical Notes 47), Princeton: Princeton University Press, pp. 227–230.
* von Neumann, J., 1932, *Mathematische Grundlagen der Quantenmechanik*, Berlin: Springer. Translated by R. T. Beyer as *Mathematical Foundations of Quantum Mechanics*, Princeton: Princeton University Press (1955).
* Omnès, R., 1988, ‘Logical Reformulations of Quantum Mechanics: I. Foundations’, *Reviews of Modern Physics*, 53: 893–932; ‘II. Inferences and the Einstein–Podolsky–Rosen Experiment’, 933–955; ‘III. Classical Limit and Irreversibility’, 957–975.
* –––, 1989, ‘Logical Reformulations of Quantum Mechanics: IV. Projectors in Semi-Classical Physics’, *Reviews of Modern Physics*, 57: 357–382.
* Osnaghi, S., Freitas, F., and Freire, O. Jr, 2009, ‘The Origin of the Everettian Heresy, ’, *Studies in History and Philosophy of Modern Physics*, 40(2): 97–123.
* Pearle, P., 1989, ‘Combining Stochastic Dynamical State-Vector Reduction with Spontaneous Localization’, *Physical Review*, A 39: 2277–2289 [[preprint available online](http://inis.iaea.org/collection/NCLCollectionStore/_Public/19/090/19090014.pdf)].
* –––,1997, ‘True Collapse and False Collapse’, in Da Hsuan Feng and Bei Lok Hu (eds.), *Quantum Classical Correspondence: Proceedings of the 4th Drexel Symposium on Quantum Nonintegrability, Philadelphia, PA, USA, September 8–11, 1994*, Cambridge, Mass.: International Press, pp. 51–68 [[preprint available online](http://arxiv.org/abs/quant-ph/9805049)].
* Pearle, P., and Squires, E., 1994, ‘Bound-State Excitation, Nucleon Decay Experiments, and Models of Wave-Function Collapse’, *Physical Review Letters*, 73: 1–5 [[preprint available online](http://cds.cern.ch/record/260011/files/P00021809.pdf)].
* Ridderbos, K., 1999, ‘The Loss of Coherence in Quantum Cosmology’, *Studies in History and Philosophy of Modern Physics*, 30 B: 41–60.
* Romano, D., 2016, *The Emergence of the Classical World from a Bohmian Universe*, PhD Thesis, Université de Lausanne.
* Rosaler, J., 2015, ‘Is de Broglie–Bohm Theory Specially Equipped to Recover Classical Behavior?’, *Philosophy of Science*, 82(5): 1175–1187 [[preprint available online](http://philsci-archive.pitt.edu/10805/)].
* –––, 2016, ‘Interpretation Neutrality in the Classical Domain of Quantum Theory’, *Studies in History and Philosophy of Modern Physics*, 53: 54–72 [[preprint available online](http://arxiv.org/abs/1511.06383)].
* Sanz, A. S., and Borondo, F., 2009, ‘Contextuality, Decoherence and Quantum Trajectories’,  *Chemical Physics Letters*, 478: 301–306 [[preprint available online](http://arxiv.org/abs/0803.2581)].
* Saunders, S., 1993, ‘Decoherence, Relative States, and Evolutionary Adaptation’, *Foundations of Physics*, 23: 1553–1585.
* –––, 1999, ‘The “Beables” of Relativistic Pilot-Wave Theory’, in J. Butterfield and C. Pagonis (eds.), *From Physics to Philosophy*, Cambridge: Cambridge University Press, pp. 71–89.
* Saunders, S., Barrett, J., Kent, A., and Wallace, D. (eds), 2010, *Many Worlds? Everett, Quantum Theory, & Reality*, Oxford: Oxford University Press.
* Schlosshauer, M., 2007, *Decoherence and the Quantum-to-Classical Transition*, Berlin: Springer.
* –––, 2008, ‘Classicality, the Ensemble Interpretation, and Decoherence: Resolving the Hyperion Dispute’, *Foundations of Physics*, 38(9): 796–803 [[reprint available online](http://faculty.up.edu/schlosshauer/publications/FP-Hyperion.pdf)].
* Shimony, A., 1989, ‘Search for a Worldview which can Accommodate our Knowledge of Microphysics’, in J. T. Cushing and E. McMullin (eds), *Philosophical Consequences of Quantum Theory*, Notre Dame, Indiana: University of Notre Dame Press. Reprinted in A. Shimony, *Search for a Naturalistic Worldview*, Vol. 1, Cambridge: Cambridge University Press (1993), pp. 62–76.
* Spekkens, R. W., and Sipe, J. E., 2001, ‘A Modal Interpretation of Quantum Mechanics based on a Principle of Entropy Minimization’, *Foundations of Physics*, 31: 1431–1464.
* Struyve, W., 2011, ‘Pilot-wave Approaches to Quantum Field Theory’, *Journal of Physics: Conference Series*, 306: 012047/1–10 [[preprint available online](http://arxiv.org/abs/1101.5819)].
* Struyve, W., and Westman, H., 2007, ‘A Minimalist Pilot-wave Model for Quantum Electrodynamics’, *Proceedings of the Royal Society of London*, A 463: 3115–3129 [[preprint available online](http://arxiv.org/abs/0707.3487)].
* Tegmark, M., 1993, ‘Apparent Wave Function Collapse Caused by Scattering’, *Foundations of Physics Letters*, 6: 571–590 [[preprint available online](http://arxiv.org/abs/gr-qc/9310032)].
* Toroš, M., Donadi, S. and Bassi, A., 2016, ‘Bohmian Mechanics, Collapse Models and the Emergence of Classicality’, *Journal of Physics A: Mathematical and Theoretical*, 49(35): 355302 [[preprint available online](http://arxiv.org/abs/1603.02541)].
* Wallace, D., 2003, ‘Everett and Structure’, *Studies in History and Philosophy of Modern Physics*, 34 B: 87–105 [[preprint available online](http://arxiv.org/abs/quant-ph/0107144)].
* –––, 2008, ‘Philosophy of Quantum Mechanics’, in D. Rickles (ed.), *The Ashgate Companion to Contemporary Philosophy of Physics*, Aldershot: Ashgate, pp. 16–98 [[preliminary version available online](http://philsci-archive.pitt.edu/3420/) as ‘The Quantum Measurement Problem: State of Play’, December 2007].
* –––, 2012a, *The Emergent Multiverse: Quantum Theory According to the Everett Interpretation*, Oxford: Oxford University Press.
* –––, 2012b, ‘Decoherence and its Role in the Modern Measurement Problem’, *Philosophical Transactions of the Royal Society A: Mathematical, Physical and Engineering Sciences*, 370(1975): 4576–4593 [[preprint available online](http://philsci-archive.pitt.edu/8889/)].
* Wallstrom, T. C., 1994, ‘Inequivalence between the Schrödinger Equation and the Madelung Hydrodynamic Equations’, *Physical Review A*, 49(3): 1613–1617 [[reprint available online](http://www.researchgate.net/profile/Timothy_Wallstrom/publication/13379540_Inequivalence_between_the_Schrodinger_equation_and_the_Madelung_hydrodynamic_equations/links/592e405d0f7e9beee7360048/Inequivalence-between-the-Schroedinger-equation-and-the-Madelung-hydrodynamic-equations.pdf)].
* Wheeler, J. A., 1978, ‘The “past” and the “delayed-choice” double-slit experiment’, in A. R. Marlow (ed.), *Mathematical Foundations of Quantum Theory*, New York: Academic Press, pp. 9–48.
* Wheeler, J. A., and Zurek, W. H. (eds), 1983, *Quantum Theory and Measurement*, Princeton: Princeton University Press.
* Wightman, A. S., 1995, ‘Superselection Rules: Old and New’, *Il Nuovo Cimento*, 110 B: 751–769.
* Zeh, H.-D., 1970, ‘On the Interpretation of Measurement in Quantum Theory’, *Foundations of Physics*, 1: 69–76. Reprinted in Wheeler and Zurek (1983), pp. 342–349.
* –––, 1973, ‘Toward a Quantum Theory of Observation’, *Foundations of Physics*, 3: 109–116 [[corrected version available online](http://arxiv.org/abs/quant-ph/0306151), June 2003].
* –––, 2000, ‘The Problem of Conscious Observation in Quantum Mechanical Description’, *Foundations of Physics Letters*, 13: 221–233 [[preprint available online](http://arxiv.org/abs/quant-ph/9908084)].
* –––, 2001, *The Physical Basis of the Direction of Time*, Berlin: Springer, 4th edition.
* –––, 2003a, ‘Basic Concepts and Their Interpretation‘, in Joos *et al.* (2003), pp. 7–40 [page numbers refer to the [preprint available online](http://arxiv.org/abs/quant-ph/9506020)].
* –––, 2003b, ‘There is no “First” Quantization’, *Physics Letters*, A 309: 329–334 [[preprint available online](http://arxiv.org/abs/quant-ph/0210098)].
* Zurek, W. H., 1981, ‘Pointer Basis of Quantum Apparatus: Into what Mixture does the Wave Packet Collapse?’, *Physical Review*, D 24: 1516–1525.
* –––, 1982, ‘Environment-Induced Superselection Rules’, *Physical Review*, D 26: 1862–1880.
* –––, 1991, ‘Decoherence and the Transition from Quantum to Classical’, *Physics Today*, 44 (October): 36–44 [[abstract and updated version available online](http://arxiv.org/abs/quant-ph/0306072) as ‘Decoherence and the Transition from Quantum to Classical – Revisited’, June 2003].
* –––, 1993, ‘Negotiating the Tricky Border Between Quantum and Classical’, *Physics Today*, 46 (April): 84–90.
* –––, 1998, ‘Decoherence, Einselection, and the Existential Interpretation (The Rough Guide)’, *Philosophical Transactions of the Royal Society of London*, A 356: 1793–1820 [[preprint available online](http://arxiv.org/abs/quant-ph/9805065)].
* –––, 2003, ‘Decoherence, Einselection, and the Quantum Origins of the Classical’, *Reviews of Modern Physics*, 75: 715–775 [page numbers refer to the [preprint available online](http://arxiv.org/abs/quant-ph/0105127)].
* Zurek, W. H., and Paz, J.-P., 1994, ‘Decoherence, Chaos, and the Second Law’, *Physical Review Letters*, 72: 2508–2511 [[preprint available online](http://arxiv.org/abs/gr-qc/9402006)].

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=qm-decoherence). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/qm-decoherence/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=qm-decoherence&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/qm-decoherence/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* Bacciagaluppi, G. (Utrecht University), 2013, ‘Review of: *The Everett Interpretation of Quantum Mechanics. Collected Works 1955–1980 with Commentary*. Hugh Everett III, edited by Jeffrey A. Barrett & Peter Byrne. Princeton: Princeton University Press (xii+389 pp.)’, [available online](http://philsci-archive.pitt.edu/10768/) in the Pittsburgh Phil-Sci Archive.
* Crull, E. (City College, New York), and Bacciagaluppi, G. (Utrecht University), 2011, ‘Translation of W. Heisenberg: “Ist eine deterministische Ergänzung der Quantenmechanik möglich?”’, [available online](http://philsci-archive.pitt.edu/8590/) in the Pittsburgh Phil-Sci Archive.
* Diósi, L. (Wigner Centre, Budapest) 1994, ‘Critique of Weakly Decohering and Linearly Positive Histories’, [available online](http://arxiv.org/abs/gr-qc/9409017) in the arXiv.org e-Print archive.
* Gell-Mann, M. (deceased), and Hartle, J. B. (Santa Fe Institute), 1994, ‘Equivalent Sets of Histories and Multiple Quasiclassical Realms’, [available online](http://arxiv.org/abs/gr-qc/9404013) in the arXiv.org e-Print archive.
* Wallace, D. (University of Pittsburgh), 2001, ‘Implications of Quantum Theory in the Foundations of Statistical Mechanics’, [available online](http://philsci-archive.pitt.edu/410/) in the Pittsburgh Phil-Sci Archive.
* Wallace, D. (University of Pittsburgh), 2013a, ‘Probability in Physics: Stochastic, Statistical, Quantum’, [available online](http://philsci-archive.pitt.edu/9815/) in the Pittsburgh Phil-Sci Archive.
* Wallace, D. (University of Pittsburgh), 2013b, ‘Inferential vs. Dynamical Conceptions of Physics’, [available online](http://philsci-archive.pitt.edu/9845/) in the Pittsburgh Phil-Sci Archive.
* [Decoherence Website](http://www.decoherence.de/), maintained by Erich Joos. This is a site with information, references and further links to people and institutes working on decoherence, especially in Germany and the rest of Europe.
* [Quantum Mechanics on the Large Scale](http://pitp.phas.ubc.ca/archives/CWSS/2003AprilPWIAS/PWIASWorkshop.html), maintained by Philip Stamp (University of British Columbia). This page has links to the available talks from the Vancouver workshop mentioned in [footnote 1](https://plato.stanford.edu/entries/qm-decoherence/notes.html#note-1); see especially the papers by Tony Leggett and by Philip Stamp.
* [A Many-Minds Interpretation Of Quantum Theory](http://people.bss.phy.cam.ac.uk/~mjd1014/), maintained by Matthew Donald (University of Cambridge). This page contains details of Matthew Donald’s many-minds interpretation, as well as discussions of some of the books and papers quoted above (and others of interest). Follow also the link to the ‘Frequently Asked Questions’, some of which contain useful discussion of decoherence.
* [The arXiv.org e-Print archive](http://arxiv.org/), formerly the Los Alamos archive. This is the main physics preprint archive.
* [The Pittsburgh Phil-Sci Archive](http://philsci-archive.pitt.edu/). This is the main philosophy of science preprint archive.

## Related Entries

[chaos](https://plato.stanford.edu/entries/chaos/) | [constructive empiricism](https://plato.stanford.edu/entries/constructive-empiricism/) | [quantum mechanics](https://plato.stanford.edu/entries/qm/) | [quantum mechanics: action at a distance in](https://plato.stanford.edu/entries/qm-action-distance/) | [quantum mechanics: Bohmian mechanics](https://plato.stanford.edu/entries/qm-bohm/) | [quantum mechanics: collapse theories](https://plato.stanford.edu/entries/qm-collapse/) | [quantum mechanics: consistent histories approach](https://plato.stanford.edu/entries/qm-consistent-histories/) | [quantum mechanics: Copenhagen interpretation of](https://plato.stanford.edu/entries/qm-copenhagen/) | [quantum mechanics: Everettian](https://plato.stanford.edu/entries/qm-everett/) | [quantum mechanics: many-worlds interpretation of](https://plato.stanford.edu/entries/qm-manyworlds/) | [quantum mechanics: modal interpretations of](https://plato.stanford.edu/entries/qm-modal/) | [quantum mechanics: relational](https://plato.stanford.edu/entries/qm-relational/) | [quantum theory: and consciousness](https://plato.stanford.edu/entries/qt-consciousness/) | [quantum theory: Bayesian and pragmatist views](https://plato.stanford.edu/entries/quantum-bayesian/) | [quantum theory: philosophical issues in](https://plato.stanford.edu/entries/qt-issues/) | [quantum theory: quantum entanglement and information](https://plato.stanford.edu/entries/qt-entangle/) | [quantum theory: quantum field theory](https://plato.stanford.edu/entries/quantum-field-theory/) | [quantum theory: quantum gravity](https://plato.stanford.edu/entries/quantum-gravity/) | [quantum theory: the Einstein-Podolsky-Rosen argument in](https://plato.stanford.edu/entries/qt-epr/) | [statistical physics: philosophy of statistical mechanics](https://plato.stanford.edu/entries/statphys-statmech/) | [time: thermodynamic asymmetry in](https://plato.stanford.edu/entries/time-thermo/)

### Acknowledgments

I wish to think many people discussions with whom have shaped my understanding of decoherence over the years, in particular Marcus Appleby, Elise Crull, Matthew Donald, Beatrice Filkin, Meir Hemmo, Wayne Myrvold, Josh Rosaler, Simon Saunders, Max Schlosshauer, David Wallace, and Wojtek Zurek. For more recent discussions, correspondence and suggestions relating to this article I wish to thank Valia Allori, Maaneli Derakhshani, Bob Griffiths, Ronnie Hermens, Peter Holland, Martin Jones, Brian Josephson, Tony Leggett, Hans Primas, Alberto Rimini, Philip Stamp, and Bill Unruh. I also gratefully acknowledge my debt to Steve Savitt and Philip Stamp for an invitation to talk at the University of British Columbia, to Claudius Gros for an invitation to talk at the University of the Saarland, and for the opportunities for discussion arising from those talks. Finally I wish to thank the following: the referee for this entry, David Wallace, for his clear and constructive commentary; my former subject editor, John Norton, who corresponded with me extensively over a previous version of part of the material and whose suggestions I took to heart; my current subject editor, Wayne Myrvold; our editor-in-chief, Ed Zalta, and all his staff, for their saintly patience; and my late and lamented friend, Rob Clifton, who invited me to write on this topic in the first place.

[Copyright © 2020](https://plato.stanford.edu/info.html#c) by  
[Guido Bacciagaluppi](http://www.uu.nl/staff/GBacciagaluppi/0) <[*g.bacciagaluppi@uu.nl*](mailto:g%2ebacciagaluppi%40uu%2enl)>
