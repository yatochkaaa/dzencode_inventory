# Используйте базовый образ Node.js для сборки
FROM node:14 AS build

# Установите рабочую директорию внутри контейнера
WORKDIR /app

# Копируйте зависимости
COPY package*.json ./
RUN npm install

# Копируйте исходный код клиента
COPY . .

# Сборка клиентского приложения
RUN npm run build

# Более легкий образ Nginx для раздачи статических файлов
FROM nginx:alpine

# Копируйте скомпилированные файлы из предыдущего этапа
COPY --from=build /app/build /usr/share/nginx/html

# Копируйте файл конфигурации Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Указываем порт, который будет использоваться Nginx
EXPOSE 80

# Nginx будет запущен автоматически
CMD ["nginx", "-g", "daemon off;"]