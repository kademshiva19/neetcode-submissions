class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow = function(s, t) {
        if(t.length>s.length) return '';

    const neededChars = {};
    for (let char of t){
        neededChars[char] = (neededChars[char] || 0) + 1;
    }

    let left = 0;
    let right = 0;
    let neededlength = Object.keys(neededChars).length;
    let substring = '';

    while(right<s.length){
        const rightChar = s[right];
        neededChars[rightChar]--;
        if(neededChars[rightChar] === 0) neededlength--;

        while(neededlength === 0){
            if(!substring || substring.length > right - left + 1){
                substring = s.slice(left,right + 1);
            }

            const leftChar = s[left];

            if(neededChars[leftChar] === 0){
                neededlength++;
            }
            neededChars[leftChar]++;
            left++
        }
        right++
    }
    return substring;
    }
}
