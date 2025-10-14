# Playwright-tests

Автотесты на TypeScript с использованием Playwright и Page Object Model

## 📋 О проекте

Проект автоматизации тестирования с использованием Playwright и TypeScript. Включает в себя UI-тесты для веб-приложений с применением **Page Object Model (POM)** паттерна.

## 🛠 Технологии

- **Playwright** - фреймворк для автоматизации тестирования
- **TypeScript** - язык программирования
- **GitHub Actions** - CI/CD пайплайн
- **Page Object Model** - архитектура тестов

## ⚙️ Установка и настройка

### Предварительные требования
- Node.js версии 16 или выше
- npm или yarn

### Установка
```bash
# Клонирование репозитория
git clone https://github.com/danilalukyanchenkoQA/Playwright-tests.git
cd Playwright-tests

# Установка зависимостей
npm install
# Установка браузеров Playwright
npx playwright install
# Запуск всех тестов
npm test
# Запуск в UI режиме
npx playwright test --ui
# Запуск в headed режиме (с отображением браузера)
npx playwright test --headed
# Запуск конкретного теста
npx playwright test tests/example.spec.ts
# Запуск тестов с отладкой
npx playwright test --debug
# Открытие HTML отчета после запуска тестов
npx playwright show-report

🔄 CI/CD (GitHub Actions)
Проект настроен с автоматическим CI/CD пайплайном через GitHub Actions.

Функциональность CI/CD
✅ Автоматический запуск тестов при каждом пуше в ветку main
✅ Проверка Pull Request - тесты запускаются для каждого PR
✅ Ежедневный запуск по расписанию в 7:00 UTC (10:00 по Москве)
✅ Артефакты - автоматическое сохранение отчетов и скриншотов
✅ Мультибраузерное тестирование - Chrome, Firefox, WebKit

Просмотр результатов CI/CD
Перейдите во вкладку Actions репозитория
Выберите workflow Playwright Tests
Откройте последний запуск для просмотра деталей
Скачайте артефакты для получения полного отчета

📁 Структура проекта

Playwright-tests/
├── .github/workflows/          # CI/CD конфигурация
│   └── playwright.yml          # GitHub Actions workflow
├── pages/                      # Page Objects
│   └── playground-page.ts     # Page Object для uitestingplayground.com
├── tests/                      # Тестовые файлы
│   └── training.spec.ts       # Тесты с использованием POM
├── playwright.config.ts        # Конфигурация Playwright
├── package.json               # Зависимости проекта
├── .gitattributes             # Определение TypeScript проекта
├── .gitignore                 # Игнорируемые файлы
└── README.md                  # Документация

🎯 Особенности
Кросс-браузерное тестирование - поддержка Chromium, Firefox, WebKit
Автоматические отчеты - HTML отчеты с скриншотами и видео
Интеграция с GitHub - автоматическая проверка кода
Page Object Model - чистая архитектура тестов
TypeScript поддержка - статическая типизация для надежности

📊 Мониторинг
Статус тестов: https://github.com/danilalukyanchenkoQA/Playwright-tests/actions
Последний отчет: доступен в артефактах каждого workflow запуска
