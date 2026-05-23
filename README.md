# Scholastica — TOEFL 進階備考

一個為目標 100+ 分的 TOEFL 考生打造的靜態網站。
**現代簡約風(Modern Minimal)** — 白底 + 青藍/青綠強調 + Inter 字型,純 HTML/CSS/JS,無框架依賴。

🌐 **線上 Demo** → [https://jungcharlix.github.io/scholastica-toefl/](https://jungcharlix.github.io/scholastica-toefl/)

> 為目標 100+ 的考生量身打造。從字彙到真題,從計時到檢討,一站完成。

## ✦ 功能總覽

### § I  字彙學院
- **314 個 TOEFL 高頻學術詞彙**,依語意分類:認知論證、因果影響、變化對比、量級程度、特質描述、科學方法、社會政治、美學藝術、經濟商業、環境自然、語篇連接
- 可翻面字卡 · **手機可左右滑動切換** · 隨機排列 · 20 題字義測驗即時批改 · 雙欄詞彙總覽

### § II  學術閱讀
- TPO 風格全文(~700 字)
- 三題理解題即時對答案
- 手機版題目區自動移到內文下方

### § III  聽力練習室
- 四段模擬講座(生物 / 藝術史 / 天文 / 校園對話)
- 仿黑膠唱片轉動的播放器動畫
- 雙欄筆記本(主旨 / 細節),仿線條筆記紙背景

### § IV  口說操練
- Task 1–4 四種題型
- 雙階段計時器(準備 / 答題),最後 5 秒脈衝閃動

### § V  寫作工坊
- 獨立寫作(30 分鐘倒數) + 整合寫作(20 分鐘)
- 真實 prompt + 即時字數統計
- 進階句型範文結構參考

### § VI  真題演練(20 套)
- **TPO 系列(14 套)** TPO-58 到 TPO-71
- **主題模考(4 套)** 綜合 / 理工 / 人文 / 商管社科
- **診斷測驗(2 套)** 快速診斷 / 字彙壓力測驗
- 全螢幕沉浸式考試介面,模擬真實考場節奏
- 0–120 分計分系統 · Band 評級 · 動畫進度條

### § VII  詳解與檢討
- **每題深度詳解**:原文佐證引文、為何其他選項錯、你可能掉進的陷阱、類題策略手冊
- **題型策略庫**:推論 / 細節 / 主旨 / 字彙 / 目的題五大類,各附核心概念 + 操作步驟 + 常見陷阱
- **口說 / 寫作四面向評分**:立場 / 論證 / 流暢 / 語言,寫作根據實際輸入文字自動計算
- **個人化 14 天訓練計畫**:基於本次錯題類型分布自動生成日課表,含 CORE DIAGNOSIS 與 PRESCRIPTION 對症處方

### § VIII  實戰心法
- 考前一個月衝刺的六條原則

---

## ✦ 技術細節

- **零依賴**:純 HTML/CSS/JS,僅外部載入 Google Fonts (Fraunces / Newsreader / JetBrains Mono)
- **手機適配**:RWD 三層斷點 (968px / 580px)
- **離線可用**:除字體外,所有資源都在本地
- **無追蹤**:無 Google Analytics、無第三方腳本

## ✦ 檔案結構

```
.
├── index.html              # 主頁面
├── assets/
│   ├── css/
│   │   └── styles.css      # 所有樣式
│   └── js/
│       └── app.js          # 所有互動邏輯
├── README.md
├── LICENSE
└── .gitignore
```

## ✦ 本地預覽

直接用瀏覽器開啟 `index.html` 即可,或啟動本地伺服器:

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx http-server -p 8000

# 然後訪問 http://localhost:8000
```

## ✦ 部署到 GitHub Pages

本專案已部署於:**[https://jungcharlix.github.io/scholastica-toefl/](https://jungcharlix.github.io/scholastica-toefl/)**

若你要 fork 自己的版本:

1. Fork 或 clone 本 repo
2. 進入 repo → **Settings** → **Pages**
3. 在 **Source** 選擇 `Deploy from a branch`
4. **Branch** 選 `main`,資料夾選 `/ (root)`
5. 按 Save,等 1–2 分鐘
6. 你的網站會在 `https://<你的帳號>.github.io/<repo-名稱>/` 上線

## ✦ 客製化建議

- **新增字彙**:編輯 `assets/js/app.js` 中的 `vocabulary` 陣列
- **新增真題**:在 `examContent` 加入新的內容組,然後在 `examData` 註冊測驗 ID,最後在 `index.html` 的 archive grid 加入新的卡片
- **修改詳解**:`deepReview` 物件包含每題的 quote、trap;`skillLibrary` 包含題型策略

## ✦ License

MIT — 詳見 [LICENSE](./LICENSE)

---

*Built for learners aiming 100+. 2026.*
