# 社会程序的形式化方法 social procedures, formal approaches (Jan van Eijck and Rineke (L.C.) Verbrugge)

*首次发布于 2014 年 9 月 8 日星期一；实质性修订于 2019 年 11 月 7 日星期四*

具有算法性质的社会程序通常可以通过重新设计来改进。这适用于投票和其他和平决策程序，匹配制度，拍卖制度，财产公平分配制度以及许多分配正义程序。算法性质可以用形式化方法进行分析。术语“社会软件”是由 Rohit Parikh（2002）创造的，用于描述涉及设计和分析调节社会过程的算法的新兴跨学科企业。这种分析和重新设计使用了逻辑、博弈论和理论计算机科学的方法。形式化方法研究社会程序的目标是对社会情境进行建模，发展正确性理论，并重新设计社会程序，理想情况下导致新的社会行为。

逻辑、博弈论和计算机科学并不是唯一能够对社会机制发表意见的学科。这些机制也是选举理论、拍卖理论、社会选择理论、社会认识论、机制设计理论和算法博弈论的研究对象。更抽象层面上的多主体交互在人工智能和分布式计算中得到研究，因此所有这些学科都对社会交互的形式化分析有所贡献。

---

## 1. 社会程序作为算法

社交软件不能被视为一个独立的明确定义的研究领域，而是计算机科学、逻辑学和博弈论中某些类型研究的总称。然而，社交软件对社会程序和智能交互的视角，强调算法和信息，已经产生了许多重要的见解。本文将讨论一些例子，并指出与哲学相关的讨论。

数学中算法的原型例子（参见可计算性和复杂性的条目）是欧几里得求两个正整数 A 和 B 的最大公约数（GCD）的方法。两个数的最大公约数是能够整除这两个数而没有余数的最大数。

> 如果 A 大于 B，则将 A 替换为 A-B；否则，如果 B 大于 A，则将 B 替换为 B-A。继续这样进行，直到 A 等于 B 为止。

最终的 A=B 给出了您开始的数字 A 和 B 的最大公约数。例如，假设您用 A=20，B=12 开始算法。然后在第一步中，A 被 20-12=8 替换，所以 8 成为新的 A。在第二步中，B 被 12-8=4 替换，所以 4 成为新的 B。在第三步中，A 被 8-4=4 替换，所以 4 成为新的 A，而数字 A 和 B 变得相等。该算法给出 20 和 12 的最大公约数为 4。

欧几里得的算法是形式化的，我们可以用形式化的方法进行分析。欧几里得算法的正确性来自于这样的洞察力：如果您有两个数字 A 和 B，其中 A 大于 B，并且您用 A-A 替换 A，那么数字对的公约数集合不会改变。

算法有很多形式和风格，例如，顺序和并行算法。有关计算机科学中算法的有趣介绍，请参阅 Harel＆Feldman（2004）和 Miller＆Boxer（2012）。与这些算法类似，社会程序可以用逻辑和理论计算机科学的形式工具进行分析。[2]

似乎最适合形式化方法的是那些希望在给定特定起始条件的情况下，保持或创建特定期望属性的社会程序。例如，公平分配的社会程序（第 2 节），匹配的社会程序（第 3 节），沟通的社会程序（第 4 节）。最后，形式化视角对于需要参与者战略推理的情况非常有用（第 5 节）。一个共同的元素是，在所有这些情况下，代理人对其他代理人的心理状态的知识和无知起着重要作用。作为对本文中示例的对应，Van Benthem（2018）提供了一个有关社会视角在计算机科学本身中的当前角色的引人注目的概述，强调社会行为和信息。

## 2. 公平性

单独的形式化方法不能解决哲学问题，正如 Padma（2007）的以下故事所示。

> 兩個農民，拉姆和夏姆正在吃印度煎餅。拉姆有 3 片扁平的圓麵包，夏姆有 5 片。一個看起來飢餓和疲憊的旅行者騎著馬來到這兩個人面前。拉姆和夏姆決定與他分享他們的煎餅。三個人將 8 片煎餅（像煎餅一樣）疊在一起，將疊好的煎餅分成 3 等份。他們平均分配這些份量，一直吃到沒有剩下任何東西。這位旅行者是一位貴族，非常感激，他給了這兩個農民 8 個金幣作為他分得的食物的報酬。
>
> 旅行者離開後，拉姆和夏姆想知道他們應該如何分配這 8 個金幣。拉姆說有 8 個金幣，只有 2 個人，所以每個人應該平均分得 4 個金幣。夏姆說：“但這不公平，因為我一開始就有 5 片煎餅。”拉姆能理解他的觀點，但他不想把 5 個金幣都給夏姆。所以他建議他們去找非常聰明的穆拉維。夏姆同意了。
>
> 拉姆和夏姆把整個故事告訴了穆拉維。經過長時間的思考後，他說最公平的分配金幣的方式是給夏姆 7 個金幣，給拉姆 1 個金幣。兩個人都感到驚訝。但當他們要求穆拉維解釋他的理由時，他們對這 8 個金幣的公平分配感到滿意。

这里是参与者可能给出的解释每个提到的分配公平的原因：

1. Ram：“如果旅行者没有到达，我们本应平均分配煎饼。所以现在平均分配八个硬币也是公平的。”
2. Shyam：“如果旅行者没有到达，你本应以市场价格从我这里购买一个煎饼。现在旅行者如此慷慨，市场价格突然涨到一个金币一个煎饼。所以你的煎饼变成了价值三个金币，而我的煎饼变成了价值五个金币。”
3. 马乌尔维：“旅行者吃了八个煎饼的三分之一。拉姆一开始只有三个煎饼，所以他从拉姆那里吃了 1/3 个煎饼，从夏姆那里吃了 7/3 个煎饼。所以如果拉姆得到一个硬币，夏姆得到七个硬币是公平的。”

