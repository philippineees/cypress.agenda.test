Feature: Autenticação Esocial

    Scenario: Autenticação do login
    Given O usuário acessa o Esocial
    When informa o usuário, senha e clica no botão acessar
    Then usuário está autenticado