function timeToSecondConverter(minInput, secInput){
    let toatlTimeSec = ((minInput*60) + secInput)
    return toatlTimeSec
 }

 function manualDtrCalculator()
 {
   //get all of the necessary data from the 
   let totaleRoastTimeMin = parseInt(document.getElementById("total-time-min").value);
   let totalRoatTimeSec = parseInt(document.getElementById("total-time-sec").value);
   let firstCrackTimeMin = parseInt(document.getElementById("fc-min").value);
   let firstCrackTimeSec = parseInt(document.getElementById("fc-sec").value);

   //calculate the roastingtimes in minutes and seconds
   let totalRoastTime = (timeToSecondConverter(totaleRoastTimeMin, totalRoatTimeSec) );

   //calculate the firstcrack time in minutes and seconds
   let firstCrackTime = (timeToSecondConverter(firstCrackTimeMin, firstCrackTimeSec));
   
   //uses the dtrFormula function to calculate the development time ratio 
   let dtrValue = dtrFormula(totalRoastTime,firstCrackTime);

    //shows the value in a popup
    //alert(Math.round(dtrValue) + "%");
    var dtrDisplat = document.getElementById("desireddevelopmentpercentage");
    dtrDisplat.value = (Math.round(dtrValue) + "%");
    
    //return dtr value so that later functions will have a number to work with
    return dtrValue
   }

   function dtrFormula(roastTime,fcTime)
   {
    //calculate the development time
    let developmentTime = (roastTime- fcTime);
    //calculate the dtr
    let dtrPercentage = ((developmentTime /roastTime)*100);
    return dtrPercentage;
   }