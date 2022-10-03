const cores = ["blue", "red", "green", "grey", "white", "grey", "cyan", "wheat"];
const btn = document.getElementById("btn");
const cor = document.querySelector(".cor");

btn.addEventListener("click", function () {
    // pega um numero entre 0 e 6 => cores[6]
    const numeroAleatorio = getNumeroAleatorio();
    document.body.style.backgroundColor = cores[numeroAleatorio];
    cor.textContent = cores[numeroAleatorio];
})

function getNumeroAleatorio() {
    return Math.floor(Math.random() * cores.length);
}