# 量子纠缠与信息 quantum entanglement and information (Jeffrey Bub)

*首次发表于 2001 年 8 月 13 日；实质性修订于 2023 年 5 月 2 日。*

量子纠缠是一种物理资源，类似于能量，与可能存在于分离的量子系统之间的奇特非经典相关性相关。纠缠可以被测量、转换和纯化。处于纠缠态的一对量子系统可以被用作量子信息通道，用于执行计算和密码学任务，这对于经典系统来说是不可能的。对量子系统的信息处理能力的一般研究是量子信息理论的主题。

---

## 1. 量子纠缠

1935 年和 1936 年，薛定谔在《剑桥哲学学会会议录》上发表了一篇两部分的文章，讨论并扩展了爱因斯坦、波多尔斯基和罗森的论点。爱因斯坦-波多尔斯基-罗森（EPR）论证在很多方面是爱因斯坦对正统哥本哈根量子力学解释的批评的顶点，并旨在表明该理论是不完整的。（请参阅关于量子理论中的爱因斯坦-波多尔斯基-罗森论证和哥本哈根量子力学解释的条目。）在经典力学中，系统的状态本质上是系统属性的列表，更准确地说，它是一组参数的规定，可以从中重建属性的列表：系统中所有粒子（或场的情况下类似的参数）的位置和动量。理论的动力学规定了属性如何根据状态的演化定律而变化。在写给马克斯·玻恩的一封信中，沃尔夫冈·泡利将这种对物理系统的描述方式称为“超然观察者”理想化（见《波恩-爱因斯坦信件》，波恩，1992 年；第 218 页）。在哥本哈根解释中，这样的描述对于量子系统是不可能的。相反，应该将量子系统的量子态理解为观察者对系统所做的操作和所观察到的事物的目录，并且状态的重要性在于可以推断（根据理论）对系统可能未来观察结果的概率。爱因斯坦拒绝了这种观点，并提出了一系列论证来表明量子态只是对量子系统的不完整描述。这些缺失的参数有时被称为“隐藏参数”或“隐藏变量”。

不应该认为爱因斯坦对完整理论的概念包括理论必须是确定性的要求。相反，他对由分离的组件系统组成的复合系统有一些可分离性和局部性的条件要求：每个组件系统应该分别由其自身的属性（如爱因斯坦所说的“如此存在”）来描述，并且不可能通过对局部系统的作用瞬间改变远程系统的属性（或这些属性的概率）。在后来的分析中，特别是在贝尔关于量子相关性的非局域性的论证中，人们发现这些条件，适当地以概率约束的形式表述，等同于要求分离系统之间的统计相关性可以归结为对共同原因（确定性或随机性）的概率分布，这是根据赖希巴赫的观点。 （请参阅贝尔定理和赖希巴赫的共同原因原理的条目。）

在原始的 EPR 文章中，两个粒子是从一个源中准备出来的，处于一个特定的“纯”量子态的复合系统中（这个态不能被表示为其他纯量子态的混合或概率分布，并且不能被简化为每个粒子的纯量子态）。粒子分开后，两个粒子的位置和动量之间存在“匹配”的相关性：在特定粒子上进行位置或动量的测量将能够确定地预测另一个粒子上的位置或动量测量的结果。这些测量是互斥的：可以进行位置测量，也可以进行动量测量，但不能同时进行。在建立了位置相关性之后，随后对动量的测量将不再产生两个粒子动量之间的任何相关性。就像位置测量扰乱了动量值之间的相关性，反之亦然。除了这个奇特之处，即同一对量子粒子的位置和动量相关性只能观察到一个，而不能同时观察到两个，量子粒子的位置和动量相关性与两个台球球在碰撞后的经典相关性完全相同。经典相关性可以通过一个共同的原因或相关的“现实要素”来解释。EPR 论证是量子力学不完备的原因是因为这些共同的原因或现实要素没有包含在量子态描述中。

这是 Schrödinger 在他的两篇文章的第一部分中提出这个难题的方式（Schrödinger, 1935; p. 559）：

> 然而，由于我可以在不干扰系统 1 的情况下预测 x1 或 p1，而且由于系统 1 不可能知道我将首先提出哪个问题，就像考试中的学者一样：我们的学者似乎准备好回答第一个问题，无论如何。因此，他必须知道两个答案；这是一种惊人的知识；完全不管我们的学者在给出第一个答案后总是感到困惑或疲惫，以至于所有后续的答案都是“错误”的事实。

薛定谔所展示的是，如果两个粒子以 EPR 量子态准备，其中存在两个“共轭动力学量”（像位置和动量这样的量，其值足以确定经典系统的所有属性）的匹配相关性，那么存在无限多个这两个粒子的动力学量，其存在类似的匹配相关性：第一个粒子的共轭动力学对的每个函数与第二个粒子的共轭动力学对的相同函数相匹配。（薛定谔，第 559 页）因此，系统 1“不仅知道这两个答案，还知道其他大量答案，而且没有任何记忆技巧的帮助，至少是我们所知道的。”

薛定谔创造了“纠缠”这个术语来描述量子系统之间的这种奇特联系（薛定谔，1935 年；第 555 页）：

> 当我们通过各自的代表了解其状态的两个系统由于已知的力之间的临时物理相互作用而进入，并且在相互影响一段时间后，系统再次分离，那么它们就不能再以与之前相同的方式描述，即通过赋予它们各自的代表。我不会称之为量子力学的一个特点，而更应该称之为量子力学与经典思维方式完全不同的特征。通过相互作用，这两个代表 [量子态] 已经纠缠在一起。

