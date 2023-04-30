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

    let a = 10; let b = 20; let c = 30;
    let x=1;
    
    let result = a*x**2+b*x+c;

    let abcData = "<p>Soit : a = "+a+" ; b = "+b+" ; c = "+c+"</p>";    
    let equation = a+"x<sup>2</sup> + "+b+"x + "+c;

    document.getElementById("result").innerHTML = 
    "<p>Equation : ax<sup>2</sup> + bx + c</p> <p>"+abcData+"</p> <p>Si x = "+x+"</p> <p class='finalResult'>Results : "+equation+" = "+result+"</p>";

}

function igisoroCinqPaire(){
    var result = "";

    for(i=0; i<=100; i++){

        var fois = 5*i;

            if(i%2 == 0){
                result += "<h3>5 * "+i+" = "+fois+"</h3>";
            }

        document.getElementById("result").innerHTML = result;
    }
}

function igisoroCinqImpaire(){
    var result = "";

    for(i=0; i<=100; i++){
        
        var fois = 5*i;

            if(i%2 != 0){
                result += "<h3>5 * "+i+" = "+fois+"</h3>";
            }

        document.getElementById("result").innerHTML = result;
    }
}