# 塔尔斯基的真理定义 truth definitions (Wilfrid Hodges)

*首次发表于 2001 年 11 月 10 日；实质性修订于 2022 年 9 月 21 日*

1933 年，波兰逻辑学家阿尔弗莱德·塔尔斯基发表了一篇论文，讨论了“真句”的定义应满足的标准，并给出了几个特定形式语言的定义示例。1956 年，他和他的同事罗伯特·沃特发表了对 1933 年真理定义的修订，以作为模型论语言的真理定义。本条目将简单回顾这些定义，并不试图探讨塔尔斯基的工作对语义学（自然语言或编程语言）或真理的哲学研究的影响。（有关这些影响，请参阅真理和阿尔弗莱德·塔尔斯基的条目。）

---

## 1. 1933 年的计划和语义观念

在 20 世纪 20 年代末，阿尔弗莱德·塔尔斯基开始了一个项目，为科学方法论中有用的概念提供严格的定义。1933 年，他发表了（用波兰语）对真句概念的分析。这篇长文承担了两个任务：首先，说明对于给定的形式语言，什么样的定义应该被视为令人满意的“真句”；其次，展示了一系列形式语言存在令人满意的“真句”定义。我们从第一个任务开始；第 2 节将考虑第二个任务。

我们说一个语言是完全解释的，如果它的所有句子都有使它们成为真或假的意义。塔尔斯基在 1933 年的论文中考虑的所有语言都是完全解释的，除了下面第 2.2 节中描述的一个例外。这是 1933 年定义和后来的模型论定义之间的主要区别，我们将在第 3 节中进行讨论。

塔尔斯基描述了真理的一个令人满意的定义应该满足的几个条件。

### 1.1 客体语言和元语言

如果讨论的语言（客体语言）是 L，那么定义应该用另一种称为元语言的语言给出，称之为 M。元语言应该包含客体语言的一个副本（以便 L 中的任何内容也可以在 M 中说出），并且 M 还应该能够讨论 L 的句子及其语法。最后，塔尔斯基允许 M 包含集合论的概念，并且具有预期的含义“是 L 的真句”。元语言的主要目的是形式化关于客体语言的陈述，因此塔尔斯基还要求元语言应该携带一组公理，表达了为了定义和证明真理定义而需要假设的一切。真理定义本身应该是用元语言的其他表达式来定义 True。因此，定义应该是基于语法、集合论和 L 中可表达的概念，而不是语义概念，如“指代”或“意义”（除非客体语言恰好包含这些概念）。

塔尔斯基假设，按照他那个时代的方式，客体语言 L 和元语言 M 将是某种高阶逻辑的语言。如今，更常见的是将某种非正式的集合论作为元语言；这会影响塔尔斯基论文的一些细节，但不会影响其主要观点。而且如今通常用集合论术语来定义语法，例如，字母串变成了序列。实际上，如果想要处理具有不可数多个符号的客体语言，就必须使用集合论语法，正如模型论者在过去半个多世纪中自由使用的那样。

### 1.2 正式正确性

真理的定义应该是“形式上正确”的。这意味着它应该是以下形式的句子：

对于所有的 x，当且仅当ϕ(x)，True(x)成立，

其中ϕ中不包含 True；或者如果不满足这个条件，那么定义应该可以被证明等价于这种形式的句子。这个等价性必须使用不包含 True 的元语言公理来证明。通常将上述类型的定义称为显式定义，尽管塔尔斯基在 1933 年称之为正常定义。

### 1.3 材料充足性

定义应该是“材料上充足的”（trafny - 更好的翻译应该是“准确的”）。这意味着满足ϕ的对象应该恰好是我们直观上认为是 L 的真句的对象，并且这个事实应该可以从元语言的公理中证明。乍一看，这是一个自相矛盾的要求：如果我们可以从元语言的公理中证明塔尔斯基所要求的东西，那么我们必须已经在元语言中有一个材料上充足的“L 的真句”的形式化，这暗示了一个无限回归。事实上，塔尔斯基通过使用（一般情况下）无限多个 M 的句子来表达真理，即所有形式为的句子来逃避这个悖论。

