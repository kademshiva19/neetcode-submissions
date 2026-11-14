class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]} 
     */
    /**
 * @param {number[]} nums
 * @return {number[][]}
 */
threeSum(nums) {
    const result = [];

    // Sort the array
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {

        // Skip duplicate first numbers
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        // Since array is sorted, no possible triplet after this
        if (nums[i] > 0) {
            break;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([
                    nums[i],
                    nums[left],
                    nums[right]
                ]);

                // Skip duplicate left values
                while (
                    left < right &&
                    nums[left] === nums[left + 1]
                ) {
                    left++;
                }

                // Skip duplicate right values
                while (
                    left < right &&
                    nums[right] === nums[right - 1]
                ) {
                    right--;
                }

                left++;
                right--;

            } else if (sum < 0) {
                // Need a bigger sum
                left++;

            } else {
                // Need a smaller sum
                right--;
            }
        }
    }

    return result;
}
};
