# 一阶模型论 first-order (Wilfrid Hodges and Thomas Scanlon)

*首次发表于 2001 年 11 月 10 日；实质性修订于 2024 年 1 月 25 日。*

一阶模型论，也被称为经典模型论，是数学的一个分支，处理的是一阶语言中的描述与满足这些描述的结构之间的关系。从一个角度来看，这是一个充满活力的数学研究领域，它将逻辑方法（特别是定义理论）应用于经典数学的深层问题。从另一个角度来看，一阶模型论是模型论的范式；它是模型论许多更广泛的思想首次得到发展的领域。

***

## 1. 一阶语言和结构

数学模型论承载着大量的符号表示，而 HTML 并不是最好的容器。在接下来的内容中，语法对象（语言、理论、句子）通常用罗马字母或希腊字母表示（例如 L、T、φ），而集合论对象，如结构及其元素，则用斜体表示（A、a）。两个例外是变量用斜体表示（x、y），以及元素序列用小写罗马字母表示（a、b）。

我们回顾并完善了一些关于古典逻辑和模型论的定义。一个签名是一组个体常量、谓词符号和函数符号；每个谓词符号和函数符号都有一个元数（例如，如果它的元数为 2，则它是二元的）。每个签名 K 都会产生一个一阶语言，通过使用签名中的符号以及逻辑符号（包括=）和标点符号来构建公式。

如果 K 是一个签名，那么一个 K 签名的结构，称为 A，由以下项目组成：

1. 一个称为 A 的域的集合，记作 dom(A)；通常假设它是非空的；
2. 对于 K 中的每个个体常量 c，存在一个 dom(A)中的元素 cA；
3. 对于每个谓词符号 P，其元数为 n，在 dom(A)上存在一个 n 元关系 PA；
4. 对于每个函数符号 F，其元数为 n，在 dom(A)上存在一个从 dom(A)到 dom(A)的 n 元函数 FA。

A 的元素是 dom(A)的元素。同样，A 的基数或者幂是它的定义域的基数。由于我们可以从生成它的一阶语言 L 中恢复出签名 K，我们可以将签名为 K 的结构称为 L-结构。我们将 c 视为结构 A 中元素 c\*\*A 的名称，其他符号也是如此。

例如，实数域形成了一个结构 R，其元素是实数，签名由个体常量 0 命名为零，一个一元函数符号 − 表示减法，以及两个二元函数符号+和.表示加法和乘法。乍一看，我们无法添加一个符号来表示 1/x，因为所有命名的函数都必须在结构的整个定义域上定义，并且没有 1/0 这样的实数。但仔细想想，这不是一个严重的问题；任何称职的数学家在除以 x 之前都会加上“x 不为零”的条件，所以 1/0 的值无关紧要，我们可以毫无害处地将其设为 42。但大多数模型论者对任何形式的除零操作都感到不舒服，所以他们坚持使用加法、乘法和减法。

如果 L 是签名为 K 的一阶语言，那么 Tarski 的模型论真值定义告诉我们 L 的一个句子在 A 中何时为真，以及将 A 的元素分配给变量时何时满足 L 的一个公式。模型论者经常不谈论满足公式的分配，而是谈论由公式 φ(v1,…,v **n)定义的 A 的 n 元组集合；连接的关系是，当且仅当将每个 v** i 映射到 a **i 的分配满足该公式时，n 元组(a1,…,a** n)在定义的集合中。

如果 φ 是一个句子，我们写作

> *A* ⊨ φ

表示 φ 在 A 中为真，或者换句话说，A 是 φ 的一个模型。如果 φ(v1,…,v\*\*n)是一个带有自由变量的公式，我们写作

> *A* ⊨ φ\[a]

意思是 n 元组 a 在由 φ 定义的集合中。（经典逻辑条目中的条目使用符号‘A,s ⊨ φ’，其中 s 是对 L 的所有变量进行赋值的任意赋值，对于在 φ 中自由的每个变量 v\*\*i，它将 i-th 元素赋给 n 元组 a。）

两个 L-结构，它们是 L 的完全相同的句子的模型，被称为元素等价。元素等价是所有 L-结构类的等价关系。在 L-结构 A 中为真的所有 L 的句子的集合称为 A 的完全理论，符号为 Th(A)。对于某个结构 A 为 Th(A)的理论被称为完全的。（根据一阶逻辑的完备性定理，详见经典逻辑条目，一个理论是完全的当且仅当它是最大句法一致的。）当且仅当 Th(A) = Th(B)，结构 A 和 B 是元素等价的。

继续以实数域 R 为例：往往很难确定两个给定的结构是否元素等价。模型论前史中最伟大的成就之一是塔斯基在 1930 年对 Th(R)的描述（他在战后才完整地发表，详见下面的参考书目）。这个描述暗示了与 R 元素等价的结构正是实闭域，这是一个已经为代数学家所熟知的域类。

当数学家引入一类结构时，他们喜欢定义这些结构之间的基本映射。相同符号 K 的结构之间的基本映射被称为同态，定义如下。从结构 A 到结构 B 的同态是一个从 dom(A)到 dom(B)的函数 f，满足对于每个原子公式 φ(v1,…,v **n)和任意 n 元组 a = (a1,…,a** n)属于 A 的元素，

> *A* ⊨ φ \[a] ⇒ *B* ⊨ φ \[b]

其中 b 是(f(a1),…,f(a\*\*n))。如果我们在引用的条件中用‘⇔’代替‘⇒’，我们说 f 是 A 嵌入到 B 中的一个嵌入。由于语言包括=，A 嵌入到 B 中总是一对一的，尽管它不一定是 B 的定义域上的满射。如果它是满射的，那么从 dom(B)到 dom(A)的逆映射也是一个同态，嵌入和它的逆映射都被称为同构。如果两个结构同构，则它们共享所有模型论属性；特别是它们在元素等价性方面是等价的。

