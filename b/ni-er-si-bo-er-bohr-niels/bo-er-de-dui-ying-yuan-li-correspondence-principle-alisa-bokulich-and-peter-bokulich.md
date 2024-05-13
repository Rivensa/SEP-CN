# 玻尔的对应原理 correspondence principle (Alisa Bokulich and Peter Bokulich)

*首次发表于 2010 年 10 月 14 日星期四；实质性修订于 2020 年 8 月 13 日星期四*

关于伯恩哈德·波尔查诺，物理学史学家马克斯·亚默写道：“在物理史上很少有一种理论像量子力学那样，如此多地归功于一个原则，即量子力学归功于波尔的对应原则”（亚默 1966 年，第 118 页）。对应原则不仅在量子力学的发现中起着关键作用，而且也是波尔对量子力学的哲学解释的基石，与他更为人所知的互补性论和哥本哈根解释密切相关。

尽管波尔的对应原则的重要性基本上是无争议的，但对于如何定义对应原则却存在着远远较少的一致意见。重要的是要区分波尔对这一原则的理解与它对更广泛的物理学界意味着什么。然而，即使限制在波尔的著作中，波尔学者之间仍存在分歧，关于波尔发现的经典力学和量子力学之间的几种关系中应该被指定为对应原则的哪一种。文献中有三种主要的候选定义。首先是_频率解释_，根据这一解释，对应原则是经典频率傅里叶分解中的一个分量与大量量子数极限下的量子频率之间的统计渐近一致。其次是_强度解释_，根据这一解释，在大量量子数极限下，量子强度（以量子跃迁的概率来理解）与经典强度（以经典运动一个分量振幅的平方来理解）之间存在统计一致。最后是_选择规则解释_，根据这一解释，对应原则是每个允许的量子跃迁与稳定态之间的对应关系对应于经典运动的一个谐波分量的陈述。

对应原则首次在 1913 年在旧量子理论的背景下被阐明。尽管如此，波尔认为这一原则在旧量子理论被现代量子力学取代后仍然存在。对应原则如今仍然被提及为当前研究课题，尽管可以说其含义与波尔对这一原则的理解略有不同。对应原则的一个版本也在哲学文献中延续下来，被概括为一种广泛的方法论原则（广义对应原则），约束着新科学理论的发展。

***

## 1. 背景和科学背景

Niels Bohr 是一位丹麦物理学家，生于 1885 年，逝世于 1962 年；他出生和去世于哥本哈根。他最著名的身份是量子理论的创始人之一，以及他在原子结构方面的研究，这使他于 1922 年获得了诺贝尔物理学奖。除了他的科学工作外，他将职业生涯的大部分时间致力于量子力学的哲学解释。他与阿尔伯特·爱因斯坦之间关于量子力学是否是原子现象的完整描述的著名长期辩论（“爱因斯坦-伯恩哈德·波尔查诺辩论”），以及他对量子理论哲学解释的持久贡献包括哥本哈根解释、互补性论题和对应原理。

对应原理最初是在 1900 年至 1925 年间发展的旧量子理论背景下引入的。旧量子理论是一种“临时”理论，是为了应对牛顿力学和经典电动力学无法描述原子系统的认识而发展的。尽管旧量子理论取得了显著的实证成功，但它被批评为具有许多人认为是不一致的基础。旧量子理论最终被现代量子力学所取代，其中包括了维纳·海森堡于 1925 年发展的矩阵力学和埃尔温·薛定谔于 1926 年发展的波动力学。

为了理解对应原理的实质，首先需要了解旧量子理论的基本框架。Niels Bohr 首次在 1913 年的一篇名为“关于原子和分子的构成”的三部分论文中阐述了旧量子理论的假设。Bohr 采纳了欧内斯特·卢瑟福的原子模型，根据该模型，原子的大部分质量集中在一个小的中心核中，而电子则在行星轨道中绕核运动。卢瑟福模型面临的关键挑战是不稳定的：根据经典电动力学，作为加速带电体的电子应该辐射能量，因此会迅速坍缩到核中。Bohr 的解决方案是将马克斯·普朗克的辐射理论纳入其中，该理论假定“原子系统的能量辐射不是按照普通电动力学所假定的连续方式进行的，而是按照明显分离的发射进行的”（Bohr 1913, p. 4; BCW 2, p. 164）。

伯恩哈德·波尔查诺通过两个假设或公设总结了他的量子理论。根据第一个公设，电子不能沿着原子核周围的任何路径运动；相反，原子系统只能存在于一系列离散的“稳定态”之一中，在这些稳定态中，电子处于特定的允许的稳定周期轨道中，并且不会发射辐射。直观地说，这些稳定态可以被看作是围绕原子核的一系列同心圆轨道，沿着这些轨道电子运动；这些稳定态通过主量子数 n 进行标记，最低允许轨道（“正常”或基态）标记为 n=1，能量更高的下一个稳定态标记为 n=2，依此类推。波尔假设，当电子处于这些稳定态之一时，其运动可以通过经典力学充分描述；然而，当电子从一个稳定态转变到另一个时，经典理论不再适用。波尔旧量子理论的第二个公设是，当存在不同稳定态 n′ 和 n′′ 之间的转变时，发射的辐射是单一频率 ν，该频率由两个状态的能量差（En′−En′′）除以普朗克常数得出。

(1) ν=En′−En′′h

这个公式通常被称为“波尔-爱因斯坦频率条件”。第二个公设构成了与经典电动力学的重大分歧，根据经典电动力学，将发射各种辐射频率，并且这些频率仅由源的运动决定。

重要的是要注意，尽管现在人们普遍认为这种发射的辐射是光子，但波尔本人直到 20 世纪 20 年代中期仍然对光子概念持怀疑态度（Stachel 2009）。波尔更倾向于将发射或吸收的辐射看作是波，而不是粒子。波尔在这一时期对光子的存在持犹豫态度似乎源于他担心，认为光的这种粒子概念与熟悉的干涉现象不可调和。例如，波尔在 1921 年写道，

> 因此，根据这种光量子理论，原子发出的电磁辐射不应该像球面波系统一样传播，而应该作为一个集中的实体沿着一个明确的方向传播，其中包含了一个非常小的体积内的能量 hν。从一方面看，这种概念似乎提供了解释光电效应现象的唯一简单可能性，如果我们坚持对能量和动量守恒概念的无限制应用。另一方面，它似乎与光的干涉现象不可调和，这些现象构成了我们分析辐射在其谐波成分中的唯一手段，并确定每个成分的频率和极化状态。（波尔 1921a 未发表；BCW 3，第 412-413 页）

有趣的是，波尔最初对光子概念的拒绝也与能够将辐射分析为其谐波成分的重要性联系在一起，这对于应用他的对应原理（下文讨论）至关重要。正如约翰·斯塔赫尔所指出的，“事实上，似乎正是他对应原理的依赖似乎是波尔对光子概念持怀疑态度以及他愿意放弃能量-动量守恒来拯救经典电动力学辐射图像的主要动机”（Stachel 2009，第 72 页）。斯塔赫尔认为，部分原因是博特-盖格和康普顿-西蒙实验的结果最终导致波尔接受了光子概念。出于这些历史原因，在讨论波尔早期观点时需要谨慎使用光子概念；尽管如此，光子概念在理解对应原理背后的物理学方面（以及波尔在 20 世纪 20 年代初之后的观点）可能非常有帮助，因此，在下文中将引用光子概念。

回到旧量子理论的概要，伯恩哈德·波尔查诺的两个假设还不足以从所有经典允许的轨道中挑选出与稳定态相对应的轨道。为了确定稳定态，还需要引入以下“量子条件”：

(2)∮pθdθ=nh.

其中积分是在电子轨道的一个周期内进行的，pθ 是角动量，θ 是电子轨道平面上的角度，n 是量子数。根据马克斯·亚默的总结，应用旧量子理论基本上包括三个步骤：“首先，应用经典力学来确定系统可能的运动；其次，强加某些量子条件以选择实际或允许的运动；第三，将辐射过程视为在受波尔频率公式约束的允许运动之间的跃迁”（亚默 1966 年，第 90 页）。旧量子理论是经典和量子思想的融合：虽然假定电子在特定稳定态内的运动仍可以基于经典理论描述，但在稳定态之间的跃迁中发出的辐射（“量子跃迁”）则不行。

