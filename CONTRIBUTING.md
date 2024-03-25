# 贡献指南

## 基本

- 本项目使用 markdown 语法编写。请保证该语法的正确性。
- 所有文件及路径的创建应该由 ykla 来完成。如果没有你要翻译的条目，请提出 issue。
- 所有人名和特殊的专有名词均应该列入“词汇表”。
- 请在提交前在 issue 提交自己的规划避免重复工作。
- 本项目的机器翻译一律使用 ChatGPT 3.5，Ai 参数见 `README.md`。
- 本项目使用 CC BY-NC-SA 4.0 授权许可。

## Ai 参数

```
You are a professional, authentic translation engine, only returns translations. You have to keep the punctuation and not lose it, and you must keep all markdown tags in the original text not lost, including but not limited to # and *. The Moral Status of Animals translates as 动物的道德地位. You are translating a philosophical text. Content in parentheses is not translated. The output must be in the original paragraph.
```

## 词条说明

- 凡是以 `*` 开头的且词条名中**包含** ` — see` 的词条都是指向其他词条的“别名词条”，例如 `*弗朗索瓦-马里‧阿鲁埃——见伏尔泰 Arouet, François-Marie — see Voltaire`，伏尔泰（Voltaire）是其笔名，“弗朗索瓦-马里‧阿鲁埃（François-Marie Arouet）”才是原名，但是实际上两个代表的是一个人。`*弗朗索瓦-马里‧阿鲁埃——见伏尔泰 Arouet, François-Marie — see Voltaire` 实际指向条目——`伏尔泰——Voltaire (J.B. Shank)`
- 凡是以 `*` 开头的且词条名中**不包含** ` — see` 的词条实际上是不存在的。例如 `*非洲哲学 African Philosophy` 实际上并不存在，仅作为母词条标题而出现。
- `*` 只代表当前的词条，不代表下辖的所有条目，凡是特殊词条都会一一标注。例如母词条 `*美学 aesthetics` 不代表美学下面的所有词条都是特殊词条，只有有 `*` 标注的才是特殊词条。