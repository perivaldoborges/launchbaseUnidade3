// DESAFIO CALCULO DE APOSENTADORIA//

const nome = "Perivaldo"
const sexo = 'M'
const idade = 36
const contribuicao = 60

const CalculoContribuicao = idade + contribuicao 

const aposentada1 = (sexo == 'F' && contribuicao >= 30 && CalculoContribuicao >= 85) // Essa variável retornará verdadeiro ou falso 
                                                                                    // a depender dos dados inseridos

const aposentado2 = (sexo == 'M' && contribuicao >= 35 && CalculoContribuicao >= 95) // Essa variável retornará verdadeiro ou falso 
                                                                                    // a depender dos dados inseridos

if (aposentada1 || aposentado2){ // Se retornar verdadeiro para uma das variáveis, pode se aposentar

    console.log(`${nome} pode se aposentar`)

}else{ // Se não retornar verdadeiro para uma das variáveis, não pode se aposentar

    console.log(`${nome} não pode se aposentar`)
}