function playCraps() { //Starts the "playCraps" function
    console.log("playCraps() function Started");//writes "playCraps() function Started" in the console log
    var die1 = Math.ceil(Math.random()* 6); //creates variable Die1 with a random number from 0(inclusive) to 6 (exclusive)
                                            //math.ceil rounds decimals to the nearest whole number

    var die2 = Math.ceil(Math.random() * 6); //creates variable die2 with a random number from 0(inclusive) to 6 (exclusive) V
                                            //math.ceil rounds decimals to the nearest whole number


    var sum = die1 + die2; //adds die1 and die2 together
    document.getElementById("die1res").innerHTML= "Die 1 = " + die1; //displays the results of Die 1 on the webpage at the part assigned the ID of "die1res"
    document.getElementById("die2res").innerHTML="Die 2 = " + die2; //displays the results of Die 2 on the webpage at the part assigned the ID of "die2res"
    document.getElementById('sumres').innerHTML="Sum = " + sum; //displays the sum of die 1 and die 2 on the webpage at the part assigned the ID of "sumres"

    if (sum == 7 || sum == 11) { //checks if the value of the sum variable is either 7 or 11
       
        document.getElementById("finalres").innerHTML="CRAPS - you lose!";//displays "CRAPS-you lose!" on the webpage at the part assigned the ID of "finalres"
        loss = loss + 1; // increases the number of losses by 1
        document.getElementById("lossres").innerHTML= loss; // displays the cnumber of losses on the webpage at the part assigned the ID of "lossres"
    }
    else if (die1 == die2 && die1 % 2 == 0) { //if the previous if statement is false, the code checks if the values for both die variables are the same AND if die1 is an even number
        ;debugger
        document.getElementById("finalres").innerHTML="DOUBLES - you win"; //displays "DOUBLES-you win" on the webpage at the part assigned the ID of "finalres"
        wins++;//increases the number of wins by 1
        document.getElementById("winres").innerHTML= wins;//displays the current number of wins on the webpage at the part assigned the ID of "winres"
        
    } else { //if both of the previous if statements are false, this code runs
        ;debugger
        document.getElementById("finalres").innerHTML="Draw-No one wins. Please try again"; //displays "Draw-No one wins. Please try again" on the webpage the part assigned the id of "finalres"
        ties++;//increases the number of ties 
        document.getElementById("tieres").innerHTML= ties;//displays the number of ties on the webpage at the part assigned the ID of "tieres"
    }

}

function blastOff(){
    var img = document.createElement("img");
    img.src = "Sequence-_1.gif";
    var currtime = 50;
    var sec = 0;
    
        sec = sec + 5000

        document.getElementById("countdownTimer").innerHTML = currtime;
        setTimeout(function () {
            currtime = currtime - 5;
            document.getElementById("countdownTimer").innerHTML = currtime;
        }, sec);

        sec = sec + 5000

        document.getElementById("countdownTimer").innerHTML = currtime;
        setTimeout(function () {
            currtime = currtime - 5;
            document.getElementById("countdownTimer").innerHTML = currtime;
        }, sec);

        sec = sec + 5000

        document.getElementById("countdownTimer").innerHTML = currtime;
        setTimeout(function () {
            currtime = currtime - 5;
            document.getElementById("countdownTimer").innerHTML = currtime;
        }, sec);

        sec = sec + 5000

        document.getElementById("countdownTimer").innerHTML = currtime;
        setTimeout(function () {
            currtime = currtime - 5;
            document.getElementById("countdownTimer").innerHTML = currtime;
        }, sec);

        sec = sec + 5000

        document.getElementById("countdownTimer").innerHTML = currtime;
        setTimeout(function () {
            currtime = currtime - 5;
            document.getElementById("countdownTimer").innerHTML = currtime;
        }, sec);

        sec = sec + 5000

        document.getElementById("countdownTimer").innerHTML = currtime;
        setTimeout(function () {
            currtime = currtime - 5;
            document.getElementById("countdownTimer").innerHTML = currtime;
        }, sec);

        sec = sec + 5000

        document.getElementById("countdownTimer").innerHTML = currtime;
        setTimeout(function () {
            currtime = currtime - 5;
            document.getElementById("countdownTimer").innerHTML = currtime;
        }, sec);

        sec = sec + 5000

        document.getElementById("countdownTimer").innerHTML = currtime;
        setTimeout(function () {
            currtime = currtime - 5;
            document.getElementById("countdownTimer").innerHTML = currtime;
        }, sec);

        sec = sec + 5000

        document.getElementById("countdownTimer").innerHTML = currtime;
        setTimeout(function () {
            currtime = currtime - 5;
            document.getElementById("countdownTimer").innerHTML = currtime;
        }, sec);

        sec = sec + 5000

        document.getElementById("countdownTimer").innerHTML = currtime;
        setTimeout(function () {
            currtime = currtime - 5;
            document.getElementById("countdownTimer").innerHTML = currtime;
            setTimeout(function()
                {alert ("Blastoff!");}, 1); //this time out function is used to make sure the timer VISUALLY displays zero when the blast off alert pops up. normally, it pops up just before 5 switches to 0
            document.body.appendChild(img);
            
            
        }, sec);

        


    
}

