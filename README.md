# electron-video-conference-app

Инфраструктурная основа — [Electron React Boilerplate](https://electron-react-boilerplate.js.org).

## Начало работы

Установите зависимости (используйте [yarn classic](https://classic.yarnpkg.com)):

```bash
yarn install
```

## Разработка

Запуск приложения в локальном окружении:

```bash
yarn start
```

## Сборка

Сборка и упаковка в дистрибутив под указанную платформу:

```bash
yarn run package --macos
yarn run package --windows
yarn run package --linux
```

Сборка производится через [electron-builder](https://www.electron.build), подробные аргументы CLI см. [в документации](https://www.electron.build/cli).
