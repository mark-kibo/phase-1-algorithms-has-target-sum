function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i=0; i<array.length; i++){
    for(let j=i+1; j<array.length; j++){
      let sum= array[i]+array[j]
      if(sum === target) return true
      
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
  loop into our arry to get each element
  loop the array starting from the second index from the start
  in each loop add the two elements and compare i the result is equal to target.
  print result
  continue
  end when all elements have been iterated
*/

/*
  Add written explanation of your solution here
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
