import express from 'express';

import { PrismaClient } from '@labrute/prisma';
import bodyParser from 'body-parser';
import schedule from 'node-schedule';
import dailyJob from './dailyJob.js';
import './i18n.js';
import initRoutes from './routes.js';

const DEBUG_QUERIES = false;

const prisma = new PrismaClient(DEBUG_QUERIES ? {
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'stdout',
      level: 'error',
    },
    {
      emit: 'stdout',
      level: 'info',
    },
    {
      emit: 'stdout',
      level: 'warn',
    },
  ],
} : undefined);

if (DEBUG_QUERIES) {
  prisma.$on('query', (e) => {
    console.warn(`Query: ${e.query}`);
    console.warn(`Params: ${e.params}`);
    console.warn(`Duration: ${e.duration}ms`);
  });
}

const app = express();
const port = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.listen(port, () => {
  console.warn(`App running: http://localhost:${port}/`);

  // Trigger daily job
  dailyJob(prisma)().catch((error) => {
    console.error(error);
  });

  // Initialize daily scheduler
  schedule.scheduleJob('0 0 * * *', dailyJob(prisma));
});

initRoutes(app, prisma);