他补充道（Schrödinger, 1935; p. 555）：

> 另一种表达这种特殊情况的方式是：对整体的最佳了解并不一定包括对其所有部分的最佳了解，即使它们可能完全分离并且因此几乎能够“最佳可能地被了解”，即每个部分都具有自己的代表。缺乏知识绝不是由于相互作用不够了解 - 至少不是以可能更完整地了解的方式 - 而是由于相互作用本身。
>
> 最近人们对一个明显但令人不安的事实引起了关注，即使我们将解缠测量限制在一个系统上，得到的另一个系统的代表也并不独立于我们选择的观测方式，而这些观测方式完全是任意的。令人不安的是，尽管实验者无法接触到该系统，理论却允许系统在实验者的控制下被引导进入其中一种状态。

在论文的第二部分中，薛定谔表明，通过对纠缠对中的一个成员进行适当的操作选择，可能使用额外的“辅助”或“助手”粒子，实验者可以将第二个系统“引导”到所选择的量子态的混合态中，其概率分布取决于纠缠态。实验者不能随心所欲地将第二个系统引导到特定的量子态，但对于许多纠缠对的副本，实验者可以限制第二个系统的量子态位于一组选择的量子态中，其中这些态与对纠缠对系统或纠缠对系统加上辅助粒子进行的测量的可能结果相关。他认为这个结论令人不安，暗示两个分离系统之间的纠缠只会在距离足够小的情况下持续存在，以至于光从一个系统传播到另一个系统所需的时间可以忽略不计，与复合系统中其他变化相关的特征时间相比。他推测，在较长的距离上，两个系统实际上可能处于由纠缠态确定的相关量子态的混合态中。

大多数物理学家将纠缠量子态的令人困惑的特征归因于爱因斯坦对物理理论的不恰当的“超然观察者”观点，并认为玻尔对 EPR 论证的回应（玻尔，1935 年）证明了哥本哈根诠释的正确性。这是不幸的，因为对纠缠的研究被忽视了三十年，直到约翰·贝尔重新考虑了 EPR 论证（贝尔，1964 年）。贝尔研究了比 EPR 示例更简单的系统中的纠缠：两个处于纠缠态的分离系统之间的匹配相关性，例如特定方向的偏振或自旋。贝尔所展示的是，对这两个系统上适当选择的不同量的测量结果之间的统计相关性与从爱因斯坦的可分离性和局域性假设（实际上是相关性有一个共同原因的假设）推导出的不等式不一致。这个不等式现在被称为贝尔不等式，还可以推导出各种相关不等式作为经典或共同原因相关性的必要条件。

贝尔的研究引发了关于量子力学基础的持续辩论。这场辩论的一个重要特点是确认纠缠可以在长距离上持续存在，从而证伪了薛定谔关于纠缠在两个纠缠粒子分离时自发衰减的假设。（已经证明了光子的自由空间纠缠可以在 143 公里的距离上实现，并且使用卫星分发纠缠，在地球上分隔超过 1200 公里的位置之间实现纠缠。参见 Herbst 等人 2014 年和 Yin 等人 2017 年。）但直到 20 世纪 80 年代，物理学家、计算机科学家和密码学家才开始将纠缠量子态的非局域相关性视为一种新型的非经典物理资源，可以利用，而不是量子力学的尴尬现象需要解释。有关纠缠的讨论——它是什么，为什么在概念上令人困惑，以及您可以用它做什么，包括贝尔定理的简单证明——请参阅图像小说《完全随机：为什么没有人理解量子力学》（关于纠缠的严肃漫画），Bub 和 Bub 2018 年。有关将纠缠作为物理资源的进一步讨论，包括测量纠缠，以及通过局部操作操纵和纯化纠缠，请参阅 Lo，Popescu 和 Spiller 1998 年的“纠缠的乐趣”，Bub 2016 年以及经典著作 Nielsen 和 Chuang 2011 年。阿兰·阿斯佩克特（Alain Aspect），约翰·F·克劳泽（John F. Clauser）和安东·泽林格（Anton Zeilinger）因他们在纠缠光子上的开创性实验，验证了贝尔的洞察力并开创了量子信息领域，获得了 2022 年诺贝尔物理学奖。

## 2. 利用纠缠：量子隐形传态

再次考虑薛定谔的发现，纠缠态可以用来将远距离的粒子引导到一组状态中的某一个，具有一定的概率。实际上，这种“远程引导”的可能性比薛定谔展示的还要引人注目。假设爱丽丝和鲍勃共享一个由贝尔考虑的纠缠纯态，比如两个纠缠光子的偏振纠缠态，其中爱丽丝拥有其中一个纠缠光子，而鲍勃拥有第二个配对光子。假设爱丽丝接收到一个未知偏振态 |u⟩ 的额外光子，其中符号“| ⟩”表示一个量子态。爱丽丝可以对她手中的两个光子进行一个操作，将鲍勃的光子转化为四种状态之一，取决于爱丽丝操作的四种可能（随机）结果：要么是状态 |u⟩，要么是与 |u⟩ 有一定关系的状态。爱丽丝的操作纠缠了她手中的两个光子，并解缠了鲍勃的光子，将其引导到一个状态 |u∗⟩。在爱丽丝将操作结果告知鲍勃之后，鲍勃要么知道 |u∗⟩ = |u⟩，要么知道如何通过本地操作将 |u∗⟩ 转化为 |u⟩。这种现象被称为“量子隐形传态”。在传态过程之后，状态 |u⟩ 对于爱丽丝和鲍勃仍然是未知的。

