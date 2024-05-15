# 动态语义 dynamic (Rick Nouwen, Adrian Brasoveanu, Jan van Eijck, and Albert Visser)

*首次发表于 2010 年 8 月 23 日；实质修订于 2016 年 7 月 12 日*

动态语义是一种关于自然语言语义的观点，强调信息在时间中的增长。它是一种意义表示的方法，其中文本或话语的片段被视为更新现有上下文的指令，以获得新的信息，其结果是更新后的上下文。简而言之：意义是上下文变化的潜力。

意识到这种观点的抽象性是很重要的，以防止各种非因果关系。首先，人们很容易认为动态语义或更新语义至少在某种程度上承认语义的内在主义观念，因为信息状态是“内在的”——在个体心智/大脑中完全包含。换句话说，人们可能认为动态语义的信息状态是普特南（Putnam）（1975 年）所称的“方法论唯我论意义”。请参阅有关科学现实主义、计算心灵理论、关于心智内容的外在主义和狭义心智内容的条目。然而，这个通用框架并没有说明状态是什么。状态很可能包括解释者所嵌入的环境，因此包含一个“外部”组成部分。

第二个可能的误解是，动态语义或更新语义与经典的真值条件语义完全对立（比较经典逻辑和一阶模型理论的条目）。实际上，正如本条目很快会明确的，动态语义提供的是真值条件语义的一般化，而不是完全不同的替代方案。经典的意义成为话语行为成功的前提条件。动态语义学家声称，组合意义具有函数或关系的性质，而经典意义可以从关系动态意义中恢复，作为它们的“输入”坐标的投影。

使用抽象框架的目的不是提供经验预测。这是框架内具体实现的任务。动态语义的框架提供了思考的方向，并允许我们从数学研究中引入方法。由此可见，自然语言的意义是否本质上是动态的并没有经验性的答案。然而，可以说的是，将解释作为一个线性有序过程的研究已经证明是相当有成果和有益的。

由于动态语义关注发送者和接收者的话语行为，它在某种意义上与哲学中以维特根斯坦和邓梅特的工作为代表的以使用为导向的意义方法接近。然而，应避免将动态语义与这些方法进行简单的等同。动态语义作为一个抽象框架与许多哲学观察意义和解释的方式是兼容的。动态语义旨在建模意义和解释。您可以在不回答更广泛的哲学问题的情况下进行建模，例如，主体与这些意义相关联的可能性是什么。例如，在动态谓词逻辑中，我们将 horse 的意义视为给定的，而不对主体如何拥有 horse 的概念提出任何实质性的主张；我们只是规定主体拥有它。这并不意味着这些问题——这些问题是维特根斯坦和邓梅特工作的核心——最终不应该得到回答：只是说，即使模型不回答这些问题，它也是有趣的。（请注意，动态语义试图给出一个系统和组合的意义解释，这在精神上与维特根斯坦的后期哲学有很大的不同。）

动态语义的一种方法是话语表示理论（DRT，Kamp 1981）。（与 Kamp 的方法密切相关的是 Irene Heim 的文件变化语义（FCS，Heim 1983a）和 Seuren 1985 的话语语义）。DRT 中的意义被称为话语表示结构（DRS）。这些结构是一种包含特定信息的数据库。DRS 本身是一个静态对象，但 DRT 可以被称为一个动态语义框架，因为它允许我们将合并话语表示结构的过程理解为合成意义的过程。通过这种方式，信息变化成为解释过程的一个组成部分。

我们在本条目中的主要关注点是动态语义的第二种方法，尽管我们会一路上与 DRT 进行比较。在这第二种方法中，动态意义是一种行为类型，它们通过其所产生的变化来区分。这是与动态谓词逻辑（DPL，Groenendijk 和 Stokhof 1991a）相关联的方法。根据这种动态语义传统，意义是接收者信息状态如何被修改的规范。例如，它可以是将旧的信息状态映射到已经更新了所包含的信息的状态的函数。或者，它可以是表达意义所带来的信息变化类型的关系。（有关这一传统的早期工作，请参见 Groenendijk 和 Stokhof 1991a，b; Muskens 1991; Dekker 1993; Vermeulen 1993; van Eijck 1994; Vermeulen 1994; Krahmer 1995; van den Berg 1996; Groenendijk et al. 1996; Aloni 1997; Muskens et al. 1997）。

---

## 1. 解释作为一个过程

解释陈述句可以被视为产品或过程。在产品视角中，人们关注在给定情境中的真实概念。在过程视角中，命题的解释被视为一种信息更新步骤，允许我们用新的、更准确的知识状态替换给定的知识状态。动态语义将解释视为一个过程。

### 1.1 更新语义

更新语义是实现解释作为过程思想的一种特定方式。更新语义背后的核心思想非常简单。我们从一个听者/接收者的简单模型开始，该模型按顺序接收信息项。每一刻，听者处于某种状态：她拥有某些信息。这个状态以系统的方式被传入的信息修改。我们现在将传入项的含义分析为它们对接收者信息状态变化的贡献。因此，意义被看作是行为，或者更准确地说，是行为类型：它们不是某个给定状态到另一个状态的具体变化，而是这种具体变化所共有的特征。

### 1.2 命题逻辑作为一种更新逻辑

命题逻辑（否定、析取和合取的逻辑）可以被视为以下的一种更新逻辑。考虑这样一种情况，我们有三个基本命题 p、q 和 r，并且对它们的真值一无所知。那么就有八种可能性：{p¯q¯r¯,pq¯r¯,p¯qr¯,p¯q¯r,pqr¯,pq¯r,p¯qr,pqr}。这里 p¯q¯r¯ 应该被理解为：p、q、r 都不为真，pq¯r¯ 表示 p 为真但 q 和 r 为假，依此类推。如果现在宣布 ¬p（“非 p”），其中四种可能性将消失，我们剩下的是{p¯q¯r¯,p¯qr¯,p¯q¯r,p¯qr}。如果接下来宣布 q∨¬r（“q 或非 r”），可能性 p¯q¯r 将被排除，我们剩下的是{p¯q¯r¯,p¯qr¯,p¯qr}。依此类推。我们可以将像 ¬p 和 q∨¬r 这样的命题的含义视为从可能性集合到其子集的映射。

可能性集合代表了知识状态。在这个例子中，{p¯q¯r¯,pq¯r¯,p¯qr¯,p¯q¯r,pqr¯,pq¯r,p¯qr,pqr}代表了对命题 p、q、r 完全无知的状态。像{pqr¯}这样的单例集合代表了对这些命题的完全了解的状态，而空集 ∅ 代表了由于处理关于 p、q 和 r 的不相容陈述而导致的不一致状态。在这里，我们详细说明了我们命题语言陈述的动态含义：

* 原子陈述。这些是 p，q，r。相应的更新操作是从当前上下文中选择那些字母没有被划掉（上划线）的可能性。
* 否定陈述。这些是形式为 ¬ϕ 的陈述。相应的更新操作是从当前上下文中选择那些形成 ϕ 陈述所选的可能性的补集。
* 陈述的合取。这些是形式为 ϕ∧ψ 的陈述。相应的更新操作是从当前上下文中选择那些形成 ϕ 和 ψ 陈述所选的可能性的交集。
* 陈述的析取。这些是形式为 ϕ∨ψ 的陈述。相应的更新操作是从当前上下文中选择那些由 ϕ 和 ψ 陈述所做的选择的并集形成的可能性。

这将命题连接词的含义定义为从表示知识状态的旧上下文到表示处理命题信息所导致的知识状态的新上下文的操作。

### 1.3 编程语句及其执行

将更新语义的行为与编程语句及其执行进行比较是有益的。这样的比较首次展示了量化在动态环境中的工作方式。命令式语言的编程语句在机器状态的上下文中被解释（或“执行”），其中机器状态可以被视为将值分配给寄存器的分配。假设寄存器由变量 x、y、z 命名，并且寄存器的内容是自然数。那么以下是一个机器状态：

xyz121173

如果在这个状态下执行语句 z:=x（在 C 语法中，这个语句的简化形式是 z=x），结果是一个新的机器状态：

xyz1211712

如果在这个状态下执行语句序列 x:=y; y:=z，结果是：

xyz1171212

这说明了序列 z:=x; x:=y; y:=z 的结果是将 x 和 y 的值交换，副作用是旧值 z 丢失。换句话说，程序 z:=x; x:=y; y:=z 的含义可以看作是从输入机器状态 s 到输出机器状态 s′ 的映射，两者在几个方面不同： s′(x)=s(y) 和 s′(y)=s(x) （即，输出状态中 x 和 y 的输入值被交换），以及 s′(z)=s′(y)。

