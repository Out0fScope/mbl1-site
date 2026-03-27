# 🌐 Next Environment (VS Code)

Базовый репозиторий для настройки комфортной среды разработки на **Next.js** с использованием **VS Code**.

## 🔧 Рекомендуемые расширения VS Code

Рекомендуемые расширения для эффективной работы с Next.js:

- [Next.js Snippets](https://marketplace.visualstudio.com/items?itemName=PulkitGangwar.nextjs-snippets) — сниппеты для Next.js
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) — автоподсказки классов Tailwind (включая кастомные токены)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) — синхронное переименование JSX/TSX-тегов
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) — автозакрытие тегов
- [Prettier – Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) — автоформатирование кода
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) — линтинг кода по правилам
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) — автоподсказки путей к файлам

> 💡 Все рекомендуемые расширения перечислены в `.vscode/extensions.json` и будут предложены при открытии проекта в VS Code.

---

## ⚙️ Настройки

Редактор автоматически применяет настройки из `.vscode/settings.json`.

> 💡 Код автоматически форматируется при сохранении, если установлены Prettier и ESLint, а в настройках VS Code включён `editor.formatOnSave`.

---

## 🚀 Быстрый старт

```bash
git clone https://github.com/your-username/next-environment.git
cd next-environment
npm install
npm run dev       # Запуск dev-сервера Next.js
npm run build     # Сборка production версии
npm start         # Запуск production-сервера
```
