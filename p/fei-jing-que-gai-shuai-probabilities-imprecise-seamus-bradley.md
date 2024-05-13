# 非精确概率 probabilities, imprecise (Seamus Bradley)

*首次发表于 2014 年 12 月 20 日，实质修订于 2019 年 2 月 19 日*

有人认为，非精确概率是克服传统精确概率中一些问题的一种自然且直观的方式。这种类型的模型有着悠久的历史，并且近年来对这种模型的兴趣不断增长。本文介绍了非精确概率理论，讨论了使用非精确概率的动机以及其相对于标准精确模型的可能优势。然后，本文讨论了该模型引发的一些哲学问题。此外，还有一个历史附录，概述了一些对非精确概率持有同情态度的重要思想家。

---

## 1. 简介

概率论是一个非常富有成果的理论，在几乎所有科学领域都有应用。在哲学中，概率论的一些重要应用被称为贝叶斯主义；这是一个非常成功的方案（例如参见 Howson 和 Urbach 2006；Bovens 和 Hartmann 2003；Talbott 2008）。但是，概率论似乎赋予了比合理的更丰富和确定的态度。你对 2080 年全球平均地表温度上升超过四度的合理信念程度应该是多少？也许应该是 0.75？为什么不是 0.75001？为什么不是 0.7497？这个事件比抛两次公平硬币至少出现一次正面的事件更有可能吗？似乎有很多事件，我们可以（或者也许应该）采取比正统概率要求更不精确的态度。对于质疑正统概率的原因，坚持认为信念状态应该由一个单一的实值概率函数表示是相当不现实的理想化，这带来了一些相当尴尬的后果，我们将在后面讨论。事实上，早在 19 世纪中叶，我们就发现乔治·布尔说过：

> 从哲学上讲，断言这种期望的强度，作为一种心理情感，能够被归结为任何数值标准是不合理的。（Boole 1958 [1854]：244）

基于这些原因和其他许多原因，对非精确概率（IP）模型越来越感兴趣。广义上来说，这些是超越概率正统的信念模型。

IP 模型在许多领域中被使用，包括：

* 统计学（Walley 1991; Ruggeri et al. 2005; Augustin et al. 2014）
* 推理心理学（Pfeifer and Kleiter 2007）
* 不确定性的语言处理 (Wallsten 和 Budescu 1995)
* 对模糊和冲突的神经反应 (Smithson 和 Pushkarskaya 2015)
* 哲学 (Levi 1980; Joyce 2011; Sturgeon 2008; Kaplan 1983; Kyburg 1983)
* 行为经济学 (Ellsberg 1961; Camerer and Weber 1992; Smithson and Campbell 2009)
* 数学经济学 (Gilboa 1987)
* 工程学 (Ferson and Ginzburg 1996; Ferson and Hajagos 2004; Oberguggenberger 2014)
* 计算机科学 (Cozman 2000; Cozman 和 Walley 2005)
* 科学计算 (Oberkampf 和 Roy 2010，第 13 章)
* 物理学 (Suppes 和 Zanotti 1991; Hartmann 和 Suppes 2010; Frigg 等人 2014)

本文确定了 IP 模型的各种动机；介绍了广泛应用于该领域的各种形式模型；并讨论了这些框架的一些未解决问题。重点将放在信念的形式模型上。

### 1.1 术语总结

在整篇文章中，我采用了讨论一个任意的有意图的代理人（我将称之为“你”）的信念的惯例。IP 的主要倡导者（包括 Good 和 Walley）也采用了这个惯例。

这篇文章是关于信念的形式模型，因此需要引入一定数量的形式机制。有一个表示世界可能性的状态集合 Ω。有时，Ω 被描述为“可能的世界”集合。信念的对象——你对其有信念的事物——可以用世界可能性集合 Ω 的子集来表示。我们可以将命题 X 与使其成立的状态集合或使其成立的可能世界集合等同起来。如果你对 X 和 Y 有信念，那么你也对“X∩Y”、“X∪Y”和“¬X”有信念；分别对应“X 和 Y”、“X 或 Y”和“不是 X 的情况”。信念对象的集合是 Ω 的幂集，或者如果 Ω 是无限的，则是 Ω 的一些可测代数的子集。

关于信念程度的标准观点是，信念程度由实数表示，信念状态由概率函数表示；这是一种规范要求。概率函数是从信念代数到实数的函数 p，满足以下条件：

* 0=p(∅)≤p(X)≤p(Ω)=1
* 如果 X∩Y=∅，那么 p(X∪Y)=p(X)+p(Y)

所以，如果你的信念状态或信念状态由 p 表示，那么你对 X 的信念程度是由 p 分配给 X 的值，即 p(X)。

此外，在贝叶斯信念模型中，学习是通过条件化来实现的。如果你学到一个命题 E（且没有其他信息），那么你在学习后对 X 的信念由 p(X∣E)=p(X∩E)/p(E)给出。

本文的主要关注点是一种替代方法，该方法通过一组概率函数而不是单个概率来表示信念。因此，您的信念状态不再由某个 p 表示，而是由一组这样的函数 P 表示。van Fraassen（1990）将其称为您的代表者，Levi 称之为可信集。我将在稍后讨论您可能解释代表者的各种方式，但现在我们可以这样考虑。您的代表者是一个可信委员会：其中的每个概率函数代表一个委员会成员的意见，而整个委员会代表您的信念。

从这些概念中，我们可以定义一些在非精确概率讨论中经常使用的“摘要函数”。通常假设您对命题 X 的信念程度由 P(X)={p(X):p∈P}表示。我将采用这种符号约定，并附带一条条件，即我不认为 P(X)是对 X 的信念程度的充分表示。您的 X 的下包络是：P––(X)=infP(X)。同样，您的上包络是 ¯¯¯¯P(X)=supP(X)。它们在以下意义上是共轭的：¯¯¯¯P(X)=1−P––(¬X)。

对于一组概率的更新的标准假设是，在学习到 E 后，您对 X 的信念程度由 P(X∣E)={p(X∣E),p∈P,p(E)>0}给出。在学习到 E 后，您的信念状态是 P(⋅∣E)={p(⋅∣E),p∈P,p(E)>0}。也就是说，由一组条件概率给出。

我想强调一下，这些总结函数——P(⋅)、P––(⋅)和 ¯¯¯¯P(⋅)——并不能准确地代表你的信念。图片中缺少信息。这个问题在我们讨论扩张时将变得重要。

我们需要讨论决策，因此我们将引入一个简单的决策模型，以赌博的方式来描述。我们可以将有界实值函数 f 视为从某个集合 Ω 到实数的函数“赌博”。如果 ω 是真实状态，赌博 f 将支付 f(ω)。我们假设您对这种商品的每个进一步单位都给予相同的价值（赌博的支付在效用上是线性的），并且您对风险问题不关心。您对这些赌博的态度反映了您对 Ω 中各种可能性的可能性的态度。也就是说，如果您认为 ω 的可能性越大，那么赢得大的赌博看起来就越有吸引力。特别是，考虑命题 X 上的指示函数 IX，如果 X 在实际世界上为真，则输出 1，否则输出 0。这些是一种特殊类型的赌博，您对它们的态度直接反映了您对命题的信念程度。您认为 IX 越有价值，就越可能认为 X 为真。将这些称为指示赌博。

赌博是根据其期望值进行评估的。将 Ep(f) 称为赌博 f 相对于概率 p 的期望值，并将其定义为：

Ep(f)=∑Ωp(ω)f(ω)

你认为状态 ω 中的 f 的价值取决于 f(ω)的大小。f 在 ω 中的好处的重要性取决于状态的可能性，由 p(ω)来衡量。期望值是这些概率加权值的总和。有关预期效用的更多讨论，请参阅 Briggs（2014）。

然后我们将 EP(f)定义为 EP(f)={Ep(f):p∈P}。也就是说，P 的成员的预期值集合。EP(f)与 P(X)的限定条件相同：即 EP(f)完全代表您对赌博价值的态度的程度是有问题的。当没有歧义时，我经常省略下标“P”。更多技术细节可以在正式附录中找到。

### 1.2 一些重要的区别

在接下来的内容中，有一些重要的区别需要明确。

IP 理论中的一个重要参数是理论所应具有的规范力。非精确是强制性的还是仅仅是可允许的？它是否总是可允许/强制的，还是只有在某些情况下？或者我们可能对纯粹描述性的项目感兴趣，即描述实际代理人的信念状态，而对规范问题不感兴趣。在本文中，我们对这最后一种可能性关注较少。

区分信念本身与引发该信念以及您对这些信念的内省访问是有帮助的。对于其他态度（价值观、效用等）也是如此。实际上，您可能有一些无法（精确）引发的信念，甚至在原则上也是如此。同样，您对自己信念的内省访问可能是不完美的。这种不完美可能是非精确的来源。Bradley（2009）区分了许多不完美内省的不同来源。这种不完美可能来自于您对问题前景的无意识、您推理的有限性、对相关情况的无知，或者是由于证据或价值观的冲突（第 240-241 页）。有关不确定性类型的进一步讨论，请参见 Bradley 和 Drechsler（2014）。

证据体系的各个方面可能会对您应对其产生影响。我们可以询问有多少证据（证据的权重）。我们可以询问证据是否平衡，或者它是否明显支持一个假设而不是另一个（证据的平衡）。证据可能是平衡的，因为它是不完整的：简单地说，没有足够的证据。如果证据存在冲突，证据也可能是平衡的：不同的证据支持不同的假设。我们还可以进一步询问证据是否告诉我们某些具体的东西，比如硬币的偏倚是 2/3 偏向正面，或者是不具体的，比如硬币的偏倚在 2/3 和 1 之间偏向正面。这种具体性应该与证据的模糊性或不确定性区分开来：硬币的偏倚约为 2/3 是模糊但具体的，而硬币的偏倚肯定在 2/3 和 1 之间是确定但不具体的。同样，信念状态可能是不确定的、模糊的，也可能是不具体的，或者两者兼有。似乎确定但不具体的信念状态比不确定的信念状态更为罕见。

Isaac Levi（1974, 1985）对“非精确”概率和“不确定”概率进行了区分（引号表示这些不是我在本文中采用的“非精确”和“不确定”术语的用法）。这个想法是，可能需要将信念状态转换为 IP 表示的两种不同类型的信念状态。在 Levi 的术语中，“非精确”信念是一种不完全内省或引出的信念，而“不确定”信念是一种（可能）完全内省但仍然不确定或不具体（或两者兼有）的信念。Levi 认为有趣的现象是“不确定”概率。Walley（1991）也强调了“正确但未知概率”和“不确定性”之间的区别。

关于 IP 的解释还有一个与上述交叉的进一步问题。这个问题是我们是否将 P 理解为对您的信念的“完整”或“详尽”表示，还是将表示理解为不完整或非详尽。让我们暂时从投注解释的角度来谈论。通过以下问题可以划分详尽/非详尽的区别：P 是否完全捕捉到您的所有和仅有的下注倾向，还是 P 仅部分捕捉到您的下注倾向？Walley 强调了这个区别，并建议大多数模型都是非详尽的。

部分原因是由于 Levi 区分“非精确”和“不确定”信念的命令，一些人反对使用“非精确概率”这个术语。使用上述区分不确定、不具体和不完全内省的信念，我们可以将 Levi 想要分开的类别分开，而不使用“非精确”这个术语。然后，我们可以使用“非精确”作为一个总称来涵盖所有这些缺乏精确性的情况。方便的是，这使我们能够与关于“非精确概率”的丰富形式工作保持一致，该术语用于涵盖不确定性的情况。这种用法至少可以追溯到 Peter Walley 的有影响力的书《带有非精确概率的统计推理》（Walley 1991）。

因此，“非精确”不完全正确，但“概率”也不正确，因为 IP 的形式理论实际上是关于预测（类似期望）而不仅仅是关于概率（指示函数的期望）。如果我将非精确概率缩写为“IP”，那么我可以利用一些有用的歧义。

## 2. 动机

让我们以一般的术语来考虑采用属于 IP 范畴的模型可能具有的动机。重点将放在理性信念模型上，因为这些是哲学家通常关注的模型，尽管值得注意的是，使用 IP 进行统计工作并不限于这种解释。请注意，没有一个作者支持所有这些论点，事实上，一些对 IP 持同情态度的作者明确表示他们不认为某些论点是好的（例如，马克·卡普兰（Mark Kaplan）不支持关于描述现实主义的担忧暗示允许不完整性的主张）。

### 2.1 非精确决策

有许多决策问题的例子，我们在直觉上倾向于违背精确概率论的规定。事实上，许多实验对象似乎确实表达了违反公理的偏好。IP 提供了一种将这些直观上合理且实验证实的选择表示为理性的方法。其中一个经典例子是 Ellsberg 问题（Ellsberg 1961）。

