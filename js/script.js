//-----------------memu-item-------------

const header = document.querySelector("header")
window.addEventListener("scroll",function(){
    x = window.pageYOffset
    if(x>0){
        header.classList.add("sticky")
    }
    else {
        header.classList.remove("sticky")
    }
})
//-----------------menu-----------slideber-cartegory-------
const itemslederbar = document.querySelectorAll(".cartegory-left-li")
itemslederbar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block")
    })
})