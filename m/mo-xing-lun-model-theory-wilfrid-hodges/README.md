# 模型论 model theory (Wilfrid Hodges)

*首次发表于 2001 年 11 月 10 日；实质性修订于 2020 年 10 月 16 日。*

模型论始于对形式语言及其解释的研究，以及特定形式语言可以进行的分类类型的研究。主流的模型论现在是数学的一个复杂分支（参见一阶模型论的条目）。但从更广义上讲，模型论是通过集合论结构对任何语言（形式的或自然的）进行解释的研究，阿尔弗雷德·塔斯基的真理定义作为典范。在这个更广义的意义上，模型论在几个方面与哲学相交，例如在逻辑推论的理论和自然语言的语义学中。

---

## 1. 模型论的基本概念

有时候我们写或说一个句子 S，它既不表达真实也不表达虚假，因为关于这些词的意义缺少了一些关键信息。如果我们继续添加这些信息，使得 S 能够表达一个真或假的陈述，我们就说我们对 S 进行了解释，而添加的信息被称为 S 的解释。如果解释 I 恰好使得 S 陈述了一个真实的事情，我们说 I 是 S 的一个模型，或者说 I 满足 S，用符号表示为‘I⊨S’。另一种说法是 I 是 S 的一个模型，也就是说 S 在 I 中是真的，因此我们有了模型论真理的概念，即在特定解释中的真理。但是我们应该记住，陈述‘S 在 I 中是真的’只是‘S 在 I 中解释时是真的’的换句话；因此模型论真理是依附于普通真理的，我们总是可以用换句话来表达它。

例如，我可能会说

> 他正在杀死他们所有人，

并提供解释，即“他”是 Alfonso Arblaster，住在 Beetleford 的 The Crescent 35 号，而“它们”是他鸽舍里的鸽子。这种解释解释了（a）一些表达式所指的对象，以及（b）一些量词所涵盖的类别。（在这个例子中有一个量词：“它们中的所有”）。由（a）和（b）组成的解释在模型论中经常出现，它们被称为结构。特定类型的模型论使用特定类型的结构；例如，数学模型论倾向于使用所谓的一阶结构，模态逻辑的模型论使用 Kripke 结构，等等。

前一段中的结构 I 涉及一个固定的对象和一个固定的类。由于我们今天描述的结构，该类是阿方索鸽舍里的鸽子类，而不是明天将来替换它们的鸽子类。如果阿方索今天杀死了他鸽舍里的所有鸽子，那么 I 今天满足了引用的句子，但明天不会满足，因为阿方索不能两次杀死同样的鸽子。根据您想要使用模型论的目的，您可能会愿意在今天（默认时间）评估句子，或者您可能希望记录它们在某个时间满足而在另一个时间不满足。在后一种情况下，您可以相对化模型的概念，并写成“I⊨tS”，表示 I 是 S 在时间 t 的一个模型。对于句子中的其他隐含指示特征可能捕捉到的地点或其他任何可能存在的事物，也适用同样的方法。例如，如果您相信可能世界的存在，您可以通过可能世界的索引来索引 ⊨，以评估句子的可能世界。除了使用集合论外，模型论对存在的事物的种类完全持中立态度。

请注意，结构中的对象和类别带有标签，将它们引导到句子中的正确表达式。这些标签是结构的重要组成部分。

如果同一类别用于解释所有量词，则该类别被称为结构的域或宇宙。但有时存在不同类别的量词。例如，如果我说

> 那些奇怪的疾病之一正在杀死所有的鸟。

您将寻找一种解释，将“那些奇怪的疾病”赋予一类疾病，并将“鸟”赋予一类鸟类。给不同量词赋予两个或更多类别的解释被称为多分类，这些类别有时被称为排序。

如果我们从一个句子 S 开始，它确实陈述了某种真实或虚假的内容，而不需要进一步的解释，那么上述思想仍然是有用的。（模型论者称这样的句子是完全解释的。）例如，我们可以考虑完全解释句子 S 的误解 I。使 S 成为真实的误解被称为 S 的非标准或非预期模型。非标准分析这一数学分支是基于关于实数或复数系统的数学陈述的非标准模型的；请参见下面的第 4 节。

人们还谈论自然语言的模型论语义，这是一种描述自然语言句子意义的方式，而不是给予它们意义的方式。这种语义与模型论之间的联系有点间接。它源于塔斯基在 1933 年提出的真理定义。有关塔斯基的真理定义的更多细节，请参见相关条目。

## 2. 模型论定义

一个句子 S 将其所有可能的解释分为两类，即模型和非模型。通过这种方式，它定义了一个类，即所有模型的类，写作 Mod(S)。以一个法律例子来说明，这个句子

> 第一人已将财产转让给第二人，第二人因此为第三人持有财产。

定义了一类采用标记的 4 元组形式的结构，例如（将标签写在左边）：

* 第一人 = 阿方索·阿布拉斯特;
* 属性 = 阿方索家后面的废弃土地;
* 第二人 = 约翰·多伊;
* 第三人 = Richard Roe.

这是一个典型的模型论定义，定义了一类结构（在这种情况下，律师所知的信托类）。

我们可以将模型论定义的概念从单个句子 S 扩展到一组句子 T；Mod(T)是同时是 T 中所有句子的模型的所有解释的类。当使用一组句子 T 以这种方式定义一个类时，数学家们说 T 是一个理论或一组公理，并且 T 公理化了类 Mod(T)。

