welcomeScreenShown = 0

def on_forever():
    global welcomeScreenShown
    basic.pause(100)
    basic.show_icon(IconNames.HAPPY)
    basic.pause(1000)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    welcomeScreenShown = 0
basic.forever(on_forever)
