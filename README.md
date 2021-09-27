<h1 align="center"> 

![Logo](https://static.wixstatic.com/media/af86ec_5850213055aa4ae8a4ecd4195d65d08d~mv2.png/v1/fill/w_154,h_22,al_c,q_85,usm_0.66_1.00_0.01/logo.webp) </h1>

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#pré-requisitos">Pré-Requisitos</a> • 
 <a href="#rodando-o-back-end-servidor">Rodando Backend</a> • 
 <a href="#tecnologias">Tecnologias</a> •  
 <a href="#tecnologias">Descrição das Interfaces</a>
</p>

<h1 align="center">Máfia's Tattoo Studio</h1>

### Sobre

Desenvolvimento da View em React e utilizando a API Tattoo Studio.

---
### Pré-requisitos 

Antes de começar, você precisa ter instalado em sua máqusina as seguintes ferramentas:

[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

---
### Rodando o Back End (servidor) 

```bash
# Clone este repositório
$ git clone <https://github.com/cardosovanessa/tattoostudio-front>

# Acesse a pasta do projeto no terminal/cmd
$ cd tattoostudio-front

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

---
### Tecnologias

As seguintes ferramentas foram utilizadas na construção do projeto:

- [React](https://reactjs.org/)
- [React Hook Form](https://react-hook-form.com/get-started)
- [Styled Components](https://styled-components.com/docs)
- [React Router Dom](https://reactrouter.com/web/guides/quick-start)
- [Moment](https://momentjs.com/)

---
<h2 align="center">Descrição das interfaces</h2>
<p align="center"><a href="https://mafia-tattoo-studio.herokuapp.com/">Clique aqui</a> para conferir o resultado final do projeto.</p>

___
 
 <h3 align="center">Home</h3>

*O usuário poderá encontrar as informações sobre a história do estúdio, contato e a localidade das filiais.*

✅ Fluxo do usuário/ Case de sucesso 
*Ao passar com o mouse sobre as imagens, aparecerão as informações sobre localidade e contato.*
```
Nome da unidade;
Endereço;
Telefone; 
```
___

<h3 align="center">Cadastro</h3>

*Nesta página é fornecida a opção de cadastro, caso o usuário tenha interesse em agendar um horário, deverá realizar o cadastro para que o estúdio possa entrar em contato e realizar o agendamento.*

✅ Fluxo do usuário/ Case de sucesso 

*Após o usuário preencher todos os campos requeridos e apertar o botão "enviar", o sistema efetuará o cadastro do usuário no banco de dados e o redirecionará para a página de confirmação, onde o usuário poderá rever os dados inseridos, atualizá-los caso necessário e/ ou deletar o cadastro caso mude de ideia. Se os dados estiverem corretos, poderá voltar para a página "Home" através do botão.*

⚠️ Case de erro 

*Se o formulário não for preenchido corretamente, retornará um erro de validação para que seja corrigido.*

---

 <h3 align="center">Portfólio</h3>

*O usuário poderá pesquisar temas de tattoos e conferir nossos projetos já realizados.*

✅ Fluxo do usuário/ Case de sucesso

*Além da barra de pesquisa, o usuário poderá clicar em cada "quadradinho" para visualizar algumas imagens do nosso portfólio com animações.*

---

 <h3 align="center">Materiais</h3>

*Lugar ideal para obter informações sobre os materiais utilizados no estúdio, critérios e recomendações de segurança e higiene.*

✅ Fluxo do usuário/ Case de sucesso 

*Ao passar com o mouse em cima das imagens dos materiais, retornará as informações sobre cada material específico.*

---
 <h3 align="center">Autoria</h3>
<p>Feito com ❤️ por Vanessa, Cinthia, Bárbara e Pedro.</p>

