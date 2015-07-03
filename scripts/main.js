

d3.select("body").append("p").text("Woah");
var dataset = [];
for (var i=0; i<10; i++){
  dataset.push(Math.random() * 100)
}

d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append('div')
  .attr('class', 'bar')
  .style('height', function(d){
    return d + 'px';
  })
  .style('opacity', function(d){
      return d / 100;
  });

var svgW = 200;
var svgH = 800;
var barPadding = 2;

var svg = d3.select("body")
  .append("svg")
  .attr("width", svgW)
  .attr("height", svgH);

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", function(d, i){
    return (i * svgW / dataset.length);
  })
  .attr("y", function(d){
    return 0;
  })
  .attr("width", svgW / dataset.length - barPadding)
  .attr("height", function(d){
    return d;
    });