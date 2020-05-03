// SERVICE
// A project that can be audited e.g. "BNF" or "NICE Website"

const { Text } = require("@keystonejs/fields");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");

module.exports = {
	fields: {
		name: {
			type: Text
		},
		description: {
			type: Wysiwyg
		},
		baseUrl: {
			type: Text
		}
	}
};
