document.addEventListener("keydown", e => {
  if (e.which === 9) {
    document.body.classList.add("keyboard-user");
    window.keyboardUser = true;
  }
});