ϕ(s)当且仅当ψ

每当 s 是 L 语言中句子 S 的名称，ψ是 S 在元语言中的副本。因此，技术问题是找到一个单一的公式ϕ，使我们能够从 M 的公理中推导出所有这些句子；这个公式ϕ将用于给出真理的显式定义。

Tarski 对于这个材料充分性标准的命名是 Convention T。更一般地说，他对于使用这个标准来定义真理的方法的命名是语义概念的真理。

正如 Tarski 本人强调的那样，如果语言 L 具有足够的资源来谈论自己的语义，Convention T 会迅速导致说谎者悖论。（请参阅关于真理修正理论的条目。）Tarski 自己的结论是，语言 L 的真理定义必须在一个本质上比 L 更强的元语言中给出。

数学基础有一个结果。一阶泽尔梅洛-弗兰克尔集合论被广泛认为是数学正确性的标准，即只有当一个证明可以在集合论中形式化为形式证明时，它才是正确的。我们希望能够为集合论给出一个真理定义；但根据塔尔斯基的结果，这个真理定义不能在集合论本身中给出。通常的解决方案是用英语非正式地给出真理定义。但是有许多方法可以为集合论给出有限的形式真理定义。例如，阿兹里尔·列维证明了对于每个自然数 n，存在一个Σn 公式，它仅满足集合论中真实的Σn 句子的集合论名字。Σn 的定义在这里太技术性了，但有三点值得注意。首先，对于任意足够大的 n，集合论的每个句子都可以被证明等价于一个Σn 句子。其次，Σn 公式的类在开头添加存在量词时是封闭的，但在添加全称量词时不是封闭的。第三，该类不封闭于否定；这是列维逃避塔尔斯基悖论的方法。（参见集合论词条。）基本上相同的方法使雅科·欣蒂卡能够为他的独立友好逻辑给出一个内部真理定义；这个逻辑与列维的公式类共享第二和第三个性质。

## 2. 1933 年模式上的某些真理定义类型

在他 1933 年的论文中，塔尔斯基继续展示了许多完全解释的形式语言确实具有满足他条件的真理定义。他在那篇论文中给出了四个例子。其中一个是有限语言的平凡定义；它只是列出了有限个真句。另一个是通过量词消除来定义的；见下面的第 2.2 节。剩下的两个，针对不同类别的语言，是今天人们所认为的标准塔尔斯基真理定义的先驱；它们是 1956 年模型论定义的前身。

### 2.1 标准真理定义

乍一看，这两个标准真理定义并不是真理的定义，而是涉及将对象分配给变量的更复杂关系的定义：

a 满足公式 F

（其中符号“F”是对象语言中特定公式的占位符）。实际上，满足关系在这个意义上归结为真理：如果 a 满足公式 F，那么只有当将 F 中的每个自由变量视为 a 分配给它的对象的名称时，公式 F 才成为一个真句。因此，我们对一个句子何时为真的直觉可以指导我们对一个分配何时满足一个公式的直觉。但是，所有这些都不能纳入真理的形式定义中，因为“将变量视为对象的名称”是一个语义概念，而塔尔斯基的真理定义必须仅建立在语法和集合论（以及对象语言中的那些概念）的基础上；请回顾第 1.1 节。实际上，塔尔斯基的归约是反过来的：如果公式 F 没有自由变量，那么说 F 为真就是说每个分配都满足它。

塔尔斯基直接定义满足关系并推导出真理的定义的原因是满足关系在以下意义上遵循递归条件：如果 F 是一个复合公式，那么只要知道哪些分配满足 F 的直接组成部分，就足以知道哪些分配满足 F。以下是两个典型的例子：

* 如果且仅当 a 满足 F 且 a 满足 G 时，分配 a 满足公式“F 和 G”。
* 如果且仅当对于每个个体 i，如果 b 是将 i 分配给变量 x 并且在其他方面与 a 完全相同的分配，则 b 满足 G，分配 a 满足公式“对于所有 x，G”。

