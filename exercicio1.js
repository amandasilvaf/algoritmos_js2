
var candidato1 ={
    nome: 'Rudolf',
    partido: 'Felicidade',
    numero: 1,
    votos: 0
}
var candidato2 ={
    nome: 'Joseph',
    partido: 'Esperança',
    numero: 2,
    votos: 0
}
var candidato3 ={
    nome: 'Jhon',
    partido: 'Decisão',
    numero: 3,
    votos: 0
}
var candidatoNulo = {
    nome: "Sem nome",
    partido: "Nenhum",
    numero: 0,
    votos: 0
}

votacao = [];
nulo = 0;

function alimentaUrna(){
    alert('Bem vindo à urna eletrônica.\nDigite 1 para votar no candidato Rudolf do Partido Felicidade.\nDigite 2 para votar no candidato Joseph do Partido da Esperança.\nDigite 3 para votar no candidato Jhon do Partido da Decisão.\nDigite 11002019 para encerrar a votação.')
   

    while (voto != 11002019){
        var voto = Number(prompt('1-Rudolf-Partido da Felicidade.\n2-Joseph-Partido da Esperança.\n3-Jhon-Partido da Decisão.'))
        if(voto != 1 && voto!=2 && voto!=3 && voto !=11002019){
            nulo ++;
        }else{
            votacao.push(voto);
        }
    }
   
}



 function contaVotos(votacao){

     votacao.map(function(item){
         if(item === 1){
             candidato1.votos ++
         }
        else if(item === 2){
            candidato2.votos ++
        }
       else if(item === 3){
            candidato3.votos ++
        }
     }
     );
     
}

function vencedor(candidato1, candidato2, candidato3){
    var maisVotado = candidatoNulo;
    if(maisVotado.votos < candidato1.votos){
        maisVotado = candidato1
        if(maisVotado.votos < candidato2.votos){
            maisVotado = candidato2
            if(maisVotado.votos < candidato3.votos){
                maisVotado = candidato3
            } 
        }else if(maisVotado.votos < candidato3.votos){
            maisVotado = candidato3
        }

    }

    
    

    alert(`Resultado da eleição:\n${candidato1.nome} - ${candidato1.votos}\n${candidato2.nome} - ${candidato2.votos}\n${candidato3.nome} - ${candidato3.votos}\n`)
    alert(`O candidato vencedor foi ${maisVotado.nome}. Número ${maisVotado.numero}. Partido ${maisVotado.partido}, com ${maisVotado.votos} votos \nO total de votos nulos foi: ${nulo}` )
}
