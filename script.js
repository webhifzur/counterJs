let text = document.querySelectorAll(".counter")
let count = 0
let text_arr = Array.from(text)
console.log(text_arr)


text_arr.map((item)=>{
    function counterjs(){
        if(count < item.dataset.target){
            item.innerHTML = count++
        }else{
            item.innerHTML = item.dataset.target
        }  
    }
    let stop = setInterval(function(){
        counterjs()
    },item.dataset.time)
})  


