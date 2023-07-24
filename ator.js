//cógido ator
let xAtor = 100;
let yAtor = 375;
let colisao = false;
let meusPontos = 0;

  function mostraAtor(){
     image(imagemDoAtor, xAtor, yAtor, 25, 25);
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
  for (let i = 0; i < imagemCarros.length; i ++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      posicaoInicial();
      somColisao.play();
      if (pontosMaiorZero()){
        meusPontos -= 1;
      }
    }   
  }
}

function posicaoInicial(){
  yAtor = 375;
}

function incluiPontos(){
  fill(color(255, 230, 97))
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width / 5, 27)
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somPontos.play();
    posicaoInicial();
  }
}

function pontosMaiorZero(){
   return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 375;
}

