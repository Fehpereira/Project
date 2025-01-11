function toggleMode() {

  //altera o modo de dark para light e vise versa
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  //altera a foto para cada modo
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/iasmin.png")
    img.setAttribute("alt", "avatar")
  }
  else {
    img.setAttribute("src", "./assets/iasmin.2.png")
    img.setAttribute("alt", "avatar esquerda")
  }
}