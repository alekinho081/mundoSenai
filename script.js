const canvas = document.getElementById('jogoCanvas')
const ctx = canvas.getContext('2d')
import Boneco from './classes.js'

const sapo = new Boneco(475, 530, 50, 45, 'Player')
const carros = [
    {c1: new Boneco(1000, 452, 50, 45, 'Carro')},
    {c2: new Boneco(-40, 374, 50, 45, 'Carro')},
]




document.addEventListener('keydown', (e) => {
    if(e.key === "w"){
        sapo.y -= 78
        console.log('cima')
    }
    if(e.key === "s"){
        sapo.y += 78
        console.log('cima')
    }
    if(e.key === "d"){
        sapo.moverDireita()
        console.log('direita')
    }
    if(e.key === "a"){
        sapo.moverEsquerda()
        console.log('esquerda')
    }
})
document.addEventListener('keyup', (e) => {
    if(e.key === "d"){
        sapo.naoMoverDireita()
        console.log('direita')
    }
    if(e.key === "a"){
        sapo.naoMoverEsquerda()
        console.log('esquerda')
    }
})


function loop () {
    ctx.clearRect(0,0,canvas.width, canvas.height)
    carros[0].c1.desenhar(ctx, 'red')
    carros[0].c1.atualizar()
    carros[0].c1.moverEsquerda()
    carros[1].c2.desenhar(ctx, 'red')
    carros[1].c2.atualizar()
    carros[1].c2.moverDireita()

    
    sapo.desenhar(ctx, 'white')
    sapo.atualizar()
    requestAnimationFrame(loop)
}

loop()