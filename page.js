 
// This JavaScript file has all the functions to control the 
// 3 card monty game and was written by me, Griffin Hampton,
// the first semester of my junior year.
var intervalId;
var millis = 1000;

  // Randomly select which two cards to switch.
  function sampleRange() {
      var sample = [];
      var range = ["1","2","3"];
      for(var i=0; i<2; i++) {
        sample.push(range.splice(Math.random()*range.length,1));
      }
      return sample
    }

    // Test function to see whitch two cards switched places.
    function switcharoo() {
      var real = sampleRange();
      document.getElementById("foo").innerHTML= real;
    }
    
    // Makes the picture of the card appear.
    function appearCard() {
      $('.genface').show();
    }

    // Makes the picture of the card disappear.
    function dissapearCard() {
      $('.genface').hide();
    }
    
    // Makes the checker pattern disappear.
    function dissapearChecker() {
      $('.checker').hide();
    }

    // Makes the checker pattern appear.
    function appearChecker() {
      $('.checker').show();
    }
    
    // Changes the display from card back to face.
    function flipUp() {
      dissapearChecker();
      appearCard();
    }
    
    // Changes the display from card face to back.
    function flipDown() {
      dissapearCard();
      appearChecker();
      document.getElementById("winner").innerHTML= "Watch the cards closely.";
    }
    
    function stop() {
      clearInterval(intervalId);
    }

    // When the answer button is clicked the start function will be called.
   function start() {
     var reps = Math.floor(Math.random()*10+1);
     flipDown();
     intervalId = setInterval(blinkAndMove, millis);
     setTimeout(stop, reps * millis);
     setTimeout(checkCorrect, (reps + 1) * millis);
    }

    // Random color generator to indicate which two cards were switched.
    function color(){
      var hcolor = "";
      for (i=0; i<6; i++){
        var col = Math.floor(Math.random()*16);
        if (col == 10){
          col = "A";
        }
        if (col == 11){
          col = "B";
        }
        if (col == 12){
          col = "C";
        }
        if (col == 13){
          col = "D";
        }
        if (col == 14){
          col = "E";
        }
        if (col == 15){
          col = "F";
        }
        hcolor = hcolor + col;
      }
      hcolor = "#"+hcolor;
      return hcolor;
    }

    // The pairs the movement of the cards with the color changes.
    function blinkAndMove() {
      var arr = sampleRange();
      var col = color();
      var one = arr[0];
      var two = arr[1];
      whichblinkone = "num" + one;
      whichblinktwo = "num" + two;
      document.getElementById(whichblinkone).style.backgroundColor=col;
      document.getElementById(whichblinktwo).style.backgroundColor=col;
      whichFaceOne = "face" + one;
      whichFaceTwo = "face" + two;
      var x = document.getElementById(whichFaceOne).src;
      var y = document.getElementById(whichFaceTwo).src;
      document.getElementById(whichFaceOne).src=y;
      document.getElementById(whichFaceTwo).src=x;
    }
    
    // Check if the user was able to guess the correct switcheroo.
    function checkCorrect(nIntervalId) {
      clearInterval(nIntervalId);
      var answer = prompt("Which card is the queen; 1, 2, or 3?");
      whichFace = "face" + answer;
      var x = document.getElementById(whichFace).src;
      var filename = x.replace(/^.*[\\\/]/, '') 
      console.log(filename);
      if (filename == "QueenSpades.png") {
        document.getElementById("winner").innerHTML= "You are a WINNER!";
      } else {
        document.getElementById("winner").innerHTML= "You chose the wrong card. Better luck next time.";
      }

      flipUp();
    }
