// Contadores - Score per team
var timeOct = 0
var timeCuar = 0
var timeSemi = 0
var __timeFinal = 0
// Octavos
var oct1a = 0
var oct1b = 0
var oct2a = 0
var oct2b = 0
var oct3a = 0
var oct3b = 0
var oct4a = 0
var oct4b = 0
var oct5a = 0
var oct5b = 0
var oct6a = 0
var oct6b = 0
var oct7a = 0
var oct7b = 0
var oct8a = 0
var oct8b = 0
// Cuartos
var cuar1a = 0
var cuar1b = 0
var cuar2a = 0
var cuar2b = 0
var cuar3a = 0
var cuar3b = 0
var cuar4a = 0
var cuar4b = 0
// Semis
var semi1a = 0
var semi1b = 0
var semi2a = 0
var semi2b = 0
// Final
var finala = 0
var finalb = 0
// Variables de regulacion - Se usar para el intervalo en 4 partes de 15seg
var regOctavos = 0
var regCuartos = 0
var regSemis = 0
var regFinal = 0
// List of winners
var listWinnersOctavos = []
var listWinnersCuartos = []
var listWinnersSemis = []
var ganador;
// Variables auxiliares
var auxListOfWinnersOfOctavos;
var auxListOfWinnersOfCuartos;
var auxListOfWinnersOfSemis;

// -------------------Functions--------------------------------
// Goles cada 15seg - Octavos
function octavoRegular(){
    regOctavos++
    // Sumamos un numero random del 0 al 1 cada 15seg  
    oct1a += Math.floor(Math.random() * 2)
    oct1b += Math.floor(Math.random() * 2)
    oct2a += Math.floor(Math.random() * 2)
    oct2b += Math.floor(Math.random() * 2)
    oct3a += Math.floor(Math.random() * 2)
    oct3b += Math.floor(Math.random() * 2)
    oct4a += Math.floor(Math.random() * 2)
    oct4b += Math.floor(Math.random() * 2)
    oct5a += Math.floor(Math.random() * 2)
    oct5b += Math.floor(Math.random() * 2)
    oct6a += Math.floor(Math.random() * 2)
    oct6b += Math.floor(Math.random() * 2)
    oct7a += Math.floor(Math.random() * 2)
    oct7b += Math.floor(Math.random() * 2)
    oct8a += Math.floor(Math.random() * 2)
    oct8b += Math.floor(Math.random() * 2)

    // Mostramos los resultados en consola
    let obj = {
        "Partido 1": `E1:${oct1a} - E2:${oct1b}`,
        "Partido 2": `E1:${oct2a} - E2:${oct2b}`,
        "Partido 3": `E1:${oct3a} - E2:${oct3b}`,
        "Partido 4": `E1:${oct4a} - E2:${oct4b}`,
        "Partido 5": `E1:${oct5a} - E2:${oct5b}`,
        "Partido 6": `E1:${oct6a} - E2:${oct6b}`,
        "Partido 7": `E1:${oct7a} - E2:${oct7b}`,
        "Partido 8": `E1:${oct8a} - E2:${oct8b}`
    }

    // llamar a la funcion que muestra los goles en el html
    mostarScoreOctavos()
    console.log(obj);

    // Parar el setTimeout despues de cuatro intervalos de 15seg
    if(regOctavos == 4){
        console.log('Terminaron los octavos!');
        // Comprobamos que no halla empate
        comprobarOctavos()
        // Paramos el tiempo
        clearInterval(timeOctavos)
        // Paramos el intervalo
        clearInterval(octavosRegular)
        return 
    }
}

