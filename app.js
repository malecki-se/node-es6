const collection = [
	{ "item": 1 },
	{ "item": 2 },
	"String",
	15
];

const pushToCollection = function(collection, element) {
	collection.push(element);
	return collection;
};

module.exports = {
	collection: collection,
	pushToCollection: pushToCollection
};