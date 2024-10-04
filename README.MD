# Canvix Landing Page

## О проекте

Это лендинг, созданный в образовательных целях на чистом HTML, SASS и JavaScript. Проект демонстрирует работу с основами веб-разработки без использования фреймворков и сборщиков.

## Что здесь показано:

- Современный HTML5 с акцентом на семантику и доступность
- Адаптивная верстка на SASS (BEM, Flexbox, Grid, миксины и медиа-запросы)
- Чистый JavaScript (ES6+) для динамического контента c модульной архитектурой
- Управление контентом через JSON для легкого обновления и масштабирования данных

## Технологии

- HTML5
- SASS (Flexbox, Grid, Media Queries)
- JavaScript (ES6+)
- JSON для хранения данных

## Как запустить

1. Клонируйте репозиторий:
```bash
git clone https://github.com/odeindev/canvix-landing.git
```

2. Откройте `index.html` в вашем браузере

или

Посетите [GitHub Pages](https://odeindev.github.io/canvix-landing/) для просмотра живой демонстрации.

## Структура проекта

```
canvix-landing/
├── README.md                        # Документация проекта
├── index.html                       # Основной HTML файл
├── css/
│   └── main.css                    # Компилированный CSS
├── scss/
│   ├── main.scss                   # Основной SCSS файл
│   ├── base/                       # Базовые стили
│   │   ├── _reset.scss             # CSS reset
│   │   └── _base.scss              # Переменные и типографика
│   └── blocks/                     # Стили компонентов
│       ├── _header.scss            # Стили шапки сайта
│       ├── _hero-section.scss      # Стили главного экрана
│       ├── _service-section.scss   # Стили секции "Услуг"
│       ├── _about-section.scss     # Стили секции "О нас"
│       ├── _process-section.scss   # Стили секции "Процесс"
│       └── _footer.scss            # Стили футера
├── js/
│   ├── main.js                     # Точка входа JavaScript
│   ├── modules/                    # JavaScript модули
│   │   ├── mobile-nav.js           # Логика мобильной навигации
│   │   ├── cards.js                # Генерация карточек услуг и процесса
│   │   └── footer-links.js         # Генерация ссылок футера
│   └── data/                       # JSON данные для динамического контента
│       ├── service-cards.json      # Данные для карточек услуг
│       ├── process-cards.json      # Данные для карточек процесса
│       └── footer-links.json       # Данные для ссылок в футере
└── assets/                         # Медиа ресурсы
    ├── icons/                      # SVG иконки и логотипы
    └── images/                     # Изображения для контента
```

## Контакты

- Email: [odeindev@gmail.com]
- GitHub: [odeindev](https://github.com/odeindev)
- LinkedIn: (https://linkedin.com/in/oleg-deineka-91184b330/)

## Дизайн

- Автор дизайна: [iconstica](https://www.iconstica.com/)
- Макет: (https://www.figma.com/community/file/1321437763262362760)

## Лицензия

Этот проект находится под лицензией MIT. Подробности в файле [LICENSE](LICENSE).