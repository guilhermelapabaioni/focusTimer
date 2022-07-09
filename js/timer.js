export function Timer({
  displayMinutes,
  displaySeconds,
  minutes,
  resetButtons
}) {
  let timer

  function countDown() {
    timer = setTimeout(function () {
      let minutes = Number(displayMinutes.textContent)
      let seconds = Number(displaySeconds.textContent)

      if (minutes <= 0 && seconds <= 0) {
        resetButtons()
        resetTimer()
        return
      }

      if (seconds <= 0) {
        seconds = 5
        --minutes
      }

      updateDisplayMinutesTimer(minutes, seconds - 1)

      countDown()
    }, 1000)
  }

  function updateDisplayMinutesTimer(updateMinutes, updateSeconds) {
    displayMinutes.textContent = String(updateMinutes).padStart(2, '0')
    displaySeconds.textContent = String(updateSeconds).padStart(2, '0')
  }

  function setTimer() {
    let newMinutes = Number(prompt('Quantos minutos?'))
    if (!newMinutes) {
      updateDisplayMinutesTimer(minutes, 0)
      return
    }
    minutes = newMinutes
    updateDisplayMinutesTimer(minutes, 0)
  }

  function plusMinutesTimer() {
    minutes += 5
    updateDisplayMinutesTimer(minutes, 0)
  }

  function minusMinutesTimer() {
    minutes -= 5
    updateDisplayMinutesTimer(minutes, 0)
  }

  function resetTimer() {
    updateDisplayMinutesTimer(minutes, 0)
    clearTimeout(timer)
  }

  function pauseTimer() {
    clearTimeout(timer)
  }

  return {
    countDown,
    updateDisplayMinutesTimer,
    setTimer,
    plusMinutesTimer,
    minusMinutesTimer,
    resetTimer,
    pauseTimer
  }
}
