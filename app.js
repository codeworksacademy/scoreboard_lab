let home = 0
let away = 0

function increaseHomeScoreByOne() {
  home++
  drawHomeScore()
}

function increaseHomeScoreByThree() {
  home += 3
  drawHomeScore()
}

function drawHomeScore() {
  const homeScoreElem = document.getElementById('homeScore')
  homeScoreElem.innerText = home.toString()
}