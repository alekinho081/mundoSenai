const canvas = document.getElementById('jogoCanvas')
const ctx = canvas.getContext('2d')


function loop () {
    ctx.clearRect(0,0,canvas.width, canvas.height)
 
    requestAnimationFrame(loop)
}

loop()