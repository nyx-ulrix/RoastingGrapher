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
      data: roastTemp
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      //recommended temperature for roasting coffee
      yAxes: [{ticks: {min: 0, max:300}}],
    }
  }
});