# 命题逻辑 propositional (Curtis Franks)

*首次发表于2023年5月18日*

命题逻辑学是基于命题连接词这一特定类别的逻辑运算符在确定这些命题的真实性或可断言性条件方面所起的作用，研究句子的含义和推理关系的学科。早在亚里士多德时代，人们就观察到命题连接词具有逻辑意义，并且在许多世纪里，对它们的一些性质进行了零散的观察。但是，命题逻辑学本身直到 19 世纪才出现，人们才意识到研究命题连接词在与其他运算符隔离的情况下的行为的价值。

例如，著名的经典三段论的一个变种，其中 A 是句子“所有人都是有限的，而苏格拉底是一个人”，B 是句子“苏格拉底是有限的”，可以引发关于 A 和 B 之间关系的多个问题。人们认为，B 是否逻辑上推导自 A 不应该取决于“有限”或“人”等词的含义。但是，人们可以合理地提出以下问题之一：

> B 是否仅仅由于“和”、“是”、“是”、“所有”和“一个”这些词的含义而推导自 A？

 和

> B 是否仅仅由于“和”这个词的意义而从 A 中推导出来？

直观上，对于第一个问题的答案是“是”，对于第二个问题的答案是“否”。

这个例子表明，提出问题的方式是正确的，因为 B 无疑从 A 逻辑上推出。因此，当我们想要问一个句子是否逻辑上成立时，我们应该注意所有词语的作用，比如“和”、“是”、“都”和“一个”。然而，考虑一下，如果 C 是句子“所有人都是凡人”，D 是句子“苏格拉底是一个人”，那么 C 也是从 A 推出的，但是词语“是”、“都”、“所有”和“一个”的意义在直观验证这个事实时并没有起到任何作用。（因为 A 只是句子“C 和 D”，只需要理解“和”的意义，就可以看出如果 C 不成立，A 也不可能成立。）B 和 C 不仅都是从 A 推出的，而且它们的推导方式也不同。从 A 到 C 的推理不仅更简单或更直接，而且比推导到 B 更简单或更直接。无论以何种方式 B 从 A 推出，C 也是如此，而 C 从 A 推出的逻辑联系比 B 和 A 之间的逻辑联系更强。这突显了确定一个句子是否从另一个句子推出的重要性，以及支持这种确定的逻辑标准的重要性。

命题逻辑学就是研究这种逻辑标准的规范的学科，其中只考虑命题连接词的意义（例如上面的例子中的“和”，但不包括“是”、“都”等），以评估推理的合理性或句子的真值条件等。

命题连接词是一种语言粒子，它将句子绑定在一起以创建一个新的复合句，或者屈折一个单独的句子以创建一个新的句子。在命题连接词中，命题连接词具有特征，即当它操作的原始句子是（或表达）命题时，其应用产生的新句子也是（或表达）命题。正如人们所期望的那样，关于命题是什么的理论有很多竞争性的理论，而命题逻辑起源于这场辩论之外的科学学科。因此，确定哪些语言粒子符合命题连接词的精确划分有些模糊甚至有争议。但是，一般的启发法则是，命题连接词必须从一些原始句子中创建一个同级别的新句子。直观地说，因为“A和B”只是对A和B的内容的肯定，而“非A”只是对A的内容的否定，所以“和”和“非”作为命题连接词。另一方面，“A是必要的”不是关于A的内容的主张，而是关于句子A本身的主张。同样，“A蕴含B”是关于句子A和B的主张，它们彼此之间存在蕴含关系，而不是关于A和B本身所主张的事物的主张。因此，必要性限定词和蕴含关系通常不被视为命题连接词，而是被视为情态操作符。在“如果A，则B”等表达中，条件运算符尚未达成共识：在某些分析中，它被视为命题连接词，但在其他分析中则不是。

在呈现命题逻辑时，我们不会假设任何特定的命题理论。正如我们将看到的，只有当没有特定的命题概念存在时，命题逻辑的发展和多样性才能得到充分的认识。唯一的规定是连接词始终作用于整个句子，而不是作用于子句项，如谓词或术语，并且它们创建的句子与它们所作用的句子在同一评估类中，而不是关于该类句子的高阶表达式。

---

## 1. 基本框架

命题逻辑的形式语言由“原子”命题变量，...，以及命题连接词，...，...，...等组成。表达式的下标用于区分它们彼此之间的差异；我们使用自然数表示词汇表可数的典型约定。命题连接词的上标表示它们的“arity”，即它们操作的命题数量，以创建一个新的命题。命题逻辑的公式通过递归定义：

1. 原子命题变量是命题公式。
2. 如果是一个命题连接词，而 A，B，C，...是一个长度为 m 的序列，可能是原子的，但不一定是不同的，可能是不同的，但不一定是不同的，那么将 A，B，C，...应用于的结果是一个命题公式。

将 A，B，C，...应用于的结果通常用函数表示法写成：(A, B, C, ...)。命题公式的例子有：

这个命题逻辑公式的递归定义为命题变量的使用提供了“原子”的标签的理由：每个公式都是通过有限次应用命题联结词逐步构建起来的。将联结词视为“命题函数”，它们接受命题（用公式表示）作为输入，并返回命题作为输出，这样可以有所帮助。命题的空间是由这些函数生成的原子公式的自由代数，并且命题的规范是通过标准的“函数组合”表示法给出的。然而，这种术语并不常见，因为“命题函数”这个表达式在高度通用的情况下有着完全不同的用法（参见 Bertrand Russell 的条目）。

习惯上用特殊字符来表示所研究的特定联结词，通常使用中缀表示法来表示二元联结词，并且只在存在歧义时才显示括号。通常还会研究与命题公式的性质有关的问题，这些问题并不基于原子的出现，此时在表达式中会出现 A、B、C 等公式变量代替命题字母。因此，如果将命题重新标记为，将命题重新标记为，将命题重新标记为，则在上述第三个列出的公式的位置上将写为。

## 2. 经典解释

命题公式的逻辑分析从将某些含义与连接词关联开始，有几种方法可以做到这一点。因为研究命题逻辑的最初动机是观察到自然语言中的一些词汇经常表现出命题连接词的行为，自然的第一步是尝试指定形式推理规则或精确的可断言条件，以捕捉或近似这些自然语言谓词在非正式推理中所起的作用。最早的两个规范是基于真值函数和公理演绎系统。在依次考虑了这些规范之后，我们将比较根岑的演算给出的更复杂的规范。

### 2.1 真值功能

如果是一个真值集合，将 n 元组的真值映射到真值的函数被称为 n 元真值函数。在函数空间中的值的数量被称为函数空间的价值。在二值情况下，真值被表示为和，有经典的真理理论。观察到在这个经典函数空间中有两个 0 元真值函数，根据命题连接词的指数约定，我们可以表示为和，但通常表示为和，定义为和，以及四个一元真值函数，定义为

人们可以看到，对其输入不执行任何操作，本质上与相同。同样，是一个冒牌货：装扮成一元函数。人们可以快速检查 n 元真值函数的数量是——每个可能的 n 元输入值上有 2 个可能的输出值，并且在每个阶段，一些真值函数是来自较低元数的冒牌货。特别感兴趣的是十六个二元真值函数，可以通过指定它们在 4 个可能的输入值上的范围来完全确定：

| input |  |  |  |  |
| ------- | -- | -- | -- | -- |
|       |  |  |  |  |
|       |  |  |  |  |
|       |  |  |  |  |
|       |  |  |  |  |
|       |  |  |  |  |
|       |  |  |  |  |
|       |  |  |  |  |
|       |  |  |  |  |
|       |  |  |  |  |
|       |  |  |  |  |
|       |  |  |  |  |
|       |  |  |  |  |
|       |  |  |  |  |
|       |  |  |  |  |
|       |  |  |  |  |
|       |  |  |  |  |

人们立即认出冒牌货，对第一个输入值进行操作，对第二个输入值进行操作，对第二个输入值进行操作，对第一个值进行操作，以及，留下了十个基本上是新的二元真值函数。

命题逻辑的真值分析通过将 n 元真值函数与 n 元命题联结词相关联来进行。迄今为止考虑的经典情况，其中真值空间是双值的，允许进行一种惊人简单的分析。首先观察到函数，，和近似于自然语言粒子“非”，“或”和“与”的某些用法的真值条件（粒子“或”的另一种用法可以认为是由近似的）。因此，如果我们将这些函数与先前标记为，和的三个联结词相关联，我们可以根据公式的命题结构中指示的函数组合，计算给定对命题字母 A、B 和 C 的真值的不同可能分配时的复杂公式的真值。可以检查到，当 A、B 和 C 的每个都被赋予 T 时，该公式取值 F，否则取值 T。在这种解释下，可以定义

1. 如果在对其原子命题变量的所有可能值分配上，A 作为 T 进行评估，则 A 是经典命题有效性；
2. 如果在对其原子命题变量的至少一种可能值分配上，A 作为 T 进行评估（否则在经典情况下是不可满足的）；
3. 如果在 A 和 B 中出现的原子在 B 上的所有值分配中，B 作为 T 进行评估时 A 不作为 F 进行评估，则 A 是 B 的经典命题推论；
4. 如果 A 和 B 在原子值的赋值上完全相同地评估为 T，则 A 是 B 的经典命题等价物。

通过这种方式，命题逻辑的语言限制在连接词、和与布尔代数的补集、并集和交集的公式相对应。熟悉的布尔定律的

* 交换：
  如果 A 和 B 是等价的，并且 A 作为的一个子公式出现，则将中的 A 替换为 B 的结果是一个等价于的公式。
* 替换：
  如果 A 和是任意的公式，那么将中的命题变量的每个出现替换为 A 的结果是公式和具有以下属性：如果是有效的，则是有效的；如果是不可满足的，则是不可满足的；如果是的推论，则是的推论；如果和是等价的，则和是等价的。
