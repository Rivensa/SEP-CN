# 直觉主义逻辑 intuitionistic (Joan Moschovakis)

*首次发表于1999年9月1日星期三；实质性修订于2022年12月16日星期五。*

直觉主义逻辑包括逻辑推理的一般原则，这些原则是逻辑学家从直觉主义数学中抽象出来的，由 L.E.J.布劳尔在他的[1907]和[1908]年开始发展。因为这些原则也适用于俄罗斯递归数学和 E.毕晓普及其追随者的建设性分析，所以直觉主义逻辑可以被认为是建设性数学的逻辑基础。尽管直觉主义分析与经典分析相冲突，但直觉主义 Heyting 算术是经典 Peano 算术的一个子系统。由此可见，直觉主义命题逻辑是经典命题逻辑的一个适当子系统，纯直觉主义谓词逻辑是纯经典谓词逻辑的一个适当子系统。

从哲学上讲，直觉主义与逻辑主义的不同之处在于将逻辑视为数学的一部分，而不是数学的基础；与有限主义的不同之处在于允许对潜在不可数结构进行建设性推理（例如，对潜在无限自然数序列树进行单调栏归纳）；与柏拉图主义的不同之处在于将数学对象视为没有独立理想存在的心理构建物。希尔伯特的形式主义计划是通过将经典数学归约为一个形式系统，其一致性应通过有限主义（因此是建设性的）手段来建立，以此来证明经典数学的最有力的当代竞争对手是布劳尔发展的直觉主义。在他 1912 年的论文《直觉主义与形式主义》中，布劳尔正确预测到任何试图证明自然数上的完全归纳的一致性的尝试都将导致一个恶性循环。

布劳尔拒绝了形式主义本身，但承认表达直觉上正确的构造的一般逻辑原则的潜在有用性，例如假言推理。Heyting [1930]、Gentzen [1935]和 Kleene [1952]完全发展了直觉命题逻辑和谓词逻辑以及算术的形式系统。Gödel [1933]证明了直觉主义和经典理论的等价性。Beth [1956]和 Kripke [1965]提供了一种语义，根据这种语义，直觉逻辑是正确和完备的，尽管直觉谓词逻辑的完备性证明需要一些经典推理。

---

## 1. 拒绝第三非排中律

直觉主义逻辑可以简洁地描述为没有亚里士多德排中律的经典逻辑：

(LEM)A∨¬A

或者经典的双重否定消除法则：

(DNE)¬¬A→A

但是带有矛盾律：

(A→B)→((A→¬B)→¬A)

和 ex falso sequitur quodlibet:

¬A→(A→B).

Brouwer [1908]观察到 LEM 是从有限情况中抽象出来的，然后在没有理由的情况下扩展到关于无限集合的陈述。例如，让 x，y 范围在自然数 0,1,2,...上，让 B(y)缩写为(prime(y)&prime(y+2))，其中 prime(y)表示“y 是一个质数”。那么∀y(B(y)∨¬B(y))在直觉主义和经典逻辑学中都成立，因为为了确定一个自然数是否是质数，我们只需要检查它是否有一个严格位于自身和 1 之间的除数。

但是如果 A(x)缩写为∃y(y>x&B(y))，那么为了直觉主义地断言∀x(A(x)∨¬A(x))，我们需要一种有效的（参见 Church-Turing 论题）方法来确定是否存在一对大于任意自然数 x 的孪生质数，而迄今为止还没有这样的方法。一个明显的半有效方法是使用 Eratosthenes 筛法的改进来列出质数对（逐个生成自然数并划去未满足 B(y)的每个数 y），如果存在一对大于 x 的孪生质数，这种方法最终会找到第一个。然而，∀xA(x)表达了孪生质数猜想，这个猜想尚未被证明或证伪，所以在我们目前的知识状态下，我们既不能断言∀x(A(x)∨¬A(x))，也不能断言∀xA(x)∨¬∀xA(x)。

有人可能反对这些例子依赖于孪生质数猜想尚未解决的事实。Brouwer 最初的一些“反例”依赖于一些问题（如费马大定理），这些问题后来已经解决。但对于 Brouwer 来说，一般的 LEM 等同于先验假设，即每个数学问题都有解——这是他拒绝的假设，预示着哥德尔的不完全性定理一个季度世纪。

直觉主义对 LEM 的拒绝具有深远的影响。一方面：

* 从直觉主义的角度来看，归谬法只能证明否定陈述，因为¬¬A→A 在一般情况下不成立。（如果成立的话，LEM 将通过由直觉主义可证明的¬¬(A∨¬A)的假言推理得出。）
* 直觉主义命题逻辑没有有限的真值表解释。在直觉主义和经典逻辑之间存在无限多个不同的公理系统。
* 并非每个命题公式都有一个由原始公式及其否定构建的直觉主义等价的析取或合取范式，仅使用∨和&。
* 并非每个谓词公式都有一个直觉主义等价的前束范式，其中所有量词都在前面。
* 虽然∀x¬¬(A(x)∨¬A(x))是直觉主义谓词逻辑的一个定理，但¬¬∀x(A(x)∨¬A(x))不是；因此¬∀x(A(x)∨¬A(x))与直觉主义谓词逻辑一致。

另一方面：

* 对于形式为 A∨B 的封闭陈述的每个直觉主义证明，可以有效地转化为 A 的直觉主义证明或 B 的直觉主义证明，对于封闭存在陈述也是如此。
* 直觉主义命题逻辑在有效决定性方面是可行的，即对于每个命题公式，存在一个有限的构造过程，要么产生该公式的直觉主义证明，要么证明不存在这样的证明。
* 直觉主义逻辑的负片段（不包含∨或∃）包含了对经典逻辑的忠实翻译，类似地，直觉主义和经典算术也是如此。
* 直觉主义算术可以通过与经典算术相矛盾的公理一致地扩展，从而实现对递归数学的形式化研究。
* 布劳威尔有争议的直觉主义分析与 LEM 相冲突，可以被形式化并相对于经典和直觉主义正确的子理论显示一致。

## 2. 直觉主义一阶谓词逻辑

形式化的直觉主义逻辑自然地受到了布劳尔-海廷-科尔莫哥洛夫对直觉主义真理的非正式解释的启发，这在数学哲学和直觉主义逻辑的发展条目中有所概述。逻辑操作符&、∨、→、¬、∀、∃的构造独立性与经典情况形成对比，例如，A∨B 等价于¬(¬A&¬B)，∃xA(x)等价于¬∀x¬A(x)。从布劳尔-海廷-科尔莫哥洛夫的观点来看，形如 A∨B 的句子断言已经构造了 A 的证明或 B 的证明；而¬(¬A&¬B)断言已经构造了一种算法，该算法能够有效地将证明¬A 和¬B 的任意一对构造转化为已知矛盾的证明。

### 2.1 形式系统 H-IPC 和 H-IQC

以下是来自 Kleene [1952]的直觉主义一阶谓词逻辑的 H-IQC 的 Hilbert 风格形式化。H-IQC 的语言 L 具有所有元数的谓词字母 P，Q（.），...和个体变量 x，y，z，...（带或不带下标 1,2，...），以及逻辑连接词和量词的符号&，∨，→，¬，∀，∃，以及括号（，）。L 的原子（或素）公式是诸如 P，Q（x），R（x，y，x）之类的表达式，其中 P，Q（.），R（...）分别是 0 元，1 元和 3 元谓词字母；也就是说，通过用个体变量符号填充谓词字母中的每个空白，得到的是一个素公式。L 的（良构）公式的定义如下：

* 每个原子公式都是一个公式。
* 如果 A 和 B 是公式，那么(A&B)，(A∨B)，(A→B)和¬A 也是公式。
* 如果 A 是一个公式，x 是一个变量，那么∀xA 和∃xA 都是公式。

一般来说，我们使用 A、B、C 作为元变量表示良构公式，使用 x、y、z 作为元变量表示个体变量。为了预见应用（例如直觉主义算术），我们使用 s、t 作为项的元变量；在纯谓词逻辑的情况下，项就是简单的个体变量。在公式 A 中，如果变量 x 在量词∀x 或∃x 的作用域内，则它是被约束的，否则是自由的。直觉主义和经典逻辑一样，(A↔B)缩写为((A→B)&(B→A))，当不会引起混淆时，括号将被省略。

推理有三条规则：

* 模态蕴涵*
  从 A 和 A→B 推断出 B。

* 全称引入*
  从 C→A(x)推导出 C→∀xA(x)，其中 x 是一个在 C 中没有自由出现的变量。

* 存在消解*
  从 A(x)→C 推导出∃xA(x)→C，其中 x 是一个在 C 中没有自由出现的变量。

公理是以下形式的所有公式，其中在最后两个模式中，子公式 A(t) 是将项 t 替换为 A(x) 中的每个自由出现的结果，并且没有在替换的结果中自由于 t 而变为约束的变量。

A→(B→A)(A→B)→((A→(B→C))→(A→C))A→(B→(A&B))(A&B)→A(A&B)→BA→(A∨B)B→(A∨B)(A→C)→((B→C)→((A∨B)→C))(A→B)→((A→¬B)→¬A)¬A→(A→B)∀xA(x)→A(t)A(t)→∃xA(x)

证明是任何有限的公式序列，其中每个公式都是公理或者是序列中前面的一个或两个公式的推论，通过推理规则得出的。任何证明都被认为证明了它的最后一个公式，这个公式被称为一阶直觉主义谓词逻辑的定理或可证明公式。从假设集合 F 推导出公式 E 的推导是任何公式序列，其中每个公式属于 F 或者是公理或者是序列中前面的一个或多个公式的推论，通过推理规则得出的，使得 E 是序列的最后一个公式。如果存在这样的推导，我们说 E 是从 F 可导出的。

直觉主义命题逻辑 H-IPC 是 H-IQC 的子系统，当语言限制为使用命题连接词&、∨、→和¬以及仅使用命题公理构建的公式 P、Q、R 等时，得到的结果。因此，命题子系统中缺少最后两个推理规则和最后两个公理模式。

如果在直觉主义命题逻辑或一阶谓词逻辑的公理模式给定列表中，存在表达 ex falso sequitur quodlibet 的定律：

¬A→(A→B)

被经典的双重否定消除定律 DNE 所取代：

¬¬A→A

（或者等价地，如果直觉主义的否定引入定律：

(A→B)→((A→¬B)→¬A)

被经典命题逻辑或经典谓词逻辑的形式系统 H-CPC 或 H-CQC 所取代。由于 ex falso 和矛盾律是经典定理，直觉主义逻辑包含在经典逻辑中。从某种意义上说，经典逻辑也包含在直觉主义逻辑中；见下面的第 4.1 节。

需要注意的是，虽然 LEM 和 DNE 在 H-IPC 上等价，但蕴含关系

(¬¬A→A)→(A∨¬A)

不是 H-IPC 的定理模式。对于基于直觉主义逻辑的理论 T，如果 E 是 L(T)的任意公式，则根据定义：

如果 T 证明 E∨¬E，则 E 在 T 中是可判定的。

如果且仅当 T 证明¬¬E→E，E 在 T 中是稳定的。

如果且仅当 T 证明¬E∨¬¬E，E 在 T 中是可测试的。

