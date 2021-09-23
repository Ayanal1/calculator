var x=0;

function fn1() {
    x=1
    var a = document.getElementById("name").value;
    a = parseInt(a)
    var b = document.getElementById("age").value;
    b = parseInt(b)
    c = (a + b)
    document.getElementById("Result").innerText = c;
    
}
function fn2() {
    x=2
    var a = document.getElementById("name").value;
    a = parseInt(a)
    var b = document.getElementById("age").value;
    b = parseInt(b)
    c = (a - b)
    document.getElementById("Result").innerText = c;
    
}
function fn3() {
    x=3
    var a = document.getElementById("name").value;
    a = parseInt(a)
    var b = document.getElementById("age").value;
    b = parseInt(b)
    c = (a * b)
    document.getElementById("Result").innerText = c;
    document.getElementById("Result").innerText = c;
    
}
function fn4() {
    x=4
    var a = document.getElementById("name").value;
    a = parseInt(a)
    var b = document.getElementById("age").value;
    b = parseInt(b)
    c = (a / b)
    document.getElementById("Result").innerText = c;
    
}
function fn5() {
    x=5
    var a = document.getElementById("name").value;
    a = parseInt(a)
    var b = document.getElementById("age").value;
    b = parseInt(b)
    document.getElementById("Result").innerText=a%b;
    c = (a % b)
    
    
}
var i = 0;
function history() {
    
    i++
    var a = document.getElementById("name").value;
    var b = document.getElementById("age").value;
    result= document.getElementById("Result").innerText
    
    
   
    l1 = document.getElementById("lap")
    l2 = document.createElement("h6")
    hr = document.createElement("hr")
   if(x==1){

       l3 = document.createTextNode(i + "#  : Result of "+a+" + "+b + " is " + c )
    }
  else if(x==2){
        l3 = document.createTextNode(i + "#  : Result of "+a+" - "+b + " is " + c )
        
   }
  else if(x==3){
        l3 = document.createTextNode(i + "#  : Result of "+a+" * "+b + " is " + c )
        
   }
  else if(x==4){
        l3 = document.createTextNode(i + "#  : Result of "+a+" / "+b + " is " + c )
        
   }
  else{
        l3 = document.createTextNode(i + "#  : Result of "+a+" % "+b + " is " + c )
        
   }
    l2.appendChild(l3);
    l1.appendChild(l2);
    l2.appendChild(hr);

}

function reset(){
    i=0;
    l1=  document.getElementById("lap").innerHTML= null
}

