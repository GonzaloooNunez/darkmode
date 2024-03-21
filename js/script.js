const boton = document.getElementById("boton");
const icono = document.getElementById("icono");
let modoOscuro = true;

boton.addEventListener("click", function () {
  if (modoOscuro) {
    // Modo oscuro activado
    document.body.style.backgroundColor = "black";
    document.getElementById("tituloArticulo").style.color = "yellow";
    document.getElementById("tituloCabecera").style.color = "yellow";
    document.getElementById("texto").style.color = "white";
    document.getElementById("darkMode").style.color = "white";
    icono.src = "assets/img/sol.png";
    icono.style.backgroundColor = "yellow";
  } else {
    // Modo oscuro desactivado
    document.body.style.backgroundColor = "white";
    document.getElementById("tituloArticulo").style.color = "black";
    document.getElementById("tituloCabecera").style.color = "black";
    document.getElementById("texto").style.color = "black";
    document.getElementById("darkMode").style.color = "black";
    icono.src = "assets/img/luna.png";
    icono.style.backgroundColor = "rgb(105, 105, 243)";
  }

  modoOscuro = !modoOscuro;
});
