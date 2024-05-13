# 汉斯·赖兴巴赫的共同原因原理  common cause principle (Christopher Hitchcock and Miklós Rédei)

*首次发表于 2020 年 1 月 13 日*

共同原因原理是由汉斯·赖兴巴赫在《时间的方向》一书中引入的，该书于 1956 年在他去世后出版。假设两个事件 A 和 B 呈正相关：p(A∩B)>p(A)p(B)。此外，假设这两个事件互不是对方的原因。那么，赖兴巴赫的共同原因原理（RCCP）表明，A 和 B 将有一个共同的原因，使它们在条件上独立。赖兴巴赫将他的 RCCP 纳入了一个新的概率因果理论，并用它来描述与热力学第二定律类似的（所谓的）宏观统计时间不对称性。这个原理的重要性在于它假设了因果结构和概率相关之间的联系，从而促进了从观察到的相关性中进行因果推断。然而，RCCP 一直存在争议，并提出了许多反例。RCCP 通常被视为因果马尔可夫条件的前提，该条件在因果建模和因果推断中起着核心作用。RCCP 还被认为捕捉了关于经典系统行为的假设，而这些假设在量子力学中似乎被违反。

---

## 1. 引言

共同原因原理（RCCP）是由汉斯·赖兴巴赫在《时间的方向》一书中引入的，该书于 1956 年在他去世后出版。该原理假设因果结构与事件之间的概率相关性存在连接。在第 2 节中介绍了该原理后，我们将在第 3 节中提供一些历史背景。接下来的两节介绍了一些例证和对 RCCP 的质疑。第 6 节讨论了赖兴巴赫的叉形不对称性，这是与 RCCP 相关联的宏观统计模式中的（假设的）时间不对称性。第 7 节介绍了因果马尔可夫条件，它在因果建模方法中起着核心作用。因果马尔可夫条件通常被视为 RCCP 的现代继承者，并将对其与 RCCP 的关系进行考察。第 8 节将在适合于考察 RCCP 在量子力学中地位的形式化环境中发展 RCCP。然后，第 9 节和第 10 节将考虑 RCCP 是否与量子物理学兼容。

## 2. 赖兴巴赫的共同原因原理

假设 A 和 B 是事件。暴风雨、人生病、足球运动员进球和科学测量得出特定结果都是事件的例子。假设我们可以对这些事件发生进行有意义的概率分配。赖兴巴赫本人发展了一种复杂的频率解释概率的方法（Reichenbach 1949），但我们只假设某种客观概率可以被有意义地应用。假设事件 A 和 B 在概率上是正相关的：

(1)p(A∩B)>p(A)p(B).

也就是说，事件 A 和事件 B 同时发生的概率大于各自概率的乘积。赖兴巴赫的共同原因原理认为，当 A 和 B 之间存在这样的概率相关性时，这是因为存在以下一种因果关系：A 是 B 的原因；B 是 A 的原因；或者 A 和 B 都是第三个因素 C 所引起的。在最后一种情况下，共同原因 C 发生在 A 和 B 之前，并且必须满足以下四个独立条件：

(2)(3)(4)(5)p(A∩B|C)=p(A|C)p(B|C)p(A∩B|¯¯¯¯C)=p(A|¯¯¯¯C)p(B|¯¯¯¯C)p(A|C)>p(A|¯¯¯¯C)p(B|C)>p(B|¯¯¯¯C)

 在这里

p(X|Y)≐p(X∩Y)p(Y)

表示在条件 Y 下的 X 的条件概率，¯¯¯¯C 表示事件 C 的不存在（C 发生的否定），并且假设 C 和 ¯¯¯¯C 的概率都不为零。第（2）行表示在给定 C 的条件下，A 和 B 是条件独立的。在赖兴巴赫的术语中，C 将 A 从 B 中隔离开来。第（3）行表示 ¯¯¯¯C 也将 A 从 B 中隔离开来。第（4）和（5）行表示在 C 的条件下，A 和 B 的概率比在没有 C 的条件下更高。这些不等式是 C 作为 A 和 B 的原因的自然结果。因此，条件（2）到（5）在数学上推导出（1）。因此，共同原因可以解释（1）中的相关性。第（1）到（3）行描述的概率关系展示了辛普森悖论的一个版本。有关这种概率现象的更多信息，请参阅辛普森悖论的条目。

这样的共同原因结构通常可以通过图示的方式来表示，如图 1 所示。箭头表示因果关系，垂直维度表示时间（较晚的时间出现在较高的位置）。

