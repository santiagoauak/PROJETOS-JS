
let score = 0
let badscore = 0
Number(badscore)
Number(score)

function selectAnswer(questionID, selectedValue) {
    var buttons = document.querySelectorAll(`#${questionID} input[type="button"]`);
    buttons.forEach(function (btn) { btn.disabled = true; });
    //função que percebe após você selecionar uma questão e desativa a opção de escolher tal questão.


}
let botao1A = document.getElementById('q1A')
let botao1B = document.getElementById('q1B')
let botao1C = document.getElementById('q1C')
let botao1D = document.getElementById('q1D')

let botao2A = document.getElementById('q2A')
let botao2B = document.getElementById('q2B')
let botao2C = document.getElementById('q2C')
let botao2D = document.getElementById('q2D')

let botao3A = document.getElementById('q3A')
let botao3B = document.getElementById('q3B')
let botao3C = document.getElementById('q3C')
let botao3D = document.getElementById('q3D')

let botao4A = document.getElementById('q4A')
let botao4B = document.getElementById('q4B')
let botao4C = document.getElementById('q4C')
let botao4D = document.getElementById('q4D')

let botao5A = document.getElementById('q5A')
let botao5B = document.getElementById('q5B')
let botao5C = document.getElementById('q5C')
let botao5D = document.getElementById('q5D')

let botao6A = document.getElementById('q6A')
let botao6B = document.getElementById('q6B')
let botao6C = document.getElementById('q6C')
let botao6D = document.getElementById('q6D')

let botao7A = document.getElementById('q7A')
let botao7B = document.getElementById('q7B')
let botao7C = document.getElementById('q7C')
let botao7D = document.getElementById('q7D')

let botao8A = document.getElementById('q8A')
let botao8B = document.getElementById('q8B')
let botao8C = document.getElementById('q8C')
let botao8D = document.getElementById('q8D')

let botao9A = document.getElementById('q9A')
let botao9B = document.getElementById('q9B')
let botao9C = document.getElementById('q9C')
let botao9D = document.getElementById('q9D')

let botao10A = document.getElementById('q10A')
let botao10B = document.getElementById('q10B')
let botao10C = document.getElementById('q10C')
let botao10D = document.getElementById('q10D')

botao1A.addEventListener("click", answer1)
botao1B.addEventListener("click", answer1)
botao1C.addEventListener("click", answer1)
botao1D.addEventListener("click", answer1)

botao2A.addEventListener("click", answer2)
botao2B.addEventListener("click", answer2)
botao2C.addEventListener("click", answer2)
botao2D.addEventListener("click", answer2)

botao3A.addEventListener("click", answer3)
botao3B.addEventListener("click", answer3)
botao3C.addEventListener("click", answer3)
botao3D.addEventListener("click", answer3)

botao4A.addEventListener("click", answer4)
botao4B.addEventListener("click", answer4)
botao4C.addEventListener("click", answer4)
botao4D.addEventListener("click", answer4)


botao5A.addEventListener("click", answer5)
botao5B.addEventListener("click", answer5)
botao5C.addEventListener("click", answer5)
botao5D.addEventListener("click", answer5)


botao6A.addEventListener("click", answer6)
botao6B.addEventListener("click", answer6)
botao6C.addEventListener("click", answer6)
botao6D.addEventListener("click", answer6)


botao7A.addEventListener("click", answer7)
botao7B.addEventListener("click", answer7)
botao7C.addEventListener("click", answer7)
botao7D.addEventListener("click", answer7)


botao8A.addEventListener("click", answer8)
botao8B.addEventListener("click", answer8)
botao8C.addEventListener("click", answer8)
botao8D.addEventListener("click", answer8)


botao9A.addEventListener("click", answer9)
botao9B.addEventListener("click", answer9)
botao9C.addEventListener("click", answer9)
botao9D.addEventListener("click", answer9)


botao10A.addEventListener("click", answer10)
botao10B.addEventListener("click", answer10)
botao10C.addEventListener("click", answer10)
botao10D.addEventListener("click", answer10)

function answer1(e) {
    const question = e.srcElement.parentElement.id
    const value = e.srcElement.value
    selectAnswer(question)
    if (question == 'question1' && value == 'A') {
        score++
    } else {
        badscore++
    }

}

function answer2(e) {
    const question = e.srcElement.parentElement.id
    const value = e.srcElement.value
    selectAnswer(question)
    if (question == 'question2' && value == 'B') {
        score++
    } else {
        badscore = badscore + 1
    }
}

