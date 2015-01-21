var plotly = require('plotly')('arunvsuresh', 'pgm2lku3fp');
var data = [
  {
    x: ["78.0", "254.0", "288.0", "315.0", "351.7", "361.0", "363.5", "372.5", "374.0", "387.0", "397.0", "409.5"], 
    y: ["Arizona", "Cincinnati", "Denver", "Dallas", "Indianapolis", "Green Bay", "Baltimore", "Seattle", "Carolina", "Pittsburgh", "Detroit", "New England"], 
    name: "Team", 
    xsrc: "arunvsuresh:24:901992", 
    ysrc: "arunvsuresh:24:99ad0e", 
    type: "scatter"
  }
];
var layout = {
  title: "Team Offensive Stats", 
  showlegend: false, 
  autosize: true, 
  width: 869, 
  height: 512, 
  xaxis: {
    title: "Yards per game", 
    range: [57.3929590866, 430.107040913], 
    type: "linear", 
    autorange: true
  }, 
  yaxis: {
    title: "Team", 
    range: [-0.768451767937, 11.7684517679], 
    type: "category", 
    autorange: true
  }
};
var graphOptions = {layout: layout};
plotly.plot(data, graphOptions, function (err, msg) {
    console.log(msg);
});