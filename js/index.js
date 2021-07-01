
/*2. L'activitat està formada al <BODY> únicament per: (etiquetes HTML ja creades al fitxer .html
descarregat)*/

//● Un < INPUT >
//● Un < BUTTON >
//● Tres < DIV >


/*3. En escriure una quantitat a l' <INPUT> i prémer el <BUTTON> realitza diferents acciones:*/

/*a) Es calcula l'IVA (el 21% de la quantitat escrita) i es mostra al primer <DIV> el següent text:
l'IVA de [la quantitat escrita] € és [l'IVA calculat]€.*/

/*b) Al segon < DIV > s'afegeix (al final del contingut d'aquest < DIV > , sense esborrar el contingut
anterior) un resum de l'operació realitzada al punt anterior:*/

//[quantitat escrita]+[IVA calculat] =[suma]€
//[quantitat escrita] + [IVA calculat] =[suma]€
//[quantitat escrita] + [IVA calculat] =[suma]€

/*c) Dintre del tercer < DIV > s'indica únicament la suma total (de totes les quantitats escrites per
l'usuari -amb l’IVA inclós-). Aquest valor no s’afegeix al contingut anterior, sinò que el contingut
s’actualitza.*/

//[suma_total]€

/*d) Es buida l’ <INPUT> .*/

//Doncs poso un botó nou...

/*e) El cursor es col·loca al seu interior (per facilitar l'escriptura de l'usuari sense que aquest
tingui que fer clic).*/

//Aixo ja l'he fet a l'html amb <input id="quantitat" autofocus /> o amb el document.getElementById("quantitat").focus();


window.onload = inici;

const IVA = 21; //com aquesta variable no cambiara la poso com a constant. 

function inici() { //a dins d'aquesta funcion coloco l'event onclik als botons i l'obtenció del input y el seu autofocus
	document.getElementById("calcular").onclick = iniciarCompra;
	document.getElementById("quantitat").value;
	document.getElementById("quantitat").focus();
	document.getElementById("netejar").onclick = netejarInput;
}


var preuTotal = 0; //aquesta variable la poso fora de tot per fer-la global i poder fer servir el seu valor inicial

function iniciarCompra() { //en aquesta funció es fan els ompliments de les tres caixes

	var quantitat = document.getElementById("quantitat").value;
	var totalIVA = calcularIVA(quantitat, IVA);
	document.getElementById("caixa1").innerHTML += `l'IVA de ${quantitat} € és ${totalIVA} €.<br>`;

	var valorTotal = sumaTotals(quantitat, totalIVA);
	document.getElementById("caixa2").innerHTML += `${quantitat} + ${totalIVA} = ${valorTotal}€<br>`;

	preuTotal = sumaAcumulativa(valorTotal);
	document.getElementById("caixa3").innerHTML += `${preuTotal}€<br>`;
}

function calcularIVA(quantitat, IVA) { //funció que calcula l'iva
	var resultat = quantitat * IVA / 100;
	return resultat;
}

function sumaTotals(quantitat, totalIVA) { //funcio que calcula la suma de la quantitat mes l'iva
	var resultat = Number(quantitat) + Number(totalIVA);
	return resultat.toFixed(2);
}

function sumaAcumulativa(valorTotal) { //funcio que calcula les sumes de tots els valors finals (quantitat + iva)

	suma = Number(preuTotal) + Number(valorTotal);
	return suma;
}

function netejarInput() {
	document.getElementById("quantitat").value = " ";
}



/*4. L’operació es realitza tant fent clic al <BUTTON>, com prement la tecla ENTER del teclat.*/