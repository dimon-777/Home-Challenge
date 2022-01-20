const faker = require("faker");
const userTest = "TestAuto " + faker.internet.userName();
console.log(userTest)
module.exports = {
    logEmail: "kareyad257@reamtv.com",
    logPass: "Samsung_123",
    randEmail: faker.internet.email(),
    randPass: "Hello123",
    userAuto: userTest,
}