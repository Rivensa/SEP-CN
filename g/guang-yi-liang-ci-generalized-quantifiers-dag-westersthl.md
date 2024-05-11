# 广义量词 generalized quantifiers (Dag Westerståhl)

*首次发表于 2005 年 12 月 5 日星期一；实质性修订于 2019 年 7 月 26 日星期五*

广义量词现在已成为逻辑学家和语言学家工具箱中的标准装备。本条目的目的是描述这些工具：它们的来源，工作原理以及可以用来做什么。由于篇幅的限制，描述是粗略的，但在文献中存在几份更全面的调查报告，在适当时将进行引用。要充分理解下文，基本的集合论术语和一阶逻辑语言的基本知识将会有所帮助。

---

## 1. 准备工作

“广义量词”这个术语反映了这些实体是作为现代逻辑的标准量词∀和∃的概括而引入的。回顾过去，人们可以说∀和∃被发现只是量词的一个更普遍概念的两个实例，使得“广义”的术语变得多余。今天，通常也常常使用“量词”来表示这个一般概念，但出于历史原因，“广义量词”仍然经常出现。本文使用这两个术语，倾向于在逻辑上下文中插入“广义”，在语言学上下文中则省略。

我们区分量词表达式和它们所表示或指示的（广义）量词本身。在逻辑语言中，量词表达式是变量绑定运算符。因此，∃是一个熟悉的运算符，这样在一个公式∃xφ中，∃x 绑定φ中 x 的所有自由出现。它表示量词“存在”——我们很快就会看到这个对象究竟是什么。同样，符号 Q0 经常被用作一个变量绑定运算符，表示“存在无限多”。

在自然语言中，各种表达被视为量词表达，例如以下英语表达中的每一个：

一切，没有什么，三本书，十位教授，约翰，约翰和玛丽，只有约翰，消防员，每个，至少五个，大多数，除了十个之外的所有，不到一半的，约翰的，一些学生的，没有...除了玛丽，男性比女性多，通常，从不，彼此。[3]

那么，广义量词是什么？在回答这个问题之前，简要的历史前奏是有帮助的。

## 2. 亚里士多德

亚里士多德的三段论可以被看作是对广义量词表达式“所有(all)”，“没有(no)”，“一些(some)”，“不是所有(not all)”及其属性的形式化研究。例如，根据亚里士多德，三段论的有效性

 广义量词(A,B)广义量词(B,C)

---

 一些(A，C)

显示他考虑，在与现代逻辑用法相比，一切对广义量词都有存在性含义，因此，所有的 A 都是 B 意味着 A 不是一个空术语。 同样，三段论的有效性

 一些(A，B)所有(B，C)

---

 所有(A,C)

表达了在第二个参数中有一些是单调递增的（正如我们现在所说的）。每个有效的三段论形式化了这些量词表达式的一部分含义，但亚里士多德对其性质的研究超出了三段论学说。例如，他观察到，一些和无都是可转换的，或者我们现在可能会说对称，因为它们满足以下模式

 广义量词(A,B)

---

Q(B,A)

与所有和非所有形成对比。此外，他研究了各种否定形式如何与量词表达式结合在一起（后来被称为）对立方中。[4] 中世纪逻辑学家延续了亚里士多德的传统，但也将三段论推理扩展到 A、B 本身可以是量化表达式的情况，从而处理像“每个人的一些驴不跑”这样的前提和结论（约翰·布里丹，14 世纪的例子）。尽管亚里士多德逻辑在表达能力和精确性上有所不足，但三段论无疑对量化研究做出了重要贡献。事实上，由于它们与自然推理的亲和性和简单的计算特性，最近在数理逻辑中研究了各种表达能力的三段论系统；请参见下面的第 18 节。

特别有趣的是，在当前背景下，这些量词表达式需要两个参数或术语，因此可以被视为二元关系，从句法上（正如亚里士多德无疑看到的那样）和语义上：鉴于术语表示个体的集合，表达式“一些”可以被视为表示两个集合之间的重叠关系，即具有非空交集，而“所有”表示包含关系。请注意，这些不是个体之间的关系，而是个体集合之间的关系—二阶关系。事实上，它们确切地是广义量词“一些”和“所有”（在给定的宇宙中）。

这一思路——即关于广义量词表达式表示二阶关系的思路——据我们所知，没有被亚里士多德的中世纪追随者中的任何人掌握到。相反，他们注意到这两个术语具有不同的地位：第一个与广义量词表达式结合形成一个名词短语（正如我们现在说的那样），这是句子的主语，而第二个是构成谓语的动词短语。这使他们专注于主语——所有人，某些狗，没有水手——所表示的概念，在概念上似乎是一个更难的问题。你可能推测所有人表示每个人（或人的集合），某些狗表示某只特定的狗，但没有水手呢？实际上，可以证明这样的方法注定失败。现代的“解决方案”是，名词短语表示个体的集合，因此，例如某些狗表示至少包含一只狗的集合，但这似乎需要对语义进行更抽象和数学化的处理，而不是亚里士多德至少含蓄地认为的，广义量词短语表示术语（指称物）之间的关系。

## 弗雷格

对于广义量词理论的第二大历史性贡献来自于现代逻辑的“发明者”戈特洛布·弗雷格，于 19 世纪 70 年代。事实上，弗雷格的贡献是双重的。众所周知，他引入了带有句连词、同一性以及变量捆绑运算符∀的谓词逻辑语言（尽管他的二维逻辑符号已不再使用）。这些就是逻辑学家在 20 世纪 50 年代开始“概括”的量词。但是弗雷格还明确地将量词的抽象概念形式化为二阶关系，或者称之为第二级概念。他深知亚里士多德的四个量词是主要例子，但他希望避免关注主谓形式，这在他看来是亚里士多德之后逻辑发展的一大障碍。因此，重要的发现是这些量词都可以用∀和句子运算符（将所有(A，B)替换为∀x(A(x)→B(x))，一些(A，B)替换为¬∀x(A(x)→¬B(x))等）来定义。

事实上，弗雷格的二阶概念与现代广义量词的唯一显著区别在于，弗雷格没有解释或模型的概念，而现在（自 1950 年代模型论的出现以来）我们将其视为量词所涵盖的宇宙，以及将适当的语义对象分配给非逻辑符号。弗雷格的符号都有固定的含义，他考虑的唯一宇宙是一切的总体。但除此之外，可以说是弗雷格发现了广义量词。然而，弗雷格逻辑的这一方面长期以来一直处于背景中，50 年代和 60 年代的模型理论家似乎并不知道这一点。

## 4. 广义化全称量词和存在量词

现代谓词逻辑通过真值定义中的相应子句来确定∀和∃的含义，该定义归纳地规定了在模型 M=(M,I)（其中 M 是宇宙，I 是将适当的扩展分配给非逻辑符号的解释函数）中元素 a1,…,an 满足公式φ(x1,…,xn)（至多 x1,…,xn 自由）的条件：M⊨φ(a1,…,an)。这些子句为（通常“当且仅当”代表“if and only if”）

* (1)M⊨∀xψ(x,a1,…,an) 当且仅当对于每个 a∈M，M⊨ψ(a,a1,…,an)
* (2)M⊨∃xψ(x,a1,…,an) 当且仅当存在某个 a∈M 使得 M⊨ψ(a,a1,…,an)

引入其他广义量词时，需要了解∀和∃是什么类型的表达式。从语法上讲，它们是在一个公式中绑定一个变量的运算符。为了了解它们的语义如何工作，有必要略微重写(1)和(2)。首先，对于具有一个自由变量的每个公式ψ(x)，在模型 M 中表示 M 中满足ψ(x)的个体的子集。更一般地说，如果ψ(x,x1,…,xn)=ψ(x,ˉx) 最多具有所示的自由变量和 ˉa=a1,…,an 是 M 的元素，则让

ψ(x,ˉa)M,x={a∈M:M⊨ψ(a,ˉa)}

是相对于 a1,...,an 在 M 中的ψ(x,ˉx)的扩展。然后我们可以重新表述(1)和(2)如下：

* (3)M⊨∀xψ(x,ˉa) 当且仅当 ψ(x,ˉa)M,x=M
* (4)M⊨∃xψ(x,ˉa) 当且仅当 ψ(x,ˉa)M,x≠∅

因此，右侧的条件会作为集合 ψ(x,ˉa) 的属性出现。实际上，我们可以将 ∀ 和 ∃ 视为表示这些属性，即，分别表示与宇宙相同和非空的属性。现在很容易想到其他集合属性，也可以被视为广义量词，例如，至少包含 5 个或者恰好 3 个元素的属性，或者是无限的属性。

请注意，这些属性仅取决于宇宙 M，而不取决于模型的其余部分。从 Mostowski (1957) 的基本上来看，它们只是 M 的子集的集合。这导致了以下定义。

**定义 1**

一个类型为⟨1⟩的广义量词 Q 是