// Desempatar con penales - Octavos
function comprobarOctavos(){
    // Agregar un setTimeup para que tarde 15seg
    // se desempatan los equipos
    if(oct1a ==  oct1b){oct1a ++}
    if(oct2a ==  oct2b){oct2a ++}
    if(oct3a ==  oct3b){oct3a ++}
    if(oct4a ==  oct4b){oct4a ++}
    if(oct5a ==  oct5b){oct5a ++}
    if(oct6a ==  oct6b){oct6a ++}
    if(oct7a ==  oct7b){oct7a ++}
    if(oct8a ==  oct8b){oct8a ++}

    console.log('Despues de penales Octavos');
    let obj = {
        "Partido 1": `E1:${oct1a} - E2:${oct1b}`,
        "Partido 2": `E1:${oct2a} - E2:${oct2b}`,
        "Partido 3": `E1:${oct3a} - E2:${oct3b}`,
        "Partido 4": `E1:${oct4a} - E2:${oct4b}`,
        "Partido 5": `E1:${oct5a} - E2:${oct5b}`,
        "Partido 6": `E1:${oct6a} - E2:${oct6b}`,
        "Partido 7": `E1:${oct7a} - E2:${oct7b}`,
        "Partido 8": `E1:${oct8a} - E2:${oct8b}`
    }
    console.log(obj);

    // Se llama a la funcion que muesta los resultados en el html
    mostarScoreOctavos()
    // Obtenemos los equipos ganadores de los octavos
    winnersOctavos()
}

// Mostrar goles en el scren del html - Octavos
function mostarScoreOctavos(){
    document.querySelector('.scoreOct1a').innerHTML = oct1a
    document.querySelector('.scoreOct1b').innerHTML = oct1b
    document.querySelector('.scoreOct2a').innerHTML = oct2a
    document.querySelector('.scoreOct2b').innerHTML = oct2b
    document.querySelector('.scoreOct3a').innerHTML = oct3a
    document.querySelector('.scoreOct3b').innerHTML = oct3b
    document.querySelector('.scoreOct4a').innerHTML = oct4a
    document.querySelector('.scoreOct4b').innerHTML = oct4b
    document.querySelector('.scoreOct5a').innerHTML = oct5a
    document.querySelector('.scoreOct5b').innerHTML = oct5b
    document.querySelector('.scoreOct6a').innerHTML = oct6a
    document.querySelector('.scoreOct6b').innerHTML = oct6b
    document.querySelector('.scoreOct7a').innerHTML = oct7a
    document.querySelector('.scoreOct7b').innerHTML = oct7b
    document.querySelector('.scoreOct8a').innerHTML = oct8a
    document.querySelector('.scoreOct8b').innerHTML = oct8b
}

// Mostrar time - Octavos
function times(){
    timeOct++
    document.querySelector('.time').innerHTML = `Time: ${timeOct}:00`
}

