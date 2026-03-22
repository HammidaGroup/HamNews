const menu = document.querySelector(".menu-div")
const menuBtn = document.querySelector(".menu-btn")
 
var count = 0
if(count==0)menu.style.display="none"

menuBtn.addEventListener("click",()=>{
    // console.log("clicked");
    if (count==0) {
        menu.style.display=""
        // ++count
        count++
    }else{
        menu.style.display="none"
    count--
    }

})

