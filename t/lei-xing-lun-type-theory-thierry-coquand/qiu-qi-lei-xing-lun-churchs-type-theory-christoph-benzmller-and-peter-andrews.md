# 丘奇类型论 Church’s type theory (Christoph Benzmüller and Peter Andrews)


*首次发表于 2006 年 8 月 25 日，实质性修订于 2024 年 1 月 16 日*

丘奇的类型论，又称为简单类型论，是一种形式逻辑语言，包括经典的一阶和命题逻辑，但在实际意义上更具表达力。它在大多数现代类型论应用中被使用，经过一些修改和增强。它特别适用于数学和其他学科的形式化，以及硬件和软件的规范和验证。它还在自然语言的形式语义学研究中起着重要作用。特别是当作为元逻辑用于语义嵌入表达式（量化）非经典逻辑时，它在人工智能和哲学中能够实现更多的主题应用。

可以非常自然地表达大量的技术知识。通过可能的增强，丘奇的类型论构成了一种优秀的形式语言，用于表示自动信息系统中的知识，复杂的自动推理系统，验证数学证明的正确性的系统，以及涉及逻辑和人工智能的一系列项目。下面的第 1.2.2 节和第 5 节给出了一些示例和进一步的参考资料。

类型论也被称为高阶逻辑，因为它们不仅允许量化个例变量（如一阶逻辑中），还允许量化函数、谓词甚至高阶变量。类型论特征性地将类型分配给实体，区分了数字、数字集合、从数字到数字集合的函数以及这些函数的集合等。正如下面的第 1.2.2 节所示，这些区别使得我们能够讨论集合和函数的概念丰富的世界，而不会遇到朴素集合论的悖论。

丘奇的类型论是由阿隆佐·丘奇在 1940 年引入的一种类型论的表述。在某些方面，它比伯特兰·罗素在 1908 年和怀特海德和罗素在 1927 年引入的类型论更简单和更通用。由于属性和关系可以被看作是从实体到真值的函数，所以在丘奇的类型论中，函数的概念被视为原始的，并且丘奇在 1932 年和 1941 年引入的λ-符号被纳入到形式语言中。此外，量词和描述符操作符以一种避免额外绑定机制的方式引入，而是重新使用λ-符号。因此，λ-符号是丘奇的类型论中唯一使用的绑定机制。

---

## 1. 语法

### 1.1 基本思想

我们从非正式描述开始，介绍丘奇类型论语法的基本思想。

所有实体都有类型，如果α和β是类型，从类型β的元素到类型α的元素的函数的类型写作 。（这种表示法是由丘奇引入的，但一些作者使用代替 。例如，参见类型论条目的第 2 节。）

正如谢林菲克尔（1924）所指出的，当这些函数的值本身可以是函数时，多于一个参数的函数可以用一个参数的函数来表示。例如，如果 f 是一个两个参数的函数，对于 f 的左域的每个元素 x，都存在一个函数 g（取决于 x），使得对于 f 的右域的每个元素 y。我们现在可以写成 ，并将 f 视为一个单参数函数，其在其域中的任何参数 x 的值是一个函数 ，其在其域中的任何参数 y 的值是 fxy。

举一个更明确的例子，考虑函数 +，它将任意一对自然数映射到它们的和上。我们可以用表示这个函数，其中是自然数的类型。给定任意一个数，是一个函数，当应用到任意一个数时，给出值，通常简写为 。因此是一个带有一个参数的函数，它将 x 加到任意一个数上。当我们将视为一个带有一个参数的函数时，我们可以看到它将任意一个数 x 映射到函数上。

更一般地，如果 f 是一个将类型 , ,…, 的 n 元组映射到类型α的元素的函数，我们可以给 f 赋予类型 。通常习惯上使用左结合的约定省略括号，并将这个类型符号简单地写作 。

一个集合或属性可以通过一个函数（通常称为特征函数）来表示，该函数将元素映射到真值，因此，当一个元素在集合中或具有该属性时，该函数将该元素映射到真值。当一个陈述被断言时，说话者意味着它是真的，这意味着它是真的，这也表达了 s 将 x 映射到真值的断言和。换句话说，当且仅当。我们将作为表示真值类型的类型符号，因此我们可以将任何类型的函数称为类型α的元素集合。类型的函数是类型β的元素和类型α的元素之间的二元关系。例如，如果是自然数的类型，并且是自然数之间的顺序关系，则具有类型，对于所有自然数 x 和（我们通常写为当且仅当 x 小于 y 时，具有真值。当然，也可以将视为将每个自然数 x 映射到所有自然数 y 的集合，使得 x 小于 y。因此，集合、属性和关系可以被看作是特定类型的函数。丘奇的类型论因此是函数的逻辑，在这个意义上，它属于弗雷格的概念符号的工作传统。相反的方法是将函数归约为关系，这是怀特海德和罗素（1927a）在《数学原理》中采取的方法。

表示类型α的元素的表达式称为类型α的良构公式（wffs）。因此，类型论的陈述是类型α的 wffs。

如果是一个类型为α的 wff，其中不是自由的，则与之相关的函数为，记作。因此，是一个变量绑定符号，类似于或（当然意义完全不同）；λ被称为抽象运算符。表示的是一个函数，其对任意参数的值为，其中可能在中自由出现。例如，表示的是一个函数，其对任意自然数 n 的值为。因此，当我们将这个函数应用于数字 5 时，我们得到。

我们使用作为在中用替换的结果的表示法，并使用作为在中用替换所有自由出现的的结果的表示法。将替换为（或反之）的过程被称为β-转换，这是λ-转换的一种形式。当然，当是一个类型为的 wff 时，表示的是所有使得为真的元素的集合；这个集合也可以用表示。例如，表示的是所有使得 x 小于 y 的 x 的集合（以及如果一个数 x 小于 y 则它具有的属性）。在熟悉的集合论表示法中，

 将被写作

（根据真值的外延性公理，当  和  是类型  的时候，等价于 。）

命题连接词和量词可以被赋予类型，并且可以用这些类型的常量来表示。否定函数将真值映射到真值，因此它的类型是 。类似地，析取和合取（等等）是从真值到真值的二元函数，因此它们的类型是 。

语句  当且仅当集合  包含所有类型为α的元素时为真。可以引入一个常量  （对于每个类型符号  ）来表示集合的属性：集合  具有属性  当且仅当  包含所有类型为α的元素。根据这个解释，

应该是真的，以及

对于任何公式和变量。由于通过λ-转换，我们有

这个方程可以更简单地写成

因此，可以用来定义，并且λ是唯一需要的变量绑定器。

### 1.2 公式（作为特定术语）

在我们陈述“公式”的定义之前，需要提醒一点。读者可能习惯于将公式视为在形式语言中扮演断言角色的表达式，将术语视为指定对象的表达式。丘奇的术语略有不同，并提供了一种统一讨论多种不同类型表达式的方式。我们称之为α类型的良构公式（见下文）在更标准的术语中将被称为α类型的术语，然后只有某些术语，即具有类型的术语，才被称为公式。无论如何，在本条目中，我们决定沿用丘奇的原始术语。另一个注意事项涉及某些特定数学符号的使用。在接下来的内容中，本条目区分符号，和ι。第一个符号是用于表示个体类型的符号；第二个符号是用于逻辑常量的符号（见下文 1.2.1 节）；第三个符号是用作变量绑定运算符，表示确定描述“the”（见下文 1.3.4 节）。读者不应混淆它们，并检查浏览器是否正确显示这些符号。

#### 1.2.1 定义

类型符号的定义如下所示：

* 是一个类型符号（表示个体的类型）。还可以有其他原始类型符号，用于形式化学科，其中有多种个体类型是很自然的。
* 是一个类型符号（表示真值的类型）。
* 如果α和β是类型符号，则是一个类型符号（表示从类型β的元素到类型α的函数的类型）。

原始符号如下：

* 不适当的符号：[，]，
* 对于每个类型符号α，有一个可数的类型变量列表
* 逻辑常量：，，和（对于每个类型符号α）。这些常量的类型由它们的下标表示。符号表示否定，表示析取，并且在上面讨论的定义全称量词中使用。在下面的第 1.3.4 节和第 1.3.5 节中，用作描述或选择运算符。
* 此外，可能还有其他各种类型的特定常量，这些常量将被称为非逻辑常量或参数。每个参数的选择确定了类型论系统的特定表述。参数通常用作被形式化学科中特定实体的名称。

公式是一个有限的原始符号序列。某些公式被称为良构公式（wffs）。我们用作类型为α的 wff 的缩写，并按如下递归方式定义这个概念：

* 类型为α的原始变量或常量是一个 wff。
* 如果和是指定类型的 wffs，则是一个 wff。
* 如果是类型β的变量，而是一个 wff，则是一个 wff。

注意，例如，通过(a)是一个 wff，所以通过(b)如果是一个 wff，则是一个 wff。通常，后一个 wff 将简单地写为。通常方便起见，我们可以避免使用括号、方括号和类型符号，并使用省略它们的约定。对于公式，我们使用向右结合的约定，并且我们可以写而不是。对于类型，相应的约定是类似的。

##### 缩写：

* 代表 .
* 代表 .
* 代表 .
* 其他命题连接词和存在量词的定义方式与熟知的方式相同。特别地，
* 代表 xy.
* 代表着。

最后一个定义被称为莱布尼兹的等同定义。它断言如果 y 具有 x 的每个属性，那么 x 和 y 是相同的。实际上，莱布尼兹称他的定义为“无法区分的同一性”，并以双条件形式给出：如果 x 和 y 具有完全相同的属性，则 x 和 y 是相同的。很容易证明这两种形式的定义在逻辑上是等价的。

#### 1.2.2 个例

现在我们提供一些例子来说明如何在丘奇的类型论中表达各种断言和概念。

例子 1 要表达“拿破仑有魅力”的断言，我们引入常量和，其类型由下标指示，并具有明显的含义，并断言 wff

如果我们希望表达“拿破仑具有伟大将军的所有属性”的断言，我们可以考虑将其解释为“拿破仑具有某个伟大将军的所有属性”，但更合适的解释是将该陈述解释为“拿破仑具有所有伟大将军所具有的属性”。如果将常量添加到形式语言中，则可以通过 wff 来表达

作为这种属性的一个例子，我们注意到句子“拿破仑的士兵们钦佩他”可以通过类似的方式用 wff 表达

通过λ-转换，这等同于

这个陈述断言拿破仑拥有的属性之一是被他的士兵钦佩。属性本身由 wff 表达

示例 2 我们用以下寓言来说明类型论的一些潜在应用。

> 一个富有而有些古怪的女士名叫希拉，她有一只鸵鸟和一只猎豹作为宠物，她希望将它们从她的酒店带到她偏远且几乎无法到达的农场。旅程的各个部分可能涉及使用电梯、货车、飞机、卡车、非常小的船只、驴车、吊桥等等，而她和宠物们并不总是在一起。她知道当她不在它们身边时，不能让鸵鸟和猎豹在一起。

我们考虑如何将这个问题的某些方面形式化，以便希拉可以使用自动推理系统来帮助分析可能性。

There will be a set *Moments* of instants or intervals of time during the trip. She will start the trip at the location  and moment , and end it at the location  and moment . Moments will have type , and locations will have type . A *state* will have type  and will specify the location of Sheila, the ostrich, and the cheetah at a given moment. A *plan* will specify where the entities will be at each moment according to this plan. It will be a function from moments to states, and will have type . The exact representation of states need not concern us, but there will be functions from states to locations called , , and  which provide the indicated information. Thus,  will be the location of Sheila according to plan  at moment . The set  is the set of plans Sheila is considering.

We define a plan *p* to be acceptable if, according to that plan, the group starts at the hotel, finishes at the farm, and whenever the ostrich and the cheetah are together, Sheila is there too. Formally, we define  as

We can express the assertion that Sheila has a way to accomplish her objective with the formula

示例 3 现在我们提供一个数学示例。数学思想可以在类型论中表达，而不引入任何新的常量。函数 f 从一个集合到它自身的迭代是一个将 f 应用一次或多次的函数。例如，如果 ，那么 g 是 f 的一个迭代。表示是的一个迭代。定义为（归纳地）

