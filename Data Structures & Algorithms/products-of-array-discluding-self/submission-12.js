class Solution{
 productExceptSelf = function(nums) {
    const answer = new Array(nums.length).fill(1);
    // answer = [1,2,3,4]

    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        answer[i] = prefix;
        prefix *= nums[i];
    }

    // output after first traversal
    // answer = [ 1, 1, 2, 6 ]

    let suffix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= suffix;
        suffix *= nums[i];
    }

    // answer = [ 24, 12, 8, 6 ]

    return answer;
    }
};