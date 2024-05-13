# 科学中的计算机模拟 simulations in science (Eric Winsberg)

*首次发表于 2013 年 5 月 6 日星期一；实质性修订于 2019 年 9 月 26 日星期四*

计算机模拟是在第二次世界大战后的直接时期，在气象学和核物理学中作为科学工具首创，并且此后在越来越多的学科中变得不可或缺。广泛使用计算机模拟的科学领域已经扩大到包括天体物理学、粒子物理学、材料科学、工程学、流体力学、气候科学、进化生物学、生态学、经济学、决策理论、医学、社会学、流行病学等许多其他学科。甚至还有一些学科，如混沌理论和复杂性理论，它们的存在本身就是随着它们研究的计算模型的发展而出现的。

在科学哲学领域，虽然起步较慢，但学者们开始更多地关注计算机模拟在科学中的作用。计算机模拟在哲学上引起了几个领域的兴趣：计算机模拟的认识论结构是什么？计算机模拟与实验的关系是什么？计算机模拟是否引发了科学哲学中一些问题，这些问题在最近关于模型的研究中尚未完全涵盖？计算机模拟对于我们关于新兴性的认识有什么教益？对于科学理论的结构有什么启示？对于科学建模中虚构的角色（如果有的话）有什么启示？

---

## 1. 什么是计算机模拟？

计算机模拟没有一个单一的适当定义。首先，这个术语在狭义和广义上都有使用。其次，人们可能希望从多个角度理解这个术语。

### 1.1 狭义定义

在最狭义的意义上，计算机模拟是在计算机上运行的程序，使用逐步方法来探索数学模型的近似行为。通常，这是一个真实世界系统的模型（尽管所讨论的系统可能是一个想象的或假设的系统）。这样的计算机程序是一个计算机模拟模型。在计算机上运行程序的一次是对系统的计算机模拟。算法以某个时间 t 系统状态（所有变量的值）的规范作为输入。然后计算系统在时间 t+1 的状态。从表征第二个状态的值，然后计算系统在时间 t+2 的状态，依此类推。当在计算机上运行时，算法因此产生了系统状态演化的数值图像，就像在模型中概念化的那样。

这些模型变量的数值序列可以保存为一个大型的“数据”集合，并且通常使用可视化方法在计算机屏幕上进行查看。通常情况下，可视化方法被设计成模拟某种科学仪器的输出，使得模拟看起来像是在测量一个感兴趣的系统。

有时候，计算机模拟的逐步方法被使用是因为感兴趣的模型包含了连续（微分）方程（这些方程指定了时间上的连续变化率），这些方程无法通过解析方法求解，无论是原则上还是实际上。这为保罗·汉弗莱斯（Paul Humphreys）所给出的以下定义提供了支持：“任何计算机实现的方法，用于探索数学模型的属性，而解析方法不可用”（1991 年，500 页）。但即使作为一个狭义的定义，这个定义也应该仔细阅读，并且不应该被理解为只有在模型中存在无法解析的方程时才使用模拟。计算机模拟通常被使用，要么是因为原始模型本身包含离散方程，可以直接用于模拟的算法实现，要么是因为原始模型更适合描述为演化规则而不是方程。

在前一种情况下，当方程被“离散化”（将描述连续变化率的方程转化为离散方程）时，应强调的是，虽然通常会说模拟“解决”这些方程，但离散化最多只能找到一些近似连续方程解的东西，以达到某种所需的精度。最后，在最狭义的意义上谈论“计算机模拟”时，我们应该谈论的是在特定的数字计算机上使用特定语言、特定编译器等编写的特定算法的特定实现。在任何这些细节的变化下，都可能得到不同的结果。

### 1.2 广义定义

更广泛地说，我们可以将计算机模拟视为研究系统的一种综合方法。在这个更广义的意义上，它指的是整个过程。这个过程包括选择一个模型；找到一种将该模型以可在计算机上运行的形式实现的方法；计算算法的输出；以及可视化和研究所得数据。该方法包括整个过程，用于对试图建模的目标系统进行推理，以及用于验证这些推理的程序。这基本上是 Winsberg 2003 年（111 页）对计算机模拟研究的定义。“成功的模拟研究不仅仅是计算数字。它们利用各种技术从这些数字中推断出结论。模拟研究创造性地利用计算技术，这些技术只能在数学和理论之外得到激发。因此，与可以在计算机上执行的简单计算不同，模拟的结果并不自动可靠。决定哪些模拟结果可靠，哪些不可靠需要付出大量的努力和专业知识。”当科学哲学家写关于计算机模拟的文章，并对“计算机模拟”具有什么认识论或方法论属性提出主张时，他们通常是指这个广义的计算机模拟研究的意义。

### 1.3 另一种观点

以上两个定义都认为计算机模拟基本上是使用计算机来解决或近似解决数学方程的模型，该模型旨在表示某个系统，无论是真实的还是假设的。另一种方法是独立于计算机模拟的概念来定义“模拟”，然后将“计算机模拟”组合定义为由编程数字计算机执行的模拟。根据这种方法，模拟是任何被认为或希望具有与其他系统足够相似的动态行为的系统，以便通过研究前者来了解后者。

例如，如果我们研究某个对象，因为我们相信它在动态上与流体盆地足够相似，以便通过研究它来了解流体盆地，那么它提供了流体盆地的模拟。这与我们在 Hartmann 中找到的模拟定义一致：它是“通过另一个过程模仿一个过程。在这个定义中，术语'过程'仅指状态随时间变化的某个对象或系统”（1996 年，83 页）。Hughes（1999 年）反对 Hartmann 的定义，认为它排除了模拟模仿系统结构而不是其动态的情况。Humphreys 根据 Hartmann 和 Hughes 的评论修改了他对模拟的定义，如下所示：

> 系统 S 提供了对象或过程 B 的核心模拟，只要 S 是一个通过时间过程产生计算模型的具体计算设备...该计算模型正确地表示 B 的动态或静态。如果 S 使用的计算模型还正确地表示真实系统 R 的结构，则 S 对于 B 相对于系统 R 提供了核心模拟。（2004 年，第 110 页）

（请注意，这里的 Humphreys 定义的是计算机模拟，而不是一般的模拟，但他是在定义一个构成性术语的精神下进行的。）值得注意的是，Humphreys 的定义使模拟成为一个成功的术语，这似乎是不幸的。一个更好的定义应该是像上一节中的那样，包含一个像“相信”或“希望”这样的词来解决这个问题。

在大多数关于计算机模拟的哲学讨论中，更有用的概念是在 1.2 中定义的概念。例外情况是当讨论的目标明确是要理解计算机模拟作为模拟的一个普遍例子时（见第 5 节）。不是计算机模拟的模拟示例包括著名的旧金山湾物理模型（Huggins＆Schultz 1973）。这是一个由工程兵团在 20 世纪 50 年代建造的旧金山湾和萨克拉门托-圣华金河三角洲系统的工作水力比例模型，用于研究湾区可能的工程干预。另一个很好的例子是声学“哑洞”（Dardashti 等人，2015 年，2019 年），该例子在文中有详细讨论，它是由玻色-爱因斯坦凝聚体制成的，用于研究黑洞的行为。物理学家比尔·安鲁指出，在某些流体中，如果流体中的某些区域移动得如此之快，以至于波动必须比声音传播速度更快（这是不可能的），才能从中逃脱（Unruh 1981）。这样的区域实际上具有声学事件视界。安鲁将这样的物理设置称为“哑洞”（“哑”意为“静音”），并提出可以通过研究它来了解我们对黑洞所不知道的事情。有一段时间，这个提议被视为不过是一个聪明的想法，但物理学家最近意识到，他们可以利用玻色-爱因斯坦凝聚体在实验室中建立和研究哑洞。很明显，我们应该将这样的设置视为模拟：哑洞模拟了黑洞。物理学家不是寻找一个计算机程序来模拟黑洞，而是找到了一个他们认为有很好模型的流体动力学设置，并且该模型在数学上与感兴趣的系统的模型具有基本的相似性。 他们观察实验室中流体设置的行为，以便推断出关于黑洞的信息。因此，本节中模拟的定义的重点是试图理解计算机模拟和这些活动在何种意义上属于同一类。然后，我们可能会更好地理解为什么在计算机上运行的 1.3 意义上的模拟与 1.2 意义上的模拟重叠。我们将在第 5 节回到这个问题。

然而，Barberousse 等人（2009 年）对这个类比持批评态度。他们指出，计算机模拟并不像 Unruh 的模拟那样工作。计算机作为一个物质对象和目标系统并不遵循相同的微分方程。关于非计算机模拟的良好参考资料是 Trenholme 1994 年的著作。

