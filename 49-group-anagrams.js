/**
 * Given an array of strings, group all the strings that have the same letters in them.
 * @params {string[]} strs
 * @returns {string[][]}
 */

function GroupAnagrams(strs) {
    if (!strs.length) return [];

    let res = new Map();
    //For every string in strs:
    for (str of strs) {
        const freq = new Array(26).fill(0); //Create an array of 26 0s

        for (l of str) { //For each letter in the string
            let index = l.charCodeAt(0) - 'a'.charCodeAt(0);
            freq[index]++ //+1 to index of letter in alphabet (i.e +1 to 9th 0 if i)
        }

        const hash = freq.toString();
        //append array to answer
        const values = res.get(hash) || [];
        values.push(str);
        res.set(hash, values)
    }

    return [...res.values()];
}

console.log(GroupAnagrams(["ant", "tea", "ate", "tan", "bee"]))