现在考虑存在量词“存在一个 x 使得 A”。假设我们将这个量词添加到一种命令式编程语言中。它的含义是什么？它是一条指令，用新值替换 x 的旧值，其中新值具有属性 A。我们可以将其分解为“存在 x”和测试“A”的部分。如果一个公式/指令的更新逐个接受输入上下文的状态并测试它们是否满足特定条件，那么它就是一个测试。如果满足条件，它们将包含在输出上下文中；如果不满足条件，它们将被丢弃。也就是说，测试是一种将输入上下文转换为输入上下文的子集的更新。命题逻辑中的所有公式在上面的命题逻辑作为更新逻辑部分都是测试。

“存在 x”和测试“A”这两部分通过顺序组合“∃x; A”粘合在一起。专注于“∃x”这部分，它的自然含义是什么？一条指令，用任意新值替换 x 的旧值。这再次是输入状态和输出状态之间的关系，但与像 x:=y 这样的明确赋值不同的是，现在这个关系不是一个函数。实际上，量词的这种关系含义出现在著名的 Tarski 风格的一阶逻辑真值定义中（参见 Tarski 的真值定义条目）。

> ∃xϕ 在模型 M 相对于变量分配 α 是真的，当且仅当存在某个变量分配 β，β 与 α 最多只在分配给 x 的值上不同，并且 ϕ 在模型 M 相对于分配 β 是真的。

在 Tarski 定义中隐含了一个关系，该关系在分配 α 和分配 β 之间成立，当且仅当对于所有与 x 不同的变量 y，α(y)=β(y)。这个关系通常被称为 x 的随机重置，表示为 [x]。对于任何变量 x，完全分配之间的二元关系 [x] 是分配之间的等价关系，即它是一个自反的、对称的和传递的二元关系。下面，我们将看到这样的关系如何在动态化的一阶谓词逻辑中发挥作用。

采用 [x] 作为“∃x”的含义，注意它的含义在本质上与测试的含义非常不同，因为它在输出上下文中创建新的值。相比之下，通过测试更新得到的输出上下文始终是输入上下文的子集，因此相对于输入上下文永远不会包含任何新内容。

### 1.4 动态语义中的上下文概念

信息状态通常被称为上下文，因为状态是形式语言或自然语言中表达式的“解释”，即语义评估的先决条件。使用“上下文”一词还清楚地表明，我们对接收者的总状态不感兴趣，只对与我们关注的表达式/信息项的解释相关的方面感兴趣。因此，意义在动态传统中通常被称为上下文变化潜力。

尽管从广义上讲，动态语义中的意义变化涉及上下文的各个方面，但重要的是要注意，当语义学家谈论上下文时，他们可能指的是不同的事物（比较认识论语境主义和指示词），这些不同的观点产生了处理各种问题的动态语义的各种变体。其中一些问题包括：构建适当的代词参照机制（比较代词和参照词条目），解释条件句的语义（比较条件句和条件句逻辑的词条目），对断言和预设之间的区别进行语义处理（比较断言、言语行为、蕴涵和语用学的词条目），以及发展“预设投射”的理论，解释话语的解释如何受到存在于说话者和听话者之间的共同基础的影响和引导，并发展一种理论，说明这种共同基础随着话语的进行而如何发展（比较语用学和蕴涵的词条目）。

上下文在两个不同的区分中起到作用。第一个区分是上下文和修改上下文的内容之间的区分。在这里，上下文是信息状态或其适当抽象（请参阅有关信息语义概念的条目）。上下文修改器是（接收到的）信息项的含义。如果没有正确类型的预设信息状态，就无法接收到信息。在经典静态谓词逻辑中，适当的类比如下：信息状态是一个赋值（环境）或一组赋值，而接收到的信息是一组赋值。第二个区分是上下文和内容之间的区分。在这里，上下文类似于接收者的存储容量和其他可能影响新表达式/信息项解释的特征。内容是存储的（事实性的，真值条件的）信息。因此，例如，这个意义上的上下文可以是一组寄存器/变量，或者在 DRT/FCS 术语中，是话语指称或文件。内容将是一些赋值的集合，或者可能是约束这些话语指称的值和作为实际世界的候选的世界集合的世界/赋值对。

这里有一个例子来说明这些区别。假设我们将信息状态视为一个有限的话语指称集合和一组世界/赋值对的配对，其中赋值的定义域是给定的有限话语指称集合。这样的状态将是第一意义上的上下文，而话语指称集合将是第二意义上的上下文。一种基本的更新方式是内容的更新：在这里，我们限制了世界/赋值对的集合，并保持指称集合不变。第二种基本的更新方式是扩展指称集合：我们扩展了我们的存储容量。我们将给定的世界/赋值对修改为世界和扩展赋值对，其中我们的扩展赋值受到旧赋值的限制，但在新的指称上可以取任意可能的值。因此，我们的例子中的更新过程是二维的：既有内容的更新，又有第二意义上的上下文的更新。

## 2. 动态谓词逻辑

### 2.1. 概念基础

对于自然语言的动态语义框架的动机首先来自于人称代词和不定名词短语的指称之间的潜在依赖关系。这种依赖关系的最简单例子是指代性话语照应，如：

* (1)玛丽昨天遇到了一个学生。他需要帮助。

观察到的是，这个句子序列与单个句子的意思相同：

* (2)昨天，玛丽遇到了一个需要帮助的学生。

如果我们假设不定式是存在量词，那么对于(2)的分析就很简单。它只是说存在一个 x 是一个学生，昨天遇到了玛丽，并且那时需要她的帮助。在谓词逻辑中：

* (3)∃x(学生(x)∧ 遇到(玛丽,x)∧ 需要帮助(x))

然而，对于（1）中等价的两个句子示例，没有类似的分析可用。这是因为解释是组合的（请参见有关组合性的条目进行讨论），在我们的组合分析中，我们将首先对 Mary 昨天遇到了一个学生进行分析，其形式为 ∃x（student（x）∧met（m，x））。同样，第二个句子将对应于 need-help（x）。假设将多个句子组合的默认方式是将它们连接起来，我们现在得到：

* （4）∃x（student（x）∧met（m，x））∧need-help（x）

x 的最后一次出现没有被绑定，因此在经典谓词逻辑中，我们没有得到（1）和（2）的等价翻译。总之，如果我们想在静态语义框架中解释（1）和（2）之间的等价关系，我们将无法保持对单个句子的组合解释。我们必须假设（1）中的话语被整体解释。

这是违反直觉的。我们知道(1)中的每个句子的意思，并且我们希望捕捉这些意义与其他意义结合形成一个有意义的整体的潜力，这个整体对应于一系列句子。动态语义允许我们在句子和超句子级别上提供一个完全组合的意义分析。它通过保证在经典谓词逻辑的动态解释中，(3)和(4)在语法上是等价的来实现这一点。特别是，在动态谓词逻辑中，以下是有效的：

 ∃x(ψ∧ϕ) 当且仅当 ∃x(ψ)∧ϕ

在这种自然语言的动态语义中，一个句子的意义不对应于一组真值条件，而是对应于对上下文执行的一个动作。有两种类型的动作。像 need-help(x)或 met(m,x)这样的谓词是测试。它们仅仅检查当前上下文中的每个状态/赋值是否为 x 分配了满足相关谓词的值；只有在这种情况下，测试才会将未经改变的赋值传递给输出上下文。相反，存在量词不是一个测试。它有可能通过随机重置其关联变量的值来改变上下文。因此，∃x(ψ)接受一个上下文，在上下文中随机更改 x 的值，并将这些更改后的赋值传递给输出上下文，如果它们还满足由测试 ψ 贡献的条件。

这种语义学的主要后果之一是存在量词的范围原则上是无限的。它改变了某个变量的值，直到该变量发生进一步的变化之前，任何后续的测试都会访问被设置的特定值。这也意味着存在量词的语义可以在不引用任何范围的情况下给出：∃x 的含义是一个接受上下文并返回相同上下文的动作，最多将 x 的值随机替换为另一个值。（我们将在下面详细解释这一点。）

目前，动态语义这个术语有两个意义（适用于自然语言）。首先，动态语义是一个普遍的观念，即逻辑陈述不表达真值条件，而是对上下文进行操作（其中上下文可以以各种方式概念化）。对于动态语义这个术语的第二种理解是一组在关于某些自然语言现象的语义方面的理论立场上采取的立场，尤其是代词照应。（有关预设方面的动态语义的类似观点，请参见下文）。对于照应的情况，这种理论理解体现了两个假设的结合：（i）代词对应于变量；（ii）不定式是非量化的，它们只是贡献了一个动态变量分配更新。从第二个假设清楚可见，这个术语动态语义的理论用法预设了更一般的观点，即意义是对上下文的操作。

在我们开始定义动态谓词逻辑之前，我们应该注意到动态语义解释代词的方式绝不是文献中唯一的方式。我们也可以选择放弃代词与变量对应的观念，而给予它们更复杂的含义，类似于确定描述的含义。在当代传统中，这样的想法早在 Quine 1960 和 Geach 1962 中就出现了，然后由 Evans（1977, 1980）、Parsons（1978，其他互联网资源）、Heim（1990）和 Elbourne（2001, 2005）进一步发展。有关讨论，请参见 Nouwen（即将出版）。

