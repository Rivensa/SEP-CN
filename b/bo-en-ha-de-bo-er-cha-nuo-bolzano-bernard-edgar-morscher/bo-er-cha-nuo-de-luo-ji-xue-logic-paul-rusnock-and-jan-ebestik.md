# 波尔查诺的逻辑学 logic (Paul Rusnock and Jan Šebestik)


*首次发表于 2007 年 9 月 23 日星期日；实质性修订于 2022 年 7 月 8 日星期五*

十九世纪伟大的哲学家之一，伯恩哈德·波尔查诺（1781-1848）在许多领域做出了杰出的贡献（有关他的思想和生平的更全面的调查，请参见埃德加·莫尔舍尔在本百科全书中关于波尔查诺的文章）。作为一名逻辑学家，他专注于基础，发展了一个理论框架，至今仍然非常值得研究，以至于一位备受尊敬的当代逻辑学家可以（只是半开玩笑地）将波尔查诺的《科学理论》（1837）写成一篇非常正面的评论，好像它刚刚出版（van Benthem，2013）。这并不是说波尔查诺逻辑工作的所有方面都可以被误认为是当代作品：如果他有时似乎在二十一世纪感到自在，那么在其他时候同样清楚，我们所面对的是一个生于十八世纪的思想家。

波尔查诺在现代意义上的逻辑表达是嵌入在广阔的《科学理论》（以下简称 TS；关于波尔查诺逻辑的较短介绍可在 Bolzano 2004a 中找到）。这项工作最著名的创新属于他的变异逻辑：普遍有效性和分析性的定义，以及在命题之间创建一个完整的外延关系系统，其中最重要的是相容性、推导性（推论）和等价性。波尔查诺发现了推导性和条件概率之间的联系，根据这一联系，推导性和不相容性出现为条件概率的两个极限情况。他还因采用反心理主义的逻辑方法和对语义学的贡献而受到认可。波尔查诺关于推理科学命题之间的基础关系（Abfolge）的理论是关于公理系统的第一项现代研究。此外，对逻辑概念的深入讨论和许多其他见解有助于使 TS 成为逻辑和认识论中的经典著作，与亚里士多德、莱布尼兹和弗雷格的著作不相上下。其中包含的广泛历史注释是逻辑史的独特资料来源。尽管用自然语言编写，波尔查诺的逻辑代表了现代逻辑发展的重大突破。

---

## 1. 逻辑和方法论的早期工作

在 1810 年，波尔查诺发表了一本名为《对数学的更好基础呈现的贡献》的小册子（Bolzano 1810; Bolzano 2004b），在其中他阐述了他对当时数学不令人满意的状态以及需要改革的观点。他提出了一个新的数学定义，即“研究事物存在时必须遵循的一般规律（形式）的科学”（Bolzano 1810, I, §8; Bolzano 2004b: 94），将数学分为普遍数学（算术、代数、分析以及他未来的集合论的要素）和更专业的数学学科（如时间的数学理论、几何学、有理力学），并对逻辑提出了一些考虑。与莱布尼茨一样，逻辑再次被视为与数学密切相关：它实际上是数学方法（Bolzano 1810, II, §1; Bolzano 2004b: 103）。

《贡献》中的逻辑理论相当原始，但这部作品仍然包含了一些重要的见解。波尔查诺在亚里士多德的基础上区分了两种证明：一种仅旨在使我们相信某事情是真实的，另一种还展示了为什么它是如此。他将前者称为“证实”（Bolzano 2004b: 254：“确认”）[Gewissmachungen]，将后者称为“基础”[Begründungen]。基础的概念反映了“真理之间的客观联系”，这种联系通常不会与主观的认知顺序一致。它后来成为波尔查诺在 TS 中处理公理化理论的基本概念。

然后，他将这种区别扩展到了公理化理论的其他要素上。主观上，定义是使我们了解某些词语含义的考虑，而客观上，定义指示了一个复杂概念的部分和结构。主观上，有些词语不需要定义，因为它们的含义已经清楚，而客观上，有些概念无法定义，因为它们是简单的，即没有部分。类似地，主观上的公理或原则是对我们来说显然是真实的命题，而客观上的公理只是一个无法证明的真理，其他真理可以从中推导出来。

从客观角度来看，数学理论本身成为了一个数学对象。它具有内在的结构，其中复杂的概念最终由简单的概念组成，并且命题按照它们的客观依赖关系进行排序，从公理开始。基础研究的目标，正如他所看到的那样，是发现和展示这种客观秩序（波尔查诺 1810，II，§ 2）。

《贡献》还包含有价值的认识论反思。波尔查诺指出，由于客观意义上的公理不一定对我们来说是显而易见的，因此，最初我们可能会发现它们比从它们中可以客观证明的定理更不可靠。我们确信它们的真实性不是通过孤立地思考它们来实现的，而是通过认识到它们在演绎系统中的作用：也就是说，通过看到它们的客观后果包括我们认为是真实的定理，但不包括我们认为是假的命题（波尔查诺 1810，II，§21，注释；波尔查诺 2004b：119）。同样，尽管简单概念在客观意义上不能被定义，但它们仍然可能需要在主观意义上进行定义，也就是说，我们可能需要对它们有一个清晰的理解。在这种情况下，我们的理解

> …是通过提及几个句子来实现的，在这些句子中，所讨论的概念通过它自己的词出现在各种组合中。通过比较这些句子，读者能够抽象出该词所指代的具体概念。[…]这种方法被广泛认为是我们每个人在母语中学习单词的第一个意义的方法（波尔查诺 1810，II，§8；波尔查诺 2004b：107；我们的翻译）。

波尔查诺称这种迂回表达为“释义”或“圈定”[Umschreibungen]。他的方法指向了对定义悖论的解决，根据这个悖论，所有概念最终都是用简单概念来定义的，但这些简单概念仍然没有被定义，因此没有意义。

波尔查诺还提出了两个证明正确性的重要标准：根据第一个标准，“如果一个命题的主语（或假设）尽可能广泛，以便谓语（或论点）可以应用于它，那么在这个命题的任何正确证明中，主语的所有特征都必须被使用，即它们必须在推导谓语时被应用。”第二个标准是波尔查诺对亚里士多德禁止从一个类到另一个类的版本：不能从一个特例推导出一个一般命题（Bolzano 1810, II, §28, 29; Bolzano 2004b: 122–126）。例如，在中值定理的证明中，一个必要条件是函数是实值的。因此，一个没有使用任何将实数与有理数分开的属性的证明可以根据第一个标准被诊断为不正确，而一个诉诸于几何学或运动学的证明将违反第二个标准。这些观点立即在波尔查诺的数学工作中得到了应用（1816 年，1817 年）。

## 2. 逻辑作为科学理论

伯恩哈德·波尔查诺对《贡献》中勾勒的逻辑并不满意。早在 1812 年，他就记录了自己要发展一种新的逻辑，这将导致“先验科学的彻底转变”。《科学理论》是在 1820 年至 1830 年间撰写的，并于 1837 年出版，标志着它的实现，嵌入在更广泛的一般认识论和科学方法论的背景中（波尔查诺也将其视为更广义上的逻辑）。

波尔查诺通过其最终目标来定义科学理论，即将人类知识划分为学科，并编写科学论文。根据这个定义，科学理论是

> 我们在将真理的整个领域划分为各个学科并在各自的论文中展示它们时，必须遵循的所有规则的集合，以便我们能够做出一份称职的工作。（TS，I，§1，7）

这个定义假设了一整个学科序列，涉及科学建设的各个学科，每个学科都建立在前一个学科的基础上。这个序列中的最终学科涉及科学的界定和科学写作风格的原则，这些原则应该导致编写一部科学论文集合，形成一部百科全书。波尔查诺希望，在启蒙运动的理想中，即迪德罗和达朗贝尔的《大百科全书》之后，努力传播科学组织的有用知识将再次在完成一部百科全书中找到最好的表达方式。通过这种方式，TS 将为普遍福祉做出贡献。

为了将真理分为不同的学科并在特定的论文中呈现它们，我们首先必须发现它们。这就是发现艺术或启发法的目标，其中包含了寻找新真理的规则。启发法假设能够识别真理的可能性，这是知识论的对象。现在，科学层面探索的决定性步骤导致 TS 最重要的部分，即元素理论，它分析了主观认识活动的客观条件，即思想、命题和演绎论，从本质上来说就是形式逻辑。基础理论试图表明这些元素本身就是命题和思想，本身就有无限多的真理，我们至少可以知道其中一些。按照 TS 的所有学科的适当顺序，我们得到以下结构：

* 基础理论（卷一，§§17-45），
* 元素理论，即形式逻辑（第一卷和第二卷，§§46-268）
* 知识论（第三卷，§§269-321）
* 启发法（第三卷，§§322-391）
* 科学的理论，即真理划分为特定科学和科学论文构成原理的理论（第四卷，§§392-718）。

## 3. 本身的命题

波尔查诺在 TS 中的第一个重要创新旨在转变逻辑领域（更具体地说，是元素理论）。根据他的观点，逻辑不是关于我们思想中的观念和判断的理论，也不是阿尔诺和尼科尔的波尔图瓦尔逻辑或思维规律的阐述的艺术。相反，逻辑关注的是命题和观念本身之间的客观关系，即独立于它们被思考或表达的关系。

尽管波尔查诺认为命题由他所称之为思想的部分组成，但他并没有对命题的概念提供一个明确定义。这是因为他在他人的著作中找不到令人满意的定义，也无法自己想出什么满意的定义。相反，他试图通过他早先所称之为“限定”的方法来传达他对“命题”的理解（参见 TS，§668，第 9 号），向读者呈现一些包含这个词的句子，这些句子在正确理解时被认为是真实的。

> 只要我指出，我所称之为命题的东西并不是语法学家所称之为命题的东西，即语言表达式本身或客观命题，而只是这个表达式的意义，这个意义必须确切地是真或假中的一个；并且，我将实际性归因于对命题的理解，归因于思维命题以及思维者心中所作的判断（即存在，即在思维这个命题的人的心中和作出判断的人的心中）；但是命题本身（或客观命题）我归类为那些根本没有任何存在的事物，并且永远无法获得存在。我们对命题的思考，我们对一件事情是这样或那样的判断，是一种实际的东西，它在某个时间开始，在某个时间结束；我们通过书面符号在某个地方记录这些命题的方式同样是真实存在的事物；然而，命题本身并不存在于任何时间或地点（波尔查诺 2004a：40-41）。

正如波尔查诺在其他地方解释的那样，“本身”这个表达是用来表示一个术语以其完全的普遍性使用，并且因此任何习惯上的心理添加（如思考或用语言表达）都应该被抑制（TS，§57，第 2 号）。鉴于“本身”这个表达与康德的不合作的关联，波尔查诺的“an sich”这个表达也可以译为“as such”（如 Jan Berg 所建议的）或“per se”。

波尔查诺坚持认为，存在着（es gibt）本身的命题，尽管它们并非实际的（wirklich），也就是说，它们不起作用，也不参与因果关系。因此，它们具有数学对象常常具有的地位。虽然他认为承认本身的命题对于形而上学至关重要，但他也试图说服那些不同意他形而上学观点的人接受基于实用和方法论考虑的命题（TS，§20，第 1 号）。

在本文中，我们将遵循波尔查诺的二次文献的通常做法，使用方括号来形成本身的命题和类似实体的指称。因此，例如，‘[苏格拉底有智慧]’指称由句子‘苏格拉底有智慧’所表达的本身的命题，而‘[苏格拉底]’指称由‘苏格拉底’所指定的该命题（或思想）的部分。

### 3.1 命题的形式

