# 传统逻辑方阵 square of opposition (Terence Parsons)

_首次发表于 1997 年 8 月 8 日，实质性修订于 2017 年 4 月 12 日_

这篇文章追溯了逻辑方阵的历史发展，逻辑方阵是一种传统上体现在方形图中的一组逻辑关系。这一学说体系为逻辑工作提供了两千多年的基础。在大部分历史中，逻辑学家们认为否定的特殊命题（“某些 S 不是 P”）如果主语为空，则是虚假的。这验证了方阵中体现的逻辑定律，并保护了这一学说免受现代批评。除了方阵之外，有时还会采用一些额外的原则（“对偶”和“逆否”），它们确实会导致不一致。到了 19 世纪，一套不一致的学说被广泛采用。斯特劳森（Strawson）在 1952 年试图恢复方阵，但并不适用于传统学说；它确实挽救了 19 世纪的版本，但代价是在一系列推理中从真实性到虚假性的转变。

***

## 1. 引言

逻辑方阵的学说起源于公元前四世纪的亚里士多德，并一直出现在逻辑教材中。尽管在最近几十年受到严厉批评，但它仍然经常被提及。本文的目的是从 21 世纪初的角度追溯其历史，并涉及与空术语相关的密切相关的学说。

逻辑方阵是一个以图表形式体现的一组命题。图表对于这些命题并非必要，只是一种有用的方式来保持它们的准确性。这些命题涉及四种逻辑形式之间的逻辑关系：

| _NAME_ | _FORM_    | _TITLE_ |
| ------ | --------- | ------- |
| **A**  | 每个 S 都是 P | 普遍肯定命题  |
| **E**  | 没有 S 是 P  | 全部否定    |
| **I**  | 一些 S 是 P  | 特殊肯定    |
| **O**  | 一些 S 不是 P | 特殊否定    |

传统对立方阵的图表是：

> <img src="https://plato.stanford.edu/entries/square/image-a.jpg" alt="traditional square" data-size="original">

这个图表中体现的论点我称之为“方阵”。它们是：

\*\* 方阵\*\*

* ‘每个 S 都是 P’和‘一些 S 不是 P’是对立的。
* ‘没有 S 是 P’和‘一些 S 是 P’是对立的。
* ‘每个 S 都是 P’和‘没有 S 是 P’是相对的。
* ‘一些 S 是 P’和‘一些 S 不是 P’是对立的。
* ‘一些 S 是 P’是‘每个 S 都是 P’的子相反命题。
* ‘一些 S 不是 P’是‘没有 S 是 P’的子相反命题。

这些论点被以下解释补充：

* 如果两个命题既不能同时为真也不能同时为假，则它们是矛盾的。
* 如果两个命题不能同时为真，但可以同时为假，则它们是对立的。
* 两个命题如果它们不能同时为假但可以同时为真，则它们是互为对立命题。
* 如果一个命题必须为真，当它的超级命题为真时，而当这个命题为假时，超级命题必须为假，则这个命题是另一个命题的子命题。

可能在 20 世纪之前没有人持有完全这些观点而没有持有某些紧密相关的观点。与传统图表相关的最常见的紧密相关观点是 E 和 I 命题的简单转换；也就是说，“没有 S 是 P”在真值上等同于“没有 P 是 S”，“一些 S 是 P”在真值上等同于“一些 P 是 S”。传统教义与简单转换相结合是一个非常自然的观点进行讨论。这是亚里士多德的观点，并且在 19 世纪末之前被广泛认可（或者至少没有受到质疑）。我将这个完整的教义称为“\[方阵]”：

> \[方阵] =df 方阵 + “E 和 I 形式简单转换”

其中

> 命题简单转换当且仅当它在真值上与通过交换其术语得到的命题必然等价。

因此，\[逻辑方阵]包括图表中所示的关系，以及“没有 S 是 P”等同于“没有 P 是 S”的观点，以及“一些 S 是 P”等同于“一些 P 是 S”的观点。

### 1.1 逻辑方阵的现代修订

大多数当代逻辑教材将传统形式符号化如下：

| 每个 S 都是 P | ∀_x_(_S\*\*x_→_P\*\*x_)   |
| --------- | ------------------------- |
| 没有 S 是 P  | ∀_x_(_S\*\*x_→ ¬_P\*\*x_) |
| 一些 S 是 P  | ∃_x_(_S\*\*x_&_P\*\*x_)   |
| 一些 S 不是 P | ∃_x_(_S\*\*x_& ¬_P\*\*x_) |

如果采用这种符号化方法，并结合对联结词和量词逻辑的标准观点，传统方阵所体现的关系大多会消失。现代的逻辑方阵如下所示：

> 现代修订的方阵：
>
> <img src="https://plato.stanford.edu/entries/square/image-b.jpg" alt="modern revised square" data-size="original">

