class Solution {
    /**
     * @param {string[]} words
     * @return {string}
     */
    destCity(paths) {
        const destCity = new Set();
        for (const [from,to] of paths){
            destCity.add(from);
        }
        for(const[from, to]of paths){
            if(!destCity.has(to)){
                return to
            }
        }
        return "";
    }
}
