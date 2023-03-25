window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.subelement[data-key="${e.keyCode}"]`);

  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    console.log(e.propertyName);
  }
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  console.log(key);
  key.classList.add("playing");
  const keys = document.querySelectorAll(".subelement");
  console.log(keys);
  keys.forEach((key) => key.addEventListener("", removeTransition));
});
