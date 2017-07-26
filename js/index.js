
var display;
var result="";
var calresults;
display=document.getElementById("dispaly");
function calculator(){
  result+=event.srcElement.innerText;
  // alert(result);
  dispaly.innerText=result;

}
function resultscalcaulte(){
  var display=document.getElementById("dispaly");
  calresults=eval(result);
  display.innerText=calresults;
}
function empty(){
  result="";
  dispaly.innerText=result;
}
function back(){
  if (result!="") {
    result=result.substring(0, result.length - 1);
    dispaly.innerText=result;
  }
}
