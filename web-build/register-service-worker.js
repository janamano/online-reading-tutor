/* eslint-env browser */

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/expo-service-worker.js", { scope: "/" })
      // eslint-disable-next-line no-unused-vars
      .then((info) => {
        // console.info('Registered service-worker', info);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.info("Failed to register service-worker", error);
      });
  });
}
