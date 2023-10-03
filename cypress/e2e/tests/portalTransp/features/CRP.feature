Feature: Consultar o histórico de eventos 

    Scenario: Usuário cadastra um Certificado de Regularidade Previdenciária
    Given O usuário está na página de CRP
    When seleciona a operação de inclusão
    Then preenche o número dos eventos e realiza a consulta de inclusão
 
    