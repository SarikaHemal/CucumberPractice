$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sarik/eclipse-workspace/CucumberPractice/src/main/java/Features/DealMap.Feature");
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
        "Email",
        "Password"
      ],
      "line": 8
    },
    {
      "cells": [
        "sarikabamania13@gmail.com",
        "Myne2017"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "Title",
        "Probability",
        "Amount",
        "Commission"
      ],
      "line": 15
    },
    {
      "cells": [
        "test deal1",
        "50",
        "500",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "test deal2",
        "40",
        "1000",
        "30"
      ],
      "line": 17
    },
    {
      "cells": [
        "test deal3",
        "30",
        "5000",
        "50"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealMapStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 13404335600,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 8462300,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 5855017800,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 57513000,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 5965000,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_moves_to_new_deal_page()"
});
formatter.result({
  "duration": 6249009300,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.user_enters_contacts_details(DataTable)"
});
formatter.result({
  "duration": 19931045400,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 693161200,
  "status": "passed"
});
});