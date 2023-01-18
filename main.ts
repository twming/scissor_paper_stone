input.onButtonPressed(Button.A, function () {
    hand = randint(0, 2)
    if (hand == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(lives)
})
input.onButtonPressed(Button.B, function () {
    lives += -1
    basic.showNumber(lives)
})
let hand = 0
let lives = 0
lives = 3
basic.forever(function () {
    if (lives <= 0) {
        while (true) {
            basic.showIcon(IconNames.Sad)
        }
    }
})
