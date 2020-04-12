Feature: Deal data creation 

Scenario: Free CRM Create a new deal scenario 

	Given user is already on Login Page 
	When title of login page is Free CRM 
	Then user enters username and password 
		|Email|Password|
		| sarikabamania13@gmail.com | Myne2017 |
		
	Then user clicks on login button 
	Then user is on home page 
	Then user moves to new deal page 
	Then user enters deal details 
		|Title|Probability|Amount|Commission|
		| test deal1 | 50| 500 | 10 |
		| test deal2 | 40| 1000 | 30 |
		| test deal3 | 30| 5000 | 50 |
		
	Then Close the browser