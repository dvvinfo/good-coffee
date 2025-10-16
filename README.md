# Добрый кофе - Тестовое задание

Приложение для управления пользователями кофейни на Nuxt 2 с Vuetify.

## Технологический стек

- **Vue 2** - прогрессивный JavaScript-фреймворк
- **Nuxt.js 2** - фреймворк для SSR приложений на Vue
- **Vuetify** - Material Design UI библиотека
- **SCSS** - препроцессор CSS

## Возможности

- ✅ Боковой сайдбар с навигацией (collapsed режим)
- ✅ Переключатель светлой/темной темы
- ✅ Страница списка пользователей (/users)
- ✅ Генератор 8000 тестовых пользователей
- ✅ Skeleton loader при загрузке данных
- ✅ Поиск по имени и номеру телефона
- ✅ Фильтрация по городам (multiple select)
- ✅ Пагинация (50 пользователей на страницу)
- ✅ Адаптивная верстка (desktop + mobile)

## Установка и запуск

### Требования

- Node.js 14+ 
- npm или yarn

### Установка зависимостей

```bash
npm install
```

### Режим разработки

```bash
npm run dev
```

Приложение будет доступно по адресу: http://localhost:3000

### Продакшн сборка

```bash
npm run build
npm run start
```

### Генерация статического сайта

```bash
npm run generate
```

## Структура проекта

```
.
├── assets/              # Статические ресурсы (стили, изображения)
│   └── styles/         # SCSS файлы
├── components/         # Vue компоненты
│   └── UserItem.vue   # Компонент карточки пользователя
├── layouts/           # Layouts приложения
│   └── default.vue   # Основной layout с sidebar
├── pages/            # Страницы приложения (роуты)
│   ├── index.vue    # Главная страница
│   └── users.vue    # Страница списка пользователей
├── plugins/         # Nuxt плагины
│   └── api.js      # API плагин для работы с данными
├── static/         # Статические файлы
└── nuxt.config.js # Конфигурация Nuxt

```

## Особенности реализации

### API плагин

Плагин `plugins/api.js` предоставляет доступ к API через `this.$api`:

```javascript
// Получение пользователей
const users = await this.$api.users.list({ offset: 0, limit: 500 })

// Получение всех пользователей
const allUsers = this.$api.users.getAll()
```

### Модель пользователя

```javascript
{
  id: String,
  name: String,
  phone: String,
  city: { id: String, title: String },
  balance: Number,
  cashbackPercent: Number,
  isBlocked: Boolean,
  role: String,
  saveCount: Number,
  saveTotal: Number,
  spendCount: Number,
  spendTotal: Number,
  lastVisit: Number,
  lastSave: Number,
  lastSpend: Number,
  createdAt: Number,
  updatedAt: Number
}
```

### Цветовая схема

- Основной: #FFFFFF
- Вспомогательный: #EEEEEE  
- Акцентный: #FFD166
- Шрифт: Nunito

## Коммиты

Каждая фича была реализована и закоммичена отдельно:

1. `feat: инициализация проекта Nuxt 2 с Vuetify и базовыми настройками`
2. `feat: добавлен sidebar и переключатель темы`
3. `feat: добавлен API плагин с генератором пользователей`
4. `feat: страница пользователей с поиском, фильтрацией и пагинацией`

## Автор

Разработано в рамках тестового задания "Добрый кофе"
