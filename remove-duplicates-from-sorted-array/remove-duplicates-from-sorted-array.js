/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let numsCopy = nums.slice();
  for (var i = 0; i < numsCopy.length; i++) {

    if (i !== numsCopy.indexOf(numsCopy[i])) {  
        nums.splice((nums.indexOf(numsCopy[i]) + 1), 1);
    }
  }

  return nums.length;
};