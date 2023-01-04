trailer = document.querySelector('.trailer');

trailer.addEventListener("click", function () {
  console.log(trailer);
  trailer_model.classList.toggle("show");
  formContainer.classList.toggle("show");
});