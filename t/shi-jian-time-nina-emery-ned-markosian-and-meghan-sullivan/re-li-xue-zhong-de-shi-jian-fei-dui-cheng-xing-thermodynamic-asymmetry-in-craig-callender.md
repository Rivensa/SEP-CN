# 热力学时间非对称性 thermodynamic asymmetry in (Craig Callender)

*首次发表于 2001 年 11 月 15 日；实质性修订于 2021 年 6 月 8 日*

热力学时间非对称性是物理宇宙中最显著和重要的特征之一。热量从热到冷流动，永远不会反向。咖啡的香味在其可用的空间中扩散，永远不会反向。汽车发动机将燃料能转化为功和热能，永远不会反向。等等。热力学科学能够将这些概括作为其系统自发演化到未来平衡态的结果，但不会自发演化离开平衡态的主张。这个概括涵盖了大量的宏观物理学，被公认为物理学中伟大的定律之一。

然而，尽管热力学时间箭头很熟悉，但它引发了许多与哲学和物理基础相关的深刻问题。本文集中讨论其中的两个问题。在当代语境中，它们都是关于基础的问题。(1) 什么是热力学时间非对称性的基础？在一个可能由时间对称的法则统治的世界中，热力学的时间非对称性是如何产生的？(2) 热力学时间非对称性是否构成其他时间非对称性的基础？例如，它能解释我们对过去的了解比对未来的了解更多这一事实吗？因此，讨论可以分为热力学作为被解释或解释者。什么是热力学时间非对称性的基础，以及在存在这种非对称性的情况下，它又基于什么？

---

## 1. 热力学时间非对称性：简要指南

首次在萨迪·卡诺的《火的动力反思》（1824 年）中开发出来的经典热力学科学与工业革命密切相关。这门科学的大部分成果源于工程师试图改进蒸汽机的实践。这门科学起源于 18 世纪末 19 世纪初的法国和英国，迅速传播到整个欧洲。到 19 世纪中叶，德国的鲁道夫·克劳修斯和英国的威廉·汤姆森（后来的开尔文勋爵）已经详细发展了这个理论。一旦发展起来，它的范围从蒸汽机等扩展到几乎所有宏观过程。

热力学是一门“现象学”科学。这意味着它的变量涵盖宏观参数，如温度、压力和体积。这些是在平衡状态下保持的属性，即当宏观变量的值保持大致稳定时。这些变量的微观物理基础是空虚中的运动原子还是一种不可测量的流体，对于这门科学来说基本无关紧要。这个理论的开发者们既为这个事实感到自豪，同时又对此感到担忧。例如，克劳修斯是最早推测热量仅由粒子的运动（没有以太）组成的人之一，因为这使得热量与机械功的等价性变得不那么令人惊讶。然而，像他一样，他将他的“本体论”信仰与他对热力学原理的官方陈述分开，因为他不希望（用他的话说）“玷污”后者的推测性特征。[1]

热力学的处理自然地从被视为自然定律的陈述开始。这些定律建立在对特定宏观参数之间关系的观察基础上，并且它们的合理性是通过实证充分来证明的。这些定律的进一步证明不能从微观物理学的细节中找到。相反，关于宏观特征的稳定的、支持反事实的概括被奉为定律。热力学的典型教科书处理方式描述了一些基本概念，以相对粗略的方式陈述了定律，然后推导出温度和熵的概念以及各种热力学状态方程。然而，值得注意的是，在过去五十年中，这门学科已经以前所未有的数学严谨性呈现出来。从卡拉塞奥多里（Carathéodory）在 1909 年提出的公理化开始，"理性热力学" 的发展已经对经典热力学的概念和逻辑进行了一定程度的澄清，这一点通常没有得到普遍的认可。现在存在许多完全不同的、数学上精确的热力学方法，每种方法都以不同的原始种类和/或观察规律作为公理。（有关最近公理化的普及介绍，请参见 Lieb 和 Yngvason 2000 年的著作。）

在传统方法中，经典热力学有两个定律，即第一定律和第二定律。[2] 第一定律表达了能量守恒原理，基于无法创造能量的机器的不可能性。该定律使用系统的内能 U 的概念，它是系统宏观变量（例如温度、体积）的函数。对于热隔离（绝热）系统，比如热水瓶中的咖啡，该定律规定了这个函数 U，使得系统对周围环境所做的功 W 被内能的损失所补偿，即 dW=−dU。当詹姆斯·焦耳和其他人表明机械功和热量可以相互转化时，与能量守恒原理的一致性要求将热量 Q（作为一种不同形式的能量）纳入考虑。对于非隔离系统，我们将该定律扩展为 dQ=dU+dW，其中 dQ 是以可逆方式添加到系统中的热量的微分。

能量守恒原理并不能告诉我们关于时间上非对称行为的任何信息。第一定律并不意味着相互作用的系统会迅速趋向平衡，并且一旦达到平衡状态就永远不会离开。第一定律与系统在平衡状态下离开平衡是完全一致的。特别是，对于能量从一种形式转化为另一种形式的转换没有任何限制，因此该定律允许存在将热量从环境中移除并将其转化为功的机器（所谓的第二类永动机）。为了排除这样的机器，并更一般地捕捉到我们发现的惊人的时间上非对称行为，需要另一个定律。虽然卡诺是第一个提出这个定律的人，但开尔文和克劳修斯的表述是标准的：

开尔文第二定律：没有一个热力学过程的唯一效果是将从均匀温度源中提取的热量完全转化为功。

克劳修斯第二定律：没有一个热力学过程的唯一效果是从一个较冷的储热器中提取热量并将其传递给一个较热的储热器。

开尔文的版本与卡诺和普朗克得出的版本基本相同，而克劳修斯的版本在一些方面与这些版本不同。[3]

克劳修斯的版本明确排除了反热力学行为，例如热铁棒从相邻的冷铁棒中提取热量。冷铁棒不能向较暖的铁棒放出热量（除非发生其他事情）。开尔文的陈述可能不太明显。它源于对蒸汽机的观察，即热能是一种“低质量”的能量。考虑一个充满气体的气缸，气缸底部有一个无摩擦活塞将气体压住。如果我们在气缸下面放一个火焰，气体将膨胀，活塞可以执行工作，例如移动一个球。然而，我们永远无法将热能直接转化为工作，而不发生其他效应。在这种情况下，气体占据了更大的体积。

在 1854 年，克劳修斯引入了“转化等价值”的概念，这个概念是现代熵概念的祖先。后来在 1865 年，克劳修斯为类似的概念创造了“熵”这个术语（该词源于希腊语中的“转化”一词）。状态 A 的熵 S(A)被定义为可逆转化的积分 S(A)=∫AOdQ/T，其中 O 是任意固定的状态。为了使 A 具有熵，从 O 到 A 的转化必须是准静态的，即一系列平衡态。连续性考虑意味着初始和最终状态 O 和 A 也必须是平衡态。用熵的语言来说，第二定律表明在从平衡态 A 到平衡态 B 的转化中，不等式 S(B)−S(A)大于或等于 ∫ABdQ/T。粗略地说，对于现实系统，这意味着在热闭合系统的自发演化中，熵永远不会减少，并且在平衡时达到最大值。我们被邀请将第二定律视为将系统推向其新的、更高熵的平衡态。

第二定律使热力学能够用一个简单的定律描述一系列非凡的现象。令人惊讶的是，无论是充满可用体积的气体，接触后温度相同的铁棒，分离的醋和油，还是在咖啡中混合的牛奶，它们都有一个共同的可观察属性：它们的熵增加。第二定律与第一定律相结合，具有非凡的力量。似乎所有经典热力学行为都可以从这两个简单的陈述中推导出来（O.彭罗斯 1970）。

上述概述代表了描述热力学及其第二定律的传统方式。让我提出一些相关问题。

首先，时间非对称性的确切位置是什么？几乎所有评论者都声称它存在于第二定律中。然而，如果 Uffink（2001）和 Brown 和 Uffink（2001）是正确的，那么这个“静态”的第二定律根本不包含任何时间非对称性。毕竟，它只是一个在平衡状态下的几个变量之间的关系。虽然这可能是正确的，但毫无疑问的是，热力学，即使不是它的第二定律，也提出了时间非对称性的要求。从非平衡到平衡的自发运动在整个领域中发生并被假定。唯一的问题是它是否必须被视为一个单独的假设（也许需要自己的名称）或者是否可以从现有原则中推导出来。值得注意的是，热力学的许多其他原则也是时间非对称的，例如经典热传导方程。

其次，第二定律的适用范围是什么？这里有两个问题。首先，它适用于整个宇宙，以便我们可以说宇宙的熵在增加，还是仅适用于宇宙的某些子系统？（有关这个主题的有趣历史讨论，请参见 Uffink 2001。）许多哲学家和物理学家对宇宙本身具有熵的想法感到犹豫不决。正如人们所预料的，那些受到操作主义哲学支配的人特别倾向于否认整个宇宙具有熵。其次，它统治着宇宙的哪些子系统？热力学原理是否负责关于黑洞的概括？黑洞热力学领域假设它是（有关奇点和黑洞条目中关于黑洞热力学的部分的讨论和参考文献，请参见 Dougherty＆Callender 即将出版）。那么微观领域呢？

第三，这些定律在相对论宇宙中是如何构建的？它们是在 19 世纪以经典时空背景为基础发展起来的。我们如何以现代的形式来表述这个理论？令人惊讶的是，这个问题在概念上和技术上都同样重要。热力学量的正确（特殊）相对论变换规则是有争议的。洛伦兹变换后的气体在新的惯性系中是变热还是变冷？阿尔伯特·爱因斯坦本人在他的一生中对这个问题的回答是不同的！尽管当前物理学家的研究重点是广义相对论和量子引力中的黑洞热力学，但有趣的是，特殊相对论热力学仍然是一个存在许多未解问题的领域，无论是在物理上还是在哲学上（参见 Earman 1981 和 Liu 1994）。

第四，另一个重要问题涉及将热力学概念（如熵）归纳到它们的力学或统计力学基础上。正如对统计力学的粗略了解所揭示的那样，有许多候选的统计力学熵，每个都是该领域基础研究的中心。令人惊讶的是，对于哪种熵最适合作为热力学熵的归纳基础，没有共识（参见，例如，Sklar 1993；Callender 1999；Lavis 2005；Frigg 2008；Robertson 即将出版）。因此，在统计力学中，关于第二定律的基础是什么的问题上几乎没有一致意见。

尽管所有这些问题都很重要，但本文重点关注与时间方向相关的两个不同问题。

## 2. 时间方向问题 I

