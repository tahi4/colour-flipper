const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const Btn = document.getElementById("btn")
console.log(Btn)
const colors = document.querySelector(".color")


Btn.addEventListener("click", () => {
    let HexColors = "#"
    for(let i = 0; i < 6; i++){
    HexColors += hex[RandomNumber(i)]
    }
    document.body.style.backgroundColor = HexColors
    colors.textContent = HexColors
})

const RandomNumber = () => {
    return Math.floor(Math.random()*hex.length)
}