

function escolha(){
    var num1 = Number(prompt("Digite o 1º número: "))
    var num2= Number(prompt("Digite o 2º número: "))
    var menu = String(prompt("Selecione uma opção do menu: \n A->Somar. \n B->Subtrair. \n C->Multiplicar. \n D->Dividir. \n S->Sair"))
    
        if(menu == 's' || menu == 'S'){

        }else{
            if(menu == 'A' || menu == 'a' ){
                soma(num1,num2) 
                escolha()
           }else if(menu == 'B' || menu == 'b' ){
                    diferenca(num1,num2)
                    escolha()
                }else if(menu == 'C' || menu == 'c' ){
                        multiplicacao(num1, num2)
                        escolha();
                    }else if(menu == 'D' || menu == 'd' ){
                            divisao(num1, num2)
                            escolha()       
                        }else {
                                alert('Opção inválida, digite novamente:')
                                escolha()
                            }
            }
           

}

function soma(a,b){
    var operacao = a+b
    alert(`A soma entre ${a} e ${b} é: ${operacao}.`)
}

function diferenca(num1, num2){
    var operacao 
    if(num1>num2){
        operacao = num1 - num2
        alert(`A diferença entre ${num1} e ${num2} é: ${operacao}.`)
        
    }if(num2>num1){
        operacao = num2 - num1
        alert(`A diferença entre ${num2} e ${num1} é: ${operacao}.`)
       
    }else{
        operacao = 0
        alert(`A diferença entre ${num2} e ${num1} é: ${operacao}.`)
        
    }
}


function multiplicacao(x, y){
    var operacao = x*y
    alert(`O produto entre ${x} e ${y} é: ${operacao}.`)

}

function divisao(num1, num2){
    var operacao
    if(num1!= 0 || num2!= 0){
        if(num1 != 0){
            operacao = num2/num1
            alert((`O quociente de ${num2} por ${num1} é ${operacao}`))
        }
        else if(num2!=0){
            operacao = num1/num2
            alert((`O quociente de ${num1} por ${num2} é ${operacao}`))
        }
    }else{
        alert('Impossível dividir por zero.')

    }


}