---
marp: true
theme: wmotoai
class: lead
paginate: true
size: 16:9
footer: "<div class='footer-logo'></div></div><div class='center-section'></div><div class='right-section'>2025/07/30</div>"
style: |
  /* 1. スライド内で SVG を等比フィットさせる */
  .mermaid,
  .mermaid svg {
    max-width: 90%;
    height: auto;
    margin: auto;
  }
  /* 2. Marp のスケーリングで切れないよう余白確保 */
  section { overflow: visible; }
---

<!-- Mermaid初期化スクリプト -->

<script src="https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js"></script>
<script>
mermaid.initialize({ startOnLoad: false, htmlLabels: false, flowchart:{wrapWidth:180} });

/* Marp が scale() を掛け終わった次のフレームで実行 */
requestAnimationFrame(() => mermaid.run());
</script>
<!--
_class: title
-->
# フォルダごと話せるGitHub Copilot  
### 生成AI交流会 in KAWARUBA　
### 生ビール@wmoto_ai　


---


# 自己紹介

<div style="display: flex; align-items: flex-start; gap: 40px; height: 100%;">
<div style="flex: 1; padding-top: 20px;">

<div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;">
<img src="https://avatars.githubusercontent.com/u/151503669?v=4" width="150" height="150" style="border-radius: 50%;">
<div>
<h3 style="margin: 0;">生ビール @wmoto_ai</h3>
<p style="margin: 0; font-size: 18px;">(たまに黒ビール)</p>
</div>
</div>

- 趣味: ビール(≠詳しい) / 離島旅   
- 職業：元JTC製造業DX部門ブルーワーカー
  　　　現無職LLMハマりおじさん
</div>
<div style="flex: 1.2; text-align: center; padding-top: 20px;" class="intro-right">

#### LLM活用
<div style="display: flex; justify-content: center; gap: 20px; margin-top: 20px; align-items: flex-start;">
<div style="text-align: center;">
<img src="行動状況解説GPT.jpeg" alt="行動状況解説GPT" style="width: 300px; height: 320; border-radius: 8px;">
<a href="https://x.com/wmoto_ai/status/1860147117744148955" style="font-size: 12px; color: #0366d6; text-decoration: none;">酔っ払っても今どこにいるのか妻に通知する</a>
</div>
<div style="text-align: center;">
<img src="応用情報GPT.png" alt="応用情報GPT" style="height: 200px; width: 300px; border-radius: 8px;">
<a href="https://x.com/wmoto_ai/status/1808699279940407378" style="font-size: 12px; color: #0366d6; text-decoration: none;">応用情報技術者試験の問題をGPTが出題！→合格へ
</a>
</div>
</div>

</div>
</div>

---

<!--
_class: section-divider
-->
# GitHub Copilotについて
---
# GitHub Copilotについて

<div style="display: flex; align-items: start; gap: 40px; height: 100%;">
<div style="flex: 1;">

### 🤖 最新のGitHub Copilot機能

- **Copilot Coding Agent**  
  コーディングを自動化

- **GitHub Spark**  
  自然言語でアプリケーション作成

</div>
<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 20px;">

<img src="https://github.blog/jp/wp-content/uploads/sites/2/2025/05/Copilot-Coding-Agent-005.png?w=1600" alt="Copilot Coding Agent" style="width: 100%; height: auto; border-radius: 8px;">

<img src="https://github.blog/wp-content/uploads/2025/07/GitHub-Spark_ChangelogHeader_003.jpg?w=2064" alt="GitHub Spark" style="width: 100%; height: auto; border-radius: 8px;">
</div>
</div>

---
# GitHub Copilotについて

<div style="display: flex; align-items: start; gap: 40px; height: 100%;">
<div style="flex: 1;">

### 🤖 最新のGitHub Copilot機能

- **Copilot Coding Agent**  
  コーディングを自動化

- **GitHub Spark**  
  自然言語でアプリケーション作成
  ・
  ・ 
  ・
  ・
  ・  
  この辺の話はネットに情報あるので
<div style="margin-top: 60px; text-align: center;" class="fragment">
<h2 style="font-size: 36px; color: #d35d2fff; font-weight: bold;">今回はこれらを使った実体験…</h2>
</div>

