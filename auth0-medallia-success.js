(function () {
  document.addEventListener("DOMContentLoaded", function () {
    try {
        if (window.prompt?.screen?.name === "reset-password-success") {

        const url = new URL(window.location);
        url.searchParams.set("action", "reset-password-success");

        window.history.replaceState({}, "", url);

        console.log("Medallia: parámetro action agregado");
      }
    } catch (err) {
      console.error("Error al agregar parámetro para Medallia:", err);
    }
  });
})();


