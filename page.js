 
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
    
    function flipUp() {
      dissapearChecker();
      appearCard();
    }
    
    function flipDown() {
      dissapearCard();
      appearChecker();
    }
    
    function sleep(milliseconds) {
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
        break;
        }
      }
    }
    
    
    
    // Main 
    function start() {
      
      dissapearCard();
      appearChecker(); 
      
      for (i = 0; i<10; i++){
        blinkAndMove();
      }
      checkCorrect();
    }

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
      sleep(2000);
    }
    
    function checkCorrect() {
      sleep(20000);
      var answer = prompt("Which card is the queen where 1 is the left most card and 3 is the rightmost card, (1,2,3)");
      whichFace = "face" + answer;
      var x = document.getElementById(whichFace).src;
      if (x == "QueenSpades.png") {
        document.getElementById("winner").innerHTML= "You choose the right card! You win!";
      } else {
        document.getElementById("winner").innerHTML= "You choose the wrong card. Better luck next time.";
      }
      dissapearChecker();
      appearCard();
    }
    
    
    
    
    
      