// Ganadores de Octavos
function winnersOctavos(){
    // Left
    if(oct1a > oct1b){
        listWinnersOctavos.push(0)
        document.querySelector('.pOct1a').className += " win"
        document.querySelector('.pOct1b').className += " loose"
        document.querySelector('.pOct1a').style.cssText += '--c-win: #ff5400; --c-text: white'
        document.querySelector('.pOct1b').style.cssText += '--c-text: black'
    }else{
        listWinnersOctavos.push(1)
        document.querySelector('.pOct1b').className += " win"
        document.querySelector('.pOct1a').className += " loose"
        document.querySelector('.pOct1b').style.cssText += '--c-win: #ff5400; --c-text: white'
        document.querySelector('.pOct1a').style.cssText += '--c-text: black'
    }

    if(oct2a > oct2b){
        listWinnersOctavos.push(2)
        document.querySelector('.pOct2a').className += " win"
        document.querySelector('.pOct2b').className += " loose"
        document.querySelector('.pOct2a').style.cssText += '--c-win: #ff5400; --c-text: white'
        document.querySelector('.pOct2b').style.cssText += '--c-text: black'
    }else{
        listWinnersOctavos.push(3)
        document.querySelector('.pOct2b').className += " win"
        document.querySelector('.pOct2a').className += " loose"
        document.querySelector('.pOct2b').style.cssText += '--c-win: #ff5400; --c-text: white'
        document.querySelector('.pOct2a').style.cssText += '--c-text: black'
    }

    if(oct3a > oct3b){
        listWinnersOctavos.push(4)
        document.querySelector('.pOct3a').className += " win"
        document.querySelector('.pOct3b').className += " loose"
        document.querySelector('.pOct3a').style.cssText += '--c-win: #ff5400; --c-text: white'
        document.querySelector('.pOct3b').style.cssText += '--c-text: black'
    }else{
        listWinnersOctavos.push(5)
        document.querySelector('.pOct3b').className += " win"
        document.querySelector('.pOct3a').className += " loose"
        document.querySelector('.pOct3b').style.cssText += '--c-win: #ff5400; --c-text: white'
        document.querySelector('.pOct3a').style.cssText += '--c-text: black'
    }

    if(oct4a > oct4b){
        listWinnersOctavos.push(6)
        document.querySelector('.pOct4a').className += " win"
        document.querySelector('.pOct4b').className += " loose"
        document.querySelector('.pOct4a').style.cssText += '--c-win: #ff5400; --c-text: white'
        document.querySelector('.pOct4b').style.cssText += '--c-text: black'
    }else{
        listWinnersOctavos.push(7)
        document.querySelector('.pOct4b').className += " win"
        document.querySelector('.pOct4a').className += " loose"
        document.querySelector('.pOct4b').style.cssText += '--c-win: #ff5400; --c-text: white'
        document.querySelector('.pOct4a').style.cssText += '--c-text: black'
    }

    // Right
    if(oct5a > oct5b){
        listWinnersOctavos.push(8)
        document.querySelector('.pOct5a').className += " win"
        document.querySelector('.pOct5b').className += " loose"
        document.querySelector('.pOct5a').style.cssText += '--c-win: #26517e; --c-text: white'
        document.querySelector('.pOct5b').style.cssText += '--c-text: black'
    }else{
        listWinnersOctavos.push(9)
        document.querySelector('.pOct5b').className += " win"
        document.querySelector('.pOct5a').className += " loose"
        document.querySelector('.pOct5b').style.cssText += '--c-win: #26517e; --c-text: white'
        document.querySelector('.pOct5a').style.cssText += '--c-text: black'
    }

    if(oct6a > oct6b){
        listWinnersOctavos.push(10)
        document.querySelector('.pOct6a').className += " win"
        document.querySelector('.pOct6b').className += " loose"
        document.querySelector('.pOct6a').style.cssText += '--c-win: #26517e; --c-text: white'
        document.querySelector('.pOct6b').style.cssText += '--c-text: black'
    }else{
        listWinnersOctavos.push(11)
        document.querySelector('.pOct6b').className += " win"
        document.querySelector('.pOct6a').className += " loose"
        document.querySelector('.pOct6b').style.cssText += '--c-win: #26517e; --c-text: white'
        document.querySelector('.pOct6a').style.cssText += '--c-text: black'
    }

    if(oct7a > oct7b){
        listWinnersOctavos.push(12)
        document.querySelector('.pOct7a').className += " win"
        document.querySelector('.pOct7b').className += " loose"
        document.querySelector('.pOct7a').style.cssText += '--c-win: #26517e; --c-text: white'
        document.querySelector('.pOct7b').style.cssText += '--c-text: black'
    }else{
        listWinnersOctavos.push(13)
        document.querySelector('.pOct7b').className += " win"
        document.querySelector('.pOct7a').className += " loose"
        document.querySelector('.pOct7b').style.cssText += '--c-win: #26517e; --c-text: white'
        document.querySelector('.pOct7a').style.cssText += '--c-text: black'
    }

    if(oct8a > oct8b){
        listWinnersOctavos.push(14)
        document.querySelector('.pOct8a').className += " win"
        document.querySelector('.pOct8b').className += " loose"
        document.querySelector('.pOct8a').style.cssText += '--c-win: #26517e; --c-text: white'
        document.querySelector('.pOct8b').style.cssText += '--c-text: black'
    }else{
        listWinnersOctavos.push(15)
        document.querySelector('.pOct8b').className += " win"
        document.querySelector('.pOct8a').className += " loose"
        document.querySelector('.pOct8b').style.cssText += '--c-win: #26517e; --c-text: white'
        document.querySelector('.pOct8a').style.cssText += '--c-text: black'
    }

    // Sacamos de nuevo los datos del localStorage
    let teamChoses = localStorage.getItem('octavos').split(',')
    // Sacamos los paises seleccionados de todos los que hay
    var objTeamChoses = data.filter((item, index) => {
        for(i of teamChoses){
            if(item.name == i) return true
        }
    })

    // Sacamos los paises ganadores de los Octavos de final
    var listOfWinnersOfOctavos = objTeamChoses.filter((item, index) => {
        for(i of listWinnersOctavos){
            if(index == i) return true
        }
    })

    auxListOfWinnersOfOctavos = listOfWinnersOfOctavos
    // Llamamos a la funcion que los muestra en el html
    ganadoresDeOctavos(listOfWinnersOfOctavos)
}

