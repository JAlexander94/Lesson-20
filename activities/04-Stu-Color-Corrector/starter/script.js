// JavaScript function that wraps everything
$(document).ready(function() {

  // Array for word colors
  var colorsOfText = [];

  // Target word
  var targetColor;

  // Target word color
  var targetColorOfText;

  // User"s selection
  var userAnswer;

  //
  var randtargetcolor = $("#rand-target-color")
  var colorlist = $("#color-picker")

  // Array for words
  var colors = [
    "brown",
    "blue",
    "magenta",
    "teal",
    "coral",
    "black"
  ];

  // This function sets a random color "word" and a random set of colors "visuals"
  function randColor() {

    // Set random word
    targetColor = colors[1+ Math.floor(Math.random()*(colors.length-1))]
    randtargetcolor.text(targetColor)

    // Set random word color
    targetColorOfText = colors[1+ Math.floor(Math.random()*(colors.length-1))]
    randtargetcolor.css("color",targetColorOfText)
    return randtargetcolor
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }  

  // This function creates the actual "game" logic.
  function createColorPicker() {

    // Shuffle color array
    shuffle(colors)

    // Push to text color array
    colorsOfText = colorsOfText.concat(colors)

    // Shuffle text color array
    shuffle(colorsOfText)

    // Loop through all colors in the array
    // Create element to hold word
    // Output a word
    // Make word a random color
    for (let i=0;i<colors.length;i++){
      var word = $("<li>")
      word.attr("id",colors[i])
      word.text(colors[i])
      word.css("color",colorsOfText[i])
      colorlist.append(word)
    }

  }

  // Clear the divs and arrays upon each round.
  function clear() {
    randtargetcolor.empty()
    colorlist.empty()
    colorsOfText =[]
  }

  // Function for resetting colors and setting new colors.
  function reset() {
    clear()
    randColor()
    createColorPicker()
  }

  // Get id of element clicked by user
  $("#color-picker").click(function(event) {
    userAnswer = event.target.id
    console.log(targetColorOfText)
    if(userAnswer===targetColorOfText){
      alert("You win!") 
      reset()}else{
        alert("You lose!")
        reset()}

  });


  // Run game
  reset()
});
