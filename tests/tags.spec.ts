import {test, expect} from '@playwright/test';


    test('@smoke  @sanity test 1', async ({ page })=>{
 
     console.log('Test 1');
    }); 

     test('test 2', ({tag:['@sanity, @regression']}) ,async ({ page })=>{
 
     console.log('Test 2');
    });
    
    test('test 3', async ({ page })=>{
 
     console.log('Test 3');
    });

    test('test 4', async ({ page })=>{
 
     console.log('Test 4');
    });
