const h = document.getElementById('horas') 
const m = document.getElementById('minutos')
const s = document.getElementById('segundos')

setInterval(() => {
    const data = new Date()
    const horas = data.getHours()
    const minutos = data.getMinutes()
    const segundos = data.getSeconds()

    h.textContent = horas
    m.textContent = minutos
    s.textContent = segundos
}, 100);