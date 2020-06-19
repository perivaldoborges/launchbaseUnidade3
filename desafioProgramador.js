// O PROGRAMA POSSUI O VETOR TECNOLOGIA COM TRÊS LINHAS E DUAS COLUNAS
// O CONSOLE RETORNA O QUE FOR PEDIDO DOS VETORES

const programador = {
    nome : "Perivaldo",
    idade : 26,
    tecnologias : [
        
        { nome: 'C++', especialidade: 'Desktop'},
    

        { nome:'Python', especialidade: 'Data Science'},


        {nome: 'JavaScript', especialidade: 'Web/Mobile'},
    ]

}

console.log(`O usuário ${programador.nome} de ${programador.idade} anos e usa tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)