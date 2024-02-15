const button =document.querySelector("button")
const body =document.querySelector("body")
const color =['red','blue','white','pink','yellow']
body.style.background='violet'

button.addEventListener('click',()=>{
  const colorIndex=parseInt(Math.random()*color.length)
  body.style.backgroundColor=color[colorIndex]
})


