
// Allure reports configurations
/*

:: installtion of allure 
1. npm install --save-dev allure-commandline
2. npm install --save-dev allure-playwright
3. add the allure report inside the playwright config file. 
    [['html'],['allure-playwright']],

** Allure folder will automatically get created when we run the test case for the first time. 

Execute the file atleast for one time 
Post execution allure results folder will be created 
Open the allure report using below command  
npx allure serve allure-results

run the below command inside the terminal 
npx allure generate allure-results --clean-o allure-report

once the allure result folder is created , copy the history and paste it in allure results folder


*/