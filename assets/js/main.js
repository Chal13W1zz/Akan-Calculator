document.getElementById('generate').onclick = function generate(){
    var name = document.getElementById("name").value;
    var yob = document.getElementById("year").options[document.getElementById("year").selectedIndex].text;
    var mob = Number(document.getElementById("month").options[document.getElementById("month").selectedIndex].value);
    var dob = Number(document.getElementById("date").value);
    var gender = document.querySelector('input[name="gender"]:checked').value;

    var M = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var F = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];

    const dow = {
        1:"Sunday",
        2:"Monday",
        3:"Tuesday",
        4:"Wednesday",
        5:"Thursday",
        6:"Friday",
        7:"Saturday"
    }

    var century = yob.split("",2).join("");

    var CC = Number(century);
    var YY = yob;
    var MM = mob;
    var DD = dob;
    
    var dayOfBirth =  Math.round(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7) ;
    alert(dayOfBirth);

    

    
}