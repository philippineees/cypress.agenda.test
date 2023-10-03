Feature: Autenticação Portal Transparência

    Scenario: Autenticação do login do usuário no portal transparência
    Given O usuário acessa o Portal Transparência
    When informa o usuário, senha e clica no botão continuar
    Then usuário está autenticado no portal transparência
