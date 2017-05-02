var tareas = arr.slice(0,10);

var miUl = document.getElementById("tareas");
var liAux, textAux;
tareas.forEach(function(el){
	liAux = document.createElement("li");
	textAux = document.createTextNode(el.title);
	liAux.appendChild(textAux); 
  miUl.appendChild(liAux);
});

