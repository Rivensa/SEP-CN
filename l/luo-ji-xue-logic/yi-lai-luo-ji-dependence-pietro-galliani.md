# 依赖逻辑 dependence (Pietro Galliani)

*首次发表于2017年2月23日，实质修订于2021年3月22日。*

依赖逻辑是一阶逻辑的扩展，它添加了依赖原子，即形式为=(x1…xn,y)的表达式，它断言 y 的值在功能上依赖于 x1…xn 的值（换句话说，由其确定）。这些原子允许在变量之间指定非线性排序的依赖模式，类似于 IF-Logic 的斜线量词；但与 IF-logic 不同，依赖逻辑将量化与依赖/独立条件的指定分开。

依赖逻辑的主要语义称为团队语义，通过让表达式相对于变量赋值集合而不是单个赋值来满足或不满足。这种语义在依赖逻辑本身的发展之前就存在，最初由威尔弗里德·霍奇斯在 IF-logic 的背景下开发（Hodges 1997）。依赖逻辑还存在一种基于不完全信息博弈的语义，与独立友好逻辑的博弈论语义大致类似（Väänänen 2007a）。严格来说，“依赖逻辑”一词专指通过将上述功能依赖原子添加到一阶逻辑的语言中获得的语言；但该术语也以更一般的意义使用，用于指称研究通过将各种依赖和独立概念添加到一阶逻辑中获得的逻辑的性质的研究领域，例如独立逻辑（Grädel＆Väänänen 2013），直觉依赖逻辑（Yang 2013）或包含逻辑（Galliani 2012，Galliani＆Hella 2013），甚至是通过类似原子扩展其他逻辑框架的逻辑的性质，如模态依赖逻辑（Väänänen 2008）。

在本文中，“依赖逻辑”一词将用于指代适当的依赖逻辑，而“依赖与独立的逻辑”一词将用于指代其变体和推广。

---

## 1. 一阶逻辑及其扩展中的依赖模式

一阶逻辑的一个特点是它解释了它的表达能力和适用性的很大一部分，即它允许量词嵌套，因此它允许对量化变量之间的依赖模式进行规定。例如，考虑这个（希望是假的）陈述：“每个男孩都爱一些爱其他男孩的女孩”。它可以直接翻译成一阶逻辑，如下所示

(1)∀x(男孩(x)→∃y(女孩(y)∧爱(x,y)∧∃z(男孩(z)∧x≠z∧爱(y,z))))

其真值条件根据塔斯基的通常语义，正是我们所期望的：上述表达式当且仅当对于每个男孩 b，可以找到一个女孩 g 和一个男孩 b'，使得 b 爱 g，g 爱 b'，且 b 和 b'不相同时，该表达式为真。女孩 g 的身份当然可能取决于第一个男孩 b 的身份-毕竟，为了使该表达式为真，我们并不要求所有男孩都爱所有女孩-而且，第二个男孩 b'的身份可能取决于第一个男孩 b 的身份（因为 b'必须与 b 不同），也可能取决于男孩 b 爱的女孩 g 的身份。因此，我们的量化变量之间的依赖模式如下：y 依赖于 x，而 z 依赖于 x 和 y。从句法角度来看，这反映在∃y 在∀x 的范围内，而∃z 在∀x 和∃y 的范围内。

运算符之间的依赖模式的差异可以用来形式化重要的区别，例如函数 f 的连续性之间的区别

∀x∀ϵ∃δ∀x′(|x−x′|<δ→|f(x)−f(x′)|<ϵ)

和它的一致连续性

∀ϵ∃δ∀x∀x′(|x−x′|<δ→|f(x)−f(x′)|<ϵ)

或者，在一阶逻辑的内涵扩展中，用于表达 De Dicto 和 De Re 阅读之间的差异（例如，“每个人都可能疯狂”可以理解为对于每个人 p，p 可能疯狂，∀x（PERSON（x）→⬦CRAZY（x）），或者可以理解为每个人都可能一起疯狂，⬦∀x（PERSON（x）→CRAZY（x）））。

一阶逻辑中量化变量之间的依赖模式必然是传递的，因为它们与相应子表达式的作用域之间的连接明显：如果∃y 在∀x 的作用域内，而∃z 在∃y 的作用域内，则必然∃z 将在∀x 的作用域内（因此，依赖于∀x）。此外，某个子公式α所在的作用域中的所有量词的集合是线性有序的：如果α在 Q1x1 和 Q2x2 的作用域内，则 Q1x1 要么在 Q2x2 的作用域内，要么反之。

这限制了一阶逻辑的表达能力。例如，假设我们希望修改关于男孩和女孩的先前断言，如下所示：每个男孩都爱着某个爱着另一个男孩的女孩，并且这第二个男孩可以独立选择。直观地说，这意味着对于每个男孩 b，我们可以找到一个女孩 g，使得 b 爱 g，并且对于每个这样的女孩，我们可以找到一个男孩 b'，使得 g 爱 b'且 b≠b'，而且我们可以仅根据女孩 g 的身份而不知道男孩 b 的身份来确定第二个男孩 b'的身份。在某些情况下，这仍然可能是真实的，例如，如果两个男孩 b1 和 b2 分别爱着两个女孩 g1 和 g2，但是 g1 只爱 b2，g2 只爱 b1。然而，很容易看出，这与我们先前的陈述不等价：例如，如果我们的宇宙由两个男孩 b 和 b'和一个女孩 g 组成，而 b 和 b'都爱着 g，而 g 也爱着他们两个，那么我们先前的断言是真实的，但是当前的断言是错误的。

