package StepDefinations;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

//import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class LoginStepDefination {
	WebDriver driver;
	@Given("^user is on Login page$")
	 public void user_on_login_page(){
	 System.setProperty("webdriver.chrome.driver","C:\\ChomeDriver\\new\\chromedriver.exe");
	 driver = new ChromeDriver();
	 driver.get("https://freecrm.com/");
	}
	
	@When("^title is login page FreeCrm$")
	public void title_is_login_page_FreeCrm()  {
	    String title=driver.getTitle();
	    System.out.println(title);
	    Assert.assertEquals("Free CRM #1 cloud software for any business large or small", title);
	    
	}

	@Then("^user can enter Username and Password$")
	public void user_can_enter_Username_and_Password() throws InterruptedException {
		driver.findElement(By.xpath("//a[@href='https://ui.freecrm.com'][contains(.,'Log In')]")).click();
		Thread.sleep(3000);
		driver.findElement(By.xpath("//input[contains(@name,'email')]")).sendKeys("sarikabamania13@gmail.com");
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys("Myne2017");
	}

	@Then("^user click on login button$")
	public void user_click_on_login_button() {
		driver.findElement(By.xpath("(//div[contains(.,'Login')])[5]")).click();
	
	}

	@Then("^user should able to login to page$")
	public void user_should_able_to_login_to_page() {
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Cogmento CRM", title);
		driver.close();
		
	}



}
