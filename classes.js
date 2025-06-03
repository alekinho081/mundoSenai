
class Jogo {
    constructor(x, y, largura, altura, tipo) {
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura
        this.tipo = tipo
    }
    desenhar = function (ctx, cor) {
        ctx.fillStyle = cor
        ctx.fillRect(this.x, this.y, this.largura, this.altura)
    }
}

export default class Boneco extends Jogo {
    constructor(x, y, largura, altura, tipo) {
        super(x, y, largura, altura, tipo);
        this.velocidade = 0
        this.direita = false
        this.esquerda = false
        this.cima = false
        this.baixo = false
    }
    moverDireita = function () {
        this.velocidade = 5
        this.direita = true
    }
    naoMoverDireita = function () {
        this.velocidade = 0
        this.direita = false
    }
    moverEsquerda = function () {
        this.velocidade = 5
        this.esquerda = true
    }
    naoMoverEsquerda = function () {
        this.velocidade = 0
        this.esquerda = false
    }
    moverCima = function () {
        this.velocidade = 5
        this.cima = true
    }
    naoMoverCima = function () {
        this.velocidade = 0
        this.cima = false
    }
    atualizar = function () {
        if (this.direita == true) {
            this.x += this.velocidade
        }
        if (this.esquerda == true) {
            this.x -= this.velocidade
        }
        if (this.cima == true) {
            this.y -= this.velocidade
        }
        if (this.baixo == true) {
            this.y += this.velocidade
        }

        if (this.x <= -45 && this.tipo === 'Carro'){
            const max = 43
            const numeroInteiro = Math.floor(Math.random() * max);
            this.x = numeroInteiro + 1000
        }else if(this.x <= 0 && this.tipo === 'Player'){
            this.x  = 5
        }
        if(this.x >= 1045 && this.tipo === 'Carro'){
            const max = -43
            const numeroInteiro = Math.floor(Math.random() * max)
            this.x = numeroInteiro - 10
        }

    }
}

