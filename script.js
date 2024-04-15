const btnContato = document.getElementById('btnContato');
const btnInscricao = document.getElementById('btnInscricao');
const btnPesquisa = document.getElementById('btnPesquisa');

const formContato = document.getElementById('formContato');
const formInscricao = document.getElementById('formInscricao');
const formPesquisa = document.getElementById('formPesquisa');

btnContato.addEventListener('click', () => {
    formContato.style.display = 'block';
    formInscricao.style.display = 'none';
    formPesquisa.style.display = 'none';
});

btnInscricao.addEventListener('click', () => {
    formContato.style.display = 'none';
    formInscricao.style.display = 'block';
    formPesquisa.style.display = 'none';
});

btnPesquisa.addEventListener('click', () => {
    formContato.style.display = 'none';
    formInscricao.style.display = 'none';
    formPesquisa.style.display = 'block';
});

