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
function increaseAwayScoreByOne() {
  away++
  drawAwayScore()
}

function increaseAwayScoreByThree() {
  away += 3
  drawAwayScore()
}

function drawAwayScore() {
  const awayScoreElem = document.getElementById('awayScore')
  awayScoreElem.innerText = away.toString()
}

function increaseHomeScore(points) {
  home += points
  drawHomeScore()
}

function increaseAwayScore(points) {
  away += points
  drawAwayScore()
}