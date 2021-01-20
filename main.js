window.onload = function () {
    

    // const main = document.getElementById('main');
    // let index = 0;

    

}

window.index = 0;

const questions = [
    {
        question: 'Ile to 2 + 2?',
        responseA: {
            answer: '4',
            selected: false,
            correct: true
        },
        responseB: {
            answer: '6',
            selected: false,
            correct: false
        },
        responseC: {
            answer: '8',
            selected: false,
            correct: false
        },
    },
    {
        question: 'Jak masz na imie?',
        responseA: {
            answer: 'Maciek',
            selected: false,
            correct: true
        },
        responseB: {
            answer: 'Zbyszek',
            selected: false,
            correct: false
        },
        responseC: {
            answer: 'Włodek',
            selected: false,
            correct: false
        },
        rightResponse: 'B',
    },
    {
        question: 'Jaki jest dziś dzień?',
        responseA: {
            answer: 'Poniedziałek',
            selected: false,
            correct: true
        },
        responseB: {
            answer: 'Wtorek',
            selected: false,
            correct: false
        },
        responseC: {
            answer: 'Środa',
            selected: false,
            correct: true
        },
        correctAnswer: 'Środa'
    }
]

let index = 0;

function onClickButton () {
    const button = document.getElementById('buttonStart');
    button.remove();

    startQuiz();
}

function startQuiz () {
    const main = document.getElementById('main');
    // let index = 0;

    main.innerHTML += `
        <div id="quizContainer">
            <div class="quizCard">
                <p id="question">${questions[window.index].question}</p>
                <div class="answersContainer">
                    <div class="response">
                        <input class="responseInput" type="checkbox" id="responseA" onchange="onChangeCheckbox(this.id, 'A')">
                        <label for="responseA">${questions[window.index].responseA.answer}</label>
                    </div>
                    <div class="response">
                        <input class="responseInput" type="checkbox" id="responseB" onchange="onChangeCheckbox(this.id, 'B')">
                        <label for="responseB">${questions[window.index].responseB.answer}</label>
                    </div>
                    <div class="response">
                        <input class="responseInput" type="checkbox" id="responseC" onchange="onChangeCheckbox(this.id, 'C')">
                        <label for="responseC">${questions[window.index].responseC.answer}</label>
                    </div>
                </div>
            </div>
            <div class="quizButtons">
                <button type="button" class="button" onclick="getNextQuestion()">Dalej</button>
            </div>
        </div>
    `
}

function getNextQuestion () {
    const main = document.getElementById('main');
    window.index += 1;
    let quizContainer = document.getElementById('quizContainer');
    quizContainer.remove();

    main.innerHTML += `
        <div id="quizContainer">
            <div class="quizCard">
                <p id="question">${questions[window.index].question}</p>
                <div class="answersContainer">
                    <div class="response">
                        <input class="responseInput" type="checkbox" id="responseA" onchange="onChangeCheckbox(this.id, 'A')">
                        <label for="responseA">${questions[window.index].responseA.answer}</label>
                    </div>
                    <div class="response">
                        <input class="responseInput" type="checkbox" id="responseB" onchange="onChangeCheckbox(this.id, 'B')">
                        <label for="responseB">${questions[window.index].responseB.answer}</label>
                    </div>
                    <div class="response">
                        <input class="responseInput" type="checkbox" id="responseC" onchange="onChangeCheckbox(this.id, 'C')">
                        <label for="responseC">${questions[window.index].responseC.answer}</label>
                    </div>
                </div>
            </div>
        </div>
    `

    quizContainer = document.getElementById('quizContainer');
    if (window.index === questions.length - 1) {
        quizContainer.innerHTML += `
            <div class="quizButtons">
                <button type="button" class="button" onclick="getPreviousQuestion()">Wstecz</button>
            </div>
            <button type="button" class="button" onclick="endQuiz()">Koniec</button>
        `
    } else {
        quizContainer.innerHTML += `
            <div class="quizButtons">
                <button type="button" class="button" onclick="getPreviousQuestion()">Wstecz</button>
                <button type="button" class="button" onclick="getNextQuestion()">Dalej</button>
            </div>
        `
    }
}

