const crypto = require("crypto");
const randomString = () => crypto.randomBytes(6).hexSlice();
const requirementGroups = require("./seeds/requirement-groups.json");
const requirements = require("./seeds/requirements.json");

module.exports = async keystone => {
  // Count existing users
  const {
    data: {
      _allUsersMeta: { count }
    }
  } = await keystone.executeQuery(
    `query {
      _allUsersMeta {
        count
      }
    }`
  );

  if (count === 0) {
    const password = randomString();
    const email = "admin@example.com";

    await keystone.executeQuery(
      `mutation initialUser($password: String, $email: String) {
            createUser(data: {name: "Admin", email: $email, isAdmin: true, password: $password}) {
              id
            }
          }`,
      {
        variables: {
          password,
          email
        }
      }
    );

    console.log(`

User created:
  email: ${email}
  password: ${password}
Please change these details after initial login.
`);
  }

  // const group = JSON.parse(requirementGroups);
  // const req = JSON.parse(requirements);

  // await keystone.createItems({
  //   RequirementGroup: group,
  //   Requirement: req
  // });
};
