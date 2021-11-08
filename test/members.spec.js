let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000';
const keys = ['id', 'name', 'image', 'deletedAt', 'deleted', 'createdAt', 'deletedAt']
const memberId = 8;

describe('Get all members: ', () => {
    it('should get all members', (done) => {
    chai.request(url)
    .get('/members')
    .end( function(err,res) {
        expect(res.body.success).to.be.true;
        expect(res.body.data[0]).to.have.all.keys(...keys);
        expect(res.body.data).to.have.lengthOf(7);
        expect(res).to.have.status(201);
        done();
    });
    });
    it('should NOT get all members, wrong url', (done) => {
    chai.request(url)
    .get('/member')
    .end((err,res) => {
        expect(res).to.have.status(404);
        done();
    });
    });
   });
   
   

describe('Insert a member: ', () => {
    it('should insert a member', (done) => {
    chai.request(url)
        .post('/members')
        .send({name: 'John Doe', image:'www.image.com'})
        .end((err,res) => {
            expect(res.body.success).to.be.true;
            expect(res).to.have.status(201);
            done();
        });
        });
    it('should NOT insert a member, missing name', (done) => {
    chai.request(url)
        .post('/members')
        .send({name: '', image:'www.image.com'})
        .end((err,res) => {
            expect(res.body.success).to.be.false;
            expect(res).to.have.status(401);
            done();
        });
        });
    it('should NOT insert a member, missing image', (done) => {
    chai.request(url)
        .post('/members')
        .send({name: 'John Doe', image:''})
        .end((err,res) => {
            expect(res.body.success).to.be.false;
            expect(res).to.have.status(401);
            done();
        });
        });
   });

describe('Update a member: ',()=>{
    it('should update a member', (done) => {
    chai.request(url)
        .put(`/members/${memberId}`)
        .send({name: 'Jane Doe', image:'www.image.com'})
        .end((err,res) => {
            expect(res.body.success).to.be.true;
            expect(res).to.have.status(201);
            done();
        });
        });
    it('should NOT update a member, missing name', (done) => {
    chai.request(url)
        .put(`/members/${memberId}`)
        .send({name: '', image:'www.image.com'})
        .end((err,res) => {
            expect(res.body.success).to.be.false;
            expect(res).to.have.status(401);
            done();
        });
        });
    it('should NOT update a member, missing image', (done) => {
    chai.request(url)
        .put(`/members/${memberId}`)
        .send({name: 'John Doe', image:''})
        .end((err,res) => {
            expect(res.body.success).to.be.false;
            expect(res).to.have.status(401);
            done();
        });
        });
    it('should NOT update a member, wrong ID', (done) => {
    chai.request(url)
        .put('/members/123')
        .send({name: 'John Doe', image:'www.image.com'})
        .end((err,res) => {
            expect(res.body.success).to.be.false;
            expect(res).to.have.status(401);
            done();
        });
        });
   });


describe('Delete member by ID: ',()=>{
    it('should delete the member with ID', (done) => {
        chai.request(url)
            .del(`/members/${memberId}`)
            .end((err,res) => {
                expect(res.body.success).to.be.true;
                expect(res).to.have.status(201);
                done();
            });
        });
    it('should NOT delete member, wrong ID', (done) =>{
        chai.request(url)
            .del('/members/123')
            .end((err, res) => {
                expect(res.body.success).to.be.false;
                expect(res).to.have.status(401);
                done();
            });
    });
});
