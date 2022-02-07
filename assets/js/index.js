function calculate() {
    var height = (document.getElementById("height").value) / 100
    var weight = window.document.querySelector("input#weight").value

    var imc = Number(weight) / Number(height) ** 2
    var text = ""
    
    if (imc < 18.5) {
        text = 'Você está muito abaixo do peso!'
    } else if (imc < 24.9) {
        text = "Você está no peso ideal."
    } else if (imc < 29.9) {
        text = 'Você está com sobrepeso.'
    } else if (imc < 39.9) {
        text = 'Você está com obesidade.'
    } else {
        text = 'você está com obesidade mórbida.'
    }
    window.document.getElementById("text_return").innerText = text
}