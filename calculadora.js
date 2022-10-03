var resultado;
var FTabla = [];
var mensaje;

function carcular() {
let n1 = getElementById('num1').value;
let n2 = getElementById('num2').value;
let operacion = getElementById('operacion').value;

num1 = parseInt(n1);
num2 = parseInt(n2);
}

switch(operacion) {
	case "Suma":
	resultado = num1 + num2;
	mensaje  = "El resultado de "+operacion+" "+num1+" y "+num2+" es igual a"+resultado+"";
	resp.value  =  mensaje;
	break;
	
	case "Resta":
	resultado = num1 - num2;
	mensaje  = "El resultado de "+operacion+" "+num1+" y "+num2+" es igual a"+resultado+"";
	resp.value  =  mensaje;
	break;
	
	case "Multiplicacion":
	resultado = num1 * num2;
	mensaje  = "El resultado de "+operacion+" "+num1+" y "+num2+" es igual a"+resultado+"";
	resp.value  =  mensaje;
	break;
	
	case "Division":
	resultado = num1 / num2;
	mensaje  = "El resultado de "+operacion+" "+num1+" y "+num2+" es igual a"+resultado+"";
	resp.value  =  mensaje;
	break;
	
	default:
	    break;
	    }
	 
	 guardar();
	
function guardar() {
  calc  =  {};
  calculo  = document.getElementsByName('calcular');
  
  for (i in calculo) {
  	cl  = calculo [i];
  	calc[cl.id]  = cl.value;
  }
	 FTabla.push(calc);
	 localStorage.getItem('introx', JSON.stringify(FTabla));
	 mostrar();
}
function mostrar () {
	for (let i = 0; i < FTabla.length; i++ ) {
		fila = FTabla [i];
		
		tr = document.createElement('tr');
		vlm = document.getElementById('cal').value;
		vlm = vlm.replace('{operacion}',fila.operacion);
		vlm = vlm.replace('{Resultado}',fila.resp);
		tr.innerHTML = vlm;
		document.getElementById('calculo').appendChild(tr);
	}
}

