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

### Requisitos Não Funcionais

|ID    | Descrição do Requisito | Prioridade | Artefato Criado |
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
| location  | Objeto: {  city: Texto (String), uf: Texto (String), neighborhood: Texto (String), street: Texto (String), number: Texto (String), position: Texto (String) } | dados sobre localização da ong |  { "city": "Belo Horizonte", "uf": "MG", "neighborhood": "Savassi", "street": "Rua dos Bobos", "number": "0", "position": "-19.919157028198242,-43.93867874145508" }|
| title  | Texto (String)  | Nome da ong | "QuatroPatas"|

## Comments
Essa feature não foi utilizada na implementação final do projeto
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| id             | Numero (Number)  | Identificador único do comentário            | 1   |
| body  | Texto (String)  | Conteúdo do comentário | "Que post legal!!!"|
| postId             | Numero (Number)  | Identificador único do post a que o comentário está relacionado | 1   |

## Ongpages
| **Nome**        | **Tipo**           | **Descrição**                                          | **Exemplo**                                                                                                   |
|:---------------:|:------------------:|:-------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------:|
| id              | Numero (Number)    | Identificador único da página da ong                            | 2                                                                                                            |
| ongname         | Texto (String)     | Nome da ong                                            | "ABRAÇADORES DE ÁRVORES"                                                                                     |
| heading1        | Texto (String)     | Título da seção 1                                      | "Desde 1969"                                                                                                  |
| heading2        | Texto (String)     | Título da seção 2                                      | "Nossa Missão"                                                                                               |
| heading3        | Texto (String)     | Título da seção 3                                      | "Atuação"                                                                                                    |
| bio1            | Texto (String)     | Texto explicativo para a seção 1                        | "Acreditamos que abraçar árvores não só auxilia em liberar energias negativas, como também evita que sejam cortadas por políticos, madeireiras ou lenhadores." |
| bio2            | Texto (String)     | Texto explicativo para a seção 2                        | "Toda árvore é importante, desde aquela que ainda é uma muda até uma sequóia"                                 |
| bio3            | Texto (String)     | Texto explicativo para a seção 3                        | "Nos reunimos toda semana na praça da Savassi, em Belo Horizonte, para abraçar árvores. Acreditamos que, ao abraçar uma árvore, estamos nos conectando com a natureza e com o universo." |
| bio4            | Texto (String)     | Texto explicativo para a seção 4                        | "Somos contra toda forma de desmatamento. Acreditamos que a natureza é sagrada e deve ser preservada."        |
| donationinfo    | Texto (String)     | Informações sobre doações                              | "Para doar e salvar uma árvore, nosso pix é: 123.456.789-00."                                                  |
| belongsTo       | Numero (Number)    | Identificador único do cliente a que a ong pertence    | 1                                                                                                            |
| img1            | Texto (String)     | URL da imagem 1                                        | "https://cdn.pixabay.com/photo/2018/02/02/17/29/nature-3125912_1280.jpg"                                       |
| img2            | Texto (String)     | URL da imagem 2                                        | "https://cdn.pixabay.com/photo/2020/07/03/10/28/waterfall-5365926_640.jpg"                                     |
| img3            | Texto (String)     | URL da imagem 3                                        | "https://cdn.pixabay.com/photo/2015/06/08/15/21/palm-trees-802019_640.jpg"                                    |
| img4            | Texto (String)     | URL da imagem 4                                        | "https://cdn.pixabay.com/photo/2022/05/12/16/04/trees-7191822_640.png"                                        |
| img5            | Texto (String)     | URL da imagem 5                                        | "https://cdn.pixabay.com/photo/2015/11/11/03/47/evening-1038148_640.jpg"                                      |
| img6            | Texto (String)     | URL da imagem 6                                        | "https://cdn.pixabay.com/photo/2018/10/11/04/33/vietnam-3738879_640.jpg"                                      |
