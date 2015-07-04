

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
  dataTuples.push({
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


function update(){
    console.log('updating');
    console.log(JSON.stringify(dataTuples));
  svg.selectAll("rect")
    .data(dataTuples)
    .enter()
    .append("rect")
    .attr("x", function(d){
      return (d.pos * svgW / dataTuples.length);
    })
    .attr("y", function(d){
      // console.log("svgH: " + svgH);
      // console.log("d: " + d.val);
       return svgH - d.val;
    })
    .attr("width", svgW / dataTuples.length - barPadding)
    .attr("height", function(d){
      return d.val;
    })
}    

update();
d3.select("p")
  .on(
    "click", function(){
      alert ("hahaha!");
    //  var temp = dataTuples[0]["pos"];
    //  dataTuples[0]["pos"] =  dataTuples[0]["pos"];
      dataTuples[0]["pos"] = 1;
      dataTuples[1]["pos"] = 0;
      console.log('first pos: ', dataTuples[0]["pos"]);    
      update();
    })


