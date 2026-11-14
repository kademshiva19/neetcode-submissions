class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit = function(prices) {
        let min = prices[0];
        let max = 0;
        for ( let i = 0; i < prices.length; i++){
            if(prices[i] < min) {
                min = prices[i];
            }
            let Profit = prices[i]-min;
            if(Profit>max){
                max = Profit;
            }

        }
        return max;
    }
}
