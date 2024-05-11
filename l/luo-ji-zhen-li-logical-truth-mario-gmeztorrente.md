# 逻辑真理 logical truth (Mario Gómez-Torrente)

*首次发表于2006年5月30日；实质性修订于2022年9月21日。*

根据标准观点，逻辑的目标之一是描述（并为我们提供实际手段以区分）一组特殊的真理，即逻辑真理。以下英文句子通常被视为典型范例：

* （1）如果只有当生活是美好的时候死亡才是不好的，并且死亡是不好的，那么生活是美好的。
* （2）如果没有欲望是自愿的，并且一些信念是欲望，那么一些信念就不是自愿的。
* (3)如果 Drasha 是一只猫，而且所有的猫都是神秘的，那么 Drasha 就是神秘的。

事实证明，很难对逻辑真理的一般属性有普遍接受的想法，或者说应该有什么样的想法。一个广泛的、或许是普遍接受的想法是，逻辑真理应该具有尚未完全理解的模态力量的一部分。通常认为，在某种意义上，“可能”一词或几个意义上，逻辑真理不可能是假的，或者在某种意义上，“必须”一词或几个意义上，逻辑真理必须是真的。但是关于如何理解相关的模态性，几乎没有任何一致意见。

另一个广泛的观点是，逻辑真理的一部分应该是以某种意义上尚未完全理解的“形式”来区分。逻辑真理的形式至少意味着，适当替换其逻辑形式的所有句子也是逻辑真理。在这个背景下，一个句子 S 的逻辑形式被认为是由 S 唯一确定的某个模式，S 是该模式的替换实例，与 S 具有相同形式的句子也是替换实例。一个形式至少具有这样的特性，即其中的非概念字母（“逻辑表达式”）在不同领域的话语中都是广泛适用的。在接受形式概念的人中，对于(1)、(2)和(3)的形式，大致会达成以下类似的共识：(1')、(2')和(3')。

* (1′)如果只有当 b 是 Q 时，a 才是 P，并且 a 是 P，那么 b 就是 Q。
* (2′)如果没有任何 Q 是 R，并且一些 Ps 是 Qs，那么一些 Ps 就不是 R。
* (3′)如果 a 是 P，并且所有的 Ps 都是 Q，那么 a 就是 Q。

(1′)、(2′)和(3′)似乎会产生一些直观上对于字母“a”、“b”、“P”、“Q”和“R”的适当替换而言必须为真的句子。而像“如果”、“和”、“一些”、“所有”等等这样的表达，作为典型的逻辑表达式，似乎在不同的话语领域中都是广泛适用的。但逻辑真理是或应该是形式的这个观念显然并不被普遍接受。即使在那些接受这个观念的人中，对于决定任意句子形式的一般性标准几乎没有任何一致意见。[1]

关于逻辑真理的一个显著事实是，许多人认为富有形式化的语言的逻辑真理集可以用标准数学的概念来描述。特别地，根据某些观点，这种语言的逻辑真理集总是可以由该语言中某个演算推导出的句子集合来表征。而根据更广泛的观点，这种语言的逻辑真理集可以被认定为在某个数学解释范围内都成立的句子集合（其中的成立与其形式的所有替代实例句子都为真的条件有关，但又与之不同；详见下文第 2.3 节）。早期数理逻辑的一个主要成就正是精确地展示了如何用标准数学的概念来描述推导和成立的概念（第 2.2 节和第 2.3 节对标准量化语言的推导和成立的数学描述进行了基本说明，并提供了其他条目的参考）。

在本条目的第一部分中，我们将以非常广泛的概述来描述有关如何理解与逻辑真理相关的模态和形式性的主要现有观点。（关于这些观点的更详细处理可在下面提到的其他条目中找到，尤其是关于分析/综合区分和逻辑常量的条目。）在第二部分中，我们将以概述的形式描述一组哲学问题，这些问题在考虑逻辑真理的尝试数学描述时会出现。这些描述是否正确或以何种方式正确与我们对模态和形式性的具体理解的问题密切相关。[2]

---

## 1. 逻辑真理的本质

### 1.1 模态性

正如我们上面所说的，似乎普遍认为，如果存在任何逻辑真理，那么逻辑真理应该是不能为假的，或者等价地说，它应该是必须为真的。但正如我们也说过的，关于相关模态的具体特征几乎没有任何共识。

除了那些完全拒绝逻辑真理概念的人，或者那些虽然接受逻辑真理但拒绝逻辑形式概念的人，广泛认同的观点是，逻辑真理的模态力量至少部分应归因于它作为“形式”模式（如（1'）-（3'））中原理字母可能值的真实普遍概括的特例。（这些值可以是表达式，但不一定是。）在可能是最古老的理解逻辑模态的方式上，这种模态力量完全归因于这个属性：因此，例如，根据这种观点，说（1）必须为真只能意味着（1）是真实普遍概括“对于所有合适的 P，Q，a 和 b，如果 a 只有在 b 是 Q 的情况下才是 P，且 a 是 P，则 b 是 Q”的特例。根据一种传统的（但不无争议的）解释，亚里士多德声称，如果前提为真，则推理的结论必须为真，应该以这种方式理解。在《先分析》的一段著名的文字中，他说：“一个推理是一种言辞（logos），在其中，假定了某些事情，由于它们的必然性（ex anankes），会产生与所假定的事情不同的结果”（24b18-20）。将（2）视为一个推理，其中“假定的事情”是（2a）和（2b），而“必然产生的事情”是（2c）：

* （2a）没有欲望是自愿的。
* (2b)一些信念是欲望。
* (2c)一些信念是非自愿的。

根据我们所描述的解释，亚里士多德的观点是说(2c)是从(2a)和(2b)的必然结果，这意味着(2)是真正的普遍概括“对于所有合适的 P、Q 和 R，如果没有 Q 是 R，而一些 Ps 是 Qs，那么一些 Ps 就不是 R”。关于这种解释，请参见亚历山大·阿弗罗迪西亚斯（Alexander of Aphrodisias）208.16（引自Łukasiewicz 1957，§41），博尔扎诺（Bolzano）（1837，§155）和Łukasiewicz（1957，§5）。

在许多其他古代和中世纪的逻辑学家中，“必须”主张被理解为关于实际事物的普遍概括（即使它们并不总是被理解为关于“形式”模式的普遍概括）。特别突出的是迪奥多罗斯的观点，即命题只有在任何时候都为真时才是必然的（参见Mates 1961，III，§3）。请注意，这解释了这样的观念：(2)必须为真，但是，“人们看电视”可能是假的，因为这个句子在迪奥多罗斯的时代显然不是真的。迪奥多罗斯的观点似乎在中世纪非常普遍，当时的作者如威廉·谢伍德和沃尔特·伯利似乎将像(2)这样的条件句的感知必然性理解为在任何时候都为真（参见Knuuttila 1982，第348-9页）。将必然性理解为永恒性在后来的作者中也很常见；例如，参见康德的《纯粹理性批判》，B 184。支持亚里士多德和迪奥多罗斯观点的上述解释的一个有利因素是，我们经常使用情态表达方式来强调仅仅基于实际世界的普遍概括所导出的条件句的结果，如“如果汽油价格上涨，经济必然放缓”。

许多作者认为，这种观点并不能完全解释逻辑真理的模态意义。在哲学史上，一种现今非常普遍但（显然）较晚出现的观点是，逻辑真理的必然性不仅意味着某些关于实际事物的概括成立，而且还意味着在一系列反事实情况下该真理也将成立。莱布尼兹将这种特性赋予了逻辑和几何等必然真理，并似乎是最早提到反事实情况为“可能的宇宙”或“世界”的人之一（参见给布尔盖的信，第572-3页，对他的观点进行了明确的陈述，并与前一段的观点进行了对比；Knuuttila 1982年，第353页及以下发现了关于反事实情况和必然性的最早透明的讨论，这些讨论出现在敦斯·斯科特和布里丹的著作中；另请参阅关于中世纪的模态理论的条目）。在当代的著作中，将必然性理解为在所有反事实情况下成立的真理，并且认为逻辑真理在这个意义上是必然的观点非常普遍——尽管许多作者，也许是大多数作者，采取了“还原主义”的模态观点，认为反事实情况的讨论只不过是对某些实现（可能是抽象的）事物（如语言描述）的伪装。甚至莱布尼兹似乎也认为他的“可能的宇宙”是上帝心中的想法（有关这一领域当代争论的介绍，请参见Lewis 1986年的著作）。

然而，即使在莱布尼兹之后直到现在，许多逻辑学家似乎都避免承认在所有（实际和）反事实情况下真理的必然性。因此，与他上面提到的对亚里士多德的解释一致，波尔查诺将必然命题描述为其否定与纯粹的普遍真理不相容的命题（参见波尔查诺1837年，§119）。弗雷格说：“必然判断（即大致上以“必然地”开头并统领其余内容的判断）与断言判断的区别在于，它暗示了可以从中推导出命题的普遍判断的存在，而在断言判断的情况下，缺乏这样的暗示”（弗雷格1879年，§4）。塔斯基甚至更接近传统上归因于亚里士多德的观点，因为很明显，对他来说，如果（2a）和（2b）为真，则说例如（2c）“必然”为真，就是说（2）是“形式”概括“对于所有适当的P，Q和R，如果没有Q是R且一些Ps是Qs，则一些Ps不是R”的一个特例（参见塔斯基1936a，第411、415、417页，或塔斯基1936b中的相应段落；另见雷1996年）。奎因以明确拒绝任何不能用关于实际世界的普遍概括来理解的形式性而闻名（尤其是奎因1963年）。在其中一些情况下，这种态度是由于对被认为尚未达到完全可尊重的科学地位的概念的不信任，如强模态概念；在这些经常从事逻辑学的作者中，这种态度通常伴随着将逻辑真理描述为有效性的一种形式的建议（如下文2.3所述）。 （参见威廉姆森2013年，第章） 在2017年，对于逻辑真理被视为基于其逻辑形式的真实普遍概括的实例的观点的最新认可，基于这一观点的科学或“推导”的富有成果，尽管不是对模态概念的蔑视。)

