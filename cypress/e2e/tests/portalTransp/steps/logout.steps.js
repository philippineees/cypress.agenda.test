import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import loginPage from "../pages/login/login.page"


Given('O usuário está logado no sistema Portal Transparência', () =>{
    loginPage.navegaURL()
    loginPage.logar()
    loginPage.PaginaInicial()
}) 

Then('clica no botão sair e é deslogado do Portal Transparência', () => {
    cy.get('.nav > li > a > span').click()
    cy.contains('Esqueci minha senha?').should('be.visible')
    }) 