* (5) 从句法上讲，是一个变量绑定运算符，每当φ是一个公式时，Qxφ也是一个公式，并且 Qx 绑定φ中的所有自由出现的 x；
* b.在语义上，从任意宇宙（非空集合）M 到一个子集 QM 的集合的映射，它解释了形式为 Qxφ的公式，根据子句 M⊨Qxψ(x,ˉa)当且仅当ψ(x,ˉa)M,x∈QM。

在这里，我们使用相同的符号表示量词表达式和它所表示或指示的映射。因此，∀现在被视为表示全称量词的符号，也写作∀，它是由给定的映射

∀M={M}

对于所有的 M。类似地，∃表示由定义的映射

∃M={A⊆M:A≠∅}

这里还有一些其他的广义量词：

(∃≥5)M={A⊆M:|A|≥5}(|X| is the size orcardinality of X)(∃=3)M={A⊆M:|A|=3}(广义量词 0)M={A⊆M:A is infinite}(广义量词 R)M={A⊆M:|A|>|M−A|} (the “Rescherquantifier”)(广义量词 even)M={A⊆M:|A| is even}

现在我们对广义量词有了一个明确的概念，其中∀和∃是其中的实例，还有无数其他的实例。此外，我们看到如何将一阶逻辑 FO 扩展到逻辑 FO(Q)，方法是通过在形成规则中添加条款(5a)，并在真值定义中添加条款(5b-i)。同样，如果添加多个广义量词：FO(Q1,…,Qn)。

在这样的逻辑中，人们可能会说一些在 FO 中无法表达的事情。例如，众所周知，在 FO 中无法表达有限性的概念。因此，无法说出关于一个序关系<的每个元素只有有限多个前驱的情况，例如。但这正是我们可以在 FO(Q0)中表达的事情：

∀x¬Q0y(y<x)

同样，在 FO 中不能说一个（有限的）集合 A 包含宇宙 M 的元素的一半，但在 FO(广义量词)中是可以表达的：

¬QRxA(x)∧¬QRx¬A(x)

(第一个连词表示|A|≤|M−A|，第二个表示|M−A|≤|A|。)

## 5. 广义量词的任意类型

进一步的泛化是可能的。首先，我们可以让 Q 绑定两个或更多个公式中的一个变量。其次，我们可以让它同时绑定两个或更多个变量在（其中的一些）这些公式中。Q 的类型指示了这一点：如果它应用于 k 个公式，则 Q 的类型为 ⟨n1,…,nk⟩（其中每个 ni 是一个大于等于 1 的自然数），并且在第 i 个公式中绑定 ni 个变量。这解释了为什么前一节中的量词被称为 ⟨1⟩ 类型。

一般情况下，人们通常选择不同的变量 xi1,…,xini=ˉxi，使得以 Q 开头的公式具有以下形式

Qˉx1,…,ˉxk(φ1,…,φk)

在φi 中的所有自由出现的 xi1,…,xini 会被限制。现在，Q 会为每个宇宙 M 关联一个关系 QM，该关系是 M 上关系的 k 元关系，其中第 i 个参数是个体间的 ni 元关系。在真值定义中，对应的子句如下

M⊨Qˉx1,…,ˉxk(ψ1(ˉx1,ˉa),…,ψk(ˉxk,ˉa)) 当且仅当 QM(ψ1(ˉx1,ˉa)M,ˉx1,…,ψk(ˉxk,ˉa)M,ˉxk)

这里 ψi(ˉxi,ˉy) 是一个具有所示自由变量最多的公式，ˉa 是与ˉy 对应的 M 中元素序列，而 ψi(ˉxi,ˉa)M,ˉxi 是相对于ˉa 在 M 中的ψi(ˉxi,ˉy)的扩展，即满足 M⊨ψi(ˉbi,ˉa)的 ni-元组ˉbi 的集合。

这是本文中广义量词的官方概念。它由林德斯特伦（1966）引入，这些量词有时被称为“林德斯特伦量词”。如果我们将 M 固定为包含“一切”的宇宙，我们基本上就有了弗雷格关于二级概念的概念。

如果在每个宇宙 M 上，Q 是一种 M 的子集之间的关系，则 Q 是单调的，即，如果其类型是⟨1,…,1⟩；否则它是多调的。例如，前面提到的亚里士多德量词的类型是⟨1,1⟩：[9]

allM(A,B)⟺A⊆BsomeM(A,B)⟺A∩B≠∅noM(A,B)⟺A∩B=∅not allM(A,B)⟺A⊈B

这里有一些更多的类型⟨1,1⟩的广义量词：[10]

(至少五个)广义量词 M(A,B)⟺|A∩B|≥5(恰好三个)广义量词 M(A,B)⟺|A∩B|=3(无限多个)广义量词 M(A,B)⟺A∩B 是无限的 mostM(A,B)⟺|A∩B|>|A−B|(偶数个)广义量词 M(A,B)⟺|A∩B| 是偶数 MOM(A,B)⟺|A|>B|IM(A,B)⟺|A|=|B|（“Härtig 量词”）

使用单变量来方便地处理单调量词，并让 Q 在每个公式中绑定相同的变量。因此，例如，要说大多数 A 不是 B，可以写成

mostx(A(x),¬B(x))

在相应的逻辑语言中，而不是广义量词 x,y(A(x),¬B(y))。

以下是一些多义词量词：

WM(R)⟺R 是 M 的一个良序 M 类型集合⟨2⟩(Qn0)M(R)⟺存在一个无限 A⊆M 使得 An⊆R 类型⟨n⟩Resk(most)M(R,S)⟺|R∩S|>|R−S|类型⟨k,k⟩RECIPM(A,R)⟺对于所有不同的 a,b∈A，存在 n≥1 和 c0,…,cn 满足 c0=a 且 cn=b 而对于所有 i<nciRci+1 类型⟨1,2⟩

W 和 Qn0 源自逻辑和集合论。Resk(最)是将 most 推广到 k-元组的继续。继续可以应用于任何广义量词（在语法中，这意味着用相应的 k-元组变量替换每个单个变量）；它具有逻辑用途，但也像 RECIP 一样，在解释自然语言中某些句子时使用；请参见下面的第 16 节。

## 6. 主题中立性

Mostowski 和 Lindström 在他们对广义量词的定义中都有一个额外条件：它们不应区分同构模型。非正式地说，它们是“主题中立的”：在模型 M 中形式为φ=Qx,yz(A(x),R(y,z))的陈述的真值不取决于 M 由哪些特定个体组成。如果 M 的个体以一对一的方式映射到另一个宇宙 M'的个体，并且相应地映射 A 和 R，则会得到一个同构模型 M'。同构闭包则表示 M⊨φ当且仅当 M'⊨φ。

更正式地，如果 M=(M,I)和 M′=(M′,I′)是相同词汇 V 的模型，其中包含非逻辑符号，f 是从 M 到 M′的同构，当且仅当

* f 是从 M 到 M′的双射（一对一到函数）；
* 每当 P 是 V 中的 n 元谓词符号，a1,…,an∈M 时，(a1,…,an)∈I(P)当且仅当(f(a1),…,f(an))∈I′(P)；
* 每当 c 是 V 中的一个个体常量时，I′(c)=f(I(c))。

如果 M 和 M′同构，则用符号表示为，

M≅M′

如果存在一个从一个到另一个的同构。现在，如果 Q 是一个类型为⟨n1,…,nk⟩的广义量词，Pi 是一个 ni 元谓词符号，其中 1≤i≤k，而 M=(M, I)是一个针对词汇表{P1,…,Pk}的模型，并且 Ri=I(Pi)，我们会写作

 M=(M, R1,…, Rk)

若 Q 满足同构闭包，或简称 Isom，则以下情况成立：

如果 (M,R1,…,Rk)≅(M′,R′1,…,R′k)，那么 QM(R1,…,Rk)⇔QM′(R′1,…,R′k)。

人们很容易检查到，到目前为止所举的所有广义量词确实都是 Isom。然而，在广义量词的定义中我们并没有包括这一要求，因为自然语言中存在一些不满足这一要求的量词；见下文。但逻辑应该是中性的，所以几乎总是要求 Isom。接着就有两个重要的结论。首先，如上所述，逻辑语言中的句子不区分同构模型。更确切地说，我们有以下事实

**事实 2**

如果 L=FO(Q1,…,Qn)，每个 Qi 都是 Isom，φ是一个 L-sentence，并且 M≅M′，那么 M⊨φ⇔M′⊨φ。

其次，对于单调量词，Isom 采用了一种特别有趣的形式。如果 M=(M,A1,…,Ak)，其中对于每个 i，Ai⊆M，那么 A1,…,Ak 将 M 分成 2k 个两两不相交的子集（其中一些可能为空）；让我们称它们为 M 的部分。我们以 k=2 和 M=(M,A,B)为例进行说明：

