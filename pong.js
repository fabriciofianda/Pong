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
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  showball();
  movimento__bola();
  colisaoborda();
  raquete();
  raquete__movimento();
  //raquete__colisao();
  raquete_solucao();
}

function showball(){
  circle(xBolinha, yBolinha, dIametro);
}

function movimento__bola(){
  xBolinha += vElocidadeEixoX;
  yBolinha += vElocidadeEixoY;
}

function colisaoborda(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    vElocidadeEixoX *= -1;
  }
  else if (yBolinha + raio > height || yBolinha - raio < 0){
    vElocidadeEixoY *= -1;
  }
}

function raquete(){
  rect(xRaquete, yRaquete, larguraR, alturaR);
}

function raquete__movimento(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  } 
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function raquete__colisao(){
  if (xBolinha - raio < xRaquete + larguraR && yBolinha - raio < yRaquete + alturaR && yBolinha + raio > yRaquete){
        vElocidadeEixoX *= -1;
      }
}

function raquete_solucao(){
  colidiu = collideRectCircle(xRaquete, yRaquete, larguraR, alturaR, xBolinha, yBolinha, raio);
  if (colidiu){
    vElocidadeEixoX *= -1;
  }
}