因此，如果 g 在包含 f 和包含函数（即 f 与 g 的复合）的每个函数集合 p 中，则 g 是 f 的一个迭代。

f 的不动点是一个元素 y，使得。

可以证明，如果函数 f 的某个迭代有一个唯一的不动点，则 f 本身也有一个不动点。这个定理可以用 wff 来表示。

参见 Andrews 等人 1996 年的讨论，了解如何自动证明被称为 THM15B 的定理。

例 4 哲学中的一个例子是哥德尔对上帝存在的本体论论证的变体。这个例子说明了两个有趣的方面：

* Church’s type theory can be employed as a meta-logic to concisely embed expressive other logics such as the higher-order modal logic assumed by Gödel. By exploiting the possible world semantics of this target logic, its syntactic elements are defined in such a way that the infrastructure of the meta-logic are reused as much as possible. In this technique, called *shallow semantical embedding*, the modal operator , for example, is simply identified with (taken as syntactic sugar for) the λ-formula
  where  denotes the accessibility relation associated with  and type  is identified with possible worlds. Moreover, since  is shorthand in Church’s type theory for , the modal formula
  is represented as
  其中  代表λ项
  并且  按照上述描述得到解决。上述选择的  实现了可能主义的量化概念。通过在元逻辑中引入一个二元的“存在”谓词，并将该谓词作为  的定义中的附加保护条件，可以获得实在主义的量化概念。表达嵌入式模态公式  在全局上有效的方式是通过公式  来捕捉的。局部有效性（以及实在性）可以建模为 ，其中  是一个名词（元逻辑中的常量符号），表示一个特定的可能世界。
* 上述技术可以用于在高阶模态逻辑中对哥德尔的本体论论证进行自然编码和自动评估，这将展开为 Church 的类型论中的公式，从而可以应用高阶定理证明器。更多详细信息请参见 SEP 条目中的第 6 节（逻辑与哲学）和第 5.2 节；此外，还可以参考 Benzmüller＆Woltzenlogel-Paleo 2014 和 Benzmüller 2019。

例 5 假设我们在 wffs 的定义中省略了类型符号的使用。那么我们可以写出公式 ，我们将其称为 。它可以被看作是表示所有集合 x 的集合，使得 x 不在 x 中。然后我们可以考虑公式 ，它表达了自身在内的断言。我们可以清楚地证明 ，因此通过λ-转换我们可以推导出 ，这是一个矛盾。这就是罗素悖论。罗素对这个悖论的发现（罗素 1903 年，101-107 页）在类型论的发展中起到了关键作用。当然，当存在类型符号时，不是良构的，矛盾不能被推导出来。

### 1.3 公理和推理规则

#### 1.3.1 推理规则

1. 字母变量的改变 -转换）。将 wff 的任何良好形成的部分替换为，前提是不出现在中并且不在中被绑定。
2. β-收缩。将 wff 的任何良好形成的部分替换为，前提是的绑定变量与和的自由变量都不相同。
3. β-扩展。如果可以从中通过单次应用β-收缩推断出，则从中推断出。
4. 替换。从中推断，前提是不是的自由变量。
5. 模态蕴涵。从和中推断。
6. 概括。从中推断，前提是不是的自由变量。

#### 1.3.2 初等类型论

我们首先列出我们所称之为初等类型论的公理。

初等类型论的定理是那些可以通过推理规则从公理中推导出来的定理，对于所有类型符号。我们有时将初等类型论称为。它包含了命题连接词、量词和λ-转换的逻辑在类型论的背景下。

为了说明上述引入的规则和公理，我们在中给出了一个简短而琐碎的证明。在证明的每个公式后面，我们指示了它是如何推导出来的。（实际上，这个证明非常低效，因为第 3 行后面没有使用，第 7 行可以直接从第 5 行推导出来，而不使用第 6 行。为了说明一些相关的方面，额外的证明行已经插入进来。为了易读性，这个证明中的许多括号已经被删除。勤奋的读者应该能够恢复它们。）

ββαβ

注意，第 3 行可以写成

第 7 行可以写成

因此，我们推导出了一个众所周知的量化理论定律。我们通过考虑一个牧场主把一些马放进围栏并离开一整晚的情况来说明第 wff 行的一种可能解释（与公理 E6 密切相关）。后来，他忘记了是否关上了围栏的门。在思考这种情况时，他得出了一个结论，可以在第行表达出来，如果我们把马看作是类型的元素，将“门关上了”解释为“the gate was closed”，并将“离开了围栏”解释为“left the corral”。根据这种解释，第行说

> 如果每匹马都是真的关上了门或者每匹马都离开了围栏，那么门就是关上了或者每匹马都离开了围栏。

在上面列出的公理的基础上，我们添加下面的公理以获得丘奇的类型论。

#### 1.3.3 外延性公理

布尔和函数外延性的公理如下：

丘奇在他 1940 年的公理列表中没有包括公理 Axiom，但他提到了可能包括它。亨金在他 1950 年的著作中包括了它。

#### 1.3.4 描述

 表达式

 代表

 例如，

 代表

通过λ-转换，这等同于

通过λ-转换减少为

这断言存在一个唯一的元素，它具有属性 。从这个例子中我们可以看到，一般来说，  表达了“存在一个唯一的  使得 ”的断言。

当存在唯一的这样的元素时，使用符号ι来表示表达式“满足条件的”。罗素在怀特海德和罗素 1927b 中展示了如何为这样的符号提供上下文定义，以他的类型论公式化。在丘奇的类型论中，ι被定义为。因此，ι的行为类似于变量绑定运算符，但它是通过逻辑常量来定义的。因此，λ仍然是唯一需要的变量绑定运算符。

由于描述被称为描述运算符。与此符号相关的是以下内容：

##### 描述公理：

这个说法是当集合  有一个唯一的成员时，那么  就在  中，并且是那个唯一的成员。因此，这个公理断言  将单元素集映射到它们的唯一成员。

如果从某些假设中可以证明

那么通过使用公理  可以推导出

也可以写作

ι

我们通过一个小例子来说明描述符的有用性。假设我们已经形式化了实数的理论，并且我们的理论有常量和来分别表示数字 1 和乘法函数。（这里是实数的类型。）为了表示乘法的逆函数，我们可以定义 wff 为

ι

当然，在传统的数学符号中，我们不会写类型符号，并且我们会写成并写成 。因此，被定义为使得 的 x。当可以证明 Z 不等于 0 时，我们将能够证明 和 ，但如果我们无法证明 Z 不等于 0，关于 将无法证明任何重要的事情。

#### 1.3.5 选择公理

选择公理可以在丘奇的类型论中表示如下：

选择函数从每个非空集合中选择一个元素，该元素被指定为集合的一个元素。当这种形式的选择公理被包含在公理列表中时，被称为选择运算符而不是描述运算符，而当存在某个元素时，ι表示“一个这样的α”。这些选择运算符与希尔伯特的运算符（希尔伯特 1928）具有相同的含义。然而，我们在这里为每种类型α提供一个这样的运算符。

在ι表示“这样的α”时，在上下文中将其称为明确描述运算符，在ι表示“一个这样的α”时，在上下文中将其称为不确定描述运算符。

显然，选择公理蕴含了描述公理，但有时类型论的表述中包含了描述公理，但不包含选择公理。

选择公理的另一种表述只是明确地断言了选择函数的存在，而没有明确命名它：

通常，在类型论中假设选择公理时，将其作为公理模式，并为每个类型符号α断言 AC。类似的评论也适用于外延性和描述的公理。然而，基于解析的现代 Church 类型论的证明系统实际上避免了添加此类公理模式的原因，原因在下面的第 3.4 节和第 4 节中进一步解释。它们使用更受限制的、目标导向的证明规则。

在继续之前，我们需要介绍一些术语。类型论是丘奇的类型论的另一种表述，将在第 1.4 节中进行描述，并且等同于使用公理（1）-（8）描述的系统。如果一个类型符号中只包含和括号，则它是命题性的。

Yasuhara（1975）将类型之间的关系“”定义为最小关系的自反传递闭包，使得和。他证明了以下结论：

* 如果，则 AC AC。
* 给定一组类型的集合 S，其中没有一个是命题的，如果且仅当存在某个β属于 S 时，存在一个模型使得 AC 失败。

因此，“更高级”类型的选择函数的存在意味着“更低级”类型的选择函数的存在，反之则通常不成立。

Büchi（1953）已经证明，虽然表达选择公理和佐恩引理的模式可以相互推导，但涉及的特定类型之间的关系是复杂的。

#### 1.3.6 无穷公理

在类型论中，可以定义自然数（以及其他基本数学结构，如实数和复数），但要证明它们具有所需的属性（如皮亚诺公理），就需要一个无穷公理。关于这样的公理有许多可行的可能性，比如在丘奇 1940 年的讨论中，丘奇 1956 年的第 57 节，以及安德鲁斯 2002 年的第 60 节。

### 1.4 基于等式的表述

在 1.2.1 节中，类型和令牌被视为原始常量，并且表示类型α的相等关系的 wffs 是根据这些定义的。我们现在提出了 Church 类型论的另一种表述，其中有表示相等关系的原始常量和，而是根据的定义。

Tarski（1923）指出，在高阶逻辑的背景下，可以根据逻辑等价和量词来定义命题连接词。Quine（1956）展示了在 Church 类型论的背景下，可以根据相等性和抽象运算符λ来定义量词和连接词。Henkin（1963）重新发现了这些定义，并基于相等性发展了一个基于命题类型的 Church 类型论的表述。Andrews（1963）简化了该系统的公理。

基于这些思想，可以证明与前面章节 1.2.1-1.3.4 中使用公理（1）-（8）的 Church 类型论的表述等价。因此，本节提供了前面章节 1.2.1-1.3.4 中材料的另一种选择。关于的更多细节可以在 Andrews 2002 中找到。

#### 1.4.1 定义

* 类型符号、不当符号和变量的定义如第 1.2.1 节所述。
* 逻辑常量的定义为  和  （对于每个类型符号α）。
* 类型论中将 Wffs 定义为第 1.2.1 节中的内容。

##### 缩写：

* 代表
* 代表 AB
* 代表
* 代表
* 代表
* 代表
* 代表
* 代表
* 代表

表示真实。在 1.1 节中讨论了的含义。要看到这个定义是合适的，注意表示类型α的所有元素的集合，表示，分别表示。因此，断言是类型α的所有元素的集合，因此包含所有类型α的元素。可以看出也可以写成，它断言一切都是真的。这是错误的，所以表示假。表达式可以用来表示有序对，当且仅当和都为真时，合取式为真，即当。因此可以用公式表示。

其他命题连接词，如 ，以及存在量词 ，可以很容易地定义。通过使用 ，可以为所有类型 α 定义描述运算符 。

#### 1.4.2 公理和推理规则

具有单一的推理规则。

> 规则 R: 从和中推断出将中的一个出现替换为的结果，前提是中的出现不是（一个变量的出现）紧接着的λ。

的公理如下：

公理中的附加条件确保替换不会导致 A 中的自由变量在替换结果中被绑定。

## 2. 语义学

将类型论的语义与一阶逻辑的语义进行比较是很自然的，其中定理恰好是在所有解释中都有效的公式。从直观的角度来看，类型论的自然解释是标准模型，其定义如下。然而，哥德尔的不完全性定理（哥德尔 1931 年）表明，公理（1）-（9）不足以推导出在所有标准模型中都有效的所有公式，并且没有一致递归公理化的扩展能够满足这一目的。然而，经验表明，这些公理对于大多数目的是足够的，而 Leon Henkin 考虑了澄清它们在何种意义上是完备的问题。下面的定义和定理构成了 Henkin（1950 年）对这个问题的解决方案，通常被称为一般语义学或 Henkin 语义学。

一个框架是一组非空域（集合）的集合，每个类型符号α对应一个域，满足（其中表示真，表示假），是一些映射到的函数的集合。的成员被称为个例。

一种解释由一个框架和一个函数组成，该函数将类型为α的每个常量 C 映射到一个适当的元素，称为 C 的指称。逻辑常量被赋予它们的标准指称。