这个故事的一个道德是，在这种情况下，以及许多情况下，公平的概念并不明显正确。形式化分析总是从直觉开始，并可以帮助将直觉转化为更精确的定义。然后可以检查给定的程序是否符合定义；然而，如果符合，这并不意味着定义是正确的。

### 2.1 公平分配

社会程序与世界同样古老。分割与选择（也称为“我切，你选”）是一种用于两人公平分割某种有价值或无价值的异质商品的程序。一人将商品分割成她认为是相等份额的部分，另一人进行选择。如果两个参与者对商品的部分具有不同的价值判断，可能两个参与者都会觉得自己获得了超过 50%的商品。实际上，设 X 表示要分割的商品的集合。对于 X 的估值函数 V 是一个从 P(X)到 [0,1] 的函数，具有以下性质：V(∅)=0，V(X)=1，并且对于所有的子集 A、B，如果 A⊆B⊆X，则 V(A)≤V(B)（有关符号的解释，请参见基本集合论的补充说明）。假设 Vm 和 Vy 是我和你对 X 的内容的估值函数。如果 Vm 和 Vy 不同，这意味着你和我对 X 中的某些物品有不同的价值。正如斯坦豪斯在 1948 年已经观察到的那样，存在一种分割方式，使双方都获得超过他们应得份额的商品；“这个事实证明了一个普遍观点的错误，即估值的差异使公平分割变得困难”（斯坦豪斯 1948 年）。

对于双方是否知道彼此的估值是很重要的。这种知识可以被切割方利用。首先考虑你的估值对我来说是未知的情况，反之亦然。那么如果我进行切割，我能做的最好的选择是选择集合 A、B⊆X，其中 A∩B=∅，A∪B=X，并且 Vm(A)=Vm(B)。如果你进行选择，你将使用 Vy 来选择{Vy(A),Vy(B)}的最大值。立即可以得出结论，切割保证了公平份额，但不会更多，而选择则为更好的交易提供了承诺。因此，如果你在双方只知道自己的估值的情况下面临切割和选择的选择时，你最好将切割留给对方。

然而，如果估值是共识的（参见共识条目），情况就会反转，因为这时候扮演切割者的角色更有利。作为切割者，你可以尝试根据对方的估值将蛋糕分成稍微比 B 更有价值的 A 集合和比 A 更有价值的 B 集合，而根据你自己的估值，B 比 A 更有价值。

这个例子表明，知识和无知的问题对于公平分配协议的分析至关重要。认识逻辑（参见认识逻辑条目）可以在社会互动中的知识和无知的许多微妙方面提供很多启示，特别是在公平分配问题中；关于知识和无知重要性的有趣蛋糕切割实验，请参见 Kyropoulou 等人（2019）。然而，在传统的公平分配研究中，知识的作用并未被考虑进去，这可以从 Robertson＆Webb（1998）对“蛋糕切割算法”的全面研究中看出。

### 2.2 在超过两个参与者之间切割蛋糕

在社会选择文献中（Brams 2005; Brams & Taylor 1996），使用蛋糕切割作为一个单一异质商品的分配的隐喻是常见的做法。将一块土地在继承时分割就是一个例子。蛋糕上有不同的配料，不能都切成具有相同组成的块：它可能顶部有糖渍樱桃，有人喜欢但另一个人讨厌，等等。如果每个 n 个玩家中的每个人都感觉到自己至少获得了蛋糕的 1/n，那么蛋糕的分割就是公平的，根据她对其部分的个人估值。一个过程可能是公平的，但并不排除可能产生不愉快的可能性。如果每个人都觉得没有其他人得到了更大的一块，那么蛋糕的分割被称为无嫉妒。一个分割是无嫉妒的明显迹象是没有人希望与其他人交换块。设计既公平又无嫉妒的蛋糕切割程序非常困难。我切，你选的程序是公平的，而且它是无嫉妒的，因为蛋糕的剩余部分是一个整体，所以没有嫉妒的可能性。有关嫉妒无关性的哲学讨论，请参见经济学 [规范] 和经济公正的条目。

R. Parikh（2002）分析了所谓的 Banach-Knaster 算法，用于将蛋糕公平地分割给至少三个人，过程如下：

> 我切一块给自己。其他人都考虑一下。如果没有人反对，我就得到我的那块。如果有人提出反对，她有权切下一片并将其放回蛋糕的剩余部分。然后她问是否可以得到这个减少了的块。如果没有人反对，她就得到了，否则其他人拿起刀再次减少一点，依此类推，直到有人得到了修剪过的块。然后进入下一轮，剩下 n-1 个玩家。当只剩下两个玩家时，他们使用分割和选择算法。

Parikh 的讨论显示了理论计算机科学的方法如何用于证明该程序是公平的。该程序的关键要素是一个循环操作：

> 继续修剪这块蛋糕，直到没有关于大小的进一步异议。

假设 r 代表修剪一块蛋糕并将其放回主蛋糕的行为，根据 Banach-Knaster 算法，假设 F(m,k)是主蛋糕足够大供 k 个人的命题。那么显然 F(m,n)在开始时成立：整个蛋糕对于整个团体来说足够大。此外，Parikh（1983 年，2002 年）使用他的游戏逻辑证明了 F(m,k)在行为 r 下是不变的：如果在 r 之前 F(m,k)为真，则在 r 发生后仍然为真。显然，如果可以证明 F(m,k)在算法中持续成立，对于 k 从 n 到 1，那么这就证明了该分配是公平的。[3]

