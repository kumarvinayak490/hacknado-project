const toggleBtn = document.querySelector('.toggle-btn');
const sideBar = document.querySelector('.side-bar');
const toggleCloseBtn = document.querySelector('.side-bar-close-btn');




toggleBtn.addEventListener('click', function (){


    sideBar.classList.toggle('show-sidebar');


    console.log('hello');
})

toggleCloseBtn.addEventListener('click', function(){

    sideBar.classList.toggle('show-sidebar');

});
