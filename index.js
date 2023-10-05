let homeScoreBtn1 = document.getElementById ("btn-1")
let homeScoreEl = document.getElementById ("home-score")
let homeScore = 0
 
function increaseHomeScoreOne() {
    homeScore +=1
    homeScoreEl.textContent = homeScore
    
}
function increaseHomeScoreTwo() {
    homeScore +=2
    homeScoreEl.textContent = homeScore
}
function increaseHomeScoreThree() {
    homeScore +=3
    homeScoreEl.textContent = homeScore
}
let guestScoreBtn1 = document.getElementById ("btn-1")
let guestScoreEl = document.getElementById ("guest-score")
let guestScore = 0

function increaseGuestScoreOne() {
    guestScore +=1
    guestScoreEl.textContent = guestScore
}
function increaseGuestScoreTwo() {
    guestScore +=2
    guestScoreEl.textContent = guestScore
}
function increaseGuestScoreThree() {
    guestScore +=3
    guestScoreEl.textContent = guestScore
}