* 补充：
  是命题逻辑中的经典有效性（称为“排中律”（lem））。
* 双重补充：
  等同于 A。
* 交换律：
  等同于 ，并且等同于 。
* 结合律：
  等价于 ，且等价于 。
* 分配律：
  等价于并且
  等价于。
* 德摩根等价式：
  等价于并且
  等价于。

因此适用于这种“布尔命题公式”的语言。

#### 2.1.1 正常形式

考虑任何其他命题连接词，用 表示，任意阶数，假设它也与一个阶数为 3 的真值函数相关联。与之前一样，让我们通过指示其在每个可能的输入值上的输出来指定这个真值函数。

| input |  |
| ------- | -- |
| **T**,**T**,**T**    | **T** |
| **T**,**T**,**F**    | **T** |
| **T**,**F**,**T**    | **F** |
| **T**,**F**,**F**    | **F** |
| **F**,**T**,**T**    | **F** |
| **F**,**T**,**F**    | **T** |
| **F**,**F**,**T**    | **F** |
| **F**,**F**,**F**    | **F** |

有一个简单的算法可以构造一个与 (A, B, C) 等价的布尔公式：对于定义表的每一行，其中输出值为 T，构造一个由被赋值为 T 的每个命题变量和被赋值为 F 的每个命题变量的否定构成的合取式：在我们的例子中，来自第一行，来自第二行和来自第三行。然后将这些合取式进行析取。在我们的例子中，最终的公式是

显然，这个公式在所有(A, B, C)所在的行上评估为 T，并在所有其他行上评估为 false。现在假设给定一个命题公式，其中包含任意组合的连接词，并且在经典解释下，这些连接词与适当阶数的真值功能连接词相关联。这个公式将等价于某个简单公式，该公式只有一个连接词，其阶数等于原始公式中命题变量的总数。根据刚才重述的构造，这个简单公式再次等价于一个特定形式的布尔公式。因此，我们已经验证了析取范式（DNF）定理：

定理 1. 在经典解释下，命题逻辑的任何公式都等价于命题变量和否定命题变量的合取的析取。

类似的推理可以用来验证等价于“合取范式公式”，即命题变量和否定命题变量的析取的合取。

#### 2.1.2 真值功能完备性

DNF 定理的一个推论是，布尔逻辑——命题逻辑的片段，只有连接词 , , 和 ，从某种意义上说与具有无限多个连接词和无限多个连接词性的完全经典命题逻辑一样具有表达能力。这个事实通常被表达为，经典解释上的连接词集合  是“真值功能完备的”：其他连接词在上述使用的意义上并不完全是冒牌货，但它们每个都可以被看作是布尔连接词的某种组合的缩写。代数上，人们可以认为无限函数空间完全由布尔函数所覆盖。

真值功能完备性的概念可以通过简单的观察进一步推进，即  是  的经典等价物，因此它也可以被视为一种缩写。因此，  这对是真值功能完备的。同样，  是  的缩写：  是真值功能完备的。1913 年，亨利·谢弗重新发现了查尔斯·桑德斯·皮尔斯的一项未发表的观察，即函数  和  分别逼近了自然语言表达式“不是两者都……和……”和“既不……也不……”的真值条件，每个函数都独立地覆盖了双值真值函数的整个空间。

#### 2.1.3 在开关电路中的实现

然而，比将连接词的数量减少到最小可能的真值完备集更具生产力的是选择能够最清晰地揭示演绎推理结构的连接词。我们已经指出，布尔连接词通过紧密逼近普通语言中的“非”、“与”和“或”的真值条件，提供了一种评估有内容的人类推理的形式机制。布尔选择的另一个优点是它在继电器和开关电路描述中的自然实现。1940 年，克劳德·香农描述了一种命题逻辑的解释，其中句子字母代表电路：原子电路是节点，通过一个门控路径连接，当闭合时允许电流通过，当打开时不允许电流通过。表示电路 A 和 B 的串联连接，表示它们的并联连接，表示一个电路，如果 A 打开则闭合，如果 A 关闭则打开（这是一个理论假设：仅凭解释本身无法预先确定如何构建这样的电路）。让值 0 表示电路闭合，值 1 表示电路打开，可以看出命题逻辑的公式表示了构建电路的所有可能方式，它们的经典真值分析确定了所表示电路是否打开：打开的电路评估为 T，闭合的电路评估为 F。

由于经典命题逻辑的简洁性，香农的论文极大地促进了电路设计。立即可以看出，任何电路都等同于（即在相同条件下打开和关闭）由析取范式公式描述的电路。因此，可以给出复杂电路 A、B 和 C，将 A 和 B 串联起来（），然后将其与 C 并联（），最后希望得到一个在此电路打开时关闭的电路：。这个公式描述了你所追求的电路关闭的条件，但它并没有指定一种构建它的方法。析取范式定理告诉我们，存在一个具有相同闭合条件的“正常”电路。由于这种正常电路中的所有开关都在原子级别上应用，因此有一种已知的构建方法。此外，还有系统化的方法可以将析取范式公式简化为具有最少原子出现次数的等价公式（Quine 1955 提供了一种最初由 Samson 和 Mills 1954 发现的算法）。结合香农的结果，这不仅表明符号操作提供了如何构建具有所需闭合条件的电路的指南，而且可以用于设计最简单和资源需求最少的电路。

#### 2.1.4 材料条件

古典解释的另一个重要特点是二元真值函数的特殊作用，除非给定输入 T，F，否则始终返回值 T。这个真值函数经常被争议地描述为给出陈述语气条件连接词“如果...，那么...”的真值条件，甚至错误地被描述为“蕴含”的关系。强调将真值功能归因于蕴含关系的错误是很重要的。说一个命题蕴含另一个命题是说在第一个命题为真的任何条件下，第二个命题也为真。暗示这种关系是真值功能的是在暗示仅仅知道 A 和 B 是否为真就足以确定 A 是否蕴含 B。这种暗示是站不住脚的，因为 A 和 B 的真假对其他条件没有任何指示。B 可能为真，但即使如此，也不被 A 蕴含，因为在其他情况下，A 可能为真而 B 为假。正如上面强调的那样，蕴含关系通常不被认为是一个命题连接词，而是两个命题之间可能存在的关系。

更有趣的是捕捉陈述语气条件表达式的真值条件的论点。给定这种真值功能解释的二元连接词被称为“物质条件”，通常用符号表示。可以很容易地验证等价于布尔表达式。关于普通语言条件表达式是否是真值功能的可行性有大量的文献。这个论点本身显然是古老的，归功于梅拉加的菲洛和克里西普斯在命题逻辑的早期系统化中引用。它在现代背景下得到了查尔斯·皮尔斯、H·P·格赖斯和弗兰克·杰克逊的支持。但它的反对者很多（参见关于陈述条件的条目）。

特别有趣的是，最初由弗兰克·拉姆齐提出的建议，即陈述语气中形式为“如果 A，那么 B”的表达最好以条件概率的方式理解为“在给定 A 的情况下，B 的概率几乎肯定是()”。1976 年，大卫·刘易斯证明了这种理解下的条件表达式不仅不是真值功能的，而且实际上也不是命题。多萝西·埃奇顿（1995: 280）为刘易斯的结果提供了以下简单的论证：假设测量了某个（不一定是真值功能的）命题的概率。如果 A 蕴含 B，那么当 A 为假时，B 为真。因此，当 A 不可能时，B 不可能。但是，A 的不可能性当然不会阻止 B 的概率非常低。另一方面，如果 A 不蕴含 B，那么当 A 为真时，B 可能为假，对 B 的确定性仍然存在疑问。但是对 B 的确定足以使 A 成立。由此可知，既不蕴含也不不蕴含，这种情况只能发生在没有任何真值条件的情况下，即不测量任何命题的概率。

这个例子再次凸显了确定哪些联结词可以在命题逻辑的范围内进行分析的问题的微妙性。在某些解释（包括真值功能解释）中，陈述语气的条件句可以进行分析，但在拉姆齐的解释中则不行。1982 年，W. V. O.奎因通过表达谨慎之意（他将之归因于菲利普·赖内兰德），不要混淆条件句“如果 A，那么 B”的陈述与在条件 A 下陈述 B。他认为，后者通常是理解“如果 A，那么 B”这种表达方式的正确方式，因为在没有条件 A 的情况下，它是一个非陈述句，根本不能理解为命题。

哥德洛布·弗雷格经常被视为物质条件的捍卫者之一，但他对这个连接词的态度是微妙的。他对命题逻辑的系统化确实包含了一个具有由...给出的真值条件的连接词，但弗雷格拒绝了这个连接词表达自然语言中的陈述条件的想法。他写道：“在‘如果’这个词中隐含的因果关系...并没有被我们的符号所表达”（1972: 116）。关于弗雷格是否认为物质条件甚至无法捕捉到普通语言中陈述条件的真值条件，还是他只是指物质条件虽然捕捉到了这些条件的真值条件，但无法捕捉到其他非真值条件的意义方面，这是一个持续争论的问题。清楚的是，无论他在普通条件陈述和物质条件之间检测到了什么不匹配，都没有阻止他将后者置于他的逻辑研究的中心。

鉴于真值功能完备的连接词集的多样性，为什么弗雷格或其他人会选择将物质条件作为古典逻辑的原始连接词？弗雷格认识到选择物质条件作为原始连接词的价值不在于它对普通语言表达的近似，而在于它在逻辑理论内部的作用。让我们用  表示在真理的古典理论中公式 B 是有效的。推广这个推理符号，我们还可以用  表示 B 是 A 的古典命题推论，其中  是一组命题公式，  表示 B 是  中所有公式的古典命题推论。一个基本事实，可以通过真值表进行验证，即  当且仅当 。在  为空的情况下，  当且仅当 。我们之前强调过，物质条件不能被理解为逻辑蕴涵的表达。另一方面，古典逻辑蕴涵的关系实际上是一种（特别严格的）逻辑蕴涵关系，物质条件与之直接相关：  不表示 A 和 B 之间的任何蕴涵关系，但  是古典命题有效性的主张，是这种蕴涵的表达。

