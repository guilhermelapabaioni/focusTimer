export function functionsButtons({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSun,
  buttonMoon,
  body
}) {
  function resetButtons() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonStop.classList.add('hide')
  }

  function backgroundDarkMode() {
    buttonSun.classList.add('hide')
    buttonMoon.classList.remove('hide')
    body.classList.add('dark-mode')
  }

  function backgroundWhiteMode(){
    buttonSun.classList.remove('hide')
    buttonMoon.classList.add('hide')
    body.classList.remove('dark-mode')
  }

  return {
    resetButtons,
    backgroundDarkMode,
    backgroundWhiteMode
  }
}
