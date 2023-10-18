### ESERCIZIO

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 

### SOLUZIONE

**Dati**

1. Chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
2. Calcolare il prezzo totale del viaggio in base a:
- prezzo del biglietto definito in base ai km (0.21€ per km)
- applicare uno sconto del 20% per i minorenni;
- applicare uno sconto del 40% per gli over 65.

**Logica**

1. Calcolare il prezzo totale del viaggio in base a quanti km dovrà percorrere l'utente
2. Determinare se al prezzo totale vanno applicati gli sconti in base all'età dell'utente
3. Se l'utente è minorenne (età < 18 anni) allora al prezzo totale del biglietto viene applicato uno sconto del 20% (preparo il messaggio "Prezzo totale con sconto applicato del 20%: ..."), se l'utente ha un'età superiore ai 65 anni (età > 65 anni) allora al prezzo totale del biglietto viene applicato uno sconto del 40% (preparo il messaggio "Prezzo totale con sconto applicato del 40%: ..."), se invece l'utente ha un'età compresa tra i 18 e i 65 anni allora il prezzo del biglietto rimarrà invariato (preparo il messaggio "Prezzo totale: ...").

**Output**

Stampo il messaggio