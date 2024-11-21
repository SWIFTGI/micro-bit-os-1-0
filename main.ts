function welcome () {
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    welcomeScreenShown = 1
}
let welcomeScreenShown = 0
welcomeScreenShown = 0
basic.forever(function () {
    while (welcomeScreenShown == 0) {
        basic.pause(100)
        welcome()
    }
})