如果 A 和 B 是具有签名 K 的结构，其中 dom(A)是 dom(B)的子集，并且 A 中 K 符号的解释只是它们在 B 中解释的限制，则我们说 A 是 B 的子结构，反之亦然，B 是 A 的扩展。如果此外 B 有一些不在 A 中的元素，我们说 A 是 B 的真子结构，B 是 A 的真扩展。如果 B 是一个结构，X 是 dom(B)的一个非空子集，则存在一个唯一的最小子结构，其域包含 X 的所有元素。它被称为由 X 生成的 B 的子结构，我们首先将 X 添加到所有 K 的个体常量 cB 的元素中，然后在 K 的函数符号 F 下封闭。

例如，由数字 1 生成的域 R 的子结构包括 1、0（因为它由常量 0 命名）、1+1、1+1+1 等，-1、-2 等，换句话说，整数环。（无需在乘法下封闭，因为整数集已经在乘法下封闭。）如果我们还包括一个表示 1/x 的符号，由 1 生成的子结构将是有理数域。因此，子结构的概念对签名的选择是敏感的。

## 2. 初等映射

设 L 为一阶语言，A 和 B 为 L-结构。假设 e 是一个将 A 的一些元素映射到 B 的元素的函数。如果对于 e 的定义域中的元素序列 a1, …, a **n，在 A 中满足 L 的公式 φ(x1,…,x** n)，它们在 e 的映射下在 B 中也满足相同的公式；用符号表示为

> *A* ⊨ φ(_a_1,…,*a\*\*n*) ⇒ *B* ⊨ φ(*e*(_a_1),…,*e*(*a\*\*n*)).

如果 e 是 A 到 B 的一个元素嵌入，那么我们说 e 是一个元素映射，并且它的定义域是 A 的整个定义域。顾名思义，元素嵌入总是嵌入。

如果存在从 A 到 B 的元素嵌入，那么 A 和 B 是元素等价的。另一方面，元素等价结构之间的嵌入，甚至同构结构之间的嵌入，不一定是元素的。（例如，用由 0 和+组成的符号表示整数的阿贝尔群 Z，将每个整数 n 映射到 2n 的嵌入是一个嵌入，当然 Z 与自身同构；但这个嵌入不是元素的，因为 1 满足公式 ¬∃y(y + y = v1)，但 2 不满足。）

如果 A 是 B 的一个元素子结构，B 是 A 的一个元素扩张，那么我们说 A 是 B 的一个元素子结构，B 是 A 的一个元素扩张，如果 A 是 B 的一个子结构，并且包含映射是一个元素嵌入。从定义中可以立即得出，一个 A 的元素扩张的元素扩张再次是 A 的一个元素扩张。

初等嵌入是在一阶模型论中考虑的自然映射。大约在 1950 年，亚伯拉罕·罗宾逊对于一般代数结构之间的映射似乎很少是初等的这一事实印象深刻，而一些重要的映射（例如两个代数闭域之间的嵌入，或者两个实闭域之间的嵌入）却是初等的。他还惊讶地发现，关于代数闭域的这个事实是另一种陈述一个著名定理——希尔伯特零点定理的方式。罗宾逊的这些观察对模型论的发展产生了巨大影响。在罗宾逊的术语中，如果一个一阶理论的每个模型之间的嵌入都是初等的，则该理论是模型完备的。这个概念有很多用途，并且在代数中的模型论应用中经常出现。

与模型完备性密切相关但不应与之混淆的概念是量词消除。假设 L 是一个一阶语言，T 是 L 中的一个理论，Φ 是 L 的一组公式。如果对于 L 的每个公式 φ(x1,…,x **n)，存在一个 Φ 中的公式 ψ(x1,…,x** n)，使得在 T 的每个模型中，φ 和 ψ 恰好由相同的 n 元素（a1,…,a\*\*n）满足（在塔斯基的真值定义的第 2.2 节中讨论的“量词消除方法”是一种用于证明消除量词到特定公式集的句法和预模型论方法）。如果一个理论具有量词消除，则它具有消除量词到无量词公式的性质。

模型完备性与量词消除之间的联系如下。罗宾逊证明了一个理论是模型完备的当且仅当它具有将量词消除到存在公式的能力（即，要么是无量词的公式，要么由一个或多个存在量词后跟一个无量词的公式组成）。因此，具有量词消除的理论是模型完备的，但反之不一定成立。然而，证明一个理论是模型完备的有时是向证明它具有量词消除的有用第一步。

回到基本嵌入：它们具有一些有用的特性。我们有四个空间。

> 下降的 Löwenheim-Skolem 定理： 假设 L 是一个有 κ 个公式的一阶语言，A 是一个 L-结构，λ 是一个至少为 κ 但小于 A 的基数。还假设 X 是 A 中最多有 λ 个元素的集合。那么 A 有一个基数恰好为 λ 且包含 X 中所有元素的初等子结构。

在经典逻辑的条目中有一个使用 Skolem 壳的证明。请注意，λ 必须是无限的，因为每个一阶语言都有无限多个公式。

> 初等链定理： 假设 L 是一个一阶语言，A0，A1，...是一个 L-结构的序列（任意长度），其中序列中的任何结构都是序列中后面的所有结构的元子结构。那么存在一个唯一的最小的 L-结构 B，它包含序列中的所有结构作为子结构；这个结构 B 是序列中所有结构的元扩张。
>
> 元融合定理： 假设 L 是一个一阶语言，A 是一个 L-结构，B，C 是 A 的两个元扩张。那么存在 B 的一个元扩张 D 和 C 到 D 的一个元嵌入 e，使得（i）对于 A 的每个元素 a，e(a) = a，（ii）如果 c 是 C 的一个元素但不是 A 的元素，则 e(c)不在 B 中。