function getPreviousQuestion () {
    const main = document.getElementById('main');
    window.index -= 1;
    let quizContainer = document.getElementById('quizContainer');
    quizContainer.remove();

    main.innerHTML += `
        <div id="quizContainer">
            <div class="quizCard">
                <p id="question">${questions[window.index].question}</p>
                <div class="answersContainer">
                    <div class="response">
                        <input class="responseInput" type="checkbox" id="responseA" onchange="onChangeCheckbox(this.id, 'A')">
                        <label for="responseA">${questions[window.index].responseA.answer}</label>
                    </div>
                    <div class="response">
                        <input class="responseInput" type="checkbox" id="responseB" onchange="onChangeCheckbox(this.id, 'B')">
                        <label for="responseB">${questions[window.index].responseB.answer}</label>
                    </div>
                    <div class="response">
                        <input class="responseInput" type="checkbox" id="responseC" onchange="onChangeCheckbox(this.id, 'C')">
                        <label for="responseC">${questions[window.index].responseC.answer}</label>
                    </div>
                </div>
            </div>
        </div>
    `

    quizContainer = document.getElementById('quizContainer');
    if (window.index === 0) {
        quizContainer.innerHTML += `
            <div class="quizButtons">
                <button type="button" class="button" onclick="getNextQuestion()">Dalej</button>
            </div>
        `
    } else {
        quizContainer.innerHTML += `
            <div class="quizButtons">
                <button type="button" class="button" onclick="getPreviousQuestion()">Wstecz</button>
                <button type="button" class="button" onclick="getNextQuestion()">Dalej</button>
            </div>
        `
    }
}

function onChangeCheckbox (checkbox, response) {
    const question = questions[window.index];
    if (document.getElementById(checkbox).checked) {
        question[checkbox].selected = true;
    } else {
        question[checkbox].selected = false;
    }

    console.log('questions: ', questions);
}

function endQuiz () {
    const main = document.getElementById('main');
    let quizContainer = document.getElementById('quizContainer');
    quizContainer.remove();

    for(let i = 0; i < questions.length; i++) {
        const selectedAnswers = [ questions[i].responseA.selected ? 'checked' : '', questions[i].responseB.selected ? 'checked' : '', questions[i].responseC.selected ? 'checked' : '' ]
        console.log('selectedAnswers: ', selectedAnswers);

        const correctAnswer = questions[i].responseA.selected === questions[i].responseA.correct && questions[i].responseB.selected === questions[i].responseB.correct && questions[i].responseC.selected === questions[i].responseC.correct;
        const borderClass = correctAnswer ? 'correctAnswer' : 'wrongAnswer';

        main.innerHTML += `
        <div id="quizContainer">
            <div class="quizCard ${borderClass}">
                <p id="question">${questions[i].question}</p>
                <div class="answersContainer">
                    <div class="response">
                        <input class="responseInput" type="checkbox" id="responseA" onchange="onChangeCheckbox(this.id, 'A')" ${selectedAnswers[0]} disabled>
                        <label for="responseA">${questions[i].responseA.answer}</label>
                    </div>
                    <div class="response">
                        <input class="responseInput" type="checkbox" id="responseB" onchange="onChangeCheckbox(this.id, 'B')" ${selectedAnswers[1]} disabled>
                        <label for="responseB">${questions[i].responseB.answer}</label>
                    </div>
                    <div class="response">
                        <input class="responseInput" type="checkbox" id="responseC" onchange="onChangeCheckbox(this.id, 'C')" ${selectedAnswers[2]} disabled>
                        <label for="responseC">${questions[i].responseC.answer}</label>
                    </div>
                </div>
            </div>
        </div>
    `
    }
}