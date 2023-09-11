; # Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

[comment]: <> (Persona: o Voluntário)
A Maria Fernanda tem 40 anos, é Professora de Jardim de infância e é uma filantropa. Ela gostaria de realizar um trabalho voluntário durante o seu fim de semana, mas as ONGs próximas que ela conhece operam durante a semana, apenas. Ela gostaria de encontrar uma ONG perto de casa, que está aceitando voluntários, para não precisar se deslocar muito e realizar um trabalho comunitário. Por sua afinidade, ela prefere uma organização que ajude crianças e adolescentes.

[comment]: <> (Persona: o Curioso)
João Miguel, 20 anos de idade, tem muito interesse no trabalho de ONGs, mas ainda não sabe por onde começar. Ele gostaria de coletar informações sobre as entidades para que possa começar a dar suporte a alguma organização.

[comment]: <> (Persona: o Doador)
A Sofia Isabela tem 28 anos, é médica e quer ajudar ao próximo sempre que possível. Ela possui interesse em doar para ONGs na região, mas gostaria de, além de um catálogo que a permitisse escolher a organização com a qual mais se identificasse, poder acompanhar as ações em que sua doação fosse utilizada. 

[comment]: <> (Persona: a ONG)
A ONG "ComPatas", voltada para a causa animal, quer aumentar sua visibilidade online. Para isso, eles procuram se juntar a um site onde outras ONGs também estejam cadastradas, onde possam receber doações e divulgar publicações, demonstrando o dia-a-dia da organização.
>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Maria Fernanda | Achar uma ONG próxima que aceite voluntários | entrar em contato pelas plataformas de redes sociais e se voluntariar |
| Maria Fernanda | Ver cronograma de uma ONG | Voluntariar-se em seu tempo livre |
| João Miguel | Ver informações sobre ONGs | Conhecer melhor as organizações |
| Sofia Isabela | Catálogo de ONGs próximas | Escolher pra quais dentre elas doar |
| Sofia Isabela | Receber updates da ONG | Monitorar o uso da doação |
| ComPatas | Cadastrar a ONG no site | Aumentar a visiblidade |
| ComPatas | Receber doações | Manter a ONG |
| ComPatas | Vincular redes sociais | Divulgar ações da organização |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID     | Descrição do Requisito                                  | Prioridade | Responsável |
| ------ | ------------------------------------------------------- | ---------- | ----------- |
| RF-001 | Filtar ONGS de acordo com área de atuação               | ALTA       |             |
| RF-002 | Exibir as principais informações da ONG selecionada     | ALTA       |             |
| RF-003 | Exibir cronograma de ação das ONGS                      | MÉDIA      |             |
| RF-004 | Exibir feed do instagram ou facebook de cada ONG        | BAIXA      |             |


### Requisitos não Funcionais

| ID     | Descrição do Requisito                                               | Prioridade |
| ------ | -------------------------------------------------------------------- | ---------- |
|RNF-001 | O sistema deve ser responsivo para rodar em um dispositivos móvel    | MÉDIA      | 
|RNF-002 | Deve processar requisições do usuário em no máximo 3s                | BAIXA      | 
|RNF-003 | Integrar feed do instagram ou facebook de cada ONG                   | BAIXA      |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
