const trending = document.querySelectorAll(".trending");
const btn_trending = document.querySelectorAll(".btn-list .btn");


btn_trending.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const type = btn.getAttribute("data");
    j = 0;
    while(j < btn_trending.length) {
      if(btn_trending[j].className == 'btn active') {
        btn_trending[j].className = 'btn'
      }
      j++;
    }
    btn.classList.add("active");
    trending.forEach((item) => {
      if (item.getAttribute("data") == type)
        item.classList.remove("hide");
      else item.classList.add("hide");
    });
  });
});

