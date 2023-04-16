---
title: Google Apps Script(GAS)とSpreadsheetを使ってランダムな時刻にメールを送信する
description: Google Apps Script(GAS)とSpreadsheetを使ってランダムな時刻にメールを送信する
createdAt: 2022/02/23
---

## 準備するもの

1. 有効なGoogleアカウント

## プログラム構造

### GAS

ランダムな時刻を生成し、トリガー登録する。
スプレッドシートに格納した各種情報を取得する。
メールを送信する。

### Spreadsheet

送信先メールアドレス、送信先名など各種情報を登録する。

メールアドレス|名前|使用言語|ステータス
:---:|:---:|:--:|:---:
String|String|0: 日本語, 1: 英語|0: 有効, 1: 無効

## GASスクリプト

### 前段階

基準となる時間と時間幅を設定する。

``` js
const hour = [9, 12, 18];
const interval = 179; //minutes
```

### ランダムな時刻を生成

前段階で用意した時間と時間幅からランダムな時刻を生成する。

``` js
function setTime(i) {
  const day = new Date();
  let nowDate = day.getDate();
  let nowHour = day.getHours();
  let nowMinutes = day.getMinutes();

  let setMin = Math.floor(Math.random() * interval);
  day.setHours(hour[i]);
  day.setMinutes(setMin);

  let getHour = day.getHours();
  let getMin = day.getMinutes();

  if(getHour <= nowHour & getMin <= nowMinutes){
    day.setDate(nowDate + 1);
  }
  return day;
}
```

### GASのトリガーに登録

生成された各時間をGASのトリガーに登録する。

``` js
function setTrigger() {
  deleteTrigger(); //トリガーセット前に全トリガーを削除

  for (let i = 0; i < hour.length; i++) { //トリガー対象時間をループ処理
    const triggerTime = setTime(i); //時刻を設定
    Logger.log(triggerTime)
    ScriptApp.newTrigger("main") //main関数を実行するトリガーを設定
      .timeBased()
      .at(triggerTime)
      .create();
  }
}
```

### トリガーを削除する

トリガーを登録し続けてしまうので、トリガー設定時にすでにセットされているトリガーを全消去する必要がある。

``` js
function deleteTrigger () {
  //プロジェクトのすべてのトリガーを取得
  const triggers = ScriptApp.getProjectTriggers();

  //すべてのトリガーを削除
  for (const trigger of triggers) {
    ScriptApp.deleteTrigger(trigger);
  }
}
```

### メールを送信する

トリガーに登録した実行する関数にメールを送信する機構を用意する。

``` js
function main ()  {
  const address = getAddress();
  for (let i = 0; i < address.length; i++) {
    let email = address[i][0];
    let name = address[i][1];
    let lang = address[i][2];
    let status = address[i][3];
    const message = {
      0: {
        'subject': '設定した時刻になりました',
        'content': `こんにちは、${name}さん\nアプリを操作し、質問に応答してください。`
      },
      1: {
        'subject': 'Reminded time',
        'content': `Hello, ${name}\nPlease answer the questionnaire via EMA app.`
      }
    }
    if(status < 1) {
      MailApp.sendEmail(email, message[lang].subject, message[lang].content);
      //Logger.log(email + ': ' + message[lang].subject + ': ' + message[lang].content)
    }
  }
}
```
