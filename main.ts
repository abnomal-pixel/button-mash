input.onButtonPressed(Button.A, function () {
    score += -0.2
    paint()
})
input.onButtonPressed(Button.B, function () {
    score += 0.2
    paint()
})
function paint () {
    basic.clearScreen()
    led.plot(score, 2)
    if (score <= 0) {
        basic.showString("A WINS AND IS A SIGMA!")
        score = 2
    } else if (score >= 4) {
        basic.showString("B WINS AND IS A SIGMA!")
        score = 2
    }
}
let score = 0
score = 2
paint()
