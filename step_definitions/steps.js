const {
  I,
  secrets
} = inject();

Given("I am logged in as {string} {string}", async (email, password) => {
  I.amOnPage("/user/login");
  I.fillField("//form[1]/fieldset[1]/fieldset[1]/input[1]", secrets[email]);
  I.fillField(
    "//form[1]/fieldset[1]/fieldset[2]/input[1]",
    secret(secrets[password])
  );
});

Given(
  "I am Sign Up in {string} {string} {string}",
  async (userName, email, password) => {
    I.amOnPage("/user/register");
    I.fillField("//form[1]/fieldset[1]/fieldset[1]/input[1]", secrets[userName]);
    I.fillField("//form[1]/fieldset[1]/fieldset[2]/input[1]", secrets[email]);
    I.fillField(
      "//form[1]/fieldset[1]/fieldset[3]/input[1]",
      secret(secrets[password])
    );
  }
);

Then("I navigate to {string} page", async (urlPath) => {
  I.wait(1);
  I.seeInCurrentUrl(urlPath);
  I.waitUrlEquals(urlPath, 20);
});

Then("I click {string} button", async (button) => {
  I.click(`//button[contains(text(),'${button}')]`);
});

Then("I see title {string}", async (title) => {
  I.see(title);
});

Then("I click on New Post link", async () => {
  I.click("a.nav-link.false > i.ion-compose");
});

Then("I click on Read more link", async () => {
  I.click(
    "div.article-preview:nth-child(2) a.preview-link > span:nth-child(3)"
  );
});

Then("I fill Article Title field {string}", async (message) => {
  I.fillField("//form[1]/fieldset[1]/fieldset[1]/input[1]", message);
});

Then("I write a comment {string}", async (message) => {
  I.fillField("//form[1]/div[1]/textarea[1]", message);
});

Then("I fill What this article about field {string}", async (message) => {
  I.fillField("//form[1]/fieldset[1]/fieldset[2]/input[1]", message);
});

Then("I fill Write your article field {string}", async (message) => {
  I.fillField("//form[1]/fieldset[1]/fieldset[3]/textarea[1]", message);
});

Then("I fill Enter tags field {string}", async (message) => {
  I.fillField("//form[1]/fieldset[1]/fieldset[4]/input[1]", message);
});

Then("I check if my name is showing as {string}", async (name) => {
  I.see(name);
});

Then(
  "I check if Article Title and What this article about is the same as we posted {string} and {string}",
  async (message1, message2) => {
    let articleTitle = await I.grabTextFrom(
      `//h1[contains(text(),'${message1}')]`
    );
    I.assertEqual(articleTitle, message1);
    let article = await I.grabTextFrom(`//p[contains(text(),'${message2}')]`);
    I.assertEqual(article, message2);
  }
);

Then("I check my {string} was created", async (userName) => {
  let userText = await I.grabTextFrom(`//span[contains(text(),'${secrets[userName]}')]`);
  I.assertEqual(userText, secrets[userName]);
});

Then("I check my {string}", async (userName) => {
  let userText = await I.grabTextFrom(`//span[contains(text(),'${userName}')]`);
  I.assertEqual(userText, userName);
});

Then("I check my comment {string} if was posted", async (comment) => {
  let commentText = await I.grabTextFrom(
    `//p[contains(text(),'${comment}')]`
  );
  I.assertEqual(commentText, comment);
});