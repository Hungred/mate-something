# 🌙 Mate-Something (媒神麼)

**Mate-Something** 是一個專為 KTV 或社交場所設計的即時互動平台。結合了「霓虹美學」與「即時需求發布」，讓包廂間的互動變得更有趣且簡單。

## ✨ 核心功能

- **🔥 即時動態跑馬燈**：即時掌握店內各包廂的最新互動狀態。
- **🍻 社交需求發布**：快速發布「徵求合唱夥伴」、「徵求擋酒部隊」等需求，支援 Modal 獨立組件化管理。
- **🎭 熱門配對展示**：展示目前店內最火熱的 PK 或互動包廂。
- **💎 霓虹美學 UI**：基於 Nuxt UI 與 Tailwind CSS 打造，完美契合夜生活視覺場景。
- **⚡ 高效資料流**：優化 `useAsyncData` 與 `useFetch` 的水合（Hydration）邏輯，確保 SSR 效能與客戶端快取一致性。

## 🛠️ 技術棧

- **前端框架**: [Nuxt 3](https://nuxt.com/) (Vue 3, Vite)
- **UI 框架**: [Nuxt UI](https://ui.nuxt.com/) (Tailwind CSS)
- **資料庫 ORM**: [Prisma](https://www.prisma.io/)
- **資料庫**: MySQL
- **後端引擎**: Nitro (Nuxt 3 內建)

## 🚀 快速啟動

### 1. 複製專案

````bash
git clone [https://github.com/your-username/mate-something.git](https://github.com/your-username/mate-something.git)
cd mate-something


---

## 📂 專案結構 (Project Structure)

```text
src/
├── components/          # UI 元件 (如 RequestCreateModal.vue)
├── server/
│   ├── api/            # 後端 API 路由 (如 shop/items.get.ts)
│   └── utils/          # 共用工具 (如 prisma.ts 實例)
├── pages/              # 頁面路由
├── prisma/             # 資料庫模型定義 (Schema)
├── public/             # 靜態資源
└── app.vue             # 應用程式入口
````

---

## 📁 安裝與使用 (Quick Start)

# 複製專案

```bash
git clone [https://github.com/your-username/mate-something.git](https://github.com/your-username/mate-something.git)
cd mate-something
```

# 安裝依賴

```bash
npm install
```

# 啟動開發伺服器

```bash
npm run dev
```
