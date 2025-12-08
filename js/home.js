document.addEventListener('DOMContentLoaded', ()=> {
    console.log('script carregado');
    const span = document.getElementById('textos');
    const textos = [
        'Python',
        'Web',
        'Front-end',
        'Back-end',
        'Full-Stack'
    ];

    let textoIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    function digitarTexto() {
        const textoAtual = textos[textoIndex];
        
        if (!isDeleting && charIndex <= textoAtual.length) {
            // Digitando
            span.textContent = textoAtual.substring(0, charIndex);
            charIndex++;
            verificarTexto(textoAtual);
            
            if (charIndex > textoAtual.length) {
                // Pausa no final do texto
                isPaused = true;
                setTimeout(() => {
                    isPaused = false;
                    isDeleting = true;
                    digitarTexto();
                }, 2000); // Pausa de 2 segundos
                return;
            }
            setTimeout(digitarTexto, 100); // Velocidade de digitação
        } else if (isDeleting && charIndex >= 0) {
            // Apagando
            span.textContent = textoAtual.substring(0, charIndex);
            charIndex--;
            
            if (charIndex < 0) {
                // Passa para o próximo texto
                isDeleting = false;
                textoIndex = (textoIndex + 1) % textos.length;
                charIndex = 0;
                setTimeout(digitarTexto, 500); // Pausa antes de começar o próximo
                return;
            }
            setTimeout(digitarTexto, 70); // Velocidade de apagar (mais rápido)
        }
    }

    function verificarTexto(textoAtual){
        if (textoAtual === 'Python'){
            span.style.color = '#6559FF';
        }
        else if (textoAtual === 'Web'){
            span.style.color = '#FFCC00';
        }
        else if (textoAtual === 'Front-end'){
            span.style.color = '#61DBFB';
        }
        else if (textoAtual === 'Back-end'){
            span.style.color = '#68A063';
        }
        else if (textoAtual === 'Full-Stack'){
            span.style.color = '#F1502F';
        }
        else{
            span.style.color = '#FFFFFF';
        }
    }

    digitarTexto();
});