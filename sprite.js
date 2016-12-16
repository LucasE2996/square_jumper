function sprite(x, y, largura, altura) {
	this.x = x;
	this.y = y;
	this.altura = altura;
	this.largura = largura;

	this.desenha = function(xCanvas, yCanvas) {
//drawImage(imagem,
//			ponto inicial,
// 			ponto final,
// 			ponto inicial da imagem,
// 			ponto final da imagem);
		ctx.drawImage(img,
			this.x, this.y,
			this.largura, this.altura,
			xCanvas, yCanvas, 
			this.largura, this.altura
			);
	}
}
//background:
var bg = new sprite(0, 0, 600, 600),


perdeu = new sprite(603, 478, 397, 358),
jogar = new sprite(603, 127, 397, 347),
novo = new sprite(68, 721, 287, 93),
spriteRecord = new sprite(28, 879, 441, 95),
spriteChao = new sprite(0, 604, 600, 54),

redObstacle = new sprite(662, 867, 50, 120),
pinkObstacle = new sprite(719, 867, 50, 120),
blueObstacle = new sprite(779, 867, 50, 120),
greenObstacle = new sprite(839, 867, 50, 120),
yellowObstacle = new sprite(898, 867, 50, 120),

//Boneco do jogo:
spriteBoneco = new sprite(618, 16, 87, 87)
;
