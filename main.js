let screen = document.getElementById("screen")
let btns = document.querySelectorAll(".btn")
let red = document.querySelector(".btn-clear")
let green = document.querySelector(".btn-eq")
let back = document.querySelector(".btn-back")

btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        let text = btn.textContent

        if (text === "÷") screen.textContent = screen.textContent + "/"
        else if (text === "×") screen.textContent = screen.textContent + "*"
        else if (text === "−") screen.textContent = screen.textContent + "-"
        else if (text === "%") screen.textContent = screen.textContent + "/100"
        else screen.textContent = screen.textContent + text
    })
})

red.addEventListener("click", function() {
    screen.textContent = "0"
})

green.addEventListener("click", function() {
    screen.textContent = eval(screen.textContent)
})

back.addEventListener("click", function() {
    screen.textContent = screen.textContent.slice(0, -1)
})

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        screen.textContent = eval(screen.textContent)
    } else if (event.key === "Backspace") {
        screen.textContent = screen.textContent.slice(0, -1)
    } else if (event.key === "Escape") {
        screen.textContent = "0"
    } else if (event.key === "0" || event.key === "1" || event.key === "2" ||
               event.key === "3" || event.key === "4" || event.key === "5" ||
               event.key === "6" || event.key === "7" || event.key === "8" ||
               event.key === "9" || event.key === "+" || event.key === "-" ||
               event.key === "*" || event.key === "/" || event.key === ".") {
        screen.textContent = screen.textContent + event.key
    }
})