![two similar figures, both figures have the words 'Boys' and 'Girls' separated by horizontal space at the top Figure a has point b1 at the upper left, g1 at the upper right, b2 at the lower left and g2 at the lower right Arrows point from g1 to b1, from b1 to g2, from g2 to b2, and b2 to g1 Figure b has b1 at the upper left, b2 at the lower left, g1 at the middle right An arrow points both from and to b1 and g1 and similarly from b2 to g1](https://plato.stanford.edu/entries/logic-dependence/bg1.svg)

两种情况下(1)为真。在(a)中，可以独立选择 z；在(b)中，不可以。

然而，如何在一阶逻辑中形式化这个条件并不清楚。实质上，我们需要修改(1)，使得 z 不在 x 的范围内，因此它不依赖于 x；然而，我们仍然希望 z 依赖于 y，y 依赖于 x。然而，正如刚才讨论的，这样的依赖模式在一阶逻辑中是无法实现的。我们可以通过使用高阶量化来回避这个问题：事实上，可以看出以下表达式

(2)∃F∀x(BOY(x)→∃y(GIRL(y)∧LOVES(x,y)∧BOY(F(y))∧x≠F(y)∧LOVES(y,F(y))))

以明确的存在量词为代价，捕捉了我们预期的解释。

一个可能的替代方案是扩展一阶逻辑的语法，以消除量化变量之间的依赖模式的限制。这是分支量词逻辑（Henkin 1961）所采取的路线，其中（2）的真值条件对应于

(3)(∀x∃y∀z∃w)(BOY(x)→(GIRL(y)∧LOVES(x,y)∧(y=z→(BOY(w)∧x≠w∧LOVES(z,w))))),

和依赖友好逻辑，其中（2）等同于

（4）∀x∃y(BOY(x)→(GIRL(y)∧LOVES(x,y)∧(∃z/x)(BOY(z)∧x≠z∧LOVES(y,z)))).

我们在这里不会详细解释这两种形式主义的语义学；简而言之，在（3）中，w 的值不依赖于 x 和 y 的值（尽管可能依赖于 z 的值），因为它们属于复杂量词（∀x∃y∀z∃w）的不同“行”，而在（4）中，z 的值不依赖于 x 的值，因为这种依赖性被量词（∃z/x）明确地“切除”。

分支量词逻辑和友好独立逻辑共同具有的一个特征是，它们不将变量的量化与非标准依赖模式的规定分开：就像一阶逻辑的情况一样，量化变量 v1 是否依赖于其他量化变量 v2 将由它们的量词的位置和形式决定。

依赖逻辑以不同的方式解决了扩展一阶逻辑以表示（2）的问题。与（1）相比，唯一的新条件是指出 z 的值由（即在功能上依赖于）y 的值决定；这对应于一个新的原子条件=(y,z)，称为依赖原子，其意义是 z（的值）是 y 的函数。与分支量词逻辑或友好独立逻辑的情况不同，这是关于 y 和 z 可以取的值的条件，而不是关于量词∃z 的行为的条件：实际上，通常没有理由要求 z 是一个量化变量——它可能是一个自由变量，或者涉及多个变量的复杂术语。

在依赖逻辑中，（2）可以形式化为

(5)∀x∃y∃z(=(y,z)∧(BOY(x)→(GIRL(y)∧LOVES(x,y)→(BOY(z)∧x≠z∧LOVES(y,z)))))

(2)、(3)、(4)和(5)的真值条件完全相同：满足其中一个表达式（在各自的语言中）的任何模型都满足这四个表达式。更一般地说，正如我们将看到的，存在性二阶逻辑、独立友好逻辑和依赖逻辑在模型类定义能力方面的表达能力完全相同。然而，对于带有自由变量的公式来说，情况并非如此；而且，这些逻辑可以沿着明显不同的线路进行扩展和修改。

## 2. 团队语义学

团队语义，由威尔弗里德·霍奇斯（Wilfrid Hodges）在独立友好逻辑（Hodges 1997）的背景下首次发展，是对塔斯基（Tarski）一阶逻辑语义的推广，适用于将元素分配给变量的多个情况。出于历史原因，这些分配的集合被称为团队，构成了团队语义的基本语义概念，而公式的满足与否是相对于团队而不是单个分配的。团队语义与塔斯基语义之间的联系由以下结果显示，该结果适用于依赖逻辑以及其所有一阶变体：

**保守性：**
对于一个团队 X（根据团队语义的意义），一个一阶公式满足它（根据塔斯基语义的意义）当且仅当 X 中的所有分配 s 都满足它。

更一般地说，团队可以被理解为信念集合，代表某个代理人认为可能的世界状态（分配）的集合。那么，如果团队 X 是所有可能状态的集合时，团队 X 将满足某个公式ϕ，当且仅当ϕ在 X 中成立；在这种情况下，我们将写作 X⊨ϕ（或者如果模型 M 的选择不明确，则写作 M,X⊨ϕ）。在本节中，我们将研究团队语义的规则及其与这一原则的解释；然后，在下一节中，我们将讨论它如何从依赖逻辑的不完全信息博弈语义中产生。

新的依赖原子=(x1…xn,y)的条件很容易理解，它对应于 y 的值是 x1…xn 的值的函数的陈述：

**TS-依赖：**
如果且仅当在 X 上的任意两个分配 s1，s2 在 x1...xn 的值上一致时，它们在 y 的值上也一致，那么 X⊨ =(x1…xn,y)。

例如，假设 X 是一个关于三个变量 x1、x2 和 y 的分配集合，其中 x1 表示候选人的国籍，x2 表示他们的分数（根据适当的评估方法），y 表示他们是否被接受或拒绝。那么原子 =(x2,y) 对应于这样的陈述：决定是否接受的是分数本身：如果两个候选人的分数相同，他们将得到完全相同的报价，而不考虑其他任何因素。依赖原子的一个特殊情况是常数原子 =(y)，根据上述语义，如果一个团队的所有分配在 y 的值上一致，那么它们满足这些原子。

assignmentx1x2ys0000s1011s2101s3112

表 1：一个团队 X，其中 y=x1+x2。这里 y 是 x1 和 x2 的函数，因此=(x1x2,y)成立；然而，y 不仅仅是 x1 的函数，所以=(x1,y)不成立。

在相同的解释下，一阶文字和合取的规则（为简单起见，我们假设我们的表达式处于否定正常形式；并且，按照惯例，我们假设依赖原子的否定永远不满足）很容易推导出来：

**TS-lit:**
对于所有一阶文字α，如果对于所有赋值 s∈X，s 在通常的塔斯基语义意义下满足α，则 X⊨α；

**逻辑学-∧：**
如果 X⊨ϕ且 X⊨ψ，则 X⊨ϕ∧ψ。

值得指出的是，正如我们已经通过这些规则看到的那样，排中律在依赖逻辑中不成立（就像在独立友好逻辑中一样）：例如，如果团队 X 既包含具有 s（x）= s（y）的分配 s，又包含具有 s'（x）≠s'（y）的分配 s'，那么 X⊭x=y 和 X⊭x≠y。在本节中，无论如何，我们将介绍没有显式否定运算符的依赖逻辑语言；然后，稍后，我们将讨论将其添加到其语言中的后果。

那么普遍量化呢？在什么情况下，普遍量化表达式∀vψ在一个团队中成立？再次，我们必须回想起一个团队代表了一组可能的事物状态的直觉。如果我们希望评估∀vψ，我们应该根据哪些可能的事物状态来评估ψ？自然的答案是，我们应该考虑所有与 X 中的事物状态仅在 v 的值上不同的事物状态。这就证明了以下规则：

**TS-∀:**
如果且仅如果 X[M/v]⊨ϕ，则 X⊨∀vψ，其中 X[M/v]是集合{s'：∃s∈X，使得 s'∼vx}

这里的 s'∼vs 表示两个赋值 s 和 s'在变量 v 的值上最多只有微小差异。

X=assignmentxs00s11⇒X[M/y]=assignmentxys′000s′101s′210s′311

表 2：在一个包含两个元素 0 和 1 的模型中的 X 和 X[M/y]。

现在让我们考虑析取。什么时候ϕ∨ψ成立？为了回答这个问题，让我们再次回顾一下，团队可以被理解为可能状态的集合，因此两个团队 Y 和 Z 的并集表示如果 Y 或 Z 成立时可能发生的所有事物的状态。因此，如果两个公式ϕ和ψ分别由团队集合{Y1…Yn,…}和{Z1…Zn,…}满足，它们的析取ϕ∨ψ应该由团队集合{Yi∪Zj:i,j∈1,…}满足，或者等价地说，

**TS-∨:**
当且仅当存在两个团队 Y 和 Z，使得 Y⊨ϕ且 Z⊨ψ时，X⊨ϕ∨ψ。

值得指出的是，一般情况下我们并不要求 Y 和 Z 是不相交的。由于我们将很快讨论的向下封闭性质，这个额外的条件对于依赖逻辑本身的语义没有任何影响；但是在某些扩展和变体的依赖逻辑中，这个额外的要求将与局部性原则相冲突，即一个表达式的满足条件仅取决于其中自由出现的变量的值（Galliani 2012）。

还需要注意的是，在依赖逻辑中，析取不是幂等的：例如，=(x,y)∨=(x,y)并不等价于=(x,y)，并且它仅当 X 中的每三个赋值在 x 上至少有两个赋值在 y 上一致时才满足。这可能看起来有些违反直觉；但这是根据我们的解释，=(x,y)∨=(x,y)应该被理解为“每种可能的事物状态都来自于两组事物状态之一，并且在这两组状态中 y 是 x 的函数”。由于函数的并集一般来说不是一个函数，所以依赖逻辑中的析取不是幂等的，这并不令人意外。

最后，我们考虑存在量词的情况。当表达式∃vψ被一个团队满足时，我们应该如何回答这个问题呢？为了回答这个问题，我们可以从考虑限制运算符的解释开始。给定任意团队 X，限制运算符的解释将得到团队 X∖v，即通过从所有分配 s∈X 中删除变量 v（如果存在），然后（由于 X 是一个集合）通过合并相同的分配来得到。这可以理解为一种遗忘操作，通过该操作我们删除了关于 v 值的所有信息，例如，因为我们对这个值的信任不可靠，或者因为这个值已经被改变。现在假设 X∖v=Y∖v：在我们的解释中，这意味着由 X 和 Y 表示的可能状态集合至多在 v 值上存在差异。因此，如果 Y 满足条件ϕ，我们可以说如果不考虑 y 的值，X 将满足ϕ，或者等价地说，X 满足∃vψ。这证明了以下规则：

**TS-∃：**
如果且仅如果存在一些 Y，涉及 X 和 v 的变量，使得 X∖v=Y∖v 且 Y⊨ψ，则 X⊨∃vψ。

验证这一点很直接，当且仅当 Y 的形式为 X[F/y]={s[a/y]:s∈X,a∈F(s)}，其中 F 是从 X 中的赋值到我们模型中非空元素集的某个函数。

值得指出的是，根据上述定义，不一定要求 X 和 Y 包含相同数量的赋值：X 中的单个赋值可能对应于 Y 中的多个赋值，而如果 v 已经是 X 的赋值中出现的变量，则 Y 中的单个赋值也可能对应于 X 中的多个赋值。

X=assignmentxs00s11⇒X[F/y]=assignmentxys′000s′101s′210

表 3：对于 F(s0)={0,1}，F(s1)={0}，X 和 X[F/y]的值

我们将在规定其博弈论语义之后，推迟对依赖逻辑性质的深入讨论。然而，我们在本节中得出以下三个重要结论：

**局部性：**
如果对于在ϕ中自由出现的变量的限制 X 和 Y 是相同的，则当且仅当 X⊨ϕ时，Y⊨ϕ。

**向下封闭：**
如果 X⊨ϕ且 Y⊆X，则 Y⊨ϕ。

**空集属性：**
如果∅是不包含任何分配的团队，那么对于所有依赖逻辑公式ϕ，∅⊨ϕ。

地方性原则与本节开头提到的保守性原则一起构成了任何依赖逻辑的变体和扩展都应满足的重要的“理智条件”。对于向下封闭和空集属性来说，情况并非如此，正如我们将看到的那样，它们被依赖逻辑的变体所违反。

最后，我们需要根据模型来定义依赖逻辑句子的真值。由于句子没有自由变量，根据局部性原则，我们立即得出结论：要么所有非空团队都满足它，要么没有非空团队满足它。这类似于 Tarski 语义的情况，其中一个句子要么被所有变量赋值满足，要么被所有变量赋值不满足。因此，我们可以按照通常的方式定义真值：

**团队语义中的真值：**
如果一个句子ϕ在模型 M 中是真的，当且仅当 M,{∅}⊨ϕ，其中{∅}是只包含空赋值的团队。在这种情况下，我们写作 M⊨ϕ。

### 2.1 博弈论语义学

如前所述，依赖逻辑的博弈论语义学是独立友好逻辑的不完全信息语义学的一种变体，而独立友好逻辑本身是一阶逻辑博弈论语义学的一种改编。我们将读者引向（Väänänen 2007a）以获取对这种语义学的正式详细定义。

在博弈论语义学中，一个句子ϕ和一个模型 M 被对应到一个（通常是双人）游戏 GM(ϕ)。然后，真值是根据某个玩家（在本文中简称为“玩家 0”）存在获胜策略来定义的：换句话说，如果σ0 是玩家 0 的（可能是非确定性的）策略，而Π(GM(ϕ),σ0)是与σ0 兼容的所有游戏序列的集合，则ϕ为真当且仅当Π(GM(ϕ),σ0)中的每个游戏序列都是玩家 0 获胜的。可以将游戏 GM(ϕ)看作是两个玩家之间的辩论，其中一个玩家（玩家 0）希望证明ϕ为真，而另一个玩家（玩家 1）希望证明ϕ不为真。

正如一阶逻辑和独立友好逻辑的情况一样，在依赖逻辑的不完全信息游戏中，游戏的位置是(θ,s)的对，其中θ是ϕ的子公式的一个实例（即，将ϕ的相同表达式作为子公式的多个出现分别考虑），s 是模型 M 上的变量赋值。[1] 初始位置是(ϕ,∅)，其中∅是空赋值；对于玩家 0，非确定性策略σ0 根据以下规则选择当前位置的一个或多个继任者，对于每个析取和存在量化：

* 如果当前位置的形式为(ψ∨θ,s)，则其继任者是(ψ,s)和(θ,s)；
* 如果当前位置的形式为(∃vψ,s)，则其继任者是所有位置(ψ,s′)，其中 s′∼vs。

同样地，(ψ∧θ,s)的继承者是(ψ,s)和(θ,s)，而(∀vψ,s)的继承者是所有形式为(ψ,s′)的位置，其中 s′∼vs；但是，对于 Player 0 的策略不能为这些位置指定继承者，因为假设 Player 1 选择跟随它们的位置。

如果且仅如果一系列位置¯¯¯¯ρ=ρ0ρ1…ρn 是 GM(ϕ)的一次游戏，

1. 那么ρ0=(ϕ,∅)；
2. 对于所有的 i=1…n，ρi 是ρi−1 的继承者。

如果此外，每当ρi 对应于一个析取或存在量词时，ρi+1∈σ0(ρi)，我们称¯¯¯ρ遵守策略σ0；正如前面提到的，我们用Π(GM(ϕ),σ0)表示所有遵守σ0 的 GM(ϕ)上的游戏的集合。

我们称策略σ0 是获胜的，如果每个以(α,s)为终止位置的游戏¯¯¯ρ，其中α是一个一阶文字，都满足 Tarski 语义中的传统意义上的赋值 s 满足α。依赖原子——以及以依赖原子为终止位置的游戏——对于决定给定策略是否获胜没有影响。然而，它们用于指定给定策略是否是一致的：

**统一性条件**
对于 GM(ϕ)的策略σ0，如果任意两个游戏¯¯¯ρ, ¯¯¯γ∈Π(GM(ϕ),σ0)以相同的依赖原子实例=(x1…xn,y)结束于两个位置(=(x1…xn,y),s)和(=(x1…xn,y),s′)，则该策略σ0 是统一的。

如果 s(x1)…s(xn)=s′(x1)…s′(xn)，则 s(y)=s′(y)。

然后我们可以将真理在博弈论语义中定义如下：

**博弈论语义中的真理：**
如果且仅如果玩家 0 在 GM(ϕ)中拥有一种统一的获胜策略，那么在模型 M 中，句子ϕ在博弈论语义下是真的。

可以证明，这个概念等同于团队语义中的真实概念。实际上，我们可以展示更多。对于任意团队 X 和公式ϕ，如果游戏 GM,X(ϕ)的进行方式与 GM(ϕ)相同，但每次游戏的初始位置从{(ϕ,s):s∈X}中随机选择，则有以下结论：

**GTS 和团队语义的等价性：**
对于模型 M，当且仅当 Player 0 在 GM,X(ϕ)中拥有一种统一的获胜策略时，公式ϕ才被团队 X 满足（相对于模型 M）。

作为一个旁注，这个结果清楚地解释了为什么依赖逻辑的团队语义满足空集性质和向下闭包性质。确实，如果 X=∅，那么在 GM,X(ϕ)中，Player 0 的每个策略都是显然获胜和一致的；如果 X⊆Y，那么在 GM,X(ϕ)中，Player 0 的任何一致获胜策略也是在 GM,Y(ϕ)中 Player 0 的一致获胜策略。

## 3. 属性

### 3.1 表达能力

从句法上讲，依赖逻辑等同于二阶逻辑的存在性片段Σ11。更确切地说，可以证明（Väänänen 2007a）：

**依赖逻辑和Σ11 的句法等价性：**
对于每个依赖逻辑句子ϕ，存在一个Σ11 句子ϕ∗，使得

(6)对于所有模型 M，M⊨ϕ⇔M⊨ϕ∗。

同样地，对于每个Σ11 句子ϕ∗，存在一个依赖逻辑句子ϕ，使得(6)成立。

由于 Fagin 的定理（Fagin 1974）表明，如果一个有限模型的性质在Σ11 中可定义，那么它可以在多项式时间内被一个非确定性图灵机识别（也就是说，它属于 NPTIME），因此立即得出结论：

**依赖逻辑和 NPTIME：**
对于任何依赖逻辑句子ϕ，满足它的所有有限模型的类别都在 NPTIME 中。此外，对于任何有限模型的 NPTIME 类别 K，存在一个依赖逻辑句子ϕ，使得 M⊨ϕ当且仅当 M∈K。

在句子层面上，依赖逻辑和Σ11 之间的等价关系的另一个直接推论是，紧致性定理和 Löwenheim-Skolem 定理在依赖逻辑中也成立（Väänänen 2007a）：

**紧致性：**
如果一个有限依赖逻辑句子集合Φ在任何模型中都不可满足，则它的某个有限子集Φ0⊆fΦ也是不可满足的。

**Löwenheim-Skolem 定理：**
如果一个依赖逻辑句子有一个无限模型，那么它就有所有无限基数的模型。

然而，当涉及到带有自由变量的公式时，情况就更加微妙了。然后可以证明（Kontinen＆Väänänen 2009）依赖逻辑对应于存在性第二阶逻辑的向下封闭片段：

**依赖逻辑中的团队可定义性**
对于某个依赖逻辑公式ϕ，在模型 M 和变量集合 V 上，团队集合 X 的形式为{X:M,X⊨ϕ}，其中 X 是非空的，并且

1. X 是向下封闭的，即 Y⊆X∈X⇒Y∈X；
2. X is downwards closed, that is, Y⊆X∈X⇒Y∈X;
3. X 在 M 中是Σ11 可定义的，也就是说，存在一个Σ11 句子Ψ(R)，在 M 的词汇加上新的|V|-元关系符号 R，使得

当且仅当 M,Rel(X)⊨Ψ(R)，X∈X

其中 Rel(X)是与团队 X 对应的|V|-元关系{s(V):s∈X}。

### 3.2 依赖逻辑中的层次结构

在（Durand＆Kontinen 2012）中，研究了限制依赖原子的依赖变量数量或全称量词数量的效果。结果表明，这两种定义依赖逻辑片段的方式都会产生层次结构：

* 对于所有的 k，令 D(k−∀)为至多包含 k 个全称量词的依赖逻辑，令 D(k−dep)为形式为=(→x,y)且|→x|≤k 的依赖原子的依赖逻辑。然后
  D(k−∀)<D(k+1−依赖),D(k−∀)≤D(k−依赖)≤D(k+1−依赖)
  和
  D(k−∀)<D(2k+2−∀)
  关于句子的表达能力。

### 3.3 依赖逻辑中的否定

到目前为止，我们假设所有的依赖逻辑表达式都处于否定范式，并且依赖原子永远不会被否定。然而，将显式的否定运算符添加到依赖逻辑的语言中，却有些问题，因为存在性的二阶逻辑在否定下不是封闭的。事实上，“显而易见”的否定规则

X⊨∼ϕ 当且仅当 X⊭ϕ

极大地增加了依赖逻辑的表达能力，将其扩展到团队逻辑（Väänänen 2007a,b），在非常强的意义上等同于完全的二阶逻辑（Kontinen＆Nurmi 2009）。

通过德摩根定律，可以定义一个较弱的“对偶”否定¬，¬（ϕ∨[∧]ψ）≡（¬ϕ）∧ ∨和¬（∃v[∀v]ϕ）≡∀v ∃v，再加上双重否定律¬¬ϕ≡ψ和规则

X⊨¬=(→x,y) 当且仅当 X=∅

对于依赖原子的否定 (Väänänen 2007a,b)。结果语言在表达上等同于无否定的依赖逻辑，并且实际上，(Väänänen 2007a) 中的依赖逻辑描述将此否定视为其语言的一部分；然而，正如 (Kontinen & Väänänen 2011) 所示，依赖逻辑公式的满足条件与其否定的满足条件几乎没有联系。更准确地说：

**对偶否定和依赖逻辑：**
对于任意两个依赖逻辑公式ϕ和ψ，使得ϕ∧ψ不可满足，存在一个依赖逻辑公式θ，使得

当且仅当 M,X⊨ϕ时，M,X⊨θ成立

 并且

M,X⊨¬θ当且仅当 M,X⊨ψ

对于所有的模型 M 和团队 X。

因此，关于ϕ的双重否定不能一般性地说出任何事情，除了它等价于一些不满足ϕ的团队的依赖逻辑表达式。由于，如前所述，排中律在依赖逻辑中失效，这不是一个非常有信息量的属性；特别是，在依赖逻辑中（带有双重否定），可以找到具有非等价否定的等价表达式，例如 x≠x∧y≠y 和¬=(x,y)。

### 3.4 依赖逻辑中的真理、有效性和证明系统

与独立友好逻辑类似，依赖逻辑可以定义自己的真理运算符（Väänänen 2007a），即，如果对于所有公式ϕ，我们有⌈ϕ⌉是ϕ的哥德尔数，则我们可以找到一个只有自由变量 x 的公式τ(x)，使得

如果且仅当 M⊨τ(⌈ϕ⌉)，则 M⊨ϕ

对于满足 Peano 自然数公理的所有模型 M。这与 Tarski 的不可定义定理并不矛盾，因为依赖逻辑在矛盾否定下不封闭。

决定一个依赖逻辑句子是否有效（即在所有模型中为真）的问题是非算术的，并且实际上是完备的，与 Levy 层次的Π2 类相对应。尽管如此，依赖逻辑的证明理论已经被研究过。特别是在（Kontinen＆Väänänen 2013）中，已经为依赖逻辑理论的寻找一阶后果的问题开发了一个完备的证明系统。

## 4. 依赖逻辑的变体

在本节中，我们将简要总结对依赖逻辑最常研究的变体的特性。存在许多这样的变体，并且已经对它们进行了分类和比较的大量工作。在本工作中，我们只提及那些与依赖逻辑本身的关系特别重要的变体。

### 4.1 独立逻辑

独立逻辑（Grädel & Väänänen 2013）并不是通过扩展一阶逻辑来引入依赖原子 =(→x,y)，而是通过引入独立原子 →x⊥→z→y。独立原子的意图解释是“对于任何可能的→z 选择，→x 和→y 的可能值是独立的”，换句话说，对于任何固定的→z 选择，知道→x 的取值不会传达任何关于→y 取值的信息。这是一个具有重要概念意义的概念：例如，如果一个人不知道加密密钥，那么看到消息的加密版本不会提供任何关于相应明文版本的信息。如果 x 表示加密消息，y 表示明文消息，那么这对应于条件 x⊥y，其中在这种情况下→z 为空。类似地，如果 k 表示密钥，那么 x⊥k 表示无法从加密消息推断出密钥；而合取的依赖原子 =(k,x,y)（正如我们很快将看到的，可以在独立逻辑中表示）表示在已知加密消息和密钥的情况下可以解码明文消息的主张。

形式上，对于独立原子的满足规则可以如下给出：

**TS-独立：**
如果且仅当对于所有的 s，s'∈X，其中 s(→z)=s'(→z)，存在一个 s''∈X，使得 s''(→z→x)=s(→x→z)且 s''(→y)=s'(→y)，则 M⊨X→x⊥→z→y。

逻辑学是比依赖逻辑更具表达力的：事实上，它缺乏向下闭包属性，而依赖原子 =(→x,y) 等同于独立原子 y⊥→xy。此外，还可以证明（Galliani 和 Väänänen 2014）条件独立原子 →x⊥→y→z 可以用无条件独立原子 →x⊥→y 来定义。

句子层面上，独立逻辑也等同于存在性的二阶逻辑 Σ11；但在公式层面上，它更具表达力，并且在 Galliani 2012 中已经证明它可以捕捉到所有非空的Σ11 可定义的团队属性。

Sentence-wise, independence logic is also equivalent to existential second order logic Σ11; but formula-wise, it is more expressive, and it was shown in Galliani 2012 that it can capture all nonempty Σ11-definable team properties.

### 4.2 包含逻辑

包含逻辑（Galliani 2012，Galliani＆Hella 2013）通过包含原子→x⊆→y 扩展了一阶逻辑，这与数据库理论中的包含依赖类似。它的语义是：

**TS-inc:**
如果且仅当对于所有的 s∈X，存在一个 s′∈X，使得 s(→x)=s′(→y)，则 M⊨X→x⊆→y。

assignmentx1x2s000s101s212s323

与依赖和独立逻辑不同，包含逻辑（逐句地）严格弱于存在性第二阶逻辑。事实上，可以证明（Galliani＆Hella 2013）它等价于最大不动点逻辑的正片段，并且因此捕捉有限有序模型上的 PTIME 属性。就公式而言，包含逻辑严格弱于独立逻辑，但与依赖逻辑不可比较：实际上，其公式的可满足性条件不是向下封闭的，但它们在联合操作下是封闭的，也就是说。

M,Xi⊨ϕ∀i∈I⇒M,⋃iXi⊨ϕ.

### 4.3 团队逻辑

团队逻辑（Väänänen 2007a,b; Kontinen & Nurmi 2009）通过添加矛盾否定¬来扩展依赖逻辑。它在模型类的定义能力上与全二阶逻辑相等（Väänänen 2007b），并且在团队逻辑表达式能够定义的团队类别方面与给定模型相关（Kontinen & Nurmi 2009）。在（Lück 2019）中，找到了团队逻辑（以及其模态和命题等价物）的希尔伯特样式公理化，该公理化对于其无依赖片段是完备的（即不包含依赖原子的片段）。

### 4.4 直觉依赖逻辑

直觉依赖逻辑（Abramsky＆Väänänen 2009; Yang 2013）通过添加一个蕴含连接词 ϕ→ψ 来扩展依赖逻辑，其满足规则在团队语义中给出

**TS-→:**
如果且仅如果对于 X 的所有子集 Y，如果 Y⊨ϕ，则 Y⊨ψ，则 X⊨ϕ→ψ。

这个运算符被称为“直觉蕴涵”，因为它的语义与 Kripke 对直觉逻辑的语义中的蕴涵运算符的语义相似（Kripke 1965）。从信念的角度来解释，它非常直观：如果 X 中的赋值表示某个代理人认为可能的状态，那么 X 的子集 Y 可能表示代理人拒绝了一些先前认为可能的状态的信念更新的结果，而ϕ→ψ则说明任何这样的更新会导致ϕ成立也会导致ψ成立。从这个角度来看，这是一个非常自然的概念，它使我们能够描述关于这样一个代理人的整体信念状态如何对信念更新做出反应的预测。

然而，由于其语义中隐含的二阶全称量化，这个连接词足以大大增加逻辑的表达复杂性：特别是，如（Yang 2013）所示，任何二阶逻辑的句子都等价于某个直觉依赖逻辑的句子。直觉依赖逻辑保持向下封闭的性质：如果一个团队满足一个直觉依赖逻辑公式，那么它的所有子集也满足该公式。

### 4.5 泛化的依赖和团队语义中的连接词

在上述所见的依赖逻辑的变体和扩展中，都是通过引入新的原子或连接词从一阶逻辑（带有团队语义）生成的。可以考虑广义的依赖原子（Kuusisto 2015），就像在经典的一阶逻辑中引入广义量词一样，并提出以下问题：

* 对于哪些原子或连接词的集合 D，FO(D)（即一阶逻辑加上 D 中的原子和连接词）在表达能力上等价于一阶逻辑？这样的集合 D 被称为强一阶。
* 给定一个由原子和连接词组成的集合 D，对于哪些由原子和连接词组成的集合 E，FO(D,E)在表达上等同于 FO(D)？这样的 E 被称为对 D 是安全的。

目前还没有对这些问题的完整答案。然而，已知一些部分结果：

1. 如果 D 是一个由向上封闭的依赖关系组成的集合（即，如果某个模型 M 中的某个团队 X 满足这些依赖关系，那么对于同一模型中的任何超团队 Y⊇X 也满足这些依赖关系），再加上可能的常量原子（即，已经提到的依赖原子的特殊情况，它表示某个变量在一个团队中是常量），那么 D 是强一阶的（Galliani 2015）。
2. 并非所有强一阶依赖都适用于所有依赖：特别是，常量原子对于一元包含依赖 x⊆y（其中 x 和 y 是单个变量）是不安全的；而可能性运算符⋄ϕ，如果在模型 M 中存在一个满足ϕ的非空子集 X，则满足一个团队 X，对于所有依赖集合都是安全的，以及全体原子（它声明某个变量或变量元组取所有可能的值）和非常量原子（它声明某个变量在一个团队中至少取两个不同的值）（Galliani 即将发表）；
3. 如果 D 是一组强一阶依赖的集合，而 E 是一组向下封闭的依赖（即，只要某个团队对某些依赖为真，则对每个子团队也为真），那么 D 对于 E 是安全的（Galliani 2019）；
4. 如果 D 是一组向下封闭且可相对化的依赖的集合（即，将 D 中的依赖的相对化添加到一元谓词 P 中的语言中不比添加依赖本身更具表达力），那么 D 是强一阶的，当且仅当其中的每个依赖都可以用常量原子来定义（Galliani 2019）。

然而，这些都只是部分结果，而在团队语义中，依赖和连接词的一般理论仍处于初级阶段。

一个相关的主题是通过广义量词对依赖逻辑进行扩展的研究（Engström 2012）。在这方面的一个有趣结果是通过量词 Q“存在不可数多个…”对依赖逻辑扩展的公理化，它对一个理论的 FO(Q)后果是完备和合理的（Engström，Kontinen 和 Väänänen 2017）。

在这个背景下，还值得指出（Kontinen 和 Yang 2019）的工作，他们发现了一种基于团队语义的逻辑（与依赖逻辑的“标准”连接词不同），其公式恰好捕捉到团队的一阶可定义性质。

### 4.6 命题依赖逻辑

到目前为止，考虑的依赖和独立原子表达的是一组赋值中变量可能值之间的关系。然而，同样的依赖和独立的概念也可以同样自然地应用于命题本身，就像在自然语言表达中所发生的，例如“他是否能通过课程仅取决于他期末考试的内容”。

命题依赖逻辑在命题逻辑的背景下考虑这样的原子。命题依赖逻辑团队是从命题原子 p1...pn 到{T,F}的估值 v 的集合。它的语义规则 - 以及它们的证明 - 非常接近一阶团队语义的规则，而依赖原子的规则为

**PTS-依赖：**
X⊨=(p1…pn,q) 当且仅当在 X 中任意两个赋值 v1,v2∈X，在 p1…pn 的值上一致的同时也在 q 的值上一致。

许多一阶依赖逻辑的变体和推广都可以轻松降低到命题层面：因此，例如，可以研究命题包含逻辑、命题团队逻辑、命题直觉依赖逻辑等的性质。

鉴于（一阶）依赖逻辑比一阶逻辑更具表达力，命题依赖逻辑并不比命题逻辑更具表达力，因为所有命题函数都可以在命题逻辑中表达。然而，命题依赖逻辑团队与好奇逻辑的信息状态之间存在密切关系（Groenendijk 2009; Ciardelli＆Roelofsen 2011），这是一个研究意义和信息交流概念的语义框架：特别是好奇逻辑的蕴涵与命题直觉依赖逻辑的蕴涵完全相同。

命题依赖逻辑及其许多扩展的公理化可以在（Yang＆Väänänen 2016）中找到；关于这种形式主义的计算复杂性分析（以及基于团队语义的相关命题逻辑）可以在（Virtema 2017; Hannula 等人 2018）中找到。

### 4.7 模态依赖逻辑

模态依赖逻辑（Väänänen 2008）及其变体通过在其中添加与命题依赖逻辑中已经考虑的相同依赖原子 =(p1…pn,q) 来扩展模态逻辑。

它的满足条件可以通过一种团队语义的变体来定义，在这种语义中，团队被可能世界的集合所取代。

许多研究已经调查了这种逻辑及其片段以及其扩展的复杂性理论特性（Ebbing, Lohmann, & Yang 2011; Ebbing & Lohmann 2012; Lohmann & Vollmer 2013）。

模态独立逻辑也在（Kontinen 等人，2017）中进行了研究。

### 4.8 带团队语义的线性时间逻辑

线性时间逻辑也可以给出一种“团队语义”，其中公式是相对于轨迹集合（即状态序列的集合）进行评估的，表示系统的可能计算。这样的逻辑框架可用于超属性（Krebs 等人，2017 年，其他互联网资源；Lück 2020）的规范和验证，即无法通过仅检查系统的每个可能轨迹来确定其真实性，而只能通过查看所有可能轨迹的集合来确定，例如“系统在有限时间内终止”。

### 4.9 依赖逻辑和团队语义的定量变体

由于团队对应于任务集合，因此自然而然地考虑团队语义的扩展可能性，其中满足性是相对于多团队（即，任务的多重集合）或任务分配的概率分布来定义的。

第一种可能性已在（Durand et al. 2018a）中进行了研究，而第二种可能性已在（Durand et al. 2018b）中进行了研究。特别是第二项工作已经导致了与实数上的描述复杂性问题和元有限模型论的有趣联系（Hannula et al. 2019，Hannula et al. 2020）。

## 5. 依赖逻辑的应用

### 5.1 依赖逻辑与数据库理论

团队语义学和关系数据库理论之间存在直接的联系：给定一个团队 X 和一个在其分配中出现的变量元组→v=v1…vk，可以定义关系 X(→v)={⟨s(v1),…,s(vn)⟩:s∈X}。此外，依赖逻辑及其变体中研究的依赖原子类似于数据库理论中考虑的依赖，例如函数依赖（Väänänen 2007a），多值依赖（Engström 2012）以及包含和排除依赖（Galliani 2012）。依赖逻辑与数据库理论之间的关系不仅促进了依赖逻辑的进一步发展，还促进了数据库理论的发展：例如，在 Hannula＆Kontinen 2016 中，通过研究团队语义学背景下的类似问题，找到了关于包含、函数和嵌入式多值数据库依赖的无限制蕴含问题的有限公理化。

### 5.2 依赖逻辑与信念表示

如（Yang 2014）和（Yang＆Väänänen 2016）所讨论的那样，（命题）直觉依赖逻辑与询问逻辑（Ciardelli＆Roelofsen，2011）之间存在着密切联系，后者是一种研究代理之间的意义和信息交流的框架。更一般地说，研究团队语义中的依赖原子和连接词在信念状态和信念更新方面具有自然的解释，如（Galliani 2015）所讨论的那样。目前，这些逻辑与动态认知逻辑及其变体（Van Ditmarsch，van Der Hoek，＆Kooi 2007）之间的确切关系的性质尚未被广泛探索，但有充分的理由怀疑这两个数学和哲学逻辑领域之间存在进一步的联系。

### 5.3 依赖逻辑与阿罗的定理

箭定理（Arrow 1950）是社会选择理论的一个深具影响力的结果，简而言之，它表明不存在任何投票系统（即，将个体对不同选择的偏好转化为全局社会偏好排序的系统），能够满足三个合理的条件，即

* 如果每个选民都更喜欢 A 而不是 B，整个群体也更喜欢 A 而不是 B；
* 整个群体是更喜欢 A 而不是 B，或者更喜欢 B 而不是 A，完全取决于每个选民对 A 和 B 的偏好，而不取决于他们对其他可能选择的偏好；
* 没有单一选民是独裁者，也就是说，群体的偏好不是由任何单一选民的偏好决定的。

正如措辞本身所暗示的那样，第二和第三个条件可以用依赖和独立性的自然解读来解释：事实上，正如 Pacuit＆Yang 2016 年所示，阿罗定理可以在独立逻辑中形式化，并在适当的自然演绎系统中得到证明。

### 5.4 量子团队逻辑和贝尔不等式

在（Hyttinen, Paolini, & Väänänen 2015）中，引入了一种命题团队逻辑的变体，称为量子团队逻辑。在这种形式主义中，团队被量子团队取代，与命题团队逻辑的普通团队不同之处在于，它们允许某些变量的值在某些估值中是不确定的，并且允许同一估值的多个实例（从而为团队语义添加了定量方面）。然后，为允许关于事件概率的不等式的语言定义了量子团队上的语义，并为其开发了一个完备的证明系统；最后，证明了贝尔不等式在这个系统中存在反例，正如量子力学的预测和实验证据所示（Einstein, Podolsky, & Rosen 1935; Bell 1964; Aspect, Grangier, & Roger 1981），而在这个框架的经典版本中则不然。

## Bibliography

* Abramsky, Samson and Jouko Väänänen, 2009, “From IF to BI: A Tale of Dependence and Separation”, *Synthese*, 167(2): 207–230. doi:10.1007/s11229-008-9415-6
* Arrow, Kenneth J., 1950, “A Difficulty in the Concept of Social Welfare”, *The Journal of Political Economy*, pp.328–346. doi:10.1086/256963
* Aspect, Alain, Philippe Grangier and Gérard Roger, 1981, “Experimental Tests of Realistic Local Theories via Bell’s Theorem”, *Physical Review Letters*, 47(7): 460–463. doi:10.1103/PhysRevLett.47.460
* Bell, J.S., 1964, “On the Einstein-Podolsky-Rosen Paradox”, *Physics*, 1(3): 195–200.
* Ciardelli, Ivano and Floris Roelofsen, 2011, “Inquisitive Logic”, *Journal of Philosophical Logic*, 40(1): 55–94. doi:10.1007/s10992-010-9142-6
* van Ditmarsch, Hans, Wiebe van der Hoek, and Barteld Kooi, 2007,*Dynamic Epistemic Logic*, (Synthese Library 337), Dordrecht: Springer. doi:10.1007/978-1-4020-5839-4
* Durand, Arnaud and Juha Kontinen, 2012, “Hierarchies in Dependence Logic”, *ACM Transactions on Computational Logic (TOCL)*, 13(4): 1–21. doi:10.1145/2362355.2362359
* Durand, Arnaud, et al., 2018, “Approximation and dependence via multiteam semantics”, *Annals of Mathematics and Artificial Intelligence*, 83(3): 297–320.
* Durand, Arnaud, et al., 2018, “Probabilistic team semantics”, *International Symposium on Foundations of Information and Knowledge Systems*, Cham: Springer.
* Ebbing, Johannes and Peter Lohmann, 2012, “Complexity of Model Checking for Modal Dependence Logic”, *SOFSEM 2012: International Conference on Current Trends in Theory and Practice of Computer Science*, (Lecture Notes in Computer Science, 7147), Berlin, Heidelberg: Springer, pp. 226–237. doi:10.1007/978-3-642-27660-6_19
* Ebbing, Johannes, Peter Lohmann, and Fan Yang, 2013, “Model Checking for Modal Intuitionistic Dependence Logic”, *International Tbilisi Symposium on Logic, Language, and Computation 2011*, (Lecture Notes in Computer Science, 7758), Berlin, Heidelberg: Springer, pp. 231–256. doi:10.1007/978-3-642-36976-6_15
* Einstein, A., B. Podolsky and N. Rosen, 1935, “Can Quantum-Mechanical Description of Physical Reality be Considered Complete?” *Physical Review*, 47(10): 777–780. doi:10.1103/PhysRev.47.777
* Engström, Fredrik, 2012, “Generalized Quantifiers in Dependence Logic”, *Journal of Logic, Language and Information*, 21(3): 299–324. doi:10.1007/s10849-012-9162-4
* Engström, Fredrik, Juha Kontinen, and Jouko Väänänen, 2017, “Dependence logic with generalized quantifiers: Axiomatizations”, *Journal of Computer and System Sciences*, 88: 90–102.
* Fagin, Ronald, 1974, “Generalized First-Order Spectra and Polynomial-Time Recognizable Sets”, *Complexity of Computation* (SIAM-AMS Proceedings 7), Richard M. Karp (ed.), Providence, RI: American Mathematical Society, pp. 27–41.
* Galliani, Pietro, 2012, “Inclusion and Exclusion Dependencies in Team Semantics—On Some Logics of Imperfect Information”, *Annals of Pure and Applied Logic*, 163(1): 68–84. doi:10.1016/j.apal.2011.08.005
* –––, 2015, “The Doxastic Interpretation of Team Semantics”, *Logic Without Borders: Essays on Set Theory, Model Theory, Philosophical Logic and Philosophy of Mathematics* (Ontos Mathematical Logic, 5), Åsa Hirvonen, Juha Kontinen, Roman Kossak, and Andrés Villaveces (eds), Berlin, Boston: De Gruyter, pp. 167–192. doi:10.1515/9781614516873.167
* –––, 2015, “Upwards closed dependencies in team semantics”, *Information and Computation*, 245: 124–135.
* –––, 2019, “Characterizing downwards closed, strongly first-order, relativizable dependencies”, *The Journal of Symbolic Logic*, 84(3): 1136–1167
* –––, forthcoming, “Safe dependency atoms and possibility operators in team semantics.” *Information and Computation*.
* Galliani, Pietro and Lauri Hella, 2013, “Inclusion Logic and Fixed Point Logic”, *Computer Science Logic 2013* (Leibniz International Proceedings in Informatics: LIPIcs 23), Dagstuhl, Germany: Schloss Dagstuhl-Leibniz-Zentrum fuer Informatik, pp. 281–295. doi:10.4230/LIPIcs.CSL.2013.281
* Galliani, Pietro and Jouko Väänänen, 2014, “On Dependence Logic”, in *Johan van Benthem on Logic and Information Dynamics* (Outstanding contributions to logic, 5), Alexandru Baltag and Sonja Smets (eds), Cham: Springer, pp. 101–119. doi:10.1007/978-3-319-06025-5_4
* Grädel, Erich and Jouko Väänänen, 2013, “Dependence and Independence”, *Studia Logica*, 101(2): 399–410. doi:10.1007/s11225-013-9479-2
* Groenendijk, Jeroen, 2009, “Inquisitive Semantics: Two Possibilities for Disjunction”, in Peter Bosch, David Gabelaia, & Jérôme Lang (eds), *Seventh international Tbilisi Symposium on Language, Logic, and Computation* (Lecture Notes in Computer Science: Volume 5422), Springer-Verlag, pp. 80–94. doi:10.1007/978-3-642-00665-4_8
* Hannula, Miika and Juha Kontinen, 2016, “A Finite Axiomatization of Conditional Independence and Inclusion Dependencies”. *Information and Computation*, 249: 121–137. doi:10.1016/j.ic.2016.04.001
* Hannula, Miika, et al., 2018, “Complexity of propositional logics in team semantic”, *ACM Transactions on Computational Logic*, 19(1): 1–14.
* –––, 2019, “Facets of distribution identities in probabilistic team semantics”, in F. Calimeri, N. Leone, and M. Manna (eds.), *Logics in Artificial Intelligence*, Cham: Springer.
* –––, 2020, “Descriptive complexity of real computation and probabilistic independence logic”, *Proceedings of the 35th Annual ACM/IEEE Symposium on Logic in Computer Science*, Association for Computing Machinery, New York: 550–563..
* Henkin, Leon, 1961, “Some Remarks on Infinitely Long Formulas”, in *Infinitistic Methods* (Proceedings of the Symposium on the Foundations of Mathematics, Warsaw, 1959), Oxford: Pergamon Press, pp. 167–183.
* Hodges, Wilfrid, 1997, “Compositional Semantics for a Language of Imperfect Information”, *Logic Journal of the IGPL*, 5(4): 539–563. doi:10.1093/jigpal/5.4.539
* Hyttinen, Tapani, Gianluca Paolini and Jouko Väänänen, 2015, “Quantum Team Logic and Bell’s Inequalities”, *The Review of Symbolic Logic*, 8(4): 722–742. doi:10.1017/S1755020315000192
* Kontinen, Juha and Ville Nurmi, 2009, “Team Logic and Second-Order Logic”, in *Proceedings of the 16th International Workshop on Logic, Language, Information, and Computation* (Lecture Notes in Computer Science, 5514), Berlin, Heidelberg: Springer, pp. 230–241. doi:10.1007/978-3-642-02261-6_19
* Kontinen, Juha and Jouko Väänänen, 2009, “On Definability in Dependence Logic”, *Journal of Logic, Language and Information*, 18(3): 317–332.doi:10.1007/s10849-009-9082-0
* –––, 2011, “A Remark on Negation in Dependence Logic”, *Notre Dame Journal of Formal Logic*, 52(1): 55–65. doi:10.1215/00294527-2010-036
* –––, 2013, “Axiomatizing First-Order Consequences in Dependence Logic”, *Annals of Pure and Applied Logic*, 164(11): 1101–1117. doi:10.1016/j.apal.2013.05.006
* Kontinen, Juha, et al., 2017, “Modal independence logic”, *Journal of Logic and Computation*, 27(5): 1333–1352.
* Kontinen, Juha and Fan Yang, 2019, “Logics for first-order team properties”, *International Workshop on Logic, Language, Information, and Computation*, Berlin, Heidelberg: Springer.
* Kripke, Saul A., 1965, “Semantical Analysis of Intuitionistic Logic I”, in *Formal Systems and Recursive Functions: Proceedings of the Eighth Logic Colloquium, Oxford July 1963* (Studies in Logic and the Foundations of Mathematics, 40), John N. Crossley and Michael A. E. Dummett (eds.), North Holland, pp. 92–130. doi:10.1016/S0049–237X(08)71685-9
* Kuusisto, Antti, 2015, “A double team semantics for generalized quantifiers”, *Journal of Logic, Language and Information*, 24(2): 149–191.
* Lohmann, Peter and Heribert Vollmer, 2013, “Complexity Results for Modal Dependence Logic”, *Studia Logica*, 101(2): 343–366. doi:10.1007/s11225-013-9483-6
* Lück, Martin, 2018, “Axiomatizations of team logics”, *Annals of Pure and Applied Logic*, 169(9): 928–969.
* –––, 2020, “On the complexity of linear temporal logic with team semantics”, *Theoretical Computer Science*, 837: 1–25.
* Pacuit, Eric and Fan Yang, 2016, “Dependence and Independence in Social Choice: Arrow’S Theorem”, in *Dependence Logic*, Samson Abramsky, Juha Kontinen, Jouko Väänänen, and Heribert Vollmer (eds), Dordrecht: Springer, pp. 235–260. doi:10.1007/978-3-319-31803-5_11
* Väänänen, Jouko, 2007a, *Dependence Logic: A New Approach to Independence Friendly Logic*, (London Mathematical Society student texts, 70), Cambridge: Cambridge University Press. doi:10.1017/CBO9780511611193
* –––, 2007b, “Team Logic”, in *Interactive Logic: Selected Papers from the 7th Augustus de Morgan Workshop*, (Texts in Logic and Games, 1), Johan van Benthem, Dov Gabbay, and Benedikt Löwe (eds.), Amsterdam: Amsterdam University Press, pp. 281–302.
* –––, 2008, “Modal Dependence Logic”, *New Perspectives on Games and Interaction* (Texts in Logic and Games, 4), Krzysztof R. Apt and Robert van Rooij (eds), Amsterdam: Amsterdam University Press, pp.237–254.
* Virtema, Jonni, 2017, “Complexity of validity for propositional dependence logics”, *Information and Computation*, 253: 224–236.
* Yang, Fan, 2013, “Expressing Second-Order Sentences in Intuitionistic Dependence Logic”, *Studia Logica*, 101(2): 323–342. doi:10.1007/s11225-013-9476-5
* –––, 2014, “On Extensions and Variants of Dependence Logic: A Study of Intuitionistic Connectives in the Team Semantics Setting”. PhD Thesis, University of Helsinki.
* Yang, Fan and Jouko Väänänen, 2016, “Propositional Logics of Dependence”, *Annals of Pure and Applied Logic*, 167(7): 557–589. doi:10.1016/j.apal.2016.03.003

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-dependence). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-dependence/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-dependence&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](http://philpapers.org/sep/logic-dependence/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

* Krebs, Andreas, et al., 2017, “[Team semantics for the specification and verification of hyperproperties](https://arxiv.org/abs/1709.08510)”, manuscript at arXiv.org.
* [Dependence Logic on Wikipedia](https://en.wikipedia.org/w/index.php?title=Dependence_logic&oldid=742549065)

## Related Entries

[compositionality](https://plato.stanford.edu/entries/compositionality/) | game-theoretic semantics and pragmatics | [logic: and games](https://plato.stanford.edu/entries/logic-games/) | [logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [logic: independence friendly](https://plato.stanford.edu/entries/logic-if/) | [logic: second-order and higher-order](https://plato.stanford.edu/entries/logic-higher-order/)

[Copyright © 2021](https://plato.stanford.edu/info.html#c) by  
Pietro Galliani <[*pgallian@gmail.com*](mailto:pgallian%40gmail%2ecom)>