可决定性意味着稳定性，但反之不成立。稳定性和可测试性的合取等同于可决定性。布劳尔本人证明了“荒谬的荒谬的荒谬等同于荒谬”（Brouwer [1923C]），因此形式为¬A 的每个公式都是稳定的；但在 H-IPC 和 H-IQC 中，素公式及其否定是不可判定的，如下面的第 5.1 节所示。

### 2.2 替代形式和演绎定理

Hilbert 风格的系统 H-IQC 对直觉主义逻辑的元数学研究很有用，但它强制线性化推导并且偏爱公理而不是规则，使其成为建立可导性的笨拙工具。通过省略本百科全书中关于经典逻辑的条目第 3 节中介绍的符号和规则，以及用直觉主义否定消除规则代替双重否定消除的经典规则(DNE)，可以得到直觉主义谓词逻辑的自然演绎系统 N-IQC，该规则表达了 ex falso：

(INE)

如果 F 蕴含 A 且 F 蕴含¬A，则 F 蕴含 B。

证明 H-IQC 等价于 N-IQC 的关键是演绎法则及其逆命题，即：

**推理定理**
如果 B 可以从 A 和可能的其他公式 F 中推导出来，其中 A 中的所有自由变量在推导过程中保持不变（也就是说，在推理规则的第二或第三条上不使用任何自由出现在 A 中的变量 x，除非假设 A 在推导中出现在所讨论的推理之前），那么 A→B 可以从 F 中推导出来。

这个基本结果大致表达了 I 的规则（→I），可以通过对推导定义的归纳来证明 H-IQC。I 的其他规则基本上通过演绎法成立，这对应于 N-IQC 中的（→E）；而 H-IQC 的所有公理都可以在 N-IQC 中证明。

为了说明演绎定理的有用性，考虑（表面上微不足道的）定理模式（A→A）。在 H-IPC 中的正确证明需要五行：

1. A→(A→A)
2. (A→(A→A))→((A→((A→A)→A))→(A→A))
3. (A→((A→A)→A))→(A→A)
4. A→((A→A)→A)
5. A→A

其中 1、2 和 4 是公理，3、5 是通过前面的行应用假言推理得到的。然而，A 可以从 A（作为假设）中推导出来，只需一个明显的步骤，因此演绎定理允许我们得出结论，即存在一个 A→A 的证明。（实际上，刚刚给出的 A→A 的形式证明是演绎定理的建设性证明的一部分！）

值得注意的是，在 H-IQC 中，从假设中推导出的推论的定义中，假设公式被视为其所有自由变量都是普遍量化的，因此∀xA(x)可以从假设 A(x)中推导出来。然而，在推导过程中，变量 x 将会变化（而不是保持不变），通过使用∀-引入规则；因此，不能使用演绎定理来推断（错误地）认为 A(x)→∀xA(x)（以及由∃-消去规则，∃xA(x)→∀xA(x)）在 H-IQC 中是可证明的。作为谓词逻辑中演绎定理的正确使用的一个例子，考虑到蕴含式∃xA(x)→¬∀x¬A(x)。为了证明这在 H-IQC 中是可证明的，我们首先从所有自由变量保持不变的 A(x)中推导出¬∀x¬A(x)：

1. ∀x¬A(x)→¬A(x)
2. A(x)→(∀x¬A(x)→A(x))
3. A(x) (假设)
4. ∀x¬A(x)→A(x) (对于所有 x，非 A(x)蕴含 A(x))
5. (∀x¬A(x)→A(x))→((∀x¬A(x)→¬A(x))→¬∀x¬A(x)) (如果对于所有 x，非 A(x)蕴含 A(x)，那么((对于所有 x，非 A(x)蕴含非 A(x))蕴含非对于所有 x，非 A(x)))
6. (∀x¬A(x)→¬A(x))→¬∀x¬A(x)
7. ¬∀x¬A(x)

这里的 1、2 和 5 是公理；4 是通过 2 和 3 的假言推理得到的；6 和 7 是通过之前的行通过假言推理得到的；因此没有变量被改变。演绎定理告诉我们在 H-IQC 中存在一个证明 P，证明了 A(x)→¬∀x¬A(x)，并且一个∃-消去的应用将 P 转化为∃xA(x)→¬∀x¬A(x)的证明。反之在 H-IQC 中是不可证明的，如下面的 5.1 节所示。

H–IQC 和 N–IQC 的其他重要替代品是直觉主义命题和谓词逻辑的各种序列演算。第一个这样的演算是由 Gentzen [1934–5]定义的，参见 Kleene [1952]。序列系统明确地跟踪证明的每一步中的所有假设和结论，用削减中间公式的推理规则（即消解规则）替代了假言推理。当削减规则被省略时，可以证明它是一个可允许的规则（参见第 4.2 节）。

当形式主义的细节不重要时，从现在开始，我们遵循 Troelstra 和 van Dalen [1988]，让“IQC”或“IPC”分别指代直觉主义谓词逻辑或命题逻辑的任何形式系统，类似地，“CQC”和“CPC”指代经典谓词和命题逻辑。

IPC 和 IQC 都满足插值定理，例如：如果 A 和 B 是具有至少一个命题符号的命题公式，并且在 IPC 中可证明 A→B，则存在一个公式 C，其中只包含 A 和 B 中出现的命题符号，使得 A→C 和 C→B 都是可证明的。这些主题在 Kleene [1952]和 Troelstra 和 Schwichtenberg [2000]中有所涉及。

尽管直觉主义逻辑当然可以添加身份，但对于应用（例如算术），等号符号通常被视为满足等价关系公理（自反性、对称性和传递性）和其他非逻辑公理（例如，加法和乘法的原始递归定义）的一个特殊谓词常量，并且等号是可决定的，直觉主义和经典主义都是如此，但直觉主义外延相等并不总是可决定的；请参阅数学哲学条目中关于布劳威尔连续性公理的第 3 节中的讨论。

## 3. 直觉主义数论（Heyting 算术）HA

直觉主义（Heyting）算术 HA 和经典（Peano）算术 PA 共享相同的一阶语言和相同的非逻辑公理；只有逻辑不同。除了逻辑联结词、量词和括号以及个体变量 x，y，z，...（也用作元变量）之外，算术的语言 L(HA)还具有二元谓词符号=，个体常量 0，一元函数常量 S，以及用于原始递归函数的有限或可数无穷多个附加常量，包括加法和乘法；具体的选择是品味和方便的问题。术语是使用函数常量从变量和 0 构建的；特别是，每个自然数 n 都可以通过将 S 应用 n 次于 0 而在语言中用数字 n 表示（例如，S(S(0))是数字 2 的数字）。素公式的形式为（s=t），其中 s，t 是术语，复合公式按照通常的方式从这些公式获得。

HA 的逻辑公理和规则是一阶直觉主义谓词逻辑 IQC 的公理和规则。非逻辑公理包括等号的自反、对称和传递性特性：∀x(x=x)、∀x∀y(x=y→y=x)、∀x∀y∀z((x=y&y=z)→x=z)；将 0 特征化为最小自然数的公理：

 ∀x¬(S(x)=0)，

将 S 特征化为一对一函数的公理：

∀x∀y(S(x)=S(y)→x=y),

S 的外延等式公理:

∀x∀y(x=y→S(x)=S(y));

每个函数常量的原始递归定义方程，特别是加法：∀x(x+0=x)，∀x∀y(x+S(y)=S(x+y))；以及乘法：∀x(x⋅0=0)，∀x∀y(x⋅S(y)=(x⋅y)+x)；以及（数学归纳的普遍封闭的）模式，对于任意公式 A(x)：

(A(0)&∀x(A(x)→A(S(x))))→∀xA(x)。

对于所有函数常量的外延相等公理可以通过数学归纳从 S 的相等公理和原始递归函数公理推导出来。

在 HA 中，可以通过∃z(S(z)+x=y)或无量词公式 S(x)−.y=0 来定义自然序关系 x<y，如果符号和原始递归定义的前驱函数:Pd(0)=0,∀x(Pd(S(x))=x)和截断减法:∀x(x−.0=x),∀x∀y(x−.S(y)=Pd(x−.y))在形式主义中存在。HA 证明了比较定律

∀x∀y(x<y∨x=y∨y<x)

以及最小数原理的直觉形式，对于任意公式 A(x):

∀x[∀y(y<x→(A(y)∨¬A(y)))→(∃y((y<x&A(y))&∀z(z<y→¬A(z))) ∨∀y(y<x→¬A(y)))].

假设是必要的，因为并非所有的算术公式在 HA 中是可判定的。然而，∀x∀y(x=y∨¬(x=y))可以通过数学归纳直接证明，因此：

* 在 HA 中，素公式（以及所有无量词公式）是可判定且稳定的。

如果在 HA 中 A(x)是可判定的，那么通过对 x 进行归纳，∀y(y<x→A(y))和∃y(y<x&A(y))也是可判定的。因此：

* 在 HA 中，所有量词都被限定的公式是可判定且稳定的。

集合Δ0 是算术公式的集合，在其中所有量词都被限定，它是基于前缀公式中量词交替模式的经典算术层次结构的最低层次。在 HA 中，并不是每个公式都有前缀形式，但 Burr [2004]发现了一个简单的直觉主义算术层次结构，与经典层次一一对应。仅在下面两个定义中，∀x 表示有限个全称数量量词的块，类似地，∃x 表示有限个存在数量量词的块。根据这些约定，Burr 的类Φn 和Ψn 定义如下：

* Φ0=Ψ0=Δ0,
* Φ1 是所有形式为∀xA(x)的公式的集合，其中 A(x)在Ψ0 中。对于 n≥2，Φn 是所有形式为∀x[A(x)→∃yB(x,y)]的公式的集合，其中 A(x)在Φn−1 中，B(x,y)在Φn−2 中。
* Ψ1 是所有形式为∃xA(x)的公式的集合，其中 A(x)在Φ0 中。对于 n≥2，Ψn 是所有形式为 A→B 的公式的集合，其中 A 在Φn 中，B 在Φn−1 中。

相应的经典前束类别的定义更简单：

* Π0=Σ0=Δ0，
* Πn+1 是所有形式为∀xA(x)的公式的类别，其中 A(x)在Σn 中，
* Σn+1 是所有形式为 ∃xA(x) 的公式的类别，其中 A(x) 在 Πn 中。

Peano 算术 PA 是通过将 LEM 或 ¬¬A→A 添加到逻辑公理列表中，即使用经典逻辑而不是直觉主义逻辑，从 Heyting 算术 HA 而来。即使在 HA 和 PA 的片段中，归纳模式仅限于 Δ0 公式，以下结果仍然成立。

> **Burr 定理：**
>
> * 每个算术公式在 HA 中都可以被证明等价于Φn 类中的一个公式。
> * 每个Φn 类中的公式在 PA 中都可以被证明等价于Πn 类中的一个公式，反之亦然。
> * 每个Ψn 类中的公式在 PA 中都可以被证明等价于Σn 类中的一个公式，反之亦然。

HA 和 PA 在证明论上是等价的，这将在第 4 节中展示。每个都能（按数字方式）表达自己的证明谓词。根据哥德尔著名的不完全性定理，如果 HA 是一致的，那么 HA 和 PA 都不能证明自己的一致性。

