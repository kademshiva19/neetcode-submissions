/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST = function(root) {
        function valid(node,minimum,maximum){
            if(!node) return true;

            if(!(node.val > minimum && node.val < maximum)) return false;

            return valid(node.left,minimum,node.val) && valid(node.right,node.val,maximum);
        }
        return valid(root,-Infinity,Infinity);
    }
}
