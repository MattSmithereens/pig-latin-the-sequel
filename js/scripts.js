
function pigLatin(word) {
  var vowels = ["a","e","i","o","u","A","E","I","O","U"];
  var vowelsY = ["a","e","i","o","u","y","A","E","I","O","U","Y"];
  var lettersQ = ["qu","Qu"];
  var result = word.split("");

  console.log(lettersQ[1] + " " + lettersQ[0]);

  if (word.includes(lettersQ[0]) || word.includes(lettersQ[1])) {
    result.shift();
    result.shift();
    result.push('quay');
  // } else {
    // return result.join("");
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

  if (vowelsY.includes(word[5,11])) {
    return word += "yay";
  } else {
    return result.join("");
  }


}




console.log(pigLatin("qatar"));
