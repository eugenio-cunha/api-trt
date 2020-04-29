import cors from 'cors';
import { routes } from './api';
import express, { json, urlencoded, Application } from 'express';

class App {

  public express: Application;

  public constructor() {
    this.express = express();
    this.express.disable('x-powered-by');
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(cors());
    this.express.use(json({ limit: '15mb' }));
    this.express.use(urlencoded({ extended: true, limit: '15mb'  }));
  }

  private routes(): void {
    this.express.use('/api/', routes());
  }
}

const { express: app } = new App();

export default app;