这个结构太少，不太有用，所以不常用。根据阿隆佐·邱奇（Alonzo Church）的说法，这种现代观点可能起源于 19 世纪末\[1]。这种四种形式的表示现在普遍被接受，除了对左侧列的子代丧失的疑虑。大多数英语使用者倾向于理解“每个 S 都是 P”需要其真实性需要有一些 S，并且如果强加了这个要求，那么肯定命题的子代就成立了。每个现代逻辑教材都必须解决“每个 S 都是 P”在没有 S 的情况下为真的明显不合理性。对此的常见辩护通常是这是一种为逻辑目的而设计的逻辑符号，它并不声称捕捉符号所类似的自然语言形式的每一个细微差别。因此，也许“∀x(S**x → P**x)”确实不能完全公正地反映“每个 S 都是 P”的普通用法，但这不是逻辑的问题。如果你认为“每个 S 都是 P”需要其真实性需要有 S，那么你可以简单而容易地得到这个结果：只需通过在符号化中添加一个额外的合取式来表示“每个 S 都是 P”的难以对付的用法，就像这样：∀x(S**x → P**x) & ∃xSx。

这种辩护保持了逻辑的完整性，也满足了反对意见，这不是一个逻辑上的反对意见，而只是对自然语言表示的保留。

作者通常会解释，科学中我们经常希望进行概括，即使我们不确定它们是否存在，有时甚至我们知道它们不存在，他们有时会将这作为符号化 A 形式的辩护，以使其成为空虚真。这是一种方便符号化的论证，与逻辑一致性无关。

### 1.2 对传统方阵的反驳

为什么传统方阵需要修订？这个论证很简单：\[2]

> 假设“S”是一个空术语；它对任何事物都不成立。那么 I 形式：“有些 S 是 P”是假的。但是它的矛盾形式 E：“没有 S 是 P”必须是真的。但是随之而来的子命题 O 形式：“有些 S 不是 P”必须是真的。但是那是错误的，因为没有任何 S 存在。

关于这个论证的谜团是，为什么在面对这个考虑的情况下，传统方阵的学说在 20 多个世纪内仍然被维持下来。难道 20 个世纪的逻辑学家们如此愚钝，以至于没有注意到这个明显的致命缺陷吗？还是有其他的解释？

一个可能性是，在 20 世纪之前的逻辑学家可能认为没有术语是空的。你会经常看到这种观点被称为其他人持有的观点。\[3] 但是除了一些非常特殊的例外情况（在下面讨论），我找不到在 19 世纪之前持有这种观点的人。许多作者不讨论空术语，但那些讨论的人通常认为它们存在。明确拒绝空术语从来都不是一个主流选项，即使在 19 世纪也是如此。

另一种可能性是，当主语为空时，特定的 I 形式可能是真实的。这是关于不定命题的一种常见观点，当它们以泛指方式阅读时，比如“一只渡渡鸟是一只鸟”，这种命题现在可能是真实的，而现在并没有任何渡渡鸟，因为成为一只鸟是成为一只渡渡鸟的本质的一部分。但是，这种具有空主语的不定命题的真实性与方阵中出现的命题形式无关。因为虽然不定的“一只渡渡鸟吃了我的午餐”可能被认为等同于特定命题“一些渡渡鸟吃了我的午餐”，但是像“一只渡渡鸟是一只鸟”这样的泛指不定命题是完全不同的，它们的语义与方阵中的量化句子无关。

实际上，在存在空项的情况下，\[SQUARE]的传统学说是完全一致的。这是因为在传统解释中，O 形式缺乏存在性导入。如果 O 形式的主语项为空，则 O 形式是（空虚地）真实的，而不是假的，因此\[SQUARE]的逻辑相互关系是无可非议的。接下来，我将追溯这种观点的发展。

## 2. 逻辑方阵的起源

我所称之为\[SQUARE]的学说出现在亚里士多德的著作中。它始于《解释学》第 6-7 章，其中包含三个主张：A 和 O 是对立的，E 和 I 是对立的，A 和 E 是相对的（17b.17-26）：

> 当一个肯定陈述和一个否定陈述在普遍意义上互为相反时，我称之为对立的对立，例如每个人都是白色的-不是每个人都是白色的，没有人是白色的-有些人是白色的。但是我称普遍肯定陈述和普遍否定陈述为相对的对立，例如每个人都是公正的-没有人是公正的。因此，它们不能同时为真，但它们的相反陈述可能都对同一事物为真，例如不是每个人都是白色的-有些人是白色的。

这给我们带来了以下逻辑方阵的片段：

> <img src="https://plato.stanford.edu/entries/square/image-c.jpg" alt="square fragment" data-size="original">