初等合并定理是下一节中的紧致性定理的结果。

> 上升的 Löwenheim-Skolem 定理： 假设 L 是一个具有 κ 个公式的一阶语言，A 是一个基数为无限基数 μ 的 L-结构，λ 是一个至少与 κ 和 μ 一样大的基数。那么 A 有一个基数为 λ 的初等扩张。

这也可以从紧致性定理推导出来，如经典逻辑条目中所示。定理的名称有点不幸，因为这个定理最初是由塔斯基证明的，而斯科勒姆甚至不相信它（因为他不相信可数无穷的基数）。

还有另一种证明方法，使用了基本合并定理和基本链定理。我们可以证明结构 A 有一个适当的基本扩张 A'。（有一个使用紧致性定理和图表引理的证明，见下面的 3.1 和 3.2；另一个证明是通过超力量，见下面的 4.1。）现在在基本合并定理中使用 A'和再次使用 A'作为结构 B 和 C。然后，定理中的 D 是 A 的基本扩张，并且根据定理中的(ii)，它必须包含不在 A'中的元素，因此它是一个适当的基本扩张。重复此过程以获得 D 的适当基本扩张，依此类推，直到获得无限的基本链。使用基本链定理找到一个位于此链顶部的 A 的基本扩张。重复这些步骤，直到获得基数至少为 λ 的 A 的基本扩张。然后，如果需要，使用向下的 Löwenheim-Skolem 定理将基数降低到恰好为 λ。这种论证在一阶模型论中非常常见。通过在构造过程中精心选择合并物，我们经常可以确保顶部结构具有我们可能需要的进一步属性（例如饱和性，见下面的 4.2）。

## 3. 五个重要定理

本节报告的五个定理在某种意义上是经典模型论的支柱。它们都是关于一阶模型论的定理。二十世纪第三个季度的大部分工作都致力于在一阶模型论中推导出这些定理的后果，以及类似定理在非一阶语言中的适用程度。

### 3.1 紧致性定理

> 如果 T 是一个一阶理论，并且 T 的每个有限子集都有一个模型，那么 T 有一个模型。

在经典逻辑的条目中有这个定理的证明。该定理有几个有用的释义。例如，它等价于以下陈述：

> 假设 T 是一个一阶理论，φ 是一个一阶句子。如果 T ⊨ φ，则存在 T 的一个有限子集 U，使得 U ⊨ φ。

（有关模型论中模型论推论 ⊨ 的概念，请参见该条目。要从第一个陈述推导出第二个陈述，请注意‘T ⊨ φ’为真当且仅当不存在理论 T ∪ {¬ φ}的模型。）

Anatolii Mal’tsev 首次在 1938 年提出了紧致性定理（适用于任何签名的一阶逻辑），并在 1940/1 年将其用于证明关于群的几个定理；这似乎是模型论在古典数学中的第一个应用。几年后，Leon Henkin 和 Abraham Robinson 独立重新发现了该定理，并给出了一些进一步的应用。该定理在几乎所有无穷语言中都严重失败。

### 3.2 图引理

如果 A 是一个 L-结构，则我们按照以下方式形成 A 的图。首先，向 L 添加一些新的个体常量，以用作 A 中所有元素的名称。（这说明在一阶模型论中，我们很容易使用不可数的签名。这些签名中的“符号”是抽象的集合论对象，而不是页面上的标记。）然后，使用 L 和这些新常量，A 的图是在 A 中为真的所有原子句和原子句的否定的集合。

> 如果 B'是 A 的图表的一个模型，并且 B 是 B'去除了签名中的新常量后的结果，则存在将 A 嵌入到 B 中的映射。

换句话说，如果 A 的一个元素由一个新常量 c 命名，则将该元素映射到 B'中命名为 c 的元素。这个引理的一个变体在基本合并定理的证明中使用。

### 3.3 Lyndon 插值定理

这个定理可能是模型论中最古老的定理之一，因为它推广了用于演绎法的分配律，这些分配律至少可以追溯到早期文艺复兴时期。如果我们假设我们的一阶语言具有 ∧、∨ 和 ¬ 这些符号，但没有→或 ⇔，那么这个定理最容易陈述。在公式 φ 中，谓词符号 R 的出现被称为正（resp.负），如果它位于偶数（resp.奇数）次 ¬ 的范围内。

> 假设 L 和 M 是一阶语言，L ∪ M 是包含 L 和 M 的最小一阶语言，L ∩ M 是由 L 和 M 中所有公式组成的语言。假设 T 是 L 中的一个理论，U 是 M 中的一个理论，并且没有(L ∪ M)-结构既是 T 的模型又是 U 的模型。那么存在一个 L ∩ M 中的句子 φ，在 T 的所有模型中为真，在 U 的所有模型中为假。（这个句子 φ 被称为插值句。）此外，φ 中每个具有正出现的谓词符号都在 T 的某个句子中具有正出现，并且在 U 的某个句子中具有负出现；反之，φ 中每个具有负出现的谓词符号都在 T 的某个句子中具有负出现，并且在 U 的某个句子中具有正出现。

这个定理有几个证明，其中并不都是模型论的。如果没有最后一句，这个定理被称为克雷格的插值定理，因为威廉·克雷格在 1959 年之前几年证明了这个版本的定理，而罗杰·林登发现了完整的陈述。正如克雷格当时指出的，他的插值定理给出了埃弗特·贝斯的可定义性定理的一个简洁证明，该定理如下。

