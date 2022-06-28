//sets variable
var timer = 11;

//defines function
function start() {
	//lowers timer count
    timer--;
	//tells script to run at specific numbers
    if (timer > 4){
		//shows variable in console
    console.log(timer);
	//sets variable
    document.getElementById("countdownStatus").innerHTML = timer;
	//repeats code
    setTimeout(start, 1000); 
}
//tells script to run under specific condition
else if (timer < 5 && timer > 0)
{ 
		   document.getElementById("countdownStatus").innerHTML = "Warning Less than ½ way to launch, time left = " + timer;
		   console.log(timer);
		   setTimeout(start, 1000); /* replicate wait 1 second */
}
//tells script to run under specific condition
else if (timer <= 0){ 
		   document.getElementById("countdownStatus").innerHTML = "Blastoff!";
}
}
