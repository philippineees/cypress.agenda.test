Feature: Autenticação Sisprev

    Scenario: Autenticação do login
    Given O usuário acessa o Sisprev
    When informa o usuário, a senha e clica no botão acessar
    Then usuário está autenticado no sisprev