const wrapper = document.querySelector(".wrapper");
const wrapperV2 = document.querySelector(".wrapperV2");
const isim = document.querySelector(".isim");

const Aclubs = ["Barcelona", "Real Madrid", "Manchester United", "Manchester City", "Liverpool", "Bayern Munich", "Paris Saint-Germain"]
const Bclubs = ["Atletico Madrid", "Chelsea FC", "Arsenal FC", "Borussia Dortmund", "Juventus FC", "Inter Milan", "RB Leipzig", "AS Monaco", "Olympique Lyonnais", "SSC Napoli", "SL Benfica", "FC Porto", "Newcastle United", "Brighton & Hove Albion", "Sevilla FC", "Athletic Bilbao", "Tottenham Hotspur"]
const Cclubs = ["AS Roma", "Bayer Leverkusen", "Olympique de Marseille", "Stade Rennais", "Ajax", "PSV Eindhoven", "Sporting Lisbon", "Beşiktaş", "Galatasaray", "Fenerbahçe", "West Ham United", "Eintracht Frankfurt", "SS Lazio", "Atalanta", "Fiorentina", "Feyenoord", "SC Braga", "Aston Villa", "LOSC Lille", "Real Sociedad", "Crystal Palace", "Everton", "Villarreal"]
const Dclubs = ["Valencia", "Celta Vigo", "Real Betis", "Eibar", "Getafe", "Levante", "Osasuna", "Real Valladolid", "Alaves", "Granada", "Cadiz", "Elche", "Huesca"
    , "Leicester City", "Leeds United", "Wolverhampton Wanderers", "Southampton", "Burnley", "Fulham", "West Bromwich Albion", "Sheffield United"
    , "Borussia Mönchengladbach", "VfL Wolfsburg", "Hertha Berlin", "Union Berlin", "Stuttgart", "SC Freiburg", "Hoffenheim", "Mainz 05", "FC Köln", "Arminia Bielefeld", "FC Augsburg", "Werder Bremen", "Schalke 04"
    , "Nice", "Reims", "Saint-Etienne", "Bordeaux", "Montpellier", "Strasbourg", "Metz", "Angers", "Nantes", "Dijon", "Brest", "Lorient", "Nimes", "Troyes",
    "Sampdoria", "Sassuolo", "Hellas Verona", "Bologna", "Udinese", "Cagliari", "Genoa", "Torino", "Spezia", "Crotone", "Benevento", "Empoli",
    "AZ Alkmaar", "Vitesse", "FC Utrecht", "Twente", "Heerenveen", "Groningen", "Sparta Rotterdam", "PEC Zwolle", "Heracles", "Fortuna Sittard", "RKC Waalwijk", "NEC Nijmegen", "Willem II", "Go Ahead Eagles", "Cambuur", "FC Emmen", "VVV-Venlo"
    , "Vitoria Guimaraes", "Famalicao", "Rio Ave", "Santa Clara", "Moreirense", "Boavista", "Pacos de Ferreira", "Gil Vicente", "Tondela", "Portimonense", "Maritimo", "Belenenses S"
    , "Trabzonspor", "Başakşehir", "Göztepe", "Alanyaspor", "Kasımpaşa", "Antalyaspor", "Hatayspor", "Kayserispor", "Gaziantep FK", "Sivasspor", "Rizespor", "Konyaspor", "Gençlerbirliği", "Ankaragücü", "Erzurumspor", "Altay", "Giresunspor"]
var playerClubs = []
let age = 17;
let overall = 60;

var startYear = 2023;
var endYear = 2024;
let club = "Kulüpsüz"
let ageDOM = document.querySelector(".current-age");
let afterDOM = document.querySelector(".after")
let overallDOM = document.querySelector(".current-overall");
let overallIncDOM = document.querySelector(".overall-increase");
let goalDOM = document.querySelector(".goal");
let assistDOM = document.querySelector(".assist");
let ulDOM = document.querySelector("ul");
let liDOM = document.querySelector(".li");



function levelAge() {
    age++
    startYear++;
    endYear++;
    ageDOM.innerHTML = `yaş: ${age}`;

}


function nextClub(e) {

    document.querySelector(".after-club").innerHTML = e;
    playerClubs.push(e)
}