### 2.2 指定动态谓词逻辑

前一小节初步介绍了动态语义框架的基本目标，即定义一个逻辑语义，其中陈述表达动作，特别是存在量词有可能重置变量，从而改变上下文。我们通过检查普通谓词逻辑中存在量词的定义来获得如何做到这一点的线索。假设我们使用固定域 D 上的固定变量 VAR 的总分配。因此，总分配集合 ASSIGN 是 VAR 到 D 的所有（总）函数的集合。

让像 P(x)这样的原子公式的含义是所有满足 P 的对象的分配 α 的集合 F。

 现在定义：

α [x] β:=∀v∈VAR∖{x} (α(v)=β(v))。

所以 [x] 是二元关系“赋值 β 是通过（最多）重置变量 x 在赋值 α 中的值而得到的”。如前所述，这是变量赋值上的等价关系。现在 ∃xP(x)的含义 G 将是：

G:={α∈ASSIGN∣∃β∈Fα [x] β}。

因此，G 是可以成功重置关于 x 并通过此重置得到 F 中的赋值的赋值集合。从不同的角度来看，G 是由关系 R 给出的关系的定义域。

αRβ:=α [x] β and β∈F.

我们可以说，G 是重置动作 R 的前提条件。现在 DPL 的思想是将 ∃xP(x)的含义定义为重置动作 R，而不是前提条件 G（如同经典静态一阶逻辑中的定义）。这样做的好处是我们不会丢失信息，因为 G 总是可以从 R 中获得。此外，关系 R 的范围由在前提条件 G 中与 x 的值最多不同的赋值 β 组成，并且这些赋值也在 F 中（即 β(x)在 P 的解释中）。二元关系 R 的范围中存储的 x 值恰好是满足 P 的 x 值，也就是我们要寻找的值。

更一般地，我们将 DPL 的含义定义为赋值之间的二元关系。这些关系可以被看作（建模）重置动作。这是一种简单但众所周知且有用的建模动作的方式：将动作视为在动作之前和之后的世界状态之间的关系。

这是完整的定义。假设一个非空域 D，一组变量 VAR 和一个模型 M=⟨D,I⟩，其中 I 是 Σ 的签名的模型。原子条件 π 的形式为 P(x0,…,xn−1)，其中 P∈Σ 的 arity 为 n。原子重置 ε 的形式为 ∃v，其中 v 是一个变量。给定 Σ 的谓词逻辑语言如下（⋅ 是合取，∼ 是否定）：

 ϕ::=⊥∣⊤∣π∣ε∣ϕ⋅ϕ∣∼(ϕ)。

赋值是 ASSIGN:=DVAR 的元素 α,β,…。我们将该语言的动态/关系语义定义如下：

* α [⊥] β:=α≠α.
* α [⊤] β:=α=β.
* α [P(x0,…,xn−1)] β:=α=β and ⟨α(x0),…,α(xn−1)⟩∈I(P), where P∈Σ has arity n.
* α [∃v] β:=α [v] β
* α [ϕ⋅ψ] β:=存在一个 γ，使得 α [ϕ] γ 且 γ [ψ] β，或简写为 α [ϕ] γ [ψ] β。
* α [∼(ϕ)] β:=α=β 且不存在一个 γ，使得 α [ϕ] γ。

注意，连词 ⋅ 被解释为关系合成，否定 ∼ 基本上被解释为相对于被否定公式所表示的关系的补集。

真理是以关系意义来定义的；我们基本上将分配之间的二元关系投影到它们的第一个坐标上：

 α⊨ϕ:=∃β α [ϕ] β。

我们可以将蕴涵 ϕ→ψ 定义为 ∼(ϕ⋅∼ψ)。将真值定义应用于此，得到：

> α⊨ϕ→ψ 当且仅当 ∀β(α [ϕ] β⇒β⊨ψ)，即，任何由将前提 ϕ 更新到 α 得到的赋值 β 都满足结论 ψ。

关系意义还提供了动态蕴涵的以下美丽定义：

ϕ⊨ψ:=∀α,β(α [ϕ] β⇒∃γβ [ψ] γ).

这个定义最早由汉斯·坎普在他的开创性论文 Kamp 1981 中引入。简单来说，它表示任何已经合并了由 ϕ 贡献的更新的赋值 β 都能够支持/满足 ψ。

注意，∼ϕ 等价于(ϕ→⊥)，而(ϕ→ψ)成立当且仅当 ϕ⊨ψ。同样重要的是，我们可以将 ∀x(ϕ)定义为(∃x→ϕ)。

一个可能的替代符号 ∃v 的表示法是 [v:=?]（随机重置）。这强调了与编程语言中的随机赋值的联系。

谓词符号的解释是条件。它们是对角线{⟨α,α⟩∣α∈ASSIGN}的子集（即 ⊤ 的含义）。对角线的子集是测试：它们不做任何修改，只是传递满足条件的内容，并丢弃不满足条件的内容。将一组赋值 F 映射为条件{⟨α,α⟩∣α∈F}的映射 diag 是经典静态世界与动态世界之间的链接。例如，diag(F)和 diag(G)的关系合成是 diag(F∩G)。

可以将经典一阶逻辑（FOL）在 DPL 中解释如下。我们假设 FOL 语言具有以下连接词和量词：⊤,⊥,∧,→,∃x。我们进行如下翻译：

* ()∗ 与原子公式和 → 运算符可交换
* (ϕ∧ψ)∗:=ϕ∗⋅ψ∗
* (∃x(ϕ))∗:=¬¬(∃x⋅ϕ∗)

我们得到 [ϕ∗] 是 ϕ 的经典解释的对角线。我们的翻译是组合的。它表明 FOL 可以被看作是 DPL 的一个片段。

相反地，可以将任何 DPL 公式 ϕ 翻译为谓词逻辑公式 ϕ°，使得 [ϕ] 的域是 ϕ° 的经典解释。定义这种翻译的一种方式是通过一个预条件演算，使用 Floyd-Hoare 规则（Eijck 和 de Vries 1992）。以下是对此的一种变体。采用标准谓词逻辑语言，添加钻石形式 ⟨ψ⟩ϕ，其中 ψ 范围是 DPL 公式，α⊨⟨ψ⟩ϕ 当且仅当存在一个赋值 β 使得 α [ψ] β，并且 β⊨ϕ。然后以下等价关系表明这个扩展不增加表达能力。

* ⟨⊥⟩ϕ↔⊥。
* ⟨⊤⟩ϕ↔ϕ.
* ⟨P(x1…xn)⟩ϕ↔(P(x1…xn)∧ϕ).
* ⟨∃v⟩ϕ↔∃vϕ.
* ⟨ψ1⋅ψ2⟩ϕ↔⟨ψ1⟩⟨ψ2⟩ϕ.
* ⟨∼(ψ)⟩ϕ↔(¬(⟨ψ⟩⊤)∧ϕ).

因此在弱意义上，“DPL 中没有发生任何新的事情”。我们不能定义一个在 FOL 中也无法定义的集合。模态的等价性确定了一个翻译( )°，它产生了实现给定后置条件的最弱前置条件；请参见下一节，以了解这种翻译的示例。

### 2.3 示例：驴子句子

动态谓词逻辑的优点之一是它允许对驴子句子进行直接的组合分析（Geach 1962；参见关于指代的条目）。

* （5）如果一个农民拥有一只驴子，他就会打它。

显然，代词 "he" 和 "it" 与不定冠词 "a farmer" 和 "a donkey" 之间存在依赖关系。简而言之，在经典分析中，问题在于(5)给出了两种选择，但这两种选择不能完全涵盖(5)的可能含义。如果我们将不定冠词视为指代特定的农民和特定的驴，并将代词简单地指向这些实体，那么(5)就会有一个可能但不太显著的解读。最突出的解读描述了拥有关系和打击关系之间的协变关系：任何处于拥有关系的农民-驴配对也处于打击关系。显然，我们需要将不定冠词解释为量词。然而，如果我们这样做，它们将无法绑定条件句中的变量，因为组合分析将把代词贡献的变量放在条件句前提中存在量词的经典范围之外。也就是说，(6)不能产生(5)的正确真值条件。

* (6)(∃x(farmer(x)∧∃y(donkey(y)∧own(x,y))))→beat(x,y)

(6)的动态版本是(7)，它给出了正确的真值条件：任何随机重置的 x 和 y，使得 x 是一个农民，y 是 x 拥有的驴，也使得 x 打击 y。

* (7)∃x⋅farmer(x)⋅∃y⋅donkey(y)⋅own(x,y)→beat(x,y)

有趣的是，将(7)翻译成谓词逻辑的结果不是(6)，而是(8)。因此，问题不在于谓词逻辑无法表达驴条件句的真值条件，而是像(8)这样的句子不太可能是组合解释过程的最终产物（但参见 Barker 和 Shan 2008）。

