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
    "People will forget what you said. People will forget what you did. But people will never forget how you made them feel"
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
}
let nota = 0
let abcedario: string[] = []
let lista_de_texto = ""
let lista_quotes: string[] = []
let letra = ""
music.changeTempoBy(200)
basic.forever(function () {
	
})