但是其余的是暗示的。例如，有足够的证据表明 I 和 O 是互为反对命题：它们不能同时为假。假设 I 为假。那么它的矛盾命题 E 为真。所以 E 的对立命题 A 为假。所以 A 的矛盾命题 O 为真。这驳斥了 I 和 O 同时为假的可能性，从而填补了互为反对命题的底部关系。亚律也是成立的。假设 A 形式为真。那么它的对立命题 E 形式必须为假。但是然后 E 形式的矛盾命题 I 必须为真。因此，如果 A 形式为真，那么 I 形式也必须为真。一个类似的论证也证明了从 E 到 O 的亚律。结果是方阵。

在《先验分析》I.2，25a.1-25 中，我们得到了额外的主张，即 E 和 I 命题可以简单地转换。将这与《解释学》的教义结合起来，我们就得到了完整的\[方阵]。\[4]

### 2.1 图解

附带并说明该学说的图表已经出现在公元 2 世纪；博伊修斯将其纳入他的著作中，并传承至黑暗时代直至中世纪高峰时期，再传至今天。这类图表在后期古典和中世纪的作者中很受欢迎，他们用它们来达到各种目的。（类似的模态命题的图表尤其受欢迎。）

### 2.2 亚里士多德对 O 形式的阐述

阿克里尔的翻译中包含了一些意外之处：亚里士多德对 O 形式的表述并不是熟悉的“有些 S 不是 P”或其变体之一；而是“不是每个 S 都是 P”。通过这种措辞，亚里士多德的学说自动摆脱了现代的批评。（这适用于他在《解释学》中的观点。）再次假设“S”是一个空术语，并假设这使得 I 形式“有些 S 是 P”为假。它的对立形式，E 形式：“没有 S 是 P”，因此为真，这就导致了亚里士多德的表述中的 O 形式：“不是每个 S 都是 P”，因此必须为真。当 O 形式被表述为“有些 S 不是 P”时，这让我们感到困扰，但当它被表述为“不是每个 S 都是 P”时，它似乎显然是正确的。请记住，我们承认“每个 S 都是 P”具有存在性的含义，因此如果“S”为空，则 A 形式必须为假。但是，根据亚里士多德的方阵，这样“不是每个 S 都是 P”应该为真。

在这个观点上，肯定命题具有存在意义，而否定命题则没有——这一点在中世纪后期成为了一个普遍原则。\[6]因此，古人并没有像亚里士多德所阐述的那样看到方阵的不连贯，因为他们并没有看到不连贯之处。

### 2.3 O 形式的改写

亚里士多德的著作主要通过波修斯的翻译和评论传播到拉丁西方，波修斯的著作写于公元 500 年后。在他对《解释学》的翻译中，波修斯保留了亚里士多德对 O 形式的措辞：“并非每个人都是白色的。”但是当波修斯对这段文字进行评论时，他用现在著名的图表来说明亚里士多德的学说，并使用了“有些人并不公正”的措辞。\[7]所以在拉丁语中，这对他来说似乎是一个自然的等价物。对我们来说，在英语中看起来很奇怪，但他并不在意。

十二世纪初，阿贝拉尔德对博伊修斯的 O 形式的措辞提出了异议，但阿贝拉尔德的著作并没有广泛影响，除了他和他的一些追随者，人们通常在代表方阵的图表中使用“某些 S 不是 P”来表示 O 形式。他们是否允许 O 形式是真空真的？也许我们可以通过看他们认可的其他教义来找到一些线索，这些教义包括三段论的理论以及对偶和逆转的教义。

## 3. 三段论的（不）相关性

逻辑学中亚里士多德传统的一个核心关注点是范畴三段论的理论。这是关于两个前提论证的理论，其中前提和结论共享三个术语，每个命题包含其中两个术语。这个领域的独特之处在于每个人都同意哪些三段论是有效的。三段论的理论在一定程度上限制了形式的解释。例如，它确定了 A 形式具有存在性的含义，至少如果 I 形式具有的话。因为其中一个有效的模式（达拉普蒂）是：

> 每个 C 都是 B 每个 C 都是 A 所以，一些 A 是 B

如果 A 形式缺乏存在性导入，则此命题无效；如果 A 形式具有存在性导入，则此命题有效。它被认为是有效的，因此我们知道如何解释 A 形式。然后自然而然地问及 O 形式；这些三段论告诉我们关于 O 形式的什么？答案是它们告诉我们什么也没有。这是因为亚里士多德没有讨论三段论的弱化形式，即当我们已经能够得出相应的普遍命题时，我们得出一个特殊命题的情况。例如，他没有提到以下形式：

> 没有 C 是 B 每个 A 都是 C 所以，一些 A 不是 B

如果人们经过深思熟虑地支持或反对这种形式的有效性，那显然与对 O 形式的理解是相关的。但是这些削弱的形式通常被忽视了。

## 4. 对偶和逆否的原理

