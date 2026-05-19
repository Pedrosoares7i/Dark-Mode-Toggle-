const btn = document.getElementById('btnTema');

function alternarTema() {
  document.body.classList.toggle('escuro');

  const escuroAtivo = document.body.classList.contains('escuro');

  btn.textContent = escuroAtivo ? '🌕 Modo claro' : '🌙 Modo escuro';

  localStorage.setItem('tema', escuroAtivo ? 'escuro' : 'claro');
}

const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'escuro') {
  document.body.classList.add('escuro');
  btn.textContent = '🌕 Modo claro';
}