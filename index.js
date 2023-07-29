function hasTargetSum(array, target) {
  // Write your algorithm here
  let seenNumbers={}
  for(let i=0; i<array.length; i++){
    let complement=target - array[i]
    // console.log(complement)
    if(seenNumbers[complement]){
      return true
    }else{
      seenNumbers[array[i]]= true
    }  
  }
return false
}

/* 
  Write the Big O time complexity of your function here
  having two loops
  O(n*n)= O(n^2)

  removing constants 
  O(n)
*/

/* 
  Add your pseudocode here
  create an obj of seen Numbers
  loop into our arry to get each element
  get the complement of the target using the current element
  confirm if our complement is present as a key in the obj, return true
  otherwise, add element to obj. 
  
  finally return false
*/

/*
  Add written explanation of your solution here
  have an object that stores the numbers we have already seen.
  in each iteration check to see if complement of the target against the currentt number is present in the obj
  we return true, otherwise we add the element as a key in our obj

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([9, 2, 5, 6], 11));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([9, 8, 5], 19));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 5], 7));
}

module.exports = hasTargetSum;