## 4. 基本证明论

### 4.1 将经典逻辑翻译为直觉主义逻辑

直觉主义逻辑的一个基本事实是它具有与经典逻辑相同的一致性强度。对于命题逻辑，这是由 Glivenko [1929]首次证明的：

**Glivenko 定理**
任意命题公式 A 在经典逻辑中是可证明的，当且仅当¬¬A 在直觉主义逻辑中是可证明的。

Glivenko 的定理在谓词逻辑中不适用，尽管任意谓词公式 A 在直觉主义谓词逻辑加上“双重否定转换”模式中是经典可证明的当且仅当¬¬A 是可证明的。

(DNS)∀x¬¬B(x)→¬¬∀xB(x)

对于每个语言 L 的公式 A，哥德尔和根岑独立提出的更复杂的将经典理论转化为直觉主义理论的负面翻译，将其与另一个公式 g(A)（没有∨或∃）相关联，满足以下条件：

1. 经典谓词逻辑证明 A↔g(A)。
2. 直觉主义谓词逻辑证明 g(A)↔¬¬g(A)。
3. 如果经典谓词逻辑证明 A，那么直觉主义谓词逻辑证明 g(A)。

从以下归纳定义的 g(A)（使用 Gentzen 的直接翻译而不是 Gödel 的¬和&）可以直接得到证明：

如果 P 是素数，则 g(P)是¬¬P。g(A&B)是 g(A)&g(B)。g(A∨B)是¬(¬g(A)&¬g(B))。g(A→B)是 g(A)→g(B)。g(¬A)是¬g(A)。g(∀xA(x))是∀xg(A(x))。g(∃xA(x))是¬∀x¬g(A(x))。

对于每个公式 A，只有当 A 在直觉主义下可证明时，g(A)在经典逻辑下才可证明。特别地，如果对于某个公式 B，B&¬B 在经典逻辑下是可证明的，那么 g(B)&¬g(B)（即 g(B&¬B)）在直觉主义下也将可证明。因此：

4. 经典逻辑和直觉主义逻辑在一致性上是等价的。

将经典数论转化为直觉主义数论的否定翻译更加简单，因为直觉主义算术的素数公式是稳定的。因此，g(s=t)可以被视为 s=t，而其他子句保持不变。数学归纳原理的每个实例的否定翻译是相同原理的一个实例，而算术的其他非逻辑公理是它们自己的否定翻译，因此：

* (I)、(II)、(III)和(IV)也适用于数论。

Gödel [1933e] 将这些结果解释为直觉主义逻辑和算术比经典逻辑和算术更丰富，因为直觉主义理论区分了在经典上等价的公式，并且具有与经典理论相同的一致性强度。特别地，Gödel 的不完全性定理适用于 HA 和 PA。

直接将负面解释扩展到分析的尝试失败，因为可数选择公理的负面翻译不是直觉主义分析的定理。然而，通过 Kleene 的递归实现的函数版本（参见下面的第 6.3 节），它与直觉主义分析一致，包括 Brouwer 的有争议的连续性原理。由此可见，只能通过使用所有标准逻辑连接词和量词来表达的直觉主义数学与避免∨和∃的经典数学的忠实翻译是一致的。

这一点很重要，因为 Brouwer 的直觉主义分析与 LEM 不一致。然而，如果 A 是任何负面公式（不包含∨或∃），则可以使用直觉主义逻辑证明¬¬A→A。Moschovakis [2017]中提出了一种受 Troelstra [1977]和 Kripke[2019]启发的直觉主义和经典分析的调和方法。

### 4.2 直觉主义逻辑和算术的可接受规则

Gödel [1932]观察到直觉主义命题逻辑具有析取性质：

(DP)

如果 A∨B 是一个定理，那么 A 是一个定理或者 B 是一个定理。

Gentzen [1935]为直觉主义谓词逻辑的封闭公式建立了析取性质。由此可推出，如果直觉主义逻辑是一致的，那么如果 P 是一个原子公式，那么 P∨¬P 不是一个定理。Kleene [1945, 1952]证明了直觉主义一阶数论也具有相关的（参见 Friedman [1975]）存在性质：

 （EP）

如果∃xA(x)是一个封闭的定理，那么对于某个封闭项 t，A(t)也是一个定理。

析取和存在性质是非经典理论中特殊情况的一般现象。一个理论的可接受规则是使得该理论封闭的规则。例如，Harrop [1960]观察到以下规则：

* 如果¬A→(B∨C)是一个定理，那么(¬A→B)∨(¬A→C)也是一个定理。

对于直觉主义命题逻辑 IPC 来说，如果 A、B 和 C 是任意的公式，并且在 IPC 中可证明¬A→(B∨C)，那么在 IPC 中也可证明(¬A→B)∨(¬A→C)。哈罗普规则在 IPC 中不可导出，因为公式(¬A→(B∨C))→((¬A→B)∨(¬A→C))在直觉主义上不可证明。另一个重要的 IPC 中可接受但不可导出的规则是 Mints 的规则：

(¬A→(B∨C))→((¬A→B)∨(¬A→C))

is not intuitionistically provable. Another important example of an admissible nonderivable rule of IPC is Mints’s rule:

* 如果(A→B)→(A∨C)是一个定理，那么((A→B)→A)∨((A→B)→C)也是一个定理。

古典命题逻辑 CPC 的双值真值表解释导致了一个简单的证明，即 CPC 的每个可接受规则都是可导出的：否则，对于 A、B 等的某个赋值将使假设为真而结论为假，通过将被赋值为“真”的字母替换为 P→P，将被赋值为“假”的字母替换为 P&¬P，就可以得到一个可证明的假设和不可证明的结论。直觉主义情况更有趣的事实导致了许多自然问题，其中一些最近已得到回答。

通过推广 Mints 的规则，Visser 和 de Jongh 确定了一个递归可枚举的逐渐更强的可接受规则序列（"Visser 的规则"），他们猜想这些规则构成了 IPC 的可接受规则的基础，即每个可接受规则都可以从析取性质和序列中的一个规则推导出来。在 Ghilardi [1999]的工作基础上，Iemhoff [2001]成功地证明了他们的猜想。Rybakov [1997]证明了 IPC 的所有可接受规则的集合是可判定的，但没有有限的基础。Visser [2002]证明了他的规则也是 HA 的可接受命题规则，以及 HA 扩展了 Markov 原理 MP（在下面的第 5.2 节中定义）。最近，Jerabek [2008]找到了 IPC 的一个独立基础，具有不推导其他规则的性质。

关于直觉主义谓词逻辑的可接受规则，我们所知甚少。纯粹的 IQC，没有个体或谓词常量，对于没有自由变量但有 x 的 A(x)，具有以下引人注目的可接受规则：

* 如果∃xA(x)是一个定理，那么∀xA(x)也是一个定理。

并非 IQC 的每个可接受谓词规则都适用于基于 IQC 的所有形式系统；例如，HA 显然违反了刚才提到的规则。Visser 在[1999]年证明了 HA 的可接受谓词规则是Π2 完全的，并在[2002]年证明了 HA + MP 与 HA 具有相同的谓词可接受规则。Plisko 在[1992]年证明了 HA + MP 的谓词逻辑（IQC 语言中所有在算术语言中的统一替换实例都可以在 HA + MP 中证明的句子集）是Π2 完全的；Visser 在[2006]年将这一结果推广到一些在 PA 中不包含的具有建设性意义的一致扩展。

虽然它们尚未完全分类，但已知直觉主义谓词逻辑的可接受规则包括可判定谓词的马尔可夫规则：

* 如果∀x(A(x)∨¬A(x))&¬∀x¬A(x)是一个定理，那么∃xA(x)也是一个定理。

以及以下前提独立规则（其中假设 y 在 A(x)中不自由出现）：

* 如果∀x(A(x)∨¬A(x))&(∀xA(x)→∃yB(y))是一个定理，那么∃y(∀xA(x)→B(y))也是一个定理。

这两个规则在直觉主义逻辑学中也是可接受的。哥德尔的“Dialectica”解释（参见下面的第 6.3 节）验证了相应的蕴含关系（MP 和 IP），这些蕴含关系在直觉主义逻辑中是不可证明的。同样，对于 Heyting 算术中最有趣的可接受规则之一，即 Church-Kleene 规则，对应的蕴含关系（CT）也是如此：

* 如果∀x∃yA(x,y)是 HA 的一个封闭定理，那么存在一个数 n，可以在 HA 中证明，具有哥德尔数 n 的部分递归函数是总的，并且将每个 x 映射到满足 A(x,y)的 y（而且还可以证明 A(x,y)，其中 x 是自然数 x 的数字，y 是 y 的数字）。

将马尔可夫规则与负翻译相结合，得出经典和直觉主义算术证明形式为∀x∃yA(x,y)的相同公式的结果，其中 A(x,y)是无量词的。一般来说，如果在 HA 中可以证明 A(x,y)是可判定的，并且∀x∃yA(x,y)是经典算术 PA 的一个封闭定理，则即使在直觉主义算术中，Church-Kleene 规则的结论也成立。因为如果 HA 证明∀x∀y(A(x,y)∨¬A(x,y))，那么根据 Church-Kleene 规则，A(x,y)的特征函数具有一个在 HA 中可以证明的哥德尔数 m；因此 HA 证明∀x∃yA(x,y)↔∀x∃y∃zB(m,x,y,z)，其中 B 是无量词的，并且相邻的存在量词可以在 HA 中缩约。由此可见，HA 和 PA 具有相同的可证明递归函数。

这里有一个证明，即规则“如果∀x(A∨B(x))是一个定理，那么 A∨∀xB(x)”（其中 A 中的 x 不是自由的）对于 HA 来说是不可接受的，如果 HA 是一致的。哥德尔编号提供了一个无量词的公式 G(x)，它（按数字顺序）表示谓词“x 是 HA 中证明(0=1)的代码”。根据具有可判定性的无量词算术公式的直觉逻辑，HA 证明∀x(∃yG(y)∨¬G(x))。然而，如果 HA 证明∃yG(y)∨∀x¬G(x)，那么根据析取性质，HA 必须证明∃yG(y)或∀x¬G(x)。第一种情况是不可能的，根据存在性质和一致性假设以及 HA 证明所有真无量词句子的事实。但第二种情况也是不可能的，根据哥德尔的第二不完全性定理，因为∀x¬G(x)表示 HA 的一致性。

## 5. 基本语义学

显示一个公式（或模式）F 在形式系统 S 中是可证的最直接的方法是在 S 中构造一个 F 的证明。但是，如果一个公式（或某个模式的替代实例）在 S 中无法证明，那么如何知道这个事实呢？我们无法找到证明可能暗示着不可证明性，但通常情况下，除非证明搜索是 Gentzen 直觉主义命题逻辑系统中的一个规范搜索。通常需要的是一个解释，使得 S 在该解释下是完备的，即每个可证公式在该解释下都是有效的。然后，要显示 F 在 S 中不可证明，只需显示 F 在该解释下是无效的，通常是通过构造一个反例模型来实现。

如果一个系统 S 对于某个解释是完备的，即在该解释下每个有效的公式都是可证的，则一种间接的方法来显示一个公式（或模式）在 S 中是可证的是在该解释下建立其有效性。完备性并不总是伴随着完备性；例如，Heyting 算术在下文 5.2 节中描述的可实现性解释下是完备但不完备。