![two intersecting circles inside a box the box labeled 'M' with 'A intersecting B' labeling the circle intersection and 'A minus B' and 'B minus A' labeling the nonintersecting parts of the circles The area inside the box but not in the circles is labeled 'M minus A union B'](https://plato.stanford.edu/entries/generalized-quantifiers/fig1.svg)

 图 1

现在很容易看出，只有部分的大小决定了这种模型是否同构：

**广义量词 3**

当且仅当相应部分的基数相同时，(M,A1,…,Ak)≅(M′,A′1,…,A′k)。

这表明单调和同构广义量词确实只处理数量，即集合大小而非集合本身。类型⟨1,1⟩广义量词的列表（11）清楚地阐明了这一点，但亚里士多德量词也可以用基数来表述，

对于所有 M(A,B)，⟺|A−B|=0 对于一些 M(A,B)，⟺|A∩B|>0

等等，对于我们给出的类型⟨1⟩示例也是类似的。

更一般地，在 Isom 下，单调广义量词可以被看作是（基数）数字之间的关系。例如，如果 Q 是类型⟨1⟩的，则定义（使用相同符号 Q 表示数字之间的关系）

Q(κ,λ)⟺存在(M,A)使得|M−A|=κ&|A|=λ&QM(A)

Isom 保证这是良定的，我们有

 广义量词(QM(A))⟺广义量词(Q(|M−A|,|A|))

## 7. 相对化

涉及广义量词 Q 的每个语句都发生在某个宇宙 M 中。有时，能够将这种相对性映射到 M 中的一个宇宙是很有用的。这意味着定义一个具有额外集合参数的新量词，该参数表明 Q 在限制到该参数的宇宙上的行为与其在 M 上的行为完全相同。因此，如果 Q 的类型是 ⟨n1,…,nk⟩，我们定义类型为 ⟨1,n1,…,nk⟩ 的 Qrel 如下：

(Qrel)M(A,R1,…,Rnk)⟺defQA(R1↾A,…,Rnk↾A)

其中 Ri⊆Mni，而 Ri↾A 是 Ri 对 A 的限制，即 Ri∩Ani 中的 ni 元组集合。

事实上，我们已经看到了几个相对化的例子：因为很容易验证（见列表（6）和（11）），

all=∀relsome=∃relat least five=(∃≥5)relexactly three=(∃=3)relinfinitely many=(Qo)relmost=(QR)relan even number of=(Qeven)rel

## 8. 表达能力

我们描述了如何将广义量词添加到 FO 中，从而产生更具表现力的逻辑。在这种意义上，逻辑大致由一组句子、一类模型以及句子和模型之间的真实关系（或满足关系）组成。这样的逻辑通常被称为模型论逻辑，因为它们在语义上是通过模型和真实性来定义的，而不是通过推导系统来定义的。[ 11] 在这里，我们将注意力限制在形式为 FO(Q1,Q2,…)的逻辑上，该逻辑通过将广义量词添加到 FO 中形成，其中每个量词都有一个形成规则和一个语义条款，用于在上述第 5 节中描述的真实定义。

有一种明显的方法来比较模型论逻辑的表达能力。L2 至少和 L1 一样具有表达能力，用符号表示，

L1≤L2

如果每个 L1 句子φ在逻辑上等价于某个 L2 句子ψ，即φ和ψ在相同的模型中为真。此外，如果 L1≤L2 且 L2≤L1，且 L1 和 L2 具有相同的表达能力，则 L1≡L2，如果 L1≤L2 但 L2≰L1，则 L2 比 L1 更强。因此，如果 L1 中可以说的一切也可以在 L2 中说，但是有一些 L2 句子不等价于 L1 中的任何句子，则 L1<L2。

如何确定表达能力的事实？似乎要显示 L1≤L2，就必须遍历 L1 中无限多的句子，并为每个句子找到 L2 中的等价句子。但在实践中，只需证明 L1 中的广义量词在 L2 中是可定义的。例如，如果 Q 是 ⟨1,2⟩ 类型的，那么只要存在一个 L2-句子 ψ，其非逻辑词汇恰好包括一个一元谓词符号和一个二元谓词符号，使得对于所有模型 M=(M,A,R)，都有 QM(A,R)⟺(M,A,R)⊨ψ。

 类似地，对于其他类型也是如此。例如，量词 all 在 FO 中是可定义的，因为以下结论成立：

Similarly for other types. For example, the quantifier *all* is definable in *FO*, since the following holds:

allM(A,B)⟺(M,A,B)⊨∀x(A(x)→B(x))

同样地，QR 在 FO(大多数)中是可定义的，因为

(QR)M(A)⟺(M,A,B)⊨大多数 x(x=x,A(x))

(注意，我们所有的逻辑都包含 FO 的逻辑装置，因此它们都是 FO 的扩展）。后者是以下观察的一个实例：

* （16）对于任何广义量词 Q，Q 在 FO(Qrel)中是可定义的。

这些关于可定义性的事实可能很容易或很难确定，[12] 但它们足以确定关于表达能力的积极事实，因为我们有：

**事实 4**

若且仅若每个 Qi 在 L 中可定义，FO(Q1,…,Qn)≤L。

另一方面，要证明不可表达性，即某些句子不等价于任何 L-句子，更难。有时有效的一种方法是证明 L1 具有 L2 缺乏的某些属性；然后可以得出结论 L1≰L2。对于 FO 具有的一些典型属性，但对大多数更强的逻辑来说是失败的一些属性有：

* 广义量词 Löwenheim 属性：如果一个句子在某个无限模型中为真，则它也在某个可数模型中为真。
* 广义量词 Tarski 属性：如果一个句子在某个可数无限模型中为真，则它也在某个不可数模型中为真。
* 广义量词紧致性属性：如果没有模型使得Φ句子集合的每个元素为真，则存在Φ的有限子集Ψ，使得没有模型使得Ψ中的每个句子为真。
* 完备性质：有效句子集是递归可枚举的（即可以由某个形式系统生成）。

例如，FO(Q0)没有紧致性质。[13] 这可以通过观察句子集来看出

Φ={¬Q0x(x=x)∪{θn:n=1,2,…}

其中θn 是一个 FO 句子，表明宇宙中至少有 n 个元素。如果你取Φ的任何有限子集Φ'，并且 M 是一个基数为最大 n 的宇宙，使得θn 属于Φ'，那么Φ'中的所有句子在 M 中都是真的。但是没有一个宇宙可以使Φ中的所有句子都成立。这表明 Q0 在 FO 中是不可定义的，即 FO(Q0)≰FO，否则我们可以用等价的 FO 句子集替换Φ，但是 FO 确实具有紧致性质，因此这是不可能的。

然而，这种证明不可表达性的方法只适用于具有上述属性的逻辑。此外，它们只在允许无限宇宙的情况下才有效，但是有趣的不可表达性事实也适用于有限模型，例如，QR 和 Qeven 在 FO 中是不可定义的，或者大多数=(QR)rel 在 FO(QR)中是不可定义的。逻辑学家已经发展出了更直接和高效的方法来展示适用于有限模型的不可定义性结果。

事实上，上述属性实际上表征了 FO，即 FO 的任何适当扩展都不能具有（某些组合的）这些属性。这是一个关于模型论逻辑的著名定理，Lindström 定理的内容，下面给出了一个版本。关于一个易于理解的证明，请参见，例如，Ebbinghaus，Flum 和 Thomas（1994）。我们说逻辑 L=FO(Q1,…,Qn)相对化，如果“(16)”的逆命题对每个 Qi 都成立，即如果每个(Qi)rel 在 L 中是可定义的。

定理 5（林德斯特罗姆）如果 L 是紧致的并且具有 Löwenheim 属性，则 L≡FO。此外，只要 L 相对化，如果 L 是完备的并且具有 Löwenheim 属性，或者如果 L 既具有 Löwenheim 属性又具有 Tarski 属性，则 L≡FO。

## 9. 广义量词和计算

除了与广义量词相关的真值条件之外，人们还可以研究在模型中建立量化语句的真值所需的计算。事实上，广义量词出现在计算复杂性研究的计算机科学部分的各个地方。在这种情况下，我们将注意力限制在有限宇宙上，并假定 Isom 始终成立。因此，量词本质上是一组有限模型；通过 Isom，我们可以假设基数为 m 的所有模型都具有相同的域 M={1,…,m}。这些模型可以编码为单词，即符号的有限字符串。例如，类型为⟨1⟩的模型（M，A）可以看作是一个二进制单词 a1…am，其中如果 i∈A，则 ai 为 1，否则为 0。因此|A|是 1 的数量，|M−A|是 0 的数量；通过 Isom，字符串中的顺序并不重要。因此，Q 成为单词集 WQ，即形式语言：所有编码符号的有限字符串的子集。[15]

现在我们可以问，识别一个词属于 WQ 需要什么条件。自动机的抽象概念给出了答案；自动机是接受或拒绝词的机器，并且它们根据执行的操作的复杂性进行分类。自动机识别的语言是它接受的词的集合。[16]

有限自动机有有限数量的状态，包括一个起始状态和至少一个接受状态。它从起始状态的最左边的符号开始扫描一个词，每一步都向右移动一个符号，并根据给定的转移函数进入一个（可能）新的状态。如果它可以沿着整个词移动并以一个接受状态结束，那么这个词就被接受了。自动机理论应用于广义量词是在 van Benthem（1986）（第 7 章，“语义自动机”）中开始的。很容易构造一个识别∀（或∀rel= all）的有限自动机，即检查 w 是否只由 1 组成：只要遇到 1，就保持在起始状态=接受状态，但一旦扫描到 0，就转到一个拒绝状态，并且无论之后遇到什么都保持在那里。稍微复杂一点的自动机识别 Qeven：同样有两个状态，一个起始状态=接受状态和一个拒绝状态，这次当扫描到 0 时保持在相同状态，但当扫描到 1 时转到另一个状态。要以接受状态结束，就必要且充分地需要有偶数个 1。这台机器基本上使用了长度为 2 的循环，而第一个例子只有 1-循环。称后一种自动机为非循环的。Van Benthem 表明，FO 可定义的量词正是由非循环且置换封闭的有限自动机接受的量词。[17]

更复杂一点的自动机，下推自动机，在形式上具有可以从顶部推入或弹出的符号堆栈的基本内存资源，使其在某种程度上能够追踪较早步骤的情况。Van Benthem 的另一个结果是，下推自动机接受的⟨1⟩量词恰好是那些对应的数字之间的二元关系在加法算术中可定义（用一阶手段），即在模型（N,+）中，其中 N={0,1,2,…}。一个例子是 QR（或其相对化 most）：我们有 QR(m,n)⇔m<n，右边可以在（N,+）中用∃x(x≠0∧m+x=n)来定义。[18]

因此，算法特征与逻辑特征相匹配。这是算法复杂性研究中一个突出的方向。现在考虑最一般的抽象自动机或计算设备，即图灵机。一个（许多中的一个）有趣的复杂性类是 PTIME：一个问题，用其对应的词集来识别，如果存在一个多项式 p(x)和一个图灵机接受 W，使得每当 w∈W 的长度为 n 时，接受计算最多需要 p(n)步。PTIME 问题通常被认为是“可处理的”，而更复杂的问题是“难处理的”，比如 EXPTIME 问题，其中所需的步骤数量可能呈指数增长。Immerman 和 Vardi 的一个早期结果是，（编码）有限模型的 PTIME 集合恰好可以由 FO(LFP)中的单句描述。这里我们需要表示的不仅仅是单模型，还有任意模型。例如，对于宇宙{1,…,m}上的二元关系可以用一个词 w11⋯w1m#…#wm1⋯wmm 来表示，其中关系对(i,j)成立当且仅当 wij=1。但这次顺序似乎很重要，事实上，刚才提到的 Immerman 和 Vardi 的结果仅适用于具有给定线性顺序和表示该顺序的二元谓词符号的模型。

像 FO(LFP)这样的逻辑可以重新构造为 FO(Q1,Q2,…)形式的逻辑。在某些情况下可能需要无限多的量词，但有时一个量词就足够了。至于 FO(LFP)，只需添加单个量词的所有恢复（参见上面第 5 节的结尾）。更一般地，让 FO∗(Q1,Q2,…)类似于 FO(Q1,Q2,…)但具有相对化（第 7 节）和为每个 k 恢复每个 Qi 到 k 元组的机制。然后存在一个单个量词 Q，使得 FO(LFP)=FO∗(Q)。

因此，广义量词仍然是向 FO 添加表达能力的一种简单而多才的方式。一个自然的问题是，上面提到的 PTIME 的逻辑特征是否可以通过使用广义量词来改进，特别是是否可以通过这种方式消除对有序结构的限制。然而，答案是否定的，因为 Hella（1989）证明了任意有限结构的 PTIME 可计算属性不能通过向 FO 甚至 FO(LFP)添加有限数量的广义量词来描述。然而，关于 PTIME 是否可以由 FO∗(Q)形式的逻辑来描述的问题仍然是开放的（实际上，解决这个问题将是复杂性理论的一个重大突破）。

## 10. 广义量词和自然语言

在 20 世纪 60 年代末，理查德·蒙塔古（Richard Montague）展示了如何用逻辑工具处理自然语言的重要部分的语义。[20] 他的主要洞察之一是，名词短语（NP）可以被解释为域的子集的集合，即（我们现在称之为）类型⟨1⟩的量词。蒙塔古在类型理论中工作，但大约在 1980 年，一些语言学家和逻辑学家开始将带有广义量词的逻辑的模型论框架应用于自然语言语义。[21] 考虑一个主语是量化 NP 的简单英语句子的结构：[22]

* (17)![Linguistics tree S NP Det most N students VP smoke](https://plato.stanford.edu/entries/generalized-quantifiers/ex17.svg)

（主语）NP 由限定词和名词（N）组成。名词和动词短语（VP）都有集合作为扩展，因此限定词自然地被视为表示集合之间的二元关系，即类型⟨1,1⟩的量词。对（17）的表述在背景中有一个（话语）宇宙（比如说，特定大学的人群），但 most、every、at least five 和类似表达的含义并不与特定的宇宙相关联。例如，all 的含义

* (18)a.所有猫都喜欢牛奶。
* b.所有电子都带负电荷。
* c.所有自然数都有一个后继数。
* 广义量词所有双胞胎彼此喜欢对方。
* 广义量词豪斯多夫空间的所有紧致子集都是闭合的。

与猫、电子、数字、双胞胎或豪斯多夫空间无关，也与可能与上述例子相关联的话语宇宙无关。它只代表包含关系，不管我们谈论的是什么。因此，广义量词所有，它与每个宇宙 M 关联的是 M 上的包含关系，非常适合解释所有，其他限定词也同理。

但是，(17)式的句子具有一个特点，即名词论元和 VP 论元并不相等。名词与冠词结合形成 NP，一个独立的成分，这个成分也可以被视为一个广义量词，这次是类型⟨1⟩的。因此，至少五个学生表示包含至少五个学生的宇宙子集的集合。这个量词是通过将类型⟨1,1⟩的第一个论元冻结为学生集合得到的；我们将其写为 threestudent。一般来说，如果 A 是一个固定集合，Q 是一个类型⟨1,1⟩的量词，可以通过以下方式定义类型⟨1⟩的量词 QA：

(QA)M(B)⟺defQM∪A(A,B)

对于任何 M 和任何 B⊆M。在组合语义中，自然地将句子的每个成分具有单独的意义，名词短语的默认意义是类型⟨1⟩的量词。

这也适用于一些缺乏限定词的 NP，比如专有名词。虽然词汇项 John 被解释为某个个体，NP John 可以被视为表示广义量词 Ij，对于任何 M，其定义为

(Ij)M={B⊆M:j∈B}

这实际上是有很好的动机的，不仅因为 NP 的解释变得更加统一，而且因为 John 可以与量化的 NP 结合：

* (20)约翰和三位教授来参加了会议。

如果约翰和三位教授属于相同的语义类别，则这里很方便。请注意，广义量词与个体不同，具有明确的布尔结构；定义（在这里是类型⟨1⟩的情况，但对于任何其他类型也是类似的）

(Q1∧Q2)M(A)⟺(Q1)M(A) 和 (Q2)M(A)(¬Q)M(A)⟺ 非 QM(A)

然后我们可以将（20）中的复杂决定词解释为 Ij∧threeprofessor。同样，复杂的 NP 在

* （21）John and Mary came to the meeting。

 表示 Ij∧Im。

一个类型⟨1,1⟩的量词表示的限定词的第一个参数（来自名词）通常被称为它的限制，第二个参数被称为它的范围。这两个参数在句法地位上的差异事实上具有明显的语义对应物。

## 11. 保守性

早期观察到自然语言中由限定词表示的类型⟨1,1⟩的广义量词具有以下特性：

* (22)保守性 (Conserv):
  对于所有的 M 和所有的 A,B⊆M, QM(A,B)⟺QM(A,A∩B).

这可以从以下句对中看出，很明显第二个句子只是表达第一个句子的一种笨拙方式：

* (23)a.大多数学生吸烟。
* b.大多数学生是吸烟的学生。
* (24) a.至少有五位教授缺席。
* b.至少五位教授是缺席的教授。
* (25)a.超过三分之一的研究生是外国人。
* b.超过三分之一的研究生是外国研究生。

Conserv says that only the part of *B* which is common to *A* matters for the truth of QM(A,B). That is, the part B−A in Figure 1 doesn’t matter. This appears to hold for all determiner denotations, but it fails for perfectly natural logical quantifiers, such as *MO* and *I* from the list (11) above. The reason is that it is characteristic of determiner denotations that the restriction argument *restricts the domain of quantification* to that argument.

## 12. Extension

实际上，领域限制的概念还有一个进一步的要素。将量化的领域限制为 M 的子集 A，不仅意味着 B−A 是无关的，而且还意味着 M 中在 A 之外的整个部分，因此也是图 1 中的 M−(A∪B)部分。这反过来又是任意广义量词适用的更一般性质的一个实例：

* (26)广义量词 (广义量词):
  如果 Q 是类型⟨n1,…,nk⟩的，Ri⊆Mni 对于 1≤i≤k，并且 M⊆M′，那么 QM(R1,…,Rk)⟺QM′(R1,…,Rk)。

也就是说，当宇宙被扩展或收缩时，只要参数没有改变，就不会发生任何变化。现在回想一下，对于类型⟨1⟩的量词，我们已经提供了一个逻辑机制，用于将量化域限制为子宇宙，即相对化（第 7 节）。我们现在可以看到（在下面的（b）中），Conserv 和 Ext 的组合实际上等同于完全相同的事情：

**事实 6**

1. 对于任何广义量词 Q，Qrel 满足 Ext。
2. 类型 ⟨1,1⟩ 的广义量词是 Conserv 和 Ext 当且仅当它是类型 ⟨1⟩ 的广义量词的相对化。[ 23]

再次，所有的限定词表示似乎满足广义量词。乍一看，原则上似乎没有什么能阻止一种语言包含一个限定词，比如 evso，它在具有少于 10 个元素的宇宙中表示每个，而在更大的宇宙中表示一些。但事实上，任何语言中实际上都没有这样的限定词，如果一个限定词的名词论证是为了将量化的领域限制在该名词的指称上，那么就不可能有这样的限定词。

诸如 evso 这样的量词在直觉上是不恒定的，即它在每个宇宙上的意义不相同，或者不是由相同的规则解释的。广义量词可以被看作是对恒定性的强烈要求：解释 Q 的规则甚至不提及宇宙。事实上，语言和逻辑中的许多量词都是广义的。正如我们所见，所有相对化的量词都是广义的，列表中的所有其他量词（10）-（12）也是，除了 W。[24] 实际上，似乎所有出现在自然语境中的取多于一个参数的量词都是广义的。许多类型 ⟨1⟩ 的量词也是广义的，例如，∃，Ij，QA（当 Q 是广义的时候；见（19）），以及列表中的所有量词（6）除了 QR。

但是 ∀ 和 QR 不是广义的。然而，人们也倾向于说它们在每个宇宙上的意义是相同的。∀ 的情况特别有趣，因为人们可能会认为它解释了像 everything 或 every thing 这样的 NP。关键在于 thing。如果将这个表达式视为一个逻辑常量，它总是表示宇宙，那么这些 NP 确实表示了 ∀：对于所有的 M 和所有的 B⊆M，

(everything)M(B)⟺everyM(M,B)⟺M⊆B⟺M=B⟺∀M(B)

当广义量词成立时，我们通常可以省略下标 M 并写成，例如，

Q(A,B)

而不是 QM(A,B)。也就是说，可以预设一个合适的宇宙，但将其置于背景中。

## 13. 对称性和单调性

广义量词并非所有自然语言量词都共享的属性，而是单独指出重要的子类。我们在上面的第 2 节中已经提到了两种：对称性和单调性。典型的对称量词有一些，没有，至少五个，恰好三个，偶数个，无限多个，而所有，大多数，至多三分之一则是非对称的。表达对称性的另一种方式是说 Q(A,B)的真值仅取决于集合 A∩B。更准确地说，如果对于所有 M 和所有 A，A'，B，B'⊆M 都成立，则称 Q 是交集的。

* (27)如果 A∩B=A′∩B′，那么 QM(A,B)⇔QM(A′,B′)。

 一个容易验证的事实：

**Fact 7**

对于保守型⟨1,1⟩广义量词，对称性和交集性是等价的。[25]

我们注意到一些三段论表达了单调性质。更简洁的表示，类型⟨1,1⟩广义量词 Q 是

右增加（右减少）当且仅当对于所有 M 和所有 A，B⊆B′⊆M（所有 A，B′⊆B⊆M），QM(A，B)意味着 QM(A，B′)。

同样对于左增或减，以及对于广义量词的任何给定参数位置的单调性。特别是，对于类型⟨1⟩量词来说，它是什么意思是清楚的。单调性在自然语言量词中是无处不在的。似乎在句法上简单的英语 NP 都表示单调（增加或减少）类型⟨1⟩的量词，几乎所有句法上简单的英语限定词都表示右单调的量词。[26]我们还有：

* (28)a.量词 Ij（专有名词）是增加的
* b.如果 QA 是增加的（减少的），那么当且仅当 Q 是右增加的（减少的）。

亚里士多德的所有、一些、没有在两个参数中都是单调的（例如，所有在右侧增加，在左侧减少），至少五个、不超过十个、无限多个也是如此，而大多数、至少三分之二的在右侧增加，但在左侧参数中既不增加也不减少。恰好三个、两个到七个之间是非单调的，尽管这两个都是（右侧和左侧）增加和减少量词的连接词（例如，至少三个和最多三个），与偶数个不同，它不是单调量词的（有限）布尔组合。

对于某些语言现象，对称性和单调性都起着重要的解释作用。对称性是所谓的存在句中允许的（大多数）量词的特征（例如，花园里至少有五个男人是可以的，但花园里大多数男人不行）。单调性对于解释极性项目的分布至关重要（没有人会成功是可以的，但有人会成功不行：例如 ever 这样的负极性项目需要一个减少的环境）。此外，单调性在自然推理中起着至关重要的作用；请参见第 18 节。

## 14. 不是 ISOM 的限定词

 考虑

* (29)约翰的书被偷了。
* (30)一些学生的书还没有归还。
* (31)除了玛丽之外，没有教授参加了会议。
* (32)除了少数热情的游泳者外，所有海滩游客都穿着衣服。
* (33)吸烟的男性学生比女性学生多。

表达式 John’s，一些学生的，除了玛丽之外的没有_，除了一些热情的游泳者之外的所有_，男性比女性更多自然被视为限定词：当与名词组合时，它们形成行为类似于普通 NP 的短语。此外，它们所表示的类型⟨1,1⟩的量词是 Conserv 和 Ext。例如，以下对中的句子是平凡等价的：

* (34)a.约翰的书被偷了。
* b.约翰的书是被偷的书。

但与先前的例子相比，它们不是 Isom，因为它们涉及一些固定的个体或属性：如果约翰的书被偷了，被偷的书的数量与红色铅笔的数量相同（在某个话语宇宙中），未被偷的书的数量与不是红色的铅笔的数量相同，那么约翰的铅笔不一定是红色的，正如 Isom 所认为的那样。

然而，就像非 Isom 量词 threestudent 通过冻结 Ext 量词 three 的限制参数得到的结果一样，上述非 Isom 量词通过冻结更抽象的关系中的参数得到的结果是 Isom 的。我们用所有格决定词约翰的来说明这一点。[28]

鉴于约翰表示一个个体，对于所有的 M 和所有的 A，B⊆M，决定词约翰的可以通过以下方式定义[29]

 约翰的 M(A,B)⟺∅≠A∩Rj⊆B

其中 Rj={b∈M:R(j,b)}，R 是某种“所有者”关系；众所周知，这种关系随着情况而变化很大——可能是在谈论约翰拥有的书籍，或者写过的书，或者借阅的书，或者买给玛丽的礼物等等。假设 R 是所有权。那么（29）表示约翰至少拥有一本书，他拥有的所有书都被偷了。现在考虑更一般的“量词”定义，对于 a∈M，R⊆M2，以及 A,B⊆M，定义如下：

PM(a,R,A,B)⟺∅≠A∩Ra⊆B

我们可以说这是一个类型为⟨0,2,1,1⟩的广义量词，其中 0 代表个体。 P 是 Isom （以明显的方式扩展定义 (13) 到这种类型的量词），而 John 的结果是通过将前两个参数冻结为合适的值得到的。

类似的构造适用于自然语言中表示非 Isom 量词的量词表达式的其他情况。例如，冠词 no _ except Mary 表示（假设 Mary 指的是 m）

(no _ except Mary)M(A,B)⟺A∩B={m}

换句话说，（31）表示玛丽是教授，她参加了会议，而没有其他教授参加。同样，可以轻松地定义类型⟨0,1,1⟩的对应的广义量词。因此，通过这种方式可以为自然语言量词检索到广义量词。另一方面，将类型⟨1,1⟩的量词与限定词相关联更符合句法，并且允许许多关于限定词指称在非 Isom 情况下成立的概括。

## 15. Constancy

Isom，即主题中立性，通常被视为至少是成为逻辑常量的必要条件。[30]可以区分逻辑性和恒定性，即在前面提到的意义上在不同宇宙中意义相同。首先，逻辑性是一种应该在定义下封闭的属性，而恒定性是否应该类似封闭则不太清楚。请注意，例如，Ext 量词的类别不在一阶可定义性下封闭。更确切地说，它在通常的布尔运算下是封闭的，但在内部否定下不封闭，因此也不封闭于取对偶，其中类型⟨1⟩量词 Q 的内部否定由(Q¬)M(A)⇔QM(M−A)定义，对偶由 Qd=¬(Q¬)定义。例如，∃d=∀。

一种直觉可能是，Ext 足以保持恒定。但另一种直觉是，一个在所有宇宙中意义相同的量词应该满足 Isom，这迫使 Q 在相同基数的所有宇宙中都是“相同的”。这两种想法是不兼容的，因为它们一起会暗示 Ext 意味着 Isom，这显然是错误的。显然，跨不同宇宙意义相同的模糊概念允许不同的明确化。仔细观察后，似乎不太可能有一个明确的版本能够容纳所有关于相同性的直觉。

在这种情况下，一个建议是简单地规定恒定等于 Ext + Isom。这将是对恒定的 Carnap 解释。具有这些属性组合的量词似乎肯定在所有宇宙中意义相同。另一方面，具有 Ext 但非 Isom 的量词，如 threestudent 或 some professor’s，在不同领域中意义不同，正如我们所看到的一种直觉。此外，我们遇到的少数自然的非 Ext 量词都可以从 Ext + Isom 量词中定义。[31]

## 16. 多元自然语言量词

考虑一个典型的英语句子，其中主语和宾语都是广义量词：

* (35) 大多数电影都被两位评论家评论过。

(36) 的真值条件可以用一个多元量词来表示，类型为⟨1,1,2⟩（省略 M）。

Q(A,B,R)⟺广义量词(A,{a:two(B,Ra)})

(This is the “narrow scope” reading; the “wide scope” reading would be instead two(B,{b:most(A,(R−1)b)).) But this polyadic quantifier results from two type ⟨1,1⟩ quantifiers by a ubiquitous construction that we call *iteration*. If Q,Q′ are of type ⟨1⟩, defined the type ⟨2⟩ quantifier Q⋅Q′ by

Q⋅Q′(R)⟺Q({a:Q′(Ra)})

然后我们获得了两种类型的广义量词 Q1，Q2 的迭代，如上所述，带有 QA1⋅QB2。迭代的性质在 van Benthem（1989），Keenan（1992），Westerståhl（1994）和 Steinert-Threlkeld 和 Icard（2013）中进行了研究。

Keenan 将迭代视为弗雷格边界。正如他和其他人指出的那样，似乎存在许多自然语言量词超出了该边界，即不能定义为迭代。我们在这里给出了一些例子；在刚才给出的参考文献中还可以找到更多。下一句可能看起来像是表达一个迭代，但实际上并不是。

* （37）考试时不同的学生回答了不同的问题。

例子（37）可能有各种解释，例如使用以下类型⟨1,1,2⟩的广义量词：

Q(A,B,R)⟺∀a,b∈A(a≠b⇒B∩Ra≠B∩Rb)

这个量词仍然是一阶可定义的，但不是一个迭代。[32] 接下来，考虑

* (38)a.人们通常对救他们的消防员心存感激。
* b.戴眼镜的女孩很少会被男人追求。（多萝西·帕克）

像通常，很少，总是，从不这样的副词可以被视为广义量词（最初由 Lewis（1975）观察到）。例如，狗从不喵喵叫大致上等同于没有狗喵喵叫。但对于（38），可以认为存在一种解读，其中量词适用于对：在由一个人和救助该人的消防员组成的对中，大多数情况下该人会心存感激。这只是我们在（12）中定义的对的大多数的恢复。

Res2(广义量词最)(R,S)⟺|R∩S|>|R−S|

所以在(38b)中，R(a,b)当且仅当 a∈人员且 b∈消防员且 a 救了 b，S(a,b)当且仅当 a 对 b 表示感激。可以证明对于许多量词，特别是最，广义量词 n(Q)在 FO(Q)中是不可定义的。事实上，广义量词最 Res2 是无法从任意有限数量的一元量词中定义的，因此它是一个不可约的多元量词的例子。[33]

 接下来：

* (39)a.五名波士顿投手坐在一起。
* b.大多数议会成员间接地互相提到。

这里（39a）可能具有真值条件

∃X⊆波士顿投手[|X|=5&RECIP(X,坐在一起)]

其中 RECIP 是在(12)中定义的类型⟨1,2⟩广义量词。也就是说，存在一组五名波士顿投手，如果你选取其中任意两名，要么他们坐在一起，要么之间有一名投手，或两名，或最多三名（都在所选的组内）。39b 同理。这只是互惠句子中出现的多元广义量词的几种构造之一。[34]

最后，考虑这个句子

* (40)你班大多数男孩和我班大多数女孩都曾经约会过。

(40)被提出作为分支量化的一个例子，可以用二维逻辑格式来表示

* (41)!['most x Ax' and 'most y By' each with lines to 'Rx,y'](https://plato.stanford.edu/entries/generalized-quantifiers/ex41.svg)

其中预期的解读是存在集合 X 是 A 的一个包含大多数 A 元素的子集，以及一个类似大的集合 Y 是 B 的子集，使得每对(a,b)其中 a∈X 且 b∈Y 都属于关系 R。更一般地，我们有一个广义量词类型为⟨1,1,2⟩，对于任何类型为⟨1,1⟩的 Q1,Q2 定义。

Br(广义量词 1,广义量词 2)(A,B,R)⟺∃X⊆A∃Y⊆B[广义量词 1(A,X)&广义量词 2(B,Y)&X×Y⊆R]

相当可能地，这给出了(40)的一种解读。请注意这里的 x 和 y 是彼此独立的。如果有人选择使用线性句子中的任何一个

mostx(A(x),mosty(B(y),R(x,y)))mosty(B(y),mostx(A(x),R(x,y)))

然后要么 y 依赖于 x，要么反之。 (41)中的二维句法反映了这种语义独立性。[35]

可以证明 Br(most, most)仅用 FO(most)无法表达；事实上，无法用任意有限数量的单调性量词表达（有关证明，请参阅 Hella，Väänänen 和 Westerståhl（1997））。另一方面，分支量词是通过应用于单调性量词的“提升”操作获得的，重启同理。事实上，尽管自然语言展现出远远超过弗雷格界限的许多多元性量词，但仍然可以声称这些都是通过系统的方式从单调性量词中获得的。

## 17. 广义量词理论与语言学

广义量词的出现对语言语义学产生了巨大影响，蒙塔古在 60 年代末的工作以及巴威斯和库珀、基南和斯塔维等人在 80 年代初应用模型论方法加强了这一影响（见注 21）。在这些作品中几乎所有的例子都是以英语为自然语言。语言学家们此后开始在其他语言上应用和测试“GQ 理论”的工具和方法。巴赫等人（1995）的作品中包括了对其他语言中量化的七个案例研究，强调了 D-量化和 A-量化的区别。在 D-量化中，我们迄今为止的大部分例子都是这样的，量词表达通常是一个应用于名词的限定词。A-量化是通过其他方式进行的——A 代表副词、助动词、词缀和论元结构调整器。许多语言更倾向于 A-量化，有些语言甚至是专门使用 A-量化。英语两种类型都有；回想一下（38）中的量化副词。

更近期的作品基南和帕佩尔诺（2012）以及帕佩尔诺和基南（2017）有一个单独的章节，回答了关于 34 种不同语言表达量化的一组固定问题（与上述提到的不同），以便对它们的表达资源进行广泛的清单编制。这种方法是语义的：问题的形式是“你的语言中能否表达 X，如果可以，以何种方式？”，这使得可以向每种语言提出关于保守性、单调性、极性项目、单元对多元量化等精确的问题。最后一章的总结显示，许多关于英语的概括，包括表示某些量词的表达存在以及这些量词的属性，同样适用于所研究的其他语言中的所有或大多数情况（基南和帕佩尔诺列出了 25 个这样的概括）。

另一方面，从 20 世纪 90 年代开始，一些语言学家认为 GQ 理论无法解释与量化相关的一系列重要语义现象——无论是在英语还是其他语言中。Szabolcsi（2010）对这些发展进行了详细的描述。其中一个问题是，GQ 理论似乎对复杂限定词的组合意义无话可说。例如，如何从其部分的意义推导出“超过五”的含义？或者考虑 most，它经常被视为一个简单的限定词，尽管它的含义必须以某种方式来自于 more 的最高级。

## 18. 广义量词和认知

近年来，有大量工作将语义学、推理和认知联系起来，其中许多与说话者如何理解、学习和推理定量表达相关。研究的一个主要方向涉及单调性（第 13 节）。Barwise 和 Cooper（1981）已经注意到自然语言中单调量词的普遍性，并提出了一种方法来表明单调量词比非单调量词更容易处理，增加量词比减少量词更容易。他们还建议可以利用心理实验来测试他们的假设。他们的技术提议在 van Benthem（1986）中进一步发展，引入了计数复杂性的概念，并表明，在一些假设下，具有最小计数复杂性的量词恰好具有某种强单调性属性。

单调性也涉及 van Benthem 所称的“一步”推理，这似乎对说话者很容易。基本限定词的单调性行为已经显示了这种推理是如何被授权的。将右增加（减少）类型⟨1,1⟩量词标记为+（-），左单调性同理，例如：

−every+ +some+ −no− ⋅most+ ⋅exactly three⋅

where ⋅ marks that the position is neither decreasing nor increasing. A nice example is the following inference (from Icard and Moss (2014), adapting an example in Geurts and Slik (2005)):

(43)

大多数美国人会说外语并在家中使用

---

大多数会一门外语的美国人在家里或工作时说这门语言

前提是一个带有"大多数"的“驴子句”，这种句子极难确定确切的真值条件。事实上，有几种可能的阅读方式。尽管如此，说话者似乎没有问题进行这种推断，显然是因为"大多数"是正确增加的（VP 论元在家说它被扩展到在家或工作时说它），不管主语名词短语（两个句子中相同的）确切意味着什么。

除了限定词之外，许多其他表达和短语显示出固定的单调性模式。从 van Benthem（1986）开始，这导致了如何将极性标记分配给句子分析树的节点的算法（相对于给定的语法），或者如何直接将这些标记纳入类型标记中；参见 Icard 和 Moss（2014）的概述和进一步参考资料。除了它们在推理中的作用，这种标记还可以解释，有时甚至可以预测，语言中否定极性项目的分布（第 13 节末）。此外，在许多情况下，不需要句法分析：推断可以直接在表面形式上进行，从这个意义上说，对说话者是“即时可用”的；参见（43）。刚才提到的论文还提出了形式单调性演算的完整公理化，其中可以表达许多种具有单调性的推理方式。

一个相对平行的发展是对各种三段论片段的正式研究；我们在第 2 节中指出，许多三段论表达了单调性属性。这些片段，大部分由 Ian Pratt-Hartmann 和尤其是 Larry Moss 研究，范围从仅包含诸如 allXY 或 someXY 之类的简单句子到允许补语、定语从句、及物动词、非一阶广义量词如 most 以及其他特征的片段。以下是这样一个片段中的推理示例（Moss p.c.）：

每个人都喜欢每个喜欢 Pat 的人，Pat 喜欢每个吹奏单簧管的人

---

每个人都喜欢每个喜欢每个喜欢每个吹奏单簧管的人的人

在 van Benthem 的语义自动机设置中（第 9 节），Steinert-Threlkeld 和 Icard（2013）证明了 Frege 边界（第 16 节）在广义量词方面是稳健的，即如果两个 Conserv 和 Ext 类型的⟨1,1⟩量词可被有限（或下推）自动机识别，则它们的迭代也可以。此外，Steinert-Threlkeld（2016）展示了对于大型的⟨1,1,2⟩ 类型量词类，它们是否为⟨1,1⟩类型量词的迭代是可判定的。围绕量词识别的认知方面的理论和实证结果的最新展示是 Szymanik（2016）。

已经提出了学习量词含义的计算模型; 例如，Clark（2011a）在语义自动机设置中进行了研究。在最新的发展中，Steinert-Threlkeld 和 Szymanik（即将发表）研究了使用神经网络技术的可学习性，测试那些满足三个常见提出的普适性条件——即简单确定器的含义是单调的，是同构的和保守的量词，是否比那些不具备这些属性的量词更容易学习。对于每个普适性条件，网络学习满足该条件的量词所需的时间与学习不满足该条件的量词所需的时间进行了比较。结果表明，单调和同构的量词比非单调和非同构的量词更容易学习，而对于保守性来说则没有可察觉的差异。

这些只是正在进行的研究的部分。研究人员正在调查说话者如何处理量化表达式，将基本的模型理论分析与心理学、神经科学和计算机科学方法结合起来，这在研究广义量词的领域已经成为一个丰富的领域。

<!--md-padding-ignore-begin-->
## Bibliography

* Bach, Emmon, Eloise Jelinek, Angelika Kratzer, and Barbara H. Partee (eds.), 1995, *Quantification in Natural Languages*, (Studies in Linguistics and Philosophy 54), Dordrecht: Springer Netherlands. doi:10.1007/978-94-017-2817-1
* Barwise, Jon, 1979, “On Branching Quantifiers in English”, *Journal of Philosophical Logic*, 8(1): 47–80. doi:10.1007/BF00258419
* Barwise, Jon and Robin Cooper, 1981, “Generalized Quantifiers and Natural Language”, *Linguistics and Philosophy*, 4(2): 159–219. doi:10.1007/BF00350139
* Barwise, Jon and Solomon Feferman (eds.), 1985, *Model Theoretic Logics*, (Perspectives in Mathematical Logic), New York: Springer-Verlag.
* van Benthem, Johan, 1986, *Essays in Logical Semantics*, (Studies in Linguistics and Philosophy, 29), Dordrecht: D. Reidel.
* –––, 1989, “Polyadic Quantifiers”, *Linguistics and Philosophy*, 12(4): 437–464. doi:10.1007/BF00632472
* van Benthem, Johan F. A. K. and Alice ter Meulen (eds.), 2011, *Handbook of Logic and Language*, second edition, Amsterdam: Elsevier.
* Bonnay, Denis, 2008, “Logicality and Invariance”, *Bulletin of Symbolic Logic*, 14(1): 29–68. doi:10.2178/bsl/1208358843
* Cartwright, Richard L., 1994, “Speaking of Everything”, *Noûs*, 28(1): 1–20. doi:10.2307/2215917
* Clark, Robin, 2011a, “Generalized Quantifiers and Number Sense”, *Philosophy Compass*, 6(9): 611–621. doi:10.1111/j.1747-9991.2011.00419.x
* –––, 2011b, “On the Learnability of Quantifiers”, in van Benthem and ter Meulen 2011: 911–923.
* Clark, Robin and Murray Grossman, 2007, “Number Sense and Quantifier Interpretation”, *Topoi*, 26(1): 51–62. doi:10.1007/s11245-006-9008-2
* Dalrymple, Mary, Makoto Kanazawa, Yookyung Kim, Sam McHombo, and Stanley Peters, 1998, “Reciprocal Expressions and the Concept of Reciprocity”, *Linguistics and Philosophy*, 21(2): 159–210. doi:10.1023/A:1005330227480
* Ebbinghaus, Heinz-Dieter and Jörg Flum, 1995, *Finite Model Theory*, (Springer Monographs in Mathematics), Berlin: Springer Berlin Heidelberg. doi:10.1007/3-540-28788-4
* Ebbinghaus, Heinz-Dieter, Jörg Flum, and Wolfgang Thomas, 1994, *Mathematical Logic* (*Einführung in die mathematische Logik*), second edition, New York: Springer-Verlag. doi:10.1007/978-1-4757-2355-7
* Filin Karlsson, Martin, 2017, “All There Is: On the Semantics of Quantification over Absolutely Everything”, Ph.D. Thesis, University of Gothenburg, (Acta Philosophica Gothoburgensia 31). [[Karlsson 2017 available online](http://hdl.handle.net/2077/54485)]
* Geurts, Bart and Frans van der Slik, 2005, “Monotonicity and Processing Load”, *Journal of Semantics*, 22(1): 97–117. doi:10.1093/jos/ffh018
* Glanzberg, Michael, 2004, “Quantification and Realism”, *Philosophy and Phenomenological Research*, 69(3): 541–572. doi:10.1111/j.1933-1592.2004.tb00518.x
* Hackl, Martin, 2000, “Comparative Quantifiers”, PhD Thesis, Massachusetts Institute of Technology. [[Hackl 2000 available online](https://dspace.mit.edu/handle/1721.1/8765)]
* Hella, Lauri, 1989, “Definability Hierarchies of Generalized Quantifiers”, *Annals of Pure and Applied Logic*, 43(3): 235–271. doi:10.1016/0168-0072(89)90070-5
* Hella, Lauri, Jouko Väänänen, and Dag Westerståhl, 1997, “Definability of Polyadic Lifts of Generalized Quantifiers”, *Journal of Logic, Language and Information*, 6(3): 305–335. doi:10.1023/A:1008215718090
* Henkin, Leon, 1961, “Some Remarks on Infinitely Long Formulas”, in *Infinitistic Methods: Proceedings of the Symposium on Foundations of Mathematics, Warsaw, 2-9 September 1959*, Oxford: Pergamon Press, 167–183.
* Higginbotham, James and Robert May, 1981, “Questions, Quantifiers and Crossing”, *The Linguistic Review*, 1(1): 41–79. doi:10.1515/tlir.1981.1.1.41
* Hintikka, Jaakko, 1973, “Quantifiers vs. Quantification Theory”, *Dialectica*, 27(3–4): 329–358. doi:10.1111/j.1746-8361.1973.tb00624.x
* Hopcroft, John E. and Jeffrey D. Ullman, 1979, *Introduction to Automata Theory, Languages, and Computation*, (Addison-Wesley Series in Computer Science), Reading, MA: Addison-Wesley.
* Icard III, Thomas F., 2014, “Higher-Order Syllogistics”, in *Formal Grammar 2014*, Glyn Morrill, Reinhard Muskens, Rainer Osswald, and Frank Richter (eds.), (Lecture Notes in Computer Science 8612), Berlin, Heidelberg: Springer Berlin Heidelberg, 1–14. doi:10.1007/978-3-662-44121-3_1
* Icard III, Thomas Icard and Lawrence S. Moss, 2014, “Recent Progress in Monotonicity”, in *Perspectives on Semantic Representations for Textual Inference*, (LiLT 9), Stanford, CA: CSLI Publications, 167–194. [[Icard and Moss 2014 available online](https://www.semanticscholar.org/paper/Recent-Progress-in-Monotonicity-Icard-Moss/b2d657f26e22c3756608e10f9afd72fd0fcf1199)]
* Icard, Thomas, Lawrence Moss, and William Tune, 2017, “A Monotonicity Calculus and Its Completeness”, in *Proceedings of the 15th Meeting on the Mathematics of Language*, London, UK: Association for Computational Linguistics, 75–87. doi:10.18653/v1/W17-3408
* Keenan, Edward L., 1992, “Beyond the Frege Boundary”, *Linguistics and Philosophy*, 15(2): 199–221. doi:10.1007/BF00635807
* Keenan, Edward L. and Leonard M. Faltz, 1984, *Boolean Semantics for Natural Language*, Dordrecht: Springer Netherlands. doi:10.1007/978-94-009-6404-4
* Keenan, Edward L. and Lawrence S. Moss, 1985, “Generalized Quantifiers and the Expressive Power of Natural Language”, in *Generalized Quantifiers in Natural Language*, Alice ter Meulen and Johan van Benthem (eds.), Berlin, Boston: De Gruyter, 73–124. doi:10.1515/9783110867909.73
* Keenan, Edward L. and Denis Paperno (eds.), 2012, *Handbook of Quantifiers in Natural Language*, (Studies in Linguistics and Philosophy 90), Dordrecht: Springer Netherlands. doi:10.1007/978-94-007-2681-9
* Keenan, Edward L. and Jonathan Stavi, 1986, “A Semantic Characterization of Natural Language Determiners”, *Linguistics and Philosophy*, 9(3): 253–326. doi:10.1007/BF00630273
* Keenan, Edward L. and Dag Westerståhl, 2011, “Generalized Quantifiers in Linguistics and Logic”, in van Benthem and ter Meulen 2011: 859–910.
* Lewis, David, 1975, “Adverbs of Quantification”, in *Formal Semantics of Natural Language*, Edward L. Keenan (ed.), Cambridge: Cambridge University Press, 3–15. doi:10.1017/CBO9780511897696.003
* Lindström, Per, 1966, “First Order Predicate Logic with Generalized Quantifiers”, *Theoria*, 32(3): 186–195. doi:10.1111/j.1755-2567.1966.tb00600.x
* Linnebo, Øystein, 2006, “Sets, Properties, and Unrestricted Quantification”, in Rayo and Uzquiano 2006: 149–178.
* Luosto, Kerkko, 2000, “Hierarchies of Monadic Generalized Quantifiers”, *Journal of Symbolic Logic*, 65(3): 1241–1263. doi:10.2307/2586699
* Montague, Richard, 1974, *Formal Philosophy: Selected Papers of Richard Montague*, Richmond H. Thomason (ed.), New Haven, CT: Yale University Press.
* Moss, Lawrence S., 2015, “Natural Logic”, in *The Handbook of Contemporary Semantic Theory*, Shalom Lappin and Chris Fox (eds.), second edition, John Wiley & Sons, 646–681.
* Mostowski, Andrzej, 1957, “On a Generalization of Quantifiers”, *Fundamenta Mathematicae*, 44(1): 12–36. doi:10.4064/fm-44-1-12-36
* Mostowski, Marcin, 1998, “Computational Semantics for Monadic Quantifiers”, *Journal of Applied Non-Classical Logics*, 8(1–2): 107–121. doi:10.1080/11663081.1998.10510934
* Odic, Darko, Paul Pietroski, Tim Hunter, Justin Halberda, and Jeffrey Lidz, 2018, “Individuals and Non-Individuals in Cognition and Semantics: The Mass/Count Distinction and Quantity Representation”, *Glossa: A Journal of General Linguistics*, 3(1): 61. doi:10.5334/gjgl.409
* Paperno, Denis and Edward L. Keenan (eds.), 2017, *Handbook of Quantifiers in Natural Language: Volume II*, (Studies in Linguistics and Philosophy 97), Cham: Springer International Publishing. doi:10.1007/978-3-319-44330-0
* Parsons, Terence, 1997 [2017], “The Traditional Square of Opposition”, *The Stanford Encyclopedia of Philosophy*, (Summer 2017), Edward N. Zalta (ed.). URL = <https://plato.stanford.edu/archives/sum2017/entries/square/>
* Peters, Stanley and Dag Westerståhl, 2002, “Does English Really Have Resumptive Quantification?”, in *The Construction of Meaning*, David I. Beaver, Luis D. Casillas Martínez, Brady Z. Clark, and Stefan Kaufmann (eds.), Stanford, CA: CSLI Publications, 181–195.
* –––, 2006, *Quantifiers in Language and Logic*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199291267.001.0001
* –––, 2013, “The Semantics of Possessives”, *Language*, 89(4): 713–759. doi:10.1353/lan.2013.0065
* Pietroski, Paul, Jeffrey Lidz, Tim Hunter, and Justin Halberda, 2009, “The Meaning of ‘Most’: Semantics, Numerosity and Psychology”, *Mind & Language*, 24(5): 554–585. doi:10.1111/j.1468-0017.2009.01374.x
* Rayo, Agustín, 2012, “Absolute Generality Reconsidered”, in *Oxford Studies in Metaphysics Volume 7*, Karen Bennett and Dean W. Zimmerman (eds.), Oxford: Oxford University Press, 93–126. doi:10.1093/acprof:oso/9780199659081.003.0004
* Rayo, Agustín and Gabriel Uzquiano (eds.), 2006, *Absolute Generality*, Oxford: Clarendon Press.
* Sher, Gila Y., 1997, “Partially-Ordered (Branching) Generalized Quantifiers: A General Definition”, *Journal of Philosophical Logic*, 26(1): 1–43. doi:10.1023/A:1017944808396
* Steinert-Threlkeld, Shane, 2016, “Some Properties of Iterated Languages”, *Journal of Logic, Language and Information*, 25(2): 191–213. doi:10.1007/s10849-016-9239-6
* Steinert-Threlkeld, Shane and Thomas F. Icard III, 2013, “Iterating Semantic Automata”, *Linguistics and Philosophy*, 36(2): 151–173. doi:10.1007/s10988-013-9132-6
* Steinert-Threlkeld, Shane and Jakub Szymanik, forthcoming, “Learnability and Semantic Universals”, *Semantics and Pragmatics*. [[Steinert-Threlkeld and Szymanik forthcoming available online](https://semanticsarchive.net/Archive/mQ2Y2Y2Z/LearnabilitySemanticUniversals.pdf)]
* Szabolcsi, Anna, 2010, *Quantification*, Cambridge: Cambridge University Press. doi:10.1017/CBO9780511781681
* Szymanik, Jakub, 2016, *Quantifiers and Cognition: Logical and Computational Perspectives*, (Studies in Linguistics and Philosophy 96), Cham: Springer International Publishing. doi:10.1007/978-3-319-28749-2
* Westerståhl, Dag, 1987, “Branching Generalized Quantifiers and Natural Language”, in *Generalized Quantifiers*, Peter Gärdenfors (ed.) (Studies in Linguistics and Philosophy 31), Dordrecht: Springer Netherlands, 269–298. doi:10.1007/978-94-009-3381-1_10
* –––, 1989, “Quantifiers in Formal and Natural Languages”, in *Handbook of Philosophical Logic*, Dov M. Gabbay and Franz Guenthner (eds.), Dordrecht: Springer Netherlands, 4:1–131. Reprinted, 2007, *Handbook of Philosophical Logic*, Dov M. Gabbay and Franz Guenthner (eds.), Dordrecht: Springer Netherlands, 14:223–338. doi:10.1007/978-1-4020-6324-4_4
* –––, 1994, “Iterated Quantifiers”, in *Dynamics, Polarity, and Quantification*, Makoto Kanazawa and Christopher J. Piñón (eds.), (CSLI Lecture Notes 48), Stanford, CA: CSLI Publications, 173–209.
* –––, 2012, “Classical vs. Modern Squares of Opposition, and Beyond”, in *The Square of Opposition: A General Framework for Cognition*, Jean-Yves Beziau and Gillman Payette (eds.), Bern: P. Lang, 195–229.
* –––, 2017, “Sameness”, in *Feferman on Foundations*, Gerhard Jäger and Wilfried Sieg (eds.), (Outstanding Contributions to Logic 13), Cham: Springer International Publishing, 449–467. doi:10.1007/978-3-319-63334-3_16
* Williamson, Timothy, 2003, “Everything”, *Philosophical Perspectives*, 17(1): 415–465. doi:10.1111/j.1520-8583.2003.00017.x

## Academic Tools

> | ![sep man icon](../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=generalized-quantifiers). |
> | --- | --- |
> | ![sep man icon](../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/generalized-quantifiers/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=generalized-quantifiers&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](https://philpapers.org/sep/generalized-quantifiers/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[Aristotle, General Topics: logic](https://plato.stanford.edu/entries/aristotle-logic/) | [Frege, Gottlob](https://plato.stanford.edu/entries/frege/) | [logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [model theory](https://plato.stanford.edu/entries/model-theory/) | [square of opposition](https://plato.stanford.edu/entries/square/)

[Copyright © 2019](https://plato.stanford.edu/info.html#c) by  
[Dag Westerståhl](http://www.philosophy.su.se/english/research/our-researchers/faculty/dag-westerst%C3%A5hl-1.165620) <[*dag.westerstahl@philosophy.su.se*](mailto:dag%2ewesterstahl%40philosophy%2esu%2ese)>