对于原子公式，我们必须使用不同的方法。但是对于这些公式，至少在简单起见假设 L 没有函数符号，我们可以使用谓词符号 R 的元语言副本#(R)。因此：

* 如果且仅如果 #(R)(a(x),a(y))，则赋值 a 满足公式 R(x,y)。

（警告：表达式 # 在元元语言中，而不是元语言 M 中。我们可能能够找到一个表达谓词符号的 M 的公式来表示 #，也可能找不到；这取决于语言 L 的具体情况。）

在下一段中稍作保留，塔尔斯基的满足定义是组合的，这意味着满足复合公式 F 的赋值类仅由以下两个因素决定：（1）用于从其直接成分构造 F 的语法规则，以及（2）满足这些直接成分的赋值类。（有时这样表述：满足是递归定义的。但这种表述忽略了一个核心问题，即（1）和（2）不包含关于直接成分的语法信息。）组合性解释了为什么塔尔斯基从真理转向满足。你不能通过是否 G 为真来定义“对于所有 x，G”是否为真，因为通常 G 有一个自由变量 x，所以它既不是真也不是假。

预订的问题在于塔尔斯基在 1933 年的论文中对满足公式 F 的赋值类并没有提及。相反，正如我们所见，他定义了关系“a 满足 F”，这决定了赋值类是什么。这可能是为什么一些人（包括塔尔斯基本人在谈话中所说，如巴巴拉·帕蒂所报道的）更倾向于不将 1933 年的定义描述为组合性的主要原因。但是，组合性的类格式确实出现在塔尔斯基 1931 年关于可定义实数集的论文的早期变体中。塔尔斯基在他 1933 年的论文的第 4 和第 5 节中仔细阐述了这些要求的原因。

“组合性”这个名称首次出现在普特南姆（Putnam）于 1960 年（1975 年出版）和卡茨（Katz）和福多尔（Fodor）于 1963 年关于自然语言语义的论文中。在谈论组合性时，我们开始将塔尔斯基的定义视为一种语义学，即一种给公式“赋予意义”的方式。（在这里，我们将一个句子的意义视为其真值。）组合性基本上意味着赋予公式的意义至少提供了足够的信息来确定包含它们的句子的真值。相反地，我们可以问塔尔斯基的语义学是否仅提供了我们需要的关于每个公式的信息，以便确定句子的真值。如果答案是肯定的，我们称该语义学在真值方面是完全抽象的。对于逻辑的任何标准语言，可以相当容易地证明塔尔斯基的满足定义实际上是完全抽象的。

就目前而言，塔尔斯基的满足定义并不是一个明确的定义，因为一个公式的满足是通过其他公式的满足来定义的。因此，为了证明其形式上的正确性，我们需要一种将其转化为明确定义的方法。一种方法是使用高阶逻辑或集合论，如下所示。假设我们用 S 表示赋值和公式之间的二元关系。我们说 S 是一个满足关系，如果对于每个公式 G，S 满足塔尔斯基的定义所规定的满足条件。例如，如果 G 是'G1 and G2'，则对于每个赋值 a，S 应满足以下条件：

如果且仅如果 S(a,G1)且 S(a,G2)，则 S(a,G)。

我们可以使用递归子句和塔尔斯基递归定义中原子公式的条件来正式定义"满足关系"。现在我们通过对公式复杂性的归纳证明存在唯一的满足关系 S。（存在一些技术细微之处，但可以完成。）最后，我们定义

如果且仅如果：存在一个满足关系 S，使得 a 满足 F。

然后，证明这个满足定义在实质上是充分的，只是一个技术性的练习。实际上，首先必须写出满足公式的约定 T 的对应物，但我将这留给读者。

### 2.2 通过量词消除的真理定义