// Renderizar los ganadores del los octavos en el html
function ganadoresDeOctavos(listOfWinnersOfOctavos){
    document.querySelector('.cuar1a').innerHTML = `<img src="${listOfWinnersOfOctavos[0].photo}" alt=""> <span class="strikethrough">${listOfWinnersOfOctavos[0].abr}</span>`
    document.querySelector('.cuar1b').innerHTML = `<img src="${listOfWinnersOfOctavos[1].photo}" alt=""> <span class="strikethrough">${listOfWinnersOfOctavos[1].abr}</span>`
    document.querySelector('.cuar2a').innerHTML = `<img src="${listOfWinnersOfOctavos[2].photo}" alt=""> <span class="strikethrough">${listOfWinnersOfOctavos[2].abr}</span>`
    document.querySelector('.cuar2b').innerHTML = `<img src="${listOfWinnersOfOctavos[3].photo}" alt=""> <span class="strikethrough">${listOfWinnersOfOctavos[3].abr}</span>`
    document.querySelector('.cuar3a').innerHTML = `<img src="${listOfWinnersOfOctavos[4].photo}" alt=""> <span class="strikethrough">${listOfWinnersOfOctavos[4].abr}</span>`
    document.querySelector('.cuar3b').innerHTML = `<img src="${listOfWinnersOfOctavos[5].photo}" alt=""> <span class="strikethrough">${listOfWinnersOfOctavos[5].abr}</span>`
    document.querySelector('.cuar4a').innerHTML = `<img src="${listOfWinnersOfOctavos[6].photo}" alt=""> <span class="strikethrough">${listOfWinnersOfOctavos[6].abr}</span>`
    document.querySelector('.cuar4b').innerHTML = `<img src="${listOfWinnersOfOctavos[7].photo}" alt=""> <span class="strikethrough">${listOfWinnersOfOctavos[7].abr}</span>`

    // Damos inicio a los cuartos de final!
    startIntervaloCuartos()
}

// Intervalo de tiempo para goles cada 15seg
var octavosRegular = setInterval(octavoRegular, 15000)
// Intervalo de tiempo para tiempo cada 1seg
var timeOctavos = setInterval(times, 1000)


// ----------------------------Cuartos de Final--------------------------------------
// Goles cada 15seg
function cuartosRegular(){
    regCuartos++
    // Sumamos un numero random del 0 al 1 cada 15seg  
    cuar1a += Math.floor(Math.random() * 2)
    cuar1b += Math.floor(Math.random() * 2)
    cuar2a += Math.floor(Math.random() * 2)
    cuar2b += Math.floor(Math.random() * 2)
    cuar3a += Math.floor(Math.random() * 2)
    cuar3b += Math.floor(Math.random() * 2)
    cuar4a += Math.floor(Math.random() * 2)
    cuar4b += Math.floor(Math.random() * 2)

     // Mostramos los resultados en consola
    let obj = {
        "Partido 1": `E1:${cuar1a} - E2:${cuar1b}`,
        "Partido 2": `E1:${cuar2a} - E2:${cuar2b}`,
        "Partido 3": `E1:${cuar3a} - E2:${cuar3b}`,
        "Partido 4": `E1:${cuar4a} - E2:${cuar4b}`,
    }

    // Llamar a la funcion que muesta los goles en el html
    mostarScoreCuartos()
    console.log(obj)

    // Parar el setTimeout despues de cuatro intervalos de 15seg
    if(regCuartos == 4){
        console.log('Terminaron los cuartos!');
        // Comprobar que no halla empate....
        comprobarCuartos()
        // Paramos el intervalo de tiempo
        clearInterval(_timeCuartos)
        // Paramos el intervalo de 15seg
        clearInterval(_cuartosRegular)
        return
    }
}

