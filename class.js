class Rocket{
    //name states first
    constructor(
        fuelType,
        weight,
        power
    ){ //substaniate states 
        this.fuelType = fuelType;
        this.weight=weight;
        this.power=power;

    }
    //methods
    launch(){
        console.log("launch sequence started");
        alert("launch sequence Started");
        return true;
    }

    landing(){
        console.log("landing sequence started");
        alert("landing sequence started");
        return true;
    }

    detatchThruster(thrusterID){
        console.log("detatchThruster sequence started");
        alert("thruster "+thrusterID + " has been detatched");
        return true;

    }
}

class Mission{
    constructor(
        objective,
        oxyLvl,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        spaceCraft,
        numOfAstronauts
    ){
        this.objective = objective;
        this.oxyLvl=oxyLvl;
        this.launchDateDay = launchDateDay
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.spaceCraft = spaceCraft;
        this.numOfAstronauts= numOfAstronauts;
    }
    displayMissionParameters(){
        alert("the spacecraft " + this.spaceCraft+ " will launch on the " + this.launchDateDay +" of " +
        this.launchDateMonth + " " + this.launchDateYear + " with an O2 level of " + this.oxyLvl+"%")
    }

    launch(){
        console.log("launch sequence started");
        alert("launch sequence Started");
        
    }
    
}

function launchFall(){
    console.log("launchFall() started");
    fallLaunch.launch();
}

function displayFall(){
    console.log("displayFall() started");
    fallLaunch.displayMissionParameters();
}

function launchSpring(){
    console.log("launchSpring() started");
    springLaunch.launch();
}
function displaySpring(){
    console.log("displaySpring() started");
    springLaunch.displayMissionParameters();

}
function playingWithArrays(){
    const myClasses= ['CSC102', 'RBT131', 'SPT323'];
    console.log(myClasses[1]);
    myClasses[1]="CSC230";
    console.log(myClasses[1]);
    for(i = 0; i< myClasses.length; i++){
        console.log(myClasses[i]);
    }
}

function playingWithStacks(){
    let myStack = []
    myStack.push('first item');
    myStack.push('second item');
    myStack.push('3rd item');
    console.log(myStack);
    myStack.pop();
    console.log(myStack);
}

function playingWithDiction(){
    var dict= {};
    var dict= {
        FirstName: "Chris",
        "one": 1,
        1: "some value"
    };
    console.log(dict["one"]);
    //set object values
    dict["one"] = "the number formerly known as one"
    console.log(dict["one"]);
}