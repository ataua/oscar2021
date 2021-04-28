# And the Oscar goes to...

Olá! Esse projeto foi desenvolvido como teste técnico para uma vaga de desenvolvedor front end. Eu desenvolvi o projeto em **Next.JS**, uma vez que já estava estudando esse framework, e achei uma boa para praticar. O mesmo vale para o **TypeScript**, que eu já havia usado mas estava meio enferrujando.  
No gerenciamento de estado, resolvi utilizar o `useContex` ao invés do **Redux**, meio por curiosidade e também como um desafio, pois eu vejo vagas de emprego pedindo esse conhecimento e achei oportuno pesquisar sobre o tema, que eu ainda não conhecia.

## Iniciando

Após clonar o repositório, o projeto pode ser rodado com o comando:
```bash
yarn start
```
O comando acima roda a aplicação no endereço [http://localhost:3000](http://localhost:3000).

Além disso, é servida uma api RESTful na rota [http://localhost:3000/api](http://localhost:3000/api), que fornecerá o endpoint para as requisições de administrador e armazenamento dos dados -- não foi utilizado banco de dados, como SQlite ou Postgres, por conta do escopo do projeto, que visa apenas o front-end, mas, para o futuro, é possível que essa opção seja atualizada. Atualmente, os dados estão armazenados em um arquivo `JSON`. Os endpoints podem ser acessados pelo Insomnia.

