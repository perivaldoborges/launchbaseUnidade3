// OS OBJETOS SÃO SEPARADOS POR SUAS CARACTERÍSTICAS SEMELHANTES //
// O PROGRAMA FUNCIONA SEMELHANTE A UMA PLANILHA ONDE ELE BUSCA O USUÁRIO
// NA LINHA EMPRESA E COLUNA NOME, EM SEGUIDA PROCURA A LINHA EMPRESA COLUNA ENDEREÇO

const usuario = {

    nome: "Perivaldo",

        empresa: { 
        
            nome: "Rocketseat",

            cor: "Roxo",

            foco: "Programação",

            endereco: "Rua Guilherme Gembala, 260"
        },
}


console.log(`A empresa ${usuario.empresa.nome} está localizada na ${usuario.empresa.endereco}`)

console.log(`O nome do usuário é ${usuario.nome}`)