* (8)¬∃x(farmer(x)∧∃y(donkey(y)∧own(x,y)∧¬beat(x,y))).

这是如何从(6)推导出(8)的：

(⟨(∃x⋅Fx⋅∃y⋅Dy⋅Hxy)→Bxy⟩⊤)°=(⟨∼((∃x⋅Fx⋅∃y⋅Dy⋅Hxy)⋅∼Bxy)⟩⊤)°=¬(⟨(∃x⋅Fx⋅∃y⋅Dy⋅Hxy)⋅∼Bxy⟩⊤)°=…=¬∃x(Fx∧∃y(Dy∧Hxy∧¬Bxy))).

### 2.4 动态广义量化

动态谓词逻辑在自然语言中量化和指代交互的成功应用取决于 DPL 中存在量化是动态的，而全称量化不是的事实。如果全称量化也是动态的，会发生什么呢？首先要注意的是，在并行于随机重置动作 ∃x 的情况下定义全称量化动作 ∀x 是没有意义的。这是因为全称量化只在给定域（限定词）上有意义，并且与某个给定属性（范围）相关。其次，如果我们给 ∀x(ϕ)(ψ)一个动态解释，它预测全称量词可以与跨句子边界的单数代词建立指代关系，就像存在量词一样。对于类似（9）的情况，这显然是不可取的。

* （9）每个男孩都写了一篇文章。#他还写了一个研究提案。

然而，一旦我们看到复数指代，就会发现全称量化（事实上，其他非不定广义量词的性质）的静态性质不应该被视为理所当然。例如，（10）允许一种解读，其中 they 与每个男孩形成指代关系。

* (10)每个男孩都写了一篇文章。他们还写了一个研究提案。

假设像(10)这样的例子应该接受动态语义的处理（请参见早前关于替代解释和 Nouwen 即将发表的讨论），结论只能是普遍量词不应该给予静态解释。接下来的问题是什么样的解释是合适的，以及这种解释如何区分(9)中的指代不合适的情况和(10)中的情况。一种选择是区分在量词范围内被量词约束的变量所分配的值和在量词范围之外分配给该变量的值。（例如，参见 Kamp 和 Reyle 1993 关于这种策略的讨论以及 Nouwen 2007 的讨论。）为了解释(10)，第一句中被量词约束的变量出现范围是个别男孩，而该变量在量词范围之外被分配为所有男孩的复数（即在第二句中）。然而，正如 van den Berg（1996）首次展示的那样，这样的解决方案只能解决一半的问题。在话语中，代词不仅可以访问与量词相关的复数，还可以访问这些量词所参与的关系。例如，在(11)的第二句中，代词 it 与主语中的男孩量化变化，以一种使第二句被理解为每个男孩提交了他写的论文的方式（参见 van den Berg 1996；Krifka 1996；Nouwen 2003；Brasoveanu 2007, 2008）。

* (11)每个男孩都写了一篇文章。他们中的每个人都将其提交给了一家期刊。

动态处理广义量化和复数指代的主要思想是不通过将复数赋值给变量来表示复数值，而是采用一种允许复数（例如，集合）的赋值函数的上下文概念。假设（11）中的第一句话被翻译成具有动态量词的动态谓词逻辑，如下所示：∀x(boy(x))(∃y⋅essay(y)⋅wrote(x,y))。这样的公式的解释需要收集赋值函数，其中 x 的值是一个男孩，y 的值是这个男孩写的一篇文章。普遍量词要求这样的集合包括谓词 boy 的所有可能值。在随后的对话中，我们现在可以访问所有 x 值的集合，即所有男孩的集合，所有 y 值的集合，即男孩写的文章的集合，以及个别的男孩-文章对：在（11）的第一句话之后的上下文赋值集合中的每个原子赋值 f 都满足 f(y)是男孩 f(x)写的一篇文章。现在只需要解释（11）中的指代案例的假设是，那里的普遍量化涉及赋值函数的普遍量化，而不仅仅是对值的量化。有关实现这一思想的各种方法，请参见 van den Berg（1996）、Nouwen（2007，即将出版）、Brasoveanu（2007，2008，2013）的评论者。

结果是，给定一个适当结构化的上下文概念，量词可以被普遍地给予动态解释。一个重要的结果是，这种分析方式可以扩展到非名词量词（Brasoveanu 2007）。像（11）这样的情况可以被描述为量化从属的情况，而结构化上下文方法可以被看作是提供了一个窥视从属机制背后的窗口。像著名的（12）这样的情况，可以得到类似的处理。

* （12）一只狼可能会进来。它可能会吃掉你。

情态动词可能引入了一个量词，该量词在不定冠词 a wolf 上起作用，就像每个男孩在上面的(11)中对一篇文章起作用一样。由(12)中第一句话贡献的更新的输出是一组分配函数，因此将存储由可能性贡献的一组可能世界，这些可能世界在认识上相对于实际世界是可能的，并且一组在这些认识上可达的世界中出现的狼。然后，(12)中的第二句话可以进一步阐述世界和狼之间的依赖关系，要求至少一些认识上的可能性是这样的，即相应的狼不仅进入而且还吃掉你。

### 2.5 超越指代的动态

虽然指代和预设（见下文）是可能需要动态语义分析的中心语言现象，但原则上上下文的任何方面都可能成为需要动态解释分析的现象的目标。Barker 在 2002 年对模糊陈述提供的信息的处理是有启示性的。Barker 假设上下文包含模糊形容词（如高）的精确标准。像(19)这样的句子可以以两种不同的方式使用。如果信息状态对于什么算作高有精确（足够）的信息，那么(19)的话语可以用来提供关于约翰身高的信息。然而，如果听话者对于像高这样的表达的适当明确化没有概念（比如说，他/她是外星人或外国人），但是他/她对于约翰的身高有信息，那么(19)可以用来提供关于标准的信息。

## 3. 前提假设

### 3.1 连接词的前提假设和动态语义

上下文在前提假设中起着重要作用。像（13）这样的句子假设约翰迟到了。但是将这个句子放在提供这个信息的上下文中，如（14）中，前提假设就消失了。在（14）中，约翰迟到了被断言，而不是假设。

* (13)玛丽知道约翰迟到了
* (14)约翰迟到了，玛丽知道他迟到了。

斯坦纳克尔（Stalnaker）在 1973 年认为预设是基于假定的共同知识。像（13）这样的句子默认假设约翰迟到是共同知识。在这个意义上，（13）要求话语的上下文是这种共同知识存在的。相比之下，（14）没有这样的要求，因为（14）的第一个连词断言了第二个连词默认假设的内容。斯坦纳克尔做出的关键假设是解释是增量的，即对于形式为 [S1 and S2] 的句子，S2 的解释发生在已经更新了 S1 的上下文中。示意图：

* (15)C [S1 和 S2]=(C [S1])(S2)

(15)中 Stalnaker 对该方案的解释是实用主义的：当我们在话语中遇到一系列从句时，我们会根据一个已经通过解释前面从句的上下文来解释这些从句。这种逐步解释的想法简单而强大，并且对于具有连词解释的复杂话语（例如，带有 and 的协调和简单的陈述句序列）是完全合理的。由于合取式中的合取项具有断言力，它们可以用来更新上下文以创建一个新的局部上下文。然而，问题在于，前提在合取环境中并不会消失。就像（14）一样，（16）也缺乏一个共识，即约翰迟到这一事实。但是这里的第一个析取项没有断言力（例如，参见 Schlenker 2009 进行讨论）。目前还不清楚什么样的实用主义规则可以解释（16）中缺乏前提的情况。

* (16)要么约翰没有迟到，要么玛丽不知道他迟到了。

像（16）这样的例子质疑了像（15）这样的增量解释模式的价值。除此之外，（15）在其解释进行的假设方面过于自以为是。断言具有命题内容 p 的从句并不能自动使 p 成为共同知识。相反，这样的断言应该被视为使 p 成为共同知识的提议。是否将 p 变为共同基础取决于其他对话者接受该命题的意愿（例如，不反对该断言）。换句话说，（15）似乎不适合捕捉（信息流的）语用学。

一个可能的解决方法是将（15）视为语义规则，而不是作为一种语用规则，以动态的解释概念来表达。这个想法最早是在 Heim 1983b 中提出的，继而在 Karttunen 1973 中得到了最突出的提议。Karttunen 区分了全局上下文（相对于当前句子进行评估的上下文）和局部上下文（相对于当前从句（或潜在的某个从句实体）进行解释的上下文）。现在的想法是，像（15）这样的规则可以表达 and 的语义。在（15）中，C 是全局上下文。并且，合取的语义的一个关键部分是 S2 的局部上下文是通过 S1 更新全局上下文得到的。因此，（14）中没有预设仅仅是因为 and 的动态语义。我们只需要为（16）中缺乏预设提供一个析取的语义，其中第二个析取式的局部上下文已经通过第一个析取式的否定进行了更新；参见 Krahmer 和 Muskens 1996，这样的解释还捕捉了（双重）否定和指代之间的相互作用。

