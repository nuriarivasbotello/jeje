document.addEventListener('DOMContentLoaded', function () {
  const mensaje = document.getElementById('mensaje');

  function mostrarPrimerMensaje() {
    mensaje.innerHTML = `<p style="font-size: 30px;">¿Estás contento de este año a mi lado y quieres repetir?</p>`;
    mensaje.innerHTML += `<button id="siBtn">Sí</button>`;
    mensaje.innerHTML += `<button id="noBtn">No</button>`;
    asignarListenersPrimerMensaje();
  }

  function mostrarSegundoMensaje() {
    mensaje.innerHTML = `<p style="font-size: 30px;">Da igual si dices que no, esto ya es de por vida</p>`;
    mensaje.innerHTML += `<button class="siBtn">Sí</button>`;
    mensaje.innerHTML += `<button class="siBtn">Sí</button>`;
    asignarListenersSegundoMensaje();
  }

  function mostrarTercerMensaje() {
    mensaje.innerHTML = `<p style="font-size: 40px;">¡Feliz aniversario mi amor!</p>`;
    mostrarCorazones();
  }

  function asignarListenersPrimerMensaje() {
    const noBtn = document.getElementById('noBtn');
    const siBtn = document.getElementById('siBtn');

    noBtn.addEventListener('mouseenter', function () {
      if (window.innerWidth >= 768) {
        noBtn.remove();
        mostrarSegundoMensaje();
      }
    });

    noBtn.addEventListener('click', function () {
      if (window.innerWidth < 768) {
        mostrarSegundoMensaje();
      }
    });

    siBtn.addEventListener('click', function () {
      mostrarTercerMensaje();
    });
  }

  function asignarListenersSegundoMensaje() {
    const siBtns = document.querySelectorAll('#mensaje .siBtn');

    siBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        mostrarTercerMensaje();
      });
    });
  }
  function mostrarCorazones() {
    const corazonesContainer = document.createElement('div');
    corazonesContainer.classList.add('corazones-container');
    document.body.appendChild(corazonesContainer);

    for (let i = 0; i < 30; i++) {
      const corazon = document.createElement('div');
      corazon.classList.add('corazon');
      corazon.style.left = Math.random() * window.innerWidth + 'px';
      corazon.style.animationDuration = Math.random() * 2 + 1 + 's';
      corazon.style.opacity = Math.random();
      corazonesContainer.appendChild(corazon);
    }
  }
  mostrarPrimerMensaje();
});
