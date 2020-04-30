import Ping from './pingRoutes';
import Trt3 from './trt3Routes';
import { Router } from 'express';

export default (): Router => {
  const router = Router();
  
  Ping(router);

  Trt3(router);

  return router;
}