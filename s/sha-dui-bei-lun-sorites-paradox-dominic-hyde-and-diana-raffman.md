# 堆垛悖论 Sorites paradox (Dominic Hyde and Diana Raffman)

*首次发表于 1997 年 1 月 17 日星期五；实质性修订于 2018 年 3 月 26 日星期一*

堆垛悖论起源于一个古老的谜题，该谜题似乎是由模糊的术语生成的，即具有不明确（“模糊”或“模糊”的）适用范围的术语。 “秃子”，“堆”，“高”，“老”和“蓝”是模糊术语的典型例子：没有明确的界线将秃头的人与非秃头的人分开，或将蓝色物体与绿色物体（因此不是蓝色）分开，或将老年人与中年人（因此不是老年）分开。由于谓词“堆”具有不明确的界限，似乎没有一粒麦子能够区分出一堆麦子和不构成一堆麦子的数量之间的差异。因此，由于一粒麦子不能构成一堆，所以两粒也不能；如果两粒不能，那么三粒也不能；依此类推。这种推理导致了一个荒谬的结论，即任何数量的麦粒都不能构成一堆。

同样的推理形式在日常生活中很常见。多萝西·埃奇顿观察到：

> 还有“明天悖论”：那些需要做的讨厌任务，但无论是今天还是明天做都无关紧要；还有减肥者的悖论：我完全不在乎一块巧克力对我的体重会产生什么影响。（1997 年：296）

这个谜题可以用最简单的方式表达为一个论证，即使用演绎法：

* 1 粒小麦不能构成一堆。
* 如果 1 粒不能构成一堆，那么 2 粒也不能。
* 如果 2 粒谷物不构成一堆，那么 3 粒谷物也不构成。
* …
* 如果 999,999 粒谷物不构成一堆，那么 1 百万粒谷物也不构成。

因此

* 100 万粒不能成堆。

这个论证是一个悖论，因为从表面上无懈可击的前提出发进行推理，却得出了一个谬误。这个论证同样可以反其道而行之，从 100 万粒成堆这个前提出发：如果 100 万粒成堆，那么 100 万减去一粒成堆；如果 100 万减去一粒成堆，那么 100 万减去两粒成堆；等等。荒谬的是，即使一粒谷物也能堆成一堆。因此，逻辑推理似乎既能说明任何数量的谷物都不能成堆，也能说明任何数量的谷物都能成堆。
我们应该从这个不良结果中得出什么结论？悖论的论证有问题吗，还是使用模糊谓词真的会导致荒谬？[1] 部分原因是因为我们一直成功地使用这些普通词语，并且通常不会陷入像上面那样的荒谬之中，大多数模糊性理论家认为这个悖论是可以解决的，即悖论的论证是有缺陷的，我们可以发现这个缺陷。接下来，我们将考虑一些主要的解决尝试。

---

## 1. 堆垛悖论的历史

墨家哲学家尤布里德斯（公元前 4 世纪）通常被认为是这个谜题的首次提出者。（“sorites”一词源自希腊词 soros，意为“堆叠”。）虽然我们不知道他引入这个谜题的动机（以及其他几个传奇谜题），但后来希腊哲学家将这个悖论用作辩证武器，尤其是怀疑论者对斯多亚派对知识的主张的反驳。

奇怪的是，这个悖论直到 19 世纪末才引起了很少的后续关注。像普列汉诺夫（1908 [1937: 114]）这样的新黑格尔传统的马克思主义哲学家引用这个悖论作为“习惯”逻辑的失败和“矛盾逻辑”的实用性的证据。通过这种方式，一些马克思主义者试图确立辩证法的胜利。与此同时，在英美哲学中，形式逻辑重新获得了中心地位，其经典形式化不留任何余地给自然语言的模糊性。模糊性和相关的悖论被视为超出逻辑范围，因此对逻辑没有挑战。然而，自 20 世纪后半叶以来理想语言学说的消亡（见 §3.1）以来，对自然语言的特异性，包括其模糊性，的兴趣大大增加。

## 2. 悖论的不同表述

要使一个论证成为悖论的实例，至少需要满足三个条件。（1）必须能够为所讨论的谓词构建一个悖论序列，即一个在决定谓词应用的维度上具有有限成员的排序。对于“高”的悖论序列是一个高度的排序（一个高度的排序），对于“老”的悖论序列是一个年龄的排序（一个年龄的排序），依此类推。（2）序列中相邻的值必须只有微小的差异，即要么无法区分，要么只有轻微的差异。增量差异被认为可以保证如果一个模糊谓词适用于一对相邻的值中的一个，它同样适用于另一个。（根据赖特 [例如，1975]，在决定性维度上适用于增量差异的属性通常被称为模糊术语的容忍度。）（3）谓词必须对序列中的第一个值为真，并对最后一个值为假。

悖论通常以上述条件形式呈现。更正式地说：让‘Φ’是一个堆垛谓词，让‘αn’（其中 n 是一个自然数）表示‘Φ’的堆垛系列中的一个值。然后，可以用最简单的方式表示这个悖论，使用假言推理：

 条件堆垛悖论

Φα1 如果 Φα1 则 Φα2 如果 Φα2 则 Φα3 等等如果 Φαn−1 则 ΦαnΦαn（其中 n 可以是任意大的数）

悖论的不同表述将条件前提集合替换为普遍概括，并通过数学归纳法进行推导。让'n'是一个变量，范围是自然数，让'∀n(…n…)'断言每个数字 n 都满足条件...n...。此外，让我们将主张'对于任何 n，如果 αn 是 Φ，则 αn+1 是 Φ'表示为'∀n(Φαn→Φαn+1)'。

数学归纳法悖论

Φα1∀n(Φαn→Φαn+1)∀n(Φαn)

例如，由于头上只有 1 根头发的人是秃子，而且对于任意数量的头发 n，如果头发有 n 根的人是秃子，那么头发有 n+1 根的人也是秃子，所以任意数量 n 的人都是头发有 n 根的秃子。

这个谜题的另一个版本是归纳形式的变体。我们知道，“秃子”的堆垛系列中包含一些头发数量，使得拥有这些头发数量的人不是秃子。根据最小数原理（相当于数学归纳原理），必须存在一个最小数，假设为 i+1，使得头发有 i+1 根的人不是秃子。由于头上只有 1 根头发的人是秃子，所以 i+1 必须大于 1。因此，该系列包含一些头发数量 n（=i），使得头发有 n 根的人是秃子，而头发有 n+1 根的人不是秃子。让“∃n(…n…)”断言存在某个数 n 满足条件...n...。然后我们可以将后一种推理方式概括为这样：

 线条绘画的堆垛悖论

Φα1∼∀n(Φαn)∃n≥1(Φαn&∼Φαn+1)

堆垛悖论的线条绘制和归纳形式很好地说明了这个问题；显然，“秃子”的熟练使用者既必须，又不能在系列中画一条线。为了方便起见，接下来的大部分例子都是以条件或归纳形式来阐述这个悖论。当然，对堆垛悖论的充分解决可能需要解决所有版本的问题。

我们还应该提到一个非正式版本的悖论，即“强迫行军堆垛悖论”（Horgan 1994a；Soames 1999）。它是以一个熟练的说话者按步骤进行堆垛系列分类的假设分类为基础。一个熟练的说话者必须说一个麦粒不能构成一堆；但如果这是正确的，那么她也必须说两个麦粒不能构成一堆；三个麦粒也不行；以此类推，直到她必须说，例如，一百万个麦粒也不能构成一堆。正如将会出现的，强迫行军堆垛悖论在几种对这个悖论的处理中起着重要作用。

值得注意的是，关于悖论性的模糊定义（例如，Wright 1976; Bueno & Colyvan 2012）可能是错误的。如果悖论是可以解决的谬误，正如大多数模糊理论家所认为的那样，那么模糊性实际上并不是悖论的源头。也许有人会说，即使在谜题的正确诊断被发现之后，这个论证仍然是一个悖论，因为它仍然似乎是从真前提到假结论的无可置疑的推理。但是这样的观点使得模糊性变得过于依赖于特定情况的属性；我们所知道的是，一旦我们发现了谜题的正确解决方案，主要前提将不再显得真实。对于未经启蒙的人来说，它可能看起来是真实的，但这也是一种定义模糊性的可疑方式，即作为生成先前看起来或对未经启蒙者来说看起来是悖论的论证的属性。Bueno 和 Colyvan 说，“一个谓词之所以模糊，就在于它可以用来生成一个悖论性的论证”（2012）。但是这里的“可以用来”是什么意思？如果一个悖论性的论证是一个谬误，一个模糊的谓词就不能在其中被正确使用。这个标准是不是假定一个模糊的谓词是一个术语，当被错误使用时，它暂时（对未经启蒙者来说？）似乎会产生一个悖论性的悖论？（Raffman 2014: 18–19）

很有可能，悖论性只是像“老”和“富有”这样的词的一种虚幻特征；它们的模糊性是真实的。如果是这样的话，那么表面上的悖论性可能最好被视为模糊性的暂时症状，或者作为其“表面特征”的一部分（Smith 2008，例如 132；请参阅 Smith 的第三章以了解模糊性的见解）。

## 3. 对悖论的回应

与任何悖论一样，似乎有四种广泛的回应方式可供选择。一个可能会：

1. 否认逻辑适用于堆垛悖论表达式。

或者，一个可能会接受这个悖论是一个逻辑适用的合法论证，但然后通过否认其合理性来否定它，要么

2. 拒绝某些前提，或者
3. 否认其有效性。

最激烈的回应将是

4. 拥抱悖论并得出模糊术语要么不连贯要么无意义的结论。

在接下来的内容中，我们考虑了对堆垛悖论的主要哲学处理方式，以及它们如何运用这些策略来解决这个难题。

### 3.1 理想语言方法

