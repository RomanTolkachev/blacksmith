// src/scripts/get-image-sizes.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp'); // Более надежная альтернатива

const endFolder = "gates"

const IMAGE_DIR = path.join(process.cwd(), 'public', endFolder);
const OUTPUT_FILE = path.join(process.cwd(), 'src', 'data', 'images.json');

async function getImageDimensions() {
  try {
    // Создаем папку для данных, если ее нет
    if (!fs.existsSync(path.dirname(OUTPUT_FILE))) {
      fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
    }

    // Получаем список файлов
    const files = fs.readdirSync(IMAGE_DIR)
      .filter(file => ['.jpg', '.jpeg', '.png', '.webp'].includes(path.extname(file).toLowerCase()));

    // Обрабатываем изображения асинхронно
    const images = await Promise.all(files.map(async file => {
      try {
        const imagePath = path.join(IMAGE_DIR, file);
        const metadata = await sharp(imagePath).metadata();
        
        return {
          src: `/${endFolder}/${file}`,
          width: metadata.width,
          height: metadata.height
        };
      } catch (err) {
        console.warn(`Ошибка при обработке ${file}:`, err.message);
        return null;
      }
    }));

    // Фильтруем успешно обработанные изображения
    const validImages = images.filter(img => img !== null);

    // Сохраняем результат
    // fs.writeFileSync(OUTPUT_FILE, JSON.stringify(validImages, null, 2));
    // console.log(`Успешно обработано ${validImages.length} изображений`);
    // console.log(`Данные сохранены в ${OUTPUT_FILE}`);

    // Выводим результат для копирования
    console.log('\n// Готовый массив для вставки в код:');
    console.log('const images = ' + JSON.stringify(validImages, null, 2) + ';');

  } catch (err) {
    console.error('Фатальная ошибка:', err);
    process.exit(1);
  }
}

// Запускаем процесс
getImageDimensions();