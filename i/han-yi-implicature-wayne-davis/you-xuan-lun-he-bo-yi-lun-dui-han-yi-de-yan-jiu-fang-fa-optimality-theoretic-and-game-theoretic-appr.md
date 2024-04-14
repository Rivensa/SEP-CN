# 优选论和博弈论对含义的研究方法 optimality theoretic and game theoretic approaches (Robert van Rooij and Michael Franke)

*首次发表于2006年12月1日星期五；实质性修订于2022年4月7日星期四。*

语言语用学研究表达的上下文依赖性使用和解释。也许语用学中最重要的概念是 Grice（1967）的会话含义。它基于这样的洞察力，即通过一般的合作行为原则，我们可以通过句子的使用来传达比与之相关的传统语义含义更多的信息。例如，Grice 认为，“或”的独占解释——即我们从“约翰或玛丽来了”推断出约翰和玛丽都没有来——不是由于“或”的语义含义，而应该归因于会话含义的理论。在这个特定的例子中，这是一个典型的数量含义的例子，听话者的暗示被认为是由于说话者本可以使用对比鲜明且信息更强的表达方式，但选择不这样做。其他的含义可能源于听话者认为说话者认为是正常情况的解释，即刻板化的解释。对于这两种类型的含义，听话者对表达的（语用）解释涉及他认为说话者使用这种表达方式的原因。但显然，说话者的原因也必须涉及对听话者推理的假设。

在本条目中，我们将讨论明确考虑说话者和听话者的互动推理（例如，说话者和听话者对彼此的信念，话语背景的相关方面等）的会话含义的形式化解释，并旨在将会话含义作为目标导向、经济优化的语言使用的结果进行还原性解释。对于本条目，就像对含义的传统分析一样，我们将假设句子具有预先存在的语义含义，并主要关注概括的会话含义。

