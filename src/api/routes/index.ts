import Ping from './ping';
import Trt from './target';
import { Router } from 'express';

export default (): Router => {
  const router = Router();
  
  Ping(router);

  Trt(router);

  return router;
}