直觉主义系统启发了各种解释，包括 Beth 的表格法，Rasiowa 和 Sikorski 的拓扑模型，Heyting 代数，公式即类型，Kleene 的递归可实现性，Kleene 和 Aczel 斜杠，以及基于层和拓扑的模型。在所有这些解释中，Kripke 的[1965]可能世界语义与直觉主义谓词逻辑的声音和完备性最接近经典模型论。另一方面，递归可实现性解释试图有效地实现直觉主义真理的 B-H-K 解释。

### 5.1 Kripke 和 Beth 语义对直觉主义逻辑的解释

对于 L 来说，Kripke 结构 K 由部分有序集合 K 的节点和将每个节点 k 分配给一个非空集合 D(k)的域函数 D 组成，其中如果 k≤k′，则 D(k)⊆D(k′)。此外，K 具有以下确定的强制关系。

对于每个节点 k，让 L(k)成为扩展 L 的语言，其中包含所有 D(k)中元素的新常量。对于每个节点 k 和每个 0 元谓词符号（每个命题符号）P，要么将 f(P,k)赋值为 true，要么将 f(P,k)未定义，但要满足如果 k≤k′且 f(P,k)=true，则 f(P,k′)=true。称为：

k ⊩ P 当且仅当 f(P,k)= true.

对于每个节点 k 和每个 (n+1)-元谓词符号 Q(…) ，以一种方式为其分配一个（可能为空的）集合 T(Q,k)，其中 T(Q,k) 中的元素是 D(k) 中的 (n+1)-元组，并且如果 k≤k′，则 T(Q,k)⊆T(Q,k′)。称为：

k ⊩ Q(d0,…,dn) 当且仅当 (d0,…,dn)∈T(Q,k)。

现在按照以下方式归纳地定义 k ⊩ E（可以读作“ k 强制 E ”），其中 E 是 L(k) 的复合句：

| k ⊩ (A&B)   | 如果 k ⊩ A 并且 k ⊩ B。                           |
| -------------- | ----------------------------------------------------- |
| k ⊩ (A∨B)  | 如果 k ⊩ A 或者 k ⊩ B。                           |
| k ⊩ (A→B)  | 如果对于每个 k′≥k，如果 k′ ⊩ A，则 k′ ⊩ B。   |
| k ⊩ ¬A     | 如果对于没有 k′≥k，k′ ⊩ A。                     |
| k ⊩ ∀xA(x) | 如果对于每个 k′≥k 和每个 d∈D(k′)，k′ ⊩ A(d)。 |
| k ⊩ ∃xA(x) | 如果对于某个 d∈D(k)，k ⊩ A(d)。                   |

任何这样的强制关系都是一致的：

对于任何句子 A 和任何 k，都不会同时满足 k ⊩ A 和 k ⊩ ¬A。

 和单调性：

如果 k≤k′且 k⊩A，则 k′VdashA。

Kripke 的声音和完备性定理证明了 L 的一个句子在直觉主义谓词逻辑中是可证明的，当且仅当它被每个 Kripke 结构的每个节点强制。因此，要证明¬∀x¬P(x)→∃xP(x)在直觉主义中是不可证明的，只需要考虑一个 Kripke 结构，其中 K={k,k′}，k<k′，D(k)=D(k′)={0}，T(P,k)为空，但 T(P,k′)={0}。而要证明反之亦然是直觉主义可证明的（而不实际展示证明），只需要任意 Kripke 模型的一致性和单调性属性，以及⊩的定义。

具有相等性的语言的 Kripke 模型可以通过任意等价关系在每个节点上解释=，但要满足单调性。对于直觉主义算术的应用，正常模型（其中等号在每个节点上被解释为恒等关系）就足够了，因为自然数的相等性是可判定的。

命题 Kripke 语义特别简单，因为任意命题公式在直觉主义下是可证明的，当且仅当它被每个 Kripke 模型的根节点强制。其中，Kripke 模型的框架（节点集合 K 及其偏序关系）是一棵有最小元素（根节点）的有限树时，例如，具有 K={k,k′,k′′}，k<k′和 k<k′′，且 P 仅在 k′为真的 Kripke 模型，显示了 P∨¬P 和¬P∨¬¬P 在 IPC 中都是不可证明的。

Kripke 模型的每个终端节点或叶子都是经典模型，因为叶子节点强制每个公式或其否定。只有出现在公式 E 中的命题符号，以及满足 k≤k′的节点 k′，才与决定 k 是否强制 E 相关。这些考虑使我们能够有效地将 L(IPC)的每个公式 E 与一类有限的有限 Kripke 结构相关联，如果存在反例，该类结构将包括反例。由于 IPC 的所有定理类是可递归枚举的，我们得出结论：

IPC 是有效可判定的。存在一个递归过程，可以确定每个命题公式 E 是否是 IPC 的定理，最终得出 E 的证明或者（有限的）Kripke 反模型。

IPC 的可判定性最早由 Gentzen 在 1935 年获得。IQC 的不可判定性是通过对 CQC 进行负面解释得出的。

熟悉的非直觉主义逻辑方案对应于 Kripke 模型的结构性质，例如：

* DNS 在具有有限框架的每个 Kripke 模型中成立。
* (A→B)∨(B→A)在具有线性有序框架的每个 Kripke 模型中成立。相反地，每个在 IPC+(A→B)∨(B→A)中不可推导的命题公式都有一个具有线性有序框架的 Kripke 反例模型（参见下面的第 6.1 节）。
* 如果 x 在 A 中不是自由的，则∀x(A∨B(x))→(A∨∀xB(x))在具有常量域的每个 Kripke 模型 K 中成立（使得对于 K 中的所有 k，k'，D(k)=D(k')）。对于 MP 也是如此。

Beth 的语义表格，受 Brouwer 的 spread 概念启发，早于 Kripke 的语义学；Troelstra 和 van Ulsen 对历史给出了权威的解释。对于一个现代版本的 Beth 语义，它便于与 Kripke 语义进行比较，Beth 结构是一个 Kripke 结构，其中偏序集 K 是一个以 k0 为根的有根树，并且 Beth 模型中的强制条件与 Kripke 模型中的强制条件相同，只有两个例外。在 Beth 模型中，(A∨B)和∃xA(x)的强制条件如下，其中 K 的一个分支是 K 的一个最大线性有序子集 k0≤k1≤k2≤...。

| k ⊩ (A∨B)  | 如果 K 通过 k 的每个分支都包含一个节点 k′≥k，使得 k′⊩A 或 k′⊩B。            |
| -------------- | ----------------------------------------------------------------------------------- |
| k ⊩ ∃xA(x) | 如果 K 通过 k 的每个分支都包含一个节点 k′≥k，使得 k′⊩A(d)对于某个 d∈D(k′)。 |

使用时间类比，Beth 模型允许将在更多信息和可能更多个体可用之前，对两个选择之间的决策或对存在性陈述的证人的产生进行推迟。Kripke 模型要求在当前个体域中立即对两个选择进行决策，或立即选择一个对存在性陈述的证人。

Kripke 模型和 Beth 模型是建立直觉主义形式系统性质的强大工具；参见 Troelstra 和 van Dalen [1988]，Smorynski [1973]，de Jongh 和 Smorynski [1976]，Ghilardi [1999]和 Iemhoff [2001]，[2005]。然而，没有纯直觉主义的证明表明在所有 Kripke 和 Beth 模型中有效的每个句子在 IQC 中是可证明的。根据 Gödel 的观察，Kreisel [1958]验证了直觉主义谓词逻辑对 Beth 语义的完备性等价于 Markov 原理 MP，而 Brouwer 则拒绝了这一原理。

此外，Dyson 和 Kreisel [1961]表明，如果 IQC 对 Beth 语义是弱完备的（即，在每个 Beth 模型中没有不可证明的句子），则以下 MP 的推论成立：(GDK)∀αB(α)¬¬∃xR(α,x)→¬¬∀αB(α)∃xR(α,x)，其中 x 遍历所有自然数，α遍历所有自然数的无限序列，B(α)缩写为∀x(α(x)≤1)，而 R 表示α和 x 的原始递归关系。反过来，GDK 蕴含了 IQC 的弱完备性。这个有趣的原理，作为一个需要 R 为无量词的模式，将证明 Brouwer 的 Fan 定理的否定解释。它比 MP 要弱，但在当前的直觉主义分析系统中是不可证明的。Kreisel [1962]建议，GDK 可能最终可以根据尚未发现的直觉主义数学性质来证明。

通过修改 Kripke 模型的定义，允许“爆炸节点”来强制每个句子，Veldman [1976]和 de Swart [1976]独立地使用直觉主义逻辑找到了完备性证明。然而，Veldman 质疑带有爆炸节点的 Kripke 模型是否是直觉主义意义上的数学对象。

### 5.2 Heyting 算术的实现语义

实现直觉主义真理对算术的 B-H-K 解释的一种方法是将与 HA 的每个句子 E 相关联的一些算法的数值代码集合，这些算法可以建立 E 的构造性真理。根据 Kleene [1945]的方法，一个数值 e 通过对 E 的逻辑形式进行归纳来实现算术语言的句子 E。

| e 实现了 r=t    | 如果 r=t 是真的。                                                          |
| ----------------- | ---------------------------------------------------------------------------- |
| e 实现了 A&B    | 如果 e 编码了一对(f,g)，使得 f 实现 A，g 实现 B。                          |
| e 实现 A∨B。   | 如果 e 编码了一对(f,g)，使得如果 f=0，则 g 实现 A，如果 f>0，则 g 实现 B。 |
| e 实现了 A→B   | 如果，每当 f 实现 A 时，那么 eth 部分递归函数在 f 处被定义且其值实现了 B。 |
| e 实现了¬A     | 如果没有 f 实现 A。                                                        |
| e 实现∀xA(x)。 | 如果对于每个 n，第 e 个部分递归函数在 n 处被定义且其值实现 A(n)。          |
| e 实现 ∃xA(x)  | 如果 e 编码了一对 (n,g)，且 g 实现了 A(n)。                                |

任意公式如果存在某个数实现了它的全称闭包。注意，对于任意公式 A，A 和 ¬A 不能同时实现。基本结果是：

 Nelson 的定理[1947]
如果 A 可以从可实现的公式 F 在 HA 中推导出来，则 A 是可实现的。

一些非直觉主义原则可以被证明是可实现的。例如，马尔可夫原则（对于可判定的公式）可以通过模式来表达。

(MP)

∀x(A(x)∨¬A(x))&¬∀x¬A(x)→∃xA(x).

虽然在 HA 中无法证明，但 MP 可以通过一种非正式使用马尔可夫原理的论证来实现。但是，实现性是一种基本的非经典解释。在 HA 中，可以表达一个递归选择公理 CT（代表“Church's Thesis”），它与 LEM 相矛盾，但是（构造性地）可实现。因此，根据尼尔森定理，HA + MP + CT 是一致的。

Kleene 使用了一种变种的数-可实现性来证明 HA 满足 Church-Kleene 规则；相同的论证对于具有 MP 或 CT 的 HA 以及 HA + MP + CT 也适用。在 Kleene 和 Vesley [1965]以及 Kleene [1969]中，函数取代了数字作为实现对象，从而建立了形式化直觉分析的一致性以及其对 Church-Kleene 规则的二阶闭包的一致性。

