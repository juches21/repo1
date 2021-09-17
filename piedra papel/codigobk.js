	var cpu = Math.floor(Math.random(1)*(3))+1
// 1 = piedra
// 2 = papel
// 3 = tigera
	console.log(cpu)
function recogerDatos(){
	let nombre= " ";
	let piedra = document.getElementById('piedra')
	let papel = document.getElementById('papel')
	let tigeras= document.getElementById("tigeras")


	if (piedra.checked) {
		let nombre = 1

	}
	else if (papel.checked) {
		let nombre = 2;
		
	}
	else if (tigeras.checked) {
		let nombre = 3;
		
	}


let estado = 0

		switch (nombre){
		case "1":
			switch(cpu){
				case "1":
					console.log("empate")
					estado=2
				break;
				case "2":
					console.log("pierdes")
					estado=1
				break;
				case "3":
					console.log("Ganas")
					estado=3
				break;
			}
		 break;
		 case "2":
			console.log ("papel")
		 switch(cpu){
				case "1":
					console.log("Ganas")
					estado=3
				break;
				case "2":
					console.log("empate")
					estado=2
				break;
				case "3":
					console.log("pierdes")
					estado=1
				break;
			}




		 break;
		 case "3":
			echo ("tigera")


		 switch(cpu){
				case "1":
					console.log("pierdes")
					estado=1
				break;
				case "2":
					console.log("Ganas")
					estado=3
				break;
				case "3":
					console.log("empate")
					estado=2
				break;
			}
		 break;
	}
	console.log (estado)
}