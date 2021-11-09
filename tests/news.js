let chai = require('chai');
let chaiHttp = require('chai-http');

let server = require('../app');

chai.should();

chai.use(chaiHttp);

  describe('GET /news', () => {
  it('It should GET all the tasks', (done) => {
      chai.request(server)
          .get('/news')
          .end((error, res) => {
              res.should.have.status(200)
                  .which.is.an('object')
              done();
          })
  })

  it('It should NOT GET all the tasks', (done) => {
      chai.request(server)
          .get('/new')
          .end((error, response) => {
              response.should.have.status(404);
              done();
          })
  })
}) 

 describe('GET /news/:id', () => {
    it('It should GET a task by ID', (done) => {
        let taskId = 3;
        chai.request(server)
            .get('/news/' + taskId)
            .end((error, response) => {
                response.should.have.status(200);
                response.body.should.be.a('object');
                done();
            });
    }); 
});

  describe('POST /news', () => {
it('It should POST a new task', (done) => {
    let news = {
        name: 'Novedad6',
        image: 'www.image7.com'
    };
    chai.request(server)
        .post('/news')
        .send(news)
        .end((error, response) => {
            response.should.have.status(200);
            news.should.have.property('name');
            news.should.have.property('image');
            done();
        });
});
});

 describe('PUT /news', () => {
    it('It should UDAPTE a task', (done) => {
        let taskId = 3;
        let news = {
            name: 'novedad6',
            image: 'www.image7.com'
        }
        chai.request(server)
            .put('/news/' + taskId)
            .send(news)
            .end((error, response) => {
                response.should.have.status(200);
                news.name.should.be.equal('novedad6');
                news.image.should.be.equal('www.image7.com');
                response.body.should.have.property('success').eq(true);
                done();
            });
    });
});

 describe('DELETE /news/:id', () => {
    it('It should DELETE a existing task', (done) => {
        let taskId = 2;
        chai.request(server)
            .delete('/news/' + taskId)
            .end((error, response) => {
                response.should.have.status(200);
                done();
            });
    });
});





