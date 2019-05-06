var canvas = document.querySelector('canvas');
canvas.width=1000;
canvas.height=500;

var xGrid=10;
var yGrid=10;
var cellSize=10;

var ctx = canvas.getContext('2d');
var data={
  Australia:1000,
  India:2700,
  Usa:500,
  Brazil:2100,
  China:3000
}

const entries=Object.entries(data);
function drawGrids()
{
  ctx.beginPath();
  while(xGrid<canvas.height)
  {
    ctx.moveTo(0,xGrid);
    ctx.lineTo(canvas.width,xGrid);
    xGrid+=10;
  }
  while(yGrid<canvas.width)
  {
    ctx.moveTo(yGrid,0);
    ctx.lineTo(yGrid,canvas.height);
    yGrid+=cellSize;
  }
  ctx.strokeStyle="blue";
  ctx.stroke();
}
function blocks(count)
{
  return count*10;
}
function drawAxis()
{  var yPlot=40;
    var pop=0;
   ctx.beginPath();
   ctx.strokeStyle="black";
   ctx.moveTo(blocks(5),blocks(5));
   ctx.lineTo(blocks(5),blocks(40));
   ctx.lineTo(blocks(80),blocks(40));
   ctx.moveTo(blocks(5),blocks(40));
   for (var i=1;i<=10;i++)
   {   ctx.strokeText(pop,blocks(2),blocks(yPlot));
       yPlot-=5;
       pop+=500;
   }
   ctx.stroke();
}
function drawCharts()
{
  ctx.beginPath();
  ctx.strokeStyle="black";
  ctx.moveTo(blocks(5),blocks(40));
  var xPlot=10;
  for(const [country,population] of entries )
  {
    var populationInBlocks=population/100;
    ctx.lineTo(blocks(xPlot),blocks(40-populationInBlocks));
    ctx.strokeStyle="black";
    ctx.strokeText(country,blocks(xPlot),blocks(40-populationInBlocks-1))
    ctx.strokeStyle="red";
    ctx.arc(blocks(xPlot),blocks(40-populationInBlocks),4,0,Math.PI*2,true);
    xPlot+=5;
  }
  ctx.stroke();
}
drawGrids();
drawAxis();
drawCharts();
