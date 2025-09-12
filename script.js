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
        const novaImagemURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdC6pOMQAeEtN-YAhR4P4_M2NHvFlER-eU3g&s';
        imagem.src = novaImagemURL;
    });

    const botaoTexto = document.getElementById('mudarTextoBtn');
    const titulo = document.querySelector('h1');

    botaoTexto.addEventListener('click', function() {
        titulo.textContent = 'O mundo é nosso!';
    });
});