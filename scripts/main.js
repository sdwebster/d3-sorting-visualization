d3.select("body").append("p").text("Visualizing Sorting Algorithms");

var dataset = [];

for (var i=0; i<10; i++){
  dataset.push(
    Math.random() * 100 
  );
}

var dataTuples = [];
for (var i=0; i<10; i++){
  dataTuples.push({
    pos: i,
    val: dataset[i]
  });
}

console.log(JSON.stringify(dataTuples));

var svgW = 800;
var svgH = 200;
var barPadding = 5;
var stroke = 3;
var border = 2;
var bordercolor = "black";

var svg = d3.select("body")
  .append("svg")
  .attr("width", svgW)
  .attr("height", svgH)
  .attr("stroke", "orange")
  .attr("stroke-width", 2)
  .attr("border", border);

// var borderPath = svg.append('div').append('rect')
//   .attr("x", 0)
//   .attr("y", 0)
//   .attr("width",svgW)
//   .attr("height",svgH)
//   .attr("stroke", bordercolor)
//   .attr("fill","none")
//   .attr("stroke-width", border);
// 
// var bars = svg.append("div");

function update(){
    console.log('updating');
    console.log(JSON.stringify(dataTuples));
  svg.selectAll("rect")
    .data(dataTuples)
    .enter()
    .append("rect")
    .attr("x", function(d, i){
    //  console.log('for pos ', d.pos, 'and index ', i, ', x is ', (d.pos * svgW / dataTuples.length));
      return ((d.pos * svgW + 1)  / dataTuples.length);
    })
    .attr("y", function(d){
       console.log("svgH: " + svgH);
       console.log("d: " + d.val);
       return svgH - d.val;
    })
    .attr("width", svgW / dataTuples.length - barPadding)
    .attr("height", function(d){
      return d.val * 2;
    });
}

update();

// function findIndexFromPos(data, position){

//}

d3.select("p")
  .on(
    "click", function(){
    //  var temp = dataTuples[0]["pos"];
    //  dataTuples[0]["pos"] =  dataTuples[0]["pos"];

      loI = 0;
      hiI = 1;
      var temp = dataTuples[loI]["pos"];
      dataTuples[loI]["pos"] = hiI;
      dataTuples[hiI]["pos"] = temp;
      svg.selectAll("rect")
        .data(dataTuples)
        .transition()
        .duration(1000) // 
        .attr("x", function(d, i){
        console.log('for pos ', d.pos, 'and index ', i, ', x is ', (d.pos * svgW / dataTuples.length));
          return ((d.pos * svgW + 1) / dataTuples.length);
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
    })
