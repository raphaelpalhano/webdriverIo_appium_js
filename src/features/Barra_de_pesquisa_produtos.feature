Feature: Pesquisar produtos pela barra de pesquisa no App Pague Menos

    Rule: Como cliente da Pague menos, quero buscar por produtos na barra de pesquisa

    Background: Acessando o menu Mais
    Given o acesso ao menu Mais


  @androidApp
  Scenario Outline: Buscando por produto com usuario valido
  Given que efetua login
  When buscar pelo produto "<nome>"
  And acessa os detalhes do produto
  Then deve exibir o titulo "<referencia>"

  Examples:
  |nome                                     |referencia            |
  |Shampoo Pantene Colageno 175ml           | Referência: 61516    |
  |Shampoo Pantene Restauração 175ml        | Referência: 50211    |


  @androidApp
  Scenario Outline: Buscando por produto com usuario deslogado
  Given que não esteja logado
  When buscar pelo produto "<nome>"
  And acessa os detalhes do produto
  Then deve exibir o titulo "<referencia>"

  Examples:
  |nome                                     |referencia            |
  |Suplevit Mulher Com 30 Cápsulas          | Referência: 59280    |
  |Suplevit Mulher Com 60 Cápsulas          | Referência: 47376    |


   @androidApp
  Scenario: Buscando por produto que não existe com usuario deslogado
  Given que não esteja logado
  When buscar pelo produto "Maquinazick"
  Then deve exibir o texto "0 produtos"
