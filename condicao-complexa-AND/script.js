let idade=number(prompt("insira sua idade"));
let temCNH = prompt("Possui CNH (sim ou nao");

if (idade >=18 && temCNH === "sim") {
    alert("você pode dirigir");
} else{
        alert("você não pode dirigir");
}