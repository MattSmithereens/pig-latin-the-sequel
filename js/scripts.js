
function pigLatin(word) {
  var vowels = ["a","e","i","o","u","A","E","I","O","U"];
    result = word.split("");

  if (vowels.includes(word[0])) {
    return word += "way";
  } else {
    for (var i = 0; i < word.length; i++) {
// test for consonants
      if (!vowels.includes(word[i])) {
        result.push(result.shift());
      } else {
        result.push('ay');
        return result.join('');
      }
    }
  }
}


console.log(pigLatin("screwdriver"));
