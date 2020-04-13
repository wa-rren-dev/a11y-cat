const { Keystone } = require("@keystonejs/keystone");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
const { Text, Checkbox, Password } = require("@keystonejs/fields");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const RequirementSchema = require("./lists/Requirement.js");
const RequirementGroupSchema = require("./lists/RequirementGroup.js");
const createUser = require("./seeds/create-user");
const createRequirements = require("./seeds/create-requirements-and-requirement-groups");
const createSpecifications = require("./seeds/create-specifications.js");
const AuditSchema = require("./lists/Audit");
const SpecificationSchema = require("./lists/Specification");
const TestSchema = require("./lists/Test");

const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");

const PROJECT_NAME = "a11y-cat-server";

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
  onConnect: initialiseData,
});

async function initialiseData(keystone) {
  await createUser(keystone);
  await createRequirements(keystone);
  await createSpecifications(keystone);
}

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) =>
  Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }
  return { id: user.id };
};
const userIsAdminOrOwner = (auth) => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};
const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

keystone.createList("User", {
  fields: {
    name: { type: Text },
    email: {
      type: Text,
      isUnique: true,
    },
    isAdmin: { type: Checkbox },
    password: {
      type: Password,
    },
  },
  access: {
    read: access.userIsAdminOrOwner,
    update: access.userIsAdminOrOwner,
    create: access.userIsAdmin,
    delete: access.userIsAdmin,
    auth: true,
  },
});

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User",
});

keystone.createList("Requirement", RequirementSchema);
keystone.createList("RequirementGroup", RequirementGroupSchema);
keystone.createList("Audit", AuditSchema);
keystone.createList("Specification", SpecificationSchema);
keystone.createList("Test", TestSchema);

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      enableDefaultRoute: true,
      authStrategy,
    }),
  ],
};
