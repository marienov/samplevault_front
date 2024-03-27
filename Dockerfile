## Используем официальный образ Node.js
#FROM node:14
#
## Устанавливаем рабочую директорию
#WORKDIR /app
#
## Копируем package.json и package-lock.json в контейнер
#COPY package*.json ./
#
## Устанавливаем зависимости
#RUN npm install
#
## Копируем все файлы из текущей директории в контейнер
#COPY . .
#
## Собираем React приложение
#RUN npm run build
#
## Указываем директорию, из которой будет работать приложение
#WORKDIR /app/build
#
## Устанавливаем локальный сервер для запуска приложения
#RUN npm install -g serve
#
## Открываем порт 3000 для доступа к приложению
#EXPOSE 3000
#
## Запускаем приложение при старте контейнера
#CMD ["serve", "-s", "."]
#
## Используем Alpine Linux как базовый образ
#FROM alpine:latest
#
## Устанавливаем необходимые пакеты
#RUN apk add --no-cache nodejs npm
#
## Копируем файлы приложения в образ
#COPY . /app
#
## Устанавливаем зависимости и собираем приложение
#WORKDIR /app
#RUN npm install
#RUN npm run build
#
## Очищаем кэш npm
#RUN npm cache clean --force
#
## Удаляем ненужные файлы
#RUN rm -rf node_modules
#RUN rm -rf src
#
#EXPOSE 3000
#
## Указываем команду для запуска приложения
#CMD ["npm", "start"]
#

# Используем Alpine Linux как базовый образ
FROM alpine:latest

# Устанавливаем необходимые пакеты
RUN apk add --no-cache nodejs npm

# Устанавливаем Node.js версии 14
RUN npm install -g n
RUN n 14

# Копируем файлы приложения в образ
COPY . /app

# Устанавливаем зависимости и собираем приложение
WORKDIR /app
RUN npm install
RUN npm run build

# Очищаем кэш npm
RUN npm cache clean --force

# Удаляем ненужные файлы
RUN rm -rf node_modules
RUN rm -rf src

# Указываем команду для запуска приложения
CMD ["npm", "start"]