function createLi(e) {
    overallFnc()

    function overallFnc() {
        if (age <= 24) {
            let overallInc = 0;
            newNumber = Math.floor(Math.random() * 8);
            overall += newNumber;
            let overallartis = overallInc += newNumber
            overallDOM.innerHTML = `overall: ${overall}`;
            overallIncDOM.innerHTML = `overall ${overallartis}`;
            goalAssist(overallartis)
        }
        else if (age <= 28) {
            let overallInc = 0;
            newNumber = Math.floor(Math.random() * 7) - 2;
            overall += newNumber;
            let overallartis = overallInc += newNumber
            overallDOM.innerHTML = `overall: ${overall}`;
            overallIncDOM.innerHTML = `overall ${overallartis}`;
            goalAssist(overallartis)
        }
        else if (age <= 33) {
            let overallInc = 0;
            newNumber = Math.floor(Math.random() * 5) - 3;
            overall += newNumber;
            let overallartis = overallInc += newNumber
            overallDOM.innerHTML = `overall: ${overall}`;
            overallIncDOM.innerHTML = `overall ${overallartis}`;
            goalAssist(overallartis)
        }
        else if (age <= 36) {
            let overallInc = 0;
            newNumber = Math.floor(Math.random() * 3) - 3;
            overall += newNumber;
            let overallartis = overallInc += newNumber
            overallDOM.innerHTML = `overall: ${overall}`;
            overallIncDOM.innerHTML = `overall ${overallartis}`;
            goalAssist(overallartis)
        }
        else {
            let overallInc = 0;
            newNumber = Math.floor(Math.random() * 2) - 3;
            overall += newNumber;
            let overallartis = overallInc += newNumber
            overallDOM.innerHTML = `overall: ${overall}`;
            overallIncDOM.innerHTML = `overall ${overallartis}`;
            goalAssist(overallartis)
        }

    }

    function goalAssist(e) {
        if (e <= 0) {
            goal = Math.floor(Math.random() * 4)
            assist = Math.floor(Math.random() * 4)
            goalDOM.innerHTML = `${goal} gol`
            assistDOM.innerHTML = `${assist} asist`
        }
        else if (e <= 3) {
            goal = Math.floor(Math.random() * (5 - 10) + 5)
            assist = Math.floor(Math.random() * (5 - 10) + 5)
            goalDOM.innerHTML = `${goal} gol`
            assistDOM.innerHTML = `${assist} asist`
        }
        else if (e <= 5) {
            goal = Math.floor(Math.random() * (10 - 15) + 10)
            assist = Math.floor(Math.random() * (10 - 15) + 10)
            goalDOM.innerHTML = `${goal} gol`
            assistDOM.innerHTML = `${assist} asist`
        }
        else {
            goal = Math.floor(Math.random() * (15 - 21) + 15)
            assist = Math.floor(Math.random() * (15 - 21) + 15)
            goalDOM.innerHTML = `${goal} gol`
            assistDOM.innerHTML = `${assist} asist`
        }
    }

    let liElement = document.createElement("li")
    liElement.innerHTML = `<span class="rank">${startYear + '-' + endYear}</span><span class="team">${e}</span><span class="played">${age}</span><span class="won">${goal}</span><span class="drawn">${assist}</span><span class="lost">${overall}</span>`

    ulDOM.appendChild(liElement);

}










isim.addEventListener("keyup", e => {
    if (e.key == "Enter" && isim.value != "") {
        let playerName = isim.value;
        let finito = playerName.charAt(0).toUpperCase() + playerName.slice(1);
        isim.remove()
        createdElement = document.createElement("h1")
        createdElement.textContent = finito;
        createdElement.classList.add("text-center")
        createdElement.style.color = "white"
        let ebeveynElement = wrapper.parentNode;
        ebeveynElement.insertBefore(createdElement, wrapper)
    }
});

document.querySelector(".cark").addEventListener("click", e => {
    if (age < 40 && isim.value !== "") {
        let stay = Math.floor(Math.random() * 2)
        if (startYear == 2023 && overall <= 70) {
            nextClub(Dclubs[Math.floor(Math.random() * 97)])
            levelAge()
            createLi(playerClubs[playerClubs.length - 1])
        }
        else if (stay == 1) {

            if (overall <= 70) {
                nextClub(Dclubs[Math.floor(Math.random() * 97)])
                levelAge()
                createLi(playerClubs[playerClubs.length - 1])
            }
            else if (overall <= 80) {
                nextClub(Cclubs[Math.floor(Math.random() * 23)])
                levelAge()
                createLi(playerClubs[playerClubs.length - 1])
            }
            else if(overall<= 90){
                nextClub(Bclubs[Math.floor(Math.random() * 17)])
                levelAge()
                createLi(playerClubs[playerClubs.length - 1])
            }
            else{
                nextClub(Aclubs[Math.floor(Math.random() * 7)])
                levelAge()
                createLi(playerClubs[playerClubs.length - 1])
            }
        }

    
    else {
        levelAge();
        createLi(playerClubs[playerClubs.length - 1])
    }
    if (afterDOM.classList.contains("active")) {
        afterDOM.classList.remove("active")
    }


}

});

document.querySelector(".toggler").addEventListener("click", e => {
    if (wrapperV2.classList.contains("active")) {
        wrapperV2.classList.remove("active")
        wrapper.classList.add("active")
    }
    else {
        wrapper.classList.remove("active")
        wrapperV2.classList.add("active")

    }
})



