$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sarik/eclipse-workspace/CucumberPractice/src/main/java/Features/Login.Feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRM Login Feature",
  "description": "",
  "id": "freecrm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "FreeCRM Login Test",
  "description": "",
  "id": "freecrm-login-feature;freecrm-login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title is login page FreeCrm",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user can enter Username and Password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user should able to login to page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_on_login_page()"
});
formatter.result({
  "duration": 11253385300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_is_login_page_FreeCrm()"
});
formatter.result({
  "duration": 18993500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_can_enter_Username_and_Password()"
});
formatter.result({
  "duration": 4211846900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_button()"
});
formatter.result({
  "duration": 132112000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_able_to_login_to_page()"
});
formatter.result({
  "duration": 179718400,
  "status": "passed"
});
});