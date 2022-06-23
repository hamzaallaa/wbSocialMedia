const puppeteer = require("puppeteer");
const fs = require("fs");

const cookies = require("./cookies.json");
const config = require('./config.json')
const  login =async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: [`--window-size=100%,100%`],
        defaultViewport: null,
    });
    const page = await browser.newPage();
    if (Object.keys(cookies).length) {
        await page.setCookie(...cookies);
        await page.goto("https://www.facebook.com", { waitUntil: "load", timeout: 0 });

    }
    // else if (!Object.keys(cookies).length) {
        // await page.goto("https://www.facebook.com/login", { waitUntil: "networkidle2" });
        // await page.type("#email", config.username, { delay: 30 });
        // await page.type("#pass", config.password, { delay: 30 });
        // const email = await page.$eval("#email", (el) => el.value);
        // const password = await page.$eval("#pass", (el) => el.value);
        // console.log(email);
        // console.log(password);
        // await page.click('button[name="login"]');
        // await page.waitForNavigation({ waitUntil: "networkidle0" });
        // await page.waitForTimeout(15000);
        // try {
        //   await page.waitForTimeout('[data-click="profile_icon"]');
        // } catch (err) {
        //   console.log("failed to login");
        //   process.exit(0);
        // }
        // let currentCookies = await page.cookies();
        // fs.writeFileSync("./cookies.json", JSON.stringify(currentCookies));
    //   }  
}
 login()
