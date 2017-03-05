var classMsj=document.getElementsByClassName('mensaje');
var msj=document.getElementById('mostrar');
var cant=0;
for (var i = 0; i <= classMsj.length; i++) {
  cant=i;
}

function mostraMensaje(){
  var mensaje="";
  (cant>=4)? mensaje="Son muchos" : (cant>=2)? mensaje="No esta mal" : mensaje="Es muy poco";
  msj.innerHTML="<h4>Existen "+cant+" mensajes."+mensaje+"</h4>";
}
mostraMensaje();
