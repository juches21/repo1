	
// 1 = piedra
// 2 = papel
// 3 = tigera
var cuentas = []
function recogerDatos(){
	let nombre= " ";
	let piedra = document.getElementById('piedra')
	let papel = document.getElementById('papel')
	let tijeras= document.getElementById("tijeras")
var cpu = Math.floor(Math.random(1)*(3))+1
console.log(cpu)
	if (piedra.checked) {
		nombre = 1

	}
	else if (papel.checked) {
		nombre = 2;
		
	}
	else if (tijeras.checked) {
		nombre = 3;
		
	}

// adsfcasdfvsdv


	if (nombre == 1){ 
		if (cpu==1) {
			console.log ("piedra vs piedra = empate")
			cuentas.push("empatada")
		}
		else if ( cpu == 2){
			console.log ("piedra vs papel = pierdes")
			cuentas.push("perdida")
		}
		
		else {
			console.log ("piedra vs tijeras = ganas")
			cuentas.push("ganada")
		}
	}



	if (nombre == 2){ 
		if (cpu==1) {
			console.log ("papel vs piedra = ganas")
			cuentas.push("ganada")
		}
		else if ( cpu == 2){
			console.log ("papel vs papel = empate")
			cuentas.push("empatada")
		}
		
		else {
			console.log (" papel vs tijeras = pierdes")
			cuentas.push("perdida")
		}
	}
	if (nombre == 3){ 
		if (cpu==1) {
			console.log ("tijeras vs piedra = pierdes")
			cuentas.push("perdida")
		}
		else if ( cpu == 2){
			console.log ("tijeras vs papel = ganas")
			cuentas.push("ganada")
		}
		
		else {
			console.log (" tijeras vs tijeras = empate")
			cuentas.push("empate")
		}
	}
}
		
function recogerREsultados(){

console.log (cuentas)
}

