const images = ['/GIT-raff/OIP.jpeg', '/GIT-raff/feathers-6f-o.jpeg', '/GIT-raff/3.jpg', '/GIT-raff/4.jpeg'];
const Deesc = ['je  propose cette image contient diff plumes ', 'cette photo montre plusieur type de color', 'des plumes d un oiseau rare  ', 'une plume vert '];
let ActiveImageIndex = 0;

const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const slider = document.getElementById('slider-img');
const descText = document.getElementById('desc');
const indexText = document.getElementById('index');


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