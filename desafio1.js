// Criar um programa que armazena dados da empresa Rocketeseat dentro de um objeto chamado empresa


const empresa = {
    nome: 'Rocketeseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereço: {
        rua:'Rua Guilherme Gembala',
        numero:'260'
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, ${empresa.endereço.numero}`)