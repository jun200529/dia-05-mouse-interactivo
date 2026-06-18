let cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function(evento) {

    cursor.style.left = evento.clientX + "px";

    cursor.style.top = evento.clientY + "px";

});