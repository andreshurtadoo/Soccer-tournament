// All data about team
const data = [
    {
        "id": 1,
        "name": "argentina",
        "abr": "arg",
        "photo": "./banderas/Flag_of_Argentina.svg.webp"
    },
    {
        "id": 2,
        "name": "belgica",
        "abr": "bel",
        "photo": "./banderas/Flag_of_Belgium_(civil).svg.webp"
    },
    {
        "id": 3,
        "name": "brasil",
        "abr": "brz",
        "photo": "./banderas/Flag_of_Brazil.svg.webp"
    },
    {
        "id": 4,
        "name": "canadad",
        "abr": "can",
        "photo": "./banderas/Flag_of_Canada.svg.webp"
    },
    {
        "id": 5,
        "name": "croacia",
        "abr": "cro",
        "photo": "./banderas/Flag_of_Croatia.svg.webp"
    },
    {
        "id": 6,
        "name": "dinamarca",
        "abr": "din",
        "photo": "./banderas/Flag_of_Denmark.svg.webp"
    },
    {
        "id": 7,
        "name": "ecuador",
        "abr": "ecu",
        "photo": "./banderas/Flag_of_Ecuador.svg.webp"
    },
    {
        "id": 8,
        "name": "inglaterra",
        "abr": "ing",
        "photo": "./banderas/Flag_of_England.svg.webp"
    },
    {
        "id": 9,
        "name": "francia",
        "abr": "fra",
        "photo": "./banderas/Flag_of_France_(1794–1815,_1830–1974,_2020–present).svg.webp"
    },
    {
        "id": 10,
        "name": "japon",
        "abr": "jap",
        "photo": "./banderas/Flag_of_Japan.svg.webp"
    },
    {
        "id": 11,
        "name": "mexico",
        "abr": "mex",
        "photo": "./banderas/Flag_of_Mexico.svg.webp"
    },
    {
        "id": 12,
        "name": "polonia",
        "abr": "pol",
        "photo": "./banderas/Flag_of_Poland.svg.webp"
    },
    {
        "id": 13,
        "name": "portugal",
        "abr": "por",
        "photo": "./banderas/Flag_of_Portugal.svg.webp"
    },
    {
        "id": 14,
        "name": "españa",
        "abr": "esp",
        "photo": "./banderas/Flag_of_Spain.svg.webp"
    },
    {
        "id": 15,
        "name": "suiza",
        "abr": "sui",
        "photo": "./banderas/Flag_of_Switzerland.svg.webp"
    },
    {
        "id": 16,
        "name": "holanda",
        "abr": "hol",
        "photo": "./banderas/Flag_of_the_Netherlands.svg.webp"
    },
    {
        "id": 17,
        "name": "usa",
        "abr": "usa",
        "photo": "./banderas/Flag_of_the_United_States.svg.webp"
    },
    {
        "id": 18,
        "name": "uruguay",
        "abr": "uru",
        "photo": "./banderas/Flag_of_Uruguay.svg.webp"
    },
    {
        "id": 19,
        "name": "gales",
        "abr": "gal",
        "photo": "./banderas/Flag_of_Wales.svg.webp"
    },
    {
        "id": 20,
        "name": "alemania",
        "abr": "deu",
        "photo": "./banderas/Germany.svg.webp"
    }
]

// Variables of flags
var fOct1a = document.querySelector('.oct1a')
var fOct1b = document.querySelector('.oct1b')
var fOct2a = document.querySelector('.oct2a')
var fOct2b = document.querySelector('.oct2b')
var fOct3a = document.querySelector('.oct3a')
var fOct3b = document.querySelector('.oct3b')
var fOct4a = document.querySelector('.oct4a')
var fOct4b = document.querySelector('.oct4b')
var fOct5a = document.querySelector('.oct5a')
var fOct5b = document.querySelector('.oct5b')
var fOct6a = document.querySelector('.oct6a')
var fOct6b = document.querySelector('.oct6b')
var fOct7a = document.querySelector('.oct7a')
var fOct7b = document.querySelector('.oct7b')
var fOct8a = document.querySelector('.oct8a')
var fOct8b = document.querySelector('.oct8b')

// Cargamos los 16 equipos seleccionados del localStorage
function load(){
    let teamChoses = localStorage.getItem('octavos').split(',')
    var objTeamChoses = data.filter((item, index) => {
        for(i of teamChoses){
            if(item.name == i) return true
        }
    })
    // Llamos a la funcion encargada de renderizarlos en el html
    setDataOctavos(objTeamChoses)
}

// cargar la data en el html
function setDataOctavos(objTeamChoses){
    fOct1a.innerHTML = `<img src="${objTeamChoses[0].photo}" alt=""> <span class="strikethrough">${objTeamChoses[0].abr}</span>`
    fOct1b.innerHTML = `<img src="${objTeamChoses[1].photo}" alt=""> <span class="strikethrough">${objTeamChoses[1].abr}</span>`
    fOct2a.innerHTML = `<img src="${objTeamChoses[2].photo}" alt=""> <span class="strikethrough">${objTeamChoses[2].abr}</span>`
    fOct2b.innerHTML = `<img src="${objTeamChoses[3].photo}" alt=""> <span class="strikethrough">${objTeamChoses[3].abr}</span>`
    fOct3a.innerHTML = `<img src="${objTeamChoses[4].photo}" alt=""> <span class="strikethrough">${objTeamChoses[4].abr}</span>`
    fOct3b.innerHTML = `<img src="${objTeamChoses[5].photo}" alt=""> <span class="strikethrough">${objTeamChoses[5].abr}</span>`
    fOct4a.innerHTML = `<img src="${objTeamChoses[6].photo}" alt=""> <span class="strikethrough">${objTeamChoses[6].abr}</span>`
    fOct4b.innerHTML = `<img src="${objTeamChoses[7].photo}" alt=""> <span class="strikethrough">${objTeamChoses[7].abr}</span>`
    fOct5a.innerHTML = `<img src="${objTeamChoses[8].photo}" alt=""> <span class="strikethrough">${objTeamChoses[8].abr}</span>`
    fOct5b.innerHTML = `<img src="${objTeamChoses[9].photo}" alt=""> <span class="strikethrough">${objTeamChoses[9].abr}</span>`
    fOct6a.innerHTML = `<img src="${objTeamChoses[10].photo}" alt=""> <span class="strikethrough">${objTeamChoses[10].abr}</span>`
    fOct6b.innerHTML = `<img src="${objTeamChoses[11].photo}" alt=""> <span class="strikethrough">${objTeamChoses[11].abr}</span>`
    fOct7a.innerHTML = `<img src="${objTeamChoses[12].photo}" alt=""> <span class="strikethrough">${objTeamChoses[12].abr}</span>`
    fOct7b.innerHTML = `<img src="${objTeamChoses[13].photo}" alt=""> <span class="strikethrough">${objTeamChoses[13].abr}</span>`
    fOct8a.innerHTML = `<img src="${objTeamChoses[14].photo}" alt=""> <span class="strikethrough">${objTeamChoses[14].abr}</span>`
    fOct8b.innerHTML = `<img src="${objTeamChoses[15].photo}" alt=""> <span class="strikethrough">${objTeamChoses[15].abr}</span>`
}