以以下一组一阶句子为例：

∀x∀y∀z(x+(y+z)=(x+y)+z).∀x(x+0=x).∀x(x+(−x)=0).∀x∀y(x+y=y+x).

这里的标签是加号‘+’、减号‘−’和常数符号‘0’。解释还需要为量词指定一个域。在一个前提下，这组句子的模型恰好是数学家所知道的阿贝尔群结构。这个前提是，在一个阿贝尔群 A 中，域应包含符号 0 的解释，并且应在符号+和 − 的解释下封闭。在数学模型论中，人们将这个条件（或其他函数和常数符号的相应条件）纳入结构的定义中。

每个数学结构都与特定的一阶语言相关联。一个结构包含了对某些谓词、函数和常量符号的解释；每个谓词或函数符号都有一个固定的元数。这些符号的集合 K 被称为结构的签名。签名中的符号通常被称为非逻辑常量，它们的旧称是原语。签名 K 的一阶语言是使用 K 中的符号以及等号=来构建其原子公式的一阶语言。（参见关于经典逻辑的条目。）如果 K 是一个签名，S 是签名为 K 的语言的一个句子，A 是一个签名为 K 的结构，那么因为符号相匹配，我们知道 A 使得 S 成为真或假。因此，我们将阿贝尔群的类定义为所有那些签名为+、-、0 的结构的模型，这些模型是上述句子的模型。除了使用形式化的一阶语言之外，这正是代数学家通常对阿贝尔群的类的定义；模型论形式化了一种在数学中非常常见的定义方式。

现在，阿贝尔群的定义公理有三种符号（除了标点符号）。首先是具有固定含义的逻辑符号=。其次是非逻辑常量，它们通过应用于特定结构来获得其解释；量词符号应与它们一起分组，因为结构还确定了量词的范围。第三种是变量 x、y 等。这种三层模式的符号允许我们以第二种方式定义类。我们不再寻找使一个句子成为真的非逻辑常量的解释，而是通过选择一个特定的结构 A 来固定非逻辑常量的解释，并寻找将使给定公式在 A 中成为真的变量元素的赋值。

例如，让 Z 成为整数的加法群。它的元素是整数（正数、负数和 0），符号+、-、0 具有它们的通常含义。考虑公式

 v1+v1=v2。

如果我们将数字-3 赋给 v1，将数字-6 赋给 v2，那么在 Z 中，这个公式成立。我们通过说在 Z 中，对于这个公式，对(−3,−6)这对数满足来表达这一点。同样，(15,30)和(0,0)也满足它，但(2,−4)和(3,3)不满足。因此，这个公式定义了整数上的二元关系，即满足它的整数对的集合。在结构 A 中以这种方式定义的关系称为 A 中的一阶可定义关系。一个有用的推广是允许定义公式使用 A 的某些特定元素的附加名称；这些元素称为参数，然后关系是可用参数定义的。

这种第二类型的定义，定义了结构内部的关系，而不是结构的类别，也形式化了一种常见的数学实践。但这次实践属于几何学而不是代数学。您可能会在实数领域中通过以下公式定义的关系中认出它：

v21+v22=1.

这是实平面上以原点为中心、半径为 1 的圆。代数几何学中充满了这种定义。

在 1940 年代，一些人（主要是俄罗斯的 Anatolii Mal’tsev，美国的 Alfred Tarski 和英国的 Abraham Robinson）意识到，经典逻辑的元定理可以用来证明关于以我们刚刚描述的两种方式定义的类的数学定理。1950 年，Robinson 和 Tarski 都受邀在剑桥马萨诸塞州的国际数学家大会上发表关于这一新学科的演讲（这个学科当时还没有名字 - Tarski 在 1954 年提出了“模型论”的名字）。Robinson 在大会上的演讲结论值得引用：

> 本文中提出的具体例子将表明，当代符号逻辑可以产生有用的工具 - 虽然绝不是万能的工具 - 用于实际数学的发展，尤其是代数和代数几何的发展。这是 Leibniz 在 1679 年写给 Huyghens 的一封信中表达的一个愿望的实现。（Robinson 1952, 694）

实际上，Mal’tsev 在几年前已经在群论中深入应用了模型论，但在当时的政治条件下，他在俄罗斯的工作还不为西方所知。到了二十世纪末，Robinson 的希望已经得到了充分的实现；请参阅关于一阶模型论的条目。

除了上述两种模型论定义之外，模型论中至少还有另外两种定义。第三种被称为解释（是我们开始的解释的特例）。在这里，我们从一个结构 A 开始，通过定义结构 B 的域 X 以及 B 的所有标记关系和函数为 A 中由某些带参数的公式定义的关系来构建另一个结构 B，B 的签名不一定与 A 的相关。进一步的细化是在 X 上找到一个可定义的等价关系，并将 B 的域定义为这个关系的等价类的集合，而不是 X 本身。以这种方式构建的结构 B 被称为在结构 A 中被解释。

再举一个简单的例子，来自标准数学，即在由自然数 0、1、2 等组成的结构 N 中解释整数群 Z。为了构建 Z 的域，我们首先取所有自然数有序对（显然是 N 中的可定义关系）的集合 X，并在这个集合 X 上定义等价关系 ∼，即

(a,b)∼(c,d)当且仅当 a+d=b+c