#### 2.1.5 可决定性

如果存在一种可靠的方法来确定一个命题公式是否可满足，那么逻辑学就被称为可判定的。经典命题逻辑很容易被看出是可判定的：给定一个任意的公式，只需在上述表格方法中枚举可能的真值序列，这些真值序列可以作为输入输入到其原子命题变量中，并计算每个输入上的函数组合。因为公式是有限的符号串，每个公式只包含有限个原子命题，假设为 n 个，所以真值表将恰好有 2^n 行。完成真值表是一个有限确定的任务，在此任务结束时，人们将会发现这个公式是否可满足。

#### 2.1.6 NP-完全性

确定经典命题逻辑公式是否可满足的问题被称为 sat 问题。尽管存在用于 sat 问题的决策过程，但已知的用于以预定方式对每个可能的公式进行此确定的过程在严格意义上是繁琐和低效的：尚未发现一种在计算步骤数量多项式地受限于测试的公式大小之后返回答案的过程，即 sat 问题是否属于复杂性类 P，即可以通过确定性过程在多项式时间内解决的问题。已知 sat 问题属于复杂性类 NP-那些可以通过非确定性过程在多项式时间内回答的问题。1971 年，Steven Cook 证明了 sat 问题是“NP 完全”的：NP 类中的任何问题都可以在多项式时间内归约为 sat 问题。Cook 定理的一个推论是，如果 sat 问题属于 P 类，则 NP = P。普遍认为，NP 是一个比 P 类问题更大的类，并且因此不存在解决 sat 问题的“高效”过程，即多项式时间可计算性的意义上。自 Cook 的发现以来的几十年中，已经证明了许多问题是 NP 完全的。但是，在 NP 完全性的发现背景下，经典命题逻辑在其中占据了重要地位。它的明晰性特别适合构建该概念的形成。

#### 2.1.7 紧致性

关于经典命题逻辑的一个基本事实是它是“紧凑的”。为了激发紧凑性的概念，考虑公式集合 。是“同时可满足”的每个真子集，即对于任何这样的真子集，存在一种真值赋值方式，使得该子集的每个公式都为真。然而，本身不是同时可满足的：使得，和都为真会导致为假。如果另一个集合包含无限多个公式会怎么样？我们对的观察可能会培养出这样的直觉，即尽管没有一种真值赋值方式能满足中的每个公式，但是可能每个真子集都是同时可满足的。如果只知道每个有限子集都是同时可满足的，而不是每个真子集都是，会怎么样呢？因为大多数真子集都是无限的，这种可能性只会加强对可能不是同时可满足的直觉。

紧凑性定理（哥德尔，1930 年）告诉我们这种直觉是误导性的：

定理 2. 如果每个有限子集都是同时可满足的，那么也是。

注意，通过将假设从“真子集”放松到“有限子集”，当  是有限的时，紧致性定理是真实的，事实上是平凡的：  是它自己的有限子集之一。然而，当  是无限的时，放松假设会极大地增加定理的强度（用量化逻辑的语言来说，该定理涉及到一个强量化器的转换：从这样一个事实，即对于给定的  的任何有限子集，总是可以找到一个满足它的解释（对于每个有限子集可能是不同的解释），可以推断出存在一个满足每个可能的有限子集的单一解释）。

对于紧致性的一个引人注目的推论，假设 A 是无穷公式集  的经典命题推论。如果  的每个有限子集都可以同时满足，那么根据紧致性，  将可以同时满足，与我们的假设相矛盾。因此，  的某个有限子集不能同时满足——对于  的某个有限子集  ，没有一个真值赋值使得  中的每个公式都为真且 A 为假。经典命题推论总是“有限确定的”：如果  ，则对于  的某个有限子集  ，  。

### 2.2 推导

引入于 1879 年的哥特洛布·弗雷格（Gottlob Frege）的形式演绎系统提供了命题连接词含义的替代规范。这种系统的特点是一组有限的公式，称为公理，和一组有限的推理规则。弗雷格系统中的命题公理是

推理规则是

* 模态蕴涵：
* 替换：如果 B 中的变量是一个原子变量，C 是任意一个公式，那么令 B 中的每个出现的替换为 C，从 B 推导出。

证明被定义为一个有限序列的公式，每个公式要么是公理，要么是通过应用推理规则从序列中的前面条目推导出来的。定理是作为证明的最后一个条目出现的公式，我们用“cpc”来表示公式 A 的定理性。我们已经介绍了 Frege 1879 年发现的形式推导系统，但是“cpc”是用来标记任何等价系统的。Frege 的系统在两个意义上都能很好地表示经典命题逻辑：因为配对“⊢”是真值函数完备的，任何可以用任意组合的二值真值联结词表达的公式都可以转化为 Frege 系统中的公式。此外，该系统在以下意义上是完备的，即所有经典命题的重言式都是定理。下面的命题完备性定理的验证使用了 Hilbert 和 Bernays 提出的不同的“cpc”演绎系统。正如 Jean Nicod（1917）首次观察到的那样，甚至可以使用单个的“既不…也不…”联结词来呈现“cpc”，例如，使用孤立的公理和推理规则。

和推理规则

* 尼科德的推理：
* 替换：如果 B 中的变量是一个原子变量，C 是任意一个公式，那么令 B'是将 B 中的每个出现的替换为 C 的结果，并从 B 推导出 B'。

与古典逻辑的真值功能框架并行，我们还可以引入从假设中推导的概念：如果是一组公式，则以 A 为最后一项，并且每一项要么是公理，要么是的成员，要么是从先前项应用推理规则的结果的公式序列称为从的推导。然而，在为 cpc 制定这个概念时，需要注意一些细节。例如，我们不希望每个公式都可以从命题变量推导出来，但是替换规则允许从任意公式推导出任何东西。因此，在从任意假设中推导的纯公理可证性转向的过程中，替换规则仅限于适用于公理。可以很容易地证明，这个限制不会影响定理集合。在这个限制下，我们可以用来表示从集合中推导出 A 的可推导性。

#### 2.2.1 推导定理

在 1910 年，弗雷格指出，但没有证明，如果且仅当。首次记录的证明出现在赫布兰德 1930 年和塔斯基 1933 年。虽然在真值功能解释的情况下类似的观察是平凡的，但赫布兰德和塔斯基的这个结果更加复杂。一个方向很容易验证：任何的推导显然也是一个的推导。要构造一个的推导，只需将两个公式和附加到的末尾。

另一个方向被称为推导定理。它的证明使用对的长度进行归纳。

 定理 3. 当且仅当

证明. （基本步骤）如果存在一个从 推导出 的一行推导，那么可以构造一个 -推导。要看到这一点，注意只有三种类型的一行推导：

1. 在集合中
2. 是
3. 是一个公理

以下三个推导展示了在情况 1、2 和 3 中的事实：

容易检查每个推导的每一行要么是公理的成员，要么是应用演绎法的结果。（由于假设是的，中间序列符合 -的推导。）

（归纳步骤）假设只要存在一个长度为 n 或更短的 -的推导，就存在一个 -的推导。现在假设存在一个长度为行的 -的推导。可能的情况是，行的证明是基本情况中的可能之一——即是一个公理，来自集合 ，或者与 相同。在任何这些情况下，的推导将像基本情况中一样构造。在最后一行是应用演绎法的结果的新情况中，公式和出现在 的较早行中。因此，长度为 n 或更短的 -的推导和出现在 的子序列中。然后归纳假设保证了存在 -的推导和的存在。让

 和

是这样推导的例子，并考虑以下序列：

这是一个的推导。◻

因为这个演绎定理的验证仅依赖于弗雷格的前两个公理，所以它也适用于许多非经典的背景，包括重要的一类构造命题逻辑。

#### 2.2.2 基本元理论

另一个类似于真值功能框架中明显事实的类比，这次是 DNF 定理，在公理系统的元理论分析中起到了历史性的作用。希尔伯特展示了如何将每个公式 A 与一个析取范式公式和一个合取范式公式相关联，使得

特别地，应用演绎定理，A 和 是相互可推导的。

弗雷格的公理化显然依赖于配对的表达充分性，关于这一点，除非人们心中有一些关于联结词含义的解释或理论，否则无法确切确定。罗素和怀特海德在《数理逻辑原理》中，希尔伯特和阿克曼在 1928 年继续遵循弗雷格的做法，使用一小组基本联结词，并将其他联结词作为缩写。1926 年，伯奈斯质疑“主导趋势……减少基本联结词的数量以及公理的数量”，并观察到“人们可以，另一方面，明确区分各种联结词”，从而不预设诸如在公理框架本身中不存在的等价关系。这种方法允许人们探索某些等价关系不成立的公理系统的修改，并将其彼此进行比较。公理框架通常是进行这种比较研究的一种粗糙工具；伯奈斯的洞察力的精神在根岑（1934-1935）的自然推理和序列演算中得到了成熟，其中每个联结词的含义都是完全指定的，以独立于其他联结词的推理规则来描述。

最小签名的公理框架（继罗素和怀特海德之后，希尔伯特仅使用）仍然受到希尔伯特学派的深入元理论分析，包括一致性、独立性、极大性和完备性证明。为了保留发现的背景，以下重述了希尔伯特在 1917 年的讲座《数学原理》中提供的原始证明。

##### 2.2.2.1 一致性