阿尔弗莱德·塔尔斯基在 1933 年的论文中保留的真理定义 - 作为论文中出现的第三个 - 实际上是一系列相关的真理定义，都是针对相同的目标语言 L 但在不同的解释下。假设 L 的量词范围是一个特定的类别，称为 A；实际上它们是二阶量词，因此实际上它们的范围是 A 的子类的集合。类别 A 在目标语言中没有明确命名，因此可以为不同的 A 值提供单独的真理定义，正如塔尔斯基所做的那样。因此，在论文的这一部分，塔尔斯基允许同一句子被赋予不同的解释；这是他的目标语言句子完全被解释的一般性要求的例外。但是塔尔斯基保持了正确的方向：他只在 A 是所有个体的类别的特殊情况下谈论“真理”。对于其他 A 值，他不谈论“真理”，而是谈论“在域 A 中的正确性”。

这些真理或正确性定义并不是从满足定义中推导出来的。实际上，它们经过了一条更不直接的路径，塔尔斯基将其描述为一种依赖于特定目标语言的“纯粹偶然”的可能性，这种可能性依赖于“特定特殊性”。为了展示其中涉及的内容，可能有必要给出比塔尔斯基更熟悉的符号更多的技术细节，以更熟悉的符号来说明。塔尔斯基将读者引用到 Thoralf Skolem 在 1919 年的一篇论文中了解技术细节。

我们可以将语言 L 视为具有谓词符号⊆和=的一阶语言。该语言被解释为描述类别 A 的子类。在这种语言中，我们可以定义：

* 'x 是空集'（即 x ⊆ 每个类）。
* 'x 是原子'（即 x 不为空，但 x 的每个子类都不等于 x 且为空）。
* 'x 有恰好 k 个成员'（其中 k 是一个有限数；即 x 中恰好有 k 个不同的原子 ⊆ x）。
* “在 A 中恰好有 k 个元素”（即存在一个类，恰好有 k 个成员，但不存在一个类，恰好有 k+1 个成员）。

现在我们的目标是证明：

引理。L 的每个公式 F 都等价于（即与以下形式的句子完全相同的赋值满足）一些形如“在 A 中恰好有 k 个元素”的句子和形如“在 v1 中有 k 个元素，不在 v2 中，不在 v3 中，且在 v4 中”的公式的布尔组合（或者使用 F 中的自由变量的任何其他此类组合）。

证明是通过对公式复杂性进行归纳的。对于原子公式，这很容易。对于公式的布尔组合，这也很容易，因为布尔组合的布尔组合仍然是布尔组合。对于以∀开头的公式，我们取否定。这只留下一个涉及任何工作的情况，即以存在量词开头的公式的情况。根据归纳假设，我们可以用所述类型的公式的布尔组合替换量词后面的部分。所以一个典型的情况可能是：

∃z（存在恰好两个元素在 z 中且在 x 中而不在 y 中）。

当且仅当至少有两个元素在 x 中而不在 y 中时，这成立。我们可以进一步将其写为：在 x 中而不在 y 中的元素数量不为 0 且不为 1；这是允许的公式的布尔组合。一般的证明非常类似，但更加复杂。

当引理被证明后，我们看一下它对一个句子的意义。由于句子没有自由变量，引理告诉我们它等价于一系列陈述的布尔组合，这些陈述说"A"有给定的有限个元素。因此，如果我们知道"A"有多少个元素，我们可以立即计算出句子是否在域"A"中是正确的。

再走一步，我们就到家了。当我们证明引理时，我们应该收集在 L 中可以陈述的、在每个域中都为真且用于证明引理的任何事实。例如，我们几乎肯定需要陈述"⊆"是传递的句子。用 T 表示所有这些句子的集合。（在塔尔斯基的表述中，T 消失了，因为他使用了高阶逻辑，关于类的所需陈述成为逻辑的定理。）因此，我们得到了以下结论：

定理。如果域 A 是无限的，则语言 L 中的句子 S 在 A 中是正确的当且仅当 S 可以从 T 和陈述 A 的元素数量不是任何有限数推导出来。

所有个体的类是无限的（塔尔斯基断言），因此当 A 是这个类时，定理适用。在这种情况下，塔尔斯基不仅说“在 A 中正确”，而且说“真实”；因此我们有了我们的真理定义。

