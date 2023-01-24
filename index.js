const list = document.getElementsByClassName("list");
const listContainer = document.querySelector(".list_container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentValue = 1;

listContainer.addEventListener("click",(e)=>{
    console.log(e.target.innerText);
    currentValue = e.target.innerText;
    
    for(l of list){
        l.classList.remove("active");
    }
    e.target.classList.add("active");
    
})

prevBtn.addEventListener("click",()=>{
    if(currentValue>1){
        for(l of list){
            l.classList.remove('active');
        }
    }
    currentValue--;
    if(currentValue<=0){
        currentValue=1;
    }
    list[currentValue-1].classList.add("active");
})

nextBtn.addEventListener("click",()=>{
    console.log(currentValue);
    if(currentValue<=list.length-1){
        for(l of list){
            l.classList.remove('active');
        }
    }
    
    currentValue++;
    if(currentValue>list.length){
        currentValue=list.length;
    }
    list[currentValue-1].classList.add("active");
})