为了使事情更具体，让我们假设上下文是可能世界的集合，并且用简单子句 S 更新 C 的更新 C [S] 是 C∩p，其中 p 是 S 的命题内容：用子句 S 更新 C 会输出子句为真的 C 世界。 (18)中的规则展示了英语中主要命题运算符的动态解释的 Heimian 片段。

* (17)C [not S1]=C∖C [S1]
  C [S1 and S2]=(C [S1])[S2]
  C [如果 S1，那么 S2]=(C [非 S1])∪(C [S1])[S2]
  C [S1 或 S2]=C [S1] ∪(C [非 S1])[S2]

有人对这种动态解释的解释力产生了质疑，因为这个框架未能解释为什么似乎没有自然语言表达式编码了(17)的最小变体，其中第二个析取项 S2 的局部上下文是 C [S1] 而不是 C [非 S1]，或者 S1 的局部上下文基于 S2 的更新，或者根本没有局部上下文，如(18)所示（参见，例如，Soames 1989）。

* (18)C [S1 或 S2]=C [S1] ∪C [S2]

鉴于这些批评，最近出现了对预设投射的静态方法的复苏，例如 Schlenker（2008, 2009）、Chemla（2008，其他互联网资源）的实用方法以及 George（2008）和 Fox（2008）的语义（三值）方法。正如 Rothschild 指出的那样，有一种使得语义沿着（17）的解释路线变得解释性的方法。为了做到这一点，必须表明联结词的允许动态解释具有某些属性。正如 Rothschild（2011）所示，如果我们假设上下文变化潜力遵守某些定义性原则，那么可以实现对预设的解释性和经验上的充分处理。让我们假设 C [S]（对于简单子句 S）仅在 C 中的所有世界中 S 的任何预设都为真时才被定义。规则（17）确定了复合语句的定义条件。例如，根据（17），[not S] 仅在 C 中未定义，如果 S 在 C 中未定义。Rothschild 的洞察力在于我们可以通过限制所得到的定义条件来限制动态解释。

### 3.2 预设和动态认知逻辑

认识逻辑，即知识的逻辑，是模态逻辑的一个分支，研究“我知道”这种模态性（比较条目：认识逻辑，信念修正逻辑）。认识逻辑中的动态转变发生在 2000 年左右，引入了对状态变化的关注，但现在状态被视为一组代理人的知识的表示。

如果我们固定一组基本命题 P 和一组代理人 I，那么对于 P 和 I 的知识状态包括一组可能世界 W，以及一个赋值函数 V，将 P 的子集分配给 W 中的每个 w（如果 w∈W，则 V(w)列出在 w 中为真的基本命题），对于每个代理人 i∈I，还有一个关系 Ri，表示 i 的认识相似性（如果 wRiw′，这意味着代理人 i 无法区分世界 w 和世界 w′）。认识模型 M=(W,V,{Ri∣i∈I})被称为多模态 Kripke 模型。指向的认识模型是具有指定世界 w0 代表实际世界的认识模型。

如果进行了一个公开宣布 ϕ，给定的认识状态(M,w0)=((W,V,{Ri∣i∈I}),w0)会发生什么？直观上，认识模型 M 的世界集 W 被限制为那些 ϕ 成立的世界 w∈W，赋值函数 V 和认识关系 Ri 也相应受限。称新模型为 M∣ϕ。如果 ϕ 在 w0 中为真，则公开宣布 ϕ 的含义可以看作是从(M,w0)到(M∣ϕ,w0)的映射。如果 ϕ 在 w0 中为假，则无法进行更新。

Veltman 的更新逻辑可以在公共公告逻辑中得到解释（与共同知识条目进行比较），通过允许形式为 ◊ϕ 的公共公告，其中的情态被解读为在共同知识下的可达性。如果一个代理集合的 S5 知识状态（与认知逻辑条目进行比较）通过公共公告 ◊ϕ 进行更新，那么如果 ϕ 在模型中的某处为真，则更新不会改变任何内容（因为在这种情况下 M∣◊ϕ 等于 M），否则更新会导致不一致性（因为假设公共公告为真）。这与更新逻辑定义一致。

具有交流更新的认知逻辑的逻辑工具箱称为动态认知逻辑或 DEL。DEL 起源于对公共公告（Plaza 1989; Gerbrandy 1999）的认知和信念效应的分析。公共公告很有趣，因为它创建了共同知识。还有其他各种类型的公告-私人公告、群体公告、秘密分享、谎言等-也具有明确定义的认知效应。Baltag et al. 1999 和 Baltag and Moss 2004 提出了一个广泛类别的更新行为的通用框架。Benthem et al. 2006 提供了一个进一步的推广，形成了一个完整的通信和变化逻辑，其中丰富的行为允许改变世界的事实。Ditmarsch et al. 2006 给出了动态认知逻辑的教科书式处理。

在认识论逻辑的框架下，可以通过预设来表示话语的交际情境。首先，我们需要表示说话者对多主体信念（或知识）状态中她的听众所知道或相信的内容的假设，然后我们需要对交际行为对信念状态的影响进行建模。在动态认识论逻辑中处理预设话语的一种简单方法是将预设 P 建模为一个公开宣布“众所周知 P”。在确实众所周知 P 的情况下，这一信息的更新不会改变任何内容。然而，在 P 不是众所周知的情况下，该话语是错误的，而错误的公开宣布会导致不一致的知识状态。

### 3.3. 超越预设

动态语义特别适合描述不同类型的语言材料如何影响信息状态的不同方面。特别是，动态语义允许有效地对待问题内容和非问题内容进行建模，例如，通过陈述句的话语所断言的内容和发挥某些次要角色的内容。例如，（19）的问题内容是约翰的邻居昨天被逮捕了：这是说话者打算断言的信息。附加说明的“我从未见过的人”不是问题内容。一种看待这一点的方法是，只有当对话者打算质疑邻居是否被逮捕时，才能用“不！那不是真的！”回应（19），而不是仅仅希望表达对说话者声称从未见过邻居的不信任。

* (19)约翰的邻居，我从未见过面，昨天被逮捕了。

动态语义是分析解释这类句子时的合适框架，因为它自然地允许对信息流进行建模。例如，AnderBois 等人在 2015 年提供了关于像(19)这样的句子的解释，其中矩阵句更新了一个可能世界的局部集合。更新后的集合可以被视为更新共同基础的潜在候选。相比之下，同位语直接更新了共同基础。它不是提议的共同基础更新，而是可以看作是一种强制性的更新（参见 Nouwen 2007 提供的另一种动态逻辑）。AnderBois 等人在 2015 年的想法在一定程度上受到了在证言领域成功应用的类似思想的启发；特别是参见 Murray 2014。

## 4. 在类型逻辑中编码动态语义

动态语义中一直存在着组合性的重要关注点（参见组合性条目）在自然语言语义学中使用逻辑系统。通过使用高阶逻辑（参见二阶和高阶逻辑和丘奇类型理论条目），可以实现自然语言量化系统的彻底组合性解释，正如经典的蒙塔古语法（Montague 1974a，b，1973）所示（参见逻辑形式条目）。我们将回顾如何将动态方法扩展到高阶系统。动态语义与类型理论之间的联系更像是一种联络而不是稳定的婚姻：没有内在的连接需求。这里将介绍这种联系，以解释蒙塔古语法对动态语义的历史影响。

大多数关于蒙塔古语法动态版本的提议实际上是动态谓词逻辑（DPL）的高阶版本。这适用于 Groenendijk 和 Stokhof 1990; Chierchia 1992, 1995; Muskens 1994, 1995, 1996; Eijck 1997; Eijck 和 Kamp 1997; Kohlhase 等人 1996; 和 Kuschert 2000。这些系统都继承了 DPL 方法的一个特点（或错误）：它们使重新赋值具有破坏性。DRT 不会遇到这个问题：Kamp 1981 和 Kamp 和 Reyle 1993 的话语表示构建算法是以有限域的函数形式陈述的，并且仔细讨论了“采用新的话语指称”来扩展验证函数的域，以处理每个新的名词短语。

在外延蒙塔古语法中，“一个人”翻译为：

 λP∃x(男人 x∧Px).

这里的 P，类型为 e→t，是 VP 槽的变量：假设 VPs 表示实体集合。

在 Groenendijk 和 Stokhof 1990 年的动态蒙塔古语法（DMG）中，不定 NP 的翻译引入了一个指示索引。 "一个男人" 的翻译是

λPλaλa′⋅∃x(男人 x∧Pui(ui∣x)aa′)。