### 2.3 所罗门的判断

所罗门王在著名的所罗门的判断中玩了一个变种的分割和选择游戏，这是在两个声称都是一个孩子的母亲之间的争议中进行的。完整的故事在《列王纪上》3:16-28 中。住在同一所房子里的两个女人都有一个婴儿儿子。其中一个女人声称另一个女人在她睡觉时意外闷死自己的儿子后偷走了她的孩子。另一个女人否认了这一点，并反诉了这个指控。在听完她们的故事后，所罗门王要求拿来一把剑，并宣布只有一个公平的解决办法：把活着的孩子切成两半，让两个女人各得一半。听到这个，真正的母亲大声说她愿意放弃孩子，只要孩子能被救活，而假母亲则同意这个判断。这种行为揭示给所罗门知道了谁是真正的母亲，她的孩子被归还给了她。

这个过程是不可重复的。正如圣经故事所说：

> 以色列全体人民听说了国王的判决，他们都敬畏国王，因为他们看到上帝的智慧在他身上，能够公正判断。

显然，在第二个类似的争议中，两个女人都会喊：“把孩子给她，但要让它活下去！”

所罗门处理这个情况的方式可以转化为一个可重复的社会程序，如下所示。所罗门没有要求拿出剑，而是向两个女人解释了以下程序。首先，他将询问第一个女人是否愿意放弃孩子。如果答案是“是”，争议就解决了，不再问任何问题。否则，他将问另一个女人是否愿意放弃孩子。同样，如果答案是“是”，争议就解决了。如果她们都拒绝，那么孩子就是他的，然后他将允许其中一位女人以一个待定的价格买回孩子。她们将在一张纸上写下一笔钱，不写上自己的名字。如果两个出价分别为 A 和 B，那么孩子的价格就设定为 A+B2，命运将决定哪个女人以那个价格得到孩子，而另一个女人则需要支付一笔小罚款。如果这两个女人都是理性的，其中一个在被问到时会放弃孩子（有关理性的哲学讨论，请参见有关实践理性和博弈论以及伦理学的条目，参见 Moore 1992 和 Pauly 2005）。

Moore（1992）和 Pauly（2005）都讨论了在所罗门王案例中推理共同知识和无知的重要性。例如，所罗门王不知道谁是真正的母亲，但两个女人从一开始就共同知道谁是真正的母亲，真正的母亲因此会出价比另一个更高。这使得程序变得安全。再次，认识逻辑，尤其是共同知识，有助于阐明一个棘手的社会程序。有关公平分配问题的更传统哲学介绍，包括对公平、可操纵性和无嫉妒的更详细解释，请参阅经济学 [规范] 和经济正义的条目。

下一节将展示社交软件的视角也可以对社交匹配问题提供启示。这些问题包括婚姻、住院医生分配、大学录取程序以及学生住房分配等。

## 3. 稳定婚姻问题

假设有一组男性和女性，他们都希望嫁给异性，并且每个男性都通过严格的排序列出了对女性的偏好，女性也是如此。稳定的婚姻匹配是指男性和女性之间的一对一映射，具有以下特性：如果一个男性更喜欢另一个女性而不是自己的妻子，那么这个女性不会更喜欢他而不是她自己的丈夫；如果一个女性更喜欢另一个男性而不是自己的丈夫，那么这个男性不会更喜欢她而不是他自己的妻子。

### 3.1 Gale-Shapley 算法

计算机科学家 Gale 和 Shapley 证明了稳定匹配总是存在，并提出了一种寻找这种匹配的算法，即所谓的 Gale-Shapley 算法（Gale＆Shapley 1962）：

> 最初，所有男性和女性都是自由的（未订婚）。
>
> 接下来，在一系列的回合中，每个自由的男性向他尚未求婚的最优先女性求婚，并将她从他的名单中划掉。如果女性是自由的，她会接受求婚，他们就会订婚。如果女性不是自由的，她会将求婚者与她目前的未婚夫进行比较。如果她更喜欢求婚者，她会抛弃未婚夫，未婚夫重新变成自由的，而求婚者和他选择的女性会订婚。
>
> 这个过程会一直持续，直到所有男性和女性都订婚。

举个例子，假设有三个男人 a、b、c 和三个女人 d、e、f，他们的偏好列表如下（列表中最喜欢的排在第一位）：a:edf、b:fed、c:dfe、d:abc、e:cda、g:acb。所以 a:edf 表示 a 更喜欢 e 而不是 d，更喜欢 d 而不是 f。假设偏好是传递的，所以 a 也更喜欢 e 而不是 f。

对于这种情况，一个稳定匹配的例子可以表示为三对（a,e）、（b,f）、（c,d）。注意，女人 d 最终与她列表中最不喜欢的男人配对。但这个匹配仍然是稳定的，因为尽管 c 愿意与其他两个男人交换丈夫，但这两个候选人不会同意，因为他们都恰好与自己列表中最喜欢的女人结婚了。

要检查 Gale-Shapley 算法总是产生稳定匹配的情况，我们可以按照以下步骤进行。显然，没有人订婚的情况是稳定的。

对于“参与”映射 E 在女性集合 W 和男性集合 M 上的稳定意味着什么？让我们使用 m>wm′表示“w 更喜欢 m 而不是 m′”（所以更大的值更好）。

(1)

对于所有(m,w)∈E：如果存在 w′使得 w′>mw，则不存在 m′使得(m′,w′)∈E 且 m>w′m′；

(2)

对于所有(m,w)∈E：如果存在 m′使得 m′>wm，则不存在 w′使得(m′,w′)∈E 且 w>m′w′。

一个人自由是什么意思？

