# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito  Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.

**Caso de Teste** | **CT01 - Criar conta usuário**
 :--------------: | ------------
**Procedimento** | 1) Usuário informa nome, sobrenome, email, senha e confirma a senha e clica no botão "Cadastrar". <br>2) A aplicação verifica se os dados são válidos e informa ao usuário caso não sejam.
**Requisitos associados** | RF-004
**Resultado esperado** | Ser redirecionado para a página inicial não logada, sendo agora possível realizar login.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Criar conta ONG**
 :--------------: | ------------
**Procedimento**  | 1) Usuário já cadastrado e logado clica em "Cadastrar ONG" na navbar. <br>2)Usuário é redirecionado para página de cadastro onde deverá informar nome da ONG, endereço completo e causa da organização.
**Requisitos associados** | RF-004
**Resultado esperado** | Prosseguir para a página de edição do perfil da ONG.
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Criar perfil da ONG**
 :--------------: | ------------
**Procedimento**  | Usuário edita as informações do perfil da ONG dentro de um modelo fixo, incluindo adicionar 6 fotos.
**Requisitos associados** | RF-004
**Resultado esperado** | Usuário é redirecionado para o perfil pronto de sua ONG.
**Dados de entrada** | Inserção de dados válidos na página de edição.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Filtrar ONGs por causa**
 :--------------: | ------------
**Procedimento**  | 1) Usuário clica em "Encontrar ONGs" na navbar e é redirecionado para a página de pesquisa. <br>2) Usuário clica em "Filtrar por causa". <br>3) Abre um pop-up com as causas de ONGs cadastradas. <br>4) Usuário seleciona uma ou mais causas. <br>5) Usuário clica no ícone de pesquisa (lupa).
**Requisitos associados** | RF-002
**Resultado esperado** | Usuário é redirecionado para uma página com os resultados em formato de lista.
**Dados de entrada** | Escolha em forma de checkbox.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT05 - Exibir as principais informações de uma ONG**
 :--------------: | ------------
**Procedimento**  | 1) Usuário encontra o nome de uma ONG, seja pela sugestão da página inicial, busca por nome, busca por causa ou por localização. <br>2) Usuário clica no nome dessa ONG.
**Requisitos associados** | RF-003
**Resultado esperado** | Usuário é redirecionado para a página de perfil da ONG selecionada, onde se econtram as principais informações sobre ela. 
**Dados de entrada** | 1) Em caso de sugestão, nenhum. <br>2) Em caso de busca por nome, um nome de ONG cadastrada. <br>3) Em caso de busca por causa, seleção em forma de checkbox. <br>4) E em caso de localização, seleção por meio de clicar na ONG no mapa.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT06 - Exibir feed de publicações de ONGs para usuários**
 :--------------: | ------------
**Procedimento**  | 1) Usuário clica em "Página inicial" na navbar.
**Requisitos associados** | RF-005
**Resultado esperado** | Usuário é redirecionado para a página inicial, onde recebe todos os posts de ONGs em um feed.
**Dados de entrada** | Nenhum.
**Resultado obtido** | Sucesso.




## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*TC-01 - Criar uma conta de usuário*                                         |
|---|---|
|Requisito Associado | RF-004 - Cadastrar uma organização não listada no site. |
|Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/1490964_sga_pucminas_br/Efon7RVz1Q5FvGRTqEyn5jYBm-gZh1RHh63xNaPjrTt9CQ?e=RqDmIu| 

|*Caso de Teste*                                 |*TC-02 - Efetuar Login (usuário autenticado)*                                         |
|---|---|
|Requisito Associado | RF-004 - Cadastrar uma organização não listada no site|
|Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/1490964_sga_pucminas_br/EWgvHXY8ultGrVBOt5tMNWEBGjCtNCIgI5pnOUyGK9Zvjg?e=Mun0xo | 

|*Caso de Teste*                                 |*TC-03 - Criar conta da ONG*                                         |
|---|---|
|Requisito Associado | RF-004 - Cadastrar uma organização não listada no site|
|Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/1490964_sga_pucminas_br/EdYFs8xrpRtJrtheVjfz6bkBYHwmK339OLlU9sTy6PnZjQ | 

|*Caso de Teste*                                 |*TC-04 - Criar peril da ONG*                                         |
|---|---|
|Requisito Associado | RF-004 - Cadastrar uma organização não listada no site|
|Link do vídeo do teste realizado: || 

|*Caso de Teste*                                 |*TC-05 - Receber feed das ONGS*                                         |
|---|---|
|Requisito Associado | RF-005 - Enviar feed de atividades da ONG para os usuários|
|Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/1490964_sga_pucminas_br/EbldRGQSbjxAl4lERFublNYBcHBleOlWiiDE-pANNzsXew?e=AnjVwV| 


|*Caso de Teste*                                 |*TC-06 - Exibir as principais informações de uma ONG*                                         |
|---|---|
|Requisito Associado | RF-005 - Exibir as principais informações das ONGs selecionadas|
|Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/:v:/g/personal/1490964_sga_pucminas_br/ERbTs53Olk1Bg4MwUTabu_cBZEusCOy4idqG9MoUZvcqQA?e=9ooOIc| 








## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.



## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.




Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 5                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.




## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