动态语义(DMG)的基本类型不同于经典外延蒙塔古语法的基本类型 e 和 t，DMG 有基本类型 e、t 和 m（m 代表标记）。状态选择标记的实体，因此它们可以被视为类型 m→e 的对象。将 m→e 缩写为 s（表示“状态”），我们将类型 s→s→t 的对象称为状态转换。DMG 翻译中的变量 P 的类型为 m→s→s→t，因此 VP 的含义已从类型 e→t 提升到此类型。注意，→从右侧关联，因此 m→s→s→t 是 m→(s→(s→t))的简写。实际上，DMG 可以被视为通过标记替换实体和通过状态转换替换真值的系统性结果。对于“快乐”的 VP 含义是将标记映射到状态转换的函数。标记 ui 的状态转换将检查输入状态是否将 ui 映射到快乐的实体，以及输出上下文是否等于输入上下文。变量 a、a′范围在状态上，表达式(ui∣x)a 表示将 a 中 ui 的值重置为 x 的结果，因此 ui 的旧值被销毁（破坏性赋值）。翻译引入了参照标记 ui 上的指示索引 i。实际上，翻译是从带索引的不定名词短语“一个男人 i”开始的。蒙塔戈维安组合性与动态语义之间的联系以及基本的蒙塔戈维安和动态成分在 Muskens 1991、1995、1996 年提出的变化逻辑中更加透明和简化。因此，Muskens 的组合性 DRT 可能是当前组合动态语义研究的事实上的标准和起点。另一种处理方式是增量类型逻辑（ITL），它是基于无变量索引的类型逻辑的扩展，避免了破坏性赋值问题。 动态语义对 DPL 的堆栈语义的基本思想是在 Vermeulen 1993 年的基础上发展起来的，它用堆栈值替代了普通 DPL 的破坏性赋值，当重置时会丢弃旧值，而堆栈值赋值允许重用旧值。堆栈值赋值将每个变量赋予一个值的堆栈，堆栈的顶部是当前值。存在量化将一个新值推入堆栈，但也有可能弹出堆栈以重用先前赋值的值。Eijck 的 2000 年 ITL 实际上是堆栈语义的类型化版本，使用了一个单一的堆栈。

假设存在一个实体的领域，上下文是实体的有限列表。如果 c 是长度为 n 的上下文，则我们将其元素称为 c [0]，…，c [n−1]，将其长度称为|c|。我们将长度为 i 的上下文的类型称为 [e] i。如果 c 是 [e] i 中的上下文，则类型为{0,…,i−1}的对象可以用作 c 的索引。如果 c∈ [e] i 且 j∈{0,…,i−1}，则 c [j] 是上下文中在位置 j 处出现的类型为 e 的对象。上下文的一个关键操作是扩展一个元素。如果 c::[e] i 且 x::e（c 是长度为 i 的上下文，x 是一个实体），那么 c∧x 是长度为 i+1 的上下文，它具有元素 c [0]，…，c [i−1]，x。因此 ∧ 是一个类型为 [e] i→e→[e] i+1 的运算符。还要注意，像 [e] i 这样的类型实际上是多态类型，其中 i 充当类型变量。参见 Milner 1978 年。

在 ITL 中，没有破坏性赋值，而且不定名词短语在语法上不带索引。ITL 对“一个人”的翻译从上下文中获取一个索引，如下所示：

λPλcλc′⋅∃x(男人 x∧P|c|(cx)c′).

这里，P 是类型为{0,…,i}→[e] i+1→[e] j→t 的变量，而 c 是类型为 [e] i 的变量，表示长度为 i 的输入上下文，c′是类型为 [e] j 的变量，表示输出上下文。注意，P 的类型{0,…,i}→[e] i+1→[e] j→t 表示 P 首先接受一个范围为{0,…,i}的索引，然后是适合该范围的上下文（长度为 i+1 的上下文），接下来是一个尚未知长度的上下文，最后给出一个真值。P 是一元谓词的类型，被提升到上下文变换器的级别，具体如下。与使用变量来遍历对象以形成类型为 e 的表达式不同，提升的谓词使用一个变量来遍历输入上下文的大小，以形成表示该上下文的变换器的表达式。

“一个男人”的 ITL 翻译的类型为

({0,…,i}→[e] i+1→[e] j→t)→[e] i→[e] j→t.

在 P|c|(c∧x)c′中，P 变量标记了 VP 解释的位置；|c|表示输入上下文的长度，它获取了值 i，即当上下文扩展时下一个可用位置的位置。这个位置由表示一个人的对象 x 填充。注意，c∧x [|c|]=c∧x [i]=x，所以索引 i 用于从上下文中选择出那个人。

要看到动态高阶系统可以在 ITL 中表示，只需展示如何定义适当的动态操作即可。假设 ϕ 和 ψ 具有上下文转换的类型，即类型 [e]→[e]→t（使用 [e] 表示任意上下文），并且 c、c′、c′′具有类型 [e]。然后我们可以如下定义动态存在量词、动态否定和动态组合：

E∼ϕϕ; ψ:=λcc′⋅∃x(c∧x=c′):=λcc′⋅(c=c′∧¬∃c′′ϕcc′′):=λcc′⋅∃c′′(ϕcc′′∧ψcc′)

动态蕴涵 ⇒ 按照通常的方式通过 ∼(ϕ; ∼ψ)来定义。

ITL 和 Muskens 风格的组合 DRT 并不相互排斥；例如，参见 Bittner 2014。我们将通过指出，将蒙塔戈维安组合性和动态语义集成的系统范围远未完全绘制，来结束本节。最近一系列整合基于延续和动态语义的贡献正在探索整合和推广它们的新方法；参见 de Groote 2006，Bumford 和 Barker 2013，Charlow 2014，Bumford 2015 和 Martin 2016。

## 5. 结论

希望以上内容能让读者对动态语义作为一种富有成果和灵活的意义和信息处理方法有所了解。动态语义提供了一套灵活的工具，并且有一系列“杀手级应用”，例如对驴子句的组合处理，对先行链接的解释，对预设投射的解释，对认知更新和不同类型（非问题）更新之间的细微区别的解释。动态语义是形式语义学的一个非常活跃的子领域，动态方法正在以越来越快的速度扩展到跨语言现象的范围。


## Bibliography

