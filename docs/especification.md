# Especificações do Projeto

Definição do problema e ideia de solução a partir da perspectiva do usuário.

## Personas

[comment]: <> (Persona: o Voluntário)
**O Voluntário**: A Maria Fernanda tem 40 anos, é Professora de Jardim de infância e é uma filantropa. Ela gostaria de realizar um trabalho voluntário durante o seu fim de semana, mas as ONGs próximas que ela conhece operam durante a semana, apenas. Ela gostaria de encontrar uma ONG perto de casa, que está aceitando voluntários, para não precisar se deslocar muito e realizar um trabalho comunitário.

**O Doador**: A Sofia Isabela tem 28 anos, é médica e dedica, mensalmente, uma parte de sua renda a doações. Ela possui interesse em doar para ONGs na região, mas gostaria de uma listagem informativa que a permitisse doar para uma organização com a qual se identifique e posteriormente acompanhar as ações da organização para qual doou para doar de novo ou escolher outra. 

**A ONG**: A ONG "ComPatas", voltada para a causa animal, quer aumentar sua visibilidade online. Para isso, eles procuram se juntar a um site onde outras ONGs também estejam cadastradas, onde possam receber doações e divulgar publicações, demonstrando o dia-a-dia da organização.
>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| O Voluntário | Localizar ONG próxima que aceite voluntários | Entrar em contato com a organização para se voluntariar |
| O Voluntário | Ver cronograma de uma ONG | Voluntariar-se em seu tempo livre |
| O Doador | Ver uma informações gerais sobre ONGs da região | Escolher pra quais dentre elas doar |
| O Doador | Receber updates das atividades da ONG | Monitorar o uso da doação |
| ComPatas | Cadastrar a ONG no site | Aumentar a visiblidade |
| ComPatas | Vincular redes sociais | Divulgar ações da organização |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

| ID     | Descrição do Requisito                                  | Prioridade | Responsável |
| ------ | ------------------------------------------------------- | ---------- | ----------- |
| RF-001 | Mapear e exibir ONGS de acordo com localização          | ALTA       |             |
| RF-002 | Filtar ONGS de acordo com área de atuação               | ALTA       |             |
| RF-003 | Exibir as principais informações das ONGs selecionadas  | ALTA       |             |
| RF-004 | Cadastrar uma organização não listada no site           | ALTA       |             |
| RF-005 | Enviar feed de atividades da ONG para os usuários       | ALTA       |             |
| RF-006 | Permitir que ONGs criem anúncios de recrutamento de voluntários | MÉDIA |          |
| RF-007 | Exibir cronograma de ação das ONGS                      | MÉDIA      |             |
| RF-008 | Exibir feed do instagram ou facebook de cada ONG        | BAIXA      |             |


### Requisitos não Funcionais

| ID     | Descrição do Requisito                                               | Prioridade |
| ------ | -------------------------------------------------------------------- | ---------- |
|RNF-001 | O sistema deve ser responsivo para rodar em um dispositivos móveis   | ALTA      | 
|RNF-002 | Deve processar requisições do usuário em no máximo 3s                | BAIXA      | 
|RNF-003 | Integrar feed do instagram ou facebook de cada ONG                   | BAIXA      |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
