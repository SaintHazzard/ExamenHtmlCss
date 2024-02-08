let content = document.querySelector(".content")



console.log(content)


content.addEventListener("click", function (event) {
  const target = event.target

  if (target.classList.contains("bxs-trash")) {
    const producto = target.closest('.detailContent');
    content.removeChild(producto)
    let arrayProducto = document.querySelectorAll(".detailContent")
    if (arrayProducto.length < 1) {
      location.href = "carritoVacio.html";
    }
  }
})