</div>
<div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 20px;">

<img src="https://github.blog/jp/wp-content/uploads/sites/2/2025/05/Copilot-Coding-Agent-005.png?w=1600" alt="Copilot Coding Agent" style="width: 100%; height: auto; border-radius: 8px;">

<img src="https://github.blog/wp-content/uploads/2025/07/GitHub-Spark_ChangelogHeader_003.jpg?w=2064" alt="GitHub Spark" style="width: 100%; height: auto; border-radius: 8px;">

</div>
</div>

---

<!--
_class: title
-->

# LLM活用しまくってたら無職になった話
<div style="font-size: 1.5em; font-weight: bold; text-decoration: line-through; color: #888; margin-bottom: 0.5em;">
フォルダごと話せるGitHub Copilot
</div>

### 生成AI交流会 in KAWARUBA　


---

<!--
_class: section-divider
-->
# LLM活用の変遷 2023-2025

---

# 2023年〜育休期：ChatGPT課金→生活の一部に

<div style="display: flex; align-items: start; gap: 40px; height: 100%;">
<div style="flex: 1;">

### 🚀 2023年前半：職場での活用
- 効率化用 小規模デスクトップapp作成,
  データ分析補助 powered by GPT-4

### 👶 育休期：家庭での活用
  ##### →GPTsで家族共有GPTs量産
- **🍼 離乳食GPT**  
  WHOガイドライン準拠レシピ提案
- **👶 ベビーカーGPT**   
  自分のライフスタイルからレコメンド→実購入
- **🏫 保育園GPT**  
  入園手続き・書類Q&Aを夫婦共有
```
育児のための環境はもちろん、LLM活かせる環境整備大事。妻に感謝。
```

</div>
<div style="flex: 1; display: flex; justify-content: center; align-items: center; gap: 20px; padding-left: 20px;">

  <img src="離乳食GPT.jpeg" alt="離乳食GPT" style="width: 45%; height: auto; border-radius: 8px;">
  <img src="保育園GPT.jpeg" alt="保育園GPT" style="width: 45%; height: auto; border-radius: 8px;">

</div>
</div>


---

# 2024年：職場をLLM漬けにする

<div style="display: flex; align-items: start; gap: 40px;">
<div style="flex: 1;">

### 職場へのAzure OpenAI導入
#### 📋 データ分析、可視化の民主化
- **自然言語から社内データ用SQLクエリ生成**  
  →データ分析の敷居を下げる

- **PowerApps × Copilot**  
  職場内出退勤可視化アプリ作成
  →未経験の新人が2週間でアプリ作成
 
```
職場内で安全に高性能なLLMを使える環境 is Essential!
```

</div>
<div style="flex: 1; background-color: #e3f2fd; padding: 20px; border-radius: 10px;">

#### 📊 成果(アンケート結果)
- **工数削減**  
  チーム員 Min週2h以上/人 削減(N=10)

  
![時間分布分析 w:90%](勤怠ダッシュボード.png)

</div>
</div>


---

# 2025年：業務のIn/OutをAgentへ捧げる

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 20px;">

<div>

### 💻 IDE内で情報を全部管理
#### VScode + GitHub Copilot Agent
- プロジェクトフォルダをAgentの作業場へ
 →雑にメモ、必要なファイルを保存しておく