（再次可定义）。Z 的域由此关系的等价类组成。我们通过以下方式定义 Z 上的加法

（a，b）+（c，d）=（e，f）当且仅当 a+c+f=b+d+e。

（a，b）的等价类成为整数 a−b。

当一个结构 B 在一个结构 A 中被解释时，关于 B 的每个一阶陈述都可以被翻译成关于 A 的一阶陈述，通过这种方式我们可以从 A 的完整理论中读取出 B 的完整理论。实际上，如果我们不仅仅对单个结构 A 进行这种构造，而是对一个理论 T 的一组模型进行这种构造，始终使用相同的定义公式，那么得到的结构将都是一个可以从 T 和定义公式中读取出来的理论 T'的模型。这样就给出了一个精确的说法，即理论 T'在理论 T 中被解释。科学哲学家有时尝试使用这种解释的概念来精确说明一个理论可归约于另一个理论的含义。但是，科学理论之间的实际归约例子似乎通常比这种简单的模型论思想更加微妙。请参阅物理学中关于理论间关系的条目。

第四种可定义性是关于理论中特定关系的隐式可定义性和显式可定义性的一对概念。请参阅一阶模型论条目中的第 3.3 节。

不幸的是，过去存在着一个非常混乱的关于模型论公理的理论，也被称为隐式定义。到了 19 世纪末，数学几何学通常不再是对空间的研究，而是对满足某些“几何”公理的结构类的研究。几何术语如“点”、“线”和“之间”仍然存在，但只作为公理中的原始符号；它们不再具有任何与之相关的含义。因此，关于欧几里德的平行公设（作为关于空间的陈述）是否可以从欧几里德关于空间的其他假设中推导出来的旧问题对几何学家来说已经不再有趣。相反，几何学家们表明，如果将欧几里德的其他假设以一个理论 T 的形式写下来，那么可以找到不满足平行公设的 T 的模型。（关于 19 世纪几何学的洛巴切夫斯基和克莱因的贡献，请参见几何学词条。）1899 年，大卫·希尔伯特发表了一本书，在书中他使用了我们刚刚描述的解释方法构建了这样的模型。

问题是由于希尔伯特和其他人描述他们所做的事情的方式而产生的。历史很复杂，但大致上发生了以下事情。大约在 19 世纪中叶，人们注意到，在阿贝尔群中，减法函数可以用 0 和加法来定义（即：−a 是元素 b，使得 a+b=0）。由于这种对减法的描述实际上是定义阿贝尔群的公理之一，我们可以说（借用 J.D.格尔贡的术语，他不应对后来对其使用负责），阿贝尔群的公理隐含地定义了减法。在当时的行话中，人们并不是说公理定义了减法函数，而是说它们定义了减法的概念。现在假设我们换个角度，试图用减法和 0 来定义加法。这样做是行不通的，因为可以有两个具有相同 0 和减法但加法函数不同的阿贝尔群。19 世纪的数学家们并没有这样说，而是得出结论，公理只在某种程度上用减法和 0 来定义加法。接受了这一点后，他们继续说，这些公理共同构成了加法、减法和 0 的概念的隐含定义，而这个隐含定义只是部分的，但它对这些概念所说的正是我们需要知道的。

人们不禁想知道，为什么在五十年里没有人质疑这种胡言乱语。实际上，有些人确实质疑过，尤其是几何学家 Moritz Pasch，在他的《关于现代几何学的讲座》（1882 年）第 12 节中坚持认为，几何公理对于“点”、“线”等概念的意义一无所知。相反，他说，公理给出了这些概念之间的关系。如果将结构看作是一种有序的 n 元组集合等，那么 Mod(T)类就成为一个 n 元关系，Pasch 的解释与我们的一致。但他无法详细说明细节，并且有证据表明，他的同时代人（以及一些较近期的评论者）认为他是在说公理可能不能确定“点”和“线”的意义，但它们确实确定了“之间”和“与之相交”等关系术语的意义！Frege 对隐含定义学说的破坏是精彩的，但来得太晚，无法挽救希尔伯特在他的《几何学基础》开篇时说，他的公理给出了“位置”、“之间”和“全等”的“准确且数学上充分的描述”。幸运的是，希尔伯特的数学本身就能说明问题，我们可以简单地忽略这些哲学上的失误。我们现在认为是正确描述这一工作线路的模型论解释似乎首次出现在 19 世纪 90 年代的 Giuseppe Peano 团队中，并且通过 Bertrand Russell 的《数学原理》（1903 年）传播到了英语世界。

## 3. 模型论的推论

假设 L 是一个 K 签名的语言，T 是 L 的一组句子，ϕ 是 L 的一个句子。那么关系

 模型(T)⊆ 模型(ϕ)

表达了每个 K 签名的结构，它是 T 的模型，也是 ϕ 的模型。这被称为模型论的推论关系，简写为

T⊨ϕ

⊨ 的双重使用是不幸的。但在 L 是一阶的特殊情况下，完备性定理（参见经典逻辑条目）告诉我们，当且仅当存在从 T 推导出 ϕ 的证明时，'T⊨ϕ'成立，这是一种常见的关系，通常写作

T⊢ϕ

由于在这种情况下，⊨ 和 ⊢ 表达的是完全相同的关系，模型论者经常避免使用 ⊨ 的双重用途，而使用 ⊢ 来表示模型论的推论。但由于接下来的内容不仅限于一阶语言，为了安全起见，建议我们在这里仍然使用 ⊨。