Nelson 的定理证明了经典谓词逻辑的一些定理在 IQC 中是不可证明的。如果对于每个 n 元谓词符号 P(...)，都分配了一个具有 n 个自由变量的 L(HA)的公式 f(P)，并且如果 L(HA)的公式 f(A)来自于公式 A，通过将每个素公式 P(x1,...,xn)替换为 f(P)(x1,...,xn)，那么 f(A)被称为 A 的算术替代实例。例如，如果将一个表达“y 是一个句子的代码，而 x 是 HA 中代码为 y 的句子的证明”的 L(HA)的公式分配给 P(x,y)，那么（假设 HA 是一致的）∀y(∃xP(x,y)∨¬∃xP(x,y))的结果算术替代实例是不可实现的，因此在 HA 中是不可证明的，它的双重否定也是如此。由此可知，¬¬∀y(∃xP(x,y)∨¬∃xP(x,y))在 IQC 中是不可证明的。

De Jongh [1970]将可实现性与 Kripke 建模相结合，证明了直觉命题逻辑 IPC 和 IQC 的一个片段对于 HA 是算术完备的。对谓词符号进行简单存在公式的统一分配就足以证明：

**De Jongh 的定理（针对 IPC）[1970]**
如果语言 L 中的命题公式 A 在 IPC 中不可证明，则 A 的某个算术替代实例在 HA 中也不可证明。

这个版本的 De Jongh 定理的证明不需要实现性；参见 Smorynski [1973]。作为一个例子，Rosser 形式的哥德尔不完全性定理提供了一个 L(HA)的句子 C，使得 PA 既不能证明 C 也不能证明¬C，因此根据析取性质，HA 不能证明(C∨¬C)。但是 De Jongh 的语义证明还证明了一种受限类型的直觉主义不可证明谓词公式具有一个在 HA 中不可证明的算术替代实例。使用一种语法方法，Daniel Leivant [1979]将 De Jongh 的定理推广到所有直觉主义不可证明的谓词公式，证明了 IQC 对于 HA 是算术完备的。参见 van Oosten [1991]，对于一个历史性的阐述和一个更简单的定理证明，使用 Beth 模型而不是 Kripke 模型的抽象实现性。

在不声称数实现与直觉主义算术真理相一致的情况下，尼尔森观察到对于 L(HA)的每个公式 A，“y 实现 A”的谓词可以用另一个公式（简写为“yreA”）在 HA 中表示，并且模式 A↔∃y(yreA)与 HA 一致。特罗尔斯特拉[1973]证明了(A↔∃y(yreA))在 HA 上等价于“扩展的教堂论题”ECT，这是 CT 的一个更强版本，在“几乎否定”的假设下允许递归选择（不包含∨，并且仅将∃x 应用于素数公式）。虽然 HA 对于 Kleene 的数实现是完备但不完全的，但下一个定理表明 HA + ECT 对于这种解释既是完备又是完全的。

> **特罗尔斯特拉的特征定理（关于 HA 上的数实现）[1973]**
> 如果 A 是语言 L(HA)的一个封闭公式，则：
>
> 1. HA + ECT ⊢ (A↔∃y(yreA)).
> 2. HA + ECT ⊢ A if and only if HA ⊢ ∃y(yreA).

在 HA + MP + ECT 中，Troelstra 认为这是俄罗斯递归数学的形式化（参见构造性数学条目的第 3.2 节），形如(yreA)的每个公式都有一个等价的“经典”前束形式 A′(y)，由交替的“经典”量词¬¬∃x 和∀z¬¬组成，因此∃yA′(y)是 A 的一种前束形式。

## 6. 其他主题和进一步阅读

### 6.1 子直觉主义和中间逻辑学

目前，这本百科全书中有几个其他条目在不同的背景下讨论直觉主义逻辑，但似乎缺乏对更弱和更强的命题和谓词逻辑的一般处理。许多这样的逻辑已经被确定和研究。以下是一些例子。

通过限制语言或削弱逻辑，可以从 IPC 中获得一个次直觉主义命题逻辑。第一个极端的例子是 RN，即只有一个命题变量 P 的直觉逻辑，它以其发现者 Rieger 和 Nishimura [1960]命名。RN 的特点是 Rieger-Nishimura 格的无穷多个不等价的公式 Fn，使得每个只有命题变量 P 的公式在直觉逻辑下等价于某个 Fn。Nishimura 的版本是

F∞=P→P.F0=P&¬P.F1=P.F2=¬P.F2n+3=F2n+1∨F2n+2.F2n+4=F2n+3→F2n+1.

在 RN 中，既不是 F2n+1 蕴含 F2n+2，也不是 F2n+2 蕴含 F2n+1；但是 F2n 蕴含 F2n+1，而 F2n+1 蕴含 F2n+3 和 F2n+4 中的每一个。

直觉主义逻辑的片段缺少一个或多个逻辑连接词，限制了语言，同时也限制了逻辑，因为直觉主义连接词 &、∨、→、¬ 在 IPC 上是逻辑上独立的。Rose [1953] 证明了没有蕴含符号（没有 →）的片段在可实现性方面是完备的，也就是说，如果命题公式 E 的每个算术替代实例都是（数字）可实现的，那么 E 是 IPC 的一个定理。这个结果与以下事实形成对比：

 Rose 定理 [1953]
IPC 在可实现性方面是不完备的。

设 F 为命题公式((¬¬D→D)→(¬¬D∨¬D))→(¬¬D∨¬D)，其中 D 为(¬P∨¬Q)，且 P, Q 为素数。每个算术替代实例都可以实现 F （使用经典逻辑），但 F 在 IPC 中不可证明。

由此可知，对于 HA + ECT， IPC 在算术上是不完备的（参见第 5.2 节）。

直觉主义逻辑通过删除虚假得到了最小逻辑 ML。Kolmogorov [1925]证明了这个片段已经包含了保留两个量词的经典逻辑的负面解释，参见 Leivant [1985]。最小逻辑确实证明了虚假的特殊情况 ¬A→(A→¬B) 的否定。Colacito, de Jongh 和 Vardas [2017]研究了各种比 ML 弱的子最小逻辑。

Tennant [2017] 提出了一个激进的直觉主义核心逻辑 CL，其中推导定理与 ex falso 一同被牺牲。不可满足的假设仅导致虚假；因此 ¬A⊢(A→B)，但 ¬A,A⊬B（除非 B 是 ⊥）。所有核心证明都处于正常形式；在核心推导中，所有假设都是相关的。

Griss 对 Brouwer 的否定使用提出了异议，反对矛盾律和 ex falso。值得注意的是，直觉主义数学实际上并不需要否定，因为 0=1 是一个已知的矛盾，所以 ¬A 可以由 A→0=1 定义。然后，ex falso 可以被表述为 0=1→A，而矛盾律可以从 H 的剩余公理中证明。

中间命题逻辑是指任何一组包含 IPC 所有公理且在模态蕴涵和替换任意命题字母的任意公式下封闭的一致命题公式集合。每个中间命题逻辑都包含在 CPC 中。一些特定的中间命题逻辑，通过向 IPC 添加一个或多个经典正确但直觉主义不可证明的公理模式来进行表征，已经被广泛研究。

最简单的中间命题逻辑之一是 Gödel-Dummett 逻辑 LC，通过在 IPC 中添加模式 (A→B)∨(B→A) 获得，该模式在仅在节点的偏序是线性的 Kripke 框架上有效。Gödel [1932] 使用无限序列的逐渐增强的中间逻辑来证明 IPC 没有有限的真值表解释。对于每个正整数 n，令 Gn 为 LC 加上模式 (A1→A2)∨…∨(A1&…&An→An+1)。然后 Gn 仅在不超过 n 个节点的线性有序 Kripke 框架上有效。

Jankov 逻辑 KC 是在 IPC 中添加可测试性原则 ¬A∨¬¬A 而得到的，显然不具有析取性质。Kreisel-Putnam 逻辑 KP 是通过在 IPC 中添加模式 (¬A→(B∨C))→((¬A→B)∨(¬A→C)) 而得到的，具有析取性质但不满足所有 Visser 规则。通过添加模式 ((¬¬D→D)→(D∨¬D))→(¬¬D∨¬D) 获得的中间逻辑。

((¬¬D→D)→(D∨¬D))→(¬¬D∨¬D),

对应于 Rose 的反例，对于 IPC 来说，也具有析取性质。Iemhoff [2005]证明了 IPC 是唯一一个在所有 Visser 规则下封闭的具有析取性质的中间命题逻辑。Iemhoff 和 Metcalfe [2009]为 IPC 和一些中间逻辑开发了广义可容许性的形式演算。Goudsmit [2015]是对中间逻辑可容许规则的全面研究，附有详尽的参考文献。

中间命题逻辑 L 被称为具有有限框架性质，如果存在一类有限框架，其中 Kripke 有效的公式恰好是 L 的定理。许多中间逻辑，包括 LC 和 KP，具有这个性质。Jankov [1968]使用无穷序列的有限根 Kripke 框架证明了存在连续多个中间逻辑。De Jongh，Verbrugge 和 Visser [2009]证明了具有有限框架性质的每个中间逻辑 L 都是 HA(L)的命题逻辑，即 IPC 的逻辑扩展中所有算术替代实例都可以在 HA 和 L 的逻辑扩展中证明。

中间命题逻辑 L 在 L 中可容许的每个规则都是可导出的，则称 L 为结构完备的；如果每个扩展 L 的中间逻辑也是结构完备的，则称 L 为继承结构完备的。每个中间逻辑 L 都有一个结构完备的补充 L，通过添加所有可容许规则来获得。LC 和 Gn 是继承结构完备的。而 IPC，RN 和 KC 不是结构完备的，它们的结构补充是继承结构完备的。有关这些结果和更多信息，请参见 Citkin [2016，其他互联网资源]。

一些中间谓词逻辑，扩展了 IQC 并在替换下封闭，包括 IQC + DNS（第 4.1 节），IQC + MP（参见第 5.2 节），IQC + MP + IP（参见第 4.2 节），以及通过在 IQC 中添加模式∀x（A∨B（x））→（A∨∀xB（x））获得的常量域的直觉逻辑 CD，其中 A，B（x）是具有 x 不在 A 中自由出现的所有公式。Mints，Olkhovikov 和 Urquhart [2013]证明了 CD 没有插值性质，推翻了其他作者先前发表的证明。

### 6.2 基本直觉主义模态逻辑

本节只是对直觉主义模态逻辑的一个简要介绍。任何经典模态逻辑都有一个直觉主义伴随逻辑，通过将底层的经典命题逻辑或谓词逻辑替换为相应的直觉主义命题逻辑或谓词逻辑来定义。Simpson [1994]和 Plotkin 和 Stirling [1986]提供了一个适用于多种用途的直觉主义模态逻辑的通用框架。

直觉主义模态命题逻辑 iK 的基本公理为：

* 在带有逻辑连接词∧,∨,→,↔,¬，逻辑常量⊤和⊥，以及一元运算符□（必然性）的模态语言中，包括直觉主义逻辑的所有命题公理，以及
* Kripke 的分配模式□(A→B)→(□A→□B)的所有替代实例；