- **Agentが自動で作業**
[今年の抱負から計画作成](https://x.com/wmoto_ai/status/1878244914502439102)

### 📧 Outlook MCP
- 会議前に資料要点を自動生成
  - カレンダーから週報作成→送信、
  - 過去メールからプロジェクトの進捗整理
```
必要な情報にAgentがアクセスできる環境を整える!
```

</div>

<div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px; overflow: visible; min-height: 400px;">

### 🛒 買い物自動化システム

<div style="display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 20px; margin-top: 30px;">
<img src="mcp-netsuper.png" alt="買い物自動化の図表" style="width: 60%; height: auto; border-radius: 8px;">
<img src="買い物Agent.png" alt="買い物Agent" style="width: 60%; height: auto; border-radius: 8px;">
</div>

</div>

</div>

---
<!--
_class: section-divider
-->
# 今やスマホで完結

---

# クラウド利用しスマホ経由でタスク実行してもらう

<div style="display: flex; align-items: center; gap: 40px;">
<div style="flex: 1;">

### 🔧 スマホアプリからAgentへ作業依頼

- **人間は要望だけ伝える**  
  ClaudeがGitHubのIssueから作業開始

- **MCPで各アプリと連携**  
  Agentがアプリを操作

```
自身の情報をAgentに渡すことで、スマホで作業完結する環境を整える
```

</div>
<div style="flex: 1; display: flex; justify-content: center; align-items: center; gap: 20px;">

<img src="claude_action_issue.jpg" alt="Claude Action Issue" style="width: 48%; height: auto; border-radius: 8px;">
<img src="claude_action_notion.jpg" alt="Claude Action Notion" style="width: 48%; height: auto; border-radius: 8px;">

</div>
</div>

---

<!--
_class: section-divider
-->

# 家族時間/自分の興味を両立する環境整備
# →一旦無職へ

---

# なぜ無職化？

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 40px;">

<div>
<h2 style="color: #333;">🤖 LLMで変わった仕事</h2>

- 技術タスク → Agent
- 人間 → 調整業務や🍻


<h2 style="color: #2e7d32; margin-top: 40px;">👨‍👩‍👧 育休での気づき</h2>

- 子どもの成長は一瞬！
- のびのび育つ環境作りis Essential

</div>

<div>
<h2 style="color: #1565c0;">🚀 新しい挑戦</h2>

- 組織 → 個人
- 家族時間を最優先

<div style="text-align: center; margin-top: 60px; padding: 20px; background-color: #ffebee; border-radius: 10px;">
<h3 style="color: #d32f2f; margin: 0;">AIは仕事を奪うのではなく<br>人生の選択肢を増やす</h3>
</div>
</div>

</div>

---

# LLM活用の変遷タイムライン

<div class="mermaid" style="max-height: 350px;">
timeline
    title wmoto-aiのLLM活用ジャーニー    
    2023年 : ChatGPT Plus課金
           : 個人利用開始
           : 業務ツール自作    
    育休期 : GPTsでBot量産
           : 家族共有活用
           : 育児支援
    2024年 : Azure OpenAI
           : 職場導入
           : 工数削減成功  
    2025年 : MCP + Agent
           : In/Out効率化
           : LLM無職化!
</div>

<div style="text-align: center; margin-top: 30px; font-size: 24px; font-weight: bold;">
🎆 たった2年でここまで進化！
</div>

---

# ご清聴ありがとうございました

<div style="display: flex; justify-content: space-around; align-items: center; margin: 40px 0;">

<div style="text-align: center;">

### Contact & Links

<div style="margin: 20px 0; font-size: 30px; line-height: 1.8;">

<div style="margin: 20px 0;">
<a href="https://x.com/wmoto_ai" style="text-decoration: none;">
<img src="https://abs.twimg.com/responsive-web/client-web/icon-default.522d363a.png" width="36" height="36" style="display:inline-block; vertical-align:middle; margin-right: 15px;">
</a>
<a href="https://x.com/wmoto_ai" style="color: #0366d6; text-decoration: none;">@wmoto_ai</a>
</div>

<div style="margin: 20px 0;">
<a href="https://zenn.dev/wmoto_ai" style="text-decoration: none;">
<img src="https://zenn.dev/images/logo-transparent.png" width="36" height="36" style="display:inline-block; vertical-align:middle; margin-right: 15px;">
</a>
<a href="https://zenn.dev/wmoto_ai" style="color: #0366d6; text-decoration: none;">zenn.dev/wmoto_ai</a>
</div>

<div style="margin: 20px 0;">
<a href="https://github.com/wmoto-ai" style="text-decoration: none;">
<img src="https://github.githubassets.com/favicons/favicon.svg" width="36" height="36" style="display:inline-block; vertical-align:middle; margin-right: 15px;">
</a>
<a href="https://github.com/wmoto-ai" style="color: #0366d6; text-decoration: none;">github.com/wmoto-ai</a>
</div>

</div>

</div>

<div style="text-align: center;">
<h3>Follow on X</h3>
<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://twitter.com/wmoto_ai" alt="X QR Code" style="margin-top: 10px;">
</div>

</div>