(3)

自由人的集合应该等于所有人的集合减去已经订婚的人。

接下来，检查算法中的单个步骤会发生什么。步骤的前提条件是至少还有一个自由人 m。这样一个自由人 m 向他尚未求婚的名单中排名最高的女人 w 求婚。

有两种情况。如果 w 是自由的，w 接受提议，他们就订婚了。新的订婚配对集合稳定吗？我们只需要检查新的配对(w,m)。

* 假设有一个自由的 w'，满足 w'>mw。这是不可能的，因为 w 在 m 的名单顶部。
* 假设有一个 m'，满足 m'>wm。那么如果 m'已经订婚，假设是和 w'，这必须意味着不满足 w>m'w'。否则，m'会向 w 而不是 w'提出提议。
* 新的自由男子名单等于旧名单减去 m。这是正确的，因为 m 刚刚订婚。

现在考虑另一种情况：假设 w 已经订婚。有两种情况。如果 w 更喜欢她现在的未婚夫，那么什么都不会发生。订婚对的名单仍然是稳定的。自由男子的名单保持不变，因为 m 求婚被拒绝了。

如果 w 更喜欢 m 而不是她自己的未婚夫 m'，她会交换：(m,w)取代了(m',w)在订婚对的集合中。同样，很容易看出，得到的订婚对的名单是稳定的。男人 m 在自由男子的集合中被 m'替换。这也是正确的。

注意，Gale-Shapley 匹配算法对于提出提议的一方非常有利。提出提议的一方有机会按照偏好顺序向任何候选人提出提议。但是在程序开始时，接受提议的一方必须对任何提议都说“是”！在算法中交换男性和女性的角色也会计算出一个稳定的匹配，但对女性更有利。

Gale-Shapley 程序的运行时间与男性和女性的数量成二次关系（参见 Cechlérová 等人，2005 年）。Pini 等人（2011 年）展示了参与者如何通过歪曲自己真实的偏好来轻松操纵程序的结果。幸运的是，Pini 等人还提出了一种替代程序，操纵该程序是困难的，因为想出一个个体上有利的偏好的歪曲是一个计算复杂的任务。

Gale-Shapley 算法在许多重要应用中都有用途，不仅限于婚姻媒人领域；Gale 和 Shapley 本人讨论了大学入学程序（1962 年）。下一小节介绍另一个应用。

### 3.2 大学住房分配程序

从社会软件的角度出发，Parikh 和 Pauly（2012）研究了一种在斯坦福大学住房抽签中使用的 Gale-Shapley 算法的变体，用于将学生分配到房间。这种情况比婚姻环境更复杂，因为学生并不对所有房屋给出完整的排序，而只对其中 8 个房屋进行排序；此外，他们可以选择以小组形式参加抽签。在住房环境中，学生们有动机诚实地提交他们真实的偏好：对他们来说，抽签是不可操纵的。然而，从理论上讲，他们仍然可以策划选择提交偏好的 8 个房屋的子集。

在这种情况下，知识的问题是有趣的。尽管该算法可以在斯坦福网页上找到，但大多数学生和管理员并不完全理解它的工作原理。因此，不能假设斯坦福住房抽签是学生们共同知识。一个有趣的现象似乎发生了：即使承认不理解该算法，大多数学生仍然会说他们相信它是公平的（Parikh＆Pauly 2012）。

## 4. 通信的逻辑

通信协议在分布式计算中非常重要：即在分布式系统中进行计算，其中分布式系统是一组通过通信网络连接的计算机。从哲学的角度来看，通信协议也很有趣，特别是在讨论隐私价值（参见隐私和计算以及道德责任的条目）的背景下。形式化方法可以帮助回答哲学问题，比如“更多的安全是否自动导致更少的隐私？”。

### 4.1 通信和分布式计算

在下面的例子中，灵感不仅仅从社会问题流向形式解决方案，而且还可以反过来，从成功的社会实践流向形式程序。许多分布式计算的算法与日常生活中的社会协议相关。一个例子是在同龄人群体中使用“说话棒”来调节讨论和决策的规则，规定说话棒会传递并且只有持有说话棒的人才能说话（Nerburn 1999）。

基于这种社会程序的计算机通信协议是令牌环协议。在分布式计算中，令牌环是一个网络，每台计算机与其他两台计算机连接，以使得每台计算机在网络中都可以到达，并且一个单独的“令牌”在环形网络中循环。通信只能由当前拥有令牌的计算机发起。

有时候令牌会因为计算机或网络故障而丢失。在这种情况下，需要重新生成令牌，并保证只有一台计算机拥有令牌。这个在令牌环中重新生成令牌的问题被称为领导者选举问题。以下是一个解决该问题的算法：

> 假设通信顺时针进行，并且每台计算机可以区分其顺时针邻居和逆时针邻居。假设所有计算机都有不同的标识符（正整数），并且每台计算机都知道自己的标识符。
>
> 每台计算机将其标识符发送到环上。当计算机 c 接收到一个标识符时，c 将其与自己的标识符进行比较。如果标识符大于自己的标识符，c 将其传递下去。如果标识符小于自己的标识符，c 将其丢弃。如果标识符等于自己的标识符，c 宣布自己为领导者。

不难看出，这保证了具有最高标识符 imax 的计算机成为领导者（参见 Lynch 1996）。对于环中计算机的数量以及任何计算机对环的大小或其他计算机的标识符的了解，都不需要做任何假设。协议的下一个阶段可以是领导者发送一个请求来注册为非领导者并停止。

