input.onButtonPressed(Button.A, function () {
    CutebotPro.distanceRunning(CutebotProOrientation.Advance, 100, CutebotProDistanceUnits.Cm)
})
basic.showNumber(0)
let strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
basic.forever(function () {
    CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0xff0000)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(500)
    CutebotPro.colorLight(CutebotProRGBLight.RGBA, 0x0000ff)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(500)
})