将值分配给变量的一种方式是一个函数，对于每个变量都有。 （符号表示：分配将变量 x 映射到值 a，并且对于与 x 不同的所有其他变量符号，它与相同。）

如果存在一个二元函数，对于每个分配和 wff，满足以下条件，则解释是一个一般模型（又称 Henkin 模型）：

* 对于每个变量。
* 如果是一个原始常量。
* （函数在参数处的值。
* 从  到  的函数，其对于每个参数的值为  ，其中  是这样的赋值，使得  和  如果  。

如果一个解释是一个一般模型，那么函数是唯一确定的。称为在关于 的值。

可以很容易地证明以下陈述在所有一般模型  中对于所有赋值  和所有公式  和  成立：

* 和
* 当且仅当
* 当且仅当 或者
* 当且仅当
* 当且仅当
* 当且仅当
* 当且仅当对于所有
* 当且仅当存在一个  使得

一般模型的语义如预期那样。然而，关于任意类型α的以下条件需要注意到一个细微之处：

* [相等性] 当使用 1.2.1 节的定义时，其中相等性是以莱布尼兹原理来定义的，那么这个陈述并不适用于所有类型α。只有当我们额外要求域包含所有类型α的单位集合，或者域包含类型α上的相应身份关系（这意味着前者）时，它才成立。这个额外要求的必要性在 Henkin（1950）的原始工作中没有包含，但在 Andrews 1972a 中已经证明了。

相反，当使用 1.4 节的替代定义时，由于逻辑常量在签名中的存在，这个要求显然是满足的。根据定义，逻辑常量在类型α的对象上表示相应的身份关系，并且在每个一般模型中都可以轻松确保它们的存在。因此，在 Church 的类型论的具体基本系统的选择中，始终假设原始的相等性常量（对于每个类型α）是一个自然的选择，就像在 Andrews 的系统中实现的那样。

