let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},5000)

function nextImage(){
    count++;
    if (count>3){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;

}

function scrollToTop() {
    const scrollDuration = 500; // Duração em milissegundos
    const scrollStep = -window.scrollY / (scrollDuration / 15); // Passo da rolagem

    const scrollInterval = setInterval(function () {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 10); // Intervalo de 15ms
}

document.getElementById('voltar').addEventListener('click', function (event) {
    event.preventDefault();
    scrollToTop();
});