进一步的抽象层次是从分布式计算机或进程到相互作用的智能代理或多智能体系统。这些代理可以是计算机、机器人、人类、人类团队或它们的混合体。通常假设这些代理具有一定的自治程度，这些代理对整个系统有限的局部视图，并且整个系统没有指定的控制器（参见 Wooldridge 2002 [2009]）。

### 4.2 共同知识和社会程序

许多社会程序旨在创建共同知识（Lewis 1969；van Ditmarsch 等人 2009；以及共同知识条目）。当您从银行账户中提取大额现金并由出纳员以现金形式支付给您时，发生的老式仪式就是一个例子。

如何以及是否能够实现共同知识取决于可用的通信设施。公开宣布或公开可见的仪式（如上所述的收银仪式）可以创造共同知识。但是，正如 Halpern 和 Moses（1984）证明的那样，在分布式环境中进行消息交换，在这种环境中无法保证消息的传递。Halpern 和 Moses 以两位将军计划对一座城市进行协调攻击的例子进行了说明。这两位将军分别位于城市的两侧山上，各自拥有自己的军队，并且他们知道只有在两支军队同时发起攻击时才能成功占领城市。但是分隔两座山的山谷处于敌人手中，任何从一支军队基地发送到另一支军队的信使都面临被捕获的严重风险。将军们已经同意进行联合攻击，但仍然需要确定时间。因此，将军们开始发送消息，例如，“让我们在上午 9 点发起攻击”。但他们无法确定信使是否成功传递了他们的消息。而且，即使传递成功，也无法保证确认消息能够传递。依此类推。

即使在实践中有时很难实现共同知识，它仍然是调节社会的必要假设。罗马的立法者很早就发现，如果他们管辖范围内的公民可以因为不知道法律而声称无罪，那么任何罪犯都无法被定罪。因此，他们创造了 Ignorantia legis neminem excusat（不知法律不免责）等原则。遵守法治的社会必须以一种使公民原则上能够了解法律的方式组织起来。法律必须得到适当的发布和分发，例如通过印刷在每个公民都可以访问的政府公报中。

在他的书《理性仪式》（2001 年）中，Michael Suk-Young Chwe 指出了建立共同知识的群体规模的重要性。在一个大群体中，一个常识的品牌价值很高。Chwe 分析了在美国橄榄球超级碗期间播放的广告的例子。他将通过这些广告使某事成为常识的巨大成本与明显的好处进行了比较。其中一部分好处在于广告创造了共同知识。例如，在决定购买某个特定品牌的智能手机时，重要的考虑因素之一是其他人也会购买同款手机的知识。

当然，在许多社交场合中，您可能希望阻止共同知识的产生，例如，如果您想向某些人保密。还有更有趣的情况，每个人都知道某个事实，例如某个国家拥有核武器，但是公开宣布这个事实会导致政治问题。关于维护隐私和无知至关重要的一些社交情况，请参阅 van Eijck 和 Verbrugge（2009 年）。一个有趣的最新发展是基于动态认知逻辑的认知规划研究，它使我们能够合成通信协议，以在群体中创建某些高阶知识水平的确切配置（Bolander 和 Andersen 2011，Löwe，Pacuit 和 Witzel 2011）。

## 5. 战略推理和合作

游戏理论的广阔领域在本百科全书的其他条目中有详细解释（请参阅游戏理论的条目）。自从经典著作（冯·诺依曼和莫根斯特恩，1944 年）出现以来，这个研究领域一直非常活跃。同样，社会选择理论，特别是投票理论（请参阅社会选择理论和投票方法的条目），在社会软件这个术语出现之前就已经是蓬勃发展的研究领域了。

研究形式化方法和算法视角如何帮助解决社会问题是很有用的。例如，在著名的囚徒困境案例中（请参阅囚徒困境的条目），有趣的是尝试设计能够通过惩罚来减少作弊对另一方有利的政策。请注意，这种“社会软件工程”是在元层次上进行的，即在囚徒选择策略的层次之上（van Eijck，2015 年）。

游戏理论中与社会软件相关的一个最新趋势是摒弃纳什均衡等解决概念，而是专注于理性思辨的过程：即“博弈论”（请参阅 van Benthem，Pacuit 和 Roy，2011 年的条目以及用于分析游戏的逻辑的条目）。这种研究类型界定了指导玩家战略推理的规范原则，以及解释游戏中预测行为与观察行为之间差异的心理现象（Camerer，2003 年；Ghosh 和 Verbrugge，2018 年；Pacuit，2015 年；Meijering 等，2012 年，2014 年；Top 等，2018 年）。

在第 4.2 节中，我们简要讨论了在分析社会程序时知识和信念研究的作用。在这方面，认识论博弈论领域关注的是代理人对其他代理人策略的信念，以及那些代理人对其他代理人策略的信念，依此类推，一直到一组代理人之间的共同知识的理想情况，即他们都是理性的（参见关于博弈论认识论基础的条目；Perea 2012；Brandenburger 2014）。

结果证明，在特定的投票理论中，设计一种逻辑来明确地模拟代理人在投票时所带来的知识是有用的。特别有趣的是，在代理人通过误导自己的偏好以操纵结果时，模拟群体中发生的情况（van Eijck 2015；van Ditmarsch et al. 2012）。

近年来，在多智能体系统的研究领域中，形式化方法也被用于帮助设计实际的软件，例如用于团队合作问题解决、联盟形成、知识融合、拍卖和软件代理人之间的谈判（Bulling et al. 2015；Chalkiadakis et al. 2011；Dunin-Kęplicz and Verbrugge 2010；Pauly 2002；Shoham and Leyton-Brown 2009；Vazirani et al. 2007）。这些文献大多是规范性的。

