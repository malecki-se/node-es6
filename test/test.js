const expect = require("chai").expect;
const app = require('../app');

describe('App', () => {
	it('show collection', () => {
		const res = [{ item: 1 }, { item: 2 }, "String", 15];
		const collection = app.collection;
		
		expect(collection).to.be.an('array').to.deep.equal(res);
	});
	it('add element to collection', () => {
		const collection = [{ item: 1 }, { item: 2 }, "String", 15];
		const res = [{ item: 1 }, { item: 2 }, "String", 15, 100];
		
		app.pushToCollection(collection, 100);

		expect(collection).to.be.an('array').to.deep.equal(res);
	})
});
