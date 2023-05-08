function arithmeticResult(){
    document.getElementById('exercice1').style.display = "none";
    document.getElementById('tableau').innerHTML = "";
    document.getElementById('result').innerHTML = "";

    let one=1, two=2, three=3, four=4, six=6;
    let multiplication, addition, total;
    
    multiplication = (one/six) * (three/two);
    addition = (four/three) + (one/two);
    
    total = multiplication / addition;

    let result = "<p class='finalResult'>Results : ("+one+"/"+six+" * "+three+"/"+two+") / ("+four+"/"+three+" + "+one+"/"+two+") = "+total+"</p>";
    
    document.getElementById("result").innerHTML = result;
    
}

function equationSecondDegre(a,b,c){
    document.getElementById('exercice1').style.display = "none";
    document.getElementById('tableau').innerHTML = "";
    document.getElementById('result').innerHTML = "";

    let result = "";

    let delta = (b**2)-(4*a*c);
    
    let abcData = "<p>Si a = "+a+" ; b = "+b+" ; c = "+c+"</p>";    
    let equation = a+"x<sup>2</sup> + "+b+"x + "+c;

    if(delta>0){
        var s1 = (-b - Math.sqrt(delta))/(2*a);
        var s2 = (-b + Math.sqrt(delta))/(2*a);
        
        result += "X<sub>1</sub> = "+s1+" , X<sub>2</sub> = "+s2;

        result += 
        "<p>Equation : ax<sup>2</sup> + bx + c</p> <p>"+abcData+"</p> <p>Delta b<sup>2</sup> - 4ac = "+delta+"</p> <p class='finalResult'>Equation : "+equation+" <h3>Results : "+result+"</h3></p>";
   
    }else if(delta == 0){
        var s = -b/(2*a);
        result += "X<sub>1</sub> = "+s;

        result += 
        "<p>Equation : ax<sup>2</sup> + bx + c</p> <p>"+abcData+"</p> <p>Delta b<sup>2</sup> - 4ac = "+delta+"</p> <p class='finalResult'>Equation : "+equation+" <h3>Results : "+result+"</h3></p>";
    
    }else{
        result += "<p>Equation : ax<sup>2</sup> + bx + c</p> <p>"+abcData+"</p> <p class='finalResult'>Pas de solution car Delta = b<sup>2</sup> - 4ac = "+delta+" est negatif</p>"
    }
    document.getElementById("result").innerHTML = result;
}

function igisoroCinqPaire(x){
    document.getElementById('exercice1').style.display = "none";
    document.getElementById('tableau').innerHTML = "";
    document.getElementById('result').innerHTML = "";

    let result = "";

    for(i=0; i<=100; i+=2){

        var fois = x*i;

        result += "<h5>"+x+" x "+i+" = "+fois+"</h5>";    
    }
    return(document.getElementById("result").innerHTML = result);
}

function igisoroCinqImpaire(x){
    document.getElementById('exercice1').style.display = "none";
    document.getElementById('tableau').innerHTML = "";
    document.getElementById('result').innerHTML = "";

    let result = "";

    for(i=0; i<=100; i++){

        var fois = x*i;

        if(i%2 != 0){
            result += "<h5>"+x+" x "+i+" = "+fois+"</h5>";
        }
    }
    return(document.getElementById("result").innerHTML = result);
}

function tableau(){
    document.getElementById('tableau').innerHTML = "";
    document.getElementById('result').innerHTML = "";

    var tableau = [35,187,-50,11,-22,-253,4,405,6,7,8,9,100];

    let afficheTableau = "<table id='tab'><tr>";
    for(i=0; i<tableau.length; i++){
        afficheTableau += "<td>"+tableau[i]+"</td>";
    }
    afficheTableau += "<tr></table>"

    document.getElementById('exercice1').style.display = "block";
    document.getElementById('tableau').style.display = "block";
    document.getElementById('tableau').innerHTML = afficheTableau;
}

function croissantDecroissant(){
    document.getElementById('tableau').innerHTML = "";
    document.getElementById('result').innerHTML = "";

    var tableau = [35,187,-50,11,-22,-253,4,405,6,7,8,9,100];
    let temp;

    let afficheTableau = "<table id='tab'><tr>";
    
    for(i=0; i<tableau.length; i++){
        afficheTableau += "<td>"+tableau[i]+"</td>";
    }
    afficheTableau += "<tr></table>";
    document.getElementById('tableau').style.display = "block";
    document.getElementById('tableau').innerHTML = afficheTableau;


    if(document.getElementById('croissant').style.display != "none"){

        for(i=0; i<tableau.length; i++){
            for(j=i+1; j<tableau.length; j++){
                if(tableau[i] > tableau[j]){
                    temp = tableau[i]; 
                    tableau[i] = tableau[j];
                    tableau[j] = temp;
                }
            }
        }

        document.getElementById('decroissant').style.display = "inline-block";
        document.getElementById('croissant').style.display = "none";
        var caption = "<caption>Croissant</caption>";


    }else if(document.getElementById('decroissant').style.display != "none"){

        for(i=0; i<tableau.length; i++){
            for(j=i+1; j<tableau.length; j++){
                if(tableau[i] < tableau[j]){
                    temp = tableau[i]; 
                    tableau[i] = tableau[j];
                    tableau[j] = temp;
                }
            }
        }

        document.getElementById('croissant').style.display = "inline-block";
        document.getElementById('decroissant').style.display = "none";
        var caption = "<caption>Décroissant</caption>";
    }
    
    afficheTableau = "";
    afficheTableau = "<table id='tab'>"+caption+"<tr>";

    for(i=0; i<tableau.length; i++){
        afficheTableau += "<td>"+tableau[i]+"</td>";
    }
    afficheTableau += "<tr></table>"

    document.getElementById('result').innerHTML = afficheTableau;
}

