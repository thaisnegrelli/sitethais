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
        const novaImagemURL = 'https://png.pngtree.com/background/20250504/original/pngtree-connected-continents-uniting-the-world-through-diplomacy-picture-image_16324324.jpg';
        imagem.src = novaImagemURL;
    });

    const botaoTexto = document.getElementById('mudarTextoBtn');
    const titulo = document.querySelector('h1');

    botaoTexto.addEventListener('click', function() {
        titulo.textContent = 'O mundo é nosso!';
    });
});

