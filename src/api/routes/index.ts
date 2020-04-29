import { Router } from 'express';
import Ping from './ping';

export default (): Router => {
  const router = Router();
  
  Ping(router);

  return router;
}