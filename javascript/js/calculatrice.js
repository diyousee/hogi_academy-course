var myInput = document.getElementById("myInput");

function afficheBtn(x){
    myInput.value += x;
}

function calculate(){
    myInput.value = eval(myInput.value);
}

function cleanContent(){
    myInput.value = "";
}