相比之下，另一个令人着迷的研究领域，进化博弈论（参见进化博弈论条目），研究了利他主义、社会规范、道德行为和合作等特征如何实际上进化。这个领域结合了规范性和描述性工作（Axelrod 1984；Bowles 和 Gintis 2011；Sigmund 2010）。作为对这个领域的特定社会软件贡献，Gärdenfors（2012）描述了对于几种合作形式，从简单的群集行为，到互惠利他主义（“你帮我挠背，我帮你挠背”），再到完全成熟的团队合作，需要多少认知和沟通。

## 6. 结论

总之，强调算法和信息的社会程序和智能互动的形式视角产生了各种重要的见解。它还引发了有趣的哲学讨论。未来的主要挑战似乎是统一这个目前相对分散的领域，在这个领域中，许多贡献者似乎不知道其他子领域的相关工作。

<!--md-padding-ignore-begin-->
## Bibliography

### General References

* Başkent, C., L.S. Moss, and R. Ramanujam, (eds.), 2017, *Rohit Parikh on Logic, Language and Society* (Outstanding Contributions to Logic: Volume 11), Berlin: Springer.
* Başkent, C., 2017, “A Non-Classical Logical Approach to Social Software”, in Başkent, Moss, & Ramanujam 2017, pp. 91–110.
* van Benthem, J., 2018, “Computation as Social Agency: What, How and Who”, *Information and Computation*, 261: 519–535.
* Eijck, J. van, and Ph. Elsas, 2017, “What Is Money?”, in Başkent, Moss, & Ramanujam 2017, pp. 67–76.
* Eijck, J. van, and R. Verbrugge (eds.), 2009, *Discourses on Social Software* (Texts in Logic and Games: Volume 5), Amsterdam: Amsterdam University Press.
* ––– (eds.), 2012, *Games, Actions and Social Software: Multidisciplinary Aspects* (Lecture Notes in Computer Science: Volume 7010), Berlin: Springer.
* Harel, D., and Y.A. Feldman, 2004, *Algorithmics: The Spirit of Computing*, London: Pearson Education.
* Miller, R., and L. Boxer, 2012, *Algorithms Sequential & Parallel: A Unified Approach*, Boston, MA: Cengage Learning.
* Pacuit, E., 2005, *Topics in Social Software: Information in Strategic Situations*, Ph.D. thesis, New York: City University of New York.
* Parikh, R., 2002, “Social Software”, *Synthese*, 132: 187–211.
* –––, 2017, “Is There a Church-Turing Thesis for Social Algorithms?”, in A. Bokulich and J. Floyd (eds.), *Philosophical Explorations of the Legacy of Alan Turing*, (Boston Studies in the Philosophy of Science, Volume 324), Berlin: Springer, pp. 339–357.
* Pauly, M., 2001, *Logic for Social Software*, Ph.D. thesis, Amsterdam: ILLC.

### Fairness

* Brams, S., 2005, “Fair Division”, in B.R. Weingast and D. Witteman (eds.), *Oxford Handbook of Political Economy*, Oxford: Oxford University Press, pp. 425–437.
* Brams, S., and A. Taylor, 1996, *Fair Division: From Cake-Cutting to Dispute-Resolution*, Cambridge: Cambridge University Press.
* Kyropoulou, M., J. Ortega, and E. Segal-Halevi, 2019, “Fair Cake-Cutting in Practice”, in *Proceedings of the 2019 ACM Conference on Economics and Computation*, ACM Press, pp. 547–548.
* Moore, J., 1992, “Implementation, Contracts, and Renegotiation in Environments with Complete Information”, in J.-J Laffont (ed.), *Advances in Economic Theory — 6th World Congress* (Volume 1), Cambridge: Cambridge University Press.
* Padma, T., 2007, *Mathematwist: Number Tales from Around the World*, Chennai: Tulika Publishers.
* Parikh, R., 1983, “Propositional Game Logic”, in *24th Annual Symposium on Foundations of Computer Science*, Washington, DC: IEEE Computer Society, pp. 195–200.
* Pauly, M., 2005, “Changing the Rules of Play”, *Topoi*, 24(2): 209–222.
* Robertson, J., and W. Webb, 1998, *Cake-Cutting Algorithms: Be Fair If You Can*, Boca Raton, FL: A.K. Peters.
* Steinhaus, H., 1948, “The Problem of Fair Division”, *Econometrica*, 16: 101–104.

### The Stable Marriage Problem

* Gale, D., and L. Shapley, L., 1962, “College Admissions and the Stability of Marriage, *American Mathematical Monthly*, 69: 9–15.
* Cechlérová, K., and D.F. Manlove, 2005, “The Exchange-Stable Marriage Problem”, *Discrete Applied Mathematics*, 152(1–3): 109–122.
* Parikh, R., and M. Pauly, 2012, “What is Social Software?”, in van Eijck and Verbrugge 2012: 3–14.
* Pini, M. S., F. Rossi, K.B. Venable, and T. Walsh, 2011, “Manipulation complexity and gender neutrality in stable marriage procedures”. *Autonomous Agents and Multi-Agent Systems*, 22(1): 183–199.

### The Logic of Communication

