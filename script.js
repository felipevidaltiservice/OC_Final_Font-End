function topo(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
window.addEventListener("scroll", function(){  
  var header = document.querySelector("header");
  var btn = document.querySelector("button");
  header.classList.toggle("sticky", window.scrollY > 200);
  btn.classList.toggle("show", window.scrollY > 200);   
})