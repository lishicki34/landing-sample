// Текущий год в подвале
document.getElementById('year').textContent = new Date().getFullYear();

// Мобильное меню toggle
const burger = document.getElementById('burger');
const menu = document.getElementById('mobileMenu');
burger?.addEventListener('click', () => {
  const expanded = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!expanded));
  menu.hidden = expanded;
});

// Имитация отправки формы
const form = document.getElementById('leadForm');
const statu = document.getElementById('formStatus');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  statu.textContent = 'Отправляем…';
  setTimeout(() => {
    statu.textContent = 'Спасибо! Мы свяжемся с вами.';
    form.reset();
  }, 800);
});