* Bolander, T., and M.B. Andersen, 2011, “Epistemic Planning for Single-and Multi-Agent Systems”, *Journal of Applied Non-Classical Logics*, 21(1): 9–34.
* Chwe, M. S.-Y., 2001, *Rational Ritual*, Princeton and Oxford: Princeton University Press.
* van Ditmarsch, H., J. van Eijck, and R. Verbrugge, 2009, “Common Knowledge and Common Belief”, in J. van Eijck and R. Verbrugge (eds.), *Discourses on Social Software*, (Texts in Logic and Games), Amsterdam: Amsterdam University Press, pp. 99–122.
* van Eijck, J., and R. Verbrugge, 2009, “Eating from the Tree of Ignorance”, in J. van Eijck and R. Verbrugge (eds.), *Discourses on Social Software* (Texts in Logic and Games), Amsterdam: Amsterdam University Press, pp. 184–198.
* Halpern, J., and Y. Moses, 1984, “Knowledge and Common Knowledge in a Distributed Environment”, in *Proceedings of the 3rd ACM Symposium on Principles of Distributed Computing (PODS)*, pp. 50–61; revised, *Journal of the ACM*, 37/3 (1990): 549–587.
* Lewis, D., 1969, *Convention: A Philosophical Study*, Cambridge, MA: Harvard University Press.
* Löwe, B., E. Pacuit, and A. Witzel, 2011, “DEL Planning and Some Tractable Cases”, in Proceedings International Workshop on Logic, Rationality and Interaction (LORI), Berlin, Heidelberg: Springer, pp. 179–192.
* Lynch, N., 1996, *Distributed Algorithms*, San Mateo, CA: Morgan Kaufmann.
* Nerburn, K., 1999, *The Wisdom of the Native Americans*, Novato, CA: New World Library.
* Wooldridge, M., 2002 [2009], *An Introduction to Multi-Agent Systems*, first edition, Chichester: John Wiley and Sons; second edition 2009.

### Strategic Reasoning and Cooperation

* Axelrod, R., 1984, *The Evolution of Cooperation*, New York: Basic Books.
* Benthem, J. van, S. Ghosh, and R. Verbrugge (eds.), 2015, *Models of Strategic Reasoning: Logics, Games, and Communities* (FoLLI Publications on Logic, Language and Information, LNCS 8972), Berlin: Springer.
* Benthem, J. van, E. Pacuit, and O. Roy, 2011, “Toward a Theory of Play: A Logical Perspective on Games and Interaction”, *Games*, 2(1): 52–86.
* Bowles, S., and H. Gintis, 2011, *A Cooperative Species: Human Reciprocity and its Evolution*, Princeton and Oxford: Princeton University Press.
* Brandenburger, A., 2014, *The Language of Game Theory: Putting Epistemics into the Mathematics of Games*, Singapore: World Scientific.
* Bulling, N., and V. Goranko, 2015, “Logics for Reasoning About Strategic Abiliies in Multi-Player Games”, in van Benthem, Ghosh, & Verbrugge 2015: 93–136.
* Camerer, C.F., 2003, *Behavioral Game Theory: Experiments on Strategic Interaction*, Princeton: Princeton University Press.
* Chalkiadakis, G., E. Elkind, and M. Wooldridge, 2011, *Computational Aspects of Cooperative Game Theory* (Synthesis Lectures on Artificial Intelligence and Machine Learning: Volume 5), San Rafael, CA: Morgan and Claypool Publishers.
* Ciná, G., and U. Endriss, 2016, “Proving Classical Theorems of Social Choice Theory in Modal Logic”, *Autonomous Agents and Multi-Agent Systems*, 30(5): 963–989.
* Ditmarsch, H. van, J. Lang, and A. Saffidine, 2012, “Strategic Voting and the Logic of Knowledge”, in *Proceedings of the 11th International Conference on Autonomous Agents and Multiagent Systems (AAMAS’12)*, vol. 3, pp. 1247–1248.
* Dunin-Kęplicz, B., and R. Verbrugge, 2010, *Teamwork in Multi-Agent Systems: A Formal Approach*, Chichester: Wiley.
* Eijck, J. van, 2015, “Strategies in Social Software”, in van Benthem, Ghosh, & Verbrugge 2015: 292–317.
* Gärdenfors, P., 2012, “The Cognitive and Communicative Demands of Cooperation”, in van Eijck and Verbrugge 2012: 164–183.
* Ghosh, S., and R. Verbrugge, 2018, “Studying Strategies and Types of Players: Experiments, Logics and Cognitive Models”, *Synthese*, 195(10): 4265–4307.
* Grädel, E., W. Thomas, and T. Wilke (eds.), 2002, *Automata Logics, and Infinite Games*, (Lecture Notes in Computer Science 2500), Berlin, Heidelberg: Springer.
* Klein, D., and E. Pacuit, 2017, “Focusing on Campaigns”, in Başkent, Moss, & Ramanujam 2017, pp. 77–90.
* Meijering, B., H. van Rijn, N. Taatgen, and R. Verbrugge, 2012,“What Eye Movements Can Tell about Theory of Mind in a Strategic Game”, *PLoS ONE*, 7(9), e45961, doi:10.1371/journal.pone.0045961
* Meijering, B., N. Taatgen, H. van Rijn, and R. Verbrugge, 2014, “Modeling Inference of Mental States: As Simple as Possible, as Complex as Necessary“, *Interaction Studies*, 15(3): 455–477.
* Pacuit, E., 2015, “Strategic Reasoning in Games”, in van Benthem, Ghosh, & Verbrugge 2015: 3–33.
* Pauly, M., 2002, “A Modal Logic for Coalitional Power in Games”, *Journal of Logic and Computation*, 12: 149–166.
* Perea, A., 2012, *Epistemic Game Theory: Reasoning and Choice*, Cambridge: Cambridge University Press.
* Shoham, Y., and K. Leyton-Brown, 2009, *Multiagent Systems: Algorithmic, Game-Theoretic and Logical Foundations*, Cambridge: Cambridge University Press.
* Sigmund, K., 2010, *The Calculus of Selfishness*, (Princeton Series in Theoretical and Computational Biology), Princeton and Oxford: Princeton University Press.
* Top, J., R. Verbrugge, and S. Ghosh, 2018, “An Automated Method for Building Cognitive Models for Turn-Based Games from a Strategy Logic”, *Games*, 9(3),44; doi:10.3390/g9030044
* Vazirani, V.V., N. Nisan, T. Roughgarden, and E. Tardos (eds.), 2007, *Algorithmic Game Theory*, Cambridge: Cambridge University Press.
* Von Neumann, J., and O. Morgenstern, 1944, *Theory of Games and Economic Behavior*, Chichester: Wiley.

