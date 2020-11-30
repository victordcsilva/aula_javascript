function clicou(){

    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

    //alert("obrigado por clicar");
}

function redirecionar(){
    window.open("http://www.google.com/");//nova aba
    //window.location.href="http://www.google.com/";//mesma aba
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse";
    //alert("trocar texto")
    elemento.innerHTML="Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML="Passe por passar o mouse";
    elemento.innerHTML="Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value)
}
/*function soma(n1, n2){
    return n1+n2;
}
alert(soma(5,10));

function setReplace(frase,nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setReplace("vai japão","japão","brasil"));*/
/*var nome = "Victor Silva";
var idade = 28;
var idade2 = 10;
var idade3="10";
var idade4="28";
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem "+idade +" anos");
alert(idade+idade2);
alert(idade3+idade4)
alert(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
*/

/*var list = ["maça","pêra","laranja"];
console.log(list);

console.log(list[1]);
list.push("uva");
console.log(list)
list.pop();
console.log(list.length);
console.log(list.reverse());
console.log(list.toString());
console.log(list.join(" - "));*/

/*var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta);
console.log(fruta.cor);*/

/*var frutas = [{nome: "maça",cor: "vemelha"},{nome:"uva",cor:"verde"}];
console.log(frutas);
alert(frutas[1].nome);*/

/*var idade = prompt("Qual a sua idade");
if(idade>=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}*/

/*var count = 0;
while (count<5){
    console.log(count);
    count = count + 1;
}*/

/*var count;
for(count=0;count<=5;count++){
    alert(count);
}*/

/*var d = new Date();
alert(d);
console.log(d.getMonth(8));*/