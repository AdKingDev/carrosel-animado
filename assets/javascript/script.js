const track = document.querySelector('.carrosel-track');
const imagens = document.querySelectorAll('.carrosel-img');
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let index = 0;

function updateCarrosel() {
    track.style.transform = `translateX(-${index * 600}px)`;
}

next.addEventListener('click', () => {
    index = (index + 1) % imagens.length;
    updateCarrosel()
})

prev.addEventListener('click', () => {
    index = (index - 1 + imagens.length) % imagens.length;
    updateCarrosel();
})