根据Beall和Restall（2000年，2006年）最近提出的观点，他们称之为“逻辑多元主义”，逻辑真理的概念承认逻辑真理在一系列项目或“案例”中都是真实的，并且其必然性在于这种一般性主张的真实性（参见Beall和Restall 2006年，第24页）。然而，逻辑真理的概念并没有将一组唯一的“案例”作为特权来确定概念的范围，或者说，逻辑形式上的普遍概括可以通过不同的同样可接受的量化范围进行解释；相反，有许多这样同样可接受的范围和相应的“逻辑真理”的扩展，可以根据上下文的兴趣选择。这意味着，对于逻辑多元主义者来说，许多集合都有权被称为“逻辑真理的集合”（和“逻辑必然性的集合”），每个集合都在适当的上下文中。（参见逻辑多元主义词条。）根据Rumfitt（2015年）提出的最近一种将逻辑必然性视为一种广义的理解，逻辑真理的必然性仅在于它在所有特定主题的推理方式集合下都可以使用（前提是这些集合满足某些结构规则）；或者更粗略地说，只要涉及推理，它就是适用的。在这种观点下，对逻辑真理所涉及的模态的更具实质性的理解再次不是必需的。值得注意的是，尽管他假设了各种特定主题的蕴涵关系，但Rumfitt拒绝了Beall和Restall所说的逻辑真理的多元主义（参见他2015年，第56页，注23），实际上认为标准量化语言中的逻辑真理集合由标准古典逻辑所特征化。

然而，人们认为像（1）-（3）这样的真理，以及逻辑真理普遍地“不能”是假的或者“必须”是真的，还有另一种意义上的认识论。这是一个古老的观察，至少可以追溯到柏拉图，即我们有时候似乎没有任何经验依据，但某些真理在我们看来是直观知道的。那些可以在非经验基础上被认识的真理被称为先验的（这个表达开始在莱布尼兹时代被用于这个意义上；参见他的《Primæ Veritates》，第518页）。数学的公理和定理，词典和规定性定义，以及典型的逻辑真理都被给出作为例子。如果接受逻辑真理是先验的，自然而然地会认为它们必须是真的，或者至少在强烈的意义上，它们的否定与我们能够非经验地知道的东西是不相容的。

假设这种先验知识以某种方式存在，最近的哲学研究一直致力于探讨它的可能性问题。一种传统的（“理性主义者”）观点是，思维具备一种特殊能力，通过检验纯粹的思想或概念之间的关系来感知真理，并且通过正确运用这种能力得出的真理被视为先验知识（参见，例如，莱布尼兹的《形而上学演讲》，§§23以下；罗素1912年，第105页；BonJour 1998年是这种观点的一个最新例子）。相反的传统（“经验主义者”）观点是，没有理由假设存在这种能力，甚至有理由不假设它，比如说它是“神秘的”（参见有关理性主义与经验主义的条目）。一些哲学家，无论是经验主义者还是其他派别，试图将先验知识解释为某种公约或默认同意某些句子（如（1））和使用某些规则的结果。霍布斯在他对笛卡尔的《冥思》的反驳中（“第三反驳”，IV，第608页）提出了一种广泛的公约主义观点。后来的维特根斯坦（根据一种解释）和卡尔纳普是“默认同意”和公约主义观点的杰出支持者（参见例如维特根斯坦1978年，I.9，I.142；卡尔纳普1939年，§12，和1963年，第916页，对卡尔纳普观点的非正式阐述；另请参阅Coffa 1991年，第14章和第17章）。严格来说，维特根斯坦和卡尔纳普认为逻辑真理根本不表达命题，只是一些毫无意义的句子，由于某种原因我们发现有用于操作；因此，我们只能在某种程度上谈论对它们（先验）的知识。 然而，在最近的“默契协议”和传统主义观点的典型代表中，如博格霍辛（1997），拒绝了逻辑真理不表达命题的主张，并接受了协议的存在提供了对这些命题的完全先验知识的观点。

“理性能力”观点和“传统主义”观点一致认为，在广义上，逻辑真理的认识基础在于我们分析其表达的意义的能力，无论这些意义被理解为约定还是客观观念。因此，可以说它们通过其分析性来解释逻辑真理的先验性。（参见关于分析/综合区分的条目。）康德对逻辑真理先验性的解释似乎更难以解脱。康德的许多评论家指出，如果康德的观点是所有逻辑真理都是分析的，这似乎与他对分析真理的描述相矛盾。康德将分析真理描述为谓词的概念包含在或与主语的概念相同，并且更基本地，它们的否定是矛盾的。但是，这些评论家认为，这些描述似乎只适用于严格的重言式，如“人是人”或“有胡子的人是人”，而似乎排除了康德自己认为是逻辑真理的很多内容，包括诸如（2）的三段论（参见例如米尔1843年，第二卷，第六章，第5节；胡塞尔1901年，第二卷，第2部分，第66节；尼尔和尼尔1962年，第357-8页；帕森斯1967年；马迪1999年）。这一点以及康德在这个问题上缺乏明确表态的现象，至少使马迪（1999年）和汉纳（2001年）考虑（尽管不接受）康德将一些逻辑真理视为综合先验的假设。根据这种解释，许多逻辑真理的先验性将通过它们对于超越主体的认知结构的要求来解释，特别是通过判断的形式。（参见例如卡波齐和朗卡利亚2009年），将康德的观点归因于所有逻辑真理都是分析的是标准解释。 在这种解释下，康德的判断形式可以被视为可分析的逻辑概念（参见例如Allison 1983，第126页以下）。对这种解释的广泛辩护认为康德将所有逻辑真理视为分析的，并对上述评论者的异议进行了辩护，详见Hanna（2001），§3.1。Hanna（2006）中发展了一种实质性的康德式当代逻辑认识论理论，探讨了逻辑的先验性及其在认知中的根源；该理论不试图通过分析性来解释逻辑的先验性，而是依赖于一种特定类型的逻辑直觉和特定的认知逻辑能力。（还可以参考Maddy 2007提到的反先验和反分析但广义上康德式的观点。)

早期的维特根斯坦与康德一样，认为逻辑表达式不像非逻辑表达式那样表达意义（见1921年，4.0312）。与这个观点一致，他声称逻辑真理不“说”任何东西（1921年，6.11）。但他似乎拒绝了传统主义和“默契协议”观点（1921年，6.124，6.1223）。并不是因为逻辑真理不说任何东西，因为它们只是某种外在有用操作的工具；相反，它们“展示”了世界在我们决定之外独立拥有的“逻辑属性”（1921年，6.12，6.13）。在这个框架下，先验性是如何解释的尚不清楚。维特根斯坦称逻辑真理为分析的（1921年，6.11），并说“仅凭符号就可以认识到它们是真实的”（1921年，6.113）。他似乎指的是一个人可以通过检查适当表示其真值内容的表达式，来“看到”真值逻辑的逻辑真理必须是有效的事实（1921年，6.1203，6.122）。但是，将这个想法扩展到量化逻辑是有问题的，尽管维特根斯坦试图将量化逻辑归约为真值逻辑；正如我们现在所知，没有算法可以判断一个量化句子是否有效。也许更重要的是，维特根斯坦没有明确解释为什么原则上世界的所有“逻辑属性”都应该能够在一个适当的符号表示中得到反映。

反对“理性能力”、“传统主义者”、“康德主义者”和早期的维特根斯坦主义观点，其他哲学家，尤其是激进经验主义者和自然主义者（更不用说认识论怀疑论者），否认先验知识的存在（因此间接否认分析命题的存在），并提出只存在先验性的幻觉。通常，这种否认伴随着对其他观点的批评。穆勒认为，像（2）这样的命题之所以似乎是先验的，仅仅是因为它们是我们从经验中得出的早期和非常熟悉的普遍化的特例，比如“对于所有适当的P、Q和R，如果没有Q是R且一些P是Q，则一些P不是R”（参见穆勒1843年，第二卷，第八章）。波尔查诺持有类似的观点（参见波尔查诺1837年，第315节）。奎因（1936年，第III节）著名地批评了霍布斯主义观点，指出由于逻辑真理的数量是无限的，我们对它们的依据不能仅仅在于有限数量的明确约定，因为逻辑规则显然需要从有限数量的约定中推导出无限数量的逻辑真理（这是从卡罗尔1895年的论证中得出的，参见索姆斯2018年第10章的阐述和戈麦斯-托伦特2019年对该论证的批评）。后来的奎因（尤其是1954年）批评了卡尔纳普的传统主义观点，主要是因为似乎没有非模糊的传统真理和被默认留待反驳的真理之间的区别，而且在某种程度上，一些真理是传统或“默认协议”的产物，这种协议特征上类似于许多科学假设和其他看似典范非分析的假设。（参见格赖斯和斯特劳森1956年以及卡尔纳普1963年对这些批评的反应。奎因（尤其是1951年）还认为，一般接受的句子，包括典范的逻辑真理，最好被看作是类似于假设的东西，用来处理经验，如果有助于理解经验世界，可以拒绝其中任何一个（参见普特南1968年的类似观点和一个所谓的例子）。根据这种观点，没有严格的先验理由可以支持任何真理。近期出现的三种微妙的反先验主义立场是麦迪（2002年，2007年）、阿祖尼（2006年，2008年）和谢尔（2013年）。对于麦迪来说，逻辑真理是后验的，但它们不能仅通过观察和实验来被证伪，因为它们是我们思考的非常基本的方式的一部分，深深地嵌入在我们的概念机制中（这个概念机制在结构上类似于康德所假设的超验理解的组织）。同样，对于阿祖尼来说，逻辑真理同样是后验的，尽管我们认为它们必须是真实的感觉来自于它们在心理上的深深根植；然而，与麦迪不同，阿祖尼认为我们推理的逻辑规则对内省是不透明的。谢尔试图将奎因的逻辑认识论与对逻辑真理的模态基础的形而上现实主义观点结合起来。

一种先验知识的方式是逻辑真理（如（1））的可能性，如果先验知识可以得知（1）是逻辑真理的事实，或者得知普遍概括“对于所有合适的 a、P、b 和 Q，如果 a 只有在 b 是 Q 的情况下才是 P，且 a 是 P，则 b 是 Q”的事实。在逻辑认识论中，一种特别值得注意的怀疑考虑是，推理性先验知识这些事实的可能性似乎面临循环性或无限回归的问题。如果我们要获得这些事实的推理性先验知识，那么我们可能会在某个时候遵循逻辑规则，包括可能依赖于（1）是逻辑真理的事实或普遍概括“对于所有合适的 a、P、b 和 Q，如果 a 只有在 b 是 Q 的情况下才是 P，且 a 是 P，则 b 是 Q”的真实性的莫德斯·波奈斯规则。无论如何，显然，并非所有这种后一种类型的主张，表达某个真理是逻辑真理或某个逻辑模式是保真的，都可以在没有使用一些同样的逻辑规则的先验推理证明的情况下得到。这一点再次可以从卡罗尔（1895）合理地推导出来。关于这一考虑以及反怀疑的回应的一些最近文献包括邓梅特（1973，1991）和博戈西安（2000）。

