---
title: PubMedから最新の論文を取得し、ChatGPTに投げてG-Mailに送信する
description: 論文を素早く読むためのシステムを作りました。
createdAt: 2023/04/22
---

## 背景

PubMedから最新の論文を取得し、ChatGPTに投げてG-Mailに送信するシステムを作りました。
ChatGPTを使って、論文のアブストを要約しつつ日本語訳させ、素早く論文の内容を把握できるようにしました。
また、GASを使うことで定期実行させ、毎日の新着論文を自動で要約してくれるようにしました。
要約しなかった論文も、リンクを貼っておくことで、後から読むことができるようにしました。

このコードは、[@niniziv](https://twitter.com/niniziv/status/1638155751515631617?s=20)さんのものを参考に、処理の一部を改良しました。

### 簡単なプログラム構造

- PubMedから最新の論文を取得する。
- ChatGPTに投げて返答を取得する。
- G-Mailに送信する。

## 準備するもの

1. 有効なGoogleアカウント
2. OpenAIのAPIキー

### 必要な事前情報

以下はプログラムを動かすために必要な事前情報を示しています。
適宜、プロンプトの内容やメールのタイトル、検索クエリを変更してください。

:::alert{type="warning"}
ChatGPTはトークンに課金されます。

レスポンスだけでなく、プロンプトを送る際にもトークンが消費されるので、それも考慮してプロンプトや要約する論文の本数を設定します。
:::

```js[code.gs]
// OpenAI の API keys (https://platform.openai.com/account/api-keys)
const OPENAI_API_KEY = "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
// ChatGPT に渡す命令
const PROMPT_PREFIX = "Summarize in 6 or fewer points in Japanese. Clearly indicate the methods, results, and discussion.";

// 結果メールの送信先
const EMAIL_RECIPIENT = "sample@sample.com";
// 結果メールのタイトル
const EMAIL_SUBJECT = "PubMedの新着論文の要約";
// 結果メールの送信者の名前
const EMAIL_SENDER = "PubMed要約bot";

// PubMed の検索クエリ
const PUBMED_QUERY = '';
// PubMed の対象の記事タイプ（以下のいずれかのタイプとマッチする論文のみをヒットさせる ※ 期待したように記事タイプが判定されない場合も多い）
const PUBMED_PUBTYPES = ["Journal Article", "Books and Documents", "Clinical Trial", "Meta-Analysis", "Randomized Controlled Trial", "Review", "Systematic Review"];
// PubMed の検索対象日数
const PUBMED_TERM = 1;
// PubMed の検索時のヒット論文で要約する論文の本数の上限（多ければ多いだけ、ChatGPT API の token を多く消費する）
const MAX_PAPER_COUNT = 2;
```

### main関数

定期実行させる場合には、次の```main```関数を設定します。

```js[code.gs]
function main() {
  if (!OPENAI_API_KEY) {
    Logger.log("ERROR: OPEN_API_KEY を指定してください");
    return;
  }
  const today = new Date();
  const yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - PUBMED_TERM);
  const ids = getPaperIDsOn(yesterday);
  let output = "PubMed の新着論文のお知らせ\n\n";
  if (ids < 1) {
    output += `検索条件（${PUBMED_QUERY}）に合致した新着論文はありませんでした。`;
  } else {
    output += `検索条件（${PUBMED_QUERY}）に合致した新着論文は ${ids.length} 件ありました。\n\n`
    output += '---\n\n'

    for (let i = 0; i < MAX_PAPER_COUNT; i++) {
      Utilities.sleep(1000);
      const id = ids[i];
      const pubmedUrl = `https://pubmed.ncbi.nlm.nih.gov/${id}`;
      const summary = getPaperSummaryByID(id);
      const title = summary.title;
      Logger.log(`id: ${id}, pubtype: ${summary.pubtype.join(",")}`);
      if (!checkPubtype(summary.pubtype)) {
        continue;
      }
      Utilities.sleep(1000);
      const abstract = getPaperAbstractByID(id);
      
      const res = callChatGPT(abstract);
      const paragraphs = res.choices.map((c) => c.message.content.trim());
      
      output += `Title: ${title}\n\n${paragraphs.join("\n")}\n\n${pubmedUrl}\n\n`;
      output += `---\n\n`
    }
    if(ids.length > 0) {
      output += 'Other articles: \n\n\n'
      outputCount = 10
      if(ids.length < outputCount) {
        outputCount = ids.length
      }
      for(let i = (MAX_PAPER_COUNT - 1); i < outputCount; i++) {
        Utilities.sleep(1000);
        const id = ids[i];
        const pubmedUrl = `https://pubmed.ncbi.nlm.nih.gov/${id}`;
        const summary = getPaperSummaryByID(id);
        const title = summary.title;
        output += `Title: ${title}\n\n${pubmedUrl}\n\n\n`;
      }
    }
  }

  output += '以上。'
  output = output.trim();
  
  sendEmail(output);
}
```

### その他の必要な関数

```js[code.gs]
function toYYYYMMDD(date) {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("/");
}

