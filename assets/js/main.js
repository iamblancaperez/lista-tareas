var tareas = arr.slice(0,10);

var miUl = document.getElementById("tareas");
var liAux, textAux;
tareas.forEach(function(el){
	liAux = document.createElement("li");
	textAux = document.createTextNode(el.title);
	liAux.appendChild(textAux); 
  miUl.appendChild(liAux);
});

function addTask(){
	var miInput = document.getElementById("task").value;
	var liAux = document.createElement("li");
	var textAux = document.createTextNode(miInput);
	liAux.appendChild(textAux); 
  miUl.appendChild(liAux);
  document.getElementById("task").value = "";
}
