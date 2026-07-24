// revelação única e sutil ao rolar
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visto');
      observador.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.revela').forEach((el) => observador.observe(el));

// carrossel da prateleira
const trilho = document.querySelector('.trilho');
const setas = document.querySelectorAll('.seta');
const atualizarSetas = () => {
  const fim = trilho.scrollWidth - trilho.clientWidth;
  setas[0].disabled = trilho.scrollLeft <= 4;
  setas[1].disabled = trilho.scrollLeft >= fim - 4;
};
setas.forEach((seta) => {
  seta.addEventListener('click', () => {
    const largura = trilho.querySelector('.foto').getBoundingClientRect().width + 14;
    trilho.scrollBy({ left: largura * Number(seta.dataset.dir), behavior: 'smooth' });
  });
});
trilho.addEventListener('scroll', atualizarSetas, { passive: true });
window.addEventListener('resize', atualizarSetas);
atualizarSetas();