### 1.2 形式性

在大多数观点中，即使逻辑真理在所有反事实情况下都是真实的，先验的和分析的，这也不足以成为一个真理是逻辑真理的充分条件。在大多数观点中，逻辑真理还必须在某种意义上是“形式的”，这至少意味着其形式的所有替代实例也是逻辑真理（因此，根据前面的假设，在所有反事实情况下都是真实的，先验的和分析的）。以Albert of Saxony（Bocheński 1956，§30.07引用）的一个略微修改的例子为例，“如果一个寡妇跑步，那么一个女性跑步”应该在所有反事实情况下都是真实的，先验的和分析的，如果有任何真理的话。然而，“如果一个寡妇跑步，那么一根木头跑步”是其形式的一个替代实例，事实上，即使在逻辑形式的任何观点上也具有相同的形式（类似于“如果一个P Qs，那么一个R Qs”），但它甚至不是简单地真实的。因此，在大多数观点中，“如果一个寡妇跑步，那么一个女性跑步”不是一个逻辑真理。

对于接受形式性观念的哲学家来说，正如我们上面所说的，一个句子的逻辑形式是一个特定的模式，在这个模式中，非模式字母的表达在不同领域的话语中广泛适用。[6]如果这个模式是逻辑真理的形式，那么它的所有替代实例都是逻辑真理。逻辑特别关注（替代实例的）模式的观念，这在亚里士多德和斯多噶哲学家中显而易见，他们通常用“图形”来翻译的词恰恰就是“模式”。在亚里士多德那里，图形实际上是一组我们现在称之为“模式”的更抽象形式，比如（2′）。我们的模式更接近亚里士多德的三段论中的情态；但在亚里士多德那里似乎没有“情态”的词（除了可能是42b30的ptoseon或43a10的tropon；参见Smith 1989，第148-9页），因此对形式模式的概念没有普遍的反思。亚历山大·阿弗罗迪西亚斯对形式模式或情态与三段论的物质（hyle）之间的对比进行了明确的反思（53.28ff.，由Bocheński 1956，§24.06引用），并且从那时起就一直存在。物质是模式字母的值。

逻辑形式中的非图式表达，即逻辑表达式，在不同领域的话语中广泛适用的观念，也从逻辑的开始就存在，并在所有伟大的逻辑学家中反复出现。这一观念间接地出现在亚里士多德的许多段落中，例如以下内容：“所有科学都通过共同的事物相互关联（我称之为共同的，是指它们用来从中进行证明的事物，而不是在它们中进行证明的事物或关于它们的事物）；逻辑与它们都有关系，因为它是一门试图普遍证明共同事物的科学”（《后分析学》，77a26-9）；“我们不需要掌握所有反驳的事物，只需要掌握逻辑的特征性事物；因为这些事物对于每一种技术和能力都是共同的”（《诡辩论证》，170a34-5）。（在这些文本中，“逻辑”是对dialektike的适当翻译；参见Kneale和Kneale 1962，I，§3，他们告诉我们logike在其当前含义上首次被亚历山大的亚历山大使用。）弗雷格说，“最坚实的证明显然是纯粹的逻辑，它不考虑事物的特殊性，仅基于所有知识所依赖的法则”（1879年，第48页；参见1885年，算术概念的普遍适用性被视为其逻辑性的标志）。同样的观念在塔斯基（1941年，第二章，§6）中也很明显。

逻辑表达式包括“如果”、“和”、“一些”、“所有”等典型情况，它们必须在不同的话语领域中广泛适用，这是我们可以称之为“关于逻辑表达式的最小论点”。但除此之外，关于什么通用特征使一个表达式具有逻辑性，以及因此决定一个句子的逻辑形式的问题，几乎没有任何一致的意见。大多数支持逻辑是形式的作者试图超越最小论点。普遍认为，在不同的话语领域中广泛适用只是逻辑表达式的必要条件，而不是充分条件；例如，大多数介词可能是广泛适用的，但它们并不是根据任何隐含的通用概念而被视为逻辑表达式。丰富逻辑表达式概念的尝试通常旨在提供进一步的属性，这些属性共同构成了一个表达式具有逻辑性的必要和充分条件。

在这样的描述中使用了一个概念，这个概念在亚里士多德那里也有出现，即逻辑表达式严格来说并不表示任何东西；或者说它们不像名词、形容词和动词那样表示某种东西。“逻辑[dialektike]不是关于确定事物或任何一个类别的科学”（《后分析》77a32-3）。我们看到这个观念在康德和早期的维特根斯坦那里仍然存在。它在中世纪重新出现。将“非谓词性”一词应用于表达式的主要意义大致是这个语义意义（参见Kretzmann 1982，212页以下）。布里丹和其他晚期中世纪逻辑学家提出，非谓词性表达式构成了句子的“物质”，而非谓词性表达式构成了句子的“形式”（参见Bocheński 1956，§26.11引用的文本）。 （在一个稍微不同的、更早的语法意义上，非谓词性表达式被认为是不能用作分类命题中的主语或谓语的表达式；参见Kretzmann 1982，211-2页。）非谓词性的概念有些不精确，但有严重的怀疑它能否用来描述逻辑表达式的概念，无论这个概念是什么。大多数介词和副词可能是非谓词性的，但它们也可能是非逻辑表达式。相反，像“是相同的”、“与自身相同”、“既相同又不相同于自身”等被最近的逻辑坚决视为逻辑的谓词，可能是谓词性的。（当然，从语法意义上讲，它们是谓词性的，就像介词和副词一样明显是非谓词性的。）

大多数其他提议试图以某种其他方式勾勒出亚里士多德的逻辑表达式具有某种“非实质”含义的观念，以便将其作为逻辑性的必要和充分条件。最近的一个建议是，逻辑表达式是那些不允许我们区分不同个体的表达式。其中一种具体化的方式是将逻辑表达式描述为在任何特定个体域上的外延或指称在该域的置换下保持不变的表达式。（参见塔斯基和吉万特1987年，第57页，以及塔斯基1966年；有关相关提议还可参见麦卡锡1981年，谢尔1991年第3章，麦基1996年，费弗曼1999年，博纳伊2008年，伍兹2016年和格里菲斯和帕索2022年等。）域的置换是域与自身之间的一一对应关系。例如，如果D是域{亚里士多德，凯撒，拿破仑，克里普克}，一个置换是将每个人分配给自己的对应关系；另一个置换是将凯撒分配给亚里士多德（在数学符号中，P(亚里士多德)=凯撒），将拿破仑分配给凯撒，将克里普克分配给拿破仑，将亚里士多德分配给克里普克。表达式在域上的外延在该域的置换下保持不变意味着在置换下，该外延的诱导图像就是该外延本身（在置换Q下，外延的诱导图像是将每个对象o替换为对象Q(o)后的外延）。在上述置换P下，“哲学家”的外延并不保持不变，因为该外延是{亚里士多德，克里普克}，在P下的诱导图像是{凯撒，亚里士多德}。这对于该提议是有利的，因为“哲学家”显然不是广泛适用的，因此在大多数观点上是非逻辑的。另一方面，“相同”谓词在D上的外延是一组成对的集合。

> {⟨亚里士多德, Aristotle⟩,⟨凯撒, Caesar⟩,⟨拿破仑, Napoleon⟩,⟨克里普基, Kripke⟩};

它在 P 的诱导图像下，以及在 D 的任何其他排列下的诱导图像，都是同一个集合（读者可以检查）；因此，这对于提议是有利的。（其他典范的逻辑表达式在域上接收到更复杂的扩展，但它们接收到的扩展在排列下是不变的。例如，在理解域上的“和”扩展的一种常见方式上，这是一个函数，它将每个对⟨S1，S2⟩分配给 S1 和 S2 是从 D 中抽取的无限序列的对象的交集；而这个函数是排列不变的。）提议的一个问题是，许多看起来明显非逻辑的表达式，因为它们不适用广泛，却在排列下是不变的，因此无法区分不同的个体。最简单的例子可能是在任何域上都具有空扩展的非逻辑谓词，因此也具有空诱导图像。“男性寡妇”就是一个例子；它的不同版本可以用作逻辑性的不同版本的反例，即排列不变性的概念（参见 Gómez-Torrente 2002），而且不清楚提议者是否能以任何非特定的方式避免这个问题。

另一种近期流行的描述亚里士多德关于逻辑表达式“非实质性”的语义直觉的方式，是借助于“纯推理性”的概念。这个想法是，逻辑表达式是那些在某种意义上由“纯粹推理性”规则给出意义的表达式。（参见Kneale 1956，Hacking 1979，Peacocke 1987，Hodes 2004等人的观点。）纯推理规则的一个必要属性是，它们仅调节语言项之间的推理转换，而不调节超语言可断言条件与语言项之间的关系，或者调节由这些语言项许可的行为。某个推理规则允许你在下雨时说“下雨了”，但它并不是“纯推理性”的。然而，当有人说“A是一个寡妇”时，一条允许你说“A是一个丈夫在她之前去世的女性”这样的规则，并不会立即被排除为纯推理性。现在，可以假设“寡妇”的意义在某种意义上是由这个最后一条规则以及可能与之相反的规则共同给出的，后者允许你在有人说“A是一个丈夫在她之前去世的女性”时说“A是一个寡妇”。但是，“寡妇”不是一个逻辑表达式，因为它的适用范围有限；因此，需要假设“纯推理性”规则应该满足更多必要的属性。相关文献中提出了许多这样的条件（参见例如Belnap 1962（对Prior 1960的回应），Hacking 1979和Hodes 2004）。然而，即使在这些方式中加强了纯推理性的概念，问题仍然存在。大多数情况下，提议是一个表达式只有在某些纯推理规则给出其整个意义，包括其意义或需要掌握的使用方面的集合，才被认为是逻辑的（如Kneale 1956，Peacocke 1987和Hodes 2004中所述）。然而，显然有一些典型的逻辑表达式附加了额外的意义，这种意义不能纯粹地通过推理来编码。 例如，涉及“全部”的归纳推理似乎是这个表达式的一部分，但很难看出它如何能够仅通过推理规则来编码（正如 Sainsbury 1991 年所指出的，第 316-7 页；另请参见 Dummett 1991 年第 12 章）。该提案的不同版本是说，一个表达式只有在某些纯粹的推理规则足以确定其范围时才是逻辑的（如 Hacking 1979 年所述）。但显然，如果“相同”这个表达式的范围是由一组纯粹的推理规则来确定的，而这些规则又是其意义的一部分，那么“相同且不是男性寡妇”这个表达式的范围也同样由相同的规则确定，这些规则可以说是其意义的一部分；然而，“相同且不是男性寡妇”并不是一个逻辑表达式（参见 Gómez-Torrente 2002 年）。

