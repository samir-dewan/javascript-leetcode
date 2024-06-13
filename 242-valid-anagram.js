/**
 * return true if two strings, s and t, are anagrams of each other.
 * @params (string) s
 * @params (string) t
 * @return (boolean)
 */

function validAnagram(s, t) {
  if (s.length !== t.length) {
    //catch non-same length strings and avoid errs
    return false;
  }

  let sSet = new Set();
  let tSet = new Set();

  for (const letter of s) {
    sSet[letter] = (sSet[letter] || 0) + 1;
  }

  for (const letter of t) {
    tSet[letter] = (tSet[letter] || 0) + 1;
  }

  for (const letter in sSet) {
    if (sSet[letter] !== tSet[letter]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