假设 L 是一个一阶语言，M 是通过向 L 添加一个新的谓词符号 R 得到的一阶语言。假设 T 是 M 中的一个理论。如果存在两个 M-结构，它们是 T 的模型，具有相同的元素并以相同的方式解释 L 的所有符号，但以不同的方式解释符号 R，则我们说 T 隐含地定义了 R。如果存在一个 L 的公式 φ(x1,…,x **n)，在 T 的每个模型中，公式 φ 和 R(x1,…,x** n)被完全相同的 n 元组(a1,…,a\*\*n)满足，则我们说 T 显式地定义了 R。很容易看出，如果 T 显式地定义了 R，则它也隐含地定义了 R。（这个事实被称为帕多亚的方法；帕多亚使用隐含定义的失败来证明显式定义的失败。）贝丝定理是其逆命题：

> 假设 L、M、R 和 T 如上所述。如果 T 隐含地定义了 R，则 T 显式地定义了 R。

### 3.4 省略类型定理

这个定理需要一些初步定义。假设 L 是一个一阶语言，T 是 L 中的一个完全理论，Φ 是 L 的一组公式，这些公式都有自由变量 x（没有其他自由变量）。如果存在一个 A 的元素，满足 Φ 中的所有公式，我们说 A 实现了 Φ；如果 A 没有这样的元素，我们说 A 省略了 Φ。L 的一个只有自由变量 x 的公式 ψ(x)被称为 Φ 在 T 中的支持，如果 T 的推论包括句子 ∃xψ(x)和每当 φ(x)是 Φ 中的公式时，句子 ∀x(ψ(x) → φ(x))。很容易看出，如果 Φ 在 T 中有一个支持，那么 T 的每个模型都实现了 Φ。反之不一定成立，但省略类型定理告诉我们，如果我们限制在可数的一阶语言上，这是成立的：

> 假设 L 是一个具有可数多个公式的一阶语言。假设 T 是 L 中的一个完全理论，Φ 是 L 的一组公式，这些公式都有自由变量 x。最后假设 T 的每个只有可数多个元素的模型都实现了 Φ。那么在 T 中存在一个 Φ 的支持。（换句话说，在 T 的任何模型中，不能省略‘类型’Φ 的原因是有限的。）

省略类型定理可以追溯到 20 世纪 50 年代中期。它明显依赖于语言是一阶和可数的。它有几个有用的推广，例如模型论强制，它是集合论中强制构造的类比。实际上，用于模型论强制的游戏（参见逻辑和游戏的条目）可以改编为证明省略类型定理。对于不可数的一阶语言，有类似但更复杂的定理；其中一些可以解释为无穷语言的省略类型定理。

### 3.5 初始模型定理

如果一个无量词公式具有以下三种形式之一，则称其为 Horn 公式（以 Alfred Horn 命名）：

* ψ，
* φ1 ∧ … ∧ φn → ψ，
* ¬(φ1 ∧ … ∧ φn)，

其中公式 φ1，…，φn，ψ 都是原子的。一个全称 Horn 句子（也被计算机科学家称为 Horn 子句）是由全称量词后跟一个无量词 Horn 公式组成的句子；如果它不包含否定符号（即不来自第三类无量词 Horn 公式），则被称为严格的。

> 设 T 是由严格的全称 Horn 句子组成的理论。那么 T 具有一个模型 A，满足对于 T 的每个模型 B，存在一个唯一的从 A 到 B 的同态映射。（这样的模型 A 被称为 T 的初始模型。它在同构意义下是唯一的。）

这个定理是 Mal'tsev 的一个推广，它是一种称为生成元和关系的群论构造的主要思想。它是代数规范的主要思想之一，代数规范是计算机科学中系统规范的一种方法。系统的所需行为被写成一组严格的全称 Horn 句子，然后这些句子的初始模型是所需系统的一个抽象版本。

## 4. 三个有用的构造

一种构造是一种建造结构的过程。我们已经在上面的定理中看到了几种构造：例如省略类型构造和初始模型构造。这里还有三个。

### 4.1 乘积和简化乘积

如果 A 和 B 是 L-结构，我们按照以下方式形成它们的乘积 C = A × B。C 的元素是有序对(a,b)，其中 a 是 A 的元素，b 是 B 的元素。谓词符号被“逐点”解释，例如

> 如果且仅如果 a 在 PA 中且 b 在 PB 中，那么(a,b)在 PC 中。

结构 A 和 B 被称为 A × B 的因子。同样地，我们可以形成任意数量结构的乘积。如果乘积的所有因子都是相同的结构 A，则该乘积被称为 A 的幂。一个名为 Feferman-Vaught 定理的定理告诉我们如何从其因子的完全理论中计算出乘积的完全理论。

这个构造有一些变体。我们可以在乘积 C 的域上定义一个等价关系，然后取一个结构 D，其元素是等价类；谓词符号在 D 中被解释，使得从 dom(C)到 dom(D)的自然映射成为一个同态。在这种情况下，结构 D 被称为乘积 C 的简化乘积。如果所有因子都等于 A，则它是 A 的简化幂；在这种情况下，从 A 到 D 的对角线映射是通过将每个元素 a 映射到元素(a,a,…)的等价类得到的。

假设我们使用一个集合 I 来索引产品 C 中的因素。一个超滤器是指具有以下属性的 I 的子集 U：

* 如果集合 X 和 Y 都在 U 中，那么它们的交集 X ∩ Y 也在 U 中；
* 如果 X 在 U 中且 X ⊆ Y ⊆ I，则 Y 也在 U 中；
* 对于 I 的每个子集 X，X 和其补集 I \ X 中恰好有一个属于 U。

如果我们有一个在 I 上的超滤器 U，则我们可以通过使 C 中的两个元素等价，当且仅当它们在超滤器 U 中的索引集是一个集合时，从 C 构造一个约化积。这确实是 C 的定义域上的一个等价关系，而得到的约化积被称为 C 的因子的超积积。如果 C 是 A 的幂，则该超积积被称为 A 的超幂，有时写作 U-prod A。一个名为 Łoś 定理的定理描述了超积积中哪些句子是真实的。它最有用的结果是以下内容：

