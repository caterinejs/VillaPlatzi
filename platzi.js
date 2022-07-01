var vp= document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var teclas =
{
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

var fondo = {
  url:"tile.png",
  cargaOK: false,
};

var vaca = {
  url:"vaca.png",
  cargaOK: false,
  x:[],
  y:[]
}

var pollo = {
  url:"pollo.png",
  cargaOK: false,
  x:[],
  y:[]
};

var cerdo = {
  url:"cerdo.png",
  cargaOK: false,
  x:0,
  y:0
}

var cantidad = aleatorio(1, 50);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo()
{
 fondo.cargaOK = true;
 dibujar();
}

function cargarVacas()
{
 vaca.cargaOK = true;
 dibujar();
}

function cargarPollos()
{
 pollo.cargaOK = true;
 dibujar();
}

function cargarCerdos()
{
 cerdo.cargaOK = true;
 dibujar();
}

function dibujar()
  {
    if(fondo.cargaOK)
    {
      papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
      for(var v=0; v < cantidad; v++)
      {
        var x = (aleatorio(0, 7)*60);
        var y = (aleatorio(0, 7)*60);
        vaca.x[v] = x;
        vaca.y[v] = y;
        papel.drawImage(vaca.imagen, x, y);
      }
    }

    if(pollo.cargaOK)
    {
      for(var p=0; p <cantidad; p++)
      {
        var x = (aleatorio(0, 7)*60);
        var y = (aleatorio(0, 7)*60);
        pollo.x[p] = x;
        pollo.y[p] = y;
        papel.drawImage(pollo.imagen, x, y);
      }
    }

    if(cerdo.cargaOK)
      {
        var x = (aleatorio(0, 7)*60);
        var y = (aleatorio(0, 7)*60);
        cerdo.x = x;
        cerdo.y = y;
        papel.drawImage(cerdo.imagen, x, y);
      }
  }

  function aleatorio(min,maxi)
  {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
  }

function moverCerdo(x, y)
 {
   papel.drawImage(cerdo.imagen, x, y);
 }

function dibujarOtraVez()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    for(var v=0; v < cantidad; v++)
    {
      papel.drawImage(vaca.imagen, vaca.x[v], vaca.y[v]);
    }
  }
  if(pollo.cargaOK)
  {
    for(var p=0; p < cantidad; p++)
    {
      papel.drawImage(pollo.imagen, pollo.x[p], pollo.y[p]);
    }
  }
}

 document.addEventListener("keyup", moverTecla);

 function moverTecla(evento)
  {
  var movimiento = 5;
   switch(evento.keyCode)
   {
     case teclas.UP:
     dibujarOtraVez();
     moverCerdo(cerdo.x, cerdo.y);
     cerdo.y = cerdo.y - movimiento;
     break;

     case teclas.DOWN:
     dibujarOtraVez();
     moverCerdo(cerdo.x, cerdo.y);
     cerdo.y = cerdo.y + movimiento;
     break;

     case teclas.LEFT:
     dibujarOtraVez();
     moverCerdo(cerdo.x, cerdo.y);
     cerdo.x = cerdo.x - movimiento;
     break;

     case teclas.RIGHT:
     dibujarOtraVez();
     moverCerdo(cerdo.x, cerdo.y);
     cerdo.x = cerdo.x + movimiento;
     break;

     default:
     console.log("otra tecla");
     break;
    }
   }
