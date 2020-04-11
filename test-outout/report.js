$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sarik/eclipse-workspace/CucumberPractice/src/main/java/Features/Login.Feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRM Login Feature",
  "description": "",
  "id": "freecrm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: FreeCRM Login Test"
    },
    {
      "line": 4,
      "value": "#"
    },
    {
      "line": 5,
      "value": "#Given user is on Login page"
    },
    {
      "line": 6,
      "value": "#When title is login page FreeCrm"
    },
    {
      "line": 7,
      "value": "#Then user can enter Username and Password"
    },
    {
      "line": 8,
      "value": "#Then  user click on login button"
    },
    {
      "line": 9,
      "value": "#Then user should able to login to page"
    }
  ],
  "line": 11,
  "name": "FreeCRM Login Test",
  "description": "",
  "id": "freecrm-login-feature;freecrm-login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "title is login page FreeCrm",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user can enter \"\u003cusername\u003e\"and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user should able to login to page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "freecrm-login-feature;freecrm-login-test;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 21,
      "id": "freecrm-login-feature;freecrm-login-test;;1"
    },
    {
      "cells": [
        "sarikabamania13@gmail.com",
        "Myne2017"
      ],
      "line": 22,
      "id": "freecrm-login-feature;freecrm-login-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "FreeCRM Login Test",
  "description": "",
  "id": "freecrm-login-feature;freecrm-login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "title is login page FreeCrm",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user can enter \"sarikabamania13@gmail.com\"and \"Myne2017\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user should able to login to page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.title_is_login_page_FreeCrm()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sarikabamania13@gmail.com",
      "offset": 16
    },
    {
      "val": "Myne2017",
      "offset": 47
    }
  ],
  "location": "LoginStepDefination.user_can_enter_Username_and_Password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.user_should_able_to_login_to_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});