// Desempatar con penales
function comprobarCuartos(){
    // Agregar un setTimeup para que tarde 15seg
    // Se desempatan los equipos
    if(cuar1a ==  cuar1b){cuar1a ++}
    if(cuar2a ==  cuar2b){cuar2a ++}
    if(cuar3a ==  cuar3b){cuar3a ++}
    if(cuar4a ==  cuar4b){cuar4a ++}
    
    console.log('Despues de penales cuartos....');
    let obj = {
        "Partido 1": `E1:${cuar1a} - E2:${cuar1b}`,
        "Partido 2": `E1:${cuar2a} - E2:${cuar2b}`,
        "Partido 3": `E1:${cuar3a} - E2:${cuar3b}`,
        "Partido 4": `E1:${cuar4a} - E2:${cuar4b}`,
    }
    console.log(obj);

    // Se llama a la funcion que muestra los resultados en el html
    mostarScoreCuartos()
    // Obtenemos los equipos ganadores de los cuartos
    winnersCuartos()
}

// Mostrar goles en el scren del html - Cuartos
function mostarScoreCuartos(){
    // Mostramos los goles en el html
    document.querySelector('.scoreCuar1a').innerHTML = cuar1a
    document.querySelector('.scoreCuar1b').innerHTML = cuar1b
    document.querySelector('.scoreCuar2a').innerHTML = cuar2a
    document.querySelector('.scoreCuar2b').innerHTML = cuar2b
    document.querySelector('.scoreCuar3a').innerHTML = cuar3a
    document.querySelector('.scoreCuar3b').innerHTML = cuar3b
    document.querySelector('.scoreCuar4a').innerHTML = cuar4a
    document.querySelector('.scoreCuar4b').innerHTML = cuar4b
}

// Mostrar time - Cuartos
function timeCuartos(){
    // Cada segundo aumentamos una unidad a la variable
    timeCuar++
    // Mostramos el valor en el html
    document.querySelector('.time').innerHTML = `Time: ${timeCuar}:00`
}

