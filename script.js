
var colors = [
["#E6A076", "#CC7F5A", "#406E85", "#0F4661", "#F9C850"],
["#5F87A5", "#F7D8D9", "#F0BAC3", "#EAA1AC"],
["#76CBBC", "#C2EAD2", "#FCFFD6", "#FFD5E6", "#F4AFCC"],
["#529106", "#61A307", "#86B71B", "#B9BD00", "#8EA202", "#799203"],
["#D2394F","#EE606B","#FFD8CF","#62BFAE","#22A899"],
["#3E3C63","#6AB7DF","#E2EEEE","#F77455","#F7E146","#FBF4A0"],
["#A42E6B","#D19FBD","#4A1553","#32003D"]
]


var divs = document.getElementsByClassName("square")
const container = document.getElementById("container")
function getRandomColor(i){
return colors[i][Math.floor(Math.random() * Math.floor(colors[i].length))]
}
function getRandomSquare(){
  return divs[Math.floor(Math.random() * Math.floor(divs.length))]
}
function randomColorReassignment(){
  getRandomSquare().style.background = getRandomColor(i);
}
function onLoadColorSet(){
  for(var j = 0; j < divs.length; j++){
    divs[j].style.background = getRandomColor(i);
  }
}
function writeSquares(){
  for(var i = 0; i < 50; i++){
    const row = document.createElement('div');
    row.setAttribute('class', 'row container-fluid');;
    container.appendChild(row);
    for(var j = 0; j < 6; j++){
      const square = document.createElement('div');
      square.setAttribute('class', 'square col')
      row.appendChild(square);
    }
  }
}
function generateIndex(){
  for(var j = 0; j < colors.length; j++){
    const link = document.createElement('a')
    const row = document.createElement('div');
    link.setAttribute('href',`./docs/${j}.html`)
    row.setAttribute('class', 'row container-fluid swatch-row');
    container.appendChild(link);
    link.appendChild(row)
    for(var i = 0; i < colors[j].length; i++){
      const swatch = document.createElement('div');
      swatch.setAttribute('class','swatch col');
      swatch.style.backgroundColor = colors[j][i];
      row.appendChild(swatch)
    }
  }
}