When instead the alternative definitions of [Section 1.4](https://plato.stanford.edu/entries/type-theory-church/#FormBaseEqua) are employed, then this requirement is obviously met due to the presence of the logical constants  in the signature, which by definition denote the respective identity relations on the objects of type α and therefore trivially ensure their existence in each general model . It is therefore a natural option to always assume primitive equality constants (for each type α) in a concrete choice of base system for Church’s type theory, just as realized in Andrews’ system .

解释是一个标准模型，当且仅当对于所有的α，是从到的所有函数的集合。显然，标准模型是一个一般模型。

我们说一个公式在一个模型中是有效的，当且仅当对于每个分配，都成立。一个一组公式的模型是一个模型，在其中每个公式都是有效的。

一个公式在一般[标准]意义上是有效的，当且仅当在每个一般[标准]模型中都是有效的。显然，一个在一般意义上有效的公式也在标准意义上有效，但是这个陈述的逆否命题是错误的。

完备性和健全性定理（Henkin 1950）：当且仅当一个公式在一般意义上是有效的时，它才是一个定理。

并非所有的框架都属于解释，也并非所有的解释都是一般模型。为了成为一般模型，一个解释必须具有满足某些闭包条件的框架，这些条件在 Andrews 1972b 中进一步讨论。基本上，在一个一般模型中，每个公式必须对每个赋值都有一个值。

如果一个模型的个体域是有限的，则称其为有限模型。对于任何有限模型，都是标准的（Andrews 2002，定理 5404），但是对于任何具有无限模型的句子集合，也存在非标准模型（Andrews 2002，定理 5506）。

区分标准模型和非标准模型的理解可以澄清许多现象。例如，可以证明存在一个模型，其中是无限的，而所有的域都是可数的。因此和都是可数无限的，所以它们之间必须存在一个双射 h。然而，康托尔定理（在类型论中可证明，因此在所有模型中有效）表明，的子集比其成员更多。这种看似矛盾的情况被称为斯科勒姆悖论。通过仔细观察康托尔定理，即，并考虑它在模型中的含义，可以解决这个问题。该定理表明，不存在一个从到的函数，使得其范围中包含每个集合。该陈述的通常解释是在基数上，比更大。然而，在这个模型中，它实际上意味着 h 不能在中。当然，必须是非标准的。

虽然选择公理在所有标准模型中可能是真的，但在一个非标准模型中，AC 是假的（Andrews 1972b）。因此，AC 在中是不可证的。

到目前为止，对于丘奇的类型论的模型论研究远远不及一阶逻辑。尽管如此，已经有一些关于构造类型论的非标准模型和其中各种形式的外延性失败的模型的方法的研究，以及关于对具有任意（可能不完备）逻辑常量集的理论的模型的研究，并且正在发展关于各种公理系统相对于各种模型类的完备性的一般方法。相关论文包括 Andrews 1971, 1972a,b 和 Henkin 1975。进一步相关工作可在 Benzmüller et al. 2004, Brown 2004, 2007 和 Muskens 2007 中找到。

## 3. 元理论

### 3.1 Lambda-转换

在 1.3.1 节中的前三个推理规则被称为λ-转换规则。如果和是合式公式，我们写作，表示可以通过应用这些规则将转换为。这是合式公式之间的等价关系。合式公式处于β-正规形式当且仅当它没有形式为的合式部分。每个合式公式都可以转换为一个β-正规形式的合式公式。事实上，合式公式的每个收缩序列（应用规则 2，并根据需要与绑定变量的字母更改相结合）都是有限的；显然，如果这样的序列无法扩展，它将以一个β-正规形式的合式公式终止。（这被称为强正规化定理。）根据丘奇-罗瑟定理，这个β-正规形式的合式公式在绑定变量的字母更改模下是唯一的。对于每个合式公式，我们用表示第一个（在某个枚举中）β-正规形式的合式公式，使得。那么当且仅当。

通过使用外延公理，可以得到以下推导规则：

> -收缩。将 wff 的一个良好形成的部分替换为，前提是在中不自由出现。

这个规则及其逆（称为-扩展）有时被用作λ转换的附加规则。有关λ转换的更多信息，请参见 Church 1941 年，Stenlund 1972 年，Barendregt 1984 年和 Barendregt 等人 2013 年的资料。

值得一提（再次）的是，λ-抽象取代了丘奇的类型论中对理解公理的需求。

### 3.2 高阶一致化

高阶一致化中的挑战被简要概述。关于这个主题的更多细节可以在 Dowek 2001 中找到；它在高阶定理证明器中的应用也在 Benzmüller＆Miller 2014 中讨论。

定义。一对 wffs 的高阶一致化器是一个替换自由变量出现的替换，使得和具有相同的β-正规形式。一组 wffs 的高阶一致化器是该组中每对的一致化器。

高阶一致化与一阶一致化（Baader＆Snyder 2001）在许多重要方面有所不同。特别是：

1. 即使一对 wffs 存在一致化器，也可能没有最一般的一致化器（Gould 1966）。
2. 高阶一致性是不可判定的（Huet 1973b），即使在“二阶”情况下也是如此（Goldfarb 1981）。

然而，已经设计出了一种算法（Huet 1975，Jensen＆Pietrzykowski 1976），称为预一致性，如果存在，则可以为一组 wffs 找到一个一致器。 Huet 过程计算的预一致器是可以将原始一致性问题减少为仅涉及所谓的 flex-flex 一致性对的替换。 Flex-flex 对在要统一的两个术语中都具有变量头符号，并且已知它们总是有解。因此，这些解的具体计算可以推迟或省略。预一致性在第 4 节提到的所有基于解析的定理证明器中都得到了利用。

模式一致性是指一小部分一致性问题，由 Miller 1991 首次研究，其识别对于实际系统的构建非常重要。在模式一致性问题中，每个存在量化变量的出现都应用于由λ绑定器或全称量词绑定的所有不同变量的参数列表。因此，存在量化变量不能应用于一般术语，而是应用于非常受限的一组绑定变量。模式一致性与一阶一致性一样，是可判定的，并且可解问题存在最一般的一致器。这就是为什么在某些最先进的 Church 类型论定理证明器中，优先使用模式一致性（如果适用）的原因。

### 3.3 一个统一原理

统一原理是在 Smullyan 1963 年引入的（参见 Smullyan 1995 年），作为推导关于一阶逻辑的一些基本元定理的工具。该原理被 Andrews（1971 年）扩展到了初等类型论，并被 Benzmüller，Brown 和 Kohlhase（2004 年）扩展到了外延类型论，即 Henkin 的一般语义学中没有描述或选择。我们将在下面更详细地概述这些扩展。

#### 3.3.1 初等类型论

统一原理在安德鲁斯 1971 年被扩展到基本类型论（第 1.3.2 节的系统）中，应用了 1967 年高桥的思想。这个统一原理已经被用来建立安德鲁斯 1971 年的消除割除和 Huet 1973a、Kohlhase 1995 和 Miller 1983 中各种类型论系统的完备性证明。我们首先给出一个定义，然后陈述这个原理。

定义。有限 wffs 的性质是一个抽象的一致性属性，当且仅当对于所有有限 wffs 的集合，以下属性成立（对于所有 wffs A，B）：

1. 如果，那么不存在原子使得和。
2. 如果 , 那么 .
3. 如果 , 那么 .
4. 如果 , 那么  或者 .
5. 如果 , 那么 .
6. 如果 , 那么  对于每个公式 .
7. 如果 , 那么 , 对于任何不在  或任何公式 中自由出现的变量或参数 .

注意一致性是一个抽象的一致性属性。

统一原则适用于。如果是一个抽象的一致性属性，并且，则在中是一致的。

这是统一原则的一个典型应用。假设有一个可以用来反驳句子集的过程，并且我们希望证明它对是完备的。对于任何句子集，让意味着不可被反驳，然后证明是一个抽象的一致性属性。现在假设是的定理。那么在中是不一致的，所以根据统一原则不是，所以可以被反驳。

#### 3.3.2 Extensional Type Theory

自上世纪 90 年代中期以来，对于具有一般语义的丘奇类型论的统一原理的扩展进行了研究。最初的动机是为了支持新兴的高阶自动定理证明器（见下文第 4 节）的（反驳）完备性调查。最初的兴趣集中在丘奇类型论的一个片段上，称为外延类型论，其中包括外延性公理，但不包括描述和选择公理（当时自动定理证明器在很大程度上忽略了描述和选择）。与之前类似，我们区分了具有定义相等性的外延类型论（如第 1.2.1 节中通过莱布尼兹原理定义相等性）和具有原始相等性的外延类型论（例如，第 1.4 节中的系统，或者基于逻辑常量和第 1.2.1 节中的's，但添加了额外的原始逻辑常量）。

Kohlhase 1993 年提出了关于具有原始相等性的外延类型论的统一原理的首次尝试。那里给出的条件仍然不完整[1]，随后进行了修改和补充，如下所示：

* 为了获得具有定义相等性的外延类型论的统一原理，Benzmüller 和 Kohlhase 1997 年在上述条件 1.-7.的基础上添加了以下条件：布尔外延性、函数外延性和饱和度（为了技术原因，他们在条件 2 上还采用了稍微强一点的基于β-转换而不是β-归一化的变体）：
  8.  如果，则或
  8. 如果，则对于任何不在中自由出现的参数。
  8.  或者

  饱和条件 10.是必要的，以正确建立原则。然而，由于这个条件与证明论的消去割的概念有关，它限制了该原则在面向机器的演算的完备性证明中的实用性。然而，该原则仍然被用于 Benzmüller＆Kohlhase 1998a 和 Benzmüller 1999a，b 中，以获得关于外延高阶消解系统的完备性证明。该原则还被应用于 Kohlhase 1998 中，以研究相关的外延高阶表演演算的完备性，其中 Leibniz 等式的外延性规则是从 Benzmüller＆Kohlhase 1998a 和 Benzmüller 1997 中改编的。
* 在 Benzmüller 1999a 中，提出了实现具有原始相等性的外延类型论的统一原则的不同选项（在这项工作中，除了和之外，还使用了原始逻辑常量；在高阶定理证明器中，这种冗余的逻辑常量选择并不罕见）。一种选择是引入自反性和替代性条件。另一种选择是将自反性条件与将原始相等性与定义相等性连接起来的条件相结合，以便替代性条件得出。请注意，在这种情况下，当然仍然可以基于 Leibniz 原则引入定义的相等性的概念（本节的其余部分将用表示定义的相等性，以正确区分它与原始相等性）。
  8.  不是
  8.  如果 , 那么
  8.  或者

  饱和条件 10.仍然必须独立于考虑的选项而添加。该原则在 Benzmüller 1999a,b 中应用于证明基于高阶自动定理证明器 LEO 及其后继者 LEO-II 的外延高阶 RUE-resolution[3]演算的完备性。
* 在 Benzmüller 等人 2004 年的论文中，该原则以一种非常普遍的方式呈现，允许在基本类型论和外延类型论之间的范围内处理外延性和相等性的各种可能性。该原则被应用于获得与自然推理演算相关的完备性证明。饱和条件在这项工作中仍然被使用。
* 基于 Brown（2004 年，2007 年）论文中的见解，Benzmüller，Brown 和 Kohlhase 2009 年提出了一种通过两个较弱条件替代不可取的饱和条件的解决方案；该工作还进一步研究了饱和和削减之间的关系。这两个较弱的条件被称为交配和分解，它们在面向机器的演算的完备性证明中比饱和更容易证明（省略第二个条件中的一些类型信息并滥用符号表示）。

  1. 如果对于原子和，那么
  2. 如果，其中头符号是一个参数，那么存在一个，使得。

  修改后的原理应用于 Benzmüller 等人 2009 年的研究中，以展示具有定义的相等性的外延类型论的序列演算的完备性。
* 一种进一步扩展的具有原始相等性的外延类型论统一原理被提出并在 Backes＆Brown 2011 中用于证明包含选择公理的类型论的表演演算的完备性。
* 一个密切相关且进一步简化的原理也在 Steen 2018 中被提出和研究，其中它被应用于证明作为定理证明器 Leo-III（Steen＆Benzmüller 2018, 2021）基础的参数模拟演算的完备性。

### 3.4 割除和割除模拟

丘奇的类型论的消去证明（另请参阅关于证明论的 SEP 条目），通常与其他类型论的证明（Takahashi 1967, 1970; Prawitz 1968; Mints 1999）密切相关，可以在 Andrews 1971、Dowek & Werner 2003 和 Brown 2004 中找到。在 Benzmüller 等人的 2009 年的研究中，展示了如何使用某些公式，例如外延公理、描述、选择（参见 1.3.3 至 1.3.5 节）和归纳，来证明基本类型论的无割证据演算中的割的合理性。此外，该研究引入了割模拟和割强公理的概念，并讨论了在面向机器的演算中省略定义的相等性以及消除割强公理（例如，通过用更受限制的、目标导向的规则替换它们）以减少割模拟效应的需求，这是高阶自动定理证明的一个重大挑战。换句话说，在面向机器的证明演算中包含割强公理与包含割规则本质上一样糟糕，因为割规则可以通过它们来模拟。

### 3.5 展开证明

展开证明是一阶逻辑定理的 Herbrand 展开概念的推广；它提供了一个非常优雅、简洁和非冗余的表示，描述了定理与通过适当的量词实例化从中得到的一个永真式之间的关系，这个永真式是定理的各种证明的基础。Miller（1987）证明了，如果一个公式是基本类型论的定理，则它具有一个展开证明。

在 Brown 2004 年和 2007 年的研究中，这个概念被推广为扩展证明的概念，以获得涉及具有外延性的类型论的类似定理。

### 3.6 决策问题

由于类型论包括一阶逻辑，所以大多数类型论系统是不可判定的并不令人意外。然而，我们可以寻找决策问题的可解特殊情况。例如，通过在  中添加额外的公理  所得到的系统是可判定的。

虽然基本类型论系统在某些方面类似于一阶逻辑，但它是一种更复杂的语言，对于可证明性的特殊情况，似乎相当棘手。关于这个决策问题的一些非常特殊情况的信息可以在 Andrews 1974 中找到，现在我们对此进行总结。

如果一个形式为的公式是的定理，当且仅当存在一个替换，使得。特别地，当且仅当，这解决了形式的公式的决策问题。当等价性公理被添加到时，只有平凡的等式公式才能被证明。当且仅当存在一个形式为的公式，使得，但是形式的公式的决策问题是不可解的。

当且仅当是重言式时，形式为的公式（其中是无量词的）在中是可证明的。另一方面，形式为的公式（其中是无量词的）的决策问题是不可解的（相比之下，带有函数符号的一阶逻辑中的相应决策问题是已知可解的（Maslov 1967）。）由于无关或空泛的量词总是可以引入，这表明仅由前缀的结构定义的前束范式中没有存在量词出现的公式类是可解的。

## 4. 自动化

### 4.1 面向机器的证明演算

近年来，针对丘奇的类型论的机器导向证明演算的发展和改进取得了很大进展；例如，参考下面给出的基于超级位置的演算的参考文献。挑战显然比一阶逻辑要大得多。丘奇的类型论的术语语言在实际上更具表达力，导致了比一阶逻辑更大、更复杂且更难以遍历的证明搜索空间。此外，请记住，一阶定理证明中非常重要的控制和过滤机制——统一（unification）在类型论中是不可判定的（一般情况下）；请参见第 3.2 节。然而，积极的一面是，在丘奇的类型论中有机会找到比一阶逻辑中更短的证明。这在 Boolos 1987 中用一个小的具体例子得到了很好的说明，对于该例子，现在似乎可以完全自动化地进行证明（Benzmüller 等人，2023 年）。

显然，需要进一步的进展来进一步利用现有的丘奇类型论和它们的实现的实际相关性（见第 4.3 节）。挑战包括

* 对丘奇类型论的不可预测性进行适当处理（在完整的证明过程中通常无法避免某种形式的盲目猜测，但必须进行智能引导），
* 消除/减少由搜索空间中的定义相等性或剪切强公理（例如，外延性，描述，选择，归纳）引起的剪切模拟效应（见第 3.4 节），
* 统一的普遍不可判定性，使其成为一个相当有问题的过滤机制，用于控制证明搜索，
* 发明适合的启发式方法来遍历搜索空间，
* 提供适当的术语排序及其在术语重写过程中的有效利用，
* 以及高效的数据结构，结合强大的技术支持，用于λ-转换、替换和重写等基本操作。

计划在本文的未来版本中进一步阐述针对丘奇类型论的面向机器的证明演算。然而，目前我们只提供一些历史和最近的参考资料供感兴趣的读者参考（详见下面的第 5 节）：

* 推理演算：Schütte 1960；Takahashi 1970；Takeuti 1987；Mints 1999；Brown 2004、2007；Benzmüller 等人 2009 年。
* 配对方法：Andrews 1981; Bibel 1981; Bishop 1999.
* 分辨率演算：Andrews 1971; Huet 1973a; Jensen & Pietrzykowski 1976; Benzmüller 1997, 1999a; Benzmüller & Kohlhase 1998a.
* 表格法：Kohlhase[ 4] 1995, 1998; Brown & Smolka 2010; Backes & Brown 2011.
* 参数演绎计算：Benzmüller 1999a,b; Steen 2018, Steen & Benzmüller 2018, 2021.
* 超位置演绎计算：Bentkamp et al. 2018, Bentkamp et al. 2021, Bentkamp et al. 2023a,c
* 基于组合子的超位置演绎计算：Bhayat & Reger 2020

### 4.2 证明助手

早期用于证明丘奇类型论（或其扩展）定理的计算机系统包括 HOL（Gordon 1988；Gordon＆Melham 1993），TPS（Andrews 等 1996；Andrews＆Brown 2006），Isabelle（Paulson 1988, 1990），PVS（Owre 等 1996；Shankar 2001），IMPS（Farmer 等 1993），HOL Light（Harrison 1996），OMEGA（Siekmann 等 2006）和λClam（Richardson 等 1998）。支持更强大的依赖类型论的著名证明助手包括 Coq（Bertot＆Castéran 2004）和最近的 Lean 系统（de Moura＆Ullrich 2021）。有关这些和其他证明者的更多信息，请参见下面的其他互联网参考资料部分。

上述早期系统中的大多数（至少最初）侧重于交互式证明。然而，特别是 TPS 项目自 20 世纪 80 年代中期以来一直致力于使用配对方法将 ND 风格的交互式证明与自动定理证明集成，并研究了两者之间的证明转换技术。这项研究在 20 世纪 90 年代进一步加强，当时其他项目研究了各种解决方案，例如证明规划和使用所谓的锤子工具与外部定理证明器之间的桥梁。当时开发的锤子工具是今天非常成功的锤子工具（如 Sledgehammer，HolyHammer 和相关系统）的早期先驱（Blanchette 等 2013，Kaliszyk＆Urban 2015 和 Czaika＆Kaliszyk 2018）。

尽管受到上述动态的触发，晚期的 80 年代和 90 年代在自动化丘奇类型论方面取得了一些初步进展，但当时的资源投入和成就远远落后于一阶定理证明中所见到的情况。只有后来才取得了良好的进展，特别是通过开发一种通用支持的丘奇类型论语法，称为 TPTP THF（Sutcliffe＆Benzmüller 2010，Sutcliffe 2022），以及从 2009 年开始，在每年的 CASC 竞赛中包括 TPTP THF 部分（类似于自动定理证明的世界锦标赛；有关详细信息，请参见 Sutcliffe 2016）。这些竞赛与其他因素结合起来，引发了对完全自动化丘奇类型论的越来越大的兴趣。最近，使用超越法证明基于等式的定理证明以及将 SMT 技术应用于 HOL 的探索取得了特别成功。

### 4.3 自动定理证明器

介绍了一些适用于丘奇类型论的定理证明器。重点是那些过去成功参加 TPTP THF CASC 竞赛的系统，并且演示顺序是由它们首次参加 CASC 的时间决定的。大多数提到的系统的最新版本可以通过 SystemOnTPTP 基础设施（Sutcliffe 2017）在线访问。几乎所有提到的系统都以 TPTP TSTP 语法生成可验证的证明证书。

TPS 证明器（Andrews 等人，1996 年，Andrews＆Brown，2006 年）可用于自动、交互式或半自动地证明基本类型论或外延类型论的定理。在自动搜索证明时，TPS 首先搜索定理的扩展证明（Miller，1987 年）或外延扩展证明（Brown，2004 年，2007 年）。这个过程的一部分涉及搜索可接受的配对（Andrews，1981 年，Bishop，1999 年）。TPS 的行为由一组标志（也称为模式）控制。最新版本的 TPS 采用了简单的调度机制，按顺序运行大约五十个模式，每个模式运行一定的时间。TPS 是 2009 年第一届 THF CASC 竞赛的获胜者。

LEO-II 证明器（Benzmüller 等人，2015 年）是 LEO 的继任者（Benzmüller＆Kohlhase，1998b），LEO 是与 OMEGA 证明助手（LEO 代表 OMEGA 的逻辑引擎）硬件连接的。这些证明器基于 Benzmüller 1999a，b 中开发的 RUE-Resolution 演算。LEO 是第一个实现外延性演算规则以避免剪切模拟效应的证明器。LEO-II 继承并调整了这些规则，并提供了描述和选择的附加演算规则。该证明器在内部与一阶证明器（首选 E）和 SAT 求解器合作，开创了合作的高阶/一阶证明自动化。由于该证明器通常在自己的子句集合中无法找到反驳，而该集合不断增长，LEO-II 的搜索空间中的一些子句具有特殊状态：它们是在适当的转换函数应用下的一阶子句。因此，LEO-II 逐步对这些子句进行有时间限制的调用，发送给一阶定理证明器，当一阶证明器报告反驳时，LEO-II 也终止。这些想法的部分已经在前身 LEO 中实施。LEO-II 与合作的一阶定理证明器之间的通信使用 TPTP 语言和标准。LEO-II 是 2010 年第二届 THF CASC 竞赛的获胜者。

Satallax 证明器（Brown 2012）基于 Church 的带选择的类型论的完整基础表演演算（Backes＆Brown 2011）。从一个猜想的假设和其结论的否定开始，形成一个初始的表演分支。从那时起，Satallax 试图确定该分支的不可满足性或可满足性。Satallax 逐步生成高阶公式和相应的命题子句。Satallax 使用 SAT 求解器 MiniSat 作为引擎，测试当前一组命题子句的不可满足性。如果子句是不可满足的，则原始分支是不可满足的。Satallax 提供了对外延性、描述和选择的演算规则。如果在函数类型中没有量词，生成高阶公式和相应子句的过程可能会终止。在这种情况下，如果 MiniSat 报告最终一组子句是可满足的，则原始一组高阶公式是可满足的（通过一个标准模型，其中所有类型被解释为有限集合）。Satallax 是 2011 年和 2013 年至 2019 年 THF CASC 竞赛的冠军。

Isabelle/HOL 系统（Nipkow，Wenzel 和 Paulson 2002）最初被设计为交互式证明器。然而，为了简化用户交互，多年来已经添加了一些自动证明策略。通过适当地调度其中一些相当强大的证明策略的子集，Isabelle/HOL 自 2011 年左右也成为了一个可以从命令行界面运行的 TPTP THF（和其他 TPTP 语法格式）的自动定理证明器。Isabelle/HOL 调度的最强大的证明策略包括 Sledgehammer 工具（Blanchette 等人 2013），它调用一系列外部的一阶和高阶定理证明器，模型查找器 Nitpick（Blanchette 和 Nipkow 2010），等式推理器 simp，无类型表推理器 blast，简化器和经典推理器 auto，force 和 fast，以及最佳优先搜索过程 best。与上述所有其他自动定理证明器不同，Isabelle/HOL 的 TPTP 版本不输出证明证书。Isabelle/HOL 是 2012 年 THF CASC 竞赛的获胜者。

agsyHOL 证明器基于通用的惰性缩小证明搜索算法。采用回溯法，并维护一个相对较小的搜索状态。该证明器以序列样式输出证明项，可以在 Agda 系统中进行验证。

coqATP 实现了构造演算（Bertot 和 Castéran 2004）的（非归纳的）部分。该系统输出被 Coq 证明助手接受为证明的证明项（在添加了一些定义之后）。该证明器使用了函数外延性、选择公理和排中律的公理。不支持布尔外延性。除了公理外，还使用了一个小型的基本引理库。

Leo-III 证明器实现了丘奇的类型论的参数模拟演算（Steen 2018）。该系统是 LEO 和 LEO-II 的后代，提供了对外延性、描述和选择的演算规则。该系统强调了对底层数据结构的高效实现、简化程序和启发式重写的实现。在其前辈的传统中，Leo-III 与使用多分类一阶逻辑的翻译合作使用一阶推理工具。该证明器接受每个常见的 TPTP 语法方言，因此非常广泛适用。最近，该证明器还被扩展为本地支持几乎所有常规的高阶模态逻辑（Steen 等人 2023 年）。

CVC4、CVC5 和 Verit（Barbosa 等人 2019 年）是基于 SMT 的自动证明器，内置支持许多理论，包括线性算术、数组、位向量、数据类型、有限集合和字符串。这些证明器已被扩展以支持（片段）丘奇的类型论。

Zipperposition 证明器（Bentkamp 等人 2018 年，Vukmirović等人 2022 年）专注于对丘奇的类型论的超位置演算的有效实现。它配备了 Logtk，一个支持操作术语、公式、子句等的库，用于丘奇的类型论，并支持相关扩展，如数据类型、递归函数和算术。Zipperposition 是 2020 年、2021 年和 2022 年 THF CASC 竞赛的冠军。

Vampire（Bhayat＆Reger 2020），在一阶逻辑的 TPTP 竞赛中占据主导地位超过二十年，现在还支持使用基于组合子的超图归结法自动化 Church 的类型论。Vampire 是 2023 年 THF CASC 竞赛的获胜者。

定理证明器 E（Vukmirović等人 2023），另一个著名且领先的一阶自动定理证明器，已经扩展为使用一种变种的超图归结方法来支持 Church 的类型论，该方法也在 Zipperposition 中实现。

Lash（Brown 和 Kaliszyk 2022）是一个基于 Satallax 分支创建的 Church 类型论定理证明器。

Duper 是一个基于叠加的依赖类型论定理证明器，旨在证明证明助手 Lean 中的定理。

近年来，从一阶自动定理证明转向高阶自动定理证明发生了重大变化。

### 4.4（反）模型发现

对于查奇的类型论公式的有限模型或反模型的查找支持已经在基于表格的证明器 HOT（Konrad 1998）中实现。有限（反）模型查找功能也在证明器 Satallax、LEO-II 和 LEO-III 中实现。目前最先进的（有限）模型查找支持是在系统 Nitpick、Nunchaku 和 Refute 中实现的。这些工具已经与 Isabelle 证明助手集成。Nitpick 也可作为独立工具使用，接受 TPTP THF 语法。这些系统对于暴露问题编码中的错误和误解，以及揭示 THF 定理证明器中的错误非常有价值。

## 5. 应用

除了其优雅之外，丘奇的类型论还具有许多实际优势。例如，Farmer（2023）的最新教材强调了这一方面，该教材涉及了本文无法涵盖的各种相关和重要的进一步方面。由于其良好的实际表达能力，丘奇的类型论的应用范围非常广泛，下面只能给出一些例子（关于实际例子的更多信息的良好来源是交互式定理证明会议的论文集）。

### 5.1 自然语言的语义学

丘奇的类型论在研究自然语言的形式语义学中起着重要作用。Richard Montague 在这方面做出了开创性的工作。请参阅他的论文《英语作为形式语言》、《通用语法》和《对普通英语中量化的适当处理》，这些论文收录在 Montague 1974 年的著作中。Montague 对自然语言的分析的一个关键组成部分是定义了一种时态意向逻辑（Montague 1974: 256），这是对丘奇类型论的增强。Montague 语法产生了巨大影响，并在很多方向上得到了进一步的发展，尤其是在类型逻辑/范畴语法中。关于意向和高阶模态逻辑的进一步相关工作可参考 Gallin 1975 年和 Muskens 2006 年的论文。

### 5.2 数学和计算机科学

基于丘奇的类型论的证明助手，包括 Isabelle/HOL、HOL Light、HOL4 和 PVS，在计算机科学和数学的广泛应用中已经成功地被利用。

在计算机科学中的应用包括对硬件、软件和安全协议的验证。一个著名的例子是 L4.verified 项目，其中使用 Isabelle/HOL 来形式化证明 seL4 操作系统内核实现了一个抽象的数学模型，指定了内核应该做什么（Klein 等人，2018）。

在数学中，证明助手已经被应用于数学理论库的开发和挑战性定理的验证。一个早期的例子是 TPS 项目在八十年代以来开发的数学库。在 Andrews 等人的 1996 年的文章中列举了一系列用 TPS 自动证明的定理。一个非常著名的最近的例子是 Hales Flyspeck，其中使用 HOL Light 来开发 Kepler 猜想的形式化证明（Hales 等人，2017）。Benzmüller 和 Scott 在 2019 年的工作中提出了一个强烈利用 Isabelle/HOL 的 Sledgehammer 和 Nitpick 自动化支持的例子。在这项工作中，探索和比较了范畴论的不同公理系统。

通过查阅适当的来源，如 Isabelle 的形式证明档案、《形式化推理杂志》或 Sutcliffe 的 TPTP 问题库中的 THF 条目，可以获得过去和正在进行的形式化项目的全面概述。相关的进一步信息以及对影响和进一步工作的讨论也可以在 Bentkamp 等人的 2023b 和 Bayer 等人的 2024 年的著作中找到。

在这些证明助手中进一步改进证明自动化——基于证明锤工具或其他形式的证明器集成——对于在未来的应用中减少交互努力是相关的。

### 5.3 计算形而上学和人工智能

丘奇的类型论是一种经典逻辑，但在哲学和人工智能中的主题应用通常需要表达力非经典逻辑。为了支持这些应用与丘奇的类型论的推理工具，已经开发了浅层语义嵌入技术（也参见第 1.2.2 节），该技术将模态逻辑的标准翻译思想推广和扩展到一阶逻辑。该技术已应用于对本体论论证的现代变体进行评估，使用了一系列高阶定理证明器，包括 LEO-II、Satallax、Nitpick 和 Isabelle/HOL。在实验过程中，LEO-II 检测到了哥德尔论证的前提不一致，而证明器成功地自动证明了斯科特对其的修正，并确认了修正前提的一致性。关于这项工作的更多细节在相关的 SEP 条目中介绍了自动推理（见第 4.6 节逻辑和哲学）。语义嵌入方法已经被适应并进一步扩展到一系列其他非经典逻辑和相关应用中。在哲学中，这包括对雄心勃勃的伦理和形而上学理论的编码和形式评估；在人工智能中，这包括对行为逻辑和规范推理的机械化，以控制 AI 系统（Benzmüller 等人，2020），以及对模糊儿童难题的自动证明（见动态认知逻辑的附录 B），该难题是认知推理中的一个著名难题，或者说是动态认知推理。

### 5.4. 元逻辑研究

丘奇的类型论也非常适合支持元逻辑研究，包括对其他逻辑形式的编码以及形式化的完备性和一致性研究（参见 Schlichtkrull 等人 2020 年，Halkjær 等人 2023 年以及 Benzmüller 2019 年中提供的其他指引）。特别是，丘奇的类型论可以作为一个独立的形式进行正式研究，例如 Kumar 等人（2016 年），Schlichtkrull（2023 年）和 Díaz（2023 年）的研究已经证明了这一点。

## Bibliography

* Andrews, Peter B., 1963, “A Reduction of the Axioms for the Theory of Prepositional Types”, *Fundamenta Mathematicae*, 52(3): 345–350. doi:10.4064/fm-52-3-345-350
* –––, 1971, “Resolution in Type Theory”, *The Journal of Symbolic Logic*, 36(3): 414–432. Reprinted in Siekmann & Wrightson 1983 and in Benzmüller et al. 2008. doi:10.2307/2269949 doi:10.1007/978-3-642-81955-1
* –––, 1972a, “General Models and Extensionality”, *The Journal of Symbolic Logic*, 37(2): 395–397. Reprinted in Benzmüller et al. 2008. doi:10.2307/2272982
* –––, 1972b, “General Models, Descriptions, and Choice in Type Theory”, *The Journal of Symbolic Logic*, 37(2): 385–394. Reprinted in Benzmüller et al. 2008. doi:10.2307/2272981
* –––, 1974, “Provability in Elementary Type Theory”, *Zeitschrift für Mathematische Logik und Grundlagen der Mathematik*, 20(25–27): 411–418. doi:10.1002/malq.19740202506
* –––, 1981, “Theorem Proving via General Mappings”, *Journal of the ACM*, 28(2): 193–214. doi:10.1145/322248.322249
* –––, 2001, “Classical Type Theory”, in Robinson and Voronkov 2001, Volume 2, Chapter 15, pp. 965–1007. doi:10.1016/B978-044450813-3/50017-5
* –––, 2002, *An Introduction to Mathematical Logic and Type Theory: To Truth Through Proof*, (Applied Logic Series 27), second edition, Dordrecht: Springer Netherlands. doi:10.1007/978-94-015-9934-4
* Andrews, Peter B., Matthew Bishop, Sunil Issar, Dan Nesmith, Frank Pfenning, and Hongwei Xi, 1996, “TPS: A Theorem-Proving System for Classical Type Theory”, *Journal of Automated Reasoning*, 16(3): 321–353. Reprinted in Benzmüller et al. 2008. doi:10.1007/BF00252180
* Andrews, Peter B. and Chad E. Brown, 2006, “TPS: A Hybrid Automatic-Interactive System for Developing Proofs”, *Journal of Applied Logic*, 4(4): 367–395. doi:10.1016/j.jal.2005.10.002
* Baader, Franz and Wayne Snyder, 2001, “Unification Theory”, in Robinson and Voronkov 2001, Volume 1, Chapter 8, Amsterdam: Elsevier Science, pp. 445–533. doi:10.1016/B978-044450813-3/50010-2
* Backes, Julian and Chad Edward Brown, 2011, “Analytic Tableaux for Higher-Order Logic with Choice”, *Journal of Automated Reasoning*, 47(4): 451–479. doi:10.1007/s10817-011-9233-2
* Barbosa, Haniel, Andrew Reynolds, Daniel El Ouraoui, Cesare Tinelli, and Clark Barret, 2019, “Extending SMT Solvers to Higher-Order Logic”, in *Automated Deduction – CADE 27,* Pascal Fontaine (ed.), (Lecture Notes in Computer Science 11716), Cham: Springer Nature Switzerland AG. doi:10.1007/978-3-030-29436-6_3
* Barendregt, H. P., 1984, *The Lambda Calculus: Its Syntax and Semantics*, (Studies in Logic and the Foundations of Mathematics, 103), revised edition, Amsterdam: North-Holland.
* Barendregt, Henk, Wil Dekkers, and Richard Statman, 2013, *Lambda Calculus with Types*, Cambridge: Cambridge University Press. doi:10.1017/CBO9781139032636
* Bayer, Jonas, Christoph Benzmüller, Kevin Buzzard, Marco David, Leslie Lamport, Yuri Matiyasevich, Lawrence Paulson, Dierk Schleicher, Benedikt Stock, and Efim Zelmanov, 2024, “Mathematical Proof Between Generations”, *Notices of the AMS*, 71(1):80-92. doi:10.1090/noti2860
* Bentkamp, Alexander, Jasmin Blanchette, Simon Cruanes, and Uwe Waldmann, 2018, “Superposition for Lambda-Free Higher-Order Logic”, in Galmiche et al. 2018: 28–46. doi:10.1007/978-3-319-94205-6_3
* Bentkamp, Alexander, Jasmin Blanchette, Visa Nummelin, Sophie Tourret, and Uwe Waldmann, 2023a, “Complete and Efficient Higher-Order Reasoning via Lambda-Superposition”. *ACM SIGLOG News* 10(4):25–40. doi:10.1145/3636362.3636367
* Bentkamp, Alexander, Jasmin Blanchette, Visa Nummelin, Sophie Tourret, Petar Vukmirovic, and Uwe Waldmann, 2023b, “Mechanical Mathematicians” *Communications of the ACM, 66*(4):80–90. doi:10.1145/3636362.3636367
* Bentkamp, Alexander, Jasmin Blanchette, Sophie Tourret, and Petar Vukmirovic, 2023c, “Superposition for Higher-Order Logic”, *Journal of Automated Reasoning*, 67(1):10. doi:10.1007/s10817-022-09649-9
* Bentkamp, Alexander, Jasmin Blanchette, Sophie Tourret, Petar Vukmirovic, and Uwe Waldmann, 2021, “Superposition with Lambdas”,*Journal of Automated Reasoning*, 65, 893–940. doi:10.1007/s10817-021-09595-y
* Benzmüller, Christoph, 1997, *A Calculus and a System Architecture for Extensional Higher-Order Resolution*, Technical report 97–198, Department of Mathematical Sciences, Carnegie Mellon University. doi:10.1184/r1/6476477.v1
* –––, 1999a, *Equality and Extensionality in Automated Higher-Order Theorem Proving*, Ph.D. dissertation, Computer Science Department, Universität des Saarlandes.
* –––, 1999b, “Extensional Higher-Order Paramodulation and RUE-Resolution”, in Ganzinger 1999: 399–413. doi:10.1007/3-540-48660-7_39
* –––, 2019, “Universal (Meta-)Logical Reasoning: Recent Successes”, *Science of Computer Programming*, 172: 48–62. doi:10.1016/j.scico.2018.10.008
* Benzmüller, Christoph and Michael Kohlhase, 1997, “Model Existence for Higher Order Logic”. SEKI Report SR-97-09.
* –––, 1998a, “Extensional Higher-Order Resolution”, Kirchner and Kirchner 1998: 56–71. doi:10.1007/BFb0054248
* –––, 1998b, “System Description: Leo—A Higher-Order Theorem Prover”, in Kirchner and Kirchner 1998: 139–143. doi:10.1007/BFb0054256
* Benzmüller, Christoph, Chad E. Brown, and Michael Kohlhase, 2004, “Higher-Order Semantics and Extensionality”, *The Journal of Symbolic Logic*, 69(4): 1027–1088. doi:10.2178/jsl/1102022211
* –––, 2009, “Cut-Simulation and Impredicativity”, *Logical Methods in Computer Science*, 5(1): 6. doi:10.2168/LMCS-5(1:6)2009
* Benzmüller, Christoph, Chad E. Brown, Jörg Siekmann, and Richard Statman (eds.), 2008, *Reasoning in Simple Type Theory: Festschrift in Honour of Peter B. Andrews on His 70th Birthday*, (Studies in Logic 17), London: College Publications.
* Benzmüller, Christoph, David Fuenmayor, Alexander Steen, and Geoff Sutcliffe, 2023, “Who Finds the Short Proof?”, *Logic Journal of the IGPL*. doi:10.1093/jigpal/jzac082
* Benzmüller, Christoph and Dale Miller, 2014, “Automation of Higher Order Logic”, in *Computational Logic*, (Handbook of the History of Logic, 9), Dov M. Gabbay, Jörg H. Siekmann, and John Woods (eds.), Amsterdam: Elsevier, 215–254.
* Benzmüller, Christoph, Xavier Parent, and Leendert van der Torre, 2020, “Designing normative theories for ethical and legal reasoning: LogiKEy framework, methodology, and tool support, *Artificial Intelligence*, 287:103348. doi:10.1016/j.artint.2020.103348
* Benzmüller, Christoph, Nik Sultana, Lawrence C. Paulson, and Frank Theiß, 2015, “The Higher-Order Prover Leo-II”, *Journal of Automated Reasoning*, 55(4): 389–404. doi:10.1007/s10817-015-9348-y
* Benzmüller, Christoph and Dana S. Scott, 2019, “Automating Free Logic in HOL, with an Experimental Application in Category Theory”, *Journal of Automated Reasoning*, 64:53–72 (2020). doi:10.1007/s10817-018-09507-7
* Benzmüller, Christoph and Bruno Woltzenlogel Paleo, 2014, “Automating Gödel’s Ontological Proof of God’s Existence with Higher-Order Automated Theorem Provers”, in *Proceedings of the Twenty-First European Conference on Artificial Intelligence (ECAI 2014)*, T. Schaub, G. Friedrich, and B. O’Sullivan (eds.), (Frontiers in Artificial Intelligence 263), Amsterdam: IOS Press, 93–98. doi:10.3233/978-1-61499-419-0-93
* Bertot, Yves and Pierre Castéran, 2004, *Interactive Theorem Proving and Program Development: Coq’Art: The Calculus of Inductive Constructions*, (Texts in Theoretical Computer Science An EATCS Series), Berlin, Heidelberg: Springer Berlin Heidelberg. doi:10.1007/978-3-662-07964-5
* Bhayat, Ahmed and Giles Reger, 2020, “A Combinator-Based Superposition Calculus for Higher-Order Logic”, in Automated Reasoning. IJCAR 2020, Nicolas Peltier and Sofronie-Stokkermans (eds.), (Lecture Notes in Computer Science 12166), Cham: Springer Nature Switzerland AG. doi:10.1007/978-3-030-51074-9_16
* Bibel, Wolfgang, 1981, “On Matrices with Connections”, *Journal of the ACM*, 28(4): 633–645. doi:10.1145/322276.322277
* Bishop, Matthew, 1999, “A Breadth-First Strategy for Mating Search”, in Ganzinger 1999: 359–373. doi:10.1007/3-540-48660-7_32
* Blanchette, Jasmin Christian and Tobias Nipkow, 2010, “Nitpick: A Counterexample Generator for Higher-Order Logic Based on a Relational Model Finder”, in *Interactive Theorem Proving*, Matt Kaufmann and Lawrence C. Paulson (eds.), (Lecture Notes in Computer Science 6172), Berlin, Heidelberg: Springer Berlin Heidelberg, 131–146. doi:10.1007/978-3-642-14052-5_11
* Blanchette, Jasmin Christian, Sascha Böhme, and Lawrence C. Paulson, 2013, “Extending Sledgehammer with SMT Solvers”, *Journal of Automated Reasoning*, 51(1): 109–128. doi:10.1007/s10817-013-9278-5
* Boolos, George, 1987, “A Curious Inference”, *Journal of Philosophical Logic*, 16(1): 1–12. doi:10.1007/BF00250612
* Brown, Chad E., 2004, “Set Comprehension in Church’s Type Theory”, PhD Thesis, Department of Mathematical Sciences, Carnegie Mellon University, Pittsburgh, PA.
* –––, 2007, *Automated Reasoning in Higher-Order Logic: Set Comprehension and Extensionality in Church`s Type Theory*, (Studies in Logic Logic and Cognitive Systems 10), London: King’s College Publications.
* –––, 2012, “Satallax: An Automatic Higher-Order Prover”, in *Automated Reasoning (IJCAR 2012)*, Bernhard Gramlich, Dale Miller, and Uli Sattler (eds.) (Lecture Notes in Computer Science 7364), Berlin, Heidelberg: Springer Berlin Heidelberg, 111–117. doi:10.1007/978-3-642-31365-3_11
* Brown, Chad and Gert Smolka, 2010, “Analytic Tableaux for Simple Type Theory and Its First-Order Fragment”, *Logical Methods in Computer Science*, 6(2): 3. doi:10.2168/LMCS-6(2:3)2010
* Büchi, J. Richard, 1953, “Investigation of the Equivalence of the Axiom of Choice and Zorn’s Lemma from the Viewpoint of the Hierarchy of Types”, *The Journal of Symbolic Logic*, 18(2): 125–135. doi:10.2307/2268945
* Church, Alonzo, 1932, “A Set of Postulates for the Foundation of Logic”, *The Annals of Mathematics*, 33(2): 346–366. doi:10.2307/1968337
* –––, 1940, “A Formulation of the Simple Theory of Types”, *The Journal of Symbolic Logic*, 5(2): 56–68. Reprinted in Benzmüller et al. 2008. doi:10.2307/2266170
* –––, 1941, *The Calculi of Lambda Conversion*, (Annals of Mathematics Studies 6), Princeton, NJ: Princeton University Press.
* –––, 1956, *Introduction to Mathematical Logic*, Princeton, NJ: Princeton University Press.
* Czajka, Łukasz and Cezary Kaliszyk, 2018, “Hammer for Coq: Automation for Dependent Type Theory”, *Journal of Automated Reasoning*, 61(1–4): 423–453. doi:10.1007/s10817-018-9458-4
* Díaz, Javier, 2023, “Metatheory of Q0”, *Archive of Formal Proofs*. https://www.isa-afp.org/entries/Q0_Metatheory.html
* Dowek, Gilles, 2001, “Higher-Order Unification and Matching”, in Robinson and Voronkov 2001, Volume 2, Chapter 16, Amsterdam: Elsevier Science, pp. 1009–1062. doi:10.1016/B978-044450813-3/50018-7
* Dowek, Gilles and Benjamin Werner, 2003, “Proof Normalization Modulo”, *The Journal of Symbolic Logic*, 68(4): 1289–1316. doi:10.2178/jsl/1067620188
* Farmer, William M., 2008, “The Seven Virtues of Simple Type Theory”, *Journal of Applied Logic*, 6(3): 267–286. doi:10.1016/j.jal.2007.11.001
* Farmer, William M., 2023, “Simple Type Theory - A Practical Logic for Expressing and Reasoning About Mathematical Ideas”, Cham: Birkhäuser. doi:10.1007/978-3-031-21112-6
* Farmer, William M., Joshua D. Guttman, and F. Javier Thayer, 1993, “IMPS: An Interactive Mathematical Proof System”, *Journal of Automated Reasoning*, 11(2): 213–248. doi:10.1007/BF00881906
* Gallin, Daniel, 1975, *Intensional and Higher-Order Modal Logic*, Amsterdam: North-Holland.
* Galmiche, Didier, Stephan Schulz, and Roberto Sebastiani (eds.), 2018, *Automated Reasoning (IJCAR 2018)*, (Lecture Notes in Computer Science 10900), Cham: Springer International Publishing. doi:10.1007/978-3-319-94205-6
* Ganzinger, Harald (ed.), 1999, *Automated Deduction—CADE-16*, (Lecture Notes in Computer Science, 1632), Berlin, Heidelberg: Springer Berlin Heidelberg. doi:10.1007/3-540-48660-7
* Gödel, Kurt, 1931, “Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I”, *Monatshefte für Mathematik und Physik*, 38(1): 173–198. Translated in Gödel 1986: 144–195, and in van Heijenoort 1967: 596–616.
* –––, 1986, *Collected Works*, Volume I, Oxford: Oxford University Press.
* Goldfarb, Warren D., 1981, “The Undecidability of the Second-Order Unification Problem”, *Theoretical Computer Science*, 13(2): 225–230. doi:10.1016/0304-3975(81)90040-2
* Gordon, Michael J. C., 1986, “Why Higher-Order Logic is a Good Formalism for Specifying and Verifying Hardware”, in George J. Milne, and P. A. Subrahmanyam (eds.), *Formal Aspects of VLSI Design: Proceedings of the 1985 Edinburgh Workshop on VLSI*, Amsterdam: North-Holland, pp. 153–177.
* –––, 1988, “HOL: A Proof Generating System for Higher-Order Logic”, in *VLSI Specification, Verification and Synthesis*, Graham Birtwistle and P. A. Subrahmanyam (eds.), (The Kluwer International Series in Engineering and Computer Science 35), Boston, MA: Springer US, 73–128. doi:10.1007/978-1-4613-2007-4_3
* Gordon, M. J., and T. F. Melham, 1993, *Introduction to HOL: A Theorem-Proving Environment for Higher-Order Logic*, Cambridge: Cambridge University Press.
* Gould, William Eben, 1966, *A Matching Procedure for -order Logic*, Ph.D. dissertation, Mathematics Department, Princeton University. [[Gould 1966 available online](https://apps.dtic.mil/dtic/tr/fulltext/u2/646560.pdf)]
* Hales, Thomas, Mark Adams, Gertrud Bauer, Tat Dat Dang, John Harrison, Le Truong Hoang, Cezary Kaliszyk, et al., 2017, “A Formal Proof of the Kepler Conjecture”, *Forum of Mathematics, Pi*, 5: e2. doi:10.1017/fmp.2017.1
* Harrison, John, 1996, “HOL Light: A Tutorial Introduction”, in *Formal Methods in Computer-Aided Design*, Mandayam Srivas and Albert Camilleri (eds.), (Lecture Notes in Computer Science 1166), Berlin, Heidelberg: Springer Berlin Heidelberg, 265–269. doi:10.1007/BFb0031814
* Halkjær, Asta, Anders Schlichtkrull, Jørgen Villadsen, 2023, “A sequent calculus for first-order logic formalized in Isabelle/HOL”, *Journal of Logic and Computation,* 33(4):818-836. doi: 10.1093/logcom/exad013
* Henkin, Leon, 1950, “Completeness in the Theory of Types”, *The Journal of Symbolic Logic*, 15(2): 81–91. Reprinted in Hintikka 1969 and in Benzmüller et al. 2008. doi:10.2307/2266967
* –––, 1963, “A Theory of Prepositional Types”, *Fundamenta Mathematicae*, 52(3): 323–344. doi:10.4064/fm-52-3-323-344
* –––, 1975, “Identity as a Logical Primitive”, *Philosophia*, 5(1–2): 31–45. doi:10.1007/BF02380832
* Hilbert, David, 1928, “Die Grundlagen der Mathematik”, *Abhandlungen aus dem mathematischen Seminar der Hamburgischen Universität*, 6: 65–85; translated in van Heijenoort 1967: 464–479.
* Hintikka, Jaakko (ed.), 1969, *The Philosophy of Mathematics*, Oxford: Oxford University Press.
* Huet, Gerald P., 1973a, “A Mechanization of Type Theory”, in *Proceedings of the Third International Joint Conference on Artificial Intelligence* (Stanford University), D. E. Walker and L. Norton (eds.), Los Altos, CA: William Kaufman, 139–146. [[Huet 1973a available online](https://www.ijcai.org/Proceedings/73/Papers/016.pdf)]
* –––, 1973b, “The Undecidability of Unification in Third Order Logic”, *Information and Control*, 22(3): 257–267. doi:10.1016/S0019-9958(73)90301-X
* –––, 1975, “A Unification Algorithm for Typed λ-Calculus”, *Theoretical Computer Science*, 1(1): 27–57. doi:10.1016/0304-3975(75)90011-0
* Jensen, D.C. and T. Pietrzykowski, 1976, “Mechanizing ω-Order Type Theory through Unification”, *Theoretical Computer Science*, 3(2): 123–171. doi:10.1016/0304-3975(76)90021-9
* Kaliszyk, Cezary and Josef Urban, 2015, “HOL(y)Hammer: Online ATP Service for HOL Light”, *Mathematics in Computer Science*, 9(1): 5–22. doi:10.1007/s11786-014-0182-0
* Kirchner, Claude and Hélène Kirchner (eds.), 1998, *Automated Deduction—CADE-15*, (Lecture Notes in Computer Science, 1421), Berlin, Heidelberg: Springer Berlin Heidelberg. doi:10.1007/BFb0054239
* Klein, Gerwin, June Andronick, Matthew Fernandez, Ihor Kuz, Toby Murray, and Gernot Heiser, 2018, “Formally Verified Software in the Real World”, *Communications of the ACM*, 61(10): 68–77. doi:10.1145/3230627
* Kohlhase, Michael, 1993, “A Unifying Principle for Extensional Higher-Order Logic”, Technical Report 93–153, Department of Mathematics, Carnegie Mellon University.
* –––, 1995, “Higher-Order Tableaux”, in *Theorem Proving with Analytic Tableaux and Related Methods*, Peter Baumgartner, Reiner Hähnle, and Joachim Possega (eds.), (Lecture Notes in Computer Science 918), Berlin, Heidelberg: Springer Berlin Heidelberg, 294–309. doi:10.1007/3-540-59338-1_43
* –––, 1998, “Higher-Order Automated Theorem Proving”, in *Automated Deduction—A Basis for Applications*, Volume 1, Wolfgang Bibel and Peter H. Schmitt (eds.), Dordrecht: Kluwer, 431–462.
* Konrad, Karsten, 1998, “Hot: A Concurrent Automated Theorem Prover Based on Higher-Order Tableaux”, in *Theorem Proving in Higher Order Logics*, Jim Grundy and Malcolm Newey (eds.), (Lecture Notes in Computer Science 1479), Berlin, Heidelberg: Springer Berlin Heidelberg, 245–261. doi:10.1007/BFb0055140
* Kumar, Ramana, Rob Arthan, Magnus O. Myreen, and Scott Owens, 2016, “Self-Formalisation of Higher-Order Logic”, *Journal of Automated Reasoning*, **56**:221–259. doi:10.1007/s10817-015-9357-x
* Maslov, S. Yu, 1967, “An Inverse Method for Establishing Deducibility of Nonprenex Formulas of Predicate Calculus”, *Soviet Mathematics Doklady*, 8(1): 16–19.
* Miller, Dale A., 1983, *Proofs in Higher-Order Logic*, Ph.D. dissertation, Mathematics Department, Carnegie Mellon University.
* –––, 1987, “A Compact Representation of Proofs”, *Studia Logica*, 46(4): 347–370. doi:10.1007/BF00370646
* –––, 1991, “A Logic Programming Language with Lambda-Abstraction, Function Variables, and Simple Unification”, *Journal of Logic and Computation*, 1(4): 497–536. doi:10.1093/logcom/1.4.497
* Mints, G., 1999, “Cut-Elimination for Simple Type Theory with an Axiom of Choice”, *The Journal of Symbolic Logic*, 64(2): 479–485. doi:10.2307/2586480
* Montague, Richard, 1974, *Formal Philosophy. Selected Papers Of Richard Montague*, edited and with an introduction by Richmond H. Thomason, New Haven: Yale University Press.
* Muskens, Reinhard, 2006, “Higher Order Modal Logic”, in *Handbook of Modal Logic*, Patrick Blackburn, Johan Van Benthem, and Frank Wolter (eds.), Amsterdam: Elsevier, 621–653.
* –––, 2007, “Intensional Models for the Theory of Types”, *The Journal of Symbolic Logic*, 72(1): 98–118. doi:10.2178/jsl/1174668386
* Nipkow, Tobias, Markus Wenzel, and Lawrence C. Paulson (eds.), 2002, *Isabelle/HOL: A Proof Assistant for Higher-Order Logic*, (Lecture Notes in Computer Science 2283), Berlin, Heidelberg: Springer Berlin Heidelberg. doi:10.1007/3-540-45949-9
* Owre, S., S. Rajan, J. M. Rushby, N. Shankar, and M. Srivas, 1996, “PVS: Combining Specification, Proof Checking, and Model Checking”, in *Computer Aided Verification*, Rajeev Alur and Thomas A. Henzinger (eds.), (Lecture Notes in Computer Science 1102), Berlin, Heidelberg: Springer Berlin Heidelberg, 411–414. doi:10.1007/3-540-61474-5_91
* Paulson, Lawrence C, 1988, “Isabelle: The next Seven Hundred Theorem Provers”, in *9th International Conference on Automated Deduction*, Ewing Lusk and Ross Overbeek (eds.), (Lecture Notes in Computer Science 310), Berlin/Heidelberg: Springer-Verlag, 772–773. doi:10.1007/BFb0012891
* –––, 1990, “A Formulation of the Simple Theory of Types (for Isabelle)”, in *COLOG-88*, Per Martin-Löf and Grigori Mints (eds.), (Lecture Notes in Computer Science 417), Berlin, Heidelberg: Springer Berlin Heidelberg, 246–274. doi:10.1007/3-540-52335-9_58
* Prawitz, Dag, 1968, “Hauptsatz for Higher Order Logic”, *The Journal of Symbolic Logic*, 33(3): 452–457. doi:10.2307/2270331
* Quine, W. V., 1956, “Unification of Universes in Set Theory”, *The Journal of Symbolic Logic*, 21(3): 267–279. doi:10.2307/2269102
* Richardson, Julian, Alan Smaill, and Ian Green, 1998, “System Description: Proof Planning in Higher-Order Logic with ΛClam”, in Kirchner and Kirchner 1998: 129–133. doi:10.1007/BFb0054254
* Robinson, Alan and Andrei Voronkov (eds.), 2001, *Handbook of Automated Reasoning*, Volumes 1 and 2, Amsterdam: Elsevier Science.
* Russell, Bertrand, 1903, *The Principles of Mathematics*, Cambridge: Cambridge University Press.
* –––, 1908, “Mathematical Logic as Based on the Theory of Types”, *American Journal of Mathematics*, 30(3): 222–262. Reprinted in van Heijenoort 1967: 150–182. doi:10.2307/2369948
* Schlichtkrull, Anders, 2023, “Soundness of the Q0 proof system for higher-order logic”, *Archive of Formal Proofs.* https://www.isa-afp.org/entries/Q0_Soundness.html
* Schlichtkrull, Anders, Jasmin Blanchette, Dmitriy Traytel, and Uwe Waldmann, 2020, “Formalizing Bachmair and Ganzinger's Ordered Resolution Prover.” Journal of Automated Reasoning, 64(7): 1169-1195. doi:10.1007/s10817-020-09561-0
* Schönfinkel, M., 1924, “Über die Bausteine der mathematischen Logik”, *Mathematische Annalen*, 92(3–4): 305–316. Translated in van Heijenoort 1967: 355–366. doi:10.1007/BF01448013
* Schütte, Kurt, 1960, “Syntactical and Semantical Properties of Simple Type Theory”, *The Journal of Symbolic Logic*, 25(4): 305–326. doi:10.2307/2963525
* Shankar, Natarajan, 2001, “Using Decision Procedures with a Higher-Order Logic”, in *Theorem Proving in Higher Order Logics*, Richard J. Boulton and Paul B. Jackson (eds.), (Lecture Notes in Computer Science 2152), Berlin, Heidelberg: Springer Berlin Heidelberg, 5–26. doi:10.1007/3-540-44755-5_3
* Siekmann, Jörg H. and Graham Wrightson (eds.), 1983, *Automation of Reasoning*, (Classical Papers on Computational Logic 1967–1970: Vol. 2), Berlin, Heidelberg: Springer Berlin Heidelberg. doi:10.1007/978-3-642-81955-1
* Siekmann, Jörg, Christoph Benzmüller, and Serge Autexier, 2006, “Computer Supported Mathematics with ΩMEGA”, *Journal of Applied Logic*, 4(4): 533–559. doi:10.1016/j.jal.2005.10.008
* Smullyan, Raymond M., 1963, “A Unifying Principal in Quantification Theory”, *Proceedings of the National Academy of Sciences*, 49(6): 828–832. doi:10.1073/pnas.49.6.828
* –––, 1995, *First-Order Logic*, New York: Dover, second corrected edition.
* Steen, Alexander, 2018, *Extensional Paramodulation for Higher-Order Logic and its Effective Implementation Leo-III*, Ph.D. dissertation, Series: Dissertations in Artificial Intelligence (DISKI), Volume 345, Berlin: AKA-Verlag (IOS Press).
* Steen, Alexander and Christoph Benzmüller, 2018, “The Higher-Order Prover Leo-III”, in Galmiche et al. 2018: 108–116. doi:10.1007/978-3-319-94205-6_8
* Steen, Alexander and Christoph Benzmüller, 2021, “Extensional Higher-Order Paramodulation in Leo-III”, *Journal of Automated Reasoning,* 65: 775–807. doi:10.1007/s10817-021-09588-x
* Steen, Alexander, Geoff Sutcliffe, Tobias Scholl, Christoph Benzmüller, 2023, “Solving Modal Logic Problems by Translation to Higher-Order Logic”, in *Logic and Argumentation. CLAR 2023,* Andreas Herzig, Jieting Luo, Pere Pardo (eds.), (Lecture Notes in Computer Science 14156), Cham: Springer Nature Switzerland AG. doi:10.1007/978-3-031-40875-5_3
* Stenlund, Sören, 1972, *Combinators, λ-Terms and Proof Theory*, (Synthese Library 42), Dordrecht: Springer Netherlands. doi:10.1007/978-94-010-2913-1
* Sutcliffe, Geoff, 2016, “The CADE ATP System Competition—CASC”, *AI Magazine*, 37(2): 99–101. doi:10.1609/aimag.v37i2.2620
* –––, 2017, “The TPTP Problem Library and Associated Infrastructure: From CNF to TH0, TPTP v6.4.0”, *Journal of Automated Reasoning*, 59(4): 483–502. doi:10.1007/s10817-017-9407-7
* –––, 2023, “The logic languages of the TPTP world”, *Logic Journal of the IGPL*, 31(6): 1153–1169. doi:10.1093/jigpal/jzac068
* Sutcliffe, Geoff and Christoph Benzmüller, 2010, “Automated Reasoning in Higher-Order Logic Using the TPTP THF Infrastructure”, *Journal of Formalized Reasoning*, 3(1): 1–27. doi:10.6092/issn.1972-5787/1710
* Takahashi, Moto-o, 1967, “A Proof of Cut-Elimination Theorem in Simple Type-Theory”, *Journal of the Mathematical Society of Japan*, 19(4): 399–410. doi:10.2969/jmsj/01940399
* –––, 1970, “A System of Simple Type Theory of Gentzen Style with Inference on Extensionality, and the Cut Elimination in It”, *Commentarii Mathematici Universitatis Sancti Pauli*, 18(2):129–147.
* Takeuti, Gaisi, 1987, *Proof Theory*, second edition, Amsterdam: North-Holland.
* Tarski, Alfred [Tajtelbaum, Alfred], 1923, “Sur Le Terme Primitif de La Logistique”, *Fundamenta Mathematicae*, 4: 196–200. Translated in Tarski 1956, 1–23. doi:10.4064/fm-4-1-196-200
* –––, 1956, *Logic, Semantics, Metamathematics: Papers from 1923 to 1938*, Oxford: Oxford University Press.
* van Heijenoort, Jean, 1967, *From Frege to Gödel. A Source Book in Mathematical Logic 1879–1931*, Cambridge, MA: Harvard University Press.
* Vukmirović, Petar, Alexander Bentkamp, Jasmin Blanchette, Simon Cruanes, Visa Nummelin, and Sophie Tourret, 2022, “Making Higher-Order Superposition Work”, *Journal of Automated Reasoning,* 66:541–564. doi10.1007/s10817-021-09613-z
* Vukmirović, Petar, Jasmin Blanchette, and Stephan Schulz, 2023, “Extending a High-Performance Prover to Higher-Order Logic”, in *Tools and Algorithms for the Construction and Analysis of Systems. TACAS 2023*, Sankaranarayanan, S., Sharygina, N. (eds.), (Lecture Notes in Computer Science 13994), Cham: Springer Nature Switzerland AG. doi:10.1007/978-3-031-30820-8_10
* Whitehead, Alfred N. and Bertrand Russell, 1927a, *Principia Mathematica*, Volume 1, Cambridge: Cambridge University Press, second edition.
* –––, 1927b, “Incomplete Symbols”, in Whitehead & Russell 1927a: 66–84; reprinted in van Heijenoort 1967: 216–223.
* Yasuhara, Mitsuru, 1975, “The Axiom of Choice in Church’s Type Theory” (abstract), *Notices of the American Mathematical Society*, 22(January): A34. [[Yashuhara 1975 available online](https://www.ams.org/journals/notices/197501/197501FullIssue.pdf)]

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=type-theory-church). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/type-theory-church/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=type-theory-church&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/type-theory-church/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

Since several sections in the main text mention software projects, we provide links to these projects below; some are duplicated because they are cited in multiple sections of the main text.

* [4.2 Proof Assistants](https://plato.stanford.edu/entries/type-theory-church/#ProoAssi)
  * [HOL](http://www.cl.cam.ac.uk/Research/HVG/HOL/)
  * [TPS](http://gtps.math.cmu.edu/tps.html)
  * [Isabelle/HOL](https://isabelle.in.tum.de/)
  * [PVS](http://www.csl.sri.com/projects/pvs/)
  * [IMPS](https://github.com/theoremprover-museum/imps)
  * [OMEGA](https://github.com/theoremprover-museum/OMEGA/blob/master/prog/top/omega-top.lisp)
  * [λClam](http://dream.inf.ed.ac.uk/software/lambda-clam/)
  * [HOL light](https://www.cl.cam.ac.uk/~jrh13/hol-light/)
  * [Coq](https://coq.inria.fr/)
  * [Lean](https://lean-lang.org/)
  * [Agda](http://hackage.haskell.org/package/Agda)
  * [Sledgehammer](https://isabelle.in.tum.de/website-Isabelle2009-1/sledgehammer.html)
  * [HOL(y)Hammer](http://cl-informatik.uibk.ac.at/software/hh/)
  * [SystemOnTPTP](http://www.tptp.org/cgi-bin/SystemOnTPTP) (system platform)
  * [TPTP TSTP](http://www.tptp.org/TSTP/) (proof format)
* [4.3 Automated Theorem Provers and Related Tools](https://plato.stanford.edu/entries/type-theory-church/#AutoTheoProv)
  * [TPTP CASC](http://www.tptp.org/CASC/) (competition)
  * [TPS](http://gtps.math.cmu.edu/tps.html)
  * [LEO-II](http://www.leoprover.org/)
  * [Satallax](http://www.ps.uni-saarland.de/~cebrown/satallax/)
  * [Isabelle/HOL](https://isabelle.in.tum.de/)
  * [agsyHOL](https://github.com/frelindb/agsyHOL)
  * [Leo-III](http://github.com/leoprover/Leo-III)
  * [CVC4](https://cvc4.github.io/)
  * [CVC5](https://cvc5.github.io/)
  * [Zipperposition](https://github.com/c-cube/zipperposition)
  * [Vampire](https://vprover.github.io/)
  * [E](https://wwwlehre.dhbw-stuttgart.de/~sschulz/E/E.html)
  * [Lash](http://grid01.ciirc.cvut.cz/~chad/lash/)
  * [Duper](https://github.com/leanprover-community/duper)
* [4.4 (Counter-)Model Finding](https://plato.stanford.edu/entries/type-theory-church/#CounModeFind)
  * [Nitpick](https://people.mpi-inf.mpg.de/~jblanche/nitpick.html)
  * [Nunchaku](https://github.com/nunchaku-inria)
* [5.2 Mathematics and Computer Science](https://plato.stanford.edu/entries/type-theory-church/#MathCompScie)
  * [L4.verified](https://trustworthy.systems/projects/TS/l4.verified/)
  * [Flyspeck](https://github.com/flyspeck/flyspeck)
  * [Archive of Formal Proofs](https://www.isa-afp.org/)
  * [Journal of Formalized Reasoning](https://jfr.unibo.it/issue/view/615)
  * [TPTP problem library](http://tptp.org/)

## Related Entries

[artificial intelligence: logic-based](https://plato.stanford.edu/entries/logic-ai/) | [category theory](https://plato.stanford.edu/entries/category-theory/) | [choice, axiom of](https://plato.stanford.edu/entries/axiom-choice/) | [descriptions](https://plato.stanford.edu/entries/descriptions/) | [epsilon calculus](https://plato.stanford.edu/entries/epsilon-calculus/) | [Frege, Gottlob](https://plato.stanford.edu/entries/frege/) | [Gödel, Kurt: incompleteness theorems](https://plato.stanford.edu/entries/goedel-incompleteness/) | [grammar: typelogical](https://plato.stanford.edu/entries/typelogical-grammar/) | [lambda calculus, the](https://plato.stanford.edu/entries/lambda-calculus/) | [logic, history of: first-order logic](https://plato.stanford.edu/entries/logic-firstorder-emergence/) | [logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [logic: deontic](https://plato.stanford.edu/entries/logic-deontic/) | [logic: dynamic epistemic](https://plato.stanford.edu/entries/dynamic-epistemic/) | [logic: modal](https://plato.stanford.edu/entries/logic-modal/) | [logic: second-order and higher-order](https://plato.stanford.edu/entries/logic-higher-order/) | [metaphysics](https://plato.stanford.edu/entries/metaphysics/) | [ontological arguments](https://plato.stanford.edu/entries/ontological-arguments/) | [paradox: Skolem’s](https://plato.stanford.edu/entries/paradox-skolem/) | [paradoxes: and contemporary logic](https://plato.stanford.edu/entries/paradoxes-contemporary-logic/) | [possibilism-actualism debate](https://plato.stanford.edu/entries/possibilism-actualism/) | [possible worlds](https://plato.stanford.edu/entries/possible-worlds/) | [*Principia Mathematica*](https://plato.stanford.edu/entries/principia-mathematica/) | [proof theory](https://plato.stanford.edu/entries/proof-theory/) | [quantifiers and quantification](https://plato.stanford.edu/entries/quantification/) | [Quine, Willard Van Orman](https://plato.stanford.edu/entries/quine/) | [rational choice, normative: expected utility](https://plato.stanford.edu/entries/rationality-normative-utility/) | [reasoning: automated](https://plato.stanford.edu/entries/reasoning-automated/) | [Russell, Bertrand](https://plato.stanford.edu/entries/russell/) | [semantics: Montague](https://plato.stanford.edu/entries/montague-semantics/) | [Tarski, Alfred](https://plato.stanford.edu/entries/tarski/) | [type theory](https://plato.stanford.edu/entries/type-theory/)

### Acknowledgments

Portions of this material are adapted from Andrews 2002 and Andrews 2001, with permission from the author and Elsevier. Benzmüller received funding for his contribution from Volkswagen Foundation.

[Copyright © 2024](https://plato.stanford.edu/info.html#c) by  
[Christoph Benzmüller](https://www.uni-bamberg.de/en/aise/team/benzmueller/) <[*christoph.benzmueller@uni-bamberg.de*](mailto:christoph%2ebenzmueller%40uni-bamberg%2ede)>  
Peter Andrews

