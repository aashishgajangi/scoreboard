
let homeScore = 0
let guestScore = 0

function addOne() {
    homeScore += 1
    document.getElementById("home-score").innerText = homeScore
}
function addTwo() {
    homeScore += 2
    document.getElementById("home-score").innerText = homeScore
}
function addThree() {
    homeScore += 3
    document.getElementById("home-score").innerText = homeScore
}


// Guest
function addOne_guest() {
    guestScore += 1
    document.getElementById("guest-score").innerText = guestScore
}
function addTwo_guest() {
    guestScore += 2
    document.getElementById("guest-score").innerText = guestScore
}
function addThree_guest() {
    guestScore += 3
    document.getElementById("guest-score").innerText = guestScore
}






currscore = document.getElementById("home-score")

console.log(currscore)