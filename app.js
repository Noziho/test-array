
//Math tests :
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");

a.innerHTML = Math.floor(a.innerHTML);
b.innerHTML = Math.round(b.innerHTML);
c.innerHTML = Math.ceil(c.innerHTML);


// Array tests :

let table1 = ["Alexis", "tu", "est", "lourd", 1, 2,3];
table1.push(4);
table1.pop();
table1.shift();
table1.unshift("Bonjour")
table1.splice(0, 3, "salut");
c.innerHTML = table1.join("/");