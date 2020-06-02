# http://artdecoration.com.ua

Написаний на React.js і React hooks by @Olena-Stotska and @stalniy

## Вимоги

Node.js 12.x

## Встановлення

```sh
git clone
cd artdecoration
npm ci

npm start # to run the app locally in dev mode
```

## Генерація

Для того щоб створити production-ready версію:

```sh
npm run build
```

Щоб створити sitemap.xml, треба запустити

```sh
npm run build.sitemap # saves sitemap.xml to "build" folder, so run it after npm run build
```

Щоб згенерувати HTML для сторінок:

```sh
npm run build.pages
```

**Важливо**: запускати вказані вище скрипти потрібно саме в такому порядку. sitemap.xml кладеться в папку `build`, а генерація HTML відбувається за допомогою sitemap.xml, тому воно одне без іншого не працює.

## Хостинг і CI

Сайт хоститься на Github Pages і білдиться за допомогою Github Actions. Воркфлов знаходиться [тут](.github/workflows/main.yml).

## Пошук

Для пошуку використовується [minisearch] бібліотека, що дозволяє робити full text пошук по категоріям в браузері.

[minisearch]: https://lucaong.github.io/minisearch/

## Контент

Весь контент знаходиться в папці [src/content](./src/content):

| Файл                  | Призначення                    |
| ----------------------|------------------------------|
| app.uk.yml            | Переклади для інтерфейсу         |
| quotes.uk.yml         | Цитати                        |
| categories.uk.yml     | Ієрархія категорій                |

### Папка categories

Ця папка містить всю основну інформацію про категорії. Ім'я кожної папки всередині відповідає значенню `id` у файлі `categories.uk.yml`, це обов'язкова умова, інакше не буде знайдено sample малюнок і галерею для категорії.

В кожній папці під категорію є `sample.jpg` - це малюнок, що відображається на головній сторінці. Окрім того там же є файли .md (markdown розмітки), що використовуються як описання категорії та папка з малюнками для галереї.

### Мета теги

Інформацію по мета тегам знаходиться окремо для статичних сторінок в `app.uk.yml` і окремо для кожної категорії в `categories.uk.yml`. Всі вони знаходяться у об'єкті `meta` (наприклад, `meta.keywords`).

## Контакти

Email відправляється за допомогою Google Apps Script [sendEmail](https://script.google.com/d/1-Hn2I7Ee420s2ytd92jnBgVr8HJAVaHH4ZoxUkD9hhCXmVYzM02y1bgt/edit?splash=yes#). Власник цього скрипта artdecoration.com.ua@gmail.com акаунт. Цей же акаунт і відправляє повідомлення. Кому відправляти повідомлення прописанов в самому скрипті.
