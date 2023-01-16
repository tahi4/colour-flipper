const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]

const color = document.querySelector(".color")
console.log(color)
const Btn = document.getElementById("btn")
console.log(Btn)

Btn.addEventListener("click", () => {
    
        let randomColour = RandomNumber()
         document.body.style.backgroundColor = colors[randomColour]
         color.textContent = colors[randomColour]
    
})

const RandomNumber = () =>  {
    return Math.floor(Math.random()*colors.length);
}
//did an arrow function and a named arrow function 
