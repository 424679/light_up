function 燈數 (num: number) {
    if (num < 6) {
        X = num - 1
        Y = 0
    } else if (num >= 6 && num < 9) {
        X = 4
        Y = num - 5
    } else if (num >= 9 && num < 14) {
        X = 13 - num
        Y = 4
    } else if (num >= 14 && num <= 16) {
        X = 0
        Y = 17 - num
    } else {
        led.plot(X, Y)
    }
}
let Y = 0
let X = 0
let a = 0
basic.forever(function () {
    a += 1
    燈數(a)
    basic.pause(100)
})