## 2. 计算机模拟的类型

通常区分两种类型的计算机模拟：基于方程的模拟和基于代理（或个体）的模拟。这两种类型的计算机模拟都用于三种不同的一般目的：预测（点对点和全局/定性）、理解和探索性或启发性目的。

### 2.1 基于方程的模拟

基于方程的模拟最常用于物理科学和其他科学领域，其中存在可以指导基于微分方程的数学模型构建的统治理论。我在这里使用“基于方程”一词来指代基于我们与物理理论相关的全局方程类型的模拟，而不是“演化规则”（将在下一节讨论）。基于方程的模拟可以是基于粒子的，其中有 n 个离散体和一组控制它们相互作用的微分方程，也可以是基于场的，其中有一组方程控制连续介质或场的时间演化。前者的一个例子是星系形成的模拟，在这个模拟中，有限数量的离散体之间的引力相互作用在时间和空间上离散化。后者的一个例子是流体的模拟，比如严重风暴这样的气象系统。在这里，系统被视为一个连续介质-流体，并且表示其在空间中的相关变量分布的场在空间上离散化，然后在离散的时间间隔内更新。

### 2.2 基于代理的模拟

基于代理的模拟在社会和行为科学中最为常见，但我们也可以在人工生命、流行病学、生态学以及任何研究许多个体之间网络交互的学科中找到它们的身影。基于代理的模拟与基于粒子的模拟类似，因为它们都代表了 n 个离散个体的行为。但与方程-粒子模拟不同的是，基于代理的模拟没有全局微分方程来控制个体的运动。相反，在基于代理的模拟中，个体的行为由它们自己的局部规则决定。

举个例子：著名的、具有开创性的基于代理的模拟是托马斯·谢林（1971 年）关于“种族隔离”的模型。他模拟中的代理是“生活”在一个棋盘上的个体。这些个体被分为社会中的两个群体（例如两个不同的种族、男孩和女孩、吸烟者和非吸烟者等）。棋盘上的每个方格代表一个房子，每个房子最多只能住一个人。如果一个个体的邻居中有一定比例属于他/她自己的群体，他/她就会感到满意。满意的个体会留在原地，不满意的个体会搬到空闲的位置。谢林发现，如果代理的“幸福规则”被设定为严重偏向于种族隔离，棋盘很快就会演变成一个强烈的隔离模式。然而令人惊讶的是，他还发现，即使代理的幸福规则只表达了对拥有自己类型的邻居有轻微偏好，最初融合的棋盘也会完全转变为隔离状态。

### 2.3 计算机模拟

在第 2.1 节中，我们讨论了基于粒子方法和基于场方法的基于方程的模型。但是，一些模拟模型是不同类型建模方法的混合体。特别是，多尺度模拟模型将来自不同描述尺度的建模元素耦合在一起。一个很好的例子是通过将材料作为在相对粗糙的描述水平上受到应力和应变的场进行模拟来模拟大块物质的动力学，但是在材料的特定区域放大了重要的小尺度效应，并使用相对更精细的建模方法对这些较小的区域进行建模。这些方法可能依赖于分子动力学或量子力学，或者两者都有，每种方法都比将材料视为场提供的更精细的物质描述。多尺度模拟方法可以进一步分为串行多尺度和并行多尺度方法。更传统的方法是串行多尺度建模。这里的想法是选择一个区域，在较低的描述水平上对其进行模拟，将结果总结为一组高级模型可以理解的参数，并将它们传递到在较高水平计算的算法的部分中。

串行多尺度方法在不同尺度强耦合时效果不佳。当不同尺度强烈相互作用以产生观察到的行为时，需要一种同时模拟每个区域的方法。这被称为并行多尺度建模。并行多尺度建模是一种几乎无处不在的模拟方法的基础：所谓的“子网格”建模。子网格建模是指在特定模拟的网格尺寸上无法充分解析的重要小尺度物理过程的表示。（请记住，许多模拟将连续方程离散化，因此它们具有相对任意的有限“网格尺寸”）。例如，在研究流体湍流时，常见的实际计算策略是考虑到网格单元内的缺失小尺度涡旋（或涡流）。这是通过在大尺度运动中添加表征较小尺度流动中能量传输和耗散的涡粘性来实现的，或者是通过网格无法捕捉到的任何类似特征。

在气候科学和相关学科中，子网格建模被称为“参数化”。这再次指的是用更简单的数学描述来替代过于小尺度或复杂以至于无法在模型中进行物理表示的过程的方法。这与其他过程（例如大尺度的大气流动）相对应，后者根据基本理论在网格水平上进行计算。之所以称之为“参数化”，是因为需要各种非物理参数来驱动高度近似的算法，以计算子网格值。气候模拟中参数化的例子包括降雨速率、大气辐射传输速率和云的形成速率。例如，100 平方公里网格盒子上的平均云量与盒子内的平均湿度并不直接相关。尽管如此，随着平均湿度的增加，平均云量也会增加，因此可能存在一个将平均云量与盒子内平均湿度联系起来的参数。尽管现代云形成的参数化方法比这更复杂，但这个例子很好地说明了基本思想。在模拟中使用子网格建模方法对于理解模拟认识论的结构具有重要影响。这将在第 4 节中详细讨论。

子网格建模方法可以与另一种并行多尺度模型进行对比，其中子网格算法在理论上更有原则性，但是受到不同层次描述的理论的启发。例如，在上述大块物质模拟的例子中，驱动较小描述层次的算法并非凭空构建。较小层次的算法在某种意义上实际上比较有原则性，因为物理学更加基础：量子力学或分子动力学与连续力学相比。换句话说，这些多尺度模型将不同层次描述的理论资源组合在一起。因此，它们提供了有趣的例子，引发了我们对理论间关系的思考，并挑战了广泛认可的观点，即不一致的法则集合不能有模型。

### 2.4 蒙特卡洛模拟

在科学文献中，还有另一类称为蒙特卡洛（MC）模拟的计算机模拟。MC 模拟是使用随机性来计算数学模型属性的计算机算法，其中算法的随机性不是目标模型的特征。一个很好的例子是使用随机算法计算 π 的值。如果在一张纸上画一个单位正方形并在其中内切一个圆，然后随机地在正方形内放置一些物体，落在圆内的物体的比例大致等于 π/4。模拟这样一个过程的计算机模拟将被称为用于计算 π 的 MC 模拟。

许多科学哲学家在这里偏离了普通科学语言，并回避了将 MC 模拟视为真正的模拟。Grüne-Yanoff 和 Weirich（2010）提出了以下推理：“蒙特卡洛方法没有模仿的目的：它模仿确定性系统，不是为了作为被调查的替代品，而是为了提供确定性系统属性的替代计算”（第 30 页）。这表明 MC 模拟不适合以上定义中的任何一个。另一方面，哲学家和普通语言之间的分歧可能可以通过注意到 MC 模拟模拟了一个可能用于计算与研究其他过程相关的某些内容的想象过程来解决。假设我正在建模行星轨道，并且在我的计算中我需要知道 π 的值。如果我进行上一段提到的 MC 模拟，我正在模拟将物体随机投放到一个正方形中的过程，但我正在建模的是一个行星轨道。这就是 MC 模拟是模拟的意义，但它们不是对它们用于研究的系统的模拟。然而，正如 Beisbart 和 Norton（2012）指出的那样，一些 MC 模拟（即使用 MC 技术解决涉及物理系统的随机动力学方程的模拟）实际上是对它们研究的系统的模拟。

## 3. 模拟的目的

计算机模拟可以用于三个一般目的。模拟可以用于启发式目的，用于预测我们没有的数据的目的，以及用于生成我们已经拥有的数据的理解。

在启发式模型的范畴下，模拟可以进一步分为用于向他人传达知识的模拟和用于自我表达信息的模拟。当沃森和克里克玩弄锡板和电线时，起初他们是在进行后者，而当他们向他人展示结果时则是在进行前者。当军队建造旧金山湾的模型以说服选民某种干预是危险的时候，他们是在使用这种启发式目的。计算机模拟可以用于这两种目的——探索可能的表征结构的特征；或向他人传达知识。例如：自然过程的计算机模拟，如细菌繁殖、地壳运动、化学反应和进化，都被用于课堂环境中，帮助学生可视化现象和过程中隐藏的结构，而这些结构在“湿”实验室环境中是不切实际、不可能或成本高昂的。

