const drumClicks = () => {
  const beatBox = document.querySelectorAll(".drum-pad")
  const beat = document.querySelectorAll(".clip")
  const power_btn = document.getElementById("power")
  const display = document.getElementById("display")

  const playBeatz = (e) => {
    const clicked = e.target
    if (power_btn.hasAttribute("off")) {
      clicked.toggleAttribute("no-sound")
      setTimeout(() => {
        clicked.toggleAttribute("no-sound")
      }, 90)
      return
    }
    clicked.toggleAttribute("clicked")
    beat.forEach((el) => {
      if (el.parentNode === clicked && e.button === 0) {
        el.currentTime = 0
        el.play()
        display.innerText = el.getAttribute("beat")
        setTimeout(() => {
          clicked.toggleAttribute("clicked")
        }, 90)
      }
    })
  }

  beatBox.forEach((el) => {
    el.addEventListener("mouseup", (e) => {
      playBeatz(e)
    })
  })

  //   this checks if the keydown is equal to the id or Alphabet of the beat then plays it
  document.addEventListener("keydown", (e) => {
    if (power_btn.hasAttribute("off")) {
      beat.forEach((el) => {
        const beatBykey = el.parentNode
        // beatByKey represent the the single Beatbox which autio id matches the Key pressed
        if (el.id === e.key.toUpperCase()) {
          beatBykey.toggleAttribute("no-sound")
          setTimeout(() => {
            beatBykey.toggleAttribute("no-sound")
          }, 90)
        }
      })
      return
    }
    beat.forEach((el) => {
      const beatBykey = el.parentNode
      // beatByKey represent the the single Beatbox which autio id matches the Key pressed
      if (el.id === e.key.toUpperCase()) {
        beatBykey.toggleAttribute("clicked")
        el.currentTime = 0
        el.play()
        display.innerText = el.getAttribute("beat")
        setTimeout(() => {
          beatBykey.toggleAttribute("clicked")
        }, 90)
      }
    })
  })
}

export default drumClicks
