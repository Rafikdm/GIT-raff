let menu =document.getElementsByClassName('hidden')[0]
const menubtn =document.getElementsByClassName('menu')[0]  

console.log(menu)
console.log(menubtn)


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