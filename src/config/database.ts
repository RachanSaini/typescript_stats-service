import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASS as string,
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string, 10),
    dialect: 'postgres',
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err: Error) => console.error('Error:', err));

export default sequelize
;