为了理解通讯原理的实质，有助于考虑原子的简化模型，将其视为一维系统，其中电子正在进行简单周期运动。经典上，电子的轨迹由 x(t)给出，这是牛顿运动方程的解，并且是周期性的，这意味着它只是以频率 ω 简单地一遍又一遍地重复其步骤。由于运动是周期性的，电子的位置可以用傅立叶级数表示如下：

(3)x(t)=C1cos(ωt)+C2cos(2ωt)+C3cos(3ωt)+⋯.

总和中的每个项称为谐波，第 τ 个谐波以时间 t、振幅 Cτ 和频率 ωτ 表示，ωτ 是基本频率 ω 的整数倍（这些基本频率的倍数称为“泛音”）。根据_经典_电动力学，此原子发射的辐射频率应该正好由运动的谐波中的频率给出：ω、2ω、3ω 等；因此，这种经典系统的光谱应该是一系列离散均匀间隔的线。

根据伯恩哈德·波尔查诺的旧量子理论，相比之下，辐射不是电子在轨道中加速运动的结果，而是电子从一个稳定态跳到另一个稳定态的结果；而且不是一起发出所有的谐波“倍频”，而是只发出单一频率 ν，并且该频率的数值由伯恩-爱因斯坦频率条件（方程 1）给出。光谱线是由整个原子系列进行不同稳定态之间的跃迁而建立起来的，这些光谱线虽然表现出一种规律性的模式，但并非均匀间隔—除非在大量量子数的极限情况下。

继伯恩哈德·波尔查诺之后，人们可以用 τ 标记 n' 稳定态和 n'' 稳定态之间的差异；也就是说，如果电子跳到最近的稳定态，τ=1；如果它跳到两个稳定态之外，τ=2；依此类推。尽管根据经典定义，τ 指定了经典运动的特定谐波分量，但根据量子力学定义，τ 指定了特定跃迁中量子数的变化。

## 2. 定义了对应原理

在当前的伯恩哈德·波尔查诺学者中，有一致的看法认为，波尔并没有打算让他的对应原理指定量子力学在经典极限下恢复经典力学预测的某种一般要求，尽管这种解释在物理文献中很普遍（见第 6 节）。然而，关于波尔打算通过对应原理指定经典力学和量子力学之间的确切关系，却没有达成一致意见。文献中有三种主要的竞争解释，所有这些解释都在波尔的著作中得到支持。这三种解释可以被标记为：频率解释、强度解释和选择规则解释。

根据_频率解释_，对应原理被定义为辐射在量子跃迁中发射的（量子）频率 νn′→n′′，与从状态 n′到 n′′的差 τ 的经典运动的第 τ 次谐波中的（经典）频率（ωτ）之间的统计渐近一致，即

(4) νn′→n′′=ωτ=τω，对于大 n，

在这里，n′−n′′=τ。

请注意，在量子频率和经典频率的一个分量之间的这种相等仅在_大_量子数的极限情况下成立，而不适用于低量子数跃迁。此外，只有统计上的一致性，因为在经典情况下，所有频率将一起发射，而在量子力学中，只有一个单一频率的单个光子在任何给定的稳定态之间的跃迁中被发射；因此，必须考虑一个原子的统计集合来与经典光谱进行比较。

根据_强度解释_，对应原理被定义为在大量子数的极限情况下，两个相隔 τ 的稳定态之间跃迁的概率 Pn′→n′′与经典运动的 τ 次谐波分量的振幅 Cτ 的平方之间的一致性：

(5)Pn′→n′′∝|Cτ(n)|2 对于大的 n 。

