/*Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo: */


// Criar um programa com um objeto para armazenar dados de um programador 


// Objeto com dados do programador

const programador ={
      
    nome = "Samuel",
    idade = "20",  
    tecnologias =[
        {
            nome: "php",
            especialidade: "web/mobile"
        },
        {
            nome: "c#",
            especialidade: "desenvolvimento de games"
            
        },
        {
            nome: "python",
            especialidade: "machinne learning"
        }
    ] 
}
console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${tecnologias[2].nome} com especialidade em ${tecnologias[2].especialidade}`)




