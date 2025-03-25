const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',checkBoxes);

checkBoxes();

function checkBoxes(){
    const triggerBottom = window.innerHeight /5 * 4;

    boxes.forEach((ele)=>{
        const boxTop = ele.getBoundingClientRect().top;
        if(boxTop < triggerBottom){
            ele.classList.add('show');
        }else{
            ele.classList.remove('show'); 
        }
    })
}