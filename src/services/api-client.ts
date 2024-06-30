import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api/",
	params: {
		key: "82b31456dabb465bb13efa347e7a2cda",
	},
});
