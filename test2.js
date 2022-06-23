const puppeteer = require("puppeteer");
(async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 20,
    });
    const page = await browser.newPage();
  try {
    await page.setDefaultNavigationTimeout(1000000);
    await page.setViewport({ width: 1000, height: 600 });
    await page.goto("https://www.facebook.com");
    await page.waitForSelector("#email");
    await page.type("#email", "0655554703");
    await page.type("#pass", "0655554703dada");
    await page.click(`[type="submit"]`);
    await page.waitForNavigation();
    await page.click(`div`); // this is because facebook leaves some black overlay if you log in with my chromium; it may not be the same for yours
    await page.waitForTimeout(5000);
    await page.goto("https://www.facebook.com/profile.php?id=100018619276178");
    await page.waitForTimeout(3000);
    await page.click("div");
    await page.waitForSelector(`#mount_0_0_kj > div > div:nth-child(1) > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.j83agx80.cbu4d94t.dp1hu0rb > div > div > div.bp9cbjyn.j83agx80.cbu4d94t.d2edcug0 > div.rq0escxv.d2edcug0.ecyo15nh.k387qaup.r24q5c3a.hv4rvrfc.dati1w0a.tr9rh885 > div > div.rq0escxv.l9j0dhe7.du4w35lb.hpfvmrgz.g5gj957u.aov4n071.oi9244e8.bi6gxh9e.h676nmdw.aghb5jc5.gile2uim.pwa15fzy.fhuww2h9 > div:nth-child(1) > div > div > div > div > div.k4urcfbm.buofh1pr.j83agx80.ll8tlv6m > div`);
    await page.click(`#mount_0_0_kj > div > div:nth-child(1) > div > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.j83agx80.cbu4d94t.dp1hu0rb > div > div > div.bp9cbjyn.j83agx80.cbu4d94t.d2edcug0 > div.rq0escxv.d2edcug0.ecyo15nh.k387qaup.r24q5c3a.hv4rvrfc.dati1w0a.tr9rh885 > div > div.rq0escxv.l9j0dhe7.du4w35lb.hpfvmrgz.g5gj957u.aov4n071.oi9244e8.bi6gxh9e.h676nmdw.aghb5jc5.gile2uim.pwa15fzy.fhuww2h9 > div:nth-child(1) > div > div > div > div > div.k4urcfbm.buofh1pr.j83agx80.ll8tlv6m > div`);
    // type inside create post
    let sentenceList = [`I will give just about anything if I could make you care, he said. Especially about me.`, `This apparent hurly-burly and disorder turn out, after all, to reproduce real life with its fantastic ways more accurately than the most carefully studied out drama of manners. Every man is in himself all humanity, and if he writes what occurs to him he succeeds better than if he copies, with the help of a magnifying glass, objects placed outside of him.`];

    // for (let j = 0; j < sentenceList.length; j++) {
    //   let sentence = sentenceList[j];
    //   for (let i = 0; i < sentence.length; i++) {
    //     await page.keyboard.press(sentence[i]);
    //     if (i === sentence.length - 1) {
    //       await page.waitFor(2000);
    //       await page.keyboard.down("Control");
    //       await page.keyboard.press(String.fromCharCode(13)); // character code for enter is 13
    //       await page.keyboard.up("Control");
    //       await page.waitFor(4000);

    //       console.log("done");
    //       await page.click(`[aria-label="What's on your mind?"]`);
    //     }
    //   }
    // }

    console.log("yay we are in facebook logged in============>");
  } catch (error) {
      
      console.error(error);
          await browser.close();
      
  }
})();
