---
title: Power Automateを使うときの備忘録
description: Power Automateを使うときの備忘録
createdAt: 2022/03/28
---

## 空白の処理

1. 「テキストを置換」を選択．
2. 「検索するテキスト」に```%''%```を入れる．```''```内には全角スペースや半角スペースを入れる．
3. 「検索と置換に正規表現を使う」・「大文字と小文字を区別しない」などのオプションはdisabledのままでOK．

``` powershell
Text.Replace Text: FileContents TextToFind: $'''%'     '%''' IsRegEx: False IgnoreCase: False ReplaceWith: $''',''' ActivateEscapeSequences: False Result=> Replaced
```
