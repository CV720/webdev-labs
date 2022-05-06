/*
    Hints:
    1. Attach click event handlers to all four of the
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag
       based on the button that was clicked.
*/
const make_default = () => {
  document.body.classList.remove("desert", "ocean", "high-contrast");
}
const make_desert = () => {
  document.body.classList.remove("ocean", "high-contrast");
  document.body.classList.add("desert")
}
const make_ocean = () => {
  document.body.classList.remove("desert", "high-contrast");
  document.body.classList.add("ocean")
}
const make_contrast = () => {
  document.body.classList.remove("ocean", "desert");
  document.body.classList.add("high-contrast")

}
document.querySelector("#default").addEventListener('click', make_default);
document.querySelector("#desert").addEventListener('click', make_desert);
document.querySelector("#ocean").addEventListener('click', make_ocean);
document.querySelector("#high-contrast").addEventListener('click', make_contrast);
