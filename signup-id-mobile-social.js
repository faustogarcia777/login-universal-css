document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("mobile-social-container").innerHTML = `
<div class="mobile-social-container">
  <div class="mobile-social-buttons">

    <!-- Google -->
    <button 
      class="mobile-social-button"
      onclick='socialCreateButtonTag("Google"),signupWithSocial("google")'
      data-interaccionNombre="Continuar social"
      page="/crear-cuenta"
      cuentaTipo="Google"
      canal="{{application.metadata.tag}}"
      data-evento="crearCuenta"
    >
      <img class="mobile-social-icon" src="https://cdn5.coppel.com/Auth0/SVG/google-icon.svg" alt="Google">
    </button>

    <!-- Microsoft -->
    <button 
      class="mobile-social-button"
      onclick='socialCreateButtonTag("Microsoft"),signupWithSocial("windowslive")'
      data-interaccionNombre="Continuar social"
      page="/crear-cuenta"
      cuentaTipo="Microsoft"
      canal="{{application.metadata.tag}}"
      data-evento="crearCuenta"
    >
      <img class="mobile-social-icon" src="https://cdn5.coppel.com/Auth0/SVG/microsoft-icon.svg" alt="Microsoft">
    </button>

    <!-- Apple -->
    <button 
      class="mobile-social-button"
      onclick='socialCreateButtonTag("Apple"),signupWithSocial("apple")'
      data-interaccionNombre="Continuar social"
      page="/crear-cuenta"
      cuentaTipo="Apple"
      canal="{{application.metadata.tag}}"
      data-evento="crearCuenta"
    >
      <img class="mobile-social-icon" src="https://cdn5.coppel.com/Auth0/SVG/apple-icon.svg" alt="Apple">
    </button>

  </div>
</div>
  `;
});