> 如果 U 是一个超滤器，则从 A 到 U-prod A 的对角线映射是一个基本嵌入。

如果超滤 U 是非主要的，即不包含有限集合，则对角线映射不到 U-prod A 的定义域上，事实上 U-prod A 通常比 A 要大得多。因此，我们有一种构造大型元素扩展的方法。选择公理保证了每个无限集合上有许多非主要超滤器。超力是处理集合论中的大基数的重要工具（参见集合论条目）。

Saharon Shelah 的一个显著（但在实践中并不是非常有用）的定理告诉我们，如果结构 A 和 B 具有彼此同构的超力，则它们是元素等价的。

### 4.2 饱和

假设 A 是一个 L-结构，X 是 A 的元素集合，B 是 A 和 b 的元素的初等扩张，b 和 c 是 B 的两个元素。那么如果对于 L 的每个公式 φ(v1,…,v\*\*n+1)和 X 的每个 n 元组 d 的元素，

> B ⊨ φ\[b,d] ⇔ B ⊨ φ\[c,d]，则称 b 和 c 在 X 上具有相同的类型。

如果对于 A 的任何元素扩张 B，只要 X 是 A 的基数小于 A 的元素集合，那么 B 中的每个元素在 X 上都具有与 A 中某个元素相同的类型，我们称 A 是饱和的。

这个相当复杂的定义并没有给出饱和结构有多有用的线索。如果每个结构都有一个饱和的初等扩张，那么模型论的许多结果将更容易证明。不幸的是，饱和初等扩张的存在取决于集合宇宙的特征。有一些技术手段可以克服这个障碍，例如使用饱和概念的弱化。我们有两种主要方法来构造具有一定饱和度的初等扩张。一种是通过超力量，利用巧妙构造的超滤波器。另一种是通过取初等链的并集，推广我们为上升的 Löwenheim-Skolem 定理给出的证明。

部分饱和的实数域 R 的初等扩张的存在是亚伯拉罕·罗宾逊的非标准分析的主要技术事实。有关此事的更多信息，请参见模型论条目的第 4 节。尽管模型论为非标准分析提供了第一步，但这个分支迅速成为一个独立的学科，并且它与一阶模型论的联系如今相当薄弱。

### 4.3 Ehrenfeucht-Mostowski 模型

设 A 为 L-结构，X 为 A 的元素集合，<为 X 的线性排序（不一定可由一阶公式定义）。如果对于每个自然数 n，以及 A 的所有元素 a1,…,a **n 和 b1,…,b** n，满足 a1 < … < a **n 和 b1 < … < b** n，将每个 a **i 映射到相应的 b** i 的映射是一个元映射，则(X,<)是 A 中的不可辨序列。如果 T 是一个具有无穷模型的理论，则 T 具有是不可辨序列的 Skolem 包（参见经典逻辑条目）的模型。这些模型被称为 Ehrenfeucht-Mostowski 模型，以这两位波兰模型论者在 20 世纪 50 年代中期首次进行这种构造而命名。这些模型往往与饱和相反；我们可以安排它们的元素中很少有关于元素集合的类型。一些关于集合论不同模型之间的重要区别可以用这些模型中的不可辨序列来表达；请参见集合论条目。

## 5. 三个成功的研究计划

每个健康的数学分支都需要一组问题，这些问题对其研究人员构成了严峻的挑战。我们在这里简要介绍了二十世纪下半叶推动一阶模型论前进的一些研究计划。参考文献中的 Marcja 和 Toffalori 的书籍提供了关于这些计划的更多信息。除了这些计划之外，还有其他当前的计划；例如，由 Yuri Ershov 编辑的手册是关于在结构递归构建时的模型论。

### 5.1. 类别性和分类

1904 年，奥斯瓦尔德·韦布伦将一个理论描述为分类的，如果它只有一个模型与同构，即它有一个模型，而且所有的模型彼此同构。（这个名字是由约翰·杜威提出的，他还提出了其他理论的“分离”这个名字。这一对术语来自传统逻辑，作为句子类型的名称。）令人沮丧的消息是，没有无限模型的分类一阶理论；我们可以立即从上升的 Löwenheim-Skolem 定理看出这一点。事实上，如果 T 是一个具有无限模型的一阶理论，那么我们在 T 中所希望的最强类型的分类性是对于某些无限基数 κ，T 恰好有一个基数为 κ 的模型，与同构。T 的这个性质被称为 κ-分类性。

现在有一个启发性原则，许多人使用过，尽管它似乎没有简单的表述。我们建议“少即美”。这个原则说，如果一个一阶理论 T 将其模型（特定基数的模型）约束为彼此相似，这只能是因为 T 的模型很少有不规则和不对称之处。因此，应该有一个对这些模型的良好结构描述。人们应该期望它们从经典数学的角度来看是“良好的结构”。作为第一步，我们很容易从上升和下降的 Löwenheim-Skolem 定理看出，如果 T 对于至少与 T 的语言中的公式数量一样大的某个基数 κ 是 κ-分类的，那么 T 必须是一个完全理论。从现在开始，T 是一个具有无限模型的完全理论；为了简单起见，我们将假设 T 的语言是可数的。

1954 年，Jerzy Łoś 宣布他只能找到三种关于理论 T 的 κ-范畴的例子。即：

* 如果 T 对于每个无限基数 κ 都是 κ-范畴的话，那么 T 就是完全范畴的。一个典型的例子是有限域上的无限维向量空间的完全理论。
* 如果 T 在 κ 为不可数时才是 κ-范畴的（但不是完全范畴），那么 T 就是不可数范畴的。Łoś 能找到的唯一例子基本上是代数闭域的完全理论；根据 Steinitz 的一个著名定理，这是不可数范畴的。
* 如果 T 在 κ 可数时恰好是 κ 可数的（但不是不可数可数的），则 T 是可数范畴的。一个典型的例子是没有第一个或最后一个元素的稠密线性排序的完全理论；这是根据 Cantor 的一个著名定理可数范畴的。

