var one=1, two=2, three=3, four=4, six=6;

var multiplication, addition, total;

multiplication = (one/six) * (three/two);
addition = (four/three) + (one/two);

total = multiplication / addition;

function displayResult(){
    document.getElementById("operation").style.display = "block";
    document.getElementById("operation").innerHTML = "("+one+"/"+six+" * "+three+"/"+two+") / ("+four+"/"+three+" + "+one+"/"+two+") = "+total;
    
    document.getElementById("displayResult").style.display = "none";
    document.getElementById("hideResult").style.display = "block";
}

function hideResult(){
    document.getElementById("operation").style.display = "none";
    
    document.getElementById("displayResult").style.display = "block";
    document.getElementById("hideResult").style.display = "none";
}