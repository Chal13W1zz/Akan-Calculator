//function call on generate button click
document.getElementById('generate').onclick = function generate(){

    //store user input in variables
    var name = document.getElementById("name").value;
    var yob = document.getElementById("year").options[document.getElementById("year").selectedIndex].text;
    var mob = Number(document.getElementById("month").options[document.getElementById("month").selectedIndex].value);
    var dob = Number(document.getElementById("date").value);
    var gender = document.querySelector('input[name="gender"]:checked').value;

    //create name arrays and a days array
    var M = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var F = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
    const dow  = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //calculate the century using the year of birth
    var century = yob.split("",2).join("");

    //reassign the variables to the formula names
    var CC = Number(century);
    var YY = yob;
    var MM = mob;
    var DD = dob;

    //calculate the day of birth
    var dayOfBirth =  Math.floor(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7) ;
    alert(dayOfBirth);

    //give back an akan name based on the gender
    if (gender === "female"){
    alert("You were born on " + dow[dayOfBirth]+ " and your akan name is " + F[dayOfBirth] );
    } else if(gender === "male"){
        alert("You were born on " + dow[dayOfBirth]+ " and your akan name is " + M[dayOfBirth] );
    }
    
}