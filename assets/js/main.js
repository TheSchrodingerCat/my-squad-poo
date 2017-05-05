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

/*var miembros = document.getElementById("miembro" + (1).toString());
	miembros.innerHTML = ("<b>Nombre: </b>" + m1.nombre + "<br><b>Apellido: </b>" + m1.apellido + 
	"<br><b>Edad: </b>" + m1.edad + "<br><b>Hobbie: </b>" + m1.hobbies);*/



for (i=0 ; i<8 ; i++){
	var miembros = document.getElementById("miembro" + (i).toString());
	miembros.innerHTML = ("<b>Nombre: </b>" + lista[i].nombre + "<br><b>Apellido: </b>" + lista[i].apellido + 
	"<br><b>Edad: </b>" + lista[i].edad + "<br><b>Hobbie: </b>" + lista[i].hobbies);
}




