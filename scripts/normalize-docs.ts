// scripts/normalize-docs.ts
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Эмулируем __dirname в ESM (важно для Node.js)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Абсолютный путь к вашей утилите — 100% надёжно
const utilsPath = path.join(__dirname, "..", "..", "src", "utils", "normalizeFileName.ts");

// Динамический импорт — обходит все проблемы с путями и модулями
const { normalizeFileName } = await import(utilsPath);

const docsDir = path.join(process.cwd(), "public", "docs");

if (!fs.existsSync(docsDir)) {
  console.log("Папка public/docs не существует. Создаём...");
  fs.mkdirSync(docsDir, { recursive: true });
}

const files = fs.readdirSync(docsDir);

let renamedCount = 0;

for (const file of files) {
  if (!file.toLowerCase().endsWith(".pdf")) continue;

  const baseName = path.basename(file, ".pdf");
  const expectedName = normalizeFileName(baseName); // функция уже возвращает с .pdf

  if (file !== expectedName) {
    const oldPath = path.join(docsDir, file);
    const newPath = path.join(docsDir, expectedName);

    if (fs.existsSync(newPath)) {
      console.warn(`⚠️ Конфликт: ${expectedName} уже существует. Пропускаем ${file}`);
      continue;
    }

    try {
      fs.renameSync(oldPath, newPath);
      console.log(`✅ Переименован: ${file} → ${expectedName}`);
      renamedCount++;
    } catch (err) {
      console.error(`❌ Ошибка при переименовании ${file}:`, err);
    }
  }
}

if (renamedCount === 0) {
  console.log("🎉 Все файлы уже имеют корректные имена.");
} else {
  console.log(`🎉 Готово! Переименовано файлов: ${renamedCount}`);
}