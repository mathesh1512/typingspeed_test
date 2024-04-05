let question = document.getElementById("quoteDisplay");
let timerEl = document.getElementById("timer");
let speedTypingTestEl = document.getElementById("speedTypingTest");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");
spinnerEl.classList.add("d-none");
let questionrandom = {
    qus: "",
    typeInput: ""
};
quoteInputEl.addEventListener("change", function(event) {
    questionrandom.typeInput = event.target.value;
});

function randomQuestion() {
    let options = {
        method: "GET"
    };
    let randomUrl = "https://apis.ccbp.in/random-quote";
    fetch(randomUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let m = jsonData;
            spinnerEl.classList.add("d-none");
            question.textContent = m.content;
            questionrandom.qus = m.content;
        });
}
randomQuestion();

let id = null;
let time = 0;

function timerfun() {
    id = setInterval(function() {
        time = time + 1;
        timerEl.textContent = time;
    }, 1000);
}
timerfun();

submitBtnEl.onclick = function() {
    if (questionrandom.qus === questionrandom.typeInput) {
        clearInterval(id);
        resultEl.textContent = "You typed in " + time + " seconds";
    } else {
        resultEl.textContent = "You typed incorrect sentence";
    }
};
resetBtnEl.onclick = function() {
    spinnerEl.classList.remove("d-none");
    randomQuestion();
    time = 0;

};