鉴于这些和其他类型的问题，一些哲学家提出逻辑表达式的概念与必要和充分条件无关，而只与某些与广泛适用条件相关的必要条件相关联，例如“对于科学推理的系统化非常相关的条件”（参见 Warmbrōd 1999 年的这种立场）。其他人（Gómez-Torrente 2021 年）提出，如果这些条件与语义“无实质性”的想法不太相关，并且是实用的和适当模糊的，则可能存在一组必要和充分条件；例如，许多表达式直接被广泛适用条件排除；而介词可能被某种隐含条件排除，例如“逻辑表达式必须是研究对解决重要问题和推理谬误有用的表达式”。确实，这些提案放弃了语义“无实质性”的广义直觉，因此可能在某种程度上令人不满意。

一些哲学家对常规特征的问题反应更加激进，声称逻辑和非逻辑表达之间的区别必须是无意义的，因此完全拒绝了逻辑形式的概念。（参见 Orayen 1989，第 4 章，§2.2; Etchemendy 1990，第 9 章; Read 1994; Priest 2001.）这些哲学家通常将逻辑真理视为与纯粹分析真理概念大致等同的概念。但他们更容易被指责放弃了扩展直觉，这与前一段的建议相比更加明显。

要更全面地讨论形式和逻辑表达的思想，请参阅逻辑常量词条和 MacFarlane 2000。

## 2. 逻辑真理的数学特征

### 2.1 形式化

现代逻辑成功的一个重要原因是其使用了所谓的“形式化”。这个术语通常用来涵盖几个不同（但相关）的现象，所有这些现象都存在于弗雷格（1879）的著作中。其中之一是使用一组完全指定的人工符号，逻辑学家为其分配明确的含义，这些含义与相应的自然语言表达式的含义相关，但更加明确地界定，并且剥离了那些在逻辑学家看来与真值条件内容无关的注释；这对于表示自然语言的逻辑表达式的符号尤其如此。另一个现象是为由人工符号构成的公式规定一个完全精确的语法，这些公式将是自然语言中相关句子的“剥离”版本；这个语法相当于一个从基本符号开始生成公式的算法。第三个现象是假设一个具有非常明确的公理和推理规则规范的演绎演算法，用于人工公式（见下一节）；这样的演算法旨在以某种方式表示与公式相关的演绎推理，但与普通推理不同，演算法中的推导不包含任何不是明确应用指定的推理规则的步骤。

弗雷格式逻辑学家不是试图表征像英语这样的自然语言的逻辑真理，而是试图表征弗雷格形式化语言中与那些逻辑真理“剥离”相关的人工公式。在一阶弗雷格形式化语言中，这些公式中包含了（1）、（2）和（3）的人工对应物，例如...

* ((坏(死亡)→好(生活)) & 坏(死亡))→好(生活).
* (∀x(欲望(x)→¬自愿(x)) & ∃x(信念(x) & 欲望(x)))
  →∃x(信念(x) & ¬自愿(x)).
* (猫（drasha）和∀x（猫（x）→神秘（x））)
  →神秘（drasha）。

（参见逻辑，经典条目。弗雷格形式化语言还包括经典的高阶语言。 （参见逻辑，二阶和高阶条目。）这些语言中的逻辑表达式通常被认为是真理函数、量词、恒等和其他可以用这些符号来定义的符号（但对于高阶量词的地位存在不同意见；请参见下面的 2.4.3）。

对人工公式的限制引发了一系列关于弗雷格企业在自然语言中划分逻辑真理的确切价值的问题；这个价值的很大一部分取决于被剥离自然语言表达式的注释与形式化语言的标准逻辑表达式相对应的数量和重要性。但无论对形式化的确切价值持何种观点，都很少有疑问的是，它对逻辑目的非常有启发性。一个原因是，有时相对清楚的是，被剥离的注释与真值条件内容无关（这在使用自然语言逻辑表达式进行数学运算时尤为明显）。另一个原因是，人工公式的语法和含义非常明确，这使得可以提出只使用标准数学概念来表征逻辑真理的理论。这反过来又允许通过标准数学技术来研究这些表征概念。接下来的两节大致描述了两种主要的表征方法。[7]

### 2.2 推导性

我们刚才提到，弗雷格逻辑学家的形式化语法可以看作是从基本人工符号生成公式的算法。这是非常字面的意思。正如数理逻辑学家从很早以前就清楚的那样，基本符号可以被看作是（或者通过）自然数，并且人工语法中的形成规则可以被看作是（或者通过）简单可计算的算术运算。然后，可以将语法公式看作是（或者通过）在一些有限次应用这些运算后从基本数得到的数，并且它们的集合可以用算术和集合论的概念来表征（事实上，只需算术就足够了，借助一些技巧）。

完全相同的情况也适用于在形式化演绎演算中可推导的公式集合。在弗雷格演算C中，公式F可推导出来，当且仅当F是在C的公理经过有限次应用C的推理规则后获得的。但是，这些公理是通过语法形成过程构建的某些公式，因此它们可以被视为（或者编码为）某些数字；而推理规则又可以被视为（或者编码为）某些可计算的算术运算。因此，可推导的公式可以被视为（或者编码为）在推理操作的有限次应用后从公理数字获得的数字，并且它们的集合可以再次用标准数学的概念（再次，算术足够）来描述。

在弗雷格革命之后的时期，似乎普遍认为任何弗雷格语言的逻辑真理集可以被表征为在某个适当选择的演算中可推导的公式集（因此，本质上是通过某些算术运算得到的数字集）。弗雷格本人在他的《概念符号》中谈到高阶语言时说，通过形式化（在上述第三个意义上），“我们得到了一小部分法则，其中，如果我们将规则中包含的法则加入其中，所有法则的内容都包含在内，尽管是在未发展的状态下”（弗雷格 1879 年，§13）。这个想法直接来自罗素对数学和逻辑的认识（参见罗素 1903 年，第一章，§10；罗素 1920 年，第 194-5 页）以及他的论点：“借助十个推理原则和十个其他一般逻辑性质的前提（…），所有数学都可以严格和形式地推导出来”（罗素 1903 年，第一章，§4）。参见伯奈斯（1930 年，第 239 页）：“[通过形式化]可以明显看出，所有逻辑推理（…）都可以归结为有限数量的逻辑基本过程，这些过程可以被准确和完全地列举出来”。在他关于逻辑推论的论文的开头段落中，塔斯基（1936a，1936b）说，在哥德尔的不完全性定理出现之前，这种信念是普遍存在的（有关这些定理对这个问题的影响，请参见下面的第 2.4.3 小节）。近年来，显然受到塔斯基论证的影响，比如在第 2.4.3 小节末尾提到的那个论证，对推导特征的充分性的信念似乎有所减弱（例如，参见普拉维茨 1985 年的类似评价）。

### 2.3 模型论的有效性

即使在对逻辑真理中存在的方式最为谨慎的理解中，只有当没有替代其逻辑形式的句子是假的时候，一个句子才是逻辑真理。（只有那些拒绝逻辑形式概念的人才会拒绝这个观点。）众所周知，即使这个特性是必要的，但并不足以清楚地使一个句子成为逻辑真理。也许有一个句子具有这个特性，但实际上并不是真正的逻辑真理，因为可以为变量和逻辑形式中的示意字分配一些未表达的含义，在这些含义下，该形式将成为一个假句子。另一方面，认为只要没有对变量和逻辑形式中的示意字进行集体赋值，这个句子就是逻辑真理并不明显是错误的。当一个句子具有这个特性时，称其为普遍有效。用于数学化描述逻辑真理的标准方法，与可导性方法不同，总是使用普遍有效性的某个版本，将其在每种情况下都提出为逻辑真理的必要条件和充分条件。请注意，如果一个句子是普遍有效的，那么即使它不是逻辑真理，它也是真的。因此，所有普遍有效的句子至少在这个意义上都是正确的。

显然，第一个使用普遍有效性的版本并明确提出它既是逻辑真理的必要条件又是充分条件的是博尔扎诺（见博尔扎诺1837年，§148；以及科法1991年，第33-34页，关于优先权的主张）。这个想法在19世纪的其他数学家中也存在（参见例如Jané 2006年），并且在希尔伯特的学派中很常见。塔斯基（1936a，1936b）是第一个以完全明确的方式指出数学家们使用的普遍有效性版本如何可以用标准数学概念来表征的人，在弗雷格形式化语言具有算法语法的情况下。基本上，塔斯基的表征在今天被广泛使用，以所谓的模型论的有效性概念的形式存在，并且似乎可以公正地说，通常认为这个概念对于弗雷格语言的逻辑真理集合给出了一个相当好的界定。

模型论有效性的概念模仿了普遍有效性的概念，但仅仅依靠Tarski（1935年）为语义概念（如满足性、可定义性和真理）的表征而发展的集合论工具。给定一个Fregean语言，语言的结构是一个由集合论对象组成的对象，该对象由从该域到其非逻辑常量的扩展的分配组成。大多数逻辑学家认为结构代表了一种意义的分配：它的域给出了一阶变量（和高阶变量的范围），结构分配给非逻辑常量的扩展是这些表达式可能具有的“意义”。使用Tarskian工具，可以为Fregean语言的公式定义在集合论结构中的真理（或满足）的概念（相对于将域中的对象分配给每个变量的无限序列）。最后，定义一个公式在模型论上有效，当且仅当它在其语言的所有结构中都为真（相对于所有无限序列）。让我们将“F在所有结构中为真”缩写为“MTValid(F)”。模型论的表征使得“MTValid(F)”纯粹以集合论概念来定义。（关于Fregean语言的模型论有效性的概念在经典逻辑、二阶和高阶逻辑的条目中有详细解释；另请参阅模型论的条目。）[9]

（如果 F 是一个没有身份的一阶语言的公式，那么如果 F 的形式的没有替换实例是假的，这是 F 在模型论上有效的充分条件。事实证明，如果 F 在模型论上无效，那么它的形式的某些替换实例，其变量范围在自然数上，非逻辑常量是算术表达式，将是假的。这可以通过对 Löwenheim-Skolem 定理的细化来证明。有关逻辑、经典和 Quine 1970 年第 4 章的讨论和参考，请参见逻辑条目。对于高阶语言，没有类似的结果。）

