import{
  roastTemp,
  roastTime,
}from './roastingInfo.js'

new Chart("roastChart", {
  type: "line",
  data: {
    labels: roastTime,
    datasets: [{
      fill: true,
     //lineTension: 0,
      //backgroundColor: "rgba(0,0,255,1)",
      //borderColor: "rgba(0,0,0,0)",
      data: roastTemp
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:300}}],
    }
  }
});