> 我有一个装有九十颗弹珠的瓮。三十颗弹珠是红色的。其余的弹珠是蓝色或黄色，比例未知。

考虑在这种情况下各种事件的指标赌注。考虑选择一个赌注，如果抽到的弹珠是红色就赢（I），而选择一个赌注，如果抽到的弹珠是蓝色就赢（II）。你可能更喜欢 I 而不是 II，因为 I 涉及风险，而 II 涉及不确定性。如果一个前景的结果是不确定的，但其结果发生的概率是已知的，那么这个前景是有风险的。如果结果发生的概率是未知的或只部分已知的，那么这个前景是模糊的。现在考虑选择一个赌注，如果抽到的弹珠不是蓝色就赢（III），而选择一个赌注，如果抽到的弹珠不是红色就赢（IV）。现在 III 是模糊的，而 IV 是明确但有风险的，因此如果你更喜欢有风险的前景而不是模糊的前景，IV 可能对你来说更好。这种偏好模式（我更喜欢 II 而不是 I，但我更喜欢 IV 而不是 III）不能被解释为精确的期望效用最大化者的选择。这些赌注在表中总结。

|     | R | B | Y |
| ----- | --- | --- | --- |
| I   | 1 | 0 | 0 |
| II  | 0 | 1 | 0 |
| III | 1 | 0 | 1 |
| IV  | 0 | 1 | 1 |

表 1：埃尔斯伯格赌注。瓮中有 30 颗红色弹珠和 60 颗蓝色/黄色弹珠。

让红色、蓝色和黄色弹珠的概率分别为 r、b 和 y。如果您是一个期望效用最大化者，并且更喜欢 I 而不是 II，那么 r>b，并且对 IV 优于 III 的偏好意味着 r+y<y+b。没有任何数字可以同时满足这两个约束条件。因此，没有概率函数使得具有该概率的期望效用最大化者会以上述方式进行选择。虽然这些偏好并不普遍，但它们是许多实验对象对这种示例的响应的一个稳健特征（Camerer 和 Weber 1992; Fox 和 Tversky 1995）。一些实验表明，Ellsberg 类型的偏好比通常认为的要少（Binmore 等人 2012; Voorhoeve 等人 2016）。有关模糊态度的更多信息，请参见 Trautmann 和 van der Kuilen（2016）。

非精确概率论者可以将情况建模如下：P(R)=1/3，P(B)=P(Y)=[0,2/3]。请注意，这种信念状态的表达方式忽略了一些重要细节。例如，对于所有 p∈P，我们有 p(B)=2/3−p(Y)。对于这里所提出的观点来说，这个细节并不重要。对模糊性进行建模可以解释真实代理人对红色赌注的偏好。要详细阐述这个故事需要更多关于决策的内容（见第 3.3 节），但直觉是对模糊性的厌恶解释了对 I 而不是 II 和 IV 而不是 III 的偏好。

正如 Steele（2007）指出的那样，上述分析只有在我们处理真正不确定或不具体的信念时才能解释 Ellsberg 的选择。如果我们处理的是不完全内省的信念情况，那么存在某个在代表者中的 p，使得理性选择最大化 Ep。对于 Ellsberg 的选择，没有这样的 p。

对于埃尔斯伯格游戏的教训，这种观点并不是没有争议的。阿尔-纳贾尔和温斯坦（2009 年）对埃尔斯伯格偏好的解释提出了另一种观点。他们认为，埃尔斯伯格选择的独特模式是由于代理人应用某些启发式方法来解决决策问题，这些方法假设赔率是可操纵的。在现实生活中，如果有人向你提供一个赌注，你可能会认为他们必须在某些方面比你有优势，才值得他们向你提供赌注。适当建模的怀疑主义可以在一个简单的博弈论精确概率模型中得出埃尔斯伯格的选择。

### 2.2 不完备性和不可比性

对于（精确的）概率主义的各种论证都假设某种关系是完备的。无论是对行为的偏好，还是对某种“定性概率排序”，这种关系都被假设在域中的任意两个元素之间以某种方式成立。在严重不确定性的情况下，这似乎不应该是一个理性原则，尤其是在偏好的例子中，没有任何方向的偏好是合理的。这是一种与在选项之间无所谓的态度有着重要区别的态度。马克·卡普兰如下论述了这一点：

> 当你对 A 和 B 之间的选择无所谓时，以及当你在 A 和 B 之间犹豫不决时，可以说你对两种情况都没有偏好。然而，无所谓和犹豫是不同的。当你对 A 和 B 无所谓时，你不偏好其中任何一个是因为你认为它们是同样可取的。当你犹豫不决时，你不偏好其中任何一个是因为没有这样的决定。（Kaplan 1996: 5）

对于不可比较性和无所谓性的主张，有一个标准的行为主义回应。简而言之，这个主张是说这是一个不能从实际行为者的选择行为中推断出来的区别。最终，在给定的选择情况下，你必须选择其中一个选项。你选择哪个可以被解释为（弱）偏好。Joyce 对这种对行为主义的诉诸提出了以下批评。

> 在严格的行为主义范围内，有太多值得说的事情无法表达出来...基本困难在于，在不诉诸于关于她心理状态的额外事实的情况下，无法区分出一个行为者的行为真正反映了她想要的情境和没有反映的情境...更严重的缺点是行为主义无法理解对选择行为的合理化解释。（Joyce 1999: 21）

除此之外，行为主义者无法理解这样一个事实，即无法比较的商品对微小的改进不敏感。也就是说，如果 A 和 B 是两种你没有偏好的商品（例如，对于具有非精确概率的命题的赌注），如果 A+是比 A 稍微好一点的商品，那么它可能仍然无法与 B 进行比较。这将无法比较与冷漠区分开来，因为冷漠的“平局”会因为微小的改进而被打破。因此，声称冷漠和无法比较之间没有行为差异是错误的。

Kaplan 认为，违反完备性公理不仅是可以接受的，事实上有时是必要的。

> 我拒绝接受你采用满足偏好公理的 [某个] 偏好集合的需求是因为它是虚假精确的，这并不是通常的理由。并不是说这个需求无法满足人类的需求。因为如果只是这个问题，这个需求仍然可以作为一个规范理想发挥有用的作用——一个可以合法地被引用来让你按照正统贝叶斯主义者的方式“解决”你的决策问题。我对正统贝叶斯主义者的要求的抱怨是它强加了错误的规范理想。因为如果你有 [这样一个] 偏好集合，那么你对每个假设都有一个确定的分配 [p]——然后你就没有给予证据应有的重视。（Kaplan 1983: 571）

他指出，并非总是不合理或不可能对你拥有精确的信念：在这种情况下，精确性可以作为一种规范理想。精确的概率仍然作为一种规范理想的信念，但它是理想情况下的理想代理人的信念。理想化的证据位置是通过你拥有一个已知偏倚的硬币的情况来近似的。精确的概率论者和 IP 的支持者都同意精确的概率论是一种理想化和规范理想。然而，他们在所涉及的理想化类型上存在差异。精确的概率论者认为，阻止我们拥有精确的概率论信念的仅仅是计算能力和内省能力的缺乏。非精确的概率论者认为，即使在这个意义上理想的代理人可能（并且可能应该）在不理想的证据位置时也无法拥有精确的概率论信念。

至少有一些偏好公理不是规范约束。现在我们可以问，在没有“纯粹结构”——非规范——公理的情况下可以证明什么？这无疑让我们了解到对信念结构真正需要什么。

似乎可以不偏好两个选项之间的任何一个。或者似乎合理地不认为两种可能性中的任何一种比另一种更有可能。而这些不同意某些判断的失败并不意味着在任何实质意义上认为这两个元素是相等的。也就是说，精确的概率主义作为一种规范理想存在。也就是说，精确性可能仍然是一个未达到（可能无法达到）的目标，它告诉代理人如何改进他们的信念。完整的偏好是完全了解的代理人应该具备的。没有完整的偏好，标准的表示定理就无法成立。然而，对于不完整偏好排序的每个完成，定理都成立。因此，如果我们考虑那些某个不完整偏好的完成由该函数表示的概率函数集合，那么我们可以认为这个集合表示了与不完整偏好相关的信念。对于每个完成，我们还得到了一个唯一的效用函数，只要进行线性变换即可。这本质上是 Kaplan 的观点（参见 Kaplan 1983; 1996）。

Joyce（1999: 102–4）和 Jeffrey（1984: 138–41）都提出了类似的观点。关于比较信念的一个特别详细的论证可以在 Hawthorne（2009）中找到。事实上，这个想法有着悠久而卓越的历史，至少可以追溯到 B.O. Koopman（1940）。I.J Good（1962）、Terrence Fine（1973）和 Patrick Suppes（1974）都讨论过类似的思想。Seidenfeld、Schervish 和 Kadane（1995）为不满足完整性的偏好给出了一个表示定理。（有关非常普遍的表示定理，请参见 Evren 和 Ok 2011；Pedersen 2014；以及 Chu 和 Halpern 2008、2004）。

### 2.3 证据的重要性，证据的平衡

证据影响信念。Joyce（2005）指出，证据的重要性和证据的平衡之间存在重要区别。他认为这是精确的概率论者难以处理的区别，并且这个区别值得表示。这个想法已经被许多思想家提及，包括 J.M.凯恩斯，鲁道夫·卡尔纳普，C.S.皮尔斯和卡尔·波普尔（参见 Joyce 2005; Gärdenfors 和 Sahlin 1982 的参考文献）。以下是凯恩斯对这种直觉的表达：

> 随着我们掌握的相关证据增加，论证的概率的大小可能会增加或减少，具体取决于新知识加强了不利证据还是有利证据；但无论哪种情况，似乎都有所增加——我们有一个更实质性的基础来支持我们的结论。我通过说新证据的增加增加了论证的重要性来表达这一点。（凯恩斯 1921: 78，凯恩斯的强调）

考虑投掷一个已知是公平的硬币。假设你已经看到了一百次投掷的结果，大约一半是正面。你对硬币正面朝上的信念程度应该在一半左右。这是一个有证据支持的情况。

现在考虑另一种情况：一个未知偏倚的硬币要被抛掷。也就是说，你没有看到任何关于之前抛掷的数据。在没有任何关于偏倚的相关信息的情况下，对称性问题可能会建议你认为正面的机会大约是一半。这个观点与上面的观点不同。没有证据的支持，但也没有任何东西表明你对 H 和 T 的态度应该不同。所以，总体来说，你应该对两者持有相同的信念。

然而，这两种不同的情况被表示为具有相同的概率信念，即 p(H)=p(T)=0.5。在公平硬币的情况下，这个概率分配来自于有证据表明正面的机会是一半，并且要求你的信念与机会相匹配（其他条件不变）。相比之下，在未知偏倚的情况下，人们以不同的方式得出相同的分配：你的证据中没有支持一个命题胜过另一个命题，因此一些“不确定性规则”的推理表明它们应该被分配相同的信念（参见 Hájek 2011 年对不确定性规则的讨论）。

如果我们认真对待之前讨论过的“模糊规避”，当面临押注公平硬币正面与未知偏倚硬币正面的选择时，选择前者似乎并不不合理。回想一下第 2.1 节中在 Ellsberg 游戏中对于明确的赌注的偏好。但是如果两个硬币都有相同的主观概率，是什么使得这种对于押注公平硬币的偏好合理？Joyce 认为这些信念之间存在值得表示的差异。IP 确实表示了这种差异。第一种情况由 P(H)={0.5}表示，而第二种情况由 P(H)=[0,1] 表示。

斯科特·斯特金恩在他说的时候很好地表达了这一点：

> 当证据本质上是明确的时候，它需要明确或精确的态度；当证据本质上是模糊的时候——大部分时间都是如此——它需要最好是模糊的态度。简而言之：证据的精确性导致态度的精确性；证据的不精确性导致态度的不精确性。（斯特金恩，2008 年：159 斯特金恩的强调）

惠勒（2014 年）批评斯特金恩关于“特征匹配”论点。然而，基于证据性质的 IP 论证只需要证据的特征有时允许（或要求？）不精确的信念，而不是特征必须始终匹配。相反，舒恩菲尔德（2012 年）认为证据总是支持精确的信任，但由于计算能力有限的原因，真实的代理人不需要被要求具有精确的信任。然而，她的论证只真正支持这样的主张：有时不确定性是由于证据的复杂性和计算复杂性。她没有反驳利维、卡普兰、乔伊斯和其他人提出的有些证据情况需要不精确态度的主张。