如果对于任何命题 A，命题 A 既不是 S 的定理也不是 S 的反定理，则形式演绎系统 S 是一致的。为了证明 cpc 的一致性，希尔伯特如下推理：让命题字母取值为 1 和 0，将析取符号解释为乘法，将否定符号解释为函数。在这种解释下，每个命题都是由乘法和函数组成的 0 和 1 上的函数。希尔伯特观察到，公理被解释为每个输入都返回值 0 的函数，而推理规则保持这个性质（使得每个定理都是常数 0）。此外，任何定理的否定都是常数 1，因此不可证明。因此，如果一个命题的否定也是可证明的，那么该命题是不可证明的，因此该系统是一致的。

##### 2.2.2.2 最大性

如果一个形式演绎系统的任何适当扩展都是不一致的，则该系统是最大的。希尔伯特使用了与他的一致性论证相同的解释来证明：

定理 4. cpc 是最大的。

证明. 如上所述，一个命题只有在解释下为常数 0 时才可证明，而对于合取范式公式来说，这仅在其每个合取子式中都包含某个命题变量的否定和非否定出现时发生。现在设 A 是任意不可证明的公式。它的相关公式也必须是不可证明的，因此必须包含一个没有命题变量同时出现否定和非否定的合取子式 C。为了证明 cpc+A（cpc 加上 A 作为额外公理）是不一致的，让 B 是任意的公式，并将 D 标记为将 B 替换为 C 中出现的每个非否定的命题变量和每个否定的命题变量的结果。很容易证明

因此对于任意的公式 B. ◻

希尔伯特和其他人将这个属性称为“完备性”，类比于希尔伯特在平面几何和数论的基础研究中的完备性公理。但是，由于完备性在逻辑领域中已经有了其他的含义，这个属性现在通常被称为“后完备性”（Post 1921 重新发现了 cpc 的这个属性）或者在这里称为“极大性”。

##### 2.2.2.3 完备性

完备性定理描述了真值功能和演绎框架之间的精确对应关系：

定理 5. 当且仅当，。

证明. 这个结果通常被描述为难以建立，但在希尔伯特的 1917 年讲座中，它是极大性的一个直接推论。在一致性论证中已经观察到，只有被解释为常数 0 函数的公式是可证明的。假设某个公式 A 是常数 0 但在 cpc 中不可证明的。那么与之前的一致性论证相同，对于 cpc+A 也会得到同样的结果，与刚刚证明的极大性结果相矛盾。由此可得，每个被解释为常数 0 函数的公式都是 cpc 的定理。被解释为常数 0 函数的公式正是在经典真值功能解释下的有效公式。◻

也有一种直接的方法来证明完备性定理。卡尔马尔（Kalmár）在 1935 年提出了一个著名的证明，其中包含两个观察：

K1

K2

设 A 为具有命题变量 , , …, 的任意公式，设  为对命题变量的真值赋值。如果 ,  如果 . 则如果 , .

证明。假设现在 T 是一个具有命题变量，，…，的经典有效性。根据 K2，对于每个命题变量的真值赋值，和。让和是只在其中一个命题变量上不同的真值赋值。

 和

根据演绎定理，

 和

 由 K1，

使用假言演绎法的两个应用产生

重复这种相同的推理对于  产生

并且经过 n 次重复后得到的是确立的。◻

以这种方式直接证明完备性为最大性提供了不同的论证：

证明。假设 。根据完备性， 。因此存在一些命题变量的真值赋值，使得 A 的求值为 F。令 为将每个赋值为 T 的命题变量替换为 ，将每个赋值为 F 的命题变量替换为 。不可满足。因此是有效的。所以 。但是，通过替换， 。因此 cpc+A 是不一致的。◻

##### 2.2.2.4 作为半可决定性的完备性

一个形式演绎系统的定理集可以被看作是递归可枚举的。为了构建一个简单的枚举，让我们在命题逻辑的语言中添加符号“;”作为顺序位置分隔符，使得语言包括 。然后我们可以在各个阶段列出所有可能的符号序列：

* 第一阶段：仅使用命题变量列出长度为 1 的所有符号字符串。
* 第二阶段：仅使用命题变量列出长度为 1 或 2 的所有符号字符串。
* ...

在每个阶段，词汇表是有限的，因此只有有限数量的符号字符串需要列出。但是每个证明都是有限的符号字符串，因此在某个阶段或另一个阶段会被列出。因此，给定一个公式 A，可以逐个阶段开始搜索证明，每个阶段只检查有限数量的字符串。如果 A 是有效的，那么根据完备性，它是可证明的，并且在检查了一些有限数量的字符串后，将会发现它的证明。另一方面，如果 A 无效，搜索将永远不会停止。

完备性结果通常被描述为有价值的，因为它们清楚地展示了逻辑学的有效性的递归可枚举性。对于经典命题逻辑而言，有效性已经被知道是递归可枚举的，甚至可以通过更简单和更高效的真值表评估方法来判定。完备性定理的价值反而源自于两种截然不同的逻辑性概念——形式可证明性和真值有效性——的一致性。对于其他逻辑系统而言，情况则不同。最著名的例子是一阶经典量化理论，Church 和 Turing 在 1936 年证明了它是不可判定的。在这里，哥德尔 1930 年的完备性定理尤为有洞察力：量化有效性的集合不是递归的，但至少是递归可枚举的。事实上，对于经典命题逻辑和量化理论的完备性结果，是澄清递归和递归可枚举集合之间区别的历史契机——这个区别在今天被视为基本，但在 20 世纪前几十年却引起了相当大的混淆。

完备性结果对于许多替代命题逻辑系统可以发挥类似于它们在经典量化理论中发挥的作用：Urquhart 在 1984 年证明了相关逻辑的系统 e 和 r 是不可判定的；Lincoln 等人在 1992 年证明了完全命题线性逻辑 ll 是不可判定的。在这些领域中，一个完备的形式推导系统可以为那些抽象定义不容易导航的有效公式提供一些具体的访问方式。

##### 2.2.2.5 独立性

在一致性论证中展示的推理风格可以推广到展示独立性结果。一致性论证的思想首先是描述一个性质 P，使得所有公理都具有 P，并且

1. 如果一个推理规则应用于具有 P 的公式，则由其应用产生的公式也具有 P
2. if an inference rule is applied to a formula with P, then the formula that results from its application also has P

然后展示某些公式不具有 P。因为所有的定理要么是公理，要么是通过迭代应用推理规则从公理生成的，这些后者的公式不能成为定理。

在一致性证明中，P 是被解释为常数 0 函数的属性，而不具有 P 的公式是定理的否定。虽然推理可以被概括。假设 P 是除了一个公理之外的所有公理都具有的某种属性，并且该属性同样被推理规则保持。通过验证这一点，可以证明这个公理不能从其他公理中推导出来，因此，推导系统在没有它的情况下将具有更少的定理。例如，的经典解释是在输入上返回 1，否则返回 0 的函数，而的经典解释是在输入 0 上返回 1，在输入 1 上返回 0 的函数。在这个解释下，弗雷格的五个公理都是常数 0 的。如果我们修改解释，使得不变，但在输入 1 上返回 1，在输入 0 上返回 0，那么公理 1、2、4 和 5 仍然被解释为常数 0 函数，而公理 3 在输入上返回 1。推理规则在这个修改后的解释中仍然保持常数 0 的属性，所以我们知道公理 3 不能仅通过公理 1、2、4 和 5 来证明，而且没有公理 3，弗雷格的系统将不完备。

对于一个更有趣的例子，考虑以下表格给出的三值函数的解释和。

| A | B |   |
| --- | --- | --- |
| 0 | 0 | 0 |
| 1 | 0 | 0 |
| 2 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 1 | 0 |
| 2 | 1 | 0 |
| 0 | 2 | 2 |
| 1 | 2 | 2 |
| 2 | 2 | 0 |

| A |   |
| --- | --- |
| 0 | 2 |
| 1 | 2 |
| 2 | 0 |

如果 P 是在这个解释中是一个常数 0 函数的属性，那么可以验证

1. 公理 1、2、3 和 4 都具有 P
2. P 由演绎法则和替换保持
3. 公理 5 在输入 1 上评估为 1，因此不具有属性 P

公理 5 因此独立于前四个公理。

使用非经典（通常是更高价值）的真值功能解释来定义在独立性证明中使用的属性可以追溯到 1890 年的 Schröder。 Łukasiewicz 在完全的普遍性上进行了追求，并证明了关于这种技术范围的结果。

### 2.3 根岑的演算法

在 1934-35 年，Gerhard Gentzen 引入了两种用于呈现演绎推理的替代框架，这些框架导致了命题逻辑的特别精细的分析。我们首先将看一下根岑的自然演算系统，然后再考虑他的序列演算法。

#### 2.3.1 自然演算

在 1920 年早期的讲座中，大卫·希尔伯特指出，一个形式演绎系统的推理规则可以被看作是提供它们所控制的联结词的意义（希尔伯特 2013: 323）。希尔伯特的想法在根岑的自然演绎演算中得到了深刻的实现。自然演绎是“证明论语义学”中的一个早期而具有象征意义的成就：这一传统是以推理而非指示性术语来指定定义。

在像 cpc 这样的系统中，唯一负责特定联结词的推理规则是假言演绎。如果这个规则不仅仅是描述了一个演绎有效的模式，而实际上提供了联结词的定义，那么这意味着什么呢？如果我们将假言演绎理解为不仅仅是众多有效推理模式之一，而是说它是条件句的定义，它授权了从 A 到 B 的推理，那么我们的意思之一是，任何与 A 一起允许从 A 到 B 的推理的句子都表达了与 A 或更强的等价的东西。为了说明这一点，让我们将假言演绎用转角符号表示为

如果将其理解为对的定义，那么这就确定了推理定理的以下形式，即从任何其他类似地授权从 A 到 B 的公式中可以推导出：

在根岑的术语中，像演绎法则这样描述由某个联结词控制的命题的明确推理方式的规则被称为“消去规则”。演绎定理描述了由某个联结词控制的结论的明确推理模式，是“引入规则”的一个例子。根岑写道：