计算机模拟可以用于告诉我们在特定情况下真实世界中某个系统的行为应该如何。粗略地说：计算机模拟可以用于预测。我们可以使用模型来预测未来，或者回溯过去；我们可以使用它们进行精确的预测或宽泛的预测。关于我们用模拟进行的预测的相对精确度，我们可以在分类上稍微细分。有 a) 点预测：火星在 2300 年 10 月 21 日会在哪里？b) “定性”或全局或系统性预测：这个行星的轨道稳定吗？这些系统中出现了什么缩放规律？这种系统的吸引子的分形维度是多少？和 c) 范围预测：全球平均地表温度在 2100 年之前可能会上升 2-5 摄氏度的可能性为 66%；海平面上升至少两英尺的可能性“很高”；热盐循环在未来 50 年内停止的可能性“不太可能”。

最后，模拟可以用于理解系统及其行为。如果我们已经有数据告诉我们某个系统的行为方式，我们可以使用计算机模拟来回答关于这些事件可能如何发生的问题；或者关于那些事件实际上是如何发生的问题。

在思考下一节的主题，即计算机模拟的认识论时，我们还应该记住，对模拟结果进行认可所需的程序往往在很大程度上取决于模拟将用于上述哪种或哪些目的。

## 4. 计算机模拟的认识论

随着计算机模拟方法在越来越多的学科中变得越来越重要，对于它们在生成新知识方面的可信度问题也越来越受关注，特别是当模拟被期望与实验和传统的分析理论方法被视为认识论同行时。相关的问题始终是一个特定计算机模拟的结果是否足够准确以满足其预期目的。如果一个模拟被用来预测天气，它是否能够准确预测我们感兴趣的变量，以满足其消费者的需求？如果一个模拟用于理解中西部平原上空的大气结构，我们是否有信心所描绘的流动结构——那些将在我们解释为什么风暴有时会分裂成两个或为什么有时会形成龙卷风的过程中起到解释作用的结构——足够准确以支持我们对解释的信心？如果一个模拟用于工程和设计，模拟所做的预测是否足够可靠，以支持特定设计参数的选择，或者以支持我们相信某种飞机机翼设计将会起作用？假设这些问题的答案有时是“是”，即这些推理至少有时是合理的，那么中心哲学问题是：是什么使它们合理？更一般地说，如何评估一个模拟是否足够好以满足其预期目的？这些是计算机模拟的认识论的核心问题。

鉴于确认理论是科学哲学中的传统话题之一，似乎很明显后者会有资源来开始探讨这些问题。然而，温斯伯格（1999）认为，当涉及到与知识主张的认证相关的话题时，科学哲学传统上关注的是理论的证明，而不是它们的应用。另一方面，大多数模拟在使用理论时往往使用的是已经确立的理论。换句话说，EOCS 很少是关于测试可能用于模拟的基本理论，而更多是关于建立那些理论应用的假设的可信度。

### 4.1 EOCS 的新特点

温斯伯格（2001）认为，与传统的确认理论中占据中心舞台的认识论问题不同，一个合适的 EOCS 必须满足三个条件。特别是，它必须考虑到计算机模拟产生的知识是下行、多样和自治推理的结果。

> 向下。EOCS 必须反映这样一个事实，即在许多情况下，被接受的科学理论是构建计算机模拟模型的起点，并在从模拟结果推断出关于真实世界目标系统的结论的证明中起着重要作用。词语“向下”意味着，与传统上引起哲学家兴趣的大多数科学推断不同，这里的推断是从高层理论（部分地）向现象的特定特征进行的。
>
> 杂乱。EOCS 必须考虑到，尽管模拟结果通常不仅依赖于理论，还依赖于许多其他模型成分和资源，包括参数化（上面讨论过的）、数值解法、数学技巧、近似和理想化、彻头彻尾的虚构、特设假设、函数库、编译器和计算机硬件，以及最重要的，大量试错的心血和汗水。
>
> 自主。EOCS 必须考虑到模拟产生的知识的自主性，即模拟产生的知识不能完全通过与观察的比较来验证。模拟通常用于研究数据稀缺的现象。在这些情况下，模拟旨在取代实验和观察作为关于世界的数据来源，因为相关的实验或观察由于原则、实际或伦理原因而无法进行。

Parker (2013)指出，这些条件的实用性在于它过于专注于物理科学中的模拟以及其他模拟是基于理论和方程的学科，这种情况有些受损。这似乎是正确的。在社会行为科学和其他以基于代理的模拟（见 2.2）为主的学科中，模型是在没有已建立的定量理论的情况下构建的，EOCS 可能应该用其他术语来描述。

例如，一些使用基于代理的模拟的社会科学家追求一种方法论，其中社会现象（例如观察到的分离模式）通过在模拟中生成类似的现象来解释或解释（Epstein 和 Axtell 1996; Epstein 1999）。但这引发了自己的认识论问题。当通过基于代理的模拟更多或更少地再现观察到的社会现象时，到底完成了什么，获得了什么样的知识？这算作对现象的解释吗？可能的解释吗？（见例如 Grüne-Yanoff 2007）。Giuseppe Primiero（2019）认为，围绕基于代理和多代理系统的模拟建立了一个完整的“人工科学”领域，并且它需要自己的认识论-其中验证不能通过与现有的真实系统进行比较来定义，而必须通过与预期系统进行比较来定义。

也可以说，正如 Parker（2013）所说，上述条件对于模拟的各种不同目的给予了不足的关注（如 2.4 中讨论的）。如果我们使用模拟来对目标系统的未来行为进行详细的定量预测，那么这种推理的认识论可能需要比推理关于整个类别系统的一般性质行为时所涉及的标准更为严格。事实上，可以说在对计算机模拟所用的目的进行分类以及这些目的对其认识论结构的约束方面还有很多工作可以做。

Frigg 和 Reiss（2009）认为，这三个条件对于计算机模拟来说并不新鲜。他们认为普通的“纸和铅笔”建模也包含了这些特征。事实上，他们认为计算机模拟不可能引发新的认识论问题，因为认识论问题可以清晰地分为两个方面：模拟背后模型的适用性问题，这是与普通建模中出现的认识论问题相同的问题；以及模拟所提供的模型方程解的正确性问题，这是一个数学问题，与科学的认识论无关。关于第一个观点，Winsberg（2009b）回应说，新的模拟是这三个特征同时出现的结果。我们将在第 4.3 节回到第二个观点。

### 4.2 EOCS 和实验的认识论

一些关于 EOCS 的工作已经发展出计算机模拟之间的类比，以便借鉴实验认识论的最新研究成果，特别是艾伦·富兰克林的工作；请参阅物理实验的条目。

在他对实验认识论的研究中，富兰克林（1986 年，1989 年）确定了实验者用于增加对结果的理性信心的多种策略。韦萨特（1997 年）和帕克（2008a 年）提出了各种类比形式，将这些策略与模拟者可用于验证结果的多种策略进行对比。对这些关系的最详细分析可在帕克 2008a 中找到，她还利用这些类比来强调当前模拟模型评估方法的不足之处。

Winsberg (2003) 还利用了 Ian Hacking（1983, 1988, 1992）关于实验哲学的工作。Hacking 关于实验的一个核心洞见被概括为他的口号：“实验有自己的生命”（1992: 306）。Hacking 想要传达两个意思。第一个是对科学不稳定图景的反应，这种图景可以从库恩等人那里得到。Hacking（1992）认为，即使科学的其他部分发生了巨大变化，实验结果仍然可以保持稳定。第二个相关的观点是，实验是有机的，发展的，变化的，但仍然保持一定的长期发展，这使我们谈论重复和复制实验（1992: 307）。模拟学家用来构建模型的一些技术以及假设集合，以与 Hacking 所说的仪器、实验程序和方法相同的方式获得认可；这些认可在很长一段时间内发展，并且变得深深地传统束缚。用 Hacking 的话来说，模拟学家使用的技术和假设集合变得“自证自明”。也许更好的表达方式是它们具备自己的认可。这对于解决 4.1 中提出的问题提供了回应，即尽管模拟的推理具有多样化和自主性，但它如何拥有可行的认识论。

从另一位实验哲学家（Mayo 1996）的启发中，Parker（2008b）提出了对当前模拟模型评估方法的一些不足之处的补救措施。在这项工作中，Parker 认为，Mayo 的误差统计方法可以帮助我们理解传统实验的本质，从而对模拟的认识论提供启示。从误差统计的角度来看，模拟的认识论中心问题是：“什么使我们相信计算机模拟对自然界的某个假设进行了严格的测试？也就是说，如果感兴趣的假设是错误的，什么使我们得出结论，模拟很可能不会给出实际结果（2008b，380）？”Parker 认为，目前很多被视为模拟模型评估的东西缺乏严谨性和结构，因为它们仅仅是将模拟输出与观测数据进行对比，几乎没有明确的论证说明这些对比对于模型提供特定科学假设的证据意味着什么（2008b，381）。

