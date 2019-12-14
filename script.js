const divs = document.getElementsByClassName("square")
let loaded = false;
let a

function getRandomSquare(){
  return divs[Math.floor(Math.random() * Math.floor(divs.length))]
}

function getRandomColor(colors){
  return colors[Math.floor(Math.random() * Math.floor(colors.length))]
}

function writeSquares(){
  for(var i = 0; i < 50; i++){
    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    container.appendChild(row);
    for(var j = 0; j < 12; j++){
      const square = document.createElement('div');
      square.setAttribute('class', 'square col')
      square.onclick = colorSet
      row.appendChild(square);
    }
  }
}

function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) +')';
}


colorSet = () => {
  let url = ''
  let colors = null
  !loaded ? url = 'https://www.thecolorapi.com/scheme?rgb=RGB:'+random_rgb()
  : url = 'https://www.thecolorapi.com/scheme?mode=analogic-complement&rgb='+event.target.style.background
  clearInterval(a)
  fetch(url)
    .then((res) => res.json())
    .then(function(data){
      colors = data.colors.map(color => color.hex.value);
      loaded = true
      console.log(colors)
      for(let div of divs){div.style.background = getRandomColor(colors)}
      a = setInterval(() => {randomColorReassignment(getRandomColor(colors)), 300})
    }
  )
}

function randomColorReassignment(color){
  getRandomSquare().style.background = color;
}

writeSquares()
colorSet()
