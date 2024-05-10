# 公理化真理论 axiomatic theories of (Volker Halbach and Graham E. Leigh)

*首次发表于 2005 年 12 月 26 日；实质性修订于 2018 年 1 月 18 日*

真理的公理化理论是一个将真理作为原始未定义谓词的演绎理论。由于说谎者悖论和其他悖论的存在，必须仔细选择公理和规则以避免不一致性。文献中讨论了许多关于真理谓词的公理系统，并分析了它们各自的性质。包括许多紧缩论者在内的几位哲学家在他们的解释中支持真理的公理化理论。形式理论的逻辑性质与各种哲学问题相关，例如关于属性的本体论地位、哥德尔定理、真理论的紧缩论、语义概念的可消除性和意义理论。

---

## 1. 动机

有许多尝试通过对应、融贯或其他概念来定义真理。然而，真理是否可定义远非明确。在满足某些自然条件的形式设置中，塔斯基关于真理谓词不可定义性的定理表明，定义真理谓词需要超出将要定义真理的形式语言的资源。在这些情况下，定义真理的方法必然失败。相比之下，公理化方法不预设真理可以被定义。相反，通过为真理或满足性引入一个新的原始谓词，然后制定该谓词的公理。这种方法本身并不排除真理谓词可定义的可能性，尽管在许多情况下可以证明真理谓词是不可定义的。

在真理的语义理论中（例如，塔斯基 1935 年，克里普克 1975 年），相比之下，真理谓词是为一种语言，即所谓的客体语言而定义的。这个定义是在一个元语言或元理论中进行的，通常认为包括集合论或至少另一个强理论或表达力丰富的解释语言。塔斯基关于真理谓词不可定义性的定理表明，根据某些一般假设，元语言或元理论的资源必须超越客体语言的资源。因此，语义方法通常需要使用比其提供语义的客体语言更强大的元语言。

与其他形式演绎系统一样，真理公理化理论可以在非常弱的逻辑框架内进行展示。这些框架需要非常少的资源，特别是避免了对强元语言和元理论的需求。

关于真理公理化理论的形式工作有助于阐明真理的语义理论。例如，它提供了关于什么是足够定义真理谓词的元语言所需的信息。反过来，真理的语义理论为研究真理公理化理论的模型提供了理论工具，并为某些真理公理化理论提供了动机。因此，真理的公理化和语义方法是相互交织在一起的。

这篇文章概述了真理的最流行的公理化理论，并提到了关于它们的一些形式结果。我们只提供了一些关于它们哲学应用的提示。

### 1.1 真理、属性和集合

真理和断言的理论与属性和属性归属的理论密切相关。说一个开放公式ϕ(x)对个体 a 成立似乎等同于声称 a 具有ϕ的属性（这个属性由开放公式表示）。例如，可以说“x 是一个糟糕的哲学家”对 Tom 成立，而不是说 Tom 具有成为一个糟糕的哲学家的属性。通过在具有真理谓词的语言中量化公式，可以模拟对可定义属性的量化。例如，不是说 a 和 b 具有完全相同的属性，而是说 a 和 b 有完全相同的公式成立。将属性归约为真理在某种程度上也适用于个体的集合。

在另一个方向上也有一些简化：塔斯基（1935 年）已经证明了某些二阶存在假设（例如，理解公理）可以用来定义真理（参见塔斯基关于真理定义的条目）。对真理公理化理论和二阶系统的数学分析展示了这些二阶存在假设和真理论假设之间的许多等价关系。

这些结果准确地展示了定义满足某些公理的真理谓词所需的条件，从而进一步深化了塔斯基对真理可定义性的洞察。特别是在下面的第 3.3 节中描述的证明论等价关系明确了元语言（或者更确切地说是元理论）必须比对象语言更丰富，才能够定义一个真理谓词。

二阶理论和真理理论之间的等价关系也与传统的形而上学主题有关。将二阶理论（即属性或集合的理论）简化为真理公理化理论可以被看作是一种还原名义主义的形式，因为它们通过对真理谓词行为的假设来替代了集合或属性的存在假设（例如，理解公理），从而在本例中形成了本体论上无害的假设。

### 1.2 真理和反思

根据哥德尔的不完全性定理，Peano 算术（PA）的一致性陈述，作为一个数论陈述（根据哥德尔编号技术），不能在 PA 本身中推导出来。但是可以通过添加这个一致性陈述或更强的公理来加强 PA。特别地，可以添加部分表达 PA 的健全性的公理。这些被称为反思原则。PA 的一个反思原则的例子是一组句子 BewPA(┌ϕ┐)→ϕ，其中ϕ是算术语言的一个公式，┌ϕ┐是ϕ的名称，BewPA(x)是 PA 的标准可证性谓词（‘Bew’是哥德尔引入的，是德语单词‘beweisbar’的缩写，即‘可证明的’）。

添加反思原则的过程可以迭代：可以将反思原则 R 添加到 PA 中，得到一个新的理论 PA+R。然后将 PA+R 的反思原则添加到 PA+R 的理论中。这个过程可以继续到超限（参见 Feferman 1962 和 Franzén 2004）。

反射原则至少部分地表达了系统的正确性。系统正确性的最自然和完整的表达涉及到真理谓词，并被称为全局反射原则（参见 Kreisel 和 Lévy 1968）。对于形式系统 S 的全局反射原则声明了在 S 中可证明的所有句子都是真的：

∀x(BewS(x)→Tx)

BewS(x)在这里表示系统 S 中句子的可证明性（我们在这里省略了关于定义 BewS(x)的问题的讨论）。真理谓词必须满足一定的原则；否则全局反射原则将是无意义的。因此不仅需要添加全局反射原则，还需要添加真理的公理。然而，如果添加了像 T(PA)这样的自然真理理论，就不再需要明确假设全局反射原则，因为像 T(PA)这样的理论已经证明了 PA 的全局反射原则。因此，可以将真理理论视为反射原则，因为它们证明了正确性陈述并添加了表达这些陈述的资源。

因此，与其迭代完全以算术语言表述的反射原理，我们可以通过迭代添加新的真理谓词和相应的新真理谓词的公理。通过这样做，我们可以希望将 PA 等理论的接受中隐含的所有假设都明确化。由此产生的理论被称为初始理论的反射闭包。Feferman（1991）提出了使用单一真理谓词和单一理论（KF）来明确 PA 和其他理论的反射闭包，而不是使用谓词和理论的层次结构。（KF 在下面的第 4.4 节中进一步讨论。）

真理理论和（迭代的）反射原理的关系也在真理理论紧缩论的讨论中变得突出起来（参见 Tennant 2002 和后续讨论）。

