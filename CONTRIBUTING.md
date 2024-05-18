# 贡献指南

## 基本

- 本项目使用 markdown 语法编写。请保证该语法的正确性。
- 所有文件及路径的创建应该由 ykla 来完成。如果没有你要翻译的条目，请提出 issue。
- 所有人名和特殊的专有名词均应该列入“词汇表”。
- 请在提交前在 issue 提交自己的规划避免重复工作。
- 本项目的机器翻译一律使用 ChatGPT 3.5，Ai 参数见 `README.md`。
- 本项目使用  BSD 授权许可。

## Ai 参数

本项目使用 MarkText（支持数学字符且不会产生多余的识别） 来将原文转换为 Markdown 文本，然后复制文本使用 Notepad++ 为其每行加一个空行，即查找 `\r\n` 替换成 `\r\n\r\n`。翻译完成后使用思源笔记（可以在 Markdown 标记有微小变化时仍然将其识别为 Markdown 语法，例如 `#` 前面有一些空格）转换回 Markdown。

使用 `gpt-3.5-turbo`。以下依次为本项目使用的不同参数。

```
You are a professional, authentic translation engine. You only return the translated text, without any explanations. 
1. retain specific English terms, titles or names. The rest of the text continues to be translated. 
2. The zombies  to 僵尸.
4. The Account  to 解释/原理. The accommodation to 解释.  The property to 属性/性质. The  moral  desert to 道德应得. The agency to 行为体. The desert to 应得. The testimony to 证言. The commentators to 评注者. The Schelling to 谢林. The Supervenience to 随附. The agent to 行为体. The Token to 个体.
```

```
^\s*\*\s*\[.*?\].*$

将以 * [ 开头的行全部删除

\* \[\\\*.*\R

将以 * [\* 开头的行全部删除

git rev-list --objects --all | grep "$(git verify-pack -v .git/objects/pack/*.idx | sort -k 3 -n | tail -5 | awk '{print$1}')" 
寻找 Git 记录中的大文件

合并两个Git项目 
https://moqiang02.github.io/2023/09/05/git%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E4%B8%8D%E5%90%8C%E4%BB%93%E5%BA%93/

https://rhysd.github.io/actionlint/ 在线检查 git actioon 语法

markdownlnt 规则介绍 中文 https://www.newverse.wiki/senses/markdownlint/
```
## 词条说明

- 凡是以 `*` 开头的且词条名中 **包含** `— see` 的词条都是指向其他词条的“别名词条”，例如 `*弗朗索瓦-马里‧阿鲁埃——见伏尔泰 Arouet, François-Marie — see Voltaire`，伏尔泰（Voltaire）是其笔名，“弗朗索瓦-马里‧阿鲁埃（François-Marie Arouet）”才是原名，但是实际上两个代表的是一个人。`*弗朗索瓦-马里‧阿鲁埃——见伏尔泰 Arouet, François-Marie — see Voltaire` 实际指向条目——`伏尔泰——Voltaire (J.B. Shank)`
- 凡是以 `*` 开头的且词条名中 **不包含** `— see` 的词条实际上是不存在的。例如 `*非洲哲学 African Philosophy` 实际上并不存在，仅作为母词条标题而出现。
- `*` 只代表当前的词条，不代表下辖的所有条目，凡是特殊词条都会一一标注。例如母词条 `*美学 aesthetics` 不代表美学下面的所有词条都是特殊词条，只有有 `*` 标注的才是特殊词条。
- `*超距作用——见量子力学：量子力学中的超距作用 action at a distance — see quantum mechanics: action at a distance in` 这个词条代表“超距作用”这个词条实际指向“量子力学”这个主目录下的 `量子力学中的超距作用` 这个词条。

