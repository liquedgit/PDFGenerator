import puppeteer, { Browser, PuppeteerLaunchOptions } from "puppeteer"

const browser_options : PuppeteerLaunchOptions = {
    headless: true,
    args: [
        '--no-sandbox',
        '--disable-background-networking',
        '--disable-default-apps',
        '--disable-extensions',
        '--disable-gpu',
        '--disable-sync',
        '--disable-translate',
        '--hide-scrollbars',
        '--metrics-recording-only',
        '--mute-audio',
        '--no-first-run',
        '--safebrowsing-disable-auto-update',
        '--js-flags=--noexpose_wasm,--jitless'
    ],
};

export default async function GeneratePDF(content : string) : Promise<Uint8Array | null>{
    try{
        const browser : Browser = await puppeteer.launch(browser_options)
        const ctx = await browser.createBrowserContext();
        const page = await ctx.newPage()
        await page.goto(`http://127.0.0.1:3000/pdf?content=${content}`,{
            waitUntil: "networkidle2",
            timeout:5000
        })
        const pdf = await page.pdf({format:'A4'})

        await setTimeout(()=>{},5000);
        
        await browser.close()
        return pdf
    }catch(err){
        console.log(err);
        return null
    }
}