“MTValid(F)”中的“MT”强调了模型论有效性与普遍有效性的不同。在普遍有效性的描述中出现的意义分配的概念是一个非常不精确和直观的概念，而在模型论有效性的表征中出现的结构的概念是一个相当精确和技术性的概念。显然，对于弗雷格形式化语言的结构的概念是最合理的，因为结构模拟了一个或多个意义分配使某个句子（的逻辑形式）为假的能力。正如我们将在后面提到的，相反的性质，即每个意义分配的有效性否定能力都由某个结构模拟，也是对结构概念的一个自然但更严格的要求。

### 2.4 充分性问题

在实践逻辑学家中，可导性和模型论有效性的概念在标准数学中是可定义的，这似乎是它们非常吸引人的特点。但是，这种吸引人的特点当然不能仅凭它本身来证明将任一概念作为逻辑真理的充分特征。在大多数观点中，通过数学化的逻辑真理的特征，我们试图勾勒出一组具有一些非数学属性的公式。这些属性因我们对形式和形式性的预理论概念而异。（在“预理论”中，它并不意味着“在任何理论活动之前”；在这个意义上，几乎不可能有“预理论”对逻辑真理的概念。在这个背景下，“预理论”是指“在数学化的理论活动之前”。）但是，在任何这样的概念中，都会有外部的、非数学的标准，可以用来评估数学化的特征是否充分。在最后一节中，我们将概述一些关于可导性和模型论有效性是否在这个意义上是充分的基本问题和结果。

#### 2.4.1 分析与形式性

对于模型论有效性的充分性，一个常见的反对意见是，它并没有对逻辑真理的概念进行概念分析，即使是对于弗雷格形式化语言的句子（参见例如Pap 1958，第159页；Kneale和Kneale 1962，第642页；Field 1989，第33-4页；Etchemendy 1990，第7章）。这种抱怨在那些倾向于将逻辑真理和纯粹分析性等同起来的作者中尤为常见（参见例如Kneale和Kneale，上述文献，Etchemendy 1990，第126页）。如果我们将逻辑真理的概念简单地看作是分析真理的概念，那么接受逻辑真理的概念与模型论有效性的概念没有太多关系是特别合理的，因为这个概念与分析性的概念没有太多关系。说一个公式在模型论上是有效的意味着在没有它为假的集合论结构中，而说一个公式在模型论上是无效的意味着存在集合论结构使其为假。但是，说一个句子是或不是分析的，很可能并不意味着关于集合论结构的存在与否的任何事情。请注意，我们可以出于同样的理由对可导性提出异议，因为说一个句子是或不是分析的，很可能并不意味着关于它是否是某种算法的产物的任何事情（参见Etchemendy 1990，第3页）。（Etchemendy 1990中另一个特殊而备受争议的主张是，形如“F是逻辑真理”或“F不是逻辑真理”的真实主张本身应该是逻辑真理（而相应的主张“MTValid(F)”和“Not MTValid(F)”则不是逻辑真理）。Etchemendy的主张在将逻辑真理看作是纯粹分析性的概念下可能是可辩护的，但在更传统的逻辑真理观念中则是值得怀疑的，因为谓词“是逻辑真理”甚至不是一个逻辑表达式。 有关讨论，请参阅 Gómez-Torrente 1998/9 和 Soames 1999 第 4 章。)

如果我们接受逻辑真理的概念具有与分析性无关的其他强模态特征，那么类似的“无概念分析”反对意见也可以提出；例如，如果我们接受逻辑真理的概念的一部分是逻辑真理在所有反事实情况下都是真实的，或者以某种其他强烈意义上的必然性。Sher（1996）接受了一个好的逻辑真理特征化应该用一个模态丰富的概念来给出的要求。然而，她认为模型论有效性的概念是强模态的，因此“无概念分析”反对意见实际上是错误的：说一个公式是模型论有效还是无效是在做一个数学存在或不存在的主张，根据 Sher 的观点，这些主张最好被解读为关于结构的可能性和必然性的主张。（Shalkowski 2004 认为 Sher 对模型论有效性的辩护是不充分的，基于某种关于逻辑必然性的形而上学概念。Etchemendy 2008 相关地认为 Sher 的辩护是基于对与逻辑真理相关的模态的不充分限制。另请参阅 Hanson 1997 中对 Sher 的批评讨论。）García-Carpintero（1993）提出了与 Sher 相关的观点：模型论有效性为 Fregean 语言提供了逻辑真理的（正确的）概念分析，因为集合论结构的概念实际上是可能意义分配的模态概念的一个微妙的细化。Azzouni（2006）第 9 章也在基于某种对逻辑真理中涉及的（强）模态的通俗观念的膨胀主义概念的基础上，辩护了模型论有效性提供了逻辑真理的正确概念分析的观点（尽管仅限于一阶语言）。

然而，集合论主张的标准观点并不将它们视为强模态主张——最多，其中一些是模态的，以最小的意义上它们是普遍概括或这些概括的特例。但无论如何，这是否构成对模型论有效性或可推导性的有力反对的基础尚不清楚，即使我们接受逻辑真理的概念是强模态的，也不清楚逻辑真理的良好特征化是否应该是一个概念分析。一个类比可能有所帮助。人们普遍认为，在标准数学中，例如递归性，对可计算性的概念的特征化在某种意义上是良好的特征化。注意，可计算性的概念是模态的，以一种适度强的意义；它似乎是关于像我们这样的存在如果摆脱了某些限制，可以用某些符号做什么——而不是关于现有的存在已经做过或将要做什么。然而，说某个函数是递归的并不是对它做出模态主张，而是对某个纯粹算术的主张。因此，递归性被广泛认为是对可计算性的良好特征化，但显然它并不提供概念分析。也许可以争论说，模型论的有效性或可推导性，或者两者都是相同的情况。

一些哲学家明确拒绝逻辑真理的良好描述应提供概念分析的要求，并且（至少为了论证的目的）不质疑集合论主张通常被视为非模态的观点，但他们认为集合论结构的宇宙以某种方式模拟了可能结构的宇宙（或者至少是可能的集合论结构的宇宙；参见 McGee 1992，Shapiro 1998，Sagi 2014）。在这种间接意义上，以模型论有效性为特征的描述将捕捉到逻辑真理通常被认为具有的强大模态力量的一部分。McGee（1992）为这个观点提供了一个优雅的论证：合理地认为，对于任何集合论结构，即使是由非数学个体构成的结构，无论是否实现，都存在一个与之同构但完全由纯集合构成的集合论结构；但是，任何这样的纯集合论结构在通常的观点下都是一个实现的存在；因此，每个可能的集合论结构都由一个集合论结构模拟，正如所期望的那样。（这一点的重要性在于，在弗雷格语言中，如果一个公式在一个结构中为真，则它在所有与之同构的结构中也为真。）

但是，即使一些可能的意义赋值不能直接由（实际的）集合论结构建模，模型论有效性（或可导性）在某种程度上可能在理论上是充分的。为了使模型论有效性在理论上是充分的，可以认为，只要我们有其他理由认为它在外延上是充分的，即它与我们首选的前理论逻辑真理概念在外延上一致，那就足够了。在第 2.4.2 节和第 2.4.3 节中，我们将研究一些关于 Fregean 语言的可导性和模型论有效性的明确外延充分性的现有论证。

#### 2.4.2 外延充分性：一个普遍的论证

如果一个人仔细构建自己的演绎演算，他将能够使自己相信在演算中可推导出的所有公式都是逻辑真理。原因是一个人可以非常系统地运用自己的直觉来获得这种信念：一个人可以只包括那些他确信是逻辑真理的公理，并且可以包括那些他确信在应用于逻辑真理时会产生逻辑真理的推理规则。用另一种术语来说，这意味着，如果一个人仔细构建自己的演算，他将相信对于形式化语言的公式，逻辑真理的可推导特征将与逻辑真理相一致。

同样显而易见的是，如果一个人手头有一个基于最小合理结构概念的形式化语言的模型论有效性概念，那么所有逻辑真理（该语言的逻辑真理）都将是模型论上有效的。原因很简单：如果一个公式在模型论上无效，那么就存在一个结构使其为假；但是这个结构必须模拟一个意义赋值（或赋值集合），在这个意义赋值上，该公式（或其逻辑形式）为假；因此，将能够构造一个具有相同逻辑形式的公式，其非逻辑表达式根据约定从该集体意义赋值中获得特定的意义，并且因此为假。但是，形式性的概念和逻辑真理的最弱模态力量的想法无争议地暗示了原始公式不是逻辑真理。用另一种术语来说，我们可以得出结论，模型论有效性与逻辑真理相对完备。

让我们用“DC(F)”缩写“F 在 C 中可导出”，用“LT(F)”缩写“F 是逻辑真理（在我们首选的前理论意义上）”。那么，如果 C 是为了适应我们对逻辑真理的前理论概念而构建的演算法，情况可以总结如下：

* (4)DC(F)⇒LT(F)⇒MTValid(F)。

第一个蕴涵是可导性的正确性；第二个蕴涵是模型论有效性的完备性。

为了使我们相信以 DC(F)和 MTValid(F)来描述逻辑真理的特征是外延充分的，我们应该使自己相信逆向蕴涵也成立：

* (5)MTValid(F)⇒LT(F)⇒DC(F)。

在一般情况下，获得这种信念，或者说这些蕴涵实际上不成立的信念，是困难的。但是 Kreisel（1967）的一句话表明，有时候可以获得这些蕴涵成立的信念。在某些情况下，可以给出一个数学证明，证明（在某个指定的演算法 C 中）可导性与模型论有效性是完备的，即证明了

* (6)MTValid(F)⇒DC(F).

