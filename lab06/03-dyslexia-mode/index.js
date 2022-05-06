/*
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const make_toggle = () => {
  document.body.classList.toggle("dyslexia");
}
document.querySelector("#dyslexia-toggle").addEventListener('click', make_toggle);