> 她明确借鉴了 Mayo（1996）的工作，她认为模拟的认识论应该做的是提供一些关于可能出现的“典型错误”的解释，以及探索这些错误存在的策略。

Drawing explicitly upon Mayo’s (1996) work, she argues that what the epistemology of simulation ought to be doing, instead, is offering some account of the ‘canonical errors’ that can arise, as well as strategies for probing for their presence.

### 4.3 验证和验证

模拟的从业者，特别是在工程环境、武器测试和气候科学中，倾向于以验证和验证的术语来概念化 EOCS。验证被认为是确定模拟输出是否接近原始模型的微分方程的真实解的过程。另一方面，验证被认为是确定所选择的模型是否足够好地代表了用于模拟的真实世界系统的过程。工程师和科学家关于验证和验证的文献非常庞大，并且开始引起一些哲学家的关注。

验证可以分为解验证和代码验证。前者验证所预期算法的输出是否接近原始模型的微分方程的真实解。后者验证所编写的代码是否执行了预期的算法。科学哲学家大多忽视了代码验证；可能是因为它被视为计算机科学中的问题，而不是经验科学中的问题——这可能是一个错误。解验证的一部分包括将计算输出与解析解（所谓的“基准解”）进行比较。尽管这种方法当然可以帮助为计算机模拟的结果提供支持，但它本身是不足的，因为模拟通常之所以使用，是因为在感兴趣的解空间区域中无法获得解析解。还有其他间接的技术可用：其中最重要的可能是检查计算输出是否以及以何种速率收敛到稳定解，随着离散化网格的时间和空间分辨率越来越高。

验证的主要策略是将模型输出与可观测数据进行比较。当然，在大多数情况下，这种策略是有限的，因为在运行模拟时，可观测数据是稀缺的。但是可以采用复杂的策略，包括将模拟的子系统输出与相关实验进行比较（Parker，2013；Oberkampf 和 Roy 2010）。

验证和验证的概念受到哲学家们的一些批评。Oreskes 等人在 1994 年发表的一篇非常广泛引用的文章主要批评了术语，认为“有效性”特别是只适用于逻辑论证，因此，当应用于模型时，可能会导致过度自信。

Winsberg（2010 年，2018 年，第 155 页）认为，如果将验证和验证之间的概念分割误导为存在一组方法可以单独显示我们已经正确解决了方程组，以及存在另一组方法可以单独显示我们已经得到了正确的方程组，那么这种分割是误导性的。他还认为，将模拟的认识论清晰地分为经验部分（验证）和数学（以及计算机科学）部分（验证）是误导性的。但是，这种误导性的观念经常在验证和验证的讨论中出现。我们发现这一点在从业者和哲学家的工作中都存在。

这是一位从业者 Roy 的标准说法：“验证涉及数学，并解决给定模型的数值解的正确性。验证则涉及物理学，并解决模型在再现实验数据方面的适当性。验证可以被视为正确解决所选方程，而验证则是首先选择正确方程”（Roy 2005）。

一些哲学家在关于模拟的哲学新颖性的论证中运用了这一区别。我们在 4.1 节中首次提出了这个问题，Frigg 和 Reiss 认为模拟没有认识论上的新颖特征，因为它包含两个不同的组成部分：一个与普通建模的认识论相同的组成部分，以及一个完全数学的组成部分。“我们应该在这里区分两个不同的可靠性概念，回答两个不同的问题。首先，计算机提供的解是否足够接近实际（但不可用）的解，以便有用？...这是一个纯粹的数学问题，属于我们刚才提到的问题类别。因此，从哲学的角度来看，这里没有什么新的东西，问题确实是一个数字计算的问题。其次，作为模拟基础的计算模型是否正确地代表了目标系统？也就是说，模拟结果是否具有外部有效性？这是一个严肃的问题，但它与第一个问题是独立的，并且与不涉及棘手数学和普通实验的模型同样存在”（Frigg 和 Reiss 2009）。

但是验证和验证并不是严格意义上可以清晰分开的。这是因为大多数验证方法本身都太弱，无法建立模拟的有效性。而且，选择用于模拟的大多数模型方程在任何直观意义上都不是“正确的方程”；它们不是我们在理想世界中会选择的模型方程。换句话说，我们有充分的理由认为，在抽象意义上，存在着更好的经验证据支持的模型方程。我们选择的方程通常反映了我们认为最能描述现象和计算可行性之间的妥协。因此，选择的方程本身很少被很好地“验证”。如果我们想要理解为什么模拟结果被认为是可信的，我们必须将模拟的认识论作为一个整体来看待，而不是将其清晰地分为验证和验证两部分——每个部分在其自身看来都不足以完成任务。

因此，一个观点是验证和验证并不是独立成功和可分离的活动。但另一个观点是，这些活动不能指向两个独立的实体：一个选择离散化的模型，以及一种离散化方法。一旦认识到有时选择要“解决”的方程是为了抵消离散化误差等（Lenhard 2007 提供了一个非常好的例子，涉及 Arakawa 算子），这种后来的区分变得更难维持。因此，在模拟中取得成功是通过模型和计算方法之间的一种来回、试错、逐步调整来实现的。当情况如此时，甚至很难知道说一个模拟是单独验证和验证的意义是什么。

没有人争论 V&V 不是一个有用的区分，而是科学家不应该把一个实用的区分夸大成一个干净的方法论规定，这样会误导他们自己实践的混乱性。此外，Frigg 和 Reiss 关于模拟中不存在认识论新颖性的论点正是因为这个原因而失败。关于计算机提供的解决方案是否足够接近实际（但不可用）的解决方案以便有用，这不是“一个纯粹的数学问题”。至少在这方面上不是：作为一个实用问题，这不是一个可以完全用数学方法回答的问题。因此，这是一个经验/认识论问题，在普通建模中并不会出现。

### 4.4 EOCS 和认识论权利

普通认识论（科学哲学之外的一个重要分支）的一个主要观点是强调在我们获得知识的可能性方面，我们依赖于我们的感官和他人的证言，而我们自己无法为此进行自证。根据 Tyler Burge（1993,1998）的观点，我们对这两个过程的结果的信念是有保证但无法证明的。根据 Burge 的观点，我们有权相信这些信念。"[w] 我们有权依赖于感知、记忆、演绎和归纳推理，以及他人的话语"（1993 年，第 458 页）。信徒有权相信的信念是那些没有证据支持但信徒仍然有权相信的信念。

EOCS 中的一些工作在计算机模拟和伯奇与资格相关的知识生成实践之间建立了类比关系。（特别参见 Barberousse 和 Vorms，2014 年以及 Beisbart，2017 年。）从某种程度上说，这是伯奇论证的自然结果，我们以这种方式看待计算机辅助证明（1998 年）。计算机模拟非常复杂，通常是由一组多样化的科学家和其他专家的认识劳动的结果，而且可能最重要的是，在认识上是不透明的（Humphreys，2004 年）。因为这些特点，Beisbart 认为，合理地对待计算机模拟与我们对待感官和他人证言的方式相同：只是作为可以在一切正常运行的假设下信任的事物。（Beisbart，2017 年）。

Symons 和 Alvarado（2019 年）认为，这种对 EOCS 的方法存在一个根本性问题，与计算机辅助证明的一个关键特征有关：即作为“透明传送者”的特性。“非常重要的是要注意，例如，伯奇对内容保留和透明传递的描述要求接收者已经有理由不怀疑来源”（第 13 页）。但是 Symons 和 Alvarado 指出，根据 Winsberg（2010 年）和 Ruphy（2015 年）的观点，计算机模拟具有许多属性，由于这些属性，它们无法具备这些特性。Lenhard 和 Küster（2019 年）在这里也是相关的，他们认为计算机模拟具有许多使其难以复制的特征，因此破坏了它们作为透明传送者所需的一些稳定性。基于这些原因以及与 4.2 和 4.3 中讨论的许多特征有关的其他原因，Symons 和 Alvarado 认为，我们不应该将计算机模拟视为与感知、记忆、证言或类似的基本认识实践相等的东西。

### 4.5 对 EOCS 的实用方法

