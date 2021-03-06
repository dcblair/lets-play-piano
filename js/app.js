// window load alert

/*
window.onload = alert(`Let's play piano! Instructions

Watch the keys float across the screen. As the keys reach
the green section, press the same letter key on your keyboard.
If your timing is right, you win 2 points!
If you miss or press the wrong key, you lose 2 points.
Don't let your score get to 0!

Press the start button to begin!`)
*/

// enable audio
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

// connect note audio --> check body of html
const audioC = document.querySelector("#audio-c")
const note1 = audioContext.createMediaElementSource(audioC) 
note1.connect(audioContext.destination)

const audioCSh = document.querySelector("#audio-csh")
const note2 = audioContext.createMediaElementSource(audioCSh)
note2.connect(audioContext.destination)

const audioD = document.querySelector("#audio-d")
const note3 = audioContext.createMediaElementSource(audioD)
note3.connect(audioContext.destination)

const audioDSh = document.querySelector("#audio-dsh")
const note4 = audioContext.createMediaElementSource(audioDSh)
note4.connect(audioContext.destination)

const audioE = document.querySelector("#audio-e")
const note5 = audioContext.createMediaElementSource(audioE)
note5.connect(audioContext.destination)

const audioF = document.querySelector("#audio-f")
const note6 = audioContext.createMediaElementSource(audioF)
note6.connect(audioContext.destination)

const audioFSh = document.querySelector("#audio-fsh")
const note7 = audioContext.createMediaElementSource(audioFSh) 
note7.connect(audioContext.destination)

const audioG = document.querySelector("#audio-g")
const note8 = audioContext.createMediaElementSource(audioG)
note8.connect(audioContext.destination)

const audioGSh = document.querySelector("#audio-gsh")
const note9 = audioContext.createMediaElementSource(audioGSh)
note9.connect(audioContext.destination)

const audioA = document.querySelector("#audio-a")
const note10 = audioContext.createMediaElementSource(audioA)
note10.connect(audioContext.destination)

const audioASh = document.querySelector("#audio-ash")
const note11 = audioContext.createMediaElementSource(audioASh)
note11.connect(audioContext.destination)

const audioB = document.querySelector("#audio-b")
const note12 = audioContext.createMediaElementSource(audioB)
note12.connect(audioContext.destination)

const audioCHi = document.querySelector("#audio-chi")
const note13 = audioContext.createMediaElementSource(audioCHi)
note13.connect(audioContext.destination)

// create piano key container
let pianoContainer = document.createElement("div")
pianoContainer.setAttribute("class", "pianoContainer")
document.body.appendChild(pianoContainer)

// create score text
let score = document.createElement("div")
score.setAttribute("class", "score")
score.innerHTML="10"
document.querySelector(".range").appendChild(score)

// create start button
let startButton = document.createElement("a")
startButton.setAttribute("class", "button")
startButton.setAttribute("id", "startButton")
startButton.textContent= "Start!"
score.appendChild(startButton)

// create key images
let keyImgA = document.createElement("img")
keyImgA.setAttribute("src", "./images/key-img-a.png")
keyImgA.setAttribute("alt", "a")

let keyImgD = document.createElement("img")
keyImgD.setAttribute("src", "./images/key-img-d.png")
keyImgD.setAttribute("alt", "d")

let keyImgS = document.createElement("img")
keyImgS.setAttribute("src", "./images/key-img-s.png")
keyImgS.setAttribute("alt", "s")

let keyImgE = document.createElement("img")
keyImgE.setAttribute("src", "./images/key-img-e.png")
keyImgE.setAttribute("alt", "e")

let keyImgG = document.createElement("img")
keyImgG.setAttribute("src", "./images/key-img-g.png")
keyImgG.setAttribute("alt", "g")


//check if key is pressed
let wasPressed = false;
let keyDown = function(e){ 
  if(e.key){
    wasPressed = true;
    game.currentKey = e.key
    game.compare()
    document.getElementById(`piano-${e.key}`).classList.add("piano-press")
  } 
}
let keyUp = function(e){
  wasPressed = false;
  document.getElementById(`piano-${e.key}`).classList.remove("piano-press")
}

let game = {
  sweetSpot: false,
  score: 0,
  timer: 0,
  index: 0,
  currKeyImg: [],
  currentKey: [],
  mary: [keyImgD, keyImgS, keyImgA, keyImgS, keyImgD, keyImgD, keyImgD, keyImgS, keyImgS, keyImgS, keyImgD, keyImgG, keyImgG, keyImgD, keyImgS, keyImgA, keyImgS, keyImgD, keyImgD, keyImgD, keyImgD, keyImgS, keyImgS, keyImgD, keyImgS, keyImgA],
  currKey: function(e) {
    let playedKey = e.key
    playedKey = game.currentKey
  },
  moveKey: function() { 
    document.querySelector(".range").appendChild(game.mary[this.index])
    game.mary[this.index].classList.add("key-pressed");
    game.currKeyImg = game.mary[this.index].alt;
    this.index++;
    let moveTime = 0;
    let interval = setInterval(function(e) { 
      if (moveTime === 5000) { 
      clearInterval(interval);
      let el = document.querySelector(".key-pressed")
      el.parentNode.removeChild(el)
      game.sweetSpot = false;
      if (game.index < game.mary.length) {
        game.moveKey()
      } else {
        game.win();
      }
      } else if (moveTime > 200 && moveTime < 2000) {
        moveTime+= 500
        game.sweetSpot = true;
        game.mary[this.index].classList.add("correct-key");
      } else {
        moveTime+= 500
        game.sweetSpot = false;
      }
    }, 500)
  },
  compare: function() {
    if (game.sweetSpot && game.currKeyImg[0] == game.currentKey[0]) {
      game.score+= 1
      score.innerHTML =`${game.score}`
    } else {
      game.score-= 1
      score.innerHTML =`${game.score}`
    }
  },
  start: function(e) {
    if (startButton.textContent === "Start!") {
      audioContext.resume()
      game.moveKey()
      startButton.textContent= "Restart!"
    } else if (startButton.textContent= "Restart!") {
      location.reload()
      return false;
    }
  },
  win: function() {
    if (score.innerHTML > 0) {
      alert(`Great Job! Your score is ${score.innerHTML}!`)
      location.reload()
      return false;
    } else {
      alert(`Nice try! You'll get it next time!`)
      location.reload()
      return false;
    }
  },
  handleKey: function(e) {
    if (e.key === "a") {
      audioC.play();
    }
    if (e.key === "w") {
      audioCSh.play();
    }
    if (e.key === "s") {
      audioD.play();
    } else if (e.key === "e") {
      audioDSh.play();
    }
    if (e.key === "d") {
      audioE.play();
    } else if (e.key === "f") {
      audioF.play();
    }
    if (e.key === "t") {
      audioFSh.play();
    } else if (e.key === "g") {
      audioG.play();
    } 
    if (e.key === "y") {
      audioGSh.play();
    } else if (e.key === "h") {
      audioA.play();
    } 
    if (e.key === "u") {
      audioASh.play();
    } else if (e.key === "j") {
      audioB.play();
    }
    if (e.key === "k") {
      audioCHi.play();
    }
  }
}

// document.addEventListener("keydown", )
document.addEventListener("keydown", keyDown, false)
document.addEventListener("keyup", keyUp, false)

//event listener for piano key functions
document.addEventListener("keydown", game.handleKey)

//event listener to track currently pressed key
document.addEventListener("keydown", game.currKey)

//space bar event listener for game start
document.getElementById("startButton").addEventListener("click", game.start)

