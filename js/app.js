// window load alert

/*
window.onload = alert(`Let's play piano! Instructions

Watch the keys float across the screen. As the keys reach
the green section, press the same letter key on your keyboard.
If your timing is right, you win 2 points!
If you miss or press the wrong key, you lose 2 points.
Don't let your score get to 0!

Press the spacebar to start (press again to reset game)`)
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

// create key images
let keyImgA = document.createElement("img")
keyImgA.setAttribute("src", "./images/key-img-a.png")
keyImgA.setAttribute("value", "a")

let keyImgD = document.createElement("img")
keyImgD.setAttribute("src", "./images/key-img-d.png")
keyImgD.setAttribute("value", "d")

let keyImgS = document.createElement("img")
keyImgS.setAttribute("src", "./images/key-img-s.png")
keyImgS.setAttribute("value", "s")

let keyImgE = document.createElement("img")
keyImgE.setAttribute("src", "./images/key-img-e.png")
keyImgE.setAttribute("value", "e")

let keyImgG = document.createElement("img")
keyImgG.setAttribute("src", "./images/key-img-g.png")
keyImgG.setAttribute("value", "g")
console.log(typeof keyImgG.value)

//check if key is pressed
let isPressed = false;
let keydown = function(e){ 
  if(e.key){
    isPressed = true;
  } 
}
let keyup = function(e){
  isPressed = false;
}

game = {
  score: 0,
  timer: 0,
  currKeyImg: [],
  mary: [keyImgD, keyImgS, keyImgA, keyImgS, keyImgD, keyImgD, keyImgD, keyImgS, keyImgS, keyImgS, keyImgD, keyImgG, keyImgG, keyImgD, keyImgS, keyImgA, keyImgS, keyImgD, keyImgD, keyImgD, keyImgD, keyImgS, keyImgS, keyImgD, keyImgS, keyImgA],
  setUpTimer: function (time) {
    game.timer = time
    const timeInterval = setInterval(() => {
      if (game.timer === 3) {
        clearInterval(timeInterval)
        // this should be to remove document.querySelector(".squares").removeEventListener("click", handlePoke)
      } 
      if (isPressed) {
        console.log("Hey!")
        game.timer++
        score++
      } else {
        game.timer++
        } console.log(game.timer)
      }, 2000)
  },
  moveKey: function() { 
    let moveTime = 0;
    let interval = setInterval(function() { 
      if (moveTime <= game.mary.length) { 
        document.querySelector(".range").appendChild(game.mary[moveTime])
        game.mary[moveTime].classList.add("key-pressed");
        // game.mary[i].setAttribute("data-value", i)
        console.log(game.mary[moveTime])
        game.setUpTimer(0)
      moveTime++;
      } else { 
      clearInterval(interval);
      
      }
    }, 2000)
    // for (let i = 0; i < game.mary.length; i++) {
    //   setTimeout(function() {
    //   document.querySelector(".range").appendChild(game.mary[i])
    //   game.mary[i].classList.add("key-pressed");
    //   // game.mary[i].setAttribute("data-value", i)
    //   console.log(game.mary[i])
    //   game.setUpTimer(1)
    //   }, 500)
    // }
  },
  hitKey: function() {
    game.mary.classList.remove("key-pressed")
    game.mary.classList.add("correct-press")

  },
  compare: function() {
  },
  start: function(e) {
    if (e.keyCode === 32) {
      
      game.moveKey();
      // new function const checkE = setInterval
      // time = interval; set interval for 5 secs
      // check var tied to e being pressed
      // startTimer();
      // timer++
      // if (timer === 10) {
      // stopTimer();
      // }
    }
  },
  
}



// currPress = "" ; global?
function handleKey(e) {
  if (e.key === "a") {
    audioC.play();
    let pianoKeyA = document.querySelector(".piano-key")
    pianoKeyA.classList.remove("piano-key")
    pianoKeyA.classList.add("piano-press")
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

// for (let i = 0; i < keyArray.length; i++) {

// }

// if (keyPressA > 4 || keyPressA < 6) {
//   playerScore+= 5
// }

// document.addEventListener("keydown", )
document.addEventListener("keydown", keydown, false)
document.addEventListener("keyup", keyup, false)

//event listener for piano key functions
document.addEventListener("keydown", handleKey)

//space bar event listener for game start
document.addEventListener("keypress", game.start)