* AnderBois, Scott, Adrian Brasoveanu, and Robert Henderson, 2015, “At-issue Proposals and Appositive Impositions in Discourse”, *Journal of Semantics*, 32: 93–138. doi:10.1093/jos/fft014
* Aloni, Maria, 1997, “Quantification in Dynamic Semantics”, in *Proceedings of the Eleventh Amsterdam Colloquium*, P. Dekker (ed.), 73–78.
* Baltag, Alexandru and Lawrence S. Moss, 2004, “Logics for Epistemic Programs”, *Synthese*, 139(2): 165–224. doi:10.1023/B:SYNT.0000024912.56773.5e
* Baltag, Alexandru, Lawrence S. Moss, and Slawomir Solecki, 1999, “The Logic of Public Announcements, Common Knowledge, and Private Suspicions”, Technical Report SEN-R9922, CWI, Amsterdam. [[Baltag et al. 1999 available online](http://www.cs.indiana.edu/cgi-bin/techreports/TRNNN.cgi?trnum=TR534)]
* Barker, Chris, 2002, “The Dynamics of Vagueness”, *Linguistics and Philosophy*, 25(1): 1–36.
* Barker, Chris and Chung-chieh Shan, 2008, “Donkey Anaphora is In-scope Binding”, *Semantics and Pragmatics*, 1: 1–46. doi:10.3765/sp.1.1
* Beaver, David, 1997, “Presupposition”, in van Benthem and ter Meulen 1997: 939–1008.
* –––, 2001, *Presupposition and Assertion in Dynamic Semantics*, Stanford: CSLI Publications.
* Benthem, Johan van, 1989, “Semantic Parallels in Natural Language and Computation”, in *Logic Colloquium, Granada, 1987*, Heinz-Dieter Ebbinghaus et al. (eds.), Amsterdam: Elsevier, 331–375.
* –––, 1996, *Exploring Logical Dynamics*, Stanford: CSLI & Folli.
* Benthem, Johan van and Alice ter Meulen (eds.), 1997, *Handbook of Logic and Language*, Amsterdam: Elsevier.
* Benthem, Johan van, Jan van Eijck, and Barteld Kooi, 2006, “Logics of Communication and Change”, *Information and Computation*, 204(11): 1620–1662. doi:10.1016/j.ic.2006.04.006
* van den Berg, Martin H., 1996, *The Internal Structure of Discourse*, Ph.D. Thesis, ILLC Dissertation Series 1996–3, Amsterdam: ILLC Publications.
* Bittner, Maria, 2014, *Temporality: Universals and Variation*, Hoboken, NJ: Wiley-Blackwell.
* Brasoveanu, Adrian, 2007, *Structured Nominal and Modal reference*, Ph.D. Thesis, Rutgers University.
* –––, 2008, “Donkey Pluralities: Plural Information States Versus Non-Atomic Individuals”, *Linguistics and Philosophy*, 31 (2): 129–209. doi:10.1007/s10988-008-9035-0
* –––, 2013, “The Grammar of Quantification and the Fine Structure of Interpretation Contexts”, *Synthese*, 190(15): 3001–3051. doi:10.1007/s11229-012-0118-7
* Bumford, Dylan, 2015, “Incremental Quantification and the Dynamics of Pair-list Phenomena”, *Semantics and Pragmatics*, 8(9): 1–70. doi:10.3765/sp.8.9
* Bumford, Dylan and Chris Barker, 2013, “Association with Distributivity and the Problem of Multiple Antecedents for Singular Different”, in *Linguistics and Philosophy*, 36(5): 355–369. doi:10.1007/s10988-013-9139-z
* Charlow, Simon, 2014, *On the Semantics of Exceptional Scope*, Ph.D. Thesis, New York University.
* Chierchia, Gennaro, 1992, “Anaphora and Dynamic Binding”, *Linguistics and Philosophy*, 15(2): 111–183. [[Chierchia 1992 available online](http://scholar.harvard.edu/chierchia/publications/anaphora-and-dynamic-binding)]
* –––, 1995, *Dynamics of Meaning: Anaphora, Presupposition, and the Theory of Grammar*, Chicago: University of Chicago Press.
* Dekker, Paul Jacques Edgar, 1993, *Transsentential Meditations, ups and downs in dynamic semantics*, Ph.D. Thesis, University of Amsterdam, ILLC. [[Dekker 1993 available online](http://hdl.handle.net/11245/1.392554)]
* Ditmarsch, Hans van, Wiebe van der Hoek, and Barteld Kooi, 2006, *Dynamic Epistemic Logic* (Synthese Library: Volume 337), Dordrecht: Springer.
* Eijck, Jan van, 1994, “Presupposition Failure—a Comedy of Errors”, *Formal Aspects of Computing*, 6(supplement 1): 766–787. doi:10.1007/BF01213602
* –––, 1997, “Typed Logics with States”, *Logic Journal of the IGPL*, 5(5): 623–645. doi:10.1093/jigpal/5.5.623
* –––, 2000, “On the Proper Treatment of Context in NL”, in *Computational Linguistics in the Netherlands 1999; Selected Papers from the Tenth CLIN Meeting*, Paola Monachesi (ed.), Utrecht Institute of Linguistics OTS, 41–51.
* Eijck, Jan van and Fer-Jan de Vries, 1992, “Dynamic Interpretation and Hoare Deduction”, *Journal of Logic, Language, and Information*, (1)1: 1–44. doi:10.1007/BF00203385
* Eijck, Jan van and Hans Kamp, 1997, “Representing Discourse in Context”, in van Benthem and ter Meulen 1997: 179–237.
* Elbourne, Paul, 2001, “E-Type Anaphora as NP-Deletion”, *Natural Language Semantics*, 9(3): 241–288. doi:10.1023/A:1014290323028
* –––, 2005, *Situations and Individuals*, Cambridge, MA: MIT Press.
* Evans, Gareth, 1977, “Pronouns, Quantifiers and Relative Clauses (I)”, *Canadian Journal of Philosophy*, 7(3): 467–536.
* –––, 1980, “Pronouns”, *Linguistic Inquiry*, 11(2): 337–362.
* Fox, Danny, 2008, “Two Short Notes on Schlenker’s theory of Presupposition Projection”, *Theoretical Linguistics*, 34(3): 237–252. doi:10.1515/THLI.2008.016
* Geach, Peter Thomas, 1962 [1980], *Reference and Generality: An Examination of Some Medieval and Modern Theories*, Ithaca, NY: Cornell University Press. Third revised edition: 1980.
* George, Benjamin Ross, 2008, *Presupposition Repairs: a Static, Trivalent Approach to Predicting Projection*, M.A. Thesis, UCLA.
* Gerbrandy, Jelle, 1999, “Dynamic Epistemic Logic”, in *Logic, Language and Computation, Vol. 2*, Lawrence S. Moss, Jonathan Ginzburg, and Maarten de Rijke (eds.), Stanford: CSLI Publications.
* Groenendijk, Jeroen and Martin Stokhof, 1990, “Dynamic Montague Grammar”, in *Papers from the Second Symposium on Logic and Language*, L. Kalman and L. Polos (eds.), Budapest: Akademiai Kiadoo, 3–48.
* –––, 1991a, “Dynamic Predicate logic”, *Linguistics and Philosophy*, 14(1): 39–100. doi:10.1007/BF00628304
* –––, 1991b, “Two Theories of Dynamic Semantics”, in *JELIA ‘90, European Workshop on Logics in AI* (Lecture Notes in Computer Science: Volume 478), Jan van Eijck (ed.), Berlin: Springer, 55–64. doi:10.1007/BFb0018433
* Groenendijk, Jeroen, Martin Stokhof, and Frank Veltman, 1996, “Coreference and Modality”, in *Handbook of Contemporary Semantic Theory*, Shalom Lappin (ed.), Oxford: Blackwell, 179–213.
* Groeneveld, Willem, 1995, *Logical Investigations into Dynamic Semantics*, Ph.D. Thesis, University of Amsterdam.
* de Groote, Philippe, 2006, “Towards a Montagovian Account of Dynamics”, in *Proceedings of Semantics and Linguistic Theory (SALT) 16*, Masayuki Gibson and Jonathan Howell (eds.), 1–16. doi:10.3765/salt.v16i0.2952
* Heim, Irene, 1983a, “File Change Semantics and the Familiarity Theory of Definiteness”, in *Meaning, Use and Interpretation of Language*, Rainer Bäuerle, Christoph Schwarze, and Arnim von Stechow (eds.), Berlin: De Gruyter, 164–189.
* –––, 1983b, “On the Projection Problem for Presuppositions”, *Proceedings of the Second West Coast Conference on Formal Linguistics*, Michael Barlow, Dan P. Flickinger and MIchael T. Wescoat (eds.), Stanford, CA: Stanford University Department of Lingustics, 114–126.
* –––, 1990, “E-Type Pronouns and Donkey Anaphora”, *Linguistics and Philosophy*, 13(2): 137–138.
* Hollenberg, Marco and Kees Vermeulen, 1996, “Counting Variables in a Dynamic Setting”, *Journal of Logic and Computation*, 6(5): 725–744. doi:10.1093/logcom/6.5.725
* Kamp, Hans, 1981, “A Theory of Truth and Semantic Representation”, in *Formal Methods in the Study of Language*, Jeroen Groenendijk, Theo Janssen, and Martin Stokhof (eds.), Amsterdam: Mathematisch Centrum, 277–322.
* Kamp, Hans and Uwe Reyle, 1993, *From Discourse to Logic*, Dordrecht: Kluwer.
* Karttunen, Lauri, 1973, “Presuppositions of Compound Sentences”, *Linguistic Inquiry*, 4(2): 169–193.
* –––, 1974, “Presupposition and Linguistic Context”, *Theoretical Linguistics*, 1: 181–194.
* Kohlhase, Michael, Susanna Kuschert, and Manfred Pinkal, 1996, “A Type-Theoretic Semantics for λ-DRT”, in *Proceedings of the Tenth Amsterdam Colloquium*, Paul Dekker and Martin Stokhof (eds.), Amsterdam: ILLC Publications.
* Krahmer, Emiel, 1995, *Discourse and Presupposition*, Ph.D. Thesis, Tilburg University; revised and published under the title *Presupposition and Anaphora*, Stanford: CSLI Publications, 1998.
* Krahmer, Emiel and Reinhard Muskens, 1996, “Negation and Disjunction in Discourse Representation Theory” *Journal of Semantics*, 12: 357–376. doi: 10.1093/jos/12.4.357
* Krifka, Manfred, 1996, “Parametrized Sum Individuals for Plural Reference and Partitive Quantification” *Linguistics and Philosophy*, 19: 555–598. [[Krifka 1996 available online (pdf)](http://amor.cms.hu-berlin.de/~h2816i3x/Publications/Krifka%201996%20Plural%20Anaphora.PDF)]
* Kuschert, Susanna, 2000, *Dynamic Meaning and Accommodation*, Ph.D. Thesis, Universität des Saarlandes.
* Martin, Scott, 2016, “Supplemental Update”, *Semantics and Pragmatics*, 9(5). doi:10.3765/sp.9.5
* Milner, Robin, 1978, “A Theory of Type Polymorphism in Programming”, *Journal of Computer and System Sciences*, 17: 348–375.
* Montague, Richard, 1973, “The Proper Treatment of Quantification in Ordinary English”, in *Approaches to Natural Language*, Jaakko Hintikka, Julius Moravcsik, and Patrick Suppes (eds.), Dordrecht: Reidel, 221–242.
* –––, 1974a, “English as a Formal Language”, in Montague 1974c: 188–221.
* –––, 1974b, “Universal Grammar”, in Montague 1974c: 222–246.
* –––, 1974c, *Formal Philosophy; Selected Papers of Richard Montague*, R.H. Thomason (ed.), New Haven and London: Yale University Press.
* Murray, Sarah E., 2014, “Varieties of Update”, *Semantics and Pragmatics*, 7: 1–53. doi:10.3765/sp.7.2
* Muskens, Reinhard, 1991, “Anaphora and the Logic of Change”, in *JELIA ‘90, European Workshop on Logics in AI* (Lecture Notes in Computer Science: Volume 478), Jan van Eijck (ed.), Berlin and New York, 414–430. doi:10.1007/BFb0018456
* –––, 1994, “A Compositional Discourse Representation Theory”, in *Proceedings 9th Amsterdam Colloquium*, Paul Dekker and Martin Stokhof (eds.), Amsterdam: ILLC Publications, 467–486.
* –––, 1995, “Tense and the Logic of Change”, in *Lexical Knowledge in the Organization of Language*, U. Egli et al. (ed.), Amsterdam: John Benjamins, 147–183.
* –––, 1996, “Combining Montague Semantics and Discourse Representation”, *Linguistics and Philosophy*, 19: 143–186.
* Muskens, Reinhard, Johan van Benthem, and Albert Visser, 1997, “Dynamics”, in van Benthem and ter Meulen 1997: 587–648.
* Nouwen, Rick, 2003, “Complement Anaphora and Interpretation”, *Journal of Semantics*, 20: 73–113.
* –––, 2007, “On Dependent Pronouns and Dynamic Semantics”, *Journal of Philosophical Logic*, 36(2): 123–154.
* –––, forthcoming, “E-type Pronouns: Congressmen, Sheep and Paychecks”, in L. Matthewson, C. Meier, H. Rullmann, and T.E. Zimmerman (eds.), *The Blackwell Companion to Semantics*, Oxford: Wiley.
* Plaza, Jan A., 1989, “Logics of Public Communications”, in *Proceedings of the 4th International Symposium on Methodologies for Intelligent Systems*, M.L. Emrich, M.S. Pfeifer, M. Hadzikadic, and Z.W. Ras (eds.), Amsterdam: North Holland, 201–216.
* Putnam, Hilary, 1975, “The Meaning of ‘Meaning’”, in *Philosophical Papers* (Volume 2), Cambridge: Cambridge University Press.
* Quine, Willard van Orman, 1960, *Word and Object*, Cambridge, MA: MIT Press.
* Roberts, Craige, 1987, *Modal Subordination, Anaphora and Distributivity*, Ph.D. Thesis, University of Massachusetts/Amherst; New York: Garland, 1990.
* –––, 1989, “Modal Subordination and Pronominal Anaphora in Discourse”, *Linguistics and Philosophy*, 12: 683–721.
* Rothschild, Daniel, 2011, “Explaining Presupposition Projection with Dynamic Semantics”, *Semantics and Pragmatics*, 4(3): 1“43.
* Sandt, Rob A. van der, 1992, “Presupposition Projection as Anaphora Resolution”, *Journal of Semantics* (Special Issue: Presupposition, Part 2), 9: 333–377. doi:10.1093/jos/9.4.333
* Schlenker, Philippe, 2007, “Anti-dynamics: Presupposition Projection without Dynamic Semantics”, *Journal of Logic, Language and Information*, 16(3): 325–356.
* –––, 2008, “Be Articulate: A Pragmatic Theory of Presupposition Projection”, *Theoretical Linguistics*, 34(3): 157–212.
* –––, 2009, “Local Contexts”, *Semantics and Pragmatics*, 2(3): 1–78.
* Seuren, Pieter, 1985, *Discourse Semantics*, Oxford: Blackwell.
* Soames, Scott, 1989, “Presuppositions”, in Dov M. Gabbay & Franz Guenther (eds.), *Handbook of Philosophical Logic*, vol. IV, 553–616. Dordrecht. doi:10.1007/978-94-009-1171-0_9
* Stalnaker, Robert C., 1972, “Pragmatics”, in *Semantics of Natural Language*, Donald Davidson and Gilbert Harman (eds.), Dordrecht: Reidel, 380–397. doi:10.1007/978-94-010-2557-7_11
* –––, 1973, “Presuppositions”, *Journal of Philosophical Logic*, 2: 447–457.
* –––, 1974, “Pragmatic Presuppositions”, in *Semantics and Philosophy*, Milton K. Munitz and Peter K. Unger (eds.), New York: New York University Press, 197–213.
* Veltman, Frank, 1991, “Defaults in Update Semantics”, in *Conditionals, Defaults and Belief Revision*, Hans Kamp (ed.), Edinburgh: Dyana Deliverable R2.5A.
* –––, 1996, “Defaults in Update Semantics”, *Journal of Philosophical Logic*, 25: 221–261.
* Vermeulen, C.F.M., 1993, “Sequence Semantics for Dynamic Predicate Logic”, *Journal of Logic, Language and Information*, 2: 217–254. doi:10.1007/BF01050788
* –––, 1994, *Explorations of the Dynamic Environment*, Ph.D. thesis, Utrecht University.
* –––, 1995, “Merging without Mystery, Variables in Dynamic Semantics”, *Journal of Philosophical Logic*, 24: 405–450.
* Werth, Paul, 2000, *Text Worlds: Representing Conceptual Space in Discourse*, London: Pearson Education/Longman.
* Zeevat, Hank, 1989, “A Compositional Approach to Discourse Representation Theory”, *Linguistics and Philosophy*, 12(1): 95–131. doi:10.1007/BF00627399

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=dynamic-semantics). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/dynamic-semantics/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=dynamic-semantics&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](http://philpapers.org/sep/dynamic-semantics/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

* Chemla, Emmanuel, 2008, “[Similarity: Towards a Unified Account of Scalar Implicatures, Free Choice Permission and Presupposition Projection](http://semanticsarchive.net/Archive/WI1ZTU3N/Chemla-SIandPres.html),” unpublished manuscript, Ecole Normale Superieur.
* Parsons, Terence, 1978, “[Pronouns as Paraphrases](http://www.philosophy.ucla.edu/people/faculty/tparsons/Pronouns%20as%20Paraphrases/Pronouns%20as%20Paraphrases.pdf),”, unpublished manuscript, University of Massachusetts/Amherst.

## Related Entries

[anaphora](https://plato.stanford.edu/entries/anaphora/) | [assertion](https://plato.stanford.edu/entries/assertion/) | [common knowledge](https://plato.stanford.edu/entries/common-knowledge/) | [compositionality](https://plato.stanford.edu/entries/compositionality/) | [conditionals](https://plato.stanford.edu/entries/conditionals/) | [contextualism, epistemic](https://plato.stanford.edu/entries/contextualism-epistemology/) | [discourse representation theory](https://plato.stanford.edu/entries/discourse-representation-theory/) | [externalism about the mind](https://plato.stanford.edu/entries/content-externalism/) | [implicature](https://plato.stanford.edu/entries/implicature/) | [indexicals](https://plato.stanford.edu/entries/indexicals/) | [information: semantic conceptions of](https://plato.stanford.edu/entries/information-semantic/) | [logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [logic: conditionals](https://plato.stanford.edu/entries/logic-conditionals/) | [logic: epistemic](https://plato.stanford.edu/entries/logic-epistemic/) | [logic: of belief revision](https://plato.stanford.edu/entries/logic-belief-revision/) | [logic: second-order and higher-order](https://plato.stanford.edu/entries/logic-higher-order/) | [logical form](https://plato.stanford.edu/entries/logical-form/) | [mental content: narrow](https://plato.stanford.edu/entries/content-narrow/) | [mind: computational theory of](https://plato.stanford.edu/entries/computational-mind/) | [model theory: first-order](https://plato.stanford.edu/entries/modeltheory-fo/) | [pragmatics](https://plato.stanford.edu/entries/pragmatics/) | [reference](https://plato.stanford.edu/entries/reference/) | [scientific realism](https://plato.stanford.edu/entries/scientific-realism/) | [speech acts](https://plato.stanford.edu/entries/speech-acts/) | [Tarski, Alfred: truth definitions](https://plato.stanford.edu/entries/tarski-truth/) | [type theory: Church’s type theory](https://plato.stanford.edu/entries/type-theory-church/)

[Copyright © 2016](https://plato.stanford.edu/info.html#c) by  
[Rick Nouwen](http://ricknouwen.org/) <[*rnouwen@gmail.com*](mailto:rnouwen%40gmail%2ecom)>  
Adrian Brasoveanu <[*abrsvn@gmail.com*](mailto:abrsvn%40gmail%2ecom)>  
[Jan van Eijck](https://staff.fnwi.uva.nl/d.j.n.vaneijck2/)  
[Albert Visser](http://www.phil.uu.nl/profiel/albert.visser/)

