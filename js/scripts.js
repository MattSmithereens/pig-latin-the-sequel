function runFactorial(input) {
  if (input === 0 || input === 1) return 1;
  for(var i = input - 1; i >= 1; i--) {
    input = input * i;
    console.log(input);
  }
  return input;
}

$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();

    var inputtedNumber = parseInt($("#input").val());
    runFactorial(inputtedNumber);
  });
});
