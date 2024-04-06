# 话语表征理论 discourse representation theory (Bart Geurts, David I. Beaver, and Emar Maier)

*首次发表于 2007 年 5 月 22 日星期二；实质性修订于 2020 年 2 月 10 日星期一*

在 20 世纪 80 年代初，Hans Kamp 提出了话语表征理论（DRT）作为处理语义学和语用学中代词和时态问题的理论框架（Kamp 1981）；Irene Heim（1982）独立开发了一个非常相似的理论。DRT 的独特特点将在下文中讨论，它是一种关于解释的心理主义和表征主义理论，不仅是关于单个句子的解释，还包括关于话语的解释。在这些方面，DRT 与 20 世纪 70 年代源自蒙塔古开创性工作的古典形式语义学有了明显的区别（Thomason 1974），但在其他方面，它延续了传统，例如在使用模型理论工具方面。与此同时，DRT 已经成为解释各种现象的框架，但我们将把注意力集中在少数几个方面：指代、时态、预设和命题态度。有关其他主题的工作参考，请参阅“进一步阅读”部分。

* [ 介绍](https://plato.stanford.edu/entries/discourse-representation-theory/#Int)
* [ 话语表征理论](https://plato.stanford.edu/entries/discourse-representation-theory/#DonPro)
* [话语表征理论](https://plato.stanford.edu/entries/discourse-representation-theory/#BasDRT)

  * [关键思想](https://plato.stanford.edu/entries/discourse-representation-theory/#KeyIde)
  * [3.2 定量词与不定词](https://plato.stanford.edu/entries/discourse-representation-theory/#QuaVsInd)
  * [话语表征理论的一级与二级版本](https://plato.stanford.edu/entries/discourse-representation-theory/#OneVsTwoLevVerDRT)
* [话语表征理论：句法、语义、可及性](https://plato.stanford.edu/entries/discourse-representation-theory/#DRSLanSynSemAcc)

  * [4.1 Syntax](https://plato.stanford.edu/entries/discourse-representation-theory/#Syn)
  * [ 可及性](https://plato.stanford.edu/entries/discourse-representation-theory/#Acc)
  * [ 4.3 语义](https://plato.stanford.edu/entries/discourse-representation-theory/#Sem)
* [超越基础](https://plato.stanford.edu/entries/discourse-representation-theory/#BeyBas)

  * [ 话语表征理论](https://plato.stanford.edu/entries/discourse-representation-theory/#Ten)
  * [ 5.2 前提假设](https://plato.stanford.edu/entries/discourse-representation-theory/#Pre)
  * [5.3 态度和态度归因](https://plato.stanford.edu/entries/discourse-representation-theory/#Att)
* [话语表征理论中的话语关系](https://plato.stanford.edu/entries/discourse-representation-theory/#DisRel)
* [话语表征理论和组合性](https://plato.stanford.edu/entries/discourse-representation-theory/#RepAttCom)
* [ 进一步阅读](https://plato.stanford.edu/entries/discourse-representation-theory/#FurRea)
* [ 参考文献](https://plato.stanford.edu/entries/discourse-representation-theory/#Bib)
* [ 学术工具](https://plato.stanford.edu/entries/discourse-representation-theory/#Aca)
* [其他互联网资源](https://plato.stanford.edu/entries/discourse-representation-theory/#Oth)
* [ 相关条目](https://plato.stanford.edu/entries/discourse-representation-theory/#Rel)

---

## 引言

本文涉及话语表征理论，严格定义为源自 Kamp（1981）传统的工作。有时会更广泛地使用相同术语，偶尔包括 Heim（1982）的工作以及 Groenendijk 和 Stokhof（1989, 1991）发起的发展。然而，对于扩展的 DRT 家族，更常见的标签是“动态语义学”，这也是我们将使用的术语。

话语表征理论与其他动态语义学派别的两个特点是它是表征性的和非组合性的。在动态语义学的创立年代，也就是上世纪 80 年代，这些特点使得 DRT 成为一个备受争议的理论，尽管到目前为止，这些争议已经减弱。DRT 的主要创新，超越了当时被视为正统的蒙塔戈夫范式，就是引入了一种心理表征水平，称为“话语表征结构”（DRSs）。基本思想相当简单。听者建立起话语的心理表征，随着话语的展开，每个新句子都会促使对该表征的添加。这一画面在语言心理学中一直很普遍。DRT 的主要原则是它应该成为语义理论的起点。

话语表征理论家族的理论包括以下要素：

* 话语表征理论

  * 话语表征理论的所有良构 DRS 集合的递归定义
  * 一个针对这个集合成员的模型论语义学；
* 话语表征理论 translates to 话语表征理论

这在技术上与形式语义学中的早期工作非常相似，有两个例外：解释过程总是考虑先前的话语，并声称语义表征的级别是必不可少的。一些语义学家担心的不是 DRSs 是心理表征这一事实，而是需要额外的级别，并以使理论非组合的方式使用；我们将在第 7 节回到这个问题。

## 话语表征理论

代词与其先行词之间的关系是语言学和哲学中备受关注的一个问题。我们说，如果代词的解释取决于句子或话语中其他地方的先行表达式，那么代词是指示的，而不是示意的。在某些情况下，这种依赖关系的性质似乎很明显。

[1]

 彼得打他的驴。

“Pedro”是一个指称表达式，因此，在这种情况下，说“他”的确是一个指代术语，它的指称来源于其先行词。这种解释是足够合理的，但并非适用于所有情况：

[2]

农夫不打他的驴。

“无农夫”这个术语并非一个指称性表达，因此“his”不能与之共指。相反，在这种情况下，代词与其先行词之间的关系似乎是绑定关系，从逻辑意义上讲：“无农夫”和“his”分别被解释为量词和变量，前者约束后者。

很明显，代词的约束变量解释受到句法约束的限制。最重要的是，这种解释类型要求代词受其先行词的 c-指令控制，其中 c-指令定义如下：

> *A* c-commands *B* iff *B* is, or is contained in, a sister constituent of *A*’s.

句子[2]的成分结构是[S [NP 农民][VP 打 [NP 他的驴]]]。这里代词包含在其先行词的姐妹中，因此符合 c-命令约束。在[3]中，“no farmer”不符合“his”的 c-命令，因此我们预测，正确地，代词不能被约束。

[3]

他的驴不喜欢任何农民。

由于[1]的句法结构与[2]的句法结构相同，我们可能会想到，[1]中的代词是否可能不受其先行词的约束，就像[2]中一样。如果这种情况是可能的，那么就有两种解释[1]中的代词的方式：它可以作为一个指称性术语，也可以作为一个受限变量。有证据表明这确实是这种情况：

[4a]

彼得打他的驴，胡安也是。

[4b]

每个农民都打他的驴，胡安也是。

[4a] 在某种程度上是模棱两可的，而[4b] 则不是。[4a] 的第二个连词可以被解释为 Juan 打他自己的驴，或者 Juan 打 Pedro 的驴。相比之下，[4b] 的第二个连词只能被解释为 Juan 打他自己的驴。如果[4a] 的第一个连词中的所有格代词既可以是指代的，也可以是一个约束变量，那么这种对比就很容易解释。

在很大程度上，发展动态解释理论的动机，从 DRT 开始，是因为意识到指称性和受限变量（出现的）代词之间的二分法并不像人们想象的那样自然——某些代词在任一类别中都不太合适。

[5a]

 彼得拥有一头驴。

[5b]

 这是灰色的。

第二句中的“它”与第一句中的先行表达式之间的关系是什么？一方面，它不能是指代关系。如果代词与其先行词是指代关系，那么不定冠词“一匹驴”就必须是一个指称术语，这似乎不太可能，例如，因为[5a]的否定并没有说佩德罗没有拥有的驴，而是说他没有拥有任何驴，而且，如果[5a]被否定，代词和其先行词之间的指示链接就会被切断。

[6a]

Pedro 没有拥有一头驴。

[6b]

 *它是灰色。

这些观察结果相当明显地表明，不定词是量词，而不是指称性术语。然而，如果我们将“a donkey”解释为存在量词，那么它是如何设法跨越句子边界来约束代词的呢？

[5]的问题与代词及其不定先行词出现在不同句子中有关。然而，以下示例显示，在句子内部也会出现类似的问题：

 话语表征理论

如果 Pedro 拥有一头驴，他会打它。

 话语表征理论

每个拥有驴的农民都会打它。

这些是由学院派哲学家讨论过的臭名昭著的“驴子句”，在现代哲学中由 Geach（1962）重新引入。在这些情况下，很明显代词并不指代，因此它们不能与其先行词共指。代词也不受其先行词约束，因为它们不受其支配。[7b]的成分结构大致如下：

> [S [NP 每个 [N 拥有 [NP 一只驴]] 的农民] [VP 都打它]]

无论句法细节如何，“一头驴”都嵌入得太深，以至于它无法控制“它”。[7a] 也是如此。因此，在[7a，b]中的中性代词不能被解释为被约束的变量。

另一种显示驴代词存在问题的方法是考虑如何在谓词逻辑中表达这些句子。[7a] 的最明显解释是 Pedro 打败他拥有的每匹驴，[7b] 自然地被解释为声称每个农民打败他拥有的每匹驴。（因此，令人惊讶的是，这些句子中的不定代词具有普遍性力量。）这些解读可以如下捕捉：

[9a]

∀x[[驴(x) & 拥有(Pedro,x)] → 打(Pedro,x)]

[9b]

∀x∀y[[农民(x) & 驴(y) & 拥有(x,y)] → 打(x,y)]

因此，问题并不在于谓词逻辑无法捕捉[7a]和[7b]的含义。问题在于，如何以原则性的方式从[7a]和[7b]推导出[9a]和[9b]。为了推导出这些逻辑形式，我们不仅需要假设一个埋藏在下位位置的不定表达式最终具有广泛的范围，还需要假设它在这个过程中获得了普遍的力量。基于这些假设的理论可能捕捉到事实，但显然是临时的，并且会产生大量错误的预测。

前述观察的结果似乎是，不定词既不是量词也不是指称性术语，这个问题带来了另一个问题，因为只要不清楚不定词的含义，它们如何作为代词的先行词也将保持模糊。后面我们将看到，在看似不同领域中出现了非常相似的问题，比如时态和预设的解释。

## 基本的 DRT

本节以相当非正式的方式介绍了话语表征理论。我们展示了听者如何建立正在进行的话语的心理模型，不仅涉及简单句子，还涉及条件句、量化和指代，我们讨论了话语表征理论对不定式的处理，以及它们如何与量化表达式区分开来。

### 关键思想

话语表征结构（DRS）是听者在话语展开过程中建立起来的心理表征。DRS 由两部分组成：所谓的“话语指称”的宇宙，代表讨论中的对象，以及一组编码了这些话语指称上累积信息的 DRS 条件。以下 DRS 代表了这样的信息：有两个个体，其中一个是农民，另一个是驴，前者追赶后者。

[1]

 **[x, y：farmer(x), donkey(y), chased(x,y)]**

这个 DRS 的宇宙包含两个话语指称，x 和 y，其条件集是{farmer(x), donkey(y), chased(x,y)}。

一个像[1]中的 DRS 可以被赋予一个直接的模型理论解释。在 DRT 中，这是通过嵌入函数来实现的，这些函数是从给定模型 M 中的话语参照到个体的部分函数；或者换句话说，一个嵌入函数是一个部分变量赋值。一个嵌入函数 f 在 M 中验证[1]，当且仅当 f 的域至少包括 x 和 y，并且根据 M，f(x)是一个农夫，f(y)是一头驴，f(x)追逐 f(y)。

与此同时，我们会发现[1]中的 DRS 旨在反映直觉意义：

[2]

农夫追赶一头驴。

事实上，据称，在没有关于发出此句的上下文的任何信息的情况下，[1] 是 [2] 的语义表征。因此，不定表达“一个农民”和“一头驴”促使引入两个新的话语指称，x 和 y，并提供 x 是农民，y 是驴的信息，而动词提供前者追逐后者的信息。

如果一个话语以[2]的话语开始，那么[1]中的话语表征理论被构建，这个话语表征理论构成了解释下一个话语的背景。现在假设[2]后面跟着一个[3a]的标记：

[3a]

 他抓住了。

[3b]

** 话语表征理论**

[3b] 是在代词被解析之前反映[3a]语义内容的 DRS。在这个 DRS 中，[3a]中的指代代词“he”和“it”分别由话语指称 v 和 w 表示。这些话语指称下划线表示需要一个先行词。由于[3a]是在[1]的语境中说出的，解释这个句子的下一步是将[3b]中的 DRS 与[1]中的 DRS 合并。这个合并操作的结果是[4a]：

[4a]

 **[x, y, v, w: 农夫(x), 驴(y), 追逐(x,y), 捉住(v,w)]**

在[3a]紧随[2]之后，"he"的先行词可能（但不一定）是"农民"，而"it"在语用上依赖于"驴"。在话语表征理论层面上，这通过将话语指称 v 和 w 分别与 x 和 y 等同来表示。这些操作产生了[4b]，它等同于[4c]。在模型 M 中，任一 DRS 都在 M 中得到验证，当 M 中出现一个追赶并抓住驴的农民时。

[4b]

 **[x, y, v, w: v =**  **x, w =**  **y, farmer(x), donkey(y), chased(x,y), caught(v,w)]**

[4c]

 **[x, y：farmer(x), donkey(y), chased(x,y), caught(x,y)]**

因此，到目前为止，我们只考虑了具有简单条件的 DRSs，但为了解释否定和条件句，比如复杂条件是必要的。

[5a]

彼得没有驴。

[5b]

 **[1 x: Pedro(x), ¬[2 y: 驴(y), 拥有(x,y)] ]**

[5b] 是对应于[5a]的句子 DRS。这个 DRS 包含一个由否定符号前缀的条件 DRS。为了方便参考，我们有时会用数字标签装饰 DRS，就像我们在[5b]中所做的那样，并在诸如“[5b1]”、“[5b2]”等名称中使用这些标签。一般来说，DRS 的标记将是自上而下和从左到右的，因此主要（或首要）DRS 将始终是编号一。

一个函数 f 在模型 M 中验证 [5b1] 当且仅当 f 将 x 映射到 M 中的一个个体，该个体“是一个 Pedro”，即被称为“Pedro”，并且 f 不能被扩展为验证 [5b2] 的函数 g。也就是说，没有这样的 g 应该将 y 映射到 Pedro 拥有的一匹驴。

[5b2] 包含一个话语指称 x 的标记，该标记是在外部引入的，在嵌入了 [5b1] 的 DRS 中。除此之外，[5b2] 还引入了一个自己的话语指称，即 y，与不定 NP “一匹驴” 相关联，并且其范围由 [5b2] 界定。因此，在 [5b2] 之外提及 y 是没有意义的。在 DRT 中，这解释了为什么在 [5a] 中由不定 NP 引入的个体的“寿命”由否定运算符的范围限定。例如，如果 [5a] 后面跟着 [6a]，那么代词就无法与不定 NP 相关联：

[6a]

 这是灰色的。

[6b]

** 话语表征理论**

[6c]

 **[1 x, z: Pedro(x), ¬[2 y:驴(y), 拥有(x,y)], 灰色(z)]**

如果我们合并[5b]和[6b]，这是与[6a]相对应的 DRS 句子，我们得到[6c]。在这种表征中，话语指称 z 无法访问 y，因为 y 是在一个不可访问 z 所引入的 DRS 中引入的，因此无法将 z 绑定到 y。换句话说，如果[6a]之前是[5a]，代词就无法与不定代词建立照应关系。这一预测似乎是正确的。

可及性首先是 DRS 之间的关系；派生地，它也是话语指称之间的关系。[6c1]对[6c2]是可及的，但反之则不然，因此在[6c1]中引入的话语指称，即 x 和 z，可以从[6c2]中访问，但反过来，如果我们在[6c1]中，我们无法访问[6c2]及其话语指称，即 y。因此，在[6c]中，由于 y 对 z 不可及，因此无法进行回指。相比之下，在[4a]中，由于 x 和 y 对 v 和 w 可及（可及性关系是自反的），回指是可能的。可及性的概念对于 DRT 对回指的解释至关重要，重要的是要注意，这并非是规定的，而是由 DRS 语言的语义所蕴含的。[6c1]对[6c2]是可及的，因为必须考虑[6c2]的每个嵌入函数都是[6c1]的嵌入函数的扩展，正因为如此，[6c1]中的每个话语指称也在[6c2]中被定义。然而，反之并不成立。

与否定句类似，条件句也会产生复杂的 DRS 条件。 (7) 给出了一个例子：

 话语表征理论

如果 Pedro 拥有一头驴，他会打它。

 话语表征理论

 **[1 x: Pedro(x), [2 y: 驴(y), 拥有(x,y)] ⇒ [3 v, w: 打败(v,w)] ]**

[7b] 是对应于[7a]的 DRS 句子，假设为了方便，这个句子是在一个空的语境中被说出的，它也是话语的初始 DRS。在这个结构中的复杂条件被解释如下：如果 f 要验证当前模型中的[7b1]，那么 f(x)必须是一个名为“Pedro”的个体，并且 f 的每一个验证[7b2]的扩展本身必须可以扩展为一个验证[7b3]的函数。由此可知，[7b1]可以被[7b2]访问，而[7b2]又可以被[7b3]访问，因此 v 可以与 x 相连（可访问性是一个传递关系），w 可以与 y 相连。结果是[7c]，它等同于[7d]，两个 DRS 都表明 Pedro 打败了他拥有的每头驴。

 话语表征理论

 **[1 x, v: v = x, Pedro(x), [2 y, w: w = y, 驴(donkey)(y), 拥有(x, y)] ⇒ [3 : 击败(v, w)] ]**

 话语表征理论

 **[1 x: Pedro(x), [2 y: 驴(y), 拥有(x,y)] ⇒ [3 : 打(x,y)] ]**

### 3.2 量词 vs. 不定词

话语表征理论

[8a]

每个拥有驴的农民都会打它。

[8b] 重试  错误原因

 **[1 : 2 x, y：农夫(x)，驴(y)，拥有(x,y)[3 v, w：击打(v,w)] ]**

有两种方法可以解释所谓的形式为 K(∀x)K′的双重条件。在其弱解释中，[8a]的意思是每个拥有驴的农民至少打一只他拥有的驴；在其强解释中，该句表示每个农民打他拥有的每只驴。虽然对于[8a]来说，强解读是最自然的选择，但其他关于驴的句子更倾向于弱解读。

[9]

每位拥有拖拉机的农民都会用它在星期天开车去教堂。

[9] 最有可能的解释是，每位拥有拖拉机的农民都会用自己的一台拖拉机开车去教堂。

弱解释和强解释之间的区别有些神秘，因为它似乎不是一种普通的歧义。例如，带有存在量词的驴子句似乎不允许强解读。

[10]

一些拥有驴子的农民殴打它。

这只能被解释为说，一些拥有驴的农民至少打了其中一只驴。更普遍地说，普遍量化的驴句似乎是唯一许可两种解释的句子。目前尚不清楚为什么会出现这种情况（参见 Kanazawa 1994，Geurts 2002）。

无论是弱还是强，形式为 K(Qx)K′的条件的解释，其中 Q 可以是任何量词，使得 K 对 K′可访问，在这方面（这是 DRT 分析的支点），条件句和量化句是相同的。因此，[8b2]中的话语指称 x 和 y 对[8b3]中的 v 和 w 可访问，并且后者可以等同于前者。得到的表征是[8c]，等同于[8d]。

[8c]

 **[1 : 2 x, y, v, w: v = x, w = y, farmer(x), 驴(y), 拥有(x, y)[3 : beats(v, w)]]**

[8d]

 **[1 : 2 x, y：farmer(x), 驴(y), 拥有(x,y)[3 : 打(x,y)] ]**

话语表征理论对诸如“所有”或“大多数”等量化表达的分析是相当标准的。量词绑定一个变量并提供人们应该期望的真值条件。不定式则不同。像“一匹驴”这样的不定式被视为引入话语指称和一个或多个条件的工具，而不是量词；在话语表征理论中，不定式本身没有量化力。它们似乎具有的量化力并非属于它们自身，而是源自它们所处的环境。如果与“一匹驴”相关的语义材料被引入主要的 DRS 中，如[4c]所示，由于在模型 M 中验证此 DRS 当且仅当在 M 中有一种验证它的方式，量化效应将是存在的。如果与“一匹驴”相关的语义材料被引入条件句的前提中，如[7d]所示，由于形式为 K⇒K′的条件在 M 中验证当且仅当每一种验证 K 的方式都可以扩展为验证 K′的方式，量化效应将是普遍的。这种对不定式的看法是话语表征理论的核心。

话语表征理论（DRT）是最早超越句子边界的语义理论之一，考虑了表达的解释可能取决于前述话语的方式。回顾前述讨论中讨论的例子，我们看到，如果 DRT 方法是正确的，那么句子边界并不像弗雷格（或乔姆斯基）对语言的概念那样重要。特别是，跨句子照应的 DRT 分析与句内照应之间基本没有区别，例如迷你话语[2]-[3a]中所示的跨句子照应，以及[7a]或[9a]中的句内照应。在任何情况下，代词只是用来指代一个可访问的话语指称。这引发了一个问题，即 DRT 的新潮照应概念如何与指称性代词和约束变量代词之间的二分法相关。耐人寻味的是，这个问题似乎还没有得到太多关注。

### 话语表征理论的一级与二级版本

在前面，我们假设一个句子对话语的贡献，如由 DRS 所代表，是通过两个步骤获得的。在第一个步骤中，以组合方式构建了一个句子 DRS；这个构建过程的一部分我们认为是理所当然的，但其实现并不会太困难。在第二步中，句子 DRS 与代表先前对话的 DRS 合并，并解决了指代问题。这两阶段的程序已成为工业标准，但 DRT 的原始版本（Kamp 1981，Kamp 和 Reyle 1993）在单层意义上是单层的，即一组规则同时处理两个任务。与此同时，Kamp 及其同事也采用了两步方法（例如，Kamp 等人 2011 年）。

在 DRT 的一级版本中，使用一组规则来获得句子的语义贡献。以一个简单的例子来说，如果句子是“它是灰色的”，要应用的第一个规则会说主语的语义相关是“是灰色的”所表示的谓词的一个参数。然后进一步分析句子的两个主要部分，“它”这个代词触发一个规则，立即处理代词的词汇内容和其上下文依赖性；也就是说，我们必须选择一个新的话语指称，将其与前述话语提供的话语指称联系起来，并更新 DRS 以记录这些变化。在 DRT 的二级版本中，没有这样的规则。它的职责在两个独立的机制之间划分。在第一阶段，为句子构建一个单独的 DRS，在其中代词促使引入被标记为指代的新话语指称（我们使用下划线来实现这一目的）。在第二阶段，有一个处理这些被标记的话语指称的一般机制。

话语表征理论的一级和二级版本之间的区别至少有两个值得关注的原因。首先，一旦我们超越基本的话语表征理论，两阶段系统实际上可能在整体上更经济。例如，如果话语表征理论被扩展以处理预设（见第 5 节），那么一次性的方法就变得笨拙。其次，也许更重要的是，可以将两阶段理论视为实施语义和语用之间的区别，这在某种程度上是有说服力的：在第一阶段，计算出一个表示，该表示是从句子的词汇-语法结构中推导出来的，而在第二阶段，处理与语境相关的意义方面。这种分工类似于传统的组合语义和非组合语用之间的二分法，但应该指出两者并不完全一致。通常，两阶段版本的话语表征理论的“语义”部分在弗雷格意义上并不是组合的，因为其输出基本上是不完整的；例如，它可能包含指代性的“空缺”。因此，即使一个句子的 DRS 可以接受一个真值条件的解释，它通常也无法捕捉到一切被传统认为属于真值条件内容的东西。

## 话语表征理论：句法、语义、可及性

在这一部分，我们对 DRS 语言进行了比我们迄今为止所做的更精确的描述。我们定义了语言的语法，提出了一个模型理论解释，并讨论了可及性的概念，在 DRT 对指代的描述中起着如此重要的作用。

### 4.1 语法

话语表征理论(DRSs)是由话语指称和 DRS 条件构建的集合论对象。DRS 条件可以是原子的，此时它由一个谓词和适当数量的话语指称组成；也可以是复杂的，此时它嵌套一个或两个 DRSs。因此，DRS 语言的定义是通过同时递归实现的。

** 话语表征理论（DRSs）和话语表征理论条件（DRS-conditions）**

* 话语表征理论中，DRS K 是一对 <UK, ConK>，其中 U**K 是一组话语指称，而 Con**K 是一组 DRS 条件。
* 如果 P 是一个 n 元谓词，并且 x1，…，xn 是话语指称，那么 P(x1, …, xn)是一个 DRS 条件。
* 如果 x 和 y 是话语指称，那么 x **=** y 是一个 DRS 条件。
* 如果 K 和 K′是 DRSs, 那么¬K, K⇒K′, 和 K∨K′是 DRS-conditions.
* 如果 K 和 K'是 DRSs，x 是话语指称，那么 K(∀x)K'是 DRS 条件。

** 话语表征理论-合并**

* *K*⊕*K′*  =   <*U**K* ∪ *U**K′* , *Con**K* ∪ *Con**K′* >

合并操作也用于将一个句子的 DRS 与表示前述话语的 DRS 结合在一起，因此，其思想是在（从 Muskens 1996 的讨论中可见）从句连接和句子串联之间没有原则性区别。

官方上，DRSs 是集合论对象，但在本文中我们使用线性符号表示。许多来源，包括 Kamp 自己的工作，使用图形的“方框符号”有时更清晰，但不够简洁且更难输入。为了说明各种方案，这里有三种表示条件句内容的方式：

 官方 DRS:
 **&lt;{}, &lt;{x, y}, {farmer(x), donkey(y), owns(x,y)}&gt; ⇒ &lt;{}, {beats(x,y)}&gt;} &gt;&lt;{}, &lt;{x, y}, {farmer(x), 驴(y), 拥有(x,y)}&gt; ⇒ &lt;{}, {打(x,y)}&gt;} &gt;线性表示：** Box notation:

|                              |
| ------------------------------ |
| **x y**                             |
| ** 农民(x) 驴(y) 拥有(x,y)** |

 **⇒**

|                  |
| ------------------ |
| <br />               |
| ** 击败(x,y)**<br /> |

这些格式之间的选择仅仅是出于方便考虑，并没有任何理论意义。

### 可及性

可访问性是一种 DRS 之间的关系，它是传递的和自反的，即它是一个前序关系。更具体地说，它是满足以下条件的最小前序关系，对于所有的 DRS K、K'和 K″：如果 Con**K 包含形式为…的条件。

* ¬K′，那么 K 对 K′是可及的
*
* K′⇒K″，那么 K 对 K′是可及的，K′对 K″是可及的
* K′(∀x)K″, 则 K 可以被 K′访问，且 K′可以被 K″访问

在以下示意图表示中，每个 DRS 都可以访问所有且仅那些编号不在其之前的 DRS（因此每个 DRS 都可以访问自身）：

*  **[1 …**  **[2 …](%E2%88%80x)**   **[3 … ¬[4 … ] ] ]**
*  **[1 … [2 … ] ⇒ [3 … ¬[4 … ] ] ]**

话语表征理论中一个 DRS K 的可访问域 A**K 是指出现在对 K 可访问的某个 K'中的话语指称的集合，即 A**K = {x: K'对 K 可访问且 x ∈ U**K'}. DRT 对指代解释施加的主要约束是：

** 可及性约束**

一个代词由一个话语指称 x 表示，该指称必须等同于某个话语指称 y ∈ A**K，其中 K 是引入 x 的 DRS。

重要的是要注意，无论是可及性概念还是可及性约束都不需要规定。因为正如我们将立即看到的那样，两者都源自对话语表征理论语言的解释方式（参见标准谓词逻辑中的变量绑定概念）。因此，我们无权修改可及性关系，除非我们同时修改与对话语表征理论语言相关的真值条件。可及性约束是一个语义约束。

如第 2 节所讨论的那样，对于受限变量代词的主要句法约束是它们必须受到其先行词的 c-指令。可及性约束的领域与 c-指令约束的领域重叠，但它更广泛。首先，句子边界不影响可及性。另外，在一个句子的范围内，表达式 E1 的语义对应物可能对 E2 的语义对应物可及，即使 E1 不 c-指令 E2。为了说明这一点，考虑条件驴子句[1a]及其句子 DRS[1b]。

[1a] 重试  错误原因

[S 如果 [NP 一个农民] [VP 拥有 一头驴]] [S 他 打 它]

[1b]

[1 : [2 x, y: 农夫(x), 驴(y), 拥有(x,y)] ⇒ [3 u, v: 打(u,v)****] ]

从句法角度来看，“一个农民”和“一头驴”都不能（在 Chomsky 1986 的意义上）约束它们所出现的最小从句之外的表达式。特别是，它们都不能约束 [1a] 主从句中的任何代词。但是，与这些不定式相关联的话语指称，即 x 和 y，位于 [1b3] 的可访问域内，因此，嵌套 DRS 中的指代话语指称可以与 x 和 y 相关联。换句话说，在语义层面上它们是可约束的，但在句法层面上不可约束。

### 4.3 语义学

> f[K]g 当且仅当 f ⊆ g 并且 Dom(g) = Dom(f) ∪ U**K

在接下来的内容中，我们定义了嵌入函数如何验证给定模型中的 DRS 或 DRS 条件。通常情况下，模型 M 是一个二元组<D,I>，其中 D 是一组个体，I 是一个解释函数，将个体集合分配给一元谓词，将对偶集合分配给二元谓词，依此类推。为了在一定程度上增强我们定义的可读性，我们在整个过程中省略了“在 M 中”的修饰语：

** 验证嵌入**

*
* f 验证 P(x1, …, xn) 当且仅当 <f(x1), …, f(xn)> ∈ I(P).
*
* f 验证 ¬K 当且仅当不存在 g 使得 f[K]g 并且 g 验证 K。
*
* f 验证 K⇒K′ 当且仅当，对于所有 f[K]g，使得 g 验证 K，存在 h 使得 g[K′]h 并且 h 验证 K′。
* f 验证 K(∀x)K′ 当且仅当，对于所有个体 d ∈ DM 和对于所有 f[K]g，使得 g(x) = d 且 g 验证 K，每个 h 使得 g[K′]h 验证 K′。

最后一条款对普遍双重条件给出了强解释（参见第 3.2 节）；弱解释可如下获得：

* f 验证 K(∀x)K′ 当且仅当，对于所有个体 d ∈ DM，存在一个 g 使得 f[K]g，g(x) = d，并且 g 验证 K，存在一个 h 使得 g[K′]h 并且 h 验证 K′。

话语表征理论在给定模型中是真实的，如果我们可以找到一个验证嵌入来支持它，如下所示：

一个 DRS K 在模型 M 中是真实的，当且仅当存在一个嵌入函数 f，使得 Dom(f) = U**K 并且 f 在 M 中验证了 K。

[2]

## 

### 

[1a]

[1b]

我们的第二个例子涉及到了人们可能称之为“驴时态”的问题

[2a]

[2b]

在基于事件的语义中，将[2b]解释为对事件进行量化是很自然的，就像[2a]对个体进行量化一样。结合话语表征理论对量化的处理，这使我们能够解释“slapped”中的时态指代在以下情况下指回从属子句中引入的事件，其中⊃⊂代表“紧接着”关系，e″是“slapped”中时态引入的变量，e″表示 e″需要一个前提。

[3a]

[3b] 重试  错误原因

 **[x, y: Pedro(x), Juanita(y),**

在[3a]中，时态引入了一个指示元素，可以在量词的限制语中被约束，就像普通的驴代词可能被约束一样。经过轻微简化后的结果是[3b]，它表明 Pedro 试图亲吻 Juanita 的每一个事件 e 都会立即跟随着她掴他的事件 e′。请注意，尽管这个 DRS 捕捉了“slapped”中过去时态的最自然解释，但它没有解释“tried”中的过去时态。但这是应该的，因为如果时态是指代的，那么那个时态也应该与一个显著的时间点相关联，这似乎是正确的：在没有提供这样一个时间点的上下文的情况下，[2b]就变得不合适；这就像在不清楚代词指的是谁时说“他很帅”一样。

### 

[4a] 重试  错误原因

[4b] 重试  错误原因

彼得（Pedro）打他的驴。

** 话语表征理论**

[5a] 重试  错误原因

Pedro 在马厩里打他的驴。

[5b] 重试  错误原因

[6a]

[6b] 重试  错误原因 重试  错误原因

重试  错误原因

[8a] 重试  错误原因 重试  错误原因

[8b] 重试  错误原因

[9a] 重试  错误原因

重试  错误原因

[9b]

如果 Pedro 有一头驴，他会打他的驴。

[10a]

彼得拥有一头驴。胡安知道{it / that he owns a donkey}。

[10b] 重试  错误原因 重试  错误原因

[10c]

每个拥有驴的农民都知道他拥有一头驴。

重试  错误原因

如果事实动词“知道”触发其从句补语为真的预设，那么在[10b]和[10c]中，这种预设被中和了。如果预设类似于指代代词，那么为什么会这样是很清楚的：在这两种情况下，预设被句子内部约束，就像中性代词被约束一样。

### 5.3 态度和态度归因

在对待态度的处理中的一个核心问题是逻辑全知：人类是认知有限的代理者，并不知晓他们的信念和欲望的所有后果。基于此，Kamp（1990）认为，思维对象不应被视为纯粹的模型理论实体，例如信念世界的集合，这在从 Hintikka（1962）开始的信念逻辑中很常见。相反，信念和其他态度的逻辑必须涉及结构化的心理表征。然后，逻辑全知的问题在于人类代理者未能对这些表征进行逻辑完整的计算。以这种方式对待态度的对象进行建模，作为表征实体，使我们能够进行必要的细微区分，以区分相信正在下雨和相信如果不下雨则 37 不是质数之间的区别。然而，对于逻辑全知的传统版本，比如句子主义或思维语言方法，通常会遇到关于意向性的问题：为了对我们有用，我们的态度必须以某种方式涉及我们生活的外部世界，因此我们仍然需要解释这些句法表征如何与现实相连接。在 Hintikka 风格的可能世界语义中，世界和态度之间的联系被硬编码到语义中：相信约翰很快乐意味着代理者认为实际世界是约翰快乐的世界集合的一个元素。话语表征理论结合了这两种策略：使用经典的、模型理论的 DRS 语言语义来解释意向性，以可能世界的形式，但保持表征水平，以模拟实践推理中的资源有限计算。

[1a]

 内部心理状态:
 **{  &lt;ANCH x, [x: 杯子(x), 握(i,x)]&gt;,    &lt;BEL, [y: 包含(x,y), 咖啡(y)]&gt;,    &lt;DES, [: 温暖(y)]&gt; }**

[1b]

像这样的分隔式心理状态表征已经被转化为态度归因的语义理论，并被用来解决各种熟悉的难题，比如涉及克里普克（1979）的皮埃尔，他认为伦敦很漂亮但伦敦不是（Asher 1986，Kamp 2015），吉奇（1967）的霍布相信女巫杀死了他的奶牛，而诺布相信她，同一个女巫，使他的母马受损（Asher 1987），特指不定式（Kamp 和 Bende-Farkas 2019），前提假设从（非信念的）态度归因中推导出来（Maier 2015），以及指称虚构实体（Maier 2017）。

## 

我们在上述第 3 和第 4 节中看到，指代消解受到可及性的限制。但在解决过程中还有许多其他因素起着作用，从局部的、语法因素，比如主语先行词通常比宾语先行词在代词解析中更突出，到更全局的、话语结构因素。关注后者，Hobbs（1979）认为，解释者希望创造一个最大程度连贯的解释通常在为代词选择多个可及先行词之间起决定性作用，正如他在以下对比中所说明的那样：

[1a]

[1b] 重试  错误原因

[2] 重试  错误原因

约翰从巴黎乘火车去伊斯坦布尔。他喜欢菠菜。

阅读[2]，您可能会想知道土耳其菠菜是否真的比您在法国能买到的要好得多，这显示了我们为了适应合适的连贯关系（在本例中是解释）而付出的努力，然后我们放弃对一致解释的追求。

[3a]

[3b]

他吃了一顿丰盛的饭。

[3c] 重试  错误原因

[3d]

他吞食了许多奶酪。

[3e]

他赢得了一场舞蹈比赛。

[3f] 重试  错误原因

把它翻译成中文。

在标准的话语表征理论中，[3c]中介绍的鲑鱼将为[3f]中的代词提供一个合适且可访问的先行语，但事实上，这种解析似乎不可用。SDRT 通过话语结构约束来解释这一观察结果，这种约束被称为右前沿约束。通过绘制如下的话语结构图最能说明这一约束。图中的水平箭头表示协调话语关系（其中没有一个成分支配另一个），在这种情况下是叙述。垂直箭头表示从属话语关系（其中核心成分支配卫星成分），在这种情况下是阐释。

| [3c] | →        | [3d] |
| ------ | ----------- | ------ |
|      | Narration |      |

话语表征理论中的正确前沿约束版本指出，[3f]中的代词只能找到刚刚引入的节点中引入的先行词（[3e]），或者支配它的先行词（[3a]）。

|                            |
| ---------------------------- |
| **π3 π4**                           |
|                            |
|                            |
| ** 话语表征理论(π3,π4)** |

Elaboration(π2,π7) Elaboration(π1,π6)

指代和预设解析依赖于一个修改后的可及性概念，其中包含了右前沿约束。 话语表征理论对 SDRS 的模型论解释建立在一组特殊的解释规则周围，用于各种话语关系。 例如，叙述带有一个语义解释规则，该规则说明两个关联体都成立，而且它们引入的主要事件之间存在时间上的关系。 一些符号简写：K**π是与标签π相关联的 DRS（即π：K 出现在 SDRS 的某个地方）；e**π是出现在 U(K**π)中的唯一事件话语指称（为了可读性，我们在上面的示例 SDRS 中省略了事件指称，但为了在 SDRT 中建模叙述时间进展，我们应该将每个动词短语视为引入一个事件话语指称）。

> f 验证叙述(π1,π2) 当且仅当存在一个嵌入函数 g，使得 f[Kπ1 **]g 且 g 验证 Kπ1**，并且存在一个嵌入函数 h，使得 g[Kπ2 **]h 且 h 验证 Kπ2**，并且此外 h(eπ1 **) ⊃⊂** h(eπ****2**)

话语表征理论 translates to 话语表征理论.

## 话语表征理论和组合性

话语表征理论是一种解释的表征理论。在话语表征理论框架中，句子的意义，如果有的话，只是在一个派生的意义上：一个句子促使听者修改他的 DRS，而正是 DRS 具有真值条件的解释。因此，一个句子导致一个 DRS Ki 被转化为一个 DRS Ki+1（通常，尽管不是绝对的，这个过程将包括向 Ki 添加信息），在语义层面上有一个相关的转换，从 Ki 的解释到 Ki+1 的解释。因此，如果我们能够去掉表征中间人，我们将会有一个以动态术语定义句子意义的理论，作为从一个语义对象到另一个语义对象的转换。因此，是否可以不使用表征层次就产生了问题。Kamp（1981）声称，表征对于他的 DRT 的原始版本是必不可少的，这是我们基本 DRT 的一个子集，但与此同时，他被一系列将经典 DRT 纯粹转化为语义术语的动态理论证明是错误的：Barwise（1987），Rooth（1987），Groenendijk 和 Stokhof（1989，1991），Muskens（1996）等等。然而，Kamp 的主张仍然适用于经典 DRT 的各种扩展，比如前述讨论的蕴涵和态度归因理论。

这些理论据称是“非表征性的”，但这究竟意味着什么呢？例如，考虑 Groenendijk 和 Stokhof（1991）的动态谓词逻辑（DPL），为经典谓词逻辑语言提供了动态语义，其中“Pedro 拥有一头驴并打它”可以被表述如下：

[1]

∃x[驴(x) & 拥有(Pedro,x)] & 打(Pedro,x)

DPL 的语义确保，与古典逻辑不同，x 的最后一次出现由存在量词限定。其工作方式是，DPL 通过变量赋值分析句子含义，这些变量赋值由逻辑常量操纵，使得[1]在模型 M 中为真当且仅当 M 的域包含一个个体，当该个体被赋给变量 x 时，使得[1]中的每个原子句在 M 中为真。形式上，这是通过规定句子的含义是变量赋值之间的关系来实现的。

变量赋值是从变量到个体的映射，而变量是语言表达，因此几乎不可能声称赋值是非表征实体。因此，与话语表征理论相比，动态语义学被广泛认为是一种非表征的变体，这有点令人困惑。诚然，话语表征理论的表征主义要比动态语义学的表征主义深入得多，这两种理论在这方面显然非常不同，但这两种理论都将表征元素引入语义学，这适用于语义学的动态理论一般（尽管有例外，请参见 Dekker 2012）。

请注意，顺便提一下，DRT 的表征主义在心理学上并不特别令人困扰。因为如果我们采用认知主义的观点，将 DRT 视为解释心理学的（有些抽象的）理论，那么它的表征主义就不会特别引起争议，因为对于大多数心理学家来说，争议不在于是否存在心理表征，而在于它们的特点是什么。

DRT 的表征主义表现出比其他理论更为激进的一种方式是它也是一种非组合理论。这两个特征是相互交织的。例如，考虑基本 DRT 中代词的解释方式，首先建立一个话语指称，然后将其链接到另一个话语指称。这是一个非确定性的过程，但即使不是这样，很明显，指代链接并不是代词的含义的一部分。组合性的标准陈述会说，一个复合表达式的含义必须是其组成部分的含义和它们的组合方式的函数。但是，如果一些组成部分，比如代词，没有引入任何可以自然地被描述为该对象的含义的对象到 DRS 中，那么很明显我们没有一个组合系统。

话语表征理论的失去组合性有多糟糕？一般认为，一些关于组合性的标准论证并不特别令人信服。特别是，我们不需要组合性来解释为什么人们能理解无限数量的句子，也不需要它来解释语言如何被学习。为了解释这些事实，只需确保有一些程序来建立句子的含义即可，但这个程序并不严格需要是组合性的。组合性通常被视为一种方法论原则（Groenendijk 和 Stokhof 1989, 1991; Janssen 1997; Dever 1999），因为只要我们对词汇含义的性质和/或组合性理论定义的句法结构足够宽松，任何解释模型都可以被制作成组合性的。在 DRT 的情况下，使系统具有组合性的标准方法通常涉及放弃 Kamp 的构造算法，并用一个系统来替换它，其中 DRS 可以通过适当的合并操作（Zeevat 1989b）或者通过使用 Groenendijk 和 Stokhof（1989）以及 Muskens（1996）等动态语义系统中的函数应用来组合。但是，尽管大多数这样的系统捕捉到了与原始 DRT 密切相关的句子含义，它们并没有捕捉到 DRT 的每个方面。特别是，在 DRT 中，照应消解是 DRT 的一个组成部分，而在组合性理论中，照应消解被假定由理论的一个独立组件执行。

表征主义和组合性是语义学家和语言哲学家之间产生巨大分歧的问题，尽管现在比上世纪 80 年代少了一些。组合性的方法论观点已经将曾经看起来是实质性争论的问题减少为一种品味问题，至于话语表征理论，已经表明关心组合性的研究人员可以采用原始系统的变体，其中包含许多特征，但没有非组合性特征。但表征主义可能是一个更严肃的问题，因为如果像我们所暗示的那样，动态理论通常依赖于包含至少某种形式的表征的意义概念，那么这个概念可能需要比迄今为止收到的更多哲学关注。
## 7. Further reading

* **Introductions:** Kamp and Reyle (1993), Kamp (1995), Blackburn and Bos (2005), van Eijck (2006), van Eijck and Kamp (1997), Kamp et al. (2011).
* **Donkey anaphora:** Heim (1990), Evans (1980), Neale (1990), Kanazawa (1994), Geurts (2002), Krifka (1996).
* **Presupposition:** van der Sandt (1992), Geurts (1999), Beaver (2002), Beaver and Zeevat (2007), Kamp (2001), Kamp and Roßdeutscher (1994), Krahmer (1998), Blackburn and Bos (2005).
* **Tense and aspect:** Kamp and Reyle (1993), Kamp et al. (2011), Partee (1984).
* **Quantification and plurality:** Kamp and Reyle (1993).
* **Attitude reports:** Asher (1986, 1989), Zeevat (1996), Kamp (1990), Geurts (1999), Maier (2010).
* **Discourse structure and SDRT:** Asher (1993), Asher and Lascarides (2003), van Leusen (2007).
* **Inference systems for DRT:** Kamp and Reyle (1996), Saurer (1993).
## Bibliography

* Asher, N., 1986, “Belief in Discourse Representation Theory”, *Journal of Philosophical Logic*, 15: 127–189.
* –––, 1987, “A typology for attitude verbs and their anaphoric properties”, *Linguistics and Philosophy*, 10: 125–197
* –––, 1989, “Belief, acceptance and belief reports”, *Canadian Journal of Philosophy*, 19: 321–361.
* –––, 1993, *Reference to Abstract Objects in Discourse*, Dordrecht: Kluwer.
* Asher, N. and A. Lascarides, 2003, *Logics of Conversation*, Cambridge: Cambridge University Press.
* Barwise, J., 1987, “Noun phrases, generalized quantifiers and anaphora”, in P. Gärdenfors (ed.), *Generalized Quantifiers: Linguistic and Logical Approaches*, Dordrecht: Reidel, 1–30.
* Beaver, D., 1997, “Presupposition”, in van Benthem and ter Meulen 1997: 939–1008.
* –––, 2001, *Presupposition and Assertion in Dynamic Semantics*, Stanford, CA: CSLI Publications.
* –––, 2002, “Presupposition in DRT”, in D. Beaver, L. Casillas-Martinez, B. Clark and S. Kaufmann (eds), *The Construction of Meaning*, Stanford, CA: CSLI Publications.
* Beaver, D. and H. Zeevat, 2007, “Accommodation”, in G. Ramchand and C. Reiss (eds), *The Oxford Handbook of Linguistic Interfaces*, Oxford: Oxford University Press.
* Blackburn, P. and J. Bos, 2005, *Representation and Inference for Natural Language: A First Course in Computational Semantics*, Stanford, CA: CSLI Publications
* Chomsky, N., 1986, *Barriers* (Linguistic Inquiry Monograph 13), Cambridge, MA: MIT Press.
* Dekker, P., 2012, *Dynamic Semantics*, Dordrecht: Springer.
* Dever, J., 1999, “Compositionality as methodology”, *Linguistics and Philosophy*, 22: 311–326.
* Evans, G., 1980, “Pronouns”, *Linguistic Inquiry*, 11: 337–436.
* –––, 1985, *Mental Spaces: Aspects of Meaning Construction in Natural Language*, Cambridge, MA: MIT Press.
* Geach, P.T., 1962, *Reference and Generality*, Ithaca, NY: Cornell University Press.
* –––, 1967, “Intentional identity”, *The Journal of Philosophy*, 64: 627–632.
* Geurts, B., 1999, *Presuppositions and Pronouns*, Oxford: Elsevier.
* –––, 2002, “Donkey business”, *Linguistics and Philosophy*, 25: 129–156.
* Groenendijk, J. and M. Stokhof, 1989, “Dynamic Montague Grammar”, in Kálmán, L. and L. Pólos (eds), *Logic and Language*, Budapest: Akadémiai.
* –––, 1991, “Dynamic predicate logic”, *Linguistics and Philosophy*, 14: 39–100.
* Heim, I., 1982, *The Semantics of Definite and Indefinite Noun Phrases*, Ph.D. thesis, University of Massachusetts, Amherst.
* –––, 1990, “E-type pronouns and donkey anaphora”, *Linguistics and Philosophy*, 13: 137–178.
* Hintikka, J., 1962, *Knowledge and Belief: An Introduction to the Logic of the Two Notions*, Cornell University Press.
* Hobbs, J., 1979, “Coherence and coreference”, *Cognitive Science*, 3(1): 67–90.
* Hunter, J., 2013, “Presuppositional indexicals”, *Journal of Semantics*, 30: 381–421.
* Janssen, T.M.V., 1997, “Compositionality”, in van Benthem and ter Meulen 1997: 417–473.
* Kamp, H., 1981, “A theory of truth and semantic representation”, in J.A.G. Groenendijk, T.M.V. Janssen, and M.B.J. Stokhof (eds), *Formal methods in the Study of Language*, Mathematical Centre Tracts 135, Amsterdam: Mathematisch Centrum, pp. 277–322.
* –––, 1990, “Prolegomena to a structural account of belief and other attitudes”, in C.A. Anderson and J. Owens (eds). *Propositional Attitudes: the role of content in logic, language, and mind*, Stanford, CA: CSLI Publications, pp. 27–90.
* –––, 1995, “Discourse Representation Theory”, in J. Verschueren, J.-O. Östman and J. Blommaert (eds), *Handbook of Pragmatics*, Amsterdam: John Benjamins, pp. 253–257.
* –––, 2001, “The importance of presupposition”, in C. Rohrer, A. Roßdeutscher, and H. Kamp (eds), *Linguistic Form and its Computation*, Stanford, CA: CSLI Publications.
* –––, 2001, “Computation and justification of presuppositions”, in M. Bras and L. Vieu (eds.) *Semantic and Pragmatic Issues in Discourse and Dialogue*, Amsterdam: Elsevier.
* –––, 2015, “Using proper names as intermediaries between labelled entity representations”, *Erkenntnis*, 80: 263–312.
* Kamp, H. and U. Reyle, 1993, *From Discourse to Logic*, Dordrecht: Kluwer.
* –––, 1996, “A calculus for first order Discourse Representation Structures”, *Journal of Logic, Language, and Information*, 5: 297–348.
* –––, 2011, “Discourse Representation Theory”, in C. Maienborn, K. von Heusinger, and P. Portner (eds), *Semantics*, Vol 1, Berlin: Mouton de Gruyter, pp. 872–923.
* Kamp, H. and A. Bende-Farkas, 2019, “Epistemic Specificity from a Communication-Theoretic Perspective”, *Journal of Semantics*, 36(1): 1–51. doi:10.1093/jos/ffy005
* Kamp, H. and A. Roßdeutscher, 1994, “DRS-construction and lexically driven inference”, *Theoretical Linguistics*, 20: 165–235.
* Kamp, H., J. van Genabith, and U. Reyle, 2011, “Discourse Representation Theory”, in D. Gabbay (ed.), *Handbook of Philosophical Logic*, vol. 15. Berlin: Springer, 125–394
* Kanazawa, M., 1994, “Weak vs. strong readings of donkey sentences and monotonicity inference in a dynamic setting”, *Linguistics and Philosophy*, 17: 109–158.
* Karttunen, L., 1974, “Presupposition and linguistic context”, *Theoretical Linguistics*, 1: 181–194.
* Krahmer, E., 1998, *Presupposition and Anaphora*, CSLI Lecture Notes 89, Stanford, CA: CSLI Publications.
* Krifka, M., 1996, “Pragmatic strengthening in plural predications and donkey sentences”, in T. Galloway and J. Spence (eds.), *Proceedings from Semantics and Linguistic Theory* (SALT) VI, Cornell University, Ithaca, NY, pp. 136–153.
* Kripke, Saul, 1979, “A puzzle about belief”, in A. Margalit (ed.), *Meaning and Use*, Dordrecht: Reidel, pp. 239–283.
* –––, 2009, “Presupposition and anaphora: remarks on the formulation of the projection problem”, *Linguistic Inquiry*, 40: 367–386.
* Maier, E., 2009, “Proper names and indexicals trigger rigid presuppositions”, *Journal of Semantics*, 26: 253–315.
* –––, 2010, “Presupposing acquaintance: a unified semantics for de dicto, de re and de se belief reports”, *Linguistics and Philosophy*, 32: 429–474.
* –––, 2015, “Parasitic attitudes”, *Linguistics and Philosophy*, 38: 205–236.
* –––, 2017, “Fictional names in psychologistic semantics”, *Theoretical Linguistics*, 43(1–2): 1–46.
* Montague, R., 1970, “Universal grammar”, *Theoria*, 36: 373–398.
* Muskens, R., 1996, “Combining Montague Semantics and Discourse Representation”, *Linguistics and Philosophy*, 19:143–186.
* Neale, Stephen., 1990, *Descriptions*, MIT Press, Cambridge, MA.
* Partee, B.H., 1973, “Some structural analogies between tenses and pronouns in English”, *The Journal of Philosophy*, 70: 601–609.
* –––, 1984, “Nominal and temporal anaphora”, *Linguistics and Philosophy*, 7: 243–286.
* Recanati, F., 2012, *Mental Files*, Oxford: Oxford University Press.
* Rooth, M., 1987, “Noun phrase interpretation in Montague grammar, file change semantics, and situation semantics”, in P. Gärdenfors (ed.), *Generalized Quantifiers: Linguistic and Logical Approaches*, Dordrecht: Reidel, pp. 237–268.
* Saurer, W., 1993, “A natural deduction system for discourse representation theory”, *Journal of Philosophical Logic*, 22: 249–302.
* Stalnaker, R., 1974, “Pragmatic Presuppositions”, in Milton K. Munitz and Peter K. Unger (eds), *Semantics and Philosophy*, New York: New York University Press.
* –––, 1998, “On the representation of context”, *Journal of Logic, Language and Information*, 7(1):3–19.
* Thomason, R.H., 1974, *Formal philosophy: selected papers of Richard Montague*, New Haven: Yale University Press.
* van Benthem, J. and A. ter Meulen (eds), 1997, *The Handbook of Logic and Language*, Amsterdam: Elsevier.
* van der Sandt, R.A., 1992, “Presupposition projection as anaphora resolution”, *Journal of Semantics*, 9: 333–377.
* van Eijck, J., 2006, “Discourse representation theory”, in K. Brown (ed.), *Encyclopedia of Language and Linguistics* (2nd edition), Amsterdam: Elsevier.
* van Eijck, J. and H. Kamp, 1997, “Representing discourse in context”, in van Benthem and ter Meulen 1997: 179–237.
* van Leusen, N., 2007, *Description Grammar for Discourse*, Ph.D. thesis, University of Nijmegen.
* Zeevat, H., 1984, “Belief”, in Landman F. and F. Veltman (eds.), *Varieties of Formal Semantics*, Dordrecht: Foris, pp. 405–425.
* –––, 1989a, “Realism and definiteness”, in G. Chierchia, B.H. Partee, and R. Turner (eds.), *Properties, Types and Meaning*, Vol. 2, Dordrecht: Kluwer, pp. 269–297.
* –––, 1989b, “A compositional approach to Discourse Representation Theory”, *Linguistics and Philosophy*, 12: 95–131.
* –––, 1992, “Presupposition and accommodation in update semantics”, *Journal of Semantics*, 9: 379–412.
* –––, 1996, “A neoclassical analysis of belief Sentences”, in *Proceedings of the 10th Amsterdam colloquium*, ILLC, University of Amsterdam, part III, p. 723–742.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=discourse-representation-theory). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/discourse-representation-theory/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=discourse-representation-theory&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/discourse-representation-theory/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[anaphora](https://plato.stanford.edu/entries/anaphora/) | [compositionality](https://plato.stanford.edu/entries/compositionality/) | [descriptions](https://plato.stanford.edu/entries/descriptions/) | [events](https://plato.stanford.edu/entries/events/) | [indexicals](https://plato.stanford.edu/entries/indexicals/) | [presupposition](https://plato.stanford.edu/entries/presupposition/) | [semantics: dynamic](https://plato.stanford.edu/entries/dynamic-semantics/)

### Acknowledgments

We would like to thank the editors and reviewers of the Stanford Encyclopedia of Philosophy for helpful feedback, and Emilie Destruel for help with formatting.

[Copyright © 2020](https://plato.stanford.edu/info.html#c) by  
[Bart Geurts](http://www.ru.nl/ncs/bart/) <[*brtgrts@gmail.com*](mailto:brtgrts%40gmail%2ecom)>  
[David I. Beaver](http://www.utexas.edu/cola/linguistics/faculty/profile.php?id=dib97) <[*dib@mail.utexas.edu*](mailto:dib%40mail%2eutexas%2eedu)>  
Emar Maier <[*emar.maier@gmail.com*](mailto:emar%2emaier%40gmail%2ecom)>
