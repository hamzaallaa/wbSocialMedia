const puppeteer = require("puppeteer");
const fs = require("fs/promises");

//login with facebook account 
const login = async () => {
    const browser = await puppeteer.launch({
      headless: false,
      args: [`--window-size=1920,1080`],
      defaultViewport: {
        width: 1220,
        height: 1080,
      }
    });
    const page = await browser.newPage();
  try {
        await page.setDefaultNavigationTimeout(1000000);
        await page.goto("https://www.facebook.com/", { waitUntil: "load", timeout :0});
        // setTimeout(async () => {
          await page.waitForSelector("#email");
          //   await page.waitForSelector("#pass");
          //   await page.waitForSelector('input[type="submit"]');
          await page.type("#email", "0655554703");
          await page.type("#pass", "0655554703dada");

          // get value input email and password
          const email = await page.$eval("#email", (el) => el.value);
          const password = await page.$eval("#pass", (el) => el.value);
          console.log(email);
          console.log(password);
          // await page.click('#u_0_d_ed');
          await page.click('button[name="login"]');
          await page.waitForNavigation();
          console.log(" login =======================================> ");
          await page.click(`div`); 
          await page.waitForTimeout(3000);
          await page.goto("https://www.facebook.com/marketplace/create/vehicle", { waitUntil: "load", timeout: 0 });
          await page.waitForTimeout(3000);
          await page.click("div");
          // var elmn = document.querySelector('[aria-label="Vehicle type"]');
          await page.click('[aria-label="Vehicle type"]');
    
          const names = await page.evaluate(() => {
            // console.log("namza1");
            return Array.from(document.querySelectorAll('[role="menuitemradio"] span, [role="option"] span')).map((x) => x.textContent);
            
            // var t = document.querySelectorAll('[role="menuitemradio"] span, [role="option"] span');
            // console.log("namza2",t)
          });
    
          // const inner_html = await page.evaluate(() => document.querySelectorAll('[role="menuitemradio"] span, [role="option"] span'));
          // const inner_html = await page.$eval("#mount_0_0_eZ > div > div:nth-child(1) > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.rq0escxv.pfnyh3mw.jifvfom9.gs1a9yip.owycx6da.btwxx1t3.j83agx80.buofh1pr.dp1hu0rb.l9j0dhe7.du4w35lb > div.rq0escxv.l9j0dhe7.j83agx80.cbu4d94t.d2edcug0.hpfvmrgz.pfnyh3mw.dp1hu0rb.rek2kq2y.o36gj0jk.tkr6xdv7.hlyrhctz > div > div.rpm2j7zs.k7i0oixp.gvuykj2m.j83agx80.cbu4d94t.ni8dbmo4.du4w35lb.q5bimw55.ofs802cu.pohlnb88.dkue75c7.mb9wzai9.d8ncny3e.buofh1pr.g5gj957u.tgvbjcpo.l56l04vs.r57mb794.kh7kg01d.eg9m0zos.c3g1iek1.l9j0dhe7.k4xni2cv > div.j83agx80.cbu4d94t.buofh1pr.l9j0dhe7 > div.aov4n071.j83agx80.cbu4d94t.buofh1pr > div > div > div.aahdfvyu.hv4rvrfc.dati1w0a > div.bi6gxh9e.aov4n071.l9j0dhe7 > div > div", (element) => element.innerHTML);
        //  var inner_html=await page.evaluate((sel='role="menuitemradio"] span, [role="option"] span') => {
        //    return (elements = Array.from(document.querySelectorAll(sel)));
        //  }, sel);
        // let urls = await page.$$eval('[role="menuitemradio"] span, [role="option"] span');
         console.log("marketplace=======================================>", names);
         await page.waitForNavigation();
        // },2000)

        //   await browser.close();
        
    } catch (error) {
        console.log('error', error);
          await browser.close();
    }

}
login();
