// import { expect, should } from 'chai';
import { Captcha } from '../src/services';
import * as sample from './static/captcha.json'

describe('Captcha', (): void => {

  it.only('resolve()', async (): Promise<void> => {
    const text = await Captcha.resolve(sample.base64);
    console.info(text);
    
    // {status: 1, request: "63789447478"}
    // expect(status).to.be.equal(200);
  });

});