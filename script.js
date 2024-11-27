function fiction () {
    document.getElementById("textallbooks").textContent = "Ficción";
}

function historic () {
    document.getElementById("textallbooks").textContent = "Históricos";
}

function tec () {
    document.getElementById("textallbooks").textContent = "Tecnología";
}

function autoayuda () {
    document.getElementById("textallbooks").textContent = "Autoayuda";
}

function poesia () {
    document.getElementById("textallbooks").textContent = "Poesía";
}

function sesion (){
    alert ("Inicio de Sesión Exitoso");
}


function rentar(button) {
    button.textContent = "No Disponible"
    button.style.backgroundColor = '#9e0000'
    button.style.color = 'white'
}
