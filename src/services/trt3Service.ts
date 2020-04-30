import { Mongo } from '../lib';
import { v4 as uuid } from 'uuid';
import { Document } from '../interfaces';

export default class TRT3 {

  public static async request(code: string, instance: number): Promise<string> {
    const id = uuid();
    const key = id.replace(/-/g, '');

    await Mongo.insert('courts', 'trt3', { key, code, instance });
    return key;
  }

  public static async response(key: string): Promise<Document | null> {
    const result = await Mongo.find('courts', 'trt3', 'key', key);
    
    return result;
  }
}