


let index = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

function showSlide(i){
  index = i;
  slides.style.transform = `translateX(-${index * 230}px)`;

  dots.forEach(d=>d.classList.remove("active"));
  dots[index].classList.add("active");
}

dots.forEach((dot,i)=>{
  dot.addEventListener("click", ()=>showSlide(i));
});

setInterval(()=>{
  index = (index + 1) % dots.length;
  showSlide(index);
},3000);