这种现象的非凡之处在于，爱丽丝和鲍勃成功地利用他们共享的纠缠态作为量子通信通道，将爱丽丝宇宙中的光子状态|u⟩ 销毁，并在鲍勃宇宙的部分中重新创建。由于光子的线偏振态需要在空间中指定一个方向（可以连续变化的角度值），如果没有共享的纠缠态，爱丽丝将不得不向鲍勃传递无限量的经典信息，以便鲍勃能够精确地重建状态|u⟩。表示为 0 或 1 的二进制选择的经典信息量为一个二进制位或“比特”。将任意角度表示为十进制数需要在 0 和 9 之间的无限位数，或者在二进制表示法中的无限个 0 和 1。爱丽丝的操作的结果有四种可能的结果，每种结果的概率均为 1/4，可以用两个比特的经典信息来指定。令人惊奇的是，鲍勃可以仅凭爱丽丝传递的两个比特的经典信息来重建状态|u⟩，似乎是通过利用纠缠态作为量子通信通道来传输剩余的信息。这个想法最早由 Bennett 等人在 1993 年提出。有关量子隐形传态的进一步讨论，请参阅 Nielsen 和 Chuang 2011，或 Richard Josza 在 Lo，Popescu 和 Spiller 1998 年的文章“量子信息及其性质”。地球上已经实现了大约 100 公里的量子隐形传态，以及地球和卫星之间的 1400 公里（Zeilinger，2018）。利用卫星传输纠缠光子来发展量子互联网将依赖于量子隐形传态。

## 3. 量子信息

形式上，当我们得知一个随机变量的值时（或者等价地，当我们得知其值之前的随机变量的不确定性），我们平均获得的经典信息量由一个称为香农熵的量表示，以比特为单位进行测量（Shannon 和 Weaver，1949）。随机变量由一组值上的概率分布定义。对于二进制随机变量的情况，两种可能性的概率相等，香农熵为一比特，表示最大的不确定性。对于所有其他概率——直观地说，表示关于哪种选择更有可能的一些信息——香农熵小于一。对于关于备选方案的最大知识或零不确定性的情况，其中概率为 0 和 1，香农熵为零。（请注意，“比特”一词用于指代以香农熵为单位的经典信息的基本单位，以及被认为代表基本经典信息源的可能输出的基本二态经典系统。）

由于信息总是体现在物理系统的状态中，我们也可以将香农熵视为量化存储经典信息所需的物理资源。假设 Alice 希望通过诸如电话线之类的经典通信渠道向 Bob 传递一些经典信息。一个相关的问题是，在不丢失信息的情况下，消息可以被压缩到什么程度，以便 Bob 可以从压缩版本准确地重建原始消息。根据香农的源编码定理或无噪声编码定理（假设没有信息丢失的无噪声电话线），表示消息所需的最小物理资源（实际上是压缩可能性的下限）由源的香农熵给出。

如果我们使用物理系统的量子态来存储信息，而不是经典态，会发生什么？事实证明，量子信息与经典信息有着根本的不同。量子信息的单位是“量子比特”（qubit），表示最简单的量子系统的状态中可以存储的量子信息量，例如光子的偏振态。这个术语是由舒马赫（1995）提出的，他证明了一个量子版本的香农无噪声编码定理。（类比于“比特”这个术语，术语“量子比特”指的是以冯·诺伊曼熵为基础的量子信息的基本单位，以及被认为代表了一个基本量子信息源的可能输出的基本双态量子系统。）任意大量的经典信息可以被编码在一个量子比特中。这些信息可以被处理和传输，但由于量子测量的特殊性，最多只能访问一比特。根据霍列沃（Holevo）的一个定理，概率分布在一组备选量子比特态上的可访问信息受到冯·诺伊曼熵的限制，当这些态在量子态空间中正交时，它等于香农熵，否则小于香农熵。

经典信息可以被复制或克隆，但量子“无克隆”定理（Dieks, 1982; Wootters and Zurek, 1982）断言无法复制未知的量子态。为了理解为什么，考虑我们如何构建一个经典复制设备。NOT 门是一个接受比特作为输入，并根据输入是 0 还是 1 产生输出的设备。换句话说，NOT 门是一个将输入比特翻转的 1 比特门。控制 NOT 门（CNOT 门）接受两个比特作为输入，一个控制比特和一个目标比特，并且只有在控制比特为 1 时才会翻转目标比特，同时复制控制比特。因此，有两个输入，控制和目标，以及两个输出：控制和目标或翻转的目标，取决于控制的值。如果将目标比特设置为 0，CNOT 门将作为控制比特的复制设备，因为目标比特的输出是控制比特的副本：输入 00 产生输出 00，输入 10 产生输出 11（这里第一位是控制比特，第二位是目标比特）。在我们将测量视为简单的复制操作时，CNOT 门是经典测量设备的典范。想象一下，Alice 配备了这样一个设备，带有输入和输出的控制和目标线，用于测量未知的经典世界的属性。输入控制线是用于探测属性的存在或不存在的探针，用 1 或 0 表示。目标线充当指针，最初设置为 0。目标的输出是 1 或 0，取决于属性的存在或不存在。

