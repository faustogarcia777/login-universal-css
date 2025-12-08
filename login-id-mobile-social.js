document.addEventListener("DOMContentLoaded", () => {
  // Decide which icon to use
  const passkeyIcon = window.isIOSFaceID
    ? "https://faustogarcia777.github.io/login-universal-css/face-id.svg"
    : "https://cdn5.coppel.com/Auth0/SVG/fingerprint.svg";

  // Inject the mobile buttons
  document.getElementById("mobile-social-container").innerHTML = `
    <div class="mobile-social-container">
      <div class="mobile-social-buttons">

        <button class="mobile-social-button" onclick='socialButtonTag("Passkey"),loginWithSocial("passkey")'>
          <img class="mobile-social-icon" src="${passkeyIcon}" alt="Passkey">
        </button>

        <button class="mobile-social-button" onclick='socialButtonTag("Google"),loginWithSocial("google")'>
          <img class="mobile-social-icon" src="https://cdn5.coppel.com/Auth0/SVG/google-icon.svg" alt="Google">
        </button>

        <button class="mobile-social-button" onclick='socialButtonTag("Microsoft"),loginWithSocial("windowslive")'>
          <img class="mobile-social-icon" src="https://cdn5.coppel.com/Auth0/SVG/microsoft-icon.svg" alt="Microsoft">
        </button>

        <button class="mobile-social-button" onclick='socialButtonTag("Apple"),loginWithSocial("apple")'>
          <img class="mobile-social-icon" src="https://cdn5.coppel.com/Auth0/SVG/apple-icon.svg" alt="Apple">
        </button>

      </div>
    </div>
  `;
});


