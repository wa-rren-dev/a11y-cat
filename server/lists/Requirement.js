// REQUIREMENT
// A specific requirement / question that we want to assert on
// e.g. "Are the headings in the correct order?"

const { Text, Relationship } = require("@keystonejs/fields");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");

module.exports = {
  fields: {
    name: {
      type: Text
    },
    section: {
      type: Relationship,
      ref: "RequirementGroup"
    },
    description: {
      type: Wysiwyg
    }
  }
};