另一种对 EOCS 的方法是将其基于建模和模拟的实际方面。根据这种观点，换句话说，我们对计算机模拟研究结果的信任最好的解释是对使用它们的建模者的实际技能和工艺的信任。这种解释的一个很好的例子是（Hubig 和 Kaminski，2017）。这种工作的认识论目标是确定我们对模拟的信任的基础是建模和模拟的实际方面，而不是模型本身的任何特征。（Resch 等，2017）认为，我们应该信任模拟的一个很大的原因不是因为模拟本身，而是因为那些运用他们的艺术和技巧来解释模拟输出的人的解释艺术。Symons 和 Alvarado（2019）也对这种方法持批评态度，他们认为“计算机模拟的认识论任务之一是解释当代科学家与认识论上不透明的计算机模拟之间的差异..”（第 7 页），以及信徒与机械神谕之间的关系。根据 Symons 和 Alvarado 的观点，实用和认识论的考虑是共存的，它们不是对我们对模拟信任的正确解释的竞争者-认识论的原因最终解释和支持实用的原因。

## 5. 模拟与实验

工作中的科学家有时会用实验术语来描述模拟研究。模拟和实验之间的联系可能可以追溯到冯·诺伊曼，他在早期就提倡在物理学中使用计算机时指出，许多困难的实验只是为了确定原则上可以从理论中推导出的事实。一旦冯·诺伊曼的愿景成为现实，并且其中一些实验开始被模拟所取代，将它们视为实验的版本就变得有些自然。在一本关于模拟的畅销书中可以找到一个代表性的段落：

> 准确模拟复杂现象的模拟包含了关于该现象的丰富信息。例如，超级计算机在模拟风暴的发展过程中，在数千个点上评估温度、压力、湿度和风速等变量。这些数据远远超过了通过发射一系列气象气球所能获得的任何信息，揭示了风暴云中正在发生的细节。（考夫曼和斯马尔，1993 年，4 页）

当模拟研究旨在了解系统在各种可能的干预措施下会发生什么时，“体外”实验的概念变得更加可信：如果向大气中添加 x 量的碳，全球气候会发生什么？如果飞机机翼受到某种应变，会发生什么？如果在这个位置增加一个入口匝道，交通模式会如何改变？

哲学家们因此开始考虑计算机模拟与实验的何种意义上的相似性和差异性。一个相关的问题是，一个基本上涉及计算机模拟的过程何时可以被视为测量（Parker，2017）。文献中出现了许多观点，围绕着捍卫和批评两个命题：

> 同一命题。计算机模拟研究实际上是实验的实例。
>
> 认识论依赖命题。如果同一命题是真的，那么这将是相信模拟可以为支持的假设提供保证的一个好理由（弱版本），或者是最好的理由（更强版本），或者是唯一的理由（最强版本；这是一个必要条件）。最强版本的一个结果是，只有当同一命题为真时，才有理由相信模拟可以为假设提供保证。

认识论依赖论背后的核心思想是，实验是在证明我们对科学假设的信念时起到核心作用的规范实体，因此我们认为模拟也能在证明这种信念方面发挥作用的程度取决于它们能否被确定为一种实验的程度。

早在 1995 年的 Humphreys 和 1999 年的 Hughes，就有哲学家为同一论证辩护。而 Hughes 对认识论依赖论（更强的版本）至少有隐含的支持。然而，最早明确支持认识论依赖论的论证出现在 Norton 和 Suppe 的 2001 年。根据 Norton 和 Suppe 的观点，模拟之所以能够证明信念，是因为它们本质上就是实验。他们详细阐述了模拟在何种意义上是实验，以及这一切是如何运作的。根据 Norton 和 Suppe 的观点，一个有效的模拟是在基础模型、被模拟的物理系统本身和运行算法的计算机之间存在某种形式关系（他们称之为“实现”）。当满足适当条件时，“模拟可以用作探测或检测真实世界现象的工具。在实验控制条件下产生关于真实现象的经验数据”（第 73 页）。

这个故事的一个问题是，他们提出的形式条件过于严格。很少有真实的计算机模拟能够满足他们的严格标准。模拟几乎总是更加理想化和近似的过程。因此，如果模拟是实验的话，可能不是像 Norton 和 Suppe 想象的那样。

更一般地说，身份论引起了其他方面的争议。

Gilbert 和 Troitzsch 认为：“主要的区别在于，在实验中，人们控制的是实际的研究对象（例如，在化学实验中，是正在研究的化学物质），而在模拟中，人们实验的是模型而不是现象本身。”（Gilbert 和 Troitzsch 1999 年，13 页）。但这似乎不正确。许多人（Guala 2002 年，2008 年，Morgan 2003 年，Parker 2009a 年，Winsberg 2009a 年）指出了这一观点的问题。如果 Gilbert 和 Troitzsch 的意思是模拟者以抽象对象的意义上操纵模型，那么这个观点很难理解-我们如何操纵一个抽象实体？另一方面，如果他们只是想指出模拟者操纵的物理对象-数字计算机-不是实际的研究对象，那么这与普通实验有何不同也不清楚。

真实实验并不总是精确地操纵它们感兴趣的目标，这是错误的。实际上，在真实实验和模拟中，操纵调查的内容与调查目标的真实世界系统之间存在着复杂的关系。因此，在实验和模拟的情况下，需要一些实质性的论证来建立调查的“外部有效性”——即建立所学到的关于被操纵系统的知识是否适用于感兴趣的系统。例如，孟德尔操纵豌豆植物，但他对遗传现象的普遍性感兴趣。生物学中的模式生物概念使这个想法清晰明了。我们对秀丽隐杆线虫进行实验，是因为我们对了解有机体如何利用基因控制发育和谱系感兴趣。我们对黑腹果蝇进行实验，因为它提供了一个有用的突变和遗传传承模型。但这个想法不仅限于生物学。伽利略通过斜面实验来研究物体的下落以及在没有干扰力的情况下它们的行为，而斜面实验实际上并没有完全呈现这些现象。

当然，关于实验的这种观点并不是没有争议的。事实上，实验者经常从干预的系统中推断出与该系统不同的东西。然而，这种推断是否是原始实验的适当部分尚不清楚。Peschard（2010）沿着这些线索提出了批评，因此可以被视为 Gilbert 和 Troitzsch 的辩护者。Peschard 认为，他们的批评者的基本假设——在实验中，就像在模拟中一样，被操纵的是一个代表目标系统的系统——是混淆的。Peschard 认为，这种混淆将实验的认识目标与其认识动机混淆在一起。她认为，虽然对 C. elegans 进行实验的认识动机可能是非常广泛的，但任何这样的实验的适当认识目标都是蠕虫本身。然而，根据 Peschard 的说法，在模拟中，认识目标从来不是数字计算机本身。因此，根据她的观点，模拟与实验不同之处在于其认识目标（而不仅仅是其认识动机）与被操纵的对象不同。Roush（2017）也可以被视为 Gilbert 和 Troitzsch 观点的辩护者，但 Roush 以自然种类的相同性为区分实验和模拟的关键特征。其他反对同一论的人包括 Giere（2009）和 Beisbart 和 Norton（2012，其他互联网资源）。

如何裁决这场争议并不清楚，而且似乎主要围绕着强调的差异。可以像 Gilbert 和 Troitzsch 以及 Peschard 那样强调实验和模拟之间的差异，坚持认为实验首先教给我们的是关于其认识目标的知识，其次才能推断其他系统的行为。（即，对于蠕虫的实验首先教给我们的是关于蠕虫的知识，其次才能推断更一般的遗传控制。）这使得它们在概念上与计算机模拟有所不同，后者并不被认为首先教给我们关于计算机行为的知识，只有在第二个层面上才能推断出风暴或星系等等的行为。

或者可以以相反的方式强调相似性。可以强调实验目标总是作为真正感兴趣的事物的替代品而选择的程度。Morrison, 2009 可能是最坚决地捍卫强调实验和模拟相似性这一方面的人。她认为大多数实验实践，实际上大多数测量实践，都涉及与模拟相同类型的建模实践。无论如何，除了对术语的争论之外，也许还可以诉诸于科学家的日常语言使用；这并不总是最有说服力的论证方式；我们可以说风暴模拟的认识目标是计算机，而风暴只是研究计算机的认识动机。

无论如何，包括本节讨论的那些模拟哲学家在内，许多模拟哲学家选择了后者的道路，部分原因是为了引起人们对实验背后信息的关注，因为吉尔伯特和特罗伊奇引用的说法过于简单化了实验的画面。根据这种画面，实验直接掌握世界，而模拟的情况恰恰相反。这正是吉尔伯特和特罗伊奇引文所给人的印象。Peschard 提出的更复杂的画面涉及认识目标和认识动机之间的区别，这在很大程度上消除了这些担忧，而不会使我们陷入认为模拟和实验在这方面完全相同的领域。

