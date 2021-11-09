const {expect} = require('chai');
const request = require('supertest');
const app = require('../app');

const agent = request(app);

describe('Endpoint Testimonials', () => {

  describe('GET /testimonials green test', () => {
    it('responds with 200', () => agent.get('/testimonials').expect(200));
  });

  describe('POST /testimonials', () => {
    it('responds with 400 because is empty red test', () => agent.post('/testimonials').expect(400));
    it('responds with 201 and object with success true and data is a object with keys id, name, image, content, updatedAt, createdAt', () =>
    agent.post('/testimonials')
      .send({
        name: "testimonial test",
        image: "https://picsum.photos/200?random=1",
        content: "this is a content"
    })
      .then((res) => {
        expect(201)
        expect(res.body).to.have.nested.property('success', true);
        expect(res.body).to.have.property('data');
        expect(res.body.data).to.have.property('testimonials');
        expect(res.body.data.testimonials).to.have.all.keys('id', 'name', 'image', 'content', 'updatedAt', 'createdAt');
      })
  );
  });

  describe('PUT /testimonials/:id', () => {
    it('responds with 404 because id doesnt specified', () => agent.put('/testimonials/').expect(404));
    it('responds with 201 and object with success true and data is a object with keys name, image, content updated', () =>
    agent.put('/testimonials/2')
      .send({
        name: "testimonial updated",
        image: "https://picsum.photos/200?random=3",
        content: "this is a content new"
    })
      .then((res) => {
        expect(201)
        expect(res.body).to.have.nested.property('success', true);
        expect(res.body).to.have.property('data');
        expect(res.body.data).to.have.property('testimonials');
        expect(res.body.data.testimonials).to.have.all.keys('id', 'name', 'image', 'content', 'updatedAt', 'deletedAt', 'createdAt');
        expect(res.body.data.testimonials).to.include({
            'name': 'testimonial updated',
            'image': 'https://picsum.photos/200?random=3',
            'content': 'this is a content new'
        });
      })
  );
  });

  describe('DELETE /testimonials/:id', () => {
    it('responds with 404 because id doesnt specified', () => agent.delete('/testimonials/').expect(404));
    it('response with 200 and with success true', () => agent.delete('/testimonials/5')
    .then(res => {
        expect(200)
        expect(res.body).to.have.nested.property('success', true);
    }));
  });

});