function answer3(e) {
    const question = e.srcElement.parentElement.id
    const value = e.srcElement.value
    selectAnswer(question)
    if (question == 'question3' && value == 'A') {
        score++
    } else {
        badscore = badscore + 1

    }
}

function answer4(e) {
    const question = e.srcElement.parentElement.id
    const value = e.srcElement.value
    selectAnswer(question)
    if (question == 'question4' && value == 'D') {
        score++
    } else {
        badscore = badscore + 1

    }
}

function answer5(e) {
    const question = e.srcElement.parentElement.id
    const value = e.srcElement.value
    selectAnswer(question)
    if (question == 'question5' && value == 'B') {
        score++
    } else {
        badscore = badscore + 1

    }
}

function answer6(e) {
    const question = e.srcElement.parentElement.id
    const value = e.srcElement.value
    selectAnswer(question)
    if (question == 'question6' && value == 'C') {
        score++
    } else {
        badscore = badscore + 1

    }
}

function answer7(e) {
    const question = e.srcElement.parentElement.id
    const value = e.srcElement.value
    selectAnswer(question)
    if (question == 'question7' && value == 'D') {
        score++
    } else {
        badscore = badscore + 1
    }
}

function answer8(e) {
    const question = e.srcElement.parentElement.id
    const value = e.srcElement.value
    selectAnswer(question)
    if (question == 'question8' && value == 'B') {
        score++
    } else {
        badscore = badscore + 1

    }
}

function answer9(e) {
    const question = e.srcElement.parentElement.id
    const value = e.srcElement.value
    selectAnswer(question)
    if (question == 'question9' && value == 'C') {
        score++
    } else {
        badscore = badscore + 1

    }
}

function answer10(e) {
    const question = e.srcElement.parentElement.id
    const value = e.srcElement.value
    selectAnswer(question)
    if (question == 'question10' && value == 'A') {
        score++
    } else {
        badscore = badscore + 1

    }
}
function checkAnswers() {
    window.alert(`Você acertou ${score} e errou ${badscore}`);

}
/* function checkAnswers() { //função de checkar cada questão separadamente para ver quais estão corretas e somar o score
    let score = 0
    let badscore = 0


 

        let answer1 = document.getElementById('question1')
    if (answer1 == 'A') {
        console.log('Questão 1: Correta!');
        score++
    } else {
        console.log('Questão 1: Errada!')
        badscore++
    }

    let answer2 = document.getElementById('question2')
    if (answer2 == 'B') {
        console.log('Questão 2: Correta!')
        score++
    } else {
        console.log('Questão 2: Errada!')
        badscore++
    }

    let answer3 = document.getElementById('question3')
    if (answer3 == 'A'){
        console.log('Questão 3: Correta!')
        score++
    } else {
        console.log('Questão 3: Errada!')
        badscore++
    }

    let answer4 = document.querySelector('question4')
    if (answer4 == 'C') {
        console.log('Questão 4: Correta!')
        score++
    } else {
        console.log('Questão 4: Errada!')    
        badscore++
    }

    let answer5 = document.querySelector('question5')
    if (answer5 == 'B') {
        console.log('Questão 5: Correta!')
        score++
    } else {
        console.log('Questão 5: Errada!')  
        badscore++
    }

    let answer6 = document.querySelector('question6')
    if (answer6 == 'C') {
        console.log('Questão 6: Correta!')
        score++
    } else {
        console.log('Questão 6: Errada!')   
        badscore++
    }

    let answer7 = document.querySelector('question7')
    if (answer7 == 'B') {
        console.log('Questão 7: Correta!')
        score++
    } else {
        console.log('Questão 7: Errada!')    
        badscore++
    }


    let answer8 = document.querySelector('question8')
    if (answer8 == 'B') {
        console.log('Questão 8: Correta!')
        score++
    } else {
        console.log('Questão 8: Errada!') 
        badscore++
    }


    let answer9 = document.querySelector('question9')
    if (answer9 == 'D') {
        console.log('Questão 9: Correta!')
        score++
    } else {
        console.log('Questão 9: Errada!')    
        badscore++
    }


    let answer10 = document.querySelector('question10')
    if (answer10 == 'A') {
        console.log('Questão 10: Correta!')
        score++
    } else {
        console.log('Questão 10: Errada!')  
        badscore++ 
    }
    window.alert(`Você acertou ${score} e errou ${badscore}`);
} 
    
*/