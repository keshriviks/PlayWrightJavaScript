const {test,expect} =require('@playwright/test')

test("My first Test", async function({page}) {
   await page.goto("https://www.google.com/")

   let url=await page.url()
   console.log("the Url :"+url)
   const title_page=await page.title()
   console.log("Title of page: "+title_page)
   
    
})