作为推理规则，所有替代实例为：

* 模态蕴涵：从 A 和(A→B)推导出 B，并且
* 必然性：从 A 推导出□A。

iL 在 iK 的基础上增加了 Löb 公理模式□(□A→A)→□A。

iK4 在 iL 的基础上增加了可传递公理模式□A→□□A。

一元运算符◊（可能性），在经典意义上等同于¬□¬，增加了直觉主义模态语言的表达能力。辛普森认为，直觉主义模态逻辑 K 的正确类比是 Plotkin 和 Stirling 的 IK，它将◊视为一个额外的原始符号，并在 iK 的基础上增加了以下模式：

* □(A→B)→(◊A→◊B).
* ¬◊⊥.
* ◊(A∨B)→(◊A∨◊B).
* (◊A→□B)→□(A→B).

### 6.3 高级主题

布劳威尔对哥德尔的影响是显著的，尽管哥德尔从未成为直觉主义者。哥德尔将直觉主义命题逻辑翻译为模态逻辑 S4 的[1933f]翻译在哥德尔条目的第 2.5 节中描述，并在哥德尔的著作集第一卷中的[1933f]翻译的 Troelstra 的引言中有介绍。另请参阅 Mints [2012]。模态逻辑的 Kripke 模型早于直觉主义逻辑的模型。

对直觉主义命题和谓词逻辑的 Kripke 和 Beth 语义的替代方法包括 Stone [1937]、Tarski [1938]和 Mostowski [1948]的拓扑解释（参见 Rasiowa 和 Sikorski [1963]，Rasiowa [1974]），这一解释被 Scott [1968]和 Krol [1978]扩展到直觉主义分析中。M. Hyland [1982]定义了有效拓扑 Eff，并证明了其逻辑是直觉主义的。关于直觉主义逻辑和数学的语义学的非常有信息量的讨论由 W. Ruitenberg 提供，G. Bezhanishvili 和 W. Holliday 提供了一个有趣的新视角，请参阅其他互联网资源（下文）。

直觉主义算术的一种替代实现语义的方法是 Gödel [1958]的“Dialectica”解释，它将 L(HA)的每个公式 B 与直觉主义算术语言中的无量词公式 BD 关联起来，该语言包括所有有限类型。B 的“Dialectica”解释，称为 BD，是∃Y∀xBD(Y,x)。如果 B 是 HA 的一个封闭定理，则对于 Gödel 的“原始递归”高阶函数理论 T 中的某个项 F，BD(F,x)是可证的。从 B 到 BD 的转换需要选择公理（在所有有限类型上），MP 和 IP，因此不是严格的构造性的；然而，由 T 的项 F 表示的数论函数正是 HA（和 PA）可证明的递归函数。该解释被 Spector [1962]扩展到分析中；参见 Howard [1973]。在 Troelstra 对 Gödel [1990]的英文翻译中，对原始 Dialectica 文章的介绍中，以及在 Avigad 和 Feferman [1998]和 Ferreira [2008]中，都可以找到清晰的阐述和额外的参考资料。

虽然 HA 是经典算术的一个适当部分，但直觉主义对数学对象的态度导致了一个与经典理论不同的实数理论（参见哲学数学直觉主义条目的 3.4-3.7 节）。Kleene 的函数实现解释是为了证明他的直觉主义序列理论（“直觉主义分析”）的形式化 FIM 的一致性而开发的，它改变了算术公式的解释；例如，对于每个算术公式 A(x)，¬¬∀x(A(x)∨¬A(x))都是函数实现的。在分析语言中，马尔可夫原理和可数选择公理的否定翻译是许多非直觉主义原理中的一部分，这些原理是函数实现的（通过经典论证），因此与 FIM 一致；参见 Kleene [1965]，Vesley [1972]和 Moschovakis [2003]。

逻辑学家和计算机科学家已经开发和研究了各种形式系统的具体和抽象实现语义；参见 Troelstra [1998]，van Oosten [2002]和[2008]。基本概念的变体对于建立基于直觉主义逻辑的理论中非逻辑公理的相对一致性和相对独立性尤其有用；一些例子包括 Moschovakis [1971]，Lifschitz [1979]以及 Rathjen [2006, 2012]和 Chen [2012]开发的构造性和直觉主义集合理论的实现概念。早期的抽象实现概念包括 Kleene [1962, 1963]，Aczel [1968]和 Läuchli [1970]的斜杠。Kohlenbach、Avigad 和其他人已经为经典数学的部分开发了实现解释。

Artemov 的证明逻辑是对直觉主义连接词和量词的 B-H-K 解释的另一种解释，其中（理想化的）证明扮演实现对象的角色。另请参阅 Artemov 和 Iemhoff [2007]。

直觉主义逻辑中的另一条研究线索涉及布劳尔对经典分析原理（如马尔科夫原理）的有争议的“创造性主体反例”，这些原理在 Kleene 和 Vesley [1965]的 FIM 理论的基础上无法被驳斥。通过削弱 Kleene 对布劳尔连续选择原理的强形式，并添加一个他称之为 Kripke 模式（KP）的公理，Myhill [1967]在直觉分析的语言中形式化了布劳尔的创造性主体论证。Krol [1978]和 Scowcroft 为带有 Kripke 模式和弱连续性的直觉分析提供了拓扑一致性证明。Kripke 本人更喜欢弱 Kripke 模式（WKP），它仍然与强连续选择相冲突。Kripke [2019]和 Brauer，Linnebo 和 Shapiro [2022]最近提供了布劳尔创造性主体理论的一种有吸引力的模态解释。

Vesley [1970]发现了一种替代原理（Vesley 模式 VS），可以一致地添加到 FIM 中，并暗示了布劳尔所需的创造性主体的所有反例。Troelstra 的广义连续选择（GC）和 Vesley 的 VS 表达了直觉分析的两种不兼容的可能扩展，具有不同的数学性质。

构造性数学家，遵循 Bishop 的传统，通常假设直觉主义逻辑，并使用概念的强定义。例如，他们将“至多存在一个数 n 使得 P(n)”等同于“如果 n 和 m 是不同的数，则不是 P(n)或不是 P(m)”，而不是更自然的“如果 n 和 m 是满足 P(n)和 P(m)的数，则 n=m”。Shulman [2022]建议，对于构造性数学来说，一种“仿射”证明和反驳逻辑，具有额外的连接词和对直觉主义逻辑的反义译码，可能更有用。

### 6.4 推荐阅读

有关 L. E. J. Brouwer 的条目讨论了 Brouwer 的哲学和数学，包括他的生平年表和选定的出版物列表，其中包括翻译和二手资料。了解更多的最佳方法是阅读一些原始论文。Brouwer 的博士论文和其他最初以荷兰语发表的论文的英文翻译，以及一些德文文章，可以在 Heyting 编辑的 L. E. J. Brouwer: Collected Works [1975]中找到。Benacerraf 和 Putnam 的基本资料书籍包括 Brouwer [1912]（英文翻译）、Brouwer [1949]和 Dummett [1975]。Mancosu 的[1998]提供了 Brouwer、Heyting、Glivenko 和 Kolmogorov 的许多基础文章的英文翻译，其中包含 W. van Stigt 的启发性导论材料，他的[1990]是另一个宝贵的资源。

Wim Veldman 的[2021]是一本令人愉快、易于理解且权威的直觉主义数学和逻辑导论。Heyting 的经典著作[1956]的第三版[1971]是直觉主义哲学、逻辑和数学实践的引人入胜的导论。作为编辑和出版 Brouwer 的 Nachlass 项目的一部分，van Dalen [1981]提供了 Brouwer 自己的直觉主义哲学的全面视角。Brouwer 的[1927]（由 Parsons 精心引导）的英文翻译，仍然是 Brouwer 连续体理论的不可或缺的参考资料，收录在 van Heijenoort [1969]中。Veldman [1990]和[2005]是传统直觉主义数学实践的现代典范。Troelstra [1991]将直觉主义逻辑置于其历史背景中，作为 20 世纪建设性数学的共同基础。Bezhanishvili 和 de Jongh [2005，其他互联网资源]包括直觉主义逻辑的最新发展。

Kleene 和 Vesley 的[1965]对直觉主义分析进行了仔细的公理化处理，证明了它相对于经典正确子理论的一致性，并扩展应用于 Brouwer 的实数生成器理论。Kleene 的[1969]对部分递归函数的理论进行了形式化处理，使得可以精确地形式化[1965]中使用的函数实现解释以及相关的 q-实现解释，该解释为直觉主义分析提供了 Church-Kleene 规则。

Troelstra 的[1973]，Beeson 的[1985]和 Troelstra 和 van Dalen 的[1988]（带有修正）是直觉主义和半直觉主义形式理论最全面的研究，使用了建设性和经典方法，并提供了有用的参考文献。Troelstra 和 Schwichtenberg [2000]以并行方式展示了经典、直觉主义和最小逻辑的证明理论，重点关注序列系统。Troelstra 的[1998]提供了命题逻辑和谓词逻辑的公式即类型和（Kleene 和 Aczel）斜线解释，以及多种应用的抽象和具体实现。Martin-Löf 的构造类型理论[1984]（参见构造数学条目的第 3.4 节）提供了另一个直觉推理持续发展的通用框架。

<!--md-padding-ignore-begin-->
## Bibliography

