export function Timer({
  displayMinutes,
  displaySeconds,
  minutes,
  endTimerSound
}) {
  let timer

  function countDown() {
    timer = setTimeout(function () {
      let minutes = Number(displayMinutes.textContent)
      let seconds = Number(displaySeconds.textContent)

      if (minutes <= 0 && seconds <= 0) {
        endTimerSound()
        return
      }

      if (seconds <= 0) {
        seconds = 2
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
    let newMinutes = parseInt(prompt('Quantos minutos?'))
    if (newMinutes < 0) {
      alert('Número inválido!')
      return
    } else if (!newMinutes) {
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
