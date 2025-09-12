const canvas = document.getElementById('space');
const ctx = canvas.getContext('2d');

// Função que ajusta o tamanho do canvas para a largura e altura da janela
function resizeCanvas() {
    canvas.width = window.innerWidth;  
    canvas.height = window.innerHeight; 
}

resizeCanvas();

// Adiciona um listener para redimensionar o canvas quando a janela mudar de tamanho
window.addEventListener('resize', resizeCanvas);


const stars = [];

// Define quantas estrelas queremos
const starCount = 1000;

// Loop para criar cada estrela com propriedades aleatórias
for (let i = 0; i < starCount; i++) {
    stars.push({
        x: Math.random() * canvas.width,   // posição horizontal aleatória
        y: Math.random() * canvas.height,  // posição vertical aleatória
        radius: Math.random() * 1.5,       // tamanho da estrela
        speed: Math.random() * 0.1 + 0.2,  // velocidade da estrela
        alpha: Math.random()                // opacidade da estrela (para efeito de piscar)
    });
}

// Função que faz a animação do fundo
function animate() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Loop por cada estrela para desenhá-la e atualizar sua posição
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2); // desenha a estrela como um círculo
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`; 
        ctx.fill(); 

        // Atualiza a posição vertical da estrela
        star.y += star.speed;

        // Faz a estrela "piscar" mudando levemente a opacidade
        star.alpha += (Math.random() - 0.5) * 0.02;
        if (star.alpha < 0) star.alpha = 0;
        if (star.alpha > 1) star.alpha = 1;

        // Se a estrela sair da tela na parte inferior, ela volta para cima com posição horizontal aleatória
        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }
    });

    // Chama a função novamente no próximo frame, criando a animação contínua
    requestAnimationFrame(animate);
}

// Inicia a animação
animate();