Łoś 问是否存在除了这三种可能性之外的其他可能性。（当然，大多数完全理论对于任何 κ 都不是 κ 可数的。）

Łoś 的这个问题对研究产生了巨大的刺激，并导致了 Michael Morley 在 1965 年发表的一篇经典论文，该论文表明 Łoś 的三种可能性实际上是唯一的。Morley 分析的一个核心思想是不可数可数理论的模型具有最小可能数量的元素类型；这直接导致了模型论的一个分支，称为稳定性理论，该理论研究具有有限数量元素类型的理论。这些理论具有一个非常重要的性质，即它们模型中的任何无穷不可辨序列在任何线性排序下都是不可辨的；因此，这些序列是向量空间基的一种推广。Morley 的工作中还有一个隐含的思想，但是由 William Marsh、John Baldwin 和 Alistair Lachlan 的后续工作得到了很大的澄清，即在不可数可数理论的任何模型中都存在一个中心核心（称为强极小集），它具有遵守向量空间中线性依赖的类似规律的依赖关系。通过这种依赖关系，可以为模型定义一个维度，并且模型在核心之外的部分与核心紧密相关，以至于维度决定了模型的同构性。

Saharon Shelah 以极大的机智和精力发展了 Morley 的思想。他的主要目标是通过展示理论 T 的种类之间存在明确的分界线来扩展“少即是美”的观念。在分界线的一侧，是具有某些良好结构特性的理论，这些特性迫使给定基数的非同构模型数量较少。而在另一侧，每个理论都有（例如）两个具有相同基数但非同构且极难区分的模型。Shelah 为这项研究创造了“分类理论”的名称。下面列出的 Lascar 的文本是对从 Łoś 到 Shelah 的整个计划的优雅介绍。与此同时，Shelah 本人已将其扩展到远远超出一阶逻辑的范畴。即使在一阶情况下，Shelah 也不得不发明新的集合论技术（如适当的强制）来进行他的构造。

分类理论有两个相关但基本上不同的目标：通过一些相对简单的组合不变量对理论的模型进行分类（或者表明这样的分类是不可能的），以及通过其模型中某些基本结构的存在或不存在来对理论本身进行分类。在《分类理论》的第二版中，Shelah 去掉了副标题“以及非同构模型的数量”，以强调项目的更广泛目标。一般来说，如果一个理论类在基数不变量方面和相对于理论的公式的某些绝对条件方面都能被识别为分类理论上的强大理论，则它被认为是分类理论上的强大理论。例如，根据定义，语言 L 中的理论 T 是稳定的，如果存在某个基数 κ ≥ |L|，使得对于 T 的基数不超过 κ 的每个模型 M，M 上的 1-类型的数量不超过 κ。等价地，如果没有公式相对于 T 具有序性质，则理论 T 是稳定的。也就是说，不存在 L-公式 φ(x; y)（其中 x 和 y 可以是变量的元组），使得对于每个自然数 n，T 与存在 a1，…，a **n；b1，…，b** n，使得 φ(a **i,b** j)成立当且仅当 i ≤ n。

### 5.2. 几何模型论

几何模型论起源于迈克尔·莫利（Michael Morley）在 1965 年的论文，但与谢拉（Shelah）的工作方向不同（尽管今天它经常使用谢拉在分类计划中开发的技术工具）。莫利已经证明了无可数范畴理论的模型具有自身有趣的结构特性，而不论结构的完全理论如何；因此，习惯上称为无可数范畴结构，指的是无可数范畴理论的模型。（同样，完全范畴结构也是如此。）在西伯利亚的鲍里斯·齐尔伯（Boris Zilber）和美国的格雷格·切林（Greg Cherlin）独立地注意到，在无可数范畴结构中可定义的任何无限群都必须与代数几何学家研究的代数群有许多共同特征。特别是，齐尔伯证明了许多代数几何学的方法可以推广到模型论的情况。他的秘密武器是几何学中的贝祖定理，他用它来引导他解决非常困难的模型论问题；例如，他的定理表明没有完全范畴理论可以由有限数量的公理公设。 （它是秘密的，因为它指导他的直觉，但从未明确出现在他的结果中。）齐尔伯还注意到了洛斯（Łoś）上述两个例子之间的一个重要区别。即在向量空间中，子空间（即线性相关闭合的子集）形成一个模块化格；但代数闭域的代数闭子集形成的格不是模块化的。

部分原因是由于西伯利亚和西方之间的通信困难，Zilber 的这些结果需要一些时间来消化，而且在某种程度上它们必须在西方重新发现。但是当信息最终传达过来时，结果就是一个被称为几何模型论的模型论新分支。该计划的广义目标是根据(a)在这些结构中可解释的群或域（在模型论条目中概述的意义上）和(b)这些结构是否具有“模块化几何”来对结构进行分类；然后利用这种分类来解决模型论和几何学中的问题。从 1980 年代中期开始，这项研究的领导者是 Ehud Hrushovski。在 1990 年代初，Hrushovski 与 Zilber 合作，使用模型论的方法证明了几何 Mordell-Lang 猜想在所有特征下的正确性（这是一个关于经典丢番图几何的猜想）。Bouscaren（ed.）1998 专门讨论了 Hrushovski 的证明以及模型论的必要背景。无论(a)还是(b)对于 Hrushovski 的论证都是基本的。

### 5.3. O-极小性