作为弗雷格和罗素（参见戈特洛布·弗雷格和伯特兰·罗素的条目）致力于理想语言学说，他们追求类型（1）的反应（例如，弗雷格 1903 [1960]，罗素 1923）并不令人意外。理想语言的一个关键属性被认为是其精确性；因此，包括所有悖论术语在内的自然语言的模糊性是一个需要消除的缺陷。如果这是正确的，那么与许多理论家所认为的相反，悖论术语无法用来挑战古典逻辑。逻辑根本不适用于它们。奎因在回应中也表达了这一观点，他认为尽管消除模糊术语可能会对日常交流方式造成一些代价，但只要能够保留古典逻辑的“甜蜜简单”，这个代价是值得支付的（1981: 31–37）。

然而，随着理想语言学说的消亡和对普通语言的兴趣的复苏，模糊性不再被视为表面的或容易被放弃的特征。如果逻辑要有实际意义，它必须适用于现有的自然语言；悖论表达式是不可避免的，悖论必须直面。类型（2）的反应正是这样做的，并且是最常见的反应类型。逻辑被视为适用于自然语言，特别是适用于悖论的论证，并且后者被诊断为基于错误前提。

### 3.2 认识论理论

大多数模糊性理论家将模糊性视为一种语义现象，某种程度上根植于诸如“高”和“老”的词语的含义。正如我们将看到的，语义理论通常引入特殊的非经典逻辑和/或语义，以解决悖论（并适应边界情况的现象）。相比之下，认识论者认为模糊性只是一种无知的形式：模糊术语具有隐藏在我们之外的清晰边界。实际上，堆垛与非堆垛之间有明确的分界，高度与平均高度之间也有明确的分界，但我们无法发现这些分界的位置（例如，Sorensen 1988, 2001; Williamson 1994a,b, 2000; Graff 2000, Fara 2008; Rescher 2009）。从这个观点来看，堆垛悖论立即被解决：主要前提或条件前提之一只是错误的。而双值性得到保留：模糊术语的任何应用要么是真的，要么是假的，尽管我们并不总是知道哪个是真的。

世界、自然语言或能胜任的说话者的哪些事实可以用来确定模糊词语的清晰边界？根据威廉姆森（例如，1994b: 184）的观点，意义是由使用来监督的；换句话说，模糊术语的清晰边界的位置是说话者使用它的倾向的函数。（只要模糊术语的使用随时间变化，其边界可能是不稳定的。）当然，我们无法知道这些倾向的总体，也不知道相关的函数；我们对这些因素的无知阻碍了我们对术语边界位置的认识的途径之一。

对于了解边界位置的另一种可能途径被事实阻塞，即我们对模糊术语的应用知识是不精确的。不精确的知识受到误差边界原则的控制，即形式为“如果 x 和 y 在一个决定性维度上有递增差异，并且已知 x 是 Φ（旧的，蓝色的等等），那么 y 也是 Φ”的原则。例如，在知识不精确的情况下，我们只有在颜色递增不同的对象也是蓝色的情况下，才能知道一个蓝色的物体是蓝色的，因此只有在明确的情况下。相比之下，在“蓝色”悖论系列的边界或“半明半暗”区域中，某种蓝色只是递增地与不是蓝色的色调有所不同，甚至可能看起来相同；而我们无法知道这种差异在哪里。因此，如果我们将前一种色调分类为蓝色，那个分类是幸运的，因此并不构成知识。（根据合理的假设，看到某物 x 是蓝色足以知道 x 是蓝色的，可以得出结论，某些蓝色的东西是我们即使在理想的观察条件下也无法看到它们是蓝色的。）

认识论理论的优点和吸引力是显著的，并且它赢得了一部分支持者。与此同时，这个观点可能很难被接受。即使是它的支持者也承认认识论在直觉上是不合理的；而且它似乎增加了许多谜团。作为第一个近似，认识论者说

> 模糊术语具有不可知的清晰边界，这些边界由它们的不可知（即不完全可知）的使用模式的未知函数确定。

但是，似乎功能也必须是不可知的，而不仅仅是未知的；因为如果我们遇到它，我们怎么能认出它呢？我们怎么能确定我们掌握了正确的功能，除非确定它是否产生了正确的边界作为其值？如果是这样的话，那么认识论者的论点实际上必须是模糊术语具有不可知的尖锐边界，这些边界由其不可知的使用模式的不可知功能固定。

> （Raffman 2014: 10）当然，对于我们在这些情况下无法弥补的无知，提供了解释：例如，我们无法知道尖锐边界在哪里，因为我们的知识不精确，我们无法知道术语的总体使用模式，因为“数据是无限的”（Williamson 1994b: 184–185），等等。尽管如此，认识论可能有一种“恰好如此”的感觉。[3]（有关 Williamson 的进一步讨论，请参见 §5.1）

