const sectAcademicos = document.getElementById('academicos');
const sectPessoais = document.getElementById('pessoais');
const projetosAcademicos = document.getElementById('projetos-academicos');
const projetosPessoais = document.getElementById('projetos-pessoais');

sectAcademicos.addEventListener('click', () => {
    if (projetosAcademicos.style.display === 'block') {
        projetosAcademicos.style.display = 'none';
        projetosPessoais.style.display = 'block';
    }
    else {
        projetosAcademicos.style.display = 'block';
        projetosPessoais.style.display = 'none';
    }
});

sectPessoais.addEventListener('click', () => {
    if (projetosAcademicos.style.display === 'block') {
        projetosAcademicos.style.display = 'none';
        projetosPessoais.style.display = 'block';
    }
    else {
        projetosPessoais.style.display = 'block';
        projetosAcademicos.style.display = 'none';
    }
});