尽管拒绝吉尔伯特和特罗伊奇对模拟和实验之间差异的描述，古阿拉和摩根都拒绝了同一论。古阿拉引用西蒙（1969）的工作，认为模拟与实验根本不同之处在于实验中的操纵对象与感兴趣的目标具有物质上的相似性，而在模拟中，对象与目标之间的相似性仅仅是形式上的。有趣的是，尽管摩根接受了这个反对同一论的论点，但她似乎坚持一种认识论依赖论的版本。换句话说，她认为古阿拉所指出的实验和模拟之间的差异意味着模拟在认识论上不如真实实验，因为它们对于关于真实世界的假设的信仰具有内在的较低的能力。

对摩根（2002）的论证，计算机模拟的认识能力可以通过捍卫同一论或拒绝认识论依赖性论来进行辩护。在前一方面，对瓜拉（2002）反对同一论的论证似乎存在两个问题。首先，这里的物质相似性概念过于弱，其次，纯粹形式相似性的概念过于模糊，无法完成所需的工作。例如，考虑到在工程科学中，使用模拟方法来研究由硅制成的系统的行为并不罕见。工程师想要了解硅器件不同设计可能性的属性，因此她开发了一个设备的计算模型，并在数字计算机上运行其行为的模拟。计算机的中央处理器和正在研究的硅器件之间存在深刻的物质相似性，并且有一些相同的物质原因在起作用。根据瓜拉的推理，这应该被视为一个真实实验的例子，但这似乎是错误的。这个例子的特殊性非常明显地说明了问题，但问题实际上是相当普遍的：任何两个系统之间都存在一些物质相似性和差异。

另一方面，认为两个物质实体之间存在形式上的相似性可能标志着任何有趣的东西的想法在概念上是混乱的。对于任何两个足够复杂的实体，它们在形式上是相同的方式有很多，更不用说相似了。它们在形式上也有完全不同的方式。现在，我们可以随意地说两个事物具有形式上的相似性，但我们真正的意思是我们对这两个实体的最佳形式表示具有形式上的相似性。无论如何，似乎有充分的理由来拒绝吉尔伯特和特罗伊奇以及摩根和瓜拉区分实验和模拟的理由。

回到对模拟的认识力的辩护，也有理由拒绝认识论依赖论。正如帕克（2009a）指出的那样，在实验和模拟中，计算机模拟和目标系统之间可以有相关的相似之处，这才是重要的。当相关的背景知识到位时，模拟可以提供比实验更可靠的对系统的认识。基于我们最复杂的天体动力学模型的太阳系计算机模拟将产生比任何实验更好的行星轨道表示。

Parke (2014)通过削弱两个支持它的前提，反驳了认识论依赖论。首先，实验产生比模拟更大的推理能力；其次，模拟不能像实验那样让我们感到惊讶。模拟不能让我们感到惊讶的论点来自 Morgan (2005)。与 Morgan 不同，Parke 认为，模拟者经常对他们的模拟感到惊讶，这既因为他们不是计算上全知的，也因为他们并不总是模型和代码的唯一创造者。她还提出，仅仅研究者认识论状态的差异似乎不是追踪实验和模拟之间区别的正确依据（258 页）。Adrian Curry (2017)通过进行两个友好的修正来捍卫 Morgan 最初的直觉。他认为，Morgan 真正追求的区别是两种不同的惊讶，特别是惊讶的来源：由于将理论知识与世界接触而产生的惊讶是实验的特点。他还以非心理学的方式更加准确地定义了惊讶，使其成为“获得真正认识进展的质量”（p. 640）。

## 6. 计算机模拟与科学理论的结构

Paul Humphreys（2004）认为，计算机模拟对我们理解理论结构具有深远的影响；他认为它们揭示了科学理论的语义和句法观点的不足之处。这一观点遭到了 Roman Frigg 和 Julian Reiss（2009）的严厉批评。Frigg 和 Reiss 认为，模型是否具有解析解与其与世界的关系无关。他们以双摆为例来证明这一点。无论摆的内部支点是否固定（这将决定相关模型是否具有解析解），都不会影响模型元素的语义。基于此，他们得出结论：模型的语义或其与世界的关系不受模型是否具有解析解的影响。

然而，这并没有对 Humphreys 所指出的最慈善的解读作出回应。句法和语义观点毕竟不仅仅是关于我们的抽象科学表达与世界的关系的解释。更具体地说，它们不是关于特定模型与世界之间的关系的故事，而是关于理论与世界之间的关系以及模型在其中所扮演的角色（如果有的话）。

它们也是关于科学理论中哲学上有趣的行动发生的地方的故事。句法观点认为，科学实践可以通过将理论视为公理系统来进行充分的理性重建，并且更重要的是，逻辑推理是思考从理论到世界的推论如何进行的有用的规范理想。句法观点还通过省略，相当明确地表明建模在科学中只起到启发作用。（这是句法观点的一个特点，其最热烈的批评者之一弗雷德里克·苏佩经常抨击这一点。）理论本身与模型无关，可以直接与世界进行比较，建模没有任何重要的作用。

另一方面，理论的语义观点确实强调了模型的重要作用，但它也敦促理论是非语言实体。它敦促哲学家不要被理论可能出现在的特定教科书等特定语言表达形式的偶然性所分散注意力。

计算机模拟，然而，似乎确实说明了这两个主题都是错误的。认为逻辑推理是理性重建理论应用过程的正确工具是非常错误的。计算机模拟表明，有一些理论应用方法远远超过了逻辑推理的推理能力。例如，通过逻辑推理从流体理论中获得的解空间与通过计算机模拟可以探索的应用空间相比微不足道。另一方面，计算机模拟似乎揭示了，正如 Humphreys（2004）所敦促的那样，语法是重要的。事实证明，像语义观点所认为的那样，科学理论表达的特定语言形式在哲学上并不重要是错误的。理论表达的语法将对我们能够从中推断出什么，什么样的理想化与之配合良好，等等产生深远影响。Humphreys 如下所述：“所使用的具体语法表示通常对于理论方程的可解性至关重要”（Humphreys 2009，p.620）。流体理论可以用来强调这一点：无论我们将该理论表达为欧拉形式还是拉格朗日形式，都将深刻影响我们在实践中可以计算和如何计算；它将影响在哪些情况下哪些理想化、近似和计算技术将是有效和可靠的。因此，计算机模拟的认识论需要对理论的特定语法表达形式以及该特定表达形式的可信度敏感。因此，强调 Humphreys（2004）所做的那样，计算机模拟揭示了语法和语义理论的不足是正确的。

## 7. 计算机模拟的出现

Paul Humphreys（2004）和 Mark Bedau（1997，2011）认为，对于对涌现主题感兴趣的哲学家来说，通过观察计算机模拟可以学到很多东西。对于对此主题感兴趣的哲学家，应该参考有关涌现属性的条目，其中讨论了所有这些哲学家的贡献。

涌现与模拟之间的联系可能是由 Bedau 在他的（2011）中最好地阐述的。Bedau 认为，任何涌现的概念都必须满足解释整体如何依赖其部分以及整体如何独立于其部分的双重标志。他认为，哲学家经常关注他所称之为“强”涌现，即假设在原则上无法简化的蛮力向下因果关系。但他认为这是一个错误。相反，他关注的是他所称之为“弱”涌现，即在原则上允许整体向部分的可简化性，但在实践中不可简化。产生涌现属性的系统只是机制，但这些机制非常复杂（它们有非常多的独立相互作用的部分）。因此，除了“爬行因果网络”之外，没有其他方法可以确定在给定特定的初始和边界条件下会发生什么。正是在这里，与计算机模拟的联系产生了。弱涌现属性是自然界中复杂系统的特征。复杂的计算机模拟也具有这个特点，除了让它们运行之外，没有其他方法可以预测它们会做什么。根据 Bedau 的说法，弱涌现解释了为什么计算机模拟在复杂系统科学中起着核心作用。理解和预测真实复杂系统的行为的最佳方法是通过爬行微观因果网络来模拟它们，看看会发生什么。

## 8. 虚构作品

课程模型涉及理想化。但有人认为，在计算机模拟所涉及的建模类型中，某些特定的理想化是特殊的，以至于它们应该被称为“虚构”。本节将讨论定义虚构的尝试，并探讨它们在计算机模拟中的作用。

