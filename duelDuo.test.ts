import { Builder, Capabilities, By, until } from "selenium-webdriver";
import { elementIsVisible } from "selenium-webdriver/lib/until";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://localhost:3000/");
});

afterAll(async () => {
  driver.quit();
});

test("Title appears when page loads", async () => {
  const title = await driver.findElement(By.id("title"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});

test("clicking the Draw button displays bots to select", async () => {
  const drawButton = await driver.findElement(By.id("draw"));
  await drawButton.click();

  const choices = await driver.findElement(By.id("choices"));
  const displayed = await choices.isDisplayed();
  expect(displayed).toBe(true);
});

test("Losses are displayed on home page", async () => {
    const losses = await driver.findElement(By.id("losses"));
    const displayed = await losses.isDisplayed();
    expect(displayed).toBe(true);
})
