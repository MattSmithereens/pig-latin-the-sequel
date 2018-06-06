
function pigLatin(word) {
  var vowels = ["a","e","i","o","u","A","E","I","O","U"];
  var vowelsY = ["a","e","i","o","u","y","A","E","I","O","U","Y"];
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
        return result.join("");
      }
    }
  }
  if (vowelsY.includes(word[5,11])) {
    return word += "yay";
  } else {
    return result.join("");
  }
  // if (vowelsY.includes(word[5,11])) {
  //   return word += "yay";
  // } else {
  //   return result.join("");
  // }
}




console.log(pigLatin("yesterday"));
