/* 
O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

    OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

        passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        passo 2 - alterar a imagem do personagem grande
        passo 3 - alterar o nome do personagem grande
        passo 4 - alterar a descrição do personagem grande */


// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
// passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles 

/*const itemCiclope = document.getElementById('ciclope') /*const significa que a variavel itemCiclope vai ter um valor constante, ou seja nao poderá ser alterado. documento.getElementById significa pegar o elemento pelo seu ID*/

const personagens = document.querySelectorAll('.personagem');/*aqui esse método vai pesquisar todos os seletores que tem a classe .personagem, mas poderia ser qualquer tag, id ou qualquer coisa. e o tag const estamos criando uma variavel que contem esse metodo */

//passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

/*personagens.addEventListener('click', () => {
    console.log('clicou');
}) /* addEventListener nao funciona em listas, somente em um elemento unico*/

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        //passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado') /*class list faz algo com alguma classe*/
        //adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
        personagem.classList.add('selecionado');

        /* aqui estamos pedindo que para cada item, será feito alguma coisa. no caso quando o mouse entra no elemento que esta com a classe 'personagem' , foi criado outra variavel que busca o elemento que tem a classe '.selecionado', ele entao remove a classe de selecionado quando o mouse entra no elemento, apos isso ele adiciona a classe 'selecionado' no elemento que entrou o mouse */



        /*OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele*/
        const imagemPersonagemGrande = document.querySelector('.personagem-grande'); /* aqui buscamos a imagem do personagem grande quando a ação ocorre ou seja, quando o mouse entra no elemento.*/
        
        //passo 2 - alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value; /*aqui criamos uma variavel que busca no elemento personagem, os atributos do id dele, no caso queremos o valor de id que em cada elemento é o nome do personagem.*/

        imagemPersonagemGrande.src = `./src/imagens/imagens/card-${idPersonagem}.png` /*aqui informamos que a variavel vai mudar o endereço de onde está, mas no meio dela fizemos uma interpolação (unir uma string(texto) com outro string(texto)) e alteramos o texto com uma variavel para que ela mude conforme o id que está ocorrendo a ação do mouse entrar. exemplo passou o mouse no ciclope o caminho muda para o nome do id, no caso ciclope, entao será buscado uma imagem que corresponde a card-ciclope*/

        /*passo 3 - alterar o nome do personagem grande*/
        const nomePersonagem = document.getElementById('nome-personagem');/*aqui criamos uma variavel que busca o elemento pela sua id*/
        nomePersonagem.innerText = personagem.getAttribute('data-name') /*aqui pegamos a variavel e o innerText ou seja o texto dentro dessa variavel vai receber o atributo que está no data-name*/

        /*passo 4 - alterar a descrição do personagem grande */
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
          


        
    })
}) 


/*OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande*/
