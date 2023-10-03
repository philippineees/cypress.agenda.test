Feature: Usuário configura a base de dados no portal

    Scenario: o usuário configura a base do portal de transparência
    Given O usuário está na página de parametros do rodapé
    When seleciona o estado
    When seleciona a cidade 
    When seleciona o tipo de cliente
    When clica no botão confirmar para salvar 
    Then usuário configurou a base de dados para o portal