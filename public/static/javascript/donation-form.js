const steps = document.querySelectorAll('form .step');
const prevBtn= document.querySelectorAll('form .previous-btn');
const nextBtn = document.querySelectorAll('form .next-btn');


prevBtn.forEach((btn)=>{

    btn.addEventListener('click', function(event){

        const target = event.target.parentElement.parentElement;

        target.classList.remove('active');
        
        target.previousElementSibling.classList.add('active');

    });

});

nextBtn.forEach((btn)=>{


    btn.addEventListener('click', function (event){

        const target = event.target.parentElement.parentElement;

        target.classList.remove('active');
        target.nextElementSibling.classList.add('active');


    });
});



