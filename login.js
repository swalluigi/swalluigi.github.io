function checkCreds(){
    console.log("checkCreds started");
    var firstName=document.getElementById("fName").value;
    var lastname=document.getElementById("lName").value;
    var badgeNumber=document.getElementById("badgeID").value;
    var fullName= firstName + " " + lastname;
    
    console.log("Full Name is "+fullName);

    if(fullName.length > 20 || fullName.length<2){
        document.getElementById("loginStatus").innerHTML="invalid full name! Please submit a valid full name.";

    }else if(badgeNumber > 999 || badgeNumber <0) {
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number! Please submit a valid Badge Number";
    }
    
    else{
        alert("welcome, " + fullName);
        location.replace("UATSpacePage.html");
    }
    
}
