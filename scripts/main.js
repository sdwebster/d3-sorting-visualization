

d3.select("body").append("p").text("Data visualization");
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

var dataTuples = [];

for (var i=0; i<10; i++){
  dataset.push({
    pos: i,
    val: Math.random() * 100 
  });
}

var svgW = 800;
var svgH = 200;
var barPadding = 5;
var stroke = 3;

var svg = d3.select("body")
  .append("svg")
  .attr("width", svgW)
  .attr("height", svgH)
  .attr("stroke", "orange")
  .attr("stroke-width", 2);

svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", function(d, i){
    return (i * svgW / dataset.length);
  })
  .attr("y", function(d){
    console.log("svgH: " + svgH);
    console.log("d: " + d.val);
    return svgH - d.val;
  })
  .attr("width", svgW / dataset.length - barPadding)
  .attr("height", function(d){
    return d.val;
    })
