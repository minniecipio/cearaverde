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