Kreisel called attention to the fact that (6) together with (4) implies that model-theoretic validity is sound with respect to logical truth, i.e., that the first implication of (5) holds. (Strictly speaking, this is a strong generalization of Kreisel's remark, which in place of “LT(F)” had something like “F is true in all *class* structures” (structures with a class, possibly proper, as domain of the individual variables).) This means that when (6) holds the notion of model-theoretic validity offers an extensionally correct characterization of logical truth. (See Etchemendy 1990, ch. 11, Hanson 1997, Gómez-Torrente 1998/9, and Field 2008, ch. 2, for versions of this observation, and Smith 2011 and Griffiths 2014 for objections.) Also, (6), together with (4), implies that the notion of derivability is complete with respect to logical truth (the second implication in (5)) and hence offers an extensionally correct characterization of this notion. Note that this reasoning is very general and independent of what our particular pretheoretic conception of logical truth is.

一个特别重要的情况是，在广泛的预理论概念下，可以应用这种推理的一个典型案例是标准的弗雷格一阶量化语言。通常认为，在典型的一阶演算中可导出的所有公式都是普遍有效的，即在所有反事实情况下都为真，如果有任何公式的话，它是先验的和分析的。因此，在这种情况下，(4)在广泛的预理论概念下成立。(6)对于所讨论的典型演算也成立，这是由于哥德尔的完备性定理，所以(5)成立。这意味着，如果我们的预理论概念不太古怪，我们可以使自己相信可导性和模型论有效性都是我们最喜欢的一阶语言逻辑真理预理论概念的外延正确描述。在弗雷格传统中，其他具有特殊重要性的语言，如高阶量化语言，情况就不那么清楚了。

#### 2.4.3 外延充分性：高阶语言

根据哥德尔的第一不完全性定理，对于第二阶语言来说，不存在一个演算 C，其中可导性与模型论有效性相一致，并且使得(6)为真（对于通常为这种语言定义的模型论有效性的概念）。我们可以称这个结果为第二阶演算相对于模型论有效性的不完全性。换句话说，对于每个相对于模型论有效性相一致的第二阶演算 C，都会存在一个公式 F，使得 MTValid(F)，但不是 DC(F)。

在这种情况下，不可能应用Kreisel关于（5）的论证。事实上，二阶演算的不完备性表明，对于满足（4）的任何演算C，（5）的其中一个蕴涵是错误的（或者两者都是错误的）：要么在C中的可导性相对于逻辑真理是不完备的，要么模型论的有效性相对于逻辑真理是不可靠的。

不同的作者从不完备性中提取出相反的教训。一种常见的反应是认为模型论的有效性在逻辑真理方面必然是不可靠的。这在那些认为逻辑真理必须是先验的或分析的哲学家中尤为频繁。一个想法是，先验推理或分析思维的结果应该能够在一个演算中进行编码。（参见例如Wagner 1987，第8页。）但是，即使我们承认这个想法，所期望的结论是否成立仍然值得怀疑。假设（i）每个先验的或分析的推理都必须能够在一个演算中再现。当然，我们也接受（ii）对于每个相对于模型论有效性而言是可靠的演算C，存在一个在模型论上有效的公式，该公式在C中是不可导出的。从所有这些中，并不得出（iii）存在一个在模型论上有效的公式F，对于每个相对于模型论有效性而言是可靠的演算C，F在C中是不可导出的。从（iii）和（i）可以得出结论，当然存在一些在模型论上有效的公式，这些公式不能通过先验的或分析的推理获得。但是，从（ii）到（iii）的推理是一种典型的量化谬误。从（i）和（ii）并不能得出任何在模型论上有效的公式不能通过先验的或分析的推理获得的结论。唯一可以得出的结论（仅从（ii）出发，在假设模型论的有效性相对于逻辑真理是可靠的以及逻辑真理是先验的和分析的的前提下）是，没有一个相对于模型论有效性而言是可靠的演算能够单独模拟人们能够进行的所有先验的或分析的推理。但是，这是否本质上有问题还不够清楚。 毕竟，先验和分析推理必须从基本公理和规则开始，据我们所知，一个反思的心灵可能通过先验或分析地考虑甚至是一小部分概念的能力来找到新的真理和保真规则。声称所有分析真理都应该能够在一个单一的演算中推导出来，这种观点可能是合理的，因为分析性可以通过约定或“默契协议”来解释，因为这些协议可能是有限的数量，它们的含义可能最多是有效地可枚举的。但这种观点只是关于先验性和分析性应该如何解释的一个有问题的想法。（另请参见Etchemendy 1990年第8、9章，关于基于逻辑真理概念的纯粹分析性的高阶模型论有效性不正确的论证，以及Gómez-Torrente 1998/9、Soames 1999年第4章、Paseau 2014年、Florio和Incurvati 2019年、2021年以及Griffiths和Paseau 2022年第9章，以获取批判性反应。）)

另一种不合理的论证试图表明，存在某个高阶公式，在模型论上是有效的，但在其域为适当类的结构中直观上是错误的。（如果集合论的“预期解释”存在的话，它可能是这样的一个结构，因为它显然不是一个集合；请参见有关集合论的条目。）因此，这些论证质疑了每个意义赋值的有效性否定能力是否由某个集合论结构建模的主张，这个主张无疑是（5）中第一个蕴涵的推论。（McGee 1992中有一个很好的例子；Gómez-Torrente 1998/9中有批判性讨论。）在集合论学者中，最普遍的观点似乎是在弗雷格语言中没有具有这种特性的公式，但这绝对不是他们的坚定信念。请注意，这些论证只对普遍有效性（如第2.3节所定义）充分地由集合论有效性建模的观念提出了挑战，而不是对逻辑真理的特征化本身的正确性，或者基于与通常的集合论结构概念不同的“意义赋值”概念的某种有效性的特征化。（如果正确的话，我们在前一段和2.4.1中提到的论证将具有更深层次的含义，因为它们很容易暗示对所有基于有效性种类的特征化的挑战。）事实上，这种担忧促使提出了一种不同类型的有效性概念（用于弗雷格语言），其中将集合论结构替换为适当的高阶变量值，用于集合论的高阶语言，例如“复数解释”（请参见Boolos 1985，Rayo和Uzquiano 1999，Williamson 2003，Florio和Incurvati 2021；另请参见Florio和Linnebo 2021以及关于复数量化的条目）。 这些特定的担忧不会影响这种提议，因为这些值可以模拟集合论和适当类结构。

一般来说，对于高阶语言中的逻辑真理，没有完全令人满意的哲学论证来证明模型论有效性是不可靠的。那么，有没有任何好的理由认为（在任何对模型论有效性可靠的演算中）可推导性必然是不完全的？对于这个观点似乎也没有绝对令人信服的理由。主要的论证（最早可能在塔斯基 1936a、1936b 中首次明确提出）似乎是这样的。如上所述，哥德尔的第一不完全性定理意味着对于任何高阶语言的演算，都会存在一个模型论上有效的公式，在该演算中无法推导出来。事实证明，哥德尔构造得到的公式在所有领域（无论是集合论还是其他领域）中都是直观上真实的，因此可以合理地认为它是普遍有效的。（它肯定不是在适当类结构中为假的公式。）该论证得出结论，对于任何演算，都存在逻辑上真实的公式无法在其中推导出来。

由此可以得出结论，推导性（在任何演算中）必然对逻辑真理是不完备的。但是，一个基本问题是，这个结论是基于两个假设的，而这两个假设并不一定会被推导性的支持者接受：首先，假设通常被归类为高阶语言中的逻辑表达式，特别是形如∀X（其中X是高阶变量）的量化中的量词，实际上是逻辑表达式；其次，假设普遍有效是逻辑真理的充分条件。在这些假设下，认为在满足（4）的任何演算中，推导性必然对逻辑真理是不完备的，是非常合理的。但是在没有其他考虑的情况下，批评者可能会质疑这些假设，并否认这个论证的相关性。第二个假设可能会被质疑，例如从逻辑真理必须是分析的观点来看，因为没有确凿的理由认为普遍有效的公式必须是分析的。第一个假设实际上是任何人对于（4）对于任何一个特定的高阶演算成立的信念的基础。（请注意，如果我们否认高阶量词是逻辑表达式，我们同样可以否认上述针对模型论有效性与逻辑真理不一致性的论证根本不相关。）高阶量词是否是逻辑的问题经常被否认，理由是它们在语义上过于“实质性”。在这方面经常指出，高阶量化可以用来定义复杂的集合论属性，而仅仅依靠一阶量词是无法定义的。 另一方面，高阶量化的逻辑地位的辩护者指出高阶量化的广泛适用性，以及它们与一阶量化的类比性，通常需要它们来提供数学结构的范畴公理化等事实。参见奎恩（1970）第5章，以了解限制观点的标准代表，以及布洛斯（1975）和夏皮罗（1991）作为自由观点的标准代表。)

<!--md-padding-ignore-begin-->
## Bibliography

