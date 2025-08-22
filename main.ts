function display_age(age: number) {
    let i: number;
    basic.clearScreen()
    //  Decenies
    for (i = 0; i < Math.trunc(age / 10); i++) {
        console.log("i=" + ("" + i))
        led.plot(i % 5, i / 5)
    }
    //  Annees
    for (i = 0; i < age % 10; i++) {
        led.plot(i % 5, i / 5 + 3)
    }
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    age = Math.max(0, age - 1)
    display_age(age)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    age = Math.min(age + 1, 99)
    display_age(age)
})
let age = 15
display_age(age)
