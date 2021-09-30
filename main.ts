basic.forever(function () {
    for (let X = 0; X <= 4; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            led.plot(X, X)
            basic.pause(100)
            led.unplot(X, X)
            basic.pause(100)
        }
    }
    basic.clearScreen()
})
