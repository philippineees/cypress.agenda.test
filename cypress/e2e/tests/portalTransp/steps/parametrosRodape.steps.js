import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import loginPage from "../pages/login/login.page"
import navegaMenuPage from "../pages/menu/navegaMenu.page"
import parametrosRodapePage from "../pages/parametros/parametrosRodape.page"


Given ('O usuário está na página de parametros do rodapé', () => {
    loginPage.navegaURL()
    loginPage.logar()
    loginPage.PaginaInicial()
    navegaMenuPage.parametroGeral()
    navegaMenuPage.configuraRodape()
})  

When ('seleciona o estado', () => {
    parametrosRodapePage.slcEstado()
}) 

When ('seleciona a cidade', () => {
    parametrosRodapePage.slcCidade()
})   

When ('seleciona o tipo de cliente', () => {
    parametrosRodapePage.slcTipoCliente()
}) 

When ('clica no botão confirmar para salvar', () => {
    parametrosRodapePage.btnConfirmar()
})  

Then ('usuário configurou a base de dados para o portal', () => {
    cy.get('[value="2316"]').should('have.text', 'CUIABA')
}) 