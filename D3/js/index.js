var data = [1,3,5,7,9,4,3,7]
var width = 500,
height =250,
margin = {left:50, top:30,right:20,legt:20},
g_width = width - margin.left - margin.right,
g_height = height - margin.top - margin.bottom;

//svg
var svg = d3.select("#container")
.append("svg")
.attr("width", width)
.attr("height", height)

var g = d3.select("svg")
.append("g")
.attr("transform", "translate("+ margin.left +","+margin.top +")")

var scale_x = d3.scaleLinear()
.domain([0, data.length-1])
.range([0, g_width])

var scale_y = d3.scaleLinear()
.domain([0,d3.max(data)])
.range([0, g_height])


var line_generator = d3.line()
.x(function(d,i){return scale_x(i);})
.y(function(d){return scale_y(d);})

d3.select("g")
.append('path')
.attr('d', line_generator(data))