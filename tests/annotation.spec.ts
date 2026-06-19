import {test, expect} from '@playwright/test';


    test.only('test 1', async ({ page })=>{
 
     console.log('Test 1');
    }); 

     test.only('test 2', async ({ page })=>{
 
     console.log('Test 2');
    });
    
    test.skip('test 3', async ({ page })=>{
 
     console.log('Test 3');
    });

    test.fixme('test 4', async ({ page })=>{
 
     console.log('Test 4');
    });

  //  test.slow('test 5', async ({ page })=>{
 
   //  console.log('Test 5');
   // });
     