假设我们尝试使用 CNOT 门来复制一个未知的量子比特状态。由于我们现在提议将 CNOT 门视为处理量子态的设备，从输入态到输出态的演化必须通过物理量子变换来实现。量子变换在量子比特的线性态空间上是线性的。态空间的线性性意味着态空间中两个量子比特态的系数 c0、c1 的和或叠加也是态空间中的量子比特态。变换的线性性要求变换应将由两个量子比特态的和表示的量子比特态转换为由变换后的量子比特态的和表示的新的量子比特态。如果 CNOT 门成功复制了两个正交的量子比特态，表示为|0⟩、|1⟩，它就无法成功复制这些量子比特的一般线性叠加。由于门的功能是线性的，它必须产生一个状态，该状态是两个正交量子比特态的输出的线性叠加。也就是说，门的输出将由一个量子态的两个项的和表示，其中第一个项表示第一个量子比特态的控制和目标的输出，第二个项表示第二个正交量子比特态的控制和目标的输出。这可以表示为 c0|0⟩|0⟩ + c1|1⟩|1⟩，这是一个纠缠态（除非 c0 或 c1 为零），而不是成功复制操作所需的输出（其中控制和目标分别输出叠加态 c0|0⟩ + c1|1⟩）。

## 4. 量子密码学

假设爱丽丝和鲍勃分开并且想要传递一个秘密消息，而不向窃听者伊芙透露任何信息。如果他们在经典世界中共享一个“一次性密码本”，即一个由至少与传递消息所需的位数一样长的随机位序列表示的加密密钥，他们可以做到这一点。实际上，在经典世界中，这是实现完全安全的唯一方法。为了向鲍勃发送消息，爱丽丝会告诉鲍勃在密钥中应该翻转哪些位。得到的位序列就是消息。此外，他们还需要一种将消息编码为位序列的方法，通过将字母、空格和标点符号表示为二进制数来表示字母表中的字母，这可以通过一些标准的、公开可用的方案来完成。

问题在于，如果爱丽丝和鲍勃对每条消息使用不同的一次性密码本，以这种方式传递的消息才是保密的。如果他们对几条消息使用相同的一次性密码本，伊芙可以通过将消息的统计特征与单词由字母组成的方式相关联，从而获得有关字母表中字母与密钥的子序列之间对应关系的一些信息。要共享一个新的密钥，他们必须依赖于可信的信使或类似的方法来分发密钥。在经典世界中，无法保证密钥分发过程的安全性。

将密钥复制而不透露已复制的事实也是爱丽丝和鲍勃各自以某种被认为是安全的方式存储的共享密钥的问题。但是，在经典世界中，物理定律无法保证存储过程是完全安全的，也无法保证突破安全性和复制密钥总是会被检测到。因此，除了密钥分发问题外，还存在密钥存储问题。

量子纠缠通过纠缠态的“一夫一妻制”提供了解决这些问题的方法：没有第三方可以共享 Alice 和 Bob 之间的纠缠关联。此外，Eve 试图测量 Alice 和 Bob 共享的纠缠态的量子系统将会破坏纠缠态。Alice 和 Bob 可以通过检查贝尔不等式来检测到这一点。

一种方法是通过 Artur Ekert 最初提出的协议来实现。假设 Alice 有一组光子，每对纠缠态中的光子都有一个（为简单起见，忽略相等的系数），而 Bob 有这组成对的光子。Alice 随机测量她的光子的偏振，方向为 0、π/8、2π/8（与他们事先商定的某个方向 z 相关），而 Bob 随机测量他的光子的偏振，方向为 π/8、2π/8、3π/8。他们公开通信偏振测量的方向，但不公开结果，并将测量分为两组：一组是当他们都在方向 π/8 测量偏振，或者都在方向 2π/8 测量偏振时，另一组是当 Alice 在方向 0 或 2π/8 测量偏振，而 Bob 在方向 π/8 或 3π/8 测量偏振时。对于第一组，当他们在相同方向上测量偏振时，结果是随机的，但在纠缠态中完全相关，因此他们将这些随机比特作为加密密钥共享。他们使用第二组来检查贝尔不等式，以确定纠缠态是否被窃听者的测量所改变。（参见 Ekert，1991 年。）

虽然经典信息和量子信息之间的差异可以被利用来实现成功的密钥分发，但有其他的加密协议被量子纠缠所阻碍。比特承诺是一种关键的加密协议，可以作为各种重要加密任务的子程序使用。在比特承诺协议中，Alice 向 Bob 提供一个编码比特。编码中可获得的信息应该不足以让 Bob 确定比特的值，但足够与 Alice 在后续阶段提供的进一步信息（当她应该揭示比特值时）一起，使 Bob 确信该协议不允许 Alice 通过以任意方式编码比特来欺骗。

为了说明这个想法，假设 Alice 声称能够每天预测股市的涨跌。为了证明她的说法而不泄露有价值的信息（也许给潜在雇主 Bob），她提出以下演示：她建议在市场开盘前记录她的预测，通过在一张纸上写下 0（表示“下跌”）或 1（表示“上涨”）来实现。然后她将把纸锁在一个保险箱里，保险箱将交给 Bob，但 Alice 将保留钥匙。在交易结束时，她将公布她选择的数字，并通过将钥匙交给 Bob 来证明她确实在之前的时间做出了承诺。当然，钥匙和保险箱的协议不能被 Bob 以可证明的方式防止作弊，因为经典物理学没有原则能够阻止 Bob 在不留下任何痕迹的情况下打开并重新关闭保险箱。问题是是否存在这个过程的量子类比，它是无条件安全的：根据物理定律可以被证明不容易受到 Alice 或 Bob 的作弊。如果 Bob 能够在 Alice 揭示之前获取关于她承诺的一些信息（这将使他在与 Alice 重复协议时占据优势），那么 Bob 可以作弊。如果 Alice 能够推迟实际上做出承诺，直到她需要揭示承诺的最后阶段，或者如果她能够在最后阶段改变她的承诺，并且被发现的概率非常低，那么 Alice 可以作弊。

