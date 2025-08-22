def on_button_pressed_a():
    global age
    age = max(0, age-1)
    display_age(age)

def on_button_pressed_b():
    global age
    age = min(age+1, 99)
    display_age(age)

def display_age(age):
    basic.clear_screen()
    # Decenies
    for i in range(0, int(age/10)):
        led.plot(i%5, i/5)
    # Annees
    for i in range(0, (age%10)):
        led.plot(i%5, i/5+3)


input.on_button_pressed(Button.A, on_button_pressed_a)
input.on_button_pressed(Button.B, on_button_pressed_b)

age = 15
display_age(age)