// REQUIREMENT
// A specific requirement / question that we want to assert on
// e.g. "Are the headings in the correct order?"

const { Text, Relationship, Integer } = require("@keystonejs/fields");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");

module.exports = {
	fields: {
		name: {
			type: Text
		},
		section: {
			type: Relationship,
			ref: "RequirementGroup.requirement"
		},
		shortDescription: {
			type: Wysiwyg
		},
		longDescription: {
			type: Wysiwyg
		},
		shortSupport: {
			type: Wysiwyg
		},
		longSupport: {
			type: Wysiwyg
		},
		displayOrder: {
			type: Integer
		}
	}
};
