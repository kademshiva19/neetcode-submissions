class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.endOfWord = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }
/** 
 * @param {string} word
 * @return {void}
 */
insert = function(word) {
    let node = this.root;
    for(let char of word){
        if(!node[char]){
            node[char] = {};
        }
        node = node[char];
    }
    node["isEnd"] = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
search = function(word) {
    let node = this.root;
    for(let char of word){
        if(!node[char]){
            return false;
        }
        node = node[char];
    }
    return node["isEnd"] === true;
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
startsWith = function(prefix) {
    let node = this.root;
    for(let char of prefix){
        if(!node[char]){
            return false;
        }
        node = node[char];
    }
    return true;
};
}