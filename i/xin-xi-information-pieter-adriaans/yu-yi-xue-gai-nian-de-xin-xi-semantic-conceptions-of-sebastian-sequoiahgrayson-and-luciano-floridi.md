# 语义概念的信息 semantic conceptions of (Sebastian Sequoiah-Grayson and Luciano Floridi)

*首次发表于 2005 年 10 月 5 日星期三；实质性修订于 2022 年 1 月 14 日星期五*

信息是一种丰富的商品。它可能是最丰富的商品之一。现在几乎是众所周知的，感兴趣的各方，从个人到大规模全球化的私人行为者和国家，都会不遗余力地保护和获取信息。如果我们允许自己进行一点躺在沙发上的词源学，那么某物的形成只是为了使其非随机。事实上，这种躺在沙发上的词源学直接涉及到我们通常如何谈论信息的核心，作为与随机化的对比。事实上，“信号与噪声比”可以重新表述为“信息与噪声比”，因此“那不是信息，只是噪声”这一句子的普遍存在。

另一种说法是，信息是一种具有差异的非随机区别。信息是在模式化的偏差上监督的，从环境中获取信息取决于一个人能够识别和利用这些模式。我们环境的一部分可能携带关于另一部分环境的信息，这取决于我们的环境以可靠、非随机的方式行为。我们能否利用环境中的一部分信息来访问另一部分信息，不仅取决于我们识别模式化的规律的能力，还取决于我们识别这些规律之间的联系的能力。

例如，为了从近端信息中得知有烟，进而获取到远端信息中有火，我们必须意识到烟和火之间的关联。我们所做的是遵循“烟即火”的准则。这种世界事件之间的自然意义关联是由香农和韦弗提出的通信数学理论（参见信息条目）进行研究的。这是通信工程师所分析的“行业标准”信息解释。然而，自然语言编码的信息如何呢？这种更具体的语义意义上的信息又如何呢？语义学概念的信息研究的不是信号本身的意外价值与信号本身的可能性之间的关系（如通信数学理论所做的）。相反，它将研究由传递的信息所携带或编码的信息的本质。另一种方法是将这种语义学概念的信息理解为对某种语言片段的信息内容进行调查。这些语言片段可能是命题、特定术语、描述等等。

语义学概念的信息中，第一个详细阐述的理论是巴尔-希勒尔和卡纳普的语义信息理论。因此，在第 1 节中我们从这里开始。在第 1.1 节中，我们将看到语义信息理论对某些类型的陈述，即逻辑真理和矛盾，产生了一些人们认为违反直觉的后果。在第 1.2 节中，我们将看到弗洛里迪如何回应这些问题，以及其他人如何扩展和回应弗洛里迪提出的我们接受真实性命题的建议——即信息应该是事实性的。许多这样的回应是基于现实主义和自然主义对语义信息本体论的考虑。在第 2 节中，我们将研究将自然主义形而上学认真对待的语义学概念的信息。在这里，我们将看到福多尔、德雷茨克、埃文斯、刘易斯、雷卡纳蒂和杰克逊提出和捍卫的语义学概念的信息，这些概念依赖于表达方式，并且在广义上是自然主义的，因为它们试图将信息纳入各种因果关系之中。任何关于意义或知识的因果理论都将面临解释抽象对象的意义以及我们对其的认识获取的问题。

大部分在第 2 节中概述的广义语义信息理论在某种程度上都涉及信息通道（通道是一种允许信息从一个状态流向另一个状态的关系）。在第 3 节中，我们将直接讨论信息通道理论。（有关信息通道理论的形式属性的详细研究，以及该理论如何与逻辑和信息的其他问题相关联，请参阅逻辑和信息的条目。）我们将看到，Barwise 和 Perry 提出的原始信息通道理论是如何从 Austin 的语义内容理论中发展而来的，以及信息通道理论如何被发展和扩展，以便为信息流本身提供语义学，以及为自然语言片段和认知现象提供信息语义学。

---

## 1. Bar-Hillel 和 Carnap 的语义学信息理论

语义学概念的信息的最自然起点是 Carnap 和 Bar-Hillel 的《语义信息理论概要》（1952 年）。Bar Hillel 和 Carnap 的语义信息理论是一种定量理论，它起源于更一般的信息理论（请参见信息条目中关于 Shannon 的第 4.2 节）。他们的理论旨在为我们提供一个可用的框架，用于计算特定语言中句子所编码的语义信息的数量。在他们的案例中，所讨论的语言是一元谓词逻辑。哲学细节基于一种被称为逆范围原则（IRP）的思想。粗略地说，IRP 表明句子所携带或编码的信息量与其他某个事物成反比，而这个其他事物是可以附加一个精确数值的事物。一旦这样做了，就可以使用这个数值来计算语义信息的度量，正如语义信息理论所理解的那样。

对于巴尔-希勒尔和卡纳普来说，一个句子所编码的语义信息量与该句子的真实性的可能性成反比。因此，对于他们来说，真实性的可能性是我们可以附加一个精确数值的“其他东西”。为了说明这一点，我们从他们计算语义信息的定性个体化方法开始，即内容或“Cont”。

其中 s 是一个句子，W 是所有可能世界的集合，内容定义如下：

(1)Cont(s):={x∈W:x⊢¬s}

鉴于句子 s 的内涵是句子为真的所有世界的集合，而句子的内容是句子为假的所有世界的集合，句子 s 的内涵和内容在所有世界 W 的集合上形成一个划分。

Bar-Hillel 和 Carnap 为语义信息的定量计算定义了两种不同的方法——内容度量（cont）和信息度量（inf）。他们从先验概率测度 p(s)开始，该测度是从先验分布得到的。先验分布对 W 进行求和得到 1，并且我们假设所有分配是等概的，因此先验概率测度是由该分布得到的 p(s)的值。在这种情况下，可以如下定义 cont 和 inf：

(2)(3)cont(s):=1−p(s)inf(s):=log211−cont(s)