另一个主题的一部分与 O 形式的解释有关。人们对亚里士多德关于“无限”否定的讨论感兴趣，这是使用否定从一个术语形成另一个术语，而不是从一个命题形成另一个命题。在现代英语中，我们使用“非”来表示这个概念；我们说“非马”，这个概念适用于那些不是马的事物。在中世纪拉丁语中，“非”和“不”是同一个词，因此这个区别需要特别讨论。使用无限否定变得很常见，逻辑学家们对其进行了深思熟虑。十二、十三世纪的一些作家采用了一种被称为“对偶转换”的原则。该原则表明：

* “每个 S 都是 P”等价于“每个非 P 都是非 S”
* “一些 S 不是 P”等价于“一些非 P 不是非 S”

不幸的是，这个原则（不被亚里士多德\[10]认可）与可能存在空的或普遍的术语的想法相冲突。因为在普遍情况下，它直接导致了真理：

> 每个人都是一个存在的

到虚假的情况：

> 每一个非存在的东西都不是人类

（这是错误的，因为普遍肯定命题具有存在性的含义，而且不存在非存在的东西）。而在特殊情况下，它从真实性中导出（请记住，O 形式没有存在性的含义）：

> 嵌合体不是人类

对于虚假性：

> 一个非人不是一个非奇美拉

这些是布里丹在 14 世纪使用的例子，用来展示逆对命题的无效性。不幸的是，到了布里丹的时代，逆对原则已经被一些作者提倡。这个教义已经出现在 12 世纪的几个文献中\[11]，并在 13 世纪得到了彼得·西班牙人\[12]、威廉·谢伍德\[13]和罗杰·培根\[14]的认可。到了 14 世纪，与逆对命题相关的问题似乎已经广为人知，作者们通常引用这个原则，并指出它是无效的，但在附加假设存在于主词下的事物的情况下，它变得有效。例如，威尼斯的保罗在他广泛出版的 14 世纪末的《逻辑小品》中给出了传统的方阵和简单转换\[15]，但拒绝了逆对转换，基本上是因为布里丹的理由。

逆转原则也发生了类似的情况。这个原则指出，如果你将谓词术语从有限变为无限（或无限变为有限），你可以将命题从肯定变为否定，反之亦然。一些例子包括：

| 每个 S 都是 P | = | 没有 S 是非 P  |
| --------- | - | ---------- |
| 没有 S 是 P  | = | 每个 S 都是非 P |
| 一些 S 是 P  | = | 一些 S 不是非 P |
| 一些 S 不是 P | = | 一些 S 是非 P  |

亚里士多德在《解释学》中讨论了一些反转的例子。鉴于这些形式的真值条件，当从肯定到否定移动时，这些推理是有效的，但在反向方向上，当术语可能为空时，这些推理是无效的，正如布里丹明确指出的那样。\[16] 一些布里丹之前的中世纪作家接受了错误的版本，而一些作家则没有。\[17]

## 5. 后来的发展

### 5.1 带有空术语的否定命题

在威尼斯的保罗的另一部重要作品《逻辑大全》（约 1400 年）中，他给出了一些与真正的普遍否定命题相关的具体否定命题的例子。他的例子是具有明显空主语术语的真正具体否定命题：\[18]

> 有些是驴的人不是驴。
>
> 与存在不同的东西不是存在。
>
> 逻辑方阵中，逻辑方阵中反对的某个事物并不是逻辑方阵中反对的某个事物。
>
> 逻辑方阵不存在。
>
> 一个驴所生的某个男人并不是他的儿子。

因此，在 14 世纪末期，空词的问题已经得到明确认识。它们在理论上是被允许的，O 形式明确没有存在性的含义，而逻辑理论在去除了错误的对偶和逆转的特例后，是一致的，并且对 20 世纪的批评具有免疫力。

### 5.2 带有空词的肯定命题

普遍肯定命题的主语为空的事实与亚里士多德的科学理论相冲突。亚里士多德认为“每个人都是动物”是一个必然真理。如果是这样，它在任何时候都是真的。因此，在任何时候它的主语都不为空。因此，在任何时候都有人类存在。但主导的神学认为，在创世的最后一天之前没有人类存在。因此存在矛盾。

奥克姆通过放弃亚里士多德理论的部分来避免这个问题：

> 尽管与亚里士多德的文本相冲突，但根据真理来说，关于那些涉及可腐败事物的命题中，没有一种完全肯定且完全关于现在的命题能够成为演绎的原则或结论，因为任何这样的命题都是偶然的。因为如果有一些这样的命题是必然的，似乎尤其是对于这个命题“人是理性动物”。但这是偶然的，因为它遵循“人是理性动物，因此人是动物”，进一步“因此人由身体和感性灵魂组成”。但这是偶然的，因为如果没有人，那将是错误的，因为涉及到错误的\[事物]，因为它会暗示着某物由身体和灵魂组成，而这将是错误的。\[奥克姆 SL III.2.5]

