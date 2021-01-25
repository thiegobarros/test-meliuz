# Test Meliuz - Thiego Barros

Projeto teste para o processo seletivo de Desenvolvedor Frontend Pleno da Meliuz

## Scripts

Scripts a serem executados no diretório do projeto:


### `npm install`

Script para baixar as dependências do projeto.

### `npm start`

Script para executar o projeto em [http://localhost:3000](http://localhost:3000) que pode ser visto pelo browser.

### `npm test`

Script que executa os testes automatizados.

<!-- ### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information. -->

<!-- ### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it. -->

## Features

Lista de Features pedidas:

### Tela de Listagem de Personagens (Characters Listing)

1. O projeto é uma listagem de personagens, recuperada da API em https://comicvine.gamespot.com/api/characters/?api_key=<YOUR_API_KEY>&format=json
* Está requisição é feita uma vez por reload para garantir a persistência dos dados, para trazer os dados iniciais basta abertar F5. 
2. Ao abrir a tela inicial, deve-se mostrar a lista de personagens e quantos personagens disponíveis existem nessa lista;
* Listagem dos dados é feita em uma tabela, renderizado certas os campos: name, gender, real name, aliases e birth.
* O Número de personagem existentes na tabela está localizado no canto superior esquerdo da tabela.
* Foi adicionada uma coluna "action", onde poderá ser feita a exclusão e favoritagem do personagem.
* Para adicionar um personagem na lista, basta clicar no botão "Add", onde será aberto um modal com as informações a serem cadastradas.
3. Deve ser possível pesquisar pelo nome do personagem. A pesquisa deve retornar os primeiros resultados, porém, não deve ser carregada na lista, a não ser que o usuário clique em “Ver resultados”;
* "Ver resultados" foi substituido pelo botão "Search" para seguir o padrão do inglês.
* O resultados temporários da pesquisas serão mostrados a medida que o usuário vá digitando.
* O usuario poderá acessar a tela de detalhes do personagem clicando em seu nome.
* Quando o usuário clica em "Search" ele vai renderiza o resultados na tabela.
* Para zerar a pesquisas e os campos o usuário poderá apertar o botão "Clear".
4. Ao clicar em um personagem, deve ser possível navegar para a página de detalhes do personagem;
* Para acessar a tela de detalhes basta clicar na linha especifica do personagem.
5. O usuário pode adicionar ou remover um personagem à lista de personagens preferidos;
* Clicando na "Estrela" o personagem em questão é adionado a lista de favoritos, clicando na mesma em um personagem já favoritado removerá o personagem da lista.
6. O usuário pode optar por mostrar apenas os personagens favoritos dele;
* Para filtrar os favoritos na lista, deve-se clicar no botão "Favorites", e para voltar para a lista principal deve-se clicar no mesmo.

### Tela de Detalhes de Personagem (*Character* Details)

7. Na tela de detalhes do personagem, deve ser possível ver todas as imagens disponíveis daquele personagem, assim como nome, gênero, nome real, apelidos, data de nascimento e descrição;
8. Deve ser possível editar os dados do personagem (name, gender, real_name, aliases, birth). Esses dados devem ser persistidos no e devem ser mostrados na listagem;
* Clicando no botão "Edit" acima da página, abrirá um modal onde poderá ser feita a edição das informações do respectivo personagem.
* Clicando no botão voltar é possival acessar de novo a página da listagem, onde será observado que as alterações feitar no personagem persiste na lista.

### Funcionalidades Extras

1. Cadastro de Personagem;
2. Exclusão de Personagem;
3. Ação para limpar Pesquisa;