> 引入规则代表了……所涉及符号的“定义”，而消去规则在最终分析中不过是这些定义的结果。……通过使这些思想更加精确，应该可以将消去规则显示为对应引入规则的唯一函数。（1934-35：§II 5.13）

根岑预见的明确化是这样的：消去规则不是其对应引入规则的“结果”；引入规则也不是其对应消去规则的“结果”；但是，一类规则确实可以从将其对应规则的概念作为定义中推导出来的另一类规则。当条件化被理解为将和映射到命题，该命题与许可推理到的命题一起，演绎法则捕捉了关于许可这种推理的部分，而演绎定理捕捉了关于成为许可推理的事物的部分，因此，任何允许从到进行推理的其他命题只能通过（参见 Franks 2021）来实现。

举另一个例子，考虑推理和。人们可能认为这些是逻辑连接词的定义：知道意味着能够立即推断出 A 和 B。如果是这样的话，那么仅仅处于能够立即推断出 A 和 B 的位置应该足以让人得出结论：对于所有的，如果和，那么。再次，Gentzen 将第一对推理称为消除规则，将后一推理称为引入规则。

Gentzen 的自然推理系统是一种以引入/消除规则为基础的逻辑表达方式，与演绎法则和推导定理类似，为每个逻辑符号提供了推理定义。他的命题逻辑自然推理系统中，对于命题连接词、、、和，他在二维推理图中呈现了这些规则对：

注意在规则中出现的零元连接词，它本身没有推理定义。

自然演绎证明是通过迭代这些规则构建的树。当这样一个证明中的所有假设都通过应用规则被解除时，树的单个根节点中的公式被认为是被证明的；否则，它被认为是从保持在叶节点处的假设集合中推导出来的。让我们写成当存在一个自然演绎证明 A 时。

Gentzen 观察到，具有引入/消除规则对于连接词，，，的自然演绎演算与经典命题逻辑不等价：只有当，但是，例如，而。Gentzen 写道：“排中律，直觉主义者拒绝的那个”，“在自然演绎中占据着特殊的位置”。Gentzen 的框架揭示了将命题连接词的含义规定为二元真值函数的规范与以引入/消除规则方案的“推理”规定其含义不相符。事实上，Johansson 在 1937 年指出，Gentzen 的自然演绎的引入和消除规则甚至不能推导出析取三段论规则。

克里西普斯著名地归因于猎狗的这种基本推理不能仅仅通过连接词和的推理含义来证明。要推导出析取三段论规则，需要额外的原始推理图式。

要推导出排中律的原则，除了需要双重否定规则

这些规则可以与命题连接词的引入和消除规则一起使用，构建直觉命题逻辑的自然推理系统 nd+和经典命题逻辑的 nd+，但是根岑观察到，这样的推理模式“超出了引入/消除框架之外…”（经典命题逻辑通常以自然推理的形式呈现 nd++，但是在该系统中，虚假推理规则是多余的。）

经典逻辑和直觉逻辑之间的区别早在根岑的工作之前就存在。但是，通过对命题连接词进行推理定义，自然推理为这种区别带来了新的视角：经典主义者、直觉主义者和其他逻辑学家可以就命题连接词的定义达成一致，他们对逻辑的理解差异在于独立于连接词含义的原则（如排中律）的可接受性。

#### 2.3.2 命题演算

同样的观点在 Gentzen 的命题演算中以不同的方式呈现出来。这些演算以序列的形式呈现逻辑推理：“”的表达式中，希腊字母代表（可能为空的）有限公式序列。协调“序列箭头”的左侧和右侧的序列称为前件和后件。命题演算再次将每个命题连接词与一对规则相关联，这次是“左”和“右”规则：

在命题演算中，命题连接词的这些左/右规则与另一组结构推理规则并行运行。经典演算 pk 有七个：

在 pk 中，一个证明是由这些逻辑和结构规则的迭代构建的有限分支树，其中每个叶节点都是形式为的基本推理。根节点标记的推理称为最终推理。当 pk 证明的最终推理形式为时，我们写作。Gentzen 对 pk 做出了几点观察：

1. 当且仅当，当且仅当，
2. 如果通过要求推理箭头的右侧最多只有一个公式，并相应地重写规则为，来修改 pk，则 pk 会发生变化。

所得的演算π是这样的，当且仅当，当且仅当，其中 ipc 代表 Heyting 的命题直觉主义逻辑和其等价的形式演绎系统。（显然，规则交换(R)和收缩(R)在π中没有作用，可以省略。）

3. 割除定理：如果通过删除“割”规则简单修改 pk 和 pi，所得的演算 pk-和 pi-是这样的，当且仅当，当且仅当，和，当且仅当，。
4. 在 pk-或 pi-证明中出现的所有公式都是出现在最终结论中的公式的子公式。（这个“子公式性质”显然不适用于 pk 和 pi 的证明。）

观察 2 提供了另一种视角，说明逻辑学家在不同意命题连接词的含义的情况下，可能对排中律等原则的有效性产生分歧。在 pk 和 pi 中，对 and 和 or 的处理是相同的；它们之间唯一的区别在于背景推理结构。

观察 1 使人可以立即得出结论，即 pk 在命题逻辑的经典真值功能解释方面是完备的。Gentzen 没有得出这个结论，因为他对完备性有了不同的理解，这是由于序列演算法所可能实现的：因为“割除”规则可以被证明完全捕捉到逻辑蕴涵的一般概念——这是 Gentzen 在 1932 年认为自己已经证明的——观察 3 表明，“割除”可以从 pk 中消除，这表明命题连接词的左/右规则是完备的，即使用它们可以证明的公式的任何逻辑蕴涵都可以用它们本身证明（参见 Franks 2010）。这种完备性的表述方式还有进一步的优势，即 pi 可以以相同的意义被称为完备。

#### 2.3.3 pk 和 pi 的建设性完备性

由于观察 4，可以非常简单地证明 pk 在通常意义上的完备性。

证明。如果在经典真值解释下，公式在逻辑上是有效的，则称一个推理序列是有效的。正如人们所期望的那样，很容易验证 pk 的所有规则都保持有效性。更令人惊讶的是，除了 thinning 规则之外，当反向阅读时，相同的规则也保持有效性。将这样的推理图形称为“可逆的”。现在假设给定一个包含 n 个逻辑连接词的推理序列。一个直接的数学归纳法证明了，如果是有效的，则存在一个 pk 证明。首先假设不包含逻辑连接词）。那么它的前提和后件中必定有一些原子是相同的。显然，可以通过一系列的 thinning 和 exchange 推理从中证明。现在假设当时是可证明的，选择其中的任意一个不是原子的公式，并确定它的主要连接词。例如，假设它在中，并且它的主要连接词是。然后我们可以从下往上构建一个证明，以我们选择的公式为基础，并用表示删除了所选公式出现的部分的。

由于（L）的可逆性，该树的两个叶节点都标有包含 k 个连接词的有效推理序列。归纳假设保证它们有 pk 证明。因此，有一个 pk 证明。类似的论证适用于每个连接词。在特殊情况下，如果是空的并且包含一个（有效的）公式，这个构造表明如果◻

正如前面提到的，Gentzen 没有提出这个非常简单版本的完备性定理。因为他对削减消除作为他的规则完备性的表达感兴趣，所以他追求了这个方向，并提供了一种复杂的证明转换技术。然而，对于 pk-的完备性的了解，可以导致对削减消除的另一种验证：假设。因为所有基本的推理都是有效的，而且所有的 pk 规则都保持有效性，所以。但是 pk-是完备的，所以。

对这个完备性论证中隐含的构造进行反思，实际上表明任意公式都可以通过这种方式进行有效性测试，因此为经典逻辑提供了一种新的决策过程：构造的最终结果要么是一个证明，要么是一棵树，其叶节点指示如何构造一个证伪解释。

同样的论证方法也适用于 pi，当然不是为了显示它相对于经典真值解释是完备的，而是为了显示它相对于基于 Kripke 框架的另一种解释是完备的。这种分析直观逻辑的方法的有趣之处在于，不需要事先考虑要显示 pi 相对于哪种解释是完备的。只要开始算法地构建一个无削减的 pi 证明，要么成功，要么指示了在直观逻辑情况下适用的证伪解释的类型（参见 Takeuti 1987 [2013]）。

## 3. 非经典解释

经典命题逻辑显然是一个有价值的框架，不仅可以组织推理原则，还可以提供一个相当简单的环境来展示完备性、形式一致性、公理独立性等基本理论现象。但是，其系统发展的很大一部分价值在于在发展过程中指示如何偏离经典框架并构思命题连接词的替代解释。我们已经提到了一些指示：弗雷格形式演绎系统中排中律原则与其他公理的独立性，材料条件作为普通陈述语气“如果...那么”语句的真值条件分析的不合理性等。在这里，我们概述一些最常见的命题逻辑的替代系统。

### 3.1 多值逻辑

我们已经指出了如何利用价值大于 2 的真值功能解释来为公理系统提供独立证明。 Gödel（1932）定义了一系列广义经典解释的 n 值逻辑：

当且仅当对于从到原子公式的所有值分配时。

只是真理的经典理论。上面使用了来证明弗雷格的第五公理的独立性。 Gödel 在一个演示中使用了整个序列，证明直觉逻辑不完备于任何有限值真值功能解释。

除了这种功利角色之外，多值逻辑学本身也引起了人们的兴趣。重要的例子是（强和弱）Kleene 三值逻辑学，它们旨在为关于部分递归函数的命题分配真值。其他三值逻辑学被提出作为对材料条件的改进，作为指示语气条件的解释（参见 Cobreros 等人 2014 年）。四值逻辑学已被用于对包含冲突信息的数据库上的计算进行建模 - 这里的值对应于信息状态“真”，“假”，“两者都是”，“两者都不是”（参见 Belnap 1977 年）。Graham Priest 1992 年在相关逻辑学的发展中应用了相同的框架，再次提供了条件语言的改进形式化。

