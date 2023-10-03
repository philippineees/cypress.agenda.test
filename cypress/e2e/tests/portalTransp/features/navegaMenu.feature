Feature: Usuário abre o menu de Parametro Gerais

    Background:
    Given O usuário está logado no portal transparência

    Scenario: acessa a página de parametros do rodapé
    When clica no módulo Parametro Gerais
    Then clica em configurações de rodapé e acessa a pagina

    Scenario: acessa a página de CRP - Certificado de Regularidade Previdenciária
    When clica no módulo Certificados e Demonstrativos 
    Then clica no submódulo CRP - Certificado de Regularidade Previdenciária 


