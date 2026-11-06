
// Hooks in playwright:

/*
Hooks: Special method used to perform the setup and teardown process. 

// Different types of hooks present in playwright:: 
1. test.beforeAll() -- it will get executed before any of the testcase 
    if you have 10 testcase then before all will execute for one time. 
    ex: db connection. 

2. test.beforeEach()** -- it will get executed before every testcase 
 if you have 10 testcase , it will get executed for 10 times
    ex: launch url 

3. test.afterEach() -- it will get executed after every testcase 
    ex: logout, closing the browser

4. test.afterAll() -- it will get executed after all the testcase is completed. 
    ex: report generation, db closer. 

    execution steps are as below: 
    1 2 3 4 


*/

import {test,expect} from '@playwright/test'

test.afterEach(async() =>{
    console.log("after Each");
})
test.beforeAll(async()=>{
    console.log('before all');
})

test.afterAll(async()=>{
        console.log('after all');
})

test.beforeEach(async()=>{
    console.log('before each');
})

test('test 1', async() =>{
    console.log('testcase 1');
})
test('test 2', async() =>{
    console.log('testcase 2');
})
test('test 3', async() =>{
    console.log('testcase 3');
})


