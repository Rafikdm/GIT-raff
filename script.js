
let ActiveImageIndex = 0;

const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const slider = document.getElementById('slider-img');
const descText = document.getElementById('desc');
const indexText = document.getElementById('index');



slider.setAttribute('src', data[ActiveImageIndex].image);
descText.innerText = data[ActiveImageIndex].title;
indexText.textContent = " " + ActiveImageIndex;


leftBtn.addEventListener('click', function () {
    
    if (ActiveImageIndex === data.length - 1) {  
        rightBtn.setAttribute('disabled', true);
        console.log('atteint le maximum ');
    } else {
        leftBtn.removeAttribute("disabled");
        ActiveImageIndex++;
    }
    slider.setAttribute('src', data[ActiveImageIndex].image);
    descText.innerText = data[ActiveImageIndex].title;
    indexText.textContent = " " + ActiveImageIndex;
    // console.log('Left button clicked. ', object[ActiveImageIndex]);
});


rightBtn.addEventListener('click', function () {
    

   
    if (ActiveImageIndex === data.length - 1) {
        rightBtn.setAttribute('disabled',true)
        console.log('atteint le maximum ')
      
     } else {
         leftBtn.removeAttribute("disabled")
         ActiveImageIndex++;}

         slider.setAttribute('src', data[ActiveImageIndex].image);
         descText.innerText = data[ActiveImageIndex].title;
    indexText.textContent = " " + ActiveImageIndex;

    // console.log('Right button clicked. ', object[ActiveImageIndex]);
});




todoBtn.addEventListener('click', function() {
    console.log("Button Clicked");
    console.log(todoInput.value);

    // Créer le <li>
    const NewElement = document.createElement('li');
    NewElement.innerText = todoInput.value;

    // Créer le bouton delete
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Supprimer";
    deleteBtn.style.marginLeft = '10px';

    // Ajouter un event listener pour supprimer le <li>
    deleteBtn.addEventListener('click', function() {
        NewElement.remove();
    });

    // Ajouter le bouton au <li>
    NewElement.appendChild(deleteBtn);

    // Ajouter le <li> à la liste
    todoUl.appendChild(NewElement);
});
