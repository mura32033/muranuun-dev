---
id: hamatrashv2
shortDesc: 以前作ったものを改良しました。
tags: [JavaScript, Vue]
---

# 浜松市ごみ分別品目検索

浜松市からオープンデータがJSON形式で公開されており、データの自動取得が容易になったため以前のものを一から作り直してみました。リアルタイム検索でサーバに負荷をかけないようにするため、また、定期取得したマスターデータを用意するため、浜松市のJSONファイルを一旦Google Spreadsheetに保存し、そのシートをGASを通してVueで処理して表示させています。

## 使用技術

HTMLとVue.jsを使用しました。JSONの取得とSpreadsheetへの保存、JSON形式での配信はGoogle Apps Scriptを用いました。今回はCSSフレームワークを使わず自作しました。

## 著作権表示

このアプリは以下の著作物を改変して利用しています。『分別区分一覧、浜松市、[クリエイティブ・コモンズ・ライセンス 表示2.1](http://creativecommons.org/licenses/by/2.1/jp/)』

::ImageGroup{way="vert"}
![浜松市ごみ分別品目検索スクリーンショット](https://mura32033.com/assets/img/works/hama_trash_v2_1.png)
![浜松市ごみ分別品目検索スクリーンショット](https://mura32033.com/assets/img/works/hama_trash_v2_2.png)
::

::OuterLinkGroup
  :::OuterLink{type="link" text="浜松市ごみ分別品目検索" url="https://mura32033.com/toolbox/hama_trash_v2/"}
  :::
::
