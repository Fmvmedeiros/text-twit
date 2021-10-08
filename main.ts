enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    leitura("teste 1 2 3 d")
})
input.onButtonPressed(Button.B, function () {
    leitura("hello world abcdefghijklm")
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
        basic.showString("" + (letra),5)
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
let letra = ""
let lista_de_texto = ""
music.changeTempoBy(200)
basic.forever(function () {
	
})
