const axios = require('../../config/axios');
const { ORDER_BY, SEARCH_TYPE, ENDPOINT, QUERY, OPERATION_NAME } = require('../constants');
const { parameterToSearchQuery, normalizeProductResult } = require('../helper');
const Product = require('../models/productSchema')


const search = async (parameters) => {
	let params = {
		device: "desktop",
		source: "search",
		safeSearch: false,
		related: true,
        page: 1,
		orderBy: ORDER_BY.MOST_RELEVANT,
		query: "",
		topadsBucket: true,
        uniqueId: "63b35e98c4f59b19be99297da345d7bd",
        usePage: true,
        rows: 5,
		...parameters,
	};

    let adParams = {
        device: "desktop",
		goldMerchant: "",
		official: "",
		orderBy: ORDER_BY.MOST_RELEVANT,
		query: "",
		priceMin: 0,
		priceMax: 0,
		searchType: SEARCH_TYPE.PRODUCT,
        search: "search",
		rating: [],
		shipping: [],
		condition: [],
		...parameters,
    }

	const response = await axios(ENDPOINT, {
		method: "POST",
		data: JSON.stringify({
            operationName: OPERATION_NAME,
			query: QUERY,
			variables: {
				params: await parameterToSearchQuery(params),
                adParams: await parameterToSearchQuery(adParams)
			},
		}),
	});

	return await Promise.all(
		response.data.data.ace_search_product_v4.data.products.map(normalizeProductResult),
	);
};

exports.find = async (req, res) => {
    let product, result
    let input = req.body.keyword != undefined ? req.body.keyword.toLowerCase() : '';

    try {
        product = await Product.find({keyword: input}).lean().exec();
    } catch (error) {
        res.status(500).send(error)
    }

    if (product.length < 1) {
        const product = await search({
            query: input
        })
        const saveProduct = new Product({ keyword: input, product });
        try {
            await saveProduct.save(); 
        } catch (error) {
            res.status(500).send(error)
        }
    }

    try {
        result = await Product.find({keyword: input}).lean().exec();
    } catch (error) {
        res.status(500).send(error)
    }

    res.status(200).json(result[0].product)
}