(Raffman 2014: 10) To be sure, explanations are provided for our irremediable ignorance in these cases: for example, we can’t know where the sharp boundaries lie because our knowledge is inexact, and we can’t know the total pattern of the term’s use because “the data are infinite” (Williamson 1994b: 184–185), and so on. Nevertheless, epistemicism may have the feel of a “just so” story.[[3](https://plato.stanford.edu/entries/sorites-paradox/notes.html#note-3)] (See §5.1 for further discussion of Williamson.)

Graff Fara 为认识论的不同流派辩护（Graff 2000，Fara 2008）。Åkerman 和 Greenough（2010）观察到她的解释是一种认识论，因为模糊的谓词会产生明确、双值的边界。[4] 然而，与 Sorensen（1988）和 Williamson（1994a，b）的认识论不同，模糊性的本质是边界可以随着 [说话者的兴趣] 的变化而移动。[5]（2010：277）

> 这样一个明确的边界是无法知晓的，因为（除其他原因外）它在堆垛系列中不断移动，随着说话者的兴趣而改变位置，以至于他永远无法遇到它（Fara 2008：328）。正如 Stanley 所说，

Such a sharp boundary is unknowable because (among other things) it is constantly moving around in a sorites series, changing location with the speaker’s interests in such a way that he never encounters it (Fara 2008: 328). As Stanley puts it,

> 当我们寻找模糊术语的边界时，我们的观察会改变模糊表达的范围，使得边界不在我们观察的地方。(2003: 269)

因此，我们永远无法发现边界在哪里，只要我们考虑它，每个条件前提似乎都是真实的。(Graff Fara 的解释中，兴趣相关性的作用在 §3.3.4 中进一步讨论。)

保留经典逻辑和双值性被认为是认识论方法相对于其他观点的主要优势(例如，Williamson 1992: 162)。实际上，因为双值性被广泛认为蕴含着明确的边界，许多模糊性理论家认为，在所有意图和目的上，认识论是唯一能够使用双值语义的理论(例如，Rosenkranz 2003，Keefe 2000)。特别是，他们认为没有模糊性的语义理论可以是经典的。然而，随后的发展对这一观点产生了怀疑；请参见 §3.3.5。

### 3.3 语义方法

如上所述，模糊性通常被认为是语言的一个语义特征。如果它是一个语义特征，那么它的逻辑和/或语义就不能是经典的，或者说标准思维如此。从 20 世纪后期开始，为模糊术语开发了许多非经典逻辑和语义，每个都推进了其专有的解决堆垛悖论的方法。所提出的逻辑创新的程度各不相同。

大多数关于模糊性的语义理论和堆垛悖论的处理都认为，模糊术语的应用在某些情况下是不确定的。具体而言，在模糊谓词“Φ”的堆垛系列中，它被认为是不确定的——没有“确切的事实”——哪个值是最后一个 Φ 值。这种不确定性通常被认为在谓词具有（可能的）边界情况时表现出来。边界情况可以被看作既不明确（或确定）Φ 也不明确不 Φ，或者可以被看作“x 是 Φ”这个句子既不真也不假，或既不超真也不超假，或既不真到程度 1 也不假到程度 1，等等。[7] 共享的想法似乎是，在“Φ”的堆垛系列中，边界情况的区域构成了谓词的模糊边界；而且由于系列包含这些不确定的值，悖论的主要前提（或一个或多个条件前提）要么不完全真，要么完全错误。接下来，我们将回顾一些主要的语义处理方法。

#### 3.3.1 堆垛悖论

符合最小破坏原则的一种方法是将范·弗拉森的超真值语义学（1966）应用于堆垛悖论和模糊性问题（例如，Fine 1975；Keefe 2000）。因此，它支持一种非二值逻辑，至少在表面上保留了经典的推理关系和经典的定律，同时允许真值间隙的存在。根据这种观点，堆垛悖论所带来的挑战可以通过元理论中的逻辑修订来解决，主张采取第二类（2）的回应。

与认识论概念不同，语义概念将模糊谓词的表面语义不确定性视为真实存在。边界情况是谓词既不明确适用也不明确不适用的值，其中“明确”是指语义分析而非认识论分析。谓词的正向扩展由谓词明确适用的值给出，负向扩展由谓词明确不适用的值给出，而剩余的（边缘）情况是谓词既不明确适用也不明确不适用的值。与将模糊性视为语义缺陷（例如，Fine 1975）或语义犹豫（例如，Lewis 1986）一致，超真值论者将“超真”（“超假”）定义为无论如何解决或明确化语义缺陷或犹豫，即在谓词的每个明确化上都为真（假）。将谓词应用于其正向扩展中的某个事物会导致超真命题，而将其应用于其负向扩展中的某个事物会导致超假命题。然后，将超真等同于简单真理，将超假等同于简单虚假，从而产生了具有边界情况的真值间隙的非二值逻辑。

以传统方式定义的有效性是指保持真实（简单地），超值论的有效性解释与经典有效性相一致。特别是，将法则视为零前提论证，超值论保留了所有经典法则。因此，尽管放弃了二值性，超值论验证了排中律。例如，不论“堆”是否模糊，对于任意数量的小麦粒来说，逻辑上都是真实的，它要么构成堆，要么不构成堆。因此，超值语义不是真值功能的。它容许了一些真分离的实例，其中没有一个分离是（超级）真实的。合取和条件也具有类似的非经典特征。

由于堆垛悖论的所有形式在经典逻辑中都是有效的，它们在超值论中也是有效的。使用假言推理的条件形式的结论被反对，因为注意到某些条件前提不为真；尽管可以承认，没有一个条件前提是假的。条件型堆垛悖论是有效的但不正确的。更具启示性的是，使用普遍主前提的版本的诊断。由于普遍前提的失败，这个版本也被认为是不正确的。普遍量化的条件不是真的；事实上，它是假的。虽然没有一个条件前提是假的，但根据超值论，某个条件是真的。也就是说，根据超值论，某个 n 是这样的，即“Φαn”成立而“Φαn+1”不成立（其中“Φ”相对于形式“αn”的主题是模糊的）。

由于超值语义学承认“∀n(Φαn→Φαn+1)”的假性在逻辑上等同于“∃n(Φαn&∼Φαn+1)”的真实性，因此堆垛形式的悖论是正确的：它在超值语义学上是有效的，因为在经典逻辑上是有效的，并且其前提是无可争议的真实的。超值语义学声称提供的是一个形式化的解释，说明尽管表面上看，这样的结论可能是真实的；它是真实的，因为无论如何解决涉及模糊术语（即悖论谓词）的不确定性，它都是真实的。

这样，堆垛悖论被认为已经被化解。将模糊性视为一种语义现象，经典语义学不再适用于模糊语言的语义学，而超值语义学被提出作为替代。这种解决方案面临的一个直接问题是，它最终将堆垛的数学归纳和线条绘制形式与逻辑保守的认识论理论以相同的方式对待。我们被迫接受“∃n(Φαn&∼Φαn+1)”的明显违直觉的真实性，这似乎假设存在一个明确的边界，然而这样的边界的存在正是模糊性理论的语义理论所要否认的。超值语义学家回应道，线条绘制堆垛的结论并不表达存在一个明确的边界。尽管承认了由 T‘∃n(Φαn&∼Φαn+1)’所表达的主张，

T‘∃n(Φαn&∼Φαn+1)’,(a)

语义精确性只能通过表达式 ∃nT‘(Φαn&∼Φαn+1)’(b)来正确捕捉

 ，而这在超值理论中明显被否定。虽然有某个截断点是真实存在的，但没有特定的点是真实存在的截断点。由于只有后一种截断点被视为明确的边界，因此对于我们所不知道的边界，我们不会对其做出承诺（与认识论理论者相反）。

and this is clearly denied by supervaluation theory. Whilst it is true that there is some cut-off point, there is no particular point of which it is true that it is the cut-off point. Since only the latter sort of cut-off point is taken to be a sharp boundary, no commitment is made to such a boundary of which we are ignorant (contra the epistemic theorist).

然而，通过这种解释，对逻辑的充分性产生了疑问。不仅必须正确地将（b）视为“Φ”的语义精确性，而且我们还必须准备好承认一些存在性陈述可以在没有任何真实实例的情况下成立，从而阻止从（a）到（b）的任何推理。正如元理论的双值原则的失败与排中律的保留使超值论者承认存在缺乏真实分支的真实析取一样，我们也必须承认逻辑的量化理论中类似的非标准行为。实际上，对认识论理论的反直觉方面的避免只是以牺牲其他直觉为代价。

在这一点上，超值论者可能会试图通过展示它们是由对模糊现象的基本理解所要求的来解释这些语义异常。更确切地说，建议是将模糊视为仅仅语义的，而不反映任何形而上学模糊的基本现象（即将模糊视为仅仅表征性的观点）可能支持超值论的方法。例如，Fine（1975）在捍卫排中律时似乎提倡了这种表征性观点，而 Varzi（2001）等人也以这种方式捍卫了超值论。（如果成功，这样的辩护也将为超值论和模糊的表征性观点之间的常见事实联系提供有原则的理由。）如果要追求这种解释，那么超值论的形式机制只有在否认形而上学模糊的情况下才能解决这个悖论。形而上学的辩论仍在进行中。另一方面，Keefe（2000）选择了一种冒险的实用辩护：尽管违反直觉，但应该接受困扰超值论的语义异常，因为它们是一个整体表现比其他任何理论都更好的理论的一部分；不需要额外的辩护。

威廉姆森（1994a）指出了两个似乎困扰超值论解释的进一步问题。首先，像条件证明、建设性二难论和归谬法等经典推理在通过添加一个确定性运算符“D”或类似运算符来表达模糊性的扩展语言中不再成立。扩展语言的逻辑明显是非经典的。（但慕梅特 [1975] 提供了一个不会遇到这个问题的替代有效性定义，但威廉姆森对此提出了其他反对意见。然而，格拉夫·法拉 [2003] 表明，如果我们将推论的概念加强为半影推论，即使没有确定性运算符，这些原则也会失败。）其次，关于高阶模糊性现象也存在问题。在适应高阶模糊性时，超值论者必须承认他所提供的真理概念，即超真理，缺乏真理通常认为具有的属性。因此，与超值论者的主张相反，真理并非超真理（参见基夫 2000 年的反驳）。

#### 3.3.2 超值论的相关理论

从更接近超值论者自身观点的立场上提出了一些对超值论的批评，这些立场与超值论的一些核心见解相似，但放弃了其他一些见解。

虽然同意超值论者提倡的类型（2）回应，但伯吉斯和亨伯斯通（1987）对该理论中广为讨论的排中律的保留提出了异议，而是采用了超值论逻辑的一种变体，面对模糊性所呈现的明显反例放弃了经典的排中律。（有关超值论者观点的讨论和批评，请参见基夫 2000 年第 7 章。）

另一种超真值论的变体是 Jaśkowski 的矛盾逻辑（参见关于矛盾逻辑的条目）的“讨论逻辑”，它支持对条件悖论的第三种类型（3）的回应。在 Mehlberg（1958）首次提出实际上是模糊性的超真值论处理之前十年，Łukasiewicz（参见条目）的学生 Stanisław Jaśkowski 发表了一篇关于他提出的模糊概念逻辑的论文。事实上，这是第一个形式化的矛盾逻辑系统。（有趣的是，Mehlberg 和 Jaśkowski 都是哲学的 Lvov-Warsaw 学派（参见条目）的学生，Łukasiewicz 是该学派的教授。）马克思主义者长期以来一直主张对悖论的矛盾方法，边界情况的预测提供了辩证法情境的典型例子。这个悖论通常被引用为古典逻辑的不足之处的证据；但直到 Jaśkowski 的开创性工作，这个提议才得到正式的阐述。这种逻辑，现在有时被称为“亚真值论”，以强调它与更熟悉的超真值论的二元性。它将假设的语义不确定性表示为语义过度决定，而不是对模糊现象的真值间隙响应的不确定性。Fine（1975）在为模糊性辩护时，指出（亚真值论的）真值过剩方法可以通过对其中提倡的真值间隙方法进行简单的重新解释来得到。 （有关该系统及其有限的辩护，请参见 Hyde 1997。有关批评，请参见 Keefe 2000：第 7 章和 Beall＆Colyvan 2001。）

#### 3.3.3 程度和多值理论

与上述非真值功能逻辑相反，已经提出了几种真值功能的非经典逻辑，特别是多值逻辑（请参阅多值逻辑条目）。再次，模糊性被视为一种适当的语义现象，伴随的不确定性提供了语义欠定或过定的案例，但真值功能被保留。这些方法在模拟模糊性和解决堆垛悖论时，对非经典真值的数量有所不同。

最初的提议由 Halldén 1949 年和 Körner 1960 年首次提出，并在 Tye 1994 年进行了改进，使用了三值逻辑。这种逻辑的动机与超值论者的动机类似。正如模糊谓词将对象分为正向扩展、负向扩展和半影区域一样，模糊句子可以分为真、假和不确定。然而，与超值语义不同，这些连接词都是根据真值功能定义的。尽管 Halldén 提出了 Kleene 的弱三值表，但 Kleene 的强三值表一直是首选（有关相关表格，请参见 Haack 1974 年的附录）。这个主题的最新变化是 Field 2003 年，它在 Kleene 的强表格上补充了一个改进的非真值功能条件，并将三值语义与常见的真值间隙方法区分开来。

对堆垛悖论的特定回应进一步取决于所采用的有效性定义。将有效性的概念推广到多值逻辑中，涉及指定某些值。在多值解释中，如果一个句子取得了指定的值，那么它是成立的（或可断言的）。然后可以将有效性定义为必要的指定值保持不变。（在经典逻辑中，当然只有真值被指定，因此广义概念归结为经典概念的必要真值保持不变。）然后有两个非平凡的选择：让指定值集合为{真}或{真，不确定}。前者的提议由科尔纳和泰采纳，导致对悖论的第二类回应。后者的提议导致了一个无矛盾逻辑，并产生了第三类回应（请参见关于无矛盾逻辑的条目中关于多值系统的部分）。当与 Kleene 强表相结合时，它导致了无矛盾系统 LP，该系统在韦伯（2010）中被提出来处理说谎悖论，并被提供作为模糊逻辑。

虽然一些人出于其真值功能而采用了上述三值方法，但其他人发现其结果是不可接受的。例如，那些认为经典定律的超值论论证是可信的人，会对排中律主张有时不完全为真或矛盾有时不完全为假的情况感到不满，这在这些系统中可能是可能的。对于这种方法的进一步担忧，也适用于超值论，是所引用的句子的三分法似乎面临着类似于导致两值经典逻辑被放弃的双分法的反对意见。由于高阶模糊现象（特别是二阶模糊），似乎没有更多的理由认为真句子和不确定句子之间或不确定句子和假句子之间存在一个明确的边界，就像我们认为真句子和假句子之间存在一个明确的边界一样。驱动悖论的模糊现象并不比一个明确的边界更暗示两个明确的边界。模糊概念似乎是没有边界的概念。没有有限数量的划分是足够的。泰（1994）通过使用模糊元语言来避免这些困难；Sainsbury（1990）提出模糊术语是“无边界”的，并且属于模糊谓词的范围更像是被磁极吸引而不是适应一个鸽子洞（正如常识所认为的那样）。

Goguen（1969）和 Zadeh（1975）则建议用无穷值逻辑取代经典的二值逻辑。Hyde（2008）也采用了这种方法，尽管无穷值语义被认为是纯粹的形式设备，而不是对真实程度的承诺（参见 Cook 2002）。然而，无穷值或模糊逻辑（参见模糊逻辑条目）也因其承认真实程度而得到推广。正如秃子有不同程度一样，据说陈述事物秃子的句子的真实程度也是如此。约翰比乔更秃的事实反映在句子“约翰秃了”比“乔秃了”具有更高的真实程度。Smith（2008）正是基于这个原因提倡模糊逻辑。

无穷值逻辑随后以多种方式解决了堆垛悖论。与所有多值逻辑一样，连接词和有效性可以有不同的定义，从而产生多种不同的逻辑。一个标准的提议是通过 Łukasiewicz 的连续值真值语义来进行。与三值情况一样，对悖论的响应类型也在很大程度上取决于有效性的定义。如果将有效性定义为保持指定值并且只指定最大值，那么条件堆垛悖论可以采用类型（2）的响应，如 Hyde 2008 所述。然而，重新恢复经典定律的有效性在这种一般方法中需要指定超过最大值的值，从而导致类型（3）的响应。相反，Machina（1976）建议将有效性定义为保持论证前提中任何一个的最低真值程度。根据这种方法，条件堆垛悖论是无效的，因此再次出现了类型（3）的响应。Edgington（1996）阐述了一种明显不同的非真值功能程度理论，该理论保留了双值原则和经典逻辑。根据这种方法，堆垛悖论的条件形式是有效的，并提倡类型（2）的响应。Smith（2008）通过独特的有效性定义将非双值真值功能程度理论与经典逻辑相结合。Smith 独特的方法为悖论提供了另一种类型（2）的响应。

与三值方法一样，无穷值方法在处理模糊性问题时也存在一些问题。首先，如果将无穷个语义值用来模拟真实程度，那么真实程度的概念本身需要解释。其次，如果使用数值真值，对于特定真值的分配似乎需要一些理由。第三，必须明确放弃已被充分理解的经典理论而采用程度理论的全部含义，才能对其价值进行适当评估（关于这些问题，请参见 Sainsbury 1995 年第 2 章；Keefe 2000 年第 4 章。有关详细的辩护，请参见 Smith 2008 年第 5 章）。此外，目前尚不清楚这种方法是否成功地避免了高阶模糊性问题。而且，假设一个完全有序的真值集合过于简单。并非所有的自然语言句子在真实性方面都是可比较的。由于红色等概念的多维性质，我们可能无法判断两个在色调、亮度或色彩饱和度上有所不同的红色斑块哪一个更红（关于后一点，请参见 Williamson 1994a 年第 4 章；Keefe 2000 年第 4 章。Smith [2008 年第 6 章] 认为所谓的高阶模糊性问题实际上是一个独特的现象，并提出了独特的回应）。

Smith 为他所称的模糊多值论辩护，将程度理论和超值论的元素融合在一起。多值论语义与超值论不同之处在于，它为每个模糊谓词分配了多个精确的经典扩展（"可接受的解释"），并放弃了超真实的语义概念。他用指令“如果一个句子在每个可接受的解释上都为真，则说它只是真实的”（2008 年：109-110）取代了超真实。Smith 写道：

> 多值论者会告诉我们，“这片叶子是红色的”和“这片叶子不是红色的”既不能简单地说是真的，也不能简单地说是假的，而“这片叶子是红色的或不是红色的”可以简单地说是真的...我们没有违反真值功能性，因为在任何语义事实层面上，一个析取式被赋予真值 True，而它的两个析取项都不是。因为唯一的语义事实就是关于每个可接受解释中正在发生的事实，而这些事实完全是经典的（因此是真值功能性的）。我们只是在这些语义事实之上加了一层讨论。这种讨论听起来不是真值功能性的，但实际上是表象现象...它并不真实地描述一个非真值功能性的语义现实。（2008 年：110）

虽然“简单真实性”可能与超真实性有很大的不同，但多值论者支持这样一种观念，即在多个价值（解释）上定义的属性在能说流利的说话者的言语行为中起着重要作用。

#### 3.3.4 语境主义及其相关理论

对于许多值和超值论方法不满意，Kamp（1981）引入了一种上下文主义的解决方案来解决这个悖论。Kamp 关注堆垛悖论的归纳形式，他认为在其个体上下文中，主要前提的每个实例都是真实的，其中上下文由先前被接受为真实的句子（包含给定谓词的句子）组成。（对于 Kamp 来说，上下文就是一组句子。）每个实例之所以为真，是因为在评估其结论之前，必须将其前提添加到操作上下文中，并且前提和结论中引用的相邻值只是逐渐不同的。在经典语义中，普遍的主要前提也将是真实的；但是 Kamp 采用了一个非经典的定义，规定普遍前提在上下文中是真实的（i）当其实例为真时，以及（ii）当添加普遍前提本身时保持一致。问题在于，添加该前提会产生一个不一致的上下文，该上下文“将相同的句子分配给相反的真值”（Kamp 1981：252）。因此，尽管其所有实例都是真实的，但该前提是错误的。这种观点的上下文相对性在直观上是有吸引力的，并且无需解释为什么普遍前提的每个实例在至少有一个实例为假时似乎是真实的。同时，对于普遍量词的非标准语义可能看起来不直观。

受 Kamp 的启发，后来的语境主义方法（Raffman 1994）认为悖论的主要前提是错误的，但至少有两个原因使其看起来是真实的。首先，我们将其与真实的说法混淆了，即如果 αi 是 Φ，那么当考虑到这两个值时，αi+1 也是 Φ。尽管这个说法是真实的，但它并不能证明悖论的结论，因为悖论的结论只涉及到单独考虑一个值。第二个原因是一个假设，即主要前提可以是错误的，同时看起来是真实的，因为在进行强制行军时，演讲者的口头倾向发生了特征性的变化，从“Φ”变为“非 Φ”。这种倾向性的变化构成了一种语境的变化（类似于格式塔转变），使得“Φ”和“非 Φ”的协调扩展发生了变化，使得在切换位置两侧的值 αi 和 αi+1 都被归类为非 Φ；特别是，在切换之前，αi 被归类为 Φ，在切换之后被归类为非 Φ。因此，这两个谓词从来没有以一种区分相同语境下的两个值的方式被应用，因此演讲者能够在不越过边界的情况下从“Φ”切换到“非 Φ”。主要前提看起来是真实的，是因为我们没有意识到只有通过在语境上模棱两可才能为其所有实例同时确保真实性。

后一种观点受到批评，因为（除其他事项外）仅适用于强制行军悖论，而不适用于堆垛悖论；堆垛悖论涉及一系列抽象的价值（如颜色、高度、年龄等），与说话者的言语倾向或行为无关。换句话说，拉夫曼的解释可能解释了强制行军悖论的主要前提似乎是真实的原因，但它并没有触及悖论本身。由于它们的解决方案通常涉及动态因素，其他语境主义对悖论的处理也可能容易受到这种反对意见的攻击。

Soames（1999 年，2002 年）认为，模糊术语在索引表达式的方式上是与语境相关的。Stanley（2003 年）反驳说，如果 Soames 是正确的，那么将悖论诊断为在隐含的语境参数上产生歧义是不可能的，因为索引表达式在动词短语省略中不允许可变解释。考虑以下陈述：“杰克现在很累，吉尔也很累。”索引表达式“现在”的第一次和第二次（隐含的）出现必须接受相同的解释：杰克和吉尔在同一时间累了。由于解释的固定性，使用这种省略的堆垛悖论版本在语境主义解决方案中是不可行的，即使存在相关类型的语境变化。Stanley 提供了以下示例：

> 如果那 1 是一堆，那 2 也是，如果那 2 是，那 3 也是，如果那 3 是，那 4 也是，...然后那 n 也是...（2003 年：272）

其中'thatn'指的是“堆垛”序列中的第 n 个元素。如果“堆垛”是指示性的，正如 Soames 所提出的那样，在 Stanley 的表述中，我们没有理由认为它的范围会从一个连接词转移到另一个连接词。为了捍卫语境主义者，Raffman（2005）回应道，模糊术语并非指示性的。她认为，在动词短语省略中，模糊术语应该按照“那只大象很大，那只跳蚤也很大”的模式来理解。在这里，“大”的范围在两个连接词之间变化，尽管有省略（Ludlow 1989）。

尽管 Graff Fara 为悖论辩护了一个认识论解决方案，但她提出了一种动态语境主义的解释，解释了条件前提的直观吸引力。在她看来，模糊谓词表达的是相对于兴趣而言的属性，其范围是由说话者在某个时间内认为重要的事物来确定的。悖论的前提似乎是真实的，因为一个进行强制行军的说话者在“效率上有一种持续的兴趣，这导致 [他] 避免做出过于昂贵的区分”（Fara 2008: 327-8）。例如，在“高”的堆垛系列中，对于任何一对相邻、逐渐不同的高度，当说话者积极考虑这对高度时，两个高度之间的相似性显著，区分它们的成本超过了好处：

> [假设] 我的主要目的是为院子里选择一棵樱桃树。对于两棵高度非常相似的樱桃树之间的区分，考虑到我的效率兴趣，将是非常昂贵的。但是，当我积极考虑这两棵树作为我的目标的实际选择时，区分将变得更加昂贵。（Fara 2008: 328）

由于成本高昂，所以这两个高度将被视为“在目前情况下相同”，如果其中一棵树很高，另一棵也是如此。实际上，“高”的应用受到一种与利益相关的容忍形式的控制。（可以假设发言者的利益在考虑显著相似的价值时必然是成本，特别是后者的利益不能被其他利益所取代，比如对尖锐边界位置的兴趣。）

一些上下文化者，如 Burns（1991），利用谓词的尖锐边界从不在人们寻找的地方的观念，为悖论的纯粹语用分析辩护，同时保持经典语义学和逻辑的完整性；其他人则认为这对逻辑和语义学产生了影响，并主张非经典方法。Shapiro（2006）的书发展了一种动态上下文主义理论，采用了一种独特的超值逻辑和语义学变体，以提供对悖论的第二类解决方案。Soames（1999）借助上下文敏感性来辩护模糊谓词的三值逻辑，假设确定的示例、确定的非示例和边界情况之间存在边界。结合 Kleene 的强三值语义，这种非经典上下文主义否认悖论的普遍量化主前提的真实性，同时也否认其虚假性。（Tappenden [1993] 提出了一种类似的三值方法，借助上下文来解释普遍量化前提的表面真实性，但他在这里使用的上下文概念与 Kamp 和 Soames 的略有不同。）条件悖论也可以得到解决。接受普遍量化符号的标准三值真值条件，Soames（1999）认为条件悖论具有一些非真条件前提。

对于对语境主义的不同类型的批评和有用的分类法（特别关注“扩展转移”和“边界转移”观点之间的区别），请参阅 Åkerman 2009 和 Åkerman＆Greenough 2010。

#### 3.3.5 多重范围理论

多重范围（“多范围”）理论是一种关于模糊性的语义理论，旨在保留经典逻辑和双值性。[8] 在这里，一个表达式的模糊性在于它有多个同样允许的、任意不同的应用方式，相对于给定的语境（Raffman 2014: ch.4）。在一个堆垛悖论系列中，一个术语的模糊性体现在它具有多个同样允许的、任意不同的停止应用的位置。任何关于模糊性的充分理论都必须承认在堆垛悖论系列中存在允许的停止位置，因为模糊术语的熟练使用者需要在结束之前停止应用它。例如，在一个从明显的 90 岁老年到明显的中年（因此不算老）50 岁的堆垛悖论系列中，比如 2018 年的美国人-可以将语境细化到您喜欢的程度-说话者可以在 70 岁、67 岁、65 岁、63.5 岁等处停止应用“老”。不同的说话者会在不同的年龄停止，同一个说话者在不同场合也会在不同的年龄停止。系列中的任何特定停止位置都是任意的，因此没有立法力量；当说话者在不同的位置停止时，他们不能互相指责错误。相比之下，边界是有立法力量的；没有在边界处停止应用“老”的说话者将犯错误。边界和允许的停止位置之间的区别是多范围方法的基石。

这种应用的多样性据说在谓词的语义中以多个应用范围的形式得到反映。应用范围只是语义中对谓词可以合理应用的方式的抽象表示。更正式地说：一个范围是一组值（例如年龄），谓词可以在这些值的实例化上进行合理应用。在从 90 到 50 的系列中，“老”一词的一个应用范围可能包含 90-70 岁的年龄，另一个范围可能是 90-65 岁，另一个范围可能是 90-63.5 岁，依此类推；而这些不同范围中的年龄（例如 90-70 岁）将由不同的人在不同的世界上实例化。

根据多范围观点，将模糊术语应用于给定值的句子相对于包含该值的每个范围而言是真实的，并相对于其他范围而言是假的。下图显示了一些“老”，“边界线”和“中年”的应用范围。

![](https://plato.stanford.edu/entries/sorites-paradox/sorites-fig.svg)

图 1：一些“老”，“中年”和“老 [中年] 边界线”的应用范围

请注意，每个谓词都有一些范围与其他两个谓词的某些范围重叠。图表显示，对于一个 63 岁的人来说，句子“x is old”相对于“old”的第 3 个范围、第 4 个范围和第 5 个范围是真的，相对于第 1 个范围和第 2 个范围是假的。句子“x is middle-aged”相对于“middle-aged”的第 1 个范围和第 2 个范围是真的，相对于其他范围都是假的。句子“x is borderline old”相对于“borderline”的每个范围都是真的，除了第 4 个范围，相对于后者是假的。

Raffman 对两种潜在的混淆进行了警告。(1)适用范围不是明确化(2014: 102–3)。要理解为什么，注意在多范围观点中，谓词“边界”具有像任何其他模糊术语一样的适用范围；“边界”的适用范围包含边界值。相比之下，明确化的性质决定不包含边界值。其次，(例如)“老”的范围只包含老年人，而“老”的明确化包含老年人和非老年人(例如中年人)。因此，范围只包含一个可接受的停止点，而明确化包含一个明确的边界。因此，第三，范围指定了能够实际应用该术语的能力说话者的方式，而根据明确化应用“老”的说话者将会将其(误)应用为具有明确边界的术语。第四，多范围观点中没有超真理的类似物；普通真理是相对于单一范围的真理。(2)适用范围不是(上下文的)方面。除其他事项外，说话者通常意识到他们所相对化的上下文，并且可以出于某种原因选择给定的上下文，但他们不会(也不能)选择将模糊术语的应用相对化到哪些范围。相反，说话者只是简单地选择如何对给定的值进行分类，而该分类是相对化的-自动地，可以说是由术语的语义决定，相对于包含所讨论的值的每个范围。相对于范围的相对化不是说话者所做的事情。(值得注意的是，尽管对堆垛悖论的语境主义处理通常与模糊术语的不同类型的语义学相结合，例如认识论主义、超值论主义或三值语义学，但多范围解决方案采用了专有的多范围语义学。)

在多范围观点上，堆垛悖论被认为是解决了，因为为了避免在范围上的模棱两可，悖论中的每一行都必须相对于“旧”的相同应用范围具有其真值。而且，由于每个范围都包含一个最后的年龄-一个允许的停留地点-悖论的主要前提相对于任何上下文中的谓词的每个范围都是错误的。

多范围理论家假设悖论的主要前提似乎是真实的，因为我们将其与使用模糊词语的两个实用规则混淆在一起（2014 年：172-5）：

* （I）对于任何模糊术语“Φ”：如果 αn 和 αn+1 在一个决定性维度上只有逐渐的不同，那么谓词的任何差异应用，即对其中一个但不对另一个的“Φ”的应用，必须是任意的。（即：任意而不是不允许的）。
* (II)对于任何模糊术语“Φ”：如果 αn 和 αn+1 在一个决定性维度上只有逐渐的不同，那么如果 Φαn，则 Φαn+1，只要 αn 和 αn+1 被成对考虑。[10]

在这里讨论的各个方面中，多范围方法最为突出地受到了对其对真理的极端相对主义的批评。反对者认为，将真理相对化于可能的世界，并相对于说话者、时间、空间位置、比较类别、说话者的兴趣和目的、利害关系和评估标准等语境因素，是一回事；而将真理相对化于即使在所有这些语境参数都固定之后仍然变化的因素，是另一回事。多范围理论家提出的极为细致的相对性似乎将真理的概念拉伸到了极限。此外，还有关于“适用范围”这个谓词本身的（高阶）模糊性的问题；而且不清楚说话者是否会遵循类似于上述的规则（I）。有关这些和其他批评，请参见 Åkerman 2014、Égré 2015、Sainsbury 2015、Scharp 2015 和 Caie 2015；以及 Raffman 2015 中的一些回应。

虽然这里没有空间来对它们进行回顾，但我们应该注意到，模糊性理论家已经进行了各种有启发性的实证研究，调查普通说话者对模糊术语的使用。例如，请参见 Égré 2009、Ripley 2011、Alxatib & Pelletier 2010、Serchuk et al. 2011、Huang 2012、2013、Égré et al. 2013。

### 3.4 接受悖论

几位哲学家支持一种（4）型的回应，得出悖论是无法解决的结论；我们只是被困在其中。那么问题是悖论展示了什么。例如，达梅特（1975）认为，模糊的观察性谓词，其应用被一个非传递的不可区分关系所控制，是不连贯的。这种观点似乎对一个明确的颜色阴影的熟悉概念是致命的（参见，例如，杰克逊 1975 年；赖特 1975 年；皮科克 1992 年；格拉夫 2001 年；米尔斯 2002 年；海利 2005 年；Chuard 2007 年的讨论）。

另一种（4）型的回应认为，与表面现象相反，条件性的堆垛悖论是正确的。例如，毕竟，没有任何数量的麦粒能够构成一堆。然而，这种观点立即遇到麻烦，因为悖论是成对出现的。如上所述，根据堆垛谓词是否是否定，这个谜题有负面和正面版本。接受所有堆垛论证为正确需要同意额外的主张，即由于一粒麦粒构成一堆，任何数量的麦粒都构成一堆。这导致了一种激进的不连贯，因为既有承诺认为所有数量都构成一堆，也有承诺认为所有数量都不构成一堆。同样，每个人都是秃子，也没有人是；每个人都是富有的，也没有人是，等等。

问题在于任何正条件堆垛悖论的正确性都会削弱相应负版本的无条件前提的真实性，反之亦然。除非一个人准备接受自然语言中的矛盾大流行，否则并非所有的堆垛悖论都是正确的。Unger（1979）和 Wheeler（1979）提出了一种更受限制的接受方式。对于类型（1）和（3）的回应不满意，一个人接受经典推理规范的适用性和有效性。尽管如此，对迄今为止考虑过的类型（2）的回应不满意——拒绝某些条件前提——留下了两个选择：要么拒绝次要（无条件）前提，要么接受它，并且随之接受悖论的正确性。所倡导的是那些否定一切事物的堆垛性、秃子性、多毛性、富有性、贫穷性等的堆垛悖论的正确性——一种类型（4）的回应——以及相应的所有正变体的无条件前提的虚假性——一种类型（2）的回应。像“堆”、“秃”、“多毛”、“富有”和“贫穷”这样的术语都不适用于任何事物。（有关批评，请参见 Williamson 1994a：第 6 章。）

## 4. 与说谎悖论的统一

传统上认为堆垛悖论与语义和集合论的自指悖论在实质上没有任何相关性。然而，McGee（1991）和 Tappenden（1993）基于模糊谓词和真理谓词之间的相似性，提出了对说谎悖论和堆垛悖论的统一处理。最近，Field（2003：262）谈到

> 一些诱惑将 [语义悖论和模糊悖论] 联系起来，认为语义悖论是由于语义概念（如“真实”）中的模糊或不确定性所致。

Field 2008 进一步发展了这一主题，尽管它主要致力于解决谎言者、Curry 和其他悖论。Field 的方法是通过放弃排中律的逻辑来解决问题。

一些人认为，语义悖论和堆垛悖论本身“属于同一类”。因此，Colyvan（2009）指出了一些悖论可能被认为是同一类的方式，并得出结论说谎言者和堆垛悖论是例子，因此应该有类似的解决方案。Priest（2010）支持这一观点，认为自指悖论和堆垛悖论都有一个共同的基本结构，满足 Priest 所称的“封闭模式”。在假设这种共同结构足以保证类似处理的情况下，Priest 提倡对堆垛悖论采取一种与自指悖论相类似的反矛盾响应。实际上，与悖论句子一样，涉及边界情况的一些模糊句子将提供真正矛盾的例子，即真假两面派。

## 5. 哲学课程

在考虑了对堆垛悖论所提出的逻辑和语义挑战的几个主要回应之后，值得思考一下这个问题引发的一些更广泛的哲学问题。由于模糊现象首先和主要表现为语言现象，因此对于意义、真理和指称的问题，各种回应的交叉是不足为奇的。

### 5.1 用法即意义

对认识论理论家的一个挑战是，根据这种观点，意义和使用之间通常被认为存在的联系似乎变得紧张甚至完全断裂（参见第 3.2 节）。虽然威廉姆森在 1994 年的《边际误差原则》中讨论的原则可以解释我们如何对所假设的明确界限一无所知，但人们可能认为，由于我们对模糊术语的使用并没有划定明确的界限，根据普遍接受的意义和使用之间的联系，它们可能不包含这些界限。正如威廉姆森所述，其他人可能担心，“模糊性的认识论观点使得真值条件与我们同意和不同意的倾向无法接受地脱离开来”（1994a：205）。似乎这种观点必须放弃我们的使用决定意义的想法。

一个明显的回应是，意义和使用之间的联系并不像人们可能认为的那样强。自然也可能在决定意义方面起到一定作用，例如在自然种类术语的情况下；但对于像“薄”的谓词这样的术语来说，自然提供的东西不太可能超越我们的使用。威廉姆森进一步回应称，所讨论的决定论命题实际上是一个监督命题——意义依赖于使用——这个命题可以被认同为认识论者。诚然，认识论者无法准确地说出意义如何依赖于使用，因此无法根据使用事实计算模糊术语的应用的意义或真值条件。然而，回应继续说，这种无能力是所有理论家都应该接受的。假设认识论理论必须在这一点上做出好的解释，这对理论提出了不合理的期望（有关进一步讨论，请参见威廉姆森 1996 年和伯吉斯 2001 年）。

监督性论题也受到对称性考虑的挑战。当面对“薄”的边界情况时，论证认为，语言使用者既不会同意该术语的应用，也不会同意其否定的应用。对于这两种主张，异议的模式也是对称的。[11] 然而，尽管在使用层面上存在这种对称性，但在真实性和虚假性层面上，必须打破其中一个术语或其否定的应用是真实的，而另一个是虚假的。如果我们的使用模式同样不确定，那么如何在没有武断和断开意义与使用之间联系的情况下解决问题的真相？威廉姆森提出的答案在于真实性和虚假性不是对称的概念。在真实性缺失的情况下，虚假存在，因此在使用层面上存在对称性的地方，虚假占主导地位。这种回应是否成功在伯吉斯 2001 年和韦瑟森 2003 年的讨论中有争议。

### 5.2 真理和 T-模式

正如在超值论中已经注意到的那样，放弃双值性的理论被指责必须拒绝塔斯基对真理的约束，该约束包含在他的 T-模式中：“如果且仅如果 p，那么‘p’是真的”。在 T-模式的背景下拒绝双值性被认为会导致荒谬（威廉姆森 1994a：第 7 章；见赖特 1994 年的批评）。这一指责更普遍地适用于与 T-模式相结合的任何非双值模糊理论。如果得到验证，在模糊性存在的情况下放弃双值性的压力将对真理的通货膨胀解释产生怀疑。许多人会发现这个结果不合适。例如，菲尔德（2008）致力于从一系列悖论中拯救这个关于真理的解释，并拒绝了真值间隙方法。

超值论者回应称，尽管 T-模式不正确，但相应的相互蕴涵论题并未受到威胁：“‘p’是真的”蕴涵并被‘p’所蕴涵。然而，后者的主张严格弱于根据超值论的条件相应主张，人们可能会想知道这种较弱的承诺是否足以捕捉到真理的重要性（参见 Keefe 2000：第 8 章）。其他人则对 Williamson 的论证提出了异议，指出在对模糊性的非双值方法的背景下，否定可以以不同的方式定义，并且该论证假设拒绝双值性，涉及到否定的特别强烈的解读。作为回应，Williamson 认为，虽然可以提供一个适当弱的否定解释，足以削弱对双值性普遍接受的论证，但在模糊性的特殊情况下，高阶模糊现象提供了类似地将这种较弱的拒绝推向荒谬的材料（参见 Williamson 1994a：193f.和 Pelletier＆Stainton 2003 进行进一步讨论）。

然后，即使有一种意义上的真理是非双值的，仍然满足 T-模式，从而提供了一种贬低的解释，模糊性所带来的问题的特殊性质排除了这种综合的可能性。高阶模糊现象所显示的问题的深度表明，仅仅通过拒绝双值性无法解释这个问题。

### 5.3 引用的不可测性

尝试解决堆垛悖论也引发了关于指称的问题。与对堆垛悖论的认识论回应不同，超值论常常与语义模糊的方法相关联，似乎致力于指称的不可知性。

考虑使用“在珠穆朗玛峰上”这个谓词的堆垛悖论，沿着从山顶到山谷地面的线上进行毫米级的区分。第一个点（山顶）显然在珠穆朗玛峰上。最后一个点（在山谷中）显然不在。而在中间没有明确的点，我们会在那里划定将山与周围环境分开的清晰边界。这种悖论所依据的模糊性或不确定性，在这种方法中，并不是认识论限制的结果，也不是珠穆朗玛峰本身的不确定性，而是由于关于该术语的指称应该算作什么的不确定性而产生的。根据超值论者的观点，模糊性是一种语义上的不确定性，正如经常所说的那样。在这种情况下，关于到底指称了地球的哪一部分，根本就没有确切的事实。有一系列可接受的候选人，都有同等的声称是珠穆朗玛峰，其中我们只是没有决定，也没有人愚蠢到去尝试（引用刘易斯的话）。在这种情况下，与许多问题重叠（参见有关许多问题的条目），该理论承诺一个单数术语“珠穆朗玛峰”，尽管表面上是一个指示短语，缺乏任何独特的确定指称。这符合罗素对模糊性的早期分析，即“指称中的一多性”。

正如 Keefe（2000：第 7.1 章）所指出的那样，因此理解的超值论仍然使得这样的说法成立，即只有一个（明确界定的）珠穆朗玛峰（因此声称解决了众多问题和前述的堆垛悖论，因为确实存在一个明确的切割点来划定是否在珠穆朗玛峰上），即使没有一个（明确界定的）山峰，可以说它是“珠穆朗玛峰”所指的东西（因此没有山上的任何一点可以说它真正是切割点）。只有一个珠穆朗玛峰，但没有确切的事实是什么。

就像之前关于超值论中存在量词角色的问题一样，人们可以辩论这是否是一个应该接受的结果，还是一个不利于推进理论的不良结果。这种方式中的参考确实令人惊讶。此外，这样的情况并不是例外；鉴于模糊的特指术语的普遍存在，这样的情况似乎是规则（参见 Lewis 1993；McGee＆McLaughlin 2000；Morreau 2002）。

<!--md-padding-ignore-begin-->
## Bibliography

* Åkerman, Jonas, 2009, “Contextualist Theories of Vagueness”, *Philosophy Compass*, 7(7): 470–480. doi:10.1111/j.1747-9991.2012.00495.x
* –––, 2014, “Review of Diana Raffman’s *Unruly Words: A Study of Vague Language*”, *Notre Dame Philosophical Reviews*, 2014.03.35. [[Åkerman 2014 available online](http://ndpr.nd.edu/news/unruly-words-a-study-of-vague-language-2/)]
* Åkerman, Jonas and Patrick Greenough, 2010, “Hold the Context Fixed—Vagueness Still Remains”, in Dietz and Morruzzi 2010: 275–288.
* Alxatib, Sam and Francis Jeffry Pelletier, 2011, “The Psychology of Vagueness: Borderline Cases and Contradictions”, *Mind and Language*, 26(3): 287–326. doi:10.1111/j.1468-0017.2011.01419.x
* Beall, J.C. and Mark Colyvan, 2001, “Heaps of Gluts and Hyde-ing the Sorites”, *Mind*, 110(438): 401–8. doi:10.1093/mind/110.438.401
* Bobzien, Susanne, 2010, “Higher-order Vagueness, Radical Unclarity, and Absolute Agnosticism ”, *Philosophers Imprint*, 10(10): 1–30.
* Bones, Inga and Raffman, Diana, forthcoming, “The Contextualist Solution to the Sorites Paradox”, in S. Oms and E. Zardini (eds.), *The Sorites Paradox*, Cambridge: Cambridge University Press
* Bueno, Otávio and Mark Colyvan, 2012, “Just What Is Vagueness?” *Ratio*, 25(1): 19–33. doi:10.1111/j.1467-9329.2011.00513.x
* Burgess, J., 2001, “Vagueness, Epistemicism, and Response-Dependence”, *Australasian Journal of Philosophy*, 79(4): 507–524. doi:10.1080/713659306
* Burgess, J.A. and I.L. Humberstone, 1987, “Natural Deduction Rules for a Logic of Vagueness”, *Erkenntnis*, 27(2): 197–229. doi:10.1007/BF00175369
* Burns, Linda Claire, 1991, *Vagueness: An Investigation into Natural Languages and the Sorites Paradox*, Dordrecht: Kluwer.
* –––, 1994, “Something To Do With Vagueness”, in Horgan (ed.), 1994: 23–48.
* Caie, Michael, 2015, “Review of Diana Raffman, *Unruly Words*”, *Philosophical Review*, 124(3): 415–419. doi:10.1215/00318108-2895389
* Chuard, Philippe, 2007, “Indiscriminable Shades and Demonstrative Concepts”, *Australasian Journal of Philosophy*, 85(2): 277–306. doi:10.1080/00048400701343143
* Colyvan, Mark, 2009, “Vagueness and Truth”, in Heather Dyke (ed.), *From Truth to Reality: New Essays in Logic and Metaphysics*, London: Routledge, pp. 29–40.
* Cook, Roy T., 2002, “Vagueness and Mathematical Precision”, *Mind*, 111(442): 225–247. doi:10.1007/BF00175369
* Dietz, Richard and Sebastiano Moruzzi, (eds.), 2010, *Cuts and Clouds: Vagueness, Its Nature and Its Logic*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199570386.001.0001
* Dummett, Michael, 1975, “Wang’s Paradox”, *Synthese*, 30: 301–24. Reprinted in his *Truth and Other Enigmas*, 1978, Cambridge, MA: Harvard University Press. Reprinted in Keefe and Smith 1996: 99–118. doi:10.1007/BF00485048
* Edgington, Dorothy, 1996, “Vagueness by Degrees”, in Keefe and Smith 1996: 294–315.
* Égré, Paul, 2009, “Soritical Series and Fisher Series”, in Hannes Leitgeb and Alexander Hieke (eds), *Reduction. Between the Mind and the Brain*, (Publications of the Austrian Ludwig Wittgenstein Society, New Series 12), Ontos-Verlag, pp. 91–115. [[Égré 2009 available online](http://wittgensteinrepository.org/agora-ontos/article/view/2132)]
* –––, 2011, “Perceptual Ambiguity and the Sorites”, in Nouwen et al. 2011: 64–90. doi:10.1007/978-3-642-18446-8_5
* –––, 2015, “Borderline Cases, Incompatibilism and Plurivaluationism”, *Philosophy and Phenomenological Research*, 90(2): 457–466. doi:10.1111/phpr.12178
* Égré, Paul, Vincent de Gardelle, and David Ripley, 2013, “Vagueness and Order Effects: Evidence for Enhanced Contrast in a Task of Colour Categorisation”, *Journal of Logic, Language and Information*, 22(4): 391–420. doi:10.1007/s10849-013-9183-7
* Ellis, Jonathan, 2004, “Context, Indexicals, and the Sorites”, *Analysis*, 64(4): 362–364. doi:10.1093/analys/64.4.362
* Fara, Delia Graff (see also Graff, Delia), 2008, “Profiling Interest-Relativity”, *Analysis* 68(4): 326–35. doi:10.1093/mind/110.440.905
* Field, Hartry, 2003, “No Fact of the Matter”, *Australasian Journal of Philosophy*, 81(4): 457–480. doi:10.1080/713659756
* –––, 2008, *Saving Truth From Paradox*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199230747.001.0001
* Fine, Kit, 1975, “Vagueness, Truth and Logic”, *Synthese*, 30(3–4): 265–300. Reprinted in Keefe and Smith 1996: 119–150. doi:10.1007/BF00485047
* Frege, Gottlob, 1903, *Grundgesetze der Arithmetik* (Volume 2), Jena: Verlag Hermann Pohle. Excerpts translated in Peter Geach and Max Black (eds.), 1960, *Translations from the Philosophical Writings of Gottlob Frege*, second edition, Oxford: Blackwell.
* Goguen, J.A., 1969, “The Logic of Inexact Concepts”, *Synthese*, 19(3–4): 325–373. doi:10.1007/BF00485654
* Graff, Delia (see also Fara, Delia Graff), 2000, “Shifting Sands: An Interest-Relative Theory of Vagueness”, *Philosophical Topics*, 28(1): 45–81. doi:10.5840/philtopics20002816
* –––, 2001, “Phenomenal Continua and the Sorites”, *Mind*, 110(440): 905–935. doi:10.1093/mind/110.440.905
* Haack, Susan, 1974, *Deviant Logic*, Cambridge: Cambridge University Press.
* Halldén, Sören, 1949, *The Logic of Nonsense*, Uppsala: Uppsala Universitets Arsskrift.
* Hardin, C.L., 1988, “Phenomenal Colors and Sorites”, *Noûs*, 22(2): 213–34. doi:10.2307/2215860
* Hellie, Benj, 2005, “Noise and Perceptual Indiscriminability”, *Mind*, 114(455): 481–508. doi:10.1093/mind/fzi481
* Horgan, Terence, 1994a, “Robust Vagueness and the Forced-March Sorites Paradox”, *Philosophical Perspectives*, 8: 159–188. doi:10.2307/2214169
* Horgan, Terence, 1994b (ed.), *Spindel Conference 1994: Vagueness*. Special Issue, *Southern Journal of Philosophy*, v.33.
* Huang, Minyao, 2012, “Manifestation of Vagueness in Language Use: Two Experiments”, *Cambridge Occasional Papers in Linguistics*, 6: 63–94. [[Huang 2012 available online](http://www.ling.cam.ac.uk/COPIL/Articles/COPiL_6_3_Huang.pdf)]
* –––, 2013, “Tolerance Effects in Categorization with Vague Predicates”, *Pragmatics & Cognition*, 21(2): 340–358. doi:10.1075/pc.21.2.05hua
* Hyde, Dominic, 1997, “From Heaps and Gaps to Heaps of Gluts”, *Mind*, 106(424): 440–460. doi:10.1093/mind/106.424.641
* –––, 2008, *Vagueness, Logic and Ontology*, (Ashgate new critical thinking in philosophy), Aldershot: Ashgate.
* –––, 2011, “The Sorites Paradox”, in Ronzitti 2011: 1–18. doi:10.1007/978-94-007-0375-9_1
* Jackson, Frank, 1975, *Perception*, Cambridge: Cambridge University Press.
* Jaśkowski, Stanislaw, 1948 [1969], “Propositional Calculus for Contradictory Deductive Systems” (Rachunek zdań dla systemów dedukcyjnych sprzecznych), *Studia Logica*, T. 24: 143–157, translated by O. Wojtasiewicz. Originally published in 1948 in Polish in *Studia Scientarium Torunensis*, Sec. A, Vol. I, No. 5, II: 55– 77. doi:10.1007/BF02134311
* Kamp, Hans, 1981, “The Paradox of the Heap”, in Uwe Mönnich (ed.), *Aspects of Philosophical Logic*, Dordrecht. Reidel, 225–277. doi:DOI: 10.1007/978-94-009-8384-7_8
* Keefe, Rosanna, 2000, *Theories of Vagueness*, Cambridge: Cambridge University Press.
* –––, 2003, “Context, Vagueness, and the Sorites”, in J.C. Beall (ed.), *Liars and Heaps: New Essays on Paradox*, New York: Oxford University Press, pp.73–83.
* –––, 2007, “Vagueness Without Context Change”, *Mind*, 116(462): 275–92. doi:10.1093/mind/fzm275
* Keefe, Rosanna and Peter Smith (eds.), 1996, *Vagueness: A Reader*, Cambridge, MA: MIT Press.
* Körner, Stephan, 1960, *The Philosophy of Mathematics*, London: Hutchinson.
* Lewis, David, 1986, *On the Plurality of Worlds*, Oxford: Basil Blackwell.
* –––, 1993, “Many but Almost One”, in Keith Campbell, John Bacon and Lloyd Reinhardt (eds.), *Ontology, Causality, and Mind: Essays on the Philosophy of D. M. Armstrong*, Cambridge: Cambridge University Press, pp. 23–38.
* Ludlow, Peter, 1989, “Implicit Comparison Classes”, *Linguistics and Philosophy* 12(4): 519–533. doi:10.1007/BF00632474
* Machina, Kenton F., 1976, “Truth, Belief and Vagueness”, *Journal of Philosophical Logic*, 5(1): 47–78. Reprinted in Keefe and Smith 1996: 174–203. doi:10.1007/BF00263657
* McGee, Vann, 1991, *Truth, Vagueness and Paradox: An Essay on the Logic of Truth*, Indianapolis: Hackett.
* McGee, Vann and Brian P. McLaughlin, 2000, “The Lessons of the Many”, *Philosophical Topics*, 28(1): 129–51. doi:10.5840/philtopics200028120
* Mehlberg, Henryk, 1958, *The Reach of Science*, Toronto: University of Toronto Press. Part of §29, pp. 256–259, reprinted as “Truth and Vagueness”, in Keefe and Smith 1996: 85–88.
* Mills, Eugene, 2002, “Fallibility and the Phenomenal Sorites”, *Noûs*, 36(3): 384–407. doi:10.1111/1468-0068.00377
* Morreau, Michael, 2002, “What Vague Objects Are Like”, *The Journal of Philosophy*, 99(7): 333–361. doi:10.2307/3655512
* Nouwen, Rick, Robert van Rooij, Uli Sauerland, and Hans-Christian Schmitz (eds), 2011, *Vagueness in Communication*, (Lecture Notes in Artificial Intelligence 6517), Berlin: Springer-Verlag.
* Peacocke, Christopher, 1992, *A Study of Concepts*, Cambridge, MA: MIT Press.
* Pelletier, F.J. and R.J. Stainton, 2003, “On ‘the Denial of Bivalence is Absurd’”, *Australasian Journal of Philosophy*, 81(3): 369–382. doi:10.1080/713659705
* Plekhanov, Georgiĭ Valentinovich, 1908, *Fundamental Problems of Marxism* (*Osnovye voprosy marksizma*), London: Lawrence and Wishart. Translated 1929 (from the 1928 edition), New York: International Publishers.
* Priest, Graham, 1991, “Sorites and Identity”, *Logique et Analyse*, 34(135–136): 293–296.
* –––, 2010, “Inclosures, Vagueness and Self-Reference”, *Notre Dame Journal of Formal Logic*, 51(1): 69–84. doi:10.1215/00294527-2010-005
* Quine, W.V., 1981, “What Price Bivalence?”, *The Journal of Philosophy*, 78(2): 90–95. doi:10.2307/2025901
* Raffman, Diana, 1994, “Vagueness Without Paradox”, *Philosophical Review*, 103(1): 41–74. doi:10.2307/2185872
* –––, 2005, “How to Understand Contextualism About Vagueness: Reply to Stanley”, *Analysis*, 65(3): 244–248. doi:10.1093/analys/65.3.244
* –––, 2014, *Unruly Words: A Study of Vague Language*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199915101.001.0001
* –––, 2015, “Responses to Discussants”, in *Philosophy and Phenomenological Research*, 90(2): 483–501.
* Rescher, Nicholas, 2009, *Unknowability: An Enquiry into the Limits of Knowledge*, New York: Lexington Books, Chapter 7.
* Ripley, David, 2011, “Contradictions at the Borders”, in Nouwen et al. 2011: 169–188. doi:10.1007/978-3-642-18446-8_10
* Robertson, Teresa, 2000, “On Soames’s Solution to the Sorites Paradox”, *Analysis*, 60(4): 328–334. doi:10.1093/analys/60.4.328
* Rosenkranz, S., 2003, “Wright on Vagueness and Agnosticism”, *Mind*, 112(447): 449–464.
* Ronzitti, Giuseppina (ed.), 2011, *Vagueness: A Guide*, Dordrecht: Springer. doi:10.1007/978-94-007-0375-9
* Russell, Bertrand, 1923, “Vagueness”, *The Australian Journal of Philosophy and Psychology* (now *Australasian Journal of Psychology and Philosophy*), 1(2): 84–92. Reprinted in Keefe and Smith 1996: 61–68. doi:10.1080/00048402308540623
* Sainsbury, R. Mark, 1995, *Paradoxes*, Cambridge: Cambridge University Press, 2nd edition, Chapter 2.
* –––, 2013, “Lessons for Vagueness in Scrambled Sorites”, *Metaphysica*, 14(2): 225–237. doi:10.1007/s12133-013-0123-4
* –––, 2015, “Vagueness and Semantic Methodology”, *Philosophy and Phenomenological Research*, 90(2): 475–482. doi:10.1111/phpr.12174
* Sainsbury, R.M. and Timothy Williamson, 1995, “Sorites” in Bob Hale and Crispin Wright (eds), *A Companion to the Philosophy of Language*, Oxford: Blackwell, chapter 18.
* Scharp, Kevin, 2015, “Tolerance and the Multi-Range View of Vagueness”, *Philosophy and Phenomenological Research*, 90(2): 467–474. doi:10.1111/phpr.12173
* Serchuk, Phil, Ian Hargreaves, & Richard Zach, 2011, “Vagueness, Logic and Use: Four Experimental Studies on Vagueness”, *Mind and Language*, 26(5): 540–573. doi:10.1111/j.1468-0017.2011.01430.x
* Shapiro, Stewart, 2006, *Vagueness in Context*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199280391.001.0001
* Smith, Nicholas J.J., 2008, *Vagueness and Degrees of Truth*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199233007.001.0001
* Soames, Scott, 1999, *Understanding Truth*, New York: Oxford University Press. doi:10.1093/0195123352.001.0001
* –––, 2002, “Replies”, *Philosophy and Phenomenological Research*, 65(2): 429–52. doi:10.1111/j.1933-1592.2002.tb00215.x
* Sorensen, Roy A., 1988, *Blindspots*, Oxford: Clarendon Press.
* –––, 2001, *Vagueness and Contradiction*, New York: Oxford University Press.
* Stanley, Jason, 2003, “Context, Interest-Relativity, and the Sorites”, *Analysis*, 63(4): 269–280. doi:10.1093/analys/63.4.269
* Tappenden, Jamie, 1993, “The Liar and Sorites Paradoxes: Towards a Unified Treatment”, *The Journal of Philosophy*, 90(11): 551–577. doi:10.2307/2940846
* Tye, Michael, 1994, “Sorites Paradoxes and the Semantics of Vagueness”, *Philosophical Perspectives*, 8: 189–206. Reprinted in Keefe and Smith 1996: 281–293. doi:10.2307/2214170
* Unger, Peter, 1979, “There Are No Ordinary Things”, *Synthese*, 41(2): 117–154. doi:10.1007/BF00869568
* Van Deemter, Kees, 2005, “Generating Referring Expressions that Involve Gradable Properties”, *Computational Linguistics*, 32(2): 195–222. doi:10.1162/coli.2006.32.2.195
* Van Fraassen, Bas C., 1966, “Singular Terms, Truth-Value Gaps, and Free Logic”, *The Journal of Philosophy*, 63(7): 481–495. doi:10.2307/2024549
* Varzi, Achille C., 2001, “Vagueness, Logic and Ontology”, *The Dialogue. Yearbooks for Philosophical Hermeneutics*, 1: 135–154. [[Varzi 2001 available online](http://www.columbia.edu/~av72/papers/Dialogue_2001.pdf)]
* Weatherson, Brian, 2003, “Epistemicism, Parasites, and Vague Names”, *Australasian Journal of Philosophy*, 81(2): 276–279. doi:10.1093/ajp/jag209
* Weber, Zach, 2010, “A Paraconsistent Model of Vagueness”, *Mind*, 119(476): 1025–1045. doi:10.1093/mind/fzq071
* Weber, Zach and Mark Colyvan, 2010, “A Topological Sorites”, *The Journal of Philosophy*, 107(6): 311–325. doi:10.5840/jphil2010107624
* Wheeler, Samuel C., 1979, “On that Which is Not”, *Synthese*, 41(2): 155–194. doi:10.1007/BF00869569
* Williamson, Timothy, 1992, “Vagueness and Ignorance”, *Proceedings of the Aristotelian Society, Supplementary Volumes*, 66: 145–177. doi:10.1093/aristoteliansupp/66.1.145
* –––, 1994a, *Vagueness*, London: Routledge.
* –––, 1994b, “Definiteness and Knowability”, in Horgan (ed.), 1994: 171-191.
* –––, 1996, “What Makes it a Heap?”, *Erkenntnis*, 44(3): 327–339. doi:10.1007/BF00167662
* –––, 2000, *Knowledge and its Limits*, Oxford: Oxford University Press. doi:10.1093/019925656X.001.0001
* –––, 2002, “Soames on Vagueness”, *Philosophy and Phenomenological Research*, 65(2): 422–28. doi:10.1111/j.1933-1592.2002.tb00214.x
* Wright, Crispin, 1975, “On the Coherence of Vague Predicates”, *Synthese*, 30(3–4): 325–365. doi:10.1007/BF00485049
* –––, 1976, “Language Mastery and the Sorites Paradox”, in Evans and McDowell (eds.), *Truth and Meaning* Oxford: Oxford University Press, 523–549.
* –––, 1994, “The Epistemic Conception of Vagueness”, in Horgan (ed.), 1994b: 133–160.
* –––, 2010, “The Illusion of Higher-Order Vagueness”, in Dietz and Moruzzi 2010: 523–549.
* Zadeh, L.A., 1975, “Fuzzy Logic and Approximate Reasoning”, *Synthese*, 30(3–4): 407–428. doi:10.1007/BF00485052

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=sorites-paradox). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/sorites-paradox/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=sorites-paradox&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](http://philpapers.org/sep/sorites-paradox/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

* [Vagueness and Indeterminacy](https://philpapers.org/browse/vagueness-and-indeterminacy/), Bibliography edited by Susanne Bobzien at philpapers.org.

## Related Entries

[Curry’s paradox](https://plato.stanford.edu/entries/curry-paradox/) | [dialetheism](https://plato.stanford.edu/entries/dialetheism/) | [Frege, Gottlob](https://plato.stanford.edu/entries/frege/) | [logic: fuzzy](https://plato.stanford.edu/entries/logic-fuzzy/) | [logic: many-valued](https://plato.stanford.edu/entries/logic-manyvalued/) | [logic: paraconsistent](https://plato.stanford.edu/entries/logic-paraconsistent/) | [Łukasiewicz, Jan](https://plato.stanford.edu/entries/lukasiewicz/) | [Lvov-Warsaw School](https://plato.stanford.edu/entries/lvov-warsaw/) | [many, problem of](https://plato.stanford.edu/entries/problem-of-many/) | [Russell, Bertrand](https://plato.stanford.edu/entries/russell/) | [self-reference](https://plato.stanford.edu/entries/self-reference/) | [truth: deflationism about](https://plato.stanford.edu/entries/truth-deflationary/) | [vagueness](https://plato.stanford.edu/entries/vagueness/)

[Copyright © 2018](https://plato.stanford.edu/info.html#c) by  
[Dominic Hyde](https://hpi.uq.edu.au/profile/388/dominic-hyde)  
Diana Raffman <[*diana.raffman@utoronto.ca*](mailto:diana%2eraffman%40utoronto%2eca)>
<!--md-padding-ignore-end-->
