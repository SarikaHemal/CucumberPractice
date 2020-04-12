package StepDefinations;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DealStepDefinations {
	WebDriver driver;

	@Given("^user is already on Login Page$")
	public void user_already_on_login_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\ChomeDriver\\new\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://freecrm.com/");
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
	}

	@When("^title of login page is Free CRM$")
	public void title_of_login_page_is_free_CRM() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Free CRM #1 cloud software for any business large or small", title);
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password(DataTable credentials) throws Exception {
		driver.findElement(By.xpath("//a[@href='https://ui.freecrm.com'][contains(.,'Log In')]")).click();
		Thread.sleep(3000);
		List<List<String>> data = credentials.raw();
		driver.findElement(By.name("email")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {
		driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button'][contains(.,'Login')]")).click();
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() {
		String title = driver.getTitle();
		System.out.println("Home Page title ::" + title);
		Assert.assertEquals("Cogmento CRM", title);
	}

	@Then("^user moves to new deal page$")
	public void user_moves_to_new_deal_page() throws InterruptedException {
		
		//Actions action = new Actions(driver);
		Thread.sleep(3000);
		//action.moveToElement(driver.findElement(By.xpath("//span[@class='item-text'][contains(.,'Deals')]"))).build().perform();
		driver.findElement(By.xpath("//span[contains(text(),'Deals')]")).click();
		System.out.print("deal is clicked");
		//driver.switchTo().frame("mainpanel");
		Thread.sleep(3000);
		driver.findElement(By.xpath("//button[contains(.,'New')]")).click();

	}

	@Then("^user enters deal details$")
	public void user_enters_contacts_details(DataTable dealData) throws Exception {
		List<List<String>> dealValues = dealData.raw();
		driver.findElement(By.name("title")).sendKeys(dealValues.get(0).get(0));
		driver.findElement(By.name("probability")).sendKeys(dealValues.get(0).get(1));
		driver.findElement(By.name("amount")).sendKeys(dealValues.get(0).get(2));
		driver.findElement(By.name("commission")).sendKeys(dealValues.get(0).get(3));
		driver.findElement(By.xpath("//button[@class='ui linkedin button']")).click();
		Thread.sleep(3000);
	}

	@Then("^Close the browser$")
	public void close_the_browser() {
		driver.quit();
	}

}
