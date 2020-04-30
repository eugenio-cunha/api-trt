import App from '../src/app';
import fetch from 'node-fetch';
import { expect, should } from 'chai';
import { port, host } from '../src/config';

describe('API', (): void => {
  before(done => {
    const app = new App();
    app.listen(port, (): void => {

      done();
    });
  });

  it(`{GET}\thttp://${host}:${port}/api/ping`, async (): Promise<void> => {
    const { status } = await fetch(`http://${host}:${port}/api/ping`);
    expect(status).to.be.equal(200);
  });

  it(`{POST}\thttp://${host}:${port}/api/trt3/search`, async (): Promise<void> => {
    const body = { code: '00108783320165030060', instance: 1 };
    const response = await fetch(`http://${host}:${port}/api/trt3/search`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'content-type': 'application/json' }
    });

    const { id, status } = await response.json();

    should().exist(id);
    expect(status).to.be.equals('waiting');
  });

  it(`{GET}\thttp://${host}:${port}/api/trt3/search?id=`, async (): Promise<void> => {
    const response = await fetch(`http://${host}:${port}/api/trt3/search?id=5eab0447e0c15a49245f4a14`);

    const { id, status } = await response.json();
    should().exist(id);
    expect(status).to.be.equals('not found');
  });
});