原来，仅基于量子力学或经典力学的原理（不利用特殊相对论信号约束或广义相对论或热力学的原理），无条件安全的双方比特承诺是不可能的。有关进一步讨论，请参阅 Mayers 1997 年，Lo 和 Chau 1997 年以及 Lo 在 Lo，Popescu 和 Spiller 1998 年的文章“量子密码学”。 （Kent 1999 年已经证明，通过利用相对论信号约束在 Alice 和 Bob 之间的可验证分离站点之间的定时通信序列，可以实现安全的经典比特承诺协议。）大致上，不可能性是因为在协议的任何步骤中，Alice 或 Bob 被要求做出确定的选择（在量子通道中对粒子进行测量，随机选择并可能有条件地在量子通道上实施一组替代操作等），选择可以通过以适当的方式将一个或多个辅助粒子与通道粒子纠缠来延迟。通过对辅助粒子进行适当的操作，可以“操纵”通道粒子，使得这种作弊策略是不可检测的。实际上，如果 Bob 无法获取有关承诺比特的任何信息，那么纠缠将使 Alice 能够随意“操纵”比特为 0 或 1。

2022 年，美国国家标准与技术研究所（NIST）宣布了一套加密协议，旨在抵御量子计算机的攻击：NIST 宣布首批四个抗量子计算密码算法。

## 5. 量子计算

量子信息可以被处理，但是这些信息的可访问性受到 Holevo 界限的限制（在第 3 节中提到）。David Deutsch（1985 年）首次展示了如何利用量子纠缠来执行经典计算机无法完成的计算任务。假设我们有一个评估布尔函数 f 的黑盒子或者预言机，其中 f 的参数或输入要么是 0 要么是 1，而 f 的值或输出也要么是 0 要么是 1。输出要么对于两个输入都相同（此时 f 被称为常数函数），要么对于两个输入不同（此时 f 被称为平衡函数）。假设我们想要确定 f 是常数函数还是平衡函数。经典地，唯一的方法是运行黑盒子或者查询预言机两次，分别对参数 0 和 1 进行查询，并将值（f 的输出）传递给一个电路，该电路确定它们是相同的（对应于“常数函数”）还是不同的（对应于“平衡函数”）。Deutsch 表明，如果我们使用量子态和量子门来存储和处理信息，那么我们可以在一次对函数 f 的评估中确定 f 是常数函数还是平衡函数。关键在于设计电路（门序列）以在一个输出量子比特寄存器中生成关于函数的全局问题的答案，然后可以读取或测量该比特寄存器的值。

再考虑量子 CNOT 门，其中两个正交量子比特|0⟩ 和|1⟩ 作为控制输入，|0⟩ 作为目标输入。可以将输入的控制和输出的目标量子比特分别视为函数的参数和相关值。这个 CNOT 函数将参数 0 与值 0 关联，将参数 1 与值 1 关联。对于具有相等系数的正交量子比特的线性叠加作为控制输入，以及量子比特|0⟩ 作为目标输入，输出是纠缠态|0⟩|0⟩ + |1⟩|1⟩（为简单起见，忽略系数）。这是一个线性叠加，其中第一项表示 CNOT 函数的参数 0 和相关值 0，第二项表示 CNOT 函数的参数 1 和相关值 1。纠缠态表示函数的所有可能参数和相应值的线性叠加，但这些信息是不可访问的。通过适当选择量子门，可以显示出关于函数是否具有某些全局属性的信息是可访问的。这些信息可以在不读取任何单个参数和值的评估的情况下获得。（实际上，访问纠缠态中关于函数全局属性的信息通常需要失去对单个参数和值的所有信息的访问权。）

情况对于德意志的函数 f 是类似的。在“恒定”情况下，f 的输出可以表示为|0⟩|0⟩+|1⟩|0⟩ 或|0⟩|1⟩+|1⟩|1⟩；在“平衡”情况下，f 的输出可以表示为|0⟩|0⟩+|1⟩|1⟩ 或|0⟩|1⟩+|1⟩|0⟩。在“恒定”情况下，这两个纠缠态在 4 维双量子位状态空间中是正交的，并且构成一个平面。我们称之为“恒定”平面。同样，在“平衡”情况下，这两个纠缠态构成一个平面，即“平衡”平面。这两个平面代表了两种不同的量子析取，除了在一条线上有交集或重叠的地方，代表了一个乘积（非纠缠）态，其中每个量子位分别处于|0⟩+|1⟩ 的状态。因此，可以设计一个测量来区分 f 的两种不同的析取或全局属性，“恒定”或“平衡”，但有一定的失败概率（实际上是 1/2），当测量结果对应于重叠态时，这个重叠态是两种情况共有的。然而，当测量成功识别出全局属性时，只需要查询函数一次。通过精心选择量子门，甚至可以设计一个量子电路，在一次运行中始终成功区分这两种情况。

