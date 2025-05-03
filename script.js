
let ActiveImageIndex = 0;

const gchBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const slider = document.getElementById('slider-img');
const descText = document.getElementById('desc');
const indexText = document.getElementById('index');


let menuIsHidden=true

menubtn.addEventListener('click', function(){
    
    console.log("click",menuIsHidden)
    console.log(menu.className)

if(menuIsHidden){
    menu.className = menu.className.replace('hidden', '  ');
}else{
    menu.className = menu.className + ' hidden'
}


menuIsHidden= !menuIsHidden

})


slider.setAttribute('src', images[ActiveImageIndex]);

descText.innerText = Deesc[ActiveImageIndex];

leftBtn.addEventListener('click', function () {
    
    if (ActiveImageIndex === 0 ) {
        leftBtn.setAttribute('disabled',true)
        console.log('atteint le Minimum ')
    }
     else {
        rightBtn.removeAttribute("disabled")
        ActiveImageIndex--;
    }

    indexText.textContent = " "+[ActiveImageIndex];
   
    slider.setAttribute('src', images[ActiveImageIndex]);

    descText.innerText =  Deesc[ActiveImageIndex];
    
    console.log('Left button clicked. ', images[ActiveImageIndex]);
    console.log('Left button clicked. ', Deesc[ActiveImageIndex]);
});


rightBtn.addEventListener('click', function () {
    
    if (ActiveImageIndex === images.length - 1) {
       rightBtn.setAttribute('disabled',true)
       console.log('atteint le maximum ')
     
    } else {
        leftBtn.removeAttribute("disabled")
        ActiveImageIndex++;
       
        
    }
    document.getElementById("index").textContent = " "+[ActiveImageIndex];
    indexText.textContent = " "+[ActiveImageIndex];
   
    slider.setAttribute('src', images[ActiveImageIndex]);

    descText.innerText =  Deesc[ActiveImageIndex];
    console.log('Right button clicked. New index:', images[ActiveImageIndex]);
    console.log('Left button clicked. ', Deesc[ActiveImageIndex]);
});
