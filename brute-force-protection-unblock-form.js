document.addEventListener('DOMContentLoaded', function () {
  const auth0Wrapper = document.getElementById('auth0-hidden-wrapper');

  try {

    auth0Wrapper.innerHTML = '';

    auth0Wrapper.innerHTML = `
      <main id="main-unblock">
        <div id="unblock-container">
          
          <!-- Check container -->
          <div id="check-container-unblock">
            <div id="check-mark-unblock">
              <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M38 76C58.9869 76 76 58.9869 76 38C76 17.0132 58.9869 0 38 0C17.0132 0 0 17.0132 0 38C0 58.9869 17.0132 76 38 76ZM57.0152 28.3291C58.4196 26.5732 58.1351 24.0112 56.379 22.6065C54.6234 21.2018 52.0612 21.4865 50.6565 23.2423L31.4074 47.3037L23.7072 41.5286C21.9083 40.1794 19.3563 40.544 18.0072 42.3429C16.6581 44.1417 17.0226 46.6937 18.8215 48.0429L29.6786 56.1857C31.4379 57.5054 33.927 57.1889 35.3008 55.4719L57.0152 28.3291Z"
                  fill="#0ABF4F" />
              </svg>
            </div>
          </div>

          <!-- Title -->
          <div id="title-container-unblock">
            <h3 id="title-unblock">Haz clic para desbloquear tu cuenta</h3>
          </div>

          <!-- Button -->
          <div id="button-container-unblock">
            <button id="button-unblock">
              <span id="button-unblock-text">Desbloquear cuenta</span>
            </button>
          </div>

        </div>
      </main>
    `;

    const button = auth0Wrapper.querySelector('#button-unblock');
    if (button) {
      button.addEventListener('click', function () {
        window.location.href = 'https://www.coppel.com/auth0/login';
      });
    }

  } catch (error) {
    console.error('Error rendering brute-force unblock success:', error);
  } finally {
    if (auth0Wrapper) {
      auth0Wrapper.style.removeProperty('display');
      auth0Wrapper.style.setProperty('height', 'inherit', 'important');
    }
  }
});
