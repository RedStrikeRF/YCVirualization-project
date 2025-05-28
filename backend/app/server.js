import express from 'express';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';
const { sequelize } = require("./models");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/users', userRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error("Unable to connect to the database:", error);
});