### 1.3 真理理论紧缩论

许多真理紧缩论的支持者选择将真理视为原始概念并对其进行公理化，通常使用某种版本的 T-句作为公理。T-句是形式为 T┌ϕ┐↔ϕ的等价式，其中 T 是真理谓词，ϕ是一个句子，┌ϕ┐是句子ϕ的名称。（真理紧缩论者还讨论了更精细的公理。）至少乍一看，公理化方法似乎比那些依赖于对应或类似定义的传统理论更少“紧缩”。如果真理可以明确定义，那么它可以被消除，而真理的公理化概念可能并且通常确实带有超出基本理论的承诺。

如果真理没有任何解释力，正如一些真理紧缩论者所声称的那样，那么真理的公理不应该允许我们证明任何不涉及真理谓词的新定理。因此，Horsten（1995 年），Shapiro（1998 年）和 Ketland（1999 年）建议真理的紧缩公理化至少应该是保守的。真理的新公理是保守的，如果它们不暗示任何额外的句子（不包含真理谓词的句子），这些句子在没有真理公理的情况下已经可以被证明。因此，真理的非保守理论向理论中添加了新的非语义内容，并具有真正的解释力，与许多真理紧缩论观点相反。然而，某些自然的真理理论并不是保守的（请参见下面的第 3.3 节，Field 1999 和 Shapiro 2002 进行进一步讨论）。

根据许多紧缩论者的观点，真理仅仅用于表达无限合取的目的。显然，并非所有的无限合取都能够被表达，因为在可数语言上存在着不可数多个（非等价的）无限合取。由于带有真理谓词的语言只有可数多个公式，因此并非每个无限合取都能够通过不同的有限公式来表达。关于真理公理化理论的形式化工作帮助我们准确地确定了哪些无限合取可以通过真理谓词来表达。Feferman（1991）对一个相当强的系统进行了证明论分析。（再次说明，这将在下面第 4.4 节关于 KF 的讨论中解释。）

## 2. 基础理论

### 2.1 基础理论的选择

在大多数公理化理论中，真理被看作是对象的谓词。关于真理适用的对象类别有广泛的哲学讨论：提出了独立于任何语言、句子和话语的类型和标记、思想以及许多其他对象的命题被看作是对象。由于被视为类型的句子结构相对清晰，因此句子类型经常被用作可以是真实的对象。在许多情况下，没有必要做出非常具体的形而上学承诺，因为只需要对这些对象的结构进行某些适度的假设，而不管它们最终被视为是句法对象、命题还是其他什么。描述可以归因于真理的对象的属性的理论被称为基础理论。基础理论的制定不涉及真理谓词或任何特定的真理论假设。基础理论可以描述句子、命题等的结构，以便在真理论公理的制定中可以使用否定这样的对象的概念。

在许多公理化真理理论中，真理被视为适用于句子的哥德尔数的谓词。Peano 算术已被证明是一个多用途的真理适用对象的理论，主要是因为将真理论公理添加到 Peano 算术中会产生有趣的系统，并且因为 Peano 算术等效于许多直接的句法理论甚至命题理论。然而，也考虑了其他基础理论，包括形式句法理论和集合论。

当然，我们也可以研究通过将真理论公理添加到像集合论这样更强的理论中得到的理论。通常情况下，无法证明集合论加上进一步的真理论公理的一致性，因为集合论本身的一致性无法在超越集合论的假设下建立起来。在许多情况下，甚至无法进行相对一致性证明。然而，如果将某些真理论公理添加到 PA 中得到一个一致的理论，那么添加类似的公理到集合论中似乎不会导致不一致性。因此，希望通过对 PA 上的真理理论的研究，能够在我们用真理谓词的公理扩展更强的理论时给出一些指示。然而，藤本（2012）已经表明，一些关于集合论的公理真理论与它们在 Peano 算术上的对应物在某些方面是不同的。

### 2.2 符号约定

为了明确起见，我们假设算术语言只有¬、∧和∨作为连接词，∀和∃作为量词。它只有符号 0 作为零的个体常量；它唯一的函数符号是一元后继符号 S；加法和乘法由谓词符号表示。因此，算术语言的唯一封闭项是数字 0、S(0)、S(S(0))、S(S(S(0)))，...。

算术语言不包含一元谓词符号 T，因此让 LT 成为算术语言，通过新的一元谓词符号 T 来增强。如果ϕ是 LT 的一个句子，那么┌ϕ┐是 LT 语言中ϕ的名称；严格来说，它是ϕ的哥德尔数的数字表示。一般来说，像ϕ和ψ这样的希腊字母是元语言的变量，即用于讨论真理理论和本条目所写的语言（即通过一些符号丰富的英语）的语言。ϕ和ψ涵盖了 LT 形式语言的公式。

在接下来的内容中，我们使用小写的大写斜体字母，如 A，B，...作为 LT 中的变量，范围是句子（或它们的哥德尔数，准确地说）。因此，∀A(…A…)代表∀x(SentT(x)→…x…)，其中 SentT(x)在算术语言中表示 x 是通过谓词符号 T 扩展的算术语言的句子。形成两个句子的合取和类似操作的句法操作可以用算术语言表示。由于算术语言除了后继符号外不包含任何函数符号，这些操作必须用适当的谓词表达式表示。因此，可以用 LT 语言说，如果 LT 的一个句子的否定不为真，则该句子的否定为真。我们可以将其写为

∀A(T[¬A]↔¬TA).

方括号表示以算术语言表达形成 A 的否定的操作。由于算术语言不包含表示将句子发送到它们的否定的函数符号，因此必须给出涉及谓词的适当释义。

因此，例如，表达式

∀A∀B(T[A∧B]↔(TA∧TB))

is a single sentence of the language LT saying that a conjunction of sentences of LT is true if and only if both sentences are true. In contrast,

T┌ϕ∧ψ┐↔(T┌ϕ┐∧T┌ϕ┐)

is only a schema. That is, it stands for the set of all sentences that are obtained from the above expression by substituting sentences of LT for the Greek letters ϕ and ψ. The single sentence ∀A∀B(T[A∧B]↔(TA∧TB)) implies all sentences which are instances of the schema, but the instances of the schema do not imply the single universally quantified sentence. In general, the quantified versions are stronger than the corresponding schemata.

## 3. 真理的类型化理论

在真理的类型化理论中，只有不包含相同真理谓词的句子的真理是可证明的，从而通过观察塔斯基在对象语言和元语言之间的区别来避免悖论。

### 3.1 可定义的真理谓词

在算术语言中可以定义特定的真理谓词。只要子语言中的公式的量化复杂性受到限制，就可以在算术语言中定义适用于算术语言子语言的真理谓词。特别地，存在一个公式 Tr0(x)，它表示 x 是算术语言的真原子句，即形如 n=k 的句子，其中 k 和 n 是相同的数字。有关部分真理谓词的更多信息，请参阅 Hájek 和 Pudlak（1993）、Kaye（1991）和 Takeuti（1987）。

可定义的真理谓词实际上是多余的，因为它们可以在 PA 中表达；因此没有必要在公理化中引入它们。以下所有的真理谓词在算术语言中都不可定义，因此至少从不可定义的意义上来说它们不是多余的。

### 3.2 T-句

所有的 T-句子都是形式为 T┌ϕ┐↔ϕ的等价式，其中ϕ是不包含真理谓词的句子。塔斯基（1935 年）称任何证明这些等价式的理论为“实质上充分的”。塔斯基（1935 年）批评了仅依赖于 T-句子的真理公理化，不是因为他追求真理的定义而不是公理化，而是因为这样的理论似乎太弱。因此，尽管该理论在实质上是充分的，但塔斯基认为 T-句子在推理上太弱。他特别观察到，T-句子不能证明完备性原理，即∀A(TA∨T[¬A])这个句子，其中量词∀A 限制在不包含 T 的句子上。

基于 T-句子的真理理论及其形式特性最近也成为所谓紧缩论真理理论背景下的关注焦点。T-句子 T┌ϕ┐↔ϕ（其中ϕ不包含 T）在一阶逻辑与恒等性上不是保守的，也就是说，它们证明了一个不包含 T 的非逻辑有效的句子。因为 T-句子证明了 0=0 和¬0=0 这两个不同的句子，从而至少存在两个对象。换句话说，T-句子在空基础理论上不是保守的。如果将 T-句子添加到 PA 中，得到的理论在 PA 上是保守的。这意味着该理论不会证明在 PA 中不可证明的不包含 T 的句子。即使在添加了所有包含真理谓词的归纳公理的情况下，这个结果仍然成立。这可以通过引用紧缩性定理来证明。

在上述概述的形式中，T-句表达了 T┌ϕ┐和ϕ之间的等价关系，只有当ϕ是一个句子时才成立。为了捕捉属性的等价关系（x 具有属性 P 当且仅当‘P’对 x 成立），必须推广 T-句。结果通常被称为统一的 T-句，并通过等价关系∀x(T┌ϕ(x––)┐↔ϕ(x))对每个开放公式ϕ(v)进行形式化，其中ϕ中至多有一个自由变量 v。下划线表示变量是从外部绑定的。更准确地说，┌ϕ(x––)┐表示将变量 v 在┌ϕ(v)┐中替换为 x 的数字的结果。

### 3.3 组合真理

正如塔斯基（1935 年）已经观察到的那样，某些理想的推广并不遵循 T-句。例如，与合理的基本理论一起，它们并不意味着如果两个合取式都为真，则合取式为真。

为了获得也能证明全量化真理理论原理的系统，可以将塔斯基关于真理的归纳子句转化为公理。在以下公理中，AtomSentPA(┌A┐)表示 A 是算术语言的原子句子，SentPA(┌A┐)表示 A 是算术语言的句子。

1. ∀A(AtomSentPA(A)→(TA↔Tr0(A)))
2. ∀A(SentPA(A)→(T[¬A]↔¬TA))
3. ∀A∀B(SentPA(A)∧SentPA(B)→(T[A∧B]↔(TA∧TB)))
4. ∀A∀B(SentPA(A)∧SentPA(B)→(T[A∨B]↔(TA∨TB)))
5. ∀A(v)(SentPA(∀vA)→(T[∀vA(v)]↔∀xT[A(x––)]))
6. ∀A(v)(SentPA(∀vA)→(T[∃vA(v)]↔∃xT[A(x––)]))

公理 1 表明，对于 Peano 算术语言的一个原子句子来说，只有当它根据该语言的算术真理谓词（Tr0 在第 3.1 节中定义）为真时，它才为真。公理 2-6 声称真理与所有连接词和量词都是可交换的。公理 5 表明，如果一个算术语言的全称量化句子为真，则它的所有数值实例都为真。SentPA(∀vA)表示 A(v)是一个最多有 v 个自由变量的公式（因为∀vA(v)是一个句子）。

如果这些公理要为像集合论这样缺乏所有对象名称的语言制定，那么公理 5 和 6 需要使用满足关系而不是一元真理谓词。

在以上 1-6 条的风格中，公理在唐纳德·戴维森的意义理论和几种真理紧缩主义方法中起着核心作用。

所有 PA 公理和 1-6 条公理给出的理论，但仅对 T-自由公式进行归纳，对 PA 而言是保守的，也就是说，它不证明任何在 PA 中不可证明的新的 T-自由定理。然而，并非所有的 PA 模型都可以扩展为 PA + 1-6 条公理的模型。这是由 Lachlan（1981）的结果得出的。Kotlarski，Krajewski 和 Lachlan（1981）通过模型论手段证明了与 PA + 1-6 条公理非常相似的保守性。尽管有几位作者声称这个结果也可以有限地证明，但直到 Enayat＆Visser（2015）和 Leigh（2015）才有这样的证明。此外，PA + 1-6 条公理给出的理论在 PA 中是相对可解释的。然而，这个结果对基础理论的选择是敏感的：对于有限公理化的理论，它是失败的（Heck 2015，Nicolai 2016）。这些证明论结果在真理紧缩主义的讨论中被广泛使用（参见 Cieśliński 2017）。

当然，PA + 公理 1-6 在某种程度上是有限制的，因为它不包含带有真理谓词的归纳公理。对于通过将所有涉及真理谓词的归纳公理添加到 PA + 公理 1-6 系统中获得的系统，有各种标签：T(PA)，CT，PA(S)或 PA + “存在一个完全归纳满足类”。这个理论不再保守于其基本理论 PA。例如，可以为 PA 形式化声音定理或全局反射原理，即所有在 PA 中可证明的句子都是真的。而 PA 的全局反射原理又意味着 PA 的一致性，这在纯粹的 PA 中无法通过哥德尔的第二不完全性定理来证明。因此，T(PA)不保守于 PA。T(PA)比 PA 的纯一致性陈述要强得多：T(PA)等价于算术理解的二阶系统 ACA（参见 Takeuti 1987 和 Feferman 1991）。更准确地说，T(PA)和 ACA 可以以一种保留所有算术句子的方式进行互译。ACA 由带有二阶语言中的全归纳的 PA 公理和以下理解原理给出：

∃X∀y(y∈X↔ϕ(x))

