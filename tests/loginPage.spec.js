

import {test,expect} from '@playwright/test'
import { pageLogin } from '../pages/pageLogin'
import data from '../testdata/login.json'

let lps // creating the reference at the global level

test.beforeEach(async ({page}) =>{
      lps = new pageLogin(page)
    await lps.launchUrls(data.url)
})

test('valid login user', async({page}) =>{
    await lps.loginIntoApplicationss(data.email, data.password)
    await expect(lps.homePageIdentifiers).toBeVisible()
})

test('invalid login user', async() =>{

    await lps.loginIntoApplicationss(data.email, data.invalidPassword)
    await expect(lps.errorMessages).toBeVisible()
})