* [1. 双向优选论](https://plato.stanford.edu/entries/implicature-optimality-games/#BidOptThe)

  * [1.1 双向优选论和数量含义](https://plato.stanford.edu/entries/implicature-optimality-games/#BidOTQuaImp)
  * [1.2 Horn 的分割的双向优选论分析](https://plato.stanford.edu/entries/implicature-optimality-games/#BiOTAnaHorDiv)
* [2. 含义和博弈论](https://plato.stanford.edu/entries/implicature-optimality-games/#ImpGamThe)

  * [ 2.1 信号博弈](https://plato.stanford.edu/entries/implicature-optimality-games/#SigGam)
  * [2.2 Horn 划分的博弈论解释](https://plato.stanford.edu/entries/implicature-optimality-games/#GamTheExpHorDiv)
  * [2.3 数量含义和最佳反应](https://plato.stanford.edu/entries/implicature-optimality-games/#QuaImpBesRes)
* [ 3. 结论](https://plato.stanford.edu/entries/implicature-optimality-games/#Con)
* [ 参考文献](https://plato.stanford.edu/entries/implicature-optimality-games/#Bib)
* [ 学术工具](https://plato.stanford.edu/entries/implicature-optimality-games/#Aca)
* [其他互联网资源](https://plato.stanford.edu/entries/implicature-optimality-games/#Oth)
* [ 相关条目](https://plato.stanford.edu/entries/implicature-optimality-games/#Rel)

---

## 1. 双向优选论

### 1.1 双向优选论和数量含义

优选论（OT）是一种语言学理论，假设语言选择受到一组候选项或替代项之间的竞争的影响。在标准的优选论（Prince＆Smolensky，1993）中，最优候选项是最满足一组可违反约束条件的候选项。在其在音韵学中的成功之后，优选论也被用于句法学、语义学和语用学。优选论语义学的最初想法是通过将候选项视为听者可以分配给给定表达式的替代解释，其中约束描述了对表达式-解释对的一般偏好，来建模解释。Blutner（1998, 2000）通过考虑说话者可以使用但未使用的替代表达式或形式，扩展了这个最初版本。对于数量含义，对替代表达式/形式的引用在语用学中是标准的。因此，优化应该从两个方向来考虑：听者的方向和说话者的方向。根据 Blutner 的双向优选论（Bi-OT），最优的不仅仅是与形式相关的解释，而是形式-解释对。根据形式-解释对之间的“优于”关系“>”，对于满足以下两个条件的对⟨f，i⟩来说，它被称为（强烈）最优：

¬∃i′:⟨f,i′⟩>⟨f,i⟩¬∃f′:⟨f′,i⟩>⟨f,i⟩

第一个条件要求 i 是形式 f 的最优解释。在 Bi-OT 中，这个条件被认为是从听者的角度进行优化。Blutner 提出，如果 i'是 f 的更可能或更典型的解释，则⟨f,i'⟩>⟨f,i⟩：P(i'∣[[f]])>P(i∣[[f]])（其中[[f]]表示 f 的语义含义，P(B∣A)表示在 A 条件下 B 发生的条件概率，定义为 P(A∩B)/P(A)）。第二个条件涉及到说话者的优化：对于说话者来说，⟨f,i⟩要是最优的，就必须不能使用更优的形式 f'来表达 i。⟨f',i⟩>⟨f,i⟩当且仅当(i) P(i∣[[f']])>P(i∣[[f]])，或者(ii) P(i∣[[f']])=P(i∣[[f]])且 f'是比 f 更简单的形式来表达 i。

Bi-OT 解释了经典的数量含义。一个方便（尽管有争议）的例子是数字术语的“恰好”解释。为了举例，让我们假设数字术语在语义上具有“至少”的含义。尽管如此，我们希望解释这样的直觉：句子“有三个孩子来参加派对”通常被解释为恰好有三个孩子来参加派对。一种方法是假设说话者可以使用的替代表达形式是“（至少）n 个孩子来参加派对”，而听者的替代解释是“恰好有 n 个孩子来参加派对”。如果我们再次假设所有相关解释被认为是同等可能的，并且已经普遍假设有一些孩子来了，但不超过四个，那么强优选的形式-解释对可以从以下表格中读取出来：

| P(i∣[[f]]) | i1   | i2   | i3    | i4  |
| ------------- | ------ | ------ | ------- | ----- |
| ‘one’     | ⇒¼ | ¼   | ¼    | ¼  |
| ‘two’     | 0    | ⇒⅓ | ⅓    | ⅓  |
| ‘three’   | 0    | 0    | ⇒ ½ | ½  |
| ‘four’    | 0    | 0    | 0     | ⇒1 |

在这个表格中，条目 P(i3∣[[‘two’]])=⅓，因为 P(i3∣{i2,i3,i4})=⅓。请注意，根据这种推理，‘two’被解释为‘exactly 2’（如箭头所示），因为（i）对于任何替代表达式‘n’，P(i2∣[[‘two’]])=⅓高于 P(i2∣[[‘n’]])，（ii）与数词表达的语义含义相容的所有其他解释都被阻塞：例如，存在另一个表达式，其中 i4 是更好的解释，即具有更高的条件概率。

对于数词术语，替代表达式的语义含义产生了一个线性顺序。如果我们继续像迄今为止那样将解释具体化，这对于 Bi-OT 分析来说是至关重要的。考虑对问题“谁来参加派对？”的以下替代回答：

1. 约翰来参加派对。
2. 约翰或比尔来参加派对。

假设约翰和比尔是唯一相关的人，并且假定有人来参加派对。在这种情况下，用于说明双向优选推理的表格如下（其中 ix 是只有 x 来的解释）：

| P(i∣[[f]])  | ij   | ib   | ijb |
| -------------- | ------ | ------ | ----- |
| ‘John’     | ⇒½ | 0    | ½  |
| ‘Bill’     | 0    | ⇒½ | ½  |
| '约翰和比尔' | 0    | 0    | ⇒1 |
| '约翰或比尔' | ⅓   | ⅓   | ⅓  |

这个表格正确预测了(1)的含义是只有约翰来了。但是现在考虑到析取(2)。直观上，这个答案应该被解释为只有约翰来了，或者只有比尔来了。然而，很容易看出，只有当'约翰来了'和'比尔来了'不被视为替代形式时，才会得出这个预测。优选论预测，如果也将'约翰来了'和'比尔来了'视为替代形式，那么这个析取是无法解释的，因为特定的解释 ij、ib 和 ijb 都可以用其他形式更好地表达出来。一般来说，可以看出，如果替代表达式的语义含义不是线性的，而只是部分有序的，那么上述勾画的数量含义的推导就会导致部分错误的预测。

事实证明，对于 Bi-OT 来说，这个问题似乎比实际情况要大。直观上，像(2)这样的答案表明说话者信息不完整（她不知道是约翰还是比尔来了）。但是，到目前为止，我们考虑的解释都是不编码说话者知识量不同的世界状态。因此，在 Bi-OT（或任何其他数量含义分析）中，我们应该允许代表说话者不同知识状态的替代解释。Aloni（2007）提供了一个关于无知含义（推理，如上所述，说话者缺乏某些可能相关信息的推理）的 Bi-OT 解释，以及关于漠不关心含义（说话者认为某些信息不足以传达的推理）。此外，可以证明，就无知含义而言，Bi-OT 的预测与 Schulz 和 Van Rooij 的“Grice”语用解释函数（如 Schulz＆Van Rooij，2006 年的多篇联合论文）相吻合。在这些论文中，声称 Grice 实施了质量的 Gricean 最大和数量的第一个最大，并且证明了在它的基础上（再加上额外的能力假设），我们可以解释许多会话含义，包括(1)和(2)的含义。

### 1.2 Horn 的分割的 Bi-OT 分析

Bi-OT 也可以解释 Horn 对于语用工作分工或 M-含义的划分，后者有时在 Levinson（2000）之后被称为。根据 Horn 的语用工作分工，（形态上）未标记的表达通常通过 Grice 的关系最大化原则获得未标记或典型的解释，而标记的表达——作为形态复杂且较少词汇化的表达——倾向于获得标记的、非典型的解释。Horn（1984）认为，这是由于数量的 Grice 子最大化原则和关系和方式的最大化原则之间的相互作用所导致的，并且对于标记表达的解释来说，关键是还有一个可替代的未标记表达可用。为了说明这一点，考虑以下众所周知的例子：

3. 约翰杀了警长。
4. 约翰导致警长死亡。

我们通常将未标记的（3）解释为意味着典型的故意杀害，而标记的（4）则暗示约翰以更间接的方式杀死了警长，可能是无意的。Blutner（1998年，2000年）表明这可以在Bi-OT中解释。将ist解释为约翰以典型的方式杀死了警长，而i¬st解释为约翰以不寻常的方式导致了警长的死亡。因为（3）比（4）更简单，ist是与（3）的语义含义相容的更典型的解释，因此预测（3）会被解释为ist。因此，从他对强优选的概念来看，即对说话者和听话者都最优的概念，Blutner可以解释句子通常得到最合理或最典型的解释的直觉。然而，从这个优选的概念来看，Blutner尚不能解释更复杂的形式（4）如何能够有任何解释，特别是为什么它会被解释为非典型的杀害。原因是在假设（4）与（3）具有相同的语义含义的情况下，典型的解释不仅对（3）而且对（4）来说都是听话者最优的。

为了解释(4)以非典型方式被解释的直觉，Blutner (2000)引入了一种更弱的优选论概念，该概念还考虑了一种阻塞的概念：一个形式的语用赋予的含义可以从另一个不太有利的形式中夺走，可以这么说。在本例中，通过更便宜的替代表达式(3)，笨拙的形式(4)直观上被阻塞了。形式上，形式-解释对⟨f,i⟩是弱优选的[3]，当且仅当既没有强优选的⟨f,i′⟩使得⟨f,i′⟩>⟨f,i⟩，也没有强优选的⟨f′,i⟩使得⟨f′,i⟩>⟨f,i⟩。所有强优选的形式-解释对也是弱优选的。然而，像⟨(4),i¬st⟩这样不是强优选的对仍然可以是弱优选的：因为既没有⟨(4),ist⟩也没有⟨(3),i¬st⟩是强优选的，所以对于⟨(4),i¬st⟩来说，没有异议成为(弱)优选对。因此，标记的(4)将得到非典型的解释。一般来说，应用上述弱优选的定义可能很困难，但 Jäger (2002)提供了一个简明的算法来计算弱优选的形式-解释对。

## 2. 蕴涵和博弈论

第一个系统地探索将博弈论用于将沟通解释为战略推理的是 Prashant Parikh 在他的 1988 年论文中（Parikh 1988）。Parikh 的理论基于他所称的部分信息博弈，围绕着博弈论解决概念的帕累托最优纳什均衡，并在一系列文章和专著中进行了改进和应用，包括但不限于含义加强的话语含义（例如，Parikh 1991, 1992, 2000, 2001, 2010, 2019）。另一个值得注意的早期贡献是 Asher、Sher 和 Williams（2001）的工作，他们试图运用博弈论的思想来合理化 Grice 的会话最大原则。接下来，我们将重点关注基于所谓的信号博弈中的迭代推理的含义方法。Dekker 和 van Rooij（2000）以及 Franke 和 Jäger（2012）探讨了最优性理论和博弈论之间的关系。Stevens 和 Benz（2018）对博弈论语用学给出了另一个有深度的概述。

### 2.1 信号博弈

David Lewis（1969）引入了信号博弈来解释如何利用消息进行沟通，尽管这些消息没有预先存在的含义。在语用学中，我们想要做类似的事情：解释通过一个表达式实际解释不明确的传达了什么。为了解释博弈论中的语用推理，Parikh（1991, 1992）引入了部分信息博弈。这些博弈与 Lewis 最初的信号博弈非常相似，只是将消息视为具有传统语义含义，并假设发言者只说真实的消息。为了进行广泛的概述，我们忽略了 Lewis 的信号博弈和 Parikh 的部分信息博弈之间有趣但微妙的差异。

一个信号博弈是一个不对称信息的博弈，参与者包括发送者 s 和接收者 r。发送者观察到 s 和 r 所处的状态 t，而接收者必须执行一个动作。发送者可以通过发送消息来影响接收者采取的动作。T 是状态的集合，F 是形式或消息的集合。消息已经具有语义含义，由语义解释函数[[⋅]]给出，该函数将每个形式分配给 T 的一个子集。发送者将在每个状态下发送一条消息/形式，因此发送者策略 S 是从 T 到 F 的函数。接收者在听到具有特定语义含义的消息后执行一个动作，但是为了简化起见，我们可以将动作简单地视为解释。接收者策略 R 是将消息映射到解释的函数，即 T 的一个子集。发言者和听者的效用函数表示对话者关心的内容，因此效用函数模拟了发言者和听者认为相关信息（实现 Grice 的关联最大化原则）。为简单起见，通常假设 s 和 r（Us 和 Ur）的效用函数相同（实现 Grice 的合作原则），并且它们依赖于（i）实际状态 t，（ii）接收者的解释 i，即 i=R(S(t))，以及（iii）（在第 2.3 节中）发送者使用的形式 f=S(t)。根据某个（常识已知的）概率分布 P，自然界会选择状态。关于这个概率函数，可以如下确定每个发送者-接收者策略组合⟨S,R⟩对于玩家 e∈{s,r}的预期效用或平均效用：

EUe(S,R)=∑t∈TP(t)×Ue(t,S(t),R(S(t))).

一个信号游戏被视为一个（简化的、抽象的）模型，用于描述单个话语及其解释，其中包括一些被认为是语用推理背景中最相关特征的因素：信息的不对称（发言者了解世界状态，听话者不了解），话语替代的概念（在消息/形式集合中）与相关的语义含义，以及对什么算作相关信息的灵活表示（通过效用函数）。如果这还不够，例如，如果我们希望听话者拥有部分信息，而发言者没有共享（例如，当发言者对于对听话者来说真正相关的事情存在不确定性时），那么可以将其纳入更复杂的游戏模型中，但我们在这里不涉及更复杂的情况。发言者和听话者的策略编码了使用和解释语言的特定方式。预期效用的概念评估了在给定背景下使用和解释语言的好方法。语用现象的博弈论解释旨在确定那些与实证行为相对应的发言者-听话者策略对，作为博弈问题的最优和/或理性解决方案。

博弈论的标准解决方案概念是纳什均衡。一个信号博弈的纳什均衡是一对策略⟨S∗,R∗⟩，具有这样的特性：发送者和接收者都不能通过单方面的偏离来增加他或她的预期效用。因此，S∗是对 R∗的最佳反应，而 R∗是对 S∗的最佳反应。在博弈理论文献中有很多对纳什均衡的改进。此外，还有均衡分析的替代方法，其中最突出的两种是：（i）对代理人推理过程进行明确形式化，例如在认识论博弈论中所做的（例如，Perea 2012），以及（ii）进化博弈论的变体（例如，Sandholm 2010），研究代理人行为倾向在逐步优化过程中的动态变化，例如通过模仿或从父母那里学习。这些问题对于语言语用学的应用也是相关的，正如我们将在下面的 M-蕴涵/Horn 的语用分工示例中所证明的那样。

### 2.2 Horn 的语用分工的博弈论解释

Parikh（1988年，1991年，1992年）提出了使用博弈论来解释消歧义和含义的方法。事实证明，同样的方法也可以用来解释霍恩的语用分工。Parikh假设一个信息或形式fu在语义上是模糊的，可以有一个典型解释tst和一个非典型解释t¬st，其中P（tst）> P（t¬st）。然而，这两个含义也可以通过更复杂的形式来明确表达。例如，解释t¬st不仅可以通过fu来表达，还可以通过形式fm来表达。正如在所谓的昂贵信号博弈中通常的做法，并且与Parikh的提议一致，发送者的效用函数可以分解为一个效益函数和一个成本函数Us（t，f，i）= Bs（t，i）- C（f），其中i是一个解释。我们采用以下效益函数：如果i = t，则Bs（t，i）= 1，否则Bs（t，i）= 0。模糊信息fu的成本低于明确信息fm的成本。我们可以假设不失一般性地C（fu）= 0 < C（fm）。在使用信号博弈分析人类交流时，通常假设成功的昂贵信息比廉价信息的失败交流更好，这意味着C（fm）虽然大于C（fu），但必须保持相对较小。如果我们限制自己在一个有2个状态（tst和t¬st）和三个信息（fu以及直接表达这两个状态的两个形式）的博弈中，并像之前一样考虑发送者和接收者的策略，那么导致双射映射{⟨tst，fu⟩，⟨t¬st，fm⟩}的发送者和接收者策略的组合是该博弈的纳什均衡。直观上讲，这也是消歧义博弈的正确解，因为模糊信息fu表达了典型解释tst，而非典型状态t¬st则由标记和更昂贵的信息fm表达。 不幸的是，映射{⟨tst,fm⟩,⟨t¬st,fu⟩}也是该博弈的纳什均衡，其中较轻的消息表示非典型情况，这意味着在当前实施中，博弈论的标准解决概念尚不能单独确定所需的结果。

这就是均衡改进和/或替代解决概念的考虑所涉及的地方。Parikh（1988, 1991, 1992）观察到，在上述两个均衡中，第一个 Pareto 优于第二个-成为唯一的 Pareto-Nash 均衡，并且因此应该优先选择前者。Van Rooij（2004）建议，由于 Horn 的语用分工不仅涉及语言使用还涉及语言组织，因此应该从进化的角度来看待信号博弈，并利用那些解释 Pareto 最优解的进化博弈理论的变体。作为第三种选择，根据 De Jaegher（2008）的一些思想，van Rooij（2008）提出，我们还可以利用前向归纳（一种关于对手出人意料的举动进行推理的特定博弈论方式）来确定所需的均衡。作为依赖于对话参与者认知状态的详细建模的方法的一个例子，Franke（2014a）建议，我们应该区分涉及相当明确的特别推理的 M-含义的情况，例如（5）和（6），与可能更语法化对比之间的情况，例如（3）和（4）。

5. T 夫人唱了《家，甜蜜的家》。
6. T 夫人发出一系列大致对应于《家，甜蜜的家》乐谱的声音。

Franke 认为，用于推理（5）和（6）的游戏模型应该包含一种替代的不对称性元素：当听到（6）时，一个说话者可以合理地期望听众会考虑（5）作为一种替代话语，但一个说话者相信听众会考虑（5）作为一种潜在的替代话语时，这是相当不可信的。这种替代的不对称性转化为听众对不同信息后上下文的不同信念。说话者可以预见到这一点，而实际观察到（6）的听众可以推理出自己的反事实上下文表示，即如果说话者说的是（5），他们会有什么样的上下文表示。Franke 表明，当与上下文表示的这种不对称性配对时，我们接下来要转向的迭代最佳反应推理的简单模型也能给出所需的结果。

### 2.3 数量含义和迭代推理

与M-含义的情况不同，许多数量含义取决于备选表达在逻辑强度上的差异：我们在1.1节中概述的从“三”推导出语用上加强的“恰好三”的推理，依赖于备选表达“四”在语义上更强的事实，即“四”在语义上蕴含“三”，但反过来则不成立，根据假设的“至少”语义。为了将语义强度的考虑引入到博弈论语用学中，我们必须在游戏模型或解决方案概念中赋予传统意义一定的作用。接下来，我们将探讨两种类似但不同的处理语义含义的可能性，这些方法将语用推理解释为关于对话者理性的（高阶）推理链。

将语义含义引入博弈论语用学的一种直接而高效的方法是简单地限制发送者和接收者在信号博弈中可行策略的集合，使其符合常规含义：发送者只能选择与实际状态相符的形式，接收者只能选择与观察到的信息的指称相符的解释。这种方法可能显得粗糙，并从一开始就排除了非字面语言使用、说谎、欺骗和错误的情况，但它可以合理化合作、寻求信息的对话者之间的常见语用推理模式。基于对遵循真实性策略的限制，Pavan（2013）和Rothschild（2013）分别独立地证明了存在一个已建立的非平衡解概念，可以很好地合理化数量含义，即迭代可接受性，也称为迭代淘汰弱支配策略。不详细介绍，这个解概念的一般思想是从所有可行策略的整个集合（都符合语义含义）开始，然后迭代地淘汰所有策略X，即没有关于对手剩余策略对手可能会选择哪个策略的谨慎信念，使得X成为一个合理的选择。（谨慎信念是指到目前为止没有被淘汰的任何对手策略都不被排除的信念。）在重复淘汰的迭代中幸存下来的策略集合与（一种特定类型的）理性共同信念相兼容。总之，迭代可接受性是一种淘汰性方法：从所有（遵循真实性）策略的集合开始，每一步都淘汰一些策略，直到我们只剩下一个稳定的策略集合，再也无法淘汰任何东西。

将注意力限制在仅真实策略上的替代方法是使用语义含义来约束语用推理的起点。这样做的方法有最优断言方法（Benz 2006，Benz＆van Rooij 2007），迭代最佳反应模型（例如Franke 2009，2011，Jäger 2014）以及相关的概率模型（例如Frank＆Goodman 2012，Goodman＆Stuhlmüller 2013，Franke＆Jäger 2014）。统一这些方法的总体思想可以直接追溯到Grice，特别是说话者应该最大化其话语中包含的相关信息量的概念。由于话语中包含的信息通常被认为是语义信息（而不是语用限制或调节的含义），实现Gricean说话者的一种简单方法是假设他们通过考虑字面解释者对每个替代选择的反应来选择话语。然后，语用听众根据相信说话者在上述意义上是Gricean的信念来进行最优反应。换句话说，这些方法定义了一系列心理理论推理：从（非理性的，虚拟的）字面解释者开始，Gricean说话者根据字面解释行为（近似）理性地行动，而Gricean听众根据Gricean说话者的行为进行（近似）理性的解释。一些贡献允许进一步迭代最佳反应，而其他一些则不允许；一些贡献还研究以字面发送者开始的推理序列；一些贡献假设代理人是严格理性的，而其他一些则允许对经典理性选择的概率近似（请参阅Franke＆Jäger 2014以获取概述和比较）。

迭代最佳响应方法与基于迭代可接受性的方法之间的一个关键区别在于前者不会缩小策略集，而是允许在每一步中使用不同的最佳响应集合。这也使得（某些）迭代最佳响应方法能够处理在对话者偏好不一致的情况下的语用推理，即格赖斯合作性假设不成立的情况，或者存在额外的动机偏离语义含义（有关在非合作环境中进行推理的游戏模型的更多信息，请参见 Franke、de Jager 和 van Rooij 2012、de Jaegher 和 van Rooij 2014、Franke 和 van Rooij 2015）。迭代最佳响应模型与迭代可接受性之间的另一个区别在于后者本身不能解释霍恩的语用分工（有关讨论，请参见 Franke 2014b 和 Pavan 2014）。

为了说明迭代最佳响应推理在简单（合作）情况下的工作原理，让我们再次简要介绍一下数值表达式。以一个具有 4 个状态或世界 W={w1,w2,w3,w4}的信号游戏为例，其中索引表示来参加我们派对的孩子的确切/最大数量，以及四个消息 F={‘one’,‘two’,‘three’, ‘four’}，作为“n 个孩子来参加我们的派对”的简写。在新格赖斯的“至少”解释中，数词表达式的含义形成一个蕴涵链：

[[‘four’]]⊂[[‘three’]]⊂[[‘two’]]⊂[[‘one’]]，

因为，例如，[[‘three’]]={w3,w4}。一个字面解释者，对于上下文因素毫不在意，会以相等的概率选择任何真实的解释来回应每个信息。所以，例如，如果字面解释者听到‘three’，他会以概率½选择w3或w4中的任意一个。但这意味着，对于一个想要传达实际世界是w3的说话者来说，最佳的表达选择是‘three’，因为这最大化了字面解释者选择w3的机会。具体来说，如果说话者选择‘one’，字面听者选择w3的概率是¼；对于‘two’是⅓；对于‘three’是½；对于‘four’是零，因为w3不是[[‘three’]]的元素。因此，一个理性的Grice说话者在w3中选择[[‘three’]]，而不选择其他地方，这很容易通过对所有其他状态进行类似的论证来看出。但这意味着，一个听到‘three’的Grice解释者会推断实际世界必须是w3。

近年来，已经提出了一些有前途的这种语用推理方案的扩展。其中之一是包括概率选择函数来模拟代理人的近似理性选择，以便更直接地与实验数据建立联系（有关概述，请参见 Franke＆Jäger 2016，Goodman＆Frank 2016）。这种概率语用模型已经应用于许多感兴趣的现象，包括在上下文中推理关于指称表达的问题（Frank＆Goodman 2012），无知含义（Goodman＆Stuhlmüller 2013），上下文对标量含义的影响（Degen 等人 2015），数字术语的非字面解释（Kao 等人 2014），与特定语调相关的语用含义调制（Bergen＆Goodman 2015，Stevens 2016）以及复杂句子中的数量含义（Bergen 等人 2016，Potts 等人 2016）。这些语用推理模型还成功地应用于自然语言处理应用（Andreas＆Klein 2016，Monroe 等人 2017）和语言学研究的其他领域，如社会语言学（Burnett 2019）。另一种最近的方法是允许涉及表达式的语义含义的不确定性，以及对对话参与者的信念和偏好以及“共同基础”的其他方面的不确定性（例如，Brochhagen 2017）。最后，在最近的工作中，除了一般化的会话含义之外，还解释了更多的语用现象，例如特定的会话含义，解释或自由丰富（例如，Parikh 2010），预设分析（Qing 等人 2016）和礼貌（例如，Clark 2012，Yoon 等人 2020）。

## 3. 结论

双向优选论和博弈论是非常自然且相似的框架，用于形式化关于互动、目标导向的语用推理在语境中的格赖斯思想。最近的发展转向认识论或进化博弈论，或者基于经验数据的概率模型。最后，我们指出，类似于这里探讨的形式化技术适用于更广泛的问题领域，如哲学（例如，Parikh 2019）、语言演化（例如，Ahern和Clark 2014；Brochhagen、Franke和Rooij 2018；Carcassi 2020）以及计算语言学（例如，Vogel等人2014年；Cohn-Gordon、Goodman和Potts 2019年）。

## Bibliography

* Ahern, C. and R. Clark, 2014, ‘Diachronic Processes in Language as Signaling Under Conflicting Interests’, *The Evolution of Language: Proceedings of EVOLANG10*, E. A. Cartmill et al. (eds.), Singapore: World Scientific Press, 25–32.
* Andreas, J. and D. Klein, 2016, ‘Reasoning about pragmatics with neural listeners and speakers’, *Proceedings of the 2016 Conference on Empirical Methods in Natural Language Processing*, pp. 1173–1182.
* Aloni, M., 2007, ‘Expressing Ignorance or Indifference. Modal Implicatures in Bi-Directional Optimality Theory’, in B. ten Cate and Henk Zeevat (eds.), *Logic, Language and Computation: Papers from the 6th International Tbilisi Symposium*, Berlin, Heidelberg: Springer, 1–20.
* Asher, N., I. Sher, and M. Williams, 2001, ‘Game Theoretical Foundations for Gricean Constraints’, in *Proceedings of the 13th Amsterdam Colloquium*, R. van Rooy and M. Stokhof (eds.), Amsterdam: Institute for Logic, Language, and Cognition, 31–37.
* Benz, A., 2006, ‘Utility and relevance of answers’, in A. Benz, G. Jäger and R. van Rooij (eds.), *Game Theory and Pragmatics*, New York: Palgrave McMillan, 195–214.
* Benz, A. and R. van Rooij, 2007, ‘Optimal Assertions, and what they implicate. A uniform game theoretic approach’, *Topoi*, 26: 63–78.
* Bergen, L., R. Levy and N. D. Goodman, 2016, ‘Pragmatic Reasoning through Semantic Inference’, *Semantics and Pragmatics*, 9: 1–83.
* Bergen, L. and N. D. Goodman, 2015, ‘The Strategic Use of Noise in Pragmatic Reasoning’, *Topics in Cognitive Science*, 7: 336–350.
* Blutner, R., 1998, ‘Lexical Pragmatics’, *Journal of Semantics*, 15: 115–162.
* –––, 2000, ‘Some aspects of optimality in natural language interpretation’, *Journal of Semantics*, 17: 189–216.
* Brochhagen, T., 2017, ‘Signalling under Uncertainty: Interpretative Alignment without a Common Prior’, *British Journal for the Philosophy of Science*, 71: 471–496.
* Brochhagen, T., M. Franke, and R. van Rooij, 2018, ‘Co-evolution of lexical meaning and pragmatic use’, *Cognitive Science*, 42(8): 2757–2789.
* Burnett, H., 2019, ‘Signalling games, sociolinguistics and the construction of style’, *Linguistics and Philosophy*, 42: 419–450.
* Carcassi, F., 2020, ‘The cultural evolution of scalar categorization’, Ph.D. Thesis, University of Edinburgh.
* Clark, R., 2012, *Meaningful Games*, Cambridge, MA: MIT Press.
* Cohn-Gordon, R., N. D. Goodman, and C. Potts, 2019, ‘An Incremental Iterated Response Model of Pragmatics’, *Proceedings of the Society for Computation in Linguistics*, New York: Linguistic Society of America, 81–90.
* Degen, J., M. H. Tessler and N. D. Goodman, 2015, ‘Wonky worlds: Listeners revise world knowledge when utterances are odd’, in D. C. Noelle et al. (eds.), *Proceedings of CogSci 37*, 548–553.
* Dekker, P. and R. van Rooij (2000). ‘Bi-Directional Optimality Theory: An Application of Game Theory’, *Journal of Semantics* 17, 217–242
* Ebert, C. and G. Jäger, 2009, ‘Pragmatic Rationalizability’, in A. Riester and T. Solstand (eds.), *Proceedings of Sinn und Bedeutung 14*, SFB 732, vol. 5, University of Stuttgart, 1–15.
* Frank, M. C. and N. D. Goodman, 2012, ‘Predicting Pragmatic Reasoning in Language Games’, *Science*, 336: 998.
* Franke, M., 2009, ‘Signal to Act’, Ph.D. dissertation, University of Amsterdam.
* –––, 2011, ‘Quantity Implicatures, Exhaustive Interpretation, and Rational Conversation’, *Semantics and Pragmatics*, 4(1): 1–81.
* –––, 2014a, ‘Pragmatic Reasoning about Unawareness’, *Erkenntnis*, 79: 729–767.
* –––, 2014b, ‘On admissibility in game theoretic pragmatics: A reply to Pavan (2013)’, *Linguistics and Philosophy*, 37: 249–256.
* Franke, M. and G. Jäger, 2012, ‘Bidirectional Optimization from Reasoning and Learning in Games’, *Journal of Logic, Language and Information*, 21(1): 117–139
* –––, 2014, ‘Pragmatic Back-and-Forth Reasoning’, in S. Pistoia Reda (ed.), *Semantics, Pragmatics and the Case of Scalar Implicatures*, New York: Palgrave MacMillan, 170–200.
* –––, 2016, ‘Probabilistic Pragmatics, or why Bayes’ Rule is Probably Important for Pragmatics’, *Zeitschrift für Sprachwissenschaft*, 35:3–44.
* Franke, M., S. T. de Jager and R. van Rooij, 2012, ‘Relevance in Cooperation and Conflict’, *Journal of Logic and Computation*, 22: 23–54.
* Franke, M. and R. van Rooij, 2015, ‘Strategies of Persuasion, Manipulation and Propaganda: Psychological and Social Aspects’, in J. van Benthem, S. Gosh and R. Verbrugge (eds.), *Models of Strategic Reasoning: Logics, Games and Communities*, Berlin: Springer, 255–291.
* Gazdar, G., 1979, *Pragmatics*, London: Academic Press.
* Grice, H.P., 1967, ‘Logic and conversation’, *William James Lectures*, Harvard University, reprinted in *Studies in the Way of Words*, 1989, Cambridge, MA: Harvard University Press.
* Goodman, N. D. and A. Stuhlmüller, 2013, ‘Knowledge and Implicature: Modeling Language Understanding as Social Cognition’, *Topics in Cognitive Science*, 5: 173–184.
* Goodman, N. D. and M. C. Frank, 2016, ‘Pragmatic Language Interpretation as Probabilistic Inference’, *Trends in Cognitive Sciences*, 20: 818–829.
* Horn, L., 1984, ‘Towards a new taxonomy of pragmatic inference: Q-based and R-based implicature’. In: D. Schiffrin (ed.), *Meaning, Form, and Use in Context: Linguistic Applications*, GURT84, 11–42, Washington; Georgetown University Press.
* De Jaegher, K., 2008, ‘The evolution of Horn’s rule’, *Journal of Economic Methodology*, 15: 275–284.
* De Jaegher, K. and R. van Rooij, 2014, ‘Game-Theoretic Pragmatics Under Conflicting and Common Interests’, *Erkenntnis*, 79: 769–820.
* Jäger, G., 2002, ‘Some Notes on the Formal Properties of Bidirectional Optimality Theory’, *Journal of Logic, Language and Information*, 11: 427–451.
* –––, 2014, ‘Rationalizable Signaling’, *Erkenntnis*, 79: 673–706.
* Kao, J. et al., 2014, ‘Nonliteral Understanding of Number Words’, *Proceedings of the National Academy of Science*, 111(33): 12002–12007.
* Levinson, S. C., 2000, *Presumptive Meanings. The Theory of Generalized Conversational Implicature*, Cambridge, MA: MIT Press.
* Lewis, D., 1969, *Convention*, Cambridge, MA: Harvard University Press.
* Monroe, W., R. X. D. Hawkins, N. D. Goodman and C. Potts, 2017, ‘Colors in Context: A Pragmatic Neural Model for Grounded Language Understanding’, *Transactions of the Association for Computational Linguistics*, Volume 5, pp. 325–338. doi:10.1162/tacl_a_00064
* Parikh, P., 1988, *Language and strategic inference*, Ph.D. Thesis, Stanford University.
* –––, 1991, ‘Communication and strategic inference’, *Linguistics and Philosophy*, 14: 473–513.
* –––, 1992, ‘A Game-Theoretic Account of Implicature’, *Proceedings of the 4th TARK Conference*, San Francisco: Morgan Kaufmann, 85–94 [[Parikh 1992 available online](http://www.tark.org/proceedings/tark_mar22_92/p85-parikh.pdf)].
* –––, 2000, ‘Communication, meaning, and interpretation’, *Linguistics and Philosophy*, 23: 185–212.
* –––, 2001, *The use of Language*, Stanford, CA: CSLI Publications.
* –––, 2010, *Language and Equilibrium*, Cambridge, MA: The MIT Press.
* –––, 2019, *Communication and Content*, Berlin: Language Science Press.
* Pavan, S., 2013, ‘Scalar Implicatures and Philosophy’, *Linguistics and Philosophy*, 36: 261–290.
* –––, 2014, ‘Rationality in game-theoretic pragmatics: A response to Franke (2014)’, *Linguistics and Philosophy*, 37: 257–261.
* Perea, A., 2012, *Epistemic Game Theory: Reasoning and Choice*, Cambridge: Cambridge University Press.
* Potts, C., D. Lassiter, R. Levy and M.C. Frank, 2016, ‘Embedded implicatures as pragmatic inferences under compositional lexical uncertainty’, *Journal of Semantics*, 33: 755–802.
* Prince, A. and P. Smolensky, 1993, *Optimality Theory. Constraint interaction in generative grammar*, Cambridge, MA: MIT Press.
* Qing, C., N. Goodman and D. Lassiter, 2016, ‘A Rational Speech-Act Model of Projective Content’, in *Proceedings of the 38th Annual Conference of the Cognitive Science Society* (CogSci 2016). [[Qing, et al. 2016 available online](https://api.semanticscholar.org/CorpusID:9740188)]
* Rooij, R. van, 2004, ‘Signalling games select Horn strategies’, *Linguistics and Philosophy*, 27: 493–527.
* –––, 2008, ‘Game Theory and Quantity Implicatures’, *Journal of Economic Methodology*, 15: 261–274.
* Rothschild, D., 2013, ‘Game Theory and Scalar Implicatures’, *Philosophical Review*, 27: 438–478.
* Sandholm, W. H., 2010, *Population Games and Evolutionary Dynamics*, Cambridge, MA: MIT Press.
* Schulz, K., and R. van Rooij, 2006, ‘Pragmatic meaning and non-monotonic reasoning: the case of exhaustive interpretation’, *Linguistics and Philosophy*, 29: 205–250.
* Stevens, J., 2016, ‘Focus Games’, *Linguistics and Philosophy*, 39: 395–441.
* Stevens, J. and A. Benz, 2018, ‘Game-theoretic approaches to pragmatics’, *Annual Review of Linguistics*, 4: 173–191.
* Yoon, E., M. Tessler, N. Goodman and M. Frank, 2020, ‘Polite Speech Emerges From Competing Social Goals’, *Open Mind*, 4: 71–87.
* Vogel, A., M.C. Frank, D. Jurafsky, and C. Potts, 2014, ‘Learning to Reason Pragmatically with Cognitive Limitations’, *Proceedings of the 36th Annual Meeting of the Cognitive Science Society*, Paul Bello, Marcello Guarini, Marjorie McShane, and Brian Scassellati (eds.), Cognitive Science Society and Curran Associates, Inc., 3055–3060.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=implicature-optimality-games). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/implicature-optimality-games/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=implicature-optimality-games&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/implicature-optimality-games/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* [Probabilistic language understanding: An introduction to the Rational Speech Act framework](http://www.problang.org/), an interactive web-book, by Gregory Scontras, Michael Henry Tessler and Michael Franke, which introduces probabilistic pragmatic reasoning models.

## Related Entries

[defaults in semantics and pragmatics](https://plato.stanford.edu/entries/defaults-semantics-pragmatics/) | [game theory](https://plato.stanford.edu/entries/game-theory/) | [Grice, Paul](https://plato.stanford.edu/entries/grice/) | [implicature](https://plato.stanford.edu/entries/implicature/) | [logic: and games](https://plato.stanford.edu/entries/logic-games/) | [pragmatics](https://plato.stanford.edu/entries/pragmatics/)

[Copyright © 2022](https://plato.stanford.edu/info.html#c) by  
Robert van Rooij <[*r.a.m.vanrooij@uva.nl*](mailto:r%2ea%2em%2evanrooij%40uva%2enl)>  
Michael Franke <[*mchfranke@gmail.com*](mailto:mchfranke%40gmail%2ecom)>
