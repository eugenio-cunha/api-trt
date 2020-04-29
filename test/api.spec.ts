import app from '../src/app';
import { expect } from 'chai';
import fetch from 'node-fetch';
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
});