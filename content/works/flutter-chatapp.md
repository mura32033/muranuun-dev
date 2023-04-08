---
id: flutter-chatapp
shortDesc: 自由にアプリ開発を行う講義課題で作成しました。
thumbnail: https://mura32033.com/assets/img/works/architecture.jpg
tags: [Dart, Flutter]
---

# Flutterを使ったテキスト感情分析機能付きWeb/Android用チャットアプリ

講義課題としてFlutterを使ったチャットアプリを開発しました。
チャット機能自体はとてもシンプルな機能しかありません。
テキストと画像が送信できます。

## 特徴

![アプリのアーキテクチャ](https://mura32033.com/assets/img/works/architecture.jpg)
特徴は、感情表現としてスタンプや顔文字を使用するのではなく、フォントを使っていることです。
さらに、Google Cloud PlatformのNatural Language APIを通してSentiment Analysisのスコアを用いて自動感情分析・フォント選択をできるようにしました。

## 使用技術

Dart言語を使用しています。フレームワークとしてFlutterを採用しました。また、FirebaseやGoogle Cloud Platformとの連携にAPIを導入しています。

::ImageGroup{way="hori"}
![チャットアプリ起動画面のスクリーンショット](https://mura32033.com/assets/img/works/chatapp_1.jpg)
![トークルーム一覧画面のスクリーンショット](https://mura32033.com/assets/img/works/chatapp_2.jpg)
![トーク画面のスクリーンショット](https://mura32033.com/assets/img/works/chatapp_3.jpg)
::

::OuterLinkGroup
  :::OuterLink{type="github" text="mura32033/flutter_chatapp" url="https://github.com/mura32033/flutter_chatapp"}
  :::
::
