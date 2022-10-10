const cores = ["blue", "red", "green", "grey", "white", "grey", "cyan", "wheat", "purple", "yellow", "teal", "silver", "gold", "lime", "orange"];
const btn = document.getElementById("btn");
const cor = document.querySelector(".cor");

btn.addEventListener("click", function () {
    // pega um numero entre 0 e 12 => cores[13]
    const numeroAleatorio = getNumeroAleatorio();
    document.body.style.backgroundColor = cores[numeroAleatorio];
    cor.textContent = cores[numeroAleatorio];
})

function getNumeroAleatorio() {
    return Math.floor(Math.random() * cores.length);
}