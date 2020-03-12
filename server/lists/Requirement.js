const { Text, Relationship } = require("@keystonejs/fields");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");

module.exports = {
  fields: {
    title: {
      type: Text,
      isRequired: true
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
