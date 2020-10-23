import express, { json, urlencoded } from 'express';
import morgan from 'morgan';

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));

// Routes
app.use('test', require('./routes/index.routes'));

export default app;