德意志的例子展示了量子信息和量子纠缠如何被利用来在一步中计算一个函数的分离或全局属性，而在经典情况下需要两步。虽然德意志的问题相当简单，但现在已经存在一些具有有趣应用的量子算法，特别是肖尔的因式分解算法，可以在多项式时间内分解大型复合整数（直接应用于广泛使用的“公钥”加密方案），以及格罗弗的数据库搜索算法。肖尔的算法在任何已知的经典算法上实现了指数级的加速。对于允许访问预言机（其内部结构不被考虑）的算法，在某些情况下，如西蒙的算法，可以证明其速度比任何经典算法都要指数级加快。有关量子计算和量子算法的更多信息，请参阅 Nielsen 和 Chuang 2011 年的著作，《量子计算：简介》中的 Barenco 文章（收录于 Lo，Popescu 和 Spiller 1998 年），Bub 2006 年的第 6 节，Abhijith 等人 2022 年的研究，以及有关量子计算的条目。

注意，目前还没有证据表明量子算法可以在多项式时间内解决一个 NP 完全问题（有关 NP 完全问题概念的计算复杂性理论条目，请参阅），因此相对于经典计算机，量子计算机的效率可能是虚幻的。如果确实存在加速，似乎是由于纠缠现象。描述 n 个量子比特的一般纠缠态所需的信息量随 n 呈指数增长。状态空间（希尔伯特空间）具有 2n 个维度，一般纠缠态是 2n 个 n 比特态的叠加。在经典力学中，不存在纠缠态：一个一般的 n 比特复合系统只需 n 倍于描述单比特系统所需的信息量即可描述。因此，经典模拟量子过程将导致经典信息资源呈指数增加，以表示量子态，随着纠缠演化中纠缠的比特数线性增长，计算演化的速度将呈指数级减慢，与系统实际进行的量子计算相比。

## 6. 解释性评论

Deutsch（1997）认为，量子计算的指数加速以及量子系统处理信息的一般方式只能在埃弗雷特的“多世界”诠释框架下得到适当理解（参见埃弗雷特的相对态量子力学和量子力学的多世界诠释的条目）。大致上，这个想法是，量子计算中出现的纠缠态，它代表了函数的所有可能参数和相应值的线性叠加，应该被理解为一种类似于在平行世界中进行的大规模并行经典计算，用于函数的所有可能值。关于这种“量子并行性”作为解释的深入批判，请参见 Steane 2003。

一种替代观点强调量子系统属性的非布尔结构。经典系统的属性形成布尔代数，本质上是集合论结构的抽象特征。这在经典逻辑的布尔特性和经典计算机中的布尔门中得到体现。从这个角度来看，情况完全不同。量子算法通过计算关于函数的一个析取或全局问题的答案（例如，布尔函数是恒定的还是平衡的）而不计算冗余信息（例如，函数的不同输入的输出值），实现了对经典算法的指数级加速。量子信息与经典信息的一个关键区别是选择排他析取的可能性，表示函数的全局属性，而不确定析取的真值，例如“恒定”析取断言函数的值（对于两个参数）为 0 或 1，或者“平衡”析取断言函数的值（对于两个参数）与参数相同或不同。

经典上，当且仅当其中一个分离项为真时，排他的析取才为真。德意志的量子电路通过利用量子属性的非布尔结构来高效区分两个析取属性，而无需确定相关析取项的真值（表示将个体输入与相应输出的函数关联）。该过程的关键是避免在确定全局属性时对特定输入进行函数评估，正是这个特性——在经典计算的布尔逻辑中是不可能的——导致了相对于经典算法的加速。（有关与量子计算无关的量子逻辑，请参阅量子逻辑和量子概率的条目）。

一些量子信息和量子计算的研究人员主张对量子力学进行信息论解释。在他关于量子计算的综述文章中，安德鲁·斯蒂恩（1998 年，第 119 页）发表了以下评论：

> 从历史上看，基础物理学的很大一部分关注的是发现自然界的基本粒子以及描述它们运动和相互作用的方程。现在看来，一个不同的计划可能同样重要：发现自然界允许和阻止信息表达和操作的方式，而不是粒子的运动。

斯蒂恩在他的评论中得出以下激进的建议（1998 年，第 171 页）：

> 最后，我想提出一个更广泛的理论任务：制定一套像能量和动量守恒一样适用于信息的原则，并从中推导出量子力学的大部分内容。对这些想法的两个测试是 EPR-Bell 相关性是否变得透明，以及它们是否明确了“测量”和“知识”等术语的正确使用。

在所谓的“广义概率理论”或“盒子世界”的框架下，对于“无信号传递”理论类中的信息论约束问题进行了大量研究，以确定量子理论的特征。有关这方面的有趣结果，请参阅 Brassard 2005、van Dam 2005、Skrzypczyk、Brunner 和 Popescu 2009、Pawlowski 等人 2009、Allcock 等人 2009、Navascues 和 Wunderlich 2009、Al-Safi 和 Short 2013、Ramanathan 等人 2010 以及 Ringbauer 等人（2014）。Chiribella 和 Spekkens 2016 是基于加拿大滑铁卢理论物理学研究所的一次会议的文章集，讨论了量子基础和量子信息领域的新研究。有关 QBism 的讨论，请参阅 Fuchs 2014 以及有关量子贝叶斯和实用主义观点的量子理论条目。

<!--md-padding-ignore-begin-->
## Bibliography