## Academic Tools

> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [How to cite this entry](https://plato.stanford.edu/cgi-bin/encyclopedia/archinfo.cgi?entry=social-procedures). |
> | --- | --- |
> | ![sep man icon](https://plato.stanford.edu/symbols/sepman-icon.jpg) | [Preview the PDF version of this entry](https://leibniz.stanford.edu/friends/preview/social-procedures/) at the [Friends of the SEP Society](https://leibniz.stanford.edu/friends/). |
> | ![inpho icon](https://plato.stanford.edu/symbols/inpho.png) | [Look up topics and thinkers related to this entry](https://www.inphoproject.org/entity?sep=social-procedures&redirect=True) at the Internet Philosophy Ontology Project (InPhO). |
> | ![phil papers icon](https://plato.stanford.edu/symbols/pp.gif) | [Enhanced bibliography for this entry](https://philpapers.org/sep/social-procedures/) at [PhilPapers](https://philpapers.org/), with links to its database. |

## Other Internet Resources

### Conference Series

* [AAMAS: Autonomous Agents and Multiagent Systems](http://www.ifaamas.org/).
* [TARK: Theoretical Aspects of Rationality and Knowledge](http://www.tark.org/).
* [LORI: Workshops on Logic, Rationality, and Interaction](http://golori.org/)
* [LOFT: Logic and the Foundations of Game and Decision Theory](http://www.econ.ucdavis.edu/faculty/bonanno/loft.html).

### Other Sites

* [Games, Action and Social Software: ESSLLI 2009 Course by Jan van Eijck and Rineke Verbrugge](https://rinekeverbrugge.nl/teaching/)
* [Logics of Rational Agency: NASSLLI 2010 course by Eric Pacuit](http://ai.stanford.edu/~epacuit/lograt/nasslli2010.html)
* [A Discrete and Bounded Envy-Free Cake Cutting Protocol: Presentation by Haris Aziz and Simon Mackenzie](https://www.youtube.com/watch?v=jGiAckY00ik)
* [Interactive demo of the Gale-Shapley algorithm for stable matching](http://mathsite.math.berkeley.edu/smp/smp.html)
* [Movie of the token ring protocol](http://vimeo.com/26173735)

## Related Entries

[altruism: biological](https://plato.stanford.edu/entries/altruism-biological/) | [Arrow’s theorem](https://plato.stanford.edu/entries/arrows-theorem/) | [belief merging and judgment aggregation](https://plato.stanford.edu/entries/belief-merging/) | [common knowledge](https://plato.stanford.edu/entries/common-knowledge/) | [computability and complexity](https://plato.stanford.edu/entries/computability/) | [computing: and moral responsibility](https://plato.stanford.edu/entries/computing-responsibility/) | [economics [normative] and economic justice](https://plato.stanford.edu/entries/economic-justice/) | [epistemology: social](https://plato.stanford.edu/entries/epistemology-social/) | [game theory](https://plato.stanford.edu/entries/game-theory/) | [game theory: and ethics](https://plato.stanford.edu/entries/game-ethics/) | [game theory: epistemic foundations of](https://plato.stanford.edu/entries/epistemic-game/) | [game theory: evolutionary](https://plato.stanford.edu/entries/game-evolutionary/) | [justice: transitional](https://plato.stanford.edu/entries/justice-transitional/) | [logic: action](https://plato.stanford.edu/entries/logic-action/) | [logic: epistemic](https://plato.stanford.edu/entries/logic-epistemic/) | [logic: for analyzing games](https://plato.stanford.edu/entries/logics-for-games/) | [logic: paraconsistent](https://plato.stanford.edu/entries/logic-paraconsistent/) | [practical reason](https://plato.stanford.edu/entries/practical-reason/) | [prisoner’s dilemma](https://plato.stanford.edu/entries/prisoner-dilemma/) | [privacy](https://plato.stanford.edu/entries/privacy/) | [redistribution](https://plato.stanford.edu/entries/redistribution/) | [social choice theory](https://plato.stanford.edu/entries/social-choice/) | [social institutions](https://plato.stanford.edu/entries/social-institutions/) | [social norms](https://plato.stanford.edu/entries/social-norms/) | [technology, philosophy of](https://plato.stanford.edu/entries/technology/) | [voting: methods](https://plato.stanford.edu/entries/voting-methods/)

## Acknowledgments

I would like to express my gratitude to Jan van Eijck for the enjoyable time of writing the first 2014 version of this article together. Thanks are also due to two anonymous referees for suggesting several improvements and additions for this updated version. Because of Jan’s retirement a few years ago, the 2019 update of the article has been made by me (Rineke Verbrugge) and I therefore bear sole responsibility for any remaining infelicities; please let me know if you spot any.

[Copyright © 2019](https://plato.stanford.edu/info.html#c) by  
[Jan van Eijck](https://staff.fnwi.uva.nl/d.j.n.vaneijck2/)  
[Rineke (L.C.) Verbrugge](https://rinekeverbrugge.nl/) <[*L.C.Verbrugge@rug.nl*](mailto:L%2eC%2eVerbrugge%40rug%2enl)>
<!--md-padding-ignore-end-->
