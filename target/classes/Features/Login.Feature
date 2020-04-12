Feature: FreeCRM Login Feature 

#Scenario: FreeCRM Login Test
#
#Given user is on Login page
#When title is login page FreeCrm
#Then user can enter Username and Password
#Then  user click on login button
#Then user should able to login to page

Scenario Outline: FreeCRM Login Test 

	Given user is on Login page 
	When title is login page FreeCrm 
	Then user can enter "<username>"and "<password>" 
	Then  user click on login button 
	Then user should able to login to page 
	Then close the browser 
	
	Examples: 
		| username 					| password 	|
		|sarikabamania13@gmail.com	| Myne2017	|