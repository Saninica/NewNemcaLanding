FROM node:20.17.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3003

CMD ["npx","vite", "preview", "--port", "3003", "--host", "0.0.0.0"]
