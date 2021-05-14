input.onButtonPressed(Button.A, function () {
    guess = 0
    radio.sendNumber(guess)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
let guess = 0
radio.setGroup(1)
