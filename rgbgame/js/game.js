
let square = document.querySelectorAll('.square')
let displaycolor = document.getElementById('rightcolor')
let h1 = document.getElementById('bg-color')
let newcolors = document.getElementById('new-color')
let easy = document.getElementById('easy')
let hard = document.getElementById('hard')
let correct=document.getElementById('correct')
let truecolor
let flag = false
let colors = [6]
let level=6

RandomColor(level)
hard.classList.add("btn")
newcolors.addEventListener('click',()=>{
    RandomColor(level)
   
})
easy.addEventListener('click',()=>{
    level=3
    RandomColor(level)
    easy.classList.add("btn")
    hard.classList.remove("btn")

})
hard.addEventListener('click',()=>{
    level=6
    RandomColor(level)
    hard.classList.add("btn")
    easy.classList.remove("btn")

})


function RandomColor(level) {
    let red, green, blue
    newcolors.textContent='New Colors'
    correct.textContent=''
    for (let i = 0; i < level; i++) {
        red = Math.floor(Math.random() * 256)
        green = Math.floor(Math.random() * 256)
        blue = Math.floor(Math.random() * 256)
        colors[i] = `rgb(${red}, ${green}, ${blue})`
        square[i].style.background = colors[i]
        square[i].style.opacity = "1"
    }
    if(level ==3){
        for(i = 3; i <6;i++){
            square[i].style.opacity = "0"
        }
    }
    pickColor(level)
    displaycolor.innerHTML = `${truecolor}`
    h1.style.background = 'steelblue'
}
function pickColor(level) {
    truecolor = colors[Math.floor(Math.random() * level)]
}
for (let i = 0; i < level; i++) {
    square[i].addEventListener('click', () => {
        if (square[i].style.background === truecolor) {
             correct.textContent='correct!'
            flag = false
            for (var j = 0; j < level; j++) {
                square[j].style.background = truecolor
                h1.style.background = truecolor
                square[j].style.opacity = '1'
                flag=true
            }
            newcolors.textContent='Play Again?'
        }
        else{
            square[i].style.opacity = '0'
            correct.textContent='Try Again';
        }

    })

    if (flag) break;

}
