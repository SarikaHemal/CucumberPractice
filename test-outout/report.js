$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sarik/eclipse-workspace/CucumberPractice/src/main/java/Features/Deals.Feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "sarikabamania13@gmail.com",
        "Myne2017"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "50",
        "500",
        "10"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefinations.user_already_on_login_page()"
});
formatter.result({
  "duration": 15651061100,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinations.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 14179300,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinations.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 5972752000,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinations.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 100575400,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinations.user_is_on_home_page()"
});
formatter.result({
  "duration": 10329600,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinations.user_moves_to_new_deal_page()"
});
formatter.result({
  "duration": 6461446900,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinations.user_enters_contacts_details(DataTable)"
});
formatter.result({
  "duration": 3687627100,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinations.close_the_browser()"
});
formatter.result({
  "duration": 817525400,
  "status": "passed"
});
});