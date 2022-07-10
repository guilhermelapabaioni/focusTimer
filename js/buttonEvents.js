import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonPlusMinutes,
  buttonMinusMinutes,
  buttonTree,
  buttonCloud,
  buttonHut,
  buttonFire,
  buttonSun,
  buttonMoon
} from './elements.js'
import { Sounds } from './sounds.js'

const configSounds = Sounds()

export function buttonEvents({
  countDown,
  setTimer,
  pauseTimer,
  resetTimer,
  plusMinutesTimer,
  minusMinutesTimer,
  resetButtons,
  backgroundDarkMode,
  backgroundWhiteMode
}) {
  buttonPlay.addEventListener('click', function () {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonStop.classList.remove('hide')
    countDown()
  })

  buttonPause.addEventListener('click', function () {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    pauseTimer()
  })

  buttonStop.addEventListener('click', function () {
    resetButtons()
    resetTimer()
    buttonStop.classList.remove('endTime')
  })

  buttonSet.addEventListener('click', function () {
    setTimer()
  })

  buttonPlusMinutes.addEventListener('click', function () {
    plusMinutesTimer()
  })

  buttonMinusMinutes.addEventListener('click', function () {
    minusMinutesTimer()
  })

  buttonTree.addEventListener('click', function () {
    configSounds.playSound(
      configSounds.audioTree,
      buttonTree,
      configSounds.cardButtonTree,
      volumeTree
    )
  })

  buttonCloud.addEventListener('click', function () {
    configSounds.playSound(
      configSounds.audioRain,
      buttonCloud,
      configSounds.cardButtonCloud,
      volumeCloud
    )
  })

  buttonHut.addEventListener('click', function () {
    configSounds.playSound(
      configSounds.audioCoffe,
      buttonHut,
      configSounds.cardButtonHut,
      volumeHut
    )
  })

  buttonFire.addEventListener('click', function () {
    configSounds.playSound(
      configSounds.audioFire,
      buttonFire,
      configSounds.cardButtonFire,
      volumeFire
    )
  })

  buttonSun.addEventListener('click', function () {
    backgroundDarkMode()
  })

  buttonMoon.addEventListener('click', function () {
    backgroundWhiteMode()
  })
}
