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


// create piano key images
// let pianoKeyA = document.createElement("img")

// let pianoKeyW = document.createElement("img")

function startGame(e) {
  if (e.key === "spacebar") {
  
  }
}

function handleKey(e) {
  if (e.key === "a") {
    audioC.play();
  } else if ("keyup" === true) {
    audioC.stop();
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

// game = {
//   mary: [keyImgE, keyImgD, keyImgC, keyImgD, keyImgE, keyImgE, keyImgE],
//   start() {
    
//   }
// }


// for (let i = 0; i < keyArray.length; i++) {

// }

// if (keyPressA > 4 || keyPressA < 6) {
//   playerScore+= 10
// }

document.addEventListener("keydown", handleKey)

document.addEventListener("keypress", startGame)

console.log("Yay!")

