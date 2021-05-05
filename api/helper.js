const {NORMALIZED_SEARCH_PARAMETER_KEY} = require('./constants');

const parameterToSearchQuery = async (obj) => {
	const query = [];
	for (let [key, value] of Object.entries(obj)) {
		key =
			key in NORMALIZED_SEARCH_PARAMETER_KEY ? NORMALIZED_SEARCH_PARAMETER_KEY[key] : key;
		if (value && value.constructor === Array) {
		    value = value.join(",");
		}
		query.push(`${key}=${encodeURIComponent(value)}`);
	}
	return query.join("&");
};

const normalizeProductResult = (product) => {
	const keyToRemove = ["__typename", "ads", "gaKey", "wishlist", "sourceEngine"];
	let newProduct = product;
	newProduct = JSON.parse(
		JSON.stringify(product, (k, v) => (keyToRemove.includes(k) ? undefined : v))
	);
	newProduct.originalPrice = +product.originalPrice.replace(/\D/g, "");
	newProduct.price = +product.price.replace(/\D/g, "");
	return newProduct;
};

module.exports = {parameterToSearchQuery, normalizeProductResult}
