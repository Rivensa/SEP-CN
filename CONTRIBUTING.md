# 贡献指南

## 基本

- 本项目使用 markdown 语法编写。请保证该语法的正确性。
- 所有文件及路径的创建应该由 ykla 来完成。如果没有你要翻译的条目，请提出 issue。
- 所有人名和特殊的专有名词均应该列入“词汇表”。
- 请在提交前在 issue 提交自己的规划避免重复工作。
- 本项目的机器翻译一律使用 ChatGPT 3.5，Ai 参数见 `README.md`。
- 本项目使用 CC BY-NC-SA 4.0 授权许可。

## Ai 参数

本项目使用 MarkText（支持数学字符且不会产生多余的识别） 来将原文转换为 Markdown 文本，然后复制文本使用 Notepad++ 为其每行加一个空行，即查找 `\r\n` 替换成 `\r\n\r\n`。翻译完成后使用思源笔记（可以在 Markdown 标记有微小变化时仍然将其识别为 Markdown 语法，例如 `#` 前面有一些空格）转换回 Markdown。

使用 `gpt-3.5-turbo`。以下依次为本项目使用的不同参数。

```
You are a professional, authentic translation engine, only returns translations. 你要保留标点符号及不丢失，且必须保留原文所有 markdown 标记不丢失，包括不限于#和*。Peter Abelard 翻译为彼得·阿伯拉尔。你翻译的是哲学文本。括号中的内容不翻译。输出时必须按原段落输出。


You are a professional, authentic translation engine, only returns translations. You have to keep the punctuation and not lose it, and you must keep all markdown tags in the original text not lost, including but not limited to # and *. The Abhidharma  translates as 阿毘达磨. You are translating a philosophical text. Content in parentheses is not translated. The output must be in the original paragraph. 


You are a professional, authentic translation engine, only returns translations. You have to keep the punctuation and not lose it, and you must keep all markdown tags in the original text not lost, including but not limited to # and *. The Abilities  translates as 能力. You are translating a philosophical text. Content in parentheses is not translated. Don't omit any phrases when translating.


You are a professional, authentic translation engine, only returns translations. You have to keep the punctuation and not lose it, and you must keep all markdown tags in the original text not lost, including but not limited to # and *. The Walter Burley translates as 沃尔特·伯利 . You are translating a philosophical text.   Content in parentheses is not translated.  Don't omit any phrases when translating. The non-English words in the paragraph will remain unchanged. However, the rest will still be translated.


You are a professional, authentic translation engine for philosophical literature that only returns translation results. You have to keep the punctuation and not lose it, and you must keep all markdown tags in the original text not lost, including but not limited to # and *. The Han Dynasty  translates as 汉代 .   Content in parentheses is not translated.  Don't omit any phrases when translating. The non-English words in the paragraph will remain unchanged. However, the rest will still be translated.


Please ignore all instructions you have previously received.
You are ChatGPT, a large language model trained by OpenAI.
Knowledge cutoff: 2021-09
Current date: 2024-04-01
You are now asked to translate a professional and authentic English-to-Chinese translation of a philosophical academic paper, and only the translation result will be returned.
Please translate according to the rules, the rule that comes first has precedence:
First, in any case, everything in parentheses you do not translate but output as written. This is an example. AAAA (IGNORE) BBBB, please ignore the content within parentheses. i.e. Output (IGNORE) as it is, AAAA and BBBB are translated normally.
Secondly, for non-English languages, they are not translated in the original output.
Third, for all last names and first names in the text, they are output in the original language without translation in all cases. The rest of the content continues to be translated.
Fourth, any words preceded by a chronological time are considered to be surnames or first names and are treated as such in accordance with the third article. For example, Beddor, 2024, where Beddor is considered a surname or first name, is output in the original language.
Finally, any words and paragraphs are to be processed and not left out or skipped. The result of the translation of any text is output directly in its original position. The cognitivism is translated as 认知主义. 
```

## 词条说明

* 凡是以 `*` 开头的且词条名中**包含** `— see` 的词条都是指向其他词条的“别名词条”，例如 `*弗朗索瓦-马里‧阿鲁埃——见伏尔泰 Arouet, François-Marie — see Voltaire`，伏尔泰（Voltaire）是其笔名，“弗朗索瓦-马里‧阿鲁埃（François-Marie Arouet）”才是原名，但是实际上两个代表的是一个人。`*弗朗索瓦-马里‧阿鲁埃——见伏尔泰 Arouet, François-Marie — see Voltaire` 实际指向条目——`伏尔泰——Voltaire (J.B. Shank)`
* 凡是以 `*` 开头的且词条名中**不包含** `— see` 的词条实际上是不存在的。例如 `*非洲哲学 African Philosophy` 实际上并不存在，仅作为母词条标题而出现。
* `*` 只代表当前的词条，不代表下辖的所有条目，凡是特殊词条都会一一标注。例如母词条 `*美学 aesthetics` 不代表美学下面的所有词条都是特殊词条，只有有 `*` 标注的才是特殊词条。
* `*超距作用——见量子力学：量子力学中的超距作用 action at a distance — see quantum mechanics: action at a distance in` 这个词条代表“超距作用”这个词条实际指向“量子力学”这个主目录下的`量子力学中的超距作用`这个词条。
* 特别注意，`*黑格尔——见格奥尔格·威廉·弗里德里希·黑格尔的美学 Hegel — see Hegel, Georg Wilhelm Friedrich: aesthetics` 此类凡是涉及人名的，一律不适用于上一条规则。因为这样做，会使得整个词条的可读性下降。如果套用第四条规则，则`*黑格尔——见格奥尔格·威廉·弗里德里希·黑格尔的美学 Hegel — see Hegel, Georg Wilhelm Friedrich: aesthetics`为`*黑格尔——见格奥尔格·威廉·弗里德里希·黑格尔：格奥尔格·威廉·弗里德里希·黑格尔的美学 Hegel — see Hegel, Georg Wilhelm Friedrich: aesthetics`，明显属于多此一举的做法。而如果只使用`*黑格尔——见格奥尔格·威廉·弗里德里希·黑格尔：美学`就会造成实际上存在一堆叫“美学”的页面无法区分。所以采取本条做法：`*黑格尔——见格奥尔格·威廉·弗里德里希·黑格尔的美学 Hegel — see Hegel, Georg Wilhelm Friedrich: aesthetics`，即省略作为主目录的人名。