* Abhijith J. et al., (2022). “Quantum Algorithm Implementations for Beginners,” *ACM Transactions on Quantum Computing*, 3: 1–92.
* Al-Safi, S.W., Short, A.J., 2014. “Reversible Dynamics in Strongly Non-Local Boxworld Systems,” *Journal of Physics A: Mathematical and Theoretical*, 47: 325303.
* Alcock, J., Brunner, N., Pawlowski, M., Scarani, V., 2009. “Recovering Part of the Quantum Boundary from Information Causality,” *Physical Review A*, 80: 040103 [[available online](http://arxiv.org/abs/0906.3464)].
* Aspect, A., Grangier, P., Roger, G., 1982. “Experimental Tests of Bell’s Inequalities Using Time-Varying Analyzers,” *Physical Review Letters*, 49: 1804–1807.
* Barrett, J., 2007. “Information Processing in Generalized Probabilistic Theories,” *Physical Review A*, 75: 032304.
* Barrett, J., Hardy, L., Kent, A., 2005. “No signaling and Quantum Key Distribution,” *Physical Review Letters*, 95: 010503.
* Bell, J.S., 1964. “On the Einstein-Podolsky-Rosen Paradox” *Physics*, 1: 195–200.
* Bennett, C.H., Brassard, G., Crepeau, C., Jozsa, R., Peres, A., Wotters, W. K., 1993. “Teleporting an Unkown Quantum State via Dual Classical and Einstein-Podolsky-Rosen Channels,” *Physical Review Letters*, 70: 1895–1899.
* Bennett, C.H., DiVincenzo, B.D., 2000. “Quantum Information and Computation,” *Nature*, 404: 247–255.
* Bohr, N., 1935. “Can Quantum-Mechanical Description of Physical Reality be Considered Complete?,” *Physical Review*, 38: 696–702.
* Born, M. (ed.), 1992. *The Born-Einstein Letters*, Dordrecht: Reidel.
* Brassard, G., 2005. “Is Information the Key?,” *Nature Physics*, 1: 2–4.
* Bub, J., 2006. “Quantum Information and Computation,” in John Earman and Jeremy Butterfield (eds.), *Philosophy of Physics (Handbook of Philosophy of Science)*, Amsterdam: North Holland, pp. 555–660 [[available online](http://arxiv.org/abs/quant-ph/0512125)].
* –––, 2007. “Quantum Computation from a Quantum Logical Perspective,” *Quantum Information and Computation*, 7: 281–296.
* –––, 2008. “Quantum Computation and Pseudotelepathic Games,” *Philosophy of Science*, 75: 458–472.
* –––, 2016. *Bananaworld: Quantum Mechanics for Primates*, Oxford: Oxford University Press.
* Bub, T. and Bub, J., 2018. *Totally Random: Why Nobody Understands Quantum Mechanics (A Serious Comic on Entanglement)*, Princeton: Princeton University Press.
* Chiribella, G. and Spekkens, R., 2016. *Quantum Theory: Informational Foundations and Foils*, New York, Springer.
* Deutsch, D., 1985. “Quantum Theory, the Church-Turing Principle and the Universal Quantum Computer,” *Proceedings of the Royal Society (London)*, A400: 97–117.
* –––, 1997. *The Fabric of Reality*, London: Penguin.
* Dieks, D., 1982. “Communication by EPR Devices,” *Physics Letters A*, 92: 271–272.
* Einstein, A., Podolsky, B., Rosen, N., 1935. “Can Quantum-Mechanical Description of Physical Reality be Considered Complete?,” *Physical Review*, 47: 777–780.
* Ekert, A., 1991. “Quantum Cryptography Based on Bell’s Theorem” *Physical Review Letters*, 67: 661–663.
* Ekert, A. and Renner, R., 2014. “The Ultimate Physical Limits of Privacy,” *Nature*, 507: 443–447.
* Everett, H., 1957. “‘Relative State’ Formulation of Quantum Mechanics,” *Reviews of Modern Physics*, 29: 454–462.
* Feynman, R., 1996. *Feynman Lectures on Computation*, J.G. Hey and R.W. Allen (eds.), Reading, MA: Addison-Wesley Publishing Company.
* Fuchs, C.A., 2014. “An Introduction to QBism with an Application to the Locality of Quantum Mechanics,” *American Journal of Physics*, 82: 749–754.
* Herbst, T., Scheidl, T., Fink, M., Handsteiner, J., Wittmann, B., Ursin, R., Zeilinger, A., 2015. “Teleportation of Entanglement over 143 km,” *Proceedings of the National Academy of Sciences of the United States of America*, 112: 14202–5 [[available online](https://www.pnas.org/content/112/46/14202)].
* Holevo, A.S., 1973. “Statistical Problems in Quantum Physics,” in G. Murayama and J.V. Prokhorov (eds.) *Proceedings of the Second Japan-USSR Symposium on Probability Theory*, Berlin: Springer, pp. 104–109.
* Kent, A., 1999. “Unconditionally Secure Bit Commitment,” *Physical Review Letters*, 83: 1447–1450.
* –––, 2012. “Unconditionally Secure Bit Commitment by Transmitting Measurement Outcomes,” *Physical Review Letters*, 109: 130501.
* Lo, H.-K., Chau, H.F., 1997. “Is Quantum Bit Commitment Really Possible?,” *Physical Review Letters*, 78: 3410–3413.
* Lo, H.-K., Popescu, S., Spiller, T., 1998. *Introduction to Quantum Computation and Information*, Singapore: World Scientific.
* Mayers, D., 1997. “Unconditionally Secure Quantum Bit Commitment is Impossible,” *Physical Review Letters*, 78: 3414–3417.
* Navascues, M. and Wunderlich, H., 2009. “A Glance Beyond the Quantum Model,” *Proceedings of the Royal Society A*, 466: 881–890 [[available online](http://arxiv.org/abs/0907.0372)].
* Nielsen, M.A., Chuang, I.L., 2011. *Quantum Computation and Quantum Information*, 10th Anniversary edition, Cambridge: Cambridge University Press.
* Pawlowski, M., Patarek, T., Kaszlikowski, D., Scarani, V., Winter, A., Zukowski, M., 2009. “A New Physical Principle: Information Causality,” *Nature*, 461: 1101.
* Ramanathan, R., Patarek, T., Kay, A., Kurzynski, P., Kaszkilowski, D., 2010. “Local Realism of Macroscopic Correlations,” *Physical Review Letters*, 107: 060405.
* Ringbauer, M., Fedrizzi, A., Berry, D.W., White, A.G., 2014. “Information Causality in the Quantum and Post-Quantum Regime,” *Scientific Reports*, 4: 6955.
* Schrödinger, E., 1935. “Discussion of Probability Relations Between Separated Systems,” *Proceedings of the Cambridge Philosophical Society*, 31: 555–563; 32 (1936): 446–451.
* Schumacher, B., 1995. “Quantum Coding,” *Physical Review A*, 51: 2738–2747.
* Shannon, C.E., Weaver, W., 1949. *The Mathematical Theory of Communication*, Urbana: University of Illinois Press.
* Skrzypczyk, P., Brunner, N., Popescu, S., 2009. “Emergence of Quantum Correlations from Nonlocality Swapping,” *Physical Review Letters*, 102: 110402.
* Steane, A.M., 1998. “Quantum Computing,” *Reports on Progress in Physics*, 61: 117–173.
* –––, 2003. “A Quantum Computer Needs Only One Universe” *Studies in History and Philosophy of Modern Physics*, 34B: 469–478 [[available online](http://arxiv.org/abs/quant-ph/0003084)].
* Timpson, C.G., 2013. *Quantum Information Theory and the Foundations of Quantum Mechanics*, Oxford, Oxford University Press.
* van Dam, W., 2013. “Implausible consequences of superstrong nonlocality,” *Natural Computing*, 12(1): 9–12.
* van Fraassen, B., 1982. “The Charybdis of Realism: Epistemological Implications of Bell’s Inequality,” *Synthese*, 52: 25–38.
* Wootters, W.K., Zurek, W.H., 1982. “A Single Quantum Cannot be Cloned,” *Nature*, 299: 802–803.
* Yin, J. et al., (2017). “Satellite-based Entanglement Distribution Over 1200 Kilometers, *Science*, 356: 1140–1144.
* Zeilinger, A. (2018). “Quantum Teleportation, Onwards and Upwards,” *Nature Physics*, 14: 3-4.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=qt-entangle). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/qt-entangle/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=qt-entangle&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/qt-entangle/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* [arXiv E-print Archive for Quantum Physics](http://arxiv.org/find/quant-ph).
* [Todd Brun’s Lecture Notes on Quantum Information Processing](http://www-bcf.usc.edu/~tbrun/Course/index.html).
* [John Preskill’s Course on Quantum Information and Computation](http://www.theory.caltech.edu/~preskill/ph219/ph219_2018-19).
* [Oxford Quantum](http://oxfordquantum.org/), Oxford University.
* [Institute for Quantum Optics and Quantum Information](http://www.iqoqi-vienna.at/), Austrian Academy of Sciences.
* [GAP-Optique](https://www.unige.ch/gap/quantum/start), University of Geneva.
* [Centre for Quantum Technologies](http://www.quantumlah.org/), University of Singapore.
* [Joint Quantum Institute](http://jqi.umd.edu/), University of Maryland.
* [The Dream Machine](http://www.newyorker.com/magazine/2011/05/02/dream-machine), *New Yorker* article on quantum computing, 2011.
* [New Quantum Theory Could Explain the Flow of Time](http://www.wired.com/2014/04/quantum-theory-flow-time/), article in *Wired*, 2014, reprinted from *Quanta Magazine*.
* [Spooky Actions at a Distance?](https://www.youtube.com/watch?gl=IT&hl=it&v=ta09WXiUqcQ), David Mermin’s Oppenheimer Lecture.

## Related Entries

[Bell’s Theorem](https://plato.stanford.edu/entries/bell-theorem/) | [quantum mechanics: Copenhagen interpretation of](https://plato.stanford.edu/entries/qm-copenhagen/) | [quantum mechanics: Everettian](https://plato.stanford.edu/entries/qm-everett/) | [quantum mechanics: many-worlds interpretation of](https://plato.stanford.edu/entries/qm-manyworlds/) | [quantum theory: Bayesian and pragmatist views](https://plato.stanford.edu/entries/quantum-bayesian/) | [quantum theory: quantum computing](https://plato.stanford.edu/entries/qt-quantcomp/) | [quantum theory: quantum logic and probability theory](https://plato.stanford.edu/entries/qt-quantlog/) | [quantum theory: the Einstein-Podolsky-Rosen argument in](https://plato.stanford.edu/entries/qt-epr/) | [Reichenbach, Hans: common cause principle](https://plato.stanford.edu/entries/physics-Rpcc/)

[Copyright © 2023](https://plato.stanford.edu/info.html#c) by  
[Jeffrey Bub](https://quics.umd.edu/people/jeffrey-bub) <[*jbub@umd.edu*](mailto:jbub%40umd%2eedu)>
<!--md-padding-ignore-end-->