其中ϕ(x)是任何不包含任何二阶量词但可能包含自由二阶变量的公式（其中 x 可能是自由的）。在 T(PA)中，集合的量化可以定义为对具有一个自由变量的公式的量化，并且成员关系可以定义为将公式应用于一个数字的真值。

由于全局反射原理蕴含形式一致性，对于 PA + 公理 1-6 的保守性结果意味着在不扩展归纳公理的类型组合理论中无法推导出 Peano 算术的全局反射原理。实际上，这个理论既不能证明所有逻辑有效性为真（纯一阶逻辑的全局反射），也不能证明所有的 Peano 算术公理为真。也许令人惊讶的是，这两个无法证明的陈述中，前者更强。后者可以作为公理添加进去，而该理论在 PA 上保持保守（Enayat 和 Visser 2015，Leigh 2015）。相比之下，在 PA + 公理 1-6 上，一阶逻辑的全局反射原理等价于 Peano 算术的全局反射原理（Cieśliński 2010），这两个理论与添加了真理谓词的有界（Δ0）公式的归纳公理具有相同的算术后果（Wcisło 和Łełyk 2017）。

从 PA 到 T(PA)的过渡可以想象为对 PA 中 L-句子真实性的反思行为。同样，从类型化的 T-句子到组合公理的步骤也与反射原理相关，具体来说是与类型化统一 T-句子上的统一反射原理相关。这是一系列句子∀xBewS(┌ϕ(x––)┐)→ϕ(x)，其中ϕ在 LT 中范围内具有一个自由变量，S 是统一类型 T-句子的理论。统一反射恰好捕捉了这两个理论之间的差异：反射原理既可以在 T(PA)中推导出来，也足以推导出六个组合公理（Halbach 2001）。此外，等价性扩展到统一反射的迭代，对于任意序数α，对于类型化 T-句子的 1+α次统一反射迭代与 T(PA)扩展到序数εα的超限归纳相一致，即具有性质ωκ=κ的第α个序数κ（Leigh 2016）。

更强的二阶算术片段可以通过无类型真理系统进行解释，即通过能够证明算术句子和带有真理谓词的语言 LT 句子的真实性的真理理论；请参见下面的第 4 节。

### 3.4 分层理论

上述提到的真理理论可以通过引入索引真理谓词进行迭代。可以在 PA 的语言中添加由序数（或序数符号）索引的真理谓词，或者添加一个二元真理谓词，该谓词适用于序数符号和句子。在这方面，分层方法与第 2 节概述的框架不符，因为该语言不具备适用于句子的单一一元真理谓词，而是具有许多一元真理谓词或单一二元真理谓词（甚至是适用于序数符号和句子对的单一一元真理谓词）。

在这样的语言中，可以制定出对塔斯基真理谓词层次的公理化。在证明论方面，以 T(PA)的风格迭代真理理论对应于迭代基本概念，即迭代 ACA。迭代真理理论系统对应于分层分析系统（参见 Feferman 1991）。

Visser（1989）研究了非良基语言及其公理化的层次结构。如果在算术语言中添加了 T-句 Tn┌ϕ┐↔ϕ，其中ϕ仅包含具有 k>n 的真理谓词 Tk 到 PA，将得到一个没有标准（ω-）模型的理论。

## 4. 无类型真理

自然语言中的真理谓词没有任何明确的类型限制。因此，被认为是不足以分析自然语言的真理谓词的类型化理论（包括公理化理论和语义理论）。尽管最近 Glanzberg（2015）和其他人提倡了分层理论。这是研究无类型真理理论的一个动机，即允许证明涉及真理谓词的句子的真理的真理系统。一些无类型真理理论比前一节中调查的类型化理论具有更高的表达能力（至少只要避免使用索引真理谓词）。因此，无类型真理理论在其他理论（例如，二阶理论）的简化中是更强大的工具。

### 4.1 无类型 T-句

所有 T-句 T┌ϕ┐↔ϕ的集合，其中ϕ是语言 LT 的任意句子，即ϕ可能包含 T，与 PA（或证明对角线引理的任何理论）不一致，因为存在着说谎者悖论。因此，可以尝试仅从所有 T-句中删除导致不一致的句子。换句话说，可以考虑最大一致的 T-句集。McGee（1992）证明了存在着与 PA 一致的不可数多个最大 T-句集。因此，这种策略并不能得出单一的理论。更糟糕的是，对于一个在 PA 中既不能被证明也不能被否定的算术句（即不包含 T 的句子），可以找到一个一致的 T-句来决定这个句子（McGee 1992）。这意味着许多一致的 T-句集证明了错误的算术陈述。因此，仅删除导致不一致的 T-句的策略是注定失败的。

通过仅允许在 T-句子 T┌ϕ┐↔ϕ中仅积极地包含 T，即在偶数个否定符号的范围内，可以获得一组不涉及任何错误算术陈述的 T-句子。与第 3.2 节中的类型化理论一样，该理论不证明某些概括，但证明与下面的强类型无关的组合 Kripke-Feferman 理论相同的无 T 句子（Halbach 2009）。Schindler（2015）基于分层的引述原则获得了一个推理非常强的真理理论。

### 4.2 组合性

除了真理的引述特征外，人们还希望捕捉真理的组合特征，并将类型化组合真理的公理推广到无类型的情况。为此，必须添加关于带有真理谓词的原子句子真理的公理或规则，并解除组合公理中对无 T 句子的限制。为了将真理视为其他谓词，将添加公理∀A(T[TA]↔TA)（其中∀A 范围涵盖所有句子）。如果移除了对否定的类型化组合公理的类型限制，则获得公理∀A(T[¬A]↔¬TA)。

但是，公理∀A(T[TA]↔TA)和∀A(T[¬A]↔¬TA)在语法的弱理论中是不一致的，因此其中之一必须被放弃。如果保留∀A(T[¬A]↔¬TA)，就必须找到更弱的公理或真理迭代规则，但真理仍然是一个经典概念，因为∀A(T[¬A]↔¬TA)意味着排中律（对于任何句子，句子本身或其否定之一为真）和非矛盾律（对于没有句子，句子本身和其否定都为真）。相反，如果拒绝∀A(T[¬A]↔¬TA)并保留∀A(T[TA]↔TA)，则可以证明某些句子与其否定一起为真，或者对于某些句子，它们和它们的否定都不为真，从而得到非经典真理系统，尽管这些系统本身仍然是用经典逻辑来表述的。在接下来的两节中，我们将概述每种系统中最重要的系统。

### 4.3 弗里德曼-谢尔德理论和修正语义

