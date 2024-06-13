/**
 * find two numbers in an array that total up to a given sum.
 * @params {array} nums
 * @params {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
  let prevMap = new Map(); //create a hashmap of all previous numbers

  for (let index = 0 ; index < nums.length; index++) {
    const n = nums[index];
    const complement = target - n;
    const isTarget = prevMap.has(complement);

    if (isTarget) {
      const sumIndex = prevMap.get(complement);
      return [index, sumIndex];
    }

    prevMap.set(n, index);
  }
}

console.log(twoSum([1, 2, 3, 4], 7));