严格来说，我们在这里只有故事的一半。在信念的表示中，重量和平衡之间存在差异。但这仍然没有回答到底是什么表示证据的重量的问题。信念的哪个方面反映了这种差异？人们可能会倾向于将 ¯¯¯¯P(H)−P––(H)视为 H 的证据重量的度量。Walley（1991）暂时提出了这样的建议。然而，这会在冲突证据的情况下出错。（想象一下两个同样可靠的证人：一个告诉你硬币偏向正面，另一个说偏向反面。）关于非精确概率论是否比精确概率论更好的问题尚未得到充分的回答。然而，非精确概率论的研究人员在区分你的信念恰好具有某些对称性质的情况和你的信念捕捉到关于信念对象对称性的证据的情况方面取得了进展。这是标准精确信念模型无法捕捉到的区别（de Cooman 和 Miranda 2007）。

精确的概率论者可以通过指出弹性（Skyrms 2011）或稳定性（Leitgeb 2014）的特性来回应权重/平衡区分论证。其观点是，由证据权重确定的概率对新证据的反应较小，而仅由证据平衡确定的概率对新证据的反应较大。也就是说，如果你看到了一百次抛硬币，看到它正面朝上不会对你的信念产生太大影响，而如果你没有看到任何抛硬币的情况下，看到它正面朝上会对你的信念产生更大影响。因此，在精确的概率框架中，这种区分体现在条件概率中。然而，这种区分无法解释对公平硬币下注的偏好。可以开发一种基于弹性权重的期望值，并声称这是你应该最大化的值，但这与正统概率论一样偏离。如果有人能够开发出这样的理论，那么它的优点可以与 IP 类型模型的优点进行权衡。

另一个可能的精确回应是建议如果有许多支持 H 的命题被完全相信，或者如果有一个（关于 H 的）几乎被完全相信的机会命题，那么就存在 H 的证据权重。这与仅仅平衡的情况形成对比，在平衡的情况下，很少有支持 H 的命题被完全相信，或者概率分布在许多机会假设上。上面关于弹性的评论在这里也适用：可以进行这样的区分，但这并不能使我们得到一个能够解释模糊规避的理论。

扩张现象（第 3.1 节）表明本节提出的论证需要更加谨慎和进一步的阐述。

### 2.4 暂停判断

有时候你会处于一个没有证据支持或反对某个命题真实性的位置。可以说，对于这样的命题，一个合理的态度是暂停判断。

> 当我们没有足够的信息来做出结论时，我们不能指望推理（无论多么聪明或彻底）揭示出一个最有可能的假设或一个唯一合理的行动方案。理性的力量是有限的。（Walley 1991: 2）

考虑一个未知偏倚的硬币。贝叶斯代理必须对硬币在下一次投掷中正面朝上的信念有精确的信念。鉴于对硬币完全缺乏信息，似乎最好的做法是暂时保持中立。也就是说，最好不要有任何特定的确信度。最好避免对硬币下注。但是在贝叶斯框架中没有空间来做到这一点。概率函数必须输出某个数字，而该数字将认可一组特定的下注作为可取的。

将 P––(X)视为证据支持 X 的程度。现在考虑 I(X)=1−(P––(X)+P––(¬X))。这衡量了证据对 X 的沉默程度。Huber (2009)指出，精确概率主义可以理解为声称没有证据对任何命题保持沉默。也就是说，对于所有 X，I(X)=0。一个人永远不能暂停判断。这是一种看待精确概率主义对证据的态度的好方法。Huber 在这一点上是在谈论 Dempster-Shafer 信念函数（参见历史附录，第 7 节），但它也适用于 IP。

致力于精确概率论的人可能会回答，将 p(X)=0.5 设置为悬而不决。这是在抛硬币的情况下最不确定的信念。更一般地说，悬而不决应该理解为最大化熵（Jaynes 2003; Williamson 2010: 49–72）。非精确概率论者可能会争辩说，如果你坚持对信念进行精确概率论表示，这似乎只是一种正确的不确定方式。也就是说，如果你已经承诺通过单一精确概率来表示信念，那么最大熵方法是有意义的，但如果可用的是置信集合，它就失去了吸引力。当证据不能确定你的置信度时，你会悬而不决。但对于精确概率论者来说，没有办法区分悬而不决和强有力的半概率证据之间的差异。这只是再次涉及权重/平衡的论点。

为了使事情更加鲜明，考虑亚当·埃尔加（Adam Elga）提出的以下令人愉快的奇怪例子：

> 一个陌生人走向你，开始从一个袋子里拿出物品。他首先拿出的三个物品是一个常规大小的牙膏管，一只活的水母和一个旅行装牙膏管。你应该相信他接下来拿出的物品是另一个牙膏管的程度有多大？（2010: 1）

在这种情况下，与硬币情况不同，直觉对于“正确”的精确概率悬挂判断并不清楚。最大熵方法的推荐取决于对用于模拟情况的形式语言的看似任意的选择。威廉姆森对这个语言相对性问题非常清楚。他认为语言选择编码了我们的一些证据。

对这个论点的另一个回应是采纳威廉·詹姆斯对 W.K.克利福德的回应（克利福德 1901 年；詹姆斯 1897 年）。詹姆斯认为，只要你的信念与证据一致，那么你可以自由地相信任何你喜欢的东西。因此，没有必要悬挂判断。因此，精确概率论者无法这样做并不是真正的缺陷。这种态度有时被称为认识论自愿主义，接近布鲁诺·德·费内蒂、弗兰克·拉姆齐和其他人所支持的主观主义。

似乎有一个情况可以采用另一种悬挂判断的方法，以允许您在证据非常不完整、模棱两可或非精确时避免进行任何赌注。如果您的置信度作为接受赌注的标准，它们应该允许赌注的双方都不可接受。精确概率论者无法做到这一点，因为如果一个赌注具有（精确的）预期值 e，那么采取该赌注的另一方（即庄家）的预期值为 −e。如果可接受性被理解为非负期望，那么对于精确的代理人来说，任何赌注的至少一方是可接受的。这似乎是不令人满意的。真正的悬挂判断无疑涉及到不愿意以任何赔率冒险在一个命题的真实性上下赌注。

受到著名的“Bertrand 悖论”的启发，Chandler（2014）提出了一个简洁的论证，即精确的概率论者无法同时满足关于对变量悬而不决的两个期望。第一个期望：如果你对有界实数变量 X 的值悬而不决，那么似乎对于 X 的可能值的不同区间，你的认知状态应该是一样的。第二个期望：如果 Y 本质上描述的是与 X 相同的量，那么对于 X 的悬而不决应该意味着对于 Y 的悬而不决。现在假设你有精确的概率，并且对 X 悬而不决。根据第一个期望，你对 X 的值有一个均匀分布。现在考虑 Y=1/X。Y 本质上描述的是与 X 相同的量。但是对 X 的均匀分布意味着对 Y 的非均匀分布。所以你对 Y 不悬而不决。一个现实世界的相关变量的例子是“云中的冰停留时间”和“云中的冰下降速率”。这些变量是反相关的，但本质上描述的是气候系统的同一个要素（Stainforth 等人，2007 年：2154）。

因此，精确的概率论者无法满足这些合理的对悬而不决的期望。而非精确的概率论者可以：例如，所有关于 X 的概率函数的集合同时满足这两个期望。可能还有更多信息量更大的先验分布也能表示悬而不决，但现在指出非精确概率论似乎更能表示悬而不决，已经足够了。Walley（1991）的第 5.5 节讨论了非精确概率论作为处理悬而不决的方法的前景。

### 2.5 未知的相关性

Haenni 等人（2011 年）通过展示精确概率判断如何产生非精确概率来激发人们对非精确概率的兴趣。也就是说，如果你对 X 有一个精确的概率，对 Y 也有一个精确的概率，那么即使你不知道 X 和 Y 之间的关系，你也可以对 p(X∩Y)和 p(X∪Y)进行界定。这些界定给出了复合事件可能概率值的区间。

例如，你知道 p(X∩Y)的上界是 p(X)和 p(Y)，因此也是 min{p(X),p(Y)}。如果 p(X)>0.5 且 p(Y)>0.5，则 X 和 Y 必定重叠。因此，p(X∩Y)的下界是 p(X)+p(Y)−1。但是，根据定义，p(X∩Y)的下界也是 0。因此我们有以下结果：如果你知道 p(X)和 p(Y)，那么你就知道 max{0,p(X)+p(Y)−1}≤p(X∩Y)≤min{p(X),p(Y)}。

max{0,p(X)+p(Y)−1}≤p(X∩Y)≤min{p(X),p(Y)}.

同样，可以对 p(X∪Y) 设定上界。当 X 和 Y 是不相交的时候， p(X∪Y) 不能大于 p(X)+p(Y)，因此它的上界是 p(X)+p(Y)。它也不能大于 1，因此它的上界是这些表达式的最小值。它也不能小于 p(X) 和 p(Y)，因此它的下界是它们的最大值。将这些放在一起，

max{p(X),p(Y)}≤p(X∪Y)≤min{p(X)+p(Y),1}。

这些约束实际上是从德芬尼蒂的预测基本定理中得到的（德芬尼蒂 1990 [1974]: 112; Schervish, Seidenfeld, and Kadane 2008）。

所以，如果你的证据限制了你对 X 和 Y 的信念，但对它们的相互作用保持沉默，那么你只能将这些复合事件确定到一定的区间内。任何特定概率函数的选择都会超出证据范围，假设 X 和 Y 之间存在某种特定的证据关系。也就是说，p(X)和 p(X∣Y)将以一种与你的证据无关的方式不同。

### 2.6 非精确的概率

如果客观概率不是概率，那该怎么办？如果我们支持已知客观概率与信念之间的某种联系，例如直接推理原则或刘易斯的主要原则（刘易斯 1986 年），那么我们可能有额外的理由支持非精确概率主义。普遍认为概率应该是概率的真理，但很少有人提出论证。例如，沙弗（2007 年）将遵守概率公理作为扮演“机会角色”所需的事情之一，但没有提出为什么应该这样的论证。乔伊斯说：“有人认为客观概率不是概率。这似乎不太可能，但解释为什么会让我们离题太远”（2009 年：279，脚注 17）。关于机会的其他讨论，例如在统计力学中（洛厄尔 2001 年；弗里格 2008 年）或“休谟机会”（刘易斯 1986 年，1994 年），都默认机会应该是精确和概率性的（达达什蒂等人 2014 年是个例外）。显然，将机会的概念用作解释概率论的一种方式会导致混淆。然而，有一个完全合理的预理论机会概念：毕竟，概率论最初是为了推理而发明的。这种预理论机会似乎仍然是我们应该在某种意义上分配我们的信念的东西。而且很少有人论证机会必须始终是概率。如果机会以某种特定方式非概率化，人们可能会主张你的信心也应以同样的方式非概率化。如果机会和信心具有非概率化的形式结构，机会协调规范应该采取何种形式，目前还是一个未解决的问题。

我想举几个例子来说明这个观点。首先考虑一些物理过程，它没有一个极限频率，但频率是变化的，始终保持在某个区间内。这将是一个具有偶然性但相当可预测的过程。也许对这样一个系统的最佳描述就是对其相对频率设定界限。使用 IP 模型研究了这些过程（Kumar 和 Fine 1985; Grize 和 Fine 1987; Fine 1988），并且已经讨论过它们作为确信度不精确性的潜在来源（Hájek 和 Smithson 2012）。一种特定的非标准理解量子力学事件的方式自然地导致了上概率模型（Suppes 和 Zanotti 1991; Hartmann 和 Suppes 2010）。约翰·诺顿讨论了概率论作为归纳逻辑的局限性，他使用了一个他声称没有合理的概率态度的例子（Norton 2007, 2008a,b）。人们可能希望 IP 提供了一种类似诺顿所描绘的归纳逻辑。诺顿本人对这一观点表示怀疑（Norton 2007），尽管 Benétreau-Dupin（2015）将 IP 作为诺顿项目的候选系统进行了辩护。最后，对模糊性的特定观点可能会促使重新思考机会的形式结构（Bradley 2016）。

### 2.7 群体信念

假设我们希望我们的认识论不仅适用于个体，还适用于像委员会、政府、公司等“群体代理人”。这样的代理人可能由意见不合的成员组成。Levi（1986，1999）认为，用概率集合而不是精确概率来表示这种冲突更好。关于组成员（Genest 和 Zidek 1986）的（概率）意见的组合或聚合有丰富的文献，但这种聚合的结果不能充分表示群体之间的分歧。某些形式的聚合也未能遵守对群体信念的合理约束。例如，如果群体的每个成员都同意 X 和 Y 在概率上是独立的，那么要求群体信念尊重这种一致性似乎是合理的。然而，众所周知，线性汇集——一种简单而流行的聚合形式——不符合这一要求。考虑两个概率函数 p，q，使得 p（X）=p（Y）=1/3，p（X∣Y）=p（X），而 q（X）=q（Y）=2/3，q（X∣Y）=q（X）。通过对它们进行加权平均来聚合这两个概率：r=p/2+q/2。现在，计算表明 r（X∩Y）=5/18，而 r（X）r（Y）=1/4，从而证明 r 不认为 X 和 Y 是独立的。因此，这种聚合方法不满足上述要求（Kyburg 和 Pittarelli 1992；Cozman 2012）。有关群体中的判断聚合的更多信息，请参见 List 和 Pettit（2011），特别是第 2 章。

