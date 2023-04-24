let submit = document.getElementById("submit");
console.log(localStorage.getItem("score"));

submit.addEventListener("click", () => {

    var blob = new Blob(["Team: " + localStorage.getItem("team") + ", Score: " + localStorage.getItem("score")], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "QuizDetails.txt");
})


