(function(){
    
    const sliders = [...document.querySelectorAll('.servicios_body')];
    const buttonNext = document.querySelector('.bi-arrow-right');
    const buttonBefore = document.querySelector('.bi-arrow-left');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.servicios_body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;


        sliders[Number(currentTestimony)-1].classList.remove('servicios_body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('servicios_body--show');

    }

})();