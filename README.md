# Readme do Projeto Backend - Novo Site para Curso

Este repositório contém o código-fonte do backend do novo site para o nosso curso, que está sendo desenvolvido para melhorar significativamente a organização, acessibilidade e facilidade de manutenção em comparação com o site anterior. O novo site será uma ferramenta valiosa para estudantes, administradores e professores, permitindo um acesso mais fácil às informações do curso e uma maneira eficaz de divulgar atualizações e novidades.

## Tecnologias Utilizadas
- CMS Strapi: Optamos por utilizar o Strapi como nosso CMS (Content Management System) para gerenciar o conteúdo do site de forma flexível e intuitiva.
- Banco de Dados Supabase: O Supabase é a escolha para o banco de dados, proporcionando escalabilidade e recursos avançados de gerenciamento de dados.

## Configuração do Ambiente
Para configurar o ambiente de desenvolvimento e instalar as dependências necessárias, siga os passos abaixo:

1. Clone este repositório para o seu ambiente local:

```bash
git clone https://github.com/Time-01-Alan-a-corujinha/blog-coens-back.git
```

2. Navegue até a pasta do projeto:

```bash
cd blog-coens-back
```

3. Execute o comando a seguir para instalar todas as dependências:

```bash
npm install
# or
yarn
```

## Executando o Projeto
Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento com o seguinte comando para abrir o Painel de conteúdo como administrador:

```bash
npm run start
# or
yarn start
```

Para abrir o Painel de Conteúdo como desenvolvedor, execute o seguinte comando:

```bash
npx strapi develop
```

Isso iniciará o servidor do Strapi, que será responsável por gerenciar o conteúdo do site.

## Configuração do Banco de Dados
Certifique-se de configurar corretamente o banco de dados Supabase, definindo as variáveis de ambiente apropriadas para a conexão com o banco de dados.

## Contato
Se você tiver dúvidas ou precisar de ajuda relacionada a este projeto, sinta-se à vontade para entrar em contato com a equipe de desenvolvimento em alanacurujinhat@gmail.com.

Esperamos que este novo backend, combinado com o CMS Strapi e o banco de dados Supabase, proporcione uma solução eficiente e flexível para a gestão de conteúdo do nosso novo site. Obrigado por contribuir para o sucesso deste projeto!
