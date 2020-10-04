window.onload ;

function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
  }


function tempCheck(){
    
    var t = document.getElementById("tempIn").value;
    var temp = parseFloat(t);

    if(temp >= 36.1 && temp <=  37.2){
        document.getElementById('temp').innerHTML = ("You are at normal tempreature");
    }else if(temp >= 38){
        document.getElementById('temp').innerHTML = ("You most likely have a fever due to either infetion or illness");
    }else {
        document.getElementById('temp').innerHTML = ("You are cold");
    }
}

//this is to count throught all the elements

function checkList(){

    var i, c = 0, len = document.forms[1].elements.length;

    
    if(document.forms[1].elements[len - 2].checked || document.forms[1].elements[len - 1].checked || document.forms[1].elements[len - 2].checked){
        document.getElementById("seekAttention").innerHTML = "SEEK MEDICAL ATTENTION AS SOON AS POSSIBLE";
        
     }
    for( i=0; i<document.forms[1].elements.length; i++){
        if(document.forms[1].elements[i].name == "symp1"){
            if(document.forms[1].elements[i].checked ){
                c += 1;
                
            }
        }
        
    }
    
    if(c == 3){
        document.getElementById("seekAttention").innerHTML = "A check up would be reccomened but not needed imdidtely";
    }else if (c > 3 && c <= 6){
        document.getElementById("seekAttention").innerHTML = "Medical attention would be benifical";
    } else if (c > 6){
        document.getElementById("seekAttention").innerHTML = "SEEK MEDICAL ATTENTION AS SOON AS POSSIBLE";
    } else if ( c <  3){
        document.getElementById("seekAttention").innerHTML = "Stay home and get some rest if the problem does not go away " + 
        "within a couple days go seek medical attention";
    }
    
}
