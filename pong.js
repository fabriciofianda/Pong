//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let dIametro = 15;
let raio = dIametro / 2; 

//variaveis do movimento
let vElocidadeEixoX = 6;
let vElocidadeEixoY = 6;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraR = 10;
let alturaR = 90;

//colisao
let colidiu = false;

//oponente
let xRaquete2 = 585;
let yRaquete2 = 150;
let vElocidade2;

//placar do jogo
let mypoints = 0;
let oppoints = 0;

//erro oponente
let chanceDeErrar = 0;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  showball();
  movimento__bola();
  colisaoborda();
  raquete(xRaquete, yRaquete);
  raquete__movimento();
  //raquete__colisao();
  raquete_solucao(xRaquete, yRaquete);
  raquete(xRaquete2, yRaquete2);
  raquete__movimento2();
  raquete_solucao(xRaquete2, yRaquete2);
  showplacar();
  marcaplacar();
  bolinhaNaoFicaPresa();
}

//mostrar bola

function showball(){
  circle(xBolinha, yBolinha, dIametro);
}

//velocidade da bola

function movimento__bola(){
  xBolinha += vElocidadeEixoX;
  yBolinha += vElocidadeEixoY;
}

//colisão da borda

function colisaoborda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    vElocidadeEixoX *= -1;
  }
  else if (yBolinha + raio > height || yBolinha - raio < 0){
    vElocidadeEixoY *= -1;
  }
}

//criar retangulo

function raquete(x,y){
  rect(x, y, larguraR, alturaR);
}

//movimento das raquetes

function raquete__movimento(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  } 
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

//movimento raquete do oponente

function raquete__movimento2(){
  vElocidade2 = yBolinha - yRaquete2 - larguraR / 2 - 30;
  yRaquete2 += vElocidade2 + chanceDeErrar;
  CalcErro()
}

//erro no movimento op
function CalcErro() {
  if (oppoints >= mypoints) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

//solução colisão raquete

function raquete__colisao(){
  if (xBolinha - raio < xRaquete + larguraR && yBolinha - raio < yRaquete + alturaR && yBolinha + raio > yRaquete){
        vElocidadeEixoX *= -1;
      }
}

//solução colisão raquete2

function raquete__colisao2(){
    if (xBolinha - raio < xRaquete + larguraR && yBolinha - raio < yRaquete + alturaR && yBolinha + raio > yRaquete){
          vElocidadeEixoX *= -1;
        }
  }

//solução do da colisão bolinha

function raquete_solucao(x, y){
  colidiu = collideRectCircle(x, y, larguraR, alturaR, xBolinha, yBolinha, raio);
  if (colidiu){
    vElocidadeEixoX *= -1;
  }
}

function showplacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(255, 165, 0);
  rect(150, 10, 40, 20);
  fill(285);
  text(mypoints, 170, 26);
  fill(255, 165, 0);
  rect(450, 10, 40, 20);
  fill(285);
  text(oppoints, 470, 26);
}

function marcaplacar(){
  if (xBolinha > 590){
    mypoints += 1;
  }
  if (xBolinha < 10){
    oppoints += 1;
  }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}