我们所描述的方法几乎完全围绕着从公式开头消除存在量词；因此它被称为量词消除方法。它与两个标准定义之间的距离并不像你想象的那么远。在所有情况下，塔尔斯基通过对公式复杂性进行归纳，为每个公式分配满足该公式的赋值类的描述。在前两个真理定义中，这个类直接描述；在量词消除情况下，它以一种简单类型的布尔组合公式的形式描述。

在他写 1933 年的论文的同时，塔尔斯基为一阶语言中的实数域给出了一个通过量词消除的真理定义。在他 1931 年的论文中，它只是作为表征可由公式定义的关系集合的一种有趣方式出现。后来，他给出了一个更详细的解释，强调他的方法不仅提供了一个真理定义，而且提供了一个确定哪些关于实数的句子是真的，哪些是假的的算法。

## 3. 1956 年的定义及其后代

1933 年，塔尔斯基假设他所处理的形式语言有两种符号（除了标点符号），即常量和变量。常量包括逻辑常量，但也包括任何其他具有固定含义的术语。变量没有独立的含义，只是量化装置的一部分。

模型论与之相反，使用三个层次的符号。有逻辑常量（=，¬，&等），变量（与之前相同），以及在这两者之间的一组中间符号，这些符号没有固定的含义，但通过应用于特定结构来获得含义。这个中间组的符号包括语言的非逻辑常量，如关系符号、函数符号和常量个体符号。它们还包括量词符号∀和∃，因为我们需要参考结构来确定它们的范围。这种三层语言对应于数学的用法；例如，我们将阿贝尔群的加法运算写为+，这个符号在不同的群中代表不同的函数。

因此，人们必须稍微努力一下，将 1933 年的定义应用于模型论语言。基本上有两种方法：（1）一次只取一个结构 A，并将非逻辑常量视为在 A 中解释的常量。（2）将非逻辑常量视为变量，并使用 1933 年的定义来描述何时一个句子通过将结构 A 的成分分配给这些变量而满足。这两种方法都存在问题，正如塔尔斯基自己在几个地方所描述的那样。方法（1）的主要问题是，在模型论中，我们经常希望在与两个或更多不同结构相关的情况下使用相同的语言 - 例如，当我们在定义结构之间的初等嵌入时（请参阅关于一阶模型论的条目）。方法（2）的问题更抽象：谈论具有自由变量的公式“真”是具有破坏性和不良实践的。（我们在第 2.2 节中看到了塔尔斯基如何避免在与具有不同解释的句子相关的情况下谈论真理。）塔尔斯基在实践中所做的，从他的教科书于 1936 年出版到 1940 年代末，是使用（2）的一个版本，并且简单地避免谈论模型论句子在结构中是真的；相反，他间接地给出了一个结构成为一个句子的“模型”的定义，并且道歉说严格来说这是一种语言上的滥用。（塔尔斯基 1994 年的第六章仍然包含这种旧方法的遗迹。）

到了 1940 年代末，人们已经清楚需要一个直接的模型论真理定义。塔尔斯基和同事们尝试了几种方式来构建它。我们今天使用的版本是基于塔尔斯基和罗伯特·沃特在 1956 年发表的版本。请参阅关于经典逻辑的条目以了解详细说明。

模型论定义的正确方式是，我们有一些句子，它们的真值根据使用的情境而变化。因此，非逻辑常量不是变量；它们是依赖于上下文的明确描述。同样，量词也具有这种指示性特征，它们的范围取决于使用的上下文。在这种精神下，我们可以添加其他类型的索引。例如，Kripke 结构是一个带有索引集上关系的索引化结构族；这些结构及其近亲对于模态逻辑、时间逻辑和直觉主义逻辑的语义是基础的。

早在 20 世纪 50 年代，模型论家就对包含与塔尔斯基 1933 年论文中任何内容都不同的表达方式的形式语言感兴趣。将真理定义扩展到无穷逻辑上根本没有问题。当时提出的大多数广义量词也没有任何严重的问题。例如，存在一个量词 Qxy，其意义是：

当且仅当存在一个无穷元素集 X，使得对于 X 中的所有 a 和 b，有 QxyF(x,y)。

这个定义本身立即显示了真理定义中所需子句的形式应该是怎样的。