关于科学中虚构的作用，有两种不同的思路。根据其中一种思路，所有模型都是虚构的。这种思路是通过考虑科学中“理想摆”的作用来推动的。据称，科学家经常对这些实体提出主张（例如，“理想摆的周期与其长度的平方根成正比”），但在现实世界中找不到它们；因此它们必须是虚构的实体。关于科学中虚构实体的这种论证方式与计算机模拟没有特殊的联系，对此感兴趣的读者应该参考有关“科学表征”的条目。

关于虚构的另一种思路涉及到科学中应该被视为虚构的各种表征的问题。在这里，关注的不是科学模型实体的本体论，而是各种假设模型实体的表征特征。Winsberg（2009c）认为，虚构确实与计算机模拟有着特殊的联系。或者更确切地说，一些计算机模拟包含了最能代表我们所称之为科学虚构表征的元素，即使这些表征在模拟中并不是唯一存在的。

他指出，上述提到的关于虚构的第一个概念，即“任何与现实相矛盾的表达都是虚构”（第 179 页），并不符合我们对这个术语的普通用法：一个粗糙的地图并不是虚构。然后，他提出了一个替代性的定义：非虚构作品被提供为对世界某个部分的“足够好的”指南（第 181 页）；而虚构作品则不是。但是这个定义还需要进一步完善。以蚱蜢和蚂蚁的寓言为例。尽管这个寓言提供了关于世界运作方式的教训，但它仍然是虚构，因为它是“对世界在某种普遍意义上的运作方式的有用指南”，而不是对世界某个部分的具体指南，即“表面上的代表目标”，一个唱歌的蚱蜢和辛勤劳作的蚂蚁。另一方面，非虚构作品“指向世界的某个特定部分”，并且是对该部分世界的指南（第 181 页）。

这些模型的虚构组成部分在某些计算机模拟中得到了典型的示范。他的两个例子是“硅原子”和“人工粘度”。硅原子出现在硅裂纹的某些纳米力学模型中，这是一种混合了量子力学和分子力学的多尺度模型，如 2.3 节所述。硅裂纹模型通过使用量子力学描述裂纹本身，使用经典分子动力学描述裂纹周围的区域来工作。为了将两个区域的建模框架结合起来，边界被处理为包含“硅原子”，这些原子具有硅和氢的性质的混合物。硅原子是虚构的。它们甚至不被提供为边界上原子的“足够好”的描述，即它们的表面目标。但是它们被用来使整体模型能够希望得到正确的结果。因此，整体模型不是虚构的，但其中一个组成部分是虚构的。人工粘度是一个类似的例子。计算网格上的突变冲击流体很难建模，因为突变冲击隐藏在一个网格单元内，无法通过这样的算法解决。人工粘度是一种假装流体高粘度的技术-一种虚构-就在冲击发生的地方，以使冲击变得不那么突然，并模糊了几个网格单元。错误地获取粘度，从而获得冲击的厚度，有助于使整体模型“足够好”地工作。同样，流体的整体模型不是虚构的，它是对流体行为的足够可靠的指导。但是被称为人工粘度的组成部分是虚构的-它并不被用于可靠地建模冲击。它被纳入到一个更大的建模框架中，以使该更大的框架“足够可靠”。

这个解释/原理引起了两种批评。Toon（2010）认为这个对小说的定义太狭窄了。他举了历史小说《我，克劳狄乌斯》和《辛德勒的名单》的例子，他认为尽管它们“在某些方面被提供为‘足够好’的指南，我们有权将它们视为这样的指南。”（第 286-7 页）。可以推测，Toon 支持更广泛的科学小说角色概念，根据这个概念，小说在计算机模拟中并不起特别突出或提高的作用。

Gordon Purves（即将出版）认为在计算模型中有小说的例子（他的例子是所谓的“想象中的裂缝”），以及其他地方，这些例子不符合上述严格要求。然而，与 Toon 不同，他还希望将虚构建模元素与非虚构建模元素区分开来。他的主要批评是关于社会使用规范中的虚构性标准，Purves 认为我们应该能够在没有这些规范的情况下确定某个建模部分是否是虚构的。因此，他希望找到科学小说的内在特征描述。他的提议认为，模型小说的构成要素是它们没有 Laymon（1985）所称的“逐段改进”（PI）特征。PI 是许多理想化模型的特征；它表示随着你去理想化，你的模型变得越来越准确。但是，当你去理想化一个硅原子时，你并不会得到一个越来越准确的硅裂缝模拟。但是 Purves 认为这种 PI 的失败是虚构的构成要素，而不仅仅是它们的症状。

<!--md-padding-ignore-begin-->
## Bibliography

