/**
 * for a given array of numbers, return true if there is a duplicate.
 * @param {number[]} nums
 * @return {boolean}
 * params are what you get (nums, an array of numbers) and we're expected to return a bool.
 * */

function containsDuplicate(nums) {
  let numset = new Set(); //create a set
  for (const num in nums) {
    //for each number in nums
    if (numset.has(num)) {
      //if the number is a key in the set
      return true; //return true
    } else {
      //else
      numset.add(num); //append the number to the set
    }
  } //if we've gone through all the numbers

  return false; //return false
}
