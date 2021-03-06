// AUDIT
// A collection of tests
// e.g. "AIMS website first audit"

const { Text, Relationship } = require("@keystonejs/fields");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");

module.exports = {
	fields: {
		name: {
			type: Text
		},
		service: {
			type: Relationship,
			ref: "Service"
		},
		description: {
			type: Wysiwyg
		},
		tests: {
			type: Relationship,
			ref: "Test",
			many: true
		}
	}
};
