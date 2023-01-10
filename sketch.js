//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20
let raio = diametro / 2;


//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 12;
let raqueteAltura = 80;

// variaveis da raquete
let xRaquete = 5;
let yRaquete = 155;

// variaveis raquete oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 155;
let velocidadeYOponente;

let colidu = false;


// placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

// sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
  raquetada.play();
  ponto.play();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();

}

function mostraBolinha(){
    circle(xBolinha, yBolinha, diametro);

}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
    if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
      ponto.play();
  }
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
    
  }
}

function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio <xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoRaquete(x, y){
  colidiu = 
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}



function movimentaRaqueteOponente(){
 if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha <10){
    pontosOponente += 1;
  }
}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}
