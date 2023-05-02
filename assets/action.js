const qBank = [{
    "question": "Q01. How many sizes of headers are available in HTML by default?",
    "answer1": "5",
    "answer2": "1",
    "answer3": "3",
    "answer4": "6",
    "ansKey": "ans4"
},
{
    "question": "Q02. How to create an ordered list in HTML?",
    "answer1": "<ul>",
    "answer2": "<ol>",
    "answer3": "<href>",
    "answer4": "<b>",
    "ansKey": "ans2"
},
{
    "question": "Q03. What are the attributes used to change the size of an image?",
    "answer1": "Width and height",
    "answer2": "Big and small",
    "answer3": "Top and bottom",
    "answer4": "None of the above",
    "ansKey": "ans1"
},
{
    "question": "Q04. Which of the following is correct about HTML?",
    "answer1": "HTML uses user defined tags",
    "answer2": "HTML uses tags defind within the language",
    "answer3": "Both A and B",
    "answer4": "None of the above",
    "ansKey": "ans2"
},
{
    "question": "Q05. Which of the following is the correct syntax for reffering the external style sheet?",
    "answer1": "<style src=example.css>",
    "answer2": "<style src='exaple.css'>",
    "answer3": "<stylesheetsheet>example.css</stylesheet>",
    "answer4": "<link rel='stylesheet'  type='text / css'  href='example.css'>",
    "ansKey": "ans4"
}
    ,
{
    "question": "Q06. The property in css used to change the background color of an element is?",
    "answer1": "bgcolor",
    "answer2": "color",
    "answer3": "background-color",
    "answer4": "All of the above",
    "ansKey": "ans3"
},
{
    "question": "Q07. The css property used to control the elements font-size is?",
    "answer1": "text-style",
    "answer2": "text-size",
    "answer3": "font-size",
    "answer4": "None of the above",
    "ansKey": "ans3"
},
{
    "question": "Q08. Which type of javascript language is_____?",
    "answer1": "Object-oriented",
    "answer2": "Object-based",
    "answer3": "Functional programming",
    "answer4": "All of the above",
    "ansKey": "ans2"
},
{
    "question": "Q09. Javascript code can be written in______?",
    "answer1": "javaScript file(.js file)",
    "answer2": "HTML document directly",
    "answer3": "JavaScript file and in HTML document directly",
    "answer4": "In style sheet(.css file)",
    "ansKey": "ans3"
},
{
    "question": "Q10. JavaScript ignores?",
    "answer1": "newlines",
    "answer2": "tabs",
    "answer3": "spaces",
    "answer4": "All of the above",
    "ansKey": "ans4"
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