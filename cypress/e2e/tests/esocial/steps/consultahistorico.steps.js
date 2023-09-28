import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import loginPage from "../pages/login/login.page"
import consultahistoricoPage from "../pages/login/consultahistorico.page"

Given ('O usuário está na página de histórico de envios', () => {
    loginPage.navegaURL()
    loginPage.logar()
    loginPage.selecionaBaseDados()
}) 

When ('seleciona o status de concluído', () => {
    consultahistoricoPage.statusConcluido()
}) 

When ('seleciona a operação de inclusão', () => {
    consultahistoricoPage.operacaoInclusao()
}) 

Then('preenche o número dos eventos e realiza a consulta de inclusão', () => {
    consultahistoricoPage.selecionaEvento()   
  });


When ('seleciona a operação de alteração', () => {
    cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').should('be.visible').click()
    cy.get('#mat-option-1').click()
})   

Then ('preenche o número dos eventos e realiza a consulta de alteração', () => {
    consultahistoricoPage.selecionaEvento()
}) 

