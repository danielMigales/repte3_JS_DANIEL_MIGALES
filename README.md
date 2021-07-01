# repte3_JS_DANIEL_MIGALES

Exercici curs de programacio Mobile del SOC


2. L'activitat està formada al <BODY> únicament per: (etiquetes HTML ja creades al fitxer .html
descarregat)
● Un <INPUT >
● Un <BUTTON>
● Tres <DIV>
3. En escriure una quantitat a l' <INPUT> i prémer el <BUTTON> realitza diferents acciones:
a) Es calcula l'IVA (el 21% de la quantitat escrita) i es mostra al primer <DIV> el següent text:
l'IVA de [la quantitat escrita] € és [l'IVA calculat] €.
b) Al segon <DIV> s'afegeix (al final del contingut d'aquest <DIV> , sense esborrar el contingut
anterior) un resum de l'operació realitzada al punt anterior:
[quantitat escrita] + [IVA calculat] = [suma] €
[quantitat escrita] + [IVA calculat] = [suma] €
[quantitat escrita] + [IVA calculat] = [suma] €
...
c) Dintre del tercer <DIV > s'indica únicament la suma total (de totes les quantitats escrites per
l'usuari -amb l’IVA inclós-). Aquest valor no s’afegeix al contingut anterior, sinò que el
contingut s’actualitza.
[suma_total] €
d) Es buida l’ <INPUT> .
e) El cursor es col·loca al seu interior (per facilitar l'escriptura de l'usuari sense que aquest
tingui que fer clic).
4. L’operació es realitza tant fent clic al <BUTTON>, com prement la tecla ENTER del teclat.
5. Si no s'escriu res a l’ <INPUT> i es prem el <BUTTON> (o la tecla ENTER ) es calcula per defecte
l'IVA de 0€.
6. En fer clic sobre el segon <DIV> (el del resum on figuren totes les quantitats escrites fins al
moment):
a) Es buiden tots els <DIVs>.
b) Es buida l’ <INPUT>.
c) Es reinicia la suma de productes (tot torna a estar igual que al principi).
Bonus Track: Opció Extra no obligatòria (per pujar nota).
En realitzar algunes sumes amb nombres decimals, el resultat mostra més decimals dels
necessaris. Així, si per exemple calcules l'IVA de 99€, en comptes de mostrar 119.79, javaScript
mostra 119.78999999999999.
Soluciona aquest problema utilitzant alguna de les solucions proposades en els vídeos del PLA
o de creació pròpia.
Pots provar calculant quantitats com 99 , 101 o 304 entre d'altres.
