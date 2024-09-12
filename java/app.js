alert("Seja bem-vindo, aluno(a) !");
var nome = prompt("Insira seu nome completo.");
document.getElementById("conteudo").innerHTML = "Olá, aluno(a) "+ nome;



function notas(){
    var n1 = parseFloat(document.getElementById("cx1").value);
    var n2 = parseFloat(document.getElementById("cx2").value);
    var n3 = parseFloat(document.getElementById("cx3").value);
    var media = (n1+n2+n3)/3;
    
    var alunoFoi = parseFloat(document.getElementById("cx4").value);
    var frequencia = (alunoFoi/10)*100
    
    
    if (media>= 7 && frequencia >= 75){
        alert ("Você foi aprovado. Parabéns !")
    }
    else if(media <=4 || frequencia <=75){
        alert ("Infelizmente, você foi reprovado.")
    }
    else{
        alert ("Você está de exame.")
    }
    }