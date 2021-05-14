input.onButtonPressed(Button.A, function () {
    guess = 0
    basic.showString("My guess is")
    radio.sendNumber(guess)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
let guess = 0
radio.setGroup(1)
basic.forever(function () {
	
})
