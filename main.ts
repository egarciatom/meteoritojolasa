input.onButtonPressed(Button.A, function () {
    jokalari.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    jokalari.move(1)
})
input.onButtonPressed(Button.B, function () {
    jokalari.move(1)
})
let jokalari: game.LedSprite = null
jokalari = game.createSprite(2, 2)
basic.forever(function () {
    basic.pause(randint(1000, 1500))
})
