//massive/ array-> [] olon utga zereg hadglna
//var toonuud = [5,6,456,654,4];
//console.log(toonuud);
//index -> elementiin bairshil. 0-ees ehelne
//console.log(toonuud[0]);
//var item = ["buu","bambai","","",""];
//console.log(toonuud[toonuud.length-1]);
//for loop 
/*for(var i=0; i<=toonuud.length-1; i++){
console.log(toonuud[i]);}*/
//var t = [5,4,3,2,1];
//console.log(t[0]);
//console.log(t[t.length-1]);
//console.log(t[0]*t[t.length-1]);
{var t2 = [2,3,4,5,6];
for(var i=0; i<=t2.length-1; i++){
    if([i]%2==0){
        console.log("tegsh"+t2[i]);
    }else{
        console.log("sondgoi"+t2[i]);
    }
}
var asd = [1,2,3,4,5,6,7,8,9,10];
    var niilber=0;
    var urjver=1;
    for(i=0; i<asd.length-1; i++){
    niilber = niilber+asd[i];
    urjver = urjver*asd[i];
    }
    console.log("niilber:"+niilber);
    console.log("urjver:"+urjver);}
var body = document.getElementsByTagName("body")[0];
var colors = ['green','yellow','red'];
var i=-1;
function Change(){
    i++;
    if(i>4){
        i=0
    }
    body.style.backgroundColor=colors[i];
}
function Prev(){
    i--;
    if(i<0){
        i=2;
    }
    body.style.backgroundColor=colors[i];
}
var s;
var autoBtn = document.querySelector('.Auto');
var stopBtn = document.querySelector('.Stop');
function Auto(){
    i++;
    if(i>2){
        i=0
    }
    body.style.backgroundColor=colors[i];
    s=setTimeout(Auto,1000);
    autoBtn.disabled=true;
    stopBtn.disabled=false;
}
function Stop(){
    clearTimeout(s);
    stopBtn.disabled=true;
    autoBtn.disabled=false;
}