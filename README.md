# Blog SciCrop® - Mini Sistema de Blog
Este projeto foi desenvolvido como parte de um desafio técnico proposto pela SciCrop® para a posição de estágio em Desenvolvimento de Software. O objetivo do desafio era criar um mini sistema de blog utilizando Express.js no back-end e EJS no front-end, com estilização feita através do Tailwind CSS. O sistema inclui funcionalidades de listagem, criação, exibição, edição e exclusão de posts.

## Contexto do Desafio

A SciCrop® desafiou candidatos a desenvolver um sistema de blog simples como uma forma de avaliar suas habilidades técnicas, criatividade e capacidade de resolver problemas. O projeto deveria ser implementado utilizando Express.js ou Django no back-end, com liberdade de escolha para as tecnologias de front-end. O objetivo era criar um sistema funcional que permitisse a interação dos usuários com posts de blog, oferecendo uma experiência de usuário intuitiva e responsiva.

## Objetivos do Projeto

O projeto visava atingir os seguintes objetivos:

1. **Desenvolver um back-end robusto**: Utilizando Express.js para criar uma API RESTful que gerenciasse as operações CRUD (Create, Read, Update, Delete) dos posts.
2. **Construir um front-end dinâmico e responsivo**: Utilizando EJS para renderização do lado do servidor e Tailwind CSS para estilização, garantindo que a interface fosse moderna e utilizável em diferentes dispositivos.
3. **Implementar funcionalidades essenciais do blog**: Como listagem de posts, criação de novos posts, exibição de posts completos, edição e exclusão de posts.
4. **Oferecer uma experiência de usuário aprimorada**: Incluindo interatividade através de JavaScript e garantindo uma navegação suave e intuitiva.

## Instruções para Rodar o Projeto Localmente

### Instalação

1. Clone o repositório para sua máquina local:
    ```bash
    git clone https://github.com/MatheusTerr/blog-express.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd blog-express
    ```

3. Instale as dependências do projeto:
    ```bash
    npm install
    ```

## Execução

1. Inicie o servidor:
    ```bash
    npm run dev
    ```

2. Abra o navegador e acesse:
    ```bash
    http://localhost:3000
    ```

## Dependências

- Node.js
- Express.js
- EJS
- Tailwind CSS
- SQLite
- Body-parser
- Method-override
- Sequelize

## Decisões Técnicas Relevantes

- **Express.js** foi escolhido como o framework principal para o servidor devido à sua simplicidade e flexibilidade, permitindo o rápido desenvolvimento de APIs e middlewares.
- **EJS** foi utilizado como o motor de templates para facilitar a renderização dinâmica de páginas HTML, mantendo o controle sobre a estrutura e estilo das páginas.
- **Tailwind CSS** foi adotado para estilização rápida e eficiente, permitindo um design responsivo e moderno sem a necessidade de escrever CSS customizado.
- **SQLite** foi escolhido como o banco de dados para facilitar o desenvolvimento e testes locais sem a necessidade de configurar um servidor de banco de dados completo.
- **Sequelize** foi utilizado como ORM para simplificar a manipulação de dados no banco de dados, permitindo a definição de modelos e a execução de operações CRUD de forma intuitiva.

## Resumo do Projeto

Este projeto é um blog simples desenvolvido como parte de um desafio técnico da SciCrop®. O objetivo era criar um sistema básico de blog que permitisse a criação, edição e exclusão de posts, bem como a exibição de uma lista de posts ordenados pela data de publicação. A interface é minimalista e responsiva, utilizando Tailwind CSS para a estilização.

## Funcionalidades Implementadas

- **Listagem de Posts**: Exibe todos os posts existentes no blog, ordenados pela data de publicação do mais recente para o mais antigo.
- **Criação de Post**: Formulário para a criação de novos posts com campos para o título e o corpo do texto. Após a submissão, o novo post é salvo no banco de dados e o usuário é redirecionado para a página de listagem de posts.
- **Exibição de Post Selecionado**: Ao clicar no título de um post na página de listagem, o usuário é direcionado para uma página que exibe o post completo, com título e corpo do texto.
- **Edição e Exclusão de Posts**: Funcionalidade adicional para editar e excluir posts existentes. A página de edição permite atualizar o título e o corpo do post, e a exclusão remove o post do banco de dados.

## Aprendizado para o Futuro

- **Melhoria na Segurança**: Implementar autenticação e autorização para controlar o acesso às funcionalidades de criação, edição e exclusão de posts.
- **Testes Automatizados**: Adicionar testes automatizados para garantir a qualidade e a robustez do código.
- **Banco de Dados Mais Robusto**: Explorar a migração para um banco de dados mais robusto, como PostgreSQL, para suportar um maior volume de dados e usuários.
- **Funcionalidades Avançadas**: Adicionar funcionalidades avançadas, como comentários em posts, categorias de posts e busca por conteúdo.

