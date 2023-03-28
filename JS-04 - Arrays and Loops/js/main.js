let people = ['Sofia',"David",'Juan'];
let divAlert = document.getElementById("divAlert");

console.log(people);

//Se agregan personas a la lista
people.push('Sara','Augustin');
console.log(people);
divAlert.innerHTML = "Cantidad de personas en la fila ";

//Se quita la primer persona
var siguiente = people.shift();
console.log(people);


//Se cambia la primer persona
people.splice(1,0,'Renata');
console.log(people);

//Se agregan personas a la lista
people.push('Elena');
console.log(people);

divAlert.innerHTML += people.length + "<ol><li>" + people[0] + "</li> "
 + "<li>" + people[1] + "</li>"
 + "<li>" + people[2] + "</li>"
 + "<li>" + people[3] + "</li>"
 + "<li>" + people[4] + "</li>"
 + "<li>" + people[5] + "</li></ol>";