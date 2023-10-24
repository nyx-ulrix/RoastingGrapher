 let currentRoastTemp =0;

 function raiseLoggerTemp(){
    currentRoastTemp++;
    var tempDisplay = document.getElementById("roastTemp");
    tempDisplay.value = (currentRoastTemp+ "&deg;");

 }

 function lowerLoggerTemp(){
    currentRoastTemp-=1;
    var tempDisplay = document.getElementById("roastTemp");
    tempDisplay.value = (currentRoastTemp);
 }