在这里描述的三个计划中，这是最古老的，因为它源于 Tarski 对实数域的完全理论的描述（他通过量词消除的方法证明了这一点）。在给出这个描述的过程中，Tarski 已经证明了相关语言中的每个一阶公式 φ(x)，可能带有参数，都由形如 x < s 或 t < x 的公式的布尔组合满足，其中 s，t 是命名参数的常数项。另一种说法是

> 每个由一阶公式定义的元素集合都是具有命名端点的开区间的有限并集，以及一些有限元素集合。

具有这种性质的线性有序结构被称为 o-极小。 （名称的想法是 o-极小性是“强极小性”的类比，以一种对带有线性排序的结构有意义的形式，因此“o-”表示排序。）

1982 年，Lou van den Dries 表明实数域是 o-极小的事实提供了关于高维可定义集合的大量有用信息，例如可定义子集的家族。此后不久，Julia Knight、Anand Pillay 和 Charles Steinhorn 注意到，如果一个结构 A 是 o-极小的，那么与 A 元素等价的任何结构也是 o-极小的，并且 van den Dries 对高维可定义集合的分析适用于所有这些结构。这些结果导致了模型论和函数论之间的许多活动。解决了模型论和函数论中的几个老问题。Alex Wilkie 表明，带有指数符号的实数域是 o-极小的，并且具有一个模型完备的完全理论，从而肯定了 Tarski 关于这个结构是否允许量词消除的古老问题的答案，尽管他的方法与 Tarski 所考虑的句法分析相去甚远。（这是我们需要记住模型完备和量词消除之间的区别的一个案例；请参见上面的第 2 节。这个特定理论是否具有量词消除是一个更困难的问题，与一个称为 Schanuel 猜想的数论深度猜想密切相关；请参见 Macintyre 和 Wilkie 的论文。）我们现在知道许多方法可以向实数域添加有趣的特征，以使得结果结构仍然是 o-极小的（因此在某种意义上是数学上可处理的）。Van den Dries 敦促 o-极小结构为发展亚历山大·格罗滕迪克的“温顺拓扑”计划提供了一个良好的环境。

在 2006 年，Jonathan Pila 和 Alex Wilkie 证明了，只要去除使用多项式不等式定义的子集，实数域的 o-极小扩张中可定义的 Rn 的子集具有很少的有理点。随后，许多作者使用这个 o-极小计数定理解决了一些重要的迪欧几何学中的开放问题，这个策略最早由 Pila 和 Umberto Zannier 用于重新证明 Manin-Mumford 猜想。

Kobi Peterzil 和 Sergei Starchenko 发展了一种 o-极小复分析理论。就像经典的复分析方法一样，可以将复数解释为由实数对按照通常规则定义的加法和乘法组成，这些规则涉及它们的实部和虚部。在这个领域的结果中，他们的代数性定理最为引人注目，它断言如果 Cn 的子集是复解析的（意味着它是闭的，并且在某个实数域的 o-极小扩张中局部由有限多个复解析函数的消失定义），那么它必须是代数的，也就是由多项式方程的消失定义的，这个结果在函数超越和齐次动力学的研究中产生了强大的影响。

这三个程序都产生了新的证明技术、构造方法和分类方法。正如我们所预料的那样，研究人员已经探索了每种技术的应用范围。其中一个结果是出现了几个有用的一阶理论类，这些理论类与这三个程序中的多个相关。例如，Shelah 的分类理论的一个核心工具是他的分叉概念，这是对早期代数概念的广泛推广。简单理论的类别是通过分叉具有某些良好性质来定义的，而玫瑰理论的类别则是通过进一步推广的分叉（称为 þ-分叉）得到的独立概念的存在来表征的；几个自然的简单理论的例子在几何模型论中浮出水面，而 o-极小结构的完全理论则是玫瑰理论的例子。其他一些理论类别，用越来越晦涩的缩写表示，例如 NSOP1（“不具有更强序关系的理论”）理论，已经被确定出来，其中一些看似稳定理论的特征在修改形式下仍然存在。例如，前面提到的 NSOP1 是通过不存在某种树形配置来定义的，但也以“Kim-独立性”命名的良好独立理论来表征。与这些技术进步相平行，一阶模型论继续与数论、函数分析和其他纯粹甚至应用数学的问题更加密切地联系在一起。

在谢拉的分类理论计划中，划分线起着核心作用。也就是说，所有理论的类别应该被划分为具有某种属性和不具有某种属性的类别，并且这两个类别的划分应该是真实的，即这些类别应该允许不同性质的各种定义。例如，稳定理论的类别可以用许多外观不同的方式来描述，例如，那些关于每个类型都可定义的理论，那些没有序数性质的公式的理论，或者那些对于每个大小至少与语言的基数相同的模型，不存在超过基数个 1-类型的理论。这些分类理论类别中的许多是通过禁止某些组合配置的存在来定义的。例如，依赖或 NIP（“不独立性属性”）理论的类别被定义为对于任何公式 φ(x,y)，都不可能找到一个模型 M 和序列(ai)i=0∞ 和(bS)，其中 b 序列由自然数的子集索引，使得当且仅当 i ∈ S 时，M ⊧ φ(ai,bS)。在谢拉确定独立性属性的同时，弗拉基米尔·瓦普尼克和亚历克谢·切尔沃年基斯在机器学习理论中发现了相同的概念。NIP 的模型论分析的结果已经在神经网络理论、极值组合学、差分隐私理论和更广泛的机器学习理论中得到了应用。


## Bibliography

