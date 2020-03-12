const { Text, Relationship } = require("@keystonejs/fields");
const { Wysiwyg } = require("@keystonejs/fields-wysiwyg-tinymce");

module.exports = {
  fields: {
    title: {
      type: Text,
      isRequired: true
    },
    description: {
      type: Wysiwyg
    },
    requirement: {
      type: Relationship,
      ref: "Requirement",
      many: true
    }
  }
};