因此，在大的 n 的极限情况下，电子经典轨道的谐波分量的振幅可以用来计算光谱线的强度。虽然在经典情况下，辐射强度由其振幅决定，但在量子力学中，光谱线的强度取决于在该特定频率下发射了多少光子。因此，一个特定的量子跃迁越有可能发生，就会释放更多的光子，强度也会更大。请注意，与频率解释一样，这只是在统计意义上和在大量量子数的极限情况下才成立的对应关系。\[[4](https://plato.stanford.edu/entries/bohr-correspondence/notes.html#note-4)]

根据 *选择规则解释*，伯恩哈德·波尔查诺 最好理解为这样一种说法：*每个允许的稳定态之间的量子跃迁对应于经典运动的一个谐波分量*。更确切地说，伯恩哈德·波尔查诺 的选择规则规定，如果在电子在初始稳定态的经典运动中存在第 τ 个谐波，则从稳定态 n′ 到另一个稳定态 n′′ 的跃迁是允许的 *当且仅当* ；如果在经典运动中没有第 τ 个谐波，则在量子力学中不允许在分隔为 τ 的稳定态之间发生跃迁。伯恩哈德·波尔查诺 的对应原理的本质如图 1 所示。

![谐波的总和](https://plato.stanford.edu/entries/bohr-correspondence/Figure1.png)

图 1. 一个经典周期轨道，x(t)，可以表示为“谐波”的傅里叶和，这些谐波是基本频率 ω 的整数倍，代表了运动的周期性。根据选择定则解释，对应原理是波尔的洞察力，即每个允许的稳定态之间的跃迁对应于经典运动的一个谐波分量。(基于 Fedak 和 Prentis 2002 年的第 3 图)

波尔的选择定则可以通过以下简化示例来说明。\[[5](https://plato.stanford.edu/entries/bohr-correspondence/notes.html#note-5)] 假设牛顿方程的解为 F=md2x/dt2，以及量子条件 ∮pdx=nh 是\[[6](https://plato.stanford.edu/entries/bohr-correspondence/notes.html#note-6)]

(6)x(t,n)=ncos(n12t)+n12cos(3n12t),

这是电子在允许的稳定态 n 中的经典周期运动的傅立叶分解。对于这个稳定态 n，基本频率（即电子运动的周期性）是 ω=n12。请注意，在经典运动中只有第一个（τ=1）和第三个（τ=3）谐波存在（方程 6）。根据伯恩哈德·波尔查诺的选择定则，这意味着只能在相隔一个或三个稳定态之间进行量子跃迁。因此，例如，可以从 n=100 稳定态过渡到 n=99 或 n=97 稳定态；但不能从 n=100 稳定态过渡到 n=98 稳定态，因为在经典电子轨道中没有第二谐波。

与对应原理的频率和强度解释不同，选择定则解释不是渐近关系——它适用于_所有_量子数跃迁，包括小 n。

重要的是要认识到，伯恩哈德·波尔查诺 发现并写了所有这些对应关系；伯尔学者之间的分歧仅仅是关于伯尔意图将哪些（如果有的话）对应关系指定为对应原理。一些学者甚至怀疑伯尔是否曾经有一个明确定义和不变的对应原理的定义。对于对应原理的这些和其他解释将在下面的第 5 节中更详细地阐述。

## 3. 伯恩哈德·波尔查诺 关于对应原理的著作（1918–1928）

伯恩哈德·波尔查诺 关于对应原理的大部分著作都收集在《尼尔斯·波尔文集》第 3 卷（这里简称为 BCW）中，该卷名为《对应原理（1918–1923）》。正如波尔本人所述（波尔，1922 年），对应原理的最初萌芽可以在他 1913 年的讲座《关于分子和原子的构成》中找到，尽管这个术语直到 1920 年才出现在他的著作中。在采用“对应原理”这个表达之前，波尔在描述这种关系时将其视为经典力学和量子力学之间的类比。例如，在他 1918 年的论文《关于线光谱的量子理论》（他称之为“Q.o.L.”）中，波尔写道：“通过尽可能地追踪量子理论与普通辐射理论之间的类比，似乎可以在一定程度上解决一些突出的困难”（波尔，1918 年，第 4 页；BCW 3，第 70 页）。然而，在他后来的著作中，波尔明确拒绝了这种将对应原理视为类比的观点。他写道，

> 在 Q.o.L \[Bohr 1918] 中尚未使用这个称谓，但该原则的实质被称为量子理论和经典理论之间的形式类比。这样的表达可能会引起误解，因为事实上——正如我们后面将看到的那样——这个 **伯恩哈德·波尔查诺** 必须纯粹被视为量子理论的一条法则，绝不能减弱假设和电动力学理论之间的对比。（Bohr \[1923] 1924, fn. p. 22）

不仅波尔拒绝了对应原则是类比的观点，而且他将其称为量子理论的 **法则** 表明，首先，他认为这是一个 **普遍** 原则（不仅适用于有限领域），其次，这是量子理论本身的一个重要部分，而不是来自量子理论之外的某种一般方法论约束。

在他的 1920 年论文中，首次出现“对应”和“对应原则”这些术语（Nielsen 1976, p. 21）时，波尔写道，

尽管辐射过程不能用普通电动力学理论来描述，根据这个理论，原子发射的辐射性质与系统运动中发生的谐波成分直接相关，但是发现，各种可能的稳定态之间的过渡与运动的各种谐波成分之间存在着远距离的_对应_。这种对应的性质使得当前的光谱理论在某种意义上被视为对辐射普通理论的合理概括。 (伯恩哈德·波尔查诺 1920 年，第 23-24 页; BCW 3，第 245-246 页)

波尔在这里描述的对应是允许的从一个稳定态到另一个稳定态的过渡与经典运动的谐波成分之间的对应。此外，他认为这种对应是量子理论是经典力学的合理概括的基础或理由（有关后一观点的讨论，请参见 Bokulich 和 Bokulich 2005）。几页之后，在一个名为“对应原理”的部分中，波尔继续描述了频率对应和强度对应：

> 这两种方法确定的频率之间的对应必须具有更深层次的意义，我们预期它也将适用于强度。这相当于说，当量子数很大时，特定过渡的相对概率与运动中相应谐波成分的振幅以简单方式相关。这种特殊关系暗示了一种_关于稳定态之间过渡发生的一般规律_。因此，我们假设即使量子数很小，两个稳定态之间的过渡可能性也与系统运动中某个谐波成分的存在相关联。 (伯恩哈德·波尔查诺 1920 年，第 27-28 页; BCW 3，第 249-250 页)

以典型的波尔风格，他未能明确表明他是否打算通过“对应原理”来指代其中一个、全部或没有一个。

波尔还认为，对应原理是解释为什么只有某些光谱线在实验中被观察到的原因。他写道，

> 上述观点，可以称为对应原理...已经对似乎随意性的现象提供了直接解释，这种现象涉及到光谱线组合原理的应用，其中一个情况是，只有光谱线的一小部分，可能是从对这个【里德伯-里兹组合】原理的无限制应用中预期到的，实际上在实验中被观察到。（波尔 1921b 未发表；BCW 4，第 150 页）

Bokulich（2008 年，以及 2009 年\[其他互联网资源]）认为，用选择规则解释对应原理不仅阐明了波尔声称它解释了光谱线的反复无常性，还阐明了他声称对应原理是量子理论的一条定律。事实上，他所指的“定律”是选择规则对应，这也适用于小量子数，而不仅仅是在经典极限下。这是一条_定律_，因为它是对允许的量子跃迁的普遍（即适用于所有 n）限制。要理解为什么它是一条_量子理论的定律_（而不是经典电动力学的定律），有助于考虑波尔接下来的评论：

> \[辐射跃迁的发生取决于原子运动中相应振动的存在。至于我们是否有权将所得到的渐近关系视为量子理论中辐射发生的一般定律的暗示，正如上述对应原理所假定的那样，让我们再次回想，在大量子数的极限区域，量子理论对辐射现象的描述与经典电动力学的思想之间的差异并不会逐渐减小，而只是统计结果的渐近一致。]（波尔\[1923] 1924 年，第 23 页；BCW 3，第 480 页）

在这段文字中，波尔明确认为量子力学是一种普遍理论。尽管在这个极限情况下结果统计上达成一致，但是频率和强度等物理学仍然不同，例如，波尔坚持认为量子描述才是严格正确的——即使在这个高 n 或“经典”极限下。因此，当波尔发现允许的量子跃迁是那些在经典运动中存在相应谐波的情况时，他所发现的是关于量子理论的一些东西。

在 1922 年他在哥廷根关于原子理论的讲座中，伯恩哈德·波尔查诺再次强调，即使对于低量子数跃迁，对应原理也成立。这在他讨论氢光谱可见部分的巴尔默系列中的著名红线和绿线时尤为明显。红光谱线（实际上在波长约为 656 纳米处为红色）通常标记为 Hα，是由从 n=3 到 n=2 稳定态跃迁中发射的辐射结果。绿线（波长约为 486 纳米，标记为 Hβ）是氢原子中电子从 n=4 到 n=2 稳定态跃迁的结果。

![missing text, please inform](https://plato.stanford.edu/entries/bohr-correspondence/Figure2a.png)

![missing text, please inform](https://plato.stanford.edu/entries/bohr-correspondence/Figure2b.png)

图 2. 氢原子可见部分的巴尔默系列的红色和绿色光谱线

关于这些低量子数跃迁，波尔写道，

> 我们可以将 Hβ 视为 Hα 的八度，因为 Hβ 对应于 2 的跃迁，而 Hα 对应于 1 的量子跃迁。的确，Hβ 的频率并不是 Hα 的两倍，但它对应于八度。我们称这种关系为“对应原理”。对于每个跃迁，都对应着机械运动的谐波分量。（波尔 1922 年未发表讲座；BCW4，第 348 页）

换句话说，尽管“频率对应”不适用于这些低量子数（这些线的强度也不能直接从经典振幅通过“强度对应”计算出来），但波尔在这里所称的更一般的_对应原理_确实成立；具体来说，这些 τ=1 和 τ=2 的跃迁是允许的，因为在电子在初始稳定态的经典轨道的傅里叶分解中存在第一和第二谐波分量。对于那些希望将对应原理解释为在经典极限中保持的一种渐近关系的人来说，这样的段落是一个挑战。

波尔关于对应原理的论述具有显著的连续性。1923 年，人们再次发现波尔强调，稳定态之间允许或可能的跃迁与经典运动中存在的谐波分量相关联。

> \[T]在经典电子运动的傅里叶级数展开中给出的表达式中，出现在一个多周期系统的两个状态之间发生跃迁并伴随辐射的可能性，例如量子数为 n′1,…,n′u 和 n′′1,…,n′′u，取决于这些谐波分量的存在。这些谐波分量的频率 τ1ω1+…+τuωu 由以下方程给出

%% > τ1=n′1−n′′1…τu=n′u−n′′u

>

因此，我们称之为运动中的“对应”谐波分量，并且我们将上述声明的实质称为“对应原理”（伯恩哈德·波尔查诺\[1923] 1924 年，第 22 页；BCW 3，第 479 页）

1925 年，维纳·海森堡发表了他著名的“Umdeutung”论文，介绍了矩阵力学（海森堡 1925 年）。这标志着现代量子力学的开始，取代了旧的量子理论。1925 年 12 月，《自然》杂志的补充中，波尔描述了他认为新量子力学与他的对应原理之间的关系。他从对应原理的陈述开始。

> 频谱与运动之间的渐近一致性证明引发了“对应原理”的制定，根据该原理，与辐射发射相关的每个跃迁过程的可能性取决于原子运动中的相应谐波分量的存在。与相应谐波分量的频率不仅在能级收敛的极限条件下与频率条件得到的数值渐近一致，而且在此极限下，机械振荡分量的振幅还渐近地成为决定跃迁过程概率的度量，而这些概率又决定了可观测光谱线的强度（波尔 1925 年，第 848-849 页；BCW 5，第 276-277 页）

在这段引文中，伯恩哈德·波尔查诺指出了所有三种对应关系：选择定则对应关系、渐近频率对应关系和渐近强度对应关系。然后，波尔转向讨论海森堡的矩阵力学论文，认为

> 它\[新的矩阵力学]操作着一系列数量，这些数量取代了运动的谐波振荡分量，并象征着在符合对应原理的情况下在稳定态之间进行转换的可能性... 简而言之，量子力学的整个装置可以被看作是对应原理所体现的倾向的精确表述。(波尔，1925 年，第 852 页；BCW 5，第 280 页)

在这段文字中，波尔似乎在说，新的量子力学象征着符合他的选择定则的允许转换。

伯恩哈德·波尔查诺继续讨论对应原理，即使在现代量子力学出现之后。例如，在他 1928 年的 Como 讲座中，他写道，

> 将量子理论视为经典理论的合理概括的目的导致了所谓的对应原理的制定。利用这一原理解释光谱结果是基于对经典电动力学的象征性应用，其中每个过渡过程都与原子粒子运动中的谐波相关联，根据普通力学的预期应该出现。（波尔 1928 年，第 584 页；BCW 6，第 152 页）

请注意，波尔在这里谈到了对经典电动力学的“象征性”应用——例如，静止态中的电子轨迹不应被字面或甚至“形式上”解释。波尔对在对应原理中使用的电子轨迹地位的理解的转变，特别受到 Olivier Darrigol 的强调（Darrigol 1997，第 558 页）。

然而，正如 1920 年他首次提出对应原理时一样，伯恐在 1928 年（在旧量子理论被现代量子力学取代之后）将对应原理解释为转换过程与粒子经典运动中的谐波之间的联系。此外，正如 1920 年那样，他明确将对应原理与他认为量子力学是经典力学的合理概括联系在一起。因此，对应原理为经典力学（和电动力学）、旧量子理论和现代量子力学之间提供了概念联系。这种合理概括论进而成为伯恐关于互补性以及更广泛地说，他哥本哈根量子力学解释的基础。因此，对应原理不仅在现代量子力学的发现中技术重要，正如 Jammer（1966 年，第 118 页）所强调的那样，它也是伯恐哲学的基础。

## 4. 早期回应

对伯恐对应原理的早期回应者大致可分为三类：误解该原理的人（例如，伯恩和罗森菲尔德）、接受并发展它的人（例如，克莱默斯和范弗莱克）、以及似乎理解它但仍然不信任它的人（例如，索默菲尔德、泡利和海森堡）。

这是不清楚的，许多波尔的同时代人并不清楚他所说的对应原理意味着什么。例如，即使是波尔最亲近的学生和合作者之一莱昂·罗森菲尔德，也回忆起波尔对他未能正确理解这一原理实质的恼怒（罗森菲尔德\[1973] 1979，第 690 页）。这或许并不完全令人惊讶，考虑到波尔著作的晦涩性。波尔本人非常清楚他的深奥写作风格经常导致他人误解他。在写给阿诺德·索默菲尔德的一封信中，波尔悲叹，

> 在过去几年里，我经常感到在科学上非常孤独，因为我觉得我尽我所能系统地发展量子理论原则的努力得到的理解非常少……我非常清楚事情尚未澄清，以及我在表达我的想法方面是多么无助。（波尔致索默菲尔德，1922 年 4 月 30 日；BCW 3，第 39 页）

事实上，人们很快就会看到在物理文献中出现了对对应原理的各种不同解释，这种解释的多样性一直持续至今。因此，重要的是要区分波尔对对应原理的看法与对应原理在更广泛的物理学界中所代表的含义（有关对应原理如何推动研究和讨论的详细描述，请参阅 Jähnert 2019）。例如，亨德里克·克莱默斯和约翰·范·弗莱克都使用并扩展了“对应原理”这个术语，涵盖了在量子力学发展中重要的各种对应类型论证（例如，参见 Duncan 和 Janssen 2007；2019）。

在那些似乎正确理解伯恩哈德·波尔查诺核心的人中，甚至更少的人接受了它。事实上，尽管他们愿意在其他方法失败时机会主义地利用它来获得具体结果，但许多波尔的同时代人对这一原则持怀疑态度。在这第三类别中，有三位对对应原则最重要的同时代批评者：阿诺德·索默菲尔德、沃尔夫冈·波利和维尔纳·海森堡。\[[7](https://plato.stanford.edu/entries/bohr-correspondence/notes.html#note-7)]

### 4.1 索默菲尔德

对伯恩哈德·波尔查诺对应原则最早也是最有力的批评者之一是阿诺德·索默菲尔德（1868–1951）。正如达里戈尔详细叙述的那样，索默菲尔德从未对伯恩哈德·波尔查诺的对应原则感到舒适，只是勉强承认其富饶性（达里戈尔 1992 年，第 138–145 页）。索默菲尔德更倾向于将量子理论视为一个自包含的形式规则集，并希望通过“一种类似于数字计算无可辩驳逻辑的非常严格的推导方式”来推导选择规则（索默菲尔德\[1919] 1923 年，第 265–266 页）。在他的书《原子结构和光谱线》的第一版中，索默菲尔德轻蔑地将伯恩哈德·波尔查诺的对应原则称为“魔法棒”：

伯恩哈德·波尔查诺 在他的_对应原理_中发现了一根魔杖（他自己称之为形式原理），这使我们立即能够利用经典波动理论在量子理论中的结果。（Sommereld \[1919] 1923, p. 275）\[[8](https://plato.stanford.edu/entries/bohr-correspondence/notes.html#note-8)]

在《原子结构》的第二版中，Sommerfeld 减轻了对对应原理的批评，指出其巨大的生产力。1920 年 11 月写给波尔的一封信中，Sommerfeld 写道，

> 在我的书的附录中，您可以看到我已经费了一些力气，以展示您的对应原理的价值，比第一版中更好…尽管如此，我必须承认，您的原理的起源，与量子理论无关，仍然让我感到困扰，尽管我承认通过它揭示了量子理论和经典电动力学之间的最重要联系。（Sommerfeld to Bohr, 1920 年 11 月 11 日; BCW 3, p. 690）

Suman Seth（2008）认为，Sommerfeld 对伯恩哈德·波尔查诺的不满并非像 Darrigol 所暗示的那样源自对形式规则的承诺，而更多地来自他对类比思维的普遍不信任以及他认为量子和经典概念被不当混合的看法。例如，在 Sommerfeld 1924 年关于 Bohr 原子模型的文章中，我们可以看到这一点，他写道，

> 通过量子数的选择规则，在系列和带光谱中，对应原理的魔力已经得到了普遍证明...尽管如此，由于它混合了量子理论和经典观点，我无法将其视为最终令人满意。（Sommerfeld 1924，第 1048 页；Seth 2008，第 345 页中也引用）。

Sommerfeld 对对应原理的批判态度将对沃尔夫冈·波利和沃纳·海森堡产生影响，他们两人都是他的博士生。

### 4.2 保利

在他接受诺贝尔奖的演讲中（该奖项是因为他发现排斥原理而于 1945 年获得的），沃尔夫冈·保利描述了波尔和索默菲尔德之间的基本方法论差异：

> 那时，有两种方法来解决与量子作用相关的困难问题。一种是通过寻找将经典力学和电动力学转化为量子语言的关键，从而形成这些的逻辑概括，以期将新思想带入抽象秩序。这是波尔的“伯恩哈德·波尔查诺”所采取的方向。然而，索默菲尔德更倾向于，鉴于阻碍了运动模型概念的使用的困难，尽可能独立于模型，直接解释光谱定律与整数的关系...（保利 1946 年，第 27 页）

尽管事后保利声称这两种方法都对他产生了影响，但在他 1924 年和 1925 年的通信中，人们几乎只能看到保利在坚决支持索默菲尔德方法，对波尔的对应原理和基于模型的推理进行了全面否定。保利对波尔的对应原理的批评主要集中在两个问题上。首先，保利反对使用甚至是“形式上”的电子轨道概念，这对于应用对应原理至关重要（例如，1924 年 2 月 21 日，保利致波尔）。其次，保利怀疑对应原理能否像波尔所希望的那样解释电子壳的闭合。1924 年，保利写信给波尔：

> 我已经经常对你说过，我认为对应原理实际上与原子中群体闭合的问题无关… 这里讨论的是某些定态的排除（_不是_跃迁），这在原则上更类似于氢原子中排除状态 m=0 或 k=0，而不是例如选择定则 Δk=±1。你还坚持你… 在这种情况下应用对应原理的观点吗？… 而且根本没有必要谈论谐波的相互作用。（1924 年 12 月 12 日，保利致波尔；引自 Serwer 1977 年，第 235 页）

通读保利的话语，他似乎将波尔的对应原理理解为关于定态之间跃迁的选择规则，这些规则与经典运动中的谐波有关。他的反对并不针对这个对应原理，而是针对试图将这个原理扩展到解释原子中电子群的闭合的尝试——这种对应原理的扩展，保利在其他地方称之为“对应原理帝国主义”（*Imperialismus des Korrespondenzprinzips*）（1925 年 2 月 28 日，保利致海森堡；引自 Serwer 1977 年，第 233 页）。电子壳的闭合最终将由保利的排斥原理来解释，尽管最初保利对这样的解释感到不满，因为他的排斥规则无法得到更一般的基础和理由。当波尔建议对应原理可能为排斥原理提供这样的基础时，保利回答说，

> 个人而言，我并不相信，然而，伯恩哈德·波尔查诺将会导致规则的基础...对于那些需要电子轨道和机械模型明确定义的支撑的软弱者，规则可以这样确立：‘如果在强场中有多于一个电子具有相同的量子数，它们将具有相同的轨道，因此会发生碰撞...通过指出与核的碰撞来证明在氢原子中排除上述情况从未让我满意。如果我们能够直接根据更一般的量子力学（偏离经典力学）的基础来理解，那将更加令人满意。（保利于 1924 年 12 月 31 日致波尔；引自海尔布朗 1983 年，第 306 页和瑟尔 1977 年，第 236 页）

在上述引文中，我们看到保利支持孙默菲尔德，他不信任对应原理和基于模型的推理，而更倾向于通过新的量子力学的“直接”解释来理解。

### 4.3 海森堡

根据 Jagdish Mehra 和 Helmut Rechenberg（1982）的记载，当 Werner Heisenberg 于 1924 年首次抵达哥本哈根与伯恩哈德·波尔查诺合作时，他热情地接受了对应原理，并承担起向更广泛的物理学界捍卫这一原理的任务。这在 Heisenberg 于 1924 年 9 月 30 日写给 Pauli 的一封信中尤为明显：

> 与波尔一起，我们再次仔细研究了这个问题，得出结论，不是——正如 Sommerfeld 所说的——不能用对应原理来理解总和规则；相反，它们是对应原理的一个必然结果……我们对这一解释感到非常高兴，因为现在对对应原理的攻击完全被驳倒了……\[自从最近对对应原理指责如此之多，发表您证实对应原理的结果将是件好事] *ad majorem correspondentiae principii gloriam* \[为对应原理的更大荣耀]。（Heisenberg 致 Pauli，1924 年 9 月 30 日；摘自 Mehra 和 Rechenberg 第 156-157 页）

然而，到了 1925 年，Heisenberg 开始逐渐疏远对应原理。Daniel Serwer 将 Heisenberg 观点的这种转变归因于 Pauli 的影响：

在 1925 年 3 月初，波利来到了哥本哈根。这次访问对海森堡来说至关重要。在波利的压力下，他开始改变自己对许多问题的看法……包括伯恩哈德·波尔查诺。但直到波利的访问，海森堡仍然坚信……伯恩哈德·波尔查诺会带来结果。（Serwer 1977，第 222 页）

尽管海森堡在发展矩阵力学时严重依赖于对应原理，但他不再公开为其辩护。实际上，正如玛拉·贝勒所指出的，“海森堡在\[1925 年矩阵力学论文中]根本没有引用波尔的工作，尽管该论文在很大程度上建立在波尔的对应原理基础上……相反，海森堡\[不准确地]将自己的工作描述为源自实证主义原则的消除不可观测性”（Beller 1999，第 140 页）。海森堡在他的著作《量子力学的物理原理》中表达了他对对应原理日益矛盾的看法：

“的确，通过对应原理的巧妙组合论证，可以使物质的量子理论与辐射的经典理论提供转移概率的定量值……然而，这种对辐射问题的阐述远非令人满意，并且很容易导致错误的结论。”（海森堡 1930，第 82 页）

虽然海森堡愿意承认这个原则的有限效用，但他并不像波尔那样将其视为量子理论的基本原则。相反，海森堡认为“必须强调这一\[对应]是一个纯粹的形式结果；它并不是由量子理论的任何物理原则推导出来的”（海森堡 1930 年，第 83 页）。换句话说，这种对应应被解释为一种纯粹的数学结果，而不是揭示量子和经典理论之间的任何深刻联系，当然也不是量子理论本身的原则。对于海森堡来说，量子力学是一个封闭的理论\[*Abgeschlossene Theorie*]，是一个完全独立的公理系统，而不是以任何方式依赖于经典力学的理论。

## 5. 历史和哲学文献中的解释

可以说，对于对应原则的任何解释都面临着以下四个挑战：首先，确定波尔打算通过对应原则指定哪种（或哪种组合）经典力学和量子力学之间的各种类比或关系；其次，确定对应原则的范围（即，它是否仅适用于大量子数还是所有量子数）；第三，解释为什么波尔认为对应原则应被视为量子理论的一个_法则_；最后，解释为什么波尔认为对应原则已被形式化，并因此在现代（矩阵）量子力学中得以保留。

伯恩哈德·波尔查诺的对应原理最具影响力的讨论之一出现在马克斯·亚默 1966 年的著作《量子力学的概念发展》中。亚默认为对应原理是电子的运动学与发射辐射的属性之间的关系。像许多对对应原理的解释者一样，他主要关注频率关系。他指出，波尔还发现了光谱线强度与经典谐波分量的振幅之间的渐近对应，以及发射辐射的极化与经典运动特性之间的对应。尽管亚默指出了这些其他对应关系，但他似乎将频率对应解释为主要的对应原理。关于这种对应作为原理的地位，亚默写道，

> 因此，在极限情况下，量子理论的频率 νqu 与经典力学频率 νcl 相一致。通过要求这种对应在中等和小量子数情况下也保持近似有效，波尔将在极限情况下可能被形式上视为定理的内容概括并修改为一个原理。（亚默 1966 年，第 111 页）

根据亚默的说法，对应原理被解释为频率关系，适用于所有量子数，因此获得了“原则”的地位，尽管这是一个“近似”的关系，仅对大量子数精确。

Jammer 对波尔的说法相当不屑，即对应原理应被视为量子理论的一项法则。他写道，

> 为了建立量子理论的预测，或者换句话说，构建一个理论，其验证取决于与该理论实质相冲突的前提，而求助于经典物理学，从逻辑角度来看，这当然是一个严重的不一致。波尔充分意识到这一困难，多次尝试表明“对应原理必须纯粹被视为量子理论的一项法则”。（Jammer 1966，第 116 页）

在 Jammer 看来，波尔声称对应原理是一项法则只是为了掩盖旧量子理论的不一致基础。与波尔声称量子理论是经典力学的合理概括相对立，Jammer 解释波尔将量子力学和经典力学视为不可调和的，因此将对应原理解释为仅是“启发性价值的形式类比”。在讨论对应原理的最后，Jammer 总结道“他\[波尔]在 1920 年至 1961 年间发表的关于对应原理本质的众多且常常有些矛盾的论述，使得很难，甚至不可能，将一个明确且不变的对应原理概念归因于波尔”（Jammer 1966，第 117 页）。

也许正因为如此，Jagdish Mehra 和 Helmut Rechenberg（1982 年）在他们全面的量子理论发展史中，并没有明确承诺将波尔讨论的几种对应关系中的哪一种指定为对应原理。像 Jammer 一样，他们努力理解为什么波尔认为对应原理适用于小量子数，以及为什么应该将其视为量子理论的定律。他们写道：“‘以某种方式’将类比扩展到小量子数代表了一种最大胆的假设... \[波尔] 深信，他在频率和强度方面的关系的扩展，这些关系在高量子数极限下是有效的，最终也可能在涉及低量子数时得到证实”（Mehra 和 Rechenberg 1982 年，第 250 页）。尽管他们提供了对应原理的技术性讨论之一，但他们既没有讨论波尔认为它应被视为一项定律，也没有讨论波尔声称对应原理被形式化为新的量子力学。

对波尔的对应原理的另一种解释是由 Olivier Darrigol 在他出色且易读的量子理论史《从 c-数到 q-数》中辩护的。他并不将对应原理视为关于量子和经典频率的陈述，而是将其解释为早期所称的“强度对应”：两个相隔 τ 的稳定态之间的量子跃迁概率与第 τ 个谐波振动的经典振幅的模的平方成正比，这在经典上是强度的度量（见方程 5）。

Darrigol 写道，

伯恩哈德·波尔查诺假定，即使对于中度激发态，给定量子跃迁的概率也大致由初始稳定态中运动的“相应”谐波分量的强度决定。这就是波尔所称的“对应原理”。（Darrigol 1997，p. 550；另请参见 Darrigol 1992，p. 126）

严格来说，这种强度对应仅在量子数较大的极限情况下才是精确的，并且不能推广到量子数较小的情况。唯一的例外是当经典振幅为零时，量子跃迁概率也将为零（早期所称的_波尔选择规则_的特例），这适用于所有量子数。

与一些对对应原理的解释者不同，达里戈尔确实相信存在一个关于强度对应的波尔对应原理的一致和理性解释。他认为，波尔称之为_量子理论的定律_是有道理的，因为“\[它]确实是两个量子理论概念之间的关系：量子跃迁的概率和原子运动”（Darrigol 1997，p. 553）。此外，达里戈尔有力地论证说，这种对应直接被纳入了海森堡 1925 年的矩阵力学中，从而证明了波尔的说法，即新量子力学可以被看作是“对应原理中体现的倾向的精确表述”（波尔 1925，p. 852；BCW 5，p. 280）。

尽管存在这种连续性，达里戈尔认为波尔对于对应原理的理解发生了根本的、虽然是隐含的转变：

> 最初，“对应”所应用的运动是静止状态中的运动，形式上由轨道电子描述。最终，这种运动与静止状态的描述无关，纯粹是“象征性的。”（达里戈尔 1997 年，第 558 页）

达里戈尔所说的“形式上”是指空间-时间关系和动力学关系在描述原子中电子运动时被保留，尽管承认实际上无法观察到这种运动。一旦它变成了“象征性”的关系，空间-时间描述就完全丢失了。

Hans Radder 还提出过，波尔对于对应原理的理解在他的职业生涯中有所发展。Radder（1991）确定了三个不同的阶段。在第一阶段（大约从 1913 年到 1915 年），对应原理仅仅是一个“数字对应”；也就是说，它涉及了古典力学（和电动力学）以及旧量子理论中某些量的数值一致性。在第二阶段，持续时间为 1916 年至 1922 年，对应原理不仅仅是数值一致，还涉及概念上的连续性：“相同的基本概念 ωn,τ 和 Cn,τ，它们控制着电子在轨道中的运动，以及决定跃迁概率的相同函数 f 被声称是支撑两种理论的基础”（Radder 1991，第 206 页）。在 1923 年至 1925 年间引入新的矩阵（量子）力学时，概念上的连续性被放弃，取而代之的是“形式上”的对应。Radder 在描述对应原理为“形式”时意味着与 Darrigol 不同。他解释道，

> 现在，概念上的对应，因为它与机械轨道模型相关，被拒绝作为原子理论的基础，轨道模型被临时替换为所谓的“虚拟场模型”... 这些术语之间的关系是_形式_（而非概念上的）*对应*，表达了某些数学一致性或替代关系的存在（Radder 1991，第 207 页）。

Radder 的主要关注点是将波尔对应原理的各种体现与科学哲学文献中更一般的对应和启发论证联系起来（见下面的第 7 节）。

其他对伯恩哈德·波尔查诺的最近解释包括罗伯特·巴特曼的解释，据他称“对应原理是这样一种说法，即第二假设适用的辐射过程与原子中的带电粒子，即电子的机械振动或周期运动‘相关’或‘对应’”（巴特曼 1991 年，第 203 页）。巴特曼正确指出，对应原理并非量子力学必须包含经典力学作为极限情况的主张，并认为经典和量子频率的渐近一致性（频率解释）并非对应原理，而是对应原理所“证明和解释”的事物。

同样，斯科特·塔诺纳（2004 年）反对了波尔的对应原理是关于量子和经典理论的渐近一致性的观点。他认为，波尔的对应原理应该主要被理解为光谱（辐射）和轨道运动之间的联系。更广泛地说，塔诺纳认为，对应原理不应被理解为理论构建的启发式工具，而应被理解为一种认识论工具，其“在波尔的经验方法中的主要目的是通过将光谱的经典属性与原子属性联系起来，来弥合经验现象与未知原子结构之间的认识论鸿沟”（塔诺纳 2004 年，第 683 页）。

更近期，阿丽莎·博库利奇（2008 年，以及 2009 年\[其他互联网资源]）主张应该从她所称的“波尔的选择规则”角度来理解波尔的对应原理。这一选择规则规定，“如果且仅当在静止态 n'到另一静止态 n''的跃迁中，电子在静止态中的经典运动存在第 τ 次谐波时，跃迁才是允许的；如果在经典运动中不存在第 τ 次谐波，则量子力学中不允许处于间隔为 τ 的静止态之间的跃迁”（博库利奇 2008 年，第 85 页）。因此，根据博库利奇的解读，对应原理被定义为每个允许的静止态之间的量子跃迁与经典运动的一个谐波分量相对应的说法。她认为，由杰默和达里戈尔强调的频率和强度的渐近一致性分别是对应原理的应用或“结果”，而非对应原理本身。此外，她认为，波尔的对应原理的选择规则解释最能解释波尔声称对应原理适用于小 n，它是量子理论的一条定律，并且在矩阵力学中得到了形式化和保留。

## 6. 当前物理学文献中的解释

在当前的物理学文献中，人们通常会发现对伯恩哈德·波尔查诺的_对应原理_有着非常不同的理解。早在马克斯·玻恩关于新量子理论的经典著作中，\[[12](https://plato.stanford.edu/entries/bohr-correspondence/notes.html#note-12)] 最早出版于 1933 年，就可以找到对应原理的定义如下：

> 主要思想（波尔的_对应原理_，1923 年）可以广泛陈述如下。通过经验的检验，经典物理学的法则在所有运动过程中都得到了很好的验证... 因此，必须将其作为一个无条件必要的假设，即新力学... 在所有这些问题中必须得出与经典力学相同的结果。换句话说，必须要求，对于大质量和大尺寸轨道的极限情况，新力学必须过渡到经典力学。（玻恩\[1933] 1957，第 103 页）。

有两个 Born 对 Bohr 的通信原理重新阐释在物理文献中变得相当普遍的观点：首先，通信原理作为一个非常普遍的要求，即量子力学应该能够恢复经典力学的经验成功；其次，更具体的要求是在大质量和大尺寸轨道的极限情况下恢复经典力学的预测—后者的极限通常表示为 n→∞。

在 David Bohm 的经典标准量子力学教科书中，通信原理同样被解释为两个理论之间的一般关系：“\[T]通信原理，最初由 Bohr 提出…规定量子物理定律必须被选择得当，以便在经典极限情况下，当涉及许多量子时，量子定律导致经典方程作为平均值” (Bohm 1951, p. 31)。

在他 1984 年的《物理学今日》文章“重新审视通信原理”中，Richard Liboff 认为 Bohr 的通信原理并不是一个关于从量子力学中恢复经典力学的一般性主张，而是以下更为受限制的主张：“周期系统的量子频谱在大 n 极限下接近经典频谱” (Liboff 1984, p. 52)。Liboff 进一步指出，即使是这种受限制的通信原理形式也被破坏了，例如对于像是一个粒子在盒子中和一个刚性转子这样的系统。他指出“在这两种情况下，极限 h→0 导致频率对应，但极限 n→∞ 则不会” (Liboff 1984, p. 52)。

跟随 Liboff，Ghazi Hassoun 和 Donald Kobe（1989）认为，为了获得量子力学本征值的有意义的经典极限，有必要“同时使用两种\[对应原理]，即普朗克常数趋于零，适当的量子数趋于无穷大...受到约束，即 nh=J，其中 J 是适当的经典作用量”（Hassoun 和 Kobe 1989，第 658 页）。根据这一解释，波尔的对应原理被简单地解释为极限 n→∞。尽管他们称这一极限为“波尔的对应原理”，但他们指出，波尔之所以能够准确获得经典轨道频率，是因为“他没有将数学极限视为量子数趋于无穷大。相反，波尔认为对于大量子数，量子结果几乎等同于经典结果。因此，量子数 n，比如说，n≫1，但并非无穷大”（Hassoun 和 Kobe 1989，第 661 页）。他们得出结论，对应原理“通常被认为不够精确，因为波尔使用了大量，但不是无穷大的量子数。然而，正如本文所示，当波尔和普朗克的表述被综合起来时，对应原理就具有了精确的数学形式”（Hassoun 和 Kobe 1989，第 661 页）。根据这一解释，对应原理被广泛理解为试图获得经典极限的数学精确表述。

当代物理学界对波尔的对应原理（各种理解）的兴趣主要在于特定类别的物理系统对这一原理的表面违反。例如，Joseph Ford 和 Giorgio Mantica 在他们的文章“量子力学是否遵守对应原理？它是否完整？”中将对应原理定义为要求“任何两个在其有效领域有重叠的有效物理理论必须以相关精度为物理观测提供相同的预测”（Ford 和 Mantica 1992，第 1087 页）。他们关注的是量子力学是否能够解释混沌经典系统的行为。同样，Wojciech Zurek 将对应原理定义为“量子和经典期望值之间的一致性要求”（Habib 等，1998），并认为在没有退相干现象的情况下，对应原理就会被违反。

尽管当代物理学文献对对应原理的理解在很大程度上符合马克斯·玻恩对这一原理的解释（如上所述），但这并不是波尔本人对对应原理的理解。尽管波尔同意量子力学应该能够恢复经典力学经验确认的预测，但他明确拒绝了对对应原理的这种解读。事实上，莱昂·罗森菲尔德回忆起波尔对他的原理持续误解的沮丧。当罗森菲尔德随口对波尔建议对应原理是关于量子和经典预测的渐近一致性时，波尔强烈抗议并回答说：“这不是对应论证。要求量子理论应该在频率低的模式下过渡到经典描述，根本不是一个原则。这是对理论的一个明显要求”（罗森菲尔德 1973，第 690 页）。

## 7. 广义对应原理

最后，重要的是要区分波尔查诺的对应原理和一些科学哲学家所称之为“广义对应原理”（或称“一般对应原理”）。

在他的经典论文《对应、不变性和启发法：赞扬保守归纳》中，Heinz Post 将这一原理定义如下：

最重要的启发式限制是 **伯恩哈德·波尔查诺**。粗略地说，这是一个要求，即任何可接受的新理论 L 都应该通过在 S 已经经过充分测试确认的条件下“退化”为该理论来解释其前身 S 的成功。(Post 1971, p. 228)

这里的广义对应原则被视为对新理论发展的限制，也被视为对后继理论与前身理论之间关系的解释。在物理学中，Post 对“退化”的概念通常被解释为某个参数的极限，通过该极限，后继理论的方程式可以被恢复为前身理论的方程式的极限。关于量子-经典关系的具体情况，Post 认为一般对应原则失败了：

> 令人矛盾的是，我们能够找到的唯一反例是对 **伯恩哈德·波尔查诺** 的一般对应原则的典范例子，即量子力学与经典力学的关系。与一些教科书中可能给出的印象相反，不可能将量子力学简化为经典力学...我们认为，这种未能在量子力学与经典物理学之间建立一般对应关系（在 ΔPΔQ≫h 的极限情况下）应被视为量子力学的缺陷...在其声称为 L 理论的地位，而不是作为 **伯恩哈德·波尔查诺** 原则的崩溃。(Post 1971, pp. 233–234)\[[13](https://plato.stanford.edu/entries/bohr-correspondence/notes.html#note-13)]

虽然波斯特的广义对应原理与物理学家对伯恩哈德·波尔查诺的对应原理的概念有些相似，但与波尔自己的理解却大不相同。事实上，根据波斯特的观点，广义对应原理甚至不适用于波尔所研究的特定理论对。

与波斯特相反，拉德尔（1991 年）声称广义对应原理适用于量子-经典关系的情况（第 215 页），并且将波尔的对应原理（他主要解释为一种启发式工具）视为广义对应原理的一个实例（第 208 页）。

<!--md-padding-ignore-begin-->
## Bibliography

### Works by Bohr

* 1913, “On the constitution of atoms and molecules,” *Philosophical Magazine*, 26: 1–25, 476–502, 857–75.
* 1918, “The quantum theory of line-spectra,” *Det kongelige Danske videnskabernes Selskab, Matematiske-fysike Meddelser*, 4(1): 1–36; reprinted in Bohr (1976), pp. 67–102.
* 1920, “On the series spectra of the elements,” Lecture before the German Physical Society in Berlin (27 April 1920), translated by A. D. Udden, in Bohr (1976), 241–282.
* 1921a, “Application of the quantum theory to atomic problems in general,” unpublished manuscript in Bohr (1976), pp. 397–414.
* 1921b, “Constitution of atoms,” unpublished manuscript in Bohr (1977), pp. 99–174.
* 1922, “Seven lectures on the theory of atomic structure,” unpublished, in Bohr (1977), pp. 341–419.
* \[1923] 1924, “On the application of the quantum theory to atomic structure,” *Proceedings of the Cambridge Philosophical Society (supplement)*, Cambridge: Cambridge University Press, pp. 1–42. First published in *Zeitschrift für Physik*, 13 (1923): 117. Reprinted in Bohr (1976), pp. 457–499.
* 1925, “Atomic theory and mechanics,” *Nature* (Supplement), 116: 845–852. Reprinted in Bohr (1984), pp. 273–280.
* 1928, “The quantum postulate and the recent development of atomic theory,” *Nature* (Supplement), 121: 580–590. Reprinted Bohr (1985), pp. 148–158.
* 1976, *Niels Bohr Collected Works, Vol. 3: The Correspondence Principle (1918–1923)*, J. R. Nielsen (ed.). Amsterdam: North-Holland Publishing.
* 1977, *Niels Bohr Collected Works, Vol. 4: The Periodic System (1920–1923)*, J. R. Nielsen (ed.). Amsterdam: North-Holland Publishing.
* 1984, *Niels Bohr Collected Works, Vol. 5: The Emergence of Quantum Mechanics (Mainly 1924–1926)*, K. Stolzenburg (ed.). Amsterdam: North-Holland Publishing.
* 1985, *Niels Bohr Collected Works, Vol. 6: Foundations of Quantum Physics I (1926–1932)*, J. Kalckar (ed.). Amsterdam: North-Holland Publishing.

### Other Primary Literature

* Born, M., 1924, “Über Quantenmechanik,” *Zeitschrift für Physik*, 26: 379–395.
* –––, 1927 \[1925], *The Mechanics of the Atom*, London: Bell; translation of *Vorlesungen Über Atommechanik*, Berlin: Springer.
* –––, 1957 \[1933], *Atomic Physics*, 6th edition, J. Dougall and R. Blin-Stoyle (trans.), New York: Hafner Publishing Co.
* Heisenberg, W., 1968 \[1925], “Quantum-theoretical re-interpretation of kinematic and mechanical relations,” in B. van der Waerden (ed.), *Sources of Quantum Mechanics*, New York: Dover Publications, 261–276; translation of “Über quantentheorische Umdeutung kinematischer und mechanischer Beziehungen”, *Zeitschrift für Physik*, 33: 879–893.
* –––, 1930, *The Physical Principles of the Quantum Theory*, translated by C. Eckart and F. C. Hoyt, Chicago: University of Chicago Press.
* Pauli, W., 1946, “Exclusion Principle and Quantum Mechanics,” in *Nobel Lectures, Physics 1942–1962*, Amsterdam: Elsevier Publishing Co., 1964.
* Sommerfeld, A., 1923 \[1919], *Atomic Structure and Spectral Lines*, translated by H. Brose, London: Methuen.
* –––, 1924, “Grundlagen der Quantentheorie und des Bohrschen Atommodelles,” *Die Naturwissenschaften*, 12(47): 1047–1049.
* Van Vleck, J. H., 1924a, “The Absorption of Radiation by Multiply Periodic Orbits, and Its Relation to the Correspondence Principle and the Rayleigh-Jeans law. Part I: Some Extensions of the Correspondence Principle,” *Physical Review*, 24: 330–346.
* –––, 1924b, “The Absorption of Radiation by Multiply Periodic Orbits, and Its Relation to the Correspondence Principle and the Rayleigh-Jeans law. Part II. Calculation of Absorption by Multiply Periodic Orbits,” *Physical Review*, 24: 347–365.

### Secondary Literature

* Batterman, R., 1991, “Chaos, quantization, and the correspondence principle,” *Synthese*, 89: 189–227.
* Beller, M., 1999, *Quantum Dialogue: The Making of a Revolution*, Chicago: University of Chicago Press.
* Bohm, D., 1951, *Quantum Theory*, New York: Prentice Hall. Reprinted by Dover Publications, Inc.
* Bokulich, A., 2004, “Open or closed? Dirac, Heisenberg, and the relation between classical and quantum mechanics,” *Studies in History and Philosophy of Modern Physics*, 35: 377–396.
* –––, 2006, “Heisenberg meets Kuhn: Closed theories and paradigms,” *Philosophy of Science*, 73: 90–107.
* –––, 2008, *Reexamining the Quantum-Classical Relation: Beyond Reductionism and Pluralism*, Cambridge: Cambridge University Press.
* Bokulich, P. and A. Bokulich, 2005, “Niels Bohr’s generalization of classical mechanics,” *Foundations of Physics*, 35: 347–371.
* Darrigol, O., 1992, *From c-Numbers to q-Numbers: The Classical Analogy in the History of Quantum Theory*, Berkeley: University of California Press.
* –––, 1997, “Classical concepts in Bohr’s atomic theory (1913–1925),” *Physis: Riv. Internaz. di Storia della Scienza*, 34: 545–567.
* Duncan, A. and M. Janssen, 2007, “On the verge of *Umdeutung* in Minnesota: Van Vleck and the Correspondence Principle, Part One,” *Archive for History of Exact Sciences*, 61(6): 553–624.
* –––, 2019, *Constructing Quantum Mechanics* (Volume 1: The Scaffold 1900–1923), Oxford: Oxford University Press.
* Fedak, W. A. and J. J. Prentis, 2002, “Quantum jumps and classical harmonics,” *American Journal of Physics*, 70: 332–344.
* Ford, J. and G. Mantica, 1992, “Does quantum mechanics obey the correspondence principle? Is it complete?” *American Journal of Physics*, 60: 1086–1098.
* Habib, S., K. Shizume, and W. Zurek, 1998, “Decoherence, Chaos and the Correspondence Principle,” *Physical Review Letters*, 80: 4361–4365.
* Hassoun, G. and D. Kobe, 1989, “Synthesis of the Planck and Bohr formulations of the correspondence principle,”, *American Journal of Physics*, 57(7): 658–662.
* Heilbron, J., 1983, “The Origins of the Exclusion Principle,” *Historical Studies in the Physical Sciences*, 13(2): 261–310.
* Jähnert, M., 2019, *Practicing the Correspondence Principle in the Old Quantum Theory: A Transformation through Implementation*, Archimedes 56, Cham: Springer.
* Jammer, M., 1966, *The Conceptual Development of Quantum Mechanics*, New York: McGraw Hill Book Co.
* Liboff, R., 1984, “The correspondence principle revisited,” *Physics Today*, 37: 50–55.
* Mehra, J. and Rechenberg, H., 1982, *The Historical Development of Quantum Theory* (Volume I: *The Quantum Theory of Planck, Einstein, Bohr and Sommerfeld: Its Foundation and the Rise of Its Difficulties 1900–1925*; Volume II: *The Discovery of Quantum Mechanics 1925*), New York: Springer-Verlag.
* Nielsen, J. R., 1976, “Introduction to *Niels Bohr Collected Works* (Volume 3),” in Bohr (1976), pp. 3–46.
* Post, H., 1971, “Correspondence, Invariance and Heuristics: In Praise of Conservative Induction,” *Studies in History and Philosophy of Science*, 2: 213–255; reprinted in *Correspondence, Invariance and Heuristics: Essays in Honour of Heinz Post* (Boston Studies in the Philosophy of Science, Volume 148), S. French and H. Kamminga (eds.), Boston: Kluwer Academic Publishers, 1993, pp. 1–43.
* Radder, H., 1991, “Heuristics and The Generalized Correspondence Principle,” *British Journal for the Philosophy of Science*, 42: 195–226.
* Rynasiewicz, R., 2015, “The (?) Correspondence Principle,” in F. Aaserud and H. Kragh (eds.), *One Hundred Years of the Bohr Atom. Proceedings from a Conference*, Copenhagen: Det Kongelige Danske Videnskabernes Selskab, 175–199.
* Rosenfeld, L., 1979 \[1973], “The Wave-Particle Dilemma,” in R. Cohen and J. Stachel (eds.), *Selected Papers of Léon Rosenfeld* (Boston Studies in the Philosophy of Science, Volume 21), Dordrecht: D. Reidel Publishing Co., 688–703; originally published in J. Mehra (ed.), *The Physicist’s Conception of Nature*, Dordrecht: D. Reidel Publishing Co., pp. 251–263.
* Serwer, D., 1977, “*Unmechanischer Zwang*: Pauli, Heisenberg, and the Rejection of the Mechanical Atom, 1923–1925,” *Historical Studies in the Physical Sciences*, 8: 189–256.
* Seth, S., 2008, “Mystik and Technik: Arnold Sommerfeld and Early-Weimar Quantum Theory,” *Berichte zur Wissenschaftsgeschichte*, 31(4): 331–352.
* Stachel, J., 2009, “Bohr and the Photon,” in W. Myrvold and J. Christian (eds.), *Quantum Reality, Relativistic Causality, and Closing the Epistemic Circle* (Western Ontario Series in Philosophy of Science, Volume 73), Dordrecht: Springer, pp. 69–83.
* Tanona, S., 2004, “Idealization and Formalism in Bohr’s Approach to Quantum Theory,” *Philosophy of Science*, 71: 683–695.

## Academic Tools

| ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=bohr-correspondence).                                                                      |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/bohr-correspondence/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
| ![inpho icon](../../.gitbook/assets/inpho.png)         | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=bohr-correspondence\&redirect=True) at the Internet Philosophy Ontology Project (InPhO).   |
| ![phil papers icon](../../.gitbook/assets/pp.png)      | [Enhanced bibliography for this entry](https://philpapers.org/sep/bohr-correspondence/) at [PhilPapers](https://philpapers.org/), with links to its database.                          |

## Other Internet Resources

* Bokulich, A., 2009, “[Three Puzzles about Bohr’s Correspondence Principle](http://philsci-archive.pitt.edu/4826/),” manuscript at PhilSci Archive.
* [Niels Bohr’s Nobel Prize Lecture and a brief biography](http://nobelprize.org/nobel_prizes/physics/laureates/1922/bohr-lecture.html)
* [Niels Bohr Archive](http://www.nba.nbi.dk/)
* [Niels Bohr Library and Archives](http://www.aip.org/history/nbl/index.html)
* [Sources for the History of Quantum Physics (guide to the Archives for History of Quantum Physics)](http://www.amphilsoc.org/guides/ahqp/)

## Related Entries

[physics: intertheory relations in](https://plato.stanford.edu/entries/physics-interrelate/) | [quantum mechanics: Copenhagen interpretation of](https://plato.stanford.edu/entries/qm-copenhagen/) | [quantum mechanics: the role of decoherence in](https://plato.stanford.edu/entries/qm-decoherence/) | [quantum theory: the Einstein-Podolsky-Rosen argument in](https://plato.stanford.edu/entries/qt-epr/) | [Uncertainty Principle](https://plato.stanford.edu/entries/qt-uncertainty/)

[Copyright © 2020](https://plato.stanford.edu/info.html#c) by\
[Alisa Bokulich](http://www.bu.edu/philo/people/faculty/full-time/alisa-bokulich/) <[*abokulic@bu.edu*](mailto:abokulic%40bu%2eedu)>\
Peter Bokulich <[*pbokulich@gmail.com*](mailto:pbokulich%40gmail%2ecom)>
<!--md-padding-ignore-end-->
