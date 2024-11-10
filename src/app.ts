import express from 'express';
import bodyParser from 'body-parser';
import statsRoutes from './routes/statRoutes';
import sequelize from './config/database';

const app = express();
app.use(bodyParser.json());
app.use('/api', statsRoutes);

sequelize.sync().then(() => console.log('Database synchronized'));

export default app;