function maxMin(){
    document.getElementById('tableau').innerHTML = "";
    document.getElementById('result').innerHTML = "";

    var tableau = [35,187,-50,11,-22,-253,4,405,6,7,8,9,100];
    var max, min;

    let afficheMaxMin = "<table id='tab'><tr>";

    for(i=0; i<tableau.length; i++){
        afficheMaxMin += "<td>"+tableau[i]+"</td>";
    }
    afficheMaxMin += "<tr></table>";
    document.getElementById('tableau').style.display = "block";
    document.getElementById('tableau').innerHTML = afficheMaxMin;


    afficheMaxMin = "";
    afficheMaxMin = "<table id='tab'><tr>";

    max = tableau[0];
    min = tableau[0];

    for(i=0; i<tableau.length; i++){
        if(tableau[i] > max){
            max = tableau[i];
        }else if(tableau[i] < min){
            min = tableau[i];
        }
    }

    afficheMaxMin += "<td> Maximum = "+max+"</td>";
    afficheMaxMin += "<td> Minimum = "+min+"</td>";
    afficheMaxMin += "<tr></table>";

    document.getElementById('result').innerHTML = afficheMaxMin;    
}

function paire() {
    document.getElementById('tableau').innerHTML = "";
    document.getElementById('result').innerHTML = "";
     
    var tableau = [35,187,-50,11,-22,-253,4,405,6,7,8,9,100];

    let afficheTableau = "<table id='tab'><tr>";

    for(i=0; i<tableau.length; i++){
        afficheTableau += "<td>"+tableau[i]+"</td>";
    }
    afficheTableau += "<tr></table>";
    document.getElementById('tableau').style.display = "block";
    document.getElementById('tableau').innerHTML = afficheTableau;


    afficheTableau = "";
    afficheTableau = "<table id='tab'><caption>Paire</caption><tr>";

    for(i=0; i<tableau.length; i++){
        
        if(tableau[i]%2 == 0){
            afficheTableau += "<td>"+tableau[i]+"</td>";
        }
    }
    afficheTableau += "<tr></table>";

    document.getElementById('result').innerHTML = afficheTableau;
}

function impaire() {
    document.getElementById('tableau').innerHTML = "";
    document.getElementById('result').innerHTML = "";
     
    var tableau = [35,187,-50,11,-22,-253,4,405,6,7,8,9,100];

    let afficheTableau = "<table id='tab'><tr>";
    
    for(i=0; i<tableau.length; i++){
        afficheTableau += "<td>"+tableau[i]+"</td>";
    }
    afficheTableau += "<tr></table>";
    document.getElementById('tableau').style.display = "block";
    document.getElementById('tableau').innerHTML = afficheTableau;

    
    afficheTableau = "";
    afficheTableau = "<table id='tab'><caption>Impaire</caption><tr>";

    for(i=0; i<tableau.length; i++){

        if(tableau[i]%2 != 0){
            afficheTableau += "<td>"+tableau[i]+"</td>";
        }
    }
    afficheTableau += "<tr></table>";

    document.getElementById('result').innerHTML = afficheTableau;
}

function cni() {
    document.getElementById('tableau').innerHTML = "";
    document.getElementById('result').innerHTML = "";

    var cni = {
        nom: "Hogi",
        prenom: "Academy",
        age: "45",
        pere: "Mutama Javascript",
        mere: "Mutamakazi html",
        full_name: function() { return "Nom : "+this.nom+" "+this.prenom},
        nom_age: function() { return "Nom : "+this.nom+" , Age : "+this.age},
        pere_mere: function() { return "Père : "+this.pere+" , Mère : "+this.mere}
    }
    
    let afficheCni = "<table id='tab'><tr>";

    afficheCni += "<tr><td>"+cni.nom_age()+"</td>";
    afficheCni += "<td>"+cni.pere_mere()+"</td>";
    afficheCni += "<tr></table>";
    
    document.getElementById('tableau').innerHTML = "<table id='tab'><tr><tr><td colspan='2'>"+cni.full_name()+"</td></tr><tr></table>";
    document.getElementById('result').innerHTML = afficheCni;

}