在 19 世纪中叶之前，逻辑教科书通常教导学生如何通过展示其具有一系列标准形式之一，或者将其改写为这样的形式来检验一个论证的有效性（比如用英语）。这些标准形式是英语中的句法和/或语义论证形式。这个过程是危险的：语义形式几乎可以说在表面上是不可见的，并且没有纯句法形式能够保证论证的有效性。因此，大多数旧教科书都有一个长篇章节讲述“谬误”——无效论证看起来可能是有效的方式。

1847 年，乔治·布尔改变了这种安排。例如，为了验证这个论证：

> 所有君主都是人类。没有人类是不可错误的。因此，没有不可错误的存在是君主。

布尔将符号 P、Q、R 解释为类的名称：

> P 是所有君主的类。
> Q 是所有人类的类。
> R 是所有不可避免存在的事物的类。

然后他会指出，原始论证可以转述为一个集合论的结果：

(P⊆Q),(Q∩R=0)⊨(R∩P=0)

（这个例子来自斯坦利·杰文斯，1869 年。布尔自己的解释是独特的，但我相信杰文斯的例子准确地代表了布尔的意图。）今天我们会写成 ∀x(Px→Qx)而不是 P⊆Q，但这本质上是 P⊆Q 的标准定义，所以我们与布尔之间的区别很小。

就像他们遵循布尔一样，现代逻辑教科书通过将英语论证归纳为模型论的结果来证明它们的有效性。由于模型论的结果类，在至少一阶逻辑中，没有旧的论证形式的模糊性，因此以这种风格的逻辑教科书早就不再有关于谬误的章节了。

但是有一个警告从旧教科书中幸存下来：如果你以一种不是模型论结果的方式形式化你的论证，这并不意味着这个论证是无效的。这可能只意味着在形式化之前你没有深入分析论证中的概念。旧教科书过去常常在一个杂乱的部分讨论这个问题，称为“主题”（即寻找可能被忽视的论证的提示）。这里是彼得·西班牙的 13 世纪《逻辑小结》中的一个例子：

> “有一个父亲。因此有一个孩子。” … 这个论证的有效性从哪里来？来自关系。原则是：当一个相关的配对被假定时，另一个也是如此。

希尔伯特和阿克曼，可能是最有助于建立现代风格的教科书，在他们的第 III.3 节中讨论了一个非常类似的例子：“如果有一个儿子，那么就有一个父亲”。他们指出，任何试图用符号来证明这一点的尝试

∃xSx→∃xFx

注定失败。“只有在我们概念上分析出现的两个谓词的含义时，才能证明这个陈述”，正如他们所举例的那样。当然，分析发现了彼得·西班牙所提到的确切关系。

另一方面，如果你的英语论证转化为一个无效的模型论推论，推论的反例可能会给出关于如何描述一个使得论证的前提为真而结论为假的情况的线索。但这并不保证。

人们可以提出一些关于现代教科书程序是否真正捕捉到合理的逻辑推论概念的问题。例如，在布尔的情况下，他所依赖的集合论推论都可以通过一阶逻辑的形式证明轻松得到，甚至不使用任何集合论公理；而根据完备性定理（见经典逻辑条目），对于一阶逻辑也是如此。但对于其他一些逻辑来说，这显然是不正确的。例如，某些时间逻辑的模型论推论关系预设了关于时间物理结构的一些事实。此外，正如布尔本人指出的，他从英语论证到集合论形式的转化要求我们相信，在论证中使用的每个属性都有一个相应的所有具有该属性的事物的类。这与弗雷格的不一致的包容公理非常接近！

