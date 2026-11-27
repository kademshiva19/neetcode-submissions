/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *    
 * 
 */

class Solution {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree = function(preorder, inorder,i,p,build) {
        p = i = 0
        build = function(stop){
            if(inorder[i] != stop){
                var root = new TreeNode(preorder[p++])
                root.left = build(root.val)
                i++
                root.right = build(stop)
                return root
            }
            return null
        }
        return build()
    };
}
