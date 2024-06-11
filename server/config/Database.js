import { Sequelize } from "sequelize";

// Підключення до бази даних на AWS RDS
const db = new Sequelize(
  process.env.RDS_DB_NAME,     // Ім'я бази даних
  process.env.RDS_USERNAME,    // Ім'я користувача
  process.env.RDS_PASSWORD,    // Пароль користувача
  {
    host: process.env.RDS_HOSTNAME,
     port: 3306,
    timeout: 60000,
    dialect: "mysql"
  }
);

export default db;
