//Creando un algoritmo que filtre entre una lista de personas para dejar entrar solo a los mayores que 21


let objetosPersonas = [
	{
		nombre: "Javi",
		edad: 26
	},
	{
		nombre: "Jhonny",
		edad: 25
	},
	{
		nombre: "Luis",
		edad: 19
	},
	{
		nombre: "Daniel",
		edad: 20
	},
	{
		nombre: "Blas",
		edad: 23
	},
	{
		nombre: "Maria",
		edad: 20
	},
	{
		nombre: "Daniela",
		edad: 22
	},
	{
		nombre: "Leo",
		edad: 30
	}
];


let discoteca = objetosPersonas.filter((persona) => {
	if (persona.edad >= 21) {
		return true;
	} else {
		return false;
	}
});

console.log(discoteca);