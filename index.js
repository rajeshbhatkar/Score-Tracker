let homeScroreEl = document.getElementById("homeScrore")
let guestScoreEl = document.getElementById("guestScore")

function homePlusOne(){
    homeScroreEl.textContent = Number(homeScroreEl.textContent) + 1
    compareScore()
}

function homePlusTwo(){
    homeScroreEl.textContent = Number(homeScroreEl.textContent) + 2
    compareScore()
}


function homePlusThree(){
    homeScroreEl.textContent = Number(homeScroreEl.textContent) + 3
    compareScore()
}


function guestPlusOne(){
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 1
    compareScore()
}

function guestPlusTwo(){
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 2
    compareScore()
}


function guestPlusThree(){
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 3
    compareScore()
}

function compareScore() {
    console.log("Called")
    if (Number(homeScroreEl.textContent) > Number(guestScoreEl.textContent)) {
          document.getElementById("homeScrore").classList.add("pulse-glow");
          document.getElementById("guestScore").classList.remove("pulse-glow");
    }
    else if (Number(homeScroreEl.textContent) < Number(guestScoreEl.textContent)) {
          document.getElementById("guestScore").classList.add("pulse-glow");
          document.getElementById("homeScrore").classList.remove("pulse-glow");
    }
    else {
        document.getElementById("homeScrore").classList.remove("pulse-glow");
        document.getElementById("guestScore").classList.remove("pulse-glow");
    }
    
    homeScrore
}

function resetScore(){
    document.getElementById("homeScrore").classList.remove("pulse-glow");
    document.getElementById("guestScore").classList.remove("pulse-glow");
    homeScroreEl.textContent = 0
    guestScoreEl.textContent = 0
}