如果科学理论中的命题具有不寻常的含义，矛盾也可能消失。一个选择是，在科学理论中，普遍肯定命题被理解为普遍化的条件句，就像今天的理解一样。这不会影响它们在科学理论之外的用法中不是条件句的事实。尽管德·雷克（1973 年，52 页）表示奥克姆持有这样的观点，但他似乎明确地拒绝了这一观点，他说“人是理性动物”不等同于“如果一个人是，则一个人是理性动物”，因为这是一个条件句而不是一个范畴句。\[奥克姆 SL II.11]

布里丹的观点更加简洁。他认为，在从事科学理论时，主题不仅限于当前存在的事物。相反，命题具有其通常的意义，但主题范围扩大了。当使用“人类”一词时，讨论的是每一个人类，包括过去和未来的人类，甚至可能的人类。\[布里丹 SdD 4.3.4] 在这样的理解下，“每个人类都是动物”的主题根本不是空的。

逻辑学的研究在接下来的几个世纪中继续进行，尽管大部分研究已经失落并且影响很小。但是，空词的问题得到了正面的回应，并且在中世纪传统中提出的解决方案与\[逻辑方阵]一致。我在这里依赖于 Ashworth 1974 年的报告，他在讨论后中世纪对反对命题的讨论中报告了最常见的主题。其中一个主题是，当应用于普遍或空词时，反对命题是无效的，原因与布里丹给出的原因相同。O 形式明确表示缺乏存在性的重要性。第二个主题，Ashworth 表示这是最常见的说法，也可以在布里丹的著作中找到：附加推理，如反对命题，只有在附加前提断言所涉及的术语是非空的情况下才有效。

### 5.3 一个奇怪的现象

有一种奇怪的观点至少出现了两次，这可能导致没有空的术语。在 13 世纪，拉尼的兰伯特（有时被认为是奥克塞尔的兰伯特）提出了这样一个观点，即诸如“奇美拉”之类的术语代表不存在的事物必须“回归不存在的事物”。因此，如果我们假设没有玫瑰存在，那么术语“玫瑰”代表不存在的事物。\[19]一个相关的观点在更晚的时候也出现了；阿什沃斯报告说，曼古斯·布兰切卢斯·法文蒂努斯认为负面术语如“非人”是真实的非存在者，并由此得出结论：“非人是奇美拉”是真实的（显然假设“奇美拉”也是真实的非存在者）。\[20]然而，这两种观点似乎都没有得到明确的发展，也没有被广泛采纳。\[21]而且，也不清楚它们中的任何一种是否被认为导致没有空的术语。

### 5.4 现代、文艺复兴和 19 世纪

根据阿什沃斯\[22]的说法，逻辑的严肃和复杂研究在 16 世纪的第三十年代左右结束。以下（17 世纪）的波尔图瓦尔逻辑似乎是典型的，它的作者经常暗示逻辑是琐碎和无关紧要的。它的教义包括对逻辑方阵的讨论，但对 O 形式的讨论非常模糊，没有人能确定其确切的真值条件，而且显然没有表明对存在性问题的意识，尽管作者们陈述了 E 形式蕴含 O 形式（第 3 部分第 3 章的第 4 个推论）。这似乎是接下来一段时间内流行的教材的典型特征。在 19 世纪，英国和美国显然最广泛使用的教科书是韦特利的《逻辑要素》。韦特利提供了传统的逻辑方阵教义，没有讨论存在性问题或空词的问题。他包括了对等价转换的有问题的原则（他称之为“否定转换”）：

>

他还支持逆转：\[23]

* 一些 A 不是 B 等同于一些 A 不是-B，因此它转化为一些不-B 是 A。

他说这个原则“在奥尔德里奇中找不到”，但它“经常使用”\[24]。这种“经常使用”一直延续下去；19 世纪后期和 20 世纪初的英美教科书继续支持逆转（也称为“无限化”或“置换”）和对偶转换（也称为“推理转换”）\[25]。这种完整的 19 世纪传统只有在禁止空（和普遍）术语的假设下才是一致的，但作者似乎对此不知情；Keynes 1928 年，126 页，慷慨地说：“这个假设似乎在逻辑的传统处理中被隐含地做出了。”德摩根在明确做出这个假设方面是不典型的：在他 1847 年的著作中（第 64 页），他禁止使用普遍术语（如果 A 是空的，非 A 将是普遍的），但在同一本书的后面（第 111 页）他通过将这视为一种理想化来证明忽略空术语的合理性，因为并非所有的读者都是数学家\[26]。

在 20 世纪，卢卡谢维奇也发展了一种依赖于空项的缺席的三段论版本；他将该系统归因于亚里士多德，从而帮助培养了古代人对空项的无知的传统。

