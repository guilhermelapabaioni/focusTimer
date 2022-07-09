const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonPlusMinutes = document.querySelector('.plusMinutes')
const buttonMinusMinutes = document.querySelector('.minusMinutes')
const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')
let minutes = Number(displayMinutes.textContent)

const buttonTree = document.querySelector('.tree')
const buttonCloud = document.querySelector('.cloud')
const buttonHut = document.querySelector('.hut')
const buttonFire = document.querySelector('.fire')


const buttonSun = document.querySelector('.sun')
const buttonMoon = document.querySelector('.moon')
const body = document.querySelector('body')

export {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonPlusMinutes,
  buttonMinusMinutes,
  displayMinutes,
  displaySeconds,
  minutes,
  buttonTree,
  buttonCloud,
  buttonHut,
  buttonFire,
  buttonSun,
  buttonMoon,
  body
}