第一个“时间方向问题”是：什么解释了热力学的时间非对称性？热力学不是一门基础物理学科。因此，它必须从微观世界继承其巨大的时间非对称性。但是从哪里继承的呢？从根本上说，热力学的时间非对称性是基于什么的？这个难题通常被认为是由于基础物理学是时间对称的，或者更准确地说，时间逆转不变的。（粗略地说，一个理论是时间逆转不变的，如果它的规律不关心时间的方向。）没有非对称性的输入，就没有非对称性的输出；因此，存在一个关于非对称性从何处进入的难题。然而，即使基础物理学是时间非对称的，人们仍然可以并且应该要求回答关于热力学时间非对称性的问题。答案可能是非平凡的，因为基础物理学的时间非对称性可能与热力学的时间非对称性无关。事实上，这种情况似乎是存在的，因为夸克和轻子之间的弱相互作用可以违反时间对称性，但这些违反似乎不负责热力学行为。

从历史上看，这个问题在伟大的物理学家路德维希·玻尔兹曼与他的一些同时代人，尤其是约翰·洛施米特、恩斯特·策梅洛和爱德华·卡尔弗韦尔之间的一系列精彩辩论和争论中产生。玻尔兹曼是统计力学领域的创始人和最有影响力的发展者之一，同时（晚年）也是一位哲学家。在寻求第二定律的机械基础时，他发现了一个特别巧妙的解释，解释了为什么系统趋向于平衡。

忽略历史细节（Brush 1976，Frigg＆Werndl 2011，Sklar 1993，Uffink 2006），这里是从玻尔兹曼的后期著作中松散重建的核心思想。考虑一个孤立的气体，其中有 N 个粒子在一个箱子里，其中 N 足够大，使得系统宏观化（N≈1023+）。为了熟悉起见，我们将使用经典力学。我们可以通过每个粒子的坐标和动量 xin，pin 来描述气体，并通过在称为 Γ 的 6N 维相空间中的点 X =（q，p）来表示整个系统，其中 q =（q1 ... q3N）和 p =（p1 ... p3N）。玻尔兹曼的伟大洞察力在于看到热力学熵可以说“减少”到由系统的宏观参数选择的 Γ 中的体积。关键要素是将 Γ 分成隔间，使得隔间中的所有微状态 X 在宏观上（因此在热力学上）无法区分。对于每个宏观状态 M，都对应着 Γ 的一个体积|ΓM|，其大小取决于所讨论的宏观状态。出于组合原因，几乎所有的 Γ 都对应于热平衡状态。在具有均匀温度和压力的分布方式和具有非均匀温度和压力的分布方式之间，有很多更多的方式。在热平衡和热非平衡状态之间，Γ 中存在着巨大的数量不平衡。

现在，我们介绍玻尔兹曼的著名公式（加上一个可加常数），我们可以称之为“玻尔兹曼熵”SB：SB（M（X））= klog | ΓM |其中| ΓM |是与宏观状态 M 相关联的 Γ 中的体积，X 是系统的微状态，k 是玻尔兹曼常数。SB 提供了 Γ 对每个 M 的相对测量量。

鉴于 Γ 中提到的不对称性，几乎所有实现非平衡宏观态的微观态都会随时间增加熵值。当系统最初被限制在 Γ 的小部分时，典型的系统会演化成更大的区域。由于新的平衡分布占据了几乎所有新的相空间，起源于较小体积的几乎所有微观态都会趋向于平衡。除了那些极为罕见的微观态，它们会继续停留在小区域内，微观态会以使 SB 增加的方式演化。关于这种方法的细节可以提出重要问题。例如，什么能够证明 Γ 上的标准概率测度是合理的？尽管如此，玻尔兹曼解释似乎提供了一个合理而强大的框架，用于理解为什么系统的熵倾向于随时间增加。（有关进一步解释和讨论，请参见 Bricmont 1995; Frigg 2008, 2009; Goldstein 2001; Hemmo & Shenker 2012; Klein 1973; Lavis 2005; Lebowitz 1993; Uffink 2006。）

这个关于时间非对称性的解释存在问题（参见 Brown，Myrvold 和 Uffink 2009）。在玻尔兹曼如上所述解释熵增之前，他提出了一个臭名昭著的“证明”，即“H 定理”，即熵必须始终增加。Loschmidt 1876/1877 和 Zermelo 1896 对 H 定理提出了异议。他们指出，如果我们以经典力学动力学为前提，就不可能使经典状态的任何函数单调增加。Loschmidt 关注经典动力学的时间反演不变性，而 Zermelo 关注其循环性质（大致上，对于任何给定的初始状态，一个有界系统在自身作用下最终会返回到其初始状态附近）。他们是正确的：时间反演意味着对于经典方程的每个熵增解，都存在一个镜像的熵减解；而循环意味着如果我们等待足够长的时间，每个解都会在某个时刻熵减。定理中存在一些未经适当公布的时间非对称成分。

读者可以在许多教科书和上述引用的许多参考资料中找到这个故事。在他们的精神中（具体来说，洛施密特的精神），也可以对上面概述的玻尔兹曼后来的观点提出异议。粗略地说，因为经典运动方程是时间反演不变的，原始解释中没有必要涉及时间的方向（参见赫利 1986 年）。尽管我们刚刚陈述了玻尔兹曼对熵增加的解释，将其表述为熵向未来增加，但解释也可以反过来，适用于过去的时间方向。假设一个处于非平衡状态的气体在一个盒子里，导致当前宏观状态的动力学演化的前身微观状态的绝大多数对应于比当前状态熵更高的宏观状态。因此，不仅非平衡状态对应的典型微观状态很可能演化为更高熵的状态，而且它们很可能是从更高熵的状态演化而来的。

简而言之，问题在于在时间 t2 处给定一个非平衡状态，极有可能在时间 t3 处该非平衡状态会演化为更接近平衡的状态

(1)

t2 处的非平衡状态将演化为更接近平衡的状态 t3

但由于动力学的可逆性，也极有可能在 t1<t2<t3 时，t2 的非平衡态是从更接近平衡态的状态演化而来的。

(2)

但是，根据（2）描述的转变似乎并不发生；或者更谨慎地说，（1）和（2）不会同时发生。然而，我们选择使用“较早”和“较晚”这些术语，显然熵并不在两个时间方向上都增加。为了方便阐述，让我们称（2）为罪魁祸首。