Elkin 和 Wheeler（2016）认为，解决精确概率同行之间的分歧应该涉及非精确概率。Stewart 和 Quintana（2018）认为，非精确聚合方法具有一些精确聚合方法所没有的良好特性。

如果委员会成员在群体中的确信度和效用不同，则没有与代理人的概率和效用不同的精确概率-效用对能够满足帕累托条件（Seidenfeld，Kadane 和 Schervish 1989）。帕累托条件要求群体偏好尊重群体中的偏好一致。也就是说，如果群体的所有成员都更喜欢 A 而不是 B（也就是说，如果每个群体成员发现 A 的预期效用高于 B），那么聚合偏好（由聚合概率-效用对确定）应该满足该偏好。由于这种“共识保护”是对聚合的合理要求，这个结果表明精确的群体代理模型存在问题。Walley 讨论了一个概率集合的例子，其中每个概率代表一个群体成员的信念，那么 P 是每个代理人信念的不完全描述，也就是说，如果 P 的所有成员都同意某件事，那么每个代理人都相信这件事。概率集合允许我们表示在判断上存在冲突的代理人（Levi 1986, 1999）。

> 理想理性的代理人可能面临没有最佳选择的情况。概率判断的不确定性和价值观之间的冲突导致在选择时，理性的代理人认识到在可用选择集中有多个可接受的选项偏好排序。（Levi 1999: 510）

利维还认为，个体代理人与群体一样可能存在冲突，因此个体的信任状态也更适合用概率集合来表示。（利维还提出了信任状态的凸性，这与上述关于独立性的论证相冲突（见历史附录第 3 节）。）我们不需要接受群体和个体必须以相同的方式建模的观点，就可以从这个观点中得到一些启示。我们只需要接受这样一个观点，即个体可以以一种合理的方式存在冲突，她的信任状态（或信任和价值状态）可以用函数集合来表示。布拉德利（2009）将这些集合的成员称为“化身”。这表明我们将个体的信任集合解释为由她的化身组成的信任委员会。这种对代表者的解释归功于乔伊斯（2011），尽管乔伊斯将其归因于亚当·埃尔加。该委员会代表了与证据一致的所有可能的先验概率。每个信任委员会成员都是一个完全有意见的詹姆斯主义者。整个委员会作为一个整体是一个克利福德客观主义者。

## 3. IP 的哲学问题

本节收集了文献中对 IP 提出的一些问题。

### 3.1 扩张

考虑两个逻辑上无关的命题 H 和 X。现在考虑这个简单模型中所列出的四个“状态描述”，如图 1 所示。所以 a=H∩X 等等。现在定义 Y=a∪d。或者，考虑以下方式相关的三个命题：Y 被定义为“当且仅当 X 时 H”。