![on the left the word 'time' with an arrow pointing up; on the right the letter C with an arrow pointing from it up and to the left to the letter A and another arrow pointing from C up and to the right to the letter B](https://plato.stanford.edu/entries/physics-Rpcc/figure1.svg)

图 1：一个共同原因结构。C 发生在 A 和 B 之前，并且 C 是 A 和 B 的原因。

共同原因原理（RCCP）认为概率相关性最终源于因果关系。也就是说，如果 p(A∩B)>p(A)p(B)，要么是因为其中一个事件导致了另一个事件，要么是这个不等式可以从其他不等式 p(A|C)>p(A|¯¯¯¯C)和 p(B|C)>p(B|¯¯¯¯C)中推导出来，其中 C 是 A 和 B 的原因。这个原理的重要性在于它提出了因果结构和概率相关性之间的联系，从而使得可以从经验可观察的相关性推断出因果关系。

如上所述，RCCP 假设共同原因只有两种可能的状态：C 和 ¯¯¯¯C。也就是说，C 是一个二元事件，要么存在，要么不存在。RCCP 的一个自然推广是允许共同原因是一个随机变量 Z，具有许多可能的值 z1,…,zn。在这种情况下，我们预期对于 i=1,…,n，Z=zi 会使 A 和 B 相互隔离。然而，这并不意味着我们可以将 Z 的值分为两个集合 S 和 S'，使得 Z∈S（对应于 C）和 Z∈S'（对应于 ¯¯¯¯C），每个集合都能使 A 和 B 相互隔离。更一般地说，我们不希望将 Z 的粗化事件作为使 A 和 B 相互隔离的事件。

这种推广的一个推论是，如果 A 和 B 有两个不同的二元共同原因 C 和 D，我们预期 CD，C¯¯¯¯¯D，¯¯¯¯CD 和 ¯¯¯¯¯¯¯¯¯CD 都能使 A 和 B 相互隔离，但不希望 C 和 D 能使 A 和 B 相互隔离。例如，即使我们在共同原因 C 的条件下，我们仍然预期 A 和 B 是相关的，因为还有进一步的共同原因 D。

我们可以进一步推广，允许相关效应是随机变量而不是二元事件。RCCP 的完全一般版本如下所示：

* 假设 X 和 Y 是相关的随机变量；即存在 xi 和 yj 的值，使得
  p(X=xi∩Y=yj)≠p(X=xi)p(Y=yj)。
  那么存在一组变量 Z1,…,Zm，使得每个变量都是 X 和 Y 的原因，并且
  p(X=xi∩Y=yj|Z1=zk1,…,Zm=zkm)=p(X=xi|Z1=zk1,…,Zm=zkm)×p(Y=yj|Z1=zk1,…,Zm=zkm)
  对于所有的 i、j、k1、…、km

通过这种对 RCCP 的概括，更难以制定出捕捉到 Zk 是 X 和 Y 的原因的概率术语的条件 4 和条件 5 的类似物。此外，这组条件不会严格意味着 X 和 Y 在概率上相关。我们将在第 7 节回到这些问题。

## 3. 历史背景

《时间的方向（赖兴巴赫，1956 年）》在赖兴巴赫于 1953 年去世时尚未完成。这本手稿由他的妻子玛丽亚·赖兴巴赫编辑，并于 1956 年在他去世后出版。这本书关注的是时间上的非对称现象，即我们所关联的过去和未来之间的区别。它包括了关于时间在经典物理学、热力学、统计力学和量子力学中的作用的重要部分。它还包括了关于宏观统计学中时间非对称性的部分。赖兴巴赫原计划在最后一部分中包括关于时间主观体验的内容。

这本书提出了一些重要而独创的观点。它对统计力学的哲学基础进行了详细的研究，特别是考察了热力学第二定律的地位，该定律指出一个封闭系统的熵可以增加但不会减少。赖兴巴赫探讨了统计力学与信息论这一新领域之间的联系，而香农和韦弗（1949 年）关于这一主题的经典著作则是几年前刚刚出版。除了热力学第二定律所描述的熵增的非对称性外，这本书还研究了其他时间上的非对称现象。其中之一是记录的非对称性：我们有关于过去事件的详细记录，包括人类的记忆、人造文件（如记录和历史书籍）以及自然现象（如化石、树轮和地层）。这些记录为我们提供了关于过去的丰富信息来源。关于未来，我们没有类似的信息来源，尽管我们可以可靠地预测某些事件，如日食。

第三个重要的时间不对称性是因果关系的不对称性。原因在时间上总是先于其效果。赖兴巴赫试图通过宏观统计学或概率来分析因果方向。他诉诸于他的筛选概念来定义因果中间性的关系，并且也用它来定义因果方向。正是在这个后一背景下，共同原因原理被引入。RCCP 与因果方向之间的联系将在下面的第 6 节中讨论。赖兴巴赫还制定了一个概率因果理论，并探索了这些新思想与他早些时候提出的用于区分因果方向的标记方法之间的联系（赖兴巴赫 1958 年）。

RCCP 与赖兴巴赫的思想中的许多线索相联系。赖兴巴赫曾经发展并捍卫过概率的频率解释（赖兴巴赫 1949 年），以及彻底的概率认识论（赖兴巴赫 1938 年）。他还在早期的作品中探索了概率与因果之间的关系（赖兴巴赫 1925 年 [1978]，1930 年 [1978]）。《时间的方向》进一步发展了一个概率形而上学。赖兴巴赫还在赖兴巴赫（1925 年 [1978]）和赖兴巴赫（1958 年）中探索了因果与时间方向之间的关系。后一部作品在相对论的背景下发展了一个关于时间的因果理论。

## 4. 插图

示例 1。气压计和风暴（Jeffrey 1969）。

![The letter A with an arrow pointing from it up and to the left to the letter B and another arrow pointing from A up and to the right to the letter S](https://plato.stanford.edu/entries/physics-Rpcc/figure2.svg)

图 2：气压计和风暴。A=大气压力下降；B=气压计中汞水平下降；S=风暴。

气压计中汞水平下降经常会紧随着一场风暴。将这些事件分别称为 B 和 S。由于风暴一般不那么频繁发生，这些事件在概率上是相关的：p(B∩S)>p(B)p(S)。一个气压计的行为不会影响天气，所以 B 不是 S 的原因；相反，B 和 S 有一个共同的原因：大气压力下降 A（见图 2）。A 增加了 B 和 S 的概率：

p(B|A)>p(B|¯¯¯¯A) 和 p(S|A)>p(S|¯¯¯¯A)。

此外，A 将会从 S 中筛选出 B：

p(B∩S|A)=p(B|A)p(S|A)

 和

p(B∩S|¯¯¯¯A)=p(B|¯¯¯¯A)p(S|¯¯¯¯A).

例如，如果大气压力下降，但是由于气压计故障，水银柱不下降，那么暴风雨发生的概率与气压计正常工作时相同。

示例 2。剧团（赖兴巴赫 1956）。

一个小剧团在全国各地演出。偶尔，男主角会严重生病-称之为事件 M-此时必须由替补演员来代替他的位置。女主角也有时会发生同样的情况-称之为事件 L。虽然这两个事件都很少发生，但它们往往同时发生：p(L∩M)>p(L)p(M)。原因是演员通常在同一家餐馆一起用餐，偶尔会分享有问题的食物-称之为 T。见图 3。

![The letter T with an arrow pointing from it up and to the left to the letter L and another arrow pointing from T up and to the right to the letter M](https://plato.stanford.edu/entries/physics-Rpcc/figure3.svg)

图 3：剧团。T=演员光顾的餐馆中的有问题的食物；L=女主角生病；M=男主角生病。

假设概率如下：

p(T)=.1p(L|T)=p(M|T)=.8p(L|¯¯¯¯T)=p(M|¯¯¯¯T)=.1

然后我们可以计算：

p(L∩M|T)=p(L|T)p(M|T)=.64p(L∩M|¯¯¯¯T)=p(L|¯¯¯¯T)p(M|¯¯¯¯T)=.01

这些计算利用了 T 和 ¯¯¯¯T 将 L 从 M 屏蔽的事实。我们还可以计算：

p(L)=p(L|T)p(T)+p(L|¯¯¯¯T)p(¯¯¯¯T)=.17=p(M)p(L∩M)=p(L∩M|T)p(T)+p(L∩M|¯¯¯¯T)p(¯¯¯¯T)=.073

 因此

.073=p(L∩M)>p(L)p(M)=.172=.0289.

L 和 M 在概率上相关。

假设在某个晚上，男主角和女主角都严重生病。我们能推断出他们吃了有毒食物吗？根据上述概率，我们可以计算

p(T|L∩M)=.064.073≅.877.

虽然他们吃了有毒食物的可能性很大，但这并不是确定的。这个例子表明，单独的共同原因原理并不能授权令牌级的因果推断。也就是说，它并不能告诉我们当两个效应 A 和 B 在特定场合发生时，它们的共同原因 C 也在这个场合发生。相反，共同原因原理授权从概率相关性推断出类型级共同原因的存在。

示例 3. 语言衍生。

英语中以字母‘F’开头的常见词汇通常在西班牙语中有以字母‘P’开头的对应词汇：‘foot’/‘pie’，‘fish’/‘pez’，‘father’/‘padre’等等。可以通过查看两种语言的规范词汇列表，并观察英语中以‘F’开头的词汇和西班牙语中以‘P’开头的词汇的频率来量化这一点。通过将该列表中的相对频率视为概率，可以发现英语词汇的初始‘F’和西班牙语词汇的初始‘P’确实存在概率相关性。

这种相关性的解释是英语和西班牙语都源自一种称为原始印欧语的共同语言。原始印欧语中的一些词汇以我们可以标记为 [P/F] 的辅音开头，这些辅音在罗曼语系（包括西班牙语）中演变为‘P’，在日耳曼语系（包括英语）中演变为‘F’。（注意，这里感兴趣的是语音发音，而不是拼写；例如，许多德语单词的拼写以‘V’开头，但在这个目的上也被计入。）在从原始印欧语到英语和西班牙语的分支中，一些词汇保留了原始印欧语的词根，而其他词汇则进行了替换。这些词根被保留的频率足够高，以至于这种相关性仍然可以被检测到。此外，在从原始印欧语分裂出来后，这两个分支的演变基本上是相互独立的。请注意，共同原因不是原始印欧语作为一个整体，效应也不是英语和西班牙语。将概率分配给这些语言（更不用说将联合概率分配给英语和西班牙语）是没有多大意义的。相反，共同原因是原始印欧语中的一个初始辅音 [P/F]，效应是英语中的初始‘F’和西班牙语中的初始‘P’。将概率分配给这些音素是有意义的，因为我们可以计算这些语言中以这些音素开头的词汇的频率。请参见图 4。

![The phrase 'PIEP/F' with an arrow pointing from it up and to the left to the phrase 'English F' and another arrow pointing up and to the right to the phrase 'Spanish P'](https://plato.stanford.edu/entries/physics-Rpcc/figure4.svg)

图 4：英语中以辅音‘F’开头的单词和西班牙语中以辅音‘P’开头的单词，从原始印欧语中以辅音 [P/F] 开头的单词演变而来。

注意，这两种语言之间共同衍生的证据是这两种音之间的相关性，而不是它们之间的语音相似性。例如，拉丁语‘du’和亚美尼亚语‘erk’之间存在一个公认的相关性，如‘duo’/‘erku’（‘两个’）。尽管这些音之间存在差异，但相关性是共同衍生的证据（它们都是印欧语系语言）。

有关这个例子的进一步讨论，请参见 Hitchcock（1998）。

 示例 4. 炸鱼。

英国人和日本人都吃过用油炸过的裹着面糊的海鲜：英国人吃炸鱼和薯条，日本人吃天妇罗。裹面糊和油炸海鲜的技术似乎起源于 13 世纪的伊比利亚半岛的摩尔人，那道菜被称为 mu’affar。它传播到西班牙和葡萄牙的犹太人和基督徒居民中。在 16 世纪，逃离迫害的西班牙犹太人将这个食谱带到了英国，葡萄牙商人将其带到了日本。

虽然将 mu’affar 称为炸鱼和薯条以及天妇罗的共同原因可能是合理的，但这不是共同原因原理的一个实例。在这个例子中没有涉及概率，也没有明确的意义上英国人和日本人都吃炸海鲜是一种概率相关性。也许可以构建一个全球食品分布的概率模型来提供这样的概率，但在没有这样的模型的情况下，我们没有 RCCP 的一个实例。

## 5. （假设的）反例

许多作者提出了对共同原因原理的反例。一个反例将涉及两个事件 A 和 B，使得

* A 和 B 在概率上相关，
* 两个事件互不是彼此的原因，且
* A 和 B 之间的相关性不能通过共同原因来解释，要么是因为它们没有共同原因，要么是因为它们的共同原因不能将它们隔离开来。

通常被认为违反共同原因原理的一种情况是量子力学中的纠缠态，例如在爱因斯坦-波多尔斯基-罗森（EPR）思想实验中发现的那些。我们将在下面的第 10 节中详细讨论这种情况。本节将考虑其他几个例子。正如我们将看到的，这些例子通常引发对共同原因原理的适当范围和解释的问题，而不是直接驳斥该原理。

示例 5. 卡特赖特的工厂。

卡特赖特（1999 年：108-109）要求我们想象一个生产用于污水处理的化学品 C 的工厂。该工厂采用真正的不确定性过程，因此当过程启动时，存在 0.8 的概率产生化学品。然而，每当化学品被生产出来时，工厂也会释放一种污染物 P 作为副产品。因此，

.8=p(C∩P|I)>p(C|I)p(P|I)=.64

既不是 C 也不是 P 导致了另一个。

Glymour（1999）反对这样一个工厂是无处可寻的。这引发了对共同原因原理地位的质疑。如果这个原理旨在成为关于因果关系和概率之间关系的概念真理，那么我们可以通过展示违反该原理的因果结构可以被清晰地构想来削弱该原理。另一方面，如果这个原理旨在成为关于因果关系和概率在实际世界中关系的经验概括，那么 Glymour 要求更多的不仅仅是一个假设性的例子是正确的。

 例子 6. 随机飞镖。

假设使用一个不确定性的过程向飞镖靶射击，该过程可以击中靶板的任何部分。（如果读者对不确定性的飞镖不太熟悉，可以想象光子通过一个狭缝后击中闪烁屏幕。）假设 A 和 B 是靶板上的两个区域，其中 A 完全包含在 B 内，而 B 并不填满整个靶板（见图 5(a)）。让 A 表示飞镖落在 A 区域的事件，B 类似地表示飞镖落在 B 区域的事件。那么我们有：

 p(A∩B)=p(A)>p(A)p(B)。

这是因为 A∩B=A 且 p(B)<1。虽然投掷飞镖（或发射飞镖的任何过程）是 A 和 B 的共同原因，但这不会使它们被屏蔽。如果这个过程真正是不确定性的，那么就不会有屏蔽它们的原因。

![Two large circles, the dartboards, one is a and the other b Dartboard a, has two concentric circles in it with the inner labeled 'A' and the outer labeled 'B' Dartboard b has two mostly overlapping circles in it with the left one labeled 'A' and the right one 'B'](https://plato.stanford.edu/entries/physics-Rpcc/figure5.svg)

图 5：大圆代表飞镖靶。圆 A 和圆 B 是飞镖靶的区域。在（a）中，区域 A 完全包含在区域 B 内。在（b）中，这些区域几乎（但并非完全）重叠。

大卫·刘易斯（David Lewis）曾试图通过反事实条件来分析因果关系（Lewis 1973）。他意识到，为了使他的理论成功，他需要将分析限制在不同事件之间的反事实关系上（尤其是参见 Lewis 1986）。例如，我们在本段开头附近输入了“Lewis”这个词。如果我们没有输入 L-e-w 这几个字母，那么我们就不会输入“Lewis”这个词。但是输入 L-e-w 并没有导致我们输入“Lewis”。输入 L-e-w 是输入“Lewis”的一部分。输入 L-e-w 和输入“Lewis”这两个事件在适当的方式上并不是彼此独立的，不能相互承担因果关系。刘易斯对于独立性的解释有些复杂，但它明确排除了逻辑蕴涵和时空包含的关系。

看起来，共同原因原理对于不同事件也需要类似的限制。在我们的飞镖靶示例中，区域 A 在区域 B 内部空间上包含；因此，事件 A 和事件 B 在刘易斯的意义上并不是独立的。这意味着这些事件之间可能存在完全由它们的时空关系引起的相关性，并且没有任何独特的因果基础。

现在假设区域 A 和 B 几乎完全重叠，但是它们互不包含（见图 5(b)）。同样，相应的事件 A 和 B 将会相关，并且早期的共同原因可能无法将它们隔离开来。（Arntzenius（1999 [2010：第 2.4 节]）有一个基本上具有这种结构的例子。）似乎这种情况也是 A 和 B 事件不够明显的情况之一。但是现在很难制定一个足够普遍的明显性概念，而不排除太多内容。为了看清问题，想象一下，我们不是用一个字面上的飞镖板，而是用一个表示系统可能状态的 Venn 图来表示系统的可能状态。空间区域 A 和 B 现在表示可能状态的集合，对应于事件 A 和 B 发生的状态。而面积对应于概率。因此，A 发生的状态集合几乎完全与 B 发生的状态集合重叠，根据状态的概率分布来衡量。这是否意味着 A 和 B 不是不同的？最好不是，因为这只是事件 A 和 B 在概率上相关的一般情况的表示。因此，明确工作中明显性的精确概念仍然是一个挑战。

例子 7. 保守量。

沙门（1984 年）和舒尔茨（2017 年）认为，由概率动力学和守恒定律控制的系统将导致共同原因原理的违反。假设一个重量为 2 千克的砖块掉在一个坚硬的尖锐表面上。砖块破裂并分成两块，A 和 B。假设这个过程是真正的偶然的。也许砖块击中表面的精确点，或者砖块的破裂过程，不是由系统先前状态决定的。让 A 表示 A 块重量为某个特定值，比如 1.2 千克，让 B 表示 B 块重量为补充值，比如 0.8 千克。由于总质量必须为 2 千克，只有当 B 发生时，A 才会发生。由于过程是偶然的，p(A)=p(B)=r<1。然而，

p(A∩B)=r>r2=p(A)p(B),

所以 A 和 B 是相关的。除非先前事件确定 A 和 B 将发生，否则没有早期事件可以屏蔽这种相关性。由于过程是真正的偶然的，没有这样的事件。因此，共同原因原理被违反。

无论是否存在由概率动力学和守恒定律所管理的实际过程，决定了是否存在具有这种形式的 RCCP 的实际违规行为。我们在经典物理学中没有找到描述这样的过程。在量子力学中，我们已经遇到了这种组合，至少在某些解释中（所谓的坍缩解释）。然而，这些情况还进一步复杂化了量子纠缠的作用。我们在下面的第 9 和第 10 节中更详细地讨论了量子力学中共同原因原理的地位。

 示例 8. 时间序列。

Sober（2001）指出，威尼斯的海平面和伦敦的面包价格在过去几个世纪都在上升。让 V 表示威尼斯的海平面高于某个指定水平，L 表示伦敦的面包价格高于某个标记。如果我们随时间对威尼斯的海平面和伦敦的面包价格进行采样，我们会发现 V 和 L 之间存在相关性：在 V 发生的年份，L 也往往发生（因为这些年份往往是最近的年份）。然而，我们没有理由认为这些现象有共同的原因。它们似乎是因果独立的。

要理解这个例子中发生的情况，我们需要更仔细地观察样本统计量和潜在概率分布之间的关系。我们经常用经典的瓮模型来思考这个问题。一个瓮中含有一定比例的黑球和白球。我们从瓮中抽取球，并利用抽到的黑球的频率来估计瓮中黑球的比例。通常情况下，使用统计频率来估计概率需要假设样本在概率上是独立的：抽到一个黑球不会影响下一个球是黑球的概率。Sober 的例子涉及统计学家所称的时间序列。当我们在多年的时间内对威尼斯海平面进行抽样时，我们并不是从一个稳定的概率分布中抽取独立的样本。如果某一年海平面较高，我们可以预测下一年海平面也会较高（它们往往在连续的两年之间不会发生剧烈变化）。因此，我们不能将所获得的相对频率解释为对潜在概率分布的估计。因此，即使我们的样本中存在 V 和 L 之间的相关性，也无法将其解释为具有 p(V∩L)>p(V)p(L)的概率相关性。并非所有统计样本中的相关性都意味着概率相关性。（有关 Sober 的例子的进一步讨论，请参见 Hoover 2003 和 Steel 2003。）

这种对共同原因原理的辩护引发了一个担忧。然而，我们希望应用共同原因原理的许多情况也可能表现出时间序列的行为。例如，考虑赖兴巴赫关于旅行剧团的例子（上面的例子 2）。合理地预期，如果主演某一天生病，那么他在接下来的一天更有可能生病——有些疾病持续时间超过一天。而且，如果他在某个时间接触到某种病原体，他可能会对该病原体获得免疫力。如果我们排除所有这样的例子，那么我们就有可能排除许多标准例子，这些例子本应支持这个原理。

## 6. 叉形不对称性

赖兴巴赫的《时间的方向》（1956）主要关注时间上的非对称现象。其中大部分工作致力于热力学第二定律的地位，该定律指出在一个封闭系统中，熵可以增加但永远不会减少。但赖兴巴赫还试图使用共同原因原理来定义宏观统计的不对称性。假设事件 A 和 B 是相关的，即 p(A∩B)>p(A)p(B)。如果存在一个事件 C 满足上述条件（2）-（5），赖兴巴赫称三元组 ACB 为连结叉。如果 C 发生在 A 和 B 之前，并且没有满足条件（2）-（5）的事件发生在 A 和 B 之后，那么 ACB 被称为形成一个对未来开放的连结叉（见图 6(a)）。

![a diagram link to extended description below](https://plato.stanford.edu/entries/physics-Rpcc/figure6.svg)

图 6：（a）向未来开放的连接分叉。（b）向过去开放的连接分叉。（c）闭合分叉。[图 6 的详细描述在补充材料中。]

类似地，如果存在一个满足（2）-（5）的较晚事件，但没有较早的事件，我们就有一个向过去开放的连接分叉（图 6（b））。如果较早的事件 C 和较晚的事件 D 都满足（2）-（5），那么 ACBD 形成一个闭合分叉（图 6（c））。赖兴巴赫声称，在我们的世界中，有很多向未来开放的分叉，但几乎没有向过去开放的分叉。此外，他提出，因果关系的方向可以建立在这种统计不对称性的基础上。

赖兴巴赫将他的分叉不对称性视为热力学第二定律的宏观统计类比。假设我们有一个由大量粒子组成的气体系统。每个粒子可以处于许多可能的状态 s1，...，sn 之一。令 pi 表示处于状态 si 的粒子的比例。那么系统的熵的一个表达式是 S=−∑ipilog(pi)。当粒子在 n 个状态之间均匀分布（或在系统约束条件下尽可能均匀分布）时，这个和将达到最大值。热力学第二定律规定，一个封闭系统的熵可以增加但永远不会减少；因此它将朝着最大熵的状态演化。赖兴巴赫声称，如果我们发现一个处于低熵状态的封闭系统，我们可以推断它是在被隔离于环境之前最近准备好的。

现在假设我们有两个事件 A 和 B，以及一个概率分布 p，它涵盖了四个状态 AB，A¯¯¯¯B，¯¯¯¯AB，¯¯¯¯A¯¯¯¯B。我们可以将熵的公式应用于这个概率分布；在保持 A 和 B 的概率不变的情况下，当 A 和 B 在概率上是独立的时候，熵最高。因此，当我们发现 A 和 B 之间存在相关性时，就好像发现了一个处于低熵状态的系统，我们应该寻找 A 和 B 过去发生的某个事件来解释这种相关性。这只是一个形式上的类比，但赖兴巴赫试图表明，导致热力学第二定律的基本原理也会导致共同原因原理。有关更多讨论，请参见时间中的热力学不对称条目。

赖兴巴赫的叉子不对称性遭到了许多批评。霍里奇（1987）认为，我们推断过去的相互作用往往与熵无关。我们可以从一堆废墟中推断出一座城市遭到了轰炸。废墟对应的熵比完好无损的建筑物要高；但正是前者而不是后者，让我们推断出与城市发生了某种类型的相互作用。

![a diagram link to extended description below](https://plato.stanford.edu/entries/physics-Rpcc/figure7.svg)

图 7：S 是整个状态空间。显示了 S 的三个副本，对应于时间 0，t 和 t'>t。如果系统在时间 0 处于状态 s，那么它将在时间 t 处于状态 Ut(s)，在时间 t'处于状态 Ut'(s)。与事件 C 对应的状态集将演变为 Ut(C)和 Ut'(C)。[图 7 的详细描述在补充材料中。]

Arntzenius（1990）指出，在赖兴巴赫所工作的经典统计力学背景下，叉形不对称性是非常棘手的。设 S 是包含物理系统所有可能状态的状态空间（见图 7）。系统在特定时间 t 的状态将涉及参数的规定，例如系统中所有粒子的位置和动量。系统以确定性方式演化，因此对于每个时间 t，如果系统在时间 0 处于状态 s，则在时间 t 处将处于状态 Ut(s)，其中每个 Ut 是从 S 到自身的一对一函数。事件 C 对应于 S 的子集：C 发生的状态集。然后，我们可以定义 Ut(C)为形式为 Ut(s)的状态集，其中 s∈C。

然后，可以将时间 0 处的概率函数 p 扩展为通过 S 的轨迹的概率分布，从而为以后的事件提供概率。

假设 C 在时间 0 发生，A 和 B 在较晚的时间 t 发生。此外，假设 ACB 形成一个连结叉。然后，我们可以将 C 中的微观状态向前演化到时间 t′>t。然后，D=Ut′(C)将在 A 和 B 之后发生，但与 A 和 B 具有相同的概率关系（见图 8）。因此，ACBD 将形成一个封闭叉。由于这个方法是完全通用的，似乎每个连结叉 ACB，其中 C 早于 A 和 B，必须属于一个封闭叉 ABCD。

![a diagram link to extended description below](https://plato.stanford.edu/entries/physics-Rpcc/figure8.svg)

图 8：时间 t'的事件 D 是从时间 0 演化 C 到时间 t'的结果。它与时间 t 的事件 A 和 B 之间将保持相同的概率关系，就像 C 在时间 0 时一样。[图 8 的详细描述在补充中。]

对于这个担忧的自然回应是提出，较早的状态集 C 将足够一致，形成一个自然事件，而较晚的状态集 D 将是一个异质的集合，除了它们都是从 C 演化而来之外没有任何共同之处。这样一个异质的状态集合不符合事件的资格——参见，例如，Lewis（1986）对什么是真正事件的讨论。因此，存在一个较早的事件，屏蔽了 A 和 B，但没有后续事件这样做。然而，统计力学的框架并没有给我们提供一个有理由认为在所有这种情况下，较早的屏蔽事件将足够一致以成为一个合适的事件，而后来的屏蔽者则不会。此外，Arntzenius（1990）提供了一个使这个提议明确化的方式的反例。

我们还将在第 7 节中看到，现代因果建模理论不使用连词分叉来确定因果关系的方向，而是使用一种概率模式，它实质上与连词分叉完全相反。

## 7. 因果马尔可夫条件

赖兴巴赫的共同原因原理与因果建模中常用的因果马尔可夫条件密切相关。因果马尔可夫条件的一个版本最早由 Kiiveri、Speed 和 Carlin（1984）提出。Pearl（2009）和 Spirtes、Glymour 和 Scheines（2000）开发了具有因果马尔可夫条件的详细因果建模程序。

我们在这里只描述一种因果模型，即因果贝叶斯网络。因果贝叶斯网络使用有向无环图（DAG）来表示一组变量之间的因果关系，并将其与一组变量的概率分布配对。更准确地说，因果贝叶斯网络是一个三元组（V，G，p），其中 V 是一组变量，G 是 V 上的有向无环图，p 是由 V 生成的事件域上的概率分布。V 中的变量对应于某个人群中个体的属性。例如，在美国成年人群中，我们可能有代表个体教育水平、工作经验和目前收入的变量。变量可以是二进制的，表示某个属性的存在或不存在，但也可以是多值的或连续的。

G 是 V 中变量的有序对集合。如果（X，Y）∈G，则我们通过从 X 到 Y 绘制箭头来图形化表示，并且我们说 X 是 Y 的父节点。如果从 X1 到 X2，从 X2 到 X3，...，从 Xn−1 到 Xn 有箭头，则存在从 X1 到 Xn 的有向路径。在这种情况下，我们说 Xn 是 X1 的后代。如果没有从任何变量到自身的有向路径，则 G 是无环的。图 9 显示了变量集合{U，V，W，X，Y，Z}上的有向无环图。在这个有向无环图中，有一条从 U 到 Z 的有向路径，Z 是 U 的后代。PA（X）是 X 的所有父节点的集合，ND（X）是 V 中除 X 及其后代之外的所有变量的集合。在图 9 中，PA（W）= {U，V}，ND（W）= {U，V，X}。

有向无环图表示了相关人群中变量之间的定性因果结构。特别地，从 X 到 Y 的箭头表示 X 对 Y 的因果影响不通过集合中的其他变量进行中介。在这种情况下，我们说 X 是 Y 的直接原因。

![a diagram link to extended description below](https://plato.stanford.edu/entries/physics-Rpcc/figure9.svg)

图 9：变量集合{U，V，W，X，Y，Z}上的有向无环图。PA（W）= {U，V}是 W 的父节点集合，ND（W）= {U，V，X}是 W 的非后代集合。[图 9 的详细描述在补充材料中。]

因果马尔可夫条件将图 G 与由变量生成的代数上的概率分布 p 连接起来。它表明 p 必须展示出由图所暗示的特定的条件概率独立关系。在 G 是有向无环图(DAG)的特殊情况下，以下三种形式的因果马尔可夫条件是等价的：

1. **因果马尔可夫条件：屏蔽版本。**

对于每个变量 X 在 V 中，以及每个变量集合 Y⊆ND(X)：

p(X|PA(X)∩Y)=p(X|PA(X))

我们采用一种符号约定，其中涉及变量的陈述被理解为涉及对这些变量的值（或可测量值的集合）的普遍量化。这个版本的因果马尔可夫条件表明，变量 X 的父节点将 X 与除 X 本身和 X 的后代之外的所有其他变量隔离开来。在给定 X 的父节点变量的值的情况下，Y 中的变量的值对 X 将采取任何给定值的概率没有进一步的影响。这个版本的因果马尔可夫条件在形式上最接近赖兴巴赫的共同原因原理，尽管它是以 X 的父节点而不是 X 和 Y 的共同原因的形式来表述的。

2. **因果马尔可夫条件：分解版本。**

让 V={X1,X2,…,Xn}。那么：

p(X1∩X2∩⋯∩Xn)=∏ip(Xi|PA(Xi))。

这个版本告诉我们，一旦我们知道每个变量在给定其父节点的条件下的条件概率分布 p(Xi|PA(Xi))，我们就可以计算出所有变量的完整联合分布。这捕捉了赖兴巴赫的观点，即概率相关性事件最终可以从因果关系导致的概率相关性推导出来。

3. **因果马尔可夫条件：d-分离版本。**

设 X、Y 和 Z 是 V 的不相交子集。则：

p(X∩Y|Z)=p(X|Z)×p(Y|Z)

如果在 G 中，Z d-分离 X 和 Y。

这个版本引入了图形化的 d-分离概念。从 X 到 Y 的路径是一个变量序列（X=X1,…,Xk=Y），对于每个 Xi 和 Xi+1，在 G 中要么有从 Xi 到 Xi+1 的箭头，要么有从 Xi+1 到 Xi 的箭头。例如，在图 9 中，{U,Y,W,V,X}形成了一条路径。变量 Xi，1<i<k 是路径上的碰撞器，当且仅当有从 Xi−1 到 Xi 和从 Xi+1 到 Xi 的箭头。换句话说，Xi 是一个碰撞器，当且仅当路径上的箭头汇聚在 Xi 上：

Xi−1→Xi←Xi+1.

在图 9 中，Y 是路径{U,Y,W,V,X}上的一个碰撞器。让 X、Y 和 Z 是 V 的不相交子集。当且仅当从 X 到 Y 的每条路径(X1,...,Xk)中至少包含一个变量 Xi，其中要么：(i) Xi 是一个碰撞器，且 Xi 及其任何后代都不在 Z 中；或者(ii) Xi 不是一个碰撞器，且 Xi 在 Z 中，Z d-分离 X 和 Y。在图 9 中，{U,V} d-分离{Y}和{X}。路径{Y,W,Z,X}在 Z 处有一个碰撞器，而从 Y 到 X 的所有其他路径都包含 U 或 V 作为非碰撞器。

因果马尔可夫条件意味着在第 2 节中介绍的 RCCP 的广义版本。使用 d-分离版本最容易看出。如果变量 X 和 Y 相关，则{X}和{Y}不被空集 d-分离。这意味着 X 和 Y 之间至少有一条没有碰撞器的路径。如果我们进一步假设两个变量都不是彼此的原因，则它们之间没有有向路径。因此，不含碰撞器的路径必须包含一个共同原因：一个变量 Z，它同时具有 X 和 Y 作为后代。此外，所有这些共同原因的集合 d-分离{X}和{Y}。（证明有点繁琐，因为一个路径上的共同原因可能是另一条路径上的碰撞器。）因此，X 和 Y 的所有共同原因将使它们相互隔离。

注意，因果马尔可夫条件告诉我们，某些因果结构会导致条件概率独立的关系。因果马尔可夫条件从不意味着概率依赖。为了进行因果推断，因果马尔可夫条件通常会被进一步的原则补充，以确定何时可以预期概率依赖。其中一个原则是忠实条件（Spirtes 等人，2000 年），它表示只有因果马尔可夫条件所蕴含的概率独立性才存在。换句话说，忠实条件表示当我们发现条件概率独立关系时，我们应该推断出一个蕴含该独立关系的因果结构，而不是不蕴含该关系的结构。

假设我们假设因果马尔可夫条件的一个理由是 Pearl 和 Verma（1991 年）的一个定理。假设我们有一个变量集合 V，以及表示 V 中变量之间因果关系的有向无环图 G。此外，假设 V 中每个变量 X 的值是其父节点在 V 中的确定性函数，再加上一个误差变量 UX，表示未包含在 V 中的任何变量的影响。换句话说，X=fX(PA(X),UX)。然后，所有误差变量的值将唯一确定 V 中所有变量的值，并且概率分布 p∗ 在误差变量上引起了 V 中的概率分布 p。如果 p∗ 中的误差变量是独立的，那么引起的概率分布 p 将满足相对于 G 的因果马尔可夫条件。这个想法是，如果我们在 V 中包含足够多的变量，以使任何剩余的因果影响在概率上相互独立，那么 V 上的概率分布将满足因果马尔可夫条件。

如果变量集合 V 是因果充分的，那么 V 中没有被省略的变量 W，如果将其添加到 V 中，它将成为 V 中两个变量的直接原因。在图 9 中，{U，W，Y}是因果充分的（假设原始有向无环图是），但{U，W，Y，Z}不是，因为 W 和 Z 有一个共同的原因 V，被省略在这个集合之外。

通常假设如果一个变量集合是因果充分的，那么误差变量将是概率独立的，并且在 V 上的概率分布将满足与真实因果图相关的因果马尔可夫条件。请注意，这个假设与共同原因原理本身非常相似。如果 X 和 Y 是包含在因果充分的有向无环图中的变量，并且 UX 和 UY 是它们对应的误差变量，那么 UX 和 UY 都不是对方的原因，并且它们没有共同的原因。如果它们有一个共同的原因，那么这将是 X 和 Y 的共同原因；如果 UX 是 UY 的原因，那么 UX 是 X 和 Y 的共同原因。因此，变量集合的因果充分性意味着 UX 和 UY 在因果上无关。共同原因原理将暗示它们在概率上是独立的。因此，说因果马尔可夫条件可以用来证明共同原因原理是不准确的：两者都涉及关于因果和概率之间关系的可比较的假设。

检查因果马尔可夫条件的 d-分离版本，我们可以看到不是共同原因而是碰撞器导致了独特的概率关系。假设我们有一个包含三个变量{X，Y，Z}的变量集合，并且概率分布 p 满足与真实因果图相关的因果马尔可夫条件。最后，假设 X 和 Z 是相关的，但被 Y 屏蔽。那么有三个不同的因果图都暗示了这组概率独立关系：

X→Y→ZX←Y←ZX←Y→Z

当然，这些中的最后一个是由赖兴巴赫所描述的共同原因结构。（然而，赖兴巴赫还假设中间原因会将远因与其效应隔离开来，如前两个图表所示。）另一方面，假设概率（不）独立的关系完全相反。也就是说：X 和 Z 在概率上是独立的，但在给定 Y 的条件下是相关的。在这种情况下，只有一种因果结构可以暗示这组概率独立关系：

X→Y←Z

实际上，从条件概率依赖和独立关系中推断因果结构的算法（例如 Spirtes 等人的 PC 算法（2000））通过搜索这种概率特征来进行。因此，赖兴巴赫在寻找连词分叉来定义因果方向时是错误的（见上文第 6 节）。他最好应该寻找共同原因。

## 8. 评估 RCCP 状态的相关共同原因的技术结果

一个经典的概率测度空间是一个三元组（X，S，p），其中 X 是基本随机事件的集合，S 是 X 的一些子集的布尔代数，p 是从 S 到单位区间 [0,1] 的可加概率测度。如果概率测度空间（X，S，p）中存在 S 中每个相关对（A，B）的共同原因 C，则称其为共同原因完备；否则称其为共同原因不完备。可以证明，共同原因（不）完备可以用概率测度空间的测度论（非）原子性来刻画：当且仅当（X，S，p）中最多包含一个测度论原子（Gyenis 和 Rédei 2011），则（X，S，p）是共同原因完备的。测度论原子是 S 中的一个元素 A0，使得 p（A0）≠0，并且如果 B⊂A0，则 p（B）=0。特别地，测度论纯非原子性概率测度空间（即不包含任何测度论原子的概率空间）是共同原因完备的（Gyenis 和 Rédei 2011；Hofer-Szabó 等人 2013；Marczyk 和 Wroński 2015）。测度论纯非原子性概率测度空间的一个例子是单位区间 [0,1] 上的均匀概率（勒贝格测度）与（勒贝格可测子集的）实数线上的概率测度，其中概率由相对于实数线上的勒贝格测度的密度函数给出。

一个共同原因不完备的概率空间 (X,S,p) 被称为共同原因可补全的，如果它可以嵌入到一个更大的概率空间 (X′,S′,p′) 中，该空间是共同原因完备的。将 (X,S,p) 嵌入到 (X′,S′,p′) 的方法是通过一个从 S 到 S′ 的可测代数同态 h，使得对于 S 中的所有 A，p′(h(A))=p(A)。可以证明，每个概率空间 (X,S,p) 都可以嵌入到一个纯非原子概率空间中。这意味着每个共同原因不完备的概率空间都是共同原因可补全的 (Gyenis & Rédei 2011; Hofer-Szabó et al. 2013; Marczyk & Wroński 2015)。

在量子理论中，人们使用非经典（量子）概率空间来描述量子物理系统。一个一般的量子概率空间是一个对(P(N),ϕ)的配对，其中 P(N)是一个非交换冯·诺依曼代数 N 的投影的正交补、正交模块格，ϕ 是 P(N)上的可数可加概率测度，它是 N 上的一个正常态的限制。Rédei＆Summers（2007a）以冯·诺依曼代数的术语提供了非交换概率论的简要描述；Landsman（2017）包含了量子理论相关的代数结构的百科全书式处理；SEP 关于量子理论和数学严谨性的条目对冯·诺依曼代数的一些基本事实进行了非常简要的非正式介绍，包括它们的 Murray-von Neumann 分类，这从共同原因原理的角度来看是相关的-请参见下文）。一个特殊的量子概率空间的例子是通过将所有有界算子 B(H)作为冯·诺依曼代数，ϕ 是由密度矩阵给出的量子态得到的。由此得到的具体量子概率空间(P(B(H)),ϕ)被称为量子力学的“希尔伯特空间形式”，该空间描述了有限自由度的量子系统。正交模块格 P(B(H))，通常表示为 P(H)，是 H 上的所有投影的集合，该格也被称为“希尔伯特格”。

在量子概率空间中，关于在 P(N)中的可交换投影 A、B 之间的相关性的概念，以及这种相关性的共同原因的概念，即与 A 和 B 都可交换的投影 C，并满足 Reichenbachian 条件（2）-（5）的（类似的）概念，在量子概率空间中是完全有意义的。在量子概率空间中，共同原因（不）完备性的概念、共同原因的可完备性（通过适当定义的正交模块格的嵌入）、测度论原子和测度论非原子性的概念也是如此。

可以证明，这样的量子概率空间的共同原因完备性可以用(P(N),ϕ)的测度论原子性来表征，与经典情况完全类似：如果(P(N),ϕ)最多包含一个测度论原子，则它是共同原因完备的（Kitajima 2008; Gyenis & Rédei 2014; Kitajima & Rédei 2015）。这意味着在测度论上纯非原子的量子概率空间是共同原因完备的。具体来说，具有 III 型或 II 型 von Neumann 代数 N 的量子概率空间(P(N),ϕ)是共同原因完备的，因为由这些类型的 von Neumann 代数定义的量子概率空间在测度论上是纯非原子的。量子概率空间(P(H),ϕ)不是纯非原子的，它包含许多测度论原子：所有秩一投影（等价地：由 H 中的向量张成的一维线性空间）都是 Hilbert 格的原子，因此在状态 ϕ 下被赋予非零概率的所有秩一投影也是(P(N),ϕ)中的测度论原子。因此，(P(H),ϕ)不是共同原因完备的。关于共同原因不完备的量子概率空间是否可以共同原因完备，目前尚不清楚；目前只有关于量子概率空间的共同原因可扩展性的结果可用：每个量子概率空间(P(N),ϕ)都可以嵌入到一个更大的量子概率空间(P(N′),ϕ′)中，以使(P(N),ϕ)中的每个相关性在(P(N′),ϕ′)中都有一个共同原因（Hofer-Szabó, Rédei, & Szabó 1999; 2013: 62, Proposition 6.3）。

(common cause completability and common cause extendability of (classical and quantum) probability spaces)的哲学意义在于它们表明，原则上总是可能解释任何相关性，因此也包括因果独立事件之间的任何相关性，这些相关性可以用（可能隐藏的）共同原因来解释——共同原因不一定在包含相关性的概率空间中，它们可以“隐藏”在更大的概率空间中。因此，这些共同原因的完备性和可扩展性结果限制了试图证伪共同原因原理的可能方式：任何试图证伪的尝试都应该对共同原因施加一些额外的条件，除了四个定义条件（2）-（5），否则可以通过引用隐藏的共同原因来逃避证伪。换句话说，以赖兴巴赫共同原因的概念为唯一表述的共同原因原理，无论是在经典概率理论还是量子概率理论中，都是不可证伪的。这并不意味着共同原因的可扩展性结果可以被视为证明共同原因原理为真的证据：即使是更弱的问题，即共同原因的可扩展性结果是否可以作为支持共同原因原理的证据，也取决于通过数学共同原因的可扩展性结果保证的扩展概率测度空间是否（部分地）是经验上确认的科学理论的一部分。

共同原因完备空间的重要性在于它们与共同原因原理显示出非常强的一致性：共同原因原理的等价表述是，描述世界的概率理论在因果上是封闭的，即如果 A 和 B 相关且在因果上是独立的（用符号表示为 Rind(A,B)），那么这种相关性必须有一个解释这种相关性的共同原因。共同原因完备空间在极强的意义上是因果封闭的，因果独立关系 Rind(A,B)可以被认为是最强的关系，包含了所有相关事件。因此，如果描述现实某个方面的科学理论使用的是在测度论上纯非原子的概率空间，这样的理论可以被视为支持共同原因原理的证据，因为该理论包含了所有相关性的共同原因，包括理论可能认为在因果上无关（独立）的事件之间的相关性。鉴于共同原因完备性、共同原因可完备性和共同原因可扩展性的解释，一个相关的问题是我们的经过充分证实的科学理论是否在因果上是封闭的或者具有共同原因的可扩展性。量子场论和标准非相对论量子力学是两个对这个问题进行了广泛分析的理论。

## 9. 量子场论和共同原因原理

相对论量子场论（参见量子场论条目）预测了在时空分离（因此在因果上独立）的时空区域中定位的可观测量之间的丰富相关性。这是量子场论中纠缠的普遍性和贝尔不等式的违背的结果，而后者比标准的非相对论量子力学更为引人注目（Summers 1997; Clifton & Halvorson 2001; Halvorson & Clifton 2000; 贝尔定理条目）。如果相对论量子场论在提供这些相关性的共同原因方面是因果封闭的，那么这个理论就是支持共同原因原理真实性的证据。

描述相对论量子场论的量子概率空间基于第 III 型冯·诺依曼代数（Haag 1992; Horuzhy 1986 [1990]; Araki 1993 [1999]; 量子场论条目），因此，这些量子概率空间在测度论上纯粹是非原子的。由于这种量子概率空间的共同原因完备性，可以得出在类空分离的可观测量之间存在共同原因的结论。然而，不能因此得出量子场论满足共同原因原理的结论，原因如下：量子场论中的可观测量明确与特定的时空区域相关联。因此，共同原因也应该要求属于特定的时空区域。给定一个在时空区域 V1 中定位的可观测量 A 和一个与 V1 类空分离的时空区域 V2 中定位的可观测量 B 之间的相关性，这种相关性的共同原因应该定位在一个区域 V 中，该区域位于时空区域 V1 和 V2 的类空分离的反向光锥的交集中。但是，量子场论的量子概率空间的纯非原子性并不意味着量子场的描述中存在这种共同原因的局部性。当在量子场论中对共同原因施加这种额外的局部性约束时，关于这些共同原因是否根据该理论存在成为一个非常非平凡的问题（Rédei 1997）。问题非常非平凡，以至于对它的答案仍然未知——量子场论的因果完备性的状态问题是一个未解之谜。

然而，众所周知，量子场论在较弱的意义上是因果完备的，其中包含在时空分离的区域 V1 和 V2 的反向光锥的并集（而不是交集）中定位的共同原因（Rédei＆Summers 2002, 2007b; Hofer-Szabó 等人 2013）。从逻辑上讲，相对论量子场论中共同原因原理的地位可能无法确定：已经证明了时空分离的可观测量之间的相关性丰富的量子场论是由公理（Haag-Kastler 公理化）定义的。这些公理可能过于薄弱，无法回答所有时空分离的可观测量之间是否存在适当定位的共同原因的问题。证明这样的独立结果将非常有趣。考虑到创建任何 Haag-Kastler 公理模型的困难程度，尝试这样的证明似乎也非常困难，因为它需要展示两个模型，一个模型中共同原因原理成立（具有适当定位的共同原因），另一个模型中不成立。

人们还可以考虑共同原因原理在离散（格点）量子场论中的地位问题。这是量子场论的简化模型，计算通常更容易进行。该理论的一个简化是局域可观测量的代数是有限维的。由这些可观测量确定的量子概率空间不是纯非原子性的，这就阻止了这些理论中存在共同原因（无论是局域的还是非局域的）（Hofer-Szabó＆Vecsernyés 2012a）。如果在量子情境中，允许共同原因与相关的可观测量不对易，则可以证明在格点量子场论中存在“非对易”的共同原因（Hofer-Szabó＆Vecsernyés 2012b，2013，2018）。人们还可以提出共同原因原理在范畴量子场论中的地位问题（Brunetti，Fredenhagen，＆Verch 2003; Rédei 2014a）。这需要用范畴量子场论中使用的概念来重新表述共同原因的概念，这在 Rédei（2014a）中完成。这就引出了关于适当重新表述的共同原因原理地位的一些具体问题。这些问题中的大多数是开放的 - 这是一个活跃的研究领域。

## 10. EPR 相关性和 RCCP

有限自由度的标准非相对论量子力学预测了著名的 EPR 相关性（请参见量子理论中的爱因斯坦-波多尔斯基-罗森论证条目），这些相关性已在复杂的物理测量中观察到（请参见贝尔定理条目）。这些相关性是在时空分离的事件之间（因此根据狭义相对论是因果无关的）。因此，它们可以作为评估共同原因原理地位的证据：如果共同原因原理正确描述了物理世界，这些 EPR 相关性应该有共同原因。

预测 EPR 相关性的量子概率空间不包含这些相关性的共同原因，因为这个量子概率空间是在有限维希尔伯特空间上定义的，而这样的量子概率空间不是纯非原子的，因此不是共同原因完备的。关于这种相关性是否存在“隐藏”的共同原因的问题已经在大量文献中广泛讨论过。第一次非正式讨论似乎是冯·诺伊曼在 1935 年写给薛定谔的信中（冯·诺伊曼 2005：211-213）。在这封信中，冯·诺伊曼认为，只要能找到一个共同原因，包括 EPR 类型的量子相关性在内的任何相关性都不成问题，尽管冯·诺伊曼并没有使用“共同原因”这个术语，也没有明确定义任何共同原因的概念（Rédei 2006）。关于 EPR 相关性的共同原因的第一个技术上明确的无法存在定理是由范弗拉森（1982）提出的。然而，在这篇论文中，假设一个单一的共同原因解释了不同的相关性，即共同原因是共同的共同原因。然而，事实证明，在经典概率测度空间中，对于每个相关对（Ai，Bi），要求存在一个共同原因 Ci 的存在比要求存在一个单一的 C，它是所有相关对（Ai，Bi）（i=1,2，…）的共同原因，要弱得多：可以给出经典概率测度空间中不同相关性的例子，这些相关性不能有相同的共同原因（Hofer-Szabó，Rédei，& Szabó 2002）。因此，如果要推导出关于 EPR 相关性的共同原因存在的无法存在命题，那么要么必须认为 EPR 情况中的不同相关性应该有相同的共同原因，要么必须对共同原因施加进一步的条件，除了 Reichenbach 的定义（2）-（5）中的条件。

这种附加条件有两种类型，都是由 EPR 场景的特定特征所激发的：“局部性条件”和表达所谓“无阴谋”的要求。此外，局部性和无阴谋都有两种变体：表面和隐藏的局部性条件一方面，以及弱和强的无阴谋条件另一方面。表面局部性条件的内容是“...EPR 相关实验中一侧的结果的概率无论在 EPR 实验的另一侧的测量方向如何进行都是相同的。”（Hofer-Szabó 等人 2013 年：143）。隐藏的局部性条件要求

> ...在给定 EPR 相关实验的一对相关结果的情况下，如果这种相关的假设共同原因也发生了，那么 EPR 相关实验的一侧的结果的概率无论在 EPR 实验的另一侧的测量方向如何进行都是相同的。（Hofer-Szabó 等人 2013 年：144）。
>
> 弱无阴谋条件要求，在 EPR 实验设置的任何一侧决定进行测量的方向的选择在概率上独立于解释所选择方向的假设共同原因。强无阴谋条件要求，在 EPR 实验的两侧测量方向的任何布尔组合在概率上独立于任何假设共同原因的布尔组合。（Hofer-Szabó 等人 2013 年：178）。

不同版本的地方性和无阴谋条件之间的差异在概念上是显著的，从是否可以通过不可行定理排除 EPR 相关的假设共同原因的角度来看，它们也是至关重要的：表面地方性条件是经验可验证的，因为其中涉及的所有事件都是可观察的。隐藏的地方性条件涉及未观察到的假设共同原因事件，因此，这些地方性条件在没有观察到共同原因的情况下是不可独立测试的。对于无阴谋条件的解释在某种程度上存在争议：如果共同原因不仅影响 EPR 相关实验的结果，还影响 EPR 实验中特定方向的测量选择，那么它被认为是自然界中不可信的阴谋。我们认为这些选择是自由的，取决于实验者的决定。

可以证明，满足表面地方性的 EPR 相关的弱非阴谋共同原因解释是可能的。但是，被排除的 EPR 相关的强非阴谋、隐藏的本地共同原因解释(Hofer-Szabó 等人，2013: 152, 163)。这些结果表明，EPR 相关不能被视为严格的经验证据反对共同原因原理，因为可以排除的共同原因类型根据假设具有不可经验测试的特征（隐藏的地方性和无阴谋）-它们具有形而上学的性质。

## 11. 进一步阅读

其他关于赖兴巴赫的共同原因原理的概述还包括 Salmon（1984）的第 6 章和 Arntzenius（1999 [2010]），这是本条目的先前版本。关于汉斯·赖兴巴赫的条目提供了赖兴巴赫哲学的概述。赖兴巴赫的概率因果理论在因果关系、概率论的条目中进行了讨论。与热力学中的时间不对称有关的问题在时间中的热力学不对称的条目中进行了讨论。因果马尔可夫条件在因果模型的条目中进行了更详细的讨论。这本百科全书包含了许多与量子力学相关的哲学问题的条目。特别相关的是量子理论中的爱因斯坦-波多尔斯基-罗森论证、量子理论中的哲学问题、量子逻辑和概率论以及量子力学。

最近关于共同原因原理的书籍包括 Hofer-Szabó 等人（2013）和 Wroński（2014）。对共同原因原理的进一步讨论包括 Arntzenius（1990, 1992）；Cartwright（1988）；Van Fraassen（1982b）；Gyenis 和 Redei（2011, 2014）；Henson（2005）；Hofer-Szabó 等人（1999, 2002）；Marczyk 和 Wroński（2015）；Mazzola（2012, 2013）；Mazzola 和 Evans（2017）；Rédei（2014b）；San Pedro（2008）；Sober（1984, 1988, 1989, 2008）；Spohn（1994）；Suppes（1970, 1984）；Uffink（1999）；和 Wroński（2010）。

对共同原因原理的反例讨论可在 Cartwright（1994, 2007）；Hoover（2003）；Sober（2001）；和 Steel（2003）中找到。

在量子理论的背景下讨论 RCCP 的文献包括 Butterfield（1989，2007）；Chang 和 Cartwright（1992）；Kowalski 和 Placek（1999）；Penrose 和 Percival（1962）；Placek（2000a，b）；van Fraassen（1982a，1991）；Wüthrich（2004）；以及 Wiseman 和 Cavalcanti（2017）。

<!--md-padding-ignore-begin-->
## Bibliography

* Araki, Huzihiro, 1993 [1999], *Ryoshiba no Suri*, Toykyo: Iwanami Shoten. Translated as *Mathematical Theory of Quantum Fields*, Ursula Carow-Watamura (trans.), (International Series of Monograps in Physics 101), Oxford: Oxford University Pressm 1999.
* Arntzenius, Frank, 1990, “Physics and Common Causes”, *Synthese*, 82(1): 77–96. doi:10.1007/BF00413670
* –––, 1992, “The Common Cause Principle”, *PSA: Proceedings of the Biennial Meeting of the Philosophy of Science Association*, 1992(2): 227–237. doi:10.1086/psaprocbienmeetp.1992.2.192838
* –––, 1999 [2010], “Reichenbach’s Common Cause Principle”, *The Stanford Encyclopedia of Philosophy*, (Fall 2010 Edition), Edward N. Zalta (ed.), URL = <[Reichenbach's Common Cause Principle (Stanford Encyclopedia of Philosophy/Fall 2010 Edition)](https://plato.stanford.edu/archives/fall2010/entries/physics-Rpcc/)> This is an earlier version of this entry.
* Brunetti, Romeo, Klaus Fredenhagen, and Rainer Verch, 2003, “The Generally Covariant Locality Principle—A New Paradigm for Local Quantum Field Theory”, *Communications in Mathematical Physics*, 237(1): 31–68. doi:10.1007/s00220-003-0815-7
* Butterfield, Jeremy, 1989, “A Space-Time Approach to the Bell Inequality”, in Cushing and McMullin 1989: 114–144.
* Butterfield, Jeremy, 2007, “Stochastic Einstein Locality Revisited”, *The British Journal for the Philosophy of Science*, 58(4): 805–867. doi:10.1093/bjps/axm034
* Cartwright, Nancy, 1988, “How to Tell a Common Cause: Generalizations of the Conjunctive Fork Criterion”, in *Probability and Causality*, James H. Fetzer (ed.), Dordrecht: Springer Netherlands, 181–188. doi:10.1007/978-94-009-3997-4_8
* –––, 1994, *Nature’s Capacities and Their Measurement*, Oxford: Oxford University Press. doi:10.1093/0198235070.001.0001
* –––, 1999, *The Dappled World: A Study of the Boundaries of Science*, Cambridge: Cambridge University Press. doi:10.1017/CBO9781139167093
* –––, 2007, *Hunting Causes and Using Them: Approaches in Philosophy and Economics*, Cambridge: Cambridge University Press. doi:10.1017/CBO9780511618758
* Chang, Hasok and Nancy Cartwright, 1993, “Causality and Realism in the EPR Experiment”, *Erkenntnis*, 38(2): 169–190. doi:10.1007/BF01128978
* Clifton, Rob and Hans Halvorson, 2001, “Entanglement and Open Systems in Algebraic Quantum Field Theory”, *Studies in History and Philosophy of Science Part B: Studies in History and Philosophy of Modern Physics*, 32(1): 1–31. doi:10.1016/S1355-2198(00)00033-2
* Cushing, James T. and Ernan McMullin (eds.), 1989, *Philosophical Consequences of Quantum Theory: Reflections on Bell’s Theorem*, (Studies in Science and the Humanities from the Reilly Center for Science, Technology, and Values 2), Notre Dame, IN: University of Notre Dame Press.
* Fraassen, Bas C. van, 1982a, “The Charybdis of Realism: Epistemological Implications of Bell’s Inequality”, *Synthese*, 52(1): 25–38. doi:10.1007/BF00485253
* –––, 1982b, “Rational Belief and the Common Cause Principle”, in *What? Where? When? Why?*, Robert McLaughlin (ed.), Dordrecht: Springer Netherlands, 193–209. doi:10.1007/978-94-009-7731-0_9
* –––, 1991, *Quantum Mechanics: An Empiricist View*, Oxford: Oxford University Press. doi:10.1093/0198239807.001.0001
* Glymour, Clark, 1999, “Rabbit Hunting”, *Synthese*, 121(1/2): 55–78. doi:10.1023/A:1005229730590
* Gyenis, Zalán and Miklós Rédei, 2011, “Characterizing Common Cause Closed Probability Spaces*”, *Philosophy of Science*, 78(3): 393–409. doi:10.1086/660302
* –––, 2014, “Atomicity and Causal Completeness”, *Erkenntnis*, 79(S3): 437–451. doi:10.1007/s10670-013-9456-1
* Haag, Rudolf, 1992, *Local Quantum Physics: Fields, Particles, Algebras*, Berlin and New York: Springer Verlag.
* Halvorson, Hans and Rob Clifton, 2000, “Generic Bell Correlation between Arbitrary Local Algebras in Quantum Field Theory”, *Journal of Mathematical Physics*, 41(4): 1711–1717. doi:10.1063/1.533253
* Henson, Joe, 2005, “Comparing Causality Principles”, *Studies in History and Philosophy of Science Part B: Studies in History and Philosophy of Modern Physics*, 36(3): 519–543. doi:10.1016/j.shpsb.2005.04.003
* Hitchcock, Christopher, 1998, “The Common Cause Principle in Historical Linguistics”, *Philosophy of Science*, 65(3): 425–447. doi:10.1086/392655
* Hofer-Szabó, Gábor, Miklós Rédei, and László E. Szabó, 1999, “On Reichenbach’s Common Cause Principle and Reichenbach’s Notion of Common Cause”, *The British Journal for the Philosophy of Science*, 50(3): 377–399. doi:10.1093/bjps/50.3.377
* –––, 2002, “Common-Causes Are Not Common Common-Causes”, *Philosophy of Science*, 69(20): 623–636. doi:10.1086/344625
* –––, 2013, *The Principle of the Common Cause*, Cambridge: Cambridge University Press. doi:10.1017/CBO9781139094344
* Hofer-Szabó, Gábor and Péter Vecsernyés, 2012a, “Reichenbach’s Common Cause Principle in Algebraic Quantum Field Theory with Locally Finite Degrees of Freedom”, *Foundations of Physics*, 42(2): 241–255. doi:10.1007/s10701-011-9594-8
* –––, 2012b, “Noncommuting Local Common Causes for Correlations Violating the Clauser–Horne Inequality”, *Journal of Mathematical Physics*, 53(12): 122301. doi:10.1063/1.4763468
* –––, 2013, “Noncommutative Common Cause Principles in Algebraic Quantum Field Theory”, *Journal of Mathematical Physics*, 54(4): 042301. doi:10.1063/1.4801783
* –––, 2018, *Quantum Theory and Local Causality*, (SpringerBriefs in Philosophy), Cham: Springer International Publishing. doi:10.1007/978-3-319-73933-5
* Hoover, Kevin D., 2003, “Non-Stationary Time Series, Cointegration and the Principle of the Common Cause”, *The British Journal for the Philosophy of Science*, 54(4): 527–551. doi:10.1093/bjps/54.4.527
* Horuzhy, S. S., 1986 [1990], *Vvedenie v algebraicheskuyu kvantovuyu teoriyu polya*, Moscow: Nauka Publishers. Translated as *Introduction to Algebraic Quantum Field Theory*, K.M. Cook (trans.), (Mathematics and Its Applications 19), Dordrecht: Springer Netherlands, 1990. doi:10.1007/978-94-009-1179-6
* Horwich, Paul, 1987, Asymmetries in Time, Cambridge, MA: MIT Press.
* Jeffrey, Richard, 1969, “Statistical Explanation and Statistical Inference”, in *Essays in Honor of Carl G. Hempel*, Nicholas Rescher (ed.), Dordrecht: Reidel, 104–113.
* Kiiveri, Harri, T. P. Speed, and J. B. Carlin, 1984, “Recursive Causal Models”, *Journal of the Australian Mathematical Society. Series A. Pure Mathematics and Statistics*, 36(1): 30–52. doi:10.1017/S1446788700027312
* Kitajima, Yuichiro, 2008, “Reichenbach’s Common Cause in an Atomless and Complete Orthomodular Lattice”, *International Journal of Theoretical Physics*, 47(2): 511–519. doi:10.1007/s10773-007-9475-2
* Kitajima, Yuichiro and Miklós Rédei, 2015, “Characterizing Common Cause Closedness of Quantum Probability Theories”, *Studies in History and Philosophy of Science Part B: Studies in History and Philosophy of Modern Physics*, 52: 234–241. doi:10.1016/j.shpsb.2015.08.003
* Kowalski, Tomasz and Tomasz Placek, 1999, “Outcomes in Branching Space-Time and GHZ-Bell Theorems”, *The British Journal for the Philosophy of Science*, 50(3): 349–375. doi:10.1093/bjps/50.3.349
* Landsman, Klaas, 2017, *Foundations of Quantum Theory: From Classical Concepts to Operator Algebras*, (Fundamental Theories of Physics 188), Cham: Springer International Publishing. doi:10.1007/978-3-319-51777-3
* Lewis, David, 1973, “Causation”, *Journal of Philosophy*, 70(17): 556–567. doi:10.2307/2025310
* –––, 1986, “Events”, in his *Philosophical Papers, Volume II*, Oxford: Oxford University Press, 241–269.
* Marczyk, Michal and Leszek Wroński, 2015, “Completion of the Causal Completability Problem”, *The British Journal for the Philosophy of Science*, 66(2): 307–326. doi:10.1093/bjps/axt030
* Mazzola, Claudio, 2012, “Reichenbachian Common Cause Systems Revisited”, *Foundations of Physics*, 42(4): 512–523. doi:10.1007/s10701-011-9622-8
* –––, 2013, “Correlations, Deviations and Expectations: The Extended Principle of the Common Cause”, *Synthese*, 190(14): 2853–2866. doi:10.1007/s11229-012-0089-8
* Mazzola, Claudio and Peter W. Evans, 2017, “Do Reichenbachian Common Cause Systems of Arbitrary Finite Size Exist?”, *Foundations of Physics*, 47(12): 1543–1558. doi:10.1007/s10701-017-0124-1
* Pearl, Judea, 2009, *Causality: Models, Reasoning, and Inference*, second edition, Cambridge: Cambridge University Press.
* Pearl, Judea and Thomas Verma, 1991, “A Theory of Inferred Causation”, in *Principles of Knowledge Representation and Reasoning: Proceedings of the 2nd International Conference*, San Mateo, CA: Morgan Kaufman, 441–452.
* Pedro, I. San, 2008, “The Common Cause Principle and Quantum Correlations”, PhD thesis, Madrid, Spain: Department of Philosophy, Complutensee University.
* Penrose, Oliver and Ian C. Percival, 1962, “The Direction of Time”, *Proceedings of the Physical Society*, 79(3): 605–616. doi:10.1088/0370-1328/79/3/318
* Placek, Tomasz, 2000a, *Is Nature Deterministic?*, Kraków, Poland: Jagiellonian University Press.
* –––, 2000b, “Stochastic Outcomes in Branching Space-Time: Analysis of Bell’s Theorem”, *The British Journal for the Philosophy of Science*, 51(3): 445–475. doi:10.1093/bjps/51.3.445
* Reichenbach, Hans, 1925 [1978], “The Causal Structure of the World and the Difference between Past and Future”, reprinted in Reichenbach 1978: 81–119.
* –––, 1930 [1978], “Causality and Probability”, reprinted in Reichenbach 1978: 333–344.
* –––, 1938, *Experience and Prediction: An Analysis of the Foundations and the Structure of Knowledge*, Chicago, IL: University of Chicago Press.
* –––, 1949, *The Theory of Probability*, Berkeley, CA: University of California Press.
* –––, 1956, *The Direction of Time*, Los Angeles: University of California Press.
* –––, 1958, *The Philosophy of Space and Time*, Maria Reichenbach and John Freund (trans.), New York: Dover Publications.
* –––, 1978, *Hans Reichenbach Selected Writings 1909–1953*, volume 2, Maria Reichenbach and Robert S. Cohen (eds.), (Vienna Circle Collection 4b), Dordrecht: D. Reidel. doi:10.1007/978-94-009-9855-1
* Rédei, Miklós, 1997, “Reichenbach’s Common Cause Principle and Quantum Field Theory”, *Foundations of Physics*, 27(10): 1309–1321. doi:10.1007/BF02551514
* –––, 2006, “John Von Neumann on Quantum Correlations”, in *Physical Theory and Its Interpretation: Essays in Honor of Jeffrey Bub*, William Demopoulos and Itamar Pitowsky (eds.), (The Western Ontario Series in Philosophy of Science 72), Springer Netherlands, 241–252. doi:10.1007/1-4020-4876-9_11
* –––, 2014a, “A Categorial Approach to Relativistic Locality”, *Studies in History and Philosophy of Science Part B: Studies in History and Philosophy of Modern Physics*, 48: 137–146. doi:10.1016/j.shpsb.2014.08.014
* –––, 2014b, “Assessing the Status of the Common Cause Principle”, in *New Directions in the Philosophy of Science*, Maria Carla Galavotti, Dennis Dieks, Wenceslao J. Gonzalez, Stephan Hartmann, Thomas Uebel, and Marcel Weber (eds.), (The Philosophy of Science in a European Perspective 5), Cham: Springer International Publishing, 433–442. doi:10.1007/978-3-319-04382-1_29
* Rédei, Miklós and Stephen J. Summers, 2002, “Local Primitive Causality and the Common Cause Principle in Quantum Field Theory”, *Foundations of Physics*, 32(3): 335–355. doi:10.1023/A:1014869211488
* Rédei, Miklós and Stephen Jeffrey Summers, 2007a, “Quantum Probability Theory”, *Studies in History and Philosophy of Science Part B: Studies in History and Philosophy of Modern Physics*, 38(2): 390–417. doi:10.1016/j.shpsb.2006.05.006
* –––, 2007b, “Remarks on Causality in Relativistic Quantum Field Theory”, *International Journal of Theoretical Physics*, 46(8): 2053–2062. doi:10.1007/s10773-006-9299-5
* Salmon, Wesley C., 1984, *Scientific Explanation and the Causal Structure of the World*, Princeton: Princeton University Press.
* Schurz, Gerhard, 2017, “Interactive Causes: Revising the Markov Condition”, *Philosophy of Science*, 84(3): 456–479. doi:10.1086/692143
* Shannon, Claude and Warren Weaver, 1949, *The Mathematical Theory of Communication*, Urbana, IL: University of Illinois Press.
* Sober, Elliott, 1984, “Common Cause Explanation”, *Philosophy of Science*, 51(2): 212–241. doi:10.1086/289178
* –––, 1988, “The Principle of the Common Cause”, in *Probability and Causality: Essays in Honor of Wesley C. Salmon*, James H. Fetzer (ed.), Dordrecht: Springer Netherlands, 211–228. doi:10.1007/978-94-009-3997-4_10
* –––, 1989, “Independent Evidence about a Common Cause”, *Philosophy of Science*, 56(2): 275–287. doi:10.1086/289487
* –––, 2001, “Venetian Sea Levels, British Bread Prices, and the Principle of the Common Cause”, *The British Journal for the Philosophy of Science*, 52(2): 331–346. doi:10.1093/bjps/52.2.331
* –––, 2008, *Evidence and Evolution: The Logic behind the Science*, Cambridge: Cambridge University Press. doi:10.1017/CBO9780511806285
* Spirtes, Peter, Clark Glymour, and Richard Scheines, 2000, *Causation, Prediction, and Search*, second edition, Cambridge, MA: MIT Press.
* Spohn, Wolfgang, 1994, “On Reichenbach’s Principle of the Common Cause”, in *Logic, Language and the Structure of Scientific Theories: Proceedings of the Carnap-Reichenbach Centennial, University of Konstanz, 21–24 May 1991*, Wesley C. Salmon and Gereon Wolters (eds.), Pittsburgh: University of Pittsburgh Press, 211–235.
* Steel, Daniel, 2003, “Making Time Stand Still: A Response to Sober’s Counter-Example to the Principle of the Common Cause”, *The British Journal for the Philosophy of Science*, 54(2): 309–317. doi:10.1093/bjps/54.2.309
* Summers, Stephen J., 1997, “Bell’s Inequalities”, in *Encyclopaedia of Mathematics: Supplement Volume 1*, M. Hazewinkel (ed.), Dordrecht: Kluwer Academic Publishers, 94–95.
* Suppes, Patrick, 1970, *A Probabilistic Theory of Causality*, Amsterdam: North-Holland.
* –––, 1984, *Probabilistic Metaphysics*, Oxford: Basil Blackwell.
* Uffink, Jos, 1999, “The Principle of the Common Cause Faces the Bernstein Paradox”, *Philosophy of Science*, 66: S512–S525. doi:10.1086/392749
* Von Neumann, John, 2005, *John von Neumann Selected Letters*, Miklós Rédei (ed.), (History of Mathematics 27), Providence, RI: American Mathematical Society.
* Wiseman, Howard M. and Eric G. Cavalcanti, 2017, “*Causarum Investigatio* and the Two Bell’s Theorems of John Bell”, in *Quantum [Un]Speakables II: Half a Century of Bell’s Theorem*, Reinhold Bertlmann and Anton Zeilinger (eds.), (The Frontiers Collection), Cham: Springer International Publishing, 119–142. doi:10.1007/978-3-319-38987-5_6
* Wroński, Leszek, 2010, “The Common Cause Principle. Explanation via Screeing Off”, PhD thesis, Kraków, Poland: Institute of Philosophy, Jagiellonian University.
* –––, 2014, *Reichenbach’s Paradise: Constructing the Realm of Probabilistic Common “Causes”*, Berlin: De Gruyter.
* Wüthrich, Adrian, 2004, *Quantum Correlations and Common Causes*, (Bern Studies in the History and Philosophy of Science), Bern: Universität Bern.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=physics-Rpcc). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/physics-Rpcc/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=physics-Rpcc&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/physics-Rpcc/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[Bell’s Theorem](https://plato.stanford.edu/entries/bell-theorem/) | [causal models](https://plato.stanford.edu/entries/causal-models/) | [causation: probabilistic](https://plato.stanford.edu/entries/causation-probabilistic/) | [quantum mechanics](https://plato.stanford.edu/entries/qm/) | [quantum theory: and mathematical rigor](https://plato.stanford.edu/entries/qt-nvd/) | [quantum theory: philosophical issues in](https://plato.stanford.edu/entries/qt-issues/) | [quantum theory: quantum field theory](https://plato.stanford.edu/entries/quantum-field-theory/) | [quantum theory: quantum logic and probability theory](https://plato.stanford.edu/entries/qt-quantlog/) | [quantum theory: the Einstein-Podolsky-Rosen argument in](https://plato.stanford.edu/entries/qt-epr/) | [Reichenbach, Hans](https://plato.stanford.edu/entries/reichenbach/) | [Simpson’s paradox](https://plato.stanford.edu/entries/paradox-simpson/) | [time: thermodynamic asymmetry in](https://plato.stanford.edu/entries/time-thermo/)

### Acknowledgments

The authors would like to thank Wayne Myrvold for helpful comments on an earlier draft of this entry.

[Copyright © 2020](https://plato.stanford.edu/info.html#c) by  
[Christopher Hitchcock](http://hss.divisions.caltech.edu/people/christopher-r-hitchcock) <[*cricky@caltech.edu*](mailto:cricky%40caltech%2eedu)>  
Miklós Rédei <[*M.Redei@lse.ac.uk*](mailto:M%2eRedei%40lse%2eac%2euk)>
<!--md-padding-ignore-end-->
