const axios = require('axios')

const axiosClient = axios.create();

axiosClient.interceptors.request.use(async (config) => {
	config.headers = {
		...config.headers,
		"Accept-Encoding": "gzip, deflate, br",
		Connection: "keep-alive",
	};
	return config;
});

module.exports = axiosClient;