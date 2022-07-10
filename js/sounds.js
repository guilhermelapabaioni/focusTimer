export function Sounds() {
  const audioTree = new Audio('./sounds/Floresta.wav')
  const audioRain = new Audio('./sounds/Chuva.wav')
  const audioCoffe = new Audio('./sounds/Cafeteria.wav')
  const audioFire = new Audio('./sounds/Lareira.wav')
  const endTimer = new Audio('./sounds/endTimerAlarm.wav')

  const volumeTree = document.querySelector('#volumeTree')
  const volumeCloud = document.querySelector('#volumeCloud')
  const volumeHut = document.querySelector('#volumeHut')
  const volumeFire = document.querySelector('#volumeFire')

  const cardButtonTree = document.querySelector('#cardTree')
  const cardButtonCloud = document.querySelector('#cardCloud')
  const cardButtonHut = document.querySelector('#cardHut')
  const cardButtonFire = document.querySelector('#cardFire')

  function playSound(audio, button, cardButton, volume) {
    let counter = parseInt(button.getAttribute('data-counter') || 0)
    button.setAttribute('data-counter', 1)
    counter++
    if (counter == 1) {
      audio.play()
      audio.loop = true
      cardButton.classList.add('press')
      volume.classList.remove('hidden')
    } else {
      audio.pause()
      cardButton.classList.remove('press')
      volume.classList.add('hidden')
      button.setAttribute('data-counter', 0)
    }
  }

  function endTimerSound(){
    endTimer.play()
    endTimer.loop = true
  }

  volumeTree.addEventListener('input', function () {
    audioTree.volume = volumeTree.value
  })

  volumeCloud.addEventListener('input', function () {
    audioRain.volume = volumeCloud.value
  })

  volumeHut.addEventListener('input', function () {
    audioCoffe.volume = volumeHut.value
  })

  volumeFire.addEventListener('input', function () {
    audioFire.volume = volumeFire.value
  })

  return {
    audioTree,
    audioRain,
    audioCoffe,
    audioFire,
    cardButtonTree,
    cardButtonCloud,
    cardButtonHut,
    cardButtonFire,
    playSound,
    endTimer,
    endTimerSound,
    volumeTree,
    volumeCloud,
    volumeHut,
    volumeFire
  }
}