* Alexander of Aphrodisias, *In Aristotelis Analyticorum Priorum Librum I Commentarium*, M. Wallies (ed.), Berlin: Reimer, 1883.
* Allison, H., 1983, *Kant's Transcendental Idealism. An Interpretation and Defense*, New Haven: Yale University Press.
* Aristotle, *Analytica Priora et Posteriora*, W.D. Ross (ed.), Oxford: Clarendon Press, 1964.
* –––, *Topica et Sophistici Elenchi*, W.D. Ross (ed.), Oxford: Clarendon Press, 1974.
* Azzouni, J., 2006, *Tracking Reason: Proof, Consequence and Truth*. Oxford: Oxford University Press.
* –––, 2008, “The Compulsion to Believe: Logical Inference and Normativity”, *Protosociology*, 25: 69–88.
* Beall, Jc and G. Restall, 2000, “Logical Pluralism”, *Australasian Journal of Philosophy*, 78: 475–93.
* –––, 2006, *Logical Pluralism*, Oxford: Clarendon Press.
* Belnap, N.D., 1962, “Tonk, Plonk and Plink”, *Analysis*, 22: 130–4.
* Bernays, P., 1930, “The Philosophy of Mathematics and Hilbert's Proof Theory”, translated by P. Mancosu, in Mancosu (ed.), *From Brouwer to Hilbert*, Oxford: Oxford University Press, 1998.
* Bocheński, I.M., 1956, *Formale Logik*, Munich: Alber.
* Boghossian, P., 1997, “Analyticity”, in B. Hale and C. Wright (eds.), *A Companion to the Philosophy of Language*, Oxford: Blackwell, pp. 331–68.
* –––, 2000, “Knowledge of Logic”, in P. Boghossian and C. Peacocke (eds.), *New Essays on the A Priori*, Oxford: Clarendon Press, pp. 229–54.
* Bolzano, B., 1837, *Theory of Science*, partial translation by R. George, Oxford: Blackwell, 1972.
* BonJour, L., 1998, *In Defense of Pure Reason*, New York: Cambridge University Press.
* Bonnay, D., 2008, “Logicality and Invariance”, *Bulletin of Symbolic Logic*, 14: 29–68.
* Boolos, G., 1975, “On Second-Order Logic”, *Journal of Philosophy*, 72: pp. 509–27.
* –––, 1985, “Nominalist Platonism”, in his *Logic, Logic, and Logic*, Cambridge, MA: Harvard University Press, pp. 73–87.
* Capozzi, M. and G. Roncaglia, 2009, “Logic and Philosophy of Logic from Humanism to Kant”, in L. Haaparanta (ed.), *The Development of Modern Logic*, Oxford: Oxford University Press, pp. 78–158.
* Carnap, R., 1939, *Foundations of Logic and Mathematics* (International Encyclopaedia of Unified Science, Vols. I-II), Chicago: University of Chicago Press.
* –––, 1963, “Replies and Systematic Expositions”, in P. A. Schilpp (ed.), *The Philosophy of Rudolf Carnap,* La Salle, IL: Open Court, pp. 859–1013.
* Carroll, L., 1895, “What the Tortoise Said to Achilles”, *Mind*, 4: 278–80.
* Chihara, C., 1998, “Tarski's Thesis and the Ontology of Mathematics”, in M. Schirn (ed.), *The Philosophy of Mathematics Today*, Oxford: Oxford University Press, pp. 157–72.
* Coffa, J.A., 1991, *The Semantic Tradition from Kant to Carnap*, Cambridge: Cambridge University Press.
* Dogramaci, S., 2017, “Why Is a Valid Inference a Good Inference?”, *Philosophy and Phenomenological Research*, 94: 61–96.
* Dummett, M., 1973, “The Justification of Deduction”, in his *Truth and Other Enigmas*, Cambridge, MA: Harvard University Press, 1978, pp. 290–318.
* –––, 1981, *Frege. Philosophy of Language*, Cambridge, MA: Harvard University Press.
* –––, 1991, *The Logical Basis of Metaphysics*, Cambridge, MA: Harvard University Press.
* Estrada-González, L., 2012, “Models of Possibilism and Trivialism”, *Logic and Logical Philosophy*, 21: 175–205.
* Etchemendy, J., 1990, *The Concept of Logical Consequence*, Cambridge, MA: Harvard University Press.
* –––, 2008, “Reflections on Consequence”, in D. Patterson (ed.), *New Essays on Tarski and Philosophy*, Oxford: Oxford University Press, pp. 263–99.
* Feferman, S., 1999, “Logic, Logics and Logicism”, *Notre Dame Journal of Formal Logic*, 40: 31–54.
* Field, H., 1989, *Realism, Mathematics and Modality*, Oxford: Blackwell.
* –––, 2008, *Saving Truth from Paradox*, Oxford: Oxford University Press.
* –––, 2015, “What Is Logical Validity?”, in C. R. Caret and O. T. Hjortland (eds.), *Foundations of Logical Consequence*, Oxford: Oxford University Press, pp. 33–70.
* Florio, S. and L. Incurvati, 2019, “Metalogic and the Overgeneration Argument”, *Mind*, 128: 761–93.
* –––, 2021, “Overgeneration in the Higher Infinite”, in G. Sagi and J. Woods (eds.), *The Semantic Conception of Logic. Essays on Consequence, Invariance, and Meaning*, Oxford: Oxford University Press, pp. 142–59.
* Florio, S. and O. Linnebo, 2021, *The Many and the One. A Philosophical Study of Plural Logic*, Oxford: Oxford University Press.
* Franks, C., 2014, “Logical Nihilism”, in P. Rush (ed.), *The Metaphysics of Logic*, Cambridge: Cambridge University Press, pp. 109–27.
* Frege, G., 1879, “Begriffsschrift, a Formula Language, Modeled upon that of Arithmetic, for Pure Thought”, translated by S. Bauer-Mengelberg, in J. van Heijenoort (ed.), *From Frege to Gödel*, Cambridge, MA: Harvard University Press, 1967, pp. 1–82.
* –––, 1885, “On Formal Theories of Arithmetic”, in his *Collected Papers on Mathematics, Logic and Philosophy*, B. McGuinness (ed.), Oxford: Blackwell, 1984, pp. 112–21.
* García-Carpintero, M., 1993, “The Grounds for the Model-Theoretic Account of the Logical Properties”, *Notre Dame Journal of Formal Logic*, 34: 107–31.
* Glanzberg, M., 2015, “Logical Consequence and Natural Language”, in C. R. Caret and O. T. Hjortland (eds.), *Foundations of Logical Consequence*, Oxford: Oxford University Press, pp. 71–120.
* Gómez-Torrente, M., 1998/9, “Logical Truth and Tarskian Logical Truth”, *Synthese*, 117: 375–408.
* –––, 2002, “The Problem of Logical Constants”, *Bulletin of Symbolic Logic*, 8: 1–37.
* –––, 2008, “Are There Model-Theoretic Logical Truths that Are not Logically True?”, in D. Patterson (ed.), *New Essays on Tarski and Philosophy*, Oxford: Oxford University Press, pp. 340–68.
* –––, 2019, “Soames on the Logical Empiricists on Truth, Meaning, Convention, and Logical Truth”, *Philosophical Studies*, 176: 1357–65.
* –––, 2021, “The Problem of Logical Constants and the Semantic Tradition: From Invariantist Views to a Pragmatic Account”, in G. Sagi and J. Woods (eds.), *The Semantic Conception of Logic. Essays on Consequence, Invariance, and Meaning*, Cambridge: Cambridge University Press, pp. 35–54.
* Grice, P. and P.F. Strawson, 1956, “In Defense of a Dogma”, in Grice, *Studies in the Way of Words*, Cambridge, MA: Harvard University Press, 1989, pp. 196–212.
* Griffiths, O., 2014, “Formal and Informal Consequence”, *Thought*, 3: 9–20.
* Griffiths, O. and A. C. Paseau, 2022, *One True Logic: A Monist Manifesto*, Oxford: Oxford University Press.
* Hacking, I., 1979, “What Is Logic?”, *Journal of Philosophy*, 76: 285–319.
* Hanna, R., 2001, *Kant and the Foundations of Analytic Philosophy*, Oxford: Clarendon Press.
* –––, 2006, *Rationality and Logic*, Cambridge, MA: MIT Press.
* Hanson, W., 1997, “The Concept of Logical Consequence”, *Philosophical Review*, 106: 365–409.
* –––, 2006, “Actuality, Necessity, and Logical Truth”, *Philosophical Studies*, 130: 437–59.
* –––, 2014, “Logical Truth in Modal Languages: Reply to Nelson and Zalta”, *Philosophical Studies*, 167: 327–39.
* Hobbes, T., “Troisièmes Objections”, in Descartes, *Œuvres Philosophiques*, vol. II, F. Alquié (ed.), Paris: Garnier, 1967, pp. 599–631.
* Hodes, H., 2004, “On the Sense and Reference of a Logical Constant”, *Philosophical Quarterly*, 54: 134–65.
* Husserl, E., 1901, *Logical Investigations, Vol. II*, London: Routledge, 2001.
* Iacona, A., 2018, *Logical Form. Between Logic and Natural Language*, Cham: Springer.
* Jané, I., 2006, “What Is Tarski's *Common* Concept of Consequence?”, *Bulletin of Symbolic Logic*, 12: 1–42.
* Kant, I., *Critique of Pure Reason*, translation by P. Guyer and A. W. Wood, Cambridge: Cambridge University Press, 1998.
* Kneale, W., 1956, “The Province of Logic”, in H. D. Lewis (ed.), *Contemporary British Philosophy* (3rd Series), London: Allen & Unwin.
* Kneale, W. and M. Kneale, 1962, *The Development of Logic*, Oxford: Clarendon Press.
* Knuuttila, S., 1982, “Modal Logic”, in N. Kretzmann, A. Kenny and J. Pinborg (eds.), *The Cambridge History of Later Medieval Philosophy*, Cambridge: Cambridge University Press, pp. 342–57.
* Kreisel, G., 1967, “Informal Rigour and Completeness Proofs”, in I. Lakatos (ed.), *Problems in the Philosophy of Mathematics*, Amsterdam: North-Holland, pp. 138–71.
* Kretzmann, N., 1982, “Syncategoremata, Sophismata, Exponibilia”, in N. Kretzmann, A. Kenny and J. Pinborg (eds.), *The Cambridge History of Later Medieval Philosophy*, Cambridge: Cambridge University Press, pp. 211–45.
* Leibniz, G.W., Letter to Bourguet (XII), in C.I. Gerhardt (ed.), *Die philosophische Schriften von G.W. Leibniz*, Hildesheim: Olms, 1965, vol. III, pp. 572–6.
* –––, “Primæ Veritates”, in L. Couturat (ed.), *Opuscules et Fragments Inédits de Leibniz*, Hildesheim: Olms, 1961, pp. 518–23.
* –––, “Discours de Métaphysique”, in C.I. Gerhardt (ed.), *Die philosophische Schriften von G.W. Leibniz*, Hildesheim: Olms, 1965, vol. IV, pp. 427–63.
* –––, “Analysis Linguarum”, in L. Couturat (ed.), *Opuscules et Fragments Inédits de Leibniz*, Hildesheim: Olms, 1961, pp. 351–4.
* Lewis, D.K., 1986, *On the Plurality of Worlds*, Oxford: Blackwell.
* Łukasiewicz, J., 1957, *Aristotle's Syllogistic from the Standpoint of Modern Formal Logic*, second edition, Oxford: Clarendon Press.
* McCarthy, T., 1981, “The Idea of a Logical Constant”, *Journal of Philosophy*, 78: 499–523.
* MacFarlane, J., 2000, *What does It Mean to Say that Logic Is Formal?*, Ph.D. thesis, University of Pittsburgh, Philosophy Department.
* –––, 2002, “Frege, Kant, and the Logic in Logicism”, *Philosophical Review*, 111: 25–65.
* McGee, V., 1992, “Two Problems with Tarski's Theory of Consequence”, *Proceedings of the Aristotelian Society* (new series), 92: 273–92.
* –––, 1996, “Logical Operations”, *Journal of Philosophical Logic*, 25: 567–80.
* Maddy, P., 1999, “Logic and the Discursive Intellect”, *Notre Dame Journal of Formal Logic*, 40: 94–115.
* –––, 2002, “A Naturalistic Look at Logic”, *Proceedings and Addresses of the American Philosophical Association*, 76 (2): 61–90.
* –––, 2007, *Second Philosophy. A Naturalistic Method*, Oxford: Oxford University Press.
* Mates, B., 1961, *Stoic Logic*, Berkeley: University of California Press.
* Mill, J.S., 1843, *A System of Logic*, in his *Collected Works, vol. 7*, Toronto: University of Toronto Press, 1973.
* Mortensen, C., 1989, “Anything Is Possible”, *Erkenntnis*, 30: 319–37.
* Nelson, M. and E. N. Zalta, 2012, “A Defense of Contingent Logical Truths”, *Philosophical Studies*, 157: 153–62.
* Orayen, R., 1989, *Lógica, Significado y Ontología*, Mexico City: UNAM.
* Pap, A., 1958, *Semantics and Necessary Truth*, New Haven: Yale University Press.
* Parsons, C., 1969, “Kant's Philosophy of Arithmetic”, in his *Mathematics in Philosophy*, Ithaca: Cornell University Press, 1983, pp. 110–49.
* Paseau, A. C., 2014, “The Overgeneration Argument(s): A Succinct Refutation”, *Analysis*, 74: 40–7.
* Peacocke, C., 1987, “Understanding Logical Constants: A Realist's Account”, *Proceedings of the British Academy*, 73: 153–200.
* Prawitz, D., 1985, “Remarks on Some Approaches to the Concept of Logical Consequence”, *Synthese*, 62: 153–71.
* Priest, G., 2001, “Logic: One or Many?”, in J. Woods and B. Brown (eds.), *Logical Consequence: Rival Approaches*, Oxford: Hermes Science Publishing, pp. 23–38.
* Prior, A.N., 1960, “The Runabout Inference-Ticket”, *Analysis*, 21: 38–9.
* Putnam, H., 1968, “The Logic of Quantum Mechanics”, in his *Mathematics, Matter and Method. Philosophical Papers, Volume 1*, Cambridge: Cambridge University Press, 1975, pp. 174–197.
* Quine, W.V., 1936, “Truth by Convention”, in his *The Ways of Paradox and Other Essays*, revised edition, Cambridge, MA: Harvard University Press, 1976, pp. 77–106.
* –––, 1951, “Two Dogmas of Empiricism”, in his *From a Logical Point of View*, second edition revised, Cambridge, MA: Harvard University Press, 1980, pp. 20–46.
* –––, 1954, “Carnap and Logical Truth”, in his *The Ways of Paradox and Other Essays*, revised edition, Cambridge, MA: Harvard University Press, 1976, pp. 107–32.
* –––, 1963, “Necessary Truth”, in his *The Ways of Paradox and Other Essays*, revised edition, Cambridge, MA: Harvard University Press, 1976, pp. 68–76.
* –––, 1970, *Philosophy of Logic*, Englewood Cliffs, NJ: Prentice-Hall.
* Ray, G., 1996, “Logical Consequence: a Defense of Tarski”, *Journal of Philosophical Logic*, 25: 617–77.
* Rayo, A. and G. Uzquiano, 1999, “Toward a Theory of Second-Order Consequence”, *Notre Dame Journal of Formal Logic*, 40: 315–25.
* Read, S., 1994, “Formal and Material Consequence”, *Journal of Philosophical Logic*, 23: 247–65.
* Rumfitt, I., 2015, *The Boundary Stones of Thought. An Essay in the Philosophy of Logic*, Oxford: Clarendon Press.
* Russell, B., 1903, *The Principles of Mathematics*, New York: Norton, 1938.
* –––, 1912, *The Problems of Philosophy*, Oxford: Oxford University Press, 1976.
* –––, 1920, *Introduction to Mathematical Philosophy*, second edition. New York: Macmillan.
* Russell, G., 2017, “An Introduction to Logical Nihilism”, in H. Leitgeb, I. Niiniluoto, P. Seppälä and E. Sober (eds.), *Logic, Methodology and Philosophy of Science. Proceedings of the Fifteenth International Congress*, London: College Publications, pp. 125–34.
* –––, 2018, “Logical Nihilism: Could There Be No Logic?”, in E. Sosa and E. Villanueva (eds.), *Philosophical Issues 28: Philosophy of Logic and Inferential Reasoning*, Oxford: Wiley Blackwell, pp. 308–24.
* Sagi, G., 2014, “Models and Logical Consequence”, *Journal of Philosophical Logic*, 43: 943–964.
* Sainsbury, M., 1991, *Logical Forms*, Oxford: Blackwell.
* Shalkowski, S., 2004, “Logic and Absolute Necessity”, *Journal of Philosophy*, 101: 55–82.
* Shapiro, S., 1991, *Foundations without Foundationalism: a Case for Second-Order Logic*, Oxford: Clarendon Press.
* –––, 1998, “Logical Consequence: Models and Modality”, in M. Schirn (ed.), *The Philosophy of Mathematics Today*, Oxford: Oxford University Press, pp. 131–56.
* Sher, G., 1991, *The Bounds of Logic*, Cambridge, MA: MIT Press.
* –––, 1996, “Did Tarski Commit ‘Tarski's Fallacy’?”, *Journal of Symbolic Logic*, 61: 653–86.
* –––, 2013, “The Foundational Problem of Logic”, *Bulletin of Symbolic Logic*, 19: 145–98.
* Smith, P., 2011, “Squeezing Arguments”, *Analysis*, 71: 22–30.
* Smith, R., 1989, “Notes to Book A”, in Aristotle, *Prior Analytics*, R. Smith (ed.), Indianapolis, IN: Hackett, pp. 105–81.
* Soames, S., 1999, *Understanding Truth*, New York: Oxford University Press.
* –––, 2018, *The Analytic Tradition in Philosophy*, *Volume 2: A New Vision*, Princeton, NJ: Princeton University Press.
* Tarski, A., 1935, “The Concept of Truth in Formalized Languages”, translated by J.H. Woodger in A. Tarski, *Logic, Semantics, Metamathematics*, second edition, J. Corcoran (ed.), Indianapolis, IN: Hackett, 1983, pp. 152–278.
* –––, 1936a, “On the Concept of Logical Consequence”, translated by J.H. Woodger in A. Tarski, *Logic, Semantics, Metamathematics*, second edition, J. Corcoran (ed.), Indianapolis, IN: Hackett, 1983, pp. 409–20.
* –––, 1936b, “On the Concept of Following Logically”, translated by M. Stroińska and D. Hitchcock, *History and Philosophy of Logic*, 23 (2002): 155–96.
* –––, 1941, *Introduction to Logic and to the Methodology of Deductive Science*, translated by O. Helmer, New York: Oxford University Press.
* –––, 1966, “What Are Logical Notions?”, ed. by J. Corcoran, *History and Philosophy of Logic*, 7 (1986): 143–54.
* Tarski, A. and S. Givant, 1987, *A Formalization of Set Theory without Variables*, Providence, RI: American Mathematical Society.
* Wagner, S.J., 1987, “The Rationalist Conception of Logic”, *Notre Dame Journal of Formal Logic*, 28: 3–35.
* Warmbrōd, K., 1999, “Logical Constants”, *Mind*, 108: 503–38.
* Williamson, T., 2003, “Everything”, in D. Zimmerman and J. Hawthorne (eds.), *Philosophical Perspectives 17: Language and Philosophical Linguistics*, Oxford: Blackwell, pp. 415–65.
* –––, 2013, *Modal Logic as Metaphysics*, Oxford: Oxford University Press.
* –––, 2017, “Semantic Paradoxes and Abductive Methodology”, in B. Armour-Garb (ed.), *Reflections on the Liar*, Oxford: Oxford University Press, pp. 325–46.
* Wittgenstein, L., 1921, *Tractatus Logico-Philosophicus*, translated by C.K. Ogden, London: Routledge, 1990.
* –––, 1978, *Remarks on the Foundations of Mathematics*, revised edition, G.H. Von Wright, R. Rhees and G.E.M. Anscombe (eds.), Cambridge, MA: MIT Press.
* Woods, J., 2016, “Characterizing Invariance”, *Ergo*, 3: 778–807.
* Zalta, E., 1988, “Logical and Analytic Truths that Are Not Necessary”, *Journal of Philosophy*, 85: 57–74.