* Beth, E., 1953, “On Padoa’s method in the theory of definition”, *Nederlandse Akademie van Wetenschappen*, Proceedings (Series A), 56: 330–339.
* Bouscaren, E. (ed.), 1998, *Model Theory and Algebraic Geometry: An introduction to E. Hrushovski’s proof of the geometric Mordell-Lang conjecture* (Lecture Notes in Mathematics: Volume 1696), Berlin: Springer-Verlag.
* Buechler, S., 1996, *Essential Stability Theory*, Berlin: Springer-Verlag.
* Chang, C. and Keisler, J., 1990, *Model Theory*, Amsterdam: North-Holland.
* Chatzidakis, Z. *et al*. (eds.), 2008, *Model Theory with Applications to Algebra and Analysis*, Volumes 1 and 2, Cambridge: Cambridge University Press.
* Dries, L. van den, 1998, *Tame Topology and O-minimal Structures*, Cambridge: Cambridge University Press.
* Ealy, C. and Onshuus, A., 2007, “Characterizing rosy theories”, *Journal of Symbolic Logic*, 72: 919–940.
* Ehrig, H. and Mahr, B., 1985, *Fundamentals of Algebraic Specification I: Equations and Initial Semantics*, Berlin: Springer-Verlag.
* Ershov, Y. (ed.), 1998, *Handbook of Recursive Mathematics I, Recursive Model Theory*, New York: Elsevier.
* Hart, B., Lachlan, A. and Valeriote, M., 1996, *Algebraic Model Theory*, Dordrecht: Kluwer.
* Haskell, D., Pillay, A. and Steinhorn, C., 2000, *Model Theory, Algebra, and Geometry*, Cambridge: Cambridge University Press.
* Hodges, W., 1993, *Model Theory*, Cambridge: Cambridge University Press.
* –––, 1998, “The laws of distribution for syllogisms”, *Notre Dame Journal of Formal Logic*, 39: 221–230.
* Karpinski, M. and A. Macintyre, 1997, Polynomial bounds for VC dimension of sigmoidal and general Pfaffian neural networks, 1st Annual Dagstuhl Seminar on Neural Computing (1994), *Journal of Computer and System Sciences*, 54(1\[2]): 169–176.
* Lascar, D., 1986, *Stability in Model Theory*, Harlow: Longman.
* Macintyre, A. and Wilkie, A., 1996, “On the decidability of the real exponential field”, in *Kreiseliana: About and around Georg Kreisel*, P. Odifreddi (ed.), Wellesley MA : A. K. Peters, 441–467.
* Marcja, A. and Toffalori, C., 2003, *A Guide to Classical and Modern Model Theory*, Dordrecht: Kluwer.
* Marker, D., 2002, *Model Theory: An Introduction*, New York: Springer-Verlag.
* Morley, M., 1965, “Categoricity in power”, *Transactions of the American Mathematical Society*, 114: 514–538.
* Peterzil, Y. and S. Starchenko, Sergei, 2009, Complex analytic geometry and analytic-geometric categories, *Journal für die reine und angewandte Mathematik*, 626: 39–74.
* Pillay, A., 1996, *Geometric Stability Theory*, Oxford: Oxford University Press.
* Pila, J., 2011, “O-minimality and the André-Oort conjecture for **C***n*”, *Annals of Mathematics* (2), 173(3): 1779–1840.
* Pila, J. and Wilkie, A., 2006, “The rational points of a definable set”, *Duke Mathematics Journal*, 133(3): 591–616.
* Pila, J. and Zannier, U., 2008, “Rational points in periodic analytic sets and the Manin-Mumford conjecture”, *Rendiconti Lincei Matematica E Applicazioni*, 19(2): 149–162.
* Poizat, B., 2000, *A Course in Model Theory*, New York: Springer.
* Shelah, S., 1990, *Classification Theory*, Amsterdam: North-Holland.
* Tarski, A., 1951, *A Decision Method for Elementary Algebra and Geometry*, Berkeley: University of California Press.
* Vaught, R., 1974, “Model theory before 1945”, in *Proceedings of the Tarski Symposium*, L. Henkin, *et al*. (eds.), Providence RI : American Mathematical Society, 153–172.
* Veblen, O., 1904, “A System of Axioms for Geometry”, *Transactions of the American Mathematical Society*, 5(3): 343–384
* Wagner, F., 2000, *Simple Theories*, Dordrecht: Kluwer Academic Publishers.
* Wilkie, A., 1996, “Model completeness results for expansions of the real field by restricted Pfaffian functions and the exponential function”, *Journal of the American Mathematical Society*, 9: 1051–1094.

## Academic Tools

| ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=modeltheory-fo).                                                                      |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/modeltheory-fo/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
| ![inpho icon](../../.gitbook/assets/inpho.png)         | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=modeltheory-fo\&redirect=True) at the Internet Philosophy Ontology Project (InPhO).   |
| ![phil papers icon](../../.gitbook/assets/pp.png)      | [Enhanced bibliography for this entry](https://philpapers.org/sep/modeltheory-fo/) at [PhilPapers](https://philpapers.org/), with links to its database.                          |

## Other Internet Resources

* Hrushovski, E. and Loeser, F., 2010, [Non-archimedean tame topology and stably dominated types](https://arxiv.org/pdf/1009.0252.pdf), online manuscript at arXiv.org.
* Simon, P., 2012, [Lecture notes on NIP theories](https://arxiv.org/abs/1208.3944v2), online manuscript at arXiv.org.
* [Schematic representation of the classification of theories](http://www.forkinganddividing.com/).

## Related Entries

[logic: and games](https://plato.stanford.edu/entries/logic-games/) | [logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [logic: infinitary](https://plato.stanford.edu/entries/logic-infinitary/) | [model theory](https://plato.stanford.edu/entries/model-theory/) | [set theory](https://plato.stanford.edu/entries/set-theory/) | [Tarski, Alfred: truth definitions](https://plato.stanford.edu/entries/tarski-truth/)

[Copyright © 2024](https://plato.stanford.edu/info.html#c) by\
[Wilfrid Hodges](http://wilfridhodges.co.uk/)\
Thomas Scanlon <[*scanlon@math.berkeley.edu*](mailto:scanlon%40math%2eberkeley%2eedu)>

