---
title: LaTeXで講義課題レポートを楽に生成したいと思います
description: LaTeXで講義課題レポートを楽に生成したいと思います
createdAt: 2022/04/17
---

## 環境

- Windows 11
- Tex Live(最新のやつ)
- VSCode + LaTeX Workshop

## 出力フォーマット

用意したTeXファイルによって次の情報を含むPDFを出力させる。

![想定するPDF](https://mura32033.com/assets/img/docs/myreportlatexpdf.png)

## TeXファイル

VSCodeのユーザスニペットに登録して一発でテンプレートを読み込めるようにした。

``` tex

\documentclass[a4paper]{jsarticle}
\usepackage{myreport}
\begin{document}
\reportinfo{〇〇論}{鈴木}{1}{あいうえおについて述べよ。}
%===== ここからレポート本文 =====
\end{document}

```

### myreport.sty

名前や所属など、どのレポートでも同じ情報を同じように出力させるために次のようなファイルにした。
普段いじることを想定していない。

``` tex

\newcommand{\studentName}{田中太郎}
\newcommand{\studentID}{1234-5678}
\newcommand{\belonging}{〇〇研究科△△専攻□□コース}

\newcommand{\reportinfo}[4]{
2022年度{#1}

\belonging

\studentID \quad \studentName

第{#3}回講義課題

担当: {#2} 先生

\hspace{1em}

\emph{#4}

}

```