如今，逻辑教材分为基于当代逻辑的教材和基于亚里士多德传统或 19 世纪传统的教材，但即使许多教授三段论的教材也是以现代方式解释其形式，因此例如，子命题的推论被忽略了。因此，传统的方阵，按传统方式解释，现在大多被放弃了。

## 6. 斯特劳森的辩护

在二十世纪，逻辑工具和技术在重新评估过去的学说中有许多创造性的应用。人们自然会想知道是否有一种巧妙的解释，将存在性引入到 O 形式中，并在不禁止空的或普遍的术语的情况下理解它，从而使传统学说与现代观点相一致。彼得·吉奇（Peter Geach）在 1970 年的 62-64 页中表明，可以通过使用一种不自然的解释来实现这一点。彼得·斯特劳森（Peter Strawson）在 1952 年的 176-78 页中有一个更宏伟的目标。斯特劳森的想法是通过采用非经典的真值观和重新定义有效性的逻辑关系来证明这个方阵。首先，他建议我们需要假设一个主语术语为空的命题既不是真的也不是假的，而是完全缺乏真值。然后我们说，如果不存在 Q 和 R 的实例，使得 Q 的实例为真且 R 的实例为假，则 Q 蕴含 R。例如，A 形式“每个 S 都是 P”蕴含 I 形式“一些 S 是 P”，因为当相应的 I 形式的实例为假时，没有 A 形式的实例为真。涉及空术语的棘手情况最终被证明是一个或两个形式都缺乏真值的实例，而这些与蕴涵无关。通过这个修订后的蕴涵解释，如果它们的措辞如下所示，所有“传统”的逻辑关系都可以得出：

| 矛盾关系： | A 和 O 形式相互蕴含各自的否定，E 和 I 形式也是如此。A 形式的否定蕴含（未否定的）O 形式，反之亦然；E 和 I 形式也是如此。 |
| ----- | --------------------------------------------------------------------- |
| 对立关系： | A 和 E 形式相互蕴含对方的否定                                                     |
| 互补关系： | I 形式的否定蕴含（未否定的）O 形式，反之亦然。                                             |
| 次级关系： | A 形式蕴含 I 形式，E 形式蕴含 O 形式。                                              |
| 对话：   | E 和 I 形式各自包含它们自己的对话。                                                  |
| 对偶：   | A 和 O 形式各自蕴含其逆否命题。                                                    |
| 对立命题： | 每个形式都蕴含其对立命题。                                                         |

然而，这些教义并不是\[逻辑方阵]的教义。\[逻辑方阵]的教义完全以真值的可能性为基础，而不是以蕴涵为基础。因此，“蕴涵”对于\[逻辑方阵]是无关紧要的。事实证明，斯特劳森对真值条件的修订确实保留了\[逻辑方阵]的原则（这些原则可以通过案例轻松检查）\[27]，但并没有保留\[逻辑方阵]的附加转换原则，也没有保留传统的对偶或逆否原则。例如，斯特劳森重新解释的转换版本适用于 I 形式，因为任何 I 形式的命题都蕴涵其自身的对偶：如果“某些 A 是 B”和“某些 B 是 A”都有真值，那么两者都不会有空的主语术语，因此如果两者都不缺乏真值，并且如果其中一个为真，另一个也将为真。但是原始的转换教义说，I 形式及其对偶总是具有相同的真值，在斯特劳森的观点上是错误的；如果存在 A 但不存在 B，则“某些 A 是 B”为假，“某些 B 是 A”根本没有真值。对于逆否和逆转同样适用类似的结果。

斯特劳森讨论的“传统逻辑”与 19 世纪逻辑教材的逻辑非常接近，而不是之前两千年流行的版本\[28]。但是，尽管他确实挽救了 19 世纪逻辑的一个版本，但他所挽救的观点无法满足制定逻辑原则的目的，正如蒂莫西·斯迈利在 1967 年的《心灵》杂志的一篇简短注释中指出的那样\[29]。人们一直认为逻辑方阵体现了人们进行推理和构建推理链的原则。但是，如果你将斯特劳森的蕴涵串联在一起，你可以从真理中推导出错误，这是任何传统中都不会被认为是合法的。例如，从这个真理开始（主语术语不为空）：

> 没有人是妖怪。

通过转换，我们得到：

> 没有嵌合体是人。

通过反转：

> 每个妄想是一个非人。

通过次级推论：

> 一些妄想是一个非人。

通过转换：

> 一些非人类是嵌合体。

由于存在非人类，结论不是无真值的，由于不存在嵌合体，它是假的。因此，我们从一个真命题过渡到一个假命题。（这个例子甚至不涉及有问题的 O 形式。）所有步骤都得到了斯特劳森学说的验证。因此，斯特劳森达到了他保留被普遍认为构成传统逻辑的某些模式的目标，但代价是牺牲了逻辑在扩展推理中的应用。

## Bibliography

