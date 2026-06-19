import {test, expect} from '@playwright/test';


  
     test.beforeAll('Before All', async ()=>{
 
     console.log('Before All');
    

     }); 
     
     
     test.afterAll('After All', async ()=>{
 
     console.log('After All');
    }); 


    
     test.beforeEach('Before Each', async ()=>{
 
     console.log('Before Each');
    

     }); 
     
     
     test.afterEach('After Each', async ()=>{
 
     console.log('After Each');
    }); 


     
     test('test 1', async ()=>{
      console.log('Test 1');
}); 


    test('test 2', async ()=>{
     console.log('Test 2');
 }); 
     

