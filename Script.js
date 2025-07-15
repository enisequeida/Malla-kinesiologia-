// Cambiar tema (rosa o azul)
const temaSelect = document.getElementById('tema');
const body = document.body;

temaSelect.addEventListener('change', () => {
  if (temaSelect.value === 'azul') {
    body.classList.add('tema-azul');
  } else {
    body.classList.remove('tema-azul');
  }
});

// Manejar marcar asignatura como aprobado
const semestres = document.querySelectorAll('.semestre');

semestres.forEach(semestre => {
  semestre.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('aprobado');
    });
  });
});

// Filtrar semestres por selector
const filtroSemestre = document.getElementById('filtroSemestre');

filtroSemestre.addEventListener('change', () => {
  const valor = filtroSemestre.value;

  semestres.forEach(sem => {
    if (valor === 'todos' || sem.dataset.sem === valor) {
      sem.classList.remove('oculto');
    } else {
      sem.classList.add('oculto');
    }
  });
});
