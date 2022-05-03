//código do ator
let xAtor = 80;
let yAtor = 370;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
      yAtor += 3;  
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQuqeZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 370;  
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25)
  text(meusPontos, width / 5, 27);
  fill(color(255, 240, 60));
}

function marcaPonto(){
  if (yAtor < 15){
    voltaAtorParaPosicaoInicial();
    meusPontos += 1;
    somDoPonto.play();
  }
}

function pontosMaiorQuqeZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 370;
}