// SERVICE
// A project that can be audited e.g. "BNF" or "NICE Website"

const { Text } = require("@keystonejs/fields");

module.exports = {
	fields: {
		name: {
			type: Text
		},
		description: {
			type: Text
		}
	}
};
