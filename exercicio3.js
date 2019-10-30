var vetor = [2, 9, 9, 8, 5, 3, 1, 8, 3, 7]
var maior = 1
var menor = 10

for(var i=0; i<vetor.length;i++){
    if(vetor[i] > maior){
        maior = vetor[i]
    }
    if(vetor[i] < menor){
        menor = vetor[i]
    }
}

alert(`O primeiro elemento do vetor é: ${vetor[0]} e o último elemento do vetor é ${vetor[vetor.length-1]}`)
alert(`O maior elemento do vetor é: ${maior}`)
alert(`O menor elemento do vetor é: ${menor}`)

vetor.sort()
alert(vetor)