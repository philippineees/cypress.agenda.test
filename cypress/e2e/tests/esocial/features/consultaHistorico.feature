Feature: Consultar o histórico de eventos 
    Background:
    Given O usuário está na página de histórico de envios
    When seleciona o status de concluído

    Scenario: Usuário consulta o histórico de eventos de inclusão concluído
    When seleciona a operação de inclusão
    Then preenche o número dos eventos e realiza a consulta de inclusão

    Scenario: Usuário consulta o histórico de eventos de alteração concluído
    When seleciona a operação de alteração 
    Then preenche o número dos eventos e realiza a consulta de alteração 
