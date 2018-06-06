
function pigLatin(word) {
  var vowels = ["a","e","i","o","u","A","E","I","O","U"];
  var vowelsY = ["y","Y"];
  var lettersQ = ["qu","Qu"];
  var result = word.split("");

  if (word.includes(lettersQ[0]) || word.includes(lettersQ[1])) {
    result.shift(); // removes q
    result.shift(); // removes u
    result.push('quay');
  }
   else if (vowels.includes(word[0])) {
    return word += "way";
  } else {
    for (var i = 0; i < word.length; i++) {
      if (!vowels.includes(word[i])) {
        result.push(result.shift());
      } else {
        result.push('ay');
        return result.join("");
      }
    }
  }

  if (vowelsY.includes(word[0,1])) {
    return word += "yay";
  } else {
    return result.join("");
  }


}




console.log(pigLatin("quickly"));
