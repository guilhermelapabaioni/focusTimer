import {
  buttonPlay,
  buttonPause,
  buttonStop,
  displayMinutes,
  displaySeconds,
  minutes,
  buttonSun,
  buttonMoon,
  body
} from './elements.js'
import { buttonEvents } from './buttonEvents.js'
import { functionsButtons } from './functionsButtons.js'
import { Timer } from './timer.js'
import { Sounds } from './sounds.js'

const configFunctionsButtons = functionsButtons({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSun,
  buttonMoon,
  body
})

const configTimerFunction = Timer({
  displayMinutes,
  displaySeconds,
  minutes,
  resetButtons: configFunctionsButtons.resetButtons
})

const configButtonEvents = buttonEvents({
  countDown: configTimerFunction.countDown,
  setTimer: configTimerFunction.setTimer,
  pauseTimer: configTimerFunction.pauseTimer,
  resetTimer: configTimerFunction.resetTimer,
  plusMinutesTimer: configTimerFunction.plusMinutesTimer,
  minusMinutesTimer: configTimerFunction.minusMinutesTimer,
  resetButtons: configFunctionsButtons.resetButtons,
  backgroundDarkMode: configFunctionsButtons.backgroundDarkMode,
  backgroundWhiteMode: configFunctionsButtons.backgroundWhiteMode
})

const configSounds = Sounds({})
