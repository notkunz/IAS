
function openModal(id){ document.getElementById(id).style.display="block"; }
function closeModal(id){ document.getElementById(id).style.display="none"; }
window.onclick = e => {
  document.querySelectorAll('.modal').forEach(m=>{
    if(e.target===m) m.style.display="none";
  });
}



let productIndex = 0;
const productSlides = document.querySelectorAll(".product-slide");

setInterval(() => {
  productSlides[productIndex].classList.remove("active");
  productIndex = (productIndex + 1) % productSlides.length;
  productSlides[productIndex].classList.add("active");
}, 3000); // change every 3 seconds
