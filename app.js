
function amour(){

let name1= document.getElementById("Name1").value;
let name2= document.getElementById("Name2").value;

if(name1.length<=2){
    alert("entrez un prenom avec plus de 3 caractere");
}

if(name2.length<=2){
    alert("entrez un prenom avec plus de 3 caractere");
}

else{
    let random =Math.floor(Math.random()*100);
    document.getElementById("result").innerHTML= name1 + "et" + name2 + "=" + random + "%" + " de love";

    if(random<=5 || random<=20){
        document.getElementById("charge").innerHTML="pas très ouff la relation";
    }
    
    else if(random<=20 || random<=60){
        document.getElementById("charge").innerHTML="bonne relation";
    }
    
    else if(random<=60 || random<=100){
        document.getElementById("charge").innerHTML="l amour est pour vous";
    }
}

}