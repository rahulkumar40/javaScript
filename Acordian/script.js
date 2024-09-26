// Select all the items
const items = document.querySelectorAll(".item");
const openIcon = document.querySelector(".icon-open")
const closeIcon = document.querySelector(".icon-close")


let i=0;
items.forEach(item => {
    const hiddenBox = item.querySelector('.hidden-box'); //
    
    item.addEventListener("click", () => {
         hiddenBox.classList.toggle('active');
    });
});