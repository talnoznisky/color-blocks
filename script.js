
var colors = ["#E6A076", "#CC7F5A", "#406E85", "#0F4661", "#F9C850"]
var divs = document.getElementsByClassName("square")
const container = document.getElementById("container")


function getRandomColor(){
return colors[Math.floor(Math.random() * Math.floor(5))]
}

function getRandomSquare(){
  return divs[Math.floor(Math.random() * Math.floor(divs.length))]
}

function randomColorReassignment(){
  getRandomSquare().style.background = getRandomColor();
}

function onLoadColorSet(){
  for(var i = 0; i < divs.length; i++){
    divs[i].style.background = getRandomColor();
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
