document.getElementById('generate').onclick = function generate(){
    var name = document.getElementById("name").value;
    var yob = document.getElementById("year").options[document.getElementById("year").selectedIndex].text;
    var mob = document.getElementById("month").options[document.getElementById("month").selectedIndex].text;;
    var dob = document.getElementById("date").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;

    
}