where t1<t2<t3. However, transitions described by [(2)](https://plato.stanford.edu/entries/time-thermo/#fol2) do not seem to occur; or phrased more carefully, not both [(1)](https://plato.stanford.edu/entries/time-thermo/#fol1) and [(2)](https://plato.stanford.edu/entries/time-thermo/#fol2) occur. However we choose to use the terms “earlier” and “later”, clearly entropy doesn’t increase in both temporal directions. For ease of exposition let us dub [(2)](https://plato.stanford.edu/entries/time-thermo/#fol2) the culprit.

传统问题不仅仅是当可以发生时，热力学上可能的（反热力学）行为没有发生。这不是一个直接的问题：各种各样的热力学允许的过程都没有发生。相反，问题在于统计力学似乎提出了一个被证伪的预测，而根据任何人的证实理论，这是一个问题。

对于这个问题，已经提出了许多解决方案。一般来说，有两种方法可以解决这个问题：通过特殊边界条件或自然法则来消除类型（2）的转变。如果我们假设宇宙的早期状态相对熵较低，并且（相对）后期状态也不是低熵状态，那么前一种方法是有效的。之所以没有高熵到低熵的过程，仅仅是因为早期熵非常低。或者，如果我们可以以某种方式限制物理可能世界的领域，使其仅接受低熵到高熵的转变，那么后一种方法是有效的。自然法则是我们认为物理上可能的范围的束缚。由于我们需要消除类型（2）的转变，同时保持类型（1）的转变（或反之），法则能够完成这一任务的必要条件是它们不具有时间反演不变性。我们选择的策略归结为要么假设时间上不对称的边界条件，要么添加（或更改为或限制为）不具有时间反演不变性的自然法则，使熵增加成为可能。许多解决这个问题的方法都试图避免这个困境，但对任何提出的“第三种方式”的一点分析都可以证明这是错误的。

对类型（2）转变的限制的动机既源于哲学，也源于特定的物理理论。本节的其余部分描述了在这个问题上发现的各种观点。

### 2.1 过去假设

如果不宣称自然法则具有时间非对称性，就没有办法将不可能的转变（2）排除为（1）。然而，诉诸于时间非对称的边界条件使我们能够描述一个只发生（1）而不发生（2）的世界。一个宇宙学假设声称，在非常遥远的过去，熵要低得多。玻尔兹曼以及本世纪许多伟大的科学家，如爱因斯坦、理查德·费曼和埃尔温·薛定谔，都认为这个假设是必要的，因为我们的（大部分）时间非对称的法则。 （然而，玻尔兹曼通过将可观测宇宙视为远离平衡状态的自然统计波动来解释这种低熵条件，而这个宇宙是一个巨大得多的宇宙。）早期状态的熵不比现在的状态更高，因为我们假设宇宙始于其可用相空间的一个极小部分。阿尔伯特（2000）称之为“过去假设”，并认为它解决了时间方向的问题以及下面要讨论的问题。请注意，经典力学也与“未来假设”相兼容：即熵在遥远的未来非常低。需要限制为“遥远”，因为如果近未来的熵很低，我们就不会期望看到我们所看到的热力学行为-有关两个时间边界条件的讨论，请参见 Cocke 1967，Price 1996 和 Schulman 1997。

过去假设为时间方向的问题提供了一个优雅的解决方案。然而，还存在一些问题。

首先，有些人认为（例如）气体在所有时间和地点都会由于特殊的初始条件而膨胀到其可用体积是难以置信的。这些事件的共同原因被视为本身极不可能发生。R.彭罗斯（1989）表达了这种感觉，他估计，在相空间上的标准测度下，宇宙以所需状态开始的概率是天文数字般的小。作为回应，人们可以认为过去假设是法则性的。如果是这样，那么这种状态的概率，如果存在的话，就是 1！即使一个人不走这条路，他可能对声称宇宙的初始条件需要进一步解释有其他问题。参见 Callender 2004a，b 以及 Price 1996, 2004 的观点。

其次，另一个持续的批评观点可以被称为“子系统”担忧。毕竟，过去假设与地球上的任何子系统都没有显示出热力学非对称行为是一致的。宇宙的全局熵增如何暗示子系统之间的局部熵增（毕竟，这正是我们首先提出第二定律的原因）？参见 Winsberg 2004 对此的反对意见，以及 Callender 2011a，Frisch 2010 和 North 2011 的讨论。

第三，从我们最好和最新的物理学的背景下来看，过去假设到底在说什么？虽然不否认需要有时间上非对称的边界条件来解决这个问题，Earman（2006）对过去假设非常批判，认为它甚至不够连贯以至于可以被证伪。Earman 看到的主要问题是我们无法用广义相对论的语言来陈述过去假设。Callender（2010，2011b）和 Wallace（2010）讨论了当自引力被包括在内时如何陈述过去假设的相关问题。人们还可以考虑在量子理论的背景下提出这个问题（参见 Wallace 2013）。

### 2.2 电磁学

如果我们将一个孤立的浓缩均匀气体放置在一个大的空虚空间中央，我们会期望粒子在气体中心周围以扩散的球形方式扩散，就像辐射波从浓缩电荷源扩散出来一样。因此，很容易认为热力学和电磁学时间箭头之间存在关系。在 1909 年的一场辩论中，阿尔伯特·爱因斯坦和瓦尔特·里茨显然对这种关系的性质存在分歧，尽管争议的确切点仍有些不清楚。通常讲述的故事是里茨认为辐射的非对称性必须被视为法则，并且热力学的非对称性可以从这个法则中推导出来。相反，爱因斯坦的立场是“不可逆性完全基于概率原因”（里茨和爱因斯坦 1909 年，引自 Zeh 1989: 13）。不清楚爱因斯坦是否指的是概率加上正确的边界条件，还是仅仅指概率。无论如何，据说里茨认为辐射箭头导致热力学箭头，而爱因斯坦则持有更接近相反立场的观点。真实的故事要复杂得多，因为里茨还考虑了基于粒子的本体论以及许多其他因素（有关实际历史辩论的微妙之处，请参见 Frisch 和 Pietsch 2016）。

如果这个常见的故事是正确的 - 虽然有理由认为这并不是完整的故事 - 那么爱因斯坦似乎比里茨更接近正确。里茨的立场似乎不可信，仅仅因为它意味着由中性粒子组成的气体不会趋于扩散。除此之外，如果我们集中在上述提到的波动不对称性上，爱因斯坦的立场是有吸引力的。使用波普尔 1956 年著名的机械波例子作为类比，将一块石头扔进池塘中，使得水面上的波浪向未来扩散，需要与波浪汇聚于一个点以将石头从底部抛出所需的阴谋一样。然而，在这里，似乎很明显，在我们手中有一个热力学箭头之后，一个过程在热力学上更有利，而另一个过程则不利。在解决了热力学箭头之后，朝向池塘中心的冲量，例如将石头抛出，是不太可能的，而从冲击点发散的球形波浪则是可能的。在这里，辐射箭头似乎可以合理地与热力学箭头相连，并且甚至可能可以从热力学箭头中推导出来。主要的有趣差异在于，波普尔的时间反转池塘似乎是可以近似实现的，而反热力学过程似乎更加绝对禁止（或者至少更难实现，需要所谓的麦克斯韦恶魔）。

如果波动不对称性是唯一的电磁箭头，那么上述概述可能合理地捕捉到热力学和电磁时间箭头之间的核心联系。我们有理由认为，无论是什么导致了热力学箭头，也是电磁箭头的原因。这可能最终是正确的。然而，现在下结论还为时过早，因为电磁学除了波动不对称性之外还充满了其他时间箭头。

麦克斯韦方程组众所周知包括“先进”和“迟滞”解。迟滞解 ϕret(r,t)=∫dr′ρ(r′,t−|r′−r|c)|r′−r|通过在较早时间找到源密度 r′的 r 处的场振幅 ϕret(r,t)来给出。先进解 ϕadv(r,t)=∫dr′ρ(r′,t+|r′−r|c)|r′−r|通过在较晚时间找到 r′处的源密度来给出场振幅。物理学家通常出于“因果性”的原因舍弃先进解。并不清楚热力学考虑是否是拒绝解的背后原因，这种不对称性更难以看到，因为电磁学有自由将迟滞场重写为先进场和出射无源辐射（反之亦然）。电磁学也被认为允许发射而不吸收。加速电荷也被场阻尼而不是反阻尼。除了波动不对称性之外，还有许多箭头——发射/吸收，内/外，迟滞/先进，阻尼/反阻尼——现在说热力学箭头是统治它们所有的箭头还为时过早。大多数人认为波动不对称性最终是“热力学的”，但在此之后的问题存在争议。

有关这些有争议的观点的进一步讨论，请参阅 Allori 2015; Arntzenius 1994; Atkinson 2006; Earman 2011; Frisch 2000, 2006; Frisch and Pietsch 2016; North 2003; Price 1996, 2006; Rohrlich 2006; 和 Zeh 1989 的文章/章节。

### 2.3 宇宙学

宇宙学向我们展示了一些明显具有时间非对称性的机制。最明显的一个是宇宙的不可避免的膨胀。我们可以将空间尺度因子 a(t)粗略地理解为宇宙的半径（它给出了共动观察者之间的距离），它在增加。相对于我们的局部参考系，宇宙似乎在均匀地膨胀。由于这种时间非对称性具有相当独特的地位，自然而然地会想知道它是否可能是“主导”箭头。

宇宙学家托马斯·戈尔德在 1962 年提出了这个观点。戈尔德认为熵的值与宇宙的大小相互关联，他断言在最大半径处，热力学箭头将因重新收缩而“翻转”。然而，正如理查德·托尔曼在 1934 年详细展示的那样，一个充满非相对论粒子的宇宙不会因膨胀而增加熵，一个充满黑体辐射的膨胀宇宙也不会增加熵。有趣的是，托尔曼证明了包含物质和辐射的更现实的宇宙将改变它们的熵内容。与膨胀相结合，各种过程将导致熵的增加，例如，能量将从“热”的辐射流向“冷”的物质。只要这些过程的弛豫时间大于膨胀时间尺度，它们应该会产生熵。因此，我们有了一种纯粹的宇宙学熵生成方法。

其他人（例如，戴维斯 1994 年）认为通货膨胀提供了一种熵增行为 - 再次考虑到我们宇宙中的物质内容。通货膨胀模型是标准宇宙大爆炸模型的一种替代方案，尽管现在它在宇宙学界已经根深蒂固，真的应该被称为“标准”。在这种情况下，宇宙非常早期处于一种称为“虚假真空”的量子状态，这种状态具有非常高的能量密度和负压力。引力的作用类似于爱因斯坦的宇宙常数，因此具有排斥性而不是吸引性。在这种力的作用下，宇宙进入指数膨胀的时期，其几何形状类似于 de Sitter 空间。当这个时期结束时，任何初始的不均匀性都将被平滑成无关紧要。此时，普通的恒星演化开始。将引力均匀性与低熵相关联，将不均匀性与较高熵相关联，通货膨胀可以说是低熵“初始”条件的来源。

还有其他提出的宇宙熵产生源，但这些应该足以让读者了解这个想法的味道。我们不会详细评估这些情景。相反，我们关心的是这些提议如何解释时间的箭头。特别是，它们如何与我们之前的说法相一致，即问题归结为假设时间上不对称的边界条件或添加时间逆转非不变的自然法则？

答案并不总是清晰的，部分原因是因为在宇宙学科学中，自然定律和边界条件之间的分离特别模糊。时间箭头的宇宙学解释的支持者通常认为自己在解释所需的低熵宇宙条件的起源。有些人明确表示热力学箭头需要特殊的初始条件，但在推导这些初始条件的起源方面与传统的“统计”学派不同。早期的低熵条件并不被视为时空的边界条件。根据宇宙学派的观点，它们是在大爆炸之后约一秒或更长时间形成的。但当宇宙的大小只有一个小粒子时，一秒或更长时间足够某种宇宙学机制产生我们的低熵“初始”条件。宇宙学家（主要）在于这种机制的具体性质上存在分歧。一旦机制创造了“初始”的低熵，我们就有了与前一节讨论的热力学时间非对称性相同类型的解释。由于所提出的机制被认为使特殊的初始条件不可避免或至少高度可能，这种操作似乎类似于上述所提到的所谓“第三种方式”。

关于这种解释的核心问题，就我们而言，是这样的：低“初始”状态的存在是自然法则的结果，还是法则加上边界条件的结果？换句话说，首先，提出的机制是否在任何初始条件下产生低熵状态？其次，这是法则本身的结果，还是法则加上初始条件的结果？我们想知道我们的问题是否只是被推迟了一步，解释是否是对特殊初始条件的隐晦诉求。虽然我们无法在这里一般性地回答这个问题，但我们可以说，所提到的两种机制在本质上并不具有法则性。膨胀在两个方面都失败了。在膨胀的宇宙中存在一些边界条件，这些条件不会导致熵梯度，即没有正确物质辐射内容的条件，还有一些边界条件，不会导致熵增加的膨胀，例如不膨胀的充满物质的弗里德曼模型。膨胀至少在第二个方面失败了。尽管有广告宣传，任意的初始条件并不会导致膨胀期。此外，膨胀期是否会导致热力学不对称性还不清楚（Price 1996: ch. 2）。宇宙学场景似乎并没有使热力学不对称性成为法则的必然结果。宇宙学假设可能是真实的，并且在某种意义上，它们甚至可以解释低熵初始状态。但它们似乎并没有提供一个使热力学不对称性成为法则必然或可能的解释。

另一种看待这一观点的方式是考虑热力学箭头是否会在宇宙开始收缩时“翻转”。正如我们之前所说，Gold 声称在最大半径处，热力学箭头必须由于重新收缩而“翻转”。在维持熵值与宇宙半径相互关联的同时，不假设热力学翻转显然是不一致的，这正是 Price（1996）所称的“时间双重标准”的谬误。Gold 没有犯这个谬误，因此他声称如果宇宙开始重新收缩，熵必须减少。然而，正如 Albert 所写的，

> 显然，世界相空间中存在一些位置，从这些位置出发，世界的半径将不可避免地增加，世界的熵将不可避免地减少。（2000 年：90）

既然情况如此，根据定律，热力学箭头在重新收缩过程中不会翻转；因此，在不改变基本定律的情况下，Gold 机制无法解释我们所希望的热力学箭头。

从这些考虑中，我们可以理解贯穿普赖斯（1995 年，1996 年）的基本困境：要么我们用 Gold 式解释早期的低熵条件，要么它在时间对称的物理学中是无法解释的。因为在 Gold 宇宙中没有净不对称性，我们可以用更令人不安的方式来解释普赖斯的结论，即（局部）热力学箭头是可以解释的，前提是（全局）不存在箭头。然而，请注意，这个说法并没有排除扩张或膨胀的规律不是时间反演不变的想法。（有关普赖斯基本困境的更多信息，请参见卡伦德 1998 年和普赖斯 1995 年。）

最后，重要的是要记住，这个困境和对过去假设的需求取决于特定的物理设置。我们能否在不引入过去假设的情况下解释热力学箭头？受到永恒自发膨胀的想法的启发，卡罗尔和陈（2004 年，其他互联网资源）描述了一个模型，其中新的宇宙婴儿（或“口袋宇宙”）不断从现有宇宙中诞生。每一次诞生都会增加多宇宙的总熵，尽管在每个宇宙婴儿中我们都有熟悉的热力学不对称性。这个模型中的关键假设 - 也存在于巴伯，科斯洛夫斯基和梅尔卡蒂的引力理论（2014 年）中 - 是熵是无限的。它可以任意高。在这个假设和这些模型中，我们可以不需要过去的假设。有关讨论，请参见 Goldstein，Tumulka 和 Zanghi 2016 年以及 Lazarovici 和 Reichert 2020 年。

### 2.4 量子宇宙学

量子宇宙学，据说，是关于宇宙初始条件的理论。据推测，这意味着其假设应被视为类似法则。因为理论通常被理解为包含一组法则，量子宇宙学家显然假设法则和初始条件之间的区别是模糊的。特定的初始条件将被视为法律事实。例如，霍金写道，

> 直到我们对边界条件能够说出比我们观察到的更多信息之前，我们将没有一个完整的宇宙模型，(1987: 163)。

将这种愿望与热力学需要特殊边界条件的观察相结合，很自然地会想到“第二定律成为宇宙边界条件的选择原则 [对于量子宇宙学]”(Laflamme 1994: 358)。换句话说，如果要有一个关于初始条件的理论，肯定希望能够推导出会导致热力学箭头的初始条件。这正是许多量子宇宙学家所追求的。（这与半经典量子引力中讨论的时间箭头不同，例如，黑洞系统中的量子散射过程违反了 CPT 定理的观点。）由于量子宇宙学目前非常推测性，现在开始担心它对时间箭头的影响可能为时过早。尽管如此，关于这个问题已经进行了大量的辩论（参见 Haliwell 等人 1994 年）。

### 2.5 因果关系

彭罗斯和珀西瓦尔（1962 年）提出了一个处理我们问题的一般因果原则。该原则指出，相互作用的效应发生在这些相互作用之后而不是之前。类似于莱辛巴赫的共同原因原则，他们提出了他们所称之为条件独立法则，即“如果 A 和 B 是两个不相交的 4 区域，C 是将 A 和 B 的过去的并集分成两部分的任何 4 区域，其中一部分包含 A，另一部分包含 B，则在给定 c 的条件下，A 和 B 是条件独立的。也就是说，对于所有的 a，b，Pr（a&b/c）= Pr（a/c）× Pr（b/c）。”（彭罗斯和珀西瓦尔 1962 年，第 611 页）。这里的 c 是一个共同原因事件，它屏蔽了 A 和 B 之间的相关性。

就统计力学而言，这个法则会使系统在某个时间点的相空间密度由之前的事件决定，而不是之后的事件。这几乎直接排除了时间方向问题中所假设的基于时间“推理的平等性”转换，即类型（2）的转换。为了实现这一点，条件独立法则必须是时间非对称的，而且它必须是一种限制其他允许的法则性相关性的基本原则。毕竟，如果我们假设自然法则是时间反演不变的，那么在相互作用之前和之后的相关性之间就没有不对称性。

价格 1996 年（第 5 章）和 Sklar 1993 认为，这种规范限制是没有根据或无法解释的。有一种感觉，因果非对称性应该来自更基本的物理学，而不是内置在这个物理学中。Horwich 1987 是一个试图从更基本的假设中推导出他所称的叉子非对称性（类似于条件独立性法则）的例子。

最近的一个与 Penrose 和 Percival 的观点有一些相似之处的贡献可以在 Myrvold 2020 中找到。

### 2.6 时间本身

一些哲学家试图通过声称时间本身是有方向的来解决时间箭头的问题。他们并不是指时间在时间张力理论的支持者所指的意义上是不对称的。他们的提议根植于时间和空间在一个四维流形上的正确表示的观念。主要观点是，时间中的不对称性表明了时间本身的性质。克里斯滕森（1993）认为，这是对我们问题最经济的回应，因为它除了将时间作为不对称性的共同原因之外，不假设任何其他东西，而我们已经相信时间存在。类似于克里斯滕森的提议是 Weingard 的“时间排序场”（1977）。Weingard 的推测性论点是，时空是由一个“时间势”进行时间定向的，这是一个时间样的矢量场，它在每个时空点上将一个矢量指向其未来的光锥。换句话说，假设我们的时空是可定向的，Weingard 希望实际上对其进行定向。这样做的主要优点是，它在任何地方都提供了时间感，即使在包含闭合时间曲线的时空中（只要它们是可定向的）。正如他所展示的，任何将“早于”关系解释为其他物理关系的阐释都难以在这样的时空中提供一致的时间方向描述。这个想法的另一个优点是，它原则上能够解释所有的时间不对称性。如果与时间中的各种不对称性相结合，它将成为负责感兴趣的箭头的“主要箭头”。正如斯克拉尔（1985）所指出的，Weingard 的提议使过去-未来的不对称性非常类似于上下的不对称性。就像上下的不对称性被归结为引力势的存在，而不是空间本身的不对称性一样，过去-未来的不对称性将归结为时间势的存在，而不是时间本身的不对称性。 当然，如果将引力度规场视为时空的一部分，那么将上下非对称性的减少真正看作是对时空非对称性的减少是有意义的。如果将度规场看作是时空的一部分——这本身就是物理哲学中一个极具争议的问题——那么将 Weingard 的时间排序场也看作是时空的一部分是很自然的。因此，他的提议与 Christensen 的建议有很多共同之处。

Sklar 基于方法论的理由对这种提议进行了批评。Sklar 声称科学家不会接受这样的解释（1985: 111–2）。然而，可以指出的是，许多科学家确实相信时间排序场的类似物可能是 CP 违规的原因之一 [4]。如果时间排序场存在，它将是引人注目的普遍现象的一个看不见的（除非通过其效应）共同原因。科学家通常接受这样的解释。要找到时间排序场的问题，我们不需要引用方法论的顾虑；相反，我们只需简单地问它是否能够完成所要求的工作。是否有一种机制能够将时间排序场与热力学现象耦合起来？Weingard 说时间势场需要适当地耦合（1977: 130）到非偶然的非对称过程，但他和 Christensen 都没有详细说明如何实现这一点。在这个问题得到令人满意的解决之前，这个推测性的想法必须被认为是有趣但还处于初级阶段的。有关这方面的最新研究，请参见 Maudlin 2002。

### 2.7 干预主义

当解释时间的箭头时，许多哲学家和物理学家都将注意力集中在一个无可置疑的事实上，即真实系统是开放系统，受到各种相互作用的影响。热力学系统无法真正孤立。以最明显的例子来说，我们无法将系统与重力的影响隔离开。最多，我们可以将系统移动到感受到越来越小的重力力量的位置，但我们永远无法完全将系统与重力场分离。我们不仅在进行经典热力学时忽略了微弱的重力力量，而且忽略了更不寻常的事情，比如标准气体在盒子中的墙壁。我们之所以能够这样做，是因为气体达到与自身达到平衡所需的时间远远短于气体加墙壁系统达到平衡所需的时间。因此，我们通常忽略了盒子墙壁对气体的影响。

在这种近似中，许多人认为这是解决时间方向问题的可能解决方案。事实上，许多人认为这里面存在一种解决方案，它不改变经典力学的定律，也不允许反热力学行为的规律性可能性。换句话说，支持这种观点的人似乎认为它体现了一种第三种方式。Blatt 1959; Reichenbach 1956; Redhead and Ridderbos 1998，在某种程度上，Horwich 1987 是一些被这个想法吸引的作品。

这个想法是利用代表性相点的随机扰动对系统演化的影响。在我们的玻尔兹曼设置中，相空间中导致平衡和导致脱离平衡的点的体积之间存在巨大的不对称性。如果系统的代表点被随机撞击，由于这种不对称性，系统在任何给定时间内都很可能处于通向平衡的轨迹上。因此，如果可以认为之前对理想系统的统计力学处理忽略了系统环境中的随机扰动，那么似乎可以解决我们的问题。即使扰动很弱，它仍然会产生所期望的效果。先验地，这个问题的答案避免了对特殊初始条件和新定律的依赖。

但只是表面上的。对这种操作提出了许多批评。其中一个似乎是准确的观察是，如果经典力学要成为一种普遍理论，那么环境也必须受到经典力学的法则的支配。毕竟，环境并不是物理法则之外的某种机制，当我们也将其视为“机械之神”——随机扰动者时，它就消失了。如果我们将气体加上容器壁视为一个经典系统，它仍然受到可逆时间的法则的支配，这将导致与仅有气体时遇到的同样问题。在这一点上，有时会看到这样的回应，即气体加上壁的这个组合系统也有一个被忽视的环境，依此类推，直到我们到达整个宇宙。然后就会质疑我们是否有权利期望法则普遍适用（Reichenbach 1956: 81ff）。或者有人指出，我们无法为真实系统所遭受的所有相互作用编写哈密顿量，因此总会有一些“超出”受可逆时间哈密顿量支配的范围。这两个观点都依赖于对自然法则的一种操纵论。我们的问题只有在我们假设或假装世界确实是理论所说的那样时才会出现；放弃这种假设自然地“解决”了问题。与其进一步讨论这些回应，不如转向这种操作不需要修改经典力学法则的主张。

如果一个人不做出物理定律不统治环境的激进宣言，那么很容易看出，无论描述扰动者行为的定律是什么，如果环境要完成所需的工作，它不能是经典力学的定律。与经典力学的时间对称定律相反，一个时间反演非不变定律必须统治外部扰动者。否则，原则上我们可以将整个系统，包括环境和感兴趣的系统，都进行洛什米特反演。系统的速度将反转，数百万个微小扰动者的速度也将反转。如果定律是时间反演不变的，那么“奇迹般地”，就好像反转的系统和数百万个“反扰动者”之间有一个阴谋一样，整个系统将返回到其原始状态的时间反演。更重要的是，如果定律是时间反演不变的，这种反演与原始过程一样可能发生。因此，充分性的最小标准是随机扰动者是时间反演非不变的。但是，经典力学的定律是时间反演不变的。因此，如果这个“解决方案”要成功，它必须运用新的定律并修改或补充经典力学。（由于扰动需要真正是随机的而不仅仅是不可预测的，并且经典力学是确定性的，所以可以用不确定性而不是不可逆性来运行同样类型的论证。有关为什么人们犯了这个错误的诊断以及反对干预主义提供“冗余”物理机制负责熵增加的论证，请参见 Price 2002。）[5]

### 2.8 量子力学

就我们所知，我们的世界基本上是量子力学的，而不是经典力学的。这会改变情况吗？"也许" 可能是最好的答案。毫不奇怪，对这个问题的回答受到一个人对量子力学的解释的影响。量子力学遭受着臭名昭著的测量问题，这个问题要求对量子形式主义进行一种或另一种解释。这些解释大致分为两种类型，取决于它们对量子态的幺正演化（例如，根据薛定谔方程进行的演化）的看法：它们要么说量子态之外还有其他东西，要么说幺正演化并不完全正确。前者被称为 "无坍缩" 解释，而后者被称为 "坍缩" 解释。这不是讨论这些解释的细节的地方，但我们仍然可以勾勒出量子力学描绘的大致轮廓（更多信息请参见 Albert 1992）。

除了一些关于时间逆转含义的哲学问题（Albert 2000；Earman 2002）之外，控制量子态幺正演化的方程是时间逆转不变的。对于那些在量子力学中添加了一些东西的解释来说，这通常意味着所得到的理论也是时间逆转不变的（因为理论的一部分是不变的，而另一部分不是奇怪或不一致的）。由于所得到的理论是时间逆转不变的，所以可以像在经典力学中那样产生时间方向的问题。虽然在从经典力学到无坍缩量子力学的转变中许多细节发生了变化，但逻辑地理似乎保持不变。

坍缩解释对于我们的主题更加有趣。坍缩打断或直接替代了量子态的幺正演化。迄今为止，它们总是以时间反演不变的方式进行。因此，由此产生的理论不是时间反演不变的。这个事实为我们的问题提供了一个潜在的逃避途径：我们上述问题中的类型（2）的转变可能是不合法的。这导致了整个世纪以来许多思想家相信，坍缩以某种方式解释了热力学时间非对称性。

大多数这些假设的方法未能提供我们想要的。我们认为，即使在没有被玻姆观察者或维格纳意识存在的情况下，气体也会达到平衡。这个抱怨，诚然，与对这些解释的充分性的更一般的抱怨是相关的。但也许正因为这些有争议的特点，它们在解释热力学方面并没有被推得很远。

然而，还存在更令人满意的坍缩理论。一种由吉拉迪、里米尼和韦伯提出的理论，通常被称为 GRW，可以描述封闭系统中的坍缩，不需要对量子系统外的观察者进行可疑的诉求。阿尔伯特（1992 年，2000 年）对 GRW 对统计力学和热力学的影响进行了广泛研究。GRW 将为系统朝向平衡演化的时间非对称概率倾向提供基础。根据这个理论，反热力学行为并不是不可能的，而是极不可能的。该理论的创新之处在于，尽管熵在未来极有可能增加，但在过去增加的可能性并不同样极大（因为该理论没有提供动态的反向转换概率）。因此，该理论不会遭受上述时间方向的问题。

然而，这并不意味着它消除了对过去假设之类事物的需求。GRW 能够解释为什么在给定一个非平衡状态的现在状态下，后续状态应该具有更高的熵；而且它可以在不暗示先前状态也具有更高熵的情况下做到这一点。但它并没有解释宇宙是如何首次进入非平衡状态的。正如之前所指出的，有些人不确定如果有的话，什么会解释这个事实，或者我们是否应该努力解释它。阿尔伯特认为，GRW 带来的主要优点是它能够解决或绕过涉及统计力学中概率性质的各种问题。

陈（即将发表）提出的最近的一个建议也带来了同样类型的好处，甚至可以说还有其他好处。陈建议我们采用密度矩阵实在论的立场来帮助理解时间的箭头。我们不再将波函数视为量子理论的基本本体论，而是将量子态表示为一个不纯的密度矩阵。当我们用密度矩阵来表达过去假设时，会出现许多优点，包括统计力学和量子力学之间的概率更加协调。可能量子力学的解释并不像 GRW 那样，但它们可能具有一些相同的好处。

关于量子力学对我们问题的影响的更详细讨论可以在 Albert 2000、North 2002、Price 2002 和陈（即将发表）的著作中找到。但如果我们对表面的回顾是正确的，我们可以说量子力学不会消除我们对过去假设的需求，尽管它可能解决了至少一个与时间方向有关的问题。

### 2.9 法则性的初始条件？

最后，让我们回到关于过去假设的地位的一个点。如果没有一些能够消除或解释过去假设的新物理学，或者没有令人满意的“第三种方式”，似乎我们只能接受特殊初始条件的赤裸假设。人们可以质疑这是否真的有什么不令人满意的地方（Sklar 1993; Callender 2004b）。但也许我们一开始就错误地将过去假设视为一种偶然的边界条件。对于“为什么是这些特殊的初始条件？”这个问题，答案是“它们在物理上不可能是其他的”，这总是会让对话停止。事实上，费曼（1965: 116）在解释第二定律的统计版本时就是这样说的。

在没有特定的自然法则理解的情况下，对这个问题可能没有太多可说的。但是，根据特定的法则概念，很明显，关于这个问题的各种判断自然而然地产生——我们马上就会看到。然而，让我们承认这可能是事情倒过来了。可以说，我们首先应该弄清楚边界条件是否具有法则性，然后再设计一个适合答案的法则理论。仅仅根据当前的哲学法则理论来判断边界条件是否具有法则性，是对问题的预设判断。也许这个反对意见实际上是对根据自己对法则性的概念来解决问题的感觉有些不满意的证据。很难否认这一点。即便如此，简要地看一下一些法则概念与特殊初始条件的关系还是很有启发性的。有关自然法则的讨论和参考资料，请参阅相关条目。

例如，如果一个人同意约翰·斯图尔特·密尔的观点，即从法则中应该能够推导出一切，并且考虑到这个“一切”的热力学部分，那么对于这样的推导，将需要特殊的初始条件。这种法则观念的现代继承者，即与弗兰克·拉姆齐和大卫·刘易斯相关联的观点（参见洛厄尔 1996 年），将法则视为最简单、最强大、最一致的演绎系统的公理。在这样的系统中，特殊的初始条件很可能会作为一个公理出现，因为这样的约束可能会使法则比它们本来的力量更强大。

然而，我们不应该期望天真的规律观点会遵循这种情况。根据这种观点，大致上，如果 B 总是跟随 A，那么 A 导致 B 就是自然法则。然而，为了避免在任何地方都找到法则，这种观点需要假设 A 和 B 被实例化了很多次。但是初始条件只发生一次。

对于更强大的现实主义法则观念来说，很难预测特殊的初始条件是否会被视为类似法则。像帕吉特（1984 年）的必然主义观点认为，在我们的世界中，如果 P 在通过法则可及关系与我们相连的每个可能世界中都成立，那么 P 就是一条法则。在没有关于可及关系和与我们相关的世界的更具体信息的情况下，我们只能猜测相对于我们的所有世界是否具有相同的特殊初始条件。然而，一些现实主义理论提供了明显的限制性标准，因此它们能够做出否定的判断。例如，与大卫·阿姆斯特朗相关的“普遍主义”理论认为，法则是普遍性之间的关系。然而，初始条件的约束并没有以任何自然的方式呈现出来；因此，普遍主义理论似乎不会将这种约束视为类似法则。

哲学观点无疑是分歧的。问题在于，类似法则的边界条件缺乏我们通常认为的法则的许多特征，例如多个实例、统治时间演化等，然而，对于法则的不同解释关注不同的特征子集。当我们转向手头的问题时，我们发现了我们所期望的分歧。

## 3. 时间方向的问题 II

生活充满了时间的非对称性。这种指向性是我们所居住的世界最普遍的特征之一。我们可以将这种普遍趋势分解为几个更具体的时间箭头。

1. 认识论箭头。粗略地说，我们对过去的了解比对未来的了解更多。我知道昨天地板上的破碎鸡蛋的轮廓与智利的边界相似，但我不知道明天的破碎鸡蛋会是什么样子。阿尔伯特（2000）提供了一个更好的描述，因为没有人真正计算和比较过去和未来之间的已知命题。最好是像他所说的那样，我们认识过去的方式与我们认识未来的方式不同。未来似乎也有比过去更多的事件痕迹。当我说了一些尴尬的话时，代表那个事件的信息被编码在声音和光波中，形成了一个不断增长的球形壳在我的未来光锥中。我在整个未来光锥中都有可能进一步尴尬。然而，在它的反向光锥中没有任何不幸事件的迹象。
2. 可变性箭头。我们感觉未来是“开放的”或不确定的，而过去则不是。过去是封闭的，永远固定。与此相关的无疑是我们的行动与未来而不是过去紧密相连的感觉。未来是可变的，而过去则不是。
3. 心理箭头。我们对待过去和未来的态度非常不同。我们害怕未来，但不害怕过去的头痛和监禁。这个有争议的箭头实际上是许多不同的非对称性。另一个备受争议的是，我们似乎共享一种心理上的时间流逝感。据说，我们感觉到一个移动的“现在”，即事件从未来转变为过去时的现在之动。
4. 解释-因果-反事实箭头。实际上，这个箭头实际上是三个，但它们之间似乎存在联系是合理的。原因通常发生在效果之前。与某种方式相关的因果不对称性是解释的不对称性。通常好的解释会涉及到要解释的事件过去发生的事件，而不是未来发生的事件。也许这只是我们应该摒弃的偏见，但这是我们经常有的直觉。最后，毫无疑问，这又与其他两个箭头以及可变性箭头有关，我们至少天真地相信未来在反事实上依赖于现在，而不相信过去在反事实上依赖于现在。

上述列表并不意味着详尽无遗或特别干净。时间的不对称性无处不在。我们变老并死去。笑话的点睛之笔在于结尾。倾向、倾向和繁殖适应度都是面向未来的。我们更喜欢从贫穷到富裕的故事，而不是从富裕到贫穷的故事。显然，这些箭头之间存在联系。一些作者明确或隐含地提出了各种“依赖图表”，旨在解释上述箭头中的哪些依赖于哪些存在。Horwich（1987）认为，反事实箭头依赖于因果箭头，后者依赖于解释箭头，后者又依赖于认识论箭头。相比之下，Lewis（1979）认为，痕迹的被过度决定导致了反事实的不对称性，而这反过来又导致了其他的不对称性。Suhler 和 Callender（2011）将心理箭头建立在因果和知识的不对称性上。最合适的图表将在很大程度上取决于一个人对许多重大问题的一般哲学立场。

哪个依赖图是正确的并不是我们在这里关心的问题。相反，第二个“时间方向的问题”是这样问的：这些箭头中的任何一个（全部？）最终都是由热力学时间箭头（或其基础）决定的吗？

Sklar（1985）提供了一些有用的例子。考虑上下的非对称性。它很可能归结为局部重力梯度。在月球上的宇航员认为向下是指向月球中心的方向，而不是他们离开地球时的位置。相比之下，左右的非对称性（例如蜗牛壳）与高能粒子物理学中的空间反演破缺可能仅仅存在相关性。第二个问题问的是，上述任何一个时间非对称性是否与热力学箭头的关系类似于上下的非对称性与局部重力梯度的关系。当然，我们并不期望有什么那么直接。Sklar 描述了一个实验，其中将铁粉插入鱼的耳囊，当在水箱上方放置一个磁铁时，鱼会倒游，这可能改变了它们的上下感觉。但正如 Jos Uffink 对我说的那样，进入冰箱并不会让我们记住未来。如果有的话，这些联系肯定是微妙的。

### 3.1 热力学简化

在这方面受到玻尔兹曼的启发，许多哲学家都试图进行这种归约，无论是部分还是完全的。格伦鲍姆（1973）和斯马特（1967）发展了关于知识非对称性的熵解释。刘易斯（1979）怀疑痕迹的非对称性与热力学箭头有关，但没有提供具体细节。道（1992）等一些人将因果关系的方向与熵梯度联系起来。还有一些人将心理箭头与这个梯度联系起来（有关讨论，请参见克罗斯 1985 年）。也许最有雄心壮志的一次性将许多箭头基础化的尝试可以在 Reichenbach 1956 年，Horwich 1987 年和 Albert 2000 年，2015 年的著作中找到。这些书中的每一本都提供了可能的热力学解释，用于因果和认识箭头，以及许多附属箭头。

将这些箭头直接归约为熵可能不太可能（Earman 1974; Horwich 1987）。考虑认识时间的箭头。传统的熵解释声称，因为我们知道世界上（或我们所在的部分）有许多增熵系统而不是减熵系统，所以当我们看到一个低熵系统时，我们可以推断它之前和之后与系统外的某物发生了相互作用。以典型的例子为例，想象一下你在海滩上散步，看到沙滩上的一个脚印。你可以推断早些时候有人经过（与其作为随机波动产生相反）。换句话说，由于它的高秩序，你推断它是由之前也是高（或更高）秩序的某物引起的，即有人走过。

然而，熵的解释面临一些非常严峻的挑战。首先，海滩上的脚印是否具有明确定义的热力学熵？为了描述这个例子，我们从低熵转向高秩序，但熵与我们普通的秩序概念之间的关联最多是脆弱的，通常是完全误导性的。（要理解这一点，只需考虑一下沙拉酱在静置后会发生什么。当油和醋分离时，秩序增加，但熵却增加。）为了描述我们所了解的系统范围，解释需要比热力学熵更广泛的东西。但是什么呢？Reichenbach 被迫转向准熵的概念，从而失去了简化的效果。其次，熵的解释并不授权推断一个人在海滩上行走。它只告诉你脚印中的沙粒之前与其环境发生了相互作用，这只是我们能够讲述过去发生的详细故事的冰山一角。第三，即使我们接受了更广泛的熵理解，它仍然并不总是有效的。考虑 Earman（1974）关于一颗炸弹摧毁一座城市的例子。从这次破坏中，我们可以推断出一颗炸弹爆炸了；然而被炸毁的城市并没有比周围环境具有更低的熵，甚至没有任何类型的直观上更高的秩序。

### 3.2 统计力学简化

大概是出于这些原因，当代理论放弃了将时间箭头建立在热力学熵上的尝试。相反，他们转向统计力学，这是热力学箭头的基础。这种更一般的基础被认为是其他箭头更为肥沃的土壤。实际上，热力学箭头只被视为另一个非基本箭头，就像上面提到的那四个箭头一样。Horwich（1987）将这些箭头追溯到初始微观混沌状态。而 Albert（2000 年，2015 年）和 Loewer（2012 年）则将它们追溯到一个被称为 Mentaculus 的包裹（取自科恩兄弟的电影《严肃的人》）。让我们简要地考虑一下 Albert 和 Loewer 如何从 Mentaculus 中推导出热力学箭头、认识论箭头和因果箭头。

在科恩兄弟的电影中，角色 Arthur Gopnik 是一位数学家，他整天躺在沙发上，用一个笔记本填满了宇宙的概率地图，即 Mentaculus。根据 Albert 和 Loewer 的说法，这个名字非常贴切。实际上，它为我们提供了每个宏观概括的概率地图，因为它提供了实现这些宏观状态的所有微观状态的概率。这个包裹由以下元素组成：过去的假设（初始宏观状态 M(0)的熵非常低），在实现 M(0)的微观状态上的均匀概率分布，当前的宏观状态 M(t)，以及微观层面的动力学定律。

他们说，这个包裹意味着热力学箭头。我们通过在时间 t 提出一个案例来“推导”它，该案例是基于基本物理学的。

P(S 在 M(t) 和 M(0) 和 M(0) 上的均匀概率下增加) = 高

玻尔兹曼、吉布斯和许多其他人提出了这个观点，尽管值得注意的是，他们只在理想情况下严谨地进行了论证，而且仍然存在争议（见上文）。尽管如此，这个观点在物理上似乎是合理的。我们可以说更多的话，但让我们先承认这一点。然后注意到时间方向的第一个问题被过去假设所阻止。我们在给定 M(0) 和 M(t) 而不仅仅是 M(t) 的均匀分布上进行条件化。宇宙的一端的约束使得更早的熵更高的说法不太可能。如果正确，我们就从底层上对一个特殊科学定律“热力学第二定律”进行了真正的简化。

但是这个理论还暗示了更多。转向因果箭头。作为一个非常粗略的近似，因果关系可以通过概率分析来分析。如果 C 是在 E 之前，并且在给定 C 和背景 B 的情况下，E 发生的概率大于仅给定 B 的情况下 E 发生的概率，那么 C 导致 E。当然，这个解释存在一些主要问题（参见关于概率因果关系的条目）。然而，核心直觉似乎来自这个理论，因为我们从过去假设中得到了原因的时间优先性，从统计力学中得到了概率。它们一起被认为解释了为什么我们可以操纵原因来产生效果，但不能反过来。转向认识箭头。思考记录的本质。当你在秤上称重时，你会产生一份关于自己体重的记录。这个记录是基于对两个不同时间秤的状态进行比较的推理。如果在我踩上秤之前，秤处于其正常工作状态的 0 磅，那么我就是 180 磅（假设）。这个想法非常宽泛（详见 Albert 2000、2015 和 Loewer 2012 的细节），即过去假设实际上是世界的准备状态。这个高度约束的状态导致过去在现在有宏观痕迹，但未来在现在没有宏观痕迹。

当然，这个雄心勃勃的计划遭到了激烈的批评。统计力学暗示（概率上）几乎每一个支持反事实的概括在科学和日常生活中的真实性或虚假性，这个想法被许多人认为太过分了。请参见 Callender 和 Cohen 2010、Earman 2006、Frisch 2010、Leeds 2003、North 2011、Westlake 2014、Winsberg 2004 以及 Wilson 2014 中的一些文章。

很久以前，玻尔兹曼（例如，1895 年）提出了上述时间非对称性是由熵增加的方向解释的。在发展这个令人着迷的论点方面已经取得了很大进展。然而，正如对热力学箭头起源的第一个问题的研究仍然活跃一样，对第二个问题的研究也是如此。


## Bibliography

* Albert, David Z., 1992, *Quantum Mechanics and Experience*, Cambridge, MA: Harvard University Press.
* –––, 2000, *Time and Chance*, Cambridge, MA: Harvard University Press.
* –––, 2015, *After Physics*, Cambridge, MA: Harvard University Press.
* Allori, Valia, 2015, “Maxwell’s Paradox: Classical Electrodynamics and its Time Reversal Invariance”, *Analytica*, 1: 1–19.
* –––, 2020, *Statistical Mechanics and Scientific Explanation: Determinism, Indeterminism and Laws of Nature*, Singapore: World Scientific. doi:10.1142/11591
* Arntzenius, Frank, 1994, “The Classical Failure to Account for Electromagnetic Arrows of Time”, in Tamara Horowitz & Alan Ira Janis (eds.), *Scientific Failure*, Lanham: Rowman & Littlefield, pp. 29–48.
* Atkinson, David, 2006, “Does Quantum Electrodynamics Have an Arrow of Time?”, *Studies in the History and Philosophy of Modern Physics*, 37(3): 528–541. doi:10.1016/j.shpsb.2005.03.003
* Barbour, J., Koslowski, T. and Mercati, F., 2014, “Identification of a Gravitational Arrow of Time”, *Physical Review Letters*, 113: 181101.
* Blatt, J.M., 1959, “An Alternative Approach to the Ergodic Problem”, *Progress in Theoretical Physics*, 22(6): 745. doi:10.1143/PTP.22.745
* Boltzmann, Ludwig, 1895, “On Certain Questions of the Theory of Gases”, *Nature*, 51: 413–15.
* Bricmont, Jean, 1995, “Science of Chaos or Chaos in Science?”, *Physicalia Magazine*, 17(3–4): 159–208.
* Brown, Harvey R., Wayne Myrvold, and Jos Uffink, 2009, “Boltzmann’s H-Theorem, Its Discontents, and the Birth of Statistical Mechanics ”, *Studies in the History and Philosophy of Science*, 40(2): 174–191. doi:10.1016/j.shpsb.2009.03.003
* Brown, Harvey R. and Jos Uffink, 2001, “The Origins of Time-Asymmetry in Thermodynamics: The Minus First Law”, *Studies in the History and Philosophy of Modern Physics*, 32(4): 525–538. doi:10.1016/S1355-2198(01)00021-1
* Brush, S.G., 1976, *The Kind of Motion We Call Heat*, Amsterdam: North Holland.
* Callender, Craig, 1997, “What is ‘The Problem of the Direction of Time’?”, *Philosophy of Science* (Supplement), 64: S223–34. doi:10.1086/392602
* –––, 1998, “The View From No-when”, *British Journal for the Philosophy of Science*, 49(135): 135–159. doi:10.1093/bjps/49.1.135
* –––, 1999, “Reducing Thermodynamics to Statistical Mechanics: The Case of Entropy”, *Journal of Philosophy*, 96(7): 348–373. doi:10.5840/jphil199996733
* –––, 2004a, “There is No Puzzle about the Low Entropy Past”, in Christopher Hitchcock (ed.), *Contemporary Debates in the Philosophy of Science*, Oxford: Blackwell, 240–256.
* –––, 2004b, “Measures, Explanation and the Past: Should ‘Special’ Initial Conditions Be Explained?”, *British Journal for the Philosophy of Science*, 55(2): 195–217. doi:10.1093/bjps/55.2.195
* –––, 2010, “The Past Hypothesis Meets Gravity”, in Gerhard Ernst and Andreas Hüttemann (eds), *Time, Chance and Reduction*, Cambridge: Cambridge University Press, pp. 34–58.
* –––, 2011a, “The Past Histories of Molecules”, in Claus Beisbart & Stephan Hartmann (eds.), *Probabilities in Physics*, Oxford: Oxford University Press, pp. 83–113. doi:10.1093/acprof:oso/9780199577439.003.0004
* –––, 2011b, “Hot and Heavy Matters in the Foundations of Statistical Mechanics”, *Foundations of Physics*, 41(6): 960–981. doi:10.1007/s10701-010-9518-z
* Callender, Craig (ed.), 2011c, *The Oxford Handbook of Philosophy of Time*, Oxford: Oxford University Press.
* Carathéodory, Constantin, 1909, “Untersuchungen über die Grundlagen der Thermodynamik”, *Mathematische Annalen*, 67(3): 355–386 doi:10.1007/BF01450409
* Carnot, Sadi, 1824, *Réflexions sur la puissance motrice du feu et sur les machines propres à développer cette puissance*, Paris: Chez Bachelier, Libraire; translated as *Reflections on the Motive Power of Heat*, R.H. Thurston (trans.), New York: Wiley & Sons, 1897.
* Chen, Eddy Keming, forthcoming, “Quantum Mechanics in a Time-Asymmetric Universe: On the Nature of the Initial Quantum State”, *The British Journal for the Philosophy of Science*, first online 13 October 2018. doi:10.1093/bjps/axy068
* Christensen, F.M., 1993, *Space-like Time: Consequences Of, Alternatives To, and Arguments Regarding the Theory That Time Is Like Space*, Toronto: University of Toronto Press.
* Clausius, Rudolf, 1854, “Ueber eine veränderte Form des zweiten Hauptsatzes der mechanischen Wärmetheorie”, *Annalen der Physik und Chemie*, 93(12): 481–506. doi:10.1002/andp.18541691202
* –––, 1865, “Ueber verschiedene für die Anwendung bequeme Formen der Hauptgleichungen der mechanischen Wärmetheorie”, *Annalen der Physik und Chemie*, 201(7): 353–400. doi:10.1002/andp.18652010702
* Cocke, W.J., 1967, “Statistical Time Symmetry and Two-Time Boundary Conditions in Physics and Cosmology”, *Physical Review*, 160(5): 1165–70. doi:10.1103/PhysRev.160.1165
* Cohen, Jonathan and Craig Callender, 2010, “Special Sciences, Conspiracy and the Better Best System Account of Lawhood”, *Erkenntnis*, 73(3): 427–447. doi:10.1007/s10670-010-9241-3
* Davies, P.C.W., 1994, “Stirring Up Trouble”, in Haliwell *et al.* 1994: 119–30.
* Dougherty, John and Craig Callender, forthcoming, “Black Hole Thermodynamics: More Than an Analogy?” in B. Loewer (ed.), *Guide to Philosophy of Cosmology*, Oxford: Oxford University Press, forthcoming.
* Dowe, Phil, 1992, “Process Causality and Asymmetry”, *Erkenntnis*, 37(2): 179–196. doi:10.1007/BF00209321
* Earman, John, 1969, “The Anisotropy of Time”, *Australasian Journal of Philosophy*, 47(3): 273–295. doi:10.1080/00048406912341281
* –––, 1974, “An Attempt to Add a Little Direction to ‘The Problem of the Direction of Time’”, *Philosophy of Science*, 41(1): 15–47. doi:10.1086/288568
* –––, 1981, “Combining Statistical-Thermodynamics and Relativity Theory: Methodological and Foundations Problems”, in Peter D. Asquith and Ian Hacking (eds), *Proceedings of the 1978 Biennial Meeting of the Philosophy of Science Association*, 2: 157–185
* –––, 2002, “What Time Reversal Invariance Is and Why It Matters”, *International Journal for the Philosophy of Science*, 16: 245–264.
* –––, 2006, “The ‘Past Hypothesis’: Not Even False”, *Studies in History and Philosophy of Modern Physics*, 37(3): 399–430. doi:10.1016/j.shpsb.2006.03.002
* –––, 2011, “Sharpening the Electromagnetic Arrow(s) of Time”, in Callender 2011c: 485–527. doi:10.1093/oxfordhb/9780199298204.003.0017
* Fermi, Enrico, 1936, *Thermodynamics*, New York: Dover.
* Feynman, Richard, 1965, *The Character of Physical Law*, Cambridge, MA: MIT Press.
* Frigg, Roman, 2008, “A Field Guide to Recent Work on the Foundations of Statistical Mechanics”, in Dean Rickles, ed., *The Ashgate Companion to Contemporary Philosophy of Physics*, London: Ashgate, pp. 99–196.
* –––, 2009, “Typicality and the Approach to Equilibrium in Boltzmannian Statistical Mechanics”, *Philosophy of Science*, 76(5): 997–1008. doi:10.1086/605800
* Frigg, Roman and Charlotte Werndl, 2011, “Entropy: A Guide for the Perplexed”, in Claus Beisbart and Stephan Hartmann (eds.), *Probability in Physics*, Oxford: Oxford University Press, 115–142.
* Frisch, Mathias, 2000, “(Dis-)solving the Puzzle of the Arrow of Radiation” *British Journal for the Philosophy of Science*, 51(3): 381–410. doi:10.1093/bjps/51.3.381
* –––, 2006, “A Tale of Two Arrows”, *Studies in History and Philosophy of Modern Physics*, 37(3): 542–558. doi:10.1016/j.shpsb.2005.03.004
* –––, 2010, “Does a Low-Entropy Constraint Prevent Us from Influencing the Past?” in Andreas Hüttemann and Gerhard Ernst (eds.), *Time, Chance, and Reduction: Philosophical Aspects of Statistical Mechanics*, Cambridge: Cambridge University Press, 13–33.
* Frisch, Mathias and Wolfgang Pietsch, 2016, “Reassessing the Ritz–Einstein debate on the radiation asymmetry in classical electrodynamics”, *Studies in History and Philosophy of Modern Physics*, 55: 13–23. doi:10.1016/j.shpsb.2016.05.001
* Gold, T., 1962, “The Arrow of Time”, *American Journal of Physics*, 30: 403–10. doi:10.1119/1.1942052
* Goldstein, Sheldon, 2001, “Boltzmann’s Approach to Statistical Mechanics”, in J. Bricmont, D. Dürr, M.C. Galavotti, G. Ghirardi, F. Petruccione, and N. Zanghi (eds), *Chance in Physics: Foundations and Perspectives* (Lecture Notes in Physics 574), Berlin: Springer-Verlag. [[Goldstein 2001 preprint available online](http://www.math.rutgers.edu/~oldstein/papers/bol.pdf)]
* Goldstein, Sheldon, Roderick Tumulka, and Nino Zanghi, 2016, “Is the Hypothesis About a Low Entropy Initial State of the Universe Necessary for Explaining the Arrow of Time?” *Physical Review D*, 94(2): 023520. doi:10.1103/PhysRevD.94.023520
* Grünbaum, Adolf, 1973, *Philosophical Problems of Space and Time*, New York: Knopf.
* Haliwell, J.J., J. Pérez-Mercader, and W.H. Zurek (eds.), 1994, *Physical Origins of Time Asymmetry*, Cambridge: Cambridge University Press.
* Hawking, Stephen, 1987, “The Boundary Conditions of the Universe” in L.-Z. Fang and R. Ruffini (eds.), *Quantum Cosmology*, Teaneck, NJ: World Scientific, pp. 162–174.
* Healey, Richard, 1981, “Statistical Theories, QM and the Directedness of Time”, in Richard Healey (ed.), *Reduction, Time and Reality: Studies in the Philosophy of the Natural Sciences*, Cambridge: Cambridge University Press.
* Hemmo, Meir and Orly R. Shenker, 2012, *The Road to Maxwell’s Demon: Conceptual Foundations of Statistical Mechanics*, New York: Cambridge University Press.
* –––, 2020, “Can the Past Hypothesis Explain the Psychological Arrow of Time?” in Valia Allori (ed.), *Statistical Mechanics and Scientific Explanation: Determinism, Indeterminism and Laws of Nature*, Singapore: World Scientific, pp. 255–287. doi: 10.1142/9789811211720_0008
* Horwich, Paul, 1987, *Asymmetries in Time: Problems in the Philosophy of Science*, Cambridge, MA: MIT Press.
* Hurley, James, 1986, “The Time-asymmetry Paradox”, *American Journal of Physics*, 54(1): 25–28. doi:10.1119/1.14764
* Joos, E. and H.D. Zeh, 1985, “The Emergence of Classical Properties through Interaction with the Environment”, *Zeitschrift für Physik*, 59(2): 223–243. doi:10.1007/BF01725541
* Klein, M.J., 1973, “The Development of Boltzmann’s Statistical Ideas” in E.G.D. Cohen and W. Thirring (eds.), *The Boltzmann Equation: Theory and Applications*, Vienna: Springer, pp. 53–106.
* Kroes, Peter, 1985, *Time: Its Structure and Role in Physical Theories*, Boston: D. Reidel.
* Laflamme, R., 1994, “The Arrow of Time and the No-boundary Proposal” in Haliwell *et al.* 1994: 358–68.
* Lavis, D.A., 2005, “Boltzmann and Gibbs: an attempted reconciliation”, *Studies in the History and Philosophy of Modern Physics*, 36(2): 245–273. doi:10.1016/j.shpsb.2004.11.007
* Lazarovici, Dustin and Reichert, Paula, 2020, “Arrow(s) of Time without a Past Hypothesis”, in Valia Allori (ed.), *Statistical Mechanics and Scientific Explanation: Determinism, Indeterminism and Laws of Nature*, Singapore: World Scientific, pp. 343–386. doi:10.1142/9789811211720_0010
* Lebowitz, Joel L., 1993, “Boltzmann’s Entropy and Time’s Arrow”, *Physics Today*, 46(9): 32–38. doi:10.1063/1.881363
* Leeds, Stephen, 2003, “Foundations of statistical mechanics: Two approaches”, *Philosophy of Science*, 70(1): 126–144. doi:10.1086/367873
* Lewis, David, 1979, “Counterfactual Dependence and Time’s Arrow”, *Noûs*, 13(4): 455–76. doi:10.2307/2215339
* Lieb, Elliot H. and Jakob Yngvason, 2000, “A Fresh Look at Entropy and the Second Law of Thermodynamics”, *Physics Today*, 53(4): 32–37. doi:10.1063/1.883034
* Liu, Chuang, 1994, “Is There a Relativistic Thermodynamics? A Case Study of the Meaning of Special Relativity”, *Studies in the History and Philosophy of Modern Physics*, 25: 983–1004. doi:10.1016/0039-3681(94)90073-6
* Loewer, Barry, 1996, “Humean Supervenience” *Philosophical Topics*, 24(1): 101–127. doi:10.5840/philtopics199624112
* –––, 2012, “The Emergence of Time’s Arrows and Special Science Laws from Physics”, *Interface Focus*, 2(1): 13–19. doi:10.1098/rsfs.2011.0072
* Loschmidt, J., 1876/1877, “Über die Zustand des Wärmegleichgewichtes eines Systems von Körpern mit Rücksicht auf die Schwerkraft”, *Wiener Berichte*, 73: 128, 366 (1876); 75: 287; 76: 209 (1877).
* Maudlin, Tim, 2002, “Remarks on the Passing of Time”, *Proceedings of the Aristotelian Society*, 102(1): 259–274. doi:10.1111/j.0066-7372.2003.00053.x
* Myrvold, Wayne, 2020, “Explaining Thermodynamics: What Remains to be Done?” in Valia Allori (ed.), *Statistical Mechanics and Scientific Explanation: Determinism, Indeterminism and Laws of Nature*, Singapore: World Scientific, pp. 113–143. doi:10.1142/9789811211720_0004
* North, Jill, 2002, “What is the Problem about the Time-Asymmetry of Thermodynamics? A Reply to Price”, *British Journal for the Philosophy of Science*, 53(1): 121–136. doi:10.1093/bjps/53.1.121
* –––, 2003, “Understanding the Time-Asymmetry of Radiation”, *Philosophy of Science* 70(5, proceedings): 1086–1097.doi:10.1086/377391
* –––, 2011, “Time in Thermodynamics”, in Callender 2011c: 312–352. doi:10.1093/oxfordhb/9780199298204.003.0011
* Pargetter, R., 1984, “Laws and Modal Realism”, *Philosophical Studies*, 46: 335–347.
* Partovi, M. Hossein, 1989, “Irreversibility, Reduction, and Entropy Increase in Quantum Measurements”, *Physics Letters A*, 137(9): 445–450. doi:10.1016/0375-9601(89)90222-3
* Penrose, Oliver, 1970, *Foundations of Statistical Mechanics*, New York: Pergamon Press.
* Penrose, Oliver and I.C. Percival, 1962, “The Direction of Time”, *Proceedings of the Physical Society*, 79(3): 605–615. doi:10.1088/0370-1328/79/3/318
* Penrose, Roger, 1989, *The Emperor’s New Mind: Concerning Computers, Minds and The Laws of Physics*, Oxford: Oxford University Press.
* Pippard, A.B., 1964, *The Elements of Classical Thermodynamics*, Cambridge: Cambridge University Press.
* Popper, Karl R., 1956, “The Arrow of Time”, *Nature*, 177 (March 17): 538. doi:10.1038/177538a0
* Price, Huw, 1995, “Cosmology, Time’s Arrow, and That Old Double Standard”, in Savitt 1995: 66–94.
* –––, 1996, *Time’s Arrow and Archimedes’ Point: New Directions for the Physics of Time*, New York: Oxford University Press. [[Price 1996 table of contents and chapter 1 available online](http://www.usyd.edu.au/time/price/TAAP.html)]
* –––, 2002, “Burbury’s Last Case: The Mystery of the Entropic Arrow”, in Craig Callender (ed.), *Time, Reality and Experience*, Royal Institute of Philosophy Supplements, 50: 19–56, Cambridge: Cambridge University Press. doi:10.1017/S1358246100010493
* –––, 2004, “On the Origins of the Arrow of Time: Why There is Still a Puzzle about the Low-Entropy Past”, in Christopher Hitchcock (ed.), *Contemporary Debates in the Philosophy of Science*, Oxford: Blackwell, 219–232.
* –––, 2006, “Recent Work on the Arrow of Radiation”, *Studies in History and Philosophy of Science Part B: Studies in History and Philosophy of Modern Physics*, 37(3): 498–527. doi:10.1016/j.shpsb.2006.03.004
* Psillos, Stathis, 1994, “A Philosophical Study of the Transition from the Caloric Theory of Heat to Thermodynamics”, *Studies in the History and Philosophy of Science*, 25(2): 159–90. doi:10.1016/0039-3681(94)90026-4
* Reichenbach, Hans, 1956, *The Direction of Time*, Maria Reichenbach (ed.), Berkeley: University of California Press.
* Redhead, Michael L.G. and Ridderbos, T.M. , 1998, “The Spin-Echo Experiments and the Second Law of Thermodynamics”, *Foundations of Physics*, 28(8): 1237–1270. doi:10.1023/A:1018870725369
* Ritz, Walter and Albert Einstein, 1909, “Zum gegenwärtigen Stand des Strahlungsproblems (On the Current State of the Radiation Problem)”, *Physikalische Zeitschrift*, 10: 323–324.
* Robertson, Katie, forthcoming, “In Search of the Holy Grail: How to Reduce the Second Law of Thermodynamics”, *British Journal for the Philosophy of Science*.
* Rohrlich, Fritz, 2006, “Time in Classical Electrodynamics”, *American Journal of Physics*, 74(4): 313–315. doi:10.1119/1.2178847
* Sachs, Robert G., 1987, *The Physics of Time Reversal*, Chicago: University of Chicago Press.
* Sanford, David H., 1984, “The Direction of Causation and the Direction of Time”, in P. French, *et al*. (eds.), *Midwest Studies in Philosophy IX*, Minneapolis: University of Minnesota Press, 53–75. doi:10.1111/j.1475-4975.1984.tb00052.x
* Savitt, Steven F. (ed.), 1995, *Time’s Arrow Today: Recent Physical and Philosophical Work on the Direction of Time*, Cambridge: Cambridge University Press.
* –––, 1996, “Survey Article: The Direction of Time”, *British Journal for the Philosophy of Science*, 47(3): 347–370. doi:10.1093/bjps/47.3.347
* Schulman, L.S., 1997, *Time’s Arrows and Quantum Measurement*, New York: Cambridge University Press.
* Sklar, Lawrence, 1985, *Philosophy and Spacetime Physics*, Berkeley: University of California Press.
* –––, 1993, *Physics and Chance: Philosophical Issues in the Foundations of Statistical Mechanics*, Cambridge: Cambridge University Press.
* Smart, J.J.C., 1967, “Time” in *Encyclopedia of Philosophy*, Paul Edwards (ed.), New York: Macmillan.
* Suhler, Christopher and Craig Callender, 2012, “Thank Goodness that Argument is Over: Explaining the Temporal Value Asymmetry”, *Philosophers’ Imprints*, 12(15): 1–16. [[Suhler and Callender 2012 available online](http://hdl.handle.net/2027/spo.3521354.0012.015)]
* Tolman, Richard C., 1934, *Relativity, Thermodynamics and Cosmology*, Oxford: Oxford University Press.
* Uffink, Jos, 2001, “Bluff Your Way in the Second Law of Thermodynamics”, *Studies in the History and Philosophy of Modern Physics*, 32(3): 305–394. doi:10.1016/S1355-2198(01)00016-8
* –––, 2006, “Compendium to the Foundations of Classical Statistical Physics”, in Jeremy Butterfield & John Earman (eds), *Philosophy of Physics* (Handbook of Philosophy), Amsterdam: North-Holland, pp. 923–1074.
* Wallace, David, 2010, “Gravity, Entropy, and Cosmology: In Search of Clarity”, *British Journal for the Philosophy of Science*, 61(3): 513–540. doi:10.1093/bjps/axp048
* –––, 2013, “The Arrow of Time in Physics”, in Heather Dyke and Adrian Bardon (ed.), in *A Companion to Philosophy of Time*, Chichester, U.K.: John Wiley & Sons. doi:10.1002/9781118522097.ch16
* Weingard, Robert, 1977, “Space-Time and the Direction of Time”, *Noûs*, 11(2): 119–131. doi:10.2307/2214540
* Westlake, Brad, 2014, “Statistical Mechanical Imperialism”, in Wilson 2014: 241–257. doi:10.1093/acprof:oso/9780199673421.003.0012
* Wilson, Alastair (ed.), 2014, *Chance and Temporal Asymmetry*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199673421.001.0001
* Winsberg, Eric, 2004, “Can Conditioning on the ‘Past Hypothesis’ Militate Against the Reversibility Objections?”, *Philosophy of Science*, 71(4): 489–504. doi:10.1086/423749
* Zeh, H.-Dieter, 1989, *The Physical Basis of the Direction of Time*, Berlin: Springer-Verlag.
* Zermelo, E. 1896, ‘Über einen Satz der Dynamik und die mechanische Wärmetheorie’, *Annalen der Physik*, 57: 485–494.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=time-thermo). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/time-thermo/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=time-thermo&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/time-thermo/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* Carroll, Sean M. and Jennifer Chen, 2004. “[Spontaneous Inflation and the Origin of the Arrow of Time](http://arxiv.org/abs/hep-th/0410270)”, manuscript at arVix.org.
* [PhilSci Archive](http://philsci-archive.pitt.edu/) (University of Pittsburgh); contains a section containing papers in the foundations of thermodynamics and statistical mechanics. Many papers relevant to this entry are available.

## Related Entries

[causation: probabilistic](https://plato.stanford.edu/entries/causation-probabilistic/) | [laws of nature](https://plato.stanford.edu/entries/laws-of-nature/) | [physics: intertheory relations in](https://plato.stanford.edu/entries/physics-interrelate/) | [probability, interpretations of](https://plato.stanford.edu/entries/probability-interpret/) | [Reichenbach, Hans: common cause principle](https://plato.stanford.edu/entries/physics-Rpcc/) | [statistical physics: Boltzmann’s work in](https://plato.stanford.edu/entries/statphys-Boltzmann/) | [statistical physics: philosophy of statistical mechanics](https://plato.stanford.edu/entries/statphys-statmech/) | [time: the experience and perception of](https://plato.stanford.edu/entries/time-experience/)

[Copyright © 2021](https://plato.stanford.edu/info.html#c) by  
[Craig Callender](http://philosophy.ucsd.edu/faculty/ccallender/) <[*ccallender@ucsd.edu*](mailto:ccallender%40ucsd%2eedu)>

