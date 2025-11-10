document.addEventListener("DOMContentLoaded", function () {
  const hiddenWrapper = document.getElementById("auth0-hidden-wrapper");
  try {

    const main = document.querySelector("main._widget");
    if (!main) return;

    main.id = "main-unblock";
    main.className = "";

    const section = main.querySelector("section");
    if (section) {
      section.id = "unblock-container";
      section.className = "";
    }


    [
      "div.ca085db1e.c34b211bf",
      "div.c16cfdf3e.ccd12cd85",
      "div.c96e14606"
    ].forEach(sel =>
      document.querySelectorAll(sel).forEach(el => (el.style.all = "unset"))
    );


    if (section) {
      const checkContainer = document.createElement("div");
      checkContainer.id = "check-container-unblock";
      checkContainer.innerHTML = `
        <div id="check-mark-unblock">
          <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M38 76C58.9869 76 76 58.9869 76 38C76 17.0132 58.9869 0 38 0C17.0132 0 0 17.0132 0 38C0 58.9869 17.0132 76 38 76ZM57.0152 28.3291C58.4196 26.5732 58.1351 24.0112 56.379 22.6065C54.6234 21.2018 52.0612 21.4865 50.6565 23.2423L31.4074 47.3037L23.7072 41.5286C21.9083 40.1794 19.3563 40.544 18.0072 42.3429C16.6581 44.1417 17.0226 46.6937 18.8215 48.0429L29.6786 56.1857C31.4379 57.5054 33.927 57.1889 35.3008 55.4719L57.0152 28.3291Z"
              fill="#0ABF4F"/>
          </svg>
        </div>`;
      section.prepend(checkContainer);
    }

   
    const title = document.querySelector("h3");
    if (title) {
      title.id = "title-unblock";
      title.textContent = "Haz clic para desbloquear tu cuenta";
    }

    const button = document.querySelector('button[name="action"][value="default"]');
    if (button) {
      button.id = "button-unblock";
      button.innerHTML = '<span id="button-unblock-text">Desbloquear cuenta</span>';
    }

  
    document.querySelectorAll("header.c7bbc1178.cf1d3c95e").forEach(el => (el.style.display = "none"));
    const logo = document.getElementById("prompt-logo-center");
    if (logo) logo.style.display = "none";


    const css = `
#main-unblock {
  margin: 0 auto;
  padding: 0 16px;
  min-height: calc(100vh - 118px);
  flex-grow: 1;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
#unblock-container {
  display: flex;
  width: 375px;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin: auto;
  box-sizing: border-box;
}
#check-container-unblock {
  display: flex;
  width: 150px;
  height: 150px;
  padding: 35px;
  justify-content: center;
  align-items: center;
}
#check-mark-unblock {
  display: flex;
  width: 80px;
  height: 80px;
  padding: 2px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}
#title-unblock {
  color: #081754;
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 130%;
  margin: 0 auto;
  width: 100%;
}
#button-unblock {
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border: none;
  border-radius: 999px;
  background: #1C42E8;
  cursor: pointer;
  transition: background 0.2s ease;
}
#button-unblock:hover {
  background: #0f2ecc;
}
#button-unblock-text {
  color: #FFF;
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 150%;
}`;
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
  } catch (err) {
    console.error("Error ejecutando el script:", err);
  } finally {
    if (hiddenWrapper) hiddenWrapper.style.removeProperty("display");
  }
});