## Academic Tools

> | ![sep man icon](../.gitbook/assets/sepman-icon.png) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=logical-truth). |
> | --- | --- |
> | ![sep man icon](../.gitbook/assets/sepman-icon.png) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/logical-truth/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](../.gitbook/assets/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=logical-truth&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](../.gitbook/assets/pp.png) | [Enhanced bibliography for this entry](https://philpapers.org/sep/logical-truth/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* [Logical Consequence and Entailment](https://philpapers.org/browse/logical-consequence-and-entailment), PhilPapers category edited by Salvatore Florio.
* [Foundations of Logical Consequence Project](https://www.st-andrews.ac.uk/arche/projects/foundations-of-logical-consequence/) at Arché, Philosophical Research Centre for Logic, Language, Metaphysics and Epistemology, University of Saint Andrews.

## Related Entries

[analytic/synthetic distinction](https://plato.stanford.edu/entries/analytic-synthetic/) | [*a priori* justification and knowledge](https://plato.stanford.edu/entries/apriori/) | [Aristotle, General Topics: logic](https://plato.stanford.edu/entries/aristotle-logic/) | [Bolzano, Bernard: logic](https://plato.stanford.edu/entries/bolzano-logic/) | [consequence, medieval theories of](https://plato.stanford.edu/entries/consequence-medieval/) | [Frege, Gottlob: theorem and foundations for arithmetic](https://plato.stanford.edu/entries/frege-theorem/) | [Lewis, David: metaphysics](https://plato.stanford.edu/entries/lewis-metaphysics/) | [logic: ancient](https://plato.stanford.edu/entries/logic-ancient/) | [logic: classical](https://plato.stanford.edu/entries/logic-classical/) | [logic: modal](https://plato.stanford.edu/entries/logic-modal/) | [logic: second-order and higher-order](https://plato.stanford.edu/entries/logic-higher-order/) | [logical consequence](https://plato.stanford.edu/entries/logical-consequence/) | [logical constants](https://plato.stanford.edu/entries/logical-constants/) | [logical form](https://plato.stanford.edu/entries/logical-form/) | [logical pluralism](https://plato.stanford.edu/entries/logical-pluralism/) | [modality: varieties of](https://plato.stanford.edu/entries/modality-varieties/) | [model theory](https://plato.stanford.edu/entries/model-theory/) | [possible worlds](https://plato.stanford.edu/entries/possible-worlds/) | [set theory](https://plato.stanford.edu/entries/set-theory/) | [Tarski, Alfred: truth definitions](https://plato.stanford.edu/entries/tarski-truth/)

### Acknowledgments

I thank Axel Barceló, Bill Hanson, Ignacio Jané, John MacFarlane and Edward N. Zalta for very helpful comments on an earlier version of this entry.

[Copyright © 2022](https://plato.stanford.edu/info.html#c) by  
[Mario Gómez-Torrente](http://www.filosoficas.unam.mx/~mariogt/home-eng.html) <[*mariogt@unam.mx*](mailto:mariogt%40unam%2emx)>
