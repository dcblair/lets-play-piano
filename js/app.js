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

let keyImgD = document.createElement("img")
keyImgD.setAttribute("src", "./images/key-img-d.png")

let keyImgS = document.createElement("img")
keyImgS.setAttribute("src", "./images/key-img-s.png")

let keyImgE = document.createElement("img")
keyImgE.setAttribute("src", "./images/key-img-e.png")



let timer = 0;

function setUpTimer(time) {
  timer = time
  const timeInterval = setInterval(() => {
    if (timer === 10) {
      clearInterval(timeInterval)
      // this should be to remove document.querySelector(".squares").removeEventListener("click", handlePoke)
    } else {
      timer++
      console.log(timer)
    }
  }, 1000)
  console.log(timer)
}

game = {
  score: 0,
  timer: 0,
  mary: [keyImgD, keyImgS, keyImgA, keyImgS, keyImgD, keyImgD, keyImgD],
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
  moveKey: function() {
      document.querySelector(".range").appendChild(keyImgE)
      keyImgE.classList.add("key-pressed");
      setUpTimer(0)
  },
  hitKey: function() {
    keyImgE.classList.remove(".key-pressed")
    keyImgE.classList.add("correct-press")
  },
    
  
}


// currPress = "" ; global?
function handleKey(e) {
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

// for (let i = 0; i < keyArray.length; i++) {

// }

// if (keyPressA > 4 || keyPressA < 6) {
//   playerScore+= 5
// }


//event listener for piano key functions
document.addEventListener("keydown", handleKey)

//space bar event listener for game start
document.addEventListener("keypress", game.start)