在 1961 年，利昂·亨金指出了两种模型论语言，它们不会立即具有塔尔斯基那种真理定义。第一种是具有无限量词串的：

∀v1∃v2∀v3∃v4…R(v1,v2,v3,v4,…).

第二个量词不是线性排序的。为了方便起见，我使用 Hintikka 的后期符号表示：

∀v1∃v2∀v3(∃v4/∀v1)R(v1,v2,v3,v4)。

这里的斜杠在∃v4 之后表示这个量词在之前的量词∀v1 的范围之外（也在之前的存在量词的范围之外）。

Henkin 指出，在这两种情况下，可以用 Skolem 函数给出自然语义。例如，第二个句子可以改述为

∃f∃g∀v1∀v3R(v1,f(v1),v3,g(v3))，

这在二阶逻辑中具有直接的塔尔斯基真理条件。然后，Hintikka 观察到可以将 Skolem 函数解读为游戏中的获胜策略，就像逻辑和游戏条目中所述。通过为每个公式分配一个游戏，可以建立一个组合语义。如果玩家 Myself（按照 Hintikka 的命名法）对于分配给该句子的游戏有一个获胜策略，则该句子为真。这种游戏语义与 Tarski 在常规的一阶句子上是一致的。但它远非完全抽象；可能应该将其视为操作语义，描述了如何验证句子而不是它是否为真。

给亨金的两种语言提供塔尔斯基式语义的问题在两种情况下都不同。对于第一种情况，问题在于语言的语法没有良好的基础：当我们逐个剥离量词时，存在无限下降的子公式序列。因此，无法通过对公式复杂性进行递归定义来给出满足性的定义。解决方法是注意到在上面第 2.1 节中塔尔斯基的真理定义的显式形式并不需要递归定义；它只需要满足关系 S 的条件能够唯一确定它。对于亨金的第一种语言风格，这仍然成立，尽管原因不再是语法的良好基础性。

对于亨金的第二种语言风格，至少在 Hintikka 的符号表示法中（参见独立友好逻辑的条目），语法是有良好基础的，但是量词范围的位移意味着在满足性定义中通常的量词子句不再起作用。为了得到一个组合和完全抽象的语义，我们不得不问的是变量的赋值满足一个公式的是什么，而是什么集合的赋值“统一地”满足这个公式，其中“统一地”意味着“独立于公式内部的量词上的斜杠所表示的变量的赋值”。（关于根据这些思路修订塔尔斯基的真理定义的更多细节，请参见依赖逻辑的条目。）亨金的第二个例子不仅具有理论意义，因为在自然语言中，语义范围和句法范围的量词之间的冲突经常发生。

<!--md-padding-ignore-begin-->
## Bibliography