FS 系统，以弗里德曼和谢尔德（1987）命名，保留了否定公理∀A(T[¬A]↔¬TA)。进一步的组合公理通过将类型限制提升到它们的无类型对应物而获得：

1. ∀A(AtomSentPA(A)→(TA↔Tr0(A)))
2. ∀A(T[¬A]↔¬TA)
3. ∀A∀B(T[A∧B]↔(TA∧TB))
4. ∀A∀B(T[A∨B]↔(TA∨TB))
5. ∀A(v)(Sent(∀vA)→(T[∀vA(v)]↔∀xT[A(x––)])
6. ∀A(v)(Sent(∀vA)→(T[∃vA(v)]↔∃xT[A(x––)]))

这些公理被添加到用 LT 语言表述的 PA 中。由于真理迭代公理∀A(T[TA]↔TA)不一致，只添加了以下两个规则：

如果ϕ是一个定理，可以推断出 T┌ϕ┐，反之亦然，如果 T┌ϕ┐是一个定理，可以推断出ϕ。

根据 McGee（1985）的结果，FS 是ω-不一致的，即 FS 证明了∃x¬ϕ(x)，但也证明了某个 LT 的公式ϕ(x)的ϕ(0)，ϕ(1)，ϕ(2)，…。然而，FS 的算术定理都是正确的。

在 FS 中，可以定义经典 Tarskian 层次的所有有限级别，但 FS 不足以使人们恢复其无穷级别中的任何一个。事实上，Halbach（1994）确定了其证明论强度，即所有有限级别的分叉真理理论（即有限迭代的 T(PA)；参见第 3.4 节）或等价地，所有有限级别的分叉分析理论。如果放弃规则的任一方向但保留另一方向，FS 将保持其证明论强度（Sheard 2001）。

FS 的优点是它是彻底的经典的：它是用经典逻辑来表述的；如果一个句子在 FS 中可证明为真，则该句子本身在 FS 中是可证明的；反之，如果一个句子是可证明的，则它也是可证明为真的。它的缺点是其ω-不一致性。FS 可以被看作是对所有有限级别的修正语义的公理化（参见关于真理修正理论的条目）。

### 4.4 Kripke-Feferman 理论

Kripke-Feferman 理论保留了真理迭代公理∀A(T[TA]↔TA)，但所公理化的真理概念不再是经典的，因为否定公理∀A(T[¬A]↔¬TA)被舍弃了。

这个理论所捕捉到的语义构造是 Tarski 类型归纳定义真理的推广，由 T(PA)所捕捉到。在这个广义定义中，我们从算术语言的真原子句开始，然后根据其组成部分的真假来声明复合句的真假。例如，在类型化的情况下，如果ϕ和ψ是真的，它们的合取ϕ∧ψ也将是真的。对于量化句子，它们的真值由其实例的真值决定（可以通过使用满足谓词使量词子句纯粹组合化）；例如，普遍量化句子将被声明为真，当且仅当它的所有实例都为真。现在，我们可以通过声明形式为 T┌ϕ┐的句子为真来将这个归纳定义的真理扩展到 LT 语言，如果ϕ已经为真。此外，如果¬ϕ为真，我们将声明¬T┌ϕ┐为真。通过将这个想法明确化，我们得到了 Kripke（1975）关于真理的一个变种，其中包含所谓的强 Kleene 估值方案（参见多值逻辑条目）。如果进行公理化，它将导致以下系统，被称为 KF（'Kripke-Feferman'），在文献中有几个变种：

1. ∀A(AtomSentPA(A)→(TA↔Tr0(A)))
2. ∀A(AtomSentPA(A)→(T[¬A]↔¬Tr0(A)))
3. ∀A(T[TA]↔TA)
4. ∀A(T[¬TA]↔T[¬A])
5. ∀A(T[¬¬A]↔TA)
6. ∀A∀B(T[A∧B]↔(TA∧TB))
7. ∀A∀B(T[¬(A∧B)]↔(T[¬A]∨T[¬B]))
8. ∀A∀B(T[A∨B]↔(TA∨TB))
9. ∀A∀B(T[¬(A∨B)]↔(T[¬A]∧T[¬B]))
10. ∀A(v)(Sent(∀vA)→(T[∀vA(v)]↔∀xT[A(x––)])
11. ∀A(v)(Sent(∀vA)→(T[¬∀vA(v)]↔∃xT[¬A(x––)])
12. ∀A(v)(Sent(∀vA)→(T[∃vA(v)]↔∃xT[A(x––)]))
13. ∀A(v)(Sent(∀vA)→(T[¬∃vA(v)]↔∀xT[¬A(x––)]))

除了真理论公理之外，KF 包括所有 PA 的公理和涉及真理谓词的归纳公理。该系统归功于费弗曼，基于他在 1979 年和 1983 年为符号逻辑协会所做的两次讲座，以及随后的手稿。费弗曼在 1991 年才将他的系统版本标记为 Ref(PA)（“PA 的弱反射闭包”），此前已经有几个 KF 的版本出现在印刷品上（例如，Reinhardt 1986，Cantini 1989，他们都提到了费弗曼的未发表作品）。

KF 本身是用经典逻辑来表述的，但它描述了一种非经典的真理概念。例如，如果 L 是说谎者句子，可以证明 T┌L┐↔T┌¬L┐。因此，KF 证明了说谎者句子和它的否定要么都是真的，要么都不是真的。因此，真理概念要么是可矛盾的（一个句子与它的否定都是真的），要么是完全的（都不是真的）。一些作者在 KF 中增加了一个排除真值过剩的公理，这使得 KF 在 Kripke 的模型构建中是可靠的，因为 Kripke 排除了真值过剩。

费弗曼（1991）证明了 KF 在证明论上等价于分层分析理论，涵盖了低于ε0 的所有级别，其中ε0 是序列ω,ωω,ωωω,…的极限，或者是关于相同序数的分层真理理论。这个结果表明，在 KF 中，可以恢复到经典 Tarskian 层次结构的公理化形式中的恰好ε0 个级别。因此，KF 比 FS 强得多，更不用说 T(PA)了。费弗曼（1991）还设计了一个加强版的 KF，与完全预测分析一样强大，即分层分析或直到序数Γ0 的真理。

正如带有类型的真理谓词一样，理论 KF（更准确地说，它的一个常见变体）可以通过对无类型 T-句子系统进行反思而获得。所讨论的 T-句子系统是统一正无类型 T-句子的扩展，其中包括一个原始的假性谓词，即该理论具有两个一元谓词 T 和 F 以及公理

∀x(T┌ϕ(x––)┐↔ϕ(x))∀x(F┌ϕ(x––)┐↔ϕ′(x))

对于在 T 和 F 中都是正的每个公式ϕ(v)，其中ϕ'表示ϕ的德摩根对偶（将 T 换为 F，反之亦然）。通过对这个解释性理论进行统一反思的应用，可以推导出 KF 相应的两个谓词版本的真理公理（Horsten 和 Leigh，2016）。反之亦然，对于有限和超限反思的推广也成立（Leigh，2017）。

### 4.5 捕捉最小不动点

如上所述，如果 KF 证明了某个句子ϕ，则ϕ在所有 Kripke 不动点模型中成立。特别地，有 2ℵ0 个不动点构成了 KF 内部理论的一个模型。因此从 KF 的角度来看，最小不动点（Kripke 理论的定义）并没有被单独指出。Burgess（2014）提供了一个名为μKF 的 KF 扩展，试图捕捉最小的 Kripke 不动点。KF 通过附加公理来扩展，这些公理表达了 KF 内部理论是在 Kripke 真理的定义公理下封闭的最小类。这可以被表述为一个单一的公理模式，对于每个开放公式ϕ，它陈述了以下内容：

如果ϕ满足与谓词 T 相同的 KF 公理，则ϕ适用于每个真句。

从证明论的角度来看，μKF 比 KF 要强大得多。表达真理谓词的最小性公理模式允许将一个算术归纳定义的系统 ID1 嵌入到μKF 中，这是一个非谓词性理论。尽管直观上是合理的，μKF 与 KF 一样存在表达上的不完备性：由于最小的 Kripke 不动点形成一个完全的Π11 集合，而μKF 的内部理论仍然是可递归可枚举的，因此在该理论的标准模型中，真理谓词的解释实际上并不是最小不动点。目前还缺乏对μKF 模型的彻底分析。

### 4.6 用超值论对 Kripke 理论进行公理化

KF 旨在成为 Kripke（1975）语义理论的公理化。该理论基于具有强克里尼评估方案的部分逻辑。在强克里尼逻辑中，并非每个句子ϕ∨¬ϕ都是定理；特别是，如果ϕ缺乏真值，这个析取式就不成立。因此，KF 的定理不包括 T┌L∨¬L┐（其中 L 是说谎者句子），而且它的否定甚至是可证明的。Cantini（1990）提出了一个受超值论方案启发的系统 VF。在 VF 中，所有经典的重言式都可以被证明为真，例如，T┌L∨¬L┐是 VF 的一个定理。VF 可以用 LT 来表述，并使用经典逻辑。它不再是一个组合性的真理理论，因为以下命题不是 VF 的定理：

∀A∀B(T[A∨B]↔(TA∨TB)).

不仅这个原理与 VF 的其他公理不一致，而且它也不符合超值论模型，因为它暗示着 T┌L┐∨T┌¬L┐，这当然是不正确的，因为根据预期的语义，谎言句子和它的否定都没有真值：两者都缺乏真值。

在 Friedman 和 Sheard（1987）的结果的基础上，Cantini 证明了 VF 比 KF 强得多：VF 在证明理论上等同于非迭代归纳定义理论 ID1，这是不谓词的。

## 5. 非经典的自指方法

到目前为止，讨论的真理理论都是在经典逻辑中公理化的。一些作者还研究了基于非经典逻辑的真理公理化理论（例如，Field 2008，Halbach 和 Horsten 2006，Leigh 和 Rathjen 2012）。有许多原因可以选择比经典逻辑更弱的逻辑。最明显的原因是通过削弱逻辑，一些之前不一致的真理公理集合变得一致。另一个常见的原因是，所讨论的公理化理论意图捕捉特定的非经典真理语义，而经典背景理论可能证明是不可靠的。

还有许多使用了可矛盾或子结构逻辑的方法。在大多数情况下，这些方法不使用像 Peano 算术这样的公理化基础理论，因此与此处考虑的设置有所偏离，尽管在将可矛盾或子结构逻辑应用于这些基础理论上并没有技术障碍。在这里，我们只涵盖与上述设置接近的解释。有关将子结构和可矛盾逻辑应用于真理悖论的更多信息，请参阅关于说谎悖论的条目中的相关部分。

### 5.1 直觉逻辑中的真理谓词

T-句子的不一致性并不依赖于经典推理。它在更弱的逻辑，如极小逻辑和部分逻辑中也是不一致的。然而，经典逻辑在限制真理原理的自由使用方面起到了作用。例如，在一个经典的基础理论上，蕴涵（→）的组合公理等价于完备性原理，∀A(T[A]∨T[¬A])。如果真理谓词下的逻辑是经典的，完备性等价于析取的组合公理。在没有排中律的情况下，FS 可以被表述为一个完全组合的理论，同时不证明真理完备性原理（Leigh & Rathjen 2012）。此外，经典逻辑对于尝试结合组合和自适应真理公理也有影响。例如，如果从 FS 中删除真理一致性公理（第 4.3 节中公理 2 的左到右方向）以及真理谓词的排中律，就可以一致地添加真理迭代公理∀A(T[A]→T[TA])。得到的理论仍然与 FS 非常相似，因为对于所有有限级别的构造性版本的修订语义规则提供了该理论的自然模型，并且两个理论共享相同的Π02 后果（Leigh & Rathjen 2012; Leigh, 2013）。这个结果应与 KF 相对比，如果没有排中律的话，KF 在选择真理公理方面仍然是最大一致的，但是它是 Heyting 算术的保守扩展。

### 5.2 克里普克理论的公理化

克里普克（1975 年）的理论以其不同的形式基于部分逻辑。为了在经典逻辑中获得理论的模型，部分模型中真理谓词的扩展再次被用作经典模型中真理的扩展。在经典模型中，假句和部分模型中没有真值的句子被声明为不真。KF 相对于这些经典模型是完备的，因此融合了两种不同的逻辑。第一种是真理谓词下的“内部”逻辑，采用强克里尼估值模式进行表述。第二种是“外部”逻辑，即完全的经典逻辑。在经典逻辑中表述 KF 的一个效果是该理论不能在真值引入规则下保持一致闭合

如果ϕ是 KF 的定理，那么 T┌ϕ┐也是定理

经典逻辑的第二个效果是对说谎者句子的排中律陈述。在克里普克的理论中，说谎者句子及其否定都没有真值，因此两者的析取不成立。结果是，如果将 KF 视为克里普克理论的公理化，它在其预期的语义上不是完备的。因此，Halbach 和 Horsten（2006 年）以及 Horsten（2011 年）探索了一个以部分逻辑为内部和外部逻辑的克里普克理论的公理化。他们的建议是，将这个理论标记为 PKF（“部分 KF”），可以将其公理化为基于强克里尼逻辑的 Gentzen 风格的双侧序演算（参见多值逻辑条目）。PKF 通过在这个演算中添加包括完全归纳和由克里普克理论规定的真理谓词的组合和真理迭代规则的皮亚诺-戴德金德公理来形成。结果是一个相对于克里普克理论是完备的真理理论。

Halbach 和 Horsten 表明，这种对 Kripke 理论的公理化比它的经典表亲 KF 要弱得多。结果表明，仅限于具有真理谓词的句子的逻辑限制也可能阻碍对无真理定理的推导。

### 5.3 添加一个条件

Field（2008）和其他人批评了基于部分逻辑的理论，因为它们缺乏“适当”的条件和双条件。一些作者提出了不能用¬、∨和∧来定义的条件和双条件。Field（2008）旨在建立一个与 PKF 相似但具有新条件的公理化真理理论。Feferman（1984）还在非经典逻辑的理论中引入了一个双条件。与 Field 和他自己的 1984 年理论不同，Feferman（2008）的 DT 理论是用经典逻辑来表述的，但它的内部逻辑再次是一个具有强条件的部分逻辑。

## Bibliography

* Aczel, Peter, 1980, “Frege structures and the notion of proposition, truth and set”, *The Kleene Symposium*, Jon Barwise et al. (editors), Amsterdam: North-Holland, 31–59.
* Bealer, George, 1982, *Quality and Concept*, Oxford: Clarendon Press.
* Burgess, John P., 2014, “Friedman and the axiomatization of Kripke’s theory of truth”, in *Foundational Adventures: Essays in Honor of Harvey M. Friedman*, edited by Neil Tennant, London: College Publications and Templeton Press (online).
* Cantini, Andrea, 1989,“Notes on Formal Theories of Truth”, *Zeitschrift für Mathematische Logik und Grundlagen der Mathematik*, 35: 97–130.
* –––, 1990, “A Theory of Formal Truth Arithmetically Equivalent to ID1”, *Journal of Symbolic Logic*, 55: 244–59.
* –––, 1996, *Logical Frameworks for Truth and Abstraction: An Axiomatic Study*, Studies in Logic and the Foundations of Mathematics (No. 135), Amsterdam: Elsevier.
* Cieśliński, Cezary, 2010, “Truth, Conservativeness, and Provability”, *Mind*, 119: 409–422.
* –––, 2007, “Deflationism, Conservativeness and Maximality”, *Journal of Philosophical Logic*, 36: 695–705.
* –––, 2017, *The Epistemic Lightness of Truth: Deflationism and its Logic*, Cambridge University.
* Enayat, Ali and Albert Visser, 2015, “New Constructions of satisfaction classes”, in *Unifying the Philosophy of Truth*, T. Achourioti, H. Galinon, K. Fujimoto, and J. Martínez-Fernández (eds.), Dordrecht: Springer, 321–335.
* Feferman, Solomon, 1962, “Transfinite recursive progressions of axiomatic theories”, *Journal of Symbolic Logic*, 27: 259–316.
* –––, 1984, “Towards Useful Type-free Theories. I.” *Journal of Symbolic Logic*, 49: 75–111.
* –––, 1991, “Reflecting on Incompleteness”, *Journal of Symbolic Logic*, 56: 1–49.
* –––, 2008, “Axioms for Determinateness and Truth”, *Review of Symbolic Logic*, 1: 204–217.
* Field, Hartry, 1999, “Deflating the Conservativeness Argument”, *Journal of Philosophy*, 96: 533–40.
* –––, 2003, “A Revenge-Immune Solution to the Semantic Paradoxes”, *Journal of Philosophical Logic*, 32: 139–177.
* –––, 2008, *Saving Truth from Paradox*, Oxford: Oxford University Press.
* Franzén, Torkel, 2004, *Inexhaustibility: a non-exhaustive treatment*, Association for Symbolic Logic.
* Friedman, Harvey and Michael Sheard, 1987, “An Axiomatic Approach to Self-Referential Truth”, *Annals of Pure and Applied Logic*, 33: 1–21.
* –––, 1988, “The Disjunction and Existence Properties for Axiomatic Systems of Truth”, *Annals of Pure and Applied Logic*, 40: 1–10.
* Fujimoto, Kentaro 2012, “Classes and Truths in Set Theory”, *Annals of Pure and Applied Logic*, 163: 1484–1523.
* Glanzberg, Michael, 2015, “Complexity and Hierarchy in Truth Predicates”, in *Unifying the Philosophy of Truth*, T. Achourioti, H. Galinon, K. Fujimoto, and J. Martínez-Fernández (eds.), Dordrecht: Springer, 211–243.
* Halbach, Volker, 1994, “A System of Complete and Consistent Truth”, *Notre Dame Journal of Formal Logic*, 35: 311–27.
* –––, 2001, “Disquotational Truth and Analyticity”, *Journal of Symbolic Logic*, 66: 1959–1973.
* –––, 2009, “Reducing Compositional to Disquotational Truth”, Review of Symbolic Logic 2 (2009), 786–798.
* –––, 2011, *Axiomatic Theories of Truth*, Cambridge University, revised edition 2014.
* Halbach, Volker and Leon Horsten, 2006, “Axiomatizing Kripke’s Theory of Truth”, *Journal of Symbolic Logic*, 71: 677–712.
* Hájek, Petr and Pavel Pudlak, 1993, *Metamathematics of First-Order Arithmetic*, Berlin: Springer.
* Heck, Richard, 2001, “Truth and Disquotation”, *Synthese*, 142: 317–352.
* –––, 2015, “Consistency and the Theory of Truth”, *Review of Symbolic Logic*, 8: 424–466.
* Horsten, Leon, 1995, “The Semantical Paradoxes, the Neutrality of Truth and the Neutrality of the Minimalist Theory of Truth”, in *The Many Problems of Realism* (Studies in the General Philosophy of Science: Volume 3), P. Cortois (ed.), Tilburg: Tilburg University Press, 173–87.
* –––, 2011, *The Tarskian Turn. Deflationism and Axiomatic Truth*, MIT Press.
* Horsten, Leon and Graham E. Leigh, 2017, “Truth is Simple”, *Mind*, 126(501): 195–232.
* Kahle, Reinhard, 2001, “Truth in applicative theories”, *Studia Logica*, 68: 103–128.
* Kaye, Richard, 1991, *Models of Peano Arithmetic*, Oxford Logic Guides, Oxford: Oxford University Press.
* Ketland, Jeffrey, 1999, “Deflationism and Tarski’s Paradise” *Mind*, 108 (429): 69–94.
* Kotlarski, Henryk and Zygmunt Ratajczyk, 1990a, “Inductive Full Satisfaction Classes”, *Annals of Pure and Applied Logic*, 47: 199–223.
* –––, 1990b, “More on Induction in the Language with a Satisfaction Class”, *Zeitschrift für mathematische Logik und Grundlagen der Mathematik*, 36: 441–54.
* Kotlarski, Henryk, Stanislav Krajewski, and Alistair H. Lachlan, 1981, “Construction of Satisfaction Classes for Nonstandard Models”, *Canadian Mathematical Bulletin*, 24: 283–93.
* Kreisel, Georg and Azriel Lévy, 1968, “Reflection Principles and Their Use for Establishing the Complexity of Axiomatic Systems”, *Zeitschrift für mathematische Logic und Grundlagen der Mathematik*, 14: 97–142.
* Kremer, Michael, 1988, “Kripke and the logic of truth”, *Journal of Philosophical Logic*, 17: 225–278.
* Kripke, Saul, 1975, “Outline of a Theory of Truth”, *Journal of Philosophy*, 72: 690–716.
* Lachlan, Alistair H., 1981, “Full Satisfaction Classes and Recursive Saturation”, *Canadian Mathematical Bulletin*, 24: 295–97.
* Leigh, Graham E., 2013, “A proof-theoretic account of classical principles of truth.” *Annals of Pure and Applied Logic*, 164: 1009–1024.
* –––, 2015, “Conservativity for Theories of Compositional Truth via Cut Elimination.” *Journal of Symbolic Logic*, 80(3): 845–865
* –––, 2016, “Reflecting on Truth”, *IfCoLog Journal of Logics and their Applications*, 3(4): 557–594.
* Leigh, Graham E., and Michael Rathjen, 2012, “The Friedman-Sheard Programme in Intuitionistic Logic”, *Journal of Symbolic Logic*, 77: 777–806.
* –––, 2010, “An ordinal analysis for theories of self-referential truth”, *Archive for Mathematical Logic*, 49: 213–247.
* Leitgeb, Hannes, 2001, “Theories of truth which have no standard models”, *Studia Logica*, 68: 69–87.
* Maudlin, Tim, 2004, *Truth and paradox. Solving the riddles*, Oxford: Clarendon Press.
* McGee, Vann, 1985, “How Truthlike Can a Predicate Be? A Negative Result,” *Journal of Philosophical Logic*, 14: 399–410.
* –––, 1991, *Truth, Vagueness, and Paradox: An Essay on the Logic of Truth*, Indianapolis and Cambridge: Hackett Publishing.
* –––, 1992, “Maximal consistent sets of instances of Tarski’s schema (T)”, *Journal of Philosophical Logic*, 21: 235–241.
* Myhill, John, 1950, “A system which can define its own truth”, *Fundamenta Mathematicae*, 37: 190–92.
* Nicolai, Carlo, 2016, “A Note on Typed Truth and Consistency Assertions”, *Journal of Philosophical Logic*, 45: 89–119.
* Reinhardt, William N., 1986, “Some Remarks on Extending and Interpreting Theories,with a Partial Predicate for Truth”, *Journal of Philosophical Logic*, 15: 219–51.
* Schindler, Thomas, 2015, “A Disquotational Theory of Truth as Strong as Z−2”, *Journal of Philosophical Logic*, 44: 395–410.
* Scott, Dana, 1975, “Combinators and classes”, in *λ-calculus and Computer Science Theory* (Lecture Notes in Computer Science: Volume 37), C. Böhm (ed.), Berlin: Springer, 1–26.
* Shapiro, Stewart, 1998, “Proof and Truth: Through Thick and Thin”, *Journal of Philosophy*, 95 (10): 493–521.
* –––, 2002, “Deflation and Conservation”, *Principles of truth*, Volker Halbach and Leon Horsten (eds.), Frankfurt a.M.: Dr. Hänsel-Hohenhausen, 103–128
* Sheard, Michael, 1994, “A Guide to truth Predicates in the Modern Era”, *Journal of Symbolic Logic*, 59: 1032–54.
* –––, 2001, “Weak and strong theories of truth”, *Studia Logica* , 68: 89–101.
* –––, 2002, “Truth, probability, and naive criteria”, *Principles of truth*, Volker Halbach and Leon Horsten (eds.), Frankfurt a.M.: Dr. Hänsel-Hohenhausen, 169–181.
* Takeuti, Gaisi, 1987, *Proof Theory* (Studies in Logic and the Foundations of Mathematics: No. 81), Amsterdam: North-Holland, second edition.
* Tarski, Alfred, 1935, “The Concept of Truth in Formalized Languages”, in *Logic, Semantics, Metamathematics*, Indianapolis: Hackett 1983, 2d edition, 152–278.
* Tennant, Neil, 2002, “Deflationism and the Gödel-Phenomena”, *Mind*, 111: 551–582.
* Turner, Raymond, 1990, *Truth and modality*, London: Pitman.
* Visser, Albert, 1989, “Semantics and the liar paradox,” *Handbook of Philosophical Logic*, 4: 617–706.
* Yablo, Stephen, 1993, “Paradox without self-reference,” *Analysis*, 53: 251–252.
* Wcisło, Bartosz, and Mateusz Łełyk, 2017, “Notes on bounded induction for the compositional truth predicate”, *Review of Symbolic Logic*, 10: 455–480.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=truth-axiomatic). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/truth-axiomatic/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=truth-axiomatic&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](http://philpapers.org/sep/truth-axiomatic/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[compositionality](https://plato.stanford.edu/entries/compositionality/) | [Gödel, Kurt](https://plato.stanford.edu/entries/goedel/) | [Gödel, Kurt: incompleteness theorems](https://plato.stanford.edu/entries/goedel-incompleteness/) | [liar paradox](https://plato.stanford.edu/entries/liar-paradox/) | [paradoxes: and contemporary logic](https://plato.stanford.edu/entries/paradoxes-contemporary-logic/) | [properties](https://plato.stanford.edu/entries/properties/) | [Tarski, Alfred: truth definitions](https://plato.stanford.edu/entries/tarski-truth/) | [truth: deflationism about](https://plato.stanford.edu/entries/truth-deflationary/)

[Copyright © 2018](https://plato.stanford.edu/info.html#c) by  
[Volker Halbach](http://users.ox.ac.uk/~sfop0114/) <[*volker.halbach@philosophy.ox.ac.uk*](mailto:volker%2ehalbach%40philosophy%2eox%2eac%2euk)>  
[Graham E. Leigh](https://www.gu.se/en/about/find-staff/grahamleigh) <[*graham.leigh@gu.se*](mailto:graham%2eleigh%40gu%2ese)>