从波尔查诺的观点来看，命题可以通过句子更或更少地表达，因此对语言结构的考虑影响了他对命题的部分和结构的处理。例如，考虑句子“罗密欧爱朱丽叶”。我们意识到我们可以用另一个适当的名字如“奥赛罗”来替换“罗密欧”，仍然得到一个完全符合语法的句子。此外，给定一组适当的名字，我们可以指定一类句子，这些句子与“罗密欧爱朱丽叶”最多只有一个不同的名字开头。我们可以类似地处理“爱”和一组适当的及物动词。或者我们可以考虑当两种替换都被允许时可以获得的句子类，依此类推。这些句子类分别对应于句子形式“a 爱朱丽叶”、“罗密欧 V 朱丽叶”和“aV 朱丽叶”。

波尔查诺显然认为，命题本身也是如此。给定一个命题，我们可以想到其他与之完全相同，只是在某些位置上具有不同部分（思想）的命题。虽然在命题本身的领域中实际上不能有变化，即没有时间上的变化，也没有严格意义上的位置，但我们仍然可以用某种方式在命题内部的某些位置进行替换，这是一种关于命题和其部分之间非时间关系的说法。因此，给定一个命题，我们可以认为其中某些部分是可变的，即可以被其他部分替换，并且在每个替换位置的适当替代物的类的情况下，我们可以再次确定一类命题。

如果句子的某些部分对应于它所表达的命题的部分，那么通过用变量的符号替换其中一个或多个这些部分，并指定可替换物的规定，我们将确定不仅是一类句子，而且是一类刚才描述的命题。波尔查诺有时将这样的命题类称为命题形式。然而，严格来说，他将这个术语保留给确定这样的类的句子形式：

> 命题“有些人有白皮肤”在逻辑中最多只是一个例子，而不是一个定理的主题，而一类命题，比如由表达式“有些 A 是 B”确定的类可能是一个定理的主题。如果这些命题类被称为命题的一般形式，那么可以说逻辑关注的是形式而不是个别命题。（实际上，只有书面或口头表达“有些 A 是 B”，而不是类本身，应该被称为形式）（TS，§12，第 2 条[I.48]）。

请注意，一个句子不一定要完全不同（即它的各部分与所表达命题的各部分之间存在一一对应的结构保留对应关系）才能以这种方式使用，只要句子中被变量符号替换的部分确实对应于命题的各部分即可。例如，如果我们确信'哺乳动物'和'熊'与命题[有些哺乳动物是熊]的部分内容相对应，我们就可以使用'有些 A 是 B'的句式来确定一类命题，即使事实证明这个命题可以用不同的句子来表达，例如'存在一个既是哺乳动物又是熊的个体'。

由于命题的不同部分可以被认为是可变的，因此每个命题都属于许多不同的形式。特别是，在博尔扎诺的定义中，命题的形式和内容并没有绝对的区别。

## 4. 想法

如上所述，波尔查诺将想法定义为命题的一部分，更准确地说，是“命题中不是命题本身的任何组成部分”（TS，§128，第 2 条[II.18]；参见§48）。例如，假设句子“菲多，一只狗，不是爬行动物”是相应命题的一个相当明确的表达，我们可以在该命题中区分想法（即子命题部分），如[Fido]，[dog]，[reptile]，但也包括[who]，[is]和[not]。与命题一样，波尔查诺仔细区分了想法本身、思想（或主观）想法以及想法的语言符号。

波尔查诺的术语是“Vorstellung”。这是德语翻译洛克、休谟等人的标准译法。它有时也被译为“presentation”或“representation”，例如在康德和胡塞尔的著作翻译中。波尔查诺决定继续使用这个术语，倾向于掩盖他的观点与他所发现的当时逻辑文献中的巨大差异。对他来说，想法类似于胡塞尔的部分意义或弗雷格的意义，而不是思想。这与波尔查诺讨论的大多数作者在谈到想法时所指的意思完全不同，即使在一个微小的接触点上，那就是，像他一样，那些作者通常认为想法（或概念、概念、认知）可以作为判断的一部分出现，即作为它们的主语和谓语。

波尔查诺承认思想与对象具有三个个体化特征：范围、内容和结构。粗略地说，思想的范围是“所有属于它的对象的集合”（波尔查诺 2004a：46）；更严格地说，它是“思想的一个特定属性，凭借这个属性它仅代表那些对象而不代表其他对象。”（TS，§66，I:298）。例如，具有不同范围的思想，如[质数]和[奇数]，在波尔查诺的观点中必然是不同的，但这只是一个充分条件，可以看到具有相同范围但明显不同的思想[偶质数]和[4 的正平方根]。

尽管这些思想具有相同的范围，我们仍然可以通过注意它们具有不同的部分来区分它们，例如，[质数]出现在第一个思想中，但不出现在第二个思想中。在这种情况下，波尔查诺将说这两个思想的内容是不同的。根据他的定义，复杂思想的内容是其部分的总和。“总和”是波尔查诺本体论中的一个技术术语，指代“组合方式不重要且部分的部分可以被视为整体的部分”的集合（TS，§84）。对于我们的目的来说，只需注意当波尔查诺要求我们思考一个思想的内容时，他希望我们考虑它的部分，而不是它们的排列。

总之，具有不同内容的思想也是不同的。然而，同样的部分可以以不同的方式排列，例如：[无知的学者之子]和[学识渊博的无知之父的子女]。因此，波尔查诺将复杂思想的结构，即其部分的组合方式（它们的 Verbindungsart），作为另一个个体化属性加以承认。事实上，有时结构是唯一的个体化属性，正如波尔查诺在 TS（§96，第 2 条）中通过巧妙的例子[24]和[42]所示，它们具有相同的内容和相同的范围，但仍然不同。

尽管在许多情况下，思想被假定为像语言表达式一样结构化，但波尔查诺也清楚地认识到，有些思想的结构无法用线性脚本来捕捉。例如，在形式为“A，具有属性 b，b'，b''，…”的思想中，部分 b，b'，b''，…之间没有顺序，它们在思想中作为一个无序集合（Menge）出现。

波尔查诺是一个语义原子论者：在他看来，所有的思想最终都是由简单的部分组成的，这些部分本身就是思想（TS，§61）。对于带有对象的简单思想来说，严格来说没有内容，因为没有部分，因此也没有结构。因此，这样的思想仅仅通过它们的外延来个体化（TS，§93，第 3 条）。简单思想与其对象的关系是原始的，因此是不可定义的。将这个立场与当代通过为非逻辑常量（或参数）分配外延（对象或对象集合）来解释形式语言的做法进行比较是有启发性的。

波尔查诺没有告诉我们如何个体化没有对象的简单思想（例如，[and]，[not]）。这对我们来说是一个重大的疏忽。

### 4.1 想法的种类

一些想法，被波尔查诺称为客体性的，具有或代表一个或多个对象，例如，[波尔查诺-魏尔斯特拉斯定理]，[乌鸦]。其他是无对象的，例如，[圆方]，[黄金山]，[非]（TS，§67）。波尔查诺不承认空集合，他说无对象的想法没有外延。

如果一个想法恰好有一个对象，它被称为特殊的；如果有多个对象，则被称为一般的（§68）。一些一般的想法是复杂的，例如，[一等星]。波尔查诺认为，其他一般的想法是简单的：他认为[对象]和[属性]很可能是这样的。同样，在特殊想法的情况下，他认为有些是复杂的，例如，[我们太阳系中最大的行星]，而其他一些是简单的。为了符合康德的术语，他将后一种类型的想法，即简单的特殊想法，称为直观（§72）。不是直观的想法，且在其部分中没有任何直观的想法，被称为（纯）概念，而既有概念又有直观的想法被称为混合（§73）。

那些熟悉罗素逻辑原子主义中逻辑适当名称所起作用的人，将更容易理解波尔查诺对直觉概念的运用。直觉是思想领域中与语言中基本指示元素相对应的东西：最好用一个裸指示词（“这个”）来表达，而且在主观人类直觉的情况下，它们总是以特定的同时期心理状态作为它们的对象。此外，任何关于偶然存在的个别事物的独特思想都必须将直觉列为其部分。因此，直觉可以作为经验内容的标记。

如果命题的任何部分都不是直觉，那么它被称为纯概念的，否则是直觉的。这种区别在命题本身的层面上定义，先于先验和后验判断的区别，并用于定义它：

> 如果从一个判断 M 推导出来的命题以及从前者推导出来的命题，一直到直接判断，都是纯概念命题，那么判断 M 可以称为纯概念判断，或者纯粹的，或者先验的。在其他所有情况下，可以说它是从经验或后验得出的（TS，§306，no.12）。

一些科学，例如数论或实分析，完全由纯概念命题组成，因此被称为纯概念科学。尽管波尔查诺乐观地认为大多数纯概念真理可以先验地知道，但他并没有声称所有纯概念真理都是如此，并且清楚地认识到许多纯概念命题，甚至在数学中，至少部分是基于经验（直觉）证据接受的（TS，§133；Bolzano 2004a: 53）。

### 4.2 概念之间的外延关系：类的逻辑

在波尔查诺形式逻辑的两个主要部分中，概念的外延逻辑（类的逻辑）和命题的外延逻辑，第一部分来自一个悠久的传统，始于博伊斯（并源自亚里士多德的三段论）并以格尔贡结束。波尔查诺并没有从格尔贡或欧拉（当时最有影响力的作者）那里获得他的类的逻辑，而是从一本名为《逻辑概要》（Grundriß der Logik）的小册子中获得的，这本小册子是由一个现在完全被遗忘的逻辑学家 J.G.E. Maaß于 1793 年出版的。

在 TS，§§ 94-108 中，波尔查诺定义了一种关于思想扩展之间的关系系统，并证明了关于这些关系的各种定理。首先，如果存在至少一个对象同时属于思想 A、B、C 等，则称这些思想是兼容的；否则，它们被称为不兼容的。如果不仅 A 所代表的一些对象也被 B 所代表，那么称 A 包含于 B。如果反之也成立，即 A 包含于 B 且 B 包含于 A，则称思想 A 和 B 是等价的（或可互换的）。他还定义了两种特殊情况：首先，当 A 既不包含于 B，也不被 B 包含时，波尔查诺称这种关系为重叠或连接。其次，我们有从属关系，即包含而没有相互性的情况。

区分了三种不兼容性：相互排斥、矛盾和对立。如果思想 A、B、C 等两两不兼容，则称它们互相排斥。如果 B 具有“一个扩展，包括了一切不属于思想 A 的东西”（TS II，§103，477），即 B 等价于非 A，那么 A 和 B 是矛盾的。最后，如果它们不兼容但不矛盾，则称它们是对立的。

由于所有这些关系都是从兼容性及其否定中推导出来的，因此可以将它们表示为一个家族树的形式（参见Šebestík 1992：174）。稍微简化一下，我们可以将波尔查诺关于思想对的关系定义为集合论语言中所示。（在这里，我们与波尔查诺的观点有所不同，我们还允许普遍思想，如“一般的某物”[Etwas überhaupt]，以及无对象思想和空集作为它们的扩展（对于波尔查诺来说，无对象思想没有扩展，也没有空集合））。

| A 与 B 兼容   | =df | `Ext(A)∩Ext(B)≠∅`                  |
| --------------- | ----- | ------------------------------------- |
| A 与 B 不兼容 | =df | `Ext(A)∩Ext(B)=∅`                   |
| A 包含在 B 中 | =df | A 与 B 兼容且 `Ext(A)⊆Ext(B)`        |
| A 等同于 B    | =df | A 包含于 B，且 B 包含于 A           |
| A 是 B 的下级 | =df | A 包含但不等于 B                    |
| A 与 B 相矛盾 | =df | A 与 B 不兼容且 `Ext(A)∪Ext(B)=全类` |
| A 与 B 相反   | =df | A 和 B 不相容但不矛盾。             |

## 5. 主张的分析

如果波尔查诺的语义原子主义论点是正确的，那么对于每个命题都存在一种最好的形式；即，在命题中的每个简单观念都被独立地考虑为变量。从这一点我们可以看出，试图使用形成规则将命题的概念定义为某种结构化整体的人面临的任务：这不仅需要对所有可能的句法结构进行规定，还需要一个完整的语义类别集合（因为不同的变异位置可能带有不同类别的可接受项）。此外，这不仅需要针对我们自己设计的形式语言，或者针对单一的自然语言，而且需要针对任何可能的语言。从这个角度来看，波尔查诺坦率地承认自己找不到一个令人满意的命题概念定义是毫不奇怪的。

