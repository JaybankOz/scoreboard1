let homePoints = document.getElementById("home-score")
let guestPoints = document.getElementById("guest-score")

let home = 0
let away = 0
let add1Point = 1
let add2Point = 2
let add3Point = 3

function home1 () {
  let result = home += add1Point
  homePoints.textContent= result
}

function home2 () {
  let result = home += add2Point
  homePoints.textContent= result
}

function home3 () {
  let result = home += add3Point
  homePoints.textContent= result
}

function guest1(){
  let result = away += add1Point
  guestPoints.textContent= result
}

function guest2(){
  let result = away += add2Point
  guestPoints.textContent= result
}

function guest3(){
  let result = away += add3Point
  guestPoints.textContent= result
}