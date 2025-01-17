function findFirstPositive(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            return nums[i];  // Exit the function and return the first positive number
        }
    }
    return "No positive number found";  // If no positive number is found
}

console.log(findFirstPositive([-5, -2, 0, 3, 4]));  // Output: 3