function getPaperIDsOn(date) {
  const query = encodeURIComponent(PUBMED_QUERY);
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&retmode=json&sort=relevance&term=${query}&mindate=${toYYYYMMDD(date)}&maxdate=${toYYYYMMDD(date)}`;
  const res = JSON.parse(UrlFetchApp.fetch(url).getContentText());
  return res.esearchresult.idlist;
}

function getPaperSummaryByID(id) {
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id=${id}`;
  const res = JSON.parse(UrlFetchApp.fetch(url).getContentText());
  return res.result[id];
}

function getPaperAbstractByID(id) {
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&retmode=xml&id=${id}`;
  const xml = UrlFetchApp.fetch(url).getContentText()

  const regex = /<AbstractText\s*[^>]*>(.*?)<\/AbstractText>/g
  const matches = Array.from(xml.matchAll(regex))
  const tagContents = matches.map(match => match[1]).join(' ')

  // 文字実体参照を実際のUnicode文字に変換
  const htmlEntitiesToUnicode = (str) => str.replace(/&#x([0-9a-fA-F]+);/g, (match, p1) => String.fromCharCode(parseInt(p1, 16)));
  const unicodeData = htmlEntitiesToUnicode(tagContents);
  // Unicode文字（短い空白）を半角スペースに置換
  const replacedData = unicodeData.replace(/\u2009/g, " ");

  return replacedData
}

function checkPubtype(pubtypes) {
  const common = pubtypes.filter(x => PUBMED_PUBTYPES.indexOf(x) !== -1);
  return common.length > 0;
}

function callChatGPT(input) {
  const messages = [
    {
      role: "user",
      content: PROMPT_PREFIX + "\n" + input,
    },
  ];

  const url = "https://api.openai.com/v1/chat/completions";

  const options = {
    "method": "post",
    "headers": {
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    "payload": JSON.stringify({
      model: "gpt-3.5-turbo",
      messages,
    }),
  };

  return JSON.parse(UrlFetchApp.fetch(url, options).getContentText());
}

function sendEmail(body) {
  const options = { name: EMAIL_SENDER };
  GmailApp.sendEmail(EMAIL_RECIPIENT, EMAIL_SUBJECT, body, options);
}
```

## まとめ

GAS で PubMed の新着論文を取得し、OpenAI の GPT-3 を使って要約を生成し、メールで送信するアプリを作成しました。
朝の時間に定期実行させるように設定しておけば、朝読のように新着論文をチェックできるようになりました。

時々、ChatGPTからのレスポンスがプロンプト通りにならないことがありますが、それでも十分に使えると思います。
また、ChatGPTの処理を排除することにより、単にPubMedから新着論文を取得するだけのアプリとしても使えます。
