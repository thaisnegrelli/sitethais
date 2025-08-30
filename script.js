document.addEventListener('DOMContentLoaded', function() {
    const botaoCor = document.getElementById('mudarCorBtn');
    const corpo = document.body;

    botaoCor.addEventListener('click', function() {
        const cores = ['#ffcc00', '#00ccff', '#cc00ff', '#00ffcc'];
        const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
        corpo.style.backgroundColor = corAleatoria;
    });

    const botaoImagem = document.getElementById('mudarImagemBtn');
    const imagem = document.getElementById('minhaImagem');

    botaoImagem.addEventListener('click', function() {
        const novaImagemURL = 'https://cdn.pixabay.com/photo/2020/03/19/21/35/covid-4948866_1280.jpg';
        imagem.src = novaImagemURL;
    });

    const botaoTexto = document.getElementById('mudarTextoBtn');
    const titulo = document.querySelector('h1');

    botaoTexto.addEventListener('click', function() {
        titulo.textContent = 'O mundo é nosso!';
    });
});

