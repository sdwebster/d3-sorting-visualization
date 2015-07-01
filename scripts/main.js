
var svg = d3.select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 120);

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
