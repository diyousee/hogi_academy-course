function arithmeticResult(){
    document.getElementById("result").innerHTML = "";

    let one=1, two=2, three=3, four=4, six=6;
    let multiplication, addition, total;
    
    multiplication = (one/six) * (three/two);
    addition = (four/three) + (one/two);
    
    total = multiplication / addition;
    
    document.getElementById("result").innerHTML = "<p class='finalResult'>Results : ("+one+"/"+six+" * "+three+"/"+two+") / ("+four+"/"+three+" + "+one+"/"+two+") = "+total+"</p>";
    
}

function equationSecondDegre(){    
    document.getElementById("result").innerHTML = "";

    let a = 1; let b = 20; let c = 30;
    let delta = b**2-4*a*c;

    console.log(delta);
    
    let abcData = "<p>Si a = "+a+" ; b = "+b+" ; c = "+c+"</p>";    
    let equation = a+"x<sup>2</sup> + "+b+"x + "+c;

    if(delta>0){
        var s1 = (-b-Math.sqrt(delta))/2*a;
        var s2 = (-b+Math.sqrt(delta))/2*a;
        
        let result = "X<sub>1</sub> = "+s1+" , X<sub>2</sub> = "+s2;

        document.getElementById("result").innerHTML = 
        "<p>Equation : ax<sup>2</sup> + bx + c</p> <p>"+abcData+"</p> <p>Delta b<sup>2</sup> - 4ac = "+delta+"</p> <p class='finalResult'>Results : "+equation+" <h3>"+result+"</h3></p>";
    }else{
        document.getElementById("result").innerHTML = "<p>Equation : ax<sup>2</sup> + bx + c</p> <p>"+abcData+"</p> <p class='finalResult'>Pas de solution car Delta = b<sup>2</sup> - 4ac est negatif</p>"
    }


}

function igisoroCinqPaire(){
    var result = "";

    for(i=0; i<=100; i++){

        var fois = 5*i;

        if(i%2 == 0){
            result += "<h5>5 x "+i+" = "+fois+"</h5>";
        }
    }
    document.getElementById("result").innerHTML = result;
}

function igisoroCinqImpaire(){
    var result = "";

    for(i=0; i<=100; i++){

        var fois = 5*i;

        if(i%2 != 0){
            result += "<h5>5 x "+i+" = "+fois+"</h5>";
        }
    }
    document.getElementById("result").innerHTML = result;
}