另一个重要的多值逻辑学类别是无限值“模糊逻辑学”。这些逻辑学被用来分析具有模糊术语的命题，可以认为是允许存在真实程度的命题。

### 3.2 构造逻辑学

我们已经注意到，简单地拒绝接受 lem 会导致与经典解释微妙偏离的情况：经典的真值功能解释消失了，但在自然演绎中明显的联结词的推理定义可以被保留。直觉主义命题演算 ipc 已经被深入研究。它的显著特点包括：

1. “析取性质”：只有当且仅当或。哥德尔（1932 年，1933a 年）首次观察到 ipc 具有析取性质。第一个记录的证明出现在 Gentzen 1934-35 年，其中它是 pi 消去的一个微不足道的结果：一个 pi 证明能够有终结式的前提是最后的推理是一个 thinning(R)或。如果推理是 thinning(R)，那么前一个推理将是。因为 pi 是一致的，这是不可能的。因此，前一个推理必须是或。

曾经有人猜测 ipc 可以被表征为具有析取性质的最强命题逻辑（一个较弱的逻辑的例子是 Johansson 的 mpc，对应于自然演绎的纯系统 nd）。1957 年，Kreisel 和 Putnam 研究了“前提独立（IndPrem）”推理。

 并且观察到

尽管逻辑 kp = ipc + IndPrem 也具有析取性质。如今已知，在 ipc 和 cpc 之间的强度之间存在无限多个不同的逻辑系统，并且其中无限多个具有析取性质。

2. 真功能的失败：直观上理解直觉主义是用建设性验证的概念取代理想主义的真实概念。一些作者认为，在命题的情况下，这可能导致三值逻辑：一个值表示命题已经被建设性验证，另一个值表示命题已经被建设性反驳，第三个值表示两者都不是。这似乎至少符合 ipc 对 lem 的拒绝。然而，由于只有少数三值语义环境，其他人能够逐个案例排除这种可能性。这导致有人猜测正确的语义可能具有 4 或可能 5 的价值。哥德尔的 1932 年证明排除了任何有限价值的真功能解释。

由于真值功能的失败，需要一个新的框架来理解命题逻辑的有效性。已经引入了足够的拓扑、代数和 Kripke 框架语义，并且存在着证明这些框架与各种证明系统之间对应关系的完备性结果。我们已经指出，关于直觉主义序列演算 pi 相对于 Kripke 框架的完备性论证是对于经典真理理论相对于 pk 的简单构造完备性定理的一个变体。同样，该论证表明 pi 是可判定的：给定一个公式 A，该算法要么返回一个 A 的 pi 证明，要么返回一个证伪的 Kripke 框架。

还有一种非正式的、直观的对于命题逻辑定理性的理解，称为 BHK 解释。根据这种解释，析取性质是对于符号的定义的形式类比：拥有一个关于的证明意味着要么已经证明了，要么已经证明了。类似地，拥有一个关于的证明意味着已经证明了和。关于连接词的这种意义规定，“可证性”指的是通过任何方式的非正式可证性，而不是在特定系统内的形式可证性。

因为 BHK 解释规定了像和这样的表达式的意义，而是规定了这样的表达式可证明的含义，所以在直觉主义设置中，连接词通常被称为“蕴涵”运算符。有时会错误地认为这与条件连接词和蕴涵关系之间的经典区别存在分歧。但正如我们所见，根据经典观念，表达式代表蕴涵，即在每个赋值上条件性主张的真实性。然而，在直觉主义观念中，连接词的理解是以它们所统治的表达式可证明的含义为基础的。同样的观念也适用于相关逻辑中对连接词的理解，其中再次将描述为蕴涵运算符（而其经典处理被指责为引发“物质蕴涵悖论”，而不是“物质条件化悖论”）。

3. ipc 的一个显著特点是存在像 IndPrem 这样的推理规则，这些规则不能被推导出来

但仍然保留了 ipc 可证明性的属性。其他类似规则的例子是

这样说这些规则是直觉推理的有效模式是正确的吗？这个问题在某种程度上是模糊的，因为对经典逻辑的经验使人对此麻木不仁。因为可以证明，任何保持作为经典有效性的属性的规则也可以在 cpc 本身中推导出来。在应用这些规则时，使得 ipc 定理集封闭的规则事实上扩展了 ipc 可推导的规则，从而引出了一个新的概念：前者规则被称为“可随附的”。命题逻辑的直觉研究因此揭示了在演绎有效性的基本概念中的一个基本区别，即规则许可从定理中进行合法推理，并且也适用于任意假设。

因为直觉主义的逻辑联结词的原始理解是基于包含它们的陈述的可证明条件，所以有人认为（并且许多作者也认为）可随附性是 ipc 的演绎有效性概念的适当明确化。另一方面，区分 ipc 和 mpc 的是虚假推理规则的可推导性。这个规则（以及析取三段论）在 mpc 中已经是可随附的，所以明确将其作为 ipc 中可推导的推理是出于对可推导性重要性的一些认识。可以肯定地说，在建设性逻辑中，可推导性和可随附性之间的区别在 cpc 中并不重要。

4. 在 ipc 中，可以推导出三个德摩根推理，但不能推导出推理。因此，ipc 可以作为一个背景理论，用来衡量这个推理的强度。有人可能猜测 ipc+是完全经典的，但事实上，这个系统仍然不能证明 lem。然而，它确实证明了所谓的弱排中律（wlem）：。此外，在 ipc+wlem 中，所有的德摩根推理都是可导出的，因此可以说 wlem 和是在基础理论 ipc 上等价的。ipc+逻辑，有时被称为德摩根逻辑或扬科夫逻辑，在 ipc 和 cpc 之间的系统强度层次中占据着独特的位置。它在可解性程度的 Medvedev 格中有一个自然的实现。设置是 Baire 空间（从到的函数集）和产生给定子集的元素的问题。Baire 空间的子集被称为质量问题，它们的元素被称为解决方案。如果一个质量问题被说成是归约到另一个质量问题，那么就存在一种有效的过程，可以将第二个问题的解决方案转化为第一个问题的解决方案。如果定义质量问题可归约程度的格，那么的等同性集合对应于德摩根逻辑的定理集（Sorbi 1991），因此质量问题理论提供了对这个逻辑的构造性解释。（这类似于开关电路是 cpc 的实现的构造性类比。）然而，与 ipc 不同的是，德摩根逻辑中没有一个可导出的规则是不可推导的（Prucnal 1976）。因此，可以看出，wlem 作为完全 lem 的替代，允许进行一种构造性解释，而不展示不可推导的可推导规则。
5. 我们已经观察到 Gentzen 演算如何突出 ipc 和 cpc 之间的某些关系。Kolmogorov、Glivenko、Gödel 和 Gentzen 的翻译方案清楚地显示了这些系统与其他系统之间的其他关系。我们从 Valérii Glivenko（1929）的一个结果开始：

 定理 6. 如果 ，那么 。

证明. 首先观察关于 nd+的三个简单事实，它是 ipc 的自然推导等价物：

对于主定理的证明，假设 。然后根据 V2，我们有 ，因此是 nd++的一个证明：

通过 V1，存在 nd+证明：

从这些片段中可以构建一个 nd+证明：

