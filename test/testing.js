const { expect } = require('chai');
const request = require("request");
let url = 'http://localhost:3000/api/dog';
let dog = { path: '', title: '' }

describe('Test GET dog', () => {
    it('return status code of 200', (done) => {
        request(url, (err, res) => {
            expect(res.statusCode).to.equal(200);
            done();
        })
    });
});

describe('Test POST dog', () => {
    it('post dog to DB', (done) => {
        request.post({ url: url, form: dog }, (err, res2) => {
            let b = res2;
            expect(b.statusCode).to.equal(200);
            done();
        });
    });
});

describe('Test DELETE dog', () => {
    it('delete a dog', (done) => {
        request.delete({ url: url, form: dog }, (err, res3) => {
            let c = res3;
            expect(c.statusCode).to.equal(404);
            done();
        });
    });
});

