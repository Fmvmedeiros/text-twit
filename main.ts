enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    leitura("teste 1 2 3 d")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    lista_quotes = [
    "Anyone who has never made a mistake has never tried anything new",
    "Your attitude, not your aptitude, will determine your altitude",
    "I have not failed. I've just found 10,000 ways that won't work",
    "Why fit in when you were born to stand out?",
    "The secret of getting ahead is getting started",
    "The people who are crazy enough to believe they can change the world are the ones who do",
    "Yesterday is history. Tomorrow is a mystery. Today is a gift. That’s why we call it ‘The Present",
    "If you can dream it, you can do it",
    "It always seems impossible until it’s done",
    "The best way to predict the future is to create it",
    "People will forget what you said. People will forget what you did. But people will never forget how you made them feel",
    "The tougher the fight, the more important the mental attitude",
    "Never let the fear of striking out stop you from playing the game",
    "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice",
    "I don’t love studying. I hate studying. I like learning. Learning is beautiful",
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today",
    "What makes a child gifted and talented may not always be good grades in school, but a different way of looking at the world and learning.",
    "Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.",
    "You don’t learn to walk by following rules. You learn by doing and falling over."
    ]
    leitura(lista_quotes[randint(0, lista_quotes.length)])
})
function leitura (texto: string) {
    lista_de_texto = texto
    for (let índice = 0; índice <= lista_de_texto.length - 1; índice++) {
        letra = lista_de_texto[índice]
        abcedario = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
        ]
        nota = abcedario.indexOf(letra)
        basic.showString("" + (letra),6)
if (nota != -1) {
            music.playTone(200 + 40 * nota, music.beat(BeatFraction.Whole))
        } else {
            music.rest(music.beat(BeatFraction.Whole))
        }
    }
    basic.clearScreen()
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        `)
}
let nota = 0
let abcedario: string[] = []
let lista_de_texto = ""
let lista_quotes: string[] = []
let letra = ""
music.changeTempoBy(200)
basic.forever(function () {
	
})