为了技术原因，这两个措施是必需的，以便分别捕捉内容独立性和归纳独立性上的可加性。当两个句子 s 和 s'没有任何共同的世界时，它们是内容独立的。当每个句子在给定另一个句子的条件概率等于它们的初始无条件概率时，句子 s 和 s'是归纳独立的。对于 cont 来说，归纳独立性上的可加性失败了，因为可能存在 cont(s∧s')≠cont(s)+cont(s')的情况，这是由于 p(s)和 p(s')有共同的世界，即尽管它们在归纳上是独立的，但在内容上不是独立的。为了使 cont 上的可加性成立，需要的是内容独立性，而不是归纳独立性。相比之下，对于 inf 来说，归纳独立性上的可加性并不失败。Bar-Hillel 和 Carnap 的证明是非平凡的（见他们 1952 年的 244-5 页）。

### 1.1 语义学概念的信息理论问题

技术问题搁置不谈，一些哲学问题是立即出现的。首先，在实践中我们如何知道有多少可能的词汇？如果我们谈论的是英语中所有可能句子的可能世界数量，那么它们将是无限多的。Bar-Hillel 和 Carnap 通过仅讨论由具有有限数量谓词符号的单调谓词逻辑公式所编码的语义信息来避免了这个问题。如果有 n 个谓词符号，将会有 2n 个可能对象，用尽了所有可能的谓词组合。然后将有 22n 个可能世界（Bar-Hillel 和 Carnap 所说的“状态描述”），对应于所有可能的对象组合。Hintikka（1970 年，1973 年）将 Bar-Hillel 和 Carnap 的语义信息理论从单调谓词逻辑扩展到完全一般的谓词逻辑。

第三，更一般地说，巴-希勒尔和卡纳普的语义学信息理论引发了两个在哲学上具有重要意义的问题。

* 巴-希勒尔和卡纳普语义悖论（BCP）
* 推理丑闻（SOD）

BCP 指的是 Bar-Hillel 和 Carnap 的语义学概念的信息理论，将最大的信息赋予矛盾的句子。其中 ⊥ 是任意的矛盾，假设 ⊥ 在所有可能的世界中都为假，我们分别通过(1)、(2)和(3)得到以下结果：

(4)(5)(6)Cont(⊥)=W（即最大内容）cont(⊥)=1inf(⊥)=∞

Bar-Hillel 和 Carnap（1952: 229）对这种情况做出了如下回应：

> 一开始，一个自相矛盾的句子，因此一个理想的接收者不会接受的句子，被认为携带着最全面的信息，可能会让人感到奇怪。然而，需要强调的是，这里的语义信息并不意味着真实性。一个错误的句子，恰好说了很多，因此在我们的意义上具有很高的信息量。它所携带的信息是真实的还是虚假的，科学上有价值还是没有价值等等，这些并不关系我们。一个自相矛盾的句子断言得太多；它的信息量太大，以至于不能是真实的。

这种回应有两个方面引起了哲学界的关注。第一个是他们对语义信息的概念是非事实性的——语义信息不需要是真实的。第二个是他们认为他们的语义信息的概念在某种非平凡的意义上支撑了信息量。

SOD 指的是哲学上对信息的描述尚未对逻辑真理和演绎推理的信息量进行解释。Bar-Hillel 和 Carnap 的语义信息理论将最小的信息赋予了逻辑真理（而有效的演绎推理可以通过将前提连接成一个以结论为其结果的条件句的前件来转化为逻辑真理）。其中 ⊤ 是任意的重言式，鉴于 ⊤ 在所有可能的世界中都为假，我们通过（1）、（2）和（3）分别得到以下结果：

(7)(8)(9)Cont(⊤)=∅cont(⊤)=0inf(⊤)=0

关于逻辑真句返回最小信息值，巴-希勒尔和卡纳普（1952: 223）的回答如下：

> 然而，这绝不意味着这些句子的信息量根本不为零，对于某些人来说，甚至可能相当高。为了避免歧义，我们将使用形容词“语义”来区分我们目前感兴趣的“信息”在前系统的意义上以及它们的系统化解释与其他意义（如“对于人 P 的心理信息量”）和它们的解释。

我们将在下面的 3.2 节中简要介绍 SOD。然而，请注意，Hintikka（1970 年，1973 年）曾经进行了一次技术上英勇但最终失败的尝试来解决这个问题（参见 Sequoiah-Grayson（2008）），而对于详细的调查，请参阅逻辑和信息的条目。现在我们必须认识到，Bar-Hillel 和 Carnap 的回应带来了一些值得注意的哲学主张。首先，Bar-Hillel 和 Carnap 暗示逻辑真理所编码的信息类型以及所编码的数量在某种意义上是心理学的。此外，即使对于相同的逻辑真理，它在一个人身上可能与另一个人不同。其次，他们遵循了克劳德·香农（Claude Shannon）的以下建议，克劳德·香农是通信数学理论的创始人，这个建议是在两年前提出的。

> “信息”一词在信息论的一般领域中被不同的作者赋予了不同的含义。至少其中一些在某些应用中可能被证明是有用的，值得进一步研究和永久认可。不可能期望一个单一的信息概念能够令人满意地解释一般领域的众多可能应用。（1950 年 [1993: 180]）。

香农提倡丰富的信息多元主义，关于其详细发展，请参阅 Allo（2007）。正如我们即将看到的，香农在这一点上的建议无疑是英明的。

### 1.2 弗洛里迪关于强语义信息的理论

弗洛里迪（Luciano Floridi）关于强语义信息的理论（2004 年，2005 年）是对 BCP 的回应，其动机是认为巴尔-希勒尔和卡纳普的理论存在根本性的问题。怀疑的是，他们的理论基于一个过于薄弱的语义原则，即真值与语义信息无关。弗洛里迪的提议是，一种基于语义信息是事实性的方法可以避免这个悖论，并且由此得出的理论更符合我们对信息的普遍概念。论证的线索是，基于真理和差异值而不是概率的强语义信息理论可以成功地避免 BCP。相关地，参见 Bremer 和 Cohnitz（2004 年：第 2 章）对下面将要描述的弗洛里迪理论的概述，以及 Sequoiah-Grayson（2007 年）对强语义信息理论的辩护，反驳了 Fetzer（2004 年）和 Dodig-Crnkovic（2005 年）的独立异议。

在我们阐述弗洛里迪的方法之前，注意到一些人提出了一种不同的真理性方法，即使用真实性或类真性来阐释语义信息的概念，如 Frické（1997 年），Cevolani（2011 年，2014 年）和 D'Alfonso（2011 年）。通常，这些方法试图将事实信息与关于所有经验事实或某个有限相关领域的完全真实性相类比。它们也避免了 BCP，也不使用概率。然而，真实性与真实本身不同，因为一个真理承担者可以在实际上不是真实的情况下具有类真性，即在错误的情况下，因此类真性信息的解释可以允许错误的陈述可能具有信息。事实上，根据这种观点，错误的陈述有时可能比它们的真实否定陈述携带更多信息，参见 Frické（1997 年）。

相比之下，弗洛里迪的强语义事实信息被定义为良好形成、有意义和真实的数据。这种对语义信息的事实性约束通常被称为真实性论题（VT）（在明格斯（1995 年，1996a 年，1996b 年）中预示）。重要的是，VT 的版本在关于信息的本体论地位的讨论中出现，不仅仅是关于特定的语义信息——参见德雷茨克（1981 年）的一个经典例子。一旦内容被这样定义，命题 p 中强语义信息的数量是根据 p 与 p 所模拟的情境 z（其中情境是部分或不完整的世界）之间的距离来计算的。

当 p 在所有情况下都为真时，但当 p 在所有情况下都为假时，p 与 p 所模拟的情境 z 之间存在最大距离（而不是最大接近度）。相比之下，最大接近度等同于在约定的抽象层次或描述充分性上对 z 进行精确建模。在真实性方向上的最大距离将导致 p 在所有情况下都为真，其中 p=⊤，并且信息量最小。同样，在假性方向上的最大距离导致 p 在所有情况下都为假（所有可能的情境或概率为 0），其中 p=⊥，并且信息量最小。这里的重要区别在于，该方向上的任何距离都是完全缺乏强语义信息的距离。这是因为在“假”的方向上的距离违反了强语义信息的事实性条件。

Floridi 将信息性与强语义信息本身区分开来。这是可取的，因为强语义信息是事实性的，而虚假陈述仍然可以是信息性的。实际上，虚假陈述 s 可能比真实陈述 s'更具信息性，尽管 s'携带强语义信息而 s 不携带。举个例子，假设你正在为一个活动承办餐饮合同，并且实际上将有 200 人参加。假设 s 是将有 201 人参加，s'是将有 100 到 200 人参加。s'是真实的，而 s 是虚假的，但在任何对信息性概念的自然理解中，s 比 s'更具信息性。

在 σ 是一段强语义（因此是真实的）信息，z 是它完全准确描述的目标情境的情况下，σ 离 z 越远，适用于它的情境数量就越多，其信息性程度就越低。Floridi 使用“Θ”来表示真实的 σ 和 z 之间的距离（请记住，Floridi 对非事实性信息不感兴趣，并且可能会否认存在任何明智的这种商品）。Θ 表示 z 对 σ 提供的支持程度。给定特定的 σ 和相应的目标 z，Floridi 将 Θ 的值映射到笛卡尔坐标图的 x 轴上。现在我们需要一个公式来计算 σ 的信息性程度 ι（σ）与 Θ（σ）的关系。Floridi 的建议是通过计算 Θ（σ）的距离的补集的平方来计算 ι（σ）的值：

(10)ι(σ)=1−Θ(σ)2

ι 的值范围从 0 到 1，并沿笛卡尔图的 y 轴进行映射。图 1 显示了当我们为假的 σ 包括负值时，由(10)生成的图形。Θ 的范围从 −1=⊥ 到 1=⊤：

![A graph with a curve starting at 1,0, labelled necessarily false, rising to 0,1 then falling to 1,0, labelled necessarily true; the quadrant for x less than 0 is labelled inaccuracy; the quadrant for x greater than 0 is labelled vacuity The rest is explained above](https://plato.stanford.edu/entries/information-semantic/informativeness.svg)

 图 1

#### 响应和扩展

Floridi (2012)将强语义信息理论扩展到传统认识论的问题上。他的解释网络理论涉及到这样一个论点：如果强语义信息被嵌入到一个能正确解释它的问题和答案网络中，那么这对于强语义信息来说是必要且充分的，以便被视为知识。Floridi (2008)发展了一个相关语义信息理论，以阐述一个认识论相关性理论。在这里，他认为相关语义信息的性质是对真实性论题的进一步证明。在 Floridi (2011)中，他进一步探讨了语义信息成为真实的含义。他不接受对应、一致性或实用主义的真理理论，而是发展了他所称的真实性论题的正确性理论，该理论与上述的解释网络理论直接相关。

Floridi (2006)认为模态逻辑 KTB 很适合扮演被告知的逻辑角色（KTB 是在模态逻辑条目中描述的 B 系统）。KTB 本身在被告知的背景下授权了真实性论题的一个版本，即 Iαp→p（其中 I 是一个普遍的模态运算符，因为 □p→p 是 KTB 的公理）。"被告知" 被理解为一种与知识和信念都不同的认知状态。Allo (2011)为被告知逻辑提供了纯粹和应用版本的形式语义学。Primiero (2009)反对真实性论题作为一个成为被告知的逻辑。Primiero 的成为被告知逻辑是一种认识论建设性信息的逻辑，在其中信息的定义要求将其与真实性区分开来。认识论建设性信息将命题内容的信息理解为证明条件，而不是真值条件。

更广泛地说，Dinnen 和 Brauner（2015）寻求对信息的单一定义（无论是语义的还是其他的），并发现真实性论是阻碍因素。相比之下，Mingers 和 Standing（2018）主张对信息进行单一定义，支持真实性论。Allo（2007）通过对语义信息本身的现实主义解释，预先解决了这些问题，提出了信息多元主义的论点（类似于逻辑多元主义，请参见该条目）。对语义信息的现实主义解释自然地引出了一个问题，即语义信息如何从自然界中产生并成为其中的一部分——这个问题在 Vakarelov（2010）中详细讨论。关于信息如何以自然主义的方式加以解释的问题在哲学中有着丰富的历史，尤其是在下一节中介绍的信息语义学中。

尽管 Floridi 的语义信息观点（除了信息多元论之外）并不是没有争议的，但他的动机直觉具有一些哲学先例。首先，很少有人会满意 Bar-Hillel 和 Carnap 的观点：“自相矛盾的句子断言得太多，它太具信息性而不能为真”。其次，关于逻辑真理在 Floridi 的观点中具有零语义信息的问题，回想一下维特根斯坦以典型的直率方式表达的观点：“逻辑命题都是说同一件事，即什么也不是。它们是重言式”（《逻辑哲学论》4.46，6.1）。理解 Floridi 关于强语义信息理论的一种方式是将其视为我们从我们的特定客观物理环境中获得的信息理论，因为我们的物理环境是一个关于其中矛盾和逻辑真理通常最不具信息性的环境。关于信息的语义概念旨在讲述关于我们所谓的指称术语内容的自然故事，在哲学中有着丰富的历史，这是我们现在要讨论的话题。

## 2. 信息、表达方式和意义

语义学概念的信息在某种程度上自弗雷格的《意义与指称》以来一直在哲学中很常见。故事如下。一个指称性词汇的意义必须超越其所指，因为词汇可以共指。例如，James Newell Osterberg Jr.和 Iggy Pop 都指向同一个个体。尽管如此，我们强烈感觉到他们的意义并不相同。“Iggy Pop 是 Iggy Pop”和“Iggy Pop 是 James Newell Osterberg Jr.”似乎并不意味着相同的事情。同样，似乎“Alice 相信 Iggy Pop 是 The Stooges 的歌手”可能是真的，而“Alice 相信 James Newell Osterberg Jr.是 The Stooges 的歌手”可能是假的，至少在与我们对意义的直觉一致的自然解读中是如此。

弗雷格的众所周知的回应是，指称性词汇的意义既包括其所指也包括其意义。但是，一个词汇的意义是什么？弗雷格自己解释意义的方式是通过表达方式（MOP）来阐述的，这个概念后来被许多哲学家采用。一个指称性词汇的表达方式是我们通过现象学来认识该词汇的所指。在我们理解一个词汇的意义时，我们会使用表达方式来尝试识别或定位该词汇的所指。许多以信息为基础的当代意义理论在某种程度上都包含了表达方式。之所以如此，是因为尽管将一个词汇的意义简化为仅由其传递的信息很有吸引力，但这种做法已被证明是困难的。

将意义和信息视为几乎相同的诱惑是以下观念的结果。这个观念是，词语“猫”表示具有猫的属性，并且它之所以意味着猫，是因为它表达了猫的概念，而猫的概念意味着猫。猫的概念之所以意味着猫，是因为它携带了信息 ⟨ 猫 ⟩，而猫携带了信息 ⟨ 猫 ⟩，是因为它的实例或标记主要是由猫引起的。这是一个很好的观念。通过将意义和信息联系在一起，并讲述一个关于它们的因果故事，我们可以对从环境中获取的信息讲述一个自然主义的故事，从而对意义讲述一个自然主义的故事。这样的信息传递因果关系是信息通道-促进信息在信息源和接收者之间流动的因果连接。我们应该注意到，这个故事讲述的是关于子命题位置上的信息的信息语义故事，例如谓词“猫”和单个术语的典型用法。因此，它位于上述语义和强语义信息理论所描述的领域之外。尽管如此，我们将看到，这个故事的完善依赖于追踪准确性，即使不是真实性本身。

在这个信息语义学领域的一系列有影响力的作品中，杰里·福多尔（1990 年）和弗雷德·德雷茨基（1981 年）提出了一种与上述概述相似的语义学理论（请参阅有关心理内容因果理论的条目）。这样一个信息语义学的一个著名问题被普遍称为析取问题。析取问题如下所示。猫的符号标记并不总是由猫引起的，有时也会由其他事物引起，例如小狗（或者关于毛线球的思想）。根据上述事实，如果上面的故事是正确的，那么为什么猫的意思是猫而不是猫或狗呢？福多尔（1990 年）的回答分为两个阶段。

首先，福多尔最初的提议是，猫的非由猫引起的符号标记在某种程度上依赖于由猫引起的猫的符号标记。也就是说，如果没有由猫引起的猫的符号标记，就不会有任何非由猫引起的猫的符号标记。其次，在福多尔的观点中，意义和信息是分离的。一个概念的符号标记所携带的信息与其原因相关，而一个符号标记的意义是所有该概念的符号标记所共有的东西——我们猫的符号标记的内在载体，或者它们的 MOPs。请注意，福多尔严格来说并没有将信息作为意义的一部分，而是将它们分开。福多尔认为，我们没有意识到意义和信息是分离的，这是因为首先，它们往往是一致的，其次，“意味着”是语义内容（意义）和信息传递的同音词。请考虑以下两种使用方式：“意味着”：

* 烟意味着火。
* “Smoke” 意味着烟雾。

在 Fodor 的观点中，第一次使用是指仅携带信息。烟雾携带了有火的信息，但这并不是它在语义上的意思。在语义上，“烟雾”的意思就是烟雾，这由上面“意味着”后面的后一次使用所捕捉到。根据 Fodor 的说法，就像上面的“猫”一样，“烟雾”之所以意味着烟雾，是因为它表达了烟雾，并且烟雾的令牌化通常（但并不总是！）由烟雾本身引起。上面的“并不总是”限定由不对称依赖条件所覆盖。到目前为止还好，但是那些不存在的对象，比如澳洲土著传说中的神秘动物 bunyips 呢？由 bunyip 引起的 bunyip 令牌化的 bunyip 令牌不能对 bunyip 引起的 bunyip 令牌的不对称依赖，因为根本没有 bunyips 存在来引起任何事情。

鉴于像 bunyips 这样的不存在的对象，以及尽管没有 bunyips 存在但 bunyip 令牌的意义，Fodor 调整了他的提议，使得意义现在依赖于属性之间的非对称依赖关系，而不是个体之间的实际因果关系。非对称依赖关系是通过反事实条件来解释的，因此现在我们有了一种信息语义，如下所示：bunyip 之所以意味着 bunyip，是因为如果存在 bunyips，bunyips 将是 bunyip 令牌的原因，而其他所有原因都将对其产生非对称依赖。

再次回想一下，Fodor 正在将意义和信息分开。 Gareth Evans（1982 年）提出了一种类似的信息理论，但其中信息和 MOP 都被包含在语义故事本身中。对于 Evans 来说，关于关于特定对象的思想的意义的完整故事——至少在世界上是这样的——需要考虑到思想的因果起源以及由此产生的 MOP。Evans 称这样的思想为基于信息的特定思想，只有当满足 MOP 的对象和因果路径源端的对象是同一个东西时，这样的思想才是牢固的。

Fodor/Dretske 和 Evans 关于信息语义的理论的共同之处在于，它们都承认思想的意义或内容/对象在因果变化中是稳定的：

> 我们希望能够说两个信息状态（不同人的状态）体现了相同的信息，只要它们是由相同的初始信息事件产生的。（Evans 1982: 128–129）
>
> 信息论...在量化维持这些协变量的因果机制的同时，诉诸可靠的协变量。通过这样做，它们解释了为什么信息（确实，为什么是相同的信息）可以通过如此多种不同类型的通道传输。（Fodor 1990: 100）

此外，尽管 Evans 没有用这些术语来表述，但 Fodor、Dretske 和 Evans 都将信息通道视为独立的实体。

François Recanati（2012 年，2016 年）在他的心智文件理论中提出了信息语义的详细版本，其中信息通道起着核心作用。Recanati 的心智文件是指称概念的认知对应物。Recanati 的观点乍一看与 Evans 的基于信息的特定思想非常相似。然而，在 Recanati 的观点中，心智文件以 MOPs 的形式包含信息，无论是直接和经验性地给出，还是通过描述间接给出，它们的指称都不是由它们所包含的信息/表达方式来确定的。相反，心智文件的指称是由该文件所基于的关系来确定的，而心智文件的指称将是我们正确熟悉的实体或对象，这是由这些关系的存在决定的。因此，Recanati 允许 MOPs 本身包含信息，而不仅仅将信息的作用限制在于指称确定关系本身（正如 Evans 和 Fodor 所做的）。识别这些关系的特征是它们具有认识上的回报（ER）关系。对于 Recanati 来说，关系之所以是 ER 关系，是因为它是使信息流动成为可能的一种关系。换句话说，ER 关系就是信息通道。

Recanati 的 ER 关系在很大程度上借鉴了 Lewis（1983）关于“认知关系”的关系，即允许信息流动的因果链，或者换个名字叫做信息通道。Recanati 和 Lewis 都承认了分离问题，允许信息通道上既可以传递信息也可以传递错误信息。Recanati 认为，心智文件的指称是由贡献给心智文件所包含的信息的信息通道的远端的对象来确定的，与“适应性”无关。当然，由于噪声通道和/或代理人的误认，适应性可能不好。正如 Recanati 所说：

> 基于某种熟人关系的心智文件的作用是存储通过该关系获得的信息。所涉及的信息不一定是真实的；我们可以简单地将其视为主体认为指称满足的谓词列表。指称对象不一定实际满足所涉及的谓词，因为主体可能会犯错。这种错误是可能的，因为决定指称的不是文件的内容，而是与对象的相关关系。文件对应于信息通道，指称是信息来源的对象，无论该信息是真实信息还是错误信息。（2012 年：37-38）

这里读起来好像 Recanati 将心智文件与携带其信息负载的信息通道混为一谈。事实上，Recanati 继续论证存在两个合理且“不同的文件概念”（第 82 页）。第一个概念只是一个看似关于单个独特对象的不断演变的信息存储库。文件的第二个概念，即 Recanati 所称的“适当概念”，涉及特定的相关信息通道和通过该通道获得的信息存储库。

与 Fodor、Dretske、Evans、Recanati 和 Lewis 一起，Frank Jackson（2010）也阐述了一种基于信息通道的语义理论，这些信息通道是建立在因果关系之上的，以及 MOPs。Jackson 的 MOPs 与描述相对应。Jackson 对专有名词的描述性参照理论依赖于信息通道，这些信息通道以支撑信息流的因果链接形式进行阐述。Jackson 的动机是，名字在很大程度上是关于它们所指称的实体的信息来源。描述维度是由它们（描述）在信息传递的因果连接方面进行规定而产生的函数 - 信息通道。

对于 Jackson 来说，语言通常是一种表示系统，它向理解该语言的人传递关于事物被认为是什么样的信息。当名字在陈述句中使用时，说话者将事物表示为某种方式。在这种情境中使用名字是为了向语言社区中的其他说话者传递关于事物的假定信息。根据 Jackson 的观点，名字之所以能够实现这一点，是因为它们是存在于语言使用者和世界之间的信息通道的一部分。为了追踪信息通道本身以获取其中的信息，我们必须理解语言项目（词语和句子）与世界可能性之间的结构化连接。名字本身通过存在于我们与世界之间的信息通道中来促进这种实践。这些通道是由语言使用的约定和命名的既定惯例所创建的。

鉴于上述理论中信息渠道的普遍存在，信息渠道成为了一个独立研究的课题并不令人意外。信息渠道理论对自然语言和形式语义的基于信息的分析做出了贡献。

## 3. 信息渠道理论

信息渠道理论，也称为渠道理论，起源于情境语义（参见该词条），后者是基于观察到意义依赖于世界中的系统规律，并且这些规律是我们理解任何意义的必要条件（Barwise 1993）。Jon Barwise 和 John Perry（1983）利用这一观察结果来证明和推动一种自然主义的意义理论。情境理论的早期工作集中在情境本身，最好以模态术语中的部分世界来思考。重要的是，情境理论本身以集合论而非模态方式处理事物的形式方面，尽管如下所述，模态解释已经占据主导地位。

语境理论早期关注约束，将约束最有用地视为条件句。语境理论在奥斯汀的真理理论基础上建立其语义理论——即当一个陈述句 s 的话语者提出关于某种类型的情境 x 的主张时，x 是某种类型 ϕ 的情境（Barwise 1993: 4）。奥斯汀（1950）将类型 ϕ 称为 s 的描述内容，ϕ 指定了被描述的世界中的情境（或事件或物体等）的类型。他将情境 x 本身称为 s 的演示内容。换句话说，ϕ 描述了 s 的内容，x 是 s 所示范的内容——这只是说当我们说出 s 时，我们所说的是世界的一部分。

根据巴尔维斯的观点，对于任何条件语句 if s1 then s2，其中 s1 的描述内容是类型 ϕ，s2 的描述内容是类型 ψ，if s1 then s2 的描述内容是约束 ϕ→ψ。约束是类型之间的联系。if s1 then s2 的演示内容将是 s1 和 s2 的演示内容之间的连接。假设 x 是 ϕ 的演示内容，y 是 ψ 的演示内容，if s1 then s2 的演示内容将是 x 和 y 之间的连接，这个连接是一个信息通道 c，连接了 x 和 y，写作 xc↦y。正如巴尔维斯简洁地表达：

> 通过信息通道，让我们指的是这些情境之间的关系，因为正是这些关系使得从一个情境中获取关于另一个情境的信息成为可能。（1993: 5）

总之，提案是当我们通过说出“如果 s1，则 s2”来表达约束 ϕ→ψ 时，我们声称存在支持该约束的信息通道。为了支持约束，Barwise 的提案如下：

(11)如果 x⊨ϕ，xc↦y，并且 ϕ→ψ，则 y⊨ψ

(11)表明，如果类型为 ϕ 的信息在情境 x 中为真，并且存在从情境 x 到情境 y 的信息通道 c，并且存在从类型为 ϕ 的信息到类型为 ψ 的信息的约束，则类型为 ψ 的信息在情境 y 中为真。

Barwise 将情境的概念细化为“站点”的概念-一个包含信息的结构化对象。现在我们有站点 x，y，z，...和类型 ϕ，ψ，...，其中 x:ϕ 表示信息站点 x 的类型为 ϕ。在这里需要说明的是，通道可能是站点之间的一种关系，也可能不是，而 xc↦y 是信息站点和通道之间的三元关系。Barwise 将通道理论的正确性公理阐述如下：

(12)c:ϕ→ψ 当且仅当对于所有的站点 x，y，如果 xc↦y 且 x:ϕ，则 y:ψ。

在这个阶段，事情开始在精神上变得明显的模态，尽管在实践中可能不是这样。

Barwise 和 Perry 的情境以及 Austin 的指示内容，只是以不同名称称呼的部分世界。也就是说，它们是不完整的可能世界。Austin 的类型，陈述的描述内容，非常类似于命题，特别是描述话语所做的主张的命题。稍微放宽一点，我们可以认为 Austin 陈述的指示内容在细粒度上是该陈述的真值生成者。Barwise 在上面的(11)中关于 x⊨ϕ 的符号表示暴露了这种解读。此外，考虑到 xc↦y 是一个三元关系，(12)开始看起来非常像是一个条件语句的语义子句，该条件语句依赖于类似 Kripke 框架中的三元可达性关系。

Routley 等人(1982)的相关逻辑的语义给出了一个三元可达性关系的评估条件，其中可达性关系的概念在 Kripke 框架中是熟悉的，用于指定模态逻辑的语义。Barwise 明确指出了这种联系：

> 这里提出的工作还提出了一种思考 Routley 和 Meyer 的相关逻辑的三元可达性关系语义的方法。（我在过去一年中与 Gabbay 和 Dunn 讨论过这个问题。最近，Greg Restall 也注意到了这种联系，并开始详细研究这种联系。）(1993: 26)

Restall (1996)与 Mares (1996)按照以下方式解释了这种关系。Restall 假设通道是信息站点之一（Mares 则不是）。通常术语不是使用信息站点，而是使用信息状态。信息状态可能是不完整和/或不一致的，事实上它们可能完全是子命题（当我们基于 Lambek Calculi 的信息化版本来研究自然语言的细粒度信息语义时，情况将如下所示）。用 Kripke/框架语义学的术语来说，我们有三元信息框架 F:⟨S,⊑,R⟩，其中 S 是一组信息状态，⊑ 是 S 上的偏序关系，R 是 S 的成员之间的三元可达关系。信息模型是一个信息框架 F 以及 S 的成员与类型/命题 ϕ,ψ 之间的评估/支持关系 ⊩。我们如何准确地阅读 x⊩ϕ 将取决于 x 所处的信息状态的类型以及 ϕ 的类型。最简单的情况是 x 是一个情境，ϕ 是一个命题。在这种情况下，我们可以将 x⊩ϕ 阅读为 ϕ 在 x 处为真。在这个基础上，（12）被翻译如下：

（13）x⊩ϕ→ψ 当且仅当 ∀y,z s.t. Rxyz，如果 y⊩ϕ，则 z⊩ψ。

在这种情况下，Rxyz 的阅读方式是——如果你将在 x 处为真的信息与在 y 处为真的信息放在一起，那么你得到在 z 处为真的信息。然而，一般情况下，Rxyz 的阅读并不那么严格。尽管 ⊩ 关系可以像 ⊨ 一样被阅读为直接的语义关系，但它更加灵活。其他阅读 x⊩ϕ 包括 x 携带了 ψ 的信息，x 携带了类型为 ψ 的信息，x 支持了 ψ 的信息，x 是 ψ 的信息记录等等。由于这个原因，Rxyz 在实践中的阅读方式将取决于所得到的基于信息的语义模型所应用的领域，也就是所讨论的信息通道的领域。

信息渠道的领域可能是从 Floridi 感兴趣的命题结构环境信息渠道（无论真实与否）到 Fodor 和 Evans 感兴趣的子命题结构环境信息渠道。此外，它可能是来自自然语言语义的语言焦点的子命题结构信息，或者涉及语言哲学中的问题，如态度报告和认知和其他态度状态的语义分析中熟悉的语义信息现象。我们将在下面的部分详细讨论这些方法。

目前，需要注意的是，不同信息渠道类型的语义模型将根据如何准确理解 Rxyz 中的“组合”x 和 y 来确定。例如，将 x 与 y 组合可能意味着与将 y 与 x 组合相同，也可能不同，这取决于是否希望三元关系 R 是可交换的关系。也就是说，取决于是否希望对于所有的 x、y 和 z 都成立(Rxyz→Ryxz)。是否希望 R 是可交换的关系将取决于试图建模的信息渠道的属性（请参见上面的段落）。

类比地说，回想一下模态逻辑，其中二元可达性关系 R2xy 的不同属性将产生不同的模态逻辑（例如，为了得到模态逻辑 T，使 R2xy 成为自反的；为了得到模态逻辑 S4，使 R2xy 成为自反且传递的，等等）。类似的决策可以针对三元关系 Rxyz 进行。例如，人们可能希望 Rxyz 具有交换性、结合性、收缩性、单调性等属性，或者根本没有这些属性，或者这些属性的微妙组合。这些决策将产生不同的信息通道逻辑，就像对于不同的模态逻辑，对于 R2 的选择一样。这些逻辑通常被称为子结构逻辑，因为三元可达性关系（交换等）的属性对应于个别化逻辑本身的结构规则。（人们可以将结构规则视为与目前讨论的语义条件相对应的句法/证明论对应物。）作为逻辑和信息领域的一部分，我们将在下一节中看到，这些逻辑的集群在各种信息语义现象中发现了实用性。

### 3.1 信息流的语义学

一组被称为 Lambek 演算的弱子结构逻辑拒绝所有结构规则，或者拒绝交换或结合中的一个，或者只具有这两个规则中的一个。这些逻辑由 Joachim Lambek 设计并命名，最初用于模拟自然语言的语法或形式语法（参见类型逻辑语法的条目）。

他们发现建立一个模型——为信息流提供语义学概念的信息通道，并不像一开始看起来那么令人惊讶。首先，我们可以将自然语言词汇表视为一个数据库，将语法视为对该数据库的处理约束的规范，以确保处理约束能够产生良好的输出结果。其次，情境和通道理论最初的目标之一就是自然语言语义本身，因此这种融合并不完全令人惊讶。例如，Massimo Poesio（1993）借助情境理论的形式命名法来建立一个关于确定描述的理论。Ginzburg（1993）利用情境理论的自然细粒度结构为命题态度提供语义学。Hwang 和 Schubert（1993）通过情境理论框架实现自然语言处理（NLP）控制。Westerhåll、Haglund 和 Lager（1993）借助情境理论提出了一个关于文本意义的理论，其中将文本视为编码读者认知状态的抽象状态。

Barwise、Gabbay 和 Hartonas（1995, 1996）借助联想 Lambek 演算来建模，即为信息流本身提供语义学。他们将信息网络 N 定义为一个四元组，即 N:=⟨S,C,↦,∘⟩，其中 S 是信息状态的集合（作者称之为“站点”），C 是信息通道的集合，↦ 是 S×C×S 上的三元可达关系，∘ 是 C 上的可结合的二元组合运算符。为了使信息流动，必须有一种方式使通道组合，以便信息可以从一个通道流向另一个通道。作者对串行通道组合规定了以下约束。对于所有的通道 a 和 b：

(14)∀x∀y(xa∘b⟼y 当且仅当  ∃z(xa↦z 且 zb↦y))

作者主张关联通道，因此通道的二进制组合运算符是可关联的，即对于所有通道 a、b 和 c，如果 a∘(b∘c)，那么(a∘b)∘c)。熟悉范畴论的人会知道“通道关联！”的叠句。

需要注意的是，不要混淆上述（14）中指定的通道组合与上述（12）和（13）中指定的通道应用。后者涉及将输入提供给通道，而前者涉及通道本身的组合。Tedder（2017）优雅地主张将信息通道的组合和应用分开处理，并且我们不应该期望两者的属性（通过三元关系 ↦ 上的结构规则指定）是相同的。关于我们应该期望通道组合和应用具有哪些属性的论点，请参见 Tedder（2021）和 Sequoiah-Grayson（2021）。Sequoiah-Grayson（2010）认为，由 Lambek 演算给出的信息流基本理论给出了 Groenendijk 和 Stokhof（1991）的动态谓词逻辑（DPL）的信息解释。

相比之下，Van Benthem（2010）反对将 Lambek 演算理解为这种基础信息术语的诱惑。这并不意味着 Van Benthem 反对 Lambek 演算的扩展应用。例如，Van Benthem（1996）主张将 Lambek 演算应用于给出认知过程的动态语义。Van Benthem 使用 Lambek 演算来描述认知过程的动态语义，结合使用子结构解释的 Lambek 演算作为信息流基础模型，自然地引出了在信息通道理论术语中给出动态认知现象模型的想法。我们将在下一节中研究这样的信息模型。

### 3.2 信息化建模认知现象

Sedlár 和 Punčochář（2019）将命题动态逻辑（PDL）扩展到非结合 Lambek 演算，他们称之为 Lambek PDL。他们给出了 Lambek PDL 的三种非正式解释，一种是通过修改语言资源来修改行动，另一种是通过修改信息体来修改行动，还有一种是通过修改代理人认知状态来修改行动（参见 2019：358-539）。在他们的语义中，上述（13）中三元关系 R 的具体解读将取决于模型中信息状态的解释。特别是，他们对通道应用中交换律 x∘y=y∘x 失效的临界情况感兴趣。Sedlár（2020）在信息解释下扩展了非结合和非交换 Lambek 演算，包括迭代通道操作（应用和组合）。

Sedlár（2016）在信息解释下设计和探索了子结构认知逻辑，明确目标是解决上述第 1.1 节中的推理丑闻（SoD）。这里的动机是，一个代理人的认知状态到另一个代理人的认知状态之间存在渠道，而某些认知行为（即推理行为）可以通过标记渠道应用的三元关系 R 来捕捉（如上所示的 13）。Punčochář 和 Sedlár（2017）通过结构化通信（即结构化信息流）在代理人群体中引入了子结构认知逻辑来汇集信息。在这个背景下，二元组合运算符 ∘（在 Sedlár 和 Punčochář 的符号中为‘⋅’）是一个用于在沟通群体中的不同认知状态之间进行汇集的运算符。作者提供了几个例子来表明在这种情况下，关联和交换都是错误的。Sedlár，Punčochář 和 Tedder（2019）通过信息解释下的非结合 Lambek 演算为普遍知识和共同知识运算符提供了语义学。

## 4. 总结

到目前为止，清楚地看出语义学概念的信息涵盖了大量领域，但并非没有结构和凝聚力。

Carnap 和 Bar-Hillel（1952）关于形式语言的语义信息理论具有直观的起点，它将内涵和语义信息视为密切相关。无论他们的理论有何不足，它都激发了对语义信息本质的整体研究领域，通过 Luciano Floridi 对语义和相关现象的系统信息方法以及越来越多的相关研究项目。

基于信息的自然语言和内容承载心理状态的语义学，主要由 Dretske、Evans、Fodor、Lewis、Jackson、Recanati 和 Zalta 提出，已经导致了关于意义和内容的信息关系的精细理论。这种关系——允许信息从系统的一部分流向另一部分的信息通道——已经被证明是如此不可或缺，以至于它们本身成为研究的对象。

Barwise 主要提出的信息通道的语义理论已经得到改进，以便将其适应于对丰富的哲学现象进行建模。最初设计用于以其自身术语对语言工艺品进行建模的逻辑已被用于捕捉信息流的属性。这迅速导致了对这些语言工艺品进行严格定义的语义模型，以及以信息流本身为基础的认知现象模型。


## Bibliography

* Aczel, Peter, David Israel, Yasuhiro Katagin, and Stanley Peters (eds.), 1993, *Situation Theory and Its Applications, Volume 3: Proceedings of the First-Third Conference on Situation Theory and Its Applications. Third Conference Held in Kanagawa, Japan, November 1991*, (CSLI Lecture Notes 37), Stanford, CA: CSLI Publications.
* Allo, Patrick, 2007, “Logical Pluralism and Semantic Information”, *Journal of Philosophical Logic*, 36(6): 659–694. doi:10.1007/s10992-007-9054-2
* –––, 2011, “The Logic of ‘Being Informed’ Revisited and Revised”, *Philosophical Studies*, 153(3): 417–434. doi:10.1007/s11098-010-9516-1
* Austin, J. L., 1950, “Truth”, *Aristotelian Society Supplementary Volume*, 24: 111–128. doi:10.1093/aristoteliansupp/24.1.111
* Barwise, Jon, 1993, “Constraints, Channels, and the Flow of Information”, in Aczel et al. 1993: 3–28.
* Barwise, Jon and John Perry, 1983, *Situations and Attitudes*, Cambridge, MA: MIT Press.
* Barwise, Jon, Dov Gabbay, and Chrysafis Hartonas, 1995, “On the Logic of Information Flow”, *Logic Journal of IGPL*, 3(1): 7–49. doi:10.1093/jigpal/3.1.7
* –––, 1996, “Information Flow and the Lambek Calculus”, in Seligman and Westerståhl 1996: 47-62.
* van Benthem, Johan, 1996, *Exploring Logical Dynamics*, Stanford, CA: CSLI Publications.
* –––, 2010, “Categorial Versus Modal Information Theory”, in van Benthem and Moortgat 2010: 533–543.
* van Benthem, Johan and Michael Moortgat (eds), 2010, *Festschrift for Joachim Lambek*, issue of *Linguistic Analysis*, 36(1-4).
* Bremer, Manual and Daniel Cohnitz, 2004, *Information and Information Flow: An Introduction*, Frankfurt, Lancaster: Ontos Verlag.
* Carnap, Rudolf and Yehoshua Bar-Hillel, 1952, “An Outline of a Theory of Semantic Information”, Technical report 247, Cambridge, MA: Research Laboratory of Electronics, Massachusetts Institute of Technology. Reprinted in *Language and Information: Selected Essays on their Theory and Application*, Y. Bar-Hillel, Addison-Wesley Series in Logic, Israel: Jerusalem Academic Press and Addison-Wesley, 1964, pp. 221–274. [[Carnap and Bar-Hillel 1952 available online](https://dspace.mit.edu/handle/1721.1/4821)]
* Cevolani, Gustavo, 2011, “Verisimilitude and Strongly Semantic Information”, *Etica & Politica/Ethics & Politics*, 13(2): 159–179.
* –––, 2014, “Strongly Semantic Information as Information About the Truth”, in *Recent Trends in Philosophical Logic*, Roberto Ciuni, Heinrich Wansing, and Caroline Willkommen (eds.), (Trends in Logic 41), Cham: Springer International Publishing, 59–74. doi:10.1007/978-3-319-06080-4_5
* D’Alfonso, Simon, 2011, “On Quantifying Semantic Information”, *Information*, 2(1): 61–101. doi:10.3390/info2010061
* Dinneen, Jesse David and Christian Brauner, 2015, “Practical and Philosophical Considerations for Defining Information as Well-Formed, Meaningful Data in the Information Sciences”, *Library Trends*, 63(3): 378–400. doi:10.1353/lib.2015.0012
* Dodig-Crnkovic, Gordana, 2005, “System Modeling and Information Semantics”, in *Proceedings of the Fifth Promote IT Conference* (Borlänge, Sweden), Janis Bubenko, Owen Eriksson, Hans Fernlund, and Mikael Lind (eds.), Lund: Studentlitteratur.
* Dretske, Fred I., 1981, *Knowledge and the Flow of Information*, Cambridge, MA: The MIT Press.
* Evans, Gareth, 1982, *The Varieties of Reference*, John Henry McDowell (ed.), Oxford: Clarendon Press.
* Floridi, Luciano, 2004, “Outline of a Theory of Strongly Semantic Information”, *Minds and Machines*, 14(2): 197–221. doi:10.1023/B:MIND.0000021684.50925.c9
* –––, 2005, “Is Semantic Information Meaningful Data?”, *Philosophy and Phenomenological Research*, 70(2): 351–370. doi:10.1111/j.1933-1592.2005.tb00531.x
* –––, 2006, “The Logic of Being Informed”, *Logique et Analyse*, 49(196): 433–460.
* –––, 2008, “Understanding Epistemic Relevance”, *Erkenntnis*, 69(1): 69–92. doi:10.1007/s10670-007-9087-5
* –––, 2011, “Semantic Information and the Correctness Theory of Truth”, *Erkenntnis*, 74(2): 147–175. doi:10.1007/s10670-010-9249-8
* –––, 2012, “Semantic Information and the Network Theory of Account”, *Synthese*, 184(3): 431–454. doi:10.1007/s11229-010-9821-4
* Fetzer, James H., 2004, “Information: Does It Have To Be True?”, *Minds and Machines*, 14(2): 223–229. doi:10.1023/B:MIND.0000021682.61365.56
* Fodor, Jerry A., 1990, *A Theory of Content and Other Essays*, Cambridge, MA: MIT Press.
* Frické, Martin, 1997, “Information Using Likeness Measures”, *Journal of the American Society for Information Science*, 48(10): 882–892. doi:10.1002/(SICI)1097-4571(199710)48:10<882::AID-ASI4>3.0.CO;2-Y
* Ginzburg, Jonathan, 1993, “Propositional and Non-Propositional Attitudes”, in Aczel et al. 1993: 265–302.
* Groenendijk, Jeroen and Martin Stokhof, 1991, “Dynamic Predicate Logic”, *Linguistics and Philosophy*, 14(1): 39–100. doi:10.1007/BF00628304
* Hintikka, Jaakko, 1970, “Surface Information and Depth Information”, in *Information and Inference*, Jaakko Hintikka and Patrick Suppes (eds.), Dordrecht: Reidel, 263–297. doi:10.1007/978-94-010-3296-4_8
* –––, 1973, *Logic, Language Games, and Information*, Oxford: Clarendon Press.
* Hwang, Chung Hee and Lenhart K. Schubert, 1993, “Episodic Logic: A Situational Logic for Natural Language Processing”, in Aczel et al. 1993: 303–338.
* Jackson, Frank, 2010, *Language, Names, and Information*, Oxford, UK: Wiley-Blackwell. doi:10.1002/9781444325362
* Lewis, David, 1983, “Individuation by Acquaintance and by Stipulation”, *The Philosophical Review*, 92(1): 3–32. doi:10.2307/2184519
* Mares, Edwin D., 1996, “Relevant Logic and the Theory of Information”, *Synthese*, 109(3): 345–360. doi:10.1007/BF00413865
* Mingers, John C., 1995, “Information and Meaning: Foundations for an Intersubjective Account”, *Information Systems Journal*, 5(4): 285–306. doi:10.1111/j.1365-2575.1995.tb00100.x
* –––, 1996a, “Embodying Information Systems”, in *Information Technology and Changes in Organisational Work*, Wanda Orlikowski, Geoff Walsham, Matthew Jones, and Janice DeGross (eds), London: Chapman Hall, 272–292.
* –––, 1996b, “An Evaluation of Theories of Information with Regard to the Semantic and Pragmatic Aspects of Information Systems”, *Systems Practice*, 9(3): 187–209. doi:10.1007/BF02169014
* Mingers, John C. and Craig Standing, 2018, “What Is Information? Toward a Theory of Information as Objective and Veridical”, *Journal of Information Technology*, 33(2): 85–104. doi:10.1057/s41265-017-0038-6
* Poesio, Massimo, 1993, “A Situation-Theoretic Formalization of Definite Description Interpretation in Plan Elaboration Dialogues”, in Aczel et al. 1993: 339–374.
* Primiero, Giuseppe, 2009, “An Epistemic Logic for Becoming Informed”, *Synthese*, 167(2): 363–389. doi:10.1007/s11229-008-9413-8
* Punčochář, Vít and Igor Sedlár, 2017, “Substructural Logics for Pooling Information”, in *Logic, Rationality, and Interaction: 6th International Workshop, LORI 2017*, Alexandru Baltag, Jeremy Seligman, and Tomoyuki Yamada (eds.), (Lecture Notes in Computer Science 10455), Berlin, Heidelberg: Springer Berlin Heidelberg, 407–421. doi:10.1007/978-3-662-55665-8_28
* Recanati, François, 2012, *Mental Files*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780199659982.001.0001
* –––, 2016, *Mental Files in Flux*, Oxford: Oxford University Press. doi:10.1093/acprof:oso/9780198790358.001.0001
* Restall, Greg, 1996, “Information Flow and Relevant Logics”, in Seligman and Westerståhl 1996: 463–477.
* –––, 2002, *An Introduction to Substructural Logics*, London: Routledge. doi:10.4324/9780203016244
* Routley, Richard, Robert K. Meyer, Valerie Plumwood, and Ross T. Brady, 1982, *Relevant Logics and Their Rivals 1*, Atascadero, CA: Ridgeview.
* Sedlár, Igor, 2016, “Epistemic Extensions of Modal Distributive Substructural Logics”, *Journal of Logic and Computation*, 26(6): 1787–1813. doi:10.1093/logcom/exu034
* –––, 2020, “Iterative Division in the Distributive Full Non-Associative Lambek Calculus”, in *Dynamic Logic. New Trends and Applications: Second International Workshop, DaLí 2019*, Luís Soares Barbosa and Alexandru Baltag (eds.), (Lecture Notes in Computer Science 12005), Cham: Springer International Publishing, 141–154. doi:10.1007/978-3-030-38808-9_9
* Sedlár, Igor and Vít Punčochář, 2019, “From Positive PDL to Its Non-Classical Extensions”, *Logic Journal of the IGPL*, 27(4): 522–542. doi:10.1093/jigpal/jzz017
* Sedlár, Igor, Vít Punčochář, and Andrew Tedder, 2019, “First Degree Entailment with Group Attitudes and Information Updates”, in *Logic, Rationality, and Interaction: 7th International Workshop, LORI 2019*, Patrick Blackburn, Emiliano Lorini, and Meiyun Guo (eds.), (Lecture Notes in Computer Science 11813), Berlin, Heidelberg: Springer Berlin Heidelberg, 273–285. doi:10.1007/978-3-662-60292-8_20
* Seligman, Jerry and Dag Westerståhl (eds.), 1996, *Logic, Language and Computation, Volume 1*, (CSLI Lecture Notes 58), Stanford, CA: CSLI Publications.
* Sequoiah-Grayson, Sebastian, 2007, “The Metaphilosophy of Information”, *Minds and Machines*, 17(3): 331–344. doi:10.1007/s11023-007-9072-4
* –––, 2008, “The Scandal of Deduction: Hintikka on the Information Yield of Deductive Inferences”, *Journal of Philosophical Logic*, 37(1): 67–94. doi:10.1007/s10992-007-9060-4
* –––, 2010, “Lambek Calculi with 0 and Test-Failure in DPL”, in van Benthem and Moortgat 2010: 517–532.
* –––, 2021 “A Logic of Affordances”, in *The Logica Yearbook 2020*, Martin Blicha and Igor Sedlár (eds), London: College Publications, 219–236.
* Shannon, Claude E., 1950, “General Treatment of the Problem of Coding. The Lattice Theory of Information”, presented at the *Symposium on Information Theory*, London, September 1950. Printed, 1953, as two papers, “General Treatment of the Problem of Coding” and “The Lattice Theory of Information” in *Institute of Radio Engineers (IRE), Transactions on Information Theory*, 1(1): 102–104 and 105–107, respectively. Reprinted, 1993, in *Claude E. Shannon: Collected Papers*, N. J. A. Sloane and A. D. Wyner (eds), Los Alamos, CA: IEEE Press, 177–179 and 180–183. doi:10.1109/TIT.1953.1188572
* Tedder, Andrew, 2017, “Channel Composition and Ternary Relation Semantics”, *Proceedings of the Third Workshop*, Katalin Bimbó and J. Michael Dunn (eds), special issue of *The IfCoLog Journal of Logics and their Applications*, 4(3): 731–753.
* –––, 2021, “Information Flow in Logics in the Vicinity of BB”, *The Australasian Journal of Logic*, 18(1): 1–24. doi:10.26686/ajl.v18i1.6288
* Vakarelov, Orlin, 2010, “Pre-Cognitive Semantic Information”, *Knowledge, Technology & Policy*, 23(1–2): 193–226. doi:10.1007/s12130-010-9109-5
* Westerhåll, Dag, Björn Haglund, and Torbjörn Lager, 1993, “A Situation-Theoretic Representation of Text Meaning: Anaphora, Quantification, and Negation”, in Aczel et al. 1993: 375–408.
* Williamson, Timothy (ed.), 2007, *The Philosophy of Philosophy*, Oxford, UK: Blackwell Publishing Ltd. doi:10.1002/9780470696675
* Wittgenstein. Ludwig, 1921 [1922], “Logisch-Philosophische Abhandlung”, *Annalen der Naturphilosophische*, 14(3/4): 185–262. Translated as *Tractatus Logico-Philosophicus* (TLP), C. K. Ogden (trans.), London: Routledge & Kegan Paul, 1922.

## Academic Tools

> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=information-semantic). |
> | --- | --- |
> | ![sep man icon](../../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/information-semantic/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=information-semantic&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](https://philpapers.org/sep/information-semantic/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

[Please contact the author with suggestions.]

## Related Entries

[grammar: typelogical](https://plato.stanford.edu/entries/typelogical-grammar/) | [information](https://plato.stanford.edu/entries/information/) | [logic: and information](https://plato.stanford.edu/entries/logic-information/) | [logic: modal](https://plato.stanford.edu/entries/logic-modal/) | [logical pluralism](https://plato.stanford.edu/entries/logical-pluralism/) | [meaning, theories of](https://plato.stanford.edu/entries/meaning/) | [mental content: causal theories of](https://plato.stanford.edu/entries/content-causal/) | [situations: in natural language semantics](https://plato.stanford.edu/entries/situations-semantics/)

[Copyright © 2022](https://plato.stanford.edu/info.html#c) by  
Sebastian Sequoiah-Grayson <[*sequoiah@gmail.com*](mailto:sequoiah%40gmail%2ecom)>  
[Luciano Floridi](http://www.philosophyofinformation.net/)

