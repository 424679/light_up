for (let Y = 0; Y <= 4; Y++) {
    for (let X = 0; X <= 4; X++) {
        led.plot(X, Y)
        basic.pause(100)
    }
}
basic.forever(function () {
	
})
