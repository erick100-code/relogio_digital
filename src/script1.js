const divh = document.getElementById('h')
const divm = document.getElementById('m')
const divs = document.getElementById('s')

setInterval(() => {
    const data = new Date()
    const horas = data.getHours()
    const minutos = data.getMinutes()
    const segundos = data.getSeconds()

    divh.textContent = horas 
    divm.textContent = minutos
    divs.textContent = segundos 
}, 1);