* Aczel, P., 1968, “Saturated intuitionistic theories,” in H.A. Schmidt, K. Schütte, and H.-J. Thiele (eds.), *Contributions to Mathematical Logic*, Amsterdam: North-Holland: 1–11.
* Artemov, S. and Iemhoff, R., 2007, “The basic intuitionistic logic of proofs,” *Journal of Symbol Logic*, 72: 439–451.
* Avigad, J. and Feferman, S., 1998, “Gödel’s functional (”Dialectica“) interpretation,” Chapter V of Buss (ed.) 1998: 337–405.
* Bar-Hillel, Y. (ed.), 1965, *Logic, Methodology and Philosophy of Science*, Amsterdam: North Holland.
* Beeson, M. J., 1985, *Foundations of Constructive Mathematics*, Berlin: Springer.
* Benacerraf, P. and Hilary Putnam (eds.), 1983, *Philosophy of Mathematics: Selected Readings*, 2nd Edition, Cambridge: Cambridge University Press.
* Beth, E. W., 1956, “Semantic construction of intuitionistic logic,” *Koninklijke Nederlandse Akad. von Wettenscappen*, 19(11): 357–388.
* Brauer, E., 2022, “The modal logic of potential infinity: convergent versus branching possibilities,” *Erkenntnis* 87:2161–2179.
* Brauer, E., Linnebo O. and Shapiro, S., 2022, “Divergent potentialism: a modal analysis with an application to choice sequences,” *Philosophia Mathematica* 30(2): 143–172.
* Brouwer, L. E. J., 1907, “On the Foundations of Mathematics,” Thesis, Amsterdam; English translation in Heyting (ed.) 1975: 11–101.
* –––, 1908, “The Unreliability of the Logical Principles,” English translation in Heyting (ed.) 1975: 107–111.
* –––, 1912, “Intuitionism and Formalism,” English translation by A. Dresden, *Bulletin of the American Mathematical Society*, 20 (1913): 81–96, reprinted in Benacerraf and Putnam (eds.) 1983: 77–89; also reprinted in Heyting (ed.) 1975: 123–138.
* –––, 1923 [1954], “On the significance of the principle of excluded middle in mathematics, especially in function theory,” “Addenda and corrigenda,” and “Further addenda and corrigenda,” English translation in van Heijenoort (ed.) 1967: 334–345.
* –––, 1923C, “Intuitionistische Zerlegung mathematischer Grundbegriffe,” *Jahresbericht der Deutschen Mathematiker-Vereinigung*, 33 (1925): 251–256; reprinted in Heyting (ed.) 1975, 275–280.
* –––, 1927, “Intuitionistic reflections on formalism,” originally published in 1927, English translation in van Heijenoort (ed.) 1967: 490–492.
* –––, 1948, “Consciousness, philosophy and mathematics,” originally published (1948), reprinted in Benacerraf and Putnam (eds.) 1983: 90–96.
* Burr, W., 2004, “The intuitionistic arithmetical hierarchy,” in J. van Eijck, V. van Oostrom and A. Visser (eds.), *Logic Colloquium ’99* (Lecture Notes in Logic 17), Wellesley, MA: ASL and A. K. Peters, 51–59.
* Buss, S. (ed.), 1998, *Handbook of Proof Theory*, Amsterdam and New York: Elsevier.
* Chen, R-M. and Rathjen, M., 2012, “Lifschitz realizability for intuitionistic Zermelo-Fraenkel set theory,” *Archive for Mathematical Logic*, 51: 789–818.
* Colacito, A., de Jongh, D. and Vargas, A., 2017, “Subminimal Negation”, *Soft Computing*, 21: 165–164.
* Crossley, J., and M. A. E. Dummett (eds.), 1965, *Formal Systems and Recursive Functions*, Amsterdam: North-Holland Publishing.
* van Dalen, D. (ed.), 1981, *Brouwer’s Cambridge Lectures on Intuitionism*, Cambridge: Cambridge University Press.
* Dummett, M., 1975, “The philosophical basis of intuitionistic logic,” originally published (1975), reprinted in Benacerraf and Putnam (eds.) 1983: 97–129.
* Dyson, V. and Kreisel, G., 1961, *Analysis of Beth’s semantic construction of intuitionistic logic*, Technical Report No. 3, Stanford: Applied Mathematics and Statistics Laboratory, Stanford University.
* Ewald, W. B., 1986, “Intuitionistic tense and modal logic,” *Journal of Symbolic Logic* 51(1): 166–179.
* Ferreira, F., 2008, “A most artistic package of a jumble of ideas,” *Dialectica*, 62: 205–222.
* Fitting, M., 1987, “Resolution for intuitionistic logic”, *Proceedings of the Second International Symposium on Methodologies for Intelligent Systems*, December 1987: 400–407.
* Friedman, H., 1975, “The disjunction property implies the numerical existence property,” *Proceedings of the National Academy of Science*, 72: 2877–2878.
* Gentzen, G., 1934–5, “Untersuchungen Über das logische Schliessen,” *Mathematische Zeitschrift*, 39: 176–210, 405–431.
* Ghilardi, S., 1999, “Unification in intuitionistic logic,” *Journal of Symbolic Logic*, 64: 859–880.
* Glivenko, V., 1929, “Sur quelques points de la logique de M. Brouwer,” *Académie Royale de Belgique, Bulletins de la classe des sciences*, 5 (15): 183–188.
* Gödel, K., 1932, “Zum intuitionistischen Aussagenkalkül,” *Anzeiger der Akademie der Wissenschaften in Wien*, 69: 65–66. Reproduced and translated with an introductory note by A. S. Troelstra in Gödel 1986: 222–225.
* –––, 1933e, “Zur intuitionistischen Arithmetik und Zahlentheorie,” *Ergebnisse eines mathematischen Kolloquiums*, 4: 34–38.
* –––, 1933f, “Eine Interpretation des intuitionistischen Aussagenkalküls,” reproduced and translated with an introductory note by A. S. Troelstra in Gödel 1986: 296–304.
* –––, 1958, “Über eine bisher noch nicht benützte Erweiterung des finiten Standpunktes,” *Dialectica*, 12: 280–287. Reproduced with an English translation in Gödel 1990: 241–251.
* –––, 1986, *Collected Works*, Vol. I, S. Feferman *et al*. (eds.), Oxford: Oxford University Press.
* –––, 1990, *Collected Works*, Vol. II, S. Feferman *et al*. (eds.), Oxford: Oxford University Press.
* Goudsmit, J. P., 2015, *Intuitionistic Rules: Admissible Rules of Intermediate Logics*, Ph.D. dissertation, University of Utrecht.
* Harrop R., 1960, “Concerning formulas of the types A→B∨C,A→(Ex)B(x) in intuitionistic formal systems,” *Journal of Symbolic Logic*, 25: 27–32.
* van Heijenoort, J. (ed.), 1967, *From Frege to Gödel: A Source Book In Mathematical Logic 1879–1931*, Cambridge, MA: Harvard University Press.
* Heyting, A., 1930, “Die formalen Regeln der intuitionistischen Logik,” in three parts, *Sitzungsberichte der preussischen Akademie der Wissenschaften*: 42–71, 158–169. English translation of Part I in Mancosu 1998: 311–327.
* –––, 1956, *Intuitionism: An Introduction*, Amsterdam: North-Holland Publishing, 3rd revised edition, 1971.
* Heyting, A. (ed.), 1975, *L. E. J. Brouwer: Collected Works* (Volume 1: *Philosophy and Foundations of Mathematics*), Amsterdam and New York: Elsevier.
* Howard, W. A., 1973, “Hereditarily majorizable functionals of finite type,” in Troelstra (ed.) 1973: 454–461.
* Hyland, J. M. E., 1982, “The effective topos,” in Troelstra and van Dalen (ed.) 1982: 165–216.
* Iemhoff, R., 2001, “On the admissible rules of intuitionistic propositional logic,” *Journal of Symbolic Logic*, 66: 281–294.
* –––, 2005, “Intermediate logics and Visser’s rules,” *Notre Dame Journal of Formal Logic*, 46: 65–81.
* Iemhoff, R. and Metcalfe, G., 2009, “Proof theory for admissible rules,” *Annals of Pure and Applied Logic*, 159: 171–186.
* Jankov, V. A., 1968, “The construction of a sequence of strongly independent superintuitionistic propositional calculii,” *Soviet Math. Doklady*, 9: 801–807.
* Jerabek, E., 2008, “Independent bases of admissible rules,” *Logic Journal of the IGPL*, 16: 249–267.
* de Jongh, D. H. J., 1970, “The maximality of the intuitionistic propositional calculus with respect to Heyting’s Arithmetic,” *Journal of Symbolic Logic*, 6: 606.
* de Jongh, D. H. J., and Smorynski, C., 1976, “Kripke models and the intuitionistic theory of species,” *Annals of Mathematical Logic*, 9: 157–186.
* de Jongh, D., Verbrugge, R. and Visser, A., 2011, “Intermediate logics and the de Jongh property,” *Archive for Mathematical Logic*, 50: 197–213.
* Kino, A., Myhill, J. and Vesley, R. E. (eds.), 1970, *Intuitionism and Proof Theory: Proceedings of the summer conference at Buffalo, NY, 1968*, Amsterdam: North-Holland.
* Kleene, S. C., 1945, “On the interpretation of intuitionistic number theory,” *Journal of Symbolic Logic*, 10: 109–124.
* –––, 1952, *Introduction to Metamathematics*, Princeton: Van Nostrand.
* –––, 1962, “Disjunction and existence under implication in elementary intuitionistic formalisms,” *Journal of Symbolic Logic*, 27: 11–18.
* –––, 1963, “An addendum,” *Journal of Symbolic Logic*, 28: 154–156.
* –––, 1965, “Classical extensions of intuitionistic mathematics,” in Bar-Hillel (ed.) 1965: 31–44.
* –––, 1969, *Formalized Recursive Functionals and Formalized Realizability*, Memoirs of the American Mathematical Society 89.
* Kleene, S. C. and Vesley, R. E., 1965, *The Foundations of Intuitionistic Mathematics, Especially in Relation to Recursive Functions*, Amsterdam: North-Holland.
* Kreisel, G., 1958, “Elementary completeness properties of intuitionistic logic with a note on negations of prenex formulas,” *Journal of Symbolic Logic*, 23: 317–330.
* –––, 1962, “On weak completeness of intuitionistic predicate logic,” *Journal of Symbolic Logic*, 27: 139–158.
* Kripke, S. A., 1965, “Semantical analysis of intuitionistic logic,” in J. Crossley and M. A. E. Dummett (eds.) 1965: 92–130.
* –––, 2019, “Free choice sequences: A temporal interpretation compatible with acceptance of classical mathematics,” *Indag.Math.*, 30: 492–499.
* Krol, M., 1978, “A topological model of intuitionistic analysis with Kripke’s Schema,” *Zeitschrift für Math. Logik und Grundlagen der Math.*, 24: 427–436.
* Leivant, D., 1979, “Maximality of Intuitionistic Logic,” Mathematical Centre Tracts 73, Mathematisch Centrum, Amsterdam.
* –––, 1985, “Syntactic translations and provably recursive functions,” *Journal of Symbolic Logic*, 50: 682–688.
* Läuchli, H., 1970, “An abstract notion of realizability for which intuitionistic predicate calculus is complete,” in A. Kino et al. (eds.) 1965: 227–234.
* Lifschitz, V., 1979, “CT0 is stronger than CT0!,” *Proceedings of the American Mathematical Society*, 73(1): 101–106.
* Mancosu, P., 1998, *From Brouwer to Hilbert: The Debate on the Foundations of Mathematics in the 1920s*, New York and Oxford: Oxford University Press.
* Martin-Löf, P., 1984, *Intuitionistic Type Theory*, Notes by Giovanni Sambin of a series of lectures given in Padua, June 1980, Napoli: Bibliopolis.
* Mints, G., 2012, “The Gödel–Tarski translations of intuitionistic propositional formulas,” in *Correct Reasoning* (Lecture Notes in Computer Science 7265), E. Erdem et al. (eds.), Dordrecht: Springer-Verlag: 487–491.
* Mints, G., Olkhovikov, G. and Urquhart, A., 2013, “Failure of interpolation in the intuitionistic logic of constant domains,” *Journal of Symbolic Logic* 78(3): 937–950.
* Moschovakis, J. R., 1971, “Can there be no nonrecursive functions?,” *Journal of Symbolic Logic*, 36: 309–315.
* –––, 2003, “Classical and constructive hierarchies in extended intuitionistic analysis,” *Journal of Symbolic Logic*, 68: 1015–1043.
* –––, 2009, “The logic of Brouwer and Heyting,” in *Logic from Russell to Church* (*Handbook of the History of Logic*, Volume 5), J. Woods and D. Gabbay (eds.), Amsterdam: Elsevier: 77–125.
* –––, 2017, “Intuitionistic analysis at the end of time,” *Bulletin of Symbolic Logic*, 23: 279–295.
* Myhill, J., 1967, “Notes toward an axiomatization of intuitionistic analysis,” *Logique et Analyse* 9: 280–297.
* Nelson, D., 1947, “Recursive functions and intuitionistic number theory,” *Transactions of the American Mathematical Society*, 61: 307–368.
* Nishimura, I., 1960, “On formulas of one variable in intuitionistic propositional calculus,” *Journal of Symbolic Logic*, 25: 327–331.
* van Oosten, J., 1991, “A semantical proof of de Jongh’s theorem,” *Archives for Mathematical Logic*, 31: 105–114.
* –––, 2002, “Realizability: a historical essay,” *Mathematical Structures in Computer Science*, 12: 239–263.
* –––, 2008, *Realizability: An Introduction to its Categorical Side*, Amsterdam: Elsevier.
* Plisko, V. E., 1992, “On arithmetic complexity of certain constructive logics,” *Mathematical Notes*, (1993): 701–709. Translated from *Matematicheskie Zametki*, 52 (1992): 94–104.
* Plotkin, G. and Stirling, C., 1986, “A framework for intuitionistic modal logic,” in *TARK ’86: Proceedings of the 1986 conference on theoretical aspects of reasoning about knowledge*, J. Halpern (ed.), Morgan Kaufmann Publishers, Los Altos 1986: 399–406. Abstract in *Journal of Symbolic Logic* 53(2): 669.
* Rasiowa, H., 1974, *Algebraic Approach to Non-Classical Logics*, Amsterdam: North-Holland.
* Rasiowa, H. and Sikorski, R., 1963, *The Mathematics of Metamathematics*, Warsaw: Panstwowe Wydawnictwo Naukowe.
* Rathjen, M., 2006, “Realizability for constructive Zermelo-Fraenkel set theory,” in *Logic Colloquium 2003* (Lecture Notes in Logic 24), J. Väänänen et al. (eds.), A. K. Peters 2006: 282–314.
* –––, 2012, “From the weak to the strong existence property,” *Annals of Pure and Applied Logic*, 163: 1400–1418.
* Rose, G. F., 1953, “Propositional calculus and realizability,” *Transactions of the American Mathematical Society*, 75: 1–19.
* Ruitenberg, W., 1991, “The unintended interpretations of intuitionistic logic”, in: T. Drucker (ed.), *Perspectives on the History of Mathematical Logic*, Birkhauser 1991: 134–160.
* Rybakov, V., 1997, *Admissibility of Logical Inference Rules*, Amsterdam: Elsevier.
* Scott, D., 1968, “Extending the topological interpretation to intuitionistic analysis,” *Compositio Mathematica*, 20: 194–210.
* Shulman, M., 2022, “Affine logic for constructive mathematics”, *Bulletin of Symbolic Logic*, 28: 327–386.
* Simpson, A. K., 1994, *The proof theory and semantics of intuitionistic modal logic*, Doctoral dissertation, University of Edinburgh.
* Smorynski, C. A., 1973, “Applications of Kripke models,” in Troelstra (ed.) 1973: 324–391.
* Spector, C., 1962, “Provably recursive functionals of analysis: a consistency proof of analysis by an extension of principles formulated in current intuitionistic mathematics,” *Recursive Function Theory: Proceedings of Symposia in Pure Mathematics*, Volume 5, J. C. E. Dekker (ed.), Providence, RI: American Mathematical Society, 1–27.
* van Stigt, W. P., 1990, *Brouwer’s Intuitionism*, Amsterdam: North-Holland.
* Stone, M. H., 1937, “Topological representation of distributive lattices and Brouwerian logics”, *Casopis Pest. Mat. Fys.*, 67: 1–25.
* Swart, H. C. M. de, 1976, “Another intuitionistic completeness proof,” *Journal of Symbolic Logic* 41: 644–662.
* Tarski, A., 1938, “Der Aussagenkalkül und die Topologie”, *Fundamenta Mathematicae*, 31: 103–134.
* Tennant, N., 2017, *Core Logic*, Oxford University Press, Oxford.
* Troelstra, A. S., 1977, *Choice Sequences: A Chapter of Intuitionistic Mathematics*, Oxford Logic Guides, Clarendon Press, Oxford.
* –––, 1991, “History of constructivism in the twentieth century,” ITLI Prepublication Series ML–1991–05, Amsterdam. Final version in *Set Theory, Arithmetic and Foundations of Mathematics* (Lecture Notes in Logic 36), J. Kenney and R. Kossak (eds.), Association for Symbolic Logic, Ithaca, NY, 2011: 150–179.
* –––, 1998, “Realizability,” Chapter VI of Buss (ed.), 1998: 407–473.
* –––, Introductory note to 1958 and 1972, in Gödel, 1990: 217–241.
* Troelstra, A. S. (ed.), 1973, *Metamathematical Investigation of Intuitionistic Arithmetic and Analysis* (Lecture Notes in Mathematics 344), Berlin: Springer-Verlag. Corrections and additions available from the editor.
* Troelstra, A. S. and Schwichtenberg, H., 2000, *Basic Proof Theory* (Cambridge Tracts in Theoretical Computer Science: Volume 43), 2nd edition, Cambridge: Cambridge University Press.
* Troelstra, A. S. and van Dalen, D., 1988, *Constructivism in Mathematics: An Introduction*, 2 volumes, Amsterdam: North-Holland Publishing. [See also the *Corrections*, in Other Internet Resources.]
* Troelstra, A. S. and van Dalen, D. (eds.), 1982, *The L. E. J. Brouwer Centenary Symposium*, Amsterdam: North-Holland Publishing.
* Veldman, W., 1976, “An intuitionistic completeness theorem for intuitionistic predicate logic,” *Journal of Symbolic Logic*, 41: 159–166.
* –––, 1990, “A survey of intuitionistic descriptive set theory,” in P. P. Petkov (ed.), *Mathematical Logic, Proceedings of the Heyting Conference*, New York and London: Plenum Press, 155–174.
* –––, 2005, “Two simple sets that are not positively Borel,” *Annals of Pure and Applied Logic*, 135: 151–209.
* –––, 2021, “Intuitionism: An inspiration?,” *Jahresbericht der Deutscher Mathematiker-Vereinigung*, 123: 221–284.
* Vesley, R. E., 1972, “Choice sequences and Markov’s principle,” *Compositio Mathematica*, 24: 33–53.
* –––, 1970, “A palatable substitute for Kripke’s Schema,” in A. Kino et al. (eds.) 1970: 197ff.
* Visser, A., 1999, “Rules and arithmetics,” *Notre Dame Journal of Formal Logic*, 40: 116–140.
* –––, 2002, “Substitutions of Σ01 sentences: explorations between intuitionistic propositional logic and intuitionistic arithmetic,” *Annals of Pure and Applied Logic*, 114: 227–271.
* –––, 2006, “Predicate logics of constructive arithmetical theories,” *Journal of Symbolic Logic*, 72: 1311–1326.

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logic-intuitionistic). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logic-intuitionistic/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logic-intuitionistic&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](https://philpapers.org/sep/logic-intuitionistic/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* Bezhanishvili, G. and Holliday, W., 2018, “[A semantic hierarchy for intuitionistic logic](https://escholarship.org/uc/item/2vp2x4rx),” manuscript, UC Berkeley Faculty Publications.
* Bezhanishvili, N. and de Jongh, D. H. J., 2005, [*Intuitionistic Logic*](http://www.cs.le.ac.uk/people/nb118/Publications/ESSLLI'05.pdf), Lecture notes presented at ESSLLI, Edinburgh.
* Brouwer, [Excerpts from Brouwer’s Cambridge lectures.](http://www.marxists.org/reference/subject/philosophy/works/ne/brouwer.htm)
* Citkin, A., 2016, “[Hereditarily structurally complete superintuitionistic deductive systems](https://arxiv.org/pdf/1611.04809.pdf),” manuscript at arXiv.org.
* de Paiva, Valeria, 2015, [Intuitionistic modal logic: 15 years later](https://logic.berkeley.edu/colloquium/dePaivaSlides.pdf).
* Troelstra, A. S., 2018, [Corrections to some publications](https://eprints.illc.uva.nl/id/eprint/1650).
* Troelstra, A. S., and van Ulsen, P., [The discovery of E. W. Beth’s semantics for intuitionistic logic](https://festschriften.illc.uva.nl/j50/contribs/troelstra/).
* [Realizability Bibliography](https://cs.au.dk/~birke/realizability/index.html), maintained by Lars Birkedal.
* [van Oosten 2000, and other preprints related to realizability,](http://www.math.uu.nl/people/jvoosten/realizability.html) maintained by Jaap van Oosten.

## Related Entries

[Brouwer, Luitzen Egbertus Jan](https://plato.stanford.edu/entries/brouwer/) | [Gödel, Kurt](https://plato.stanford.edu/entries/goedel/) | [logic, history of: intuitionistic logic](https://plato.stanford.edu/entries/intuitionistic-logic-development/) | [logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [logic: modal](https://plato.stanford.edu/entries/logic-modal/) | [logic: provability](https://plato.stanford.edu/entries/logic-provability/) | [logicism and neologicism](https://plato.stanford.edu/entries/logicism/) | [mathematics, philosophy of](https://plato.stanford.edu/entries/philosophy-mathematics/) | [mathematics, philosophy of: formalism](https://plato.stanford.edu/entries/formalism-mathematics/) | [mathematics, philosophy of: intuitionism](https://plato.stanford.edu/entries/intuitionism/) | [mathematics, philosophy of: Platonism](https://plato.stanford.edu/entries/platonism-mathematics/) | [mathematics: constructive](https://plato.stanford.edu/entries/mathematics-constructive/) | [proof theory: development of](https://plato.stanford.edu/entries/proof-theory-development/) | [set theory: constructive and intuitionistic ZF](https://plato.stanford.edu/entries/set-theory-constructive/)

### Acknowledgments

I would like to thank Wim Veldman especially for his recent open-access article “Intuitionism: An Inspiration?”, which is a gift to curious students, mathematically inclined philosophers and philosophically inclined mathematicians. Veldman is a practicing intuitionistic mathematician whose mentor was M. de Jongh, one of Brouwer’s students. *Intuitionism: An Introduction* was written more than half a century ago by another of Brouwer’s students, A. Heyting, for a similar audience. The similarity of titles is appropriate.

Over the years, many readers and a few wise and conscientious referees have offered corrections and improvements to this entry. I am still grateful to Edward Horton (for pointing out that replacing *ex falso* by the LEM in the axioms for IPC does not yield all of CPC, and for providing the correct substitutions) and to all the other readers who have corrected errors in earlier editions. I thank Mark van Atten, Robert Thomas, Victor Pambuccian, Michael Beeson, Mariusz Stopa and Antonino Drago for bringing new and old work to my attention since the last revision. Questions from students are always appreciated; this time, Miles Shi’s question led to an improvement in Section 5. As always, I thank Ed Zalta for his patience and attention to detail, and for the very existence of this comprehensive open-access encyclopedia.

[Copyright © 2022](https://plato.stanford.edu/info.html#c) by  
[Joan Moschovakis](https://www.math.ucla.edu/~joan/) <[*joan@math.ucla.edu*](mailto:joan%40math%2eucla%2eedu)>
<!--md-padding-ignore-end-->
