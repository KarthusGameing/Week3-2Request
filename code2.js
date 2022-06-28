//Starts script when play is pressed

function play() {
    //sets variables
    var die1 = 5
    var die2 = 2
    //displays text
    document.write("Cantina Casino's Craps")
       //makes a new line
    document.write("<br/>")
     //displays text
    document.write("Welcome to Mos Eisley's Cantina, located on the wonderful world of Tatooine! Let's take a roll of some dice, shall we? ")
    //makes a new line
    document.write("<br/>")
    //makes a new variable by addied previous variables together
    var sum = die1+die2
    //displays text, then displays variable
    document.write("Die 1 = " + die1)
        //makes a new line
    document.write("<br/>")
      //displays text, then displays variable
    document.write("Die 2 = " + die2)
        //makes a new line
    document.write("<br/>")
      //displays text, then displays variable
    document.write("Sum = " + sum)
        //makes a new line
    document.write("<br/>")
    //runs script if variable is a specific number
    if (sum == 7 || sum == 11)
    //displays text
    { document.write("CRAPS - you lose")
    //makes a new line
    document.write("<br/>")
    }
    //runs script if variable is specific number
    else if (die1== die2 && die1%2 == 0)
    {
        //displays text
    document.write("DOUBLES - you win")
    //makes new line
    document.write("<br/>")
    }
}