// Ganadores de Cuartos
function winnersCuartos(){
    // Comparamos resultados para saber quien gano Añadimos color al ganador y opacamos al perdedor
    // Left
    if(cuar1a > cuar1b){
        listWinnersCuartos.push(0)
        document.querySelector('.pCuar1a').className += " win"
        document.querySelector('.pCuar1b').className += " loose"
        document.querySelector('.pCuar1a').style.cssText += '--c-win: #ff5400; --c-text: white'
        document.querySelector('.pCuar1b').style.cssText += '--c-text: black'
    }else{
        listWinnersCuartos.push(1)
        document.querySelector('.pCuar1b').className += " win"
        document.querySelector('.pCuar1a').className += " loose"
        document.querySelector('.pCuar1b').style.cssText += '--c-win: #ff5400; --c-text: white'
        document.querySelector('.pCuar1a').style.cssText += '--c-text: black'
    }

    if(cuar2a > cuar2b){
        listWinnersCuartos.push(2)
        document.querySelector('.pCuar2a').className += " win"
        document.querySelector('.pCuar2b').className += " loose"
        document.querySelector('.pCuar2a').style.cssText += '--c-win: #ff5400; --c-text: white'
        document.querySelector('.pCuar2b').style.cssText += '--c-text: black'
    }else{
        listWinnersCuartos.push(3)
        document.querySelector('.pCuar2b').className += " win"
        document.querySelector('.pCuar2a').className += " loose"
        document.querySelector('.pCuar2b').style.cssText += '--c-win: #ff5400; --c-text: white'
        document.querySelector('.pCuar2a').style.cssText += '--c-text: black'
    }

    // Right
    if(cuar3a > cuar3b){
        listWinnersCuartos.push(4)
        document.querySelector('.pCuar3a').className += " win"
        document.querySelector('.pCuar3b').className += " loose"
        document.querySelector('.pCuar3a').style.cssText += '--c-win: #26517e; --c-text: white'
        document.querySelector('.pCuar3b').style.cssText += '--c-text: black'
    }else{
        listWinnersCuartos.push(5)
        document.querySelector('.pCuar3b').className += " win"
        document.querySelector('.pCuar3a').className += " loose"
        document.querySelector('.pCuar3b').style.cssText += '--c-win: #26517e; --c-text: white'
        document.querySelector('.pCuar3a').style.cssText += '--c-text: black'
    }

    if(cuar4a > cuar4b){
        listWinnersCuartos.push(6)
        document.querySelector('.pCuar4a').className += " win"
        document.querySelector('.pCuar4b').className += " loose"
        document.querySelector('.pCuar4a').style.cssText += '--c-win: #26517e; --c-text: white'
        document.querySelector('.pCuar4b').style.cssText += '--c-text: black'
    }else{
        listWinnersCuartos.push(7)
        document.querySelector('.pCuar4b').className += " win"
        document.querySelector('.pCuar4a').className += " loose"
        document.querySelector('.pCuar4b').style.cssText += '--c-win: #26517e; --c-text: white'
        document.querySelector('.pCuar4a').style.cssText += '--c-text: black'
    }

    // Sacamos los equipos que ganaron de la lista de octavosWinners
    var listOfWinnersOfCuartos = auxListOfWinnersOfOctavos.filter((item, index) => {
        for(i of listWinnersCuartos){
            if(index == i) return true
        }
    })

    // Hacemos una copia a la variable
    auxListOfWinnersOfCuartos = listOfWinnersOfCuartos

    // LLamamos a la funcion que muesta en el html
    ganadoresDeCuartos(listOfWinnersOfCuartos)
}

// Renderizar los ganadores del los octavos en el html
function ganadoresDeCuartos(listOfWinnersOfCuartos){
    // Mostramos las bandera de los equipos que ganaron los cuartos
    document.querySelector('.semi1a').innerHTML = `<img src="${listOfWinnersOfCuartos[0].photo}" alt=""> <span class="strikethrough">${listOfWinnersOfCuartos[0].abr}</span>`
    document.querySelector('.semi1b').innerHTML = `<img src="${listOfWinnersOfCuartos[1].photo}" alt=""> <span class="strikethrough">${listOfWinnersOfCuartos[1].abr}</span>`
    document.querySelector('.semi2a').innerHTML = `<img src="${listOfWinnersOfCuartos[2].photo}" alt=""> <span class="strikethrough">${listOfWinnersOfCuartos[2].abr}</span>`
    document.querySelector('.semi2b').innerHTML = `<img src="${listOfWinnersOfCuartos[3].photo}" alt=""> <span class="strikethrough">${listOfWinnersOfCuartos[3].abr}</span>`

    // Damos inicio a la semifinal!
    startIntervaloSemis()
}

// Intervalo de tiempo para goles cada 15seg
var _cuartosRegular;
var _timeCuartos;
const startIntervaloCuartos = () => {
	if(!_cuartosRegular){
		_cuartosRegular = setInterval(cuartosRegular, 15000)
	}
	if(!_timeCuartos){
		_timeCuartos = setInterval(timeCuartos, 1000)
	}
}

// -------------------------SEMISFINAL--------------------------------
// Goles cada 15seg
function semisRegular(){
    regSemis++
    // Sumamos un numero random del 0 al 1 cada 15seg  
    semi1a += Math.floor(Math.random() * 2)
    semi1b += Math.floor(Math.random() * 2)
    semi2a += Math.floor(Math.random() * 2)
    semi2b += Math.floor(Math.random() * 2)

    // Mostramos los resultados en consola
    let obj = {
        "Partido 1": `E1:${semi1a} - E2:${semi1b}`,
        "Partido 2": `E1:${semi2a} - E2:${semi2b}`,
    }

    // LLamamos a la funcion que muestra los goles
    mostrarScoreSemis()
    console.log(obj);

    // Parar el setInterval despues de cuatro intervalos de 15seg
    if(regSemis == 4){
        console.log('Terminaros las Semis!');
        // Comprobar que no halla empate
        comprobarSemis()
        // Paramos el intervalo de tiempo
        clearInterval(_timeSemis)
        // Paramos el intervalo de 15seg
        clearInterval(_semisRegular)
        return
    }
}

