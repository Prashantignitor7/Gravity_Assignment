
function lengthOfLIS(nums) {
  // If the array is empty, LIS(longest increasing subsequence) is 0
  if (nums.length === 0) return 0;

  // Initialize temp array where temp[i] will be the length of the LIS ending at index i
  const temp = new Array(nums.length).fill(1);

  // Start from the second element and build the temp array
  for (let i = 1; i < nums.length; i++) {
    // Check all elements before the current one
    for (let j = 0; j < i; j++) {
      // If nums[i] can be added to the increasing subsequence ending at nums[j]
      if (nums[i] > nums[j]) {
        // Update dp[i] with the max length
        temp[i] = Math.max(temp[i], temp[j] + 1);
      }
    }
  }

  // The longest increasing subsequence will be the max value in temp array
  return Math.max(...temp);
}

// Example usage:
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // Output: 4
