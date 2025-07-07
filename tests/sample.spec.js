const {test,expect} =require('@playwright/test')

test("My first Test", async function({page}) {
    expect(12).toBe(12);
    
})


test("My Second Test", async function({page}) {
    expect(100).toBe(101)
})


test("My Third Test", async function({page}) {
    expect(2.0).toBe(2.0)
})

test("My Fourth Test", async function({page}) {
    expect(100).toBe(100)
})

test("My Fifth Test", async function({page}) {
    expect(100).toBe(100)
})