document.addEventListener('DOMContentLoaded', function () {
  const auth0Wrapper = document.getElementById('auth0-hidden-wrapper');
  try {
    if (!auth0Wrapper) return;
    auth0Wrapper.innerHTML = `
      <main id="main-unblock" style="margin:0 auto;padding:0 16px;min-height:calc(100vh - 118px);display:flex;justify-content:center;align-items:center;overflow:hidden;">
        <div id="unblock-container" style="display:flex;width:375px;padding:24px;flex-direction:column;justify-content:center;align-items:center;gap:24px;margin:auto;box-sizing:border-box;">
          
          <div id="check-container-unblock" style="display:flex;width:150px;height:150px;padding:35px;justify-content:center;align-items:center;">
            <div id="check-mark-unblock" style="display:flex;width:80px;height:80px;padding:2px;align-items:center;gap:10px;">
              <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M38 76C58.9869 76 76 58.9869 76 38C76 17.0132 58.9869 0 38 0C17.0132 0 0 17.0132 0 38C0 58.9869 17.0132 76 38 76ZM57.0152 28.3291C58.4196 26.5732 58.1351 24.0112 56.379 22.6065C54.6234 21.2018 52.0612 21.4865 50.6565 23.2423L31.4074 47.3037L23.7072 41.5286C21.9083 40.1794 19.3563 40.544 18.0072 42.3429C16.6581 44.1417 17.0226 46.6937 18.8215 48.0429L29.6786 56.1857C31.4379 57.5054 33.927 57.1889 35.3008 55.4719L57.0152 28.3291Z"
                  fill="#0ABF4F" />
              </svg>
            </div>
          </div>

          <div id="title-container-unblock" style="display:flex;flex-direction:column;align-items:flex-start;gap:16px;align-self:stretch;">
            <h3 id="title-unblock" style="color:#081754;text-align:center;font-family:Poppins,sans-serif;font-size:20px;font-weight:600;line-height:130%;margin:0 auto;width:100%;">Desbloqueaste tu cuenta</h3>
          </div>

          <div id="button-container-unblock" style="display:flex;align-items:flex-start;align-self:stretch;">
            <button id="button-unblock" type="button" style="display:flex;padding:12px 24px;justify-content:center;align-items:center;gap:8px;flex:1 0 0;border:none;border-radius:999px;background:#1C42E8;color:#fff;cursor:pointer;">
              <span id="button-unblock-text" style="font-family:Poppins,sans-serif;font-size:14px;font-weight:700;line-height:150%;">Iniciar sesión</span>
            </button>
          </div>

        </div>
      </main>
    `;
    const button = auth0Wrapper.querySelector('#button-unblock');
    if (button) {
      button.addEventListener('click', function () {
        const nativeBtn = document.querySelector('button[name="action"][value="default"]');
        const form = nativeBtn ? nativeBtn.closest('form') : null;
        if (form) {
          if (typeof form.requestSubmit === 'function') form.requestSubmit(nativeBtn);
          else form.submit();
        } else {
          window.location.href = 'https://www.coppel.com/auth0/login';
        }
      });
    }
  } catch (error) {
  } finally {
    if (auth0Wrapper) {
      auth0Wrapper.style.removeProperty('display');
      auth0Wrapper.style.setProperty('height', 'inherit', 'important');
    }
  }
});


