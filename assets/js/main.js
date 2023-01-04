//load
let loading = document.querySelector(".loading");
window.addEventListener("load", () => {
  loading.style.display = "none";
});

trailer_model = document.querySelector('.trailer-model');

//form
let closeBtn = document.querySelectorAll(".form__close");
let formContainer = document.querySelector(".form-container");
for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", function () {
    formLogin.classList.remove("show");
    formRegister.classList.remove("show");
    formForgetpass.classList.remove("show");
    formContainer.classList.remove("show");
    if(trailer_model != undefined) {
      trailer_model.classList.remove("show");
  
    }
  });
}


// trailer = document.querySelector('.trailer');
// trailer_model = document.querySelector('.trailer-model');
// trailer.addEventListener("click", function () {
//   trailer_model.classList.toggle("show");
//   formContainer.classList.toggle("show");
// });

formContainer.addEventListener("click", () => {
  formContainer.classList.remove("show");
  formLogin.classList.remove("show");
  formRegister.classList.remove("show");
  formForgetpass.classList.remove("show");
  sideBar.classList.remove("show");
  menuBtn.classList.remove("active");
  if(trailer_model != null) {
    trailer_model.classList.remove("show");

  }
});

//function-form
let loginBtn = document.querySelector(".header__content--login");
let formLogin = document.querySelector(".form-login");

let formRegister = document.querySelector(".form-register");
let linkRegister = document.querySelector("#register");
linkRegister.addEventListener("click", function () {
  formLogin.classList.remove("show");
  formRegister.classList.add("show");
});

let linkLogin = document.querySelector("#login");
linkLogin.addEventListener("click", function () {
  formLogin.classList.add("show");
  formRegister.classList.remove("show");
});




let formForgetpass = document.querySelector(".form-forgetpass");
let checkForgot = document.querySelector(".check__forgot");
checkForgot.addEventListener("click", function () {
  formLogin.classList.remove("show");
  formRegister.classList.remove("show");
  formForgetpass.classList.add("show");
});

//loginbtn
loginBtn.addEventListener("click", function () {
  formLogin.classList.toggle("show");
  formContainer.classList.toggle("show");
});



let menuBtn = document.querySelector("#menu-btn");
let menuSpan = document.querySelector("#menu-btn span");
let sideBar = document.querySelector(".sidebar");
let menuCloseBtn = document.querySelector("#menu-close-btn");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  sideBar.classList.toggle("show");
  formContainer.classList.toggle("show");
});
menuCloseBtn.addEventListener("click", function () {
  menuBtn.classList.remove("active");
  sideBar.classList.remove("show");
  formContainer.classList.remove("show");
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    prevEl: ".pre-btn",
    nextEl: ".nxt-btn",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    750: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 4.5,
      spaceBetween: 40,
    },
    1500: {
      slidesPerView: 4.5,
      spaceBetween: 30,
    },
  },
});

const filmList = document.querySelectorAll(".oneFilm");
const typeBtns = document.querySelectorAll(".type");
// console.log(typeBtns);

typeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const type = btn.getAttribute("data1");
    j = 0;
    while(j < typeBtns.length) {
      if(typeBtns[j].className == 'type active') {
       typeBtns[j].className = 'type'
      }
      j++;
    }
    btn.classList.add("active");
    filmList.forEach((item) => {
      if (type == "all" || item.getAttribute("data1") == type)
        item.classList.remove("hide");
      else item.classList.add("hide");
    });
  });
});