In 1936 Alfred Tarski proposed a definition of logical consequence for arguments in a fully interpreted formal language. His proposal was that an argument is valid if and only if: under any allowed reinterpretation of its nonlogical symbols, if the premises are true then so is the conclusion. Tarski assumed that the class of allowed reinterpretations could be read off from the semantics of the language, as set out in his [truth definition](https://plato.stanford.edu/entries/tarski-truth/). He left it undetermined what symbols count as nonlogical; in fact he hoped that this freedom would allow one to define different kinds of necessity, perhaps separating ‘logical’ from ‘analytic’. One thing that makes Tarski’s proposal difficult to evaluate is that he completely ignores the question we discussed above, of analysing the concepts to reach all the logical connections between them. The only plausible explanation I can see for this lies in his parenthetical remark about

> the necessity of eliminating any defined signs which may possibly occur in the sentences concerned, i.e. of replacing them by primitive signs.

This suggests to me that he wants his primitive signs to be *by stipulation* unanalysable. But then by stipulation it will be purely accidental if his notion of logical consequence captures everything one would normally count as a logical consequence.

历史学家们注意到 Tarski 的提议与 1837 年 Bernard Bolzano 的 Wissenschaftslehre 第 147 节中的提议之间的相似之处。像 Tarski 一样，Bolzano 通过真实的相关命题来定义命题的有效性。与 Tarski 不同的是，Bolzano 提出的是关于白话命题的提议，而不是关于具有明确定义的语义的形式语言的句子。

在这一部分的所有内容中，还请参阅关于逻辑推论的条目。

## 4. 表达力强度

一个句子 S 定义了它的模型类 Mod(S)。给定两种语言 L 和 L′，我们可以通过询问是否每个类 Mod(S)，其中 S 是 L 语言的一个句子，也是 L′语言的一个句子形式为 Mod(S′)的类来比较它们。如果答案是肯定的，我们说 L 可以归约到 L′，或者说 L′至少与 L 一样表达力强。

例如，如果 L 是一个带有恒等性的一阶语言，其签名由一元谓词符号组成，而 L′是由四个三段论形式（所有 A 都是 B，一些 A 是 B，没有 A 是 B，一些 A 不是 B）的句子组成的语言，使用相同的谓词符号，那么 L′可以归约到 L，因为三段论形式可以用一阶逻辑表达。（关于如何正确表达它们有一些争议，请参见传统对立方条目。）但是，一阶语言 L 肯定不能归约到三段论语言 L′，因为在 L 中，我们可以写下一个句子，说恰好有三个元素满足 Px，而只使用三段论形式无法表达这一点。或者反过来，如果我们通过在 L 中添加量词 Qx，其含义为“存在不可数多个元素 x，使得...”，那么 L 可以平凡地归约到 L′′，但是下降的洛伊登海姆-斯科勒姆定理立即表明 L′′不能归约到 L。

这些概念对于分析数据库查询语言的强度非常有用。我们可以将数据库的可能状态视为结构，而一个简单的是/否查询则成为一个句子，如果数据库是其模型，则引出答案是是，否则是否。如果一个数据库查询语言不能归约到另一个语言，那么第一个语言可以表达一些在第二个语言中无法表达的查询。

因此，我们需要比较语言表达能力的技术。其中一种最强大的技术是由 Ehrenfeucht 和 Fraïssé 之间的来回游戏构成，这两个玩家是 Spoiler 和 Duplicator；有关详细信息，请参见逻辑和游戏的条目。例如，想象一下，我们在两个结构 A 和 B 之间玩常规的一阶来回游戏 G。这些游戏的理论表明，如果某个一阶句子 ϕ 在 A 和 B 中恰好有一个为真，则存在一个从 ϕ 可计算出的数 n，使得 Spoiler 在至多 n 步内有一种策略可以保证他获胜。因此，相反地，要显示一阶逻辑无法区分 A 和 B，只需证明对于每个有限的 n，Duplicator 有一种策略可以保证她在前 n 步内不会输掉 G。如果我们成功地证明了这一点，那么就可以得出结论，任何能区分 A 和 B 的语言都不能归约到结构 A 和 B 的一阶语言。

这些来回游戏非常灵活。首先，它们在有限结构上和无限结构上同样有意义；许多经典模型论的其他技术都假设结构是无限的。它们还可以顺利地适应许多非一阶语言。

1969 年，Per Lindström 使用来回游戏给出了一些关于一阶逻辑的抽象特征，以描述其表达能力。他的其中一个定理表明，如果 L 是一个具有签名 K 的语言，L 在所有一阶句法操作下都是封闭的，并且 L 遵循单句的下降 Loewenheim-Skolem 定理和紧致性定理，那么 L 可以归约为具有签名 K 的一阶语言。这些定理非常有吸引力；参见 Ebbinghaus、Flum 和 Thomas 的第 XII 章，其中有一个很好的解释。但是它们从未完全实现它们的承诺。很难找到其他逻辑的类似特征描述。即使对于一阶逻辑，也很难准确地看出这些特征描述告诉我们什么。但是非常粗略地说，它们告诉我们，一阶逻辑是具有两个特性的唯一逻辑：（1）我们可以使用它来表达关于有限模式的任意复杂的事物，（2）它对于区分一个无限基数和另一个无望。

这两个属性（1）和（2）只是一阶逻辑的属性，这些属性使亚伯拉罕·罗宾逊能够构建他的非标准分析。背景是，当莱布尼茨发明微积分时，他使用了无穷小，即大于 0 且小于所有 1/2、1/3、1/4 等的数字。不幸的是，没有这样的实数。在 19 世纪，莱布尼茨风格的所有定义和证明都被重写为使用极限而不是无穷小。现在，让 R 成为由实数域和我们愿意给予名称的任何结构特征组成的结构：当然有加法和乘法，也许有排序，整数集，函数 sin 和 log 等。让 L 成为其签名为 R 的一阶语言。由于 L 的表达能力强大，我们可以将微积分的任意数量的定理写成 L 的句子。由于 L 的表达能力较弱，我们无法用 L 来表达 R 没有无穷小的事实。事实上，罗宾逊使用紧致性定理构建了一个结构 R'，它是与 R 具有完全相同的 L 句子的模型，但具有无穷小。正如罗宾逊所示，我们可以使用 R'中的无穷小复制莱布尼茨的论证，从而证明微积分的各种定理在 R'中成立。但这些定理可以用 L 来表达，所以它们在 R 中也必须成立。

由于使用无穷小的论证通常比使用极限的论证更容易可视化，非标准分析是数学分析师的有用工具。雅克·弗勒里奥在他的博士论文（2001 年）中自动化了非标准分析的证明理论，并用它来机械化牛顿的《自然哲学的数学原理》中的一些证明。

## 5. 模型和建模

模拟一个现象是构建一个描述和解释该现象的形式理论。在一个紧密相关的意义上，通过编写对其进行描述的方式，您可以对计划构建的系统或结构进行建模。这些与模型论中的“模型”是非常不同的意义：现象或系统的“模型”不是一个结构，而是一个理论，通常是用形式语言表示的。统一建模语言（UML）是专门为此目的设计的一种形式语言。据报道，澳大利亚海军曾经雇用了一位模型论者来“模拟流体动力学现象”。（请不要启发他们！）

通过一点历史可以看出，“模型”一词是如何具有这两种不同的用法的。在晚期拉丁语中，“modellus”是一种测量设备，例如用于测量水或牛奶。由于语言的变迁，这个词在英语中产生了三个不同的词：mould（模具），module（模块），model（模型）。通常，一个测量物质数量的设备也会对物质施加一种形式。我们可以在奶酪模具上看到这一点，也可以在金属字母（在 17 世纪初被称为“moduli”）上看到这一点，这些字母将墨水传递到印刷纸上。因此，“模型”一词意味着手中的对象表达了世界上其他对象的设计：艺术家的模型承载着艺术家所描绘的形式，克里斯托弗·雷恩（Christopher Wren）的圣保罗大教堂的“模块”用于指导建筑师。

到 17 世纪末，"模型" 这个词已经可以指代一个展示数学构造形式而非现实世界对象的物体。莱布尼兹自夸他在进行数学运算时不需要模型。其他数学家则乐于使用有趣曲面的石膏或金属模型。模型论的模型最初是这种模型的抽象版本，用理论代替曲面的定义方程。另一方面，我们也可以使用现实世界的对象，但通过理论而非手中的物理副本来展示它们的形式；"建模" 就是构建这样的理论。

当科学家用方程描述世界中的现象时，我们会陷入一种令人困惑的中间状态，例如使用指数函数作为解的微分方程。模型是由方程组成的理论，还是这些指数函数本身就是现象的模型？这种情况的例子，其中理论和结构本质上提供了相同的信息，为帕特里克·苏普斯（Patrick Suppes）的观点提供了一些支持，即“模型的概念在数学和经验科学中的含义是相同的”（1969 年，12 页）。一些科学哲学家追求使用非正式版本的模型论模型进行科学建模的想法。有时，这些模型被描述为非语言的——这可能与我们在上文第 1 节中对模型的定义难以调和。

认知科学是一个领域，其中模型和建模之间的区别往往变得模糊。认知科学的一个核心问题是我们如何在我们的思维中表示事实或可能性。如果将这些心理表征形式化，它们就变成了类似于“现象模型”的东西。但是一个严肃的假设是，实际上我们的心理表征与简单的集合论结构有很多共同之处，因此它们在模型论意义上也是“模型”。1983 年，认知科学领域发表了两部有影响力的作品，都以《心理模型》为题。第一部由德德尔·根特纳和阿尔伯特·斯蒂文斯编辑，讨论了人们对物理基本事实的“概念化”，它完全属于“现象建模”的领域。第二部由菲利普·约翰逊-莱尔德撰写，主要涉及推理，并多次引用了我们所说的“模型论语义”。约翰逊-莱尔德传统的研究人员倾向于将他们的方法称为“模型论”，并将其视为与我们所说的模型论在某种意义上有关联。

图片和图表乍一看似乎悬浮在理论和模型之间的中间地带。在实践中，模型论者经常为结构绘制图片，并使用这些图片来思考结构。另一方面，图片通常不带有模型论结构的必要特征，即标签。关于使用图表进行推理的研究正在迅速增长，而这些研究的压倒性趋势是将图片和图表视为一种语言形式，而不是一种结构形式。例如，Eric Hammer 和 Norman Danner（1996）描述了一个“Venn 图的模型论”；Venn 图本身是语法，而模型论是对其含义的集合论解释。（一个有趣的反例是 12 世纪巴格达犹太学者 Abū l-Barakāt 的水平线图表，它们代表结构而不是命题，Abū l-Barakāt 使用它们来表达模型论推论中的三段论。有关详细信息，请参阅 Hodges 2018 关于模型论推论的内容。）

模型论学家 Yuri Gurevich 将抽象状态机（ASM）引入计算机科学中的规范化，作为使用模型论思想的一种方式。根据抽象状态机网站（参见下面的其他互联网资源），

> 任何算法都可以通过适当的抽象状态机在其自然抽象级别上进行建模。... ASM 使用经典数学结构来描述计算的状态；结构是被充分理解的、精确的模型。

下面引用的 Börger 和 Stärk 的书是关于 ASMs 及其用途的权威解释。

今天，你可以通过找到一个好的表示系统来成名和发财。没有理由期望每个这样的系统都能完美地适应模型论的语法/语义框架，但如果模型论的思想在这个领域继续发挥重要作用，那将是令人惊讶的。

## 6. 模型论作为哲学问题的来源

上面的部分考虑了一些构建模型论的基本思想，指出了这些思想在数学模型论或其他使用模型论的学科中的一些表现方式。除了广义上哲学家使用思想之外，这些都不是特别哲学的。但随着数学模型论对哲学家越来越熟悉，它越来越成为哲学问题的材料来源。2018 年出现了两本直接涉及模型论哲学应用的书籍，尽管它们的方式非常不同。

在第一本书《Button 和 Walsh 2018》中，作者们向读者发出邀请，帮助创建一个逐渐形成的学科“哲学与模型论”。（这在书中大量精心编写的材料中部分被证明是虚假的。）总的来说，数学是基本哲学担忧的来源。例如，数学家提到我们与之没有因果关系的实体（如 π 或实数集），这引发了关于我们如何将这些实体识别给自己或他人，以及我们如何发现有关它们的事实的问题。这些问题并不是新问题，也不是特有于模型论的问题；但数学模型论是数学中最关注“参照”、“同构类型”和“不可辨别性”的部分，这些概念直接涉及哲学问题领域。作者对这些领域的关键讨论问题进行了清晰的分析。

第二本书《Baldwin 2018》将 1970 年至今的数学模型论作为哲学数学实践学科的材料来源进行了阐述。这门学科研究特定数学家在其历史背景下的工作，并提出诸如：为什么这位数学家更喜欢用 X 来分类而不是用 Y 来分类？为什么这群数学研究人员选择使用某种语言或符号集来形式化他们的主题？他们是如何决定什么要形式化，什么要保留非形式化的？这门学科在一定程度上是历史性的，但它寻求对历史选择的概念上的理论依据（参见数学风格和数学解释的条目）。Baldwin 在数学模型论方面有着悠久的历史，因此他可以根据个人知识回答上述问题。这本书提供了丰富的例子，配有有用的图片和极少的技术符号。

<!--md-padding-ignore-begin-->
## Bibliography

### Introductory texts

* Doets, K., 1996, *Basic Model Theory*, Stanford: CSLI Publications.
* Hodges, W., 1997, *A Shorter Model Theory*, Cambridge: Cambridge University Press.
* Manzano, M., 1999, *Model Theory*, Oxford: Oxford University Press.
* Rothmaler, P., 2000, *Introduction to Model Theory*, Amsterdam: Gordon and Breach.

### Model-theoretic definition

* Frege, G., 1906, “Grundlagen der Geometrie”, *Jahresbericht der deutschen Mathematikervereinigung*, 15: 293–309, 377–403, 423–430.
* Gergonne, J., 1818, “Essai sur la théorie de la définition”, *Annales de Mathématiques Pures et Appliquées*, 9: 1–35.
* Hilbert, D., 1899, *Grundlagen der Geometrie*, Leipzig: Teubner.
* Hodges, W., 2008, “Tarski’s theory of definition”, in Patterson, D. *New Essays on Tarski and Philosophy*, Oxford: Oxford University Press, pp. 94–132.
* Lascar, D., 1998, “Perspective historique sur les rapports entre la théorie des modèles et l’algèbre”, *Revue d’histoire des mathématiques*, 4: 237–260.
* Mancosu, P., Zach, R. and Badesa, C., 2009, “The development of mathematical logic from Russell to Tarski”, in L. Haaparanta (ed.), *The Development of Modern Logic*, Oxford: Oxford University Press, pp. 318–470.
* Pasch, M., 1882, *Vorlesungen über Neuere Geometrie*, Berlin: Springer-Verlag.
* Robinson, A., 1952, “On the application of symbolic logic to algebra”, *Proceedings of the International Congress of Mathematicians* (Cambridge, MA, 1950, Volume 1), Providence, RI: American Mathematical Society, pp. 686–694.
* Suppes, P., 1957, “Theory of definition” in *Introduction to Logic* (Chapter 8), Princeton, NJ: Van Nostrand.
* Tarski, A., 1954, “Contributions to the theory of models, I”, *Indagationes Mathematicae*, 16: 572–581.

### Model-theoretic consequence

* Blanchette, P., 1996, “Frege and Hilbert on consistency”, *The Journal of Philosophy*, 93: 317–336.
* –––, 2012, *Frege’s Conception of Logic*, New York: Oxford University Press.
* Boole, G., 1847, *The Mathematical Analysis of Logic*, Cambridge: Macmillan, Barclay and Macmillan.
* Etchemendy, J., 1990, *The Concept of Logical Consequence*, Cambridge, MA: Harvard University Press.
* Frege, G., 1971, *On the Foundations of Geometry, and Formal Theories of Arithmetic*, E. Kluge (trans.), New Haven: Yale University Press.
* Gómez-Torrente, M., 1996, “Tarski on logical consequence”, *Notre Dame Journal of Formal Logic*, 37: 125–151.
* Hodges, W. 2004, “The importance and neglect of conceptual analysis: Hilbert-Ackermann iii.3”, in V. Hendricks *et al*. (eds.), *First-Order Logic Revisited*, Berlin: Logos, pp. 129–153.
* –––, 2018, “Two early Arabic applications of model-theoretic consequence”, *Logica Universalis*, 12: 37–54.
* Kreisel, G., 1969, “Informal rigour and completeness proofs”, in J. Hintikka (ed.), *The Philosophy of Mathematics*, London: Oxford University Press, pp. 78–94.
* Tarski, A., 1983, “On the concept of logical consequence”, translated in A. Tarski, *Logic, Semantics, Metamathematics*, J. Corcoran (ed.), Indianapolis: Hackett, pp. 409–420.
* van Benthem, J., 1991 [1983], *The Logic of Time: A Model-Theoretic Investigation into the Varieties of Temporal Ontology and Temporal Discourse*, Dordrecht: Reidel, 1983; second edition, Springer, 1991.

### Expressive strength

* Cutland, N., 2009, *Nonstandard Analysis and its Applications*, Cambridge: Cambridge University Press.
* Ebbinghaus, H.-D., and Flum, J., 1999, *Finite Model Theory*, Berlin: Springer-Verlag.
* Ebbinghaus, H.-D., Flum, J. and Thomas, W., 1984, *Mathematical Logic*, New York: Springer-Verlag.
* Fleuriot, J., 2001, *A Combination of Geometry Theorem Proving and Nonstandard Analysis, with Application to Newton’s Principia*, New York: Springer-Verlag.
* Immerman, N., 1999, *Descriptive Complexity*, New York: Springer-Verlag.
* Libkin, L., 2004, *Elements of Finite Model Theory*, Berlin: Springer-Verlag.
* Lindström, P., 1969, “On extensions of elementary logic”, *Theoria*, 35:1–11.
* Loeb, P. and Wolff, M. (eds.), 2000, *Nonstandard Analysis for the Working Mathematician*, Dordrecht: Kluwer.
* Robinson, A., 1967, “The metaphysics of the calculus”, in *Problems in the Philosophy of Mathematics*, I. Lakatos (ed.), Amsterdam : North-Holland, pp. 28–40.

### Models and modelling

* Allwein, G. and Barwise, J. (eds.), 1996, *Logical Reasoning with Diagrams*, New York: Oxford University Press.
* Börger, E. and Stärk, R., 2003, *Abstract State Machines: A Method for High-Level System Design and Analysis*, Berlin: Springer-Verlag.
* Fowler, M., 2000, *UML Distilled*, Boston: Addison-Wesley.
* Garnham, A., 2001, *Mental Models and the Interpretation of Anaphora*, Philadelphia: Taylor and Francis.
* Gentner, D. and Stevens, A. (eds.), 1983, *Mental Models*, Hillsdale, NJ: Lawrence Erlbaum.
* Gurevich, Yuri, 1993, “Evolving Algebras: An Attempt to Discover Semantics”, in E. Börger (ed.), *Specification and Validation Methods*, pp. 9–36, Oxford: Oxford University Press.
* Hammer, E. and Danner, N., 1996, “Towards a Model Theory of Venn Diagrams”, in Allwein and Barwise (eds.) 1996, pp. 109–128.
* Johnson-Laird, P., 1983, *Mental Models: Towards a cognitive science of language, inference, and consciousness*, Cambridge: Cambridge University Press.
* Meijers, A. (ed.), 2009, *Philosophy of Technology and Engineering Sciences*, Amsterdam: Elsevier; see chapters W. Hodges, “Functional modelling and mathematical models”; R. Müller, “The notion of a model, theories of models and history”; and N. Nersessian, “Model based reasoning in interdisciplinary engineering”.
* Moktefi, A. and Shin, S.-J. (eds.), 2013, *Visual Reasoning with Diagrams*, Basel: Birkhäuser.
* Morgan, M. S. and Morrison, M. (eds.), 1999, *Models as Mediators*, Cambridge: Cambridge University Press.
* Pullum, G. K. and Scholz, B. C., 2001, “On the distinction between model-theoretic and generative-enumerative syntactic frameworks”, in *Logical Aspects of Computational Linguistics* (Lecture Notes in Computer Science: Volume 2099), P. De Groote *et al*. (eds.), Berlin: Springer-Verlag, pp. 17–43.
* Stenning, K., 2002, *Seeing Reason*, Oxford: Oxford University Press.
* Suppes, P., 1969, *Studies in the Methodology and Foundations of Science*, Dordrecht: Reidel.

### Philosophy of model theory

* Baldwin, J., 2018, *Model Theory and the Philosophy of Mathematical Practice: Formalization without Foundationalism*, Cambridge: Cambridge University Press.
* Button, T. and Walsh, S., 2018, *Philosophy and Model Theory*, Oxford: Oxford University Press.

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=model-theory). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/model-theory/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=model-theory&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](https://philpapers.org/sep/model-theory/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* [mentalmodelsblog: Mental Models in Human Thinking and Reasoning](http://mentalmodelsblog.wordpress.com/), by Ruth Byrne.
* [Algorithmic Model Theory](https://logic.rwth-aachen.de/Research/AlMoTh/index.html.en), by E. Graedel, D. Berwanger and M. Hoelzel (Mathematische Grundlagen der Informatik, RWTH Aachen)
* [Abstract State Machines](http://www.eecs.umich.edu/gasm/intro.html), by Jim Huggins (no longer maintained)

## Related Entries

[diagrams](https://plato.stanford.edu/entries/diagrams/) | [geometry: in the 19th century](https://plato.stanford.edu/entries/geometry-19th/) | [logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [logical consequence](https://plato.stanford.edu/entries/logical-consequence/) | [logical truth](https://plato.stanford.edu/entries/logical-truth/) | [mathematics, philosophy of](https://plato.stanford.edu/entries/philosophy-mathematics/) | [models in science](https://plato.stanford.edu/entries/models-science/) | [physics: intertheory relations in](https://plato.stanford.edu/entries/physics-interrelate/) | [physics: structuralism in](https://plato.stanford.edu/entries/physics-structuralism/) | [square of opposition](https://plato.stanford.edu/entries/square/) | [Tarski, Alfred](https://plato.stanford.edu/entries/tarski/) | [Tarski, Alfred: truth definitions](https://plato.stanford.edu/entries/tarski-truth/)

[Copyright © 2020](https://plato.stanford.edu/info.html#c) by  
[Wilfrid Hodges](http://wilfridhodges.co.uk/) <[*wilfrid.hodges@btinternet.com*](mailto:wilfrid%2ehodges%40btinternet%2ecom)>
<!--md-padding-ignore-end-->