function btrBlastOff(){
    console.log("btrBlastOff() started");
    var img = document.createElement("img");
    img.src = "Sequence-_1.gif";
    var currtime = 50;
    for(var i = 0; i < 11; i++){25
        setTimeout(function(){
          if(currtime>=25){
              //if conditions are met
              document.getElementById("countdownTimer").innerHTML=currtime;  
          } else if(currtime==0){
            document.getElementById("countdownTimer").innerHTML="Blastoff!";
            document.body.appendChild(img); 
          }
          //if else if conditions are true
          else{
              debugger;
              //if conditions are not met
              document.getElementById("countdownTimer").innerHTML="Warning less than 1/2 to launch, time left = "+currtime;  
          }
         
          currtime=currtime-5
        },i*5000);
        
    }
   
}

function start(){
    console.log("start() function started");
    document.getElementById("data").rows["seconds"].innerHTML="Reading Data...";
    intex=0;
    timer=setInterval(updateDisplay,time_interval);
    document.getElementById("startButton").disabled=true;
    document.getElementById("stopButton").disabled=false;
}
function stop(){
    console.log("stop() function started");
    clearInterval(timer);
    document.getElementById("startButton").disabled=false;
    document.getElementById("stopButton").disabled=true;
}

function getData(){
    var loadedData=loadData();
    return loadedData;
}

function dataRow(legend,value, units){
    msg = "<td>";
    msg+=legend;
    msg+=": </td><td>";
    msg+=value;
    msg+= " " + units;
    msg+= "</td>";
    return msg;
}

function playStation(){
    console.log("playStation() started");
    mySound=new sound ("background.mp3");
    mySound.play();
}

function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src =srcFile;
    this.sound.setAttribute("preload", "audio"); 
    this.sound.setAttribute("controls","none");
    this.sound.style.display="none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop=function(){
        this.sound.pause();
    }
}

class InputData {
constructor(
    time_seconds,
    latitude,
    longitude,
    gps_altitude,
    bmpSensor_altitude,
    bmpSensor_pressure,
    bmpSensor_temp,
    digSensor_temp,
    cssSensor_temp,
    cssSensor_eCO2,
    cssSensor_TVOC,
    UV,
    accelx,
    accelY,
    accelZ,
    magneticX,
    magneticY,
    magneticZ,
    gyroX,
    gyroY,
    gyroZ,

){
    this.time_seconds=time_seconds;
    this.latitude=latitude;
    this.longitude=longitude;
    this.gps_altitude=gps_altitude;
    this.bmpSensor_altitude=bmpSensor_altitude;
    this.bmpSensor_pressure=bmpSensor_pressure;
    this.bmpSensor_temp=bmpSensor_temp;
    this.digSensor_temp=digSensor_temp;
    this.cssSensor_temp=cssSensor_temp;
    this.cssSensor_eCO2=cssSensor_eCO2;
    this.cssSensor_TVOC=cssSensor_TVOC;
    this.UV=UV;
    this.accelx=accelx;
    this.accelY=accelY;
    this.accelZ=accelZ;
    this.magneticX=magneticX;
    this.magneticY=magneticY;
    this.magneticZ=magneticZ;
    this.gyroX=gyroX;
    this.gyroY=gyroY;
    this.gyroZ=gyroZ;
}
}

function goUATSpace(){
    console.log("goUATSpace(); started");
    location.replace("login.html");
}

function goBoards(){
    console.log ("goBoards() started");
    location.replace("boards.html");
}

function goIndex(){
    console.log ("goIndex()");
    location.replace("index.html");

}