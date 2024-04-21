const volume = () => {
  const allBeatAudio = document.querySelectorAll(".clip")
  const volumeSlider = document.getElementById("range-slider")
  const displayVolume = document.getElementById("volume")

  //   Adjusting Volume using volume Slider
  volumeSlider.addEventListener("change", () => {
    const volume = volumeSlider.value
    const zero = /^0$/g
    const regZeropointOne = /^0./g
    const fullone = /^1$/g
    displayVolume.innerHTML = `<p>Volume: <span class=${
      volume > 0.5 ? "green" : "red"
    }>${
      zero.test(volume)
        ? volume.replace(zero, "")
        : regZeropointOne.test(volume)
        ? volume.replace(regZeropointOne, "")
        : volume.replace(fullone, "10")
    }0%</span></p>`
    allBeatAudio.forEach((beat) => {
      beat.volume = volume
    })
  })
}

export default volume
