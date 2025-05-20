# Используем официальный Node.js образ
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --legacy-peer-deps

# Копируем остальные файлы
COPY . .

# Собираем TypeScript (если есть)
RUN npx tsc --noEmitOnError false

# Открываем порт
EXPOSE 4000

# Запускаем приложение
CMD ["node", "build/server.js"] 