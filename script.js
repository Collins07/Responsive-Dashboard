// add hovered class on selected list item

let list = document.querySelectorAll('.navigation li');
function activelink(){
    list.forEach((item) =>
    item.classList.remove('hovered'));
    item.classList.add('hovered')
}
list.forEach((item) => 
item.addEventListener('mouseover', activelink));