![This proof is built by placing each of the proof figures indicated above on the left side of each of the binary inferences Each binary inference is a negation elimination, and each subsequent unary inference is a negation introduction](https://plato.stanford.edu/entries/logic-propositional/large-figure.svg)

这完成了主定理的证明。◻

我们观察到两个推论：

V4

 如果 , 那么 .

这是从主定理和 V3 直接得出的。

V5

只有当 ipc 不一致时，cpc 才不一致。

因为如果 cpc 不一致，那么存在一个命题公式，使得和。但是那么和。

Glivenko 的定理提供了一个简单的翻译，将经典逻辑翻译为由定义的直觉逻辑，对于所有的公式 A。这种翻译是有限的，因为它不能扩展到量化理论。Kolmogorov（1925）提供了一个变种，如下所示：

* 对于所有的命题变量，是。
* 是
* 是
* 是
* 是

Gödel/Gentzen（1933 年）的翻译定义如下：

* 是，对于所有的命题变量
* 是
* 是
* 是
* 是

容易证明，当且仅当，如果，当且仅当，如果。与之不同的是，Kolmogorov 和 Gödel/Gentzen 的方案可以扩展到量词。后者可以进一步扩展到算术理论和集合论（参见 Troelstra 和 van Dalen 1988）。

1933 年，Gödel 提供了从 ipc 到模态逻辑 S4 的类似翻译。S4 是 cpc 加上一个新的原始符号，即如果 A 是一个公式，则是一个公式，还有一个新的推理规则。

和三个新的公理

哥德尔通过以下方式定义了一个从 ipc 到 S4 语言的公式翻译：

并且声明，没有给出证明：

Gödel 进一步声明：“在 S4 中，命题的翻译是不可推导的”，并且还声明：“一般情况下，对于形式为的任何公式，如果在 S4 中既不可推导也不可证明，则也不可推导”：

(*)和(**)显然共同满足 ipc 的析取性质。

### 3.3 相关性和连通逻辑

回到近似自然语言表达的问题，一些作者提出通过对形式为的命题的真实性施加更强的条件来克服物质条件的明显不足。相关逻辑学家认为，物质条件所展示的许多特征似乎违背了说话者对条件表达式真实性的直觉，这些特征源于将前提与结论无关的条件表达式的真实性归因。为了确保相关性，他们提出了“变量共享条件”。变量共享通常被认为只是相关性的必要条件，然而，描述足够的形式条件的项目仍在进行中。

连接逻辑学家的目标是实现这样的直觉，即条件语句为真时，其结论的否定与其前提不相容。这对条件语句的真实性有着强大的历史背景，在斯多嘉哲学家克里西普和塞克斯图斯·恩皮里库斯的逻辑手稿中出现，并在当时显然获得了比梅拉加的菲洛相反的更多支持。相关的想法已经出现在《先验分析》中，亚里士多德声称如果非 A，则 A 是不可能的。这个“亚里士多德的论点”可以形式化为，显然在经典逻辑和直觉逻辑中都是无效的。有时这个公式也被称为亚里士多德的论点。连接逻辑系统接受这两个公理，以及旨在形式化上述克里西普思想的原始原则和（这两个原则在基本理论 ipc 上是相互推导的，与亚里士多德的论点相同）。

通过将经典无效的原则作为定理包含在内，这些逻辑学风险因为 cpc 的最大化而变得琐碎。一些方法通过拒绝自然推理的“-消除规则”等经典原则来解决这个问题，从而避免了任何公式及其否定成为定理。其他方法是“半矛盾的”，即允许定理 A 和 B，但不允许从这个矛盾中推导出任意公式。半矛盾的方法通常可以用上述提到的 4 值真值赋值进行解释。

### 3.4 线性逻辑学

如果许多对经典框架的偏离是由于希望研究更接近普通语言表达的真值条件的联结词，那么线性逻辑学（由 Girard 于 1987 年引入）可以被视为朝相反方向的推动。正如 Frege 在逻辑理论内部的原因中，尽管（甚至可能因为）它与普通的“如果...那么”陈述不对应，但他在材料条件中看到了逻辑意义，线性逻辑学可以被视为在形式逻辑的精细结构中发现那些在推理跟踪中起特定作用的命题联结词，而普通表达可能太粗糙以表达。

我们之前看到，在命题演算中，经典逻辑和直觉逻辑的区别不在于命题连接词的推理规则，而在于推理的背景结构——具体来说，是在后继式中多个公式的存在与否。线性逻辑通过调整推理的其他结构方面进一步分析这种关系。众所周知，pk 的操作规则可以以“共享上下文”或“独立上下文”的形式书写。上面给出的操作规则采用了共享上下文的表述，但是例如规则

也可以采用独立上下文的表述：

这些表述的等价性很容易验证：

但我们看到它们的等价性取决于结构规则的存在，即稀疏和收缩。

在命题线性逻辑中，有两个类似于合取的运算符 和 ，以及两个类似于析取的运算符 和 。 具有上下文共享的左规则和带有“内置稀疏”的右规则，类似于直觉主义版本的 。 是它的结构对偶：它的左规则是上下文无关的，右规则与经典的 相同。同样， 是上下文无关的， (L) 与经典的 (L) 相同，而 是上下文共享的， (L) 具有内置稀疏。具有上下文共享规则的连接词 和 被称为“加法”，具有上下文无关规则的 和 被称为“乘法”。但是，没有稀疏和收缩的结构规则，因此加法和乘法规则不等价。

将逻辑合取和析取消除歧义为加法和乘法版本，极大地清晰了经典逻辑和直觉主义逻辑之间的关系。例如，存在两个版本的 lem。加法版本 可以被视为基于直觉主义的析取：由于它的任何一个析取式都是不可证明的，因此它也是不可证明的。另一方面，乘法版本 则对应于经典理解，并且很容易证明（“线性蕴涵” 被定义为 ，因此乘法 lem 与线性恒等式 对应）。

在没有收缩和弱化的情况下，线性逻辑的公式更像是资源而不是永久的陈述或构造。正如直觉逻辑用过程性主张“给定 A，我可以产生 B”取代了经典条件“要么 A 为假要么 B 为真”的理解一样，线性逻辑能够区分“给定一份 A，我可以产生一份 B”的主张和“给定三份 A，我可以产生一份 B”的主张。这允许对计算中资源使用的命题进行建模，线性逻辑受到了很多关注，因为它在计算模型（如 Petri 网）中具有自然实现。

到目前为止，线性逻辑的片段被称为 mall（用于乘法/加法线性逻辑）。为了保留其独特的特性，同时能够表达可解释为直觉蕴涵的主张，引入了线性模态。这些是一元连词，其受限的弱化和收缩形式适用于它们。然而，它们之所以被称为“模态”，是因为它们受到模态逻辑 S4 的必要性和可能性运算符的相同左右规则的支配。这使得不清楚是否将具有它们的完整线性逻辑 ll 包括在命题逻辑中。

这并不是线性逻辑的错误，而是它对命题研究的主要贡献之一。正如本文引言中强调的那样，对于命题逻辑的发展来说，一种有益的态度是将关于命题本质的问题放在一边，只要求命题联结词返回与其操作对象相同级别的表达式。从这个角度来看，古典逻辑和直觉主义逻辑的基本起点——“持久的事实真理”或“可重复的构造”——与线性逻辑的“有限资源”基本单位相关，就像模态“必然真理”和“可能真理”与“持久的事实真理”或“可重复的构造”类别相关一样。

<!--md-padding-ignore-begin-->
## Bibliography

### References

* Belnap, Nuel D., 1977, “A Useful Four-Valued Logic”, in *Modern Uses of Multiple-Valued Logic*, J. Michael Dunn and George Epstein (eds.), Dordrecht/Boston: D. Reidel, 5–37. doi:10.1007/978-94-010-1161-7_2
* Bernays, Paul, 1926, “Axiomatische Untersuchung des Aussagen-Kalkuls der *Principia Mathematica*”, *Mathematische Zeitschrift*, 25: 305–320. doi:10.1007/BF01283841
* Cook, Stephen A., 1971, “The Complexity of Theorem-Proving Procedures”, in *Proceedings of the Third Annual ACM Symposium on Theory of Computing*, New York: ACM Press, 151–158. doi:10.1145/800157.805047
* Cobreros, Pablo, Paul Égré, David Ripley, and Robert van Rooij, 2014, “Foreword: Three-Valued Logics and Their Applications”, *Journal of Applied Non-Classical Logics*, 24(1–2): 1–11. doi:10.1080/11663081.2014.909631
* Church, Alonzo, 1936, “An Unsolvable Problem of Elementary Number Theory”, *American Journal of Mathematics*, 58(2): 345–353. doi:10.2307/2371045
* Edgington, Dorothy, 1995, “On Conditionals”, *Mind*, 104(414): 235–329. doi:10.1093/mind/104.414.235
* Franks, Curtis, 2010, “Cut as Consequence”, *History and Philosophy of Logic*, 31(4): 349–379. doi:10.1080/01445340.2010.522365
* –––, 2021, “The Deduction Theorem (Before and After Herbrand)”, *History and Philosophy of Logic*, 42(2): 129–159. doi:10.1080/01445340.2021.1889117
* Frege, Gottlob, 1879, *Begriffsschrift, eine der arithmetischen nachgebildete Formelsprache des reinen Denkens*, Halle: L. Nebert. Translated as *Conceptual Notation: a formula language of pure thought modeled upon the formula language of arithmetic* in Frege 1972:: 101–208.
* –––, 1910 [1980], “Letter to Jourdain”, translated and reprinted in his *Philosophical and Mathematical Correspondence*, G. Gabriel, et al. (eds.), Chicago: University of Chicago Press, 1980.
* –––, 1972, *Conceptual Notation, and Related Articles*, Terrell Ward Bynum (trans.), Oxford: Clarendon Press.
* Gentzen, Gerhard, 1932, “Über die Existenz unabhängiger Axiomensysteme zu unendlichen Satzsystemen”, *Mathematische Annalen* 107: 329–50. Translated as “On the Existence of Independent Axiomsystems for Infinite Sentence Systems”, in Gentzen 1969: 29–52. doi:10.1007/BF01448897 (de)
* –––, 1934–35, “Untersuchungen über das logische Schließen”, Gentzen’s doctoral thesis at the University of Göttingen, translated as “Investigations into Logical Deduction”, in Gentzen 1969: 68–131.
* –––, 1969, *The Collected Papers of Gerhard Gentzen*, M. E. Szabo (ed.), (Studies in Logic and the Foundations of Mathematics 55), Amsterdam: North-Holland.
* Girard, Jean-Yves, 1987, “Linear Logic”, *Theoretical Computer Science*, 50(1): 1–101. doi:10.1016/0304-3975(87)90045-4
* Glivenko, Valéry, 1929, “Sur quelques points de la logique de M. Brouwer”, *Académie royale de Belgique, Bulletin de la classe des sciences*, series 5, 15: 183–188.
* Gödel, Kurt, 1930 [1986], “Die Vollständigkeit der Axiome des logischen Funktionenkalküls”, *Monatshefte für Mathematik und Physik*, 37: 349–360. Translated by S. Bauer-Mengelberg as “The completeness of the axioms of the functional calculus of logic” reprinted in Gödel 1986: 102–23. doi:10.1007/BF01696781
* –––, 1932 [1986], “Zum intuitionistischen Aussagenkalkül”, *Anzeiger der Akademie der Wissenschaftischen in Wien*, 69: 65–66. Translated by J. Dawson as “On the intuitionistic propositional calculus”, in Gödel 1986: 223–25.
* –––, 1933a [1986], “Eine Interpretation des intuitionistischen Aussagenkalküls”, *Ergebnisse eines mathematischen Kolloquiums*, 4: 39–40. Translated as “An Interpretation of the Intuitionistic Propositional Calculus”, in Gödel 1986: 301–302.
* –––, 1933b [1986], “Zur intuitionistischen Arithmetik und Zahlentheorie”, *Ergebnisse eines mathematischen Kolloquiums*, 4: 34–38. Translated as “On Intuitionistic Arithmetic and Number Theory”, in Gödel 1986: 287–295.
* –––, 1986, *Collected Works, Volume I: Publications 1929–1936*, Solomon Feferman, John W. Dawson Jr, Stephen C. Kleene, Gregory H. Moore, Robert M. Solovay, and Jean van Heijenoort (eds.), Oxford/New York: Clarendon Press.
* Herbrand, Jacques, 1930, *Recherches sur la théorie de la démonstration*, Herbrand’s doctoral thesis at the University of Paris. Translated by W. Goldfarb, except pp. 133–88 translated by B. Dreben and J. van Heijenoort, as “Investigations in proof theory” in Herbrand 1968 [1971: 44–202].
* –––, 1968 [1971], *Écrits Logigues*, Jean van Heijenoort (ed.), (Bibliothèque de Philosophie Contemporaine. Logique et Philosophie Des Sciences), Paris: Presses universitaires de France. Translated as *Logical Writings*, Warren D. Goldfarb (trans.), Dordrecht, Holland: D. Reidel, 1971.
* Hilbert, David, 2013, *David Hilbert’s Lectures on the Foundations of Arithmetic and Logic 1917-1933* (David Hilbert’s Lectures on the Foundations of Mathematics and Physics, 1891–1933, vol. 3), William Ewald and Wilfried Sieg (eds.), Berlin, Heidelberg: Springer Berlin Heidelberg. doi:10.1007/978-3-540-69444-1
* Hilbert, David and W. Ackermann, 1928, *Grundzüge der theoretischen Logik*, (Die Grundlehren der mathematischen Wissenschaften 27), Berlin: J. Springer.
* Johansson, Ingebrigt, 1937, “Der Minimalkalkül, ein reduzierter Intuitionistischer Formalismus”, *Compositio Mathematica*, 4: 119–136. [[Johansson 1937 available online](http://www.numdam.org/item/CM_1937__4__119_0/)]
* Kalmár, László, 1935, “Über die Axiomatisierbarkeit des Aussagenkalküls”, *Acta Scientiarum Mathematicarum*, 7(4): 222–43.
* Kolmogorov [Kolmogoroff], Andrey N., 1925 [1967], “О принцип tertium non datur”, *Matematicheskii Sbornik*, 32(4): 646–667. Translated as “On the Principle of Excluded Middle”, in *From Frege to Gödel A Source Book in Mathematical Logic, 1879-1931*, Jean van Heijenoort (ed.), Cambridge, MA: Harvard University Press, 1967, 416–437.
* Kreisel, Georg and Hilary Putnam, 1957, “Eine Unableitbarkeitsbeweismethode für den Intuitionistischen Aussagenkalkül”, *Archiv für Mathematische Logik und Grundlagenforschung*, 3(3–4): 74–78. doi:10.1007/BF01988049
* Lewis, David, 1976, “Probabilities of Conditionals and Conditional Probabilities”, *The Philosophical Review*, 85(3): 297–315. doi:10.2307/2184045
* Lincoln, Patrick, John Mitchell, Andre Scedrov, and Natarajan Shankar, 1992, “Decision Problems for Propositional Linear Logic”, *Annals of Pure and Applied Logic*, 56(1–3): 239–311. doi:10.1016/0168-0072(92)90075-B
* Nicod, J. G. P., 1917, “A Reduction in the Number of Primitive Propositions of Logic”, *Proceedings of the Cambridge Philosophical Society*, 19: 32–41.
* Post, Emil L., 1921, “Introduction to a General Theory of Elementary Propositions”, *American Journal of Mathematics*, 43(3): 163–185. doi:10.2307/2370324
* Priest, Graham, 1992, “What is a non-normal world?”, *Logique & Analyse*, 139–140: 291–302.
* Prucnal, Tadeusz, 1976, “Structural Completeness of Medvedev’s Propositional Calculus”, *Reports on Mathematical Logic*, 6: 103–105.
* Quine, W. V. O., 1955, “A Way to Simplify Truth Functions”, *The American Mathematical Monthly*, 62(9): 627–631. doi:10.1080/00029890.1955.11988710
* –––, 1982, *Methods of Logic*, fourth edition, Cambridge, MA: Harvard University Press.
* Samson, E. and B. Mills, 1954, “Circuit minimization: algebra and algorithms for new Boolean canonical expressions”, Technical Report 54–21, Air Force Cambridge Research Center.
* Schröder, Ernst, 1890, *Vorlesungen über die Algebra der Logik (exakte Logik)*, volume 1, Leipzig: B. G. Teubner. Reprinted 1966, New York: Chelsea.
* Shannon, Claude Elwood, 1940, “A Symbolic Analysis of Relay and Switching Circuits”, Thesis (M.S.), Massachusetts Institute of Technology, Dept. of Electrical Engineering. [[Shannon 1940 available online](https://dspace.mit.edu/handle/1721.1/11173)]
* Sheffer, Henry Maurice, 1913, “A Set of Five Independent Postulates for Boolean Algebras, with Application to Logical Constants”, *Transactions of the American Mathematical Society*, 14(4): 481–488. doi:10.1090/S0002-9947-1913-1500960-1
* Sorbi, Andrea, 1991, “Some Quotient Lattices of the Medvedev Lattice”, *Zeitschrift für Mathematische Logik und Grundlagen der Mathematik*, 37(9–12): 167–182. doi:10.1002/malq.19910370905
* Takeuti, Gaisi, 1987 [2013], *Proof Theory*, second edition, (Studies in Logic and the Foundations of Mathematics 81), Amsterdam/New York: North-Holland. Reprinted New York: Dover, 2013.
* Tarski, Alfred, 1933, “Einige Betrachtungen über die Begriffe der ω-Widerspruchsfreiheit und der ω-Vollständigkeit”, *Monatshefte für Mathematik und Physik*, 40(1): 97–112. doi:10.1007/BF01708855
* Troelstra, A. S. and D. van Dalen, 1988, *Constructivism in Mathematics, Volume 1: An Introduction*, (Studies in Logic and the Foundations of Mathematics 121), Amsterdam: North-Holland.
* Turing, A. M., 1936, “On Computable Numbers, with an Application to the Entscheidungsproblem”, *Proceedings of the London Mathematical Society*, series 2, 42(1): 230–265. doi:10.1112/plms/s2-42.1.230
* Urquhart, Alasdair, 1984, “The Undecidability of Entailment and Relevant Implication”, *Journal of Symbolic Logic*, 49(4): 1059–1073. doi:10.2307/2274261
* Whitehead, Alfred North and Bertrand Russell, 1925–27, *Principia Mathematica, Volumes 1, 2 and 3*, 2nd Edition, Cambridge: Cambridge University Press.

### More Readings

Most textbooks treat propositional logic as an elementary step *en route* to quantification theory or another more general topic. A notable exception is:

* Schechter, Eric, 2005, *Classical and Nonclassical Logics: An Introduction to the Mathematics of Propositions*, N.J: Princeton University Press.

Another sensitive treatment of propositional logic with attention to non-classical interpretations is:

* Gamut, L. T. F., 1990, *Logic, Language, and Meaning, Volume 1: Introduction to Logic*, Chicago, IL: University of Chicago Press. Translation of *Logica, taal en betekenis I: inleiding in de logica*, Utrecht: Het Spectrum, 1982. (L. T. F. Gamut is a collective name for Johan van Benthem, J. A. G. Groenendijk, D. H. J. de Jongh, M. J. B. Stokhof, and H. J. Verkuyl.)

Among standard textbook treatments, standout presentations of propositional logic can be found in Quine 1982 and in:

* Buss, Samuel R., 1998, “An Introduction to Proof Theory”, in *Handbook of Proof Theory*, Samuel R. Buss (ed.), (Studies in Logic and the Foundations of Mathematics 137), Amsterdam: Elsevier, 1–78. doi:10.1016/S0049-237X(98)80016-5
* Kleene, Stephen Cole, 1952, *Introduction to Metamathematics*, (The University Series in Higher Mathematics), New York: Van Nostrand.
* Mendelson, Elliott, 2015, *Introduction to Mathematical Logic*, sixth edition, (Textbooks in Mathematics), Boca Raton, FL: CRC Press.
* Von Plato, Jan, 2013, *Elements of Logical Reasoning*, Cambridge/New York: Cambridge University Press. doi:10.1017/CBO9781139567862

An excellent presentation of the rapid historical development of the subject in the early twentieth century is:

* Mancosu, Paolo, Richard Zach, and Calixto Badesa, 2009, “The Development of Mathematical Logic from Russell to Tarski, 1900–1935”, in *The Development of Modern Logic*, Leila Haaparanta (ed.), Oxford/New York: Oxford University Press, 318–470. doi:10.1093/acprof:oso/9780195137316.003.0029

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-propositional). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-propositional/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-propositional&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](https://philpapers.org/sep/logic-propositional/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[Boolean algebra: the mathematics of](https://plato.stanford.edu/entries/boolalg-math/) | [computational complexity theory](https://plato.stanford.edu/entries/computational-complexity/) | [conditionals](https://plato.stanford.edu/entries/conditionals/) | [logic: algebraic propositional](https://plato.stanford.edu/entries/logic-algebraic-propositional/) | [logic: connexive](https://plato.stanford.edu/entries/logic-connexive/) | [logic: fuzzy](https://plato.stanford.edu/entries/logic-fuzzy/) | [logic: intuitionistic](https://plato.stanford.edu/entries/logic-intuitionistic/) | [logic: linear](https://plato.stanford.edu/entries/logic-linear/) | [logic: many-valued](https://plato.stanford.edu/entries/logic-manyvalued/) | [logic: paraconsistent](https://plato.stanford.edu/entries/logic-paraconsistent/) | [logic: relevance](https://plato.stanford.edu/entries/logic-relevance/) | [proof theory: development of](https://plato.stanford.edu/entries/proof-theory-development/) | [Russell, Bertrand](https://plato.stanford.edu/entries/russell/) | [semantics: proof-theoretic](https://plato.stanford.edu/entries/proof-theoretic-semantics/)

[Copyright © 2023](https://plato.stanford.edu/info.html#c) by  
Curtis Franks <[*cfranks@nd.edu*](mailto:cfranks%40nd%2eedu)>
