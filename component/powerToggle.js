const powerToggle = () => {
  const power_btn = document.getElementById("power")
  const display = document.getElementById("display")
  const volumeslider = document.getElementById("range-slider")
  const volumeDisplay = document.getElementById("volume")

  power_btn.addEventListener("click", () => {
    power_btn.toggleAttribute("off")
    display.innerHTML = ""
    volumeDisplay.innerHTML = ""
    if (power_btn.hasAttribute("off")) {
      volumeslider.disabled = true
      return
    }
    volumeslider.disabled = false
  })
}

export default powerToggle
