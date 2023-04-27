const qBank = [{
    "question": "Q01. ggggggggggggggggggggggg gggggggggggggggggggggggggggg iiiiiiiiiiiiiiiiiiiiii",
    "answer1": "hdddddddddddddddddddddddggggggggggggggggg ggggggggggggggggggggggggggggg gggggggggggggggggggggggggggggggggggggggggggddhhh",
    "answer2": "udddddddddddddddddddddddddhhh",
    "answer3": "rrrrdddddddddddddddddddddhhh",
    "answer4": "aafggddddddddddddddddddddddddhhh",
    "ansKey": "ans2"
},
{
    "question": "Q02. gggggggggggggggggggggggg ggggggggggggggggggggggggggggg",
    "answer1": "hdddddddddddddddddddddddddhhh",
    "answer2": "udddddddddddddddddddddddddhhh",
    "answer3": "rrrrdddddddddddddddddddddhhh",
    "answer4": "aafggddddddddddddddddddddddddhhh",
    "ansKey": "ans1"
},
{
    "question": "Q03. ggggggggggggggggggggggg gggggggggggggggggggggggggggggg",
    "answer1": "hdddddddddddddddddddddddddhhh",
    "answer2": "udddddddddddddddddddddddddhhh",
    "answer3": "rrrrdddddddddddddddddddddhhh",
    "answer4": "aafggddddddddddddddddddddddddhhh",
    "ansKey": "ans4"
},
{
    "question": "Q04. ggggggggggggggggggggggggg gggggggggggggggggggggggggggg",
    "answer1": "hdddddddddddddddddddddddddhhh",
    "answer2": "udddddddddddddddddddddddddhhh",
    "answer3": "rrrrdddddddddddddddddddddhhh",
    "answer4": "aafggddddddddddddddddddddddddhhh",
    "ansKey": "ans3"
},
{
    "question": "Q05. gggggggggggggggggggggg ggggggggggggggggggggggggggggggg",
    "answer1": "hdddddddddddddddddddddddddhhh",
    "answer2": "udddddddddddddddddddddddddhhh",
    "answer3": "rrrrdddddddddddddddddddddhhh",
    "answer4": "aafggddddddddddddddddddddddddhhh",
    "ansKey": "ans2"
}]

const heading = document.getElementById("heading");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const answers = document.querySelectorAll(".answer");
const submit = document.getElementById("submit");
const timerSet = document.getElementById("timer");

let qUpdate = 0;
let score = 0;

let countersec = 0;
let counterMin = 0
let setSec
let setMin
const timer = setInterval(function () {
    if (countersec == 59) {
        counterMin++
        countersec = 0
    }
    else {
        countersec++
    }
    if (countersec <= 9) {
        setSec = "0" + countersec
    }
    else {
        setSec = countersec
    }
    if (counterMin <= 9) {
        setMin = "0" + counterMin
    }
    else {
        setMin = counterMin
    }
    timerSet.innerText = setMin + ":" + setSec;
}, 1000);


const loader = () => {
    heading.innerText = qBank[qUpdate].question
    option1.innerText = qBank[qUpdate].answer1
    option2.innerText = qBank[qUpdate].answer2
    option3.innerText = qBank[qUpdate].answer3
    option4.innerText = qBank[qUpdate].answer4
}

loader()

submit.addEventListener("click", () => {


    let checking = isChecked()
    if (checking) {
        scoreUpdate(checking)
        qUpdate++
        if (qBank.length > qUpdate) {
            loader();
            checkDisable()


        }
        else {
            localStorage.setItem("score", score);

        }

        if (qBank.length == qUpdate) {
            submit.innerText = "Finish"
            window.location.replace("D:/webwork/Quiz-Pannel/assets/detail.html")
        }
    }
})

const isChecked = () => {
    let answer
    answers.forEach((check) => {
        if (check.checked) {
            answer = check.id;

        }
    })
    return answer
}

const checkDisable = () => {
    answers.forEach((check) => {
        if (check.checked) {
            check.checked = false;

        }
    })
}

const scoreUpdate = (s) => {
    console.log(qBank[qUpdate].ansKey, s)
    if (qBank[qUpdate].ansKey == s) {
        score++

    }
}