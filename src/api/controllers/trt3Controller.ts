import { TRT3 } from '../../services';
import { Request, Response } from 'express';

class Trt3 {

  public async request(req: Request, res: Response): Promise<Response> {
    const { code, instance } = req.body;

    const key = await TRT3.request(code, instance);

    return res.json({ key }
    );
  }

  public async response(req: Request, res: Response): Promise<Response> {
    const { key } = req.body;

    const document = await TRT3.response(key);

    return res.json(document);
  }
}

export default new Trt3();