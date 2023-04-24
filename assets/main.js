let teamName

let teamSub = document.getElementById("teamSub");

teamSub.addEventListener("click", () => {
    setTeamName()
})

const setTeamName = () => {
    teamName = document.getElementById("team").value;
    if (teamName != "") {
        localStorage.setItem("team", teamName);
        window.location.replace("D:/webwork/Quiz-Pannel/assets/index.html")
    }


}
