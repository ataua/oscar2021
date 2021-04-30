# And the Oscar goes to...

Olá! Esse projeto foi desenvolvido como teste técnico para uma vaga de desenvolvedor front end.  

## Tecnologias empregadas no projeto
---
O projeto foi desenvolvido em `Next.JS`, pelo simples motivo que eu tinha curiosidade de conhecer esse framework e, na semana em que o teste me foi encaminhado eu estava estudando e achei uma boa oportunidade para praticar.  
Tentei também utilizar o `TypeScript`, que eu já havia usado mas estava meio enferrujando, mas à medida que o tempo foi acabando, deixei alguns itens no JS mesmo (mas foram poucos).  
No gerenciamento de estado, resolvi utilizar o `useContex` ao invés do `Redux`, meio por curiosidade e também como um desafio, pois eu vejo vagas de emprego pedindo esse conhecimento e achei oportuno pesquisar sobre o tema, que eu ainda não conhecia. Foi **BEM** sofrido, mas no final acho que consegui entender e a aplicação funcionou bonitinha.  
Também dei uma reforçada no `Sass` (que eu utilizava com o `Styled Components`, mas aqui usei o "roots" mesmo) e pesquisei bastante para chegar ao resultado esperado.  
Nos formulários, usei o `React Hook Form` junto som `Yup` para validações. Os requests foram feitos com `Axios`.

## Iniciando
---

Após clonar o repositório, o projeto pode ser rodado com o comando:
```bash
yarn start
```
O comando acima roda a aplicação no endereço [http://localhost:3000](http://localhost:3000).*

Além disso, é servida uma api RESTful na rota [http://localhost:3000/api](http://localhost:3000/api)*, que fornecerá o endpoint para as requisições de administrador -- não foi utilizado banco de dados, como SQlite ou Postgres, por conta do escopo do projeto, que visa apenas o front-end, mas, com um pouco mais de tempo, seria possível implementar essa funcionalidade. Atualmente, os dados estão armazenados em um arquivo `JSON`.  

*(Talvez eu coloque esse conteúdo no Vercel, nesse caso o endereço será o endereço base do projeto no Vercel, e, no caso dos endpoits, + /api/new ou /api/connect)

## Endpoints
---
Os endpoints podem ser acessados pelo Insomnia:
```http
POST http://localhost:3000/api/adm/new [novo usuário]

POST http://localhost:3000/api/adm/connect [autenticação]
<no Header>

Body
{
  "email": ...,
  "password": ...
}

Response: HTTP Status Code (só o código de resposta: 200, 201, 400, 404, 500. Os casos seriam tratados no front de acordo com esses resultados)
```
Planejei ainda servir o conteúdo da lista de filmes por outra rota, mas percebi que não haveria necessidade de manipular essa lista, então fiz um import normal no componente que faz a sua renderização.  
## Dificuldades e problemas
---
Como dito acima, foram utilizadas tecnologias com que eu não estava habituado, e tive que pesquisar bastante para fazer tudo funcionar corretamente; ao final do prazo, o desespero bateu e cheguei a imaginar que não conseguiria entregar, devido às dificuldades enfrentadas. No entanto, no último dia, tudo se acertou, e o projeto funcionou como pretendido - com uma excessão: não foram incluídas transições e estilos diferentes para estados (hover, focus, etc) de botões e outros itens. A causa dessa falta foi pura falta de tempo (uma vez que eu acabei gastando muito tempo pesquisando novas tecnologias: _mea culpa_)  

Foi deixado encaminhado um sistema de mensagens, que, no entanto,não foi possível finalizar; sua base está registrada no Context, porém faltou a lógica para disparar os alertas conforme interação do usuário. Face à possibilidade de não entregar features necessárias, essa, que era um adicional de UX, foi deixada em segundo plano.

Pesquisei ainda outros itens que poderia ter sido empregados, como validação **JWT** e a biblioteca **SRW** para manipulação das requisições, mas o tempo não permitiu inserir mais nada.  

<br/>
Agradeço pela oportunidade e aproveito para deixar meu cartão de visitas:  
<br/>
<br/>
<br/>

<div style='
  padding: 2rem;
  border: 1px solid white;
  border-radius: 12px;
  box-shadow: 4px 4px 2px #f795;
  width: 360px;
  color: white;
  background: #323
'>

###  Atauã Pinali Doederlein  

<h3>

[Curriculum Vitae](https://drive.google.com/file/d/1eUCG5fEiqnJu-nBaQaZpMHooweJxTFGC/view?usp=sharing)  
</h3>

-  [Email](mailto:ataua.doederlein@gmail.com)  
-  [Fone / WhatsApp](https://api.whatsapp.com/send?phone=5541988652148)  
-  [Linkedin](https://www.linkedin.com/in/ataua-doederlein/)  
-  [Github](https://github.com/ataua)  
-  [Gitlab](https://gitlab.com/ataua_doederlein)
</div>



