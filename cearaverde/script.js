const sections = document.querySelectorAll(".fade-in");
const btnToggle = document.getElementById("btn-toggle");
const body = document.body;

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 120) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", () => {
  revealOnScroll();

  // Aplica modo escuro salvo no localStorage
  if(localStorage.getItem('modoEscuro') === 'true'){
    body.classList.add('dark');
    btnToggle.textContent = 'Modo Claro';
  }
});

btnToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const modoAtivo = body.classList.contains("dark");
  btnToggle.textContent = modoAtivo ? "Modo Claro" : "Modo Escuro";
  localStorage.setItem('modoEscuro', modoAtivo);
});

// Efeito de digitação no título
const titulo = document.getElementById("titulo");
if (titulo) {
  const texto = titulo.textContent;
  let index = 0;
  titulo.textContent = "";

  function digitarTitulo() {
    if (index <= texto.length) {
      titulo.textContent = texto.slice(0, index);
      index++;
      setTimeout(digitarTitulo, 150);
    }
  }

  digitarTitulo();
}

// Partículas flutuantes no topo
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = 60;

let particles = [];

for (let i = 0; i < 30; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 1,
    speedY: Math.random() * 0.5 + 0.2,
    alpha: Math.random() * 0.5 + 0.3
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(100, 200, 100, ${p.alpha})`;
    ctx.fill();

    p.y += p.speedY;
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animateParticles);
}

animateParticles();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
});