* Feferman, S., 2004, “Tarski’s conceptual analysis of semantical notions”, in *Sémantique et Épistémologie*, ed. Ali Benmakhlouf, Casablanca: Editions Le Fennec, 79–108; reprinted in Patterson 2008.
* Henkin, L., 1961, “Some remarks on infinitely long formulas”, in *Infinitistic methods: Proceedings of the symposium on foundations of mathematics*, Oxford: Pergamon Press, 167–183.
* Hintikka, J., 1996, *The Principles of Mathematics Revisited*, Cambridge: Cambridge University Press.
* Hodges, W., 1997, “Compositional semantics for a language of imperfect information”, *Logic Journal of the IGPL*, 5: 539–563.
* –––, 2008, “Tarski’s theory of definition”, in Patterson 2008, pp. 94–132.
* Katz, J. and Fodor, J., 1963, “The structure of a semantic theory”, *Language*, 39: 170–210.
* Levy, A., 1965, *A hierarchy of formulas in set theory*, (Memoirs of American Mathematical Society 57), Providence: American Mathematical Society.
* Patterson, D. (ed.), 2008, *New Essays on Tarski and Philosophy*, Oxford: Oxford University Press.
* Putnam, H., 1975, “Do true assertions correspond to reality?”, in *Mind, Language and Reality* (Philosophical Papers: Volume 2), Cambridge: Cambridge University Press, 70–84.
* Skolem, T., 1919, “Untersuchungen über die Axiome des Klassenkalküls und über Produktations- und Summationsprobleme, welche gewisse Klassen von Aussagen betreffen”, *Videnskapsselskapets Skrifter, I. Matem.-naturv. klasse*, 3; reprinted in T. Skolem, *Selected Works in Logic*, J. E. Fenstad (ed.), Oslo: Universitetforlaget, pp. 67–101.
* Tarski, A., 1931, “Sur les ensembles définissables de nombres réels. I”, *Fundamenta Mathematicae*, 17: 210–239.
* –––, 1933, “The concept of truth in the languages of the deductive sciences” (Polish), *Prace Towarzystwa Naukowego Warszawskiego, Wydzial III Nauk Matematyczno-Fizycznych* 34, Warsaw; reprinted in Zygmunt 1995, pp. 13–172; expanded English translation in Tarski 1983 [1956], pp. 152–278.
* –––, 1944, “The semantic conception of truth”, *Philosophy and Phenomenological Research*, 4 (3): 341–376.
* –––, 1983 [1956], *Logic, Semantics, Metamathematics*: *Papers from 1923 to 1938*, 2nd edition, John Corcoran (ed.), Indianapolis: Hackett Publishing Company; 1st edition, Oxford: Oxford University Press, 1956.
* –––, 1994 [1936], *Introduction to Logic and to the Methodology of the Deductive Sciences*, 4th edition, Jan Tarski (ed.), Oxford: Oxford University Press; originally published as *O logice matematycznej i metodzie dedukcyjnej* (On Mathematical Logic and the Deductive Method), Lwów, Warsaw: Książnica-Atlas, 1936; German translation, *Einführung in die mathematische Logik und in die Methodologie der Mathematik*, Vienna: Julius Springer-Verlag; first English edition, Oxford: Oxford University Press, 1941; 2nd edition, 1946; 3rd edition, 1985.
* Tarski, A. and Vaught, R., 1956, “Arithmetical extensions of relational systems”, *Compositio Mathematica*, 13: 81–102.
* Woleński, J., 2019, *Semantics and Truth*, Cham: Springer.
* Zygmunt, J. (ed.), 1995, *Alfred Tarski, Pisma Logiczno-Filozoficzne, 1 Prawda*, Warsaw: Wydawnictwo Naukowe PWN.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=tarski-truth). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/tarski-truth/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=tarski-truth&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/tarski-truth/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[compositionality](https://plato.stanford.edu/entries/compositionality/) | [logic: and games](https://plato.stanford.edu/entries/logic-games/) | [logic: dependence](https://plato.stanford.edu/entries/logic-dependence/) | [logic: independence friendly](https://plato.stanford.edu/entries/logic-if/) | [logic: infinitary](https://plato.stanford.edu/entries/logic-infinitary/) | [logic: intuitionistic](https://plato.stanford.edu/entries/logic-intuitionistic/) | [logic: second-order and higher-order](https://plato.stanford.edu/entries/logic-higher-order/) | [logic: temporal](https://plato.stanford.edu/entries/logic-temporal/) | [meaning, theories of](https://plato.stanford.edu/entries/meaning/) | [model theory](https://plato.stanford.edu/entries/model-theory/) | [model theory: first-order](https://plato.stanford.edu/entries/modeltheory-fo/) | [Tarski, Alfred](https://plato.stanford.edu/entries/tarski/) | [truth](https://plato.stanford.edu/entries/truth/) | [truth: axiomatic theories of](https://plato.stanford.edu/entries/truth-axiomatic/) | [truth: deflationism about](https://plato.stanford.edu/entries/truth-deflationary/) | [truth: revision theory of](https://plato.stanford.edu/entries/truth-revision/)

[Copyright © 2022](https://plato.stanford.edu/info.html#c) by  
[Wilfrid Hodges](http://wilfridhodges.co.uk/) <[*wilfrid.hodges@btinternet.com*](mailto:wilfrid%2ehodges%40btinternet%2ecom)>