// Desempatar con penales
function comprobarSemis(){
    // Agregar un setTimeup de 15seg
    if(semi1a ==  semi1b){semi1a ++}
    if(semi2a ==  semi2b){semi2a ++}

    console.log('Despues de penales semis..');
    let obj = {
        "Partido 1": `E1:${semi1a} - E2:${semi1b}`,
        "Partido 2": `E1:${semi2a} - E2:${semi2b}`,
    }
    console.log(obj);

    // Se llama a la funcion que muestra los resultados en el html
    mostrarScoreSemis()
    // Obtenemos los equipos ganadores de los cuartos
    winnersSemis()
}

// Mostrar goles en el scren del html - Semis
function mostrarScoreSemis(){
    // Mostramos los goles en el html
    document.querySelector('.scoreSemi1a').innerHTML = semi1a
    document.querySelector('.scoreSemi1b').innerHTML = semi1b
    document.querySelector('.scoreSemi2a').innerHTML = semi2a
    document.querySelector('.scoreSemi2b').innerHTML = semi2b
}

// Mostrar time - Semis
function timeSemis(){
    // Cada segundo aumentamos una unidad a la variable
    timeSemi++  
    // Mostramos el valor en el html
    document.querySelector('.time').innerHTML = `Time: ${timeSemi}:00`
}

// Ganadores de Semis
function winnersSemis(){
    // Comparamos resultados para saber quien gano
    // Left
    if(semi1a > semi1b){
        listWinnersSemis.push(0)
        document.querySelector('.pSemi1a').className += " win"
        document.querySelector('.pSemi1b').className += " loose"
        document.querySelector('.pSemi1a').style.cssText += '--c-win: #ff5400; --c-text: white'
        document.querySelector('.pSemi1b').style.cssText += '--c-text: black'
    }else{
        listWinnersSemis.push(1)
        document.querySelector('.pSemi1b').className += " win"
        document.querySelector('.pSemi1a').className += " loose"
        document.querySelector('.pSemi1b').style.cssText += '--c-win: #ff5400; --c-text: white'
        document.querySelector('.pSemi1a').style.cssText += '--c-text: black'
    }

    // Right
    if(semi2a > semi2b){
        listWinnersSemis.push(2)
        document.querySelector('.pSemi2a').className += " win"
        document.querySelector('.pSemi2b').className += " loose"
        document.querySelector('.pSemi2a').style.cssText += '--c-win: #26517e; --c-text: white'
        document.querySelector('.pSemi2b').style.cssText += '--c-text: black'
    }else{
        listWinnersSemis.push(3)
        document.querySelector('.pSemi2b').className += " win"
        document.querySelector('.pSemi2a').className += " loose"
        document.querySelector('.pSemi2b').style.cssText += '--c-win: #26517e; --c-text: white'
        document.querySelector('.pSemi2a').style.cssText += '--c-text: black'
    }

    // Sacamos los equipos que ganaron de la lista de octavosWinners
    var listOfWinnersOfSemis = auxListOfWinnersOfCuartos.filter((item, index) => {
        for(i of listWinnersSemis){
            if(index == i) return true
        }
    })

    // Hacemos una copia a la variable
    auxListOfWinnersOfSemis = listOfWinnersOfSemis

    // LLamamos a la funcion que muesta en el html
    ganadoresDeSemis(listOfWinnersOfSemis)
}