* Abelardus, Petrus, 11th–12th century. _Dialectica_, L. M. de Rijk (ed.), Assen: Van Gorcum & Co., 1970.
* Aldrich, Henry, 1692. _Artis Logicæ Compendium_, Oxonii: E. Theatro Sheldoniano.
* Aristotle, 4th century B.C.E. _De Interpretatione_ and _Prior Analytics_, in Jonathan Barnes (ed.), _The Complete Works of Aristotle_, Princeton: Princeton University Press, 1984.
* Ashworth, E. J., 1974. _Logic and Language in the Post-Medieval Period_, Dordrecht: Reidel.
* –––, 1978. “Existential Assumptions in Late Medieval Logic,” _American Philosophical Quarterly_, 10: 141–47.
* Bacon, Roger, 13th century. _The Art and Science of Logic_, translated by Thomas S. Maloney, Toronto: Pontifical Institute of Mediaeval Studies, 2009.
* Brentano, Franz, 1874. _Psychologie vom Empirischen Standpunkte_, Leipzig: Dunker & Humbolt.
* Buridan, John, 14th century. _Tractatus de Suppositionibus_, in Maria Elena Reina (ed.), “Giovanni Buridano: _Tractatus de Suppositionibus_,” _Rivista critica di storia della filosofia_, 12 (1957): 175–208. Translated in King 1985.
* –––, 14th century. _Tractatus de Consequentiis_, in Hubert Hubien, _Iohannis Buridani tractatus de consequentiis: Édition critique_ (_Philosophes médiévaux_: Volume XVI), Louvain: Publications universitaires, 1976. Translated in King 1985.
* –––, 14th century. _Summulae de Dialectica_, translated in Klima, Gyula, _John Buridan: Summulae de Dialectica_, Yale University Press, New Haven, 2001.
* Burley, Walter, 14th century. “De Suppositionibus,” in Stephen Brown, “Walter Burleigh’s Treatise _De Suppositionibus_ and Its Influence on William of Ockham,” _Franciscan Studies_ 32 (1972): 15–64. Translated (part) in Spade 1997.
* –––, 14th century. _De puritate artis logicae tractatus longior_, in Philotheus Boehner (ed.), _Walter Burleigh: De puritate artis logicae tractatus longior_ (with a Revised Edition of the Tractatus brevior), St. Bonaventure, NY: The Franciscan Institute, 1955. Translated in Spade 2000.
* Cayley, Arthur, 1871. “Note on the Calculus of Logic,” _The Quarterly Journal of Pure and Applied Mathematics_, 11: 282–83.
* Church, Alonzo, 1965. “The History of the Question of Existential Import of Categorical Propositions,” in Yehoshua Bar-Hillel (ed.), _Logic, Methodology, and Philosophy of Science_ (Proceedings of the 1964 International Congress). Amsterdam: North-Holland, 417–24.
* Coppée, Henry, 1882. _Elements of Logic_, New York: American Book Co.
* Davis, Noah, 1894. _Elements of Deductive Logic_. New York: Harper.
* De Morgan, Augustus, 1847. _Formal Logic_, London: Open Court.
* –––, 1860. _Syllabus of a Proposed System of Logic_, reprinted in A. De Morgan, _On the Syllogism and Other Logical Writings_, New Haven: Yale University Press, 1966.
* De Rijk, L. M., 1967. _Logica Modernorum_ (Volume II Part 2), Assen: Koninklijke Van Gorcum & Company N.V.
* –––, 1973. “The Development of Suppositio naturalis in Mediaeval Logic”, _Vivarium_, 11: 43–79.
* Freddoso, Alfred J, and Henry Schuurman, 1980. _Ockham’s Theory of Propositions: Part II of the Summa Logicae_, Notre Dame: University of Notre Dame Press.
* Geach, Peter, 1972. _Logic Matters_, Berkeley and Los Angeles: University of California Press.
* Jevons, W. Stanley, 1888. _Elementary Lessons in Logic_, London and New York: Macmillan.
* Joseph, H. W. B., 1916. _An Introduction to Logic_, London: Oxford University Press.
* Keynes, John Neville, 1928. _Studies and Exercises in Formal Logic_, London: Macmillan.
* King, Peter, 1985. _Jean Buridan’s Logic: The Treatise on Supposition, The Treatise on Consequences_, Dordrecht: D. Reidel.
* Kneale, William and Martha Kneale, 1962. _The Development of Logic_, Oxford: Oxford University Press.
* Kretzmann, Norman, 1966. _William of Sherwood’s Introduction to Logic_, Minneapolis: University of Minnesota Press.
* –––, 1979. _Pauli Veneti Logica Magna_ (Prima Pars: Tractatus de Terminis), Oxford: Oxford University Press.
* Kretzmann, Norman, Anthony Kenny, and Jan Pinborg, 1982. _The Cambridge history of Later Medieval Philosophy_, Cambridge: Cambridge University Press.
* Kretzmann, Norman and Eleonore Stump, 1988. _The Cambridge Translations of Medieval Philosophical Texts_. Cambridge: Cambridge University Press.
* Londey, David and Carmen Johanson, 1984. “Apuleius and the Square of Opposition,” _Phronesis_, 29: 165–73.
* Loux, Michael, 1974. _Ockham’s Theory of Terms: Part I of the Summa Logicae_, Notre Dame: University of Notre Dame Press.
* Lukasiewicz, J., 1929. _Elementy Logiki Matematycznej_, Nakl. Komisji wydawniczeij Kola matematyczno-fizycznego sluchaczow uniwersytetu warszawskiego, Warsaw.
* –––, 1951, _Aristotle’s Syllogistic from the Standpoint of Modern Logic_, Oxford: Clarendon Press.
* Ockham, William, 14th Century. _Summa Logicae_, in _Opera Philosophica_, St. Bonaventure, NY: The Franciscan Institute, 1974.
* Paul of Venice, 14th century. _Logica Parva_ (1472 edition), Venice; reprinted Hildesheim: Georg Olms Verlag, 1970. Translated in Perreiah 1984.
* Peirce, Charles, 1880. “On the Algebra of Logic,” _American Journal of Mathematics_, 3: 15–57.
* Perreiah, Alan, 1984. _Logica Parva: Translation of the 1472 Edition_, Munich: Philosophia Verlag.
* Peter of Spain, 13th century. _Tractatus_ (_Summule Logicales_), in L.M. De Rijk (ed.), _Tractatus Called Afterwards Summule Logicales_, Assen: Van Gorcum, 1972. Translated in _Tractatus (or Summule Logicales)_, by Brian Copenhaver, Oxford: Oxford University Press, forthcoming.
* Sellars, Roy Wood, 1925. _The Essentials of Logic_, New York: Houghton Mifflin.
* Smiley, Timothy, 1967. “Mr. Strawson on the Traditional Logic,” _Mind_, 76: 118–20.
* Spade, Paul Vincent, 1997. Translation of the beginning of Walter Burley’s _Treatise on the Kinds of Supposition (De Suppositionibus)_, translated from Stephen Brown, “Walter Burleigh’s Treatise _De Suppositionibus_ and Its Influence on William of Ockham,” _Franciscan Studies_, 32 (1972): 15–64.
* –––, 2000, _Walter Burley: On the Purity of the Art of Logic_ (The Shorter and the Longer Treatises), Yale University Press, New Haven.
* Strawson, Peter, 1952. _Introduction to Logical Theory_, London: Methuen.
* Wedin, Michael, 1990. “Negation and Quantification in Aristotle,” _History and Philosophy of Logic_, 11: 131–150.
* Westerståhl, Dag, 2012. “Classical vs modern Squares of Opposition, and beyond”, in Jean-Yves Béziau & Gillman Payette (eds.), _The Square of Opposition: A General Framework for Cognition_, Bern: Peter Lang.
* Whately, Richard, 1827. _Elements of Logic_, Delmar, NY: Scholar’s Facsimiles & Reprints, 1975.
* William of Sherwood, 13th century. “Introductiones in Logic,”, in Charles H. Lohr, Peter Kunze and Bernhard Mussler (ed.), “William of Sherwood, ‘Introductiones in logicam’: Critical Text,” _Traditio_, 39 (1983): 219–299. An earlier edition is translated in Kretzmann 1966. See also _Introductiones in logicam_, Martin Grabman (ed.), _Sitzungsberichte der Bayersichen Akademie der Wissenschaften_, Philosophisch-historische Abteilung, Heft 10. Munich, 1937.

## Academic Tools

| ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=square).                                                                      |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/square/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
| ![inpho icon](https://plato.stanford.edu/symbols/inpho.png)         | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=square\&redirect=True) at the Internet Philosophy Ontology Project (InPhO).   |
| ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif)      | [Enhanced bibliography for this entry](http://philpapers.org/sep/square/) at [PhilPapers](http://philpapers.org/), with links to its database.                            |

## Other Internet Resources

* [Mediaeval Logic and Philosophy](http://pvspade.com/Logic/)

## Related Entries

[Aristotle, General Topics: logic](https://plato.stanford.edu/entries/aristotle-logic/) | [Brentano, Franz: theory of judgement](https://plato.stanford.edu/entries/brentano-judgement/) | [contradiction](https://plato.stanford.edu/entries/contradiction/) | [syllogism: medieval theories of](https://plato.stanford.edu/entries/medieval-syllogism/) | [terms, properties of: medieval theories of](https://plato.stanford.edu/entries/medieval-terms/)

[Copyright © 2017](https://plato.stanford.edu/info.html#c) by\
Terence Parsons
