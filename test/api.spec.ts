import app from '../src/app';
import fetch from 'node-fetch';
import { expect, should } from 'chai';
import { port, host } from '../src/config';

describe('API', (): void => {
  before(done => {
    app.listen(port, (): void => {

      done();
    });
  });

  it('/api/ping', async (): Promise<void> => {
    const { status } = await fetch(`http://${host}:${port}/api/ping`);
    expect(status).to.be.equal(200);
  });

  it('/api/trt3/request', async (): Promise<void> => {
    const body = { code: '00108783320165030060', instance: 1 };
    const response = await fetch(`http://${host}:${port}/api/trt3/request`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'content-type': 'application/json' }
    });

    const { key } = await response.json();
    
    should().exist(key);
  });

  it('/api/trt3/response', async (): Promise<void> => {
    const body = { key: '393f93945d3f44d7a2bd7bc0ee97edf0' };
    const response = await fetch(`http://${host}:${port}/api/trt3/response`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'content-type': 'application/json' }
    });
    
    const { key } = await response.json();
    
    should().exist(key);
  });
});