// Renderizar los ganadores del los octavos en el html
function ganadoresDeSemis(listOfWinnersOfSemis){
    // Mostramos las bandera de los equipos que ganaron las Semis
    document.querySelector('.finala').innerHTML = `<img src="${listOfWinnersOfSemis[0].photo}" alt=""> <span class="strikethrough">${listOfWinnersOfSemis[0].abr}</span>`
    document.querySelector('.finalb').innerHTML = `<img src="${listOfWinnersOfSemis[1].photo}" alt=""> <span class="strikethrough">${listOfWinnersOfSemis[1].abr}</span>`

    // Damos inicio a la final!
    startIntervaloFinal()
}

// Intervalo de tiempo para goles cada 15seg
var _semisRegular;
var _timeSemis;
const startIntervaloSemis = () => {
    if(!_semisRegular){
		_semisRegular = setInterval(semisRegular, 15000)
	}
    if(!_timeSemis){
		_timeSemis = setInterval(timeSemis, 1000)
	}
}


// -------------------------Final--------------------
// Goles cada 15seg
function finalRegular(){
    regFinal++
    // Sumamos un numero random del 0 al 1 cada 15seg  
    finala += Math.floor(Math.random() * 2)
    finalb += Math.floor(Math.random() * 2)

    // Mostramos los resultados en consola
    let obj = {
        "Partido 1": `E1:${finala} - E2:${finalb}`,
    }

    // LLamamos a la funcion que muestra los goles
    mostrarScoreFinal()
    console.log(obj);

    // Parar el setInterval despues de cuatro intervalos de 15seg
    if(regFinal == 4){
        console.log('Terminaros la Final!');
        // Comprobar que no halla empate
        comprobarFinal()
        // Paramos el intervalo de tiempo
        clearInterval(_timeFinal)
        // Paramos el intervalo de 15seg
        clearInterval(_finalRegular)
        return
    }
}

// Desempatar con penales
function comprobarFinal(){
    // Agregar un setTimeup de 15seg
    if(finala ==  finalb){finala ++}

    console.log('Despues de penales Final..');
    let obj = {
        "Partido 1": `E1:${finala} - E2:${finalb}`,
    }
    console.log(obj);

    // Se llama a la funcion que muestra los resultados en el html
    mostrarScoreFinal()
    // Obtenemos el campeon
    winnersFinal()
}

// Mostrar goles en el scren del html - Final
function mostrarScoreFinal(){
    // Mostramos los goles en el html
    document.querySelector('.scoreFinala').innerHTML = finala
    document.querySelector('.scoreFinalb').innerHTML = finalb
}

// Mostrar time - Final
function timeFinal(){
    // Cada segundo aumentamos una unidad a la variable
    __timeFinal++  
    // Mostramos el valor en el html
    document.querySelector('.time').innerHTML = `Time: ${__timeFinal}:00`
}

// Ganador de final
function winnersFinal(){
    // Comparamos resultados para saber quien gano
    if(finala > finalb){
        ganador = auxListOfWinnersOfSemis[0]
        document.querySelector('.pFinala').className += " win"
        document.querySelector('.pFinalb').className += " loose"
        document.querySelector('.stara').innerHTML = '★'
        document.querySelector('.pFinala').style.cssText += '--c-win: blueviolet; --c-text: white'
        document.querySelector('.pFinalb').style.cssText += '--c-text: black'
    }else{
        ganador = auxListOfWinnersOfSemis[1]
        document.querySelector('.pFinalb').className += " win"
        document.querySelector('.pFinala').className += " loose"
        document.querySelector('.starb').innerHTML = '★'
        document.querySelector('.pFinalb').style.cssText += '--c-win: blueviolet; --c-text: white'
        document.querySelector('.pFinala').style.cssText += '--c-text: black'
    }

    document.querySelector('.winner').innerHTML = `${ganador.name.toUpperCase()} Win`
    document.querySelector('.otraSimulacion').innerHTML = '<a href="./home.html"><p class="pm bold svelte-cmily5">Generar otra simulación</p></a>'
}

// Intervalo de tiempo para goles cada 15seg
var _finalRegular;
var _timeFinal;
const startIntervaloFinal = () => {
    if(!_finalRegular){
		_finalRegular = setInterval(finalRegular, 15000)
	}
    if(!_timeFinal){
		_timeFinal = setInterval(timeFinal, 1000)
	}
}
