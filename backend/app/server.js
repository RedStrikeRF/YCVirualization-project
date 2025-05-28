import express from 'express';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';
import sequelize from './db/database.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

import cors from 'cors';

app.use(cors({
  origin: 'https://okak.website.yandexcloud.net',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: "Сервер работает!", status: "OK" });
});
app.use('/users', userRoutes);

sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });