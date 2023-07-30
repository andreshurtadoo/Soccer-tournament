var cont = 0
var list = []

// Añadimos al localStorage Los elementos seleccionados por el usuario
function select(name, id){
    // Buscar si existe
    let pivot = list.indexOf(name)
    if (pivot != -1){
        // El elemento existe, por tanto se elimina
        list.splice(pivot, 1);
        document.getElementsByClassName(name)[0].style.cssText = 'border: 2px solid white; transition:1s;'
        cont--
    }else{// Agregar equipo
        // Comprobar que solo seleccione 16 equipos
        if(list.length >= 16){
            return alert('Solo puede seleccionar 16 quipos!')
        }
        cont++
        list.push(name)
        document.getElementsByClassName(name)[0].style.cssText = 'border: 2px solid blueviolet; transition:1s;'
    }

    // Cambiamos el boton por un enlaze a home
    if(cont == 16){
        return document.querySelector('.btnComenzar').innerHTML = '<a href="./index.html" target="_blank" rel="noopener noreferrer">Comenzar</a>'
    }else{
        return document.querySelector('.divBtn').innerHTML = '<button class="btn btn-primary btnComenzar" type="button" onclick="start()">Comenzar</button>'
    }
}

function start(){
    if(list.length < 16){
        return alert(`Le faltan ${16-cont} equipos para poder iniciar!`)
    }else{
        localStorage.setItem('octavos', list)
    }
}


