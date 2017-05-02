var tareas = arr.slice(0,10);

var miUl = document.getElementById("tareas");
var liAux, textAux;

tareas.forEach(renderTask);

function renderTask(task){
	var liAux = document.createElement("li");
	var textAux = document.createTextNode(task.title + "  ");
	var enlace =  document.createElement("a");
	var textEdit = document.createTextNode("Editar");
	liAux.appendChild(textAux); 
  miUl.appendChild(liAux);
  enlace.appendChild(textEdit);
  enlace.setAttribute("onclick", "editTask(this, " + task.id +")");
  liAux.appendChild(enlace);
}

function editTask(enlace, idTask){
	console.log(enlace);
	console.log(idTask);
	var nuevoTexto = prompt("Ingrese el nuevo texto");
	var tarea = tareas.filter(function(el){
		return el.id == idTask;
	});
	tarea[0].title = nuevoTexto;

	var miLi = enlace.parentNode;
	miLi.innerHTML = nuevoTexto;
	miLi.appendChild(enlace);
}



function Task(title){
	this.title = title;
	this.userId = Math.floor((Math.random() * 10) + 1);
	this.completed = false;
	this.id = tareas.length + 1;
}

function addTask(){
	var miInput = document.getElementById("task");
	if(miInput.value != ""){
		var task = new Task(miInput.value);
		tareas.push(task);
		renderTask(task);
		miInput.value = ""
	}

}



