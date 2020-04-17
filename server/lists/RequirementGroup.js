// REQUIREMENT GROUP
// A type that is assigned to an individual requirement
// e.g. "Visual inspection"

const { Text, Relationship, Integer } = require("@keystonejs/fields");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");

module.exports = {
	fields: {
		name: {
			type: Text
		},
		description: {
			type: Wysiwyg
		},
		requirement: {
			type: Relationship,
			ref: "Requirement.section",
			many: true
		},
		displayOrder: {
			type: Integer
		}
	}
};
