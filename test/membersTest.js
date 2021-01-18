import request from 'supertest';
import chai from 'chai';
import server from '../server';

const { expect } = chai;

describe('Testing members', () => {
  it('GET /members', async () => {
    await request(server)
      .get('/api/v1/members')
      .expect(200)
      .then(req => {
        expect(req.body[0].id).to.equal(1);
      });
  });
});
