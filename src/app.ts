import express from 'express';
import cors from 'cors';

import router from './routes';
import { errorHandler } from './middlewares/error-handler';

const app = express();

app.use(cors());

app.use(router);

app.use(errorHandler);

app.listen(3000, ()=>{
  console.log("Server started on port 3000");
});