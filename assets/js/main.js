//constructor del squad

function MiembroSquad(nombre,apellido,edad,hobbies){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
}

var lista = new Array(8);
lista[0] = new MiembroSquad("Camila","Saez",24,"ver pinterest");
lista[1] = new MiembroSquad("Antonia","Cerda",23,"diseñar");
lista[2] = new MiembroSquad("Carolina","Tapia",27,"trekking");
lista[3] = new MiembroSquad("María José","Rodriguez",32,"ver series");
lista[4] = new MiembroSquad("María José","Pozo",31,"bailar");
lista[5] = new MiembroSquad("Francisca","Ojeda",28,"rollerderby");
lista[6] = new MiembroSquad("Valentina","Saavedra",26,"medicina autogestiva");
lista[7] = new MiembroSquad("Marion","Castillo",29,"caminar");

lista.forEach(function(element){
	var miembros = document.getElementById("miembro" + lista.indexOf(element).toString());
	miembros.innerHTML = ("<b>Nombre: </b>" + element.nombre + "<br><b>Apellido: </b>" + element.apellido + 
	"<br><b>Edad: </b>" + element.edad + "<br><b>Hobbie: </b>" + element.hobbies);
});