波尔查诺不是从简单观念开始并从中构建命题，而是从外部开始，试图在命题内部区分部分，通常遵循奎因所称的“浅层分析原则”，即“只暴露出似乎对于推理或其他查询有用的逻辑结构”（奎因，1960 年：§33；160）。由于命题本身在因果上是惰性的，所以无法通过检查它们来完成这个任务。相反，人们考虑语言表达，从各种语言中选择，并结合自己的思考，试图识别具有逻辑意义的特征，牢记“通常用法不是追求逻辑正确性，而是追求简洁和足够的明确性。”（TS，§170 [II.213]；另见§350、366）。

伯恩哈德·波尔查诺对命题分析提出了许多具体建议，其中大部分现在仅具有历史兴趣。我们在这里简要介绍其中的一些。

首先，他认为每个命题都属于主谓形式的“A 有 b”（TS，§ 127；请注意，这并不妨碍它们也属于其他形式）。他承认自己对这个命题没有确凿的论证，但声称他已经能够找到可接受的主谓释义，适用于他所想到的所有句子形式（波尔查诺 1843 年：48）。

在这种形式的真命题中，“A”所标记的位置被一个具有一个或多个对象的思想所占据，而“b”所标记的位置被一个表示一个或多个属性的思想所占据。由“有”表示的连系动词，被理解为没有时态或数的，表示具有某种属性。时态通过在主题思想中添加时间确定词来处理。例如，“Smith is in pain”可以更明确地表达为“Smith 在当前时刻-有（无时态）-疼痛”（§127，第 5 条）。

由于主语和谓语的概念都可以是普遍的，我们必须理解“A has b”表示每个属于[A]概念的对象都有一个属于[b]概念的属性（§131）。因此，他认为形式为“All A have b”的命题与形式为“Each A has b”和“A has b”的命题是同义的，例如，“所有人都有死亡”，“每个人都有死亡”和“人有死亡”。

