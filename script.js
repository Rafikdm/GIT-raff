const images = ['./book.jpg','./car.jpg','./car2.jpg', './musé.jpg']
const imagetitles =["image1","image2","image3","image4"]
let activeimageIndex = 0;
const menubtn =document.getElementsByClassName('menu')[0]  


const leftbtn = document.getElementById('left-btn')
console.log('left-btn',leftbtn);
const rightbtn = document.getElementById('right-btn')
console.log('right-btn',rightbtn);
const sliderimage = document.getElementById('slider-img')
console.log('slider-img',sliderimage);
const textimg=document.getElementById('text-img')
console.log('text-img', textimg);

textimg.innerText = imagetitles[activeimageIndex]

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

leftbtn.addEventListener('click', function() {
    console.log('left btn clicked !!',activeimageIndex)


    if(        activeimageIndex === 0 ){
        leftbtn.setAttribute('disabled' , true)
}else{
     rightbtn.removeAttribute('disabled')
    activeimageIndex --
    console.log('left btn clicked !!',images[activeimageIndex])
    sliderimage.setAttribute('src',images[activeimageIndex])

    textimg.innerText = (imagetitles[activeimageIndex])
}  

}

)

rightbtn.addEventListener('click', function () {
    console.log('right btn clicked !! ', activeimageIndex)


    if(        activeimageIndex === images.length -1 ){
        rightbtn.setAttribute('disabled' , true)
}else{
    leftbtn.removeAttribute('disabled')
    activeimageIndex++
    console.log('right btn clicked !!',images[activeimageIndex])
    sliderimage.setAttribute('src',images[activeimageIndex])

    textimg.innerText = (imagetitles[activeimageIndex])
}
}
)