![A square with four quadrants, first column is labeled 'H' and second 'not H'; first row is labeled 'X' and second 'not X'  First quadrant first column/first row is shaded and has an 'a' on it; second quadrant second column, first row is not shaded and has a 'b' on it; third quadrant first column, second row is unshaded and has a 'c' on it; and last quadrant second column, second row is shaded and has a 'd' on it](https://plato.stanford.edu/entries/imprecise-probabilities/two-by-two.png)

图 1：Seidenfeld（1994）之后的关系图；Y 是阴影区域

进一步假设 p(H∣X)=p(H)=1/2。除了逻辑和概率理论所要求的关系外，没有其他命题之间的关系。很容易验证上述约束要求 p(Y)=1/2。然而，X 的概率没有限制。

假设你获得了上述信息，并将你的代表者定义为满足这些约束的概率函数的完整集合。罗杰·怀特提出了一个直观的解释，关于你如何接收与命题相关且受到如此限制的信息（怀特，2010 年）。怀特的难题是这样的。我有一个命题 X，关于这个命题你一无所知。我在一个公平硬币的正面上写下 X 和 ¬X 中的真命题。我把硬币涂黑，所以你看不到哪一面是正面。然后我把硬币抛起来，它落下时 X 朝上。H 是硬币正面朝上的命题。Y 是硬币“X”面朝上的命题。

想象一下，如果你有一个精确的先验概率，使你对 X 有确定的信念（这与上述约束是兼容的，因为 X 没有限制）。现在看到 X 朝上应该是硬币朝上的证据。游戏设置使得这些表面上无关的证据可以携带信息。同样，对 X 非常有信心使得 Y 成为 H 的很好证据。如果你确信 X 是假的，Y 将成为 H 为假的确凿证据。因此，p(H∣Y)似乎与对 X 的先验信念成正比（事实上，这可以很容易地证明）。鉴于事件之间的关系，观察 X 或 ¬X 是否朝上是一个学习 H 是否朝上的嘈杂信道。

那么让我们回到最初的非精确案例，并考虑在 X 上拥有非精确信念意味着什么。除其他事项外，这意味着考虑到 X 可能非常可能。它与您的信念状态一致，即如果您知道 X 是什么命题，您会认为它非常可能。在这种情况下，Y 将是 H 的良好证据。请注意，在这种情况下，了解到硬币落地的命题是 ¬X（称为 Y'）也将成为 H 的良好证据。同样，X 可能是一个您对其非常低的置信度的命题，因此 Y 将成为 H 的反证据。

由于您对 X 处于无知状态，您的代表者包含将 Y 视为 H 的良好证据的概率，以及将 Y 视为 ¬H 的良好证据的概率。因此，尽管 P(H)={1/2}，我们有 P(H∣Y)=[0,1]。这种现象——后验概率比先验概率更宽——被称为概率的扩散。这种现象在数学文献中得到了深入研究（Walley 1991; Seidenfeld and Wasserman 1993; Herron, Seidenfeld, and Wasserman 1994; Pedersen and Wheeler 2014）。Levi 和 Seidenfeld 在 Good（1967）之后提到了一个关于 Good 的扩散示例。Good 在他的后续论文中提到了这种对应关系（Good 1974）。White 的论文（White 2010）引起了哲学界对扩散的最近兴趣。

White 认为扩张是一个问题，因为学习 Y 似乎与 H 无关。也就是说，由于你对 X 一无所知，学习硬币是否正面朝上似乎并不能告诉你硬币是否正面朝上。当你学习 Y 时，你的对 H 的信念从 1/2 扩张到 [0,1] 似乎很奇怪。这似乎与 H 无关。然而，只有当 p(X)=1/2 时，Y 才真正与 H 无关。你对 X 可能有的任何其他精确信念都会使 Y 影响你对 H 的后验信念。图 2 显示了关于 X 可能性的一个特定信念的情况；对于一个特定的 p∈P。水平线可以上下移动，这取决于我们关注的委员会成员对 X 的信念。只有当 X 的先验概率也是 1/2 时，p(H∣Y)才是一半。然而，非精确概率论者考虑了 Y 可能影响对 H 的信念的所有方式。

![A square with two columns labeled 'H' and 'not H' and two rows, a narrow one labeled 'X' and a wide one labeled 'not X'  The first quadrant first column, first row is shaded and has a 'Y' on it; second quadrant second column, first row is not shaded and has a 'not Y' on it; third quadrant first column, second row is unshaded with a 'not Y' on it and the fourth quadrant second column, second row is shaded and has a 'Y' on it](https://plato.stanford.edu/entries/imprecise-probabilities/joyces-diagram.png)

图 2：可信度委员会的一名成员（引自 Joyce (2011)）

考虑一组代理人，他们在上述硬币案例中对 X 的先验概率有精确的信念，并在 X 的先验上有所不同。他们都会从 H 的先验为一半开始。在学习 Y 之后，这些代理人根据他们不同的更新倾向对 H 的后验意见有所不同。群体的信念会扩张。然而，群体中的任何一个代理人都没有以任何不合理的方式行事。如果我们接受 Levi 的建议，即个体和群体一样可以产生冲突，那么个体代理人的信念似乎也可以扩张，就像群体一样。

扩张存在两个明显的问题。首先，明显无关证据的信念转移效应；其次，学习某些证据可能导致你的信念区间扩大。上述评论涉及到了第一个问题。Pedersen 和 Wheeler（2014）也专注于缓解这个担忧。现在我们转向第二个担忧。

即使我们将扩张视为非精确概率论者生活中的一个事实，它仍然很奇怪。即使接受了上述所有的论证，仍然很奇怪地说，无论你学到了什么，你对 H 的信念都会扩张。也就是说，无论你学到了 Y 还是 Y'，你对 H 的后验信念看起来都是一样的：[0,1]。或者，也许它显示的奇怪之处在于你的初始置信度是精确的。

Hart 和 Titelbaum（2015）认为，扩张之所以奇怪，是因为在双条件上进行条件化（毕竟，这就是你在上面的例子中所做的）即使在精确的情况下也是不直观的。是否所有的扩张情况都可以用这种方式解释尚有待观察。Gong 和 Meng（2017）同样将扩张视为误指定统计推断的问题，而不是 IP 本身的问题。

在这种看似奇怪的情况下，怀特提出了一种被扩张所主导的方式，这是一个有缺陷的认识论的指标。怀特认为，扩张的例子表明非精确的概率违反了反思原则（van Fraassen 1984）。论证如下：

> 假设你现在知道无论你学习 Y 还是学习 Y'，你对 H 的确信度将是 [0,1]（而且你肯定会学到其中之一），那么你当前对 H 的确信度也应该是 [0,1]。

总体思路是你应该将你的确信度设置为你预期将来可能的确信度。更具体地说，你对 X 的确信度应该是你未来可能的对 X 的确信度的期望，考虑到在这个例子中你可能学到的所有东西，你对 H 的确信度将是相同的，你应该将其作为你的先验确信度。你的先验确信度应该是 P(H)=[0,1]。因此，一开始就有一个精确的先验确信度是不合理的。这就是反思原则对扩张的论证。然而，你的先验 P 并不完全精确。考虑 P(H∩Y)，即对这个连接的先验信念是不精确的。因此，扩张和反思的所谓问题并不像“你的精确信念变得不精确”那么简单。问题是“你对 H 的精确信念变得不精确”；或者更确切地说，你对 H 的精确信念，即 P(H)的表示变得不精确。

反射问题更基本。在这种情况下，非精确概率论者对反射有什么要求？现在，显然每个信任委员会成员的先验信念是对可能的未来证据的期望（这是概率论的一个定理）。但不知何故，人们感觉整个信任状态对原理的要求并不敏感。每个 p∈P 都满足原理，但问题的尴尬对称性使得 P 作为一个整体违反了原理。如果我们将 P(H)作为信念状态的一个充分表示，这看起来是这种情况。但正如前面所指出的，这不是理解信任状态的一种充分方式。请注意，尽管学习 Y 和学习 Y'都会促使将对 H 的后验信念表示为区间 [0,1]，但作为概率集合的信任状态并不相同。将学习 Y 后的状态称为 P'，学习 Y'后的状态称为 P''。因此，P'={p(⋅∣Y),p∈P}，P''={p(⋅∣Y'),p∈P}。虽然 P'(H)=P''(H)，但作为概率集合，P'≠P''，因为如果 p∈P'，则 p(Y)=1，而如果 p∈P''，则 p(Y)=0。因此，我们应该从扩张中学到的一个教训是，不精确的信念是由函数集合而不是由集值函数表示的（另见，Joyce 2011；Topey 2012；Bradley and Steele 2014b）。

因此，扩张可能可以被驯服或合理化，反射问题可以得到缓解。但扩张引发了一个难题：在精确的背景下，我们有一个很好的结果——由 Good（1967）提出——大致说来，学习新信息具有正的期望值。信息具有正的价值。这个结果在一定程度上受到了扩张的削弱。Bradley 和 Steele（2016）认为，在 IP 设置中，Good 的结果在某种程度上可以部分挽救。

看起来，扩张的例子削弱了先前的主张，即非精确概率允许您表示证据的重量和平衡之间的差异（参见第 2.3 节）：学习 Y 似乎产生了一种信念，人们会认为它代表的证据较少，因为它更分散。这是因为扩张案例中的先验确信度是精确的，不是通过证据的重量，而是通过先前讨论的对称性。我们不能将区间 [P––(X),¯¯¯¯P(X)] 的狭窄性作为证据重量的特征，因为该区间之所以狭窄，可能是因为积累了大量证据以外的其他原因。因此，我先前关于重量/平衡的言论不应被解读为非精确概率总是能够表示重量/平衡区别的主张。真实的情况是，存在一些情况，非精确概率可以以影响决策的方式表示这种区别。这个问题还远未解决，还需要在这个主题上进行更多的工作。

### 3.2 信念惯性

想象一下有两个活跃的假设 H1 和 H2。您不知道它们有多大可能性，但它们是互斥且穷尽的。然后您获得了一些证据 E。一些简单的概率理论表明，对于每个 p∈P，我们有以下关系（使用 pi=p(E∣Hi)表示 i=1,2）。

p(H1∣E)=p(E∣H1)p(H1)p1p(H1)+p2p(H2)=p1p(H1)p2+(p1−p2)p(H1)

如果你对 H1 的先验是非精确的——如果 P(H1)=[0,1]——那么上述方程表明你的后验也是非精确的。也就是说，如果 p(H1)=0，那么 p(H1∣E)=0，同样对于 p(H1)=1=p(H1∣E)，由于上述方程的右边是 p(H1)的连续函数，对于每个 r∈ [0,1]，都存在一些 p(H1)使得 p(H1∣E)=r。因此，P(H1∣E)=[0,1]。

看起来非精确概率论者无法从非精确的先验中学习。这种信念惯性的问题至少可以追溯到 Levi（1980）的第 13 章。Walley 也讨论了这个问题，但似乎对此不动心：他说，非精确的后验概率只是采用非精确的先验的结果。

> 空泛的预测确实是相当琐碎的模型。这似乎适用于“完全无知”的模型，这是一种相当琐碎的不确定状态。另一方面，人们不能指望这些模型在实际问题中非常有用，尽管它们在理论上很重要。如果将空泛的预测用于对统计参数的先验信念建模，它们会导致空泛的后验预测...然而，接近空泛并对先验信念提出几乎最小要求的先验预测可以导致合理的后验预测。（Walley 1991: 93）

Joyce（2011）和 Rinard（2013）都讨论了这个问题。 Rinard 对此的解决方案是认为这表明空泛的先验从未是一种合法的信念状态。或者说，我们只需要使用非空泛的先验来模拟您的信念，即使这些先验只是对您的信念状态的不完全描述。这类似于 Walley 对信念的“非穷尽”表示。Vallinder（2018）认为信念惯性的问题是一个相当普遍的问题。Castro 和 Hart（即将出版）利用信念惯性的潜在危险来反驳我所称的“客观主义”对 IP 的解释。

这个问题的另一种解决方案（受 Wilson 2001 和 Cattaneo 2008; 2014 的启发）是修改更新规则，以使那些对证据给出极小似然的极端先验从代表者中剔除出去。还需要进行更多的工作，以明确这一点，并展示响应的具体方式。

### 3.3 决策制定

信念模型的一个重要用途是作为理性决策理论的一部分。非精确概率也不例外。然而，使用非精确概率进行决策制定存在一些问题。

简而言之，非精确概率决策制定的问题在于，你的信念委员会可能对最佳行动有不同意见，当他们意见不一致时，你应该如何行动是不清楚的（请回顾第 1.1 节中的定义）。想象一下在一个未知偏倚的硬币上下注。考虑对正面和反面的指标赌注。这两个赌注都有非精确的期望值 [0,1]。你应该如何比较这些期望值呢？这些赌注是不可比较的。（如果硬币的情况似乎具有过多的可利用对称性，请考虑对 Elga 从他的包里拿出牙膏或水母的单位赌注。）威廉姆森认为，这种不可比较性导致了决策制定的瘫痪，这突显了认识论的一个缺陷（2010 年：70）。然而，如果我们对非精确概率的动机之一正是为了能够表示这种前景的不兼容性（见第 2.2 节），那么这个论点似乎是在忽略问题的关键！非精确概率的选项不可比较性不是一个错误，而是一个特点。关于非精确概率的决策制定问题已经被 Seidenfeld（2004）、Troffaes（2007）、Seidenfeld、Schervish 和 Kadane（2010）、Bradley（2015）、Williams（2014）、Huntley、Hable 和 Troffaes（2014）讨论过。

当你需要做一系列决策时，知识产权面临着更严重的担忧。经济学中有大量关于代理人决策序列的文献，这些代理人并不是传统的期望效用最大化者（Seidenfeld 1988; 1994; Machina 1989; Al-Najjar and Weinstein 2009，以及其中的参考文献）。在 Elga（2010）发表了题为“主观概率应该是尖锐的”的论文之后，这个问题再次引起了哲学家们的关注。该论文通过一个简单的决策示例突出了问题，尽管在 Hammond（1988）中也有一个非常类似的例子，与 Seidenfeld 对 Levi 的决策规则“E-可接受性”（Seidenfeld 1988）的讨论有关。

问题的一个版本如下。你将要接连被提供两个关于一个未知偏倚的硬币的赌注，A 和 B。这些赌注的支付如下：

* 如果硬币正面朝上，A 输 10；否则赢 15。
* 如果硬币正面朝上，B 赢得 15，否则输掉 10

如果我们假设您的信念由 P(H)=[0,1] 表示，这些赌注的期望值为 [-10,15]。拒绝每个赌注的期望值为 0。因此，接受和拒绝 A 在您的信念方面是无法比较的。B 也是如此。问题在于拒绝两个赌注似乎是不理性的，因为接受两个赌注可以确保您获得 5 的回报。Elga 认为，对于非精确概率来说，没有决策规则可以排除拒绝两个赌注。然后他认为，这表明非精确概率是错误的认识论。这两个论点都不成立。Chandler（2014 年）和 Sahlin 和 Weirich（2014 年）都指出，某种类型的非精确决策规则确实使拒绝两个赌注成为不允许的，Elga 在他的论文勘误中也承认了这一点。Bradley 和 Steele（2014a）认为，使拒绝两个赌注仅仅成为允许的决策规则是进行非精确决策的合法方式。他们还指出，Chandler 和 Sahlin 以及 Weirich 提倡的规则在其他决策问题上具有违反直觉的后果。

Moss（2015 年）将 Elga 风格的非精确概率决策问题与道德困境联系起来，并使用这个类比来解释 Elga 问题中的冲突直觉。Sud（2014 年）和 Rinard（2015 年）也提供了非精确概率的替代决策理论。Bradley（2019 年）认为，这三种理论都难以解释上述的 Ellsberg 决策版本。

即使 Elga 的论点成立，且没有好的非精确决策规则，也不能说明 IP 是一种错误的信念模型。我们希望能够表示对各种事物的判断暂停，包括对多个选项的相对优劣的判断。这种不可比较性必然会带来一些顺序决策的问题（例如，参见 Broome 2000），但这并不是反对认识论的论点。正如 Bradley 和 Steele 所指出的，如果 Elga 的论点有效，它可以作为一个论点，即不存在不可比较的好处，而这似乎过于强硬。

### 3.4 解释 IP

非精确概率并不是一个全新的理论。它们只是对于模糊情况下现有信念模型的轻微修改。通常情况下，你的置信度足够精确，你可以采取的行动使你表现得更像是一个严格的贝叶斯主义者。可以将非精确概率类比为严格贝叶斯主义的“牛顿力学”中的“相对论”：在极端情况下几乎无法区分。这个类比更深层次的是：在这两种情况下，这些理论在正常情况下是“经验上无法区分的”，但在某些概念上存在根本的差异。即在牛顿力学/广义相对论中的绝对空间的作用；在严格/非精确概率主义情况下如何建模无知。Howson（2012）在信念建模和科学模型之间提出了类似的类比。两者都涉及对目标系统的某种忠实性要求，但在每种情况下，忠实性必须与简单性、计算可行性等各种理论优点进行权衡。同样，Hosni（2014）认为适当的信念模型取决于上下文。当然，重要的不同之处在于信念模型既要具有规范性，又要具有描述性，而科学模型通常只需要扮演描述性角色。Walley（1991）讨论了类似的观点，但对这种解释持怀疑态度。

#### 3.4.1 什么是信念？

概率计算的一个标准解释是概率表示“信念程度”或“置信度”。这更或多或少是目前正在考虑的概念。但是什么是信念程度？有许多方法可以解释度量信念的表示实际上表示的是什么。

信念程度最直接的理解之一是将置信度解释为代理人在下注方面的限制意愿。这个想法可以追溯到 Ramsey (1926) 和 de Finetti (1964, 1990 [1974])。这个想法是，你对 X 的置信度是 α，当且仅当 α 是你在下注中对赌局无所谓的价值：

* 如果 X，赢得 1−α，否则输掉 α
* 如果 X，输掉 1−α，否则赢得 α

这是“投注解释”。这是荷兰书论证背后的解释：这种信念解释使得投注比率与信念之间的联系足够强大，以支持荷兰书定理的主张，即信念必须是概率的。威廉姆森实际上对 IP 有异议，因为 IP 无法给出这种投注解释（2010 年：68-72）。他认为，尽管史密斯和沃利的贡献不容忽视（见正式附录），但单值投注解释在某种程度上作为信心的标准是有意义的，而单边投注解释则不然。这个想法是，除非按照你的标准，所有的赌注都是极其有利的赔率，否则你可能会拒绝所有的赌注。这种行为并不能说明你的信心。然而，如果你提供一个单一的值，那么这就告诉我们一些关于你的认识状态的信息。这个想法有一定道理，但必须权衡一下，因为强迫代理人拥有这样的单一数字会系统地误代他们的认识状态。正如卡普兰所说

> 仅仅因为你在被迫选择某个确定值 [p(X)] 下提名 0.8，并不意味着你有理由选择 0.8。简而言之，正统贝叶斯主义者犯了提倡错误精确度的罪过。（卡普兰 1983 年：569，卡普兰的强调）

与确信度相关的解释是将确信度理解为仅仅是代理人行动倾向的表示。这种解释将确信度视为这样的函数，使得您引发的偏好和观察到的行动可以表示为对该概率函数的预期效用最大化者的偏好和行动（Briggs 2014：第 2.2 节）。您的确信度就是代表您作为一个理性代理人的那个函数。对于精确概率主义来说，“理性代理人”意味着“预期效用最大化者”。对于非精确概率主义来说，理性代理人必须意味着略有不同的东西。这种想法的稍微复杂一点的版本是将确信度理解为偏好结构中概率函数所代表的那个组成部分。回顾不完备性的讨论（第 2.2 节）。IP 将您表示为在所有 p∈P 之间存在冲突的代理人，除非 p 同意 X 优于 Y 或反之，否则您会发现它们是不可比较的。表示定理实际上证明了什么是有争议的（参见 Zynda 2000；Hájek 2008；Meacham 和 Weisberg 2011）。

有人可能认为确信度是在头脑中对某种心理或心理数量进行建模。信念的强度是一种真实的心理数量，确信度应该衡量的就是这个。与上述观点不同，这种对确信度的解释并不容易操作化。它似乎也将信念的理解与决策的理解分离开来。上述行为主义观点认为信念在决策中的作用是中心的，甚至是信念的定义。这种心理解释似乎将信念与决策分离开来。是否存在这样稳定的神经结构也是有争议的问题（Fumagalli 2013；Smithson 和 Pushkarskaya 2015）。

行为主义观点和心理学观点之间的妥协是说，信念在决策中的角色部分决定了其特征。这为信念在其他方面发挥重要作用，如断言、推理和推断等，留下了空间。所以对于“信念的程度是什么？”这个问题的答案是：“信念的程度是在决策环境、断言行为、推理和推断中发挥信念所赋予的心理因素的角色”。在这种描述中，可以理解为置信度是衡量与行动、断言等有因果关系的某种心理数量。这是对信念是什么的一种功能主义解读。Eriksson 和 Hájek（2007）认为，“信念的程度”应该被视为认识论中的原始概念。上述对信念程度的描述填补了信念程度所扮演角色的画面。

#### 3.4.2 什么是对 X 的信念？

现在我们对信念模型应该做什么有了更好的理解。但是，我们信念模型的哪个部分代表了信念状态的哪个部分呢？首先要说的是，P(X)不是对 X 的信念的充分表示。也就是说，置信集方法的一个价值在于它可以捕捉到在关注概率值相关集合时丢失的某些非逻辑关系。例如，考虑投掷一个未知偏倚的硬币。P(H)=P(T)=[0,1]，但这未能表示一个重要事实，即对于所有 p∈P，p(H)=1−p(T)。或者说，在第一次投掷中得到正面的可能性至少与连续两次投掷中得到正面的可能性一样大。这些事实在集合值观点中无法捕捉到，但在推理和决策中起着重要作用。

P(X)可能对某些目的来说是足够好的信念表示。例如，在 Ellsberg 游戏中，这些概率值集合（及其相关的期望值集合）足以解释非概率偏好。表示需要多好取决于将用于什么目的。将太阳表示为一个点质量对于基本轨道计算来说是足够好的表示，但如果你正在研究日冕物质抛射、太阳耀斑或其他依赖于太阳内部动力学细节的现象，显然是不足够的。

### 3.5 回归

非精确概率是一种理论，源于我们作为推理代理的局限性，以及我们证据基础的局限性。如果我们有更好的证据，一个单一的概率函数就足够了。但由于我们的证据不足，我们必须使用一个集合。在某种程度上，精确概率主义也是如此。如果我们只知道真相，我们可以用一个真值函数或者只是一组完全相信的句子来表示信念。但由于有些真相我们不知道，我们必须使用概率来表示我们的中间信心。事实上，对于非精确概率主义者来说，同样的问题也会出现。假设我们知道哪个概率集合最能代表证据，这是合理的吗？也许我们应该有一组概率集合...类似的问题也出现在模糊理论中（Sorensen 2012）。我们反对对信念程度使用精确值，那么为什么满足于具有精确边界的集合值信念呢？这是将“高阶模糊性”重新解释为非精确概率主义问题的问题。为什么概率集合是停止回归的正确层次？为什么不是概率集合的集合？为什么不是二阶概率？为什么不是单一概率函数？Williamson（2014）提出了这一观点，并认为单一精确概率是正确的层次，可以摆脱“不确定性升级器”。Williamson 提倡对信念的投注解释，并且他在这里的论证假设了这种解释。但这个观点仍然值得讨论：对于信念是什么的特定解释来说，什么样的不确定性水平是合适的。对于上面提出的功能主义解释来说，这是一种实用的选择。我们允许这种回归继续下去，处理这些代表信念的对象就越困难。所以让我们不要走得太远。

我们已经看到了上面的论点，即 IP 在代表悬而未决的判断、证据的重量和平衡等方面确实比精确概率主义有一些优势。因此，我们至少必须在不确定性升级器上走到这一步。但出于实用性的考虑，我们不需要再走得更远，即使有一些分层贝叶斯模型可以给我们提供关于高阶信念模型的明确定义的理论。这是一个实用主义的论点。实际的人类信念状态可能是极其复杂的神经模式，具有所有相关的复杂性、互动性、反身性和模糊性。我们正在建模信念，因此关键是选择一个适当复杂度的模型。如果你正在计算地球上炮弹的轨迹，你可以安全地忽略月球对炮弹的引力影响。同样，有些情境下简单的信念模型是适当的：也许你的信念状态只是一个语言的句子集合，或者只是一个单一的概率函数。然而，如果你正在建模潮汐，那么月球的引力影响就需要考虑进去：模型需要更复杂。这表明，在严重不确定性下，一个合适的信念模型可能需要超越单一概率范式。但实用主义的论点是，我们只需要走到我们需要的地方。因此，虽然你需要建模月球才能正确预测潮汐，但你可以不考虑金星。这与前面提到的信念模型的适用性的情境性有关。如果有人试图对信念的本体论进行完整的形式化描述，那么这些回归的担忧将更难以避免。

让我们假设我们有一个定义在（一阶）概率 P 集合上的二阶概率 μ。通过 p∗(X)=∑Pμ(p)p(X)（如果 P 是有限的，在保持简单的前提下，我只讨论这种情况），我们可以将不确定性减少到一个单一函数中。现在，如果 p∗(X)用于决策，那么我们没有真正意义上的 IP 模型，它无法解释 Ellsberg 选择，也无法产生不可比较性。如果 μ 有其他用途，一种允许不可比较性并解释 Ellsberg 选择的用途，那么它可能是可信集的真正竞争对手，但它与正统理论一样具有相同的偏离程度。

Gärdenfors 和 Sahlin 的不可靠概率模型通过“可靠性指数”（见历史附录）丰富了基本的 IP 方法。Lyon（2017）以不同的方式丰富了标准的 IP 模型：他添加了一个特权的“最佳猜测”概率。这种修改可以更好地聚合引导 IP 估计。如何最好地解释这样的模型仍然是一个悬而未决的问题。其他丰富的 IP 模型无疑也是可用的。

### 3.6 什么是一个好的非精确信念？

正如我们所见，有一些结构性特征是理性信念的必要条件。这些特征的具体内容取决于你的观点。然而，还有其他方法来评估信念。强烈相信真实的事情和强烈相信虚假的事情的否定似乎是信念的好特征。对于精确概率的情况，我们可以将其具体化。关于“评分规则”有大量的文献：这些方法用于衡量概率相对于实际世界的好坏（Brier 1950; Savage 1971; Joyce 2009; Pettigrew 2011）。这些是用于衡量概率相对于真实世界的好坏的数值方法。

然而，对于非精确概率的情况，情况看起来不容乐观。对于非精确概率，没有一个实值评分规则能够具备严格适当性的理想特性（Seidenfeld, Schervish, and Kadane 2012）。Schoenfield (2017) 提出了一个简单版本的结果。由于严格适当性是评分规则的一个理想特性（Bröcker and Smith 2007; Joyce 2009; Pettigrew 2011），这个失败是严重的。因此，需要进一步的工作来发展一个有根据的理论，以评估非精确概率。Mayo-Wilson and Wheeler (2016) 提供了一个比严格适当性更弱的特性，即非精确概率评分规则可以满足的特性。Carr (2015) 和 Konek (forthcoming) 都提出了关于非精确评分规则的积极建议。Levinstein (forthcoming) 提出，这个问题实际上只出现在确定性非精确信念中，而不是不确定信念中。

## 4. 总结

非精确概率提供了一种理性信念模型，它消除了正统精确概率方法所需的某些理想化要求。已经提出了许多这种转变的动机，并且已经讨论了许多关于非精确概率的观点。关于非精确概率仍然存在一些开放的哲学问题，这可能是未来几年的一个研究热点。

<!--md-padding-ignore-begin-->
## Bibliography

* Al-Najjar, Nabil I., and Jonathan Weinstein, 2009, “The Ambiguity Aversion Literature: A Critical Assessment”, *Economics and Philosophy*, 25: 249–284.
* Augustin, Thomas, Frank P.A. Coolen, Gert de Cooman, and Matthias C.M. Troffaes (eds), 2014, *Introduction to Imprecise Probabilities*, John Wiley and Sons. New York.
* Benétreau-Dupin, Yann, 2015, “The Bayesian who knew too much”, *Synthese*, 192:5 1527–1542.
* Binmore, Ken and Lisa Stewart and Alex Voorhoeve, 2012, “How much ambiguity aversion? Finding indifferences between Ellsberg’s risk and ambiguous bets”, *Journal of Risk and Uncertainty*, 45: 215–238.
* Blackwell, D., and M. A. Girschick, 1954, *Theory of Games and Statistical Decisions*, Wiley. New York.
* Boole, George. 1958 [1854], *The Laws of Thought*, Dover. New York.
* Bovens, Luc, and Stephan Hartmann, 2003, *Bayesian epistemology*, Oxford University Press. Oxford.
* Bradley, Richard, 2009, “Revising Incomplete Attitudes”, *Synthese*, 171: 235–256.
* –––, 2017, *Decision theory with a human face* Cambridge University Press. Cambridge.
* Bradley, Richard, and Mareile Drechsler, 2014, “Types of Uncertainty”, *Erkenntnis*. 79: 1225–1248.
* Bradley, Seamus, 2015, “How to choose among choice functions”, *Proceedings of the Ninth International Symposium on Imprecise Probability: Theories and Applications*, 57–66 URL = <http://www.sipta.org/isipta15/data/paper/9.pdf>.
* –––, 2016, “Vague chance?”, *Ergo*, 3:20
* –––, 2019, “A counterexample to three imprecise decision theories”, *Theoria*, 85:1 18–30
* Bradley, Seamus, and Katie Steele, 2014a, “Should Subjective Probabilities be Sharp?” *Episteme*, 11: 277–289.
* –––, 2014b, “Uncertainty, Learning and the ‘Problem’ of Dilation”, *Erkenntnis*. 79: 1287–1303.
* –––, 2016, “Can free evidence be bad? Value of information for the imprecise probabilist”, *Philosophy of Science*, 83:1 1–28
* Brady, Michael and Rogério Arthmar, 2012, “Keynes, Boole and the interval approach to probability”, *History of Economic Ideas*, 20:3 65–84.
* Brier, Glenn, 1950, “Verification of Forecasts Expressed in Terms of Probability”, *Monthly Weather Review*, 78: 1–3.
* Briggs, R.A., 2014, “Normative Theories of Rational Choice: Expected Utility”, *The Stanford Encyclopedia of Philosophy*, (Fall 2014 Edition), Edward N. Zalta (ed.), URL = <https://plato.stanford.edu/archives/fall2014/entries/rationality-normative-utility/>.
* Broome, John, 2000, “Incommensurable Values”, in *Well-Being and Morality: Essays in Honour of James Griffin*, R. Crisp and B. Hooker (eds), 21–38, Clarendon Press. Oxford.
* Bröcker, Jochen, and Leonard A. Smith, 2007, “Scoring Probabilistic Forecasts; On the Importance of Being Proper”, *Weather and Forecasting*, 22: 382–388.
* Camerer, Colin, and Martin Weber, 1992, “Recent Developments in Modeling Preferences: Uncertainty and Ambiguity”, *Journal of Risk and Uncertainty*, 5: 325–370.
* Carr, Jennifer, 2015 “Chancy accuracy and imprecise credence”, *Philosophical Topics* 29 67–81.
* Castro, Clinton and Casey Hart, forthcoming, “The imprecise impermissivists dilemma”, *Synthese*.
* Cattaneo, Marco, 2008, “Fuzzy Probabilities based on the Likelihood Function”, in *Soft Methods for Handling Variability and Imprecision*, D. Dubois, M. A. Lubiano, H. Prade, M. A. Gil, P. Grzegorzewski, and O. Hryniewicz (eds), 43–50, Springer.
* –––, 2014, “A Continuous Updating Rule for Imprecise Probabilities”, in *Information Processing and Management of Uncertainty in Knowledge Based Systems*, Anne Laurent, Oliver Strauss, Bernadette Bouchon-Meunier, and Ronald R. Yager (eds), 426–435, Springer.
* Chandler, Jacob, 2014, “Subjective Probabilities Need Not Be Sharp”, *Erkenntnis*. 79: 1273–1286.
* Chu, Francis, and Joseph Y. Halpern, 2004, “Great expectations. Part II: Generalized expected utility as a universal decision rule”, *Artificial Intelligence*, 159: 207–230.
* –––, 2008, “Great expectations. Part I: On the customizability of General Expected Utility”, *Theory and Decision*, 64: 1–36.
* Clifford, William Kingdom, 1901, “The Ethics of Belief”, in *Lectures and Essays*, Leslie Stephen and Frederick Pollock (eds), 2:161–205, 3rd Edition, Macmillan. London.
* de Cooman, Gert, and Enrique Miranda, 2007, “Symmetry of models versus models of symmetry”, in *Probability and Inference: Essays in Honor of Henry E. Kyburg Jnr.*, William Harper and Gregory Wheeler (eds), 67–149, Kings College Publications.
* Cozman, Fabio, 2000, “Credal Networks”, *Artificial Intelligence*, 120: 199–233.
* –––, 2012, “Sets of probability distributions, independence and convexity”, *Synthese*, 186: 577–600.
* Cozman, Fabio, and Peter Walley, 2005, “Graphoid properties of epistemic irrelevance and independence”, *Annals of Mathematics and Artificial Intelligence*, 45: 173–195.
* Dardashti, Radin, Luke Glynn, Karim Thébault, and Mathias Frisch, 2014, “Unsharp Humean chances in statistical physics: a reply to Beisbart”, in *New Directions in the Philosophy of Science*, Maria Carla Galavotti, Dennis Dieks, Wenceslao J. Gonzalez, Stephan Hartmann, Thomas Uebel, and Marcel Weber (eds), 531–542, Springer. Dordrecht.
* Elga, Adam, 2010, “Subjective Probabilities should be Sharp”, *Philosophers’ Imprint*, 10.
* Elkin, Lee and Gregory Wheeler, 2016 “Resolving peer disagreements through imprecise probabilities”, *Noûs*, 52:2 260–278.
* Ellsberg, Daniel, 1961, “Risk, ambiguity and the Savage axioms”, *Quarterly Journal of Economics*, 75: 643–696.
* Eriksson, Lena, and Alan Hájek, 2007, “What Are Degrees of Belief?” *Studia Logica*, 86: 183–213.
* Evren, Özgür, and Efe Ok, 2011, “On the multi-utility representation of preference relations”, *Journal of Mathematical Economics*, 47: 554–563.
* Ferson, Scott and Lev R. Ginzburg,1996, “Different methods are needed to propagate ignorance and variability”, *Reliability Engineering and System Safety*, 54 133–144.
* Ferson, Scott and Janos G. Hajagos, 2004, “Arithmetic with uncertain numbers: Rigorous and (often) best possible answers”, *Reliability Engineering and System Safety*, 85 135–152.
* Fine, Terrence L., 1973, *Theories of Probability: An Examination of Foundations*, Academic Press. New York.
* –––, 1988, “Lower Probability Models for Uncertainty and Nondeterministic Processes”, *Journal of Statistical Planning and Inference*, 20: 389–411.
* de Finetti, Bruno, 1964, “Foresight: Its Logical Laws, Its Subjective Sources”, in *Studies in Subjective Probability Studies in Subjective Probability*, Henry E. Kyburg and Howard E. Smokler (eds), 97–158, Wiley. New York.
* –––, 1990 [1974], *Theory of Probability*, Wiley Classics Library, Vol. 1, Wiley. New York.
* Fox, Craig R., and Amos Tversky, 1995, “Ambiguity aversion and comparative ignorance”, *Quarterly Journal of Economics*, 110: 585–603.
* van Fraassen, Bas, 1984, “Belief and the Will”, *Journal of Philosophy*, 81: 235–256.
* –––, 1990, “Figures in a Probability Landscape”, in *Truth or Consequences*, Michael Dunn and Anil Gupta (eds), 345–356, Springer. Dordrecht.
* Frigg, Roman, 2008, “Humean chance in Boltzmannian statistical mechanics”, *Philosophy of Science*, 75: 670–681.
* Frigg, Roman, Seamus Bradley, Hailiang Du, and Leonard A. Smith, 2014, “Laplace’s Demon and the Adventures of his Apprentices”, *Philosophy of Science*, 81: 31–59.
* Fumagalli, Roberto, 2013, “The Futile Search for True Utility”, *Economics and Philosophy*, 29: 325–347.
* Gärdenfors, Peter, 1979, “Forecasts, Decisions and Uncertain Probabilities”, *Erkenntnis*, 14: 159–181.
* Gärdenfors, Peter, and Nils-Eric Sahlin, 1982, “Unreliable probabilities, risk taking and decision making”, *Synthese*, 53: 361–386.
* Genest, Christian, and James V. Zidek, 1986, “Combining Probability Distributions: A Critique and Annotated Bibliography”, *Statistical Science*, 1: 114–135.
* Gilboa, Itzhak, 1987, “Expected Utility with Purely Subjective Non-additive Probabilities”, *Journal of Mathematical Economics*, 16: 65–88.
* Glymour, Clark, 1980, “Why I am not a Bayesian”, in *Theory and Evidence*, 63–93. Princeton University Press. Princeton.
* Gong, Ruobin and Xiao-Li Meng, 2017 “Judicious judgment meets unsettling update: dilation, sure loss and Simpson’s paradox”, URL = <https://arxiv.org/abs/1712.08946>.
* Good, Irving John, 1962, “Subjective probability as the measure of a non-measurable set”, in *Logic, Methodology and Philosophy of Science: Proceedings of the 1960 International Congress*, 319–329.
* –––, 1967, “On the principle of total evidence”, *British Journal for the Philosophy of Science*, 17: 319–321.
* –––, 1974, “A little learning can be dangerous”, *British Journal for the Philosophy of Science*, 25: 340–342.
* –––, 1983 [1971], “Twenty-Seven principles of rationality”, in *Good Thinking: The Foundations of Probability and its Applications Good Thinking: The Foundations of Probability and its Applications*, 15–19. University of Minnesota Press. Minnesota.
* Grize, Yves L., and Terrence L. Fine, 1987, “Continuous Lower Probability-Based Models for Stationary Processes with Bounded and Divergent Time Averages”, *The Annals of Probability*, 15: 783–803.
* Haenni, Rolf, 2009, “Non-additive degrees of belief”, in Huber and Schmidt-Petri 2009: 121–160.
* Haenni, Rolf, Jan-Willem Romeijn, Gregory Wheeler, and Jon Williamson, 2011, *Probabilistic Logic and Probabilistic Networks*, Synthese Library. Dordrecht.
* Hájek, Alan, 2003, “What conditional probabilities could not be”, *Synthese*, 137: 273–323.
* –––, 2008, “Arguments for—or against—probabilism?” *British Journal for the Philosophy of Science*, 59: 793–819.
* –––, 2011, “Interpretations of Probability”, *The Stanford Encyclopedia of Philosophy* (Winter 2012 Edition), Edward N. Zalta (ed.), URL = <[Interpretations of Probability (Stanford Encyclopedia of Philosophy/Winter 2012 Edition)](https://plato.stanford.edu/archives/win2012/entries/probability-interpret/)>.
* Hájek, Alan, and Michael Smithson, 2012, “Rationality and Indeterminate Probabilities”, *Synthese*, 187: 33–48.
* Halpern, Joseph Y., 2003, *Reasoning about uncertainty*, MIT press. Cambridge.
* Hammond, Peter, 1988, “Orderly Decision Theory”, *Economics and Philosophy*, 4: 292–297.
* Harsanyi, John, 1955, “Cardinal welfare, individualistic ethics and interpersonal comparisons of utility”, *Journal of Political Economy*, 63: 309–321.
* Hart. Casey and Michael Titelbaum, 2015 “Intuitive dilation?”, *Thought*, 4 252–262.
* Hartmann, Stephan, and Patrick Suppes, 2010, “Entanglement, Upper Probabilities and Decoherence in Quantum Mechanics”, in *EPSA Philosophical Issues in the Sciences: Launch of the European Philosophy of Science Association*, Mauricio Suárez, Mauro Dorato, and Miklós Rédei (eds), 93–103, Springer.
* Hawthorne, James, 2009, “The Lockean Thesis and the Logic of Belief”, in Huber and Schmidt-Petri 2009: 49–74.
* Herron, Timothy, Teddy Seidenfeld, and Larry Wasserman, 1994, “The Extent of Dilation of Sets of Probabilities and the Asymptotics of Robust Bayesian Inference”, in *PSA: Proceedings of the Biennial Meeting of the Philosophy of Science Association*, 250–259.
* Hill, Brian, 2013, “Confidence and decision”, *Games and Economic Behavior*, 82 675–692.
* Hosni, Hykel, 2014, “Towards a Bayesian theory of second order uncertainty: Lessons from non-standard logics”, in *David Makinson on classical methods for non-classical problems*, Sven Ove Hansson (ed.), 195–221, Springer. Dordrecht.
* Howson, Colin, 2012, “Modelling Uncertain Inference”, *Synthese*, 186: 475–492.
* Howson, Colin, and Peter Urbach, 2006, *Scientific Reasoning: the Bayesian Approach*, 3rd edition, Open Court. Chicago.
* Huber, Franz, 2009, “Belief and Degrees of Belief”, in Huber and Schmidt-Petri 2009: 1–33.
* –––, 2014, “Formal Representations of Belief”, *Stanford Encyclopedia of Philosophy* (Spring 2014 Edition), E. N. Zalta (ed.), URL = <https://plato.stanford.edu/archives/spr2014/entries/formal-belief/>.
* Huber, Franz and Cristoph Schmidt-Petri (eds), 2009, *Degrees of Belief*, Springer. Dordrecht.
* Huntley, Nathan, Robert Hable, and Matthias Troffaes, 2014, “Decision making”, in Augustin et al. 2014: 190–206.
* James, William, 1897, “The Will to Believe”, in *The Will to Believe and other essays in popular philosophy*, 1–31. Longmans, Green and Co. New York.
* Jaynes, Edwin T., 2003, *Probability Theory: The Logic of Science*, Cambridge University Press. Cambridge.
* Jeffrey, Richard, 1983, *The Logic of Decision*, 2nd edition. University of Chicago Press. Chicago.
* –––, 1984, “Bayesianism with a Human Face”, in *Testing Scientific Theories*, John Earman (ed.), 133–156, University of Minnesota Press. Minnesota.
* –––, 1987, “Indefinite Probability Judgment: A Reply to Levi”, *Philosophy of Science*, 54: 586–591.
* Joyce, James M., 1999, *The Foundations of Causal Decision Theory*, *Cambridge studies in probability, induction and decision theory*, Cambridge University Press. Cambridge.
* –––, 2005, “How Probabilities Reflect Evidence”, *Philosophical Perspectives*, 19: 153–178.
* –––, 2009, “Accuracy and Coherence: Prospects for an Alethic Epistemology of Partial Belief”, in Huber and Schmidt-Petri 2009: 263–297.
* –––, 2011, “A Defense of Imprecise Credence in Inference and Decision”, *Philosophical Perspectives*, 24: 281–323.
* Kadane, Joseph B., Mark J. Schervish, and Teddy Seidenfeld, 1999, *Rethinking the Foundations of Statistics*, Cambridge University Press. Cambridge.
* Kaplan, Mark, 1983, “Decision theory as philosophy”, *Philosophy of Science*, 50: 549–577.
* –––, 1996, *Decision Theory as Philosophy*, Cambridge University Press. Cambridge.
* Keynes, J. M., 1921, *A Treatise on Probability*, Macmillan. London.
* Konek, Jason, forthcoming “Epistemic conservativity and imprecise credence”, *Philosophy and Phenomenological Research*
* Koopman, B. O., 1940, “The Bases of Probability”, *Bulletin of the American Mathematical Society*, 46: 763–774.
* Kumar, Anurag, and Terrence L. Fine, 1985, “Stationary Lower Probabilities and Unstable Averages”, *Zeitschrift für Wahrscheinlichkeitstheorie und verwandte Gebiete*, 69: 1–17.
* Kyburg, Henry E., 1983, “Rational belief”, *The Brain and Behavioural Sciences*, 6: 231–273.
* –––, 1987, “Bayesian and non-Bayesian evidential updating”, *Artificial Intelligence*, 31: 271–293.
* –––, 2003, “Are there degrees of belief?” *Journal of Applied Logic*: 139–149.
* Kyburg, Henry E., and Michael Pittarelli, 1992, *Set-based Bayesianism*.
* Kyburg, Henry E., and Choh Man Teng, 2001, *Uncertain Inference*, Cambridge University Press. Cambridge.
* Leitgeb, Hannes, 2014, “The stability theory of belief”, *The Philosophical Review*, 123: 131–171.
* Levi, Isaac, 1974, “On Indeterminate probabilities”, *Journal of Philosophy*, 71: 391–418.
* –––, 1980, *The Enterprise of Knowledge*, The MIT Press. Cambridge.
* –––, 1982, “Ignorance, Probability and Rational Choice”, *Synthese*, 53: 387–417.
* –––, 1985, “Imprecision and Indeterminacy in Probability Judgment”, *Philosophy of Science*, 52: 390–409.
* –––, 1986, *Hard Choices: decision making under unresolved conflict*, Cambridge University Press. Cambridge.
* –––, 1999, “Value commitments, value conflict and the separability of belief and value”, *Philosophy of Science*, 66: 509–533.
* Levinstein, Ben, forthcoming, “Imprecise epistemic values and imprecise credences”, *Australasian Journal of Philosophy*.
* Lewis, David, 1986, “A Subjectivist’s Guide to Objective Chance (and postscript)”, in *Philosophical Papers II*, 83–132. Oxford University Press. Oxford.
* –––, 1994, “Humean Supervenience Debugged”, *Mind*, 103: 473–490.
* List, Christian, and Philip Pettit, 2011, *Group Agency*, Oxford University Press. Oxford.
* Loewer, B., 2001, “Determinism and chance”, *Studies in the History and Philosophy of Modern Physics*, 32: 609–620.
* Lyon, Aidan, 2017, “Vague Credences”, *Synthese*, 194:10 3931–3954.
* Machina, Mark J., 1989, “Dynamic Consistency and Non-Expected Utility Models of Choice Under Uncertainty”, *Journal of Economic Literature*, 27: 1622–1668.
* Mayo-Wilson, Conor and Gregory Wheeler, 2016, “Scoring imprecise credences: a mildly immodest proposal”, *Philosophy and Phenomenological Research*, 93:1 55–78.
* Meacham, Christopher, and Jonathan Weisberg, 2011, “Representation Theorems and the Foundations of Decision Theory”, *Australasian Journal of Philosophy*, 89: 641–663.
* Miranda, Enrique, 2008, “A survey of the theory of coherent lower previsions”, *International Journal of Approcimate Reasoning*, 48: 628–658.
* Miranda, Enrique, and Gert de Cooman, 2014, “Lower previsions”, in Augustin et al. 2014, pp. 28–55.
* Moss, Sarah, 2015, “Credal Dilemmas”, *Noûs*, 49:4 665–683.
* Norton, John, 2007, “Probability disassembled”, *British Journal for the Philosophy of Science*, 58: 141–171.
* –––, 2008a, “Ignorance and Indifference”, *Philosophy of Science*, 75: 45–68.
* –––, 2008b, “The dome: An Unexpectedly Simple Failure of Determinism”, *Philosophy of Science*, 75: 786–798.
* Oberguggenberger, Michael, 2014, “Engineering”, in Augustin et al. 2014: 291–304.
* Oberkampf, William and Christopher Roy, 2010 *Verification and Validation in Scientific Computing*, Cambridge University Press. Cambridge.
* Pedersen, Arthur Paul, 2014, “Comparative Expectations”, *Studia Logica*. 102: 811–848.
* Pedersen, Arthur Paul, and Gregory Wheeler, 2014, “Demystifying Dilation”, *Erkenntnis*.79: 1305–1342.
* Pettigrew, Richard, 2011, “Epistemic Utility Arguments for Probabilism”, *The Stanford Encyclopedia of Philosophy* (Winter 2011 Edition), Edward N. Zalta (ed.), URL = <[Epistemic Utility Arguments for Probabilism (Stanford Encyclopedia of Philosophy/Winter 2011 Edition)](https://plato.stanford.edu/archives/win2011/entries/epistemic-utility/)>.
* Pfeifer, Niki, and Gernot D. Kleiter, 2007, “Human reasoning with imprecise probabilities: Modus ponens and denying the antecedent”, *Proceedings of the 5th International Symposium on Imprecise Probability: Theory and Application*: 347–356.
* Quaeghebeur, Erik, 2014, “Desirability”, in Augustin et al. 2014: 1–27.
* Ramsey, F. P., 1926, “Truth and Probability”, in *The Foundations of Mathematics and other Logical Essays*, 156–198. Routledge. London.
* Rinard, Susanna, 2013, “Against Radical Credal Imprecision”, *Thought*, 2: 157–165.
* –––, 2015, “A decision theory for imprecise probabilities”, *Philosophers’ Imprint*, 15 1–16.
* Ruggeri, Fabrizio, David Ríos and Jacinto Martín, 2005, “Robust Bayesian analysis”, *Handbook of Statistics*, 25 623–667, Elsevier. Amsterdam
* Sahlin, Nils-Eric, and Paul Weirich, 2014, “Unsharp Sharpness”, *Theoria*, 80: 100–103.
* Savage, Leonard J., 1972 [1954], *The Foundations of Statistics*, 2nd edition, Dover. New York.
* –––, 1971, “Elicitation of Personal Probabilities and Expectation”, *Journal of the American Statistical Association*, 66: 783–801.
* Schaffer, Jonathan, 2007, “Deterministic Chance?” *British Journal for the Philosophy of Science*, 58: 114–140.
* Schervish, Mark J., Teddy Seidenfeld, and Joseph B. Kadane, 2008, “The fundamental theorems of prevision and asset pricing”, *International Journal of Approximate Reasoning*, 49: 148–158.
* Schoenfield, Miriam, 2012, “Chilling out on epistemic rationality”, *Philosophical Studies*, 158: 197–219.
* –––, 2017, “The accuracy and rationality of imprecise credence”, *Noûs*, 51:4 667–685.
* Seidenfeld, Teddy, 1988, “Decision theory without ‘independence’ or without ‘ordering’. What’s the difference?” *Economics and Philosophy*: 267–290.
* –––, 1994, “When normal and extensive form decisions differ”, *Logic, Methodology and Philosophy of Science*, IX: 451–463.
* –––, 2004, “A contrast between two decision rules for use with (convex) sets of probabilities: Gamma-maximin versus E-admissibility”, *Synthese*, 140: 69–88.
* Seidenfeld, Teddy, Joseph B. Kadane, and Mark J. Schervish, 1989, “On the shared preferences of two Bayesian decision makers”, *The Journal of Philosophy*, 86: 225–244.
* Seidenfeld, Teddy, Mark J. Schervish, and Joseph B. Kadane, 1995, “A Representation of Partially Ordered Preferences”, *Annals of Statistics*, 23: 2168–2217.
* –––, 2010, “Coherent choice functions under uncertainty”, *Synthese*, 172: 157–176.
* –––, 2012, “Forecasting with imprecise probabilities”, *International Journal of Approximate Reasoning*, 53: 1248–1261.
* Seidenfeld, Teddy, and Larry Wasserman, 1993, “Dilation for sets of probabilities”, *Annals of Statistics*, 21: 1139–1154.
* Skyrms, Brian, 2011, “Resiliency, Propensities and Causal Necessity”, in *Philosophy of Probability: Contemporary Readings*, Antony Eagle (ed.), 529–536, Routledge. London.
* Smith, Cedric A.B, 1961, “Consistency in Statistical Inference and Decision”, *Journal of the Royal Statistical Society. Series B (Methodological)*, 23: 1–37.
* Smithson, Michael, and Paul D. Campbell, 2009, “Buying and Selling Prices under Risk, Ambiguity and Conflict”, *Proceedings of the 6th International Symposium on Imprecise Probability: Theory and Application*.
* Smithson, Michael, and Helen Pushkarskaya, 2015, “Ignorance and the Brain: Are there Distinct Kinds of Unknowns?” in *Routledge International Handbook of Ignorance Studies*, Matthias Gross and Linsey McGoey (eds), Routledge.
* Sorensen, Roy, 2012, “Vagueness”, *The Stanford Encyclopedia of Philosophy* (Winter 2013 Edition), Edward N. Zalta (ed.), URL = <[Vagueness (Stanford Encyclopedia of Philosophy/Winter 2013 Edition)](https://plato.stanford.edu/archives/win2013/entries/vagueness/)>.
* Stainforth, David A., Miles R. Allen, E. R. Tredger, and Leonard A. Smith, 2007, “Confidence uncertainty and decision-support relevance in climate models”, *Philosophical Transactions of the Royal Society*, 365: 2145–2161.
* Steele, Katie, 2007, “Distinguishing indeterminate belief from ‘risk averse’ preference”, *Synthese*, 158: 189–205.
* Stewart, Rush T. and Ignacio Ojea Quintana, 2018 “Probabilistic opinion pooling with imprecise probabilities”, *Journal of Philosophical Logic*, 47:1 17–45.
* Sturgeon, Scott, 2008, “Reason and the grain of belief”, *Noûs*, 42: 139–165.
* Sud, Rohan, 2014, “A forward looking decision rule for imprecise credences”, *Philosophical Studies*, 167 119–139.
* Suppes, Patrick, 1974, “The Measurement of Belief”, *Journal of the Royal Statistical Society B*, 36: 160–191.
* Suppes, Patrick, and Mario Zanotti, 1991, “Existence of Hidden Variables Having Only Upper Probability”, *Foundations of Physics*, 21: 1479–1499.
* Talbott, William, 2008, “Bayesian Epistemology”, *The Stanford Encyclopedia of Philosophy* (Fall 2013 Edition), Edward N. Zalta (ed.), URL = <[Bayesian Epistemology (Stanford Encyclopedia of Philosophy/Fall 2013 Edition)](https://plato.stanford.edu/archives/fall2013/entries/epistemology-bayesian/)>.
* Topey, Brett, 2012, “Coin flips, credences and the Reflection Principle”, *Analysis*, 72: 478–488.
* Trautmann, Stefan and Guijs van der Kuilen, 2016 “Ambiguity Attitudes”, *Blackwell Handbook of Judgement and Decision-Making*, 89–116.
* Troffaes, Matthias, 2007, “Decision Making under Uncertainty using Imprecise Probabilities”, *International Journal of Approximate Reasoning*, 45: 17–29.
* Troffaes, Matthias, and Gert de Cooman, 2014, *Lower Previsions*, Wiley. New York.
* Vallinder, Aron, 2018 “Imprecise Bayesianism and global belief inertia”, *British Journal for the Philosophy of Science*, 69:4 1205–1230.
* Vicig, Paolo, Marco Zaffalon, and Fabio G. Cozman, 2007, “Notes on ‘Notes on conditional previsions’”, *International Journal of Approximate Reasoning*, 44: 358–365.
* Vicig, Paolo, and Teddy Seidenfeld, 2012, “Bruno de Finetti and imprecision: Imprecise Probability Does not Exist!” *International Journal of Approximate Reasoning*, 53: 1115–1123.
* Voorhoeve, Alex, Ken Binmore, Arnaldur Stefansson and Lisa Stewart,2016 “Ambiguity attitudes, framing and consistency”, *Theory and Decision*, 81:3 313–337.
* Walley, Peter, 1991, *Statistical Reasoning with Imprecise Probabilities*, *Monographs on Statistics and Applied Probability*, Vol. 42. Chapman and Hall. London.
* Walley, Peter, and Terrence L. Fine, 1982, “Towards a frequentist theory of upper and lower probability”, *The Annals of Statistics*, 10: 741–761.
* Wallsten, Thomas, and David V. Budescu, 1995, “A review of human linguistic probability processing: General principles and empirical evidence”, *The Knowledge Engineering Review*, 10: 43–62.
* Weatherson, Brian, 2002, “Keynes, uncertainty and interest rates”, *Cambridge Journal of Economics*: 47–62.
* Weichselberger, Kurt, 2000, “The theory of interval-probability as a unifying concept for uncertainty”, *International Journal of Approximate Reasoning*, 24: 149–170.
* Wheeler, Gregory, 2014, “Character matching and the Locke pocket of belief”, in *Epistemology, Context and Formalism*, Franck Lihoreau and Manuel Rebuschi (eds), 185–194, Synthese Library. Dordrecht.
* Wheeler, Gregory, and Jon Williamson, 2011, “Evidential Probability and Objective Bayesian Epistemology”, in *Philosophy of Statistics*, Prasanta S. Bandyopadhyay and Malcom Forster (eds), 307–332, North-Holland. Amsterdam.
* White, Roger, 2010, “Evidential Symmetry and Mushy Credence”, in *Oxford Studies in Epistemology*, T. Szabo Gendler and J. Hawthorne (eds), 161–186, Oxford University Press.
* Williams, J. Robert G., 2014, “Decision-making under indeterminacy”, *Philosophers’ Imprint*, 14: 1–34.
* Williams, P. M., 1976, “Indeterminate Probabilities”, in *Formal Methods in the Methodology of Empirical Sciences*, Marian Przelęcki, Klemens Szaniawski, and Ryszard Wójcicki (eds), 229–246, D. Reidel Publishing Company.
* –––, 2007, “Notes on conditional previsions”, *International Journal of Approximate Reasoning*, 44: 366–383.
* Williamson, Jon, 2010, *In Defense of Objective Bayesianism*, Oxford University Press. Oxford.
* –––, 2014, “How uncertain do we need to be?” *Erkenntnis*. 79: 1249–1271.
* Wilson, Nic, 2001, “Modified upper and lower probabilities based on imprecise likelihoods”, in *Proceedings of the 2nd International Symposium on Imprecise Probabilities and their Applications*.
* Zynda, Lyle, 2000, “Representation Theorems and Realism about Degrees of Belief”, *Philosophy of Science*, 67: 45–69.

## Academic Tools

> | ![sep man icon](../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=imprecise-probabilities). |
> | --- | --- |
> | ![sep man icon](../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/imprecise-probabilities/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=imprecise-probabilities&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](http://philpapers.org/sep/imprecise-probabilities/) at [PhilPapers](http://philpapers.org/), with links to its database. |

## Other Internet Resources

* Bradley, Seamus, 2013, “[Weak rationality and imprecise choice](http://www.lse.ac.uk/CPNSS/research/currentResearchProjects/ChoiceGroup/PDF_files/bradleyS-ImpreciseChoice.pdf),” LSE Choice Group Working Paper.
* Cozman, Fabio, [An Informal Introduction to the Theory of Sets of Probabilities](http://www.cs.cmu.edu/~qbayes/Tutorial/)
* [SIPTA: the Society for Imprecise Probability, Theory and Applications](http://www.sipta.org/)
* [PhilPapers category Imprecise Credences](http://philpapers.org/browse/imprecise-credences)

## Related Entries

[belief, formal representations of](https://plato.stanford.edu/entries/formal-belief/) | [epistemic utility arguments for epistemic norms](https://plato.stanford.edu/entries/epistemic-utility/) | [epistemology: Bayesian](https://plato.stanford.edu/entries/epistemology-bayesian/) | [probability, interpretations of](https://plato.stanford.edu/entries/probability-interpret/) | [rational choice, normative: expected utility](https://plato.stanford.edu/entries/rationality-normative-utility/) | [statistics, philosophy of](https://plato.stanford.edu/entries/statistics/) | [vagueness](https://plato.stanford.edu/entries/vagueness/)

### Acknowledgments

Many thanks to Teddy Seidenfeld, Greg Wheeler, Paul Pedersen, Aidan Lyon, Catrin Campbell-Moore, Stephan Hartmann, the ANU Philosophy of Probability Reading Group, and an anonymous referee for helpful comments on drafts of this article.

[Copyright © 2019](https://plato.stanford.edu/info.html#c) by  
[Seamus Bradley](https://www.seamusbradley.net/)
<!--md-padding-ignore-end-->