波尔查诺认为主谓形式可以容纳关系性主张，将其解释为关于集合的陈述。例如，声称 A、B、C 等项目在具有属性 b、b'、b''等意义上相等的主张可以解释为关于包含两个无序子集合（Mengen）的集合的陈述，即`⟨(A,B,C,...),(b,b',b'',...)⟩`，陈述该集合具有每个第一个子集合中的项目都具有第二个子集合中的每个属性的属性（参见§135，第 15 条）。

对于波尔查诺来说，真实和虚假（或缺乏真实）是命题的属性。根据他的假设，所有命题都属于“A has b”的形式，他能够提供以下关于真实的定义（TS，§28）：

> 一个命题在陈述其对象所属的内容时是真的。

 也就是说，

> [A 有 b]当且仅当 A 有 b 时才有真。

伯恩哈德·波尔查诺对存在性主张的分析也是值得注意的。他说，在这种情况下，我们的意思是这个概念[大于 100 的质数]具有客观性（§137）。这种分析在真实的否定存在性主张（如“圆形的正方形不存在”）的情况下显示出其价值，使他能够解决与非存在性相关的谜题。根据波尔查诺的说法，这个句子与更明确的“[圆形的正方形]具有非客观性”是相同的，在这种情况下，我们有一个客体主题概念（其客体是[圆形的正方形]的概念），并且将其客体归因于它具有的属性（即无客体性）（§138）。

波尔查诺提出了类似的分析，如“一些 A 是 B”和“没有 A 是 B”的形式。这些可以更明确地表达为：“[具有 b 的 A]具有客观性”和“[具有 b 的 A]具有非客观性”（§137,138）。

对客观性的主张不应与实在性的主张混淆（§142）。例如，波尔查诺认为存在（es gibt）命题和概念本身，以及几何点和其他数学对象，但同时否认它们具有实际存在（即它们不行动，不参与因果关系，没有空间或时间的确定等）。即，概念[命题本身]、[几何点]等具有客观性，但命题、点等缺乏实在性属性。

波尔查诺区分谓词否定和命题否定，前者采用“A 有非 b”的形式，后者采用“[A 有 b]有非真”的形式（§189，1（e）；参见§136）。这两种形式并不等价，因为例如，[莫扎特的第 35 号钢琴协奏曲不在降 E 大调]是假的，它的主题观念是无对象的，而[[莫扎特的第 35 号钢琴协奏曲在降 E 大调]有非真]是真的。

材料的析取，即形式为“A 或 B 或 C…”的主张，可以如下解释（§181）：“[在集合中的真命题（[A]，[B]，[C]，…）]具有客观性”（包括析取）或者“[在集合中的真命题（[A]，[B]，[C]，…）]具有客观性，并且[在集合中的真命题的多样性（[A]，[B]，[C]，…）]具有非客观性”（排斥析取）。

我们希望这足以让人对波尔查诺的方法有所了解，并了解其中的一些局限性。更多细节可以在二手文献中找到。

## 6. 伯恩哈德·波尔查诺的变异逻辑

### 6.1 命题和命题形式

伯恩哈德·波尔查诺的命题间外延关系逻辑代表了传统逻辑中没有的重大创新。它基于我们已经遇到的变异方法。波尔查诺如下介绍他逻辑的这一部分:

> 给定一个命题，我们可以仅仅询问它是真还是假。但是，如果我们考虑到从这些命题中生成的所有命题的真值，如果我们将它们的一些组成概念作为变量，并用任何其他概念替换它们，我们就可以发现一些非常显著的命题属性（TS，§ 147）。

在他的讨论中，波尔查诺经常使用像“人 A 是有限的”这样的句子形式。而在其他时候，他会简单地写下这样的话：“让我们...考虑命题‘人 Caius 是有限的’，并将‘Caius’这个概念设想为任意可变的”（TS，§ 147）。

这两种说法对应着两个不同的层次。在第一个语言层面上，我们处理句子形式，即包含变量符号的表达式，在适当的替换之后变成句子（并表达命题）。第二个层面是命题和概念本身的层面，即意义的层面。在这里，波尔查诺不能使用变量、字母或其他不确定的符号，因为在命题和概念本身的领域中，没有不确定的实体与句子形式相对应；只有命题，真或假。这可能是波尔查诺在谈论“被认为是可变的概念 Caius”时使用笨拙方式的原因。

波尔查诺在下文中采用了波尔查诺关于命题中思想替换的宽松说法。在给定命题中声明一个或多个思想变量是指考虑具有相同结构并包含相同思想（除了可能在变量思想所占位置上）的所有命题的类别。通过对给定命题进行这种替换得到的命题称为变体。

波尔查诺通常限制可替代物的类别；例如，在某些情况下，他要求替代物不会“破坏命题的客观性”，也就是说，不会产生无对象的主题思想。例如，在命题[Nero，一个人类，是凡人]中，将[北京]替换为[尼禄]的效果就是如此。在他对命题相对于某些思想的有效程度的讨论中，他还规定了不允许在可能的替代物类别中包含两个等价思想。因此，当波尔查诺谈到“可变思想”时，我们应该记住，变量的规定也涉及可能值的范围的规定。

### 6.2 通用有效性/无效性和分析性

波尔查诺从定义具有可变部分的单个命题的属性开始（TS，§147）。当将变异方法应用于命题时，他指出可能出现三种不同情况：要么通过替换得到的（客体）命题类仅包含真命题，要么仅包含假命题，要么同时包含真命题和假命题。在第一种情况下，初始命题被称为普遍有效的，而在第二种情况下被称为普遍无效的，两种情况都是相对于指定的变量而言的。波尔查诺没有给第三种情况命名；这样的命题可以称为中性命题。以下是一些例子：

[凯乌斯是凡人]

相对于变量观念[Caius]，它是普遍有效的，因为每个适当的替换都会生成一个真命题，或者换句话说，因为它的所有客体变体都是真的。

[Caius 是全知的人]

相对于相同的变量概念[Caius]，它的所有变体都是错误的。

 相同的命题

[Caius 这个人很富有]

相对于变量[富有]，这是中立的，因为它的一些变体是真的（例如，引用的第一个例子），而其他的是假的（第二个例子）。

现在考虑命题[Murgatroyd 最喜欢的数字，它是 1 到 10 之间的整数，是质数]，并将[Murgatroyd 最喜欢的数字]标记为变量。此外，让我们通过规定（1）保持客体性和（2）不包括两个等价的概念来限制可替代的类别。在这种情况下，将有八个可替代项，其中四个将导致真命题。因此，导致真命题的替代项数与总数的比率等于 1:2。波尔查诺称之为命题相对于指定变量的有效程度。他评论道（TS，II: 81）：“这个比率确定了命题在某些情况下具有的概率程度。”普遍有效性和普遍无效性是极端情况，其中比率分别等于 1:1 和 0:1。

波尔查诺将康德的术语“分析”用于那些相对于某些变量部分或其他规范而言要么普遍有效要么普遍无效的命题。这种术语选择是基于他对康德例子的分析。例如，考虑命题（康德：判断）：[直角三角形是一个三角形]。康德认为这样的判断是分析的，因为对主体概念的分析，即分解，将揭示谓词的存在。对于波尔查诺来说，这种包含关系只是一个干扰：他认为，这个命题真正有趣的地方在于，我们可以用任何其他想法替代[三角形]和[直角]，而不改变真值（在对象性的前提下）。也就是说，正如奎因后来所说，这样的命题的某些部分是虚无的：

> 我相信[分析命题]的重要性在于它们的真假不取决于它们所组成的个别观念，而是无论它们的某些观念经历了怎样的变化，只要命题的客观性没有被破坏，它们的真值仍然保持不变（TS，§ 148）。

康德所称的分析命题真正值得注意的特征是它们的真值在整个变换类别下的不变性。正是这个特征，而不是其他任何特征，波尔查诺在他对分析性的定义中单独提出来。

鉴于波尔查诺的定义的广度，很明显分析命题相当常见，尤其是在数学中。以下是波尔查诺关于分析命题的一些例子，无论是真还是假，下划线或字母表示变量部分：

* 如果所有人都是凡人，而凯乌斯是一个人，那么凯乌斯是凡人。（TS，§315）
* 如果 A 大于 B，那么 B 小于 A。（TS，§148）
* 如果 P=Mm，则 M=P/m。（TS，§148）
* 苏格拉底的灵魂已经被消灭。（TS，§369）
* 苏格拉底的灵魂是一个简单的物质。（TS，§447）
* A 是 A。（TS，§148）
* 一个是 B 的 A 是 A。（TS，§148）
* 一个是 B 的 A 是 B。（TS，§148）
* 每个对象要么是 B，要么是非 B。(TS，§148)

在上述列表中的最后四个例子是值得注意的，波尔查诺声称，因为它们中唯一不变的部分是逻辑概念。他谈到这种情况下的逻辑分析性。就像他之后的塔斯基一样，他评论说，他对逻辑分析性的定义并不完全确定，因为“属于逻辑的概念领域并没有被限定得如此明确，以至于争议有时不会出现”(TS，§148，第 3 号；塔斯基，1983，418-419)。

虽然相似之处不应夸大，但在 Adjukiewicz、Carnap、Quine 和 Tarski 的作品中，这个更狭义的概念与后来的概念之间存在明显的亲缘关系(详见 Künne，2006 年的详细讨论)。

正如波尔查诺所清楚地意识到的那样，他所定义的分析性在他的一般意义上既不涉及必然性也不涉及先验性（TS，§197）。例如，对于[杜鲁门，在 20 世纪担任美国总统的男性]，在[杜鲁门]方面是普遍有效的，因此根据波尔查诺的定义是分析的。显然，他对“分析”的使用不仅与康德的使用有根本的不同，而且与后来在弗雷格、卡尔纳普等人的著作中对该术语的使用也有根本的不同。这导致了一些后来读者的误解（例如，巴-希勒尔，1950 年）。

### 6.3 含有变量部分的多个命题之间的关系

在当代逻辑的处理中，形式语言的公式之间的逻辑关系有时是通过语言解释集合之间的关系来定义的。例如，一个公式集合Γ可能被说成蕴涵一个公式α，当且仅当使Γ中所有成员都为真的解释集合是使α为真的解释集合的子集，而Γ本身可能被说成是可满足的，当且仅当使其所有成员都为真的解释集合是非空的。

伯恩哈德·波尔查诺的变量思想命题之间的外延关系系统是基于类似的思考，尽管它是以思想、命题和其中的变量思想的外延为术语。关键概念是一组思想 i′，j′，k′，…，当它们替换命题 A，B，C，…中的变量思想 i，j，k，…时，会产生一组全部为真的命题。（更宽松地说，波尔查诺谈到“一组思想的集合，它们替换 i，j，k，…后，使 A，B，C，…全部为真”（TS II: §155，114，122 和§156，133）。）我们将称这样的思想集合 i′，j′，k′，…相对于变量思想 i，j，k，…验证 A，B，C，…的思想。

在一个关键的段落中，波尔查诺建立了他需要实施计划的对应关系：

> 对于思想来说，关键问题是某个对象是否确实由它们所代表；对于命题来说，相应的问题是它们是否为真。就像我称思想之间是否相容或不相容，取决于它们是否有某些共同的对象一样，我称命题是否相容或不相容，取决于是否有某些思想使它们全部为真。（TS II: §154，101；波尔查诺 1973：198–199）

也就是说，正如 A、B、C 等思想被认为是相容的，当且仅当至少有一个对象符合 A、B、C 等思想，我们也可以说，关于变量思想 i、j、k 等，命题 A、B、C 等是相容的，当且仅当存在一组思想 i'、j'、k'等，它们对于 A、B、C 等每个命题都是验证思想。等价地，关于 i、j、k 等，A、B、C 等是相容的，当且仅当[相对于 i、j、k 等的 A 的验证思想]、[相对于 i、j、k 等的 B 的验证思想]、[相对于 i、j、k 等的 C 的验证思想]在先前定义的意义上是相容的；否则，它们被认为是不相容的。

例如，当统一变量考虑[Napoleon]和[Wellington]的所有出现时，命题[Wellington predeceased Napoleon]和[Napoleon predeceased Wellington]是不相容的，但当在两个命题中都变化[predeceased]时，它们是相容的，因为将[predeceased]替换为[fought]会产生两个真命题。（在这里，我们涉及到第一种情况下的形式‘A predeceased B’和‘B predeceased A’，以及第二种情况下的‘Napoleon R Wellington’和‘Wellington R Napoleon’。）

接下来，命题 M、N、O 等被认为是相对于变量思想 i、j、k 等从命题 A、B、C 等推导出来的，当且仅当 A、B、C 等、M、N、O 等相对于变量思想 i、j、k 等是相容的，并且[相对于 i、j、k 等的 A、B、C 等的验证思想]的范围包含在[相对于 i、j、k 等的 M、N、O 等的验证思想]的范围内，即前者的扩展是后者扩展的子集（TS，§ 155）。

在他逻辑的较短版本中，波尔查诺将这个定义表述如下：

> 如果一个或多个命题 A、B、C 等与另一个或多个命题 M、N 等在组成部分 i、j 等方面是兼容的，那么正如刚才所说的，必然存在一些观念，当它们替代 i、j 等的位置时，使得所有的 A、B、C 等以及所有的 M、N 等都为真。然而，特别值得注意的是，如果不仅仅是一些，而是所有的观念，当它们替代 A、B、C 等中的 i、j 等时，使得所有这些命题都为真，同时也使得所有的 M、N 等都为真，那么我说命题 M、N 等与命题 A、B、C 等在变量部分 i、j 等方面具有推导关系（波尔查诺 2004a: 54）。

—给出以下例子：[所有的 i 都是 k]可以从[所有的 i 都是 j]和[所有的 j 都是 k]推导出来，[∠ijk=∠ikj]可以从[i、j、k 是一个三角形的三个顶点]和[¯¯¯¯ij=¯¯¯¯¯ik]推导出来，在这两种情况下都是针对 i、j、k。

通过这种方式，波尔查诺通过他的思想关系表获得了一套完整的关于命题的外延关系系统，相对于某些被视为可变的部分（换句话说，是关于命题类的命题形式之间的关系）。结果是一个家族树，其基本结构与表示思想之间的关系的树的结构完全相同。在大多数情况下，他使用相同的术语，谈论命题之间的兼容性、推导性（包含性）、从属性（单向推导性）、等价性（相互推导性）、重叠性、对立性和矛盾性。

为了更清楚地了解这些关系，让我们引入一些符号，并再次使用集合论的语言。我们将使用粗体字母来表示项目（命题或可变思想）的集合。因此，例如，‘A(i)’和‘M(i)’将用于表示命题集合 `A={A,B,C,…}`和 `M={M,N,O,…}`，其中思想 `i=i,j,k,…`被视为可变的。让 `V(A(i))`表示 A(i)的验证思想集合。最后，让`¬A` 表示`{¬A,¬B,¬C,…}`。我们有：

对于可变思想 i，A 与 M 兼容：
`V(A(i))∩V(M(i))≠∅`

A 与 M 在 i 方面不兼容：
`V(A(i))∩V(M(i))=∅`

M 是关于 i 从 A 可推导的：
 A 和 M 关于 i 是相容的，并且 `V(A(i))⊆V(M(i))`。

A 关于 i 等价于 M：
 A 是从 M 推导出来的，而 M 也是从 A 推导出来的，都是关于 i 的，即 `V(A(i))≠∅`且 `V(A(i))=V(M(i))`。

M 是关于 i 从 A 单向推导出来的：
 M 是关于 i 从 A 推导出来的，但与 A 不等价。

A 和 M 在 i 方面是矛盾的：
 ¬A 在 i 方面等同于 M，而 A 在 i 方面等同于¬M。

A 和 M 在 i 方面是相反的：
 A 和 M 在 i 方面是不相容的，但并非矛盾的。

波尔查诺陈述并证明了关于他的关系的大量定理，包括以下内容：

* 如果 A、B、C 等在 i 方面是不相容的，则包含 A、B、C 等命题的任何集合在 i 方面也是不相容的（TS，§154，第 10 条）。
* 如果 A 相对于 i，j，...是兼容的，那么它也相对于包含 i，j，...的任何变量集合是兼容的（§154，第 11 条）。
* 如果 M 相对于 i，j，k，...是从 A，B，C，...推导出来的，那么只要 A，B，C，...相对于子集合是兼容的，那么 M 也相对于 A，B，C，...是可推导的（§155，第 19 条）。
* 当且仅当 A 与 M 不兼容时，¬M 是从 A，一类兼容前提中推导出来的（§155，第 14、15 条）。
* 如果 M 可以从 A 以及从 A 的否定¬X 推导出来，那么 M 可以仅从 A 推导出来（§155，编号 17）。
* 如果从前提 A 可以推导出的所有命题都是真的，那么 A 是真的（§155，编号 6）。
* 如果 M 可以从 A 推导出来，且 X 可以从 M 推导出来，R（都是关于 i、j、k 等的），那么 X 可以从 A 推导出来，且关于 i、j、k 等的 R（§155，编号 24）。
* (§224, no. 2) 如果推理：
  A,B,C,D,E,F,G,…M,N,O
  是有效的，那么也是：
  A,B,C,D,…如果 E,F,G 是真的，那么 M,N,O 也是真的…

### 6.4 条件概率

根据波尔查诺的定义，推导性要求兼容性。这引起了一些复杂性，例如，推导性不是自反的，并且从 B 相对于 i,j,…从 A 推导出来的事实可以得出结论，只有当 B 相对于 i,j,…不是普遍有效时，才能从非 B 推导出非 A。但它也带来了一个重要的好处，即它允许他直接将相对概率关系集成到他的系统中。在 TS，§ 161 中，他将命题 M(i)相对于具有变量 i 的前提或假设类 A(i)的条件概率（或相对有效性）定义为所有类命题以及 M(i)都为真的情况与所有命题 A(i)都为真的情况之比。换句话说，它是 A(i)和 M(i)的真变体数与 A(i)的真变体数之比。波尔查诺的条件概率是客观的，本身。

因为对于每个对象的观念，存在无限多个等价的观念，我们无法仅通过计算变体来确定相对概率。然而，如果将替代类限制为只允许在替代类中包含一个与给定观念等价的观念，前提是所得到的类是有限的（波尔查诺在 TS，§161，第 7 条中提出了一个不同的建议），那么这样做是可能的。

例如，考虑前提[巢中的蛋的数量在 1 到 10 之间]和[巢中的蛋的数量是奇数]，以及结论[巢中的蛋的数量是质数]，其中只有观念[巢中的蛋的数量]在每个命题中被认为是可变的。在可接受的替代中，有四个使得两个前提都为真，并且其中三个也使得结论为真。因此，相对于前提和指定的变量，结论的有效程度为 0.75。我们也可以将其视为形式之间的关系，即‘A 在 1 到 10 之间’，‘A 是奇数’和‘A 是质数’。

我们可以立即看出为什么可能推理的前提必须是兼容的：相对于 A(i)，M(i)的概率仅在分数的分母不为零时被定义，这意味着前提 A(i)是兼容的。另一方面，使得 A(i)和 M(i)都为真的观念的数量不能大于使得 M(i)为真的观念的数量；因此，M(i)的条件概率不能大于 1。当使得 A(i)和 M(i)都为真的观念的数量等于使得仅使 A(i)为真的观念的数量时，条件概率等于 1，这意味着所有使得 A(i)为真的观念也使得 M(i)为真，即如果 M(i)可以从 A(i)推导出来。换句话说，如果 M(i)可以从 A(i)推导出来，其相对于 A(i)的概率等于 1，这意味着概率等于确定性。如果没有观念使得 A(i)和 M(i)都为真，即 A(i)和 M(i)不兼容，则概率为零。因此，不兼容性和确定性是概率的两个极端情况，其值分别为 0 和 1。

尽管一些细节仍然不完善，但这仍然是一项非凡的成就。波尔查诺的方法提供了概率的第一个逻辑定义。首次将演绎逻辑和归纳逻辑统一到一个整体理论中，前者出现为后者的极限情况。可能在他的《论述》5.15 中，维特根斯坦通过 R.齐默尔曼（1853 年）的第一版《哲学导论》的中介而接受了波尔查诺对概率的处理。卡尔纳普的常规确认函数也强烈地让人想起波尔查诺的方法。

波尔查诺补充了一些标准定理的证明，并且还定义了主观概率和其他重要的概率概念，如置信度、证人的可信度等。他给出了由独立证词报告的事件的可信度公式，该公式是由证人数量、证词数量以及每个证人陈述的真假命题数量的函数确定的。所有这些概念在波尔查诺 1834 年的章节“关于历史知识的性质，特别是关于奇迹”的中起着重要作用。

波尔查诺的集合逻辑的类逻辑关系和命题之间的关系都是通过在先前定义的关系中添加特定条件来构建的。兼容性因此是波尔查诺外延逻辑的基本关系。它嵌入在他的系统的基础之中，除了不同情况的析取（TS II，§160）之外，所有其他关系，包括可推导性，都是它的特例。

### 6.5 推导性的更详细考虑

当定义语义概念，如联合可满足性或逻辑蕴涵时，当代逻辑学家通常使用形式语言，其规范涉及逻辑和非逻辑元素的分离。然后，通过在所有非逻辑参数（通常包括一个用于量化域的隐含参数）上分配任意语义值时，根据公式的行为来定义蕴涵和其他语义关系。在这个观点上，蕴涵是一种二元关系，它是一组前提和结论或一组结论之间的关系。

因为非逻辑参数从不保持恒定，所以许多推理只有在被解释为暗示的情况下才能被声明为有效，需要以“隐含”的前提进行补充。例如，e<π不能从 e<3 和 3<π推出，因为存在 aRb 和 bRc 的模型，它们不是 aRc 的模型。然而，如果我们将`∀x∀y∀z((Rxy∧Ryz)→Rxz)`添加到前提中，我们就得到了一个有效的论证形式。

相比之下，波尔查诺的推导性是命题本身和可变观念之间的关系。它不依赖于将观念严格分类为逻辑的还是非逻辑的（正如我们所见，波尔查诺对于是否能够划定这样一条界线存在疑虑）。事实上，它根本不是逻辑蕴涵的概念，而是一个更一般的概念，逻辑蕴涵只是其中的一个特例。推导性是一个三元关系，涉及前提、结论和可变观念的集合。

因此，例如，对于可变观念[e]、[3]和[π]，[e<π]可以从前提[e<3]和[3<π]中推导出来。与当代逻辑一致，如果将[<]添加到可变观念中，这个结论就不能从前提中推导出来，但是如果我们添加所谓的暗含前提，它就可以从这些变量的角度推导出来。波尔查诺方法的另一个值得注意的特点是，所谓的未明示前提等同于关于观念[e]、[3]和[π]之间存在推导性关系的主张（George，1983）。

在波尔查诺的观点中，论证的个体化不仅涉及前提和结论的具体化，还涉及推理的具体化。通常，推理体现了可重复的模式或形式。我们通过指定哪些观念被视为可变来确定形式-物质区分（从而确定推理是什么）在每个特定情况下：

> 在每个推理中，都存在与之相关的可变观念，这些观念决定了结论从前提中可以推导出来的性质。... 推理的内容恰恰就是这些可变观念，而形式则是所有推理共同的部分，只是在内容上有所不同（TS，§254 [II.516–7]）。

将我们对论证的解释限制在只有逻辑常量的形式语言所提供的推理形式中，从而使我们无法表示许多论证的形式，就像 IBM 360 的设计规定文件名不能超过八个字符一样（参见 van Benthem，2013）。

与分析性一样，可推导性可以出于各种原因，无论是必然的还是偶然的，逻辑的还是非逻辑的，已知的还是未知的。例如，[并非所有的鸟都会飞]可以从[有些鸟不会飞]推导出来，关于[鸟]和[飞]，而[巴迪是一只鸟]可以从[巴迪是一只乌鸦]推导出来，关于[巴迪]，而[哈里·杜鲁门不是佛教徒]也可以从[哈里·杜鲁门是 20 世纪美国总统]推导出来，关于[哈里·杜鲁门]。最后一个例子表明，可推导性并不要求前提和结论之间的联系是必然的，也不要求它是先验可知的（尽管不出所料，波尔查诺认为有些可推导性的情况是必然的，其中一些也是先验可知的）。因此，真理保持作为一种内在逻辑现象而得到了清晰的隔离。

在某些情况下，推理中包含空闲元素。例如，在形式为“所有 A 都是 C，所有 B 都是 C，所有 C 都是 D，因此所有 A 都是 D”的论证中，第二个前提可以省略而不破坏推导关系。同样，在形式为“任何既是 A 又是 B 的东西都是 C，所有 C 都是 D，因此所有 A 都是 D”的论证中，我们可以用一个更简单的前提“任何是 A 的东西都是 C”来代替第一个前提。看到这一点，波尔查诺寻求了一个更狭窄的概念，可以过滤掉冗余或琐碎的推理。

在 TS，§ 155，第 26 条中，他引入了确切推导的概念：我们在那里读到，只有当 M 从 A，B，C，...推导出来时，才存在推导关系，但如果省略任何一个前提或其任何部分，则不存在推导关系。不是确切的推导被称为冗余。在他的逻辑的较短版本中（Bolzano 2004a：54），关于省略部分的规定被取消了。这可能是明智的，因为这个额外的条件似乎有一些不受欢迎的后果（参见 Rusnock 和Šebestík，2019 年，312-3）。

波尔查诺证明了关于更狭窄关系的一些重要定理：如果 M 从 A，B，C，...确切推导出来，那么对于推导的变量来说，没有一个 A，B，C，...，M 是普遍有效的或普遍无效的。此外，每个前提的否定与其余前提是兼容的。因此，由于推导需要兼容性，每个前提在推导的变量方面都是独立的。此外，根据 Rolf George 证明的一个结果，当确切推导的关系成立时，至少有一个变量必须同时出现在前提和结论中（George，1983 年；参见 Rusnock 和Šebestík，2019 年，314-5）。因此，确切推导满足相关性条件（Stelzner，2002 年）。

另一个推导的特殊情况是逻辑推导；当推导中的所有不变元素都是逻辑概念时，它成立（TS，§ 223）。这个概念与塔斯基的逻辑蕴涵概念之间存在明显的类比。也许更有趣的是，波尔查诺的逻辑推导与弗雷格在与希尔伯特和科塞尔特的争论中描述的一种关系之间的相似之处，是如此惊人，以至于戈兰·松德霍尔姆（Göran Sundholm）认为弗雷格可能从未公开承认过与波尔查诺逻辑的熟悉（Sundholm，2000；但参见 Künne，2008，330ff.）。另一个合理的解释是，弗雷格只是通过明确希尔伯特的《几何基础》中的逻辑方法论，反向工程了与波尔查诺逻辑非常相似的东西。

波尔查诺对逻辑推导的描述是替代的，这种方法被塔斯基检查后被拒绝，因为它在“我们处理的语言没有足够的额外逻辑常量”时可能会产生不令人满意的结果（Tarski 1936 [1983]：415）。波尔查诺没有面临完全相同的问题，因为他的逻辑处理的是思想本身，而不是语言表达。塔斯基批评的结构性问题也没有发生在他身上，因为他假设对于每个对象，都有一个独占地代表它的思想，这个论点在他的其他自由奔放的本体论假设中并不一致（这些困难由 Simons（1987：42）和 Siebel（1996：216-223）详细讨论）。塔斯基没有像波尔查诺对语言做出的假设那样陈述他的最终表述，而是用模型或对象序列满足句子函数的方式来表述。

## 7. 真理之间的客观联系：基础（Abfolge）

1810 年的贡献已经包含了关于“真理之间客观联系”的推测，这种推测被认为可以指导科学知识的组织和呈现。波尔查诺在《TS》中对这个概念的讨论代表了他发展形式逻辑的最后阶段，同时也是第一个现代公理系统的研究（§162, 168 198–222, 378；另见波尔查诺 2004a，§13, 14, 17 以及 Roski 和 Schnieder 翻译的其他波尔查诺文献，2022 年）。

波尔查诺对真理之间客观秩序的观念源于亚里士多德对事实证明和揭示事实原因的区分。他的问题是确定什么应该被视为第二类证明，即他所称的真理的客观基础。在这个调查之前，他试图通过将基础与结果的关系称为 Abfolge（也翻译为“基础”）来表征这类证明的各个步骤。

在他人的著作中找不到令人满意的基础定义，并宣称自己无法定义基础（或者说基础的概念），他说他倾向于将其视为简单的（§202）。根据他的方法论，他试图通过陈述一些他认为是真实的关于基础的命题来至少部分地表征这个概念。首先，他声称只有真命题之间才存在基础与结果的关系。也许不明智的是，他假设了唯一性：“只有一个客观基础[对于给定的真理]”（TS IV: §528；参见§206）。在许多情况下，基础由一组真理组成。这个集合的部分（成员）被称为部分基础，集合本身被称为完全或总体基础。类似地，波尔查诺区分给定基础的总体和仅部分的结果。用现代术语来说，我们会认为他描述的关系是两个集合之间的关系，但这对波尔查诺来说是不可能的，因为在他的理解中，一个集合必须至少包含两个部分。

推理是非传递的：如果Γ是Δ的基础，Δ又是 E 的基础，那么Γ不是 E 的基础，尽管我们可以谈论支持的真理或不恰当地谈论远程基础。推理也是反对称和反自反的。它不应与推导性或因果性混淆。不是与前者混淆，因为推导性适用于假命题和真命题，是自反的（对于不是对于推导变量普遍无效的命题而言），仅仅是非对称的，仅仅是非传递的（在变量相同的情况下是传递的）。也不是与后者混淆，因为因果关系适用于实际对象，而基础关系涉及非实际对象，即真命题本身。然而，波尔查诺认为，因果关系和基础关系是相互关联的，他认为形式为“A 导致 B”的主张可以分析如下：“[A 存在]（部分）基础于[B 存在]”（TS，§168）。

尽管基础关系不是推导性的一种，波尔查诺认为有些情况下一个真理既可以从其他真理中推导出来，又可以基于其他真理。在这种情况下，他认为原始命题的变体之间也存在基础与结果的关系，只要所得到的命题都是真的。他在这种情况下谈到了形式基础（TS，§162）。后来，他引用了以下例子：[苏格拉底是雅典人和哲学家]既是基于[苏格拉底是雅典人]和[苏格拉底是哲学家]（关于[苏格拉底]，[雅典人]和[哲学家]）的，又可以从中推导出来，他显然认为对于所有由真命题组成的变体也是如此，例如，[尼克松是共和党人和骗子]，[尼克松是共和党人]，[尼克松是骗子]（TS，§199；参见§221，编号 7；以及关于形式基础的另一个例子，请参见§226，编号 5）。

波尔查诺认为存在没有基础的真理，他引用了例子[有某物]=[[某物]具有客观性]（TS，§214）。他称它们为基本真理（Grundwahrheiten）。他认为必须有不止一个基本真理，“因为我无法理解如何从一个单一的真理中得出所有其他真理，无论是作为结果，还是作为结果的结果等等”（§215）。与《贡献》一样，波尔查诺强调这不是一个认识论概念：特别是，基本真理不需要是显而易见的，可能需要以认证的方式进行证明。

每个非基本真理都与一组结构化的支持真理相关联（基础真理、基础真理的基础等等）。波尔查诺将这样的集合描绘为树（TS，§220）。在某些情况下，依赖关系无限进行，例如描述创造性物质的偶然状态的真理的基础（TS，§216）。在其他情况下，分支以基本真理终止。

波尔查诺在 TS 第 2 卷中的讨论以几个关于纯概念真理之间的形式基础关系的猜想结束（TS，§221）。首先，他坚持认为非基本纯概念真理的基础总是存在于其他纯概念真理中。当结果可以从基础中推导出来时，就没有多余的前提条件（正如我们上面所看到的，在确切可推导性的情况下满足这个条件）。此外，支持纯概念真理的各个真理从未比它本身更复杂。此外，它们是等价于它的所有命题中最简单的命题。 （波尔查诺使用这些论断来论证纯概念真理的基础树总是有限的。）它们也是可以从中推导出真理的最一般的命题。

结合这些标准，他提出以下作为形式基础的充分条件：如果真理 M 可以从真理 A、B、C、...相对于 i、j、...推导出来，并且 A、B、C、...是等价于它们的所有命题中最简单的（可能再次相对于 i、j、...），并且 A、B、C、...没有比 M 更复杂，那么 A、B、C、...与 M 之间存在形式基础关系（§221，第 7 条）。

当这些条件在属于纯概念科学的真理排序中得到系统地满足时，他进一步推测，演绎效率也得到最大化（§221，第 3 号）。事实上，在§221 的结尾处，他考虑到了以演绎效率来定义基础的可能性：

> 我有时怀疑我所声称的基础和推论的概念是否真的简单，它可能最终证明并不是其他概念，而是允许我们从最少数量的简单前提中推导出尽可能多的剩余真理作为结论的真理排序的概念。（TS，§221，388 注）

Roski（2014：370）总结了波尔查诺的思考的一般倾向如下：

> 它们是对于一个演绎论证在什么条件下是解释性的问题的部分回答[...] 在我认为最宽容的解读下，波尔查诺的原则基本上归结为这样一种说法：只有当没有比它更少前提的论证，对于其中的每个前提都没有更简单的逻辑等价命题，也没有比结论更复杂的前提时，一个逻辑上有效的论证才是解释性的[...] 我一直认为，这些原则可以被看作是对于解释性论证中的每个前提和概念都具有演绎相关性这一观念的阐释。更重要的是，它们可以被看作是对于解释应该与某种理论经济相结合这一观念的阐释。

评论家们指出了波尔查诺提议的一些缺点（参见，例如，曼科苏，1999 年，伦伯格，2013 年，罗斯基，2017 年）。这并不会让他感到惊讶，因为他自己意识到上述标准可能会产生冲突（参见，例如，2004a，§17），并且坦率地承认他关于基础的言论是试探性的和不完整的，只是对该概念进行界定的第一次尝试：

> 在这一部分中，我提出的几乎所有内容都带有不确定性，对于许多问题我还没有做出任何决定，而且最多只能算是我的调查的片段和建议，如果它们能够为他人提供进一步思考这些问题的刺激，那么它们就已经达到了目标（TS II: §195, 327–8）。

## 8. 结论

波尔查诺的 TS，特别是元素理论，在逻辑学和认识论上都是一个转折点。根据卡瓦耶（2008: 35）的说法，

> 或许是第一次，科学不再被视为仅仅在人类思维和存在本身之间进行中介，依赖于两者并且没有真正的实在性，而是作为一种独特的对象，本质上原创，在运动中具有自主性。

科学的定义在于其“不仅是演示，而且与演示融为一体的结构”（同上，39 页）。波尔查诺强调了演示在科学知识中的基本作用，并提出了一种可行的替代康德数学哲学的方法，该方法基于纯直观中的构造。

> 一个真正科学的证明应该将定理基于科学理论中，根据“真理的客观联系”组织起来的，从公理和基本概念开始。[...] 这些思想指示了未来研究的方向：根据 Gentzen 的意义上的正常证明，证明树，König 的引理（Šebestík 1992: 478）。

虽然波尔查诺的一些数学工作在 19 世纪产生了影响力，但他的逻辑学大多受到冷漠和不理解的对待。直到世纪末，哲学家们，尤其是 Kerry、Twardowski、Meinong 和 Husserl，才开始欣赏他的成就。有趣的是，弗雷格（Frege）的思想与波尔查诺的思想常常如此接近，而且在他的时代，他是为数不多能够理解波尔查诺的逻辑学家之一，但在他的任何出版物或现存文件中都没有提到过他。他至少三次面对了波尔查诺的思想：在 Kerry 的一篇文章中，在与 Husserl 的通信中，以及后来与 Korselt 的争论中。我们没有任何证据表明他对他们的暗示做出过任何反应，他很可能从未接触过波尔查诺的任何著作。曼科苏（Mancosu）还指出了一个有趣的巧合（1996 年，110-117 和注 69，第 234 页）：在 TS 的第 530 节中，波尔查诺认为每个间接证明都可以转化为直接证明。曼科苏指出了这一主张与弗雷格在他的一篇遗作《数理逻辑》中提出的主张的惊人相似之处。此外，波尔查诺和弗雷格选择了完全相同的例子（欧几里得 I.19）来说明他们的观点。

在 Twardowski（1894）之后，主要是 Husserl 通过他关于 TS（1900 [1970]，I：222）的难忘言辞吸引了哲学家们对波尔查诺的注意。

> 这部作品在处理逻辑“要素理论”方面远远超过了世界文学中提供的任何系统逻辑概述。当然，波尔查诺并没有明确讨论或支持我们所说的纯逻辑的独立划分，但他在他的作品的前两卷中实际上提供了一个划分，在他对 Wissenschaftslehre 或科学理论的讨论中，他以如此纯净和科学的严谨性，以及如此丰富的原创、科学证实和永远富有成果的思想，我们必须将他视为有史以来最伟大的逻辑学家之一。

然而，他始终坚持自己的现象学方法的独创性。在两次战争之间，波尔查诺的逻辑和数学哲学启发了 Heinrich Scholz 和 Jean Cavaillès。在这个时期，Tarski 独立于波尔查诺发现了逻辑推论的概念，直到 Scholz（1937 [1961]）指出之后才意识到他的工作与波尔查诺的亲缘关系。然而，在 Twardowski（1894）中，波兰利沃夫-华沙学派的创始人对波尔查诺的思想进行了详细的讨论和批评，其中一些思想可能已经成为波兰学派的共同知识。1920 年，Hans Hahn 编辑了《无限的悖论》并附有重要的批注，将波尔查诺与康托尔进行了比较。Karl Menger 可能不仅从庞加莱那里获得了他的维度理论的灵感，还从这些悖论中获得了灵感。Neurath 称赞波尔查诺是维也纳学派的祖先之一，因为他的风格简洁并且拒绝康德的哲学。一些重要的波尔查诺思想也可以在 Quine 的作品中找到。所有这些思潮都受益于波尔查诺对知识严谨性和分析力量的教诲。正是波尔查诺是那种以逻辑为核心、充满科学气息的分析哲学的真正奠基人。他的逻辑具有古老的方面，但他不仅引入了新的概念、方法和理论，新的主题和新的问题，而且最重要的是引入了一种新的精神，自那时以来一直激励着哲学。

## Bibliography

### Primary Literature

* 1810, *Beyträge zu einer begründeteren Darstellung der Mathematik* (*Contributions to a better grounded presentation of mathematics*), Prague (English transl. Bolzano 2004b; French transl. Bolzano 2010).
* 1816, *Der binomische Lehrsatz und als Folgerung aus ihm der polynomische, und die Reihen, die zur Berechnung der Logarithmen und Exponentialgrössen dienen, genauer als bisher erwiesen* (The binomial theorem and as a consequence of it the polynomial theorem, and the series that serve in the calculation of logarithms and exponential quantities, proven more exactly than previously) Prague, English transl. Bolzano 2004b).
* 1817, *Rein analytischer Beweiss des Lehrsatzes, daß zwischen je zwey Werthen, die ein engegengesetztes Resultat gewähren, wenigstens eine reelle Wurzel der Gleichung liege (Purely analytic proof of the theorem that between any two values which give results of opposite sign, there lies at least one real root of the equation)*, Prague (English transl. Bolzano 2004b; French transl. Bolzano 2010).
* 1834, *Lehrbuch der Religionswissenschaft* (*Treatise of the science of religion*), Sulzbach: Seidel; *Gesamtausgabe* I 6–8.
* 1837 [*TS*], *Wissenschaftslehre, Versuch einer ausführlichen und grösstentheils neuen Darstellung der Logik mit steter Rücksicht auf deren bisherige Bearbeiter*, 4 vol., Sulzbach: Seidel; reprint of the 2nd edition 1929–1931, Aalen: Scientia Verlag 1970; *Gesamtausgabe* I 11–14, with introductions by J. Berg; English translation 2014, *Theory of science*, 4 vol., translated by Paul Rusnock and Rolf George, Oxford: Oxford University Press. (This translation is indicated as *TS*. The page numbers are those of the original German edition which are on the margins of the other editions, so that the reference is the same for the German original, for the *Gesamtausgabe* and for the English translation).
  * Vol. I: §§1–120
  * Vol. II: §§121–268
  * Vol. III: §§269–391
  * Vol. IV: §§391–718.
* 1842, *Über die Zusammensetzung der Kräfte*, Prag; *Gesamtausgabe* I 18, 9–60.
* 1851, *Paradoxien des Unendlichen* (*Paradoxes of the Infinite*), Leipzig; new editions: 1920 with notes by H. Hahn; 1975, Hamburg: F. Meiner, with notes by B. van Rootselaar; 2012, Hamburg: Meiner, ed. C. Tapp (English transl. D.A. Steele, 1950, London: Routledge; new transl. S. Russ, Bolzano 2004b; French transl. Paris: Seuil 1993).
* 1932, *Von dem besten Staate* (On the Best State), edited with an introduction by A. Kowalewski, Prag: Königliche böhmische Gesellschaft der Wissenschaften; *Gesamtausgabe* II A 14; Engl. transl. by P. Rusnock and R. George, in *Selected Writings on Ethics and Politics*, 2007, Amsterdam: Rodopi, pp. 231–359.
* 1969–present, *Bernard-Bolzano Gesamtausgabe* (complete works), Stuttgart-Bad Cannstatt: Fromann-Holzboog, editors E. Winter, J. Berg., et al., altogether 132 volumes of which 107 have appeared.
* 1972, *Theory of science, attempt at a detailed and in the main novel exposition of logic with constant attention to earlier authors*, edited and translated by Rolf George, Berkeley and Los Angeles: University of California Press (a selection).
* 1973, *Theory of science*, edited, with an introduction, by Jan Berg, translated from the German by Burnham Terrell, Dordrecht and Boston: D. Reidel (a selection).
* 1976, *Einleitung in die Grössenlehre* und *Erste Begriffe der allgemeinen Grössenlehre (Introduction to the Theory of Magnitudes and First concepts of the general Theory of Magnitudes, Gesamtausgabe)*, II A 7, (Engl. transl. of the chapter. *On the mathematical method*, 2004, Paul Rusnock and Rolf George, Amsterdam-New York: Rodopi; French transl. Paris: Vrin, 2008; see 2004a).
* 1978, *Grundlegung der Logik. Wissenschaftslehre I/II*, edited, with an introduction by Friedrich Kambartel, Hamburg: Felix Meiner (a selection; French transl. 2011, Paris: Gallimard).
* 2004a, *On the mathematical method and correspondence with Exner*, Paul Rusnock and Rolf George (transl.), Amsterdam-New York: Rodopi; French transl. *De la méthode mathématique et correspondance avec Exner*, 2008, introd. par C. Maigné et J. Šebestík, Paris: Vrin.
* 2004b, *The mathematical works of Bernard Bolzano*, S. Russ (transl.), Oxford: Oxford University Press.
* 2010, *Premiers écrits, Philosophie, logique, mathématique*, trad. fr. par M. Bartzel et al., introd. par C. Maigné et J. Šebestík, Paris: Vrin.

### Secondary Literature

#### Works Cited

* Arnauld, A. and P. Nicole, 1662, *Logique ou l’Art de Penser* (also called *Logique de Port-Royal* and *Port-Royal Logic*); reprinted Paris: Vrin, 1993.
* Bar-Hillel, Y., 1950, “Bolzano’s definition of analytic propositions,” *Theoria*: 91–117.
* van Benthem, Johan, 2013, “Bernard Bolzano’s *Wissenchaftslehre*,” *Topoi* 32(2): 301–303.
* Cavaillès, J., 2008, *Sur la logique et la théorie de la science*, second edition, preface by G. Canguilhem and G. Bachelard, postface by J. Šebestík, Paris: Vrin.
* Frege, G., unpublished, “Logic in Mathematics,” translation by P. Long and R. White, in H. Hermes, F. Kambartel, and F. Kaulbach (eds.), 1979, *Posthumous Writings*, Chicago: U. of Chicago Press, pp. 203–250.
* George, R., 1983, “Bolzano’s consequence, relevance, and enthymemes,” *Journal of Philosophical Logic*, 12(3): 299–318 ; with a postscript on fallacies: 319–25.
* Husserl, E., 1900, *Logische Untersuchungen, I, Prolegomena zu reiner Logik* (*Logical Investigations*, I, *Prolegomena to pure logic*; Engl. transl. J.N. Findlay, 1970, London: Routledge).
* Kreiser, L., 1981, “Logical semantics in Bolzano and the reproach of Platonism”, (in Czech), *Filozofický časopis*, 29: 94–103.
* Künne, W., 2006, “Analyticity and logical truth: from Bolzano to Quine,” in M. Textor, ed., *The Austrian Contribution to Analytic Philosophy,* London and New York: Routledge: 184–249.
* –––, 2008, *Versuche über Bolzano. Essays on Bolzano*, Sankt Augustin: Akademia.
* Maaß, J.G.E., 1793, *Grundriß der Logik*, 4th edition, Leipzig, 1823.
* Mancosu, P., 1996, *Philosophy of Mathematics and Mathematical Practice in the Seventeenth Century*, Oxford: Oxford University Press.
* –––, 1999, “Bolzano and Cournot on mathematical explanation,” in Sinaceur 1999: 429–455.
* Quine, W.V.O, 1960, *Word and Object*, Cambridge: MIT Press.
* Roski, S., 2014, *Bolzano’s Notion of Grounding and the Classical Model of Science*, Amsterdam: CPI Wöhrmann Print Service BV.
* –––, 2017, *Bolzano’s Conception of Grounding,* Frankfurt am Main: Klostermann.
* Roski, S. and B. Schnieder (eds.), 2022, *Bolzano’s Philosophy of Grounding: Translations and Studies*, Oxford: Oxford University Press.
* Rumberg, A., 2013, “Bolzano’s concept of grounding (*Abfolge*) against the background of normal proofs,” *Review of Symbolic Logic*, 6(3): 424–459.
* Rusnock, P. and J. Šebestík, 2019, *Bernard Bolzano: His Life and Work*, Oxford: Oxford University Press.
* Scholz, H., 1961, “Die Wissenschaftslehre Bolzanos: Eine Jahrhundert-Betrachtung (1937),” in *Mathesis Universalis*, Basel-Stuttgart: Benno Schwabe.
* Šebestík, J., 1992, *Logique et mathématique chez Bernard Bolzano*, Paris: Vrin.
* Siebel, M., 1996, *Der Begriff der Ableitbarkeit bei Bolzano*, Sankt Augustin: Akademia.
* Simons, P., 1987, “Bolzano, Tarski, and the limits of logic,” in Morscher 1987: 378–405.
* Stelzner, W., 2002, “Compatibility and relevance: Bolzano and Orlov,” in *The Third German-Polish Workshop on Logic & Logical Philosophy*, Dresden, 2001, *Logic and Logical Philosophy*, 10: 137–171.
* Sundholm, G., 2000, “When and why, did Frege read Bolzano?,” *LOGICA Yearbook 1999*, Prague: Filosofia, pp. 164–174.
* Tarski, A., 1936 [1983], “Über den Begriff der logischen Folgerung,” in *Actes du Congrès International de Philosophie Scientifique*, fasc. 7 (Actualités Scientifiques et Industrielles, vol. 394), Paris: Hermann et Cie, pp. 1–11; English translation by J.H. Woodger in *Logic, Semantics, Metamathematics*, second edition, J. Corcoran (ed.), Indianapolis: Hackett, 1983, pp. 409–420.
* Twardowski, K., 1894, *Zur Lehre von Inhalt und Gegenstand von Vorstellungen*, Wien; Engl. transl. and introd. by R. Grossmann, 1977, *On the content and object of presentations*, The Hague: Martinus Nijhoff.
* Wittgenstein, L., 1922, *Tractatus Logico-Philosophicus,* transl. C. K. Ogden, London: Routledge and Kegan Paul.
* Zimmermann, R., 1853, *Philosophische Propädeutik für Obergymnasien*, 1st ed., Wien.

#### Collections

* Benoist, J. (ed.), 2000, *Bolzano*, *Les Études philosophiques* (special issue), n° 4 (Octobre-Décembre), 433–534.
* Besoli, S., L. Guidetti, and V. Raspa (eds.), 2011, *Bernard Bolzano e la tradizione filosofica*, special issue of *Discipline Filosofiche*, 21(2).
* Centro Fiorentino di Storia e Filosofia della Scienza (ed.), 1992 [BW-1987], *Bolzano’s Wissenschaftslehre 1837–1987: International Workshop (Firenze, 16–19 settembre 1987)*, Firenze: Leo S. Olschki.
* Künne, W., M. Siebel, and M. Textor (eds.), 1997, *Bolzano and Analytic Philosophy*, special issue of *Grazer philosophische Studien*, 53.
* Lapointe, S. (ed.), 2003, *Bernard Bolzano. Philosophie de la logique et théorie de la connaissance*, special issue of *Philosophiques*, 30(1).
* Morscher, E. (ed.), 1987, *Bolzano-Studien*, special issue of *Philosophia Naturalis*, 24(4).
* ––– (ed.), 2000, *Bolzanos geistiges Erbe für das 21. Jahrhundert*, Sankt Augustin: Akademia.
* ––– (ed.), 2003b, *Bernard Bolzanos Leistungen in Logik, Mathematik und Physik*, Sankt Augustin: Akademia.
* Novy, M. (ed.), 1982, *Impact of Bolzano’s epoch on the development of science* (Volume 13 of *Acta Historiae Rerum Naturalium Necnon Technicarum*), Prague: Ústav Československých a Světových Dějin ČSAV.
* Sinaceur, H. (ed.), 1999, *Mathématique et logique chez Bolzano*, special issue of *Revue d’Histoire des Sciences*, 52(3–4).
* Trlifajová, K. (ed.), 2006, *The solitary thinker Bernard Bolzano*, in Czech, Prague: Filosofia.

#### Other Works on Bolzano

* Bar-Hillel, Y., 1952, “Bolzano’s propositional logic,” *Archiv für Mathematik, Logik und Grundlagenforschung*, 1: 65–98.
* Bayerová, M., 1994, *Bernard Bolzano, the European dimension of his thought* (in Czech), Prague: Filosofia.
* Behboud, A., 2000, *Bolzanos Beiträge zur Mathematik und ihrer Philosophie* (*Bolzano’s Contributions to Mathematics and its Philosophy*), Bern: Bern Studies in the History and Philosophy of Science.
* Benoist, J., 1999, *L’a priori conceptuel. Bolzano, Husserl, Schlick*, Paris: Vrin.
* Benthem, J. van, 1984, *Lessons from Bolzano*, Stanford: Center for the Study of Language and Information, Leland Stanford Junior University (13 p.).
* –––, 1985, “The variety of consequence, according to Bolzano,” *Studia Logica*, 44(4): 389–403.
* –––, 2003, “Is there still logic in Bolzano’s key?,” in Morscher 2003b: 11–34.
* Berg, J., 1962, *Bolzano’s Logic*, Stockholm: Almquist Wiksell.
* –––, 1973, “Editor’s introduction,” in Bolzano 1973: 1–30.
* –––, 1977, “Bolzano’s contribution to logic and philosophy of mathematics,” in *Logic Colloquium 76*, R.O. Gandy and J.M. Hyland (eds), Amsterdam: North Holland, 141–171.
* –––, 1987a, “Bolzano and situation semantics: variations on a theme of variation,” in Morscher 1987: 373–377.
* –––, 1987b, “Bolzano on induction,” in Morscher 1987: 442–446.
* –––, 1992, *Ontology without ultrafilters and possible worlds: An examination of Bolzano’s ontology*, Sankt Augustin: Akademia.
* Bergmann, H., 1970, *Das philosophische Werk Bernard Bolzanos*, reprint Hildesheim: Olms.
* Berka, K., 1992, “Bolzanos Lehre vom natürlichen Schliessen,” in BW-1987: 141–161.
* Berg, J., H. Ganthaler, and E. Morscher, 1987, “Bolzanos Biographie in tabellarischer Übersicht,” in Morscher 1987: 353–372.
* Betti, A., 1998, “*De Veritate*: another chapter. The Bolzano-Lesniewski connection,” in *The Lvov-Warsaw School and contemporary philosophy*, K. Kijania-Placek and J. Wolenski (eds), Dordrecht: Kluwer Academic Publishers, pp. 115–137.
* Bouveresse, J., 2000, “Sur les représentations sans objet,” J. Benoist (ed.), *Les Études Philosophiques*, n° 4: 519–534.
* Buhl, G., 1961, *Ableitbarkeit und Abfolge in der Wissenschaftslehre Bolzanos*, *Kantstudien*, Ergänzungshefte n° 83.
* Bussotti, P., 2000, “The problem of the foundations of mathematics at the beginning of the nineteenth century: Two lines of thought: Bolzano and Gauss” (Italian), *Teoria* (New Series), 20(1): 83–95.
* Cantù, P., 1992, “Bolzano versus Kant: Mathematics as a Scientia Universalis,” in *Mind, Values, and Metaphysics, Philosophical Essays in Honor of Kevin Mulligan*, Volume 1, A. Reboul (ed.), Heidelberg, Springer, pp. 295–316.
* Casari, E., 1985, “L’universo logico bolzaniano,” *Rivista di filosofia,* 76:339–366.
* –––, 1992, “An interpretation of some ontological and semantical notions in Bolzano’s logic,” in BW-1987: 55–105.
* –––, 2016, *Bolzano’s Logical System*, Oxford: Oxford University Press.
* Cellucci, C., 1992, “Bolzano and multiple-conclusion logic,” in BW-1987: 179–189.
* Centrone, S., 2011, “Begründungen bei Bolzano und beim frühen Husserl,” *Zeitschrift für philosophische Forschung* 65: 5–27.
* Centrone S., 2015, *Studien zu Bolzano*, Sankt Augustin: Akademia Verlag.
* Chihara, C., 1999, “Frege’s and Bolzano’s rationalist conceptions of arithmetic,” in Sinaceur 1999: 343–361.
* Coffa, A., 1982, “Kant, Bolzano and the emergence of logicism,” *Journal of Philosophy*, 74: 679–689.
* –––, 1991, *The Semantic Tradition from Kant to Carnap*, Cambridge: Cambridge University Press.
* Cohen, J.L., 1982, “Bolzano’s theory of induction,” in L. Nový (ed.) *Impact of Bolzano’s epoch on the development of science*, Prague: Institute of Czechoslovak and General History, 443–457.
* Daněk, J., 1975, *Les projets de Leibniz et de Bolzano: deux sources de logique contemporaine*, Quebec: Presses de l’Université de Laval.
* Detlefsen, M., 1988, “Fregean hierarchies and mathematical explanation,” *International Studies in Philosophy of Science*, 3: 97–116.
* –––, 2010, “Rigor, Re-proof and Bolzano’s critical program,” in *Constructions*, P. Bour et al. (eds.), Festschrift for Gerhard Heinzmann, pp. 171–184, King’s College Publications.
* Dorn, G.J.W., 1987, “Zu Bolzanos Wahrscheinlichkeitslehre,” in Morscher 1987: 452–468.
* –––, 2003, “Intuitions” (in French), in S. Lapointe (ed.) 2003, *Philosophiques*, 30(1): 19–46.
* Fedorov, B.I., 1980, *Bernard Bolzano’s Logic* (in Russian), Leningrad: Izdatelstvo Leningradskogo Universiteta.
* George, Rolf, 1986, “Bolzano’s concept of consequence,” *Journal of Philosophy* 83: 558–64.
* –––, 2004, “Intuitions---the theories of Kant and Bolzano,” in M. Siebel and M. Textor, eds, *Semantik und Ontologie*, Frankfurt and Lancaster: Ontos: 319–54.
* Hafner, J., 1999, “Bolzano’s criticism of indirect proofs,” in Sinaceur 1999: 385–398.
* Hale, B., 2015, “Bolzano’s definition of analytic propositions,” *Grazer philosophische Studien* 91:325–364.
* Haller, R., 1992, “Bolzano and Austrian Philosophy,” in BW-1987: 191–206.
* Husserl, E., 1969, *Formal and Transcendental logic*, transl. D. Cairns, The Hague: Nijhoff.
* de Jong, W., 2001, “Bernard Bolzano, analyticity and the aristotelian model of science,” *Kant-Studien* 92: 328–49.
* –––, 2010, “The analytic-synthetic distinction and the classical model of science: Kant, Bolzano and Frege,” *Synthese* 174: 237–61.
* Kerry, B., 1885–1891, “Über Anschauung und ihre psychische Verarbeitung,” *Vierteljahresschrift für wissenschaftliche Philosophie*, 1885, 9: 432–493; 1886, 10: 419–467; 1887, 11: 53–116 and 249–307; 1891, 15: 127–167.
* Kitcher, K., 1975, “Bolzano’s ideal of algebraic analysis,” *Studies in History and Philosophy of Science*, 6(3): 229–269.
* Kolman, A., 1961, *Bernard Bolzano*, Berlin: Akademie Verlag.
* Kozelmann Ziv, A., 2010, *Kräfte, Wahrscheinlichkeit und “Zuversicht”, Bernard Bolzanos Erkenntnislehre*, Sankt Augustin: Akademia Verlag.
* Koreň, L., 2014, “Quantificational account of logical consequence,” II: In the Footsteps of Bolzano, *Organon*, Bratislava, 3(21), 303–326.
* Krause, A., 2004, *Bolzanos Metaphysik*, Freiburg/München: Verlag Karl Alber.
* Krickel, F., 1995, *Teil und Inbegriff. Bernard Bolzanos Mereologie*, Sankt Augustin: Akademia.
* Künne, W., 1998, “Bernard Bolzano,” in *Routledge Encyclopedia of Philosophy*, 1, London, New York: Routledge, pp. 824–828.
* Lapointe, S., 2000, “Analyticité, universalité et quantification chez Bolzano,” in *Les Études Philosophiques*, 4: 455–470.
* –––, 2008, *Qu’est-ce que l’analyse?*, Paris: Vrin.
* –––, 2014, “Bolzano, Quine, and Logical Truth,” in G. Harman and E. Lepore (eds.) *A Companion to W.V.O. Quine,* Hoboken: Wiley: 296–312.
* Laz, J., 1993, *Bolzano critique de Kant*, Paris: Vrin.
* Łukasiewicz, J., 1970, *The logical foundations of probability calculus*, in *Selected Works*, Amsterdam: North Holland.
* Mačák, K., 1996, “Bernard Bolzano and the calculus of probabilities,” (in Czech), in *Mathematics in the 19th century,* Prague: Prometheus, pp. 39–55.
* Materna, P., 1995, *The World of Concepts and Logic* (in Czech), Prague: Filosofia.
* Morscher, E., 1973, *Das logische An-Sich bei Bernard Bolzano*, Salzburg-München: Anton Pustat.
* –––, 1997, “Bolzano’s Method of Variation: Three Puzzles,” W. Künne, et al. (eds.), *Grazer philosophische Studien*, 53: 151–159.
* –––, 2003a “La définition bolzanienne de l’analyticité logique, ”*Philosophiques*, 30: 149–169.
* –––, 2007, *Studien zur Logik Bernard Bolzanos*, Sankt Augustin: Akademia.
* Mugnai, M., 1992, “Leibniz and Bolzano on the ‘Realm of truths’,” in BW-1987: 207–220.
* Niiniuloto I., 1977, “Bolzano and Bayes’ tests,” *Studia Excellentia*, Essays in Honour of Oliva Ketonen, 30–36, Helsinki.
* Nový, L, 1982, “Bolzano’s contribution to science and society,” in *Impact of Bolzano’s epoch on the development of science*, Prague: Institute of Czechoslovak and General History, 9–23.
* Patočka, J., 1958, “Bolzanovo místo v dějinách filosofie” (Bolzano’s place in the history of philosophy), *Filosofie v dějinách českého národa*, Praha: Nakl. Československé Akademie Věd, 111–123.
* Prawitz, D., 2019, “The concepts of proof and ground,” in S.Centrone, S. Negri, D. Sarikaya eds., *Mathesis Universalis: Computability and Proof*, Cham: Springer Cham, 291–309.
* Preti, G., 1976, “I fondamenti della logica formale pura nella ‘Wissenschaftslehre’ di B. Bolzano e nelle ‘Logische Unturschungen’ di E. Husserl,” *Saggi filosofici* (vol. I, pp. 11–31), Firenze: La Nuova Italia.
* Prihonsky, 1850, *Neuer Anti-Kant oder Prüfung der Kritik der reinen Vernunft nach den in Bolzano‘s Wissenschaftslehre niedergelegten Begriffen*, Bautzen; English transl. by S. Lapointe and C. Tolley, 2014, Houndmills: Palgrave and MacMillan.
* Proust, J., 1986, *Questions de forme, Logique et proposition analytique de Kant à Carnap*, Paris: Fayard; Engl. transl. *Questions of form, Logic and analytic proposition from Kant to Carnap*, Minneapolis: University of Minnesota Press.
* –––, 1999, “Bolzano’s theory of representation,” in Sinaceur 1999: 363–383.
* Rootselaar, B. van, 1970–1990, “Bernard Bolzano,” in *Dictionary of Scientific Biography*, New York, II, 273–279.
* –––, 1992, “Axiomatics in Bolzanos logico-mathematical research,” in BW-1987: 221–230.
* –––, 2013, “*A Priori* Knowledge in Bolzano, Conceptual Truths, and Judgments,” in M. van der Schaar (ed.), *Judgment and the Epistemic Foundation of Logic*, Dordrecht: Springer, 101–130.
* Roski, S., *Bolzano’s Conception of Grounding,* Frankfurt am Main: Klostermann, 2017.
* Roski, S. and A. Rumberg, “Simplicity and Economy in Bolzano’s Theory of Grounding,” *Journal of the History of Philosophy* 54: 469–96.
* Roski, S. and P. Rusnock, 2014, “Bolzano on necessary existence,” *Archiv für Geschichte der Philosophie*, 96(3): 320–359. doi:10.1515/agph-2014-0015
* Rumberg, A., 2009, *Ableitbarkeit und Abfolge bei Bernard Bolzano vor dem Hintergrund des modelltheoretischen und beweistheoretischen Folgerungsbegriff*, Magisterarbeit Universität Tübingen.
* Rusnock, P., 2012, “Remarks on Bolzano’s conception of necessary truth,” *British Journal for the History of Philosophy*, 20(4): 817–837.
* –––, 2013a, “Kant and Bolzano on analyticity,” *Archiv für Geschichte der Philosophie*, 95(3): 298–335.
* –––, 2013b, “On Bolzano’s concept of a Sum,” *History and Philosophy of Logic*, 34(2): 155–169.
* Rusnock, P. and Burke, M., 2010, “Etchemendy and Bolzano on logical consequence,” in *History and Philosophy of Logic*, 31(3): 3–29.
* Rusnock, P. and R. George, 2004, “Bolzano as logician,” in *Handbook of the History of Logic, vol. 3: The Rise of modern logic: from Leibniz to Frege*, D. Gabbay and J. Woods (eds), Amsterdam: Nort Holland, 177–205.
* Rusnock, P. and J. Šebestík, 2013, “The *Beyträge* at 200: Bolzano’s quiet revolution in the philosophy of mathematics,” *Journal for the History of Analytic Philosophy* 1 (8).
* Russ, S., 1992, “Bolzano’s analytic program,” *The Mathematical Intelligencer*, 14(3): 45–53.
* –––, 1982, “Influence of Bolzano’s methodology on the development of his mathematics,” in *Impact of Bolzano’s epoch on the development of science*, Prague, 335–337.
* Schmutz, J., 2009, “Quand le langage a-t-il cessé d’être mental? Remarques sur les sources scolastiques de Bolzano,” in *Le langage mental du Moyen-Âge à l’Âge classique*, J. Biard (dir.), Louvain: Ed. Peeters, pp. 307–337.
* Schnieder, B., 2002, *Substanz und Adhärenz. Bolzanos Ontologie des Wirklichen*, Sankt Augustin: Akademia.
* Šebestík, J., 1999, “Forme, variation et déductibilité dans la logique de Bolzano,” Sinaceur 1999: 479–506.
* –––, 2018, review of E. Casari, *Bolzano’s Logical System*, *History and Philosophy of Logic,* 39(2): 164–186
* Segura, L.F., 2001, *La prehistoria del logicismo*, Mexico: Plaza y Valdes.
* Siebel, M., 1997a, “Variation, derivability, and necessity,” *Grazer philosophische Studien* 53: 117–37.
* –––, 1997b, “Bolzanos Ableitbarkeit und Tarskis Logische Folgerung,” pp. 148–56 in G. Meggle, ed., *Analyomen* 2: Proceedings of the 2nd Conference “Perspectives in Analytical Philosophy,” Volume I: Logic, Epistemology, Philosophy of Science New York and Berlin: De Gruyter.
* –––, 2002, “Bolzano’s concept of consequence,” *The Monist* 85: 580–99.
* Simons, P., 1997, “Bolzano on collections,” *Grazer Philosophische Studien*, 53: 87–108.
* –––, 2000 “Bolzano über Wahrheit,” pp. 13–28 in Morscher ed., 2000.
* –––, 2011, “Bolzano e la logica,” S. Besoli et al. (eds.) 2011: 321–342.
* Sinaceur, H., 1996, “Bolzano et les mathématiques,” in *Les philosophes et les mathématiques*, Paris: Ellipses, pp. 150–173.
* –––, 1999, “Réalisme mathématique, réalisme logique chez Bolzano,” in Sinaceur 1999: 457–477.
* Sundholm, B.G, 2002, “A Century of Inference: 1837–1936,” in *Logic, Methodology and Philosophy of Science* (11, Cracow 1999), J. Wolenski and K. Placek (eds.), Dordrecht: Kluwer.
* –––, 2011, “A Garden of Grounding Trees ,” in *Logic and Knowledge*, C. Cellucci, E. Grosholz, and E. Ippoliti, Cambridge: Cambridge Scholars Publishing, pp. 57–74.
* Tatzel, A., 2002, “Bolzano’s theory of ground and consequence, ” *Notre Dame Journal of Formal Logic*, 43: 1–25.
* –––, 2003, Bolzano on grounding, in *The Logica Yearbook 2002*, T. Childers and O. Majer (eds.), Prague: Filosofia, 245–258.
* Textor, M., 1996, *Bolzanos Propositionalismus*, Berlin-New York: De Gruyter.
* –––, 1997, “Bolzano’s Sententialism,” *Grazer philosophische Studien*, 53: 181–202.
* –––, 2000, “Bolzano et Husserl sur l’analyticité,” *Études Philosophiques* 4: 435–54.
* –––, 2003, “ ‘Caius–at–noon’. Bolzano on Tense and Persistence,” *History of Philosophy Quarterly* 20: 81–103.
* –––, 2013, “Bolzano on conceptual and intuitive truth: the point and purpose of the distinction,” *Canadian Journal of Philosophy* 43: 13–36.
* Thompson, P., 1981, “Bolzano’s deducibility and Tarski’s logical consequence,” *History and. Philosophy of Logic*, 2: 11–20.
* Vlasáková, M., 2005, *Bernard Bolzano: the road towards logical semantics* (in Czech), Prague: Filosofia.
* Voltaggio, F., 1974, *Bernard Bolzano e la dottrina della scienza*, Milano: Edizioni di Comunità.
* Wussing, W., 1981, “Bernard Bolzano und die Grundlegung der Analysis,” *Mitteilungen der Matematischen Gesellschaft der DDR*, 2–4: 128–152.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=bolzano-logic). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/bolzano-logic/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=bolzano-logic&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/bolzano-logic/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* O’Connor, J.J. and E.F. Robertson, “[Bernard Bolzano](https://mathshistory.st-andrews.ac.uk/Biographies/Bolzano/)”, MacTutor History of Mathematics archive.
* [Bernard Bolzano and the Theory of Science](http://www.formalontology.it/bolzanob.htm)

## Related Entries

[Bolzano, Bernard](https://plato.stanford.edu/entries/bolzano/) | [Husserl, Edmund](https://plato.stanford.edu/entries/husserl/) | [Tarski, Alfred](https://plato.stanford.edu/entries/tarski/)

[Copyright © 2022](https://plato.stanford.edu/info.html#c) by  
Paul Rusnock <[*prusnock@uottawa.ca*](mailto:prusnock%40uottawa%2eca)>  
[Jan Šebestik](http://www.aleph.cz/sebestik/sebestik-cv.html)
