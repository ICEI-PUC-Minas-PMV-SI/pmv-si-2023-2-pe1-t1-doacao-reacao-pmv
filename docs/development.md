# Programação de Funcionalidades

O site foi hospedado no https://vercel.com/, sob o endereço https://pmv-si-2023-2-pe1-t1-doacao-reacao-pmv.vercel.app/index.html. Ele usa o JSON SERVER para simular um servidor de dados, hospedado no endpoint https://api-pmv-si-2023-2-pe1-t1-doacao-reacao-pmv-json-server.vercel.app, pertence ao repositório https://github.com/ICEI-PUC-Minas-PMV-SI/API-pmv-si-2023-2-pe1-t1-doacao-reacao-pmv-json-server.

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
|------|------------------------|------------|-----------------|
| RF-001 | Mapear e exibir ONGS de acordo com localização          | ALTA       | ongs-map.html |
| RF-002 | Filtar ONGS de acordo com área de atuação               | ALTA       |search-page.html|
| RF-003 | Exibir as principais informações das ONGs selecionadas  | ALTA       |ongpage.html|
| RF-004 | Cadastrar uma organização não listada no site           | ALTA       |link-social.html|
| RF-005 | Enviar feed de atividades da ONG para os usuários       | ALTA       |home-logged.html|
| RF-006* | Permitir que ONGs criem anúncios de recrutamento de voluntários | MÉDIA |create-post.html|
*Requisito atendido de forma parcial, há espaço pra melhoria.

|RNF-001 | O sistema deve ser responsivo para rodar em um dispositivos móveis   | ALTA      | 
|RNF-002* | Deve processar requisições do usuário em no máximo 3s                | BAIXA     | 
*Para a implementação em servidor foi criado um mecanismo que previne problemas com delay no arquivo ongpgedit.js. Esse pode ser removido.

## Descrição das estruturas:

## Accounts
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id             | Numero (Number)  | Identificador único da conta            | 1                                              |
| email         | Texto (String)         | Email da conta do cliente                         | "mail@example.com"                              |
| password       | Texto (String)             | senha do cliente                       | "123"                            |
| firstname  | Texto (String)  | Primeiro nome do cliente | "João"|
| lastname  | Texto (String)  | Sobrenome do cliente | Silva|
| ongpage  | Numero (Number)  | Identificador da ong que pertence ao cliente | 5 |

## Ongs
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id             | Numero (Number)  | Identificador único da ong            | 1   |
| title  | Texto (String)  | Nome da ong | "QuatroPatas"|
| cause  | Texto (String)  | Causa a que atende a ong | "Pets"|
| belongsToUser  |Numero (Number)  | identificador único do cliente a que a ong pertence | 1|
| location  | Objeto: {  city: Texto (String), uf: Texto (String), neighborhood: Texto (String), street: Texto (String), number: Texto (String), position: Texto (String) } | dados sobre localização da ong | "id": 3, "title": "CRIANÇAS FELIZES", "cause": "Filantropia", "belongsToUser": "ONG", "location": { "city": "Belo Horizonte", "uf": "MG", "neighborhood": "Savassi", "street": "Rua dos Bobos", "number": "0", "position": "-19.919157028198242,-43.93867874145508" }|


