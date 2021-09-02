<h1 align="center"> 

![Logo](https://static.wixstatic.com/media/af86ec_5850213055aa4ae8a4ecd4195d65d08d~mv2.png/v1/fill/w_154,h_22,al_c,q_85,usm_0.66_1.00_0.01/logo.webp) </h1>

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#pré-requisitos">Pré-Requisitos</a> • 
 <a href="#rodando-o-back-end-servidor">Rodando Backend</a> • 
 <a href="#tecnologias">Tecnologias</a> •  
  <a href="#autoria">Autoria</a>
</p>

<h1 align="center">Tattoo Studio</h1>

### Sobre

Criação da View em React da API Tattoo Studio.

---
### Pré-requisitos 

Antes de começar, você precisa ter instalado em sua máquina as seguintes ferramentas:

[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

---
### Rodando o projeto localmente (servidor) 

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

As seguintes ferramentas foram usadas na construção do projeto:

- [React](https://reactjs.org/)
- [React-Hook-Form](https://react-hook-form.com/get-started)
- [Styled-Components](https://styled-components.com/docs)
- [React-Router-Dom](https://reactrouter.com/web/guides/quick-start)
- [Moment](https://momentjs.com/)

---
### Visualização

<p>Aqui você pode checar o resultado final do projeto neste <a href="https://mafia-tattoo-studio.herokuapp.com/">Link</a></p>

---
<h1 align="center">Descrição das interfaces</h1>

 <h2>Home</h2>
 
 
### Descrição

<p>Na home, o usuário poderá encontrar informações sobre o estúdio de tatuagem em questão como uma breve descrição da empresa e localização de suas filiais.</p>

### Funcionalidade

<p>Informar o usuário informações sobre filiais, informações essas que são requisitadas de uma API externa.</p>

### Fluxo do Usuário

<p>Usuário passa a seta do seu mouse em cima da suposta foto do estúdio filial e lá mesmo é revelada as informações.</p>

### Caso de sucesso

<p>Em cima da foto irá aparecer informações como:</p>
<ul>
 <li>Nome da unidade</li>
 <li>Endereço</li>
 <li>Telefone</li>
</ul>

### Caso de erro

<p>Não irá retornar nada.</p>

 <h2>Cadastro</h2>
 
 
### Descrição

<p>Essa página é onde o usuário expressa sua certeza de adquirir o serviço, fazendo seu cadastro para que o estúdio possa retornar o contato marcando um horário com o usuário/cliente.</p>

### Funcionalidade

<p>Efetuar o cadastro do usuário como um cliente no banco de dados.</p>

### Fluxo do Usuário

<p>Usuário preenche os campos requeridos e aperta no botão "enviar".</p>

### Caso de sucesso

<p>Sistema efetuará o cadastro do usuário no banco de dados e redirecionará para a página de confirmação, onde o usuário poderá rever as informações passadas, atualizá-las se alguma informação discrepante for percebida e/ou deletar o cadastro caso o usuário mude de idéia. Se tudo estiver certo, ele poderá voltar a página "Home" através de um botão. </p>

### Caso de erro

<p>O próprio formulário retornará o erro de validação.</p>

 <h2>Portfolio</h2>
 
 
### Descrição

<p>Nesta página o usuário poderá visualizar nossos trabalhos já finalizados.</p>

### Funcionalidade

<p>Exibir fotos de tatuagens feitas e filtra-las através de uma simples pesquisa. </p>

### Fluxo do Usuário

<p>Clicar em cada quadradinho para retornar a foto em questão e/ou pesquisar uma palavra chave.</p>

### Caso de sucesso

<p>As fotos em questão irão ser retornadas com uma animação maneira.</p>

### Caso de erro

<p>A animação irá funcionar porém foto nenhuma será retornada.</p>

 <h2>Materiais</h2>
 
 
### Descrição

<p>Aqui o usuário terá mais informações sobre os materiais utilizados no estúdio, protocolos e recomendações de segurança e higiene.</p>

### Funcionalidade

<p>Retornar informações sobre materiais utilizados em um estúdio de tatuagem.</p>

### Fluxo do Usuário

<p>Usuário passa o mouse em cima da imagem do material.</p>

### Caso de sucesso

<p>Irá retornar informações sobre o material.</p>

### Caso de erro

<p>As informações sobre o material não são retornadas.</p>

<h2>Cores usadas na estilização</h2>

<img src="https://scontent.fgru5-1.fna.fbcdn.net/v/t39.30808-6/241324285_4197525107033407_3114816645390422296_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEKntCAJIoaFd9EWdjBjWvakbTOglTXwz2RtM6CVNfDPQRCpMXdEC8Nen2ABDQ_5dRh3E_gotHTCizixTiVjvWJ&_nc_ohc=xsoEEc2iIx8AX-pKcod&tn=c-bAmnl5qPyq6f-o&_nc_ht=scontent.fgru5-1.fna&oh=b8b99d9595202cdc41632c34dce2d4a0&oe=61358083"/>











