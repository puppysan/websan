// ===== AÑO DINÁMICO EN EL FOOTER =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== HEADER CON FONDO AL HACER SCROLL =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MENÚ MÓVIL =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// ===== ANIMACIÓN DE APARICIÓN AL SCROLL =====
const revealElements = document.querySelectorAll(
  '.service-card, .program-card, .portfolio-card, .stat-card, .about-text, .contact-form'
);

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));

// ===== FORMULARIO DE CONTACTO =====
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !subject || !message) {
    formStatus.textContent = '⚠️ Completa todos los campos.';
    formStatus.style.color = '#ff6b6b';
    return;
  }

  // Aquí puedes integrar EmailJS, Formspree o tu backend
  // Ejemplo con Formspree:
  // fetch('https://formspree.io/f/TU_ID', { method:'POST', ... })

  formStatus.textContent = '✅ ¡Mensaje enviado! Te contactaremos pronto.';
  formStatus.style.color = '#00b4ff';
  form.reset();

  setTimeout(() => { formStatus.textContent = ''; }, 5000);
});

// ===== SCROLL SUAVE (fallback para navegadores antiguos) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});




/* ============================================
   SysCord — Rotación horaria del logo React
   ============================================ */

