//constructor del squad

function MiembroSquad(nombre,apellido,edad,hobbies){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
}

var
var cami = new MiembroSquad("Camila","Saez",24,"ver pinterest");
var anto = new MiembroSquad("Antonia","Cerda",23,"diseñar");
var caro = new MiembroSquad("Carolina","Tapia",27,"trekking");
var cote1 = new MiembroSquad("María José","Rodriguez",32,"ver series");
var cote2 = new MiembroSquad("María José","Pozo",31,"bailar");
var fran = new MiembroSquad("Francisca","Ojeda",28,"rollerderby");
var val = new MiembroSquad("Valentina","Saavedra",26,"medicina autogestiva");
var marion = new MiembroSquad("Marion","Castillo",29,"caminar");

for (i=1 ; i<=8 ; i++){
	member + i = document.getElementById("miembro" + i.toString());
	(member + i).innerHTML = "<b>Nombre: <\b>" + cami.nombre + "<br><b>Apellido: <\b>" + cami.apellido + 
	"<br><b>Edad: <\b>" + cami.edad + "<br><b>Hobbie: <\b>" + cami.hobbies;

}