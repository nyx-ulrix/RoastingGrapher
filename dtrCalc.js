function popup(inputId){
    textOutput = document.getElementById(inputId);
    inputValue = textoutput.value
    alert(inputValue);
    console.log(typeof inputId)
 }

 function htmltextchange(targetTextId){

 }


 function dtrCalculator()
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

   //calculate the development time
   let developmentTime = (totalRoastTime- firstCrackTime);
   
   //calculate the dtr
   let dtrValue = ((developmentTime /totalRoastTime)*100);

    //return dtrvalue datatype
   //  console.log(totalRoastTime);
   //  console.log(firstCrackTime);
   //  console.log(developmentTime);
   //  console.log(dtrValue);
   //  console.log(firstCrackTime);
   //  console.log(dtrValue);

    //shows the value in a popup
    alert(Math.round(dtrValue) + "%");
    
    //return dtr value so that later functions will have a number to work with
    return dtrValue
   }

function timeToSecondConverter(minInput, secInput){
   let toatlTimeSec = ((minInput*60) + secInput)
   return toatlTimeSec
}