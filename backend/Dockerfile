# Используем официальный образ Node.js LTS
FROM node:20

# Рабочая директория внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект в рабочую директорию
COPY . .

# Устанавливаем переменную окружения (опционально)
ENV NODE_ENV=production

# Указываем порт, который будет прослушиваться приложением
EXPOSE 3000

# Запускаем приложение
CMD ["node", "app/server.js"]
