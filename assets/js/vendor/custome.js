


let index1 = 0;
const slides = document.querySelector(".slides");
const dots1 = document.querySelectorAll(".dot");

function showSlide(i){
  index1 = i;
  slides.style.transform = `translateX(-${index1 * 230}px)`;

  dots1.forEach(d=>d.classList.remove("active"));
  dots1[index1].classList.add("active");
}

dots1.forEach((dot,i)=>{
  dot.addEventListener("click", ()=>showSlide(i));
});

setInterval(()=>{
  index1 = (index1 + 1) % dots1.length;
  showSlide(index1);
},3000);




const slider=document.querySelector(".tech-slider");
let isDown=false,startX,scrollLeft;

slider.addEventListener("mousedown",e=>{
  isDown=true;
  startX=e.pageX-slider.offsetLeft;
  scrollLeft=slider.scrollLeft;
});

slider.addEventListener("mouseleave",()=>isDown=false);
slider.addEventListener("mouseup",()=>isDown=false);

slider.addEventListener("mousemove",e=>{
  if(!isDown) return;
  e.preventDefault();
  const x=e.pageX-slider.offsetLeft;
  slider.scrollLeft=scrollLeft-(x-startX);
});



 const customerAwardTrack = document.getElementById("awardTrack");
    const customerAwardCards = document.querySelectorAll(".award-card");

    let customerScrollPosition = 0;
    const customerGap = 20;

    // calculate single card width
    const customerCardWidth =
        customerAwardCards[0].offsetWidth + customerGap;

    // duplicate cards for infinite effect
    customerAwardCards.forEach(card => {
        customerAwardTrack.appendChild(card.cloneNode(true));
    });

    function customerAutoScroll() {
        customerScrollPosition += 1;

        // move slider
        customerAwardTrack.style.transform =
        `translateX(-${customerScrollPosition}px`;

        // reset smoothly when half scrolled
        if (
        customerScrollPosition >=
        customerCardWidth * customerAwardCards.length
        ) {
        customerScrollPosition = 0;
        customerAwardTrack.style.transform = `translateX(0px)`;
        }
    }

    // START AUTO SCROLL
    setInterval(customerAutoScroll, 20);
   



   
        const hamburger = document.getElementById("hamburger");
        const menu = document.querySelector(".menu");

        hamburger.addEventListener("click", () => {
            menu.classList.toggle("active");
            document.body.classList.toggle("menu-open");
        });

        // Mobile accordion
        document.querySelectorAll(".menu > li > a").forEach(link => {
            link.addEventListener("click", e => {
            const mega = link.nextElementSibling;
            if (window.innerWidth <= 768 && mega?.classList.contains("mega-menu")) {
                e.preventDefault();
                link.parentElement.classList.toggle("active");
            }
            });
        });
  