* Barberousse, A., and P. Ludwig, 2009. “Models as Fictions,” in *Fictions in Science. Philosophical Essays in Modeling and Idealizations*, London: Routledge, 56–73.
* Barberousse, A., and Vorms, M. 2014. “About the warrants of computer-based empirical knowledge,” *Synthese*, 191(15): 3595–3620.
* Bedau, M.A., 2011. “Weak emergence and computer simulation,” in P. Humphreys and C. Imbert (eds.), *Models, Simulations, and Representations*, New York: Routledge, 91–114.
* –––, 1997. “Weak Emergence,” *Noûs* (Supplement 11), 31: 375–399.
* Beisbart, C. and J. Norton, 2012. “Why Monte Carlo Simulations are Inferences and not Experiments,” in *International Studies in Philosophy of Science*, 26: 403–422.
* Beisbart, C., 2017. “Advancing knowledge through computer simulations? A socratic exercise,” in M. Resch, A. Kaminski, & P. Gehring (eds.), *The Science and Art of Simulation* (Volume I), Cham: Springer, pp. 153–174./
* Burge, T., 1993. “Content preservation,” *The Philosophical Review*, 102(4): 457–488.
* –––, 1998. “Computer proof, apriori knowledge, and other minds: The sixth philosophical perspectives lecture,” *Noûs,*, 32(S12): 1–37.
* Currie, Adrian, 2018. “The argument from surprise,” *Canadian Journal of Philosophy*, 48(5): 639–661
* Dardashti, R., Thebault, K., and Winsberg, E., 2015. “Confirmation via analogue simulation: what dumb holes could tell us about gravity,” in *British Journal for the Philosophy of Science*, 68(1): 55–89
* Dardashti, R., Hartmann, S., Thebault, K., and Winsberg, E., 2019. “Hawking radiation and analogue experiments: A Bayesian analysis,” in *Studies in History and Philosophy of Modern Physics*, 67: 1–11.
* Epstein, J., and R. Axtell, 1996. *Growing artificial societies: Social science from the bottom-up*, Cambridge, MA: MIT Press.
* Epstein, J., 1999. “Agent-based computational models and generative social science,” *Complexity*, 4(5): 41–57.
* Franklin, A., 1996. *The Neglect of Experiment*, Cambridge: Cambridge University Press.
* –––, 1989. “The Epistemology of Experiment,” *The Uses of Experiment*, D. Gooding, T. Pinch and S. Schaffer (eds.), Cambridge: Cambridge University Press, 437–60.
* Frigg, R., and J. Reiss, 2009. “The philosophy of simulation: Hot new issues or same old stew,” *Synthese*, 169: 593–613.
* Giere, R. N., 2009. “Is Computer Simulation Changing the Face of Experimentation?,” *Philosophical Studies*, 143: 59–62
* Gilbert, N., and K. Troitzsch, 1999. *Simulation for the Social Scientist*, Philadelphia, PA: Open University Press.
* Grüne-Yanoff, T., 2007. “Bounded Rationality,” *Philosophy Compass*, 2(3): 534–563.
* Grüne-Yanoff, T. and Weirich, P., 2010. “Philosophy of Simulation,” *Simulation and Gaming: An Interdisciplinary Journal*, 41(1): 1–31.
* Guala, F., 2002. “Models, Simulations, and Experiments,” *Model-Based Reasoning: Science, Technology, Values*, L. Magnani and N. Nersessian (eds.), New York: Kluwer, 59–74.
* –––, 2008. “Paradigmatic Experiments: The Ultimatum Game from Testing to Measurement Device,” *Philosophy of Science*, 75: 658–669.
* Hacking, I., 1983. *Representing and Intervening: Introductory Topics in the Philosophy of Natural Science*, Cambridge: Cambridge University Press.
* –––, 1988. “On the Stability of the Laboratory Sciences,” *The Journal of Philosophy*, 85: 507–15.
* –––, 1992. “Do Thought Experiments have a Life of Their Own?” *PSA* (Volume 2), A. Fine, M. Forbes and K. Okruhlik (eds.), East Lansing: The Philosophy of Science Association, 302–10.
* Hartmann, S., 1996. “The World as a Process: Simulations in the Natural and Social Sciences,” in R. Hegselmann, et al. (eds.), *Modelling and Simulation in the Social Sciences from the Philosophy of Science Point of View*, Dordrecht: Kluwer, 77–100.
* Hubig, C, & Kaminski, A., 2017. “Outlines of a pragmatic theory of truth and error in computer simulation,” in M. Resch, A. Kaminski, & P. Gehring (eds.), *The Science and Art of Simulation* (Volume I), Cham: Springer, pp. 121–136.
* Hughes, R., 1999. “The Ising Model, Computer Simulation, and Universal Physics,” in M. Morgan and M. Morrison (eds.), *Models as Mediators*, Cambridge: Cambridge University Press.
* Huggins, E. M.,and E. A. Schultz, 1967. “San Francisco bay in a warehouse,” *Journal of the Institute of Environmental Sciences and Technology*, 10(5): 9–16.
* Humphreys, P., 1990. “Computer Simulation,” in A. Fine, M. Forbes, and L. Wessels (eds.), *PSA 1990* (Volume 2), East Lansing, MI: The Philosophy of Science Association, 497–506.
* –––, 1995. “Computational science and scientific method,” in *Minds and Machines*, 5(1): 499–512.
* –––, 2004. *Extending ourselves: Computational science, empiricism, and scientific method*, New York: Oxford University Press.
* –––, 2009. “The philosophical novelty of computer simulation methods,” *Synthese*, 169: 615–626.
* Kaufmann, W. J., and L. L. Smarr, 1993. *Supercomputing and the Transformation of Science*, New York: Scientific American Library.
* Laymon, R., 1985. “Idealizations and the testing of theories by experimentation,” in *Observation, Experiment and Hypothesis in Modern Physical Science*, P. Achinstein and O. Hannaway (eds.), Cambridge, MA: MIT Press, 147–73.
* Lenhard, J., 2007. “Computer simulation: The cooperation between experimenting and modeling,” *Philosophy of Science*, 74: 176–94.
* –––, 2019. *Calculated Surprises: A Philosophy of Computer Simulation*, Oxford: Oxford University Press
* Lenhard, J. & Küster, U., 2019. *Minds & Machines*. 29: 19.
* Morgan, M., 2003. “Experiments without material intervention: Model experiments, virtual experiments and virtually experiments,” in *The Philosophy of Scientific Experimentation*, H. Radder (ed.), Pittsburgh, PA: University of Pittsburgh Press, 216–35.
* Morrison, M., 2012. “Models, measurement and computer simulation: The changing face of experimentation,” *Philosophical Studies*, 143: 33–57.
* Norton, S., and F. Suppe, 2001. “Why atmospheric modeling is good science,” in *Changing the Atmosphere: Expert Knowledge and Environmental Governance*, C. Miller and P. Edwards (eds.), Cambridge, MA: MIT Press, 88–133.
* Oberkampf, W. and C. Roy, 2010. *Verification and Validation in Scientific Computing*, Cambridge: Cambridge University Press.
* Oreskes, N., with K. Shrader-Frechette and K. Belitz, 1994. “Verification, Validation and Confirmation of Numerical Models in the Earth Sciences,” *Science*, 263(5147): 641–646.
* Parke, E., 2014. “Experiments, Simulations, and Epistemic Privilege,” *Philosophy of Science*, 81(4): 516–36.
* Parker, W., 2008a. “Franklin, Holmes and the Epistemology of Computer Simulation,” *International Studies in the Philosophy of Science*, 22(2): 165–83.
* –––, 2008b. “Computer Simulation through an Error-Statistical Lens,” *Synthese*, 163(3): 371–84.
* –––, 2009a. “Does Matter Really Matter? Computer Simulations, Experiments and Materiality,” *Synthese*, 169(3): 483–96.
* –––, 2013. “Computer Simulation,” in S. Psillos and M. Curd (eds.), *The Routledge Companion to Philosophy of Science*, 2nd Edition, London: Routledge.
* –––, 2017. “Computer Simulation, Measurement, and Data Assimilation,” *British Journal for the Philosophy of Science*, 68(1): 273–304.
* Peschard, I., 2010. “Modeling and Experimenting,” in P. Humphreys and C. Imbert (eds), *Models, Simulations, and Representations*, London: Routledge, 42–61.
* Primiero, G., 2019. “A Minimalist Epistemology for Agent-Based Simulations in the Artificial Sciences,” *Minds and Machines*, 29(1): 127–148.
* Purves, G.M., forthcoming. “Finding truth in fictions: identifying non-fictions in imaginary cracks,” *Synthese*.
* Resch, M. M., Kaminski, A., & Gehring, P. (eds.), 2017. *The science and art of simulation I: Exploring-understanding-knowing*, Berlin: Springer.
* Roush, S., 2015. “The epistemic superiority of experiment to simulation,” *Synthese*, 169: 1–24.
* Roy, S., 2005. “Recent advances in numerical methods for fluid dynamics and heat transfer,” *Journal of Fluid Engineering*, 127(4): 629–30.
* Ruphy, S., 2015. “Computer simulations: A new mode of scientific inquiry?” in S. O. Hansen (ed.), *The Role of Technology in Science: Philosophical Perspectives*, Dordrecht: Springer, pp. 131–149
* Schelling, T. C., 1971. “Dynamic Models of Segregation,” *Journal of Mathematical Sociology*, 1: 143–186.
* Simon, H., 1969. *The Sciences of the Artificial*, Boston, MA: MIT Press.
* Symons, J., & Alvarado, R., 2019. “Epistemic Entitlements and the Practice of Computer Simulation,” *Minds and Machines*, 29(1): 37–60.
* Toon, A., 2010. “Novel Approaches to Models,” *Metascience*, 19(2): 285–288.
* Trenholme R., 1994. “Analog Simulation,” *Philosophy of Science*, 61: 115–131.
* Unruh, W. G., 1981. “Experimental black-hole evaporation?” *Physical Review Letters*, 46(21): 1351–53.
* Winsberg, E., 2018. *Philosophy and Climate Science*, Cambridge: Cambridge University Press
* –––, 2010. *Science in the Age of Computer Simulation*, Chicago: The University of Chicago Press.
* –––, 2009a. “A Tale of Two Methods,” *Synthese*, 169(3): 575–92
* –––, 2009b. “Computer Simulation and the Philosophy of Science,” *Philosophy Compass*, 4/5: 835–845.
* –––, 2009c. “A Function for Fictions: Expanding the scope of science,” in *Fictions in Science: Philosophical Essays on Modeling and Idealization*, M. Suarez (ed.), London: Routledge.
* –––, 2006. “Handshaking Your Way to the Top: Inconsistency and falsification in intertheoretic reduction,” *Philosophy of Science*, 73: 582–594.
* –––, 2003. “Simulated Experiments: Methodology for a Virtual World,” *Philosophy of Science*, 70: 105–125.
* –––, 2001. “Simulations, Models, and Theories: Complex Physical Systems and their Representations,” *Philosophy of Science*, 68: S442–S454.
* –––, 1999. “Sanctioning Models: The Epistemology of Simulation,” *Science in Context*, 12(3): 275–92.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=simulations-science). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/simulations-science/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=simulations-science&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/simulations-science/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

* [Phys.org – computer simulations](http://phys.org/tags/computer+simulations/).
* [Computer simulation](http://www.sciencedaily.com/articles/c/computer_simulation.htm), at sciencedaily.com.
* [IPPC – Intergovernmental Panel on Climate Change](http://www.ipcc.ch/publications_and_data/publications_and_data_reports.shtml).

## Related Entries

[biology: experiment in](https://plato.stanford.edu/entries/biology-experiment/) | [computation: in physical systems](https://plato.stanford.edu/entries/computation-physicalsystems/) | [computer science, philosophy of](https://plato.stanford.edu/entries/computer-science/) | [computing: modern history of](https://plato.stanford.edu/entries/computing-history/) | [emergent properties](https://plato.stanford.edu/entries/properties-emergent/) | [models in science](https://plato.stanford.edu/entries/models-science/) | [physics: experiment in](https://plato.stanford.edu/entries/physics-experiment/) | [science: theory and observation in](https://plato.stanford.edu/entries/science-theory-observation/) | [scientific representation](https://plato.stanford.edu/entries/scientific-representation/) | [scientific theories: structure of](https://plato.stanford.edu/entries/structure-scientific-theories/)

[Copyright © 2019](https://plato.stanford.edu/info.html#c) by  
[Eric Winsberg](http://www.cas.usf.edu/~ewinsb/) <[*winsberg@usf.edu*](mailto:winsberg%40usf%2eedu)>
<!--md-padding-ignore-end-->
