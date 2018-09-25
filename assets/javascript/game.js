
//get the id's which needs to be replaced with the input
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessLeft = document.getElementById("guess-Left");
var userGuessText = document.getElementById("user-Guess");
        
//Define variables
var Losses = 0;
var Win = 0;
var guessRemaining = 9;

//Array of all the letters that computer can randomly pick and blank array of user input
var computerChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var userChar = [];

//Random formula to generate the first random letter
computerGuess = computerChar[Math.floor(Math.random() * computerChar.length)];
//console.log("Computer Guess is "+computerGuess);

//Var to store the user input
document.onkeyup = function(event){
    var keyPressed = event.key;

    //Checking if the key pressed is a letter or not
    if(computerChar.includes(keyPressed)) {
        //if the user is pressing the same key again then show an alert
        if(userChar.includes(keyPressed)){
            //console.log("exist");
            alert("You already have guessed the key "+keyPressed);            
        }
        else {            
        //store the user input to the variable array
            userChar.push(keyPressed);
            //console.log("array value "+userChar)  
            if((computerGuess !== keyPressed)){
                guessRemaining--;
            }   
        }
    }
    else{
        //if the key pressed is not a letter then throw an alert
        alert("You pressed a key that is not a letter")
        //console.log("You pressed a key that is not a letter");
    }
            
    //for loop to display each character stored in the array
    for (var i=0; i<userChar.length; i++){ 
        userGuessText.textContent = userChar;
    }
                
    //check if the user input matches the computer character    
    if((computerGuess === keyPressed)){
        Win++;
        guessRemaining = 9;
        userChar = [];
        userGuessText.textContent = userChar; 

        //Random formula to iterate through the array of letters to chose random letter
        computerGuess = computerChar[Math.floor(Math.random() * computerChar.length)];
        //console.log("New Computer Guess: "+computerGuess);        
    } 
    //checking if the guess remaining is 0 then reset everything and increase the number of loss
    else if(guessRemaining === 0){
        Losses++;
        guessRemaining = 9;
        userChar = [];
        userGuessText.textContent = userChar;       
        computerGuess = computerChar[Math.floor(Math.random() * computerChar.length)];
        //console.log("New Computer Guess: "+computerGuess);
    }      
            
    //display the Wins, Losses, and Remaining Guess 
    winsText.textContent = Win;
    lossesText.textContent = Losses;
    guessLeft.textContent = guessRemaining;

    }