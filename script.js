const menuBtn = document.querySelector('.menu-btn'); 
const mobileMenu = document.querySelector('.mobile-menu'); 
const panel = document.querySelector('.right-side-nav'); 
const closeBtn = document.querySelector('.close-btn'); 
 
menuBtn.addEventListener('click', () => { 
    menuBtn.style.display = 'none';  
    panel.style.display = 'block';    
}); 
 
closeBtn.addEventListener('click', () => { 
    menuBtn.style.display = 'block'; 
    panel.style.display = 'none'; 
}); 





function toggleDetails(button) {
  const details = button.nextElementSibling;
  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";
    button.textContent = "Скрыть";
  } else {
    details.style.display = "none";
    button.textContent = "Подробнее";
  }
}

let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${-slideIndex * 100}%)`;
  }
}

function addToCart(button) {
  const countSpan = button.nextElementSibling.nextElementSibling;
  let count = parseInt(countSpan.textContent);
  count++;
  countSpan.textContent = count;
}

function removeFromCart(button) {
  const countSpan = button.nextElementSibling;
  let count = parseInt(countSpan.textContent);
  if (count > 0) {
    count--;
    countSpan.textContent = count;
  }
}



