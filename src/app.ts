import cors from 'cors';
import { routes } from './api';
import express, { json, urlencoded, Application } from 'express';

export default class App {

  public express: Application;

  public constructor() {
    this.express = express();
    this.express.disable('x-powered-by');
    this.middlewares();
    this.routes();
  }

  public listen(port: number, callback: () => void) {
    this.express.listen(port, callback);
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